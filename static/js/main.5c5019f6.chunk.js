(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n.n(i),c=n(4),r=n(5),s=n(8),l=n(6),o=n(1),m=n.n(o),u=n(7),d=(n(13),n(0)),j=function(e){var t=e.images,n=e.step,i=void 0===n?3:n,a=e.frameSize,c=void 0===a?3:a,r=e.itemWidth,s=void 0===r?130:r,l=e.animationDuration,m=void 0===l?1e3:l,j=e.infinite,h=void 0!==j&&j,b=Object(o.useState)(1),p=Object(u.a)(b,2),g=p[0],x=p[1],f=t.length-c+1,O=g*s-s,v=!h&&g<=1,S=!h&&g>=f,y=function(e){x(e<1?h?f:1:e>f?h?g<f?f:1:f:e)};return Object(d.jsxs)("div",{className:"Carousel",children:[Object(d.jsx)("ul",{className:"Carousel__list",style:{maxWidth:"".concat(c*s,"px"),transform:"translateX(-".concat(O,"px)"),transitionDuration:"".concat(m,"ms")},children:t.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsx)("img",{width:s,src:e,alt:String(t+1)})},e)}))}),Object(d.jsxs)("div",{className:"Carousel__controls",children:[Object(d.jsx)("button",{type:"button",disabled:v,onClick:function(){return y(g-i)},children:"\u2b05\ufe0f"}),Object(d.jsx)("button",{type:"button",disabled:S,onClick:function(){return y(g+i)},"data-cy":"next",children:"\u27a1\ufe0f"})]})]})},h=(n(15),function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.images,i=t.step,a=t.frameSize,c=t.itemWidth,r=t.animationDuration,s=t.infinite;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(n.length," images")}),Object(d.jsx)("form",{className:"App__settings",children:Object(d.jsxs)("fieldset",{children:[Object(d.jsx)("legend",{children:"Settings:"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"step",children:"Step:"}),Object(d.jsx)("input",{id:"step",name:"step",type:"number",min:"1",max:n.length-1,value:i,onChange:function(t){e.setState({step:Number(t.currentTarget.value)})}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"step",children:"Frame size:"}),Object(d.jsx)("input",{id:"frameSize",name:"frameSize",type:"number",min:"1",max:n.length,value:a,onChange:function(t){e.setState({frameSize:Number(t.currentTarget.value)})}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"step",children:"Item width:"}),Object(d.jsx)("input",{id:"itemWidth",name:"itemWidth",type:"number",min:"1",value:c,onChange:function(t){e.setState({itemWidth:Number(t.currentTarget.value)})}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"step",children:"Animation duration:"}),Object(d.jsx)("input",{id:"animationDuration",name:"animationDuration",type:"number",min:"0",value:r,onChange:function(t){e.setState({animationDuration:Number(t.currentTarget.value)})}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"step",children:"Infinite:"}),Object(d.jsx)("input",{id:"infinite",name:"infinite",type:"checkbox",checked:s,onChange:function(t){e.setState({infinite:t.currentTarget.checked})}})]})]})}),Object(d.jsx)(j,{images:n,step:i,frameSize:a,itemWidth:c,animationDuration:r,infinite:s})]})}}]),n}(m.a.Component)),b=h;a.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5c5019f6.chunk.js.map