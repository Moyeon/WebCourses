var inputA = document.getElementById('A');
var inputB = document.getElementById('B');

function addAB(){
    var A = inputA.value * 1;
    var B = inputB.value * 1;

    console.log(A + B);
    alert('A + B = '+ (A+B));
}

function tt(){
    var A = inputA.value * 1;

    // console.log(A + ' x 1 = ' + (A*1));
    // console.log(A + ' x 2 = ' + (A*2));
    // console.log(A + ' x 3 = ' + (A*3));
    // console.log(A + ' x 4 = ' + (A*4));
    // console.log(A + ' x 5 = ' + (A*5));
    // console.log(A + ' x 6 = ' + (A*6));
    // console.log(A + ' x 7 = ' + (A*7));
    // console.log(A + ' x 8 = ' + (A*8));
    // console.log(A + ' x 9 = ' + (A*9));
    // console.log(A + ' x 10 = ' + (A*10));
    // console.log(A + ' x 11 = ' + (A*11));
    // console.log(A + ' x 12 = ' + (A*12));

    for(var i = 1; i<=12; i++){
        console.log(A + ' x '+ i +' = ' + (A*i));
    }
}

for(var i = 1; i<= 100; i++){
    if(i % 5 == 0){
        console.log(i);
    }
}

function mulofA(){
    var A = inputA.value * 1;

    for(var i = 1; i<= 100; i++){
        if(i % A == 0){
            console.log(i);
        }
    }
}

function mulofAreverse(){
    var A = inputA.value * 1;

    for(var i=100; i>=1; i--){
        if(i % A == 0){
            console.log(i);
        }
    }
}

function add1toA(){
    var A = inputA.value * 1;

    var sum = 0;
    for(var i = 1; i<=A; i++){
        sum = sum + i;
        console.log(sum);
    }
    console.log(sum);
}