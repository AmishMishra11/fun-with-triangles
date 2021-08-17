var height = document.querySelector("#height-input");
var base = document.querySelector("#base-input");
var buttonCalculate = document.querySelector("#calculate-button");
var messageHypo = document.querySelector("#hypotenuse-message");

function calculateHypo() {
  var h = Number(height.value);
  var b = Number(base.value);
  if (h && b) {
    if (h >= 0 && b >= 0) {
      var hypo = 0;
      hypo = b * b + h * h;
      hypo = Math.sqrt(hypo);
      messageHypo.innerText = "The length of hypotenuse is " + hypo;
    } else {
      messageHypo.innerText = "Height and Base should be posotive.";
    }
  } else {
    messageHypo.innerText = "Please enter a value.";
  }
}

buttonCalculate.addEventListener("click", calculateHypo);
