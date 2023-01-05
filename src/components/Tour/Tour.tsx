import React, {useEffect, useState} from 'react';
import {CircularProgress, Container} from "@mui/material";
import Title from "../UI/Title/Title";
import {MCardTour} from "../CardTour/CardTour";
import Grid from "@mui/material/Unstable_Grid2";
import LinkHome from "../UI/LinkHome/LinkHome";
import {useSelector} from "react-redux";
import {getToursThunk} from "../../redux/tour-reduser";
import {isFetchingSelector, tourSelector} from "../../redux/selectors/tour-selector";

import s from './Tour.module.css'
import {useAppDispatch} from "../../redux/store";
import {cardAnimation} from "../../App";

const Tour = () => {
    const isFetching = useSelector(isFetchingSelector)
    const tours = useSelector(tourSelector)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getToursThunk())

    }, [])

    return (

        tours != null ?

            <div>
                <Container fixed sx={{mt: 10}}>
                    <LinkHome/>
                    <Title title={'Экскурсии'} recommend={'Лучший выбор экскурсий, билетов и развлечений в ОАЭ'}
                           flex='center'/>

                    {isFetching
                        ? <div className={s.progress}>
                            <CircularProgress/>
                        </div>

                        : <Grid container justifyContent='center' spacing={7} marginBottom='20px'>
                            {tours.map((el,i) => <MCardTour
                                key={el._id}
                                initial='hidden'
                                whileInView='visible'
                                viewport={{once: true}}
                                custom={i}
                                variants={cardAnimation}
                                tour={el}/>)}
                        </Grid>
                    }

                </Container>
            </div>
            : <div className={s.load}>
                <div className={s.progress}>
                    <CircularProgress/>
                </div>

            </div>

    );
};

export default Tour;