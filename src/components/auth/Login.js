import React, { useState } from "react"
import {Card, Button, Label, Input } from 'reactstrap'
import "./Login.css"
import { Link } from "react-router-dom"
import LoginManager from "../../modules/LoginManager"


const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""})
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials }
        stateToChange[evt.target.id] = evt.target.value
        setCredentials(stateToChange)
     }

     const handleLogin = (evt) => {
        evt.preventDefault()

        if (credentials.email === "" || credentials.password === "") {
            window.alert("Please input a username and password")
        } else {
            LoginManager.getAll().then(users => {
                if (users.some(user => user.email === credentials.email)) {
                    sessionStorage.setItem(
                        "credentials", 
                        JSON.stringify(credentials)
                    )
                    props.history.push("/home")
                } else {
                    window.alert("Invalid email")
                }
            })   
        }
         
     }

     return (
         <>
        <div className="flex">
        <Card className="width" inverse style={{backgroundColor: '#333', borderColor: 'green', border: '2px solid black'}}>
         <form>
             <fieldset>
                 <h2>Sign In </h2>
                 <div>
                     <Label htmlFor="inputEmail">Email Address: </Label>
                     <Input onChange={handleFieldChange} type="email" id="email" 
                     placeholder="Email Address" required="" autoFocus="" className="padding"></Input>

                     <Label htmlFor="inputPassword">Password: </Label>
                     <Input onChange={handleFieldChange} type="password" id="password" 
                     placeholder="Password" required=""></Input>
                 </div>
                 <Button className="margin" color="success" type="submit" onClick={handleLogin}>Sign In</Button>
             </fieldset>
         </form>
         </Card>
         </div>
         <Link className="center" to="/register">Don't have an account? Register here.</Link>
        </>
     )

}

export default Login

