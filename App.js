function getNumber(num){
    var screen = document.getElementById("screen");
    screen.value += num; 
}


function screenClear(){
    var screen =  document.getElementById("screen");
    screen.value = ""; 
}

function backSpace(){
    var screen = document.getElementById("screen")
    var a = screen.value;
    if (a.length > 0){
        a = a.substring(0, a.length-1);
        screen.value = a
    }
}

var i = 0;
function brackets(){
    var screen = document.getElementById("screen")
    if (i == 0){
        screen.value += '(';
        i = 1;
    }
    else if ( i == 1 ){
        screen.value += ')';
        i = 0;
        }
}

function result(){
    var screen = document.getElementById("screen")
    abc = eval(screen.value);
    document.getElementById("screen").value = abc
}


function screenSign(operation){
    var screen = document.getElementById("screen")
    switch(operation){
        case '+': 
        screen.value += '+';
        break;
        case '-': 
        screen.value += '-';
        break;
        case '*': 
        screen.value += '*';
        break;
        case '/': 
        screen.value += '/';
        break;
        case '+/-':
        screen.value += '+' + screen.value;
    }
}