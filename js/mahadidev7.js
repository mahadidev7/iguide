let mahadidev7_accordingContext = document.getElementsByClassName(
  "mahadidev7_accordingContext"
);
let step_one = document.querySelectorAll(".step_one");
let step_two = document.querySelectorAll(".step_two");
let step_three = document.querySelectorAll(".step_three");
let step_four = document.querySelectorAll(".step_four");

let step2a = document.querySelectorAll(".step2a");
let step2b = document.querySelectorAll(".step2b");

let mobileMenu = document.querySelectorAll(".mobileMenu")[0];
let closeMenu = document.querySelectorAll(".closeMenu");

// hare is contact page all value
let contactPageAllFormValues = {
  StartByDescribingYourIssue: "", //Start by describing your issue
  ChooseTheBestDescriptionOfYourIssue: "", // Choose the best description of your issue
  addAdditionalDetailsIfYouLikeOrNot: "", // Add additional details if you like ... or not.
  email: "", // email
  firstName: "", // firstName
  lastName: "", // lastName
};

let removeAllActiveClass = () => {
  for (const [key, value] of Object.entries(mahadidev7_accordingContext)) {
    value.classList.remove("active");
  }
};

function setValue() {
  let StartByDescribingYourIssue = document.getElementsByClassName("StartByDescribingYourIssue");
  let step2a_btn = document.querySelectorAll("step2a_btn");
//   let StartByDescribingYourIssue = document.getElementsByClassName("StartByDescribingYourIssue");
//   let StartByDescribingYourIssue = document.getElementsByClassName("StartByDescribingYourIssue");
//   let StartByDescribingYourIssue = document.getElementsByClassName("StartByDescribingYourIssue");
//   let StartByDescribingYourIssue = document.getElementsByClassName("StartByDescribingYourIssue");

  StartByDescribingYourIssue[0].value = contactPageAllFormValues?.StartByDescribingYourIssue

  for (let i = 0; i < step2a_btn.length; i++) {
    console.log('====================================');
    console.log(step2a_btn);
    console.log('====================================');
  }

}

// step 1 form handler
function stepOneHandler() {
  const form = document.forms["stepOneForm"];
  const value = form["message"].value;
  contactPageAllFormValues["StartByDescribingYourIssue"] = value;
  removeAllActiveClass();
  step_two[0].classList.add("active");
//   setValue()
}

// step 2 form handler
// 2a
function step2aHandler(data) {
  contactPageAllFormValues["ChooseTheBestDescriptionOfYourIssue"] = data;
  step2a[0].style.display = "none";
  step2b[0].style.display = "block";
  // contactPageAllFormValues.ChooseTheBestDescriptionOfYourIssue === true ? "" : ""
}
// 2b
function step2bHandler() {
  const form = document.forms["step2bForm"];
  const value = form["message"].value;
  contactPageAllFormValues["addAdditionalDetailsIfYouLikeOrNot"] = value;
  removeAllActiveClass();
  step_three[0].classList.add("active");
}

// step 3 form handler
function stepThreeHandler() {
  const form = document.forms["stepThreeForm"];
  const email = form["email"].value;
  const firstName = form["firstName"].value;
  const lastName = form["lastName"].value;
  contactPageAllFormValues["email"] = email;
  contactPageAllFormValues["firstName"] = firstName;
  contactPageAllFormValues["lastName"] = lastName;
  removeAllActiveClass();
  step_four[0].classList.add("active");
}

// menu open handler 
function openMenuHandler() {
    mobileMenu.style.display = "block";
}
// menu close handler 
function closeMenuHandler() {
    mobileMenu.style.display = "none";
}
