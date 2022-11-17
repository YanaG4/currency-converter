import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import interestingFactsApi from '../../api/interestingFactsApi';

const initialState = {
    facts: [{}],
    status: 'idle',
}

export const fetchInterestingFacts = createAsyncThunk('interestingFacts/fetchInterestingFacts', async () => {
    const response = await interestingFactsApi.get('data/interestingFacts.json')
    return response.data
})

const interestingFactsSlice = createSlice({
    name: 'interestingFacts',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchInterestingFacts.fulfilled]: (state, { payload }) => {
            console.log('Interesting facts successfuly fetched');
            return { ...state, facts: payload, status: 'fulfilled' }
        }
    }
})

export const { } = interestingFactsSlice.actions

export const getFacts = (state) => state.interestingFacts.facts
export const getStatus = (state) => state.interestingFacts.status

export default interestingFactsSlice.reducer