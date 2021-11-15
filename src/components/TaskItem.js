import React, { useState } from 'react';
import './styles/taskitem.css';
import trash_icon from './../images/trash_icon.ico';


export default function TaskItem({ task, HandleToggleTaskStatus, HandleTaskDelete }){
    const { id, title, finished } = task
    const [checkboxChecked, setCheckboxChecked] = useState(finished ?  true: false)

    const HandleToggleClick = () =>{
        HandleToggleTaskStatus(id)
        setCheckboxChecked(!checkboxChecked)
    }
    const HandleDelete = () => {
        HandleTaskDelete(id)
    }
    const checkbox_style = {
        backgroundColor: checkboxChecked ?  '#9489DC': 'transparent'
    }
    const title_style = {
        textDecoration: checkboxChecked ?  'line-through': 'none'
    }
    return (
        <div className="task-item-container">
            <div className="task-checkbox" style={checkbox_style} onClick={HandleToggleClick}/>
            <h1 className="task-item-title" style={title_style} >{title}</h1>
            <img className="trash-icon" src={trash_icon} onClick={HandleDelete} alt="Eliminar"/>
        </div>
        
    )
}
