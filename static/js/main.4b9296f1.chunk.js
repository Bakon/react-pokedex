(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),o=n.n(l),c=n(6),i=n(7),s=n(1),m=n(2),u=n(4),p=n(3),h=n(5),d=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={pokedexEntry:""},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(e.props.pokemon.species.url).then(function(e){return e.json()}).then(function(t){var n=t.flavor_text_entries,a=n.length<55?1:2;e.setState({pokedexEntry:n[a].flavor_text})})}},{key:"render",value:function(){var e=this.state.pokedexEntry,t=this.props.pokemon,n=t.name,a=t.index,l=t.types,o=t.stats,c=t.height,i=t.weight,s=t.abilities;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pokemonCardTop"},r.a.createElement("h3",null,"#",a.padStart(3,"00")),r.a.createElement("h3",null,n)),r.a.createElement("div",{className:"pokemonCardBot"},r.a.createElement("div",{className:"typing"},l.map(function(e){var t=e.type.name;return r.a.createElement("span",{className:t,key:t})})),r.a.createElement("div",{className:"pokemonSprite"},r.a.createElement("img",{src:"http://cursist38.reacollege.eu/sprites/".concat(a,".png"),alt:n+"sprite"}),r.a.createElement("img",{src:"http://cursist38.reacollege.eu/sprites/shiny/".concat(a,".png"),alt:n+"sprite"})),r.a.createElement("div",{className:"pokemonHeightWeight"},r.a.createElement("span",null,"Height: "+c/10+" Metre"),r.a.createElement("span",null,"Weight: "+i/10+" Kilogram")),r.a.createElement("div",{className:"pokemonEntry"},r.a.createElement("p",null,e)),r.a.createElement("div",{className:"pokemonStats"},o.map(function(e){return r.a.createElement("div",{className:e.stat.name,key:e.stat.name},r.a.createElement("span",null,e.stat.name),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{style:{width:e.base_stat/2+"%"},className:e.stat.name+"value"},r.a.createElement("span",null,e.base_stat))))})),r.a.createElement("div",{className:"pokemonAbilities"},s.reverse().map(function(e){return r.a.createElement("p",{key:e.ability.name},e.is_hidden?"Hidden ability: ".concat(e.ability.name):"Ability: ".concat(e.ability.name))})),r.a.createElement("p",null,"Click anywhere to close the screen!")))}}]),t}(r.a.Component);function f(e){var t=e.isShiny,n=e.index,a=e.name,l=e.types,o=t?"http://cursist38.reacollege.eu/sprites/shiny/".concat(n,".png"):"http://cursist38.reacollege.eu/sprites/".concat(n,".png");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pokemonCardTop"},r.a.createElement("h3",null,"#",n.padStart(3,"00")),r.a.createElement("h3",null,a)),r.a.createElement("div",{className:"pokemonCardBot"},r.a.createElement("div",{className:"typing"},l.map(function(e){var t=e.type.name;return r.a.createElement("span",{className:t,key:t})})),r.a.createElement("div",{className:"pokemonSprite"},r.a.createElement("img",{src:o,alt:a+"sprite"}))))}n(15),n(16);var g="https://pokeapi.co",E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={url:"".concat(g,"/api/v2/pokemon/?limit=50"),offset:0,allPokemon:null,isShiny:!1,highlightedPokemon:null},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=function(){return e.setState({loading:!0}),fetch(e.state.url).then(function(e){return e.json()}).then(function(t){var n=t.results.map(function(e){var t=e.name,n=e.url;return fetch(n).then(function(e){return e.json()}).then(function(e){return Object(i.a)({name:t,url:n,index:n.replace(/\/$/,"").split("/").pop()},e,{types:e.types.sort(function(e,t){return e.slot-t.slot})})})});return Promise.all(n).then(function(t){return e.setState({loading:!1}),t})})};window.addEventListener("scroll",function(n){e.state.loading||e.state.doneLoading||.85*document.documentElement.offsetHeight<=window.scrollY+window.innerHeight&&(e.setState(function(e){var t=e.offset+50;return Object(i.a)({},e,{offset:t,url:"".concat(g,"/api/v2/pokemon/?limit=50&offset=").concat(t)})}),t().then(function(t){return e.setState(function(e){return{doneLoading:0===t.length,allPokemon:[].concat(Object(c.a)(e.allPokemon),Object(c.a)(t))}})}))}),t().then(function(t){return e.setState({allPokemon:t})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.allPokemon,a=t.highlightedPokemon,l=t.isShiny;return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"header"},r.a.createElement("h3",{onClick:function(){return e.setState({highlightedPokemon:null})}},"Pokedex"),r.a.createElement("button",{onClick:function(){return e.setState({isShiny:!l})}},"Toggle Shinies!"),r.a.createElement("a",{href:"https://github.com/julicolo/react-pokedex",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{viewBox:"0 0 16 16",version:"1.1"},r.a.createElement("path",{color:"white",fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"})))),r.a.createElement("div",{className:"main",onClick:function(t){null!==a&&e.setState({highlightedPokemon:null})}},a?r.a.createElement("div",{className:"highlighted"},r.a.createElement(d,{isShiny:l,pokemon:a})):null,n?n.map(function(t){return r.a.createElement("div",{className:"pokemonCard",key:t.name,onClick:function(){return e.setState({highlightedPokemon:t})}},r.a.createElement(f,Object.assign({isShiny:l},t)))}):r.a.createElement("h2",null,"Loading Pokedex")))}}]),t}(r.a.Component);o.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.4b9296f1.chunk.js.map