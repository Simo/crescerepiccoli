/*
 * TipTip
 * Copyright 2010 Drew Wilson
 * www.drewwilson.com
 * code.drewwilson.com/entry/tiptip-jquery-plugin
 *
 * Version 1.3   -   Updated: Mar. 23, 2010
 *
 * This Plug-In will create a custom tooltip to replace the default
 * browser tooltip. It is extremely lightweight and very smart in
 * that it detects the edges of the browser window and will make sure
 * the tooltip stays within the current window size. As a result the
 * tooltip will adjust itself to be displayed above, below, to the left 
 * or to the right depending on what is necessary to stay within the
 * browser window. It is completely customizable as well via CSS.
 *
 * This TipTip jQuery plug-in is dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
!function(e){e.fn.tipTip=function(t){var i={activation:"hover",keepAlive:!1,maxWidth:"200px",edgeOffset:3,defaultPosition:"bottom",delay:400,fadeIn:200,fadeOut:200,attribute:"title",content:!1,enter:function(){},exit:function(){}},n=e.extend(i,t);if(e("#tiptip_holder").length<=0){var o=e('<div id="tiptip_holder" style="max-width:'+n.maxWidth+';"></div>'),s=e('<div id="tiptip_content"></div>'),r=e('<div id="tiptip_arrow"></div>');e("body").append(o.html(s).prepend(r.html('<div id="tiptip_arrow_inner"></div>')))}else var o=e("#tiptip_holder"),s=e("#tiptip_content"),r=e("#tiptip_arrow");return this.each(function(){function t(){n.enter.call(this),s.html(l),o.hide().removeAttr("class").css("margin","0"),r.removeAttr("style");var t=parseInt(a.offset().top),i=parseInt(a.offset().left),u=parseInt(a.outerWidth()),d=parseInt(a.outerHeight()),h=o.outerWidth(),p=o.outerHeight(),f=Math.round((u-h)/2),g=Math.round((d-p)/2),m=Math.round(i+f),v=Math.round(t+d+n.edgeOffset),b="",y="",w=Math.round(h-12)/2;"bottom"==n.defaultPosition?b="_bottom":"top"==n.defaultPosition?b="_top":"left"==n.defaultPosition?b="_left":"right"==n.defaultPosition&&(b="_right");var x=f+i<parseInt(e(window).scrollLeft()),_=h+i>parseInt(e(window).width());x&&0>f||"_right"==b&&!_||"_left"==b&&i<h+n.edgeOffset+5?(b="_right",y=Math.round(p-13)/2,w=-12,m=Math.round(i+u+n.edgeOffset),v=Math.round(t+g)):(_&&0>f||"_left"==b&&!x)&&(b="_left",y=Math.round(p-13)/2,w=Math.round(h),m=Math.round(i-(h+n.edgeOffset+5)),v=Math.round(t+g));var k=t+d+n.edgeOffset+p+8>parseInt(e(window).height()+e(window).scrollTop()),C=t+d-(n.edgeOffset+p+8)<0;k||"_bottom"==b&&k||"_top"==b&&!C?("_top"==b||"_bottom"==b?b="_top":b+="_top",y=p,v=Math.round(t-(p+5+n.edgeOffset))):(C|("_top"==b&&C)||"_bottom"==b&&!k)&&("_top"==b||"_bottom"==b?b="_bottom":b+="_bottom",y=-12,v=Math.round(t+d+n.edgeOffset)),"_right_top"==b||"_left_top"==b?v+=5:("_right_bottom"==b||"_left_bottom"==b)&&(v-=5),("_left_top"==b||"_left_bottom"==b)&&(m+=5),r.css({"margin-left":w+"px","margin-top":y+"px"}),o.css({"margin-left":m+"px","margin-top":v+"px"}).attr("class","tip"+b),c&&clearTimeout(c),c=setTimeout(function(){o.stop(!0,!0).fadeIn(n.fadeIn)},n.delay)}function i(){n.exit.call(this),c&&clearTimeout(c),o.fadeOut(n.fadeOut)}var a=e(this);if(n.content)var l=n.content;else var l=a.attr(n.attribute);if(""!=l){n.content||a.removeAttr(n.attribute);var c=!1;"hover"==n.activation?(a.hover(function(){t()},function(){n.keepAlive||i()}),n.keepAlive&&o.hover(function(){},function(){i()})):"focus"==n.activation?a.focus(function(){t()}).blur(function(){i()}):"click"==n.activation&&(a.click(function(){return t(),!1}).hover(function(){},function(){n.keepAlive||i()}),n.keepAlive&&o.hover(function(){},function(){i()}))}})}}(jQuery);