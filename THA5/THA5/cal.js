window.onload = function() {
    function add(){
        let first_input = Number(document.querySelector(".num1").value);
        let second_input = Number(document.querySelector(".num2").value);
        var sum = first_input + second_input;
        var result = document.getElementById("result");
        result.innerHTML =  sum;
    }
    function multi(){
        let first_input = Number(document.querySelector(".num1").value);
        let second_input = Number(document.querySelector(".num2").value);
        var sum = first_input * second_input;
        var result = document.getElementById("result");
        result.innerHTML =  sum;
    }
    function divide(){
        let first_input = Number(document.querySelector(".num1").value);
        let second_input = Number(document.querySelector(".num2").value);
        var sum = second_input / first_input ;
        var result = document.getElementById("result");
        result.innerHTML =  sum;
    }
    
    function sub(){
        let first_input = Number(document.querySelector(".num1").value);
        let second_input = Number(document.querySelector(".num2").value);
        var sum = first_input - second_input;
        var result = document.getElementById("result");
        result.innerHTML =  sum;
    }
    
    
    document.querySelector(".add").addEventListener("click", add);
    document.querySelector(".sub").addEventListener("click", sub);
    document.querySelector(".multi").addEventListener("click", multi);
    document.querySelector(".divide").addEventListener("click", divide);
    }