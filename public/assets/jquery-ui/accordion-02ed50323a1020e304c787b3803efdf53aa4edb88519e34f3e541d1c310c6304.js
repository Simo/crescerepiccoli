/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(t,n){var o,r,s,a=t.nodeName.toLowerCase();return"area"===a?(o=t.parentNode,r=o.name,t.href&&r&&"map"===o.nodeName.toLowerCase()?(s=e("img[usemap='#"+r+"']")[0],!!s&&i(s)):!1):(/^(input|select|textarea|button|object)$/.test(a)?!t.disabled:"a"===a?t.href||n:n)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),n="absolute"===i,o=t?/(auto|scroll|hidden)/:/(auto|scroll)/,r=this.parents().filter(function(){var t=e(this);return n&&"static"===t.css("position")?!1:o.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&r.length?r:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var n=e.attr(i,"tabindex"),o=isNaN(n);return(o||n>=0)&&t(i,!o)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function n(t,i,n,r){return e.each(o,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),r&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var o="Width"===i?["Left","Right"]:["Top","Bottom"],r=i.toLowerCase(),s={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?s["inner"+i].call(this):this.each(function(){e(this).css(r,n(this,t)+"px")})},e.fn["outer"+i]=function(t,o){return"number"!=typeof t?s["outer"+i].call(this,t):this.each(function(){e(this).css(r,n(this,t,!0,o)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,n,o=e(this[0]);o.length&&o[0]!==document;){if(i=o.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(n=parseInt(o.css("zIndex"),10),!isNaN(n)&&0!==n))return n;o=o.parent()}return 0}}),e.ui.plugin={add:function(t,i,n){var o,r=e.ui[t].prototype;for(o in n)r.plugins[o]=r.plugins[o]||[],r.plugins[o].push([i,n[o]])},call:function(e,t,i,n){var o,r=e.plugins[t];if(r&&(n||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(o=0;o<r.length;o++)e.options[r[o][0]]&&r[o][1].apply(e.element,i)}}}),/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){var t=0,i=Array.prototype.slice;return e.cleanData=function(t){return function(i){var n,o,r;for(r=0;null!=(o=i[r]);r++)try{n=e._data(o,"events"),n&&n.remove&&e(o).triggerHandler("remove")}catch(s){}t(i)}}(e.cleanData),e.widget=function(t,i,n){var o,r,s,a,l={},c=t.split(".")[0];return t=t.split(".")[1],o=c+"-"+t,n||(n=i,i=e.Widget),e.expr[":"][o.toLowerCase()]=function(t){return!!e.data(t,o)},e[c]=e[c]||{},r=e[c][t],s=e[c][t]=function(e,t){return this._createWidget?void(arguments.length&&this._createWidget(e,t)):new s(e,t)},e.extend(s,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),a=new i,a.options=e.widget.extend({},a.options),e.each(n,function(t,n){return e.isFunction(n)?void(l[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},o=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,r=this._superApply;return this._super=e,this._superApply=o,t=n.apply(this,arguments),this._super=i,this._superApply=r,t}}()):void(l[t]=n)}),s.prototype=e.widget.extend(a,{widgetEventPrefix:r?a.widgetEventPrefix||t:t},l,{constructor:s,namespace:c,widgetName:t,widgetFullName:o}),r?(e.each(r._childConstructors,function(t,i){var n=i.prototype;e.widget(n.namespace+"."+n.widgetName,s,i._proto)}),delete r._childConstructors):i._childConstructors.push(s),e.widget.bridge(t,s),s},e.widget.extend=function(t){for(var n,o,r=i.call(arguments,1),s=0,a=r.length;a>s;s++)for(n in r[s])o=r[s][n],r[s].hasOwnProperty(n)&&void 0!==o&&(e.isPlainObject(o)?t[n]=e.isPlainObject(t[n])?e.widget.extend({},t[n],o):e.widget.extend({},o):t[n]=o);return t},e.widget.bridge=function(t,n){var o=n.prototype.widgetFullName||t;e.fn[t]=function(r){var s="string"==typeof r,a=i.call(arguments,1),l=this;return s?this.each(function(){var i,n=e.data(this,o);return"instance"===r?(l=n,!1):n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(i=n[r].apply(n,a),i!==n&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+r+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+r+"'")}):(a.length&&(r=e.widget.extend.apply(null,[r].concat(a))),this.each(function(){var t=e.data(this,o);t?(t.option(r||{}),t._init&&t._init()):e.data(this,o,new n(r,this))})),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(i,n){n=e(n||this.defaultElement||this)[0],this.element=e(n),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),n!==this&&(e.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===n&&this.destroy()}}),this.document=e(n.style?n.ownerDocument:n.document||n),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var n,o,r,s=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(s={},n=t.split("."),t=n.shift(),n.length){for(o=s[t]=e.widget.extend({},this.options[t]),r=0;r<n.length-1;r++)o[n[r]]=o[n[r]]||{},o=o[n[r]];if(t=n.pop(),1===arguments.length)return void 0===o[t]?null:o[t];o[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];s[t]=i}return this._setOptions(s),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,n){var o,r=this;"boolean"!=typeof t&&(n=i,i=t,t=!1),n?(i=o=e(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,o=this.widget()),e.each(n,function(n,s){function a(){return t||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof s?r[s]:s).apply(r,arguments):void 0}"string"!=typeof s&&(a.guid=s.guid=s.guid||a.guid||e.guid++);var l=n.match(/^([\w:-]*)\s*(.*)$/),c=l[1]+r.eventNamespace,u=l[2];u?o.delegate(u,c,a):i.bind(c,a)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?n[e]:e).apply(n,arguments)}var n=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,n){var o,r,s=this.options[t];if(n=n||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],r=i.originalEvent)for(o in r)o in i||(i[o]=r[o]);return this.element.trigger(i,n),!(e.isFunction(s)&&s.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(n,o,r){"string"==typeof o&&(o={effect:o});var s,a=o?o===!0||"number"==typeof o?i:o.effect||i:t;o=o||{},"number"==typeof o&&(o={duration:o}),s=!e.isEmptyObject(o),o.complete=r,o.delay&&n.delay(o.delay),s&&e.effects&&e.effects.effect[a]?n[t](o):a!==t&&n[a]?n[a](o.duration,o.easing,r):n.queue(function(i){e(this)[t](),r&&r.call(n[0]),i()})}}),e.widget}),/*!
 * jQuery UI Accordion 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./widget"],e):e(jQuery)}(function(e){return e.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),t.collapsible||t.active!==!1&&null!=t.active||(t.active=0),this._processPanels(),t.active<0&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),e=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?void this._activate(t):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),void("disabled"===e&&(this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t))))},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,n=this.headers.length,o=this.headers.index(t.target),r=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:r=this.headers[(o+1)%n];break;case i.LEFT:case i.UP:r=this.headers[(o-1+n)%n];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:r=this.headers[0];break;case i.END:r=this.headers[n-1]}r&&(e(t.target).attr("tabIndex",-1),e(r).attr("tabIndex",0),r.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels(),t.active===!1&&t.collapsible===!0||!this.headers.length?(t.active=!1,this.active=e()):t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var e=this.headers,t=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),t&&(this._off(e.not(this.headers)),this._off(t.not(this.panels)))},_refresh:function(){var t,i=this.options,n=i.heightStyle,o=this.element.parent();this.active=this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var t=e(this),i=t.uniqueId().attr("id"),n=t.next(),o=n.uniqueId().attr("id");t.attr("aria-controls",o),n.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===n?(t=o.height(),this.element.siblings(":visible").each(function(){var i=e(this),n=i.css("position");"absolute"!==n&&"fixed"!==n&&(t-=i.outerHeight(!0))}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===n&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var i=this.options,n=this.active,o=e(t.currentTarget),r=o[0]===n[0],s=r&&i.collapsible,a=s?e():o.next(),l=n.next(),c={oldHeader:n,oldPanel:l,newHeader:s?e():o,newPanel:a};t.preventDefault(),r&&!i.collapsible||this._trigger("beforeActivate",t,c)===!1||(i.active=s?!1:this.headers.index(o),this.active=r?e():o,this._toggle(c),n.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),r||(o.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&o.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),o.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,n=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=n,this.options.animate?this._animate(i,n,t):(n.hide(),i.show(),this._toggleComplete(t)),n.attr({"aria-hidden":"true"}),n.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&n.length?n.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(e(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(e,t,i){var n,o,r,s=this,a=0,l=e.css("box-sizing"),c=e.length&&(!t.length||e.index()<t.index()),u=this.options.animate||{},d=c&&u.down||u,h=function(){s._toggleComplete(i)};return"number"==typeof d&&(r=d),"string"==typeof d&&(o=d),o=o||d.easing||u.easing,r=r||d.duration||u.duration,t.length?e.length?(n=e.show().outerHeight(),t.animate(this.hideProps,{duration:r,easing:o,step:function(e,t){t.now=Math.round(e)}}),void e.hide().animate(this.showProps,{duration:r,easing:o,complete:h,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?"content-box"===l&&(a+=i.now):"content"!==s.options.heightStyle&&(i.now=Math.round(n-t.outerHeight()-a),a=0)}})):t.animate(this.hideProps,r,o,h):e.animate(this.showProps,r,o,h)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}})});