import { configureStore } from '@reduxjs/toolkit'
import currencyChartsReducer from '../features/currency/currencyChartsSlice'
import currencyReducer from '../features/currency/currencySlice'
import interestingFactsReducer from '../features/interestingFacts/interestingFactsSlice'

export default configureStore({
    reducer: {
        currency: currencyReducer,
        currencyCharts: currencyChartsReducer,
        interestingFacts: interestingFactsReducer,
    }
})