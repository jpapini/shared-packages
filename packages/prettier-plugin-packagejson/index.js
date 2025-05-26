// @ts-check

import detectIndent from 'detect-indent';
import { detectNewlineGraceful as detectNewline } from 'detect-newline';
import gitHooks from 'git-hooks-list';
import isPlainObject from 'is-plain-obj';
import babelParsers from 'prettier/parser-babel';
import semver from 'semver';
import sortObjectKeys from 'sort-object-keys';

const parser = babelParsers.parsers['json-stringify'];

const pipe =
    (fns) =>
    (x, ...args) =>
        fns.reduce((result, fn) => fn(result, ...args), x);
const onArray = (fn) => (x) => (Array.isArray(x) ? fn(x) : x);
const onStringArray = (fn) => (x) =>
    Array.isArray(x) && x.every((item) => typeof item === 'string') ? fn(x) : x;
const uniq = onStringArray((xs) => [...new Set(xs)]);
const sortArray = onStringArray((array) => array.toSorted());
const uniqAndSortArray = pipe([uniq, sortArray]);
const onObject =
    (fn) =>
    (x, ...args) =>
        isPlainObject(x) ? fn(x, ...args) : x;
const sortObjectBy = (comparator, deep) => {
    const over = onObject((object) => {
        const obj = deep
            ? Object.fromEntries(Object.entries(object).map(([key, value]) => [key, over(value)]))
            : object;

        return sortObjectKeys(obj, comparator);
    });

    return over;
};
const sortObject = sortObjectBy();
const sortURLObject = sortObjectBy(['type', 'url']);
const sortPeopleObject = sortObjectBy(['name', 'email', 'url']);
const sortDirectories = sortObjectBy(['lib', 'bin', 'man', 'doc', 'example', 'test']);
const overProperty =
    (property, over) =>
    (object, ...args) =>
        Object.hasOwn(object, property)
            ? { ...object, [property]: over(object[property], ...args) }
            : object;
const sortGitHooks = sortObjectBy(gitHooks);

const parseNameAndVersionRange = (specifier) => {
    // Ignore anything after > & rely on fallback alphanumeric sorting for that
    const [nameAndVersion] = specifier.split('>');
    const atMatches = [...nameAndVersion.matchAll('@')];
    if (!atMatches.length || (atMatches.length === 1 && atMatches[0].index === 0)) {
        return { name: specifier };
    }
    const splitIndex = atMatches.pop().index;
    return {
        name: nameAndVersion.substring(0, splitIndex),
        range: nameAndVersion.substring(splitIndex + 1),
    };
};

const sortObjectBySemver = sortObjectBy((a, b) => {
    const { name: aName, range: aRange } = parseNameAndVersionRange(a);
    const { name: bName, range: bRange } = parseNameAndVersionRange(b);

    if (aName !== bName) return aName.localeCompare(bName, 'en');
    if (!aRange) return -1;
    if (!bRange) return 1;

    const aMin = semver.minVersion(aRange);
    const bMin = semver.minVersion(bRange);

    if (!aMin && !bMin) return 0;
    if (!aMin) return -1;
    if (!bMin) return 1;

    return semver.compare(aMin, bMin);
});

const getPackageName = (ident) => {
    const index = ident.indexOf('@', ident.startsWith('@') ? 1 : 0);
    // This should not happen, unless user manually edit the package.json file
    return index === -1 ? ident : ident.slice(0, index);
};

const sortObjectByIdent = (a, b) => {
    const packageNameA = getPackageName(a);
    const packageNameB = getPackageName(b);

    if (packageNameA < packageNameB) return -1;
    if (packageNameA > packageNameB) return 1;
    return 0;
};

// sort deps like the npm CLI does (via the package @npmcli/package-json)
// https://github.com/npm/package-json/blob/b6465f44c727d6513db6898c7cbe41dd355cebe8/lib/update-dependencies.js#L8-L21
const sortDependenciesLikeNpm = sortObjectBy((a, b) => a.localeCompare(b, 'en'));

// https://github.com/eslint/eslint/blob/acc0e47572a9390292b4e313b4a4bf360d236358/conf/config-schema.js
const eslintBaseConfigProperties = [
    // `files` and `excludedFiles` are only on `overrides[]`
    // for easier sort `overrides[]`,
    // add them to here, so we don't need sort `overrides[]` twice
    'files',
    'excludedFiles',
    // baseConfig
    'env',
    'parser',
    'parserOptions',
    'settings',
    'plugins',
    'extends',
    'rules',
    'overrides',
    'globals',
    'processor',
    'noInlineConfig',
    'reportUnusedDisableDirectives',
];
const sortEslintConfig = onObject(
    pipe([
        sortObjectBy(eslintBaseConfigProperties),
        overProperty('env', sortObject),
        overProperty('globals', sortObject),
        overProperty(
            'overrides',
            onArray((overrides) => overrides.map(sortEslintConfig)),
        ),
        overProperty('parserOptions', sortObject),
        overProperty(
            'rules',
            sortObjectBy(
                (rule1, rule2) =>
                    rule1.split('/').length - rule2.split('/').length || rule1.localeCompare(rule2),
            ),
        ),
        overProperty('settings', sortObject),
    ]),
);
const sortVSCodeBadgeObject = sortObjectBy(['description', 'url', 'href']);

