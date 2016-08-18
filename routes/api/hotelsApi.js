var router = require('express').Router();
var Hotel = require('../../models/hotel.js');


router.get('/', function (req, res) {
  Hotel.findAll()
  .then(function (hotelData) {
        res.send(hotelData);
      });
});

module.exports = router;
