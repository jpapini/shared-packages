export const isUndefined = (value: unknown): value is undefined => typeof value === 'undefined';

export const isNull = (value: unknown): value is null => value === null;

export const isNil = (value: unknown): value is null | undefined =>
    isUndefined(value) || isNull(value);

export const isString = (value: unknown): value is string =>
    value instanceof String || typeof value === 'string';

export const isStringValid = (value: unknown): value is string =>
    isString(value) && value.trim().length > 0;

export const isNumber = (value: unknown): value is number =>
    typeof value === 'number' && Number.isFinite(value);

export const isInteger = (value: unknown): value is number =>
    isNumber(value) && Number.isInteger(value);

export const isFloat = (value: unknown): value is number =>
    isNumber(value) && !Number.isInteger(value);

export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean';

export const isArray = (value: unknown): value is unknown[] => Array.isArray(value);

export const isArrayValid = (value: unknown): value is unknown[] =>
    isArray(value) && value.length > 0;

export const isObject = (value: unknown): value is object =>
    !isNil(value) && typeof value === 'object';

export const isPlainObject = (value: unknown): value is Record<string, unknown> => {
    if (!isObject(value)) return false;
    const proto: unknown = Object.getPrototypeOf(value);
    if (proto === null) return true;
    const ctor =
        Object.prototype.hasOwnProperty.call(proto, 'constructor') &&
        (proto as { constructor: unknown }).constructor;
    return (
        typeof ctor === 'function' &&
        ctor instanceof ctor &&
        Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object)
    );
};

export const isEmpty = (value: unknown): boolean =>
    isNil(value) ||
    (isString(value) && value.length === 0) ||
    (isArray(value) && value.length === 0) ||
    (isObject(value) && Object.keys(value).length === 0);

export const isDate = (value: unknown): value is Date => value instanceof Date;
