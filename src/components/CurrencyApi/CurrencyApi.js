import React from 'react'
import './CurrencyApi.css'

export default function CurrencyApi() {
    const jsonExample = {
        "rates": {
            "2022-01-01": {
                "USD": 1.136796
            },
            "2022-01-02": {
                "USD": 1.138068
            },
            "2022-01-03": {
                "USD": 1.129396
            },
            "2022-01-04": {
                "USD": 1.128253
            }
        }
    }
    return (
        <div className='text-page'>
            <h1>Currency API & Currency Data</h1>
            <h2><i class="fa fa-usd" aria-hidden="true"></i> Currency API</h2>
            <p>
                For this project api.exchangerate.host was used.
                <div className='website-options-text'>
                    <div className='website-option-text'>
                        <p>API</p>
                        <p className='link-text'><a href='https://api.exchangerate.host/' target='_blank' rel="noreferrer">
                            https://api.exchangerate.host/
                        </a></p>
                    </div>
                    <div className='website-option-text'>
                        <p>Website</p>
                        <p className='link-text'><a href='https://exchangerate.host/' target='_blank' rel="noreferrer">
                            https://exchangerate.host/</a></p>
                    </div>
                </div>
                It's a great choice for study projects, because the API is free and the amount of requests is not limited (for now).

                It's easy to use and there is a nice documentation on how to use it. It has a bunch of useful endpoints.

                In this project 'Latest rates' & 'Time-Serieas data' endpoints are used.
                <h3><i class="fa fa-jpy" aria-hidden="true"></i> Latest rates</h3>
                The request URL looks like this:
                <div className='link-text'>https://api.exchangerate.host/latest</div>
                And the response is an object with base currency (EUR in our case), exchange rates of the currencies side by side with their codes, and the date of the latest rates update.
                <h3><i class="fa fa-calendar" aria-hidden="true"></i> Time-Serieas data</h3>
                Request URL looks like this:
                <div className='link-text'>https://api.exchangerate.host/timeseries?start_date=[date]&end_date=[date]</div>
                [date] should be in the format YYYY-MM-DD
                <br />
                Since in this project we need only two currencies time-series exchange rates, the next parameters are used: base as "from currency" and symbols as 'to currency'.
                So the request looks like this:
                <div className='link-text'>https://api.exchangerate.host/timeseries?start_date=2022-01-01&end_date=2022-01-04&base=EUR&symbols=USD</div>
                As a response we get an object and the most important field for us there is 'rates'. It consists of the objects of dates and their corresponding exchange rate in the following format:
                <br />
                {<div className='code-text'><pre>{JSON.stringify(jsonExample, null, 2)}</pre></div>}
            </p>
            <h2><i class="fa fa-flag" aria-hidden="true"></i> Flag Icon API</h2>
            <p>
                For getting the flag icons Flagcdn.com API is used.
                <br />
                Here is the the website with the documentation:
                <div className='link-text'><a href='https://flagpedia.net/download/api' target='_blank' rel="noreferrer">
                    https://flagpedia.net/download/api
                </a></div>
                It's quite easy to use: to get the flag icon of the country, you can use this pattern:
                <div className='link-text'>https://flagcdn.com/[size]/[country code].[image format]</div>
                Also it's free to use and it has a bunch of nice features as well.
            </p>
            <h2><i class="fa fa-database" aria-hidden="true"></i> Data</h2>
            <p>
                I gathered and merged together the currency data needed for this project, such as currency symbols,
                countries, minor unit values, codes, etc.
                <br />
                I assembled that data in a json file called 'currencyInfo.json'
                <br />
                Though the most valuable data is located inside that file, there's also another data file in the project. There I put some interesting facts about currency history, that I found on Wikipedia.
            </p>
        </div>
    )
}
