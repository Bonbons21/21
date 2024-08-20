function search()
			{
				//获取城市名
				var city=document.getElementById("city").value;
				//1.创建异步对象
				var xhr=new XMLHttpRequest();
				//2.设置请求的url参数
				xhr.open('get',https://tianqiapi.com/api?version=v6&appid=11989195&appsecret=GK1gYjGq&city='+city');
				//3.注册状态改变就调用
				xhr.onreadystatechange=function()
				{
					if(xhr.readyState==4&&xhr.status==200){
						//如果请求成功就执行
						var res=eval('('+xhr.responseText+')');
						//将获得到的json格式的字符串转化为json对象
						//alert(res);
						document.getElementById("tem").innerHTML="当前气温："+res.tem+"℃";
						document.getElementById("weather").innerHTML="今日气温："+res.tem2+"~"+res.tem1+"℃";
						document.getElementById("wea").innerHTML="当前天气："+res.wea;
						document.getElementById("localcity").innerHTML="当前城市："+res.city;
						document.getElementById("date").innerHTML="当前日期："+res.week+res.date;
						document.getElementById("img").src="image /"+res.wea_img+".jpg";
						document.getElementById("box").style.display="block";
					}
				}
				//4.请求发送
				xhr.send();
			}