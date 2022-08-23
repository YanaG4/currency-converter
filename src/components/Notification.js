import React from 'react'
import './Notification.scss'

export const Notification = ({ text }) => {
    return (
        <div className='notification'>
            <div style={{ margin: "0 .6rem", paddingTop: ".1rem" }}><i className="material-icons">new_releases</i></div>
            <div>{text}</div>
        </div>
    )
}
