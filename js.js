let num1 = document.getElementById("1");
let num2 = document.getElementById("2");
let num3 = document.getElementById("3");
let num4 = document.getElementById("4");
let num5 = document.getElementById("5");
let num6 = document.getElementById("6");
let num7 = document.getElementById("7");
let num8 = document.getElementById("8");
let num9 = document.getElementById("9");
let num0 = document.getElementById("0");
let C = document.getElementById("c");
let mult = document.getElementById("mult");
let sum = document.getElementById("som");
let sub = document.getElementById("sub");
let igual = document.getElementById("igual");
let v = document.getElementById("v");
let d = document.getElementById("d");

let n ='';
let n1;
let op='';
let n2;
let updateScreen='';

document.getElementById("s").innerHTML = 0;

num1.addEventListener("click", function(){
    updateScreen += '1'
    n+='1';
    document.getElementById("s").innerHTML = updateScreen;
    
})



num2.addEventListener("click", function(){
    updateScreen +=2;
    n+='2';
    document.getElementById("s").innerHTML = updateScreen;
    
})



num3.addEventListener("click", function(){
    updateScreen +=3
    n+='3';
    document.getElementById("s").innerHTML = updateScreen;
    
})



num4.addEventListener("click", function(){
    updateScreen += 4
    n+='4';
    document.getElementById("s").innerHTML = updateScreen;
    
})

num5.addEventListener("click", function(){
    updateScreen += 5
    n+='5';
    document.getElementById("s").innerHTML = updateScreen;
    
})

num6.addEventListener("click", function(){
    updateScreen += 6
    n+='6';
    document.getElementById("s").innerHTML = updateScreen;
    
})

num7.addEventListener("click", function(){
    updateScreen += 7
    n+='7';
    document.getElementById("s").innerHTML = updateScreen;
    
})

num8.addEventListener("click", function(){
    updateScreen += 8
    n+='8';
    document.getElementById("s").innerHTML = updateScreen;
    
})

num9.addEventListener("click", function(){
    updateScreen += 9
    n+='9';
    document.getElementById("s").innerHTML = updateScreen;
    
})

num0.addEventListener("click", function(){
    updateScreen += 0
    n+='0';
    document.getElementById("s").innerHTML = updateScreen;
    
})

v.addEventListener("click", function(){
    updateScreen += "."
    n+='.';
    document.getElementById("s").innerHTML = updateScreen;

})

C.addEventListener("click", function(){
     n ='';
     n1;
     op='';
     n2;
     updateScreen='';
     document.getElementById("s").innerHTML = 0;
})

d.addEventListener("click", function(){
    op = "/";
    n1 = n;
    n='';
    updateScreen ='';
    document.getElementById("s").innerHTML = "/";

})

sum.addEventListener("click",function(){

    op = "+";
    n1 = n;
    n='';
    updateScreen ='';
    document.getElementById("s").innerHTML = "+";
    
    console.log(n1)

})

sub.addEventListener("click",function(){

    op = "-";
    n1 = n;
    n='';
    updateScreen ='';
    document.getElementById("s").innerHTML = "-";
    
    console.log(n1)

})

mult.addEventListener("click",function(){

    op = "*";
    n1 = n;
    n='';
    updateScreen ='';
    document.getElementById("s").innerHTML = "x";
    
    console.log(n1)

})

function isFloat(x) {
    if(!isNaN(x)) {
        if(parseInt(x) != parseFloat(x)) {
                return true;
      }
    }   
    return false
}


igual.addEventListener("click", function(){
n2=n;
console.log(typeof n1)
if (op === "+"){

    var result = parseFloat(n1) + parseFloat(n2);
    document.getElementById("s").innerHTML = result;
    if( isFloat(result) == true){
        document.getElementById("s").innerHTML = result.toFixed(2);
        n = result.toFixed(2).toString();
    }else{
        document.getElementById("s").innerHTML = result
        n = result.toString()
    }
   
}else if(op === '-'){

    var result = parseFloat(n1) - parseFloat(n2);
    document.getElementById("s").innerHTML = result.toFixed(2);
    if( isFloat(result) == true){
        document.getElementById("s").innerHTML = result.toFixed(2);
        n = result.toFixed(2).toString();
    }else{
        document.getElementById("s").innerHTML = result
        n = result.toString()
    }

}else if(op === "*"){

    var result = parseFloat(n1) * parseFloat(n2);
    if( isFloat(result) == true){
        document.getElementById("s").innerHTML = result.toFixed(2);
        n = result.toFixed(2).toString();
    }else{
        document.getElementById("s").innerHTML = result
        n = result.toString()
    }
    
    
}else if(op === "/"){
    
    var result = parseFloat(n1) / parseFloat(n2);
    document.getElementById("s").innerHTML = result.toFixed(2);
    if( isFloat(result) == true){
        document.getElementById("s").innerHTML = result.toFixed(2);
        n = result.toFixed(2).toString();
    }else{
        document.getElementById("s").innerHTML = result
        n = result.toString()
    }
}
})
