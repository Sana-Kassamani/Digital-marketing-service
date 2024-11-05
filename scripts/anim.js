gsap.registerPlugin(ScrollTrigger);

gsap.from(".logo-circle", {
  scrollTrigger: ".logo-circle",
  opacity: 0,
  x: -300,
  rotation: 360,
  duration: 2,
  ease: "power2.out",
});

gsap.from(".partner-card", {
  scrollTrigger: ".partner-card",
  opacity: 0,
  x: 500,
  duration: 2,
  ease: "power2.out",
});
gsap.from(".deliver-card", {
  scrollTrigger: ".deliver-card",
  opacity: 0,
  x: -500,
  duration: 2,
  ease: "power2.out",
});

gsap.from(".up", {
  scrollTrigger: ".up",
  opacity: 0,
  y: -100,
  duration: 2,
  ease: "power2.out",
});
gsap.from(".down", {
  scrollTrigger: ".down",
  opacity: 0,
  y: 100,
  duration: 2,
  ease: "power2.out",
});
gsap.from(".hand-shake", {
  scrollTrigger: ".partner-section",
  x: -10,
  duration: 0.3,
  yoyo: true,
  repeat: 6,
  ease: "power1.inOut",
});
gsap.from(".deliver-box", {
  scrollTrigger: ".deliver-section",
  x: -10,
  duration: 0.3,
  yoyo: true,
  repeat: 6,
  ease: "power1.inOut",
});
