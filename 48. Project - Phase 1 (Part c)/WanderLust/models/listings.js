const mongoose = require("mongoose");
const { title } = require("process");
const Schema = mongoose.Schema;
const defaultLink = "https://images.unsplash.com/photo-1688653802629-5360086bf632?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: defaultLink,
        set: (v) => v === "" ? defaultLink : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
