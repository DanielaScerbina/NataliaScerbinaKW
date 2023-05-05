document.addEventListener("DOMContentLoaded", () => {
  //when click hamburger menu button, takes you to menu page, then click X to exit menu
  const menuOverlay = document.querySelector(".menu-overlay");
  const hamburgerMenu = document.querySelector("#menu");
  hamburgerMenu.addEventListener("click", () => {
    menuOverlay.classList.remove("invisible");
  });

  const closeButton = document.querySelector("#close");
  closeButton.addEventListener("click", () => {
    menuOverlay.classList.add("invisible");
  });

  //when click submit, takes to thankyou page, then click X to exit thank you page
  const thankYouOverlay = document.querySelector(".thankyou");
  const sumbitButton = document.querySelector("#submit");
  const name = document.querySelector("#name");
  const message = document.querySelector("#message");
  const number = document.querySelector("#phone-number");
  const email = document.querySelector("#email");
  sumbitButton.addEventListener("click", () => {
    // thankYouOverlay.classList.remove("invisible")
    // console.dir(name);
    // console.log({
    //   name: name.value,
    //   msg: message.value,
    //   number: number.value,
    //   email: email.value,
    // });

    fetch("http://localhost:4000")
      .then((response) => {
        return response
          .json()
      })
      .then((t) => {
        console.log("reeeeee", t);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const closeSecButton = document.querySelector("#close-thank");
  closeSecButton.addEventListener("click", () => {
    thankYouOverlay.classList.add("invisible");
  });
});
