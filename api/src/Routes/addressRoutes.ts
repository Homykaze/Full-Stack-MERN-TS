import express from 'express'
import {getAddress, setAddress, updateAddress, deleteAddress} from '../controllers/addressController'

export const router = express.Router()

router.route('/')
    .get(getAddress)
    .post(setAddress)
    .put(updateAddress)
    .delete(deleteAddress)

module.exports = router