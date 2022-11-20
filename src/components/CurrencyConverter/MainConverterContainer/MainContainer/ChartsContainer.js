import React from 'react'
//components
import CurrencyInputFields from '../Converter/CurrencyConversionInput/CurrencyInputFields'
import CurrencyChart from '../Charts/CurrencyChart'
import { Skeleton } from '@mui/material';
//redux
import { useSelector } from 'react-redux';
import { getDate, getStatus } from '../../../../features/currency/currencySlice'
//data
import InfoSection from '../Charts/InfoSection/InfoSection';
import ButtonGroup from '../Charts/ButtonGroup';

export default function ChartsContainer() {
    const date = useSelector(getDate)
    const status = useSelector(getStatus)

    let renderCharts = ''
    renderCharts = status.currencyRates === 'fulfilled' ?
        (
            <>
                <CurrencyInputFields withAmount={false} />
                <InfoSection date={date} />
                <ButtonGroup />
                <CurrencyChart />
            </>
        )
        :
        (
            <>
                <CurrencyInputFields withAmount={false} />
                <Skeleton variant="rounded" width={'100%'} height={40} />
                <ButtonGroup />
                <CurrencyChart />
            </>
        )
    return (
        <>
            {renderCharts}
        </>
    )
}
