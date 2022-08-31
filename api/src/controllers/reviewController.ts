import { Request, Response } from "express"
import asyncHandler from 'express-async-handler'

// @desc    Get reviews from a user
// @route   GET /api/reviews
// @access  Private
export const getReviews = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({message: 'Get reviews'})
})

// @desc    Set review by a user
// @route   POST /api/reviews
// @access  Private
export const setReview = asyncHandler(async (req: Request, res: Response) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('Text field is required, please add it')
    }

    res.status(200).json({message: 'Leave review'})
})

// @desc    Update user's review
// @route   PUT /api/reviews/:id
// @access  Private
export const updateReview = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({message: `Update reivew ${req.params.id}`})
})

// @desc    Delete user's review
// @route   DELETE /api/reviews/:id
// @access  Private
export const deleteReview = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({message: `Delete reivew ${req.params.id}`})
})