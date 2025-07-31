document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (name && email && password.length >= 6) {
    document.getElementById("successMsg").textContent = `🎉 Thanks for signing up, ${name}! Check your email for surprises.`;
    this.reset();
  } else {
    alert("Please fill in all fields correctly. Password should be at least 6 characters.");
  }
});
