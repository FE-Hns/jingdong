(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["home~shop"],
  {
    "057f": function (t, r, e) {
      var n = e("fc6a"),
        o = e("241c").f,
        i = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        c = function (t) {
          try {
            return o(t);
          } catch (r) {
            return a.slice();
          }
        };
      t.exports.f = function (t) {
        return a && "[object Window]" == i.call(t) ? c(t) : o(n(t));
      };
    },
    "1da1": function (t, r, e) {
      "use strict";
      e.d(r, "a", function () {
        return o;
      });
      e("d3b7");
      function n(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (s) {
          return void e(s);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      function o(t) {
        return function () {
          var r = this,
            e = arguments;
          return new Promise(function (o, i) {
            var a = t.apply(r, e);
            function c(t) {
              n(a, o, i, c, u, "next", t);
            }
            function u(t) {
              n(a, o, i, c, u, "throw", t);
            }
            c(void 0);
          });
        };
      }
    },
    2583: function (t, r, e) {
      "use strict";
      e("b0c0"), e("a4d3"), e("e01a");
      var n = e("7a23"),
        o = Object(n["K"])("data-v-a27a3a6a");
      Object(n["v"])("data-v-a27a3a6a");
      var i = { class: "shop" },
        a = { class: "shop__item" },
        c = { class: "shop__item__img" },
        u = { class: "shop__item__desc__title" },
        s = { class: "shop__item__desc__detail" },
        f = { class: "shop__item__desc__discount" };
      Object(n["t"])();
      var l = o(function (t, r, e, o, l, h) {
          return (
            Object(n["s"])(),
            Object(n["e"])("div", i, [
              Object(n["i"])("div", a, [
                Object(n["i"])("div", c, [Object(n["i"])("img", { src: t.data.imgUrl, alt: "" }, null, 8, ["src"])]),
                Object(n["i"])(
                  "div",
                  { class: ["shop__item__desc", { "shop__item__desc--border": t.hasBorder }] },
                  [
                    Object(n["i"])("p", u, Object(n["C"])(t.data.name), 1),
                    Object(n["i"])("p", s, [
                      Object(n["i"])("span", null, "月售 " + Object(n["C"])(t.data.sales), 1),
                      Object(n["i"])("span", null, "起送￥" + Object(n["C"])(t.data.expressExpensive), 1),
                      Object(n["i"])("span", null, "基础运费￥" + Object(n["C"])(t.data.basicExpensive), 1),
                    ]),
                    Object(n["i"])("p", f, Object(n["C"])(t.data.description), 1),
                  ],
                  2
                ),
              ]),
            ])
          );
        }),
        h = Object(n["j"])({ name: "ShopItem", props: ["data", "hasBorder"] });
      e("fd35");
      (h.render = l), (h.__scopeId = "data-v-a27a3a6a");
      r["a"] = h;
    },
    "65f0": function (t, r, e) {
      var n = e("861d"),
        o = e("e8b5"),
        i = e("b622"),
        a = i("species");
      t.exports = function (t, r) {
        var e;
        return (
          o(t) &&
            ((e = t.constructor),
            "function" != typeof e || (e !== Array && !o(e.prototype))
              ? n(e) && ((e = e[a]), null === e && (e = void 0))
              : (e = void 0)),
          new (void 0 === e ? Array : e)(0 === r ? 0 : r)
        );
      };
    },
    "746f": function (t, r, e) {
      var n = e("428f"),
        o = e("5135"),
        i = e("e538"),
        a = e("9bf2").f;
      t.exports = function (t) {
        var r = n.Symbol || (n.Symbol = {});
        o(r, t) || a(r, t, { value: i.f(t) });
      };
    },
    "96cf": function (t, r, e) {
      var n = (function (t) {
        "use strict";
        var r,
          e = Object.prototype,
          n = e.hasOwnProperty,
          o = "function" === typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag";
        function u(t, r, e) {
          return Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }), t[r];
        }
        try {
          u({}, "");
        } catch (G) {
          u = function (t, r, e) {
            return (t[r] = e);
          };
        }
        function s(t, r, e, n) {
          var o = r && r.prototype instanceof y ? r : y,
            i = Object.create(o.prototype),
            a = new N(n || []);
          return (i._invoke = S(t, e, a)), i;
        }
        function f(t, r, e) {
          try {
            return { type: "normal", arg: t.call(r, e) };
          } catch (G) {
            return { type: "throw", arg: G };
          }
        }
        t.wrap = s;
        var l = "suspendedStart",
          h = "suspendedYield",
          p = "executing",
          d = "completed",
          v = {};
        function y() {}
        function b() {}
        function g() {}
        var m = {};
        m[i] = function () {
          return this;
        };
        var w = Object.getPrototypeOf,
          O = w && w(w(k([])));
        O && O !== e && n.call(O, i) && (m = O);
        var _ = (g.prototype = y.prototype = Object.create(m));
        function j(t) {
          ["next", "throw", "return"].forEach(function (r) {
            u(t, r, function (t) {
              return this._invoke(r, t);
            });
          });
        }
        function x(t, r) {
          function e(o, i, a, c) {
            var u = f(t[o], t, i);
            if ("throw" !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && "object" === typeof l && n.call(l, "__await")
                ? r.resolve(l.__await).then(
                    function (t) {
                      e("next", t, a, c);
                    },
                    function (t) {
                      e("throw", t, a, c);
                    }
                  )
                : r.resolve(l).then(
                    function (t) {
                      (s.value = t), a(s);
                    },
                    function (t) {
                      return e("throw", t, a, c);
                    }
                  );
            }
            c(u.arg);
          }
          var o;
          function i(t, n) {
            function i() {
              return new r(function (r, o) {
                e(t, n, r, o);
              });
            }
            return (o = o ? o.then(i, i) : i());
          }
          this._invoke = i;
        }
        function S(t, r, e) {
          var n = l;
          return function (o, i) {
            if (n === p) throw new Error("Generator is already running");
            if (n === d) {
              if ("throw" === o) throw i;
              return F();
            }
            (e.method = o), (e.arg = i);
            while (1) {
              var a = e.delegate;
              if (a) {
                var c = E(a, e);
                if (c) {
                  if (c === v) continue;
                  return c;
                }
              }
              if ("next" === e.method) e.sent = e._sent = e.arg;
              else if ("throw" === e.method) {
                if (n === l) throw ((n = d), e.arg);
                e.dispatchException(e.arg);
              } else "return" === e.method && e.abrupt("return", e.arg);
              n = p;
              var u = f(t, r, e);
              if ("normal" === u.type) {
                if (((n = e.done ? d : h), u.arg === v)) continue;
                return { value: u.arg, done: e.done };
              }
              "throw" === u.type && ((n = d), (e.method = "throw"), (e.arg = u.arg));
            }
          };
        }
        function E(t, e) {
          var n = t.iterator[e.method];
          if (n === r) {
            if (((e.delegate = null), "throw" === e.method)) {
              if (t.iterator["return"] && ((e.method = "return"), (e.arg = r), E(t, e), "throw" === e.method)) return v;
              (e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return v;
          }
          var o = f(n, t.iterator, e.arg);
          if ("throw" === o.type) return (e.method = "throw"), (e.arg = o.arg), (e.delegate = null), v;
          var i = o.arg;
          return i
            ? i.done
              ? ((e[t.resultName] = i.value),
                (e.next = t.nextLoc),
                "return" !== e.method && ((e.method = "next"), (e.arg = r)),
                (e.delegate = null),
                v)
              : i
            : ((e.method = "throw"),
              (e.arg = new TypeError("iterator result is not an object")),
              (e.delegate = null),
              v);
        }
        function L(t) {
          var r = { tryLoc: t[0] };
          1 in t && (r.catchLoc = t[1]),
            2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
            this.tryEntries.push(r);
        }
        function P(t) {
          var r = t.completion || {};
          (r.type = "normal"), delete r.arg, (t.completion = r);
        }
        function N(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(L, this), this.reset(!0);
        }
        function k(t) {
          if (t) {
            var e = t[i];
            if (e) return e.call(t);
            if ("function" === typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                a = function e() {
                  while (++o < t.length) if (n.call(t, o)) return (e.value = t[o]), (e.done = !1), e;
                  return (e.value = r), (e.done = !0), e;
                };
              return (a.next = a);
            }
          }
          return { next: F };
        }
        function F() {
          return { value: r, done: !0 };
        }
        return (
          (b.prototype = _.constructor = g),
          (g.constructor = b),
          (b.displayName = u(g, c, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var r = "function" === typeof t && t.constructor;
            return !!r && (r === b || "GeneratorFunction" === (r.displayName || r.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), u(t, c, "GeneratorFunction")),
              (t.prototype = Object.create(_)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          j(x.prototype),
          (x.prototype[a] = function () {
            return this;
          }),
          (t.AsyncIterator = x),
          (t.async = function (r, e, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new x(s(r, e, n, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          j(_),
          u(_, c, "Generator"),
          (_[i] = function () {
            return this;
          }),
          (_.toString = function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var r = [];
            for (var e in t) r.push(e);
            return (
              r.reverse(),
              function e() {
                while (r.length) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = k),
          (N.prototype = {
            constructor: N,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = r),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = r),
                this.tryEntries.forEach(P),
                !t)
              )
                for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0],
                r = t.completion;
              if ("throw" === r.type) throw r.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var e = this;
              function o(n, o) {
                return (c.type = "throw"), (c.arg = t), (e.next = n), o && ((e.method = "next"), (e.arg = r)), !!o;
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var u = n.call(a, "catchLoc"),
                    s = n.call(a, "finallyLoc");
                  if (u && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!s) throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, r) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === t || "continue" === t) && i.tryLoc <= r && r <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = r),
                i ? ((this.method = "next"), (this.next = i.finallyLoc), v) : this.complete(a)
              );
            },
            complete: function (t, r) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && r && (this.next = r),
                v
              );
            },
            finish: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), P(e), v;
              }
            },
            catch: function (t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var e = this.tryEntries[r];
                if (e.tryLoc === t) {
                  var n = e.completion;
                  if ("throw" === n.type) {
                    var o = n.arg;
                    P(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, e, n) {
              return (
                (this.delegate = { iterator: k(t), resultName: e, nextLoc: n }),
                "next" === this.method && (this.arg = r),
                v
              );
            },
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = n;
      } catch (o) {
        Function("r", "regeneratorRuntime = r")(n);
      }
    },
    a4d3: function (t, r, e) {
      "use strict";
      var n = e("23e7"),
        o = e("da84"),
        i = e("d066"),
        a = e("c430"),
        c = e("83ab"),
        u = e("4930"),
        s = e("fdbf"),
        f = e("d039"),
        l = e("5135"),
        h = e("e8b5"),
        p = e("861d"),
        d = e("825a"),
        v = e("7b0b"),
        y = e("fc6a"),
        b = e("c04e"),
        g = e("5c6c"),
        m = e("7c73"),
        w = e("df75"),
        O = e("241c"),
        _ = e("057f"),
        j = e("7418"),
        x = e("06cf"),
        S = e("9bf2"),
        E = e("d1e7"),
        L = e("9112"),
        P = e("6eeb"),
        N = e("5692"),
        k = e("f772"),
        F = e("d012"),
        G = e("90e3"),
        A = e("b622"),
        I = e("e538"),
        T = e("746f"),
        C = e("d44e"),
        J = e("69f3"),
        B = e("b727").forEach,
        R = k("hidden"),
        Y = "Symbol",
        $ = "prototype",
        D = A("toPrimitive"),
        K = J.set,
        Q = J.getterFor(Y),
        U = Object[$],
        W = o.Symbol,
        q = i("JSON", "stringify"),
        z = x.f,
        H = S.f,
        M = _.f,
        V = E.f,
        X = N("symbols"),
        Z = N("op-symbols"),
        tt = N("string-to-symbol-registry"),
        rt = N("symbol-to-string-registry"),
        et = N("wks"),
        nt = o.QObject,
        ot = !nt || !nt[$] || !nt[$].findChild,
        it =
          c &&
          f(function () {
            return (
              7 !=
              m(
                H({}, "a", {
                  get: function () {
                    return H(this, "a", { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function (t, r, e) {
                var n = z(U, r);
                n && delete U[r], H(t, r, e), n && t !== U && H(U, r, n);
              }
            : H,
        at = function (t, r) {
          var e = (X[t] = m(W[$]));
          return K(e, { type: Y, tag: t, description: r }), c || (e.description = r), e;
        },
        ct = s
          ? function (t) {
              return "symbol" == typeof t;
            }
          : function (t) {
              return Object(t) instanceof W;
            },
        ut = function (t, r, e) {
          t === U && ut(Z, r, e), d(t);
          var n = b(r, !0);
          return (
            d(e),
            l(X, n)
              ? (e.enumerable
                  ? (l(t, R) && t[R][n] && (t[R][n] = !1), (e = m(e, { enumerable: g(0, !1) })))
                  : (l(t, R) || H(t, R, g(1, {})), (t[R][n] = !0)),
                it(t, n, e))
              : H(t, n, e)
          );
        },
        st = function (t, r) {
          d(t);
          var e = y(r),
            n = w(e).concat(dt(e));
          return (
            B(n, function (r) {
              (c && !lt.call(e, r)) || ut(t, r, e[r]);
            }),
            t
          );
        },
        ft = function (t, r) {
          return void 0 === r ? m(t) : st(m(t), r);
        },
        lt = function (t) {
          var r = b(t, !0),
            e = V.call(this, r);
          return (
            !(this === U && l(X, r) && !l(Z, r)) && (!(e || !l(this, r) || !l(X, r) || (l(this, R) && this[R][r])) || e)
          );
        },
        ht = function (t, r) {
          var e = y(t),
            n = b(r, !0);
          if (e !== U || !l(X, n) || l(Z, n)) {
            var o = z(e, n);
            return !o || !l(X, n) || (l(e, R) && e[R][n]) || (o.enumerable = !0), o;
          }
        },
        pt = function (t) {
          var r = M(y(t)),
            e = [];
          return (
            B(r, function (t) {
              l(X, t) || l(F, t) || e.push(t);
            }),
            e
          );
        },
        dt = function (t) {
          var r = t === U,
            e = M(r ? Z : y(t)),
            n = [];
          return (
            B(e, function (t) {
              !l(X, t) || (r && !l(U, t)) || n.push(X[t]);
            }),
            n
          );
        };
      if (
        (u ||
          ((W = function () {
            if (this instanceof W) throw TypeError("Symbol is not a constructor");
            var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
              r = G(t),
              e = function (t) {
                this === U && e.call(Z, t), l(this, R) && l(this[R], r) && (this[R][r] = !1), it(this, r, g(1, t));
              };
            return c && ot && it(U, r, { configurable: !0, set: e }), at(r, t);
          }),
          P(W[$], "toString", function () {
            return Q(this).tag;
          }),
          P(W, "withoutSetter", function (t) {
            return at(G(t), t);
          }),
          (E.f = lt),
          (S.f = ut),
          (x.f = ht),
          (O.f = _.f = pt),
          (j.f = dt),
          (I.f = function (t) {
            return at(A(t), t);
          }),
          c &&
            (H(W[$], "description", {
              configurable: !0,
              get: function () {
                return Q(this).description;
              },
            }),
            a || P(U, "propertyIsEnumerable", lt, { unsafe: !0 }))),
        n({ global: !0, wrap: !0, forced: !u, sham: !u }, { Symbol: W }),
        B(w(et), function (t) {
          T(t);
        }),
        n(
          { target: Y, stat: !0, forced: !u },
          {
            for: function (t) {
              var r = String(t);
              if (l(tt, r)) return tt[r];
              var e = W(r);
              return (tt[r] = e), (rt[e] = r), e;
            },
            keyFor: function (t) {
              if (!ct(t)) throw TypeError(t + " is not a symbol");
              if (l(rt, t)) return rt[t];
            },
            useSetter: function () {
              ot = !0;
            },
            useSimple: function () {
              ot = !1;
            },
          }
        ),
        n(
          { target: "Object", stat: !0, forced: !u, sham: !c },
          { create: ft, defineProperty: ut, defineProperties: st, getOwnPropertyDescriptor: ht }
        ),
        n({ target: "Object", stat: !0, forced: !u }, { getOwnPropertyNames: pt, getOwnPropertySymbols: dt }),
        n(
          {
            target: "Object",
            stat: !0,
            forced: f(function () {
              j.f(1);
            }),
          },
          {
            getOwnPropertySymbols: function (t) {
              return j.f(v(t));
            },
          }
        ),
        q)
      ) {
        var vt =
          !u ||
          f(function () {
            var t = W();
            return "[null]" != q([t]) || "{}" != q({ a: t }) || "{}" != q(Object(t));
          });
        n(
          { target: "JSON", stat: !0, forced: vt },
          {
            stringify: function (t, r, e) {
              var n,
                o = [t],
                i = 1;
              while (arguments.length > i) o.push(arguments[i++]);
              if (((n = r), (p(r) || void 0 !== t) && !ct(t)))
                return (
                  h(r) ||
                    (r = function (t, r) {
                      if (("function" == typeof n && (r = n.call(this, t, r)), !ct(r))) return r;
                    }),
                  (o[1] = r),
                  q.apply(null, o)
                );
            },
          }
        );
      }
      W[$][D] || L(W[$], D, W[$].valueOf), C(W, Y), (F[R] = !0);
    },
    b727: function (t, r, e) {
      var n = e("0366"),
        o = e("44ad"),
        i = e("7b0b"),
        a = e("50c4"),
        c = e("65f0"),
        u = [].push,
        s = function (t) {
          var r = 1 == t,
            e = 2 == t,
            s = 3 == t,
            f = 4 == t,
            l = 6 == t,
            h = 7 == t,
            p = 5 == t || l;
          return function (d, v, y, b) {
            for (
              var g,
                m,
                w = i(d),
                O = o(w),
                _ = n(v, y, 3),
                j = a(O.length),
                x = 0,
                S = b || c,
                E = r ? S(d, j) : e || h ? S(d, 0) : void 0;
              j > x;
              x++
            )
              if ((p || x in O) && ((g = O[x]), (m = _(g, x, w)), t))
                if (r) E[x] = m;
                else if (m)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return g;
                    case 6:
                      return x;
                    case 2:
                      u.call(E, g);
                  }
                else
                  switch (t) {
                    case 4:
                      return !1;
                    case 7:
                      u.call(E, g);
                  }
            return l ? -1 : s || f ? f : E;
          };
        };
      t.exports = {
        forEach: s(0),
        map: s(1),
        filter: s(2),
        some: s(3),
        every: s(4),
        find: s(5),
        findIndex: s(6),
        filterOut: s(7),
      };
    },
    d745: function (t, r, e) {},
    e01a: function (t, r, e) {
      "use strict";
      var n = e("23e7"),
        o = e("83ab"),
        i = e("da84"),
        a = e("5135"),
        c = e("861d"),
        u = e("9bf2").f,
        s = e("e893"),
        f = i.Symbol;
      if (o && "function" == typeof f && (!("description" in f.prototype) || void 0 !== f().description)) {
        var l = {},
          h = function () {
            var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
              r = this instanceof h ? new f(t) : void 0 === t ? f() : f(t);
            return "" === t && (l[r] = !0), r;
          };
        s(h, f);
        var p = (h.prototype = f.prototype);
        p.constructor = h;
        var d = p.toString,
          v = "Symbol(test)" == String(f("test")),
          y = /^Symbol\((.*)\)[^)]+$/;
        u(p, "description", {
          configurable: !0,
          get: function () {
            var t = c(this) ? this.valueOf() : this,
              r = d.call(t);
            if (a(l, t)) return "";
            var e = v ? r.slice(7, -1) : r.replace(y, "$1");
            return "" === e ? void 0 : e;
          },
        }),
          n({ global: !0, forced: !0 }, { Symbol: h });
      }
    },
    e538: function (t, r, e) {
      var n = e("b622");
      r.f = n;
    },
    e8b5: function (t, r, e) {
      var n = e("c6b6");
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" == n(t);
        };
    },
    fd35: function (t, r, e) {
      "use strict";
      e("d745");
    },
  },
]);
//# sourceMappingURL=home~shop.683b1bf3.js.map
