import express from 'express'
import {getCategories, setCategory, updateCategory, deleteCategory} from '../controllers/categoryController'

export const router = express.Router()

router.route('/').get(getCategories).post(setCategory)
router.route('/:id').put(updateCategory).delete(deleteCategory)

module.exports = router