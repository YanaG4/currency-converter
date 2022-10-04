import React from 'react'
import { currencyInfo } from '../../../stores/CurrencyInfo'

export default function CurrencyCodeSelector({ currentCode, onChangeCode, currencyCodes, labelName }) {
    return (
        <>
            <label htmlFor={labelName.toLowerCase()}>{labelName}</label>
            <select id={labelName.toLowerCase()} className='input-fields' value={currentCode} onChange={onChangeCode} >
                {currencyCodes
                    .map(currencyCode => (
                        <option key={currencyCode.name} value={currencyCode.code}>{`${currencyCode.code} — ${currencyCode.name}`}</option>
                    ))}
            </select>
        </>
    )
}
