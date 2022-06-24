const chaltimes=20

const challengetimes=document.getElementById('challenge-times');
challengetimes.innerText=chaltimes
challengetimes.value=chaltimes
console.log(challengetimes.value)

// htmlタグの読み込み
const predictinput = document.getElementById("Predict_input")
const answerbtn = document.getElementById('answer-btn')
const previwe = document.getElementById('preview')
const judg = document.getElementById('judg')
const hint = document.getElementById("hint")
let prenumber =Number(predictinput.value)
const clear = document.getElementById("clear")

// インプット最初からフォーカス
predictinput.focus()

// 正解ナンバーの作成
let correct = Math.floor(Math.random()*100+1) 
console.log(correct)
// 嘘のヒント番目
let fakenumber = Math.floor(Math.random()*10+1) 
console.log(fakenumber)

// 回答数
let chacount=0
// 回答プレビューの追加関数
const addpreviwe = ()=>{
    const preitem =document.createElement('span')
    preitem.className="preitem"
    preitem.textContent=prenumber+hint.innerText
    preitem.style.margin='0 5px'
    previwe.appendChild(preitem)
};
// 正解判定関数
const judgfunc=()=>{
    if(prenumber===correct){
        judg.innerText='正解！おめでとう！🎉　'
        judg.style.color='red'
        hint.innerText=""
        predictinput.disabled =true
        answerbtn.disabled = true
    }else if(prenumber>correct){
        judg.innerText="残念！☔️"
        judg.style.color='blue'
        hint.innerText="もっと小さい"
    }else{
        judg.innerText="残念！☔️"
        judg.style.color='green'
        hint.innerText="もっと大きい"
    };
};
const fakejudg=()=>{
    if(prenumber===correct){
        judg.innerText='正解！おめでとう！🎉　'
        judg.style.color='red'
        hint.innerText=""
        predictinput.disabled =true
        answerbtn.disabled = true
    }else if(prenumber>correct){
        judg.innerText="残念！☔️"
        judg.style.color='green'
        hint.innerText="もっと大きい"
        // judg.innerText="残念！☔️"
        // judg.style.color='blue'
        // hint.innerText="正解ナンバーより大きいです"
    }else{
        judg.innerText="残念！☔️"
        judg.style.color='blue'
        hint.innerText="もっと小さい"
        // judg.innerText="残念！☔️"
        // judg.style.color='green'
        // hint.innerText="正解ナンバーより小さいです"
    };
};
// chacount===chaltimesになったら
const gameover = ()=>{
    if(chacount===chaltimes && prenumber!==correct){
        predictinput.disabled =true
        answerbtn.disabled = true
        judg.innerText='GameOver 回答権を使い切りました...'
        judg.style.color='black'
    }
};

answerbtn.addEventListener('click',()=>{
    prenumber =Number(predictinput.value)
    if(chacount!==fakenumber){
        judgfunc();
    }else{
        fakejudg();}
    addpreviwe();
    chacount++
    gameover()
    predictinput.value=""
    predictinput.focus()
});

clear.addEventListener('click',()=>{
    document.location.reload()
});

document.addEventListener("keydown",(e)=>{
    if(e.key==='Enter'){
        answerbtn.click()
    }
});

