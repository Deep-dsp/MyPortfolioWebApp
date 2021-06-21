const position = ["Front End Web Developer", "Media Designer", "3D Artist"];

let cursor = gsap.to('.position-con .cursor', {
    opacity:0,
    ease: "power2.inOut",
    repeat: -1
});

let masterTl = gsap.timeline( {repeat: -1} );

position.forEach( word => {

    let tl = gsap.timeline({ repeat:1, yoyo: true, repeatDelay: 1});
    tl.to('.position',{ duration: 1, text: word});
    masterTl.add(tl);
});