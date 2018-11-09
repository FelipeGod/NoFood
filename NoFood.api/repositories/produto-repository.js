require('../models/categoria-model');

const mongoose = require('mongoose');
const produtoModel = mongoose.model('Produto');

class produtoRepository {
    constructor() {
    }

    async create(data){
        let produto = await new produtoModel(data);
        let resultado = await produto.save();
        return resultado;
    }

    async update(id, data){
        await produtoModel.findByIdAndUpdate(id);
        let resultado = await produtoModel.findById(id, data);
        return resultado;
    }

    async getAll(){
        return await produtoModel.find();
    }

    async getByid(id){
        return await produtoModel.findById(id);
    }

    async delete(id){
        return await produtoModel.findByIdAndDelete(id);
    }
}

module.exports = produtoRepository;