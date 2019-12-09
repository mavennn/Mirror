module.exports = (function(e) {
  const t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    const o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      typeof Symbol !== 'undefined' &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
      const n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && typeof e !== 'string')
      ) {
        for (const o in e) {
          r.d(n, o, ((t) => e[t]).bind(null, o));
        }
      }
      return n;
    }),
    (r.n = function(e) {
      const t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, 'a', t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ''),
    r((r.s = './app/main.dev.js'))
  );
})({
  './app/constants/routes.json': function(e) {
    e.exports = JSON.parse(
      '{"HOME":"/","EXPECTATION":"/expectation","BASKET":"/basket","CATALOG":"/catalog","MIRROR":"/mirror"}'
    );
  },
  './app/main.dev.js': function(e, t, r) {
    r.r(t), r.d(t, 'default', () => l);
    const n = r('electron');
    const o = r('electron-updater');
    const i = r('electron-log');
    const s = r.n(i);
    const a = (r('socket.io-client'), r('./app/constants/routes.json'));
    const { clipboard: c } = r('electron');
    const u = r('serialport');
    r('dotenv').config();
    process.env.SERVER_ADDRESS, process.env.SERVER_PORT;
    class l {
      constructor() {
        (s.a.transports.file.level = 'info'),
          (o.autoUpdater.logger = s.a),
          o.autoUpdater.checkForUpdatesAndNotify();
      }
    }
    let h = null;
    r('source-map-support').install();
    n.app.on('window-all-closed', () => {
      process.platform !== 'darwin' && n.app.quit();
    }),
      n.app.on('ready', async () => {
        u.list()
          .then((e) => {
            const t = e.findIndex((e) => e.vendorId === '23d0');
            if (t !== -1) {
              const r = e[t].comName;
              console.log(r);
              const n = new u(r, {
                baudRate: 9600,
                dataBits: 8,
                parity: 'none',
                stopBits: 1,
              });
              n.on('open', () => {
                console.log(`Scanner: Open serial port ${r}`),
                  n.on('data', (e) => {
                    const t = e
                      .toString('utf8')
                      .substr(0, Math.max(0, e.length - 1));
                    t && t.length > 0
                      ? (console.log(`Scanner: vendor_code is ${t}`),
                        h.webContents.send('vendorCode', t))
                      : console.log('Scanner: vendor_code is empty');
                  });
              });
            }
            (h = new n.BrowserWindow({
              show: !1,
              width: 1024,
              height: 728,
            })).loadURL(`file://${__dirname}/app.html#${a.EXPECTATION}`),
              h.webContents.on('did-finish-load', () => {
                if (!h) throw new Error('"mainWindow" is not defined');
                h.show(), h.focus();
              }),
              h.on('closed', () => {
                h = null;
              }),
              n.globalShortcut.register('CommandOrControl+D', () => {
                const e = c.readText();
                console.log(e), h.webContents.send('vendorCode', e);
              }),
              new l();
          })
          .catch(console.log('no scanner'));
      });
  },
  './node_modules/7zip/index.js': function(e, t, r) {
    let n;
    let o;
    const i = r('path').resolve;
    const s = r('./node_modules/7zip/package.json').bin;
    e.exports =
      ((n = s),
      (o = function(e) {
        return i(__dirname, e);
      }),
      Object.keys(n).reduce((e, t) => ((e[t] = o(n[t])), e), {}));
  },
  './node_modules/7zip/package.json': function(e) {
    e.exports = JSON.parse(
      '{"_args":[["7zip@0.0.6","/Users/aleksejgadoev/WebstormProjects/web-server-mern"]],"_development":true,"_from":"7zip@0.0.6","_id":"7zip@0.0.6","_inBundle":false,"_integrity":"sha1-nK+xca+CMpSQNTtIFvAzR6oVCjA=","_location":"/7zip","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"7zip@0.0.6","name":"7zip","escapedName":"7zip","rawSpec":"0.0.6","saveSpec":null,"fetchSpec":"0.0.6"},"_requiredBy":["/electron-devtools-installer"],"_resolved":"https://registry.npmjs.org/7zip/-/7zip-0.0.6.tgz","_spec":"0.0.6","_where":"/Users/aleksejgadoev/WebstormProjects/web-server-mern","bin":{"7z":"7zip-lite/7z.exe"},"bugs":{"url":"https://github.com/fritx/win-7zip/issues"},"description":"7zip Windows Package via Node.js","homepage":"https://github.com/fritx/win-7zip#readme","keywords":["7z","7zip","7-zip","windows","install"],"license":"GNU LGPL","main":"index.js","name":"7zip","repository":{"type":"git","url":"git+ssh://git@github.com/fritx/win-7zip.git"},"scripts":{"test":"mocha"},"version":"0.0.6"}'
    );
  },
  './node_modules/balanced-match/index.js': function(e, t, r) {
    function n(e, t, r) {
      e instanceof RegExp && (e = o(e, r)),
        t instanceof RegExp && (t = o(t, r));
      const n = i(e, t, r);
      return (
        n && {
          start: n[0],
          end: n[1],
          pre: r.slice(0, n[0]),
          body: r.slice(n[0] + e.length, n[1]),
          post: r.slice(n[1] + t.length),
        }
      );
    }
    function o(e, t) {
      const r = t.match(e);
      return r ? r[0] : null;
    }
    function i(e, t, r) {
      let n;
      let o;
      let i;
      let s;
      let a;
      let c = r.indexOf(e);
      let u = r.indexOf(t, c + 1);
      let l = c;
      if (c >= 0 && u > 0) {
        for (n = [], i = r.length; l >= 0 && !a; ) {
          l == c
            ? (n.push(l), (c = r.indexOf(e, l + 1)))
            : n.length == 1
            ? (a = [n.pop(), u])
            : ((o = n.pop()) < i && ((i = o), (s = u)),
              (u = r.indexOf(t, l + 1))),
            (l = c < u && c >= 0 ? c : u);
        }
        n.length && (a = [i, s]);
      }
      return a;
    }
    (e.exports = n), (n.range = i);
  },
  './node_modules/brace-expansion/index.js': function(e, t, r) {
    const n = r('./node_modules/concat-map/index.js');
    const o = r('./node_modules/balanced-match/index.js');
    e.exports = function(e) {
      if (!e) return [];
      e.substr(0, 2) === '{}' && (e = `\\{\\}${e.substr(2)}`);
      return (function e(t, r) {
        const i = [];
        const s = o('{', '}', t);
        if (!s || /\$$/.test(s.pre)) return [t];
        const c = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(s.body);
        const u = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(s.body);
        const h = c || u;
        const v = s.body.indexOf(',') >= 0;
        if (!h && !v) {
          return s.post.match(/,.*\}/)
            ? ((t = `${s.pre}{${s.body}${a}${s.post}`), e(t))
            : [t];
        }
        let g;
        if (h) g = s.body.split(/\.\./);
        else if (
          (g = (function e(t) {
            if (!t) return [''];
            const r = [];
            const n = o('{', '}', t);
            if (!n) return t.split(',');
            const i = n.pre;
            const s = n.body;
            const a = n.post;
            const c = i.split(',');
            c[c.length - 1] += `{${s}}`;
            const u = e(a);
            a.length && ((c[c.length - 1] += u.shift()), c.push.apply(c, u));
            r.push.apply(r, c);
            return r;
          })(s.body)).length === 1 &&
          (g = e(g[0], !1).map(p)).length === 1
        ) {
          var y = s.post.length ? e(s.post, !1) : [''];
          return y.map((e) => s.pre + g[0] + e);
        }
        const b = s.pre;
        var y = s.post.length ? e(s.post, !1) : [''];
        let E;
        if (h) {
          const w = l(g[0]);
          const _ = l(g[1]);
          const j = Math.max(g[0].length, g[1].length);
          let O = g.length == 3 ? Math.abs(l(g[2])) : 1;
          let S = d;
          const x = _ < w;
          x && ((O *= -1), (S = m));
          const k = g.some(f);
          E = [];
          for (let A = w; S(A, _); A += O) {
            var T;
            if (u) (T = String.fromCharCode(A)) === '\\' && (T = '');
            else if (((T = String(A)), k)) {
              const R = j - T.length;
              if (R > 0) {
                const N = new Array(R + 1).join('0');
                T = A < 0 ? `-${N}${T.slice(1)}` : N + T;
              }
            }
            E.push(T);
          }
        } else {
          E = n(g, (t) => e(t, !1));
        }
        for (let P = 0; P < E.length; P++) {
          for (let I = 0; I < y.length; I++) {
            const L = b + E[P] + y[I];
            (!r || h || L) && i.push(L);
          }
        }
        return i;
      })(
        (function(e) {
          return e
            .split('\\\\')
            .join(i)
            .split('\\{')
            .join(s)
            .split('\\}')
            .join(a)
            .split('\\,')
            .join(c)
            .split('\\.')
            .join(u);
        })(e),
        !0
      ).map(h);
    };
    var i = `\0SLASH${Math.random()}\0`;
    var s = `\0OPEN${Math.random()}\0`;
    var a = `\0CLOSE${Math.random()}\0`;
    var c = `\0COMMA${Math.random()}\0`;
    var u = `\0PERIOD${Math.random()}\0`;
    function l(e) {
      return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
    }
    function h(e) {
      return e
        .split(i)
        .join('\\')
        .split(s)
        .join('{')
        .split(a)
        .join('}')
        .split(c)
        .join(',')
        .split(u)
        .join('.');
    }
    function p(e) {
      return `{${e}}`;
    }
    function f(e) {
      return /^-?0\d/.test(e);
    }
    function d(e, t) {
      return e <= t;
    }
    function m(e, t) {
      return e >= t;
    }
  },
  './node_modules/concat-map/index.js': function(e, t) {
    e.exports = function(e, t) {
      for (var n = [], o = 0; o < e.length; o++) {
        const i = t(e[o], o);
        r(i) ? n.push.apply(n, i) : n.push(i);
      }
      return n;
    };
    var r =
      Array.isArray ||
      function(e) {
        return Object.prototype.toString.call(e) === '[object Array]';
      };
  },
  './node_modules/cross-unzip/index.js': function(e, t, r) {
    const n = r('child_process').spawn;
    const o = Array.prototype.slice;
    const i =
      process.platform === 'win32'
        ? function(e, t, n) {
            s(
              r('./node_modules/7zip/index.js')['7z'],
              ['x', e, '-y', `-o${t}`],
              n
            );
          }
        : function(e, t, r) {
            s('unzip', ['-o', e, '-d', t], r);
          };
    function s(e, t, r) {
      let i;
      let s;
      (i = r),
        (s = !1),
        (r = function() {
          s || ((s = !0), i.apply(this, o.call(arguments)));
        });
      const a = n(e, t, { stdio: 'ignore' });
      a.on('error', (e) => {
        r(e);
      }),
        a.on('exit', (e) => {
          r(e ? new Error(`Exited with code ${e}`) : null);
        });
    }
    (i.unzip = i), (e.exports = i);
  },
  './node_modules/electron-devtools-installer/dist/downloadChromeExtension.js': function(
    e,
    t,
    r
  ) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    const n = c(r('fs'));
    const o = c(r('path'));
    const i = c(r('./node_modules/rimraf/rimraf.js'));
    const s = c(r('./node_modules/cross-unzip/index.js'));
    const a = r('./node_modules/electron-devtools-installer/dist/utils.js');
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function e(t, r) {
      const c =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
      const u = (0, a.getPath)();
      n.default.existsSync(u) || n.default.mkdirSync(u);
      const l = o.default.resolve(`${u}/${t}`);
      return new Promise((u, h) => {
        if (!n.default.existsSync(l) || r) {
          n.default.existsSync(l) && i.default.sync(l);
          const p = `https://clients2.google.com/service/update2/crx?response=redirect&x=id%3D${t}%26uc&prodversion=32`;
          const f = o.default.resolve(`${l}.crx`);
          (0, a.downloadFile)(p, f)
            .then(() => {
              (0, s.default)(f, l, (e) => {
                if (
                  e &&
                  !n.default.existsSync(o.default.resolve(l, 'manifest.json'))
                )
                  return h(e);
                (0, a.changePermissions)(l, 755), u(l);
              });
            })
            .catch((n) => {
              if (
                (console.log(
                  `Failed to fetch extension, trying ${c - 1} more times`
                ),
                c <= 1)
              )
                return h(n);
              setTimeout(() => {
                e(t, r, c - 1)
                  .then(u)
                  .catch(h);
              }, 200);
            });
        } else u(l);
      });
    };
  },
  './node_modules/electron-devtools-installer/dist/index.js': function(
    e,
    t,
    r
  ) {
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.MOBX_DEVTOOLS = t.APOLLO_DEVELOPER_TOOLS = t.CYCLEJS_DEVTOOL = t.REACT_PERF = t.REDUX_DEVTOOLS = t.VUEJS_DEVTOOLS = t.ANGULARJS_BATARANG = t.JQUERY_DEBUGGER = t.BACKBONE_DEBUGGER = t.REACT_DEVELOPER_TOOLS = t.EMBER_INSPECTOR = void 0);
    const n =
      typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              typeof Symbol === 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          };
    const o = r('electron');
    const i = h(o);
    const s = h(r('fs'));
    const a = h(r('path'));
    const c = h(
      r(
        './node_modules/electron-devtools-installer/node_modules/semver/semver.js'
      )
    );
    const u = h(
      r(
        './node_modules/electron-devtools-installer/dist/downloadChromeExtension.js'
      )
    );
    const l = r('./node_modules/electron-devtools-installer/dist/utils.js');
    function h(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function p(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    const f = (o.remote || i.default).BrowserWindow;
    let d = {};
    const m = a.default.resolve((0, l.getPath)(), 'IDMap.json');
    if (s.default.existsSync(m)) {
      try {
        d = JSON.parse(s.default.readFileSync(m, 'utf8'));
      } catch (e) {
        console.error(
          'electron-devtools-installer: Invalid JSON present in the IDMap file'
        );
      }
    }
    t.default = function e(t) {
      const r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (Array.isArray(t)) {
        return Promise.all(t.map((t) => e(t, r)));
      }
      let o = void 0;
      if ((void 0 === t ? 'undefined' : n(t)) === 'object' && t.id) {
        o = t.id;
        const i = process.versions.electron.split('-')[0];
        if (!c.default.satisfies(i, t.electron)) {
          return Promise.reject(
            new Error(
              `Version of Electron: ${i} does not match required range ${t.electron} for extension ${o}`
            )
          );
        }
      } else {
        if (typeof t !== 'string') {
          return Promise.reject(
            new Error(`Invalid extensionReference passed in: "${t}"`)
          );
        }
        o = t;
      }
      const a = d[o];
      const l = a && f.getDevToolsExtensions && f.getDevToolsExtensions()[a];
      return !r && l
        ? Promise.resolve(d[o])
        : (0, u.default)(o, r).then((e) => {
            l && f.removeDevToolsExtension(a);
            const t = f.addDevToolsExtension(e);
            return (
              s.default.writeFileSync(
                m,
                JSON.stringify(Object.assign(d, p({}, o, t)))
              ),
              Promise.resolve(t)
            );
          });
    };
    (t.EMBER_INSPECTOR = {
      id: 'bmdblncegkenkacieihfhpjfppoconhi',
      electron: '>=1.2.1',
    }),
      (t.REACT_DEVELOPER_TOOLS = {
        id: 'fmkadmapgofadopljbjfkapdkoienihi',
        electron: '>=1.2.1',
      }),
      (t.BACKBONE_DEBUGGER = {
        id: 'bhljhndlimiafopmmhjlgfpnnchjjbhd',
        electron: '>=1.2.1',
      }),
      (t.JQUERY_DEBUGGER = {
        id: 'dbhhnnnpaeobfddmlalhnehgclcmjimi',
        electron: '>=1.2.1',
      }),
      (t.ANGULARJS_BATARANG = {
        id: 'ighdmehidhipcmcojjgiloacoafjmpfk',
        electron: '>=1.2.1',
      }),
      (t.VUEJS_DEVTOOLS = {
        id: 'nhdogjmejiglipccpnnnanhbledajbpd',
        electron: '>=1.2.1',
      }),
      (t.REDUX_DEVTOOLS = {
        id: 'lmhkpmbekcpmknklioeibfkpmmfibljd',
        electron: '>=1.2.1',
      }),
      (t.REACT_PERF = {
        id: 'hacmcodfllhbnekmghgdlplbdnahmhmm',
        electron: '>=1.2.6',
      }),
      (t.CYCLEJS_DEVTOOL = {
        id: 'dfgplfmhhmdekalbpejekgfegkonjpfp',
        electron: '>=1.2.1',
      }),
      (t.APOLLO_DEVELOPER_TOOLS = {
        id: 'jdkknkkbebbapilgoeccciglkfbmbnfm',
        electron: '>=1.2.1',
      }),
      (t.MOBX_DEVTOOLS = {
        id: 'pfgnfdagidkfgccljigdamigbcnndkod',
        electron: '>=1.2.1',
      });
  },
  './node_modules/electron-devtools-installer/dist/utils.js': function(
    e,
    t,
    r
  ) {
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.changePermissions = t.downloadFile = t.getPath = void 0);
    const n = r('electron');
    const o = c(n);
    const i = c(r('fs'));
    const s = c(r('path'));
    const a = c(r('https'));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.getPath = function() {
      const e = (n.remote || o.default).app.getPath('userData');
      return s.default.resolve(`${e}/extensions`);
    };
    const u = (n.remote || o.default).net;
    const l = u ? u.request : a.default.get;
    (t.downloadFile = function e(t, r) {
      return new Promise((n, o) => {
        const s = l(t);
        s.on('response', (t) => {
          if (t.statusCode >= 300 && t.statusCode < 400 && t.headers.location) {
            return e(t.headers.location, r)
              .then(n)
              .catch(o);
          }
          t.pipe(i.default.createWriteStream(r)).on('close', n);
        }),
          s.on('error', o),
          s.end();
      });
    }),
      (t.changePermissions = function e(t, r) {
        i.default.readdirSync(t).forEach((n) => {
          const o = s.default.join(t, n);
          i.default.chmodSync(o, parseInt(r, 8)),
            i.default.statSync(o).isDirectory() && e(o, r);
        });
      });
  },
  './node_modules/electron-devtools-installer/node_modules/semver/semver.js': function(
    e,
    t
  ) {
    let r;
    (t = e.exports = Q),
      (r =
        typeof process === 'object' &&
        process.env &&
        process.env.NODE_DEBUG &&
        /\bsemver\b/i.test(process.env.NODE_DEBUG)
          ? function() {
              const e = Array.prototype.slice.call(arguments, 0);
              e.unshift('SEMVER'), console.log.apply(console, e);
            }
          : function() {}),
      (t.SEMVER_SPEC_VERSION = '2.0.0');
    const n = 256;
    const o = Number.MAX_SAFE_INTEGER || 9007199254740991;
    const i = (t.re = []);
    const s = (t.src = []);
    let a = 0;
    const c = a++;
    s[c] = '0|[1-9]\\d*';
    const u = a++;
    s[u] = '[0-9]+';
    const l = a++;
    s[l] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
    const h = a++;
    s[h] = `(${s[c]})\\.(${s[c]})\\.(${s[c]})`;
    const p = a++;
    s[p] = `(${s[u]})\\.(${s[u]})\\.(${s[u]})`;
    const f = a++;
    s[f] = `(?:${s[c]}|${s[l]})`;
    const d = a++;
    s[d] = `(?:${s[u]}|${s[l]})`;
    const m = a++;
    s[m] = `(?:-(${s[f]}(?:\\.${s[f]})*))`;
    const v = a++;
    s[v] = `(?:-?(${s[d]}(?:\\.${s[d]})*))`;
    const g = a++;
    s[g] = '[0-9A-Za-z-]+';
    const y = a++;
    s[y] = `(?:\\+(${s[g]}(?:\\.${s[g]})*))`;
    const b = a++;
    const E = `v?${s[h]}${s[m]}?${s[y]}?`;
    s[b] = `^${E}$`;
    const w = `[v=\\s]*${s[p]}${s[v]}?${s[y]}?`;
    const _ = a++;
    s[_] = `^${w}$`;
    const j = a++;
    s[j] = '((?:<|>)?=?)';
    const O = a++;
    s[O] = `${s[u]}|x|X|\\*`;
    const S = a++;
    s[S] = `${s[c]}|x|X|\\*`;
    const x = a++;
    s[
      x
    ] = `[v=\\s]*(${s[S]})(?:\\.(${s[S]})(?:\\.(${s[S]})(?:${s[m]})?${s[y]}?)?)?`;
    const k = a++;
    s[
      k
    ] = `[v=\\s]*(${s[O]})(?:\\.(${s[O]})(?:\\.(${s[O]})(?:${s[v]})?${s[y]}?)?)?`;
    const A = a++;
    s[A] = `^${s[j]}\\s*${s[x]}$`;
    const T = a++;
    s[T] = `^${s[j]}\\s*${s[k]}$`;
    const R = a++;
    s[R] =
      '(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])';
    const N = a++;
    s[N] = '(?:~>?)';
    const P = a++;
    (s[P] = `(\\s*)${s[N]}\\s+`), (i[P] = new RegExp(s[P], 'g'));
    const I = a++;
    s[I] = `^${s[N]}${s[x]}$`;
    const L = a++;
    s[L] = `^${s[N]}${s[k]}$`;
    const D = a++;
    s[D] = '(?:\\^)';
    const C = a++;
    (s[C] = `(\\s*)${s[D]}\\s+`), (i[C] = new RegExp(s[C], 'g'));
    const M = a++;
    s[M] = `^${s[D]}${s[x]}$`;
    const G = a++;
    s[G] = `^${s[D]}${s[k]}$`;
    const $ = a++;
    s[$] = `^${s[j]}\\s*(${w})$|^$`;
    const z = a++;
    s[z] = `^${s[j]}\\s*(${E})$|^$`;
    const B = a++;
    (s[B] = `(\\s*)${s[j]}\\s*(${w}|${s[x]})`), (i[B] = new RegExp(s[B], 'g'));
    const q = a++;
    s[q] = `^\\s*(${s[x]})\\s+-\\s+(${s[x]})\\s*$`;
    const F = a++;
    s[F] = `^\\s*(${s[k]})\\s+-\\s+(${s[k]})\\s*$`;
    const U = a++;
    s[U] = '(<|>)?=?\\s*\\*';
    for (let V = 0; V < 35; V++) r(V, s[V]), i[V] || (i[V] = new RegExp(s[V]));
    function J(e, t) {
      if (
        ((t && typeof t === 'object') ||
          (t = { loose: !!t, includePrerelease: !1 }),
        e instanceof Q)
      )
        return e;
      if (typeof e !== 'string') return null;
      if (e.length > n) return null;
      if (!(t.loose ? i[_] : i[b]).test(e)) return null;
      try {
        return new Q(e, t);
      } catch (e) {
        return null;
      }
    }
    function Q(e, t) {
      if (
        ((t && typeof t === 'object') ||
          (t = { loose: !!t, includePrerelease: !1 }),
        e instanceof Q)
      ) {
        if (e.loose === t.loose) return e;
        e = e.version;
      } else if (typeof e !== 'string')
        throw new TypeError(`Invalid Version: ${e}`);
      if (e.length > n)
        throw new TypeError(`version is longer than ${n} characters`);
      if (!(this instanceof Q)) return new Q(e, t);
      r('SemVer', e, t), (this.options = t), (this.loose = !!t.loose);
      const s = e.trim().match(t.loose ? i[_] : i[b]);
      if (!s) throw new TypeError(`Invalid Version: ${e}`);
      if (
        ((this.raw = e),
        (this.major = +s[1]),
        (this.minor = +s[2]),
        (this.patch = +s[3]),
        this.major > o || this.major < 0)
      )
        throw new TypeError('Invalid major version');
      if (this.minor > o || this.minor < 0)
        throw new TypeError('Invalid minor version');
      if (this.patch > o || this.patch < 0)
        throw new TypeError('Invalid patch version');
      s[4]
        ? (this.prerelease = s[4].split('.').map((e) => {
            if (/^[0-9]+$/.test(e)) {
              const t = +e;
              if (t >= 0 && t < o) return t;
            }
            return e;
          }))
        : (this.prerelease = []),
        (this.build = s[5] ? s[5].split('.') : []),
        this.format();
    }
    (t.parse = J),
      (t.valid = function(e, t) {
        const r = J(e, t);
        return r ? r.version : null;
      }),
      (t.clean = function(e, t) {
        const r = J(e.trim().replace(/^[=v]+/, ''), t);
        return r ? r.version : null;
      }),
      (t.SemVer = Q),
      (Q.prototype.format = function() {
        return (
          (this.version = `${this.major}.${this.minor}.${this.patch}`),
          this.prerelease.length &&
            (this.version += `-${this.prerelease.join('.')}`),
          this.version
        );
      }),
      (Q.prototype.toString = function() {
        return this.version;
      }),
      (Q.prototype.compare = function(e) {
        return (
          r('SemVer.compare', this.version, this.options, e),
          e instanceof Q || (e = new Q(e, this.options)),
          this.compareMain(e) || this.comparePre(e)
        );
      }),
      (Q.prototype.compareMain = function(e) {
        return (
          e instanceof Q || (e = new Q(e, this.options)),
          X(this.major, e.major) ||
            X(this.minor, e.minor) ||
            X(this.patch, e.patch)
        );
      }),
      (Q.prototype.comparePre = function(e) {
        if (
          (e instanceof Q || (e = new Q(e, this.options)),
          this.prerelease.length && !e.prerelease.length)
        )
          return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        let t = 0;
        do {
          const n = this.prerelease[t];
          const o = e.prerelease[t];
          if ((r('prerelease compare', t, n, o), void 0 === n && void 0 === o))
            return 0;
          if (void 0 === o) return 1;
          if (void 0 === n) return -1;
          if (n !== o) return X(n, o);
        } while (++t);
      }),
      (Q.prototype.inc = function(e, t) {
        switch (e) {
          case 'premajor':
            (this.prerelease.length = 0),
              (this.patch = 0),
              (this.minor = 0),
              this.major++,
              this.inc('pre', t);
            break;
          case 'preminor':
            (this.prerelease.length = 0),
              (this.patch = 0),
              this.minor++,
              this.inc('pre', t);
            break;
          case 'prepatch':
            (this.prerelease.length = 0),
              this.inc('patch', t),
              this.inc('pre', t);
            break;
          case 'prerelease':
            this.prerelease.length === 0 && this.inc('patch', t),
              this.inc('pre', t);
            break;
          case 'major':
            (this.minor === 0 &&
              this.patch === 0 &&
              this.prerelease.length !== 0) ||
              this.major++,
              (this.minor = 0),
              (this.patch = 0),
              (this.prerelease = []);
            break;
          case 'minor':
            (this.patch === 0 && this.prerelease.length !== 0) || this.minor++,
              (this.patch = 0),
              (this.prerelease = []);
            break;
          case 'patch':
            this.prerelease.length === 0 && this.patch++,
              (this.prerelease = []);
            break;
          case 'pre':
            if (this.prerelease.length === 0) this.prerelease = [0];
            else {
              for (var r = this.prerelease.length; --r >= 0; ) {
                typeof this.prerelease[r] === 'number' &&
                  (this.prerelease[r]++, (r = -2));
              }
              r === -1 && this.prerelease.push(0);
            }
            t &&
              (this.prerelease[0] === t
                ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0])
                : (this.prerelease = [t, 0]));
            break;
          default:
            throw new Error(`invalid increment argument: ${e}`);
        }
        return this.format(), (this.raw = this.version), this;
      }),
      (t.inc = function(e, t, r, n) {
        typeof r === 'string' && ((n = r), (r = void 0));
        try {
          return new Q(e, r).inc(t, n).version;
        } catch (e) {
          return null;
        }
      }),
      (t.diff = function(e, t) {
        if (H(e, t)) return null;
        const r = J(e);
        const n = J(t);
        let o = '';
        if (r.prerelease.length || n.prerelease.length) {
          o = 'pre';
          var i = 'prerelease';
        }
        for (const s in r) {
          if (
            (s === 'major' || s === 'minor' || s === 'patch') &&
            r[s] !== n[s]
          )
            return o + s;
        }
        return i;
      }),
      (t.compareIdentifiers = X);
    const W = /^[0-9]+$/;
    function X(e, t) {
      const r = W.test(e);
      const n = W.test(t);
      return (
        r && n && ((e = +e), (t = +t)),
        e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
      );
    }
    function Y(e, t, r) {
      return new Q(e, r).compare(new Q(t, r));
    }
    function Z(e, t, r) {
      return Y(e, t, r) > 0;
    }
    function K(e, t, r) {
      return Y(e, t, r) < 0;
    }
    function H(e, t, r) {
      return Y(e, t, r) === 0;
    }
    function ee(e, t, r) {
      return Y(e, t, r) !== 0;
    }
    function te(e, t, r) {
      return Y(e, t, r) >= 0;
    }
    function re(e, t, r) {
      return Y(e, t, r) <= 0;
    }
    function ne(e, t, r, n) {
      switch (t) {
        case '===':
          return (
            typeof e === 'object' && (e = e.version),
            typeof r === 'object' && (r = r.version),
            e === r
          );
        case '!==':
          return (
            typeof e === 'object' && (e = e.version),
            typeof r === 'object' && (r = r.version),
            e !== r
          );
        case '':
        case '=':
        case '==':
          return H(e, r, n);
        case '!=':
          return ee(e, r, n);
        case '>':
          return Z(e, r, n);
        case '>=':
          return te(e, r, n);
        case '<':
          return K(e, r, n);
        case '<=':
          return re(e, r, n);
        default:
          throw new TypeError(`Invalid operator: ${t}`);
      }
    }
    function oe(e, t) {
      if (
        ((t && typeof t === 'object') ||
          (t = { loose: !!t, includePrerelease: !1 }),
        e instanceof oe)
      ) {
        if (e.loose === !!t.loose) return e;
        e = e.value;
      }
      if (!(this instanceof oe)) return new oe(e, t);
      r('comparator', e, t),
        (this.options = t),
        (this.loose = !!t.loose),
        this.parse(e),
        this.semver === ie
          ? (this.value = '')
          : (this.value = this.operator + this.semver.version),
        r('comp', this);
    }
    (t.rcompareIdentifiers = function(e, t) {
      return X(t, e);
    }),
      (t.major = function(e, t) {
        return new Q(e, t).major;
      }),
      (t.minor = function(e, t) {
        return new Q(e, t).minor;
      }),
      (t.patch = function(e, t) {
        return new Q(e, t).patch;
      }),
      (t.compare = Y),
      (t.compareLoose = function(e, t) {
        return Y(e, t, !0);
      }),
      (t.rcompare = function(e, t, r) {
        return Y(t, e, r);
      }),
      (t.sort = function(e, r) {
        return e.sort((e, n) => t.compare(e, n, r));
      }),
      (t.rsort = function(e, r) {
        return e.sort((e, n) => t.rcompare(e, n, r));
      }),
      (t.gt = Z),
      (t.lt = K),
      (t.eq = H),
      (t.neq = ee),
      (t.gte = te),
      (t.lte = re),
      (t.cmp = ne),
      (t.Comparator = oe);
    var ie = {};
    function se(e, t) {
      if (
        ((t && typeof t === 'object') ||
          (t = { loose: !!t, includePrerelease: !1 }),
        e instanceof se)
      ) {
        return e.loose === !!t.loose &&
          e.includePrerelease === !!t.includePrerelease
          ? e
          : new se(e.raw, t);
      }
      if (e instanceof oe) return new se(e.value, t);
      if (!(this instanceof se)) return new se(e, t);
      if (
        ((this.options = t),
        (this.loose = !!t.loose),
        (this.includePrerelease = !!t.includePrerelease),
        (this.raw = e),
        (this.set = e
          .split(/\s*\|\|\s*/)
          .map(function(e) {
            return this.parseRange(e.trim());
          }, this)
          .filter((e) => e.length)),
        !this.set.length)
      )
        throw new TypeError(`Invalid SemVer Range: ${e}`);
      this.format();
    }
    function ae(e) {
      return !e || e.toLowerCase() === 'x' || e === '*';
    }
    function ce(e, t, r, n, o, i, s, a, c, u, l, h, p) {
      return `${(t = ae(r)
        ? ''
        : ae(n)
        ? `>=${r}.0.0`
        : ae(o)
        ? `>=${r}.${n}.0`
        : `>=${t}`)} ${(a = ae(c)
        ? ''
        : ae(u)
        ? `<${+c + 1}.0.0`
        : ae(l)
        ? `<${c}.${+u + 1}.0`
        : h
        ? `<=${c}.${u}.${l}-${h}`
        : `<=${a}`)}`.trim();
    }
    function ue(e, t, n) {
      for (var o = 0; o < e.length; o++) if (!e[o].test(t)) return !1;
      if (t.prerelease.length && !n.includePrerelease) {
        for (o = 0; o < e.length; o++) {
          if (
            (r(e[o].semver),
            e[o].semver !== ie && e[o].semver.prerelease.length > 0)
          ) {
            const i = e[o].semver;
            if (
              i.major === t.major &&
              i.minor === t.minor &&
              i.patch === t.patch
            )
              return !0;
          }
        }
        return !1;
      }
      return !0;
    }
    function le(e, t, r) {
      try {
        t = new se(t, r);
      } catch (e) {
        return !1;
      }
      return t.test(e);
    }
    function he(e, t, r, n) {
      let o;
      let i;
      let s;
      let a;
      let c;
      switch (((e = new Q(e, n)), (t = new se(t, n)), r)) {
        case '>':
          (o = Z), (i = re), (s = K), (a = '>'), (c = '>=');
          break;
        case '<':
          (o = K), (i = te), (s = Z), (a = '<'), (c = '<=');
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (le(e, t, n)) return !1;
      for (let u = 0; u < t.set.length; ++u) {
        const l = t.set[u];
        var h = null;
        var p = null;
        if (
          (l.forEach((e) => {
            e.semver === ie && (e = new oe('>=0.0.0')),
              (h = h || e),
              (p = p || e),
              o(e.semver, h.semver, n)
                ? (h = e)
                : s(e.semver, p.semver, n) && (p = e);
          }),
          h.operator === a || h.operator === c)
        )
          return !1;
        if ((!p.operator || p.operator === a) && i(e, p.semver)) return !1;
        if (p.operator === c && s(e, p.semver)) return !1;
      }
      return !0;
    }
    (oe.prototype.parse = function(e) {
      const t = this.options.loose ? i[$] : i[z];
      const r = e.match(t);
      if (!r) throw new TypeError(`Invalid comparator: ${e}`);
      (this.operator = r[1]),
        this.operator === '=' && (this.operator = ''),
        r[2]
          ? (this.semver = new Q(r[2], this.options.loose))
          : (this.semver = ie);
    }),
      (oe.prototype.toString = function() {
        return this.value;
      }),
      (oe.prototype.test = function(e) {
        return (
          r('Comparator.test', e, this.options.loose),
          this.semver === ie ||
            (typeof e === 'string' && (e = new Q(e, this.options)),
            ne(e, this.operator, this.semver, this.options))
        );
      }),
      (oe.prototype.intersects = function(e, t) {
        if (!(e instanceof oe)) throw new TypeError('a Comparator is required');
        let r;
        if (
          ((t && typeof t === 'object') ||
            (t = { loose: !!t, includePrerelease: !1 }),
          this.operator === '')
        )
          return (r = new se(e.value, t)), le(this.value, r, t);
        if (e.operator === '')
          return (r = new se(this.value, t)), le(e.semver, r, t);
        const n = !(
          (this.operator !== '>=' && this.operator !== '>') ||
          (e.operator !== '>=' && e.operator !== '>')
        );
        const o = !(
          (this.operator !== '<=' && this.operator !== '<') ||
          (e.operator !== '<=' && e.operator !== '<')
        );
        const i = this.semver.version === e.semver.version;
        const s = !(
          (this.operator !== '>=' && this.operator !== '<=') ||
          (e.operator !== '>=' && e.operator !== '<=')
        );
        const a =
          ne(this.semver, '<', e.semver, t) &&
          (this.operator === '>=' || this.operator === '>') &&
          (e.operator === '<=' || e.operator === '<');
        const c =
          ne(this.semver, '>', e.semver, t) &&
          (this.operator === '<=' || this.operator === '<') &&
          (e.operator === '>=' || e.operator === '>');
        return n || o || (i && s) || a || c;
      }),
      (t.Range = se),
      (se.prototype.format = function() {
        return (
          (this.range = this.set
            .map((e) => e.join(' ').trim())
            .join('||')
            .trim()),
          this.range
        );
      }),
      (se.prototype.toString = function() {
        return this.range;
      }),
      (se.prototype.parseRange = function(e) {
        const t = this.options.loose;
        e = e.trim();
        const n = t ? i[F] : i[q];
        (e = e.replace(n, ce)),
          r('hyphen replace', e),
          (e = e.replace(i[B], '$1$2$3')),
          r('comparator trim', e, i[B]),
          (e = (e = (e = e.replace(i[P], '$1~')).replace(i[C], '$1^'))
            .split(/\s+/)
            .join(' '));
        const o = t ? i[$] : i[z];
        let s = e
          .split(' ')
          .map(function(e) {
            return (function(e, t) {
              return (
                r('comp', e, t),
                (e = (function(e, t) {
                  return e
                    .trim()
                    .split(/\s+/)
                    .map((e) =>
                      (function(e, t) {
                        r('caret', e, t);
                        const n = t.loose ? i[G] : i[M];
                        return e.replace(n, (t, n, o, i, s) => {
                          let a;
                          return (
                            r('caret', e, t, n, o, i, s),
                            ae(n)
                              ? (a = '')
                              : ae(o)
                              ? (a = `>=${n}.0.0 <${+n + 1}.0.0`)
                              : ae(i)
                              ? (a =
                                  n === '0'
                                    ? `>=${n}.${o}.0 <${n}.${+o + 1}.0`
                                    : `>=${n}.${o}.0 <${+n + 1}.0.0`)
                              : s
                              ? (r('replaceCaret pr', s),
                                (a =
                                  n === '0'
                                    ? o === '0'
                                      ? `>=${n}.${o}.${i}-${s} <${n}.${o}.${+i +
                                          1}`
                                      : `>=${n}.${o}.${i}-${s} <${n}.${+o +
                                          1}.0`
                                    : `>=${n}.${o}.${i}-${s} <${+n + 1}.0.0`))
                              : (r('no pr'),
                                (a =
                                  n === '0'
                                    ? o === '0'
                                      ? `>=${n}.${o}.${i} <${n}.${o}.${+i + 1}`
                                      : `>=${n}.${o}.${i} <${n}.${+o + 1}.0`
                                    : `>=${n}.${o}.${i} <${+n + 1}.0.0`)),
                            r('caret return', a),
                            a
                          );
                        });
                      })(e, t)
                    )
                    .join(' ');
                })(e, t)),
                r('caret', e),
                (e = (function(e, t) {
                  return e
                    .trim()
                    .split(/\s+/)
                    .map((e) =>
                      (function(e, t) {
                        const n = t.loose ? i[L] : i[I];
                        return e.replace(n, (t, n, o, i, s) => {
                          let a;
                          return (
                            r('tilde', e, t, n, o, i, s),
                            ae(n)
                              ? (a = '')
                              : ae(o)
                              ? (a = `>=${n}.0.0 <${+n + 1}.0.0`)
                              : ae(i)
                              ? (a = `>=${n}.${o}.0 <${n}.${+o + 1}.0`)
                              : s
                              ? (r('replaceTilde pr', s),
                                (a = `>=${n}.${o}.${i}-${s} <${n}.${+o + 1}.0`))
                              : (a = `>=${n}.${o}.${i} <${n}.${+o + 1}.0`),
                            r('tilde return', a),
                            a
                          );
                        });
                      })(e, t)
                    )
                    .join(' ');
                })(e, t)),
                r('tildes', e),
                (e = (function(e, t) {
                  return (
                    r('replaceXRanges', e, t),
                    e
                      .split(/\s+/)
                      .map((e) =>
                        (function(e, t) {
                          e = e.trim();
                          const n = t.loose ? i[T] : i[A];
                          return e.replace(n, (t, n, o, i, s, a) => {
                            r('xRange', e, t, n, o, i, s, a);
                            const c = ae(o);
                            const u = c || ae(i);
                            const l = u || ae(s);
                            return (
                              n === '=' && l && (n = ''),
                              c
                                ? (t = n === '>' || n === '<' ? '<0.0.0' : '*')
                                : n && l
                                ? (u && (i = 0),
                                  (s = 0),
                                  n === '>'
                                    ? ((n = '>='),
                                      u
                                        ? ((o = +o + 1), (i = 0), (s = 0))
                                        : ((i = +i + 1), (s = 0)))
                                    : n === '<=' &&
                                      ((n = '<'),
                                      u ? (o = +o + 1) : (i = +i + 1)),
                                  (t = `${n + o}.${i}.${s}`))
                                : u
                                ? (t = `>=${o}.0.0 <${+o + 1}.0.0`)
                                : l && (t = `>=${o}.${i}.0 <${o}.${+i + 1}.0`),
                              r('xRange return', t),
                              t
                            );
                          });
                        })(e, t)
                      )
                      .join(' ')
                  );
                })(e, t)),
                r('xrange', e),
                (e = (function(e, t) {
                  return r('replaceStars', e, t), e.trim().replace(i[U], '');
                })(e, t)),
                r('stars', e),
                e
              );
            })(e, this.options);
          }, this)
          .join(' ')
          .split(/\s+/);
        return (
          this.options.loose && (s = s.filter((e) => !!e.match(o))),
          (s = s.map(function(e) {
            return new oe(e, this.options);
          }, this))
        );
      }),
      (se.prototype.intersects = function(e, t) {
        if (!(e instanceof se)) throw new TypeError('a Range is required');
        return this.set.some((r) =>
          r.every((r) => e.set.some((e) => e.every((e) => r.intersects(e, t))))
        );
      }),
      (t.toComparators = function(e, t) {
        return new se(e, t).set.map((e) =>
          e
            .map((e) => e.value)
            .join(' ')
            .trim()
            .split(' ')
        );
      }),
      (se.prototype.test = function(e) {
        if (!e) return !1;
        typeof e === 'string' && (e = new Q(e, this.options));
        for (let t = 0; t < this.set.length; t++)
          if (ue(this.set[t], e, this.options)) return !0;
        return !1;
      }),
      (t.satisfies = le),
      (t.maxSatisfying = function(e, t, r) {
        let n = null;
        let o = null;
        try {
          var i = new se(t, r);
        } catch (e) {
          return null;
        }
        return (
          e.forEach((e) => {
            i.test(e) &&
              ((n && o.compare(e) !== -1) || (o = new Q((n = e), r)));
          }),
          n
        );
      }),
      (t.minSatisfying = function(e, t, r) {
        let n = null;
        let o = null;
        try {
          var i = new se(t, r);
        } catch (e) {
          return null;
        }
        return (
          e.forEach((e) => {
            i.test(e) && ((n && o.compare(e) !== 1) || (o = new Q((n = e), r)));
          }),
          n
        );
      }),
      (t.minVersion = function(e, t) {
        e = new se(e, t);
        let r = new Q('0.0.0');
        if (e.test(r)) return r;
        if (((r = new Q('0.0.0-0')), e.test(r))) return r;
        r = null;
        for (let n = 0; n < e.set.length; ++n) {
          e.set[n].forEach((e) => {
            const t = new Q(e.semver.version);
            switch (e.operator) {
              case '>':
                t.prerelease.length === 0 ? t.patch++ : t.prerelease.push(0),
                  (t.raw = t.format());
              case '':
              case '>=':
                (r && !Z(r, t)) || (r = t);
                break;
              case '<':
              case '<=':
                break;
              default:
                throw new Error(`Unexpected operation: ${e.operator}`);
            }
          });
        }
        if (r && e.test(r)) return r;
        return null;
      }),
      (t.validRange = function(e, t) {
        try {
          return new se(e, t).range || '*';
        } catch (e) {
          return null;
        }
      }),
      (t.ltr = function(e, t, r) {
        return he(e, t, '<', r);
      }),
      (t.gtr = function(e, t, r) {
        return he(e, t, '>', r);
      }),
      (t.outside = he),
      (t.prerelease = function(e, t) {
        const r = J(e, t);
        return r && r.prerelease.length ? r.prerelease : null;
      }),
      (t.intersects = function(e, t, r) {
        return (e = new se(e, r)), (t = new se(t, r)), e.intersects(t);
      }),
      (t.coerce = function(e) {
        if (e instanceof Q) return e;
        if (typeof e !== 'string') return null;
        const t = e.match(i[R]);
        if (t == null) return null;
        return J(`${t[1]}.${t[2] || '0'}.${t[3] || '0'}`);
      });
  },
  './node_modules/fs.realpath/index.js': function(e, t, r) {
    (e.exports = l),
      (l.realpath = l),
      (l.sync = h),
      (l.realpathSync = h),
      (l.monkeypatch = function() {
        (n.realpath = l), (n.realpathSync = h);
      }),
      (l.unmonkeypatch = function() {
        (n.realpath = o), (n.realpathSync = i);
      });
    var n = r('fs');
    var o = n.realpath;
    var i = n.realpathSync;
    const s = process.version;
    const a = /^v[0-5]\./.test(s);
    const c = r('./node_modules/fs.realpath/old.js');
    function u(e) {
      return (
        e &&
        e.syscall === 'realpath' &&
        (e.code === 'ELOOP' || e.code === 'ENOMEM' || e.code === 'ENAMETOOLONG')
      );
    }
    function l(e, t, r) {
      if (a) return o(e, t, r);
      typeof t === 'function' && ((r = t), (t = null)),
        o(e, t, (n, o) => {
          u(n) ? c.realpath(e, t, r) : r(n, o);
        });
    }
    function h(e, t) {
      if (a) return i(e, t);
      try {
        return i(e, t);
      } catch (r) {
        if (u(r)) return c.realpathSync(e, t);
        throw r;
      }
    }
  },
  './node_modules/fs.realpath/old.js': function(e, t, r) {
    const n = r('path');
    const o = process.platform === 'win32';
    const i = r('fs');
    const s = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);
    function a(e) {
      return typeof e === 'function'
        ? e
        : (function() {
            let e;
            if (s) {
              const t = new Error();
              e = function(e) {
                e && ((t.message = e.message), r((e = t)));
              };
            } else e = r;
            return e;
            function r(e) {
              if (e) {
                if (process.throwDeprecation) throw e;
                if (!process.noDeprecation) {
                  const t = `fs: missing callback ${e.stack || e.message}`;
                  process.traceDeprecation
                    ? console.trace(t)
                    : console.error(t);
                }
              }
            }
          })();
    }
    n.normalize;
    if (o) var c = /(.*?)(?:[\/\\]+|$)/g;
    else c = /(.*?)(?:[\/]+|$)/g;
    if (o) var u = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
    else u = /^[\/]*/;
    (t.realpathSync = function(e, t) {
      if (((e = n.resolve(e)), t && Object.prototype.hasOwnProperty.call(t, e)))
        return t[e];
      let r;
      let s;
      let a;
      let l;
      const h = e;
      const p = {};
      const f = {};
      function d() {
        const t = u.exec(e);
        (r = t[0].length),
          (s = t[0]),
          (a = t[0]),
          (l = ''),
          o && !f[a] && (i.lstatSync(a), (f[a] = !0));
      }
      for (d(); r < e.length; ) {
        c.lastIndex = r;
        const m = c.exec(e);
        if (
          ((l = s),
          (s += m[0]),
          (a = l + m[1]),
          (r = c.lastIndex),
          !(f[a] || (t && t[a] === a)))
        ) {
          var v;
          if (t && Object.prototype.hasOwnProperty.call(t, a)) v = t[a];
          else {
            const g = i.lstatSync(a);
            if (!g.isSymbolicLink()) {
              (f[a] = !0), t && (t[a] = a);
              continue;
            }
            let y = null;
            if (!o) {
              var b = `${g.dev.toString(32)}:${g.ino.toString(32)}`;
              p.hasOwnProperty(b) && (y = p[b]);
            }
            y === null && (i.statSync(a), (y = i.readlinkSync(a))),
              (v = n.resolve(l, y)),
              t && (t[a] = v),
              o || (p[b] = y);
          }
          (e = n.resolve(v, e.slice(r))), d();
        }
      }
      return t && (t[h] = e), e;
    }),
      (t.realpath = function(e, t, r) {
        if (
          (typeof r !== 'function' && ((r = a(t)), (t = null)),
          (e = n.resolve(e)),
          t && Object.prototype.hasOwnProperty.call(t, e))
        )
          return process.nextTick(r.bind(null, null, t[e]));
        let s;
        let l;
        let h;
        let p;
        const f = e;
        const d = {};
        const m = {};
        function v() {
          const t = u.exec(e);
          (s = t[0].length),
            (l = t[0]),
            (h = t[0]),
            (p = ''),
            o && !m[h]
              ? i.lstat(h, (e) => {
                  if (e) return r(e);
                  (m[h] = !0), g();
                })
              : process.nextTick(g);
        }
        function g() {
          if (s >= e.length) return t && (t[f] = e), r(null, e);
          c.lastIndex = s;
          const n = c.exec(e);
          return (
            (p = l),
            (l += n[0]),
            (h = p + n[1]),
            (s = c.lastIndex),
            m[h] || (t && t[h] === h)
              ? process.nextTick(g)
              : t && Object.prototype.hasOwnProperty.call(t, h)
              ? E(t[h])
              : i.lstat(h, y)
          );
        }
        function y(e, n) {
          if (e) return r(e);
          if (!n.isSymbolicLink())
            return (m[h] = !0), t && (t[h] = h), process.nextTick(g);
          if (!o) {
            var s = `${n.dev.toString(32)}:${n.ino.toString(32)}`;
            if (d.hasOwnProperty(s)) return b(null, d[s], h);
          }
          i.stat(h, (e) => {
            if (e) return r(e);
            i.readlink(h, (e, t) => {
              o || (d[s] = t), b(e, t);
            });
          });
        }
        function b(e, o, i) {
          if (e) return r(e);
          const s = n.resolve(p, o);
          t && (t[i] = s), E(s);
        }
        function E(t) {
          (e = n.resolve(t, e.slice(s))), v();
        }
        v();
      });
  },
  './node_modules/glob/common.js': function(e, t, r) {
    function n(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    (t.alphasort = u),
      (t.alphasorti = c),
      (t.setopts = function(e, t, r) {
        r || (r = {});
        if (r.matchBase && t.indexOf('/') === -1) {
          if (r.noglobstar) throw new Error('base matching requires globstar');
          t = `**/${t}`;
        }
        (e.silent = !!r.silent),
          (e.pattern = t),
          (e.strict = !1 !== r.strict),
          (e.realpath = !!r.realpath),
          (e.realpathCache = r.realpathCache || Object.create(null)),
          (e.follow = !!r.follow),
          (e.dot = !!r.dot),
          (e.mark = !!r.mark),
          (e.nodir = !!r.nodir),
          e.nodir && (e.mark = !0);
        (e.sync = !!r.sync),
          (e.nounique = !!r.nounique),
          (e.nonull = !!r.nonull),
          (e.nosort = !!r.nosort),
          (e.nocase = !!r.nocase),
          (e.stat = !!r.stat),
          (e.noprocess = !!r.noprocess),
          (e.absolute = !!r.absolute),
          (e.maxLength = r.maxLength || 1 / 0),
          (e.cache = r.cache || Object.create(null)),
          (e.statCache = r.statCache || Object.create(null)),
          (e.symlinks = r.symlinks || Object.create(null)),
          (function(e, t) {
            (e.ignore = t.ignore || []),
              Array.isArray(e.ignore) || (e.ignore = [e.ignore]);
            e.ignore.length && (e.ignore = e.ignore.map(l));
          })(e, r),
          (e.changedCwd = !1);
        const i = process.cwd();
        n(r, 'cwd')
          ? ((e.cwd = o.resolve(r.cwd)), (e.changedCwd = e.cwd !== i))
          : (e.cwd = i);
        (e.root = r.root || o.resolve(e.cwd, '/')),
          (e.root = o.resolve(e.root)),
          process.platform === 'win32' && (e.root = e.root.replace(/\\/g, '/'));
        (e.cwdAbs = s(e.cwd) ? e.cwd : h(e, e.cwd)),
          process.platform === 'win32' &&
            (e.cwdAbs = e.cwdAbs.replace(/\\/g, '/'));
        (e.nomount = !!r.nomount),
          (r.nonegate = !0),
          (r.nocomment = !0),
          (e.minimatch = new a(t, r)),
          (e.options = e.minimatch.options);
      }),
      (t.ownProp = n),
      (t.makeAbs = h),
      (t.finish = function(e) {
        for (
          var t = e.nounique,
            r = t ? [] : Object.create(null),
            n = 0,
            o = e.matches.length;
          n < o;
          n++
        ) {
          const i = e.matches[n];
          if (i && Object.keys(i).length !== 0) {
            const s = Object.keys(i);
            t
              ? r.push.apply(r, s)
              : s.forEach((e) => {
                  r[e] = !0;
                });
          } else if (e.nonull) {
            const a = e.minimatch.globSet[n];
            t ? r.push(a) : (r[a] = !0);
          }
        }
        t || (r = Object.keys(r));
        e.nosort || (r = r.sort(e.nocase ? c : u));
        if (e.mark) {
          for (n = 0; n < r.length; n++) r[n] = e._mark(r[n]);
          e.nodir &&
            (r = r.filter((t) => {
              let r = !/\/$/.test(t);
              const n = e.cache[t] || e.cache[h(e, t)];
              return r && n && (r = n !== 'DIR' && !Array.isArray(n)), r;
            }));
        }
        e.ignore.length && (r = r.filter((t) => !p(e, t)));
        e.found = r;
      }),
      (t.mark = function(e, t) {
        const r = h(e, t);
        const n = e.cache[r];
        let o = t;
        if (n) {
          const i = n === 'DIR' || Array.isArray(n);
          const s = t.slice(-1) === '/';
          if (
            (i && !s ? (o += '/') : !i && s && (o = o.slice(0, -1)), o !== t)
          ) {
            const a = h(e, o);
            (e.statCache[a] = e.statCache[r]), (e.cache[a] = e.cache[r]);
          }
        }
        return o;
      }),
      (t.isIgnored = p),
      (t.childrenIgnored = function(e, t) {
        return (
          !!e.ignore.length &&
          e.ignore.some((e) => !(!e.gmatcher || !e.gmatcher.match(t)))
        );
      });
    var o = r('path');
    const i = r('./node_modules/minimatch/minimatch.js');
    var s = r('./node_modules/path-is-absolute/index.js');
    var a = i.Minimatch;
    function c(e, t) {
      return e.toLowerCase().localeCompare(t.toLowerCase());
    }
    function u(e, t) {
      return e.localeCompare(t);
    }
    function l(e) {
      let t = null;
      if (e.slice(-3) === '/**') {
        const r = e.replace(/(\/\*\*)+$/, '');
        t = new a(r, { dot: !0 });
      }
      return { matcher: new a(e, { dot: !0 }), gmatcher: t };
    }
    function h(e, t) {
      let r = t;
      return (
        (r =
          t.charAt(0) === '/'
            ? o.join(e.root, t)
            : s(t) || t === ''
            ? t
            : e.changedCwd
            ? o.resolve(e.cwd, t)
            : o.resolve(t)),
        process.platform === 'win32' && (r = r.replace(/\\/g, '/')),
        r
      );
    }
    function p(e, t) {
      return (
        !!e.ignore.length &&
        e.ignore.some(
          (e) => e.matcher.match(t) || !(!e.gmatcher || !e.gmatcher.match(t))
        )
      );
    }
  },
  './node_modules/glob/glob.js': function(e, t, r) {
    e.exports = b;
    const n = r('fs');
    const o = r('./node_modules/fs.realpath/index.js');
    const i = r('./node_modules/minimatch/minimatch.js');
    const s = (i.Minimatch, r('./node_modules/inherits/inherits.js'));
    const a = r('events').EventEmitter;
    const c = r('path');
    const u = r('assert');
    const l = r('./node_modules/path-is-absolute/index.js');
    const h = r('./node_modules/glob/sync.js');
    const p = r('./node_modules/glob/common.js');
    const f = (p.alphasort, p.alphasorti, p.setopts);
    const d = p.ownProp;
    const m = r('./node_modules/inflight/inflight.js');
    const v = (r('util'), p.childrenIgnored);
    const g = p.isIgnored;
    const y = r('./node_modules/once/once.js');
    function b(e, t, r) {
      if (
        (typeof t === 'function' && ((r = t), (t = {})), t || (t = {}), t.sync)
      ) {
        if (r) throw new TypeError('callback provided to sync glob');
        return h(e, t);
      }
      return new w(e, t, r);
    }
    b.sync = h;
    const E = (b.GlobSync = h.GlobSync);
    function w(e, t, r) {
      if ((typeof t === 'function' && ((r = t), (t = null)), t && t.sync)) {
        if (r) throw new TypeError('callback provided to sync glob');
        return new E(e, t);
      }
      if (!(this instanceof w)) return new w(e, t, r);
      f(this, e, t), (this._didRealPath = !1);
      const n = this.minimatch.set.length;
      (this.matches = new Array(n)),
        typeof r === 'function' &&
          ((r = y(r)),
          this.on('error', r),
          this.on('end', (e) => {
            r(null, e);
          }));
      const o = this;
      if (
        ((this._processing = 0),
        (this._emitQueue = []),
        (this._processQueue = []),
        (this.paused = !1),
        this.noprocess)
      )
        return this;
      if (n === 0) return a();
      for (var i = !0, s = 0; s < n; s++)
        this._process(this.minimatch.set[s], s, !1, a);
      function a() {
        --o._processing,
          o._processing <= 0 &&
            (i
              ? process.nextTick(() => {
                  o._finish();
                })
              : o._finish());
      }
      i = !1;
    }
    (b.glob = b),
      (b.hasMagic = function(e, t) {
        const r = (function(e, t) {
          if (t === null || typeof t !== 'object') return e;
          for (let r = Object.keys(t), n = r.length; n--; ) e[r[n]] = t[r[n]];
          return e;
        })({}, t);
        r.noprocess = !0;
        const n = new w(e, r).minimatch.set;
        if (!e) return !1;
        if (n.length > 1) return !0;
        for (let o = 0; o < n[0].length; o++)
          if (typeof n[0][o] !== 'string') return !0;
        return !1;
      }),
      (b.Glob = w),
      s(w, a),
      (w.prototype._finish = function() {
        if ((u(this instanceof w), !this.aborted)) {
          if (this.realpath && !this._didRealpath) return this._realpath();
          p.finish(this), this.emit('end', this.found);
        }
      }),
      (w.prototype._realpath = function() {
        if (!this._didRealpath) {
          this._didRealpath = !0;
          var e = this.matches.length;
          if (e === 0) return this._finish();
          for (var t = this, r = 0; r < this.matches.length; r++)
            this._realpathSet(r, n);
        }
        function n() {
          --e == 0 && t._finish();
        }
      }),
      (w.prototype._realpathSet = function(e, t) {
        const r = this.matches[e];
        if (!r) return t();
        const n = Object.keys(r);
        const i = this;
        let s = n.length;
        if (s === 0) return t();
        const a = (this.matches[e] = Object.create(null));
        n.forEach((r, n) => {
          (r = i._makeAbs(r)),
            o.realpath(r, i.realpathCache, (n, o) => {
              n
                ? n.syscall === 'stat'
                  ? (a[r] = !0)
                  : i.emit('error', n)
                : (a[o] = !0),
                --s == 0 && ((i.matches[e] = a), t());
            });
        });
      }),
      (w.prototype._mark = function(e) {
        return p.mark(this, e);
      }),
      (w.prototype._makeAbs = function(e) {
        return p.makeAbs(this, e);
      }),
      (w.prototype.abort = function() {
        (this.aborted = !0), this.emit('abort');
      }),
      (w.prototype.pause = function() {
        this.paused || ((this.paused = !0), this.emit('pause'));
      }),
      (w.prototype.resume = function() {
        if (this.paused) {
          if (
            (this.emit('resume'), (this.paused = !1), this._emitQueue.length)
          ) {
            const e = this._emitQueue.slice(0);
            this._emitQueue.length = 0;
            for (var t = 0; t < e.length; t++) {
              const r = e[t];
              this._emitMatch(r[0], r[1]);
            }
          }
          if (this._processQueue.length) {
            const n = this._processQueue.slice(0);
            this._processQueue.length = 0;
            for (t = 0; t < n.length; t++) {
              const o = n[t];
              this._processing--, this._process(o[0], o[1], o[2], o[3]);
            }
          }
        }
      }),
      (w.prototype._process = function(e, t, r, n) {
        if ((u(this instanceof w), u(typeof n === 'function'), !this.aborted)) {
          if ((this._processing++, this.paused))
            this._processQueue.push([e, t, r, n]);
          else {
            for (var o, s = 0; typeof e[s] === 'string'; ) s++;
            switch (s) {
              case e.length:
                return void this._processSimple(e.join('/'), t, n);
              case 0:
                o = null;
                break;
              default:
                o = e.slice(0, s).join('/');
            }
            let a;
            const c = e.slice(s);
            o === null
              ? (a = '.')
              : l(o) || l(e.join('/'))
              ? ((o && l(o)) || (o = `/${o}`), (a = o))
              : (a = o);
            const h = this._makeAbs(a);
            if (v(this, a)) return n();
            c[0] === i.GLOBSTAR
              ? this._processGlobStar(o, a, h, c, t, r, n)
              : this._processReaddir(o, a, h, c, t, r, n);
          }
        }
      }),
      (w.prototype._processReaddir = function(e, t, r, n, o, i, s) {
        const a = this;
        this._readdir(r, i, (c, u) =>
          a._processReaddir2(e, t, r, n, o, i, u, s)
        );
      }),
      (w.prototype._processReaddir2 = function(e, t, r, n, o, i, s, a) {
        if (!s) return a();
        for (
          var u = n[0],
            l = !!this.minimatch.negate,
            h = u._glob,
            p = this.dot || h.charAt(0) === '.',
            f = [],
            d = 0;
          d < s.length;
          d++
        ) {
          if ((v = s[d]).charAt(0) !== '.' || p)
            (l && !e ? !v.match(u) : v.match(u)) && f.push(v);
        }
        const m = f.length;
        if (m === 0) return a();
        if (n.length === 1 && !this.mark && !this.stat) {
          this.matches[o] || (this.matches[o] = Object.create(null));
          for (d = 0; d < m; d++) {
            var v = f[d];
            e && (v = e !== '/' ? `${e}/${v}` : e + v),
              v.charAt(0) !== '/' || this.nomount || (v = c.join(this.root, v)),
              this._emitMatch(o, v);
          }
          return a();
        }
        n.shift();
        for (d = 0; d < m; d++) {
          v = f[d];
          e && (v = e !== '/' ? `${e}/${v}` : e + v),
            this._process([v].concat(n), o, i, a);
        }
        a();
      }),
      (w.prototype._emitMatch = function(e, t) {
        if (!this.aborted && !g(this, t)) {
          if (this.paused) this._emitQueue.push([e, t]);
          else {
            const r = l(t) ? t : this._makeAbs(t);
            if (
              (this.mark && (t = this._mark(t)),
              this.absolute && (t = r),
              !this.matches[e][t])
            ) {
              if (this.nodir) {
                const n = this.cache[r];
                if (n === 'DIR' || Array.isArray(n)) return;
              }
              this.matches[e][t] = !0;
              const o = this.statCache[r];
              o && this.emit('stat', t, o), this.emit('match', t);
            }
          }
        }
      }),
      (w.prototype._readdirInGlobStar = function(e, t) {
        if (!this.aborted) {
          if (this.follow) return this._readdir(e, !1, t);
          const r = this;
          const o = m(`lstat\0${e}`, (n, o) => {
            if (n && n.code === 'ENOENT') return t();
            const i = o && o.isSymbolicLink();
            (r.symlinks[e] = i),
              i || !o || o.isDirectory()
                ? r._readdir(e, !1, t)
                : ((r.cache[e] = 'FILE'), t());
          });
          o && n.lstat(e, o);
        }
      }),
      (w.prototype._readdir = function(e, t, r) {
        if (!this.aborted && (r = m(`readdir\0${e}\0${t}`, r))) {
          if (t && !d(this.symlinks, e)) return this._readdirInGlobStar(e, r);
          if (d(this.cache, e)) {
            const o = this.cache[e];
            if (!o || o === 'FILE') return r();
            if (Array.isArray(o)) return r(null, o);
          }
          n.readdir(
            e,
            (function(e, t, r) {
              return function(n, o) {
                n ? e._readdirError(t, n, r) : e._readdirEntries(t, o, r);
              };
            })(this, e, r)
          );
        }
      }),
      (w.prototype._readdirEntries = function(e, t, r) {
        if (!this.aborted) {
          if (!this.mark && !this.stat) {
            for (let n = 0; n < t.length; n++) {
              let o = t[n];
              (o = e === '/' ? e + o : `${e}/${o}`), (this.cache[o] = !0);
            }
          }
          return (this.cache[e] = t), r(null, t);
        }
      }),
      (w.prototype._readdirError = function(e, t, r) {
        if (!this.aborted) {
          switch (t.code) {
            case 'ENOTSUP':
            case 'ENOTDIR':
              var n = this._makeAbs(e);
              if (((this.cache[n] = 'FILE'), n === this.cwdAbs)) {
                const o = new Error(`${t.code} invalid cwd ${this.cwd}`);
                (o.path = this.cwd),
                  (o.code = t.code),
                  this.emit('error', o),
                  this.abort();
              }
              break;
            case 'ENOENT':
            case 'ELOOP':
            case 'ENAMETOOLONG':
            case 'UNKNOWN':
              this.cache[this._makeAbs(e)] = !1;
              break;
            default:
              (this.cache[this._makeAbs(e)] = !1),
                this.strict && (this.emit('error', t), this.abort()),
                this.silent || console.error('glob error', t);
          }
          return r();
        }
      }),
      (w.prototype._processGlobStar = function(e, t, r, n, o, i, s) {
        const a = this;
        this._readdir(r, i, (c, u) => {
          a._processGlobStar2(e, t, r, n, o, i, u, s);
        });
      }),
      (w.prototype._processGlobStar2 = function(e, t, r, n, o, i, s, a) {
        if (!s) return a();
        const c = n.slice(1);
        const u = e ? [e] : [];
        const l = u.concat(c);
        this._process(l, o, !1, a);
        const h = this.symlinks[r];
        const p = s.length;
        if (h && i) return a();
        for (let f = 0; f < p; f++) {
          if (s[f].charAt(0) !== '.' || this.dot) {
            const d = u.concat(s[f], c);
            this._process(d, o, !0, a);
            const m = u.concat(s[f], n);
            this._process(m, o, !0, a);
          }
        }
        a();
      }),
      (w.prototype._processSimple = function(e, t, r) {
        const n = this;
        this._stat(e, (o, i) => {
          n._processSimple2(e, t, o, i, r);
        });
      }),
      (w.prototype._processSimple2 = function(e, t, r, n, o) {
        if ((this.matches[t] || (this.matches[t] = Object.create(null)), !n))
          return o();
        if (e && l(e) && !this.nomount) {
          const i = /[\/\\]$/.test(e);
          e.charAt(0) === '/'
            ? (e = c.join(this.root, e))
            : ((e = c.resolve(this.root, e)), i && (e += '/'));
        }
        process.platform === 'win32' && (e = e.replace(/\\/g, '/')),
          this._emitMatch(t, e),
          o();
      }),
      (w.prototype._stat = function(e, t) {
        const r = this._makeAbs(e);
        const o = e.slice(-1) === '/';
        if (e.length > this.maxLength) return t();
        if (!this.stat && d(this.cache, r)) {
          let i = this.cache[r];
          if ((Array.isArray(i) && (i = 'DIR'), !o || i === 'DIR'))
            return t(null, i);
          if (o && i === 'FILE') return t();
        }
        const s = this.statCache[r];
        if (void 0 !== s) {
          if (!1 === s) return t(null, s);
          const a = s.isDirectory() ? 'DIR' : 'FILE';
          return o && a === 'FILE' ? t() : t(null, a, s);
        }
        const c = this;
        const u = m(`stat\0${r}`, (o, i) => {
          if (i && i.isSymbolicLink()) {
            return n.stat(r, (n, o) => {
              n ? c._stat2(e, r, null, i, t) : c._stat2(e, r, n, o, t);
            });
          }
          c._stat2(e, r, o, i, t);
        });
        u && n.lstat(r, u);
      }),
      (w.prototype._stat2 = function(e, t, r, n, o) {
        if (r && (r.code === 'ENOENT' || r.code === 'ENOTDIR'))
          return (this.statCache[t] = !1), o();
        const i = e.slice(-1) === '/';
        if (
          ((this.statCache[t] = n),
          t.slice(-1) === '/' && n && !n.isDirectory())
        )
          return o(null, !1, n);
        let s = !0;
        return (
          n && (s = n.isDirectory() ? 'DIR' : 'FILE'),
          (this.cache[t] = this.cache[t] || s),
          i && s === 'FILE' ? o() : o(null, s, n)
        );
      });
  },
  './node_modules/glob/sync.js': function(e, t, r) {
    (e.exports = d), (d.GlobSync = m);
    const n = r('fs');
    const o = r('./node_modules/fs.realpath/index.js');
    const i = r('./node_modules/minimatch/minimatch.js');
    const s =
      (i.Minimatch,
      r('./node_modules/glob/glob.js').Glob,
      r('util'),
      r('path'));
    const a = r('assert');
    const c = r('./node_modules/path-is-absolute/index.js');
    const u = r('./node_modules/glob/common.js');
    const l = (u.alphasort, u.alphasorti, u.setopts);
    const h = u.ownProp;
    const p = u.childrenIgnored;
    const f = u.isIgnored;
    function d(e, t) {
      if (typeof t === 'function' || arguments.length === 3) {
        throw new TypeError(
          'callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167'
        );
      }
      return new m(e, t).found;
    }
    function m(e, t) {
      if (!e) throw new Error('must provide pattern');
      if (typeof t === 'function' || arguments.length === 3) {
        throw new TypeError(
          'callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167'
        );
      }
      if (!(this instanceof m)) return new m(e, t);
      if ((l(this, e, t), this.noprocess)) return this;
      const r = this.minimatch.set.length;
      this.matches = new Array(r);
      for (let n = 0; n < r; n++) this._process(this.minimatch.set[n], n, !1);
      this._finish();
    }
    (m.prototype._finish = function() {
      if ((a(this instanceof m), this.realpath)) {
        const e = this;
        this.matches.forEach((t, r) => {
          const n = (e.matches[r] = Object.create(null));
          for (let i in t) {
            try {
              (i = e._makeAbs(i)), (n[o.realpathSync(i, e.realpathCache)] = !0);
            } catch (t) {
              if (t.syscall !== 'stat') throw t;
              n[e._makeAbs(i)] = !0;
            }
          }
        });
      }
      u.finish(this);
    }),
      (m.prototype._process = function(e, t, r) {
        a(this instanceof m);
        for (var n, o = 0; typeof e[o] === 'string'; ) o++;
        switch (o) {
          case e.length:
            return void this._processSimple(e.join('/'), t);
          case 0:
            n = null;
            break;
          default:
            n = e.slice(0, o).join('/');
        }
        let s;
        const u = e.slice(o);
        n === null
          ? (s = '.')
          : c(n) || c(e.join('/'))
          ? ((n && c(n)) || (n = `/${n}`), (s = n))
          : (s = n);
        const l = this._makeAbs(s);
        p(this, s) ||
          (u[0] === i.GLOBSTAR
            ? this._processGlobStar(n, s, l, u, t, r)
            : this._processReaddir(n, s, l, u, t, r));
      }),
      (m.prototype._processReaddir = function(e, t, r, n, o, i) {
        const a = this._readdir(r, i);
        if (a) {
          for (
            var c = n[0],
              u = !!this.minimatch.negate,
              l = c._glob,
              h = this.dot || l.charAt(0) === '.',
              p = [],
              f = 0;
            f < a.length;
            f++
          ) {
            if ((v = a[f]).charAt(0) !== '.' || h)
              (u && !e ? !v.match(c) : v.match(c)) && p.push(v);
          }
          const d = p.length;
          if (d !== 0) {
            if (n.length !== 1 || this.mark || this.stat) {
              n.shift();
              for (f = 0; f < d; f++) {
                var m;
                v = p[f];
                (m = e ? [e, v] : [v]), this._process(m.concat(n), o, i);
              }
            } else {
              this.matches[o] || (this.matches[o] = Object.create(null));
              for (var f = 0; f < d; f++) {
                var v = p[f];
                e && (v = e.slice(-1) !== '/' ? `${e}/${v}` : e + v),
                  v.charAt(0) !== '/' ||
                    this.nomount ||
                    (v = s.join(this.root, v)),
                  this._emitMatch(o, v);
              }
            }
          }
        }
      }),
      (m.prototype._emitMatch = function(e, t) {
        if (!f(this, t)) {
          const r = this._makeAbs(t);
          if (
            (this.mark && (t = this._mark(t)),
            this.absolute && (t = r),
            !this.matches[e][t])
          ) {
            if (this.nodir) {
              const n = this.cache[r];
              if (n === 'DIR' || Array.isArray(n)) return;
            }
            (this.matches[e][t] = !0), this.stat && this._stat(t);
          }
        }
      }),
      (m.prototype._readdirInGlobStar = function(e) {
        if (this.follow) return this._readdir(e, !1);
        let t;
        let r;
        try {
          r = n.lstatSync(e);
        } catch (e) {
          if (e.code === 'ENOENT') return null;
        }
        const o = r && r.isSymbolicLink();
        return (
          (this.symlinks[e] = o),
          o || !r || r.isDirectory()
            ? (t = this._readdir(e, !1))
            : (this.cache[e] = 'FILE'),
          t
        );
      }),
      (m.prototype._readdir = function(e, t) {
        if (t && !h(this.symlinks, e)) return this._readdirInGlobStar(e);
        if (h(this.cache, e)) {
          const r = this.cache[e];
          if (!r || r === 'FILE') return null;
          if (Array.isArray(r)) return r;
        }
        try {
          return this._readdirEntries(e, n.readdirSync(e));
        } catch (t) {
          return this._readdirError(e, t), null;
        }
      }),
      (m.prototype._readdirEntries = function(e, t) {
        if (!this.mark && !this.stat) {
          for (let r = 0; r < t.length; r++) {
            let n = t[r];
            (n = e === '/' ? e + n : `${e}/${n}`), (this.cache[n] = !0);
          }
        }
        return (this.cache[e] = t), t;
      }),
      (m.prototype._readdirError = function(e, t) {
        switch (t.code) {
          case 'ENOTSUP':
          case 'ENOTDIR':
            var r = this._makeAbs(e);
            if (((this.cache[r] = 'FILE'), r === this.cwdAbs)) {
              const n = new Error(`${t.code} invalid cwd ${this.cwd}`);
              throw ((n.path = this.cwd), (n.code = t.code), n);
            }
            break;
          case 'ENOENT':
          case 'ELOOP':
          case 'ENAMETOOLONG':
          case 'UNKNOWN':
            this.cache[this._makeAbs(e)] = !1;
            break;
          default:
            if (((this.cache[this._makeAbs(e)] = !1), this.strict)) throw t;
            this.silent || console.error('glob error', t);
        }
      }),
      (m.prototype._processGlobStar = function(e, t, r, n, o, i) {
        const s = this._readdir(r, i);
        if (s) {
          const a = n.slice(1);
          const c = e ? [e] : [];
          const u = c.concat(a);
          this._process(u, o, !1);
          const l = s.length;
          if (!this.symlinks[r] || !i) {
            for (let h = 0; h < l; h++) {
              if (s[h].charAt(0) !== '.' || this.dot) {
                const p = c.concat(s[h], a);
                this._process(p, o, !0);
                const f = c.concat(s[h], n);
                this._process(f, o, !0);
              }
            }
          }
        }
      }),
      (m.prototype._processSimple = function(e, t) {
        const r = this._stat(e);
        if ((this.matches[t] || (this.matches[t] = Object.create(null)), r)) {
          if (e && c(e) && !this.nomount) {
            const n = /[\/\\]$/.test(e);
            e.charAt(0) === '/'
              ? (e = s.join(this.root, e))
              : ((e = s.resolve(this.root, e)), n && (e += '/'));
          }
          process.platform === 'win32' && (e = e.replace(/\\/g, '/')),
            this._emitMatch(t, e);
        }
      }),
      (m.prototype._stat = function(e) {
        const t = this._makeAbs(e);
        const r = e.slice(-1) === '/';
        if (e.length > this.maxLength) return !1;
        if (!this.stat && h(this.cache, t)) {
          var o = this.cache[t];
          if ((Array.isArray(o) && (o = 'DIR'), !r || o === 'DIR')) return o;
          if (r && o === 'FILE') return !1;
        }
        let i = this.statCache[t];
        if (!i) {
          let s;
          try {
            s = n.lstatSync(t);
          } catch (e) {
            if (e && (e.code === 'ENOENT' || e.code === 'ENOTDIR'))
              return (this.statCache[t] = !1), !1;
          }
          if (s && s.isSymbolicLink()) {
            try {
              i = n.statSync(t);
            } catch (e) {
              i = s;
            }
          } else i = s;
        }
        this.statCache[t] = i;
        o = !0;
        return (
          i && (o = i.isDirectory() ? 'DIR' : 'FILE'),
          (this.cache[t] = this.cache[t] || o),
          (!r || o !== 'FILE') && o
        );
      }),
      (m.prototype._mark = function(e) {
        return u.mark(this, e);
      }),
      (m.prototype._makeAbs = function(e) {
        return u.makeAbs(this, e);
      });
  },
  './node_modules/inflight/inflight.js': function(e, t, r) {
    const n = r('./node_modules/wrappy/wrappy.js');
    const o = Object.create(null);
    const i = r('./node_modules/once/once.js');
    function s(e) {
      for (var t = e.length, r = [], n = 0; n < t; n++) r[n] = e[n];
      return r;
    }
    e.exports = n((e, t) =>
      o[e]
        ? (o[e].push(t), null)
        : ((o[e] = [t]),
          (function(e) {
            return i(function t() {
              const r = o[e];
              const n = r.length;
              const i = s(arguments);
              try {
                for (let a = 0; a < n; a++) r[a].apply(null, i);
              } finally {
                r.length > n
                  ? (r.splice(0, n),
                    process.nextTick(() => {
                      t.apply(null, i);
                    }))
                  : delete o[e];
              }
            });
          })(e))
    );
  },
  './node_modules/inherits/inherits.js': function(e, t, r) {
    try {
      const n = r('util');
      if (typeof n.inherits !== 'function') throw '';
      e.exports = n.inherits;
    } catch (t) {
      e.exports = r('./node_modules/inherits/inherits_browser.js');
    }
  },
  './node_modules/inherits/inherits_browser.js': function(e, t) {
    typeof Object.create === 'function'
      ? (e.exports = function(e, t) {
          t &&
            ((e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })));
        })
      : (e.exports = function(e, t) {
          if (t) {
            e.super_ = t;
            const r = function() {};
            (r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.prototype.constructor = e);
          }
        });
  },
  './node_modules/minimatch/minimatch.js': function(e, t, r) {
    (e.exports = d), (d.Minimatch = m);
    let n = { sep: '/' };
    try {
      n = r('path');
    } catch (e) {}
    const o = (d.GLOBSTAR = m.GLOBSTAR = {});
    const i = r('./node_modules/brace-expansion/index.js');
    const s = {
      '!': { open: '(?:(?!(?:', close: '))[^/]*?)' },
      '?': { open: '(?:', close: ')?' },
      '+': { open: '(?:', close: ')+' },
      '*': { open: '(?:', close: ')*' },
      '@': { open: '(?:', close: ')' },
    };
    const a = '[^/]';
    const c = `${a}*?`;
    const u = '(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?';
    const l = '(?:(?!(?:\\/|^)\\.).)*?';
    const h = '().*{}+?[]^$\\!'
      .split('')
      .reduce((e, t) => ((e[t] = !0), e), {});
    const p = /\/+/;
    function f(e, t) {
      (e = e || {}), (t = t || {});
      const r = {};
      return (
        Object.keys(t).forEach((e) => {
          r[e] = t[e];
        }),
        Object.keys(e).forEach((t) => {
          r[t] = e[t];
        }),
        r
      );
    }
    function d(e, t, r) {
      if (typeof t !== 'string')
        throw new TypeError('glob pattern string required');
      return (
        r || (r = {}),
        !(!r.nocomment && t.charAt(0) === '#') &&
          (t.trim() === '' ? e === '' : new m(t, r).match(e))
      );
    }
    function m(e, t) {
      if (!(this instanceof m)) return new m(e, t);
      if (typeof e !== 'string')
        throw new TypeError('glob pattern string required');
      t || (t = {}),
        (e = e.trim()),
        n.sep !== '/' && (e = e.split(n.sep).join('/')),
        (this.options = t),
        (this.set = []),
        (this.pattern = e),
        (this.regexp = null),
        (this.negate = !1),
        (this.comment = !1),
        (this.empty = !1),
        this.make();
    }
    function v(e, t) {
      if (
        (t || (t = this instanceof m ? this.options : {}),
        void 0 === (e = void 0 === e ? this.pattern : e))
      )
        throw new TypeError('undefined pattern');
      return t.nobrace || !e.match(/\{.*\}/) ? [e] : i(e);
    }
    (d.filter = function(e, t) {
      return (
        (t = t || {}),
        function(r, n, o) {
          return d(r, e, t);
        }
      );
    }),
      (d.defaults = function(e) {
        if (!e || !Object.keys(e).length) return d;
        const t = d;
        const r = function(r, n, o) {
          return t.minimatch(r, n, f(e, o));
        };
        return (
          (r.Minimatch = function(r, n) {
            return new t.Minimatch(r, f(e, n));
          }),
          r
        );
      }),
      (m.defaults = function(e) {
        return e && Object.keys(e).length ? d.defaults(e).Minimatch : m;
      }),
      (m.prototype.debug = function() {}),
      (m.prototype.make = function() {
        if (this._made) return;
        const e = this.pattern;
        const t = this.options;
        if (!t.nocomment && e.charAt(0) === '#')
          return void (this.comment = !0);
        if (!e) return void (this.empty = !0);
        this.parseNegate();
        let r = (this.globSet = this.braceExpand());
        t.debug && (this.debug = console.error);
        this.debug(this.pattern, r),
          (r = this.globParts = r.map((e) => e.split(p))),
          this.debug(this.pattern, r),
          (r = r.map(function(e, t, r) {
            return e.map(this.parse, this);
          }, this)),
          this.debug(this.pattern, r),
          (r = r.filter((e) => e.indexOf(!1) === -1)),
          this.debug(this.pattern, r),
          (this.set = r);
      }),
      (m.prototype.parseNegate = function() {
        const e = this.pattern;
        let t = !1;
        const r = this.options;
        let n = 0;
        if (r.nonegate) return;
        for (let o = 0, i = e.length; o < i && e.charAt(o) === '!'; o++)
          (t = !t), n++;
        n && (this.pattern = e.substr(n));
        this.negate = t;
      }),
      (d.braceExpand = function(e, t) {
        return v(e, t);
      }),
      (m.prototype.braceExpand = v),
      (m.prototype.parse = function(e, t) {
        if (e.length > 65536) throw new TypeError('pattern is too long');
        const r = this.options;
        if (!r.noglobstar && e === '**') return o;
        if (e === '') return '';
        let n;
        let i = '';
        let u = !!r.nocase;
        let l = !1;
        const p = [];
        const f = [];
        let d = !1;
        let m = -1;
        let v = -1;
        const y =
          e.charAt(0) === '.'
            ? ''
            : r.dot
            ? '(?!(?:^|\\/)\\.{1,2}(?:$|\\/))'
            : '(?!\\.)';
        const b = this;
        function E() {
          if (n) {
            switch (n) {
              case '*':
                (i += c), (u = !0);
                break;
              case '?':
                (i += a), (u = !0);
                break;
              default:
                i += `\\${n}`;
            }
            b.debug('clearStateChar %j %j', n, i), (n = !1);
          }
        }
        for (var w, _ = 0, j = e.length; _ < j && (w = e.charAt(_)); _++) {
          if ((this.debug('%s\t%s %s %j', e, _, i, w), l && h[w]))
            (i += `\\${w}`), (l = !1);
          else {
            switch (w) {
              case '/':
                return !1;
              case '\\':
                E(), (l = !0);
                continue;
              case '?':
              case '*':
              case '+':
              case '@':
              case '!':
                if ((this.debug('%s\t%s %s %j <-- stateChar', e, _, i, w), d)) {
                  this.debug('  in class'),
                    w === '!' && _ === v + 1 && (w = '^'),
                    (i += w);
                  continue;
                }
                b.debug('call clearStateChar %j', n),
                  E(),
                  (n = w),
                  r.noext && E();
                continue;
              case '(':
                if (d) {
                  i += '(';
                  continue;
                }
                if (!n) {
                  i += '\\(';
                  continue;
                }
                p.push({
                  type: n,
                  start: _ - 1,
                  reStart: i.length,
                  open: s[n].open,
                  close: s[n].close,
                }),
                  (i += n === '!' ? '(?:(?!(?:' : '(?:'),
                  this.debug('plType %j %j', n, i),
                  (n = !1);
                continue;
              case ')':
                if (d || !p.length) {
                  i += '\\)';
                  continue;
                }
                E(), (u = !0);
                var O = p.pop();
                (i += O.close),
                  O.type === '!' && f.push(O),
                  (O.reEnd = i.length);
                continue;
              case '|':
                if (d || !p.length || l) {
                  (i += '\\|'), (l = !1);
                  continue;
                }
                E(), (i += '|');
                continue;
              case '[':
                if ((E(), d)) {
                  i += `\\${w}`;
                  continue;
                }
                (d = !0), (v = _), (m = i.length), (i += w);
                continue;
              case ']':
                if (_ === v + 1 || !d) {
                  (i += `\\${w}`), (l = !1);
                  continue;
                }
                if (d) {
                  var S = e.substring(v + 1, _);
                  try {
                    RegExp(`[${S}]`);
                  } catch (e) {
                    var x = this.parse(S, g);
                    (i = `${i.substr(0, m)}\\[${x[0]}\\]`),
                      (u = u || x[1]),
                      (d = !1);
                    continue;
                  }
                }
                (u = !0), (d = !1), (i += w);
                continue;
              default:
                E(),
                  l ? (l = !1) : !h[w] || (w === '^' && d) || (i += '\\'),
                  (i += w);
            }
          }
        }
        d &&
          ((S = e.substr(v + 1)),
          (x = this.parse(S, g)),
          (i = `${i.substr(0, m)}\\[${x[0]}`),
          (u = u || x[1]));
        for (O = p.pop(); O; O = p.pop()) {
          let k = i.slice(O.reStart + O.open.length);
          this.debug('setting tail', i, O),
            (k = k.replace(
              /((?:\\{2}){0,64})(\\?)\|/g,
              (e, t, r) => (r || (r = '\\'), `${t + t + r}|`)
            )),
            this.debug('tail=%j\n   %s', k, k, O, i);
          const A = O.type === '*' ? c : O.type === '?' ? a : `\\${O.type}`;
          (u = !0), (i = `${i.slice(0, O.reStart) + A}\\(${k}`);
        }
        E(), l && (i += '\\\\');
        let T = !1;
        switch (i.charAt(0)) {
          case '.':
          case '[':
          case '(':
            T = !0;
        }
        for (let R = f.length - 1; R > -1; R--) {
          const N = f[R];
          const P = i.slice(0, N.reStart);
          const I = i.slice(N.reStart, N.reEnd - 8);
          let L = i.slice(N.reEnd - 8, N.reEnd);
          let D = i.slice(N.reEnd);
          L += D;
          const C = P.split('(').length - 1;
          let M = D;
          for (_ = 0; _ < C; _++) M = M.replace(/\)[+*?]?/, '');
          let G = '';
          (D = M) === '' && t !== g && (G = '$'), (i = P + I + D + G + L);
        }
        i !== '' && u && (i = `(?=.)${i}`);
        T && (i = y + i);
        if (t === g) return [i, u];
        if (!u) {
          return (function(e) {
            return e.replace(/\\(.)/g, '$1');
          })(e);
        }
        const $ = r.nocase ? 'i' : '';
        try {
          var z = new RegExp(`^${i}$`, $);
        } catch (e) {
          return new RegExp('$.');
        }
        return (z._glob = e), (z._src = i), z;
      });
    var g = {};
    (d.makeRe = function(e, t) {
      return new m(e, t || {}).makeRe();
    }),
      (m.prototype.makeRe = function() {
        if (this.regexp || !1 === this.regexp) return this.regexp;
        const e = this.set;
        if (!e.length) return (this.regexp = !1), this.regexp;
        const t = this.options;
        const r = t.noglobstar ? c : t.dot ? u : l;
        const n = t.nocase ? 'i' : '';
        let i = e
          .map((e) =>
            e
              .map((e) =>
                e === o
                  ? r
                  : typeof e === 'string'
                  ? (function(e) {
                      return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
                    })(e)
                  : e._src
              )
              .join('\\/')
          )
          .join('|');
        (i = `^(?:${i})$`), this.negate && (i = `^(?!${i}).*$`);
        try {
          this.regexp = new RegExp(i, n);
        } catch (e) {
          this.regexp = !1;
        }
        return this.regexp;
      }),
      (d.match = function(e, t, r) {
        const n = new m(t, (r = r || {}));
        return (
          (e = e.filter((e) => n.match(e))),
          n.options.nonull && !e.length && e.push(t),
          e
        );
      }),
      (m.prototype.match = function(e, t) {
        if ((this.debug('match', e, this.pattern), this.comment)) return !1;
        if (this.empty) return e === '';
        if (e === '/' && t) return !0;
        const r = this.options;
        n.sep !== '/' && (e = e.split(n.sep).join('/'));
        (e = e.split(p)), this.debug(this.pattern, 'split', e);
        let o;
        let i;
        const s = this.set;
        for (
          this.debug(this.pattern, 'set', s), i = e.length - 1;
          i >= 0 && !(o = e[i]);
          i--
        );
        for (i = 0; i < s.length; i++) {
          const a = s[i];
          let c = e;
          if (
            (r.matchBase && a.length === 1 && (c = [o]), this.matchOne(c, a, t))
          )
            return !!r.flipNegate || !this.negate;
        }
        return !r.flipNegate && this.negate;
      }),
      (m.prototype.matchOne = function(e, t, r) {
        const n = this.options;
        this.debug('matchOne', { this: this, file: e, pattern: t }),
          this.debug('matchOne', e.length, t.length);
        for (
          var i = 0, s = 0, a = e.length, c = t.length;
          i < a && s < c;
          i++, s++
        ) {
          this.debug('matchOne loop');
          var u;
          const l = t[s];
          const h = e[i];
          if ((this.debug(t, l, h), !1 === l)) return !1;
          if (l === o) {
            this.debug('GLOBSTAR', [t, l, h]);
            let p = i;
            const f = s + 1;
            if (f === c) {
              for (this.debug('** at the end'); i < a; i++) {
                if (
                  e[i] === '.' ||
                  e[i] === '..' ||
                  (!n.dot && e[i].charAt(0) === '.')
                )
                  return !1;
              }
              return !0;
            }
            for (; p < a; ) {
              const d = e[p];
              if (
                (this.debug('\nglobstar while', e, p, t, f, d),
                this.matchOne(e.slice(p), t.slice(f), r))
              )
                return this.debug('globstar found match!', p, a, d), !0;
              if (d === '.' || d === '..' || (!n.dot && d.charAt(0) === '.')) {
                this.debug('dot detected!', e, p, t, f);
                break;
              }
              this.debug('globstar swallow a segment, and continue'), p++;
            }
            return !(
              !r ||
              (this.debug('\n>>> no match, partial?', e, p, t, f), p !== a)
            );
          }
          if (
            (typeof l === 'string'
              ? ((u = n.nocase ? h.toLowerCase() === l.toLowerCase() : h === l),
                this.debug('string match', l, h, u))
              : ((u = h.match(l)), this.debug('pattern match', l, h, u)),
            !u)
          )
            return !1;
        }
        if (i === a && s === c) return !0;
        if (i === a) return r;
        if (s === c) return i === a - 1 && e[i] === '';
        throw new Error('wtf?');
      });
  },
  './node_modules/once/once.js': function(e, t, r) {
    const n = r('./node_modules/wrappy/wrappy.js');
    function o(e) {
      var t = function() {
        return t.called
          ? t.value
          : ((t.called = !0), (t.value = e.apply(this, arguments)));
      };
      return (t.called = !1), t;
    }
    function i(e) {
      var t = function() {
        if (t.called) throw new Error(t.onceError);
        return (t.called = !0), (t.value = e.apply(this, arguments));
      };
      const r = e.name || 'Function wrapped with `once`';
      return (
        (t.onceError = `${r} shouldn't be called more than once`),
        (t.called = !1),
        t
      );
    }
    (e.exports = n(o)),
      (e.exports.strict = n(i)),
      (o.proto = o(() => {
        Object.defineProperty(Function.prototype, 'once', {
          value() {
            return o(this);
          },
          configurable: !0,
        }),
          Object.defineProperty(Function.prototype, 'onceStrict', {
            value() {
              return i(this);
            },
            configurable: !0,
          });
      }));
  },
  './node_modules/path-is-absolute/index.js': function(e, t, r) {
    function n(e) {
      return e.charAt(0) === '/';
    }
    function o(e) {
      const t = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(
        e
      );
      const r = t[1] || '';
      const n = Boolean(r && r.charAt(1) !== ':');
      return Boolean(t[2] || n);
    }
    (e.exports = process.platform === 'win32' ? o : n),
      (e.exports.posix = n),
      (e.exports.win32 = o);
  },
  './node_modules/rimraf/rimraf.js': function(e, t, r) {
    (e.exports = p), (p.sync = g);
    const n = r('assert');
    const o = r('path');
    const i = r('fs');
    const s = r('./node_modules/glob/glob.js');
    const a = 0o666;
    const c = { nosort: !0, silent: !0 };
    let u = 0;
    const l = process.platform === 'win32';
    function h(e) {
      ['unlink', 'chmod', 'stat', 'lstat', 'rmdir', 'readdir'].forEach((t) => {
        (e[t] = e[t] || i[t]), (e[(t += 'Sync')] = e[t] || i[t]);
      }),
        (e.maxBusyTries = e.maxBusyTries || 3),
        (e.emfileWait = e.emfileWait || 1e3),
        !1 === e.glob && (e.disableGlob = !0),
        (e.disableGlob = e.disableGlob || !1),
        (e.glob = e.glob || c);
    }
    function p(e, t, r) {
      typeof t === 'function' && ((r = t), (t = {})),
        n(e, 'rimraf: missing path'),
        n.equal(typeof e, 'string', 'rimraf: path should be a string'),
        n.equal(typeof r, 'function', 'rimraf: callback function required'),
        n(t, 'rimraf: invalid options argument provided'),
        n.equal(typeof t, 'object', 'rimraf: options should be object'),
        h(t);
      let o = 0;
      let i = null;
      let a = 0;
      if (t.disableGlob || !s.hasMagic(e)) return c(null, [e]);
      function c(e, n) {
        return e
          ? r(e)
          : (a = n.length) === 0
          ? r()
          : void n.forEach((e) => {
              f(e, t, function n(s) {
                if (s) {
                  if (
                    (s.code === 'EBUSY' ||
                      s.code === 'ENOTEMPTY' ||
                      s.code === 'EPERM') &&
                    o < t.maxBusyTries
                  ) {
                    return (
                      o++,
                      setTimeout(() => {
                        f(e, t, n);
                      }, 100 * o)
                    );
                  }
                  if (s.code === 'EMFILE' && u < t.emfileWait) {
                    return setTimeout(() => {
                      f(e, t, n);
                    }, u++);
                  }
                  s.code === 'ENOENT' && (s = null);
                }
                (u = 0),
                  (function(e) {
                    (i = i || e), --a == 0 && r(i);
                  })(s);
              });
            });
      }
      t.lstat(e, (r, n) => {
        if (!r) return c(null, [e]);
        s(e, t.glob, c);
      });
    }
    function f(e, t, r) {
      n(e),
        n(t),
        n(typeof r === 'function'),
        t.lstat(e, (n, o) =>
          n && n.code === 'ENOENT'
            ? r(null)
            : (n && n.code === 'EPERM' && l && d(e, t, n, r),
              o && o.isDirectory()
                ? v(e, t, n, r)
                : void t.unlink(e, (n) => {
                    if (n) {
                      if (n.code === 'ENOENT') return r(null);
                      if (n.code === 'EPERM')
                        return l ? d(e, t, n, r) : v(e, t, n, r);
                      if (n.code === 'EISDIR') return v(e, t, n, r);
                    }
                    return r(n);
                  }))
        );
    }
    function d(e, t, r, o) {
      n(e),
        n(t),
        n(typeof o === 'function'),
        r && n(r instanceof Error),
        t.chmod(e, a, (n) => {
          n
            ? o(n.code === 'ENOENT' ? null : r)
            : t.stat(e, (n, i) => {
                n
                  ? o(n.code === 'ENOENT' ? null : r)
                  : i.isDirectory()
                  ? v(e, t, r, o)
                  : t.unlink(e, o);
              });
        });
    }
    function m(e, t, r) {
      n(e), n(t), r && n(r instanceof Error);
      try {
        t.chmodSync(e, a);
      } catch (e) {
        if (e.code === 'ENOENT') return;
        throw r;
      }
      try {
        var o = t.statSync(e);
      } catch (e) {
        if (e.code === 'ENOENT') return;
        throw r;
      }
      o.isDirectory() ? y(e, t, r) : t.unlinkSync(e);
    }
    function v(e, t, r, i) {
      n(e),
        n(t),
        r && n(r instanceof Error),
        n(typeof i === 'function'),
        t.rmdir(e, (s) => {
          !s ||
          (s.code !== 'ENOTEMPTY' && s.code !== 'EEXIST' && s.code !== 'EPERM')
            ? s && s.code === 'ENOTDIR'
              ? i(r)
              : i(s)
            : (function(e, t, r) {
                n(e),
                  n(t),
                  n(typeof r === 'function'),
                  t.readdir(e, (n, i) => {
                    if (n) return r(n);
                    let s;
                    let a = i.length;
                    if (a === 0) return t.rmdir(e, r);
                    i.forEach((n) => {
                      p(o.join(e, n), t, (n) => {
                        if (!s) {
                          return n
                            ? r((s = n))
                            : void (--a == 0 && t.rmdir(e, r));
                        }
                      });
                    });
                  });
              })(e, t, i);
        });
    }
    function g(e, t) {
      let r;
      if (
        (h((t = t || {})),
        n(e, 'rimraf: missing path'),
        n.equal(typeof e, 'string', 'rimraf: path should be a string'),
        n(t, 'rimraf: missing options'),
        n.equal(typeof t, 'object', 'rimraf: options should be object'),
        t.disableGlob || !s.hasMagic(e))
      )
        r = [e];
      else {
        try {
          t.lstatSync(e), (r = [e]);
        } catch (n) {
          r = s.sync(e, t.glob);
        }
      }
      if (r.length) {
        for (let o = 0; o < r.length; o++) {
          e = r[o];
          try {
            var i = t.lstatSync(e);
          } catch (r) {
            if (r.code === 'ENOENT') return;
            r.code === 'EPERM' && l && m(e, t, r);
          }
          try {
            i && i.isDirectory() ? y(e, t, null) : t.unlinkSync(e);
          } catch (r) {
            if (r.code === 'ENOENT') return;
            if (r.code === 'EPERM') return l ? m(e, t, r) : y(e, t, r);
            if (r.code !== 'EISDIR') throw r;
            y(e, t, r);
          }
        }
      }
    }
    function y(e, t, r) {
      n(e), n(t), r && n(r instanceof Error);
      try {
        t.rmdirSync(e);
      } catch (i) {
        if (i.code === 'ENOENT') return;
        if (i.code === 'ENOTDIR') throw r;
        (i.code !== 'ENOTEMPTY' && i.code !== 'EEXIST' && i.code !== 'EPERM') ||
          (function(e, t) {
            n(e),
              n(t),
              t.readdirSync(e).forEach((r) => {
                g(o.join(e, r), t);
              });
            const r = l ? 100 : 1;
            let i = 0;
            for (;;) {
              let s = !0;
              try {
                const a = t.rmdirSync(e, t);
                return (s = !1), a;
              } finally {
                if (++i < r && s) continue;
              }
            }
          })(e, t);
      }
    }
  },
  './node_modules/wrappy/wrappy.js': function(e, t) {
    e.exports = function e(t, r) {
      if (t && r) return e(t)(r);
      if (typeof t !== 'function') throw new TypeError('need wrapper function');
      Object.keys(t).forEach((e) => {
        n[e] = t[e];
      });
      return n;
      function n() {
        for (var e = new Array(arguments.length), r = 0; r < e.length; r++)
          e[r] = arguments[r];
        const n = t.apply(this, e);
        const o = e[e.length - 1];
        return (
          typeof n === 'function' &&
            n !== o &&
            Object.keys(o).forEach((e) => {
              n[e] = o[e];
            }),
          n
        );
      }
    };
  },
  assert(e, t) {
    e.exports = require('assert');
  },
  child_process(e, t) {
    e.exports = require('child_process');
  },
  dotenv(e, t) {
    e.exports = require('dotenv');
  },
  electron(e, t) {
    e.exports = require('electron');
  },
  'electron-debug': function(e, t) {
    e.exports = require('electron-debug');
  },
  'electron-log': function(e, t) {
    e.exports = require('electron-log');
  },
  'electron-updater': function(e, t) {
    e.exports = require('electron-updater');
  },
  events(e, t) {
    e.exports = require('events');
  },
  fs(e, t) {
    e.exports = require('fs');
  },
  https(e, t) {
    e.exports = require('https');
  },
  path(e, t) {
    e.exports = require('path');
  },
  serialport(e, t) {
    e.exports = require('serialport');
  },
  'socket.io-client': function(e, t) {
    e.exports = require('socket.io-client');
  },
  'source-map-support': function(e, t) {
    e.exports = require('source-map-support');
  },
  util(e, t) {
    e.exports = require('util');
  },
});
// # sourceMappingURL=main.prod.js.map
