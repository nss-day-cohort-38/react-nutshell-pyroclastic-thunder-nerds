import React, { useState, useEffect } from "react";
import EventManager from "../../modules/EventsManager";
import "./Event.css";
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';

const EventEditForm = props => {
    const [event, setEvent] = useState({ eventName: "", date: "", eventLocation: "", parsedDate: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...event };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    };

    const updateExistingEvent = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedEvent = {
            id: props.match.params.eventId,
            eventName: event.eventName,
            date: event.date,
            eventLocation: event.eventLocation,
            parsedDate: Date.parse(event.date)
        };

        EventManager.update(editedEvent)
            .then(() => props.history.push("/events"))
    };

    useEffect(() => {
        EventManager.get(props.match.params.eventId)
            .then(event => {
                setEvent(event);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
        <form className="flex">
        <Card className="width" inverse style={{backgroundColor: '#333', borderColor: 'green', border: '2px solid black'}}>
        <CardBody>
            <fieldset>
                <div className="editForm">
                    <FormGroup>
                    <Input 
                    type="text"
                    required
                    onChange={handleFieldChange}
                    value={event.eventName}
                    id="eventName"
                    />
                    <Label htmlFor="eventName">Event Name</Label>
                    </FormGroup>
                    <FormGroup>
                    <Input
                    type="datetime-local"
                    required
                    onChange={handleFieldChange}
                    value={event.date}
                    id="date" 
                    />
                    <Label htmlFor="date">Date</Label>
                    </FormGroup>
                    <FormGroup>
                    <Input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    value={event.eventLocation}
                    id="eventLocation" 
                    />
                    <Label htmlFor="eventLocation">Location</Label>
                    </FormGroup>
                </div>
                <Button
                type="button"
                disabled={isLoading}
                onClick={updateExistingEvent}
                >Submit</Button>
            </fieldset>
            </CardBody>
            </Card>
        </form>
        </>
    )
}

export default EventEditForm