import { Request, Response } from "express"
import asyncHandler from 'express-async-handler'

import Cart from '../models/cartModel'
import User from '../models/userModel'

// @desc    Get cart
// @route   GET /api/cart
// @access  Private
export const getCart = asyncHandler(async (req: any, res: Response) => {
    const cart = await Cart.find({ user: req.user.id})
    res.status(200).json(cart)
})

// @desc    Set cart
// @route   POST /api/cart
// @access  Private
export const setCart = asyncHandler(async (req: any, res: Response) => {
    const cart = await Cart.create({
        //user: req.user.id,
        products: req.body.products,
        paid: req.body.paid
    })

    res.status(200).json(cart)
})

// @desc    Update cart
// @route   PUT /api/cart
// @access  Private
export const updateCart = asyncHandler(async (req: any, res: Response) => {
    const cart = await Cart.findById(req.params.id)

    if (!cart){
        res.status(400)
        throw new Error('Cart not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the cart user
    if(cart.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    //Check req.params
    const updatedCart = await Cart.findOneAndUpdate(req.params, req.body, {new: true})

    res.status(200).json(updatedCart)
})

// @desc    Delete cart
// @route   DELETE /api/cart
// @access  Private
export const deleteCart = asyncHandler(async (req: any, res: Response) => {
    const cart: any = await Cart.findOne({ user: req.user.id})

    if (!cart){
        res.status(400)
        throw new Error('Cart not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the cart user
    if(cart.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await cart.remove()

    res.status(200).json({id: req.params.id})
})