
import { useState } from 'react'
import Title from '../components/todo/title'
import Data from '../components/todo/data'
import ReactLogo from '../assets/react.svg'

function HomePage() {
const [todoList, setTodoList] = useState([])
const addNewTask = (name) => {
  const newTask = { id: Math.random(), name: name }
  setTodoList([...todoList, newTask])
}

const deleteTodo = (id) => {
    // Dùng hàm .filter() để lọc và giữ lại những item có id KHÁC với id cần xóa
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList); // Cập nhật lại danh sách mới
  }
return (

      <div className="todo-container" style={{ margin: '40px auto' }}>
        <Title addNewTask={addNewTask} />
        
        {todoList.length > 0 ? (
          <Data todoList={todoList} deleteTodo={deleteTodo} />
        ) : (
          <div className="todo-illustration">
            <img src={ReactLogo} alt="React Logo" />
          </div>
        )}
      </div>

  )
}

export default HomePage
