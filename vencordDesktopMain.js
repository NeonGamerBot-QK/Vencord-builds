// Vencord 65a7a88
// Standalone: true
// Platform: Universal
// Updater disabled: false
"use strict";var qr=Object.create;var ze=Object.defineProperty;var $r=Object.getOwnPropertyDescriptor;var Kr=Object.getOwnPropertyNames;var Qr=Object.getPrototypeOf,Xr=Object.prototype.hasOwnProperty;var b=(e,t)=>()=>(e&&(t=e(e=0)),t);var G=(e,t)=>{for(var r in t)ze(e,r,{get:t[r],enumerable:!0})},en=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Kr(t))!Xr.call(e,i)&&i!==r&&ze(e,i,{get:()=>t[i],enumerable:!(n=$r(t,i))||n.enumerable});return e};var pe=(e,t,r)=>(r=e!=null?qr(Qr(e)):{},en(t||!e||!e.__esModule?ze(r,"default",{value:e,enumerable:!0}):r,e));var c=b(()=>{"use strict"});var he=b(()=>{"use strict";c()});var me,Ve=b(()=>{c();me="65a7a88"});var $,je=b(()=>{c();$="NeonGamerBot-QK/Vencord"});var Pt,At=b(()=>{"use strict";c();Ve();je();Pt=`Vencord/${me}${$?` (https://github.com/${$})`:""}`});function K(e,t={}){return new Promise((r,n)=>{Rt.default.get(e,t,i=>{let{statusCode:o,statusMessage:a,headers:s}=i;if(o>=400)return void n(`${o}: ${a} - ${e}`);if(o>=300)return void r(K(s.location,t));let l=[];i.on("error",n),i.on("data",u=>l.push(u)),i.once("end",()=>r(Buffer.concat(l)))})})}var Rt,We=b(()=>{"use strict";c();Rt=pe(require("https"))});function de(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(t){return{ok:!1,error:t instanceof Error?{...t}:t}}}}var kt,Ct=b(()=>{"use strict";c();kt=["vencordDesktopMain.js","vencordDesktopPreload.js","vencordDesktopRenderer.js","vencordDesktopRenderer.css"]});var on={};async function Mt(e){return K(tn+e,{headers:{Accept:"application/vnd.github+json","User-Agent":Pt}})}async function rn(){if(!await _t())return[];let t=await Mt(`/compare/${me}...HEAD`);return JSON.parse(t.toString("utf-8")).commits.map(n=>({hash:n.sha.slice(0,7),author:n.author.login,message:n.commit.message.split(`
`)[0]}))}async function _t(){let e=await Mt("/releases/latest"),t=JSON.parse(e.toString());return t.name.slice(t.name.lastIndexOf(" ")+1)===me?!1:(t.assets.forEach(({name:n,browser_download_url:i})=>{kt.some(o=>n.startsWith(o))&&Ze.push([n,i])}),!0)}async function nn(){return await Promise.all(Ze.map(async([e,t])=>(0,Ot.writeFile)((0,Lt.join)(__dirname,e),await K(t)))),Ze=[],!0}var ve,Ot,Lt,tn,Ze,bt=b(()=>{"use strict";c();he();At();ve=require("electron"),Ot=require("fs/promises"),Lt=require("path");Ve();je();We();Ct();tn=`https://api.github.com/repos/${$}`,Ze=[];ve.ipcMain.handle("VencordGetRepo",de(()=>`https://github.com/${$}`));ve.ipcMain.handle("VencordGetUpdates",de(rn));ve.ipcMain.handle("VencordUpdate",de(_t));ve.ipcMain.handle("VencordBuild",de(nn))});c();var H=require("electron"),Br=require("path");c();c();Promise.resolve().then(()=>bt());c();he();var ut=require("electron");c();var Be={};G(Be,{openFilePrompt:()=>an,readFilePath:()=>cn,uniqueIdForThisPluginCalledCustomUpload:()=>sn});c();var Gt=require("electron"),Ft=require("fs");function an(){return new Promise((e,t)=>{let r=Gt.dialog.showOpenDialogSync({properties:["openFile"]});console.log(r),r||(r=[]),e(r)})}function sn(){}function cn(e,t){return console.log(e,t),(0,Ft.readFileSync)(t)}var Ye={};G(Ye,{noop:()=>ln});c();var ln=()=>{};var Je={};G(Je,{initDevtoolsOpenEagerLoad:()=>un});c();function un(e){let t=()=>e.sender.executeJavaScript("Vencord.Plugins.plugins.ConsoleShortcuts.eagerLoad(true)");e.sender.isDevToolsOpened()?t():e.sender.once("devtools-opened",()=>t())}var Zt={};c();c();he();c();var ge=class{pathListeners=new Map;globalListeners=new Set;constructor(t,r={}){this.plain=t,this.store=this.makeProxy(t),Object.assign(this,r)}makeProxy(t,r=t,n=""){let i=this;return new Proxy(t,{get(o,a){let s=o[a];return!(a in o)&&i.getDefaultValue&&(s=i.getDefaultValue({target:o,key:a,root:r,path:n})),typeof s=="object"&&s!==null&&!Array.isArray(s)?i.makeProxy(s,r,`${n}${n&&"."}${a}`):s},set(o,a,s){if(o[a]===s)return!0;Reflect.set(o,a,s);let l=`${n}${n&&"."}${a}`;return i.globalListeners.forEach(u=>u(s,l)),i.pathListeners.get(l)?.forEach(u=>u(s)),!0}})}setData(t,r){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=t,this.store=this.makeProxy(t),r){let n=t,i=r.split(".");for(let o of i){if(!n){console.warn(`Settings#setData: Path ${r} does not exist in new data. Not dispatching update`);return}n=n[o]}this.pathListeners.get(r)?.forEach(o=>o(n))}this.markAsChanged()}addGlobalChangeListener(t){this.globalListeners.add(t)}addChangeListener(t,r){let n=this.pathListeners.get(t)??new Set;n.add(r),this.pathListeners.set(t,n)}removeGlobalChangeListener(t){this.globalListeners.delete(t)}removeChangeListener(t,r){let n=this.pathListeners.get(t);!n||(n.delete(r),n.size||this.pathListeners.delete(t))}markAsChanged(){this.globalListeners.forEach(t=>t(this.plain,""))}};c();function qe(e,t){for(let r in t){let n=t[r];typeof n=="object"&&!Array.isArray(n)?(e[r]??={},qe(e[r],n)):e[r]??=n}return e}var Ie=require("electron"),W=require("fs");c();var Ut=require("electron"),F=require("path"),Q=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,F.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,F.join)(Ut.app.getPath("userData"),"..","Vencord")),X=(0,F.join)(Q,"settings"),j=(0,F.join)(Q,"themes"),De=(0,F.join)(X,"quickCss.css"),$e=(0,F.join)(X,"settings.json"),Ke=(0,F.join)(X,"native-settings.json"),Nt=["https:","http:","steam:","spotify:","com.epicgames.launcher:","tidal:"];(0,W.mkdirSync)(X,{recursive:!0});function Vt(e,t){try{return JSON.parse((0,W.readFileSync)(t,"utf-8"))}catch(r){return r?.code!=="ENOENT"&&console.error(`Failed to read ${e} settings`,r),{}}}var T=new ge(Vt("renderer",$e));T.addGlobalChangeListener(()=>{try{(0,W.writeFileSync)($e,JSON.stringify(T.plain,null,4))}catch(e){console.error("Failed to write renderer settings",e)}});Ie.ipcMain.handle("VencordGetSettingsDir",()=>X);Ie.ipcMain.on("VencordGetSettings",e=>e.returnValue=T.plain);Ie.ipcMain.handle("VencordSetSettings",(e,t,r)=>{T.setData(t,r)});var fn={plugins:{}},jt=Vt("native",Ke);qe(jt,fn);var zt=new ge(jt);zt.addGlobalChangeListener(()=>{try{(0,W.writeFileSync)(Ke,JSON.stringify(zt.plain,null,4))}catch(e){console.error("Failed to write native settings",e)}});var Wt=require("electron");Wt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://open.spotify.com/embed/")){let i=T.store.plugins?.FixSpotifyEmbeds;if(!i?.enabled)return;n.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${i.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})});var Bt={};c();var Ht=require("electron");Ht.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://www.youtube.com/")){if(!T.store.plugins?.FixYoutubeEmbeds?.enabled)return;n.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})});var ot={};G(ot,{chooseDir:()=>Pn,deleteFileNative:()=>Tn,getCommitHash:()=>er,getDefaultNativeDataDir:()=>U,getDefaultNativeImageDir:()=>ye,getImageNative:()=>Sn,getLogsFromFs:()=>Dn,getNativeSavedImages:()=>wn,getNewCommits:()=>gn,getRepoInfo:()=>vn,getSettings:()=>Re,init:()=>ir,initDirs:()=>nr,messageLoggerEnhancedUniqueIdThingyIdkMan:()=>yn,showItemInFolder:()=>An,update:()=>dn,writeImageNative:()=>xn,writeLogs:()=>In});c();var P=require("node:fs/promises"),Z=pe(require("node:path"));c();var Pe=class{constructor(t=1/0){this.maxSize=t}queue=[];promise;next(){let t=this.queue.shift();t?this.promise=Promise.resolve().then(t).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(t){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(t),this.run()}unshift(t){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(t),this.run()}get size(){return this.queue.length}};var Ce=require("electron");c();var Xe=pe(require("fs/promises")),Jt=pe(require("path"));c();var Ae=require("fs/promises"),Yt=pe(require("path"));async function pn(e){try{return await(0,Ae.access)(e),!0}catch{return!1}}async function ee(e){await pn(e)||await(0,Ae.mkdir)(e)}function Qe(e){return Yt.default.parse(e).name}async function Re(){try{let e=await Xe.default.readFile(await qt(),"utf8");return JSON.parse(e)}catch{let t={logsDir:await U(),imageCacheDir:await ye()};try{await et(t)}catch{}return t}}async function et(e){!e||await Xe.default.writeFile(await qt(),JSON.stringify(e,null,4),"utf8")}async function qt(){let e=await U();return await ee(e),Jt.default.join(e,"mlSettings.json")}c();var Qt=require("node:child_process"),rt=require("fs/promises"),ke=require("path"),Xt=require("util");c();function $t(e){let t=new Map,r=(...n)=>{let i=JSON.stringify(n);if(t.has(i))return t.get(i);let o=e(...n);return t.set(i,o),o};return r.clear=()=>t.clear(),r}var Kt=(0,Xt.promisify)(Qt.execFile),hn=process.platform==="linux"&&Boolean(process.env.FLATPAK_ID?.includes("discordapp")||process.env.FLATPAK_ID?.includes("Discord"));process.platform==="darwin"&&(process.env.PATH=`/usr/local/bin:${process.env.PATH}`);var tt=(0,ke.join)(__dirname,"..","src","userplugins"),mn=$t(async()=>{let e=await(0,rt.readdir)(tt,{withFileTypes:!0});for(let t of e){if(!t.isDirectory())continue;let r=(0,ke.join)(tt,t.name);if((await(0,rt.readdir)(r)).includes("LoggedMessageManager.ts"))return(0,ke.join)(tt,t.name)}});async function te(...e){let t={cwd:await mn(),shell:!0};try{let r;return hn?r=await Kt("flatpak-spawn",["--host","git",...e],t):r=await Kt("git",e,t),{value:r.stdout.trim(),stderr:r.stderr,ok:!0}}catch(r){return{ok:!1,cmd:r.cmd,message:r.stderr,error:r}}}async function dn(){return await te("pull")}async function er(){return await te("rev-parse","HEAD")}async function vn(){let e=await te("remote","get-url","origin");if(!e.ok)return e;let t=await er();return t.ok?{ok:!0,value:{repo:e.value.replace(/git@(.+):/,"https://$1/").replace(/\.git$/,""),gitHash:t.value}}:t}async function gn(){let e=await te("branch","--show-current");if(!e.ok)return e;let t="%H;%an;%s",r=`HEAD..origin/${e.value}`;try{await te("fetch");let n=await te("log",`--format="${t}"`,r);return n.ok?n.value.trim()===""?{ok:!0,value:[]}:{ok:!0,value:n.value.trim().split(`
`).map(a=>{let[s,l,...u]=a.split(";");return{longHash:s,hash:s.slice(0,7),author:l,message:u.join(";")}})}:n}catch(n){return{ok:!1,cmd:n.cmd,message:n.message,error:n}}}function yn(){}var re=new Map,wn=()=>re,nt,it,tr=async()=>it??await ye(),rr=async()=>nt??await U();async function nr(){let{logsDir:e,imageCacheDir:t}=await Re();nt=e||await U(),it=t||await ye()}nr();async function ir(e){let t=await tr();await ee(t);let r=await(0,P.readdir)(t);for(let n of r){let i=Qe(n);re.set(i,Z.default.join(t,n))}}async function Sn(e,t){let r=re.get(t);return r?await(0,P.readFile)(r):null}async function xn(e,t,r){if(!t||!r)return;let n=await tr(),i=Qe(t);if(re.get(i))return;let a=Z.default.join(n,t);await ee(n),await(0,P.writeFile)(a,r),re.set(i,a)}async function Tn(e,t){let r=re.get(t);!r||await(0,P.unlink)(r)}var or="message-logger-logs.json",En=new Pe;async function Dn(e){let t=await rr();await ee(t);try{return JSON.parse(await(0,P.readFile)(Z.default.join(t,or),"utf-8"))}catch{}return null}async function In(e,t){let r=await rr();En.push(()=>(0,P.writeFile)(Z.default.join(r,or),t))}async function ye(){return Z.default.join(await U(),"savedImages")}async function U(){return Z.default.join(Q,"MessageLoggerData")}async function Pn(e,t){let r=await Re(),n=r[t]||await U(),o=(await Ce.dialog.showOpenDialog({properties:["openDirectory"],defaultPath:n})).filePaths[0];if(!o)throw Error("Invalid Directory");switch(r[t]=o,await et(r),t){case"logsDir":nt=o;break;case"imageCacheDir":it=o;break}return t==="imageCacheDir"&&await ir(e),o}async function An(e,t){Ce.shell.showItemInFolder(t)}var at={};G(at,{resolveRedirect:()=>kn});c();var ar=require("https"),Rn=/^https:\/\/(spotify\.link|s\.team)\/.+$/;function sr(e){return new Promise((t,r)=>{let n=(0,ar.request)(new URL(e),{method:"HEAD"},i=>{t(i.headers.location?sr(i.headers.location):e)});n.on("error",r),n.end()})}async function kn(e,t){return Rn.test(t)?sr(t):t}var st={};G(st,{readRecording:()=>Cn});c();var cr=require("electron"),lr=require("fs/promises"),we=require("path");async function Cn(e,t){t=(0,we.normalize)(t);let r=(0,we.basename)(t),n=(0,we.normalize)(cr.app.getPath("userData")+"/");if(console.log(r,n,t),r!=="recording.ogg"||!t.startsWith(n))return null;try{let i=await(0,lr.readFile)(t);return new Uint8Array(i.buffer)}catch{return null}}var pr={};c();var fr=require("electron");c();var ur=`"use strict";const LOGO_ID="block-youtube-ads-logo",hiddenCSS=["#__ffYoutube1","#__ffYoutube2","#__ffYoutube3","#__ffYoutube4","#feed-pyv-container","#feedmodule-PRO","#homepage-chrome-side-promo","#merch-shelf","#offer-module",'#pla-shelf > ytd-pla-shelf-renderer[class="style-scope ytd-watch"]',"#pla-shelf","#premium-yva","#promo-info","#promo-list","#promotion-shelf","#related > ytd-watch-next-secondary-results-renderer > #items > ytd-compact-promoted-video-renderer.ytd-watch-next-secondary-results-renderer","#search-pva","#shelf-pyv-container","#video-masthead","#watch-branded-actions","#watch-buy-urls","#watch-channel-brand-div","#watch7-branded-banner","#YtKevlarVisibilityIdentifier","#YtSparklesVisibilityIdentifier",".carousel-offer-url-container",".companion-ad-container",".GoogleActiveViewElement",'.list-view[style="margin: 7px 0pt;"]',".promoted-sparkles-text-search-root-container",".promoted-videos",".searchView.list-view",".sparkles-light-cta",".watch-extra-info-column",".watch-extra-info-right",".ytd-carousel-ad-renderer",".ytd-compact-promoted-video-renderer",".ytd-companion-slot-renderer",".ytd-merch-shelf-renderer",".ytd-player-legacy-desktop-watch-ads-renderer",".ytd-promoted-sparkles-text-search-renderer",".ytd-promoted-video-renderer",".ytd-search-pyv-renderer",".ytd-video-masthead-ad-v3-renderer",".ytp-ad-action-interstitial-background-container",".ytp-ad-action-interstitial-slot",".ytp-ad-image-overlay",".ytp-ad-overlay-container",".ytp-ad-progress",".ytp-ad-progress-list",'[class*="ytd-display-ad-"]','[layout*="display-ad-"]','a[href^="http://www.youtube.com/cthru?"]','a[href^="https://www.youtube.com/cthru?"]',"ytd-action-companion-ad-renderer","ytd-banner-promo-renderer","ytd-compact-promoted-video-renderer","ytd-companion-slot-renderer","ytd-display-ad-renderer","ytd-promoted-sparkles-text-search-renderer","ytd-promoted-sparkles-web-renderer","ytd-search-pyv-renderer","ytd-single-option-survey-renderer","ytd-video-masthead-ad-advertiser-info-renderer","ytd-video-masthead-ad-v3-renderer","YTM-PROMOTED-VIDEO-RENDERER"],hideElements=()=>{const e=hiddenCSS;if(!e)return;const t=e.join(", ")+" { display: none!important; }",r=document.createElement("style");r.innerHTML=t,document.head.appendChild(r)},observeDomChanges=e=>{new MutationObserver(r=>{e(r)}).observe(document.documentElement,{childList:!0,subtree:!0})},hideDynamicAds=()=>{const e=document.querySelectorAll("#contents > ytd-rich-item-renderer ytd-display-ad-renderer");e.length!==0&&e.forEach(t=>{if(t.parentNode&&t.parentNode.parentNode){const r=t.parentNode.parentNode;r.localName==="ytd-rich-item-renderer"&&(r.style.display="none")}})},autoSkipAds=()=>{if(document.querySelector(".ad-showing")){const e=document.querySelector("video");e&&e.duration&&(e.currentTime=e.duration,setTimeout(()=>{const t=document.querySelector("button.ytp-ad-skip-button");t&&t.click()},100))}},overrideObject=(e,t,r)=>{if(!e)return!1;let n=!1;for(const o in e)e.hasOwnProperty(o)&&o===t?(e[o]=r,n=!0):e.hasOwnProperty(o)&&typeof e[o]=="object"&&overrideObject(e[o],t,r)&&(n=!0);return n},jsonOverride=(e,t)=>{const r=JSON.parse;JSON.parse=(...o)=>{const d=r.apply(this,o);return overrideObject(d,e,t),d};const n=Response.prototype.json;Response.prototype.json=new Proxy(n,{apply(...o){const d=Reflect.apply(...o);return new Promise((s,i)=>{d.then(a=>{overrideObject(a,e,t),s(a)}).catch(a=>i(a))})}})},addAdGuardLogoStyle=()=>{},addAdGuardLogo=()=>{if(document.getElementById(LOGO_ID))return;const e=document.createElement("span");if(e.innerHTML="__logo_text__",e.setAttribute("id",LOGO_ID),window.location.hostname==="m.youtube.com"){const t=document.querySelector("header.mobile-topbar-header > button");t&&(t.parentNode?.insertBefore(e,t.nextSibling),addAdGuardLogoStyle())}else if(window.location.hostname==="www.youtube.com"){const t=document.getElementById("country-code");t&&(t.innerHTML="",t.appendChild(e),addAdGuardLogoStyle())}else if(window.location.hostname==="music.youtube.com"){const t=document.querySelector(".ytmusic-nav-bar#left-content");t&&(t.appendChild(e),addAdGuardLogoStyle())}else if(window.location.hostname==="www.youtube-nocookie.com"){const t=document.querySelector("#yt-masthead #logo-container .content-region");t&&(t.innerHTML="",t.appendChild(e),addAdGuardLogoStyle())}};jsonOverride("adPlacements",[]),jsonOverride("playerAds",[]),hideElements(),addAdGuardLogo(),hideDynamicAds(),autoSkipAds(),observeDomChanges(()=>{addAdGuardLogo(),hideDynamicAds(),autoSkipAds()});
`;fr.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.includes("discordsays")&&n.url.includes("youtube.com")){if(!T.store.plugins?.WatchTogetherAdblock?.enabled)return;n.executeJavaScript(ur)}})})});var ct={};G(ct,{sendToOverlay:()=>On});c();var mr=require("dgram"),hr;function On(e,t){t.icon=Buffer.from(t.icon).toString("base64");let r=JSON.stringify(t);hr??=(0,mr.createSocket)("udp4"),hr.send(r,42069,"127.0.0.1")}var lt={};G(lt,{openFilePrompt:()=>Ln,readFilePath:()=>_n,uniqueIdForThisPluginCalledCustomUpload:()=>Mn});c();var dr=require("electron"),vr=require("fs");function Ln(){return new Promise((e,t)=>{let r=dr.dialog.showOpenDialogSync({properties:["openFile"]});console.log(r),r||(r=[]),e(r)})}function Mn(){}function _n(e,t){return console.log(e,t),(0,vr.readFileSync)(t)}var gr={CustomUpload:Be,Zeon:Ye,ConsoleShortcuts:Je,FixSpotifyEmbeds:Zt,FixYoutubeEmbeds:Bt,"Message-logger-enh":ot,OpenInApp:at,VoiceMessages:st,WatchTogetherAdblock:pr,XsOverlay:ct,ZiplineImages:lt};var yr={};for(let[e,t]of Object.entries(gr)){let r=Object.entries(t);if(!r.length)continue;let n=yr[e]={};for(let[i,o]of r){let a=`VencordPluginNative_${e}_${i}`;ut.ipcMain.handle(a,o),n[i]=a}}ut.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=yr});c();he();var d=require("electron");c();var wr="PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48dGl0bGU+VmVuY29yZCBRdWlja0NTUyBFZGl0b3I8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjQwLjAvbWluL3ZzL2VkaXRvci9lZGl0b3IubWFpbi5taW4uY3NzIiBpbnRlZ3JpdHk9InNoYTUxMi1NT29RMDJoODBoa2xjY2ZMclhGWWtDekcrV1ZqT1JmbE9wOVpwOGRsdGlhUlArMzVMWW5PNExLT2tsUjY0b01HZkdnSkRMTzhXSnBrTTFvNWdaWFlaUT09IiBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiByZWZlcnJlcnBvbGljeT0ibm8tcmVmZXJyZXIiPjxzdHlsZT4jY29udGFpbmVyLGJvZHksaHRtbHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MDtwYWRkaW5nOjA7b3ZlcmZsb3c6aGlkZGVufTwvc3R5bGU+PC9oZWFkPjxib2R5PjxkaXYgaWQ9ImNvbnRhaW5lciI+PC9kaXY+PHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21vbmFjby1lZGl0b3IvMC40MC4wL21pbi92cy9sb2FkZXIubWluLmpzIiBpbnRlZ3JpdHk9InNoYTUxMi1Rek1wWGVDUGNpQUhQNHdiWWxWMlBZZ3JRY2FFa0RRVWp6a1BVNHhuanlWU0Q5VDM2L3VkYW14dE5CcWI0cUs0L2JNUU1QWjhheXJCZTlockdkQkZqUT09IiBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiByZWZlcnJlcnBvbGljeT0ibm8tcmVmZXJyZXIiPjwvc2NyaXB0PjxzY3JpcHQ+cmVxdWlyZS5jb25maWcoe3BhdGhzOnt2czoiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjQwLjAvbWluL3ZzIn19KSxyZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sKCgpPT57Z2V0Q3VycmVudENzcygpLnRoZW4oKGU9Pnt2YXIgdD1tb25hY28uZWRpdG9yLmNyZWF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiY29udGFpbmVyIikse3ZhbHVlOmUsbGFuZ3VhZ2U6ImNzcyIsdGhlbWU6Z2V0VGhlbWUoKX0pO3Qub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCgpPT5zZXRDc3ModC5nZXRWYWx1ZSgpKSkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJyZXNpemUiLCgoKT0+e3QubGF5b3V0KCl9KSl9KSl9KSk8L3NjcmlwdD48L2JvZHk+PC9odG1sPg==";var Se=require("fs"),ie=require("fs/promises"),ne=require("path");c();var bn=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,Gn=/^\\@/;function ft(e,t={}){return{fileName:e,name:t.name??e.replace(/\.css$/i,""),author:t.author??"Unknown Author",description:t.description??"A Discord Theme.",version:t.version,license:t.license,source:t.source,website:t.website,invite:t.invite}}function Sr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function xr(e,t){if(!e)return ft(t);let r=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!r)return ft(t);let n={},i="",o="";for(let a of r.split(bn))if(a.length!==0)if(a.charAt(0)==="@"&&a.charAt(1)!==" "){n[i]=o.trim();let s=a.indexOf(" ");i=a.substring(1,s),o=a.substring(s+1)}else o+=" "+a.replace("\\n",`
`).replace(Gn,"@");return n[i]=o.trim(),delete n[""],ft(t,n)}c();var Tr=require("electron");function Er(e){e.webContents.setWindowOpenHandler(({url:t})=>{switch(t){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":case"https://saahild.com":return{action:"allow"}}try{var{protocol:r}=new URL(t)}catch{return{action:"deny"}}switch(r){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":Tr.shell.openExternal(t)}return{action:"deny"}})}(0,Se.mkdirSync)(j,{recursive:!0});function pt(e,t){let r=(0,ne.normalize)(e),n=(0,ne.join)(e,t),i=(0,ne.normalize)(n);return i.startsWith(r)?i:null}function Fn(){return(0,ie.readFile)(De,"utf-8").catch(()=>"")}async function Un(){let e=await(0,ie.readdir)(j).catch(()=>[]),t=[];for(let r of e){if(!r.endsWith(".css"))continue;let n=await Dr(r).then(Sr).catch(()=>null);n!=null&&t.push(xr(n,r))}return t}function Dr(e){e=e.replace(/\?v=\d+$/,"");let t=pt(j,e);return t?(0,ie.readFile)(t,"utf-8"):Promise.reject(`Unsafe path ${e}`)}d.ipcMain.handle("VencordOpenQuickCss",()=>d.shell.openPath(De));d.ipcMain.handle("VencordOpenExternal",(e,t)=>{try{var{protocol:r}=new URL(t)}catch{throw"Malformed URL"}if(!Nt.includes(r))throw"Disallowed protocol.";d.shell.openExternal(t)});d.ipcMain.handle("VencordGetQuickCss",()=>Fn());d.ipcMain.handle("VencordSetQuickCss",(e,t)=>(0,Se.writeFileSync)(De,t));d.ipcMain.handle("VencordGetThemesDir",()=>j);d.ipcMain.handle("VencordGetThemesList",()=>Un());d.ipcMain.handle("VencordGetThemeData",(e,t)=>Dr(t));d.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${d.systemPreferences.getAccentColor?.()||""}`}));d.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Vencord QuickCSS Editor",t=d.BrowserWindow.getAllWindows().find(n=>n.title===e);if(t&&!t.isDestroyed()){t.focus();return}let r=new d.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,ne.join)(__dirname,"vencordDesktopPreload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});Er(r),await r.loadURL(`data:text/html;base64,${wr}`)});c();var Wr=require("electron");c();var Ar=require("module"),Nn=(0,Ar.createRequire)("/"),Le,zn=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{Le=Nn("worker_threads").Worker}catch{}var Vn=Le?function(e,t,r,n,i){var o=!1,a=new Le(e+zn,{eval:!0}).on("error",function(s){return i(s,null)}).on("message",function(s){return i(null,s)}).on("exit",function(s){s&&!o&&i(new Error("exited with code "+s),null)});return a.postMessage(r,n),a.terminate=function(){return o=!0,Le.prototype.terminate.call(a)},a}:function(e,t,r,n,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},w=Uint8Array,N=Uint16Array,dt=Uint32Array,vt=new w([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),gt=new w([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Rr=new w([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),kr=function(e,t){for(var r=new N(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var i=new dt(r[30]),n=1;n<30;++n)for(var o=r[n];o<r[n+1];++o)i[o]=o-r[n]<<5|n;return[r,i]},Cr=kr(vt,2),yt=Cr[0],jn=Cr[1];yt[28]=258,jn[258]=28;var Or=kr(gt,0),Lr=Or[0],Qo=Or[1],be=new N(32768);for(h=0;h<32768;++h)C=(h&43690)>>>1|(h&21845)<<1,C=(C&52428)>>>2|(C&13107)<<2,C=(C&61680)>>>4|(C&3855)<<4,be[h]=((C&65280)>>>8|(C&255)<<8)>>>1;var C,h,oe=function(e,t,r){for(var n=e.length,i=0,o=new N(t);i<n;++i)e[i]&&++o[e[i]-1];var a=new N(t);for(i=0;i<t;++i)a[i]=a[i-1]+o[i-1]<<1;var s;if(r){s=new N(1<<t);var l=15-t;for(i=0;i<n;++i)if(e[i])for(var u=i<<4|e[i],m=t-e[i],v=a[e[i]-1]++<<m,D=v|(1<<m)-1;v<=D;++v)s[be[v]>>>l]=u}else for(s=new N(n),i=0;i<n;++i)e[i]&&(s[i]=be[a[e[i]-1]++]>>>15-e[i]);return s},xe=new w(288);for(h=0;h<144;++h)xe[h]=8;var h;for(h=144;h<256;++h)xe[h]=9;var h;for(h=256;h<280;++h)xe[h]=7;var h;for(h=280;h<288;++h)xe[h]=8;var h,Mr=new w(32);for(h=0;h<32;++h)Mr[h]=5;var h;var _r=oe(xe,9,1);var br=oe(Mr,5,1),Me=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},E=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(t&7)&r},_e=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},Gr=function(e){return(e+7)/8|0},Ge=function(e,t,r){(t==null||t<0)&&(t=0),(r==null||r>e.length)&&(r=e.length);var n=new(e.BYTES_PER_ELEMENT==2?N:e.BYTES_PER_ELEMENT==4?dt:w)(r-t);return n.set(e.subarray(t,r)),n};var Fr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],S=function(e,t,r){var n=new Error(t||Fr[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,S),!r)throw n;return n},Ur=function(e,t,r){var n=e.length;if(!n||r&&r.f&&!r.l)return t||new w(0);var i=!t||r,o=!r||r.i;r||(r={}),t||(t=new w(n*3));var a=function(Et){var Dt=t.length;if(Et>Dt){var It=new w(Math.max(Dt*2,Et));It.set(t),t=It}},s=r.f||0,l=r.p||0,u=r.b||0,m=r.l,v=r.d,D=r.m,O=r.n,se=n*8;do{if(!m){s=E(e,l,1);var z=E(e,l+1,3);if(l+=3,z)if(z==1)m=_r,v=br,D=9,O=5;else if(z==2){var M=E(e,l,31)+257,B=E(e,l+10,15)+4,ce=M+E(e,l+5,31)+1;l+=14;for(var V=new w(ce),le=new w(19),y=0;y<B;++y)le[Rr[y]]=E(e,l+y*3,7);l+=B*3;for(var k=Me(le),Te=(1<<k)-1,Y=oe(le,k,1),y=0;y<ce;){var ue=Y[E(e,l,Te)];l+=ue&15;var g=ue>>>4;if(g<16)V[y++]=g;else{var J=0,Ee=0;for(g==16?(Ee=3+E(e,l,3),l+=2,J=V[y-1]):g==17?(Ee=3+E(e,l,7),l+=3):g==18&&(Ee=11+E(e,l,127),l+=7);Ee--;)V[y++]=J}}var St=V.subarray(0,M),_=V.subarray(M);D=Me(St),O=Me(_),m=oe(St,D,1),v=oe(_,O,1)}else S(1);else{var g=Gr(l)+4,x=e[g-4]|e[g-3]<<8,L=g+x;if(L>n){o&&S(0);break}i&&a(u+x),t.set(e.subarray(g,L),u),r.b=u+=x,r.p=l=L*8,r.f=s;continue}if(l>se){o&&S(0);break}}i&&a(u+131072);for(var Yr=(1<<D)-1,Jr=(1<<O)-1,Fe=l;;Fe=l){var J=m[_e(e,l)&Yr],q=J>>>4;if(l+=J&15,l>se){o&&S(0);break}if(J||S(2),q<256)t[u++]=q;else if(q==256){Fe=l,m=null;break}else{var xt=q-254;if(q>264){var y=q-257,fe=vt[y];xt=E(e,l,(1<<fe)-1)+yt[y],l+=fe}var Ue=v[_e(e,l)&Jr],Ne=Ue>>>4;Ue||S(3),l+=Ue&15;var _=Lr[Ne];if(Ne>3){var fe=gt[Ne];_+=_e(e,l)&(1<<fe)-1,l+=fe}if(l>se){o&&S(0);break}i&&a(u+131072);for(var Tt=u+xt;u<Tt;u+=4)t[u]=t[u-_],t[u+1]=t[u+1-_],t[u+2]=t[u+2-_],t[u+3]=t[u+3-_];u=Tt}}r.l=m,r.p=Fe,r.b=u,r.f=s,m&&(s=1,r.m=D,r.d=v,r.n=O)}while(!s);return u==t.length?t:Ge(t,0,u)};var Wn=new w(0);var Zn=function(e,t){var r={};for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r},Ir=function(e,t,r){for(var n=e(),i=e.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var s=n[a],l=o[a];if(typeof s=="function"){t+=";"+l+"=";var u=s.toString();if(s.prototype)if(u.indexOf("[native code]")!=-1){var m=u.indexOf(" ",8)+1;t+=u.slice(m,u.indexOf("(",m))}else{t+=u;for(var v in s.prototype)t+=";"+l+".prototype."+v+"="+s.prototype[v].toString()}else t+=u}else r[l]=s}return[t,r]},Oe=[],Hn=function(e){var t=[];for(var r in e)e[r].buffer&&t.push((e[r]=new e[r].constructor(e[r])).buffer);return t},Bn=function(e,t,r,n){var i;if(!Oe[r]){for(var o="",a={},s=e.length-1,l=0;l<s;++l)i=Ir(e[l],o,a),o=i[0],a=i[1];Oe[r]=Ir(e[s],o,a)}var u=Zn({},Oe[r][1]);return Vn(Oe[r][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",r,u,Hn(u),n)},Yn=function(){return[w,N,dt,vt,gt,Rr,yt,Lr,_r,br,be,Fr,oe,Me,E,_e,Gr,Ge,S,Ur,wt,Nr,zr]};var Nr=function(e){return postMessage(e,[e.buffer])},zr=function(e){return e&&e.size&&new w(e.size)},Jn=function(e,t,r,n,i,o){var a=Bn(r,n,i,function(s,l){a.terminate(),o(s,l)});return a.postMessage([e,t],t.consume?[e.buffer]:[]),function(){a.terminate()}};var A=function(e,t){return e[t]|e[t+1]<<8},I=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},ht=function(e,t){return I(e,t)+I(e,t+4)*4294967296};function qn(e,t,r){return r||(r=t,t={}),typeof r!="function"&&S(7),Jn(e,t,[Yn],function(n){return Nr(wt(n.data[0],zr(n.data[1])))},1,r)}function wt(e,t){return Ur(e,t)}var mt=typeof TextDecoder<"u"&&new TextDecoder,$n=0;try{mt.decode(Wn,{stream:!0}),$n=1}catch{}var Kn=function(e){for(var t="",r=0;;){var n=e[r++],i=(n>127)+(n>223)+(n>239);if(r+i>e.length)return[t,Ge(e,r-1)];i?i==3?(n=((n&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):i&1?t+=String.fromCharCode((n&31)<<6|e[r++]&63):t+=String.fromCharCode((n&15)<<12|(e[r++]&63)<<6|e[r++]&63):t+=String.fromCharCode(n)}};function Qn(e,t){if(t){for(var r="",n=0;n<e.length;n+=16384)r+=String.fromCharCode.apply(null,e.subarray(n,n+16384));return r}else{if(mt)return mt.decode(e);var i=Kn(e),o=i[0],a=i[1];return a.length&&S(8),o}}var Xn=function(e,t){return t+30+A(e,t+26)+A(e,t+28)},ei=function(e,t,r){var n=A(e,t+28),i=Qn(e.subarray(t+46,t+46+n),!(A(e,t+8)&2048)),o=t+46+n,a=I(e,t+20),s=r&&a==4294967295?ti(e,o):[a,I(e,t+24),I(e,t+42)],l=s[0],u=s[1],m=s[2];return[A(e,t+10),l,u,i,o+A(e,t+30)+A(e,t+32),m]},ti=function(e,t){for(;A(e,t)!=1;t+=4+A(e,t+2));return[ht(e,t+12),ht(e,t+4),ht(e,t+20)]};var Pr=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Vr(e,t,r){r||(r=t,t={}),typeof r!="function"&&S(7);var n=[],i=function(){for(var g=0;g<n.length;++g)n[g]()},o={},a=function(g,x){Pr(function(){r(g,x)})};Pr(function(){a=r});for(var s=e.length-22;I(e,s)!=101010256;--s)if(!s||e.length-s>65558)return a(S(13,0,1),null),i;var l=A(e,s+8);if(l){var u=l,m=I(e,s+16),v=m==4294967295||u==65535;if(v){var D=I(e,s-12);v=I(e,D)==101075792,v&&(u=l=I(e,D+32),m=I(e,D+48))}for(var O=t&&t.filter,se=function(g){var x=ei(e,m,v),L=x[0],M=x[1],B=x[2],ce=x[3],V=x[4],le=x[5],y=Xn(e,le);m=V;var k=function(Y,ue){Y?(i(),a(Y,null)):(ue&&(o[ce]=ue),--l||a(null,o))};if(!O||O({name:ce,size:M,originalSize:B,compression:L}))if(!L)k(null,Ge(e,y,y+M));else if(L==8){var Te=e.subarray(y,y+M);if(M<32e4)try{k(null,wt(Te,new w(B)))}catch(Y){k(Y,null)}else n.push(qn(Te,{size:B},k))}else k(S(14,"unknown compression type "+L,1),null);else k(null,null)},z=0;z<u;++z)se(z)}else a(null,{});return i}var Zr=require("fs"),R=require("fs/promises"),ae=require("path");c();function jr(e){function t(a,s,l,u){let m=0;return m+=a<<0,m+=s<<8,m+=l<<16,m+=u<<24>>>0,m}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,n=e[4]===2;if(!n&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(n){let a=t(e[8],e[9],e[10],e[11]),s=t(e[12],e[13],e[14],e[15]),l=16+a+s;return e.subarray(l,e.length)}let o=12+t(e[8],e[9],e[10],e[11]);return e.subarray(o,e.length)}We();var ri=(0,ae.join)(Q,"ExtensionCache");async function ni(e,t){return await(0,R.mkdir)(t,{recursive:!0}),new Promise((r,n)=>{Vr(e,(i,o)=>{if(i)return void n(i);Promise.all(Object.keys(o).map(async a=>{if(a.startsWith("_metadata/"))return;if(a.endsWith("/"))return void(0,R.mkdir)((0,ae.join)(t,a),{recursive:!0});let s=a.split("/"),l=s.pop(),u=s.join("/"),m=(0,ae.join)(t,u);u&&await(0,R.mkdir)(m,{recursive:!0}),await(0,R.writeFile)((0,ae.join)(m,l),o[a])})).then(()=>r()).catch(a=>{(0,R.rm)(t,{recursive:!0,force:!0}),n(a)})})})}async function Hr(e){let t=(0,ae.join)(ri,`${e}`);try{await(0,R.access)(t,Zr.constants.F_OK)}catch{let n=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await K(n,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await ni(jr(i),t).catch(console.error)}Wr.session.defaultSession.loadExtension(t)}H.app.whenReady().then(()=>{H.protocol.registerFileProtocol("vencord",({url:i},o)=>{let a=i.slice(10);if(a.endsWith("/")&&(a=a.slice(0,-1)),a.startsWith("/themes/")){let s=a.slice(8),l=pt(j,s);if(!l){o({statusCode:403});return}o(l.replace(/\?v=\d+$/,""));return}switch(a){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":o((0,Br.join)(__dirname,a));break;default:o({statusCode:403})}});try{T.store.enableReactDevtools&&Hr("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(i=>console.error("[Vencord] Failed to install React Developer Tools",i))}catch{}let e=(i,o)=>Object.keys(i).find(a=>a.toLowerCase()===o),t=i=>{let o={};return i.split(";").forEach(a=>{let[s,...l]=a.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(o,s)&&(o[s]=l)}),o},r=i=>Object.entries(i).filter(([,o])=>o?.length).map(o=>o.flat().join(" ")).join("; "),n=i=>{let o=e(i,"content-security-policy");if(o){let a=t(i[o][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[s]??=[],a[s].push("*","blob:","data:","vencord:","'unsafe-inline'");a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),i[o]=[r(a)]}};H.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:i,resourceType:o},a)=>{if(i&&(o==="mainFrame"&&n(i),o==="stylesheet")){let s=e(i,"content-type");s&&(i[s]=["text/css"])}a({cancel:!1,responseHeaders:i})}),H.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
