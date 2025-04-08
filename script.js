document.addEventListener('DOMContentLoaded', function () {
  let points = 0;

  const stages = [
    { min: 0, title: "Baby Chick", img: "https://cdn-icons-png.flaticon.com/512/616/616408.png" },
    { min: 50, title: "Bao Bao Dumpling", img: "https://cdn-icons-png.flaticon.com/512/9711/9711938.png" },
    { min: 150, title: "Junior Chef", img: "https://cdn-icons-png.flaticon.com/512/135/135620.png" },
    { min: 300, title: "Golden Baker", img: "https://cdn-icons-png.flaticon.com/512/706/706164.png" },
    { min: 500, title: "Master Bao Bao", img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" }
  ];

  const earnBtn = document.getElementById('earn-btn');
  const simulateQRBtn = document.getElementById('simulate-qr-btn');
  const devBtn = document.getElementById('dev-btn');
  const pointsDisplay = document.getElementById('points-display');
  const characterImg = document.getElementById('character-img');
  const characterTitle = document.getElementById('character-title');

  function updateCharacter() {
    for (let i = stages.length - 1; i >= 0; i--) {
      if (points >= stages[i].min) {
        characterImg.src = stages[i].img;
        characterTitle.textContent = "Stage: " + stages[i].title;
        break;
      }
    }
    pointsDisplay.textContent = "Points: " + points;
  }

  function addPoints(value) {
    points += value;
    updateCharacter();
  }

  earnBtn.addEventListener('click', function () {
    // Simulated QR scanning: prompt for gesture input.
    let gesture = prompt("Simulated QR Scan: Enter gesture (e.g., 'thumbs up')");
    if (gesture && (gesture.toLowerCase() === "thumbs up" || gesture === "👍")) {
      addPoints(10);
      alert("Gesture recognized! You earned 10 Golden Pastry Points!");
    } else {
      alert("Gesture not recognized. No points awarded.");
    }
  });

  simulateQRBtn.addEventListener('click', function() {
    // Alternative simulation for QR scan gesture.
    let gesture = prompt("Simulate QR Gesture: Type 'thumbs up' to earn points.");
    if (gesture && (gesture.toLowerCase() === "thumbs up" || gesture === "👍")) {
      addPoints(10);
      alert("Thumbs up detected! 10 points awarded.");
    } else {
      alert("No valid gesture detected.");
    }
  });

  devBtn.addEventListener('click', function() {
    addPoints(50);
    alert("Dev: 50 points added.");
  });

  updateCharacter();
});