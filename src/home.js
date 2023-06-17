

import "./styles.css";


console.log("Testi juttu")

export function createSite() {

    const siteDiv = document.getElementById("content")
    /*
    let headerBar = document.createElement("div")
    let header = document.createElement("h1")

    headerBar.classList.add("headerBar")

    header.textContent = "Restaurant"
    header.classList.add("main-header")

    let tabs_header = document.createElement("div")
    tabs_header.classList.add("tabs-header")
    tabs_header.setAttribute("id", "tabs-header")

    let array = ["Home", "Menu", "Contact"]
    let buttonIdArray = ["home", "menu", "contact"]

    for(let i = 0; i < 3; i++) {
        let newBtn = document.createElement("button")
        newBtn.textContent = array[i]
        newBtn.classList.add("tab")
        if(i == 0) {
            newBtn.classList.add("active")
        }
        newBtn.setAttribute("id", buttonIdArray[i])
        tabs_header.appendChild(newBtn)
    }
    
    headerBar.appendChild(header)
    headerBar.appendChild(tabs_header)
    */

    //background-div and image
    let newDiv = document.createElement("div")
    newDiv.classList.add("background-div")
    newDiv.setAttribute("id", "currentContent")

    let data_container = document.createElement("div")
    data_container.classList.add("data-container")

    let testDiv = document.createElement("div")
    testDiv.textContent = "asd asd asd "
    testDiv.classList.add("testi")

    //siteDiv.appendChild(headerBar)

    //data blocks
    let headerArray = ["Stakes", "Burgers", "Kebabs", "Pizzas"]
    let subtextArray = ["We prepare steaks and skewers in the fiery glow of a Turkish copper grill.", 
    "The size of our burgers has always been praised. They are guaranteed to satisfy even the biggest appetite.",
    "Our kebab dishes have been receiving praise around town - come and taste for yourself!",
    "Our pizzas, including our specialty pizzas, are generously topped without skimping on ingredients."]

    for(let i = 0; i < 4; i++) {
        let newItem = document.createElement("div")
        let newIcon = document.createElement("img")
        let newHeader = document.createElement("h3")
        let subText = document.createElement("p")

        newHeader.textContent = headerArray[i]
        newHeader.classList.add("sub-header")
        subText.textContent = subtextArray[i]
        subText.classList.add("subtext")
        newIcon.src = "../img/restaurant-pizza-background.jpg"
        newIcon.classList.add("data-block-img")

        newItem.appendChild(newIcon)
        newItem.appendChild(newHeader)
        newItem.appendChild(subText)
        newItem.classList.add("data-block")

        data_container.appendChild(newItem)
    }

    newDiv.appendChild(data_container)
    siteDiv.appendChild(newDiv)

    //siteDiv.appendChild(testDiv)
    console.log("APUA")
}
