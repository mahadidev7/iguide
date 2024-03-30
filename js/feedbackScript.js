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

let allInput = document.querySelectorAll(".input");
let label = document.querySelectorAll("label");

let stepTwoHelp = document.querySelectorAll(".stepTwoHelp");
let stepThreeHelp = document.querySelectorAll(".stepThreeHelp");

let FeedbackFormFormValue = {
  message: "",
  email: "",
  firstName: "",
  lastName: "",
};

// text box control handler - input 01
allInput[0]?.addEventListener("input", (event) => {
  FeedbackFormFormValue["message"] = event.target.value;
  allInput[0].style.border = "1px solid #ddd";
  document.querySelectorAll(".errorMessage_messageFeedback")[0].innerHTML = ` `;
});

// text box with label controller - label 01
allInput[0]?.addEventListener("click", function () {
  label[0].style.top = "0";
  label[0].style.color = "#049f8d";
  label[0].style.background = "#fff";
});


// text box control handler - input 02
allInput[1]?.addEventListener("input", (event) => {
  FeedbackFormFormValue["email"] = event.target.value;
  allInput[1].style.border = "1px solid #ddd";
  document.querySelectorAll(".errorMessage_emailFeedback")[0].innerHTML = ` `;
});

// text box with label controller - label 02
allInput[1]?.addEventListener("click", function () {
  label[1].style.top = "0";
  label[1].style.color = "#049f8d";
  label[1].style.background = "#fff";
});

// text box control handler - input 03
allInput[2]?.addEventListener("input", (event) => {
  FeedbackFormFormValue["firstName"] = event.target.value;
  allInput[2].style.border = "1px solid #ddd";
  document.querySelectorAll(".errorMessage_firstNameFeedback")[0].innerHTML = ` `;
});

// text box with label controller - label 03
allInput[2]?.addEventListener("click", function () {
  label[2].style.top = "0";
  label[2].style.color = "#049f8d";
  label[2].style.background = "#fff";
});

// text box control handler - input 04
allInput[3]?.addEventListener("input", (event) => {
  FeedbackFormFormValue["lastName"] = event.target.value;
  allInput[3].style.border = "1px solid #ddd";
  document.querySelectorAll(".errorMessage_lastNameFeedback")[0].innerHTML = ` `;
});

// text box with label controller - label 04
allInput[3]?.addEventListener("click", function () {
  label[3].style.top = "0";
  label[3].style.color = "#049f8d";
  label[3].style.background = "#fff";
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
  
      const message = form["message"].value;
      const email = form["email"].value;
      const firstName = form["firstName"].value;
      const lastName = form["lastName"].value;
  
      FeedbackFormFormValue["message"] = message;
      FeedbackFormFormValue["email"] = email;
      FeedbackFormFormValue["firstName"] = firstName;
      FeedbackFormFormValue["lastName"] = lastName;
  
      stepTwoHelp[0].style.display = "none";
      stepThreeHelp[0].style.display = "block";
  
      console.log('====FeedbackFormFormValue================================');
      console.log(FeedbackFormFormValue);
      console.log('====================================');
      return;
    }
  
    // error message is here...
    if (!!!FeedbackFormFormValue?.message) {
      document.querySelectorAll(
        ".input.PleaseDescribeYourRequest"
      )[0].style.border = "1px solid #b00020";
      label[0].style.color = "#b00020";
      label[0].style.top = "25px";
      document.querySelectorAll(
        ".errorMessage_messageFeedback"
      )[0].innerHTML = `<p class="error">this input box is required.</p>`;
    }
  
    if (!!!FeedbackFormFormValue?.email) {
      allInput[1].style.border = "1px solid #b00020";
      label[1].style.color = "#b00020";
      label[1].style.top = "25px";
      document.querySelectorAll(
        ".errorMessage_emailFeedback"
      )[0].innerHTML = `<p class="error">Email is required.</p>`;
    }
  
    if (!!!FeedbackFormFormValue?.firstName) {
      allInput[2].style.border = "1px solid #b00020";
      label[2].style.color = "#b00020";
      label[2].style.top = "25px";
      document.querySelectorAll(
        ".errorMessage_firstNameFeedback"
      )[0].innerHTML = `<p class="error">First Name is required.</p>`;
    }
  
    if (!!!FeedbackFormFormValue?.lastName) {
      allInput[3].style.border = "1px solid #b00020";
      label[3].style.color = "#b00020";
      label[3].style.top = "25px";
      document.querySelectorAll(
        ".errorMessage_lastNameFeedback"
      )[0].innerHTML = `<p class="error">Last Name is required.</p>`;
    }
  
    return;
  }