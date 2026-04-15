import React, { useEffect, useState } from "react";
import { createTodo, updateTodo } from "../redux/slice";
import { useDispatch } from "react-redux";

function CreateModal({ setVisible, todoToUpdate }) {
  const dispatch = useDispatch();

  const handleCancel = () => {
    setVisible(false);
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
  });

 

  const handleSave = (e) => {
    e.preventDefault();

    if (todoToUpdate) {
      dispatch(updateTodo({ ...form, id: todoToUpdate.id }));
    } else {
      dispatch(createTodo(form));
    }

    setForm({ name: "", email: "", phone: "", status: "" });
    setVisible(false);
  };

  useEffect(() => {
    if (todoToUpdate) {
      setForm(todoToUpdate);
    }
  }, [todoToUpdate]);

  return (
    <div class="absolute flex items-center justify-center w-full h-screen z-1 p-4">
      <form
        class="relative p-6 min-w-1/2 min-h-[200px] bg-white rounded-lg shadow-sm flex flex-col gap-4 p-4"
        onSubmit={handleSave}
      >
        <div>
          <input
            value={form.name}
            class="border border-gray-300 rounded-lg w-full p-2 outline-none"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
         
        </div>

        <div>
          <input
            value={form.email}
            class="border border-gray-300 rounded-lg w-full p-2 outline-none"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
                </div>

    <div>
          <input
            value={form.phone}
            class="border border-gray-300 rounded-lg w-full p-2 outline-none"
            placeholder="Phone"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
                </div>
        <div>
          <select
            value={form.status}
            class="border border-gray-300 rounded-lg w-full p-2 outline-none"
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
         
            <option selected>Choose a status</option>
            <option value="New">NEW</option>
            <option value="CONTACTED">CONTACTED</option>
            <option value="CLOSED"> CLOSED</option>
          </select>
         
        </div>

        <div className="flex flex-row gap-4">
          <button
            onClick={handleCancel}
           
          >
            CANCEL
          </button>
          <button >
            {todoToUpdate ? "UPDATE" : "SAVE"}
          </button>
        </div>
      </form>
    </div>
  );
}
 
export default CreateModal;
