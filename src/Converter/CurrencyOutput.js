import React from 'react'
import './CurrencyOutput.scss'

export default function CurrencyOutput(params) {
    const {
        from,
        to,
        amount,
        exchangeRate
    } = params


    function formatCurrencyResult(exchangeRate) {
        if (amount > 0 && amount) {
            const separatedIntegerDecimalParts = (Number(amount).toFixed(2) * exchangeRate).toString().split('.')
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
            <div className='from-currency-result'>{fromCurrencyAmount} {from} =</div>
            <div className='to-currency-result'>{integerPartPointTwoDecimalDigits}<span>{remainingDecimalDigits}</span> {to}</div>
            <div className='exchange-rate-reverse'>1 {to} = {(1 / exchangeRate).toFixed(5)} {from}</div>
        </div>
    )
}