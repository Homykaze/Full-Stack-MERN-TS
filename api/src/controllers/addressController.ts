import { Request, Response } from "express"
import asyncHandler from 'express-async-handler'

import Address from '../models/addressModel'

// @desc    Get address
// @route   GET /api/address
// @access  Private
export const getAddress = asyncHandler(async (req: Request, res: Response) => {
    const address = await Address.find()
    res.status(200).json(address)
})

// @desc    Set address
// @route   POST /api/address
// @access  Private
export const setAddress = asyncHandler(async (req: Request, res: Response) => {
    if (!req.body.name){
        res.status(400)
        throw new Error('Name must be included')
    }
    if (!req.body.city){
        res.status(400)
        throw new Error('City must be included')
    }
    if (!req.body.country){
        res.status(400)
        throw new Error('Country must be included')
    }
    if (!req.body.street){
        res.status(400)
        throw new Error('Street must be included')
    }
    if (!req.body.postalCode){
        res.status(400)
        throw new Error('Postal code must be included')
    }

    const address = await Address.create({
        name: req.body.name,
        city: req.body.city,
        country: req.body.country,
        street: req.body.street,
        state: req.body.state,
        postalCode: req.body.postalCode,
    })

    res.status(200).json(address)
})

// @desc    Update address
// @route   PUT /api/address
// @access  Private
export const updateAddress = asyncHandler(async (req: Request, res: Response) => {
    const address = await Address.findOne()

    if (!address){
        res.status(400)
        throw new Error('Address not found')
    }

    //Check req.params
    const updatedAddress = await Address.findOneAndUpdate(req.params, req.body, {new: true})

    res.status(200).json(updatedAddress)
})

// @desc    Delete address
// @route   DELETE /api/address
// @access  Private
export const deleteAddress = asyncHandler(async (req: Request, res: Response) => {
    const address = await Address.findOne()

    if (!address){
        res.status(400)
        throw new Error('Address not found')
    }

    await address.remove()

    res.status(200).json({id: req.params.id})
})