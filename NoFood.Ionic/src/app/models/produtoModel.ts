export class ProdutoModel {
    _id: string
    nome: string;
    descricao: string;
    preco: number;
    foto: string;
    ativo: boolean;
}

// nome: { type: String, required: true, trim: true, index: true },
// descricao: { type: String, required: true },
// preco: { type: Number, required: true, default: 0 },
// foto: { type: String, required: true },
// ativo: { type: Boolean, required: true, default: true },
// categoriaId: { type: schema.Types.ObjectId, ref: 'Categoria' },
// dataCriacao: { type: Date, default: Date.now }