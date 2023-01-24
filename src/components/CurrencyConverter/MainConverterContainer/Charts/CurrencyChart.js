import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from './CustomTooltip';
import { useSelector } from 'react-redux';
import { getCurrencyChartTimeseries } from '../../../../features/currency/currencySlice'
import useWindowSize from '../../../../utils/useWindowSize';

export default function CurrencyChart() {
    const data = useSelector(getCurrencyChartTimeseries)
    const { innerWidth } = useWindowSize()
    function getInterval() {
        //console.log(data.length);
        if (data.length < 10) //1 week chart
            return innerWidth > 680 ? 0 : 1
        if (data.length < 35) { //1 month & 1 year chart
            if (innerWidth > 950)
                return 1
            if (innerWidth < 560)
                return 5
            return 3
        }
    }
    return (
        <div style={{ flex: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', postition: 'relative', width: '100%', height: '350px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 40,
                        right: 20,
                        left: 0,
                        bottom: 20,
                    }}
                >
                    <defs>
                        <linearGradient id="currencyChartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="rgb(65, 88, 208)" stopOpacity={1} />
                            <stop offset="95%" stopColor="rgb(200, 80, 140)" stopOpacity={0.6} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="4" vertical={false} />
                    <XAxis dataKey="date" interval={getInterval()} tick={{ fontSize: '12px', fontWeight: '400', transform: 'translate(0, 6)' }} />
                    <YAxis dataKey='exchangeRate'
                        domain={[dataMin => ((dataMin) / 1.1).toFixed(3), dataMax => (dataMax * 1.1).toFixed(3)]}
                        tick={{ fontSize: '13px', fontWeight: '500', transform: 'translate(-3, -5)' }}
                        hide={innerWidth < 420}
                    />
                    <Tooltip wrapperStyle={{ border: 'none', outline: 'none' }} content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="exchangeRate" stroke="rgb(65, 88, 208)" fillOpacity={1} fill="url(#currencyChartGradient)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
