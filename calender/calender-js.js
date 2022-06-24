// 年、月入力ラベル作成
const monthinput = document.getElementById("month-input")
const yearinput = document.getElementById("year-input")

for(let i=1;i<=3000;i++){
    const option= document.createElement("option");
    option.setAttribute("class","yea")
    option.innerText=i;
    yearinput.appendChild(option);
};
for(let i=1;i<=12;i++){
    const option= document.createElement("option");
    option.setAttribute("class","mon")
    option.innerText=i;
    monthinput.appendChild(option);
};

const opt=document.getElementsByClassName("mon")
opt[6-1].setAttribute("selected","")
const yea=document.getElementsByClassName("yea")
yea[2022-1].setAttribute("selected","")

// カレンダー初期設定
let year =2022;
let month = 6-1 ;
let manthcal=[];
const yearlabel=document.getElementById("year-name")
const monthlabel=document.getElementById("month-name")



// 日にちを格納
const add_manthcal=()=>{
    manthcal=[];
    let firstdate=new Date(year,month,1) ;
    let lastdate=new Date(year,month+1,0) ;
    let manthlength=lastdate.getDate();
    for(let i=0; i<firstdate.getDay();i++){
        manthcal.unshift("");
    };
    for(let i=0 ;i< manthlength; i++){
        manthcal.push(i+1);
    };
    for(let i=6;i>lastdate.getDay();i--){
        manthcal.push("");
    };
};
add_manthcal();




// htmlに表示
const calendertable = document.getElementById("calender-table")
const createtable=()=>{
    let number=0;
    for(i=0;i<5;i++){
        const cTr=document.createElement("tr");
        cTr.className=`weak`;
        for(j=0;j<7;j++){
            const cTd=document.createElement("td") ;
            cTd.innerText=manthcal[number];
            cTr.appendChild(cTd);
            number+=1
        };
        calendertable.appendChild(cTr);
    };
};
createtable();
const removetable =()=>{
    let classweak= document.getElementsByClassName("weak")
    for(let i=0;i<5;i++){
        classweak[0].remove();
    };
};

// 日曜日赤色
const colerRed = ()=>{
    let tdtagu = document.getElementsByTagName("td");
    for(let i=0;i<tdtagu.length;i++){
        if(i%7===0){
            tdtagu[i].style.backgroundColor="red"
        }
    };
}
colerRed();

// 年ラベル変更
yearinput.addEventListener("change",()=>{
    year=yearinput.value
    add_manthcal();
    removetable();
    createtable();
    colerRed();
});

// 月ラベル変更
monthinput.addEventListener("change",()=>{
    month=monthinput.value-1
    add_manthcal();
    removetable();
    createtable();
    colerRed();
});

// タイマー
const birthday = new Date(2021,3,26)
const today = new Date()
// 何歳の部分
let pasYear = 0
if(today.getMonth()==3){
    if(today.getDate()>=26){
        pasYear = today.getFullYear() - birthday.getFullYear()
    }else{
        pasYear = today.getFullYear() - birthday.getFullYear()-1
    }
}else if(today.getMonth()>=4){
    pasYear = today.getFullYear() - birthday.getFullYear()
}else{
    pasYear = today.getFullYear() - birthday.getFullYear()-1
}
// 何ヶ月かの部分
let pasMonth = 0
if(today.getDate()>=26){
    pasMonth = today.getMonth() - birthday.getMonth()
}else{
    pasMonth = today.getMonth() - birthday.getMonth()-1
}
if(pasMonth < 0){
    pasMonth +=12
}
const Year=document.getElementById('year')
Year.textContent=Math.floor(pasYear)
const Month=document.getElementById('month')
Month.textContent=Math.floor(pasMonth)
