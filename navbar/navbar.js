

document.querySelector("#searchlogo").addEventListener("click",function(){
    console.log("hello")

    goto()
})

function goto(){
    var searchtextvalue=document.querySelector("#search").value
    console.log(searchtextvalue)
    console.log("hello")
    if(searchtextvalue=="tv"){
        window.location.href="../tv/tv.html"
    }
    if(searchtextvalue=="laptop"){
        window.location.href="../laptop/laptop.html"
    }
    if(searchtextvalue=="phone"){
        window.location.href="../phone/phone.html"
    } 
}
