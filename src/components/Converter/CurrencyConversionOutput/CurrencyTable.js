import React from 'react'
import CurrencyConversionTable from './CurrencyConversionTable'
import CarouselWrapper from '../../Elements/CarouselWrapper/CarouselWrapper'

import { useSelector } from 'react-redux'
import { getToCurrency, getFromCurrency, getExchangeRate } from '../../../features/currency/currencySlice'

import './CurrencyTable.scss'

export default function CurrencyTable() {

    const toCurrency = useSelector(getToCurrency)
    const fromCurrency = useSelector(getFromCurrency)
    const exchangeRate = useSelector(getExchangeRate)
    return (
        <div className='container-with-background'>
            <div className='single-color-background-container'></div>
            <div className="slider table-container">
                <CarouselWrapper>
                    <CurrencyConversionTable
                        from={fromCurrency}
                        to={toCurrency}
                        exchangeRate={exchangeRate} />
                    <CurrencyConversionTable
                        from={toCurrency}
                        to={fromCurrency}
                        exchangeRate={1 / exchangeRate}
                    />
                </CarouselWrapper>
            </div>
        </div>
    )
}
