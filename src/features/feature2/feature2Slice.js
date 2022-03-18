import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const feature2 = createSlice({
    name: 'feature2',
    initialState,
    reducers: {
        getFeature2Data: (state, action) => {
            return {...state}
        },
        getFeature2DataSuccess: (state, action) => {
            return {...state, value: action.payload}
        },
        getFeature2DataFailure: (state, action) => {
            return {...state, value: null}
        }
    },
})

// Action creators are generated for each case reducer function
export const { getFeature2Data, getFeature2DataSuccess, getFeature2DataFailure} = feature2.actions

export default feature2.reducer