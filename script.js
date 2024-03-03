let ball=document.querySelector("#ball")
let offset=10;

// setInterval( ()=>{
//     ball.style.left = offset+"px"
//     offset +=1
// },10)

function animate(){
    ball.style.left = offset+"px"
    offset +=1
    requestAnimationFrame(animate)
}
animate()