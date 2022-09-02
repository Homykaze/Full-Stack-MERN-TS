import express from 'express'
import {getProducts, getProduct, setProduct, updateProduct, deleteProduct} from '../controllers/productController'

const router = express.Router()

router.route('/').get(getProducts).post(setProduct)
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct)

module.exports = router