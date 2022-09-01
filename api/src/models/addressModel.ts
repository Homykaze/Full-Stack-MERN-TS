import mongoose, { Document, Schema } from 'mongoose'

export interface AddressDocument extends Document {
  name: string
  city: string
  country: string
  state: string
  street: string
  postalCode: string
}

const AddressSchema = new Schema<AddressDocument>({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
  },
  street: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  }
})

const Address = mongoose.model<AddressDocument>('Address', AddressSchema)
export default Address
