import { useState } from "react"
import { useDispatch } from "react-redux/es/exports";
import { MdAdd } from 'react-icons/md'
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {

  const [value, setValue] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      title: value
    }));
    setValue("");
  }


  return (
    <>
      <h3 className="text-white font-semibold text-2xl mb-6">TO DO LIST</h3>
      <form className="flex items-center justify-between gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className='outline-none text-white h-8 w-full bg-transparent border-b'
          name="add_task"
          placeholder="Add New Task"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <MdAdd onClick={handleSubmit} className="text-white bg-[#ee9ca7] rounded-full cursor-pointer btn-shadow hover:scale-90 transition-all" size={35} />
      </form>
    </>
  )
}

export default AddTodoForm