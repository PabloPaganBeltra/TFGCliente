import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Tarea = ({tarea}) => {

    //Saber si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas, actualizarTarea, guardarTareaActual} = tareasContext;

    //Extraer proyecto
    const [proyectoActual] = proyecto;
    
    // funcion que se ejecutara cuando se aprieta el boton de eliminar tarea
    const tareaEliminar = id =>{
        eliminarTarea(id, proyectoActual._id);
        obtenerTareas(proyectoActual._id);
    }

    //Funcion que modifica el estado de las tareas
    const cambiarEstado = tarea => {
        if(tarea.estado) {
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }
        actualizarTarea(tarea);
    }
    //Seleccionar una tarea
    const seleccionarTarea = tarea =>{
        guardarTareaActual(tarea);
    }

    return ( 
        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>
            <div className='estado'>
                {tarea.estado 
                ?  
                    (
                        <button
                            type='button'
                            className='completo'
                            onClick={ () => cambiarEstado(tarea)}
                        >Completo</button>
                    )
                :
                (
                    <button
                        type='button'
                        className='incompleto'
                        onClick={ () => cambiarEstado(tarea)}
                    >Incompleto</button>
                )
                }
            </div>  
            <div className='acciones'>
                <button
                    type='button'
                    className='btn btn-primario'
                    onClick={ ()=> seleccionarTarea(tarea) }
                >Editar</button>
                <button
                    type='button'
                    className='btn btn-secundario'
                    onClick={ () => tareaEliminar(tarea._id)}
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarea;