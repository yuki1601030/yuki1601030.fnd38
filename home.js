'use strict'
// 1行目に記載している 'use strict' は削除しないでください



function showTab(tabId) {
    // すべてのタブを非表示にする
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.style.display = "none");
    
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.style.display = "block";
    }
}
// 初期表示（最初のタブを表示する）
showTab("tab1");


function getCurrentTab() {
    const selectElements = document.getElementsByName("tab_select"); // 配列形式で
    if (selectElements.length > 0) {
        const selectElement = selectElements[0]; // 最初の要素を取得
        return selectElement.value; // 現在選択されているタブの内容を返す
    } else {
        return null; // 要素が見つからなかった場合
}
}
// console.log(getCurrentTab());


// num1~num2までの中のランダムな数を返す関数を定義
function randomNumber(num1,num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

// 送信ボタンを押す
document.getElementById("form-submit").addEventListener("submit" , 
            function(event) {
              event.preventDefault();//フォームの送信を止める(jsで処理したいから)

const idea = document.getElementById("form-inner").value;

if (idea && (getCurrentTab() ==="tab1")) {
    //情報をローカルストレージに保存
    localStorage.setItem(randomNumber(1,50) , idea);
    alert("追加完了！")
} else if(idea && (getCurrentTab() ==="tab2")) {
    localStorage.setItem(randomNumber(51,100) , idea);
    alert("追加完了！")
} else if(idea && (getCurrentTab() ==="tab3")) {
    localStorage.setItem(randomNumber(101,150) , idea);
    alert("追加完了！")
} else if(idea && (getCurrentTab() ==="tab4")) {
    localStorage.setItem(randomNumber(151,200) , idea);
} else {
    alert("未入力です")
}
});
// タブの中身によってランダムで番号付ける(日本：1-50,東海：51-100,愛知：101-150,北名古屋：151-200)
// ↑で達成
// 番号と内容をローカルに保存
// ↑で達成
// これはカードの内容ですの中にそのローカルのデータをランダムで表示

const ideaObjectJapan = [];
const ideaObjectTokai = [];
const ideaObjectAichi = [];
const ideaObjectKitanagoya = [];

for(const key in localStorage) {
    if(0 < key && key < 51) {
        ideaObjectJapan.push(localStorage[key]);
    } else if(51 <= key && key < 101) {
        ideaObjectTokai.push(localStorage[key]);
    } else if(101 <= key && key < 151) {
        ideaObjectAichi.push(localStorage[key]);
    } else if(151 <= key && key < 201) {
        ideaObjectKitanagoya.push(localStorage[key]);
    }
}

document.getElementById("card1").innerText = ideaObjectJapan[0];
document.getElementById("card2").innerText = ideaObjectTokai[randomNumber(1,ideaObjectTokai.length)-1];
document.getElementById("card3").innerText = ideaObjectAichi[randomNumber(1,ideaObjectAichi.length)-1];
document.getElementById("card4").innerText = ideaObjectKitanagoya[randomNumber(1,ideaObjectKitanagoya.length)-1];

function badswipe() {
    if (ideaObjectJapan.length === 0) {
    alert("もう表示できるアイデアがありません");
    document.getElementById("card1").innerText = "アイデアなし";
    return;
    }
    ideaObjectJapan.splice(0,1);
    if (ideaObjectJapan.length === 0) {
        document.getElementById("card1").innerText = "アイデアなし";
    } else {
        // 新しい先頭要素を表示
        document.getElementById("card1").innerText = ideaObjectJapan[0];
    }
}

function goodswipe() {
    if (ideaObjectJapan.length === 0) {
    alert("もう表示できるアイデアがありません");
    document.getElementById("card1").innerText = "アイデアなし";
    return;
    }
    ideaObjectJapan.splice(0,1);
    if (ideaObjectJapan.length === 0) {
        document.getElementById("card1").innerText = "アイデアなし";
    } else {
        // 新しい先頭要素を表示
        document.getElementById("card1").innerText = ideaObjectJapan[0];
    }
}

document.getElementById("bad-button1").addEventListener("click" , badswipe);
document.getElementById("good-button1").addEventListener("click" , badswipe);
// bad good ボタンで次の内容に切り替え

