module.exports = (() => {

    const ContatoController = {
        index: (req, res, next) => {
            const usuario = req.session.usuario
            const contatos = req.session.contatos

            const params = {
                usuario: usuario,
                contatos: contatos
            }

            res.render('contatos/index', params)
        },
        show: (req, res) => {
            res.send('show cotnatos')
        },
        create: (req, res) => {
            res.send('show criação de usuários')
        },
        edit: (req, res) => {
            res.send('edição de usuários')
        },
        update: (req, res) => {
            res.send('atualizando usuários')
        },
        destroy: (req, res) => {
            res.send('apagando usuários')
        }
    }

    return ContatoController
})