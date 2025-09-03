import { join } from 'path';
import { rootDir } from '../utils/env';

export const aliasItems = {
    app: join(rootDir, '/src/app'),
    store: join(rootDir, '/src/store'),
    styles: join(rootDir, '/src/styles'),
    utils: join(rootDir, '/src/utils'),
    assets: join(rootDir, '/src/assets'),
    locales: join(rootDir, '/src/locales'),
    types: join(rootDir, '/src/types'),
    pages: join(rootDir, '/src/pages'),
    // services: join(rootDir, '/src/app/services'),
}