import React, { useState } from "react"

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""})

    const handleFieldChange = (evt) => {
        const stateToChange = { ...credentials }
        stateToChange[evt.target.id] = evt.target.value
        setCredentials(stateToChange)
     }

     const handleLogin = (evt) => {
         evt.preventDefault()
         sessionStorage.setItem(
             "credentials", 
             JSON.stringify(credentials)
         )
         props.history.push("/")
     }

     return (
         <form onSubmit={handleLogin}>
             <fieldset>
                 <h2>Sign In: </h2>
                 <div>
                     <label htmlFor="inputEmail">Email Address: </label>
                     <input onChange={handleFieldChange} type="email" id="email" 
                     placeholder="Email Address" required="" autoFocus=""></input>

                     <label htmlFor="inputPassword">Password: </label>
                     <input onChange={handleFieldChange} type="password" id="password" 
                     placeholder="Password" required=""></input>
                 </div>
                 <button type="submit">Sign In</button>
             </fieldset>
         </form>
     )

}

export default Login

