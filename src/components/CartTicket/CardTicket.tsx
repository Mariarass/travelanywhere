import React, {useState} from 'react';
import s from './CardTicket.module.css'
import {
    Box,
    Card,
    CardActionArea,
    CardMedia,
    Collapse,
    IconButton,
    IconButtonProps,
    styled,
    Tooltip
} from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Grid from "@mui/material/Unstable_Grid2";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Email, MailOutline} from '@mui/icons-material';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const CardTicket = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <Grid>
            <Card sx={{minWidth: 200, borderRadius: 3, '&:hover': {background: '#FFE5A0'}}}>
                <CardActionArea sx={{padding: 2}} onClick={handleExpandClick}>
                    <CardMedia sx={{borderRadius: 2}}
                               component="img"
                               height="200"
                               image="https://sun9-56.userapi.com/impg/C-wUhToXs-GIq-1_RNTB63eBd32uVbAm_ohEcA/WkjOYvuxcoA.jpg?size=939x1080&quality=96&sign=f24a53a7723207ac8d304e43dbea7cf0&type=album"
                               alt="Paella dish"
                    />


                    <Box width='230px' mt='10px' height='60px' display='flex'  alignItems='center'>

                        <h3 className={s.headerCard}>
                            Бурдж-Халифа
                            124 этаж и 125 этаж
                        </h3>

                    </Box>
                    <div className={s.ExpandMore}>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"


                        >
                            <ExpandMoreIcon/>
                        </ExpandMore>


                    </div>


                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                            <AccessTimeFilledIcon sx={{
                                fontSize: 15,
                                fill: '#FFC567',


                            }}/>

                            <p className={s.hour}>
                                10:00-11:00 до 17:00-19:00.
                            </p>
                        </Box>
                        <Box width='230px' mt='10px'>
                            <p className={s.hour}>Десткий (4 - 16 лет) — 30 AED, дети до 4 лет - бесплатно.</p>
                        </Box>

                        <Box display='flex' justifyContent='space-between' alignItems={'center'}>
                            <p className={s.price}>250$</p>
                            <Tooltip title="Написать в what`s app для заказа">
                                <IconButton>
                                    <MailOutline/>
                                </IconButton>
                            </Tooltip>

                        </Box>


                    </Collapse>
                </CardActionArea>
            </Card>

        </Grid>

    );
};

export default CardTicket;