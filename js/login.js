document.getElementById("userId").addEventListener("focusout", validateUserId);
document.getElementById("password").addEventListener("focusout", validatePassword);

function validateUserId() {
  const userId = document.getElementById("userId").value;
  const errorUser = document.getElementById("UserError");

  // Clear any previous error messages
  errorUser.innerHTML = "";

  if (userId.trim() === "") {
    errorUser.innerHTML = "Please enter a User ID.";
  } else if (!/^\d+$/.test(userId)) {
    errorUser.innerHTML = "User ID must contain only numbers.";
  }
}

function validatePassword() {
  const password = document.getElementById("password").value;
  const errorPass = document.getElementById("PassError");

  // Clear any previous error messages
  errorPass.innerHTML = "";

  if (password.trim() === "") {
    errorPass.innerHTML = "Please enter a password.";
  }
}

function validateForm() {
  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;

  // Validate the input fields
  validateUserId();
  validatePassword();

  // Check if there are any error messages
  const errorUser = document.getElementById("UserError").innerHTML;
  const errorPass = document.getElementById("PassError").innerHTML;

  if (errorUser === "" && errorPass === "") {
    return true;
  } else {
    return false;
  }
}
