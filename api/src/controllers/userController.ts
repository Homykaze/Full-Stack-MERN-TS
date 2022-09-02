import { Request, Response } from "express"
import asyncHandler from 'express-async-handler'

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

import User from '../models/userModel'

// @desc    Register new user
// @route   POST /api/users
// @access  Public
export const registerUser = asyncHandler(async (req: Request, res: Response) => {
    const {firstname, lastname, username, email, password} = req.body

    if(!firstname || !lastname || !username || !email || !password){
        res.status(400)
        throw new Error('Please, add all fields')
    }

    // Check if user exists
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        firstname,
        lastname,
        username,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const {email, password} = req.body

    // Check for user email
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
export const getMe = asyncHandler(async (req: any, res: Response) => {
    const loggedUser = await User.findById(req.user.id)

    res.status(200).json({
        id: loggedUser?._id,
        firstname: loggedUser?.firstname,
        lastname: loggedUser?.lastname,
        username: loggedUser?.username,
        email: loggedUser?.email
    })
})

// Generate JWT, should be moved to ../services
const generateToken = (id: number | string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}