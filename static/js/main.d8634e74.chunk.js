(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=n(1),l=n(2),u=n(4),s=n(3),m=n(5),p=(n(16),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("a",{href:"https://julicolo.github.io/react-pokedex"},"Pokedex"))}}]),t}(r.a.Component)),h=n(6),f=n.n(h),d=n(9),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",image:"",id:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name;e.url;return r.a.createElement("div",{className:"pokemonCard"},r.a.createElement("div",{className:"pokemonName"},r.a.createElement("h2",null,t)),r.a.createElement("div",{className:"pokemonSprite"}))}}]),t}(r.a.Component),v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={url:"https://pokeapi.co/api/v2/pokemon/?limit=964",pokemon:null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(f.a.mark(function e(){var t=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch(this.state.url).then(function(e){return e.json()}).then(function(e){return t.setState({pokemon:e.results})});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.pokemon;return r.a.createElement(r.a.Fragment,null,e?r.a.createElement(r.a.Fragment,null,e.map(function(e){return r.a.createElement(b,{key:e.name,name:e.name,url:e.url})})):r.a.createElement("h2",null,"Loading"))}}]),t}(r.a.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement("main",{className:"main"},r.a.createElement(v,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.d8634e74.chunk.js.map