import React from 'react'
import CurrencyTable from './CurrencyTable'
import CarouselWrapper from '../../Elements/CarouselWrapper/CarouselWrapper'

import { useSelector } from 'react-redux'
import { getToCurrency, getFromCurrency, getExchangeRate } from '../../../features/currency/currencySlice'

import './CurrencyTables.scss'

export default function CurrencyTables() {

    const toCurrency = useSelector(getToCurrency)
    const fromCurrency = useSelector(getFromCurrency)
    const exchangeRate = useSelector(getExchangeRate)
    return (
        <div className='container-with-background'>
            <div className='single-color-background-container'></div>
            <div className="slider table-container">
                <CarouselWrapper>
                    <CurrencyTable
                        from={fromCurrency}
                        to={toCurrency}
                        exchangeRate={exchangeRate} />
                    <CurrencyTable
                        from={toCurrency}
                        to={fromCurrency}
                        exchangeRate={1 / exchangeRate}
                    />
                </CarouselWrapper>
            </div>
        </div>
    )
}
