let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("mySponsors"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("mySponsors", JSON.stringify(myLeads));
  renderLeads();
  console.log(localStorage.getItem("myLeads"));
});

function renderLeads() {
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
      <li>
        <a target="_blank" href="${myLeads[i]}">
        ${myLeads[i]}
        </a>
      </li>
      `;
  }
  ulEl.innerHTML = listItems;
}

// 6:03:00

// scratch section ---------------
let trueOfFalse = Boolean("");
console.log(trueOfFalse);
// end scratch section ---------------
