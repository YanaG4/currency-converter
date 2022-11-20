import React from 'react'

import { useSelector } from 'react-redux'
import { getToCurrency, getFromCurrency, getExchangeRate, getAmount, getToCurrencyMUV, getFromCurrencyMUV } from '../../../../../features/currency/currencySlice'

import './CurrencyOutput.scss'

export default function CurrencyOutput() {
    const toCurrency = useSelector(getToCurrency)
    const fromCurrency = useSelector(getFromCurrency)
    const exchangeRate = useSelector(getExchangeRate)
    const amount = useSelector(getAmount)
    const fromCurrencyMinorUnitValue = useSelector(getFromCurrencyMUV)
    const toCurrencyMinorUnitValue = useSelector(getToCurrencyMUV)

    function formatCurrencyResult(exchangeRate, minorUnitValue) {
        const processedAmount = parseFloat((amount.toString()).replaceAll(',', ''))
        if (processedAmount > 0 && processedAmount) {
            const separatedIntegerDecimalParts = (Number(processedAmount).toFixed(minorUnitValue) * exchangeRate).toString().split('.')
            if (!separatedIntegerDecimalParts[1]) {
                separatedIntegerDecimalParts[1] = ''
                for (let i = 0; i < minorUnitValue; i++)
                    separatedIntegerDecimalParts[1] += '0'
            }
            const formatedIntegerParts = Number(separatedIntegerDecimalParts[0]).toLocaleString()
            const formatedDecimalParts = separatedIntegerDecimalParts[1].toString().slice(0, minorUnitValue)

            const remainingDecimalDigits = separatedIntegerDecimalParts[1]?.toLocaleString().slice(minorUnitValue) || ''
            const integerPartPointDecimalDigits = (formatedDecimalParts || remainingDecimalDigits) ? `${formatedIntegerParts}.${formatedDecimalParts}` : formatedIntegerParts

            return [integerPartPointDecimalDigits, remainingDecimalDigits]
        }
        return ['0.00', '']
    }

    const [integerPartPointDecimalDigits, remainingDecimalDigits] = formatCurrencyResult(exchangeRate, toCurrencyMinorUnitValue);
    const fromCurrencyAmount = formatCurrencyResult(1, fromCurrencyMinorUnitValue)[0]

    return (
        <div className='to-currency-result-container'>
            <div className='from-currency-result'>{fromCurrencyAmount} {fromCurrency} =</div>
            <div className='to-currency-result'>{integerPartPointDecimalDigits}<span>{remainingDecimalDigits}</span> {toCurrency}</div>
            <div className='exchange-rate-reverse'>1 {toCurrency} = {(1 / exchangeRate).toFixed(5)} {fromCurrency}</div>
        </div>
    )
}