
let myUrls = [];

const inputEl = document.querySelector("#input-el");
const btn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myUrls"));

if (leadsFromLocalStorage) {
    myUrls = leadsFromLocalStorage;
    renderFxn(myUrls);
}

deleteBtn.addEventListener("click", () => {

    localStorage.clear();
    myUrls = [];
    renderFxn(myUrls);
})

btn.addEventListener("click", () => {
    // console.log("button clicked");

    let inputValue = inputEl.value;
    myUrls.push(inputValue);
    inputEl.value = "";


    localStorage.setItem("myUrls", JSON.stringify(myUrls));


    renderFxn(myUrls)
    // console.log(myLeads);

    console.log(localStorage.getItem("myUrls"));

})


function renderFxn(myArr) {
    let listItems = "";
    for (let i = 0; i < myArr.length; i++) {
        listItems += `<li><a href=${myArr[i]} target=_blank>${myArr[i]}</a></li>`;
    }

    ulEl.innerHTML = listItems;
}

