!function(){"use strict";var i=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t=function(){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),n=function(){function e(t){i(this,e),this.timeToFade=500,this.processingAttr="data-imgix-img-processed",this.placeholderImg=$(t),0<this.placeholderImg.height()?this.init():this.placeholderImg.on("load",$.proxy(this.init,this))}return t(e,[{key:"init",value:function(){this.initPlaceholder(),this.initOptimization()}},{key:"initOptimization",value:function(){$("<img>").on("load",$.proxy(this.listenForIntersection,this)).attr("src",this.placeholderImg.attr("src"))}},{key:"listenForIntersection",value:function(){new IntersectionObserver($.proxy(this.onIntersection,this)).observe(this.placeholderImg[0])}},{key:"onIntersection",value:function(t,e){var i=$(t[0].target);t[0].isIntersecting&&!$(i).attr(this.processingAttr)&&(i.attr(this.processingAttr,!0),this.renderFullSizeImg())}},{key:"initPlaceholder",value:function(){this.wrapPlaceholder(),this.setPlaceholderCss()}},{key:"wrapPlaceholder",value:function(){this.tmpWrapper=$("<div>").css({position:"relative",height:this.placeholderImg[0].getBoundingClientRect().height,width:this.placeholderImg[0].getBoundingClientRect().width,margin:this.placeholderImg.css("margin")}),this.placeholderImg.wrap(this.tmpWrapper)}},{key:"setPlaceholderCss",value:function(){"absolute"!=this.placeholderImg.css("position")&&this.placeholderImg.css("position","relative"),this.placeholderImg.css({margin:0})}},{key:"renderFullSizeImg",value:function(){this.initFullSizeImg(),this.setFullSizeImgTempCss(),this.setFullSizeImgSrc(),this.addFullSizeImgToDom(),this.initTransition()}},{key:"initFullSizeImg",value:function(){this.fullSizeImg=this.placeholderImg.clone()}},{key:"setFullSizeImgTempCss",value:function(){this.fullSizeImg.css({position:"absolute",top:this.placeholderImg.position().top,left:this.placeholderImg.position().left,width:"100%",height:"100%"})}},{key:"getPlaceholderImgRect",value:function(){return{width:this.placeholderImg[0].getBoundingClientRect().width,height:this.placeholderImg[0].getBoundingClientRect().height}}},{key:"setFullSizeImgSrc",value:function(){var t=this.placeholderImg.attr("src").replace(/(\?|\&)(w=)(\d+)/i,"$1$2"+this.getPlaceholderImgRect().width).replace(/(\?|\&)(h=)(\d+)/i,"$1$2"+this.getPlaceholderImgRect().height);t.search(/(\?|\&)(h=)(\d+)/i)<0&&(t=t+"&h="+this.getPlaceholderImgRect().height+"&fit=crop"),this.fullSizeImg.attr("ix-src",t),this.fullSizeImg.addClass("img-responsive imgix-optimizing"),this.fullSizeImg.removeAttr("data-optimize-img")}},{key:"addFullSizeImgToDom",value:function(){this.fullSizeImg.insertBefore(this.placeholderImg)}},{key:"initTransition",value:function(){var t=this;this.fullSizeImg.on("load",function(){return t.transitionImg()}),imgix.init()}},{key:"transitionImg",value:function(){var t=this;if(!this.placeholderImg)return!0;this.fadeOutPlaceholder(),setTimeout(function(){t.removeFullSizeImgProperties(),t.removeImg()},this.timeToFade)}},{key:"fadeOutPlaceholder",value:function(){this.placeholderImg.fadeTo(this.timeToFade,0)}},{key:"removeFullSizeImgProperties",value:function(){this.fullSizeImg.removeAttr("style"),this.fullSizeImg.removeClass("imgix-optimizing")}},{key:"removeImg",value:function(){this.placeholderImg&&(this.placeholderImg.remove(),this.placeholderImg=void 0)}},{key:"unwrapImg",value:function(){this.fullSizeImg.css("margin",this.tmpWrapper.css("margin")).unwrap()}}]),e}(),o=function(){function e(t){i(this,e),this.timeToFade=500,this.processingAttr="data-imgix-bg-processed",this.dpr=window.devicePixelRatio||1,this.largestImageWidth=0,this.el=$(t),"none"!=this.el.css("background-image")&&(this.initEl(),this.initOptimization(),this.initEventListeners())}return t(e,[{key:"initOptimization",value:function(){$("<img>").on("load",$.proxy(this.listenForIntersection,this)).attr("src",this.placeholderImgUrl)}},{key:"listenForIntersection",value:function(){new IntersectionObserver($.proxy(this.onIntersection,this)).observe(this.el[0])}},{key:"onIntersection",value:function(t,e){var i=$(t[0].target);t[0].isIntersecting&&!$(i).attr(this.processingAttr)&&($(i).attr(this.processingAttr,!0),this.renderTmpPlaceholderEl())}},{key:"initEl",value:function(){this.setPlaceholderImgUrl(),this.setContainerTmpCss(),this.setElTmpCss()}},{key:"setPlaceholderImgUrl",value:function(){this.placeholderImgUrl=this.el.css("background-image").replace("url(","").replace(")","").replace(/\"/gi,"").replace(/\'/gi,"").split(", ")[0]}},{key:"setContainerTmpCss",value:function(){this.parentStyles={display:this.el.parent().css("display"),position:this.el.parent().css("position")},this.el.parent().css({display:"block",position:"relative"})}},{key:"setElTmpCss",value:function(){"absolute"!=this.el.css("position")&&this.el.css("position","relative")}},{key:"renderTmpPlaceholderEl",value:function(){this.initTmpPlaceholderEl(),this.setTmpPlaceholderElCss(),this.addTmpPlaceholderElToDom(),this.renderFullSizeImg()}},{key:"initTmpPlaceholderEl",value:function(){this.tmpPlaceholderEl=this.el.clone(),this.tmpPlaceholderEl.html("")}},{key:"setTmpPlaceholderElCss",value:function(){this.tmpPlaceholderEl.addClass("imgix-optimizing"),this.tmpPlaceholderEl.css({position:"absolute",top:this.el.position().top,left:this.el.position().left,width:this.el.outerWidth(),height:this.el.outerHeight(),backgroundColor:"transparent"})}},{key:"addTmpPlaceholderElToDom",value:function(){this.tmpPlaceholderEl.insertBefore(this.el)}},{key:"renderFullSizeImg",value:function(){this.removeElBgImg(),this.initTmpFullSizeEl(),this.setTmpFullSizeElImg(),this.addTmpFullSizeElToDom(),this.initTransition()}},{key:"removeElBgImg",value:function(){this.elBgColor=this.el.css("background-color"),this.el.css("background-color","transparent"),this.el.css("background-image","")}},{key:"initTmpFullSizeEl",value:function(){this.tmpFullSizeEl=this.tmpPlaceholderEl.clone()}},{key:"setFullSizeImgUrl",value:function(){if(!(this.fullSizeImgUrl&&this.el.outerWidth()*this.dpr<=this.largestImageWidth)){this.largestImageWidth=this.el.outerWidth()*this.dpr;var t=this.placeholderImgUrl.split("?"),e=t[t.length-1].split("&"),i={};for(var n in e.map(function(t){return i[t.split("=")[0]]=t.split("=")[1]}),this.el.outerWidth()>=this.el.outerHeight()?(i.w=this.largestImageWidth,delete i.h):(i.h=this.el.outerHeight()*this.dpr,delete i.w),e=[],i)e.push(n+"="+i[n]);return this.fullSizeImgUrl=t[0]+"?"+e.join("&")}}},{key:"setTmpFullSizeElImg",value:function(){this.setFullSizeImgUrl(),this.tmpFullSizeEl.css("background-image",'url("'+this.fullSizeImgUrl+'")')}},{key:"addTmpFullSizeElToDom",value:function(){this.tmpFullSizeEl.insertBefore(this.tmpPlaceholderEl)}},{key:"initTransition",value:function(){$("<img>").on("load",$.proxy(this.transitionImg,this)).attr("src",this.fullSizeImgUrl)}},{key:"transitionImg",value:function(){var t=this;this.fadeOutTmpPlaceholderEl(),setTimeout(function(){t.updateElImg(),t.replaceElTmpCss(),t.replaceContainerTmpCss(),t.removeTmpEls()},this.timeToFade)}},{key:"fadeOutTmpPlaceholderEl",value:function(){this.tmpPlaceholderEl.fadeTo(this.timeToFade,0)}},{key:"updateElImg",value:function(){var e=this;this.setFullSizeImgUrl(),$("<img>").on("load",function(t){return e.el.css("background-image","url('"+e.fullSizeImgUrl+"')")}).attr("src",this.placeholderImgUrl)}},{key:"replaceElTmpCss",value:function(){this.el.css("background-color",this.elBgColor)}},{key:"replaceContainerTmpCss",value:function(){this.el.parent().css({display:this.parentStyles.display,position:this.parentStyles.position})}},{key:"removeTmpEls",value:function(){this.tmpPlaceholderEl.remove(),this.tmpFullSizeEl.remove(),this.tmpPlaceholderEl=void 0,this.tmpFullSizeEl=void 0}},{key:"initEventListeners",value:function(){var e=this;this.initResizeEnd(),$(window).on("resizeEnd",function(t){return e.updateElImg()})}},{key:"initResizeEnd",value:function(){$(window).resize(function(){this.resizeTo&&clearTimeout(this.resizeTo),this.resizeTo=setTimeout(function(){$(this).trigger("resizeEnd")},500)})}}]),e}();!function(d,f){function a(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,i=e.width*e.height,n=this.intersectionRect,o=n.width*n.height;this.intersectionRatio=i?Number((o/i).toFixed(4)):this.isIntersecting?1:0}function t(t,e){var i,n,o,r=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(i=this._checkForIntersections.bind(this),n=this.THROTTLE_TIMEOUT,o=null,function(){o||(o=setTimeout(function(){i(),o=null},n))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(r.rootMargin),this.thresholds=this._initThresholds(r.threshold),this.root=r.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function e(t,e,i,n){"function"==typeof t.addEventListener?t.addEventListener(e,i,n||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,i)}function i(t,e,i,n){"function"==typeof t.removeEventListener?t.removeEventListener(e,i,n||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,i)}function v(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function n(t,e){for(var i=e;i;){if(i==t)return!0;i=I(i)}return!1}function I(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}"IntersectionObserver"in d&&"IntersectionObserverEntry"in d&&"intersectionRatio"in d.IntersectionObserverEntry.prototype?"isIntersecting"in d.IntersectionObserverEntry.prototype||Object.defineProperty(d.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}}):(t.prototype.THROTTLE_TIMEOUT=100,t.prototype.POLL_INTERVAL=null,t.prototype.USE_MUTATION_OBSERVER=!0,t.prototype.observe=function(e){if(!this._observationTargets.some(function(t){return t.element==e})){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},t.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=e}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},t.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},t.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},t.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,i){if("number"!=typeof t||isNaN(t)||t<0||1<t)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==i[e-1]})},t.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},t.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(e(d,"resize",this._checkForIntersections,!0),e(f,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in d&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(f,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},t.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,i(d,"resize",this._checkForIntersections,!0),i(f,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},t.prototype._checkForIntersections=function(){var l=this._rootIsInDom(),h=l?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(t){var e=t.element,i=v(e),n=this._rootContainsTarget(e),o=t.entry,r=l&&n&&this._computeTargetAndRootIntersection(e,h),s=t.entry=new a({time:d.performance&&performance.now&&performance.now(),target:e,boundingClientRect:i,rootBounds:h,intersectionRect:r});o?l&&n?this._hasCrossedThreshold(o,s)&&this._queuedEntries.push(s):o&&o.isIntersecting&&this._queuedEntries.push(s):this._queuedEntries.push(s)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},t.prototype._computeTargetAndRootIntersection=function(t,e){if("none"!=d.getComputedStyle(t).display){for(var i,n,o,r,s,l,h,a,c=v(t),u=I(t),p=!1;!p;){var m=null,g=1==u.nodeType?d.getComputedStyle(u):{};if("none"==g.display)return;if(u==this.root||u==f?(p=!0,m=e):u!=f.body&&u!=f.documentElement&&"visible"!=g.overflow&&(m=v(u)),m&&(i=m,n=c,void 0,o=Math.max(i.top,n.top),r=Math.min(i.bottom,n.bottom),s=Math.max(i.left,n.left),l=Math.min(i.right,n.right),a=r-o,!(c=0<=(h=l-s)&&0<=a&&{top:o,bottom:r,left:s,right:l,width:h,height:a})))break;u=I(u)}return c}},t.prototype._getRootRect=function(){var t;if(this.root)t=v(this.root);else{var e=f.documentElement,i=f.body;t={top:0,left:0,right:e.clientWidth||i.clientWidth,width:e.clientWidth||i.clientWidth,bottom:e.clientHeight||i.clientHeight,height:e.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(t)},t.prototype._expandRectByRootMargin=function(i){var t=this._rootMarginValues.map(function(t,e){return"px"==t.unit?t.value:t.value*(e%2?i.width:i.height)/100}),e={top:i.top-t[0],right:i.right+t[1],bottom:i.bottom+t[2],left:i.left-t[3]};return e.width=e.right-e.left,e.height=e.bottom-e.top,e},t.prototype._hasCrossedThreshold=function(t,e){var i=t&&t.isIntersecting?t.intersectionRatio||0:-1,n=e.isIntersecting?e.intersectionRatio||0:-1;if(i!==n)for(var o=0;o<this.thresholds.length;o++){var r=this.thresholds[o];if(r==i||r==n||r<i!=r<n)return!0}},t.prototype._rootIsInDom=function(){return!this.root||n(f,this.root)},t.prototype._rootContainsTarget=function(t){return n(this.root||f,t)},t.prototype._registerInstance=function(){},t.prototype._unregisterInstance=function(){},d.IntersectionObserver=t,d.IntersectionObserverEntry=a)}(window,document),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(i[r]=o[r])}return i},writable:!0,configurable:!0});var e=function(){function e(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};i(this,e),this.initDependencies(),this.initOptions(t),this.optimizeImages(),this.optimizeBgImages()}return t(e,[{key:"initDependencies",value:function(){}},{key:"initOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.options=t;var e={parent:"body"};for(var i in e)e.hasOwnProperty(i)&&!this.options[i]&&(this.options[i]=e[i])}},{key:"optimizeImages",value:function(){$(this.options.parent+" img[data-optimize-img]").each(function(t,e){new n(e)})}},{key:"optimizeBgImages",value:function(){return $(this.options.parent+" [data-optimize-bg-img]").each(function(t,e){new o(e)}),!0}}]),e}();window.Imgix=window.Imgix||{},Imgix.Optimizer=e}();
