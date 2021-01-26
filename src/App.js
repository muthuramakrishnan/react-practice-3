import logo from './logo.svg';
import './App.css';
import LeftCol from './left-col/left-col';
import RightCol from './right-col/right-col';
import MiddleCol from './middle-col/middle-col';
import { useState } from 'react';

function App() {
  const [task, setTask] = useState({title:"helo", description: "description"});
  const [taskList, setTaskList] = useState([]);
  const [selectedTask, setSelectedTask] = useState({});
  const updateForm = (obj)=>{
    setTaskList([...taskList, obj]);
  }
  const updateTask = (obj) =>{
    // console.log(obj)
    setSelectedTask({title: obj.title, description: obj.description});
  }
  return (
    <>
    <div className = "container">
      <div className = "row">
        <div className = "col-lg">
        <LeftCol taskObj = {task} handleClick = {updateForm}></LeftCol>
        </div>
        <div className = "col-lg">
        <MiddleCol taskListObj = {taskList} handleClick = {updateTask}></MiddleCol>
        </div>
        <div className = "col-lg">
        <RightCol selectedTaskObj = {selectedTask}></RightCol>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
