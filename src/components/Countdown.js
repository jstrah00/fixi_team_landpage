import React from 'react';
import './styles/countdown.css';

export default function CountDown({weeks, days}){
    return (
        <div className="container">
            <div className="countdown_container">
                <div>
                    <h1 className="number">{weeks}</h1>
                    <h2 className="subtext">weeks</h2>
                </div>
                <div>
                    <h1 className="number">{days}</h1>
                    <h2 className="subtext">days</h2>
                </div>
            </div>
            <h1 className="subtitle" style={{ color: '#DF7777' }}>UNTIL NEXT END OF SPRINT</h1>
        </div>
    )
}