(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const valentine = urlParams.get("valentine");
  if (valentine) {
    document.getElementById("valentine").innerText = valentine;
  }
  const message = urlParams.get("message");
  if (message) {
    document.getElementById("message").innerText = message;
  }

  const randomInt = (n) => Math.floor(Math.random() * n);
  document.getElementById("dynamic").innerText = `
    @keyframes spin {
        0% {
          margin-top: 2vh;
          opacity: 0;
        }
        20% {
          opacity:1.0;
          margin-top: 0vh;
          margin-left: 0vw;
          transform: rotate(${randomInt(90)}deg);
        }
        100% {
          opacity: 0.4;
          margin-top: 100vh;
          margin-left: ${randomInt(4)}vw;
          transform: rotate(1080deg); 
        }
      };
    `;
  let numberOfHearts = 45;
  while (numberOfHearts--) {
    var heartDiv = document.createElement("div");
    heartDiv.classList.add("heart");
    heartDiv.style = `animation: spin ${randomInt(14) + 6}s ease-in infinite;
                        top: ${randomInt(40)}vh;
                       left: ${randomInt(100)}vw;
                  font-size: ${randomInt(40) + 20}px;
                      color: ${["#d00", "#e66", "#fcc"][randomInt(3)]};`;
    heartDiv.textContent = ["\u2661", "\u2665"][randomInt(2)];
    document.getElementById("falling-hearts").appendChild(heartDiv);
  }
})();


document.addEventListener("DOMContentLoaded", function() {
  // Get reference to the button element
  var button = document.querySelector(".button");
  var secondPopup = document.getElementById("secondPopup");
  var closeButton = secondPopup.querySelector(".close-button");

  // Add click event listener to the button
  button.addEventListener("click", function() {
      // Display second pop-up
      secondPopup.classList.remove("hidden");
      // Blur background
      document.body.classList.add("blurred");
  });

  // Add click event listener to close button
  closeButton.addEventListener("click", function() {
      // Close second pop-up
      secondPopup.classList.add("hidden");
      // Remove blur from background
      document.body.classList.remove("blurred");
  });
});



