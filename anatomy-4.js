// anonymous function
// IIFE - Imediately Invoked Function

(function (a, b, c){
    let x = 3
    console.log(a + b + c)
    console.log(x)
})(1, 2, 3);

(function (a, b, c){
    let x = 300
    console.log(a + b + c)
    console.log(x)
})(1, 2, 3);

(() => {
    console.log("arrow 1")
})();

(() => {console.log("arrow 2")})();