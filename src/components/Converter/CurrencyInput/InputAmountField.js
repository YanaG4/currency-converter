import React, { useState, useEffect } from 'react'

export default function InputAmountField({ amount, setAmount }) {
    const [errorMessage, setErrorMessage] = useState('')
    const [amountChanged, setAmountChanged] = useState(false)

    useEffect(() => {
        if (amount !== '') {
            if (amount <= 0) {
                setErrorMessage('Please enter an amount greater than 0')
                return
            } else if (!parseFloat(amount)) {
                setErrorMessage('Please enter a valid amount')
                return
            }
        }
        setErrorMessage('')
    }, [amount])

    function amountChangedHandler() {
        setAmountChanged(true)
    }


    function onFocusAmount() {
        if (!amountChanged) {
            setAmount('')
        }
    }
    function onChangeAmount(e) {
        setAmountChanged(true)
        setAmount(e.target.value)

    }
    function onBlurAmount(e) {
        if (!amountChanged) {
            setAmount((1).toFixed(2))
            return
        }
        const checkAmount = parseFloat(((e.target.value).toString()).replaceAll(',', ''))
        if (checkAmount <= 0 || !checkAmount) {
            setAmount('')
            return
        }
        setAmount(checkAmount.toFixed(2))
    }

    return (
        <>
            <label htmlFor='amount'>Amount</label>
            <div className='input-container'>
                <input id='amount' className='input input-fields' maxLength="13" value={(amount == null || amount == '') ? '' : amount} onChange={e => { onChangeAmount(e); amountChangedHandler() }} onFocus={onFocusAmount} onBlur={onBlurAmount} />
                <div className='error-message'>{errorMessage}</div>
            </div>
        </>
    )
}
