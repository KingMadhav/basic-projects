tl = gsap.timeline()
gsap.from(".part h3", {
    y: "-50",
    opacity: 0,
    delay: 1,
    stagger: .2
})
gsap.from(".naam h2", {
    y: "-50",
    opacity: 0,
    delay: 2
})
tl.from(".main h1", {
    x: "-250",
    opacity: 0,
    delay: 1,
    stagger: 0.2
})

tl.from(".images img", {
    y: "200",
    rotate: 45,
    opacity: 0,
    stagger: .8
})
gsap.to("#king",{
    delay:0.8,
    opacity:0
})