window.onload = function () {
  generateForm();
};

function generateForm() {
  //----------------------------------------------------
  //CREATE FUNCTIONS FOR THE FORM:
  const addWrongStyles = (inputId, labelId) => {
    document.getElementById(`${inputId}`).classList.remove("border-correct");
    document.getElementById(`${labelId}`).classList.remove("label-correct");
    document.getElementById(`${inputId}`).classList.add("border-wrong");
    document.getElementById(`${labelId}`).classList.add("label-wrong");
  };

  const addCorrectStyles = (inputId, labelId) => {
    document.getElementById(`${inputId}`).classList.remove("border-wrong");
    document.getElementById(`${labelId}`).classList.remove("label-wrong");
    document.getElementById(`${inputId}`).classList.add("border-correct");
    document.getElementById(`${labelId}`).classList.add("label-correct");
  };

  //VALIDATION FUNCTIONS:
  const validateInput = (inputId, errorId, labelId) => {
    let inputElement = document.getElementById(inputId);

    if (!inputElement.value.length) {
      addWrongStyles(inputId, labelId);
      document.getElementById(
        `${errorId}`
      ).innerHTML = `${inputId} field is required!`;
      return false;
    }

    if (inputId === "record" || inputId === "artist") {
      if (inputElement.value.length < 20) {
        addWrongStyles(inputId, labelId);
        document.getElementById(
          `${errorId}`
        ).innerHTML = `${inputId} must be 20 characters`;
        return false;
      } else {
        addCorrectStyles(inputId, labelId);
        document.getElementById(`${errorId}`).innerHTML = ``;
        return true;
      }
    }

    if (inputId === "come-out-date") {
      if (isNaN(Number(inputElement.value)) || inputElement.value.length > 4) {
        addWrongStyles(inputId, labelId);

        document.getElementById(
          `${errorId}`
        ).innerHTML = `${inputId} is not a year`;
        return false;
      } else {
        addCorrectStyles(inputId, labelId);
        document.getElementById(`${errorId}`).innerHTML = ``;
        return true;
      }
    }

    if (inputId === "shelf") {
      if (isNaN(Number(inputElement.value))) {
        addWrongStyles(inputId, labelId);

        document.getElementById(
          `${errorId}`
        ).innerHTML = `${inputId} must be a number`;
        return false;
      } else {
        addCorrectStyles(inputId, labelId);
        document.getElementById(`${errorId}`).innerHTML = ``;
        return true;
      }
    }
  };

  const validateFormFields = () => {
    const checkRecord = validateInput("record", "record-error", "label-record");
    const checkArtist = validateInput("record", "artist-error", "label-artist");
    const checkComeOutDate = validateInput(
      "come-out-date",
      "come-out-date-error",
      "label-come-out-date"
    );
    const checkGenre = validateInput("genre", "genre-error", "label-genre");
    const checkShelf = validateInput("shelf", "shelf-error", "label-shelf");

    if (
      checkRecord &&
      checkArtist &&
      checkComeOutDate &&
      checkGenre &&
      checkShelf
    ) {
      return true;
    } else {
      return false;
    }
  };
  //--------------------------------------------------

  const validateForm = (e) => {
    e.preventDefault();
    if (
      validateFormFields() &&
      confirm("Pulsa aceptar si deseas enviar el formulario")
    ) {
      return true;
    } else {
      return false;
    }
  };

  //----------------------------------------------------

  // Create a break line element
  var br = document.createElement("br");

  // Create a form dynamically
  var form = document.createElement("form");
  form.setAttribute("method", "get");
  form.setAttribute("id", "formulario");
  form.setAttribute("name", "formulario");

  //-----------------------------
  //RECORD:
  //Create label for record
  var labelRecord = document.createElement("label");
  labelRecord.setAttribute("for", "record");
  labelRecord.setAttribute("id", "label-record");

  //Create input element for record
  var inputRecord = document.createElement("input");
  inputRecord.setAttribute("type", "text");
  inputRecord.setAttribute("name", "record");
  inputRecord.setAttribute("id", "record");
  inputRecord.setAttribute("placeholder", "Record...");

  //Create div element for record
  var divRecord = document.createElement("div");
  divRecord.setAttribute("id", "record-error");
  //----------------------------

  //-----------------------------
  //ARTIST:
  //Create label for artist
  var labelArtist = document.createElement("label");
  labelArtist.setAttribute("for", "artist");
  labelArtist.setAttribute("id", "label-artist");
  //Create input element for artist
  var inputArtist = document.createElement("input");
  inputArtist.setAttribute("type", "text");
  inputArtist.setAttribute("name", "artist");
  inputArtist.setAttribute("id", "artist");
  inputArtist.setAttribute("placeholder", "Artist...");

  //Create div element for artist
  var divArtist = document.createElement("div");
  divArtist.setAttribute("id", "artist-error");
  //------------------------------

  //-----------------------------
  //COME-OUT-DATE:
  //Create label for come-out-date
  var labelComeOutDate = document.createElement("label");
  labelComeOutDate.setAttribute("for", "come-out-date");
  labelComeOutDate.setAttribute("id", "label-come-out-date");
  //Create input element for come-out-date
  var inputComeOutDate = document.createElement("input");
  inputComeOutDate.setAttribute("type", "text");
  inputComeOutDate.setAttribute("name", "come-out-date");
  inputComeOutDate.setAttribute("id", "come-out-date");
  inputComeOutDate.setAttribute("placeholder", "Come-out date...");

  //Create div element for come-out-date
  var divComeOutDate = document.createElement("div");
  divComeOutDate.setAttribute("id", "come-out-date-error");
  //--------------------

  //-----------------------------
  //SHELF:
  //Create label for shelf
  var labelshelf = document.createElement("label");
  labelshelf.setAttribute("for", "shelf");
  labelshelf.setAttribute("id", "label-shelf");
  //Create input element for shelf
  var inputshelf = document.createElement("input");
  inputshelf.setAttribute("type", "text");
  inputshelf.setAttribute("name", "shelf");
  inputshelf.setAttribute("id", "shelf");
  inputshelf.setAttribute("placeholder", "Shelf...");

  //Create div element for shelf
  var divshelf = document.createElement("div");
  divshelf.setAttribute("id", "shelf-error");
  //--------------------------------

  //-----------------------------
  //GENRE:
  //Create label for genre
  var labelGenre = document.createElement("label");
  labelGenre.setAttribute("for", "genre");
  labelGenre.setAttribute("id", "label-genre");
  //Create select element for genre
  var selectGenre = document.createElement("select");
  selectGenre.setAttribute("name", "genre");
  selectGenre.setAttribute("id", "genre");
  //Create options elements
  var optionRock = document.createElement("option");
  optionRock.setAttribute("value", "rock");
  optionRock.setAttribute("id", "rock-option");
  var optionPop = document.createElement("option");
  optionPop.setAttribute("value", "pop");
  optionPop.setAttribute("id", "pop-option");
  var optionPunk = document.createElement("option");
  optionPunk.setAttribute("value", "pop");
  optionPunk.setAttribute("id", "punk-option");
  var optionIndie = document.createElement("option");
  optionIndie.setAttribute("value", "indie");
  optionIndie.setAttribute("id", "indie-option");
  //Create div element for genre
  var divGenre = document.createElement("div");
  divGenre.setAttribute("id", "genre-error");

  //-------------------------

  //-----------------------------
  //BORROW:
  //Create label for borrow
  var labelBorrow = document.createElement("label");
  labelBorrow.setAttribute("for", "borrow");
  labelBorrow.setAttribute("id", "label-borrow");
  //Create input element for borrow
  var inputBorrow = document.createElement("input");
  inputBorrow.setAttribute("type", "checkbox");
  inputBorrow.setAttribute("name", "borrow");
  inputBorrow.setAttribute("id", "borrow");
  inputBorrow.setAttribute("value", "borrow");
  //-------------------------

  //------------------
  //SUBMIT BUTTON
  // create a submit button
  var s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("name", "enviar");
  s.setAttribute("id", "enviar");
  s.setAttribute("value", "Enviar");
  //-----------------

  //APPEND ELEMENTS TO FORM:

  // Append record elements to the form
  form.appendChild(labelRecord);
  form.appendChild(inputRecord);
  form.appendChild(divRecord);

  // Inserting a line break
  form.appendChild(br.cloneNode());

  // Append artist elements to the form
  form.appendChild(labelArtist);
  form.appendChild(inputArtist);
  form.appendChild(divArtist);

  // Inserting a line break
  form.appendChild(br.cloneNode());

  // Append come-out-date elements to the form
  form.appendChild(labelComeOutDate);
  form.appendChild(inputComeOutDate);
  form.appendChild(divComeOutDate);

  // Inserting a line break
  form.appendChild(br.cloneNode());

  // Append shelf elements to the form
  form.appendChild(labelshelf);
  form.appendChild(inputshelf);
  form.appendChild(divshelf);

  // Inserting a line break
  form.appendChild(br.cloneNode());

  // Append genre elements to the form

  form.appendChild(labelGenre);

  selectGenre.appendChild(optionRock);
  selectGenre.appendChild(optionPop);
  selectGenre.appendChild(optionPunk);
  selectGenre.appendChild(optionIndie);

  form.appendChild(selectGenre);

  form.appendChild(divGenre);

  // Inserting a line break
  form.appendChild(br.cloneNode());

  // Append borrow elements to the form
  form.appendChild(labelBorrow);
  form.appendChild(inputBorrow);

  // Inserting a line break
  form.appendChild(br.cloneNode());

  // Append the submit button to the form
  form.appendChild(br.cloneNode());
  form.appendChild(s);

  document.getElementsByTagName("body")[0].appendChild(form);

  //adding innerHTML:
  document.getElementById("label-record").innerHTML = "Record: ";
  document.getElementById("label-artist").innerHTML = "Artist: ";
  document.getElementById("label-come-out-date").innerHTML = "Come Out Year: ";
  document.getElementById("label-shelf").innerHTML = "Shelf: ";
  document.getElementById("label-borrow").innerHTML = "Borrow";

  document.getElementById("label-genre").innerHTML = "Genre: ";
  document.getElementById("rock-option").innerHTML = "Rock";
  document.getElementById("pop-option").innerHTML = "Pop";
  document.getElementById("punk-option").innerHTML = "Punk";
  document.getElementById("indie-option").innerHTML = "Indie";

  document
    .getElementById("enviar")
    .addEventListener("click", validateForm, false);
}
