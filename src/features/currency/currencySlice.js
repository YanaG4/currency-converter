import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import currencyApi from '../../api/currencyApi';
import currencyInfoApi from '../../api/currencyInfoApi';
//InitialState
const initialState = {
    currencyCodes: [],
    curencyBase: '',
    fromCurrency: '',
    toCurrency: '',
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
    currencyChartStartDate: (() => {
        const now = new Date();
        const weekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6);
        const [formatedDate] = weekAgo.toISOString().split('T');
        return formatedDate
    })(),
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
        //console.log(`timeseries?start_date=${currency.currencyChartStartDate}&end_date=${currency.currencyChartEndtDate}&base=${currency.fromCurrency}&symbols=${currency.toCurrency}`);
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
            state.fromCurrency = payload
            state.currentExchangeRate = 1 / state.exchangeRates[payload] * state.exchangeRates[state.toCurrency]
        },
        setToCurrency: (state, { payload }) => {
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
            console.log("Currency Info fetching in progress...")
        },
        [fetchCurrencyInfo.fulfilled]: (state, { payload }) => {
            console.log("Currency Info fetched successfully")
            const currencyCodes = payload.map(currency => currency.code)
            return { ...state, currencyCodes, currencyInfo: payload, status: { ...state.status, currencyInfo: 'fulfilled' } }
        },
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
            currencyCodes.forEach(code => {
                exchangeRates[code] = payload.rates[code]
            });

            return { ...state, currencyCodes, currencyBase: payload.base, fromCurrency, toCurrency, currentExchangeRate, exchangeRates, date: payload.date, status: { ...state.status, currencyRates: 'fulfilled' } }
        },
        [fetchCurrencyRates.rejected]: (state) => {
            return { ...state, status: { ...state.status, currencyRates: 'rejected' } }
        },
        [fetchCurrencyTimeseries.pending]: (state) => {
            console.log("Currency Charts fetching in progress...")
            return { ...state, status: { ...state.status, currencyTimeseries: 'pending' } }
        },
        [fetchCurrencyTimeseries.fulfilled]: (state, { payload }) => {
            console.log("Currency Charts fetched successfully")
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
export const getExchangeRate = (state) => state.currency.currentExchangeRate
export const getCurrencyInfo = (state) => state.currency.currencyInfo
export const getAmount = (state) => state.currency.amount
export const getDate = (state) => state.currency.date
export const getStatus = (state) => state.currency.status
export const getCurrencyChartTimeseries = (state) => state.currency.currencyChartTimeseries

export default currencySlice.reducer