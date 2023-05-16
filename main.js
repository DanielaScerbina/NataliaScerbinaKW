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
  const submitButton = document.querySelector("#submit");
  const name = document.querySelector("#name");
  const message = document.querySelector("#message");
  const number = document.querySelector("#phone-number");
  const email = document.querySelector("#email");
  const error = document.querySelector("#form-error");

  //disables button until text is typed into name & message input areas
  //(the 'required' fields),
  //and checks if there is text in either the phone or email text area,
  //then enables, then disables again when text is deleted.
  const isValid = () => {
    return (
      name.value.length > 0 &&
      message.value.length > 0 &&
      (email.value.length > 0 || number.value.length > 0)
    );
  };
  const inputCheck = () => {
    if (isValid()) {
      submitButton.removeAttribute("disabled");
    } else {
      submitButton.setAttribute("disabled", true);
    }
  };
  inputCheck();
  name.addEventListener("input", () => {
    inputCheck();
  });

  message.addEventListener("input", () => {
    inputCheck();
  });

  number.addEventListener("input", () => {
    inputCheck();
  });

  email.addEventListener("input", () => {
    inputCheck();
  });

  submitButton.addEventListener("click", () => {
    submitButton.setAttribute("disabled", true);

    // replaces word submit on the submit button with an svg of a loading icon
    const loadingImg = document.createElement("img");
    loadingImg.setAttribute("src", "./bubble-loading.svg");
    submitButton.innerHTML = "";
    submitButton.appendChild(loadingImg);

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

      .finally(() => {
        // re enables button after info is submitted
        submitButton.removeAttribute("disabled");
        submitButton.innerHTML = "Submit";
      });
  });

  // closes the thank you page using the X
  const closeSecButton = document.querySelector("#close-thank");
  closeSecButton.addEventListener("click", () => {
    thankYouOverlay.classList.add("invisible");
  });
});
