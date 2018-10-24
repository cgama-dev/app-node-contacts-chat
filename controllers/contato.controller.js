module.exports = (() => {

    const ContatoController = {
        index: (req, res, next) => {
            const usuario = req.session.usuario
            console.log(req.session.usuario);
            res.render('contatos/index', usuario)
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