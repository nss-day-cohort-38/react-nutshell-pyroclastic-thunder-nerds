import React from "react";
import "./Event.css";
import {Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';


const EventCard = props => {
// const eventDate = <Moment format="MM/DD/YYYY">{props.event.date}</Moment>
const eventDate = props.event.date
const displayDate = Date.parse(eventDate)
    return (
        <div className="flex">
            <Card className="width" inverse style={{backgroundColor: '#333', borderColor: 'green', border: '2px solid black'}}>
            <CardBody>
            <div className="eventCard-content">
                <CardTitle><h3>{props.event.eventName}</h3></CardTitle>
                <CardText>{displayDate}</CardText>
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