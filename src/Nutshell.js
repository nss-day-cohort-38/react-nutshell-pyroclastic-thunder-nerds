import React from 'react';
import NavBar from './components/nav/Nav'
import ApplicationView from './components/ApplicationViews';
import './Nutshell.css';

function Nutshell() {
const activeUser = sessionStorage.getItem("Active Id")

      return (
        <>
          <NavBar />
          <ApplicationView />
        </>
      );

}

export default Nutshell;
