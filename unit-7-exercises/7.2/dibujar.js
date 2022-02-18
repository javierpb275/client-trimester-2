$(document).ready(initialize);

let previousElementSelected;
let colorSelected;
let paintBrushActivated = false;

function createDrawingBoard() {
  let $table = $("<table>");
  $table.attr("id", `drawing-board`);
  $table.attr("style", `border: 1px solid black;`);
  let $tbody = $table.append("<tbody />").children("tbody");
  for (let h = 1; h <= 30; h++) {
    let $tr = $tbody.append("<tr />").children("tr:last");
    for (let w = 1; w <= 30; w++) {
      let $td = $tr.append("<td/>").children("td");
      $td.attr("style", `border: 1px solid black; padding: 10px;`);
    }
  }
  $table.appendTo("#zonadibujo");
}

function selectColor() {
  $("table:first td").click(function () {
    if ($(this).attr("id") === "pincel") {
      return;
    }
    $("table:first td").removeClass("seleccionado");
    colorSelected = $(this).attr("class");
    $(this).addClass("seleccionado");
  });
}

function switchPaintBrush() {
  $("table#drawing-board").click(function () {
    if (!paintBrushActivated) {
      paintBrushActivated = true;
      $("#pincel").html("Paint Brush Activated");
    } else {
      paintBrushActivated = false;
      $("#pincel").html("Paint Brush Disactivated");
    }
  });
}

function paint() {
  $("table#drawing-board td").mouseover(function () {
    if (!paintBrushActivated) {
      return;
    }
    $(this).removeClass($(this).attr("class"));
    $(this).addClass(colorSelected);
  });
}

function initialize() {
  createDrawingBoard();
  selectColor();
  switchPaintBrush();
  paint();
}
