import React, { useState } from "react"
import {Card, Button, Label, Input } from 'reactstrap'
import "./Login.css"
import { Link } from "react-router-dom"
import RegisterManager from "../../modules/RegisterManager"
import LoginManager from "../../modules/LoginManager"
import Login from "./Login"

const Register = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: "", confirmPassword: ""})
    const [isLoading, setIsLoading] = useState(false)


    const handleFieldChange = (evt) => {
        const stateToChange = {...credentials}
        stateToChange[evt.target.id] = evt.target.value
        setCredentials(stateToChange)
    }

    const handleRegister = (evt) => {
        evt.preventDefault()

        if (credentials.email === "" || credentials.password === "" || credentials.confirmPassword === "") {
            window.alert("Please input a username and password.")
        } else if (credentials.password !== credentials.confirmPassword) {
            window.alert("Passwords do not match.")
        } else {
            // checks if email that user entered in field (credentials) matches email in the DB
            LoginManager.getAll().then(users => {
                if (users.find(user => user.email === credentials.email)) {
                    window.alert("This email already exists.")
                } else {
                const newUser = {
                    email: credentials.email,
                    password: credentials.password
                }
                setIsLoading(true)

                RegisterManager.post(newUser)
                .then(() => {
                    RegisterManager.getAll().then(users => {
                        const activeUser = users.find(user => user.email === newUser.email)

                        sessionStorage.setItem(
                            "Active Id", 
                            JSON.stringify(activeUser.id)
                        )

                        props.history.push("/home")
                    })
                })
                }
            })    
        }
    }

    return (
        <>
       <div className="flex">
       <Card className="width" inverse style={{backgroundColor: '#333', borderColor: 'green', border: '2px solid black'}}>
        <form onSubmit={handleRegister}>
            <fieldset>
                <h2>Register </h2>
                <div>
                    <Label htmlFor="inputEmail">Email Address: </Label>
                    <Input onChange={handleFieldChange} type="email" id="email" 
                    placeholder="Email Address" required="" autoFocus="" className="padding"></Input>

                    <Label htmlFor="inputPassword">Password: </Label>
                    <Input onChange={handleFieldChange} type="password" id="password" 
                    placeholder="Password" required=""></Input>

                    <Label htmlFor="confirmPassword">Confirm Password: </Label>
                    <Input onChange={handleFieldChange} type="password" id="confirmPassword" 
                    placeholder="Confirm Password" required=""></Input>
                </div>
                <Button className="margin" color="success" type="submit" disabled={isLoading} >Register</Button>
            </fieldset>
        </form>
        </Card>
        </div>
        <Link className="center" to="/login">Already have an account? Login here.</Link>
       </>
    )
}

export default Register