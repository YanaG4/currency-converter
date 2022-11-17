import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
//not used in current design
export default function ProgressBar() {
    return (
        <div styles={{ height: '100%', width: '100%', display: 'flex', alignItem: 'center', justifyContent: 'center' }}>
            <CircularProgress />
        </div>
    )
}
