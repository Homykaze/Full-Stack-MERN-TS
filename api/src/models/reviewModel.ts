import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface ReviewDocument extends Document {
    user: ObjectId
    productId: ObjectId
    rate: 1 | 2 | 3 | 4 | 5
    text: string
}

const ReviewSchema = new Schema<ReviewDocument>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please, add the associated user'],
  },
  productId: {
    type: Schema.Types.ObjectId,
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