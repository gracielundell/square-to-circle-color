var squareColor = "red";

var circleArray = [
  {
    color: "darkkhaki"
  },
  {
    color: "aqua"
  },
  {
    color: "green"
  }
];

function createCircleDiv(circle) {
  return "<div class='circle' style='background:" + circle.color + "'></div>"
};

$(document).ready(function() {
  circleArray.forEach(function(circle) {
    var circleDiv = createCircleDiv(circle);
    $(".circles").append(circleDiv);
  });

// set orig square color
  $(".wrapper").click(function(event) {
    console.log(event.target);
    $(event.target).css("background", squareColor);
  });


// set square color to circle color
  $(".circle").click(function(event) {
    console.log(event.target);
    squareColor = $(event.target).css("background");

  });

});
