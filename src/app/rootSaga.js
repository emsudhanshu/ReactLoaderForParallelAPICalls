import { all } from 'redux-saga/effects'
import feature1Saga from '../features/feature1/feature1Saga'
import feature2Saga from '../features/feature2/feature2Saga'

function* rootSaga() {
    yield all([
        feature1Saga(),
        feature2Saga()
    ])
}

export default rootSaga