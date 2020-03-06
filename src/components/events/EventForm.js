import React, { useState } from "react";
import EventManager from "../../modules/EventsManager";

const EventForm = props => {
    const [event, setEvent] = useState({ eventName: "", date: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...event };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    };

    const constructNewEvent = evt => {
        evt.preventDefault();
        if (event.eventName === "" || event.date === "" ) {
            window.alert("Please input an event name and date");
        } else {
            setIsLoading(true);
            EventManager.post(event)
                .then(() => props.history.push("/events"));
        }
    };

    return (
        <>
            <form>
                <fieldset>
                    <div className="newEventInputFields">
                        <input
                        type="text"
                        required
                        onChange={handleFieldChange}
                        id="eventName"
                        placeholder="Event Name" 
                        />
                        <label htmlFor="eventName">Event Name</label>

                        <input
                        type="date"
                        required
                        onChange={handleFieldChange}
                        id="date"
                        placeholder="Event Date" />
                        <label>Date</label>
                    </div>
                    <div className="newEventButton">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewEvent}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default EventForm