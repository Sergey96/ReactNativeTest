import {BaseMRData} from '~api/types';

export interface DriverMRData extends BaseMRData {
  DriverTable: DriverTable;
}

export interface DriverTable {
  circuitId: string;
  constructorId: string;
  Drivers: Driver[];
}

export interface Driver {
  driverId: string;
  permanentNumber?: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}
