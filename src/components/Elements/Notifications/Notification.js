import React from 'react'
import './Notification.css'

export const Notification = ({ children }) => {
    return (
        <div className='notification'>
            <i className="material-icons">new_releases</i>
            <div>{children}</div>
        </div>
    )
}
