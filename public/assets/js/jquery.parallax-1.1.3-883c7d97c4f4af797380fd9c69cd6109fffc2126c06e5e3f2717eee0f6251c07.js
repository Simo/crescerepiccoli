!function(e){var t=e(window),i=t.height();t.resize(function(){i=t.height()}),e.fn.parallax=function(n,o,s){function r(){var s=t.scrollTop();c.each(function(){var t=e(this),r=t.offset().top,u=a(t);s>r+u||r>s+i||c.css("backgroundPosition",n+" "+Math.round((l-s)*o)+"px")})}var a,l,c=e(this);c.each(function(){l=c.offset().top}),a=s?function(e){return e.outerHeight(!0)}:function(e){return e.height()},(arguments.length<1||null===n)&&(n="50%"),(arguments.length<2||null===o)&&(o=.1),(arguments.length<3||null===s)&&(s=!0),t.bind("scroll",r).resize(r),r()}}(jQuery);