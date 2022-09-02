import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface CartDocument extends Document {
  user: ObjectId
  products: [
    {
      productId: ObjectId
      quantity: number
    }
  ]
  paid: boolean
}

const CartSchema = new Schema<CartDocument>({
  user:{
    type: Schema.Types.ObjectId,
    required: [true, 'Please, add the associated user'],
    ref: 'User',
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