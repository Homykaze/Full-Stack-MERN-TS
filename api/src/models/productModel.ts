import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface ProductDocument extends Document {
  title: string
  price: number
  sellerId: ObjectId
  categories: ObjectId[]
  reviews: ObjectId[]
  images: string[]
}

const ProductSchema = new Schema<ProductDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sellerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Category',
      },
    ],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review',
      },
    ],
    images: [
      {
        type: Schema.Types.Array,
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
)

// Gives an error for now, needs to be fixed
// ProductSchema.virtual('reviews', {
//   ref: 'reviewModel',
//   localField: '_id',
//   foreignField: 'productId',
// })

const Product = mongoose.model<ProductDocument>('Product', ProductSchema)
export default Product
