import React from 'react';

const MiddleCol = (props) => {

    return (
    <>
    <ul className="list-group">
        
        {
            props.taskListObj.map((element)=>{
                return <a href='#' onClick={() => {props.handleClick(element)}} className="list-group-item list-group-item-action">{element.title}</a>
            })
        }

    </ul>

    </>)
}
export default MiddleCol