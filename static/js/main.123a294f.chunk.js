(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(81)},40:function(e,t,n){},43:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(25),i=n.n(s),o=(n(40),n(11)),c=n.n(o),u=n(14),l=n(31),h=n(12),d=n(26),m=n(27),f=n(32),p=n(28),b=n(33),v=n(7),g=(n(43),n(29)),w=n.n(g),y=n(30),O=n.n(y),j=n(15),k=n.n(j),E=n(10),C=n.n(E),S=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(f.a)(this,Object(p.a)(t).call(this,e))).createForm=function(){for(var e=[],t=function(t){var a;e.push(r.a.createElement(C.a.Group,{key:t},r.a.createElement(C.a.Control,(a={className:"input",type:"text",name:"letter[]",size:"lg"},Object(h.a)(a,"size","1"),Object(h.a)(a,"maxLength","1"),Object(h.a)(a,"value",n.state.letters[t]),Object(h.a)(a,"onChange",function(e){return n.handleChange(e,t)}),a))))},a=0;a<7;a++)t(a);return e},n.state={dictionary:{},words:[],letters:["","","","","","",""]},n.handleChange=n.handleChange.bind(Object(v.a)(Object(v.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(Object(v.a)(n))),n.resetLetters=n.resetLetters.bind(Object(v.a)(Object(v.a)(n))),n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e,t){var n=Object(l.a)(this.state.letters);n[t]=e.target.value,n=n.map(function(e){return e.toLowerCase()}),this.setState({letters:n});var a=e.target.form,r=Array.prototype.indexOf.call(a,e.target);a.elements[r+1].focus(),e.preventDefault()}},{key:"resetLetters",value:function(){this.setState({letters:["","","","","","",""],words:[]})}},{key:"handleSubmit",value:function(e){e.preventDefault();for(var t="",n=[],a=[],r="",s=0;s<this.state.letters.length;s++)t+=this.state.letters[s];for(var i=O()(t),o=i.length,c=0;c<o;c++)r=i[c].substring(0,3),a.includes(r)||a.push(r);for(var u=0;u<o;u++)r=i[u].substring(0,4),a.includes(r)||a.push(r);for(var l=0;l<o;l++)r=i[l].substring(0,5),a.includes(r)||a.push(r);for(var h=0;h<o;h++)r=i[h].substring(0,6),a.includes(r)||a.push(r);for(var d=0;d<o;d++)r=i[d].substring(0,7),a.includes(r)||a.push(r);console.log(a);for(var m=0;m<a.length;m++)this.state.dictionary.hasOwnProperty(a[m])&&(n.includes(a[m])||n.push(a[m]));this.setState({words:n})}},{key:"componentDidMount",value:function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadDictionary();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadDictionary",value:function(){var e=Object(u.a)(c.a.mark(function e(){var t=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("./data/words_dictionary.json").then(function(e){t.setState({dictionary:e.data})});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Letter Permutations to Words"),r.a.createElement(C.a,{className:"text-center",inline:!0,onSubmit:this.handleSubmit},this.createForm(),r.a.createElement(C.a.Group,null,r.a.createElement(k.a,{className:"button",variant:"success",onClick:this.handleSubmit},"Submit")),r.a.createElement(C.a.Group,null,r.a.createElement(k.a,{variant:"danger",onClick:this.resetLetters},"Clear")))),this.state.words.map(function(e,t){return r.a.createElement("li",{key:t},e)}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(80);i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.123a294f.chunk.js.map