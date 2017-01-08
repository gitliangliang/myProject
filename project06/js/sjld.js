/*
*	学习阶段、年级、科目三级联动下拉框
*/
function Dsyyer(){
	this.Items = {};
}
Dsyyer.prototype.add = function(id,iArray){
	this.Items[id] = iArray;
}
Dsyyer.prototype.Exists = function(id){
	if(typeof(this.Items[id]) == "undefined") return false;
	return true;
}

function changed(v){
	console.info(v)
	var str="0";
	for(i=0;i<v;i++){
		str+=("_"+(document.getElementById(ids[i]).selectedIndex-1));
	};
	var ss=document.getElementById(ids[v]);
	with(ss){
		length = 0;
		options[0]=new Option(opt0[v],opt0[v]);
		if(v && document.getElementById(ids[v-1]).selectedIndex>0 || !v){
			if(Dsyyer.Exists(str)){
				ar = Dsyyer.Items[str];
				for(i=0;i<ar.length;i++){
					options[length]=new Option(ar[i],i);
				}//end for
				if(v){ options[0].selected = true; }
			}
		}//end if v
		if(++v<ids.length){changed(v);}
	}//End with
}

var Dsyyer = new Dsyyer();

Dsyyer.add("0",["小学","初中","高中","冲刺班"]);


Dsyyer.add("0_0",["一年级","二年级","三年级","四年级","五年级","六年级"]);
Dsyyer.add("0_0_0",["语文","数学","英语"]);
Dsyyer.add("0_0_1",["语文","数学","英语"]);
Dsyyer.add("0_0_2",["语文","数学","英语"]);
Dsyyer.add("0_0_3",["语文","数学","英语"]);
Dsyyer.add("0_0_4",["语文","数学","英语"]);
Dsyyer.add("0_0_5",["语文","数学","英语"]);


Dsyyer.add("0_1",["初一","初二","初三"]);
Dsyyer.add("0_1_0",["语文","数学","英语","物理","化学"]);
Dsyyer.add("0_1_1",["语文","数学","英语","物理","化学"]);
Dsyyer.add("0_1_2",["语文","数学","英语","物理","化学"]);


Dsyyer.add("0_2",["高一","高二","高三"]);
Dsyyer.add("0_2_0",["语文","数学","英语","物理","化学"]);
Dsyyer.add("0_2_1",["语文","数学","英语","物理","化学"]);
Dsyyer.add("0_2_2",["语文","数学","英语","物理","化学"]);


Dsyyer.add("0_3",["小五班","预备班","中考冲刺","高考冲刺"]);
Dsyyer.add("0_3_0",["语文","数学","英语"]);
Dsyyer.add("0_3_1",["语文","数学","英语"]);
Dsyyer.add("0_3_2",["语文","数学","英语","物理","化学"]);
Dsyyer.add("0_3_3",["语文","数学","英语","物理","化学"]);


var ids=["stage","grade","subject"];//三个select的name stage学习阶段 grade年级 subject科目
var opt0 = ["阶段","年级","科目"];//初始值

function _init_area(){  //初始化函数
	for(i=0;i<ids.length-1;i++){
	 	document.getElementById(ids[i]).onchange=new Function("changed("+(i+1)+")");
	}
	changed(0);
}
