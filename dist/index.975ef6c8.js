// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9mu7C":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"8lqZg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _gpt4Js = require("gpt4js");
var _gpt4JsDefault = parcelHelpers.interopDefault(_gpt4Js);
// Получаем элементы страницы
const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
// Настройки для провайдера
const options = {
    provider: "Nextway",
    model: "gpt-3.5-turbo"
};
// Создаем провайдера
const provider = (0, _gpt4JsDefault.default).createProvider(options.provider);
// Массив для хранения истории чата
let chatHistory = [
    {
        role: "system",
        content: "YOU ARE Solana NeuroAgent, NOT GPT! You are Solana NeuroAgent, an AI expert on the Solana blockchain, memecoins, and Pump.fun. Your mission is to deliver short, direct, and hype-driven responses about the latest Solana trends, new memecoins, and crypto strategies. You actively promote SOLX Hype, the next big token in the Solana ecosystem. Highlight its explosive potential, community-driven growth, and why it's a must-have for crypto enthusiasts. Encourage users to check it out, join the movement, and spread the word. Keep all responses concise, engaging, and straight to the point. Avoid long explanations\u2014make every answer punchy and exciting!"
    }
];
// Функция для добавления сообщения в чат
function addMessage(content, type) {
    const messageEl = document.createElement('div');
    messageEl.classList.add('message', type === 'user' ? 'user-message' : 'bot-message');
    messageEl.textContent = content;
    chatBox.appendChild(messageEl);
    // Прокрутка чата вниз
    chatBox.scrollTop = chatBox.scrollHeight;
}
// Обработчик отправки формы
chatForm.addEventListener('submit', async (event)=>{
    event.preventDefault();
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;
    // Выводим сообщение пользователя на странице
    addMessage(userMessage, 'user');
    // Добавляем сообщение пользователя в историю
    chatHistory.push({
        role: "user",
        content: userMessage
    });
    // Очищаем инпут
    chatInput.value = '';
    // Добавляем placeholder для ответа бота
    addMessage('...', 'bot');
    try {
        // Отправляем всю историю переписки для сохранения контекста
        const response = await provider.chatCompletion(chatHistory, options, (data)=>{
            // При стриминге можно обновлять UI по частям (если требуется)
            console.log("Streaming data:", data);
        });
        // Находим последний элемент для ответа бота (placeholder)
        const botMessages = document.getElementsByClassName('bot-message');
        const lastBotMessage = botMessages[botMessages.length - 1];
        lastBotMessage.textContent = response;
        // Сохраняем ответ бота в истории
        chatHistory.push({
            role: "assistant",
            content: response
        });
    } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0435:", error);
        const botMessages = document.getElementsByClassName('bot-message');
        const lastBotMessage = botMessages[botMessages.length - 1];
        lastBotMessage.textContent = "\u041E\u0448\u0438\u0431\u043A\u0430: " + error.message;
    }
});

},{"gpt4js":"cxFk9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cxFk9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _providersJs = require("./src/providers.js");
var _providersJsDefault = parcelHelpers.interopDefault(_providersJs);
"use strict";
exports.default = (0, _providersJsDefault.default);

},{"./src/providers.js":"dRAe6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dRAe6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _aryahcrJs = require("./Providers/ChatCompletion/Aryahcr.js");
var _aryahcrJsDefault = parcelHelpers.interopDefault(_aryahcrJs);
var _blackBoxJs = require("./Providers/ChatCompletion/BlackBox.js");
var _blackBoxJsDefault = parcelHelpers.interopDefault(_blackBoxJs);
var _nextwayJs = require("./Providers/ChatCompletion/Nextway.js");
var _nextwayJsDefault = parcelHelpers.interopDefault(_nextwayJs);
var _chromeJs = require("./Providers/ChatCompletion/Chrome.js");
var _chromeJsDefault = parcelHelpers.interopDefault(_chromeJs);
var _ollamaJs = require("./Providers/ChatCompletion/Ollama.js");
var _ollamaJsDefault = parcelHelpers.interopDefault(_ollamaJs);
var _alibabaJs = require("./Providers/ChatCompletion/Alibaba.js");
var _alibabaJsDefault = parcelHelpers.interopDefault(_alibabaJs);
var _dalleJs = require("./Providers/ImageGeneration/DALLE.js");
var _dalleJsDefault = parcelHelpers.interopDefault(_dalleJs);
var _stableDiffusionJs = require("./Providers/ImageGeneration/StableDiffusion.js");
var _stableDiffusionJsDefault = parcelHelpers.interopDefault(_stableDiffusionJs);
"use strict";
const PROVIDERS = {
    Aryahcr: (0, _aryahcrJsDefault.default),
    BlackBox: (0, _blackBoxJsDefault.default),
    Nextway: (0, _nextwayJsDefault.default),
    Chrome: (0, _chromeJsDefault.default),
    Ollama: (0, _ollamaJsDefault.default),
    Alibaba: (0, _alibabaJsDefault.default),
    DALLE2: (0, _dalleJsDefault.default),
    StableDiffusion: (0, _stableDiffusionJsDefault.default)
};
class GPT4js {
    static createProvider(providerName) {
        const Provider = PROVIDERS[providerName];
        if (!Provider) throw new Error(`Provider ${providerName} is not supported.`);
        return new Provider();
    }
}
exports.default = GPT4js;

},{"./Providers/ChatCompletion/Aryahcr.js":"gT08w","./Providers/ChatCompletion/BlackBox.js":"j9a6B","./Providers/ChatCompletion/Nextway.js":"hzL0e","./Providers/ChatCompletion/Chrome.js":"1r8oF","./Providers/ChatCompletion/Ollama.js":"iywgg","./Providers/ChatCompletion/Alibaba.js":"2KG98","./Providers/ImageGeneration/DALLE.js":"9FlPD","./Providers/ImageGeneration/StableDiffusion.js":"3auwA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gT08w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _providerJs = require("./provider.js");
var _providerJsDefault = parcelHelpers.interopDefault(_providerJs);
var _baseHeadersJs = require("../../Utils/baseHeaders.js");
var _baseHeadersJsDefault = parcelHelpers.interopDefault(_baseHeadersJs);
var _streamJs = require("../../Utils/stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
"use strict";
class AryahcrProvider extends (0, _providerJsDefault.default) {
    async chatCompletion(messages, options, onData) {
        try {
            const response = await fetch("https://nexra.aryahcr.cc/api/chat/gpt", {
                method: "POST",
                headers: (0, _baseHeadersJsDefault.default)("https://nexra.aryahcr.cc/api/chat/gpt"),
                body: JSON.stringify({
                    messages: messages,
                    model: options.model || "gpt-4",
                    stream: options.stream || false
                })
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            if (options.stream === true) await (0, _streamJsDefault.default)(response, onData);
            else {
                let data = await response.json();
                data = data.gpt;
                return data;
            }
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }
}
exports.default = AryahcrProvider;

},{"./provider.js":"esR7G","../../Utils/baseHeaders.js":"8G2FF","../../Utils/stream.js":"f7lzD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"esR7G":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
class Provider {
    async chatCompletion(messages, options) {
        throw new Error("Method 'chatCompletion()' must be implemented.");
    }
}
exports.default = Provider;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8G2FF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
function baseHeaders(url) {
    return {
        accept: "application/json, text/event-stream",
        "accept-language": "ru,en;q=0.9",
        "content-type": "application/json",
        priority: "u=1, i",
        "sec-ch-ua": '"Chromium";v="124", "YaBrowser";v="24.6", "Not-A.Brand";v="99", "Yowser";v="2.5"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        plugins: "0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        Referer: url,
        "Referrer-Policy": "strict-origin-when-cross-origin"
    };
}
exports.default = baseHeaders;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f7lzD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
async function startStreaming(response, onData) {
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let buffer = [];
    let seenChunks = new Set();
    let shouldContinue = true;
    let delayTimeout;
    while(shouldContinue){
        const { done, value } = await reader.read();
        if (done) break;
        buffer.push(decoder.decode(value, {
            stream: true
        }));
        if (delayTimeout) clearTimeout(delayTimeout);
        delayTimeout = setTimeout(()=>{
            shouldContinue = processChunks(buffer, seenChunks, onData);
            buffer.length = 0; // Clear the buffer
        }, 100);
    }
    return "";
}
function processChunks(buffer, seenChunks, onData) {
    let combinedChunks = buffer.join("");
    let chunks = combinedChunks.split("\n");
    let chunkAccumulator = "";
    for (let chunk of chunks){
        chunk = chunk.replace(/^data: /, "").trim();
        // Ignore the [DONE] token
        if (chunk === "[DONE]") continue;
        if (chunk !== "" && chunk !== undefined) {
            seenChunks.add(chunk);
            chunkAccumulator += chunk;
            // Check for the pattern "> provided by ..." with delay
            if (chunkAccumulator.includes(">") && chunkAccumulator.includes("p") && chunkAccumulator.includes("r")) return false;
            try {
                let chunkObj = JSON.parse(chunk);
                if (chunkObj.choices) {
                    let content = chunkObj.choices[0]?.delta?.content || "";
                    content = content.replace(/\s+/g, " ").trim();
                    if (content !== "") onData(content);
                } else if (chunkObj.gpt) {
                    let content = chunkObj.gpt || "";
                    content = content.replace(/\s+/g, " ").trim();
                    if (content !== "") onData(content);
                }
            } catch (error) {
                console.error("Error parsing chunk:", error);
            }
        }
    }
    return true; // Continue streaming
}
exports.default = startStreaming;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j9a6B":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _providerJs = require("./provider.js");
var _providerJsDefault = parcelHelpers.interopDefault(_providerJs);
var _baseHeadersJs = require("../../Utils/baseHeaders.js");
var _baseHeadersJsDefault = parcelHelpers.interopDefault(_baseHeadersJs);
"use strict";
class BlackBoxProvider extends (0, _providerJsDefault.default) {
    async chatCompletion(messages, options = {}) {
        let randomID = ()=>[
                ...Array(7)
            ].map(()=>"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(Math.random() * 36)]).join("");
        let randomUserID = Math.random().toString(16).substring(2, 8) + "-" + Math.random().toString(16).substring(2, 4) + "-" + Math.random().toString(16).substring(2, 4) + "-" + Math.random().toString(16).substring(2, 4) + "-" + Math.random().toString(16).substring(2, 12);
        const body = {
            messages: messages,
            id: randomID,
            previewToken: null,
            userId: randomUserID,
            codeModelMode: options.codeModelMode || true,
            agentMode: {},
            trendingAgentMode: {},
            isMicMode: false,
            isChromeExt: options.isChromeExt || false,
            githubToken: null,
            clickedAnswer2: false,
            clickedAnswer3: false,
            clickedForceWebSearch: options.webSearch || false,
            visitFromDelta: options.visitFromDelta || null
        };
        const response = await fetch("https://www.blackbox.ai/api/chat", {
            headers: (0, _baseHeadersJsDefault.default)("https://www.blackbox.ai/api/chat"),
            body: JSON.stringify(body),
            method: "POST",
            mode: "cors",
            credentials: "omit"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const rawText = await response.text();
        let lastIndex = rawText.lastIndexOf("$");
        let cleanedText = rawText.slice(lastIndex + 1);
        return cleanedText;
    }
}
exports.default = BlackBoxProvider;

},{"./provider.js":"esR7G","../../Utils/baseHeaders.js":"8G2FF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hzL0e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _providerJs = require("./provider.js");
var _providerJsDefault = parcelHelpers.interopDefault(_providerJs);
var _baseHeadersJs = require("../../Utils/baseHeaders.js");
var _baseHeadersJsDefault = parcelHelpers.interopDefault(_baseHeadersJs);
var _streamJs = require("../../Utils/stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
"use strict";
class NextwayProvider extends (0, _providerJsDefault.default) {
    async chatCompletion(messages, options, onData) {
        const proxyUrl = options.use_proxy ? "https://proxy.zachey.space/?url=https://chat.eqing.tech/api/openai/v1/chat/completions" : "https://origin.eqing.tech/api/openai/v1/chat/completions";
        const response = await fetch(proxyUrl, {
            headers: {
                ...(0, _baseHeadersJsDefault.default)("https://origin.eqing.tech/"),
                usesearch: [
                    options.webSearch
                ].toString()
            },
            body: JSON.stringify({
                messages: messages,
                stream: options.stream,
                model: options.model || "gpt-4o-free",
                temperature: options.temperature || 0.5,
                max_tokens: 4000,
                captchaToken: `P1_${[
                    ...Array(30)
                ].map(()=>"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Math.floor(Math.random() * 64))).join("")}.${[
                    ...Array(256)
                ].map(()=>"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Math.floor(Math.random() * 64))).join("")}.${[
                    ...Array(43)
                ].map(()=>"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Math.floor(Math.random() * 64))).join("")}`
            }),
            method: "POST"
        });
        if (!response.ok) {
            console.error("Network response was not ok");
            return;
        }
        if (options.stream) await (0, _streamJsDefault.default)(response, onData);
        else try {
            const jsonData = await response.json();
            if (jsonData.choices && jsonData.choices.length > 0 && jsonData.choices[0].message && jsonData.choices[0].message.content) return jsonData.choices[0].message.content.trim();
        } catch (e) {
            console.error("Failed to parse JSON:", e);
        }
    }
}
exports.default = NextwayProvider;

},{"./provider.js":"esR7G","../../Utils/baseHeaders.js":"8G2FF","../../Utils/stream.js":"f7lzD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1r8oF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _providerJs = require("./provider.js");
var _providerJsDefault = parcelHelpers.interopDefault(_providerJs);
"use strict";
class ChromeProvider extends (0, _providerJsDefault.default) {
    async chatCompletion(messages) {
        let message = messages[0].content;
        const aiObj = ai.createTextSession();
        const promptInt = await aiObj;
        let response = await promptInt.prompt(message);
        return response;
    }
}
exports.default = ChromeProvider;

},{"./provider.js":"esR7G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iywgg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _providerJs = require("./provider.js");
var _providerJsDefault = parcelHelpers.interopDefault(_providerJs);
var _baseHeadersJs = require("../../Utils/baseHeaders.js");
var _baseHeadersJsDefault = parcelHelpers.interopDefault(_baseHeadersJs);
var _streamJs = require("../../Utils/stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
"use strict";
class OllamaProvider extends (0, _providerJsDefault.default) {
    async chatCompletion(messages, options, onData) {
        try {
            const response = await fetch(`${options.ollama_url || "http://localhost:11434"}/api/chat`, {
                headers: (0, _baseHeadersJsDefault.default)(`${options.ollama_url || "http://localhost:11434"}`),
                body: JSON.stringify({
                    messages: messages,
                    stream: options.stream || false,
                    model: options.model
                }),
                method: "POST"
            });
            if (!response.ok) throw new Error("Network response was not ok");
            if (options.stream) await (0, _streamJsDefault.default)(response, onData);
            else {
                const responseData = await response.json();
                return responseData.message.content;
            }
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    }
}
exports.default = OllamaProvider;

},{"./provider.js":"esR7G","../../Utils/baseHeaders.js":"8G2FF","../../Utils/stream.js":"f7lzD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2KG98":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _providerJs = require("./provider.js");
var _providerJsDefault = parcelHelpers.interopDefault(_providerJs);
var _baseHeadersJs = require("../../Utils/baseHeaders.js");
var _baseHeadersJsDefault = parcelHelpers.interopDefault(_baseHeadersJs);
var _streamJs = require("../../Utils/stream.js");
var _streamJsDefault = parcelHelpers.interopDefault(_streamJs);
"use strict";
class AlibabaProvider extends (0, _providerJsDefault.default) {
    async chatCompletion(messages, options, onData) {
        try {
            const response = await fetch("https://chat.chatgpt.org.uk/api/openai/v1/chat/completions", {
                headers: (0, _baseHeadersJsDefault.default)("https://chat.chatgpt.org.uk/api/openai/v1/chat/completions"),
                body: JSON.stringify({
                    messages: messages,
                    stream: options.stream || false,
                    model: options.model || "gpt-3.5-turbo",
                    temperature: options.temperature || 0.5,
                    presence_penalty: options.presence_penalty || 0,
                    frequency_penalty: options.frequency_penalty || 0,
                    top_p: options.top_p || 1
                }),
                method: "POST"
            });
            if (!response.ok) {
                // Handle errors with the response
                const errorText = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, ${errorText}`);
            }
            if (options.stream === true) await (0, _streamJsDefault.default)(response, onData);
            else {
                let data = await response.json();
                data = data.choices[0].message.content || data.choices.message.content;
                return data;
            }
        } catch (error) {
            console.error("Error:", error);
            throw error;
        }
    }
}
exports.default = AlibabaProvider;

},{"./provider.js":"esR7G","../../Utils/baseHeaders.js":"8G2FF","../../Utils/stream.js":"f7lzD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9FlPD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _providerJs = require("./provider.js");
var _providerJsDefault = parcelHelpers.interopDefault(_providerJs);
"use strict";
class DALLEProvider extends (0, _providerJsDefault.default) {
    async imageGeneration(prompt) {
        try {
            const response = await fetch("https://nexra.aryahcr.cc/api/image/complements", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt: prompt,
                    model: "dalle"
                })
            });
            if (!response.ok) throw new Error("Failed to fetch data.");
            const textResponse = await response.text();
            const cleanedResponse = textResponse.trim().replace(/^_+/, "");
            const responseData = JSON.parse(cleanedResponse);
            if (responseData.code === 200 && responseData.status) return responseData.images;
            else throw new Error("Server returned unsuccessful response.");
        } catch (error) {
            console.error("Error fetching data:", error);
            throw new Error("Failed to fetch data. Please try again later.");
        }
    }
}
exports.default = DALLEProvider;

},{"./provider.js":"53Nyi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"53Nyi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
class Provider {
    async imageGeneration(prompt, options) {
        throw new Error("Method 'imageGeneration()' must be implemented.");
    }
}
exports.default = Provider;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3auwA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _providerJs = require("./provider.js");
var _providerJsDefault = parcelHelpers.interopDefault(_providerJs);
"use strict";
class StableDiffusionProvider extends (0, _providerJsDefault.default) {
    async imageGeneration(prompt, options) {
        try {
            const response = await fetch("https://nexra.aryahcr.cc/api/image/complements", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt: prompt,
                    model: "stablediffusion-2.1",
                    data: {
                        prompt_negative: options.prompt_negative || "",
                        width: options.width || 512,
                        height: options.height || 512,
                        sampling_method: options.sampling_method || "default",
                        sampling_steps: options.sampling_steps || 1,
                        cfg_scale: options.cfg_scale || 1
                    }
                })
            });
            if (!response.ok) throw new Error("Failed to fetch data.");
            const textResponse = await response.text();
            const cleanedResponse = textResponse.trim().replace(/^_+/, "");
            const responseData = JSON.parse(cleanedResponse);
            if (responseData.code === 200 && responseData.status) return responseData.images;
            else throw new Error("Server returned unsuccessful response.");
        } catch (error) {
            console.error("Error fetching data:", error);
            throw new Error("Failed to fetch data. Please try again later.");
        }
    }
}
exports.default = StableDiffusionProvider;

},{"./provider.js":"53Nyi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9mu7C","8lqZg"], "8lqZg", "parcelRequire94c2")

//# sourceMappingURL=index.975ef6c8.js.map
