import Config from 'webpack-chain';

export { withBasePath } from './with-base-path';
export { loadStyles } from './load-styles';
export { loadJs } from './load-js';

/** extensions for vue */
export const vExtensions = ['.cjs', '.mjs', '.js', '.cts', '.mts', '.ts', '.jsx', '.tsx', '.vue', '.json'];

/**
 * to configure the extensions used by the Vue project
 * @param confInstance the webpack-chain Config instance
 * @returns the instance self
 */
export const configExtensions = (confInstance: Config): Config =>
    vExtensions
        .reduce((confExts, ext) => confExts.add(ext), confInstance.resolve.extensions)
        .end()
        .end();

/**
 * get kb
 * @param kbNum kb's num, default 1
 * @returns kb
 */
export const kb = (kbNum = 1): number => 1024 * kbNum;
