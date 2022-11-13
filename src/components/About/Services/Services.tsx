import React, {ChangeEvent, useState} from 'react';
import {Container, IconButton, styled, TextField} from "@mui/material";
import {Add, Search} from "@mui/icons-material";
import Title from "../../UI/Title/Title";
import Grid from "@mui/material/Unstable_Grid2";
import CardTour from "../../CardTour/CardTour";
import CardTicket from "../../CartTicket/CardTicket";
import Reviews from "../Reviews/Reviews";
import Advantage from "../Advantage/Adventage";

const CssTextField = styled(TextField)({

    background: 'white',
    width: 500,
    borderRadius: 30,
    color: 'AED5D2',
    fontSize: 10,

    '& label.Mui-focused': {
        color: '#AED5D2',
    },
    '& label': {
        color: '#AED5D2',
    },

    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
            borderRadius: 30,


        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',

        },
    },
    '@media (max-width: 640px)': {
        width: 280,
    }

})


const Services = () => {
    const [value, setValue] = useState('')

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)

    }
    return (

        <Container fixed>


            <div className="main-article">

                <div>

                    <CssTextField
                        value={value}
                        onChange={onChangeInput}
                        id="custom-css-outlined-input"
                        label="Экскурсия на твой выбор"
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <Search/>
                                </IconButton>
                            ),
                        }}
                    />

                    <Title title='Экскурсии' recommend='Рекомендуемые экскурсии' link='/tour' flex='start'/>

                    <Grid container justifyContent='center' spacing={7} marginBottom='20px'>
                        <CardTour/>
                        <CardTour/>
                        <CardTour/>
                    </Grid>

                    <Title title='Билеты' recommend='Рекомендуемые билеты' link='/ticket' flex='start'/>

                    <Grid container justifyContent='center' spacing={7} marginBottom='20px'>
                        <CardTicket/>
                        <CardTicket/>
                        <CardTicket/>
                    </Grid>



                </div>

                <Title title='О нас' flex='center'/>
                <Title title='Наши счастливые гости' flex='start'/>
                <Reviews/>
                <Title title='Нас выбирают потому что' flex='start'/>

                <Title title='Наша команда' flex='start'/>

            </div>


        </Container>
    );
};

export default Services;