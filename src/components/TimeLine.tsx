import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, {timelineItemClasses} from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import {DirectionsWalk, LocationOn} from "@mui/icons-material";
import {Card} from "@mui/material";
import burj from '../assets/burj.jpg'
import s from './TimeLine.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {TypeTour} from "../redux/tour-reduser";
import {arrayPlaceSelector} from "../redux/selectors/tour-selector";

export default function OppositeContentTimeline() {


    const place = useSelector(arrayPlaceSelector)

    return (
        place != null
            ? <React.Fragment>
                <Timeline sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}>
                    {place.map((el,idx) => {
                        return (
                            <TimelineItem key={idx}>
                                <TimelineSeparator>

                                    <LocationOn/>


                                    <TimelineConnector/>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div>
                                        {el}

                                    </div>
                                </TimelineContent>
                            </TimelineItem>

                        )
                    })}
                </Timeline>
            </React.Fragment>
            : <div></div>


    );
}
