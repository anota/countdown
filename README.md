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
$('#jk-countdown').jkcount({
    num:112,
    step:3,
    speed:100,
    type:'down',
    addAnimate:{'top':30},
    removeAnimate:{'top':0},
    callback:function(){
        console.log('done!');
    }
});
```


* num:需要倒数的数字大小
* speed:倒数的时间间隔
* type:add || down 增计时，倒计时
* step:每次增加或减少多少单位
* addAnimate:.add的动画
* removeAnimate:.show的移除动画
* callback:执行完毕回调函数

### 4.开启
```
jkcount.start();
```
开启可以穿入参数覆盖实例化参数
```
jkcount.start({
    type:'add',
    num:110
});
```
