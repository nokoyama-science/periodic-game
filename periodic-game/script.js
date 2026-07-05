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

let score = 0;
let count = 0;
let current;

const question = document.getElementById("question");
const questionNumber = document.getElementById("questionNumber");
const answer = document.getElementById("answer");
const message = document.getElementById("message");
const scoreText = document.getElementById("score");

nextQuestion();

document.getElementById("submitButton").onclick = check;

answer.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        check();
    }
});

function nextQuestion() {

    if (count >= 20) {
        finish();
        return;
    }

    current = elements[Math.floor(Math.random() * elements.length)];

    question.textContent = current.name;
    questionNumber.textContent = `問題 ${count + 1} / 20`;

    answer.value = "";
    answer.focus();
}

function check() {

    const ans = answer.value.trim();

    if (ans === current.symbol) {

        score++;
        message.textContent = "⭕ 正解！";

    } else if (ans.toLowerCase() === current.symbol.toLowerCase()) {

        message.textContent =
            `⚠ 大文字・小文字が違います！ 正しくは「${current.symbol}」です。`;

    } else {

        message.textContent =
            `❌ 不正解！ 正解は「${current.symbol}」です。`;

    }

    count++;

    scoreText.textContent = `得点：${score}`;

    setTimeout(nextQuestion, 1200);
}

function finish() {

    const percent = Math.round(score / 20 * 100);

    document.querySelector(".container").innerHTML = `
        <h1>🎉 終了！</h1>
        <h2>${score} / 20 点</h2>
        <h3>正答率 ${percent}%</h3>
        <button onclick="location.reload()">もう一度遊ぶ</button>
    `;
}
