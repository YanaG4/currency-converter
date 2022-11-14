import React from 'react'
//components
import CurrencyCodeSelector from './CurrencyCodeSelector'
import InputAmountField from './InputAmountField'
import ReverseButton from './ReverseButton/ReverseButton'
//redux
import { useSelector } from 'react-redux'
import { getCurrencyInfo, getFromCurrency, getToCurrency } from '../../../../../features/currency/currencySlice'
//styles
import './CurrencyInputFields.css'

export default function CurrencyRow() {
    const reduxCurrencyInfo = useSelector(getCurrencyInfo)
    const fromCurrency = useSelector(getFromCurrency)
    const toCurrency = useSelector(getToCurrency)
    return (
        <div className='currency-input-fields'>
            <div className='fields-container'>
                <InputAmountField
                    fromCurrencySymbol={reduxCurrencyInfo.find(currency => currency.code === fromCurrency)?.symbol || '€'} />
            </div>
            <div className='fields-container'>
                <CurrencyCodeSelector
                    currentCode={fromCurrency}
                    labelName={"From"} />
            </div>
            <div className='fields-container fields-container-reverse'>
                <ReverseButton />
            </div>
            <div className='fields-container'>
                <CurrencyCodeSelector
                    currentCode={toCurrency}
                    labelName={"To"} />
            </div>
        </div>
    )
}