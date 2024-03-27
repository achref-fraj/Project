import { Mongoose } from 'mongoose';
import { UserSchema } from './schemas/User.schema';

export const usersProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('USER', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];