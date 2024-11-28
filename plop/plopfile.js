// @ts-check
import url from 'node:url';

const ROOT_DIR = url.fileURLToPath(new URL('..', import.meta.url));
const TEMPLATE_DIR = url.fileURLToPath(new URL('./templates', import.meta.url));

/** @param {import('plop').NodePlopAPI} plop */
export default function (plop) {
    const toKebabCase = plop.getHelper('kebabCase');

    plop.setGenerator('package', {
        description: 'Create a new package',

        prompts: [
            {
                type: 'input',
                name: 'packageName',
                message: 'What is the name of the package?',
                validate: (input) => input.trim() !== '' || 'Package name cannot be empty.',
                filter: (input) => toKebabCase(input.trim().toLocaleLowerCase()),
            },
            {
                type: 'list',
                name: 'packageType',
                message: 'What type of package do you want to create?',
                choices: [
                    { name: 'CommonJS', value: 'cjs' },
                    { name: 'TypeScript', value: 'ts' },
                ],
            },
        ],

        actions: (answers) => {
            if (!answers) return [];
            const type = answers.packageType;

            if (type === 'cjs') {
                /** @type {import('plop').ActionType[]} */
                return [
                    {
                        type: 'addMany',
                        destination: `${ROOT_DIR}/packages/${answers.packageName}/`,
                        base: `${TEMPLATE_DIR}/package-cjs/`,
                        templateFiles: `${TEMPLATE_DIR}/package-cjs/**`,
                        globOptions: { dot: true },
                        skipIfExists: false,
                        force: true,
                    },
                ];
            } else if (type === 'ts') {
                /** @type {import('plop').ActionType[]} */
                return [
                    {
                        type: 'addMany',
                        destination: `${ROOT_DIR}/packages/${answers.packageName}/`,
                        base: `${TEMPLATE_DIR}/package-ts/`,
                        templateFiles: `${TEMPLATE_DIR}/package-ts/**`,
                        globOptions: { dot: true },
                        skipIfExists: false,
                        force: true,
                    },
                ];
            }

            return [];
        },
    });
}
