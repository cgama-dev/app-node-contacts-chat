module.exports = (() => {


    const ChatController = {
        index: (req, res, next) => {
            const result = {
                email: req.params.email
            }
            res.render("chat/index", result)
        }
    }

    return ChatController
})
