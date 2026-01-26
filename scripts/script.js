import {myProjectsContainerArray, technicalProjects, formations} from "./dataCards.js"
"use strict"

// toggleTheme
const toggleTheme = document.querySelector(".toggleTheme")
toggleTheme.addEventListener("click", ()=> {
    if(btnToggleMode.className === "fa-solid fa-cloud-sun"){
        btnToggleMode.className = "fa-solid fa-cloud-moon"
        document.body.className = "darkModeTheme"
        btnToggleMode.style.animationName = "toggleThemeAnimation"
        btnToggleMode.style.animationDirection = "normal"
    }
    else{
        btnToggleMode.className = "fa-solid fa-cloud-sun"
        document.body.className = "lightModeTheme"
        btnToggleMode.style.animationName = "toggleThemeAnimationReverse"
    }
})

// dataCards
function loadDataCards (destiny, fileArray){
    let cardDelay = 0.2
    for(let indexCard = 0; indexCard<fileArray.length; indexCard++){
        const firstImage = fileArray[indexCard].images[0]
        const newCard = `
            <div class="cardProject" style="animation-delay: ${cardDelay}s" id="${fileArray}-${fileArray[indexCard].cardId}">
                <img src="${firstImage.url}" alt="${firstImage.alt}">
                <h3><span></span>${fileArray[indexCard].title}</h3>
                <i class="fa-solid fa-arrow-pointer cardPointer"></i>
            </div>
        `
        destiny.innerHTML = destiny.innerHTML + newCard
        cardDelay += 0.3
    }
}

// projectCards
const myProjectsContainer = document.querySelector("#myProjectsContainer")
const technicalProjectsContainer = document.querySelector("#technicalProjectsContainer")
const formationsContainer = document.querySelector(".formationContainer")

document.addEventListener("DOMContentLoaded", ()=>{
    loadDataCards(myProjectsContainer, myProjectsContainerArray)
    loadDataCards(technicalProjectsContainer, technicalProjects)
    if(formationsContainer){
        loadFormations()
    }
})

// Carrega os dados de formações
function loadFormations(){
    formationsContainer.innerHTML = ''
    for(const f of formations){
        const capacitations = f.capacitations && f.capacitations.length ? `<p class="capacitations">${f.capacitations.join(' • ')}</p>` : ''
        const card = `
            <div class="formationCard">
                <h3>${f.course}</h3>
                <h4>${f.instituitionName} <span>${f.period}</span></h4>
                ${capacitations}
                <p class="formationDescription">${f.description}</p>
            </div>
        `
        formationsContainer.innerHTML += card
    }
}

myProjectsContainer.addEventListener("click", (event)=>{
    const target = event.target
    const targetId = target.closest("div").id
    expandCard(targetId, myProjectsContainerArray)
})

technicalProjectsContainer.addEventListener("click", (event)=>{
    const target = event.target
    const targetId = target.closest("div").id
    expandCard(targetId, technicalProjects)
})

