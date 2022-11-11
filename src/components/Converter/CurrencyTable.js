import React from 'react'
import './CurrencyTable.scss'
import CurrencyConversionTable from './CurrencyConversionTable'

import { useSelector } from 'react-redux'
import { getToCurrency, getFromCurrency, getExchangeRate } from '../../features/currency/currencySlice'

export default function CurrencyTable() {

    const toCurrency = useSelector(getToCurrency)
    const fromCurrency = useSelector(getFromCurrency)
    const exchangeRate = useSelector(getExchangeRate)
    return (
        <div className='container-with-background'>
            <div className='single-color-background-container'></div>
            <div className="slider table-container">

                <input type="radio" name="slider" id="s1" />
                <input type="radio" name="slider" id="s2" defaultChecked={true} />
                <label htmlFor="s1" id="slide1">
                    <div>
                        <CurrencyConversionTable
                            from={fromCurrency}
                            to={toCurrency}
                            exchangeRate={exchangeRate} />
                    </div>
                </label>
                <label htmlFor="s2" id="slide2">
                    <div>
                        <CurrencyConversionTable
                            from={toCurrency}
                            to={fromCurrency}
                            exchangeRate={1 / exchangeRate}
                        />
                    </div>
                </label>
            </div>
        </div>
    )
}
