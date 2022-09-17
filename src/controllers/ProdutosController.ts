import { Request, Response } from 'express';
import uploadConfig from '../config/upload';
import path from 'path';
import { getRepository } from 'typeorm';
import Produtos from '../models/Produtos';


export default {
    async index(request: Request, response: Response) {
        const produtosRepository = getRepository(Produtos);

        const produtos = await produtosRepository.find();


        return response.json(produtos);

    },



    async show(request: Request, response: Response) {
        const { id } = request.params;

        const produtosRepository = getRepository(Produtos);

        const produtos = await produtosRepository.findOneOrFail(id);


        return response.json(produtos)

    },

    async create(request: Request, response: Response) {
        const {
            name_produto, 
            unidade_medida,
        } = request.body;
    

    const produtosRepository = getRepository(Produtos);
    
    const requestImages = request.file as Express.Multer.File;
        const images_produtos = requestImages.filename

        const produtos = produtosRepository.create({name_produto, 
            unidade_medida,
            images_produtos})


        path.join(uploadConfig.directory, produtos.images_produtos)

        await produtosRepository.save(produtos)

        return response.status(202).json(produtos)

    },

    async delete(request: Request, response: Response) {
        const { id } = request.params; 
        
        const produtosRepository = getRepository(Produtos);
        
        await produtosRepository.delete(id); 
        
        return response.send()
    },

    async update(request: Request, response: Response){
        const { id } = request.params;

        const {name_produto, unidade_medida} = request.body;

        const requestImages = request.file as Express.Multer.File;
        const images_produtos = requestImages.filename;

    const produtosRepository = getRepository(Produtos);

    const produtos = await produtosRepository.findOne(id);

    if(!Produtos) {
        throw new Error('Produto não existe');
    }


    await produtosRepository.update(id, {
            name_produto,
            unidade_medida,
            images_produtos
    });
        return response.json(Produtos);
    },

}