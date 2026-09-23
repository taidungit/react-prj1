import { useState } from "react";

const Title = (props) => {
  const { addNewTask } = props;



const [inputValue, setInputValue] = useState("");

const handleOnClick = () => {
    addNewTask(inputValue)
    setInputValue("") 
}
const handleOnChange = (event) => {
    setInputValue(event.target.value)
}
  return ( 
    <>
      <div className="todo-title">
        <span className="todo-text">Todo</span> <span className="list-text">list</span>
      </div>
        <div className="todo-input-group">
        <input type="text" placeholder="Enter your task" onChange={handleOnChange}
            value={inputValue}
        />
        <button onClick={handleOnClick}>Add</button>
      </div>    
    </> 

  )
}
export default Title