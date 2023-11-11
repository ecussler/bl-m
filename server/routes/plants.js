const router = require('express').Router(); 
const Plant = require('../models/plant.model'); 

router.route('/').get((req, res) => {
    Plant.find()
    .then(plants => res.json(plants))
    .catch(err => res.status(400).json('Error: ' + err)); 
}); 

router.route('/add').post((req, res) => {
    const username = req.body.username; 
    const commonName = req.body.commonName; 
    const scientificName = req.body.scientificName; 
    const careLevel = req.body.careLevel; 
    const cycle = req.body.cycle; 
    const description = req.body.description; 

    const newPlant = new Plant ({
        username, 
        commonName, 
        scientificName, 
        careLevel, 
        cycle, 
        description, 
    }); 

    newPlant.save()
    .then(() => res.json('Plant added!'))
    .catch(err => res.status(400).json('Error: ' + err));
    
});

module.exports = router; 