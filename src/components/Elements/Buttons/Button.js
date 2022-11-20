import React from 'react'
import './Button.css'
//not used yet
export default function Button({ children, onClick }) {
    return (
        <button className='main-button'>{children}</button>
    )
}

export const SecondaryButton = ({ children, onClick }) => {
    return (
        <button className='secondary-button'>{children}</button>
    )
}

export const OvalButton = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className='oval-button'>{children}</button>
    )
}
