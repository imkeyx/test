function slide(obj){
    
    var parent = document.querySelector(obj.box);
    var wrapper = parent.firstElementChild;
// 轮播几张图片就使用图片总数+1的容器
// 如果index等于1，说明是第一张图片，
// 判断用户行为，如果点击左按钮，则首先无动画切到最后一张也就是代表其本身的图片
// 再执行动画，此时画布会滑到真正的最后一张，
var speed = obj.speed||50;
var index = 0;
var status= 0;

var img = wrapper.querySelectorAll(obj.img);
wrapper.appendChild(img[0].cloneNode(true));

var btnl = document.querySelector(obj.btnl);
var btnr = document.querySelector(obj.btnr);
var imgcount = wrapper.querySelectorAll(obj.img);
var imgWidth = imgcount[0].offsetWidth;
var star = setInterval(play,3000);
var starAnimate;


function play(){
    if(index ==imgcount.length-1){
        clearInterval(star);
        wrapper.style.left = 0;
        index = 1;
        star = setInterval(play,3000);
    }else{
       index++;
       animate(index);
    }
                      
}

function animate(arg){
    //    var speed = flag? -50 : 50;
       clearInterval(starAnimate);
       starAnimate = setInterval(go,100);
       function go(){
           var left = wrapper.offsetLeft;
           if(left > -(imgWidth)*index){
               wrapper.style.left = left - speed + 'px';               
           }
       }
       console.log(imgWidth)
     
}

wrapper.onmouseover = function(){
    clearInterval(star);
    btnl.onclick = function(){    
        
    }
    
    btnr.onclick = function(){
        
    }
}

wrapper.onmouseout = function(){
    star = setInterval(play,3000)
}


}

export {slide};

