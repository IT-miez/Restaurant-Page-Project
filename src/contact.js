

import "./styles.css"
import locationimage from "../img/map-marker.svg"
import phoneimage from "../img/phone.svg"
import emailimage from "../img/email.svg"

export function createContactPage() {
    console.log("CONTACT test.js")

    const siteDiv = document.getElementById("content")
    
    const upperContainer = document.createElement("div")
    upperContainer.classList.add("upper-container")

    const newDiv = document.createElement("div")
    newDiv.classList.add("contact-container")   
    newDiv.setAttribute("id", "currentContent")
    
    const firstPart = document.createElement("div")
    firstPart.classList.add("sub-part")
    let location_icon = document.createElement("img")
    location_icon.classList.add("icon")
    location_icon.src = locationimage
    
    let p1 = document.createElement("p")
    p1.textContent = "testi lokaatio 123 123"

    const secondPart = document.createElement("div")
    secondPart.classList.add("sub-part")
    let phone_icon = document.createElement("img")
    phone_icon.classList.add("icon")
    phone_icon.src = phoneimage

    let p2 = document.createElement("p")
    p2.textContent = "testi lokaatio 123 123"

    const thirdPart = document.createElement("div")
    thirdPart.classList.add("sub-part")
    let email_icon = document.createElement("img")
    email_icon.classList.add("icon")
    email_icon.src = emailimage

    let p3 = document.createElement("p")
    p3.textContent = "testfirstname.testlastname@company.email.com"




    firstPart.appendChild(location_icon)
    firstPart.appendChild(p1)

    secondPart.appendChild(phone_icon)
    secondPart.appendChild(p2)

    thirdPart.appendChild(email_icon)
    thirdPart.appendChild(p3)

    newDiv.appendChild(firstPart)
    newDiv.appendChild(secondPart)
    newDiv.appendChild(thirdPart)
    upperContainer.appendChild(newDiv)


    siteDiv.appendChild(upperContainer)
}