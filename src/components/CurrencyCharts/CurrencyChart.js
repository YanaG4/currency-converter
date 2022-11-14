import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from './CustomTooltip';
import { useSelector } from 'react-redux';
import { getCurrencyChartTimeseries } from '../../features/currency/currencySlice';

export default function CurrencyChart() {
    const data = useSelector(getCurrencyChartTimeseries)
    return (
        <div style={{ backgroundColor: 'white', flex: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '600px', height: '600px' }}>
            <ResponsiveContainer width="70%" height="50%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="currencyChartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="rgb(65, 88, 208)" stopOpacity={1} />
                            <stop offset="95%" stopColor="rgb(200, 80, 140)" stopOpacity={0.6} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="4" vertical={false} />
                    <XAxis dataKey="date" interval={0} />
                    <YAxis dataKey='exchangeRate' domain={[dataMin => ((dataMin) / 1.1).toFixed(4), dataMax => (dataMax * 1.1).toFixed(4)]} />
                    <Tooltip wrapperStyle={{ border: 'none', outline: 'none' }} content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="exchangeRate" stroke="rgb(65, 88, 208)" fillOpacity={1} fill="url(#currencyChartGradient)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
