import "dotenv/config";
import mongoose from "mongoose";

const Meta = new mongoose.Schema(
  {
    block1: [
      {
        status: {
          type: String,
          enum: ["active", "deactive"],
          default: "active",
          required: true,
        },
        slider_name: String,
        small_title: String,
        large_title: String,
        images: {
          name: String,
          path: String,
        },
        created_at: Date,
        updated_at: Date,
      },
    ],
    block2: [
      {
        status: {
          type: String,
          enum: ["active", "deactive"],
          default: "active",
          required: true,
        },
        blog_name: String,
        title: String,
        content: String,
        images: {
          name: String,
          path: String,
        },
        created_at: Date,
        updated_at: Date,
      },
    ],
  },
  {
    collection: "meta",
  }
);

const model = mongoose.model("meta", Meta);

export default model;
