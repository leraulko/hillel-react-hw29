import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className='container'>
      <h2>To-Do List</h2>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App
