import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from '../features/currency/currencySlice'
import interestingFactsReducer from '../features/interestingFacts/interestingFactsSlice'

export default configureStore({
    reducer: {
        currency: currencyReducer,
        interestingFacts: interestingFactsReducer,
    }
})