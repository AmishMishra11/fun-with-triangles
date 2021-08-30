var sidea = document.querySelector("#side-1");
var sideb = document.querySelector("#side-2");
var sidec = document.querySelector("#side-3");
var areaCheck = document.querySelector("#area-button");
var messagearea = document.querySelector("#area-message");

function calculateArea() {
  var sida = Number(sidea.value);
  var sidb = Number(sideb.value);
  var sidc = Number(sidec.value);
  if (sida && sidb && sidc) {
    if (sida >= 0 && sidb >= 0 && sidc >= 0) {
      var s = (sida + sidb + sidc) / 2;
      var area = s * (s - sida) * (s - sidb) * (s - sidc);
      area = Math.sqrt(area);
      messagearea.innerText =
        "Area of a triangle using heron's formula is " + area;
    } else {
      messagearea.innerText = "Sides should be positive.";
    }
  } else {
    messagearea.innerText = "Please enter a value.";
  }
}

areaCheck.addEventListener("click", calculateArea);
