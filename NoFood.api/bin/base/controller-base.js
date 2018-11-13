exports.post = async(repository, validationContract, req, res) => {
    try {
        let data = req.body;

        if (!validationContract.isValid()) {
            exports.status(400).send({ message: 'Existem dados inválidos na sua requisição', validationContract: validationContract.error() }).end();
            return;
        }

        let resultado = await repository.create(data);
        res.status(201).send(resultado);

    } catch (err) {
        console.log('Post com erro, motivo', err);
        res.status(500).send({ message: 'Erro no processamento', errors: err })
        
    }
};
exports.put = async(repository, validationContract, req, res) => {  
    try {
        let data = req.body;

        if (!validationContract.isValid()) {
            exports.status(400).send({ message: 'Existem dados inválidos na sua requisição', validationContract: validationContract.error() }).end();
            return;
        }

        let resultado = await repository.upadete(req.params.id, data);
        res.status(202).send(resultado);

    } catch (err) {
        console.log('Put com erro, motivo', err);
        res.status(500).send({ message: 'Erro no processamento', errors: err })

    }
};
exports.get = async (repository, req, res) => {
    try {
        let data = await repository.getAll();
        res.status(200).send(data);
    } catch (error) {
        console.log('Get com erro, motivo', err);
        res.status(500).send({ message: 'Erro no processamento', error: err })
    }
};
exports.getById = async (repository, req, res) => {
    try {
        let id = req.params.id;

        if (id) {
            let data = await repository.getById(id);
            res.status(200).send(data);
        }else{
            res.status(400).send({ message: 'O parametro id precisa ser informado', error: err });
        }
        
    } catch (error) {
        console.log('GetById com erro, motivo', err);
        res.status(500).send({ message: 'Erro no processamento', error: err });
    }
};
exports.delete = async(repository, req, res) => {
    try {
        let id = req.params.id;
        if (id) {
            let data = await repository.delete(id);
            res.status(200).send({message: 'item excluido com sucesso'});
        }

    } catch (error) {
        console.log('delete com erro, motivo', err);
        res.status(500).send({ message: 'Erro no processamento', error: err });
    }
};
