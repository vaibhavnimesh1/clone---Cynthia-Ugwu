const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var tl = gsap.timeline();
  
  tl.from("#nav", {
    y: -10,
    opacity: 0,
    stagger: 0.5,
    duration: 1,
    
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      duration: 1.5,
      stagger: 0.2,
      delay: -0.1,
      ease: Expo.easeInOut,
    })
    .from("#herofooter", {
      y: -10,
      stagger: 0.2,
      opacity: 0,
      duration: 1,
      delay: -0.2,
      ease: Expo.easeInOut,
    });
}

function circlemousefollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX},${dets.clientY})`;
  });
}
circlemousefollower();
firstPageAnim();


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;
  
  elem.addEventListener("mouseleave", function (dets) {
   

    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5
    });
  });
  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot*1),
    });
  });
});


