import express, { Request, Response } from 'express'
import {getReviews, setReview, updateReview, deleteReview} from '../controllers/reviewController'

const router = express.Router()

router.route('/').get(getReviews).post(setReview)
router.route('/:id').put(updateReview).delete(deleteReview)

module.exports = router;