//Função para expandir o card
function expandCard(targetId, fileArray){
    const indexCard = targetId.split('-').pop()
    const project = fileArray[indexCard]
    let currentImageIndex = 0
    
    const bodyCardExpanded = document.createElement("div")
    bodyCardExpanded.setAttribute("class", "bodyCardExpanded")

    const cardDiv = document.createElement("div")
    cardDiv.setAttribute("class","cardExpanded")

    const cardTitle = document.createElement("h3")
    cardTitle.textContent = project.title

    // Image Carousel Container
    const carouselContainer = document.createElement("div")
    carouselContainer.setAttribute("class", "carouselContainer")

    const cardImg = document.createElement("img")
    cardImg.setAttribute("src", project.images[currentImageIndex].url)
    cardImg.setAttribute("alt", project.images[currentImageIndex].alt)
    cardImg.setAttribute("class", "carouselImage")
    cardImg.style.cursor = "pointer"
    
    // Arrow pointer icon to indicate expandable image
    const expandIcon = document.createElement("i")
    expandIcon.setAttribute("class", "fa-solid fa-arrow-pointer expandImageIcon")
    
    // Click image to open fullscreen carousel
    cardImg.addEventListener("click", ()=> {
        openFullscreenCarousel()
    })
    
    carouselContainer.append(cardImg)
    carouselContainer.append(expandIcon)

    // Navigation Buttons (only if more than one image)
    let indicatorsContainer;
    if(project.images.length > 1){
        const prevBtn = document.createElement("button")
        prevBtn.setAttribute("class", "carouselBtn prevBtn")
        prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>'
        prevBtn.addEventListener("click", (e)=> {
            e.stopPropagation()
            currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length
            updateCarousel()
        })

        const nextBtn = document.createElement("button")
        nextBtn.setAttribute("class", "carouselBtn nextBtn")
        nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'
        nextBtn.addEventListener("click", (e)=> {
            e.stopPropagation()
            currentImageIndex = (currentImageIndex + 1) % project.images.length
            updateCarousel()
        })

        carouselContainer.append(prevBtn)
        carouselContainer.append(nextBtn)

        // Image Indicators/Dots
        indicatorsContainer = document.createElement("div")
        indicatorsContainer.setAttribute("class", "carouselIndicators")
        
        for(let i = 0; i < project.images.length; i++){
            const dot = document.createElement("button")
            dot.setAttribute("class", `indicatorDot ${i === 0 ? 'active' : ''}`)
            dot.addEventListener("click", (e)=> {
                e.stopPropagation()
                currentImageIndex = i
                updateCarousel()
            })
            indicatorsContainer.append(dot)
        }
        carouselContainer.append(indicatorsContainer)
    }

    // Function to update carousel display
    function updateCarousel(){
        cardImg.style.animationName = "carouselFadeOut"
        cardImg.style.animationDuration = "0.3s"
        cardImg.style.animationTimingFunction = "linear"
        cardImg.style.animationFillMode = "forwards"
        
        setTimeout(() => {
            cardImg.src = project.images[currentImageIndex].url
            cardImg.alt = project.images[currentImageIndex].alt
            
            cardImg.style.animationName = "carouselFadeIn"
            cardImg.style.animationDuration = "0.3s"
            cardImg.style.animationTimingFunction = "linear"
            cardImg.style.animationFillMode = "forwards"
        }, 150)
        
        // Update active dot
        if(indicatorsContainer){
            const dots = indicatorsContainer.querySelectorAll(".indicatorDot")
            dots.forEach((dot, index) => {
                dot.classList.toggle("active", index === currentImageIndex)
            })
        }
    }

    // Fullscreen carousel function
    function openFullscreenCarousel(){
        const fullscreenCarouselBody = document.createElement("div")
        fullscreenCarouselBody.setAttribute("class", "fullscreenCarouselBody")

        const fullscreenContainer = document.createElement("div")
        fullscreenContainer.setAttribute("class", "fullscreenCarouselContainer")

        const fullscreenImg = document.createElement("img")
        fullscreenImg.setAttribute("src", project.images[currentImageIndex].url)
        fullscreenImg.setAttribute("alt", project.images[currentImageIndex].alt)
        fullscreenImg.setAttribute("class", "fullscreenCarouselImage")
        fullscreenContainer.append(fullscreenImg)

        // Fullscreen prev button
        const fullscreenPrevBtn = document.createElement("button")
        fullscreenPrevBtn.setAttribute("class", "carouselBtn prevBtn")
        fullscreenPrevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>'
        fullscreenPrevBtn.addEventListener("click", (e)=> {
            e.stopPropagation()
            currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length
            updateFullscreenImage()
        })

        // Fullscreen next button
        const fullscreenNextBtn = document.createElement("button")
        fullscreenNextBtn.setAttribute("class", "carouselBtn nextBtn")
        fullscreenNextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'
        fullscreenNextBtn.addEventListener("click", (e)=> {
            e.stopPropagation()
            currentImageIndex = (currentImageIndex + 1) % project.images.length
            updateFullscreenImage()
        })

        fullscreenContainer.append(fullscreenPrevBtn)
        fullscreenContainer.append(fullscreenNextBtn)

        // Fullscreen indicators
        const fullscreenIndicators = document.createElement("div")
        fullscreenIndicators.setAttribute("class", "carouselIndicators")
        
        for(let i = 0; i < project.images.length; i++){
            const dot = document.createElement("button")
            dot.setAttribute("class", `indicatorDot ${i === currentImageIndex ? 'active' : ''}`)
            dot.addEventListener("click", (e)=> {
                e.stopPropagation()
                currentImageIndex = i
                updateFullscreenImage()
            })
            fullscreenIndicators.append(dot)
        }
        fullscreenContainer.append(fullscreenIndicators)

        function updateFullscreenImage(){
            fullscreenImg.style.animationName = "carouselFadeOut"
            fullscreenImg.style.animationDuration = "0.3s"
            fullscreenImg.style.animationTimingFunction = "linear"
            fullscreenImg.style.animationFillMode = "forwards"
            
            setTimeout(() => {
                fullscreenImg.src = project.images[currentImageIndex].url
                fullscreenImg.alt = project.images[currentImageIndex].alt
                
                fullscreenImg.style.animationName = "carouselFadeIn"
                fullscreenImg.style.animationDuration = "0.3s"
                fullscreenImg.style.animationTimingFunction = "linear"
                fullscreenImg.style.animationFillMode = "forwards"
                
                updateFullscreenDots()
            }, 150)
        }

        function updateFullscreenDots(){
            const dots = fullscreenIndicators.querySelectorAll(".indicatorDot")
            dots.forEach((dot, index) => {
                dot.classList.toggle("active", index === currentImageIndex)
            })
        }

        // Close button
        const fullscreenClose = document.createElement("i")
        fullscreenClose.setAttribute("class", "fa-solid fa-x")
        fullscreenClose.style.position = "absolute"
        fullscreenClose.style.top = "2rem"
        fullscreenClose.style.right = "2rem"
        fullscreenClose.style.fontSize = "2rem"
        fullscreenClose.style.cursor = "pointer"
        fullscreenClose.style.color = "white"
        fullscreenClose.style.zIndex = "1000"
        fullscreenClose.addEventListener("click", ()=> {
            fullscreenCarouselBody.classList.add("exitAnimation")
            setTimeout(() => {
                fullscreenCarouselBody.remove()
            }, 300)
        })

        fullscreenContainer.append(fullscreenClose)
        fullscreenCarouselBody.append(fullscreenContainer)
        document.body.append(fullscreenCarouselBody)

        // Close on background click
        fullscreenCarouselBody.addEventListener("click", (event)=> {
            if(event.target === fullscreenCarouselBody){
                fullscreenCarouselBody.classList.add("exitAnimation")
                setTimeout(() => {
                    fullscreenCarouselBody.remove()
                }, 300)
            }
        })
    }

    const cardDescription = document.createElement("p")
    cardDescription.textContent = project.description

    const cardClose = document.createElement("i")
    cardClose.setAttribute("class", "fa-solid fa-x")

    const cardtechnologies = document.createElement("div")
    cardtechnologies.setAttribute("class", "cardTechnologies")
    for(let indexTechnologies = 0; indexTechnologies<project.technologies.length; indexTechnologies++){
        const technolgyUsed = document.createElement("p")
        technolgyUsed.textContent = project.technologies[indexTechnologies]
        technolgyUsed.setAttribute("class",`${project.technologies[indexTechnologies]}Class`)
        cardtechnologies.append(technolgyUsed)
    }

    cardDiv.append(cardTitle)
    cardDiv.append(carouselContainer) 
    cardDiv.append(cardtechnologies)
    cardDiv.append(cardDescription)
    cardDiv.append(cardClose)
    bodyCardExpanded.append(cardDiv)
    document.body.append(bodyCardExpanded)
    
    bodyCardExpanded.addEventListener("click", (event)=>{
        const target = event.target
        if(target === bodyCardExpanded || target === cardClose){
            cardDiv.style.animationDuration = "0.3s"
            cardDiv.style.animationName = "desappear"
            bodyCardExpanded.style.animationDuration = "0.3s"
            bodyCardExpanded.style.animationName = "desappearV2"
            setTimeout(() => {
                cardDiv.remove()
                bodyCardExpanded.remove()
            }, 500);
            }
        })
}

