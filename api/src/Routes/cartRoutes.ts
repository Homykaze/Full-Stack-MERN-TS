import express from 'express'
import {getCart, setCart, updateCart, deleteCart} from '../controllers/cartController'

export const router = express.Router()

router.route('/')
    .get(getCart)
    .post(setCart)
    .put(updateCart)
    .delete(deleteCart)

module.exports = router