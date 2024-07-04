// este modulo sirve para mostrar todas las tareas que han sido ingresadas

import React, {Fragment, useEffect, useRef, useState} from "react";
import {v4 as uuid} from 'uuid';
import { ToDoItem } from "./ToDoItem";

const KEY='TODOLIST'

// Creamos la lista de tareas ingresadas
export function ToDoList(){
    const [todos, SetTodos] = useState([
        // aqui se reciben los datos del todoitem :D
    ]);

    const [important, SetImportant] = useState(false);

    const titleRef = useRef();
    const descriptionRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY))
        if (storedTodos){
            SetTodos(storedTodos);
        }
    }, [] );

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos] )

    const Check = () => {
        SetImportant(!important);
    };


    // Enviamos un mensaje
    const agregarTarea = () => {
        console.log("Agregando Tarea");
        const title = titleRef.current.value;
        const description = descriptionRef.current.value
        console.log(title)
        console.log(description)
        console.log(important)
        if (description === '') return;
        SetTodos((prevTodos) => {
            const newTask ={
                id: uuid(),
                title: title,
                description: description,
                important: important
            }
            return[...prevTodos,newTask]
        })
        titleRef.current.value=null;
        descriptionRef.current.value=null;
        SetImportant(false);
        console.log("datos obtenidos");
    }

    // const ResumenTareas = () =>{
    //     const cant = cantidadTareas();
        
    //     if (cant == 0){
    //         return(
    //             <div className="alert alert-info mt-3">
    //                 <p>¡no tienes ninguna tarea pendiente!</p>
    //             </div>
    //         )}else if( cant == 1 ){
    //             return(
    //                 <div className="alert alert-info mt-3">
    //                     <p>Te queda {cant} tarea pendiente por hacer</p>
    //                 </div>)
    //         }else{
    //             return(
    //                 <div className="alert alert-info mt-3">
    //                     <p>Te quedan {cant} tareas pendientes por hacer</p>
    //                 </div>)
    //         }
        
    // }

    // const cantidadTareas=()=>{
    //     return todos.filter((todo)=> !todo.completed).length
    //     ;
    // }


    const borrarTarea=(id)=>{
        console.log(id)
        const newTodos = todos.filter((todo) => todo.id !== id);
        console.log("tarea borrada");
        SetTodos(newTodos);
    }

    // Generamos la lista de tareas
    return(
        <Fragment>
            {/* Titulo de la pagina */}
            <h1 className="titulo-gei">Post It App!</h1>
            <div className="row">
                {/* formulario de ingreso de datos del post-it */}
                <div className="input-group mt-4 mb-4">
                    
                    {/* Input para el titulo */}
                    <div class="form-group col-3 me-2">
                        <input ref={titleRef} type="text" className="form-control" placeholder="Titulo" />
                    </div>

                    {/* Input para la descripcion  */}
                    <div class="form-group col-4 ms-2">
                        <input ref={descriptionRef} type="text" className="form-control" placeholder="Descripcion" />
                    </div>

                    {/* Checkbox para crear una nota importante */}
                        <div className="input-group-">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input size-checkbox ms-1" checked={important} onChange={Check}/>
                                <label className="form-check-label label-color ms-1" for="flexCheckDefault"> Importante </label>
                            </div>
                        </div>

                    {/* Boton para agregar tareas */}
                    <button onClick={agregarTarea} className="ms-auto  btn-agregar">AGREGAR</button>
                    
                </div>
            </div>
                <ul className="row task-list">
                    {todos.map((todo) => (
                        <ToDoItem todo = {todo} key={todo.id} eliminarTarea={borrarTarea}/>
                    ))}
                </ul>
            {/* <ResumenTareas /> */}
                <br />
            <div>
                <img src="images/R.gif"/>
                <p className="texto-gracioso" >mono culiao que no cacha como usar mi app jaja que aweonao se parece al alegria</p>
                <center><p className="texto-gracioso" >Pagina creada con 💖 por Luis Huiriqueo pa' el profe mir</p></center>
            </div><br />
        </Fragment>
    );}