# Type-check utils

This package provides a set of utilities to check the type of values.

## How to use

1. Install the package and its required peer dependencies:

```bash
pnpm add @jpapini/type-check
```

2. Use the functions in your code:

```typescript
import { isString } from '@jpapini/type-check';

console.log(isString('hello')); // true
console.log(isString(42)); // false
```

## Author

-   Julien Papini <julien.papini@gmail.com>
