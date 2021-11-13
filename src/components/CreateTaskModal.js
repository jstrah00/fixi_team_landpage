import React, { useRef } from 'react';
import './styles/createtaskmodal.css';

export default function CreateTaskModal({ toggle, HandleTaskAdd }){
    const TaskTitleRef = useRef();
    const HandleCreateButton = () => {
        const task_title = TaskTitleRef.current.value;
        if (task_title === '') return;
        HandleTaskAdd(task_title);
        toggle();
    };

    return (
        <div className="modal-background">
            <div className="modal-container">
                <input ref={TaskTitleRef} type="text" className="modal-title" placeholder="New task name"/>
                <div className="buttons-container">
                    <div className="modal-create" onClick={HandleCreateButton}>Create</div>
                    <div className="modal-close" onClick={toggle}>Cancel</div>
                </div>
            </div>
        </div>

        
    )
}