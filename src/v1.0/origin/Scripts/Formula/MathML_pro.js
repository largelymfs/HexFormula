//初始化对象CSS
function InitObj(obj) {
    obj.css("display", "inline-block");
    obj.css("position", "relative");
    obj.css("padding", "0px");
    obj.css("margin", "0px");
}

function MathPosition(mathObj) {
    this.MathObj = mathObj;
    //设置Math对象样式
    this.MathObj.css("display", "inline-block");
    this.MathObj.css("padding", "0px");
}

MathPosition.prototype = {
    Surround: function (scale, objOptions, paramOptions, moveOptions) {
        if (scale == undefined) { scale = 1; } //缩放比例
        var settings = $.extend({
            topgap: 8,
            rightgap: 1,
            downgap: 8,
            leftgap: 1
        }, paramOptions || {});
        //移动设置
        var move = $.extend({
            uptdmove: 0,
            uprlmove: 0,
            righttdmove: 0,
            rightrlmove: 0,
            downtdmove: 0,
            downrlmove: 0,
            lefttdmove: 0,
            leftrlmove: 0,
            suptdmove: 0,
            suprlmove: 0,
            subtdmove: 0,
            subrlmove: 0,
            leftSuptdmove: 0,
            leftSuprlmove: 0,
            leftSubtdmove: 0,
            leftSubrlmove: 0,
            optdmove: 0,
            oprlmove: 0,
            font: "1em",
            correct: "-",
            mark: ""
        }, moveOptions || {});
        var opObj = objOptions.OP; //操作符
        var supObj = objOptions.SupOP; //上标注
        var subObj = objOptions.SubOP; //下标注
        var leftSupObj = objOptions.LeftSupOP; //左上标注
        var leftSubObj = objOptions.LeftSubOP; //左下标注
        var upObj = objOptions.UP; //上        
        var rightObj = objOptions.Right; //右        
        var downObj = objOptions.Down; //下
        var leftObj = objOptions.Left; //左
        var fontsize = parseInt(this.MathObj.css("font-size")); //获取数学对象的字体大小
        //设置操作符：=====================================================================================
        if (opObj == undefined) {
            throw "操作符不能为空！";
        }
        InitObj(opObj);
        if (move.optdmove != 0) {
            opObj.css("vertical-align", "middle");
            //opObj.css("top", move.optdmove); //修正符号位置
        }
        var opObjHeight = opObj.height();
        var opObjWidth = opObj.width();
        var leftMovedDistance = 0;

        //设置上方操作数位置:===============================================================================
        var upObjWidth = 0;
        var upObjHeight = 0;
        if (upObj != undefined) {
            InitObj(upObj);
            //动态计算上方操作数的高度，以便设置上方操作数的位置
            upObjHeight = upObj.height();
            upObjWidth = upObj.width();
            //var upObjHeightEm = 0 - ((opObjHeight / 2) + settings.topgap) / 1;
            var upObjHeightEm = 0 - (upObjHeight - settings.topgap - move.uptdmove);
            upObj.css("top", upObjHeightEm / fontsize + "em");
            var upObjPosition = (opObjWidth / 2 + upObjWidth / 2 + move.uprlmove);
            var upObjPositionem = (upObjPosition / 1);
            upObj.css("left", (0 - upObjPositionem) / fontsize + "em");
            leftMovedDistance += upObjWidth;
        }

        //设置右方操作数位置:===============================================================================
        var rightObjWidth = 0;
        if (rightObj != undefined) {
            InitObj(rightObj);
            rightObjWidth = rightObj.width();
            var rightObjLeftEm = 0 - (leftMovedDistance - settings.rightgap - move.rightrlmove) / fontsize
            rightObj.css("left", rightObjLeftEm + "em");
            opObj.find("img").load(function () {
                if (move.mark == "genhao") {
                    rightObj.css("top", "0px");
                }
                else {
                    if (supObj == undefined && upObj != undefined) {
                        move.optdmove = opObj.height() / 2;
                        rightObj.css("top", (0 - (move.optdmove - move.righttdmove)) / fontsize + "em");
                    }
                    else {
                        rightObj.css("top", "0px");
                    }
                }

                //                if (move.uptdmove != 0) {
                //                    rightObj.css("top", (0 - (move.optdmove - move.righttdmove)) + "px");
                //                }
            });

            leftMovedDistance += rightObjWidth;
        }

        //设置下方操作数位置:===============================================================================
        var downObjWidth = 0;
        if (downObj != undefined) {
            InitObj(downObj);
            //downObj.css("font-size", "0.7em");
            fontsize = parseInt(downObj.css("font-size"));
            var downObjHeight = downObj.height();
            downObjWidth = downObj.width();
            var downObjHeightEm = ((downObjHeight / 1) + settings.downgap + move.downtdmove) / 1;
            downObj.css("top", downObjHeightEm / fontsize + "em");
            var downObjPositionem = ((opObjWidth / 2 + downObjWidth / 2 + leftMovedDistance) / 1);
            downObj.css("left", "-" + downObjPositionem / fontsize + "em");
            leftMovedDistance += downObjWidth;
        }

        //设置左方操作数位置:===============================================================================
        var leftObjWidth = 0;
        if (leftObj != undefined) {
            leftObjWidth = leftObj.width();
            InitObj(leftObj);
            var leftObjPositionem = ((opObjWidth + leftObjWidth + leftMovedDistance + settings.leftgap) / fontsize);
            leftObj.css("left", "-" + leftObjPositionem + "em");
            leftMovedDistance += leftObjWidth;
        }

        //设置上标注:=======================================================================================
        var supObjWidth = 0;
        if (supObj != undefined) {
            InitObj(supObj);
            supObj.css("font-size", "0.7em");
            fontsize = parseInt(supObj.css("font-size"));
            supObj.css("top", (0 - ((opObjHeight - move.suptdmove) / fontsize)) + "em");
            var supObjPositionem = (leftMovedDistance - settings.rightgap) / fontsize;
            supObj.css("left", "-" + supObjPositionem + "em");
            supObjWidth = supObj.width();
            leftMovedDistance += supObj.width();
        }

        //设置下标注:=======================================================================================
        var subObjWidth = 0;
        if (subObj != undefined) {
            InitObj(subObj);
            subObj.css("font-size", "0.7em");
            fontsize = parseInt(subObj.css("font-size"));
            subObj.css("top", (subObj.height() - move.subtdmove) / fontsize + "em");
            var subObjPositionem = (leftMovedDistance - settings.rightgap) / fontsize;
            subObj.css("left", "-" + (subObjPositionem + move.subrlmove) + "em");
            subObjWidth = subObj.width();
            leftMovedDistance += subObj.width();
        }
        //设置左下标注:=====================================================================================
        var leftSubObjWidth = 0;
        if (leftSubObj != undefined) {
            InitObj(leftSubObj);
            leftSubObj.css("font-size", "0.7em");
            fontsize = parseInt(leftSubObj.css("font-size"));
            leftSubObjWidth = leftSubObj.width();
            leftSubObj.css("top", (leftSubObj.height() - move.leftSubtdmove) / fontsize + "em");
            var leftsubObjPositionem = (opObjWidth) / 1 + (leftSubObjWidth + settings.leftgap) / 1;
            leftSubObj.css("left", "-" + leftsubObjPositionem / fontsize + "em");
            leftMovedDistance += leftSubObj.width();
        }
        //设置左上标注:=====================================================================================
        var leftSupObjWidth = 0;
        if (leftSupObj != undefined) {
            InitObj(leftSupObj);
            leftSupObj.css("font-size", "0.7em");
            fontsize = parseInt(leftSupObj.css("font-size"));
            leftSupObjWidth = leftSupObj.width();
            leftSupObj.css("top", "-" + (opObjHeight - move.leftSuptdmove) / fontsize + "em");
            var leftSupObjPositionem = (opObjWidth + rightObjWidth) / 1 + (leftSubObjWidth + leftSupObjWidth + settings.leftgap + move.leftSuprlmove) / 1;
            leftSupObj.css("left", "-" + leftSupObjPositionem / fontsize + "em");
            leftMovedDistance += leftSupObj.width();
        }
        //设置公式容器的margin==============================================================================
        if (move.mark == "lim") {
            var mathUpEm = (settings.topgap + upObjHeight) / 2 + downObjHeight;
        }
        else {
            var mathUpEm = (settings.topgap + upObjHeight) / 2;
        }
        var mathDownEm = (settings.downgap) / 1;

        if (leftObjWidth > leftSubObjWidth && leftObjWidth > leftSupObjWidth) {
            var mathObjLeftEm = (leftObjWidth + settings.leftgap) / 1;
        }
        else {
            if (leftSupObjWidth > leftSubObjWidth) {
                var mathObjLeftEm = leftSupObjWidth / 1;
            }
            else if (upObjWidth > downObjWidth) {
                var mathObjLeftEm = upObjWidth / 4;
            }
            else if (downObjWidth > upObjWidth) {
                var mathObjLeftEm = downObjWidth / 4;
            }
            else {
                var mathObjLeftEm = leftSubObjWidth / 1;
            }
        }
        //var mathObjLeftEm = (leftObjWidth + settings.leftgap) / 16 + (leftSubObjWidth + leftSupObjWidth) / fontsize;

        if (rightObjWidth > supObjWidth && rightObjWidth > subObjWidth) {
            var mathRightEm = (upObjWidth + downObjWidth + leftObjWidth - settings.rightgap - move.rightrlmove - move.uprlmove) / 1 + (supObjWidth + subObjWidth + leftSubObjWidth + leftSupObjWidth) / 1;
        }
        else {
            if (supObjWidth > subObjWidth) {
                var mathRightEm = (upObjWidth + downObjWidth + leftObjWidth - settings.rightgap - rightObjWidth) / 1 + (subObjWidth + leftSubObjWidth + leftSupObjWidth) / 1;
            }
            else {
                var mathRightEm = (upObjWidth + downObjWidth + leftObjWidth - settings.rightgap - rightObjWidth) / 1 + (supObjWidth + leftSubObjWidth + leftSupObjWidth) / 1;
            }
        }
        this.MathObj.css("margin", move.correct + (0) + "em -" + ((mathRightEm - 5) / fontsize) + "em " + (mathDownEm / fontsize) + "em " + (mathObjLeftEm / fontsize) + "em");
        this.MathObj.css("font-size", scale + "em");
    }
};

