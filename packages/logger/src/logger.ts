import { createConsola } from 'consola';

export const logger = createConsola({
    formatOptions: {
        date: false,
        colors: true,
        columns: 0,
    },
});
