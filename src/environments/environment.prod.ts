import { merge } from 'lodash';
import { commonEnv } from './environment.common';

const prodEnv = {
  production: true,
  rentalManagementServiceHost: 'http://localhost:81',
  fleetManagementServiceHost: 'http://localhost:82',
  fleetCoordinationServiceHost: 'http://localhost:83',
};

export const environment = merge(commonEnv, prodEnv);
