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
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
            <div className='charts-info-title'>
                {fromCurrencyInfo.code} to {toCurrencyInfo.code} Chart
            </div>
            <div className='charts-info-conversion'>
                1 {fromCurrencyInfo.code} = {exchangeRate} {toCurrencyInfo.code}
                <span className='charts-info-date'>
                    {date}
                </span>
            </div>
        </div>
    )
}
