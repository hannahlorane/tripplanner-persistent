var router = require('express').Router();
var Activity = require('../../models/activity.js');


router.get('/', function (req, res) {
  Activity.findAll()
  .then(function (activityData) {
        res.send(activityData);
      });
});

module.exports = router;
