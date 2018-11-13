'use strict'
require('../models/produto-model');

const repository = require('../repositories/produto-repository');
const _repo = repository();

function produtoController() {

}

produtoController.prototype.post = async (req, res) => {
    let resultado = await _repo.create(req.body);
    res.status(201).send(resultado);
};

produtoController.prototype.put = async (req, res) => {
    let resultado = await _repo.update(req.params.id, req.params.body);
    res.status(200).send(resultado);
};

produtoController.prototype.get = async (req, res) => {
    let lista = await _repo.getAll();
    res.status(200).send(lista);
};

produtoController.prototype.getById = async (req, res) => {
    let resultado = await _repo.getByid(req.params.id);
    res.status(200).send(resultado);
};

produtoController.prototype.delete = async (req, res) => {
    await _repo.delete(req.params.id);
};

module.exports = produtoController;