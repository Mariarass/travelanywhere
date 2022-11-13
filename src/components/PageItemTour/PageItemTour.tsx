import React, {useState} from 'react';
import {Box, Button, Card, Checkbox, Container, Divider, IconButton, TextField} from "@mui/material";
import LinkHome from "../UI/LinkHome/LinkHome";
import Grid from "@mui/material/Unstable_Grid2";
import s from './PageItemTour.module.css'
import burj from '../../assets/burj.jpg'
import frame from '../../assets/frame.jpg'
import place from '../../assets/place.jpg'
import {
    AccessTime,
    DirectionsCar, DirectionsCarFilledOutlined,
    Favorite,
    FavoriteBorder,
    LocationOn,
    LocationOnOutlined,
    WhatsApp
} from "@mui/icons-material";
import Title from "../UI/Title/Title";

import OppositeContentTimeline from "../TimeLine";
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import dayjs from 'dayjs';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import CardBook from "./CardBook";


const PageItemTour = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <Container fixed sx={{mt: 10}}>
            <LinkHome></LinkHome>
            <Title title={'Дубай - первая встерча'} flex='start' recommend={'Индивидуальная экскурсия для 1-4 человек'}>
                <Checkbox icon={<FavoriteBorder sx={{fill: '#FF3554E8'}}/>}
                          checkedIcon={<Favorite sx={{fill: '#FF3554E8'}}/>}/>

            </Title>

            <div className={s.container}>


                <Box>
                    <div className={s.center}>
                        <div className={s.flex}>
                            <AccessTime/>
                            <p>Длительность</p>
                        </div>

                        <p>8 часов</p>

                    </div>
                    <div>
                        <div className={s.flex}>
                            <LocationOnOutlined/>
                            <p>Место встречи</p>
                        </div>
                        <p>у вашего отеля</p>

                    </div>
                    <div >
                        <div className={s.flex} >
                            <DirectionsCarFilledOutlined/>
                            <p>Проходит</p>

                        </div>

                        <p>на машине</p>

                    </div>

                </Box>
                <CardBook/>
            </div>





            <Title title={'Описание экскурсии'} flex={'start'}/>
            <p className={s.description}>
                Экскурсия начнётся возле Вашего отеля, а дальше Вы проведете великолепный день в одном из самых
                современных городов мира: погуляете по восточным базарам, роскошной набережной и цветочному парку, с
                ветерком прокатитесь по искусственному пальмовому острову, увидите знаменитый отель в виде паруса и
                культовый небоскреб «Бурдж-Халифа». Расскажем о жизни, культуре и истории ОАЭ в легкой и запоминающейся
                форме.
            </p>

            <Title title={'Маршрут экскурсии'} flex={'start'}/>
            <OppositeContentTimeline/>
            <Title title={'Организационные детали'} flex={'start'}/>

            <h4>Как проходит экскурсия </h4>
            <p className={s.description}>
                На комфортном автомобиле для 4-х гостей.Маршрут может меняться по Вашему желанию. Если Вы не хотите
                посещать то или иное место, наш гид всегда предложит Вам альтернативный вариант
            </p>

            <h4>Что входит в стоимость</h4>
            <p className={s.description}>
                Трансфер из любого отеля Дубая и обратно входит в первоначальную стоимость экскурсии.Вода, салфетки,
                маски и беспроводной интернет - бесплатно.
            </p>
            <h4>Оплачивается отдельно</h4>
            <p className={s.description}>
                - 50$ за проведение ночной экскурсии

                - 140$ трансфер из Фуджейры

                - 100$ трансфер из Абу Даби

                - 100$ трансфер из Рас Эль Хеймы

                - 35$ трансфер из Ум Аль Кувэйна, Аджмана и Шарджи
            </p>
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
    );
};

export default PageItemTour;