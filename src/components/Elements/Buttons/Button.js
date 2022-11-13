import React from 'react'
import './Button.css'
//not used yet
export default function Button({ children }) {
    return (
        <button className='main-button'>{children}</button>
    )
}

export const Button = ({ children }) => {
    return (
        <button className='secondary-button'>{children}</button>
    )
}
