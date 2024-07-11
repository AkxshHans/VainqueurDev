







gsap.to("#loader",{
  // top : "-100vh" ,
  delay : 3.5,
  duration : 2,
  opacity:0,
})

gsap.to("#loader img",{
  x:10,
  rotate: 0,
  delay:1,
  duration:2,
  height:"100vh",
  width:"100%",
  filter: "grayscale(0)",

})




// for only one element
//  var h1Text = document.querySelector("#firsth1").textContent
 
//  var splitedText = h1Text.split("")

//  var clutter = "" 

//  splitedText.forEach(function(elem){
//   clutter += `<span>${elem}</span>`
//  })

// document.querySelector("#firsth1").innerHTML = clutter



// gsap.to("#maintwo h1 span",{
//   color:"#14CF93",
//   stagger:0.1,
//   opacity:1,
//   scrollTrigger:{
//     trigger: "#maintwo h1",
//     scroller:"body",
//     start: "top 50%",
//     end: "top 10%",
//     scrub:1,
//     markers:true,
//   }
// })

var allH1 = document.querySelectorAll("#maintwo h1")
allH1.forEach(function(elem){
  var clutter = ""
  var h1Text = elem.textContent
 var splitedText =  h1Text.split("")
 splitedText.forEach(function(e){
  clutter += `<span>${e}</span>`

 })
 elem.innerHTML = clutter
})


gsap.to("#maintwo h1 span",{
  color:"#14CF93",
  stagger:0.1,
  opacity:1,
  scrollTrigger:{
    trigger: "#maintwo h1",
    scroller:"body",
    start: "top 50%",
    end: "top -10%",
    scrub:3,
    markers:false,
  }
})
gsap.to("#maintwo #imgimg",{
  
  rotate:"-10deg",
  opacity:1,
  scrollTrigger:{
    trigger: "#maintwo img",
    scroller:"body",
    start: "top 50%",
    end: "top -10%",
    scrub:3,
    markers:false,
  }
})

gsap.to("#maintwo #imgimgimg",{
  
  rotate:"10deg",
  opacity:1,
  scrollTrigger:{
    trigger: "#maintwo img",
    scroller:"body",
    start: "top 50%",
    end: "top -10%",
    scrub:1,
    markers:false,
  }
})










// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)







