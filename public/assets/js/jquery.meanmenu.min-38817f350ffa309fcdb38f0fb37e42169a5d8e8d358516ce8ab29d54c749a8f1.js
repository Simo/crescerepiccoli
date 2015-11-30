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
!function(e){"use strict";e.fn.meanmenu=function(n){var a={meanMenuTarget:jQuery(this),meanMenuContainer:"body",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanRevealHoverColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1,onePage:!1,removeElements:""},n=e.extend(a,n),t=window.innerWidth||document.documentElement.clientWidth;return this.each(function(){function e(){if("center"==c){var e=window.innerWidth||document.documentElement.clientWidth,n=e/2-22+"px";P="left:"+n+";right:auto;",A?jQuery(".meanmenu-reveal").animate({left:n}):jQuery(".meanmenu-reveal").css("left",n)}}function a(){jQuery(W).is(".meanmenu-reveal.meanclose")?W.html(o):W.html(s)}function r(){jQuery(".mean-bar,.mean-push").remove(),jQuery(m).removeClass("mean-container"),jQuery(u).show(),E=!1,M=!1,jQuery(x).removeClass("mean-remove")}function i(){if(d>=t){jQuery(x).addClass("mean-remove"),M=!0,jQuery(m).addClass("mean-container"),jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+R+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var e=jQuery(u).html();jQuery(".mean-nav").html(e),C&&jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function(){jQuery(this).removeAttr("class"),jQuery(this).removeAttr("id")}),jQuery(u).before('<div class="mean-push" />'),jQuery(".mean-push").css("margin-top",y),jQuery(u).hide(),jQuery(".meanmenu-reveal").show(),jQuery(j).html(s),W=jQuery(j),jQuery(".mean-nav ul").hide(),Q?f?(jQuery(".mean-nav ul ul").each(function(){jQuery(this).children().length&&jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+l+'">'+g+"</a>")}),jQuery(".mean-expand").on("click",function(e){e.preventDefault(),jQuery(this).hasClass("mean-clicked")?(jQuery(this).text(g),jQuery(this).prev("ul").slideUp(300,function(){})):(jQuery(this).text(p),jQuery(this).prev("ul").slideDown(300,function(){})),jQuery(this).toggleClass("mean-clicked")})):jQuery(".mean-nav ul ul").show():jQuery(".mean-nav ul ul").hide(),jQuery(".mean-nav ul li").last().addClass("mean-last"),W.removeClass("meanclose"),jQuery(W).click(function(e){e.preventDefault(),0==E?(W.css("text-align","center"),W.css("text-indent","0"),W.css("font-size",l),jQuery(".mean-nav ul:first").slideDown(),E=!0):(jQuery(".mean-nav ul:first").slideUp(),E=!1),W.toggleClass("meanclose"),a(),jQuery(x).addClass("mean-remove")}),w&&jQuery(".mean-nav ul > li > a:first-child").on("click",function(){jQuery(".mean-nav ul:first").slideUp(),E=!1,jQuery(W).toggleClass("meanclose").html(s)})}else r()}var u=n.meanMenuTarget,m=n.meanMenuContainer,o=(n.meanReveal,n.meanMenuClose),l=n.meanMenuCloseSize,s=n.meanMenuOpen,c=n.meanRevealPosition,v=n.meanRevealPositionDistance,h=n.meanRevealColour,d=(n.meanRevealHoverColour,n.meanScreenWidth),y=n.meanNavPush,j=".meanmenu-reveal",Q=n.meanShowChildren,f=n.meanExpandableChildren,g=n.meanExpand,p=n.meanContract,C=n.meanRemoveAttrs,w=n.onePage,x=n.removeElements;if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))var A=!0;(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&jQuery("html").css("overflow-y","scroll");var E=!1,M=!1;if("right"==c&&(P="right:"+v+";left:auto;"),"left"==c)var P="left:"+v+";right:auto;";e();var R="background:"+h+";color:"+h+";"+P,W="";A||jQuery(window).resize(function(){t=window.innerWidth||document.documentElement.clientWidth,t>d,r(),d>=t?(i(),e()):r()}),window.onorientationchange=function(){e(),t=window.innerWidth||document.documentElement.clientWidth,t>=d&&r(),d>=t&&0==M&&i()},i()})}}(jQuery);