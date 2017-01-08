$(function() {
	var lis = document.getElementById("tab_ul1").children;
	var box = document.getElementsByClassName("box");

	for(var i = 0; i < lis.length; i++) {
		lis[i].index = i; //给当前li下加一个标识属性index,用来表示点击了第一个

		lis[i].onclick = function() {
			for(var t = 0; t < lis.length; t++) {
				lis[t].className = "";
			} //清空所有的active类

			this.className = "active";

			for(var j = 0; j < box.length; j++) {
				box[j].style.display = "none";
			}
			box[this.index].style.display = "block";
		}
	}

	//上面是表单切换

	$.ajax({
		type: 'GET',
		url: 'work.json',
		dataType: 'json',
		success: function(data) {
			if(data.resultcode == "200" && data.reason == "Success") {
				var obj = data.result;
				var arr = obj.data;
				var box = document.getElementsByClassName("box");
				for(var i = 0; i < arr.length; i++) {
					var o = arr[i];

					var li1 = document.createElement("li");
					var li2 = document.createElement("li");
					var li3 = document.createElement("li");
					var li4 = document.createElement("li");
					var li5 = document.createElement("li");
					var li6 = document.createElement("li");
					var li7 = document.createElement("li");
					var li8 = document.createElement("li");

					li1.innerHTML = "<strong>序号：</strong>" + o.id;
					li2.innerHTML = "<strong>标题：</strong>" + o.title;
					li3.innerHTML = "<strong>标签：</strong>" + o.tags;
					li4.innerHTML = "<strong>介绍：</strong>" + o.ingredients
					li6.innerHTML = "<strong>承诺：</strong>" + o.burden;
					li7.innerHTML = "<strong>说明：</strong>" + o.imtro;
					li8.innerHTML = "<h3>步骤：</h3>";
					var imgs = o.steps;
					for(var j = 0; j < imgs.length; j++) {
						var img = imgs[j];
						var p_img = document.createElement("img");
						p_img.className = img;
						var span = document.createElement("span");
						var div = document.createElement('div');
						div.className = 'grep';

						p_img.src = img.img;
						span.innerHTML = img.step;

						div.appendChild(p_img)
						div.appendChild(span)
						li8.appendChild(div);
					}

					box[i].appendChild(li1);
					box[i].appendChild(li2);
					box[i].appendChild(li3);
					box[i].appendChild(li4);
					box[i].appendChild(li5);
					box[i].appendChild(li6);
					box[i].appendChild(li7);
					box[i].appendChild(li8);
				}
			}
		}
	});
});