$(document).ready(function () {
  var array = [];
  var heightWindow = $(window).height();
  var widthWindow = $(window).width();

  for (var i = 0; i < 40; i++) {
    array.push({
      top: Math.floor(Math.random() * heightWindow),
      left: Math.floor(Math.random() * widthWindow),
      id: i,
    });
  }
  array.forEach(function (value) {
    var newEllipse = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "ellipse"
    );
    newEllipse.setAttribute("class", "ellipse");
    newEllipse.setAttribute("id", "ellipse_" + value.id);
    newEllipse.setAttribute("cx", value.left);
    newEllipse.setAttribute("cy", value.top);
    newEllipse.setAttribute("rx", 5);
    newEllipse.setAttribute("ry", 5);

    $("#svg").append(newEllipse);
  });

  $(window).mousemove(function (event) {});
});
