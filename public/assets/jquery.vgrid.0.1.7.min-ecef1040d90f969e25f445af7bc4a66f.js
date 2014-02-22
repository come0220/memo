/**
 * jQuery VGrid v0.1.7 - variable grid layout plugin
 *
 * Terms of Use - jQuery VGrid
 * under the MIT (http://www.opensource.org/licenses/mit-license.php) License.
 *
 * Copyright 2009-2011 xlune.com All rights reserved.
 * (http://blog.xlune.com/2009/09/jqueryvgrid.html)
 */
!function(t){function a(a){var n,o,r,g=a.data("_vgchild"),p=[[0,a.width(),0]],c=0;g.each(function(){n=t(this);var a=n.width(),d=n.height();a+=Number(n.css("margin-left").replace("px",""))+Number(n.css("padding-left").replace("px",""))+Number(n.get(0).style.borderLeftWidth.replace("px",""))+Number(n.css("margin-right").replace("px",""))+Number(n.css("padding-right").replace("px",""))+Number(n.get(0).style.borderRightWidth.replace("px","")),d+=Number(n.css("margin-top").replace("px",""))+Number(n.css("padding-top").replace("px",""))+Number(n.get(0).style.borderTopWidth.replace("px",""))+Number(n.css("margin-bottom").replace("px",""))+Number(n.css("padding-bottom").replace("px",""))+Number(n.get(0).style.borderBottomWidth.replace("px","")),o=[a,d];t:{for(var a=o[0],d=p.concat().sort(e),g=d[d.length-1][2],s=0,v=d.length;v>s&&!(d[s][2]>=g);s++)if(d[s][1]-d[s][0]>=a){r=[d[s][0],d[s][2]];break t}r=[0,g]}for(d=r,a=p.concat().sort(e),d=[d[0],d[0]+o[0],d[1]+o[1]],g=0,s=a.length;s>g;g++)if(d[0]<=a[g][0]&&a[g][1]<=d[1])delete a[g];else{var v=a,h=g,u=a[g],l=d;(u[0]>=l[0]&&u[0]<l[1]||u[1]>=l[0]&&u[1]<l[1])&&(u[0]>=l[0]&&u[0]<l[1]?u[0]=l[1]:u[1]=l[0]),v[h]=u}for(a=a.concat([d]).sort(i),d=[],g=0,s=a.length;s>g;g++)a[g]&&(d.length>0&&d[d.length-1][1]==a[g][0]&&d[d.length-1][2]==a[g][2]?d[d.length-1][1]=a[g][1]:d.push(a[g]));p=d,c=Math.max(c,r[1]+o[1]),n.data("_vgleft",r[0]),n.data("_vgtop",r[1])}),a.data("_vgwrapheight",c),d(a)}function e(t,a){return t&&a?t[2]==a[2]&&t[0]>a[0]||t[2]>a[2]?1:-1:0}function i(t,a){return t&&a?t[0]>a[0]?1:-1:0}function d(a){var e=a.data("_vgchild").length*(a.data("_vgopt").delay||0)+a.data("_vgopt").time||500;a.stop(),a.height()<a.data("_vgwrapheight")?t.browser.msie?a.height(a.data("_vgwrapheight")):a.animate({height:a.data("_vgwrapheight")+"px"},a.data("_vgopt").time||500,"easeOutQuart"):(clearTimeout(a.data("_vgwraptimeout")),a.data("_vgwraptimeout",setTimeout(function(){t.browser.msie?a.height(a.data("_vgwrapheight")):a.animate({height:a.data("_vgwrapheight")+"px"},a.data("_vgopt").time||500,"easeOutQuart")},e)))}function n(a){var e;a.each(function(){e=t(this),e.css("left",~~e.data("_vgleft")+"px"),e.css("top",~~e.data("_vgtop")+"px")})}function o(a,e,i,d){var n,o,r,g=t(a).parent(),p=!1,c=a.length;for(n=0;c>n;n++)o=t(a[n]),r=o.position(),r.left!=o.data("_vgleft")&&r.top!=o.data("_vgtop")&&(p=!0);p&&("function"==typeof g.data("_vgopt").onStart&&g.data("_vgopt").onStart(),a.each(function(n){var o=t(this),r={duration:i,easing:e};a.size()-1==n&&(r.complete=g.data("_vgopt").onFinish||null),clearTimeout(o.data("_vgtimeout")),o.data("_vgtimeout",setTimeout(function(){o.animate({left:o.data("_vgleft")+"px",top:o.data("_vgtop")+"px"},r)},n*d))}))}function r(t){clearTimeout(t.data("_vgtimeout")),a(t),t.data("_vgtimeout",setTimeout(function(){o(t.data("_vgchild"),t.data("_vgopt").easeing||"linear",t.data("_vgopt").time||500,t.data("_vgopt").delay||0)},500))}function g(a,e){var i=t("<span />").text(" ").attr("id","_vgridspan").hide().appendTo("body");i.data("size",i.css("font-size")),i.data("timer",setInterval(function(){i.css("font-size")!=i.data("size")&&(i.data("size",i.css("font-size")),e(a))},1e3))}function p(a,e){a.data("vgrid-image-event-added")||(a.data("vgrid-image-event-added",1),a.bind("vgrid-added",function(){a.find("img").each(function(){var i=t(this);i.data("vgrid-image-handler")||(i.data("vgrid-image-handler",1),i.bind("load",function(){e(a)}))})})),a.trigger("vgrid-added");var i=a.append,d=a.prepend;a.append=function(){i.apply(a,arguments),a.trigger("vgrid-added")},a.prepend=function(){d.apply(a,arguments),a.trigger("vgrid-added")}}t.fn.extend({vgrid:function(e){var i=t(this),d=e||{};return i.each(function(){var e=t(this);if(e.data("_vgopt",d),e.data("_vgchild",e.find("> *")),e.data("_vgdefchild",e.data("_vgchild")),e.css({position:"relative",width:"auto"}),e.data("_vgchild").css("position","absolute"),a(e),n(e.data("_vgchild")),e.data("_vgopt").fadeIn){var i="object"==typeof e.data("_vgopt").fadeIn?e.data("_vgopt").fadeIn:{time:e.data("_vgopt").fadeIn};e.data("_vgchild").each(function(a){var e=t(this);e.css("display","none"),setTimeout(function(){e.fadeIn(i.time||250)},a*(i.delay||0))})}t(window).resize(function(){r(e)}),d.useLoadImageEvent&&p(e,r),d.useFontSizeListener&&g(e,r)}),i},vgrefresh:function(e,i,d,n){var g=t(this);return g.each(function(){var g=t(this),c=g.data("_vgopt")||{};g.data("_vgchild")&&(g.data("_vgchild",g.find("> *")),g.data("_vgchild").css("position","absolute"),a(g),i="number"==typeof i?i:g.data("_vgopt").time||500,d="number"==typeof d?d:g.data("_vgopt").delay||0,o(g.data("_vgchild"),e||g.data("_vgopt").easeing||"linear",i,d),"function"==typeof n&&setTimeout(n,g.data("_vgchild").length*d+i)),c.useLoadImageEvent&&p(g,r)}),g},vgsort:function(e,i,d,n){var r=t(this);return r.each(function(){var r=t(this);r.data("_vgchild")&&(r.data("_vgchild",r.data("_vgchild").sort(e)),r.data("_vgchild").each(function(){t(this).appendTo(r)}),a(r),o(r.data("_vgchild"),i||r.data("_vgopt").easeing||"linear","number"==typeof d?d:r.data("_vgopt").time||500,"number"==typeof n?n:r.data("_vgopt").delay||0))}),r}})}(jQuery);