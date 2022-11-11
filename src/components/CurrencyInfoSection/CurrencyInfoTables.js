import React from 'react'

import Slider from '../Elements/Slider/Slider'
import CurrencyInfoTable from './CurrencyInfoTable'

import { useSelector } from 'react-redux'
import { getToCurrency, getFromCurrency, getCurrencyInfo } from '../../features/currency/currencySlice'

export default function CurrencyInfoTables() {

  const toCurrency = useSelector(getToCurrency)
  const fromCurrency = useSelector(getFromCurrency)
  const currencyInfo = useSelector(getCurrencyInfo)

  const toCurrencyInfo = currencyInfo.find(currency => currency.code === toCurrency)
  const fromCurrencyInfo = currencyInfo.find(currency => currency.code === fromCurrency)
  return (
    <Slider>
      <CurrencyInfoTable currencyInfo={fromCurrencyInfo} />
      <CurrencyInfoTable currencyInfo={toCurrencyInfo} />
    </Slider>
    // <div className='conversion-container'>
    //   <h2 className='container-header'>{toCurrencyInfo?.code}</h2>
    //   <table className='conversion-container-table'>
    //     <tbody>
    //       <tr>
    //         <td>Symbol</td>
    //         <td>{toCurrencyInfo?.symbol}</td>
    //       </tr>
    //       <tr>
    //         <td>Code</td>
    //         <td>{toCurrencyInfo?.code}</td>
    //       </tr>
    //       <tr>
    //         <td>Name</td>
    //         <td>{toCurrencyInfo?.name}</td>
    //       </tr>
    //       <tr>
    //         <td>Countries</td>
    //         <td>{toCurrencyInfo?.countries}</td>
    //       </tr>
    //       <tr>
    //         <td>Flag</td>
    //         <td><img
    //           src={`https://flagcdn.com/w40/${toCurrencyInfo?.countryCode?.toLowerCase()}.png`}
    //           alt="Country flag."
    //         /></td>
    //       </tr>
    //     </tbody>
    //   </table>
    //</div>
  )
}