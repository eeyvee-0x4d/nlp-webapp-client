var A=Object.defineProperty;var k=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var T=(e,s,a)=>s in e?A(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,$=(e,s)=>{for(var a in s||(s={}))U.call(s,a)&&T(e,a,s[a]);if(k)for(var a of k(s))E.call(s,a)&&T(e,a,s[a]);return e};import{o as n,c as r,a as t,t as c,b as C,r as f,C as D,d as z,e as _,B as O,f as b,g as h,L as V,F as y,h as S,i as M,w as Z,v as j,j as w,k as I,T as K,l as W,m as g,n as R,p as q,q as J,s as G,u as Q}from"./vendor.bf040516.js";const X=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const i of d.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerpolicy&&(d.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?d.credentials="include":o.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(o){if(o.ep)return;o.ep=!0;const d=a(o);fetch(o.href,d)}};X();var p=(e,s)=>{const a=e.__vccOpts||e;for(const[l,o]of s)a[l]=o;return a};const Y={name:"CardStats",data(){return{kpiHeader:"",kpiBigNumber:"",kpiSubHeader:""}}},ee={class:"relative px-4"},te={class:"text-base font-bold"},se={class:"text-4xl font-bold text-center"},ae={class:"text-base font-bold text-center"};function oe(e,s,a,l,o,d){return n(),r("div",ee,[t("p",te,c(o.kpiHeader),1),t("p",se,c(o.kpiBigNumber),1),t("p",ae,c(o.kpiSubHeader),1)])}var ne=p(Y,[["render",oe]]);const le={setup(e){return(s,a)=>{const l=f("router-view");return n(),C(l)}}};D.register(...z);const re=_({name:"CardBarChart",components:{BarChart:O},props:{chartTitle:{type:String,default:"Chart Title"}},methods:{async fetchData(){this.fetchingData=!0;let e=await b.get("https://nlp-webapp-server.herokuapp.com/sentiment_overview/");if(e.statusText!=="OK")throw new Error(`HTTP error! status: ${e.status}`);return await e}},data(){return{chartData:{labels:[],datasets:[{label:"Positive",backgroundColor:"#66bd63",borderColor:"#66bd63",barThickness:40,fill:!1,data:[]},{label:"Negative",backgroundColor:"#f46d43",borderColor:"#f46d43",barThickness:40,fill:!1,data:[]}],options:{maintainAspectRatio:!1,responsive:!0,tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0}}},fetchingData:!1,dataSummary:{pfizer:[],sinovac:[],astrazeneca:[],moderna:[]}}},mounted(){this.fetchData().then(e=>{e.data.forEach(s=>{if(s.sentiments!==null){this.chartData.labels.push(s.name.charAt(0).toUpperCase()+s.name.slice(1)),this.chartData.datasets[0].data.push(s.sentiments[0].positive),this.chartData.datasets[1].data.push(s.sentiments[0].negative);let a=(s.sentiments[0].positive/(s.sentiments[0].positive+s.sentiments[0].negative)*100).toFixed(2),l=(s.sentiments[0].negative/(s.sentiments[0].positive+s.sentiments[0].negative)*100).toFixed(2);this.dataSummary[s.name]=[a,l]}else this.chartData.labels.push(s.name.charAt(0).toUpperCase()+s.name.slice(1)),this.chartData.datasets[0].data.push(0),this.chartData.datasets[1].data.push(0),this.dataSummary[s.name]=[null,null]}),this.fetchingData=!1}).catch()}}),ie={class:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-ld rounded-lg divide-y divide-solid"},de={class:"rounded-t mb-0 px-4 py-3 bg-transparent"},ce={class:"flex flex-wrap items-center"},ue={class:"relative w-full max-w-full flex-grow flex-1"},he={class:"text-base font-bold"},fe={class:"px-4 flex-auto"},pe={class:"relative h-350-px"},_e={key:0,class:"m-auto text-center font-bold text-base"},me=t("svg",{role:"status",class:"inline mr-2 w-6 h-6 text-gray-200 animate-spin fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),be=t("span",null," Loading data... ",-1),ve=[me,be],ge={key:1},xe={class:"flex flex-auto py-4 place-content-evenly divide-x"},$e={class:"relative px-2"},we=t("p",{class:"text-base font-bold text-left"}," Pfizer ",-1),Ce={class:"text-sm text-left"},ye={class:"text-sm text-left"},Se={class:"relative px-2"},ke=t("p",{class:"text-base font-bold text-left"}," Sinovac ",-1),Te={class:"text-sm text-left"},De={class:"text-sm text-left"},ze={class:"relative px-2"},Me=t("p",{class:"text-base font-bold text-left"}," Astrazeneca ",-1),Fe={class:"text-sm text-left"},Be={class:"text-sm text-left"},Ne={class:"relative px-2"},He=t("p",{class:"text-base font-bold text-left"}," Moderna ",-1),Pe={class:"text-sm text-left"},Le={class:"text-sm text-left"};function Ae(e,s,a,l,o,d){const i=f("BarChart");return n(),r("div",ie,[t("div",de,[t("div",ce,[t("div",ue,[t("h2",he,c(e.chartTitle),1)])])]),t("div",fe,[t("div",pe,[e.fetchingData?(n(),r("div",_e,ve)):(n(),r("div",ge,[t("div",xe,[t("div",$e,[we,t("p",Ce," Positive sentiments: "+c(e.dataSummary.pfizer[0])+"% ",1),t("p",ye," Negative sentiments: "+c(e.dataSummary.pfizer[1])+"% ",1)]),t("div",Se,[ke,t("p",Te," Positive sentiments: "+c(e.dataSummary.sinovac[0])+"% ",1),t("p",De," Negative sentiments: "+c(e.dataSummary.sinovac[1])+"% ",1)]),t("div",ze,[Me,t("p",Fe," Positive sentiments: "+c(e.dataSummary.astrazeneca[0])+"% ",1),t("p",Be," Negative sentiments: "+c(e.dataSummary.astrazeneca[1])+"% ",1)]),t("div",Ne,[He,t("p",Pe," Positive sentiments: "+c(e.dataSummary.moderna[0])+"% ",1),t("p",Le," Negative sentiments: "+c(e.dataSummary.moderna[1])+"% ",1)])]),h(i,{chartData:e.chartData},null,8,["chartData"])]))])])])}var F=p(re,[["render",Ae]]);const Ue={name:"CardHeader",components:{CardStats:ne},methods:{test(){console.log("Hello")},async fetchData(){this.isFetchingData=!0;let e=await b.get("https://nlp-webapp-server.herokuapp.com/data_overview/");if(e.statusText!=="OK")throw new Error(`HTTP error! status: ${e.status}`);return this.isFetchingData=!1,await e},abbrNum(e,s){s=Math.pow(10,s);for(var a=["k","m","b","t"],l=a.length-1;l>=0;l--){var o=Math.pow(10,(l+1)*3);if(o<=e){e=Math.round(e*s/o)/s,e+=a[l];break}}return e}},data(){return{isFetchingData:!1}},mounted(){this.fetchData().then(e=>{this.$refs.cardStat1.kpiHeader="Pfizer",this.$refs.cardStat1.kpiBigNumber=e.data.pfizer===null?"n.d":this.abbrNum(e.data.pfizer,1),this.$refs.cardStat1.kpiSubHeader=e.data.pfizer===null?"":"Tweets",this.$refs.cardStat2.kpiHeader="Sinovac",this.$refs.cardStat2.kpiBigNumber=e.data.sinovac===null?"n.d":this.abbrNum(e.data.sinovac,1),this.$refs.cardStat2.kpiSubHeader=e.data.sinovac===null?"":"Tweets",this.$refs.cardStat3.kpiHeader="AstraZeneca",this.$refs.cardStat3.kpiBigNumber=e.data.astrazeneca===null?"n.d":this.abbrNum(e.data.astrazeneca,1),this.$refs.cardStat3.kpiSubHeader=e.data.astrazeneca===null?"":"Tweets",this.$refs.cardStat4.kpiHeader="Moderna",this.$refs.cardStat4.kpiBigNumber=e.data.moderna===null?"n.d":this.abbrNum(e.data.moderna,1),this.$refs.cardStat4.kpiSubHeader=e.data.moderna===null?"":"Tweets"}).catch()}},Ee={class:"relative flex flex-col border divide-y divide-solid"},Oe=t("div",{class:"p-4 text-base text-left font-bold"},[t("h1",null,"Data Overview")],-1),Ve={key:0,class:"w-full m-auto p-4 text-center font-bold text-base"},Ze=t("svg",{role:"status",class:"inline mr-2 w-6 h-6 text-gray-200 animate-spin fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),je=t("span",null," Loading data... ",-1),Ie=[Ze,je],Ke={key:1,class:"grid grid-cols-4 p-4 place-content-evenly divide-x"};function We(e,s,a,l,o,d){const i=f("CardStats");return n(),r("div",Ee,[Oe,o.isFetchingData?(n(),r("div",Ve,Ie)):(n(),r("div",Ke,[t("div",null,[h(i,{ref:"cardStat1"},null,512)]),t("div",null,[h(i,{ref:"cardStat2"},null,512)]),t("div",null,[h(i,{ref:"cardStat3"},null,512)]),t("div",null,[h(i,{ref:"cardStat4"},null,512)])]))])}var B=p(Ue,[["render",We]]);D.register(...z);const Re=_({name:"CardLineChart",components:{LineChart:V},props:{chartTitle:{type:String,default:"Line Chart"}},data(){return{chartData:{labels:[],datasets:[{label:"Positive",backgroundColor:"#66bd63",borderColor:"#66bd63",data:[]},{label:"Negative",backgroundColor:"#f46d43",borderColor:"#f46d43",data:[]}]}}}}),qe={class:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-ld rounded-lg"},Je={class:"rounded-t mb-0 px-4 py-3 bg-transparent"},Ge={class:"flex flex-wrap items-center"},Qe={class:"relative w-full max-w-full flex-grow flex-1"},Xe={class:"text-base font-bold"},Ye={class:"px-4 flex-auto"},et={class:"relative h-350-px"};function tt(e,s,a,l,o,d){const i=f("LineChart");return n(),r("div",qe,[t("div",Je,[t("div",Ge,[t("div",Qe,[t("h2",Xe,c(e.chartTitle),1)])])]),t("div",Ye,[t("div",et,[h(i,{chartData:e.chartData},null,8,["chartData"])])])])}var N=p(Re,[["render",tt]]);const st=_({name:"CardTable",components:{},props:{title:{type:String,dafault:"Title"}},methods:{async fetchData(){let e=await b.get("https://nlp-webapp-server.herokuapp.com/all_data/",{params:{page_number:this.page_number++,page_size:this.page_size}});if(e.statusText!=="OK")throw new Error(`HTTP error! status: ${e.status}`);return await e},loadMore(){this.fetchData().then(e=>{this.data=$($({},this.data),JSON.parse(e.data)),console.log(this.data)}).catch()}},data(){return{data:{},page_number:1,page_size:20}},beforeMount(){this.fetchData().then(e=>{this.data=JSON.parse(e.data)}).catch()},mounted(){}}),at={class:"relative w-full p-4"},ot={class:"rounded-t mb-0 bg-transparent"},nt={class:"flex flex-wrap items-center"},lt={class:"relative pb-4 w-full max-w-full flex-grow flex-1"},rt={class:"text-base font-bold"},it={class:"max-h-96 overflow-auto"},dt={class:"w-full table-auto text-left break-text text-sm text-center"},ct=t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"Date"),t("th",null,"Tweet"),t("th",null,"Sentiment")])],-1),ut={class:""},ht=t("tfoot",null,null,-1),ft={class:"py-2 flex justify-end"};function pt(e,s,a,l,o,d){return n(),r("div",at,[t("div",ot,[t("div",nt,[t("div",lt,[t("h2",rt,c(e.title),1)])])]),t("div",it,[t("table",dt,[ct,t("tbody",ut,[(n(!0),r(y,null,S(e.data,(i,u)=>(n(),r("tr",null,[t("td",null,c(u),1),t("td",null,c(i["Created-At"]),1),t("td",null,c(i.Text),1),t("td",null,c(i.Sentiment===1?"Positive":"Negative"),1)]))),256))]),ht])]),t("div",ft,[t("button",{class:"inline-block px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center",onClick:s[0]||(s[0]=i=>e.loadMore(i))}," Load more ")])])}var H=p(st,[["render",pt]]);const _t=_({name:"Tabs",data(){return{tabs:[]}},onBeforeMount(){slots.default&&(state.tabs=slots.default().filter(e=>e.type.name==="Tab"))},mounted(){this.selectTab(0)},methods:{selectTab(e){this.tabs.forEach((s,a)=>{s.isActive=a===e})}}}),mt={class:"flex flex-auto justify-items-stretch"},bt=["onClick"];function vt(e,s,a,l,o,d){return n(),r("div",null,[t("ul",mt,[(n(!0),r(y,null,S(e.tabs,(i,u)=>(n(),r("li",{class:"p-4 border w-1/4",key:i.title,onClick:v=>e.selectTab(u)},c(i.title),9,bt))),128))]),M(e.$slots,"default")])}var gt=p(_t,[["render",vt]]);const xt=_({name:"Tab",props:{title:{type:String,default:"Tab"}},data(){return{isActive:!0}},created(){this.$parent.tabs.push(this)}}),$t={class:"mr-2"};function wt(e,s,a,l,o,d){return Z((n(),r("div",$t,[M(e.$slots,"default")],512)),[[j,e.isActive]])}var Ct=p(xt,[["render",wt]]);const yt=_({name:"TabsWrapper",components:{Tabs:gt,Tab:Ct,CardLineChart:N},data(){return{tabs:["pfizer","sinovac","astrazeneca","moderna"],isFetchingData:!1}},methods:{async fetchData(){this.isFetchingData=!0;let e=await b.get("https://nlp-webapp-server.herokuapp.com/sentiment_trend/");if(e.statusText!=="OK")throw new Error(`HTTP error! status: ${e.status}`);return await e}},mounted(){this.fetchData().then(e=>{e.data.forEach((s,a)=>{let l=[],o=[];for(const[d,i]of Object.entries(s.sentiments[0]))l.push(d),o.push(i);this.$refs.lineChart[a].chartData.labels=l,this.$refs.lineChart[a].chartData.datasets[0].data=o,l=[],o=[];for(const[d,i]of Object.entries(s.sentiments[1]))l.push(d),o.push(i);this.$refs.lineChart[a].chartData.labels=l,this.$refs.lineChart[a].chartData.datasets[1].data=o,this.isFetchingData=!1})}).catch()}}),St=t("div",{class:"rounded-t mb-0 px-4 py-3 bg-transparent"},[t("div",{class:"flex flex-wrap items-center"},[t("div",{class:"relative w-full max-w-full flex-grow flex-1"},[t("h2",{class:"text-base font-bold"}," Sentiments over time ")])])],-1);function kt(e,s,a,l,o,d){const i=f("CardLineChart"),u=f("Tab"),v=f("Tabs");return n(),r("div",null,[St,h(v,null,{default:w(()=>[(n(!0),r(y,null,S(e.tabs,(m,x)=>(n(),C(u,{key:x,title:m.charAt(0).toUpperCase()+m.slice(1),ref_for:!0,ref:m},{default:w(()=>[h(i,{ref_for:!0,ref:"lineChart",chartTitle:m.charAt(0).toUpperCase()+m.slice(1)+" Vaccine Sentiment Trend"},null,8,["chartTitle"])]),_:2},1032,["title"]))),128))]),_:1})])}var P=p(yt,[["render",kt]]);_({name:"Home",components:{CardHeader:B,CardBarChart:F,CardLineChart:N,CardTable:H,TabsWrapper:P}});const Tt=_({name:"Breadcrumbs"}),Dt={class:"flex py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200","aria-label":"Breadcrumb"},zt=I('<ol class="inline-flex items-center space-x-1"><li class="inline-flex items-center" aria-current="page"><a class="text-gray-700 hover:text-gray-900 inline-flex items-center text-sm font-medium" href="/"> Data Upload </a></li><div><svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></div><li class="inline-flex items-center"><div><a class="text-gray-700 hover:text-gray-900 inline-flex items-center ml-1 text-sm font-medium" href="/Visualization"> Visualization </a></div></li></ol>',1),Mt=[zt];function Ft(e,s,a,l,o,d){return n(),r("nav",Dt,Mt)}var Bt=p(Tt,[["render",Ft]]);const Nt=_({name:"Toast",data(){return{show:!1,text:null,type:null}},methods:{close(){this.show=!1}},watch:{show(){this.show===!0&&setTimeout(()=>{this.show=!1,console.log(this.show)},3e3)}}}),Ht={key:0,id:"toast-success",class:"flex items-center w-full max-w-xs p-4 m-4 fixed top-0 right-0 text-gray-500 bg-white rounded-lg shadow-lg border",role:"alert"},Pt={key:0,class:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"},Lt={key:0,class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},At=t("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"},null,-1),Ut=[At],Et={key:1,class:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg"},Ot=t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),Vt=[Ot],Zt={class:"ml-3 text-sm font-normal"},jt=t("span",{class:"sr-only"},"Close",-1),It=t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Kt=[jt,It];function Wt(e,s,a,l,o,d){return n(),C(W,{to:"body"},[h(K,null,{default:w(()=>[e.show?(n(),r("div",Ht,[e.type==="success"?(n(),r("div",Pt,[e.type==="success"?(n(),r("svg",Lt,Ut)):g("",!0)])):g("",!0),e.type==="error"?(n(),r("div",Et,Vt)):g("",!0),t("div",Zt,c(e.text),1),t("button",{type:"button",class:"ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8","data-collapse-toggle":"toast-success","aria-label":"Close",onClick:s[0]||(s[0]=i=>e.close())},Kt)])):g("",!0)]),_:1})])}var Rt=p(Nt,[["render",Wt]]);const qt=_({name:"CardUpload",components:{Toast:Rt},data(){return{files:{Pfizer:null,Sinovac:null,Astrazeneca:null,Moderna:null},loading:!1}},methods:{handleFileUpload1(e){if(e.target.files.length===0)this.files.Pfizer=null;else{const s=e.target.files[0];this.files.Pfizer=s}this.files.Pfizer===null&&this.files.Sinovac===null&&this.files.Astrazeneca===null&&this.files.Moderna===null?document.getElementById("upload-button").disabled=!0:document.getElementById("upload-button").disabled=!1},handleFileUpload2(e){if(e.target.files.length===0)this.files.Sinovac=null;else{const s=e.target.files[0];this.files.Sinovac=s}this.files.Pfizer===null&&this.files.Sinovac===null&&this.files.Astrazeneca===null&&this.files.Moderna===null?document.getElementById("upload-button").disabled=!0:document.getElementById("upload-button").disabled=!1},handleFileUpload3(e){if(e.target.files.length===0)this.files.Astrazeneca=null;else{const s=e.target.files[0];this.files.Astrazeneca=s}this.files.Pfizer===null&&this.files.Sinovac===null&&this.files.Astrazeneca===null&&this.files.Moderna===null?document.getElementById("upload-button").disabled=!0:document.getElementById("upload-button").disabled=!1},handleFileUpload4(e){if(e.target.files.length===0)this.files.Moderna=null;else{const s=e.target.files[0];this.files.Moderna=s}this.files.Pfizer===null&&this.files.Sinovac===null&&this.files.Astrazeneca===null&&this.files.Moderna===null?document.getElementById("upload-button").disabled=!0:document.getElementById("upload-button").disabled=!1},onFileSubmit(e){let s=new FormData;s.append("Pfizer",this.files.Pfizer),s.append("Sinovac",this.files.Sinovac),s.append("Astrazeneca",this.files.Astrazeneca),s.append("Moderna",this.files.Moderna);async function a(){let l=await b.post("https://nlp-webapp-server.herokuapp.com/upload/",s,{headers:{"Content-Type":"multipart/form-data"}});if(l.statusText!=="OK")throw new Error(`HTTP error! status: ${l.status}`);return await l}this.loading=!0,a().then(l=>{this.loading=!1,this.$refs.toastNotif.text="Files are uploaded successfully.",this.$refs.toastNotif.type="success",this.$refs.toastNotif.show=!0}).catch(l=>{this.loading=!1,this.$refs.toastNotif.text="Something's not right.",this.$refs.toastNotif.type="error",this.$refs.toastNotif.show=!0})}},watch:{}}),Jt={class:"border border-4 p-4 rounded-lg"},Gt=t("div",{class:""},[t("h1",{class:"text-base font-bold"}," Upload Dataset "),t("hr")],-1),Qt={class:"flex flex-wrap p-4 place-content-evenly"},Xt={class:"px-4"},Yt={class:"flex justify-center"},es={class:"mb-3 w-96"},ts=t("label",{for:"formFileSm",class:"form-label inline-block mb-2 text-gray-700"},"Pfizer",-1),ss={class:"px-4"},as={class:"flex justify-center"},os={class:"mb-3 w-96"},ns=t("label",{for:"formFileSm",class:"form-label inline-block mb-2 text-gray-700"},"Sinovac",-1),ls={class:"px-4"},rs={class:"flex justify-center"},is={class:"mb-3 w-96"},ds=t("label",{for:"formFileSm",class:"form-label inline-block mb-2 text-gray-700"},"AstraZeneca",-1),cs={class:"px-4"},us={class:"flex justify-center"},hs={class:"mb-3 w-96"},fs=t("label",{for:"formFileSm",class:"form-label inline-block mb-2 text-gray-700"},"Moderna",-1),ps={class:"flex justify-end"},_s={class:""},ms={key:0,role:"status",class:"inline mr-2 w-4 h-4 animate-spin fill-white-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},bs=t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),vs=t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1),gs=[bs,vs],xs={key:1,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"download",class:"w-3 mr-2",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},$s=q(" Upload ");function ws(e,s,a,l,o,d){const i=f("Toast");return n(),r("div",Jt,[Gt,t("form",{onSubmit:s[6]||(s[6]=R(u=>e.onFileSubmit(),["prevent"]))},[t("div",Qt,[t("div",Xt,[t("div",Yt,[t("div",es,[ts,t("input",{class:"form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"formFileSm",type:"file",accept:".csv",ref:"fileUpload1",onChange:s[0]||(s[0]=u=>e.handleFileUpload1(u))},null,544)])])]),t("div",ss,[t("div",as,[t("div",os,[ns,t("input",{class:"form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"formFileSm",type:"file",accept:".csv",ref:"fileUpload2",onChange:s[1]||(s[1]=u=>e.handleFileUpload2(u))},null,544)])])]),t("div",ls,[t("div",rs,[t("div",is,[ds,t("input",{class:"form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"formFileSm",type:"file",accept:".csv",ref:"fileUpload3",onChange:s[2]||(s[2]=u=>e.handleFileUpload3(u))},null,544)])])]),t("div",cs,[t("div",us,[t("div",hs,[fs,t("input",{class:"form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"formFileSm",type:"file",accept:".csv",ref:"fileUpload4",onChange:s[3]||(s[3]=u=>e.handleFileUpload4(u))},null,544)])])])]),t("div",ps,[t("div",_s,[t("button",{type:"button",id:"upload-button",class:"inline-block px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center disabled:bg-gray-400",onClick:s[5]||(s[5]=u=>e.onFileSubmit(u)),disabled:""},[e.loading?(n(),r("svg",ms,gs)):(n(),r("svg",xs,[t("path",{fill:"currentColor",d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z",onClick:s[4]||(s[4]=u=>e.onFileSubmit(u))})])),$s])])])],32),h(i,{ref:"toastNotif"},null,512)])}var L=p(qt,[["render",ws]]);const Cs=_({name:"Main",components:{Breadcrumbs:Bt,CardUpload:L}}),ys={class:"relative m-auto md:w-8/12 sm:w-4/5 py-4 space-y-4"},Ss=t("div",{class:"relative p-4 border border-4 rounded-lg"},[t("h1",{class:"text-4xl font-bold"},"Sentiment Analysis"),t("p",{class:"text-base font-normal"},"Visualizing The Public Perception of The COVID-19 Vaccine Brands Using Positive-to-Negative Sentiment Ratio")],-1);function ks(e,s,a,l,o,d){const i=f("Breadcrumbs"),u=f("router-view");return n(),r("div",ys,[Ss,h(i),h(u)])}var Ts=p(Cs,[["render",ks]]);const Ds=_({name:"CardModelStats",data(){return{isFetchingData:!1,modelStats:{}}},methods:{async fetchData(){this.isFetchingData=!0;let e=await b.get("https://nlp-webapp-server.herokuapp.com/model_stats/");if(e.statusText!=="OK")throw new Error(`HTTP error! status: ${e.status}`);return this.isFetchingData=!1,await e}},mounted(){this.fetchData().then(e=>{this.modelStats=e.data}).catch()}}),zs={class:"relative flex flex-col border divide-y divide-solid"},Ms=t("div",{class:"p-4 text-base text-left font-bold"},[t("h1",null,"Model Performance Stats")],-1),Fs={key:0,class:"w-full m-auto p-4 text-center font-bold text-base"},Bs=t("svg",{role:"status",class:"inline mr-2 w-6 h-6 text-gray-200 animate-spin fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),t("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),Ns=t("span",null," Loading data... ",-1),Hs=[Bs,Ns],Ps={key:1,class:"grid grid-cols-4 p-4 place-content-evenly divide-x"},Ls={class:"relative px-4"},As={key:0,class:"text-4xl font-bold text-center"},Us={key:1,class:"text-4xl font-bold text-center"},Es=t("p",{class:"text-base font-bold text-center"}," Accuracy ",-1),Os={class:"relative px-4"},Vs={key:0,class:"text-4xl font-bold text-center"},Zs={key:1,class:"text-4xl font-bold text-center"},js=t("p",{class:"text-base font-bold text-center"}," Precision ",-1),Is={class:"relative px-4"},Ks={key:0,class:"text-4xl font-bold text-center"},Ws={key:1,class:"text-4xl font-bold text-center"},Rs=t("p",{class:"text-base font-bold text-center"}," Recall ",-1),qs={class:"relative px-4"},Js={key:0,class:"text-4xl font-bold text-center"},Gs={key:1,class:"text-4xl font-bold text-center"},Qs=t("p",{class:"text-base font-bold text-center"}," F1 Score ",-1);function Xs(e,s,a,l,o,d){return n(),r("div",zs,[Ms,e.isFetchingData?(n(),r("div",Fs,Hs)):(n(),r("div",Ps,[t("div",Ls,[e.modelStats.accuracy===null?(n(),r("p",As," n.d ")):(n(),r("p",Us,c(e.modelStats.accuracy)+"% ",1)),Es]),t("div",Os,[e.modelStats.precision===null?(n(),r("p",Vs," n.d ")):(n(),r("p",Zs,c(e.modelStats.precision)+"% ",1)),js]),t("div",Is,[e.modelStats.recall===null?(n(),r("p",Ks," n.d ")):(n(),r("p",Ws,c(e.modelStats.recall)+"% ",1)),Rs]),t("div",qs,[e.modelStats.f1score===null?(n(),r("p",Js," n.d ")):(n(),r("p",Gs,c(e.modelStats.f1score)+"% ",1)),Qs])]))])}var Ys=p(Ds,[["render",Xs]]);const ea=_({name:"Visualization",components:{CardHeader:B,CardBarChart:F,CardTable:H,TabsWrapper:P,CardModelStats:Ys}}),ta={class:"flex flex-col space-y-4"},sa={class:"border border-4 rounded-lg text-center"},aa={class:"border border-4 rounded-lg text-center"},oa={class:"border border-4 rounded-lg"},na={class:"border border-4 rounded-lg"},la={class:"border border-4 rounded-lg"};function ra(e,s,a,l,o,d){const i=f("CardModelStats"),u=f("CardHeader"),v=f("CardBarChart"),m=f("TabsWrapper"),x=f("CardTable");return n(),r("div",ta,[t("div",sa,[h(i)]),t("div",aa,[h(u)]),t("div",oa,[h(v,{chartTitle:"Sentiments Overview"})]),t("div",na,[h(m)]),t("div",la,[h(x,{title:"Predicted Sentiments"})])])}var ia=p(ea,[["render",ra]]);const da=[{path:"/",redirect:"/upload/",name:"Main",component:Ts,children:[{path:"/upload/",component:L},{path:"/visualization/",component:ia}]}],ca=J({history:G(),routes:da});Q(le).use(ca).mount("#app");