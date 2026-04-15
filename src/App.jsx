import { useDispatch, useSelector } from "react-redux";
import CreateModal  from"./components/CreateModal"
import { useState } from "react";
import { deleteTodo } from "./redux/slice";

const headers = ["id", "Name", "Email","Phone", "Status"];

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [todoToUpdate, setTodoToUpdate] = useState(null);

  const handleCreateTodo = () => {
    setVisible(true);
  };

  const handleUpdateTodo = (todo) => {
    setTodoToUpdate(todo);
    setVisible(true);
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      {visible && (
        <CreateModal setVisible={setVisible} todoToUpdate={todoToUpdate} />
      )}
      <div className="bg-green-50 w-full min-h-screen flex flex-col gap-4 items-center py-16">
        <h1 className="font-bold text-3xl">Todos</h1>

        <div className="relative flex flex-col min-w-2/3 h-full text-gray-700 bg-green-100 shadow-md rounded-xl">
          <button
            onClick={handleCreateTodo}
            className="bg-green-100 w-fit p-4 rounded-md shadow-md text-green-700 font-bold border-1 border-green-700 cursor-pointer"
          >
            + ADD NEW
          </button>

          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                {headers.map((header) => {
                  return (
                    <th key={header} className="p-4 border-b border-green-500">
                      <p className="font-bold text-green-700">{header}</p>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {todos.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {index + 1}
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {item.name}
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {item.email}
                      </p>
                    </td>
                      <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {item.phone}
                      </p>
                    </td>
                    <td className="p-4">
                      <a
                        href="#"
                        className="font-bold rounded-md p-2"
                      >
                        {item.status}
                      </a>
                    </td>
                    <td>
                      <div className="flex flex-row gap-4">
                        <button
                          onClick={() => handleUpdateTodo(item)}
                          className="bg-green-200 w-10 h-10 rounded-full flex items-center justify-center "
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteTodo(item.id)}
                          className="bg-red-200 w-10 h-10 rounded-full flex items-center justify-center "
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
