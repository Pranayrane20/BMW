let t1 = gsap.timeline();





var nav = document.querySelector("nav")

nav.addEventListener("mouseenter", function () {
    let t2 = gsap.timeline()

    t2.to("#nav-bottom", {
        height: "21vh",
        duration: 0.3
    })
    t2.to("#nav-part2 h5", {
        display: "block",
        duration: 0.1

    })
    t2.to("#nav-part2 h5 span", {
        y: 0,
        // duration:0.3,
        stagger: {
            amount: 0.1
        }
    })
})
nav.addEventListener("mouseleave", function () {
    let t2 = gsap.timeline()
    t2.to("#nav-part2 h5 span", {
        y: 25,
        stagger: {
            amount: 0.1
        }
    })
    t2.to("#nav-part2 h5", {
        display: "none",
        duration: 0.1
    })
    t2.to("#nav-bottom", {
        height: 0,
        duration: 0.3
    })
})


let t3 = gsap.timeline();
t3.from("nav",{
    y:-50,
    opacity:0,
    duration:1
})
t3.from(".h21",{
    x:-110,
    opacity:0,
    duration:1
},'a')
t3.from(".h22",{
    x:110,
    opacity:0,
    duration:1
},'a')
t3.from("#page21 p",{
    y:40,
    opacity:0,
    duration:0.5
})