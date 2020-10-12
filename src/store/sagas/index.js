import { all } from 'redux-saga/effects';
import calendarSagas from './calendarSagas';


export default function* staticSagas() {
    yield all([
        calendarSagas(),
    ])
};