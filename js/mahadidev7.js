let accordingBodyContent = document.getElementsByClassName(
  "accordingBodyContent"
);
let accordingItem = document.querySelectorAll(".accordingItem");

let step_one = document.querySelectorAll(".step_one");
let step_two = document.querySelectorAll(".step_two");
let step_three = document.querySelectorAll(".step_three");
let step_four = document.querySelectorAll(".step_four");

let step2a = document.querySelectorAll(".step2a");
let step2b = document.querySelectorAll(".step2b");

let mobileMenu = document.querySelectorAll(".mobileMenu")[0];
let closeMenu = document.querySelectorAll(".closeMenu");

let step_oneItem = document.querySelectorAll(".step_oneItem")[0];
let step_twoItem = document.querySelectorAll(".step_twoItem")[0];
let step_threeItem = document.querySelectorAll(".step_threeItem")[0];
let step_fourItem = document.querySelectorAll(".step_fourItem")[0];

let ActiveSubmit = document.querySelectorAll(".ActiveSubmit")[0];
let inactiveSubmit = document.querySelectorAll(".inactiveSubmit")[0];

let input_groups = document.querySelectorAll(".input_group");

let label = document.querySelectorAll("label");

let allInput = document.querySelectorAll(".input");
let arrayOfInput = [...allInput];

// mobile menu berger code is hare
// menu open handler
function openMenuHandler() {
  mobileMenu.style.display = "block";
}
// menu close handler
function closeMenuHandler() {
  mobileMenu.style.display = "none";
}

// here is according open & close javascript code and form handler functions

// hare is contact page all form value
let contactPageAllFormValues = {
  StartByDescribingYourIssue: "", //Start by describing your issue
  ChooseTheBestDescriptionOfYourIssue: "", // Choose the best description of your issue
  addAdditionalDetailsIfYouLikeOrNot: "", // Add additional details if you like ... or not.
  email: "", // email
  firstName: "", // firstName
  lastName: "", // lastName
};

// all according item close
let removeAllActiveClass = () => {
  for (const [key, value] of Object.entries(accordingItem)) {
    value.classList.remove("active");
  }
};

function removeAllValueInnerText() {
  let resultQuestion = document.querySelectorAll(".resultQuestion");
  let resultAnswer = document.querySelectorAll(".resultAnswer");
  let editGroup = document.querySelectorAll(".editGroup");

  for (let key in resultQuestion) {
    const value = resultQuestion[key];
    value.innerText = "";
  }
  for (let key in resultAnswer) {
    const value = resultAnswer[key];
    value.innerText = "";
  }
  for (let key in editGroup) {
    const value = editGroup[key];
    value.innerText = "";
  }

  contactPageAllFormValues = {};
}

// step 1 form handler
function stepOneHandler() {
  if (!!contactPageAllFormValues?.StartByDescribingYourIssue) {
    const form = document.forms["stepOneForm"];
    contactPageAllFormValues["StartByDescribingYourIssue"] =
      form["StartByDescribingYourIssue"].value;
    removeAllActiveClass();
    accordingItem[1].classList.add("active");
    return;
  }
  let inputTag = accordingItem[0].querySelector(".input");
  let labelTag = accordingItem[0].querySelector("label");
  let errorDiv = accordingItem[0].querySelector(".errorDiv");

  inputTag.style.border = "1px solid #b00020";
  labelTag.style.color = "#b00020";
  labelTag.style.top = "25px";

  errorDiv.innerHTML = `<p class="error">${inputTag?.getAttribute(
    "errorMessage"
  )}</p>`;
  return;
}

// step 2 form handler
// 2a
function step2aHandler(data) {
  contactPageAllFormValues["ChooseTheBestDescriptionOfYourIssue"] = data;
  step2a[0].style.display = "none";
  step2b[0].style.display = "block";

  // document.querySelectorAll(".step_twoHead .resultQuestion")[0].innerText =
  //   "Choose the best description of your issue";
  // document.querySelectorAll(".step_twoHead .resultAnswer")[0].innerText = data;
}
// 2b
function step2bHandler() {
  if (!!contactPageAllFormValues?.addAdditionalDetailsIfYouLikeOrNot) {
    const form = document.forms["step2bForm"];

    contactPageAllFormValues["addAdditionalDetailsIfYouLikeOrNot"] =
      form["addAdditionalDetailsIfYouLikeOrNot"].value;
    removeAllActiveClass();
    accordingItem[2].classList.add("active");
    return;
  }
  let inputTag = accordingItem[1].querySelector(".input");
  let labelTag = accordingItem[1].querySelector("label");
  let errorDiv = accordingItem[1].querySelector(".errorDiv");

  inputTag.style.border = "1px solid #b00020";
  labelTag.style.color = "#b00020";
  label[1].style.top = "25px";
  errorDiv.innerHTML = `<p class="error">${inputTag?.getAttribute(
    "errorMessage"
  )}</p>`;

  return;
}

