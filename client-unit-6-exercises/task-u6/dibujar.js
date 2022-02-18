window.onload = initialize;

const createDrawingBoard = () => {
  let counterCell = 1;
  let table = document.createElement("table");
  table.setAttribute("id", "drawing-board");
  table.setAttribute("style", "border: 1px solid black;");
  document.getElementById("zonadibujo").appendChild(table);
  for (let h = 1; h <= 30; h++) {
    let tr = document.createElement("tr");
    tr.setAttribute("id", `tr-${h}`);
    tr.setAttribute("class", `tr-class`);
    document.getElementById("drawing-board").appendChild(tr);
    for (let w = 1; w <= 30; w++) {
      let td = document.createElement("td");
      td.setAttribute("id", `td-${counterCell}`);
      td.setAttribute("class", `td-class`);
      td.setAttribute("style", "border: 1px solid black; padding: 10px;");
      td.setAttribute("painterzone", "yes");
      document.getElementById(`tr-${h}`).appendChild(td);
      counterCell++;
    }
  }
};

let colorSelected;
let paintBrushActivated = false;

const genericClickFunction = () => {
  window.onclick = (e) => {
    let elementSelected = e.target;

    //SELECT COLOR:
    if (
      document.getElementsByTagName("td")[0] === elementSelected ||
      document.getElementsByTagName("td")[1] === elementSelected ||
      document.getElementsByTagName("td")[2] === elementSelected ||
      document.getElementsByTagName("td")[3] === elementSelected ||
      document.getElementsByTagName("td")[4] === elementSelected ||
      document.getElementsByTagName("td")[5] === elementSelected
    ) {
      for (let index = 0; index < 6; index++) {
        document
          .getElementsByTagName("td")
          [index].setAttribute("class", `color${index + 1}`);
      }
      colorSelected = elementSelected.getAttribute("class");

      elementSelected.setAttribute(
        "class",
        `${elementSelected.getAttribute("class")} seleccionado`
      );
    }

    //ACTIVATE/DISACTIVATE PAINT BRUSH:
    if (
      elementSelected.getAttribute("id") === "drawing-board" ||
      elementSelected.getAttribute("class") === "tr-class" ||
      elementSelected.getAttribute("painterzone") === "yes"
    ) {
      if (!paintBrushActivated) {
        paintBrushActivated = true;
        document.getElementById("pincel").innerHTML = "Paint Brush Activated";
      } else {
        paintBrushActivated = false;
        document.getElementById("pincel").innerHTML =
          "Paint Brush Disactivated";
      }
    }
  };
};

const paintDrawingBoard = () => {
  window.onmouseover = (e) => {
    let elementSelected = e.target;
    if (elementSelected.getAttribute("painterzone") === "yes") {
      if (!paintBrushActivated || !colorSelected) {
        return;
      } else if (paintBrushActivated && colorSelected) {
        elementSelected.setAttribute("class", colorSelected);
      }
    }
  };
};

function initialize() {
  createDrawingBoard();
  genericClickFunction();
  paintDrawingBoard();
}
