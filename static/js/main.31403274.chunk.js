(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{17:function(t,e,n){t.exports=n(31)},28:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(5),i=n.n(c),r=n(2),l=n(3),d={ALL:"all",COMPLETED:"completed",INCOMPLETE:"incomplete"},u=d.ALL,s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_FILTER":return e.payload.filter;default:return t}},p=n(4),b=n(15),m=n(1),f={allIds:[],byIds:{}},O=Object(l.b)({todos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":var n=e.payload,a=n.id,o=n.content;return Object(m.a)(Object(m.a)({},t),{},{allIds:[].concat(Object(b.a)(t.allIds),[a]),byIds:Object(m.a)(Object(m.a)({},t.byIds),{},Object(p.a)({},a,{content:o,completed:!1}))});case"TOGGLE_TODO":var c=e.payload.id;return Object(m.a)(Object(m.a)({},t),{},{byIds:Object(m.a)(Object(m.a)({},t.byIds),{},Object(p.a)({},c,Object(m.a)(Object(m.a)({},t.byIds[c]),{},{completed:!t.byIds[c].completed})))});default:return t}},visibilityFilter:s}),v=Object(l.c)(O);n(28),n(29);var y=n(12),E=n(13),j=n(16),h=n(14),T=0,I=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(y.a)(this,n),(a=e.call(this,t)).updateInput=function(t){a.setState({input:t})},a.handleAddTodo=function(){a.props.addTodo(a.state.input),a.setState({input:""})},a.state={input:""},a}return Object(E.a)(n,[{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("input",{onChange:function(e){return t.updateInput(e.target.value)},value:this.state.input}),o.a.createElement("button",{className:"add-todo",onClick:this.handleAddTodo},"Add Todo"))}}]),n}(o.a.Component),L=Object(r.b)(null,{addTodo:function(t){return{type:"ADD_TODO",payload:{id:++T,content:t}}}})(I),g=n(6),w=n.n(g),D=Object(r.b)(null,{toggleTodo:function(t){return{type:"TOGGLE_TODO",payload:{id:t}}}})((function(t){var e=t.todo,n=t.toggleTodo;return o.a.createElement("li",{className:"todo-item",onClick:function(){return n(e.id)}},e&&e.completed?"\ud83d\udc4c":"\ud83d\udc4b"," ",o.a.createElement("span",{className:w()("todo-item__text",e&&e.completed&&"todo-item__text--completed")},e.content))})),N=function(t){return t.todos},_=function(t){return function(t){return N(t)?N(t).allIds:[]}(t).map((function(e){return function(t,e){return N(t)?Object(m.a)(Object(m.a)({},N(t).byIds[e]),{},{id:e}):{}}(t,e)}))},k=Object(r.b)((function(t){return{todos:function(t,e){var n=_(t);switch(e){case d.COMPLETED:return n.filter((function(t){return t.completed}));case d.INCOMPLETE:return n.filter((function(t){return!t.completed}));case d.ALL:default:return n}}(t,t.visibilityFilter)}}))((function(t){var e=t.todos;return o.a.createElement("ul",{className:"todo-list"},e&&e.length?e.map((function(t,e){return o.a.createElement(D,{key:"todo-".concat(t.id),todo:t})})):"No todos, yay!")})),C=Object(r.b)((function(t){return{activeFilter:t.visibilityFilter}}),{setFilter:function(t){return{type:"SET_FILTER",payload:{filter:t}}}})((function(t){var e=t.activeFilter,n=t.setFilter;return o.a.createElement("div",{className:"visibility-filters"},Object.keys(d).map((function(t){var a=d[t];return o.a.createElement("span",{key:"visibility-filter-".concat(a),className:w()("filter",a===e&&"filter--active"),onClick:function(){n(a)}},a)})))}));n(30);function F(){return o.a.createElement("div",{className:"todo-app"},o.a.createElement("h1",null,"Todo List !!"),o.a.createElement(L,null),o.a.createElement(k,null),o.a.createElement(C,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=document.getElementById("root");i.a.render(o.a.createElement(r.a,{store:v},o.a.createElement(F,null)),A)}},[[17,1,2]]]);
//# sourceMappingURL=main.31403274.chunk.js.map