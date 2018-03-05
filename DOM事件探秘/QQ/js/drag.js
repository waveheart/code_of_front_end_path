function getByclass(clsName,parent){
	var oParent = parent?document.getElementById(parent):document,
		eles =[],
		elements = oParent.getElementsByTagName('*');
		for (var i = 0,l=elements.length; i < l; i++) {
			if(elements[i].className==clsName){
				eles.push(elements[i]);
			}
		}
		return eles;
}

window.onload =drag;

function drag(){
	var title = getByclass('login_logo_webqq','loginPanel')[0];
	//拖曳
	title.onmousedown = fnDown;

	//关闭
	var oclose = document.getElementById('ui_boxyClose');
	oclose.onclick = function(){
		var panel = document.getElementById('loginPanel');
		panel.style.display = 'none';
	}
	//切换状态
	var loginstate = document.getElementById('loginState'),
		statelist = document.getElementById('loginStatePanel'),
		lis = statelist.getElementsByTagName('li'),
		loginStateShow = document.getElementById('loginStateShow'),
		statetext = document.getElementById('login2qq_state_txt');

	loginstate.onclick = function(e){
		e = e||window.event;
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble=true;
		}
		statelist.style.display='block';
		//鼠标滑过、离开和点击状态列表时
		for(var i=0;i<lis.length;i++){
			lis[i].onmouseover=function(){
				this.style.backgroundColor = '#567'
			}
			lis[i].onmouseout=function(){
				this.style.backgroundColor = '#fff'
			}
			lis[i].onclick = function(e){
				e = e||window.event;
				if(e.stopPropagation){
					e.stopPropagation();
				}else{
					e.cancelBubble=true;
				}
				var id = this.id;
				statelist.style.display = 'none';
				statetext.innerHTML = getByclass('stateSelect_text',id)[0].innerHTML;
				loginStateShow.className = '';
				loginStateShow.className = 'login-state-show '+id;
			}
		}

	// 	loginstate.onmouseover = function(){
	// 		statelist.style.display='block';
	// }
		// loginstate.onmouseout = function(){
		// 	statelist.style.display='none';
		// }
	}
	document.onclick =function(){
		statelist.style.display = 'none';
	}
}

fnDown = function(event){
	event = event||window.event;
	var odrag = document.getElementById('loginPanel'),
		//光标按下是，光标和面板之间的距离
		disX = event.clientX - odrag.offsetLeft;
		disY = event.clientY - odrag.offsetTop;

	//移动
	document.onmousemove = function(event){
		event =event||window.event
		fnMove(event,disX,disY);
	}

	document.onmouseup = function(){
		document.onmousemove=null;
		document.onmouseup = null;
	}
	// document.onmousemove = function(event){
	// 	event = event||window.event;
	// 	odrag.style.left = event.clientX+'px';
	// 	odrag.style.top = event.clientY+'px';
	// }
}

function fnMove(event,posX,posY){
	var odrag = document.getElementById('loginPanel'),
		l = event.clientX-posX,
	    t = event.clientY-posY,
	    winW = document.documentElement.clientWidth || document.body.clientWidth,
	    winH = document.documentElement.clientHeight || document.body.clientHeight,
	    maxW = winW-odrag.offsetWidth-10,
	    maxH = winH-odrag.offsetHeight;
	    

	// if(l<0){
	// 	l=0;
	// }
	// if(t<0){
	// 	t=0;
	// }
	if(l<0){
		l=0;
	}else if(l>maxW){
		l=maxW;
	}
	if(t<10){
		t=10;
	}else if(t>maxH){
		t=maxH;
	}

	odrag.style.left = l+'px';
	odrag.style.top = t+'px';
}