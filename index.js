const popUpSignIn = function () {
    document.querySelector(".form-popup").style.display = "block";
}
const signIn = document.querySelector(".btn-primary");
signIn.addEventListener("click", popUpSignIn);

const closeForm = function () {
    document.querySelector(".form-popup").style.display = "none";
}

window.onclick = function (event) {
  let closed = document.querySelector(".form-popup");;
  if (event.target === closed) {
    closeForm();
  }
}
