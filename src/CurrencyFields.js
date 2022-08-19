import React from 'react'

export default function CurrencyRow(currencies) {
    const {
        currencyCodes,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = currencies
    return (
        <div>
            <input type='number' className='input' value={amount} onChange={onChangeAmount} />
            <select value={selectedCurrency} onChange={onChangeCurrency} >
                {currencyCodes
                    .map(code => (
                        <option key={code} value={code}>{code}</option>
                    ))}
            </select>
        </div>
    )
}
