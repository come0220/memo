/* ===========================================================
 * bootstrap-tooltip.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";var e=function(t,e){this.init("tooltip",t,e)};e.prototype={constructor:e,init:function(e,i,o){var n,s,h,a,l;for(this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.enabled=!0,h=this.options.trigger.split(" "),l=h.length;l--;)a=h[l],"click"==a?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):"manual"!=a&&(n="hover"==a?"mouseenter":"focus",s="hover"==a?"mouseleave":"blur",this.$element.on(n+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,t.proxy(this.leave,this)));this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(e){return e=t.extend({},t.fn[this.type].defaults,this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},enter:function(e){var i,o=t.fn[this.type].defaults,n={};return this._options&&t.each(this._options,function(t,e){o[t]!=e&&(n[t]=e)},this),i=t(e.currentTarget)[this.type](n).data(this.type),i.options.delay&&i.options.delay.show?(clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show),void 0):i.show()},leave:function(e){var i=t(e.currentTarget)[this.type](this._options).data(this.type);return this.timeout&&clearTimeout(this.timeout),i.options.delay&&i.options.delay.hide?(i.hoverState="out",this.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide),void 0):i.hide()},show:function(){var e,i,o,n,s,h,a=t.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(a),a.isDefaultPrevented())return;switch(e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),s="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,e.detach().css({top:0,left:0,display:"block"}),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element),i=this.getPosition(),o=e[0].offsetWidth,n=e[0].offsetHeight,s){case"bottom":h={top:i.top+i.height,left:i.left+i.width/2-o/2};break;case"top":h={top:i.top-n,left:i.left+i.width/2-o/2};break;case"left":h={top:i.top+i.height/2-n/2,left:i.left-o};break;case"right":h={top:i.top+i.height/2-n/2,left:i.left+i.width}}this.applyPlacement(h,s),this.$element.trigger("shown")}},applyPlacement:function(t,e){var i,o,n,s,h=this.tip(),a=h[0].offsetWidth,l=h[0].offsetHeight;h.offset(t).addClass(e).addClass("in"),i=h[0].offsetWidth,o=h[0].offsetHeight,"top"==e&&o!=l&&(t.top=t.top+l-o,s=!0),"bottom"==e||"top"==e?(n=0,t.left<0&&(n=-2*t.left,t.left=0,h.offset(t),i=h[0].offsetWidth,o=h[0].offsetHeight),this.replaceArrow(n-a+i,i,"left")):this.replaceArrow(o-l,o,"top"),s&&h.offset(t)},replaceArrow:function(t,e,i){this.arrow().css(i,t?50*(1-t/e)+"%":"")},setContent:function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},hide:function(){function e(){var e=setTimeout(function(){i.off(t.support.transition.end).detach()},500);i.one(t.support.transition.end,function(){clearTimeout(e),i.detach()})}var i=this.tip(),o=t.Event("hide");return this.$element.trigger(o),o.isDefaultPrevented()?void 0:(i.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?e():i.detach(),this.$element.trigger("hidden"),this)},fixTitle:function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var e=this.$element[0];return t.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())},getTitle:function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},tip:function(){return this.$tip=this.$tip||t(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var i=e?t(e.currentTarget)[this.type](this._options).data(this.type):this;i.tip().hasClass("in")?i.hide():i.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var i=t.fn.tooltip;t.fn.tooltip=function(i){return this.each(function(){var o=t(this),n=o.data("tooltip"),s="object"==typeof i&&i;n||o.data("tooltip",n=new e(this,s)),"string"==typeof i&&n[i]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(window.jQuery);