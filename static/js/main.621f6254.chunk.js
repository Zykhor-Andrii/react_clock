(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),a=c.n(n),o=c(2),r=c(3),s=c(5),i=c(4),l=c(1),u=(c(12),c(0)),d=function(t){Object(s.a)(c,t);var e=Object(i.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={today:new Date},t.timerId=0,t}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({today:new Date}),console.info(t.state.today.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(t){t.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(t.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.props.clockName,e=this.state.today;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:e.toUTCString().slice(-12,-4)})]})}}]),c}(l.Component);function m(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var k=function(t){Object(s.a)(c,t);var e=Object(i.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},t.timerId=0,t}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("click",(function(){t.setState({hasClock:!0})})),document.addEventListener("contextmenu",(function(e){e.preventDefault(),t.setState({hasClock:!1})})),this.timerId=window.setInterval((function(){t.setState({clockName:m()})}),3300)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,c=t.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),e&&Object(u.jsx)(d,{clockName:c})]})}}]),c}(l.Component);a.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.621f6254.chunk.js.map