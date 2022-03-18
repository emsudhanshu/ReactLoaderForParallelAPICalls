import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalCalls: 0,
    doneCalls: 0
}

export const loader = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        incrementTotalCalls: (state) => {
            let totalCalls = state.totalCalls + 1
            return { ...state, totalCalls }
        },
        incrementDoneCalls: (state) => {
            let doneCalls = state.doneCalls + 1
            return { ...state, doneCalls }
        }
    },
})

export const { incrementTotalCalls, incrementDoneCalls } = loader.actions

export default loader.reducer