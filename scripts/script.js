import {myProjectsContainerArray, technicalProjects} from "./dataCards.js"
"use strict"

// toggleTheme
const toggleTheme = document.querySelector(".toggleTheme")
const btnToggleMode = document.querySelector("#btnToggleMode")
btnToggleMode.addEventListener("click", ()=> {
    if(btnToggleMode.className === "fa-solid fa-cloud-sun"){
        btnToggleMode.className = "fa-solid fa-cloud-moon"
        document.body.className = "darkModeTheme"
        btnToggleMode.style.animationName = "toggleThemeAnimation"
    }
    else{
        btnToggleMode.className = "fa-solid fa-cloud-sun"
        document.body.className = "lightModeTheme"
        btnToggleMode.style.animationName = "toggleThemeAnimationReverse"
    }
})

document.addEventListener("DOMContentLoaded", ()=>{
    loadDataCards(myProjectsContainer, myProjectsContainerArray)
})

// dataCards
function loadDataCards (destiny, fileArray){
    let cardDelay = 0.2
    for(let indexCard = 0; indexCard<fileArray.length; indexCard++){
        const newCard = `
            <div class="cardProject" style="animation-delay: ${cardDelay}s" id="${fileArray[indexCard].cardId}">
                <img src="${fileArray[indexCard].imgUrl}" alt="${fileArray[indexCard].imgAlt}">
                <h3><span></span>${fileArray[indexCard].title}</h3>
            </div>
        `
        destiny.innerHTML = destiny.innerHTML + newCard
        cardDelay += 0.3
    }
}

// dataCards
const myProjectsContainer = document.querySelector("#myProjectsContainer")

loadDataCards(myProjectsContainer, myProjectsContainerArray)

myProjectsContainer.addEventListener("click", (event)=>{
    event.preventDefault()
    const target = event.target
    const targetId = target.closest("div").id
    expandCard(targetId, myProjectsContainerArray)
})

function expandCard(targetId, fileArray){
    const indexCard = targetId
    
    const bodyCardExpanded = document.createElement("div")
    bodyCardExpanded.setAttribute("class", "bodyCardExpanded")

    const cardDiv = document.createElement("div")
    cardDiv.setAttribute("class","cardExpanded")

    const cardTitle = document.createElement("h3")
    cardTitle.textContent = fileArray[indexCard].title

    const cardImg = document.createElement("img")
    cardImg.setAttribute("src", fileArray[indexCard].imgUrl)
    cardImg.setAttribute("alt", fileArray[indexCard].imgAlt)

    const cardDescription = document.createElement(`p`)
    cardDescription.textContent = fileArray[indexCard].description

    const cardClose = document.createElement("i")
    cardClose.setAttribute("class", "fa-solid fa-x")

    const cardtechnologies = document.createElement("div")
    cardtechnologies.setAttribute("class", "cardTechnologies")
    for(let indexTechnologies = 0; indexTechnologies<fileArray[indexCard].technologies.length; indexTechnologies++){
        const technolgyUsed = document.createElement("p")
        technolgyUsed.textContent = fileArray[indexCard].technologies[indexTechnologies]
        technolgyUsed.setAttribute("class",`${fileArray[indexCard].technologies[indexTechnologies]}Class`)
        cardtechnologies.append(technolgyUsed)
    }

    cardDiv.append(cardTitle)
    cardDiv.append(cardImg) 
    cardDiv.append(cardtechnologies)
    cardDiv.append(cardDescription)
    cardDiv.append(cardClose)
    bodyCardExpanded.append(cardDiv)
    document.body.append(bodyCardExpanded)
    
    cardClose.addEventListener("click", (event)=>{
        event.preventDefault()
        const target = event.target
        const divThatWillBeDeleted = target.closest("div")
        divThatWillBeDeleted.style.animationDuration = "0.3s"
        divThatWillBeDeleted.style.animationName = "desappear"
        bodyCardExpanded.style.animationDuration = "0.3s"
        bodyCardExpanded.style.animationName = "desappear"
        setInterval(() => {
            divThatWillBeDeleted.remove()
            bodyCardExpanded.remove()
        }, 500);
    })
}

// scrollSections
function changeToProjectsSection(){
    document.querySelector(".contentScroll").style.marginLeft = "-1024px"
    document.querySelector(".scrollProjects").innerHTML = ""
    loadDataCards(myProjectsContainer, myProjectsContainerArray)
    document.querySelector("#headerRadio02").checked = true
}

const seeMyProjectsBtn = document.querySelector(".seeMyProjectsBtn")
seeMyProjectsBtn.addEventListener("click", ()=>{
    changeToProjectsSection()
})
document.querySelector("#headerProjectsP").addEventListener("click", ()=>changeToProjectsSection())

document.querySelector("#headerAboutMeP").addEventListener("click", ()=>{
    document.querySelector("#headerRadio01").checked = true
    document.querySelector(".contentScroll").style.marginLeft = "0"
})

document.querySelector("#headerProjectsP").addEventListener("click", ()=>{
    changeToProjectsSection()
})

document.querySelector("#headerServicesP").addEventListener("click", ()=>{
    document.querySelector("#headerRadio03").checked = true
    document.querySelector(".contentScroll").style.marginLeft = "-2048px"
})

document.querySelector("#headerFormationsP").addEventListener("click", ()=>{
    document.querySelector("#headerRadio04").checked = true
    document.querySelector(".contentScroll").style.marginLeft = "-3072px"
})