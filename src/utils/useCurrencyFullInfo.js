import { useSelector } from "react-redux";
import { getToCurrency, getFromCurrency, getCurrencyInfo } from '../features/currency/currencySlice'

export const useCurrencyFullInfo = ({ currencyCode }) => {
    const currencyInfo = useSelector(getCurrencyInfo)

    const currencyFullInfo = currencyInfo.find(currency => currency.code === currencyCode)

    return currencyFullInfo
}
export const useToCurrencyFullInfo = () => {
    const toCurrency = useSelector(getToCurrency)
    const currencyInfo = useSelector(getCurrencyInfo)

    const toCurrencyInfo = currencyInfo.find(currency => currency.code === toCurrency)

    return toCurrencyInfo
}
export const useFromCurrencyFullInfo = () => {
    const fromCurrency = useSelector(getFromCurrency)
    const currencyInfo = useSelector(getCurrencyInfo)

    const fromCurrencyInfo = currencyInfo.find(currency => currency.code === fromCurrency)

    return fromCurrencyInfo
}