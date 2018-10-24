module.exports = (app) => {
   
    const UserController = {
        home: (req, res, next) => {
            res.send('respond with a resource');
        },
        login: (req, res, next) => {
            res.send('Login ...');
        }
    }

    return UserController

}