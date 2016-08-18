var hotels, restaurants, activities;

$.ajax({
  url: '/api/hotels',
  type: "GET",
  dataType: 'json'
}).done(function (json) {
  hotels = json;
});

$.ajax({
  url: '/api/activities',
  type: "GET",
  dataType: 'json'
}).done(function (json) {
  activities = json;
});

$.ajax({
  url: '/api/restaurants',
  type: "GET",
  dataType: 'json'
}).done(function (json) {
  restaurants = json;
});

console.log(hotels);
