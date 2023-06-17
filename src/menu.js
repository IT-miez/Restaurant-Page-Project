

import "./styles.css"
console.log("MENU test.js")

export function createMenu() {
    console.log("MENU test.js")

    const siteDiv = document.getElementById("content")

    const newDiv = document.createElement("div")
    newDiv.classList.add("menu-container")   
    newDiv.setAttribute("id", "currentContent")
    
    const firstPart = document.createElement("div")
    firstPart.classList.add("firstPart")
    
    let p1 = document.createElement("p")
    p1.textContent = "testi lokaatio 123 123"

    firstPart.appendChild(p1)

    newDiv.appendChild(firstPart)



    siteDiv.appendChild(newDiv)
}