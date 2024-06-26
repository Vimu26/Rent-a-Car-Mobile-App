import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ITopRatedCars} from '../../features/Home/Home';

interface FavCarsState {
  favCars: ITopRatedCars[];
}

const initialState: FavCarsState = {
  favCars: [],
};

const FavCarSlice = createSlice({
  name: 'favoriteCars',
  initialState,
  reducers: {
    setFavCars: (state, action: PayloadAction<ITopRatedCars[]>) => {
      state.favCars = action.payload;
    },
    reset: state => {
      state.favCars = [];
    },
  },
});

export const {setFavCars, reset} = FavCarSlice.actions;
export default FavCarSlice.reducer;
