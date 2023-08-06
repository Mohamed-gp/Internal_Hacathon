let fields = document.querySelectorAll(".fields > span");
let containerDiv = document.querySelectorAll(".card-container > div");
let empty = document.querySelector(".empty")

fields.forEach(function(el){
    el.addEventListener("click",function(){
        fields.forEach(function(ele){ele.classList.remove("active")})
        el.classList.add("active")
    
        containerDiv.forEach(function(element){
            if (element.classList.contains(el.classList[0])) {
                element.style.display = "flex"
            }
            else{
                element.style.display = "none"
            }
            if(el.classList[0] == "wheat"){
                empty.style.display = "block"
            }
            else{
                empty.style.display = "none"

            }
        })
    })

}
)

