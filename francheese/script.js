document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const status = document.getElementById("formStatus");

  if (name && email && message) {
    status.textContent = "Thanks for reaching out! We'll contact you soon.";
    this.reset();
  } else {
    status.textContent = "Please complete all fields before submitting.";
  }
});
