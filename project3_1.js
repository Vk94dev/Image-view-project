const center=document.querySelector(".center")

const image = ["https://images.unsplash.com/photo-1769184618473-58c1f0e294f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1618477202872-89cec6f8d62e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1614484564972-e37b65b5a573?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZSUyMGltYWdlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1647202321530-dd3f0c1b1be0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1694012601840-de741da7f3a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hbCUyMGltYWdlfGVufDB8fDB8fHww"
];

var index=0;
 
function throttle(fn, delay) {        
    let t = 0;
    return function (...args) {
        let now = Date.now();
        if (now - t >= delay) {
            fn.apply(this, args);
            t = now;
        }
    };
}
document.querySelector(".center").addEventListener("mousemove", throttle((dets) => {
    // console.log('run');
    var div = document.createElement("div");
     div.classList.add("imagediv");
     div.style.left = dets.clientX + 'px';
     div.style.top = dets.clientY + 'px';

     var img = document.createElement("img");
   
    img.setAttribute("src",image[index]);
    index=(index+1)%image.length;
    div.appendChild(img);


     document.body.appendChild(div);

     gsap.to(img, {
        y:"0%",
        ease:"Power2.out",
        duration:0.5
     });

    gsap.to(img, {
        y:"100%",
        delay:0.5,
        ease:"Power2.in",
        duration:0.6
     });
     


     setTimeout(function(){
        div.remove();
     },1000)
     
}, 200));