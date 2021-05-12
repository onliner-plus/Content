// For license information, see `https://assets.adobedtm.com/72afb75f5516/e07b557461af/2560ac0a7b91/RC834b4c0676e6446185530bf663e463dc-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/72afb75f5516/e07b557461af/2560ac0a7b91/RC834b4c0676e6446185530bf663e463dc-source.min.js', "!function(){\"use strict\";function e(t){if(!t)throw new Error(\"No options passed to Waypoint constructor\");if(!t.element)throw new Error(\"No element option passed to Waypoint constructor\");if(!t.handler)throw new Error(\"No handler option passed to Waypoint constructor\");this.key=\"waypoint-\"+i,this.options=e.Adapter.extend({},e.defaults,t),this.element=this.options.element,this.adapter=new e.Adapter(this.element),this.callback=t.handler,this.axis=this.options.horizontal?\"horizontal\":\"vertical\",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=e.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=e.Context.findOrCreateByElement(this.options.context),e.offsetAliases[this.options.offset]&&(this.options.offset=e.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),r[this.key]=this,i+=1}var i=0,r={};e.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},e.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},e.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete r[this.key]},e.prototype.disable=function(){return this.enabled=!1,this},e.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},e.prototype.next=function(){return this.group.next(this)},e.prototype.previous=function(){return this.group.previous(this)},e.invokeAll=function(t){var e=[];for(var i in r)e.push(r[i]);for(var o=0,n=e.length;o<n;o++)e[o][t]()},e.destroyAll=function(){e.invokeAll(\"destroy\")},e.disableAll=function(){e.invokeAll(\"disable\")},e.enableAll=function(){e.invokeAll(\"enable\")},e.refreshAll=function(){e.Context.refreshAll()},e.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},e.viewportWidth=function(){return document.documentElement.clientWidth},e.adapters=[],e.defaults={context:window,continuous:!0,enabled:!0,group:\"default\",horizontal:!1,offset:0},e.offsetAliases={\"bottom-in-view\":function(){return this.context.innerHeight()-this.adapter.outerHeight()},\"right-in-view\":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=e}(),function(){\"use strict\";function e(t){window.setTimeout(t,1e3/60)}function i(t){this.element=t,this.Adapter=y.Adapter,this.adapter=new this.Adapter(t),this.key=\"waypoint-context-\"+o,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,n[t.waypointContextKey]=this,o+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var o=0,n={},y=window.Waypoint,t=window.onload;i.prototype.add=function(t){var e=t.options.horizontal?\"horizontal\":\"vertical\";this.waypoints[e][t.key]=t,this.refresh()},i.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(\".waypoints\"),delete n[this.key])},i.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on(\"resize.waypoints\",function(){e.didResize||(e.didResize=!0,y.requestAnimationFrame(t))})},i.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on(\"scroll.waypoints\",function(){(!e.didScroll||y.isTouch)&&(e.didScroll=!0,y.requestAnimationFrame(t))})},i.prototype.handleResize=function(){y.Context.refreshAll()},i.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:\"right\",backward:\"left\"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:\"down\",backward:\"up\"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll?o.forward:o.backward;for(var r in this.waypoints[i]){var s=this.waypoints[i][r],a=o.oldScroll<s.triggerPoint,l=o.newScroll>=s.triggerPoint;(a&&l||!a&&!l)&&(s.queueTrigger(n),t[s.group.id]=s.group)}}for(var h in t)t[h].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},i.prototype.innerHeight=function(){return this.element==this.element.window?y.viewportHeight():this.adapter.innerHeight()},i.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},i.prototype.innerWidth=function(){return this.element==this.element.window?y.viewportWidth():this.adapter.innerWidth()},i.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;o<n;o++)t[o].destroy()},i.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};for(var n in this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:\"right\",backward:\"left\",offsetProp:\"left\"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:\"down\",backward:\"up\",offsetProp:\"top\"}}){var r=t[n];for(var s in this.waypoints[n]){var a,l,h,p,c=this.waypoints[n][s],u=c.options.offset,d=c.triggerPoint,f=0,w=null==d;c.element!==c.element.window&&(f=c.adapter.offset()[r.offsetProp]),\"function\"==typeof u?u=u.apply(c):\"string\"==typeof u&&(u=parseFloat(u),-1<c.options.offset.indexOf(\"%\")&&(u=Math.ceil(r.contextDimension*u/100))),a=r.contextScroll-r.contextOffset,c.triggerPoint=f+a-u,l=d<r.oldScroll,h=c.triggerPoint>=r.oldScroll,p=!l&&!h,!w&&(l&&h)?(c.queueTrigger(r.backward),o[c.group.id]=c.group):!w&&p?(c.queueTrigger(r.forward),o[c.group.id]=c.group):w&&r.oldScroll>=c.triggerPoint&&(c.queueTrigger(r.forward),o[c.group.id]=c.group)}}return y.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},i.findOrCreateByElement=function(t){return i.findByElement(t)||new i(t)},i.refreshAll=function(){for(var t in n)n[t].refresh()},i.findByElement=function(t){return n[t.waypointContextKey]},window.onload=function(){t&&t(),i.refreshAll()},y.requestAnimationFrame=function(t){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||e).call(window,t)},y.Context=i}(),function(){\"use strict\";function s(t,e){return t.triggerPoint-e.triggerPoint}function a(t,e){return e.triggerPoint-t.triggerPoint}function e(t){this.name=t.name,this.axis=t.axis,this.id=this.name+\"-\"+this.axis,this.waypoints=[],this.clearTriggerQueues(),i[this.axis][this.name]=this}var i={vertical:{},horizontal:{}},o=window.Waypoint;e.prototype.add=function(t){this.waypoints.push(t)},e.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},e.prototype.flushTriggers=function(){for(var t in this.triggerQueues){var e=this.triggerQueues[t],i=\"up\"===t||\"left\"===t;e.sort(i?a:s);for(var o=0,n=e.length;o<n;o+=1){var r=e[o];(r.options.continuous||o===e.length-1)&&r.trigger([t])}}this.clearTriggerQueues()},e.prototype.next=function(t){this.waypoints.sort(s);var e=o.Adapter.inArray(t,this.waypoints);return e===this.waypoints.length-1?null:this.waypoints[e+1]},e.prototype.previous=function(t){this.waypoints.sort(s);var e=o.Adapter.inArray(t,this.waypoints);return e?this.waypoints[e-1]:null},e.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},e.prototype.remove=function(t){var e=o.Adapter.inArray(t,this.waypoints);-1<e&&this.waypoints.splice(e,1)},e.prototype.first=function(){return this.waypoints[0]},e.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},e.findOrCreate=function(t){return i[t.axis][t.name]||new e(t)},o.Group=e}(),function(){\"use strict\";function i(t){this.$element=o(t)}var o=window.jQuery,t=window.Waypoint;o.each([\"innerHeight\",\"innerWidth\",\"off\",\"offset\",\"on\",\"outerHeight\",\"outerWidth\",\"scrollLeft\",\"scrollTop\"],function(t,e){i.prototype[e]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[e].apply(this.$element,t)}}),o.each([\"extend\",\"inArray\",\"isEmptyObject\"],function(t,e){i[e]=o[e]}),t.adapters.push({name:\"jquery\",Adapter:i}),t.Adapter=i}(),function(){\"use strict\";function t(n){return function(t,e){var i=[],o=t;return n.isFunction(arguments[0])&&((o=n.extend({},e)).handler=arguments[0]),this.each(function(){var t=n.extend({},o,{element:this});\"string\"==typeof t.context&&(t.context=n(this).closest(t.context)[0]),i.push(new r(t))}),i}}var r=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();");