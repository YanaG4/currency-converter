import React from 'react'
//components
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
//redux
import { useSelector, useDispatch } from 'react-redux'
import { setFromCurrency, setToCurrency, getCurrencyInfo } from '../../../features/currency/currencySlice';
//styles
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function CurrencyCodeSelector({ currentCode, labelName }) {
    const dispatch = useDispatch()
    const reduxCurrencyInfo = useSelector(getCurrencyInfo)
    function handleChangeCode(code) {
        labelName === 'From' ? dispatch(setFromCurrency(code)) : dispatch(setToCurrency(code))
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: 'rgb(255, 102, 150)'
            }
        },
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        ".MuiOutlinedInput-notchedOutline": {
                            minHeight: 60,
                            borderRadius: 5,
                            outline: 'none',
                            border: '1px solid rgb(215, 215, 215)',
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: '1px solid rgb(255, 102, 150)'
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: '2px solid rgb(255, 102, 150)'
                        },
                    }
                }
            }
        }
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <label htmlFor={labelName.toLowerCase()}>{labelName}</label>
                <Autocomplete
                    id={labelName.toLowerCase()}
                    sx={{ width: '100%' }}
                    options={reduxCurrencyInfo}
                    onChange={(event, value) => { handleChangeCode(value?.code) }}
                    value={reduxCurrencyInfo.find(currencyCode => currencyCode.code === currentCode) || null}
                    autoHighlight
                    getOptionLabel={(option) => option.code + " — " + option.name}
                    disableClearable={true}
                    renderOption={(props, option) => (
                        <Box
                            component="li"
                            sx={{
                                '& > img': { mr: 2, flexShrink: 0 },
                                '& > .optionCode': { minWidth: 50 },
                                '& > .optionName': { color: 'gray', fontWeight: 300, fontSize: '.9rem' },
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
                    renderInput={(params) => {
                        params.InputProps.startAdornment = (
                            <>
                                <InputAdornment position="start"><img src={`https://flagcdn.com/w40/${reduxCurrencyInfo.find(currencyCode => currencyCode.code === (params.inputProps?.value).split(' ')[0])?.countryCode.toLowerCase() || 'eu'}.png`} /></InputAdornment>
                                {params.InputProps.startAdornment}
                            </>
                        );

                        return <TextField {...params} variant="outlined" />;
                    }
                    }
                />
            </ThemeProvider>
        </>
    )
}
