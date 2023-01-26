import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCurrencyTimeseries, setCurrencyChartStartDate } from '../../../../features/currency/currencySlice'

const DAYS_AGO = [
    {
        name: '1 Year',
        value: 365
    },
    {
        name: '1 Month',
        value: 31
    },
    {
        name: '1 Week',
        value: 7
    },
]

export default function ButtonGroup() {
    const [daysAgo, setDaysAgo] = useState(DAYS_AGO[0])
    const dispatch = useDispatch()
    function handleOnClickButton(days) {
        dispatch(setCurrencyChartStartDate(days))
        dispatch(fetchCurrencyTimeseries())
        setDaysAgo(days)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
            {DAYS_AGO.map(someDaysAgo => (
                <button
                    key={someDaysAgo.name}
                    className='oval-button'
                    onClick={() => handleOnClickButton(someDaysAgo.value)}
                    disabled={daysAgo === someDaysAgo.value}
                    style={daysAgo === someDaysAgo.value ? { cursor: 'default', opacity: '80%', pointerEvents: 'none' } : {}}
                >
                    {someDaysAgo.name}
                </button>
            ))}
        </div>
    )
}
