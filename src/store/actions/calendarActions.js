import { createActions } from 'redux-actions';

const TYPES = [
    'GET_HOLIDAYS_REQUEST_ACTION',
    'GET_HOLIDAYS_SUCCESS_ACTION',
    'GET_HOLIDAYS_FAILURE_ACTION',

    'SET_NEXT_FEST_ACTION',

    'SET_HOLIDAYS_TYPE_ACTION',

    'SELECT_FEST_REQUEST_ACTION'
];

export default createActions(...TYPES);