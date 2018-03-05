// JavaScript Document
function startmove(obj,json,fn){
//同步运动函数
    //清除定时器，避免出现多个定时器  
    clearInterval(obj.timer);
 
    //设定定时器
    obj.timer = setInterval(function () {
        //声明标杆
        var flag = true;
         
        //遍历同步运动属性
        for (var attr in json) {
            //获取属性值
            var icur = 0;
            if (attr == 'opacity') {
                icur = Math.round(parseFloat(getStyle(obj,attr)) * 100);
            } else {
                icur = parseInt(getStyle(obj, attr));
            }
 
            //设置运动速度
            var speed = (json[attr] - icur)/100;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
 
            // 判断是否所有值都达到了目标值，判定暂停定时器的指标
            if (icur != json[attr]) {
                flag = false;
            }
            if (attr == 'opacity') {
                obj.style.opacity = (icur + speed) / 100;
                obj.style.filter = 'alpha(opacity:' + (icur + speed) + ')';
            } else {
                obj.style[attr] = (icur + speed) + 'px';
            }
        }  
         
        // 注意，for in遍历到此结束，下面的清除定时器部分不属于for遍历里面的代码，是定时器最后面的部分
        //清除定时器
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }      
    }, 1);
}
 
 
//获取任意属性
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]; //IE取样式
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}
    