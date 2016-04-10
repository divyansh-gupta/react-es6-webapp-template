import Schema from 'mongoose';
import ObjectId from 'Schema';

let User = new Schema({
  username: String,
  password: String,
  userId: ObjectId,
  email: { type: String },
  created: { type: Date, default: Date.now },
  facebook: { type: {}, default:  '' },
  twitter: { type: {}, default: '' },
  google: { type: {}, default: '' }
});

module.exports = User;
