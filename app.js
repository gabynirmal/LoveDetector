function calculate() {
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;
    
    var percentage = 0;
    
    if (p1.toLowerCase() == "gabriela nirmal" || p1.toLowerCase() == "gabriela" || p1.toLowerCase() == "gaby nirmal" || p1.toLowerCase() == "gaby") {
      percentage = 100;
      document.getElementById("percent").textContent = `${percentage}%`;
    }
    else if (p1.toLowerCase() == "computer" && p2.toLowerCase() == "science") {
      percentage = 100;
      document.getElementById("percent").textContent = `${percentage}%`;
    }
    else if (p1 == "" || p2 == "") {
      percentage = "Person 1 or Person 2 is blank";
      document.getElementById("percent").textContent = `${percentage}`;
    }
    else {
       percentage = Math.floor(Math.random() * 100);
       document.getElementById("percent").textContent = `${percentage}%`;
    }
    if (percentage <= 50) {
      document.getElementById("heart").src = "images/broken_heart_love_detector.png";
    }
    else if (percentage > 50) {
        document.getElementById("heart").src = "images/full_heart_love_detector.png";
    }
    else {
        document.getElementById("heart").src = "images/question_heart_love_detector.png";
    }
  }
  
  document.getElementById("button").addEventListener("click", calculate);
  
  