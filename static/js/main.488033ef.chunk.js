(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,n){},23:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(21),c=n.n(o);n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(10),i=n(2),u=n(5),s=n(6),m=n(8),h=n(7),p=(n(14),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.navSlide()}},{key:"navSlide",value:function(){var e=document.querySelector(".burger"),t=document.querySelector(".nav-links");e.addEventListener("click",(function(){t.classList.toggle(".nav-active"),console.log("Nav slide is is working..kinda")}))}},{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("nav",null,l.a.createElement("h4",null,"Time Project"),l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement(r.b,{to:"/my-app/home"},"Home")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/my-app/your-posts"},"Your Posts")),l.a.createElement("li",null,l.a.createElement(r.b,{to:"/my-app/profile"},"Profile"))),l.a.createElement("div",{className:"burger"},l.a.createElement("div",{className:"line1"}),l.a.createElement("div",{className:"line2"}),l.a.createElement("div",{className:"line3"}))))}}]),n}(l.a.Component)),v=n(12),d=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={apiResponse:"First",mongoResponse:"Second",textBox:"hmm",textResponse:"[not entered or server not running]"},a.handleChange=a.handleChange.bind(Object(v.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(s.a)(n,[{key:"handleChange",value:function(e){this.setState({textBox:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.callTextBox(this.state.textBox)}},{key:"callAPI",value:function(){var e=this;fetch("http://localhost:5000/express_backend").then((function(e){return e.text()})).then((function(t){return e.setState({apiResponse:t})}))}},{key:"callDatabase",value:function(){var e=this;fetch("http://localhost:5000/mongo_backend").then((function(e){return e.text()})).then((function(t){return e.setState({mongoResponse:t})}))}},{key:"callTextBox",value:function(e){var t=this;fetch("http://localhost:5000/text_input?name="+e).then((function(e){return e.text()})).then((function(e){return t.setState({textResponse:e})}))}},{key:"componentWillMount",value:function(){this.callAPI(),this.callDatabase()}},{key:"myFunction",value:function(){console.log("testing12345")}},{key:"render",value:function(){return l.a.createElement("body",{className:"row"},l.a.createElement("div",{className:"column left"}),l.a.createElement("div",{className:"column middle"},l.a.createElement("br",null),l.a.createElement("div",{className:"h-content"},l.a.createElement("p",null,"Sell your time! College application review, tutoring, lessons, consultations, and more!"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Name: ",l.a.createElement("space",null),l.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),l.a.createElement("input",{type:"submit",value:"Submit"})),l.a.createElement("p",null,"Your name is: ",this.state.textResponse))),l.a.createElement("div",{className:"column right"}))}}]),n}(l.a.Component),b=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("h1",null,"This is my profile.")}}]),n}(l.a.Component),f=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("body",null,l.a.createElement("h1",null,"These are my posts."))}}]),n}(l.a.Component);c.a.render(l.a.createElement(r.a,null,l.a.createElement(p,null),l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:"/my-app"},l.a.createElement(i.a,{to:"/my-app/home"})),l.a.createElement(i.b,{exact:!0,path:"/my-app/home",component:d}),l.a.createElement(i.b,{exact:!0,path:"/my-app/your-posts",component:f}),l.a.createElement(i.b,{exact:!0,path:"/my-app/profile",component:b}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.488033ef.chunk.js.map