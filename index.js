let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("mySponsors"));
const tabs = [
  {
    url: "https://www.linkedin.com/in/lm-rait/",
  },
];

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a target="_blank" href="${leads[i]}">
        ${leads[i]}
        </a>
      </li>
      `;
  }
  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("mySponsors", JSON.stringify(myLeads));
  render(myLeads);
});

tabBtn.addEventListener("click", function () {
  console.log(tabs[0]);
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

// 6:03:00

// scratch section ---------------

// end scratch section ---------------
