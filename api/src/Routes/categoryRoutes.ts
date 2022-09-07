import express from 'express'
import {getCategories, setCategory, updateCategory, deleteCategory} from '../controllers/categoryController'
import {protect} from '../middleware/authMiddleware'

const router = express.Router()

// Not everybody is allowed to create, update, and delete categories
router.route('/').get(getCategories).post(protect, setCategory)
router.route('/:id').put(protect, updateCategory).delete(protect, deleteCategory)

module.exports = router