import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import { useSelector } from 'react-redux'
import { getStatus } from '../../../features/currency/currencySlice'

export default function CurrencyInfoTables({ currencyInfo }) {
    const status = useSelector(getStatus)
    let renderTable = ''
    renderTable = status?.currencyRates === 'fulfilled' ?
        (<>
            <h2 className='container-header'>{currencyInfo?.code}</h2>
            <table className='conversion-container-table info-table'>
                <tbody>
                    <tr>
                        <td>Symbol</td>
                        <td>{currencyInfo?.symbol}</td>
                    </tr>
                    <tr>
                        <td>Code</td>
                        <td>{currencyInfo?.code}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{currencyInfo?.name}</td>
                    </tr>
                    <tr>
                        <td>Countries</td>
                        <td>{currencyInfo?.countries}</td>
                    </tr>
                    <tr>
                        <td>Flag</td>
                        <td><img
                            src={`https://flagcdn.com/w40/${currencyInfo?.countryCode?.toLowerCase()}.png`}
                            alt="Country flag."
                        /></td>
                    </tr>
                </tbody>
            </table>
        </>)
        :
        (<>
            <h2 className='container-header'><Skeleton variant="rounded" width={200} height={50} sx={{ margin: 'auto' }} /></h2>
            <table className='conversion-container-table info-table'>
                <tbody>
                    <tr>
                        <td>Symbol</td>
                        <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                    </tr>
                    <tr>
                        <td>Code</td>
                        <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                    </tr>
                    <tr>
                        <td>Countries</td>
                        <td><Skeleton variant="rounded" width={'100%'} height={800} /></td>
                    </tr>
                    <tr>
                        <td>Flag</td>
                        <td><Skeleton variant="circular" width={40} height={40} /></td>
                    </tr>
                </tbody>
            </table>
        </>)

    return (
        <div className='conversion-container'>
            {renderTable}
        </div>
    )
}