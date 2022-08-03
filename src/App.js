import './style.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center bg-app">
      <div className="bg-[#10101d] min-h-min w-[620px] rounded-xl px-6 py-8">
        <AddTodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
