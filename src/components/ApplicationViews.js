import { Route, Redirect } from "react-router-dom";
import React from "react";

// Tasks
import TaskList from "./tasks/TaskList";
import TaskForm from "./tasks/TaskForm";
import TaskEditForm from "./tasks/TaskEditForm";

// Messages //
import MessageList from "./messages/MessageList";
import MessagesForm from "./messages/MessageForm";
import MessageEditForm from "./messages/MessageEditForm";
// Events //
import EventList from "./events/EventList"
import EventForm from "./events/EventForm"
import EventEditForm from "./events/EventEditForm"
//Article imports
import ArticlesList from "./articles/ArticlesList"
import ArticlesForm from "./articles/ArticlesForm"
import ArticleEditForm from "./articles/ArticlesEditForm"
import ArticleDetail from "./articles/ArticlesDetail"
// Register & Login
import Register from "./auth/Register"
import Login from "./auth/Login"
// Home
import Home from "./home/Home"

const ApplicationView = (props) => {
    const activeUser = sessionStorage.getItem("Active Id")
    return (
        <>
        <Route exact path="/home" render={props => {
            return <Home /> 
        }}/>
        <Route path="/login" render={props => {
            return <Login { ...props } />
        }}/>
        <Route path="/register" render={props => {
            return <Register {...props} />
        }}/>
        {/* <Route path="/logout" render={props => {
            return <Welcome />
        }}/> */}
        <Route exact path="/events" render={props => {
            if (activeUser === null) {
                return <Redirect to="/login" />
            } else {
            return <EventList { ...props }/>
            }
        }}/>
        <Route path="/events/new" render={props => {
            if (activeUser === null) {
                return <Redirect to="/login" />
            } else {
            return <EventForm { ...props }/>
            }
        }}/>
        <Route path="/events/:eventId(\d+)/edit"
            render={props => {
                if (activeUser === null) {
                    return <Redirect to="/login" />
                } else {
                return <EventEditForm { ...props } />
                }
            }} />

        {/* ARTICLES */}
        <Route exact path="/articles" render={props => {
             if (activeUser === null) {
                return <Redirect to="/login" />
            } else {
            return <ArticlesList {...props}/>
            }
        }}/>
        <Route path="/articles/new" render={props => {
             if (activeUser === null) {
                return <Redirect to="/login" />
            } else {
            return <ArticlesForm {...props}/>
            }
        }}/>
        <Route path="/articles/:articleId(\d+)/edit" render={props => {
             if (activeUser === null) {
                return <Redirect to="/login" />
            } else {
            return <ArticleEditForm {...props} />
            }
        }}/>
        <Route exact path="/articles/:articleId(\d+)" render={props => {
             if (activeUser === null) {
                return <Redirect to="/login" />
            } else {
            return <ArticleDetail articleId={parseInt(props.match.params.articleId)} {...props} />
            }
        }}/>

        {/* TASKS */}
        <Route exact path="/tasks" render={props => {
             if (activeUser === null) {
                return <Redirect to="/login" />
            } else {
            return <TaskList {...props} />
            }
        }}/>
        <Route path="/tasks/new" render={props => {
             if (activeUser === null) {
                return <Redirect to="/login" />
            } else {
            return <TaskForm {...props} />
            }
        }}/>
        <Route path="/tasks/:taskId(\d+)/edit" render={props => {
             if (activeUser === null) {
                return <Redirect to="/login" />
            } else {
            return <TaskEditForm {...props} />
            }
        }}/>

        {/* MESSAGES */}
        {/* needs to have exact path so it would re-render the new info */}
        <Route exact path="/messages" render={props => {
             if (activeUser === null) {
                return <Redirect to="/login" />
            } else {
            return <MessageList {...props} />
            }
        }}/>
        <Route path="/messages/new" render={props => {
             if (activeUser === null) {
                return <Redirect to="/login" />
            } else {
            return <MessagesForm {...props}/>
            }
        }}/>
        <Route path="/messages/:messageId(\d+)/edit" render={props => {
             if (activeUser === null) {
                return <Redirect to="/login" />
            } else {
            return <MessageEditForm {...props} />
            }
        }}/>

        {/* FRIENDS */}
        {/* <Route path="/friends" render={props => {
            return <FriendList />
        }}/> */}
        </>
    )
}

export default ApplicationView
