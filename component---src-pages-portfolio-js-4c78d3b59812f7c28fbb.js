(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{261:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),o=a(59),n=a(255),i=a(253),l=(a(11),a(10),a(6),a(369),a(263)),s=a(5),p=a(22),u=a(8),d=a.n(u),m=a(73),b=a(254),I=a(256),j=c.a.createContext(null),g=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.variant,n=e.as,i=void 0===n?"img":n,l=Object(p.a)(e,["bsPrefix","className","variant","as"]),u=Object(m.b)(a,"card-img");return c.a.createElement(i,Object(s.a)({ref:t,className:d()(o?u+"-"+o:u,r)},l))}));g.displayName="CardImg",g.defaultProps={variant:null};var y=g,N=Object(I.a)("h5"),v=Object(I.a)("h6"),f=Object(b.a)("card-body"),w=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,n=e.bg,i=e.text,l=e.border,u=e.body,b=e.children,I=e.as,g=void 0===I?"div":I,y=Object(p.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),N=Object(m.b)(a,"card"),v=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:N+"-header"}}),[N]);return c.a.createElement(j.Provider,{value:v},c.a.createElement(g,Object(s.a)({ref:t},y,{className:d()(o,N,n&&"bg-"+n,i&&"text-"+i,l&&"border-"+l)}),u?c.a.createElement(f,null,b):b))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=y,w.Title=Object(b.a)("card-title",{Component:N}),w.Subtitle=Object(b.a)("card-subtitle",{Component:v}),w.Body=f,w.Link=Object(b.a)("card-link",{Component:"a"}),w.Text=Object(b.a)("card-text",{Component:"p"}),w.Header=Object(b.a)("card-header"),w.Footer=Object(b.a)("card-footer"),w.ImgOverlay=Object(b.a)("card-img-overlay");var D=w;var h=function(e){var t,r;function o(t){return e.call(this,t)||this}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.prototype.render=function(){var e=this.props.project,t=e.cardImg,r=e.cardTitle,o=e.cardDescription,n=a(370)("./"+t),i=Object.entries(this.props.project.button).filter((function(e){return!0===e[1].view})).map((function(e){return c.a.createElement("a",{key:e[1].copy,target:"_blank",href:e[1].url,rel:"noopener noreferrer"},c.a.createElement(l.a,{className:"card-button",size:"sm",variant:"primary"},e[1].copy))}));return c.a.createElement(D,{className:"portfolio-card"},c.a.createElement("br",null),c.a.createElement(D.Img,{variant:"top",src:n}),c.a.createElement(D.Body,null,c.a.createElement(D.Title,null,r),c.a.createElement(D.Text,null,o),i),c.a.createElement("br",null))},o}(r.Component);var M=function(e){var t,a;function r(t){return e.call(this,t)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.map((function(e){return c.a.createElement(h,{key:e.title,project:e})}));return c.a.createElement("div",{className:"portfolioCard-container"},e)},r}(r.Component),O=a(373);t.default=function(){return c.a.createElement(n.a,null,c.a.createElement(i.a,{title:"Portfolio"}),c.a.createElement("br",null),c.a.createElement("h3",null,"Personal Projects And Past Work"),c.a.createElement("br",null),c.a.createElement(M,{data:O}),c.a.createElement(o.a,{to:"/"},"Back to the homepage"))}},369:function(e,t,a){var r=a(2),c=a(257)(!0);r(r.S,"Object",{entries:function(e){return c(e)}})},370:function(e,t,a){var r={"./BlogApp.jpg":371,"./img-placeholder.svg":372};function c(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=o,e.exports=c,c.id=370},371:function(e,t,a){e.exports=a.p+"static/BlogApp-2cb09d6808faeff8f40b5dcccb7aaebb.jpg"},372:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjQsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9InVpa2l0X3BsYWNlaG9sZGVyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiDQoJIHk9IjBweCIgd2lkdGg9IjUwMHB4IiBoZWlnaHQ9IjUwMHB4IiB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTAwIDUwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cmVjdCB4PSItMC41IiB5PSIxIiBmaWxsPSIjRjhGOEY4IiB3aWR0aD0iNTAwLjI1IiBoZWlnaHQ9IjUwMCIvPg0KPGc+DQoJPHBhdGggZmlsbD0iIzc3Nzc3NyIgZD0iTTE4Mi4zMTUsMTk2Ljc1djEwNi41aDEzNS4zN3YtMTA2LjVIMTgyLjMxNUwxODIuMzE1LDE5Ni43NXogTTMwNi43OCwyOTEuNzAzSDE5My44NjR2LTgzLjQwNEgzMDYuNzgNCgkJVjI5MS43MDNMMzA2Ljc4LDI5MS43MDN6Ii8+DQoJPHBvbHlnb24gZmlsbD0iIzc3Nzc3NyIgcG9pbnRzPSIxOTkuNzE1LDI4Mi44NjUgMjIzLjA4OCwyNTguMjk1IDIzMS44NDcsMjYyLjA4OCAyNTkuNDc3LDIzMi42NjEgMjcwLjM1OCwyNDUuNjc2IA0KCQkyNzUuMjYyLDI0Mi43MTEgMzAxLjgyNywyODIuODY1IAkiLz4NCgk8Y2lyY2xlIGZpbGw9IiM3Nzc3NzciIGN4PSIyMjYuNzE5IiBjeT0iMjI5LjQxNyIgcj0iMTAuMjEiLz4NCjwvZz4NCjwvc3ZnPg0K"},373:function(e){e.exports=JSON.parse('[{"cardImg":"BlogApp.jpg","cardTitle":"Ruby on Rails Blog App","cardDescription":"Ruby on Rails, BDD, RSpec...","button":{"cta1":{"view":true,"copy":"Live Demo","url":"https://rails-chatapp.herokuapp.com"},"cta2":{"view":true,"copy":"Source Code","url":"https://github.com/aarias89/rails-app"},"cta3":{"view":true,"copy":"More Info","modalData":{"techs":["Ruby on Rails","Testing done with Rspec","Built using BDD methology","Action Cable - allows realtime comments/chat updates"],"howTo":{"task":{"name":"task name","directions":["step 1","step 2","..."]}},"longDescription":["This is a Ruby on Rails application using ActionCable built using Behavior Driven Development and MVC design pattern. Allows for realtime chat via websockets."]}}}},{"cardImg":"img-placeholder.svg","cardTitle":"JSON Obj 2","cardDescription":"Some Generic Description for Object 2","button":{"cta1":{"view":false,"copy":"Live Demo","url":"https://rails-chatapp.herokuapp.com"},"cta2":{"view":false,"copy":"Source Code","url":"#"},"cta3":{"view":false,"copy":"More Info","modalData":{"techs":[],"howTo":{"task":{"name":"task name","directions":["step 1","step 2","..."]}},"longDescription":[]}}}},{"cardImg":"img-placeholder.svg","cardTitle":"JSON Obj 3","cardDescription":"Some Generic Description for Object 3","button":{"cta1":{"view":false,"copy":"Live Demo","url":"https://rails-chatapp.herokuapp.com"},"cta2":{"view":false,"copy":"Source Code","url":"#"},"cta3":{"view":false,"copy":"More Info","modalData":{"techs":[],"howTo":{"task":{"name":"task name","directions":["step 1","step 2","..."]}},"longDescription":[]}}}}]')}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-4c78d3b59812f7c28fbb.js.map