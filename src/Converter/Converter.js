import ConverterNavigationBar from './ConverterNavigationBar'
import CurrencyInputFields from './CurrencyInputFields';
import CurrencyOutput from './CurrencyOutput';
import { Notification } from '../components/Notification';
import React, { useEffect, useState } from 'react'
import { EXCHANGE_RATE_API } from '../constants/api';
import Button from '../components/Button';
import './Converter.scss'

function Converter() {
    const [currencyCode, setCurrencyCode] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [amount, setAmount] = useState((1).toFixed(2))
    const [exchangeRate, setExchangeRate] = useState()
    const [amountChanged, setAmountChanged] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        fetch(EXCHANGE_RATE_API, { method: "GET" })
            .then(res => res.json())
            .then(result => {
                const firstCurrency = Object.keys(result.rates)[149]
                setCurrencyCode(Object.keys(result.rates))
                setFromCurrency(result.base)
                setToCurrency(firstCurrency)
                setExchangeRate(result.rates[firstCurrency])
            })
            .catch(error => console.log('error', error));
    }, [])

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${EXCHANGE_RATE_API}?symbols=${toCurrency}&base=${fromCurrency}`, { method: "GET" })
                .then(response => response.json())
                .then(result => { setExchangeRate(result.rates[toCurrency]) })
        }
    }, [fromCurrency, toCurrency])

    function onFocusAmount() {
        if (amountChanged == false) {
            setAmount(null)
        }
    }

    function checkAmountIsCorrect(checkAmount) {
        if (checkAmount <= 0) {
            setAmount('')
            setErrorMessage('Please enter an amount greater than 0')
            return false
        }
        if (!checkAmount) {
            setAmount('')
            setErrorMessage('Please enter a valid amount')
            return false
        }
        setErrorMessage('')
        return true
    }

    function onChangeAmount(e) {
        setAmount(e.target.value)
        setAmountChanged(true)
    }

    function onBlurAmount(e) {
        if (amountChanged == false) {
            setAmount((1).toFixed(2))
            return
        }
        const checkAmount = parseFloat(e.target.value)
        if (checkAmountIsCorrect(checkAmount)) {
            setAmount(checkAmount.toFixed(2))
        }
    }
    function onClickReverse() {
        const temporaryFromCode = fromCurrency
        setFromCurrency(toCurrency)
        setToCurrency(temporaryFromCode)
    }

    return (
        <div className='converter-container'>
            <ConverterNavigationBar />
            <div className='converter-container-items'>
                <CurrencyInputFields
                    currencyCodes={currencyCode}
                    from={fromCurrency}
                    to={toCurrency}
                    amount={amount}
                    onChangeCode={e => e.target.id == 'from' ? setFromCurrency(e.target.value) : setToCurrency(e.target.value)}
                    onChangeAmount={onChangeAmount}
                    onFocusAmount={onFocusAmount}
                    onBlurAmount={onBlurAmount}
                    errorMessage={errorMessage}
                    onClickReverse={onClickReverse}
                />
                <CurrencyOutput
                    amount={amount}
                    from={fromCurrency}
                    to={toCurrency}
                    exchangeRate={exchangeRate}
                    errorMessage={errorMessage}
                />

                <Notification text='We use the mid-market rate for our Converter. This is for informational purposes only. You won’t receive this rate when sending money. Check send rates' />
                <div className='main-button-container'>
                    <Button text='Convert' />
                </div>
            </div>
        </div>
    );
}

export default Converter;
