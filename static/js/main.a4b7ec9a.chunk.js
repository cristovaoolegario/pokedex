(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(17),s=n.n(a),o=(n(23),n(3)),i=n.n(o),u=n(5),l=n(4),j=(n(25),n(8),n(0)),p=function(e){var t,n=e.pokemon;return Object(j.jsxs)("div",{className:"GenericCard",children:[Object(j.jsxs)("div",{className:"PokemonAvatarWrapper",children:[Object(j.jsx)("h2",{className:"PokemonName",children:n.name}),Object(j.jsx)("img",{className:"PokemonAvatar",src:null!==(t=n.sprites.versions["generation-v"]["black-white"].animated.front_default)&&void 0!==t?t:n.sprites.versions["generation-v"]["black-white"].front_default,alt:n.name})]}),Object(j.jsxs)("div",{className:"PokemonDetails",children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("strong",{children:"Height"}),": ",10*n.height," cm"]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("strong",{children:"Weight"}),": ",n.weight/10," kg"]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("strong",{children:"Type"}),": ",n.types[0].type.name]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("strong",{children:"id"}),": ",n.id]})]})]},n.id)};p.defaultProps={};var d=p,b=n.p+"static/media/not-found.7a3a86d7.gif",h=function(e){var t=e.error;return Object(j.jsxs)("div",{className:"GenericCard",children:[Object(j.jsx)("p",{children:Object(j.jsx)("strong",{children:t})}),Object(j.jsx)("img",{src:b,alt:"notFoundImg"})]})};h.defaultProps={};var m=h,O=n(18),x=n.n(O),f="https://pokeapi.co/api/v2";function g(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(f,"/pokemon/").concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","Pok\xe9mon n\xe3o encontrado");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}n(46);var k=n.p+"static/media/pokeball.e57f7ae6.svg",N=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),s=Object(l.a)(a,2),o=s[0],p=s[1],b=Object(r.useState)(!1),h=Object(l.a)(b,2),O=h[0],x=h[1],f=Object(r.useState)(""),v=Object(l.a)(f,2),N=v[0],y=v[1];function P(){return(P=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),N){e.next=3;break}return e.abrupt("return");case 3:return x(!0),e.next=6,g(N);case 6:"string"===typeof(n=e.sent)?(p(n),c(null)):(c(n),p(null)),x(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Bem vindo \xe0 Pokedex!"}),Object(j.jsx)("p",{className:"Instructions",children:"Digite o nome ou a ID do pokemon!"}),Object(j.jsxs)("form",{className:"Form",onSubmit:function(e){return P.apply(this,arguments)},children:[Object(j.jsx)("input",{className:"Input",value:N,placeholder:"Nome ou ID do pokemon",onChange:function(e){y(e.target.value)}}),Object(j.jsx)("button",{className:"SearchButton",type:"submit",children:O?Object(j.jsx)(j.Fragment,{children:"Carregando...."}):Object(j.jsxs)(j.Fragment,{children:["Buscar"," ",Object(j.jsx)("img",{className:"ButtonIcon",src:k,alt:"pokeball"})," "]})})]}),n?Object(j.jsx)(d,{pokemon:n}):o&&Object(j.jsx)(m,{error:o})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),y()},8:function(e,t,n){}},[[47,1,2]]]);
//# sourceMappingURL=main.a4b7ec9a.chunk.js.map