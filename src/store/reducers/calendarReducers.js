import { handleActions } from 'redux-actions';

import actions from '../actions/calendarActions';


const {
    getHolidaysRequestAction,
    getHolidaysSuccessAction,
    getHolidaysFailureAction,
    setNextFestAction,
    setHolidaysTypeAction,
    selectFestRequestAction
} = actions;

const initialState = {
    nextFest: null,
    allFests: [],
    selectedFest: null,
    type: 'national'
};
const getHolidaysSuccess = (state, action) => (
    {
        ...state,
        allFests: action.payload
    }
);
const selectFestRequest = (state, action) => (
    {
        ...state,
        selectedFest: action.payload
    }
);
const setNextFest = (state, action) => (
    {
        ...state,
        nextFest: action.payload
    }
);
const setHolidaysType = (state, action) => (
    {
        ...state,
        type: action.payload
    }
);


export default handleActions({
    [getHolidaysSuccessAction]: getHolidaysSuccess,
    [selectFestRequestAction]: selectFestRequest,
    [setNextFestAction]: setNextFest,
    [setHolidaysTypeAction]: setHolidaysType
}, initialState);