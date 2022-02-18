$(document).ready(initialize);

async function initialize() {
  // getUsersFetch();
  // getUsersXhr();
  // getUsersJquery();
  //await getUsersFetchAsynAwait();
  await getUsersJqueryAsyncAwait();
  loadFilteredUsers();
  printUsers();
  search();
}

let db = [];
let filteredUsers = [];

const loadFilteredUsers = () => {
  filteredUsers = db.filter((user) => {
    return user.name.toLowerCase().includes($("#searcher").val().toLowerCase());
  });
};

//SEARCH
const search = () => {
  $("#searcher").keyup(function () {
    filteredUsers = db.filter((user) => {
      return user.name.toLowerCase().includes($(this).val().toLowerCase());
    });
    printUsers();
  });
};

//PRINT USERS:
const printUsers = () => {
  $("#users-container").empty();
  for (var u = 0; u < filteredUsers.length; u++) {
    let $table = $("<table>");
    $table.attr("class", `user-table`);
    $table.appendTo("#users-container");
    let $tbody = $table.append("<tbody />").children("tbody");
    let $th = $tbody.append("<th />").children("th:last");
    $th.html(`${filteredUsers[u].name}`);
    let $tr = $th.append("<tr />").children("tr:last");
    $tr.html(`${filteredUsers[u].email}`);
    let $tr2 = $th.append("<tr />").children("tr:last");
    $tr2.html(`${filteredUsers[u].phone}`);

    $table.hide();
  }
  $("div#users-container table").each(function (index) {
    $(this)
      .delay(100 * index)
      .fadeIn(100);
  });
};

//GET USERS FROM API USING JQUERY WITH ASYNC AWAIT
const getUsersJqueryAsyncAwait = async () => {
  try {
    const response = await $.getJSON(
      "https://jsonplaceholder.typicode.com/users"
    );
    $.each(response, function (clave, valor) {
      db.push(valor);
    });
  } catch (err) {
    console.log(err);
  }
};

//GET USERS FROM API USING FETCH WITH ASYNC AWAIT
const getUsersFetchAsynAwait = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    users.map((user) => {
      db.push(user);
    });
    return users;
  } catch (err) {
    console.log(err);
  }
};

//GET USERS FROM API USING JQUERY
const getUsersJquery = () => {
  $.getJSON("https://jsonplaceholder.typicode.com/users", function (respuesta) {
    $.each(respuesta, function (clave, valor) {
      db.push(valor);
    });
  });
};

//GET USERS FROM API USING XHR
const getUsersXhr = () => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let users = JSON.parse(this.responseText);
      users.map((user) => {
        db.push(user);
      });
    }
  };
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhr.send();
};

//GET USERS FROM API USING FETCH
const getUsersFetch = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.map((user) => {
        db.push(user);
      });
    });
};
