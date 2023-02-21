//문자열:String 문자열 데이터를 객체로 취급!

//문자열 객체 생성
let str1 = "hello";
str1 = new String("Hello");

console.log(str1.charAt(1)); //인덱스 번호에 해당하는 문자반환
console.log(str1[1]); //마치 배열처럼 처리가능

//문자열에서 일치하는 문자를 찾아 제일 먼저 일치하는 문자의 인덱스 번호
//않으면 -1 반환
console.log(str1.indexOf("@orld"))

//오른쪽에서부터 일치하는 문자를 찾아~
console.log(str1.lastIndexOf("world"));

//문자열에서 왼쪽에서 일치하는 문자를 찾아 제일 먼저 찾은 문자 반환
//없으면 null 반환
console.log(str1.match("@orld"))

//왼쪽부터 원하는 문자를 찾아, 제일 먼저 찾은 문자를 치환
//원본을 건드리지 X 새로운 문자열 반환!!
console.log(str1.replace("world","javascript"))

//indexOf()
//vs
//search(): 문자열,정규표현식(문자 패턴)과 일치하는 데이터
//특정 문자를 포함하는 여부 체크 -> (ex. 비밀번호에 허용되는 특수분자 시리즈)
console.log(str1.search("world"))

// slice(a,b): a개의 문자를 자르고,b번째 이후에 문자를 자른 후 남은 문자
const str = "The quick brown fox jumps over the lazy dog";

console.log(str.slice(31)); //the lazy dog
console.log(str.slice(4,19)) //"quick brown fox"
console.log(str.slice(-4)) // dog
console.log(str.slice(-9,-5)) //"lazy"

//substring(a[,b]): 문자열 a-b까지를 반환 (b번째 인덱스는 포함되지 않음!)
//원본 건드리지X 새로운 문자열 반환
//만약 b를 입력하지 않는 경우 끝까지~
console.log(str.substring(4,9));

//구분 문자를 기준으로 문자 데이터를 쪼개서 배열에 저장 후 반환
//원본 건드리지 X 새로운 배열 반환
const result = str.split(" ")
console.log(result)
//substr(a,숫자): 문자열의 a번쨰 인덱스는 숫자개의 문자열을 반환

//문자열 -> 전부 대문자
//원본 건드리지 X 새로운 문자열 반환
console.log(str1.toUpperCase());

//문자열 -> 전부 소문자
//원본 건드리지 X 새로운 문자열 반환
console.log(str1.toLowerCase());

//글자 수 반환
console.log(str1.length);

console.log(str1.concat("2023!"));
console.log(str1+"2023");

//trim(): 문자열의 앞이나 뒤에오는 공백을 제거
//trimEnd(): 오른쪽 공백만 제거
//trimStart(): 왼쪽 공백만 제거
const str2 ="__hello___";
console.log(str2.trim());

//2.브라우저 객체 모델 (BOM)
//window: 가상 최상위 객체
//document, screen,location, history,navigator...
//window.location.href = "";

//URL 전달받은 페이지를 새창에 표시!
//window.open("https://www.naver.com","naver","width=500,height=500,left=50,top=50,scrollbars=no");
//alert():메세지를 표시하는 경고창. 확인을 눌러야 다음 코드 진행
//alert("로그인을 먼저해주세요.")

//prompt("전달할 메세지"[,"기본값"])
//const userInput = prompt("여러분의 이름은?","디지텍고등학교 학생");

//confirm("전달할 메세지") ->boolean 데이터 반환
//const userConfirm = confirm("둘중에 하나만 골라 yes or yes");

//setInterval(함수,시간): 계속해서 일정 시간 간격으로 함수를 호출 
//setTimeout(함수,시간): 단한번! 일정 시간이 흐른 후 함수를 호출
function sayHello(){
    console.log("안녕하세요")
}
//전달하는 요소는 함수의 이름!!!(괄호를 붙이면 XXX)
const sayHelloOneSec = setTimeout(sayHello,1000);

//clear~를 통해 함수 제거 가능
clearInterval(sayHelloOneSec);

