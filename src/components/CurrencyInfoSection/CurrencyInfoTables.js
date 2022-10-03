import React from 'react'
import { currencyInfo } from '../../stores/currencyFullInfo'

export default function CurrencyInfoTables() {
  const currency1 = currencyInfo[42]
  return (
    <div className='conversion-container'>
      <h2 className='container-header'>EUR</h2>
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
            <td>flag</td>
            <td>flag</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}