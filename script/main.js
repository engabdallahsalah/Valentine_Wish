// ===============================
// Animation Timeline - FINAL
// ===============================

const animationTimeline = () => {

  const textBox = document.querySelector(".hbd-chatbox");
  const hbd = document.querySelector(".wish-hbd");

  // Split chatbox text into spans (letter animation)
  textBox.innerHTML = "<span>" + textBox.innerHTML.split("").join("</span><span>") + "</span>";

  // Split wish heading into spans
  hbd.innerHTML = "<span>" + hbd.innerHTML.split("").join("</span><span>") + "</span>";

  const tl = new TimelineMax();

  // Hide all sections at start (except first)
  tl.set([
    ".three",
    ".four",
    ".five",
    ".six",
    ".seven",
    ".eight",
    ".nine"
  ], { opacity: 0 });

  // Make container visible
  tl.to(".container", 0.1, { visibility: "visible" })

  // ===============================
  // 1️⃣ HEY LARISSA SECTION
  // ===============================

  .from(".one", 1, { opacity: 0, y: 30 })

  // Hide greeting lines
  .set(".line", { opacity: 0, y: 20 })

  // Sequential sentences (2 sec between each)
  .to(".line:nth-child(1)", 0.8, { opacity: 1, y: 0 })
  .to(".line:nth-child(1)", 0.8, { opacity: 0 }, "+=2")

  .to(".line:nth-child(2)", 0.8, { opacity: 1, y: 0 })
  .to(".line:nth-child(2)", 0.8, { opacity: 0 }, "+=2")

  .to(".line:nth-child(3)", 0.8, { opacity: 1, y: 0 })
  .to(".line:nth-child(3)", 0.8, { opacity: 0 }, "+=2")

  .to(".line:nth-child(4)", 0.8, { opacity: 1, y: 0 })
  .to(".line:nth-child(4)", 0.8, { opacity: 0 }, "+=2")

  .to(".line:nth-child(5)", 0.8, { opacity: 1, y: 0 })
  .to(".line:nth-child(5)", 0.8, { opacity: 0 }, "+=2")

  .to(".line:nth-child(6)", 0.8, { opacity: 1, y: 0 })
  .to(".line:nth-child(6)", 0.8, { opacity: 0 }, "+=3)

  // Hide first section completely
  .to(".one", 0.8, { opacity: 0, y: -30 })

  // ===============================
  // 2️⃣ IT'S VALENTINE SECTION
  // ===============================

  .to(".three", 0.8, { opacity: 1 })
  .to(".three", 0.8, { opacity: 0 }, "+=2")

  // ===============================
  // 3️⃣ MESSAGE BOX
  // ===============================

  .to(".four", 0.8, { opacity: 1, scale: 1 })
  .from(".fake-btn", 0.4, { scale: 0.5, opacity: 0 })

  .staggerTo(".hbd-chatbox span", 0.04, { visibility: "visible" }, 0.02)

  .to(".fake-btn", 0.2, {
    backgroundColor: "rgb(127, 206, 248)"
  })

  .to(".four", 0.8, { opacity: 0, y: -150 }, "+=1")

  // ===============================
  // 4️⃣ IDEA SECTION
  // ===============================

  .to(".five", 0.8, { opacity: 1 })

  .from(".idea-1", 0.8, { opacity: 0, y: 20 })
  .to(".idea-1", 0.8, { opacity: 0 }, "+=1.5")

  .from(".idea-2", 0.8, { opacity: 0, y: 20 })
  .to(".idea-2", 0.8, { opacity: 0 }, "+=1.5")

  .from(".idea-3", 0.8, { opacity: 0, y: 20 })
  .to(".idea-3", 0.8, { opacity: 0 }, "+=1.5")

  .from(".idea-4", 0.8, { opacity: 0, y: 20 })
  .to(".idea-4", 0.8, { opacity: 0 }, "+=1.5")

  .from(".idea-5", 0.8, { opacity: 0, y: 20 })
  .to(".idea-5", 0.8, { opacity: 0 }, "+=1.5")

  .from(".idea-6", 0.8, { opacity: 0, y: 20 })
  .to(".five", 0.8, { opacity: 0 }, "+=1")

  // ===============================
  // 5️⃣ IMAGE + WISH
  // ===============================

  .to(".six", 1, { opacity: 1, y: 0 })

  .staggerFrom(".wish-hbd span", 0.05, { opacity: 0 }, 0.03)
  .from("#wishText", 1, { opacity: 0, y: 20 })

  // Balloons
  .to(".seven", 0.5, { opacity: 1 })
  .from(".baloons img", 1.5, {
    opacity: 0,
    y: 1000,
    stagger: 0.2
  })

  // ===============================
  // 6️⃣ FINAL PAGE
  // ===============================

  .to(".nine", 1, { opacity: 1 })
  .to(".last-smile", 0.6, { rotation: 90 }, "+=1");

  // Replay
  document.getElementById("replay").addEventListener("click", () => {
    tl.restart();
  });
};


// ===============================
// Start
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  animationTimeline();
});
