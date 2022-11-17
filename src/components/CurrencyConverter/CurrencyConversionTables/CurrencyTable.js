import React from 'react'
import { Skeleton } from '@mui/material'
import { useSelector } from 'react-redux'
import { getStatus } from '../../../features/currency/currencySlice'
import './CurrencyTable.scss'

export default function CurrencyConversionTable(params) {
    const {
        from,
        to,
        exchangeRate
    } = params
    const amount = [1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000, 50000]
    const status = useSelector(getStatus)
    let renderTable = ''
    renderTable = status?.currencyRates === 'fulfilled' ?
        (
            <>
                <h2 className='container-header'>Convert {from} to {to}</h2>
                <table className='conversion-container-table'>
                    <thead>
                        <tr>
                            <th>{from}</th>
                            <th>{to}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{amount[0].toLocaleString()} {from}</td>
                            <td>{(Number((amount[0] * exchangeRate).toFixed(4))).toLocaleString()} {to}</td>
                        </tr>
                        <tr>
                            <td>{amount[1].toLocaleString()} {from}</td>
                            <td>{(Number((amount[1] * exchangeRate).toFixed(4))).toLocaleString()} {to}</td>
                        </tr>
                        <tr>
                            <td>{amount[2].toLocaleString()} {from}</td>
                            <td>{(Number((amount[2] * exchangeRate).toFixed(4))).toLocaleString()} {to}</td>
                        </tr>
                        <tr>
                            <td>{amount[3].toLocaleString()} {from}</td>
                            <td>{(Number((amount[3] * exchangeRate).toFixed(4))).toLocaleString()} {to}</td>
                        </tr>
                        <tr>
                            <td>{amount[4].toLocaleString()} {from}</td>
                            <td>{(Number((amount[4] * exchangeRate).toFixed(4))).toLocaleString()} {to}</td>
                        </tr>
                        <tr>
                            <td>{amount[5].toLocaleString()} {from}</td>
                            <td>{(Number((amount[5] * exchangeRate).toFixed(4))).toLocaleString()} {to}</td>
                        </tr>
                        <tr>
                            <td>{amount[6].toLocaleString()} {from}</td>
                            <td>{(Number((amount[6] * exchangeRate).toFixed(4))).toLocaleString()} {to}</td>
                        </tr>
                        <tr>
                            <td>{amount[7].toLocaleString()} {from}</td>
                            <td>{(Number((amount[7] * exchangeRate).toFixed(4))).toLocaleString()} {to}</td>
                        </tr>
                        <tr>
                            <td>{amount[8].toLocaleString()} {from}</td>
                            <td>{(Number((amount[8] * exchangeRate).toFixed(4))).toLocaleString()} {to}</td>
                        </tr>
                        <tr>
                            <td>{amount[9].toLocaleString()} {from}</td>
                            <td>{(Number((amount[9] * exchangeRate).toFixed(4))).toLocaleString()} {to}</td>
                        </tr>
                        <tr>
                            <td>{amount[10].toLocaleString()} {from}</td>
                            <td>{(Number((amount[10] * exchangeRate).toFixed(4))).toLocaleString()} {to}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
        :
        (
            <>
                <h2 className='container-header' style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <Skeleton variant="rounded" sx={{ maxWidth: '300px' }} width={'70%'} height={50} />
                </h2>
                <table className='conversion-container-table'>
                    <thead>
                        <tr>
                            <th><Skeleton variant="rounded" width={70} height={30} sx={{ margin: 'auto' }} /></th>
                            <th><Skeleton variant="rounded" width={70} height={30} sx={{ margin: 'auto' }} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                        </tr>
                        <tr>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                        </tr>
                        <tr>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                        </tr>
                        <tr>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                        </tr>
                        <tr>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                        </tr>
                        <tr>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                        </tr>
                        <tr>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                        </tr>
                        <tr>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                        </tr>
                        <tr>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                        </tr>
                        <tr>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                        </tr>
                        <tr>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                            <td><Skeleton variant="text" sx={{ fontSize: '1.1rem' }} /></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    return (
        <div className='conversion-container'>
            {renderTable}
        </div>
    )
}
