const result = document.getElementById("result");
const kuji=["大大吉","大吉","中吉","小吉","末吉","凶","大凶"];
const message=[
    "まさか！大大吉が出るなんて！！<br>壱門、ビックリ^^",
    "今日は最高一日になるぜ！<br>壱門もテンション爆上げ⤴︎！",
    "いいね！穏やかな一日になりそう！<br>壱門、散歩したい気分！",
    "ぼちぼちだね。<br>まーミルクでも飲もうよ。",
    "末吉かー、<br>いいことあるまで寝てまとうぜzzz",
    "むむ...。<br>ラッキーアイテムは壱門のヨダレ掛け!",
    "ででもうたー！<br>残念...壱門号泣(T . T)"
]

const start = document.getElementById("start");
const image=document.getElementById("image") ;
const icimessage = document.getElementById("ichimassage");

start.addEventListener("click",()=>{
    let number = Math.floor(Math.random()*7);
    result.innerText=kuji[number] ;
    let imagename=`ichito${number}.jpg`;
    image.setAttribute("src",imagename);
    icimessage.innerHTML =message[number];

});