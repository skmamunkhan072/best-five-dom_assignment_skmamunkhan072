// players name list  length  function
const selectListParentElement = document.getElementById("select-players-name");
function listItemsLength(event) {
  let listGetLength = event.children.length;
  return listGetLength;
}

function getFilldValue(idName) {
  const getInputFild = document.getElementById(idName);
  const perPlayersFildWorning = document.getElementById("per-player-worning");
  if (isNaN(getInputFild.value) || getInputFild.value === "") {
    const playerTotal = document.getElementById("player-budget-total");
    const playerTotalValue = (playerTotal.innerText = 00);
    perPlayersFildWorning.style.display = "block";
    getInputFild.value = "";
    return playerTotalValue;
  } else {
    const getValue = parseFloat(getInputFild.value);
    perPlayersFildWorning.style.display = "none";
    getInputFild.value = "";
    return getValue;
  }
}

function sumInputFildValue(event, value) {
  const getEleent = document.getElementById(event);
  const getEleentValue = parseFloat(getEleent.innerText);
  getEleent.innerText = value;
  return getEleentValue;
}

function getInputFildValue(IdName, numberWorning) {
  const inputFildPreviesValue = document.getElementById(IdName).value;
  if (isNaN(inputFildPreviesValue)) {
    return;
  } else {
    const inputFildValue = parseFloat(inputFildPreviesValue);
    inputFildPreviesValue.value = "";
    return inputFildValue;
  }
}
