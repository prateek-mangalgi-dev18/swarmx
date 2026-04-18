import mongoose from "mongoose"

const documentSchema = new mongoose.Schema(
  {
    docId: {
      type: String,
      required: true,
      unique: true,
    },
      content: {
        type: Object,
        default: {},
    }
  },
  { timestamps: true }
)

export default mongoose.model("Document", documentSchema)