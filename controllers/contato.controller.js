module.exports = (() => {

    const ContatoController = {
        index: (req, res, next) => {
            res.render('contatos/index')
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