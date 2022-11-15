import React from 'react'
import { useSelector } from 'react-redux'
import { getExchangeRate } from '../../../../../features/currency/currencySlice'
import { useToCurrencyFullInfo, useFromCurrencyFullInfo } from '../../../../../utils/useCurrencyFullInfo'
import './InfoSection.css'

export default function InfoSection({ date }) {
    const exchangeRate = useSelector(getExchangeRate)
    const fromCurrencyInfo = useFromCurrencyFullInfo()
    const toCurrencyInfo = useToCurrencyFullInfo()
    return (
        <div className="charts-info-container">
            <div className='charts-info-title'>
                {fromCurrencyInfo.code} to {toCurrencyInfo.code} Chart
            </div>
            <div className='charts-info-conversion'></div>
            1 {fromCurrencyInfo.code} = {exchangeRate} {toCurrencyInfo.code}
            <div className='charts-info-date'>
                {date}
            </div>

        </div>
    )
}
