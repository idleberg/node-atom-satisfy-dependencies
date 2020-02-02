'use strict';

import { install as installDependencies } from 'atom-package-deps';
import { readManifest } from 'atom-read-manifest';

const defaultOptions: PackageOptions = {
  logger: console.log,
  showPrompt: true
};

/**
 * Installs and optionally enables package dependencies
 * @param {string} packageName
 * @param {Object} options
 */
async function satisfyDependencies(packageName: string, userOptions: PackageOptions = {}): Promise<void> {
  const options: PackageOptions = {...defaultOptions, ...userOptions};
  const manifest: any = await readManifest(packageName);

  installDependencies(manifest.name, options.showPrompt);
  enableDependencies(manifest['package-deps'], options);
}

/**
 * Enables packages dependencies
 * @param {Object} manifest
 * @param {Object} options
 */
function enableDependencies(manifest, options) {
  if (options.enableDependencies) {
    manifest['package-deps'].forEach(packageDependency => {
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
