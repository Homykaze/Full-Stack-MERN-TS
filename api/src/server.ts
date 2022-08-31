import express from 'express'
import dotenv from 'dotenv'
import {errorHandler} from './middleware/errorMiddleware'

dotenv.config({ path: '.env' })

const port = process.env.PORT || 5000

const app = express()

// This is to properly get data from requests
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/api/reviews', require('./routes/reviewRoutes'))

// Error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))