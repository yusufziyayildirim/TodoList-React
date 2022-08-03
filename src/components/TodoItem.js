import { BsCheck, BsTrash } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'

const TodoItem = ({ todo }) => {
    return (
        <div className="flex items-center justify-between w-full bg-[#191933] p-3 rounded mt-2">
            <div className='flex items-center gap-3'>
                <div className="w-5 h-5 rounded-full border border-white hover:border-[#ee9ca7] hover:btn-shadow flex items-center justify-center cursor-pointer">
                    {todo.completed &&
                        <BsCheck className='text-[#ffffff80]' />
                    }
                </div>
                <span className={`text-white font-semibold text-base cursor-pointer ${todo.completed ? 'line-through' : ''}`}>
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