function sayHello() {
    document.body.innerText = "sayHello() : Hello, World!";
}
// 페이지가 완전히 로딩된 후 함수 실행
window.onload = sayHello;