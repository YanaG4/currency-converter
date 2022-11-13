import React from 'react'
//components
import SvgComponent from './ReverseSvg'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { setToCurrency, setFromCurrency, getToCurrency, getFromCurrency } from '../../../features/currency/currencySlice'
//styles
import './ReverseButton.css'

export default function ReverseButton() {
    const dispatch = useDispatch()
    const toCurrency = useSelector(getToCurrency)
    const fromCurrency = useSelector(getFromCurrency)

    function handleReverseButtonClick() {
        const temporaryFromCode = fromCurrency
        dispatch(setFromCurrency(toCurrency))
        dispatch(setToCurrency(temporaryFromCode))
    }
    return (
        <>
            <label className='hidden-message' htmlFor='reverse'>Reverse</label>
            <button id='reverse' className='reverse' onClick={handleReverseButtonClick}>
                <SvgComponent className='reverse-svg' width='30px' />
            </button>
        </>
    )
}