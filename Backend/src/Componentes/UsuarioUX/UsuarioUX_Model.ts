import {model, Schema} from 'mongoose';
import IUsuarioUX from './UsuarioUX_Interface';
const UsuarioUXSchema = new Schema({
    dni: Number,
    nombre: String,
    email: String,
    sexo: String,
    edad: Number,
    resultadoUX: Array<Object>
   
})
export default model<IUsuarioUX>('modeloUsuarioUX',UsuarioUXSchema)