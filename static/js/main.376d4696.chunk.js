(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(81)},40:function(e,t,n){},43:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(24),s=n.n(i),o=(n(40),n(10)),c=n.n(o),u=n(14),l=n(31),h=n(11),d=n(25),m=n(26),f=n(32),p=n(27),b=n(33),v=n(8),g=(n(43),n(28)),w=n.n(g),y=n(29),j=n.n(y),O=n(30),k=n.n(O),E=n(12),S=n.n(E),C=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(p.a)(t).call(this,e))).createForm=function(){for(var e=[],t=function(t){var a;e.push(r.a.createElement(S.a.Group,{key:t},r.a.createElement(S.a.Control,(a={className:"input",type:"text",name:"letter[]",size:"lg"},Object(h.a)(a,"size","1"),Object(h.a)(a,"maxLength","1"),Object(h.a)(a,"value",n.state.letters[t]),Object(h.a)(a,"onChange",function(e){return n.handleChange(e,t)}),a))))},a=0;a<7;a++)t(a);return e},n.state={dictionary:{},words:[],letters:["","","","","","",""]},n.handleChange=n.handleChange.bind(Object(v.a)(Object(v.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(Object(v.a)(n))),n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e,t){var n=Object(l.a)(this.state.letters);n[t]=e.target.value,n=n.map(function(e){return e.toLowerCase()}),this.setState({letters:n})}},{key:"handleSubmit",value:function(e){e.preventDefault();for(var t="",n=[],a=[],r="",i=0;i<this.state.letters.length;i++)t+=this.state.letters[i];for(var s=j()(t),o=s.length,c=0;c<o;c++)r=s[c].substring(0,3),a.includes(r)||a.push(r);for(var u=0;u<o;u++)r=s[u].substring(0,4),a.includes(r)||a.push(r);for(var l=0;l<o;l++)r=s[l].substring(0,5),a.includes(r)||a.push(r);for(var h=0;h<o;h++)r=s[h].substring(0,6),a.includes(r)||a.push(r);for(var d=0;d<o;d++)r=s[d].substring(0,7),a.includes(r)||a.push(r);console.log(a);for(var m=0;m<a.length;m++)this.state.dictionary.hasOwnProperty(a[m])&&(n.includes(a[m])||n.push(a[m]));this.setState({words:n})}},{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadDictionary();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadDictionary",value:function(){var e=Object(u.a)(c.a.mark(function e(){var t=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("./data/words_dictionary.json").then(function(e){t.setState({dictionary:e.data})});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Letter Permutations to Words"),r.a.createElement(S.a,{className:"text-center",inline:!0,onSubmit:this.handleSubmit},this.createForm(),r.a.createElement("div",{className:"submit-area"},r.a.createElement(S.a.Group,null,r.a.createElement(k.a,{variant:"success",onClick:this.handleSubmit},"Submit"))))),this.state.words.map(function(e,t){return r.a.createElement("li",{key:t},e)}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(80);s.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.376d4696.chunk.js.map