import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    { name: '1', Total: '0.8' },
    { name: '2', Total: '0.86' },
    { name: '3', Total: '0.87' },
    { name: '3', Total: '0.79' }
];

export default function CurrencyChart() {
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
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey='Total' domain={[dataMin => ((dataMin) / 1.1).toFixed(2), dataMax => (dataMax * 1.1).toFixed(2)]} />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#currencyChartGradient)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
