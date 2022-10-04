import React, { useEffect } from 'react'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';





export default function CurrencyCodeSelector({ currentCode, onChangeCode, currencyCodes, labelName }) {
    useEffect(() => {
        console.log(currentCode);
        console.log(currencyCodes[0].code);
        //console.log(currencyCodes.find(currencyCode => currencyCode.code === currentCode));
    }, [currentCode])

    return (
        <>
            <label htmlFor={labelName.toLowerCase()}>{labelName}</label>
            {/* <select id={labelName.toLowerCase()} className='input-fields' value={currentCode} onChange={onChangeCode} >
                {currencyCodes
                    .map(currencyCode => (
                        <option key={currencyCode.name} value={currencyCode.code}>{`${currencyCode.code} — ${currencyCode.name}`}</option>
                    ))}
            </select> */}

            <Autocomplete
                id={labelName.toLowerCase()}
                sx={{ width: '100%' }}
                options={currencyCodes}
                onChange={(event, value) => { onChangeCode(labelName.toLowerCase(), value?.code) }}
                value={currencyCodes.find(currencyCode => currencyCode.code === currentCode) || null}
                autoHighlight
                getOptionLabel={(option) => option.code + " — " + option.name}
                disableClearable={true}
                renderOption={(props, option) => (
                    <Box
                        component="li"
                        sx={{
                            '& > img': { mr: 2, flexShrink: 0 },
                            '& > .optionCode': { minWidth: 50 },
                            '& > .optionName': { color: 'gray', fontWeight: 300 },
                            textAlign: 'left',
                            display: "flex",
                            alignItems: "flex-start"
                        }} {...props}>
                        <img
                            loading="lazy"
                            width="20"
                            src={`https://flagcdn.com/w20/${option.countryCode.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w40/${option.countryCode.toLowerCase()}.png 2x`}
                            alt=""
                        />
                        <span className='optionCode'> {option.code}</span> <span className='optionName'> {option.name}</span>
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'off', // disable autocomplete and autofill
                        }}
                    />
                )}
            />
        </>
    )
}
