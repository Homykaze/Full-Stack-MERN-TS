import express from 'express'
import {getReviews, setReview, updateReview, deleteReview} from '../controllers/reviewController'
import {protect} from '../middleware/authMiddleware'

const router = express.Router()

// Get reviews must be available to everybody
router.route('/').get(getReviews).post(protect, setReview)
router.route('/:id').put(protect, updateReview).delete(protect, deleteReview)

module.exports = router