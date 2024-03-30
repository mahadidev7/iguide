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

// =================== javascript codes is here of help page =========================

let accordionHeads = document.querySelectorAll(".accordionHeader");
let searchButtonStepOne = document.querySelectorAll(".searchButtonStepOne");
let stepOneHelp = document.querySelectorAll(".stepOneHelp");
let stepTwoHelp = document.querySelectorAll(".stepTwoHelp");
let stepThreeHelp = document.querySelectorAll(".stepThreeHelp");
let input_groups = document.querySelectorAll(".input_group");

// store form elements values of help page
let helpFormValue = {
  message: "",
  email: "",
  firstName: "",
  lastName: "",
};

// according function of help page
accordionHeads.forEach((accordionHeadItem) => {
  let accordionTitle = accordionHeadItem.parentElement;
  let bodyDiv = accordionTitle.querySelector(".accordionBodyGroup");
  let icon = accordionTitle.querySelector(".downIcon");

  accordionHeadItem?.addEventListener("click", () => {
    if (bodyDiv.classList.contains("active")) {
      bodyDiv.classList.remove("active");
      icon.style.transform = "rotate(0deg)";
    } else {
      // remove all active class
      const accordionTitlesWithIsOpen = document.querySelectorAll(".active");
      accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
        accordionTitleWithIsOpen.classList.remove("active");
      });
      // remove all active icon class
      const accordionTitleDownIcons = document.querySelectorAll(".downIcon");
      accordionTitleDownIcons.forEach((icon) => {
        icon.style.transform = "rotate(0deg)";
      });
      // add active class and add active icon class
      bodyDiv.classList.add("active");
      icon.style.transform = "rotate(180deg)";
    }
  });
});

// click the GO button then active STEP-2
searchButtonStepOne[0]?.addEventListener("click", function () {
  stepOneHelp[0].style.display = "none";
  stepTwoHelp[0].style.display = "block";
});

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
    if (!!helpFormValue[InputBox?.getAttribute("name")]) {
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
    helpFormValue[InputBox?.getAttribute("name")] = value;

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

// form submit handler of step 2 of help page
function helpFormHandler() {
  // success
  if (
    !!helpFormValue?.message &&
    !!helpFormValue?.email &&
    !!helpFormValue?.firstName &&
    !!helpFormValue?.lastName
  ) {
    const form = document.forms["helpForm"];

    helpFormValue["message"] = form["message"].value;
    helpFormValue["email"] = form["email"].value;
    helpFormValue["firstName"] = form["firstName"].value;
    helpFormValue["lastName"] = form["lastName"].value;

    stepOneHelp[0].style.display = "none";
    stepTwoHelp[0].style.display = "none";
    stepThreeHelp[0].style.display = "block";

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
