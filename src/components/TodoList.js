import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todos = useSelector((state) => state.todos)

    return (
        <div className="mt-4">
            {todos &&
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }
        </div>
    )
}

export default TodoList