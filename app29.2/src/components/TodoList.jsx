import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleComplete } from "../store/todosSlice";
import './TodoList.css';

export default function TodoList() {
    const todos = useSelector(state => state.todos.data);
    const dispatch = useDispatch();

    const handleRemove = id => {
        dispatch(removeTodo({ id }));
    }

    const handleToggle = id => {
        dispatch(toggleComplete({ id }));
    }

    const getPriority = priority => {
        switch (priority) {
            case 'high': 
                return '🔺';

            case 'medium': 
                return '🔸';

            default: 
                return '🔹';
        }
    };

    if (todos.length === 0) {
        return <p>No tasks yet</p>;
    }

    return (
        <>
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id}>
                    <input type="checkbox" 
                        checked={todo.completed} 
                        onChange={() => handleToggle(todo.id)} 
                    />
                    <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                        {getPriority(todo.priority)} {todo.text} 
                    </span>
                    <button type="button" onClick={() => handleRemove(todo.id)}>❌</button>
                </li>
            ))}
        </ul>
        <p>Total tasks: {todos.length}</p>
        </>
    )
}
