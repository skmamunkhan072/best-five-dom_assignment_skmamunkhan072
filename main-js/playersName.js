// select players name and display players name js

const playerCardbutton = document.querySelectorAll(
  ".players-card-wreper .select-btn"
);
let listLength = listItemsLength(selectListParentElement);
for (const items of playerCardbutton) {
  items.addEventListener("click", function (event) {
    const tarGetParentElement = event.target.parentElement;
    const tarGetPlayersName = tarGetParentElement.children[0].innerText;
    const worning = document.getElementById("text-worning");
    if (listLength < 5) {
      selectListParentElement.innerHTML += `  <li class="font-normal my-5">
                <span class="font-extrabold mr-5">${(listLength += 1)}.</span> ${tarGetPlayersName}
              </li>`;
      const selectButton = event.target;
      selectButton.setAttribute("disabled", true);
      worning.style.display = "none";
    } else {
      worning.style.display = "block";
      selectButton.removeAttribute("disabled", false);
    }
  });
}
