// JavaScript Document
var list = ['iphone','ipad','三星手机','苹果手机','华为手机','小米手机','魅族手机'],
    bonus = document.getElementById('bonus'),
    start = document.getElementById('start'),
    istop = document.getElementById('istop');

    
    
window.onload = function (){

    start.onclick = startfun;
    istop.onclick = stopfun;
    document.onkeyup = function(event){
        event = event || window.event;
        if(event.keyCode==13){
            console.log(timer);
            if(timer){
                stopfun();
            }else{
                
                startfun();
            }
       
        }
            
    }
       
}

var timer = null;
startfun = function(){ 
    clearInterval(timer);
    timer = setInterval(function(){
        var index = Math.floor(Math.random()*list.length);
        bonus.innerHTML = list[index];
    },300)           
    start.style.background = 'gray';
}
    
stopfun = function(){
    clearInterval(timer); 
    timer = null;   
    start.style.background = 'blue';
}