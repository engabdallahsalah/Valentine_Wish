// ===============================
// Animation Timeline - CLEAN FINAL
// ===============================

const animationTimeline = () => {

  const textBox = document.querySelector(".hbd-chatbox");
  const hbd = document.querySelector(".wish-hbd");
  const lines = document.querySelectorAll(".line");

  // Split chatbox text into spans
  textBox.innerHTML =
    "<span>" + textBox.innerHTML.split("").join("</span><span>") + "</span>";

  // Split wish heading into spans
  hbd.innerHTML =
    "<span>" + hbd.innerHTML.split("").join("</span><span>") + "</span>";

  const tl = new TimelineMax();

  // Hide all main sections except first
  tl.set([
    ".three",
    ".four",
    ".five",
    ".six",
    ".seven",
    ".eight",
    ".nine"
  ], { opacity: 0 });

  tl.to(".container", 0.1, { visibility: "visible" });

  // ===============================
  // 1️⃣ HEY SECTION
  // ===============================

  tl.from(".one", 1, { opacity: 0, y: 30 });

  // Hide lines first
  tl.set(lines, { opacity: 0, y: 20 });

  // Show each line manually (no nth-child)
  lines.forEach((line, index) => {
    tl.to(line, 0.8, { opacity: 1, y: 0 });
    tl.to(line, 0.8, { opacity: 0 }, "+=2");
  });

  // Hide whole first block
  tl.to(".one", 0.8, { opacity: 0, y: -30 });

  // ===============================
  // 2️⃣ VALENTINE PAGE
  // ===============================

  tl.to(".three", 0.8, { opacity: 1 });
  tl.to(".three", 0.8, { opacity: 0 }, "+=2");

  // ===============================
  // 3️⃣ MESSAGE BOX
  // ===============================

  tl.to(".four", 0.8, { opacity: 1 });
  tl.from(".fake-btn", 0.4, { scale: 0.5, opacity: 0 });

  tl.staggerTo(
    ".hbd-chatbox span",
    0.04,
    { visibility: "visible" },
    0.02
  );

  tl.to(".fake-btn", 0.2, {
    backgroundColor: "rgb(127, 206, 248)"
  });

  tl.to(".four", 0.8, { opacity: 0, y: -150 }, "+=1");

  // ===============================
  // 4️⃣ IDEA SECTION
  // ===============================

  tl.to(".five", 0.8, { opacity: 1 });

  tl.from(".idea-1", 0.8, { opacity: 0, y: 20 });
  tl.to(".idea-1", 0.8, { opacity: 0 }, "+=1.5");

  tl.from(".idea-2", 0.8, { opacity: 0, y: 20 });
  tl.to(".idea-2", 0.8, { opacity: 0 }, "+=1.5");

  tl.from(".idea-3", 0.8, { opacity: 0, y: 20 });
  tl.to(".idea-3", 0.8, { opacity: 0 }, "+=1.5");

  tl.from(".idea-4", 0.8, { opacity: 0, y: 20 });
  tl.to(".idea-4", 0.8, { opacity: 0 }, "+=1.5");

  tl.from(".idea-5", 0.8, { opacity: 0, y: 20 });
  tl.to(".idea-5", 0.8, { opacity: 0 }, "+=1.5");

  tl.from(".idea-6", 0.8, { opacity: 0, y: 20 });
  tl.to(".five", 0.8, { opacity: 0 }, "+=1");

  // ===============================
  // 5️⃣ IMAGE + WISH
  // ===============================

  tl.to(".six", 1, { opacity: 1, y: 0 });

  tl.staggerFrom(".wish-hbd span", 0.05, { opacity: 0 }, 0.03);
  tl.from("#wishText", 1, { opacity: 0, y: 20 });

  tl.to(".seven", 0.5, { opacity: 1 });

  tl.from(".baloons img", 1.5, {
    opacity: 0,
    y: 1000,
    stagger: 0.2
  });

  // ===============================
  // 6️⃣ FINAL PAGE
  // ===============================

  tl.to(".nine", 1, { opacity: 1 });
  tl.to(".last-smile", 0.6, { rotation: 90 }, "+=1");

  // Replay
  document.getElementById("replay").addEventListener("click", () => {
    tl.restart();
  });
};


// Start
document.addEventListener("DOMContentLoaded", () => {
  animationTimeline();
});
