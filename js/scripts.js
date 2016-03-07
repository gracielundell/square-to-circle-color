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


  $(".wrapper").click(function(event) {
    console.log(event.target);
  });

  $(".circle").click(function(event) {
    console.log(event.target);
  });





});
