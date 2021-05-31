import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const FormTarea = () => {

    //Saber si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea} = tareasContext;

    //EFFECT que detecta si hay una tarea seleccionada
    useEffect(()=>{
        if(tareaseleccionada !== null){
            guardarTarea(tareaseleccionada);
        } else {
            guardarTarea({
                nombre : ''
            })
        }
        //dependencia
    }, [tareaseleccionada]);


    //State del formulario
    const [tarea, guardarTarea] = useState({
        nombre:''
    })

    //extraer el nombre del proyecto
    const {nombre} = tarea;

    //si no hay ningun proyecto seleccionado
    if(!proyecto) return null;

    //Array destructuring para extraer proyecto
    const [ proyectoActual ] = proyecto;

    //leer los valores del formualrio
    const hadleChange = e =>{
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e =>{
        e.preventDefault();
        //validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }
        //Es edicion o nueva tarea ?
        if(tareaseleccionada === null ){
                //tarea nueva
            //poner nueva tarea al state de tareas
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);  
        }else {
            //editar tarea existente
            actualizarTarea(tarea);
        }

        //Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual._id);

        //reiniciar form
        guardarTarea({
            nombre: ''
        })

    }

    return ( 
        <div className='formulario'>
           <form
                onSubmit={onSubmit}
           >
                <div className='contenedor-input'>
                    <input 
                        type='text'
                        className='input-text'
                        placeholder='nombre tarea...'
                        name='nombre'
                        value={nombre}
                        onChange = {hadleChange}
                    />
                </div>
                <div className='contenedor-input'>
                    <input 
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form> 
            {errortarea ? <p className='mensaje error'> El nombre de la tarea es obligatorio</p> : null}
        </div>
        
     );
}
 
export default FormTarea;