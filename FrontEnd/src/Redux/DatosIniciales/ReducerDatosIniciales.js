import{
    ObtenerDatosIniciales_Exito,
    ObtenerDatosIniciales_Error,
    ObtenerDatosIniciales_Cargando,
    guardandoDatosUsuario_Exito,
    guardandoDatosUsuario_Error,
    guardandoDatosUsuario_Cargando
}from './AccionesDatosIniciales'
const datosInicialesPorDefecto = {
    isDatosIniciales: {isMostrar: false, tipo: '', mensaje: ''},
    isDatosUsuarios: {isMostrar: false, tipo: '', mensaje: ''},
    errorAtrapado:{isError:false, mensaje:''},
    estados: [],
    tipoSolicitud: [],
    datosDeUsuario:{}
    
}

const storeDatosIniciales = (state = datosInicialesPorDefecto, accion) => {
    switch (accion.type) {
        case ObtenerDatosIniciales_Exito:{
            switch(accion.variable){
                case 'estados':{
                    return{
                        ...state,
                        estados:accion.datos.data.value,
                        isDatosIniciales: {isMostrar: false, tipo: '', mensaje: ''},
                    }
                }
                case 'tipoSolicitud':{
                    return{
                        ...state,
                        tipoSolicitud:accion.datos.data.value,
                        isDatosIniciales: {isMostrar: false, tipo: '', mensaje: ''},
                    }
                }
                default:
                    console.log("No definio o esta mal definida la variable")
                    return state;
           }
            
        }
        case ObtenerDatosIniciales_Error:{
            return{
                ...state
            }
        }
        case ObtenerDatosIniciales_Cargando:{
            return{
                ...state,
                isDatosIniciales: {isMostrar: accion.estado, tipo: 'cargando', mensaje: 'ObteniendoDatos'},
            }
        }
        case guardandoDatosUsuario_Exito:{
          
            return{
                ...state,
                datosDeUsuario: accion.datos,
                isDatosUsuarios: {isMostrar: false, tipo: '', mensaje: ''},
            }
        }
        case guardandoDatosUsuario_Error:{
            return{
                ...state,
                errorAtrapado:{isError:true, mensaje: accion.error.message},
                isDatosUsuarios: {isMostrar: false, tipo: '', mensaje: ''},
            }
        }
        case guardandoDatosUsuario_Cargando:{
            return{
                ...state,
                isDatosUsuarios: {isMostrar: accion.estado, tipo: 'cargando', mensaje: 'Guardando datos'},
            }
        }
        default:
             return state;
         }
};
export default storeDatosIniciales;


//######################Template REDUCER##############################
/*import{
    nombreOpcionReducer_Exito,
    nombreOpcionReducer_Error,
    nombreOpcionReducer_Cargando,
}from './AccionesDatosIniciales'
const nombreStorePorDefecto = {
    controladorCargando: {isMostrar: false, tipo: '', mensaje: ''},
    
}

const storeNombre = (state = nombreStorePorDefecto, accion) => {
    switch (accion.type) {
        case nombreOpcionReducer_Exito:{
            return{
                ...state
            }
        }
        case nombreOpcionReducer_Error:{
            return{
                ...state
            }
        }
        case nombreOpcionReducer_Cargando:{
            return{
                ...state
            }
        }
        default:
             return state;
         }
};
export default storeNombre;
*/