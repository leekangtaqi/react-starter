webpackJsonp([2],{1014:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,a=n(89),d=u(a),l=n(68),f=u(l),i=n(90),c=u(i),s=n(70),p=u(s),_=n(69),v=u(_),y=n(0),h=u(y),m=(o=r=function(e){function t(){return(0,f.default)(this,t),(0,p.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.children;return h.default.createElement("div",null,e)}}]),t}(y.PureComponent),r.propTypes={children:y.PropTypes.element.isRequired},o);t.default=m},1015:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,a=n(89),d=u(a),l=n(68),f=u(l),i=n(90),c=u(i),s=n(70),p=u(s),_=n(69),v=u(_),y=n(0),h=u(y),m=n(1014),M=u(m),T=(o=r=function(e){function t(){return(0,f.default)(this,t),(0,p.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return h.default.createElement(M.default,this.props)}}]),t}(y.Component),r.propTypes={children:y.PropTypes.element.isRequired},o);t.default=T},1016:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function r(){var e=(0,s.wireReducersInModules)();return(0,l.combineReducers)((0,a.default)({reduxAsyncConnect:f.immutableReducer,routing:c.default},e))}Object.defineProperty(t,"__esModule",{value:!0});var o=n(47),a=u(o);t.default=r;var d=n(101),l=n(1091),f=n(253),i=n(1017),c=u(i),s=n(372);(0,f.setToImmutableStateFunc)(function(e){return(0,d.fromJS)(e)}),(0,f.setToMutableStateFunc)(function(e){return e.toJS()})},1017:function(e,t,n){"use strict";function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1],n=t.type,u=t.payload;switch(n){case o.LOCATION_CHANGE:return e.merge({locationBeforeTransitions:u});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var r=n(101),o=n(246),a=(0,r.fromJS)({locationBeforeTransitions:null})},1018:function(e,t,n){"use strict";function u(){var e=(0,a.wireSagasInModules)();return o.default.mark(function t(){var n,u;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=0,u=e.length;case 1:if(!(n<u)){t.next=7;break}return t.next=4,(0,d.fork)(e[n]);case 4:n++,t.next=1;break;case 7:case"end":return t.stop()}},t,this)})}Object.defineProperty(t,"__esModule",{value:!0});var r=n(168),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=u;var a=n(372),d=n(254)},1019:function(e,t,n){"use strict";(function(e){function u(e){return e&&e.__esModule?e:{default:e}}function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=(0,v.default)(),r=(0,h.default)(),o=(0,p.default)(r),d=[a.default,l.default,o,(0,c.routerMiddleware)(t)],_=e.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&e.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})||i.compose,y=_(i.applyMiddleware.apply(void 0,d)),m=(0,i.createStore)(u,(0,f.fromJS)(n),y);return m.runSaga=o.run,m.close=function(){return m.dispatch(s.END)},m.runSaga(r),m}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(1101),a=u(o),d=n(1094),l=u(d),f=n(101),i=n(256),c=n(246),s=n(1095),p=u(s),_=n(1016),v=u(_),y=n(1018),h=u(y)}).call(t,n(88))},1020:function(e,t,n){"use strict";function u(){return{component:o.default,childRoutes:[n(1021).default,n(1022).default]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var r=n(1015),o=function(e){return e&&e.__esModule?e:{default:e}}(r)},1021:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(375),o=u(r),a=n(1024),d=u(a);t.default={path:"/",component:o.default,indexRoute:{component:d.default}}},1022:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(375),r=function(e){return e&&e.__esModule?e:{default:e}}(u);t.default={path:"*",component:r.default,getIndexRoute:function(e,t){n.e(0).then(function(e){t(null,{component:n(1114).default})}.bind(null,n)).catch(n.oe)}}},1023:function(e,t,n){"use strict";function u(e){var t=void 0,n=void 0;return function(u){var r=u.get(e);return r.equals(t)||(t=r,n=r.toJS()),n}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u},1024:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,a=n(168),d=u(a),l=n(451),f=u(l),i=n(89),c=u(i),s=n(68),p=u(s),_=n(90),v=u(_),y=n(70),h=u(y),m=n(69),M=u(m),T=n(0),b=u(T),x=n(374),O=u(x),P=n(162),j=n(256),w=(n(253),n(687)),E=n(839),k=u(E),S=(r=(0,P.connect)(function(e){return{xx:1}},function(e){return{actions:(0,j.bindActionCreators)(O.default,e)}}))(o=function(e){function t(){return(0,p.default)(this,t),(0,h.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,M.default)(t,e),(0,v.default)(t,[{key:"componentWillMount",value:function(){function e(){return t.apply(this,arguments)}var t=(0,f.default)(d.default.mark(function e(){var t,n,u;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.actions.addTodo("111","222");case 2:t=e.sent,n=t.payload,u=t.error,u&&console.error(this.props.xx);case 6:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){return b.default.createElement("div",null,b.default.createElement("h1",{className:k.default.font1},"Home1"),b.default.createElement(w.Button,{type:"primary"},"南方电视"))}}]),t}(T.PureComponent))||o;t.default=S},1025:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,a=n(89),d=u(a),l=n(68),f=u(l),i=n(90),c=u(i),s=n(70),p=u(s),_=n(69),v=u(_),y=n(0),h=u(y),m=(o=r=function(e){function t(){return(0,f.default)(this,t),(0,p.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.children;return h.default.createElement("div",null,e)}}]),t}(y.PureComponent),r.propTypes={children:y.PropTypes.element.isRequired},o);t.default=m},1026:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(374),r=function(e){return e&&e.__esModule?e:{default:e}}(u),o=n(163),a=(0,o.handleAction)(r.default.addTodo,function(e,t){return{xx:e.xx+t.payload}},{xx:200});t.default={addTodo:a}},1027:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function r(){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.takeLatest)(f.default.addTodo,a.default.mark(function e(t){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.put)({type:"111",payload:t.payload});case 2:case"end":return e.stop()}},e,this)}));case 2:case"end":return e.stop()}},i[0],this)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(168),a=u(o);t.default=r;var d=n(254),l=n(373),f=u(l),i=[r].map(a.default.mark)},1028:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(163),r=(0,u.createAction)("AddTodo2");t.default={addTodo2:r}},1029:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.myReducer2=void 0;var u=n(1028),r=function(e){return e&&e.__esModule?e:{default:e}}(u),o=n(163);t.myReducer2=(0,o.handleAction)(r.default.addTodo2,function(e,t){return{xx:e.xx+t.payload}},{xx:200})},1030:function(e,t,n){"use strict";(function(e){function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,a=n(47),d=u(a),l=n(89),f=u(l),i=n(68),c=u(i),s=n(90),p=u(s),_=n(70),v=u(_),y=n(69),h=u(y),m=n(0),M=u(m),T=n(162),b=n(389),x=n(253),O=(o=r=function(t){function n(){return(0,c.default)(this,n),(0,v.default)(this,(n.__proto__||(0,f.default)(n)).apply(this,arguments))}return(0,h.default)(n,t),(0,p.default)(n,[{key:"render",value:function(){var t=this.props.store;return M.default.createElement(T.Provider,{store:t},M.default.createElement(b.Router,(0,d.default)({key:e.hot&&new Date,render:function(e){return M.default.createElement(x.ReduxAsyncConnect,e)}},this.props)))}}]),n}(m.Component),r.propTypes={store:m.PropTypes.object.isRequired,history:m.PropTypes.object.isRequired,routes:M.default.PropTypes.oneOfType([m.PropTypes.array,m.PropTypes.object]).isRequired},o);t.default=O}).call(t,n(167)(e))},1111:function(e,t,n){(function(t){e.exports={port:3030,env:{isBrowser:!t.versions}}}).call(t,n(228))},1112:function(e,t){e.exports=path},1113:function(e,t,n){n(417),n(418),e.exports=n(419)},372:function(e,t,n){"use strict";(function(e){function u(e){return e&&e.__esModule?e:{default:e}}function r(){if(f.default.env.isBrowser){var t=n(420);return t.keys().map(t).reduce(function(e,t){return(0,d.default)({},e,t.default)},{})}return n(416).sync("../../modules/*.reducer.js").map(function(t){return path.join(e,t)}).reduce(function(e,t){return(0,d.default)({},e,t.default)},{})}function o(){if(f.default.env.isBrowser){var t=n(421);return t.keys().map(t).map(function(e){return e.default})}var u=n(416),r=n(1112);return u.sync("../../modules/*.saga.js").map(function(t){return r.join(e,t)}).map(function(e){return e.default})}Object.defineProperty(t,"__esModule",{value:!0});var a=n(47),d=u(a);t.wireReducersInModules=r,t.wireSagasInModules=o;var l=n(1111),f=u(l)}).call(t,"/")},373:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=t.addTodo="addTodo";t.default={addTodo:u}},374:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(163),r=n(373),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={addTodo:(0,u.createAction)(o.default.addTodo)}},375:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,a=n(89),d=u(a),l=n(68),f=u(l),i=n(90),c=u(i),s=n(70),p=u(s),_=n(69),v=u(_),y=n(0),h=u(y),m=n(1025),M=u(m),T=(o=r=function(e){function t(){return(0,f.default)(this,t),(0,p.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return h.default.createElement(M.default,this.props)}}]),t}(y.Component),r.propTypes={children:y.PropTypes.element.isRequired},o);t.default=T},416:function(e,t){e.exports=glob},419:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}var r=n(47),o=u(r),a=n(0),d=u(a),l=n(101),f=n(15),i=n(1007),c=n(389),s=n(246),p=n(1030),_=u(p),v=n(1020),y=u(v),h=n(1019),m=u(h),M=n(1023),T=u(M),b=(0,l.fromJS)(window.__INITIAL_STATE__),x=(0,m.default)(c.browserHistory,b),O=(0,s.syncHistoryWithStore)(c.browserHistory,x,{selectLocationState:(0,T.default)("routing")}),P=function(e){return(0,f.render)(d.default.createElement(i.AppContainer,null,d.default.createElement(_.default,(0,o.default)({store:x,history:O},e))),document.getElementById("app"))};(0,c.match)({history:O,routes:(0,y.default)()},function(e,t,n){return P(n)})},420:function(e,t,n){function u(e){return n(r(e))}function r(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var o={"./landing/reducer.js":1026,"./notFound/reducer.js":1029};u.keys=function(){return Object.keys(o)},u.resolve=r,e.exports=u,u.id=420},421:function(e,t,n){function u(e){return n(r(e))}function r(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var o={"./landing/saga.js":1027};u.keys=function(){return Object.keys(o)},u.resolve=r,e.exports=u,u.id=421},839:function(e,t){e.exports={font1:"_6a942039"}}},[1113]);
//# sourceMappingURL=app.2d6aaa58117f62c08172.js.map