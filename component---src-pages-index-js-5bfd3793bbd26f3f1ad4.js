(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,a){"use strict";a.r(t);a(48);var n=a(7),r=a.n(n),i=a(183),o=a.n(i),l=a(0),c=a.n(l),s=a(185),u=a.n(s),m=(a(285),a(300)),d=a(301),g=a(299),h=a(149),f=a(142).default.div.withConfig({displayName:"CardPost__CardHover",componentId:"sc-1nlywk7-0"})([":hover{opacity:0.8;}"]),p=function(e){return c.a.createElement("article",null,c.a.createElement(f,null,c.a.createElement(h.Link,{to:e.link,style:{boxShadow:"none",textDecoration:"none",textColor:"none"}},c.a.createElement(m.a,{round:"small",elevation:"small",border:!0,margin:{top:"small",bottom:"medium",right:"small",left:"small"}},e.cover<1?"":c.a.createElement(m.a,{round:{size:"small",corner:"top"},basis:"medium",fill:!0,background:{image:"url("+e.cover+")"}}),c.a.createElement(m.a,{pad:"medium"},c.a.createElement(d.a,{level:"2"},e.title),c.a.createElement(g.a,{dangerouslySetInnerHTML:e.htmlExcerpt}),c.a.createElement(g.a,{margin:{top:"small"},size:"small"},e.date))))))},E=a(180);a.d(t,"pageQuery",function(){return v});var b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=u()(this,"props.data.site.siteMetadata.title"),t=u()(this,"props.data.site.siteMetadata.description"),a=u()(this,"props.data.allMarkdownRemark.edges");return c.a.createElement(E.a,{location:this.props.location},c.a.createElement(o.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),c.a.createElement("main",null,a.map(function(e){var t=e.node,a=u()(t,"frontmatter.title")||t.fields.slug;return c.a.createElement("div",{key:t.fields.slug},null===t.frontmatter.cover?c.a.createElement(p,{link:t.fields.slug,cover:"",title:a,date:t.frontmatter.date,htmlExcerpt:{__html:t.excerpt}}):c.a.createElement(p,{link:t.fields.slug,cover:t.frontmatter.cover.childImageSharp.fluid.src,title:a,date:t.frontmatter.date,htmlExcerpt:{__html:t.excerpt}}))})))},t}(l.Component),v=(t.default=b,"947223774")},145:function(e,t){e.exports={title:"Gatsby Starter Blog Grommet v2",description:"This is a DEMO site! SSG - Gatsby JS, UI - Grommet v2",siteUrl:"https://ganevru.github.io/gatsby-starter-blog-grommet/",footerText:"**2018**<br><br>Go here: site-config.js, and replace this text with your own",author:"Ivan Ganev",authorImage:"https://pbs.twimg.com/profile_images/986603715732934656/7A4Nt68k_400x400.jpg",authorBio:"Hello, I'm Ivan Ganev and I made this blog starter for Gatsby js using UI Grommet v2. <br><br>Repo of this starter: [github.com/ganevru/gatsby-starter-blog-grommet](https://github.com/ganevru/gatsby-starter-blog-grommet) <br><br>Go here: site-config.js, and replace this text with your own",social:{twitter:"ganevru",github:"ganevru",reddit:"ganevru"},googleAnalyticsTrackingId:"ADD YOUR TRACKING ID HERE",theme:"grommet",font:"",fontHeadings:"",brandColor:""}},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return g});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(143),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(150),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(35);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),g=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},156:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(52),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},180:function(e,t,a){"use strict";var n=a(189),r=a.n(n),i=a(296),o=a(300),l=a(142),c=a(197),s=a(0),u=a.n(s),m=a(145),d=a.n(m),g={global:{font:{family:d.a.font},colors:{brand:d.a.brandColor},breakpoints:{narrow:899}},heading:{font:{family:d.a.fontHeadings}}},h=a(297),f=a(299),p=a(298),E=a(295),b=a(194),v=a(195),y=a(196),w=function(){return u.a.createElement("div",null,u.a.createElement(o.a,{round:"small",pad:"medium",margin:"small",border:!0},u.a.createElement(o.a,{direction:"row"},u.a.createElement(o.a,{pad:{bottom:"small",left:"none",right:"small"},round:"large",height:"xsmall",width:"xsmall"},u.a.createElement(h.a,{fit:"contain",title:d.a.author,alt:d.a.author,src:d.a.authorImage})),u.a.createElement(o.a,null,u.a.createElement(f.a,{weight:"bold",size:"large",margin:{left:"small"}},d.a.author),u.a.createElement(o.a,{direction:"row"},d.a.social.twitter.length>1?u.a.createElement(p.a,{href:"https://twitter.com/"+d.a.social.twitter,icon:u.a.createElement(b.a,{size:"medium"})}):"",d.a.social.github.length>1?u.a.createElement(p.a,{href:"https://github.com/"+d.a.social.github,icon:u.a.createElement(v.a,{size:"medium"})}):"",d.a.social.reddit.length>1?u.a.createElement(p.a,{href:"https://reddit.com/user/"+d.a.social.reddit,icon:u.a.createElement(y.a,{size:"medium"})}):""))),u.a.createElement(f.a,{size:"small"},u.a.createElement(E.a,null,d.a.authorBio))))},x=function(){return u.a.createElement("footer",null,u.a.createElement(o.a,{background:"light-2",pad:"large",align:"center"},u.a.createElement(E.a,null,d.a.footerText)))},k=a(301),G=a(149),S=function(){return u.a.createElement("header",null,u.a.createElement(o.a,{margin:"small"},u.a.createElement(G.Link,{style:{boxShadow:"none",textDecoration:"none"},to:"/"},u.a.createElement(k.a,{textAlign:"center",color:"brand",margin:"small"},d.a.title)),u.a.createElement(f.a,{textAlign:"center",color:"brand"},d.a.description)))};function I(){var e=r()(["\n  img {\n    border-radius: 14px;\n    max-width: 100%;\n  }\n  body {\n    margin: 0;\n  }\n  a:hover {\n    opacity: 0.9;\n  }\n"]);return I=function(){return e},e}var C=Object(l.createGlobalStyle)(I()),q={grommet:c.grommet,hpe:c.hpe,dark:c.dark};t.a=function(e){return u.a.createElement(i.a,{theme:q[d.a.theme||"grommet"]},u.a.createElement(i.a,{theme:g},u.a.createElement(C,null),u.a.createElement(o.a,{direction:"column",align:"center"},u.a.createElement(o.a,{width:"xlarge"},u.a.createElement(S,null),u.a.createElement("main",null,u.a.createElement(o.a,{direction:"row-responsive"},u.a.createElement(o.a,{basis:"large",flex:"grow",direction:"row-responsive"},e.children),u.a.createElement(o.a,{basis:"medium"},u.a.createElement("aside",null,u.a.createElement(w,null))))))),u.a.createElement(x,null)))}},285:function(e,t,a){"use strict";a(286)("link",function(e){return function(t){return e(this,"a","href",t)}})},286:function(e,t,a){var n=a(6),r=a(17),i=a(26),o=/"/g,l=function(e,t,a,n){var r=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-5bfd3793bbd26f3f1ad4.js.map