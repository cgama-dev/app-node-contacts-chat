module.exports = () => {

    const HomeController = {
        home: (req, res, next) => {
            res.render('index', {
                title: 'Express'
            })
        },
        login: (req, res, next) => {
            const email = req.body.email
            const nome = req.body.nome

            const contatos = (!(!!req.session.contatos)) ? [] : req.session.contatos

            if (email && nome) {
                const usuario = {
                    email: email,
                    nome: nome
                }

                req.session.usuario = usuario               
                req.session.contatos = [...contatos, usuario]

                res.redirect('/contatos')

            } else {
                res.redirect('/')
            }

        },
        logout: (req, res, next) => {
            req.session.destroy()
            res.redirect('/')

        }
    }

    return HomeController

}