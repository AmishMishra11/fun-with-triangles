var anglea = document.querySelector("#angle-1");
var angleb = document.querySelector("#angle-2");
var anglec = document.querySelector("#angle-3");
var buttonCheck = document.querySelector("#check-button");
var message = document.querySelector("#triangle-message");

function calculateAngle() {
  var anga = Number(anglea.value);
  var angb = Number(angleb.value);
  var angc = Number(anglec.value);
  if (anga && angb && angc) {
    if (anga >= 0 && angb >= 0 && angc >= 0) {
      if (anga + angb + angc === 180) {
        message.innerText = "Yes, This is a Triangle";
      } else {
        message.innerText = "No, It is not a Triangle.";
      }
    } else {
      message.innerText = "Angles should be positive.";
    }
  } else {
    message.innerText = "Please enter a value.";
  }
}

buttonCheck.addEventListener("click", calculateAngle);
