// ===============================
// Animation Timeline
// ===============================

const animationTimeline = () => {
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  // Split chatbox text into spans
  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  // Split wish text into spans
  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

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

  tl.to(".container", 0.1, { visibility: "visible" })

    // ===============================
    // First Section
    // ===============================

    .from(".one", 0.8, { opacity: 0, y: 20 })

    // نخفي كل الجمل
    .set(".line", { opacity: 0, y: 15 })

    // تشغيل الجمل واحدة واحدة
    .add(() => {
      const lines = document.querySelectorAll(".line");
      const tlLines = new TimelineMax();

      lines.forEach((line, index) => {
        if (index === lines.length - 1) {
          // آخر جملة (YOU🥺) تفضل شوية أطول
          tlLines
            .to(line, 0.8, { opacity: 1, y: 0 })
            .to(line, 0.8, { opacity: 0 }, "+=2.2");
        } else {
          tlLines
            .to(line, 0.8, { opacity: 1, y: 0 })
            .to(line, 0.8, { opacity: 0 }, "+=1.2");
        }
      });

      return tlLines;
    })

    // إخفاء الهيدر بعد ما يخلصوا
    .to(".one", 0.7, { opacity: 0, y: 20 }, "+=0.5")

    // ===============================
    // Continue Original Animation
    // ===============================

    .from(".three", 0.7, { opacity: 0, y: 20 })
    .to(".three", 0.7, { opacity: 0, y: 20 }, "+=2")

    .from(".four", 0.7, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })

    .staggerTo(
      ".hbd-chatbox span",
      0.04,
      { visibility: "visible" },
      0.02
    )

    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)",
    })

    .to(".four", 0.5, {
      scale: 0.2,
      opacity: 0,
      y: -150,
    }, "+=0.7")

    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")

    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")

    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")

    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")

    .from(".idea-5", 0.7, ideaTextTrans)
    .to(".idea-5", 0.7, ideaTextTransLeave, "+=1.5")

    .from(".idea-6", 0.7, ideaTextTrans)

    .from(".six", 0.8, { opacity: 0, y: 30 })
    .from(".wish-hbd span", 0.04, { opacity: 0 }, 0.02)
    .from("#wishText", 0.7, { opacity: 0, y: 10 })

    .from(".baloons img", 1.5, {
      opacity: 0,
      y: 1400,
      stagger: 0.2,
    })

    .from(".nine p", 1, ideaTextTrans)
    .to(".last-smile", 0.5, { rotation: 90 }, "+=1");

  // Replay Button
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};


// ===============================
// Fetch Customization
// ===============================

const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).forEach((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText =
              data[customData];
          }
        }
      });
    });
};

const resolveFetch = () => {
  return new Promise((resolve) => {
    fetchData();
    resolve("Fetch done!");
  });
};

// Start Everything
resolveFetch().then(() => {
  animationTimeline();
});
