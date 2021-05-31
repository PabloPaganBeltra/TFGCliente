import React, { Fragment, useContext, useState } from "react";
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //Obtener state del formulario
    /*
     * Todas las funciones y todo lo que definimos en proyectoContext
     * sera accesible a traves de este useContext
     */
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } 
    = proyectosContext;

    //state para proyecto
    const[proyecto, guardarProyecto] = useState({
        nombre:''
    });

    //extraer nombre de proyecto
    const { nombre } = proyecto;

    //leer contenidos del input
    const onChangeProyecto = e =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //usuario envia proyecto
    const onSubmitProyecto = e =>{
        //prevenimos que no haga la accion por defecto
        e.preventDefault();

        //validar proyecto
        if(nombre === ''){
            mostrarError();
            return;
        }

        //agregar al state
        agregarProyecto(proyecto)

        //reiniar el form
            guardarProyecto({
                nombre:''
            })
    }

    //Mostrar formulario
    

    return ( 
        <Fragment>
            <button
                type='button' 
                className='btn btn-block btn-primario'
                onClick={ ()=> mostrarFormulario() }
            >Nuevo Proyecto</button>

            {
                formulario ?
                (
                    <form
                        className='formulario-nuevo-proyecto'
                        onSubmit={onSubmitProyecto}
                    >
                        <input
                            type='text'
                            className='input-text'
                            placeholder='nombre proyecto'
                            name='nombre'
                            value={nombre}
                            onChange={onChangeProyecto}
                        />

                        <input 
                            type='submit' 
                            className='btn btn-primario btn-block'
                            value='agregar proyecto'
                        />
                    </form>
                ) : null }

            {errorformulario ? <p className='mensaje error'>El nombre del proyecto es obligatorio</p> : null}
        </Fragment>
        
     );
}
 
export default NuevoProyecto;