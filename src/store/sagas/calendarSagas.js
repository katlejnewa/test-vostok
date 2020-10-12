import {
    put,
    call,
    takeEvery,
    select
} from 'redux-saga/effects';
import axios from 'axios';
import * as selectors from '../selectors';
import { API_HOST, API_KEY } from '../../vars';

import actions from '../actions/calendarActions'

const {
    getHolidaysRequestAction,
    getHolidaysSuccessAction,
    getHolidaysFailureAction,
    setNextFestAction
} = actions;

const HANDLERS = {
    * [getHolidaysRequestAction]() {
        try {
            const type = yield select(selectors.type);

            const { data } = yield call(axios, {
                method: 'get',
                url: `${API_HOST}/holidays?&api_key=${API_KEY}&country=RU&year=2020&language=ru&type=${type}`,
                headers: { 'content-type': 'application/json' },
            });
            yield put(getHolidaysSuccessAction(data.response.holidays));
            let today = new Date();
            let nextFestIndex = null;

            for( let i = 0; i < data.response.holidays.length; i++) {
                const date = new Date(data.response.holidays[i].date.datetime.year, data.response.holidays[i].date.datetime.month - 1, data.response.holidays[i].date.datetime.day - 1);
                if(nextFestIndex !== null) break;
                if (date > today ) {
                    nextFestIndex = i;
                }
            };
            yield put(setNextFestAction(data.response.holidays[nextFestIndex]))

        } catch (e) {
            yield put(getHolidaysFailureAction(e));
        }
    },
};

export default function* calendarSagas() {
    for (const key in HANDLERS) {
        if (Object.prototype.hasOwnProperty.call(HANDLERS, key)) {
            yield takeEvery(key, HANDLERS[key]);
        }
    }
}

