let res1; // الإيجار
let res2; // البضاعة
let res3; // الزكاة
let res4; // الربح
let res5; // مرتابات

let result1 = document.getElementById("result");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");
let result4 = document.getElementById("result4");
let result5 = document.getElementById("result5");
function cli() {
    result1.style.display = "block";
    result2.style.display = "block";
    result3.style.display = "block";
    result4.style.display = "block";
    result5.style.display = "block";
}

function calc(e) {
    e.preventDefault();
    let money = Number(document.getElementById("money1").value);


    res1 = money * 0.135;// 0.135 = 13.5% الإيجار
    res2 = money * 0.45;// 0.45 = 45% بضاعة
    res3 = money * 0.025;// 0.025 = 2.5% زكاه
    res4 = money * 0.32;// 0.32 = 32% ربح
    res5 = money * 0.07;// 0.07 = 7% مرتابات
    //how to make the him print the float result with 2 decimal places 
      
    document.getElementById("result").innerHTML = "الإيجار : " + res1.toFixed(2) + " EGP";//! toFixed is used to round the number 2 decimals only for the float numbers
    document.getElementById("result2").innerHTML = "البضاعة : " + res2.toFixed(2) + " EGP";
    document.getElementById("result3").innerHTML = "الزكاة : " + res3.toFixed(2) + " EGP";
    document.getElementById("result4").innerHTML = "الربح : " + res4.toFixed(2) + " EGP"; 
    document.getElementById("result5").innerHTML = "مرتابات : " + res5.toFixed(2) + " EGP";
    console.log(money, res1, res2, res3, res4);
}
