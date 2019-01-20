function slide(obj){
    
    var parent = document.querySelector(obj.box);
    var wrapper = parent.firstElementChild;
var speed = obj.speed||50;
var index = 0;
var status= 0;

var img = wrapper.querySelectorAll(obj.img);
wrapper.appendChild(img[0].cloneNode(true));

var btnl = document.querySelector(obj.btnl)||null;
var btnr = document.querySelector(obj.btnr)||null;
var imgcount = wrapper.querySelectorAll(obj.img);
var imgWidth = imgcount[0].offsetWidth;
var star = setInterval(play,3000);
var starAnimate;
var btnAnimate;


function play(){
    
    if(index == 0){        
        animate(++index)
        console.log(index)
    }else{
       animate(index++);
       console.log(index)
       
    }
    
                      
}

function animate(arg){
    //    var speed = flag? -50 : 50;
       clearInterval(star);
       clearInterval(starAnimate);
       if(index ==imgcount.length){
        wrapper.style.left = 0;
        console.log(index)
        index = 0;
        star = setInterval(play,0)
        
    }else{
        star = setInterval(play,3000)
        console.log(index)
    } 
       
       starAnimate = setInterval(go,100);
       function go(){
           var left = wrapper.offsetLeft;
           if(left > -(imgWidth)*index){
               wrapper.style.left = left - speed + 'px';               
           }
       }
       console.log(index)
       
}

wrapper.onmouseover = function(){
    clearInterval(star);
    
    btnl.onclick = function(){
        

    }
    
    btnr.onclick = function(){
        clearInterval(btnAnimate);
        
    }

    function btnGo(){

    }
}

wrapper.onmouseout = function(){
    star = setInterval(play,3000)
}


}

export {slide};

