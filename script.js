// gsap.to("#box1",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"gray",
//     borderRadius:"50%",
//     scale:1.25
// })
// gsap.from("#box2",{
//     x:500,
//     y:500,
//     duration:2,
//     delay:1,
//     rotate:360
// })
// gsap.from("#box3",{
//     x:500,
//     y:500,
//     duration:2,
//     delay:1,
//     rotate:360
// })

// gsap.from("h1",{
//     // color:"red",
//     opacity:0,
//     y:30,
//     duration:2,
//     delay:1,
//     stagger:0.5
// })

// gsap.to("#box",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     repeat:-1,
//     yoyo:true
// })

// gsap.to("#box1",{
//     x:1500,
//     duration:1.5,
//     delay:1,
//     rotate:360,
// })
// gsap.to("#box2",{
//     x:1500,
//     backgroundColor:"yellow",
//     duration:1.5,
//     delay:2.5
// })
// gsap.to("#box3",{
//     x:1500,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4
// })

// var tl=gsap.timeline()

// tl.to("#box1",{
//    x:1200,
//    rotate:360,
//    duration:1.5,
//    delay:1 
// })
// tl.to("#box2",{
//    x:1200,
//    rotate:360,
//    duration:1.5,
// })
// tl.to("#box3",{
//    x:1200,
//    rotate:360,
//    duration:1.5,
// })

// var tl=gsap.timeline();

// tl.from("h2",{
//     y:-20,
//     opacity:0,
//     duration:1,
//     delay:0.5
// },)
// tl.from("h4",{
//     y:-20,
//     opacity:0,
//     duration:1,
//     stagger:0.3
// },)

// tl.from("h1",{
//     y:20,
//     opacity:0,
//     duration:1,
//     scale:0.5
// })

// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// })
// gsap.from("#page2 #box",{
//     scale:0,
//     duration:2,
//     rotate:360,
//     // srollTrigger:"#page2 #box"
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"
//     }
// })

// gsap.from("#page2 h1",{
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })
// gsap.from("#page2 h2",{
//     opacity:0,
//     duration:2,
//     x:-500,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })



// gsap.from("#page2 #box",{
//     scale:0,
//     opacity:0,
//     duration:1,
//     rotate:720,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 10%",
//         scrub:2,
//         pin:true
//     }
// })

gsap.to("#page2 h1",{
    transform:"translate(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
    }
})
