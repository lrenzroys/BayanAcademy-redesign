window.onload = () => {
    
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
const pageSection = document.querySelectorAll('body > section')
const listOfSections = [...pageSection].map(section => section.id)
const sectionsOffsetTop = [...pageSection].map(section => section.offsetTop)
let sectionTracker = 0

// window.addEventListener('scroll', ()=>{
//     if(this.scrollY >= 0 && this.scrollY < 746) sectionTracker = 0;
//     if(this.scrollY >= 746 && this.scrollY < 1683) sectionTracker = 1;
//     if(this.scrollY >= 1683 && this.scrollY < 2325) sectionTracker = 2;
//     if(this.scrollY >= 2325 && this.scrollY < 3238) sectionTracker = 3;
//     if(this.scrollY >= 3238 && this.scrollY < 3864) sectionTracker = 4;
//     if(this.scrollY >= 3864 && this.scrollY < 5209) sectionTracker = 5;  
// })

// To go up 1 section
verticalUp.addEventListener('click', () => {
    if(sectionTracker === 0) return 
    //window.scrollTo(0,sectionsOffsetTop[sectionTracker]) 
    
    // window.scrollTo(0,sectionsOffsetTop[--sectionTracker])
    location.replace(location.pathname + '#' + listOfSections[--sectionTracker])
    console.clear()
    console.log(sectionsOffsetTop[sectionTracker], )
    console.log('Offsetop:', sectionsOffsetTop[sectionTracker])
    console.log('current page:', listOfSections[sectionTracker]);
    console.log('section tracker:', sectionTracker)
    console.log('list of section:', listOfSections);
})

// To go down 1 section
verticalDown.addEventListener('click', () => {
    if(sectionTracker === sectionsOffsetTop.length - 1) return

    // window.scrollTo(0,sectionsOffsetTop[++sectionTracker])
    // window.location.href = `${window.location.href}#${listOfSections[++sectionTracker]}`
    location.replace(location.pathname + '#' + listOfSections[++sectionTracker])
    console.clear()
    console.log('Offsetop:', sectionsOffsetTop[sectionTracker])
    console.log('current page:', listOfSections[sectionTracker]);
    console.log('section tracker:', sectionTracker)
    console.log(sectionsOffsetTop);
})


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
        document.querySelectorAll('.circles div').forEach(circle =>{
            circle.style.animationDelay = delay + 'ms'
            circle.classList.add('popIn')
            delay+= 500;
        })
    }
    // posY - window.innerHeight = bottom edge
    // console.log(window.scrollY , window.innerHeight);
    if(window.scrollY >= aboutUsY - window.innerHeight) aboutUs.classList.add('fadeIn')
    if(window.scrollY >= missionY - window.innerHeight) mission.classList.add('fadeIn')
    if(window.scrollY >= visionY - window.innerHeight) vision.classList.add('fadeIn')

})

} // End of window onload