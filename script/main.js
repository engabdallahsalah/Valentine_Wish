// ===============================
// PROFESSIONAL ANIMATION CONTROLLER
// ===============================

const animationTimeline = () => {
  const textBox = document.querySelector(".hbd-chatbox");
  const hbd = document.querySelector(".wish-hbd");

  // Split text for typing effect
  if (textBox) {
    textBox.innerHTML =
      "<span>" +
      textBox.innerHTML.split("").join("</span><span>") +
      "</span>";
  }

  if (hbd) {
    hbd.innerHTML =
      "<span>" +
      hbd.innerHTML.split("").join("</span><span>") +
      "</span>";
  }

  const ideaEnter = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "10deg"
  };

  const ideaLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-10deg"
  };

  const tl = new TimelineMax({ paused: true });

  tl.set(".container", { visibility: "visible" });

  // ==========================================
  // SECTION 1 — INTRO LINES SEQUENTIAL
  // ==========================================

  tl.from(".one", 0.8, { opacity: 0, y: 20 })
    .set(".line", { opacity: 0, y: 15 });

  const lines = document.querySelectorAll(".line");

  lines.forEach((line, index) => {
    tl.to(line, 0.8, { opacity: 1, y: 0 });

    if (index === lines.length - 1) {
      tl.to(line, 0.8, { opacity: 0 }, "+=3");
    } else {
      tl.to(line, 0.8, { opacity: 0 }, "+=2");
    }
  });

  tl.to(".one", 0.6, { opacity: 0, y: 20 });

  // ==========================================
  // SECTION 2 — VALENTINE SCREEN
  // ==========================================

  tl.from(".three", 0.8, { opacity: 0, scale: 0.9 })
    .to(".three", 0.8, { opacity: 0, y: 20 }, "+=2");

  // ==========================================
  // SECTION 3 — MESSAGE BOX
  // ==========================================

  tl.from(".four", 0.7, { scale: 0.5, opacity: 0 })
    .from(".fake-btn", 0.4, { scale: 0.5, opacity: 0 })
    .staggerTo(".hbd-chatbox span", 0.04, { opacity: 1 }, 0.02)
    .to(".fake-btn", 0.2, { backgroundColor: "rgb(127, 206, 248)" })
    .to(".four", 0.6, { scale: 0.2, opacity: 0, y: -150 }, "+=1");

  // ==========================================
  // SECTION 4 — IDEAS
  // ==========================================

  tl.from(".idea-1", 0.7, ideaEnter)
    .to(".idea-1", 0.7, ideaLeave, "+=1.5")

    .from(".idea-2", 0.7, ideaEnter)
    .to(".idea-2", 0.7, ideaLeave, "+=1.5")

    .from(".idea-3", 0.7, ideaEnter)
    .to(".idea-3", 0.7, ideaLeave, "+=1.5")

    .from(".idea-4", 0.7, ideaEnter)
    .to(".idea-4", 0.7, ideaLeave, "+=1.5")

    .from(".idea-5", 0.7, ideaEnter)
    .to(".idea-5", 0.7, ideaLeave, "+=1.5")

    .from(".idea-6", 0.7, ideaEnter);

  // ==========================================
  // SECTION 5 — FINAL WISH
  // ==========================================

  tl.from(".six", 0.8, { opacity: 0, y: 30 })
    .from(".wish-hbd span", 0.04, { opacity: 0 }, 0.02)
    .from("#wishText", 0.7, { opacity: 0, y: 10 })

    .from(".baloons img", 1.5, {
      opacity: 0,
      y: 1400,
      stagger: 0.2
    })

    .from(".nine p", 1, ideaEnter)
    .to(".last-smile", 0.5, { rotation: 90 }, "+=1");

  tl.play();

  // Replay
  const replayBtn = document.getElementById("replay");
  if (replayBtn) {
    replayBtn.addEventListener("click", () => tl.restart());
  }
};

// ==========================================
// FETCH CUSTOMIZATION
// ==========================================

const fetchData = async () => {
  try {
    const response = await fetch("customize.json");
    const data = await response.json();

    Object.keys(data).forEach((key) => {
      if (data[key] !== "") {
        if (key === "imagePath") {
          document.getElementById(key)?.setAttribute("src", data[key]);
        } else {
          document.getElementById(key).innerText = data[key];
        }
      }
    });
  } catch (err) {
    console.error("Customization load failed:", err);
  }
};

// ==========================================
// INIT
// ==========================================

window.addEventListener("DOMContentLoaded", async () => {
  await fetchData();
  animationTimeline();
});
