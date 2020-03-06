import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import EventManager from "../../modules/EventsManager"

const EventList = props => {
    const [events, setEvents] = useState([]);

    const getEvents = () => {
        return EventManager.getAll().then(apiEvents => {
            setEvents(apiEvents)
        });
    };

    const deleteEvent = id => {
        EventManager.delete(id)
            .then(() => EventManager.getAll().then(setEvents));
    };

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <>
        <section className="event-section-content">
            <button type="button" onClick={() => { props.history.push("/events/new") }}>Add Event</button>
        </section>

        <div className="event-cards-container">
            {events.map(event =>
                <EventCard
                    key={event.id}
                    event={event}
                    deleteEvent={deleteEvent}
                    { ...props }
                />
            
                )}
        </div>
        </>
    )

}


export default EventList