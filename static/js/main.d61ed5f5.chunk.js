(this["webpackJsonpgit-dash"]=this["webpackJsonpgit-dash"]||[]).push([[0],{49:function(e,n,t){e.exports=t(65)},57:function(e,n,t){},63:function(e,n,t){},65:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(29),l=t.n(o),c=t(23),i=t(28),u=t(15),s=t(11),m=t(33),d=t(13),f=function(e,n){var t,r=localStorage.getItem(e);return r?(t=r,JSON.parse(t)):n},p=function(e,n){return localStorage.setItem(e,(t=n,JSON.stringify(t)));var t},b=function(e,n){var t=Object(r.useRef)(e),a=Object(r.useState)((function(){return f(t.current,n)})),o=Object(d.a)(a,2),l=o[0],c=o[1];return Object(r.useEffect)((function(){p(t.current,l)}),[l]),[l,c]},E="AUTH",g="SELECTED_REPOS",v=Object(r.createContext)(),h=function(){return Object(r.useContext)(v)},w=function(e){var n=e.children,t=function(){var e=b(E,""),n=Object(d.a)(e,2),t=n[0],a=n[1];return Object(r.useMemo)((function(){return{token:t,setToken:a}}),[t,a])}(),o=function(){var e=b(g,[]),n=Object(d.a)(e,2),t=n[0],a=n[1],o=Object(r.useMemo)((function(){return e=function(e){return e.owner.login},t.reduce((function(n,t,r){var a=e(t,r);return n[a]?n[a].push(t):n[a]=[t],n}),{});var e}),[t]),l=Object(r.useMemo)((function(){return t.map((function(e){return e.nameWithOwner}))}),[t]);return Object(r.useMemo)((function(){return{repos:t,groupedRepos:o,repoKeys:l,containsRepo:function(e){return l.includes(e.nameWithOwner)},addRepo:function(e){a((function(n){return[].concat(Object(m.a)(n),[e])}))},removeRepo:function(e){a((function(n){return n.filter((function(n){return n.nameWithOwner!==e.nameWithOwner}))}))}}}),[t,o,l,a])}(),l=Object(r.useMemo)((function(){return{auth:t,selectedRepos:o}}),[t,o]);return a.a.createElement(v.Provider,{value:l},n)},O=function(e){var n=e.children,t=h().auth.token,o=Object(r.useMemo)((function(){return new c.a}),[]),l=Object(r.useMemo)((function(){return new i.a({uri:"https://api.github.com/graphql",headers:{authorization:"bearer ".concat(t)}})}),[t]),m=Object(r.useMemo)((function(){return new u.a({link:l,cache:o})}),[l,o]);return a.a.createElement(s.a,{client:m},n)},x=function(e){return Object(r.useMemo)((function(){return Object.entries(e).reduce((function(e,n){var t=Object(d.a)(n,2),r=t[0],a=t[1];return e[r]=Array.isArray(a)?a.join(" "):a,e}),{})}),[e])},y=function(e){var n=e.children,t=x({container:"\n      px-8 max-w-5xl mx-auto h-full\n    "});return a.a.createElement("div",{className:t.container},n)},N=t(42),j=t(6),R=t(32),A=t(24),M=t(22);function k(){var e=Object(R.a)(["\n  {\n    viewer {\n      repositories(\n        first: 12\n        affiliations: [OWNER, ORGANIZATION_MEMBER, COLLABORATOR]\n        ownerAffiliations: [OWNER, ORGANIZATION_MEMBER, COLLABORATOR]\n        orderBy: { field: UPDATED_AT, direction: DESC }\n      ) {\n        nodes {\n          name\n          nameWithOwner\n          owner {\n            login\n            avatarUrl\n          }\n        }\n      }\n    }\n  }\n"]);return k=function(){return e},e}var C=Object(A.a)(k()),S=t(80),T=t(79),D=(t(57),function(e){var n=e.repos,t=e.onRepoClick,r=void 0===t?null:t,o=e.removable,l=void 0!==o&&o,c=x({repos:"\n        flex flex-row items-center justify-center flex-wrap\n    ",repo:"\n        bg-gray-400 inline-block whitespace-no-wrap\n        m-1 rounded-full p-1 pr-3\n        flex flex-row items-center\n        text-gray-800\n\n        hover:bg-gray-500\n        focus:outline-none\n        focus:bg-purple-300\n\n        focus:text-purple-800\n    ",imageContainer:"\n        relative mr-2 rounded-full overflow-hidden\n    ",removeOverlay:"\n        absolute top-0 bottom-0 right-0 left-0\n        bg-gray-600\n        flex items-center justify-center\n        opacity-75\n    ",removeIcon:"text-gray-200 text-xs leading-none",image:"\n        w-6 h-6\n    ",text:"\n        text-sm leading-none font-semibold\n    "});return a.a.createElement(S.a,{className:c.repos},n.map((function(e){return a.a.createElement(T.a,{key:e.nameWithOwner,timeout:200,classNames:"item"},a.a.createElement("button",{className:c.repo,onClick:r?r(e):null},a.a.createElement("div",{className:c.imageContainer},a.a.createElement("img",{src:e.owner.avatarUrl,className:c.image,alt:e.nameWithOwner}),l?a.a.createElement("div",{className:c.removeOverlay},a.a.createElement("p",{className:c.removeIcon},"\u2715")):null),a.a.createElement("p",{className:c.text},e.nameWithOwner)))})))}),W=function(e){e.onChoose;var n=function(){var e=Object(M.a)(C),n=e.data,t=Object(j.a)(e,["data"]);return Object(N.a)({data:n,repos:n?n.viewer.repositories.nodes:null},t)}(),t=n.loading,r=n.repos,o=n.error,l=h().selectedRepos,c=x({text:"\n        mb-2 mt-4 text-gray-900 font-light\n    "});return a.a.createElement("div",{className:c.container},a.a.createElement("p",{className:c.text},"Get started by picking some repos you want to see:"),t?a.a.createElement("p",null,"Loading..."):o?a.a.createElement("p",null,"something went wrong..."):a.a.createElement(a.a.Fragment,null,a.a.createElement(D,{repos:r.filter((function(e){return!l.containsRepo(e)})),onRepoClick:function(e){return function(n){n.preventDefault(),l.addRepo(e)}}}),l.repos.length>0?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:c.text},"Selected:"),a.a.createElement(D,{repos:l.repos,onRepoClick:function(e){return function(n){n.preventDefault(),l.removeRepo(e)}},removable:!0})):null))},q=function(e){var n=e.children,t=h().auth,o=x({container:"\n        flex flex-col items-center justify-center h-full\n    ",text:"\n        text-center max-w-md\n        text-gray-800 mb-4\n    ",link:"\n        text-purple-600 font-semibold\n    ",form:"\n        shadow-lg rounded\n    ",input:"\n        w-56 h-12 px-4 rounded-l\n        border border-gray-400 border-r-0\n        focus:outline-none\n        focus:border-purple-600\n    ",button:"\n        h-12 px-4 bg-purple-600 text-purple-100 rounded-r\n        border border-purple-800 border-l-0\n    "}),l=Object(r.useState)(""),c=Object(d.a)(l,2),i=c[0],u=c[1];return t.token?n:a.a.createElement("div",{className:o.container},a.a.createElement("p",{className:o.text},"Welcome! Before you can get started, you need to supply us with a Personal Access Token so we can see your repositories.",a.a.createElement("br",null),a.a.createElement("a",{href:"https://github.com/settings/tokens/new?scopes=repo&description=git-dash",target:"_blank",rel:"noopener noreferrer",className:o.link},"Click here to generate one on Github.")),a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.setToken(i)},className:o.form},a.a.createElement("input",{type:"text",value:i,onChange:function(e){return u(e.target.value)},placeholder:"Paste PAT Here",className:o.input}),a.a.createElement("button",{type:"submit",className:o.button},"Go")))},P=t(78),U=t(77),H=t(43),I=t.n(H),B=t(45),G=t.n(B),_=t(46),L=t.n(_),J=function(e){var n=e.status,t=(Object(j.a)(e,["status"]),x({container:"\n        w-8 h-8 absolute\n        flex items-center justify-center\n        rounded-full shadow\n    ",icon:"\n        leading-none font-xs\n    "})),r={COMMENTED:I.a,CHANGES_REQUESTED:G.a,APPROVED:L.a}[n],o={COMMENTED:"bg-white",CHANGES_REQUESTED:"bg-red-500",APPROVED:"bg-green-600"}[n],l={COMMENTED:"text-gray-600",CHANGES_REQUESTED:"text-red-100",APPROVED:"text-green-100"}[n];return a.a.createElement("div",{className:"".concat(o," ").concat(l," ").concat(t.container),style:{right:"-.75rem",bottom:"-.75rem"}},a.a.createElement(r,{className:t.icon,fontSize:"inherit"}))},$=function(e){var n=function(e){var n=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,n,t,r){return[n,n,t,t,r,r].join("")})),t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),r=Object(d.a)(t,4);return[r[1],r[2],r[3]].map((function(e){return parseInt(e,16)}))}(e),t=Object(d.a)(n,3),r=t[0],a=t[1],o=t[2];return Math.round((299*r+587*a+114*o)/1e3)>125?"rgba(0, 0, 0, 0.8)":"rgba(255, 255, 255, 0.9)"},Q=function(e){var n=e.labels,t=x({container:"\n        flex flex-row items-center\n    ",tag:"\n        leading-none text-xs px-2 py-1\n        rounded-full font-semibold\n        shadow-inner mr-1\n    "});return a.a.createElement("div",{className:t.container},n.map((function(e){return a.a.createElement("p",{key:e.name,className:t.tag,style:{background:"#".concat(e.color),color:$(e.color)}},e.name)})))},V=function(e){var n=e.pullRequest,t=x({pullRequest:"\n        p-6\n        border-b border-gray-300\n    ",preTitle:"\n        flex flex-row items-center mb-2\n    ",owner:"\n        flex flex-row items-center\n    ",ownerAvatar:"\n        w-6 h-6 rounded-full shadow mr-1\n    ",repo:"\n        text-base text-gray-800 leading-none mr-2\n    ",titleBar:"\n        flex flex-row justify-between items-center mb-1\n    ",title:"\n        text-gray-900 font-semibold text-lg\n    ",author:"\n        inline-flex flex-row items-center\n        relative\n        bg-gray-400 rounded-full py-2 pl-3 pr-12\n        shadow-inner\n    ",authorAvatar:"\n        w-10 h-10 rounded-full\n        absolute right-0\n        shadow\n    ",authorName:"\n        text-sm leading-none text-gray-900 whitespace-no-wrap\n    ",timestamps:"\n        text-sm leading-none text-gray-700\n    ",reviewers:"\n        flex flex-row mt-3\n    ",review:"\n        relative mr-4\n    ",reviewerAvatar:"\n        w-10 h-10 rounded-full\n        shadow\n    ",reviewStatus:"\n        absolute\n    "}),r=Object(P.a)(Object(U.a)(n.createdAt),"do MMM HH:mm"),o=Object(P.a)(Object(U.a)(n.updatedAt),"do MMM HH:mm");return a.a.createElement("div",{className:t.pullRequest,key:n.id},a.a.createElement("div",{className:t.titleBar},a.a.createElement("div",null,a.a.createElement("div",{className:t.preTitle},a.a.createElement("div",{className:t.owner},a.a.createElement("img",{src:n.repository.owner.avatarUrl,alt:n.repository.nameWithOwner,className:t.ownerAvatar}),a.a.createElement("p",{className:t.repo},n.repository.nameWithOwner)),a.a.createElement(Q,{labels:n.labels.nodes})),a.a.createElement("p",{className:t.title},a.a.createElement("a",{href:n.permalink},n.title))),a.a.createElement("div",{className:t.author},a.a.createElement("img",{src:n.author.avatarUrl,alt:n.author.login,className:t.authorAvatar}),a.a.createElement("p",{className:t.authorName},n.author.login))),a.a.createElement("p",{className:t.timestamps},"created ",r,", last updated ",o),a.a.createElement("div",{className:t.reviewers},n.reviews.nodes.filter((function(e){return"COMMENTED"!==e.state})).map((function(e){return a.a.createElement("div",{className:t.review,key:e.id,title:"Created ".concat(Object(P.a)(Object(U.a)(e.createdAt),"do MMM HH:mm"))},a.a.createElement("img",{src:e.author.avatarUrl,alt:e.author.login,className:t.reviewerAvatar}),a.a.createElement(J,{status:e.state}))}))))};function z(){var e=Object(R.a)(["\n  query PullRequests($query: String!) {\n    search(query: $query, type: ISSUE, last: 100) {\n      nodes {\n        ... on PullRequest {\n          id\n          title\n          createdAt\n          updatedAt\n          permalink\n          author {\n            login\n            avatarUrl\n          }\n          repository {\n            nameWithOwner\n            owner {\n              avatarUrl\n            }\n          }\n          labels(first: 15) {\n            nodes {\n              name\n              color\n            }\n          }\n          reviews(last: 100) {\n            nodes {\n              id\n              createdAt\n              state\n              author {\n                login\n                avatarUrl\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return z=function(){return e},e}var F=Object(A.a)(z()),Z=function(){var e=h().selectedRepos,n=x({pullRequests:"\n        bg-gray-100 my-4 shadow-sm rounded border border-gray-300\n    "}),t="is:pr is:open "+e.repos.map((function(e){return"repo:".concat(e.nameWithOwner)})).join(" "),r=Object(M.a)(F,{variables:{query:t}}),o=r.loading,l=r.error,c=r.data;return o?a.a.createElement("p",null,"Loading..."):l?a.a.createElement("p",null,"Something went wrong..."):a.a.createElement("div",{className:n.pullRequests},c.search.nodes.map((function(e){return a.a.createElement(V,{pullRequest:e,key:e.id})})))};t(63);l.a.render(a.a.createElement((function(){return a.a.createElement(w,null,a.a.createElement(y,null,a.a.createElement(q,null,a.a.createElement(O,null,a.a.createElement(W,null),a.a.createElement(Z,null)))))}),null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.d61ed5f5.chunk.js.map