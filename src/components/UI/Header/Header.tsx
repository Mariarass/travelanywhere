import React, {useEffect, useState} from 'react';
import {AppBar, Box, IconButton, MenuItem, Menu, Toolbar, Tooltip, Badge} from "@mui/material";
import {NavLink} from "react-router-dom";
import {Favorite, Instagram, Language, MailOutline, WhatsApp} from "@mui/icons-material";
import ru from '../../../assets/russia.png'
import eng from '../../../assets/eng.png'
import s from './Header.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import {SideBar} from "../SideBar/SideBar";
import {useDispatch, useSelector} from "react-redux";
import {favoriteSelector} from "../../../redux/selectors/tour-selector";
import {changeFavoriteAC} from "../../../redux/tour-reduser";
import {getFavorite} from "../../PageItemTour/CheckBoxFavorite";
import logo from '../../../assets/logo.png'


const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [sideBar, setSideBar] = useState(false)
    const dispatch = useDispatch()

    const lenFavorite = useSelector(favoriteSelector)


    const toggleSideBar = (open: boolean) => {
        setSideBar(open);
    };

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const data = getFavorite()
        data && dispatch(changeFavoriteAC(data.length))
    }, [])

    return (
        <AppBar component="nav"
                sx={{background: 'white', boxShadow: 'none', display: 'flex', borderBottom: '1px solid #E8E8E8FF'}}>

            <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar}/>

            <Toolbar sx={{justifyContent: 'space-between'}}>
                <div>
                    <img className={s.logo} src={logo}/>
                </div>


                <div className={s.navBarContainer}>
                    <div className={s.navBar}>
                        <NavLink to={'/about'} className={s.link}>
                            О нас
                        </NavLink>
                        <NavLink to={'/tour'} className={s.link}>
                            Экскрусии
                        </NavLink>
                        <NavLink to={'/ticket'} className={s.link}>
                            Билеты
                        </NavLink>

                    </div>


                    <div className={s.navLink}>

                        <a href={'https://www.instagram.com/travelanywherekey/'} target={"_blank"}>
                            <IconButton>
                                <Instagram/>
                            </IconButton>
                        </a>
                        <a href={'https://wa.me/971585286861?text='} target={"_blank"}>
                            <IconButton>
                                <WhatsApp/>
                            </IconButton>
                        </a>
                        <a className="mailtoui" href="mailto:mr.isaev86@gmail.com">
                            <IconButton>
                                <MailOutline/>
                            </IconButton>
                        </a>


                    </div>
                    <NavLink to={'/favorite'}>
                        <IconButton>
                            <Badge badgeContent={lenFavorite} color={'warning'}>

                                <Favorite color="action"/>
                            </Badge>

                        </IconButton>

                    </NavLink>


                    <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>

                        <Tooltip title="Language">
                            <IconButton
                                onClick={handleClick}
                                size="small"

                            >
                                <Language/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        disableScrollLock={true}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        transformOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    >
                        <MenuItem>
                            <img className={s.language} src={ru}/> Ru
                        </MenuItem>
                        <MenuItem>
                            <img className={s.language} src={eng}/>Eng
                        </MenuItem>


                    </Menu>
                    <div className={s.menuBar}>

                        <IconButton onClick={() => toggleSideBar(true)}>
                            <MenuIcon/>
                        </IconButton>


                    </div>

                </div>


            </Toolbar>


        </AppBar>
    );
};

export default Header;