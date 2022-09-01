import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface CartDocument extends Document {
  userId: ObjectId
  products: [
    {
      productId: ObjectId
      quantity: number
    }
  ]
  paid: boolean
}

const CartSchema = new Schema<CartDocument>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    // we make it unique to prevent the possibility of creating more than 1 cart for a single user
    unique: true
  },
  products:[{
    // Check the type
    type: Schema.Types.Array,
    ref: 'Product',
    quantity: Number
  }],
  paid: {
    type: Boolean,
  }
})

const Cart = mongoose.model<CartDocument>('Cart', CartSchema)
export default Cart