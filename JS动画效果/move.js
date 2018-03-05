// JavaScript Document
function startmove(obj,itarget,attr,fn){
    //清除计时器
    clearInterval(obj.timer);
    //添加计时器
    obj.timer = setInterval(function(){
        //定义当前值
        var icur=0;
        //处理透明度的特殊情况
        if(attr=='opacity'){
            icur = Math.round(parseFloat(getStyle(obj,attr))*100);
            }
        else{
            icur = parseInt(getStyle(obj,attr));
            }
        //var icur = parseInt(getStyle(obj,attr));
        //定义速度
        var speed = (itarget-icur)/8;
        //算速度
        speed = speed>0?Math.ceil(speed):Math.floor(speed);
        //到达目标停止，没到达目标就继续；
        if(icur==itarget){
            clearInterval(obj.timer);
            if(fn){
                fn();
                }
            }else{
                if(attr=='opacity'){
                    obj.style[attr]='filter:alpha(opacity:'+(icur+speed)+')';
                    obj.style[attr]= (icur+speed)/100;
                    }
                 else{
                     obj.style[attr] = (icur+speed)+'px';
                     }
                }
        },50)
    }
    
//定义获取元素样式的函数    
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
        }
    else {
        return getComputedStyle(obj,false)[attr];
        }    
    }
    