import {Request, Response} from 'express';
import modeloUsuarioUX from './UsuarioUX_Model'
import IUsuarioUX from './UsuarioUX_Interface';
import responder from '../../Middelwares/responder';
import {Estado, Rol} from '../../Config/enumeradores'

class UsuarioUXController {
    public async agregar(req:Request, res:Response){
        try{
            const datosBody = req.body;
            if (!datosBody) {
                throw new Error('No se ingresaron datos');
            }else{
                if(datosBody.dni){
                    const nuevoUsuarioUX: IUsuarioUX = new modeloUsuarioUX(datosBody);
                    const op = await nuevoUsuarioUX.save();
                    if (op) {
                        responder.sucess(req, res, op, 'UsuarioUX agregado', 200);
                      } else {
                        responder.error(req, res, '', 'Ocurrio un error al intentar agregar el UsuarioUX');
                      }
                }else{
                    responder.error(req, res, '', 'Debe ingresar datos del UsuarioUX', 400);
                }
            }
        }catch(error){
            console.log(error);
            responder.error(req, res);
        }
    }
    public async listar(req: Request, res: Response){
        try{
            let listaUsuarioUX: any;
            modeloUsuarioUX
            .find()
            .then(async (usuarioUX: any) => {
                if (usuarioUX && usuarioUX.length) {
                    listaUsuarioUX = [...usuarioUX];
                    responder.sucess(req, res, listaUsuarioUX);
                  } else {
                    responder.error(req, res, '', 'No hay UsuarioUX para listar', 204);
                  }
            })
        }catch(error){
            console.log(error);
            responder.error(req, res);
        }
    }
    public async eliminar(req:Request, res:Response){
        try{
            let id = req.body.id;
            if(id){

                const usuarioUXEliminado = await modeloUsuarioUX.findOneAndDelete({_id: id}, {new: true});
                if(usuarioUXEliminado){
                    responder.sucess(req, res, usuarioUXEliminado);
                }else{
                    responder.error(req, res, id ,'error no se pudo eliminar',500);
                }
            }else{
                responder.error(req, res, id ,'no ingreso id',400);
            }
        }catch(error){
            console.log(error);
            responder.error(req, res);
        }
    }
   
}
export const usuarioUXController = new UsuarioUXController();
// console .log