import { join } from 'path';
// eslint-disable-next-line-import/no-extraneous-dependencies
import CopyPlugin from 'copy-webpack-plugin';

import { rootDir, outputPath } from '../utils/env';

const config = {
    patterns: [
        { from: join(rootDir, 'src/app/assets/images'), to: join(outputPath, 'assets/images'), force: true },
        { from: join(rootDir, 'src/app/assets/jsons'), to: join(outputPath, 'assets/jsons'), force: true },
        { from: join(rootDir, 'public/configs'), to: outputPath, force: true },
        // { from: join(rootDir, 'public/maintenance.html'), to: outputPath, force: true },
        // { from: join(rootDir, 'public/app-versions'), to: outputPath, force: true },
    ],
};

export const copyPlugin = new CopyPlugin(config);