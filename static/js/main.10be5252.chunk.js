(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),o=n.n(l),c=(n(14),n(15),n(1)),i=n(2),s=n(4),u=n(3),m=n(5),d=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"title"},r.a.createElement("a",{href:"./"},"Home")))}}]),t}(r.a.Component),h=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:{}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://diegoescobar.ca/wp-json/wp/v2/pages",{referrerPolicy:"unsafe-url"}).then(function(e){return e.json()}).then(function(t){var n=Object.entries(t);e.setState({isLoaded:!0,items:n})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.items;return t?r.a.createElement("div",null,"Error: ",t.message):n?r.a.createElement("div",{className:"menu"},r.a.createElement("ul",null,a.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:e[1].slug},e[1].title.rendered))}))):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component),p=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"blog post"},r.a.createElement("h2",null,this.props.title),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.props.content}}))}}]),t}(r.a.Component),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:{}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://diegoescobar.ca/wp-json/wp/v2/posts",{referrerPolicy:"unsafe-url"}).then(function(e){return e.json()}).then(function(t){var n=Object.entries(t);console.log(n),e.setState({isLoaded:!0,items:n})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.items;return t?r.a.createElement("div",null,"Error: ",t.message):n?r.a.createElement("div",null,r.a.createElement("h3",null,"Blog"),a.map(function(e,t){return r.a.createElement(p,{key:t,title:e[1].title[0],content:e[1].content.rendered})})):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component),v=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:{}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"portfolio item"},r.a.createElement("h3",null,r.a.createElement("a",{href:this.props.slug},this.props.title)),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.props.content}}))}}]),t}(r.a.Component),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:{}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://diegoescobar.ca/wp-json/wp/v2/portfolio",{referrerPolicy:"unsafe-url"}).then(function(e){return e.json()}).then(function(t){var n=Object.entries(t);e.setState({isLoaded:!0,items:n})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.items;return console.log(a),t?r.a.createElement("div",null,"Error: ",t.message):n?r.a.createElement("div",{className:"portfolio"},r.a.createElement("ul",null,a.map(function(e,t){return r.a.createElement(v,{key:t,title:e[1].title.rendered,slug:e[1].slug,content:e[1].content.rendered})}))):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{type:"text",placeholder:"name"}))),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{type:"text",placeholder:"email"}))),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("textarea",{placeholder:"message"}))),r.a.createElement("button",null,"Submit"))}}]),t}(r.a.Component);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(h,null),r.a.createElement(f,null),r.a.createElement(b,null),r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.10be5252.chunk.js.map