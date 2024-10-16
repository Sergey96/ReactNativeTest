import {configureStore} from '@reduxjs/toolkit';
import DriverSlice from './main/Driver/DriverSlice';
import RaceSlice from './main/Race/RaceSlice';

export const store = configureStore({
  reducer: {
    driver: DriverSlice,
    race: RaceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
