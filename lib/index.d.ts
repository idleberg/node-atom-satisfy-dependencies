/**
 * Installs and optionally enables package dependencies
 * @param {string} identifier
 * @param {Object} options
 */
declare function satisfyDependencies(identifier: string, userOptions?: PackageOptions): Promise<void>;
export default satisfyDependencies;
