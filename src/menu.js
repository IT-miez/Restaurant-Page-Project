

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

    for(let i = 0; i<5; i++) {
        let menuitem = document.createElement("div")
        menuitem.classList.add("menuitem")

        let menuitem_upperpart = document.createElement("div")
        menuitem_upperpart.classList.add("menuitem-upperpart")

        let p0 = document.createElement("p")
        p0.classList.add("menuitem-header")
        p0.textContent = "Hamburger"
        let priceText = document.createElement("p")
        priceText.classList.add("menuitem-price")
        priceText.textContent = "€11.90"

        menuitem_upperpart.appendChild(p0)
        menuitem_upperpart.appendChild(priceText)

        let menuitem_lowerpart = document.createElement("div")
        menuitem_lowerpart.classList.add("menuitem-lowerpart")

        let p2 = document.createElement("p")
        p2.classList.add("menuitem-description")
        p2.textContent = "Buns, patty, tomato, onions, lettuce, and our secret family recipe"

        menuitem_lowerpart.appendChild(p2)
        menuitem_upperpart.appendChild(p0)
        menuitem_upperpart.appendChild(priceText)
        menuitem.appendChild(menuitem_upperpart)
        menuitem.appendChild(menuitem_lowerpart)
        firstPart.appendChild(menuitem)
    }
    
    

    //firstPart.appendChild(p1)

    newDiv.appendChild(firstPart)



    siteDiv.appendChild(newDiv)
}