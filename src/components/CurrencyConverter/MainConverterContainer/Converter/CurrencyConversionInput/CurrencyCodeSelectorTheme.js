import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
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