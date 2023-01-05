import React from 'react';
import s from './Advantage.module.css'
import guide from '../../../assets/thumbs-up.gif'
import map from '../../../assets/destination.gif'
import money from '../../../assets/save-money.gif'
import fact from '../../../assets/book.gif'
import car from '../../../assets/car.gif'
import Title from "../../UI/Title/Title";
import {motion} from 'framer-motion';
import {cardAnimation} from "../../../App";

const advantage = [
    {id: 1, img: guide, advantage: 'Профессиональные гиды'},
    {id: 2, img: map, advantage: 'Маршрут исходя из опыта и пожеланий гостей'},
    {id: 3, img: money, advantage: 'Гибкость в ценообразовании'},
    {id: 4, img: fact, advantage: 'Интересные и познавательные факты'},
    {id: 5, img: car, advantage: 'Комфотный автомобиль с WI-FI, водой, масками и салфетками'},

]
const Advantage = () => {
    return (
        <div className={s.container}>

            <div className={s.containerAdvantage}>
                <motion.h3 variants={cardAnimation}
                           custom={1} className={s.header}>
                    Нас выбирают<br/>потому что
                </motion.h3>
                <div className={s.advantages}>

                    {advantage.map(el => <motion.div
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once: true}}
                        key={el.id}
                        variants={cardAnimation}
                        custom={el.id}
                        className={s.containerDescription}>

                        <img src={el.img} className={s.img}/>
                        <p>{el.advantage}</p>
                    </motion.div>)

                    }

                </div>
            </div>

        </div>
    );
};

export default Advantage;