// scrollSections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const radio = document.querySelector(
        `input[type="radio"][data-section="${id}"]`
      );

      if (radio) {
        radio.checked = true;
      }
    }
    });
  },
  {
    threshold: 0.5
  }
);

const apresentationSection = document.querySelector(".apresentation")
const projectsSection = document.querySelector(".projects")
const servicesSection = document.querySelector(".services")
const formationsSection = document.querySelector(".formations")
const sections = [apresentationSection, projectsSection, servicesSection, formationsSection]
sections.forEach((section)=> observer.observe(section))

// toggleAnimationFunction
function appearDesappear (item, animation1, animation2){
    if(item.classList[1] === "divActived"){
        item.classList.remove("divActived")
        item.classList.add("divDesactived")
        item.style.animationName = animation1
    } else{
        item.classList.remove("divDesactived")
        item.classList.add("divActived")
        item.style.animationName = animation2
    }
}

//ScrollMenu
const scrollMenuBtn = document.querySelector(".scrollMenuBtn")
const scrollMenu = document.querySelector(".headerSections")

scrollMenu.classList.add("divDesactived")
scrollMenuBtn.addEventListener("click", ()=> appearDesappear(scrollMenu, "upToDown", "desappear"))

//Contacts
const contactsBtn = document.querySelector(".headerContacts")
const contactsDiv = document.querySelector(".contactsDiv")
contactsDiv.classList.add("divDesactived")
contactsBtn.addEventListener("click", ()=> appearDesappear(contactsDiv, "upToDown", "desappear"))

