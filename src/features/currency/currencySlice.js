import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import currencyApi from '../../api/currencyApi';
import currencyInfoApi from '../../api/currencyInfoApi';

const initialState = {
    currencyCodes: [],
    fromCurrency: '',
    toCurrency: '',
    currentExchangeRate: 0, // or 1?
    exchangeRates: {},
    amount: 1, // or 1?
    currencyInfo: [{}],
    date: '',
    status: 'idle',
}

export const fetchCurrencyRates = createAsyncThunk('currency/fetchCurrencyRates', async () => {
    const response = await currencyApi.get('latest')
    return response.data
})

export const fetchCurrencyInfo = createAsyncThunk('currency/fetchCurrencyInfo', async () => {
    const response = await currencyInfoApi.get('data/currencyInfo.json')
    return response.data
})

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchCurrencyRates.pending]: () => {
            console.log("Currency fetching in progress...");
        },
        [fetchCurrencyRates.fulfilled]: (state, { payload }) => {
            console.log("Currencies fetched successfully")
            const apiCurrencyCodes = Object.keys(payload.rates)
            const fromCurrency = payload.base
            const toCurrency = (apiCurrencyCodes.includes('USD') && fromCurrency !== 'USD') ? 'USD' : 'EUR'
            const currentExchangeRate = payload.rates[toCurrency]

            const currencyCodes = state.currencyCodes.filter(code => apiCurrencyCodes.includes(code))

            let exchangeRates = {}
            exchangeRates = currencyCodes.map(code => { return { ...exchangeRates, [code]: payload.rates[code] } })

            return { ...state, currencyCodes, fromCurrency, toCurrency, currentExchangeRate, exchangeRates, date: payload.date, status: 'success' }
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

export const { } = currencySlice.actions

export const getCurrencyCodes = (state) => state.currecy.currencyCodes
export const getFromCurrency = (state) => state.currecy.fromCurrency
export const getToCurrency = (state) => state.currecy.toCurrency
export const getExchangeRate = (state) => state.currecy.currentExchangeRate
export const getCurrecyInfo = (state) => state.currecy.currencyInfo
export const getAmount = (state) => state.currecy.amount
export const getDate = (state) => state.currecy.date
export const getStatus = (state) => state.currecy.status

export default currencySlice.reducer