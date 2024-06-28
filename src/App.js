import React, { useRef, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handleInput = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your task has been added!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleItem = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const MySwal = withReactContent(Swal);

  const handleDeleteWithConfirmation = (index) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2d3250",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(index);
        MySwal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const [currentClass, setCurrentClass] = useState("body1"); 

  const toggleClass = () => {
    setCurrentClass((prevClass) => (prevClass === "body1" ? "body2" : "body1"));
  };

  return (
    <>
    <div className={currentClass}>
      <div className="App">
      <button className="-button" onClick={toggleClass}>⬅️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;➡️</button>
        <h2>To Do List</h2>
        <div className="container">
          <ul>
            {todos.map(({ text, completed }, index) => (
              <div className="item" key={index}>
                <li
                  className={completed ? "done" : ""}
                  onClick={() => handleItem(index)}
                >
                  {text}
                </li>
                <span onClick={() => handleDeleteWithConfirmation(index)}>❌</span>
              </div>
            ))}
          </ul>
          <input className="input-" ref={inputRef} placeholder="Enter Item...." />
          <button className="-button" onClick={handleInput}>Add Your Tasks</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
