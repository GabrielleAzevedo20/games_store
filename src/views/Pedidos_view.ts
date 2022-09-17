import Fornecedores from '../models/Fornecedores';
import Produtos from '../models/Produtos';
import Pedidos from '../models/Pedidos';

export default {
    render(pedidos: Pedidos,
            produtos: Produtos,
            fornecedores: Fornecedores) 
            {
                const valorTotal = pedidos.quantidade * pedidos.valor_unitario;
        return {
            id_pedidos: pedidos?.id_pedidos,
            data_emissao: pedidos?.data_emissao,
            quantidade: pedidos?.quantidade,
            valor_unitario: pedidos?.valor_unitario,
            name_produto: produtos?.name_produto,
            unidade_medida: produtos?.unidade_medida,
            images_produtos: `http://localhost:3333/uploads/${produtos?.images_produtos}`,
            id: fornecedores?.id,
            name: fornecedores?.name,
            telefone: fornecedores?.telefone,
            email: fornecedores?.email,
            valor_Total: valorTotal
        };
    },
}