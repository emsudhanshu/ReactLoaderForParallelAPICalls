import { takeLatest, call, put } from 'redux-saga/effects'
import { getFeature1Data, getFeature1DataSuccess, getFeature1DataFailure } from './feature1Slice'
import axios from 'axios'
import store from '../../app/store'

const requestGetUser = () => {
    return axios.get('https://my-json-server.typicode.com/atothey/demo/user')
}

export function* handleGetData() {
    store.dispatch({ type: "loader/incrementTotalCalls" })
    try {
        const response = yield call(
            requestGetUser
        )
        store.dispatch({ type: "loader/incrementDoneCalls" })
        const { data } = response
        yield put(getFeature1DataSuccess({ ...data }))
    }
    catch (error) {
        store.dispatch({ type: "loader/incrementDoneCalls" })
        yield put(getFeature1DataFailure(error.message))
    }
}

const feature1Saga = function* () {
    yield takeLatest(getFeature1Data.type, handleGetData)
}

export default feature1Saga