import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import FornecedoresController from './controllers/FornecedoresController';
import ProdutosController from './controllers/ProdutosController';
import PedidosController from './controllers/PedidosController';


const routes = Router();
const upload = multer(uploadConfig);

routes.get('/fornecedores', FornecedoresController.index);
routes.get('/fornecedores/:id', FornecedoresController.show);
routes.post('/fornecedores', FornecedoresController.create);
routes.delete('/fornecedores/:id', FornecedoresController.delete)


routes.get('/produtos', ProdutosController.index);
routes.get('/produtos/:id', ProdutosController.show);
routes.post('/produtos', upload.single('images_produtos'), ProdutosController.create);
routes.delete('/produtos/:id', ProdutosController.delete)
routes.put('/produtos/:id', upload.single('images_produtos'), ProdutosController.update)

routes.get('/pedidos', PedidosController.index);
routes.get('/pedidos/:id', PedidosController.show);
routes.post('/pedidos', PedidosController.create);
routes.delete('/pedidos/:id', PedidosController.delete);
routes.put('/pedidos/:id', PedidosController.update);

export default routes;