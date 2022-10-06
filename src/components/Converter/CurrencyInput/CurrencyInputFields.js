import React from 'react'
import { currencyInfo } from '../../../stores/currencyFullInfo'
import CurrencyCodeSelector from './CurrencyCodeSelector'
import InputAmountField from './InputAmountField'
import ReverseButton from './ReverseButton'
import './CurrencyInputFields.css'

export default function CurrencyRow(currencies) {
    const {
        currencyCodes,
        to,
        from,
        onChangeCode,
        setAmount,
        onClickReverse,
        amount
    } = currencies

    return (
        <div className='currency-input-fields'>
            <div className='fields-container'>
                <InputAmountField
                    amount={amount}
                    setAmount={setAmount}
                    fromCurrencySymbol={currencyCodes.find(currency => currency.code === from)?.symbol || '€'} />
            </div>
            <div className='fields-container'>
                <CurrencyCodeSelector
                    currentCode={from}
                    onChangeCode={onChangeCode}
                    currencyCodes={currencyCodes}
                    labelName={"From"} />
            </div>
            <div className='fields-container fields-container-reverse'>
                <ReverseButton onClickReverse={onClickReverse} />
            </div>
            <div className='fields-container'>
                <CurrencyCodeSelector
                    currentCode={to}
                    onChangeCode={onChangeCode}
                    currencyCodes={currencyCodes}
                    labelName={"To"} />
            </div>
        </div>
    )
}