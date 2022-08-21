import React, { useState, useEffect } from 'react'

export default function CurrencyRow(currencies) {
    const {
        currencyCodes,
        to,
        from,
        onChangeCode,
        onChangeAmount,
        onFocusAmount,
        onBlurAmount,
        amount
    } = currencies


    return (
        <div className='currency-input-fields'>

            <div className='fields-container'>
                <label htmlFor='amount'>Amount</label>
                <input id='amount' className='input input-fields' value={(amount == null) ? '' : amount} onChange={onChangeAmount} onFocus={onFocusAmount} onBlur={onBlurAmount} />
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
                <label className='hidden-label' htmlFor='reverse'>Reverse</label>
                <button id='reverse' className='reverse'><img src='icons/reverse.png' alt="reverse" /></button>
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