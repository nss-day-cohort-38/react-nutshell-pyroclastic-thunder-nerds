import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login"
// Messages //
import MessageList from "./messages/MessageList"

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
        {/* <Route path="/events" render={props => {
            return <EventList />
        }}/> */}
        {/* <Route path="/news" render={props => {
            return <NewsList />
        }}/> */}
        <Route path="/messages" render={props => {
            return <MessageList { ...props }/>
        }}/>
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