import { BsCheck, BsTrash } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import { useDispatch } from 'react-redux';
import { completeTodo } from '../redux/todoSlice';

const TodoItem = ({ todo }) => {

    const dispatch = useDispatch();
    const handleComplete = () => {
        console.log(todo.id)
		dispatch(completeTodo({ id: todo.id, completed: !todo.completed }));
	};

    return (
        <div className="flex items-center justify-between w-full bg-[#191933] p-3 rounded mt-2">
            <div className='flex items-center gap-3 group'>
                <div onClick={handleComplete} className={`${todo.completed ? 'bg-[#ee9ca7] ' : ''} w-5 h-5 rounded-full border border-white group-hover:border-[#ee9ca7] group-hover:btn-shadow flex items-center justify-center cursor-pointer`}>
                    {todo.completed &&
                        <BsCheck className='text-[#ffffff80]' />
                    }
                </div>
                <span onClick={handleComplete} className={`text-white font-semibold text-base cursor-pointer ${todo.completed ? 'line-through' : ''}`}>
                    {todo.title}
                </span>
            </div>
            <div className='flex items-center gap-1'>
                <FiEdit size={20} className="cursor-pointer text-blue-600 hover:scale-95 transition-all" />
                <BsTrash size={20} className="cursor-pointer text-red-600 hover:scale-95 transition-all" />
            </div>
        </div >
    )
}

export default TodoItem