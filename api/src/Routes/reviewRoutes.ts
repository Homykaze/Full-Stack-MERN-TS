import express from 'express'
import {getReviews, setReview, updateReview, deleteReview} from '../controllers/reviewController'

export const router = express.Router()

router.route('/').get(getReviews).post(setReview)
router.route('/:id').put(updateReview).delete(deleteReview)

module.exports = router