/* 极客前端出品 😜
 ** 滚动计时
 ** version 2.0.0
 */

(function($) {
    "use strict";
    $.fn.jkcount = function(options) {
        // default config
        var config = {
            speed: 500, //每次动画速度
            step: 1, //每次增加多少
            num: 100, //倒计数量
            type: 'add', //默认增计时
            callback: null, //完毕回调
            el: null, //根结点
            actionInt: null, //计时器
            numLen: null, //倒数数字长度
            firstTime: true
        }

        var startNum = 0, //开始及转动数字
            turnNum = 0; //对比数字

        // Main plugin constructor
        // function Jkcount(el, options) {
        // reset data
        config.numLen = options.num.toString().length;
        config.el = $(this);
        config = $.extend(config, options);

        // 添加DOM节点
        var addDOM = function(el) {
            var html = '<div></div>';
            for (var i = 0; i < config.numLen; i++) {
                el.append(html);
            }
        }

        // 滚动对比事件
        var actEvent = function() {
            var startStr = addZero(startNum);
            var turnStr = addZero(turnNum);

            // 第一次不做对比所有都转动
            if (config.firstTime) {
                turnStr = addAllStar();
                config.firstTime = false;
            }

            // 对比字符串不一样的就滚动
            [].forEach.call(startStr, function(e, index) {
                if (e != turnStr.charAt(index)) {
                    if (e == '*') { e = '' }
                    addEls(e, index)
                }
            })
        }

        // 动画
        var addEls = function(e, index) {
            var $e = config.el.find('div').eq(index)
            $e.find('.show').remove();
            $e.find('.add').removeClass('add').addClass('show');
            var html = '<span class="add">' + e + '</span>';
            $e.append(html);
            $e.find('.show').animate(config.addAnimate, config.speed);
            $e.find('.add').animate(config.removeAnimate, config.speed);
        }

        // 滚动增计时
        var actIntFuc = function() {

            if (config.type == 'add') {
                turnNum = startNum;
                startNum += config.step;

                if (startNum >= config.num) {
                    startNum = config.num;
                    clearInterval(config.actionInt);
                    if (typeof config.callback == 'function') {
                        config.callback();
                    }
                }
            } else if (config.type == 'down') {
                turnNum = config.num
                config.num -= config.step
                startNum = config.num

                if (startNum <= 0) {
                    startNum = 0;
                    clearInterval(config.actionInt);
                    if (typeof config.callback == 'function') {
                        config.callback();
                    }
                }
            }
            actEvent();
        }

        // 数字转化为字符串并增加长度
        var addZero = function(num) {
            var len = num.toString().length;
            var numStr = num.toString();
            if (len < config.numLen) {
                var zeroNum = config.numLen - len;
                for (var i = 0; i < zeroNum; i++) {
                    numStr = '*' + numStr;
                }
            }
            return numStr;
        }

        var addAllStar = function() {
            var allStar = '';
            for (var i = 0; i < config.numLen; i++) {
                allStar += '*';
            }
            return allStar;
        }

        // add dom
        addDOM($(this));
        // action turn
        config.actionInt = setInterval(actIntFuc, config.speed);
    };

}(jQuery));
