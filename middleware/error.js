const notFound = ((req, res, next) => {

    // console.log(res);
    res.status(400)
    res.render('not-found')
})

const serverError = ((error, req, res, next) => {
    res.status(500)
    res.render('server-error', { error: res.error })
})

module.exports = { notFound, serverError }