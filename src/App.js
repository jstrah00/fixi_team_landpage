import { v4 as uuid } from 'uuid';
import Title from './components/Title';
import CountDown from './components/Countdown';
import Tasks from './components/Tasks';
import CreateTaskModal from './components/CreateTaskModal';
import React, { useState, useEffect } from "react";

function App() {
  const INITIAL_TASK = [{
    id: 1,
    title: 'Tarea 1',
    finished: false
  },{
    id: 2,
    title: 'Tarea 2',
    finished: true
  }]
  const [tasks, SetTasks] = useState(INITIAL_TASK);
  const [openModal, SetOpenModal] = useState(false);

  const toggleModal = () => {
    SetOpenModal(!openModal)
  };

  const HandleTaskAdd = (task_title) => {
    SetTasks((prev_tasks) => {
      return [...prev_tasks, {id: uuid(), title: task_title, finished: false}]
    })
  }

  const HandleToggleTaskStatus = (id) => {
    console.log('togle')
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
    task.finished = !task.finished;
    SetTasks(newTasks);
  }


  return (
    <>
      {openModal ? <CreateTaskModal toggle={toggleModal} HandleTaskAdd={HandleTaskAdd}/> : null}
      <Title/>
      <CountDown weeks={"12"} days={"19"}/>
      <Tasks tasks={tasks} toggle={toggleModal} HandleToggleTaskStatus={HandleToggleTaskStatus} finished_tasks={tasks.filter((task) => !task.finished).length}/>
    </>
  );
}

export default App;
