// src/reducers/index.js
import { PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT, FETCH_DATA_SUCCESS } from './actionTypes';

// Reducers
const initialState = {
    counter: 0,
};

const counterReducer = (state = initialState, action: PayloadAction) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case DECREMENT:
            return { ...state, counter: state.counter - 1 };
        case FETCH_DATA_SUCCESS:
            return { ...state, counter: action.payload };
        default:
            return state;
    }
};

// Combine Reducers
const rootReducer = combineReducers({
    counter: counterReducer,
    // Add other reducers here if you have more
});

export default rootReducer;
