import './style.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
