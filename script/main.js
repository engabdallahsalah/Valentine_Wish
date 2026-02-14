// ===============================
// Animation Timeline
// ===============================

const animationTimeline = () => {
  const textBoxChars = document.querySelector(".hbd-chatbox");
  const wishText = document.querySelector(".wish-hbd");

  // Convert text to spans for typing effect
  textBoxChars.innerHTML = textBoxChars.textContent
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");

  wishText.innerHTML = wishText.textContent
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.set(".container", { visibility: "visible" })

    // ===== Step 1: Hey Larissa =====
    .from(".one", 0.7, { opacity: 0, y: 20 })
    .to(".one", 0.7, { opacity: 0, y: 20 }, "+=1.5")

    // ===== Step 2: Sequential Lines =====
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


    // ===== Step 3: It's Valentine =====
    .from(".three", 0.7, { opacity: 0, y: 20 })
    .to(".three", 0.7, { opacity: 0, y: 20 }, "+=1.5")

    // ===== Step 4: Chatbox typing effect =====
    .from(".four", 0.7, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
    .staggerTo(".hbd-chatbox span", 0.05, { visibility: "visible" }, 0.02)
    .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" })
    .to(".four", 0.5, { scale: 0.2, opacity: 0, y: -150 }, "+=1")

    // ===== Step 5: Idea Section =====
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-5", 0.7, {
      rotationX: 15,
      rotationZ: -10,
      skewY: "-5deg",
      y: 50,
      z: 10,
      opacity: 0,
    }, "+=0.5")
    .to(".idea-5 span", 0.7, { rotation: 90, x: 8 }, "+=0.4")
    .to(".idea-5", 0.7, { scale: 0.2, opacity: 0 }, "+=2")
    .staggerFrom(".idea-6 span", 0.8, { scale: 3, opacity: 0, rotation: 15, ease: Expo.easeOut }, 0.2)
    .staggerTo(".idea-6 span", 0.8, { scale: 3, opacity: 0, rotation: -15, ease: Expo.easeOut }, 0.2, "+=1")

    // ===== Step 6: Balloons =====
    .staggerFromTo(".baloons img", 2.5, { opacity: 0.9, y: 1400 }, { opacity: 1, y: -1000 }, 0.2)

    // ===== Step 7: Image + Hat =====
    .from(".girl-dp", 0.5, { scale: 3.5, opacity: 0, x: 25, y: -25, rotationZ: -45 }, "-=2")
    .from(".hat", 0.5, { x: -100, y: 350, rotation: -180, opacity: 0 })

    // ===== Step 8: Wish message =====
    .staggerFrom(".wish-hbd span", 0.7, { opacity: 0, y: -50, rotation: 150, skewX: "30deg", ease: Elastic.easeOut.config(1, 0.5) }, 0.1)
    .staggerFromTo(".wish-hbd span", 0.7, { scale: 1.4, rotationY: 150 }, { scale: 1, rotationY: 0, color: "#ff69b4", ease: Expo.easeOut }, 0.1, "party")
    .from(".wish h5", 0.5, { opacity: 0, y: 10, skewX: "-15deg" }, "party")

    // ===== Step 9: SVG Hearts =====
    .staggerTo(".eight svg", 1.5, { visibility: "visible", opacity: 0, scale: 80, repeat: 3, repeatDelay: 1.4 }, 0.3)

    // ===== Step 10: Hide Six Section =====
    .to(".six", 0.5, { opacity: 0, y: 30, zIndex: "-1" })

    // ===== Step 11: Final Text =====
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(".last-smile", 0.5, { rotation: 90 }, "+=1");

  // Replay
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => tl.restart());
};

// Run Animation on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  animationTimeline();
});