// step 3 form handler
function stepThreeHandler() {
  if (
    !!contactPageAllFormValues?.email &&
    !!contactPageAllFormValues?.firstName &&
    !!contactPageAllFormValues?.lastName
  ) {
    const form = document.forms["stepThreeForm"];
    const email = form["email"].value;
    const firstName = form["firstName"].value;
    const lastName = form["lastName"].value;
    contactPageAllFormValues["email"] = email;
    contactPageAllFormValues["firstName"] = firstName;
    contactPageAllFormValues["lastName"] = lastName;
    removeAllActiveClass();
    step_four[0].classList.add("active");

    //   document.querySelectorAll(".step_ThreeHead .resultQuestion")[0].innerText =
    //     "Your Contact Details";
    //   document.querySelectorAll(".step_ThreeHead .resultAnswer")[0].innerText =
    //     email + "," + firstName + "," + lastName;

    //   document.querySelectorAll(".step_fourHead .resultQuestion")[0].innerText =
    //     "Success";

    //   document.querySelectorAll(".editGroup")[2].innerHTML = `<div class="edit">
    //   <i class="fa-solid fa-pen-to-square"></i>
    // </div>`;

    document.querySelectorAll(".step_ThreeHead")[0].style.display = "flex";
    document.querySelectorAll(".step_fourHead")[0].style.display = "none";

    document.querySelectorAll(".step_threeItem")[0].style.border =
      "1px solid #ddd";
    document.querySelectorAll(".step_fourItem")[0].style.border =
      "1px solid #1558d6";

    // removeAllValueInnerText();

    console.log("=====contactPageAllFormValues===============================");
    console.log(contactPageAllFormValues);
    console.log("====================================");
    return;
  }

  if (!!!contactPageAllFormValues?.email) {
    allInput[2].style.border = "1px solid #b00020";
    label[2].style.color = "#b00020";
    label[2].style.top = "25px";
    document.querySelectorAll(
      ".errorMessage_email"
    )[0].innerHTML = `<p class="error">Email is required.</p>`;
  }

  if (!!!contactPageAllFormValues?.firstName) {
    allInput[3].style.border = "1px solid #b00020";
    label[3].style.color = "#b00020";
    label[3].style.top = "25px";
    document.querySelectorAll(
      ".errorMessage_firstName"
    )[0].innerHTML = `<p class="error">First Name is required.</p>`;
  }

  if (!!!contactPageAllFormValues?.lastName) {
    allInput[4].style.border = "1px solid #b00020";
    label[4].style.color = "#b00020";
    label[4].style.top = "25px";
    document.querySelectorAll(
      ".errorMessage_lastName"
    )[0].innerHTML = `<p class="error">Last Name is required.</p>`;
  }

  return;
}

// next button is stop/inactive function
window.addEventListener("load", function () {
  if (inactiveSubmit && ActiveSubmit) {
    inactiveSubmit.style.display = "none";
    ActiveSubmit.style.display = "block";
    return;
  }
  return;
});

// here is text box style of input field

// // 1 input box
// allInput[0]?.addEventListener("input", (event) => {
//   contactPageAllFormValues["StartByDescribingYourIssue"] = event.target.value;
//   allInput[0].style.border = "1px solid #ddd";
//   document.querySelectorAll(
//     ".errorMessage_StartByDescribingYourIssue"
//   )[0].innerHTML = ` `;
// });

// allInput[0]?.addEventListener("click", function () {
//   label[0].style.top = "0";
//   label[0].style.color = "#049f8d";
//   label[0].style.background = "#fff";
// });

// // 2 input box
// allInput[1]?.addEventListener("input", (event) => {
//   contactPageAllFormValues["addAdditionalDetailsIfYouLikeOrNot"] =
//     event.target.value;
//   allInput[1].style.border = "1px solid #ddd";
//   document.querySelectorAll(
//     ".errorMessage_addAdditionalDetailsIfYouLikeOrNot"
//   )[0].innerHTML = ` `;
// });

// allInput[1]?.addEventListener("click", function () {
//   label[1].style.top = "0";
//   label[1].style.color = "#049f8d";
//   label[1].style.background = "#fff";
// });

// // 3 input box
// allInput[2]?.addEventListener("input", (event) => {
//   contactPageAllFormValues["email"] = event.target.value;
//   allInput[2].style.border = "1px solid #ddd";
//   document.querySelectorAll(".errorMessage_email")[0].innerHTML = ` `;
// });

// allInput[2]?.addEventListener("click", function () {
//   label[2].style.top = "0";
//   label[2].style.color = "#049f8d";
//   label[2].style.background = "#fff";
// });

// // 4 input box
// allInput[3]?.addEventListener("input", (event) => {
//   contactPageAllFormValues["firstName"] = event.target.value;
//   allInput[3].style.border = "1px solid #ddd";
//   document.querySelectorAll(".errorMessage_firstName")[0].innerHTML = ` `;
// });

// allInput[3]?.addEventListener("click", function () {
//   label[3].style.top = "0";
//   label[3].style.color = "#049f8d";
//   label[3].style.background = "#fff";
// });

// // 5 input box
// allInput[4]?.addEventListener("input", (event) => {
//   contactPageAllFormValues["lastName"] = event.target.value;
//   allInput[4].style.border = "1px solid #ddd";
//   document.querySelectorAll(".errorMessage_lastName")[0].innerHTML = ` `;
// });

// allInput[4]?.addEventListener("click", function () {
//   label[4].style.top = "0";
//   label[4].style.color = "#049f8d";
//   label[4].style.background = "#fff";
// });

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
    if (!!contactPageAllFormValues[InputBox?.getAttribute("name")]) {
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
    contactPageAllFormValues[InputBox?.getAttribute("name")] = value;

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
