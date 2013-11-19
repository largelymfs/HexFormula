$(document).ready(function () {
    $("body").queryLoader2({
        barColor: "#8CBDE3",
        backgroundColor: "#FFFFFF",
        percentage: true,
        barHeight: 10,
        completeAnimation: "grow"
    });
});
function test() {
    $("span[mathroot='true']").each(function () {
        $(this).formula();
    });
}
function setTab(name, cursel, n) {

    for (i = 1; i <= n; i++) {
        var oMenu = document.getElementById(name + i);
        var oCon = document.getElementById('comtab_' + name + '_' + i);
        oMenu.className = i == cursel ? 'intabul_click' : '';
        oCon.className = i == cursel ? 'infor_cen d_current' : 'infor_cen d_undis';
    }
}
function factory(model) {
    if (currentSelectedObj == undefined) {
        alert("未指定位置");
        return;
    }
    switch (model) {
        case 'fenshushushi':
            //var fracHtml = "<span math='frac1' mathroot='true'><span></span><span>□</span><span>□</span></span>";
            var fracHtml = "<span math='frac'><div class='frac' style='display: inline-block;position:relative;top:0.5em;margin-top:-18px;line-height:0.8em;'><table border='0' cellspacing='0' cellpadding='0'><tr><td align='center'><span style='position:relative;top:0px;'>□</span></td></tr><tr><td style='border-top: 0.1em solid black' align='center'><span>□</span></td></tr></table></div></span>";
            break;
        case 'fenshuhengshi':
            var fracHtml = "<span math='frac2' mathroot='true'><span>□</span><span>/</span><span>□</span></span>";
            break;
        case 'shangbiao':
            var fracHtml = "<span math='sup' mathroot='true'><span>□</span><span>□</span></span>";
            break;
        case 'xiabiao':
            var fracHtml = "<span math='sub' mathroot='true'><span>□</span><span>□</span></span>";
            break;
        case 'shangxiabiao':
            var fracHtml = "<span math='subsup' mathroot='true'><span>□</span><span>□</span><span>□</span></span>";
            break;
        case 'zuoshangxiabiao':
            var fracHtml = "<span math='leftsubsup' mathroot='true'><span>□</span><span>□</span><span>□</span></span>";
            break;
        case 'pingfanggen':
            var fracHtml = "<span math='root' mathroot='true'><span></span><span>□</span></span>";
            break;
        case 'daicishupingfanggen':
            var fracHtml = "<span math='rootandleft' mathroot='true'><span></span><span>□</span><span>□</span></span>";
            break;
        case 'yichongjifen1':
            var fracHtml = "<span math='integral1' mathroot='true'><span></span><span>□</span></span>";
            break;
        case 'yichongjifen2':
            var fracHtml = "<span math='integral2' mathroot='true'><span></span><span>□</span><span>□</span><span>□</span></span>";
            break;
        case 'erchongjifen1':
            var fracHtml = "<span math='integral3' mathroot='true'><span></span><span>□</span></span>";
            break;
        case 'erchongjifen2':
            var fracHtml = "<span math='integral4' mathroot='true'><span></span><span>□</span><span>□</span><span>□</span></span>";
            break;
        case 'sanchongjifen1':
            var fracHtml = "<span math='integral5' mathroot='true'><span></span><span>□</span></span>";
            break;
        case 'sanchongjifen2':
            var fracHtml = "<span math='integral6' mathroot='true'><span></span><span>□</span><span>□</span><span>□</span></span>";
            break;
        case 'yichongweidaojifen1':
            var fracHtml = "<span math='integral9' mathroot='true'><span></span><span>□</span></span>";
            break;
        case 'yichongweidaojifen2':
            var fracHtml = "<span math='integral10' mathroot='true'><span></span><span>□</span><span>□</span><span>□</span></span>";
            break;
        case 'erchongweidaojifen1':
            var fracHtml = "<span math='integral11' mathroot='true'><span></span><span>□</span></span>";
            break;
        case 'erchongweidaojifen2':
            var fracHtml = "<span math='integral12' mathroot='true'><span></span><span>□</span><span>□</span><span>□</span></span>";
            break;
        case 'sanchongweidaojifen1':
            var fracHtml = "<span math='integral13' mathroot='true'><span></span><span>□</span></span>";
            break;
        case 'sanchongweidaojifen2':
            var fracHtml = "<span math='integral14' mathroot='true'><span></span><span>□</span><span>□</span><span>□</span></span>";
            break;
        case 'qiuhe1':
            var fracHtml = "<span math='sigma1' mathroot='true'><span></span><span>□</span></span>";
            break;
        case 'qiuhe2':
            var fracHtml = "<span math='sigma2' mathroot='true'><span></span><span>□</span><span>□</span><span>□</span></span>";
            break;
        case 'chengji1':
            var fracHtml = "<span math='sigma3' mathroot='true'><span></span><span>□</span></span>";
            break;
        case 'chengji2':
            var fracHtml = "<span math='sigma4' mathroot='true'><span></span><span>□</span><span>□</span><span>□</span></span>";
            break;
        case 'fuji1':
            var fracHtml = "<span math='sigma5' mathroot='true'><span></span><span>□</span></span>";
            break;
        case 'fuji2':
            var fracHtml = "<span math='sigma6' mathroot='true'><span></span><span>□</span><span>□</span><span>□</span></span>";
            break;
        case 'bingji1':
            var fracHtml = "<span math='sigma7' mathroot='true'><span></span><span>□</span></span>";
            break;
        case 'bingji2':
            var fracHtml = "<span math='sigma8' mathroot='true'><span></span><span>□</span><span>□</span><span>□</span></span>";
            break;
        case 'jiaoji1':
            var fracHtml = "<span math='sigma9' mathroot='true'><span></span><span>□</span></span>";
            break;
        case 'jiaoji2':
            var fracHtml = "<span math='sigma10' mathroot='true'><span></span><span>□</span><span>□</span><span>□</span></span>";
            break;
        case 'vee1':
            var fracHtml = "<span math='sigma11' mathroot='true'><span></span><span>□</span></span>";
            break;
        case 'vee2':
            var fracHtml = "<span math='sigma12' mathroot='true'><span></span><span>□</span><span>□</span><span>□</span></span>";
            break;
        case 'wedge1':
            var fracHtml = "<span math='sigma13' mathroot='true'><span></span><span>□</span></span>";
            break;
        case 'wedge2':
            var fracHtml = "<span math='sigma14' mathroot='true'><span></span><span>□</span><span>□</span><span>□</span></span>";
            break;
        case 'duishu':
            var fracHtml = "<span math='log2' mathroot='true'><span></span><span>□</span><span>□</span></span>";
            break;
        case 'jixian':
            var fracHtml = "<span math='lim' mathroot='true'><span></span><span>□</span><span style='line-height:8px;'>□</span></span>";
            break;
        case 'jixiaozhi':
            var fracHtml = "<span math='min' mathroot='true'><span></span><span>□</span><span style='line-height:8px;'>□</span></span>";
            break;
        case 'jidazhi':
            var fracHtml = "<span math='max' mathroot='true'><span></span><span>□</span><span style='line-height:8px;'>□</span></span>";
            break;
        case 'juzhen':
            var fracHtml = "<div style='display: inline-block;'><table cellspacing='0' cellpadding='0' class='style1'><tbody><tr><td rowspan='3'><span>□</span></td><td><span>□</span></td><td><span>□</span></td><td><span>□</span></td><td rowspan='3'><span>□</span></td></tr><tr><td><span>□</span></td><td><span>□</span></td><td><span>□</span></td></tr><tr><td><span>□</span></td><td><span>□</span></td><td><span>□</span></td></tr></tbody></table></div>";
            break;
        case 'juzhen2':
            var fracHtml = "<div style='display: inline-block;'><table cellspacing='0' cellpadding='0' class='style1'><tbody><tr><td rowspan='2'><span>□</span></td><td><span>□</span></td><td><span>□</span></td><td rowspan='2'><span>□</span></td></tr><tr><td><span>□</span></td><td><span>□</span></td></tr></tbody></table></div>";
            break;
        case 'dakuohao':
            var fracHtml = "<span math='dakuohao' mathroot='true'><div style='display: inline-block;position:relative;top:20px;'><table><tr><td rowspan='2' class='qishi1'><span>□</span></td></tr><tr><td rowspan='1' class='qishi2'><img src='./images/formula/dakh1b.png' /></td><td isformula='true'><span>□</span></td></tr></table></div></span>";
            break;
        case 'zhongkuohao':
            var fracHtml = "<span math='zhongkuohao' mathroot='true'><div style='display: inline-block;position:relative;top:20px;'><table><tr><td rowspan='2' class='qishi1'><span>□</span></td></tr><tr><td rowspan='1' class='qishi2'><img src='./images/formula/fangkh1b.png' /></td><td isformula='true'><span>□</span></td></tr></table></div></span>";
            break;
        case 'xiaokuohao':
            var fracHtml = "<span math='xiaokuohao' mathroot='true'><div style='display: inline-block;position:relative;top:20px;'><table><tr><td rowspan='2' class='qishi1'><span>□</span></td></tr><tr><td rowspan='1' class='qishi2'><img src='./images/formula/kuohao1b.png' /></td><td isformula='true'><span>□</span></td></tr></table></div></span>";
            break;
        case 'dakuohao2':
            var fracHtml = "<span math='dakuohao2' mathroot='true'><div style='display: inline-block;position:relative;top:20px;'><table><tr><td rowspan='3' class='qishi1'><span>□</span></td></tr><tr><td rowspan='1' class='qishi2'><img src='./images/formula/dakh1b.png' /></td><td isformula='true'><span>□</span></td><td rowspan='1' class='qishi2'><img src='./images/formula/dakh2b.png' /></td></tr></table></div></span>";
            break;
        case 'zhongkuohao2':
            var fracHtml = "<span math='zhongkuohao2' mathroot='true'><div style='display: inline-block;position:relative;top:20px;'><table><tr><td rowspan='3' class='qishi1'><span>□</span></td></tr><tr><td rowspan='1' class='qishi2'><img src='./images/formula/fangkh1b.png' /></td><td isformula='true'><span>□</span></td><td rowspan='1' class='qishi2'><img src='./images/formula/fangkh2b.png' /></td></tr></table></div></span>";
            break;
        case 'xiaokuohao2':
            var fracHtml = "<span math='xiaokuohao2' mathroot='true'><div style='display: inline-block;position:relative;top:20px;'><table><tr><td rowspan='3' class='qishi1'><span>□</span></td></tr><tr><td rowspan='1' class='qishi2'><img src='./images/formula/kuohao1b.png' /></td><td isformula='true'><span>□</span></td><td rowspan='1' class='qishi2'><img src='./images/formula/kuohao2b.png' /></td></tr></table></div></span>";
            break;
        case 'zhengxianhanshu':
            var fracHtml = "<span math='sin' mathroot='true'><span>sin</span><span>□</span></span>";
            break;
        case 'yuxianhanshu':
            var fracHtml = "<span math='cos' mathroot='true'><span>cos</span><span>□</span></span>";
            break;
        case 'zhengqiehanshu':
            var fracHtml = "<span math='tan' mathroot='true'><span>tan</span><span>□</span></span>";
            break;
        case 'yugehanshu':
            var fracHtml = "<span math='csc' mathroot='true'><span>csc</span><span>□</span></span>";
            break;
        case 'zhenggehanshu':
            var fracHtml = "<span math='sec' mathroot='true'><span>sec</span><span>□</span></span>";
            break;
        case 'yuqiehanshu':
            var fracHtml = "<span math='cot' mathroot='true'><span>cot</span><span>□</span></span>";
            break;
        case 'fzhengxianhanshu':
            var fracHtml = "<span math='fsin' mathroot='true'><span>sin</span><span>-1</span><span>□</span></span>";
            break;
        case 'fyuxianhanshu':
            var fracHtml = "<span math='fcos' mathroot='true'><span>cos</span><span>-1</span><span>□</span></span>";
            break;
        case 'fzhengqiehanshu':
            var fracHtml = "<span math='ftan' mathroot='true'><span>tan</span><span>-1</span><span>□</span></span>";
            break;
        case 'fyugehanshu':
            var fracHtml = "<span math='fcsc' mathroot='true'><span>csc</span><span>-1</span><span>□</span></span>";
            break;
        case 'fzhenggehanshu':
            var fracHtml = "<span math='fsec' mathroot='true'><span>sec</span><span>-1</span><span>□</span></span>";
            break;
        case 'fyuqiehanshu':
            var fracHtml = "<span math='fcot' mathroot='true'><span>cot</span><span>-1</span><span>□</span></span>";
            break;
        case 'sqzhengxianhanshu':
            var fracHtml = "<span math='sinh' mathroot='true'><span>sinh</span><span>□</span></span>";
            break;
        case 'sqyuxianhanshu':
            var fracHtml = "<span math='cosh' mathroot='true'><span>cosh</span><span>□</span></span>";
            break;
        case 'sqzhengqiehanshu':
            var fracHtml = "<span math='tanh' mathroot='true'><span>tanh</span><span>□</span></span>";
            break;
        case 'sqyugehanshu':
            var fracHtml = "<span math='csch' mathroot='true'><span>csch</span><span>□</span></span>";
            break;
        case 'sqzhenggehanshu':
            var fracHtml = "<span math='sech' mathroot='true'><span>sech</span><span>□</span></span>";
            break;
        case 'sqyuqiehanshu':
            var fracHtml = "<span math='coth' mathroot='true'><span>coth</span><span>□</span></span>";
            break;
        case 'fsqzhengxianhanshu':
            var fracHtml = "<span math='fsinh' mathroot='true'><span>sinh</span><span>-1</span><span>□</span></span>";
            break;
        case 'fsqyuxianhanshu':
            var fracHtml = "<span math='fcosh' mathroot='true'><span>cosh</span><span>-1</span><span>□</span></span>";
            break;
        case 'fsqzhengqiehanshu':
            var fracHtml = "<span math='ftanh' mathroot='true'><span>tanh</span><span>-1</span><span>□</span></span>";
            break;
        case 'fsqyugehanshu':
            var fracHtml = "<span math='fcsch' mathroot='true'><span>csch</span><span>-1</span><span>□</span></span>";
            break;
        case 'fsqzhenggehanshu':
            var fracHtml = "<span math='fsech' mathroot='true'><span>sech</span><span>-1</span><span>□</span></span>";
            break;
        case 'fsqyuqiehanshu':
            var fracHtml = "<span math='fcoth' mathroot='true'><span>coth</span><span>-1</span><span>□</span></span>";
            break;
        case 'dian':
            var fracHtml = "<span math='dian' mathroot='true' class='noclick'><span>□</span><span class='noclick'></span></span>";
            break;
        case 'shuangdian':
            var fracHtml = "<span math='shuangdian' mathroot='true'><span>□</span><span></span></span>";
            break;
        case 'sandian':
            var fracHtml = "<span math='sandian' mathroot='true'><span>□</span><span></span></span>";
            break;
        case 'chengminghao':
            var fracHtml = "<span math='chengminghao' mathroot='true'><span>□</span><span></span></span>";
            break;
        case 'duihao':
            var fracHtml = "<span math='duihao' mathroot='true'><span>□</span><span></span></span>";
            break;
        case 'jianyin':
            var fracHtml = "<span math='jianyin' mathroot='true'><span>□</span><span></span></span>";
            break;
        case 'yiyin':
            var fracHtml = "<span math='yiyin' mathroot='true'><span>□</span><span></span></span>";
            break;
        case 'duanyin':
            var fracHtml = "<span math='duanyin' mathroot='true'><span>□</span><span></span></span>";
            break;
        case 'ehua':
            var fracHtml = "<span math='ehua' mathroot='true'><span>□</span><span></span></span>";
            break;
        case 'henggang':
            var fracHtml = "<span math='henggang' mathroot='true'><span>□</span><span></span></span>";
            break;
        case 'shuangdingxian':
            var fracHtml = "<span math='shuangdingxian' mathroot='true'><span>□</span><span></span></span>";
            break;
        case 'sfdakuohao':
            var fracHtml = "<span math='sfdakuohao' mathroot='true'><span>□</span><span></span></span>";
            break;
        case 'xfdakuohao':
            var fracHtml = "<span math='xfdakuohao' mathroot='true'><span>□</span><span></span></span>";
            break;
        case 'zuojiantou':
            var fracHtml = "<span math='zuojiantou' mathroot='true'><span>□</span><span></span></span>";
            break;
        case 'youjiantou':
            var fracHtml = "<span math='youjiantou' mathroot='true'><span>□</span><span></span></span>";
            break;
        case 'zuoyoujiantou':
            var fracHtml = "<span math='zuoyoujiantou' mathroot='true'><span>□</span><span></span></span>";
            break;
    }
    if (currentSelectedObj.text() == "-□") {
        currentSelectedObj.html("<span style='visibility:hidden;'>&nbsp;</span>");
    }
    if (currentSelectedObj.text() == "□") {
        //currentSelectedObj.find(">span:nth-child(1)").remove();
        currentSelectedObj.html("");
    }
    if (cursorDir == 0) {
        currentSelectedObj.prepend(fracHtml);
    }
    else if (cursorDir == 1) {
        currentSelectedObj.append(fracHtml);
    }
    else {
        currentSelectedObj.append(fracHtml);
    }
    currentSelectedObj.append("<span><input type='text'onkeyup='checkLength(this)' onkeyup='checkLength(this)' style='width:20px;position:relative;z-index:1;' class='txt' value='' /></span>");
    currentSelectedObj = currentSelectedObj.parent();
    $("span[mathroot='true']").each(function () {
        $(this).formula();
    });
    setTimeout(test, 100);
};

