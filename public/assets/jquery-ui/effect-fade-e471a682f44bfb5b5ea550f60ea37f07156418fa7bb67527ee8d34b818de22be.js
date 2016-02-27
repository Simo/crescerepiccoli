/*!
 * jQuery UI Effects 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){var t="ui-effects-",i=e;/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
return e.effects={effect:{}},function(e,t){function i(e,t,i){var n=d[t.type]||{};return null==e?i||!t.def?null:t.def:(e=n.floor?~~e:parseFloat(e),isNaN(e)?t.def:n.mod?(e+n.mod)%n.mod:0>e?0:n.max<e?n.max:e)}function n(t){var i=c(),n=i._rgba=[];return t=t.toLowerCase(),p(l,function(e,o){var s,r=o.re.exec(t),a=r&&o.parse(r),l=o.space||"rgba";return a?(s=i[l](a),i[u[l].cache]=s[u[l].cache],n=i._rgba=s._rgba,!1):void 0}),n.length?("0,0,0,0"===n.join()&&e.extend(n,s.transparent),i):s[t]}function o(e,t,i){return i=(i+1)%1,1>6*i?e+(t-e)*i*6:1>2*i?t:2>3*i?e+(t-e)*(2/3-i)*6:e}var s,r="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",a=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],c=e.Color=function(t,i,n,o){return new e.Color.fn.parse(t,i,n,o)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},h=c.support={},f=e("<p>")[0],p=e.each;f.style.cssText="background-color:rgba(1,1,1,.5)",h.rgba=f.style.backgroundColor.indexOf("rgba")>-1,p(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),c.fn=e.extend(c.prototype,{parse:function(o,r,a,l){if(o===t)return this._rgba=[null,null,null,null],this;(o.jquery||o.nodeType)&&(o=e(o).css(r),r=t);var d=this,h=e.type(o),f=this._rgba=[];return r!==t&&(o=[o,r,a,l],h="array"),"string"===h?this.parse(n(o)||s._default):"array"===h?(p(u.rgba.props,function(e,t){f[t.idx]=i(o[t.idx],t)}),this):"object"===h?(o instanceof c?p(u,function(e,t){o[t.cache]&&(d[t.cache]=o[t.cache].slice())}):p(u,function(t,n){var s=n.cache;p(n.props,function(e,t){if(!d[s]&&n.to){if("alpha"===e||null==o[e])return;d[s]=n.to(d._rgba)}d[s][t.idx]=i(o[e],t,!0)}),d[s]&&e.inArray(null,d[s].slice(0,3))<0&&(d[s][3]=1,n.from&&(d._rgba=n.from(d[s])))}),this):void 0},is:function(e){var t=c(e),i=!0,n=this;return p(u,function(e,o){var s,r=t[o.cache];return r&&(s=n[o.cache]||o.to&&o.to(n._rgba)||[],p(o.props,function(e,t){return null!=r[t.idx]?i=r[t.idx]===s[t.idx]:void 0})),i}),i},_space:function(){var e=[],t=this;return p(u,function(i,n){t[n.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var n=c(e),o=n._space(),s=u[o],r=0===this.alpha()?c("transparent"):this,a=r[s.cache]||s.to(r._rgba),l=a.slice();return n=n[s.cache],p(s.props,function(e,o){var s=o.idx,r=a[s],c=n[s],u=d[o.type]||{};null!==c&&(null===r?l[s]=c:(u.mod&&(c-r>u.mod/2?r+=u.mod:r-c>u.mod/2&&(r-=u.mod)),l[s]=i((c-r)*t+r,o)))}),this[o](l)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),n=i.pop(),o=c(t)._rgba;return c(e.map(i,function(e,t){return(1-n)*o[t]+n*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),n=i.pop();return t&&i.push(~~(255*n)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),c.fn.parse.prototype=c.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,n=e[0]/255,o=e[1]/255,s=e[2]/255,r=e[3],a=Math.max(n,o,s),l=Math.min(n,o,s),c=a-l,u=a+l,d=.5*u;return t=l===a?0:n===a?60*(o-s)/c+360:o===a?60*(s-n)/c+120:60*(n-o)/c+240,i=0===c?0:.5>=d?c/u:c/(2-u),[Math.round(t)%360,i,d,null==r?1:r]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],n=e[2],s=e[3],r=.5>=n?n*(1+i):n+i-n*i,a=2*n-r;return[Math.round(255*o(a,r,t+1/3)),Math.round(255*o(a,r,t)),Math.round(255*o(a,r,t-1/3)),s]},p(u,function(n,o){var s=o.props,r=o.cache,l=o.to,u=o.from;c.fn[n]=function(n){if(l&&!this[r]&&(this[r]=l(this._rgba)),n===t)return this[r].slice();var o,a=e.type(n),d="array"===a||"object"===a?n:arguments,h=this[r].slice();return p(s,function(e,t){var n=d["object"===a?e:t.idx];null==n&&(n=h[t.idx]),h[t.idx]=i(n,t)}),u?(o=c(u(h)),o[r]=h,o):c(h)},p(s,function(t,i){c.fn[t]||(c.fn[t]=function(o){var s,r=e.type(o),l="alpha"===t?this._hsla?"hsla":"rgba":n,c=this[l](),u=c[i.idx];return"undefined"===r?u:("function"===r&&(o=o.call(this,u),r=e.type(o)),null==o&&i.empty?this:("string"===r&&(s=a.exec(o),s&&(o=u+parseFloat(s[2])*("+"===s[1]?1:-1))),c[i.idx]=o,this[l](c)))})})}),c.hook=function(t){var i=t.split(" ");p(i,function(t,i){e.cssHooks[i]={set:function(t,o){var s,r,a="";if("transparent"!==o&&("string"!==e.type(o)||(s=n(o)))){if(o=c(s||o),!h.rgba&&1!==o._rgba[3]){for(r="backgroundColor"===i?t.parentNode:t;(""===a||"transparent"===a)&&r&&r.style;)try{a=e.css(r,"backgroundColor"),r=r.parentNode}catch(l){}o=o.blend(a&&"transparent"!==a?a:"_default")}o=o.toRgbaString()}try{t.style[i]=o}catch(l){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=c(t.elem,i),t.end=c(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},c.hook(r),e.cssHooks.borderColor={expand:function(e){var t={};return p(["Top","Right","Bottom","Left"],function(i,n){t["border"+n+"Color"]=e}),t}},s=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(i),function(){function t(t){var i,n,o=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,s={};if(o&&o.length&&o[0]&&o[o[0]])for(n=o.length;n--;)i=o[n],"string"==typeof o[i]&&(s[e.camelCase(i)]=o[i]);else for(i in o)"string"==typeof o[i]&&(s[i]=o[i]);return s}function n(t,i){var n,o,r={};for(n in i)o=i[n],t[n]!==o&&(s[n]||(e.fx.step[n]||!isNaN(parseFloat(o)))&&(r[n]=o));return r}var o=["add","remove","toggle"],s={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(i.style(e.elem,n,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(i,s,r,a){var l=e.speed(s,r,a);return this.queue(function(){var s,r=e(this),a=r.attr("class")||"",c=l.children?r.find("*").addBack():r;c=c.map(function(){var i=e(this);return{el:i,start:t(this)}}),s=function(){e.each(o,function(e,t){i[t]&&r[t+"Class"](i[t])})},s(),c=c.map(function(){return this.end=t(this.el[0]),this.diff=n(this.start,this.end),this}),r.attr("class",a),c=c.map(function(){var t=this,i=e.Deferred(),n=e.extend({},l,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,n),i.promise()}),e.when.apply(e,c.get()).done(function(){s(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),l.complete.call(r[0])})})},e.fn.extend({addClass:function(t){return function(i,n,o,s){return n?e.effects.animateClass.call(this,{add:i},n,o,s):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,n,o,s){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},n,o,s):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,n,o,s,r){return"boolean"==typeof n||void 0===n?o?e.effects.animateClass.call(this,n?{add:i}:{remove:i},o,s,r):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},n,o,s)}}(e.fn.toggleClass),switchClass:function(t,i,n,o,s){return e.effects.animateClass.call(this,{add:i,remove:t},n,o,s)}})}(),function(){function i(t,i,n,o){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(o=i,n=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(o=n,n=i,i={}),e.isFunction(n)&&(o=n,n=null),i&&e.extend(t,i),n=n||i.duration,t.duration=e.fx.off?0:"number"==typeof n?n:n in e.fx.speeds?e.fx.speeds[n]:e.fx.speeds._default,t.complete=o||i.complete,t}function n(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.4",save:function(e,i){for(var n=0;n<i.length;n++)null!==i[n]&&e.data(t+i[n],e[0].style[i[n]])},restore:function(e,i){var n,o;for(o=0;o<i.length;o++)null!==i[o]&&(n=e.data(t+i[o]),void 0===n&&(n=""),e.css(i[o],n))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,n;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=e[1]/t.width}return{x:n,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},n=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),o={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(r){s=document.body}return t.wrap(n),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),n=t.parent(),"static"===t.css("position")?(n.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,n){i[n]=t.css(n),isNaN(parseInt(i[n],10))&&(i[n]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(o),n.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,n,o){return o=o||{},e.each(i,function(e,i){var s=t.cssUnit(i);s[0]>0&&(o[i]=s[0]*n+s[1])}),o}}),e.fn.extend({effect:function(){function t(t){function i(){e.isFunction(s)&&s.call(o[0]),e.isFunction(t)&&t()}var o=e(this),s=n.complete,a=n.mode;(o.is(":hidden")?"hide"===a:"show"===a)?(o[a](),i()):r.call(o[0],n,i)}var n=i.apply(this,arguments),o=n.mode,s=n.queue,r=e.effects.effect[n.effect];return e.fx.off||!r?o?this[o](n.duration,n.complete):this.each(function(){n.complete&&n.complete.call(this)}):s===!1?this.each(t):this.queue(s||"fx",t)},show:function(e){return function(t){if(n(t))return e.apply(this,arguments);var o=i.apply(this,arguments);return o.mode="show",this.effect.call(this,o)}}(e.fn.show),hide:function(e){return function(t){if(n(t))return e.apply(this,arguments);var o=i.apply(this,arguments);return o.mode="hide",this.effect.call(this,o)}}(e.fn.hide),toggle:function(e){return function(t){if(n(t)||"boolean"==typeof t)return e.apply(this,arguments);var o=i.apply(this,arguments);return o.mode="toggle",this.effect.call(this,o)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),n=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(n=[parseFloat(i),t])}),n}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;e<((t=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}(),e.effects}),/*!
 * jQuery UI Effects Fade 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fade-effect/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(e){return e.effects.effect.fade=function(t,i){var n=e(this),o=e.effects.setMode(n,t.mode||"toggle");n.animate({opacity:o},{queue:!1,duration:t.duration,easing:t.easing,complete:i})}});