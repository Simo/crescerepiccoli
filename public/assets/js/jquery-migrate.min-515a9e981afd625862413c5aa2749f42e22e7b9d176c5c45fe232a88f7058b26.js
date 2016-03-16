/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
void 0===jQuery.migrateMute&&(jQuery.migrateMute=!0),function(e,t,i){function n(i){var n=t.console;o[i]||(o[i]=!0,e.migrateWarnings.push(i),n&&n.warn&&!e.migrateMute&&(n.warn("JQMIGRATE: "+i),e.migrateTrace&&n.trace&&n.trace()))}function s(t,s,o,r){if(Object.defineProperty)try{return Object.defineProperty(t,s,{configurable:!0,enumerable:!0,get:function(){return n(r),o},set:function(e){n(r),o=e}}),i}catch(a){}e._definePropertyBroken=!0,t[s]=o}var o={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===i&&(e.migrateTrace=!0),e.migrateReset=function(){o={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&n("jQuery is not compatible with Quirks Mode");var r=e("<input/>",{size:1}).attr("size")&&e.attrFn,a=e.attr,l=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return i},u=/^(?:input|button)$/i,h=/^[238]$/,d=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,p=/^(?:checked|selected)$/i;s(e,"attrFn",r||{},"jQuery.attrFn is deprecated"),e.attr=function(t,s,o,l){var c=s.toLowerCase(),f=t&&t.nodeType;return l&&(4>a.length&&n("jQuery.fn.attr( props, pass ) is deprecated"),t&&!h.test(f)&&(r?s in r:e.isFunction(e.fn[s])))?e(t)[s](o):("type"===s&&o!==i&&u.test(t.nodeName)&&t.parentNode&&n("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&d.test(c)&&(e.attrHooks[c]={get:function(t,n){var s,o=e.prop(t,n);return o===!0||"boolean"!=typeof o&&(s=t.getAttributeNode(n))&&s.nodeValue!==!1?n.toLowerCase():i},set:function(t,i,n){var s;return i===!1?e.removeAttr(t,n):(s=e.propFix[n]||n,s in t&&(t[s]=!0),t.setAttribute(n,n.toLowerCase())),n}},p.test(c)&&n("jQuery.fn.attr('"+c+"') may use property instead of attribute")),a.call(e,t,s,o))},e.attrHooks.value={get:function(e,t){var i=(e.nodeName||"").toLowerCase();return"button"===i?l.apply(this,arguments):("input"!==i&&"option"!==i&&n("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var s=(e.nodeName||"").toLowerCase();return"button"===s?c.apply(this,arguments):("input"!==s&&"option"!==s&&n("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,i)}};var f,g,m=e.fn.init,v=e.parseJSON,b=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,i,s){var o;return t&&"string"==typeof t&&!e.isPlainObject(i)&&(o=b.exec(e.trim(t)))&&o[0]&&("<"!==t.charAt(0)&&n("$(html) HTML strings must start with '<' character"),o[3]&&n("$(html) HTML text after last tag is ignored"),"#"===o[0].charAt(0)&&(n("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),i&&i.context&&(i=i.context),e.parseHTML)?m.call(this,e.parseHTML(o[2],i,!0),i,s):m.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?v.apply(this,arguments):(n("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(f=e.uaMatch(navigator.userAgent),g={},f.browser&&(g[f.browser]=!0,g.version=f.version),g.chrome?g.webkit=!0:g.webkit&&(g.safari=!0),e.browser=g),s(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,i){return new t.fn.init(e,i)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(n,s){return s&&s instanceof e&&!(s instanceof t)&&(s=t(s)),e.fn.init.call(this,n,s,i)},t.fn.init.prototype=t.fn;var i=t(document);return n("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var y=e.fn.data;e.fn.data=function(t){var s,o,r=this[0];return!r||"events"!==t||1!==arguments.length||(s=e.data(r,t),o=e._data(r,t),s!==i&&s!==o||o===i)?y.apply(this,arguments):(n("Use of jQuery.fn.data('events') is deprecated"),o)};var w=/\/(java|ecma)script/i,_=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),_.apply(this,arguments)},e.clean||(e.clean=function(t,s,o,r){s=s||document,s=!s.nodeType&&s[0]||s,s=s.ownerDocument||s,n("jQuery.clean() is deprecated");var a,l,c,u,h=[];if(e.merge(h,e.buildFragment(t,s).childNodes),o)for(c=function(e){return!e.type||w.test(e.type)?r?r.push(e.parentNode?e.parentNode.removeChild(e):e):o.appendChild(e):i},a=0;null!=(l=h[a]);a++)e.nodeName(l,"script")&&c(l)||(o.appendChild(l),l.getElementsByTagName!==i&&(u=e.grep(e.merge([],l.getElementsByTagName("script")),c),h.splice.apply(h,[a+1,0].concat(u)),a+=u.length));return h});var x=e.event.add,k=e.event.remove,C=e.event.trigger,T=e.fn.toggle,S=e.fn.live,E=e.fn.die,D="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",j=RegExp("\\b(?:"+D+")\\b"),I=/(?:^|\s)hover(\.\S+|)\b/,M=function(t){return"string"!=typeof t||e.event.special.hover?t:(I.test(t)&&n("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(I,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&s(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,i,s,o){e!==document&&j.test(t)&&n("AJAX events should be attached to document: "+t),x.call(this,e,M(t||""),i,s,o)},e.event.remove=function(e,t,i,n,s){k.call(this,e,M(t)||"",i,n,s)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return n("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,i){if(!e.isFunction(t)||!e.isFunction(i))return T.apply(this,arguments);n("jQuery.fn.toggle(handler, handler...) is deprecated");var s=arguments,o=t.guid||e.guid++,r=0,a=function(i){var n=(e._data(this,"lastToggle"+t.guid)||0)%r;return e._data(this,"lastToggle"+t.guid,n+1),i.preventDefault(),s[n].apply(this,arguments)||!1};for(a.guid=o;s.length>r;)s[r++].guid=o;return this.click(a)},e.fn.live=function(t,i,s){return n("jQuery.fn.live() is deprecated"),S?S.apply(this,arguments):(e(this.context).on(t,this.selector,i,s),this)},e.fn.die=function(t,i){return n("jQuery.fn.die() is deprecated"),E?E.apply(this,arguments):(e(this.context).off(t,this.selector||"**",i),this)},e.event.trigger=function(e,t,i,s){return i||j.test(e)||n("Global events are undocumented and deprecated"),C.call(this,e,t,i||document,s)},e.each(D.split("|"),function(t,i){e.event.special[i]={setup:function(){var t=this;return t!==document&&(e.event.add(document,i+"."+e.guid,function(){e.event.trigger(i,null,t,!0)}),e._data(this,i,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,i+"."+e._data(this,i)),!1}}})}(jQuery,window);