/**
 * Installs and optionally enables package dependencies
 * @param {string} identifier
 * @param {Object} options
 */
declare function satisfyDependencies(identifier: string, userOptions?: SatisfyDependenciesOptions): Promise<void>;
export { satisfyDependencies };
