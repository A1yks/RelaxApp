import { Schema, Model, model } from 'mongoose';

export interface User {
    name: string;
    email: string;
    password: string;
    photos: string[];
}

const UserSchema = new Schema<User>(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, index: true, trim: true },
        password: { type: String, required: true },
        photos: { type: [String], default: [] },
    },
    {
        collection: 'users',
    }
);

export default model<User>('User', UserSchema);
