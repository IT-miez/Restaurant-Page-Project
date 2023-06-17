
import "./styles.css"
import { createSite } from "./home.js"
import { createMenu } from "./menu.js"
import { createContactPage } from "./contact"

export function createHeader () {
    // Create headerBar
    const siteDiv = document.getElementById("content")

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
    siteDiv.appendChild(headerBar)

    // Event listeners to headerBar
    function resetActiveClass() {
        const btnContainer = document.getElementById("tabs-header")
        const btns = btnContainer.querySelectorAll('button, .your-element-class')
        btns.forEach(element => {
            if(element.classList.contains("active") ) {
                element.classList.remove("active")
            }
        })
    }

    let home_button = document.getElementById("home")
    home_button.addEventListener("click", () => {
        resetActiveClass()
        let deleteThis = document.getElementById("currentContent")
        deleteThis.remove()
        createSite()
        home_button.classList.toggle("active")
    })

    let menu_button = document.getElementById("menu")
    menu_button.addEventListener("click", () => {
        resetActiveClass()
        let deleteThis = document.getElementById("currentContent")
        deleteThis.remove()
        createMenu()
        menu_button.classList.toggle("active")
    })

    let contact_button = document.getElementById("contact")
    contact_button.addEventListener("click", () => {
        resetActiveClass()
        let deleteThis = document.getElementById("currentContent")
        deleteThis.remove()
        createContactPage()
        contact_button.classList.toggle("active")
    })
}

