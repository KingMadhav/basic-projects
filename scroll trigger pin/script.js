gsap.to(".page1 img", {
    width:"90%",
    height:"90%",
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"bottom -100%",
        scrub:1,
        pin:true
    }
})
gsap.to(".page2 img", {
    width:"90%",
    height:"90%",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"bottom -100%",
        scrub:1,
        pin:true
    }
})
gsap.to(".page3 img", {
    width:"90%",
    height:"90%",
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"bottom -100%",
        scrub:1,
        pin:true
    }
})