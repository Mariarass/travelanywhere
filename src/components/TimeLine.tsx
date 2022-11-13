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

export default function OppositeContentTimeline() {
    const state=['Старый город','Мадинат Джумейра','Рамка Дубая','Пальмовый остров','Дубай Марина','Бурдж Халифа','Дубай молл']
    return (
        <React.Fragment>
            <Timeline sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }} >
                {state.map(el=>{
                    return(
                        <TimelineItem>
                            <TimelineSeparator>

                                    <LocationOn/>


                                <TimelineConnector />
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
    );
}
