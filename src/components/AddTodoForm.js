import { MdAdd } from 'react-icons/md'

const AddTodoForm = () => {
  return (
    <div>
        <h3 className="text-white font-semibold text-2xl mb-6">TO DO LIST</h3>
            <form className="flex items-center justify-between gap-2">
                <input
                    type="text"
                    className='outline-none text-white h-8 w-full bg-transparent border-b'
                    name="add_task"
                    placeholder="Add New Task"
                />
                <MdAdd className="text-white bg-[#ee9ca7] rounded-full cursor-pointer btn-shadow hover:scale-90 transition-all" size={35} />
            </form>
    </div>
  )
}

export default AddTodoForm