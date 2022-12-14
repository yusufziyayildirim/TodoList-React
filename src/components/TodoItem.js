import { BsCheck, BsTrash, BsCheckLg } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo, editTodo} from '../redux/todoSlice';

const TodoItem = ({ todo }) => {

    const dispatch = useDispatch();
    const [editInput, setEditInput] = useState(false)
    const [value, setValue] = useState(todo.title)

    const handleComplete = () => {
        dispatch(completeTodo({ id: todo.id, completed: !todo.completed }));
    };

    const handleDelete = () => {
        dispatch(deleteTodo({ id: todo.id }));
    };

    const handleEdit = (e) => {
        e.preventDefault();
        setEditInput(false);
        dispatch(editTodo({ id: todo.id , title : value}));
    };

    return (
        <div className="flex items-center justify-between w-full bg-[#191933] p-3 rounded mt-2">
            <div className={`flex items-center gap-3 ${!editInput? 'group' : ''}`}>
                <div onClick={handleComplete} className={`${todo.completed ? 'bg-[#ee9ca7] ' : ''} w-5 h-5 rounded-full border border-white group-hover:border-[#ee9ca7] group-hover:btn-shadow flex items-center justify-center cursor-pointer`}>
                    {todo.completed &&
                        <BsCheck className='text-[#ffffff80]' />
                    }
                </div>
                <div onClick={editInput ? '' : handleComplete} className={`text-white font-semibold text-base cursor-pointer w-[120px] sm:w-[360px] md:w-[460px] ${todo.completed ? 'line-through' : ''}`}>
                    {editInput && (
                        <form onSubmit={handleEdit}>
                            <input autoFocus
                                type="text"
                                className='bg-transparent text-white outline-none h-8 w-full'
                                value={value}
                                onChange={e => setValue(e.target.value)}
                            />
                        </form>
                    )}
                    {!editInput && (
                        <span className='block w-full overflow-hidden'>
                            {todo.title}
                        </span>
                    )}

                </div>
            </div>
            <div className='flex items-center gap-1'>
                {editInput && (
                    <BsCheckLg className='cursor-pointer text-white' onClick={handleEdit} />
                )}
                {!editInput && (
                    <>
                        <FiEdit onClick={e => setEditInput(true)} size={20} className="cursor-pointer text-blue-600 hover:scale-95 transition-all" />
                        <BsTrash onClick={handleDelete} size={20} className="cursor-pointer text-red-600 hover:scale-95 transition-all" />
                    </>
                )}

            </div>
        </div >
    )
}

export default TodoItem