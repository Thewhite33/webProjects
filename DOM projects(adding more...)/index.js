let istat = document.querySelector("h5");
let add = document.querySelector("#add");

var check = 0

add.addEventListener("click", function(){
    if(check==0){
        istat.innerHTML = "Friends";
        istat.style.color = "green"
        check = 1
        }else{
            istat.innerHTML = "Stranger";
            istat.style.color = "red"
            check = 0
        }

    })
    

    
    