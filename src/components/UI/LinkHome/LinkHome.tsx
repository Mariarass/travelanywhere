import React from 'react';
import {NavLink} from "react-router-dom";
import s from './LinkHome.module.css'

const LinkHome = () => {
    return (
       <NavLink to={'/'} className={s.link}>
           Главная
       </NavLink>
    );
};

export default LinkHome;