/* Start:"a:4:{s:4:"full";s:62:"/bitrix/templates/delko/js/jquery-3.5.1.min.js?160285219589476";s:6:"source";s:46:"/bitrix/templates/delko/js/jquery-3.5.1.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.5.1",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function () {
      return s.call(this);
    },
    get: function (e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = S.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function (e) {
      return S.each(this, e);
    },
    map: function (n) {
      return this.pushStack(
        S.map(this, function (e, t) {
          return n.call(e, t, e);
        })
      );
    },
    slice: function () {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(
        S.grep(this, function (e, t) {
          return (t + 1) % 2;
        })
      );
    },
    odd: function () {
      return this.pushStack(
        S.grep(this, function (e, t) {
          return t % 2;
        })
      );
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice,
  }),
    (S.extend = S.fn.extend = function () {
      var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;
      for (
        "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
          "object" == typeof a || m(a) || (a = {}),
          s === u && ((a = this), s--);
        s < u;
        s++
      )
        if (null != (e = arguments[s]))
          for (t in e)
            (r = e[t]),
              "__proto__" !== t &&
                a !== r &&
                (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                  ? ((n = a[t]),
                    (o =
                      i && !Array.isArray(n)
                        ? []
                        : i || S.isPlainObject(n)
                        ? n
                        : {}),
                    (i = !1),
                    (a[t] = S.extend(l, o, r)))
                  : void 0 !== r && (a[t] = r));
      return a;
    }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML = function (e) {
      var t = e.namespaceURI,
        n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || (n && n.nodeName) || "HTML");
    }),
    (T = se.setDocument = function (e) {
      var t,
        n,
        r = e ? e.ownerDocument || e : p;
      return (
        r != C &&
          9 === r.nodeType &&
          r.documentElement &&
          ((a = (C = r).documentElement),
          (E = !i(C)),
          p != C &&
            (n = C.defaultView) &&
            n.top !== n &&
            (n.addEventListener
              ? n.addEventListener("unload", oe, !1)
              : n.attachEvent && n.attachEvent("onunload", oe)),
          (d.scope = ce(function (e) {
            return (
              a.appendChild(e).appendChild(C.createElement("div")),
              "undefined" != typeof e.querySelectorAll &&
                !e.querySelectorAll(":scope fieldset div").length
            );
          })),
          (d.attributes = ce(function (e) {
            return (e.className = "i"), !e.getAttribute("className");
          })),
          (d.getElementsByTagName = ce(function (e) {
            return (
              e.appendChild(C.createComment("")),
              !e.getElementsByTagName("*").length
            );
          })),
          (d.getElementsByClassName = K.test(C.getElementsByClassName)),
          (d.getById = ce(function (e) {
            return (
              (a.appendChild(e).id = S),
              !C.getElementsByName || !C.getElementsByName(S).length
            );
          })),
          d.getById
            ? ((b.filter.ID = function (e) {
                var t = e.replace(te, ne);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((b.filter.ID = function (e) {
                var n = e.replace(te, ne);
                return function (e) {
                  var t =
                    "undefined" != typeof e.getAttributeNode &&
                    e.getAttributeNode("id");
                  return t && t.value === n;
                };
              }),
              (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e)
                      return [o];
                    (i = t.getElementsByName(e)), (r = 0);
                    while ((o = i[r++]))
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                  }
                  return [];
                }
              })),
          (b.find.TAG = d.getElementsByTagName
            ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : d.qsa
                  ? t.querySelectorAll(e)
                  : void 0;
              }
            : function (e, t) {
                var n,
                  r = [],
                  i = 0,
                  o = t.getElementsByTagName(e);
                if ("*" === e) {
                  while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                  return r;
                }
                return o;
              }),
          (b.find.CLASS =
            d.getElementsByClassName &&
            function (e, t) {
              if ("undefined" != typeof t.getElementsByClassName && E)
                return t.getElementsByClassName(e);
            }),
          (s = []),
          (v = []),
          (d.qsa = K.test(C.querySelectorAll)) &&
            (ce(function (e) {
              var t;
              (a.appendChild(e).innerHTML =
                "<a id='" +
                S +
                "'></a><select id='" +
                S +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                e.querySelectorAll("[msallowcapture^='']").length &&
                  v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length ||
                  v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length ||
                  v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length ||
                  v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]");
            }),
            ce(function (e) {
              e.innerHTML =
                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = C.createElement("input");
              t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length &&
                  v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length &&
                  v.push(":enabled", ":disabled"),
                (a.appendChild(e).disabled = !0),
                2 !== e.querySelectorAll(":disabled").length &&
                  v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:");
            })),
          (d.matchesSelector = K.test(
            (c =
              a.matches ||
              a.webkitMatchesSelector ||
              a.mozMatchesSelector ||
              a.oMatchesSelector ||
              a.msMatchesSelector)
          )) &&
            ce(function (e) {
              (d.disconnectedMatch = c.call(e, "*")),
                c.call(e, "[s!='']:x"),
                s.push("!=", F);
            }),
          (v = v.length && new RegExp(v.join("|"))),
          (s = s.length && new RegExp(s.join("|"))),
          (t = K.test(a.compareDocumentPosition)),
          (y =
            t || K.test(a.contains)
              ? function (e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                  return (
                    e === r ||
                    !(
                      !r ||
                      1 !== r.nodeType ||
                      !(n.contains
                        ? n.contains(r)
                        : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(r))
                    )
                  );
                }
              : function (e, t) {
                  if (t) while ((t = t.parentNode)) if (t === e) return !0;
                  return !1;
                }),
          (D = t
            ? function (e, t) {
                if (e === t) return (l = !0), 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  n ||
                  (1 &
                    (n =
                      (e.ownerDocument || e) == (t.ownerDocument || t)
                        ? e.compareDocumentPosition(t)
                        : 1) ||
                  (!d.sortDetached && t.compareDocumentPosition(e) === n)
                    ? e == C || (e.ownerDocument == p && y(p, e))
                      ? -1
                      : t == C || (t.ownerDocument == p && y(p, t))
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0
                    : 4 & n
                    ? -1
                    : 1)
                );
              }
            : function (e, t) {
                if (e === t) return (l = !0), 0;
                var n,
                  r = 0,
                  i = e.parentNode,
                  o = t.parentNode,
                  a = [e],
                  s = [t];
                if (!i || !o)
                  return e == C
                    ? -1
                    : t == C
                    ? 1
                    : i
                    ? -1
                    : o
                    ? 1
                    : u
                    ? P(u, e) - P(u, t)
                    : 0;
                if (i === o) return pe(e, t);
                n = e;
                while ((n = n.parentNode)) a.unshift(n);
                n = t;
                while ((n = n.parentNode)) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
              })),
        C
      );
    }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText = function (e) {
      var t,
        n = "",
        r = 0,
        i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while ((t = e[r++])) n += o(t);
      return n;
    }),
    ((b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": { dir: "parentNode", first: !0 },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: !0 },
        "~": { dir: "previousSibling" },
      },
      preFilter: {
        ATTR: function (e) {
          return (
            (e[1] = e[1].replace(te, ne)),
            (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
            "~=" === e[2] && (e[3] = " " + e[3] + " "),
            e.slice(0, 4)
          );
        },
        CHILD: function (e) {
          return (
            (e[1] = e[1].toLowerCase()),
            "nth" === e[1].slice(0, 3)
              ? (e[3] || se.error(e[0]),
                (e[4] = +(e[4]
                  ? e[5] + (e[6] || 1)
                  : 2 * ("even" === e[3] || "odd" === e[3]))),
                (e[5] = +(e[7] + e[8] || "odd" === e[3])))
              : e[3] && se.error(e[0]),
            e
          );
        },
        PSEUDO: function (e) {
          var t,
            n = !e[6] && e[2];
          return G.CHILD.test(e[0])
            ? null
            : (e[3]
                ? (e[2] = e[4] || e[5] || "")
                : n &&
                  X.test(n) &&
                  (t = h(n, !0)) &&
                  (t = n.indexOf(")", n.length - t) - n.length) &&
                  ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
              e.slice(0, 3));
        },
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e
            ? function () {
                return !0;
              }
            : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function (e) {
          var t = m[e + " "];
          return (
            t ||
            ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
              m(e, function (e) {
                return t.test(
                  ("string" == typeof e.className && e.className) ||
                    ("undefined" != typeof e.getAttribute &&
                      e.getAttribute("class")) ||
                    ""
                );
              }))
          );
        },
        ATTR: function (n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t
              ? "!=" === r
              : !r ||
                  ((t += ""),
                  "=" === r
                    ? t === i
                    : "!=" === r
                    ? t !== i
                    : "^=" === r
                    ? i && 0 === t.indexOf(i)
                    : "*=" === r
                    ? i && -1 < t.indexOf(i)
                    : "$=" === r
                    ? i && t.slice(-i.length) === i
                    : "~=" === r
                    ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                    : "|=" === r &&
                      (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function (h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
            m = "last" !== h.slice(-4),
            x = "of-type" === e;
          return 1 === g && 0 === v
            ? function (e) {
                return !!e.parentNode;
              }
            : function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l = y !== m ? "nextSibling" : "previousSibling",
                  c = e.parentNode,
                  f = x && e.nodeName.toLowerCase(),
                  p = !n && !x,
                  d = !1;
                if (c) {
                  if (y) {
                    while (l) {
                      a = e;
                      while ((a = a[l]))
                        if (
                          x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType
                        )
                          return !1;
                      u = l = "only" === h && !u && "nextSibling";
                    }
                    return !0;
                  }
                  if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                    (d =
                      (s =
                        (r =
                          (i =
                            (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                            (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) &&
                      r[2]),
                      (a = s && c.childNodes[s]);
                    while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                      if (1 === a.nodeType && ++d && a === e) {
                        i[h] = [k, s, d];
                        break;
                      }
                  } else if (
                    (p &&
                      (d = s =
                        (r =
                          (i =
                            (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                            (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                    !1 === d)
                  )
                    while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                      if (
                        (x
                          ? a.nodeName.toLowerCase() === f
                          : 1 === a.nodeType) &&
                        ++d &&
                        (p &&
                          ((i =
                            (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                            (o[a.uniqueID] = {}))[h] = [k, d]),
                        a === e)
                      )
                        break;
                  return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                }
              };
        },
        PSEUDO: function (e, o) {
          var t,
            a =
              b.pseudos[e] ||
              b.setFilters[e.toLowerCase()] ||
              se.error("unsupported pseudo: " + e);
          return a[S]
            ? a(o)
            : 1 < a.length
            ? ((t = [e, e, "", o]),
              b.setFilters.hasOwnProperty(e.toLowerCase())
                ? le(function (e, t) {
                    var n,
                      r = a(e, o),
                      i = r.length;
                    while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                  })
                : function (e) {
                    return a(e, 0, t);
                  })
            : a;
        },
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
            i = [],
            s = f(e.replace($, "$1"));
          return s[S]
            ? le(function (e, t, n, r) {
                var i,
                  o = s(e, null, r, []),
                  a = e.length;
                while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
              })
            : function (e, t, n) {
                return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
              };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return (
            (t = t.replace(te, ne)),
            function (e) {
              return -1 < (e.textContent || o(e)).indexOf(t);
            }
          );
        }),
        lang: le(function (n) {
          return (
            V.test(n || "") || se.error("unsupported lang: " + n),
            (n = n.replace(te, ne).toLowerCase()),
            function (e) {
              var t;
              do {
                if (
                  (t = E
                    ? e.lang
                    : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                )
                  return (
                    (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                  );
              } while ((e = e.parentNode) && 1 === e.nodeType);
              return !1;
            }
          );
        }),
        target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return e === a;
        },
        focus: function (e) {
          return (
            e === C.activeElement &&
            (!C.hasFocus || C.hasFocus()) &&
            !!(e.type || e.href || ~e.tabIndex)
          );
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return (
            ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
          );
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function (e) {
          return !b.pseudos.empty(e);
        },
        header: function (e) {
          return J.test(e.nodeName);
        },
        input: function (e) {
          return Q.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t && "button" === e.type) || "button" === t;
        },
        text: function (e) {
          var t;
          return (
            "input" === e.nodeName.toLowerCase() &&
            "text" === e.type &&
            (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          );
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
          return e;
        }),
      },
    }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize = function (e, t) {
        var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
        if (l) return t ? 0 : l.slice(0);
        (a = e), (s = []), (u = b.preFilter);
        while (a) {
          for (o in ((n && !(r = _.exec(a))) ||
            (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
          (n = !1),
          (r = z.exec(a)) &&
            ((n = r.shift()),
            i.push({ value: n, type: r[0].replace($, " ") }),
            (a = a.slice(n.length))),
          b.filter))
            !(r = G[o].exec(a)) ||
              (u[o] && !(r = u[o](r))) ||
              ((n = r.shift()),
              i.push({ value: n, type: o, matches: r }),
              (a = a.slice(n.length)));
          if (!n) break;
        }
        return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
      }),
      (f = se.compile = function (e, t) {
        var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];
        if (!a) {
          t || (t = h(e)), (n = t.length);
          while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
          (a = A(
            e,
            ((v = o),
            (m = 0 < (y = i).length),
            (x = 0 < v.length),
            (r = function (e, t, n, r, i) {
              var o,
                a,
                s,
                u = 0,
                l = "0",
                c = e && [],
                f = [],
                p = w,
                d = e || (x && b.find.TAG("*", i)),
                h = (k += null == p ? 1 : Math.random() || 0.1),
                g = d.length;
              for (
                i && (w = t == C || t || i);
                l !== g && null != (o = d[l]);
                l++
              ) {
                if (x && o) {
                  (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                  while ((s = v[a++]))
                    if (s(o, t || C, n)) {
                      r.push(o);
                      break;
                    }
                  i && (k = h);
                }
                m && ((o = !s && o) && u--, e && c.push(o));
              }
              if (((u += l), m && l !== u)) {
                a = 0;
                while ((s = y[a++])) s(c, f, t, n);
                if (e) {
                  if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                  f = Te(f);
                }
                H.apply(r, f),
                  i &&
                    !e &&
                    0 < f.length &&
                    1 < u + y.length &&
                    se.uniqueSort(r);
              }
              return i && ((k = h), (w = p)), c;
            }),
            m ? le(r) : r)
          )).selector = e;
        }
        return a;
      }),
      (g = se.select = function (e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h((e = l.selector || e));
        if (((n = n || []), 1 === c.length)) {
          if (
            2 < (o = c[0] = c[0].slice(0)).length &&
            "ID" === (a = o[0]).type &&
            9 === t.nodeType &&
            E &&
            b.relative[o[1].type]
          ) {
            if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
              return n;
            l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
          }
          i = G.needsContext.test(e) ? 0 : o.length;
          while (i--) {
            if (((a = o[i]), b.relative[(s = a.type)])) break;
            if (
              (u = b.find[s]) &&
              (r = u(
                a.matches[0].replace(te, ne),
                (ee.test(o[0].type) && ye(t.parentNode)) || t
              ))
            ) {
              if ((o.splice(i, 1), !(e = r.length && xe(o))))
                return H.apply(n, r), n;
              break;
            }
          }
        }
        return (
          (l || f(e, c))(
            r,
            t,
            !E,
            n,
            !t || (ee.test(e) && ye(t.parentNode)) || t
          ),
          n
        );
      }),
      (d.sortStable = S.split("").sort(D).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var j,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || j), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (j = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option = [
        1,
        "<select multiple='multiple'>",
        "</select>",
      ]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Ce() {
    return !0;
  }
  function Ee() {
    return !1;
  }
  function Se(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function ke(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        ke(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Ee;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Ae(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle = function (e) {
              return "undefined" != typeof S && S.event.triggered !== e.type
                ? S.event.dispatch.apply(t, arguments)
                : void 0;
            }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = Te.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = Te.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ce
              : Ee),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Ee,
      isPropagationStopped: Ee,
      isImmediatePropagationStopped: Ee,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ce),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ce),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ce),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Ae(this, e, Se), !1;
        },
        trigger: function () {
          return Ae(this, e), !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return ke(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return ke(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Ee),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ne = /<script|<style|<link/i,
    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function qe(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function Le(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function He(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Oe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function Pe(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && De.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(je, ""), u, l));
    }
    return n;
  }
  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Oe(o[r], a[r]);
        else Oe(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Re(this, e, !0);
      },
      remove: function (e) {
        return Re(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Pe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            qe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Pe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = qe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ne.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Pe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Ie = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    We = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Fe = new RegExp(ne.join("|"), "i");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Ie(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Me.test(a) &&
          Fe.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function $e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText = "position:absolute;left:-11111px"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a = 3 < parseInt(r.height)),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var _e = ["Webkit", "Moz", "ms"],
    ze = E.createElement("div").style,
    Ue = {};
  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return (
      t ||
      (e in ze
        ? e
        : (Ue[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
              while (n--) if ((e = _e[n] + t) in ze) return e;
            })(e) || e))
    );
  }
  var Ve = /^(none|table(?!-c[ea]).+)/,
    Ge = /^--/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Ze(e, t, n) {
    var r = Ie(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Ge.test(t),
          l = e.style;
        if (
          (u || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Ge.test(t) || (t = Xe(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ve.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, u, n)
              : We(e, Ye, function () {
                  return Ze(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ke(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Je(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              We(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Je);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ie(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t = S.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      },
    }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = et.prototype.init),
    (S.fx.step = {});
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(st)
        : C.setTimeout(st, S.fx.interval),
      S.fx.tick());
  }
  function ut() {
    return (
      C.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = tt || ut(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ct, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(ft, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ct(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = ft(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(lt(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (tt = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (S.fx.stop = function () {
      nt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (rt = E.createElement("input")),
    (it = E.createElement("select").appendChild(E.createElement("option"))),
    (rt.type = "checkbox"),
    (y.checkOn = "" !== rt.value),
    (y.optSelected = it.selected),
    ((rt = E.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (y.radioValue = "t" === rt.value);
  var pt,
    dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = dt[t] || S.find.attr;
      dt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = dt[o]),
            (dt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (dt[o] = i)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function vt(e) {
    return (e.match(P) || []).join(" ");
  }
  function yt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, yt(this)));
          });
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, yt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, yt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = mt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(xt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : vt(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !bt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, wt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, wt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Tt = C.location,
    Ct = { guid: Date.now() },
    Et = /\?/;
  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        S.error("Invalid XML: " + e),
      t
    );
  };
  var St = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || St.test(n)
          ? i(n, t)
          : Dt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Dt(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              Nt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(kt, "\r\n") };
                })
              : { name: t.name, value: n.replace(kt, "\r\n") };
          })
          .get();
      },
    });
  var jt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = E.createElement("a");
  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Bt(t, i, o, a) {
    var s = {},
      u = t === Mt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function $t(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Wt.href = Tt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
          Tt.protocol
        ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(Rt),
      ajaxTransport: Ft(Mt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Ht.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Tt.href) + "").replace(
            Pt,
            Tt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Bt(Rt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ot.test(v.type)),
        (f = v.url.replace(qt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(jt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Et.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Lt, "$1")),
              (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Bt(Mt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var _t = { 0: 200, 1223: 204 },
    zt = S.ajaxSettings.xhr();
  (y.cors = !!zt && "withCredentials" in zt),
    (y.ajax = zt = !!zt),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (zt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        _t[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Vt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Vt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback = m(e.jsonpCallback)
            ? e.jsonpCallback()
            : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Vt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t = E.implementation.createHTMLDocument(
                  ""
                )).createElement("base")).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t
            ? t.using.call(e, f)
            : ("number" == typeof f.top && (f.top += "px"),
              "number" == typeof f.left && (f.left += "px"),
              c.css(f));
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
        if (t)
          return (t = Be(e, n)), Me.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid = e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Gt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Yt = C.jQuery,
    Qt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
}); /* Start:"a:4:{s:4:"full";s:57:"/bitrix/templates/delko/js/lazyload.min.js?16028521957972";s:6:"source";s:42:"/bitrix/templates/delko/js/lazyload.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
!(function (n, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((n = n || self).LazyLoad = t());
})(this, function () {
  "use strict";
  function n() {
    return (n =
      Object.assign ||
      function (n) {
        for (var t = 1; t < arguments.length; t++) {
          var e = arguments[t];
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
        }
        return n;
      }).apply(this, arguments);
  }
  var t = "undefined" != typeof window,
    e =
      (t && !("onscroll" in window)) ||
      ("undefined" != typeof navigator &&
        /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
    i = t && "IntersectionObserver" in window,
    a = t && "classList" in document.createElement("p"),
    o = t && window.devicePixelRatio > 1,
    r = {
      elements_selector: ".lazy",
      container: e || t ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      data_bg_hidpi: "bg-hidpi",
      data_bg_multi: "bg-multi",
      data_bg_multi_hidpi: "bg-multi-hidpi",
      data_poster: "poster",
      class_applied: "applied",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      unobserve_completed: !0,
      unobserve_entered: !1,
      cancel_on_exit: !0,
      callback_enter: null,
      callback_exit: null,
      callback_applied: null,
      callback_loading: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      callback_cancel: null,
      use_native: !1,
    },
    c = function (t) {
      return n({}, r, t);
    },
    l = function (n, t) {
      var e,
        i = new n(t);
      try {
        e = new CustomEvent("LazyLoad::Initialized", {
          detail: { instance: i },
        });
      } catch (n) {
        (e = document.createEvent(
          "CustomEvent"
        )).initCustomEvent("LazyLoad::Initialized", !1, !1, { instance: i });
      }
      window.dispatchEvent(e);
    },
    s = function (n, t) {
      return n.getAttribute("data-" + t);
    },
    u = function (n, t, e) {
      var i = "data-" + t;
      null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
    },
    d = function (n) {
      return s(n, "ll-status");
    },
    f = function (n, t) {
      return u(n, "ll-status", t);
    },
    _ = function (n) {
      return f(n, null);
    },
    g = function (n) {
      return null === d(n);
    },
    v = function (n) {
      return "native" === d(n);
    },
    p = ["loading", "loaded", "applied", "error"],
    b = function (n, t, e, i) {
      n && (void 0 === i ? (void 0 === e ? n(t) : n(t, e)) : n(t, e, i));
    },
    h = function (n, t) {
      a ? n.classList.add(t) : (n.className += (n.className ? " " : "") + t);
    },
    m = function (n, t) {
      a
        ? n.classList.remove(t)
        : (n.className = n.className
            .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
            .replace(/^\s+/, "")
            .replace(/\s+$/, ""));
    },
    E = function (n) {
      return n.llTempImage;
    },
    I = function (n, t) {
      if (t) {
        var e = t._observer;
        e && e.unobserve(n);
      }
    },
    y = function (n, t) {
      n && (n.loadingCount += t);
    },
    A = function (n, t) {
      n && (n.toLoadCount = t);
    },
    L = function (n) {
      for (var t, e = [], i = 0; (t = n.children[i]); i += 1)
        "SOURCE" === t.tagName && e.push(t);
      return e;
    },
    w = function (n, t, e) {
      e && n.setAttribute(t, e);
    },
    z = function (n, t) {
      n.removeAttribute(t);
    },
    k = function (n) {
      return !!n.llOriginalAttrs;
    },
    O = function (n) {
      if (!k(n)) {
        var t = {};
        (t.src = n.getAttribute("src")),
          (t.srcset = n.getAttribute("srcset")),
          (t.sizes = n.getAttribute("sizes")),
          (n.llOriginalAttrs = t);
      }
    },
    C = function (n) {
      if (k(n)) {
        var t = n.llOriginalAttrs;
        w(n, "src", t.src), w(n, "srcset", t.srcset), w(n, "sizes", t.sizes);
      }
    },
    N = function (n, t) {
      w(n, "sizes", s(n, t.data_sizes)),
        w(n, "srcset", s(n, t.data_srcset)),
        w(n, "src", s(n, t.data_src));
    },
    x = function (n) {
      z(n, "src"), z(n, "srcset"), z(n, "sizes");
    },
    M = function (n, t) {
      var e = n.parentNode;
      e && "PICTURE" === e.tagName && L(e).forEach(t);
    },
    R = function (n, t) {
      L(n).forEach(t);
    },
    G = {
      IMG: function (n, t) {
        M(n, function (n) {
          O(n), N(n, t);
        }),
          O(n),
          N(n, t);
      },
      IFRAME: function (n, t) {
        w(n, "src", s(n, t.data_src));
      },
      VIDEO: function (n, t) {
        R(n, function (n) {
          w(n, "src", s(n, t.data_src));
        }),
          w(n, "poster", s(n, t.data_poster)),
          w(n, "src", s(n, t.data_src)),
          n.load();
      },
    },
    T = function (n, t) {
      var e = G[n.tagName];
      e && e(n, t);
    },
    D = function (n, t, e) {
      y(e, 1),
        h(n, t.class_loading),
        f(n, "loading"),
        b(t.callback_loading, n, e);
    },
    F = {
      IMG: function (n, t) {
        u(n, t.data_src, null),
          u(n, t.data_srcset, null),
          u(n, t.data_sizes, null),
          M(n, function (n) {
            u(n, t.data_srcset, null), u(n, t.data_sizes, null);
          });
      },
      IFRAME: function (n, t) {
        u(n, t.data_src, null);
      },
      VIDEO: function (n, t) {
        u(n, t.data_src, null),
          u(n, t.data_poster, null),
          R(n, function (n) {
            u(n, t.data_src, null);
          });
      },
    },
    V = function (n, t) {
      u(n, t.data_bg_multi, null), u(n, t.data_bg_multi_hidpi, null);
    },
    j = function (n, t) {
      var e = F[n.tagName];
      e
        ? e(n, t)
        : (function (n, t) {
            u(n, t.data_bg, null), u(n, t.data_bg_hidpi, null);
          })(n, t);
    },
    P = ["IMG", "IFRAME", "VIDEO"],
    S = function (n, t) {
      !t ||
        (function (n) {
          return n.loadingCount > 0;
        })(t) ||
        (function (n) {
          return n.toLoadCount > 0;
        })(t) ||
        b(n.callback_finish, t);
    },
    U = function (n, t, e) {
      n.addEventListener(t, e), (n.llEvLisnrs[t] = e);
    },
    $ = function (n, t, e) {
      n.removeEventListener(t, e);
    },
    q = function (n) {
      return !!n.llEvLisnrs;
    },
    H = function (n) {
      if (q(n)) {
        var t = n.llEvLisnrs;
        for (var e in t) {
          var i = t[e];
          $(n, e, i);
        }
        delete n.llEvLisnrs;
      }
    },
    B = function (n, t, e) {
      !(function (n) {
        delete n.llTempImage;
      })(n),
        y(e, -1),
        (function (n) {
          n && (n.toLoadCount -= 1);
        })(e),
        m(n, t.class_loading),
        t.unobserve_completed && I(n, e);
    },
    J = function (n, t, e) {
      var i = E(n) || n;
      q(i) ||
        (function (n, t, e) {
          q(n) || (n.llEvLisnrs = {});
          var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
          U(n, i, t), U(n, "error", e);
        })(
          i,
          function (a) {
            !(function (n, t, e, i) {
              var a = v(t);
              B(t, e, i),
                h(t, e.class_loaded),
                f(t, "loaded"),
                j(t, e),
                b(e.callback_loaded, t, i),
                a || S(e, i);
            })(0, n, t, e),
              H(i);
          },
          function (a) {
            !(function (n, t, e, i) {
              var a = v(t);
              B(t, e, i),
                h(t, e.class_error),
                f(t, "error"),
                b(e.callback_error, t, i),
                a || S(e, i);
            })(0, n, t, e),
              H(i);
          }
        );
    },
    K = function (n, t, e) {
      !(function (n) {
        n.llTempImage = document.createElement("IMG");
      })(n),
        J(n, t, e),
        (function (n, t, e) {
          var i = s(n, t.data_bg),
            a = s(n, t.data_bg_hidpi),
            r = o && a ? a : i;
          r &&
            ((n.style.backgroundImage = 'url("'.concat(r, '")')),
            E(n).setAttribute("src", r),
            D(n, t, e));
        })(n, t, e),
        (function (n, t, e) {
          var i = s(n, t.data_bg_multi),
            a = s(n, t.data_bg_multi_hidpi),
            r = o && a ? a : i;
          r &&
            ((n.style.backgroundImage = r),
            (function (n, t, e) {
              h(n, t.class_applied),
                f(n, "applied"),
                V(n, t),
                t.unobserve_completed && I(n, t),
                b(t.callback_applied, n, e);
            })(n, t, e));
        })(n, t, e);
    },
    Q = function (n, t, e) {
      !(function (n) {
        return P.indexOf(n.tagName) > -1;
      })(n)
        ? K(n, t, e)
        : (function (n, t, e) {
            J(n, t, e), T(n, t), D(n, t, e);
          })(n, t, e);
    },
    W = ["IMG", "IFRAME"],
    X = function (n) {
      return n.use_native && "loading" in HTMLImageElement.prototype;
    },
    Y = function (n, t, e) {
      n.forEach(function (n) {
        return (function (n) {
          return n.isIntersecting || n.intersectionRatio > 0;
        })(n)
          ? (function (n, t, e, i) {
              f(n, "entered"),
                (function (n, t, e) {
                  t.unobserve_entered && I(n, e);
                })(n, e, i),
                b(e.callback_enter, n, t, i),
                (function (n) {
                  return p.indexOf(d(n)) >= 0;
                })(n) || Q(n, e, i);
            })(n.target, n, t, e)
          : (function (n, t, e, i) {
              g(n) ||
                ((function (n, t, e, i) {
                  e.cancel_on_exit &&
                    (function (n) {
                      return "loading" === d(n);
                    })(n) &&
                    "IMG" === n.tagName &&
                    (H(n),
                    (function (n) {
                      M(n, function (n) {
                        x(n);
                      }),
                        x(n);
                    })(n),
                    (function (n) {
                      M(n, function (n) {
                        C(n);
                      }),
                        C(n);
                    })(n),
                    m(n, e.class_loading),
                    y(i, -1),
                    _(n),
                    b(e.callback_cancel, n, t, i));
                })(n, t, e, i),
                b(e.callback_exit, n, t, i));
            })(n.target, n, t, e);
      });
    },
    Z = function (n) {
      return Array.prototype.slice.call(n);
    },
    nn = function (n) {
      return n.container.querySelectorAll(n.elements_selector);
    },
    tn = function (n) {
      return (function (n) {
        return "error" === d(n);
      })(n);
    },
    en = function (n, t) {
      return (function (n) {
        return Z(n).filter(g);
      })(n || nn(t));
    },
    an = function (n, e) {
      var a = c(n);
      (this._settings = a),
        (this.loadingCount = 0),
        (function (n, t) {
          i &&
            !X(n) &&
            (t._observer = new IntersectionObserver(
              function (e) {
                Y(e, n, t);
              },
              (function (n) {
                return {
                  root: n.container === document ? null : n.container,
                  rootMargin: n.thresholds || n.threshold + "px",
                };
              })(n)
            ));
        })(a, this),
        (function (n, e) {
          t &&
            window.addEventListener("online", function () {
              !(function (n, t) {
                var e;
                ((e = nn(n)), Z(e).filter(tn)).forEach(function (t) {
                  m(t, n.class_error), _(t);
                }),
                  t.update();
              })(n, e);
            });
        })(a, this),
        this.update(e);
    };
  return (
    (an.prototype = {
      update: function (n) {
        var t,
          a,
          o = this._settings,
          r = en(n, o);
        A(this, r.length),
          !e && i
            ? X(o)
              ? (function (n, t, e) {
                  n.forEach(function (n) {
                    -1 !== W.indexOf(n.tagName) &&
                      (n.setAttribute("loading", "lazy"),
                      (function (n, t, e) {
                        J(n, t, e), T(n, t), j(n, t), f(n, "native");
                      })(n, t, e));
                  }),
                    A(e, 0);
                })(r, o, this)
              : ((a = r),
                (function (n) {
                  n.disconnect();
                })((t = this._observer)),
                (function (n, t) {
                  t.forEach(function (t) {
                    n.observe(t);
                  });
                })(t, a))
            : this.loadAll(r);
      },
      destroy: function () {
        this._observer && this._observer.disconnect(),
          nn(this._settings).forEach(function (n) {
            delete n.llOriginalAttrs;
          }),
          delete this._observer,
          delete this._settings,
          delete this.loadingCount,
          delete this.toLoadCount;
      },
      loadAll: function (n) {
        var t = this,
          e = this._settings;
        en(n, e).forEach(function (n) {
          I(n, t), Q(n, e, t);
        });
      },
    }),
    (an.load = function (n, t) {
      var e = c(t);
      Q(n, e);
    }),
    (an.resetStatus = function (n) {
      _(n);
    }),
    t &&
      (function (n, t) {
        if (t)
          if (t.length) for (var e, i = 0; (e = t[i]); i += 1) l(n, e);
          else l(n, t);
      })(an, window.lazyLoadOptions),
    an
  );
}); /* Start:"a:4:{s:4:"full";s:55:"/bitrix/templates/delko/js/slick.min.js?160285219442784";s:6:"source";s:39:"/bitrix/templates/delko/js/slick.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<div class="slick-prev" >Previous</div>',
        nextArrow: '<div class="slick-next">Next</div>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
      var s = this;
      if ("boolean" == typeof t) (o = t), (t = null);
      else if (t < 0 || t >= s.slideCount) return !1;
      s.unload(),
        "number" == typeof t
          ? 0 === t && 0 === s.$slides.length
            ? i(e).appendTo(s.$slideTrack)
            : o
            ? i(e).insertBefore(s.$slides.eq(t))
            : i(e).insertAfter(s.$slides.eq(t))
          : !0 === o
          ? i(e).prependTo(s.$slideTrack)
          : i(e).appendTo(s.$slideTrack),
        (s.$slides = s.$slideTrack.children(this.options.slide)),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function (e, t) {
          i(t).attr("data-slick-index", e);
        }),
        (s.$slidesCache = s.$slides),
        s.reinit();
    }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
      var e = this;
      null !== i &&
        ((e.$slidesCache = e.$slides),
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(i).appendTo(e.$slideTrack),
        e.reinit());
    }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (t) {
          t.stopImmediatePropagation();
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(":focus")), e.autoPlay());
          }, 0);
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
      return this.currentSlide;
    }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption = function (i) {
      return this.options[i];
    }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
      this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
    }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1,
              }),
                -1 !== s &&
                  i(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + e.instanceUid + s,
                  });
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.$slides.eq(s).attr("tabindex", 0);
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                n.$slider.trigger("lazyLoaded", [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find(".slick-slide").slice(o, s)),
        "anticipated" === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
            );
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext = function () {
      this.changeSlide({ data: { message: "next" } });
    }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause = function () {
      var i = this;
      i.autoPlayClear(), (i.paused = !0);
    }),
    (e.prototype.play = e.prototype.slickPlay = function () {
      var i = this;
      i.autoPlay(),
        (i.options.autoplay = !0),
        (i.paused = !1),
        (i.focussed = !1),
        (i.interrupted = !1);
    }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev = function () {
      this.changeSlide({ data: { message: "previous" } });
    }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
      var o = this;
      if (
        ((i =
          "boolean" == typeof i
            ? !0 === (e = i)
              ? 0
              : o.slideCount - 1
            : !0 === e
            ? --i
            : i),
        o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
      )
        return !1;
      o.unload(),
        !0 === t
          ? o.$slideTrack.children().remove()
          : o.$slideTrack.children(this.options.slide).eq(i).remove(),
        (o.$slides = o.$slideTrack.children(this.options.slide)),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        (o.$slidesCache = o.$slides),
        o.reinit();
    }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption = function () {
      var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
      if (
        ("object" === i.type(arguments[0])
          ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
          : "string" === i.type(arguments[0]) &&
            ((o = arguments[0]),
            (s = arguments[1]),
            (l = arguments[2]),
            "responsive" === arguments[0] && "array" === i.type(arguments[1])
              ? (n = "responsive")
              : void 0 !== arguments[1] && (n = "single")),
        "single" === n)
      )
        r.options[o] = s;
      else if ("multiple" === n)
        i.each(o, function (i, e) {
          r.options[i] = e;
        });
      else if ("responsive" === n)
        for (t in s)
          if ("array" !== i.type(r.options.responsive))
            r.options.responsive = [s[t]];
          else {
            for (e = r.options.responsive.length - 1; e >= 0; )
              r.options.responsive[e].breakpoint === s[t].breakpoint &&
                r.options.responsive.splice(e, 1),
                e--;
            r.options.responsive.push(s[t]);
          }
      l && (r.unload(), r.reinit());
    }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
      var i = this;
      null !== i.$slidesCache &&
        (i.unload(),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slidesCache.appendTo(i.$slideTrack),
        i.reinit());
    }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
}); /* Start:"a:4:{s:4:"full";s:49:"/bitrix/templates/delko/js/mask.js?16028521966843";s:6:"source";s:34:"/bitrix/templates/delko/js/mask.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

/* End */
// jQuery Mask Plugin v1.14.0
// github.com/igorescobar/jQuery-Mask-Plugin
(function (b) {
  "function" === typeof define && define.amd
    ? define(["jquery"], b)
    : "object" === typeof exports
    ? (module.exports = b(require("jquery")))
    : b(jQuery || Zepto);
})(function (b) {
  var y = function (a, e, d) {
    var c = {
      invalid: [],
      getCaret: function () {
        try {
          var r,
            b = 0,
            e = a.get(0),
            d = document.selection,
            f = e.selectionStart;
          if (d && -1 === navigator.appVersion.indexOf("MSIE 10"))
            (r = d.createRange()),
              r.moveStart("character", -c.val().length),
              (b = r.text.length);
          else if (f || "0" === f) b = f;
          return b;
        } catch (g) {}
      },
      setCaret: function (r) {
        try {
          if (a.is(":focus")) {
            var c,
              b = a.get(0);
            b.setSelectionRange
              ? (b.focus(), b.setSelectionRange(r, r))
              : ((c = b.createTextRange()),
                c.collapse(!0),
                c.moveEnd("character", r),
                c.moveStart("character", r),
                c.select());
          }
        } catch (e) {}
      },
      events: function () {
        a.on("keydown.mask", function (c) {
          a.data("mask-keycode", c.keyCode || c.which);
        })
          .on(
            b.jMaskGlobals.useInput ? "input.mask" : "keyup.mask",
            c.behaviour
          )
          .on("paste.mask drop.mask", function () {
            setTimeout(function () {
              a.keydown().keyup();
            }, 100);
          })
          .on("change.mask", function () {
            a.data("changed", !0);
          })
          .on("blur.mask", function () {
            n === c.val() || a.data("changed") || a.trigger("change");
            a.data("changed", !1);
          })
          .on("blur.mask", function () {
            n = c.val();
          })
          .on("focus.mask", function (a) {
            !0 === d.selectOnFocus && b(a.target).select();
          })
          .on("focusout.mask", function () {
            d.clearIfNotMatch && !p.test(c.val()) && c.val("");
          });
      },
      getRegexMask: function () {
        for (var a = [], c, b, d, f, l = 0; l < e.length; l++)
          (c = g.translation[e.charAt(l)])
            ? ((b = c.pattern.toString().replace(/.{1}$|^.{1}/g, "")),
              (d = c.optional),
              (c = c.recursive)
                ? (a.push(e.charAt(l)),
                  (f = { digit: e.charAt(l), pattern: b }))
                : a.push(d || c ? b + "?" : b))
            : a.push(e.charAt(l).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
        a = a.join("");
        f &&
          (a = a
            .replace(
              new RegExp("(" + f.digit + "(.*" + f.digit + ")?)"),
              "($1)?"
            )
            .replace(new RegExp(f.digit, "g"), f.pattern));
        return new RegExp(a);
      },
      destroyEvents: function () {
        a.off(
          "input keydown keyup paste drop blur focusout "
            .split(" ")
            .join(".mask ")
        );
      },
      val: function (c) {
        var b = a.is("input") ? "val" : "text";
        if (0 < arguments.length) {
          if (a[b]() !== c) a[b](c);
          b = a;
        } else b = a[b]();
        return b;
      },
      getMCharsBeforeCount: function (a, c) {
        for (var b = 0, d = 0, f = e.length; d < f && d < a; d++)
          g.translation[e.charAt(d)] || ((a = c ? a + 1 : a), b++);
        return b;
      },
      caretPos: function (a, b, d, h) {
        return g.translation[e.charAt(Math.min(a - 1, e.length - 1))]
          ? Math.min(a + d - b - h, d)
          : c.caretPos(a + 1, b, d, h);
      },
      behaviour: function (d) {
        d = d || window.event;
        c.invalid = [];
        var e = a.data("mask-keycode");
        if (-1 === b.inArray(e, g.byPassKeys)) {
          var m = c.getCaret(),
            h = c.val().length,
            f = c.getMasked(),
            l = f.length,
            k = c.getMCharsBeforeCount(l - 1) - c.getMCharsBeforeCount(h - 1),
            n = m < h;
          c.val(f);
          n &&
            (8 !== e && 46 !== e && (m = c.caretPos(m, h, l, k)),
            c.setCaret(m));
          return c.callbacks(d);
        }
      },
      getMasked: function (a, b) {
        var m = [],
          h = void 0 === b ? c.val() : b + "",
          f = 0,
          l = e.length,
          k = 0,
          n = h.length,
          q = 1,
          p = "push",
          u = -1,
          t,
          w;
        d.reverse
          ? ((p = "unshift"),
            (q = -1),
            (t = 0),
            (f = l - 1),
            (k = n - 1),
            (w = function () {
              return -1 < f && -1 < k;
            }))
          : ((t = l - 1),
            (w = function () {
              return f < l && k < n;
            }));
        for (; w(); ) {
          var x = e.charAt(f),
            v = h.charAt(k),
            s = g.translation[x];
          if (s)
            v.match(s.pattern)
              ? (m[p](v),
                s.recursive &&
                  (-1 === u ? (u = f) : f === t && (f = u - q),
                  t === u && (f -= q)),
                (f += q))
              : s.optional
              ? ((f += q), (k -= q))
              : s.fallback
              ? (m[p](s.fallback), (f += q), (k -= q))
              : c.invalid.push({ p: k, v: v, e: s.pattern }),
              (k += q);
          else {
            if (!a) m[p](x);
            v === x && (k += q);
            f += q;
          }
        }
        h = e.charAt(t);
        l !== n + 1 || g.translation[h] || m.push(h);
        return m.join("");
      },
      callbacks: function (b) {
        var g = c.val(),
          m = g !== n,
          h = [g, b, a, d],
          f = function (a, b, c) {
            "function" === typeof d[a] && b && d[a].apply(this, c);
          };
        f("onChange", !0 === m, h);
        f("onKeyPress", !0 === m, h);
        f("onComplete", g.length === e.length, h);
        f("onInvalid", 0 < c.invalid.length, [g, b, a, c.invalid, d]);
      },
    };
    a = b(a);
    var g = this,
      n = c.val(),
      p;
    e = "function" === typeof e ? e(c.val(), void 0, a, d) : e;
    g.mask = e;
    g.options = d;
    g.remove = function () {
      var b = c.getCaret();
      c.destroyEvents();
      c.val(g.getCleanVal());
      c.setCaret(b - c.getMCharsBeforeCount(b));
      return a;
    };
    g.getCleanVal = function () {
      return c.getMasked(!0);
    };
    g.getMaskedVal = function (a) {
      return c.getMasked(!1, a);
    };
    g.init = function (e) {
      e = e || !1;
      d = d || {};
      g.clearIfNotMatch = b.jMaskGlobals.clearIfNotMatch;
      g.byPassKeys = b.jMaskGlobals.byPassKeys;
      g.translation = b.extend({}, b.jMaskGlobals.translation, d.translation);
      g = b.extend(!0, {}, g, d);
      p = c.getRegexMask();
      !1 === e
        ? (d.placeholder && a.attr("placeholder", d.placeholder),
          a.data("mask") && a.attr("autocomplete", "off"),
          c.destroyEvents(),
          c.events(),
          (e = c.getCaret()),
          c.val(c.getMasked()),
          c.setCaret(e + c.getMCharsBeforeCount(e, !0)))
        : (c.events(), c.val(c.getMasked()));
    };
    g.init(!a.is("input"));
  };
  b.maskWatchers = {};
  var A = function () {
      var a = b(this),
        e = {},
        d = a.attr("data-mask");
      a.attr("data-mask-reverse") && (e.reverse = !0);
      a.attr("data-mask-clearifnotmatch") && (e.clearIfNotMatch = !0);
      "true" === a.attr("data-mask-selectonfocus") && (e.selectOnFocus = !0);
      if (z(a, d, e)) return a.data("mask", new y(this, d, e));
    },
    z = function (a, e, d) {
      d = d || {};
      var c = b(a).data("mask"),
        g = JSON.stringify;
      a = b(a).val() || b(a).text();
      try {
        return (
          "function" === typeof e && (e = e(a)),
          "object" !== typeof c || g(c.options) !== g(d) || c.mask !== e
        );
      } catch (n) {}
    };
  b.fn.mask = function (a, e) {
    e = e || {};
    var d = this.selector,
      c = b.jMaskGlobals,
      g = c.watchInterval,
      c = e.watchInputs || c.watchInputs,
      n = function () {
        if (z(this, a, e)) return b(this).data("mask", new y(this, a, e));
      };
    b(this).each(n);
    d &&
      "" !== d &&
      c &&
      (clearInterval(b.maskWatchers[d]),
      (b.maskWatchers[d] = setInterval(function () {
        b(document).find(d).each(n);
      }, g)));
    return this;
  };
  b.fn.masked = function (a) {
    return this.data("mask").getMaskedVal(a);
  };
  b.fn.unmask = function () {
    clearInterval(b.maskWatchers[this.selector]);
    delete b.maskWatchers[this.selector];
    return this.each(function () {
      var a = b(this).data("mask");
      a && a.remove().removeData("mask");
    });
  };
  b.fn.cleanVal = function () {
    return this.data("mask").getCleanVal();
  };
  b.applyDataMask = function (a) {
    a = a || b.jMaskGlobals.maskElements;
    (a instanceof b ? a : b(a)).filter(b.jMaskGlobals.dataMaskAttr).each(A);
  };
  var p = {
    maskElements: "input,td,span,div",
    dataMaskAttr: "*[data-mask]",
    dataMask: !0,
    watchInterval: 300,
    watchInputs: !0,
    useInput: (function (a) {
      var b = document.createElement("div"),
        d;
      a = "on" + a;
      d = a in b;
      d || (b.setAttribute(a, "return;"), (d = "function" === typeof b[a]));
      return d;
    })("input"),
    watchDataMask: !1,
    byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
    translation: {
      0: { pattern: /\d/ },
      9: { pattern: /\d/, optional: !0 },
      "#": { pattern: /\d/, recursive: !0 },
      A: { pattern: /[a-zA-Z0-9]/ },
      S: { pattern: /[a-zA-Z]/ },
    },
  };
  b.jMaskGlobals = b.jMaskGlobals || {};
  p = b.jMaskGlobals = b.extend(!0, {}, p, b.jMaskGlobals);
  p.dataMask && b.applyDataMask();
  setInterval(function () {
    b.jMaskGlobals.watchDataMask && b.applyDataMask();
  }, p.watchInterval);
}); /* Start:"a:4:{s:4:"full";s:68:"/bitrix/templates/delko/js/jquery.suggestions.min.js?160285219558518";s:6:"source";s:52:"/bitrix/templates/delko/js/jquery.suggestions.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

/* End */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : t(e.jQuery);
})(this, function (e) {
  "use strict";
  function t(e, t) {
    return function (n, i) {
      var s,
        o = [];
      return (
        t(i) &&
          ((s = k.splitTokens(k.split(n, e))),
          m.each(i, function (t, i) {
            var r = t.value;
            if (k.stringEncloses(n, r)) return !1;
            var a = k.splitTokens(k.split(r, e));
            0 === m.minus(s, a).length && o.push(i);
          })),
        1 === o.length ? o[0] : -1
      );
    };
  }
  function n(e, t) {
    var n = e.data && e.data[t];
    return (
      n &&
      new RegExp("^" + k.escapeRegExChars(n) + "([" + w + "]|$)", "i").test(
        e.value
      )
    );
  }
  function i(e, t) {
    var n = /<strong>/;
    return n.test(t) && !n.test(e) ? t : e;
  }
  function s(e, t, n, s, o) {
    var r = this;
    return i(r.highlightMatches(e, n, s, o), r.highlightMatches(t, n, s, o));
  }
  function o(e) {
    (this.urlSuffix = e.toLowerCase()),
      (this.noSuggestionsHint = "ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð¾Ðµ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ"),
      (this.matchers = [F.matchByNormalizedQuery(), F.matchByWords()]);
  }
  function r(t, n) {
    var i = this;
    (i.element = t),
      (i.el = e(t)),
      (i.suggestions = []),
      (i.badQueries = []),
      (i.selectedIndex = -1),
      (i.currentValue = i.element.value),
      (i.intervalId = 0),
      (i.cachedResponse = {}),
      (i.enrichmentCache = {}),
      (i.currentRequest = null),
      (i.inputPhase = e.Deferred()),
      (i.fetchPhase = e.Deferred()),
      (i.enrichPhase = e.Deferred()),
      (i.onChangeTimeout = null),
      (i.triggering = {}),
      (i.$wrapper = null),
      (i.options = e.extend({}, L, n)),
      (i.classes = x),
      (i.disabled = !1),
      (i.selection = null),
      (i.$viewport = e(window)),
      (i.$body = e(document.body)),
      (i.type = null),
      (i.status = {}),
      i.setupElement(),
      (i.initializer = e.Deferred()),
      i.el.is(":visible") ? i.initializer.resolve() : i.deferInitialization(),
      i.initializer.done(e.proxy(i.initialize, i));
  }
  function a() {
    V.each(K, function (e) {
      e.abort();
    }),
      (K = {});
  }
  function u() {
    (J = null), (L.geoLocation = X);
  }
  function l(t) {
    return e
      .map(t, function (e) {
        var t = V.escapeHtml(e.text);
        return t && e.matched && (t = "<strong>" + t + "</strong>"), t;
      })
      .join("");
  }
  function c(t, n) {
    var i = t.split(", ");
    return 1 === i.length
      ? t
      : e
          .map(i, function (e) {
            return '<span class="' + n + '">' + e + "</span>";
          })
          .join(", ");
  }
  function d(t, n) {
    var i = !1;
    return (
      e.each(t, function (e, t) {
        if ((i = t.value == n.value && t != n)) return !1;
      }),
      i
    );
  }
  function f(e, t) {
    var n = t.selection,
      i = n && n.data && t.bounds;
    return (
      i &&
        m.each(t.bounds.all, function (t, s) {
          return (i = n.data[t] === e.data[t]);
        }),
      i
    );
  }
  function p(e) {
    var t = e.replace(/^(\d{2})(\d*?)(0+)$/g, "$1$2"),
      n = t.length,
      i = -1;
    return (
      n <= 2
        ? (i = 2)
        : n > 2 && n <= 5
        ? (i = 5)
        : n > 5 && n <= 8
        ? (i = 8)
        : n > 8 && n <= 11
        ? (i = 11)
        : n > 11 && n <= 15
        ? (i = 15)
        : n > 15 && (i = 19),
      k.padEnd(t, i, "0")
    );
  }
  function g(e) {
    this.plan = e.status.plan;
    var t = e.getContainer();
    this.element = de.selectByClass(x.promo, t);
  }
  function h() {
    new g(this).show();
  }
  e = e && e.hasOwnProperty("default") ? e.default : e;
  var y = {
      isArray: function (e) {
        return Array.isArray(e);
      },
      isFunction: function (e) {
        return "[object Function]" === Object.prototype.toString.call(e);
      },
      isEmptyObject: function (e) {
        return 0 === Object.keys(e).length && e.constructor === Object;
      },
      isPlainObject: function (e) {
        return (
          void 0 !== e &&
          "object" == typeof e &&
          null !== e &&
          !e.nodeType &&
          e !== e.window &&
          !(
            e.constructor &&
            !Object.prototype.hasOwnProperty.call(
              e.constructor.prototype,
              "isPrototypeOf"
            )
          )
        );
      },
    },
    m = {
      compact: function (e) {
        return e.filter(function (e) {
          return !!e;
        });
      },
      each: function (e, t) {
        if (Array.isArray(e))
          return void e.some(function (e, n) {
            return !1 === t(e, n);
          });
        Object.keys(e).some(function (n) {
          var i = e[n];
          return !1 === t(i, n);
        });
      },
      intersect: function (e, t) {
        var n = [];
        return Array.isArray(e) && Array.isArray(t)
          ? e.filter(function (e) {
              return -1 !== t.indexOf(e);
            })
          : n;
      },
      minus: function (e, t) {
        return t && 0 !== t.length
          ? e.filter(function (e) {
              return -1 === t.indexOf(e);
            })
          : e;
      },
      makeArray: function (e) {
        return y.isArray(e) ? Array.prototype.slice.call(e) : [e];
      },
      minusWithPartialMatching: function (e, t) {
        return t && 0 !== t.length
          ? e.filter(function (e) {
              return !t.some(function (t) {
                return 0 === t.indexOf(e);
              });
            })
          : e;
      },
      slice: function (e, t) {
        return Array.prototype.slice.call(e, t);
      },
    },
    _ = {
      delay: function (e, t) {
        return setTimeout(e, t || 0);
      },
    },
    v = {
      areSame: function e(t, n) {
        var i = !0;
        return (
          typeof t == typeof n &&
          ("object" == typeof t && null != t && null != n
            ? (m.each(t, function (t, s) {
                return (i = e(t, n[s]));
              }),
              i)
            : t === n)
        );
      },
      assign: function (e, t) {
        if ("function" == typeof Object.assign)
          return Object.assign.apply(null, arguments);
        if (null == e)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var n = Object(e), i = 1; i < arguments.length; i++) {
          var s = arguments[i];
          if (null != s)
            for (var o in s)
              Object.prototype.hasOwnProperty.call(s, o) && (n[o] = s[o]);
        }
        return n;
      },
      clone: function (e) {
        return JSON.parse(JSON.stringify(e));
      },
      compact: function (e) {
        var t = v.clone(e);
        return (
          m.each(t, function (e, n) {
            (null !== e && void 0 !== e && "" !== e) || delete t[n];
          }),
          t
        );
      },
      fieldsAreNotEmpty: function (e, t) {
        if (!y.isPlainObject(e)) return !1;
        var n = !0;
        return (
          m.each(t, function (t, i) {
            return (n = !!e[t]);
          }),
          n
        );
      },
      getDeepValue: function e(t, n) {
        var i = n.split("."),
          s = i.shift();
        return t && (i.length ? e(t[s], i.join(".")) : t[s]);
      },
      indexObjectsById: function (e, t, n) {
        var i = {};
        return (
          m.each(e, function (e, s) {
            var o = e[t],
              r = {};
            n && (r[n] = s), (i[o] = v.assign(r, e));
          }),
          i
        );
      },
    },
    b = { ENTER: 13, ESC: 27, TAB: 9, SPACE: 32, UP: 38, DOWN: 40 },
    x = {
      hint: "suggestions-hint",
      mobile: "suggestions-mobile",
      nowrap: "suggestions-nowrap",
      promo: "suggestions-promo",
      selected: "suggestions-selected",
      suggestion: "suggestions-suggestion",
      subtext: "suggestions-subtext",
      subtext_inline: "suggestions-subtext suggestions-subtext_inline",
      subtext_delimiter: "suggestions-subtext-delimiter",
      subtext_label: "suggestions-subtext suggestions-subtext_label",
      removeConstraint: "suggestions-remove",
      value: "suggestions-value",
    },
    S = ".suggestions",
    w = "\\s\"'~\\*\\.,:\\|\\[\\]\\(\\)\\{\\}<>â„–",
    C = new RegExp("[" + w + "]+", "g"),
    E = new RegExp("[\\-\\+\\\\\\?!@#$%^&]+", "g"),
    k = {
      escapeHtml: function (e) {
        var t = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "/": "&#x2F;",
        };
        return (
          e &&
            m.each(t, function (t, n) {
              e = e.replace(new RegExp(n, "g"), t);
            }),
          e
        );
      },
      escapeRegExChars: function (e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      },
      formatToken: function (e) {
        return e && e.toLowerCase().replace(/[Ñ‘Ð]/g, "Ðµ");
      },
      getWordExtractorRegExp: function () {
        return new RegExp("([^" + w + "]*)([" + w + "]*)", "g");
      },
      normalize: function (e, t) {
        return k.split(e, t).join(" ");
      },
      padEnd: function (e, t, n) {
        return String.prototype.padEnd
          ? e.padEnd(t, n)
          : ((t >>= 0),
            (n = String(void 0 !== n ? n : " ")),
            e.length > t
              ? String(e)
              : ((t -= e.length),
                t > n.length && (n += n.repeat(t / n.length)),
                String(e) + n.slice(0, t)));
      },
      split: function (e, t) {
        var n = e
            .toLowerCase()
            .replace("Ñ‘", "Ðµ")
            .replace(/(\d+)([Ð°-Ñ]{2,})/g, "$1 $2")
            .replace(/([Ð°-Ñ]+)(\d+)/g, "$1 $2"),
          i = m.compact(n.split(C));
        if (!i.length) return [];
        var s = i.pop(),
          o = m.minus(i, t);
        return o.push(s), o;
      },
      splitTokens: function (e) {
        var t = [];
        return (
          m.each(e, function (e, n) {
            var i = e.split(E);
            t = t.concat(m.compact(i));
          }),
          t
        );
      },
      stringEncloses: function (e, t) {
        return (
          e.length > t.length && -1 !== e.toLowerCase().indexOf(t.toLowerCase())
        );
      },
      tokenize: function (e, t) {
        var n = m.compact(k.formatToken(e).split(C)),
          i = m.minus(n, t),
          s = m.minus(n, i);
        return (n = k.withSubTokens(i.concat(s)));
      },
      withSubTokens: function (e) {
        var t = [];
        return (
          m.each(e, function (e, n) {
            var i = e.split(E);
            t.push(e), i.length > 1 && (t = t.concat(m.compact(i)));
          }),
          t
        );
      },
    },
    B = {
      Deferred: function () {
        return e.Deferred();
      },
      ajax: function (t) {
        return e.ajax(t);
      },
      extend: function () {
        return e.extend.apply(null, arguments);
      },
      isJqObject: function (t) {
        return t instanceof e;
      },
      param: function (t) {
        return e.param(t);
      },
      proxy: function (t, n) {
        return e.proxy(t, n);
      },
      select: function (t) {
        return e(t);
      },
      supportsCors: function () {
        return e.support.cors;
      },
    },
    T = {
      getDefaultType: function () {
        return B.supportsCors() ? "POST" : "GET";
      },
      getDefaultContentType: function () {
        return B.supportsCors()
          ? "application/json"
          : "application/x-www-form-urlencoded";
      },
      fixURLProtocol: function (e) {
        return B.supportsCors() ? e : e.replace(/^https?:/, location.protocol);
      },
      addUrlParams: function (e, t) {
        return e + (/\?/.test(e) ? "&" : "?") + B.param(t);
      },
      serialize: function (e) {
        return B.supportsCors()
          ? JSON.stringify(e, function (e, t) {
              return null === t ? void 0 : t;
            })
          : ((e = v.compact(e)), B.param(e, !0));
      },
    },
    j = (function () {
      var e = 0;
      return function (t) {
        return (t || "") + ++e;
      };
    })(),
    V = {
      escapeRegExChars: k.escapeRegExChars,
      escapeHtml: k.escapeHtml,
      formatToken: k.formatToken,
      normalize: k.normalize,
      reWordExtractor: k.getWordExtractorRegExp,
      stringEncloses: k.stringEncloses,
      addUrlParams: T.addUrlParams,
      getDefaultContentType: T.getDefaultContentType,
      getDefaultType: T.getDefaultType,
      fixURLProtocol: T.fixURLProtocol,
      serialize: T.serialize,
      arrayMinus: m.minus,
      arrayMinusWithPartialMatching: m.minusWithPartialMatching,
      arraysIntersection: m.intersect,
      compact: m.compact,
      each: m.each,
      makeArray: m.makeArray,
      slice: m.slice,
      delay: _.delay,
      areSame: v.areSame,
      compactObject: v.compact,
      getDeepValue: v.getDeepValue,
      fieldsNotEmpty: v.fieldsAreNotEmpty,
      indexBy: v.indexObjectsById,
      isArray: y.isArray,
      isEmptyObject: y.isEmptyObject,
      isFunction: y.isFunction,
      isPlainObject: y.isPlainObject,
      uniqueId: j,
    },
    L = {
      $helpers: null,
      autoSelectFirst: !1,
      containerClass: "suggestions-suggestions",
      count: 5,
      deferRequestBy: 100,
      enrichmentEnabled: !0,
      formatResult: null,
      formatSelected: null,
      headers: null,
      hint:
        "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð²Ð°Ñ€Ð¸Ð°Ð½Ñ‚ Ð¸Ð»Ð¸ Ð¿Ñ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚Ðµ Ð²Ð²Ð¾Ð´",
      initializeInterval: 100,
      language: null,
      minChars: 1,
      mobileWidth: 600,
      noCache: !1,
      noSuggestionsHint: null,
      onInvalidateSelection: null,
      onSearchComplete: e.noop,
      onSearchError: e.noop,
      onSearchStart: e.noop,
      onSelect: null,
      onSelectNothing: null,
      onSuggestionsFetch: null,
      paramName: "query",
      params: {},
      preventBadQueries: !1,
      requestMode: "suggest",
      scrollOnFocus: !1,
      serviceUrl: "https://suggestions.dadata.ru/suggestions/api/4_1/rs",
      tabDisabled: !1,
      timeout: 3e3,
      triggerSelectOnBlur: !0,
      triggerSelectOnEnter: !0,
      triggerSelectOnSpace: !1,
      type: null,
      url: null,
    },
    O = (function (e) {
      return function (t) {
        if (0 === t.length) return !1;
        if (1 === t.length) return !0;
        var n = e(t[0].value);
        return (
          0 ===
          t.filter(function (t) {
            return 0 !== e(t.value).indexOf(n);
          }).length
        );
      };
    })(function (e) {
      return e;
    }),
    F = {
      matchByNormalizedQuery: function (e) {
        return function (t, n) {
          var i = k.normalize(t, e),
            s = [];
          return (
            m.each(n, function (n, o) {
              var r = n.value.toLowerCase();
              return (
                !k.stringEncloses(t, r) &&
                !(r.indexOf(i) > 0) &&
                void (i === k.normalize(r, e) && s.push(o))
              );
            }),
            1 === s.length ? s[0] : -1
          );
        };
      },
      matchByWords: function (e) {
        return t(e, O);
      },
      matchByWordsAddress: function (e) {
        return t(e, O);
      },
      matchByFields: function (e) {
        return function (t, n) {
          var i = k.splitTokens(k.split(t)),
            s = [];
          return 1 === n.length &&
            (e &&
              m.each(e, function (e, t) {
                var i = v.getDeepValue(n[0], t),
                  o = i && k.splitTokens(k.split(i, e));
                o && o.length && (s = s.concat(o));
              }),
            0 === m.minusWithPartialMatching(i, s).length)
            ? 0
            : -1;
        };
      },
    },
    P = [
      "Ð°Ð¾",
      "Ð°Ð¾Ð±Ð»",
      "Ð´Ð¾Ð¼",
      "Ñ€ÐµÑÐ¿",
      "Ð°/Ñ",
      "Ð°Ð°Ð»",
      "Ð°Ð²Ñ‚Ð¾Ð´Ð¾Ñ€Ð¾Ð³Ð°",
      "Ð°Ð»Ð»ÐµÑ",
      "Ð°Ñ€Ð±Ð°Ð½",
      "Ð°ÑƒÐ»",
      "Ð±-Ñ€",
      "Ð±ÐµÑ€ÐµÐ³",
      "Ð±ÑƒÐ³Ð¾Ñ€",
      "Ð²Ð°Ð»",
      "Ð²Ð»",
      "Ð²Ð¾Ð»Ð¾ÑÑ‚ÑŒ",
      "Ð²ÑŠÐµÐ·Ð´",
      "Ð²Ñ‹ÑÐµÐ»",
      "Ð³",
      "Ð³Ð¾Ñ€Ð¾Ð´Ð¾Ðº",
      "Ð³ÑÐº",
      "Ð´",
      "Ð´Ð²Ð»Ð´",
      "Ð´Ð½Ð¿",
      "Ð´Ð¾Ñ€",
      "Ð´Ð¿",
      "Ð¶/Ð´_Ð±ÑƒÐ´ÐºÐ°",
      "Ð¶/Ð´_ÐºÐ°Ð·Ð°Ñ€Ð¼",
      "Ð¶/Ð´_Ð¾Ð¿",
      "Ð¶/Ð´_Ð¿Ð»Ð°Ñ‚Ñ„",
      "Ð¶/Ð´_Ð¿Ð¾ÑÑ‚",
      "Ð¶/Ð´_Ñ€Ð·Ð´",
      "Ð¶/Ð´_ÑÑ‚",
      "Ð¶Ð¸Ð»Ð·Ð¾Ð½Ð°",
      "Ð¶Ð¸Ð»Ñ€Ð°Ð¹Ð¾Ð½",
      "Ð¶Ñ‚",
      "Ð·Ð°ÐµÐ·Ð´",
      "Ð·Ð°Ð¸Ð¼ÐºÐ°",
      "Ð·Ð¾Ð½Ð°",
      "Ðº",
      "ÐºÐ°Ð·Ð°Ñ€Ð¼Ð°",
      "ÐºÐ°Ð½Ð°Ð»",
      "ÐºÐ²",
      "ÐºÐ²-Ð»",
      "ÐºÐ¼",
      "ÐºÐ¾Ð»ÑŒÑ†Ð¾",
      "ÐºÐ¾Ð¼Ð½",
      "ÐºÐ¾Ñ€Ð´Ð¾Ð½",
      "ÐºÐ¾ÑÐ°",
      "ÐºÐ¿",
      "ÐºÑ€Ð°Ð¹",
      "Ð»Ð¸Ð½Ð¸Ñ",
      "Ð»Ð¿Ñ…",
      "Ð¼",
      "Ð¼Ð°ÑÑÐ¸Ð²",
      "Ð¼ÐµÑÑ‚Ð½Ð¾ÑÑ‚ÑŒ",
      "Ð¼ÐºÑ€",
      "Ð¼Ð¾ÑÑ‚",
      "Ð½/Ð¿",
      "Ð½Ð°Ð±",
      "Ð½Ð¿",
      "Ð¾Ð±Ð»",
      "Ð¾ÐºÑ€ÑƒÐ³",
      "Ð¾ÑÑ‚Ñ€Ð¾Ð²",
      "Ð¾Ñ„",
      "Ð¿",
      "Ð¿/Ð¾",
      "Ð¿/Ñ€",
      "Ð¿/ÑÑ‚",
      "Ð¿Ð°Ñ€Ðº",
      "Ð¿Ð³Ñ‚",
      "Ð¿ÐµÑ€",
      "Ð¿ÐµÑ€ÐµÐµÐ·Ð´",
      "Ð¿Ð»",
      "Ð¿Ð»-ÐºÐ°",
      "Ð¿Ð»Ð°Ñ‚Ñ„",
      "Ð¿Ð¾Ð³Ð¾ÑÑ‚",
      "Ð¿Ð¾Ð»ÑƒÑÑ‚Ð°Ð½Ð¾Ðº",
      "Ð¿Ð¾Ñ‡Ð¸Ð½Ð¾Ðº",
      "Ð¿Ñ€-ÐºÑ‚",
      "Ð¿Ñ€Ð¾ÐµÐ·Ð´",
      "Ð¿Ñ€Ð¾Ð¼Ð·Ð¾Ð½Ð°",
      "Ð¿Ñ€Ð¾ÑÐµÐº",
      "Ð¿Ñ€Ð¾ÑÐµÐºÐ°",
      "Ð¿Ñ€Ð¾ÑÐµÐ»Ð¾Ðº",
      "Ð¿Ñ€Ð¾Ñ‚Ð¾Ðº",
      "Ð¿Ñ€Ð¾Ñ‚Ð¾ÐºÐ°",
      "Ð¿Ñ€Ð¾ÑƒÐ»Ð¾Ðº",
      "Ñ€-Ð½",
      "Ñ€Ð·Ð´",
      "Ñ€Ð¾ÑÑÐ¸Ñ",
      "Ñ€Ð¿",
      "Ñ€ÑÐ´Ñ‹",
      "Ñ",
      "Ñ/Ð°",
      "Ñ/Ð¼Ð¾",
      "Ñ/Ð¾",
      "Ñ/Ð¿",
      "Ñ/Ñ",
      "ÑÐ°Ð´",
      "ÑÐºÐ²ÐµÑ€",
      "ÑÐ»",
      "ÑÐ½Ñ‚",
      "ÑÐ¿ÑƒÑÐº",
      "ÑÑ‚",
      "ÑÑ‚-Ñ†Ð°",
      "ÑÑ‚Ñ€",
      "Ñ‚ÐµÑ€",
      "Ñ‚Ñ€Ð°ÐºÑ‚",
      "Ñ‚ÑƒÐ¿",
      "Ñƒ",
      "ÑƒÐ»",
      "ÑƒÑ‡-Ðº",
      "Ñ„/Ñ…",
      "Ñ„ÐµÑ€Ð¼Ð°",
      "Ñ…",
      "Ñˆ",
      "Ð±ÑƒÐ»ÑŒÐ²Ð°Ñ€",
      "Ð²Ð»Ð°Ð´ÐµÐ½Ð¸Ðµ",
      "Ð²Ñ‹ÑÐµÐ»ÐºÐ¸",
      "Ð³Ð°Ñ€Ð°Ð¶Ð½Ð¾-ÑÑ‚Ñ€Ð¾Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ð¹",
      "Ð³Ð¾Ñ€Ð¾Ð´",
      "Ð´ÐµÑ€ÐµÐ²Ð½Ñ",
      "Ð´Ð¾Ð¼Ð¾Ð²Ð»Ð°Ð´ÐµÐ½Ð¸Ðµ",
      "Ð´Ð¾Ñ€Ð¾Ð³Ð°",
      "ÐºÐ²Ð°Ñ€Ñ‚Ð°Ð»",
      "ÐºÐ¸Ð»Ð¾Ð¼ÐµÑ‚Ñ€",
      "ÐºÐ¾Ð¼Ð½Ð°Ñ‚Ð°",
      "ÐºÐ¾Ñ€Ð¿ÑƒÑ",
      "Ð»Ð¸Ñ‚ÐµÑ€",
      "Ð»ÐµÑÐ¿Ñ€Ð¾Ð¼Ñ…Ð¾Ð·",
      "Ð¼ÐµÑÑ‚ÐµÑ‡ÐºÐ¾",
      "Ð¼Ð¸ÐºÑ€Ð¾Ñ€Ð°Ð¹Ð¾Ð½",
      "Ð½Ð°Ð±ÐµÑ€ÐµÐ¶Ð½Ð°Ñ",
      "Ð¾Ð±Ð»Ð°ÑÑ‚ÑŒ",
      "Ð¿ÐµÑ€ÐµÑƒÐ»Ð¾Ðº",
      "Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ð°",
      "Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÐºÐ°",
      "Ð¿Ð»Ð¾Ñ‰Ð°Ð´ÑŒ",
      "Ð¿Ð¾ÑÐµÐ»ÐµÐ½Ð¸Ðµ",
      "Ð¿Ð¾ÑÐµÐ»Ð¾Ðº",
      "Ð¿Ñ€Ð¾ÑÐ¿ÐµÐºÑ‚",
      "Ñ€Ð°Ð·ÑŠÐµÐ·Ð´",
      "Ñ€Ð°Ð¹Ð¾Ð½",
      "Ñ€ÐµÑÐ¿ÑƒÐ±Ð»Ð¸ÐºÐ°",
      "ÑÐµÐ»Ð¾",
      "ÑÐµÐ»ÑŒÑÐ¾Ð²ÐµÑ‚",
      "ÑÐ»Ð¾Ð±Ð¾Ð´Ð°",
      "ÑÐ¾Ð¾Ñ€ÑƒÐ¶ÐµÐ½Ð¸Ðµ",
      "ÑÑ‚Ð°Ð½Ð¸Ñ†Ð°",
      "ÑÑ‚Ð°Ð½Ñ†Ð¸Ñ",
      "ÑÑ‚Ñ€Ð¾ÐµÐ½Ð¸Ðµ",
      "Ñ‚ÐµÑ€Ñ€Ð¸Ñ‚Ð¾Ñ€Ð¸Ñ",
      "Ñ‚ÑƒÐ¿Ð¸Ðº",
      "ÑƒÐ»Ð¸Ñ†Ð°",
      "ÑƒÐ»ÑƒÑ",
      "ÑƒÑ‡Ð°ÑÑ‚Ð¾Ðº",
      "Ñ…ÑƒÑ‚Ð¾Ñ€",
      "ÑˆÐ¾ÑÑÐµ",
    ],
    D = [
      { id: "kladr_id", fields: ["kladr_id"], forBounds: !1, forLocations: !0 },
      {
        id: "postal_code",
        fields: ["postal_code"],
        forBounds: !1,
        forLocations: !0,
      },
      {
        id: "country_iso_code",
        fields: ["country_iso_code"],
        forBounds: !1,
        forLocations: !0,
      },
      {
        id: "country",
        fields: ["country"],
        forBounds: !0,
        forLocations: !0,
        kladrFormat: { digits: 0, zeros: 13 },
        fiasType: "country_iso_code",
      },
      {
        id: "region_iso_code",
        fields: ["region_iso_code"],
        forBounds: !1,
        forLocations: !0,
      },
      {
        id: "region_fias_id",
        fields: ["region_fias_id"],
        forBounds: !1,
        forLocations: !0,
      },
      {
        id: "region_type_full",
        fields: ["region_type_full"],
        forBounds: !1,
        forLocations: !0,
        kladrFormat: { digits: 2, zeros: 11 },
        fiasType: "region_fias_id",
      },
      {
        id: "region",
        fields: [
          "region",
          "region_type",
          "region_type_full",
          "region_with_type",
        ],
        forBounds: !0,
        forLocations: !0,
        kladrFormat: { digits: 2, zeros: 11 },
        fiasType: "region_fias_id",
      },
      {
        id: "area_fias_id",
        fields: ["area_fias_id"],
        forBounds: !1,
        forLocations: !0,
      },
      {
        id: "area_type_full",
        fields: ["area_type_full"],
        forBounds: !1,
        forLocations: !0,
        kladrFormat: { digits: 5, zeros: 8 },
        fiasType: "area_fias_id",
      },
      {
        id: "area",
        fields: ["area", "area_type", "area_type_full", "area_with_type"],
        forBounds: !0,
        forLocations: !0,
        kladrFormat: { digits: 5, zeros: 8 },
        fiasType: "area_fias_id",
      },
      {
        id: "city_fias_id",
        fields: ["city_fias_id"],
        forBounds: !1,
        forLocations: !0,
      },
      {
        id: "city_type_full",
        fields: ["city_type_full"],
        forBounds: !1,
        forLocations: !0,
        kladrFormat: { digits: 8, zeros: 5 },
        fiasType: "city_fias_id",
      },
      {
        id: "city",
        fields: ["city", "city_type", "city_type_full", "city_with_type"],
        forBounds: !0,
        forLocations: !0,
        kladrFormat: { digits: 8, zeros: 5 },
        fiasType: "city_fias_id",
      },
      {
        id: "city_district_fias_id",
        fields: ["city_district_fias_id"],
        forBounds: !1,
        forLocations: !0,
      },
      {
        id: "city_district_type_full",
        fields: ["city_district_type_full"],
        forBounds: !1,
        forLocations: !0,
        kladrFormat: { digits: 11, zeros: 2 },
        fiasType: "city_district_fias_id",
      },
      {
        id: "city_district",
        fields: [
          "city_district",
          "city_district_type",
          "city_district_type_full",
          "city_district_with_type",
        ],
        forBounds: !0,
        forLocations: !0,
        kladrFormat: { digits: 11, zeros: 2 },
        fiasType: "city_district_fias_id",
      },
      {
        id: "settlement_fias_id",
        fields: ["settlement_fias_id"],
        forBounds: !1,
        forLocations: !0,
      },
      {
        id: "settlement_type_full",
        fields: ["settlement_type_full"],
        forBounds: !1,
        forLocations: !0,
        kladrFormat: { digits: 11, zeros: 2 },
        fiasType: "settlement_fias_id",
      },
      {
        id: "settlement",
        fields: [
          "settlement",
          "settlement_type",
          "settlement_type_full",
          "settlement_with_type",
        ],
        forBounds: !0,
        forLocations: !0,
        kladrFormat: { digits: 11, zeros: 2 },
        fiasType: "settlement_fias_id",
      },
      {
        id: "street_fias_id",
        fields: ["street_fias_id"],
        forBounds: !1,
        forLocations: !0,
      },
      {
        id: "street_type_full",
        fields: ["street_type_full"],
        forBounds: !1,
        forLocations: !0,
        kladrFormat: { digits: 15, zeros: 2 },
        fiasType: "street_fias_id",
      },
      {
        id: "street",
        fields: [
          "street",
          "street_type",
          "street_type_full",
          "street_with_type",
        ],
        forBounds: !0,
        forLocations: !0,
        kladrFormat: { digits: 15, zeros: 2 },
        fiasType: "street_fias_id",
      },
      {
        id: "house",
        fields: [
          "house",
          "house_type",
          "house_type_full",
          "block",
          "block_type",
        ],
        forBounds: !0,
        forLocations: !1,
        kladrFormat: { digits: 19 },
      },
    ],
    I = {
      urlSuffix: "address",
      noSuggestionsHint: "ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ñ‹Ð¹ Ð°Ð´Ñ€ÐµÑ",
      matchers: [F.matchByNormalizedQuery(P), F.matchByWordsAddress(P)],
      dataComponents: D,
      dataComponentsById: v.indexObjectsById(D, "id", "index"),
      unformattableTokens: P,
      enrichmentEnabled: !0,
      enrichmentMethod: "suggest",
      enrichmentParams: {
        count: 1,
        locations: null,
        locations_boost: null,
        from_bound: null,
        to_bound: null,
      },
      getEnrichmentQuery: function (e) {
        return e.unrestricted_value;
      },
      geoEnabled: !0,
      isDataComplete: function (e) {
        var t = [this.bounds.to || "flat"],
          n = e.data;
        return !y.isPlainObject(n) || v.fieldsAreNotEmpty(n, t);
      },
      composeValue: function (e, t) {
        var n = e.country,
          i =
            e.region_with_type ||
            m.compact([e.region, e.region_type]).join(" ") ||
            e.region_type_full,
          s =
            e.area_with_type ||
            m.compact([e.area_type, e.area]).join(" ") ||
            e.area_type_full,
          o =
            e.city_with_type ||
            m.compact([e.city_type, e.city]).join(" ") ||
            e.city_type_full,
          r =
            e.settlement_with_type ||
            m.compact([e.settlement_type, e.settlement]).join(" ") ||
            e.settlement_type_full,
          a =
            e.city_district_with_type ||
            m.compact([e.city_district_type, e.city_district]).join(" ") ||
            e.city_district_type_full,
          u =
            e.street_with_type ||
            m.compact([e.street_type, e.street]).join(" ") ||
            e.street_type_full,
          l = m
            .compact([e.house_type, e.house, e.block_type, e.block])
            .join(" "),
          c = m.compact([e.flat_type, e.flat]).join(" "),
          d = e.postal_box && "Ð°/Ñ " + e.postal_box;
        return (
          i === o && (i = ""),
          (t && t.saveCityDistrict) ||
            (t && t.excludeCityDistrict
              ? (a = "")
              : a && !e.city_district_fias_id && (a = "")),
          m.compact([n, i, s, o, a, r, u, l, c, d]).join(", ")
        );
      },
      formatResult: (function () {
        var e = [],
          t = !1;
        return (
          D.forEach(function (n) {
            t && e.push(n.id), "city_district" === n.id && (t = !0);
          }),
          function (t, n, i, s) {
            var o,
              r,
              a,
              u = this,
              l = i.data && i.data.city_district_with_type,
              c = s && s.unformattableTokens,
              d = i.data && i.data.history_values;
            return (
              d &&
                d.length > 0 &&
                ((o = k.tokenize(n, c)),
                (r = this.type.findUnusedTokens(o, t)),
                (a = this.type.getFormattedHistoryValues(r, d)) && (t += a)),
              (t = u.highlightMatches(t, n, i, s)),
              (t = u.wrapFormattedValue(t, i)),
              l &&
                (!u.bounds.own.length || u.bounds.own.indexOf("street") >= 0) &&
                !y.isEmptyObject(u.copyDataComponents(i.data, e)) &&
                (t +=
                  '<div class="' +
                  u.classes.subtext +
                  '">' +
                  u.highlightMatches(l, n, i) +
                  "</div>"),
              t
            );
          }
        );
      })(),
      findUnusedTokens: function (e, t) {
        return e.filter(function (e) {
          return -1 === t.indexOf(e);
        });
      },
      getFormattedHistoryValues: function (e, t) {
        var n = [],
          i = "";
        return (
          t.forEach(function (t) {
            m.each(e, function (e) {
              if (t.toLowerCase().indexOf(e) >= 0) return n.push(t), !1;
            });
          }),
          n.length > 0 && (i = " (Ð±Ñ‹Ð²Ñˆ. " + n.join(", ") + ")"),
          i
        );
      },
      getSuggestionValue: function (e, t) {
        var n = null;
        return (
          t.hasSameValues
            ? (n = e.options.restrict_value
                ? this.getValueWithinConstraints(e, t.suggestion)
                : e.bounds.own.length
                ? this.getValueWithinBounds(e, t.suggestion)
                : t.suggestion.unrestricted_value)
            : t.hasBeenEnriched &&
              e.options.restrict_value &&
              (n = this.getValueWithinConstraints(e, t.suggestion, {
                excludeCityDistrict: !0,
              })),
          n
        );
      },
      getValueWithinConstraints: function (e, t, n) {
        return this.composeValue(e.getUnrestrictedData(t.data), n);
      },
      getValueWithinBounds: function (e, t, n) {
        var i = e.copyDataComponents(
          t.data,
          e.bounds.own.concat(["city_district_fias_id"])
        );
        return this.composeValue(i, n);
      },
    },
    q = [
      { id: "kladr_id", fields: ["kladr_id"], forBounds: !1, forLocations: !0 },
      {
        id: "region_fias_id",
        fields: ["region_fias_id"],
        forBounds: !1,
        forLocations: !0,
      },
      {
        id: "region_type_full",
        fields: ["region_type_full"],
        forBounds: !1,
        forLocations: !0,
        kladrFormat: { digits: 2, zeros: 11 },
        fiasType: "region_fias_id",
      },
      {
        id: "region",
        fields: [
          "region",
          "region_type",
          "region_type_full",
          "region_with_type",
        ],
        forBounds: !0,
        forLocations: !0,
        kladrFormat: { digits: 2, zeros: 11 },
        fiasType: "region_fias_id",
      },
      {
        id: "area_fias_id",
        fields: ["area_fias_id"],
        forBounds: !1,
        forLocations: !0,
      },
      {
        id: "area_type_full",
        fields: ["area_type_full"],
        forBounds: !1,
        forLocations: !0,
        kladrFormat: { digits: 5, zeros: 8 },
        fiasType: "area_fias_id",
      },
      {
        id: "area",
        fields: ["area", "area_type", "area_type_full", "area_with_type"],
        forBounds: !0,
        forLocations: !0,
        kladrFormat: { digits: 5, zeros: 8 },
        fiasType: "area_fias_id",
      },
      {
        id: "city_fias_id",
        fields: ["city_fias_id"],
        forBounds: !1,
        forLocations: !0,
      },
      {
        id: "city_type_full",
        fields: ["city_type_full"],
        forBounds: !1,
        forLocations: !0,
        kladrFormat: { digits: 8, zeros: 5 },
        fiasType: "city_fias_id",
      },
      {
        id: "city",
        fields: ["city", "city_type", "city_type_full", "city_with_type"],
        forBounds: !0,
        forLocations: !0,
        kladrFormat: { digits: 8, zeros: 5 },
        fiasType: "city_fias_id",
      },
      {
        id: "city_district_fias_id",
        fields: ["city_district_fias_id"],
        forBounds: !1,
        forLocations: !0,
      },
      {
        id: "city_district_type_full",
        fields: ["city_district_type_full"],
        forBounds: !1,
        forLocations: !0,
        kladrFormat: { digits: 11, zeros: 2 },
        fiasType: "city_district_fias_id",
      },
      {
        id: "city_district",
        fields: [
          "city_district",
          "city_district_type",
          "city_district_type_full",
          "city_district_with_type",
        ],
        forBounds: !0,
        forLocations: !0,
        kladrFormat: { digits: 11, zeros: 2 },
        fiasType: "city_district_fias_id",
      },
      {
        id: "settlement_fias_id",
        fields: ["settlement_fias_id"],
        forBounds: !1,
        forLocations: !0,
      },
      {
        id: "settlement_type_full",
        fields: ["settlement_type_full"],
        forBounds: !1,
        forLocations: !0,
        kladrFormat: { digits: 11, zeros: 2 },
        fiasType: "settlement_fias_id",
      },
      {
        id: "settlement",
        fields: [
          "settlement",
          "settlement_type",
          "settlement_type_full",
          "settlement_with_type",
        ],
        forBounds: !0,
        forLocations: !0,
        kladrFormat: { digits: 11, zeros: 2 },
        fiasType: "settlement_fias_id",
      },
      {
        id: "planning_structure_fias_id",
        fields: ["planning_structure_fias_id"],
        forBounds: !1,
        forLocations: !0,
      },
      {
        id: "planning_structure_type_full",
        fields: ["planning_structure_type_full"],
        forBounds: !1,
        forLocations: !0,
        kladrFormat: { digits: 15, zeros: 2 },
        fiasType: "planning_structure_fias_id",
      },
      {
        id: "planning_structure",
        fields: [
          "planning_structure",
          "planning_structure_type",
          "planning_structure_type_full",
          "planning_structure_with_type",
        ],
        forBounds: !0,
        forLocations: !0,
        kladrFormat: { digits: 15, zeros: 2 },
        fiasType: "planning_structure_fias_id",
      },
      {
        id: "street_fias_id",
        fields: ["street_fias_id"],
        forBounds: !1,
        forLocations: !0,
      },
      {
        id: "street_type_full",
        fields: ["street_type_full"],
        forBounds: !1,
        forLocations: !0,
        kladrFormat: { digits: 15, zeros: 2 },
        fiasType: "street_fias_id",
      },
      {
        id: "street",
        fields: [
          "street",
          "street_type",
          "street_type_full",
          "street_with_type",
        ],
        forBounds: !0,
        forLocations: !0,
        kladrFormat: { digits: 15, zeros: 2 },
        fiasType: "street_fias_id",
      },
      {
        id: "house",
        fields: ["house", "house_type", "block", "building_type", "building"],
        forBounds: !0,
        forLocations: !1,
        kladrFormat: { digits: 19 },
      },
    ],
    z = {
      urlSuffix: "fias",
      noSuggestionsHint: "ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ñ‹Ð¹ Ð°Ð´Ñ€ÐµÑ",
      matchers: [F.matchByNormalizedQuery(P), F.matchByWordsAddress(P)],
      dataComponents: q,
      dataComponentsById: v.indexObjectsById(q, "id", "index"),
      unformattableTokens: P,
      isDataComplete: function (e) {
        var t = [this.bounds.to || "house"],
          n = e.data;
        return !y.isPlainObject(n) || v.fieldsAreNotEmpty(n, t);
      },
      composeValue: function (e, t) {
        var n = e.country,
          i =
            e.region_with_type ||
            m.compact([e.region, e.region_type]).join(" ") ||
            e.region_type_full,
          s =
            e.area_with_type ||
            m.compact([e.area_type, e.area]).join(" ") ||
            e.area_type_full,
          o =
            e.city_with_type ||
            m.compact([e.city_type, e.city]).join(" ") ||
            e.city_type_full,
          r =
            e.settlement_with_type ||
            m.compact([e.settlement_type, e.settlement]).join(" ") ||
            e.settlement_type_full,
          a =
            e.city_district_with_type ||
            m.compact([e.city_district_type, e.city_district]).join(" ") ||
            e.city_district_type_full,
          u =
            e.planning_structure_with_type ||
            m
              .compact([e.planning_structure_type, e.planning_structure])
              .join(" ") ||
            e.planning_structure_type_full,
          l =
            e.street_with_type ||
            m.compact([e.street_type, e.street]).join(" ") ||
            e.street_type_full,
          c = m
            .compact([e.house_type, e.house, e.block_type, e.block])
            .join(" "),
          d = m.compact([e.flat_type, e.flat]).join(" "),
          f = e.postal_box && "Ð°/Ñ " + e.postal_box;
        return (
          i === o && (i = ""),
          (t && t.saveCityDistrict) ||
            (t && t.excludeCityDistrict
              ? (a = "")
              : a && !e.city_district_fias_id && (a = "")),
          m.compact([n, i, s, o, a, r, u, l, c, d, f]).join(", ")
        );
      },
      formatResult: (function () {
        return function (e, t, n, i) {
          var s = this;
          return (
            (e = s.highlightMatches(e, t, n, i)),
            (e = s.wrapFormattedValue(e, n))
          );
        };
      })(),
      getSuggestionValue: I.getSuggestionValue,
      getValueWithinConstraints: I.getValueWithinConstraints,
      getValueWithinBounds: I.getValueWithinBounds,
    },
    R = {
      urlSuffix: "fio",
      noSuggestionsHint: !1,
      matchers: [F.matchByNormalizedQuery(), F.matchByWords()],
      fieldNames: {
        surname: "Ñ„Ð°Ð¼Ð¸Ð»Ð¸Ñ",
        name: "Ð¸Ð¼Ñ",
        patronymic: "Ð¾Ñ‚Ñ‡ÐµÑÑ‚Ð²Ð¾",
      },
      isDataComplete: function (e) {
        var t,
          i = this,
          s = i.options.params,
          o = e.data;
        return (
          y.isFunction(s) && (s = s.call(i.element, e.value)),
          s && s.parts
            ? (t = s.parts.map(function (e) {
                return e.toLowerCase();
              }))
            : ((t = ["surname", "name"]),
              n(e, "surname") && t.push("patronymic")),
          v.fieldsAreNotEmpty(o, t)
        );
      },
      composeValue: function (e) {
        return m.compact([e.surname, e.name, e.patronymic]).join(" ");
      },
    },
    A = { LEGAL: [2, 2, 5, 1], INDIVIDUAL: [2, 2, 6, 2] },
    $ = {
      urlSuffix: "party",
      noSuggestionsHint: "ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð°Ñ Ð¾Ñ€Ð³Ð°Ð½Ð¸Ð·Ð°Ñ†Ð¸Ñ",
      matchers: [
        F.matchByFields({
          value: null,
          "data.address.value": P,
          "data.inn": null,
          "data.ogrn": null,
        }),
      ],
      dataComponents: D,
      enrichmentEnabled: !0,
      enrichmentMethod: "findById",
      enrichmentParams: { count: 1, locations_boost: null },
      getEnrichmentQuery: function (e) {
        return e.data.hid;
      },
      geoEnabled: !0,
      formatResult: function (e, t, n, o) {
        var r = this,
          a = r.type.formatResultInn.call(r, n, t),
          u = r.highlightMatches(v.getDeepValue(n.data, "ogrn"), t, n),
          l = i(a, u),
          c = r.highlightMatches(
            v.getDeepValue(n.data, "management.name"),
            t,
            n
          ),
          d = v.getDeepValue(n.data, "address.value") || "";
        return (
          r.isMobile && ((o || (o = {})).maxLength = 50),
          (e = s.call(r, e, v.getDeepValue(n.data, "name.latin"), t, n, o)),
          (e = r.wrapFormattedValue(e, n)),
          d &&
            ((d = d.replace(/^(\d{6}|Ð Ð¾ÑÑÐ¸Ñ),\s+/i, "")),
            (d = r.isMobile
              ? d.replace(
                  new RegExp("^([^" + w + "]+[" + w + "]+[^" + w + "]+).*"),
                  "$1"
                )
              : r.highlightMatches(d, t, n, { unformattableTokens: P }))),
          (l || d || c) &&
            (e +=
              '<div class="' +
              r.classes.subtext +
              '"><span class="' +
              r.classes.subtext_inline +
              '">' +
              (l || "") +
              "</span>" +
              (i(d, c) || "") +
              "</div>"),
          e
        );
      },
      formatResultInn: function (e, t) {
        var n,
          i,
          s = this,
          o = e.data && e.data.inn,
          r = A[e.data && e.data.type],
          a = /\d/;
        if (o)
          return (
            (i = s.highlightMatches(o, t, e)),
            r &&
              ((i = i.split("")),
              (n = r.map(function (e) {
                for (var t, n = ""; e && (t = i.shift()); )
                  (n += t), a.test(t) && e--;
                return n;
              })),
              (i =
                n.join(
                  '<span class="' + s.classes.subtext_delimiter + '"></span>'
                ) + i.join(""))),
            i
          );
      },
    },
    N = {
      urlSuffix: "email",
      noSuggestionsHint: !1,
      matchers: [F.matchByNormalizedQuery()],
      isQueryRequestable: function (e) {
        return this.options.suggest_local || e.indexOf("@") >= 0;
      },
    },
    M = {
      urlSuffix: "bank",
      noSuggestionsHint: "ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ñ‹Ð¹ Ð±Ð°Ð½Ðº",
      matchers: [
        F.matchByFields({ value: null, "data.bic": null, "data.swift": null }),
      ],
      dataComponents: D,
      geoEnabled: !0,
      formatResult: function (e, t, n, i) {
        var s = this,
          o = s.highlightMatches(v.getDeepValue(n.data, "bic"), t, n),
          r = v.getDeepValue(n.data, "address.value") || "";
        return (
          (e = s.highlightMatches(e, t, n, i)),
          (e = s.wrapFormattedValue(e, n)),
          r &&
            ((r = r.replace(/^\d{6}( Ð ÐžÐ¡Ð¡Ð˜Ð¯)?, /i, "")),
            (r = s.isMobile
              ? r.replace(
                  new RegExp("^([^" + w + "]+[" + w + "]+[^" + w + "]+).*"),
                  "$1"
                )
              : s.highlightMatches(r, t, n, { unformattableTokens: P }))),
          (o || r) &&
            (e +=
              '<div class="' +
              s.classes.subtext +
              '"><span class="' +
              s.classes.subtext_inline +
              '">' +
              o +
              "</span>" +
              r +
              "</div>"),
          e
        );
      },
      formatSelected: function (e) {
        return v.getDeepValue(e, "data.name.payment") || null;
      },
    },
    W = { NAME: R, ADDRESS: I, FIAS: z, PARTY: $, EMAIL: N, BANK: M };
  (W.get = function (e) {
    return W.hasOwnProperty(e) ? W[e] : new o(e);
  }),
    B.extend(L, { suggest_local: !0 });
  var U = {
      chains: {},
      on: function (e, t) {
        return this.get(e).push(t), this;
      },
      get: function (e) {
        var t = this.chains;
        return t[e] || (t[e] = []);
      },
    },
    H = {
      suggest: {
        defaultParams: {
          type: V.getDefaultType(),
          dataType: "json",
          contentType: V.getDefaultContentType(),
        },
        addTypeInUrl: !0,
      },
      "iplocate/address": {
        defaultParams: { type: "GET", dataType: "json" },
        addTypeInUrl: !1,
      },
      status: {
        defaultParams: { type: "GET", dataType: "json" },
        addTypeInUrl: !0,
      },
      findById: {
        defaultParams: {
          type: V.getDefaultType(),
          dataType: "json",
          contentType: V.getDefaultContentType(),
        },
        addTypeInUrl: !0,
      },
    },
    Q = {
      suggest: {
        method: "suggest",
        userSelect: !0,
        updateValue: !0,
        enrichmentEnabled: !0,
      },
      findById: {
        method: "findById",
        userSelect: !1,
        updateValue: !1,
        enrichmentEnabled: !1,
      },
    };
  r.prototype = {
    initialize: function () {
      var e = this;
      (e.uniqueId = V.uniqueId("i")),
        e.createWrapper(),
        e.notify("initialize"),
        e.bindWindowEvents(),
        e.setOptions(),
        e.inferIsMobile(),
        e.notify("ready");
    },
    deferInitialization: function () {
      var e,
        t = this,
        n = "mouseover focus keydown",
        i = function () {
          t.initializer.resolve(), t.enable();
        };
      t.initializer.always(function () {
        t.el.off(n, i), clearInterval(e);
      }),
        (t.disabled = !0),
        t.el.on(n, i),
        (e = setInterval(function () {
          t.el.is(":visible") && i();
        }, t.options.initializeInterval));
    },
    isInitialized: function () {
      return "resolved" === this.initializer.state();
    },
    dispose: function () {
      var e = this;
      e.initializer.reject(),
        e.notify("dispose"),
        e.el.removeData("suggestions").removeClass("suggestions-input"),
        e.unbindWindowEvents(),
        e.removeWrapper(),
        e.el.trigger("suggestions-dispose");
    },
    notify: function (t) {
      var n = this,
        i = V.slice(arguments, 1);
      return e.map(U.get(t), function (e) {
        return e.apply(n, i);
      });
    },
    createWrapper: function () {
      var t = this;
      (t.$wrapper = e('<div class="suggestions-wrapper"/>')),
        t.el.after(t.$wrapper),
        t.$wrapper.on("mousedown" + S, e.proxy(t.onMousedown, t));
    },
    removeWrapper: function () {
      var t = this;
      t.$wrapper && t.$wrapper.remove(), e(t.options.$helpers).off(S);
    },
    onMousedown: function (t) {
      var n = this;
      t.preventDefault(),
        (n.cancelBlur = !0),
        V.delay(function () {
          delete n.cancelBlur;
        }),
        0 == e(t.target).closest(".ui-menu-item").length &&
          V.delay(function () {
            e(document).one("mousedown", function (t) {
              var i = n.el.add(n.$wrapper).add(n.options.$helpers);
              n.options.floating && (i = i.add(n.$container)),
                (i = i.filter(function () {
                  return this === t.target || e.contains(this, t.target);
                })),
                i.length || n.hide();
            });
          });
    },
    bindWindowEvents: function () {
      var t = e.proxy(this.inferIsMobile, this);
      this.$viewport.on("resize" + S + this.uniqueId, t);
    },
    unbindWindowEvents: function () {
      this.$viewport.off("resize" + S + this.uniqueId);
    },
    scrollToTop: function () {
      var t = this,
        n = t.options.scrollOnFocus;
      !0 === n && (n = t.el),
        n instanceof e &&
          n.length > 0 &&
          e("body,html").animate({ scrollTop: n.offset().top }, "fast");
    },
    setOptions: function (t) {
      var n = this;
      e.extend(n.options, t),
        (n.type = W.get(n.options.type)),
        e.each({ requestMode: Q }, function (t, i) {
          if (((n[t] = i[n.options[t]]), !n[t]))
            throw (
              (n.disable(),
              "`" +
                t +
                "` option is incorrect! Must be one of: " +
                e
                  .map(i, function (e, t) {
                    return '"' + t + '"';
                  })
                  .join(", "))
            );
        }),
        e(n.options.$helpers)
          .off(S)
          .on("mousedown" + S, e.proxy(n.onMousedown, n)),
        n.isInitialized() && n.notify("setOptions");
    },
    inferIsMobile: function () {
      this.isMobile = this.$viewport.width() <= this.options.mobileWidth;
    },
    clearCache: function () {
      (this.cachedResponse = {}),
        (this.enrichmentCache = {}),
        (this.badQueries = []);
    },
    clear: function () {
      var e = this,
        t = e.selection;
      e.isInitialized() &&
        (e.clearCache(),
        (e.currentValue = ""),
        (e.selection = null),
        e.hide(),
        (e.suggestions = []),
        e.el.val(""),
        e.el.trigger("suggestions-clear"),
        e.notify("clear"),
        e.trigger("InvalidateSelection", t));
    },
    disable: function () {
      var e = this;
      (e.disabled = !0), e.abortRequest(), e.visible && e.hide();
    },
    enable: function () {
      this.disabled = !1;
    },
    isUnavailable: function () {
      return this.disabled;
    },
    update: function () {
      var e = this,
        t = e.el.val();
      e.isInitialized() &&
        ((e.currentValue = t),
        e.isQueryRequestable(t) ? e.updateSuggestions(t) : e.hide());
    },
    setSuggestion: function (t) {
      var n,
        i,
        s = this;
      e.isPlainObject(t) &&
        e.isPlainObject(t.data) &&
        ((t = e.extend(!0, {}, t)),
        s.isUnavailable() &&
          s.initializer &&
          "pending" === s.initializer.state() &&
          (s.initializer.resolve(), s.enable()),
        s.bounds.own.length &&
          (s.checkValueBounds(t),
          (n = s.copyDataComponents(t.data, s.bounds.all)),
          t.data.kladr_id &&
            (n.kladr_id = s.getBoundedKladrId(t.data.kladr_id, s.bounds.all)),
          (t.data = n)),
        (s.selection = t),
        (s.suggestions = [t]),
        (i = s.getSuggestionValue(t) || ""),
        (s.currentValue = i),
        s.el.val(i),
        s.abortRequest(),
        s.el.trigger("suggestions-set"));
    },
    fixData: function () {
      var t = this,
        n = t.extendedCurrentValue(),
        i = t.el.val(),
        s = e.Deferred();
      s
        .done(function (e) {
          t.selectSuggestion(e, 0, i, { hasBeenEnriched: !0 }),
            t.el.trigger("suggestions-fixdata", e);
        })
        .fail(function () {
          (t.selection = null), t.el.trigger("suggestions-fixdata");
        }),
        t.isQueryRequestable(n)
          ? ((t.currentValue = n),
            t
              .getSuggestions(n, { count: 1, from_bound: null, to_bound: null })
              .done(function (e) {
                var t = e[0];
                t ? s.resolve(t) : s.reject();
              })
              .fail(function () {
                s.reject();
              }))
          : s.reject();
    },
    extendedCurrentValue: function () {
      var t = this,
        n = t.getParentInstance(),
        i = n && n.extendedCurrentValue(),
        s = e.trim(t.el.val());
      return V.compact([i, s]).join(" ");
    },
    getAjaxParams: function (t, n) {
      var i = this,
        s = e.trim(i.options.token),
        o = e.trim(i.options.partner),
        a = i.options.serviceUrl,
        u = i.options.url,
        l = H[t],
        c = e.extend({ timeout: i.options.timeout }, l.defaultParams),
        d = {};
      return (
        u
          ? (a = u)
          : (/\/$/.test(a) || (a += "/"),
            (a += t),
            l.addTypeInUrl && (a += "/" + i.type.urlSuffix)),
        (a = V.fixURLProtocol(a)),
        e.support.cors
          ? (s && (d.Authorization = "Token " + s),
            o && (d["X-Partner"] = o),
            (d["X-Version"] = r.version),
            c.headers || (c.headers = {}),
            c.xhrFields || (c.xhrFields = {}),
            e.extend(c.headers, i.options.headers, d),
            (c.xhrFields.withCredentials = !1))
          : (s && (d.token = s),
            o && (d.partner = o),
            (d.version = r.version),
            (a = V.addUrlParams(a, d))),
        (c.url = a),
        e.extend(c, n)
      );
    },
    isQueryRequestable: function (e) {
      var t,
        n = this;
      return (
        (t = e.length >= n.options.minChars),
        t &&
          n.type.isQueryRequestable &&
          (t = n.type.isQueryRequestable.call(n, e)),
        t
      );
    },
    constructRequestParams: function (t, n) {
      var i = this,
        s = i.options,
        o = e.isFunction(s.params)
          ? s.params.call(i.element, t)
          : e.extend({}, s.params);
      return (
        i.type.constructRequestParams &&
          e.extend(o, i.type.constructRequestParams.call(i)),
        e.each(i.notify("requestParams"), function (t, n) {
          e.extend(o, n);
        }),
        (o[s.paramName] = t),
        e.isNumeric(s.count) && s.count > 0 && (o.count = s.count),
        s.language && (o.language = s.language),
        e.extend(o, n)
      );
    },
    updateSuggestions: function (e) {
      var t = this;
      t.fetchPhase = t.getSuggestions(e).done(function (n) {
        t.assignSuggestions(n, e);
      });
    },
    getSuggestions: function (t, n, i) {
      var s,
        o = this,
        r = o.options,
        a = i && i.noCallbacks,
        u = i && i.useEnrichmentCache,
        l = (i && i.method) || o.requestMode.method,
        c = o.constructRequestParams(t, n),
        d = e.param(c || {}),
        f = e.Deferred();
      return (
        (s = o.cachedResponse[d]),
        s && e.isArray(s.suggestions)
          ? f.resolve(s.suggestions)
          : o.isBadQuery(t)
          ? f.reject()
          : a || !1 !== r.onSearchStart.call(o.element, c)
          ? o
              .doGetSuggestions(c, l)
              .done(function (e) {
                o.processResponse(e) && t == o.currentValue
                  ? (r.noCache ||
                      (u
                        ? (o.enrichmentCache[t] = e.suggestions[0])
                        : (o.enrichResponse(e, t),
                          (o.cachedResponse[d] = e),
                          r.preventBadQueries &&
                            0 === e.suggestions.length &&
                            o.badQueries.push(t))),
                    f.resolve(e.suggestions))
                  : f.reject(),
                  a || r.onSearchComplete.call(o.element, t, e.suggestions);
              })
              .fail(function (e, n, i) {
                f.reject(),
                  a ||
                    "abort" === n ||
                    r.onSearchError.call(o.element, t, e, n, i);
              })
          : f.reject(),
        f
      );
    },
    doGetSuggestions: function (t, n) {
      var i = this,
        s = e.ajax(i.getAjaxParams(n, { data: V.serialize(t) }));
      return (
        i.abortRequest(),
        (i.currentRequest = s),
        i.notify("request"),
        s.always(function () {
          (i.currentRequest = null), i.notify("request");
        }),
        s
      );
    },
    isBadQuery: function (t) {
      if (!this.options.preventBadQueries) return !1;
      var n = !1;
      return (
        e.each(this.badQueries, function (e, i) {
          return !(n = 0 === t.indexOf(i));
        }),
        n
      );
    },
    abortRequest: function () {
      var e = this;
      e.currentRequest && e.currentRequest.abort();
    },
    processResponse: function (t) {
      var n,
        i = this;
      return (
        !(!t || !e.isArray(t.suggestions)) &&
        (i.verifySuggestionsFormat(t.suggestions),
        i.setUnrestrictedValues(t.suggestions),
        e.isFunction(i.options.onSuggestionsFetch) &&
          ((n = i.options.onSuggestionsFetch.call(i.element, t.suggestions)),
          e.isArray(n) && (t.suggestions = n)),
        !0)
      );
    },
    verifySuggestionsFormat: function (t) {
      "string" == typeof t[0] &&
        e.each(t, function (e, n) {
          t[e] = { value: n, data: null };
        });
    },
    getSuggestionValue: function (t, n) {
      var i,
        s = this,
        o = s.options.formatSelected || s.type.formatSelected,
        r = n && n.hasSameValues,
        a = n && n.hasBeenEnriched,
        u = null;
      return (
        e.isFunction(o) && (i = o.call(s, t)),
        "string" != typeof i &&
          ((i = t.value),
          s.type.getSuggestionValue &&
            null !==
              (u = s.type.getSuggestionValue(s, {
                suggestion: t,
                hasSameValues: r,
                hasBeenEnriched: a,
              })) &&
            (i = u)),
        i
      );
    },
    hasSameValues: function (t) {
      var n = !1;
      return (
        e.each(this.suggestions, function (e, i) {
          if (i.value === t.value && i !== t) return (n = !0), !1;
        }),
        n
      );
    },
    assignSuggestions: function (e, t) {
      var n = this;
      (n.suggestions = e), n.notify("assignSuggestions", t);
    },
    shouldRestrictValues: function () {
      var e = this;
      return (
        e.options.restrict_value &&
        e.constraints &&
        1 == Object.keys(e.constraints).length
      );
    },
    setUnrestrictedValues: function (t) {
      var n = this,
        i = n.shouldRestrictValues(),
        s = n.getFirstConstraintLabel();
      e.each(t, function (e, t) {
        t.unrestricted_value ||
          (t.unrestricted_value = i ? s + ", " + t.value : t.value);
      });
    },
    areSuggestionsSame: function (e, t) {
      return e && t && e.value === t.value && V.areSame(e.data, t.data);
    },
    getNoSuggestionsHint: function () {
      var e = this;
      return (
        !1 !== e.options.noSuggestionsHint &&
        (e.options.noSuggestionsHint || e.type.noSuggestionsHint)
      );
    },
  };
  var Z = {
    setupElement: function () {
      this.el
        .attr("autocomplete", "off")
        .attr("autocorrect", "off")
        .attr("autocapitalize", "off")
        .attr("spellcheck", "false")
        .addClass("suggestions-input")
        .css("box-sizing", "border-box");
    },
    bindElementEvents: function () {
      var t = this;
      t.el.on("keydown" + S, e.proxy(t.onElementKeyDown, t)),
        t.el.on(
          ["keyup" + S, "cut" + S, "paste" + S, "input" + S].join(" "),
          e.proxy(t.onElementKeyUp, t)
        ),
        t.el.on("blur" + S, e.proxy(t.onElementBlur, t)),
        t.el.on("focus" + S, e.proxy(t.onElementFocus, t));
    },
    unbindElementEvents: function () {
      this.el.off(S);
    },
    onElementBlur: function () {
      var e = this;
      if (e.cancelBlur) return void (e.cancelBlur = !1);
      e.options.triggerSelectOnBlur
        ? e.isUnavailable() ||
          e.selectCurrentValue({ noSpace: !0 }).always(function () {
            e.hide();
          })
        : e.hide(),
        e.fetchPhase.abort && e.fetchPhase.abort();
    },
    onElementFocus: function () {
      var t = this;
      t.cancelFocus || V.delay(e.proxy(t.completeOnFocus, t)),
        (t.cancelFocus = !1);
    },
    onElementKeyDown: function (e) {
      var t = this;
      if (!t.isUnavailable())
        if (t.visible) {
          switch (e.which) {
            case b.ESC:
              t.el.val(t.currentValue), t.hide(), t.abortRequest();
              break;
            case b.TAB:
              if (!1 === t.options.tabDisabled) return;
              break;
            case b.ENTER:
              t.options.triggerSelectOnEnter && t.selectCurrentValue();
              break;
            case b.SPACE:
              return void (
                t.options.triggerSelectOnSpace &&
                t.isCursorAtEnd() &&
                (e.preventDefault(),
                t
                  .selectCurrentValue({ continueSelecting: !0, dontEnrich: !0 })
                  .fail(function () {
                    (t.currentValue += " "),
                      t.el.val(t.currentValue),
                      t.proceedChangedValue();
                  }))
              );
            case b.UP:
              t.moveUp();
              break;
            case b.DOWN:
              t.moveDown();
              break;
            default:
              return;
          }
          e.stopImmediatePropagation(), e.preventDefault();
        } else
          switch (e.which) {
            case b.DOWN:
              t.suggest();
              break;
            case b.ENTER:
              t.options.triggerSelectOnEnter && t.triggerOnSelectNothing();
          }
    },
    onElementKeyUp: function (e) {
      var t = this;
      if (!t.isUnavailable()) {
        switch (e.which) {
          case b.UP:
          case b.DOWN:
          case b.ENTER:
            return;
        }
        clearTimeout(t.onChangeTimeout),
          t.inputPhase.reject(),
          t.currentValue !== t.el.val() && t.proceedChangedValue();
      }
    },
    proceedChangedValue: function () {
      var t = this;
      t.abortRequest(),
        (t.inputPhase = e.Deferred().done(e.proxy(t.onValueChange, t))),
        t.options.deferRequestBy > 0
          ? (t.onChangeTimeout = V.delay(function () {
              t.inputPhase.resolve();
            }, t.options.deferRequestBy))
          : t.inputPhase.resolve();
    },
    onValueChange: function () {
      var e,
        t = this;
      t.selection &&
        ((e = t.selection),
        (t.selection = null),
        t.trigger("InvalidateSelection", e)),
        (t.selectedIndex = -1),
        t.update(),
        t.notify("valueChange");
    },
    completeOnFocus: function () {
      var e = this;
      e.isUnavailable() ||
        (e.isElementFocused() &&
          (e.update(), e.isMobile && (e.setCursorAtEnd(), e.scrollToTop())));
    },
    isElementFocused: function () {
      return document.activeElement === this.element;
    },
    isElementDisabled: function () {
      return Boolean(
        this.element.getAttribute("disabled") ||
          this.element.getAttribute("readonly")
      );
    },
    isCursorAtEnd: function () {
      var e,
        t,
        n = this,
        i = n.el.val().length;
      try {
        if ("number" == typeof (e = n.element.selectionStart)) return e === i;
      } catch (e) {}
      return (
        !document.selection ||
        ((t = document.selection.createRange()),
        t.moveStart("character", -i),
        i === t.text.length)
      );
    },
    setCursorAtEnd: function () {
      var e = this.element;
      try {
        (e.selectionEnd = e.selectionStart = e.value.length),
          (e.scrollLeft = e.scrollWidth);
      } catch (t) {
        e.value = e.value;
      }
    },
  };
  e.extend(r.prototype, Z),
    U.on("initialize", Z.bindElementEvents).on(
      "dispose",
      Z.unbindElementEvents
    );
  var K = {};
  a();
  var G = {
    checkStatus: function () {
      function e(e) {
        V.isFunction(t.options.onSearchError) &&
          t.options.onSearchError.call(t.element, null, s, "error", e);
      }
      var t = this,
        n = (t.options.token && t.options.token.trim()) || "",
        i = t.options.type + n,
        s = K[i];
      s || (s = K[i] = B.ajax(t.getAjaxParams("status"))),
        s
          .done(function (n, i, s) {
            if (n.search) {
              var o = s.getResponseHeader("X-Plan");
              (n.plan = o), B.extend(t.status, n);
            } else e("Service Unavailable");
          })
          .fail(function () {
            e(s.statusText);
          });
    },
  };
  (r.resetTokens = a),
    B.extend(r.prototype, G),
    U.on("setOptions", G.checkStatus);
  var J,
    X = !0,
    Y = {
      checkLocation: function () {
        var t = this,
          n = t.options.geoLocation;
        t.type.geoEnabled &&
          n &&
          ((t.geoLocation = e.Deferred()),
          e.isPlainObject(n) || e.isArray(n)
            ? t.geoLocation.resolve(n)
            : (J || (J = e.ajax(t.getAjaxParams("iplocate/address"))),
              J.done(function (e) {
                var n = e && e.location && e.location.data;
                n && n.kladr_id
                  ? t.geoLocation.resolve({ kladr_id: n.kladr_id })
                  : t.geoLocation.reject();
              }).fail(function () {
                t.geoLocation.reject();
              })));
      },
      getGeoLocation: function () {
        return this.geoLocation;
      },
      constructParams: function () {
        var t = this,
          n = {};
        return (
          t.geoLocation &&
            e.isFunction(t.geoLocation.promise) &&
            "resolved" == t.geoLocation.state() &&
            t.geoLocation.done(function (t) {
              n.locations_boost = e.makeArray(t);
            }),
          n
        );
      },
    };
  "GET" != V.getDefaultType() &&
    (e.extend(L, { geoLocation: X }),
    e.extend(r, { resetLocation: u }),
    e.extend(r.prototype, { getGeoLocation: Y.getGeoLocation }),
    U.on("setOptions", Y.checkLocation).on("requestParams", Y.constructParams));
  var ee = {
    enrichSuggestion: function (t, n) {
      var i = this,
        s = e.Deferred();
      if (
        !i.options.enrichmentEnabled ||
        !i.type.enrichmentEnabled ||
        !i.requestMode.enrichmentEnabled ||
        (n && n.dontEnrich)
      )
        return s.resolve(t);
      if (t.data && null != t.data.qc) return s.resolve(t);
      i.disableDropdown();
      var o = i.type.getEnrichmentQuery(t),
        r = i.type.enrichmentParams,
        a = {
          noCallbacks: !0,
          useEnrichmentCache: !0,
          method: i.type.enrichmentMethod,
        };
      return (
        (i.currentValue = o),
        (i.enrichPhase = i
          .getSuggestions(o, r, a)
          .always(function () {
            i.enableDropdown();
          })
          .done(function (e) {
            var n = e && e[0];
            s.resolve(n || t, !!n);
          })
          .fail(function () {
            s.resolve(t);
          })),
        s
      );
    },
    enrichResponse: function (t, n) {
      var i = this,
        s = i.enrichmentCache[n];
      s &&
        e.each(t.suggestions, function (e, i) {
          if (i.value === n) return (t.suggestions[e] = s), !1;
        });
    },
  };
  e.extend(r.prototype, ee);
  var te = { width: "auto", floating: !1 },
    ne = {
      createContainer: function () {
        var t = this,
          n = "." + t.classes.suggestion,
          i = t.options,
          s = e("<div/>").addClass(i.containerClass).css({ display: "none" });
        (t.$container = s),
          s.on("click" + S, n, e.proxy(t.onSuggestionClick, t));
      },
      showContainer: function () {
        this.$container.appendTo(
          this.options.floating ? this.$body : this.$wrapper
        );
      },
      getContainer: function () {
        return this.$container.get(0);
      },
      removeContainer: function () {
        var e = this;
        e.options.floating && e.$container.remove();
      },
      setContainerOptions: function () {
        var t = this;
        t.$container.off("mousedown.suggestions"),
          t.options.floating &&
            t.$container.on("mousedown.suggestions", e.proxy(t.onMousedown, t));
      },
      onSuggestionClick: function (t) {
        var n,
          i = this,
          s = e(t.target);
        if (!i.dropdownDisabled) {
          for (
            i.cancelFocus = !0, i.el.focus();
            s.length && !(n = s.attr("data-index"));

          )
            s = s.closest("." + i.classes.suggestion);
          n && !isNaN(n) && i.select(+n);
        }
      },
      getSuggestionsItems: function () {
        return this.$container.children("." + this.classes.suggestion);
      },
      toggleDropdownEnabling: function (e) {
        (this.dropdownDisabled = !e), this.$container.attr("disabled", !e);
      },
      disableDropdown: function () {
        this.toggleDropdownEnabling(!1);
      },
      enableDropdown: function () {
        this.toggleDropdownEnabling(!0);
      },
      hasSuggestionsToChoose: function () {
        var t = this;
        return (
          t.suggestions.length > 1 ||
          (1 === t.suggestions.length &&
            (!t.selection ||
              e.trim(t.suggestions[0].value) !== e.trim(t.selection.value)))
        );
      },
      suggest: function () {
        var t = this,
          n = t.options,
          i = [];
        if (t.requestMode.userSelect) {
          if (t.hasSuggestionsToChoose())
            n.hint &&
              t.suggestions.length &&
              i.push(
                '<div class="' + t.classes.hint + '">' + n.hint + "</div>"
              ),
              (t.selectedIndex = -1),
              t.suggestions.forEach(function (e, n) {
                e == t.selection && (t.selectedIndex = n),
                  t.buildSuggestionHtml(e, n, i);
              });
          else {
            if (t.suggestions.length) return void t.hide();
            var s = t.getNoSuggestionsHint();
            if (!s) return void t.hide();
            i.push('<div class="' + t.classes.hint + '">' + s + "</div>");
          }
          i.push('<div class="' + x.promo + '"></div>'),
            i.push("</div>"),
            t.$container.html(i.join("")),
            n.autoSelectFirst &&
              -1 === t.selectedIndex &&
              (t.selectedIndex = 0),
            -1 !== t.selectedIndex &&
              t
                .getSuggestionsItems()
                .eq(t.selectedIndex)
                .addClass(t.classes.selected),
            e.isFunction(n.beforeRender) &&
              n.beforeRender.call(t.element, t.$container),
            t.$container.show(),
            (t.visible = !0);
        }
      },
      buildSuggestionHtml: function (e, t, n) {
        n.push(
          '<div class="' + this.classes.suggestion + '" data-index="' + t + '">'
        );
        var i =
          this.options.formatResult ||
          this.type.formatResult ||
          this.formatResult;
        n.push(
          i.call(this, e.value, this.currentValue, e, {
            unformattableTokens: this.type.unformattableTokens,
          })
        );
        var s = this.makeSuggestionLabel(this.suggestions, e);
        s &&
          n.push(
            '<span class="' +
              this.classes.subtext_label +
              '">' +
              V.escapeHtml(s) +
              "</span>"
          ),
          n.push("</div>");
      },
      wrapFormattedValue: function (e, t) {
        var n = this,
          i = V.getDeepValue(t.data, "state.status");
        return (
          '<span class="' +
          n.classes.value +
          '"' +
          (i ? ' data-suggestion-status="' + i + '"' : "") +
          ">" +
          e +
          "</span>"
        );
      },
      formatResult: function (e, t, n, i) {
        var s = this;
        return (e = s.highlightMatches(e, t, n, i)), s.wrapFormattedValue(e, n);
      },
      highlightMatches: function (t, n, i, s) {
        var o,
          r,
          a,
          u,
          d,
          f,
          p,
          g = this,
          h = [],
          y = s && s.unformattableTokens,
          m = s && s.maxLength,
          _ = V.reWordExtractor();
        if (!t) return "";
        for (
          o = k.tokenize(n, y),
            r = e.map(o, function (e) {
              return new RegExp(
                "^((.*)([\\-\\+\\\\\\?!@#$%^&]+))?(" +
                  V.escapeRegExChars(e) +
                  ")([^\\-\\+\\\\\\?!@#$%^&]*[\\-\\+\\\\\\?!@#$%^&]*)",
                "i"
              );
            });
          (a = _.exec(t)) && a[0];

        )
          (u = a[1]),
            h.push({
              text: u,
              hasUpperCase: u.toLowerCase() !== u,
              formatted: V.formatToken(u),
              matchable: !0,
            }),
            a[2] && h.push({ text: a[2] });
        for (d = 0; d < h.length; d++)
          (f = h[d]),
            !f.matchable ||
              f.matched ||
              (-1 !== e.inArray(f.formatted, y) && !f.hasUpperCase) ||
              e.each(r, function (e, t) {
                var n,
                  i = t.exec(f.formatted),
                  s = d + 1;
                if (i)
                  return (
                    (i = {
                      before: i[1] || "",
                      beforeText: i[2] || "",
                      beforeDelimiter: i[3] || "",
                      text: i[4] || "",
                      after: i[5] || "",
                    }),
                    i.before &&
                      (h.splice(
                        d,
                        0,
                        {
                          text: f.text.substr(0, i.beforeText.length),
                          formatted: i.beforeText,
                          matchable: !0,
                        },
                        { text: i.beforeDelimiter }
                      ),
                      (s += 2),
                      (n = i.before.length),
                      (f.text = f.text.substr(n)),
                      (f.formatted = f.formatted.substr(n)),
                      d--),
                    (n = i.text.length + i.after.length),
                    f.formatted.length > n &&
                      (h.splice(s, 0, {
                        text: f.text.substr(n),
                        formatted: f.formatted.substr(n),
                        matchable: !0,
                      }),
                      (f.text = f.text.substr(0, n)),
                      (f.formatted = f.formatted.substr(0, n))),
                    i.after &&
                      ((n = i.text.length),
                      h.splice(s, 0, {
                        text: f.text.substr(n),
                        formatted: f.formatted.substr(n),
                      }),
                      (f.text = f.text.substr(0, n)),
                      (f.formatted = f.formatted.substr(0, n))),
                    (f.matched = !0),
                    !1
                  );
              });
        if (m) {
          for (d = 0; d < h.length && m >= 0; d++)
            (f = h[d]),
              (m -= f.text.length) < 0 &&
                (f.text = f.text.substr(0, f.text.length + m) + "...");
          h.length = d;
        }
        return (p = l(h)), c(p, g.classes.nowrap);
      },
      makeSuggestionLabel: function (t, n) {
        var i,
          s,
          o = this,
          r = o.type.fieldNames,
          a = {},
          u = V.reWordExtractor(),
          l = [];
        if (
          r &&
          d(t, n) &&
          n.data &&
          (e.each(r, function (e) {
            var t = n.data[e];
            t && (a[e] = V.formatToken(t));
          }),
          !e.isEmptyObject(a))
        ) {
          for (; (i = u.exec(V.formatToken(n.value))) && (s = i[1]); )
            e.each(a, function (e, t) {
              if (t == s) return l.push(r[e]), delete a[e], !1;
            });
          if (l.length) return l.join(", ");
        }
      },
      hide: function () {
        var e = this;
        (e.visible = !1), (e.selectedIndex = -1), e.$container.hide().empty();
      },
      activate: function (e) {
        var t,
          n,
          i = this,
          s = i.classes.selected;
        return !i.dropdownDisabled &&
          ((n = i.getSuggestionsItems()),
          n.removeClass(s),
          (i.selectedIndex = e),
          -1 !== i.selectedIndex && n.length > i.selectedIndex)
          ? ((t = n.eq(i.selectedIndex)), t.addClass(s), t)
          : null;
      },
      deactivate: function (e) {
        var t = this;
        t.dropdownDisabled ||
          ((t.selectedIndex = -1),
          t.getSuggestionsItems().removeClass(t.classes.selected),
          e && t.el.val(t.currentValue));
      },
      moveUp: function () {
        var e = this;
        if (!e.dropdownDisabled)
          return -1 === e.selectedIndex
            ? void (
                e.suggestions.length && e.adjustScroll(e.suggestions.length - 1)
              )
            : 0 === e.selectedIndex
            ? void e.deactivate(!0)
            : void e.adjustScroll(e.selectedIndex - 1);
      },
      moveDown: function () {
        var e = this;
        if (!e.dropdownDisabled)
          return e.selectedIndex === e.suggestions.length - 1
            ? void e.deactivate(!0)
            : void e.adjustScroll(e.selectedIndex + 1);
      },
      adjustScroll: function (e) {
        var t,
          n,
          i,
          s = this,
          o = s.activate(e),
          r = s.$container.scrollTop();
        o &&
          o.length &&
          ((t = o.position().top),
          t < 0
            ? s.$container.scrollTop(r + t)
            : ((n = t + o.outerHeight()),
              (i = s.$container.innerHeight()),
              n > i && s.$container.scrollTop(r - i + n)),
          s.el.val(s.suggestions[e].value));
      },
    };
  e.extend(L, te),
    e.extend(r.prototype, ne),
    U.on("initialize", ne.createContainer)
      .on("dispose", ne.removeContainer)
      .on("setOptions", ne.setContainerOptions)
      .on("ready", ne.showContainer)
      .on("assignSuggestions", ne.suggest);
  var ie = { constraints: null, restrict_value: !1 },
    se = [
      "country_iso_code",
      "region_iso_code",
      "region_fias_id",
      "area_fias_id",
      "city_fias_id",
      "city_district_fias_id",
      "settlement_fias_id",
      "planning_structure_fias_id",
      "street_fias_id",
    ],
    oe = function (e, t) {
      var n,
        i,
        s = this,
        o = {};
      (s.instance = t),
        (s.fields = {}),
        (s.specificity = -1),
        y.isPlainObject(e) &&
          t.type.dataComponents &&
          m.each(t.type.dataComponents, function (t, n) {
            var i = t.id;
            t.forLocations &&
              e[i] &&
              ((s.fields[i] = e[i]), (s.specificity = n));
          }),
        (n = Object.keys(s.fields)),
        (i = m.intersect(n, se)),
        i.length
          ? (m.each(i, function (e, t) {
              o[e] = s.fields[e];
            }),
            (s.fields = o),
            (s.specificity = s.getFiasSpecificity(i)))
          : s.fields.kladr_id &&
            ((s.fields = { kladr_id: s.fields.kladr_id }),
            (s.significantKladr = p(s.fields.kladr_id)),
            (s.specificity = s.getKladrSpecificity(s.significantKladr)));
    };
  B.extend(oe.prototype, {
    getLabel: function () {
      return this.instance.type.composeValue(this.fields, {
        saveCityDistrict: !0,
      });
    },
    getFields: function () {
      return this.fields;
    },
    isValid: function () {
      return !y.isEmptyObject(this.fields);
    },
    getKladrSpecificity: function (e) {
      var t = -1,
        n = e.length;
      return (
        m.each(this.instance.type.dataComponents, function (e, i) {
          e.kladrFormat && n === e.kladrFormat.digits && (t = i);
        }),
        t
      );
    },
    getFiasSpecificity: function (e) {
      var t = -1;
      return (
        m.each(this.instance.type.dataComponents, function (n, i) {
          n.fiasType && e.indexOf(n.fiasType) > -1 && t < i && (t = i);
        }),
        t
      );
    },
    containsData: function (e) {
      var t = !0;
      return this.fields.kladr_id
        ? !!e.kladr_id && 0 === e.kladr_id.indexOf(this.significantKladr)
        : (m.each(this.fields, function (n, i) {
            return (t = !!e[i] && e[i].toLowerCase() === n.toLowerCase());
          }),
          t);
    },
  }),
    (r.ConstraintLocation = oe);
  var re = function (e, t) {
    (this.id = j("c")), (this.deletable = !!e.deletable), (this.instance = t);
    var n = m.makeArray(e && (e.locations || e.restrictions));
    (this.locations = n.map(function (e) {
      return new oe(e, t);
    })),
      (this.locations = this.locations.filter(function (e) {
        return e.isValid();
      })),
      (this.label = e.label),
      null == this.label &&
        t.type.composeValue &&
        (this.label = this.locations
          .map(function (e) {
            return e.getLabel();
          })
          .join(", "));
  };
  B.extend(re.prototype, {
    isValid: function () {
      return this.locations.length > 0;
    },
    getFields: function () {
      return this.locations.map(function (e) {
        return e.getFields();
      });
    },
  });
  var ae = {
    createConstraints: function () {
      this.constraints = {};
    },
    setupConstraints: function () {
      var e,
        t = this,
        n = t.options.constraints;
      if (!n) return void t.unbindFromParent();
      B.isJqObject(n) || "string" == typeof n || "number" == typeof n.nodeType
        ? ((e = B.select(n)),
          e.is(t.constraints) ||
            (t.unbindFromParent(),
            e.is(t.el) || ((t.constraints = e), t.bindToParent())))
        : (m.each(t.constraints, function (e, n) {
            t.removeConstraint(n);
          }),
          m.each(m.makeArray(n), function (e, n) {
            t.addConstraint(e);
          }));
    },
    filteredLocation: function (e) {
      var t = [],
        n = {};
      if (
        (m.each(this.type.dataComponents, function () {
          this.forLocations && t.push(this.id);
        }),
        y.isPlainObject(e) &&
          m.each(e, function (e, i) {
            e && t.indexOf(i) >= 0 && (n[i] = e);
          }),
        !y.isEmptyObject(n))
      )
        return n.kladr_id ? { kladr_id: n.kladr_id } : n;
    },
    addConstraint: function (e) {
      var t = this;
      (e = new re(e, t)), e.isValid() && (t.constraints[e.id] = e);
    },
    removeConstraint: function (e) {
      delete this.constraints[e];
    },
    constructConstraintsParams: function () {
      for (
        var e, t, n = this, i = [], s = n.constraints, o = {};
        B.isJqObject(s) &&
        (e = s.suggestions()) &&
        !(t = v.getDeepValue(e, "selection.data"));

      )
        s = e.constraints;
      return (
        B.isJqObject(s)
          ? (t = new oe(t, e).getFields()) &&
            (n.bounds.own.indexOf("city") > -1 && delete t.city_fias_id,
            (o.locations = [t]),
            (o.restrict_value = !0))
          : s &&
            (m.each(s, function (e, t) {
              i = i.concat(e.getFields());
            }),
            i.length &&
              ((o.locations = i),
              (o.restrict_value = n.options.restrict_value))),
        o
      );
    },
    getFirstConstraintLabel: function () {
      var e = this,
        t = y.isPlainObject(e.constraints) && Object.keys(e.constraints)[0];
      return t ? e.constraints[t].label : "";
    },
    bindToParent: function () {
      var e = this;
      e.constraints
        .on(
          [
            "suggestions-select." + e.uniqueId,
            "suggestions-invalidateselection." + e.uniqueId,
            "suggestions-clear." + e.uniqueId,
          ].join(" "),
          B.proxy(e.onParentSelectionChanged, e)
        )
        .on("suggestions-dispose." + e.uniqueId, B.proxy(e.onParentDispose, e));
    },
    unbindFromParent: function () {
      var e = this,
        t = e.constraints;
      B.isJqObject(t) && t.off("." + e.uniqueId);
    },
    onParentSelectionChanged: function (e, t, n) {
      ("suggestions-select" !== e.type || n) && this.clear();
    },
    onParentDispose: function (e) {
      this.unbindFromParent();
    },
    getParentInstance: function () {
      return B.isJqObject(this.constraints) && this.constraints.suggestions();
    },
    shareWithParent: function (e) {
      var t = this.getParentInstance();
      t &&
        t.type === this.type &&
        !f(e, t) &&
        (t.shareWithParent(e), t.setSuggestion(e));
    },
    getUnrestrictedData: function (e) {
      var t = this,
        n = [],
        i = {},
        s = -1;
      return (
        m.each(t.constraints, function (t, n) {
          m.each(t.locations, function (t, n) {
            t.containsData(e) && t.specificity > s && (s = t.specificity);
          });
        }),
        s >= 0
          ? (e.region_kladr_id &&
              e.region_kladr_id === e.city_kladr_id &&
              n.push.apply(n, t.type.dataComponentsById.city.fields),
            m.each(t.type.dataComponents.slice(0, s + 1), function (e, t) {
              n.push.apply(n, e.fields);
            }),
            m.each(e, function (e, t) {
              -1 === n.indexOf(t) && (i[t] = e);
            }))
          : (i = e),
        i
      );
    },
  };
  B.extend(L, ie),
    B.extend(r.prototype, ae),
    "GET" != T.getDefaultType() &&
      U.on("initialize", ae.createConstraints)
        .on("setOptions", ae.setupConstraints)
        .on("requestParams", ae.constructConstraintsParams)
        .on("dispose", ae.unbindFromParent);
  var ue = {
    proceedQuery: function (e) {
      var t = this;
      e.length >= t.options.minChars ? t.updateSuggestions(e) : t.hide();
    },
    selectCurrentValue: function (e) {
      var t = this,
        n = B.Deferred();
      return (
        t.inputPhase.resolve(),
        t.fetchPhase
          .done(function () {
            var i;
            t.selection && !t.visible
              ? n.reject()
              : ((i = t.findSuggestionIndex()),
                t.select(i, e),
                -1 === i ? n.reject() : n.resolve(i));
          })
          .fail(function () {
            n.reject();
          }),
        n
      );
    },
    selectFoundSuggestion: function () {
      var e = this;
      e.requestMode.userSelect || e.select(0);
    },
    findSuggestionIndex: function () {
      var e,
        t = this,
        n = t.selectedIndex;
      return (
        -1 === n &&
          (e = t.el.val().trim()) &&
          t.type.matchers.some(function (i) {
            return -1 !== (n = i(e, t.suggestions));
          }),
        n
      );
    },
    select: function (e, t) {
      var n,
        i = this,
        s = i.suggestions[e],
        o = t && t.continueSelecting,
        r = i.currentValue;
      if (!i.triggering.Select) {
        if (!s)
          return (
            o || i.selection || i.triggerOnSelectNothing(),
            void i.onSelectComplete(o)
          );
        (n = i.hasSameValues(s)),
          i.enrichSuggestion(s, t).done(function (s, o) {
            var a = B.extend({ hasBeenEnriched: o, hasSameValues: n }, t);
            i.selectSuggestion(s, e, r, a);
          });
      }
    },
    selectSuggestion: function (e, t, n, i) {
      var s = this,
        o = i.continueSelecting,
        r = !s.type.isDataComplete || s.type.isDataComplete.call(s, e),
        a = s.selection;
      s.triggering.Select ||
        (s.type.alwaysContinueSelecting && (o = !0),
        r && (o = !1),
        i.hasBeenEnriched &&
          s.suggestions[t] &&
          (s.suggestions[t].data = e.data),
        s.requestMode.updateValue &&
          (s.checkValueBounds(e),
          (s.currentValue = s.getSuggestionValue(e, i)),
          !s.currentValue || i.noSpace || r || (s.currentValue += " "),
          s.el.val(s.currentValue)),
        s.currentValue
          ? ((s.selection = e),
            s.areSuggestionsSame(e, a) ||
              s.trigger("Select", e, s.currentValue != n),
            s.requestMode.userSelect && s.onSelectComplete(o))
          : ((s.selection = null), s.triggerOnSelectNothing()),
        s.shareWithParent(e));
    },
    onSelectComplete: function (e) {
      var t = this;
      e
        ? ((t.selectedIndex = -1), t.updateSuggestions(t.currentValue))
        : t.hide();
    },
    triggerOnSelectNothing: function () {
      var e = this;
      e.triggering.SelectNothing || e.trigger("SelectNothing", e.currentValue);
    },
    trigger: function (e) {
      var t = this,
        n = V.slice(arguments, 1),
        i = t.options["on" + e];
      (t.triggering[e] = !0),
        V.isFunction(i) && i.apply(t.element, n),
        t.el.trigger.call(t.el, "suggestions-" + e.toLowerCase(), n),
        (t.triggering[e] = !1);
    },
  };
  B.extend(r.prototype, ue),
    U.on("assignSuggestions", ue.selectFoundSuggestion);
  var le = { bounds: null },
    ce = {
      setupBounds: function () {
        this.bounds = { from: null, to: null };
      },
      setBoundsOptions: function () {
        var t,
          n,
          i = this,
          s = [],
          o = e.trim(i.options.bounds).split("-"),
          r = o[0],
          a = o[o.length - 1],
          u = [],
          l = [];
        i.type.dataComponents &&
          e.each(i.type.dataComponents, function () {
            this.forBounds && s.push(this.id);
          }),
          -1 === e.inArray(r, s) && (r = null),
          (n = e.inArray(a, s)),
          (-1 !== n && n !== s.length - 1) || (a = null),
          (r || a) &&
            ((t = !r),
            e.each(s, function (e, n) {
              if ((n == r && (t = !0), l.push(n), t && u.push(n), n == a))
                return !1;
            })),
          (i.bounds.from = r),
          (i.bounds.to = a),
          (i.bounds.all = l),
          (i.bounds.own = u);
      },
      constructBoundsParams: function () {
        var e = this,
          t = {};
        return (
          e.bounds.from && (t.from_bound = { value: e.bounds.from }),
          e.bounds.to && (t.to_bound = { value: e.bounds.to }),
          t
        );
      },
      checkValueBounds: function (e) {
        var t,
          n = this;
        if (n.bounds.own.length && n.type.composeValue) {
          var i = n.bounds.own.slice(0);
          1 === i.length &&
            "city_district" === i[0] &&
            i.push("city_district_fias_id"),
            (t = n.copyDataComponents(e.data, i)),
            (e.value = n.type.composeValue(t));
        }
      },
      copyDataComponents: function (t, n) {
        var i = {},
          s = this.type.dataComponentsById;
        return (
          s &&
            e.each(n, function (n, o) {
              e.each(s[o].fields, function (e, n) {
                null != t[n] && (i[n] = t[n]);
              });
            }),
          i
        );
      },
      getBoundedKladrId: function (t, n) {
        var i,
          s = n[n.length - 1];
        return (
          e.each(this.type.dataComponents, function (e, t) {
            if (t.id === s) return (i = t.kladrFormat), !1;
          }),
          t.substr(0, i.digits) + new Array((i.zeros || 0) + 1).join("0")
        );
      },
    };
  e.extend(L, le),
    e.extend(r.prototype, ce),
    U.on("initialize", ce.setupBounds)
      .on("setOptions", ce.setBoundsOptions)
      .on("requestParams", ce.constructBoundsParams);
  var de = {
    selectByClass: function (e, t) {
      var n = "." + e;
      return t ? t.querySelector(n) : document.querySelector(n);
    },
    addClass: function (e, t) {
      var n = e.className.split(" ");
      -1 === n.indexOf(t) && n.push(t), (e.className = n.join(" "));
    },
    setStyle: function (e, t, n) {
      e.style[t] = n;
    },
    listenTo: function (e, t, n, i) {
      e.addEventListener(t, i, !1),
        n &&
          (eventsByNamespace[n] || (eventsByNamespace[n] = []),
          eventsByNamespace[n].push({ eventName: t, element: e, callback: i }));
    },
    stopListeningNamespace: function (e) {
      var t = eventsByNamespace[e];
      t &&
        t.forEach(function (e) {
          e.element.removeEventListener(e.eventName, e.callback, !1);
        });
    },
  };
  (g.prototype.show = function () {
    "FREE" === this.plan && this.element && (this.setStyles(), this.setHtml());
  }),
    (g.prototype.setStyles = function () {
      this.element.style.display = "block";
    }),
    (g.prototype.setHtml = function () {
      this.element.innerHTML =
        '<a target="_blank" tabindex="-1" href="https://dadata.ru/suggestions/?utm_source=dadata&utm_medium=module&utm_campaign=suggestions-jquery"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.55 38.92"><defs><style>.cls-1{fill:#cdcccc;}.cls-2{fill:#ef4741;}.cls-3{fill:#fff;}</style></defs><title>dadata-logo</title><path class="cls-1" d="M192.61,153.07H196v-3.15h-3.39Zm9.55-14.46v-2.45h-3v16.91h3.14V142.2a4.39,4.39,0,0,1,4.23-3.7h1.75v-2.69h-1.54C203.75,135.81,202.35,137.76,202.16,138.61Zm20.2-2.45v11.3a5,5,0,0,1-4.65,3.66,7.19,7.19,0,0,1-2-.23,2,2,0,0,1-1.12-.6,2.38,2.38,0,0,1-.44-.86,4.38,4.38,0,0,1-.1-1V136.16h-3.14v12.4a4.83,4.83,0,0,0,1.26,3.65q1.26,1.21,4.61,1.21c3.38,0,4.62-.91,5.56-2.34v2h3.14V136.16Z" transform="translate(-57.96 -122.27)"/><rect class="cls-2" width="131.91" height="38.92" rx="3" ry="3"/><path class="cls-3" d="M119.34,130.39h-9.18v22.68h10.23c3.84,0,10.18-.35,10.18-6.88v-8.91C130.56,130.74,123.18,130.39,119.34,130.39Zm5.77,15.2c0,3.27-2.38,3.6-5.09,3.6h-4.41V134.27H119c2.71,0,6.14.33,6.14,3.6Zm-48-15.2H68v22.68H78.18c3.84,0,10.18-.35,10.18-6.88v-8.91C88.36,130.74,81,130.39,77.14,130.39Zm5.77,15.2c0,3.27-2.38,3.6-5.09,3.6H73.41V134.27h3.36c2.71,0,6.14.33,6.14,3.6Zm74-14.32h-5.1V148a6.28,6.28,0,0,0,.4,2.36,4,4,0,0,0,1,1.54,4.56,4.56,0,0,0,1.57.88,8.16,8.16,0,0,0,1.85.42q.89.08,2.08.09a24.23,24.23,0,0,0,2.83-.17v-2.87h-1.82a3.08,3.08,0,0,1-2.31-.61,3.79,3.79,0,0,1-.52-2.36V139h4.65v-3.14h-4.65Zm21,5.68q-1.82-1.14-6.5-1.13h-5.92v.25l.73,2.9h5.19a5,5,0,0,1,2.5.5,2.37,2.37,0,0,1,.72,2v1.15H168.9q-3,0-4.12,1.17T163.62,148c0,2.21.37,3.14,1.12,3.84s2.2,1.22,4.48,1.22h7.06c1.76,0,3.45-.83,3.45-2.82v-8.81Q179.73,138.08,177.91,136.94Zm-3.29,13.3h-3.35a4.27,4.27,0,0,1-2.22-.35q-.44-.35-.44-2t.42-2.06a3.55,3.55,0,0,1,2.1-.38h3.49Zm-27.5-13.3q-1.82-1.14-6.5-1.13h-5.92v.25l.73,2.9h5.19a5,5,0,0,1,2.5.5,2.38,2.38,0,0,1,.72,2v1.15h-5.73q-3,0-4.12,1.17T132.84,148c0,2.21.37,3.14,1.12,3.84s2.2,1.22,4.48,1.22h7.06c1.77,0,3.45-.83,3.45-2.82v-8.81Q148.94,138.08,147.13,136.94Zm-3.28,13.3h-3.35a4.27,4.27,0,0,1-2.22-.35q-.44-.35-.44-2t.42-2.06a3.55,3.55,0,0,1,2.1-.38h3.49Zm-38.92-13.3q-1.82-1.14-6.5-1.13H92.5v.25l.73,2.9h5.19a5,5,0,0,1,2.5.5,2.38,2.38,0,0,1,.72,2v1.15H95.91q-3,0-4.12,1.17T90.63,148c0,2.21.37,3.14,1.12,3.84s2.2,1.22,4.48,1.22h7.06c1.77,0,3.45-.83,3.45-2.82v-8.81Q106.74,138.08,104.92,136.94Zm-3.28,13.3H98.29a4.27,4.27,0,0,1-2.22-.35q-.44-.35-.44-2t.42-2.06a3.55,3.55,0,0,1,2.1-.38h3.49Z" transform="translate(-57.96 -122.27)"/></svg></a>';
    }),
    U.on("assignSuggestions", h),
    (r.defaultOptions = L),
    (r.version = "20.3.0"),
    (e.Suggestions = r),
    (e.fn.suggestions = function (t, n) {
      return 0 === arguments.length
        ? this.first().data("suggestions")
        : this.each(function () {
            var i = e(this),
              s = i.data("suggestions");
            "string" == typeof t
              ? s && "function" == typeof s[t] && s[t](n)
              : (s && s.dispose && s.dispose(),
                (s = new r(this, t)),
                i.data("suggestions", s));
          });
    });
}); /* Start:"a:4:{s:4:"full";s:60:"/bitrix/templates/delko/js/datepicker.min.js?160285219435542";s:6:"source";s:44:"/bitrix/templates/delko/js/datepicker.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
!(function (t, e, i) {
  !(function () {
    var s,
      a,
      n,
      h = "2.2.3",
      o = "datepicker",
      r = ".datepicker-here",
      c = !1,
      d =
        '<div class="datepicker"><i class="datepicker--pointer"></i><nav class="datepicker--nav"></nav><div class="datepicker--content"></div></div>',
      l = {
        classes: "",
        inline: !1,
        language: "ru",
        startDate: new Date(),
        firstDay: "",
        weekends: [6, 0],
        dateFormat: "",
        altField: "",
        altFieldDateFormat: "@",
        toggleSelected: !0,
        keyboardNav: !0,
        position: "bottom left",
        offset: 12,
        view: "days",
        minView: "days",
        showOtherMonths: !0,
        selectOtherMonths: !0,
        moveToOtherMonthsOnSelect: !0,
        showOtherYears: !0,
        selectOtherYears: !0,
        moveToOtherYearsOnSelect: !0,
        minDate: "",
        maxDate: "",
        disableNavWhenOutOfRange: !0,
        multipleDates: !1,
        multipleDatesSeparator: ",",
        range: !1,
        todayButton: !1,
        clearButton: !1,
        showEvent: "focus",
        autoClose: !1,
        monthsField: "monthsShort",
        prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',
        nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',
        navTitles: {
          days: "MM, <i>yyyy</i>",
          months: "yyyy",
          years: "yyyy1 - yyyy2",
        },
        timepicker: !1,
        onlyTimepicker: !1,
        dateTimeSeparator: " ",
        timeFormat: "",
        minHours: 0,
        maxHours: 24,
        minMinutes: 0,
        maxMinutes: 59,
        hoursStep: 1,
        minutesStep: 1,
        onSelect: "",
        onShow: "",
        onHide: "",
        onChangeMonth: "",
        onChangeYear: "",
        onChangeDecade: "",
        onChangeView: "",
        onRenderCell: "",
      },
      u = {
        ctrlRight: [17, 39],
        ctrlUp: [17, 38],
        ctrlLeft: [17, 37],
        ctrlDown: [17, 40],
        shiftRight: [16, 39],
        shiftUp: [16, 38],
        shiftLeft: [16, 37],
        shiftDown: [16, 40],
        altUp: [18, 38],
        altRight: [18, 39],
        altLeft: [18, 37],
        altDown: [18, 40],
        ctrlShiftUp: [16, 17, 38],
      },
      m = function (t, a) {
        (this.el = t),
          (this.$el = e(t)),
          (this.opts = e.extend(!0, {}, l, a, this.$el.data())),
          s == i && (s = e("body")),
          this.opts.startDate || (this.opts.startDate = new Date()),
          "INPUT" == this.el.nodeName && (this.elIsInput = !0),
          this.opts.altField &&
            (this.$altField =
              "string" == typeof this.opts.altField
                ? e(this.opts.altField)
                : this.opts.altField),
          (this.inited = !1),
          (this.visible = !1),
          (this.silent = !1),
          (this.currentDate = this.opts.startDate),
          (this.currentView = this.opts.view),
          this._createShortCuts(),
          (this.selectedDates = []),
          (this.views = {}),
          (this.keys = []),
          (this.minRange = ""),
          (this.maxRange = ""),
          (this._prevOnSelectValue = ""),
          this.init();
      };
    (n = m),
      (n.prototype = {
        VERSION: h,
        viewIndexes: ["days", "months", "years"],
        init: function () {
          c ||
            this.opts.inline ||
            !this.elIsInput ||
            this._buildDatepickersContainer(),
            this._buildBaseHtml(),
            this._defineLocale(this.opts.language),
            this._syncWithMinMaxDates(),
            this.elIsInput &&
              (this.opts.inline ||
                (this._setPositionClasses(this.opts.position),
                this._bindEvents()),
              this.opts.keyboardNav &&
                !this.opts.onlyTimepicker &&
                this._bindKeyboardEvents(),
              this.$datepicker.on(
                "mousedown",
                this._onMouseDownDatepicker.bind(this)
              ),
              this.$datepicker.on(
                "mouseup",
                this._onMouseUpDatepicker.bind(this)
              )),
            this.opts.classes && this.$datepicker.addClass(this.opts.classes),
            this.opts.timepicker &&
              ((this.timepicker = new e.fn.datepicker.Timepicker(
                this,
                this.opts
              )),
              this._bindTimepickerEvents()),
            this.opts.onlyTimepicker &&
              this.$datepicker.addClass("-only-timepicker-"),
            (this.views[this.currentView] = new e.fn.datepicker.Body(
              this,
              this.currentView,
              this.opts
            )),
            this.views[this.currentView].show(),
            (this.nav = new e.fn.datepicker.Navigation(this, this.opts)),
            (this.view = this.currentView),
            this.$el.on("clickCell.adp", this._onClickCell.bind(this)),
            this.$datepicker.on(
              "mouseenter",
              ".datepicker--cell",
              this._onMouseEnterCell.bind(this)
            ),
            this.$datepicker.on(
              "mouseleave",
              ".datepicker--cell",
              this._onMouseLeaveCell.bind(this)
            ),
            (this.inited = !0);
        },
        _createShortCuts: function () {
          (this.minDate = this.opts.minDate
            ? this.opts.minDate
            : new Date(-86399999136e5)),
            (this.maxDate = this.opts.maxDate
              ? this.opts.maxDate
              : new Date(86399999136e5));
        },
        _bindEvents: function () {
          this.$el.on(
            this.opts.showEvent + ".adp",
            this._onShowEvent.bind(this)
          ),
            this.$el.on("mouseup.adp", this._onMouseUpEl.bind(this)),
            this.$el.on("blur.adp", this._onBlur.bind(this)),
            this.$el.on("keyup.adp", this._onKeyUpGeneral.bind(this)),
            e(t).on("resize.adp", this._onResize.bind(this)),
            e("body").on("mouseup.adp", this._onMouseUpBody.bind(this));
        },
        _bindKeyboardEvents: function () {
          this.$el.on("keydown.adp", this._onKeyDown.bind(this)),
            this.$el.on("keyup.adp", this._onKeyUp.bind(this)),
            this.$el.on("hotKey.adp", this._onHotKey.bind(this));
        },
        _bindTimepickerEvents: function () {
          this.$el.on("timeChange.adp", this._onTimeChange.bind(this));
        },
        isWeekend: function (t) {
          return -1 !== this.opts.weekends.indexOf(t);
        },
        _defineLocale: function (t) {
          "string" == typeof t
            ? ((this.loc = e.fn.datepicker.language[t]),
              this.loc ||
                (console.warn(
                  "Can't find language \"" +
                    t +
                    '" in Datepicker.language, will use "ru" instead'
                ),
                (this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru))),
              (this.loc = e.extend(
                !0,
                {},
                e.fn.datepicker.language.ru,
                e.fn.datepicker.language[t]
              )))
            : (this.loc = e.extend(!0, {}, e.fn.datepicker.language.ru, t)),
            this.opts.dateFormat &&
              (this.loc.dateFormat = this.opts.dateFormat),
            this.opts.timeFormat &&
              (this.loc.timeFormat = this.opts.timeFormat),
            "" !== this.opts.firstDay &&
              (this.loc.firstDay = this.opts.firstDay),
            this.opts.timepicker &&
              (this.loc.dateFormat = [
                this.loc.dateFormat,
                this.loc.timeFormat,
              ].join(this.opts.dateTimeSeparator)),
            this.opts.onlyTimepicker &&
              (this.loc.dateFormat = this.loc.timeFormat);
          var i = this._getWordBoundaryRegExp;
          (this.loc.timeFormat.match(i("aa")) ||
            this.loc.timeFormat.match(i("AA"))) &&
            (this.ampm = !0);
        },
        _buildDatepickersContainer: function () {
          (c = !0),
            s.append(
              '<div class="datepickers-container" id="datepickers-container"></div>'
            ),
            (a = e("#datepickers-container"));
        },
        _buildBaseHtml: function () {
          var t,
            i = e('<div class="datepicker-inline">');
          (t =
            "INPUT" == this.el.nodeName
              ? this.opts.inline
                ? i.insertAfter(this.$el)
                : a
              : i.appendTo(this.$el)),
            (this.$datepicker = e(d).appendTo(t)),
            (this.$content = e(".datepicker--content", this.$datepicker)),
            (this.$nav = e(".datepicker--nav", this.$datepicker));
        },
        _triggerOnChange: function () {
          if (!this.selectedDates.length) {
            if ("" === this._prevOnSelectValue) return;
            return (
              (this._prevOnSelectValue = ""), this.opts.onSelect("", "", this)
            );
          }
          var t,
            e = this.selectedDates,
            i = n.getParsedDate(e[0]),
            s = this,
            a = new Date(i.year, i.month, i.date, i.hours, i.minutes);
          (t = e
            .map(function (t) {
              return s.formatDate(s.loc.dateFormat, t);
            })
            .join(this.opts.multipleDatesSeparator)),
            (this.opts.multipleDates || this.opts.range) &&
              (a = e.map(function (t) {
                var e = n.getParsedDate(t);
                return new Date(e.year, e.month, e.date, e.hours, e.minutes);
              })),
            (this._prevOnSelectValue = t),
            this.opts.onSelect(t, a, this);
        },
        next: function () {
          var t = this.parsedDate,
            e = this.opts;
          switch (this.view) {
            case "days":
              (this.date = new Date(t.year, t.month + 1, 1)),
                e.onChangeMonth &&
                  e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
              break;
            case "months":
              (this.date = new Date(t.year + 1, t.month, 1)),
                e.onChangeYear && e.onChangeYear(this.parsedDate.year);
              break;
            case "years":
              (this.date = new Date(t.year + 10, 0, 1)),
                e.onChangeDecade && e.onChangeDecade(this.curDecade);
          }
        },
        prev: function () {
          var t = this.parsedDate,
            e = this.opts;
          switch (this.view) {
            case "days":
              (this.date = new Date(t.year, t.month - 1, 1)),
                e.onChangeMonth &&
                  e.onChangeMonth(this.parsedDate.month, this.parsedDate.year);
              break;
            case "months":
              (this.date = new Date(t.year - 1, t.month, 1)),
                e.onChangeYear && e.onChangeYear(this.parsedDate.year);
              break;
            case "years":
              (this.date = new Date(t.year - 10, 0, 1)),
                e.onChangeDecade && e.onChangeDecade(this.curDecade);
          }
        },
        formatDate: function (t, e) {
          e = e || this.date;
          var i,
            s = t,
            a = this._getWordBoundaryRegExp,
            h = this.loc,
            o = n.getLeadingZeroNum,
            r = n.getDecade(e),
            c = n.getParsedDate(e),
            d = c.fullHours,
            l = c.hours,
            u = t.match(a("aa")) || t.match(a("AA")),
            m = "am",
            p = this._replacer;
          switch (
            (this.opts.timepicker &&
              this.timepicker &&
              u &&
              ((i = this.timepicker._getValidHoursFromDate(e, u)),
              (d = o(i.hours)),
              (l = i.hours),
              (m = i.dayPeriod)),
            !0)
          ) {
            case /@/.test(s):
              s = s.replace(/@/, e.getTime());
            case /aa/.test(s):
              s = p(s, a("aa"), m);
            case /AA/.test(s):
              s = p(s, a("AA"), m.toUpperCase());
            case /dd/.test(s):
              s = p(s, a("dd"), c.fullDate);
            case /d/.test(s):
              s = p(s, a("d"), c.date);
            case /DD/.test(s):
              s = p(s, a("DD"), h.days[c.day]);
            case /D/.test(s):
              s = p(s, a("D"), h.daysShort[c.day]);
            case /mm/.test(s):
              s = p(s, a("mm"), c.fullMonth);
            case /m/.test(s):
              s = p(s, a("m"), c.month + 1);
            case /MM/.test(s):
              s = p(s, a("MM"), this.loc.months[c.month]);
            case /M/.test(s):
              s = p(s, a("M"), h.monthsShort[c.month]);
            case /ii/.test(s):
              s = p(s, a("ii"), c.fullMinutes);
            case /i/.test(s):
              s = p(s, a("i"), c.minutes);
            case /hh/.test(s):
              s = p(s, a("hh"), d);
            case /h/.test(s):
              s = p(s, a("h"), l);
            case /yyyy/.test(s):
              s = p(s, a("yyyy"), c.year);
            case /yyyy1/.test(s):
              s = p(s, a("yyyy1"), r[0]);
            case /yyyy2/.test(s):
              s = p(s, a("yyyy2"), r[1]);
            case /yy/.test(s):
              s = p(s, a("yy"), c.year.toString().slice(-2));
          }
          return s;
        },
        _replacer: function (t, e, i) {
          return t.replace(e, function (t, e, s, a) {
            return e + i + a;
          });
        },
        _getWordBoundaryRegExp: function (t) {
          var e = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
          return new RegExp("(^|>|" + e + ")(" + t + ")($|<|" + e + ")", "g");
        },
        selectDate: function (t) {
          var e = this,
            i = e.opts,
            s = e.parsedDate,
            a = e.selectedDates,
            h = a.length,
            o = "";
          if (Array.isArray(t))
            return void t.forEach(function (t) {
              e.selectDate(t);
            });
          if (t instanceof Date) {
            if (
              ((this.lastSelectedDate = t),
              this.timepicker && this.timepicker._setTime(t),
              e._trigger("selectDate", t),
              this.timepicker &&
                (t.setHours(this.timepicker.hours),
                t.setMinutes(this.timepicker.minutes)),
              "days" == e.view &&
                t.getMonth() != s.month &&
                i.moveToOtherMonthsOnSelect &&
                (o = new Date(t.getFullYear(), t.getMonth(), 1)),
              "years" == e.view &&
                t.getFullYear() != s.year &&
                i.moveToOtherYearsOnSelect &&
                (o = new Date(t.getFullYear(), 0, 1)),
              o &&
                ((e.silent = !0),
                (e.date = o),
                (e.silent = !1),
                e.nav._render()),
              i.multipleDates && !i.range)
            ) {
              if (h === i.multipleDates) return;
              e._isSelected(t) || e.selectedDates.push(t);
            } else
              i.range
                ? 2 == h
                  ? ((e.selectedDates = [t]),
                    (e.minRange = t),
                    (e.maxRange = ""))
                  : 1 == h
                  ? (e.selectedDates.push(t),
                    e.maxRange ? (e.minRange = t) : (e.maxRange = t),
                    n.bigger(e.maxRange, e.minRange) &&
                      ((e.maxRange = e.minRange), (e.minRange = t)),
                    (e.selectedDates = [e.minRange, e.maxRange]))
                  : ((e.selectedDates = [t]), (e.minRange = t))
                : (e.selectedDates = [t]);
            e._setInputValue(),
              i.onSelect && e._triggerOnChange(),
              i.autoClose &&
                !this.timepickerIsActive &&
                (i.multipleDates || i.range
                  ? i.range && 2 == e.selectedDates.length && e.hide()
                  : e.hide()),
              e.views[this.currentView]._render();
          }
        },
        removeDate: function (t) {
          var e = this.selectedDates,
            i = this;
          if (t instanceof Date)
            return e.some(function (s, a) {
              return n.isSame(s, t)
                ? (e.splice(a, 1),
                  i.selectedDates.length
                    ? (i.lastSelectedDate =
                        i.selectedDates[i.selectedDates.length - 1])
                    : ((i.minRange = ""),
                      (i.maxRange = ""),
                      (i.lastSelectedDate = "")),
                  i.views[i.currentView]._render(),
                  i._setInputValue(),
                  i.opts.onSelect && i._triggerOnChange(),
                  !0)
                : void 0;
            });
        },
        today: function () {
          (this.silent = !0),
            (this.view = this.opts.minView),
            (this.silent = !1),
            (this.date = new Date()),
            this.opts.todayButton instanceof Date &&
              this.selectDate(this.opts.todayButton);
        },
        clear: function () {
          (this.selectedDates = []),
            (this.minRange = ""),
            (this.maxRange = ""),
            this.views[this.currentView]._render(),
            this._setInputValue(),
            this.opts.onSelect && this._triggerOnChange();
        },
        update: function (t, i) {
          var s = arguments.length,
            a = this.lastSelectedDate;
          return (
            2 == s
              ? (this.opts[t] = i)
              : 1 == s &&
                "object" == typeof t &&
                (this.opts = e.extend(!0, this.opts, t)),
            this._createShortCuts(),
            this._syncWithMinMaxDates(),
            this._defineLocale(this.opts.language),
            this.nav._addButtonsIfNeed(),
            this.opts.onlyTimepicker || this.nav._render(),
            this.views[this.currentView]._render(),
            this.elIsInput &&
              !this.opts.inline &&
              (this._setPositionClasses(this.opts.position),
              this.visible && this.setPosition(this.opts.position)),
            this.opts.classes && this.$datepicker.addClass(this.opts.classes),
            this.opts.onlyTimepicker &&
              this.$datepicker.addClass("-only-timepicker-"),
            this.opts.timepicker &&
              (a && this.timepicker._handleDate(a),
              this.timepicker._updateRanges(),
              this.timepicker._updateCurrentTime(),
              a &&
                (a.setHours(this.timepicker.hours),
                a.setMinutes(this.timepicker.minutes))),
            this._setInputValue(),
            this
          );
        },
        _syncWithMinMaxDates: function () {
          var t = this.date.getTime();
          (this.silent = !0),
            this.minTime > t && (this.date = this.minDate),
            this.maxTime < t && (this.date = this.maxDate),
            (this.silent = !1);
        },
        _isSelected: function (t, e) {
          var i = !1;
          return (
            this.selectedDates.some(function (s) {
              return n.isSame(s, t, e) ? ((i = s), !0) : void 0;
            }),
            i
          );
        },
        _setInputValue: function () {
          var t,
            e = this,
            i = e.opts,
            s = e.loc.dateFormat,
            a = i.altFieldDateFormat,
            n = e.selectedDates.map(function (t) {
              return e.formatDate(s, t);
            });
          i.altField &&
            e.$altField.length &&
            ((t = this.selectedDates.map(function (t) {
              return e.formatDate(a, t);
            })),
            (t = t.join(this.opts.multipleDatesSeparator)),
            this.$altField.val(t)),
            (n = n.join(this.opts.multipleDatesSeparator)),
            this.$el.val(n);
        },
        _isInRange: function (t, e) {
          var i = t.getTime(),
            s = n.getParsedDate(t),
            a = n.getParsedDate(this.minDate),
            h = n.getParsedDate(this.maxDate),
            o = new Date(s.year, s.month, a.date).getTime(),
            r = new Date(s.year, s.month, h.date).getTime(),
            c = {
              day: i >= this.minTime && i <= this.maxTime,
              month: o >= this.minTime && r <= this.maxTime,
              year: s.year >= a.year && s.year <= h.year,
            };
          return e ? c[e] : c.day;
        },
        _getDimensions: function (t) {
          var e = t.offset();
          return {
            width: t.outerWidth(),
            height: t.outerHeight(),
            left: e.left,
            top: e.top,
          };
        },
        _getDateFromCell: function (t) {
          var e = this.parsedDate,
            s = t.data("year") || e.year,
            a = t.data("month") == i ? e.month : t.data("month"),
            n = t.data("date") || 1;
          return new Date(s, a, n);
        },
        _setPositionClasses: function (t) {
          t = t.split(" ");
          var e = t[0],
            i = t[1],
            s = "datepicker -" + e + "-" + i + "- -from-" + e + "-";
          this.visible && (s += " active"),
            this.$datepicker.removeAttr("class").addClass(s);
        },
        setPosition: function (t) {
          t = t || this.opts.position;
          var e,
            i,
            s = this._getDimensions(this.$el),
            a = this._getDimensions(this.$datepicker),
            n = t.split(" "),
            h = this.opts.offset,
            o = n[0],
            r = n[1];
          switch (o) {
            case "top":
              e = s.top - a.height - h;
              break;
            case "right":
              i = s.left + s.width + h;
              break;
            case "bottom":
              e = s.top + s.height + h;
              break;
            case "left":
              i = s.left - a.width - h;
          }
          switch (r) {
            case "top":
              e = s.top;
              break;
            case "right":
              i = s.left + s.width - a.width;
              break;
            case "bottom":
              e = s.top + s.height - a.height;
              break;
            case "left":
              i = s.left;
              break;
            case "center":
              /left|right/.test(o)
                ? (e = s.top + s.height / 2 - a.height / 2)
                : (i = s.left + s.width / 2 - a.width / 2);
          }
          this.$datepicker.css({ left: i, top: e });
        },
        show: function () {
          var t = this.opts.onShow;
          this.setPosition(this.opts.position),
            this.$datepicker.addClass("active"),
            (this.visible = !0),
            t && this._bindVisionEvents(t);
        },
        hide: function () {
          var t = this.opts.onHide;
          this.$datepicker.removeClass("active").css({ left: "-100000px" }),
            (this.focused = ""),
            (this.keys = []),
            (this.inFocus = !1),
            (this.visible = !1),
            this.$el.blur(),
            t && this._bindVisionEvents(t);
        },
        down: function (t) {
          this._changeView(t, "down");
        },
        up: function (t) {
          this._changeView(t, "up");
        },
        _bindVisionEvents: function (t) {
          this.$datepicker.off("transitionend.dp"),
            t(this, !1),
            this.$datepicker.one("transitionend.dp", t.bind(this, this, !0));
        },
        _changeView: function (t, e) {
          t = t || this.focused || this.date;
          var i = "up" == e ? this.viewIndex + 1 : this.viewIndex - 1;
          i > 2 && (i = 2),
            0 > i && (i = 0),
            (this.silent = !0),
            (this.date = new Date(t.getFullYear(), t.getMonth(), 1)),
            (this.silent = !1),
            (this.view = this.viewIndexes[i]);
        },
        _handleHotKey: function (t) {
          var e,
            i,
            s,
            a = n.getParsedDate(this._getFocusedDate()),
            h = this.opts,
            o = !1,
            r = !1,
            c = !1,
            d = a.year,
            l = a.month,
            u = a.date;
          switch (t) {
            case "ctrlRight":
            case "ctrlUp":
              (l += 1), (o = !0);
              break;
            case "ctrlLeft":
            case "ctrlDown":
              (l -= 1), (o = !0);
              break;
            case "shiftRight":
            case "shiftUp":
              (r = !0), (d += 1);
              break;
            case "shiftLeft":
            case "shiftDown":
              (r = !0), (d -= 1);
              break;
            case "altRight":
            case "altUp":
              (c = !0), (d += 10);
              break;
            case "altLeft":
            case "altDown":
              (c = !0), (d -= 10);
              break;
            case "ctrlShiftUp":
              this.up();
          }
          (s = n.getDaysCount(new Date(d, l))),
            (i = new Date(d, l, u)),
            u > s && (u = s),
            i.getTime() < this.minTime
              ? (i = this.minDate)
              : i.getTime() > this.maxTime && (i = this.maxDate),
            (this.focused = i),
            (e = n.getParsedDate(i)),
            o && h.onChangeMonth && h.onChangeMonth(e.month, e.year),
            r && h.onChangeYear && h.onChangeYear(e.year),
            c && h.onChangeDecade && h.onChangeDecade(this.curDecade);
        },
        _registerKey: function (t) {
          var e = this.keys.some(function (e) {
            return e == t;
          });
          e || this.keys.push(t);
        },
        _unRegisterKey: function (t) {
          var e = this.keys.indexOf(t);
          this.keys.splice(e, 1);
        },
        _isHotKeyPressed: function () {
          var t,
            e = !1,
            i = this,
            s = this.keys.sort();
          for (var a in u)
            (t = u[a]),
              s.length == t.length &&
                t.every(function (t, e) {
                  return t == s[e];
                }) &&
                (i._trigger("hotKey", a), (e = !0));
          return e;
        },
        _trigger: function (t, e) {
          this.$el.trigger(t, e);
        },
        _focusNextCell: function (t, e) {
          e = e || this.cellType;
          var i = n.getParsedDate(this._getFocusedDate()),
            s = i.year,
            a = i.month,
            h = i.date;
          if (!this._isHotKeyPressed()) {
            switch (t) {
              case 37:
                "day" == e ? (h -= 1) : "",
                  "month" == e ? (a -= 1) : "",
                  "year" == e ? (s -= 1) : "";
                break;
              case 38:
                "day" == e ? (h -= 7) : "",
                  "month" == e ? (a -= 3) : "",
                  "year" == e ? (s -= 4) : "";
                break;
              case 39:
                "day" == e ? (h += 1) : "",
                  "month" == e ? (a += 1) : "",
                  "year" == e ? (s += 1) : "";
                break;
              case 40:
                "day" == e ? (h += 7) : "",
                  "month" == e ? (a += 3) : "",
                  "year" == e ? (s += 4) : "";
            }
            var o = new Date(s, a, h);
            o.getTime() < this.minTime
              ? (o = this.minDate)
              : o.getTime() > this.maxTime && (o = this.maxDate),
              (this.focused = o);
          }
        },
        _getFocusedDate: function () {
          var t =
              this.focused || this.selectedDates[this.selectedDates.length - 1],
            e = this.parsedDate;
          if (!t)
            switch (this.view) {
              case "days":
                t = new Date(e.year, e.month, new Date().getDate());
                break;
              case "months":
                t = new Date(e.year, e.month, 1);
                break;
              case "years":
                t = new Date(e.year, 0, 1);
            }
          return t;
        },
        _getCell: function (t, i) {
          i = i || this.cellType;
          var s,
            a = n.getParsedDate(t),
            h = '.datepicker--cell[data-year="' + a.year + '"]';
          switch (i) {
            case "month":
              h = '[data-month="' + a.month + '"]';
              break;
            case "day":
              h += '[data-month="' + a.month + '"][data-date="' + a.date + '"]';
          }
          return (
            (s = this.views[this.currentView].$el.find(h)), s.length ? s : e("")
          );
        },
        destroy: function () {
          var t = this;
          t.$el.off(".adp").data("datepicker", ""),
            (t.selectedDates = []),
            (t.focused = ""),
            (t.views = {}),
            (t.keys = []),
            (t.minRange = ""),
            (t.maxRange = ""),
            t.opts.inline || !t.elIsInput
              ? t.$datepicker.closest(".datepicker-inline").remove()
              : t.$datepicker.remove();
        },
        _handleAlreadySelectedDates: function (t, e) {
          this.opts.range
            ? this.opts.toggleSelected
              ? this.removeDate(e)
              : 2 != this.selectedDates.length && this._trigger("clickCell", e)
            : this.opts.toggleSelected && this.removeDate(e),
            this.opts.toggleSelected ||
              ((this.lastSelectedDate = t),
              this.opts.timepicker &&
                (this.timepicker._setTime(t), this.timepicker.update()));
        },
        _onShowEvent: function (t) {
          this.visible || this.show();
        },
        _onBlur: function () {
          !this.inFocus && this.visible && this.hide();
        },
        _onMouseDownDatepicker: function (t) {
          this.inFocus = !0;
        },
        _onMouseUpDatepicker: function (t) {
          (this.inFocus = !1),
            (t.originalEvent.inFocus = !0),
            t.originalEvent.timepickerFocus || this.$el.focus();
        },
        _onKeyUpGeneral: function (t) {
          var e = this.$el.val();
          e || this.clear();
        },
        _onResize: function () {
          this.visible && this.setPosition();
        },
        _onMouseUpBody: function (t) {
          t.originalEvent.inFocus ||
            (this.visible && !this.inFocus && this.hide());
        },
        _onMouseUpEl: function (t) {
          (t.originalEvent.inFocus = !0),
            setTimeout(this._onKeyUpGeneral.bind(this), 4);
        },
        _onKeyDown: function (t) {
          var e = t.which;
          if (
            (this._registerKey(e),
            e >= 37 && 40 >= e && (t.preventDefault(), this._focusNextCell(e)),
            13 == e && this.focused)
          ) {
            if (this._getCell(this.focused).hasClass("-disabled-")) return;
            if (this.view != this.opts.minView) this.down();
            else {
              var i = this._isSelected(this.focused, this.cellType);
              if (!i)
                return (
                  this.timepicker &&
                    (this.focused.setHours(this.timepicker.hours),
                    this.focused.setMinutes(this.timepicker.minutes)),
                  void this.selectDate(this.focused)
                );
              this._handleAlreadySelectedDates(i, this.focused);
            }
          }
          27 == e && this.hide();
        },
        _onKeyUp: function (t) {
          var e = t.which;
          this._unRegisterKey(e);
        },
        _onHotKey: function (t, e) {
          this._handleHotKey(e);
        },
        _onMouseEnterCell: function (t) {
          var i = e(t.target).closest(".datepicker--cell"),
            s = this._getDateFromCell(i);
          (this.silent = !0),
            this.focused && (this.focused = ""),
            i.addClass("-focus-"),
            (this.focused = s),
            (this.silent = !1),
            this.opts.range &&
              1 == this.selectedDates.length &&
              ((this.minRange = this.selectedDates[0]),
              (this.maxRange = ""),
              n.less(this.minRange, this.focused) &&
                ((this.maxRange = this.minRange), (this.minRange = "")),
              this.views[this.currentView]._update());
        },
        _onMouseLeaveCell: function (t) {
          var i = e(t.target).closest(".datepicker--cell");
          i.removeClass("-focus-"),
            (this.silent = !0),
            (this.focused = ""),
            (this.silent = !1);
        },
        _onTimeChange: function (t, e, i) {
          var s = new Date(),
            a = this.selectedDates,
            n = !1;
          a.length && ((n = !0), (s = this.lastSelectedDate)),
            s.setHours(e),
            s.setMinutes(i),
            n || this._getCell(s).hasClass("-disabled-")
              ? (this._setInputValue(),
                this.opts.onSelect && this._triggerOnChange())
              : this.selectDate(s);
        },
        _onClickCell: function (t, e) {
          this.timepicker &&
            (e.setHours(this.timepicker.hours),
            e.setMinutes(this.timepicker.minutes)),
            this.selectDate(e);
        },
        set focused(t) {
          if (!t && this.focused) {
            var e = this._getCell(this.focused);
            e.length && e.removeClass("-focus-");
          }
          (this._focused = t),
            this.opts.range &&
              1 == this.selectedDates.length &&
              ((this.minRange = this.selectedDates[0]),
              (this.maxRange = ""),
              n.less(this.minRange, this._focused) &&
                ((this.maxRange = this.minRange), (this.minRange = ""))),
            this.silent || (this.date = t);
        },
        get focused() {
          return this._focused;
        },
        get parsedDate() {
          return n.getParsedDate(this.date);
        },
        set date(t) {
          return t instanceof Date
            ? ((this.currentDate = t),
              this.inited &&
                !this.silent &&
                (this.views[this.view]._render(),
                this.nav._render(),
                this.visible && this.elIsInput && this.setPosition()),
              t)
            : void 0;
        },
        get date() {
          return this.currentDate;
        },
        set view(t) {
          return (
            (this.viewIndex = this.viewIndexes.indexOf(t)),
            this.viewIndex < 0
              ? void 0
              : ((this.prevView = this.currentView),
                (this.currentView = t),
                this.inited &&
                  (this.views[t]
                    ? this.views[t]._render()
                    : (this.views[t] = new e.fn.datepicker.Body(
                        this,
                        t,
                        this.opts
                      )),
                  this.views[this.prevView].hide(),
                  this.views[t].show(),
                  this.nav._render(),
                  this.opts.onChangeView && this.opts.onChangeView(t),
                  this.elIsInput && this.visible && this.setPosition()),
                t)
          );
        },
        get view() {
          return this.currentView;
        },
        get cellType() {
          return this.view.substring(0, this.view.length - 1);
        },
        get minTime() {
          var t = n.getParsedDate(this.minDate);
          return new Date(t.year, t.month, t.date).getTime();
        },
        get maxTime() {
          var t = n.getParsedDate(this.maxDate);
          return new Date(t.year, t.month, t.date).getTime();
        },
        get curDecade() {
          return n.getDecade(this.date);
        },
      }),
      (n.getDaysCount = function (t) {
        return new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate();
      }),
      (n.getParsedDate = function (t) {
        return {
          year: t.getFullYear(),
          month: t.getMonth(),
          fullMonth:
            t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
          date: t.getDate(),
          fullDate: t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
          day: t.getDay(),
          hours: t.getHours(),
          fullHours: t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
          minutes: t.getMinutes(),
          fullMinutes:
            t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes(),
        };
      }),
      (n.getDecade = function (t) {
        var e = 10 * Math.floor(t.getFullYear() / 10);
        return [e, e + 9];
      }),
      (n.template = function (t, e) {
        return t.replace(/#\{([\w]+)\}/g, function (t, i) {
          return e[i] || 0 === e[i] ? e[i] : void 0;
        });
      }),
      (n.isSame = function (t, e, i) {
        if (!t || !e) return !1;
        var s = n.getParsedDate(t),
          a = n.getParsedDate(e),
          h = i ? i : "day",
          o = {
            day: s.date == a.date && s.month == a.month && s.year == a.year,
            month: s.month == a.month && s.year == a.year,
            year: s.year == a.year,
          };
        return o[h];
      }),
      (n.less = function (t, e, i) {
        return t && e ? e.getTime() < t.getTime() : !1;
      }),
      (n.bigger = function (t, e, i) {
        return t && e ? e.getTime() > t.getTime() : !1;
      }),
      (n.getLeadingZeroNum = function (t) {
        return parseInt(t) < 10 ? "0" + t : t;
      }),
      (n.resetTime = function (t) {
        return "object" == typeof t
          ? ((t = n.getParsedDate(t)), new Date(t.year, t.month, t.date))
          : void 0;
      }),
      (e.fn.datepicker = function (t) {
        return this.each(function () {
          if (e.data(this, o)) {
            var i = e.data(this, o);
            (i.opts = e.extend(!0, i.opts, t)), i.update();
          } else e.data(this, o, new m(this, t));
        });
      }),
      (e.fn.datepicker.Constructor = m),
      (e.fn.datepicker.language = {
        ru: {
          days: [
            "Ð’Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ",
            "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº",
            "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº",
            "Ð¡Ñ€ÐµÐ´Ð°",
            "Ð§ÐµÑ‚Ð²ÐµÑ€Ð³",
            "ÐŸÑÑ‚Ð½Ð¸Ñ†Ð°",
            "Ð¡ÑƒÐ±Ð±Ð¾Ñ‚Ð°",
          ],
          daysShort: [
            "Ð’Ð¾Ñ",
            "ÐŸÐ¾Ð½",
            "Ð’Ñ‚Ð¾",
            "Ð¡Ñ€Ðµ",
            "Ð§ÐµÑ‚",
            "ÐŸÑÑ‚",
            "Ð¡ÑƒÐ±",
          ],
          daysMin: ["Ð’Ñ", "ÐŸÐ½", "Ð’Ñ‚", "Ð¡Ñ€", "Ð§Ñ‚", "ÐŸÑ‚", "Ð¡Ð±"],
          months: [
            "Ð¯Ð½Ð²Ð°Ñ€ÑŒ",
            "Ð¤ÐµÐ²Ñ€Ð°Ð»ÑŒ",
            "ÐœÐ°Ñ€Ñ‚",
            "ÐÐ¿Ñ€ÐµÐ»ÑŒ",
            "ÐœÐ°Ð¹",
            "Ð˜ÑŽÐ½ÑŒ",
            "Ð˜ÑŽÐ»ÑŒ",
            "ÐÐ²Ð³ÑƒÑÑ‚",
            "Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ",
            "ÐžÐºÑ‚ÑÐ±Ñ€ÑŒ",
            "ÐÐ¾ÑÐ±Ñ€ÑŒ",
            "Ð”ÐµÐºÐ°Ð±Ñ€ÑŒ",
          ],
          monthsShort: [
            "Ð¯Ð½Ð²",
            "Ð¤ÐµÐ²",
            "ÐœÐ°Ñ€",
            "ÐÐ¿Ñ€",
            "ÐœÐ°Ð¹",
            "Ð˜ÑŽÐ½",
            "Ð˜ÑŽÐ»",
            "ÐÐ²Ð³",
            "Ð¡ÐµÐ½",
            "ÐžÐºÑ‚",
            "ÐÐ¾Ñ",
            "Ð”ÐµÐº",
          ],
          today: "Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ",
          clear: "ÐžÑ‡Ð¸ÑÑ‚Ð¸Ñ‚ÑŒ",
          dateFormat: "dd.mm.yyyy",
          timeFormat: "hh:ii",
          firstDay: 1,
        },
      }),
      e(function () {
        e(r).datepicker();
      });
  })(),
    (function () {
      var t = {
          days:
            '<div class="datepicker--days datepicker--body"><div class="datepicker--days-names"></div><div class="datepicker--cells datepicker--cells-days"></div></div>',
          months:
            '<div class="datepicker--months datepicker--body"><div class="datepicker--cells datepicker--cells-months"></div></div>',
          years:
            '<div class="datepicker--years datepicker--body"><div class="datepicker--cells datepicker--cells-years"></div></div>',
        },
        s = e.fn.datepicker,
        a = s.Constructor;
      (s.Body = function (t, i, s) {
        (this.d = t),
          (this.type = i),
          (this.opts = s),
          (this.$el = e("")),
          this.opts.onlyTimepicker || this.init();
      }),
        (s.Body.prototype = {
          init: function () {
            this._buildBaseHtml(), this._render(), this._bindEvents();
          },
          _bindEvents: function () {
            this.$el.on(
              "click",
              ".datepicker--cell",
              e.proxy(this._onClickCell, this)
            );
          },
          _buildBaseHtml: function () {
            (this.$el = e(t[this.type]).appendTo(this.d.$content)),
              (this.$names = e(".datepicker--days-names", this.$el)),
              (this.$cells = e(".datepicker--cells", this.$el));
          },
          _getDayNamesHtml: function (t, e, s, a) {
            return (
              (e = e != i ? e : t),
              (s = s ? s : ""),
              (a = a != i ? a : 0),
              a > 7
                ? s
                : 7 == e
                ? this._getDayNamesHtml(t, 0, s, ++a)
                : ((s +=
                    '<div class="datepicker--day-name' +
                    (this.d.isWeekend(e) ? " -weekend-" : "") +
                    '">' +
                    this.d.loc.daysMin[e] +
                    "</div>"),
                  this._getDayNamesHtml(t, ++e, s, ++a))
            );
          },
          _getCellContents: function (t, e) {
            var i = "datepicker--cell datepicker--cell-" + e,
              s = new Date(),
              n = this.d,
              h = a.resetTime(n.minRange),
              o = a.resetTime(n.maxRange),
              r = n.opts,
              c = a.getParsedDate(t),
              d = {},
              l = c.date;
            switch (e) {
              case "day":
                n.isWeekend(c.day) && (i += " -weekend-"),
                  c.month != this.d.parsedDate.month &&
                    ((i += " -other-month-"),
                    r.selectOtherMonths || (i += " -disabled-"),
                    r.showOtherMonths || (l = ""));
                break;
              case "month":
                l = n.loc[n.opts.monthsField][c.month];
                break;
              case "year":
                var u = n.curDecade;
                (l = c.year),
                  (c.year < u[0] || c.year > u[1]) &&
                    ((i += " -other-decade-"),
                    r.selectOtherYears || (i += " -disabled-"),
                    r.showOtherYears || (l = ""));
            }
            return (
              r.onRenderCell &&
                ((d = r.onRenderCell(t, e) || {}),
                (l = d.html ? d.html : l),
                (i += d.classes ? " " + d.classes : "")),
              r.range &&
                (a.isSame(h, t, e) && (i += " -range-from-"),
                a.isSame(o, t, e) && (i += " -range-to-"),
                1 == n.selectedDates.length && n.focused
                  ? (((a.bigger(h, t) && a.less(n.focused, t)) ||
                      (a.less(o, t) && a.bigger(n.focused, t))) &&
                      (i += " -in-range-"),
                    a.less(o, t) &&
                      a.isSame(n.focused, t) &&
                      (i += " -range-from-"),
                    a.bigger(h, t) &&
                      a.isSame(n.focused, t) &&
                      (i += " -range-to-"))
                  : 2 == n.selectedDates.length &&
                    a.bigger(h, t) &&
                    a.less(o, t) &&
                    (i += " -in-range-")),
              a.isSame(s, t, e) && (i += " -current-"),
              n.focused && a.isSame(t, n.focused, e) && (i += " -focus-"),
              n._isSelected(t, e) && (i += " -selected-"),
              (!n._isInRange(t, e) || d.disabled) && (i += " -disabled-"),
              { html: l, classes: i }
            );
          },
          _getDaysHtml: function (t) {
            var e = a.getDaysCount(t),
              i = new Date(t.getFullYear(), t.getMonth(), 1).getDay(),
              s = new Date(t.getFullYear(), t.getMonth(), e).getDay(),
              n = i - this.d.loc.firstDay,
              h = 6 - s + this.d.loc.firstDay;
            (n = 0 > n ? n + 7 : n), (h = h > 6 ? h - 7 : h);
            for (var o, r, c = -n + 1, d = "", l = c, u = e + h; u >= l; l++)
              (r = t.getFullYear()),
                (o = t.getMonth()),
                (d += this._getDayHtml(new Date(r, o, l)));
            return d;
          },
          _getDayHtml: function (t) {
            var e = this._getCellContents(t, "day");
            return (
              '<div class="' +
              e.classes +
              '" data-date="' +
              t.getDate() +
              '" data-month="' +
              t.getMonth() +
              '" data-year="' +
              t.getFullYear() +
              '">' +
              e.html +
              "</div>"
            );
          },
          _getMonthsHtml: function (t) {
            for (var e = "", i = a.getParsedDate(t), s = 0; 12 > s; )
              (e += this._getMonthHtml(new Date(i.year, s))), s++;
            return e;
          },
          _getMonthHtml: function (t) {
            var e = this._getCellContents(t, "month");
            return (
              '<div class="' +
              e.classes +
              '" data-month="' +
              t.getMonth() +
              '">' +
              e.html +
              "</div>"
            );
          },
          _getYearsHtml: function (t) {
            var e = (a.getParsedDate(t), a.getDecade(t)),
              i = e[0] - 1,
              s = "",
              n = i;
            for (n; n <= e[1] + 1; n++) s += this._getYearHtml(new Date(n, 0));
            return s;
          },
          _getYearHtml: function (t) {
            var e = this._getCellContents(t, "year");
            return (
              '<div class="' +
              e.classes +
              '" data-year="' +
              t.getFullYear() +
              '">' +
              e.html +
              "</div>"
            );
          },
          _renderTypes: {
            days: function () {
              var t = this._getDayNamesHtml(this.d.loc.firstDay),
                e = this._getDaysHtml(this.d.currentDate);
              this.$cells.html(e), this.$names.html(t);
            },
            months: function () {
              var t = this._getMonthsHtml(this.d.currentDate);
              this.$cells.html(t);
            },
            years: function () {
              var t = this._getYearsHtml(this.d.currentDate);
              this.$cells.html(t);
            },
          },
          _render: function () {
            this.opts.onlyTimepicker ||
              this._renderTypes[this.type].bind(this)();
          },
          _update: function () {
            var t,
              i,
              s,
              a = e(".datepicker--cell", this.$cells),
              n = this;
            a.each(function (a, h) {
              (i = e(this)),
                (s = n.d._getDateFromCell(e(this))),
                (t = n._getCellContents(s, n.d.cellType)),
                i.attr("class", t.classes);
            });
          },
          show: function () {
            this.opts.onlyTimepicker ||
              (this.$el.addClass("active"), (this.acitve = !0));
          },
          hide: function () {
            this.$el.removeClass("active"), (this.active = !1);
          },
          _handleClick: function (t) {
            var e = t.data("date") || 1,
              i = t.data("month") || 0,
              s = t.data("year") || this.d.parsedDate.year,
              a = this.d;
            if (a.view != this.opts.minView)
              return void a.down(new Date(s, i, e));
            var n = new Date(s, i, e),
              h = this.d._isSelected(n, this.d.cellType);
            return h
              ? void a._handleAlreadySelectedDates.bind(a, h, n)()
              : void a._trigger("clickCell", n);
          },
          _onClickCell: function (t) {
            var i = e(t.target).closest(".datepicker--cell");
            i.hasClass("-disabled-") || this._handleClick.bind(this)(i);
          },
        });
    })(),
    (function () {
      var t =
          '<div class="datepicker--nav-action" data-action="prev">#{prevHtml}</div><div class="datepicker--nav-title">#{title}</div><div class="datepicker--nav-action" data-action="next">#{nextHtml}</div>',
        i = '<div class="datepicker--buttons"></div>',
        s =
          '<span class="datepicker--button" data-action="#{action}">#{label}</span>',
        a = e.fn.datepicker,
        n = a.Constructor;
      (a.Navigation = function (t, e) {
        (this.d = t),
          (this.opts = e),
          (this.$buttonsContainer = ""),
          this.init();
      }),
        (a.Navigation.prototype = {
          init: function () {
            this._buildBaseHtml(), this._bindEvents();
          },
          _bindEvents: function () {
            this.d.$nav.on(
              "click",
              ".datepicker--nav-action",
              e.proxy(this._onClickNavButton, this)
            ),
              this.d.$nav.on(
                "click",
                ".datepicker--nav-title",
                e.proxy(this._onClickNavTitle, this)
              ),
              this.d.$datepicker.on(
                "click",
                ".datepicker--button",
                e.proxy(this._onClickNavButton, this)
              );
          },
          _buildBaseHtml: function () {
            this.opts.onlyTimepicker || this._render(),
              this._addButtonsIfNeed();
          },
          _addButtonsIfNeed: function () {
            this.opts.todayButton && this._addButton("today"),
              this.opts.clearButton && this._addButton("clear");
          },
          _render: function () {
            var i = this._getTitle(this.d.currentDate),
              s = n.template(t, e.extend({ title: i }, this.opts));
            this.d.$nav.html(s),
              "years" == this.d.view &&
                e(".datepicker--nav-title", this.d.$nav).addClass("-disabled-"),
              this.setNavStatus();
          },
          _getTitle: function (t) {
            return this.d.formatDate(this.opts.navTitles[this.d.view], t);
          },
          _addButton: function (t) {
            this.$buttonsContainer.length || this._addButtonsContainer();
            var i = { action: t, label: this.d.loc[t] },
              a = n.template(s, i);
            e("[data-action=" + t + "]", this.$buttonsContainer).length ||
              this.$buttonsContainer.append(a);
          },
          _addButtonsContainer: function () {
            this.d.$datepicker.append(i),
              (this.$buttonsContainer = e(
                ".datepicker--buttons",
                this.d.$datepicker
              ));
          },
          setNavStatus: function () {
            if (
              (this.opts.minDate || this.opts.maxDate) &&
              this.opts.disableNavWhenOutOfRange
            ) {
              var t = this.d.parsedDate,
                e = t.month,
                i = t.year,
                s = t.date;
              switch (this.d.view) {
                case "days":
                  this.d._isInRange(new Date(i, e - 1, 1), "month") ||
                    this._disableNav("prev"),
                    this.d._isInRange(new Date(i, e + 1, 1), "month") ||
                      this._disableNav("next");
                  break;
                case "months":
                  this.d._isInRange(new Date(i - 1, e, s), "year") ||
                    this._disableNav("prev"),
                    this.d._isInRange(new Date(i + 1, e, s), "year") ||
                      this._disableNav("next");
                  break;
                case "years":
                  var a = n.getDecade(this.d.date);
                  this.d._isInRange(new Date(a[0] - 1, 0, 1), "year") ||
                    this._disableNav("prev"),
                    this.d._isInRange(new Date(a[1] + 1, 0, 1), "year") ||
                      this._disableNav("next");
              }
            }
          },
          _disableNav: function (t) {
            e('[data-action="' + t + '"]', this.d.$nav).addClass("-disabled-");
          },
          _activateNav: function (t) {
            e('[data-action="' + t + '"]', this.d.$nav).removeClass(
              "-disabled-"
            );
          },
          _onClickNavButton: function (t) {
            var i = e(t.target).closest("[data-action]"),
              s = i.data("action");
            this.d[s]();
          },
          _onClickNavTitle: function (t) {
            return e(t.target).hasClass("-disabled-")
              ? void 0
              : "days" == this.d.view
              ? (this.d.view = "months")
              : void (this.d.view = "years");
          },
        });
    })(),
    (function () {
      var t =
          '<div class="datepicker--time"><div class="datepicker--time-current">   <span class="datepicker--time-current-hours">#{hourVisible}</span>   <span class="datepicker--time-current-colon">:</span>   <span class="datepicker--time-current-minutes">#{minValue}</span></div><div class="datepicker--time-sliders">   <div class="datepicker--time-row">      <input type="range" name="hours" value="#{hourValue}" min="#{hourMin}" max="#{hourMax}" step="#{hourStep}"/>   </div>   <div class="datepicker--time-row">      <input type="range" name="minutes" value="#{minValue}" min="#{minMin}" max="#{minMax}" step="#{minStep}"/>   </div></div></div>',
        i = e.fn.datepicker,
        s = i.Constructor;
      (i.Timepicker = function (t, e) {
        (this.d = t), (this.opts = e), this.init();
      }),
        (i.Timepicker.prototype = {
          init: function () {
            var t = "input";
            this._setTime(this.d.date),
              this._buildHTML(),
              navigator.userAgent.match(/trident/gi) && (t = "change"),
              this.d.$el.on("selectDate", this._onSelectDate.bind(this)),
              this.$ranges.on(t, this._onChangeRange.bind(this)),
              this.$ranges.on("mouseup", this._onMouseUpRange.bind(this)),
              this.$ranges.on(
                "mousemove focus ",
                this._onMouseEnterRange.bind(this)
              ),
              this.$ranges.on(
                "mouseout blur",
                this._onMouseOutRange.bind(this)
              );
          },
          _setTime: function (t) {
            var e = s.getParsedDate(t);
            this._handleDate(t),
              (this.hours = e.hours < this.minHours ? this.minHours : e.hours),
              (this.minutes =
                e.minutes < this.minMinutes ? this.minMinutes : e.minutes);
          },
          _setMinTimeFromDate: function (t) {
            (this.minHours = t.getHours()),
              (this.minMinutes = t.getMinutes()),
              this.d.lastSelectedDate &&
                this.d.lastSelectedDate.getHours() > t.getHours() &&
                (this.minMinutes = this.opts.minMinutes);
          },
          _setMaxTimeFromDate: function (t) {
            (this.maxHours = t.getHours()),
              (this.maxMinutes = t.getMinutes()),
              this.d.lastSelectedDate &&
                this.d.lastSelectedDate.getHours() < t.getHours() &&
                (this.maxMinutes = this.opts.maxMinutes);
          },
          _setDefaultMinMaxTime: function () {
            var t = 23,
              e = 59,
              i = this.opts;
            (this.minHours = i.minHours < 0 || i.minHours > t ? 0 : i.minHours),
              (this.minMinutes =
                i.minMinutes < 0 || i.minMinutes > e ? 0 : i.minMinutes),
              (this.maxHours =
                i.maxHours < 0 || i.maxHours > t ? t : i.maxHours),
              (this.maxMinutes =
                i.maxMinutes < 0 || i.maxMinutes > e ? e : i.maxMinutes);
          },
          _validateHoursMinutes: function (t) {
            this.hours < this.minHours
              ? (this.hours = this.minHours)
              : this.hours > this.maxHours && (this.hours = this.maxHours),
              this.minutes < this.minMinutes
                ? (this.minutes = this.minMinutes)
                : this.minutes > this.maxMinutes &&
                  (this.minutes = this.maxMinutes);
          },
          _buildHTML: function () {
            var i = s.getLeadingZeroNum,
              a = {
                hourMin: this.minHours,
                hourMax: i(this.maxHours),
                hourStep: this.opts.hoursStep,
                hourValue: this.hours,
                hourVisible: i(this.displayHours),
                minMin: this.minMinutes,
                minMax: i(this.maxMinutes),
                minStep: this.opts.minutesStep,
                minValue: i(this.minutes),
              },
              n = s.template(t, a);
            (this.$timepicker = e(n).appendTo(this.d.$datepicker)),
              (this.$ranges = e('[type="range"]', this.$timepicker)),
              (this.$hours = e('[name="hours"]', this.$timepicker)),
              (this.$minutes = e('[name="minutes"]', this.$timepicker)),
              (this.$hoursText = e(
                ".datepicker--time-current-hours",
                this.$timepicker
              )),
              (this.$minutesText = e(
                ".datepicker--time-current-minutes",
                this.$timepicker
              )),
              this.d.ampm &&
                ((this.$ampm = e('<span class="datepicker--time-current-ampm">')
                  .appendTo(e(".datepicker--time-current", this.$timepicker))
                  .html(this.dayPeriod)),
                this.$timepicker.addClass("-am-pm-"));
          },
          _updateCurrentTime: function () {
            var t = s.getLeadingZeroNum(this.displayHours),
              e = s.getLeadingZeroNum(this.minutes);
            this.$hoursText.html(t),
              this.$minutesText.html(e),
              this.d.ampm && this.$ampm.html(this.dayPeriod);
          },
          _updateRanges: function () {
            this.$hours
              .attr({ min: this.minHours, max: this.maxHours })
              .val(this.hours),
              this.$minutes
                .attr({ min: this.minMinutes, max: this.maxMinutes })
                .val(this.minutes);
          },
          _handleDate: function (t) {
            this._setDefaultMinMaxTime(),
              t &&
                (s.isSame(t, this.d.opts.minDate)
                  ? this._setMinTimeFromDate(this.d.opts.minDate)
                  : s.isSame(t, this.d.opts.maxDate) &&
                    this._setMaxTimeFromDate(this.d.opts.maxDate)),
              this._validateHoursMinutes(t);
          },
          update: function () {
            this._updateRanges(), this._updateCurrentTime();
          },
          _getValidHoursFromDate: function (t, e) {
            var i = t,
              a = t;
            t instanceof Date && ((i = s.getParsedDate(t)), (a = i.hours));
            var n = e || this.d.ampm,
              h = "am";
            if (n)
              switch (!0) {
                case 0 == a:
                  a = 12;
                  break;
                case 12 == a:
                  h = "pm";
                  break;
                case a > 11:
                  (a -= 12), (h = "pm");
              }
            return { hours: a, dayPeriod: h };
          },
          set hours(t) {
            this._hours = t;
            var e = this._getValidHoursFromDate(t);
            (this.displayHours = e.hours), (this.dayPeriod = e.dayPeriod);
          },
          get hours() {
            return this._hours;
          },
          _onChangeRange: function (t) {
            var i = e(t.target),
              s = i.attr("name");
            (this.d.timepickerIsActive = !0),
              (this[s] = i.val()),
              this._updateCurrentTime(),
              this.d._trigger("timeChange", [this.hours, this.minutes]),
              this._handleDate(this.d.lastSelectedDate),
              this.update();
          },
          _onSelectDate: function (t, e) {
            this._handleDate(e), this.update();
          },
          _onMouseEnterRange: function (t) {
            var i = e(t.target).attr("name");
            e(".datepicker--time-current-" + i, this.$timepicker).addClass(
              "-focus-"
            );
          },
          _onMouseOutRange: function (t) {
            var i = e(t.target).attr("name");
            this.d.inFocus ||
              e(".datepicker--time-current-" + i, this.$timepicker).removeClass(
                "-focus-"
              );
          },
          _onMouseUpRange: function (t) {
            this.d.timepickerIsActive = !1;
          },
        });
    })();
})(
  window,
  jQuery
); /* Start:"a:4:{s:4:"full";s:53:"/bitrix/templates/delko/js/app.min.js?160389089210662";s:6:"source";s:37:"/bitrix/templates/delko/js/app.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
("use strict");
function is_empty(e) {
  var t;
  return (
    e.find(".req").each(function () {
      0 != $(this).val().length && $(this).val().replace(/\s+/g, "")
        ? $(this).hasClass("phone") && 17 != $(this).val().length
          ? ($(this).addClass("invalid"), (t = 0))
          : $(this).hasClass("mail") && !validateEmail($(this).val())
          ? ($(this).addClass("invalid"), (t = 0))
          : $(this).removeClass("invalid")
        : ($(this).addClass("invalid"), (t = 0));
    }),
    0 != t && (t = 1),
    t
  );
}
function validateEmail(e) {
  return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(e);
}
function getScrollbarWidth() {
  var e = document.createElement("div");
  (e.style.visibility = "hidden"),
    (e.style.width = "100px"),
    (e.style.msOverflowStyle = "scrollbar"),
    document.body.appendChild(e);
  var t = e.offsetWidth;
  e.style.overflow = "scroll";
  var s = document.createElement("div");
  (s.style.width = "100%"), e.appendChild(s);
  var i = s.offsetWidth;
  return e.parentNode.removeChild(e), t - i;
}
if (
  ($(document).ready(function () {
    function e(e) {
      return (
        t(e, !1)
          ? ($(e).find(".btn").addClass("active"),
            $(e).find("input[name=confirm]").addClass("active"))
          : ($(e).find(".btn").removeClass("active"),
            $(e).find("input[name=confirm]").removeClass("active")),
        !1
      );
    }
    function t(e, t = !0) {
      let s = !0;
      return (
        e.find("input").each(function () {
          if (
            $(this).hasClass("not_required") ||
            (0 !== $(this).val().length && $(this).val().replace(/\s+/g, ""))
          )
            if ("phone" === $(this).attr("name") && 18 !== $(this).val().length)
              t && $(this).closest("label").addClass("invalid"), (s = !1);
            else if ($(this).hasClass("mail") && !validateEmail($(this).val()))
              t && $(this).closest("label").addClass("invalid"), (s = !1);
            else if (
              "radio" !== $(this).attr("type") ||
              $(this).hasClass("not_required")
            )
              "checkbox" === $(this).attr("type") &&
              "confirm" === $(this).attr("name") &&
              !0 == !$(this).prop("checked")
                ? (t && $(this).closest("label").addClass("invalid"), (s = !1))
                : $(this).closest("label").removeClass("invalid");
            else {
              let i = $(this).attr("name");
              e.find("input[name=" + i + "]:checked").length ||
                (t && $(this).closest("label").addClass("invalid"), (s = !1));
            }
          else t && $(this).closest("label").addClass("invalid"), (s = !1);
        }),
        s
      );
    }
    $(".news_search select").change(function () {
      $(this).closest("form").submit();
    }),
      $(".button_up").click(function () {
        return $("html, body").animate({ scrollTop: 0 }, 500), !1;
      }),
      $(window).scroll(function () {
        $(this).scrollTop() > 140
          ? $(".button_up").css("display", "flex")
          : $(".button_up").css("display", "none");
      }),
      $(".vacancy_selector").change(function () {
        $(".vacancy_prev").css("display", "none"),
          $('.vacancy_prev[data-city="' + $(this).val() + '"]').css(
            "display",
            "block"
          );
      }),
      $('input[name="e"]').change(function () {
        1 == $(this).val()
          ? ($(".show_cat_e").slideDown(),
            $(".show_cat_e").find("input").removeClass("not_required"))
          : ($(".show_cat_e").slideUp(),
            $(".show_cat_e").find("input").addClass("not_required"));
      }),
      $(".gm_info_item").click(function () {
        myMap.geoObjects.removeAll(),
          "ofis" == $(this).data("type")
            ? ofis.forEach(function (e, t, s) {
                myMap.geoObjects.add(e);
              })
            : "eur" == $(this).data("type")
            ? eur.forEach(function (e, t, s) {
                myMap.geoObjects.add(e);
              })
            : "cis" == $(this).data("type")
            ? cis.forEach(function (e, t, s) {
                myMap.geoObjects.add(e);
              })
            : "rus" == $(this).data("type") &&
              rus.forEach(function (e, t, s) {
                myMap.geoObjects.add(e);
              });
      }),
      $(".branch_h").click(function () {
        $(this).closest(".branch").hasClass("active")
          ? ($(".branch").removeClass("active"), $(".branch_b").slideUp(300))
          : ($(".branch").removeClass("active"),
            $(".branch_b").slideUp(300),
            $(this).closest(".branch").addClass("active"),
            $(this).next(".branch_b").slideToggle(300));
      }),
      window.matchMedia("(max-width: 640px)").matches
        ? ($(".faq_title").each(function (e) {
            $(this).append(
              "<div class='faq_par'>" + $(".faq_par").eq(e).html() + "</div>"
            );
          }),
          $(".faq_title").removeClass("active"),
          $(".faq_title > p").click(function () {
            $(this).closest(".faq_title").toggleClass("active"),
              $(this).next(".faq_par").slideToggle(300);
          }))
        : $(".faq_title > p").click(function () {
            if (!$(this).hasClass("active")) {
              let e = $(this).closest(".faq_title").index(),
                t = $(".faq_right .faq_par");
              $(".faq_title").removeClass("active"),
                t.removeClass("active"),
                $(this).closest(".faq_title").addClass("active"),
                t.eq(e).addClass("active");
            }
          }),
      $(document).on("click", ".faq_item > p", function () {
        $(this).toggleClass("active"),
          $(this).next(".faq_body").slideToggle(300);
      }),
      $(".mobile_nav > ul > li").click(function () {
        $(this).find("ul").slideToggle(300);
      }),
      $(".nav_icon").click(function () {
        $(this).toggleClass("active"),
          $(this).closest(".mobile_nav_block").toggleClass("active");
      }),
      $(".step-form .btn").click(function () {
        if ("submit" == $(this).attr("type")) return !0;
        let e = $(this).closest("form").find(".step-form-item.active").index();
        return (
          t($(this).closest("form").find(".step-form-item").eq(e)) &&
            (e++,
            $(this).closest("form").find(".step-form-item").eq(e).length ||
              ($(this).closest("form").trigger("reset"),
              (e = 0),
              $(this)
                .closest(".step-form-box")
                .find(".step-form-nav p")
                .removeClass("active")),
            $(this)
              .closest("form")
              .find(".step-form-item")
              .removeClass("active"),
            $(this)
              .closest("form")
              .find(".step-form-item")
              .eq(e)
              .addClass("active"),
            $(this)
              .closest(".step-form-box")
              .find(".step-form-nav p")
              .eq(e)
              .addClass("active")),
          !1
        );
      }),
      $(".gotoform").click(function () {
        $([document.documentElement, document.body]).animate(
          { scrollTop: $(".page_form_block").offset().top },
          1e3
        );
      }),
      $(".step-form input").on("keyup change", function () {
        e($(this).closest(".step-form-item"));
      }),
      $(".page_form_box  input").on("keyup change", function () {
        e($(this).closest(".page_form_box "));
      }),
      $(".form_subscr\t input").on("keyup change", function () {
        e($(this).closest(".form_subscr "));
      }),
      $(".mform  input").on("keyup change", function () {
        e($(this).closest(".mform "));
      }),
      $(".input-item input").focus(function () {
        $(this).closest("label").addClass("focus"),
          $(this).closest("label").hasClass("invalid") &&
            $(this).closest("label").removeClass("invalid");
      }),
      $(".input-item input").blur(function () {
        $(this).closest("label").removeClass("focus");
      }),
      $(".radio-item input").change(function () {
        let e = $(this).attr("name");
        $(this).closest("label").hasClass("invalid") &&
          $(this)
            .closest("form")
            .find("input[name=" + e + "]")
            .parent("label")
            .removeClass("invalid");
      }),
      $(".check-item input").change(function () {
        let e = $(this).attr("name");
        $(this).closest("label").hasClass("invalid") &&
          $(this)
            .closest("form")
            .find("input[name=" + e + "]")
            .parent("label")
            .removeClass("invalid");
      });
    var s = $.Suggestions.prototype.formatResult;
    $("input[name=from_address],input[name=to_address]").suggestions({
      token: "448ae29866cda1748378434a1f8e10e72684014a",
      type: "ADDRESS",
      bounds: "city",
      constraints: { locations: { city_type_full: "Ð³Ð¾Ñ€Ð¾Ð´" } },
      formatResult: function (e, t, i, a) {
        var n = i.data.city;
        return (i.value = n), s.call(this, n, t, i, a);
      },
      formatSelected: function (e) {
        return e.data.city;
      },
      onSelect: function (e) {
        console.log(e);
      },
    }),
      $.fn.lightGallery && $(".vacancy-photos").lightGallery(),
      $(".slug_page_top_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        appendArrows: $(".slug_page_top_slider-arrows"),
        lazyLoad: "ondemand",
      }),
      $(".autopark_top-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
        fade: !0,
        appendArrows: $(".autopark_top-slider_arrows"),
        asNavFor: ".autopark_nav-slider",
        lazyLoad: "ondemand",
      }),
      $(".autopark_nav-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".autopark_top-slider",
        arrows: !1,
        focusOnSelect: !0,
        centerMode: !0,
        centerPadding: "160px",
        responsive: [
          { breakpoint: 960, settings: { centerPadding: "60px" } },
          {
            breakpoint: 440,
            settings: { slidesToShow: 3, centerPadding: "0px" },
          },
        ],
        lazyLoad: "ondemand",
      }),
      $(".reviews_slider").slick({
        infinite: !0,
        slidesToShow: 3,
        swipe: !0,
        fade: !1,
        swipeToSlide: !0,
        speed: 500,
        arrows: !0,
        appendArrows: $(".reviews_slider_arrows"),
        responsive: [
          { breakpoint: 640, settings: { slidesToShow: 2 } },
          { breakpoint: 440, settings: { slidesToShow: 1 } },
        ],
        lazyLoad: "ondemand",
      }),
      $(".reviews_slider").on("afterChange", function (e, t) {
        $(".review_slide iframe").each(function () {
          $(this)[0].contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        });
      }),
      $(".page_slider").slick({
        infinite: !0,
        slidesToShow: 1,
        swipe: !0,
        fade: !1,
        swipeToSlide: !0,
        speed: 500,
        autoplay: !0,
        autoplaySpeed: 4e3,
        arrows: !0,
        appendArrows: $(".page_slider_arrows"),
        lazyLoad: "ondemand",
      }),
      $(".main_block_slider").slick({
        infinite: !0,
        slidesToShow: 1,
        swipe: !0,
        fade: !0,
        swipeToSlide: !0,
        speed: 500,
        autoplay: !0,
        autoplaySpeed: 4e3,
        arrows: !0,
        appendArrows: $(".main_slider_arrows"),
        lazyLoad: "ondemand",
      }),
      $(".news_prev_slider").slick({
        infinite: !1,
        slidesToShow: 3,
        swipe: !0,
        swipeToSlide: !0,
        arrows: !0,
        appendArrows: $(".news_slider_arrows"),
        responsive: [
          { breakpoint: 640, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
        lazyLoad: "ondemand",
      }),
      $(".manager_slider").slick({
        infinite: !1,
        slidesToShow: 4,
        swipe: !0,
        swipeToSlide: !0,
        arrows: !0,
        appendArrows: $(".manager_slider_arrows"),
        responsive: [
          { breakpoint: 769, settings: { slidesToShow: 3 } },
          { breakpoint: 640, settings: { slidesToShow: 2 } },
          { breakpoint: 440, settings: { slidesToShow: 1 } },
        ],
        lazyLoad: "ondemand",
      });
    let i,
      a = [];
    function n() {
      $(".page_wrapper").removeAttr("style"),
        $(".black_layout").fadeOut(200),
        $(".popup_wrapper").fadeOut(200),
        $("html,body").scrollTop(i),
        (a = []);
    }
    $(document).on("click", ".popup_open", function (e) {
      e.preventDefault(),
        (function (e) {
          $(".black_layout").fadeIn(200),
            (i = $(window).scrollTop()),
            a.length && $(a[a.length - 1]).fadeOut(200);
          $(e).css("top", "0px").fadeIn(200),
            a.push(e),
            $(".page_wrapper").css(
              "cssText",
              "overflow: hidden; position: relative; height: 100%; padding-right:" +
                getScrollbarWidth() +
                "px"
            );
        })($(e.target)[0].attributes.href.nodeValue);
    }),
      $(document).on("click", ".close_popup,.close_btn", function (e) {
        e.preventDefault(), n();
      }),
      $(document).on("click", ".back_popup,.back_btn", function (e) {
        e.preventDefault(),
          $(a[a.length - 1]).fadeOut(200),
          a.splice(-1, 1),
          a.length && $(a[a.length - 1]).fadeIn(200);
      }),
      $(".black_layout,.popup_wrapper").mousedown(function (e) {
        if ($(e.target).closest(".popup").length) return 0;
        n();
      }),
      $(".file-item input").change(function () {
        let e = $(this).val();
        if (e) {
          let t =
              e.indexOf("\\") >= 0 ? e.lastIndexOf("\\") : e.lastIndexOf("/"),
            s = e.substring(t);
          (0 !== s.indexOf("\\") && 0 !== s.indexOf("/")) ||
            (s = s.substring(1)),
            $(this).next("span").text(s);
        }
      });
    let o = $("input[name=phone]");
    o.length &&
      (o.mask("+7 (000) 000-00-00"),
      o.on("focus", function () {
        0 === $(this).val().length && $(this).val("+7 (");
      }));
    let l = $("input[name=birth-date]");
    l.length && l.datepicker({ autoClose: !0 });
    let r = $("input[name=date]");
    r.length && r.datepicker({ autoClose: !0, minDate: new Date() }),
      $(".form").submit(function () {
        var e = $(this),
          s = new FormData($(this)[0]);
        return (
          t(e) &&
            $.ajax({
              type: "POST",
              url: "/include/form_handler.php",
              data: s,
              contentType: !1,
              processData: !1,
              success: function (t) {
                console.log(t),
                  e.trigger("reset"),
                  e.data("success")
                    ? (window.location = e.data("success"))
                    : (window.location = "/thanks/");
              },
            }),
          !1
        );
      }),
      $(".form_subscr").submit(function () {
        var e = $(this),
          t = $(this).serialize();
        return (
          $.ajax({
            type: "POST",
            url: "/include/form_handler_subscribe.php",
            data: t,
            success: function (t) {
              console.log(t),
                e.trigger("reset"),
                (window.location = "/thanks/");
            },
          }),
          !1
        );
      });
  }),
  "undefined" != typeof LazyLoad)
)
  var lazyLoadInstance = new LazyLoad(); /* /bitrix/templates/delko/js/jquery-3.5.1.min.js?160285219589476*/ /* /bitrix/templates/delko/js/lazyload.min.js?16028521957972*/ /* /bitrix/templates/delko/js/slick.min.js?160285219442784*/ /* /bitrix/templates/delko/js/mask.js?16028521966843*/ /* /bitrix/templates/delko/js/jquery.suggestions.min.js?160285219558518*/ /* /bitrix/templates/delko/js/datepicker.min.js?160285219435542*/ /* /bitrix/templates/delko/js/app.min.js?160389089210662*/
/* End */
