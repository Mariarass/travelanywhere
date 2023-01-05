import React from 'react';
import { IconButton} from "@mui/material";
import {NavLink} from "react-router-dom";

import {Instagram, MailOutline, WhatsApp} from "@mui/icons-material";
import s from './Footer.module.css'
import logo from '../../../assets/logo.png'

const Footer = () => {
    return (
        <footer>
            <div className={s.footer}>
                <div>
                    <img className={s.logo} src={logo}/>
                    <div className={s.nav}>
                        <NavLink  to={'/about'}  className={s.link}>
                            О нас
                        </NavLink>
                        <NavLink to={'/tour'}  className={s.link}>
                            Экскрусии
                        </NavLink>
                        <NavLink to={'/ticket'}  className={s.link}>
                            Билеты
                        </NavLink>

                    </div>
                    <div className={s.social}>

                        <a href={'/'} target={"_blank"}>
                            <IconButton>
                                <Instagram/>
                            </IconButton>
                        </a>
                        <a href={'/'} target={"_blank"}>
                            <IconButton>
                                <WhatsApp/>
                            </IconButton>
                        </a>
                        <a href={'/'} target={"_blank"}>
                            <IconButton>
                                <MailOutline/>
                            </IconButton>
                        </a>
                    </div>



                </div>



            </div>
        </footer>
    );
};

export default Footer;