//자바스크립트 소스 파일 : 파일명.js
/*
 * *.js 는 <script> 태그 사용 안합니다.
 */

function testFunc1() {
    alert("Alert Popup Window\n" +
        typeof ("apple") + ", " +
        typeof ('c') + ", " +
        typeof (123) + ", " +
        typeof (3.14) + ", " +
        typeof (12 + "3") + ", " +
        typeof (3 == 4) + ", " +
        typeof (num));
}

function showAlert() {
    alert("Alert 입니다~~");
    document.getElementById('box1').innerHTML = "Alert 입니다~~";
}

function showConfirm() {
    var returnValue = confirm("확인은 Y 취소는 N");
    document.getElementById('box1').innerHTML = returnValue ? "Y" : "N";
}

function showPrompt() {
    var returnValue = prompt("오늘은 뭐 드셨나요?");
    document.getElementById('box1').innerHTML = returnValue + " 을(를) 드셨군요!!";
}

function calculator() {
    var result =
        Number(document.getElementById("num1").value) + Number(document.getElementById("num2").value);
    document.getElementById('result').value = result;
    console.log(typeof (num1) + ", " + typeof (num2) + ", " + typeof (result));
}

function calculator2(oper) {
    var result = 0;
    var su1 = Number(document.getElementById("val1").value);
    var su2 = Number(document.getElementById("val2").value);
    switch (oper) {
        case '+':
            result = su1 + su2;
            break;
        case '-':
            result = su1 - su2;
            break;
        case 'x':
            result = su1 * su2;
            break;
        case '/':
            result = su1 / su2;
            break;
        case '%':
            result = su1 % su2;
            break;
    }
    document.getElementById("box2").innerHTML = result;
}

function check() {
    alert("비교연산자 == 확인 : " + ('' == false) + ", " +
        ('' == 0) + ", " + (0 == false) + ", " +
        ('273' == 273) + "\n" + /* && typeof()*/
        "비교연산자 === 확인 : " + ('' === false) + ", " +
        ('' === 0) + ", " + (0 === false) + ", " +
        ('273' === 273) + "\n" +
        "비교연산자 != 확인 : " + ('' != false) + ", " +
        ('' != 0) + ", " + (0 != false) + ", " +
        ('273' != 273) + "\n" +
        "비교연산자 !== 확인 : " + ('' !== false) + ", " +
        ('' !== 0) + ", " + (0 !== false) + ", " +
        ('273' !== 273) + "\n");
}

function checkSwitch() {
    var today = new Date();
    var currentHour = today.getHours();
    switch (true) {
        case currentHour == 9:
            alert("업무 시작 시간입니다.");
            break;
        case currentHour < 11:
            alert("오전 간식 시간입니다.");
            break;
        case currentHour < 15:
            alert("낮 간식 시간입니다.");
            break;
        case (currentHour > 16):
            alert("퇴근 시간입니다.");
            break;
        default:
            alert("일할 시간입니다.");
    }
}
// 자동 정렬 Ctrl + Shift + L

function checkLogic(){
    var input = Number(prompt("숫자를 입력하세요."));
    //짧은 조건식 : || ; 앞이 거짓이면 뒤를 실행, && ; 앞이 참이면 뒤를 실행
    input%2 == 0 || alert('홀수 입니다.');
    input%2 == 0 && alert('짝수 입니다.'); // if / else 축약문
}
/*
function attack(number) {
    if (number == 1) {
        document.getElementById("jh1").innerHTML += "<br>정훈" + number + "는 다른 정훈을 때렸다!<br>";
        document.getElementById("jh2").innerHTML += "<br>정훈2는 다른 정훈에게 맞았다!<br>";
        document.getElementById("jh2").innerHTML += "현재 체력 : " +
            document.getElementById("jh2").innerHTML.substring(8, 10);
    } else {
        document.getElementById("jh2").innerHTML += "<br>정훈" + number + "는 다른 정훈을 때렸다!<br>";
        document.getElementById("jh1").innerHTML += "<br>정훈1은 다른 정훈에게 맞았다!<br>";
        document.getElementById("jh1").innerHTML += "현재 체력 : " +
            document.getElementById("jh1").innerHTML.substring(8, 10);
    }
}*/
