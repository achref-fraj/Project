import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb+srv://achref08fraj:RYf5m1IDPLyWjeea@achref.1dcozbo.mongodb.net/?retryWrites=true&w=majority&appName=achref'),
  },
];