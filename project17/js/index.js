var banner = document.getElementById("banner");//获取全部商品分类的id
var bannerItem = document.getElementById("bannerItem");//获取隐藏的商品分类的Id
//banner的显示和隐藏
banner.onmouseover = function(obj){
	if(obj != undefined){
		bannerItem.style.display = "block";
	}
}
banner.onmouseout = function(obj){
	if(obj != undefined){
		bannerItem.style.display = "none";
	}
}

//banner大图的无缝滚动
var pics=document.getElementById("bannerPic").getElementsByTagName("img");//获取所有img
var btn=document.getElementById("btn");
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var b=document.getElementById("bannerPic");
var s=document.getElementById("ico").getElementsByTagName("span");
var index=3;
var tim;
fadeOut(pics[0]);
fadeOut(pics[1]);
prev.onclick=function(){  //往前翻
	if(index==0){
		fadeOut(pics[index]); //index 是0
		index=3;
		fadeIn(pics[index]); //index是2
	}else{
		fadeOut(pics[index]);
		fadeIn(pics[index-1]);
		index--;
	}
	showButton();//让下方小图标和图片切换对象
}
next.onclick=function(){
	if(index==3){
		fadeOut(pics[index]);
		index=0;
		fadeIn(pics[index]);
	}else{
		fadeOut(pics[index]);
		fadeIn(pics[index+1]);
		index++;
	}
	showButton();//让下方小图标和图片切换对象
}
function autoPlay(){   //设置定时器
	tim=setInterval("next.onclick()",2000);
}
autoPlay();
function stop(){   //清除定时器
	clearInterval(tim);
}
b.onmouseover=function(){ //鼠标放到div上 清除定时器  按钮出现
	stop();
	prev.style.display="inline-block";
	next.style.display="inline-block";
}
b.onmouseout=function(){
	autoPlay();
	prev.style.display="none";
	next.style.display="none";
}
//控制小按钮的样式
function showButton(){
	for(var j=0;j<s.length;j++){
		s[j].className="";
	}
	s[index].className="on";
}
for(var k=0;k<s.length;k++){
	s[k].onclick=function(){//给下方的小圆点添加点击事件
		if(this.className=="on"){//优化  如果点击是当前的小圆点  不再执行下方的语句
			return;
		}
		var newIndex=this.getAttribute("index");//点击谁的时候 获取谁的index
		fadeIn(pics[newIndex]);//显示点击新的index对应图片
		fadeOut(pics[index]);//把之前正在显示的老的图片消失
		index=newIndex;
		showButton();
//		debugger;
	}
}
//透明度兼容写法
function setOpacity(elem,level){
	if(elem.filters){
		elem.style.filter="alpha(opacity="+level+")";
	}else{
		elem.style.opacity=level/100;
	}
}
//淡入效果
function fadeIn(elem){
	for(var i=0;i<=100;i++){
		(function(){
			var po=i;
			setTimeout(function(){
				setOpacity(elem,po);
			},po*10);
		})();
	}
}
//淡出效果
function fadeOut(elem){
	for(var i=0;i<=100;i++){
		(function(){
			var po=i;
			setTimeout(function(){
				setOpacity(elem,po);
			},(100-po)*10);
		})();
	}
}

//上下的无缝滚动
var picMove = document.getElementById("picMove");
picMove.innerHTML += picMove.innerHTML;
var timer,t;
var picHeight = 360;
var picSpeed = 5;
var tout = 1000;
function move(){
	if(picMove.scrollTop % picHeight == 0){
		clearInterval(timer);
		t=setTimeout(startMove,tout);
	}
	if(picMove.scrollTop >= picMove.scrollHeight/2){
		picMove.scrollTop = 0;
	}else{
		picMove.scrollTop++;
	}
}
function startMove(){
	picMove.scrollTop++;
	timer = setInterval(move,picSpeed);
}
startMove();
picMove.onmouseover = function(){
	clearInterval(timer);
	clearTimeout(t);
}
picMove.onmouseout = function(){
	timer = setInterval(move,picSpeed);
}

