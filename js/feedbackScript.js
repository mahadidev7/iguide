let mobileMenu = document.querySelectorAll(".mobileMenu")[0];
let closeMenu = document.querySelectorAll(".closeMenu");
// menu open handler
function openMenuHandler() {
  mobileMenu.style.display = "block";
}
// menu close handler
function closeMenuHandler() {
  mobileMenu.style.display = "none";
}

// =================== Feed-back page javascript codes is here =========================

let input_groups = document.querySelectorAll(".input_group");

let stepOneFeedback = document.querySelectorAll(".stepOneFeedback");
let stepTwoFeedback = document.querySelectorAll(".stepTwoFeedback");

let FeedbackFormFormValue = {
  message: "",
  email: "",
  firstName: "",
  lastName: "",
};

// input box validation with focus & blur & input value change
input_groups?.forEach((element) => {
  let InputBox = element.querySelector(".input");
  let labelTag = element.querySelector("label");
  let errorDiv = element.querySelector(".errorDiv");

  InputBox?.addEventListener("focus", function () {
    labelTag.style.top = "0";
    labelTag.style.color = "#049f8d";
    labelTag.style.background = "#fff";
    return;
  });

  InputBox?.addEventListener("blur", function (e) {
    if (!!FeedbackFormFormValue[InputBox?.getAttribute("name")]) {
      labelTag.style.top = "0";
      labelTag.style.color = "#049f8d";
      labelTag.style.background = "#fff";
      errorDiv.innerHTML = ``;
    } else {
      InputBox.style.border = "1px solid #b00020";
      labelTag.style.color = "#b00020";
      labelTag.style.top = "25px";

      errorDiv.innerHTML = `<p class="error">${InputBox?.getAttribute(
        "errorMessage"
      )}</p>`;
    }
  });

  // validation when input box is change text
  InputBox?.addEventListener("input", function (e) {
    let value = e.target.value;
    FeedbackFormFormValue[InputBox?.getAttribute("name")] = value;

    if (!!value) {
      errorDiv.innerHTML = ``;
      InputBox.style.border = "1px solid #ddd";
    } else {
      InputBox.style.border = "1px solid #b00020";
      errorDiv.innerHTML = `<p class="error">${InputBox?.getAttribute(
        "errorMessage"
      )}</p>`;
    }
  });
});

function feedbackFormHandler() {
  // success
  if (
    !!FeedbackFormFormValue?.message &&
    !!FeedbackFormFormValue?.email &&
    !!FeedbackFormFormValue?.firstName &&
    !!FeedbackFormFormValue?.lastName
  ) {
    const form = document.forms["FeedbackForm"];

    FeedbackFormFormValue["message"] = form["message"].value;
    FeedbackFormFormValue["email"] = form["email"].value;
    FeedbackFormFormValue["firstName"] = form["firstName"].value;
    FeedbackFormFormValue["lastName"] = form["lastName"].value;

    stepOneFeedback[0].style.display = "none";
    stepTwoFeedback[0].style.display = "block";

    console.log("====FeedbackFormFormValue================================");
    console.log(FeedbackFormFormValue);
    console.log("====================================");
    return;
  }

  // Error
  input_groups?.forEach((element, i) => {
    let InputBox = element.querySelector(".input");
    let labelTag = element.querySelector("label");
    let errorDiv = element.querySelector(".errorDiv");

    if (!!InputBox.value) {
      return;
    } else {
      InputBox.style.border = "1px solid #b00020";
      labelTag.style.color = "#b00020";
      labelTag.style.top = "25px";
      errorDiv.innerHTML = `<p class="error">${InputBox?.getAttribute(
        "errorMessage"
      )}</p>`;
    }
  });

  return;
}
