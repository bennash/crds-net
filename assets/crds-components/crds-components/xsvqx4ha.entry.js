const t=window.CrdsComponents.h;import{a as e}from"./chunk-fef45e2a.js";import{a as r}from"./chunk-1d89c98b.js";class n{constructor(){this.env="prod",this.data=[]}componentWillLoad(){e.get(this.src||`https://crds-data.netlify.com/shared-footer/${this.env}.json`).then(t=>this.data=t.data)}renderElement(e){if(!e.path)return e.title;let r={target:e.path.match(/:\/\//)?"_blank":"",href:e.path};return e["automation-id"]&&(r["data-automation-id"]=e["automation-id"]),t("a",Object.assign({},r),e.img?t("img",{src:e.img,alt:e.title,title:e.title}):e.title)}renderGroups(e){const n=e.map(e=>e.children?t(r,null,t("p",null,e.title),t("ul",null,e.children.map(e=>t("li",null,this.renderElement(e))))):t("li",null,this.renderElement(e))),a=e.filter(t=>t.children).length>0?"Fragment":"ul";return t(a,null,n)}renderColumns(){return this.data.map(e=>t("div",{class:e.class},t("h5",null,this.renderElement(e)),this.renderGroups(e.children)))}render(){return 0===this.data.length?null:t("footer",null,t("div",{class:"container"},this.renderColumns()))}static get is(){return"shared-footer"}static get encapsulation(){return"shadow"}static get properties(){return{data:{state:!0},env:{type:String,attr:"env"},src:{type:String,attr:"src"}}}static get style(){return"footer{font-family:acumin-pro,helvetica,arial,sans-serif!important;font-weight:300!important;color:#737373;background-color:#e7e7e7;overflow:hidden;padding:3.125rem 0}footer .container{margin:0 auto;max-width:1170px}\@media only screen and (min-width:768px){footer .container{display:-ms-flexbox;display:flex}}footer .container div{padding-left:15px;padding-right:15px;margin-bottom:24px;vertical-align:top}\@media only screen and (min-width:768px){footer .container div{-ms-flex:1;flex:1;width:16.66667%}}footer .container div p{margin-bottom:0;font-weight:700}footer .container div ul{list-style-type:none;margin:0;padding-left:0}footer .container div.social-icons{padding-left:0}\@media only screen and (min-width:768px){footer .container div.social-icons{-ms-flex:2;flex:2;text-align:right;width:33.33333%}}footer .container div.social-icons li{display:inline}footer .container div.social-icons li a{-webkit-box-sizing:border-box;box-sizing:border-box;margin-left:.75rem;background:#737373;border-radius:50%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;height:36px;width:36px;padding:10px}footer .container div.social-icons li a img{max-width:100%}footer .container a{color:#737373;text-decoration:none}footer .container h5{font-size:16.1px!important;line-height:1.1;margin:12px 0}"}}export{n as SharedFooter};