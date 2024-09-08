import mongoose from "mongoose";

const validEventTypes = ["wedding", "birthday", "music"];
const validEventStatus = ["published", "draft", "removed"];
const FamilySchema = new mongoose.Schema({
  father: String,
  mother: String,
  address: String,
  name: { type: String, required: true },
});

const EventSchema = new mongoose.Schema({
  eventType: {
    type: String,
    enum: validEventTypes,
    required: true,
  },
  groomDetails: FamilySchema,
  brideDetails: FamilySchema,
  message: String,
  time: Date,
  coverImage: String,
  status: {
    type: String,
    enum: validEventStatus,
  },
  location: {
    name: String,
    address: String,
    geocode: {
      lat: Number,
      long: Number,
    },
  },
  viewCount: Number,
});

const eventModel = new mongoose.model("Event", EventSchema);

export { eventModel };
