// Dependencies
import mongoose from 'mongoose';
const schema = mongoose.Schema;

// Define Hotel Schema
const HotelSchema = schema(
    {
    name: {
      type: String,
      required: [true, 'The Hotel name is required.'],
    },
    price: {
      type: schema.Types.Decimal128,
    },
    stars: {
      type: schema.Types.Decimal128,
      min: 0,
      max: 5,
      default: '0.0',
    },
    images: [String],
    amenities: [String],
    address: {
      type: String,
      required: [true, 'The Hotel address is required.'],
    },
    city: {
      type: String,
      required: [true, 'The Hotel city is required.'],
    },
    country: {
      type: String,
      required: [true, 'The Hotel country is required.'],
    },
    state: {
      type: String,
      required: [true, 'The Hotel state is required.'],
    },
    latitude: {
      type: schema.Types.Decimal128,
    },
    longitude: {
      type: schema.Types.Decimal128,
    },
    phone: {
      type: String,
      required: [true, 'The Hotel phone is required.'],
    },
    website: String,
  }, {
    timestamps: true,
  }
);

// Creating Model
const HotelModel = mongoose.model('Hotel', HotelSchema, 'Hotel');

export default HotelModel;
