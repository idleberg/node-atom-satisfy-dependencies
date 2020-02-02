/**
 * Installs and optionally enables package dependencies
 * @param {string} packageName
 * @param {Object} options
 */
declare function satisfyDependencies(packageName: string, userOptions?: PackageOptions): Promise<void>;
export { satisfyDependencies };
