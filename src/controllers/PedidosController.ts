import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Fornecedores from '../models/Fornecedores';
import Produtos from '../models/Produtos';
import pedidosView from '../views/Pedidos_view';
import Pedidos from '../models/Pedidos';


export default {
    async index(request: Request, response: Response) {
        const pedidosRepository = getRepository(Pedidos)

        const pedidos = await pedidosRepository.find();

        return response.json(pedidos)
    },

    async show(request: Request, response: Response) {
        const pedidosRepository = getRepository(Pedidos)

        const produtosRepository = getRepository(Produtos)

        const fornecedoresRepository = getRepository(Fornecedores)

        const { id } = request.params;

        const pedidos = await pedidosRepository.findOneOrFail(id);

        const produtos = await produtosRepository.findOneOrFail(pedidos?.id_produtos)

        const fornecedores = await fornecedoresRepository.findOneOrFail(pedidos?.id_fornecedor);

        return response.json(pedidosView.render(pedidos, produtos, fornecedores));
    },


    async create (request: Request, response: Response) {
        const {
            data_emissao,
            quantidade,
            valor_unitario,
            id_fornecedor,
            id_produtos
        } = request.body;

        const pedidosRepository = getRepository(Pedidos);

        const data = pedidosRepository.create({
            data_emissao,
            quantidade,
            valor_unitario,
            id_fornecedor,
            id_produtos
        });

        const pedidos = pedidosRepository.create(data);

        await pedidosRepository.save(pedidos)


        return response.status(201).json(pedidos)
    },

        async delete(request: Request, response: Response) {
            const { id } = request.params;

            const pedidosRepository = getRepository(Pedidos)

            await pedidosRepository.delete(id);


            return response.send()
        },


        async update(request: Request, response: Response) {
            const { id } = request.params;

            const {data_emissao, quantidade, valor_unitario, id_fornecedor, id_produtos } = request.body;

            const pedidosRepository = getRepository(Pedidos);

            const pedidos = await pedidosRepository.findOne(id);

            if(!Pedidos) {
                throw new Error('Pedido não existente');
            }


            await pedidosRepository.update(id, {
                data_emissao,
                quantidade,
                valor_unitario,
                id_fornecedor,
                id_produtos
            });

            return response.json(Pedidos)

        }, 
}