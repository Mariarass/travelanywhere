import React from 'react';
import {Container} from "@mui/material";
import Header from "../UI/Header/Header";
import Title from "../UI/Title/Title";
import CardTour from "../CardTour/CardTour";
import Grid from "@mui/material/Unstable_Grid2";
import LinkHome from "../UI/LinkHome/LinkHome";

const Tour = () => {
    return (
        <div>


            <Container fixed  sx={{mt:10}}>
                <LinkHome/>
               <Title title={'Экскурсии'} recommend={'Лучший выбор экскурсий, билетов и развлечений в ОАЭ'} flex='center'/>
                <Grid container  justifyContent='center' spacing={7} marginBottom='20px'>
                    <CardTour/>
                    <CardTour/>
                    <CardTour/>
                    <CardTour/>
                    <CardTour/>
                    <CardTour/>


                </Grid>


            </Container>

        </div>

    );
};

export default Tour;