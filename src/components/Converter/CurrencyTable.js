import React from 'react'
import './CurrencyTable.scss'
import CurrencyConversionTable from './CurrencyConversionTable'

export default function CurrencyTable(params) {
    const {
        from,
        to,
        exchangeRate
    } = params
    return (
        <div className='container-with-background'>
            <div className='single-color-background-container'></div>
            <div className="slider table-container">

                <input type="radio" name="slider" id="s1" />
                <input type="radio" name="slider" id="s2" defaultChecked={true} />
                <label htmlFor="s1" id="slide1">
                    <div>
                        <CurrencyConversionTable
                            from={from}
                            to={to}
                            exchangeRate={exchangeRate} />
                    </div>
                </label>
                <label htmlFor="s2" id="slide2">
                    <div>
                        <CurrencyConversionTable
                            from={to}
                            to={from}
                            exchangeRate={1 / exchangeRate}
                        />
                    </div>
                </label>
            </div>
        </div>
    )
}
