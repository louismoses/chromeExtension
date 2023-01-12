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

// 5:35:02

// scratch section ---------------
const recipient = "James";
const sender = "Moses";

const email = `hey ${recipient}!

How is it going? 

Cheers ${sender}
`;
console.log(email);
// end scratch section ---------------
