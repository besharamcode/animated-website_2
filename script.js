const tl = gsap.timeline();

const basicAnim = { y: "-70%", opacity: 0, duration: 0.4, stagger: 0.1 };

tl.from(".logo", basicAnim);
tl.from("nav li", basicAnim);
tl.from(".cta button", basicAnim);
tl.from(".hero h1", { ...basicAnim, y: 0, x: "-50%" });
tl.from(".hero h1 img", { ...basicAnim, y: 0, x: "-50%" });
tl.from(".hero .right img", { ...basicAnim, y: 0, x: "50%" });
tl.from(".left h2", basicAnim);

gsap.from(".how-we .play", {
  x: "-70%",
  opacity: 0,
  duration: 0.4,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".how-we .play",
    scroller: "body",
    start: "top 90%",
    end: "bottom 10%",
  },
});

gsap.from(".how-we button", {
  x: "-70%",
  opacity: 0,
  duration: 0.4,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".how-we button",
    scroller: "body",
    start: "top 90%",
    end: "bottom 10%",
  },
});

gsap.from(".how-we .card", {
  y: "70%",
  opacity: 0,
  duration: 0.4,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".how-we .card",
    scroller: "body",
    start: "top 90%",
    end: "top 10%",
  },
});
