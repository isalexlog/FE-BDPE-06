console.log("Hello, world");

/*alert("Hello, world!");*/

var a = "Five";
console.log(a);

a = 5;
console.log(a);

a = "5" + 5;
console.log(a);

a = 5 + +"5";
console.log(a);

function sum(a,b) {
    return a + b;
}
var b = 100;
console.log(sum(a,b));

var sum2 = function(a,b) {
    return a + b;
};

console.log(sum2);

(function(a, b) {
    console.log(a + b);
})(2, 3);


var doSomething = function(func, b, c) {
  return func(b,c);
};

console.log(doSomething(sum2, 1, 2));

console.log(doSomething(
    function(b,c){
    return b * c
    },
    7,
    8)
);

//JSON

var obj = {
    field: 1,
    anotherField: "two",
    field3: function() {
        return "Hello, world"
    }
};

console.log(obj.field3());