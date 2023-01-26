import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from './CustomTooltip';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { getCurrencyChartTimeseries, getStatus } from '../../../../features/currency/currencySlice'
import useWindowSize from '../../../../utils/useWindowSize';

export default function CurrencyChart() {
    const data = useSelector(getCurrencyChartTimeseries)
    const { innerWidth } = useWindowSize()

    const status = useSelector(getStatus)
    const circularProgressSize = 60
    const chartHeight = 350
    let dataPending = status?.currencyTimeseries !== 'fulfilled'
        ? <CircularProgress
            size={circularProgressSize}
            disableShrink={true}
            sx={{
                position: 'absolute',
                bottom: chartHeight / 2 + circularProgressSize / 2,
                left: `calc(50% - ${circularProgressSize / 2}px)`,
                zIndex: 500
            }}
        />
        : null

    function getInterval() {
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

    const chartContainerStyle = { flex: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', postition: 'relative', width: '100%', height: chartHeight }
    const chartStylesWhilePending = { ...chartContainerStyle, opacity: '90%' }

    function formatYAxis(value) {
        let tickValue = value.toFixed(3)
        let toFix = 4
        while (tickValue <= 0 && toFix < 7) {
            tickValue = value.toFixed(toFix)
            toFix++
        }
        if (tickValue > 999)
            tickValue = value.toFixed(1)
        return tickValue;
    }
    return (
        <>
            {dataPending}
            <div style={!dataPending ? chartContainerStyle : chartStylesWhilePending}>
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
                            domain={[dataMin => ((dataMin) / 1.1).toFixed(5), dataMax => (dataMax * 1.1).toFixed(5)]}
                            tick={{ fontSize: '12px', fontWeight: '500', transform: 'translate(-3, -5)' }}
                            tickFormatter={formatYAxis}
                            hide={innerWidth < 420}
                            allowDataOverflow={true}
                        />
                        <Tooltip wrapperStyle={{ border: 'none', outline: 'none' }} content={<CustomTooltip />} />
                        <Area type="monotone" dataKey="exchangeRate" stroke="rgb(65, 88, 208)" fillOpacity={1} fill="url(#currencyChartGradient)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}
