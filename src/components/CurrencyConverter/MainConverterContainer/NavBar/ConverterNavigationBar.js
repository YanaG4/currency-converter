import React from 'react'
import './ConverterNavigationBar.scss'

export default function ConverterNavigationBar() {
    return (
        <div>
            <ul className="converter-menu-item">
                <li><a href='/' data-item='Convert'><i className="fa fa-bitcoin"></i>Convert</a></li>
                <li><a href='/' data-item='Send'><i className="fa fa-euro"></i>Send</a></li>
                <li><a href='/' data-item='Charts'><i className="fa fa-cny"></i>Charts</a></li>
                <li><a href='/' data-item='Alerts'><i className="fa fa-gbp"></i>Alerts</a></li>
            </ul>
        </div>
    )
}
