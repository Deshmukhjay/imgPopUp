 const throttleFunction = (func, delay) => {
 
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

document.querySelector("#center")
.addEventListener("mousemove",throttleFunction((dets)=>{
var div=document.createElement("div")
div.classList.add('imgdiv')
div.style.left=dets.clientX+'px'
div.style.top=dets.clientY+'px'
document.body.appendChild(div)

var img=document.createElement("img")
img.setAttribute('src',"https://images.unsplash.com/photo-1717468395904-83bb53308158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D")
div.appendChild(img)

gsap.to(img,{
    y:0,
    ease:Power1,
    duration:.6
    
})
gsap.to(img,{
    y:"100%",
    delay:.6,
    ease:Power2,
    
})
setTimeout(() => {
    div.remove()
}, 2000);
},400)
)