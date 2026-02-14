// =====================
// Animation Timeline
// =====================

const animationTimeline = () => {
  // Split text for stagger animation
  const textBox = document.querySelector(".hbd-chatbox");
  textBox.innerHTML = textBox.textContent
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");

  const wishText = document.querySelector(".wish-hbd");
  wishText.innerHTML = wishText.textContent
    .split("")
    .map((char) => `<span>${char}</span>`)
    .join("");

  const tl = new TimelineMax();

  // ===================== Sequence =====================
  tl.to(".container", 0.1, { visibility: "visible" })

    // 1. Show Hey + Name
    .from(".one", 0.7, { opacity: 0, y: 10 })
    
    // 2. Show each line one by one
    .staggerFrom(".line", 0.5, { opacity: 0, y: 15 }, 0.8)
    .staggerTo(".line", 0.5, { opacity: 0, y: -15 }, 0.5, "+=1.5")

    // 3. Show Valentine Title
    .from(".three", 0.7, { opacity: 0, y: 10 })
    .to(".three", 0.7, { opacity: 0, y: 10 }, "+=1.5")

    // 4. Show Message Box
    .from(".four", 0.7, { opacity: 0, scale: 0.3 })
    .from(".fake-btn", 0.3, { opacity: 0, scale: 0.3 })
    .staggerTo(".hbd-chatbox span", 0.05, { opacity: 1 }, 0.05)
    .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" })
    .to(".four", 0.5, { opacity: 0, scale: 0.3, y: -150 }, "+=0.7")

    // 5. Idea Section
    .staggerFrom(".idea-1, .idea-2, .idea-3, .idea-4", 0.7, { opacity: 0, y: -20 }, 1.5)
    .to(".idea-3 strong", 0.5, { scale: 1.2, x: 10, backgroundColor: "#159ee3", color: "#fff" })
    .from(".idea-5", 0.7, { opacity: 0, rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50 })
    .to(".idea-5 span", 0.7, { rotation: 90, x: 8 })
    .to(".idea-5", 0.7, { opacity: 0, scale: 0.3 }, "+=2")
    .staggerFrom(".idea-6 span", 0.8, { scale: 3, opacity: 0, rotation: 15, ease: Expo.easeOut }, 0.2)
    .staggerTo(".idea-6 span", 0.8, { scale: 3, opacity: 0, rotation: -15, ease: Expo.easeOut }, 0.2, "+=1")

    // 6. Show Image + Hat + Wish Message
    .staggerFrom(".girl-dp, .hat", 0.5, { opacity: 0, scale: 3, x: 25, y: -25, rotationZ: -45 }, 0.2)
    .staggerFrom(".wish-hbd span", 0.7, { opacity: 0, y: -50, rotation: 150, skewX: "30deg", ease: Elastic.easeOut.config(1,0.5) }, 0.1)
    .staggerFromTo(".wish-hbd span", 0.7, { scale: 1.4, rotationY: 150 }, { scale: 1, rotationY: 0, color: "#ff69b4", ease: Expo.easeOut }, 0.1, "party")
    .from(".wish h5", 0.5, { opacity: 0, y: 10, skewX: "-15deg" }, "party")

    // 7. Balloons & Confetti
    .staggerFromTo(".baloons img", 2.5, { opacity: 0.9, y: 1400 }, { opacity: 1, y: -1000 }, 0.2)
    .staggerTo(".eight svg", 1.5, { visibility: "visible", opacity: 0, scale: 80, repeat: 3, repeatDelay: 1.4 }, 0.3)

    // 8. Hide final section (optional) and show ending
    .to(".six", 0.5, { opacity: 0, y: 30, zIndex: -1 }, "+=0.5")
    .staggerFrom(".nine p", 1, { opacity: 0, y: -20 }, 1.2)
    .to(".last-smile", 0.5, { rotation: 90 }, "+=1");

  // ===================== Replay Button =====================
  const replayBtn = document.getElementById("replay");
  replayBtn.addEventListener("click", () => tl.restart());
};

// ===================== Initialize =====================
window.addEventListener("load", animationTimeline);
