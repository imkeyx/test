function slide(obj){
    
    var parent = document.querySelector(obj.box);
    var wrapper = parent.firstElementChild;
    var bottomCtr = parent.querySelector(obj.bottomCtr).children;
var speed = 50;
var index = 0;
var status= 0;
var bottomBtnIndex = 0;
var flag = true;
var img = wrapper.querySelectorAll(obj.img);
wrapper.appendChild(img[0].cloneNode(true));
var btnl = document.querySelector(obj.btnl)||null;
var btnr = document.querySelector(obj.btnr)||null;
var imgcount = wrapper.querySelectorAll(obj.img);
var imgWidth = imgcount[0].offsetWidth;
var star = setInterval(play,5000);
var starAnimate;
var btnAnimate;
var bottomAnimate;

function play(){
    if(index == -(imgcount.length - 1)){
        status = 0;
        index = -1
    }else{
        index -= 1;
    }
    animate(index);
    bottomBtnChange(index);  
    console.log(index);
}
    
bottomBtnChange(index);                


function animate(arg){
    speed = flag?-50:50;
    console.log(speed);
    clearInterval(starAnimate);
    starAnimate = setInterval(go,100);

    function go(){
        var left = wrapper.offsetLeft;
        if(left == imgWidth * index){
            clearInterval(starAnimate);
        }else{
            status = parseInt(status) + parseInt(speed);
            wrapper.style.left = status + 'px';
        }
    }
       
       
}

parent.onmouseover = function(){
    clearInterval(star);
    
    //左按钮事件
    btnl.onclick = function(){
        flag = false;
        speed = obj.speed?(flag?-obj.speed:obj.speed):(flag?-50:50);
        
        if(index == 0){
            status = -imgWidth * (imgcount.length -1);
            index = -(imgcount.length-2);
        }else{
            index +=1;           
        }        
        animate(index);
        bottomBtnChange(index);  
        
        
    }
    //右按钮事件
    btnr.onclick = function(){
        flag =true;
        speed = obj.speed?(flag?-obj.speed:obj.speed):(flag?-50:50);
        
        if(index == -(imgcount.length - 1)){
            status = 0;
            index = -1;
        }else {
            index -= 1;
        }
        animate(index);
        bottomBtnChange(index);  
    }

    for(var j = 0;j<bottomCtr.length;j++){
        bottomCtr[j].onclick = function(){
            var nowbtn = index;
            
            var nextbtn = getIndex(bottomCtr,this);
            console.log(nextbtn);
            for(var k = 0;k<bottomCtr.length;k++){
                bottomCtr[k].className = '';
            }
            this.className = 'on';
            bottomBtnCon(nowbtn,nextbtn);
            index = -(getIndex(bottomCtr,this));
            console.log(index);

            
        }
    }

};

function bottomBtnCon(now,next){
     clearInterval(bottomAnimate);
     bottomAnimate = setInterval(bottomGo,100);
     var bottomSpeed = 0;
     var a = Math.abs(now);
     var b = next;
     var c = Math.abs(a - b);
     
     if(a > b){
         bottomSpeed = 50 * c;
         
     }else if(a < b){
         bottomSpeed = -50 * c;
         
     }
     function bottomGo(){
         var left = wrapper.offsetLeft;
         
         if(left == imgWidth * (-b)){
            clearInterval(bottomAnimate);
         }else{
             status = parseInt(status) + parseInt(bottomSpeed);
             wrapper.style.left = status + 'px';
             
         }
     }

}

function bottomBtnChange(arg){
        if(index == -(imgcount.length - 1)){
            bottomBtnIndex = 0
        }else{
            bottomBtnIndex = Math.abs(arg);
        }
    
    for(var i = 0;i < imgcount.length-1;i++){
        bottomCtr[i].className = '';
    }
    bottomCtr[bottomBtnIndex].className = 'on';
}

parent.onmouseout = function(){
    flag = true;
    star = setInterval(play,3000)
}

function getIndex(arr,item){
    for(var i in arr){
        if(arr[i] == item)
        break;
    }
    return i;
}

}



export {slide};


