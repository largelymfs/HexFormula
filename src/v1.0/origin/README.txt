xxx(VFE) is a WYSIWYG editor that allows inserting formulas in web page. It runs on any browser without the plugin , such as ie,chrome,firefox,safari and opera, as is based on HTML, CSS and JavaScript technology.

The editor comes in two core flavours: Standalone Editor and Integrated Editor.

Installation
=============================
1. Download xxx(VFE) from 
   http://github.com/....

2. Create a root folder and copy css, images and scripts to the root folder or your project folders.

3. Place the formulaediter.htm to the root folder.

Standalone Usage
=============================
1. Create a new blank html page.

2. Place the follow script code to the head of new page.
 
  ----------------------------------------------------------------
  <script>
        var width = 798;
        var height = 447;
        var left, top;
        left = (window.screen.availWidth - width) / 2;
        top = (window.screen.availHeight - height) / 2;
        var per = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top + ',screenX=' + left + ',screenY=' + top + ",toolbar=no, menubar=no, scrollbars=no, resizable=yes, location=no, status=no";
        window.open('formulaediter.htm', '公式编辑器', per);
        function editor(str) {
            //alert(str);
            var img_reg = /<img.+?>/ig; //匹配符合img标签
            var img_arr = str.match(img_reg); //得到所有img标签
            //        alert(img_arr);
            if (img_arr != undefined) {
                for (var i = 0; i < img_arr.length; i++) {
                    str = str.replace("b.png", "_1.png");
                }
            }
            showformula.innerHTML = str;
        }
    </script>

  ----------------------------------------------------------------

3. Create a <div> element of which the id is showformula.
   for example:
  ----------------------------------------------------------------

    <div id="showformula">
    </div>

  ----------------------------------------------------------------