//screen: 사용자의 모니터 정보(pc, 핸드폰 , 태블릿)
console.log(screen.width);
console.log(screen.height);

//location: 브라우저와 관련된! 현재 URL에 대한 정보, 새로고침 메서드를 제공
console.log(location.href); //현재 접속중인 URL
console.log(location.host); // 호스트(서버주소) & 포트번호 변환
//location.reload();
//location.href 지정하여 화면 이동 가능
//location.href = "https://naver.com"

//history: 사용자가 방문한 사이트의 기록 이전 방문, 다음 방문 한번씩 제어 가능
//history.length: 방문 기록에 저장된 목록 개수
history.back(); //이전 방문 사이트로 이동(만약 X 이동안함)
history.forward(); //다음 방문 사이트로 이동(만약X 이동안함)

//navigator: 현재 사용자가 사용하는 브라우저 정보, 운영체제의 정보
navigator.language;
console.log(navigator.onLine) //유저가 온라인 여부 반환(boolean).

//3. 문서 객체 모델(DOM): HTML 문서구조


//함수: js코드의 묶음, function키워드를 사용하거나, arrow 함수 형태
//데이터를 전달받아 사용할 수 있으며, 실행 결과를 반환할수도 있다!

//호이스팅 "물건을 끌어올린다" 사전적 정의
// 함수를 정의하기 전에, 먼저 호출을 해도 문제X
sayHello();

//1. 함수 정의 방법
function sayHi(){
    console.log("Hi~~1")
}

//2. 익명 함수
const sayH2 = function(){
    console.log("Hi~~2")
}

//3. es6에서 등장한 화살표 함수
const sayH3 = () => {
    console.log("Hi~~1")
}

//4. function생성자
const sayHi4 = new Function('name','console.log("Hi~~")')


//매개변수 : 함수를 실행하기 위해 필요한 값을 함수 외부에서 내부로 전달하기위해 사용!
//인수 arguments -> 함수를 호출할 떄 지정, 개수, 타입에 제한X

//함수 선언문
function add(x,y){
    

    x = x || 0
    y = y || 0
    console.log(x,y) //전달받은 값이 없다면 undefined 있으면 그값으로
    console.log(arguments[2])
    return x+y;
}

//매개변수는 최대 3개를 넘지 말자~ 만약넘는 다면 객체를 통해 전달하자!)
const student = {
    name:"chanhee",
    age:20,
    height:158,
    score:100
};

function printStudent(student){
    student.name
}
//함수 호출 
let reuslt = add(1,2);

//JS에서의 함수!! -> 매개변수의 개수 체크X 인수의 개수 X
//인수가 부족(덜 전달) -> 함수 내부에서는 부족한 데이터는 undefined처리
//인수가 과함(더 전달) -> 무시(버려지지않고,arguments 객체에 지향)
console.log(add(1,2,3)); 

const numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(Math.max(numbers)); //NaN(숫자가 아닌값이 넘어와서 판단X)
console.log(Math.max(...numbers));

//ES5
var maxNum = Math.max.apply(null,numbers);

//2. 배열 내부에서 사용하는 경우
//concat 대신
console.log([1,2].concat[3,4]); //ES5
const arr = [...[1,2],...[3,4]];
console.log(arr);
const result1 = [1,2] + [3,4]
console.log(result1)

//splice 대신
//splice: 어떤 배열의 중간에 다른 배열의 요소를 추가하거나 제거하기 위해 사용
//원본 건드림~
const arr1 = [1,4];
const arr2 = [2,3];

//[1,2,3,4]을 만들자
arr1.splice(1,0,...arr2) //[1,2,3,4]

//배열의 복사를 위해 slice를 사용했음(ES6)
const origin = [10,20];
const copy = origin.slice(); //ES6

const trendCopy = [...origin]; //ES6

//객체 내부에서 사용하는 경우
const obj1 = {x:1,y:2};
const copyObj1 = {...obj1}

const marged = {x:1 ,y:2, ...{a:3,b:4}};
//ES5
const merged = Object.assign({}, {x:1,y:2}, {a:3,b:4}); //ES5