const sortPrettierConfig = onObject(
    pipe([
        // sort keys alphabetically, but put `overrides` at bottom
        (config) =>
            sortObjectKeys(config, [
                ...Object.keys(config)
                    .filter((key) => key !== 'overrides')
                    .sort(),
                'overrides',
            ]),
        // if `config.overrides` exists
        overProperty(
            'overrides',
            // and `config.overrides` is an array
            onArray((overrides) =>
                overrides.map(
                    pipe([
                        // sort `config.overrides[]` alphabetically
                        sortObject,
                        // sort `config.overrides[].options` alphabetically
                        overProperty('options', sortObject),
                    ]),
                ),
            ),
        ),
    ]),
);

const sortVolta = sortObjectBy(['node', 'npm', 'yarn']);

const pnpmBaseConfigProperties = [
    'peerDependencyRules',
    'neverBuiltDependencies',
    'onlyBuiltDependencies',
    'onlyBuiltDependenciesFile',
    'allowedDeprecatedVersions',
    'allowNonAppliedPatches',
    'updateConfig',
    'auditConfig',
    'requiredScripts',
    'supportedArchitectures',
    'overrides',
    'patchedDependencies',
    'packageExtensions',
];

const sortPnpmConfig = onObject(
    pipe([
        sortObjectBy(pnpmBaseConfigProperties, true),
        overProperty('overrides', sortObjectBySemver),
    ]),
);

// fields marked `vscode` are for `Visual Studio Code extension manifest` only
// https://code.visualstudio.com/api/references/extension-manifest
// Supported fields:
// publisher, displayName, categories, galleryBanner, preview, contributes,
// activationEvents, badges, markdown, qna, extensionPack,
// extensionDependencies, icon

// field.key{string}: field name
// field.over{function}: sort field subKey
const fields = [
    { key: '$schema' },
    { key: 'name' },
    /* vscode */ { key: 'displayName' },
    { key: 'version' },
    /* yarn */ { key: 'stableVersion' },
    { key: 'private' },
    { key: 'description' },
    /* vscode */ { key: 'categories', over: uniq },
    { key: 'keywords', over: uniq },
    { key: 'homepage' },
    { key: 'bugs', over: sortObjectBy(['url', 'email']) },
    { key: 'repository', over: sortURLObject },
    { key: 'funding', over: sortURLObject },
    { key: 'license', over: sortURLObject },
    /* vscode */ { key: 'qna' },
    { key: 'author', over: sortPeopleObject },
    {
        key: 'maintainers',
        over: onArray((maintainers) => maintainers.map(sortPeopleObject)),
    },
    {
        key: 'contributors',
        over: onArray((contributors) => contributors.map(sortPeopleObject)),
    },
    /* vscode */ { key: 'publisher' },
    { key: 'sideEffects' },
    { key: 'type' },
    { key: 'imports' },
    { key: 'exports' },
    { key: 'main' },
    { key: 'svelte' },
    { key: 'umd:main' },
    { key: 'jsdelivr' },
    { key: 'unpkg' },
    { key: 'module' },
    { key: 'source' },
    { key: 'jsnext:main' },
    { key: 'browser' },
    { key: 'react-native' },
    { key: 'types' },
    { key: 'typesVersions' },
    { key: 'typings' },
    { key: 'style' },
    { key: 'example' },
    { key: 'examplestyle' },
    { key: 'assets' },
    { key: 'bin', over: sortObject },
    { key: 'man' },
    { key: 'directories', over: sortDirectories },
    { key: 'files', over: uniq },
    { key: 'workspaces' },
    // node-pre-gyp https://www.npmjs.com/package/node-pre-gyp#1-add-new-entries-to-your-packagejson
    {
        key: 'binary',
        over: sortObjectBy(['module_name', 'module_path', 'remote_path', 'package_name', 'host']),
    },
    { key: 'scripts' },
    { key: 'betterScripts' },
    /* vscode */ { key: 'l10n' },
    /* vscode */ { key: 'contributes', over: sortObject },
    /* vscode */ { key: 'activationEvents', over: uniq },
    { key: 'husky', over: overProperty('hooks', sortGitHooks) },
    { key: 'simple-git-hooks', over: sortGitHooks },
    { key: 'pre-commit' },
    { key: 'commitlint', over: sortObject },
    { key: 'lint-staged' },
    { key: 'nano-staged' },
    { key: 'config', over: sortObject },
    { key: 'nodemonConfig', over: sortObject },
    { key: 'browserify', over: sortObject },
    { key: 'babel', over: sortObject },
    { key: 'browserslist' },
    { key: 'xo', over: sortObject },
    { key: 'prettier', over: sortPrettierConfig },
    { key: 'eslintConfig', over: sortEslintConfig },
    { key: 'eslintIgnore' },
    { key: 'npmpkgjsonlint', over: sortObject },
    { key: 'npmPackageJsonLintConfig', over: sortObject },
    { key: 'npmpackagejsonlint', over: sortObject },
    { key: 'release', over: sortObject },
    { key: 'remarkConfig', over: sortObject },
    { key: 'stylelint' },
    { key: 'ava', over: sortObject },
    { key: 'jest', over: sortObject },
    { key: 'jest-junit', over: sortObject },
    { key: 'jest-stare', over: sortObject },
    { key: 'mocha', over: sortObject },
    { key: 'nyc', over: sortObject },
    { key: 'c8', over: sortObject },
    { key: 'tap', over: sortObject },
    { key: 'oclif', over: sortObjectBy(undefined, true) },
    { key: 'resolutions', over: sortObject },
    { key: 'overrides', over: sortDependenciesLikeNpm },
    { key: 'dependencies', over: sortDependenciesLikeNpm },
    { key: 'devDependencies', over: sortDependenciesLikeNpm },
    { key: 'dependenciesMeta', over: sortObjectBy(sortObjectByIdent, true) },
    { key: 'peerDependencies', over: sortDependenciesLikeNpm },
    // TODO: only sort depth = 2
    { key: 'peerDependenciesMeta', over: sortObjectBy(undefined, true) },
    { key: 'optionalDependencies', over: sortDependenciesLikeNpm },
    { key: 'bundledDependencies', over: uniqAndSortArray },
    { key: 'bundleDependencies', over: uniqAndSortArray },
    /* vscode */ { key: 'extensionPack', over: uniqAndSortArray },
    /* vscode */ { key: 'extensionDependencies', over: uniqAndSortArray },
    { key: 'flat' },
    { key: 'packageManager' },
    { key: 'engines', over: sortObject },
    { key: 'engineStrict', over: sortObject },
    { key: 'volta', over: sortVolta },
    { key: 'languageName' },
    { key: 'os' },
    { key: 'cpu' },
    { key: 'preferGlobal', over: sortObject },
    { key: 'publishConfig', over: sortObject },
    /* vscode */ { key: 'icon' },
    /* vscode */ {
        key: 'badges',
        over: onArray((badge) => badge.map(sortVSCodeBadgeObject)),
    },
    /* vscode */ { key: 'galleryBanner', over: sortObject },
    /* vscode */ { key: 'preview' },
    /* vscode */ { key: 'markdown' },
    { key: 'pnpm', over: sortPnpmConfig },
];

