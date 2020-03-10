import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className="center">
            <h1 className="centerMe">Welcome to Nutshell!</h1>
            <img src={require("./nutshell.png")} alt="image"></img>
        </div>
    )
}

export default Home