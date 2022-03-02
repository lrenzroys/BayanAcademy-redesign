
// Carousel ***
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')
const slides = document.querySelectorAll('.slide')
let currentSlide = 0;

rightArrow.addEventListener('click', () => {
    currentSlide+=1
    if(currentSlide === slides.length) currentSlide = 0
    slides.forEach(slide => slide.classList.remove("active"))
    slides[currentSlide].classList.add('active')
})

leftArrow.addEventListener('click', ()=> {
    if(currentSlide === 0) currentSlide = slides.length
    currentSlide-=1
    slides.forEach(slide => slide.classList.remove("active"))
    slides[currentSlide].classList.add('active')
})

// autoplay carousel 
setInterval(()=>{
    currentSlide+=1
    if(currentSlide === slides.length) currentSlide = 0
    slides.forEach(slide => slide.classList.remove("active"))
    slides[currentSlide].classList.add('active')
}, 5000)

// Show vertical nav
setInterval(()=>{
    document.querySelector('.vertical-nav').classList.add('show-v-nav')
}, 2000)

// Top navigation
const $navContainer = document.querySelector('.nav-container')
document.addEventListener('scroll', () => window.scrollY > 60 ? $navContainer.classList.add('shrink') : $navContainer.classList.remove('shrink'))

// Vertical navigation ****
const verticalUp = document.querySelector('#vertical-nav-up')
const verticalDown = document.querySelector('#vertical-nav-down')
const listOfSections = [...document.querySelectorAll('body > section')].map(section => section.id)
const sectionsOffsetTop = [...document.querySelectorAll('body > section')].map(section => section.offsetTop)
let sectionTracker = 0

verticalUp.addEventListener('click', () => {
    if(sectionTracker === 0) return window.scrollTo(0,sectionsOffsetTop[sectionTracker])
    sectionTracker--
    window.scrollTo(0,sectionsOffsetTop[sectionTracker])
    console.log(sectionsOffsetTop[sectionTracker], 'current', window.scrollY)
})

verticalDown.addEventListener('click', () => {
    if(sectionTracker >= sectionsOffsetTop.length - 1) return
    sectionTracker++
    window.scrollTo(0,sectionsOffsetTop[sectionTracker])
    console.log(sectionsOffsetTop[sectionTracker], 'current', window.scrollY)
})

window.addEventListener('scroll', ()=>{
    if(this.scrollY >= 0 && this.scrollY < 1000) sectionTracker = 0;
    else if(this.scrollY >= 1000 && this.scrollY < 2000) sectionTracker = 1;
    else if(this.scrollY >= 2000 && this.scrollY < 2665) sectionTracker = 2;
    else if(this.scrollY >= 2665 && this.scrollY < 3686) sectionTracker = 3;
    else if(this.scrollY >= 3686 && this.scrollY < 4528) sectionTracker = 4;
})

console.log(sectionsOffsetTop)

// About-Us animation
let aboutUs = document.querySelector('.about-us-desc')
let mission = document.querySelector('.mission')
let vision = document.querySelector('.vision')

let aboutUsY = aboutUs.getBoundingClientRect().bottom + window.scrollY
let missionY = mission.getBoundingClientRect().bottom + window.scrollY
let visionY = vision.getBoundingClientRect().bottom + window.scrollY


document.addEventListener('scroll', ()=> {
    if(window.scrollY >= sectionsOffsetTop[1] - 500){
        let delay = 500
        document.querySelectorAll('.circles div').forEach((c)=>{
            c.style.animationDelay = delay + 'ms'
            c.classList.add('popIn')
            delay+= 500;
        })

    }
    // posY - window.innerHeight = bottom edge
    console.log(window.scrollY , window.innerHeight);
    if(window.scrollY >= aboutUsY - window.innerHeight) aboutUs.classList.add('fadeIn')
    if(window.scrollY >= missionY - window.innerHeight) mission.classList.add('fadeIn')
    if(window.scrollY >= visionY - window.innerHeight) vision.classList.add('fadeIn')

})

