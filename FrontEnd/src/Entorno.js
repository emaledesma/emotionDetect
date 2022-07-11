//*** Info Deploy */
let _version = 'Version Front v0.0.1 - 23-06-22';
let Enviroment = 'Desarrollo';
let _dominio = 'localhost';
let _api = 'localhost';
let _puerto = '5000'; //Puerto del BackEnd 
let _server = `http://${_api}:${_puerto}`; // url de BackEnd
let _puertoFront = '3000'; //Puerto FrontEnd
switch (Enviroment) {
  case 'Produccion':
    _dominio = ''; //dominio de Backend
    _api = ''; //direccion ip de BackEnd
    _puerto = ''; //Puerto de BackEnd
    _server = `https://${_api}:${_puerto}`;
    break;

  case 'Testing':
    _dominio = ''; //dominio de Backend
    _api = ''; //direccion ip de BackEnd
    _puerto = ''; //Puerto de BackEnd
    console.log(`${Enviroment} :  ${_version}`);
    break;

  case 'Desarrollo':
    console.log(`${Enviroment} :  ${_version}`);
    break;

  default:
    console.error('ERROR: Debe setear una variable de entorno');
    break;
}

export const api = _api;
export const dominio = _dominio;
export const puerto = _puerto;
export const server = _server; 

