import React, { useEffect, useState } from "react";
import Formulario from "./components/Formulario/Formulario";
import ListaDeTareas from "./components/Lista de Tareas/ListaDeTareas";
import { main } from "./styles.module.scss";

function App() {
  const [tareas, setearTareas] = useState(() => {
    try {
      const tareasEnLocalStorage = localStorage.getItem("tareas");
      return tareasEnLocalStorage ? JSON.parse(tareasEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  const [tarea, setearTarea] = useState({
    id: Math.random() * (99999999999 - 0) + 0,
    titulo: "",
    descripcion: "",
  });

  const { titulo, descripcion } = tarea;

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const addTodo = (tarea) => {
    setearTareas([...tareas, tarea]);
  };

  const removeTodo = (id) => {
    const newTareas = [...tareas].filter((tarea) => tarea.id !== id);
    setearTareas(newTareas);
  };

  const onChange = (e) => {
    setearTarea({ ...tarea, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (titulo === "" || descripcion === "") {
      alert("Debes completar los dos campos");
    } else {
      addTodo(tarea);
      setearTarea({
        id: Math.random() * (99999999999 - 0) + 0,
        titulo: "",
        descripcion: "",
      });
    }
  };

  return (
    <main className={main}>
      <Formulario onSubmit={onSubmit} onChange={onChange} tarea={tarea} />
      <ListaDeTareas tareas={tareas} removeTodo={removeTodo} />
    </main>
  );
}

export default App;
