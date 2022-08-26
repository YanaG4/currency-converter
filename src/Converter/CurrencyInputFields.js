import React, { useState, useEffect } from 'react'

export default function CurrencyRow(currencies) {
    const {
        currencyCodes,
        to,
        from,
        onChangeCode,
        setAmount,
        onClickReverse,
        amount
    } = currencies
    const [errorMessage, setErrorMessage] = useState('')
    const [amountChanged, setAmountChanged] = useState(false)

    useEffect(() => {
        if (amount != '') {
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
        if (amountChanged == false) {
            setAmount('')
        }
    }
    function onChangeAmount(e) {
        setAmountChanged(true)
        setAmount(e.target.value)

    }
    function onBlurAmount(e) {
        if (amountChanged == false) {
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
        <div className='currency-input-fields'>
            {/* <button><object data="icons/reverse.svg" width="300" height="300"> </object></button>
            <button><img src='icons/reverse.svg' alt="reverse" /></button> */}
            <div className='fields-container'>
                <label htmlFor='amount'>Amount</label>
                <div className='input-container'>
                    <input id='amount' className='input input-fields' maxLength="13" value={(amount == null || amount == '') ? '' : amount} onChange={e => { onChangeAmount(e); amountChangedHandler() }} onFocus={onFocusAmount} onBlur={onBlurAmount} />
                    <div className='error-message'>{errorMessage}</div>
                </div>
            </div>

            <div className='fields-container'>
                <label htmlFor='from'>From</label>
                <select id='from' className='input-fields' value={from} onChange={onChangeCode} >
                    {currencyCodes
                        .map(code => (
                            <option key={code} value={code}>{code}</option>
                        ))}
                </select>
            </div>
            <div className='fields-container fields-container-reverse'>
                <label className='hidden-message' htmlFor='reverse'>Reverse</label>
                <button id='reverse' className='reverse' onClick={onClickReverse}><object data="icons/reverse.svg" width="300" height="300"></object></button>
            </div>

            <div className='fields-container'>
                <label htmlFor='to'>To</label>
                <select id='to' className='input-fields' value={to} onChange={onChangeCode} >
                    {currencyCodes
                        .map(code => (
                            <option key={code} value={code}>{code}</option>
                        ))}
                </select>
            </div>
        </div>
    )
}