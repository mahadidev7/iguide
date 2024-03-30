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

// =================== help page javascript codes is here =========================

let accordionBodyGroup = document.querySelectorAll(
  ".AccordionForHelp .accordionBodyGroup"
);
let accordionItemHelp = document.querySelectorAll(
  ".AccordionForHelp .accordionItem"
);
let downIcon = document.querySelectorAll(
  ".AccordionForHelp .accordionItem .downIcon"
);
let searchButtonStepOne = document.querySelectorAll(".searchButtonStepOne");
let stepOneHelp = document.querySelectorAll(".stepOneHelp");
let stepTwoHelp = document.querySelectorAll(".stepTwoHelp");
let stepThreeHelp = document.querySelectorAll(".stepThreeHelp");

let allInput = document.querySelectorAll(".input");
let label = document.querySelectorAll("label");

let helpFormValue = {
  message: "",
  email: "",
  firstName: "",
  lastName: "",
};

// remove all active class of help - the accordion
function removeActiveAccordionHelp() {
  for (const [key, value] of Object.entries(accordionBodyGroup)) {
    value.classList.remove("active");
  }
  for (const [key, value] of Object.entries(downIcon)) {
    value.style.transform = "rotate(0deg)";
  }
}

// function accordionToggleItemHelp() {
//   [...accordionItemHelp]?.map((item, index) => (
//     item.addEventListener("click", function () {
//       if(accordionBodyGroup[index].classList.contains("active")){
//         removeActiveAccordionHelp()
//         return
//       }
//       removeActiveAccordionHelp();
//       accordionBodyGroup[index].classList.add("active");
//       downIcon[index].style.transform = "rotate(180deg)";
//     })
//   ));
// }

// function accordionToggleItemHelp(itemNumber) {
//   [...accordionItemHelp]?.map((item, index) => {
//     if (item?.classList.contains(itemNumber)) {

//       item.addEventListener("click", function () {
//         console.log(item);
//       })

//       return
//     }
//     console.log("00");
//     return;
//   });
// }

accordionItemHelp[0]?.addEventListener("click", function () {
  if (accordionBodyGroup[0].classList.contains("active")) {
    removeActiveAccordionHelp();
    return;
  }
  removeActiveAccordionHelp();
  accordionBodyGroup[0].classList.add("active");
  downIcon[0].style.transform = "rotate(180deg)";
});
accordionItemHelp[1]?.addEventListener("click", function () {
  if (accordionBodyGroup[1].classList.contains("active")) {
    removeActiveAccordionHelp();
    return;
  }
  removeActiveAccordionHelp();
  accordionBodyGroup[1].classList.add("active");
  downIcon[1].style.transform = "rotate(180deg)";
});
accordionItemHelp[2]?.addEventListener("click", function () {
  if (accordionBodyGroup[2].classList.contains("active")) {
    removeActiveAccordionHelp();
    return;
  }
  removeActiveAccordionHelp();
  accordionBodyGroup[2].classList.add("active");
  downIcon[2].style.transform = "rotate(180deg)";
});

searchButtonStepOne[0]?.addEventListener("click", function () {
  stepOneHelp[0].style.display = "none";
  stepTwoHelp[0].style.display = "block";
});

// text box control handler - input 01
allInput[0]?.addEventListener("input", (event) => {
  helpFormValue["message"] = event.target.value;
  allInput[0].style.border = "1px solid #ddd";
  document.querySelectorAll(".errorMessage_messageHelp")[0].innerHTML = ` `;
});

// text box with label controller - label 01
allInput[0]?.addEventListener("click", function () {
  label[0].style.top = "0";
  label[0].style.color = "#049f8d";
  label[0].style.background = "#fff";
});

// text box control handler - input 02
allInput[1]?.addEventListener("input", (event) => {
  helpFormValue["email"] = event.target.value;
  allInput[1].style.border = "1px solid #ddd";
  document.querySelectorAll(".errorMessage_emailHelp")[0].innerHTML = ` `;
});

// text box with label controller - label 02
allInput[1]?.addEventListener("click", function () {
  label[1].style.top = "0";
  label[1].style.color = "#049f8d";
  label[1].style.background = "#fff";
});

// text box control handler - input 03
allInput[2]?.addEventListener("input", (event) => {
  helpFormValue["firstName"] = event.target.value;
  allInput[2].style.border = "1px solid #ddd";
  document.querySelectorAll(".errorMessage_firstNameHelp")[0].innerHTML = ` `;
});

// text box with label controller - label 03
allInput[2]?.addEventListener("click", function () {
  label[2].style.top = "0";
  label[2].style.color = "#049f8d";
  label[2].style.background = "#fff";
});

// text box control handler - input 04
allInput[3]?.addEventListener("input", (event) => {
  helpFormValue["lastName"] = event.target.value;
  allInput[3].style.border = "1px solid #ddd";
  document.querySelectorAll(".errorMessage_lastNameHelp")[0].innerHTML = ` `;
});

// text box with label controller - label 01
allInput[3]?.addEventListener("click", function () {
  label[3].style.top = "0";
  label[3].style.color = "#049f8d";
  label[3].style.background = "#fff";
});

function helpFormHandler() {
  // success
  if (
    !!helpFormValue?.message &&
    !!helpFormValue?.email &&
    !!helpFormValue?.firstName &&
    !!helpFormValue?.lastName
  ) {
    const form = document.forms["helpForm"];

    const message = form["message"].value;
    const email = form["email"].value;
    const firstName = form["firstName"].value;
    const lastName = form["lastName"].value;

    helpFormValue["message"] = message;
    helpFormValue["email"] = email;
    helpFormValue["firstName"] = firstName;
    helpFormValue["lastName"] = lastName;

    stepOneHelp[0].style.display = "none";
    stepTwoHelp[0].style.display = "none";
    stepThreeHelp[0].style.display = "block";

    return;
  }

  // error message
  if (!!!helpFormValue?.message) {
    document.querySelectorAll(
      ".input.PleaseDescribeYourRequest"
    )[0].style.border = "1px solid #b00020";
    label[0].style.color = "#b00020";
    label[0].style.top = "25px";
    document.querySelectorAll(
      ".errorMessage_messageHelp"
    )[0].innerHTML = `<p class="error">this input box is required.</p>`;
  }

  if (!!!helpFormValue?.email) {
    allInput[1].style.border = "1px solid #b00020";
    label[1].style.color = "#b00020";
    label[1].style.top = "25px";
    document.querySelectorAll(
      ".errorMessage_emailHelp"
    )[0].innerHTML = `<p class="error">Email is required.</p>`;
  }

  if (!!!helpFormValue?.firstName) {
    allInput[2].style.border = "1px solid #b00020";
    label[2].style.color = "#b00020";
    label[2].style.top = "25px";
    document.querySelectorAll(
      ".errorMessage_firstNameHelp"
    )[0].innerHTML = `<p class="error">First Name is required.</p>`;
  }

  if (!!!helpFormValue?.lastName) {
    allInput[3].style.border = "1px solid #b00020";
    label[3].style.color = "#b00020";
    label[3].style.top = "25px";
    document.querySelectorAll(
      ".errorMessage_lastNameHelp"
    )[0].innerHTML = `<p class="error">Last Name is required.</p>`;
  }

  return;
}
