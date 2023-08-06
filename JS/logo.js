let logo = document.querySelectorAll(".logo");
let login = document.querySelectorAll(".login");

for (let i = 0; i < logo.length; i++) {
  logo[i].style.cursor = "pointer";
  logo[i].onclick = function () {
    window.location.assign("../index.html");
  };
}
for (let i = 0; i < login.length; i++) {
  login[i].onclick = function () {
    window.location.assign("../login.html");
  };
}

let joinUs = document.querySelectorAll(".join-us");

for (let i = 0; i < joinUs.length; i++) {
  joinUs[i].onclick = function () {
    window.location.assign("../myaccount.html");
  };
}

let signUp = document.querySelectorAll(".sign-up");

for (let i = 0; i < signUp.length; i++) {
  signUp[i].onclick = function () {
    window.location.assign("../signup.html");
  };
}


