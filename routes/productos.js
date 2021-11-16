
const { Router } = require('express');
const { productosGet,productosPost,productosPut,productosDelete } = require('../controllers/productos');


const router = Router()


router.get('/', productosGet);

router.post('/', productosPost )

router.put('/:id', productosPut)

router.delete('/:id', productosDelete)


module.exports = router