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


// Executa o código assim que o documento estiver pronto (quando a página for carregada completamente)
$(document).ready(function () {
  // Seleciona o botão que alterna a visibilidade da senha e guarda em uma variável
  const $togglePasswordVisibility = $("#togglePasswordVisibility");

  // Seleciona o campo de senha e guarda em uma variável
  const $userPasswordField = $("#userPassword");

  // Seleciona o container de login e guarda em uma variável
  const $loginContainer = $("#loginContainer");

  // Seleciona o botão de registrar (que abre o formulário de registro) e guarda em uma variável
  const $registerButton = $("#registerButton");

  // Seleciona o botão de "Iniciar Sessão" (que volta para o formulário de login) e guarda em uma variável
  const $startSession = $("#startSession");

  // Seleciona o container de registro e guarda em uma variável
  const $registerContainer = $("#registerContainer");

  // Adiciona um evento de clique ao botão de alternar visibilidade da senha
  $togglePasswordVisibility.on("click", function () {
    // Verifica o tipo atual do campo de senha
    // Se for "password", altera para "text" (para mostrar a senha)
    // Se for "text", altera para "password" (para esconder a senha)
    const passwordFieldType = $userPasswordField.attr("type") === "password" ? "text" : "password";
    $userPasswordField.attr("type", passwordFieldType);

    // Alterna as classes de ícone para mudar entre olho aberto (visível) e olho fechado (oculto)
    $(this).toggleClass("bi-eye bi-eye-slash");
  });

  // Adiciona um evento de clique ao botão de registrar
  $registerButton.on("click", function () {
    // Esconde o container de login
    $loginContainer.hide();
    // Exibe o container de registro, mudando o display para "flex"
    $registerContainer.css("display", "flex");
  });

  // Adiciona um evento de clique ao botão de "Iniciar Sessão"
  $startSession.on("click", function () {
    // Esconde o container de registro
    $registerContainer.hide();
    // Exibe o container de login, mudando o display para "flex"
    $loginContainer.css("display", "flex");
  });
});
