import { Request, Response } from "express"
import asyncHandler from 'express-async-handler'

import Product from '../models/productModel'

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getProducts = asyncHandler(async (req: Request, res: Response) => {
    const products = await Product.find()
    res.status(200).json(products)
})

// @desc    Get single product
// @route   GET /api/products
// @access  Public
export const getProduct = asyncHandler(async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
})

// @desc    Set product by a seller/admin
// @route   POST /api/products
// @access  Private
export const setProduct = asyncHandler(async (req: Request, res: Response) => {
    if (!req.body.title){
        res.status(400)
        throw new Error('Title of the product is required, please add it')
    }
    if (!req.body.price){
        res.status(400)
        throw new Error('Price of the product is required, please add it')
    }

    const product = await Product.create({
        title: req.body.title,
        price: req.body.price,
        sellerId: req.body.sellerId,
        categories: req.body.categories,
        reviews: req.body.reviews,
        images: req.body.images
    })

    res.status(200).json(product)
})

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private
export const updateProduct = asyncHandler(async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id)

    if (!product){
        res.status(400)
        throw new Error('Product not found')
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedProduct)
})

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private
export const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id)

    if (!product){
        res.status(400)
        throw new Error('Product not found')
    }

    await product.remove()

    res.status(200).json({id: req.params.id})
})