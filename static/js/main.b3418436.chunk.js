(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=n(1),i=n(2),s=n(4),m=n(3),u=n(5),p=(n(15),n(16),n(8)),h=function(e){var t=e.index,n=e.name,a=e.types,c=e.onClick,o="http://cursist38.reacollege.eu/sprites/".concat(t,".png");return r.a.createElement("div",{onClick:c,className:"pokemonCard"},r.a.createElement("div",{className:"pokemonCardTop"},r.a.createElement("h3",null,"#",t.padStart(3,"00")),r.a.createElement("h3",null,n)),r.a.createElement("div",{className:"pokemonCardBot"},r.a.createElement("div",{className:"typing"},a.map(function(e){e.slot;var t=e.type.name;return r.a.createElement("span",{className:t,key:t})})),r.a.createElement("div",{className:"pokemonSprite"},r.a.createElement("img",{src:o,alt:n+"sprite"}))))},d=function(e){var t=e.index,n=e.name,a=e.types,c="http://cursist38.reacollege.eu/sprites/".concat(t,".png");return r.a.createElement("div",{className:"pokemonCard"},r.a.createElement("div",{className:"pokemonCardTop"},r.a.createElement("h3",null,n),r.a.createElement("h3",null,"#",t.padStart(3,"00"))),r.a.createElement("div",{className:"typing"},a.map(function(e){e.slot;var t=e.type.name;return r.a.createElement("span",{className:t,key:t})})),r.a.createElement("div",{className:"pokemonSprite"},r.a.createElement("img",{src:c,alt:n+"sprite"})))},k="https://pokeapi.co",v="?limit=807",E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={pokemon:null,currentPokemon:null,url:"".concat(k,"/api/v2/pokemon/").concat(v)},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.state.url).then(function(e){return e.json()}).then(function(e){var t=e.results.map(function(e){var t=e.name,n=e.url;return fetch(n).then(function(e){return e.json()}).then(function(e){return Object(p.a)({name:t,url:n,index:n.replace(/\/$/,"").split("/").pop()},e)})});return Promise.all(t)}).then(function(t){return e.setState({pokemon:t,currentPokemon:t[24]})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.pokemon,c=t.currentPokemon;return r.a.createElement(a.Fragment,null,n?r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"pokedexContainer"},n.map(function(t){return r.a.createElement(h,Object.assign({onClick:function(){e.setState({currentPokemon:t})},key:t.name},t))})),r.a.createElement("div",{className:"highlighter"},c?r.a.createElement(d,Object.assign({key:c},c)):this.setState({currentPokemon:25}))):r.a.createElement("h2",null,"Loading Pokedex"))}}]),t}(r.a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"header"},r.a.createElement("a",{href:"https://julicolo.github.io/react-pokedex"},"Pokedex"),r.a.createElement("input",{type:"text",placeholder:"Search for a Pokemon!"})),r.a.createElement("div",{className:"main"},r.a.createElement(E,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.b3418436.chunk.js.map