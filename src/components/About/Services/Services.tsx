import React, {useEffect} from 'react';
import {CircularProgress, styled, TextField} from "@mui/material";
import Title from "../../UI/Title/Title";
import Grid from "@mui/material/Unstable_Grid2";
import {MCardTour} from "../../CardTour/CardTour";

import s from './Services.module.css'
import {useSelector} from "react-redux";
import {getTicketThunk,} from "../../../redux/ticket-reducer";
import {tourSelector} from "../../../redux/selectors/tour-selector";
import {ticketSelector} from "../../../redux/selectors/ticket-selector";
import {getToursThunk} from '../../../redux/tour-reduser';
import {useAppDispatch} from "../../../redux/store";
import {motion} from 'framer-motion';
import {cardAnimation} from "../../../App";
import {MCardTicket} from "../../CartTicket/CardTicket";


const Services = () => {

    const tours = useSelector(tourSelector)
    const tickets = useSelector(ticketSelector)
    const dispatch = useAppDispatch()
    const toursSlice = tours?.slice(0, 3)
    const ticketSlice = tickets?.slice(0, 3)


    useEffect(() => {
        dispatch(getToursThunk())
        dispatch(getTicketThunk())

    }, [])


    return (
        toursSlice != null && ticketSlice != null ?
            <motion.div className={s.container}>

                <div className={s.servicesContainer}>

                    <Title title='Экскурсии' recommend='Рекомендуемые экскурсии' link='/tour' flex='start'/>


                    <Grid container justifyContent='center' spacing={7} marginBottom='20px'>
                        {toursSlice.map((el, i) =>
                            <MCardTour
                                key={el._id}
                                initial='hidden'
                                whileInView='visible'
                                viewport={{once:true}}
                                custom={i} variants={cardAnimation} tour={el}/>)}
                    </Grid>


                    <Title title='Билеты' recommend='Рекомендуемые билеты' link='/ticket' flex='start'/>

                    <Grid container justifyContent='center' spacing={7} marginBottom='20px'>
                        {ticketSlice.map((el, i) =>
                            <MCardTicket
                                key={el._id}
                                initial='hidden'
                                whileInView='visible'
                                viewport={{once:true}}
                                custom={i} variants={cardAnimation}
                                ticket={el}
                            />)}

                    </Grid>


                </div>


            </motion.div>
            : <div className={s.progress}><CircularProgress/></div>


    );
};

export default Services;