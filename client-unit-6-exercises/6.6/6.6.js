window.onload = initialize;

const getNumberOfParagraphs = () => {
  const numberOfPs = document.getElementsByTagName("p").length;
  let div = document.createElement("div");
  div.setAttribute("id", "number-of-ps");
  document.getElementById(`results`).appendChild(div);
  document.getElementById("number-of-ps").innerHTML = `Nº OF Ps: ${numberOfPs}`;
  //BR:
  let br = document.createElement("br");
  document.getElementById(`results`).appendChild(br);
  //RETURN:
  return numberOfPs;
};

const getTextOfSecondParagraph = () => {
  const text = document.getElementsByTagName("p")[1].textContent;
  let div = document.createElement("div");
  div.setAttribute("id", "text-second-p");
  document.getElementById(`results`).appendChild(div);
  document.getElementById("text-second-p").innerHTML = `TEXT OF 2ª P: ${text}`;
  //BR:
  let br = document.createElement("br");
  document.getElementById(`results`).appendChild(br);
  //RETURN:
  return text;
};

const getNumberOfLinks = () => {
  const numberOfAs = document.getElementsByTagName("a").length;
  let div = document.createElement("div");
  div.setAttribute("id", "number-of-as");
  document.getElementById(`results`).appendChild(div);
  document.getElementById(
    "number-of-as"
  ).innerHTML = `Nº OF A TAGS: ${numberOfAs}`;
  //BR:
  let br = document.createElement("br");
  document.getElementById(`results`).appendChild(br);
  //RETURN:
  return numberOfAs;
};

const getHrefOfFirstLink = () => {
  const a = document.getElementsByTagName("a")[0];
  const href = a.href;
  let div = document.createElement("div");
  div.setAttribute("id", "href-of-first-link");
  document.getElementById(`results`).appendChild(div);
  document.getElementById(
    "href-of-first-link"
  ).innerHTML = `HREF OF 1º A TAG: ${href}`;
  //BR:
  let br = document.createElement("br");
  document.getElementById(`results`).appendChild(br);
  //RETURN:
  return href;
};

const getHrefOfPenultimateLink = () => {
  const position = document.getElementsByTagName("a").length - 2;
  const a = document.getElementsByTagName("a")[position];
  const href = a.href;
  let div = document.createElement("div");
  div.setAttribute("id", "href-of-penultimate-link");
  document.getElementById(`results`).appendChild(div);
  document.getElementById(
    "href-of-penultimate-link"
  ).innerHTML = `HREF OF PENULTIMATE A TAG: ${href}`;
  //BR:
  let br = document.createElement("br");
  document.getElementById(`results`).appendChild(br);
  //RETURN:
  return href;
};

const getNumberOfLinksToWikiMunicipio = () => {
  const lengthOfTags = document.getElementsByTagName("a").length;
  let numberOfAsToWikiMunicipio = 0;
  for (let index = 0; index < lengthOfTags; index++) {
    if (
      document.getElementsByTagName("a")[index].href ===
      "https://en.wikipedia.org/wiki/Municipio"
    ) {
      numberOfAsToWikiMunicipio++;
    }
  }
  let div = document.createElement("div");
  div.setAttribute("id", "number-of-as-to-wiki-municipio");
  document.getElementById(`results`).appendChild(div);
  document.getElementById(
    "number-of-as-to-wiki-municipio"
  ).innerHTML = `Nº OF A TAGS TO WIKI/MUNICIPIO: ${numberOfAsToWikiMunicipio}`;
  //BR:
  let br = document.createElement("br");
  document.getElementById(`results`).appendChild(br);
  //RETURN:
  return numberOfAsToWikiMunicipio;
};

const getNumberOfLinksOfFirstParagraph = () => {
  const lengthOfTags = document.getElementsByTagName("a").length;
  let numberOfAsInsideFirstP = 0;
  for (let index = 0; index < lengthOfTags; index++) {
    if (
      document.getElementsByTagName("a")[index].parentElement ===
      document.getElementsByTagName("p")[0]
    ) {
      numberOfAsInsideFirstP++;
    }
  }
  let div = document.createElement("div");
  div.setAttribute("id", "number-of-as-to-inside-first-p");
  document.getElementById(`results`).appendChild(div);
  document.getElementById(
    "number-of-as-to-inside-first-p"
  ).innerHTML = `Nº OF A TAGS INSIDE 1º P: ${numberOfAsInsideFirstP}`;
  //BR:
  let br = document.createElement("br");
  document.getElementById(`results`).appendChild(br);
  //RETURN:
  return numberOfAsInsideFirstP;
};

function initialize() {
  getNumberOfParagraphs();
  getTextOfSecondParagraph();
  getNumberOfLinks();
  getHrefOfFirstLink();
  getHrefOfPenultimateLink();
  getNumberOfLinksToWikiMunicipio();
  getNumberOfLinksOfFirstParagraph();
}
