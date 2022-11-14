import React from 'react'
import './CustomTooltip.css'

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="tooltip-label">{payload[0].value}</p>
                <p className="tooltip-value">{label}</p>
            </div>
        );
    }
    return null;
}

export default CustomTooltip;
