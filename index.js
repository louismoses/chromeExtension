let myLeads = ["awesomelead.com", "epicland.com", "greatland.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
    ulEl.textContent += myLeads[i] + ", ";
  }
});

// 5:06:47

// scratch section ---------------

// end scratch section ---------------
