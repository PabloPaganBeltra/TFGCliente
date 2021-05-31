import React, {useContext, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

/**
 * EN ESTA PARTE DEL CODIGO COMPROBAMOS SI UN USUARIO ESTA AUTENTICADO Y 
 * EN CASO DE NO ESTARLO LO REDIGIREMOS A LA PRIMERA PANTALLA, DE INICIO DE SESION
 */

const RutaPrivada = ({ component: Component, ...props}) => {

    const authContext = useContext(AuthContext);
    const {  autenticado, cargando, usuarioAutenticado } = authContext;

    useEffect(()=>{
        usuarioAutenticado();
        //eslint-disable-next-line
    },[])

    return ( 
        <Route {...props} render= { props=> !autenticado && !cargando ? (
            <Redirect to='/' />
        ) : (
            <Component { ...props } />
        ) }
        />
            
     );
}
 
export default RutaPrivada;