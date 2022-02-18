$(document).ready(initialize);

function initialize() {
  showBuildingsOnLoadPage();
  getBuildingsJquery();
  printBuilding();
  printBuildings();
  createBuilding();
  addFloorsAndDoors();
  addOwner();
  generateBuildingRadioButtonList();
  changeOwner();
  selectBuildingByStreet();
}

let db = [];

//SHOW BUILDINGS ON LOAD PAGE
const showBuildingsOnLoadPage = () => {
  $.getJSON("buildings.json", function (respuesta) {
    $.each(respuesta, function (clave, valor) {
      db.push(valor);
    });
    generateListOfStreetsForSelect();
    $("#buildings-container").empty();

    for (var b = 0; b < db.length; b++) {
      let $table = $("<table>");
      $table.attr("class", `building-table`);
      $table.attr("style", `border: 1px solid black; margin-bottom: 30px;`);
      $table.appendTo("#buildings-container");
      let $tbody = $table.append("<tbody />").children("tbody");
      let $th = $tbody.append("<th />").children("th:last");
      $th.html(`${db[b].name} ${db[b].street} ${db[b].number}`);
      for (let f = 0; f < db[b].floors.length; f++) {
        let $tr = $th.append("<tr />").children("tr:last");
        let $tdFloor = $tr.append("<td/>").children("td");
        $tdFloor.attr("style", `border: 1px solid black;`);
        $tdFloor.attr("id", `floor-${db[b].floors[f].number}`);
        $tdFloor.html(`Floor ${db[b].floors[f].number}`);
        for (let d = 0; d < db[b].floors[f].doors.length; d++) {
          $tr.append(
            `<td style="border: 1px solid black;">${db[b].floors[f].doors[d].owner}</td>`
          );
        }
      }
      $table.hide()
    }
    $("div#buildings-container table").each(function (index) {
      $(this).delay(1000*index).fadeIn(1000)
    })

  });
};

//GET BUILDINGS FROM JSON USING JQUERY
const getBuildingsJquery = () => {
  $.getJSON("buildings.json", function (respuesta) {
    $.each(respuesta, function (clave, valor) {
      db.push(valor);
    });
    generateListOfStreetsForSelect();
  });
};

//BUILDING RADIO BUTTON LIST
const generateBuildingRadioButtonList = () => {
  $("#r-button-build-array-button").click(function () {
    db.forEach((building) => {
      $("#building-list-container").append(`
      <div>
      <input type="radio" id="${building.name}" name="building-selected" value="${building.name}">
      <label for="${building.name}">${building.name}</label>
      </div>
      `);
    });
    $("#building-list-container").append(
      `<input type="text" id="list-floor-input" placeholder="floor..."/>`
    );
    $("#building-list-container").append(
      `<input type="text" id="list-door-input" placeholder="door..."/>`
    );
    $("#building-list-container").append(
      `<input type="text" id="list-owner-input" placeholder="owner..."/>`
    );
    $("#building-list-container").append(
      `<button id="edit-owner-button">Edit Owner</button>`
    );
  });
};

//CHANGE OWNER
const changeOwner = () => {
  $("#building-list-container").on("click", "#edit-owner-button", function () {
    const radioValue = $("input[name='building-selected']:checked").val();
    const foundBuilding = db.find((building) => building.name === radioValue);
    foundBuilding.addOwner(
      $("#list-owner-input").val(),
      $("#list-floor-input").val(),
      $("#list-door-input").val()
    );
    generateListOfStreetsForSelect();
  });
};

//GENERATE LIST OF STREETS FOR SELECT
const generateListOfStreetsForSelect = () => {
  $("#streets").empty();
  db.forEach((building) => {
    $("#streets").append(
      `<option value="${building.street}">${building.street}</option>`
    );
  });
};

