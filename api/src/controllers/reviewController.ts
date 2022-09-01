import { Request, Response } from "express"
import asyncHandler from 'express-async-handler'

import Review from '../models/reviewModel'

// @desc    Get reviews from a user
// @route   GET /api/reviews
// @access  Private
export const getReviews = asyncHandler(async (req: Request, res: Response) => {
    const reviews = await Review.find()
    res.status(200).json(reviews)
})

// @desc    Set review by a user
// @route   POST /api/reviews
// @access  Private
export const setReview = asyncHandler(async (req: Request, res: Response) => {
    if (!req.body.reviewerId){
        res.status(400)
        throw new Error('Reviewer ID is required, please add it')
    }
    if (!req.body.productId){
        res.status(400)
        throw new Error('Product ID is required, please add it')
    }
    if (!req.body.rate){
        res.status(400)
        throw new Error('Rate value is required, please add it')
    }

    const review = await Review.create({
        reviewerId: req.body.reviewerId,
        productId: req.body.productId,
        rate: req.body.rate,
        text: req.body.text
    })

    res.status(200).json(review)
})

// @desc    Update user's review
// @route   PUT /api/reviews/:id
// @access  Private
export const updateReview = asyncHandler(async (req: Request, res: Response) => {
    const review = await Review.findById(req.params.id)

    if (!review){
        res.status(400)
        throw new Error('Review not found')
    }

    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedReview)
})

// @desc    Delete user's review
// @route   DELETE /api/reviews/:id
// @access  Private
export const deleteReview = asyncHandler(async (req: Request, res: Response) => {
    const review = await Review.findById(req.params.id)

    if (!review){
        res.status(400)
        throw new Error('Review not found')
    }

    await review.remove()

    res.status(200).json({id: req.params.id})
})