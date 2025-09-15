const adviceNum = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");
const btn = document.getElementById("btn");

function fetchAdvice() {
  
  const url = `https://api.adviceslip.com/advice?t=${Date.now()}`;
  
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Log for debugging
      if (data.slip && data.slip.id && data.slip.advice) {
        adviceNum.innerText = `ADVICE #${data.slip.id}`;
        adviceText.innerText = `"${data.slip.advice}"`;
      
      } else {
        throw new Error("Invalid API response format");
      }
    })
    .catch((error) => {
      console.error("Error fetching advice:", error);
      adviceText.innerText = "Failed to load advice. Please try again.";
      adviceNum.innerText = "";
    });
}

// Fetch advice on initial load 
document.addEventListener("DOMContentLoaded", fetchAdvice);
btn.addEventListener("click", fetchAdvice);
