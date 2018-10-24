module.exports = () => {

    const HomeController = {
        home: (req, res, next) => {
            res.render('index', { title: 'Express' })
        }
    }

    return HomeController

}