(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,a){},38:function(e,t,a){e.exports=a(66)},43:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(33),i=a.n(l),r=(a(43),a(4)),c=a(5),o=a(7),m=a(6),d=a(2),u=a(8),h=(a(17),a(9)),g=a.n(h),p=a(1),v=a(34),b=a.n(v),E=(a(61),a(15)),f=a(13),y=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a={name:e.state.name,username:e.state.username,password:e.state.password};g.a.post("http://localhost:5000/register",null,{params:a}).then((function(t){console.log(t.status),200===t.status?(console.log("Account created"),e.setState({isRegistered:!0})):(console.log("Failed to register"),e.setState({flag:2}))})).catch((function(t){console.log(t),console.log("Failed to register!"),e.setState({flag:2})}))},e.state={name:"",username:"",password:"",isRegistered:Boolean,flag:Number},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.username,n=e.password,l=e.isRegistered,i=e.flag;return!0===l?s.a.createElement(E.a,{to:{pathname:"/login"}}):s.a.createElement("div",{className:"register"},s.a.createElement("h4",null,"Let's get started!"),s.a.createElement("div",{className:"row"},s.a.createElement("form",{className:"col s12",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{id:"name",type:"text",className:"validate",key:"name",name:"name",value:t,onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"name"},"Name"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{id:"email",type:"email",className:"validate",key:"username",name:"username",value:a,onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"email"},"Email"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{id:"password",type:"password",className:"validate",key:"password",name:"password",value:n,onChange:this.handleChange}),s.a.createElement("label",{htmlFor:"password"},"Password"))),2===i&&s.a.createElement("div",{className:"red-text"},"User already exists!"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action"},"Register",s.a.createElement("i",{className:"material-icons right"},"send")))))))}}]),t}(n.Component),N=a(37),w=function(e){return s.a.createElement("div",{className:"card-panel comment"},s.a.createElement("strong",null,e.author.substr(0,e.author.indexOf("@"))),s.a.createElement("span",{id:"comTime"},e.time.substr(e.time.indexOf("T")+1,e.time.indexOf(".")-e.time.indexOf("T")-1),s.a.createElement("span",null," "),e.time.substr(0,e.time.indexOf("T"))),s.a.createElement("div",{id:"comText"},e.text))},x=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a={text:e.state.text,username:e.props.username};console.log(a),g.a.post("http://localhost:5000/blogs/"+e.props.match.params.id,null,{params:a}).then((function(t){e.setState({text:""}),e.componentDidMount()}))},e.state={text:"",title:"",description:"",image:"",author:"",time:"",comments:[{text:"",time:"",author:""}]},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://localhost:5000/blogs/"+this.props.match.params.id).then((function(t){var a=t.data,n=a.comments.map((function(e,t){return{text:e.text,time:e.createdAt,author:e.author.username}})),s={title:a.title,description:a.description,image:a.image,author:a.author.username,time:a.createdAt,_id:a._id};e.setState(Object(N.a)({},s,{comments:n}))}))}},{key:"render",value:function(){var e=this.state.comments.map((function(e,t){return s.a.createElement(w,{key:t,text:e.text,time:e.time,author:e.author})})),t=this.state.text;return s.a.createElement("div",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12 m8"},s.a.createElement("div",{className:"card large viewCard"},s.a.createElement("div",{className:"card-image viewCardImage"},s.a.createElement("img",{alt:"Blog",src:this.state.image})),s.a.createElement("div",{className:"cardTitle"},s.a.createElement("span",{className:"card-title"},this.state.title)),s.a.createElement("div",{className:"cardAuthor"},s.a.createElement("div",null,s.a.createElement("strong",null,this.state.author.substr(0,this.state.author.indexOf("@")))),s.a.createElement("div",{className:"cardTime"},this.state.time.substr(this.state.time.indexOf("T")+1,this.state.time.indexOf(".")-this.state.time.indexOf("T")-1),s.a.createElement("span",null," "),this.state.time.substr(0,this.state.time.indexOf("T")))),s.a.createElement("div",{className:"card-content"},this.state.description))),s.a.createElement("div",{className:"col s12 m4"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12"},s.a.createElement("h5",null,"Comments")),s.a.createElement("form",{className:"col s12",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s8"},s.a.createElement("input",{id:"text",key:"text",type:"text",name:"text",value:t,onChange:this.handleChange,required:!0}),s.a.createElement("label",{htmlFor:"text"},"Add a comment")),s.a.createElement("div",{className:"input-field col s4 right"},null!=this.props.username?s.a.createElement("button",{style:{marginTop:"10px"},className:"btn-small waves-effect waves-light",type:"submit",name:"action"},s.a.createElement("i",{className:"material-icons"},"send")):s.a.createElement("div",null,s.a.createElement("button",{style:{marginTop:"10px"},className:"btn-small waves-effect waves-light",type:"submit",name:"action",disabled:!0},s.a.createElement("i",{className:"material-icons"},"send")),s.a.createElement("div",{className:"red-text"},"Login to comment on this post."))))),s.a.createElement("div",{className:"col s12"},e)))))}}]),t}(n.Component),O=function(e){var t="/blogs/"+e._id;return s.a.createElement("div",{className:"col s12 m4"},s.a.createElement("div",{className:"card small"},s.a.createElement("div",{className:"card-image"},s.a.createElement("img",{alt:"blog",src:e.image}),s.a.createElement("span",{className:"card-title textColor"},e.title)),s.a.createElement("div",{className:"card-content"},s.a.createElement("p",null,e.description)),s.a.createElement("div",{className:"card-action"},s.a.createElement(p.b,{to:t,className:"btn btn-small waves-effect waves-light"},"View post"),s.a.createElement("div",{className:"cardTime right"},s.a.createElement("div",null,s.a.createElement("strong",null,e.author)),e.time.substr(e.time.indexOf("T")+1,e.time.indexOf(".")-e.time.indexOf("T")-1),s.a.createElement("span",null," "),e.time.substr(0,e.time.indexOf("T"))))))},C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={blogs:[{title:"",description:"",image:"",author:"",time:"",id:""}]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://localhost:5000/blogs").then((function(t){var a=t.data.map((function(e,t){return{title:e.title,description:e.description,image:e.image,author:e.author.username,time:e.createdAt,_id:e._id}}));e.setState({blogs:a})}))}},{key:"render",value:function(){var e=this,t=this.state.blogs.map((function(e,t){return s.a.createElement(O,{key:t,title:e.title,description:e.description,image:e.image,author:e.author,time:e.time,_id:e._id})}));return s.a.createElement("div",{className:"row"},s.a.createElement(E.d,null,s.a.createElement(E.b,{path:"/blogs/:id",render:function(t){return s.a.createElement(x,Object.assign({},t,{username:e.props.username}))}}),s.a.createElement(E.b,{path:"/"},t)))}}]),t}(n.Component),S=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a={username:e.state.username,password:e.state.password};console.log(a),g.a.post("http://localhost:5000/login",null,{params:a,headers:{"Access-Control-Allow-Origin":"*"}}).then((function(t){200===t.status?(e.props.updateUser({loggedIn:!0,username:t.data}),localStorage.setItem("loggedIn",!0),localStorage.setItem("username",t.data)):(e.setState({flag:2}),console.log("Failed to log in"))})).catch((function(t){console.log("Failed to log in"),console.log(t),e.setState({flag:2})}))},e.state={username:"",password:"",flag:Number},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.flag;return!0===this.props.loggedIn?s.a.createElement(E.a,{to:{pathname:"/"}}):s.a.createElement("div",{className:"login"},s.a.createElement("h4",null,"Sign in"),s.a.createElement("div",{className:"row"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{id:"email",type:"email",className:"validate",key:"username",name:"username",value:t,onChange:this.handleChange,required:!0}),s.a.createElement("label",{htmlFor:"email"},"Email"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{id:"password",type:"password",className:"validate",key:"password",name:"password",value:a,onChange:this.handleChange,required:!0}),s.a.createElement("label",{htmlFor:"password"},"Password"))),2===n&&s.a.createElement("div",{className:"red-text"},"Invalid Credentials"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action"},"Login",s.a.createElement("i",{className:"material-icons right"},"send")))))))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).logout=e.logout.bind(Object(d.a)(e)),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.logout()}},{key:"logout",value:function(){var e=this;console.log("logging out"),g.a.get("http://localhost:5000/logout").then((function(t){console.log(t.data),200===t.status&&(e.props.updateUser({loggedIn:!1,username:null}),localStorage.removeItem("loggedIn"),localStorage.removeItem("username"))})).catch((function(e){console.log("Logout error")}))}},{key:"render",value:function(){return s.a.createElement(E.a,{to:"/"})}}]),t}(n.Component),k=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a={title:e.state.title,description:e.state.description,image:e.state.image,username:e.props.username};console.log(a),g.a.post("http://localhost:5000/",null,{params:a}).then((function(t){e.setState({created:!0})}))},e.state={title:"",description:"",image:"",created:Boolean},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.image;return!0===e.created?s.a.createElement(E.a,{to:{pathname:"/"}}):s.a.createElement("div",{className:"create"},s.a.createElement("h4",null,"Create your blog!"),s.a.createElement("div",{className:"row"},s.a.createElement("form",{className:"col s12",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{id:"title",key:"title",type:"text",name:"title",value:t,onChange:this.handleChange,required:!0}),s.a.createElement("label",{htmlFor:"title"},"Title"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("input",{id:"image",key:"image",type:"text",name:"image",value:n,onChange:this.handleChange,required:!0}),s.a.createElement("label",{htmlFor:"title"},"Image URL"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("textarea",{id:"description",className:"materialize-textarea",key:"description",type:"text",name:"description",value:a,onChange:this.handleChange,required:!0}),s.a.createElement("label",{htmlFor:"descrption"},"Description"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action"},"Submit",s.a.createElement("i",{className:"material-icons right"},"send")))))))}}]),t}(n.Component),I=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"aboutOuter"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12 m12"},s.a.createElement("div",{className:"card-panel teal"},s.a.createElement("span",{className:"white-text"},s.a.createElement("h4",{className:"white-text"},"A Definition of Supply Chain Logistics"),"Because so many organizations make up a supply chain, the logistics involved in getting products and services into the hands of the consumer can be mindboggling. Known as the backbone of global trade, supply chain logistics is a network of transportation, warehousing, and inventory. Supply chain logistics executives must know how to choose the most advantageous mode of transportation, how to design and set up a warehousing facility, how to control and manage inventory and assets, and how to set up an efficient logistics network while minimizing cost and delivering top-notch customer service.")))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12 m12"},s.a.createElement("div",{className:"card-panel teal"},s.a.createElement("span",{className:"white-text"},s.a.createElement("h4",{className:"white-text"},"Challenges of Supply Chain Logistics"),"Common supply chain logistics challenges include customer service, cost control, planning and risk management, supplier/partner relationship management, and talent. As companies become more meaning of supply chain logisticsglobal, however, they face the challenges of being flexible enough to successfully grow and expand into new markets in order to remain competitive. Today\u2019s supply chain logistics executives oversee and drive multiple supply chains and work tirelessly to meet the needs and expectations of customers and suppliers. Personalized offerings are helping them do so, but managing personalization in and of itself is a logistics challenge. Advanced supply chain management systems, customer relationship management systems, and Big Data are helping companies gain the visibility they need into their customers to make supply chain logistics efficient, cost-effective, and crowd-pleasing.")))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12 m12"},s.a.createElement("div",{className:"card-panel teal"},s.a.createElement("span",{className:"white-text"},s.a.createElement("h4",{className:"white-text"},"Customer Demands Affect Supply Chain Logistics"),"Certainly, supply chain logistics must run smoothly and efficiently enough to satisfy customers and suppliers. The challenge comes in when customer demands become taxing on the entire supply chain. In some cases, customers demand more transparency into the logistics processes themselves. They want to know where their orders are, how they are being fulfilled, and where the inventory is at each step of the lifecycle. Gaining and then sharing insight into each order and its associated item detail must happen in real time to appease customers, but doing so puts companies into binds when they don\u2019t have such transparency themselves.")))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12 m12"},s.a.createElement("div",{className:"card-panel teal"},s.a.createElement("span",{className:"white-text"},s.a.createElement("h4",{className:"white-text"},"Benefits of Inventory Management in Supply Chain Logistics"),"Controlling the supply chain often comes down to managing warehouses and inventory quickly and easily. Creating dynamic, cost-effective, productive warehouse, logistics, and inventory processes is more feasible when supply chain logistics include best practices in inventory management. With detailed records of products and parts, organizations protect their bottom line and keep costs in check. The best way to manage inventory and improve supply chain logistics is to implement inventory supply chain logistics via a tabletmanagement practices that include tracking inventory with data on barcode labels and asset tags. Inventory management systems virtually eliminate the data entry errors and shipping mistakes so often associated with manual inventory tracking practices. Better yet, inventory management systems with barcode scanners add the level of transparency needed to meet customer demands and to provide personalized offers and answers to customers. In fact, it is the insight provided by inventory management and tracking that helps supply chain logistics executives maintain effective supply chain visibility. With good supply chain visibility, organizations avoid shipment delays, supply chain disruptions, and revenue losses. Collaborative processes such as data sharing and demand planning across departments and business partners are reducing risk and closing gaps in visibility before they become issues.")))))}}]),t}(n.Component),T=function(){return s.a.createElement(I,null)},U=function(){return s.a.createElement(y,null)},D=function(e){return s.a.createElement(E.d,null,s.a.createElement(E.b,{path:"/about",component:T}),e.username&&s.a.createElement(E.b,{path:"/create",render:function(){return s.a.createElement(k,{username:e.username})}}),s.a.createElement(E.b,{path:"/register",component:U}),s.a.createElement(E.b,{path:"/login",render:function(){return s.a.createElement(S,{loggedIn:e.loggedIn,updateUser:e.updateUser})}}),s.a.createElement(E.b,{path:"/logout",render:function(){return s.a.createElement(j,{updateUser:e.updateUser})}}),s.a.createElement(E.b,{path:"/",render:function(){return s.a.createElement(C,{username:e.username})}}))},A=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={loggedIn:!1,username:null},e.getUser=e.getUser.bind(Object(d.a)(e)),e.componentDidMount=e.componentDidMount.bind(Object(d.a)(e)),e.updateUser=e.updateUser.bind(Object(d.a)(e)),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector(".sidenav");b.a.Sidenav.init(e,{edge:"left",inDuration:250});this.setState({loggedIn:localStorage.getItem("loggedIn"),username:localStorage.getItem("username")})}},{key:"updateUser",value:function(e){this.setState(e)}},{key:"getUser",value:function(){var e=this;g.a.get("http://localhost:5000/isloggedin").then((function(t){t.data.user?(console.log("Get User: There is a user saved in the server session: "),e.setState({loggedIn:!0,username:t.data.user.username})):e.setState({loggedIn:!1,username:null})}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("nav",{className:"teal"},s.a.createElement("div",{className:"nav-wrapper"},s.a.createElement(p.b,{to:"/",className:"brand-logo"},"SupplyChain",s.a.createElement("i",{className:"navIcons material-icons"},"airport_shuttle")),s.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},s.a.createElement("li",null,"  ",this.state.loggedIn&&s.a.createElement("div",{style:{margin:"0 20px"}},s.a.createElement("span",{className:"new badge red userSpan","data-badge-caption":""},this.state.username.substr(0,this.state.username.indexOf("@"))))),s.a.createElement("li",null,s.a.createElement(p.b,{exact:!0,activeStyle:{backgroundColor:"#008580"},to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(p.b,{exact:!0,activeStyle:{backgroundColor:"#008580"},to:"/about"},"About")),this.state.loggedIn&&s.a.createElement("li",null,s.a.createElement(p.b,{exact:!0,activeStyle:{backgroundColor:"#008580"},to:"/create"},"Create")),this.state.loggedIn&&s.a.createElement("li",null,s.a.createElement(p.b,{exact:!0,activeStyle:{backgroundColor:"#008580"},to:"/logout"},"Logout")),!this.state.loggedIn&&s.a.createElement("li",null,s.a.createElement(p.b,{exact:!0,activeStyle:{backgroundColor:"#008580"},to:"/register"},"Register")),!this.state.loggedIn&&s.a.createElement("li",null,s.a.createElement(p.b,{exact:!0,activeStyle:{backgroundColor:"#008580"},to:"/login"},"Login"))),s.a.createElement("ul",{id:"slide-out",className:"sidenav"},s.a.createElement("li",null,"  ",this.state.loggedIn&&s.a.createElement("div",{style:{margin:"0 20px"}},s.a.createElement("span",{className:"new badge red userSpan","data-badge-caption":""},this.state.username.substr(0,this.state.username.indexOf("@"))))),s.a.createElement("li",null,s.a.createElement(p.b,{exact:!0,activeStyle:{backgroundColor:"#008580"},to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(p.b,{exact:!0,activeStyle:{backgroundColor:"#008580"},to:"/about"},"About")),this.state.loggedIn&&s.a.createElement("li",null,s.a.createElement(p.b,{exact:!0,activeStyle:{backgroundColor:"#008580"},to:"/create"},"Create")),this.state.loggedIn&&s.a.createElement("li",null,s.a.createElement(p.b,{exact:!0,activeStyle:{backgroundColor:"#008580"},to:"/logout"},"Logout")),!this.state.loggedIn&&s.a.createElement("li",null,s.a.createElement(p.b,{exact:!0,activeStyle:{backgroundColor:"#008580"},to:"/register"},"Register")),!this.state.loggedIn&&s.a.createElement("li",null,s.a.createElement(p.b,{exact:!0,activeStyle:{backgroundColor:"#008580"},to:"/login"},"Login"))),s.a.createElement("a",{href:"#!","data-target":"slide-out",className:"sidenav-trigger"},s.a.createElement("i",{className:"material-icons"},"menu")))),s.a.createElement("div",null,s.a.createElement(D,{updateUser:this.updateUser,loggedIn:this.state.loggedIn,username:this.state.username})))}}]),t}(n.Component);i.a.render(s.a.createElement(p.a,null,s.a.createElement(A,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.e53b5094.chunk.js.map