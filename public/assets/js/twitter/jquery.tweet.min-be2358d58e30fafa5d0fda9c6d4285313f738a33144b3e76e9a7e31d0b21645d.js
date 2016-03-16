// Copyright (c) 2008-2012 Todd Matthews & Steve Purcell
!function(e){"function"==typeof define&&define.amd?define(["jquery.tweet.min"],e):e(jQuery)}(function(e){e.fn.tweet=function(t){function i(e,t){if("string"==typeof e){var i=e;for(var n in t){var o=t[n];i=i.replace(new RegExp("{"+n+"}","g"),null===o?"":o)}return i}return e(t)}function n(t,i){return function(){var n=[];return this.each(function(){n.push(this.replace(t,i))}),e(n)}}function o(e){return e.replace(/</g,"&lt;").replace(/>/g,"^&gt;")}function r(e,t){return e.replace(f,function(e){for(var i=/^[a-z]+:/i.test(e)?e:"http://"+e,n=e,r=0;r<t.length;++r){var s=t[r];if(s.url==i&&s.expanded_url){i=s.expanded_url,n=s.display_url;break}}return'<a href="'+o(i)+'">'+o(n)+"</a>"})}function s(e){return Date.parse(e.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i,"$1,$2$4$3"))}function a(e){var t=arguments.length>1?arguments[1]:new Date,i=parseInt((t.getTime()-e)/1e3,10),n="";return n=1>i?"just now":60>i?i+" seconds ago":120>i?"about a minute ago":2700>i?"about "+parseInt(i/60,10).toString()+" minutes ago":7200>i?"about an hour ago":86400>i?"about "+parseInt(i/3600,10).toString()+" hours ago":172800>i?"about a day ago":"about "+parseInt(i/86400,10).toString()+" days ago"}function l(e){return e.match(/^(@([A-Za-z0-9-_]+)) .*/i)?h.auto_join_text_reply:e.match(f)?h.auto_join_text_url:e.match(/^((\w+ed)|just) .*/im)?h.auto_join_text_ed:e.match(/^(\w*ing) .*/i)?h.auto_join_text_ing:h.auto_join_text_default}function c(){var t=(h.modpath,null===h.fetch?h.count:h.fetch),i={include_entities:1};if(h.list)return{host:h.twitter_api_url,url:"/1.1/lists/statuses.json",parameters:e.extend({},i,{list_id:h.list_id,slug:h.list,owner_screen_name:h.username,page:h.page,count:t,include_rts:h.retweets?1:0})};if(h.favorites)return{host:h.twitter_api_url,url:"/1.1/favorites/list.json",parameters:e.extend({},i,{list_id:h.list_id,screen_name:h.username,page:h.page,count:t})};if(null===h.query&&1===h.username.length)return{host:h.twitter_api_url,url:"/1.1/statuses/user_timeline.json",parameters:e.extend({},i,{screen_name:h.username,page:h.page,count:t,include_rts:h.retweets?1:0})};var n=h.query||"from:"+h.username.join(" OR from:");return{host:h.twitter_search_url,url:"/1.1/search/tweets.json",parameters:e.extend({},i,{q:n,rpp:t})}}function u(e,t){return t?"user"in e?e.user.profile_image_url_https:u(e,!1).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//,"https://s3.amazonaws.com/twitter_production/"):e.profile_image_url||e.user.profile_image_url}function d(t){var n={};return n.item=t,n.source=t.source,n.name=t.from_user_name||t.user.name,n.screen_name=t.from_user||t.user.screen_name,n.avatar_size=h.avatar_size,n.avatar_url=u(t,"https:"===document.location.protocol),n.retweet="undefined"!=typeof t.retweeted_status,n.tweet_time=s(t.created_at),n.join_text="auto"==h.join_text?l(t.text):h.join_text,n.tweet_id=t.id_str,n.twitter_base="http://"+h.twitter_url+"/",n.user_url=n.twitter_base+n.screen_name,n.tweet_url=n.user_url+"/status/"+n.tweet_id,n.reply_url=n.twitter_base+"intent/tweet?in_reply_to="+n.tweet_id,n.retweet_url=n.twitter_base+"intent/retweet?tweet_id="+n.tweet_id,n.favorite_url=n.twitter_base+"intent/favorite?tweet_id="+n.tweet_id,n.retweeted_screen_name=n.retweet&&t.retweeted_status.user.screen_name,n.tweet_relative_time=a(n.tweet_time),n.entities=t.entities?(t.entities.urls||[]).concat(t.entities.media||[]):[],n.tweet_raw_text=n.retweet?"RT @"+n.retweeted_screen_name+" "+t.retweeted_status.text:t.text,n.tweet_text=e([r(n.tweet_raw_text,n.entities)]).linkUser().linkHash()[0],n.tweet_text_fancy=e([n.tweet_text]).makeHeart()[0],n.user=i('<a class="tweet_user" href="{user_url}">{screen_name}</a>',n),n.join=h.join_text?i(' <span class="tweet_join">{join_text}</span> ',n):" ",n.avatar=n.avatar_size?i('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>',n):"",n.time=i('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>',n),n.text=i('<span class="tweet_text">{tweet_text_fancy}</span>',n),n.reply_action=i('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>',n),n.retweet_action=i('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>',n),n.favorite_action=i('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>',n),n}var h=e.extend({modpath:"/twitter/",username:null,list_id:null,list:null,favorites:!1,query:null,avatar_size:null,count:3,fetch:null,page:1,retweets:!0,intro_text:null,outro_text:null,join_text:null,auto_join_text_default:"i said,",auto_join_text_ed:"i",auto_join_text_ing:"i am",auto_join_text_reply:"i replied to",auto_join_text_url:"i was looking at",loading_text:null,refresh_interval:null,twitter_url:"twitter.com",twitter_api_url:"api.twitter.com",twitter_search_url:"api.twitter.com",template:"{avatar}{time}{join}{text}",comparator:function(e,t){return t.tweet_time-e.tweet_time},filter:function(e){return!0}},t),f=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))/gi;return e.extend({tweet:{t:i}}),e.fn.extend({linkUser:n(/(^|[\W])@(\w+)/gi,'$1<span class="at">@</span><a href="http://'+h.twitter_url+'/$2">$2</a>'),linkHash:n(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,' <a href="http://'+h.twitter_search_url+"/search?q=&tag=$1&lang=all"+(h.username&&1==h.username.length&&!h.list?"&from="+h.username.join("%2BOR%2B"):"")+'" class="tweet_hashtag">#$1</a>'),makeHeart:n(/(&lt;)+[3]/gi,"<tt class='heart'>&#x2665;</tt>")}),this.each(function(t,n){var o=e('<ul class="tweet_list">'),r='<p class="tweet_intro">'+h.intro_text+"</p>",s='<p class="tweet_outro">'+h.outro_text+"</p>",a=e('<p class="loading">'+h.loading_text+"</p>");h.username&&"string"==typeof h.username&&(h.username=[h.username]),e(n).unbind("tweet:load").bind("tweet:load",function(){h.loading_text&&e(n).empty().append(a),e.ajax({dataType:"json",type:"post",async:!1,url:h.modpath||"/twitter/",data:{request:c()},success:function(t,a){t.message&&console.log(t.message);var l=t.response;e(n).empty().append(o),h.intro_text&&o.before(r),o.empty(),void 0!==l.statuses?resp=l.statuses:void 0!==l.results?resp=l.results:resp=l;var c=e.map(resp,d);c=e.grep(c,h.filter).sort(h.comparator).slice(0,h.count),o.append(e.map(c,function(e){return"<li>"+i(h.template,e)+"</li>"}).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd"),h.outro_text&&o.after(s),e(n).trigger("loaded").trigger(c?"empty":"full"),h.refresh_interval&&window.setTimeout(function(){e(n).trigger("tweet:load")},1e3*h.refresh_interval)}})}).trigger("tweet:load")})}});