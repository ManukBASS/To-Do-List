import React from 'react';
import Tarea from '../Tarea/Tarea';
import {tareasContainer} from './listaDeTareas.module.scss';

const ListaDeTareas = ({tareas, removeTodo}) => {
  return (
    <div className={tareasContainer}>
      {tareas &&
        tareas.map (({id, titulo, descripcion}) => (
          <Tarea
            removetarea={() => removeTodo (id)}
            titulo={titulo}
            descripcion={descripcion}
          />
        ))}
    </div>
  );
};

export default ListaDeTareas;
