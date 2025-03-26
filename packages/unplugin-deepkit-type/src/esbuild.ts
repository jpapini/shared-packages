import { createEsbuildPlugin } from 'unplugin';

import { unpluginFactory } from './unplugin';

export default createEsbuildPlugin(unpluginFactory);
