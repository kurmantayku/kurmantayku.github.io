document.addEventListener('DOMContentLoaded', function() {
  console.log("Bao Bao's Bakery Quest loaded. Ready to collect points!");
  
  // Create a simple button for simulating the scan process
  const earnBtn = document.createElement('button');
  earnBtn.textContent = "Scan & Earn Points";
  earnBtn.style.padding = "10px 20px";
  earnBtn.style.display = "block";
  earnBtn.style.margin = "20px auto";
  
  document.body.appendChild(earnBtn);
  
  earnBtn.addEventListener('click', function() {
    alert("You earned Golden Pastry Points! Keep shopping to level up.");
    // Implement point counter logic here if needed
  });
});