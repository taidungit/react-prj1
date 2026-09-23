const Data = (props) => {
    const { todoList, deleteTodo } = props;

    return (  
        <div className='todo-data'>
            {todoList.map((item) => {
                return (
                    <div key={item.id} className='todo-item'>
                        <span>{item.name}</span>
                        {/* Thêm nút Delete */}
                        <button className='delete-btn' onClick={() => deleteTodo(item.id)}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default Data;