import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const feature1 = createSlice({
    name: 'feature1',
    initialState,
    reducers: {
        getFeature1Data: (state, action) => {
            return {...state}
        },
        getFeature1DataSuccess: (state, action) => {
            return {...state, value: action.payload}
        },
        getFeature1DataFailure: (state, action) => {
            return {...state, value: null}
        }
    },
})

// Action creators are generated for each case reducer function
export const { getFeature1Data, getFeature1DataSuccess, getFeature1DataFailure} = feature1.actions

export default feature1.reducer