function jkCountDown(opts){
    var dataNum = opts.num;
    var el = $(opts.el);
    var tmpNum = 0;
    var numLen = dataNum.toString().length;
    //防止初始化数字为零的时候不滚动
    var addLen = opts.add.toString().length;
    var tmpkey = false;
    var tmpInt = 0;
    if(addLen > 1){
        tmpkey = true;
        tmpInt += Number(dataNum.toString().slice(numLen-addLen+1));
    }

    //生成位数容器
    addcon();
    var divel = opts.el+' div';
    var els = $(divel);

    var addnumInt  = setInterval(addnum,opts.speed);

    function addcon(){
        var html = '<div></div>';
        for(var i = 0;i< numLen;i++){
            el.append(html);
        }
    }

    function addnum(){
        var contrastNum = tmpNum;
        tmpNum = tmpNum +opts.add;

        if(tmpkey){
            tmpNum += tmpInt;
            tmpkey = false;
        }

        if(tmpNum > dataNum){
            tmpNum = dataNum;
        }

        addData(contrastNum);

        if(tmpNum == dataNum){

            clearInterval(addnumInt);

            if(opts.callback){
                opts.callback(el,dataNum);
            }
        }
    }

    function addData(contrastNum){

        var tmpNumStr = addZero(tmpNum);
        var contrastNumStr = addZero(contrastNum);

        [].forEach.call(tmpNumStr,function(e,index){
            if(e != contrastNumStr.charAt(index)){
                addEls(e,index)
            }
        })

    }

    function addZero(num){
        var len = num.toString().length;
        var numStr = num.toString();
        if(len < numLen){
            var zeroNum = numLen-len;
            for(var i = 0;i<zeroNum;i++){
                numStr = '0'+numStr;
            }
        }
        return numStr;
    }

    function addEls(e,index){
        var $e = els.eq(index)
        $e.find('.show').remove();
        $e.find('.add').removeClass('add').addClass('show');
        var html = '<span class="add">'+e+'</span>';
        $e.append(html);
        $e.find('.show').animate(opts.addAnimate,opts.speed);
        $e.find('.add').animate(opts.removeAnimate,opts.speed);
    }

}