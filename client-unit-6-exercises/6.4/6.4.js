window.onload = initialize;

const createInputText = () => {
  var input = document.createElement("input");
  input.setAttribute("type", "text");
  const atributeName = prompt("Atribute name?");
  input.setAttribute("name", atributeName);
  input.setAttribute("placeholder", atributeName);
  //--------------------------------
  var br = document.createElement("br");
  var br2 = document.createElement("br");
  document.getElementsByTagName("form")[0].appendChild(br);
  document.getElementsByTagName("form")[0].appendChild(br2);
  //------------------------------
  document.getElementsByTagName("form")[0].appendChild(input);
};

const createInputPassword = () => {
  var input = document.createElement("input");
  input.setAttribute("type", "password");
  const atributeName = prompt("Atribute name?");
  input.setAttribute("name", atributeName);
  input.setAttribute("placeholder", atributeName);
  //--------------------------------
  var br = document.createElement("br");
  var br2 = document.createElement("br");
  document.getElementsByTagName("form")[0].appendChild(br);
  document.getElementsByTagName("form")[0].appendChild(br2);
  //--------------------------------
  document.getElementsByTagName("form")[0].appendChild(input);
};

const createTextarea = () => {
  var textarea = document.createElement("textarea");
  textarea.setAttribute("cols", "40");
  textarea.setAttribute("rows", "5");
  const atributeName = prompt("Atribute name?");
  textarea.setAttribute("name", atributeName);
  textarea.setAttribute("placeholder", atributeName);
  //--------------------------------
  var br = document.createElement("br");
  var br2 = document.createElement("br");
  document.getElementsByTagName("form")[0].appendChild(br);
  document.getElementsByTagName("form")[0].appendChild(br2);
  //--------------------------------
  document.getElementsByTagName("form")[0].appendChild(textarea);
};

const createLabel = () => {
  var label = document.createElement("label");
  const atributeFor = prompt("Atribute for?");
  label.setAttribute("for", atributeFor);
  label.setAttribute("id", `label-${atributeFor}`);

  document.getElementsByTagName("form")[0].appendChild(label);

  document.getElementById(`label-${atributeFor}`).innerHTML = atributeFor;
};

const createImage = () => {
  var image = document.createElement("img");
  const atributeSrc = prompt("Atribute src?");
  image.setAttribute("src", atributeSrc);
  image.setAttribute("width", "250px");
  image.setAttribute("height", "220px");
  //--------------------------------
  var br = document.createElement("br");
  var br2 = document.createElement("br");
  document.getElementsByTagName("form")[0].appendChild(br);
  document.getElementsByTagName("form")[0].appendChild(br2);
  //--------------------------------
  document.getElementsByTagName("form")[0].appendChild(image);
};

const createCheckbox = () => {
  var input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  const atributeName = prompt("Atribute name?");
  input.setAttribute("name", atributeName);
  const atributeValue = prompt("Atribute value?");
  input.setAttribute("value", atributeValue);
  //--------------------------------
  var br = document.createElement("br");
  var br2 = document.createElement("br");
  document.getElementsByTagName("form")[0].appendChild(br);
  document.getElementsByTagName("form")[0].appendChild(br2);
  //--------------------------------
  document.getElementsByTagName("form")[0].appendChild(input);
};

const createRadioButton = () => {
  var input = document.createElement("input");
  input.setAttribute("type", "radio");
  const atributeName = prompt("Atribute name?");
  input.setAttribute("name", atributeName);
  const atributeValue = prompt("Atribute value?");
  input.setAttribute("value", atributeValue);
  //--------------------------------
  var br = document.createElement("br");
  var br2 = document.createElement("br");
  document.getElementsByTagName("form")[0].appendChild(br);
  document.getElementsByTagName("form")[0].appendChild(br2);
  //--------------------------------
  document.getElementsByTagName("form")[0].appendChild(input);
};

const createSubmitButton = () => {
  var input = document.createElement("input");
  input.setAttribute("type", "submit");
  const atributeName = prompt("Atribute name?");
  input.setAttribute("name", atributeName);
  const atributeValue = prompt("Atribute value?");
  input.setAttribute("value", atributeValue);
  //--------------------------------
  var br = document.createElement("br");
  var br2 = document.createElement("br");
  document.getElementsByTagName("form")[0].appendChild(br);
  document.getElementsByTagName("form")[0].appendChild(br2);
  //--------------------------------
  document.getElementsByTagName("form")[0].appendChild(input);
};

function initialize() {
  document
    .getElementById("create-input-text")
    .addEventListener("click", createInputText, false);
  document
    .getElementById("create-input-password")
    .addEventListener("click", createInputPassword, false);
  document
    .getElementById("create-textarea")
    .addEventListener("click", createTextarea, false);
  document
    .getElementById("create-label")
    .addEventListener("click", createLabel, false);
  document
    .getElementById("create-image")
    .addEventListener("click", createImage, false);
  document
    .getElementById("create-checkbox")
    .addEventListener("click", createCheckbox, false);
  document
    .getElementById("create-radio-button")
    .addEventListener("click", createRadioButton, false);
  document
    .getElementById("create-submit-button")
    .addEventListener("click", createSubmitButton, false);
}
