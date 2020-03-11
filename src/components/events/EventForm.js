import React, { useState } from "react";
import EventManager from "../../modules/EventsManager";
import "./Event.css";
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';

const EventForm = props => {
    const [event, setEvent] = useState({ eventName: "", date: "", eventLocation: "", parsedDate: "", userId: "" });
    const [isLoading, setIsLoading] = useState(false);

    const currentUserId = parseInt(sessionStorage.getItem("Active Id"))

    const handleFieldChange = evt => {
        const stateToChange = { ...event };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    };

    const constructNewEvent = evt => {
        evt.preventDefault();
        if (event.eventName === "" || event.date === "" || event.eventLocation === "" ) {
            window.alert("Please fill in all fields.");
        } else {
            setIsLoading(true);
            event.parsedDate = Date.parse(event.date)
            event.userId = currentUserId
            EventManager.post(event)
                .then(() => props.history.push("/events"));
        }
    };

    return (
        <>
            <form className="flex">
            <Card className="width" inverse style={{backgroundColor: '#333', borderColor: 'green', border: '2px solid black'}}>
            <CardBody>
                <fieldset>
                    <div className="newEventInputFields">
                        <FormGroup>
                        <Input
                        type="text"
                        required
                        onChange={handleFieldChange}
                        id="eventName"
                        placeholder="Event Name" 
                        />
                        <Label htmlFor="eventName">Event Name</Label>
                        </FormGroup>
                        <FormGroup>
                        <Input
                        type="datetime-local"
                        required
                        onChange={handleFieldChange}
                        id="date"
                        placeholder="Event Date" />
                        <Label>Date</Label>
                        </FormGroup>
                        <FormGroup>
                        <Input
                        type="text"
                        required
                        onChange={handleFieldChange}
                        id="eventLocation"
                        placeholder="Event Location"
                        />
                        <Label htmlFor="eventLocation">Event Location</Label>
                        </FormGroup>

                    </div>
                    <div className="newEventButton">
                        <Button
                            color="primary"
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewEvent}
                        >Submit</Button>
                    </div>
                </fieldset>
                </CardBody>
                </Card>
            </form>
        </>
    );
}

export default EventForm