// WhatsApp card: show a small modal with the phone number (read from data-phone)
const whatsappLink = contactsDiv.querySelector('a[data-phone]')
if(whatsappLink){
    whatsappLink.addEventListener('click', (e)=>{
        e.preventDefault()
        e.stopPropagation()
        const phone = whatsappLink.dataset.phone || ''
        showWhatsAppCard(phone)
    })
}

function showWhatsAppCard(phone){
    const overlay = document.createElement('div')
    overlay.className = 'whatsappCardBody'
    // start hidden via appearDesappear classes
    overlay.classList.add('divDesactived')

    const card = document.createElement('div')
    card.className = 'whatsappCard'

    const close = document.createElement('i')
    close.className = 'fa-solid fa-x whatsappClose'
    close.addEventListener('click', ()=>{
        // animate close
        appearDesappear(overlay, 'desappearV2', 'appearV2')
        setTimeout(()=> overlay.remove(), 600)
    })

    const title = document.createElement('h3')
    title.textContent = 'WhatsApp'

    const number = document.createElement('p')
    number.className = 'whatsappNumber'
    number.textContent = phone

    const copyBtn = document.createElement('button')
    copyBtn.className = 'casualBtn'
    copyBtn.textContent = 'Copiar'
    copyBtn.addEventListener('click', ()=>{
        if(navigator.clipboard && phone){
            navigator.clipboard.writeText(phone).then(()=>{
                copyBtn.textContent = 'Copiado'
                setTimeout(()=> copyBtn.textContent = 'Copiar', 1500)
            }).catch(()=>{})
        }
    })

    card.appendChild(close)
    card.appendChild(title)
    card.appendChild(number)
    card.appendChild(copyBtn)
    overlay.appendChild(card)
    document.body.appendChild(overlay)

    // open with appearDesappear animation
    // small timeout to ensure element is in DOM
    setTimeout(()=> appearDesappear(overlay, 'desappearV2', 'appearV2'), 0)

    overlay.addEventListener('click', (ev)=>{ 
        if(ev.target === overlay){
            appearDesappear(overlay, 'desappearV2', 'appearV2')
            setTimeout(()=> overlay.remove(), 600)
        }
    })
}