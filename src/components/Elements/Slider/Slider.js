import React, { Children, useRef } from 'react'
import './Slider.scss'


//woorks with 2 childrens only
export default function Slider({ children }) {
    const inputId = useRef(0);
    const labelId = useRef(0);
    const inputNameId = useRef(0);
    inputNameId.current = inputNameId.current + 1;
    let renderInput = ''
    let mappedChildren = ''
    renderInput = Children.map(children, (child, index) => {
        inputId.current = inputId.current + 1;
        index += 1
        return index === 1 ?
            (<input key={inputId} type="radio" name={`slider${inputNameId.current}`} id={inputId.current} className={`s${index}`} defaultChecked={true} />)
            :
            (<input key={inputId} type="radio" name={`slider${inputNameId.current}`} id={inputId.current} className={`s${index}`} />)
    }
    )
    mappedChildren = Children.map(children, (child, index) => {
        labelId.current = labelId.current + 1;
        return (
            <label key={labelId} htmlFor={labelId.current} className={`slide${++index} s${index}`} >
                <div>
                    {child}
                </div>
            </label>
        )
    }
    )

    return (
        <div className='container-with-background'>
            <div className='single-color-background-container'></div>
            <div className="slider table-container">
                {renderInput}
                {mappedChildren}
            </div>
        </div>
    )
}
