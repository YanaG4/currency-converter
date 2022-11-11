import React from 'react'
import CurrencyConversionTable from './CurrencyConversionTable'
import Slider from '../Elements/Slider/Slider'

import { useSelector } from 'react-redux'
import { getToCurrency, getFromCurrency, getExchangeRate } from '../../features/currency/currencySlice'

import './CurrencyTable.scss'

export default function CurrencyTable() {

    const toCurrency = useSelector(getToCurrency)
    const fromCurrency = useSelector(getFromCurrency)
    const exchangeRate = useSelector(getExchangeRate)
    return (
        <Slider>
            <CurrencyConversionTable
                from={fromCurrency}
                to={toCurrency}
                exchangeRate={exchangeRate} />
            <CurrencyConversionTable
                from={toCurrency}
                to={fromCurrency}
                exchangeRate={1 / exchangeRate}
            />
        </Slider>
    )
}
