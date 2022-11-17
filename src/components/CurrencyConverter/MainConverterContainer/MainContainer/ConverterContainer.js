import React from 'react'
//components
import CurrencyInputFields from '../Converter/CurrencyConversionInput/CurrencyInputFields'
import CurrencyOutput from '../Converter/CurrencyConversionOutput/CurrencyOutput'
import { Notification } from '../../../Elements/Notifications/Notification'
import { Skeleton } from '@mui/material'
//redux
import { useSelector } from 'react-redux';
import { getDate, getStatus } from '../../../../features/currency/currencySlice'

export default function ConverterContainer() {
    const date = useSelector(getDate)
    const status = useSelector(getStatus)

    let renderConverter = ''
    renderConverter = status.currencyRates === 'fulfilled' ?
        (
            <>
                <CurrencyInputFields withAmount={true} />
                <CurrencyOutput />
                <Notification>{`The latest update of the rates was on ${date}. We use api.exchangerate.host to get the latest exchange rates.`}</Notification>
            </>
        )
        :
        (
            <>
                <CurrencyInputFields withAmount={true} />
                <Skeleton variant="rounded" width={'50%'} height={70} sx={{ mb: 3 }} />
                <Notification>
                    {status.currencyRates !== 'rejected' ?
                        `Fetching currency rates from api.exchangerate.host...`
                        :
                        `Cannot connect to api.exchangerate.host...`}
                </Notification>
            </>
        )
    return (
        <>
            {renderConverter}
        </>
    )
}
