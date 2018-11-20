const express = require('express')
const router = express.Router()

const {
    index,
    show,
    create,
    edit,
    update,
    destroy
} = require('../controllers/contato.controller')()

router.get('/', index)
router.post('/', create)
router.get('/:id', show)
router.get('/:id/editar', edit)
router.post('/:id', update)
router.get('/:id/excluir',destroy)

module.exports = router