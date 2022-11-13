import React from 'react'
import './CurrencyOutput.scss'

import { useSelector } from 'react-redux'
import { getToCurrency, getFromCurrency, getExchangeRate, getAmount } from '../../../features/currency/currencySlice'


export default function CurrencyOutput() {


    const toCurrency = useSelector(getToCurrency)
    const fromCurrency = useSelector(getFromCurrency)
    const exchangeRate = useSelector(getExchangeRate)
    const amount = useSelector(getAmount)

    function formatCurrencyResult(exchangeRate) {
        const processedAmount = parseFloat((amount.toString()).replaceAll(',', ''))
        if (processedAmount > 0 && processedAmount) {
            const separatedIntegerDecimalParts = (Number(processedAmount).toFixed(2) * exchangeRate).toString().split('.')
            if (!separatedIntegerDecimalParts[1]) {
                separatedIntegerDecimalParts[1] = '00'
            }
            const integerPartPointTwoDecimalDigits = Number(separatedIntegerDecimalParts[0]).toLocaleString() + '.' + separatedIntegerDecimalParts[1].toString().slice(0, 2)
            const remainingDecimalDigits = separatedIntegerDecimalParts[1].toLocaleString().slice(2)
            return [integerPartPointTwoDecimalDigits, remainingDecimalDigits]
        }
        return ['0.00', '']
    }

    const [integerPartPointTwoDecimalDigits, remainingDecimalDigits] = formatCurrencyResult(exchangeRate);
    const fromCurrencyAmount = formatCurrencyResult(1)[0]


    return (
        <div className='to-currency-result-container'>
            <div className='from-currency-result'>{fromCurrencyAmount} {fromCurrency} =</div>
            <div className='to-currency-result'>{integerPartPointTwoDecimalDigits}<span>{remainingDecimalDigits}</span> {toCurrency}</div>
            <div className='exchange-rate-reverse'>1 {toCurrency} = {(1 / exchangeRate).toFixed(5)} {fromCurrency}</div>
        </div>
    )
}