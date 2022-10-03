import React from 'react'
import SvgComponent from '../../assets/Reverse'

export default function ReverseButton({ onClickReverse }) {
    return (
        <button id='reverse' className='reverse' onClick={onClickReverse}>
            <SvgComponent className='reverse-svg' width='30px' />
        </button>
    )
}
