(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),i=(a(22),a(5)),m=a(6),s=a(8),o=a(7),d=a(9),u=a(31),p=a(32),h=a(29),E=a(27),b=a(30),N=function(){return l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(b.a,{to:"/create"},"Nuevo Proyecto")),l.a.createElement("li",null," ",l.a.createElement(b.a,{to:"/"},"Salir")),l.a.createElement("li",null," ",l.a.createElement(b.a,{to:"/",className:"btn btn-floating teal lighten-1"},"NN")))},g=function(){return l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement(b.a,{to:"/signup"},"Reg\xedstrate")),l.a.createElement("li",null,l.a.createElement(b.a,{to:"/signin"},"Iniciar sesi\xf3n")))},v=function(){return l.a.createElement("nav",{className:"nav-wrapper teal darken-3"},l.a.createElement("div",{className:"container"},l.a.createElement(E.a,{to:"/",className:"brand-logo"}," ","Denuncia App"," "),l.a.createElement(N,null),l.a.createElement(g,null)))},f=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Notificaciones"))},y=function(){return l.a.createElement("div",{className:"project-list section"},l.a.createElement("div",{className:"card z-depth-0 project-summary"},l.a.createElement("div",{className:"card-content grey-text text-darken-3"},l.a.createElement("span",{className:"card-title "},"Project title"),l.a.createElement("p",null,"Posted by Camilo Kosniowski"),l.a.createElement("p",{className:"grey-text"},"3rd September, 2am"))),l.a.createElement("div",{className:"card z-depth-0 project-summary"},l.a.createElement("div",{className:"card-content grey-text text-darken-3"},l.a.createElement("span",{className:"card-title "},"Project title"),l.a.createElement("p",null,"Posted by Camilo Kosniowski"),l.a.createElement("p",{className:"grey-text"},"3rd September, 2am"))),l.a.createElement("div",{className:"card z-depth-0 project-summary"},l.a.createElement("div",{className:"card-content grey-text text-darken-3"},l.a.createElement("span",{className:"card-title "},"Project title"),l.a.createElement("p",null,"Posted by Camilo Kosniowski"),l.a.createElement("p",{className:"grey-text"},"3rd September, 2am"))),l.a.createElement("div",{className:"card z-depth-0 project-summary"},l.a.createElement("div",{className:"card-content grey-text text-darken-3"},l.a.createElement("span",{className:"card-title "},"Project title"),l.a.createElement("p",null,"Posted by Camilo Kosniowski"),l.a.createElement("p",{className:"grey-text"},"3rd September, 2am"))))},j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"dashboard container "},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m6"}),l.a.createElement(y,null),l.a.createElement("div",{className:"col s12 m5 offset-m1"}),l.a.createElement(f,null)))}}]),t}(n.Component),C=function(e){var t=e.match.params.id;return l.a.createElement("div",{className:"container section project-details"},l.a.createElement("div",{className:"card z-depth-0"},l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title"},"Project title - ",t),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?")),l.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},l.a.createElement("div",null,"Posted by The Net Ninja"),l.a.createElement("div",null,"2nd September, 2am"))))},w=a(10),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(w.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},l.a.createElement("h5",{className:"grey-text text-darken-3"},"Inicia Sesi\xf3n"),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"email"},"Correo Electr\xf3nico"),l.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"password"},"Contrase\xf1a"),l.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("button",{className:"btn teal lighten-1 z-depth-0"},"Ingresar"))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(w.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},l.a.createElement("h5",{className:"grey-text text-darken-3"},"Reg\xedstrate"),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"email"},"Correo Electr\xf3nico"),l.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"password"},"Contrase\xf1a"),l.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"firstName"},"Nombres"),l.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{htmlFor:"lastName"},"Apellidos"),l.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),l.a.createElement("div",{className:"input-field"},l.a.createElement("button",{className:"btn teal lighten-1 z-depth-0"},"Registro"))))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(w.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},l.a.createElement("h5",{className:"grey-text text-darken-3"},"Crear nuevo proyecto"),l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"title"},"Titulo del proyecto")),l.a.createElement("div",{className:"input-field"},l.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange}),l.a.createElement("label",{htmlFor:"content"},"Contenido del proyecto")),l.a.createElement("div",{className:"input-field"},l.a.createElement("button",{className:"btn teal lighten-1"},"Crear"))))}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",{className:"App "},l.a.createElement(v,null),l.a.createElement(p.a,null,l.a.createElement(h.a,{exact:!0,path:"/",component:j}),l.a.createElement(h.a,{path:"/project/:id",component:C}),l.a.createElement(h.a,{path:"/signin",component:O}),l.a.createElement(h.a,{path:"/signup",component:x}),l.a.createElement(h.a,{path:"/create",component:k}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.bfaf473d.chunk.js.map