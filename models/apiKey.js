module.exports = (mongoose) => {
  const schema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    name: { type: String },
    active: { type: Boolean, default: true }
  });

  return mongoose.model('ApiKey', schema);
};