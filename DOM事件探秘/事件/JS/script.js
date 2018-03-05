// //HTML事件，即在HTML元素上直接添加(例如onclick onmouseover）事件,例如 按钮1
// function showmessage(){
// 	alert('hello world');

// //DOM0级事件，即先获取元素，并将事件做为元素本身的一个属性
// var btn2= document.getElementById('btn2');
// btn2.onclick = function(){
// 	alert('DOM0级事件 btn2')
// }
// //DOM0级删除事件
// //btn2.onclick= null
// // //DOM2级事件，即先获取元素，并将事件做为元素本身的一个属性
// // //两个方法 addEventListener() 和removeEventListener()
// // //接受三个参数：要处理的事件，作为事件处理程序的函数 ，布尔值(false表示事件添加在冒泡阶段，true表示添加至捕获阶段，一般false.)；
// // var btn3= document.getElementById('btn3');
// // //注意!添加的事件去掉所有的on.例如 onclick==>click
// // btn3.addEventListener('click',showmessage,false);
// // btn3.addEventListener('click',function(){
// // 	alert(btn3.value);
// // },false)
// // //删除DOM2级事件，注意删除必须传入与添加事件时相同的参数，并且通过DOM2级添加的方法，不能用0级事件的删除方法删除,只能用下面的方法（removeEventListener）删除。
// // //btn3.removeEventListener('click',showmessage,false);


// // //IE 事件添加程序。因为IE8以前只支持事件冒泡。所以不需要布尔值
// // var btn4= document.getElementById('btn4');
// // btn4.attachEvent('onclick',showmessage)

// var btn3= document.getElementById('btn3');
// eventUtil.addHandler(btn3,'click',showmessage);
// //eventUtil.delHandler(btn3,'click',showmessage);

// function showBox(event){
// 	event = event || widow.event;
// 	var ele = event.target||event.scrElement;
// 	alert(ele);
// 	alert('这是放按钮的盒子');
// }


// //事件对象 event
// var btn4= document.getElementById('btn4');
// btn4.onclick = function(event){
// 	alert(event.target.nodeName);
// 	//阻止事件冒泡
// 	event.stopPropagation();

// //事件冒泡，在点击任何一个按钮的同时也触发了父元素的事件。
// var box= document.getElementById('box');
// eventUtil.addHandler(box,'click',showBox);
// //由于btn4阻止了事件冒泡，所以点击btn4不会触发box的事件。


// //阻止事件的默认行为
// //
// function stopGoto(event){
// 	event.stopPropagation();
// 	event.preventDefault();

// var go = document.getElementById('go');
// eventUtil.addHandler(go,'click',stopGoto);
// 
// 

window.onload=function(){
	var go = document.getElementById('go'),
		box = document.getElementById('box');

	eventUtil.addHandler(box,'click',function(){
		alert('我是父盒子');
	})	

	eventUtil.addHandler(go,'click',function(e){
		e=eventUtil.getEvent(e);
		alert(eventUtil.getElement(e).nodeName);
		eventUtil.preventDefault(e);
		eventUtil.stopPropagation(e);
	})
}