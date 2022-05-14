import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    variete: {
        type: String,
    },
    qty: {
        type: Number,
        default: 0,
    }
});

export const ProductModel = mongoose.model('Product', productSchema);