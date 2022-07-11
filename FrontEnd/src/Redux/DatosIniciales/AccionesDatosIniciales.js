import API from './../Configuracion/api';
export const ObtenerDatosIniciales_Exito = 'ObtenerDatosIniciales_Exito';
export const ObtenerDatosIniciales_Error = 'ObtenerDatosIniciales_Error';
export const ObtenerDatosIniciales_Cargando = 'ObtenerDatosIniciales_Cargando';

export const ObtenerDatosIniciales_Exito_accion = (datos, variable) => {
    return {
      type: ObtenerDatosIniciales_Exito,
      datos: datos,
      variable: variable
    };
};
export const ObtenerDatosIniciales_Error_accion = (error) => {
    return {
      type: ObtenerDatosIniciales_Error,
      error: error,
    };
};
export const ObtenerDatosIniciales_Cargando_accion = (estado) => {
    return {
      type: ObtenerDatosIniciales_Cargando,
      estado: estado,
    };
};
export const ObtenerEstados_accion = () => {
    return dispatch => {
       dispatch(ObtenerDatosIniciales_Cargando_accion(true));
      API({
        url: '/estados/listar',
        method: 'GET',
      })
        .then(res => {
            console.log(res)
           dispatch(ObtenerDatosIniciales_Exito_accion(res, 'estados'));
        })
        .catch(error => {
          console.log({error});
           dispatch(ObtenerDatosIniciales_Error_accion(error));
        });
    };
  };
  export const ObtenerTipoSolicitud_accion = () => {
    return dispatch => {
       dispatch(ObtenerDatosIniciales_Cargando_accion(true));
      API({
        url: '/tipoSolicitud/listar',
        method: 'GET',
      })
        .then(res => {
            console.log(res)
           dispatch(ObtenerDatosIniciales_Exito_accion(res, 'tipoSolicitud'));
        })
        .catch(error => {
          console.log({error});
           dispatch(ObtenerDatosIniciales_Error_accion(error));
        });
    };
  };



//########################Template ACCIONES
/*
export const nombreOpcionReducer_Exito = 'nombreOpcionReducer_Exito';
export const nombreOpcionReducer_Error = 'nombreOpcionReducer_Error';
export const nombreOpcionReducer_Cargando = 'nombreOpcionReducer_Cargando';

export const nombreAccionDisparadora_Exito_accion = (datos,variable) => {
    return {
      type: nombreOpcionReducer_Exito,
      datos: datos,
      variable: variable
    };
};
export const nombreAccionDisparadora_Error_accion = (error) => {
    return {
      type: nombreOpcionReducer_Error,
      error: error,
    };
};
export const nombreAccionDisparadora_Cargando_accion = (estado) => {
    return {
      type: nombreOpcionReducer_Cargando,
      estado: estado,
    };
};
export const nombreAcion_accion = datosRecibidos => {
    return dispatch => {
      //##disparador cambia estado en store 
       //dispatch(nombreAccionDisparadora_Cargando_accion(true));
      API({
        url: '/ruta/endpoint',
        method: '',
        data: datosRecibidos,
      })
        .then(res => {
          //##disparador actualiza, elimina, agregar estado o datos en store    
           //dispatch(nombreAccionDisparadora_Exito_accion(res, 'tipoVariable'));
        })
        .catch(error => {
          console.log({error});
          //##disparador actualiza, estado en caso de error al realizar la peticion
           //dispatch(nombreAccionDisparadora_Error_accion(error));
        });
    };
  };
*/