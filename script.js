var card=document.querySelector(".card")

var love=document.querySelector("i")
card.addEventListener("dblclick",function(){
     love.style.transform='translate(-50%,-50%)scale(1)';
    setTimeout(function(){
        love.style.transform='translate(-50%,-50%)scale(0)';
    },1000)
})

