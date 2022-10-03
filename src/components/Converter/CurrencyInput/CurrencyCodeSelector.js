import React from 'react'

export default function CurrencyCodeSelector({ currentCode, onChangeCode, currencyCodes, labelName }) {
    return (
        <>
            <label htmlFor={labelName.toLowerCase()}>{labelName}</label>
            <select id={labelName.toLowerCase()} className='input-fields' value={currentCode} onChange={onChangeCode} >
                {currencyCodes
                    .map(code => (
                        <option key={code} value={code}>{code}</option>
                    ))}
            </select>
        </>
    )
}
