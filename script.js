'use strict'
// 1行目に記載している 'use strict' は削除しないでください

document.getElementById("registrationForm").addEventListener("submit" , 
            function(event) {
              event.preventDefault();//フォームの送信を止める(jsで処理したいから)


const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

if (username && password) {
    //ユーザー情報をローカルストレージに保存
    localStorage.setItem("username" , username);
    localStorage.setItem("password" , password);
    alert("登録が完了しました！アカウント情報登録に移ります！")
    window.location.href = "form.html"
} else {
    alert("未入力です")
}
});

document.getElementById("loginForm").addEventListener("submit" , 
            function(event) {
              event.preventDefault();//フォームの送信を止める(jsで処理したいから)

    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // ローカルストレージから保存したユーザー情報を取得
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert("ログインに成功しました！");
        window.location.href = "home.html"
        // document.getElementById("welcomeMessage").style.display = "block";
    } else {
        alert("ユーザー名またはパスワードが間違っています。");
    }
});
