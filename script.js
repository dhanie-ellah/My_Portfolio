const submitBtns = document.querySelectorAll(".submit");
const inputs = document.querySelectorAll(".input");
const modal = document.querySelectorAll(".modal");
const modalBtn = document.querySelectorAll(".modal-btn");
const forms = document.querySelectorAll(".form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
      if (input.value == "") {
        input.style.borderColor = "red";
      } else {
        modal.forEach((modal) => {
          modal.style.display = "flex";
        });
      }
      modalBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
          modal.forEach((modal) => {
            modal.style.display = "none";
          });
        });
      });
    });

    // for (let i = 0; i < inputs.length; i++) {
    //      if (inputs[i].value = "") {
    //           inputs[i].style.border = "1px solid red";
    //      } else {
    //           modal.forEach((modal) => {
    //                modal.style.display = "flex";
    //           });
    //           modalBtn.forEach((btn) => {
    //                btn.addEventListener("click", () => {
    //                modal.forEach((modal) => {
    //                modal.style.display = "none";
    //                });
    //                });
    //           });
    //      }
    // }
  });
});
