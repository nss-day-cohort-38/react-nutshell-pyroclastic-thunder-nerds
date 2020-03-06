import React, { useState, useEffect } from "react";
import EventManager from "../../modules/EventsManager";

const EventEditForm = props => {
    const [event, setEvent] = useState({ eventName: "", date: "" });
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
            date: event.date
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
        <form>
            <fieldset>
                <div className="editForm">
                    <input 
                    type="text"
                    required
                    onChange={handleFieldChange}
                    value={event.eventName}
                    id="eventName"
                    />
                    <label>Event Name</label>

                    <input
                    type="datetime-local"
                    required
                    onChange={handleFieldChange}
                    value={event.date}
                    id="date" 
                    />
                    <label>Date</label>
                </div>
                <button
                type="button"
                disabled={isLoading}
                onClick={updateExistingEvent}
                >Submit</button>
            </fieldset>
        </form>
        </>
    )
}

export default EventEditForm