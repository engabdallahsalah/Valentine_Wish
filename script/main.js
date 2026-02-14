// ===============================
// Main Animation Timeline
// ===============================

const animationTimeline = () => {
  // عناصر الـ chatbox والـ wish
  const textBox = document.querySelector(".hbd-chatbox");
  const wishText = document.querySelector(".wish-hbd");

  // تحويل نصوصهم إلى spans (typing effect)
  textBox.innerHTML = textBox.textContent
    .split("")
    .map(char => `<span>${char}</span>`)
    .join("");

  wishText.innerHTML = wishText.textContent
    .split("")
    .map(char => `<span>${char}</span>`)
    .join("");

  // Timeline الأساسي
  const tl = new TimelineMax();

  // إظهار الـ container
  tl.set(".container", { visibility: "visible" })

    // ===== Intro: Hey Larissa =====
    .from(".one", 0.7, { opacity: 0, y: 20 })
    .to(".one", 0.7, { opacity: 0, y: 20 }, "+=1")

    // ===== Lines Sequential =====
    .add(() => {
      const lines = document.querySelectorAll(".line");
      const tlLines = new TimelineMax();

      lines.forEach((line, index) => {
        if (index === lines.length - 1) {
          tlLines
            .to(line, 0.8, { opacity: 1, y: 0 })
            .to(line, 0.8, { opacity: 0 }, "+=2");
        } else {
          tlLines
            .to(line, 0.8, { opacity: 1, y: 0 })
            .to(line, 0.8, { opacity: 0 }, "+=2");
        }
      });

      return tlLines;
    })

    // ===== Section 3 =====
    .from(".three", 0.7, { opacity: 0, y: 20 })
    .to(".three", 0.7, { opacity: 0, y: 20 }, "+=1.5")

    // ===== Chatbox (typing) =====
    .from(".four", 0.7, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
    .staggerTo(".hbd-chatbox span", 0.05, { visibility: "visible" }, 0.02)
    .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" })
    .to(".four", 0.5, { scale: 0.2, opacity: 0, y: -150 }, "+=1")

    // ===== Idea Section =====
    .from(".idea-1", 0.7, { opacity: 0, y: -20 })
    .to(".idea-1", 0.7, { opacity: 0, y: 20 }, "+=1.5")
    .from(".idea-2", 0.7, { opacity: 0, y: -20 })
    .to(".idea-2", 0.7, { opacity: 0, y: 20 }, "+=1.5")
    .from(".idea-3", 0.7, { opacity: 0, y: -20 })
    .to(".idea-3", 0.7, { opacity: 0, y: 20 }, "+=1.5")
    .from(".idea-4", 0.7, { opacity: 0, y: -20 })
    .to(".idea-4", 0.7, { opacity: 0, y: 20 }, "+=1.5")
    .from(".idea-5", 0.7, { opacity: 0, y: -20 })
    .to(".idea-5", 0.7, { opacity: 0, y: 20 }, "+=1.5")
    .from(".idea-6", 0.7, { opacity: 0, y: -20 })

    // ===== Image + Wish =====
    .from(".six", 0.8, { opacity: 0, y: 30 })
    .staggerFrom(".wish-hbd span", 0.04, { opacity: 0 }, 0.02)
    .from("#wishText", 0.7, { opacity: 0, y: 10 })

    // ===== Balloons =====
    .from(".baloons img", 1.5, { opacity: 0, y: 1400, stagger: 0.2 })

    // ===== Last Section =====
    .from(".nine p", 0.7, { opacity: 0, y: -20 })
    .to(".last-smile", 0.5, { rotation: 90 }, "+=1");

  // Replay button
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Start Animation
document.addEventListener("DOMContentLoaded", () => {
  animationTimeline();
});
