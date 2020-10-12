'use strict';

import { install as installDependencies } from 'atom-package-deps';
import { readManifest } from 'atom-read-manifest';

const defaultOptions: SatisfyDependenciesOptions = {
  logger: console.log,
  showPrompt: true
};

/**
 * Installs and optionally enables package dependencies
 * @param {string} identifier
 * @param {Object} options
 */
async function satisfyDependencies(identifier: string, userOptions: SatisfyDependenciesOptions = {}): Promise<void> {
  const options: SatisfyDependenciesOptions = {
    ...defaultOptions,
    ...userOptions
  };

  const manifest: any = await readManifest(identifier);

  await installDependencies(manifest['name'], options.showPrompt);
  enableDependencies(manifest['package-deps'], options);
}

/**
 * Enables packages dependencies
 * @param {Object} manifest
 * @param {Object} options
 */
function enableDependencies(manifest, options: SatisfyDependenciesOptions) {
  if (options.enableDependencies) {
    manifest['package-deps'].map(packageDependency => {
      if (atom.packages.isPackageDisabled(packageDependency)) {
        if (atom.inDevMode()) {
          options.logger(`[${manifest.name}] Enabling package dependency '${packageDependency}'`);
        }

        atom.packages.enablePackage(packageDependency);
      }
    });
  }
}

export {
  satisfyDependencies
};
