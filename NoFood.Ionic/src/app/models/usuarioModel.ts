

export class UsuarioModel{
    nome: string;
    email: string;
    senha: string;
    foto: string;
}

// nome: { type: String, required: true, trim: true, index: true },
// email: { type: String, required: true },
// senha: { type: String, required: true },
// foto: { type: String },
// ativo: { type: Boolean, required: true, default: true },
// dataCriacao: { type: Date, default: Date.now }