(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{37:function(t,e,s){},38:function(t,e,s){},39:function(t,e,s){},40:function(t,e,s){},41:function(t,e,s){},60:function(t,e,s){},61:function(t,e,s){},62:function(t,e,s){},63:function(t,e,s){},69:function(t,e,s){},70:function(t,e,s){},71:function(t,e,s){},72:function(t,e,s){"use strict";s.r(e);var n=s(0),o=s(1),a=s(30),r=s.n(a),c=s(8),i=s(2),l=s(10),d=s(11),j=s(13),p=s(12),b=(s(37),function(t){var e=t.changeFilter;return Object(n.jsx)("div",{className:"Search",children:Object(n.jsx)("input",{type:"text",placeholder:"Search",onChange:function(t){return e(t.target.value)}})})}),m=(s(38),function(t){var e=t.setFilterSort,s=t.setFilterType,o=t.setFilterBest;return Object(n.jsxs)("div",{className:"Sort",children:[Object(n.jsxs)("select",{onChange:function(t){return e(t.target.value)},children:[Object(n.jsx)("option",{value:"",children:"Alphabetically"}),Object(n.jsx)("option",{value:"az",children:"a-z"}),Object(n.jsx)("option",{value:"za",children:"z-a"})]}),Object(n.jsxs)("select",{onChange:function(t){return s(t.target.value)},children:[Object(n.jsx)("option",{value:"",children:"Type"}),Object(n.jsx)("option",{value:"psychic",children:"psychic"}),Object(n.jsx)("option",{value:"electric",children:"electric"}),Object(n.jsx)("option",{value:"rock",children:"rock"}),Object(n.jsx)("option",{value:"poison",children:"poison"}),Object(n.jsx)("option",{value:"normal",children:"normal"}),Object(n.jsx)("option",{value:"fire",children:"fire"}),Object(n.jsx)("option",{value:"bug",children:"bug"}),Object(n.jsx)("option",{value:"ice",children:"ice"}),Object(n.jsx)("option",{value:"grass",children:"grass"}),Object(n.jsx)("option",{value:"water",children:"water"}),Object(n.jsx)("option",{value:"fairy",children:"fairy"}),Object(n.jsx)("option",{value:"ground",children:"ground"}),Object(n.jsx)("option",{value:"dragon",children:"dragon"}),Object(n.jsx)("option",{value:"ghost",children:"ghost"}),Object(n.jsx)("option",{value:"fighting",children:"fighting"})]}),Object(n.jsxs)("select",{onChange:function(t){return o(t.target.value)},children:[Object(n.jsx)("option",{value:"",children:"Best in"}),Object(n.jsx)("option",{value:"hp",children:"hp"}),Object(n.jsx)("option",{value:"attack",children:"attack"}),Object(n.jsx)("option",{value:"defense",children:"defense"}),Object(n.jsx)("option",{value:"specialA",children:"special attack"}),Object(n.jsx)("option",{value:"specialB",children:"sepcial defense"}),Object(n.jsx)("option",{value:"speed",children:"speed"})]})]})}),u=(s(39),function(t){var e=t.changeFilter,s=t.setFilterSort,o=t.setFilterType,a=t.setFilterBest;return Object(n.jsxs)("div",{className:"SearchAndSort",children:[Object(n.jsx)(b,{changeFilter:e}),Object(n.jsx)(m,{setFilterSort:s,setFilterBest:a,setFilterType:o})]})}),h=s(20),O=(s(40),function(t){var e=t.name,s=t.order,a=t.type,r=t.img,c=t.id,i=t.height,l=t.weight,d=t.exp,j=t.stats,p=t.moves,b=t.addToMyPokemon,m=t.removeFromMyPokemon,u=Object(o.useState)("about"),O=Object(h.a)(u,2),f=O[0],x=O[1],k=Object(o.useState)(!1),y=Object(h.a)(k,2),v=y[0],g=y[1];Object(o.useEffect)((function(){if(localStorage.getItem("mypokemon")){var t=localStorage.getItem("mypokemon");JSON.parse(t).includes(c)&&g(!0)}})),Object(o.useEffect)((function(){A()}),[f]);var A=function(){if("about"===f)return Object(n.jsxs)("table",{className:"About",children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Name:"}),Object(n.jsx)("td",{className:"About-bold",children:e})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Order:"}),Object(n.jsx)("td",{className:"About-bold",children:s})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Base Experience:"}),Object(n.jsx)("td",{className:"About-bold",children:d})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Heihgt:"}),Object(n.jsx)("td",{className:"About-bold",children:i})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Weihgt:"}),Object(n.jsx)("td",{className:"About-bold",children:l})]})]});if("stats"===f)return Object(n.jsxs)("table",{className:"About",children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"HP:"}),Object(n.jsx)("td",{className:"About-bold",children:j[0].base_stat})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Attack:"}),Object(n.jsx)("td",{className:"About-bold",children:j[1].base_stat})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Defense:"}),Object(n.jsx)("td",{className:"About-bold",children:j[2].base_stat})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Special Attack:"}),Object(n.jsx)("td",{className:"About-bold",children:j[3].base_stat})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Special Defense:"}),Object(n.jsx)("td",{className:"About-bold",children:j[4].base_stat})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Speed:"}),Object(n.jsx)("td",{className:"About-bold",children:j[5].base_stat})]})]});if("moves"===f){for(var t=[],o=0;o<14;o++)p[o]&&t.push(p[o].move.name);return Object(n.jsx)("div",{className:"Moves",children:t.map((function(t){return Object(n.jsx)("p",{children:t})}))})}};return Object(n.jsxs)("div",{className:"Pokemon-card",children:[Object(n.jsxs)("div",{className:"Pokemon-card-side Pokemon-card-side-front",children:[Object(n.jsx)("h3",{children:e}),Object(n.jsx)("img",{src:r,alt:e}),Object(n.jsxs)("p",{children:["type : ",a]})]}),Object(n.jsxs)("div",{className:"Pokemon-card-side Pokemon-card-side-back",children:[Object(n.jsxs)("ul",{className:"Pokemon-card-menu",children:[Object(n.jsx)("li",{onClick:function(){return x("about")},children:"About"}),Object(n.jsx)("li",{onClick:function(){return x("stats")},children:"Stats"}),Object(n.jsx)("li",{onClick:function(){return x("moves")},children:"Moves"})]}),Object(n.jsx)("div",{children:A()}),v?Object(n.jsx)("button",{className:"Pokemon-card-btn",onClick:function(){return m(c)},children:"Remove From My Pokemon"}):Object(n.jsx)("button",{className:"Pokemon-card-btn",onClick:function(){return b(c)},children:"Add to My Pokemon"})]})]})}),f=(s(41),function(){return Object(n.jsx)("div",{className:"loader"})}),x=s(15),k=s.n(x),y=(s(60),function(t){Object(j.a)(s,t);var e=Object(p.a)(s);function s(t){var o;return Object(l.a)(this,s),(o=e.call(this,t)).changeFilter=function(t){o.setState({filter:t})},o.addToMyPokemon=function(t){if(localStorage.getItem("mypokemon")){var e=localStorage.getItem("mypokemon"),s=JSON.parse(e);s.push(t),localStorage.setItem("mypokemon",JSON.stringify(s))}else localStorage.setItem("mypokemon",JSON.stringify([t]));window.location.reload()},o.removeFromMyPokemon=function(t){var e=localStorage.getItem("mypokemon"),s=JSON.parse(e).filter((function(e){return e!==t}));localStorage.setItem("mypokemon",JSON.stringify(s)),window.location.reload(!1)},o.setFilterSort=function(t){o.setState({sortAbc:t})},o.setFilterType=function(t){o.setState({sortType:t})},o.setFilterBest=function(t){o.setState({sortBest:t})},o.renderPokemons=function(){var t=[];return o.state.pokemons&&o.state.pokemons.forEach((function(e){t.push(Object(n.jsx)(O,{name:e.name,type:e.types[0].type.name,img:e.sprites.front_default,id:e.id,height:e.height,weight:e.weight,exp:e.base_experience,addToMyPokemon:o.addToMyPokemon,removeFromMyPokemon:o.removeFromMyPokemon,stats:e.stats,moves:e.moves,order:e.order},e.id))})),t=t.sort((function(t,e){return t.props.name.localeCompare(e.props.name)})),o.state.sortAbc&&(t="az"===o.state.sortAbc?t.sort((function(t,e){return t.props.name.localeCompare(e.props.name)})):t.sort((function(t,e){return e.props.name.localeCompare(t.props.name)}))),o.state.sortType&&(t=t.filter((function(t){return t.props.type===o.state.sortType}))),o.state.sortBest&&("hp"===o.state.sortBest&&(t=t.sort((function(t,e){return e.props.stats[0].base_stat-t.props.stats[0].base_stat}))),"attack"===o.state.sortBest&&(t=t.sort((function(t,e){return e.props.stats[1].base_stat-t.props.stats[1].base_stat}))),"defense"===o.state.sortBest&&(t=t.sort((function(t,e){return e.props.stats[2].base_stat-t.props.stats[2].base_stat}))),"specialA"===o.state.sortBest&&(t=t.sort((function(t,e){return e.props.stats[3].base_stat-t.props.stats[3].base_stat}))),"specialB"===o.state.sortBest&&(t=t.sort((function(t,e){return e.props.stats[4].base_stat-t.props.stats[4].base_stat}))),"speed"===o.state.sortBest&&(t=t.sort((function(t,e){return e.props.stats[5].base_stat-t.props.stats[5].base_stat})))),o.state.filter&&(t=t.filter((function(t){return t.props.name.toLowerCase().includes(o.state.filter.toLowerCase())}))),t},o.state={pokemons:[],dataLoaded:!1,filter:"",sortAbc:"",sortType:"",sortBest:""},o}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var t=this,e=[];k()('https://pokeapi.co/api/v2/pokemon?limit=200"').then((function(t){return t.data.results.forEach((function(t){k()("".concat(t.url)).then((function(t){return e.push(t.data)}))}))})),setTimeout((function(){t.setState({pokemons:e,dataLoaded:!0})}),800)}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"PokemonList",children:[Object(n.jsx)(u,{changeFilter:this.changeFilter,setFilterSort:this.setFilterSort,setFilterType:this.setFilterType,setFilterBest:this.setFilterBest}),Object(n.jsx)("div",{className:"PokemonList-render",children:this.state.dataLoaded?Object(n.jsx)("div",{className:"PokemonList-render-pokemons",children:this.renderPokemons()}):Object(n.jsx)("div",{className:"PokemonList-render-loader",children:Object(n.jsx)(f,{})})})]})}}]),s}(o.Component)),v=(s(61),function(t){Object(j.a)(s,t);var e=Object(p.a)(s);function s(t){var n;return Object(l.a)(this,s),(n=e.call(this,t)).getBest=function(){if(n.props.myPokemons.length>0){var t=n.props.myPokemons.sort((function(t,e){return e.stats[0].base_stat-t.stats[0].base_stat}))[0].name,e=n.props.myPokemons.sort((function(t,e){return e.stats[1].base_stat-t.stats[1].base_stat}))[0].name,s=n.props.myPokemons.sort((function(t,e){return e.stats[2].base_stat-t.stats[2].base_stat}))[0].name,o=n.props.myPokemons.sort((function(t,e){return e.stats[3].base_stat-t.stats[3].base_stat}))[0].name,a=n.props.myPokemons.sort((function(t,e){return e.stats[4].base_stat-t.stats[4].base_stat}))[0].name,r=n.props.myPokemons.sort((function(t,e){return e.stats[5].base_stat-t.stats[5].base_stat}))[0].name;n.setState({hp:t,attack:e,defense:s,specialA:o,specialD:a,speed:r})}},n.getAverage=function(){if(n.props.myPokemons.length>1){var t=n.props.myPokemons.reduce((function(t,e){return t.stats[0].base_stat+e.stats[0].base_stat}))/n.props.myPokemons.length,e=n.props.myPokemons.reduce((function(t,e){return e.stats[1].base_stat+t.stats[1].base_stat}))/n.props.myPokemons.length,s=n.props.myPokemons.reduce((function(t,e){return e.stats[2].base_stat+t.stats[2].base_stat}))/n.props.myPokemons.length,o=(n.props.myPokemons.reduce((function(t,e){return e.stats[3].base_stat+t.stats[3].base_stat})),s/n.props.myPokemons.length),a=n.props.myPokemons.reduce((function(t,e){return e.stats[4].base_stat+t.stats[4].base_stat}))/n.props.myPokemons.length,r=n.props.myPokemons.reduce((function(t,e){return e.stats[5].base_stat+t.stats[5].base_stat}));n.props.myPokemons.length;n.setState({Ahp:t,Aattack:e,Adefense:s,AspecialA:o,AspecialD:a,Aspeed:r})}else 1===n.props.myPokemons.length&&(n.setState({Ahp:n.props.myPokemons[0].stats[0].base_stat,Aattack:n.props.myPokemons[0].stats[1].base_stat,Adefense:n.props.myPokemons[0].stats[2].base_stat,AspecialA:n.props.myPokemons[0].stats[3].base_stat,AspecialD:n.props.myPokemons[0].stats[4].base_stat,Aspeed:n.props.myPokemons[0].stats[5].base_stat}),console.log(n.props.myPokemons))},n.state={hp:"",attack:"",defense:"",specialA:"",specialD:"",speed:"",Ahp:0,Aattack:0,Adefense:0,AspecialA:0,AspecialD:0,Aspeed:0},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){t.getBest(),t.getAverage()}),500)}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"Details",children:[Object(n.jsx)("h2",{className:"Details-headline",children:"My Pokemon Stats"}),Object(n.jsxs)("div",{className:"Details-tables",children:[Object(n.jsxs)("table",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"HP AVERAGE "}),Object(n.jsx)("td",{children:this.state.Ahp})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"ATTACK AVERAGE "}),Object(n.jsx)("td",{children:this.state.Aattack})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"DEFENSE AVERAGE "}),Object(n.jsx)("td",{children:this.state.Adefense})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"SPECIAL ATTACK AVERAGE "}),Object(n.jsx)("td",{children:this.state.AspecialA})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"SPECIAL DEFENSE AVERAGE "}),Object(n.jsx)("td",{children:this.state.AspecialD})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"SPEED AVERAGE "}),Object(n.jsx)("td",{children:this.state.Aspeed})]})]}),Object(n.jsxs)("table",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"HIGHEST SPEED"}),Object(n.jsx)("td",{children:this.state.speed})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"HIGHEST ATTACK"}),Object(n.jsx)("td",{children:this.state.attack})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"HIGHEST DEFENSE"}),Object(n.jsx)("td",{children:this.state.defense})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"HIGHEST SPECIAL ATTACK"}),Object(n.jsx)("td",{children:this.state.specialA})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"HIGHEST SPECIAL DEFENSE"}),Object(n.jsx)("td",{children:this.state.specialD})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"HIGHEST SPEED"}),Object(n.jsx)("td",{children:this.state.speed})]})]})]})]})}}]),s}(o.Component)),g=(s(62),function(t){Object(j.a)(s,t);var e=Object(p.a)(s);function s(t){var o;return Object(l.a)(this,s),(o=e.call(this,t)).addToMyPokemon=function(t){console.log("fake")},o.removeFromMyPokemon=function(t){var e=localStorage.getItem("mypokemon"),s=JSON.parse(e).filter((function(e){return e!==t}));localStorage.setItem("mypokemon",JSON.stringify(s)),window.location.reload(!1)},o.changeFilter=function(t){o.setState({filter:t})},o.setFilterSort=function(t){o.setState({sortAbc:t})},o.setFilterType=function(t){o.setState({sortType:t})},o.setFilterBest=function(t){o.setState({sortBest:t})},o.renderMyPokemons=function(){var t=[];return o.state.myPokemons&&o.state.myPokemons.forEach((function(e){t.push(Object(n.jsx)(O,{name:e.name,type:e.types[0].type.name,img:e.sprites.front_default,id:e.id,height:e.height,weight:e.weight,exp:e.base_experience,addToMyPokemon:o.addToMyPokemon,removeFromMyPokemon:o.removeFromMyPokemon,stats:e.stats,moves:e.moves,order:e.order},e.id))})),t=t.sort((function(t,e){return t.props.name.localeCompare(e.props.name)})),o.state.sortAbc&&(t="az"===o.state.sortAbc?t.sort((function(t,e){return t.props.name.localeCompare(e.props.name)})):t.sort((function(t,e){return e.props.name.localeCompare(t.props.name)}))),o.state.sortType&&(t=t.filter((function(t){return t.props.type===o.state.sortType}))),o.state.sortBest&&("hp"===o.state.sortBest&&(t=t.sort((function(t,e){return e.props.stats[0].base_stat-t.props.stats[0].base_stat}))),"attack"===o.state.sortBest&&(t=t.sort((function(t,e){return e.props.stats[1].base_stat-t.props.stats[1].base_stat}))),"defense"===o.state.sortBest&&(t=t.sort((function(t,e){return e.props.stats[2].base_stat-t.props.stats[2].base_stat}))),"specialA"===o.state.sortBest&&(t=t.sort((function(t,e){return e.props.stats[3].base_stat-t.props.stats[3].base_stat}))),"specialB"===o.state.sortBest&&(t=t.sort((function(t,e){return e.props.stats[4].base_stat-t.props.stats[4].base_stat}))),"speed"===o.state.sortBest&&(t=t.sort((function(t,e){return e.props.stats[5].base_stat-t.props.stats[5].base_stat})))),o.state.filter&&(t=t.filter((function(t){return t.props.name.toLowerCase().includes(o.state.filter.toLowerCase())}))),t},o.state={myPokemons:[],dataLoaded:!1,filter:"",sortAbc:"",sortType:"",sortBest:""},o}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var t=this,e=[];if(localStorage.getItem("mypokemon")){var s=localStorage.getItem("mypokemon");JSON.parse(s).forEach((function(t){k()("https://pokeapi.co/api/v2/pokemon/".concat(t)).then((function(t){return e.push(t.data)}))}))}setTimeout((function(){t.setState({myPokemons:e,dataLoaded:!0})}),300)}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"MyPokemon",children:[Object(n.jsx)(u,{changeFilter:this.changeFilter,setFilterSort:this.setFilterSort,setFilterType:this.setFilterType,setFilterBest:this.setFilterBest}),Object(n.jsx)(v,{myPokemons:this.state.myPokemons}),Object(n.jsx)("div",{className:"MyPokemon-render",children:this.state.dataLoaded?Object(n.jsx)("div",{className:"MyPokemon-render-pokemons",children:this.renderMyPokemons()}):Object(n.jsx)("div",{className:"MyPokemon-render-loader",children:Object(n.jsx)(f,{})})}),Object(n.jsx)("div",{children:0===this.state.myPokemons.length?Object(n.jsx)("div",{className:"MyPokemon-empty",children:"You dont have any items!"}):null})]})}}]),s}(o.Component)),A=s.p+"static/media/logo.fb896dd0.png",P=(s(63),function(){Object(o.useEffect)((function(){t()}),[]);var t=function(){if(localStorage.getItem("mypokemon")){var t=localStorage.getItem("mypokemon");return JSON.parse(t).length}return 0};return Object(n.jsxs)("div",{className:"Menu",children:[Object(n.jsx)(c.b,{exact:!0,to:"/",children:Object(n.jsx)("img",{src:A,alt:"Logo",className:"Menu-logo"})}),Object(n.jsxs)("ul",{className:"Menu-list",children:[Object(n.jsx)(c.b,{exact:!0,to:"/",activeClassName:"Menu-active",children:"Pokemon List"}),Object(n.jsxs)(c.b,{to:"/my",activeClassName:"Menu-active",children:["My Pokemon",Object(n.jsx)("span",{className:"Menu-counter",children:t()})]})]})]})}),S=(s(69),function(){return Object(n.jsx)("div",{className:"Footer",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("i",{className:"far fa-copyright"})," Copyright 2021 Ivan M. All Rights Reserved"]})})}),_=(s(70),function(){return Object(n.jsxs)("div",{className:"PokemonEncyclopedia",children:[Object(n.jsx)(P,{}),Object(n.jsxs)(i.c,{children:[Object(n.jsx)(i.a,{exact:!0,path:"/",component:y}),Object(n.jsx)(i.a,{path:"/my",component:g})]}),Object(n.jsx)(S,{})]})});s(71);r.a.render(Object(n.jsx)(c.a,{children:Object(n.jsx)(_,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.3de1ac39.chunk.js.map