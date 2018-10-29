module.exports = (() => {

    const ContatoController = {
        index: (req, res, next) => {
            const usuario = req.session.usuario
            const contatos = usuario.contatos

            const params = {
                usuario: usuario,
                contatos: contatos
            }

            res.render('contatos/index', params)
        },
        create: (req, res) => {

            const contato = {
                email: req.body.email,
                nome: req.body.nome
            }
            const usuario = req.session.usuario
            
            usuario.contatos = [...usuario.contatos, contato]

            res.redirect('/contatos')
        },
        show: (req, res) => {
            const id = req.body.id
            const contato = req.session.usuario.contatos[id]
            const params = { contato: contato, id: id }

            res.render('contatos/show', params)
        },
        edit: (req, res) => {
            const id = req.params.id
            const usuario = req.session.usuario
            const contato = usuario.contatos[id]
            const params = {
                usuario: usuario
                , contato: contato
                , id: id
            };

            res.render('contatos/edit', params);
        },
        update: (req, res) => {
            const contato = req.body.contato
            const usuario = req.session.usuario;
            usuario.contatos[req.params.id] = contato;

            res.redirect('/contatos');
        },
        destroy: (req, res) => {
            const usuario = req.body.usuario
            const id = req.params.id

            usuario.contatos.splice(id, 1)
            res.redirect('/contatos');
        }
    }

    return ContatoController
})