!function(e){function t(){781>o.width()?(n.attr("aria-expanded","false"),r.attr("aria-expanded","false"),n.attr("aria-controls","primary-menu")):(n.removeAttr("aria-expanded"),r.removeAttr("aria-expanded"),n.removeAttr("aria-controls"))}var a,n,r,i=e("body"),o=e(window);a=e("#primary-navigation"),n=a.find(".menu-toggle"),r=a.find(".nav-menu"),function(){return a&&n?r&&r.children().length?void n.on("click.twentyfourteen",function(){a.toggleClass("toggled-on"),a.hasClass("toggled-on")?(e(this).attr("aria-expanded","true"),r.attr("aria-expanded","true")):(e(this).attr("aria-expanded","false"),r.attr("aria-expanded","false"))}):void n.hide():void 0}(),o.on("hashchange.twentyfourteen",function(){var e,t=location.hash.substring(1);t&&(e=document.getElementById(t),e&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus(),window.scrollBy(0,-80)))}),e(function(){if(e(".search-toggle").on("click.twentyfourteen",function(t){var a=e(this),n=e("#search-container"),r=a.find("a");a.toggleClass("active"),n.toggleClass("hide"),a.hasClass("active")?r.attr("aria-expanded","true"):r.attr("aria-expanded","false"),(a.is(".active")||e(".search-toggle .screen-reader-text")[0]===t.target)&&n.find(".search-field").focus()}),o.width()>781){var t,a,n=e("#masthead").height();n>48&&i.removeClass("masthead-fixed"),i.is(".header-image")&&(t=i.is(".admin-bar")?e("#wpadminbar").height():0,a=e("#masthead").offset().top-t,o.on("scroll.twentyfourteen",function(){o.scrollTop()>a&&49>n?i.addClass("masthead-fixed"):i.removeClass("masthead-fixed")}))}e(".primary-navigation, .secondary-navigation").find("a").on("focus.twentyfourteen blur.twentyfourteen",function(){e(this).parents().toggleClass("focus")})}),o.on("load.twentyfourteen",t).on("resize.twentyfourteen",function(){t()}),o.load(function(){e.isFunction(e.fn.masonry)&&e("#footer-sidebar").masonry({itemSelector:".widget",columnWidth:function(e){return e/4},gutterWidth:0,isResizable:!0,isRTL:e("body").is(".rtl")}),i.is(".slider")&&e(".featured-content").featuredslider({selector:".featured-content-inner > article",controlsContainer:".featured-content"})})}(jQuery);
