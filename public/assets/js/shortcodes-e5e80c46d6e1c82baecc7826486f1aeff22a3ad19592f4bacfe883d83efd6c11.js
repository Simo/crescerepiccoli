function animateSkillBars(){"use strict";var e=jQuery("html").hasClass("csstransforms")?":in-viewport":"";jQuery(".dt-sc-progress"+e).each(function(){var e=jQuery(this),t=e.find(".dt-sc-bar").attr("data-value");e.find(".dt-sc-bar").css("background-color",e.find(".dt-sc-bar").attr("data-bg-color")),e.hasClass("animated")||(e.addClass("animated"),e.find(".dt-sc-bar").animate({width:t+"%"},600,function(){e.find(".dt-sc-bar-text").fadeIn(400)}))})}jQuery.noConflict(),jQuery(document).ready(function(e){"use strict";animateSkillBars(),e(window).scroll(function(){animateSkillBars()}),e("ul.tabs").length>0&&e("ul.tabs").tabs("> .dt-sc-tabs_content"),e("ul.dt-sc-tabs-frame").length>0&&e("ul.dt-sc-tabs-frame").tabs("> .dt-sc-tabs-frame-content"),e("ul.tabs").length>0&&e("ul.tabs").tabs("> .dt-sc-tabs_content"),e("ul.dt-sc-tabs").length>0&&e("ul.dt-sc-tabs").tabs("> .dt-sc-tabs-content"),e(".dt-sc-tabs-vertical-frame").length>0&&(e(".dt-sc-tabs-vertical-frame").tabs("> .dt-sc-tabs-vertical-frame-content"),e(".dt-sc-tabs-vertical-frame").each(function(){e(this).find("li:first").addClass("first").addClass("current"),e(this).find("li:last").addClass("last")}),e(".dt-sc-tabs-vertical-frame li").click(function(){e(this).parent().children().removeClass("current"),e(this).addClass("current")})),e(".tabs-framed").length>0&&(e(".custom-tabs-frame").tabs("> .custom-tabs-content").parent(),e(".custom-tabs-frame").each(function(){e(this).find("li:first").addClass("first").addClass("current"),e(this).find("li:last").addClass("last")}),e(".custom-tabs-frame li").click(function(){e(this).parent().children().removeClass("current"),e(this).addClass("current")})),jQuery(".dt-sc-toggle").toggle(function(){jQuery(this).addClass("active")},function(){jQuery(this).removeClass("active")}),jQuery(".dt-sc-toggle").click(function(){jQuery(this).next(".dt-sc-toggle-content").slideToggle()}),jQuery(".dt-sc-toggle-frame-set").each(function(){var e=jQuery(this),t=e.find(".dt-sc-toggle-accordion");t.click(function(){return jQuery(this).next().is(":hidden")&&(e.find(".dt-sc-toggle-accordion").removeClass("active").next().slideUp(),jQuery(this).toggleClass("active").next().slideDown()),!1}),e.find(".dt-sc-toggle-accordion:first").addClass("active"),e.find(".dt-sc-toggle-accordion:first").next().slideDown()}),e(".dt-sc-tooltip-bottom").length&&e(".dt-sc-tooltip-bottom").each(function(){e(this).tipTip({maxWidth:"auto"})}),e(".dt-sc-tooltip-top").length&&e(".dt-sc-tooltip-top").each(function(){e(this).tipTip({maxWidth:"auto",defaultPosition:"top"})}),e(".dt-sc-tooltip-left").length&&e(".dt-sc-tooltip-left").each(function(){e(this).tipTip({maxWidth:"auto",defaultPosition:"left"})}),e(".dt-sc-tooltip-right").length&&e(".dt-sc-tooltip-right").each(function(){e(this).tipTip({maxWidth:"auto",defaultPosition:"right"})}),e(window).load(function(){e(".dt-sc-sponsor-carousel-wrapper").length&&e(".dt-sc-sponsor-carousel").carouFredSel({responsive:!0,auto:!1,width:"100%",prev:".sponsor-prev",next:".sponsor-next",height:"variable",scroll:1,items:{width:230,height:"variable",visible:{min:1,max:4}}}),e(".dt-sc-testimonial-carousel-wrapper").length&&e(".dt-sc-testimonial-carousel").carouFredSel({responsive:!0,auto:!1,width:"100%",prev:".testimonial-prev",next:".testimonial-next",scroll:1,items:{width:572,height:"auto",visible:{min:1,max:1}}})})});