import React from 'react';
import {Autocomplete, Box, Container, IconButton, styled, TextField} from "@mui/material";
import LinkHome from "../UI/LinkHome/LinkHome";
import Title from "../UI/Title/Title";
import Grid from "@mui/material/Unstable_Grid2";
import CardTicket from "../CartTicket/CardTicket";
import {CheckCircle} from "@mui/icons-material";

export const CssTextField = styled(TextField)({
    background: 'white',
    borderRadius: 3,


    '& label.Mui-focused': {
        color: '#AED5D2',
    },
    '& label': {
        color: '#AED5D2',
    },


    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: 'none'


        },
        '&:hover fieldset': {
            border: 'none'
        },
        '&.Mui-focused fieldset': {
            border: 'none'

        },
    },
})
const Ticket = () => {
    return (
        <Container fixed sx={{mt: 10}}>
            <LinkHome/>
            <Title title={'Билеты'} recommend={'У нас дешевле чем в кассе.'} flex='center'/>
            <Box display='flex' justifyContent='center' gap='20px' mb='40px'>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={['Дубай', 'Абу-Даби']}
                    sx={{width: 200}}
                    size="small"
                    renderInput={(params) => <CssTextField    {...params} label="Эмират"/>}
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={['Земля', 'Вода', 'Воздух']}
                    sx={{width: 200}}
                    size="small"
                    renderInput={(params) => <CssTextField  {...params} label="Место"/>}
                />
                <IconButton>
                    <CheckCircle/>
                </IconButton>

            </Box>
            <Grid container   justifyContent='center' spacing={7} marginBottom='20px'>
                <CardTicket/>
                <CardTicket/>
                <CardTicket/>
                <CardTicket/>
                <CardTicket/>
                <CardTicket/>

            </Grid>


        </Container>
    );
};

export default Ticket;