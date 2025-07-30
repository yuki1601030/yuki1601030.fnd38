document.getElementById("information").addEventListener("submit" , 
            function(event) {
              event.preventDefault();//フォームの送信を止める(jsで処理したいから)


const lastName = document.getElementById("lastName").value;
const firstName = document.getElementById("firstName").value;
const age = document.getElementById("age").value;

if (lastName && firstName && age) {
    //ユーザー情報をローカルストレージに保存
    localStorage.setItem("lastName" , lastName);
    localStorage.setItem("firstName" , firstName);
    localStorage.setItem("age" , age);
    alert("登録が完了しました！ログイン画面に戻ります！")
    window.location.href = "index.html"
} else {
    alert("未入力です")
}
});
