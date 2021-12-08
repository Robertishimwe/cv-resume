function ColorChange(){
    let min = Math.floor(Math.random()* (999999 - 1000)+1000);
    let symbol = "#";
    let ColorCode = symbol+min;
   let connector = document.getElementById("title").style.color=ColorCode;
    

}
