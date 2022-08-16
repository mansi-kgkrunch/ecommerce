import "dotenv/config";
import mongoose from "mongoose";

const Order = mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    postcode: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    order_notes: {
      type: String,
      required: true,
    },
    cart_total: {
      type: String,
      required: true,
    },
    order_item: [
      {
        product_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },
        product_quantity: { type: Number },
        // required: true,
      },
    ],
    created_at: Date,
  },
  {
    collection: "order",
  }
);

const model = mongoose.model("order", Order);

export default model;
