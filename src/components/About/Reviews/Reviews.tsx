import * as React from 'react';
import Box from '@mui/material/Box';

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {Avatar, IconButton} from "@mui/material";
import {useState} from "react";
import {Grade} from "@mui/icons-material";
import s from './Reviews.module.css'
import tourist1 from '../../../assets/tourist1.jpeg'
import tourist2 from '../../../assets/tourist2.jpeg'
import tourist3 from '../../../assets/tourist3.jpeg'
import tourist4 from '../../../assets/tourist4.jpeg'
import tourist5 from '../../../assets/tourist5.jpeg'
import {motion} from 'framer-motion';

const steps = [
    {
        label: 'Марина',
        img: tourist1,
        description: `Начну пожалуй с момента её заказа. Всё быстро, легко и просто, 15 минут и уже всё подтверждено организатором, назначено время, даны контакты гида. 
Нашим гидом был Денис. Приехал за нами вовремя, машина, в которой нам предстояло находиться большое количество времени была чистая, как внутри, так и снаружи. 
О самой экскурсии могу сказать, что мы остались в восторге! Посмотрели все основные достопримечательности. Денис также смог вписать и наши определенные пожелания в саму экскурсию, при этом без утраты времени и качества самой экскурсии.`,
    },
    {
        label: 'Ольга',
        img: tourist2,
        description:
            'Очень понятная и насыщенная Экскурсия! ' +
            'У нас был гид - Денис. Спасибо ему за интересную экскурсию, доступно и понятно все рассказал, ' +
            'отвечал на все вопросы, время пролетело незаметно и очень интересно. ' +
            'На память остались красивые фотографии и море впечатлений. Обязательно вернёмся!',
    },
    {
        label: 'Наталья',
        img: tourist3,
        description: `Двое взрослых и двое детей-подростков. Гидом был Денис.
         Очень познавательная и интересная экскурсия.
          За один день объехали многие достопримечательности Дубая.
          Денис очень  увлекательный экскурсовод, отличный собеседник, рассказывал очень интересные факты об истории Эмиратов, 
          отвечал на все интересующие нас вопросы, в режиме онлайн перестраивал маршрут по нашему желанию. Очень рекомендуем экскурсию. 
          Осталось море впечатлений и отличных фотографий.`,
    },
    {
        label: 'Денис',
        img: tourist4,
        description: `Всё супер! Спасибо огромное гиду Денису,
         столько нового и интересного узнали. Постоянно рассказывал о традициях 
         , достопримечательностях страны и каждого эмирата .
         Дорога была не утомительна , на комфортном автомобиле. 
         Это, пожалуй, самая лучшая экскурсия на которых мы были в своей жизни 👍`,
    },
    {
        label: 'Элина',
        img: tourist5,
        description: `Не оставить отзыв не могу, потому что безумно понравилась экскурсия. 
        15 июля у меня был долгий транзит в Дубаях ,
         но гид Денис сделал этот кусочек свободного времени очень насыщенным.
          Очень приятный и интересный собеседник, много чего интересного узнала ,
           отвечал на все вопросы, учитывал мои пожелания и конечно не давал скучать,
            все 8 часов пролетели познавательно ! 
 Отдельное спасибо за супер видео и фотосъёмку, прям восторг ! `,
    },
];
export const reviewsAnimation = {
    hidden: (rout: number) => ({
        x: rout,
        opacity: 0,

    }),
    visible: (custom: any) => ({
        x:0,
        opacity: 1,
        transition: {delay: custom * 0.2},

    })
}
export default function TextMobileStepper() {

    const [activeStep, setActiveStep] = useState(0);

    const maxSteps = steps.length;


    const handleNext = () => {

        activeStep > maxSteps - 2
            ? setActiveStep(0)
            : setActiveStep(activeStep + 1);

    };

    const handleBack = () => {
        activeStep > 0
            ? setActiveStep((prevActiveStep) => prevActiveStep - 1)
            : setActiveStep(maxSteps - 1)

    };


    return (
        <motion.div className={s.container} initial='hidden' whileInView='visible' viewport={{once: true}}>

            <motion.h3 className={s.header}
                       variants={reviewsAnimation} custom={1}>Наши<br/> счастливые<br/> гости
            </motion.h3>

            <motion.div className={s.reviews} variants={reviewsAnimation} custom={2}>
                <div className={s.headerCard}>

                    <Avatar alt="" src={steps[activeStep].img} sx={{width: 36, height: 36}}/>
                    <p className={s.name}>{steps[activeStep].label}</p>
                    <div className={s.grade}>
                        <Grade sx={{width: 16, fill: '#c75129'}}/>
                        <Grade sx={{width: 16, fill: '#be3c11'}}/>
                        <Grade sx={{width: 16, fill: '#be3c11'}}/>
                        <Grade sx={{width: 16, fill: '#be3c11'}}/>
                        <Grade sx={{width: 16, fill: '#be3c11'}}/>
                    </div>

                </div>

                <p className={s.description}>
                    {steps[activeStep].description}
                </p>

                <div>
                    <IconButton size="small" onClick={handleBack}>
                        <KeyboardArrowLeft/>
                    </IconButton>

                    <IconButton size="small" onClick={handleNext}>
                        <KeyboardArrowRight/>
                    </IconButton>

                </div>

            </motion.div>


        </motion.div>
    );
}
