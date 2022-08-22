const playerCardbutton = document.querySelectorAll(
  ".players-card-wreper .select-btn"
);
for (const items of playerCardbutton) {
  items.addEventListener("click", function (event) {
    const playersNameElement = document.querySelectorAll(".player-name");
    const tarGetParentElement = event.target.parentElement;
    const tarGetChildElement = tarGetParentElement.children[0].innerText;
    console.log(tarGetChildElement);
  });
}
