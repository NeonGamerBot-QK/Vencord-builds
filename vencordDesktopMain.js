// Vencord bb3ceb7
// Standalone: true
// Platform: Universal
// Updater Disabled: false
"use strict";var an=Object.create;var Ie=Object.defineProperty;var sn=Object.getOwnPropertyDescriptor;var cn=Object.getOwnPropertyNames;var ln=Object.getPrototypeOf,un=Object.prototype.hasOwnProperty;var N=(e,t)=>()=>(e&&(t=e(e=0)),t);var C=(e,t)=>{for(var r in t)Ie(e,r,{get:t[r],enumerable:!0})},kt=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of cn(t))!un.call(e,i)&&i!==r&&Ie(e,i,{get:()=>t[i],enumerable:!(n=sn(t,i))||n.enumerable});return e};var X=(e,t,r)=>(r=e!=null?an(ln(e)):{},kt(t||!e||!e.__esModule?Ie(r,"default",{value:e,enumerable:!0}):r,e)),fn=e=>kt(Ie({},"__esModule",{value:!0}),e);var c=N(()=>{"use strict"});var me=N(()=>{"use strict";c()});var de,Ze=N(()=>{c();de="bb3ceb7"});var F,je=N(()=>{c();F="NeonGamerBot-QK/Vencord"});var Ot,Ai,Ct=N(()=>{"use strict";c();Ze();je();Ot=`ZeonVencord/${de}${F?` (https://github.com/${F})`:""}`,Ai=`ZeonVencord${F?` (https://github.com/${F})`:""}`});function Q(e,t={}){return new Promise((r,n)=>{_t.default.get(e,t,i=>{let{statusCode:o,statusMessage:a,headers:s}=i;if(o>=400)return void n(`${o}: ${a} - ${e}`);if(o>=300)return void r(Q(s.location,t));let l=[];i.on("error",n),i.on("data",u=>l.push(u)),i.once("end",()=>r(Buffer.concat(l)))})})}var _t,We=N(()=>{"use strict";c();_t=X(require("https"))});function ve(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(t){return{ok:!1,error:t instanceof Error?{...t}:t}}}}var Lt,Mt=N(()=>{"use strict";c();Lt=["vencordDesktopMain.js","vencordDesktopPreload.js","vencordDesktopRenderer.js","vencordDesktopRenderer.css"]});var dn={};async function Nt(e){return Q(pn+e,{headers:{Accept:"application/vnd.github+json","User-Agent":Ot}})}async function hn(){if(!await Ft())return[];let t=await Nt(`/compare/${de}...HEAD`);return JSON.parse(t.toString("utf-8")).commits.map(n=>({hash:n.sha.slice(0,7),author:n.author.login,message:n.commit.message.split(`
`)[0]}))}async function Ft(){let e=await Nt("/releases/latest"),t=JSON.parse(e.toString());return t.name.slice(t.name.lastIndexOf(" ")+1)===de?!1:(t.assets.forEach(({name:n,browser_download_url:i})=>{Lt.some(o=>n.startsWith(o))&&He.push([n,i])}),!0)}async function mn(){return await Promise.all(He.map(async([e,t])=>(0,bt.writeFile)((0,Gt.join)(__dirname,e),await Q(t)))),He=[],!0}var ge,bt,Gt,pn,He,Ut=N(()=>{"use strict";c();me();Ct();ge=require("electron"),bt=require("fs/promises"),Gt=require("path");Ze();je();We();Mt();pn=`https://api.github.com/repos/${F}`,He=[];ge.ipcMain.handle("VencordGetRepo",ve(()=>`https://github.com/${F}`));ge.ipcMain.handle("VencordGetUpdates",ve(hn));ge.ipcMain.handle("VencordUpdate",ve(Ft));ge.ipcMain.handle("VencordBuild",ve(mn))});c();var J=require("electron"),rn=require("path");c();c();Ut();c();me();var ht=require("electron");c();var Je={};C(Je,{openFilePrompt:()=>vn,readFilePath:()=>yn,uniqueIdForThisPluginCalledCustomUpload:()=>gn});c();var Vt=require("electron"),zt=require("fs");function vn(){return new Promise((e,t)=>{let r=Vt.dialog.showOpenDialogSync({properties:["openFile"]});console.log(r),r||(r=[]),e(r)})}function gn(){}function yn(e,t){return console.log(e,t),(0,zt.readFileSync)(t)}var $e={};C($e,{getHostname:()=>Sn,noop:()=>wn});c();var Zt=X(require("os")),wn=()=>{},Sn=()=>Zt.default.hostname();var Ke={};C(Ke,{fetchTrackData:()=>Tn});c();var Ht=require("child_process"),Bt=require("util"),Jt=(0,Bt.promisify)(Ht.execFile);async function Ye(e){let{stdout:t}=await Jt("osascript",e.map(r=>["-e",r]).flat());return t}function jt(e,t){let r=new URL("https://tools.applemediaservices.com/api/apple-media/music/US/search.json");return r.searchParams.set("types",e),r.searchParams.set("limit","1"),r.searchParams.set("term",t),r}var Wt={headers:{"user-agent":"Mozilla/5.0 (Windows NT 10.0; rv:125.0) Gecko/20100101 Firefox/125.0"}},I=null;async function xn({id:e,name:t,artist:r,album:n}){if(e===I?.id){if("data"in I)return I.data;if("failures"in I&&I.failures>=5)return null}try{let[i,o]=await Promise.all([fetch(jt("songs",r+" "+n+" "+t),Wt).then(f=>f.json()),fetch(jt("artists",r.split(/ *[,&] */)[0]),Wt).then(f=>f.json())]),a=i?.songs?.data[0]?.attributes.url,s=i?.songs?.data[0]?.id?`https://song.link/i/${i?.songs?.data[0]?.id}`:void 0,l=i?.songs?.data[0]?.attributes.artwork.url.replace("{w}","512").replace("{h}","512"),u=o?.artists?.data[0]?.attributes.artwork.url.replace("{w}","512").replace("{h}","512");return I={id:e,data:{appleMusicLink:a,songLink:s,albumArtwork:l,artistArtwork:u}},I.data}catch(i){return console.error("[AppleMusicRichPresence] Failed to fetch remote data:",i),I={id:e,failures:(e===I?.id&&"failures"in I?I.failures:0)+1},null}}async function Tn(){try{await Jt("pgrep",["^Music$"])}catch{return null}if(await Ye(['tell application "Music"',"get player state","end tell"]).then(f=>f.trim())!=="playing")return null;let t=await Ye(['tell application "Music"',"get player position","end tell"]).then(f=>Number.parseFloat(f.trim())),r=await Ye(['set output to ""','tell application "Music"',"set t_id to database id of current track","set t_name to name of current track","set t_album to album of current track","set t_artist to artist of current track","set t_duration to duration of current track",'set output to "" & t_id & "\\n" & t_name & "\\n" & t_album & "\\n" & t_artist & "\\n" & t_duration',"end tell","return output"]),[n,i,o,a,s]=r.split(`
`).filter(f=>!!f),l=Number.parseFloat(s),u=await xn({id:n,name:i,artist:a,album:o});return{name:i,album:o,artist:a,playerPosition:t,duration:l,...u}}var qe={};C(qe,{initDevtoolsOpenEagerLoad:()=>Dn});c();function Dn(e){let t=()=>e.sender.executeJavaScript("Vencord.Plugins.plugins.ConsoleShortcuts.eagerLoad(true)");e.sender.isDevToolsOpened()?t():e.sender.once("devtools-opened",()=>t())}var er={};c();c();me();c();var ye=class{pathListeners=new Map;globalListeners=new Set;constructor(t,r={}){this.plain=t,this.store=this.makeProxy(t),Object.assign(this,r)}makeProxy(t,r=t,n=""){let i=this;return new Proxy(t,{get(o,a){let s=o[a];return!(a in o)&&i.getDefaultValue&&(s=i.getDefaultValue({target:o,key:a,root:r,path:n})),typeof s=="object"&&s!==null&&!Array.isArray(s)?i.makeProxy(s,r,`${n}${n&&"."}${a}`):s},set(o,a,s){if(o[a]===s)return!0;Reflect.set(o,a,s);let l=`${n}${n&&"."}${a}`;return i.globalListeners.forEach(u=>u(s,l)),i.pathListeners.get(l)?.forEach(u=>u(s)),!0}})}setData(t,r){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=t,this.store=this.makeProxy(t),r){let n=t,i=r.split(".");for(let o of i){if(!n){console.warn(`Settings#setData: Path ${r} does not exist in new data. Not dispatching update`);return}n=n[o]}this.pathListeners.get(r)?.forEach(o=>o(n))}this.markAsChanged()}addGlobalChangeListener(t){this.globalListeners.add(t)}addChangeListener(t,r){let n=this.pathListeners.get(t)??new Set;n.add(r),this.pathListeners.set(t,n)}removeGlobalChangeListener(t){this.globalListeners.delete(t)}removeChangeListener(t,r){let n=this.pathListeners.get(t);!n||(n.delete(r),n.size||this.pathListeners.delete(t))}markAsChanged(){this.globalListeners.forEach(t=>t(this.plain,""))}};c();function Xe(e,t){for(let r in t){let n=t[r];typeof n=="object"&&!Array.isArray(n)?(e[r]??={},Xe(e[r],n)):e[r]??=n}return e}var Ae=require("electron"),H=require("fs");c();var $t=require("electron"),U=require("path"),ee=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,U.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,U.join)($t.app.getPath("userData"),"..","Vencord")),te=(0,U.join)(ee,"settings"),W=(0,U.join)(ee,"themes"),Pe=(0,U.join)(te,"quickCss.css"),Qe=(0,U.join)(te,"settings.json"),et=(0,U.join)(te,"native-settings.json"),Yt=["https:","http:","steam:","spotify:","com.epicgames.launcher:","tidal:"];(0,H.mkdirSync)(te,{recursive:!0});function qt(e,t){try{return JSON.parse((0,H.readFileSync)(t,"utf-8"))}catch(r){return r?.code!=="ENOENT"&&console.error(`Failed to read ${e} settings`,r),{}}}var T=new ye(qt("renderer",Qe));T.addGlobalChangeListener(()=>{try{(0,H.writeFileSync)(Qe,JSON.stringify(T.plain,null,4))}catch(e){console.error("Failed to write renderer settings",e)}});Ae.ipcMain.handle("VencordGetSettingsDir",()=>te);Ae.ipcMain.on("VencordGetSettings",e=>e.returnValue=T.plain);Ae.ipcMain.handle("VencordSetSettings",(e,t,r)=>{T.setData(t,r)});var En={plugins:{}},Xt=qt("native",et);Xe(Xt,En);var Kt=new ye(Xt);Kt.addGlobalChangeListener(()=>{try{(0,H.writeFileSync)(et,JSON.stringify(Kt.plain,null,4))}catch(e){console.error("Failed to write native settings",e)}});var Qt=require("electron");Qt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://open.spotify.com/embed/")){let i=T.store.plugins?.FixSpotifyEmbeds;if(!i?.enabled)return;n.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${i.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})});var rr={};c();var tr=require("electron");tr.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://www.youtube.com/")){if(!T.store.plugins?.FixYoutubeEmbeds?.enabled)return;n.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})});var ct={};C(ct,{chooseDir:()=>Un,deleteFileNative:()=>bn,getCommitHash:()=>ur,getDefaultNativeDataDir:()=>V,getDefaultNativeImageDir:()=>we,getImageNative:()=>Ln,getLogsFromFs:()=>Nn,getNativeSavedImages:()=>_n,getNewCommits:()=>On,getRepoInfo:()=>kn,getSettings:()=>Oe,init:()=>mr,initDirs:()=>hr,messageLoggerEnhancedUniqueIdThingyIdkMan:()=>Cn,showItemInFolder:()=>Vn,update:()=>Rn,writeImageNative:()=>Mn,writeLogs:()=>Fn});c();var A=require("node:fs/promises"),B=X(require("node:path"));c();var Re=class{constructor(t=1/0){this.maxSize=t}queue=[];promise;next(){let t=this.queue.shift();t?this.promise=Promise.resolve().then(t).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(t){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(t),this.run()}unshift(t){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(t),this.run()}get size(){return this.queue.length}};var _e=require("electron");c();var rt=X(require("fs/promises")),ir=X(require("path"));c();var ke=require("fs/promises"),nr=X(require("path"));async function In(e){try{return await(0,ke.access)(e),!0}catch{return!1}}async function re(e){await In(e)||await(0,ke.mkdir)(e)}function tt(e){return nr.default.parse(e).name}async function Oe(){try{let e=await rt.default.readFile(await or(),"utf8");return JSON.parse(e)}catch{let t={logsDir:await V(),imageCacheDir:await we()};try{await nt(t)}catch{}return t}}async function nt(e){!e||await rt.default.writeFile(await or(),JSON.stringify(e,null,4),"utf8")}async function or(){let e=await V();return await re(e),ir.default.join(e,"mlSettings.json")}c();var cr=require("node:child_process"),ot=require("fs/promises"),Ce=require("path"),lr=require("util");c();function ar(e){let t=new Map,r=(...n)=>{let i=JSON.stringify(n);if(t.has(i))return t.get(i);let o=e(...n);return t.set(i,o),o};return r.clear=()=>t.clear(),r}var sr=(0,lr.promisify)(cr.execFile),Pn=process.platform==="linux"&&Boolean(process.env.FLATPAK_ID?.includes("discordapp")||process.env.FLATPAK_ID?.includes("Discord"));process.platform==="darwin"&&(process.env.PATH=`/usr/local/bin:${process.env.PATH}`);var it=(0,Ce.join)(__dirname,"..","src","userplugins"),An=ar(async()=>{let e=await(0,ot.readdir)(it,{withFileTypes:!0});for(let t of e){if(!t.isDirectory())continue;let r=(0,Ce.join)(it,t.name);if((await(0,ot.readdir)(r)).includes("LoggedMessageManager.ts"))return(0,Ce.join)(it,t.name)}});async function ne(...e){let t={cwd:await An(),shell:!0};try{let r;return Pn?r=await sr("flatpak-spawn",["--host","git",...e],t):r=await sr("git",e,t),{value:r.stdout.trim(),stderr:r.stderr,ok:!0}}catch(r){return{ok:!1,cmd:r.cmd,message:r.stderr,error:r}}}async function Rn(){return await ne("pull")}async function ur(){return await ne("rev-parse","HEAD")}async function kn(){let e=await ne("remote","get-url","origin");if(!e.ok)return e;let t=await ur();return t.ok?{ok:!0,value:{repo:e.value.replace(/git@(.+):/,"https://$1/").replace(/\.git$/,""),gitHash:t.value}}:t}async function On(){let e=await ne("branch","--show-current");if(!e.ok)return e;let t="%H;%an;%s",r=`HEAD..origin/${e.value}`;try{await ne("fetch");let n=await ne("log",`--format="${t}"`,r);return n.ok?n.value.trim()===""?{ok:!0,value:[]}:{ok:!0,value:n.value.trim().split(`
`).map(a=>{let[s,l,...u]=a.split(";");return{longHash:s,hash:s.slice(0,7),author:l,message:u.join(";")}})}:n}catch(n){return{ok:!1,cmd:n.cmd,message:n.message,error:n}}}function Cn(){}var ie=new Map,_n=()=>ie,at,st,fr=async()=>st??await we(),pr=async()=>at??await V();async function hr(){let{logsDir:e,imageCacheDir:t}=await Oe();at=e||await V(),st=t||await we()}hr();async function mr(e){let t=await fr();await re(t);let r=await(0,A.readdir)(t);for(let n of r){let i=tt(n);ie.set(i,B.default.join(t,n))}}async function Ln(e,t){let r=ie.get(t);return r?await(0,A.readFile)(r):null}async function Mn(e,t,r){if(!t||!r)return;let n=await fr(),i=tt(t);if(ie.get(i))return;let a=B.default.join(n,t);await re(n),await(0,A.writeFile)(a,r),ie.set(i,a)}async function bn(e,t){let r=ie.get(t);!r||await(0,A.unlink)(r)}var dr="message-logger-logs.json",Gn=new Re;async function Nn(e){let t=await pr();await re(t);try{return JSON.parse(await(0,A.readFile)(B.default.join(t,dr),"utf-8"))}catch{}return null}async function Fn(e,t){let r=await pr();Gn.push(()=>(0,A.writeFile)(B.default.join(r,dr),t))}async function we(){return B.default.join(await V(),"savedImages")}async function V(){return B.default.join(ee,"MessageLoggerData")}async function Un(e,t){let r=await Oe(),n=r[t]||await V(),o=(await _e.dialog.showOpenDialog({properties:["openDirectory"],defaultPath:n})).filePaths[0];if(!o)throw Error("Invalid Directory");switch(r[t]=o,await nt(r),t){case"logsDir":at=o;break;case"imageCacheDir":st=o;break}return t==="imageCacheDir"&&await mr(e),o}async function Vn(e,t){_e.shell.showItemInFolder(t)}var lt={};C(lt,{resolveRedirect:()=>Zn});c();var vr=require("https"),zn=/^https:\/\/(spotify\.link|s\.team)\/.+$/;function gr(e){return new Promise((t,r)=>{let n=(0,vr.request)(new URL(e),{method:"HEAD"},i=>{t(i.headers.location?gr(i.headers.location):e)});n.on("error",r),n.end()})}async function Zn(e,t){return zn.test(t)?gr(t):t}var ut={};C(ut,{readRecording:()=>jn});c();var yr=require("electron"),wr=require("fs/promises"),Se=require("path");async function jn(e,t){t=(0,Se.normalize)(t);let r=(0,Se.basename)(t),n=(0,Se.normalize)(yr.app.getPath("userData")+"/");if(console.log(r,n,t),r!=="recording.ogg"||!t.startsWith(n))return null;try{let i=await(0,wr.readFile)(t);return new Uint8Array(i.buffer)}catch{return null}}var Tr={};c();var xr=require("electron");c();var Sr=`"use strict";const LOGO_ID="block-youtube-ads-logo",hiddenCSS=["#__ffYoutube1","#__ffYoutube2","#__ffYoutube3","#__ffYoutube4","#feed-pyv-container","#feedmodule-PRO","#homepage-chrome-side-promo","#merch-shelf","#offer-module",'#pla-shelf > ytd-pla-shelf-renderer[class="style-scope ytd-watch"]',"#pla-shelf","#premium-yva","#promo-info","#promo-list","#promotion-shelf","#related > ytd-watch-next-secondary-results-renderer > #items > ytd-compact-promoted-video-renderer.ytd-watch-next-secondary-results-renderer","#search-pva","#shelf-pyv-container","#video-masthead","#watch-branded-actions","#watch-buy-urls","#watch-channel-brand-div","#watch7-branded-banner","#YtKevlarVisibilityIdentifier","#YtSparklesVisibilityIdentifier",".carousel-offer-url-container",".companion-ad-container",".GoogleActiveViewElement",'.list-view[style="margin: 7px 0pt;"]',".promoted-sparkles-text-search-root-container",".promoted-videos",".searchView.list-view",".sparkles-light-cta",".watch-extra-info-column",".watch-extra-info-right",".ytd-carousel-ad-renderer",".ytd-compact-promoted-video-renderer",".ytd-companion-slot-renderer",".ytd-merch-shelf-renderer",".ytd-player-legacy-desktop-watch-ads-renderer",".ytd-promoted-sparkles-text-search-renderer",".ytd-promoted-video-renderer",".ytd-search-pyv-renderer",".ytd-video-masthead-ad-v3-renderer",".ytp-ad-action-interstitial-background-container",".ytp-ad-action-interstitial-slot",".ytp-ad-image-overlay",".ytp-ad-overlay-container",".ytp-ad-progress",".ytp-ad-progress-list",'[class*="ytd-display-ad-"]','[layout*="display-ad-"]','a[href^="http://www.youtube.com/cthru?"]','a[href^="https://www.youtube.com/cthru?"]',"ytd-action-companion-ad-renderer","ytd-banner-promo-renderer","ytd-compact-promoted-video-renderer","ytd-companion-slot-renderer","ytd-display-ad-renderer","ytd-promoted-sparkles-text-search-renderer","ytd-promoted-sparkles-web-renderer","ytd-search-pyv-renderer","ytd-single-option-survey-renderer","ytd-video-masthead-ad-advertiser-info-renderer","ytd-video-masthead-ad-v3-renderer","YTM-PROMOTED-VIDEO-RENDERER"],hideElements=()=>{const e=hiddenCSS;if(!e)return;const t=e.join(", ")+" { display: none!important; }",r=document.createElement("style");r.innerHTML=t,document.head.appendChild(r)},observeDomChanges=e=>{new MutationObserver(r=>{e(r)}).observe(document.documentElement,{childList:!0,subtree:!0})},hideDynamicAds=()=>{const e=document.querySelectorAll("#contents > ytd-rich-item-renderer ytd-display-ad-renderer");e.length!==0&&e.forEach(t=>{if(t.parentNode&&t.parentNode.parentNode){const r=t.parentNode.parentNode;r.localName==="ytd-rich-item-renderer"&&(r.style.display="none")}})},autoSkipAds=()=>{if(document.querySelector(".ad-showing")){const e=document.querySelector("video");e&&e.duration&&(e.currentTime=e.duration,setTimeout(()=>{const t=document.querySelector("button.ytp-ad-skip-button");t&&t.click()},100))}},overrideObject=(e,t,r)=>{if(!e)return!1;let n=!1;for(const o in e)e.hasOwnProperty(o)&&o===t?(e[o]=r,n=!0):e.hasOwnProperty(o)&&typeof e[o]=="object"&&overrideObject(e[o],t,r)&&(n=!0);return n},jsonOverride=(e,t)=>{const r=JSON.parse;JSON.parse=(...o)=>{const d=r.apply(this,o);return overrideObject(d,e,t),d};const n=Response.prototype.json;Response.prototype.json=new Proxy(n,{apply(...o){const d=Reflect.apply(...o);return new Promise((s,i)=>{d.then(a=>{overrideObject(a,e,t),s(a)}).catch(a=>i(a))})}})},addAdGuardLogoStyle=()=>{},addAdGuardLogo=()=>{if(document.getElementById(LOGO_ID))return;const e=document.createElement("span");if(e.innerHTML="__logo_text__",e.setAttribute("id",LOGO_ID),window.location.hostname==="m.youtube.com"){const t=document.querySelector("header.mobile-topbar-header > button");t&&(t.parentNode?.insertBefore(e,t.nextSibling),addAdGuardLogoStyle())}else if(window.location.hostname==="www.youtube.com"){const t=document.getElementById("country-code");t&&(t.innerHTML="",t.appendChild(e),addAdGuardLogoStyle())}else if(window.location.hostname==="music.youtube.com"){const t=document.querySelector(".ytmusic-nav-bar#left-content");t&&(t.appendChild(e),addAdGuardLogoStyle())}else if(window.location.hostname==="www.youtube-nocookie.com"){const t=document.querySelector("#yt-masthead #logo-container .content-region");t&&(t.innerHTML="",t.appendChild(e),addAdGuardLogoStyle())}};jsonOverride("adPlacements",[]),jsonOverride("playerAds",[]),hideElements(),addAdGuardLogo(),hideDynamicAds(),autoSkipAds(),observeDomChanges(()=>{addAdGuardLogo(),hideDynamicAds(),autoSkipAds()});
`;xr.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.includes("discordsays")&&n.url.includes("youtube.com")){if(!T.store.plugins?.WatchTogetherAdblock?.enabled)return;n.executeJavaScript(Sr)}})})});var ft={};C(ft,{sendToOverlay:()=>Wn});c();var Er=require("dgram"),Dr;function Wn(e,t){t.icon=Buffer.from(t.icon).toString("base64");let r=JSON.stringify(t);Dr??=(0,Er.createSocket)("udp4"),Dr.send(r,42069,"127.0.0.1")}var pt={};C(pt,{openFilePrompt:()=>Hn,readFilePath:()=>Jn,uniqueIdForThisPluginCalledCustomUpload:()=>Bn});c();var Ir=require("electron"),Pr=require("fs");function Hn(){return new Promise((e,t)=>{let r=Ir.dialog.showOpenDialogSync({properties:["openFile"]});console.log(r),r||(r=[]),e(r)})}function Bn(){}function Jn(e,t){return console.log(e,t),(0,Pr.readFileSync)(t)}var Ar={CustomUpload:Je,Zeon:$e,AppleMusicRichPresence:Ke,ConsoleShortcuts:qe,FixSpotifyEmbeds:er,FixYoutubeEmbeds:rr,MessageLoggerEnhanced:ct,OpenInApp:lt,VoiceMessages:ut,WatchTogetherAdblock:Tr,XSOverlay:ft,ziplineImages:pt};var Rr={};for(let[e,t]of Object.entries(Ar)){let r=Object.entries(t);if(!r.length)continue;let n=Rr[e]={};for(let[i,o]of r){let a=`VencordPluginNative_${e}_${i}`;ht.ipcMain.handle(a,o),n[i]=a}}ht.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=Rr});c();me();var d=require("electron");c();var kr="PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48dGl0bGU+VmVuY29yZCBRdWlja0NTUyBFZGl0b3I8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLmNzcyIgaW50ZWdyaXR5PSJzaGEyNTYtdGlKUFEyTzA0ei9wWi9Bd2R5SWdock9NemV3ZitQSXZFbDFZS2JRdnNaaz0iIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciI+PHN0eWxlPiNjb250YWluZXIsYm9keSxodG1se3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowO3BhZGRpbmc6MDtvdmVyZmxvdzpoaWRkZW59PC9zdHlsZT48L2hlYWQ+PGJvZHk+PGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj48c2NyaXB0IHNyYz0iaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMvbG9hZGVyLmpzIiBpbnRlZ3JpdHk9InNoYTI1Ni1LY1U0OFRHcjg0cjd1bkY3SjVJZ0JvOTVhZVZyRWJyR2UwNFM3VGNGVWpzPSIgY3Jvc3NvcmlnaW49ImFub255bW91cyIgcmVmZXJyZXJwb2xpY3k9Im5vLXJlZmVycmVyIj48L3NjcmlwdD48c2NyaXB0PnJlcXVpcmUuY29uZmlnKHtwYXRoczp7dnM6Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbW9uYWNvLWVkaXRvckAwLjUwLjAvbWluL3ZzIn19KSxyZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sKCgpPT57Z2V0Q3VycmVudENzcygpLnRoZW4oKGU9Pnt2YXIgdD1tb25hY28uZWRpdG9yLmNyZWF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiY29udGFpbmVyIikse3ZhbHVlOmUsbGFuZ3VhZ2U6ImNzcyIsdGhlbWU6Z2V0VGhlbWUoKX0pO3Qub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCgpPT5zZXRDc3ModC5nZXRWYWx1ZSgpKSkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJyZXNpemUiLCgoKT0+e3QubGF5b3V0KCl9KSl9KSl9KSk8L3NjcmlwdD48L2JvZHk+PC9odG1sPg==";var xe=require("fs"),ae=require("fs/promises"),oe=require("path");c();var $n=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,Yn=/^\\@/;function mt(e,t={}){return{fileName:e,name:t.name??e.replace(/\.css$/i,""),author:t.author??"Unknown Author",description:t.description??"A Discord Theme.",version:t.version,license:t.license,source:t.source,website:t.website,invite:t.invite}}function Or(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Cr(e,t){if(!e)return mt(t);let r=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!r)return mt(t);let n={},i="",o="";for(let a of r.split($n))if(a.length!==0)if(a.charAt(0)==="@"&&a.charAt(1)!==" "){n[i]=o.trim();let s=a.indexOf(" ");i=a.substring(1,s),o=a.substring(s+1)}else o+=" "+a.replace("\\n",`
`).replace(Yn,"@");return n[i]=o.trim(),delete n[""],mt(t,n)}c();var _r=require("electron");function Lr(e){e.webContents.setWindowOpenHandler(({url:t})=>{switch(t){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":case"https://saahild.com":return{action:"allow"}}try{var{protocol:r}=new URL(t)}catch{return{action:"deny"}}switch(r){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":_r.shell.openExternal(t)}return{action:"deny"}})}(0,xe.mkdirSync)(W,{recursive:!0});function dt(e,t){let r=(0,oe.normalize)(e),n=(0,oe.join)(e,t),i=(0,oe.normalize)(n);return i.startsWith(r)?i:null}function Kn(){return(0,ae.readFile)(Pe,"utf-8").catch(()=>"")}async function qn(){let e=await(0,ae.readdir)(W).catch(()=>[]),t=[];for(let r of e){if(!r.endsWith(".css"))continue;let n=await Mr(r).then(Or).catch(()=>null);n!=null&&t.push(Cr(n,r))}return t}function Mr(e){e=e.replace(/\?v=\d+$/,"");let t=dt(W,e);return t?(0,ae.readFile)(t,"utf-8"):Promise.reject(`Unsafe path ${e}`)}d.ipcMain.handle("VencordOpenQuickCss",()=>d.shell.openPath(Pe));d.ipcMain.handle("VencordOpenExternal",(e,t)=>{try{var{protocol:r}=new URL(t)}catch{throw"Malformed URL"}if(!Yt.includes(r))throw"Disallowed protocol.";d.shell.openExternal(t)});d.ipcMain.handle("VencordGetQuickCss",()=>Kn());d.ipcMain.handle("VencordSetQuickCss",(e,t)=>(0,xe.writeFileSync)(Pe,t));d.ipcMain.handle("VencordGetThemesDir",()=>W);d.ipcMain.handle("VencordGetThemesList",()=>qn());d.ipcMain.handle("VencordGetThemeData",(e,t)=>Mr(t));d.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${d.systemPreferences.getAccentColor?.()||""}`}));d.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Vencord QuickCSS Editor",t=d.BrowserWindow.getAllWindows().find(n=>n.title===e);if(t&&!t.isDestroyed()){t.focus();return}let r=new d.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,oe.join)(__dirname,"vencordDesktopPreload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});Lr(r),await r.loadURL(`data:text/html;base64,${kr}`)});c();var Qr=require("electron");c();var Nr=require("module"),Xn=(0,Nr.createRequire)("/"),Me,Qn=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{Me=Xn("worker_threads").Worker}catch{}var ei=Me?function(e,t,r,n,i){var o=!1,a=new Me(e+Qn,{eval:!0}).on("error",function(s){return i(s,null)}).on("message",function(s){return i(null,s)}).on("exit",function(s){s&&!o&&i(new Error("exited with code "+s),null)});return a.postMessage(r,n),a.terminate=function(){return o=!0,Me.prototype.terminate.call(a)},a}:function(e,t,r,n,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},w=Uint8Array,z=Uint16Array,yt=Uint32Array,wt=new w([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),St=new w([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Fr=new w([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ur=function(e,t){for(var r=new z(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var i=new yt(r[30]),n=1;n<30;++n)for(var o=r[n];o<r[n+1];++o)i[o]=o-r[n]<<5|n;return[r,i]},Vr=Ur(wt,2),xt=Vr[0],ti=Vr[1];xt[28]=258,ti[258]=28;var zr=Ur(St,0),Zr=zr[0],ha=zr[1],Ne=new z(32768);for(m=0;m<32768;++m)_=(m&43690)>>>1|(m&21845)<<1,_=(_&52428)>>>2|(_&13107)<<2,_=(_&61680)>>>4|(_&3855)<<4,Ne[m]=((_&65280)>>>8|(_&255)<<8)>>>1;var _,m,se=function(e,t,r){for(var n=e.length,i=0,o=new z(t);i<n;++i)e[i]&&++o[e[i]-1];var a=new z(t);for(i=0;i<t;++i)a[i]=a[i-1]+o[i-1]<<1;var s;if(r){s=new z(1<<t);var l=15-t;for(i=0;i<n;++i)if(e[i])for(var u=i<<4|e[i],f=t-e[i],v=a[e[i]-1]++<<f,E=v|(1<<f)-1;v<=E;++v)s[Ne[v]>>>l]=u}else for(s=new z(n),i=0;i<n;++i)e[i]&&(s[i]=Ne[a[e[i]-1]++]>>>15-e[i]);return s},Te=new w(288);for(m=0;m<144;++m)Te[m]=8;var m;for(m=144;m<256;++m)Te[m]=9;var m;for(m=256;m<280;++m)Te[m]=7;var m;for(m=280;m<288;++m)Te[m]=8;var m,jr=new w(32);for(m=0;m<32;++m)jr[m]=5;var m;var Wr=se(Te,9,1);var Hr=se(jr,5,1),be=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},D=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(t&7)&r},Ge=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},Br=function(e){return(e+7)/8|0},Fe=function(e,t,r){(t==null||t<0)&&(t=0),(r==null||r>e.length)&&(r=e.length);var n=new(e.BYTES_PER_ELEMENT==2?z:e.BYTES_PER_ELEMENT==4?yt:w)(r-t);return n.set(e.subarray(t,r)),n};var Jr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],S=function(e,t,r){var n=new Error(t||Jr[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,S),!r)throw n;return n},$r=function(e,t,r){var n=e.length;if(!n||r&&r.f&&!r.l)return t||new w(0);var i=!t||r,o=!r||r.i;r||(r={}),t||(t=new w(n*3));var a=function(Pt){var At=t.length;if(Pt>At){var Rt=new w(Math.max(At*2,Pt));Rt.set(t),t=Rt}},s=r.f||0,l=r.p||0,u=r.b||0,f=r.l,v=r.d,E=r.m,L=r.n,le=n*8;do{if(!f){s=D(e,l,1);var Z=D(e,l+1,3);if(l+=3,Z)if(Z==1)f=Wr,v=Hr,E=9,L=5;else if(Z==2){var b=D(e,l,31)+257,$=D(e,l+10,15)+4,ue=b+D(e,l+5,31)+1;l+=14;for(var j=new w(ue),fe=new w(19),y=0;y<$;++y)fe[Fr[y]]=D(e,l+y*3,7);l+=$*3;for(var O=be(fe),De=(1<<O)-1,Y=se(fe,O,1),y=0;y<ue;){var pe=Y[D(e,l,De)];l+=pe&15;var g=pe>>>4;if(g<16)j[y++]=g;else{var K=0,Ee=0;for(g==16?(Ee=3+D(e,l,3),l+=2,K=j[y-1]):g==17?(Ee=3+D(e,l,7),l+=3):g==18&&(Ee=11+D(e,l,127),l+=7);Ee--;)j[y++]=K}}var Dt=j.subarray(0,b),G=j.subarray(b);E=be(Dt),L=be(G),f=se(Dt,E,1),v=se(G,L,1)}else S(1);else{var g=Br(l)+4,x=e[g-4]|e[g-3]<<8,M=g+x;if(M>n){o&&S(0);break}i&&a(u+x),t.set(e.subarray(g,M),u),r.b=u+=x,r.p=l=M*8,r.f=s;continue}if(l>le){o&&S(0);break}}i&&a(u+131072);for(var nn=(1<<E)-1,on=(1<<L)-1,Ue=l;;Ue=l){var K=f[Ge(e,l)&nn],q=K>>>4;if(l+=K&15,l>le){o&&S(0);break}if(K||S(2),q<256)t[u++]=q;else if(q==256){Ue=l,f=null;break}else{var Et=q-254;if(q>264){var y=q-257,he=wt[y];Et=D(e,l,(1<<he)-1)+xt[y],l+=he}var Ve=v[Ge(e,l)&on],ze=Ve>>>4;Ve||S(3),l+=Ve&15;var G=Zr[ze];if(ze>3){var he=St[ze];G+=Ge(e,l)&(1<<he)-1,l+=he}if(l>le){o&&S(0);break}i&&a(u+131072);for(var It=u+Et;u<It;u+=4)t[u]=t[u-G],t[u+1]=t[u+1-G],t[u+2]=t[u+2-G],t[u+3]=t[u+3-G];u=It}}r.l=f,r.p=Ue,r.b=u,r.f=s,f&&(s=1,r.m=E,r.d=v,r.n=L)}while(!s);return u==t.length?t:Fe(t,0,u)};var ri=new w(0);var ni=function(e,t){var r={};for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r},br=function(e,t,r){for(var n=e(),i=e.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var s=n[a],l=o[a];if(typeof s=="function"){t+=";"+l+"=";var u=s.toString();if(s.prototype)if(u.indexOf("[native code]")!=-1){var f=u.indexOf(" ",8)+1;t+=u.slice(f,u.indexOf("(",f))}else{t+=u;for(var v in s.prototype)t+=";"+l+".prototype."+v+"="+s.prototype[v].toString()}else t+=u}else r[l]=s}return[t,r]},Le=[],ii=function(e){var t=[];for(var r in e)e[r].buffer&&t.push((e[r]=new e[r].constructor(e[r])).buffer);return t},oi=function(e,t,r,n){var i;if(!Le[r]){for(var o="",a={},s=e.length-1,l=0;l<s;++l)i=br(e[l],o,a),o=i[0],a=i[1];Le[r]=br(e[s],o,a)}var u=ni({},Le[r][1]);return ei(Le[r][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",r,u,ii(u),n)},ai=function(){return[w,z,yt,wt,St,Fr,xt,Zr,Wr,Hr,Ne,Jr,se,be,D,Ge,Br,Fe,S,$r,Tt,Yr,Kr]};var Yr=function(e){return postMessage(e,[e.buffer])},Kr=function(e){return e&&e.size&&new w(e.size)},si=function(e,t,r,n,i,o){var a=oi(r,n,i,function(s,l){a.terminate(),o(s,l)});return a.postMessage([e,t],t.consume?[e.buffer]:[]),function(){a.terminate()}};var R=function(e,t){return e[t]|e[t+1]<<8},P=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},vt=function(e,t){return P(e,t)+P(e,t+4)*4294967296};function ci(e,t,r){return r||(r=t,t={}),typeof r!="function"&&S(7),si(e,t,[ai],function(n){return Yr(Tt(n.data[0],Kr(n.data[1])))},1,r)}function Tt(e,t){return $r(e,t)}var gt=typeof TextDecoder<"u"&&new TextDecoder,li=0;try{gt.decode(ri,{stream:!0}),li=1}catch{}var ui=function(e){for(var t="",r=0;;){var n=e[r++],i=(n>127)+(n>223)+(n>239);if(r+i>e.length)return[t,Fe(e,r-1)];i?i==3?(n=((n&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):i&1?t+=String.fromCharCode((n&31)<<6|e[r++]&63):t+=String.fromCharCode((n&15)<<12|(e[r++]&63)<<6|e[r++]&63):t+=String.fromCharCode(n)}};function fi(e,t){if(t){for(var r="",n=0;n<e.length;n+=16384)r+=String.fromCharCode.apply(null,e.subarray(n,n+16384));return r}else{if(gt)return gt.decode(e);var i=ui(e),o=i[0],a=i[1];return a.length&&S(8),o}}var pi=function(e,t){return t+30+R(e,t+26)+R(e,t+28)},hi=function(e,t,r){var n=R(e,t+28),i=fi(e.subarray(t+46,t+46+n),!(R(e,t+8)&2048)),o=t+46+n,a=P(e,t+20),s=r&&a==4294967295?mi(e,o):[a,P(e,t+24),P(e,t+42)],l=s[0],u=s[1],f=s[2];return[R(e,t+10),l,u,i,o+R(e,t+30)+R(e,t+32),f]},mi=function(e,t){for(;R(e,t)!=1;t+=4+R(e,t+2));return[vt(e,t+12),vt(e,t+4),vt(e,t+20)]};var Gr=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function qr(e,t,r){r||(r=t,t={}),typeof r!="function"&&S(7);var n=[],i=function(){for(var g=0;g<n.length;++g)n[g]()},o={},a=function(g,x){Gr(function(){r(g,x)})};Gr(function(){a=r});for(var s=e.length-22;P(e,s)!=101010256;--s)if(!s||e.length-s>65558)return a(S(13,0,1),null),i;var l=R(e,s+8);if(l){var u=l,f=P(e,s+16),v=f==4294967295||u==65535;if(v){var E=P(e,s-12);v=P(e,E)==101075792,v&&(u=l=P(e,E+32),f=P(e,E+48))}for(var L=t&&t.filter,le=function(g){var x=hi(e,f,v),M=x[0],b=x[1],$=x[2],ue=x[3],j=x[4],fe=x[5],y=pi(e,fe);f=j;var O=function(Y,pe){Y?(i(),a(Y,null)):(pe&&(o[ue]=pe),--l||a(null,o))};if(!L||L({name:ue,size:b,originalSize:$,compression:M}))if(!M)O(null,Fe(e,y,y+b));else if(M==8){var De=e.subarray(y,y+b);if(b<32e4)try{O(null,Tt(De,new w($)))}catch(Y){O(Y,null)}else n.push(ci(De,{size:$},O))}else O(S(14,"unknown compression type "+M,1),null);else O(null,null)},Z=0;Z<u;++Z)le(Z)}else a(null,{});return i}var en=require("fs"),k=require("fs/promises"),ce=require("path");c();function Xr(e){function t(a,s,l,u){let f=0;return f+=a<<0,f+=s<<8,f+=l<<16,f+=u<<24>>>0,f}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,n=e[4]===2;if(!n&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(n){let a=t(e[8],e[9],e[10],e[11]),s=t(e[12],e[13],e[14],e[15]),l=16+a+s;return e.subarray(l,e.length)}let o=12+t(e[8],e[9],e[10],e[11]);return e.subarray(o,e.length)}We();var di=(0,ce.join)(ee,"ExtensionCache");async function vi(e,t){return await(0,k.mkdir)(t,{recursive:!0}),new Promise((r,n)=>{qr(e,(i,o)=>{if(i)return void n(i);Promise.all(Object.keys(o).map(async a=>{if(a.startsWith("_metadata/"))return;if(a.endsWith("/"))return void(0,k.mkdir)((0,ce.join)(t,a),{recursive:!0});let s=a.split("/"),l=s.pop(),u=s.join("/"),f=(0,ce.join)(t,u);u&&await(0,k.mkdir)(f,{recursive:!0}),await(0,k.writeFile)((0,ce.join)(f,l),o[a])})).then(()=>r()).catch(a=>{(0,k.rm)(t,{recursive:!0,force:!0}),n(a)})})})}async function tn(e){let t=(0,ce.join)(di,`${e}`);try{await(0,k.access)(t,en.constants.F_OK)}catch{let n=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await Q(n,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await vi(Xr(i),t).catch(console.error)}Qr.session.defaultSession.loadExtension(t)}J.app.whenReady().then(()=>{J.protocol.registerFileProtocol("vencord",({url:i},o)=>{let a=i.slice(10);if(a.endsWith("/")&&(a=a.slice(0,-1)),a.startsWith("/themes/")){let s=a.slice(8),l=dt(W,s);if(!l){o({statusCode:403});return}o(l.replace(/\?v=\d+$/,""));return}switch(a){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":o((0,rn.join)(__dirname,a));break;default:o({statusCode:403})}});try{T.store.enableReactDevtools&&tn("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(i=>console.error("[Vencord] Failed to install React Developer Tools",i))}catch{}let e=(i,o)=>Object.keys(i).find(a=>a.toLowerCase()===o),t=i=>{let o={};return i.split(";").forEach(a=>{let[s,...l]=a.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(o,s)&&(o[s]=l)}),o},r=i=>Object.entries(i).filter(([,o])=>o?.length).map(o=>o.flat().join(" ")).join("; "),n=i=>{let o=e(i,"content-security-policy");if(o){let a=t(i[o][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[s]??=[],a[s].push("*","blob:","data:","vencord:","'unsafe-inline'");a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),i[o]=[r(a)]}};J.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:i,resourceType:o},a)=>{if(i&&(o==="mainFrame"&&n(i),o==="stylesheet")){let s=e(i,"content-type");s&&(i[s]=["text/css"])}a({cancel:!1,responseHeaders:i})}),J.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
