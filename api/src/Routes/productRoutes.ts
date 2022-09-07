import express from 'express'
import {getProducts, getProduct, setProduct, updateProduct, deleteProduct} from '../controllers/productController'
import {protect} from '../middleware/authMiddleware'

const router = express.Router()

// Not everybody is allowed to create, update, and delete products
router.route('/').get(getProducts).post(protect, setProduct)
router.route('/:id').get(getProduct).put(protect, updateProduct).delete(protect, deleteProduct)

module.exports = router