
import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
 } from '../../types';



//export default ( state, action )=>{
const  authR= (state, action) =>{
    switch(action.type){
        //la respuesta nos da el token, asi que la podemos pasar por le payload
        case LOGIN_EXITOSO:
        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                autenticado:true,
                mensaje:null,
                cargando:false
            }

        case OBTENER_USUARIO:
            return{
                ...state,
                usuario: action.payload,
                autenticado: true,
                cargando:false
            }

        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                usuario:null,
                autenticado: null,
                token:null,
                mensaje: action.payload,
                cargando: false
            }

        default:
            return state;
    }

}

export default authR