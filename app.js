// PUT YOUR CODE HERE
let ball = gsap.timeline({ repeat: -1 });

ball
  .from(".red", { x: "-100vw", y: "-100vh", duration: 1 })
  .from(".green", { x: "100vw", y: "-100vh", duration: 1 })
  .from(".blue", { x: "100vw", y: "100vh", duration: 1 })
  .from(".yellow", { x: "-100vw", y: "100vh", duration: 1 })
  .to(".red", {
    x: "100vw",
    left: -200,
    borderRadius: "50%",
    backgroundColor: "green",
    duration: 1,
  })
  .to(
    ".green",
    {
      y: "100vh",
      top: -200,
      borderRadius: "50%",
      backgroundColor: "blue",
      duration: 1,
    },
    "<"
  )
  .to(
    ".blue",
    {
      x: "-100vw",
      right: -200,
      borderRadius: "50%",
      backgroundColor: "yellow",
      duration: 1,
    },
    "<"
  )
  .to(
    ".yellow",
    {
      y: "-100vh",
      bottom: -200,
      borderRadius: "50%",
      backgroundColor: "red",
      duration: 1,
    },
    "<"
  )
  .to(".red", { left: 200, duration: 1 })
  .to(".green", { right: -200, duration: 1 }, "<")
  .to(".blue", { right: 200, duration: 1 }, "<")
  .to(".yellow", { left: -200, duration: 1 }, "<");

ball.play();
ball.repeat(-1);
