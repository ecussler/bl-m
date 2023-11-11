const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const plantsSchema = new Schema({
    commonName: {
        type: String, 
        required: true
    }, 
    scientificName: {
        type: String, 
        required: true
    }, 
    careLevel: {
        type: String, 
        required: true
    }, 
    cycle: {
        type: String, 
        required: false
    }, 
    watering: {
        type: String, 
    }, 
    sunlight: {
        type: String, 
    }, 
    flowering: {
        type: Boolean, 
    }, 
    petToxin: {
        type: Boolean, 
    },
    description: {
        type: String,
        required: true, 
    }, 
    thumbnail: {
        type: String,
    }, 

})



const Plant = mongoose.model('Plant', plantsSchema); 

module.exports = Plant; 