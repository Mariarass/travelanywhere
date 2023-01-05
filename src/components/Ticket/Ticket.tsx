import React, {useEffect, useState} from 'react';
import {
    Autocomplete,
    Box,
    CircularProgress,
    Container,
    ThemeProvider
} from "@mui/material";
import LinkHome from "../UI/LinkHome/LinkHome";
import Title from "../UI/Title/Title";
import Grid from "@mui/material/Unstable_Grid2";
import {MCardTicket} from "../CartTicket/CardTicket";
import {CssInput, theme} from "../PageItemTour/CardBook/CardBook";
import {getTicketThunk, TypeTicket} from "../../redux/ticket-reducer";
import {useSelector} from "react-redux";
import {isFetchingSelectorTicket, ticketSelector} from "../../redux/selectors/ticket-selector";
import s from './Ticket.module.css'
import {useAppDispatch} from '../../redux/store';
import {cardAnimation} from "../../App";

const optionsForEmirates = ['Дубай', 'Абу-Даби']
const optionsForWhere = ['Земля', 'Вода', 'Воздух']


const filerTicket = (tickets: TypeTicket[], emirates: string | null, where: string | null) => {

    return tickets.filter(el =>
        (emirates != null ? el.city === emirates : el)
        && (where != null ? el.where === where : el)
    )

}

const Ticket = () => {
    const isFetching = useSelector(isFetchingSelectorTicket)
    const tickets = useSelector(ticketSelector)
    const [emiratesValue, setEmiratesValue] = useState<string | null>(null)
    const [whereValue, setWhereValue] = useState<string | null>(null)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTicketThunk())
    }, [])


    const changeEmiratesValue = (event: any, newValue: string | null) => {
        setEmiratesValue(newValue)

    }
    const changeWhereValue = (event: any, newValue: string | null) => {
        setWhereValue(newValue)

    }


    const filteredAffairs = tickets != null ? filerTicket(tickets, emiratesValue, whereValue) : null


    return (

        filteredAffairs != null ?
            <ThemeProvider theme={theme}>
                <Container fixed sx={{mt: 10}}>
                    <LinkHome/>
                    <Title title={'Билеты'} recommend={'У нас дешевле чем в кассе.'} flex='center'/>
                    <Box display='flex' justifyContent='center' alignItems='center' gap='20px' mb='40px'>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={optionsForEmirates}
                            sx={{width: 200}}
                            value={emiratesValue}
                            onChange={changeEmiratesValue}
                            renderInput={(params) => <CssInput   {...params} label="Эмират"/>}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={optionsForWhere}
                            sx={{width: 200}}
                            value={whereValue}
                            onChange={changeWhereValue}
                            renderInput={(params) => <CssInput  {...params} label="Место"/>}
                        />


                    </Box>

                    <Grid container justifyContent='center' spacing={7} marginBottom='20px'>

                        {isFetching  //проверка на загрузку
                            ? <div className={s.progress}>
                                <CircularProgress/>
                            </div>

                            : filteredAffairs.length != 0 //если не пустой список билетов
                                ? filteredAffairs.map((el,i) => <MCardTicket key={el._id}
                                                                         initial='hidden'
                                                                         whileInView='visible'
                                                                         viewport={{once: true}}
                                                                         custom={1} variants={cardAnimation}
                                                                         ticket={el}/>)
                                : <div className={s.error}>К сожалению, билетов нет</div>

                        }


                    </Grid>


                </Container>
            </ThemeProvider>
            :
            <div className={s.load}>
                <div>
                    <CircularProgress/>
                </div>

            </div>
    );
};

export default Ticket;