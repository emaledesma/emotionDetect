import {Router} from 'express';
import { usuarioUXController } from './UsuarioUX_Controller';
const router: Router = Router();
class UsuarioUXRouter {
    router:Router;
    constructor(){
        this.router = router;
        this.routes();
    }
    routes(){
        this.router.post('/agregar', usuarioUXController.agregar);
        this.router.get('/listar', usuarioUXController.listar);
        this.router.delete('/eliminar', usuarioUXController.eliminar);
    }
}
const usuarioUXRouter = new UsuarioUXRouter();
export default usuarioUXRouter.router;