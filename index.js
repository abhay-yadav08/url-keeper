
let myUrls = [];

const inputEl = document.querySelector("#input-el");
const btn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myUrls"));

if (leadsFromLocalStorage) {
    myUrls = leadsFromLocalStorage;
    renderFxn(myUrls);
}

const tabs = [
    { url: "https://www.google.co.in/" },
]

tabBtn.addEventListener("click", () => {

    // get current tab url 
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        let activeTab = tabs[0]
        let activeTabId = activeTab.id // or do whatever you need
    })

    myUrls.push(tabs[0].url);
    localStorage.setItem("myUrls", JSON.stringify(myUrls));
    renderFxn(myUrls)
})


deleteBtn.addEventListener("click", () => {

    localStorage.clear();
    myUrls = [];
    renderFxn(myUrls);
})

btn.addEventListener("click", () => {

    let inputValue = inputEl.value;
    myUrls.push(inputValue);
    inputEl.value = "";
    localStorage.setItem("myUrls", JSON.stringify(myUrls));
    renderFxn(myUrls)
})


function renderFxn(myArr) {
    let listItems = "";
    for (let i = 0; i < myArr.length; i++) {
        listItems += `<li><a href=${myArr[i]} target=_blank>${myArr[i]}</a></li>`;
    }

    ulEl.innerHTML = listItems;
}

