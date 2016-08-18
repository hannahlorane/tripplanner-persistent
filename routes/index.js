var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var hotelRouter = require('./api/hotelsApi.js');
var activityRouter = require('./api/activitiesApi.js');
var restaurantRouter = require('./api/restaurantsApi.js');
var dayRouter = require('./api/days.js');

router.use('/api/restaurants', restaurantRouter);
router.use('/api/activities', activityRouter);
router.use('/api/hotels', hotelRouter);
router.use('/api/days', dayRouter);

router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      templateHotels: dbHotels,
      templateRestaurants: dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
});

module.exports = router;
