import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    default: "📚"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Category", CategorySchema);
