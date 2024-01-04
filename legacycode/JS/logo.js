let logo = document.querySelectorAll(".logo");
let login = document.querySelectorAll(".login");

for (let i = 0; i < logo.length; i++) {
  logo[i].style.cursor = "pointer";
  logo[i].onclick = function () {
    window.location.href =
      "https://mohamed-gp.github.io/Internal_Hacathon/index.html";
  };
}
// for (let i = 0; i < login.length; i++) {
//   login[i].onclick = function () {
//     window.location.assign(
//       "https://mohamed-gp.github.io/Internal_Hacathon/login.html"
//     );
//   };
// }

let joinUs = document.querySelectorAll(".join-us");

for (let i = 0; i < joinUs.length; i++) {
  joinUs[i].onclick = function () {
    window.location.assign(
      "https://mohamed-gp.github.io/Internal_Hacathon/myaccount.html"
    );
  };
}

let signUp = document.querySelectorAll(".sign-up");

for (let i = 0; i < signUp.length; i++) {
  signUp[i].onclick = function () {
    window.location.assign(
      "https://mohamed-gp.github.io/Internal_Hacathon/signup.html"
    );
  };
}
