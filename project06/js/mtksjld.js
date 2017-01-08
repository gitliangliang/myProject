/*
*	学习阶段、年级、科目三级联动下拉框
*/
function Dsy(){
	this.Items = {};
}
Dsy.prototype.add = function(id,iArray){
	this.Items[id] = iArray;
}
Dsy.prototype.Exists = function(id){
	if(typeof(this.Items[id]) == "undefined") return false;
	return true;
}

function change(v){
	var str="0";
	for(i=0;i<v;i++){
		str+=("_"+(document.getElementById(s[i]).selectedIndex-1));
	};
	var ss=document.getElementById(s[v]);
	with(ss){
		length = 0;
		options[0]=new Option(opt0[v],opt0[v]);
		if(v && document.getElementById(s[v-1]).selectedIndex>0 || !v){
			if(dsy.Exists(str)){
				ar = dsy.Items[str];
				for(i=0;i<ar.length;i++){
					options[length]=new Option(ar[i],i);
				}//end for
				if(v){ options[0].selected = true; }
			}
		}//end if v
		if(++v<s.length){change(v);}
	}//End with
}

var dsy = new Dsy();

dsy.add("0",["小学","初中","高中","冲刺班"]);


dsy.add("0_0",["一年级","二年级","三年级","四年级","五年级","六年级"]);
dsy.add("0_0_0",["语文","数学","英语"]);
dsy.add("0_0_1",["语文","数学","英语"]);
dsy.add("0_0_2",["语文","数学","英语"]);
dsy.add("0_0_3",["语文","数学","英语"]);
dsy.add("0_0_4",["语文","数学","英语"]);
dsy.add("0_0_5",["语文","数学","英语"]);


dsy.add("0_1",["初一","初二","初三"]);
dsy.add("0_1_0",["语文","数学","英语"]);
dsy.add("0_1_1",["语文","数学","英语","物理"]);
dsy.add("0_1_2",["语文","数学","英语","物理","化学"]);


dsy.add("0_2",["高一","高二","高三"]);
dsy.add("0_2_0",["语文","数学","英语","物理","化学"]);
dsy.add("0_2_1",["语文","数学","英语","物理","化学"]);
dsy.add("0_2_2",["语文","数学","英语","物理","化学"]);

//本js是对应模态框的三个下拉框

dsy.add("0_3",["小五班","预备班","中考冲刺","高考冲刺"]);
dsy.add("0_3_0",["语文","数学","英语"]);
dsy.add("0_3_1",["语文","数学","英语"]);
dsy.add("0_3_2",["语文","数学","英语","物理","化学"]);
dsy.add("0_3_3",["语文","数学","英语","物理","化学"]);


var s=["mtkstage","mtkgrade","mtksubject"];//三个select的name stage学习阶段 grade年级 subject科目
var opt0 = ["阶段","年级","科目"];//初始值

function _init_mtk(){  //初始化函数
	for(i=0;i<s.length-1;i++){
	  document.getElementById(s[i]).onchange=new Function("change("+(i+1)+")");
	}
	change(0);
}
