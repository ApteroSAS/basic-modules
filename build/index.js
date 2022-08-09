/*!
 *
 *   @aptero/axolotis-module-basic v1.0.0
 *
 *   Copyright (c) Aptero  and project contributors.
 *
 *   This source code is licensed under the undefined license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!(function webpackUniversalModuleDefinition(e, r) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = r(require("@aptero/axolotis-player")))
    : "function" == typeof define && define.amd
    ? define("axolotis-module-basic", ["@aptero/axolotis-player"], r)
    : "object" == typeof exports
    ? (exports["axolotis-module-basic"] = r(require("@aptero/axolotis-player")))
    : (e["axolotis-module-basic"] = r(e["@aptero/axolotis-player"]));
})(self, (e) =>
  (() => {
    "use strict";
    var r,
      t,
      n,
      o = {
        9152: (e, r, t) => {
          t.d(r, {
            $b: () => o,
            CQ: () => nameGenerationService,
            Gf: () => roomService,
            Q: () => c,
            YE: () => roomServiceSync,
            eM: () => u,
            eW: () => _,
            h: () => store,
            h$: () => propertyService,
            kO: () => cookiesStore,
            qh: () => i,
            we: () => a,
            yE: () => phoenixAuth,
          });
          var n = t(12);
          function _typeof(e) {
            return (
              (_typeof =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }),
              _typeof(e)
            );
          }
          function _regeneratorRuntime() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
              function _regeneratorRuntime() {
                return e;
              };
            var e = {},
              r = Object.prototype,
              t = r.hasOwnProperty,
              n = "function" == typeof Symbol ? Symbol : {},
              o = n.iterator || "@@iterator",
              i = n.asyncIterator || "@@asyncIterator",
              a = n.toStringTag || "@@toStringTag";
            function define(e, r, t) {
              return Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }), e[r];
            }
            try {
              define({}, "");
            } catch (e) {
              define = function define(e, r, t) {
                return (e[r] = t);
              };
            }
            function wrap(e, r, t, n) {
              var o = r && r.prototype instanceof Generator ? r : Generator,
                i = Object.create(o.prototype),
                a = new Context(n || []);
              return (
                (i._invoke = (function (e, r, t) {
                  var n = "suspendedStart";
                  return function (o, i) {
                    if ("executing" === n) throw new Error("Generator is already running");
                    if ("completed" === n) {
                      if ("throw" === o) throw i;
                      return doneResult();
                    }
                    for (t.method = o, t.arg = i; ; ) {
                      var a = t.delegate;
                      if (a) {
                        var _ = maybeInvokeDelegate(a, t);
                        if (_) {
                          if (_ === c) continue;
                          return _;
                        }
                      }
                      if ("next" === t.method) t.sent = t._sent = t.arg;
                      else if ("throw" === t.method) {
                        if ("suspendedStart" === n) throw ((n = "completed"), t.arg);
                        t.dispatchException(t.arg);
                      } else "return" === t.method && t.abrupt("return", t.arg);
                      n = "executing";
                      var u = tryCatch(e, r, t);
                      if ("normal" === u.type) {
                        if (((n = t.done ? "completed" : "suspendedYield"), u.arg === c)) continue;
                        return { value: u.arg, done: t.done };
                      }
                      "throw" === u.type && ((n = "completed"), (t.method = "throw"), (t.arg = u.arg));
                    }
                  };
                })(e, t, a)),
                i
              );
            }
            function tryCatch(e, r, t) {
              try {
                return { type: "normal", arg: e.call(r, t) };
              } catch (e) {
                return { type: "throw", arg: e };
              }
            }
            e.wrap = wrap;
            var c = {};
            function Generator() {}
            function GeneratorFunction() {}
            function GeneratorFunctionPrototype() {}
            var _ = {};
            define(_, o, function () {
              return this;
            });
            var u = Object.getPrototypeOf,
              p = u && u(u(values([])));
            p && p !== r && t.call(p, o) && (_ = p);
            var l = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(_));
            function defineIteratorMethods(e) {
              ["next", "throw", "return"].forEach(function (r) {
                define(e, r, function (e) {
                  return this._invoke(r, e);
                });
              });
            }
            function AsyncIterator(e, r) {
              function invoke(n, o, i, a) {
                var c = tryCatch(e[n], e, o);
                if ("throw" !== c.type) {
                  var _ = c.arg,
                    u = _.value;
                  return u && "object" == _typeof(u) && t.call(u, "__await")
                    ? r.resolve(u.__await).then(
                        function (e) {
                          invoke("next", e, i, a);
                        },
                        function (e) {
                          invoke("throw", e, i, a);
                        }
                      )
                    : r.resolve(u).then(
                        function (e) {
                          (_.value = e), i(_);
                        },
                        function (e) {
                          return invoke("throw", e, i, a);
                        }
                      );
                }
                a(c.arg);
              }
              var n;
              this._invoke = function (e, t) {
                function callInvokeWithMethodAndArg() {
                  return new r(function (r, n) {
                    invoke(e, t, r, n);
                  });
                }
                return (n = n ? n.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg());
              };
            }
            function maybeInvokeDelegate(e, r) {
              var t = e.iterator[r.method];
              if (void 0 === t) {
                if (((r.delegate = null), "throw" === r.method)) {
                  if (e.iterator.return && ((r.method = "return"), (r.arg = void 0), maybeInvokeDelegate(e, r), "throw" === r.method)) return c;
                  (r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a 'throw' method"));
                }
                return c;
              }
              var n = tryCatch(t, e.iterator, r.arg);
              if ("throw" === n.type) return (r.method = "throw"), (r.arg = n.arg), (r.delegate = null), c;
              var o = n.arg;
              return o
                ? o.done
                  ? ((r[e.resultName] = o.value),
                    (r.next = e.nextLoc),
                    "return" !== r.method && ((r.method = "next"), (r.arg = void 0)),
                    (r.delegate = null),
                    c)
                  : o
                : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), c);
            }
            function pushTryEntry(e) {
              var r = { tryLoc: e[0] };
              1 in e && (r.catchLoc = e[1]), 2 in e && ((r.finallyLoc = e[2]), (r.afterLoc = e[3])), this.tryEntries.push(r);
            }
            function resetTryEntry(e) {
              var r = e.completion || {};
              (r.type = "normal"), delete r.arg, (e.completion = r);
            }
            function Context(e) {
              (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(pushTryEntry, this), this.reset(!0);
            }
            function values(e) {
              if (e) {
                var r = e[o];
                if (r) return r.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                  var n = -1,
                    i = function next() {
                      for (; ++n < e.length; ) if (t.call(e, n)) return (next.value = e[n]), (next.done = !1), next;
                      return (next.value = void 0), (next.done = !0), next;
                    };
                  return (i.next = i);
                }
              }
              return { next: doneResult };
            }
            function doneResult() {
              return { value: void 0, done: !0 };
            }
            return (
              (GeneratorFunction.prototype = GeneratorFunctionPrototype),
              define(l, "constructor", GeneratorFunctionPrototype),
              define(GeneratorFunctionPrototype, "constructor", GeneratorFunction),
              (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, a, "GeneratorFunction")),
              (e.isGeneratorFunction = function (e) {
                var r = "function" == typeof e && e.constructor;
                return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name));
              }),
              (e.mark = function (e) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, GeneratorFunctionPrototype)
                    : ((e.__proto__ = GeneratorFunctionPrototype), define(e, a, "GeneratorFunction")),
                  (e.prototype = Object.create(l)),
                  e
                );
              }),
              (e.awrap = function (e) {
                return { __await: e };
              }),
              defineIteratorMethods(AsyncIterator.prototype),
              define(AsyncIterator.prototype, i, function () {
                return this;
              }),
              (e.AsyncIterator = AsyncIterator),
              (e.async = function (r, t, n, o, i) {
                void 0 === i && (i = Promise);
                var a = new AsyncIterator(wrap(r, t, n, o), i);
                return e.isGeneratorFunction(t)
                  ? a
                  : a.next().then(function (e) {
                      return e.done ? e.value : a.next();
                    });
              }),
              defineIteratorMethods(l),
              define(l, a, "Generator"),
              define(l, o, function () {
                return this;
              }),
              define(l, "toString", function () {
                return "[object Generator]";
              }),
              (e.keys = function (e) {
                var r = [];
                for (var t in e) r.push(t);
                return (
                  r.reverse(),
                  function next() {
                    for (; r.length; ) {
                      var t = r.pop();
                      if (t in e) return (next.value = t), (next.done = !1), next;
                    }
                    return (next.done = !0), next;
                  }
                );
              }),
              (e.values = values),
              (Context.prototype = {
                constructor: Context,
                reset: function reset(e) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = void 0),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = void 0),
                    this.tryEntries.forEach(resetTryEntry),
                    !e)
                  )
                    for (var r in this) "t" === r.charAt(0) && t.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0);
                },
                stop: function stop() {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type) throw e.arg;
                  return this.rval;
                },
                dispatchException: function dispatchException(e) {
                  if (this.done) throw e;
                  var r = this;
                  function handle(t, n) {
                    return (i.type = "throw"), (i.arg = e), (r.next = t), n && ((r.method = "next"), (r.arg = void 0)), !!n;
                  }
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n],
                      i = o.completion;
                    if ("root" === o.tryLoc) return handle("end");
                    if (o.tryLoc <= this.prev) {
                      var a = t.call(o, "catchLoc"),
                        c = t.call(o, "finallyLoc");
                      if (a && c) {
                        if (this.prev < o.catchLoc) return handle(o.catchLoc, !0);
                        if (this.prev < o.finallyLoc) return handle(o.finallyLoc);
                      } else if (a) {
                        if (this.prev < o.catchLoc) return handle(o.catchLoc, !0);
                      } else {
                        if (!c) throw new Error("try statement without catch or finally");
                        if (this.prev < o.finallyLoc) return handle(o.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function abrupt(e, r) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && t.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                      var i = o;
                      break;
                    }
                  }
                  i && ("break" === e || "continue" === e) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
                  var a = i ? i.completion : {};
                  return (a.type = e), (a.arg = r), i ? ((this.method = "next"), (this.next = i.finallyLoc), c) : this.complete(a);
                },
                complete: function complete(e, r) {
                  if ("throw" === e.type) throw e.arg;
                  return (
                    "break" === e.type || "continue" === e.type
                      ? (this.next = e.arg)
                      : "return" === e.type
                      ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                      : "normal" === e.type && r && (this.next = r),
                    c
                  );
                },
                finish: function finish(e) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var t = this.tryEntries[r];
                    if (t.finallyLoc === e) return this.complete(t.completion, t.afterLoc), resetTryEntry(t), c;
                  }
                },
                catch: function _catch(e) {
                  for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var t = this.tryEntries[r];
                    if (t.tryLoc === e) {
                      var n = t.completion;
                      if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(t);
                      }
                      return o;
                    }
                  }
                  throw new Error("illegal catch attempt");
                },
                delegateYield: function delegateYield(e, r, t) {
                  return (this.delegate = { iterator: values(e), resultName: r, nextLoc: t }), "next" === this.method && (this.arg = void 0), c;
                },
              }),
              e
            );
          }
          function asyncGeneratorStep(e, r, t, n, o, i, a) {
            try {
              var c = e[i](a),
                _ = c.value;
            } catch (e) {
              return void t(e);
            }
            c.done ? r(_) : Promise.resolve(_).then(n, o);
          }
          function _asyncToGenerator(e) {
            return function () {
              var r = this,
                t = arguments;
              return new Promise(function (n, o) {
                var i = e.apply(r, t);
                function _next(e) {
                  asyncGeneratorStep(i, n, o, _next, _throw, "next", e);
                }
                function _throw(e) {
                  asyncGeneratorStep(i, n, o, _next, _throw, "throw", e);
                }
                _next(void 0);
              });
            };
          }
          var o = "@aptero/axolotis-module-properties/Properties",
            i = "@aptero/axolotis-module-storage/Store",
            a = "@aptero/axolotis-module-storage/CookieStore",
            c = "@aptero/axolotis-module-phx-auth/PhoenixAuthService",
            _ = "@aptero/axolotis-module-name/PhoenixAuthService",
            u = "@aptero/axolotis-module-room/RoomService";
          function propertyService() {
            return _propertyService.apply(this, arguments);
          }
          function _propertyService() {
            return (_propertyService = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt("return", (0, n.getService)(o));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, _callee);
              })
            )).apply(this, arguments);
          }
          function roomService() {
            return _roomService.apply(this, arguments);
          }
          function _roomService() {
            return (_roomService = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee2() {
                return _regeneratorRuntime().wrap(function _callee2$(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt("return", (0, n.getService)(u));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, _callee2);
              })
            )).apply(this, arguments);
          }
          function roomServiceSync() {
            return (0, n.getServiceSync)(u);
          }
          function nameGenerationService() {
            return _nameGenerationService.apply(this, arguments);
          }
          function _nameGenerationService() {
            return (_nameGenerationService = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee3() {
                return _regeneratorRuntime().wrap(function _callee3$(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt("return", (0, n.getService)(_));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, _callee3);
              })
            )).apply(this, arguments);
          }
          function phoenixAuth() {
            return _phoenixAuth.apply(this, arguments);
          }
          function _phoenixAuth() {
            return (_phoenixAuth = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee4() {
                return _regeneratorRuntime().wrap(function _callee4$(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt("return", (0, n.getService)(c));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, _callee4);
              })
            )).apply(this, arguments);
          }
          function cookiesStore() {
            return _cookiesStore.apply(this, arguments);
          }
          function _cookiesStore() {
            return (_cookiesStore = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee5() {
                return _regeneratorRuntime().wrap(function _callee5$(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt("return", (0, n.getService)(a));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, _callee5);
              })
            )).apply(this, arguments);
          }
          function store() {
            return _store.apply(this, arguments);
          }
          function _store() {
            return (_store = _asyncToGenerator(
              _regeneratorRuntime().mark(function _callee6() {
                return _regeneratorRuntime().wrap(function _callee6$(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt("return", (0, n.getService)(i));
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, _callee6);
              })
            )).apply(this, arguments);
          }
        },
        12: (r) => {
          r.exports = e;
        },
      },
      i = {};
    function __webpack_require__(e) {
      var r = i[e];
      if (void 0 !== r) return r.exports;
      var t = (i[e] = { id: e, loaded: !1, exports: {} });
      return o[e].call(t.exports, t, t.exports, __webpack_require__), (t.loaded = !0), t.exports;
    }
    (__webpack_require__.m = o),
      (r = []),
      (__webpack_require__.O = (e, t, n, o) => {
        if (!t) {
          var i = 1 / 0;
          for (u = 0; u < r.length; u++) {
            for (var [t, n, o] = r[u], a = !0, c = 0; c < t.length; c++)
              (!1 & o || i >= o) && Object.keys(__webpack_require__.O).every((e) => __webpack_require__.O[e](t[c]))
                ? t.splice(c--, 1)
                : ((a = !1), o < i && (i = o));
            if (a) {
              r.splice(u--, 1);
              var _ = n();
              void 0 !== _ && (e = _);
            }
          }
          return e;
        }
        o = o || 0;
        for (var u = r.length; u > 0 && r[u - 1][2] > o; u--) r[u] = r[u - 1];
        r[u] = [t, n, o];
      }),
      (__webpack_require__.F = {}),
      (__webpack_require__.E = (e) => {
        Object.keys(__webpack_require__.F).map((r) => {
          __webpack_require__.F[r](e);
        });
      }),
      (__webpack_require__.n = (e) => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return __webpack_require__.d(r, { a: r }), r;
      }),
      (__webpack_require__.d = (e, r) => {
        for (var t in r) __webpack_require__.o(r, t) && !__webpack_require__.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
      }),
      (__webpack_require__.f = {}),
      (__webpack_require__.e = (e) => Promise.all(Object.keys(__webpack_require__.f).reduce((r, t) => (__webpack_require__.f[t](e, r), r), []))),
      (__webpack_require__.u = (e) =>
        "library/" +
        {
          184: "axios",
          360: "phoenix",
          431: "@aptero/axolotis-module-phoenix/PhoenixAuthService",
          557: "jsonschema",
          637: "@aptero/axolotis-module-storage/Store",
          661: "url",
          679: "event-target-shim",
          754: "@aptero/axolotis-module-basic",
        }[e] +
        "." +
        {
          184: "53d6ad0263a0a3509124",
          360: "67163cac525c299935c5",
          431: "60c93d9154e89cc8ad2c",
          557: "780f037a457e3b4aa643",
          637: "7ee50787d1d67ff5d691",
          661: "fcbbfee8043eeb58c6b6",
          679: "b5203e673c5dab2ce52c",
          754: "2576fc177674c285f419",
        }[e] +
        ".js"),
      (__webpack_require__.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (__webpack_require__.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
      (t = {}),
      (n = "axolotis-module-basic:"),
      (__webpack_require__.l = (e, r, o, i) => {
        if (t[e]) t[e].push(r);
        else {
          var a, c;
          if (void 0 !== o)
            for (var _ = document.getElementsByTagName("script"), u = 0; u < _.length; u++) {
              var p = _[u];
              if (p.getAttribute("src") == e || p.getAttribute("data-webpack") == n + o) {
                a = p;
                break;
              }
            }
          a ||
            ((c = !0),
            ((a = document.createElement("script")).charset = "utf-8"),
            (a.timeout = 120),
            __webpack_require__.nc && a.setAttribute("nonce", __webpack_require__.nc),
            a.setAttribute("data-webpack", n + o),
            (a.src = e)),
            (t[e] = [r]);
          var onScriptComplete = (r, n) => {
              (a.onerror = a.onload = null), clearTimeout(l);
              var o = t[e];
              if ((delete t[e], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e) => e(n)), r)) return r(n);
            },
            l = setTimeout(onScriptComplete.bind(null, void 0, { type: "timeout", target: a }), 12e4);
          (a.onerror = onScriptComplete.bind(null, a.onerror)), (a.onload = onScriptComplete.bind(null, a.onload)), c && document.head.appendChild(a);
        }
      }),
      (__webpack_require__.r = (e) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (__webpack_require__.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
      (() => {
        var e;
        __webpack_require__.g.importScripts && (e = __webpack_require__.g.location + "");
        var r = __webpack_require__.g.document;
        if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
          var t = r.getElementsByTagName("script");
          t.length && (e = t[t.length - 1].src);
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        (e = e
          .replace(/#.*$/, "")
          .replace(/\?.*$/, "")
          .replace(/\/[^\/]+$/, "/")),
          (__webpack_require__.p = e);
      })(),
      (() => {
        var e = { 826: 0 };
        (__webpack_require__.f.j = (r, t) => {
          var n = __webpack_require__.o(e, r) ? e[r] : void 0;
          if (0 !== n)
            if (n) t.push(n[2]);
            else {
              var o = new Promise((t, o) => (n = e[r] = [t, o]));
              t.push((n[2] = o));
              var i = __webpack_require__.p + __webpack_require__.u(r),
                a = new Error();
              __webpack_require__.l(
                i,
                (t) => {
                  if (__webpack_require__.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                    var o = t && ("load" === t.type ? "missing" : t.type),
                      i = t && t.target && t.target.src;
                    (a.message = "Loading chunk " + r + " failed.\n(" + o + ": " + i + ")"),
                      (a.name = "ChunkLoadError"),
                      (a.type = o),
                      (a.request = i),
                      n[1](a);
                  }
                },
                "chunk-" + r,
                r
              );
            }
        }),
          (__webpack_require__.F.j = (r) => {
            if (!__webpack_require__.o(e, r) || void 0 === e[r]) {
              e[r] = null;
              var t = document.createElement("link");
              __webpack_require__.nc && t.setAttribute("nonce", __webpack_require__.nc),
                (t.rel = "prefetch"),
                (t.as = "script"),
                (t.href = __webpack_require__.p + __webpack_require__.u(r)),
                document.head.appendChild(t);
            }
          }),
          (__webpack_require__.O.j = (r) => 0 === e[r]);
        var webpackJsonpCallback = (r, t) => {
            var n,
              o,
              [i, a, c] = t,
              _ = 0;
            if (i.some((r) => 0 !== e[r])) {
              for (n in a) __webpack_require__.o(a, n) && (__webpack_require__.m[n] = a[n]);
              if (c) var u = c(__webpack_require__);
            }
            for (r && r(t); _ < i.length; _++) (o = i[_]), __webpack_require__.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
            return __webpack_require__.O(u);
          },
          r = (self.webpackChunkaxolotis_module_basic = self.webpackChunkaxolotis_module_basic || []);
        r.forEach(webpackJsonpCallback.bind(null, 0)), (r.push = webpackJsonpCallback.bind(null, r.push.bind(r)));
      })(),
      __webpack_require__.O(
        0,
        [826],
        () => {
          [754, 557, 661, 679, 637, 360, 431, 184].map(__webpack_require__.E);
        },
        5
      );
    var a = {};
    return (
      (() => {
        __webpack_require__.r(a),
          __webpack_require__.d(a, {
            COOKIE_STORE_SERVICE: () => r.we,
            NAME_SERVICE: () => r.eW,
            PHX_AUTH_SERVICE: () => r.Q,
            PROPERTIES_SERVICE: () => r.$b,
            ROOM_SERVICE: () => r.eM,
            STORE_SERVICE: () => r.qh,
            cookiesStore: () => r.kO,
            nameGenerationService: () => r.CQ,
            phoenixAuth: () => r.yE,
            propertyService: () => r.h$,
            register: () => n,
            roomService: () => r.Gf,
            roomServiceSync: () => r.YE,
            store: () => r.h,
          });
        var e = __webpack_require__(12),
          r = __webpack_require__(9152);
        function _defineProperties(e, r) {
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }
        var t = (function () {
            function AxItem() {
              !(function _classCallCheck(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
              })(this, AxItem),
                console.log("@aptero/axolotis-module-basic installed");
            }
            return (
              (function _createClass(e, r, t) {
                return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
              })(AxItem, [
                {
                  key: "modules",
                  value: function modules() {
                    var e = {};
                    return (
                      (e[r.$b] = function () {
                        return __webpack_require__.e(754).then(__webpack_require__.bind(__webpack_require__, 3225));
                      }),
                      (e[r.qh] = function () {
                        return Promise.all([
                          __webpack_require__.e(754),
                          __webpack_require__.e(557),
                          __webpack_require__.e(661),
                          __webpack_require__.e(679),
                          __webpack_require__.e(637),
                        ]).then(__webpack_require__.bind(__webpack_require__, 5819));
                      }),
                      (e[r.Q] = function () {
                        return Promise.all([__webpack_require__.e(754), __webpack_require__.e(360), __webpack_require__.e(431)]).then(
                          __webpack_require__.bind(__webpack_require__, 8702)
                        );
                      }),
                      (e[r.eW] = function () {
                        return __webpack_require__.e(754).then(__webpack_require__.bind(__webpack_require__, 9993));
                      }),
                      (e[r.we] = function () {
                        return __webpack_require__.e(754).then(__webpack_require__.bind(__webpack_require__, 2064));
                      }),
                      (e[r.eM] = function () {
                        return Promise.all([__webpack_require__.e(754), __webpack_require__.e(360), __webpack_require__.e(184)]).then(
                          __webpack_require__.bind(__webpack_require__, 6325)
                        );
                      }),
                      e
                    );
                  },
                },
              ]),
              AxItem
            );
          })(),
          n = function register() {
            var r = (0, e.getGlobalStorageValue)(e.GLOBAL_WORLDS_ENTITY, !1);
            if (!(r && r.length > 0)) throw new Error("Axolotis World Needs to be initialized");
            (0, e.registerItem)(new t());
          };
      })(),
      (a = __webpack_require__.O(a))
    );
  })()
);
//# sourceMappingURL=index.js.map
