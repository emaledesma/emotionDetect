import {Document} from 'mongoose';
export default interface IUsuarioUX extends Document{
    _id: string;
    dni: number,
    nombre: string,
    email: string,
    sexo: string,
    edad: number,
    resultadoUX: Array<Object>
}