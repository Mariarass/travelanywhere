import React from 'react';
import {Box, Container, IconButton} from "@mui/material";
import {NavLink} from "react-router-dom";

import {Instagram, MailOutline, Timeline, WhatsApp} from "@mui/icons-material";
import s from './Footer.module.css'
import {TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";

const Footer = () => {
    return (
        <footer>
            <div className={s.footer}>
                <div>
                    <p>logo</p>
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

                    <div>
                        @2021
                    </div>


                </div>



            </div>
        </footer>
    );
};

export default Footer;