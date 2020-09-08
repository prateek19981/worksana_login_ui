let eyeIcon = document.querySelector("#eye1");

function changePasswordType() {
  let passwordInput = document.querySelector("#mypassword");
  let passWordType = passwordInput.getAttribute("type");
  if (passWordType === "password") {
    passwordInput.setAttribute("type", "text");
  } else {
    passwordInput.setAttribute("type", "password");
  }
}

eyeIcon.addEventListener("click", changePasswordType);
