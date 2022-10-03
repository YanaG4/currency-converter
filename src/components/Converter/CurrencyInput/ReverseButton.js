import React from 'react'
import SvgComponent from './ReverseSvg'
import './ReverseButton.css'

export default function ReverseButton({ onClickReverse }) {
    return (
        <>
            <label className='hidden-message' htmlFor='reverse'>Reverse</label>
            <button id='reverse' className='reverse' onClick={onClickReverse}>
                <SvgComponent className='reverse-svg' width='30px' />
            </button>
        </>
    )
}
