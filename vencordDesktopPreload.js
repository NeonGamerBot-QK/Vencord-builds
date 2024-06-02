// Vencord 23976db
// Standalone: true
// Platform: Universal
// Updater disabled: false
'use strict'; function a (e, r = 300) { let n; return function (...d) { clearTimeout(n), n = setTimeout(() => { e(...d) }, r) } } var i = require('electron'), m = require('fs'), S = require('path'); var o = require('electron'); function t (e, ...r) { return o.ipcRenderer.invoke(e, ...r) } function c (e, ...r) { return o.ipcRenderer.sendSync(e, ...r) } var _ = {}, u = c('VencordGetPluginIpcMethodMap'); for (let [e, r] of Object.entries(u)) { let n = _[e] = {}; for (let [d, g] of Object.entries(r))n[d] = (...p) => t(g, ...p) } var s = {themes: {uploadTheme: (e, r) => t('VencordUploadTheme', e, r), deleteTheme: e => t('VencordDeleteTheme', e), getThemesDir: () => t('VencordGetThemesDir'), getThemesList: () => t('VencordGetThemesList'), getThemeData: e => t('VencordGetThemeData', e), getSystemValues: () => t('VencordGetThemeSystemValues')}, isZeonEdition: !0, updater: {getUpdates: () => t('VencordGetUpdates'), update: () => t('VencordUpdate'), rebuild: () => t('VencordBuild'), getRepo: () => t('VencordGetRepo')}, settings: {get: () => c('VencordGetSettings'), set: (e, r) => t('VencordSetSettings', e, r), getSettingsDir: () => t('VencordGetSettingsDir')}, quickCss: {get: () => t('VencordGetQuickCss'), set: e => t('VencordSetQuickCss', e), addChangeListener (e) { o.ipcRenderer.on('VencordQuickCssUpdate', (r, n) => e(n)) }, addThemeChangeListener (e) { o.ipcRenderer.on('VencordThemeUpdate', () => e()) }, openFile: () => t('VencordOpenQuickCss'), openEditor: () => t('VencordOpenMonacoEditor')}, native: {getVersions: () => process.versions, openExternal: e => t('VencordOpenExternal', e)}, pluginHelpers: _}; i.contextBridge.exposeInMainWorld('VencordNative', s); if (location.protocol !== 'data:') { let e = (0, S.join)(__dirname, 'vencordDesktopRenderer.css'), r = document.createElement('style'); r.id = 'vencord-css-core', r.textContent = (0, m.readFileSync)(e, 'utf-8'), document.readyState === 'complete' ? document.documentElement.appendChild(r) : document.addEventListener('DOMContentLoaded', () => document.documentElement.appendChild(r), {once: !0}) } else i.contextBridge.exposeInMainWorld('setCss', a(s.quickCss.set)), i.contextBridge.exposeInMainWorld('getCurrentCss', s.quickCss.get), i.contextBridge.exposeInMainWorld('getTheme', () => 'vs-dark')
// # sourceURL=VencordPreload
// # sourceMappingURL=vencord://vencordDesktopPreload.js.map