//SELECT BUILDING BY STREET:
const selectBuildingByStreet = () => {
  $("select#streets").change(function () {
    const selectedStreet = $(this).children("option:selected").val();
    const foundBuilding = db.find(
      (building) => building.street === selectedStreet
    );
    $("#buildings-container").empty();
    let $table = $("<table>");
    $table.attr("class", `building-table`);
    $table.attr("style", `border: 1px solid black; margin-bottom: 30px;`);
    $table.appendTo("#buildings-container");
    let $tbody = $table.append("<tbody />").children("tbody");
    let $th = $tbody.append("<th />").children("th:last");
    $th.html(
      `${foundBuilding.name} ${foundBuilding.street} ${foundBuilding.number}`
    );
    for (let f = 0; f < foundBuilding.floors.length; f++) {
      let $tr = $th.append("<tr />").children("tr:last");
      let $tdFloor = $tr.append("<td/>").children("td");
      $tdFloor.attr("style", `border: 1px solid black;`);
      $tdFloor.attr("id", `floor-${foundBuilding.floors[f].number}`);
      $tdFloor.html(`Floor ${foundBuilding.floors[f].number}`);
      for (let d = 0; d < foundBuilding.floors[f].doors.length; d++) {
        $tr.append(
          `<td style="border: 1px solid black;">${foundBuilding.floors[f].doors[d].owner}</td>`
        );
      }
    }
  });
};

//CREATE BUILDING
const createBuilding = () => {
  $("#add-building-button").click(function () {
    let newBuilding = new Building(
      $("#building-name-input").val(),
      $("#street-input").val(),
      $("#number-input").val(),
      $("#zipcode-input").val()
    );
    db.push(newBuilding);
    $("#building-message").html(
      `created building ${newBuilding.name} at ${newBuilding.street} street, number ${newBuilding.number}`
    );
    generateListOfStreetsForSelect();
  });
};

//ADD FLOORS AND DOORS:
const addFloorsAndDoors = () => {
  $("#add-floors-and-doors-button").click(function () {
    const bName = $("#add-floors-and-doors-building-input").val();
    const nFloors = $("#number-of-floors-input").val();
    const nDoors = $("#number-of-doors-input").val();
    const foundBuilding = db.find((building) => building.name === bName);
    foundBuilding.addFloorsAndDoors(nFloors, nDoors);
    generateListOfStreetsForSelect();
  });
};

//ADD OWNER
const addOwner = () => {
  $("#add-owner-button").click(function () {
    const bName = $("#owner-building-input").val();
    const oName = $("#owner-name-input").val();
    const nFloor = $("#owner-floor-input").val();
    const nDoor = $("#owner-door-input").val();
    const foundBuilding = db.find((building) => building.name === bName);
    foundBuilding.addOwner(oName, nFloor, nDoor);
    generateListOfStreetsForSelect();
  });
};

//FIND BUILDING BY NAME AND PRINT IT:
const printBuilding = () => {
  $("#show-floors-button").click(function () {
    $("#buildings-container").empty();
    let foundBuilding = db.find(
      (building) => building.name === $("#building-input").val()
    );
    let $table = $("<table>");
    $table.attr("class", `building-table`);
    $table.attr("style", `border: 1px solid black; margin-bottom: 30px;`);
    $table.appendTo("#buildings-container");
    let $tbody = $table.append("<tbody />").children("tbody");
    let $th = $tbody.append("<th />").children("th:last");
    $th.html(
      `${foundBuilding.name} ${foundBuilding.street} ${foundBuilding.number}`
    );
    for (let f = 0; f < foundBuilding.floors.length; f++) {
      let $tr = $th.append("<tr />").children("tr:last");
      let $tdFloor = $tr.append("<td/>").children("td");
      $tdFloor.attr("style", `border: 1px solid black;`);
      $tdFloor.attr("id", `floor-${foundBuilding.floors[f].number}`);
      $tdFloor.html(`Floor ${foundBuilding.floors[f].number}`);
      for (let d = 0; d < foundBuilding.floors[f].doors.length; d++) {
        $tr.append(
          `<td style="border: 1px solid black;">${foundBuilding.floors[f].doors[d].owner}</td>`
        );
      }
    }
  });
};

