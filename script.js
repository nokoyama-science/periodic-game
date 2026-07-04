const elements = [

{name:"水素",symbol:"H"},
{name:"ヘリウム",symbol:"He"},
{name:"リチウム",symbol:"Li"},
{name:"ベリリウム",symbol:"Be"},
{name:"ホウ素",symbol:"B"},
{name:"炭素",symbol:"C"},
{name:"窒素",symbol:"N"},
{name:"酸素",symbol:"O"},
{name:"フッ素",symbol:"F"},
{name:"ネオン",symbol:"Ne"},
{name:"ナトリウム",symbol:"Na"},
{name:"マグネシウム",symbol:"Mg"},
{name:"アルミニウム",symbol:"Al"},
{name:"ケイ素",symbol:"Si"},
{name:"リン",symbol:"P"},
{name:"硫黄",symbol:"S"},
{name:"塩素",symbol:"Cl"},
{name:"アルゴン",symbol:"Ar"},
{name:"カリウム",symbol:"K"},
{name:"カルシウム",symbol:"Ca"}

];

let score=0;

let count=0;

let current;

nextQuestion();

document.getElementById("submitButton").onclick=check;

document.getElementById("answer").addEventListener("keydown",function(e){

if(e.key==="Enter"){

check();

}

});

function nextQuestion(){

if(count>=20){

finish();

return;

}

current=elements[Math.floor(Math.random()*elements.length)];

document.getElementById("question").textContent=current.name;

document.getElementById("questionNumber").textContent=
`問題 ${count+1} / 20`;

document.getElementById("answer").value="";

document.getElementById("answer").focus();

}

function check(){

const ans=document.getElementById("answer").value.trim();

if(ans.toLowerCase()==current.symbol.toLowerCase()){

score++;

document.getElementById("message").textContent="⭕ 正解！";

}else{

document.getElementById("message").textContent=
`❌ 正解は ${current.symbol}`;

}

count++;

document.getElementById("score").textContent=`得点：${score}`;

setTimeout(nextQuestion,1000);

}

function finish(){

document.querySelector(".container").innerHTML=

`
<h1>終了！</h1>

<h2>${score} / 20 点</h2>

<h3>正答率 ${Math.round(score/20*100)} %</h3>

<button onclick="location.reload()">もう一度遊ぶ</button>
`;

}
