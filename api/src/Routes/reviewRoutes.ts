import express from 'express'
import {getReviews, setReview, updateReview, deleteReview} from '../controllers/reviewController'
import {protect} from '../middleware/authMiddleware'

const router = express.Router()

router.route('/').get(protect, getReviews).post(protect, setReview)
router.route('/:id').put(protect, updateReview).delete(protect, deleteReview)

module.exports = router