import React, { useContext }from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const Proyecto = ({proyecto}) => {

    //Obtener context
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    //Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { obtenerTareas } = tareasContext;

    //Funcion para agregar le proyecto actual
    const seleccionarProyecto = id =>{
        proyectoActual(id); //Fijar un proyecto actual
        obtenerTareas(id); //Filtrar las tareas cuando se de click
    }

    return ( 
        <li>
            <button
                type='button'
                className='btn btn-blank btn-block'
                onClick={ ()=> seleccionarProyecto(proyecto._id) }
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;