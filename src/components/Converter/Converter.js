import ConverterNavigationBar from './ConverterNavigationBar'
import CurrencyInputFields from './CurrencyInput/CurrencyInputFields';
import CurrencyOutput from './CurrencyOutput';
import { Notification } from '../Elements/Notification'
import React, { useEffect, useState, useCallback } from 'react'
import { EXCHANGE_RATE_API } from '../../constants/api';
import './Converter.scss'
import CurrencyTable from './CurrencyTable'
import { currencyInfo } from '../../stores/CurrencyInfo'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrencyCodes } from '../../features/currency/currencySlice';

function Converter() {
    //
    const currencyCodes = useSelector(getCurrencyCodes)
    //
    const [currencyCode, setCurrencyCode] = useState([])
    const [currencies, setCurrencies] = useState([{
        symbol: '',
        minorUnitValue: 2,
        name: '',
        countries: "",
        countryCode: '',
        currencyCode: ''
    }])
    const [fromCurrency, setFromCurrency] = useState("")
    const [toCurrency, setToCurrency] = useState("")
    const [amount, setAmount] = useState((1).toFixed(2))
    const [exchangeRate, setExchangeRate] = useState()

    const handleFetchingData = useCallback((result) => {
        if (currencies.length > 1)
            return
        const filteredCurrency = (Object.keys(result.rates)).filter(code => currencyInfo.some(currency => currency.code === code))
        setCurrencyCode(filteredCurrency)
        setCurrencies(currencyInfo.filter(currency => filteredCurrency.some(code => code === currency.code)))
        console.log(currencies);
        const firstCurrency = filteredCurrency[134]
        setFromCurrency(result.base)
        setToCurrency(firstCurrency)
        setExchangeRate(result.rates[firstCurrency])
        console.log(fromCurrency, toCurrency);
    }, [currencies]);

    useEffect(() => {
        fetch(EXCHANGE_RATE_API, { method: "GET" })
            .then(res => res.json())
            .then(result => {
                handleFetchingData(result)
            })
            .catch(error => console.log('error', error));
    }, [])

    useEffect(() => {
        if (fromCurrency !== null && toCurrency !== null) {
            fetch(`${EXCHANGE_RATE_API}?symbols=${toCurrency}&base=${fromCurrency}`, { method: "GET" })
                .then(response => response.json())
                .then(result => { setExchangeRate(result.rates[toCurrency]) })
        }
    }, [fromCurrency, toCurrency])

    function changeAmountHandler(value) {
        setAmount(value)
    }
    function onClickReverse() {
        const temporaryFromCode = fromCurrency
        setFromCurrency(toCurrency)
        setToCurrency(temporaryFromCode)
    }

    return (
        <>
            <div className='data-container converter-container'>
                <ConverterNavigationBar />
                <div className='converter-container-items'>
                    <CurrencyInputFields
                        currencyCodes={currencies}
                        from={fromCurrency}
                        to={toCurrency}
                        amount={amount}
                        onChangeCode={(e, value) => {
                            console.log(value, e)
                            return e === 'from' ? setFromCurrency(value) : setToCurrency(value)
                        }}
                        setAmount={changeAmountHandler}
                        onClickReverse={onClickReverse}
                    />
                    <CurrencyOutput
                        amount={amount}
                        from={fromCurrency}
                        to={toCurrency}
                        exchangeRate={exchangeRate}
                    />

                    <Notification text='We use the mid-market rate for our Converter. This is for informational purposes only. You won’t receive this rate when sending money. Check send rates' />
                    {/* <div className='main-button-container'>
                        <Button text='Convert' />
                    </div> */}
                </div>
            </div>
            <CurrencyTable
                from={fromCurrency}
                to={toCurrency}
                exchangeRate={exchangeRate} />
        </>
    );
}

export default Converter;
