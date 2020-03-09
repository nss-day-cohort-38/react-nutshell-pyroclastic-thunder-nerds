import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import EventManager from "../../modules/EventsManager"
import "./Event.css"
import { Button } from 'reactstrap'


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

    const sortedEvents = events.sort(function (a, b) {
        return a.parsedDate - b.parsedDate
    })

    return (
        <>
        <section className="flex">
            <Button color="primary" className="btn1" type="button" onClick={() => { props.history.push("/events/new") }}>Add Event</Button>
        </section>

        <div className="event-cards-container">
            {sortedEvents.map(event =>
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