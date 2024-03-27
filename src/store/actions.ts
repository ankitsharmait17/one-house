import { INCREMENT, DECREMENT, FETCH_DATA_SUCCESS } from './actionTypes';

// Action Creators
export const increment = () => ({
    type: INCREMENT,
});

export const decrement = () => ({
    type: DECREMENT,
});

export const fetchDataSuccess = (data: any) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

// Async Action Creator
export const fetchData = () => {
    return async (dispatch: any) => {
        try {
            // Perform API call here, for example using fetch
            const response = await fetch('your_api_endpoint');
            const data = await response.json();
            dispatch(fetchDataSuccess(data));
        } catch (error) {
            console.error('Error fetching data:', error);
            // You can dispatch an action for error handling if needed
        }
    };
};

export type CounterActionTypes = ReturnType<typeof increment | typeof decrement>;
