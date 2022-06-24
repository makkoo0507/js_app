const quiz=[
    {
    question:"愛は何歳でしょうか？",
    answers:["25歳","28歳","32歳","永遠の１８歳"],
    correct:"28歳"
    },
    {
    question:"壱門は何歳でしょうか？",
    answers:["0歳","1歳","2歳","年齢の概念がない妖精"],
    correct:"1歳"
    },
    {
    question:"まっこーの本名は？",
    answers:["ボス","ジョニーデップ","聖士","ゴッド"],
    correct:"聖士"
    },
    {
    question:"玉城家の所在地は？",
    answers:["真志喜","真喜志","真和志","菅田将暉"],
    correct:"真志喜"
    },
    {
    question:"聖士は誰が好きでしょうか？",
    answers:["愛","愛","愛","愛"],
    correct:"愛"
    },

];

const $button = document.getElementsByTagName("button") ;
let buttonlength=$button.length ;
const quizelength=quiz.length
let quizeindex=0;
let score=0;
// クイズのセットアップ
const setupquiz= (number)=>{
    // 問題文の提示
    document.getElementById("js-question").textContent=quiz[number].question;
    // ボタンに選択肢を反映させる
    for(let i=0;i < buttonlength;i++){
        $button[i].textContent=quiz[number].answers[i];
    };
};
// ボタンをクリックしたときの正誤判断と次の問題へ
setupquiz(0);
const clickHandler=(quizeindex)=>{
    for(let i=0;i < buttonlength;i++){
        $button[i].addEventListener("click",(e)=>{
            if(e.target.textContent===quiz[quizeindex].correct){
                window.alert("正解！")
                score++
            }else{
                window.alert("残念！")
            };
            quizeindex++
            if(quizeindex<quizelength){
                // 次の問題
                setupquiz(quizeindex);
            }else{
                // 問題終了
                window.alert(`お疲れ様でした！あなたの得点は${score}/${quizelength}点`);
                setupquiz(0);
                quizeindex=0;
            }
        });
    };
};
clickHandler(0);
