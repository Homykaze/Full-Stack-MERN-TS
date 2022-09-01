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
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
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
