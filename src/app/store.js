import { combineReducers, configureStore } from '@reduxjs/toolkit'
import rootSaga from './rootSaga'
import createSagaMiddleware from 'redux-saga'
import feature1Reducer from '../features/feature1/feature1Slice'
import feature2Reducer from '../features/feature2/feature2Slice'
import loaderReducer from '../common/loader/loaderSlice'


const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    feature1: feature1Reducer,
    feature2: feature2Reducer,
    loader: loaderReducer
})

const middlewares = [sagaMiddleware]

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(middlewares),
    devTools : true
})

sagaMiddleware.run(rootSaga)

export default store
