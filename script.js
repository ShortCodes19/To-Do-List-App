const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("btn");
const listContainer = document.querySelector(".list-container");
searchBtn.addEventListener("click", () => {
  if (searchBox.value === "") {
    alert("You must write something!");
  } else {
    const li = document.createElement("li");
    li.innerHTML = searchBox.value;
    listContainer.appendChild(li);

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  searchBox.value = "";
  saveData();
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

getData();
