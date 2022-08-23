// budget palyer button function

document.getElementById("budget-player").addEventListener("click", function () {
  const selectListParentElement = document.getElementById(
    "select-players-name"
  );

  const playerListLength = listItemsLength(selectListParentElement);
  const perPlayersFild = getFilldValue("per-player");
  const selectPlayerWorning = document.getElementById("text-worning");
  if (playerListLength === 0) {
    selectPlayerWorning.style.display = "block";
  } else {
    selectPlayerWorning.style.display = "none";
  }
  const playersTotalPrevies = sumInputFildValue("player-budget-total");
  const playersLength = listItemsLength(selectListParentElement);
  const totalExpenses = playersLength * perPlayersFild;
  const setTotalExpenses = sumInputFildValue(
    "player-budget-total",
    totalExpenses
  );
});

// Manager and Coach clculetor function starts

document.getElementById("total-btn").addEventListener("click", function () {
  const playersTotalPreviesString = document.getElementById(
    "player-budget-total"
  ).innerText;
  const getManagerFild = document.getElementById("manager-fild");
  const getCoachrrFild = document.getElementById("coachr-fild");
  const inputFildWorning = document.getElementById("coach-fild-worning");
  const inputNumberWorning = document.getElementById(
    "input-fild-worning-number"
  );

  const playersTotalPrevies = parseFloat(playersTotalPreviesString);
  const managerFildValue = getInputFildValue(
    "manager-fild",
    inputNumberWorning
  );
  const coachrFildValue = getInputFildValue("coachr-fild", inputNumberWorning);

  if (
    typeof managerFildValue !== "undefined" &&
    typeof coachrFildValue !== "undefined"
  ) {
    inputNumberWorning.style.display = "none";
    if (isNaN(managerFildValue)) {
      inputFildWorning.style.display = "block";
      getManagerFild.value = "";
      getCoachrrFild.value = "";
    } else {
      inputFildWorning.style.display = "none";
      const sumTotal = playersTotalPrevies + managerFildValue + coachrFildValue;
      sumInputFildValue("all-sum-total", sumTotal);
      getManagerFild.value = "";
      getCoachrrFild.value = "";
    }
  } else {
    inputFildWorning.style.display = "none";
    inputNumberWorning.style.display = "block";
    getManagerFild.value = "";
    getCoachrrFild.value = "";
  }
});
