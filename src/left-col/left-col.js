import React, {useState} from 'react';

const LeftCol = (props) => {
    const [formTask, setFormTask] = useState({title:props.taskObj.title, description: props.taskObj.description});

    return (
        <div>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={formTask.title} className = "form-control" onChange={(e)=> {
                        return setFormTask((task)=>{
                            return {...task, title: e.target.value };
                        });
                    }}></input>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" value={formTask.description} onChange={(e)=> {
                        return setFormTask((task)=>{
                            return {...task, description: e.target.value };
                        });
                    }}></textarea>
                </div>
            </form>
            <button className = "btn btn-primary" onClick = { ()=>props.handleClick(formTask)}>Add</button>
        </div>
    )
}
export default LeftCol;