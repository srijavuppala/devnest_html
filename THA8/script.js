const box = document.getElementById("boxclicked");
box.addEventListener('click',(c) => {
   box.classList.toggle('clicked');
    let sri =c.target.className;
    if(sri == " center white"){
        c.target.className = "center red";
        document.querySelectorAll("center white");
    }
    if(sri == "center red"){
    c.target.className = "center white";
    document.querySelectorAll("center red");
   }
   if(sri == "center"){
        c.target.className = "center white";
    document.querySelectorAll("center white");
   }
   
})