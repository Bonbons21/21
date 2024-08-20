var ggRoll={                                     //创建对象直接量
  roll:document.getElementById("roll"),          //获取id属性为roll的对象
  speed:20,                                      //飘动速度，即为定时器函数多长时间执行一次
  statusX:1,                                     //规定每执行一次函数，left属性值变化的幅度
  statusY:1,                                     //规定每执行一次函数，top属性值变化的幅度
  x:100,                                         //规定初始状态下left属性的值
  y:300,                                         //规定初始状态下top属性的值
  //差值用来测算left属性值的极限
  winW:document.documentElement.clientWidth-document.getElementById("roll").offsetWidth, 
  //差值用来测算top属性值的极限
  winH:document.documentElement.clientHeight-document.getElementById("roll").offsetHeight, 
  //声明函数
  Go: function () {                                                               
       //设置div的left属性值
       this.roll.style.left = this.x + 'px';                                      
       //设置div的top属性值
       this.roll.style.top = this.y + 'px';                                       
       //如果statusX=1则每次减少1px,否则减少1px
       this.x = this.x + (this.statusX ? -1 : 1)                                  
       //如果left属性值小于0，也就是div要超出左边界了，就将statusX设置为0
       if (this.x < 0) { this.statusX = 0 }                                       
       //如果top属性值大于winW，也就是div要超出右边界了，就将statusX设置为1
       if (this.x > this.winW) { this.statusX = 1 }                               
 
       this.y = this.y + (this.statusY ? -1 : 1)
       if (this.y < 0) { this.statusY = 0 }
       if (this.y > this.winH) { this.statusY = 1 }
 
     }
  };
 
var interval=setInterval("ggRoll.Go()",ggRoll.speed);
ggRoll.roll.onmouseover=function(){clearInterval(interval)};                     //onmouseover属性：鼠标移动到元素上时触发
ggRoll.roll.onmouseout=function(){interval=setInterval("ggRoll.Go()",ggRoll.speed)};//onmouseout属性:鼠标离开元素时触发