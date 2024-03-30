let accordingItem = document.querySelectorAll(".accordingItem");
let step2a = document.querySelectorAll(".step2a");
let step2b = document.querySelectorAll(".step2b");
let mobileMenu = document.querySelectorAll(".mobileMenu")[0];
let closeMenu = document.querySelectorAll(".closeMenu");
let ActiveSubmit = document.querySelectorAll(".ActiveSubmit")[0];
let inactiveSubmit = document.querySelectorAll(".inactiveSubmit")[0];
let input_groups = document.querySelectorAll(".input_group");

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
  labelTag.style.top = "25px";
  errorDiv.innerHTML = `<p class="error">${inputTag?.getAttribute(
    "errorMessage"
  )}</p>`;

  return;
}

// step 3 form handler
function stepThreeHandler() {
  let formTag = document.forms["stepThreeForm"];

  if (
    !!contactPageAllFormValues?.email &&
    !!contactPageAllFormValues?.firstName &&
    !!contactPageAllFormValues?.lastName
  ) {
    contactPageAllFormValues["email"] = formTag["email"].value;
    contactPageAllFormValues["firstName"] = formTag["firstName"].value;
    contactPageAllFormValues["lastName"] = formTag["lastName"].value;

    removeAllActiveClass();
    accordingItem[3].classList.add("active");

    console.log("=====contactPageAllFormValues===============================");
    console.log(contactPageAllFormValues);

    return;
  }

  let input_groups = formTag.querySelectorAll(".input_group");

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

    return;
  });

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
