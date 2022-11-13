import React from 'react'
import './Button.scss'
//not used yet
export default function Button({ children }) {
    return (
        <button className='main-button'>{children}</button>
    )
}