const defaultSortOrder = fields.map(({ key }) => key);
const overFields = pipe(
    fields.map(({ key, over }) => (over ? overProperty(key, over) : undefined)).filter(Boolean),
);

function editStringJSON(json, over) {
    if (typeof json !== 'string') return over(json);

    const { indent, type } = detectIndent(json);
    const endCharacters = json.slice(-1) === '\n' ? '\n' : '';
    const newline = detectNewline(json);
    const parsedJson = JSON.parse(json);

    let result =
        JSON.stringify(over(parsedJson), null, type === 'tab' ? '\t' : indent) + endCharacters;
    if (newline === '\r\n') result = result.replace(/\n/gu, newline);
    return result;
}

const isPrivateKey = (key) => key[0] === '_';
const partition = (array, predicate) =>
    array.reduce(
        (result, value) => {
            result[predicate(value) ? 0 : 1].push(value);
            return result;
        },
        [[], []],
    );
function sortPackageJson(jsonIsh, options = {}) {
    return editStringJSON(
        jsonIsh,
        onObject((json) => {
            let sortOrder = options.sortOrder || defaultSortOrder;

            if (Array.isArray(sortOrder)) {
                const keys = Object.keys(json);
                const [privateKeys, publicKeys] = partition(keys, isPrivateKey);
                sortOrder = [
                    ...sortOrder,
                    ...defaultSortOrder,
                    ...publicKeys.sort(),
                    ...privateKeys.sort(),
                ];
            }

            return overFields(sortObjectKeys(json, sortOrder), json);
        }),
    );
}

/**
 * @param {string} path Path of the file to test
 * @returns {boolean} True if the path is a package.json file
 */
export const testPath = (path) => {
    return /(?:^|\\|\/)package\.json$/u.test(path);
};

/**
 * @type {import('prettier').Plugin['parsers']}
 */
export const parsers = {
    'json-stringify': {
        ...parser,
        preprocess: (text, options) => {
            const preprocessedText = parser.preprocess?.(text, options) ?? text;
            const sortPackageJsonOptions =
                Array.isArray(options.packageSortOrder) && options.packageSortOrder.length !== 0
                    ? { sortOrder: options.packageSortOrder }
                    : undefined;
            return testPath(options.filepath)
                ? sortPackageJson(preprocessedText, sortPackageJsonOptions)
                : preprocessedText;
        },
    },
};

/**
 * @type {import('prettier').Plugin['options']}
 */
export const options = {
    packageSortOrder: {
        category: 'Global',
        type: 'string',
        array: true,
        default: [{ value: [] }],
        description: 'Custom ordering array',
    },
};
