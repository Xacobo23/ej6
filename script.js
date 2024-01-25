function calcular() {
    let cantidad = document.getElementById("number");
    let total = document.getElementById("total");
    let check;

    check = cantidad.value;
    total.innerText = " " + check * 12.55 + "€"
}

let n = 0;

 
function right() {
    let img = document.getElementsByTagName("img")
    let right = document.getElementById("right")
   
    img[n].classList.add('d-none')
    n++;
    if (n==9){ 
        n=0
    }
    img[n].classList.remove('d-none')
   
    
    
}
    

function left(){
    let img = document.getElementsByTagName("img")
    let right = document.getElementById("right")
    
      
    img[n].classList.add('d-none')
    n--;
    if(n==-1){
        n=8
    }
    img[n].classList.remove('d-none')
    
    
}

