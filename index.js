document.addEventListener("DOMContentLoaded", function () {
  const togglePasswordVisibility = document.querySelector(
    "#togglePasswordVisibility"
  );
  const userPasswordField = document.querySelector("#userPassword");

  const loginContainer = document.querySelector("#loginContainer");

  const registerButton = document.querySelector("#registerButton");
  const registerContainer = document.querySelector("#registerContainer");

  togglePasswordVisibility.addEventListener("click", function () {
    const passwordFieldType =
      userPasswordField.getAttribute("type") === "password"
        ? "text"
        : "password";
    userPasswordField.setAttribute("type", passwordFieldType);

    this.classList.toggle("bi-eye");
    this.classList.toggle("bi-eye-slash");
  });

  registerButton.addEventListener("click", function () {
    loginContainer.style.display = "none";
    registerContainer.style.display = "flex";
  });
});
