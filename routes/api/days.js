var express = require('express');
var router = express.Router();
var Day = require('../../models/day');
console.log(Day);

router.get('/:id/:type', function (req, res) {});
router.post('/:id/:type', function (req, res) {});

router.get('/:id', function (req, res, next) {
  var dayNum = req.params.id;
  Day.findOne({
    where: {
      number: dayNum
    }
  })
    .then(function (dayArray) {
      res.send(dayArray);
    })
    .catch(next);
});

router.delete('/:id', function (req, res) {});

router.post('/', function (req, res, next) {
  Day.findAll({})
  .then(function(days) {
    Day.create({ number: days.length + 1})
    .then(function(day) {
      res.send(day);
    })
    .catch(next);
  })
});

router.get('/', function (req, res) {
  res.send("hello, world");
});

module.exports = router;
