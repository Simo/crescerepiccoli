/*
 * Viewport - jQuery selectors for finding elements in viewport
 *
 * Copyright (c) 2008-2009 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *  http://www.appelsiini.net/projects/viewport
 *
 */
!function(e){e.belowthefold=function(t,i){var n=e(window).height()+e(window).scrollTop();return n<=e(t).offset().top-i.threshold},e.abovethetop=function(t,i){var n=e(window).scrollTop();return n>=e(t).offset().top+e(t).height()-i.threshold},e.rightofscreen=function(t,i){var n=e(window).width()+e(window).scrollLeft();return n<=e(t).offset().left-i.threshold},e.leftofscreen=function(t,i){var n=e(window).scrollLeft();return n>=e(t).offset().left+e(t).width()-i.threshold},e.inviewport=function(t,i){return!(e.rightofscreen(t,i)||e.leftofscreen(t,i)||e.belowthefold(t,i)||e.abovethetop(t,i))},e.extend(e.expr[":"],{"below-the-fold":function(t,i,n){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t,i,n){return e.abovethetop(t,{threshold:0})},"left-of-screen":function(t,i,n){return e.leftofscreen(t,{threshold:0})},"right-of-screen":function(t,i,n){return e.rightofscreen(t,{threshold:0})},"in-viewport":function(t,i,n){return e.inviewport(t,{threshold:0})}})}(jQuery);