const playerCardbutton = document.querySelectorAll(
  ".players-card-wreper .select-btn"
);
const selectListParentElement = document.getElementById("select-players-name");
let listGetLength = selectListParentElement.children.length;
let listLength = listGetLength;
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
      console.log(selectButton);
      worning.style.display = "none";
    } else {
      worning.style.display = "block";
      selectButton.removeAttribute("disabled", false);
    }
  });
}
