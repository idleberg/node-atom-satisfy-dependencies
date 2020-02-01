'use strict';

import { install as installDependencies } from 'atom-package-deps';
import { readManifest } from 'atom-read-manifest';

const satisfyDependencies = async (packageName: string, showPrompt: boolean = true): Promise<void> => {
  const manifest: any = await readManifest(packageName);

  installDependencies(packageName, showPrompt);

  manifest['package-deps'].forEach(packageDependency => {
    if (atom.packages.isPackageDisabled(packageDependency)) {
      atom.packages.enablePackage(packageDependency);
    }
  });
};

export {
  satisfyDependencies
};
