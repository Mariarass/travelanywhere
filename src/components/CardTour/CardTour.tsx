import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import {Box, Card, CardActionArea, CardMedia, styled, TextField} from "@mui/material";
import s from "./CardTour.module.css";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import {NavLink} from "react-router-dom";


const CssCard = styled(Card)({


    minWidth:200,
    borderRadius: 20,
    '&:hover':{
        background:'#D0D5FF'
    }



})

const CardTour = () => {
    return (
        <NavLink to={'/card'} style={{textDecoration:'none'}}>
        <Grid>
            <CssCard>
                <CardActionArea sx={{padding: 2}}>
                    <CardMedia sx={{borderRadius: 4}}
                               component="img"
                               height="250"
                               image="https://sun9-56.userapi.com/impg/C-wUhToXs-GIq-1_RNTB63eBd32uVbAm_ohEcA/WkjOYvuxcoA.jpg?size=939x1080&quality=96&sign=f24a53a7723207ac8d304e43dbea7cf0&type=album"
                               alt="Paella dish"
                               title='hello'
                    />

                    <Box display='flex' paddingTop='10px' gap='10px' >
                        <Box>
                            <p className={s.group}>
                                индивидуальная экскурсия
                            </p>
                        </Box>

                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <AccessTimeFilledIcon sx={{
                                fontSize: 15,
                                fill: '#FFC567',
                                display: 'flex',
                                justifyContent: 'end'
                            }}/>
                            <p className={s.hour}>8ч</p>


                        </Box>


                    </Box>


                    <h3 className={s.headerCard}>Дубай - первая встреча</h3>
                    <p className={s.price}>250$</p>
                </CardActionArea>


            </CssCard>

        </Grid>
        </NavLink>
    );
};

export default CardTour;