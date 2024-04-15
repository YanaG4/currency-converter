import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import currencyApi from '../../api/currencyApi';
import currencyInfoApi from '../../api/currencyInfoApi';
//InitialState
const initialState = {
    currencyCodes: [],
    curencyBase: '',
    fromCurrency: '',
    toCurrency: '',
    fromCurrencyMUV: 2, //minorUnitValue
    toCurrencyMUV: 2, //minorUnitValue
    currentExchangeRate: 1,
    exchangeRates: {},
    amount: 1.00,
    currencyInfo: [{}],
    currencyChartTimeseries: [{}],
    currencyChartEndtDate: (() => {
        const now = new Date();
        const [formatedDate] = now.toISOString().split('T');
        return formatedDate
    })(),
    currencyChartStartDate: '',
    date: '',
    status: {},
}
//Fetching data
export const fetchCurrencyRates = createAsyncThunk('currency/fetchCurrencyRates', async () => {
    const response = await currencyApi.get('latest')
    return response.data
})

export const fetchCurrencyInfo = createAsyncThunk('currency/fetchCurrencyInfo', async () => {
    const response = await currencyInfoApi.get('data/currencyInfo.json')
    return response.data
})

export const fetchCurrencyTimeseries = createAsyncThunk('currency/fetchCurrencyTimeseries',
    async (_, { getState }) => {
        const { currency } = getState()
        const response = await currencyApi
            .get(`timeseries?start_date=${currency.currencyChartStartDate}&end_date=${currency.currencyChartEndtDate}&base=${currency.fromCurrency}&symbols=${currency.toCurrency}`)
        return response.data
    })
//Slice
const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setFromCurrency: (state, { payload }) => {
            state.fromCurrencyMUV = state.currencyInfo.find(currency => currency.code === payload).minorUnitValue
            state.fromCurrency = payload
            state.currentExchangeRate = 1 / state.exchangeRates[payload] * state.exchangeRates[state.toCurrency]
        },
        setToCurrency: (state, { payload }) => {
            state.toCurrencyMUV = state.currencyInfo.find(currency => currency.code === payload).minorUnitValue
            state.toCurrency = payload
            state.currentExchangeRate = 1 / state.exchangeRates[state.fromCurrency] * state.exchangeRates[payload]
        },
        setAmount: (state, { payload }) => {
            state.amount = payload
        },
        setCurrencyChartStartDate: (state, { payload }) => {
            const now = new Date();
            const timeAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - (payload - 1));
            const [formatedDate] = timeAgo.toISOString().split('T');
            state.currencyChartStartDate = formatedDate
        },
    },
    extraReducers: {
        [fetchCurrencyInfo.pending]: () => {
        },
        [fetchCurrencyInfo.fulfilled]: (state, { payload }) => {
            const currencyCodes = payload.map(currency => currency.code)
            return { ...state, currencyCodes, currencyInfo: payload, status: { ...state.status, currencyInfo: 'fulfilled' } }
        },
        [fetchCurrencyRates.pending]: () => {
        },
        [fetchCurrencyRates.fulfilled]: (state, { payload }) => {
            const apiCurrencyCodes = Object.keys(payload.rates)
            const fromCurrency = payload.base
            const toCurrency = (apiCurrencyCodes.includes('USD') && fromCurrency !== 'USD') ? 'USD' : 'EUR'
            const currentExchangeRate = payload.rates[toCurrency]

            const currencyCodes = state.currencyCodes.filter(code => apiCurrencyCodes.includes(code))

            let exchangeRates = {}
            currencyCodes.forEach(code => {
                exchangeRates[code] = payload.rates[code]
            });

            return { ...state, currencyCodes, currencyBase: payload.base, fromCurrency, toCurrency, currentExchangeRate, exchangeRates, date: payload.date, status: { ...state.status, currencyRates: 'fulfilled' } }
        },
        [fetchCurrencyRates.rejected]: (state) => {
            return { ...state, status: { ...state.status, currencyRates: 'rejected' } }
        },
        [fetchCurrencyTimeseries.pending]: (state) => {
            return { ...state, status: { ...state.status, currencyTimeseries: 'pending' } }
        },
        [fetchCurrencyTimeseries.fulfilled]: (state, { payload }) => {
            if (!payload.rates) {
                console.error('No rates available in the payload:', payload);
                return { ...state, status: { ...state.status, currencyRates: 'error - no rates data' } };
            }
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const currencyChartTimeseries = []
            for (const [date, exchnageRateObject] of Object.entries(payload.rates)) {
                currencyChartTimeseries.push({
                    'date': `${monthNames[date.slice(5, 7) - 1]} ${date.slice(8)}`,
                    'exchangeRate': Object.values(exchnageRateObject)[0]
                })
            }
            return { ...state, currencyChartTimeseries, status: { ...state.status, currencyTimeseries: 'fulfilled' } }
        },
        [fetchCurrencyTimeseries.rejected]: (state) => {
            return { ...state, status: { ...state.status, currencyTimeseries: 'rejected' } }
        },
    }
})

export const { setFromCurrency, setToCurrency, setAmount, setCurrencyChartStartDate } = currencySlice.actions

export const getCurrencyCodes = (state) => state.currency.currencyCodes
export const getFromCurrency = (state) => state.currency.fromCurrency
export const getToCurrency = (state) => state.currency.toCurrency
export const getFromCurrencyMUV = (state) => state.currency.fromCurrencyMUV
export const getToCurrencyMUV = (state) => state.currency.toCurrencyMUV
export const getExchangeRate = (state) => state.currency.currentExchangeRate
export const getCurrencyInfo = (state) => state.currency.currencyInfo
export const getAmount = (state) => state.currency.amount
export const getDate = (state) => state.currency.date
export const getStatus = (state) => state.currency.status
export const getCurrencyChartTimeseries = (state) => state.currency.currencyChartTimeseries

export default currencySlice.reducer
