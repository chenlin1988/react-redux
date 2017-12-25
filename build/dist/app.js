webpackJsonp([0],{240:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function(){function e(){o(this,e)}return r(e,null,[{key:"onTestAdd",value:function(e){return{type:"TEST::add",payload:e+1}}},{key:"onTestSubtract",value:function(e){return{type:"TEST::subtract",payload:e-1}}},{key:"getGeoInfo",value:function(e){var t="该浏览器不支持获取地理位置。";return navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){t="纬度: "+e.coords.latitude+"<br>经度: "+e.coords.longitude}),{type:"GEOLOCATION::getGeoInfo",value:t}}}]),e}();t.default=u},241:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(13),u=o(r),a=n(255),c=o(a),i=n(87),f=n(198);n(381);var l=n(564),s=o(l);n(571);var p=n(572),d=o(p);c.default.render(u.default.createElement(i.Provider,{store:s.default},u.default.createElement(f.Router,{routes:d.default,history:f.hashHistory,queryKey:!1})),document.getElementById("app-root"))},564:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(120),u=n(565),a=o(u),c=n(566),i=o(c),f=(0,r.createStore)(i.default,(0,r.applyMiddleware)(a.default));t.default=f},566:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(120),r=n(567),u=n(570),a=function(e){return e&&e.__esModule?e:{default:e}}(u),c=(0,o.combineReducers)({routing:r.routerReducer,app:a.default});t.default=c},570:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={inputValue:0},r=function(e){return e},u=function(e,t){var n=t.payload;return Object.assign({},e,{inputValue:n})},a=function(e,t){var n=t.payload;return Object.assign({},e,{inputValue:n})},c=function(e,t){var n=t.payload;return Object.assign({},e,{value:n})},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case"TEST::add":return u(e,t);case"TEST::subtract":return a(e,t);case"GEOLOCATION::getGeoInfo":return c(e,t);default:return r(e)}};t.default=i},571:function(e,t){},572:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(13),u=o(r),a=n(198),c=n(573),i=o(c),f=n(574),l=o(f),s=n(576),p=o(s);t.default=u.default.createElement(a.Route,{path:"/",component:i.default}," // 所有的访问，都跳转到rootContainer",u.default.createElement(a.IndexRedirect,{to:"/home"})," // 默认加载的组件，比如访问www.test.com,会自动跳转到www.test.com/home",u.default.createElement(a.Route,{path:"/home",component:l.default})," // 一个路由地址，访问www.test.com/home,就会跳转到此",u.default.createElement(a.Route,{path:"/getLocation",component:p.default}),u.default.createElement(a.Redirect,{from:"*",to:"/"})," // 所有的其他未定义的访问路径，都跳转到根路径，比如访问www.test.com/abc, 但是/abc我们没有定义，就会自动跳转到www.test.com, 而www.test.com又会自动跳转到www.test.com/home")},573:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(13),i=function(e){return e&&e.__esModule?e:{default:e}}(c),f=n(87),l=function(e){return{dispatch:e.dispatch}},s=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),a(t,[{key:"render",value:function(){return i.default.createElement("div",{className:"boss"},this.props.children)}}]),t}(i.default.Component);s.propTypes={dispatch:c.PropTypes.func,children:c.PropTypes.any},t.default=(0,f.connect)(l)(s)},574:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(13),f=o(i),l=n(87),s=n(575),p=o(s),d=n(240),y=o(d),b=function(e){return{dispatch:e.dispatch,testValue:e.app.inputValue}},h=function(e){return{fn:{onTestAdd:function(t){e(y.default.onTestAdd(t))},onTestSubtract:function(t){e(y.default.onTestSubtract(t))}}}},v=function(e){function t(e){r(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return a(t,e),c(t,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(p.default,{value:this.props.testValue,onAdd:this.props.fn.onTestAdd,onSubtract:this.props.fn.onTestSubtract}))}}]),t}(f.default.Component);v.propTypes={dispatch:i.PropTypes.func,fn:i.PropTypes.object,testValue:i.PropTypes.number,location:i.PropTypes.any},t.default=(0,l.connect)(b,h)(v)},575:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(13),i=function(e){return e&&e.__esModule?e:{default:e}}(c),f=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return u(t,e),a(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return i.default.createElement("div",null,i.default.createElement("span",null,this.props.value),i.default.createElement("button",{onClick:function(){return e.props.onAdd(e.props.value)}},"加"),i.default.createElement("button",{onClick:function(){return e.props.onSubtract(e.props.value)}},"减"))}}]),t}(i.default.Component);f.propTypes={value:c.PropTypes.number,onAdd:c.PropTypes.func,onSubtract:c.PropTypes.func},t.default=f},576:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(13),f=o(i),l=n(87),s=n(577),p=o(s),d=n(240),y=o(d),b=function(e){return{dispatch:e.dispatch,value:e.app.value}},h=function(e){return{fn:{getGeoInfo:function(t){e(y.default.getGeoInfo(t))}}}},v=function(e){function t(e){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),c(t,[{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(p.default,{getGeoInfo:this.props.fn.getGeoInfo}))}}]),t}(i.Component);v.propTypes={dispatch:i.PropTypes.func,fn:i.PropTypes.object,value:i.PropTypes.string},t.default=(0,l.connect)(b,h)(v)},577:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(13),i=function(e){return e&&e.__esModule?e:{default:e}}(c),f=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={value:""},n}return u(t,e),a(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("button",{onClick:this.props.getGeoInfo},"获取地理位置："),i.default.createElement("br",null),this.state.value)}}]),t}(c.Component);t.default=f,f.propTypes={value:c.PropTypes.string,getGeoInfo:c.PropTypes.func}}},[241]);