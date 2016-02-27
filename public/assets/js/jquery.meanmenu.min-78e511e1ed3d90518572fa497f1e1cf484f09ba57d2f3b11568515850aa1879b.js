/*!
 * jQuery meanMenu v2.0.6
 * @Copyright (C) 2012-2013 Chris Wharton (https://github.com/weare2ndfloor/meanMenu)
 *
 */
/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT
 * HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
 * FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE
 * OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS,
 * COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.COPYRIGHT HOLDERS WILL NOT
 * BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
 * DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://gnu.org/licenses/>.
 *
 * Find more information at http://www.meanthemes.com/plugins/meanmenu/
 *
 */
!function(e){"use strict";e.fn.meanmenu=function(t){var i={meanMenuTarget:jQuery(this),meanMenuContainer:"body",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanRevealHoverColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1,onePage:!1,removeElements:""},t=e.extend(i,t),n=window.innerWidth||document.documentElement.clientWidth;return this.each(function(){function e(){if("center"==d){var e=window.innerWidth||document.documentElement.clientWidth,t=e/2-22+"px";E="left:"+t+";right:auto;",C?jQuery(".meanmenu-reveal").animate({left:t}):jQuery(".meanmenu-reveal").css("left",t)}}function i(){jQuery(j).is(".meanmenu-reveal.meanclose")?j.html(l):j.html(u)}function s(){jQuery(".mean-bar,.mean-push").remove(),jQuery(a).removeClass("mean-container"),jQuery(r).show(),S=!1,T=!1,jQuery(k).removeClass("mean-remove")}function o(){if(f>=n){jQuery(k).addClass("mean-remove"),T=!0,jQuery(a).addClass("mean-container"),jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+D+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var e=jQuery(r).html();jQuery(".mean-nav").html(e),x&&jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function(){jQuery(this).removeAttr("class"),jQuery(this).removeAttr("id")}),jQuery(r).before('<div class="mean-push" />'),jQuery(".mean-push").css("margin-top",g),jQuery(r).hide(),jQuery(".meanmenu-reveal").show(),jQuery(m).html(u),j=jQuery(m),jQuery(".mean-nav ul").hide(),v?b?(jQuery(".mean-nav ul ul").each(function(){jQuery(this).children().length&&jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+c+'">'+y+"</a>")}),jQuery(".mean-expand").on("click",function(e){e.preventDefault(),jQuery(this).hasClass("mean-clicked")?(jQuery(this).text(y),jQuery(this).prev("ul").slideUp(300,function(){})):(jQuery(this).text(w),jQuery(this).prev("ul").slideDown(300,function(){})),jQuery(this).toggleClass("mean-clicked")})):jQuery(".mean-nav ul ul").show():jQuery(".mean-nav ul ul").hide(),jQuery(".mean-nav ul li").last().addClass("mean-last"),j.removeClass("meanclose"),jQuery(j).click(function(e){e.preventDefault(),0==S?(j.css("text-align","center"),j.css("text-indent","0"),j.css("font-size",c),jQuery(".mean-nav ul:first").slideDown(),S=!0):(jQuery(".mean-nav ul:first").slideUp(),S=!1),j.toggleClass("meanclose"),i(),jQuery(k).addClass("mean-remove")}),_&&jQuery(".mean-nav ul > li > a:first-child").on("click",function(){jQuery(".mean-nav ul:first").slideUp(),S=!1,jQuery(j).toggleClass("meanclose").html(u)})}else s()}var r=t.meanMenuTarget,a=t.meanMenuContainer,l=(t.meanReveal,t.meanMenuClose),c=t.meanMenuCloseSize,u=t.meanMenuOpen,d=t.meanRevealPosition,h=t.meanRevealPositionDistance,p=t.meanRevealColour,f=(t.meanRevealHoverColour,t.meanScreenWidth),g=t.meanNavPush,m=".meanmenu-reveal",v=t.meanShowChildren,b=t.meanExpandableChildren,y=t.meanExpand,w=t.meanContract,x=t.meanRemoveAttrs,_=t.onePage,k=t.removeElements;if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))var C=!0;(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&jQuery("html").css("overflow-y","scroll");var S=!1,T=!1;if("right"==d&&(E="right:"+h+";left:auto;"),"left"==d)var E="left:"+h+";right:auto;";e();var D="background:"+p+";color:"+p+";"+E,j="";C||jQuery(window).resize(function(){n=window.innerWidth||document.documentElement.clientWidth,n>f,s(),f>=n?(o(),e()):s()}),window.onorientationchange=function(){e(),n=window.innerWidth||document.documentElement.clientWidth,n>=f&&s(),f>=n&&0==T&&o()},o()})}}(jQuery);