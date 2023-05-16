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
  const error = document.querySelector("#form-error");

  sumbitButton.addEventListener("click", () => {
    // console.dir(name);
    sumbitButton.setAttribute("disabled", true);

    fetch("http://localhost:4000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        msg: message.value,
        number: number.value,
        email: email.value,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((t) => {
        console.log(t);
        // makes the thank you page visible when submit button is clicked
        thankYouOverlay.classList.remove("invisible");
      })
      .catch((err) => {
        console.error(err);
        // if theres an error, shows an error message above button
        error.classList.remove("invisible");
      })
      // re enables button after info is submitted
      .finally(() => {
        sumbitButton.removeAttribute("disabled");
      });
  });

  // closes the thank you page using the X
  const closeSecButton = document.querySelector("#close-thank");
  closeSecButton.addEventListener("click", () => {
    thankYouOverlay.classList.add("invisible");
  });
});
