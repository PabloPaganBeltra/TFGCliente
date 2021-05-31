
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types';

 const tarRed = (state, action) =>{
    switch(action.type){
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: action.payload
            }

        case AGREGAR_TAREA:
            return{
                ...state,
                tareasproyecto : [action.payload, ...state.tareasproyecto],
                //array nuevo de tareas mas la nueva
                errortarea: false
                //reseteamos el error si se hace bien para quitar el mensaje de alerta
            }
        
        case VALIDAR_TAREA:
            return{
                ...state,
                errortarea: true
            }

        case ELIMINAR_TAREA:
            return{
                ...state,
                tareasproyecto: state.tareasproyecto.filter( tarea => tarea._id !== action.payload )
            }
            
            case TAREA_ACTUAL:
                return{
                    ...state,
                    //este payload es la tarea completa, por eso lo colocamos aqui
                    tareaseleccionada: action.payload
                }
            
            case ACTUALIZAR_TAREA:
                return{
                    ...state,
                    tareasproyecto: state.tareasproyecto.map(tarea => tarea._id === action.payload._id ? 
                        action.payload : tarea ),
                    tareaseleccionada:null
                }

        default:
            return state;
    }
}
export default tarRed;