const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // const formElements = event.currentTarget.elements;

  // console.dir(formElements);

  // const mail = formElements.email.value;
  // const password = formElements.password.value;
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Bсе поля должны быть заполнены!");
  }

  const userFormResult = {};
  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    userFormResult[name] = value;
  });

  console.log(userFormResult);
  form.reset();
}
