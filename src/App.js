import './style.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';

function App() {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center bg-app">
      <div className="bg-[#10101d] min-h-min w-[278px] sm:w-[520px] md:w-[620px] rounded-xl px-6 py-8">
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </div>
  );
}

export default App;