//PRINT BUILDINGS:
const printBuildings = () => {
  $("#show-buildings-button").click(function () {
    $("#buildings-container").empty();
    for (var b = 0; b < db.length; b++) {
      let $table = $("<table>");
      $table.attr("class", `building-table`);
      $table.attr("style", `border: 1px solid black; margin-bottom: 30px;`);
      $table.appendTo("#buildings-container");
      let $tbody = $table.append("<tbody />").children("tbody");
      let $th = $tbody.append("<th />").children("th:last");
      $th.html(`${db[b].name} ${db[b].street} ${db[b].number}`);
      for (let f = 0; f < db[b].floors.length; f++) {
        let $tr = $th.append("<tr />").children("tr:last");
        let $tdFloor = $tr.append("<td/>").children("td");
        $tdFloor.attr("style", `border: 1px solid black;`);
        $tdFloor.attr("id", `floor-${db[b].floors[f].number}`);
        $tdFloor.html(`Floor ${db[b].floors[f].number}`);
        for (let d = 0; d < db[b].floors[f].doors.length; d++) {
          $tr.append(
            `<td style="border: 1px solid black;">${db[b].floors[f].doors[d].owner}</td>`
          );
        }
      }
    }
  });
};

//------------------------------------------------
//GET BUILDINGS FROM JSON USING XHR
const getBuildingsXhr = () => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let buildingsJs = JSON.parse(this.responseText);
      buildingsJs.map((building) => {
        db.push(building);
      });
    }
  };
  xhr.open("GET", "buildings.json", true);
  xhr.send();
};

//POST BUILDINGS USINGS JQUERY
const postBuildings = () => {
  //Función que envía datos y recibe respuesta
  $.post("buildings.json", db).done(function (respuesta) {
    console.log(respuesta);
  });
};

//-----------------------------------------------------------------

class Building {
  floors = [];
  constructor(name, street, number, zipCode) {
    this.name = name;
    this.street = street;
    this.number = Number(number);
    this.zipCode = Number(zipCode);
  }

  addOwner(username, floor, door) {
    this.floors[Number(floor) - 1].doors[Number(door) - 1].setOwner(username);
    $("#owner-message").html(
      `${username} is now the owner of door: ${door}, on floor: ${floor}, in building ${this.name}`
    );
  }

  addFloorsAndDoors(numberOfFloors, numberOfDoors) {
    for (let f = 1; f <= Number(numberOfFloors); f++) {
      let newFloor = new Floor(this.floors.length + 1);
      for (let d = 1; d <= Number(numberOfDoors); d++) {
        let newDoor = new Door(newFloor.doors.length + 1);
        newFloor.addDoor(newDoor);
      }
      this.addFloor(newFloor);
    }
    $("#f-d-message").html(
      `Added ${numberOfFloors} floors and ${numberOfDoors} doors to building ${this.name}`
    );
  }

  addFloor(floor) {
    this.floors.push(floor);
  }

  removeFloor(number) {
    this.floors = this.floors.filter(
      (floor) => floor.number !== Number(number)
    );
  }

  getFloors() {
    return this.floors;
  }

  setFloors(floors) {
    this.floors = floors;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getStreet() {
    return this.street;
  }

  setStreet(street) {
    this.street = street;
  }

  getNumber() {
    return this.number;
  }

  setNumber(number) {
    this.number = Number(number);
  }

  getZipCode() {
    return this.zipCode;
  }

  setZipCode(zipCode) {
    this.zipCode = Number(zipCode);
  }
}

class Floor {
  doors = [];
  constructor(number) {
    this.number = Number(number);
  }

  addDoor(door) {
    this.doors.push(door);
  }

  removeDoor(number) {
    this.doors = this.doors.filter((door) => door.number !== Number(number));
  }

  getDoors() {
    return this.doors;
  }

  setDoors(doors) {
    this.doors = doors;
  }

  getNumber() {
    return this.number;
  }

  setNumber(number) {
    this.number = Number(number);
  }
}

class Door {
  owner = "for rent";
  constructor(number) {
    this.number = Number(number);
  }

  getOwner() {
    return this.owner;
  }

  setOwner(owner) {
    this.owner = owner;
  }

  getNumber() {
    return this.number;
  }

  setNumber(number) {
    this.number = Number(number);
  }
}
