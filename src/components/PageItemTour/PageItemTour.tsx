import React, {useEffect, useState} from 'react';
import {Box, Button, Card, Checkbox, CircularProgress, Container, Divider, IconButton, TextField} from "@mui/material";
import LinkHome from "../UI/LinkHome/LinkHome";
import s from './PageItemTour.module.css'
import {
    AccessTime,
    DirectionsCarFilledOutlined,
    Favorite,
    FavoriteBorder,
    LocationOnOutlined,
    WhatsApp
} from "@mui/icons-material";
import Title from "../UI/Title/Title";
import OppositeContentTimeline from "../TimeLine";
import CardBook from "./CardBook/CardBook";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {changeCurrentTourAC, getTourPageThunk} from "../../redux/tour-reduser";
import {currentTourSelector, isFetchingSelector} from "../../redux/selectors/tour-selector";
import ImgList from "./ImgList/ImgList";
import CheckBoxFavorite from "./CheckBoxFavorite";
import {useAppDispatch} from "../../redux/store";


const PageItemTour = React.memo(() => {

    const currentTour = useSelector(currentTourSelector)
    const param = useParams()
    const dispatch = useAppDispatch()
    const isFetching = useSelector(isFetchingSelector)

    useEffect(() => {
        if (param.id) {
            dispatch(getTourPageThunk(param.id))
        }
        return () => {
            dispatch(changeCurrentTourAC(null))
        }

    }, [])


    return (
        isFetching

            ? <div className={s.progress}><CircularProgress/></div>
            : currentTour != null
                ? <Container fixed sx={{mt: 10}}>
                    <LinkHome></LinkHome>
                    <div className={s.header}>
                        <Title title={currentTour.header} flex='start'
                               recommend={currentTour.statusHeader}>
                            <CheckBoxFavorite/>
                        </Title>

                    </div>

                    <div className={s.details}>
                        <div>
                            <div className={s.flex}>
                                <AccessTime/>
                                <div>
                                    <p className={s.bold}>Длительность</p>
                                    <p>{currentTour.time}</p>
                                </div>

                            </div>


                        </div>
                        <div>
                            <div className={s.flex}>
                                <LocationOnOutlined/>
                                <div>
                                    <p className={s.bold}>Место встречи</p>
                                    <p>{currentTour.place}</p>
                                </div>

                            </div>


                        </div>
                        <div>
                            <div className={s.flex}>
                                <DirectionsCarFilledOutlined/>
                                <div>
                                    <p className={s.bold}>Проходит</p>
                                    <p>{currentTour.transport}</p>
                                </div>


                            </div>


                        </div>

                    </div>

                    <div className={s.container}>

                        <ImgList imgArr={currentTour.imgArray}/>
                        <CardBook price={+currentTour.price.slice(0, -1)} header={currentTour.header}/>
                    </div>


                    <Title title={'Описание экскурсии'} flex={'start'}/>
                    <p className={s.description}>
                        {currentTour.descriptionFull}
                    </p>

                    <Title title={'Маршрут экскурсии'} flex={'start'}/>
                    <OppositeContentTimeline/>
                    <Title title={'Организационные детали'} flex={'start'}/>

                    <h4>Как проходит экскурсия </h4>
                    <p className={s.description}>
                        {currentTour.transportDetailes}
                    </p>

                    <h4>Что входит в стоимость</h4>
                    <p className={s.description}>
                        {currentTour.free}
                    </p>
                    <h4>Оплачивается отдельно</h4>

                    {currentTour.expenses.map((el: string, idx: number) => <p key={idx}
                                                                              className={s.description}>- {el}</p>)}


                    <div className={s.call}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/OSt-f8eOYgY"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>

                    </div>


                    <Title title={'Бронируйте экскурсию бесплатно на сайте  или пишите в What`s app'} flex={'center'}/>
                    <div className={s.call}>
                        <IconButton>
                            <WhatsApp fontSize={'large'}/>
                        </IconButton>

                    </div>


                </Container>
                : <div>

                </div>


    );
});

export default PageItemTour;