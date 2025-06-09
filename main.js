const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

animateAlice = (element) => {
  return new Promise((resolve) => {
    element.animate(aliceTumbling, aliceTiming).onfinish = resolve;
  });
};

async function runAnimations() {
  await animateAlice(alice1);
  await animateAlice(alice2);
  await animateAlice(alice3);
}

runAnimations();
