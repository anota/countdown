# 动画倒计时

依赖于jQuery誊写

## 使用方法

### 1.在要使用的地方定义一个DOM
```
<div id="jk-countdown"></div>
```

### 2.根据下面准备渲染好的DOM誊写CSS样式
```
<div id="jk-countdown">
    <div>
        <span class="show" >1</span>
        <span class="add" >2</span>
    </div>
    <div>
        <span class="show" >1</span>
        <span class="add" ">2</span>
    </div>

    ......

</div>
```

### 3.实例化
```
var jkcountdown = new jkCountDown({
    el:'#jk-countdown',
    num:42,
    speed:100,
    add:1,
    addAnimate:{'top':30},
    removeAnimate:{'top':0},
    callback:function(el,num){
        console.log(el);
        console.log(num)
    }
});
```

* el:实例根元素选择器
* num:需要倒数的数字大小
* speed：倒数的时间间隔
* add:每次增加多少位数
* addAnimate:.add的动画
* removeAnimate:.show的移除动画
* callback:执行完毕回调函数