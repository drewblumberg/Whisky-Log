import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '../../store/store';
import { readWhiskys } from '../../api/local/apiGateway';
import Whisky from '../../models/whisky';

const initialState: Whisky[] = [];

const whiskySlice = createSlice({
    name: 'whiskys',
    initialState,
    reducers: {
        receiveTodos(state, action: PayloadAction<Whisky[]>) {
            return action.payload;
        },
    }
});

export const loadWhiskys = (): AppThunk => async (dispatch: AppDispatch) => {
    const todos = await readWhiskys();
    dispatch(whiskySlice.actions.receiveTodos(todos))
  }

export default whiskySlice.reducer;