(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(7),r=n.n(o),l=(n(13),n(1)),i=n(2),u=n(4),s=n(3),m=n(5),h=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(c)))).state={contactName:"",contactSurname:"",error:null},n.preventSubmit=function(t){t.preventDefault(),""!==n.state.contactName&&""!==n.state.contactSurname?(n.props.addContactFunction(n.state.contactName,n.state.contactSurname),n.setState({contactName:"",contactSurname:"",error:null})):n.setState({error:new Error("Fields cant be empty")})},n.handleNameChange=function(t){n.setState({contactName:t.target.value})},n.handleSurnameChange=function(t){n.setState({contactSurname:t.target.value})},n}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.preventSubmit},c.a.createElement("p",null,"Name",c.a.createElement("input",{value:this.state.contactName,onChange:this.handleNameChange})),c.a.createElement("p",null,"Surname",c.a.createElement("input",{value:this.state.contactSurname,onChange:this.handleSurnameChange})),c.a.createElement("button",null,"ADD"),this.state.error&&c.a.createElement("span",null,this.state.error.message))}}]),e}(a.Component),d=(n(15),function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:JSON.parse(localStorage.getItem("contacts")||"[]")},n.addContact=function(t,e){n.setState({contacts:n.state.contacts.concat({id:Date.now(),name:t,surname:e})})},n.removeContact=function(t){n.setState({contacts:n.state.contacts.filter(function(e){return t!==e.id})})},n}return Object(m.a)(e,t),Object(i.a)(e,[{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this;return c.a.createElement("div",null,c.a.createElement("h1",null,"Contact List App"),c.a.createElement(h,{addContactFunction:this.addContact}),c.a.createElement("div",null,c.a.createElement("h3",null,"Contact List"),this.state.contacts.map(function(e){return c.a.createElement("div",{key:e.id,className:"contactItem"},c.a.createElement("p",null,"Name: ".concat(e.name)),c.a.createElement("p",null,"Surname: ".concat(e.surname)),c.a.createElement("button",{onClick:function(){return t.removeContact(e.id)}},"Remove this contact"))})))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.b24e2552.chunk.js.map