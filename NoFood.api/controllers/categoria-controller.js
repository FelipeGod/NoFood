'use strict'
require('../models/categoria-model');

const categoriaRepository = require('../repositories/categoria-repository');
const repository = new categoriaRepository();

function categoriaController() {

}

categoriaController.prototype.post = async (req, res) => {
    let resultado = await repository.create(req.body);
    res.status(201).send(resultado);
};

categoriaController.prototype.put = async (req, res) => {
    let resultado = await repository.update(req.param.id, req.params.body);
    res.status(202).send(resultado);
};

categoriaController.prototype.get = async (req, res) => {
    let lista = await repository.getAll();
    res.status(200).send(lista);
};

categoriaController.prototype.getById = async (req, res) => {
    let resultado = await repository.getById(req.params.id);
    res.status(200).send(resultado);
};

categoriaController.prototype.delete = async (req, res) => {
    let deletado = await repository.delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = categoriaController;