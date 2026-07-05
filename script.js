// ===== 元素データ =====
alert("Ver.3 を読み込みました");
const elements = [
    { name: "水素", symbol: "H" },
    { name: "ヘリウム", symbol: "He" },
    { name: "リチウム", symbol: "Li" },
    { name: "ベリリウム", symbol: "Be" },
    { name: "ホウ素", symbol: "B" },
    { name: "炭素", symbol: "C" },
    { name: "窒素", symbol: "N" },
    { name: "酸素", symbol: "O" },
    { name: "フッ素", symbol: "F" },
    { name: "ネオン", symbol: "Ne" },
    { name: "ナトリウム", symbol: "Na" },
    { name: "マグネシウム", symbol: "Mg" },
    { name: "アルミニウム", symbol: "Al" },
    { name: "ケイ素", symbol: "Si" },
    { name: "リン", symbol: "P" },
    { name: "硫黄", symbol: "S" },
    { name: "塩素", symbol: "Cl" },
    { name: "アルゴン", symbol: "Ar" },
    { name: "カリウム", symbol: "K" },
    { name: "カルシウム", symbol: "Ca" }
];

// 読み込まれたか確認
console.log("script.js Ver.2 読み込み成功");

// ===== 変数 =====
let score = 0;
let count = 0;
let current;

// ===== HTML取得 =====
const question = document.getElementById("question");
const questionNumber = document.getElementById("questionNumber");
const answer = document.getElementById("answer");
const message = document.getElementById("message");
const scoreText = document.getElementById("score");

// ===== 初期化 =====
nextQuestion();

document.getElementById("submitButton").addEventListener("click", check);

answer.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        check();
    }
});

// ===== 次の問題 =====
function nextQuestion() {

    if (count >= 20) {
        finish();
        return;
    }

    current = elements[Math.floor(Math.random() * elements.length)];

    question.textContent = current.name;
    questionNumber.textContent = `問題 ${count + 1} / 20`;

    answer.value = "";
    message.textContent = "";

    answer.focus();
}

// ===== 判定 =====
function check() {

    const ans = answer.value.trim();

    // 完全一致
    if (ans === current.symbol) {

        score++;
        message.textContent = "⭕ 正解！";
        message.style.color = "green";

    }

    // 大文字・小文字だけ違う
    else if (
        ans.length === current.symbol.length &&
        ans.toUpperCase() === current.symbol.toUpperCase()
    ) {

        message.textContent =
            `⚠ 大文字・小文字が違います。正しくは「${current.symbol}」です。`;
        message.style.color = "orange";

    }

    // 完全に違う
    else {

        message.textContent =
            `❌ 不正解！ 正解は「${current.symbol}」です。`;
        message.style.color = "red";

    }

    count++;

    scoreText.textContent = `得点：${score}`;

    setTimeout(nextQuestion, 1200);
}

// ===== 終了 =====
function finish() {

    const percent = Math.round(score / 20 * 100);

    document.querySelector(".container").innerHTML = `
        <h1>🎉 終了！</h1>
        <h2>${score} / 20 点</h2>
        <h3>正答率 ${percent}%</h3>
        <button onclick="location.reload()">もう一度遊ぶ</button>
    `;
}
