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
  const playersTotalPrevies = parseFloat(playersTotalPreviesString);

  const managerFildValue = getInputFildValue("manager-fild");
  const coachrFildValue = getInputFildValue("coachr-fild");
  const inputFildWorning = document.getElementById("coach-fild-worning");
  if (isNaN(managerFildValue, coachrFildValue)) {
    inputFildWorning.style.display = "block";
    console.log("hello");
  } else {
    inputFildWorning.style.display = "none";
    const sumTotal = playersTotalPrevies + managerFildValue + coachrFildValue;
    sumInputFildValue("all-sum-total", sumTotal);
  }
});
