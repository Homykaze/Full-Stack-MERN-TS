import { Request, Response } from "express"
import asyncHandler from 'express-async-handler'

import Cart from '../models/cartModel'

// @desc    Get cart
// @route   GET /api/cart
// @access  Private
export const getCart = asyncHandler(async (req: Request, res: Response) => {
    const cart = await Cart.find()
    res.status(200).json(cart)
})

// @desc    Set cart
// @route   POST /api/cart
// @access  Private
export const setCart = asyncHandler(async (req: Request, res: Response) => {
    if (!req.body.userId){
        res.status(400)
        throw new Error('User ID must be included')
    }

    const cart = await Cart.create({
        userId: req.body.userId,
        products: req.body.products,
        status: req.body.status
    })

    res.status(200).json(cart)
})

// @desc    Update cart
// @route   PUT /api/cart
// @access  Private
export const updateCart = asyncHandler(async (req: Request, res: Response) => {
    const cart = await Cart.findOne()

    if (!cart){
        res.status(400)
        throw new Error('Cart not found')
    }

    //Check req.params
    const updatedCart = await Cart.findOneAndUpdate(req.params, req.body, {new: true})

    res.status(200).json(updatedCart)
})

// @desc    Delete cart
// @route   DELETE /api/cart
// @access  Private
export const deleteCart = asyncHandler(async (req: Request, res: Response) => {
    const cart = await Cart.findOne()

    if (!cart){
        res.status(400)
        throw new Error('Cart not found')
    }

    await cart.remove()

    res.status(200).json({id: req.params.id})
})