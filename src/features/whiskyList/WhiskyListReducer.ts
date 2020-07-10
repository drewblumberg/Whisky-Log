import { createSlice } from '@reduxjs/toolkit';
// import { AppThunk, AppDispatch } from '../store/store'
import Whisky from '../../models/whisky';

const testWhisky:Whisky = {
    id: Math.random().toString(36).substr(2, 9),
    name: "Old Grand-Dad Bonded Bourbon",
    type: "Kentucky Straight Bourbon Whiskey",
    age: "At least 4 years",
    proof: 100,
    bonded: true,
    distillery: "Beam Suntory",
    country: "United States",
    image: "https://images.freshop.com/00080686408406/32681511f32a626cd2e37bbc4ffd7eba_large.png"
};

const initialState: Whisky[] = [testWhisky];

const whiskySlice = createSlice({
    name: 'whiskys',
    initialState,
    reducers: {}
});

export default whiskySlice.reducer;