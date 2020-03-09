import React, { useState } from "react"
import {Card, Button, Label, Input } from 'reactstrap'
import "./Login.css"
import { Link } from "react-router-dom"
import RegisterManager from "../../modules/RegisterManager"

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
            const newUser = {...credentials}
            setIsLoading(true)
            sessionStorage.setItem(
                "credentials", 
                JSON.stringify(credentials)
            )
            props.history.push("/articles")

            RegisterManager.post(newUser)
            .then(() => props.history.push("/home"))
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
                <Button className="margin" color="success" type="submit">Register</Button>
            </fieldset>
        </form>
        </Card>
        </div>
        <Link className="center" to="/register">Don't have an account? Register here.</Link>
       </>
    )
}

export default Register