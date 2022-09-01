import { Request, Response } from "express"
import asyncHandler from 'express-async-handler'

import Category from '../models/categoryModel'

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
export const getCategories = asyncHandler(async (req: Request, res: Response) => {
    const categories = await Category.find()
    res.status(200).json(categories)
})

// @desc    Set category by admin
// @route   POST /api/categories
// @access  Private
export const setCategory = asyncHandler(async (req: Request, res: Response) => {
    if (!req.body.name){
        res.status(400)
        throw new Error('Name of the category is required, please add it')
    }
    if (!req.body.image){
        res.status(400)
        throw new Error('Image of the category is required, please add it')
    }

    const category = await Category.create({
        name: req.body.name,
        image: req.body.image
    })

    res.status(200).json(category)
})

// @desc    Update category
// @route   PUT /api/categories/:id
// @access  Private
export const updateCategory = asyncHandler(async (req: Request, res: Response) => {
    const category = await Category.findById(req.params.id)

    if (!category){
        res.status(400)
        throw new Error('Category not found')
    }

    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedCategory)
})

// @desc    Delete category
// @route   DELETE /api/category/:id
// @access  Private
export const deleteCategory = asyncHandler(async (req: Request, res: Response) => {
    const category = await Category.findById(req.params.id)

    if (!category){
        res.status(400)
        throw new Error('Category not found')
    }

    await category.remove()

    res.status(200).json({id: req.params.id})
})