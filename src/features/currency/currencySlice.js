//import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//import { EXCHANGE_RATE_API } from '../../constants/api';
import currencyApi from '../../api/currencyApi';

const initialState = {
    currencyCodes: [],
    fromCurrency: '',
    toCurrency: '',
    exchangeRate: 0, // or 1?
    amount: 1, // or 1?
    currencyInfo: [{}],
    date: '',
    status: 'idle',
}

export const fetchCurrencyCodes = createAsyncThunk('currency/fetchCurrencyCodes', async () => {
    const response = await currencyApi.get('latest')
    return response.data
})

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchCurrencyCodes.pending]: () => {
            console.log("Fetching in progress...");
        },
        [fetchCurrencyCodes.fulfilled]: (state, { payload }) => {
            console.log("Fetched successfully");
            const currencyCodes = Object.keys(payload.rates)
            const fromCurrency = payload.base
            const toCurrency = (currencyCodes.includes('USD') && fromCurrency !== 'USD') ? 'USD' : 'EUR'
            const exchangeRate = payload.rates[toCurrency]
            return { ...state, currencyCodes, fromCurrency, toCurrency, exchangeRate, date: payload.date, status: 'success' }
        },
    }
})

export const { } = currencySlice.actions

export const getCurrencyCodes = (state) => state.currecy.currencyCodes
export const getFromCurrency = (state) => state.currecy.fromCurrency
export const getToCurrency = (state) => state.currecy.toCurrency
export const getExchangeRate = (state) => state.currecy.exchangeRate
export const getCurrecyInfo = (state) => state.currecy.currencyInfo
export const getAmount = (state) => state.currecy.amount
export const getDate = (state) => state.currecy.date
export const getStatus = (state) => state.currecy.status

export default currencySlice.reducer