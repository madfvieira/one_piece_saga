import { OPfacts } from './config.js';

const initialState = {
    curSagas: [],
    filterOPfacts: [],
};

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case 'ADD_FILTER_OP_SAGA':
            if (state.curSagas.indexOf(action.payload.saga < 0)) {
                const updOPfacts = state.curSagas;
                updOPfacts.push(action.payload.saga);

                return ({
                    ...state,
                    curSagas: updOPfacts
                });
            }

            return ({
                ...state
            });
        case 'REMOVE_FILTER_OP_SAGA':
            return {
                ...state,
                curSagas: state.curSagas.filter( (fact) => {
                    return fact !== action.payload.saga;
                })
            };

        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;
    }
};
