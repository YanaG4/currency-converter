import React from 'react'
import './CarouselTwo.scss'
import './CurrencyConversion.scss'
import CurrencyConversionTable from './CurrencyConversionTable'

export default function Carousel(params) {
    const {
        from,
        to,
        exchangeRate
    } = params
    return (
        <div className='container-with-background'>
            <div className='single-color-background-container'></div>
            <div class="slider table-container">

                <input type="radio" name="slider" id="s1" />
                <input type="radio" name="slider" id="s2" checked />
                {/* <div className='flex-class'> */}
                <label for="s1" id="slide1">
                    <div>
                        <CurrencyConversionTable
                            from={from}
                            to={to}
                            exchangeRate={exchangeRate} />
                    </div>
                </label>
                <label for="s2" id="slide2">
                    <div>
                        <CurrencyConversionTable
                            from={to}
                            to={from}
                            exchangeRate={1 / exchangeRate}
                        />
                    </div>
                </label>
                {/* </div> */}
            </div>
        </div>
    )
}
