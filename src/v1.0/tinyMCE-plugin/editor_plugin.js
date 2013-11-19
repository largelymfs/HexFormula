/**
 * editor_plugin_src.js
 *
 * Copyright 2013, Tsinghua University
 * Released under MIT License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function() {
	tinymce.PluginManager.requireLangPack('formula');
	tinymce.create('tinymce.plugins.FormulaEditor', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			ed.addCommand('mceFormula', function() {
				if($("#openFormula").size() == 0) {
			    var alink = $("<a id=\"openFormula\" href=\"#formula\" style=\"display: none;\">formula link</a>");
			    $("body").append(alink).leanModal();
			    var frame = $("<div id=\"formula\" title=\"formula\"><iframe id=\"formulaFrame\" name=\"formulaFrame\" src=\"" + url + "/formula.html\" width=\"798px\" height=\"447px\"></iframe></div>");
			    $("body").append(frame);
			    document.getElementById('formulaFrame').src = document.getElementById('formulaFrame').src;
		  	}
		    $("#openFormula").leanModal().click();
			});

			ed.addButton('formula', {title : 'formula.desc', cmd : 'mceFormula'});
		},

		getInfo : function() {
			return {
				longname : 'Formula Editor',
				author : 'Tsinghua University',
				authorurl : 'http://www.tsinghua.edu.cn',
				infourl : 'http://www.tsinghua.edu.cn',
				version : '0.2'
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('formula', tinymce.plugins.FormulaEditor);
})();