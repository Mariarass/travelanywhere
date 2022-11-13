import React, {useState} from 'react';
import {
    Autocomplete,
    AutocompleteValue,
    Box,
    Button,
    Card,
    Divider,
    FormControlLabel, IconButton,
    styled,
    Switch,
    TextField, Tooltip
} from "@mui/material";
import s from "./PageItemTour.module.css";
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, {Dayjs} from "dayjs";
import {ArrowLeft, ArrowRight, ControlPoint, RemoveCircleOutline, Search} from "@mui/icons-material";

const CssInput = styled(TextField)({

    background: 'rgba(145, 158, 171, 0.08)',
    color: 'AED5D2',
    fontSize: 10,
    marginBottom: 15,
    width: '100%',

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(145, 158, 171, 0.01)',

        },
        '&:hover fieldset': {
            borderColor: 'rgba(145, 158, 171, 0.01)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(145, 158, 171, 0.01)',

        },
    },

})
const MaterialUISwitch = styled(Switch)(({theme, value}) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: value ? '#ed6c02' : '#2D6365FF',


        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));
const CssButton = styled(Button)({
    background: 'rgb(45, 99, 101)',
    color: 'white',
    ':hover': {
        background: 'rgb(40,73,75)'
    },
    ':disabled': {
        background: 'rgba(145, 158, 171, 0.08)'

    }


})


const CardBook = () => {
    const [date, setDate] = useState<Dayjs | null>(dayjs())
    const [guest, setGuest] = useState<number>(0)
    const [emirate, setEmirate] = useState<string>('')
    const [day, setDay] = useState(true)
    const [tool, setTool] = useState(false)

    const handleChange = (newValue: Dayjs | null) => {
        setDate(newValue);
    };
    const changeEmirates = (event: React.SyntheticEvent, value: AutocompleteValue<unknown, undefined, undefined, undefined>) => {
        if (typeof value === 'string') {
            setEmirate(value)
        } else {
            setEmirate('')
        }
    }

    const handleTooltipOpen = () => {
        setTool(true)
    }
    const handleTooltipClose = () => {
        setTool(false);
    };

    const addGuest = () => {
        setGuest(guest + 1)
        guest===3&&setTool(true)


    }
    const removeGuest = () => {
        setGuest(guest - 1)
    }


    return (
        <div className={s.containerCard}>
            <div className={s.priceContainer}>
                <h3 className={s.price}>250$</h3>
                <p> /за экскурсию</p>
            </div>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    disablePast={true}
                    inputFormat="DD/MM/YYYY"
                    value={date}
                    onChange={handleChange}
                    renderInput={(params) => <CssInput {...params} />}
                />
            </LocalizationProvider>

            <CssInput
                value={guest}
                InputProps={{
                    endAdornment: (
                        <div style={{display: "flex"}}>
                            <IconButton disabled={guest <= 0} sx={{width: '30px', height: '30px'}}
                                        onClick={removeGuest}>
                                <RemoveCircleOutline sx={{width: '20px', height: '20px'}}/>
                            </IconButton>

                            <IconButton disabled={guest === 4} sx={{width: '30px', height: '30px'}}
                                        onClick={addGuest}>

                                <Tooltip
                                    PopperProps={{
                                        disablePortal: true,
                                    }}
                                    onClose={handleTooltipClose}
                                    open={tool}
                               
                                    title="Достигнуто максимальное количество гостей, напишете нам в What`s up для согласования большего количества людей"
                                >
                                    <ControlPoint sx={{width: '20px', height: '20px'}}/>
                                </Tooltip>
                            </IconButton>


                        </div>

                    ),
                }}


            />


            <Autocomplete
                options={['Дубай', 'Рас-Эль-Хайма', 'Абу-Даби', 'Шарджи', 'Фуджейра', 'Аджман']}
                sx={{borderRadius: 10}}
                onChange={(event, value) => changeEmirates(event, value)}
                renderInput={(params) => <CssInput  {...params} placeholder='Откуда забрать'/>}
            />

            <FormControlLabel
                control={<MaterialUISwitch value={day}/>}
                value={day}
                onChange={() => setDay(!day)}
                label={day ? 'Дневная экскурсия' : 'Ночная экскурсия'}
                sx={{mb: 2}}
            />

            <div className={s.payContainer}>
                <p>К оплате </p>
                <h3 className={s.pay}>250$</h3>
            </div>

            <CssButton disabled={emirate == ''}>

                Забронировать бесплатно

            </CssButton>

        </div>
    );
};

export default CardBook;