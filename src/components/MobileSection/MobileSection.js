import React from 'react'
import './MobileSection.scss'
import ToggleTheme from '../Elements/ToggleTheme/ToggleTheme'

export default function MobileSection() {
    return (
        <>
            <div className='mobile-container'>
                <img src='images/iphone_ipad2.png' alt='Mobile and tablet view of the currency converter.' />
                <div className='mobile-text'>
                    <h4>Responsive Design.</h4>
                    <div className='text'>
                        Check live rates, send money securely, set rate alerts, receive notifications and more</div>
                    <div className='text small-text'>
                        Using Pure CSS.</div>

                    <h4>Try color change!</h4>
                    <div className='text'>
                        Pick a color scheme that suits you.<br /> Warm for a more comforting experience and cold for a more focused one.</div>
                    <div className='button'>
                        <ToggleTheme />
                    </div>
                    <div className='text small-text'>
                        Using SCSS.</div>
                </div>
            </div>
        </>
    )
}
