// business  logic
function Place(place, city, time, landmark, info) {
  this.place = place;
  this.city = city;
  this.time = time;
  this.landmark = landmark;
  this.info = info;

}
Place.prototype.detailed = function() {
  return this.place + " , " + this.city;
}

// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#place").val();
    var inputtedCity = $("input#city-name").val();
    var inputtedTime = $("input#time-visited").val();
    var inputtedLandmark = $("input#landmark").val();
    var inputtedInfo = $("input#info").val();


    var newPlace = new Place(inputtedPlace, inputtedCity, inputtedTime, inputtedLandmark, inputtedInfo);

    $("ul#places").append("<li><span class='visit'>" + newPlace.detailed() + "</span></li>");

    $("input#place").val("");
    $("input#city-name").val("");
    $("input#time-visited").val("");
    $("input#landmark").val("");
    $("input#info").val("");

    $(".visit").last().click(function() {
      $("#show-adventure").show();
      $(".cont").show();
      $("#show-adventure h2").text(newPlace.place);
      $(".place").text(newPlace.Place);
      $(".city").text(newPlace.City);
      $(".time").text(newPlace.Time);
      $(".landmark").text(newPlace.Landmark);
      $(".info").text(newPlace.Info);
    });
  });
});
