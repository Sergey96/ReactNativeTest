import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Api} from '~api/Api';
import {Driver} from './types';
import {RootState} from '~store/store';

export const fetchDrivers = createAsyncThunk(
  'driver/fetchDrivers',
  async (page: any) => {
    const response = await Api.drivers.list(page);
    return response.data;
  },
);

const driverSlice = createSlice({
  name: 'driver',
  initialState: {
    drivers: [] as Driver[],
    length: 0,
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDrivers.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchDrivers.fulfilled, (state, action) => {
      state.drivers = action.payload?.MRData.DriverTable.Drivers ?? [];
      state.length = action.payload?.MRData.total ?? 0;
      state.loading = false;
    });
    builder.addCase(fetchDrivers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Не смог получить список водителей';
    });
  },
});

export default driverSlice.reducer;

export const getDriverSelector = (state: RootState) => state.driver;
