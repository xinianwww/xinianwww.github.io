let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0; // 记录点击NO的次数

// No按钮的文字变化
const noTexts = [
  "你还在生气吗",
  "你不要我了?",
  "不许选这个!",
  "我会很伤心..",
  "不要抛弃我"
];

// NO按钮点击事件
noButton.addEventListener("click", function () {
  clickCount++;

  // 1. 让Yes变大，每次放大2倍
  let yesSize = 1 + (clickCount * 1.2);
  yesButton.style.transform = `scale(${yesSize})`;

  // 2. 挤压NO按钮，每次右移50px，但不超过屏幕宽度的80%
  let noOffset = clickCount * 50;
  let maxOffset = window.innerWidth * 0.8; // 最大移动距离为屏幕宽度的80%
  noButton.style.transform = `translateX(${Math.min(noOffset, maxOffset)}px)`;

  // 3. 让图片和文字往上移动
  let moveUp = clickCount * 25; // 每次上移20px
  mainImage.style.transform = `translateY(-${moveUp}px)`;
  questionText.style.transform = `translateY(-${moveUp}px)`; // 文字也一起移动

  // 4. NO文案变化(前5次变化)
  if (clickCount <= 5) {
    noButton.innerText = noTexts[clickCount - 1];
  }

  // 5. 图片变化
  if (clickCount === 1) mainImage.src = "images/kuku2.png"; // 震惊
  if (clickCount === 2) mainImage.src = "images/kuku3.png"; // 思考
  if (clickCount === 3) mainImage.src = "images/kuku4.png"; // 生气
  if (clickCount === 4) mainImage.src = "images/kuku5.png"; // 哭
  if (clickCount >= 5) mainImage.src = "images/kuku6.png"; // 之后一直是哭
});

// Yes按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function () {
  document.body.innerHTML = `
    <div class="yes-screen">
      <h1 class="yes-text">豆海和你世界第一好!!</h1>
      <img src="images/好好海.gif" alt="拥抱" class="yes-image">
    </div>
  `;
  document.body.style.overflow = "hidden";
});
