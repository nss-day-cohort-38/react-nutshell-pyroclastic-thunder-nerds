import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";

const EventCard = props => {
    return (
        <div className="eventCard">
            <div className="eventCard-content">
                <h3>{props.event.eventName}</h3>
                <p>{props.event.date}</p>
            </div>
        </div>
    )
}

export default EventCard