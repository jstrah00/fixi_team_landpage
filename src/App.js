import { stringify, v4 as uuid } from 'uuid';
import Title from './components/Title';
import CountDown from './components/Countdown';
import Tasks from './components/Tasks';
import CreateTaskModal from './components/CreateTaskModal';
import SettingsModal from './components/SettingsModal';
import React, { useState, useEffect } from "react";
import settings_icon from './images/settings_icon.ico';

function App() {
  const INITIAL_TASK = [{
    id: 1,
    title: 'Tarea 1',
    finished: false
  }]
  const [tasks, SetTasks] = useState(INITIAL_TASK);
  const [openModal, SetOpenModal] = useState(false);
  const [openSettings, SetOpenSettings] = useState(false);
  const [endDate, SetEndDate] = useState(new Date());
  const [timeRemaining, SetTimeRemaining] = useState({days: 0, weeks: 0})

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('fixiApp.tasks'));
    if (storedTasks){
      SetTasks(storedTasks);
    }
    const storedTimeRemaining = JSON.parse(localStorage.getItem('fixiApp.timeRemaining'));
    if (storedTimeRemaining){
      SetTimeRemaining(storedTimeRemaining);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('fixiApp.tasks', JSON.stringify(tasks));
    localStorage.setItem('fixiApp.timeRemaining', JSON.stringify(timeRemaining));
  }, [tasks, timeRemaining])

  const toggleModal = () => {
    SetOpenModal(!openModal)
  };

  const toggleSettings = () => {
    SetOpenSettings(!openSettings)
  };

  const HandleTaskAdd = (task_title) => {
    SetTasks((prev_tasks) => {
      return [...prev_tasks, {id: uuid(), title: task_title, finished: false}]
    })
  }

  const HandleTaskDelete = (task_id) => {
    SetTasks((prev_tasks => {
      return prev_tasks.filter((task) =>{
        return task.id != task_id;
      })
    }))
  }

  const HandleToggleTaskStatus = (id) => {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
    task.finished = !task.finished;
    SetTasks(newTasks);
  }

  const UpdateEndDate = (date) => {
    SetEndDate(date);
    const today=new Date();
    const one_day=1000*60*60*24;
    const result = Math.ceil((date.getTime()-today.getTime())/(one_day))
    const remaining_weeks = Math.trunc(result/7);
    const remaining_days = result - (remaining_weeks * 7);
    SetTimeRemaining({days: remaining_days, weeks: remaining_weeks});
  }


  return (
    <>
      {openModal  ? <CreateTaskModal toggle={toggleModal} HandleTaskAdd={HandleTaskAdd}/> : null}
      {openSettings || !JSON.parse(localStorage.getItem('fixiApp.timeRemaining')) ? <SettingsModal HandleUpdateDate={UpdateEndDate} CurrentDate={endDate} toggle={toggleSettings}/>: null}
      <img className="settings" src={settings_icon} onClick={toggleSettings} alt="Configuracion"/>
      <Title/>
      <CountDown weeks={('0' + timeRemaining.weeks).slice(-2)} days={('0' + timeRemaining.days).slice(-2)}/>
      <Tasks tasks={tasks} toggle={toggleModal} HandleToggleTaskStatus={HandleToggleTaskStatus} HandleTaskDelete={HandleTaskDelete} finished_tasks={tasks.filter((task) => !task.finished).length}/>
    </>
  );
}

export default App;
