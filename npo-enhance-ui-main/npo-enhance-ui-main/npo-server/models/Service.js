const mongoose = require('mongoose');

// name: "Education Program",
//       location: "District A, State B, 123456",
//       contact: "education@service.com",
//       description: "Providing educational resources to underprivileged children.",
//       image: "https://via.placeholder.com/150",
//       duration: "6 months",
//       impact: "100+ children educated",
const servicesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    impact: {
        type: String,
        required: true
    }
});
const Servicess =mongoose.model("services", servicesSchema);

module.exports = Servicess;
