var n=require("nanoid"),t=/*#__PURE__*/function(){function t(n,t,i){this.id=void 0,this.domain=void 0,this.action=void 0,this.data=void 0,this.domain=n,this.action=t,this.data=i,this.id=this.generateId()}return t.prototype.generateId=function(){return n.customAlphabet("1234567890",16)()},t}(),i=/*#__PURE__*/function(){function n(n){this.resolve=void 0,this.reject=void 0,this.sandboxEvent=void 0,this.sandboxEvent=n}var t=n.prototype;return t.createPromise=function(){var n=this;return new Promise(function(t,i){n.resolve=t,n.reject=i})},t.resolvePromise=function(n){this.resolve(n)},t.rejectPromise=function(n){this.reject(n)},n}(),o=/*#__PURE__*/function(){function n(){this.DOMAIN="extension",this.ACTIONS={GET_ALL_WINDOWS:"getAllWindows",ON_BOUNDS_CHANGED_WINDOWS:"onBoundsChangedWindows",ON_CREATED_WINDOWS:"onCreatedWindows",ON_FOCUS_CHANGED_WINDOWS:"onFocusChangedWindows",ON_REMOVED_WINDOWS:"onRemovedWindows"},this.pendingRequests=void 0}var o=n.prototype;return o.getAll=function(){try{var n=this,o=new t(n.DOMAIN,n.ACTIONS.GET_ALL_WINDOWS),r=new i(o);return n.pendingRequests.push(r),u(o),Promise.resolve(r.createPromise())}catch(n){return Promise.reject(n)}},o.onBoundsChanged=function(n,t){t(n)},o.onCreated=function(n,t){t(n)},o.onFocusChanged=function(n,t){t(n)},o.onRemoved=function(n,t){t(n)},o.registerCallback=function(n){n()},o.onSandboxEvent=function(n){if(n.domain===this.DOMAIN&&n.action===this.ACTIONS.GET_ALL_WINDOWS){var t=this.pendingRequests.find(function(t){return t.sandboxEvent.id===n.id});t?t.resolvePromise(n.data):t.rejectPromise("Cannot resolve event.")}},o.onIframeEvent=function(n){var t=null;return n===this.ACTIONS.GET_ALL_WINDOWS&&(t=this.getAll()),t},n}(),r=/*#__PURE__*/function(){function n(){this.windows=new o}var t=n.prototype;return t.onSandboxEvent=function(n){this.windows.onSandboxEvent(n)},t.onIframeEvent=function(n){return this.windows.onIframeEvent(n)},n}(),e=/*#__PURE__*/function(){function n(){}return n.onSandboxEvent=function(n){return this.chrome.onSandboxEvent(n)},n.onIframeEvent=function(n){return this.chrome.onIframeEvent(n)},n}();function u(n){fetch("tabjail.event",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})}function s(n){return e.onIframeEvent(n)}e.chrome=new r,exports.onIframeEvent=s,exports.onSandboxEvent=function(n){return e.onSandboxEvent(n)},exports.registerIframeCallback=function(){window.addEventListener("message",function(n){return s(n.data)},!1)},exports.sendSandboxEvent=u;
//# sourceMappingURL=tj-comm.js.map
