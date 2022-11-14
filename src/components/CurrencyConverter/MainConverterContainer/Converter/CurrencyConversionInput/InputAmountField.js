import React, { useState, useEffect } from 'react'
//redux
import { useDispatch } from 'react-redux'
import { setAmount } from '../../../../../features/currency/currencySlice'
//styles
import './InputAmountField.css'

export default function InputAmountField({ fromCurrencySymbol }) {
    const dispatch = useDispatch(setAmount)
    const [amount, setCurrentAmount] = useState((1).toFixed(2))

    const [errorMessage, setErrorMessage] = useState('')
    const [amountChanged, setCurrentAmountChaned] = useState(false)

    useEffect(() => {
        if (amount === '' || !amountChanged)
            return
        if (amount <= 0) {
            setErrorMessage('Please enter an amount greater than 0')
            return
        }
        if (!parseFloat(amount)) {
            setErrorMessage('Please enter a valid amount')
            return
        }
        dispatch(setAmount(amount))
        setErrorMessage('')
    }, [amount])

    function onFocusAmount() {
        if (!amountChanged) {
            setCurrentAmount('')
        }
    }
    function onChangeAmount(e) {
        setCurrentAmountChaned(true)
        setCurrentAmount(e)

    }
    function onBlurAmount(e) {
        if (!amountChanged) {
            setCurrentAmount((1).toFixed(2))
            return
        }
        const checkAmount = parseFloat(((e.target.value).toString()).replaceAll(',', ''))
        if (checkAmount <= 0 || !checkAmount) {
            setCurrentAmount('')
            return
        }
        setCurrentAmount(checkAmount.toFixed(2))
    }

    return (
        <>
            <label htmlFor='amount'>Amount</label>
            <div className='input-container'>
                <input
                    id='amount'
                    className='input input-fields'
                    maxLength="13"
                    value={(amount == null || amount == '') ? '' : amount}
                    onChange={(e) => onChangeAmount(e.target.value)}
                    onFocus={onFocusAmount}
                    onBlur={onBlurAmount}
                    autoComplete="off" />
                <div className='currency-symbol'>{fromCurrencySymbol.split('|')[0]}</div>
                <div className='error-message'>{errorMessage}</div>
            </div>
        </>
    )
}
