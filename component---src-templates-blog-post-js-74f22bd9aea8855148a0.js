(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return w});var n=a(7),r=a.n(n),l=a(300),i=a(297),o=a(301),c=a(299),m=a(298),u=a(149),s=a(164),d=a(165),g=a(183),h=a.n(g),f=a(0),p=a.n(f),E=a(185),b=a.n(E),v=a(180),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=b()(this.props,"data.site.siteMetadata.title"),a=e.excerpt,n=this.props.pageContext,r=n.previous,g=n.next;return p.a.createElement(v.a,{location:this.props.location},p.a.createElement("div",null,p.a.createElement("article",null,p.a.createElement(l.a,{round:"small",margin:"small"},p.a.createElement(h.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:a}],title:e.frontmatter.title+" | "+t}),p.a.createElement("div",null,p.a.createElement("header",null,null===e.frontmatter.cover?"":p.a.createElement(l.a,{basis:"medium",fill:!0},p.a.createElement(i.a,{round:"small",fit:"cover",title:e.frontmatter.title,alt:e.frontmatter.title,src:e.frontmatter.cover.childImageSharp.fluid.src})),p.a.createElement(l.a,{pad:"medium"},p.a.createElement(o.a,{level:"1"},e.frontmatter.title),p.a.createElement(c.a,{margin:{bottom:"small"}},e.frontmatter.date)))),p.a.createElement(l.a,{pad:"medium"},p.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})))),p.a.createElement("aside",null,p.a.createElement(l.a,{direction:"row",justify:"center",gap:"large",margin:"large"},r&&p.a.createElement(u.Link,{to:r.fields.slug},p.a.createElement(m.a,{onClick:!0,icon:p.a.createElement(s.a,null),label:"Previous"})),g&&p.a.createElement(u.Link,{to:g.fields.slug},p.a.createElement(m.a,{onClick:!0,icon:p.a.createElement(d.a,null),label:"Next",reverse:!0}))))))},t}(p.a.Component);t.default=y;var w="4112036649"},145:function(e,t){e.exports={title:"Gatsby Starter Blog Grommet v2",description:"This is a DEMO site! SSG - Gatsby JS, UI - Grommet v2",siteUrl:"https://ganevru.github.io/gatsby-starter-blog-grommet/",footerText:"**2018**<br><br>Go here: site-config.js, and replace this text with your own",author:"Ivan Ganev",authorImage:"https://pbs.twimg.com/profile_images/986603715732934656/7A4Nt68k_400x400.jpg",authorBio:"Hello, I'm Ivan Ganev and I made this blog starter for Gatsby js using UI Grommet v2. <br><br>Repo of this starter: [github.com/ganevru/gatsby-starter-blog-grommet](https://github.com/ganevru/gatsby-starter-blog-grommet) <br><br>Go here: site-config.js, and replace this text with your own",social:{twitter:"ganevru",github:"ganevru",reddit:"ganevru"},googleAnalyticsTrackingId:"ADD YOUR TRACKING ID HERE",theme:"grommet",font:"",fontHeadings:"",brandColor:""}},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return g});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(143),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var m=a(150),u=a.n(m);a.d(t,"PageRenderer",function(){return u.a});var s=a(35);a.d(t,"parsePath",function(){return s.a});var d=r.a.createContext({}),g=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},156:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(52),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=m},180:function(e,t,a){"use strict";var n=a(189),r=a.n(n),l=a(296),i=a(300),o=a(142),c=a(197),m=a(0),u=a.n(m),s=a(145),d=a.n(s),g={global:{font:{family:d.a.font},colors:{brand:d.a.brandColor},breakpoints:{narrow:899}},heading:{font:{family:d.a.fontHeadings}}},h=a(297),f=a(299),p=a(298),E=a(295),b=a(194),v=a(195),y=a(196),w=function(){return u.a.createElement("div",null,u.a.createElement(i.a,{round:"small",pad:"medium",margin:"small",border:!0},u.a.createElement(i.a,{direction:"row"},u.a.createElement(i.a,{pad:{bottom:"small",left:"none",right:"small"},round:"large",height:"xsmall",width:"xsmall"},u.a.createElement(h.a,{fit:"contain",title:d.a.author,alt:d.a.author,src:d.a.authorImage})),u.a.createElement(i.a,null,u.a.createElement(f.a,{weight:"bold",size:"large",margin:{left:"small"}},d.a.author),u.a.createElement(i.a,{direction:"row"},d.a.social.twitter.length>1?u.a.createElement(p.a,{href:"https://twitter.com/"+d.a.social.twitter,icon:u.a.createElement(b.a,{size:"medium"})}):"",d.a.social.github.length>1?u.a.createElement(p.a,{href:"https://github.com/"+d.a.social.github,icon:u.a.createElement(v.a,{size:"medium"})}):"",d.a.social.reddit.length>1?u.a.createElement(p.a,{href:"https://reddit.com/user/"+d.a.social.reddit,icon:u.a.createElement(y.a,{size:"medium"})}):""))),u.a.createElement(f.a,{size:"small"},u.a.createElement(E.a,null,d.a.authorBio))))},x=function(){return u.a.createElement("footer",null,u.a.createElement(i.a,{background:"light-2",pad:"large",align:"center"},u.a.createElement(E.a,null,d.a.footerText)))},k=a(301),G=a(149),I=function(){return u.a.createElement("header",null,u.a.createElement(i.a,{margin:"small"},u.a.createElement(G.Link,{style:{boxShadow:"none",textDecoration:"none"},to:"/"},u.a.createElement(k.a,{textAlign:"center",color:"brand",margin:"small"},d.a.title)),u.a.createElement(f.a,{textAlign:"center",color:"brand"},d.a.description)))};function S(){var e=r()(["\n  img {\n    border-radius: 14px;\n    max-width: 100%;\n  }\n  body {\n    margin: 0;\n  }\n  a:hover {\n    opacity: 0.9;\n  }\n"]);return S=function(){return e},e}var R=Object(o.createGlobalStyle)(S()),q={grommet:c.grommet,hpe:c.hpe,dark:c.dark};t.a=function(e){return u.a.createElement(l.a,{theme:q[d.a.theme||"grommet"]},u.a.createElement(l.a,{theme:g},u.a.createElement(R,null),u.a.createElement(i.a,{direction:"column",align:"center"},u.a.createElement(i.a,{width:"xlarge"},u.a.createElement(I,null),u.a.createElement("main",null,u.a.createElement(i.a,{direction:"row-responsive"},u.a.createElement(i.a,{basis:"large",flex:"grow",direction:"row-responsive"},e.children),u.a.createElement(i.a,{basis:"medium"},u.a.createElement("aside",null,u.a.createElement(w,null))))))),u.a.createElement(x,null)))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-74f22bd9aea8855148a0.js.map