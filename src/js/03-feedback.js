import throttle from "lodash.throttle";

const LOCAL_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);

const formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

populateForm();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  const string = JSON.stringify(formData);

  localStorage.setItem(LOCAL_KEY, string);
}

function populateForm() {
  if (formData) {
    form.email.value = formData.email || "";
    form.message.value = formData.message || "";
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(LOCAL_KEY);
  console.log(`email: ${formData.email}`);
  console.log(`message: ${formData.message}`);
}
