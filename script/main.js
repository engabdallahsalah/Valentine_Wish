// Animation Timeline
const animationTimeline = () => {
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

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

  tl.to(".container", 0.1, {
    visibility: "visible",
  })

    // ===== First Section =====
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })

    .from(".two", 0.5, {
      opacity: 0,
      y: 10,
    })

    // نخفي كل السطور بالبداية
    .set(".line", { opacity: 0 })

    // أنيميشن كل سطر يظهر ويختفي
    .add(() => {
      const lines = document.querySelectorAll(".line");
      const tlLines = new TimelineMax();

      lines.forEach((line, index) => {
        if (index === lines.length - 1) {
          // آخر جملة تفضل ظاهرة شوية
          tlLines
            .to(line, 0.8, { opacity: 1, y: 0 })
            .to(line, 0.8, { opacity: 0 }, "+=2");
        } else {
          tlLines
            .to(line, 0.8, { opacity: 1, y: 0 })
            .to(line, 0.8, { opacity: 0 }, "+=1.2");
        }
      });

      return tlLines;
    })

    .to(".one", 0.7, { opacity: 0, y: 10 }, "+=0.5")
    .to(".two", 0.7, { opacity: 0, y: 10 }, "-=0.7")

    // ===== Continue Original Animation =====
    .from(".three", 0.7, { opacity: 0, y: 10 })
    .to(".three", 0.7, { opacity: 0, y: 10 }, "+=2")

    .from(".four", 0.7, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })

    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      { visibility: "visible" },
      0.05
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

    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)

    .to(".last-smile", 0.5, { rotation: 90 }, "+=1");

  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};


// Fetch customization
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
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