var picMove1 = document.getElementById("picMove1");
picMove1.innerHTML += picMove1.innerHTML;
var timer1,t1;
function move1(){
	if(picMove1.scrollTop % picHeight == 0){
		clearInterval(timer1);
		t1=setTimeout(startMove1,tout);
	}
	if(picMove1.scrollTop >= picMove1.scrollHeight/2){
		picMove1.scrollTop = 0;
	}else{
		picMove1.scrollTop++;
	}
}
function startMove1(){
	picMove1.scrollTop++;
	timer1 = setInterval(move1,picSpeed);
}
startMove1();
picMove1.onmouseover = function(){
	clearInterval(timer1);
	clearTimeout(t1);
}
picMove1.onmouseout = function(){
	timer1 = setInterval(move1,picSpeed);
}

//图片的左右无缝滚动
var item=document.getElementById("itemBig1");
var itemCon=document.getElementById("itemBigCon");
itemCon.innerHTML+=itemCon.innerHTML;
var picWidth = 580;
var moveT,moveS;
function moveO(){
	if(item.scrollLeft%picWidth==0){
		clearInterval(moveT);
		moveS=setTimeout("moveF()",tout);
	}
	if(item.scrollLeft<=itemCon.scrollWidth/2){
		item.scrollLeft++;
	}else{
		item.scrollLeft=0;
	}
}
function moveF(){
	item.scrollLeft++;
	moveT=setInterval("moveO()",picSpeed);
}
moveF();
item.onmouseover=function(){
	clearInterval(moveT);
	clearInterval(moveS);
}
item.onmouseout=function(){
	moveT=setInterval("moveO()",picSpeed);
}

var item1=document.getElementById("itemBig2");
var itemCon1=document.getElementById("itemBigCon1");
itemCon1.innerHTML+=itemCon1.innerHTML;
var moveT1,moveS1;
function moveO1(){
	if(item1.scrollLeft%picWidth==0){
		clearInterval(moveT1);
		moveS1=setTimeout("moveF1()",tout);
	}
	if(item1.scrollLeft<=itemCon1.scrollWidth/2){
		item1.scrollLeft++;
	}else{
		item1.scrollLeft=0;
	}
}
function moveF1(){
	item1.scrollLeft++;
	moveT1=setInterval("moveO1()",picSpeed);
}
moveF1();
item1.onmouseover=function(){
	clearInterval(moveT1);
	clearInterval(moveS1);
}
item1.onmouseout=function(){
	moveT1=setInterval("moveO1()",picSpeed);
}

//建材产品的tab切换
var mList = document.getElementById("materialList").getElementsByTagName("li");
var ma = document.getElementById("materialList").getElementsByTagName("a");
var tabSub = document.getElementById("tabSub").getElementsByTagName("ul");
for(var i = 0;i < mList.length;i++){
	mList[i].onmouseover = function(){
		tabs(this);
	}
}
function tabs(obj){
	for(var i = 0;i < tabSub.length;i++){
		if(mList[i] == obj){
			tabSub[i].className = "smallList";
			mList[i].className = "small";
			ma[i].className = "smallText";
		}else{
			tabSub[i].className = "smallList hidd";
			mList[i].className = "";
			ma[i].className = "";
		}
	}
}

//搜索框
var sea = document.getElementById("sea");
function visi(){
	var st = document.body.scrollTop||document.documentElement.scrollTop;
	if(st > 400){
		sea.style.display = "block";
	}else{
		sea.style.display = "none";
	}
}
//window.onscroll = visi;
//二维码
var wei = document.getElementById("inlineService");
function weii(){
	var st = document.body.scrollTop||document.documentElement.scrollTop;
	if(st > 200){
		wei.style.display = "block";
	}else{
		wei.style.display = "none";
	}
}

//添加事件
function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn);
	}else if(obj.attachEvent){
		obj.attachEvent("on"+type,fn);
	}
}
addEvent(window,"scroll",visi);
addEvent(window,"scroll",weii);