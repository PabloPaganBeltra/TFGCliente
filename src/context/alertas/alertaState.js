import React, { useReducer } from 'react';
import alertaReducer from './alertaReducer';
import alertaContext from './alertaContext';

import { MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../../types';

const AlertaState = props => {

    const initialState = {
        alerta: null
    }

    const [ state, dispactch] = useReducer( alertaReducer, initialState );

    //Funciones
    const mostrarAlerta = (msg, categoria) =>{
        dispactch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        });

        //Ocultamos la alerta con un timeout
        setTimeout(() =>{
            dispactch({
                type: OCULTAR_ALERTA
            })
        }, 5000);
    }

    return (
        <alertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            { props.children }
        </alertaContext.Provider>
    )
}

export default AlertaState;