import mongoose, { Document, ObjectId, Schema } from 'mongoose'

export interface UserDocument extends Document {
  firstname: string
  lastname: string
  username: string
  email: string
  password: string
  address: ObjectId[]
  reviews: ObjectId[]
}

const UserSchema = new Schema<UserDocument>({
  firstname: {
    type: String,
    required: [true, 'Please, add the firstname']
  },
  lastname: {
    type: String,
    required: [true, 'Please, add the lastname']
  },
  username: {
    type: String,
    required: [true, 'Please, add a username'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please, add an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please, add a password']
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review',
      required: true,
    },
  ],
},
  {
    timestamps: true
  }
)

const User = mongoose.model<UserDocument>('User', UserSchema)
export default User
