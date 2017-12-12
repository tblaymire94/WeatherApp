import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
    }
    return state;
}

// Concat will not change the existing array (state) it creates a new array that contains the old stuff along with the new data.
// The return state.concat([action.payload.data]); is the same as return [action.payload.data, ...state];
