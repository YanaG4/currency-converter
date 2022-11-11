import React, { Children } from 'react'
import './Slider.scss'

//woorks with 2 childrens only
export default function Slider({ children }) {
    const mappedChildren = Children.map(children, (child, index) =>
        <label htmlFor={`s${++index}`} className={`slide${index} s${index}`}>
            <div>
                {child}
            </div>
        </label>
    )
    return (
        <div className='container-with-background'>
            <div className='single-color-background-container'></div>
            <div className="slider table-container">

                <input type="radio" name="slider" id="s1" className='s1' />
                <input type="radio" name="slider" id="s2" className='s2' defaultChecked={true} />
                {mappedChildren}
            </div>
        </div>
    )
}
