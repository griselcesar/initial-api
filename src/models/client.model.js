import { Schema, model } from "mongoose";

const clientSchema = new Schema({
  name: { type: String, required: true },
  code: { type: Number, required: true, unique: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
  type: { type: String, required: true },
});

export default model("clients", clientSchema);
