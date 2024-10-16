import {DriverMRData} from '~store/main/Driver/types';
import {IResponse} from '../types';
import {RaceMRData} from '~store/main/Race/types';
import {get, getOffset} from '~api/utils';

export const drivers = {
  list: (page: number): Promise<IResponse<DriverMRData>> => {
    const offset = getOffset(page);
    return get(`/f1/drivers.json?limit=10&offset=${offset}`);
  },
  race: (id: string, page: number): Promise<IResponse<RaceMRData>> => {
    const offset = getOffset(page);
    return get(
      `https://ergast.com/api/f1/drivers/${id}/results.json?limit=10&offset=${offset}`,
    );
  },
};
