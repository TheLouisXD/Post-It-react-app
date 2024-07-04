// Este modulo sirve para crear una tarea en la app de ToDo

import React from "react";
import './ToDoItem.css';


// Creamos esta funcion para convertir el input en una tarea
export function ToDoItem({todo,eliminarTarea}){
    const {id, title, description, important} = todo;

    const fnEliminarTarea=()=>{
        console.log("ola");
        eliminarTarea(id);
    }
    
    // creo una variable con un numero random
    const rotacion = Math.random() * 5 - 2 ;

    if (important == false ){
        return <li className="card col-sm-2 task-card" style={{transform: `rotate(${rotacion}deg)`}}>
        <button type="button" className="btn align-self-end" onClick={fnEliminarTarea}> <img className="close-btn" src="images/xmark-solid.svg" /> </button>
        {/* <input type="checkbox" onChange={fnCambiarEstado} checked={completed} className="form-check-input me-2"/> */}
                <div className="body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </li>
    }else{
        return <li className="card col-sm-2 task-card-important" style={{transform: `rotate(${rotacion}deg)`}}>
        <button type="button" className="btn align-self-end" onClick={fnEliminarTarea}> <img className="close-btn" src="images/xmark-solid.svg" /> </button>
        {/* <input type="checkbox" onChange={fnCambiarEstado} checked={completed} className="form-check-input me-2"/> */}
                <div className="body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </li>
    }
    
}

export default ToDoItem;

