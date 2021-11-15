import React, { useState } from 'react';
import './styles/settingsmodal.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function SettingsModal({ HandleUpdateDate, CurrentDate, toggle}){
    const [date, SetDate] = useState(CurrentDate);

    const SaveAndExit = () => {
        console.log('saving date')
        console.log(date)
        HandleUpdateDate(date);
        toggle();
    }

    return (
        <div className="modal-background">
            <div className="modal-container">
                <h1>Set next end of sprint:</h1>
                <DatePicker className="modal-title" selected={date} onChange={(date) => {
                    console.log('seting date');
                    console.log(date);
                    SetDate(date)}}/>
                <div className="buttons-container">
                    <div className="modal-create" onClick={SaveAndExit}>Save</div>
                    <div className="modal-close" onClick={toggle}>Cancel</div>
                </div>
            </div>
        </div>

        
    )
}