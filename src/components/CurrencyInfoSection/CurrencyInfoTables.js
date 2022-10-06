import React from 'react'
import { currencyInfo } from '../../stores/CurrencyInfo'

export default function CurrencyInfoTables() {

  const currency1 = currencyInfo[37]
  return (
    <div className='conversion-container'>
      <h2 className='container-header'>{currency1.code}</h2>
      <table className='conversion-container-table'>
        <tbody>
          <tr>
            <td>Symbol</td>
            <td>{currency1.symbol}</td>
          </tr>
          <tr>
            <td>Code</td>
            <td>{currency1.code}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{currency1.name}</td>
          </tr>
          <tr>
            <td>Countries</td>
            <td>{currency1.countries}</td>
          </tr>
          <tr>
            <td>Flag</td>
            <td><img
              src={`https://flagcdn.com/w40/${currency1.countryCode?.toLowerCase()}.png`}
              alt="Country flag."
            /></td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}