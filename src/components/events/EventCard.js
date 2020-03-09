import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";
import {Card, CardText, CardBody, CardTitle, Button } from 'reactstrap'

const EventCard = props => {
    return (
        <div className="flex">
            <Card className="width" inverse style={{backgroundColor: '#333', borderColor: 'green', border: '2px solid black'}}>
            <CardBody>
            <div className="eventCard-content">
                <h3>{props.event.eventName}</h3>
                <p>{props.event.date}</p>
                <Button color="success" className="padding2" type="button"
                onClick={() => props.history.push(`/events/${props.event.id}/edit`)}>Edit</Button>
                <Button color="danger" className="padding2" type="button"
                onClick={() => props.deleteEvent(props.event.id)}>Remove Event</Button>
            </div>
            </CardBody>
            </Card>
        </div>
    )
}

export default EventCard