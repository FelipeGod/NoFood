'use strict'
require('../models/produto-model');

const produtoRepository = require('../repositories/produto-repository');
const repository = new produtoRepository();

function produtoController() {

}

produtoController.prototype.post = async (req, res) => {
    let resultado = await repository.create(req.body);
    res.status(201).send(resultado);
};

produtoController.prototype.put = async (req, res) => {
    let resultado = await repository.update(req.params.id, req.params.body);
    res.status(200).send(resultado);
};

produtoController.prototype.get = async (req, res) => {
    let lista = await repository.getAll();
    res.status(200).send(lista);
};

produtoController.prototype.getById = async (req, res) => {
    let resultado = await repository.getByid(req.params.id);
    res.status(200).send(resultado);
};

produtoController.prototype.delete = async (req, res) => {
    await repository.delete(req.params.id);
};

module.exports = produtoController;