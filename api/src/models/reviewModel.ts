import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface ReviewDocument extends Document {
    reviewerId: number
    productId: number
    rate: 1 | 2 | 3 | 4 | 5
    text: string
}

const ReviewSchema = new Schema<ReviewDocument>({
    reviewerId: {
      type: Number,
      ref: 'User',
      required: [true, 'Please, add reviewer ID'],
    },
    productId: {
      type: Number,
      ref: 'Product',
      // we make it unique to prevent the possibility of leaving more than 1 review for the same product from the same user
      unique: true, 
      required: [true, 'Please, add product ID'],
    },
    rate: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: [true, 'Please, add your rate value'],
    },
    text: {
      type: String,
    },
},
{
    // Creates 'updated at' and 'created at' fields automatically
    timestamps: true
})
  
const Review = mongoose.model<ReviewDocument>('Review', ReviewSchema)

export default Review