module.exports = (mongoose) => {
  return mongoose.model(
    'temples',
    mongoose.Schema(
      {
        temple_id: Number,
        name: String,
        location: String,
        dedicated: String,
        additionalInfo: Boolean,
      },
      { timestamps: true }
    )
  );
};