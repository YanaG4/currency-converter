import React from 'react'
import './Button.scss'

export default function Button({ text }) {
    return (
        <>
            <button className='main-button'>{text}</button>
        </>
    )
}
