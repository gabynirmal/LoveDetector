function calculate() {
  var p1 = document.querySelector("#p1").value;
  var p2 = document.querySelector("#p2").value;
  var percent = document.querySelector("#percent");

  var newPercent;

  if (
    p1.toLowerCase() == "gabriela nirmal" ||
    p1.toLowerCase() == "gabriela" ||
    p1.toLowerCase() == "gaby nirmal" ||
    p1.toLowerCase() == "gaby"
  ) {
    newPercent = 100;
    percent.textContent = `${newPercent}%`;
  } else if (p1.toLowerCase() == "computer" && p2.toLowerCase() == "science") {
    newPercent = 100;
    percent.textContent = `${newPercent}%`;
  } else if (p1 == "" || p2 == "") {
    newPercent = "Person 1 or Person 2 is blank";
    percent.textContent = `${newPercent}`;
  } else {
    newPercent = Math.floor(Math.random() * 100);
    percent.textContent = `${newPercent}%`;
  }
  if (newPercent <= 50) {
    document.querySelector("img").src = "images/broken_heart_love_detector.png";
  } else if (newPercent > 50) {
    document.querySelector("img").src = "images/full_heart_love_detector.png";
  } else {
    document.querySelector("img").src =
      "images/question_heart_love_detector.png";
  }
}

document.querySelector("button").addEventListener("click", calculate);

  

  
