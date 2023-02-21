// for redux
// import { createStore } from 'redux';
// redux toolkit
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {counter : 0, showCounter: true};

// using redux toolkit
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrement(state) {
            state.counter--;
        },
        toggle(state) {
            state.showCounter = !state.showCounter; 
        }
    }
 
});

const authInitialState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: "auth",
    initialState: authInitialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }

    },
});

// using normal redux
// const counterReducer = (state = initialState, action) => {
    
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'increase'){
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     }

//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }

//     if(action.type === 'toggle'){
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         };
//     }
//     return state;
// };


// const store = createStore(counterReducer);

const store = configureStore({
    reducer: {counter : counterSlice.reducer, auth: authSlice.reducer}
});

export const counterActions = counterSlice.actions;

export default store;
