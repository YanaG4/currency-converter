import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import currencyApi from '../../api/currencyApi';
import currencyInfoApi from '../../api/currencyInfoApi';

const initialState = {
    currencyCodes: [],
    curencyBase: '',
    fromCurrency: '',
    toCurrency: '',
    currencyInfo: [{}],
    date: '',
    status: 'idle',
}

export const fetchCurrencyTimeseries = createAsyncThunk('currency/fetchCurrencyTimeseries', async () => {
    const response = await currencyApi.get('latest')
    return response.data
})

export const fetchCurrencyInfo = createAsyncThunk('currency/fetchCurrencyInfo', async () => {
    const response = await currencyInfoApi.get('data/currencyInfo.json')
    return response.data
})

const currencyChartsSlice = createSlice({
    name: 'currencyCharts',
    initialState,
    reducers: {
        setFromCurrency: (state, { payload }) => {
            state.fromCurrency = payload
        },
        setToCurrency: (state, { payload }) => {
            state.toCurrency = payload
        },
        setAmount: (state, { payload }) => {
            state.amount = payload
        },
    },
    extraReducers: {
        [fetchCurrencyTimeseries.pending]: () => {
            console.log("Currency fetching in progress...");
        },
        [fetchCurrencyTimeseries.fulfilled]: (state, { payload }) => {
            console.log("Currencies fetched successfully")
            const apiCurrencyCodes = Object.keys(payload.rates)
            const fromCurrency = payload.base
            const toCurrency = (apiCurrencyCodes.includes('USD') && fromCurrency !== 'USD') ? 'USD' : 'EUR'
            const currentExchangeRate = payload.rates[toCurrency]

            const currencyCodes = state.currencyCodes.filter(code => apiCurrencyCodes.includes(code))

            let exchangeRates = {}
            currencyCodes.forEach(code => {
                exchangeRates[code] = payload.rates[code]
            });

            return { ...state, currencyCodes, currencyBase: payload.base, fromCurrency, toCurrency, currentExchangeRate, exchangeRates, date: payload.date, status: 'success' }
        },
        [fetchCurrencyInfo.pending]: () => {
            console.log("Currency Info fetching in progress...")
        },
        [fetchCurrencyInfo.fulfilled]: (state, { payload }) => {
            console.log("Currency Info fetched successfully")
            const currencyCodes = payload.map(currency => currency.code)
            return { ...state, currencyCodes, currencyInfo: payload, status: 'fetching' }
        }
    }
})

export const { setFromCurrency, setToCurrency, setAmount } = currencyChartsSlice.actions

export const getCurrencyCodes = (state) => state.currency.currencyCodes


export default currencyChartsSlice.reducer