$(function () {
    $("#submit").click(function () {
        if ($.browser.msie) {
            var str = "<span><input style=\"width: 20px; position: relative; z-index: 1;\" class=\"txt\" onkeyup=\"checkLength(this)\" value=\"\" type=\"text\"></span>";
        }
        else if ($.browser.mozilla) {
            var str = "<span><input onkeyup=\"checkLength(this)\" style=\"width:20px;position:relative;z-index:1;\" class=\"txt\" value=\"\" type=\"text\"></span>";
        }
        else {
            var str = "<span><input type=\"text\" onkeyup=\"checkLength(this)\" style=\"width:20px;position:relative;z-index:1;\" class=\"txt\" value=\"\"></span>";
        }
        var str_formula = $("#formula_content").html();
        var newstr = str_formula.split(str).join("");
        //window.opener.editor.html(newstr);
        //window.opener.editor.appendHtml("");
        window.opener.editor(newstr);
        window.close();
    });
    $("#formula_content").click(function () {
        $(".formula_list").find("div").hide();
    })
    $("dl").mouseover(function () {
        $(this).css("background", "#FDE389");
    })
    $("dl").mouseout(function () {
        $(this).css("background", "#F3F1F5");
    })
    $("dl").click(function () {
        var obj = $(this);
        var offset = obj.offset();
        var div = obj.find("div");
        $(".formula_list").find("div").hide();
        div.show();
        var bro = $.browser;
        newPos = new Object();
        if (bro.mozilla) {
            newPos.left = offset.left - div.width() / 2 + obj.width() / 2;
            newPos.top = offset.top + obj.height() + 9;
            div.offset(newPos);
        }
        else if (bro.safari) {
            var isChrome = navigator.userAgent.toLowerCase().match(/chrome/) != null;
            if (isChrome) {
                newPos.left = offset.left - div.width() / 2 + obj.width() / 2;
                newPos.top = offset.top + obj.height() + 9;
                div.offset(newPos);
            } else {
                newPos.left = offset.left;
                newPos.top = offset.top + obj.height() + 9;
                div.offset(newPos);
            }
        }
        else {
            newPos.left = offset.left;
            newPos.top = offset.top + obj.height() + 9;
            div.offset(newPos);
        }
    })
    $("#comtab_box_1 li a").click(function () {
        var id = $(this).attr("id");
        $(this).parents().find(".fosi_fsboxd").hide();
        $(this).parents().find(".fosi_fsbox").hide();
        factory(id);
        return false;
    })
    $(".sign_list a").click(function () {
        var data = { "base_math01": "±", "base_math02": "∞", "base_math03": "=", "base_math04": "≠", "base_math05": "~",
            "base_math06": "×", "base_math07": "÷", "base_math08": "!", "base_math09": "∝", "base_math10": "<", "base_math11": "≪",
            "base_math12": ">", "base_math13": "≫", "base_math14": "≤", "base_math15": "≥", "base_math16": "∓", "base_math17": "≅",
            "base_math18": "≈", "base_math19": "≡", "base_math20": "∀", "base_math21": "∁", "base_math22": "∂", "base_math23": "√",
            "base_math24": "∛", "base_math25": "∜", "base_math26": "∪", "base_math27": "∩", "base_math28": "∅", "base_math29": "%",
            "base_math30": "°", "base_math31": "℉", "base_math32": "℃", "base_math33": "∆", "base_math34": "∇", "base_math35": "∃",
            "base_math36": "∄", "base_math37": "∈", "base_math38": "∋", "base_math39": "←", "base_math40": "↑", "base_math41": "→",
            "base_math42": "↓", "base_math43": "↔", "base_math44": "∴", "base_math45": "+", "base_math46": "-",
            "base_math47": "α", "base_math48": "β", "base_math49": "γ", "base_math50": "δ", "base_math51": "ε", "base_math52": "ϵ",
            "base_math53": "θ", "base_math54": "ϑ", "base_math55": "μ", "base_math56": "π", "base_math57": "ρ", "base_math58": "σ",
            "base_math59": "τ", "base_math60": "φ", "base_math61": "ω", "base_math62": "*", "base_math63": "∙", "base_math64": "⋮",
            "base_math65": "⋯", "base_math66": "⋰", "base_math67": "⋱", "base_math68": "ℵ", "base_math69": "ℶ", "base_math70": "∎"
        };

        for (var i in data) {
            if ($(this).attr("class") == i) {
                var fracHtml = data[i];
            }
        }
        if (currentSelectedObj == undefined) {
            alert("未指定位置");
            return;
        }
        //                if (currentSelectedObj.html() == "<span>□</span>") {
        //                    currentSelectedObj.html(fracHtml);
        //                }
        if (currentSelectedObj.text() == "□") {
            currentSelectedObj.html(fracHtml);
        }
        else {
            currentSelectedObj.append(fracHtml);
        }

    })
    $(".signlist_right").click(function () {
        $(".sign_list ul").css("position", "relative");
        $(".sign_list ul").css("left", "-598px");
    })
    $(".signlist_left").click(function () {
        $(".sign_list ul").css("position", "relative");
        $(".sign_list ul").css("left", "0px");
    })
})
