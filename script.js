const message =
  "Thank you for your message, the royal family will get back to you";

document
.getElementById("contact1")
.addEventListener("submit", function(event) {
  event.preventDefault();
  alert(message)
}

)