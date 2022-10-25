const submitBtns = document.querySelectorAll(".submit");
const inputs = document.querySelectorAll(".input");
// const modal = document.querySelectorAll(".modal");
const modalBtn = document.querySelectorAll(".modal-btn");
const forms = document.querySelectorAll(".form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    inputs.forEach((input) => {
      if (input.value == "") {
        input.style.borderColor = "red";
      }
      input.addEventListener('keyup', () => {
        input.style.borderColor = "white"
      })

      modalBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
          window.location = 'index.html'
          });
        });
      });
    });
  });
