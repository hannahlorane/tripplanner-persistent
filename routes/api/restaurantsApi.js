var router = require('express').Router();
var Restaurants = require('../../models/restaurant.js');


router.get('/', function (req, res) {
  Restaurants.findAll()
  .then(function (restaurantData) {
        res.send(restaurantData);
      });
});


module.exports = router;
