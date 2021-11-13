import React from 'react';
import logo from './../images/fixi_logo.png';
import './styles/title.css';

export default function Title(){
    return (
        <div className="title_container">
            <img className="logo" src={logo} alt="fixi"/>
            <h1 className="title"> Team fixi</h1>
        </div>
    )
}