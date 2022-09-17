import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Fornecedores from '../models/Fornecedores';


export default {
    async index(request: Request, response: Response) {
        const fornecedoresRepository = getRepository(Fornecedores);

        const fornecedores = await fornecedoresRepository.find();


        return response.json(fornecedores);

    },

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const fornecedoresRepository = getRepository(Fornecedores);

        const fornecedores = await fornecedoresRepository.findOneOrFail(id);


        return response.json(fornecedores)

    },

    async create(request: Request, response: Response) {
        const {
            name,
            telefone,
            email,
        } = request.body;
    
        const fornecedoresRepository = getRepository(Fornecedores);

        const data = fornecedoresRepository.create({
            name,
            telefone,
            email,
        })

        
        const fornecedores = fornecedoresRepository.create(data);

    
        await fornecedoresRepository.save(fornecedores)
    
    
        return response.status(201).json(fornecedores)
    },

    async delete(request: Request, response: Response) {
        const { id } = request.params; 
        
        const fornecedoresRepository = getRepository(Fornecedores);
        
        await fornecedoresRepository.delete(id); 
        
        return response.send()
    },

};