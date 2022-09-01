import express from 'express'
import dotenv from 'dotenv'

import {errorHandler} from './middleware/errorMiddleware'
import {connectDB} from './config/db'

dotenv.config({ path: '.env' })

const port = process.env.PORT || 5000

connectDB()

const app = express()

// This is to properly get data from requests
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/api/products', require('./routes/productRoutes'))
app.use('/api/categories', require('./routes/categoryRoutes'))
app.use('/api/reviews', require('./routes/reviewRoutes'))
app.use('/api/cart', require('./routes/cartRoutes'))
app.use('/api/address', require('./routes/addressRoutes'))

// Error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))