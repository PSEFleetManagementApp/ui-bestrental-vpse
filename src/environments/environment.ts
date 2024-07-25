// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { merge } from 'lodash';
import { commonEnv } from './environment.common';

const devEnv = {
  production: false,
  rentalManagementServiceHost: 'http://localhost:81',
  fleetManagementServiceHost: 'http://localhost:82',
  fleetCoordinationServiceHost: "http://localhost:83",
};

export const environment = merge(commonEnv, devEnv);
