import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";

const EventCard = props => {
    return (
        <div className="eventCard">
            <div className="eventCard-content">
                <h3>{props.event.eventName}</h3>
                <p>{props.event.date}</p>
                <button type="button"
                onClick={() => props.history.push(`/events/${props.event.id}/edit`)}>Edit</button>
                <button type="button"
                onClick={() => props.deleteEvent(props.event.id)}>Remove Event</button>
            </div>
        </div>
    )
}

export default EventCard