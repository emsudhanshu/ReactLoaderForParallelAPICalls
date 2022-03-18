import { takeLatest, call, put } from 'redux-saga/effects'
import { getFeature2Data, getFeature2DataSuccess, getFeature2DataFailure } from './feature2Slice'
import axios from 'axios'
import store from '../../app/store'

const requestGetPost = () => {
   return axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
}

export function* handleGetPost() {
    store.dispatch({ type: "loader/incrementTotalCalls" })
    try {
        const response = yield call(
            requestGetPost
        )
        store.dispatch({ type: "loader/incrementDoneCalls" })
        const { data } = response
        yield put(getFeature2DataSuccess({...data}))
    }
    catch (error) {
        store.dispatch({ type: "loader/incrementDoneCalls" })
        yield put(getFeature2DataFailure(error.message))
    }
}

const feature2Saga = function* () {
    yield takeLatest(getFeature2Data.type, handleGetPost)
}

export default feature2Saga