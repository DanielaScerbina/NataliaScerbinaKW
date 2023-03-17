
document.addEventListener('DOMContentLoaded', () => {

console.log("colby")

const p = document.getElementById("text")
console.log(p)
document.querySelector("button")

document.querySelector("button").addEventListener("click",function(){

    document.querySelector("p").innerText=document.querySelector("input").value
})

})