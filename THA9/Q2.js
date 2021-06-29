var number = document.querySelectorAll(".box").length;
console.log(number);
var booked = 0;
for(var i=0;i<number;i++){
   document.querySelectorAll(".box")[i].addEventListener("click",function(){
       if(this.classList.contains("white")){
           this.classList.remove("white");
           booked-=1;
           number+=1;
           document.querySelector(".booked").innerHTML= booked;
           document.querySelector(".remaining").innerHTML=number;
       }else{
           this.classList.add("white");
           booked+=1;
           number-=1;
           document.querySelector(".booked").innerHTML= booked;
           document.querySelector(".remaining").innerHTML=number;
       }
   });
}
