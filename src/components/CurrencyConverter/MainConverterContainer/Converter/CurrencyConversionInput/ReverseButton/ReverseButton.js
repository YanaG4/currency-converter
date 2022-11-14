import React from 'react'
//components
import SvgComponent from './ReverseSvg'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { setToCurrency, setFromCurrency, getToCurrency, getFromCurrency, getCurrencyChartTimeseries, fetchCurrencyTimeseries } from '../../../../../../features/currency/currencySlice'
//styles
import './ReverseButton.css'
import '../../../../../Elements/Buttons/Button.css'

export default function ReverseButton() {
    const dispatch = useDispatch()
    const toCurrency = useSelector(getToCurrency)
    const fromCurrency = useSelector(getFromCurrency)

    function handleReverseButtonClick() {
        const temporaryFromCode = fromCurrency
        dispatch(setFromCurrency(toCurrency))
        dispatch(setToCurrency(temporaryFromCode))
        dispatch(fetchCurrencyTimeseries())
    }
    return (
        <>
            <label className='hidden-message' htmlFor='reverse'>Reverse</label>
            <button id='reverse' className='reverse secondary-button' onClick={handleReverseButtonClick}>
                <SvgComponent className='reverse-svg' width='30px' />
            </button>
        </>
    )
}
