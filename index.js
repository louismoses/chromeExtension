let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
  }
  ulEl.innerHTML = listItems;
}

// 5:26:40

// scratch section ---------------
const container = document.getElementById("container");
container.innerHTML = "<button onclick='Buy()' > Buy! </buttton>";

function Buy() {
  container.innerHTML += "<p> Thank you for buying! </p>";
}

// end scratch section ---------------
