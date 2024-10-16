import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Api} from '~api/Api';
import {Race} from './types';
import {RootState} from '~store/store';

export const fetchRaces = createAsyncThunk(
  'race/fetchRaces',
  async (args: {id: string; page: number}) => {
    const response = await Api.drivers.race(args?.id, args?.page);
    return response.data;
  },
);

const raceSlice = createSlice({
  name: 'race',
  initialState: {
    list: [] as Race[],
    length: 0,
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchRaces.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchRaces.fulfilled, (state, action) => {
      state.list = action.payload?.MRData.RaceTable.Races ?? [];
      state.length = action.payload?.MRData.total ?? 0;
      state.loading = false;
    });
    builder.addCase(fetchRaces.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Не смог получить список водителей';
    });
  },
});

export default raceSlice.reducer;

export const getRaceSelector = (state: RootState) => state.race;
