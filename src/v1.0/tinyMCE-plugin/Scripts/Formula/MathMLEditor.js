function checkLength(which) {
    //iCount = which.value.replace(/[^\u0000-\u00ff]/g, "aa").length;
    //$(which).width(iCount * 27 + 10);
    //var length = $(which).val().length;
    //$(which).attr("size", length + 1);
}
function CheckIsMathObj(obj) {
    if (typeof (obj.attr("math")) != "undefined") {
        return true;
    }
    else {
        return false;
    }
}
var currentSelectedObj;
var cursorDir; //0表示左边，1表示右边

$(window).load(function () {
    $("span[mathroot='true']").each(function () {
        $(this).formula();
    });
});
$(function () {
    $("body").append("<div style='position:absolute;z-index:-1;left:-50px;top:-50px'><input id='agentInput' type='text' /></div>");
    $("#formula_content").find("span").keydown(function (event) {
        if (event.keyCode == 13) {
            if (currentSelectedObj.closest("td").attr("isformula") == "true") {
                var rowspan1 = parseInt(currentSelectedObj.closest("table").find(".qishi2").attr("rowspan"));
                currentSelectedObj.closest("table").find(".qishi2").attr("rowspan", rowspan1 + 1);
                var rowspan2 = parseInt(currentSelectedObj.closest("table").find(".qishi1").attr("rowspan"));
                currentSelectedObj.closest("table").find(".qishi1").attr("rowspan", rowspan2 + 1);
                currentSelectedObj.closest("table").append("<tr><td isformula='true'><span><span>□</span></span></td></tr>");
            }
            else {
                currentSelectedObj.append("<span style='display:block;line-height:18px;'>□</span>");
            }
        }
    });
    $("#formula_content").find("span").live("click", function (event) {
        if (!$(this).hasClass("noclick") && $(this).attr("math") == undefined) {
            $("img[class='cursorImg']").remove();
            if (currentSelectedObj != undefined) {
                if (currentSelectedObj.hasClass("mathSelected")) {
                    currentSelectedObj.removeClass("mathSelected");
                }
            }
            currentSelectedObj = $(this);
            if (currentSelectedObj.find("img").length > 0) {
                //currentSelectedObj.addClass("mathSelected");
                return false;
            }
            currentSelectedObj.OriginalValue = currentSelectedObj.text();
            $("img[class='cursorImg']").remove();
            cursorDir = undefined;
            var str = currentSelectedObj.text();
            var fontsize = parseInt(currentSelectedObj.css("font-size"));
            var num = 27;
            if (fontsize < 40) {
                num = 20;
            }
            var length = str.length * num + 3;
            //            if (str.length == 1) {
            //                length = 20;
            //            }
            //currentSelectedObj.html("<input type='text' onkeyup='checkLength(this)' style='width:" + length + "px;' class='txt' value='' />");
            currentSelectedObj.html("<input type='text' style='width:" + length + "px;height:40px;' class='txt' value='' />");
            var txt = currentSelectedObj.find("input");
            txt.autoGrowInput({
                comfortZone: 00,
                minWidth: 20,
                maxWidth: 2000
            });
            txt.focus();
            txt.val(str);
            if (txt.val() == "□" || txt.val() == "-□") {
                txt.val("");
            }
            txt.focus();
            txt.blur(function () {
                if (txt.val() == "") {
                    currentSelectedObj.text("□");
                }
                else {
                    currentSelectedObj.html("<span>" + txt.val() + "</span>");
                }
                txt.remove();
                $("span[mathroot='true']").each(function () {
                    $(this).formula();
                });
            });
            txt.keyup(function () {
                $("span[mathroot='true']").each(function () {
                    $(this).formula();
                });
            });
            txt.click(function () {
                return false;
            });
            return false;
        } else {
            event.stopPropagation();
        }
    });

    var isFocus = false;
    $('#agentInput').focus(function () {
        isFocus = true;
    });

    $('#agentInput').blur(function () {
        isFocus = false;
    });


    $("#txtbox").blur(function () {
        $("#txtbox").val("");
    });

    $("#txtbox").keyup(function () {
        if (currentSelectedObj != undefined) {
            var text = currentSelectedObj.text();
            if (text == "-□") {
                currentSelectedObj.html("<span style='visibility:hidden;'>&nbsp;</span>");
            }
            else if (text == "□") {
                currentSelectedObj.text("");
            }
            var agentInputValue = $("#txtbox").val();
            $("img[class='cursorImg']").remove();
            if (cursorDir == 0) {
                if (CheckIsMathObj(currentSelectedObj)) {
                    currentSelectedObj.parent().find("img[class='cursorImg']").replaceWith(agentInputValue);
                    $("#agentInput").val("");
                    var cursorImgObj = "<img class='cursorImg' style='position:absolute' height='" + currentSelectedObj.height() + "' width='1px' src='/images/cursor.gif' />";
                    currentSelectedObj.before(cursorImgObj);
                }
                else {
                    currentSelectedObj.text(agentInputValue + currentSelectedObj.OriginalValue);
                    $("#txtbox").focus();
                }
            }
            else if (cursorDir == 1) {
                if (CheckIsMathObj(currentSelectedObj)) {
                    currentSelectedObj.parent().find("img[class='cursorImg']").replaceWith(agentInputValue);
                    $("#txtbox").val("");
                    var cursorImgObj = "<img class='cursorImg' style='position:absolute' height='" + currentSelectedObj.height() + "' width='1px' src='/images/cursor.gif' />";
                    currentSelectedObj.after(cursorImgObj);
                }
                else {
                    currentSelectedObj.text(currentSelectedObj.OriginalValue + agentInputValue);
                    $("#txtbox").focus();
                }
            }
            else {
                if (agentInputValue != "") {
                    var str = agentInputValue;
                    currentSelectedObj.html("");
                    currentSelectedObj.append(str);
                }
            }
        }

    });

    //开始查找浏览器中的公式片段，并转换成公式
    $("span[mathroot='true']").each(function () {
        $(this).formula();
    });

});