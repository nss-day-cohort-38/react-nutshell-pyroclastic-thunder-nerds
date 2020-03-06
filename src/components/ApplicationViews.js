import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login"
import EventList from "./events/EventList"
import EventForm from "./events/EventForm"
import EventEditForm from "./events/EventEditForm"

const ApplicationView = (props) => {

    return (
        <>
        {/* <Route exact path="/" render={props => {
            return <Home />
        }}/> */}
        {/* <Route path="/welcome" render={props => {
            return <Welcome />
        }}/> */}
        <Route path="/login" render={props => {
            return <Login { ...props } />
        }}/>
        {/* <Route path="/logout" render={props => {
            return <Logout />
        }}/> */}
        <Route exact path="/events" render={props => {
            return <EventList { ...props }/>
        }}/>
        <Route path="/events/new" render={props => {
            return <EventForm { ...props }/>
        }}/>
        <Route path="/events/:eventId(\d+)/edit"
            render={props => {
                return <EventEditForm { ...props } />
            }} />
        {/* <Route path="/news" render={props => {
            return <NewsList />
        }}/> */}
        {/* <Route path="/messages" render={props => {
            return <MessageList />
        }}/> */}
        {/* <Route path="/tasks" render={props => {
            return <TaskList />
        }}/> */}
        {/* <Route path="/friends" render={props => {
            return <FriendList />
        }}/> */}
        </>
    )
}

export default ApplicationView