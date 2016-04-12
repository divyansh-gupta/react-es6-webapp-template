import mongoose from 'mongoose';
import moment from 'moment';

const Schema = mongoose.Schema;

const User = new Schema({
  username: { type: String, required: true },
  userId: { type: Schema.ObjectId, index: { unique: true } },
  email: { type: String },
  created: { type: Date, default: moment.utc() },
  facebook: {
    username: String,
    email: String,
    token: String
  },
  twitter: {
    username: String,
    email: String,
    token: String
  },
  google: {
    username: String,
    email: String,
    token: String
  }
});

User.pre('save', next => {
  next();
});

User.methods.comparePassword = (candidatePassword, next) => {
  next();
};

User.statics.findByUsername = (username, next) => {
  this.findOne({ username: username }, next);
}

module.exports = mongoose.model('User', User);
