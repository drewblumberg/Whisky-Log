import { combineReducers } from '@reduxjs/toolkit';
import whiskyList from '../features/whiskyList/WhiskyListReducer';

const rootReducer = combineReducers({whiskyList});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;