function MathExpression(mathObj) {
    this.MathObj = mathObj;
    this.MathPositionObj = new MathPosition(mathObj);
}

MathExpression.prototype = {
    //导数左右箭头
    zuoyoujiantou: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        upObj.text("↔");
        var uptd = 0 - (upObj.height() / 2);
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj }, { downgap: 0 }, { uptdmove: uptd });
    },
    //导数右箭头
    youjiantou: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        upObj.text("→");
        var uptd = 10;
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj }, { downgap: 0 }, { uptdmove: uptd });
    },
    //导数左箭头
    zuojiantou: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        upObj.text("←");
        var uptd = 10;
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj }, { downgap: 0 }, { uptdmove: uptd });
    },
    //导数下方大括号
    xfdakuohao: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        upObj.text("︸");
        var uptd = 15;
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj }, { downgap: 0 }, { uptdmove: uptd });
    },
    //导数上方大括号
    sfdakuohao: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        upObj.text("︷");
        var uptd = 10;
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj }, { downgap: 0 }, { uptdmove: uptd });
    },
    //导数双顶线
    shuangdingxian: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        upObj.text("﹦");
        var uptd = 10;
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj }, { downgap: 0 }, { uptdmove: uptd });
    },
    //导数横杆
    henggang: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        upObj.text("‐");
        var uptd = 10;
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj }, { downgap: 0 }, { uptdmove: uptd });
    },
    //导数颚化符
    ehua: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        upObj.text("~");
        var uptd = 10;
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj }, { downgap: 0 }, { uptdmove: uptd });
    },
    //导数短音符号
    duanyin: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        upObj.text("︺");
        var uptd = 15;
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj }, { downgap: 0 }, { uptdmove: uptd });
    },
    //导数抑音符号
    yiyin: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        upObj.text("ˋ");
        var uptd = 20;
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj }, { downgap: 0 }, { uptdmove: uptd });
    },
    //导数尖音符号
    jianyin: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        upObj.text("ˊ");
        var uptd = 20;
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj }, { downgap: 0 }, { uptdmove: uptd });
    },
    //导数对号
    duihao: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        upObj.text("︶");
        var uptd = 17;
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj }, { downgap: 0 }, { uptdmove: uptd });
    },
    //导数乘冥号
    chengminghao: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        upObj.text("︵");
        var uptd = 10;
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj }, { downgap: 0 }, { uptdmove: uptd });
    },
    //导数三点
    sandian: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        upObj.text("···");
        var uptd = 10;
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj }, { downgap: 0 }, { uptdmove: uptd });
    },
    //导数双点
    shuangdian: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        upObj.text("··");
        var uptd = 10;
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj }, { downgap: 0 }, { uptdmove: uptd });
    },
    //导数点
    dian: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        upObj.text("·");
        var uptd = 10;
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj }, { downgap: 0 }, { uptdmove: uptd });
    },
    //反coth
    fcoth: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var supObj = this.MathObj.find(">span:nth-child(2)"); //上标
        opObj.text("coth");
        supObj.text("-1");
        var suptop = supObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, SupOP: supObj }, { downgap: 0 }, { suptdmove: suptop });
    },
    //反sech
    fsech: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var supObj = this.MathObj.find(">span:nth-child(2)"); //上标
        opObj.text("sech");
        supObj.text("-1");
        var suptop = supObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, SupOP: supObj }, { downgap: 0 }, { suptdmove: suptop });
    },
    //反csch
    fcsch: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var supObj = this.MathObj.find(">span:nth-child(2)"); //上标
        opObj.text("csch");
        supObj.text("-1");
        var suptop = supObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, SupOP: supObj }, { downgap: 0 }, { suptdmove: suptop });
    },
    //反tanh
    ftanh: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var supObj = this.MathObj.find(">span:nth-child(2)"); //上标
        opObj.text("tanh");
        supObj.text("-1");
        var suptop = supObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, SupOP: supObj }, { downgap: 0 }, { suptdmove: suptop });
    },
    //反cosh
    fcosh: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var supObj = this.MathObj.find(">span:nth-child(2)"); //上标
        opObj.text("cosh");
        supObj.text("-1");
        var suptop = supObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, SupOP: supObj }, { downgap: 0 }, { suptdmove: suptop });
    },
    //反sinh
    fsinh: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var supObj = this.MathObj.find(">span:nth-child(2)"); //上标
        opObj.text("sinh");
        supObj.text("-1");
        var suptop = supObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, SupOP: supObj }, { downgap: 0 }, { suptdmove: suptop });
    },
    //coth
    coth: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.text("coth");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, { downgap: 0 }, {});
    },
    //sech
    sech: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.text("sech");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, { downgap: 0 }, {});
    },
    //csch
    csch: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.text("csch");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, { downgap: 0 }, {});
    },
    //tanh
    tanh: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.text("tanh");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, { downgap: 0 }, {});
    },
    //cosh
    cosh: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.text("cosh");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, { downgap: 0 }, {});
    },
    //sinh
    sinh: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.text("sinh");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, { downgap: 0 }, {});
    },
    //反cot
    fcot: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var supObj = this.MathObj.find(">span:nth-child(2)"); //上标
        opObj.text("cot");
        supObj.text("-1");
        var suptop = supObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, SupOP: supObj }, { downgap: 0 }, { suptdmove: suptop });
    },
    //反sec
    fsec: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var supObj = this.MathObj.find(">span:nth-child(2)"); //上标
        opObj.text("sec");
        supObj.text("-1");
        var suptop = supObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, SupOP: supObj }, { downgap: 0 }, { suptdmove: suptop });
    },
    //反csc
    fcsc: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var supObj = this.MathObj.find(">span:nth-child(2)"); //上标
        opObj.text("csc");
        supObj.text("-1");
        var suptop = supObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, SupOP: supObj }, { downgap: 0 }, { suptdmove: suptop });
    },
    //反tan
    ftan: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var supObj = this.MathObj.find(">span:nth-child(2)"); //上标
        opObj.text("tan");
        supObj.text("-1");
        var suptop = supObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, SupOP: supObj }, { downgap: 0 }, { suptdmove: suptop });
    },
    //反cos
    fcos: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var supObj = this.MathObj.find(">span:nth-child(2)"); //上标
        opObj.text("cos");
        supObj.text("-1");
        var suptop = supObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, SupOP: supObj }, { downgap: 0 }, { suptdmove: suptop });
    },
    //反sin
    fsin: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var supObj = this.MathObj.find(">span:nth-child(2)"); //上标
        opObj.text("sin");
        supObj.text("-1");
        var suptop = supObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, SupOP: supObj }, { downgap: 0 }, { suptdmove: suptop });
    },
    //cot
    cot: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.text("cot");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, { downgap: 0 }, {});
    },
    //sec
    sec: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.text("sec");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, { downgap: 0 }, {});
    },
    //csc
    csc: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.text("csc");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, { downgap: 0 }, {});
    },
    //tan
    tan: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.text("tan");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, { downgap: 0 }, {});
    },
    //cos
    cos: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.text("cos");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, { downgap: 0 }, {});
    },
    //sin
    sin: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.text("sin");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, { downgap: 0 }, {});
    },
    //lim
    max: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        var downObj = this.MathObj.find(">span:nth-child(3)"); //下
        opObj.text("max");
        var downtd = 0;
        downObj.css("font-size", "0.7em");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, Down: downObj }, { downgap: 0 }, { downtdmove: downtd, mark: "lim" });
    },
    //lim
    min: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        var downObj = this.MathObj.find(">span:nth-child(3)"); //下
        opObj.text("min");
        var downtd = 0;
        downObj.css("font-size", "0.7em");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, Down: downObj }, { downgap: 0 }, { downtdmove: downtd, mark: "lim" });
    },
    //lim
    lim: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        var downObj = this.MathObj.find(">span:nth-child(3)"); //下
        opObj.text("lim");
        var downtd = 0;
        downObj.css("font-size", "0.7em");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, Down: downObj }, { downgap: 0 }, { downtdmove: downtd, mark: "lim" });
    },
    //log
    log2: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        var subObj = this.MathObj.find(">span:nth-child(3)"); //下标
        opObj.html("log");
        var rightrl = subObj.width();
        var subtd = subObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, SubOP: subObj }, {}, { rightrlmove: rightrl, subtdmove: subtd });
    },
    //log
    log1: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.html("log");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, {}, {});
    },
    //求和
    sigma14: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        var rightObj = this.MathObj.find(">span:nth-child(3)"); //右
        var downObj = this.MathObj.find(">span:nth-child(4)"); //下
        opObj.html("<img src='./images/formula/qiuhe6b.png' />");
        var opheight = opObj.height();
        var uptd = 0 - opheight / 2 - 14;
        var uprl = upObj.width() / 2;
        var rightrl = 0;
        var righttd = rightObj.height() / 2;
        var downtd = (0 - opheight / 2) + 6;
        this.MathObj.css("position", "relative");
        this.MathObj.css("top", (opheight / 4) / parseInt(this.MathObj.css("font-size")) + "em");
        downObj.css("font-size", "0.7em");
        upObj.css("font-size", "0.7em");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, UP: upObj, Down: downObj }, {}, { uptdmove: uptd, uprlmove: uprl, rightrlmove: rightrl, righttdmove: righttd, downtdmove: downtd });
    },
    //求和
    sigma13: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.html("<img src='./images/formula/qiuhe6b.png' />");
        var righttop = rightObj.height() / 2;
        var optop = opObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, {}, { optdmove: optop, righttdmove: righttop });
    },
    //求和
    sigma12: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        var rightObj = this.MathObj.find(">span:nth-child(3)"); //右
        var downObj = this.MathObj.find(">span:nth-child(4)"); //下
        opObj.html("<img src='./images/formula/qiuhe7b.png' />");
        var opheight = opObj.height();
        var uptd = 0 - opheight / 2 - 14;
        var uprl = upObj.width() / 2;
        var rightrl = 0;
        var righttd = rightObj.height() / 2;
        var downtd = (0 - opheight / 2) + 6;
        this.MathObj.css("position", "relative");
        this.MathObj.css("top", (opheight / 4) / parseInt(this.MathObj.css("font-size")) + "em");
        downObj.css("font-size", "0.7em");
        upObj.css("font-size", "0.7em");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, UP: upObj, Down: downObj }, {}, { uptdmove: uptd, uprlmove: uprl, rightrlmove: rightrl, righttdmove: righttd, downtdmove: downtd });
    },
    //求和
    sigma11: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.html("<img src='./images/formula/qiuhe7b.png' />");
        var righttop = rightObj.height() / 2;
        var optop = opObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, {}, { optdmove: optop, righttdmove: righttop });
    },
    //求和
    sigma10: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        var rightObj = this.MathObj.find(">span:nth-child(3)"); //右
        var downObj = this.MathObj.find(">span:nth-child(4)"); //下
        opObj.html("<img src='./images/formula/qiuhe4b.png' />");
        var opheight = opObj.height();
        var uptd = 0 - opheight / 2 - 14;
        var uprl = upObj.width() / 2;
        var rightrl = 0;
        var righttd = rightObj.height() / 2;
        var downtd = (0 - opheight / 2) + 6;
        this.MathObj.css("position", "relative");
        this.MathObj.css("top", (opheight / 4) / parseInt(this.MathObj.css("font-size")) + "em");
        downObj.css("font-size", "0.7em");
        upObj.css("font-size", "0.7em");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, UP: upObj, Down: downObj }, {}, { uptdmove: uptd, uprlmove: uprl, rightrlmove: rightrl, righttdmove: righttd, downtdmove: downtd });
    },
    //求和
    sigma9: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.html("<img src='./images/formula/qiuhe4b.png' />");
        var righttop = rightObj.height() / 2;
        var optop = opObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, {}, { optdmove: optop, righttdmove: righttop });
    },
    //求和
    sigma8: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        var rightObj = this.MathObj.find(">span:nth-child(3)"); //右
        var downObj = this.MathObj.find(">span:nth-child(4)"); //下
        opObj.html("<img src='./images/formula/qiuhe5b.png' />");
        var opheight = opObj.height();
        var uptd = 0 - opheight / 2 - 14;
        var uprl = upObj.width() / 2;
        var rightrl = 0;
        var righttd = rightObj.height() / 2;
        var downtd = (0 - opheight / 2) + 6;
        this.MathObj.css("position", "relative");
        this.MathObj.css("top", (opheight / 4) / parseInt(this.MathObj.css("font-size")) + "em");
        downObj.css("font-size", "0.7em");
        upObj.css("font-size", "0.7em");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, UP: upObj, Down: downObj }, {}, { uptdmove: uptd, uprlmove: uprl, rightrlmove: rightrl, righttdmove: righttd, downtdmove: downtd });
    },
    //求和
    sigma7: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.html("<img src='./images/formula/qiuhe5b.png' />");
        var righttop = rightObj.height() / 2;
        var optop = opObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, {}, { optdmove: optop, righttdmove: righttop });
    },

    //求和
    sigma6: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        var rightObj = this.MathObj.find(">span:nth-child(3)"); //右
        var downObj = this.MathObj.find(">span:nth-child(4)"); //下
        opObj.html("<img src='./images/formula/qiuhe3b.png' />");
        var opheight = opObj.height();
        var uptd = 0 - opheight / 2 - 14;
        var uprl = upObj.width() / 2;
        var rightrl = 0;
        var righttd = rightObj.height() / 2;
        var downtd = (0 - opheight / 2) + 6;
        this.MathObj.css("position", "relative");
        this.MathObj.css("top", (opheight / 4) / parseInt(this.MathObj.css("font-size")) + "em");
        downObj.css("font-size", "0.7em");
        upObj.css("font-size", "0.7em");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, UP: upObj, Down: downObj }, {}, { uptdmove: uptd, uprlmove: uprl, rightrlmove: rightrl, righttdmove: righttd, downtdmove: downtd });
    },
    //求和
    sigma5: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.html("<img src='./images/formula/qiuhe3b.png' />");
        var righttop = rightObj.height() / 2;
        var optop = opObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, {}, { optdmove: optop, righttdmove: righttop });
    },
    //求和
    sigma4: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        var rightObj = this.MathObj.find(">span:nth-child(3)"); //右
        var downObj = this.MathObj.find(">span:nth-child(4)"); //下
        opObj.html("<img src='./images/formula/qiuhe2b.png' />");
        var opheight = opObj.height();
        var uptd = 0 - opheight / 2 - 14;
        var uprl = upObj.width() / 2;
        var rightrl = 0;
        var righttd = rightObj.height() / 2;
        var downtd = (0 - opheight / 2) + 6;
        this.MathObj.css("position", "relative");
        this.MathObj.css("top", (opheight / 4) / parseInt(this.MathObj.css("font-size")) + "em");
        downObj.css("font-size", "0.7em");
        upObj.css("font-size", "0.7em");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, UP: upObj, Down: downObj }, {}, { uptdmove: uptd, uprlmove: uprl, rightrlmove: rightrl, righttdmove: righttd, downtdmove: downtd });
    },
    //求和
    sigma3: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.html("<img src='./images/formula/qiuhe2b.png' />");
        var righttop = rightObj.height() / 2;
        var optop = opObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, {}, { optdmove: optop, righttdmove: righttop });
    },
    //求和
    sigma2: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        var rightObj = this.MathObj.find(">span:nth-child(3)"); //右
        var downObj = this.MathObj.find(">span:nth-child(4)"); //下
        opObj.html("<img src='./images/formula/qiuhe1b.png' />");
        var opheight = opObj.height();
        var uptd = 0 - opheight / 2 - 14;
        var uprl = upObj.width() / 2;
        var rightrl = 0;
        var righttd = rightObj.height() / 2;
        var downtd = (0 - opheight / 2) + 6;
        this.MathObj.css("position", "relative");
        this.MathObj.css("top", (opheight / 4) / parseInt(this.MathObj.css("font-size")) + "em");
        downObj.css("font-size", "0.7em");
        upObj.css("font-size", "0.7em");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, UP: upObj, Down: downObj }, {}, { uptdmove: uptd, uprlmove: uprl, rightrlmove: rightrl, righttdmove: righttd, downtdmove: downtd });
    },
    //求和
    sigma1: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.html("<img src='./images/formula/qiuhe1b.png' />");
        var righttop = rightObj.height() / 2;
        var optop = opObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, {}, { optdmove: optop, righttdmove: righttop });
    },
    //积分
    integral88: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        var rightObj = this.MathObj.find(">span:nth-child(3)"); //右
        var downObj = this.MathObj.find(">span:nth-child(4)"); //下
        opObj.html("<img src='./images/formula/jifenb.png' />");
        var uptd = upObj.height();
        var rightrl = 0;
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, UP: upObj, Down: downObj }, {}, { uptdmove: uptd, rightrlmove: rightrl });
    },
    //积分
    integral14: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        var supObj = this.MathObj.find(">span:nth-child(3)"); //上标
        var subObj = this.MathObj.find(">span:nth-child(4)"); //下标
        opObj.html("<img src='./images/formula/jifen6b.png' />");
        var suptd = supObj.height();
        var subtd = subObj.height() / 2;
        var subrl = 0;
        var rightrl = 0;
        var righttop = rightObj.height();
        var optop = opObj.height() / 2;
        if (supObj.width() > subObj.width()) {
            rightrl = supObj.width();
        }
        else {
            rightrl = subObj.width();
        }
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, SupOP: supObj, SubOP: subObj }, {}, { optdmove: optop, suptdmove: suptd, subtdmove: subtd, subrlmove: subrl, rightrlmove: rightrl, righttdmove: righttop });
    },
    //积分
    integral13: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.html("<img src='./images/formula/jifen6b.png' />");
        var righttop = rightObj.height();
        var optop = opObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, {}, { optdmove: optop, righttdmove: righttop });
    },
    //积分
    integral12: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        var supObj = this.MathObj.find(">span:nth-child(3)"); //上标
        var subObj = this.MathObj.find(">span:nth-child(4)"); //下标
        opObj.html("<img src='./images/formula/jifen5b.png' />");
        var suptd = supObj.height();
        var subtd = subObj.height() / 2;
        var subrl = 0;
        var rightrl = 0;
        var righttop = rightObj.height();
        var optop = opObj.height() / 2;
        if (supObj.width() > subObj.width()) {
            rightrl = supObj.width();
        }
        else {
            rightrl = subObj.width();
        }
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, SupOP: supObj, SubOP: subObj }, {}, { optdmove: optop, suptdmove: suptd, subtdmove: subtd, subrlmove: subrl, rightrlmove: rightrl, righttdmove: righttop });
    },
    //积分
    integral11: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.html("<img src='./images/formula/jifen5b.png' />");
        var righttop = rightObj.height();
        var optop = opObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, {}, { optdmove: optop, righttdmove: righttop });
    },
    //积分
    integral10: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        var supObj = this.MathObj.find(">span:nth-child(3)"); //上标
        var subObj = this.MathObj.find(">span:nth-child(4)"); //下标
        opObj.html("<img src='./images/formula/jifen4b.png' />");
        var suptd = supObj.height();
        var subtd = subObj.height() / 2;
        var subrl = 0;
        var rightrl = 0;
        var righttop = rightObj.height();
        var optop = opObj.height() / 2;
        if (supObj.width() > subObj.width()) {
            rightrl = supObj.width();
        }
        else {
            rightrl = subObj.width();
        }
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, SupOP: supObj, SubOP: subObj }, {}, { optdmove: optop, suptdmove: suptd, subtdmove: subtd, subrlmove: subrl, rightrlmove: rightrl, righttdmove: righttop });
    },
    //积分
    integral9: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.html("<img src='./images/formula/jifen4b.png' />");
        var righttop = rightObj.height();
        var optop = opObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, {}, { optdmove: optop, righttdmove: righttop });
    },
    //积分
    integral8: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        var supObj = this.MathObj.find(">span:nth-child(3)"); //上标
        var subObj = this.MathObj.find(">span:nth-child(4)"); //下标
        opObj.html("<img src='./images/formula/jifen7b.png' />");
        var suptd = supObj.height();
        var subtd = subObj.height() / 2;
        var subrl = 0;
        var rightrl = 0;
        var righttop = rightObj.height();
        var optop = opObj.height() / 2;
        if (supObj.width() > subObj.width()) {
            rightrl = supObj.width();
        }
        else {
            rightrl = subObj.width();
        }
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, SupOP: supObj, SubOP: subObj }, {}, { optdmove: optop, suptdmove: suptd, subtdmove: subtd, subrlmove: subrl, rightrlmove: rightrl, righttdmove: righttop });
    },
    //积分
    integral7: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.html("<img src='./images/formula/jifen7b.png' />");
        var righttop = rightObj.height();
        var optop = opObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, {}, { optdmove: optop, righttdmove: righttop });
    },
    //积分
    integral6: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        var supObj = this.MathObj.find(">span:nth-child(3)"); //上标
        var subObj = this.MathObj.find(">span:nth-child(4)"); //下标
        opObj.html("<img src='./images/formula/jifen3b.png' />");
        var suptd = supObj.height();
        var subtd = subObj.height() / 2;
        var subrl = 0;
        var rightrl = 0;
        var righttop = rightObj.height();
        var optop = opObj.height() / 2;
        if (supObj.width() > subObj.width()) {
            rightrl = supObj.width();
        }
        else {
            rightrl = subObj.width();
        }
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, SupOP: supObj, SubOP: subObj }, {}, { optdmove: optop, suptdmove: suptd, subtdmove: subtd, subrlmove: subrl, rightrlmove: rightrl, righttdmove: righttop });
    },
    //积分
    integral5: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.html("<img src='./images/formula/jifen3b.png' />");
        var righttop = rightObj.height();
        var optop = opObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, {}, { optdmove: optop, righttdmove: righttop });
    },
    //积分
    integral4: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        var supObj = this.MathObj.find(">span:nth-child(3)"); //上标
        var subObj = this.MathObj.find(">span:nth-child(4)"); //下标
        opObj.html("<img src='./images/formula/jifen2b.png' />");
        var suptd = supObj.height();
        var subtd = subObj.height() / 2;
        var subrl = 0;
        var rightrl = 0;
        var righttop = rightObj.height();
        var optop = opObj.height() / 2;
        if (supObj.width() > subObj.width()) {
            rightrl = supObj.width();
        }
        else {
            rightrl = subObj.width();
        }
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, SupOP: supObj, SubOP: subObj }, {}, { optdmove: optop, suptdmove: suptd, subtdmove: subtd, subrlmove: subrl, rightrlmove: rightrl, righttdmove: righttop });
    },
    //积分
    integral3: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.html("<img src='./images/formula/jifen2b.png' />");
        var righttop = rightObj.height();
        var optop = opObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, {}, { optdmove: optop, righttdmove: righttop });
    },
    //积分
    integral2: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        var supObj = this.MathObj.find(">span:nth-child(3)"); //上标
        var subObj = this.MathObj.find(">span:nth-child(4)"); //下标
        opObj.html("<img src='./images/formula/jifen1b.png' />");
        var suptd = supObj.height() / 2;
        var isChrome = navigator.userAgent.toLowerCase().match(/chrome/) != null;
        if ($.browser.mozilla) {
            suptd = supObj.height();
        }
        else if ($.browser.safari && !isChrome) {
            suptd = supObj.height() / 3;
        }
        var subtd = subObj.height() / 2;
        var subrl = 0;
        var rightrl = 0;
        var righttop = rightObj.height();
        var optop = opObj.height() / 2;
        if (supObj.width() > subObj.width()) {
            rightrl = supObj.width();
        }
        else {
            rightrl = subObj.width();
        }
        rightObj.css("font-size", "0.8em");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj, SupOP: supObj, SubOP: subObj }, {}, { optdmove: optop, suptdmove: suptd, subtdmove: subtd, subrlmove: subrl, rightrlmove: rightrl, righttdmove: righttop });
    },
    //积分
    integral1: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var rightObj = this.MathObj.find(">span:nth-child(2)"); //右
        opObj.html("<img src='./images/formula/jifen1b.png' />");
        var righttop = rightObj.height() / 2;
        var optop = opObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: rightObj }, {}, { optdmove: optop, righttdmove: righttop });
    },
    //左上下标
    leftsubsup: function (scale) {
        var foundationObj = this.MathObj.find(">span:nth-child(1)"); //底数
        var leftsubObj = this.MathObj.find(">span:nth-child(2)"); //左下标
        var leftsupObj = this.MathObj.find(">span:nth-child(3)"); //左上标
        var leftsuptop = leftsupObj.height() / 2;
        var leftsubtop = leftsubObj.height() / 1.2;
        this.MathPositionObj.Surround(scale, { OP: foundationObj, LeftSupOP: leftsupObj, LeftSubOP: leftsubObj }, {}, { leftSuptdmove: leftsuptop, leftSubtdmove: leftsubtop });
    },
    //右下标
    sub: function (scale) {
        var foundationObj = this.MathObj.find(">span:nth-child(1)"); //底数
        var subObj = this.MathObj.find(">span:nth-child(2)"); //下标
        var subtop = subObj.height() / 1.2;
        this.MathPositionObj.Surround(scale, { OP: foundationObj, SubOP: subObj }, {}, { subtdmove: subtop });
    },
    //右上下标
    subsup: function (scale) {
        var foundationObj = this.MathObj.find(">span:nth-child(1)"); //底数
        var supObj = this.MathObj.find(">span:nth-child(2)"); //上标
        var subObj = this.MathObj.find(">span:nth-child(3)"); //下标
        var suptop = supObj.height() / 2;
        var subtop = subObj.height() / 1.2;
        this.MathPositionObj.Surround(scale, { OP: foundationObj, SupOP: supObj, SubOP: subObj }, {}, { suptdmove: suptop, subtdmove: subtop });
    },
    //右上标（幂）
    sup: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var supObj = this.MathObj.find(">span:nth-child(2)"); //上标
        var suptop = supObj.height() / 2;
        this.MathPositionObj.Surround(scale, { OP: opObj, SupOP: supObj }, {}, { suptdmove: suptop });
    },
    //分数
    frac: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        var downObj = this.MathObj.find(">span:nth-child(3)"); //下
        var opheight = 0.1;
        var opwidthfix = 10;
        var fontsize = parseInt(this.MathObj.css("font-size"));
        opObj.css("height", opheight + "em"); //可以传参
        var opWidth = Math.max(upObj.width(), downObj.width()) + opwidthfix; //操作符号宽度取分子和分母的最大值然后加10px,可设置为参数
        var opWidthEm = opWidth / fontsize; //操作符相对单位
        opObj.css("width", opWidthEm + "em");
        opObj.css("border-left", opWidthEm + "em solid black");
        var downgaplen = 0;
        if ($.browser.msie || $.browser.safari || $.browser.opera) {
            downgaplen = 1;
        }
        else {
            downgaplen = 8;
        }
        downObj.css("font-size", "1em");
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj, Down: downObj }, { downgap: downgaplen }, { optdmove: "-0.25em", correct: "" });
        opObj.css("width", "0");
        this.MathObj.parent().height(upObj.height() + downObj.height() + opObj.height());
        var s = 1;
    },
    //分数2
    frac1: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        var downObj = this.MathObj.find(">span:nth-child(3)"); //下
        //opObj.html("_");
        opObj.css("border-top-style", "solid");
        if (upObj.width() > downObj.width()) {
            opObj.width(upObj.width());
        }
        else {
            opObj.width(downObj.width());
        }
        this.MathObj.parent().height(upObj.height() + downObj.height() + opObj.height());
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj, Down: downObj }, {}, { uptdmove: 3 });

    },
    frac2: function (scale) {

    },
    dakuohao: function (scale) {

    },
    zhongkuohao: function (scale) {

    },
    xiaokuohao: function (scale) {

    },
    dakuohao2: function (scale) {

    },
    zhongkuohao2: function (scale) {

    },
    xiaokuohao2: function (scale) {

    },
    //根号
    root: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var bottomObj = this.MathObj.find(">span:nth-child(2)"); //底数
        var bnumheight = bottomObj.height();
        var fontsize = parseInt(this.MathObj.css("font-size"));
        if (bnumheight < 25) {
            opObj.html("<img src='./images/formula/genhaob.png' />");
        }
        else if (bnumheight > 25 && bnumheight < 50) {
            opObj.html("<img src='./images/formula/genhao1b.png' />");
        }
        else {
            opObj.html("<img src='./images/formula/genhao2b.png' />");
        }
        opObj.css("float", "left");
        InitObj(bottomObj);
        bottomObj.css("border-top-style", "solid");
        bottomObj.css("border-width", 2 + "px");
        bottomObj.css("right", "0.1em");
        bottomObj.css("float", "left");
        this.MathObj.css("position", "relative");
        this.MathObj.css("top", bnumheight / 2 / fontsize - 0.2 + "em");
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: bottomObj }, { rightgap: -1, downgap: 0, topgap: 0 }, { mark: "genhao" });
    },
    //根号带标
    rootandleft: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var bottomObj = this.MathObj.find(">span:nth-child(2)"); //底数
        var leftsupObj = this.MathObj.find(">span:nth-child(3)"); //左上标
        var bnumheight = bottomObj.height();
        var fontsize = parseInt(this.MathObj.css("font-size"));
        if (bnumheight < 25) {
            opObj.html("<img src='./images/formula/genhaob.png' />");
        }
        else if (bnumheight > 25 && bnumheight < 50) {
            opObj.html("<img src='./images/formula/genhao1b.png' />");
        }
        else {
            opObj.html("<img src='./images/formula/genhao2b.png' />");
        }
        opObj.css("float", "left");
        InitObj(bottomObj);
        bottomObj.css("border-top-style", "solid");
        bottomObj.css("border-width", 2 + "px");
        bottomObj.css("right", "0.1em");
        bottomObj.css("float", "left");
        var leftsuptop = leftsupObj.height() / 2;
        var leftSuprl = -10;
        var isChrome = navigator.userAgent.toLowerCase().match(/chrome/) != null;
        if (isChrome) {
            leftSuprl = 10;
        }
        this.MathPositionObj.Surround(scale, { OP: opObj, Right: bottomObj, LeftSupOP: leftsupObj }, { rightgap: -1, downgap: 0, topgap: 0 }, { leftSuptdmove: leftsuptop, leftSuprlmove: leftSuprl, mark: "genhao" });
    },
    root2: function (scale) {
        var root = this.MathObj.find(">div:nth-child(1)");
        var table = root.find("table");
        root.width(table.width());
        var top = "-" + (table.height() / 2) + "px";
        root.css("top", top);
        root.css("margin-top", top);
    },
    surround: function (scale) {
        var opObj = this.MathObj.find(">span:nth-child(1)"); //操作符
        var upObj = this.MathObj.find(">span:nth-child(2)"); //上
        var rightObj = this.MathObj.find(">span:nth-child(3)"); //右
        var downObj = this.MathObj.find(">span:nth-child(4)"); //下
        var leftObj = this.MathObj.find(">span:nth-child(5)"); //左
        var supObj = this.MathObj.find(">span:nth-child(6)"); //上标
        var subObj = this.MathObj.find(">span:nth-child(7)"); //下标
        var leftsubObj = this.MathObj.find(">span:nth-child(8)"); //左下标
        var leftsupObj = this.MathObj.find(">span:nth-child(9)"); //左上标
        this.MathPositionObj.Surround(scale, { OP: opObj, UP: upObj, Right: rightObj, Down: downObj, Left: leftObj, SupOP: supObj, SubOP: subObj, LeftSupOP: leftsupObj, LeftSubOP: leftsubObj });
    }
};

(function ($) {
    $.fn.extend({
        formula: function (scale) {
            if (scale == undefined) { scale = 1; }
            var methodName = $(this).attr("math");
            if (methodName == undefined || methodName == "") {
                alert("没有定义表达式！");
                return;
            }
            try {
                $(this).children().each(function () {
                    $(this).children().each(function () {
                        if ($(this).attr("math") != undefined) {
                            $(this).formula(0.8);
                        }
                    });
                });
                var mathExpression = new MathExpression($(this));
                mathExpression[methodName](scale);
            }
            catch (e) { alert(e); }
        }
    });
})(jQuery)
