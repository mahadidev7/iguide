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

let step_oneItem = document.querySelectorAll(".step_oneItem")[0];
let step_twoItem = document.querySelectorAll(".step_twoItem")[0];
let step_threeItem = document.querySelectorAll(".step_threeItem")[0];
let step_fourItem = document.querySelectorAll(".step_fourItem")[0];

let ActiveSubmit = document.querySelectorAll(".ActiveSubmit")[0];
let inactiveSubmit = document.querySelectorAll(".inactiveSubmit")[0];

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
  const form = document.forms["stepOneForm"];
  const value = form["message"].value;
  contactPageAllFormValues["StartByDescribingYourIssue"] = value;
  removeAllActiveClass();
  step_two[0].classList.add("active");

//   document.querySelectorAll(".step_oneHead .resultQuestion")[0].innerText =
//     "Start by describing your issue";
//   document.querySelectorAll(".step_oneHead .resultAnswer")[0].innerText = value;

//   document.querySelectorAll(".editGroup")[0].innerHTML = `<div class="edit">
//   <i class="fa-solid fa-pen-to-square"></i>
// </div>`;

document.querySelectorAll(".step_oneHead")[0].style.display = "flex"
document.querySelectorAll(".step_twoHead")[0].style.display = "none"

document.querySelectorAll(".step_oneItem")[0].style.border = "1px solid #ddd"
document.querySelectorAll(".step_twoItem")[0].style.border = "2px solid #999"
  
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
  const form = document.forms["step2bForm"];
  const value = form["message"].value;
  contactPageAllFormValues["addAdditionalDetailsIfYouLikeOrNot"] = value;
  removeAllActiveClass();
  step_three[0].classList.add("active");

  step2a[0].style.display = "block";
  step2b[0].style.display = "none";

//   document.querySelectorAll(".step_twoHead .resultQuestion")[0].innerText =
//     "Choose the best description of your issue, Add additional details if you like ... or not.";
//   document.querySelectorAll(".step_twoHead .resultAnswer")[0].innerText =
//     document.querySelectorAll(".step_twoHead .resultAnswer")[0].textContent +
//     "," +
//     value;

//   document.querySelectorAll(".editGroup")[1].innerHTML = `<div class="edit">
//   <i class="fa-solid fa-pen-to-square"></i>
// </div>`;

document.querySelectorAll(".step_twoHead")[0].style.display = "flex"
document.querySelectorAll(".step_ThreeHead")[0].style.display = "none"

document.querySelectorAll(".step_twoItem")[0].style.border = "1px solid #ddd"
document.querySelectorAll(".step_threeItem")[0].style.border = "2px solid #999"

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

//   document.querySelectorAll(".step_ThreeHead .resultQuestion")[0].innerText =
//     "Your Contact Details";
//   document.querySelectorAll(".step_ThreeHead .resultAnswer")[0].innerText =
//     email + "," + firstName + "," + lastName;

//   document.querySelectorAll(".step_fourHead .resultQuestion")[0].innerText =
//     "Success";

//   document.querySelectorAll(".editGroup")[2].innerHTML = `<div class="edit">
//   <i class="fa-solid fa-pen-to-square"></i>
// </div>`;

document.querySelectorAll(".step_ThreeHead")[0].style.display = "flex"
document.querySelectorAll(".step_fourHead")[0].style.display = "none"


document.querySelectorAll(".step_threeItem")[0].style.border = "1px solid #ddd"
document.querySelectorAll(".step_fourItem")[0].style.border = "2px solid #999"

  // removeAllValueInnerText();

}

// menu open handler
function openMenuHandler() {
  mobileMenu.style.display = "block";
}
// menu close handler
function closeMenuHandler() {
  mobileMenu.style.display = "none";
}

window.addEventListener("load", function(){
  inactiveSubmit.style.display = "none"
  ActiveSubmit.style.display = "block"
})


// step_oneItem.addEventListener("click", function () {
//   if (!!contactPageAllFormValues?.StartByDescribingYourIssue) {
//     removeAllActiveClass();
//     step_one[0].classList.add("active");
//   }
// });

// step_twoItem.addEventListener("click", function () {
//   if (
//     !!contactPageAllFormValues?.ChooseTheBestDescriptionOfYourIssue &&
//     !!contactPageAllFormValues?.addAdditionalDetailsIfYouLikeOrNot
//   ) {
//     removeAllActiveClass();
//     step_two[0].classList.add("active");
//   }
// });

// step_threeItem.addEventListener("click", function () {
//   if (
//     !!contactPageAllFormValues?.email &&
//     !!contactPageAllFormValues?.firstName &&
//     !!contactPageAllFormValues?.lastName
//   ) {
//     removeAllActiveClass();
//     step_three[0].classList.add("active");
//   }
// });

// step_fourItem.addEventListener("click", function () {
//   if (!!contactPageAllFormValues?.StartByDescribingYourIssue) {
//     removeAllActiveClass();
//     step_four[0].classList.add("active");
//   }
// });
