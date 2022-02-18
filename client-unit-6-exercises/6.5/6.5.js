window.onload = initialize;

let counter = 0;

const addParagraph = () => {
  let textArea = document.getElementById("my-textarea");
  if (!textArea.value.length) {
    return alert("ERROR! Add some text to create a paragraph!");
  } else {
    counter++;
    let paragraph = document.createElement("p");
    paragraph.setAttribute("id", `p-${counter}`);
    document.getElementsByTagName("body")[0].appendChild(paragraph);
    document.getElementById(`p-${counter}`).innerHTML = textArea.value;
  }
};

function initialize() {
  document
    .getElementById("add-paragraph")
    .addEventListener("click", addParagraph, false);
}
