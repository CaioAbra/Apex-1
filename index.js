// document.addEventListener("DOMContentLoaded", function () {
//   const togglePasswordVisibility = document.querySelector(
//     "#togglePasswordVisibility"
//   );
//   const userPasswordField = document.querySelector("#userPassword");

//   const loginContainer = document.querySelector("#loginContainer");

//   const registerButton = document.querySelector("#registerButton");
//   const registerContainer = document.querySelector("#registerContainer");

//   togglePasswordVisibility.addEventListener("click", function () {
//     const passwordFieldType =
//       userPasswordField.getAttribute("type") === "password"
//         ? "text"
//         : "password";
//     userPasswordField.setAttribute("type", passwordFieldType);

//     this.classList.toggle("bi-eye");
//     this.classList.toggle("bi-eye-slash");
//   });

//   registerButton.addEventListener("click", function () {
//     loginContainer.style.display = "none";
//     registerContainer.style.display = "flex";
//   });
// });

$(document).ready(function () {
  const $togglePasswordVisibility = $("#togglePasswordVisibility");
  const $userPasswordField = $("#userPassword");
  const $loginContainer = $("#loginContainer");
  const $registerButton = $("#registerButton");
  const $startSession = $("#startSession");
  const $registerContainer = $("#registerContainer");

  $togglePasswordVisibility.on("click", function () {
    const passwordFieldType = $userPasswordField.attr("type") === "password" ? "text" : "password";
    $userPasswordField.attr("type", passwordFieldType);

    $(this).toggleClass("bi-eye bi-eye-slash");
  });

  $registerButton.on("click", function () {
    $loginContainer.hide();
    $registerContainer.css("display", "flex");
  });

  $startSession.on("click", function () {
    $registerContainer.hide();
    $loginContainer.css("display", "flex");
    // $loginContainer.hide();
    // $registerContainer.css("display", "flex");
  });
});
