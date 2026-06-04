import In from "react";
function _f(t) {
  let n = 0, e;
  return () => {
    if (n === 2)
      return e;
    if (n === 1)
      throw new Error("Binding demanded before initialized");
    return n = 1, e = t(), n = 2, e;
  };
}
function f() {
  throw new Error("Failed pattern match");
}
function Ge(t, n) {
  return n > 0 ? Math.floor(t / n) : n < 0 ? -Math.floor(t / -n) : 0;
}
const Cn = (t) => (n) => t, z = function(t) {
  return function(n) {
    for (var e = n.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = t(n[o]);
    return r;
  };
}, El = { map: z }, df = (t) => t, un = function(t) {
  return t.toString();
}, hf = function(t) {
  var n = t.toString();
  return isNaN(n + ".0") ? n : n + ".0";
}, qs = function(t) {
  var n = t.length;
  return '"' + t.replace(
    /[\0-\x1F\x7F"\\]/g,
    // eslint-disable-line no-control-regex
    function(e, r) {
      switch (e) {
        case '"':
        case "\\":
          return "\\" + e;
        case "\x07":
          return "\\a";
        case "\b":
          return "\\b";
        case "\f":
          return "\\f";
        case `
`:
          return "\\n";
        case "\r":
          return "\\r";
        case "	":
          return "\\t";
        case "\v":
          return "\\v";
      }
      var o = r + 1, i = o < n && t[o] >= "0" && t[o] <= "9" ? "\\&" : "";
      return "\\" + e.charCodeAt(0).toString(10) + i;
    }
  ) + '"';
}, Lu = (t) => t, Nn = /* @__PURE__ */ Lu("LT"), xn = /* @__PURE__ */ Lu("GT"), Gn = /* @__PURE__ */ Lu("EQ"), v = (t, n) => ({ tag: t, _1: n }), J = /* @__PURE__ */ v("Nothing"), qt = (t) => v("Just", t), pf = (t) => {
  if (t.tag === "Nothing")
    return !0;
  if (t.tag === "Just")
    return !1;
  f();
}, $f = (t) => {
  if (t.tag === "Nothing")
    return !1;
  if (t.tag === "Just")
    return !0;
  f();
}, $o = function(t) {
  return function(n) {
    return function(e) {
      for (var r = n, o = e.length, i = o - 1; i >= 0; i--)
        r = t(e[i])(r);
      return r;
    };
  };
}, x = function(t) {
  return function(n) {
    return function(e) {
      for (var r = n, o = e.length, i = 0; i < o; i++)
        r = t(r)(e[i]);
      return r;
    };
  };
}, Hi = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldr((o) => {
    const i = r(o);
    return (s) => n.apply(n.Functor0().map((u) => df)(i))(s);
  })(t.pure());
}, Sl = (t) => {
  const n = Hi(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, Cl = {
  foldr: (t) => (n) => (e) => {
    if (e.tag === "Nothing")
      return n;
    if (e.tag === "Just")
      return t(e._1)(n);
    f();
  },
  foldl: (t) => (n) => (e) => {
    if (e.tag === "Nothing")
      return n;
    if (e.tag === "Just")
      return t(n)(e._1);
    f();
  },
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => (r) => {
      if (r.tag === "Nothing")
        return n;
      if (r.tag === "Just")
        return e(r._1);
      f();
    };
  }
}, Ht = {
  foldr: $o,
  foldl: x,
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => Ht.foldr((r) => (o) => t.Semigroup0().append(e(r))(o))(n);
  }
}, Pl = null;
function or(t, n, e) {
  return t == null ? n : e(t);
}
const b = (t, n) => ({ tag: "Tuple", _1: t, _2: n }), Oe = (t) => (n) => b(t, n), Oi = (t) => t._2, zi = (t) => t._1, Gl = function(t) {
  return function() {
    return t;
  };
}, Il = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return qi.pure(e(r))();
  },
  Functor0: () => Al
}, qi = { pure: Gl, Apply0: () => Il }, Al = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, Fl = function(t) {
  return function() {
    console.log(t);
  };
}, Lc = function(t) {
  return function() {
    console.warn(t);
  };
}, Tt = typeof Array.prototype.flatMap == "function" ? function(t) {
  return function(n) {
    return t.flatMap(n);
  };
} : function(t) {
  return function(n) {
    for (var e = [], r = t.length, o = 0; o < r; o++)
      for (var i = n(t[o]), s = i.length, u = 0; u < s; u++)
        e.push(i[u]);
    return e;
  };
}, St = (t, n) => ({ tag: t, _1: n }), Rl = (t) => St("Right", t), Bl = {
  map: (t) => (n) => {
    if (n.tag === "Left")
      return St("Left", n._1);
    if (n.tag === "Right")
      return St("Right", t(n._1));
    f();
  }
}, mf = {
  apply: (t) => (n) => {
    if (t.tag === "Left")
      return St("Left", t._1);
    if (t.tag === "Right") {
      if (n.tag === "Left")
        return St("Left", n._1);
      if (n.tag === "Right")
        return St("Right", t._1(n._1));
    }
    f();
  },
  Functor0: () => Bl
}, Ql = {
  bind: (t) => {
    if (t.tag === "Left") {
      const n = t._1;
      return (e) => St("Left", n);
    }
    if (t.tag === "Right") {
      const n = t._1;
      return (e) => e(n);
    }
    f();
  },
  Apply0: () => mf
}, Wl = { pure: Rl, Apply0: () => mf }, yf = { Applicative0: () => Wl, Bind1: () => Ql }, Dl = (t) => t, Hl = { map: (t) => (n) => t(n) }, Nf = { apply: (t) => (n) => t(n), Functor0: () => Hl }, Ol = { bind: (t) => (n) => n(t), Apply0: () => Nf }, zl = { pure: Dl, Apply0: () => Nf }, Ke = { Applicative0: () => zl, Bind1: () => Ol }, so = (t, n) => ({ tag: t, _1: n }), xf = (t) => so("Loop", t), ql = {
  tailRecM: (t) => {
    const n = (e) => {
      let r = e, o = !0, i;
      for (; o; ) {
        const s = r;
        if (s.tag === "Loop") {
          r = t(s._1);
          continue;
        }
        if (s.tag === "Done") {
          o = !1, i = s._1;
          continue;
        }
        f();
      }
      return i;
    };
    return (e) => n(t(e));
  },
  Monad0: () => Ke
}, Yl = function(t) {
  return function(n) {
    return function() {
      return t(n());
    };
  };
}, Xl = function(t) {
  return function() {
    return t;
  };
}, Vl = { map: Yl }, Ul = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return Jf.pure(e(r))();
  },
  Functor0: () => Vl
}, Jf = { pure: Xl, Apply0: () => Ul }, Kl = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, Ml = function(t, n) {
  return n.push(t);
}, jl = /* @__PURE__ */ Kl(Ml), Zl = (t, n) => ({ tag: "Iterator", _1: t, _2: n }), t_ = (t) => (n) => (e) => () => {
  let r = !1;
  const o = n._2;
  for (; !r; ) {
    const i = o.value, s = n._1(i);
    if (s.tag === "Just" && t(s._1)) {
      e.push(s._1), n._2.value;
      const u = n._2.value;
      n._2.value = u + 1 | 0;
      continue;
    }
    r = !0;
  }
}, n_ = (t) => (n) => () => {
  let e = !1;
  const r = t._2;
  for (; !e; ) {
    const o = r.value, i = r.value;
    r.value = i + 1 | 0;
    const s = t._1(o);
    if (s.tag === "Just") {
      n(s._1)();
      continue;
    }
    if (s.tag === "Nothing") {
      e = !0;
      continue;
    }
    f();
  }
}, Ft = function(t) {
  return function(n) {
    for (var e = n.length, r = Array(e), o = 0; o < e; o++)
      r[o] = t(o)(n[o]);
    return r;
  };
};
var Eu = function(t) {
  return function(n) {
    return t === n;
  };
};
const e_ = Eu, r_ = Eu, Qo = Eu, Su = function(t) {
  return function(n) {
    return function(e) {
      if (n.length !== e.length) return !1;
      for (var r = 0; r < n.length; r++)
        if (!t(n[r])(e[r])) return !1;
      return !0;
    };
  };
}, le = { eq: Qo }, o_ = { eq: r_ }, Ar = { eq: e_ };
var Cu = function(t) {
  return function(n) {
    return function(e) {
      return function(r) {
        return function(o) {
          return r < o ? t : r === o ? n : e;
        };
      };
    };
  };
};
const i_ = Cu, s_ = Cu, u_ = Cu, C = { compare: /* @__PURE__ */ u_(Nn)(Gn)(xn), Eq0: () => le }, at = { compare: /* @__PURE__ */ s_(Nn)(Gn)(xn), Eq0: () => o_ }, it = { compare: /* @__PURE__ */ i_(Nn)(Gn)(xn), Eq0: () => Ar }, c_ = function(t) {
  return t;
}, a_ = /* @__PURE__ */ (function() {
  function t(o) {
    return [o];
  }
  function n(o) {
    return function(i) {
      return [o, i];
    };
  }
  function e(o) {
    return function(i) {
      return function(s) {
        return [o, i, s];
      };
    };
  }
  function r(o) {
    return function(i) {
      return o.concat(i);
    };
  }
  return function(o) {
    return function(i) {
      return function(s) {
        return function(u) {
          return function(c) {
            function a(g, _) {
              switch (_ - g) {
                case 0:
                  return s([]);
                case 1:
                  return i(t)(u(c[g]));
                case 2:
                  return o(i(n)(u(c[g])))(u(c[g + 1]));
                case 3:
                  return o(o(i(e)(u(c[g])))(u(c[g + 1])))(u(c[g + 2]));
                default:
                  var d = g + Math.floor((_ - g) / 4) * 2;
                  return o(i(r)(a(g, d)))(a(d, _));
              }
            }
            return a(0, c.length);
          };
        };
      };
    };
  };
})(), f_ = (t) => t, yr = {
  traverse: (t) => {
    const n = t.Apply0();
    return a_(n.apply)(n.Functor0().map)(t.pure);
  },
  sequence: (t) => yr.traverse(t)(f_),
  Functor0: () => El,
  Foldable1: () => Ht
}, At = function(t, n) {
  for (var e = t > n ? -1 : 1, r = new Array(e * (n - t) + 1), o = t, i = 0; o !== n; )
    r[i++] = o, o += e;
  return r[i] = o, r;
};
var g_ = function(t, n) {
  if (t < 1)
    return [];
  var e = new Array(t);
  return e.fill(n);
}, l_ = function(t, n) {
  for (var e = [], r = 0, o = 0; o < t; o++)
    e[r++] = n;
  return e;
};
const __ = typeof Array.prototype.fill == "function" ? g_ : l_, Et = /* @__PURE__ */ (function() {
  function t(o, i) {
    this.head = o, this.tail = i;
  }
  var n = {};
  function e(o) {
    return function(i) {
      return new t(o, i);
    };
  }
  function r(o) {
    for (var i = [], s = 0, u = o; u !== n; )
      i[s++] = u.head, u = u.tail;
    return i;
  }
  return function(o, i) {
    return r(o(e)(n)(i));
  };
})(), Rt = function(t, n, e) {
  return e.length === 0 ? t({}) : n(e[0])(e.slice(1));
}, Tf = function(t, n, e, r) {
  for (var o = 0; o < r.length; o++) {
    var i = e(r[o]);
    if (n(i)) return i;
  }
  return t;
}, dr = function(t, n, e, r) {
  for (var o = 0, i = r.length; o < i; o++)
    if (e(r[o])) return t(o);
  return n;
}, vf = function(t, n, e, r) {
  for (var o = r.length - 1; o >= 0; o--)
    if (e(r[o])) return t(o);
  return n;
}, wf = function(t, n, e, r, o) {
  if (e < 0 || e > o.length) return n;
  var i = o.slice();
  return i.splice(e, 0, r), t(i);
}, kf = function(t, n, e, r) {
  if (e < 0 || e >= r.length) return n;
  var o = r.slice();
  return o.splice(e, 1), t(o);
}, Me = function(t, n, e, r, o) {
  if (e < 0 || e >= o.length) return n;
  var i = o.slice();
  return i[e] = r, t(i);
}, Jn = function(t) {
  return t.slice().reverse();
}, zn = function(t) {
  if (t.length <= 1e4)
    return Array.prototype.concat.apply([], t);
  for (var n = [], e = 0, r = t.length; e < r; e++)
    for (var o = t[e], i = 0, s = o.length; i < s; i++)
      n.push(o[i]);
  return n;
}, ft = function(t, n) {
  return n.filter(t);
}, d_ = function(t, n, e) {
  for (var r = e.length, o = n, i = new Array(r), s = 0; s < r; s++)
    o = t(o)(e[s]), i[s] = o;
  return i;
}, h_ = /* @__PURE__ */ (function() {
  function t(n, e, r, o, i, s) {
    var u, c, a, g, _, d, l;
    for (u = i + (s - i >> 1), u - i > 1 && t(n, e, o, r, i, u), s - u > 1 && t(n, e, o, r, u, s), c = i, a = u, g = i; c < u && a < s; )
      _ = o[c], d = o[a], l = e(n(_)(d)), l > 0 ? (r[g++] = d, ++a) : (r[g++] = _, ++c);
    for (; c < u; )
      r[g++] = o[c++];
    for (; a < s; )
      r[g++] = o[a++];
  }
  return function(n, e, r) {
    var o;
    return r.length < 2 ? r : (o = r.slice(0), t(n, e, o, r.slice(0), 0, r.length), o);
  };
})(), bt = function(t, n, e) {
  return e.slice(t, n);
}, Tn = function(t, n, e) {
  for (var r = n.length < e.length ? n.length : e.length, o = new Array(r), i = 0; i < r; i++)
    o[i] = t(n[i])(e[i]);
  return o;
}, qn = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (t(n[r])) return !0;
  return !1;
}, bf = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (!t(n[r])) return !1;
  return !0;
}, Lt = (t) => (n) => h_(
  t,
  (e) => {
    if (e === "GT")
      return 1;
    if (e === "EQ")
      return 0;
    if (e === "LT")
      return -1;
    f();
  },
  n
), p_ = (t) => (n) => Lt((e) => (r) => t.compare(n(e))(n(r))), Qt = (t) => (n) => (() => {
  const e = jl(n);
  return () => {
    const r = [...t];
    return e(r)(), r;
  };
})()(), Wo = (t) => {
  if (t.length === 0)
    return t.length - 1 | 0, J;
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? v("Just", { init: bt(0, t.length - 1 | 0, t), last: t[n] }) : J;
}, $_ = (t) => (n) => (e) => t >= 0 && t < e.length ? Me(qt, J, t, n(e[t]), e) : J, cr = (t) => (n) => {
  const r = ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if (c >= 0 && c < n.length) {
        if (t(n[c])) {
          i = c + 1 | 0;
          continue;
        }
        s = !1, u = v("Just", c);
        continue;
      }
      s = !1, u = J;
    }
    return u;
  })(0);
  if (r.tag === "Just")
    return r._1 === 0 ? { init: [], rest: n } : { init: bt(0, r._1, n), rest: bt(r._1, n.length, n) };
  if (r.tag === "Nothing")
    return { init: n, rest: [] };
  f();
}, Fr = (t) => (n) => {
  const e = Lt((r) => (o) => t(r._2)(o._2))(Ft(Oe)(n));
  return 0 < e.length ? z(Oi)(p_(it)(zi)((() => {
    const r = [e[0]];
    for (const o of e) {
      const i = t((() => {
        const s = r.length - 1 | 0;
        if (s >= 0 && s < r.length)
          return r[s]._2;
        f();
      })())(o._2);
      (i === "LT" || i === "GT" || i !== "EQ") && r.push(o);
    }
    return r;
  })())) : [];
}, m_ = (t) => (n) => {
  const e = [], o = Zl(
    (i) => i >= 0 && i < n.length ? v("Just", n[i]) : J,
    { value: 0 }
  );
  return n_(o)((i) => () => {
    const s = [];
    s.push(i), t_(t(i))(o)(s)(), e.push(s);
  })(), e;
}, Ut = (t) => (n) => {
  const e = dr(qt, J, t, n);
  return e.tag === "Just" ? v("Just", n[e._1]) : J;
}, Lf = (t) => (n) => ft(t, n), Hn = (t) => (n) => (e) => {
  const r = dr(qt, J, (o) => t.eq(o)(n), e);
  if (r.tag === "Nothing")
    return !1;
  if (r.tag === "Just")
    return !0;
  f();
}, Ef = (t) => (n) => Tt(n)(t), yt = (t) => Ef((n) => {
  const e = t(n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [e._1];
  f();
}), y_ = isFinite, je = Math.abs, N_ = Math.acos, ar = function(t) {
  return function(n) {
    return Math.atan2(t, n);
  };
}, Yi = Math.ceil, oe = Math.cos, Xi = Math.exp, ye = Math.floor, Ec = Math.log, x_ = function(t) {
  return function(n) {
    return Math.min(t, n);
  };
}, Ys = function(t) {
  return function(n) {
    return Math.pow(t, n);
  };
}, ur = Math.round, Kn = Math.sin, Sn = Math.sqrt, J_ = Math.tan, T_ = function(t) {
  return function(n) {
    return function(e) {
      return (e | 0) === e ? t(e) : n;
    };
  };
}, et = function(t) {
  return t;
}, v_ = function(t) {
  return function(n) {
    return function(e) {
      var r;
      e < 11 ? r = "[0-" + (e - 1).toString() + "]" : e === 11 ? r = "[0-9a]" : r = "[0-9a-" + String.fromCharCode(86 + e) + "]";
      var o = new RegExp("^[\\+\\-]?" + r + "+$", "i");
      return function(i) {
        if (o.test(i)) {
          var s = parseInt(i, e);
          return (s | 0) === s ? t(s) : n;
        } else
          return n;
      };
    };
  };
}, w_ = /* @__PURE__ */ v_(qt)(J), k_ = /* @__PURE__ */ w_(10), Sf = /* @__PURE__ */ T_(qt)(J), $n = (t) => {
  if (!y_(t))
    return 0;
  if (t >= et(2147483647))
    return 2147483647;
  if (t <= et(-2147483648))
    return -2147483648;
  const n = Sf(t);
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return n._1;
  f();
}, zt = (t, n, e) => ({ tag: t, _1: n, _2: e }), Yt = /* @__PURE__ */ zt("Nil"), Xt = {
  foldr: (t) => (n) => {
    const e = Xt.foldl((i) => (s) => t(s)(i))(n), o = ((i) => (s) => {
      let u = i, c = s, a = !0, g;
      for (; a; ) {
        const _ = u, d = c;
        if (d.tag === "Nil") {
          a = !1, g = _;
          continue;
        }
        if (d.tag === "Cons") {
          u = zt("Cons", d._1, _), c = d._2;
          continue;
        }
        f();
      }
      return g;
    })(Yt);
    return (i) => e(o(i));
  },
  foldl: (t) => (e) => (r) => {
    let o = e, i = r, s = !0, u;
    for (; s; ) {
      const c = o, a = i;
      if (a.tag === "Nil") {
        s = !1, u = c;
        continue;
      }
      if (a.tag === "Cons") {
        o = t(c)(a._1), i = a._2;
        continue;
      }
      f();
    }
    return u;
  },
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => Xt.foldl((r) => {
      const o = t.Semigroup0().append(r);
      return (i) => o(e(i));
    })(n);
  }
}, b_ = function(t) {
  return function(n) {
    return function(e) {
      return function(r) {
        return function(o) {
          return function(i) {
            for (var s = [], u = i; ; ) {
              var c = o(u);
              s.push(e(c));
              var a = r(c);
              if (t(a)) return s;
              u = n(a);
            }
          };
        };
      };
    };
  };
}, L_ = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, E_ = { unfoldr1: /* @__PURE__ */ b_(pf)(L_)(zi)(Oi) }, S_ = function(t) {
  return function(n) {
    return function(e) {
      return function(r) {
        return function(o) {
          return function(i) {
            for (var s = [], u = i; ; ) {
              var c = o(u);
              if (t(c)) return s;
              var a = n(c);
              s.push(e(a)), u = r(a);
            }
          };
        };
      };
    };
  };
}, C_ = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, ne = {
  unfoldr: /* @__PURE__ */ S_(pf)(C_)(zi)(Oi),
  Unfoldable10: () => E_
}, Ot = (t, n, e, r, o, i, s) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s }), Mn = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), Ko = (t, n, e) => ({ tag: "Split", _1: t, _2: n, _3: e }), Sc = (t, n, e) => ({ tag: "SplitLast", _1: t, _2: n, _3: e }), A = /* @__PURE__ */ Ot("Leaf"), ve = /* @__PURE__ */ Mn("IterLeaf"), an = (t, n, e, r) => {
  if (e.tag === "Leaf") {
    if (r.tag === "Leaf")
      return Ot("Node", 1, 1, t, n, e, r);
    if (r.tag === "Node")
      return Ot("Node", 1 + r._1 | 0, 1 + r._2 | 0, t, n, e, r);
    f();
  }
  if (e.tag === "Node") {
    if (r.tag === "Leaf")
      return Ot("Node", 1 + e._1 | 0, 1 + e._2 | 0, t, n, e, r);
    if (r.tag === "Node")
      return Ot("Node", e._1 > r._1 ? 1 + e._1 | 0 : 1 + r._1 | 0, (1 + e._2 | 0) + r._2 | 0, t, n, e, r);
  }
  f();
}, Yn = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r.tag === "Leaf" ? Ot("Node", 1, 1, t, n, A, A) : r.tag === "Node" && r._1 > 1 ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      f();
    })() ? an(r._5._3, r._5._4, an(t, n, e, r._5._5), an(r._3, r._4, r._5._6, r._6)) : an(r._3, r._4, an(t, n, e, r._5), r._6) : an(t, n, e, r);
  if (e.tag === "Node")
    return r.tag === "Node" ? r._1 > (e._1 + 1 | 0) ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      f();
    })() ? an(r._5._3, r._5._4, an(t, n, e, r._5._5), an(r._3, r._4, r._5._6, r._6)) : an(r._3, r._4, an(t, n, e, r._5), r._6) : e._1 > (r._1 + 1 | 0) ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      f();
    })() ? an(e._6._3, e._6._4, an(e._3, e._4, e._5, e._6._5), an(t, n, e._6._6, r)) : an(e._3, e._4, e._5, an(t, n, e._6, r)) : an(t, n, e, r) : r.tag === "Leaf" && e._1 > 1 ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      f();
    })() ? an(e._6._3, e._6._4, an(e._3, e._4, e._5, e._6._5), an(t, n, e._6._6, r)) : an(e._3, e._4, e._5, an(t, n, e._6, r)) : an(t, n, e, r);
  f();
}, Rr = (t, n, e) => {
  if (e.tag === "Leaf")
    return Ko(J, A, A);
  if (e.tag === "Node") {
    const r = t(n)(e._3);
    if (r === "LT") {
      const o = Rr(t, n, e._5);
      return Ko(o._1, o._2, Yn(e._3, e._4, o._3, e._6));
    }
    if (r === "GT") {
      const o = Rr(t, n, e._6);
      return Ko(o._1, Yn(e._3, e._4, e._5, o._2), o._3);
    }
    if (r === "EQ")
      return Ko(v("Just", e._4), e._5, e._6);
  }
  f();
}, Cf = (t, n, e, r) => {
  if (r.tag === "Leaf")
    return Sc(t, n, e);
  if (r.tag === "Node") {
    const o = Cf(r._3, r._4, r._5, r._6);
    return Sc(o._1, o._2, Yn(t, n, e, o._3));
  }
  f();
}, Do = (t, n) => {
  if (t.tag === "Leaf")
    return n;
  if (t.tag === "Node") {
    const e = Cf(t._3, t._4, t._5, t._6);
    return Yn(e._1, e._2, e._3, n);
  }
  f();
}, Ie = (t, n, e) => {
  if (n.tag === "Leaf")
    return A;
  if (e.tag === "Leaf")
    return n;
  if (e.tag === "Node") {
    const r = Rr(t, e._3, n);
    return Do(Ie(t, r._2, e._5), Ie(t, r._3, e._6));
  }
  f();
}, _i = (t, n, e, r) => {
  if (e.tag === "Leaf" || r.tag === "Leaf")
    return A;
  if (r.tag === "Node") {
    const o = Rr(t, r._3, e), i = _i(t, n, o._2, r._5), s = _i(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return Yn(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return Do(i, s);
  }
  f();
}, Pn = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r;
  if (r.tag === "Leaf")
    return e;
  if (r.tag === "Node") {
    const o = Rr(t, r._3, e), i = Pn(t, n, o._2, r._5), s = Pn(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return Yn(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return Yn(r._3, r._4, i, s);
  }
  f();
}, P_ = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return A;
    if (r.tag === "Node") {
      const o = n(r._3)(r._4);
      if (o.tag === "Just")
        return Yn(r._3, o._1, e(r._5), e(r._6));
      if (o.tag === "Nothing")
        return Do(e(r._5), e(r._6));
    }
    f();
  };
  return e;
}, G_ = (t) => (n) => (r) => {
  let o = r, i = !0, s;
  for (; i; ) {
    const u = o;
    if (u.tag === "IterLeaf") {
      i = !1, s = n();
      continue;
    }
    if (u.tag === "IterEmit") {
      i = !1, s = t(u._1, u._2, u._3);
      continue;
    }
    if (u.tag === "IterNode") {
      o = ((a) => (g) => {
        let _ = a, d = g, l = !0, h;
        for (; l; ) {
          const p = _, $ = d;
          if ($.tag === "Leaf") {
            l = !1, h = p;
            continue;
          }
          if ($.tag === "Node") {
            if ($._6.tag === "Leaf") {
              _ = Mn("IterEmit", $._3, $._4, p), d = $._5;
              continue;
            }
            _ = Mn("IterEmit", $._3, $._4, Mn("IterNode", $._6, p)), d = $._5;
            continue;
          }
          f();
        }
        return h;
      })(u._2)(u._1);
      continue;
    }
    f();
  }
  return s;
}, we = /* @__PURE__ */ G_((t, n, e) => v("Just", b(b(t, n), e)))((t) => J), wt = (t) => (n) => (e) => (r) => {
  const o = (i) => {
    if (i.tag === "Leaf")
      return Ot("Node", 1, 1, e, r, A, A);
    if (i.tag === "Node") {
      const s = t.compare(e)(i._3);
      if (s === "LT")
        return Yn(i._3, i._4, o(i._5), i._6);
      if (s === "GT")
        return Yn(i._3, i._4, i._5, o(i._6));
      if (s === "EQ")
        return Ot("Node", i._1, i._2, e, n(i._4)(r), i._5, i._6);
    }
    f();
  };
  return o;
}, U = (t) => (n) => (e) => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return Ot("Node", 1, 1, n, e, A, A);
    if (o.tag === "Node") {
      const i = t.compare(n)(o._3);
      if (i === "LT")
        return Yn(o._3, o._4, r(o._5), o._6);
      if (i === "GT")
        return Yn(o._3, o._4, o._5, r(o._6));
      if (i === "EQ")
        return Ot("Node", o._1, o._2, n, e, o._5, o._6);
    }
    f();
  };
  return r;
}, nn = (t) => (n) => n.foldl((e) => (r) => U(t)(r._1)(r._2)(e))(A), mo = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return A;
    if (r.tag === "Node") {
      const o = t.compare(n)(r._3);
      if (o === "LT")
        return Yn(r._3, r._4, e(r._5), r._6);
      if (o === "GT")
        return Yn(r._3, r._4, r._5, e(r._6));
      if (o === "EQ")
        return Do(r._5, r._6);
    }
    f();
  };
  return e;
}, Pf = (t) => {
  const n = t.compare;
  return (e) => (r) => (o) => {
    const i = Rr(n, r, o), s = e(i._1);
    if (s.tag === "Nothing")
      return Do(i._2, i._3);
    if (s.tag === "Just")
      return Yn(r, s._1, i._2, i._3);
    f();
  };
}, on = function(t) {
  return function(n) {
    return t + n | 0;
  };
}, Br = function(t) {
  return function(n) {
    return t + n;
  };
}, Xe = function(t) {
  return function(n) {
    if (n === 0) return 0;
    var e = Math.abs(n);
    return (t % e + e) % e;
  };
}, rn = function(t) {
  return function(n) {
    return t.length === 0 ? n : n.length === 0 ? t : t.concat(n);
  };
}, I_ = { append: rn }, A_ = { mempty: [], Semigroup0: () => I_ };
function Pu(t) {
  return function(n) {
    return function(e) {
      return t.apply(e, [n]);
    };
  };
}
const F_ = Pu(Number.prototype.toPrecision), R_ = Pu(Number.prototype.toFixed), B_ = Pu(Number.prototype.toExponential), Gf = (t, n) => ({ tag: t, _1: n }), If = (t) => (n) => (e) => {
  const r = it.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = it.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, Af = (t) => {
  if (t.tag === "Precision")
    return F_(t._1);
  if (t.tag === "Fixed")
    return R_(t._1);
  if (t.tag === "Exponential")
    return B_(t._1);
  f();
};
function Q_() {
  return Date.now();
}
function W_(t) {
  return function() {
    return t.getContext("2d");
  };
}
function D_(t) {
  return function() {
    return t.width;
  };
}
function H_(t) {
  return function() {
    return t.height;
  };
}
function O_(t) {
  return function(n) {
    return function() {
      t.width = n;
    };
  };
}
function z_(t) {
  return function(n) {
    return function() {
      t.height = n;
    };
  };
}
function Gu(t) {
  return function(n) {
    return function() {
      t.lineWidth = n;
    };
  };
}
function q_(t) {
  return function(n) {
    return function() {
      t.fillStyle = n;
    };
  };
}
function Y_(t) {
  return function(n) {
    return function() {
      t.strokeStyle = n;
    };
  };
}
function Ns(t) {
  return function(n) {
    return function() {
      t.lineCap = n;
    };
  };
}
function xs(t) {
  return function(n) {
    return function() {
      t.lineJoin = n;
    };
  };
}
function X_(t) {
  return function(n) {
    return function() {
      t.globalCompositeOperation = n;
    };
  };
}
function V_(t) {
  return function(n) {
    return function() {
      t.globalAlpha = n;
    };
  };
}
function Ff(t) {
  return function() {
    t.beginPath();
  };
}
function Iu(t) {
  return function() {
    t.stroke();
  };
}
function Au(t) {
  return function() {
    t.fill();
  };
}
function U_(t) {
  return function() {
    t.clip();
  };
}
function no(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.lineTo(n, e);
      };
    };
  };
}
function Rf(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.moveTo(n, e);
      };
    };
  };
}
function Bf(t) {
  return function() {
    t.closePath();
  };
}
function K_(t) {
  return function(n) {
    return function() {
      t.fillRect(n.x, n.y, n.width, n.height);
    };
  };
}
function M_(t) {
  return function(n) {
    return function() {
      t.clearRect(n.x, n.y, n.width, n.height);
    };
  };
}
function di(t) {
  return function(n) {
    return function() {
      t.scale(n.scaleX, n.scaleY);
    };
  };
}
function Xs(t) {
  return function(n) {
    return function() {
      t.translate(n.translateX, n.translateY);
    };
  };
}
function j_(t) {
  return function(n) {
    return function() {
      t.transform(n.a, n.b, n.c, n.d, n.e, n.f);
    };
  };
}
function Z_(t) {
  return function(n) {
    return function() {
      t.textAlign = n;
    };
  };
}
function t1(t) {
  return function(n) {
    return function() {
      t.textBaseline = n;
    };
  };
}
function n1(t) {
  return function(n) {
    return function() {
      t.font = n;
    };
  };
}
function e1(t) {
  return function(n) {
    return function(e) {
      return function(r) {
        return function() {
          t.fillText(n, e, r);
        };
      };
    };
  };
}
function ir(t) {
  return function() {
    t.save();
  };
}
function sr(t) {
  return function() {
    t.restore();
  };
}
function eo(t) {
  return function(n) {
    return function() {
      t.quadraticCurveTo(n.cpx, n.cpy, n.x, n.y);
    };
  };
}
function r1(t) {
  return function(n) {
    return function() {
      t.bezierCurveTo(n.cp1x, n.cp1y, n.cp2x, n.cp2y, n.x, n.y);
    };
  };
}
const Qf = (t) => t, Fu = (t) => t, Ru = (t) => t, Bu = (t) => t, Vi = (t) => t, o1 = /* @__PURE__ */ Vi("BaselineTop"), i1 = /* @__PURE__ */ Vi("BaselineMiddle"), s1 = /* @__PURE__ */ Vi("BaselineAlphabetic"), u1 = /* @__PURE__ */ Vi("BaselineBottom"), c1 = /* @__PURE__ */ Bu("AlignLeft"), a1 = /* @__PURE__ */ Bu("AlignRight"), f1 = /* @__PURE__ */ Bu("AlignCenter"), Qu = /* @__PURE__ */ Ru("BevelJoin"), Ui = /* @__PURE__ */ Ru("RoundJoin"), Wu = /* @__PURE__ */ Ru("MiterJoin"), Du = /* @__PURE__ */ Fu("Round"), Hu = /* @__PURE__ */ Fu("Square"), Ou = /* @__PURE__ */ Fu("Butt"), g1 = /* @__PURE__ */ Qf("SourceOver"), l1 = /* @__PURE__ */ Qf("Difference"), _1 = (t) => (n) => t1(t)((() => {
  if (n === "BaselineTop")
    return "top";
  if (n === "BaselineHanging")
    return "hanging";
  if (n === "BaselineMiddle")
    return "middle";
  if (n === "BaselineAlphabetic")
    return "alphabetic";
  if (n === "BaselineIdeographic")
    return "ideographic";
  if (n === "BaselineBottom")
    return "bottom";
  f();
})()), d1 = (t) => (n) => Z_(t)((() => {
  if (n === "AlignLeft")
    return "left";
  if (n === "AlignRight")
    return "right";
  if (n === "AlignCenter")
    return "center";
  if (n === "AlignStart")
    return "start";
  if (n === "AlignEnd")
    return "end";
  f();
})()), Ki = (t) => (n) => {
  if (n === "BevelJoin")
    return xs(t)("bevel");
  if (n === "RoundJoin")
    return xs(t)("round");
  if (n === "MiterJoin")
    return xs(t)("miter");
  f();
}, zu = (t) => (n) => {
  if (n === "Round")
    return Ns(t)("round");
  if (n === "Square")
    return Ns(t)("square");
  if (n === "Butt")
    return Ns(t)("butt");
  f();
}, Cc = (t) => (n) => X_(t)((() => {
  if (n === "SourceOver")
    return "source-over";
  if (n === "SourceIn")
    return "source-in";
  if (n === "SourceOut")
    return "source-out";
  if (n === "SourceAtop")
    return "source-atop";
  if (n === "DestinationOver")
    return "destination-over";
  if (n === "DestinationIn")
    return "destination-in";
  if (n === "DestinationOut")
    return "destination-out";
  if (n === "DestinationAtop")
    return "destination-atop";
  if (n === "Lighter")
    return "lighter";
  if (n === "Copy")
    return "copy";
  if (n === "Xor")
    return "xor";
  if (n === "Multiply")
    return "multiply";
  if (n === "Screen")
    return "screen";
  if (n === "Overlay")
    return "overlay";
  if (n === "Darken")
    return "darken";
  if (n === "Lighten")
    return "lighten";
  if (n === "ColorDodge")
    return "color-dodge";
  if (n === "ColorBurn")
    return "color-burn";
  if (n === "HardLight")
    return "hard-light";
  if (n === "SoftLight")
    return "soft-light";
  if (n === "Difference")
    return "difference";
  if (n === "Exclusion")
    return "exclusion";
  if (n === "Hue")
    return "hue";
  if (n === "Saturation")
    return "saturation";
  if (n === "Color")
    return "color";
  if (n === "Luminosity")
    return "luminosity";
  f();
})()), On = {
  foldr: (t) => (n) => {
    const e = Xt.foldr(t)(n);
    return (r) => e((() => {
      const o = (i, s) => {
        if (i.tag === "Leaf")
          return s;
        if (i.tag === "Node")
          return o(i._5, zt("Cons", i._3, o(i._6, s)));
        f();
      };
      return o(r, Yt);
    })());
  }
}, h1 = (t) => {
  const n = {
    append: (() => {
      const e = t.compare;
      return (r) => (o) => Pn(e, Cn, r, o);
    })()
  };
  return { mempty: A, Semigroup0: () => n };
}, uo = function(t) {
  return function(n) {
    if (t >= 0 && t < n.length) return n.charAt(t);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
}, Nr = function(t) {
  return t.join("");
}, nr = function(t) {
  return t.split("");
}, Mi = function(t) {
  return t;
}, Ze = function(t) {
  return t.length;
}, Pc = function(t) {
  return function(n) {
    return n.substr(0, t);
  };
}, yo = function(t) {
  return function(n) {
    return n.substring(t);
  };
}, p1 = function(t) {
  return function(n) {
    return { before: n.substring(0, t), after: n.substring(t) };
  };
}, $1 = (t) => (n) => {
  const e = p1(Ze(t))(n);
  return e.before === t ? v("Just", e.after) : J;
}, m1 = function(t) {
  var n = null;
  return function() {
    return t === void 0 || (n = t(), t = void 0), n;
  };
}, y1 = function(t) {
  return t();
}, N1 = function(n) {
  return function(e) {
    return function() {
      return n(e);
    };
  };
}, x1 = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, J1 = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, hr = (t) => BigInt(t), T1 = (t) => Number(t), ai = (t) => (n) => t + n, fi = (t) => (n) => t * n, Vs = (t) => (n) => t - n, Wf = 0n, hi = 1n, Df = (t) => (n) => t ^ n, No = (t) => (n) => t & n, qu = (t) => (n) => t << n, Us = (t) => (n) => t >> n, v1 = (t) => (n) => t == n, w1 = (t) => (n) => t === n ? 0 : t > n ? 1 : -1, k1 = { eq: v1 }, Gc = {
  compare: (t) => (n) => {
    const e = w1(t)(n);
    return e === 1 ? xn : e === 0 ? Gn : Nn;
  },
  Eq0: () => k1
}, b1 = /* @__PURE__ */ x1(qt)(J), L1 = /* @__PURE__ */ J1(qt)(J), Hf = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = at.compare(n._1)(e._1);
      return r === "LT" ? Nn : r === "GT" ? xn : at.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), E1 = (t) => (n) => je(t._1 - n._1) + je(t._2 - n._2), xr = (t) => t, ji = (t) => t, dn = /* @__PURE__ */ ji("North"), hn = /* @__PURE__ */ ji("South"), Se = /* @__PURE__ */ ji("East"), Ce = /* @__PURE__ */ ji("West"), Ae = /* @__PURE__ */ xr("Rectangle"), Ic = /* @__PURE__ */ xr("Cylinder"), S1 = /* @__PURE__ */ xr("Parallelogram"), C1 = /* @__PURE__ */ xr("Diamond"), P1 = /* @__PURE__ */ xr("Ellipse"), Ac = /* @__PURE__ */ xr("Document"), G1 = /* @__PURE__ */ xr("Cloud"), Fc = (t) => t, Of = /* @__PURE__ */ x(Br)(0), I1 = (t) => (n) => (e) => {
  const r = at.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = at.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, me = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, xo = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Rc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, zf = (t) => {
  const n = { top: 0, bottom: 0, left: 0, right: 0 }, e = t.shape === "Cloud" ? { ...n, top: t.h * 0.38 } : t.shape === "Cylinder" ? { ...n, bottom: 5 } : t.shape === "Document" ? { ...n, bottom: t.h * 0.05 } : n;
  return [{ x: t.x - e.left, y: t.y - e.top }, { x: t.x + t.w + e.right, y: t.y + t.h + e.bottom }];
}, Qr = (t) => (n) => {
  const e = Tn(
    (s) => (u) => ({
      a: s,
      b: u,
      len: (() => {
        const c = u.y - s.y, a = u.x - s.x;
        return Sn(a * a + c * c);
      })()
    }),
    t,
    bt(1, t.length, t)
  ), r = Of(z((s) => s.len)(e)), o = I1(0)(r)(n * r), i = (s) => (u) => (c) => {
    let a = s, g = u, _ = c, d = !0, l;
    for (; d; ) {
      const h = a, p = g, $ = _, m = Rt((y) => J, (y) => (N) => v("Just", { head: y, tail: N }), h);
      if (m.tag === "Nothing") {
        const y = t.length - 1 | 0;
        if (y >= 0 && y < t.length) {
          d = !1, l = t[y];
          continue;
        }
        d = !1, l = $;
        continue;
      }
      if (m.tag === "Just") {
        if (p <= m._1.head.len) {
          const y = m._1.head.len <= 0 ? 0 : p / m._1.head.len;
          d = !1, l = { x: m._1.head.a.x + (m._1.head.b.x - m._1.head.a.x) * y, y: m._1.head.a.y + (m._1.head.b.y - m._1.head.a.y) * y };
          continue;
        }
        a = m._1.tail, g = p - m._1.head.len, _ = $;
        continue;
      }
      f();
    }
    return l;
  };
  return 0 < t.length ? v("Just", i(e)(o)(t[0])) : J;
}, A1 = (t) => (n) => {
  const e = me(1)(t.w), r = me(1)(t.h), o = me(1)(n.w - 8), i = me(1)(n.h - 8), s = xo(o / e)(i / r);
  return { scale: s, tx: n.x + 4 + (o - e * s) / 2 - t.x * s, ty: n.y + 4 + (i - r * s) / 2 - t.y * s };
}, Ho = (t) => Of(Tn(
  (n) => (e) => {
    const r = e.y - n.y, o = e.x - n.x;
    return Sn(o * o + r * r);
  },
  t,
  bt(1, t.length, t)
)), F1 = (t) => (n) => (e) => (r) => (o) => {
  const i = 0 < t.length ? v("Just", t[0]) : J, s = (() => {
    if (i.tag === "Nothing")
      return n;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = t.length - 1 | 0, c = u >= 0 && u < t.length ? v("Just", t[u]) : J, a = (() => {
    if (c.tag === "Nothing")
      return e;
    if (c.tag === "Just")
      return c._1;
    f();
  })(), g = me(0.05)(1 - o.pre - o.post), _ = r < o.pre ? 0 : r > 1 - o.post ? 1 : (r - o.pre) / g, d = a.x - e.x, l = 2 * (() => {
    const T = a.y - e.y;
    return (d < 0 ? -d : d) + (T < 0 ? -T : T);
  })(), h = s.x - n.x, p = 2 * (() => {
    const T = s.y - n.y;
    return (h < 0 ? -h : h) + (T < 0 ? -T : T);
  })(), $ = p + Ho(t) + l, m = $ <= 1e-4 ? 1 : 1 - l / $, y = $ <= 1e-4 ? 0 : p / $;
  if (_ <= y) {
    const T = y <= 1e-4 ? 1 : _ / y;
    return { x: n.x + (s.x - n.x) * T, y: n.y + (s.y - n.y) * T };
  }
  if (_ >= m) {
    const T = m >= 1 ? 0 : (_ - m) / (1 - m);
    return { x: a.x + (e.x - a.x) * T, y: a.y + (e.y - a.y) * T };
  }
  const N = Qr(t)((_ - y) / me(1e-4)(m - y));
  if (N.tag === "Nothing")
    return s;
  if (N.tag === "Just")
    return N._1;
  f();
}, R1 = (t) => {
  const n = (r, o) => {
    if (r.tag === "Leaf")
      return o;
    if (r.tag === "Node")
      return n(r._5, zt("Cons", r._4, n(r._6, o)));
    f();
  }, e = Rt(
    (r) => J,
    (r) => (o) => v("Just", { head: r, tail: o }),
    Tt(Et(Xt.foldr, n(t.nodes, Yt)))(zf)
  );
  if (e.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (e.tag === "Just") {
    const r = x((o) => (i) => ({ minX: xo(o.minX)(i.x), minY: xo(o.minY)(i.y), maxX: me(o.maxX)(i.x), maxY: me(o.maxY)(i.y) }))({
      minX: e._1.head.x,
      minY: e._1.head.y,
      maxX: e._1.head.x,
      maxY: e._1.head.y
    })(e._1.tail);
    return { x: r.minX, y: r.minY, w: r.maxX - r.minX, h: r.maxY - r.minY };
  }
  f();
}, Yu = { scale: 1, tx: 0, ty: 0 }, jn = (t) => {
  const n = Rt(
    (e) => J,
    (e) => (r) => v("Just", { head: e, tail: r }),
    [
      ...(() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, zt("Cons", r._4, e(r._6, o)));
          f();
        };
        return Tt(Et(Xt.foldr, e(t.nodes, Yt)))(zf);
      })(),
      ...zn((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, zt("Cons", r._4, e(r._6, o)));
          f();
        };
        return Et(Xt.foldr, e(t.edges, Yt));
      })()),
      ...zn((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, zt("Cons", r._4, e(r._6, o)));
          f();
        };
        return Et(Xt.foldr, e(t.chipExtras, Yt));
      })())
    ]
  );
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = x((r) => (o) => ({ minX: xo(r.minX)(o.x), minY: xo(r.minY)(o.y), maxX: me(r.maxX)(o.x), maxY: me(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, B1 = (t) => (n) => ((r) => (o) => (i) => {
  let s = r, u = o, c = i, a = !0, g;
  for (; a; ) {
    const _ = s, d = u, l = c, h = Rt((p) => J, (p) => ($) => v("Just", { head: p, tail: $ }), d);
    if (h.tag === "Nothing") {
      a = !1, g = l;
      continue;
    }
    if (h.tag === "Just") {
      const p = Rc(h._1.head)(_.interiors);
      if (p.tag === "Nothing") {
        a = !1, g = l;
        continue;
      }
      if (p.tag === "Just") {
        s = p._1, u = h._1.tail, c = (() => {
          const $ = A1(jn(p._1.layout))((() => {
            const m = Rc(h._1.head)(_.layout.nodes);
            if (m.tag === "Nothing")
              return { x: 0, y: 0, w: 1, h: 1, label: "", shape: Ae };
            if (m.tag === "Just")
              return m._1;
            f();
          })());
          return { scale: l.scale * $.scale, tx: l.scale * $.tx + l.tx, ty: l.scale * $.ty + l.ty };
        })();
        continue;
      }
    }
    f();
  }
  return g;
})(t)(n)(Yu), qf = (t) => t, Bc = (t, n) => ({ tag: t, _1: n }), Zi = (t, n) => ({ tag: t, _1: n }), Xu = (t, n) => ({ tag: t, _1: n }), Q1 = /* @__PURE__ */ Xu("First"), W1 = /* @__PURE__ */ qf("Forward"), D1 = /* @__PURE__ */ qf("Backward"), H1 = /* @__PURE__ */ Zi("ExitNode"), Yf = /* @__PURE__ */ nn(C)(Ht), O1 = (t) => $o((n) => (e) => ({
  nodes: Pn(C.compare, Cn, n.nodes, e.nodes),
  edges: Pn(C.compare, Cn, n.edges, e.edges)
}))({ nodes: A, edges: A })(t.keyframes), z1 = (t) => (n) => ({
  entering: {
    nodes: Ie(C.compare, n.nodes, t.nodes),
    edges: Ie(C.compare, n.edges, t.edges)
  },
  leaving: {
    nodes: Ie(C.compare, t.nodes, n.nodes),
    edges: Ie(C.compare, t.edges, n.edges)
  },
  surviving: {
    nodes: _i(C.compare, Cn, t.nodes, n.nodes),
    edges: _i(C.compare, Cn, t.edges, n.edges)
  }
}), pi = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Wr = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Jo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ks = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, q1 = /* @__PURE__ */ x((t) => (n) => U(C)(n)()(t))(A), Y1 = /* @__PURE__ */ x((t) => (n) => U(C)(n)()(t))(A), X1 = /* @__PURE__ */ (() => {
  const t = ne.unfoldr(we);
  return (n) => t(Mn("IterNode", n, ve));
})(), Xf = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Qc = /* @__PURE__ */ nn(C)(Ht), co = (t) => {
  const n = Rt((e) => J, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = x((r) => (o) => ({ minX: pi(r.minX)(o.x), minY: pi(r.minY)(o.y), maxX: Wr(r.maxX)(o.x), maxY: Wr(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, V1 = (t) => {
  const n = Rt((e) => J, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return J;
  if (n.tag === "Just")
    return v("Just", co(t));
  f();
}, U1 = (t) => (n) => (e) => q1(Tt(Et(On.foldr, e))((r) => {
  const o = Jo(r)(t);
  if (o.tag === "Just")
    return ft((i) => !Ks(i)(n), [o._1.source, o._1.target]);
  if (o.tag === "Nothing")
    return [];
  f();
})), K1 = (t) => t.kind.tag === "SendToken" ? v("Just", b(t.kind._1.edge, { source: t.kind._1.from, target: t.kind._1.to })) : J, M1 = (t) => t.tag === "DataFlow" ? yt(K1)(t._1.events) : [], j1 = (t) => (n) => Y1(yt((e) => Ks(e._2.source)(n) || Ks(e._2.target)(n) ? v("Just", e._1) : J)(X1(t))), Z1 = (t) => {
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? 0 < t.length ? t[0].x === t[n].x && t[0].y === t[n].y ? v("Just", co([t[0]])) : v("Just", co([t[0], t[n]])) : J : 0 < t.length ? v("Just", co([t[0]])) : J;
}, $i = (t) => {
  const n = Rt((e) => J, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = x((r) => (o) => ({ minX: pi(r.minX)(o.x), minY: pi(r.minY)(o.y), maxX: Wr(r.maxX)(o.x + o.w), maxY: Wr(r.maxY)(o.y + o.h) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x + n._1.head.w,
      maxY: n._1.head.y + n._1.head.h
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, Vf = (t) => (n) => (e) => {
  if (e.tag === "Leaf")
    return jn(t);
  const r = j1(n)(e), o = [
    ...yt((i) => {
      const s = Xf(i)(t.nodes);
      return s.tag === "Just" ? v("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : J;
    })(Et(
      On.foldr,
      Pn(C.compare, Cn, e, U1(n)(e)(r))
    )),
    ...yt((i) => {
      const s = Jo(i)(t.edges);
      return s.tag === "Just" ? v("Just", co(s._1)) : J;
    })(Et(On.foldr, r)),
    ...yt((i) => {
      const s = Jo(i)(t.chipExtras);
      if (s.tag === "Just")
        return V1(s._1);
      if (s.tag === "Nothing")
        return J;
      f();
    })(Et(On.foldr, r))
  ];
  return o.length === 0 ? jn(t) : $i(o);
}, Zr = (t) => (n) => (e) => {
  const r = [
    ...yt((o) => o)([
      (() => {
        const o = Jo(e)(t.chipExtras);
        if (o.tag === "Just")
          return Z1(o._1);
        if (o.tag === "Nothing")
          return J;
        f();
      })()
    ]),
    ...(() => {
      const o = Jo(e)(n);
      if (o.tag === "Just")
        return yt((i) => {
          const s = Xf(i)(t.nodes);
          return s.tag === "Just" ? v("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : J;
        })([o._1.source, o._1.target]);
      if (o.tag === "Nothing")
        return [];
      f();
    })()
  ];
  return r.length === 0 ? Vf(t)(n)(A) : $i(r);
}, Vu = (t) => (n) => {
  const e = jn(t), r = e.w / Wr(1e-4)(n.zoom), o = e.h / Wr(1e-4)(n.zoom);
  return { x: n.center.x - r / 2, y: n.center.y - o / 2, w: r, h: o };
}, td = (t) => Pn(
  C.compare,
  Cn,
  Qc(z((n) => b(n.id, { source: n.from.node, target: n.to.node }))(t.graph.edges)),
  Qc(Tt(t.scenes)(M1))
), Uu = (t) => t, nd = (t) => t, pr = /* @__PURE__ */ Uu("Linear"), ed = /* @__PURE__ */ Uu("EaseInOutQuad"), rd = /* @__PURE__ */ Uu("SpringBouncy"), To = (t) => (n) => (e) => {
  const r = Sn(1 - n * n), o = t * r;
  return 1 - Xi(-n * t * e) * (oe(o * e) + n / r * Kn(o * e));
}, od = (t) => {
  const n = at.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = at.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, Ku = (t) => (n) => (() => {
  if (t === "Linear")
    return nd;
  if (t === "EaseInQuad")
    return (e) => e * e;
  if (t === "EaseOutQuad")
    return (e) => 1 - (1 - e) * (1 - e);
  if (t === "EaseInOutQuad")
    return (e) => e < 0.5 ? 2 * e * e : 1 - 2 * (1 - e) * (1 - e);
  if (t === "EaseInCubic")
    return (e) => e * e * e;
  if (t === "EaseOutCubic")
    return (e) => 1 - (1 - e) * (1 - e) * (1 - e);
  if (t === "EaseInOutCubic")
    return (e) => e < 0.5 ? 4 * e * e * e : 1 - (-2 * e + 2) * (-2 * e + 2) * (-2 * e + 2) / 2;
  if (t === "EaseOutExpo")
    return (e) => e >= 1 ? 1 : 1 - Ys(2)(-10 * e);
  if (t === "Spring")
    return (e) => 1 - (1 + 6 * e) * Xi(-6 * e);
  if (t === "SpringBouncy")
    return To(6)(0.7);
  f();
})()(od(n)), Uf = (t) => t, Mu = (t) => t, ts = (t) => (n) => (e) => {
  const r = at.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = at.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, vo = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Kf = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, id = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, sd = /* @__PURE__ */ Mu("Hold"), ud = /* @__PURE__ */ Mu("Gap"), cd = /* @__PURE__ */ Mu("Move"), ao = /* @__PURE__ */ Uf("LinearLerp"), Wc = /* @__PURE__ */ Uf("LogLerp"), ad = (t) => (n) => (e) => {
  const r = e.center.y - n.center.y, o = e.center.x - n.center.x, i = Sn(o * o + r * r), s = e.zoom - n.zoom, u = s < 0 ? -s : s;
  return ts(t.minTransition)(t.maxTransition)(vo(t.panSpeed <= 0 ? t.minTransition : i / t.panSpeed)(t.zoomSpeed <= 0 ? t.minTransition : u / t.zoomSpeed));
}, fd = /* @__PURE__ */ x((t) => (n) => {
  const e = t.length - 1 | 0;
  return e >= 0 && e < t.length && t[e] === n ? t : Qt(t)(n);
})([]), Dc = (t) => (n) => {
  const e = { x: 0, y: 0 }, r = 0 < t.length ? t[0].pos : e, o = vf(qt, J, (i) => i.t <= n, t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just") {
    const i = o._1 + 1 | 0;
    if (i >= 0 && i < t.length) {
      if (o._1 >= 0 && o._1 < t.length) {
        const s = ts(0)(1)(t[i].t <= t[o._1].t ? 0 : (n - t[o._1].t) / (t[i].t - t[o._1].t));
        return { x: t[o._1].pos.x + (t[i].pos.x - t[o._1].pos.x) * s, y: t[o._1].pos.y + (t[i].pos.y - t[o._1].pos.y) * s };
      }
      return e;
    }
    return o._1 >= 0 && o._1 < t.length ? t[o._1].pos : e;
  }
  f();
}, Ms = (t) => (n) => ({ center: { x: n.center.x * t.scale + t.tx, y: n.center.y * t.scale + t.ty }, zoom: n.zoom / vo(1e-6)(t.scale) }), gd = (t) => (n) => (e) => ({
  center: { x: t.center.x + (n.center.x - t.center.x) * e, y: t.center.y + (n.center.y - t.center.y) * e },
  zoom: Xi((() => {
    const r = Ec(vo(1e-6)(t.zoom));
    return r + (Ec(vo(1e-6)(n.zoom)) - r) * e;
  })())
}), ld = (t) => (n) => (e) => {
  const r = Ku(e.easing)(ts(0)(1)(e.endT <= e.startT ? 1 : (n - e.startT) / (e.endT - e.startT)));
  if (e.interp === "LinearLerp")
    return {
      center: { x: e.fromCam.center.x + (e.toCam.center.x - e.fromCam.center.x) * r, y: e.fromCam.center.y + (e.toCam.center.y - e.fromCam.center.y) * r },
      zoom: e.fromCam.zoom + (e.toCam.zoom - e.fromCam.zoom) * r
    };
  if (e.interp === "LogLerp")
    return gd(e.fromCam)(e.toCam)(r);
  f();
}, _d = (t) => (n) => (e) => (r) => {
  const o = (s, u) => Kf(ad(t)(s.toCam)(u.toCam))(s.endT - s.startT), i = x((s) => (u) => {
    if (s.pending.tag === "Nothing")
      return { acc: s.acc, pending: v("Just", u) };
    if (s.pending.tag === "Just")
      return !(u.fromCam.zoom === u.toCam.zoom && u.fromCam.center.x === u.toCam.center.x && u.fromCam.center.y === u.toCam.center.y) || (() => {
        const c = s.pending._1.toCam.center.x - u.toCam.center.x;
        return (c < 0 ? -c < 8 : c < 8) && (() => {
          const a = s.pending._1.toCam.center.y - u.toCam.center.y;
          return (a < 0 ? -a < 8 : a < 8) && (() => {
            const g = s.pending._1.toCam.zoom - u.toCam.zoom;
            return g < 0 ? -g < 0.08 : g < 0.08;
          })();
        })();
      })() || o(s.pending._1, u) <= 0 ? { acc: Qt(s.acc)(s.pending._1), pending: v("Just", u) } : {
        acc: Qt(Qt(s.acc)({ ...s.pending._1, endT: u.startT - o(s.pending._1, u) }))({
          startT: u.startT - o(s.pending._1, u),
          endT: u.startT,
          fromCam: s.pending._1.toCam,
          toCam: u.toCam,
          easing: u.easing,
          interp: ao
        }),
        pending: v("Just", u)
      };
    f();
  })({ acc: [], pending: J })(r);
  if (i.pending.tag === "Nothing")
    return i.acc;
  if (i.pending.tag === "Just")
    return Qt(i.acc)(i.pending._1);
  f();
}, dd = (t) => (n) => {
  const e = (r) => {
    const o = vf(qt, J, (i) => i.kind === "Hold" || i.kind === "Move", r < 1 ? [] : bt(0, r, n));
    if (o.tag === "Just")
      return o._1 >= 0 && o._1 < n.length ? v("Just", n[o._1].toCam) : J;
    if (o.tag === "Nothing")
      return J;
    f();
  };
  return Ft((r) => (o) => {
    if (o.kind === "Hold")
      return { startT: o.startT, endT: o.endT, fromCam: o.fromCam, toCam: o.toCam, easing: o.easing, interp: ao };
    if (o.kind === "Move")
      return { startT: o.startT, endT: o.endT, fromCam: o.fromCam, toCam: o.toCam, easing: pr, interp: ao };
    if (o.kind === "Gap")
      return {
        startT: o.startT,
        endT: o.endT,
        fromCam: (() => {
          const i = e(r);
          if (i.tag === "Nothing")
            return t;
          if (i.tag === "Just")
            return i._1;
          f();
        })(),
        toCam: (() => {
          const i = e(r), s = (() => {
            if (i.tag === "Nothing")
              return t;
            if (i.tag === "Just")
              return i._1;
            f();
          })(), u = r + 1 | 0, c = dr(
            qt,
            J,
            (a) => a.kind === "Hold" || a.kind === "Move",
            u < 1 ? n : bt(u, n.length, n)
          );
          if (c.tag === "Just") {
            const a = (r + 1 | 0) + c._1 | 0;
            return a >= 0 && a < n.length ? n[a].fromCam : s;
          }
          if (c.tag === "Nothing")
            return s;
          f();
        })(),
        easing: o.easing,
        interp: ao
      };
    f();
  })(n);
}, hd = {
  padding: 24,
  easing: pr,
  minZoom: 0.9,
  maxZoom: 2.5,
  tokenZoomFloor: 0,
  panSpeed: 1500,
  zoomSpeed: 4,
  minTransition: 0.15,
  maxTransition: 0.6,
  cameraDecay: 16
}, ju = (t) => (n) => (e) => {
  const r = n.w + e * 2, o = n.h + e * 2, i = jn(t);
  return r <= 0 || o <= 0 || i.w <= 0 || i.h <= 0 ? 1 : Kf(i.w / r)(i.h / o);
}, pd = /* @__PURE__ */ x((t) => (n) => {
  const e = t.length - 1 | 0, r = e >= 0 && e < t.length ? v("Just", t[e]) : J;
  return r.tag === "Just" && r._1.fromCam.zoom === r._1.toCam.zoom && r._1.fromCam.center.x === r._1.toCam.center.x && r._1.fromCam.center.y === r._1.toCam.center.y && n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y && (() => {
    const o = r._1.toCam.center.x - n.toCam.center.x;
    return (o < 0 ? -o < 8 : o < 8) && (() => {
      const i = r._1.toCam.center.y - n.toCam.center.y;
      return (i < 0 ? -i < 8 : i < 8) && (() => {
        const s = r._1.toCam.zoom - n.toCam.zoom;
        return s < 0 ? -s < 0.08 : s < 0.08;
      })();
    })();
  })() ? Qt((() => {
    const o = t.length - 1 | 0;
    return o < 1 ? [] : bt(0, o, t);
  })())({ ...r._1, endT: n.endT }) : Qt(t)(n);
})([]), fo = (t) => (n) => (e) => (r) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: vo(r)(ts(t.minZoom)(t.maxZoom)(ju(n)(e)(t.padding))) }), $d = (t) => (n) => (e) => (r) => {
  const o = Lt((u) => (c) => it.compare(c.priority)(u.priority)), i = fo(t)(n)(jn(n))(0), s = ft(
    (u) => u >= 0 && u <= e,
    fd(Lt(at.compare)([
      0,
      e,
      ...Tt(r)((u) => [u.startT, u.endT]),
      ...Tt(r)((u) => {
        if (u.pathFollow.tag === "Nothing")
          return [];
        if (u.pathFollow.tag === "Just")
          return z((c) => c.t)(u.pathFollow._1.samples);
        f();
      })
    ]))
  );
  return _d(t)(n)(i)(pd(dd(i)(yt((u) => {
    const c = (u._1 + u._2) / 2;
    if (u._2 <= u._1)
      return J;
    const a = yt((_) => _.pathFollow)(o(ft((_) => _.startT <= c && c < _.endT, r)));
    if (0 < a.length)
      return v(
        "Just",
        {
          kind: cd,
          startT: u._1,
          endT: u._2,
          fromCam: { center: Dc(a[0].samples)(u._1), zoom: a[0].zoom },
          toCam: { center: Dc(a[0].samples)(u._2), zoom: a[0].zoom },
          easing: pr
        }
      );
    const g = z((_) => _.bbox)(ft(
      (_) => _.priority === x(id)(0)(z((d) => d.priority)(ft(
        (d) => d.startT <= c && c < d.endT,
        r
      ))),
      ft((_) => _.startT <= c && c < _.endT, r)
    ));
    return g.length === 0 ? v("Just", { kind: ud, startT: u._1, endT: u._2, fromCam: i, toCam: i, easing: t.easing }) : v(
      "Just",
      {
        kind: sd,
        startT: u._1,
        endT: u._2,
        fromCam: fo(t)(n)($i(g))(qn(
          (_) => _.priority >= 1,
          ft((_) => _.startT <= c && c < _.endT, r)
        ) ? t.tokenZoomFloor : 0),
        toCam: fo(t)(n)($i(g))(qn(
          (_) => _.priority >= 1,
          ft((_) => _.startT <= c && c < _.endT, r)
        ) ? t.tokenZoomFloor : 0),
        easing: t.easing
      }
    );
  })(Tn(Oe, s, bt(1, s.length, s))))));
}, Mf = (t) => (n) => (e) => (r) => {
  const o = Ut((i) => r >= i.startT && r < i.endT)(e);
  if (o.tag === "Just")
    return ld()(r)(o._1);
  if (o.tag === "Nothing") {
    const i = e.length - 1 | 0;
    if (i >= 0 && i < e.length && r >= e[i].endT)
      return e[i].toCam;
    const s = fo(t)(n)(jn(n))(0);
    return 0 < e.length ? e[0].fromCam : s;
  }
  f();
};
function Qe(t) {
  return t.charCodeAt(0);
}
function jf(t) {
  return String.fromCharCode(t);
}
const Ye = function(t) {
  return function(n) {
    return function(e) {
      return e.replace(new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), n);
    };
  };
}, ns = function(t) {
  return function(n) {
    return n.split(t);
  };
}, md = function(t) {
  return t.trim();
}, es = function(t) {
  return function(n) {
    return n.join(t);
  };
};
var yd = typeof Array.from == "function", Nd = typeof Symbol < "u" && Symbol != null && typeof Symbol.iterator < "u" && typeof String.prototype[Symbol.iterator] == "function", xd = typeof String.prototype.fromCodePoint == "function", Jd = typeof String.prototype.codePointAt == "function";
const Td = function(t) {
  return Jd ? function(n) {
    return n.codePointAt(0);
  } : t;
}, vd = function(t) {
  return xd ? String.fromCodePoint : t;
}, wd = function(t) {
  return function(n) {
    return Nd ? function(e) {
      for (var r = "", o = e[Symbol.iterator](), i = 0; i < n; ++i) {
        var s = o.next();
        if (s.done) return r;
        r += s.value;
      }
      return r;
    } : t(n);
  };
}, kd = function(t) {
  return function(n) {
    return yd ? function(e) {
      return Array.from(e, n);
    } : t;
  };
}, rs = (t) => {
  const n = Ze(t);
  if (n === 0)
    return J;
  if (n === 1)
    return v("Just", { head: Qe(uo(0)(t)), tail: "" });
  const e = Qe(uo(1)(t)), r = Qe(uo(0)(t));
  return 55296 <= r && r <= 56319 && 56320 <= e && e <= 57343 ? v("Just", { head: (((r - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0, tail: yo(2)(t) }) : v("Just", { head: r, tail: yo(1)(t) });
}, bd = (t) => {
  const n = rs(t);
  return n.tag === "Just" ? v("Just", b(n._1.head, n._1.tail)) : J;
}, Ld = (t) => ne.unfoldr(bd)(t), Ed = (t) => {
  const n = Qe(uo(0)(t));
  if (55296 <= n && n <= 56319 && Ze(t) > 1) {
    const e = Qe(uo(1)(t));
    if (56320 <= e && e <= 57343)
      return (((n - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0;
  }
  return n;
}, Zf = /* @__PURE__ */ Td(Ed), os = /* @__PURE__ */ kd(Ld)(Zf), Js = (t) => Mi(t >= 0 && t <= 65535 ? jf(t) : t < 0 ? "\0" : "\uffff"), Sd = (t) => t <= 65535 ? Js(t) : Js(Ge(t - 65536 | 0, 1024) + 55296 | 0) + Js(Xe(t - 65536 | 0)(1024) + 56320 | 0), Cd = /* @__PURE__ */ vd(Sd), t0 = (t) => (n) => {
  if (t < 1)
    return "";
  const e = rs(n);
  return e.tag === "Just" ? Cd(e._1.head) + t0(t - 1 | 0)(e._1.tail) : n;
}, mn = /* @__PURE__ */ wd(t0), Pd = (t) => (n) => n === "" ? J : v("Just", Zf(n)), Dr = (t, n, e) => ({ tag: t, _1: n, _2: e }), Gd = () => ({ tag: "ExtendFromSource" }), Hr = (t, n) => ({ tag: t, _1: n }), Zu = (t) => t, mi = (t, n) => ({ tag: t, _1: n }), Ts = /* @__PURE__ */ mi("NotYet"), Hc = /* @__PURE__ */ mi("Consumed"), Id = /* @__PURE__ */ Zu("FromSource"), Oc = /* @__PURE__ */ Zu("FromTarget"), n0 = /* @__PURE__ */ Zu("FromBoth"), go = /* @__PURE__ */ Hr("Hidden"), Ad = /* @__PURE__ */ Hr("Visible"), tc = /* @__PURE__ */ Gd(), lo = /* @__PURE__ */ Dr("Retracted"), Fd = /* @__PURE__ */ Dr("Extended"), e0 = (t) => t, js = (t, n) => ({ tag: t, _1: n }), rr = (t, n, e) => ({ tag: t, _1: n, _2: e }), r0 = (t) => t, fr = (t, n) => ({ tag: t, _1: n }), kr = (t, n, e, r, o, i, s, u, c) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s, _7: u, _8: c }), Oo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ne = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, o0 = /* @__PURE__ */ nn(C)(Ht), Zs = /* @__PURE__ */ Su(Qo), _o = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, yi = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, wo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, zc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, i0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Jr = /* @__PURE__ */ (() => {
  const t = ne.unfoldr((n) => {
    if (n.tag === "Nil")
      return J;
    if (n.tag === "Cons")
      return v("Just", b(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, zt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Yt);
  })());
})(), Rd = /* @__PURE__ */ x((t) => (n) => U(C)(n)()(t))(A), tu = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, vs = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, Bd = /* @__PURE__ */ fr("NoKeyframes"), Qd = (t) => fr("DuplicateEventId", t), Wd = (t) => fr("UnknownEvent", t), s0 = /* @__PURE__ */ r0("PlopIn"), Dd = /* @__PURE__ */ r0("PlopOut"), Hd = /* @__PURE__ */ e0("DiveIn"), Od = /* @__PURE__ */ e0("DiveOut"), zd = (t) => (n) => (e) => (r) => {
  const o = Oo(r.edge)(n.edges), i = (() => {
    if (o.tag === "Nothing")
      return 0;
    if (o.tag === "Just")
      return Ho(o._1);
    f();
  })(), s = Ne(t.minTokenDuration)(Ne(et(x((u) => (c) => u + os(c).length | 0)(0)(r.labels)) * t.tokenReadSecPerChar)(t.tokenSpeed <= 0 ? 0 : i / t.tokenSpeed)) + e.pre + e.post;
  return { duration: s, holdPre: s <= 0 ? 0 : e.pre / s, holdPost: s <= 0 ? 0 : e.post / s };
}, qd = (t) => (n) => o0(yt((e) => {
  if (e.kind.tag === "SendToken")
    return v(
      "Just",
      b(
        e.id,
        {
          pre: (() => {
            const r = e.when;
            return (() => {
              const o = e.kind._1.from;
              return qn(
                (i) => {
                  if (i.kind.tag === "SendToken")
                    return (r.tag === "First" ? !1 : r.tag === "After" && r._1 === i.id) && i.kind._1.to === o;
                  if (i.kind.tag === "FillNodeWithoutTransition")
                    return !1;
                  f();
                },
                n
              );
            })() ? 0 : t.tokenHold;
          })(),
          post: (() => {
            const r = e.id;
            return (() => {
              const o = e.kind._1.to;
              return qn(
                (i) => {
                  if (i.kind.tag === "SendToken")
                    return (i.when.tag === "First" ? !1 : i.when.tag === "After" && i.when._1 === r) && i.kind._1.from === o;
                  if (i.kind.tag === "FillNodeWithoutTransition")
                    return !1;
                  f();
                },
                n
              );
            })() ? 0 : t.tokenHold;
          })()
        }
      )
    );
  if (e.kind.tag === "FillNodeWithoutTransition")
    return J;
  f();
})(n)), Yd = (t) => {
  if (t.event.kind.tag === "SendToken")
    return v(
      "Just",
      {
        startT: t.startT,
        endT: t.endT,
        target: kr(
          "TokenWindow",
          t.event.id,
          t.event.kind._1.edge,
          t.event.kind._1.direction,
          t.event.kind._1.from,
          t.event.kind._1.to,
          t.event.kind._1.labels,
          t.holdPre,
          t.holdPost
        )
      }
    );
  if (t.event.kind.tag === "FillNodeWithoutTransition")
    return v("Just", { startT: t.startT, endT: t.endT, target: kr("FillWindow", t.event.id, t.event.kind._1.node, t.event.kind._1.labels) });
  f();
}, Xd = (t) => (n) => (e) => (r) => {
  const o = Ut((i) => Zs(i.path)(n) && (je(i.endT - e) < 1e-4 || je(i.startT - r) < 1e-4))(t.segments);
  if (o.tag === "Just")
    return v("Just", o._1);
  if (o.tag === "Nothing")
    return Ut((i) => Zs(i.path)(n))(t.segments);
  f();
}, Vd = (t) => (n) => (e) => yt((r) => {
  const o = yt((i) => wo(i)(t.nodes))(Et(
    On.foldr,
    (() => {
      if (r.scene.tag === "Structural")
        return Pn(
          C.compare,
          Cn,
          (() => {
            const i = _o(r.scene._1.from)(e);
            if (i.tag === "Nothing")
              return A;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })(),
          (() => {
            const i = _o(r.scene._1.to)(e);
            if (i.tag === "Nothing")
              return A;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })()
        );
      if (r.scene.tag === "DataFlow") {
        const i = _o(r.scene._1.keyframe)(e);
        if (i.tag === "Nothing")
          return A;
        if (i.tag === "Just")
          return i._1.nodes;
        f();
      }
      if (r.scene.tag === "EnterNode" || r.scene.tag === "ExitNode")
        return A;
      f();
    })()
  ));
  return o.length === 0 ? J : v(
    "Just",
    {
      startT: r.startT,
      endT: r.endT,
      bbox: (() => {
        const i = x((s) => (u) => ({ minX: yi(s.minX)(u.x), minY: yi(s.minY)(u.y), maxX: Ne(s.maxX)(u.x + u.w), maxY: Ne(s.maxY)(u.y + u.h) }))(0 < o.length ? { minX: o[0].x, minY: o[0].y, maxX: o[0].x + o[0].w, maxY: o[0].y + o[0].h } : { minX: 0, minY: 0, maxX: 0, maxY: 0 })(bt(1, o.length, o));
        return { x: i.minX, y: i.minY, w: i.maxX - i.minX, h: i.maxY - i.minY };
      })(),
      priority: 0,
      pathFollow: J
    }
  );
}), Ud = (t) => (n) => (e) => {
  const r = Oo(e)(t);
  if (r.tag === "Nothing")
    return Oc;
  if (r.tag === "Just") {
    const o = zc(r._1.target)(n);
    return zc(r._1.source)(n) ? o ? n0 : Id : Oc;
  }
  f();
}, Kd = { pre: 0, post: 0 }, Md = (t) => (n) => (e) => (r) => (o) => {
  const i = i0(o.event.id)(e), s = (() => {
    if (i.tag === "Nothing")
      return Kd;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = (() => {
    if (o.event.when.tag === "First")
      return 0;
    if (o.event.when.tag === "At")
      return o.event.when._1;
    if (o.event.when.tag === "After") {
      const a = o.event.when._1, g = Ut((_) => _.event.id === a)(r);
      if (g.tag === "Nothing")
        return 0;
      if (g.tag === "Just")
        return g._1.endT;
      f();
    }
    if (o.event.when.tag === "With") {
      const a = o.event.when._1, g = Ut((_) => _.event.id === a)(r);
      if (g.tag === "Nothing")
        return 0;
      if (g.tag === "Just")
        return g._1.startT;
    }
    f();
  })(), c = (() => {
    if (o.event.kind.tag === "SendToken")
      return zd(t)(n)(s)(o.event.kind._1);
    if (o.event.kind.tag === "FillNodeWithoutTransition")
      return { duration: t.plop, holdPre: 0, holdPost: 0 };
    f();
  })();
  return Qt(r)({ startT: u, endT: u + c.duration, event: o.event, holdPre: c.holdPre, holdPost: c.holdPost });
}, u0 = (t) => (n) => (e) => x(Md(t)(n)(qd(t)(e)))([])(Ft((r) => (o) => ({ event: o }))(e)), jd = (t) => (n) => {
  const e = wo(n)(t.interiors);
  if (e.tag === "Nothing")
    return t;
  if (e.tag === "Just")
    return e._1;
  f();
}, Zd = (t) => (n) => ({ ...n, fromCam: Ms(t)(n.fromCam), toCam: Ms(t)(n.toCam) }), th = (t) => {
  if (t.when.tag === "First")
    return [];
  if (t.when.tag === "At")
    return [];
  if (t.when.tag === "After")
    return [t.when._1];
  if (t.when.tag === "With")
    return [t.when._1];
  f();
}, qc = { id: "", nodes: A, edges: A }, nh = (t) => (n) => z1((() => {
  const e = _o(n.from)(t);
  if (e.tag === "Nothing")
    return qc;
  if (e.tag === "Just")
    return e._1;
  f();
})())((() => {
  const e = _o(n.to)(t);
  if (e.tag === "Nothing")
    return qc;
  if (e.tag === "Just")
    return e._1;
  f();
})()), eh = (t) => (n) => {
  const e = wo(n)(t.interiors);
  if (e.tag === "Nothing")
    return { layout: t.layout, interiors: A };
  if (e.tag === "Just")
    return e._1;
  f();
}, ws = (t) => (n) => (e) => (r) => {
  const o = Oo(r)(e.edges);
  if (o.tag === "Just")
    return t <= 0 ? n : Ne(n)(Ho(o._1) / t);
  if (o.tag === "Nothing")
    return n;
  f();
}, c0 = (t) => (n) => (e) => (r) => (o) => {
  const i = t.plop, s = nh(e)(o), u = z((l) => ({
    startT: 0,
    endT: 0 + ws(t.edgeSpeed)(t.minEdgeDuration)(n)(l),
    target: kr("EdgeWindow", l, js("Extend", tc))
  }))(Jr(s.entering.edges)), c = z((l) => ({ startT: 0, endT: i, target: kr("NodeWindow", l, s0) }))(Jr(s.entering.nodes)), a = x(Ne)(0)(z((l) => ws(t.edgeSpeed)(t.minEdgeDuration)(n)(l))(Jr(s.leaving.edges))), g = (l) => qn(
    (h) => {
      const p = Oo(h)(r);
      if (p.tag === "Just")
        return p._1.source === l || p._1.target === l;
      if (p.tag === "Nothing")
        return !1;
      f();
    },
    Jr(s.leaving.edges)
  ) ? a : 0, _ = z((l) => ({ startT: g(l), endT: g(l) + t.plop, target: kr("NodeWindow", l, Dd) }))(Jr(s.leaving.nodes)), d = z((l) => ({
    startT: 0,
    endT: ws(t.edgeSpeed)(t.minEdgeDuration)(n)(l),
    target: kr("EdgeWindow", l, js("Retract", Ud(r)(s.leaving.nodes)(l)))
  }))(Jr(s.leaving.edges));
  return {
    duration: (() => {
      const l = Lt(at.compare)([
        ...z((p) => p.endT)(d),
        ...z((p) => p.endT)(_),
        ...z((p) => p.endT)(c),
        ...z((p) => p.endT)(u)
      ]), h = l.length - 1 | 0;
      return h >= 0 && h < l.length ? l[h] + t.gap : t.gap;
    })(),
    windows: [...d, ..._, ...c, ...u]
  };
}, rh = (t) => (n) => (e) => (r) => (o) => (i) => z((() => {
  const s = o.startT;
  return (u) => ({ ...u, startT: u.startT + s, endT: u.endT + s });
})())(c0(t)(n)(e)(r)(i).windows), oh = (t) => yt((n) => Et($o, n).length > 1 ? v(
  "Just",
  (() => {
    const e = Rt(
      (r) => J,
      (r) => (o) => v("Just", { head: r, tail: o }),
      Et($o, n)
    );
    if (e.tag === "Just")
      return e._1.head;
    if (e.tag === "Nothing")
      return "";
    f();
  })()
) : J)(m_(Qo)(Lt(C.compare)(t))), ih = (t) => {
  const n = z((r) => r.id)(t), e = Rd(n);
  return [
    ...z(Qd)(oh(n)),
    ...z(Wd)(ft((r) => !tu(r)(e), Tt(t)(th)))
  ];
}, sh = (t) => (n) => (e) => {
  const r = Ne(t.minZoom)(t.tokenZoomFloor);
  return yt((o) => {
    if (o.target.tag === "NodeWindow" || o.target.tag === "EdgeWindow")
      return J;
    if (o.target.tag === "TokenWindow")
      return v(
        "Just",
        (() => {
          const i = { pre: o.target._7, post: o.target._8 };
          if (t.tokenZoomFloor <= 0)
            return {
              startT: o.startT,
              endT: o.endT,
              bbox: Zr(n)(e)(o.target._2),
              priority: 1,
              pathFollow: J
            };
          const s = Oo(o.target._2)(n.edges);
          if (s.tag === "Just") {
            const u = wo(o.target._4)(n.nodes);
            if (u.tag === "Just") {
              const c = wo(o.target._5)(n.nodes);
              if (c.tag === "Just") {
                const a = c._1;
                return {
                  startT: o.startT,
                  endT: o.endT,
                  bbox: Zr(n)(e)(o.target._2),
                  priority: 1,
                  pathFollow: v(
                    "Just",
                    {
                      samples: (() => {
                        const g = o.startT + i.pre * (o.endT - o.startT), _ = Ne(1e-4)(o.endT - i.post * (o.endT - o.startT) - g), d = o.endT - o.startT;
                        return z((l) => {
                          const h = g + et(l) / et(32) * _;
                          return {
                            t: h,
                            pos: F1(s._1)({ x: u._1.x + u._1.w / 2, y: u._1.y + u._1.h / 2 })({
                              x: a.x + a.w / 2,
                              y: a.y + a.h / 2
                            })(d <= 0 ? 0 : (h - o.startT) / d)(i)
                          };
                        })(At(0, 32));
                      })(),
                      zoom: r
                    }
                  )
                };
              }
              if (c.tag === "Nothing")
                return {
                  startT: o.startT,
                  endT: o.endT,
                  bbox: Zr(n)(e)(o.target._2),
                  priority: 1,
                  pathFollow: J
                };
              f();
            }
            if (u.tag === "Nothing")
              return {
                startT: o.startT,
                endT: o.endT,
                bbox: Zr(n)(e)(o.target._2),
                priority: 1,
                pathFollow: J
              };
            f();
          }
          if (s.tag === "Nothing")
            return {
              startT: o.startT,
              endT: o.endT,
              bbox: Zr(n)(e)(o.target._2),
              priority: 1,
              pathFollow: J
            };
          f();
        })()
      );
    if (o.target.tag === "FillWindow")
      return v(
        "Just",
        {
          startT: o.startT,
          endT: o.endT,
          bbox: Vf(n)(e)(Ot(
            "Node",
            1,
            1,
            o.target._2,
            void 0,
            A,
            A
          )),
          priority: 1,
          pathFollow: J
        }
      );
    f();
  });
}, uh = (t) => (n) => (e) => (r) => (o) => $d(t)(o.layout)(r.endT)([
  ...Vd(o.layout)(e)(n)(ft((i) => i.startT >= o.startT && i.endT <= o.endT, r.spans)),
  ...sh(t)(o.layout)(e)(o.windows)
]), ch = (t) => {
  const n = o0(z((r) => b(
    r.id,
    (() => {
      if (r.when.tag === "First")
        return [];
      if (r.when.tag === "At")
        return [];
      if (r.when.tag === "After")
        return [r.when._1];
      if (r.when.tag === "With")
        return [r.when._1];
      f();
    })()
  ))(t)), e = (r) => (o) => (i) => {
    if (tu(i)(o))
      return [fr("ScheduleCycle", [...Et(On.foldr, o), i])];
    if (tu(i)(r))
      return [];
    const s = i0(i)(n);
    if (s.tag === "Nothing")
      return [];
    if (s.tag === "Just")
      return Tt(s._1)(e(U(C)(i)()(r))(U(C)(i)()(o)));
    f();
  };
  return Tt(t)((r) => e(A)(A)(r.id));
}, ah = {
  plop: 0.5,
  gap: 0.5,
  edgeSpeed: 350,
  minEdgeDuration: 0.3,
  tokenSpeed: 250,
  minTokenDuration: 1.8,
  tokenHold: 0.5,
  hatchHold: 0.4,
  tokenReadSecPerChar: 0.06,
  nodeEasing: rd,
  edgeEasing: ed,
  tokenEasing: pr,
  diveDur: 1.2,
  retreatDur: 1.2
}, fh = (t) => (n) => (e) => (r) => z((() => {
  const o = e.startT;
  return (i) => ({ ...i, startT: i.startT + o, endT: i.endT + o });
})())(yt(Yd)(u0(t)(n)(r.events))), gh = (t) => (n) => (e) => (r) => (o) => {
  if (o.scene.tag === "Structural")
    return rh(t)(n)(e)(r)(o)(o.scene._1);
  if (o.scene.tag === "DataFlow")
    return fh(t)(n)(o)(o.scene._1);
  if (o.scene.tag === "EnterNode")
    return [];
  if (o.scene.tag === "ExitNode")
    return [];
  f();
}, lh = (t) => (n) => (e) => {
  const r = u0(t)(n)(e.events);
  return r.length === 0 ? t.gap : x(Ne)(0)(z((o) => o.endT)(r)) + t.gap;
}, _h = (t) => (n) => (e) => (r) => (o) => {
  if (o.tag === "Structural")
    return c0(t)(n)(e)(r)(o._1).duration;
  if (o.tag === "DataFlow")
    return lh(t)(n)(o._1);
  if (o.tag === "EnterNode" || o.tag === "ExitNode")
    return 0;
  f();
}, a0 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = B1(n)(r), u = e.layout, c = Yf(z((p) => b(p.id, p))(o.keyframes)), a = 0 < o.keyframes.length ? v("Just", o.keyframes[0]) : J, g = (() => {
    if (a.tag === "Just")
      return a._1.id;
    if (a.tag === "Nothing")
      return "";
    f();
  })(), _ = td(o), d = (p) => ({
    segments: p.runSpans.length === 0 ? p.segments : Qt(p.segments)({
      startT: p.runStart,
      endT: p.t,
      path: r,
      layout: u,
      placement: s,
      windows: p.runWindows,
      spans: p.runSpans,
      keyframes: c,
      initialKeyframe: g,
      edgeEndpoints: _
    }),
    spans: p.spans,
    windows: p.windows,
    dives: p.dives
  }), l = x((p) => ($) => {
    if ($.tag === "EnterNode") {
      const T = d(p), w = p.t + t.diveDur, k = Qt(r)($._1), L = a0(t)(n)(eh(e)($._1))(k)(jd(o)($._1))(w), P = L.endT + t.retreatDur;
      return {
        ...p,
        t: P,
        runStart: P,
        runSpans: [],
        runWindows: [],
        segments: [...T.segments, ...L.segments],
        spans: [...T.spans, ...L.spans],
        windows: [...T.windows, ...L.windows],
        dives: [
          ...T.dives,
          { startT: p.t, endT: w, node: $._1, parentPath: r, childPath: k, direction: Hd },
          ...L.dives,
          { startT: L.endT, endT: P, node: $._1, parentPath: r, childPath: k, direction: Od }
        ]
      };
    }
    if ($.tag === "ExitNode")
      return p;
    const m = p.t + _h(t)(u)(c)(_)($), y = { startT: p.t, endT: m, scene: $ }, N = gh(t)(u)(c)(_)(y);
    return {
      ...p,
      t: m,
      runSpans: Qt(p.runSpans)(y),
      runWindows: [...p.runWindows, ...N],
      spans: Qt(p.spans)(y),
      windows: [...p.windows, ...N]
    };
  })({ t: i, runStart: i, runSpans: [], runWindows: [], segments: [], spans: [], windows: [], dives: [] })(o.scenes), h = d(l);
  return {
    endT: l.t,
    spans: h.spans,
    windows: Lt((p) => ($) => at.compare(p.startT)($.startT))(h.windows),
    segments: h.segments,
    dives: h.dives
  };
}, dh = (t) => (n) => (e) => e.endT <= t || e.startT >= n ? J : v("Just", { ...e, startT: Ne(t)(e.startT), endT: yi(n)(e.endT) }), nc = (t) => (n) => (e) => {
  const r = jn(e.layout), o = {
    x: r.x * e.placement.scale + e.placement.tx,
    y: r.y * e.placement.scale + e.placement.ty,
    w: r.w * e.placement.scale,
    h: r.h * e.placement.scale
  };
  return {
    center: { x: o.x + o.w / 2, y: o.y + o.h / 2 },
    zoom: yi(ju(n)(o)(t.padding * e.placement.scale))(40 / (11 * e.placement.scale))
  };
}, hh = (t) => (n) => (e) => e.placement.scale === 1 && e.placement.tx === 0 && e.placement.ty === 0 ? Ms(e.placement)(fo(t)(e.layout)(jn(e.layout))(0)) : nc(t)(n)(e), ph = (t) => (n) => (e) => (r) => yt((o) => {
  const i = Xd(r)(o.parentPath)(o.startT)(o.endT);
  if (i.tag === "Just") {
    const s = o.childPath, u = Ut((c) => Zs(c.path)(s))(r.segments);
    if (u.tag === "Just") {
      const c = hh(t)(n)(i._1), a = nc(t)(n)(u._1);
      if (o.direction === "DiveIn")
        return v(
          "Just",
          { startT: o.startT, endT: o.endT, fromCam: c, toCam: a, easing: pr, interp: Wc }
        );
      if (o.direction === "DiveOut")
        return v(
          "Just",
          { startT: o.startT, endT: o.endT, fromCam: a, toCam: c, easing: pr, interp: Wc }
        );
      f();
    }
    if (u.tag === "Nothing")
      return J;
    f();
  }
  if (i.tag === "Nothing")
    return J;
  f();
})(r.dives), $h = (t) => (n) => {
  if (n.tag === "Structural")
    return yt((e) => e)([
      vs(n._1.from)(t) ? J : v("Just", fr("UnknownKeyframe", n._1.from)),
      vs(n._1.to)(t) ? J : v("Just", fr("UnknownKeyframe", n._1.to))
    ]);
  if (n.tag === "DataFlow")
    return [
      ...yt((e) => e)([vs(n._1.keyframe)(t) ? J : v("Just", fr("UnknownKeyframe", n._1.keyframe))]),
      ...ih(n._1.events),
      ...ch(n._1.events)
    ];
  if (n.tag === "EnterNode")
    return [];
  if (n.tag === "ExitNode")
    return [];
  f();
}, mh = (t) => (n) => {
  const e = Tt(n)($h(t));
  return e.length === 0 ? St("Right", void 0) : St("Left", e);
}, yh = (t) => (n) => (e) => (r) => Lt((o) => (i) => at.compare(o.startT)(i.startT))(Tt(r.segments)((o) => o.placement.scale === 1 && o.placement.tx === 0 && o.placement.ty === 0 ? yt(dh(o.startT)(o.endT))(z(Zd(o.placement))(uh(t)(e)(o.edgeEndpoints)(r)(o))) : [
  (() => {
    const i = nc(t)(n)(o);
    return { startT: o.startT, endT: o.endT, fromCam: i, toCam: i, easing: pr, interp: ao };
  })()
])), Nh = (t) => (n) => (e) => (r) => {
  if (0 < e.keyframes.length) {
    const o = e.keyframes[0], i = Yf(z((u) => b(u.id, u))(e.keyframes)), s = mh(i)(e.scenes);
    return (() => {
      if (s.tag === "Left") {
        const u = s._1;
        return (c) => St("Left", u);
      }
      if (s.tag === "Right") {
        const u = s._1;
        return (c) => c(u);
      }
      f();
    })()(() => {
      const u = a0(n)(r)(r)([])(e)(0);
      return St(
        "Right",
        {
          totalDuration: u.endT,
          windows: u.windows,
          spans: u.spans,
          keyframes: i,
          initialKeyframe: o.id,
          timing: n,
          layout: r.layout,
          cameraSpans: [...yh(t)(r.layout)(i)(u), ...ph(t)(r.layout)(i)(u)],
          cameraConfig: t,
          levelTree: r,
          segments: u.segments,
          dives: u.dives,
          seed: e.seed
        }
      );
    });
  }
  return St("Left", [Bd]);
}, nu = (t) => (n) => Math.imul(t, n), Mr = (t) => {
  const n = t + 1831565813 | 0, e = nu(n ^ n >>> 15)(n | 1), r = e ^ (e + nu(e ^ e >>> 7)(e | 61) | 0), o = r ^ r >>> 14;
  return { prng: o, value: o < 0 ? (et(o) + 4294967296) / 4294967296 : et(o) / 4294967296 };
}, fn = (t) => (n) => (e) => {
  const r = Mr(e);
  return { prng: r.prng, value: t + r.value * (n - t) };
}, eu = (t) => (n) => x((e) => (r) => nu(e ^ r)(-2048144789))(n)(z(Qe)(nr(t))), ec = (t) => t, ie = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ni = /* @__PURE__ */ Su(Qo), xh = /* @__PURE__ */ (() => {
  const t = ne.unfoldr(we);
  return (n) => t(Mn("IterNode", n, ve));
})(), f0 = /* @__PURE__ */ nn(C)(Ht), g0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Yc = Ht.foldMap(h1(C)), Xc = (t) => (n) => (e) => {
  const r = at.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = at.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, Jh = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Or = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Th = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, vh = /* @__PURE__ */ nn(C)(Ht), wh = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, kh = /* @__PURE__ */ nn(C)(Ht), bh = /* @__PURE__ */ ec("Backdrop"), Vc = /* @__PURE__ */ ec("FlyThrough"), xi = /* @__PURE__ */ ec("Active"), Uc = (t) => (n) => (e) => {
  const r = (t + n) / 2, o = e - r, i = o < 0 ? -1 : 1, s = (n - t) / 2, u = s * 0.15, c = s - u, a = o < 0 ? -o : o;
  return n <= t ? (t + n) / 2 : a <= c ? e : r + i * (s - u * Xi(-(a - c) / u));
}, Lh = (t) => (n) => (e) => (r) => {
  const o = jn(t), i = o.w / ie(1e-4)(n.zoom) / 2, s = o.h / ie(1e-4)(n.zoom) / 2, u = e.y - n.center.y, c = e.x - n.center.x;
  return {
    ...n,
    center: {
      x: i <= 1e-4 ? n.center.x + 0 * r * 0.35 : c < 0 ? n.center.x + c / (1 + -c / i) * r * 0.35 : n.center.x + c / (1 + c / i) * r * 0.35,
      y: s <= 1e-4 ? n.center.y + 0 * r * 0.35 : u < 0 ? n.center.y + u / (1 + -u / s) * r * 0.35 : n.center.y + u / (1 + u / s) * r * 0.35
    }
  };
}, ru = (t) => (n) => (e) => {
  const r = Ut((o) => Ni(o.path)(n) && e >= o.startT && e < o.endT)(t.segments);
  if (r.tag === "Just")
    return v("Just", r._1);
  if (r.tag === "Nothing")
    return Ut((o) => Ni(o.path)(n))(t.segments);
  f();
}, Eh = (t) => ({
  startT: 0,
  endT: t.totalDuration,
  path: [],
  layout: t.layout,
  placement: Yu,
  windows: t.windows,
  spans: t.spans,
  keyframes: t.keyframes,
  initialKeyframe: t.initialKeyframe,
  edgeEndpoints: A
}), Sh = (t) => z((n) => n < 1 ? [] : bt(0, n, t))(At(0, t.length - 1 | 0)), Ch = (t) => x((n) => (e) => (n * 31 | 0) + Qe(e) | 0)(7)(nr(t)), l0 = (t) => (n) => (e) => ({
  ...e,
  state: {
    ...e.state,
    nodes: f0(z((r) => b(r._1, t(r._1)(r._2)))(xh(e.state.nodes))),
    edges: (() => {
      const r = (o) => {
        if (o.tag === "Leaf")
          return A;
        if (o.tag === "Node")
          return Ot("Node", o._1, o._2, o._3, n(o._4), r(o._5), r(o._6));
        f();
      };
      return r(e.state.edges);
    })()
  }
}), ks = (t) => (n) => {
  const e = g0(n)(t.keyframes);
  if (e.tag === "Nothing")
    return A;
  if (e.tag === "Just")
    return e._1.nodes;
  f();
}, bs = (t) => (n) => {
  const e = g0(n)(t.keyframes);
  if (e.tag === "Nothing")
    return A;
  if (e.tag === "Just")
    return e._1.edges;
  f();
}, rc = (t) => (n) => {
  if (n < t.startT)
    return rr("AtKeyframe", t.initialKeyframe);
  const e = Ut((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return rr("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return rr("AtKeyframe", e._1.scene._1.keyframe);
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode")
      return rr("AtKeyframe", t.initialKeyframe);
    f();
  }
  if (e.tag === "Nothing") {
    const r = t.spans.length - 1 | 0;
    return r >= 0 && r < t.spans.length ? rr(
      "AtKeyframe",
      (() => {
        if (t.spans[r].scene.tag === "Structural")
          return t.spans[r].scene._1.to;
        if (t.spans[r].scene.tag === "DataFlow")
          return t.spans[r].scene._1.keyframe;
        if (t.spans[r].scene.tag === "EnterNode" || t.spans[r].scene.tag === "ExitNode")
          return t.initialKeyframe;
        f();
      })()
    ) : rr("AtKeyframe", t.initialKeyframe);
  }
  f();
}, Ph = /* @__PURE__ */ x((t) => (n) => {
  const e = Wo(t);
  return e.tag === "Just" && n.startT <= e._1.last.endT + 1e-6 ? Qt(e._1.init)({ ...e._1.last, endT: ie(e._1.last.endT)(n.endT), windows: Qt(e._1.last.windows)(n) }) : Qt(t)({ endT: n.endT, windows: [n] });
})([]), Gh = (t) => (n) => (e) => Yc((r) => Yc((o) => o.target.tag === "FillWindow" ? o.startT <= e ? Ot("Node", 1, 1, o.target._2, void 0, A, A) : A : o.target.tag === "TokenWindow" && o.startT + (o.endT - o.startT) * 0.25 <= e ? Ot("Node", 1, 1, o.target._4, void 0, A, A) : A)(r.windows))(ft(
  (r) => e <= r.endT + t,
  Ph(Lt((r) => (o) => at.compare(r.startT)(o.startT))(ft(
    (r) => r.target.tag === "FillWindow" || r.target.tag === "TokenWindow",
    n
  )))
)), Ih = (t) => (n) => (e) => qn(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), Ah = (t) => (n) => (e) => qn((r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e, t), Fh = (t) => (n) => (e) => qn((r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e, t), Rh = (t) => (n) => (e) => qn(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), Bh = (t) => (n) => {
  const e = rc(t)(n);
  if (e.tag === "AtKeyframe")
    return mn(3)(e._1) === "kf-" ? "" : e._1;
  if (e.tag === "InTransition")
    return mn(3)(e._2) === "kf-" ? "" : e._2;
  f();
}, _0 = (t) => (n) => (e) => Ut((r) => e(r) && n >= r.startT && n < r.endT)(t), Qh = (t) => {
  const n = Xc(0)(1)(t / 0.2), e = Xc(0)(1)((1 - t) / 0.2);
  return n * n * (3 - 2 * n) * e * e * (3 - 2 * e);
}, Wh = (t) => (n) => {
  if (n.tag === "Travelling") {
    const e = Jh(n._1.edge)(t.edges);
    if (e.tag === "Just") {
      const r = Qr(e._1)(n._1.progress);
      return r.tag === "Just" ? v("Just", { dot: r._1, weight: Qh(n._1.progress) }) : J;
    }
    if (e.tag === "Nothing")
      return J;
    f();
  }
  return J;
}, Dh = {
  nodes: A,
  edges: A,
  tokens: A,
  camera: { center: { x: 0, y: 0 }, zoom: 1 },
  frameTitle: "",
  visited: A,
  nodeFadeAlpha: A,
  nodeInvert: A
}, Hh = { nodes: A, edges: A, chipExtras: A }, Oh = {
  segment: {
    startT: 0,
    endT: 0,
    path: [],
    layout: Hh,
    placement: Yu,
    windows: [],
    spans: [],
    keyframes: A,
    initialKeyframe: "",
    edgeEndpoints: A
  },
  state: Dh,
  bgAlpha: 1,
  role: xi
}, Ji = (t) => {
  const n = t.levels.length - 1 | 0;
  return n >= 0 && n < t.levels.length ? t.levels[n] : Oh;
}, zh = (t) => (n) => {
  const e = rc(t)(n);
  if (e.tag === "AtKeyframe")
    return ks(t)(e._1);
  if (e.tag === "InTransition")
    return Pn(C.compare, Cn, ks(t)(e._1), ks(t)(e._2));
  f();
}, qh = (t) => (n) => {
  const e = rc(t)(n);
  if (e.tag === "AtKeyframe")
    return bs(t)(e._1);
  if (e.tag === "InTransition")
    return Pn(C.compare, Cn, bs(t)(e._1), bs(t)(e._2));
  f();
}, Yh = (t) => (n) => {
  const e = t.w / ie(1e-4)(n.zoom), r = t.h / ie(1e-4)(n.zoom);
  return {
    ...n,
    center: {
      x: e >= t.w ? t.x + t.w / 2 : Uc(t.x + e / 2)(t.x + t.w - e / 2)(n.center.x),
      y: r >= t.h ? t.y + t.h / 2 : Uc(t.y + r / 2)(t.y + t.h - r / 2)(n.center.y)
    }
  };
}, Xh = (t) => Yh((() => {
  const n = jn(t.layout), e = n.x * t.placement.scale + t.placement.tx, r = n.y * t.placement.scale + t.placement.ty;
  return { x: e, y: r, w: (n.x + n.w) * t.placement.scale + t.placement.tx - e, h: (n.y + n.h) * t.placement.scale + t.placement.ty - r };
})()), Vh = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : ie(0)(Or(1)((n - t.startT) / e));
}, d0 = (t) => (n) => (e) => ie(0)(Or(1)((e - fn(0)(0.3)(t + Ch(n) | 0).value) / ie(1e-4)(0.7))), Kc = (t) => (n) => (e) => l0((r) => (o) => o.tag === "Hidden" ? go : Hr("PloppingOut", r === n ? ie(0)(Or(1)((e - 0.45) / ie(1e-4)(0.55))) : d0(t)(r)(e)))((r) => r.tag === "Retracted" ? lo : Dr("Retracting", n0, e)), Mc = (t) => (n) => l0((e) => (r) => r.tag === "Hidden" ? go : Hr("PloppingIn", d0(t)(e)(n)))((e) => e.tag === "Retracted" ? lo : Dr("Extending", tc, n)), Ti = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : ie(0)(Or(1)((n - t.startT) / e));
}, Uh = (t) => (n) => (e) => (r) => (o) => {
  const i = _0(n)(e)((s) => s.target.tag === "EdgeWindow" && s.target._1 === o);
  if (i.tag === "Just") {
    const s = Ku(t.timing.edgeEasing)(Ti(i._1)(e)), u = i._1.target.tag === "EdgeWindow" ? i._1.target._2 : js("Extend", tc);
    if (u.tag === "Retract")
      return Dr("Retracting", u._1, s);
    if (u.tag === "Extend")
      return Dr("Extending", u._1, s);
    f();
  }
  if (i.tag === "Nothing")
    return Rh(n)(e)(o) || Ih(n)(e)(o) ? lo : Th(o)(r) ? Fd : lo;
  f();
}, Kh = (t) => (n) => (e) => {
  const r = qh(n)(e);
  return vh(z((o) => b(o, Uh(t)(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return A;
      if (i.tag === "Node")
        return Ot("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return Et(On.foldr, o(n.layout.edges));
  })()));
}, Mh = (t) => (n) => (e) => (r) => {
  const o = _0(t)(n)((i) => i.target.tag === "NodeWindow" && i.target._1 === r);
  if (o.tag === "Just") {
    const i = Ti(o._1)(n), s = o._1.target.tag === "NodeWindow" ? o._1.target._2 : s0;
    if (s === "PlopIn")
      return Hr("PloppingIn", i);
    if (s === "PlopOut")
      return Hr("PloppingOut", i);
    f();
  }
  if (o.tag === "Nothing")
    return Fh(t)(n)(r) || Ah(t)(n)(r) ? go : wh(r)(e) ? Ad : go;
  f();
}, jh = (t) => (n) => (e) => {
  const r = zh(n)(e);
  return f0(z((o) => b(o, Mh(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return A;
      if (i.tag === "Node")
        return Ot("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return Et(On.foldr, o(n.layout.nodes));
  })()));
}, Zh = (t) => (n) => (e) => n.target.tag === "TokenWindow" ? b(
  n.target._1,
  e < n.startT ? Ts : e >= n.endT ? Hc : mi(
    "Travelling",
    {
      edge: n.target._2,
      direction: n.target._3,
      progress: Ku(t.timing.tokenEasing)(Ti(n)(e)),
      labels: n.target._6,
      source: n.target._4,
      target: n.target._5,
      holdPre: n.target._7,
      holdPost: n.target._8
    }
  )
) : n.target.tag === "FillWindow" ? b(
  n.target._1,
  e < n.startT ? Ts : e >= n.endT ? Hc : mi("Filling", { node: n.target._2, progress: Ti(n)(e), labels: n.target._3 })
) : b("", Ts), tp = (t) => (n) => (e) => kh(z((r) => Zh(t)(r)(e))(ft(
  (r) => r.target.tag === "TokenWindow" || r.target.tag === "FillWindow",
  n
))), br = (t) => (n) => (e) => ({
  nodes: jh()(n)(e),
  edges: Kh(t)(n)(e),
  tokens: tp(t)(n.windows)(e),
  camera: Mf(t.cameraConfig)(n.layout)(t.cameraSpans)(e),
  frameTitle: Bh(n)(e),
  visited: Gh(t.timing.hatchHold)(n.windows)(e),
  nodeFadeAlpha: A,
  nodeInvert: A
}), np = (t) => (n) => (e) => Tf(
  J,
  $f,
  (r) => r.direction === "DiveIn" && Ni(r.parentPath)(n.path) && e >= r.startT - 0.7 && e < r.startT ? v("Just", { node: r.node, phase: (e - (r.startT - 0.7)) / 0.7 }) : J,
  t.dives
), ep = (t) => (n) => (e) => (r) => {
  const o = np(t)(n)(e);
  if (o.tag === "Just") {
    const i = Kn(3.141592653589793 * o._1.phase * 3);
    return {
      ...r,
      state: { ...r.state, nodeInvert: Ot("Node", 1, 1, o._1.node, 1 * i * i, A, A) }
    };
  }
  if (o.tag === "Nothing")
    return r;
  f();
}, h0 = (t) => (n) => yt((e) => {
  const r = Ut((o) => o.direction === "DiveIn" && Ni(o.childPath)((() => {
    const i = e.length + 1 | 0;
    return i < 1 ? [] : bt(0, i, n);
  })()))(t.dives);
  if (r.tag === "Just") {
    const o = ru(t)(e)(r._1.startT - 1e-4);
    if (o.tag === "Just")
      return v(
        "Just",
        {
          bgAlpha: 1,
          role: bh,
          segment: o._1,
          state: {
            ...br(t)(o._1)(r._1.startT - 1e-4),
            nodeFadeAlpha: Ot("Node", 1, 1, r._1.node, 0, A, A)
          }
        }
      );
    if (o.tag === "Nothing")
      return J;
    f();
  }
  if (r.tag === "Nothing")
    return J;
  f();
})(Sh(n)), p0 = (t) => (n) => {
  const e = ft((o) => n >= o.startT && n < o.endT, t.segments), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r] : Eh(t);
}, rp = (t) => (n) => (e) => {
  const r = Vh(e)(n), o = ru(t)(e.parentPath)((() => {
    if (e.direction === "DiveIn")
      return e.startT - 1e-4;
    if (e.direction === "DiveOut")
      return e.endT - 1e-4;
    f();
  })()), i = ru(t)(e.childPath)((() => {
    if (e.direction === "DiveIn")
      return e.endT;
    if (e.direction === "DiveOut")
      return e.startT - 1e-4;
    f();
  })()), s = ie(0)(Or(1)(r / 0.6)), u = ie(0)(Or(1)((r - 0.4) / 0.6)), c = (() => {
    if (e.direction === "DiveIn")
      return Kc(t.seed)(e.node)(s);
    if (e.direction === "DiveOut")
      return Mc(t.seed)(u);
    f();
  })(), a = (() => {
    if (e.direction === "DiveIn")
      return Mc(t.seed)(u);
    if (e.direction === "DiveOut")
      return Kc(t.seed)(e.node)(s);
    f();
  })();
  return [
    ...h0(t)(e.parentPath),
    ...(() => {
      if (o.tag === "Just") {
        if (i.tag === "Just")
          return [
            c({
              segment: o._1,
              state: br(t)(o._1)((() => {
                if (e.direction === "DiveIn")
                  return e.startT - 1e-4;
                if (e.direction === "DiveOut")
                  return e.endT - 1e-4;
                f();
              })()),
              bgAlpha: 1,
              role: Vc
            }),
            a({
              segment: i._1,
              state: br(t)(i._1)((() => {
                if (e.direction === "DiveIn")
                  return e.endT;
                if (e.direction === "DiveOut")
                  return e.startT - 1e-4;
                f();
              })()),
              bgAlpha: 1,
              role: xi
            })
          ];
        if (i.tag === "Nothing")
          return [
            c({
              segment: o._1,
              state: br(t)(o._1)((() => {
                if (e.direction === "DiveIn")
                  return e.startT - 1e-4;
                if (e.direction === "DiveOut")
                  return e.endT - 1e-4;
                f();
              })()),
              bgAlpha: 1,
              role: Vc
            })
          ];
        f();
      }
      if (o.tag === "Nothing")
        return [
          (() => {
            const g = p0(t)(n);
            return { segment: g, state: br(t)(g)(n), bgAlpha: 1, role: xi };
          })()
        ];
      f();
    })()
  ];
}, op = (t) => (n) => {
  const e = yt(Wh(t))((() => {
    const r = (o, i) => {
      if (o.tag === "Leaf")
        return i;
      if (o.tag === "Node")
        return r(o._5, zt("Cons", o._4, r(o._6, i)));
      f();
    };
    return Et(Xt.foldr, r(n.tokens, Yt));
  })());
  return 0 < e.length ? v("Just", e[0]) : J;
}, ip = (t) => (n) => {
  const e = op(t)(n);
  if (e.tag === "Nothing")
    return n.camera;
  if (e.tag === "Just")
    return Lh(t)(n.camera)(e._1.dot)(e._1.weight);
  f();
}, sp = (t) => (n) => t.placement.scale === 1 && t.placement.tx === 0 && t.placement.ty === 0 ? ip(t.layout)(n) : n.camera, up = (t) => (n) => Ut((e) => n >= e.startT && n < e.endT)(t.dives), cp = (t) => (n) => {
  const e = p0(t)(n), r = br(t)(e)(n), o = t.dives.length !== 0, i = Mf(t.cameraConfig)(t.layout)(t.cameraSpans)(n), s = Xh(e)(sp(e)({ ...r, camera: i })), u = ep(t)(e)(n)({ bgAlpha: 1, role: xi, segment: e, state: { ...r, camera: s } }), c = h0(t)(e.path), a = up(t)(n);
  if (a.tag === "Just")
    return { levels: rp(t)(n)(a._1), camera: i, rootLayout: t.layout, hasDives: o, diving: !0 };
  if (a.tag === "Nothing")
    return { levels: Qt(c)(u), camera: s, rootLayout: t.layout, hasDives: o, diving: !1 };
  f();
}, $0 = (t) => t, m0 = /* @__PURE__ */ $0("RunText"), ap = /* @__PURE__ */ $0("RunCode"), y0 = (t) => (n) => (e) => n.length === 0 ? e : Qt(e)({ style: t, text: Nr(n) }), fp = (t) => ({
  style: (() => {
    if (t.style === "RunText")
      return ap;
    if (t.style === "RunCode")
      return m0;
    f();
  })(),
  buf: [],
  runs: y0(t.style)(t.buf)(t.runs)
}), gp = (t) => (n) => 0 < n.length ? { ...t, buf: Qt(t.buf)(n[0]) } : { ...t, buf: Qt(t.buf)("\\") }, lp = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, c = Rt((a) => J, (a) => (g) => v("Just", { head: a, tail: g }), r);
    if (c.tag === "Nothing") {
      o = !1, i = s;
      continue;
    }
    if (c.tag === "Just") {
      if (c._1.head === "\\") {
        e = gp(s)(c._1.tail), r = bt(1, c._1.tail.length, c._1.tail);
        continue;
      }
      if (c._1.head === "`") {
        e = fp(s), r = c._1.tail;
        continue;
      }
      e = { ...s, buf: Qt(s.buf)(c._1.head) }, r = c._1.tail;
      continue;
    }
    f();
  }
  return i;
}, N0 = (t) => {
  const n = lp({ style: m0, buf: [], runs: [] })(nr(t));
  return y0(n.style)(n.buf)(n.runs);
};
let Mo = null;
function _p() {
  return Mo || (typeof document > "u" ? null : (Mo = document.createElement("canvas").getContext("2d"), Mo));
}
const jc = /* @__PURE__ */ new Map(), dp = (t) => (n) => (e) => (r) => () => {
  const o = `${e} ${n}px ${t}|${r}`, i = jc.get(o);
  if (i !== void 0) return i;
  const s = _p();
  if (!s)
    return r.length * n * 0.62;
  s.font = `${e} ${n}px ${t}`;
  const u = s.measureText(r).width;
  return jc.set(o, u), u;
}, hp = yr.traverse(qi), pp = /* @__PURE__ */ x(Br)(0), zr = /* @__PURE__ */ (() => {
  const t = Ye(`\r
`)(" "), n = Ye(`
`)(" "), e = (() => {
    const r = Ye("\r")(" "), o = (() => {
      const i = Ye("	")(" ");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), x0 = (t) => (n) => {
  const e = hp((r) => {
    const o = (() => {
      if (r.style === "RunText")
        return t.text;
      if (r.style === "RunCode")
        return t.code;
      f();
    })();
    return dp(o.family)(o.size)(o.weight)(zr(r.text));
  })(N0(zr(n)));
  return () => {
    const r = e();
    return pp(r);
  };
}, $p = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: "500" }, mp = { family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", size: 11, weight: "400" }, J0 = { text: $p, code: mp }, yp = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, vr = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Np = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, xp = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Jp = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Zc = (t) => Nr(Jn(cr((n) => n === " ")(Jn(cr((n) => n === " ")(nr(t)).rest)).rest)), Tp = (t) => x((n) => (e) => e._1 > 0 && (e._2 === " " || e._2 === "-" || e._2 === "_" || e._2 === ".") ? v("Just", e._1) : n)(J)(Ft(Oe)(t)), ou = (t) => (n) => {
  if (t <= 0)
    return [n];
  if (Ze(n) <= t)
    return [n];
  const e = nr(n), r = t < 1 ? [] : bt(0, t, e), o = Tp(r);
  if (o.tag === "Just") {
    const i = Zc(Pc(!(o._1 >= 0 && o._1 < r.length) || r[o._1] === " " ? o._1 : o._1 + 1 | 0)(n)), s = Zc(yo(o._1 + 1 | 0)(n));
    return s === "" ? [i] : [i, ...ou(t)(s)];
  }
  if (o.tag === "Nothing") {
    const i = Pc(t)(n), s = yo(t)(n);
    return s === "" ? [i] : [i, ...ou(t)(s)];
  }
  f();
}, vp = { cellW: 7, cellH: 3, maxLineWidth: 20 }, wp = (t) => (n) => {
  const e = z((i) => b(
    (() => {
      if (i.label.tag === "Just")
        return i.label._1;
      if (i.label.tag === "Nothing")
        return i.id;
      f();
    })(),
    i
  ))(n.nodes), r = vr(1)(Ge(
    (Np(t.maxLineWidth)(x((i) => (s) => vr(i)(Ze(s._1)))(0)(e)) + 2 | 0) + t.cellW | 0,
    t.cellW
  )), o = (r * t.cellW | 0) - 1 | 0;
  return {
    ...n,
    nodes: z((i) => {
      if (!(i._2.size._1 === 1 && i._2.size._2 === 1))
        return i._2;
      const s = Tt(ns(`
`)(i._1))(ou(o)), u = x((a) => (g) => vr(a)(Ze(g)))(0)(s), c = i._2.shape === "Cylinder" ? vr(1)(Ge((u + 2 | 0) + t.cellW | 0, t.cellW)) : r;
      return {
        ...i._2,
        size: b(
          et(u > o ? Ge((u + 2 | 0) + t.cellW | 0, t.cellW) : c),
          et(vr(1)(Ge(s.length + t.cellH | 0, t.cellH)) + (i._2.shape === "Cylinder" || i._2.shape === "Document" ? 1 : 0) | 0)
        )
      };
    })(e)
  };
}, kp = (t) => (n) => (e) => ({
  ...e,
  nodes: z((r) => {
    const o = Jp(r.id)(n);
    if (o.tag === "Nothing")
      return r;
    if (o.tag === "Just")
      return {
        ...r,
        size: b(
          xp(r.size._1)(et(vr(1)($n(Yi(r.shape === "Cylinder" ? (o._1 + 0) / t : (o._1 + 32) / t))))),
          r.size._2
        )
      };
    f();
  })(e.nodes)
}), bp = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Lp = (t) => {
  const n = t.length;
  return ((r) => (o) => {
    let i = r, s = o, u = !0, c;
    for (; u; ) {
      const a = i, g = s;
      if (a >= n) {
        u = !1, c = g;
        continue;
      }
      const _ = (d) => (l) => {
        let h = d, p = l, $ = !0, m;
        for (; $; ) {
          const y = h, N = p;
          if (y >= n) {
            $ = !1, m = N;
            continue;
          }
          if (a >= 0 && a < t.length) {
            if (y >= 0 && y < t.length) {
              h = y + 1 | 0, p = (() => {
                const T = t[a].position, w = t[a].size, k = t[y].position, L = t[y].size;
                return T._1 < k._1 + L._1 && k._1 < T._1 + w._1 && T._2 < k._2 + L._2 && k._2 < T._2 + w._2;
              })() ? N + 1 | 0 : N;
              continue;
            }
            h = y + 1 | 0, p = N;
            continue;
          }
          $ = !1, m = N;
        }
        return m;
      };
      i = a + 1 | 0, s = _(a + 1 | 0)(g);
    }
    return c;
  })(0)(0);
}, ta = (t) => x((n) => (e) => n + E1(e.start)(e.end))(0)(t.segments), Ep = (t) => (n) => (e) => ({
  crossingCount: x((r) => (o) => r + o.jumps.length | 0)(0)(n),
  bendCount: x((r) => (o) => r + o.bends.length | 0)(0)(n),
  totalEdgeLength: x((r) => (o) => r + ta(o))(0)(n),
  maxEdgeLength: x((r) => (o) => bp(r)(ta(o)))(0)(n),
  nodeOverlapCount: Lp(t),
  constraintViolations: e,
  jumpCount: x((r) => (o) => r + o.jumps.length | 0)(0)(n)
}), oc = (t) => t, Kt = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = it.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ic = /* @__PURE__ */ oc("LEFT"), Sp = /* @__PURE__ */ oc("RIGHT"), T0 = /* @__PURE__ */ oc("UNDEFINED"), Cp = {
  eq: (t) => (n) => t === "LEFT" ? n === "LEFT" : t === "RIGHT" ? n === "RIGHT" : t === "UP" ? n === "UP" : t === "DOWN" ? n === "DOWN" : t === "UNDEFINED" && n === "UNDEFINED"
}, Pp = {
  compare: (t) => (n) => {
    if (t === "LEFT")
      return n === "LEFT" ? Gn : Nn;
    if (n === "LEFT")
      return xn;
    if (t === "RIGHT")
      return n === "RIGHT" ? Gn : Nn;
    if (n === "RIGHT")
      return xn;
    if (t === "UP")
      return n === "UP" ? Gn : Nn;
    if (n === "UP")
      return xn;
    if (t === "DOWN")
      return n === "DOWN" ? Gn : Nn;
    if (n === "DOWN")
      return xn;
    if (t === "UNDEFINED" && n === "UNDEFINED")
      return Gn;
    f();
  },
  Eq0: () => Cp
}, Gp = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      if (t === "LEFT") {
        if (s._3 === "LEFT") {
          o = !1, i = !0;
          continue;
        }
        r = s._5;
        continue;
      }
      if (s._3 === "LEFT") {
        r = s._6;
        continue;
      }
      if (t === "RIGHT") {
        if (s._3 === "RIGHT") {
          o = !1, i = !0;
          continue;
        }
        r = s._5;
        continue;
      }
      if (s._3 === "RIGHT") {
        r = s._6;
        continue;
      }
      if (t === "UP") {
        if (s._3 === "UP") {
          o = !1, i = !0;
          continue;
        }
        r = s._5;
        continue;
      }
      if (s._3 === "UP") {
        r = s._6;
        continue;
      }
      if (t === "DOWN") {
        if (s._3 === "DOWN") {
          o = !1, i = !0;
          continue;
        }
        r = s._5;
        continue;
      }
      if (s._3 === "DOWN") {
        r = s._6;
        continue;
      }
      if (t === "UNDEFINED" && s._3 === "UNDEFINED") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, Ip = { x: 0, y: 0 }, Zn = (t) => (n) => (e) => {
  const r = Kt(t)(e.cNodes);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cNodes: U(it)(t)(n(r._1))(e.cNodes) };
  f();
}, ho = (t) => (n) => (e) => {
  const r = Kt(t)(e.cGroups);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cGroups: U(it)(t)(n(r._1))(e.cGroups) };
  f();
}, Ap = (t) => x((n) => (e) => Zn(e)((r) => ({ ...r, hitboxPreCompaction: r.hitbox }))(n))(t)(t.cNodeOrder), Fp = (t) => {
  const n = x((e) => (r) => {
    const o = Kt(r)(t.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return x((i) => (s) => wt(it)(rn)(s)([r])(i))(e)(o._1.constraints);
    f();
  })(A)(t.cNodeOrder);
  return x((e) => (r) => Zn(r)((o) => ({
    ...o,
    constraints: (() => {
      const i = Kt(r)(n);
      if (i.tag === "Nothing")
        return [];
      if (i.tag === "Just")
        return i._1;
      f();
    })()
  }))(e))(t)(t.cNodeOrder);
}, Rp = (t) => (n) => Zn(t)((e) => ({ ...e, ignoreSpacing: { left: e.ignoreSpacing.left || n.left, right: e.ignoreSpacing.right || n.right, up: e.ignoreSpacing.up || n.up, down: e.ignoreSpacing.down || n.down } })), Bp = (t) => {
  const n = x((e) => (r) => ho(r)((o) => ({ ...o, outDegree: o.outDegreeReal }))(e))(t)(t.cGroupOrder);
  return x((e) => (r) => Zn(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder);
}, fe = { left: !1, right: !1, up: !1, down: !1 }, Qp = { horizontalSpacing: (t) => (n) => 0, verticalSpacing: (t) => (n) => 0 }, sc = (t) => x((n) => (e) => {
  const r = Kt(e)(n.cGroups);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just") {
    const o = x((s) => (u) => {
      const c = Kt(u)(n.cNodes);
      if (c.tag === "Nothing")
        return s;
      if (c.tag === "Just") {
        if (s.tag === "Nothing")
          return v("Just", u);
        if (s.tag === "Just") {
          const a = Kt(s._1)(n.cNodes);
          if (a.tag === "Nothing")
            return v("Just", u);
          if (a.tag === "Just")
            return c._1.hitbox.x < a._1.hitbox.x ? v("Just", u) : v("Just", s._1);
        }
      }
      f();
    })(J)(r._1.cNodes), i = ho(e)((s) => ({ ...s, reference: o }))(n);
    if (o.tag === "Nothing")
      return i;
    if (o.tag === "Just") {
      const s = Kt(o._1)(i.cNodes);
      if (s.tag === "Nothing")
        return i;
      if (s.tag === "Just") {
        const u = s._1;
        return x((c) => (a) => Zn(a)((g) => ({ ...g, cGroupOffset: { x: g.hitbox.x - u.hitbox.x, y: g.hitbox.y - u.hitbox.y } }))(c))(i)(r._1.cNodes);
      }
    }
  }
  f();
})(t)(t.cGroupOrder), Un = (t) => sc({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return A;
      if (e.tag === "Node")
        return Ot("Node", e._1, e._2, e._3, { ...e._4, hitbox: { ...e._4.hitbox, x: -e._4.hitbox.x - e._4.hitbox.width } }, n(e._5), n(e._6));
      f();
    };
    return n(t.cNodes);
  })()
}), de = (t) => sc({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return A;
      if (e.tag === "Node")
        return Ot(
          "Node",
          e._1,
          e._2,
          e._3,
          {
            ...e._4,
            hitbox: { x: e._4.hitbox.y, y: e._4.hitbox.x, width: e._4.hitbox.height, height: e._4.hitbox.width },
            cGroupOffset: { x: e._4.cGroupOffset.y, y: e._4.cGroupOffset.x }
          },
          n(e._5),
          n(e._6)
        );
      f();
    };
    return n(t.cNodes);
  })()
}), v0 = (t) => {
  const n = x((e) => (r) => ho(r)((o) => ({ ...o, outDegree: 0, outDegreeReal: 0, incomingConstraints: [] }))(e))(t)(t.cGroupOrder);
  return x((e) => (r) => {
    const o = Kt(r)(e.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just") {
      if (o._1.cGroup.tag === "Nothing")
        return e;
      if (o._1.cGroup.tag === "Just") {
        const i = o._1.cGroup._1;
        return x((s) => (u) => {
          const c = Kt(u)(s.cNodes);
          if (c.tag === "Nothing")
            return s;
          if (c.tag === "Just")
            return c._1.cGroup.tag === "Just" && c._1.cGroup._1 !== i ? ho(c._1.cGroup._1)((a) => ({ ...a, outDegree: a.outDegree + 1 | 0, outDegreeReal: a.outDegreeReal + 1 | 0 }))(ho(i)((a) => Hn(Ar)(u)(a.incomingConstraints) ? a : { ...a, incomingConstraints: [...a.incomingConstraints, u] })(s)) : s;
          f();
        })(e)(o._1.constraints);
      }
    }
    f();
  })(n)(n.cNodeOrder);
}, jo = (t) => {
  const n = Fp(t.cGraph);
  return { ...t, cGraph: v0(x((e) => (r) => Zn(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder)) };
}, Wp = (t) => (n) => x((e) => (r) => {
  if (t === "LEFT" || t === "UP") {
    const i = r._2;
    return Zn(r._1)((s) => ({ ...s, constraints: [...s.constraints, i] }))(e);
  }
  const o = r._1;
  return Zn(r._2)((i) => ({ ...i, constraints: [...i.constraints, o] }))(e);
})(n)(t === "LEFT" || t === "RIGHT" ? n.predefinedHorizontalConstraints : n.predefinedVerticalConstraints), ae = (t) => {
  const n = {
    ...t,
    cGraph: Wp(t.direction)({
      ...t.cGraph,
      cNodes: (() => {
        const e = (r) => {
          if (r.tag === "Leaf")
            return A;
          if (r.tag === "Node")
            return Ot("Node", r._1, r._2, r._3, { ...r._4, constraints: [] }, e(r._5), e(r._6));
          f();
        };
        return e(t.cGraph.cNodes);
      })()
    })
  };
  return {
    ...n,
    cGraph: v0((() => {
      if (n.constraintAlgorithm.tag === "Nothing")
        return n.cGraph;
      if (n.constraintAlgorithm.tag === "Just")
        return n.constraintAlgorithm._1(n);
      f();
    })())
  };
}, Dp = (t) => (n) => (e) => {
  const r = { ...e, direction: n };
  if (t === "UNDEFINED")
    return n === "LEFT" ? ae(r) : n === "RIGHT" ? ae({ ...r, cGraph: Un(r.cGraph) }) : n === "UP" ? ae({ ...r, cGraph: de(r.cGraph) }) : n === "DOWN" ? ae({ ...r, cGraph: Un(de(r.cGraph)) }) : r;
  if (t === "LEFT")
    return n === "RIGHT" ? jo({ ...r, cGraph: Un(r.cGraph) }) : n === "UP" ? ae({ ...r, cGraph: de(r.cGraph) }) : n === "DOWN" ? ae({ ...r, cGraph: Un(de(r.cGraph)) }) : r;
  if (t === "RIGHT")
    return n === "LEFT" ? jo({ ...r, cGraph: Un(r.cGraph) }) : n === "UP" ? ae({ ...r, cGraph: de(Un(r.cGraph)) }) : n === "DOWN" ? ae({ ...r, cGraph: Un(de(Un(r.cGraph))) }) : r;
  if (t === "UP")
    return n === "LEFT" ? ae({ ...r, cGraph: de(r.cGraph) }) : n === "RIGHT" ? ae({ ...r, cGraph: Un(de(r.cGraph)) }) : n === "DOWN" ? jo({ ...r, cGraph: Un(r.cGraph) }) : r;
  if (t === "DOWN")
    return n === "LEFT" ? ae({ ...r, cGraph: de(Un(r.cGraph)) }) : n === "RIGHT" ? ae({ ...r, cGraph: Un(de(Un(r.cGraph))) }) : n === "UP" ? jo({ ...r, cGraph: Un(r.cGraph) }) : r;
  f();
}, w0 = (t) => (n) => n.finished || !Gp(t)(n.cGraph.supportedDirections) || (t === "LEFT" ? n.direction === "LEFT" : t === "RIGHT" ? n.direction === "RIGHT" : t === "UP" ? n.direction === "UP" : t === "DOWN" ? n.direction === "DOWN" : t === "UNDEFINED" && n.direction === "UNDEFINED") ? n : Dp(n.direction)(t)(n), Hp = (t) => {
  if (t.finished)
    return t;
  const n = t.direction === "UNDEFINED" ? w0(ic)(t) : t, e = { ...n, cGraph: Bp(n.cGraph) };
  if (e.compactionAlgorithm.tag === "Nothing")
    return e;
  if (e.compactionAlgorithm.tag === "Just")
    return e.compactionAlgorithm._1(e);
  f();
}, k0 = (t) => (n) => (e) => {
  const r = Kt(t)(e.cNodes), o = Kt(n)(e.cGroups);
  return r.tag === "Just" && o.tag === "Just" ? (() => {
    if (r._1.cGroup.tag === "Nothing")
      return !1;
    if (r._1.cGroup.tag === "Just")
      return !0;
    f();
  })() && (r._1.cGroup.tag === "Nothing" || !(r._1.cGroup.tag === "Just" && r._1.cGroup._1 === n)) ? e : {
    ...e,
    cNodes: U(it)(t)({ ...r._1, cGroup: v("Just", n) })(e.cNodes),
    cGroups: U(it)(n)({
      ...o._1,
      cNodes: Hn(Ar)(t)(o._1.cNodes) ? o._1.cNodes : [...o._1.cNodes, t],
      reference: (() => {
        if (o._1.reference.tag === "Nothing")
          return v("Just", t);
        if (o._1.reference.tag === "Just")
          return v("Just", o._1.reference._1);
        f();
      })()
    })(e.cGroups)
  } : e;
}, b0 = (t) => (n) => ({
  id: n.nextCNodeId,
  graph: {
    ...n,
    cNodes: U(it)(n.nextCNodeId)({
      id: n.nextCNodeId,
      origin: t.origin,
      kind: t.kind,
      cGroup: J,
      cGroupOffset: Ip,
      hitbox: t.hitbox,
      hitboxPreCompaction: t.hitbox,
      constraints: [],
      startPos: -1e308,
      ignoreSpacing: fe
    })(n.cNodes),
    cNodeOrder: [...n.cNodeOrder, n.nextCNodeId],
    nextCNodeId: n.nextCNodeId + 1 | 0
  }
}), uc = (t) => (n) => {
  const e = n.nextCGroupId;
  return {
    id: e,
    graph: x((r) => (o) => k0(o)(e)(r))({
      ...n,
      cGroups: U(it)(e)({
        id: e,
        master: t.master,
        cNodes: [],
        startPos: -1e308,
        incomingConstraints: [],
        outDegree: 0,
        outDegreeReal: 0,
        reference: J,
        delta: 0,
        deltaNormalized: 0
      })(n.cGroups),
      cGroupOrder: [...n.cGroupOrder, e],
      nextCGroupId: e + 1 | 0
    })(t.nodes)
  };
}, Op = (t) => x((n) => (e) => {
  const r = Kt(e)(n.cNodes);
  return r.tag === "Just" && r._1.cGroup.tag === "Nothing" ? uc({ master: J, nodes: [e] })(n).graph : n;
})(t)(t.cNodeOrder), zp = (t) => ({
  cGraph: Ap(Op(sc(t))),
  direction: T0,
  compactionAlgorithm: J,
  constraintAlgorithm: J,
  spacingsHandler: Qp,
  lockFun: J,
  finished: !1
}), qp = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Yp = (t) => (n) => {
  const e = at.compare(t._1)(n._1);
  return e === "LT" ? Nn : e === "GT" ? xn : it.compare(t._2)(n._2);
}, Xp = /* @__PURE__ */ (() => {
  const t = ne.unfoldr(we);
  return (n) => t(Mn("IterNode", n, ve));
})(), na = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = it.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ea = (t) => t.kind.tag === "Nothing" ? !1 : t.kind.tag === "Just" && t.kind._1 === "vs", ra = (t) => t.kind.tag === "Nothing" || !(t.kind.tag === "Just" && t.kind._1 === "vs"), is = (t) => (n) => Yp(b(t.hitbox.x + t.hitbox.width / 2, t.id))(b(n.hitbox.x + n.hitbox.width / 2, n.id)), Vp = (t) => (n) => {
  const e = dr(qt, J, (r) => is(t)(r) === "LT", n);
  if (e.tag === "Just") {
    const r = wf(qt, J, e._1, t, n);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return Qt(n)(t);
  f();
}, L0 = (t) => (n) => {
  const e = ft((o) => is(o)(t) === "LT", n), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? v("Just", e[r]) : J;
}, Up = (t) => (n) => {
  const e = Vp(n)(t.intervals), r = Ut((i) => is(n)(i) === "LT")(e), o = U(it)(n.id)((() => {
    const i = L0(n)(e);
    return i.tag === "Just" ? v("Just", i._1.id) : J;
  })())(t.cand);
  return {
    ...t,
    intervals: e,
    cand: (() => {
      if (r.tag === "Just")
        return U(it)(r._1.id)(v("Just", n.id))(o);
      if (r.tag === "Nothing")
        return o;
      f();
    })()
  };
}, Kp = (t) => (n) => {
  const e = at.compare(t.low ? t.node.hitbox.y : t.node.hitbox.y + t.node.hitbox.height)(n.low ? n.node.hitbox.y : n.node.hitbox.y + n.node.hitbox.height);
  return e === "EQ" ? t.low ? t.low && !n.low ? xn : Gn : n.low ? Nn : Gn : e;
}, Mp = (t) => x((n) => (e) => Zn(e.id)((r) => ({ ...r, constraints: [] }))(n))(t)(yt((n) => Kt(n)(t.cNodes))(t.cNodeOrder)), Ls = (t) => (n) => x((e) => (r) => {
  const o = Kt(r._1)(e.cNodes);
  if (o.tag === "Just")
    return Zn(r._1)((i) => ({ ...i, constraints: [...i.constraints, ...r._2] }))(e);
  if (o.tag === "Nothing")
    return e;
  f();
})(n)(Xp(t)), E0 = (t) => (n) => n.kind.tag !== "Nothing" && n.kind.tag === "Just" && n.kind._1 === "vs" ? n.ignoreSpacing.up ? n.ignoreSpacing.down ? n : { ...n, hitbox: { ...n.hitbox, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t - 0.01, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t, height: n.hitbox.height + 2 * t } }, oa = (t) => (n) => (e) => x((r) => (o) => e(o) ? Zn(o.id)(E0(t))(r) : r)(n)(yt((r) => Kt(r)(n.cNodes))(n.cNodeOrder)), jp = (t) => (n) => {
  const e = (r, o, i) => {
    const s = Zn(i)(E0(t))(r);
    return o.length <= 1 ? s : x((u) => (c) => c === i ? u : Zn(c)((a) => a.ignoreSpacing.up ? { ...a, hitbox: { ...a.hitbox, y: a.hitbox.y + t + 0.01, height: a.hitbox.height - t - 0.01 } } : a.ignoreSpacing.down ? { ...a, hitbox: { ...a.hitbox, height: a.hitbox.height - t - 0.01 } } : a)(u))(s)(o);
  };
  return x((r) => (o) => {
    if (o.master.tag === "Nothing")
      return 0 < o.cNodes.length ? e(r, o.cNodes, o.cNodes[0]) : r;
    if (o.master.tag === "Just")
      return e(r, o.cNodes, o.master._1);
    f();
  })(n)(yt((r) => Kt(r)(n.cGroups))(n.cGroupOrder));
}, Zp = (t) => (n) => {
  const e = L0(n)(t.intervals), r = Ut((i) => is(n)(i) === "LT")(t.intervals), o = e.tag === "Just" && (() => {
    const i = na(n.id)(t.cand);
    return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === e._1.id)) && e._1.cGroup.tag === "Just" && n.cGroup.tag === "Just" && e._1.cGroup._1 !== n.cGroup._1;
  })() ? wt(it)(rn)(e._1.id)([n.id])(t.constraints) : t.constraints;
  return {
    ...t,
    constraints: r.tag === "Just" && (() => {
      const i = na(r._1.id)(t.cand);
      return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === n.id)) && n.cGroup.tag === "Just" && r._1.cGroup.tag === "Just" && n.cGroup._1 !== r._1.cGroup._1;
    })() ? wt(it)(rn)(n.id)([r._1.id])(o) : o,
    intervals: ft((i) => i.id !== n.id, t.intervals)
  };
}, t$ = (t) => (n) => n.low ? Up(t)(n.node) : Zp(t)(n.node), Es = (t) => (n) => x(t$)({ intervals: [], cand: A, constraints: A })(Lt(Kp)(Tt(ft(
  t,
  yt((e) => Kt(e)(n.cNodes))(n.cNodeOrder)
))((e) => [{ node: e, low: !0 }, { node: e, low: !1 }]))).constraints, n$ = (t) => (n) => {
  const e = qp(0)(t / 2 - 0.5), r = Ls(Es(ea)(oa(e)(n)(ea)))(n), o = Ls(Es(ra)(oa(e)(r)(ra)))(r);
  return Ls(Es((i) => !0)(jp(e)(o)))(o);
}, e$ = (t) => (n) => n$(t)(Mp(n.cGraph)), vi = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ia = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, cc = (t) => (n) => (e) => (r) => (o) => ({
  id: t,
  representedEdges: [o],
  affectedBends: [n, e],
  hitbox: { x: vi(n._1)(e._1), y: vi(n._2)(e._2), width: je(n._1 - e._1), height: je(n._2 - e._2) },
  ignoreSpacing: fe,
  potentialGroupParents: (() => {
    if (r.tag === "Nothing")
      return [];
    if (r.tag === "Just")
      return [r._1];
    f();
  })(),
  aPort: J
}), r$ = (t) => (n) => {
  const e = vi(t.hitbox.x)(n.hitbox.x), r = vi(t.hitbox.y)(n.hitbox.y);
  return {
    ...t,
    representedEdges: [...t.representedEdges, ...n.representedEdges],
    affectedBends: [...t.affectedBends, ...n.affectedBends],
    potentialGroupParents: [...t.potentialGroupParents, ...n.potentialGroupParents],
    hitbox: {
      x: e,
      y: r,
      width: ia(t.hitbox.x + t.hitbox.width)(n.hitbox.x + n.hitbox.width) - e,
      height: ia(t.hitbox.y + t.hitbox.height)(n.hitbox.y + n.hitbox.height) - r
    },
    ignoreSpacing: {
      left: t.ignoreSpacing.left || n.ignoreSpacing.left,
      right: t.ignoreSpacing.right || n.ignoreSpacing.right,
      up: t.ignoreSpacing.up || n.ignoreSpacing.up,
      down: t.ignoreSpacing.down || n.ignoreSpacing.down
    },
    aPort: (() => {
      if (t.aPort.tag === "Just")
        return t.aPort;
      if (t.aPort.tag === "Nothing")
        return n.aPort;
      f();
    })()
  };
}, o$ = (t) => (n) => je(t.hitbox.x - n.hitbox.x) <= 1e-4 && n.hitbox.y - (t.hitbox.y + t.hitbox.height) <= 1e-4 && t.hitbox.y - (n.hitbox.y + n.hitbox.height) <= 1e-4, i$ = (t) => (n) => je(t.hitbox.x - n.hitbox.x) <= 1e-4 ? at.compare(t.hitbox.y)(n.hitbox.y) : t.hitbox.x < n.hitbox.x ? Nn : xn, S0 = (t, n) => ({ tag: t, _1: n }), ac = /* @__PURE__ */ nn(C)(Ht), ss = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, sa = /* @__PURE__ */ (() => {
  const t = { eq: (e) => (r) => e._1 === r._1 && (e._2.tag === "Nothing" ? r._2.tag === "Nothing" : e._2.tag === "Just" && r._2.tag === "Just" && e._2._1 === r._2._1) }, n = {
    compare: (e) => (r) => {
      const o = C.compare(e._1)(r._1);
      if (o === "LT")
        return Nn;
      if (o === "GT")
        return xn;
      if (e._2.tag === "Nothing")
        return r._2.tag === "Nothing" ? Gn : Nn;
      if (r._2.tag === "Nothing")
        return xn;
      if (e._2.tag === "Just" && r._2.tag === "Just")
        return C.compare(e._2._1)(r._2._1);
      f();
    },
    Eq0: () => t
  };
  return x((e) => (r) => U(n)(r)()(e))(A);
})(), We = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, s$ = /* @__PURE__ */ x((t) => (n) => U(Pp)(n)()(t))(A), Ss = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = Hf.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, u$ = (t) => (n) => {
  const e = ac(z((i) => b(i.id, i))(t)), r = yt((i) => ss(i)(e))(n), o = it.compare((() => {
    const i = sa(z((s) => b(s.from.node, s.from.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })())((() => {
    const i = sa(z((s) => b(s.to.node, s.to.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })());
  if (o === "LT")
    return { ...fe, left: !0, right: !1 };
  if (o === "GT")
    return { ...fe, left: !1, right: !0 };
  if (o === "EQ")
    return fe;
  f();
}, c$ = (t) => yt((n) => {
  if (n.direction === "V")
    return v("Just", { start: n.start, end: n.end });
  if (n.direction === "H")
    return J;
  f();
})(t.segments), Zo = (t) => (n) => (e) => (r) => {
  if (r.tag === "Just") {
    const o = We(e)(n);
    if (o.tag === "Just") {
      const i = Ut((s) => s.id === r._1)(o._1);
      if (i.tag === "Just")
        return i._1.side;
      if (i.tag === "Nothing")
        return t;
      f();
    }
    if (o.tag === "Nothing")
      return t;
    f();
  }
  if (r.tag === "Nothing")
    return t;
  f();
}, a$ = (t) => (n) => (e) => {
  const r = b0({
    origin: v("Just", S0("SegmentOrigin", e)),
    kind: v("Just", "vs"),
    hitbox: e.hitbox
  })(n.cGraph), o = Rp(r.id)(e.ignoreSpacing)(r.graph);
  return {
    ...n,
    cGraph: (() => {
      if (0 < e.potentialGroupParents.length) {
        const i = Kt(e.potentialGroupParents[0])(o.cNodes);
        if (i.tag === "Just") {
          if (i._1.cGroup.tag === "Just")
            return k0(r.id)(i._1.cGroup._1)(o);
          if (i._1.cGroup.tag === "Nothing")
            return o;
          f();
        }
        if (i.tag === "Nothing")
          return o;
        f();
      }
      return uc({ master: v("Just", r.id), nodes: [r.id] })(o).graph;
    })(),
    edgeToCs: x((i) => (s) => wt(C)(rn)(s)([r.id])(i))(n.edgeToCs)(e.representedEdges),
    lockMap: U(it)(r.id)(u$(t)(e.representedEdges))(n.lockMap)
  };
}, f$ = (t) => (n) => (e) => {
  const r = Rt(
    (o) => J,
    (o) => (i) => v("Just", { head: o, tail: i }),
    Lt(i$)(n)
  );
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just") {
    const o = x((i) => (s) => o$(i.survivor)(s) ? { ...i, survivor: r$(i.survivor)(s) } : { survivor: s, merged: [...i.merged, i.survivor] })({ survivor: r._1.head, merged: [] })(r._1.tail);
    return x(a$(t))(e)([...o.merged, o.survivor]);
  }
  f();
}, g$ = (t) => ({
  cGraph: {
    cNodes: A,
    cNodeOrder: [],
    cGroups: A,
    cGroupOrder: [],
    supportedDirections: s$([T0, ic, Sp]),
    predefinedHorizontalConstraints: [],
    predefinedVerticalConstraints: [],
    nextCNodeId: 0,
    nextCGroupId: 0
  },
  nodeToC: A,
  edgeToCs: A,
  lockMap: A
}), l$ = (t) => {
  const n = et(4);
  return { x: t.position._1 * n, y: t.position._2 * n, width: t.size._1 * n, height: t.size._2 * n };
}, _$ = (t) => (n) => (e) => x((r) => (o) => {
  const i = b0({ origin: v("Just", S0("NodeOrigin", o.node)), kind: J, hitbox: l$(o) })(r.cGraph), s = We(o.node)(t), u = (() => {
    if (s.tag === "Nothing")
      return b(0, 0);
    if (s.tag === "Just")
      return s._1;
    f();
  })();
  return {
    ...r,
    cGraph: uc({ master: v("Just", i.id), nodes: [i.id] })(i.graph).graph,
    nodeToC: U(C)(o.node)(i.id)(r.nodeToC),
    lockMap: U(it)(i.id)((() => {
      const c = u._1 - u._2 | 0;
      return c < 0 ? { ...fe, left: !0 } : c > 0 ? { ...fe, right: !0 } : fe;
    })())(r.lockMap)
  };
})(e)(n), d$ = (t) => x((n) => (e) => wt(C)((r) => (o) => b(
  r._1 + o._1 | 0,
  r._2 + o._2 | 0
))(e.to.node)(b(1, 0))(wt(C)((r) => (o) => b(r._1 + o._1 | 0, r._2 + o._2 | 0))(e.from.node)(b(
  0,
  1
))(n)))(A)(t), h$ = (t) => x((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? U(C)(e.origin._1._1)(e.hitbox.x)(n) : n)(A)(yt((n) => Kt(n)(t.cNodes))(t.cNodeOrder)), p$ = (t) => x((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? U(C)(e.origin._1._1)(e.hitbox.x - e.hitboxPreCompaction.x)(n) : n)(A)(yt((n) => Kt(n)(t.cNodes))(t.cNodeOrder)), $$ = (t) => x((n) => (e) => {
  if (e.origin.tag === "Just" && e.origin._1.tag === "SegmentOrigin") {
    const r = e.hitbox.x - e.hitboxPreCompaction.x;
    return x((o) => (i) => U(Hf)(i)(r)(o))(n)(e.origin._1._1.affectedBends);
  }
  return n;
})(A)(yt((n) => Kt(n)(t.cNodes))(t.cNodeOrder)), C0 = (t) => {
  const n = ac(z((e) => b(e.id, e))(t.edges));
  return yt((e) => {
    const r = ss(e.edge)(n);
    if (r.tag === "Just")
      return e.reversed ? v(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.to.node,
          tgt: r._1.from.node,
          srcSide: Zo(Se)(t.ports)(r._1.to.node)(r._1.to.port),
          tgtSide: Zo(Ce)(t.ports)(r._1.from.node)(r._1.from.port),
          path: e
        }
      ) : v(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.from.node,
          tgt: r._1.to.node,
          srcSide: Zo(Se)(t.ports)(r._1.from.node)(r._1.from.port),
          tgtSide: Zo(Ce)(t.ports)(r._1.to.node)(r._1.to.port),
          path: e
        }
      );
    if (r.tag === "Nothing")
      return J;
    f();
  })(t.paths);
}, m$ = (t) => (n) => {
  const e = Tt(n)((r) => {
    if (r.src === r.tgt)
      return [];
    if ((r.srcSide === "North" || r.srcSide === "South") && (r.tgtSide === "North" || r.tgtSide === "South"))
      return [];
    const o = We(r.tgt)(t.nodeToC), i = (() => {
      if (o.tag === "Just")
        return Kt(o._1)(t.cGraph.cNodes);
      if (o.tag === "Nothing")
        return J;
      f();
    })(), s = We(r.src)(t.nodeToC), u = (() => {
      if (s.tag === "Just")
        return Kt(s._1)(t.cGraph.cNodes);
      if (s.tag === "Nothing")
        return J;
      f();
    })(), c = (() => {
      if (u.tag === "Just") {
        if (i.tag === "Just") {
          if (u._1.cGroup.tag === "Just") {
            if (i._1.cGroup.tag === "Just")
              return v("Just", { srcGroup: u._1.cGroup._1, tgtGroup: i._1.cGroup._1, delta: 0, weight: 100 });
            if (i._1.cGroup.tag === "Nothing")
              return J;
            f();
          }
          if (u._1.cGroup.tag === "Nothing")
            return J;
          f();
        }
        if (i.tag === "Nothing")
          return J;
        f();
      }
      if (u.tag === "Nothing")
        return J;
      f();
    })(), a = (l) => (h) => (p) => {
      if (u.tag === "Just") {
        if (u._1.cGroup.tag === "Just") {
          if (p.cGroup.tag === "Just")
            return l(p.hitbox.x) && p.cGroup._1 !== u._1.cGroup._1 ? v("Just", h(p.cGroup._1)(u._1.cGroup._1)) : J;
          if (p.cGroup.tag === "Nothing")
            return J;
          f();
        }
        if (u._1.cGroup.tag === "Nothing")
          return J;
        f();
      }
      if (u.tag === "Nothing")
        return J;
      f();
    }, g = yt((l) => Kt(l)(t.cGraph.cNodes))((() => {
      const l = ss(r.edgeId)(t.edgeToCs);
      if (l.tag === "Nothing")
        return [];
      if (l.tag === "Just")
        return l._1;
      f();
    })()), _ = (() => {
      if (u.tag === "Just" && r.srcSide === "West") {
        const l = u._1;
        return yt(a((h) => h < l.hitbox.x)((h) => (p) => ({ srcGroup: h, tgtGroup: p, delta: 1, weight: 100 })))(g);
      }
      return [];
    })(), d = (() => {
      if (u.tag === "Just" && r.tgtSide === "East") {
        const l = u._1;
        return yt(a((h) => h > l.hitbox.x)((h) => (p) => ({ srcGroup: p, tgtGroup: h, delta: 1, weight: 100 })))(g);
      }
      return [];
    })();
    if (c.tag === "Nothing")
      return [];
    if (c.tag === "Just")
      return [c._1, ..._, ...d];
    f();
  });
  return {
    sameEdgeVerticalSegments: (r) => (o) => r.origin.tag === "Just" && r.origin._1.tag === "SegmentOrigin" && o.origin.tag === "Just" && o.origin._1.tag === "SegmentOrigin" && (() => {
      const i = o.origin._1._1;
      return qn((s) => Hn(le)(s)(i.representedEdges), r.origin._1._1.representedEdges);
    })(),
    vsLNodePair: (r) => (o) => r.origin.tag === "Just" && o.origin.tag === "Just" && (r.origin._1.tag === "SegmentOrigin" ? o.origin._1.tag === "NodeOrigin" : r.origin._1.tag === "NodeOrigin" && o.origin._1.tag === "SegmentOrigin"),
    edgeLengthEdges: (r) => e
  };
}, y$ = (t) => (n) => {
  const e = et(4), r = h$(t), o = p$(t), i = ac(z((u) => b(u.id, b(u.from.node, u.to.node)))(n.edges)), s = $$(t);
  return {
    nodes: z((u) => {
      const c = We(u.node)(r);
      if (c.tag === "Just")
        return { ...u, position: b(c._1 / e, u.position._2) };
      if (c.tag === "Nothing")
        return u;
      f();
    })(n.nodes),
    edges: z((u) => {
      const c = ss(u.edge)(i), a = (() => {
        if (c.tag === "Nothing")
          return u.segments;
        if (c.tag === "Just") {
          const g = We(c._1._1)(o), _ = (() => {
            if (g.tag === "Nothing")
              return 0;
            if (g.tag === "Just")
              return g._1;
            f();
          })(), d = We(c._1._2)(o), l = (() => {
            if (d.tag === "Nothing")
              return 0;
            if (d.tag === "Just")
              return d._1;
            f();
          })();
          return Ft((() => {
            const h = u.reversed ? l : _, p = u.reversed ? _ : l, $ = u.segments.length;
            return (m) => (y) => {
              if (y.direction === "V") {
                const N = (() => {
                  if (m === 0)
                    return h;
                  if (m === ($ - 1 | 0))
                    return p;
                  const T = Ss(y.start)(s);
                  if (T.tag === "Nothing")
                    return 0;
                  if (T.tag === "Just")
                    return T._1;
                  f();
                })();
                return { ...y, start: b(y.start._1 + N, y.start._2), end: b(y.end._1 + N, y.end._2) };
              }
              if (y.direction === "H")
                return {
                  ...y,
                  start: b(
                    (() => {
                      if (m === 0)
                        return y.start._1 + h;
                      const N = Ss(y.start)(s);
                      if (N.tag === "Nothing")
                        return y.start._1 + 0;
                      if (N.tag === "Just")
                        return y.start._1 + N._1;
                      f();
                    })(),
                    y.start._2
                  ),
                  end: b(
                    (() => {
                      if (m === ($ - 1 | 0))
                        return y.end._1 + p;
                      const N = Ss(y.end)(s);
                      if (N.tag === "Nothing")
                        return y.end._1 + 0;
                      if (N.tag === "Just")
                        return y.end._1 + N._1;
                      f();
                    })(),
                    y.end._2
                  )
                };
              f();
            };
          })())(u.segments);
        }
        f();
      })();
      return { ...u, segments: a, bends: Tn((g) => (_) => g.end, a, bt(1, a.length, a)) };
    })(n.paths)
  };
}, N$ = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = cc(o.nextId)(i._2.start)(i._2.end)(J)(t.edgeId), u = (() => {
    if (i._1 === 0) {
      if (n.tag === "Nothing")
        return s;
      if (n.tag === "Just")
        return {
          ...s,
          ignoreSpacing: i._2.end._2 < n._1.y ? { ...s.ignoreSpacing, down: !0 } : i._2.end._2 > n._1.y + n._1.height ? { ...s.ignoreSpacing, up: !0 } : { ...s.ignoreSpacing, up: !0, down: !0 }
        };
      f();
    }
    return s;
  })();
  return {
    nextId: o.nextId + 1 | 0,
    segments: [
      ...o.segments,
      (() => {
        if (i._1 === r) {
          if (e.tag === "Nothing")
            return u;
          if (e.tag === "Just")
            return {
              ...u,
              ignoreSpacing: i._2.start._2 < e._1.y ? { ...u.ignoreSpacing, down: !0 } : i._2.start._2 > e._1.y + e._1.height ? { ...u.ignoreSpacing, up: !0 } : { ...u.ignoreSpacing, up: !0, down: !0 }
            };
          f();
        }
        return u;
      })()
    ]
  };
}, ua = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...cc(i.nextId)(r.start)(b(r.start._1, o.down ? e.y : e.y + e.height))(v(
        "Just",
        n
      ))(t.edgeId),
      aPort: v("Just", { node: t.src, side: o.side }),
      ignoreSpacing: o.down ? { ...fe, down: !0 } : { ...fe, up: !0 }
    }
  ]
}), ti = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...cc(i.nextId)(r.end)(b(r.end._1, o.down ? e.y : e.y + e.height))(v(
        "Just",
        n
      ))(t.edgeId),
      aPort: v("Just", { node: t.tgt, side: o.side }),
      ignoreSpacing: o.down ? { ...fe, down: !0 } : { ...fe, up: !0 }
    }
  ]
}), x$ = (t) => (n) => (e) => {
  if (e.src === e.tgt)
    return n;
  const r = We(e.src)(t.nodeToC), o = We(e.tgt)(t.nodeToC), i = (() => {
    if (r.tag === "Just") {
      const g = Kt(r._1)(t.cGraph.cNodes);
      return g.tag === "Just" ? v("Just", g._1.hitbox) : J;
    }
    if (r.tag === "Nothing")
      return J;
    f();
  })(), s = (() => {
    if (o.tag === "Just") {
      const g = Kt(o._1)(t.cGraph.cNodes);
      return g.tag === "Just" ? v("Just", g._1.hitbox) : J;
    }
    if (o.tag === "Nothing")
      return J;
    f();
  })(), u = c$(e.path), c = x(N$(e)(i)(s)(u.length - 1 | 0))(n)(Ft((g) => (_) => b(
    g,
    _
  ))(u));
  if (0 < u.length) {
    const g = (() => {
      if (r.tag === "Just" && i.tag === "Just") {
        if (e.srcSide === "North")
          return ua(e)(r._1)(i._1)(u[0])({ side: dn, down: !0 })(c);
        if (e.srcSide === "South")
          return ua(e)(r._1)(i._1)(u[0])({ side: hn, down: !1 })(c);
      }
      return c;
    })(), _ = u.length - 1 | 0;
    if (_ >= 0 && _ < u.length && o.tag === "Just" && s.tag === "Just") {
      if (e.tgtSide === "North")
        return ti(e)(o._1)(s._1)(u[_])({ side: dn, down: !0 })(g);
      if (e.tgtSide === "South")
        return ti(e)(o._1)(s._1)(u[_])({ side: hn, down: !1 })(g);
    }
    return g;
  }
  const a = u.length - 1 | 0;
  if (a >= 0 && a < u.length && o.tag === "Just" && s.tag === "Just") {
    if (e.tgtSide === "North")
      return ti(e)(o._1)(s._1)(u[a])({ side: dn, down: !0 })(c);
    if (e.tgtSide === "South")
      return ti(e)(o._1)(s._1)(u[a])({ side: hn, down: !1 })(c);
  }
  return c;
}, J$ = (t) => (n) => (e) => f$(t)(x(x$(e))({ nextId: 0, segments: [] })(n).segments)(e), T$ = (t) => J$(t.edges)(C0(t))(_$(d$(t.edges))(t.nodes)(g$())), De = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = it.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, iu = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, su = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = it.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, v$ = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, w$ = (t) => {
  const n = t.Eq0();
  return (e) => (r) => {
    const o = (u) => {
      let c = u, a = !0, g;
      for (; a; ) {
        const _ = c, d = Rt((l) => J, (l) => (h) => v("Just", { head: l, tail: h }), _.queue);
        if (d.tag === "Nothing") {
          a = !1, g = _;
          continue;
        }
        if (d.tag === "Just") {
          const l = d._1.head;
          if ((($) => {
            let m = $, y = !0, N;
            for (; y; ) {
              const T = m;
              if (T.tag === "Leaf") {
                y = !1, N = !1;
                continue;
              }
              if (T.tag === "Node") {
                const w = t.compare(l)(T._3);
                if (w === "LT") {
                  m = T._5;
                  continue;
                }
                if (w === "GT") {
                  m = T._6;
                  continue;
                }
                if (w === "EQ") {
                  y = !1, N = !0;
                  continue;
                }
              }
              f();
            }
            return N;
          })(_.removedNodes)) {
            c = { ..._, queue: d._1.tail };
            continue;
          }
          const h = Ut((p) => !De(p.eid)(_.removedEdges) && (n.eq(p.src)(l) || n.eq(p.tgt)(l)))(r);
          if (h.tag === "Nothing") {
            c = { ..._, queue: d._1.tail };
            continue;
          }
          if (h.tag === "Just") {
            const p = n.eq(h._1.src)(l) ? h._1.tgt : h._1.src, $ = {
              ..._,
              degree: U(t)(p)((() => {
                const y = ((N) => {
                  let T = N, w = !0, k;
                  for (; w; ) {
                    const L = T;
                    if (L.tag === "Leaf") {
                      w = !1, k = J;
                      continue;
                    }
                    if (L.tag === "Node") {
                      const P = t.compare(p)(L._3);
                      if (P === "LT") {
                        T = L._5;
                        continue;
                      }
                      if (P === "GT") {
                        T = L._6;
                        continue;
                      }
                      if (P === "EQ") {
                        w = !1, k = v("Just", L._4);
                        continue;
                      }
                    }
                    f();
                  }
                  return k;
                })(_.degree);
                if (y.tag === "Nothing")
                  return -1;
                if (y.tag === "Just")
                  return y._1 - 1 | 0;
                f();
              })())(_.degree),
              removedNodes: U(t)(l)()(_.removedNodes),
              removedEdges: U(it)(h._1.eid)()(_.removedEdges),
              record: [..._.record, { node: l, neighbour: p, viaSrc: n.eq(h._1.src)(l) }],
              queue: d._1.tail
            };
            if ((() => {
              const y = ((T) => {
                let w = T, k = !0, L;
                for (; k; ) {
                  const P = w;
                  if (P.tag === "Leaf") {
                    k = !1, L = J;
                    continue;
                  }
                  if (P.tag === "Node") {
                    const D = t.compare(p)(P._3);
                    if (D === "LT") {
                      w = P._5;
                      continue;
                    }
                    if (D === "GT") {
                      w = P._6;
                      continue;
                    }
                    if (D === "EQ") {
                      k = !1, L = v("Just", P._4);
                      continue;
                    }
                  }
                  f();
                }
                return L;
              })($.degree), N = (T) => {
                let w = T, k = !0, L;
                for (; k; ) {
                  const P = w;
                  if (P.tag === "Leaf") {
                    k = !1, L = !1;
                    continue;
                  }
                  if (P.tag === "Node") {
                    const D = t.compare(p)(P._3);
                    if (D === "LT") {
                      w = P._5;
                      continue;
                    }
                    if (D === "GT") {
                      w = P._6;
                      continue;
                    }
                    if (D === "EQ") {
                      k = !1, L = !0;
                      continue;
                    }
                  }
                  f();
                }
                return L;
              };
              return (() => {
                if (y.tag === "Nothing")
                  return !1;
                if (y.tag === "Just")
                  return y._1 === 1;
                f();
              })() && !N($.removedNodes);
            })()) {
              c = { ...$, queue: [...$.queue, p] };
              continue;
            }
            c = $;
            continue;
          }
        }
        f();
      }
      return g;
    }, i = x((u) => (c) => wt(t)(on)(c.src)(1)(wt(t)(on)(c.tgt)(1)(u)))(A)(r), s = o({
      degree: i,
      removedNodes: A,
      removedEdges: A,
      record: [],
      queue: ft(
        (u) => {
          const a = ((g) => {
            let _ = g, d = !0, l;
            for (; d; ) {
              const h = _;
              if (h.tag === "Leaf") {
                d = !1, l = J;
                continue;
              }
              if (h.tag === "Node") {
                const p = t.compare(u)(h._3);
                if (p === "LT") {
                  _ = h._5;
                  continue;
                }
                if (p === "GT") {
                  _ = h._6;
                  continue;
                }
                if (p === "EQ") {
                  d = !1, l = v("Just", h._4);
                  continue;
                }
              }
              f();
            }
            return l;
          })(i);
          if (a.tag === "Nothing")
            return !1;
          if (a.tag === "Just")
            return a._1 === 1;
          f();
        },
        e
      )
    });
    return {
      coreNodes: ft(
        (u) => !((a) => {
          let g = a, _ = !0, d;
          for (; _; ) {
            const l = g;
            if (l.tag === "Leaf") {
              _ = !1, d = !1;
              continue;
            }
            if (l.tag === "Node") {
              const h = t.compare(u)(l._3);
              if (h === "LT") {
                g = l._5;
                continue;
              }
              if (h === "GT") {
                g = l._6;
                continue;
              }
              if (h === "EQ") {
                _ = !1, d = !0;
                continue;
              }
            }
            f();
          }
          return d;
        })(s.removedNodes),
        e
      ),
      coreEdges: ft((u) => !De(u.eid)(s.removedEdges), r),
      removed: s.record
    };
  };
}, k$ = (t) => (n) => (e) => x((r) => (o) => {
  const i = o.neighbour, s = (() => {
    const u = ((a) => {
      let g = a, _ = !0, d;
      for (; _; ) {
        const l = g;
        if (l.tag === "Leaf") {
          _ = !1, d = J;
          continue;
        }
        if (l.tag === "Node") {
          const h = t.compare(i)(l._3);
          if (h === "LT") {
            g = l._5;
            continue;
          }
          if (h === "GT") {
            g = l._6;
            continue;
          }
          if (h === "EQ") {
            _ = !1, d = v("Just", l._4);
            continue;
          }
        }
        f();
      }
      return d;
    })(r);
    if (u.tag === "Nothing")
      return 0;
    if (u.tag === "Just")
      return u._1;
    f();
  })();
  return U(t)(o.node)(o.viaSrc ? s - 1 | 0 : s + 1 | 0)(r);
})(e)(Jn(n)), uu = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = { ...o, treeNode: U(t)(r)()(o.treeNode) };
    return x((s) => (u) => {
      if (De(u.eid)(s.st.edgeVisited))
        return s;
      const c = { ...s.st, edgeVisited: U(it)(u.eid)()(s.st.edgeVisited) }, a = n.eq(u.src)((() => {
        const g = u.src, _ = (l) => {
          let h = l, p = !0, $;
          for (; p; ) {
            const m = h;
            if (m.tag === "Leaf") {
              p = !1, $ = !1;
              continue;
            }
            if (m.tag === "Node") {
              const y = t.compare(g)(m._3);
              if (y === "LT") {
                h = m._5;
                continue;
              }
              if (y === "GT") {
                h = m._6;
                continue;
              }
              if (y === "EQ") {
                p = !1, $ = !0;
                continue;
              }
            }
            f();
          }
          return $;
        }, d = u.tgt;
        return _(c.treeNode) && !((h) => {
          let p = h, $ = !0, m;
          for (; $; ) {
            const y = p;
            if (y.tag === "Leaf") {
              $ = !1, m = !1;
              continue;
            }
            if (y.tag === "Node") {
              const N = t.compare(d)(y._3);
              if (N === "LT") {
                p = y._5;
                continue;
              }
              if (N === "GT") {
                p = y._6;
                continue;
              }
              if (N === "EQ") {
                $ = !1, m = !0;
                continue;
              }
            }
            f();
          }
          return m;
        })(c.treeNode);
      })() ? u.src : (() => {
        const g = u.tgt, _ = (l) => {
          let h = l, p = !0, $;
          for (; p; ) {
            const m = h;
            if (m.tag === "Leaf") {
              p = !1, $ = !1;
              continue;
            }
            if (m.tag === "Node") {
              const y = t.compare(g)(m._3);
              if (y === "LT") {
                h = m._5;
                continue;
              }
              if (y === "GT") {
                h = m._6;
                continue;
              }
              if (y === "EQ") {
                p = !1, $ = !0;
                continue;
              }
            }
            f();
          }
          return $;
        }, d = u.src;
        return _(c.treeNode) && !((h) => {
          let p = h, $ = !0, m;
          for (; $; ) {
            const y = p;
            if (y.tag === "Leaf") {
              $ = !1, m = !1;
              continue;
            }
            if (y.tag === "Node") {
              const N = t.compare(d)(y._3);
              if (N === "LT") {
                p = y._5;
                continue;
              }
              if (N === "GT") {
                p = y._6;
                continue;
              }
              if (N === "EQ") {
                $ = !1, m = !0;
                continue;
              }
            }
            f();
          }
          return m;
        })(c.treeNode);
      })() ? u.tgt : u.src) ? u.tgt : u.src;
      if (De(u.eid)(c.treeEdge)) {
        if (((d) => {
          let l = d, h = !0, p;
          for (; h; ) {
            const $ = l;
            if ($.tag === "Leaf") {
              h = !1, p = !1;
              continue;
            }
            if ($.tag === "Node") {
              const m = t.compare(a)($._3);
              if (m === "LT") {
                l = $._5;
                continue;
              }
              if (m === "GT") {
                l = $._6;
                continue;
              }
              if (m === "EQ") {
                h = !1, p = !0;
                continue;
              }
            }
            f();
          }
          return p;
        })(c.treeNode))
          return { ...s, st: c };
        const g = uu(t)(e)(a)(c);
        return { count: s.count + g.count | 0, st: g.st };
      }
      if ((() => {
        const g = (d) => {
          let l = d, h = !0, p;
          for (; h; ) {
            const $ = l;
            if ($.tag === "Leaf") {
              h = !1, p = !1;
              continue;
            }
            if ($.tag === "Node") {
              const m = t.compare(a)($._3);
              if (m === "LT") {
                l = $._5;
                continue;
              }
              if (m === "GT") {
                l = $._6;
                continue;
              }
              if (m === "EQ") {
                h = !1, p = !0;
                continue;
              }
            }
            f();
          }
          return p;
        }, _ = u.tgt;
        return !g(c.treeNode) && (() => {
          const l = ((m) => {
            let y = m, N = !0, T;
            for (; N; ) {
              const w = y;
              if (w.tag === "Leaf") {
                N = !1, T = J;
                continue;
              }
              if (w.tag === "Node") {
                const k = t.compare(_)(w._3);
                if (k === "LT") {
                  y = w._5;
                  continue;
                }
                if (k === "GT") {
                  y = w._6;
                  continue;
                }
                if (k === "EQ") {
                  N = !1, T = v("Just", w._4);
                  continue;
                }
              }
              f();
            }
            return T;
          })(c.layer), h = u.src, $ = ((m) => {
            let y = m, N = !0, T;
            for (; N; ) {
              const w = y;
              if (w.tag === "Leaf") {
                N = !1, T = J;
                continue;
              }
              if (w.tag === "Node") {
                const k = t.compare(h)(w._3);
                if (k === "LT") {
                  y = w._5;
                  continue;
                }
                if (k === "GT") {
                  y = w._6;
                  continue;
                }
                if (k === "EQ") {
                  N = !1, T = v("Just", w._4);
                  continue;
                }
              }
              f();
            }
            return T;
          })(c.layer);
          if (l.tag === "Nothing") {
            if ($.tag === "Nothing")
              return u.delta === 0;
            if ($.tag === "Just")
              return u.delta === -$._1;
            f();
          }
          if (l.tag === "Just") {
            if ($.tag === "Nothing")
              return u.delta === (l._1 - 0 | 0);
            if ($.tag === "Just")
              return u.delta === (l._1 - $._1 | 0);
          }
          f();
        })();
      })()) {
        const g = uu(t)(e)(a)({ ...c, treeEdge: U(it)(u.eid)()(c.treeEdge) });
        return { count: s.count + g.count | 0, st: g.st };
      }
      return { ...s, st: c };
    })({ count: 1, st: i })(ft((s) => (n.eq(s.src)(r) || n.eq(s.tgt)(r)) && !De(s.eid)(i.edgeVisited), e));
  };
}, wi = (t) => (n) => (e) => (r) => {
  const o = r.src, s = ((p) => {
    let $ = p, m = !0, y;
    for (; m; ) {
      const N = $;
      if (N.tag === "Leaf") {
        m = !1, y = J;
        continue;
      }
      if (N.tag === "Node") {
        const T = t.compare(o)(N._3);
        if (T === "LT") {
          $ = N._5;
          continue;
        }
        if (T === "GT") {
          $ = N._6;
          continue;
        }
        if (T === "EQ") {
          m = !1, y = v("Just", N._4);
          continue;
        }
      }
      f();
    }
    return y;
  })(n.poID), u = (() => {
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1;
    f();
  })(), c = r.tgt, g = ((p) => {
    let $ = p, m = !0, y;
    for (; m; ) {
      const N = $;
      if (N.tag === "Leaf") {
        m = !1, y = J;
        continue;
      }
      if (N.tag === "Node") {
        const T = t.compare(c)(N._3);
        if (T === "LT") {
          $ = N._5;
          continue;
        }
        if (T === "GT") {
          $ = N._6;
          continue;
        }
        if (T === "EQ") {
          m = !1, y = v("Just", N._4);
          continue;
        }
      }
      f();
    }
    return y;
  })(n.poID), _ = (() => {
    if (g.tag === "Nothing")
      return 0;
    if (g.tag === "Just")
      return g._1;
    f();
  })(), l = ((p) => {
    let $ = p, m = !0, y;
    for (; m; ) {
      const N = $;
      if (N.tag === "Leaf") {
        m = !1, y = J;
        continue;
      }
      if (N.tag === "Node") {
        const T = t.compare(e)(N._3);
        if (T === "LT") {
          $ = N._5;
          continue;
        }
        if (T === "GT") {
          $ = N._6;
          continue;
        }
        if (T === "EQ") {
          m = !1, y = v("Just", N._4);
          continue;
        }
      }
      f();
    }
    return y;
  })(n.poID), h = (() => {
    if (l.tag === "Nothing")
      return 0;
    if (l.tag === "Just")
      return l._1;
    f();
  })();
  return (() => {
    const p = r.src, m = ((y) => {
      let N = y, T = !0, w;
      for (; T; ) {
        const k = N;
        if (k.tag === "Leaf") {
          T = !1, w = J;
          continue;
        }
        if (k.tag === "Node") {
          const L = t.compare(p)(k._3);
          if (L === "LT") {
            N = k._5;
            continue;
          }
          if (L === "GT") {
            N = k._6;
            continue;
          }
          if (L === "EQ") {
            T = !1, w = v("Just", k._4);
            continue;
          }
        }
        f();
      }
      return w;
    })(n.lowestPoID);
    return (() => {
      if (m.tag === "Nothing")
        return 0 <= h;
      if (m.tag === "Just")
        return m._1 <= h;
      f();
    })() && (() => {
      const y = r.tgt;
      return h <= u && (() => {
        const T = ((w) => {
          let k = w, L = !0, P;
          for (; L; ) {
            const D = k;
            if (D.tag === "Leaf") {
              L = !1, P = J;
              continue;
            }
            if (D.tag === "Node") {
              const V = t.compare(y)(D._3);
              if (V === "LT") {
                k = D._5;
                continue;
              }
              if (V === "GT") {
                k = D._6;
                continue;
              }
              if (V === "EQ") {
                L = !1, P = v("Just", D._4);
                continue;
              }
            }
            f();
          }
          return P;
        })(n.lowestPoID);
        return (() => {
          if (T.tag === "Nothing")
            return 0 <= h;
          if (T.tag === "Just")
            return T._1 <= h;
          f();
        })() && h <= _;
      })();
    })();
  })() ? u >= _ : u < _;
}, b$ = (t) => {
  const n = nn(t)(Ht);
  return (e) => ({
    layer: n(z((r) => b(r, 0))(e)),
    treeNode: A,
    treeEdge: A,
    poID: A,
    lowestPoID: A,
    cutvalue: A,
    postOrder: 1,
    edgeVisited: A
  });
}, L$ = (t) => (n) => (e) => x((r) => (o) => {
  if ((() => {
    const d = o.src, l = ($) => {
      let m = $, y = !0, N;
      for (; y; ) {
        const T = m;
        if (T.tag === "Leaf") {
          y = !1, N = !1;
          continue;
        }
        if (T.tag === "Node") {
          const w = t.compare(d)(T._3);
          if (w === "LT") {
            m = T._5;
            continue;
          }
          if (w === "GT") {
            m = T._6;
            continue;
          }
          if (w === "EQ") {
            y = !1, N = !0;
            continue;
          }
        }
        f();
      }
      return N;
    }, h = o.tgt, p = ($) => {
      let m = $, y = !0, N;
      for (; y; ) {
        const T = m;
        if (T.tag === "Leaf") {
          y = !1, N = !1;
          continue;
        }
        if (T.tag === "Node") {
          const w = t.compare(h)(T._3);
          if (w === "LT") {
            m = T._5;
            continue;
          }
          if (w === "GT") {
            m = T._6;
            continue;
          }
          if (w === "EQ") {
            y = !1, N = !0;
            continue;
          }
        }
        f();
      }
      return N;
    };
    return l(e.treeNode) === p(e.treeNode);
  })())
    return r;
  const i = o.tgt, u = ((d) => {
    let l = d, h = !0, p;
    for (; h; ) {
      const $ = l;
      if ($.tag === "Leaf") {
        h = !1, p = J;
        continue;
      }
      if ($.tag === "Node") {
        const m = t.compare(i)($._3);
        if (m === "LT") {
          l = $._5;
          continue;
        }
        if (m === "GT") {
          l = $._6;
          continue;
        }
        if (m === "EQ") {
          h = !1, p = v("Just", $._4);
          continue;
        }
      }
      f();
    }
    return p;
  })(e.layer), c = o.src, g = ((d) => {
    let l = d, h = !0, p;
    for (; h; ) {
      const $ = l;
      if ($.tag === "Leaf") {
        h = !1, p = J;
        continue;
      }
      if ($.tag === "Node") {
        const m = t.compare(c)($._3);
        if (m === "LT") {
          l = $._5;
          continue;
        }
        if (m === "GT") {
          l = $._6;
          continue;
        }
        if (m === "EQ") {
          h = !1, p = v("Just", $._4);
          continue;
        }
      }
      f();
    }
    return p;
  })(e.layer), _ = (() => {
    if (u.tag === "Nothing") {
      if (g.tag === "Nothing")
        return -o.delta;
      if (g.tag === "Just")
        return -g._1 - o.delta | 0;
      f();
    }
    if (u.tag === "Just") {
      if (g.tag === "Nothing")
        return (u._1 - 0 | 0) - o.delta | 0;
      if (g.tag === "Just")
        return (u._1 - g._1 | 0) - o.delta | 0;
    }
    f();
  })();
  return _ < r.slack ? { edge: v("Just", o), slack: _ } : r;
})({ edge: J, slack: 1e9 })(n).edge, E$ = (t) => {
  const n = nn(t)(Ht);
  return (e) => (r) => {
    const o = x((i) => (s) => iu(i)((() => {
      const c = ((a) => {
        let g = a, _ = !0, d;
        for (; _; ) {
          const l = g;
          if (l.tag === "Leaf") {
            _ = !1, d = J;
            continue;
          }
          if (l.tag === "Node") {
            const h = t.compare(s)(l._3);
            if (h === "LT") {
              g = l._5;
              continue;
            }
            if (h === "GT") {
              g = l._6;
              continue;
            }
            if (h === "EQ") {
              _ = !1, d = v("Just", l._4);
              continue;
            }
          }
          f();
        }
        return d;
      })(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    })()))(1e9)(e);
    return n(z((i) => b(
      i,
      (() => {
        const u = ((c) => {
          let a = c, g = !0, _;
          for (; g; ) {
            const d = a;
            if (d.tag === "Leaf") {
              g = !1, _ = J;
              continue;
            }
            if (d.tag === "Node") {
              const l = t.compare(i)(d._3);
              if (l === "LT") {
                a = d._5;
                continue;
              }
              if (l === "GT") {
                a = d._6;
                continue;
              }
              if (l === "EQ") {
                g = !1, _ = v("Just", d._4);
                continue;
              }
            }
            f();
          }
          return _;
        })(r);
        if (u.tag === "Nothing")
          return -o;
        if (u.tag === "Just")
          return u._1 - o | 0;
        f();
      })()
    ))(e));
  };
}, P0 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = x((u) => (c) => {
      const a = P0(t)(e)(n.eq(c.src)(r) ? c.tgt : c.src)({ ...u.st, edgeVisited: U(it)(c.eid)()(u.st.edgeVisited) });
      return { lowest: iu(u.lowest)(a.lowest), st: a.st };
    })({ lowest: 1e9, st: o })(ft(
      (u) => De(u.eid)(o.treeEdge) && (n.eq(u.src)(r) || n.eq(u.tgt)(r)) && !De(u.eid)(o.edgeVisited),
      e
    )), s = iu(i.lowest)(i.st.postOrder);
    return {
      lowest: s,
      st: {
        ...i.st,
        poID: U(t)(r)(i.st.postOrder)(i.st.poID),
        lowestPoID: U(t)(r)(s)(i.st.lowestPoID),
        postOrder: i.st.postOrder + 1 | 0
      }
    };
  };
}, G0 = (t) => {
  const n = P0(t);
  return (e) => (r) => (o) => 0 < e.length ? n(r)(e[0])({ ...o, edgeVisited: A, postOrder: 1, poID: A, lowestPoID: A }).st : o;
}, S$ = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => ft((i) => De(i.eid)(r.treeEdge) && (n.eq(i.src)(o) || n.eq(i.tgt)(o)), e);
}, C$ = (t) => (n) => Ut((e) => {
  const r = su(e.eid)(n.cutvalue);
  return De(e.eid)(n.treeEdge) && (() => {
    if (r.tag === "Nothing")
      return !1;
    if (r.tag === "Just")
      return r._1 < -1e-10;
    f();
  })();
})(t), I0 = (t) => {
  const n = uu(t);
  return (e) => (r) => (o) => {
    const i = 0 < e.length ? v("Just", e[0]) : J;
    if (i.tag === "Nothing")
      return o;
    if (i.tag === "Just") {
      const s = n(r)(i._1)({ ...o, edgeVisited: A, treeNode: A, treeEdge: A });
      if (s.count >= e.length)
        return s.st;
      const u = L$(t)(r)(s.st);
      if (u.tag === "Nothing")
        return s.st;
      if (u.tag === "Just") {
        const c = u._1.tgt, g = (($) => {
          let m = $, y = !0, N;
          for (; y; ) {
            const T = m;
            if (T.tag === "Leaf") {
              y = !1, N = J;
              continue;
            }
            if (T.tag === "Node") {
              const w = t.compare(c)(T._3);
              if (w === "LT") {
                m = T._5;
                continue;
              }
              if (w === "GT") {
                m = T._6;
                continue;
              }
              if (w === "EQ") {
                y = !1, N = v("Just", T._4);
                continue;
              }
            }
            f();
          }
          return N;
        })(s.st.layer), _ = u._1.src, l = (($) => {
          let m = $, y = !0, N;
          for (; y; ) {
            const T = m;
            if (T.tag === "Leaf") {
              y = !1, N = J;
              continue;
            }
            if (T.tag === "Node") {
              const w = t.compare(_)(T._3);
              if (w === "LT") {
                m = T._5;
                continue;
              }
              if (w === "GT") {
                m = T._6;
                continue;
              }
              if (w === "EQ") {
                y = !1, N = v("Just", T._4);
                continue;
              }
            }
            f();
          }
          return N;
        })(s.st.layer), h = (() => {
          if (g.tag === "Nothing") {
            if (l.tag === "Nothing")
              return -u._1.delta;
            if (l.tag === "Just")
              return -l._1 - u._1.delta | 0;
            f();
          }
          if (g.tag === "Just") {
            if (l.tag === "Nothing")
              return (g._1 - 0 | 0) - u._1.delta | 0;
            if (l.tag === "Just")
              return (g._1 - l._1 | 0) - u._1.delta | 0;
          }
          f();
        })(), p = (() => {
          const $ = u._1.tgt;
          return ((y) => {
            let N = y, T = !0, w;
            for (; T; ) {
              const k = N;
              if (k.tag === "Leaf") {
                T = !1, w = !1;
                continue;
              }
              if (k.tag === "Node") {
                const L = t.compare($)(k._3);
                if (L === "LT") {
                  N = k._5;
                  continue;
                }
                if (L === "GT") {
                  N = k._6;
                  continue;
                }
                if (L === "EQ") {
                  T = !1, w = !0;
                  continue;
                }
              }
              f();
            }
            return w;
          })(s.st.treeNode);
        })() ? -h : h;
        return I0(t)(e)(r)({
          ...s.st,
          layer: x(($) => (m) => ((N) => {
            let T = N, w = !0, k;
            for (; w; ) {
              const L = T;
              if (L.tag === "Leaf") {
                w = !1, k = !1;
                continue;
              }
              if (L.tag === "Node") {
                const P = t.compare(m)(L._3);
                if (P === "LT") {
                  T = L._5;
                  continue;
                }
                if (P === "GT") {
                  T = L._6;
                  continue;
                }
                if (P === "EQ") {
                  w = !1, k = !0;
                  continue;
                }
              }
              f();
            }
            return k;
          })(s.st.treeNode) ? U(t)(m)((() => {
            const N = ((T) => {
              let w = T, k = !0, L;
              for (; k; ) {
                const P = w;
                if (P.tag === "Leaf") {
                  k = !1, L = J;
                  continue;
                }
                if (P.tag === "Node") {
                  const D = t.compare(m)(P._3);
                  if (D === "LT") {
                    w = P._5;
                    continue;
                  }
                  if (D === "GT") {
                    w = P._6;
                    continue;
                  }
                  if (D === "EQ") {
                    k = !1, L = v("Just", P._4);
                    continue;
                  }
                }
                f();
              }
              return L;
            })(s.st.layer);
            if (N.tag === "Nothing")
              return 0 + p | 0;
            if (N.tag === "Just")
              return N._1 + p | 0;
            f();
          })())($) : $)(s.st.layer)(e)
        });
      }
    }
    f();
  };
}, P$ = (t) => (n) => (e) => (r) => x((o) => (i) => {
  if (wi(t)(r)(i.src)(e) && !wi(t)(r)(i.tgt)(e)) {
    const s = i.tgt, c = ((l) => {
      let h = l, p = !0, $;
      for (; p; ) {
        const m = h;
        if (m.tag === "Leaf") {
          p = !1, $ = J;
          continue;
        }
        if (m.tag === "Node") {
          const y = t.compare(s)(m._3);
          if (y === "LT") {
            h = m._5;
            continue;
          }
          if (y === "GT") {
            h = m._6;
            continue;
          }
          if (y === "EQ") {
            p = !1, $ = v("Just", m._4);
            continue;
          }
        }
        f();
      }
      return $;
    })(r.layer), a = i.src, _ = ((l) => {
      let h = l, p = !0, $;
      for (; p; ) {
        const m = h;
        if (m.tag === "Leaf") {
          p = !1, $ = J;
          continue;
        }
        if (m.tag === "Node") {
          const y = t.compare(a)(m._3);
          if (y === "LT") {
            h = m._5;
            continue;
          }
          if (y === "GT") {
            h = m._6;
            continue;
          }
          if (y === "EQ") {
            p = !1, $ = v("Just", m._4);
            continue;
          }
        }
        f();
      }
      return $;
    })(r.layer), d = (() => {
      if (c.tag === "Nothing") {
        if (_.tag === "Nothing")
          return -i.delta;
        if (_.tag === "Just")
          return -_._1 - i.delta | 0;
        f();
      }
      if (c.tag === "Just") {
        if (_.tag === "Nothing")
          return (c._1 - 0 | 0) - i.delta | 0;
        if (_.tag === "Just")
          return (c._1 - _._1 | 0) - i.delta | 0;
      }
      f();
    })();
    if (d < o.slack)
      return { edge: v("Just", i), slack: d };
  }
  return o;
})({ edge: J, slack: 1e9 })(n).edge, G$ = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => (i) => {
    const s = i.tgt, u = i.src;
    return x((c) => (a) => {
      if ((() => {
        const g = su(a.eid)(r.cutvalue);
        if (g.tag === "Just")
          return !0;
        if (g.tag === "Nothing")
          return !1;
        f();
      })()) {
        const g = su(a.eid)(r.cutvalue), _ = (() => {
          if (g.tag === "Nothing")
            return 0;
          if (g.tag === "Just")
            return g._1;
          f();
        })();
        return n.eq(u)(a.src) || n.eq(s)(a.tgt) ? c - (_ - a.weight) : c + (_ - a.weight);
      }
      return n.eq(o)(u) ? n.eq(a.src)(o) ? c + a.weight : c - a.weight : n.eq(a.src)(o) ? c - a.weight : c + a.weight;
    })(i.weight)(ft((c) => c.eid !== i.eid && (n.eq(c.src)(o) || n.eq(c.tgt)(o)), e));
  };
}, I$ = (t) => {
  const n = G$(t);
  return (e) => (r) => (o) => {
    const i = (u, c, a) => {
      const _ = ((d) => {
        let l = d, h = !0, p;
        for (; h; ) {
          const $ = l;
          if ($.tag === "Leaf") {
            h = !1, p = J;
            continue;
          }
          if ($.tag === "Node") {
            const m = t.compare(u)($._3);
            if (m === "LT") {
              l = $._5;
              continue;
            }
            if (m === "GT") {
              l = $._6;
              continue;
            }
            if (m === "EQ") {
              h = !1, p = v("Just", $._4);
              continue;
            }
          }
          f();
        }
        return p;
      })(a);
      if (_.tag === "Just")
        return U(t)(u)(ft((d) => d.eid !== c.eid, _._1))(a);
      if (_.tag === "Nothing")
        return a;
      f();
    };
    return ((u) => (c) => {
      let a = u, g = c, _ = !0, d;
      for (; _; ) {
        const l = a, h = g, $ = ((y) => {
          let N = y, T = !0, w;
          for (; T; ) {
            const k = N;
            if (k.tag === "Leaf") {
              T = !1, w = J;
              continue;
            }
            if (k.tag === "Node") {
              const L = t.compare(h)(k._3);
              if (L === "LT") {
                N = k._5;
                continue;
              }
              if (L === "GT") {
                N = k._6;
                continue;
              }
              if (L === "EQ") {
                T = !1, w = v("Just", k._4);
                continue;
              }
            }
            f();
          }
          return w;
        })(l.unknown), m = (() => {
          if ($.tag === "Nothing")
            return [];
          if ($.tag === "Just")
            return $._1;
          f();
        })();
        if (m.length === 1) {
          const y = t.Eq0().eq(m[0].src)(h) ? m[0].tgt : m[0].src;
          a = {
            unknown: i(h, m[0], i(y, m[0], l.unknown)),
            cutvalue: U(it)(m[0].eid)(n(e)(l)(h)(m[0]))(l.cutvalue)
          }, g = y;
          continue;
        }
        _ = !1, d = l;
      }
      return d;
    })(r)(o);
  };
}, A0 = (t) => {
  const n = t.Eq0(), e = t.Eq0(), r = { eq: (a) => (g) => a.delta === g.delta && a.eid === g.eid && e.eq(a.src)(g.src) && n.eq(a.tgt)(g.tgt) && a.weight === g.weight }, o = {
    compare: (a) => (g) => {
      const _ = it.compare(a.delta)(g.delta);
      if (_ === "LT" || _ === "GT" || _ !== "EQ")
        return _;
      const d = it.compare(a.eid)(g.eid);
      if (d === "LT" || d === "GT" || d !== "EQ")
        return d;
      const l = t.compare(a.src)(g.src);
      if (l === "LT" || l === "GT" || l !== "EQ")
        return l;
      const h = t.compare(a.tgt)(g.tgt);
      if (h === "LT" || h === "GT" || h !== "EQ")
        return h;
      const p = at.compare(a.weight)(g.weight);
      return p === "LT" || p === "GT" || p !== "EQ" ? p : Gn;
    },
    Eq0: () => r
  }, i = x((a) => (g) => U(o)(g)()(a))(A), s = S$(t), u = nn(t)(Ht), c = I$(t);
  return (a) => (g) => (_) => {
    const d = {
      unknown: u(z((l) => b(
        l,
        Et(On.foldr, i(s(g)(_)(l)))
      ))(a)),
      cutvalue: A
    };
    return {
      ..._,
      cutvalue: x(c(g))(d)(ft(
        (l) => {
          const p = (($) => {
            let m = $, y = !0, N;
            for (; y; ) {
              const T = m;
              if (T.tag === "Leaf") {
                y = !1, N = J;
                continue;
              }
              if (T.tag === "Node") {
                const w = t.compare(l)(T._3);
                if (w === "LT") {
                  m = T._5;
                  continue;
                }
                if (w === "GT") {
                  m = T._6;
                  continue;
                }
                if (w === "EQ") {
                  y = !1, N = v("Just", T._4);
                  continue;
                }
              }
              f();
            }
            return N;
          })(d.unknown);
          if (p.tag === "Nothing")
            return !1;
          if (p.tag === "Just")
            return p._1.length === 1;
          f();
        },
        a
      )).cutvalue
    };
  };
}, A$ = (t) => {
  const n = G0(t), e = A0(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const c = { ...u, treeEdge: U(it)(s.eid)()(mo(it)(i.eid)(u.treeEdge)) }, a = s.tgt, _ = ((m) => {
      let y = m, N = !0, T;
      for (; N; ) {
        const w = y;
        if (w.tag === "Leaf") {
          N = !1, T = J;
          continue;
        }
        if (w.tag === "Node") {
          const k = t.compare(a)(w._3);
          if (k === "LT") {
            y = w._5;
            continue;
          }
          if (k === "GT") {
            y = w._6;
            continue;
          }
          if (k === "EQ") {
            N = !1, T = v("Just", w._4);
            continue;
          }
        }
        f();
      }
      return T;
    })(c.layer), d = s.src, h = ((m) => {
      let y = m, N = !0, T;
      for (; N; ) {
        const w = y;
        if (w.tag === "Leaf") {
          N = !1, T = J;
          continue;
        }
        if (w.tag === "Node") {
          const k = t.compare(d)(w._3);
          if (k === "LT") {
            y = w._5;
            continue;
          }
          if (k === "GT") {
            y = w._6;
            continue;
          }
          if (k === "EQ") {
            N = !1, T = v("Just", w._4);
            continue;
          }
        }
        f();
      }
      return T;
    })(c.layer), p = (() => {
      if (_.tag === "Nothing") {
        if (h.tag === "Nothing")
          return -s.delta;
        if (h.tag === "Just")
          return -h._1 - s.delta | 0;
        f();
      }
      if (_.tag === "Just") {
        if (h.tag === "Nothing")
          return (_._1 - 0 | 0) - s.delta | 0;
        if (h.tag === "Just")
          return (_._1 - h._1 | 0) - s.delta | 0;
      }
      f();
    })(), $ = wi(t)(c)(s.tgt)(i) ? p : -p;
    return e(r)(o)(n(r)(o)({
      ...c,
      layer: x((m) => (y) => wi(t)(c)(y)(i) ? m : U(t)(y)((() => {
        const T = ((w) => {
          let k = w, L = !0, P;
          for (; L; ) {
            const D = k;
            if (D.tag === "Leaf") {
              L = !1, P = J;
              continue;
            }
            if (D.tag === "Node") {
              const V = t.compare(y)(D._3);
              if (V === "LT") {
                k = D._5;
                continue;
              }
              if (V === "GT") {
                k = D._6;
                continue;
              }
              if (V === "EQ") {
                L = !1, P = v("Just", D._4);
                continue;
              }
            }
            f();
          }
          return P;
        })(c.layer);
        if (T.tag === "Nothing")
          return 0 + $ | 0;
        if (T.tag === "Just")
          return T._1 + $ | 0;
        f();
      })())(m))(c.layer)(r)
    }));
  };
}, F$ = (t) => {
  const n = A$(t);
  return (e) => (r) => (o) => (i) => ((u) => (c) => {
    let a = u, g = c, _ = !0, d;
    for (; _; ) {
      const l = a, h = g;
      if (l === 0) {
        _ = !1, d = h;
        continue;
      }
      const p = C$(o)(h);
      if (p.tag === "Nothing") {
        _ = !1, d = h;
        continue;
      }
      if (p.tag === "Just") {
        const $ = P$(t)(o)(p._1)(h);
        if ($.tag === "Nothing") {
          _ = !1, d = h;
          continue;
        }
        if ($.tag === "Just") {
          a = l - 1 | 0, g = n(r)(o)(p._1)($._1)(h);
          continue;
        }
      }
      f();
    }
    return d;
  })(e)(i);
}, R$ = (t) => {
  const n = A0(t), e = G0(t), r = I0(t);
  return (o) => (i) => (s) => n(o)(i)(e(o)(i)(r(o)(i)(s)));
}, ca = (t) => (n) => x((e) => (r) => wt(t)(rn)(n(r))([r])(e))(A), B$ = (t) => {
  const n = nn(t)(Ht);
  return (e) => (r) => (o) => {
    const i = (c) => (a) => (g) => (_) => {
      let d = c, l = a, h = g, p = _, $ = !0, m;
      for (; $; ) {
        const y = d, N = l, T = h, w = p, k = Rt((L) => J, (L) => (P) => v("Just", { head: L, tail: P }), T);
        if (k.tag === "Nothing") {
          $ = !1, m = w;
          continue;
        }
        if (k.tag === "Just") {
          const L = k._1.head, D = ((I) => {
            let B = I, nt = !0, ut;
            for (; nt; ) {
              const Y = B;
              if (Y.tag === "Leaf") {
                nt = !1, ut = J;
                continue;
              }
              if (Y.tag === "Node") {
                const F = t.compare(L)(Y._3);
                if (F === "LT") {
                  B = Y._5;
                  continue;
                }
                if (F === "GT") {
                  B = Y._6;
                  continue;
                }
                if (F === "EQ") {
                  nt = !1, ut = v("Just", Y._4);
                  continue;
                }
              }
              f();
            }
            return ut;
          })(w.layer), V = (() => {
            if (D.tag === "Nothing")
              return 0;
            if (D.tag === "Just")
              return D._1;
            f();
          })(), X = x((I) => (B) => {
            const nt = B.tgt, Y = ((E) => {
              let S = E, H = !0, G;
              for (; H; ) {
                const W = S;
                if (W.tag === "Leaf") {
                  H = !1, G = J;
                  continue;
                }
                if (W.tag === "Node") {
                  const Q = t.compare(nt)(W._3);
                  if (Q === "LT") {
                    S = W._5;
                    continue;
                  }
                  if (Q === "GT") {
                    S = W._6;
                    continue;
                  }
                  if (Q === "EQ") {
                    H = !1, G = v("Just", W._4);
                    continue;
                  }
                }
                f();
              }
              return G;
            })(I.incident), F = (() => {
              if (Y.tag === "Nothing")
                return -1;
              if (Y.tag === "Just")
                return Y._1 - 1 | 0;
              f();
            })();
            return {
              st: {
                ...I.st,
                layer: U(t)(B.tgt)(v$((() => {
                  const E = B.tgt, H = ((G) => {
                    let W = G, Q = !0, j;
                    for (; Q; ) {
                      const q = W;
                      if (q.tag === "Leaf") {
                        Q = !1, j = J;
                        continue;
                      }
                      if (q.tag === "Node") {
                        const O = t.compare(E)(q._3);
                        if (O === "LT") {
                          W = q._5;
                          continue;
                        }
                        if (O === "GT") {
                          W = q._6;
                          continue;
                        }
                        if (O === "EQ") {
                          Q = !1, j = v("Just", q._4);
                          continue;
                        }
                      }
                      f();
                    }
                    return j;
                  })(I.st.layer);
                  if (H.tag === "Nothing")
                    return 0;
                  if (H.tag === "Just")
                    return H._1;
                  f();
                })())(V + B.delta | 0))(I.st.layer)
              },
              incident: U(t)(B.tgt)(F)(I.incident),
              queue: F === 0 ? [...I.queue, B.tgt] : I.queue
            };
          })({ st: w, incident: N, queue: k._1.tail })((() => {
            const B = ((nt) => {
              let ut = nt, Y = !0, F;
              for (; Y; ) {
                const E = ut;
                if (E.tag === "Leaf") {
                  Y = !1, F = J;
                  continue;
                }
                if (E.tag === "Node") {
                  const S = t.compare(L)(E._3);
                  if (S === "LT") {
                    ut = E._5;
                    continue;
                  }
                  if (S === "GT") {
                    ut = E._6;
                    continue;
                  }
                  if (S === "EQ") {
                    Y = !1, F = v("Just", E._4);
                    continue;
                  }
                }
                f();
              }
              return F;
            })(y);
            if (B.tag === "Nothing")
              return [];
            if (B.tag === "Just")
              return B._1;
            f();
          })());
          d = y, l = X.incident, h = X.queue, p = X.st;
          continue;
        }
        f();
      }
      return m;
    }, s = ca(t)((c) => c.tgt)(r), u = n(z((c) => b(
      c,
      (() => {
        const g = ((_) => {
          let d = _, l = !0, h;
          for (; l; ) {
            const p = d;
            if (p.tag === "Leaf") {
              l = !1, h = J;
              continue;
            }
            if (p.tag === "Node") {
              const $ = t.compare(c)(p._3);
              if ($ === "LT") {
                d = p._5;
                continue;
              }
              if ($ === "GT") {
                d = p._6;
                continue;
              }
              if ($ === "EQ") {
                l = !1, h = v("Just", p._4);
                continue;
              }
            }
            f();
          }
          return h;
        })(s);
        if (g.tag === "Nothing")
          return 0;
        if (g.tag === "Just")
          return g._1.length;
        f();
      })()
    ))(e));
    return i(ca(t)((c) => c.src)(r))(u)(ft(
      (c) => {
        const g = ((_) => {
          let d = _, l = !0, h;
          for (; l; ) {
            const p = d;
            if (p.tag === "Leaf") {
              l = !1, h = J;
              continue;
            }
            if (p.tag === "Node") {
              const $ = t.compare(c)(p._3);
              if ($ === "LT") {
                d = p._5;
                continue;
              }
              if ($ === "GT") {
                d = p._6;
                continue;
              }
              if ($ === "EQ") {
                l = !1, h = v("Just", p._4);
                continue;
              }
            }
            f();
          }
          return h;
        })(u);
        if (g.tag === "Nothing")
          return !0;
        if (g.tag === "Just")
          return g._1 === 0;
        f();
      },
      e
    ))(o);
  };
}, Q$ = (t) => {
  const n = b$(t), e = B$(t), r = R$(t), o = F$(t);
  return (i) => (s) => {
    const u = e(i)(s)(n(i));
    return s.length === 0 ? u.layer : o(4 * i.length | 0)(i)(s)(r(i)(s)(u)).layer;
  };
}, F0 = (t) => {
  const n = E$(t), e = Q$(t), r = w$(t);
  return (o) => (i) => {
    if (o.length === 0)
      return A;
    if (o.length < 40)
      return n(o)(e(o)(i));
    const s = r(o)(i);
    return n(o)(k$(t)(s.removed)(e(s.coreNodes)(s.coreEdges)));
  };
}, R0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = it.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, cu = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, W$ = /* @__PURE__ */ F0(it), ko = (t) => (n) => ({ ...n, edges: [...n.edges, { src: t.src, tgt: t.tgt, delta: t.delta, weight: t.weight, eid: n.nextEid }], nextEid: n.nextEid + 1 | 0 }), D$ = (t) => (n) => (e) => {
  if (e.cGroup.tag === "Nothing")
    return n;
  if (e.cGroup.tag === "Just") {
    const r = et((() => {
      const o = R0(e.cGroup._1)(t);
      if (o.tag === "Nothing")
        return 0;
      if (o.tag === "Just")
        return o._1;
      f();
    })());
    return Zn(e.id)((o) => ({ ...o, hitbox: { ...o.hitbox, x: r + o.cGroupOffset.x } }))(n);
  }
  f();
}, H$ = (t) => (n) => ({
  ...n,
  cGraph: x(D$(t))(n.cGraph)((() => {
    const e = n.cGraph;
    return yt((r) => Kt(r)(e.cNodes))(e.cNodeOrder);
  })())
}), O$ = (t) => (n) => (e) => (r) => (o) => {
  const i = $n(Yi(n.cGroupOffset.x - t.cGroupOffset.x));
  return ko({ src: o.nextNodeId, tgt: r, delta: cu(0)(-i), weight: 1 })(ko({ src: o.nextNodeId, tgt: e, delta: cu(0)(i), weight: 1 })({
    ...o,
    nodes: [...o.nodes, o.nextNodeId],
    nextNodeId: o.nextNodeId + 1 | 0
  }));
}, z$ = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = cu(0)($n(Yi(e.cGroupOffset.x + e.hitbox.width + (n.direction === "LEFT" || n.direction === "RIGHT" ? n.spacingsHandler.horizontalSpacing(e)(r) : n.spacingsHandler.verticalSpacing(e)(r)) - r.cGroupOffset.x)));
  return t.sameEdgeVerticalSegments(e)(r) ? O$(e)(r)(o)(i)(s) : ko({ src: o, tgt: i, delta: u, weight: t.vsLNodePair(e)(r) ? 2 : 1 })(s);
}, q$ = (t) => (n) => (e) => (r) => (o) => {
  const i = Kt(o)(n.cGraph.cNodes);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just")
    return (e.cGroup.tag === "Nothing" ? i._1.cGroup.tag === "Nothing" : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" && e.cGroup._1 === i._1.cGroup._1) ? r : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" ? z$(t)(n)(e)(i._1)(e.cGroup._1)(i._1.cGroup._1)(r) : r;
  f();
}, Y$ = (t) => (n) => (e) => (r) => x(q$(t)(n)(r))(e)(r.constraints), X$ = (t) => (n) => ko({ src: n.srcGroup, tgt: n.tgtGroup, delta: n.delta, weight: n.weight })(t), V$ = (t) => {
  const n = x((o) => (i) => wt(it)(on)(i.tgt)(1)(o))(A)(t.edges), e = ft(
    (o) => {
      const i = R0(o)(n);
      if (i.tag === "Nothing")
        return !0;
      if (i.tag === "Just")
        return i._1 === 0;
      f();
    },
    t.nodes
  );
  if (e.length <= 1)
    return t;
  const r = t.nextNodeId;
  return x((o) => (i) => ko({ src: r, tgt: i, delta: 1, weight: 0 })(o))({ ...t, nodes: [...t.nodes, r], nextNodeId: r + 1 | 0 })(e);
}, U$ = (t) => (n) => {
  const e = V$(x(X$)(x(Y$(t)(n))({
    nodes: n.cGraph.cGroupOrder,
    edges: [],
    nextNodeId: n.cGraph.nextCGroupId,
    nextEid: 0
  })((() => {
    const r = n.cGraph;
    return yt((o) => Kt(o)(r.cNodes))(r.cNodeOrder);
  })()))(t.edgeLengthEdges(n.cGraph)));
  return { nodes: e.nodes, edges: e.edges };
}, K$ = (t) => (n) => {
  const e = U$(t)(n);
  return H$(W$(e.nodes)(e.edges))(n);
}, B0 = (t) => t, Zt = /* @__PURE__ */ B0("H"), tn = /* @__PURE__ */ B0("V"), M$ = (t) => b(t._2, t._1), Q0 = (t) => ({ ...t, position: b(t.position._2, t.position._1), size: b(t.size._2, t.size._1) }), j$ = (t) => ({
  start: b(t.start._2, t.start._1),
  end: b(t.end._2, t.end._1),
  direction: (() => {
    if (t.direction === "H")
      return tn;
    if (t.direction === "V")
      return Zt;
    f();
  })()
}), W0 = (t) => ({ ...t, segments: z(j$)(t.segments), bends: z(M$)(t.bends) }), Z$ = (t) => ({ nodes: z(Q0)(t.nodes), edges: t.edges, paths: z(W0)(t.paths), ports: t.ports }), tm = { nodeNode: 8, edgeNode: 4, edgeEdge: 10 }, nm = (t) => (n) => ({
  horizontalSpacing: (e) => (r) => {
    if (n.sameEdgeVerticalSegments(e)(r) || e.ignoreSpacing.right || r.ignoreSpacing.left)
      return 0;
    const o = r.kind.tag === "Nothing" ? !1 : r.kind.tag === "Just" && r.kind._1 === "vs";
    return e.kind.tag !== "Nothing" && e.kind.tag === "Just" && e.kind._1 === "vs" ? o ? t.edgeEdge : t.edgeNode : o ? t.edgeNode : t.nodeNode;
  },
  verticalSpacing: (e) => (r) => {
    if (n.sameEdgeVerticalSegments(e)(r))
      return 1;
    if (e.hitbox.y <= r.hitbox.y ? e.ignoreSpacing.down || r.ignoreSpacing.up : e.ignoreSpacing.up || r.ignoreSpacing.down)
      return 0;
    const o = r.kind.tag === "Nothing" ? !1 : r.kind.tag === "Just" && r.kind._1 === "vs";
    return e.kind.tag !== "Nothing" && e.kind.tag === "Just" && e.kind._1 === "vs" ? o ? t.edgeEdge : t.edgeNode : o ? t.edgeNode : t.nodeNode;
  }
}), em = (t) => (n) => K$(n), rm = (t) => (n) => (e) => {
  const r = Z$(e), o = T$(r), i = m$(o)(C0(r)), s = y$(w0(ic)(Hp({
    ...zp(o.cGraph),
    compactionAlgorithm: v("Just", em()(i)),
    constraintAlgorithm: v("Just", e$(n.edgeEdge)),
    spacingsHandler: nm(n)(i)
  })).cGraph)({ nodes: r.nodes, edges: r.edges, paths: r.paths });
  return { nodes: z(Q0)(s.nodes), edges: z(W0)(s.edges) };
}, D0 = (t) => t, Tr = /* @__PURE__ */ nn(it)(Ht), It = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = it.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, aa = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, dt = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ht = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Lr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, om = (t) => (n) => {
  const e = it.compare(t._1)(n._1);
  return e === "LT" ? Nn : e === "GT" ? xn : it.compare(t._2)(n._2);
}, wr = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, im = /* @__PURE__ */ (() => {
  const t = ne.unfoldr(we);
  return (n) => t(Mn("IterNode", n, ve));
})(), sm = (t) => t, fa = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, um = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ni = /* @__PURE__ */ D0("Regular"), ei = /* @__PURE__ */ D0("Critical"), H0 = (t) => (n) => {
  const e = x((s) => (u) => U(C)(u.node)(u)(s))(A)(n), r = 1.25 * et(4), o = (s, u, c) => ((g) => (_) => (d) => {
    let l = g, h = _, p = d, $ = !0, m;
    for (; $; ) {
      const y = l, N = h, T = p;
      if (T.critical) {
        $ = !1, m = T;
        continue;
      }
      const w = Rt((L) => J, (L) => (P) => v("Just", { head: L, tail: P }), y), k = Rt((L) => J, (L) => (P) => v("Just", { head: L, tail: P }), N);
      if (w.tag === "Just" && k.tag === "Just") {
        const L = w._1.head > k._1.head - s && w._1.head < k._1.head + s ? { ...T, critical: !0 } : w._1.head > k._1.head - r && w._1.head < k._1.head + r ? { ...T, conflicts: T.conflicts + 1 | 0 } : T;
        if (L.critical) {
          $ = !1, m = L;
          continue;
        }
        if (w._1.head <= k._1.head) {
          l = w._1.tail, h = N, p = L;
          continue;
        }
        l = y, h = k._1.tail, p = L;
        continue;
      }
      $ = !1, m = T;
    }
    return m;
  })(u)(c)({ conflicts: 0, critical: !1 }), i = (s, u, c) => {
    if (ht(x(ht)(-1e18)(u.incoming))(x(ht)(-1e18)(u.outgoing)) - dt(x(dt)(1e18)(u.incoming))(x(dt)(1e18)(u.outgoing)) < 1e-3 || ht(x(ht)(-1e18)(c.incoming))(x(ht)(-1e18)(c.outgoing)) - dt(x(dt)(1e18)(c.incoming))(x(dt)(1e18)(c.outgoing)) < 1e-3)
      return [];
    const a = o(s, u.outgoing, c.incoming), g = o(s, c.outgoing, u.incoming);
    if (a.critical || g.critical)
      return [...a.critical ? [{ src: c.id, tgt: u.id, weight: 1, kind: ei }] : [], ...g.critical ? [{ src: u.id, tgt: c.id, weight: 1, kind: ei }] : []];
    const _ = dt(x(dt)(1e18)(u.incoming))(x(dt)(1e18)(u.outgoing)), d = ht(x(ht)(-1e18)(u.incoming))(x(ht)(-1e18)(u.outgoing)), l = dt(x(dt)(1e18)(c.incoming))(x(dt)(1e18)(c.outgoing)), h = ht(x(ht)(-1e18)(c.incoming))(x(ht)(-1e18)(c.outgoing)), p = (1 * a.conflicts | 0) + (16 * (x((m) => (y) => y > h ? m : y >= l ? m + 1 | 0 : m)(0)(u.outgoing) + x((m) => (y) => y > d ? m : y >= _ ? m + 1 | 0 : m)(0)(c.incoming) | 0) | 0) | 0, $ = (1 * g.conflicts | 0) + (16 * (x((m) => (y) => y > d ? m : y >= _ ? m + 1 | 0 : m)(0)(c.outgoing) + x((m) => (y) => y > h ? m : y >= l ? m + 1 | 0 : m)(0)(u.incoming) | 0) | 0) | 0;
    return p < $ ? [{ src: u.id, tgt: c.id, weight: $ - p | 0, kind: ni }] : p > $ ? [{ src: c.id, tgt: u.id, weight: p - $ | 0, kind: ni }] : p > 0 ? [{ src: u.id, tgt: c.id, weight: 0, kind: ni }, { src: c.id, tgt: u.id, weight: 0, kind: ni }] : [];
  };
  return x((s) => (u) => x((c) => (a) => U(C)(a._1)(a._2)(c))(s)((() => {
    const c = x((I) => (B) => {
      const nt = B.edge.from.node + "|" + (() => {
        if (B.edge.from.port.tag === "Just")
          return B.edge.from.port._1;
        if (B.edge.from.port.tag === "Nothing")
          return "_auto_" + B.edge.id;
        f();
      })(), ut = fa(nt)(I.entries);
      if (ut.tag === "Nothing")
        return {
          ...I,
          entries: U(C)(nt)({
            id: 0,
            members: [B.edge.id],
            incoming: [B.fromPos._1],
            outgoing: [B.toPos._1],
            slot: 0,
            mark: 0,
            splitBy: J,
            splitPartner: J
          })(I.entries),
          order: [...I.order, nt]
        };
      if (ut.tag === "Just")
        return {
          ...I,
          entries: U(C)(nt)({
            ...ut._1,
            members: [...ut._1.members, B.edge.id],
            incoming: [...cr((Y) => Y < B.fromPos._1)(ut._1.incoming).init, B.fromPos._1, ...cr((Y) => Y <= B.fromPos._1)(ut._1.incoming).rest],
            outgoing: [...cr((Y) => Y < B.toPos._1)(ut._1.outgoing).init, B.toPos._1, ...cr((Y) => Y <= B.toPos._1)(ut._1.outgoing).rest]
          })(I.entries)
        };
      f();
    })({ entries: A, order: [] })(u._2), a = Ft((I) => (B) => ({ ...B, id: I }))(yt((I) => fa(I)(c.entries))(c.order));
    if (a.length === 0)
      return [];
    const g = x((I) => (B) => I.prev.tag === "Just" && B - I.prev._1 < 1e-9 ? I : { prev: v("Just", B), out: [...I.out, B] })({ prev: J, out: [] })(Lt(at.compare)([
      ...Tt(a)((I) => I.incoming),
      ...Tt(a)((I) => I.outgoing)
    ])).out, _ = g.length < 2 ? 0.2 * r : 0.2 * x((I) => (B) => {
      if (I.prev.tag === "Nothing")
        return { prev: v("Just", B), mn: I.mn };
      if (I.prev.tag === "Just")
        return { prev: v("Just", B), mn: dt(I.mn)(B - I.prev._1) };
      f();
    })({ prev: J, mn: 1e18 })(g).mn, d = {
      segments: a,
      deps: (() => {
        const I = a.length;
        return Tt(Tt(At(0, I - 2 | 0))((B) => Tt(At(B + 1 | 0, I - 1 | 0))((nt) => [
          b(B, nt)
        ])))((B) => B._1 >= 0 && B._1 < a.length ? B._2 >= 0 && B._2 < a.length ? i(_, a[B._1], a[B._2]) : [] : []);
      })()
    }, l = ft(
      (I) => {
        if (I.kind === "Critical")
          return !0;
        if (I.kind === "Regular")
          return !1;
        f();
      },
      d.deps
    ), h = (() => {
      if (l.length < 2)
        return d;
      const I = Tr((() => {
        const F = d.segments;
        return z((E) => b(E.id, E.mark))((() => {
          const E = F.length, S = (W) => {
            let Q = W, j = !0, q;
            for (; j; ) {
              const O = Q, rt = Ut((Z) => {
                const ot = It(Z)(O.inWeight);
                if (ot.tag === "Nothing")
                  return !0;
                if (ot.tag === "Just")
                  return ot._1 === 0;
                f();
              })(O.remaining);
              if (rt.tag === "Nothing") {
                j = !1, q = O;
                continue;
              }
              if (rt.tag === "Just") {
                const Z = rt._1;
                Q = {
                  ...O,
                  inWeight: x((ot) => (tt) => wt(it)(on)(tt.tgt)(-tt.weight)(ot))(O.inWeight)((() => {
                    const ot = It(Z)(O.depsBySrc);
                    if (ot.tag === "Nothing")
                      return [];
                    if (ot.tag === "Just")
                      return ot._1;
                    f();
                  })()),
                  marks: U(it)(Z)(O.nextSource)(O.marks),
                  nextSource: O.nextSource + 1 | 0,
                  outWeight: x((ot) => (tt) => wt(it)(on)(tt.src)(-tt.weight)(ot))(O.outWeight)((() => {
                    const ot = It(Z)(O.depsByTgt);
                    if (ot.tag === "Nothing")
                      return [];
                    if (ot.tag === "Just")
                      return ot._1;
                    f();
                  })()),
                  remaining: ft((ot) => ot !== Z, O.remaining)
                };
                continue;
              }
              f();
            }
            return q;
          }, H = (W) => {
            let Q = W, j = !0, q;
            for (; j; ) {
              const O = Q, rt = Ut((Z) => {
                const ot = It(Z)(O.outWeight);
                if (ot.tag === "Nothing")
                  return !0;
                if (ot.tag === "Just")
                  return ot._1 === 0;
                f();
              })(O.remaining);
              if (rt.tag === "Nothing") {
                j = !1, q = O;
                continue;
              }
              if (rt.tag === "Just") {
                const Z = rt._1;
                Q = {
                  ...O,
                  inWeight: x((ot) => (tt) => wt(it)(on)(tt.tgt)(-tt.weight)(ot))(O.inWeight)((() => {
                    const ot = It(Z)(O.depsBySrc);
                    if (ot.tag === "Nothing")
                      return [];
                    if (ot.tag === "Just")
                      return ot._1;
                    f();
                  })()),
                  marks: U(it)(Z)(O.nextSink)(O.marks),
                  nextSink: O.nextSink - 1 | 0,
                  outWeight: x((ot) => (tt) => wt(it)(on)(tt.src)(-tt.weight)(ot))(O.outWeight)((() => {
                    const ot = It(Z)(O.depsByTgt);
                    if (ot.tag === "Nothing")
                      return [];
                    if (ot.tag === "Just")
                      return ot._1;
                    f();
                  })()),
                  remaining: ft((ot) => ot !== Z, O.remaining)
                };
                continue;
              }
              f();
            }
            return q;
          };
          return ((W) => {
            let Q = W, j = !0, q;
            for (; j; ) {
              const rt = S(H(Q));
              if (rt.remaining.length === 0) {
                j = !1, q = z((Z) => {
                  const ot = It(Z.id)(rt.marks), tt = (() => {
                    if (ot.tag === "Nothing")
                      return Z.id;
                    if (ot.tag === "Just")
                      return ot._1;
                    f();
                  })();
                  return { ...Z, mark: tt < E ? (tt + E | 0) + 1 | 0 : tt };
                })(F);
                continue;
              }
              Q = (() => {
                const Z = (tt) => {
                  const ct = It(tt)(rt.outWeight), lt = It(tt)(rt.inWeight);
                  return (() => {
                    if (ct.tag === "Nothing")
                      return 0;
                    if (ct.tag === "Just")
                      return ct._1;
                    f();
                  })() - (() => {
                    if (lt.tag === "Nothing")
                      return 0;
                    if (lt.tag === "Just")
                      return lt._1;
                    f();
                  })() | 0;
                }, ot = Lt((tt) => (ct) => it.compare(Z(ct))(Z(tt)))(rt.remaining);
                if (0 < ot.length) {
                  const tt = ot[0];
                  return {
                    ...rt,
                    inWeight: x((ct) => (lt) => wt(it)(on)(lt.tgt)(-lt.weight)(ct))(rt.inWeight)((() => {
                      const ct = It(tt)(rt.depsBySrc);
                      if (ct.tag === "Nothing")
                        return [];
                      if (ct.tag === "Just")
                        return ct._1;
                      f();
                    })()),
                    marks: U(it)(tt)(rt.nextSource)(rt.marks),
                    nextSource: rt.nextSource + 1 | 0,
                    outWeight: x((ct) => (lt) => wt(it)(on)(lt.src)(-lt.weight)(ct))(rt.outWeight)((() => {
                      const ct = It(tt)(rt.depsByTgt);
                      if (ct.tag === "Nothing")
                        return [];
                      if (ct.tag === "Just")
                        return ct._1;
                      f();
                    })()),
                    remaining: ft((ct) => ct !== tt, rt.remaining)
                  };
                }
                return rt;
              })();
            }
            return q;
          })({
            remaining: z((W) => W.id)(F),
            marks: A,
            inWeight: x((W) => (Q) => wt(it)(on)(Q.tgt)(Q.weight)(W))(A)(l),
            outWeight: x((W) => (Q) => wt(it)(on)(Q.src)(Q.weight)(W))(A)(l),
            depsBySrc: x((W) => (Q) => wt(it)(rn)(Q.src)([Q])(W))(A)(l),
            depsByTgt: x((W) => (Q) => wt(it)(rn)(Q.tgt)([Q])(W))(A)(l),
            nextSink: E - 1 | 0,
            nextSource: E + 1 | 0
          });
        })());
      })()), B = ft(
        (F) => {
          const E = It(F.src)(I), S = It(F.tgt)(I);
          return (() => {
            if (E.tag === "Nothing")
              return 0;
            if (E.tag === "Just")
              return E._1;
            f();
          })() > (() => {
            if (S.tag === "Nothing")
              return 0;
            if (S.tag === "Just")
              return S._1;
            f();
          })();
        },
        l
      );
      if (B.length === 0)
        return d;
      const nt = x((F) => (E) => {
        if (Hn(Ar)(E.src)(F.decisions) || Hn(Ar)(E.tgt)(F.decisions))
          return F;
        const S = It(E.src)(F.segMap), H = It(E.tgt)(F.segMap);
        if (S.tag === "Just" && H.tag === "Just") {
          const G = (S._1.incoming.length + S._1.outgoing.length | 0) > 2 && (H._1.incoming.length + H._1.outgoing.length | 0) <= 2, W = G ? H._1 : S._1;
          return {
            decisions: [...F.decisions, W.id],
            segMap: U(it)(W.id)({ ...W, splitBy: v("Just", G ? S._1.id : H._1.id) })(F.segMap)
          };
        }
        return F;
      })({ decisions: [], segMap: Tr(z((F) => b(F.id, F))(d.segments)) })(B), ut = nt.segMap, Y = x((F) => (E) => {
        const S = dt(x(dt)(1e18)(E.incoming))(x(dt)(1e18)(E.outgoing)), H = ht(x(ht)(-1e18)(E.incoming))(x(ht)(-1e18)(E.outgoing)), G = ft(
          (O) => O.a.startPosition <= H && O.a.endPosition >= S,
          Ft((O) => (rt) => ({ i: O, a: rt }))(F.freeAreas)
        );
        if (G.length === 0) {
          const O = {
            ...E,
            incoming: Lt(at.compare)(E.incoming),
            outgoing: Lt(at.compare)([(S + H) / 2]),
            splitPartner: v("Just", F.nextId)
          }, rt = {
            id: F.nextId,
            incoming: Lt(at.compare)([(S + H) / 2]),
            mark: 0,
            members: E.members,
            outgoing: Lt(at.compare)(E.outgoing),
            slot: 0,
            splitBy: J,
            splitPartner: v("Just", E.id)
          };
          return {
            segMap: U(it)(rt.id)(rt)(U(it)(O.id)(O)(F.segMap)),
            freeAreas: F.freeAreas,
            nextId: F.nextId + 1 | 0
          };
        }
        const W = 0 < G.length ? v("Just", G[0]) : J, Q = (() => {
          if (W.tag === "Nothing")
            return { i: 0, a: { startPosition: 0, endPosition: 0, size: 0 } };
          if (W.tag === "Just") {
            if (G.length === 1)
              return W._1;
            const O = z((rt) => ({
              c: rt,
              rating: (() => {
                const Z = (rt.a.startPosition + rt.a.endPosition) / 2, ot = [Z], tt = [Z], ct = x((() => {
                  const Wt = F.segMap;
                  return (vt) => (Bt) => {
                    const pt = It(Bt.tgt)(Wt);
                    if (pt.tag === "Nothing")
                      return vt;
                    if (pt.tag === "Just") {
                      const Jt = dt(x(dt)(1e18)(pt._1.incoming))(x(dt)(1e18)(pt._1.outgoing)), $t = ht(x(ht)(-1e18)(pt._1.incoming))(x(ht)(-1e18)(pt._1.outgoing)), mt = dt(x(dt)(1e18)(E.incoming))(x(dt)(1e18)(ot)), K = (() => {
                        const Pt = ht(x(ht)(-1e18)(E.incoming))(x(ht)(-1e18)(ot)), Gt = x((Vt) => (cn) => cn > $t ? Vt : cn >= Jt ? Vt + 1 | 0 : Vt)(0)(ot) + x((Vt) => (cn) => cn > Pt ? Vt : cn >= mt ? Vt + 1 | 0 : Vt)(0)(pt._1.incoming) | 0, Wn = dt(x(dt)(1e18)(E.incoming))(x(dt)(1e18)(ot)), Vn = ht(x(ht)(-1e18)(E.incoming))(x(ht)(-1e18)(ot)), ke = dt(x(dt)(1e18)(pt._1.incoming))(x(dt)(1e18)(pt._1.outgoing)), be = ht(x(ht)(-1e18)(pt._1.incoming))(x(ht)(-1e18)(pt._1.outgoing)), jr = x((Vt) => (cn) => cn > Vn ? Vt : cn >= Wn ? Vt + 1 | 0 : Vt)(0)(pt._1.outgoing) + x((Vt) => (cn) => cn > be ? Vt : cn >= ke ? Vt + 1 | 0 : Vt)(0)(E.incoming) | 0;
                        return Gt === jr ? Gt > 0 ? { ...vt, deps: vt.deps + 2 | 0, crossings: vt.crossings + Gt | 0 } : vt : { ...vt, deps: vt.deps + 1 | 0, crossings: vt.crossings + wr(Gt)(jr) | 0 };
                      })(), M = dt(x(dt)(1e18)(pt._1.incoming))(x(dt)(1e18)(pt._1.outgoing)), gt = ht(x(ht)(-1e18)(pt._1.incoming))(x(ht)(-1e18)(pt._1.outgoing)), _t = dt(x(dt)(1e18)(tt))(x(dt)(1e18)(E.outgoing)), xt = ht(x(ht)(-1e18)(tt))(x(ht)(-1e18)(E.outgoing)), Nt = x((Pt) => (Gt) => Gt > gt ? Pt : Gt >= M ? Pt + 1 | 0 : Pt)(0)(E.outgoing) + x((Pt) => (Gt) => Gt > xt ? Pt : Gt >= _t ? Pt + 1 | 0 : Pt)(0)(pt._1.incoming) | 0, jt = dt(x(dt)(1e18)(tt))(x(dt)(1e18)(E.outgoing)), Ln = ht(x(ht)(-1e18)(tt))(x(ht)(-1e18)(E.outgoing)), ee = dt(x(dt)(1e18)(pt._1.incoming))(x(dt)(1e18)(pt._1.outgoing)), Xn = ht(x(ht)(-1e18)(pt._1.incoming))(x(ht)(-1e18)(pt._1.outgoing)), yn = x((Pt) => (Gt) => Gt > Ln ? Pt : Gt >= jt ? Pt + 1 | 0 : Pt)(0)(pt._1.outgoing) + x((Pt) => (Gt) => Gt > Xn ? Pt : Gt >= ee ? Pt + 1 | 0 : Pt)(0)(tt) | 0;
                      return Nt === yn ? Nt > 0 ? { ...K, deps: K.deps + 2 | 0, crossings: K.crossings + Nt | 0 } : K : { ...K, deps: K.deps + 1 | 0, crossings: K.crossings + wr(Nt)(yn) | 0 };
                    }
                    f();
                  };
                })())(x((() => {
                  const Wt = F.segMap;
                  return (vt) => (Bt) => {
                    const pt = It(Bt.src)(Wt);
                    if (pt.tag === "Nothing")
                      return vt;
                    if (pt.tag === "Just") {
                      const Jt = dt(x(dt)(1e18)(pt._1.incoming))(x(dt)(1e18)(pt._1.outgoing)), $t = ht(x(ht)(-1e18)(pt._1.incoming))(x(ht)(-1e18)(pt._1.outgoing)), mt = dt(x(dt)(1e18)(E.incoming))(x(dt)(1e18)(ot)), K = (() => {
                        const Pt = ht(x(ht)(-1e18)(E.incoming))(x(ht)(-1e18)(ot)), Gt = x((Vt) => (cn) => cn > $t ? Vt : cn >= Jt ? Vt + 1 | 0 : Vt)(0)(ot) + x((Vt) => (cn) => cn > Pt ? Vt : cn >= mt ? Vt + 1 | 0 : Vt)(0)(pt._1.incoming) | 0, Wn = dt(x(dt)(1e18)(E.incoming))(x(dt)(1e18)(ot)), Vn = ht(x(ht)(-1e18)(E.incoming))(x(ht)(-1e18)(ot)), ke = dt(x(dt)(1e18)(pt._1.incoming))(x(dt)(1e18)(pt._1.outgoing)), be = ht(x(ht)(-1e18)(pt._1.incoming))(x(ht)(-1e18)(pt._1.outgoing)), jr = x((Vt) => (cn) => cn > Vn ? Vt : cn >= Wn ? Vt + 1 | 0 : Vt)(0)(pt._1.outgoing) + x((Vt) => (cn) => cn > be ? Vt : cn >= ke ? Vt + 1 | 0 : Vt)(0)(E.incoming) | 0;
                        return Gt === jr ? Gt > 0 ? { ...vt, deps: vt.deps + 2 | 0, crossings: vt.crossings + Gt | 0 } : vt : { ...vt, deps: vt.deps + 1 | 0, crossings: vt.crossings + wr(Gt)(jr) | 0 };
                      })(), M = dt(x(dt)(1e18)(pt._1.incoming))(x(dt)(1e18)(pt._1.outgoing)), gt = ht(x(ht)(-1e18)(pt._1.incoming))(x(ht)(-1e18)(pt._1.outgoing)), _t = dt(x(dt)(1e18)(tt))(x(dt)(1e18)(E.outgoing)), xt = ht(x(ht)(-1e18)(tt))(x(ht)(-1e18)(E.outgoing)), Nt = x((Pt) => (Gt) => Gt > gt ? Pt : Gt >= M ? Pt + 1 | 0 : Pt)(0)(E.outgoing) + x((Pt) => (Gt) => Gt > xt ? Pt : Gt >= _t ? Pt + 1 | 0 : Pt)(0)(pt._1.incoming) | 0, jt = dt(x(dt)(1e18)(tt))(x(dt)(1e18)(E.outgoing)), Ln = ht(x(ht)(-1e18)(tt))(x(ht)(-1e18)(E.outgoing)), ee = dt(x(dt)(1e18)(pt._1.incoming))(x(dt)(1e18)(pt._1.outgoing)), Xn = ht(x(ht)(-1e18)(pt._1.incoming))(x(ht)(-1e18)(pt._1.outgoing)), yn = x((Pt) => (Gt) => Gt > Ln ? Pt : Gt >= jt ? Pt + 1 | 0 : Pt)(0)(pt._1.outgoing) + x((Pt) => (Gt) => Gt > Xn ? Pt : Gt >= ee ? Pt + 1 | 0 : Pt)(0)(tt) | 0;
                      return Nt === yn ? Nt > 0 ? { ...K, deps: K.deps + 2 | 0, crossings: K.crossings + Nt | 0 } : K : { ...K, deps: K.deps + 1 | 0, crossings: K.crossings + wr(Nt)(yn) | 0 };
                    }
                    f();
                  };
                })())({ crossings: 0, deps: 0 })(ft((Wt) => Wt.tgt === E.id, d.deps)))(ft((Wt) => Wt.src === E.id, d.deps)), lt = (() => {
                  if (E.splitBy.tag === "Just")
                    return It(E.splitBy._1)(F.segMap);
                  if (E.splitBy.tag === "Nothing")
                    return J;
                  f();
                })();
                if (lt.tag === "Just")
                  return {
                    ...ct,
                    deps: ct.deps + 2 | 0,
                    crossings: (() => {
                      const Wt = dt(x(dt)(1e18)(lt._1.incoming))(x(dt)(1e18)(lt._1.outgoing)), vt = dt(x(dt)(1e18)(tt))(x(dt)(1e18)(E.outgoing)), Bt = ht(x(ht)(-1e18)(lt._1.incoming))(x(ht)(-1e18)(lt._1.outgoing)), pt = ht(x(ht)(-1e18)(tt))(x(ht)(-1e18)(E.outgoing)), Jt = dt(x(dt)(1e18)(E.incoming))(x(dt)(1e18)(ot));
                      return ct.crossings + (() => {
                        const $t = dt(x(dt)(1e18)(lt._1.incoming))(x(dt)(1e18)(lt._1.outgoing)), mt = ht(x(ht)(-1e18)(E.incoming))(x(ht)(-1e18)(ot)), K = ht(x(ht)(-1e18)(lt._1.incoming))(x(ht)(-1e18)(lt._1.outgoing));
                        return ((x((M) => (gt) => gt > Bt ? M : gt >= Wt ? M + 1 | 0 : M)(0)(ot) + x((M) => (gt) => gt > mt ? M : gt >= Jt ? M + 1 | 0 : M)(0)(lt._1.incoming) | 0) + x((M) => (gt) => gt > pt ? M : gt >= vt ? M + 1 | 0 : M)(0)(lt._1.outgoing) | 0) + x((M) => (gt) => gt > K ? M : gt >= $t ? M + 1 | 0 : M)(0)(tt) | 0;
                      })() | 0;
                    })()
                  };
                if (lt.tag === "Nothing")
                  return ct;
                f();
              })()
            }))(G);
            return x((rt) => (Z) => Z.rating.crossings < rt.rating.crossings || !(Z.rating.crossings > rt.rating.crossings) && (Z.rating.deps < rt.rating.deps || !(Z.rating.deps > rt.rating.deps) && Z.c.a.size > rt.c.a.size) ? Z : rt)(0 < O.length ? O[0] : { c: W._1, rating: { crossings: 1e6, deps: 1e6 } })(O).c;
          }
          f();
        })(), j = {
          ...E,
          incoming: Lt(at.compare)(E.incoming),
          outgoing: Lt(at.compare)([(Q.a.startPosition + Q.a.endPosition) / 2]),
          splitPartner: v("Just", F.nextId)
        }, q = {
          id: F.nextId,
          incoming: Lt(at.compare)([(Q.a.startPosition + Q.a.endPosition) / 2]),
          mark: 0,
          members: E.members,
          outgoing: Lt(at.compare)(E.outgoing),
          slot: 0,
          splitBy: J,
          splitPartner: v("Just", E.id)
        };
        return {
          segMap: U(it)(q.id)(q)(U(it)(j.id)(j)(F.segMap)),
          freeAreas: (() => {
            if (Q.i >= 0 && Q.i < F.freeAreas.length) {
              const O = kf(qt, J, Q.i, F.freeAreas), rt = (() => {
                if (O.tag === "Nothing")
                  return F.freeAreas;
                if (O.tag === "Just")
                  return O._1;
                f();
              })();
              if (F.freeAreas[Q.i].size / 2 < _)
                return rt;
              const Z = (F.freeAreas[Q.i].startPosition + F.freeAreas[Q.i].endPosition) / 2, ot = Z - _, tt = Z + _;
              return [
                ...Q.i < 1 ? [] : bt(0, Q.i, rt),
                ...F.freeAreas[Q.i].startPosition <= ot ? [{ startPosition: F.freeAreas[Q.i].startPosition, endPosition: ot, size: ot - F.freeAreas[Q.i].startPosition }] : [],
                ...tt <= F.freeAreas[Q.i].endPosition ? [{ startPosition: tt, endPosition: F.freeAreas[Q.i].endPosition, size: F.freeAreas[Q.i].endPosition - tt }] : [],
                ...Q.i < 1 ? rt : bt(Q.i, rt.length, rt)
              ];
            }
            return F.freeAreas;
          })(),
          nextId: F.nextId + 1 | 0
        };
      })({
        segMap: ut,
        freeAreas: (() => {
          const F = Lt(at.compare)([
            ...Tt(d.segments)((E) => E.incoming),
            ...Tt(d.segments)((E) => E.outgoing)
          ]);
          return yt(sm)(Tn(
            (E) => (S) => S - E >= 2 * _ ? v("Just", { startPosition: E + _, endPosition: S - _, size: S - E - 2 * _ }) : J,
            F,
            bt(1, F.length, F)
          ));
        })(),
        nextId: d.segments.length
      })(Lt((F) => (E) => at.compare(ht(x(ht)(-1e18)(F.incoming))(x(ht)(-1e18)(F.outgoing)) - dt(x(dt)(1e18)(F.incoming))(x(dt)(1e18)(F.outgoing)))(ht(x(ht)(-1e18)(E.incoming))(x(ht)(-1e18)(E.outgoing)) - dt(x(dt)(1e18)(E.incoming))(x(dt)(1e18)(E.outgoing))))(yt((F) => It(F)(ut))(nt.decisions)));
      return {
        segments: (() => {
          const F = (E, S) => {
            if (E.tag === "Leaf")
              return S;
            if (E.tag === "Node")
              return F(E._5, zt("Cons", E._4, F(E._6, S)));
            f();
          };
          return Et(Xt.foldr, F(Y.segMap, Yt));
        })(),
        deps: (() => {
          const F = Y.segMap, E = (G, W) => {
            if (G.tag === "Leaf")
              return W;
            if (G.tag === "Node")
              return E(G._5, zt("Cons", G._4, E(G._6, W)));
            f();
          }, S = Et(Xt.foldr, E(F, Yt)), H = S.length;
          return [
            ...Tt(Tt(At(0, H - 2 | 0))((G) => Tt(At(G + 1 | 0, H - 1 | 0))((W) => [
              b(G, W)
            ])))((G) => G._1 >= 0 && G._1 < S.length ? G._2 >= 0 && G._2 < S.length ? S[G._1].splitPartner.tag !== "Nothing" && S[G._1].splitPartner.tag === "Just" && S[G._1].splitPartner._1 === S[G._2].id || S[G._2].splitPartner.tag !== "Nothing" && S[G._2].splitPartner.tag === "Just" && S[G._2].splitPartner._1 === S[G._1].id ? [] : i(_, S[G._1], S[G._2]) : [] : []),
            ...Tt(S)((G) => G.splitBy.tag === "Just" && G.splitPartner.tag === "Just" && (() => {
              const W = It(G.splitPartner._1)(F);
              if (W.tag === "Nothing")
                return !1;
              if (W.tag === "Just")
                return !0;
              f();
            })() && (() => {
              const W = It(G.splitBy._1)(F);
              if (W.tag === "Nothing")
                return !1;
              if (W.tag === "Just")
                return !0;
              f();
            })() ? [{ src: G.id, tgt: G.splitBy._1, weight: 1, kind: ei }, { src: G.splitBy._1, tgt: G.splitPartner._1, weight: 1, kind: ei }] : [])
          ];
        })()
      };
    })(), p = h.segments, $ = p.length, m = (I) => {
      let B = I, nt = !0, ut;
      for (; nt; ) {
        const Y = B, F = Ut((E) => {
          const S = It(E)(Y.inWeight);
          if (S.tag === "Nothing")
            return !0;
          if (S.tag === "Just")
            return S._1 === 0;
          f();
        })(Y.remaining);
        if (F.tag === "Nothing") {
          nt = !1, ut = Y;
          continue;
        }
        if (F.tag === "Just") {
          const E = F._1;
          B = {
            ...Y,
            inWeight: x((S) => (H) => wt(it)(on)(H.tgt)(-H.weight)(S))(Y.inWeight)((() => {
              const S = It(E)(Y.depsBySrc);
              if (S.tag === "Nothing")
                return [];
              if (S.tag === "Just")
                return S._1;
              f();
            })()),
            marks: U(it)(E)(Y.nextSource)(Y.marks),
            nextSource: Y.nextSource + 1 | 0,
            outWeight: x((S) => (H) => wt(it)(on)(H.src)(-H.weight)(S))(Y.outWeight)((() => {
              const S = It(E)(Y.depsByTgt);
              if (S.tag === "Nothing")
                return [];
              if (S.tag === "Just")
                return S._1;
              f();
            })()),
            remaining: ft((S) => S !== E, Y.remaining)
          };
          continue;
        }
        f();
      }
      return ut;
    }, y = (I) => {
      let B = I, nt = !0, ut;
      for (; nt; ) {
        const Y = B, F = Ut((E) => {
          const S = It(E)(Y.outWeight);
          if (S.tag === "Nothing")
            return !0;
          if (S.tag === "Just")
            return S._1 === 0;
          f();
        })(Y.remaining);
        if (F.tag === "Nothing") {
          nt = !1, ut = Y;
          continue;
        }
        if (F.tag === "Just") {
          const E = F._1;
          B = {
            ...Y,
            inWeight: x((S) => (H) => wt(it)(on)(H.tgt)(-H.weight)(S))(Y.inWeight)((() => {
              const S = It(E)(Y.depsBySrc);
              if (S.tag === "Nothing")
                return [];
              if (S.tag === "Just")
                return S._1;
              f();
            })()),
            marks: U(it)(E)(Y.nextSink)(Y.marks),
            nextSink: Y.nextSink - 1 | 0,
            outWeight: x((S) => (H) => wt(it)(on)(H.src)(-H.weight)(S))(Y.outWeight)((() => {
              const S = It(E)(Y.depsByTgt);
              if (S.tag === "Nothing")
                return [];
              if (S.tag === "Just")
                return S._1;
              f();
            })()),
            remaining: ft((S) => S !== E, Y.remaining)
          };
          continue;
        }
        f();
      }
      return ut;
    }, T = ((I) => {
      let B = I, nt = !0, ut;
      for (; nt; ) {
        const F = m(y(B));
        if (F.remaining.length === 0) {
          nt = !1, ut = z((E) => {
            const S = It(E.id)(F.marks), H = (() => {
              if (S.tag === "Nothing")
                return E.id;
              if (S.tag === "Just")
                return S._1;
              f();
            })();
            return { ...E, mark: H < $ ? (H + $ | 0) + 1 | 0 : H };
          })(p);
          continue;
        }
        B = (() => {
          const E = (H) => {
            const G = It(H)(F.outWeight), W = It(H)(F.inWeight);
            return (() => {
              if (G.tag === "Nothing")
                return 0;
              if (G.tag === "Just")
                return G._1;
              f();
            })() - (() => {
              if (W.tag === "Nothing")
                return 0;
              if (W.tag === "Just")
                return W._1;
              f();
            })() | 0;
          }, S = Lt((H) => (G) => it.compare(E(G))(E(H)))(F.remaining);
          if (0 < S.length) {
            const H = S[0];
            return {
              ...F,
              inWeight: x((G) => (W) => wt(it)(on)(W.tgt)(-W.weight)(G))(F.inWeight)((() => {
                const G = It(H)(F.depsBySrc);
                if (G.tag === "Nothing")
                  return [];
                if (G.tag === "Just")
                  return G._1;
                f();
              })()),
              marks: U(it)(H)(F.nextSource)(F.marks),
              nextSource: F.nextSource + 1 | 0,
              outWeight: x((G) => (W) => wt(it)(on)(W.src)(-W.weight)(G))(F.outWeight)((() => {
                const G = It(H)(F.depsByTgt);
                if (G.tag === "Nothing")
                  return [];
                if (G.tag === "Just")
                  return G._1;
                f();
              })()),
              remaining: ft((G) => G !== H, F.remaining)
            };
          }
          return F;
        })();
      }
      return ut;
    })({
      remaining: z((I) => I.id)(p),
      marks: A,
      inWeight: x((I) => (B) => wt(it)(on)(B.tgt)(B.weight)(I))(A)(h.deps),
      outWeight: x((I) => (B) => wt(it)(on)(B.src)(B.weight)(I))(A)(h.deps),
      depsBySrc: x((I) => (B) => wt(it)(rn)(B.src)([B])(I))(A)(h.deps),
      depsByTgt: x((I) => (B) => wt(it)(rn)(B.tgt)([B])(I))(A)(h.deps),
      nextSink: $ - 1 | 0,
      nextSource: $ + 1 | 0
    }), w = (() => {
      const I = (() => {
        const Y = Tr(z((F) => b(F.id, F.mark))(T));
        return {
          segments: T,
          deps: yt((F) => (() => {
            if (F.kind === "Critical")
              return !0;
            if (F.kind === "Regular")
              return !1;
            f();
          })() ? v("Just", F) : (() => {
            const E = It(F.src)(Y), S = It(F.tgt)(Y);
            return (() => {
              if (E.tag === "Nothing")
                return 0;
              if (E.tag === "Just")
                return E._1;
              f();
            })() > (() => {
              if (S.tag === "Nothing")
                return 0;
              if (S.tag === "Just")
                return S._1;
              f();
            })();
          })() ? F.weight === 0 ? J : v("Just", { src: F.tgt, tgt: F.src, weight: F.weight, kind: F.kind }) : v("Just", F))(h.deps)
        };
      })(), B = x((Y) => (F) => wt(it)(on)(F.tgt)(1)(Y))(A)(I.deps), ut = ((Y) => {
        let F = Y, E = !0, S;
        for (; E; ) {
          const H = F, G = Rt((W) => J, (W) => (Q) => v("Just", { head: W, tail: Q }), H.queue);
          if (G.tag === "Nothing") {
            E = !1, S = H;
            continue;
          }
          if (G.tag === "Just") {
            F = x((() => {
              const W = It(G._1.head)(H.slots), Q = (() => {
                if (W.tag === "Nothing")
                  return 0;
                if (W.tag === "Just")
                  return W._1;
                f();
              })();
              return (j) => (q) => {
                const O = It(q)(j.inDegree), rt = (() => {
                  if (O.tag === "Nothing")
                    return -1;
                  if (O.tag === "Just")
                    return O._1 - 1 | 0;
                  f();
                })();
                return {
                  ...j,
                  slots: U(it)(q)(aa((() => {
                    const Z = It(q)(j.slots);
                    if (Z.tag === "Nothing")
                      return 0;
                    if (Z.tag === "Just")
                      return Z._1;
                    f();
                  })())(Q + 1 | 0))(j.slots),
                  inDegree: U(it)(q)(rt)(j.inDegree),
                  queue: rt === 0 ? [...j.queue, q] : j.queue
                };
              };
            })())({ ...H, queue: G._1.tail })((() => {
              const W = It(G._1.head)(H.adj);
              if (W.tag === "Nothing")
                return [];
              if (W.tag === "Just")
                return W._1;
              f();
            })());
            continue;
          }
          f();
        }
        return S;
      })({
        slots: Tr(z((Y) => b(Y.id, 0))(I.segments)),
        inDegree: B,
        adj: x((Y) => (F) => wt(it)(rn)(F.src)([F.tgt])(Y))(A)(I.deps),
        queue: z((Y) => Y.id)(ft(
          (Y) => {
            const F = It(Y.id)(B);
            if (F.tag === "Nothing")
              return !0;
            if (F.tag === "Just")
              return F._1 === 0;
            f();
          },
          I.segments
        ))
      });
      return Lt((Y) => (F) => it.compare(Y.slot)(F.slot))(z((Y) => ({
        ...Y,
        slot: (() => {
          const F = It(Y.id)(ut.slots);
          if (F.tag === "Nothing")
            return 0;
          if (F.tag === "Just")
            return F._1;
          f();
        })()
      }))(I.segments));
    })(), k = 1 + x((I) => (B) => aa(I)(B.slot))(0)(w) | 0, L = Tt(w)((I) => I.members), P = ft((I) => Hn(le)(I.edge.id)(L), t), D = x(ht)(-1e18)(z((I) => I.fromPos._2)(P)), V = x(dt)(1e18)(z((I) => I.toPos._2)(P));
    if (D > V) {
      const I = Tr(z((B) => b(B.id, B))(w));
      return zn(z((B) => z((nt) => b(
        nt,
        {
          slot: B.slot,
          slotCount: k,
          gapTop: V,
          gapBottom: D,
          partner: (() => {
            if (B.splitPartner.tag === "Just") {
              const ut = It(B.splitPartner._1)(I);
              if (ut.tag === "Just")
                return v("Just", { slot: ut._1.slot, splitX: 0 < ut._1.incoming.length ? ut._1.incoming[0] : 0 });
              if (ut.tag === "Nothing")
                return J;
              f();
            }
            if (B.splitPartner.tag === "Nothing")
              return J;
            f();
          })()
        }
      ))(B.members))(ft(
        (B) => {
          if (B.splitPartner.tag === "Just") {
            const nt = It(B.splitPartner._1)(I);
            return !(nt.tag === "Just" && (() => {
              if (nt._1.splitBy.tag === "Nothing")
                return !1;
              if (nt._1.splitBy.tag === "Just")
                return !0;
              f();
            })());
          }
          if (B.splitPartner.tag === "Nothing")
            return !0;
          f();
        },
        w
      )));
    }
    const X = Tr(z((I) => b(I.id, I))(w));
    return zn(z((I) => z((B) => b(
      B,
      {
        slot: I.slot,
        slotCount: k,
        gapTop: D,
        gapBottom: V,
        partner: (() => {
          if (I.splitPartner.tag === "Just") {
            const nt = It(I.splitPartner._1)(X);
            if (nt.tag === "Just")
              return v("Just", { slot: nt._1.slot, splitX: 0 < nt._1.incoming.length ? nt._1.incoming[0] : 0 });
            if (nt.tag === "Nothing")
              return J;
            f();
          }
          if (I.splitPartner.tag === "Nothing")
            return J;
          f();
        })()
      }
    ))(I.members))(ft(
      (I) => {
        if (I.splitPartner.tag === "Just") {
          const B = It(I.splitPartner._1)(X);
          return !(B.tag === "Just" && (() => {
            if (B._1.splitBy.tag === "Nothing")
              return !1;
            if (B._1.splitBy.tag === "Just")
              return !0;
            f();
          })());
        }
        if (I.splitPartner.tag === "Nothing")
          return !0;
        f();
      },
      w
    )));
  })()))(A)(im(x((s) => (u) => {
    const c = Lr(u.edge.from.node)(e);
    if (c.tag === "Just") {
      const a = Lr(u.edge.to.node)(e);
      return a.tag === "Just" && c._1.layer !== a._1.layer ? wt(it)(rn)(wr(c._1.layer)(a._1.layer))([u])(s) : s;
    }
    return s;
  })(A)((() => {
    const s = (u) => b(
      (() => {
        const c = Lr(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.layer : 1e6;
      })(),
      (() => {
        const c = Lr(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.order : 1e6;
      })()
    );
    return Lt((u) => (c) => om(s(u))(s(c)))(t);
  })())));
}, cm = (t) => (n) => {
  const e = H0(t)(n), r = x((o) => (i) => U(C)(i.node)(i)(o))(A)(n);
  return x((o) => (i) => {
    const s = Lr(i.edge.from.node)(r);
    if (s.tag === "Just") {
      const u = Lr(i.edge.to.node)(r);
      if (u.tag === "Just" && s._1.layer !== u._1.layer) {
        const c = um(i.edge.id)(e);
        if (c.tag === "Just")
          return U(it)(wr(s._1.layer)(u._1.layer))(c._1.slotCount)(o);
      }
      return o;
    }
    return o;
  })(A)(t);
}, O0 = Ht.foldMap(/* @__PURE__ */ (() => {
  const t = { append: (n) => (e) => n || e };
  return { mempty: !1, Semigroup0: () => t };
})()), gn = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ln = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ro = (t) => (n) => (e) => (r) => O0((o) => e >= o.x && e < o.x + o.w && n > o.y && t < o.y + o.h)(r), ki = (t) => (n) => (e) => (r) => ro(gn(n)(e))(ln(n)(e))(r)(t), ri = /* @__PURE__ */ et(4), am = /* @__PURE__ */ Ef((t) => {
  if (t.direction === "H") {
    const n = gn(t.start._1)(t.end._1);
    return [{ x: n, y: t.start._2 - 1, w: ln(t.start._1)(t.end._1) - n, h: 2 }];
  }
  if (t.direction === "V") {
    const n = gn(t.start._2)(t.end._2);
    return [{ x: t.start._1 - 1, y: n, w: 2, h: ln(t.start._2)(t.end._2) - n }];
  }
  f();
}), bo = /* @__PURE__ */ Lf((t) => {
  const n = t.start._1 - t.end._1;
  return !((n < 0 ? -n < 1e-6 : n < 1e-6) && (() => {
    const e = t.start._2 - t.end._2;
    return e < 0 ? -e < 1e-6 : e < 1e-6;
  })());
}), fm = (t) => (n) => (e) => {
  const r = Rt((o) => J, (o) => (i) => v("Just", { head: o, tail: i }), n);
  if (r.tag === "Nothing")
    return [{ start: t.start, end: e.end, direction: t.direction }];
  if (r.tag === "Just") {
    const o = (r._1.head.direction === "H" ? t.direction === "H" : r._1.head.direction === "V" && t.direction === "V") ? [{ start: t.start, end: r._1.head.end, direction: t.direction }] : [t, r._1.head], i = Wo(r._1.tail);
    if (i.tag === "Nothing") {
      const s = o.length - 1 | 0;
      return s >= 0 && s < o.length && (o[s].direction === "H" ? e.direction === "H" : o[s].direction === "V" && e.direction === "V") ? [
        ...(() => {
          const u = o.length - 1 | 0;
          return u < 1 ? [] : bt(0, u, o);
        })(),
        { start: o[s].start, end: e.end, direction: e.direction }
      ] : [...o, e];
    }
    if (i.tag === "Just")
      return (i._1.last.direction === "H" ? e.direction === "H" : i._1.last.direction === "V" && e.direction === "V") ? [...o, ...i._1.init, { start: i._1.last.start, end: e.end, direction: e.direction }] : [...o, ...r._1.tail, e];
  }
  f();
}, Lo = (t) => {
  const n = (r) => (o) => {
    const i = Rt((s) => J, (s) => (u) => v("Just", { head: s, tail: u }), o);
    if (i.tag === "Nothing")
      return [r];
    if (i.tag === "Just")
      return (r.direction === "H" ? i._1.head.direction === "H" : r.direction === "V" && i._1.head.direction === "V") && (() => {
        if (r.direction === "H")
          return r.end._1 - r.start._1 >= 0 == i._1.head.end._1 - i._1.head.start._1 >= 0;
        if (r.direction === "V")
          return r.end._2 - r.start._2 >= 0 == i._1.head.end._2 - i._1.head.start._2 >= 0;
        f();
      })() ? n({ start: r.start, end: i._1.head.end, direction: r.direction })(i._1.tail) : [r, ...n(i._1.head)(i._1.tail)];
    f();
  }, e = Rt((r) => J, (r) => (o) => v("Just", { head: r, tail: o }), t);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return n(e._1.head)(e._1.tail);
  f();
}, oo = (t) => (n) => (e) => (r) => O0((o) => e >= o.y && e < o.y + o.h && n > o.x && t < o.x + o.w)(r), po = (t) => (n) => (e) => (r) => oo(gn(n)(e))(ln(n)(e))(r)(t), gm = (t) => (n) => (e) => (r) => {
  const o = e + 2 | 0, i = o < 1 ? n : bt(o, n.length, n), s = e < 1 ? [] : bt(0, e, n), u = (e + 1 | 0) === (r - 1 | 0), c = e === 0, a = e >= 0 && e < n.length ? v("Just", n[e]) : J;
  if (a.tag === "Just") {
    const g = e + 1 | 0, _ = g >= 0 && g < n.length ? v("Just", n[g]) : J;
    if (_.tag === "Just") {
      const d = a._1.start._1 === _._1.end._1 && (!c || a._1.direction === "V") && (!u || _._1.direction === "V") && !ki(t)(gn(a._1.start._2)(_._1.end._2))(ln(a._1.start._2)(_._1.end._2))(a._1.start._1) ? v("Just", [...s, { start: a._1.start, end: _._1.end, direction: tn }, ...i]) : J, l = a._1.start._2 === _._1.end._2 && (!c || a._1.direction === "H") && (!u || _._1.direction === "H") && !po(t)(gn(a._1.start._1)(_._1.end._1))(ln(a._1.start._1)(_._1.end._1))(a._1.start._2) ? v("Just", [...s, { start: a._1.start, end: _._1.end, direction: Zt }, ...i]) : J;
      return d.tag === "Nothing" ? l : d;
    }
    if (_.tag === "Nothing")
      return J;
    f();
  }
  if (a.tag === "Nothing")
    return J;
  f();
}, lm = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if ((c + 1 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const a = gm(t)(n)(c)(e);
      if (a.tag === "Just") {
        s = !1, u = a._1;
        continue;
      }
      if (a.tag === "Nothing") {
        i = c + 1 | 0;
        continue;
      }
      f();
    }
    return u;
  })(0);
}, _m = (t) => (n) => (e) => (r) => {
  const o = (d, l, h) => !ki(t)(gn(l)(h))(ln(l)(h))(d), i = e + 3 | 0, s = i < 1 ? n : bt(i, n.length, n), u = e < 1 ? [] : bt(0, e, n), c = (e + 2 | 0) === (r - 1 | 0), a = e === 0, g = (d, l, h) => !po(t)(gn(l)(h))(ln(l)(h))(d), _ = e >= 0 && e < n.length ? v("Just", n[e]) : J;
  if (_.tag === "Just") {
    const d = e + 2 | 0, l = d >= 0 && d < n.length ? v("Just", n[d]) : J;
    if (l.tag === "Just") {
      const h = _._1.start._1 === l._1.end._1 && (!a || _._1.direction === "V") && (!c || l._1.direction === "V") && o(_._1.start._1, _._1.start._2, l._1.end._2) ? v("Just", [...u, { start: _._1.start, end: l._1.end, direction: tn }, ...s]) : _._1.start._2 === l._1.end._2 && (!a || _._1.direction === "H") && (!c || l._1.direction === "H") && g(_._1.start._2, _._1.start._1, l._1.end._1) ? v("Just", [...u, { start: _._1.start, end: l._1.end, direction: Zt }, ...s]) : J, p = (!a || _._1.direction === "V") && (!c || l._1.direction === "H") && o(_._1.start._1, _._1.start._2, l._1.end._2) && g(
        l._1.end._2,
        _._1.start._1,
        l._1.end._1
      ) ? v(
        "Just",
        [
          ...u,
          { start: _._1.start, end: b(_._1.start._1, l._1.end._2), direction: tn },
          { start: b(_._1.start._1, l._1.end._2), end: l._1.end, direction: Zt },
          ...s
        ]
      ) : J, $ = (!a || _._1.direction === "H") && (!c || l._1.direction === "V") && g(_._1.start._2, _._1.start._1, l._1.end._1) && o(
        l._1.end._1,
        _._1.start._2,
        l._1.end._2
      ) ? v(
        "Just",
        [
          ...u,
          { start: _._1.start, end: b(l._1.end._1, _._1.start._2), direction: Zt },
          { start: b(l._1.end._1, _._1.start._2), end: l._1.end, direction: tn },
          ...s
        ]
      ) : J, m = p.tag === "Nothing" ? $ : p;
      return h.tag === "Nothing" ? m : h;
    }
    if (l.tag === "Nothing")
      return J;
    f();
  }
  if (_.tag === "Nothing")
    return J;
  f();
}, dm = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if ((c + 2 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const a = _m(t)(n)(c)(e);
      if (a.tag === "Just") {
        s = !1, u = a._1;
        continue;
      }
      if (a.tag === "Nothing") {
        i = c + 1 | 0;
        continue;
      }
      f();
    }
    return u;
  })(0);
}, hm = (t) => {
  const n = (e) => {
    let r = e, o = !0, i;
    for (; o; ) {
      const s = r, u = Lo(bo(lm(t)(dm(t)(s))));
      if (u.length < s.length) {
        r = u;
        continue;
      }
      o = !1, i = u;
    }
    return i;
  };
  return (e) => n(Lo(bo(e)));
}, pm = (t) => (n) => (e) => (r) => {
  const o = gn(e)(r), i = ln(e)(r), s = ft((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = Lt((a) => (g) => at.compare(a.x)(g.x))(s);
    return 0 < c.length ? c[0].x - 1 : (e + r) / 2;
  }
  const u = Lt((c) => (a) => at.compare(a.x)(c.x))(z((c) => ({ ...c, x: c.x + c.w }))(s));
  return 0 < u.length ? u[0].x + 1 : (e + r) / 2;
}, $m = (t) => (n) => (e) => (r) => {
  const o = gn(e)(r), i = ln(e)(r), s = ft((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = Lt((a) => (g) => at.compare(a.y)(g.y))(s);
    return 0 < c.length ? c[0].y - 1 : (e + r) / 2;
  }
  const u = Lt((c) => (a) => at.compare(a.y)(c.y))(z((c) => ({ ...c, y: c.y + c.h }))(s));
  return 0 < u.length ? u[0].y + 1 : (e + r) / 2;
}, mm = (t) => (n) => (e) => (r) => {
  const o = gn(e)(r), i = ln(e)(r), s = ft((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = Lt((a) => (g) => at.compare(g.x)(a.x))(z((a) => ({ ...a, x: a.x + a.w }))(s));
    return 0 < c.length ? c[0].x : (e + r) / 2;
  }
  const u = Lt((c) => (a) => at.compare(c.x)(a.x))(s);
  return 0 < u.length ? u[0].x - 1 : (e + r) / 2;
}, ym = (t) => (n) => (e) => (r) => {
  const o = gn(e)(r), i = ln(e)(r), s = ft((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = Lt((a) => (g) => at.compare(g.y)(a.y))(z((a) => ({ ...a, y: a.y + a.h }))(s));
    return 0 < c.length ? c[0].y : (e + r) / 2;
  }
  const u = Lt((c) => (a) => at.compare(c.y)(a.y))(s);
  return 0 < u.length ? u[0].y - 1 : (e + r) / 2;
}, z0 = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const c = r, a = o, g = i;
    if (g > 100) {
      s = !1, u = a;
      continue;
    }
    if (!c(a + g)) {
      s = !1, u = a + g;
      continue;
    }
    if (!c(a - g)) {
      s = !1, u = a - g;
      continue;
    }
    r = c, o = a, i = g + 1;
  }
  return u;
}, ga = (t) => (n) => (e) => (r) => (o) => {
  const i = gn(n)(e), s = ln(n)(e);
  if (!ro(i)(s)(r)(t))
    return r;
  if (!ro(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return ro(i)(s)(u)(t) ? z0((c) => ro(i)(s)(c)(t))(u)(1) : u;
}, Nm = (t) => (n) => (e) => (r) => (o) => {
  const i = gn(n)(e), s = ln(n)(e);
  if (!oo(i)(s)(r)(t))
    return r;
  if (!oo(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return oo(i)(s)(u)(t) ? z0((c) => oo(i)(s)(c)(t))(u)(1) : u;
}, xm = (t) => (n) => (e) => (r) => {
  const o = gn(n)(e), i = ln(n)(e), s = ft((a) => r >= a.x && r < a.x + a.w && a.y + a.h > o && a.y < i, t), u = x((a) => (g) => ln(a)(g.x + g.w + 4))(r + 4)(s), c = x((a) => (g) => gn(a)(g.x - 4))(r - 4)(s);
  return (() => {
    const a = u - r, g = c - r;
    return (a < 0 ? -a : a) <= (g < 0 ? -g : g);
  })() ? u : c;
}, Jm = (t) => (n) => (e) => (r) => {
  const o = gn(n)(e), i = ln(n)(e), s = ft((a) => r >= a.y && r < a.y + a.h && a.x + a.w > o && a.x < i, t), u = x((a) => (g) => ln(a)(g.y + g.h + 4))(r + 4)(s), c = x((a) => (g) => gn(a)(g.y - 4))(r - 4)(s);
  return (() => {
    const a = u - r, g = c - r;
    return (a < 0 ? -a : a) <= (g < 0 ? -g : g);
  })() ? u : c;
}, Tm = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = (() => {
    if (r === "South")
      return b(o._1, o._2 + 4);
    if (r === "North")
      return b(o._1, o._2 - 4);
    if (r === "East")
      return b(o._1 + 4, o._2);
    if (r === "West")
      return b(o._1 - 4, o._2);
    f();
  })(), c = (() => {
    if (i === "South")
      return b(s._1, s._2 + 4);
    if (i === "North")
      return b(s._1, s._2 - 4);
    if (i === "East")
      return b(s._1 + 4, s._2);
    if (i === "West")
      return b(s._1 - 4, s._2);
    f();
  })(), a = (w, k, L) => !ki(n)(gn(k)(L))(ln(k)(L))(w), g = (w, k, L) => !ki(e)(gn(k)(L))(ln(k)(L))(w), _ = (w, k, L, P) => t.tag === "Just" && !po(e)(gn(w)(k))(ln(w)(k))(t._1) ? t._1 : Nm(n)(w)(k)(L)(P), d = (w, k, L, P) => {
    if (w === L) {
      const V = xm(n)(k)(P)(w), X = $m(n)(w)(k)(P), I = ym(n)(w)(k)(P);
      return [
        { start: b(w, k), end: b(w, X), direction: tn },
        { start: b(w, X), end: b(V, X), direction: Zt },
        { start: b(V, X), end: b(V, I), direction: tn },
        { start: b(V, I), end: b(L, I), direction: Zt },
        { start: b(L, I), end: b(L, P), direction: tn }
      ];
    }
    const D = _(w, L, k, P);
    return [
      { start: b(w, k), end: b(w, D), direction: tn },
      { start: b(w, D), end: b(L, D), direction: Zt },
      { start: b(L, D), end: b(L, P), direction: tn }
    ];
  }, l = (w, k, L, P) => {
    if (k === P) {
      const V = Jm(n)(w)(L)(k), X = pm(n)(k)(w)(L), I = mm(n)(k)(w)(L);
      return [
        { start: b(w, k), end: b(X, k), direction: Zt },
        { start: b(X, k), end: b(X, V), direction: tn },
        { start: b(X, V), end: b(I, V), direction: Zt },
        { start: b(I, V), end: b(I, P), direction: tn },
        { start: b(I, P), end: b(L, P), direction: Zt }
      ];
    }
    const D = ga(n)(k)(P)(w)(L);
    return [
      { start: b(w, k), end: b(D, k), direction: Zt },
      { start: b(D, k), end: b(D, P), direction: tn },
      { start: b(D, P), end: b(L, P), direction: Zt }
    ];
  }, h = (w, k, L) => !po(n)(gn(k)(L))(ln(k)(L))(w), p = (w, k, L) => !po(e)(gn(k)(L))(ln(k)(L))(w), $ = (w, k, L, P) => {
    if (p(k, w, L) && g(L, k, P))
      return [
        { start: b(w, k), end: b(L, k), direction: Zt },
        { start: b(L, k), end: b(L, P), direction: tn }
      ];
    const D = ga(n)(k)(P)(w)(L);
    return [
      { start: b(w, k), end: b(D, k), direction: Zt },
      { start: b(D, k), end: b(D, P), direction: tn },
      { start: b(D, P), end: b(L, P), direction: Zt }
    ];
  }, m = (w, k, L, P) => {
    if (g(w, k, P) && p(P, w, L))
      return [
        { start: b(w, k), end: b(w, P), direction: tn },
        { start: b(w, P), end: b(L, P), direction: Zt }
      ];
    const D = _(w, L, k, P);
    return [
      { start: b(w, k), end: b(w, D), direction: tn },
      { start: b(w, D), end: b(L, D), direction: Zt },
      { start: b(L, D), end: b(L, P), direction: tn }
    ];
  }, y = (() => {
    if (r === "South")
      return i === "North" ? u._1 === c._1 && a(u._1, u._2, c._2) ? [{ start: b(u._1, u._2), end: b(c._1, c._2), direction: tn }] : d(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? m(u._1, u._2, c._1, c._2) : d(u._1, u._2, c._1, c._2);
    if (r === "North")
      return i === "South" ? u._1 === c._1 && a(u._1, u._2, c._2) ? [{ start: b(u._1, u._2), end: b(c._1, c._2), direction: tn }] : d(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? m(u._1, u._2, c._1, c._2) : d(u._1, u._2, c._1, c._2);
    if (r === "East")
      return i === "West" ? u._2 === c._2 && h(u._2, u._1, c._1) ? [{ start: b(u._1, u._2), end: b(c._1, c._2), direction: Zt }] : l(u._1, u._2, c._1, c._2) : i === "North" || i === "South" ? $(u._1, u._2, c._1, c._2) : d(u._1, u._2, c._1, c._2);
    if (r === "West") {
      if (i === "East")
        return u._2 === c._2 && h(u._2, u._1, c._1) ? [{ start: b(u._1, u._2), end: b(c._1, c._2), direction: Zt }] : l(u._1, u._2, c._1, c._2);
      if (i === "North" || i === "South")
        return $(u._1, u._2, c._1, c._2);
    }
    return d(u._1, u._2, c._1, c._2);
  })(), N = (() => {
    if (r === "South" || r === "North")
      return tn;
    if (r === "East" || r === "West")
      return Zt;
    f();
  })(), T = {
    start: b(c._1, c._2),
    end: b(s._1, s._2),
    direction: (() => {
      if (i === "South" || i === "North")
        return tn;
      if (i === "East" || i === "West")
        return Zt;
      f();
    })()
  };
  return u._1 === c._1 && u._2 === c._2 ? [{ start: b(o._1, o._2), end: b(s._1, s._2), direction: N }] : fm({ start: b(o._1, o._2), end: b(u._1, u._2), direction: N })(y)(T);
}, vm = /* @__PURE__ */ z((t) => ({ x: t.position._1 * ri - 2, y: t.position._2 * ri - 2, w: t.size._1 * ri + 4, h: t.size._2 * ri + 4 })), bi = /* @__PURE__ */ nn(C)(Ht), Le = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Cs = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, wm = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t._1)(s._3._1);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (t._2 === "North") {
        if (s._3._2 === "North") {
          o = !1, i = v("Just", s._4);
          continue;
        }
        r = s._5;
        continue;
      }
      if (s._3._2 === "North") {
        r = s._6;
        continue;
      }
      if (t._2 === "South") {
        if (s._3._2 === "South") {
          o = !1, i = v("Just", s._4);
          continue;
        }
        r = s._5;
        continue;
      }
      if (s._3._2 === "South") {
        r = s._6;
        continue;
      }
      if (t._2 === "East") {
        if (s._3._2 === "East") {
          o = !1, i = v("Just", s._4);
          continue;
        }
        r = s._5;
        continue;
      }
      if (s._3._2 === "East") {
        r = s._6;
        continue;
      }
      if (t._2 === "West" && s._3._2 === "West") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, la = (t) => (n) => {
  const e = n.position._1 + n.size._1, r = n.position._2 * 2 + n.size._2, o = n.position._1 * 2 + n.size._1, i = n.position._2 + n.size._2;
  if (t === "South")
    return b(o, i * 2);
  if (t === "North")
    return b(o, n.position._2 * 2);
  if (t === "East")
    return b(e * 2, r);
  if (t === "West")
    return b(n.position._1 * 2, r);
  f();
}, Ps = (t) => (n) => {
  const e = et(4);
  if (t === "South")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "North")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "East")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  if (t === "West")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  f();
}, _a = (t) => (n) => x((e) => (r) => wt(t)(rn)(n(r))([r])(e))(A), da = (t) => (n) => (e) => (r) => {
  const o = (t === "South" || t === "North") && (n === "East" || n === "West") && (() => {
    if (t === "South")
      return r._2 > e._2;
    if (t === "North")
      return r._2 < e._2;
    if (t === "East")
      return r._2 > e._2;
    if (t === "West")
      return r._2 < e._2;
    f();
  })() && (() => {
    if (n === "East")
      return e._1 > r._1;
    if (n === "West" || n === "North")
      return e._1 < r._1;
    if (n === "South")
      return e._1 > r._1;
    f();
  })(), i = (t === "East" || t === "West") && (n === "North" || n === "South") && (() => {
    if (t === "South")
      return r._1 > e._1;
    if (t === "North")
      return r._1 < e._1;
    if (t === "East")
      return r._1 > e._1;
    if (t === "West")
      return r._1 < e._1;
    f();
  })() && (() => {
    if (n === "East")
      return e._2 > r._2;
    if (n === "West" || n === "North")
      return e._2 < r._2;
    if (n === "South")
      return e._2 > r._2;
    f();
  })();
  return (t === "South" ? n === "North" && e._1 === r._1 && r._2 > e._2 : t === "North" ? n === "South" && e._1 === r._1 && r._2 < e._2 : t === "East" ? n === "West" && e._2 === r._2 && r._1 > e._1 : t === "West" && n === "East" && e._2 === r._2 && r._1 < e._1) ? 0 : o || i ? 1 : 2;
}, q0 = (t) => (n) => {
  const e = t.hi - t.lo, r = (t.lo + t.hi) / 2, o = n.length;
  return o === 0 ? A : bi(o === 1 ? z((i) => b(i, r))(n) : Ft((i) => (s) => b(s, t.lo + et(i + 1 | 0) * e / et(o + 1 | 0)))(n));
}, Y0 = (t) => (n) => (e) => (r) => (o) => {
  const i = _a(C)((l) => l.to.node)(t), s = _a(C)((l) => l.from.node)(t), u = x((l) => (h) => U(C)(h.node)(h)(l))(A)(n), c = (l, h, p) => {
    const $ = Le(l)(u);
    if ($.tag === "Nothing")
      return b(0, 0);
    if ($.tag === "Just") {
      const m = Le(l)(e);
      if (m.tag === "Nothing") {
        const y = et(4);
        if (p === "South")
          return b($._1.position._1 * y + $._1.size._1 * y / 2, ($._1.position._2 + $._1.size._2) * y);
        if (p === "North")
          return b($._1.position._1 * y + $._1.size._1 * y / 2, $._1.position._2 * y);
        if (p === "East")
          return b(($._1.position._1 + $._1.size._1) * y, $._1.position._2 * y + $._1.size._2 * y / 2);
        if (p === "West")
          return b($._1.position._1 * y, $._1.position._2 * y + $._1.size._2 * y / 2);
        f();
      }
      if (m.tag === "Just") {
        const y = Ut((N) => N.id === h)(m._1);
        if (y.tag === "Nothing") {
          const N = et(4);
          if (p === "South")
            return b($._1.position._1 * N + $._1.size._1 * N / 2, ($._1.position._2 + $._1.size._2) * N);
          if (p === "North")
            return b($._1.position._1 * N + $._1.size._1 * N / 2, $._1.position._2 * N);
          if (p === "East")
            return b(($._1.position._1 + $._1.size._1) * N, $._1.position._2 * N + $._1.size._2 * N / 2);
          if (p === "West")
            return b($._1.position._1 * N, $._1.position._2 * N + $._1.size._2 * N / 2);
          f();
        }
        if (y.tag === "Just") {
          const N = et(4);
          if (y._1.side === "North")
            return b($._1.position._1 * N + et(y._1.offset) * N, $._1.position._2 * N);
          if (y._1.side === "South")
            return b($._1.position._1 * N + et(y._1.offset) * N, ($._1.position._2 + $._1.size._2) * N);
          if (y._1.side === "East")
            return b(($._1.position._1 + $._1.size._1) * N, $._1.position._2 * N + et(y._1.offset) * N);
          if (y._1.side === "West")
            return b($._1.position._1 * N, $._1.position._2 * N + et(y._1.offset) * N);
        }
      }
    }
    f();
  }, a = bi(Tt(r)((l) => {
    if (l.nodes.length <= 2)
      return [];
    const h = et(4);
    if (1 < l.nodes.length) {
      const p = Le(l.nodes[1])(u);
      if (p.tag === "Nothing")
        return [];
      if (p.tag === "Just") {
        const $ = p._1.position._1 * h + p._1.size._1 * h / 2;
        return z((m) => b(m, $))(Tn(
          (m) => (y) => l.edgeId + ":" + m + "->" + y,
          l.nodes,
          bt(1, l.nodes.length, l.nodes)
        ));
      }
      f();
    }
    return [];
  })), g = (l) => {
    const h = Le(l.from.node)(u), p = Le(l.to.node)(u);
    if (h.tag === "Just" && p.tag === "Just") {
      const $ = h._1, m = p._1, y = Lt((N) => (T) => it.compare(N.score)(T.score))(z((N) => {
        const T = N._1, w = N._2;
        return {
          from: T,
          to: w,
          score: (() => {
            const k = (V, X, I, B, nt) => {
              const ut = Ps(V)(X), Y = Ps(V)(I);
              return ut.lo < Y.hi && Y.lo < ut.hi && (T === "South" ? w === "North" && nt._2 > B._2 : T === "North" ? w === "South" && nt._2 < B._2 : T === "East" ? w === "West" && nt._1 > B._1 : T === "West" && w === "East" && nt._1 < B._1) ? 0 : da(T)(w)(B)(nt);
            }, L = la(T)($), P = la(w)(m), D = da(T)(w)(L)(P);
            return (() => {
              if (D > 0) {
                if (T === "South")
                  return w === "North" ? k(hn, $, m, L, P) * 10 | 0 : D * 10 | 0;
                if (T === "North")
                  return w === "South" ? k(dn, $, m, L, P) * 10 | 0 : D * 10 | 0;
                if (T === "East")
                  return w === "West" ? k(Se, $, m, L, P) * 10 | 0 : D * 10 | 0;
                if (T === "West" && w === "East")
                  return k(Ce, $, m, L, P) * 10 | 0;
              }
              return D * 10 | 0;
            })() + (T === "South" ? w === "North" ? 0 : 15 : T === "North" ? w === "South" ? 0 : 15 : T === "East" ? w === "West" ? 5 : 15 : T === "West" && w === "East" ? 5 : 15) | 0;
          })()
        };
      })([
        b(hn, dn),
        b(Se, dn),
        b(Ce, dn),
        b(hn, Se),
        b(hn, Ce),
        b(dn, hn),
        b(dn, Se),
        b(dn, Ce),
        b(Se, hn),
        b(Ce, hn),
        b(Se, Ce),
        b(Ce, Se)
      ]));
      if (0 < y.length)
        return { from: y[0].from, to: y[0].to };
    }
    return { from: hn, to: dn };
  }, _ = bi(z((l) => b(l.id, g(l)))(t)), d = (l, h, p, $, m, y) => {
    const N = et(4), T = Le(h)(u);
    if (T.tag === "Nothing")
      return b(0, 0);
    if (T.tag === "Just") {
      const w = wm(b(p, l))(o);
      if (w.tag === "Just") {
        const k = T._1.position._1 * N + w._1, L = et(4);
        if (l === "South")
          return b(k, (T._1.position._2 + T._1.size._2) * L);
        if (l === "North")
          return b(k, T._1.position._2 * L);
        if (l === "East")
          return b((T._1.position._1 + T._1.size._1) * L, k);
        if (l === "West")
          return b(T._1.position._1 * L, k);
        f();
      }
      if (w.tag === "Nothing") {
        const k = Ps(l)(T._1), L = (k.lo + k.hi) / 2, P = Cs(p)(q0(k)(z((X) => X.id)(Lt((X) => (I) => at.compare(m(l)(X))(m(l)(I)))(ft(
          (X) => {
            const I = Cs(X.id)(_);
            if (I.tag === "Just") {
              const B = y(I._1);
              return B === "North" ? l === "North" : B === "South" ? l === "South" : B === "East" ? l === "East" : B === "West" && l === "West";
            }
            if (I.tag === "Nothing")
              return !0;
            f();
          },
          (() => {
            const X = Le(h)($);
            if (X.tag === "Nothing")
              return [];
            if (X.tag === "Just")
              return X._1;
            f();
          })()
        ))))), D = (() => {
          if (P.tag === "Nothing")
            return L;
          if (P.tag === "Just")
            return P._1;
          f();
        })(), V = et(4);
        if (l === "South")
          return b(D, (T._1.position._2 + T._1.size._2) * V);
        if (l === "North")
          return b(D, T._1.position._2 * V);
        if (l === "East")
          return b((T._1.position._1 + T._1.size._1) * V, D);
        if (l === "West")
          return b(T._1.position._1 * V, D);
      }
    }
    f();
  };
  return z((l) => {
    const h = Cs(l.edge.id)(a);
    if (h.tag === "Nothing")
      return l;
    if (h.tag === "Just")
      return {
        ...l,
        fromPos: mn(3)(l.edge.from.node) === "$d:" ? b(h._1, l.fromPos._2) : l.fromPos,
        toPos: mn(3)(l.edge.to.node) === "$d:" ? b(h._1, l.toPos._2) : l.toPos
      };
    f();
  })(z((l) => {
    if (l.from.port.tag === "Just" && l.to.port.tag === "Just")
      return {
        edge: l,
        fromPos: c(l.from.node, l.from.port._1, hn),
        toPos: c(l.to.node, l.to.port._1, dn),
        fromSide: hn,
        toSide: dn
      };
    const h = g(l);
    return {
      edge: l,
      fromPos: d(
        h.from,
        l.from.node,
        l.id,
        s,
        (p) => ($) => {
          const m = Le($.to.node)(u);
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just") {
            const y = et(4);
            if (p === "South" || p === "North")
              return m._1.position._1 * y + m._1.size._1 * y / 2;
            if (p === "East" || p === "West")
              return m._1.position._2 * y + m._1.size._2 * y / 2;
          }
          f();
        },
        (p) => p.from
      ),
      toPos: d(
        h.to,
        l.to.node,
        l.id,
        i,
        (p) => ($) => {
          const m = Le($.from.node)(u);
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just") {
            const y = et(4);
            if (p === "South" || p === "North")
              return m._1.position._1 * y + m._1.size._1 * y / 2;
            if (p === "East" || p === "West")
              return m._1.position._2 * y + m._1.size._2 * y / 2;
          }
          f();
        },
        (p) => p.to
      ),
      fromSide: h.from,
      toSide: h.to
    };
  })(t));
}, X0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Sr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, km = /* @__PURE__ */ (() => {
  const t = ne.unfoldr(we);
  return (n) => t(Mn("IterNode", n, ve));
})(), au = (t) => (n) => t.gapTop + 1 * et(4) + et(n) * 2.5 * et(4), bm = (t) => (n) => {
  const e = X0(n.edge.id)(t);
  if (e.tag === "Just") {
    if (e._1.partner.tag === "Just")
      return v("Just", { slot1Y: au(e._1)(e._1.slot), splitX: e._1.partner._1.splitX, slot2Y: au(e._1)(e._1.partner._1.slot) });
    if (e._1.partner.tag === "Nothing")
      return J;
    f();
  }
  if (e.tag === "Nothing")
    return J;
  f();
}, Lm = (t) => (n) => {
  const e = x((r) => (o) => U(C)(o.node)(o)(r))(A)(n);
  return zn(Ft((r) => (o) => {
    const i = Sr(o.node)(e);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just") {
      const s = i._1;
      return Ft((u) => (c) => {
        const a = o.edges.length, g = et(4), _ = s.position._1 * g, d = s.position._2 * g, l = s.size._2 * g, h = et((2 * a | 0) + 1 | 0), p = d + l * et(a - u | 0) / h, $ = d + l * et((a + 1 | 0) + u | 0) / h, m = _ - g * 2.5 * et(u + 1 | 0), y = [
          { start: b(_, p), end: b(m, p), direction: Zt },
          { start: b(m, p), end: b(m, $), direction: tn },
          { start: b(m, $), end: b(_, $), direction: Zt }
        ];
        return { edge: c.id, segments: y, bends: Tn((N) => (T) => N.end, y, bt(1, 3, y)), bendType: [], jumps: [], reversed: !1 };
      })(o.edges);
    }
    f();
  })(z((r) => ({ node: r._1, edges: r._2 }))(km(x((r) => (o) => wt(C)(rn)(o.from.node)([
    o
  ])(r))(A)(t)))));
}, Em = (t) => (n) => {
  const e = x((i) => (s) => U(C)(s.node)(s)(i))(A)(n), r = (i) => {
    const s = Sr(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.position._1;
    f();
  }, o = (i) => {
    const s = Sr(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.layer;
    f();
  };
  return Lt((i) => (s) => {
    const u = it.compare(o(i.edge.from.node))(o(s.edge.from.node));
    if (u === "EQ") {
      const c = at.compare(r(i.edge.from.node))(r(s.edge.from.node));
      return c === "EQ" ? at.compare(r(i.edge.to.node))(r(s.edge.to.node)) : c;
    }
    return u;
  })(t);
}, An = (t) => {
  const n = et(4);
  return { x: t.position._1 * n - 2, y: t.position._2 * n - 2, w: t.size._1 * n + 4, h: t.size._2 * n + 4 };
}, Sm = (t) => t.from.node === t.to.node, Cm = (t) => (n) => (e) => (r) => {
  const o = hm(e)(Tm(t)(n)(e)(r.fromSide)(r.fromPos)(r.toSide)(r.toPos));
  return {
    edge: r.edge.id,
    segments: o,
    bends: Tn((i) => (s) => i.end, o, bt(1, o.length, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, Pm = (t) => (n) => (e) => (r) => {
  const o = [
    { start: b(r.fromPos._1, r.fromPos._2), end: b(r.fromPos._1, t.slot1Y), direction: tn },
    { start: b(r.fromPos._1, t.slot1Y), end: b(t.splitX, t.slot1Y), direction: Zt },
    { start: b(t.splitX, t.slot1Y), end: b(t.splitX, t.slot2Y), direction: tn },
    { start: b(t.splitX, t.slot2Y), end: b(r.toPos._1, t.slot2Y), direction: Zt },
    { start: b(r.toPos._1, t.slot2Y), end: b(r.toPos._1, r.toPos._2), direction: tn }
  ];
  return {
    edge: r.edge.id,
    segments: o,
    bends: Tn((i) => (s) => i.end, o, bt(1, 5, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, Gm = (t) => (n) => (e) => {
  const r = Sr(t.edge.from.node)(e);
  if (r.tag === "Just") {
    const i = Sr(t.edge.to.node)(e);
    return i.tag === "Just" ? ft(
      (s) => !(s.h === An(r._1).h && s.w === An(r._1).w && s.x === An(r._1).x && s.y === An(r._1).y) && !(s.h === An(i._1).h && s.w === An(i._1).w && s.x === An(i._1).x && s.y === An(i._1).y),
      n
    ) : ft((s) => !(s.h === An(r._1).h && s.w === An(r._1).w && s.x === An(r._1).x && s.y === An(r._1).y), n);
  }
  const o = Sr(t.edge.to.node)(e);
  return o.tag === "Just" ? ft((i) => !(i.h === An(o._1).h && i.w === An(o._1).w && i.x === An(o._1).x && i.y === An(o._1).y), n) : ft((i) => !0, n);
}, Im = (t) => (n) => {
  const e = X0(n.edge.id)(t);
  if (e.tag === "Just")
    return v("Just", au(e._1)(e._1.slot));
  if (e.tag === "Nothing")
    return J;
  f();
}, Am = (t) => (n) => (e) => (r) => (o) => {
  const i = x((a) => (g) => U(C)(g.node)(g)(a))(A)(n), s = vm(n), u = Y0(ft((a) => a.from.node !== a.to.node, t))(n)(e)(r)(o), c = H0(u)(n);
  return [
    ...Lm(ft(Sm, t))(n),
    ...x((a) => (g) => {
      const _ = Gm(g)(s)(i), d = [..._, ...a.edgeObstacles], l = bm(c)(g), h = (() => {
        if (l.tag === "Just")
          return Pm(l._1)(_)(d)(g);
        if (l.tag === "Nothing")
          return Cm(Im(c)(g))(_)(d)(g);
        f();
      })();
      return { results: [...a.results, h], edgeObstacles: [...a.edgeObstacles, ...am(h.segments)] };
    })({ results: [], edgeObstacles: [] })(Em(u)(n)).results
  ];
}, Ve = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ue = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Fm = (t) => (n) => (e) => {
  if (t.start._1 !== n.start._1)
    return J;
  const r = Ue(Ve(t.start._2)(t.end._2))(Ve(n.start._2)(n.end._2)), o = Ve(Ue(t.start._2)(t.end._2))(Ue(n.start._2)(n.end._2));
  return r < o ? v("Just", { position: b(t.start._1, (r + o) / 2), crossingEdge: e }) : J;
}, Rm = (t) => (n) => (e) => {
  if (t.start._2 !== n.start._2)
    return J;
  const r = Ue(Ve(t.start._1)(t.end._1))(Ve(n.start._1)(n.end._1)), o = Ve(Ue(t.start._1)(t.end._1))(Ue(n.start._1)(n.end._1));
  return r < o ? v("Just", { position: b((r + o) / 2, t.start._2), crossingEdge: e }) : J;
}, Bm = (t) => (n) => (e) => {
  if (t.direction === "H")
    return Rm(t)(n)(e);
  if (t.direction === "V")
    return Fm(t)(n)(e);
  f();
}, Qm = (t) => (n) => (e) => {
  const r = t + 1 | 0, o = r < 1 ? e : bt(r, e.length, e);
  return Tt(n.segments)((i) => Tt(o)((s) => yt((u) => Bm(i)(u)(s.edge))(ft(
    (u) => u.direction === "H" ? i.direction === "H" : u.direction === "V" && i.direction === "V",
    s.segments
  ))));
}, Wm = (t) => (n) => (e) => n.start._1 > Ve(t.start._1)(t.end._1) && n.start._1 < Ue(t.start._1)(t.end._1) && t.start._2 > Ve(n.start._2)(n.end._2) && t.start._2 < Ue(n.start._2)(n.end._2) ? v("Just", { position: b(n.start._1, t.start._2), crossingEdge: e }) : J, Dm = (t) => (n) => Tt(ft((e) => e.direction === "H", t.segments))((e) => Tt(n)((r) => yt((o) => Wm(e)(o)(r.edge))(ft(
  (o) => o.direction === "V",
  r.segments
)))), Hm = (t) => (n) => (e) => [
  ...Dm(n)(ft((r) => r.edge !== n.edge, e)),
  ...Qm(t)(n)(e)
], ha = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, V0 = (t) => mn(3)(t) === "$d:", Om = (t) => (n) => (e) => x((r) => (o) => {
  const i = ha(o.from.node)(t), s = (() => {
    if (i.tag === "Nothing")
      return 0;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = ha(o.to.node)(t), c = (() => {
    if (u.tag === "Nothing")
      return -s;
    if (u.tag === "Just")
      return u._1 - s | 0;
    f();
  })();
  if (c <= 1)
    return { ...r, edges: [...r.edges, o], chains: [...r.chains, { edgeId: o.id, nodes: [o.from.node, o.to.node] }] };
  const a = o.id, g = z((d) => "$d:" + a + ":" + un(d))(At(1, c - 1 | 0)), _ = [o.from.node, ...g, o.to.node];
  return {
    ...r,
    layers: x((d) => (l) => {
      const h = l._2, p = $_(s + l._1 | 0)(($) => [...$, h])(d);
      if (p.tag === "Nothing")
        return d;
      if (p.tag === "Just")
        return p._1;
      f();
    })(r.layers)(Tn(Oe, At(1, c - 1 | 0), g)),
    edges: [
      ...r.edges,
      ...Tn(
        (d) => (l) => ({ id: a + ":" + d + "->" + l, from: { node: d, port: o.from.port }, to: { node: l, port: o.to.port } }),
        _,
        bt(1, _.length, _)
      )
    ],
    chains: [...r.chains, { edgeId: o.id, nodes: _ }]
  };
})({ layers: e, edges: [], chains: [] })(n), Li = /* @__PURE__ */ (() => {
  const t = {
    eq: (n) => (e) => n._1 === e._1 && (n._2 === "North" ? e._2 === "North" : n._2 === "South" ? e._2 === "South" : n._2 === "East" ? e._2 === "East" : n._2 === "West" && e._2 === "West")
  };
  return {
    compare: (n) => (e) => {
      const r = C.compare(n._1)(e._1);
      if (r === "LT")
        return Nn;
      if (r === "GT")
        return xn;
      if (n._2 === "North")
        return e._2 === "North" ? Gn : Nn;
      if (e._2 === "North")
        return xn;
      if (n._2 === "South")
        return e._2 === "South" ? Gn : Nn;
      if (e._2 === "South")
        return xn;
      if (n._2 === "East")
        return e._2 === "East" ? Gn : Nn;
      if (e._2 === "East")
        return xn;
      if (n._2 === "West" && e._2 === "West")
        return Gn;
      f();
    },
    Eq0: () => t
  };
})(), zm = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = Li.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, qm = /* @__PURE__ */ nn(C)(Ht), Gs = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ym = /* @__PURE__ */ nn(Li)(Ht), pa = /* @__PURE__ */ (() => {
  const t = ne.unfoldr(we);
  return (n) => t(Mn("IterNode", n, ve));
})(), Cr = (t) => (n) => (e) => (r) => {
  const o = zm(b(n, e))(t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just")
    return o._1;
  f();
}, U0 = (t) => (n) => (e) => {
  const r = qm(zn(z((s) => Ft((u) => (c) => b(c, u))(s))(t))), o = (s, u) => {
    if (s === "South") {
      const c = Gs(u.to.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    if (s === "North") {
      const c = Gs(u.from.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    return 0;
  }, i = (s) => x((u) => (c) => Pn(
    Li.compare,
    Cn,
    Ym(z((a) => b(b(a._1, s), a._2))(pa(q0({
      lo: 0,
      hi: (() => {
        const a = Gs(c._1)(e);
        if (a.tag === "Just")
          return a._1._1;
        if (a.tag === "Nothing")
          return mn(3)(c._1) === "$d:" ? 0 : 1;
        f();
      })()
    })(z((a) => a.id)(Lt((a) => (g) => it.compare(o(s, a))(o(s, g)))(c._2)))))),
    u
  ))(A)(pa(x((u) => (c) => c.from.node === c.to.node ? u : s === "South" ? wt(C)(rn)(c.from.node)([c])(u) : s === "North" ? wt(C)(rn)(c.to.node)([c])(u) : u)(A)(n)));
  return Pn(Li.compare, Cn, i(dn), i(hn));
}, K0 = (t) => t, M0 = (t) => t, j0 = (t) => t, Xm = /* @__PURE__ */ x((t) => (n) => U(C)(n)()(t))(A), Vm = /* @__PURE__ */ (() => {
  const t = ne.unfoldr((n) => {
    if (n.tag === "Nil")
      return J;
    if (n.tag === "Cons")
      return v("Just", b(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, zt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Yt);
  })());
})(), st = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, re = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, xe = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, pe = /* @__PURE__ */ nn(C)(Ht), Is = /* @__PURE__ */ Pf(C), fu = /* @__PURE__ */ (() => {
  const t = ne.unfoldr(we);
  return (n) => t(Mn("IterNode", n, ve));
})(), Um = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Km = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = it.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, $a = /* @__PURE__ */ j0("VDown"), ma = /* @__PURE__ */ j0("VUp"), Mm = /* @__PURE__ */ M0("ForwardPhase"), jm = /* @__PURE__ */ M0("StackPhase"), ya = /* @__PURE__ */ K0("HRight"), Na = /* @__PURE__ */ K0("HLeft"), xa = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, Zm = (t) => (n) => (e) => {
  const r = x((u) => (c) => wt(C)(on)(c.tgt)(1)(u))(A)(t), o = Vm(Xm([
    ...z((u) => u.src)(t),
    ...z((u) => u.tgt)(t),
    ...(() => {
      const u = (c, a) => {
        if (c.tag === "Leaf")
          return a;
        if (c.tag === "Node")
          return u(c._5, zt("Cons", c._4, u(c._6, a)));
        f();
      };
      return Et(Xt.foldr, u(n, Yt));
    })()
  ])), i = x((u) => (c) => wt(C)(rn)(c.src)([{ target: c.tgt, sep: c.sep }])(u))(A)(t);
  return ((u) => (c) => (a) => {
    let g = u, _ = c, d = a, l = !0, h;
    for (; l; ) {
      const p = g, $ = _, m = d, y = Rt((N) => J, (N) => (T) => v("Just", { head: N, tail: T }), p);
      if (y.tag === "Nothing") {
        l = !1, h = m;
        continue;
      }
      if (y.tag === "Just") {
        const N = st(y._1.head)(m), T = (() => {
          if (N.tag === "Nothing")
            return 0;
          if (N.tag === "Just")
            return N._1;
          f();
        })(), w = x((k) => (L) => {
          const P = st(L.target)(k.result), D = T + L.sep, V = st(L.target)(k.indeg), X = (() => {
            if (V.tag === "Nothing")
              return -1;
            if (V.tag === "Just")
              return V._1 - 1 | 0;
            f();
          })();
          return {
            newQueue: X === 0 ? [...k.newQueue, L.target] : k.newQueue,
            result: U(C)(L.target)((() => {
              if (P.tag === "Nothing")
                return D;
              if (P.tag === "Just") {
                if (e === "VDown")
                  return re(P._1)(D);
                if (e === "VUp")
                  return xe(P._1)(D);
              }
              f();
            })())(k.result),
            indeg: U(C)(L.target)(X)(k.indeg)
          };
        })({ newQueue: [], result: m, indeg: $ })((() => {
          const k = st(y._1.head)(i);
          if (k.tag === "Nothing")
            return [];
          if (k.tag === "Just")
            return k._1;
          f();
        })());
        g = [...y._1.tail, ...w.newQueue], _ = w.indeg, d = w.result;
        continue;
      }
      f();
    }
    return h;
  })(ft(
    (u) => {
      const c = st(u)(r);
      if (c.tag === "Nothing")
        return !0;
      if (c.tag === "Just")
        return c._1 === 0;
      f();
    },
    o
  ))(r)(x((u) => (c) => U(C)(c)(0)(u))(A)(o));
}, t2 = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, zt("Cons", i._4, n(i._6, s)));
    f();
  }, e = Et(Xt.foldr, n(t, Yt)), r = x(re)(999999)(e);
  if (r === 0 || e.length === 0)
    return t;
  const o = (i) => {
    if (i.tag === "Leaf")
      return A;
    if (i.tag === "Node")
      return Ot("Node", i._1, i._2, i._3, i._4 - r, o(i._5), o(i._6));
    f();
  };
  return o(t);
}, Z0 = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, zt("Cons", i._4, n(i._6, s)));
    f();
  }, e = n(t, Yt), r = (i) => (s) => {
    let u = i, c = s, a = !0, g;
    for (; a; ) {
      const _ = u, d = c;
      if (d.tag === "Nil") {
        a = !1, g = _;
        continue;
      }
      if (d.tag === "Cons") {
        u = xe(_)(d._1), c = d._2;
        continue;
      }
      f();
    }
    return g;
  }, o = (i) => (s) => {
    let u = i, c = s, a = !0, g;
    for (; a; ) {
      const _ = u, d = c;
      if (d.tag === "Nil") {
        a = !1, g = _;
        continue;
      }
      if (d.tag === "Cons") {
        u = re(_)(d._1), c = d._2;
        continue;
      }
      f();
    }
    return g;
  };
  return r(-999999)(e) - o(999999)(e);
}, io = (t) => (n) => ((r) => (o) => {
  let i = r, s = o, u = !0, c;
  for (; u; ) {
    const a = i, g = s;
    if (a === n) {
      u = !1, c = g;
      continue;
    }
    i = (() => {
      const _ = st(a)(t.align);
      if (_.tag === "Nothing")
        return n;
      if (_.tag === "Just")
        return _._1;
      f();
    })(), s = [...g, a];
  }
  return c;
})((() => {
  const r = st(n)(t.align);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just")
    return r._1;
  f();
})())([n]), n2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (g) => {
  const _ = (E, S, H) => {
    const G = E.from.node === S ? E.from.port : E.to.node === S ? E.to.port : J;
    if (G.tag === "Just") {
      const W = st(S)(o);
      if (W.tag === "Just") {
        const Q = Ut((j) => j.id === G._1)(W._1);
        if (Q.tag === "Just") {
          const j = et(Q._1.offset) * et(4);
          return H === "North" || H === "South" ? j : 0;
        }
        if (Q.tag === "Nothing") {
          const j = st(S)(r), q = Cr(s)(E.id)(H)((() => {
            if (j.tag === "Nothing")
              return 0.5;
            if (j.tag === "Just")
              return j._1._1 / 2;
            f();
          })());
          return H === "North" || H === "South" ? q : 0;
        }
        f();
      }
      if (W.tag === "Nothing") {
        const Q = st(S)(r), j = Cr(s)(E.id)(H)((() => {
          if (Q.tag === "Nothing")
            return 0.5;
          if (Q.tag === "Just")
            return Q._1._1 / 2;
          f();
        })());
        return H === "North" || H === "South" ? j : 0;
      }
      f();
    }
    if (G.tag === "Nothing") {
      const W = st(S)(r), Q = Cr(s)(E.id)(H)((() => {
        if (W.tag === "Nothing")
          return 0.5;
        if (W.tag === "Just")
          return W._1._1 / 2;
        f();
      })());
      return H === "North" || H === "South" ? Q : 0;
    }
    f();
  }, d = (E, S) => {
    if (E.from.node === S) {
      if (g === "HRight")
        return hn;
      if (g === "HLeft")
        return dn;
      f();
    }
    if (g === "HRight")
      return dn;
    if (g === "HLeft")
      return hn;
    f();
  }, l = (E, S, H) => x((G) => (W) => U(C)(W)((() => {
    const Q = st(W)(G);
    if (Q.tag === "Nothing")
      return 0 + S;
    if (Q.tag === "Just")
      return Q._1 + S;
    f();
  })())(G))(H)(io(c)(E)), h = (() => {
    if (g === "HRight")
      return e;
    if (g === "HLeft")
      return Jn(e);
    f();
  })(), p = (E) => {
    const S = st(E)(r);
    if (S.tag === "Nothing")
      return 1;
    if (S.tag === "Just")
      return S._1._1;
    f();
  }, $ = pe(zn(Ft((E) => (S) => z((H) => b(H, E))(S))(e))), m = (E, S) => mn(3)(E) === "$d:" && mn(3)(S) === "$d:" || mn(3)(E) === "$d:" || mn(3)(S) === "$d:" ? 10 : et(t.nodeGap), y = x((E) => (S) => Is((H) => v(
    "Just",
    [
      ...(() => {
        if (H.tag === "Nothing")
          return [];
        if (H.tag === "Just")
          return H._1;
        f();
      })(),
      S
    ]
  ))(S.to.node)(E))(A)(i), N = x((E) => (S) => Is((H) => v(
    "Just",
    [
      ...(() => {
        if (H.tag === "Nothing")
          return [];
        if (H.tag === "Just")
          return H._1;
        f();
      })(),
      S
    ]
  ))(S.from.node)(E))(A)(i), T = zn(e), w = x((E) => (S) => {
    const H = st(S)(c.root), G = (() => {
      if (H.tag === "Nothing")
        return S;
      if (H.tag === "Just")
        return H._1;
      f();
    })();
    return S === G ? E : Is((W) => v(
      "Just",
      (() => {
        if (W.tag === "Nothing")
          return !0;
        if (W.tag === "Just")
          return W._1;
        f();
      })() && mn(3)(S) === "$d:"
    ))(G)(E);
  })(pe(z((E) => b(E, !0))(Fr(C.compare)((() => {
    const E = (S, H) => {
      if (S.tag === "Leaf")
        return H;
      if (S.tag === "Node")
        return E(S._5, zt("Cons", S._4, E(S._6, H)));
      f();
    };
    return Et(Xt.foldr, E(c.root, Yt));
  })()))))(T), k = (E, S) => {
    const H = E.free, G = st(H)(c.root), W = (() => {
      if (G.tag === "Nothing")
        return H;
      if (G.tag === "Just")
        return G._1;
      f();
    })(), Q = st(W)(w), j = (() => {
      if (Q.tag === "Nothing")
        return !0;
      if (Q.tag === "Just")
        return Q._1;
      f();
    })();
    return x((q) => (O) => {
      if (q.edge.tag === "Just")
        return q;
      if (q.edge.tag === "Nothing") {
        if ((() => {
          const ct = st(W)(S.su);
          return !j && (() => {
            const lt = st(O.from.node)($);
            return O.from.node !== O.to.node && (() => {
              const Wt = st(O.to.node)($);
              return (() => {
                if (lt.tag === "Nothing")
                  return -1;
                if (lt.tag === "Just")
                  return lt._1;
                f();
              })() === (() => {
                if (Wt.tag === "Nothing")
                  return -1;
                if (Wt.tag === "Just")
                  return Wt._1;
                f();
              })();
            })();
          })() || (() => {
            if (ct.tag === "Nothing")
              return !1;
            if (ct.tag === "Just")
              return ct._1;
            f();
          })();
        })())
          return q;
        const rt = O.from.node === H ? O.to.node : O.from.node, Z = st(rt)(c.root), ot = (() => {
          if (Z.tag === "Nothing")
            return rt;
          if (Z.tag === "Just")
            return Z._1;
          f();
        })(), tt = ot !== W;
        return tt && (() => {
          const ct = st(ot)(S.blockFinished);
          if (ct.tag === "Nothing")
            return !1;
          if (ct.tag === "Just")
            return ct._1;
          f();
        })() ? { ...q, edge: v("Just", O), hasEdges: !0 } : { ...q, hasEdges: q.hasEdges || tt };
      }
      f();
    })({ edge: J, hasEdges: !1 })((() => {
      if (E.isRoot) {
        if (g === "HRight") {
          const q = st(H)(y);
          if (q.tag === "Nothing")
            return [];
          if (q.tag === "Just")
            return q._1;
          f();
        }
        if (g === "HLeft") {
          const q = st(H)(N);
          if (q.tag === "Nothing")
            return [];
          if (q.tag === "Just")
            return q._1;
        }
        f();
      }
      if (g === "HRight") {
        const q = st(H)(N);
        if (q.tag === "Nothing")
          return [];
        if (q.tag === "Just")
          return q._1;
        f();
      }
      if (g === "HLeft") {
        const q = st(H)(y);
        if (q.tag === "Nothing")
          return [];
        if (q.tag === "Just")
          return q._1;
      }
      f();
    })());
  }, L = (E, S, H, G) => {
    const W = (() => {
      if (a === "VDown")
        return -1e18;
      if (a === "VUp")
        return 1e18;
      f();
    })(), Q = { free: S, isRoot: H }, j = k(Q, G);
    if (j.edge.tag === "Nothing")
      return j.hasEdges ? { thresh: W, state: { ...G, queue: [...G.queue, Q] } } : { thresh: W, state: G };
    if (j.edge.tag === "Just") {
      const q = j.edge._1.from.node === S ? j.edge._1.to.node : j.edge._1.from.node;
      return {
        thresh: (() => {
          const O = st((() => {
            const tt = st(q)(c.root);
            if (tt.tag === "Nothing")
              return q;
            if (tt.tag === "Just")
              return tt._1;
            f();
          })())(G.x), rt = st(q)(u), Z = st(S)(u), ot = (() => {
            if (O.tag === "Just")
              return O._1;
            if (O.tag === "Nothing")
              return J;
            f();
          })();
          return (() => {
            if (ot.tag === "Nothing")
              return 0;
            if (ot.tag === "Just")
              return ot._1;
            f();
          })() + (() => {
            if (rt.tag === "Nothing")
              return 0;
            if (rt.tag === "Just")
              return rt._1;
            f();
          })() + _(
            j.edge._1,
            q,
            (() => {
              if (H) {
                if (g === "HRight")
                  return hn;
                if (g === "HLeft")
                  return dn;
                f();
              }
              if (g === "HRight")
                return dn;
              if (g === "HLeft")
                return hn;
              f();
            })()
          ) - (() => {
            if (Z.tag === "Nothing")
              return 0;
            if (Z.tag === "Just")
              return Z._1;
            f();
          })() - _(
            j.edge._1,
            S,
            (() => {
              if (H) {
                if (g === "HRight")
                  return dn;
                if (g === "HLeft")
                  return hn;
                f();
              }
              if (g === "HRight")
                return hn;
              if (g === "HLeft")
                return dn;
              f();
            })()
          );
        })(),
        state: {
          ...G,
          su: U(C)((() => {
            const O = st(j.edge._1.from.node)(c.root);
            if (O.tag === "Nothing")
              return j.edge._1.from.node;
            if (O.tag === "Just")
              return O._1;
            f();
          })())(!0)(U(C)((() => {
            const O = st(j.edge._1.to.node)(c.root);
            if (O.tag === "Nothing")
              return j.edge._1.to.node;
            if (O.tag === "Just")
              return O._1;
            f();
          })())(!0)(G.su))
        }
      };
    }
    f();
  }, P = (E, S, H, G) => {
    const W = S === E, Q = st(S)(c.align), j = (() => {
      if (Q.tag === "Nothing")
        return S === E;
      if (Q.tag === "Just")
        return Q._1 === E;
      f();
    })();
    if (!(W || j))
      return { thresh: H, state: G };
    const q = (() => {
      if (a === "VDown")
        return W && H <= -1e18;
      if (a === "VUp")
        return W && H >= 1e18;
      f();
    })() ? L(E, S, !0, G) : { thresh: H, state: G };
    return (() => {
      if (a === "VDown")
        return q.thresh <= -1e18 && j;
      if (a === "VUp")
        return q.thresh >= 1e18 && j;
      f();
    })() ? L(E, S, !1, q.state) : q;
  }, D = (E) => (S) => (H) => {
    const G = st(H)(n.nodeIndex), W = (() => {
      if (G.tag === "Nothing")
        return 0;
      if (G.tag === "Just")
        return G._1;
      f();
    })(), Q = Ut((Z) => Hn(le)(H)(Z))(h), j = (() => {
      if (Q.tag === "Nothing")
        return [];
      if (Q.tag === "Just")
        return Q._1;
      f();
    })(), q = j.length;
    if ((() => {
      if (a === "VDown")
        return W <= 0;
      if (a === "VUp")
        return W >= (q - 1 | 0);
      f();
    })()) {
      const Z = P(E, H, S.thresh, S.st);
      return { ...S, st: Z.state, thresh: Z.thresh };
    }
    const O = (() => {
      if (a === "VDown")
        return W - 1 | 0;
      if (a === "VUp")
        return W + 1 | 0;
      f();
    })(), rt = O >= 0 && O < j.length ? v("Just", j[O]) : J;
    if (rt.tag === "Nothing")
      return S;
    if (rt.tag === "Just") {
      const Z = st(rt._1)(c.root), ot = (() => {
        if (Z.tag === "Nothing")
          return rt._1;
        if (Z.tag === "Just")
          return Z._1;
        f();
      })(), tt = P(E, H, S.thresh, V(ot)(S.st)), ct = (() => {
        const jt = st(E)(tt.state.sink);
        if (jt.tag === "Nothing")
          return E === E;
        if (jt.tag === "Just")
          return jt._1 === E;
        f();
      })() ? {
        ...tt.state,
        sink: U(C)(E)((() => {
          const jt = st(ot)(tt.state.sink);
          if (jt.tag === "Nothing")
            return ot;
          if (jt.tag === "Just")
            return jt._1;
          f();
        })())(tt.state.sink)
      } : tt.state, lt = st(ot)(ct.sink), Wt = (() => {
        if (lt.tag === "Nothing")
          return ot;
        if (lt.tag === "Just")
          return lt._1;
        f();
      })(), vt = st(E)(ct.sink), Bt = (() => {
        if (vt.tag === "Nothing")
          return E;
        if (vt.tag === "Just")
          return vt._1;
        f();
      })();
      if (Bt === Wt) {
        const jt = st(ot)(ct.x), Ln = (() => {
          if (jt.tag === "Just")
            return jt._1;
          if (jt.tag === "Nothing")
            return J;
          f();
        })(), ee = (() => {
          if (Ln.tag === "Nothing")
            return 0;
          if (Ln.tag === "Just")
            return Ln._1;
          f();
        })(), Xn = st(E)(ct.x), yn = (() => {
          if (Xn.tag === "Just")
            return Xn._1;
          if (Xn.tag === "Nothing")
            return J;
          f();
        })(), Pt = (() => {
          if (yn.tag === "Nothing")
            return 0;
          if (yn.tag === "Just")
            return yn._1;
          f();
        })(), Gt = m(H, rt._1), Wn = st(rt._1)(u), Vn = st(H)(u), ke = (() => {
          if (Wn.tag === "Nothing")
            return 0;
          if (Wn.tag === "Just")
            return Wn._1;
          f();
        })() - (() => {
          if (Vn.tag === "Nothing")
            return 0;
          if (Vn.tag === "Just")
            return Vn._1;
          f();
        })();
        if (a === "VDown") {
          const be = xe(ee + ke + p(rt._1) + Gt)(tt.thresh);
          return {
            st: { ...ct, x: U(C)(E)(v("Just", S.initial ? be : xe(Pt)(be)))(ct.x) },
            initial: !1,
            thresh: tt.thresh
          };
        }
        if (a === "VUp") {
          const be = re(ee + ke - Gt - p(H))(tt.thresh);
          return {
            st: { ...ct, x: U(C)(E)(v("Just", S.initial ? be : re(Pt)(be)))(ct.x) },
            initial: !1,
            thresh: tt.thresh
          };
        }
        f();
      }
      const pt = st(ot)(ct.x), Jt = (() => {
        if (pt.tag === "Just")
          return pt._1;
        if (pt.tag === "Nothing")
          return J;
        f();
      })(), $t = (() => {
        if (Jt.tag === "Nothing")
          return 0;
        if (Jt.tag === "Just")
          return Jt._1;
        f();
      })(), mt = st(E)(ct.x), K = (() => {
        if (mt.tag === "Just")
          return mt._1;
        if (mt.tag === "Nothing")
          return J;
        f();
      })(), M = (() => {
        if (K.tag === "Nothing")
          return 0;
        if (K.tag === "Just")
          return K._1;
        f();
      })(), gt = et(t.nodeGap), _t = st(H)(u), xt = st(rt._1)(u), Nt = (() => {
        if (_t.tag === "Nothing")
          return 0;
        if (_t.tag === "Just")
          return _t._1;
        f();
      })() - (() => {
        if (xt.tag === "Nothing")
          return 0;
        if (xt.tag === "Just")
          return xt._1;
        f();
      })();
      return {
        st: {
          ...ct,
          classEdges: [
            ...ct.classEdges,
            {
              src: Bt,
              tgt: Wt,
              sep: (() => {
                if (a === "VDown")
                  return M + Nt - $t - p(rt._1) - gt;
                if (a === "VUp")
                  return M + Nt + p(H) + gt - $t;
                f();
              })()
            }
          ]
        },
        initial: S.initial,
        thresh: tt.thresh
      };
    }
    f();
  }, V = (E) => (S) => {
    const H = st(E)(S.x), G = (() => {
      if (H.tag === "Just")
        return H._1;
      if (H.tag === "Nothing")
        return J;
      f();
    })();
    if (G.tag === "Just")
      return S;
    if (G.tag === "Nothing") {
      const W = x(D(E))({
        st: { ...S, x: U(C)(E)(v("Just", 0))(S.x) },
        initial: !0,
        thresh: (() => {
          if (a === "VDown")
            return -1e18;
          if (a === "VUp")
            return 1e18;
          f();
        })()
      })(io(c)(E));
      return { ...W.st, blockFinished: U(C)(E)(!0)(W.st.blockFinished) };
    }
    f();
  }, X = x((E) => (S) => x((H) => (G) => {
    const W = st(G)(c.root), Q = (() => {
      if (W.tag === "Nothing")
        return G;
      if (W.tag === "Just")
        return W._1;
      f();
    })();
    return Q === G ? V(Q)(H) : H;
  })(E)((() => {
    if (a === "VDown")
      return S;
    if (a === "VUp")
      return Jn(S);
    f();
  })()))({
    x: pe(z((E) => b(E, J))(T)),
    sink: pe(z((E) => b(E, E))(T)),
    classEdges: [],
    su: A,
    blockFinished: A,
    queue: []
  })(h), I = Zm(X.classEdges)(X.sink)(a), B = (E, S, H, G) => {
    const W = st(S)(G), Q = st(S)(u);
    return (() => {
      if (W.tag === "Nothing")
        return 0;
      if (W.tag === "Just")
        return W._1;
      f();
    })() + (() => {
      if (Q.tag === "Nothing")
        return 0;
      if (Q.tag === "Just")
        return Q._1;
      f();
    })() + _(E, S, H);
  }, nt = pe(z((E) => b(E, !0))(Fr(C.compare)((() => {
    const E = (S, H) => {
      if (S.tag === "Leaf")
        return H;
      if (S.tag === "Node")
        return E(S._5, zt("Cons", S._4, E(S._6, H)));
      f();
    };
    return Et(Xt.foldr, E(c.root, Yt));
  })()))), ut = (E) => (S) => (H) => {
    const G = k(H, { su: S.su, blockFinished: nt }), W = {
      phase: E,
      ppFree: H.free,
      ppIsRoot: H.isRoot,
      edgeId: J,
      delta: 0,
      avail: 0,
      shift: 0,
      freeSu: (() => {
        const Q = st((() => {
          const j = st(H.free)(c.root);
          if (j.tag === "Nothing")
            return H.free;
          if (j.tag === "Just")
            return j._1;
          f();
        })())(S.su);
        if (Q.tag === "Nothing")
          return !1;
        if (Q.tag === "Just")
          return Q._1;
        f();
      })(),
      hasEdges: G.hasEdges,
      candCount: (() => {
        if (H.isRoot) {
          if (g === "HRight") {
            const Q = st(H.free)(y);
            if (Q.tag === "Nothing")
              return 0;
            if (Q.tag === "Just")
              return Q._1.length;
            f();
          }
          if (g === "HLeft") {
            const Q = st(H.free)(N);
            if (Q.tag === "Nothing")
              return 0;
            if (Q.tag === "Just")
              return Q._1.length;
          }
          f();
        }
        if (g === "HRight") {
          const Q = st(H.free)(N);
          if (Q.tag === "Nothing")
            return 0;
          if (Q.tag === "Just")
            return Q._1.length;
          f();
        }
        if (g === "HLeft") {
          const Q = st(H.free)(y);
          if (Q.tag === "Nothing")
            return 0;
          if (Q.tag === "Just")
            return Q._1.length;
        }
        f();
      })()
    };
    if (G.edge.tag === "Nothing")
      return { ...S, stack: [...S.stack, H], trace: [...S.trace, W], x: S.x };
    if (G.edge.tag === "Just") {
      const Q = G.edge._1.from.node === H.free ? b(G.edge._1.from.node, G.edge._1.to.node) : b(G.edge._1.to.node, G.edge._1.from.node), j = B(G.edge._1, Q._1, d(G.edge._1, Q._1), S.x) - B(G.edge._1, Q._2, d(G.edge._1, Q._2), S.x), q = st(Q._1)(c.root), O = (() => {
        if (q.tag === "Nothing")
          return Q._1;
        if (q.tag === "Just")
          return q._1;
        f();
      })(), rt = { ...W, edgeId: v("Just", G.edge._1.id), delta: j };
      if (j > 0 && j < 1e300) {
        const Z = x((ct) => (lt) => {
          const Wt = st(lt)($), vt = (() => {
            if (Wt.tag === "Nothing")
              return -1;
            if (Wt.tag === "Just")
              return Wt._1;
            f();
          })();
          if (vt >= 0 && vt < e.length) {
            const Jt = e[vt], $t = st(lt)(n.nodeIndex), mt = (() => {
              if ($t.tag === "Nothing")
                return -2;
              if ($t.tag === "Just")
                return $t._1 - 1 | 0;
              f();
            })();
            return mt >= 0 && mt < Jt.length ? re(ct)((() => {
              const K = st(lt)(S.x), M = st(lt)(u), gt = st(Jt[mt])(S.x), _t = st(Jt[mt])(u);
              return (() => {
                if (K.tag === "Nothing")
                  return 0;
                if (K.tag === "Just")
                  return K._1;
                f();
              })() + (() => {
                if (M.tag === "Nothing")
                  return 0;
                if (M.tag === "Just")
                  return M._1;
                f();
              })() - ((() => {
                if (gt.tag === "Nothing")
                  return 0;
                if (gt.tag === "Just")
                  return gt._1;
                f();
              })() + (() => {
                if (_t.tag === "Nothing")
                  return 0;
                if (_t.tag === "Just")
                  return _t._1;
                f();
              })() + p(Jt[mt]) + m(lt, Jt[mt]));
            })()) : ct;
          }
          const Bt = st(lt)(n.nodeIndex), pt = (() => {
            if (Bt.tag === "Nothing")
              return -2;
            if (Bt.tag === "Just")
              return Bt._1 - 1 | 0;
            f();
          })();
          return pt >= 0 && pt < 0 ? re(ct)((() => {
            const Jt = st(lt)(S.x), $t = st(lt)(u), mt = st([][pt])(S.x), K = st([][pt])(u);
            return (() => {
              if (Jt.tag === "Nothing")
                return 0;
              if (Jt.tag === "Just")
                return Jt._1;
              f();
            })() + (() => {
              if ($t.tag === "Nothing")
                return 0;
              if ($t.tag === "Just")
                return $t._1;
              f();
            })() - ((() => {
              if (mt.tag === "Nothing")
                return 0;
              if (mt.tag === "Just")
                return mt._1;
              f();
            })() + (() => {
              if (K.tag === "Nothing")
                return 0;
              if (K.tag === "Just")
                return K._1;
              f();
            })() + p([][pt]) + m(lt, [][pt]));
          })()) : ct;
        })(j)(io(c)(O)), ot = Z > 0 ? -Z : 0, tt = { ...S, x: Z > 0 ? l(O, ot, S.x) : S.x, trace: [...S.trace, { ...rt, avail: Z, shift: ot }] };
        return Z > 0 ? tt : { ...tt, stack: [...tt.stack, H] };
      }
      if (j < 0 && -j < 1e300) {
        const Z = x((ct) => (lt) => {
          const Wt = st(lt)($), vt = (() => {
            if (Wt.tag === "Nothing")
              return -1;
            if (Wt.tag === "Just")
              return Wt._1;
            f();
          })();
          if (vt >= 0 && vt < e.length) {
            const Jt = e[vt], $t = st(lt)(n.nodeIndex), mt = (() => {
              if ($t.tag === "Nothing")
                return 0;
              if ($t.tag === "Just")
                return $t._1 + 1 | 0;
              f();
            })();
            return mt >= 0 && mt < Jt.length ? re(ct)((() => {
              const K = st(Jt[mt])(S.x), M = st(Jt[mt])(u), gt = st(lt)(S.x), _t = st(lt)(u);
              return (() => {
                if (K.tag === "Nothing")
                  return 0;
                if (K.tag === "Just")
                  return K._1;
                f();
              })() + (() => {
                if (M.tag === "Nothing")
                  return 0;
                if (M.tag === "Just")
                  return M._1;
                f();
              })() - ((() => {
                if (gt.tag === "Nothing")
                  return 0;
                if (gt.tag === "Just")
                  return gt._1;
                f();
              })() + (() => {
                if (_t.tag === "Nothing")
                  return 0;
                if (_t.tag === "Just")
                  return _t._1;
                f();
              })() + p(lt) + m(lt, Jt[mt]));
            })()) : ct;
          }
          const Bt = st(lt)(n.nodeIndex), pt = (() => {
            if (Bt.tag === "Nothing")
              return 0;
            if (Bt.tag === "Just")
              return Bt._1 + 1 | 0;
            f();
          })();
          return pt >= 0 && pt < 0 ? re(ct)((() => {
            const Jt = st([][pt])(S.x), $t = st([][pt])(u), mt = st(lt)(S.x), K = st(lt)(u);
            return (() => {
              if (Jt.tag === "Nothing")
                return 0;
              if (Jt.tag === "Just")
                return Jt._1;
              f();
            })() + (() => {
              if ($t.tag === "Nothing")
                return 0;
              if ($t.tag === "Just")
                return $t._1;
              f();
            })() - ((() => {
              if (mt.tag === "Nothing")
                return 0;
              if (mt.tag === "Just")
                return mt._1;
              f();
            })() + (() => {
              if (K.tag === "Nothing")
                return 0;
              if (K.tag === "Just")
                return K._1;
              f();
            })() + p(lt) + m(lt, [][pt]));
          })()) : ct;
        })(-j)(io(c)(O)), ot = Z > 0 ? Z : 0, tt = { ...S, x: Z > 0 ? l(O, ot, S.x) : S.x, trace: [...S.trace, { ...rt, avail: Z, shift: ot }] };
        return Z > 0 ? tt : { ...tt, stack: [...tt.stack, H] };
      }
      return { ...S, stack: [...S.stack, H], trace: [...S.trace, rt], x: S.x };
    }
    f();
  }, Y = x(ut(Mm))({
    x: pe(z((E) => b(
      E,
      (() => {
        const S = st(E)(c.root), H = (() => {
          if (S.tag === "Nothing")
            return E;
          if (S.tag === "Just")
            return S._1;
          f();
        })(), G = st(H)(X.x), W = st((() => {
          const j = st(H)(X.sink);
          if (j.tag === "Nothing")
            return H;
          if (j.tag === "Just")
            return j._1;
          f();
        })())(I), Q = (() => {
          if (G.tag === "Just")
            return G._1;
          if (G.tag === "Nothing")
            return J;
          f();
        })();
        return (() => {
          if (Q.tag === "Nothing")
            return 0;
          if (Q.tag === "Just")
            return Q._1;
          f();
        })() + (() => {
          if (W.tag === "Nothing")
            return 0;
          if (W.tag === "Just")
            return W._1;
          f();
        })();
      })()
    ))(T)),
    su: X.su,
    stack: [],
    trace: []
  })(X.queue), F = x(ut(jm))({ ...Y, stack: [] })(Jn(Y.stack));
  return { x: F.x, queue: X.queue, trace: F.trace };
}, e2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (g) => n2(t)(n)(e)(r)(o)(i)(s)(u)(c)(a)(g).x, r2 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = (c, a, g) => {
    const _ = st(a)(e), d = (() => {
      if (_.tag === "Nothing")
        return 0.5;
      if (_.tag === "Just")
        return _._1._1 / 2;
      f();
    })(), l = c.from.node === a ? c.from.port : c.to.node === a ? c.to.port : J;
    if (l.tag === "Just") {
      const h = st(a)(n);
      if (h.tag === "Just") {
        const p = Ut(($) => $.id === l._1)(h._1);
        if (p.tag === "Just") {
          const $ = et(p._1.offset) * et(4);
          return g === "North" || g === "South" ? $ : 0;
        }
        if (p.tag === "Nothing") {
          const $ = Cr(o)(c.id)(g)(d);
          return g === "North" || g === "South" ? $ : 0;
        }
        f();
      }
      if (h.tag === "Nothing") {
        const p = Cr(o)(c.id)(g)(d);
        return g === "North" || g === "South" ? p : 0;
      }
      f();
    }
    if (l.tag === "Nothing") {
      const h = Cr(o)(c.id)(g)(d);
      return g === "North" || g === "South" ? h : 0;
    }
    f();
  }, u = (c) => (a) => (g) => (_) => {
    let d = c, l = a, h = g, p = _, $ = !0, m;
    for (; $; ) {
      const y = d, N = l, T = h, k = Rt((L) => J, (L) => (P) => v("Just", { head: L, tail: P }), p);
      if (k.tag === "Nothing") {
        $ = !1, m = y;
        continue;
      }
      if (k.tag === "Just") {
        const L = k._1.head, P = Ut((V) => V.from.node === T && V.to.node === L || V.from.node === L && V.to.node === T)(r), D = (() => {
          if (P.tag === "Nothing")
            return N + 0;
          if (P.tag === "Just")
            return N + (s(P._1, T, P._1.from.node === T ? hn : dn) - s(
              P._1,
              L,
              P._1.from.node === L ? hn : dn
            ));
          f();
        })();
        d = U(C)(L)(D)(y), l = D, h = L, p = k._1.tail;
        continue;
      }
      f();
    }
    return m;
  };
  return x((c) => (a) => {
    const g = Rt((l) => J, (l) => (h) => v("Just", { head: l, tail: h }), io(t)(a)), _ = (() => {
      if (g.tag === "Nothing")
        return U(C)(a)(0)(A);
      if (g.tag === "Just")
        return u(U(C)(g._1.head)(0)(A))(0)(g._1.head)(g._1.tail);
      f();
    })(), d = x((l) => (h) => xe(l)(-h._2))(0)(fu(_));
    return x((l) => (h) => U(C)(h._1)(h._2 + d)(l))(c)(fu(_));
  })(A)(Fr(C.compare)((() => {
    const c = (a, g) => {
      if (a.tag === "Leaf")
        return g;
      if (a.tag === "Node")
        return c(a._5, zt("Cons", a._4, c(a._6, g)));
      f();
    };
    return Et(Xt.foldr, c(t.root, Yt));
  })()));
}, o2 = (t) => (n) => {
  const e = (o, i, s) => mn(3)(i) === "$d:" && bf(
    V0,
    (() => {
      const u = st(i)(t.preds);
      if (u.tag === "Nothing")
        return [];
      if (u.tag === "Just")
        return u._1;
      f();
    })()
  ), r = (o) => (i) => (s) => (u) => (c) => (a) => (g) => {
    let _ = o, d = i, l = u, h = a, p = g, $ = !0, m;
    for (; $; ) {
      const y = _, N = d, T = l, w = h, k = p, L = N.length;
      if (k >= L) {
        $ = !1, m = y;
        continue;
      }
      const P = k >= 0 && k < N.length ? v("Just", N[k]) : J, D = (() => {
        if (P.tag === "Nothing")
          return "";
        if (P.tag === "Just")
          return P._1;
        f();
      })(), V = e(t, D);
      if (k === (L - 1 | 0) || V) {
        const X = (() => {
          if (V) {
            const I = st(D)(t.preds), B = (() => {
              if (I.tag === "Nothing")
                return [];
              if (I.tag === "Just")
                return I._1;
              f();
            })();
            if (0 < B.length) {
              const nt = T - 1 | 0, ut = st(B[0])(t.nodeIndex);
              if (ut.tag === "Nothing")
                return nt;
              if (ut.tag === "Just")
                return ut._1;
              f();
            }
          }
          return T - 1 | 0;
        })();
        _ = x((I) => (B) => {
          if (B >= 0 && B < N.length) {
            const nt = N[B];
            return e(t, nt) ? I : x((ut) => (Y) => {
              const F = st(Y)(t.nodeIndex), E = (() => {
                if (F.tag === "Nothing")
                  return 0;
                if (F.tag === "Just")
                  return F._1;
                f();
              })();
              return E < w || E > X ? U(C)(Y + "→" + nt)()(ut) : ut;
            })(I)((() => {
              const ut = st(nt)(t.preds);
              if (ut.tag === "Nothing")
                return [];
              if (ut.tag === "Just")
                return ut._1;
              f();
            })());
          }
          return e(t, "") ? I : x((nt) => (ut) => {
            const Y = st(ut)(t.nodeIndex), F = (() => {
              if (Y.tag === "Nothing")
                return 0;
              if (Y.tag === "Just")
                return Y._1;
              f();
            })();
            return F < w || F > X ? U(C)(ut + "→")()(nt) : nt;
          })(I)((() => {
            const nt = st("")(t.preds);
            if (nt.tag === "Nothing")
              return [];
            if (nt.tag === "Just")
              return nt._1;
            f();
          })());
        })(y)(At(0, k)), d = N, l = T, h = X, p = k + 1 | 0;
        continue;
      }
      _ = y, d = N, l = T, h = w, p = k + 1 | 0;
    }
    return m;
  };
  return n.length < 3 ? A : x((o) => (i) => {
    if (i >= 0 && i < n.length) {
      const s = n[i];
      return r(o)((() => {
        const u = i + 1 | 0;
        return u >= 0 && u < n.length ? n[u] : [];
      })())(s)(s.length)(i)(0)(0);
    }
    return r(o)((() => {
      const s = i + 1 | 0;
      return s >= 0 && s < n.length ? n[s] : [];
    })())([])(0)(i)(0)(0);
  })(A)(At(1, n.length - 2 | 0));
}, i2 = (t) => (n) => (e) => (r) => (o) => {
  const i = zn(n), s = x((u) => (c) => {
    const a = x((g) => (_) => {
      const d = (() => {
        if (o === "HRight") {
          const $ = st(_)(t.preds);
          if ($.tag === "Nothing")
            return [];
          if ($.tag === "Just")
            return $._1;
          f();
        }
        if (o === "HLeft") {
          const $ = st(_)(t.succs);
          if ($.tag === "Nothing")
            return [];
          if ($.tag === "Just")
            return $._1;
        }
        f();
      })(), l = d.length;
      if (l === 0)
        return g;
      const h = Ge(l - 1 | 0, 2), p = Ge(l, 2);
      return x(($) => (m) => {
        if ((() => {
          const y = st(_)($.align);
          if (y.tag === "Nothing")
            return _ !== _;
          if (y.tag === "Just")
            return y._1 !== _;
          f();
        })())
          return $;
        if (m >= 0 && m < d.length) {
          const y = st(d[m])(t.nodeIndex), N = (() => {
            if (y.tag === "Nothing")
              return 0;
            if (y.tag === "Just")
              return y._1;
            f();
          })();
          if (!(xa(d[m] + "→" + _)(e) || xa(_ + "→" + d[m])(e)) && (() => {
            if (r === "VDown")
              return $.r < N;
            if (r === "VUp")
              return $.r > N;
            f();
          })()) {
            const T = st(d[m])($.root), w = (() => {
              if (T.tag === "Nothing")
                return d[m];
              if (T.tag === "Just")
                return T._1;
              f();
            })();
            return {
              root: U(C)(_)(w)($.root),
              align: U(C)(d[m])(_)(U(C)(_)(w)($.align)),
              r: N
            };
          }
        }
        return $;
      })(g)((() => {
        if (r === "VDown")
          return At(h, p);
        if (r === "VUp")
          return Jn(At(h, p));
        f();
      })());
    })({
      root: u.root,
      align: u.align,
      r: (() => {
        if (r === "VDown")
          return -1;
        if (r === "VUp")
          return 999999;
        f();
      })()
    })((() => {
      if (r === "VDown")
        return c;
      if (r === "VUp")
        return Jn(c);
      f();
    })());
    return { root: a.root, align: a.align };
  })({ root: pe(z((u) => b(u, u))(i)), align: pe(z((u) => b(u, u))(i)) })((() => {
    if (o === "HRight")
      return n;
    if (o === "HLeft")
      return Jn(n);
    f();
  })());
  return { root: s.root, align: s.align };
}, oi = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
  const g = i2(n)(e)(u)(c)(a), _ = r2(g)(o)(r)(i)(s)(a);
  return P_()((d) => (l) => v(
    "Just",
    (() => {
      const h = st(d)(_);
      if (h.tag === "Nothing")
        return l + 0;
      if (h.tag === "Just")
        return l + h._1;
      f();
    })()
  ))(e2(t)(n)(e)(r)(o)(i)(s)(_)(g)(c)(a));
}, Ja = (t) => (n) => Ft((e) => (r) => x((o) => (i) => i >= 0 && i < n.length ? i >= 0 && i < t.length ? o + n[i] + t[i] : o + n[i] + 0 : i >= 0 && i < t.length ? o + 1 + t[i] : o + 1)(0)((() => {
  const o = At(0, n.length - 1 | 0);
  return e < 1 ? [] : bt(0, e, o);
})()))(n), s2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = Um(0)(n.length - 1 | 0), c = et(t.layerGap), a = s(__(u, c)), g = cm(Y0(o)(a)(r)(i)(A))(a);
  return z((_) => {
    const d = Km(_)(g);
    return d.tag === "Just" && d._1 > 0 ? xe(c)(2 + et(d._1 - 1 | 0) * 2.5) : c;
  })(At(0, u - 1 | 0));
}, tg = (t) => (n) => (e) => (r) => bf(
  (o) => x((i) => (s) => {
    if (!i.ok)
      return i;
    const u = st(s)(r), c = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      f();
    })(), a = st(s)(e), g = (() => {
      if (a.tag === "Nothing")
        return c + 1;
      if (a.tag === "Just")
        return c + a._1._1;
      f();
    })();
    return c + 1e-4 > i.pos && g + 1e-4 > i.pos ? { ok: !0, pos: g } : { ok: !1, pos: i.pos };
  })({ ok: !0, pos: -1e18 })(o).ok,
  n
), u2 = (t) => (n) => (e) => (r) => {
  const o = Lt((i) => (s) => at.compare(i.w)(s.w))(z((i) => ({ l: i, w: Z0(i) }))(ft(
    tg()(n)(e),
    r
  )));
  return 0 < o.length ? v("Just", o[0].l) : J;
}, c2 = (t) => (n) => {
  const e = pe(zn(z(Ft((o) => (i) => b(i, o)))(t))), r = (o) => Lt((i) => (s) => it.compare((() => {
    const u = st(i)(e);
    if (u.tag === "Nothing")
      return 0;
    if (u.tag === "Just")
      return u._1;
    f();
  })())((() => {
    const u = st(s)(e);
    if (u.tag === "Nothing")
      return 0;
    if (u.tag === "Just")
      return u._1;
    f();
  })()))(o);
  return {
    preds: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return A;
        if (i.tag === "Node")
          return Ot("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(x((i) => (s) => wt(C)(rn)(s.to.node)([s.from.node])(i))(A)(n));
    })(),
    succs: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return A;
        if (i.tag === "Node")
          return Ot("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(x((i) => (s) => wt(C)(rn)(s.from.node)([s.to.node])(i))(A)(n));
    })(),
    nodeIndex: e
  };
}, a2 = (t) => (n) => {
  const e = Lt((_) => (d) => at.compare(_.w)(d.w))(Ft((_) => (d) => ({ i: _, l: d, w: Z0(d) }))(n)), r = 0 < e.length ? v("Just", e[0]) : J, o = (() => {
    if (r.tag === "Just")
      return r._1.i;
    if (r.tag === "Nothing")
      return 0;
    f();
  })(), i = o >= 0 && o < n.length ? v("Just", n[o]) : J, s = (() => {
    if (i.tag === "Just")
      return ((d) => (l) => {
        let h = d, p = l, $ = !0, m;
        for (; $; ) {
          const y = h, N = p;
          if (N.tag === "Nil") {
            $ = !1, m = y;
            continue;
          }
          if (N.tag === "Cons") {
            h = re(y)(N._1), p = N._2;
            continue;
          }
          f();
        }
        return m;
      })(999999)((() => {
        const d = (l, h) => {
          if (l.tag === "Leaf")
            return h;
          if (l.tag === "Node")
            return d(l._5, zt("Cons", l._4, d(l._6, h)));
          f();
        };
        return d(i._1, Yt);
      })());
    if (i.tag === "Nothing")
      return 0;
    f();
  })(), u = (_) => x((d) => (l) => xe(d)((() => {
    const h = st(l._1)(t);
    if (h.tag === "Nothing")
      return l._2 + 1;
    if (h.tag === "Just")
      return l._2 + h._1._1;
    f();
  })()))(-999999)(fu(_)), c = o >= 0 && o < n.length ? v("Just", n[o]) : J, a = (() => {
    if (c.tag === "Just")
      return u(c._1);
    if (c.tag === "Nothing")
      return 0;
    f();
  })(), g = Tn(
    (_) => (d) => {
      const l = (h) => {
        if (h.tag === "Leaf")
          return A;
        if (h.tag === "Node")
          return Ot("Node", h._1, h._2, h._3, h._4 + d, l(h._5), l(h._6));
        f();
      };
      return l(_);
    },
    n,
    Ft((_) => (d) => Xe(_)(2) === 0 ? s - ((h) => (p) => {
      let $ = h, m = p, y = !0, N;
      for (; y; ) {
        const T = $, w = m;
        if (w.tag === "Nil") {
          y = !1, N = T;
          continue;
        }
        if (w.tag === "Cons") {
          $ = re(T)(w._1), m = w._2;
          continue;
        }
        f();
      }
      return N;
    })(999999)((() => {
      const h = (p, $) => {
        if (p.tag === "Leaf")
          return $;
        if (p.tag === "Node")
          return h(p._5, zt("Cons", p._4, h(p._6, $)));
        f();
      };
      return h(d, Yt);
    })()) : a - u(d))(n)
  );
  return t2(x((_) => (d) => {
    const l = Lt(at.compare)(yt(st(d))(g));
    return U(C)(d)(l.length === 4 ? 1 < l.length && 2 < l.length ? (l[1] + l[2]) / 2 : 0 : 0 < l.length ? l[0] : 0)(_);
  })(A)(Fr(C.compare)(zn(z((_) => {
    const d = (l) => {
      if (l.tag === "Leaf")
        return A;
      if (l.tag === "Node")
        return Ot("Node", l._1, l._2, l._3, void 0, d(l._5), d(l._6));
      f();
    };
    return Et(On.foldr, d(_));
  })(g)))));
}, f2 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = c2(n)(o), u = o2(s)(n), c = { nodeGap: t.nodeGap * 4 | 0 }, a = Pn(
    C.compare,
    Cn,
    pe(z((l) => b(l, b(1, 1)))(ft(
      V0,
      zn(n)
    ))),
    (() => {
      const l = (h) => {
        if (h.tag === "Leaf")
          return A;
        if (h.tag === "Node")
          return Ot("Node", h._1, h._2, h._3, b(h._4._1 * et(4), h._4._2), l(h._5), l(h._6));
        f();
      };
      return l(e);
    })()
  ), g = [
    oi(c)(s)(n)(a)(r)(o)(i)(u)($a)(ya),
    oi(c)(s)(n)(a)(r)(o)(i)(u)(ma)(ya),
    oi(c)(s)(n)(a)(r)(o)(i)(u)($a)(Na),
    oi(c)(s)(n)(a)(r)(o)(i)(u)(ma)(Na)
  ], _ = a2(a)(g);
  if (tg()(n)(a)(_))
    return _;
  const d = u2()(n)(a)(g);
  if (d.tag === "Just")
    return d._1;
  if (d.tag === "Nothing")
    return g[0];
  f();
}, g2 = (t) => (n) => (e) => (r) => {
  const o = Tf(
    J,
    $f,
    (i) => i.node === n ? v("Just", i.position) : J,
    t
  );
  if (o.tag === "Nothing")
    return t;
  if (o.tag === "Just") {
    const i = o._1;
    return z((s) => s.node === e ? { ...s, position: b(i._1 + r._1, i._2 + r._2) } : s)(t);
  }
  f();
}, l2 = (t) => (n) => (e) => (r) => {
  const o = ft((s) => Hn(le)(s.node)(n), t), i = (() => {
    if (e === "Vertical") {
      if (r === "Start")
        return x((s) => (u) => re(s)(u.position._1))(99999)(o);
      if (r === "End")
        return x((s) => (u) => xe(s)(u.position._1))(0)(o);
      if (r === "Center") {
        const s = x((u) => (c) => u + c.position._1)(0)(o);
        return o.length === 0 ? 0 : s / et(o.length);
      }
      f();
    }
    if (e === "Horizontal") {
      if (r === "Start")
        return x((s) => (u) => re(s)(u.position._2))(99999)(o);
      if (r === "End")
        return x((s) => (u) => xe(s)(u.position._2))(0)(o);
      if (r === "Center") {
        const s = x((u) => (c) => u + c.position._2)(0)(o);
        return o.length === 0 ? 0 : s / et(o.length);
      }
    }
    f();
  })();
  return z((s) => {
    if (Hn(le)(s.node)(n)) {
      if (e === "Vertical")
        return { ...s, position: b(i, s.position._2) };
      if (e === "Horizontal")
        return { ...s, position: b(s.position._1, i) };
      f();
    }
    return s;
  })(t);
}, _2 = (t) => (n) => x((e) => (r) => r.tag === "AlignGroup" ? l2(e)(r._1.nodes)(r._1.axis)(r._1.alignment) : r.tag === "RelativePosition" ? g2(e)(r._1.anchor)(r._1.target)(r._1.offset) : e)(n)(t), d2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const c = z((_) => x((d) => (l) => xe(d)((() => {
    const h = st(l)(r);
    if (h.tag === "Nothing")
      return 1;
    if (h.tag === "Just")
      return h._1._2;
    f();
  })()))(1)(_))(e), a = f2(t)(e)(r)(o)(i)(u), g = Ja(s2(t)(e)(r)(o)(i)(s)((_) => {
    const d = Ja(_)(c);
    return zn(Ft((l) => (h) => Ft((p) => ($) => ({
      node: $,
      position: b(
        (() => {
          const m = st($)(a);
          return (() => {
            if (m.tag === "Nothing")
              return 0;
            if (m.tag === "Just")
              return m._1;
            f();
          })() / et(4);
        })(),
        l >= 0 && l < d.length ? d[l] : 0
      ),
      size: (() => {
        const m = mn(3)($) === "$d:" ? b(0, 1) : b(1, 1), y = st($)(r);
        if (y.tag === "Nothing")
          return m;
        if (y.tag === "Just")
          return y._1;
        f();
      })(),
      layer: l,
      order: p
    }))(h))(e));
  }))(c);
  return _2(n)(zn(Ft((_) => (d) => Ft((l) => (h) => ({
    node: h,
    position: b(
      (() => {
        const p = st(h)(a);
        return (() => {
          if (p.tag === "Nothing")
            return 0;
          if (p.tag === "Just")
            return p._1;
          f();
        })() / et(4);
      })(),
      _ >= 0 && _ < g.length ? g[_] : 0
    ),
    size: (() => {
      const p = mn(3)(h) === "$d:" ? b(0, 1) : b(1, 1), $ = st(h)(r);
      if ($.tag === "Nothing")
        return p;
      if ($.tag === "Just")
        return $._1;
      f();
    })(),
    layer: _,
    order: l
  }))(d))(e)));
}, As = /* @__PURE__ */ qu(hi)(/* @__PURE__ */ hr(32)), Ta = /* @__PURE__ */ qu(hi)(/* @__PURE__ */ hr(31)), Eo = /* @__PURE__ */ (() => {
  const t = b1("25214903917");
  if (t.tag === "Nothing")
    return Wf;
  if (t.tag === "Just")
    return t._1;
  f();
})(), So = /* @__PURE__ */ Vs(/* @__PURE__ */ qu(hi)(/* @__PURE__ */ hr(48)))(hi), h2 = (t) => {
  const n = L1(t);
  return No(Df((() => {
    if (n.tag === "Nothing")
      return Wf;
    if (n.tag === "Just")
      return n._1;
    f();
  })())(Eo))(So);
}, gu = /* @__PURE__ */ hr(11), Ei = (t) => (n) => {
  const e = No(ai(fi(n)(Eo))(gu))(So);
  return b(
    (() => {
      const r = Sf(T1(Us(e)(hr(48 - t | 0))));
      if (r.tag === "Nothing")
        return 0;
      if (r.tag === "Just")
        return r._1;
      f();
    })(),
    e
  );
}, p2 = (t) => {
  const n = Ei(26)(t), e = Ei(27)(n._2);
  return b((et(n._1) * Ys(2)(27) + et(e._1)) / Ys(2)(53), e._2);
}, $2 = (t) => (n) => {
  const e = x((r) => (o) => {
    const i = p2(r.finalR);
    return { rs: [...r.rs, i._1], finalR: i._2 };
  })({ rs: [], finalR: t })(n);
  return b(
    z((r) => r.x)(Lt((r) => (o) => at.compare(r.k)(o.k))(Tn((r) => (o) => ({ x: r, k: o }), n, e.rs))),
    e.finalR
  );
}, m2 = (t) => {
  const n = No(ai(fi(t)(Eo))(gu))(So), e = No(ai(fi(n)(Eo))(gu))(So);
  return b(
    ai(fi((() => {
      const r = Us(n)(hr(16));
      return Gc.compare(r)(Ta) !== "LT" ? Vs(r)(As) : r;
    })())(As))((() => {
      const r = Us(e)(hr(16));
      return Gc.compare(r)(Ta) !== "LT" ? Vs(r)(As) : r;
    })()),
    e
  );
}, Co = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Si = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, fc = /* @__PURE__ */ nn(C)(Ht), Er = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ci = /* @__PURE__ */ nn(C)(Ht), y2 = /* @__PURE__ */ Su(Qo), N2 = /* @__PURE__ */ x(Br)(0), x2 = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, va = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, J2 = (t) => (n) => (e) => {
  if (t >= 0 && t < e.length) {
    const r = e[t];
    if (n >= 0 && n < e.length) {
      const o = Me(qt, J, t, e[n], e);
      if (o.tag === "Just")
        return Me(qt, J, n, r, o._1);
      if (o.tag === "Nothing")
        return J;
      f();
    }
  }
  return J;
}, T2 = (t) => (n) => (e) => (r) => (o) => fc(x((i) => (s) => {
  const u = Lt((c) => (a) => it.compare((() => {
    const g = Co(c.id)(o);
    if (g.tag === "Nothing")
      return 1e6;
    if (g.tag === "Just")
      return g._1;
    f();
  })())((() => {
    const g = Co(a.id)(o);
    if (g.tag === "Nothing")
      return 1e6;
    if (g.tag === "Just")
      return g._1;
    f();
  })()))(ft((c) => Si(c.to.node)(e), ft((c) => c.from.node === s, r)));
  return {
    ranks: [...i.ranks, ...Ft((c) => (a) => b(a.id, et((i.rankSum + c | 0) + 1 | 0)))(u)],
    rankSum: i.rankSum + u.length | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), v2 = (t) => (n) => (e) => (r) => (o) => fc(x((i) => (s) => {
  const u = Lt((a) => (g) => {
    const _ = it.compare((() => {
      const d = Er(g.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      f();
    })())((() => {
      const d = Er(a.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      f();
    })());
    return _ === "EQ" ? it.compare((() => {
      const d = Co(a.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      f();
    })())((() => {
      const d = Co(g.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      f();
    })()) : _;
  })(ft((a) => Si(a.from.node)(e), ft((a) => a.to.node === s, r))), c = u.length;
  return {
    ranks: [...i.ranks, ...Ft((a) => (g) => b(g.id, et((i.rankSum + c | 0) - a | 0)))(u)],
    rankSum: i.rankSum + c | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), lu = (t) => (n) => (e) => {
  const r = Ci(Ft((u) => (c) => b(c, u))(t)), o = Ci(Ft((u) => (c) => b(c, u))(n)), i = yt((u) => {
    const c = Er(u.from.node)(r), a = Er(u.to.node)(o);
    if (c.tag === "Just" && a.tag === "Just")
      return v("Just", b(c._1, a._1));
    const g = Er(u.from.node)(o), _ = Er(u.to.node)(r);
    return g.tag === "Just" && _.tag === "Just" ? v("Just", b(_._1, g._1)) : J;
  })(e), s = i.length;
  return x((u) => (c) => x((a) => (g) => c >= 0 && c < i.length && g >= 0 && g < i.length && ((i[c]._1 - i[g]._1 | 0) * (i[c]._2 - i[g]._2 | 0) | 0) < 0 ? a + 1 | 0 : a)(u)(At(c + 1 | 0, s - 1 | 0)))(0)(At(0, s - 2 | 0));
}, w2 = (t) => (n) => (e) => (r) => {
  const o = (s) => (u) => {
    let c = s, a = u, g = !0, _;
    for (; g; ) {
      const d = c, l = a;
      if (l >= (d.length - 1 | 0)) {
        g = !1, _ = d;
        continue;
      }
      if (l >= 0 && l < d.length) {
        const h = l + 1 | 0;
        if (h >= 0 && h < d.length) {
          const p = d[l], $ = d[h];
          if (qn((T) => T.before === p && T.after === $, r)) {
            c = d, a = l + 1 | 0;
            continue;
          }
          const m = Me(qt, J, l, $, d), y = (() => {
            if (m.tag === "Just")
              return Me(qt, J, l + 1 | 0, p, m._1);
            if (m.tag === "Nothing")
              return J;
            f();
          })(), N = (() => {
            if (y.tag === "Nothing")
              return d;
            if (y.tag === "Just")
              return y._1;
            f();
          })();
          if (lu(n)(N)(e) < lu(n)(d)(e)) {
            c = N, a = l + 1 | 0;
            continue;
          }
          c = d, a = l + 1 | 0;
          continue;
        }
        g = !1, _ = d;
        continue;
      }
      g = !1, _ = d;
    }
    return _;
  };
  return ((s) => {
    let u = s, c = !0, a;
    for (; c; ) {
      const g = u, _ = o(g)(0);
      if (y2(_)(g)) {
        c = !1, a = g;
        continue;
      }
      u = _;
    }
    return a;
  })(t);
}, ii = (t) => (n) => x((e) => (r) => {
  if (r >= 0 && r < t.length) {
    const o = t[r], i = r + 1 | 0;
    if (i >= 0 && i < t.length)
      return e + lu(o)(t[i])(n) | 0;
  }
  return e;
})(0)(At(0, t.length - 2 | 0)), k2 = /* @__PURE__ */ (() => {
  const t = (n) => {
    if (n.length < 7) {
      const s = (u) => (c) => {
        let a = u, g = c, _ = !0, d;
        for (; _; ) {
          const l = a, h = g, p = h - 1 | 0;
          if (p >= 0 && p < l.length) {
            if (h >= 0 && h < l.length && h > 0 && l[p].key > l[h].key) {
              const $ = J2(h - 1 | 0)(h)(l);
              if ($.tag === "Just") {
                a = $._1, g = h - 1 | 0;
                continue;
              }
              if ($.tag === "Nothing") {
                _ = !1, d = l;
                continue;
              }
              f();
            }
            _ = !1, d = l;
            continue;
          }
          _ = !1, d = l;
        }
        return d;
      };
      return x((u) => (c) => s(u)(c))(n)(At(1, n.length - 1 | 0));
    }
    const e = Ge(n.length, 2), r = t(bt(0, e, n)), o = t(bt(e, n.length, n));
    return ((s) => (u) => (c) => {
      let a = s, g = u, _ = c, d = !0, l;
      for (; d; ) {
        const h = a, p = g, $ = _;
        if (p >= 0 && p < r.length) {
          if ($ >= 0 && $ < o.length) {
            if (r[p].key > o[$].key) {
              a = Qt(h)(o[$]), g = p, _ = $ + 1 | 0;
              continue;
            }
            a = Qt(h)(r[p]), g = p + 1 | 0, _ = $;
            continue;
          }
          d = !1, l = [...h, ...p < 1 ? r : bt(p, r.length, r)];
          continue;
        }
        d = !1, l = [...h, ...$ < 1 ? o : bt($, o.length, o)];
      }
      return l;
    })([])(0)(0);
  };
  return t;
})(), b2 = (t) => (n) => (e) => {
  const r = yt((a) => a.tag === "OrderConstraint" ? v("Just", { before: a._1.before, after: a._1.after }) : J)(t.constraints), o = (a) => x((g) => (_) => {
    const d = _.after, l = _.before, h = dr(qt, J, ($) => $ === l, g), p = dr(qt, J, ($) => $ === d, g);
    if (h.tag === "Just" && p.tag === "Just" && h._1 > p._1) {
      const $ = kf(qt, J, h._1, g), m = (() => {
        if ($.tag === "Nothing")
          return g;
        if ($.tag === "Just")
          return $._1;
        f();
      })(), y = wf(qt, J, p._1, l, m);
      if (y.tag === "Nothing")
        return m;
      if (y.tag === "Just")
        return y._1;
      f();
    }
    return g;
  })(a)(r), i = fc(Ft((a) => (g) => b(g.id, a))(e)), s = (a, g, _) => {
    const d = a.length;
    return x((l) => (h) => {
      const p = g ? h - 1 | 0 : h + 1 | 0, $ = p >= 0 && p < l._1.length ? v("Just", l._1[p]) : J;
      if ($.tag === "Just") {
        const m = h >= 0 && h < l._1.length ? v("Just", l._1[h]) : J;
        if (m.tag === "Just") {
          const y = Ci(Ft((L) => (P) => b(P, L))($._1)), N = Ci(Ft((L) => (P) => b(P, L))(m._1)), T = g ? T2($._1)(y)(N)(e)(i) : v2($._1)(y)(N)(e)(i), w = x((L) => (P) => {
            const D = yt((X) => Co(X.id)(T))(ft(g ? (X) => X.to.node === P._2 && Si(X.from.node)(y) : (X) => X.from.node === P._2 && Si(X.to.node)(y), e));
            if (D.length === 0)
              return { ...L, items: [...L.items, { n: P._2, key: J, origIdx: P._1 }] };
            const V = Ei(24)(L.r);
            return {
              items: [
                ...L.items,
                {
                  n: P._2,
                  key: v("Just", (N2(D) + (et(V._1) * 4172325152040912e-24 - 0.03500000014901161)) / et(D.length)),
                  origIdx: P._1
                }
              ],
              r: V._2
            };
          })({ items: [], r: l._2 })(Ft(Oe)(m._1)), k = Me(
            qt,
            J,
            h,
            w2(o(z((L) => L.n)(k2((() => {
              const L = w.items, P = (V) => (X) => {
                let I = V, B = X, nt = !0, ut;
                for (; nt; ) {
                  const Y = I, F = B;
                  if (Y >= 0 && Y < L.length) {
                    if (L[Y].key.tag === "Just") {
                      nt = !1, ut = L[Y].key._1;
                      continue;
                    }
                    if (L[Y].key.tag === "Nothing") {
                      I = Y + 1 | 0, B = F;
                      continue;
                    }
                    f();
                  }
                  nt = !1, ut = F;
                }
                return ut;
              };
              return ((V) => (X) => (I) => {
                let B = V, nt = X, ut = I, Y = !0, F;
                for (; Y; ) {
                  const E = B, S = nt, H = ut;
                  if (E >= 0 && E < L.length) {
                    if (L[E].key.tag === "Just") {
                      B = E + 1 | 0, nt = L[E].key._1, ut = [...H, { n: L[E].n, key: L[E].key._1, origIdx: L[E].origIdx }];
                      continue;
                    }
                    if (L[E].key.tag === "Nothing") {
                      const G = (S + P(E + 1 | 0)(S + 1)) / 2;
                      B = E + 1 | 0, nt = G, ut = [...H, { n: L[E].n, key: G, origIdx: L[E].origIdx }];
                      continue;
                    }
                    f();
                  }
                  Y = !1, F = H;
                }
                return F;
              })(0)(-1)([]);
            })()))))($._1)(e)(r),
            l._1
          );
          if (k.tag === "Just")
            return b(k._1, w.r);
          if (k.tag === "Nothing")
            return b(l._1, l._2);
          f();
        }
        if (m.tag === "Nothing")
          return b(l._1, l._2);
        f();
      }
      if ($.tag === "Nothing")
        return b(l._1, l._2);
      f();
    })(b(a, _))(g ? At(1, d - 1 | 0) : Jn(At(0, d - 2 | 0)));
  }, u = x((a) => (g) => U(C)(g.from.node)()(U(C)(g.to.node)()(a)))(A)(e), c = x((a) => (g) => {
    if (a.result.crossings === 0)
      return a;
    const _ = (y) => (N) => (T) => (w) => {
      let k = y, L = N, P = T, D = w, V = !0, X;
      for (; V; ) {
        const I = k, B = L, nt = P, ut = D;
        if (nt === 0) {
          V = !1, X = { layout: I, crossings: 0, random: ut };
          continue;
        }
        const Y = s(I, B, ut), F = ii(Y._1)(e);
        if (F < nt) {
          k = Y._1, L = !B, P = F, D = Y._2;
          continue;
        }
        V = !1, X = { layout: I, crossings: nt, random: Y._2 };
      }
      return X;
    }, d = Ei(1)(a.result.random), l = d._1 !== 0, h = t.modelOrder.tag === "Leaf", p = (a.firstTry || a.secondTry) && !h ? a.firstTry : l, $ = (() => {
      if (!h) {
        const w = s(n, p, d._2);
        return _(w._1)(!p)(ii(w._1)(e))(w._2);
      }
      const y = p ? 0 : x2(0)(n.length - 1 | 0), N = y >= 0 && y < n.length ? v("Just", n[y]) : J;
      if (N.tag === "Just" && N._1.length > 1) {
        const w = ft((k) => va(k)(u), N._1);
        if (w.length > 1) {
          const k = $2(d._2)(w), L = k._1, P = Me(
            qt,
            J,
            y,
            o(x((D) => (V) => va(V)(u) ? D.idx >= 0 && D.idx < L.length ? { idx: D.idx + 1 | 0, result: [...D.result, L[D.idx]] } : { idx: D.idx, result: [...D.result, V] } : { idx: D.idx, result: [...D.result, V] })({ idx: 0, result: [] })(N._1).result),
            n
          );
          if (P.tag === "Just") {
            const D = s(P._1, p, k._2);
            return _(D._1)(!p)(ii(D._1)(e))(D._2);
          }
        }
      }
      const T = s(n, p, d._2);
      return _(T._1)(!p)(ii(T._1)(e))(T._2);
    })(), m = a.secondTry ? !1 : a.secondTry;
    return a.firstTry ? {
      result: $.crossings < a.result.crossings ? { layout: $.layout, crossings: $.crossings, random: $.random } : { ...a.result, random: $.random },
      firstTry: !1,
      secondTry: !0
    } : {
      result: $.crossings < a.result.crossings ? { layout: $.layout, crossings: $.crossings, random: $.random } : { ...a.result, random: $.random },
      firstTry: a.firstTry,
      secondTry: m
    };
  })({
    result: {
      layout: n,
      crossings: 1e9,
      random: No(Df(m2(h2(1))._1)(Eo))(So)
    },
    firstTry: t.modelOrder.tag !== "Leaf",
    secondTry: !1
  })(At(1, t.iterations)).result;
  return n.length <= 0 || t.iterations <= 0 ? n : c.layout;
}, L2 = (t) => t, wa = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, Rn = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, qr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, Po = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = C.compare(n._1)(e._1);
      return r === "LT" ? Nn : r === "GT" ? xn : C.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), E2 = /* @__PURE__ */ nn(C)(Ht), S2 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = Po.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, C2 = /* @__PURE__ */ L2("Greedy"), Fs = (t) => (n) => (e) => x((r) => (o) => {
  if (o.from.node === o.to.node)
    return r;
  if (o.from.node === n && !wa(o.to.node)(r.marks)) {
    const i = Rn(o.to.node)(r.inDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = U(C)(o.to.node)(s)(r.inDeg);
    return (() => {
      const c = Rn(o.to.node)(r.outDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        f();
      })() && !Hn(le)(o.to.node)(r.sources);
    })() ? { ...r, inDeg: u, sources: [...r.sources, o.to.node] } : { ...r, inDeg: u };
  }
  if (o.to.node === n && !wa(o.from.node)(r.marks)) {
    const i = Rn(o.from.node)(r.outDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = U(C)(o.from.node)(s)(r.outDeg);
    return (() => {
      const c = Rn(o.from.node)(r.inDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        f();
      })() && !Hn(le)(o.from.node)(r.sinks);
    })() ? { ...r, outDeg: u, sinks: [...r.sinks, o.from.node] } : { ...r, outDeg: u };
  }
  return r;
})({ ...e, remaining: ft((r) => r !== n, e.remaining) })(t), P2 = /* @__PURE__ */ x((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return U(C)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return U(C)(n._1.node)(0)(t);
    if (n._1.pin.tag === "LastLayer")
      return U(C)(n._1.node)(99999)(t);
  }
  return t;
})(A), ng = (t) => (n) => (e) => {
  const r = Rn(n)(t), o = Rn(e)(t);
  return r.tag === "Just" && o.tag === "Just" && r._1 > o._1;
}, eg = (t) => (n) => (e) => (r) => {
  if (qr(e)(r.visited) || qr(e)(r.visiting))
    return r;
  const o = x(G2(t)(n)(e))({ ...r, visiting: U(C)(e)()(r.visiting) })((() => {
    const i = Rn(e)(n);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just")
      return i._1;
    f();
  })());
  return {
    ...o,
    visiting: mo(C)(e)(o.visiting),
    visited: U(C)(e)()(o.visited)
  };
}, G2 = (t) => (n) => (e) => (r) => (o) => ng(t)(e)(o) ? { ...r, backEdges: U(Po)(b(e, o))()(r.backEdges) } : qr(o)(r.visiting) ? { ...r, backEdges: U(Po)(b(e, o))()(r.backEdges) } : qr(o)(r.visited) ? r : eg(t)(n)(o)(r), I2 = (t) => (n) => (e) => {
  const r = (d) => {
    let l = d, h = !0, p;
    for (; h; ) {
      const $ = l, m = Rt((y) => J, (y) => (N) => v("Just", { head: y, tail: N }), $.sinks);
      if (m.tag === "Just") {
        l = Fs(e)(m._1.head)({
          ...$,
          sinks: m._1.tail,
          marks: U(C)(m._1.head)($.nextRight)($.marks),
          nextRight: $.nextRight - 1 | 0
        });
        continue;
      }
      if (m.tag === "Nothing") {
        const y = Rt((N) => J, (N) => (T) => v("Just", { head: N, tail: T }), $.sources);
        if (y.tag === "Just") {
          l = Fs(e)(y._1.head)({
            ...$,
            sources: y._1.tail,
            marks: U(C)(y._1.head)($.nextLeft)($.marks),
            nextLeft: $.nextLeft + 1 | 0
          });
          continue;
        }
        if (y.tag === "Nothing") {
          const N = (w) => {
            const k = Rn(w)($.outDeg), L = Rn(w)($.inDeg);
            return (() => {
              if (k.tag === "Nothing")
                return 0;
              if (k.tag === "Just")
                return k._1;
              f();
            })() - (() => {
              if (L.tag === "Nothing")
                return 0;
              if (L.tag === "Just")
                return L._1;
              f();
            })() | 0;
          }, T = Lt((w) => (k) => {
            const L = it.compare(N(k))(N(w));
            return L === "EQ" ? it.compare((() => {
              const P = Rn(w)(n);
              if (P.tag === "Nothing")
                return 1e6;
              if (P.tag === "Just")
                return P._1;
              f();
            })())((() => {
              const P = Rn(k)(n);
              if (P.tag === "Nothing")
                return 1e6;
              if (P.tag === "Just")
                return P._1;
              f();
            })()) : L;
          })($.remaining);
          if (0 < T.length) {
            const w = T[0];
            l = Fs(e)(w)({
              ...$,
              remaining: ft((k) => k !== w, $.remaining),
              marks: U(C)(w)($.nextLeft)($.marks),
              nextLeft: $.nextLeft + 1 | 0
            });
            continue;
          }
          h = !1, p = $;
          continue;
        }
      }
      f();
    }
    return p;
  }, o = Fr(C.compare)([...z((d) => d.from.node)(e), ...z((d) => d.to.node)(e)]), i = ft((d) => d.from.node !== d.to.node, e), s = x((d) => (l) => wt(C)(on)(l.to.node)(1)(d))(A)(i), u = x((d) => (l) => wt(C)(on)(l.from.node)(1)(d))(A)(i), c = ft(
    (d) => {
      const l = Rn(d)(s);
      if (l.tag === "Nothing")
        return !0;
      if (l.tag === "Just")
        return l._1 === 0;
      f();
    },
    o
  ), a = ft(
    (d) => {
      const l = Rn(d)(u);
      if (l.tag === "Nothing")
        return !0;
      if (l.tag === "Just")
        return l._1 === 0;
      f();
    },
    o
  ), g = o.length + 1 | 0, _ = x((d) => (l) => {
    const h = Rn(l)(d);
    return h.tag === "Just" && h._1 < 0 ? U(C)(l)(h._1 + g | 0)(d) : d;
  })(r({
    remaining: ft((d) => !Hn(le)(d)(c) && !Hn(le)(d)(a), o),
    marks: A,
    inDeg: s,
    outDeg: u,
    sources: c,
    sinks: a,
    nextLeft: 1,
    nextRight: -1
  }).marks)(o);
  return x((d) => (l) => {
    if (l.from.node === l.to.node)
      return d;
    if (ng(t)(l.from.node)(l.to.node))
      return U(Po)(b(l.from.node, l.to.node))()(d);
    const h = Rn(l.from.node)(_), p = Rn(l.to.node)(_);
    return h.tag === "Just" && p.tag === "Just" && h._1 > p._1 ? U(Po)(b(l.from.node, l.to.node))()(d) : d;
  })(A)(e);
}, A2 = /* @__PURE__ */ x((t) => (n) => wt(C)(rn)(n.from.node)([n.to.node])(t))(A), F2 = (t) => (n) => {
  const e = A2(n), r = Fr(C.compare)([...z((i) => i.from.node)(n), ...z((i) => i.to.node)(n)]), o = x((i) => (s) => U(C)(s.to.node)()(i))(A)(n);
  return x((i) => (s) => eg(t)(e)(s)(i))({
    visiting: A,
    visited: A,
    backEdges: A
  })([...ft((i) => !qr(i)(o), r), ...ft((i) => qr(i)(o), r)]).backEdges;
}, R2 = (t) => (n) => (e) => (r) => {
  const o = E2(Ft((u) => (c) => b(c, u))(n)), i = P2(e), s = (() => {
    if (t === "DepthFirst")
      return F2(i)(r);
    if (t === "Greedy")
      return I2(i)(o)(r);
    f();
  })();
  return {
    edges: z((u) => S2(b(u.from.node, u.to.node))(s) ? { ...u, from: u.to, to: u.from } : u)(r),
    reversedEdges: s
  };
}, rg = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, B2 = /* @__PURE__ */ x((t) => (n) => U(C)(n)()(t))(A), Pi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, Q2 = /* @__PURE__ */ F0(C), he = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ka = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Rs = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = it.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, W2 = /* @__PURE__ */ nn(it)(Ht), D2 = (t) => (n) => Pn(C.compare, Cn, t, n), og = /* @__PURE__ */ Ft((t) => (n) => ({ src: n.src, tgt: n.tgt, delta: 1, weight: 1, eid: t })), H2 = (t) => x((n) => (e) => ({
  base: (() => {
    const r = (o) => (i) => {
      let s = o, u = i, c = !0, a;
      for (; c; ) {
        const g = s, _ = u;
        if (_.tag === "Nil") {
          c = !1, a = g;
          continue;
        }
        if (_.tag === "Cons") {
          s = rg(g)(_._1), u = _._2;
          continue;
        }
        f();
      }
      return a;
    };
    return (n.base + r(0)((() => {
      const o = (i, s) => {
        if (i.tag === "Leaf")
          return s;
        if (i.tag === "Node")
          return o(i._5, zt("Cons", i._4, o(i._6, s)));
        f();
      };
      return o(e, Yt);
    })()) | 0) + 1 | 0;
  })(),
  result: [
    ...n.result,
    (() => {
      if (n.base === 0)
        return e;
      const r = (o) => {
        if (o.tag === "Leaf")
          return A;
        if (o.tag === "Node")
          return Ot("Node", o._1, o._2, o._3, o._4 + n.base | 0, r(o._5), r(o._6));
        f();
      };
      return r(e);
    })()
  ]
}))({ base: 0, result: [] })(t).result, O2 = (t) => (n) => {
  const e = B2(t);
  return Q2(t)(og(ft((r) => Pi(r.src)(e) && Pi(r.tgt)(e), n)));
}, z2 = (t) => (n) => {
  const e = x((o) => (i) => wt(C)(rn)(i.tgt)([i.src])(wt(C)(rn)(i.src)([
    i.tgt
  ])(o)))(A)(n), r = (o) => (i) => (s) => {
    let u = o, c = i, a = s, g = !0, _;
    for (; g; ) {
      const d = u, l = c, h = a, p = Rt(($) => J, ($) => (m) => v("Just", { head: $, tail: m }), d);
      if (p.tag === "Nothing") {
        g = !1, _ = { nodes: h };
        continue;
      }
      if (p.tag === "Just") {
        if (Pi(p._1.head)(l)) {
          u = p._1.tail, c = l, a = h;
          continue;
        }
        u = [
          ...p._1.tail,
          ...(() => {
            const $ = he(p._1.head)(e);
            if ($.tag === "Nothing")
              return [];
            if ($.tag === "Just")
              return $._1;
            f();
          })()
        ], c = U(C)(p._1.head)()(l), a = [...h, p._1.head];
        continue;
      }
      f();
    }
    return _;
  };
  return x((o) => (i) => {
    if (Pi(i)(o.visited))
      return o;
    const s = r([i])(o.visited)([]);
    return {
      ...o,
      visited: x((u) => (c) => U(C)(c)()(u))(o.visited)(s.nodes),
      components: [...o.components, s.nodes]
    };
  })({ visited: A, components: [] })(t).components;
}, q2 = (t) => (n) => (e) => {
  const r = x((i) => (s) => wt(C)(on)(s.tgt)(1)(i))(A)(n), o = x((i) => (s) => wt(C)(on)(s.src)(1)(i))(A)(n);
  return x((i) => (s) => {
    const u = he(s)(r), c = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      f();
    })();
    if ((() => {
      const y = he(s)(o);
      return (() => {
        if (y.tag === "Nothing")
          return c !== 0;
        if (y.tag === "Just")
          return c !== y._1;
        f();
      })() || c === 0;
    })())
      return i;
    const a = he(s)(i.layers), g = (() => {
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      f();
    })(), _ = i.layers, d = x((y) => (N) => N.tgt === s ? {
      ...y,
      mIn: ka(y.mIn)((() => {
        const T = he(s)(_), w = he(N.src)(_);
        return (() => {
          if (T.tag === "Nothing")
            return 0;
          if (T.tag === "Just")
            return T._1;
          f();
        })() - (() => {
          if (w.tag === "Nothing")
            return 0;
          if (w.tag === "Just")
            return w._1;
          f();
        })() | 0;
      })())
    } : N.src === s ? {
      ...y,
      mOut: ka(y.mOut)((() => {
        const T = he(N.tgt)(_), w = he(s)(_);
        return (() => {
          if (T.tag === "Nothing")
            return 0;
          if (T.tag === "Just")
            return T._1;
          f();
        })() - (() => {
          if (w.tag === "Nothing")
            return 0;
          if (w.tag === "Just")
            return w._1;
          f();
        })() | 0;
      })())
    } : y)({ mIn: 1e9, mOut: 1e9 })(n), l = d.mIn === 1e9 ? -1 : d.mIn, h = d.mOut === 1e9 ? -1 : d.mOut;
    if (l < 0 || h < 0)
      return i;
    const p = (g - l | 0) + 1 | 0, $ = (g + h | 0) - 1 | 0;
    if ($ < p)
      return i;
    const m = x((y) => (N) => {
      const T = Rs(N)(i.filling), w = (() => {
        if (T.tag === "Nothing")
          return 0;
        if (T.tag === "Just")
          return T._1;
        f();
      })();
      return w < y.bestFill ? { best: N, bestFill: w } : y;
    })({
      best: g,
      bestFill: (() => {
        const y = Rs(g)(i.filling);
        if (y.tag === "Nothing")
          return 0;
        if (y.tag === "Just")
          return y._1;
        f();
      })()
    })(At(p, $));
    return m.best === g ? i : {
      layers: U(C)(s)(m.best)(i.layers),
      filling: U(it)(g)((() => {
        const y = Rs(g)(i.filling);
        if (y.tag === "Nothing")
          return -1;
        if (y.tag === "Just")
          return y._1 - 1 | 0;
        f();
      })())(U(it)(m.best)(m.bestFill + 1 | 0)(i.filling))
    };
  })({
    layers: e,
    filling: W2(z((i) => b(
      i,
      x((s) => (u) => (() => {
        const c = he(u)(e);
        return c.tag === "Nothing" ? !1 : c.tag === "Just" && c._1 === i;
      })() ? s + 1 | 0 : s)(0)(t)
    ))(At(
      0,
      x((i) => (s) => rg(i)((() => {
        const u = he(s)(e);
        if (u.tag === "Nothing")
          return 0;
        if (u.tag === "Just")
          return u._1;
        f();
      })()))(0)(t)
    )))
  })(t).layers;
}, Y2 = (t) => (n) => q2(t)(og(n))(x(D2)(A)(H2(z((e) => O2(e)(n))(z2(t)(n))))), X2 = (t) => t, gr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Gi = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ig = /* @__PURE__ */ (() => {
  const t = ne.unfoldr(we);
  return (n) => t(Mn("IterNode", n, ve));
})(), V2 = /* @__PURE__ */ X2("NetworkSimplex"), U2 = (t) => (n) => x((e) => (r) => {
  const o = x(Gi)(0)(yt((i) => gr(i)(e))(r));
  return x((i) => (s) => U(C)(s)(o)(i))(e)(r);
})(n)(t), K2 = (t) => (n) => ({
  layers: z((e) => ft(
    (r) => {
      const o = gr(r)(n);
      return o.tag === "Nothing" ? !1 : o.tag === "Just" && o._1 === e;
    },
    t
  ))(At(
    0,
    ((r) => (o) => {
      let i = r, s = o, u = !0, c;
      for (; u; ) {
        const a = i, g = s;
        if (g.tag === "Nil") {
          u = !1, c = a;
          continue;
        }
        if (g.tag === "Cons") {
          i = Gi(a)(g._1), s = g._2;
          continue;
        }
        f();
      }
      return c;
    })(0)((() => {
      const r = (o, i) => {
        if (o.tag === "Leaf")
          return i;
        if (o.tag === "Node")
          return r(o._5, zt("Cons", o._4, r(o._6, i)));
        f();
      };
      return r(n, Yt);
    })())
  )),
  nodeLayer: n
}), M2 = (t) => (n) => (e) => {
  const r = x((o) => (i) => U(C)(i)(!0)(o))(A)(n);
  return x((o) => (i) => U(C)(i._1)(i._2)(o))(Y2(n)(yt((o) => o.from.node === o.to.node || (() => {
    const i = gr(o.from.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() || (() => {
    const i = gr(o.to.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() ? J : v("Just", { src: o.from.node, tgt: o.to.node }))(t)))(ig(e));
}, j2 = (t) => (n) => (e) => (r) => {
  const o = (c) => (a) => {
    const g = gr(a)(c);
    if (g.tag === "Just")
      return c;
    if (g.tag === "Nothing") {
      const _ = ft(
        (l) => l !== a,
        (() => {
          const l = gr(a)(t);
          if (l.tag === "Nothing")
            return [];
          if (l.tag === "Just")
            return l._1;
          f();
        })()
      ), d = x(o)(c)(_);
      return U(C)(a)(1 + x(Gi)(0)(yt((l) => gr(l)(d))(_)) | 0)(d);
    }
    f();
  }, i = x(o)(A)(e), u = ((c) => (a) => {
    let g = c, _ = a, d = !0, l;
    for (; d; ) {
      const h = g, p = _;
      if (p.tag === "Nil") {
        d = !1, l = h;
        continue;
      }
      if (p.tag === "Cons") {
        g = Gi(h)(p._1), _ = p._2;
        continue;
      }
      f();
    }
    return l;
  })(1)((() => {
    const c = (a, g) => {
      if (a.tag === "Leaf")
        return g;
      if (a.tag === "Node")
        return c(a._5, zt("Cons", a._4, c(a._6, g)));
      f();
    };
    return c(i, Yt);
  })());
  return x((c) => (a) => U(C)(a._1)(a._2)(c))((() => {
    const c = (a) => {
      if (a.tag === "Leaf")
        return A;
      if (a.tag === "Node")
        return Ot("Node", a._1, a._2, a._3, u - a._4 | 0, c(a._5), c(a._6));
      f();
    };
    return c(i);
  })())(ig(r));
}, Z2 = /* @__PURE__ */ x((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return U(C)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return U(C)(n._1.node)(0)(t);
  }
  return t;
})(A), ty = /* @__PURE__ */ x((t) => (n) => wt(C)(rn)(n.to.node)([n.from.node])(t))(A), ny = /* @__PURE__ */ x((t) => (n) => wt(C)(rn)(n.from.node)([n.to.node])(t))(A), ey = (t) => (n) => (e) => (r) => {
  const o = ny(e), i = ty(e), s = Z2(n);
  return K2(r)(U2(yt((u) => u.tag === "SameLayer" ? v("Just", u._1.nodes) : J)(n))((() => {
    if (t === "LongestPath")
      return j2(o)(i)(r)(s);
    if (t === "NetworkSimplex")
      return M2(e)(r)(s);
    f();
  })()));
}, ry = /* @__PURE__ */ nn(C)(Ht), oy = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ba = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, La = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Go = /* @__PURE__ */ nn(C)(Ht), iy = /* @__PURE__ */ nn(C)(Ht), Ea = /* @__PURE__ */ (() => {
  const t = z((n) => ({ start: n.end, end: n.start, direction: n.direction }));
  return (n) => Jn(t(n));
})(), sy = (t) => (n) => (e) => (r) => {
  const o = ry(z((s) => b(s.edge, s))(r)), i = (s) => 0 < s.nodes.length && (() => {
    const u = oy(s.edgeId)(e);
    return u.tag === "Just" && s.nodes[0] !== u._1._1;
  })();
  return z((s) => {
    if (s.nodes.length <= 2) {
      const g = ba(s.edgeId)(o);
      if (g.tag === "Just") {
        const _ = i(s), d = Lo(bo(_ ? Ea(g._1.segments) : g._1.segments));
        return { ...g._1, edge: s.edgeId, segments: d, bends: Tn((l) => (h) => l.end, d, bt(1, d.length, d)), reversed: _ };
      }
      if (g.tag === "Nothing")
        return { edge: s.edgeId, segments: [], bends: [], bendType: [], jumps: [], reversed: !1 };
      f();
    }
    const u = Tt(yt((g) => ba(g)(o))(Tn(
      (g) => (_) => s.edgeId + ":" + g + "->" + _,
      s.nodes,
      bt(1, s.nodes.length, s.nodes)
    )))((g) => g.segments), c = i(s), a = Lo(bo(c ? Ea(u) : u));
    return {
      edge: s.edgeId,
      segments: a,
      bends: Tn((g) => (_) => g.end, a, bt(1, a.length, a)),
      bendType: [],
      jumps: [],
      reversed: c
    };
  })(t);
}, uy = { layers: [], edges: [], chains: [] }, cy = {
  nodeGap: 3,
  layerGap: 2,
  iterations: 8,
  layerer: V2,
  cycleBreaker: C2,
  compactPostRouting: !0,
  compactionSpacings: tm
}, ay = (t) => ({
  pos: b(0, 0),
  size: b(
    x((n) => (e) => La(n)(e.position._1 + e.size._1))(0)(t),
    x((n) => (e) => La(n)(e.position._2 + e.size._2))(0)(t)
  )
}), fy = (t) => (n) => (e) => {
  const r = Go(z((a) => b(a.id, a.ports))(n.nodes)), o = ft((a) => mn(3)(a.node) !== "$d:", e.placements), i = sy(e.withDummies.chains)(e.acyclic.reversedEdges)(iy(z((a) => b(
    a.id,
    b(a.from.node, a.to.node)
  ))(n.edges)))(Am(e.withDummies.edges)(e.placements)(r)(e.withDummies.chains)(U0(e.ordered)(ft(
    (a) => a.from.node !== a.to.node,
    e.withDummies.edges
  ))((() => {
    const a = (g) => {
      if (g.tag === "Leaf")
        return A;
      if (g.tag === "Node")
        return Ot("Node", g._1, g._2, g._3, b(g._4._1 * 4, g._4._2), a(g._5), a(g._6));
      f();
    };
    return a(Go(z((g) => b(g.id, g.size))(n.nodes)));
  })()))), s = t.compactPostRouting ? rm()(t.compactionSpacings)({
    nodes: o,
    edges: n.edges,
    paths: i,
    ports: r
  }) : { nodes: o, edges: i }, u = z((a) => {
    const g = Lo(bo(a.segments));
    return { ...a, segments: g, bends: Tn((_) => (d) => _.end, g, bt(1, g.length, g)) };
  })(s.edges), c = Ft((a) => (g) => ({ ...g, jumps: Hm(a)(g)(u) }))(u);
  return { nodes: s.nodes, edges: c, boundingBox: ay(s.nodes), metrics: Ep(s.nodes)(c)(0) };
}, gy = (t) => (n) => (e) => {
  const r = Go(z((i) => b(i.id, i.size))(n.nodes)), o = {
    ...e,
    placements: d2({ nodeGap: t.nodeGap, layerGap: t.layerGap })(n.constraints)(e.ordered)(r)(Go(z((i) => b(
      i.id,
      i.ports
    ))(n.nodes)))(e.withDummies.edges)(e.withDummies.chains)(U0(e.ordered)(e.withDummies.edges)((() => {
      const i = (s) => {
        if (s.tag === "Leaf")
          return A;
        if (s.tag === "Node")
          return Ot("Node", s._1, s._2, s._3, b(s._4._1 * 4, s._4._2), i(s._5), i(s._6));
        f();
      };
      return i(r);
    })()))
  };
  return { pipeline: o, result: fy(t)(n)(o) };
}, ly = (t) => (n) => (e) => gy(t)(n)({
  ...e,
  ordered: b2({
    iterations: t.iterations,
    constraints: n.constraints,
    modelOrder: Go(Ft((r) => (o) => b(o.id, r))(n.nodes))
  })(e.withDummies.layers)(e.withDummies.edges)
}), _y = (t) => (n) => (e) => ly(t)(n)({
  ...e,
  withDummies: Om(e.layered.nodeLayer)(e.acyclic.edges)(e.layered.layers)
}), dy = (t) => (n) => {
  const e = z((o) => o.id)(n.nodes), r = R2(t.cycleBreaker)(e)(n.constraints)(n.edges);
  return _y(t)(n)({
    acyclic: r,
    layered: ey(t.layerer)(n.constraints)(r.edges)(e),
    withDummies: uy,
    ordered: [],
    placements: []
  });
}, us = (t) => t, hy = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, _u = /* @__PURE__ */ us("TopSide"), du = /* @__PURE__ */ us("BottomSide"), hu = /* @__PURE__ */ us("LeftSide"), pu = /* @__PURE__ */ us("RightSide"), py = (t) => {
  const n = at.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = at.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, Sa = (t) => (n) => (e) => {
  const r = hy(t.h * 0.12)(t.w * 0.2), o = t.w / 2;
  return (n < 0 ? t.y + r : t.y + t.h - r) + n * r * Sn(py((() => {
    const i = (e - (t.x + o)) / o;
    return 1 - i * i;
  })()));
}, qe = (t) => (n) => (e) => (r) => {
  let o = t, i = n, s = e, u = r, c = !0, a;
  for (; c; ) {
    const g = o, _ = i, d = s, l = u;
    if (g === "Rectangle") {
      if (d === "TopSide") {
        c = !1, a = _.y;
        continue;
      }
      if (d === "BottomSide") {
        c = !1, a = _.y + _.h;
        continue;
      }
      if (d === "LeftSide") {
        c = !1, a = _.x;
        continue;
      }
      if (d === "RightSide") {
        c = !1, a = _.x + _.w;
        continue;
      }
      o = Ae, i = _, s = d, u = l;
      continue;
    }
    if (g === "Cylinder") {
      if (d === "TopSide") {
        c = !1, a = Sa(_)(-1)(l);
        continue;
      }
      if (d === "BottomSide") {
        c = !1, a = Sa(_)(1)(l);
        continue;
      }
      if (d === "LeftSide") {
        c = !1, a = _.x;
        continue;
      }
      if (d === "RightSide") {
        c = !1, a = _.x + _.w;
        continue;
      }
    }
    o = Ae, i = _, s = d, u = l;
  }
  return a;
}, Ca = (t) => (n) => {
  const e = n.y - t.y, r = e < 0 ? -e : e, o = n.x - (t.x + t.w), i = o < 0 ? -o : o, s = n.x - t.x, u = s < 0 ? -s : s, c = n.y - (t.y + t.h), a = c < 0 ? -c : c;
  return r <= a && r <= u && r <= i ? _u : a <= u && a <= i ? du : u <= i ? hu : pu;
}, gc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Io = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, $y = /* @__PURE__ */ (() => {
  const t = ne.unfoldr(we);
  return (n) => t(Mn("IterNode", n, ve));
})(), cs = /* @__PURE__ */ nn(C)(Ht), my = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, yy = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, Ny = /* @__PURE__ */ x((t) => (n) => U(C)(n)()(t))(A), xy = /* @__PURE__ */ x((t) => (n) => U(C)(n)()(t))(A), as = yr.traverse(qi), Ii = /* @__PURE__ */ nn(C)(Ht), Jy = (t) => (n) => Pn(C.compare, Cn, t, n), Ty = /* @__PURE__ */ x((t) => (n) => U(C)(n)()(t))(A), vy = /* @__PURE__ */ nn(C)(Ht), wy = (t) => (n) => Pn(C.compare, Cn, t, n), ky = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Pa = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, by = (t) => (n) => ({
  ...n,
  edges: cs(z((e) => b(
    e._1,
    (() => {
      const r = gc(e._1)(t);
      if (r.tag === "Nothing")
        return e._2;
      if (r.tag === "Just") {
        const o = Io(r._1._2)(n.nodes), i = Io(r._1._1)(n.nodes), s = (() => {
          if (i.tag === "Nothing")
            return e._2;
          if (i.tag === "Just") {
            const u = Rt((c) => J, (c) => (a) => v("Just", { head: c, tail: a }), e._2);
            if (u.tag === "Nothing")
              return e._2;
            if (u.tag === "Just") {
              const c = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, a = Ca(c)(u._1.head);
              return [
                (() => {
                  if (a === "TopSide")
                    return { ...u._1.head, y: qe(i._1.shape)(c)(_u)(u._1.head.x) };
                  if (a === "BottomSide")
                    return { ...u._1.head, y: qe(i._1.shape)(c)(du)(u._1.head.x) };
                  if (a === "LeftSide")
                    return { ...u._1.head, x: qe(i._1.shape)(c)(hu)(u._1.head.y) };
                  if (a === "RightSide")
                    return { ...u._1.head, x: qe(i._1.shape)(c)(pu)(u._1.head.y) };
                  f();
                })(),
                ...u._1.tail
              ];
            }
          }
          f();
        })();
        if (o.tag === "Nothing")
          return s;
        if (o.tag === "Just") {
          const u = Wo(s);
          if (u.tag === "Nothing")
            return s;
          if (u.tag === "Just")
            return Qt(u._1.init)((() => {
              const c = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, a = Ca(c)(u._1.last);
              if (a === "TopSide")
                return { ...u._1.last, y: qe(o._1.shape)(c)(_u)(u._1.last.x) };
              if (a === "BottomSide")
                return { ...u._1.last, y: qe(o._1.shape)(c)(du)(u._1.last.x) };
              if (a === "LeftSide")
                return { ...u._1.last, x: qe(o._1.shape)(c)(hu)(u._1.last.y) };
              if (a === "RightSide")
                return { ...u._1.last, x: qe(o._1.shape)(c)(pu)(u._1.last.y) };
              f();
            })());
        }
      }
      f();
    })()
  ))($y(n.edges)))
}), Ly = (t) => (n) => (e) => {
  const r = Ut((o) => o.id === e)(t.graph.edges);
  if (r.tag === "Just")
    return v("Just", r._1);
  if (r.tag === "Nothing")
    return gc(e)(n);
  f();
}, Ey = (t) => (n) => (e) => (r) => ({
  x: r.position._1 * t,
  y: r.position._2 * t,
  w: r.size._1 * t,
  h: r.size._2 * t,
  label: (() => {
    const o = Io(r.node)(n);
    if (o.tag === "Just")
      return o._1;
    if (o.tag === "Nothing")
      return r.node;
    f();
  })(),
  shape: (() => {
    const o = Io(r.node)(e);
    if (o.tag === "Nothing")
      return Ae;
    if (o.tag === "Just")
      return o._1;
    f();
  })()
}), Sy = (t) => ({ id: t, size: b(1, 1), ports: [], label: v("Just", t), shape: Ae }), Cy = (t) => (n) => (e) => (r) => b(r.node, Ey(t)(n)(e)(r)), sg = (t) => {
  const n = ns(`
`)(t);
  return n.length === 0 ? [""] : n;
}, ug = (t) => {
  const n = (e, r) => {
    if (e.tag === "Leaf")
      return r;
    if (e.tag === "Node")
      return n(e._5, zt("Cons", e._4, n(e._6, r)));
    f();
  };
  return Et(Xt.foldr, n(t.interiors, Yt));
}, Py = (t) => cs(yt((n) => v(
  "Just",
  b(n.edge, { id: n.edge, from: { node: n.from, port: J }, to: { node: n.to, port: J } })
))(Tt(t.scenes)((n) => n.tag === "DataFlow" ? yt((e) => e.kind.tag === "SendToken" ? v("Just", e.kind._1) : J)(n._1.events) : []))), cg = (t) => {
  const n = O1(t), e = ft((o) => my(o.id)(n.nodes), t.graph.nodes), r = ft((o) => yy(o.id)(n.edges), t.graph.edges);
  return {
    nodes: [
      ...e,
      ...z(Sy)(Et(
        On.foldr,
        Ie(C.compare, n.nodes, Ny(z((o) => o.id)(e)))
      ))
    ],
    edges: [
      ...r,
      ...yt(Ly(t)(Py(t)))(Et(
        On.foldr,
        Ie(C.compare, n.edges, xy(z((o) => o.id)(r)))
      ))
    ],
    constraints: t.graph.constraints
  };
}, Gy = (t) => {
  const n = as((e) => {
    const r = x0(J0)((() => {
      if (e.label.tag === "Just")
        return e.label._1;
      if (e.label.tag === "Nothing")
        return e.id;
      f();
    })());
    return () => {
      const o = r();
      return b(e.id, o);
    };
  })(cg(t).nodes);
  return () => {
    const e = n();
    return Ii(e);
  };
}, ag = (t) => {
  const n = Gy(t);
  return () => {
    const e = n(), r = as(ag)(ug(t))();
    return x(Jy)(e)(r);
  };
}, Iy = (t) => (n) => {
  const e = Rt((r) => J, (r) => (o) => v("Just", { head: r, tail: o }), n.segments);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ x: e._1.head.start._1 * t, y: e._1.head.start._2 * t }, ...z((r) => ({ x: r.end._1 * t, y: r.end._2 * t }))([e._1.head, ...e._1.tail])];
  f();
}, Ay = (t) => (n) => b(n.edge, Iy(t)(n)), Fy = (t) => (n) => (e) => (r) => ({
  nodes: Ii(z(Cy(et(4) * t)(n)(e))(r.nodes)),
  edges: cs(z(Ay(t))(r.edges)),
  chipExtras: A
}), Ry = (t) => x((n) => (e) => {
  if (e.tag === "Structural")
    return n;
  if (e.tag === "DataFlow")
    return x((r) => (o) => {
      if (o.kind.tag === "SendToken")
        return x((i) => (s) => U(C)(s)()(i))(r)(o.kind._1.labels);
      if (o.kind.tag === "FillNodeWithoutTransition")
        return x((i) => (s) => U(C)(s)()(i))(r)(o.kind._1.labels);
      f();
    })(n)(e._1.events);
  if (e.tag === "EnterNode" || e.tag === "ExitNode")
    return n;
  f();
})(A)(t.scenes), By = (t) => {
  const n = as((e) => {
    const r = x0(J0)(e);
    return () => {
      const o = r();
      return b(e, { labelW: o, charCount: Ze(zr(e)), lineCount: 1 });
    };
  })(Et(
    On.foldr,
    Ty(Tt(Et(On.foldr, Ry(t)))(sg))
  ));
  return () => {
    const e = n();
    return vy(e);
  };
}, fg = (t) => {
  const n = By(t);
  return () => {
    const e = n(), r = as(fg)(ug(t))();
    return x(wy)(e)(r);
  };
}, Qy = et(4) * 8, Wy = (t) => (n) => {
  const e = kp(Qy)(t)(wp(vp)(cg(n)));
  return by(cs(z((r) => b(r.id, b(r.from.node, r.to.node)))(e.edges)))(Fy(8)(Ii(z((r) => b(
    r.id,
    (() => {
      if (r.label.tag === "Just")
        return r.label._1;
      if (r.label.tag === "Nothing")
        return r.id;
      f();
    })()
  ))(e.nodes)))(Ii(z((r) => b(r.id, r.shape))(e.nodes)))(dy(cy)(e).result));
}, Dy = (t) => Tt(t.scenes)((n) => {
  if (n.tag === "Structural")
    return [];
  if (n.tag === "DataFlow")
    return n._1.events;
  if (n.tag === "EnterNode")
    return [];
  if (n.tag === "ExitNode")
    return [];
  f();
}), Hy = (t) => (n) => (e) => {
  const r = (o) => {
    const i = yt((s) => {
      const u = ky(s)(t);
      return u.tag === "Just" ? v("Just", { w: u._1.labelW + 28, h: et(yp(1)(u._1.lineCount)) * 13.2 + 12 }) : J;
    })(Tt(o)(sg));
    return i.length === 0 ? J : v(
      "Just",
      { w: x(Pa)(0)(z((s) => s.w)(i)), h: x(Pa)(0)(z((s) => s.h)(i)) }
    );
  };
  return x((o) => (i) => {
    if (i.kind.tag === "SendToken") {
      const s = gc(i.kind._1.edge)(e.edges), u = r(i.kind._1.labels);
      if (u.tag === "Just" && s.tag === "Just") {
        const c = u._1;
        return wt(C)(rn)(i.kind._1.edge)(z((a) => ({ x: a.x + 14 + c.w, y: a.y - 6 - 8 - c.h }))(s._1))(o);
      }
      return o;
    }
    if (i.kind.tag === "FillNodeWithoutTransition") {
      const s = Io(i.kind._1.node)(e.nodes), u = r(i.kind._1.labels);
      return u.tag === "Just" && s.tag === "Just" ? wt(C)(rn)("__fill__:" + i.kind._1.node)((() => {
        const c = s._1.y - u._1.h - 14, a = s._1.x + s._1.w / 2, g = a - u._1.w / 2, _ = a + u._1.w / 2, d = s._1.y - 14;
        return [{ x: g, y: c }, { x: _, y: c }, { x: g, y: d }, { x: _, y: d }];
      })())(o) : o;
    }
    f();
  })(A)(Dy(n));
}, gg = (t) => (n) => (e) => ({
  layout: (() => {
    const r = Wy(t)(e);
    return { ...r, chipExtras: Hy(n)(e)(r) };
  })(),
  interiors: (() => {
    const r = gg(t)(n), o = (i) => {
      if (i.tag === "Leaf")
        return A;
      if (i.tag === "Node")
        return Ot("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
      f();
    };
    return o(e.interiors);
  })()
}), Ga = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, $u = (t) => (n) => (e) => {
  const r = t < 0.05 ? t : 0.05, o = (s, u) => {
    if (u.tag === "Leaf")
      return s;
    if (u.tag === "Node")
      return o(
        (() => {
          const c = Ga(u._3)(e), a = (() => {
            if (c.tag === "Just")
              return c._1;
            if (c.tag === "Nothing")
              return { x: u._4.x, y: u._4.y, vx: 0, vy: 0 };
            f();
          })(), g = a.vx + (180 * (u._4.x - a.x) - 22 * a.vx) * r, _ = a.vy + (180 * (u._4.y - a.y) - 22 * a.vy) * r;
          return U(C)(u._3)({ x: a.x + g * r, y: a.y + _ * r, vx: g, vy: _ })(o(s, u._5));
        })(),
        u._6
      );
    f();
  }, i = o(A, n);
  return {
    springs: i,
    applied: (() => {
      const s = (u, c) => {
        if (c.tag === "Leaf")
          return u;
        if (c.tag === "Node")
          return s(
            (() => {
              const a = s(u, c._5), g = Ga(c._3)(i);
              if (g.tag === "Just")
                return U(C)(c._3)({ ...c._4, x: g._1.x, y: g._1.y })(a);
              if (g.tag === "Nothing")
                return U(C)(c._3)(c._4)(a);
              f();
            })(),
            c._6
          );
        f();
      };
      return s(A, n);
    })()
  };
};
(function() {
  var t = {}, n = "Pure", e = "Throw", r = "Catch", o = "Sync", i = "Async", s = "Bind", u = "Bracket", c = "Fork", a = "Sequential", g = "Map", _ = "Apply", d = "Alt", l = "Cons", h = "Resume", p = "Release", $ = "Finalizer", m = "Finalized", y = "Forked";
  function N(G, W, Q, j) {
    this.tag = G, this._1 = W, this._2 = Q, this._3 = j;
  }
  function T(G) {
    var W = function(Q, j, q) {
      return new N(G, Q, j, q);
    };
    return W.tag = G, W;
  }
  function w(G) {
    return new N(n, void 0);
  }
  function k(G) {
    try {
      G();
    } catch (W) {
      setTimeout(function() {
        throw W;
      }, 0);
    }
  }
  function L(G, W, Q) {
    try {
      return W(Q());
    } catch (j) {
      return G(j);
    }
  }
  function P(G, W, Q) {
    try {
      return W(Q)();
    } catch (j) {
      return Q(G(j))(), w;
    }
  }
  var D = (function() {
    var G = 1024, W = 0, Q = 0, j = new Array(G), q = !1;
    function O() {
      var rt;
      for (q = !0; W !== 0; )
        W--, rt = j[Q], j[Q] = void 0, Q = (Q + 1) % G, rt();
      q = !1;
    }
    return {
      isDraining: function() {
        return q;
      },
      enqueue: function(rt) {
        var Z;
        W === G && (Z = q, O(), q = Z), j[(Q + W) % G] = rt, W++, q || O();
      }
    };
  })();
  function V(G) {
    var W = {}, Q = 0, j = 0;
    return {
      register: function(q) {
        var O = Q++;
        q.onComplete({
          rethrow: !0,
          handler: function(rt) {
            return function() {
              j--, delete W[O];
            };
          }
        })(), W[O] = q, j++;
      },
      isEmpty: function() {
        return j === 0;
      },
      killAll: function(q, O) {
        return function() {
          if (j === 0)
            return O();
          var rt = 0, Z = {};
          function ot(ct) {
            Z[ct] = W[ct].kill(q, function(lt) {
              return function() {
                delete Z[ct], rt--, G.isLeft(lt) && G.fromLeft(lt) && setTimeout(function() {
                  throw G.fromLeft(lt);
                }, 0), rt === 0 && O();
              };
            })();
          }
          for (var tt in W)
            W.hasOwnProperty(tt) && (rt++, ot(tt));
          return W = {}, Q = 0, j = 0, function(ct) {
            return new N(o, function() {
              for (var lt in Z)
                Z.hasOwnProperty(lt) && Z[lt]();
            });
          };
        };
      }
    };
  }
  var X = 0, I = 1, B = 2, nt = 3, ut = 4, Y = 5, F = 6;
  function E(G, W, Q) {
    var j = 0, q = X, O = Q, rt = null, Z = null, ot = null, tt = null, ct = null, lt = 0, Wt = 0, vt = null, Bt = !0;
    function pt(K) {
      for (var M, gt, _t; ; )
        switch (M = null, gt = null, _t = null, q) {
          case B:
            q = I;
            try {
              O = ot(O), tt === null ? ot = null : (ot = tt._1, tt = tt._2);
            } catch (Nt) {
              q = Y, rt = G.left(Nt), O = null;
            }
            break;
          case nt:
            G.isLeft(O) ? (q = Y, rt = O, O = null) : ot === null ? q = Y : (q = B, O = G.fromRight(O));
            break;
          case I:
            switch (O.tag) {
              case s:
                ot && (tt = new N(l, ot, tt)), ot = O._2, q = I, O = O._1;
                break;
              case n:
                ot === null ? (q = Y, O = G.right(O._1)) : (q = B, O = O._1);
                break;
              case o:
                q = nt, O = L(G.left, G.right, O._1);
                break;
              case i:
                q = ut, O = P(G.left, O._1, function(Nt) {
                  return function() {
                    j === K && (j++, D.enqueue(function() {
                      j === K + 1 && (q = nt, O = Nt, pt(j));
                    }));
                  };
                });
                return;
              case e:
                q = Y, rt = G.left(O._1), O = null;
                break;
              // Enqueue the Catch so that we can call the error handler later on
              // in case of an exception.
              case r:
                ot === null ? ct = new N(l, O, ct, Z) : ct = new N(l, O, new N(l, new N(h, ot, tt), ct, Z), Z), ot = null, tt = null, q = I, O = O._1;
                break;
              // Enqueue the Bracket so that we can call the appropriate handlers
              // after resource acquisition.
              case u:
                lt++, ot === null ? ct = new N(l, O, ct, Z) : ct = new N(l, O, new N(l, new N(h, ot, tt), ct, Z), Z), ot = null, tt = null, q = I, O = O._1;
                break;
              case c:
                q = nt, M = E(G, W, O._2), W && W.register(M), O._1 && M.run(), O = G.right(M);
                break;
              case a:
                q = I, O = H(G, W, O._1);
                break;
            }
            break;
          case Y:
            if (ot = null, tt = null, ct === null)
              q = F, O = Z || rt || O;
            else
              switch (M = ct._3, _t = ct._1, ct = ct._2, _t.tag) {
                // We cannot recover from an unmasked interrupt. Otherwise we should
                // continue stepping, or run the exception handler if an exception
                // was raised.
                case r:
                  Z && Z !== M && lt === 0 ? q = Y : rt && (q = I, O = _t._2(G.fromLeft(rt)), rt = null);
                  break;
                // We cannot resume from an unmasked interrupt or exception.
                case h:
                  Z && Z !== M && lt === 0 || rt ? q = Y : (ot = _t._1, tt = _t._2, q = B, O = G.fromRight(O));
                  break;
                // If we have a bracket, we should enqueue the handlers,
                // and continue with the success branch only if the fiber has
                // not been interrupted. If the bracket acquisition failed, we
                // should not run either.
                case u:
                  lt--, rt === null && (gt = G.fromRight(O), ct = new N(l, new N(p, _t._2, gt), ct, M), (Z === M || lt > 0) && (q = I, O = _t._3(gt)));
                  break;
                // Enqueue the appropriate handler. We increase the bracket count
                // because it should not be cancelled.
                case p:
                  ct = new N(l, new N(m, O, rt), ct, Z), q = I, Z && Z !== M && lt === 0 ? O = _t._1.killed(G.fromLeft(Z))(_t._2) : rt ? O = _t._1.failed(G.fromLeft(rt))(_t._2) : O = _t._1.completed(G.fromRight(O))(_t._2), rt = null, lt++;
                  break;
                case $:
                  lt++, ct = new N(l, new N(m, O, rt), ct, Z), q = I, O = _t._1;
                  break;
                case m:
                  lt--, q = Y, O = _t._1, rt = _t._2;
                  break;
              }
            break;
          case F:
            for (var xt in vt)
              vt.hasOwnProperty(xt) && (Bt = Bt && vt[xt].rethrow, k(vt[xt].handler(O)));
            vt = null, Z && rt ? setTimeout(function() {
              throw G.fromLeft(rt);
            }, 0) : G.isLeft(O) && Bt && setTimeout(function() {
              if (Bt)
                throw G.fromLeft(O);
            }, 0);
            return;
          case X:
            q = I;
            break;
          case ut:
            return;
        }
    }
    function Jt(K) {
      return function() {
        if (q === F)
          return Bt = Bt && K.rethrow, K.handler(O)(), function() {
          };
        var M = Wt++;
        return vt = vt || {}, vt[M] = K, function() {
          vt !== null && delete vt[M];
        };
      };
    }
    function $t(K, M) {
      return function() {
        if (q === F)
          return M(G.right(void 0))(), function() {
          };
        var gt = Jt({
          rethrow: !1,
          handler: function() {
            return M(G.right(void 0));
          }
        })();
        switch (q) {
          case X:
            Z = G.left(K), q = F, O = Z, pt(j);
            break;
          case ut:
            Z === null && (Z = G.left(K)), lt === 0 && (q === ut && (ct = new N(l, new N($, O(K)), ct, Z)), q = Y, O = null, rt = null, pt(++j));
            break;
          default:
            Z === null && (Z = G.left(K)), lt === 0 && (q = Y, O = null, rt = null);
        }
        return gt;
      };
    }
    function mt(K) {
      return function() {
        var M = Jt({
          rethrow: !1,
          handler: K
        })();
        return q === X && pt(j), M;
      };
    }
    return {
      kill: $t,
      join: mt,
      onComplete: Jt,
      isSuspended: function() {
        return q === X;
      },
      run: function() {
        q === X && (D.isDraining() ? pt(j) : D.enqueue(function() {
          pt(j);
        }));
      }
    };
  }
  function S(G, W, Q, j) {
    var q = 0, O = {}, rt = 0, Z = {}, ot = new Error("[ParAff] Early exit"), tt = null, ct = t;
    function lt(Jt, $t, mt) {
      var K = $t, M = null, gt = null, _t = 0, xt = {}, Nt, jt;
      t: for (; ; )
        switch (Nt = null, K.tag) {
          case y:
            if (K._3 === t && (Nt = O[K._1], xt[_t++] = Nt.kill(Jt, function(Ln) {
              return function() {
                _t--, _t === 0 && mt(Ln)();
              };
            })), M === null)
              break t;
            K = M._2, gt === null ? M = null : (M = gt._1, gt = gt._2);
            break;
          case g:
            K = K._2;
            break;
          case _:
          case d:
            M && (gt = new N(l, M, gt)), M = K, K = K._1;
            break;
        }
      if (_t === 0)
        mt(G.right(void 0))();
      else
        for (jt = 0, Nt = _t; jt < Nt; jt++)
          xt[jt] = xt[jt]();
      return xt;
    }
    function Wt(Jt, $t, mt) {
      var K, M, gt, _t, xt, Nt;
      for (G.isLeft(Jt) ? (K = Jt, M = null) : (M = Jt, K = null); ; ) {
        if (gt = null, _t = null, xt = null, Nt = null, tt !== null)
          return;
        if ($t === null) {
          j(K || M)();
          return;
        }
        if ($t._3 !== t)
          return;
        switch ($t.tag) {
          case g:
            K === null ? ($t._3 = G.right($t._1(G.fromRight(M))), M = $t._3) : $t._3 = K;
            break;
          case _:
            if (gt = $t._1._3, _t = $t._2._3, K) {
              if ($t._3 = K, xt = !0, Nt = rt++, Z[Nt] = lt(ot, K === gt ? $t._2 : $t._1, function() {
                return function() {
                  delete Z[Nt], xt ? xt = !1 : mt === null ? Wt(K, null, null) : Wt(K, mt._1, mt._2);
                };
              }), xt) {
                xt = !1;
                return;
              }
            } else {
              if (gt === t || _t === t)
                return;
              M = G.right(G.fromRight(gt)(G.fromRight(_t))), $t._3 = M;
            }
            break;
          case d:
            if (gt = $t._1._3, _t = $t._2._3, gt === t && G.isLeft(_t) || _t === t && G.isLeft(gt))
              return;
            if (gt !== t && G.isLeft(gt) && _t !== t && G.isLeft(_t))
              K = M === gt ? _t : gt, M = null, $t._3 = K;
            else if ($t._3 = M, xt = !0, Nt = rt++, Z[Nt] = lt(ot, M === gt ? $t._2 : $t._1, function() {
              return function() {
                delete Z[Nt], xt ? xt = !1 : mt === null ? Wt(M, null, null) : Wt(M, mt._1, mt._2);
              };
            }), xt) {
              xt = !1;
              return;
            }
            break;
        }
        mt === null ? $t = null : ($t = mt._1, mt = mt._2);
      }
    }
    function vt(Jt) {
      return function($t) {
        return function() {
          delete O[Jt._1], Jt._3 = $t, Wt($t, Jt._2._1, Jt._2._2);
        };
      };
    }
    function Bt() {
      var Jt = I, $t = Q, mt = null, K = null, M, gt;
      t: for (; ; )
        switch (M = null, gt = null, Jt) {
          case I:
            switch ($t.tag) {
              case g:
                mt && (K = new N(l, mt, K)), mt = new N(g, $t._1, t, t), $t = $t._2;
                break;
              case _:
                mt && (K = new N(l, mt, K)), mt = new N(_, t, $t._2, t), $t = $t._1;
                break;
              case d:
                mt && (K = new N(l, mt, K)), mt = new N(d, t, $t._2, t), $t = $t._1;
                break;
              default:
                gt = q++, Jt = Y, M = $t, $t = new N(y, gt, new N(l, mt, K), t), M = E(G, W, M), M.onComplete({
                  rethrow: !1,
                  handler: vt($t)
                })(), O[gt] = M, W && W.register(M);
            }
            break;
          case Y:
            if (mt === null)
              break t;
            mt._1 === t ? (mt._1 = $t, Jt = I, $t = mt._2, mt._2 = t) : (mt._2 = $t, $t = mt, K === null ? mt = null : (mt = K._1, K = K._2));
        }
      for (ct = $t, gt = 0; gt < q; gt++)
        O[gt].run();
    }
    function pt(Jt, $t) {
      tt = G.left(Jt);
      var mt;
      for (var K in Z)
        if (Z.hasOwnProperty(K)) {
          mt = Z[K];
          for (K in mt)
            mt.hasOwnProperty(K) && mt[K]();
        }
      Z = null;
      var M = lt(Jt, ct, $t);
      return function(gt) {
        return new N(i, function(_t) {
          return function() {
            for (var xt in M)
              M.hasOwnProperty(xt) && M[xt]();
            return w;
          };
        });
      };
    }
    return Bt(), function(Jt) {
      return new N(i, function($t) {
        return function() {
          return pt(Jt, $t);
        };
      });
    };
  }
  function H(G, W, Q) {
    return new N(i, function(j) {
      return function() {
        return S(G, W, Q, j);
      };
    });
  }
  return N.EMPTY = t, N.Pure = T(n), N.Throw = T(e), N.Catch = T(r), N.Sync = T(o), N.Async = T(i), N.Bind = T(s), N.Bracket = T(u), N.Fork = T(c), N.Seq = T(a), N.ParMap = T(g), N.ParApply = T(_), N.ParAlt = T(d), N.Fiber = E, N.Supervisor = V, N.Scheduler = D, N.nonCanceler = w, N;
})();
let Bs = null;
function Oy() {
  return Bs || (typeof document > "u" ? null : Bs = document.createElement("canvas").getContext("2d"));
}
const Qs = /* @__PURE__ */ new Map();
function lg(t, n, e, r, o, i) {
  const s = `${e} ${n}px ${t}`, u = s + "|" + r;
  if (Qs.has(u)) return Qs.get(u);
  const c = Oy();
  if (!c) return i;
  c.font = s;
  const a = o(c.measureText(r)), g = typeof document < "u" ? document.fonts : null;
  if (!g || g.check(s)) Qs.set(u, a);
  else if (g && g.load)
    try {
      g.load(s);
    } catch {
    }
  return a;
}
const zy = (t, n, e, r) => lg(t, n, e, r, (o) => o.width, -1), qy = (t, n, e, r) => lg(
  t,
  n,
  e,
  r,
  (o) => ({ ascent: o.actualBoundingBoxAscent, descent: o.actualBoundingBoxDescent }),
  { ascent: -1, descent: -1 }
), _g = (t) => (n) => {
  const e = zy(t.family, t.size, t.weight, zr(n));
  return e < 0 ? et(os(n).length) * t.size * 0.62 : e;
}, dg = (t) => (n) => {
  const e = qy(t.family, t.size, t.weight, zr(n));
  return e.ascent < 0 ? { ascent: t.size * 0.72, descent: t.size * 0.2 } : e;
}, hg = (t) => t, pg = (t) => t, fs = (t) => t, $g = (t) => t, Yy = (t) => t, mg = (t) => t, yg = (t) => t, Xy = /* @__PURE__ */ yg("BaselineTop"), Yr = /* @__PURE__ */ yg("BaselineMiddle"), mu = /* @__PURE__ */ mg("AlignLeft"), gs = /* @__PURE__ */ mg("AlignCenter"), kn = /* @__PURE__ */ Yy("RoundJoin"), _e = /* @__PURE__ */ $g("ButtCap"), He = /* @__PURE__ */ $g("RoundCap"), Vy = /* @__PURE__ */ fs("LayerPolyOut"), Uy = /* @__PURE__ */ fs("LayerPolyIn"), Ky = /* @__PURE__ */ fs("LayerNodeMask"), My = /* @__PURE__ */ fs("LayerOverlay"), Ai = /* @__PURE__ */ pg("NonZero"), jy = /* @__PURE__ */ pg("EvenOdd"), Ia = /* @__PURE__ */ hg("Normal"), gi = /* @__PURE__ */ hg("Difference"), en = { r: 255, g: 255, b: 255, a: 255 }, Ee = { r: 26, g: 26, b: 26, a: 255 }, Zy = (t) => t, Ng = (t) => t, tN = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, se = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, xg = (t) => (n) => (e) => {
  const r = it.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = it.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, yu = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, nN = (t) => (n) => (e) => {
  const r = at.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = at.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, eN = /* @__PURE__ */ Ng("FlatLevel"), rN = /* @__PURE__ */ Ng("NestedLevel"), Jg = /* @__PURE__ */ Zy("GenieSilhouette"), oN = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, yLift: 0 };
  const o = Mr(t);
  return { prng: o.prng, yLift: o.value * e.yJitter * r };
}, iN = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, dx: 0 };
  const o = Mr(t);
  return { prng: o.prng, dx: (o.value * 2 - 1) * e.xJitter * r };
}, Aa = (t) => (n) => {
  const e = n.cy - t.cy, r = n.cx - t.cx, o = Sn(r * r + e * e), i = (t.r * t.r - n.r * n.r + o * o) / (2 * o), s = Sn(tN(0)(t.r * t.r - i * i)), u = t.cx + i * r / o, c = t.cy + i * e / o, a = { x: u - s * e / o, y: c + s * r / o }, g = { x: u + s * e / o, y: c - s * r / o };
  return o === 0 || o > t.r + n.r ? { x: (t.cx + n.cx) / 2, y: t.cy } : a.y < g.y ? a : g;
}, sN = (t) => (n) => {
  const e = se(n)(se(t.w / 2)(t.h / 2));
  return [
    1,
    t.x + e,
    t.y,
    2,
    t.x + t.w - e,
    t.y,
    3,
    t.x + t.w,
    t.y,
    t.x + t.w,
    t.y + e,
    2,
    t.x + t.w,
    t.y + t.h - e,
    3,
    t.x + t.w,
    t.y + t.h,
    t.x + t.w - e,
    t.y + t.h,
    2,
    t.x + e,
    t.y + t.h,
    3,
    t.x,
    t.y + t.h,
    t.x,
    t.y + t.h - e,
    2,
    t.x,
    t.y + e,
    3,
    t.x,
    t.y,
    t.x + e,
    t.y,
    5
  ];
}, uN = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n)
    return { prng: t, r: o };
  if (e)
    return { prng: t, r: o * (1 + i.rJitter) };
  if (r)
    return { prng: t, r: o * i.smallScale };
  const s = Mr(t);
  return { prng: s.prng, r: o * (1 + s.value * i.rJitter) };
}, Tg = (t) => {
  const n = se(t.w)(t.h) / 2;
  return [
    1,
    t.x + n,
    t.y,
    2,
    t.x + t.w - n,
    t.y,
    4,
    t.x + t.w - n + 0.5522847498307936 * n,
    t.y,
    t.x + t.w,
    t.y + n - 0.5522847498307936 * n,
    t.x + t.w,
    t.y + n,
    4,
    t.x + t.w,
    t.y + n + 0.5522847498307936 * n,
    t.x + t.w - n + 0.5522847498307936 * n,
    t.y + t.h,
    t.x + t.w - n,
    t.y + t.h,
    2,
    t.x + n,
    t.y + t.h,
    4,
    t.x + n - 0.5522847498307936 * n,
    t.y + t.h,
    t.x,
    t.y + n + 0.5522847498307936 * n,
    t.x,
    t.y + n,
    4,
    t.x,
    t.y + n - 0.5522847498307936 * n,
    t.x + n - 0.5522847498307936 * n,
    t.y,
    t.x + n,
    t.y,
    5
  ];
}, cN = (t) => (n) => (e) => {
  const r = Mr(t), o = n.length;
  return o === 0 ? { prng: t, idx: -1 } : {
    prng: r.prng,
    idx: (() => {
      const i = xg(0)(o - 1 | 0)($n(ye(r.value * et(e))));
      return i >= 0 && i < n.length ? n[i] : -1;
    })()
  };
}, aN = (t) => (n) => {
  const e = Mr(t), r = n.length;
  return r === 0 ? { prng: t, idx: -1 } : {
    prng: e.prng,
    idx: (() => {
      const o = xg(0)(r - 1 | 0)($n(ye(e.value * et(r))));
      return o >= 0 && o < n.length ? n[o] : -1;
    })()
  };
}, vg = (t) => {
  const n = se(t.w * 0.18)(t.h * 0.6);
  return [1, t.x + n, t.y, 2, t.x + t.w, t.y, 2, t.x + t.w - n, t.y + t.h, 2, t.x, t.y + t.h, 5];
}, wg = (t) => [
  1,
  t.x,
  t.y,
  2,
  t.x + t.w,
  t.y,
  2,
  t.x + t.w,
  t.y + t.h * 0.85,
  4,
  t.x + t.w * 0.66,
  t.y + t.h * 1.05,
  t.x + t.w * 0.34,
  t.y + t.h * 0.65,
  t.x,
  t.y + t.h * 0.85,
  5
], kg = { rBase: 1.2, stepRatio: 0.7, rJitter: 0.35, yJitter: 0.2, xJitter: 0.2, heroShift: 0.2, smallScale: 0.85, smallShift: 0.15, seed: 7, minN: 3 }, fN = (t) => {
  const n = se(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.x + e;
  return [
    1,
    t.x,
    r,
    4,
    t.x,
    r + 0.5522847498 * n,
    o - 0.5522847498 * e,
    r + n,
    o,
    r + n,
    4,
    o + 0.5522847498 * e,
    r + n,
    t.x + t.w,
    r + 0.5522847498 * n,
    t.x + t.w,
    r
  ];
}, bg = (t) => {
  const n = se(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + t.h + 5, o = t.y + n, i = r - n, s = t.x + e;
  return [
    1,
    t.x,
    o,
    4,
    t.x,
    o - 0.5522847498 * n,
    s - 0.5522847498 * e,
    t.y,
    s,
    t.y,
    4,
    s + 0.5522847498 * e,
    t.y,
    t.x + t.w,
    o - 0.5522847498 * n,
    t.x + t.w,
    o,
    2,
    t.x + t.w,
    i,
    4,
    t.x + t.w,
    i + 0.5522847498 * n,
    s + 0.5522847498 * e,
    r,
    s,
    r,
    4,
    s - 0.5522847498 * e,
    r,
    t.x,
    i + 0.5522847498 * n,
    t.x,
    i,
    5
  ];
}, Lg = (t) => (n) => {
  const e = n.y + n.h, r = x_(t.rBase * n.h)(n.w / (2 * (1 + (et(t.minN) - 1) * t.stepRatio))), o = n.w - 2 * r, i = 2 * r * t.stepRatio, s = yu(t.minN)(o <= 0 || i <= 0 ? t.minN : $n(ur(o / i)) + 1 | 0), u = s >= 3 ? At(1, s - 2 | 0) : [], c = u.length, a = Ge(c + 1 | 0, 2), g = a < 1 ? [] : bt(0, a, u), _ = aN(t.seed)((() => {
    const $ = c - a | 0;
    return $ < 1 ? u : bt($, u.length, u);
  })()), d = _.idx, l = cN(_.prng)(ft(($) => $ !== d, g))(yu(1)(g.length - (Hn(Ar)(d)(g) ? 1 : 0) | 0)), h = l.idx, p = s >= 2 ? o / (et(s) - 1) : 0;
  return x(($) => (m) => {
    const y = m === h, N = m === d, T = m === 0 || m === (s - 1 | 0), w = uN($.prng)(T)(N)(y)(r)(t), k = oN(w.prng)(T)(t)(n.h), L = iN(k.prng)(T)(t)(p);
    return {
      prng: L.prng,
      circles: Qt($.circles)({
        cx: n.x + nN(w.r)(n.w - w.r)((s >= 2 ? r + et(m) / (et(s) - 1) * o + L.dx : r + 0 * o + L.dx) + (N ? t.heroShift * p : y ? -1 * t.smallShift * p : 0)),
        cy: e - k.yLift,
        r: w.r
      })
    };
  })({ prng: l.prng, circles: [] })(At(0, s - 1 | 0)).circles;
}, Eg = (t) => (n) => {
  const e = t.length;
  return Ft((r) => (o) => ({
    c: o,
    p1: (() => {
      if (r === 0)
        return { x: o.cx - o.r, y: n };
      const i = r - 1 | 0;
      return i >= 0 && i < t.length ? Aa(t[i])(o) : { x: o.cx - o.r, y: n };
    })(),
    p2: (() => {
      if (r === (e - 1 | 0))
        return { x: o.cx + o.r, y: n };
      const i = r + 1 | 0;
      return i >= 0 && i < t.length ? Aa(o)(t[i]) : { x: o.cx + o.r, y: n };
    })()
  }))(t);
}, Sg = (t) => {
  const n = se(t.h * 0.4)(t.w * 0.2);
  return [
    1,
    t.x + n,
    t.y,
    2,
    t.x + t.w - n,
    t.y,
    2,
    t.x + t.w,
    t.y + t.h / 2,
    2,
    t.x + t.w - n,
    t.y + t.h,
    2,
    t.x + n,
    t.y + t.h,
    2,
    t.x,
    t.y + t.h / 2,
    5
  ];
}, gN = (t) => (n) => (e) => {
  const r = ar(n.y - t.cy)(n.x - t.cx), o = ar(e.y - t.cy)(e.x - t.cx), i = o > r ? o - r : o + 6.283185307179586 - r, s = yu(1)($n(Yi(i / 1.5707963267948966))), u = i / et(s), c = 1.3333333333333333 * J_(u / 4);
  return Tt(At(0, s - 1 | 0))((a) => {
    const g = r + et(a + 1 | 0) * u, _ = t.cx + t.r * oe(g), d = t.cy + t.r * Kn(g), l = r + et(a) * u;
    return [
      4,
      t.cx + t.r * oe(l) - c * t.r * Kn(l),
      t.cy + t.r * Kn(l) + c * t.r * oe(l),
      _ + c * t.r * Kn(g),
      d - c * t.r * oe(g),
      _,
      d
    ];
  });
}, Cg = (t) => (n) => {
  const e = t.h * 0.38, r = Eg(Lg(kg)({ x: t.x, y: t.y - e, w: t.w, h: e }))(t.y), o = se(n)(se(t.w / 2)(t.h / 2));
  return 0 < r.length ? [
    1,
    r[0].p1.x,
    r[0].p1.y,
    ...Tt(r)((i) => gN(i.c)(i.p1)(i.p2)),
    2,
    t.x + t.w,
    t.y + t.h - o,
    3,
    t.x + t.w,
    t.y + t.h,
    t.x + t.w - o,
    t.y + t.h,
    2,
    t.x + o,
    t.y + t.h,
    3,
    t.x,
    t.y + t.h,
    t.x,
    t.y + t.h - o,
    2,
    r[0].p1.x,
    r[0].p1.y,
    5
  ] : sN(t)(n);
}, Pg = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n === "Rectangle")
    return t.drawRoundedRect(e)(r)(o)(i);
  if (n === "Cylinder") {
    const s = bg(e);
    if (o.tag === "Just") {
      if (i.tag === "Just")
        return t.fillStrokePath(s)(o._1)(i._1);
      if (i.tag === "Nothing")
        return t.fillPath(s)(o._1);
      f();
    }
    if (o.tag === "Nothing") {
      if (i.tag === "Just")
        return t.strokePath(s)(i._1);
      if (i.tag === "Nothing")
        return t.Monad0().Applicative0().pure();
    }
    f();
  }
  if (n === "Parallelogram") {
    const s = vg(e);
    if (o.tag === "Just") {
      if (i.tag === "Just")
        return t.fillStrokePath(s)(o._1)(i._1);
      if (i.tag === "Nothing")
        return t.fillPath(s)(o._1);
      f();
    }
    if (o.tag === "Nothing") {
      if (i.tag === "Just")
        return t.strokePath(s)(i._1);
      if (i.tag === "Nothing")
        return t.Monad0().Applicative0().pure();
    }
    f();
  }
  if (n === "Diamond") {
    const s = Sg(e);
    if (o.tag === "Just") {
      if (i.tag === "Just")
        return t.fillStrokePath(s)(o._1)(i._1);
      if (i.tag === "Nothing")
        return t.fillPath(s)(o._1);
      f();
    }
    if (o.tag === "Nothing") {
      if (i.tag === "Just")
        return t.strokePath(s)(i._1);
      if (i.tag === "Nothing")
        return t.Monad0().Applicative0().pure();
    }
    f();
  }
  if (n === "Ellipse") {
    const s = Tg(e);
    if (o.tag === "Just") {
      if (i.tag === "Just")
        return t.fillStrokePath(s)(o._1)(i._1);
      if (i.tag === "Nothing")
        return t.fillPath(s)(o._1);
      f();
    }
    if (o.tag === "Nothing") {
      if (i.tag === "Just")
        return t.strokePath(s)(i._1);
      if (i.tag === "Nothing")
        return t.Monad0().Applicative0().pure();
    }
    f();
  }
  if (n === "Document") {
    const s = wg(e);
    if (o.tag === "Just") {
      if (i.tag === "Just")
        return t.fillStrokePath(s)(o._1)(i._1);
      if (i.tag === "Nothing")
        return t.fillPath(s)(o._1);
      f();
    }
    if (o.tag === "Nothing") {
      if (i.tag === "Just")
        return t.strokePath(s)(i._1);
      if (i.tag === "Nothing")
        return t.Monad0().Applicative0().pure();
    }
    f();
  }
  if (n === "Cloud") {
    const s = Cg(e)(r);
    if (o.tag === "Just") {
      if (i.tag === "Just")
        return t.fillStrokePath(s)(o._1)(i._1);
      if (i.tag === "Nothing")
        return t.fillPath(s)(o._1);
      f();
    }
    if (o.tag === "Nothing") {
      if (i.tag === "Just")
        return t.strokePath(s)(i._1);
      if (i.tag === "Nothing")
        return t.Monad0().Applicative0().pure();
    }
    f();
  }
  return t.drawRoundedRect(e)(r)(o)(i);
}, lN = (t) => () => t.clip("evenodd"), _N = (t) => (n) => () => {
  const e = Math.max(8, Math.ceil(8 / Math.max(n.tile, 1e-3))), r = Math.max(2, Math.round(n.tile * e)), o = document.createElement("canvas");
  o.width = r, o.height = r;
  const i = o.getContext("2d");
  i.scale(e, e), i.fillStyle = n.bgCss, i.fillRect(0, 0, n.tile, n.tile), i.fillStyle = n.dotCss, i.beginPath(), i.arc(n.tile / 2, n.tile / 2, n.dotR, 0, 2 * Math.PI), i.fill();
  const s = t.createPattern(o, "repeat");
  s && typeof s.setTransform == "function" && s.setTransform(new DOMMatrix().scaleSelf(1 / e, 1 / e)), t.save(), t.fillStyle = s, t.fillRect(n.vx, n.vy, n.vw, n.vh), t.restore();
}, Nu = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, lc = (t) => (n) => (e) => {
  const r = n.stroke;
  return () => {
    const o = r.value, i = Y_(t)(e);
    if (o !== e)
      return i(), n.stroke.value = e;
  };
}, dN = (t) => (n) => (e) => {
  const r = n.font;
  return () => {
    const o = r.value, i = n1(t)(e);
    if (o !== e)
      return i(), n.font.value = e;
  };
}, zo = (t) => (n) => (e) => {
  const r = n.fill;
  return () => {
    const o = r.value, i = q_(t)(e);
    if (o !== e)
      return i(), n.fill.value = e;
  };
}, ls = (t) => (n) => {
  const e = n.length, r = (i) => {
    if (i >= e)
      return () => {
      };
    const s = i >= 0 && i < n.length ? n[i] : 0;
    if (s === 1) {
      const u = Rf(t)((() => {
        const a = i + 1 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })())((() => {
        const a = i + 2 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 2) {
      const u = no(t)((() => {
        const a = i + 1 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })())((() => {
        const a = i + 2 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 3) {
      const u = eo(t)({
        cpx: (() => {
          const a = i + 1 | 0;
          return a >= 0 && a < n.length ? n[a] : 0;
        })(),
        cpy: (() => {
          const a = i + 2 | 0;
          return a >= 0 && a < n.length ? n[a] : 0;
        })(),
        x: (() => {
          const a = i + 3 | 0;
          return a >= 0 && a < n.length ? n[a] : 0;
        })(),
        y: (() => {
          const a = i + 4 | 0;
          return a >= 0 && a < n.length ? n[a] : 0;
        })()
      }), c = r(i + 5 | 0);
      return () => (u(), c());
    }
    if (s === 4) {
      const u = r1(t)({
        cp1x: (() => {
          const a = i + 1 | 0;
          return a >= 0 && a < n.length ? n[a] : 0;
        })(),
        cp1y: (() => {
          const a = i + 2 | 0;
          return a >= 0 && a < n.length ? n[a] : 0;
        })(),
        cp2x: (() => {
          const a = i + 3 | 0;
          return a >= 0 && a < n.length ? n[a] : 0;
        })(),
        cp2y: (() => {
          const a = i + 4 | 0;
          return a >= 0 && a < n.length ? n[a] : 0;
        })(),
        x: (() => {
          const a = i + 5 | 0;
          return a >= 0 && a < n.length ? n[a] : 0;
        })(),
        y: (() => {
          const a = i + 6 | 0;
          return a >= 0 && a < n.length ? n[a] : 0;
        })()
      }), c = r(i + 7 | 0);
      return () => (u(), c());
    }
    if (s === 5) {
      const u = Bf(t), c = r(i + 1 | 0);
      return () => (u(), c());
    }
    return () => {
    };
  }, o = Ff(t);
  return () => (o(), r(0)());
}, hN = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Nu(i)(Nu(r / 2)(o / 2)), u = Rf(t)(n + s)(e);
  return () => (u(), no(t)(n + r - s)(e)(), eo(t)({ cpx: n + r, cpy: e, x: n + r, y: e + s })(), no(t)(n + r)(e + o - s)(), eo(t)({ cpx: n + r, cpy: e + o, x: n + r - s, y: e + o })(), no(t)(n + s)(e + o)(), eo(t)({ cpx: n, cpy: e + o, x: n, y: e + o - s })(), no(t)(n)(e + s)(), eo(t)({ cpx: n, cpy: e, x: n + s, y: e })(), Bf(t)());
}, pN = () => ({ font: { value: "" }, fill: { value: "" }, stroke: { value: "" } }), $N = (t) => (n) => {
  const e = M_(t)({ x: 0, y: 0, width: n.width, height: n.height });
  return () => {
    e();
    const r = pN();
    return { ctx: t, surface: n, styleCache: r, maskDepth: { value: 0 } };
  };
}, mN = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, yN = (t) => un(t.weight) + " " + hf(t.size) + "px " + t.family, Je = (t) => {
  const n = hf(et(t.a) / 255);
  return t.a >= 255 ? "rgb(" + un(t.r) + "," + un(t.g) + "," + un(t.b) + ")" : "rgba(" + un(t.r) + "," + un(t.g) + "," + un(t.b) + "," + n + ")";
}, NN = (t) => (n) => (e) => (r) => {
  const o = zo(t)(e)(Je(r));
  return () => (o(), K_(t)({ x: 0, y: 0, width: n.width, height: n.height })());
}, xN = (t) => (n) => (e) => {
  const r = n.font;
  return () => (r.value = "", n.fill.value = "", n.stroke.value = "", _N(t)({
    vx: e.viewport.vx,
    vy: e.viewport.vy,
    vw: e.viewport.vw,
    vh: e.viewport.vh,
    bgCss: Je(e.bgColor),
    dotCss: Je(e.dotColor),
    tile: e.tile,
    dotR: e.dotRadius
  })());
}, JN = (t) => (n) => (e) => (r) => {
  const o = zo(t)(n)(Je(r));
  return () => (o(), ls(t)(e)(), Au(t)());
}, TN = (t) => (n) => (e) => (r) => (o) => {
  const i = zo(t)(n)(Je(r));
  return () => (i(), lc(t)(n)(Je(o.color))(), Gu(t)(o.width)(), Ki(t)((() => {
    if (o.lineJoin === "RoundJoin")
      return Ui;
    if (o.lineJoin === "BevelJoin")
      return Qu;
    if (o.lineJoin === "MiterJoin")
      return Wu;
    f();
  })())(), zu(t)((() => {
    if (o.lineCap === "ButtCap")
      return Ou;
    if (o.lineCap === "RoundCap")
      return Du;
    if (o.lineCap === "SquareCap")
      return Hu;
    f();
  })())(), ls(t)(e)(), Au(t)(), Iu(t)());
}, vN = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Ff(t);
  return () => {
    if (s(), hN(t)(e.x)(e.y)(e.w)(e.h)(r)(), o.tag === "Just" ? (zo(t)(n)(Je(o._1.color))(), Au(t)()) : o.tag === "Nothing" || f(), i.tag === "Just")
      return lc(t)(n)(Je(i._1.color))(), Gu(t)(i._1.width)(), Ki(t)((() => {
        if (i._1.lineJoin === "RoundJoin")
          return Ui;
        if (i._1.lineJoin === "BevelJoin")
          return Qu;
        if (i._1.lineJoin === "MiterJoin")
          return Wu;
        f();
      })())(), zu(t)((() => {
        if (i._1.lineCap === "ButtCap")
          return Ou;
        if (i._1.lineCap === "RoundCap")
          return Du;
        if (i._1.lineCap === "SquareCap")
          return Hu;
        f();
      })())(), Iu(t)();
    i.tag !== "Nothing" && f();
  };
}, wN = (t) => (n) => (e) => (r) => {
  const o = lc(t)(n)(Je(r.color));
  return () => (o(), Gu(t)(r.width)(), Ki(t)((() => {
    if (r.lineJoin === "RoundJoin")
      return Ui;
    if (r.lineJoin === "BevelJoin")
      return Qu;
    if (r.lineJoin === "MiterJoin")
      return Wu;
    f();
  })())(), zu(t)((() => {
    if (r.lineCap === "ButtCap")
      return Ou;
    if (r.lineCap === "RoundCap")
      return Du;
    if (r.lineCap === "SquareCap")
      return Hu;
    f();
  })())(), ls(t)(e)(), Iu(t)());
}, Fa = (t) => (n) => (e) => {
  const r = zo(t)(n)(Je(e.color));
  return () => (r(), dN(t)(n)(yN(e.font))(), d1(t)((() => {
    if (e.align === "AlignLeft")
      return c1;
    if (e.align === "AlignCenter")
      return f1;
    if (e.align === "AlignRight")
      return a1;
    f();
  })())(), _1(t)((() => {
    if (e.baseline === "BaselineTop")
      return o1;
    if (e.baseline === "BaselineMiddle")
      return i1;
    if (e.baseline === "BaselineAlphabetic")
      return s1;
    if (e.baseline === "BaselineBottom")
      return u1;
    f();
  })())(), e1(t)(e.content)(e.x)(e.y)());
}, Gg = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => mN
}, kN = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => Gg
}, bN = (t) => (n) => (e) => {
  const r = Nu(n.width / e.vw)(n.height / e.vh), o = Xs(t)({ translateX: (n.width - e.vw * r) / 2 - e.vx * r, translateY: (n.height - e.vh * r) / 2 - e.vy * r });
  return () => (o(), di(t)({ scaleX: r, scaleY: r })(), Ki(t)(Ui)());
}, LN = { pure: (t) => (n) => () => t, Apply0: () => Gg }, EN = { Applicative0: () => LN, Bind1: () => kN }, Ig = {
  fillPath: (t) => (n) => (e) => {
    const r = JN(e.ctx)(e.styleCache)(t)(n.color), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = wN(e.ctx)(e.styleCache)(t)(n), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = TN(r.ctx)(r.styleCache)(t)(n.color)(e), i = r.maskDepth;
    return () => {
      if (i.value === 0)
        return o();
    };
  },
  drawRoundedRect: (t) => (n) => (e) => (r) => (o) => {
    const i = vN(o.ctx)(o.styleCache)(t)(n)(e)(r), s = o.maskDepth;
    return () => {
      if (s.value === 0)
        return i();
    };
  },
  drawText: (t) => (n) => {
    const e = Fa(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  drawTextAffine: (t) => (n) => (e) => {
    const r = ir(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", j_(e.ctx)(t)(), Fa(e.ctx)(e.styleCache)(n)(), sr(e.ctx)(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "";
    };
  },
  pushTransform: (t) => (n) => {
    const e = ir(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", Xs(n.ctx)({ translateX: t.tx, translateY: t.ty })(), di(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popTransform: (t) => {
    const n = sr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBakedTransform: (t) => (n) => {
    const e = ir(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", Xs(n.ctx)({ translateX: t.tx, translateY: t.ty })(), di(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popBakedTransform: (t) => {
    const n = sr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushClip: (t) => (n) => (e) => {
    const r = ir(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0) {
        if (r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", ls(e.ctx)(t)(), n === "NonZero")
          return U_(e.ctx)();
        if (n === "EvenOdd")
          return lN(e.ctx)();
        f();
      }
    };
  },
  popClip: (t) => {
    const n = sr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBlend: (t) => (n) => {
    const e = ir(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        if (e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", t === "Normal")
          return Cc(n.ctx)(g1)();
        if (t === "Difference")
          return Cc(n.ctx)(l1)();
        f();
      }
    };
  },
  popBlend: (t) => {
    const n = sr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushAlpha: (t) => (n) => {
    const e = ir(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", V_(n.ctx)(t)();
    };
  },
  popAlpha: (t) => {
    const n = sr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushLayer: (t) => (n) => {
    if (t === "LayerNodeMask") {
      const e = n.maskDepth;
      return () => {
        const r = e.value;
        e.value = r + 1 | 0;
      };
    }
    return () => {
    };
  },
  popLayer: (t) => {
    const n = t.maskDepth;
    return () => {
      const e = n.value, r = e - 1 | 0;
      if (e > 0)
        return t.maskDepth.value = r;
    };
  },
  setViewport: (t) => (n) => {
    const e = bN(n.ctx)(n.surface)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  clearBackground: (t) => (n) => {
    const e = NN(n.ctx)(n.surface)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  backgroundDots: (t) => (n) => {
    const e = xN(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = _g(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = dg(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => Jg,
  Monad0: () => EN
}, SN = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Xr = (t) => (n) => (e) => {
  const r = SN(0.05)(1 - t - n);
  return e < t ? 0 : e > 1 - n ? 1 : (e - t) / r;
}, Ra = (t) => {
  const n = at.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = at.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, _s = (t) => {
  if (t.tag === "Hidden")
    return { alpha: 0, scale: 0 };
  if (t.tag === "Visible")
    return { alpha: 1, scale: 1 };
  if (t.tag === "PloppingIn")
    return { alpha: t._1 > 0 ? 1 : 0, scale: To(8)(0.6)(Ra(t._1)) };
  if (t.tag === "PloppingOut")
    return { alpha: t._1 < 1 ? 1 : 0, scale: To(8)(0.6)(Ra(1 - t._1)) };
  f();
};
function CN(t, n) {
  const e = n.x - t.x, r = n.y - t.y;
  return Math.sqrt(e * e + r * r);
}
function PN(t) {
  const n = t.length, e = new Array(n);
  for (let r = 0; r < n; r++) {
    const o = t[r], i = t[(r + 1) % n];
    e[r] = { a: o, b: i, len: CN(o, i) };
  }
  return e;
}
function GN(t, n, e) {
  let r = 0;
  for (let o = 0; o < t.length; o++) {
    const i = t[o], s = r, u = s + i.len;
    if (e <= u) {
      const c = i.len > 1e-6 ? (e - s) / i.len : 0;
      return {
        x: i.a.x + (i.b.x - i.a.x) * c,
        y: i.a.y + (i.b.y - i.a.y) * c
      };
    }
    r = u;
  }
  return n.length > 0 ? n[n.length - 1] : { x: 0, y: 0 };
}
function Ba(t, n) {
  if (n.length === 0) return [];
  const e = PN(n);
  let r = 0;
  for (let i = 0; i < e.length; i++) r += e[i].len;
  const o = new Array(t);
  for (let i = 0; i < t; i++)
    o[i] = GN(e, n, i * r / t);
  return o;
}
function IN(t, n) {
  const e = n.length;
  if (e === 0) return n;
  const r = (t % e + e) % e | 0, o = new Array(e);
  for (let i = 0; i < e; i++) o[i] = n[(i + r) % e];
  return o;
}
function AN(t, n) {
  const e = n.length;
  if (e === 0) return n;
  let r = 0, o = 1 / 0;
  for (let i = 0; i < e; i++) {
    let s = 0;
    for (let u = 0; u < e; u++) {
      const c = t[u] || { x: 0, y: 0 }, a = n[(u + i) % e] || { x: 0, y: 0 }, g = c.x - a.x, _ = c.y - a.y;
      s += g * g + _ * _;
    }
    s < o && (o = s, r = i);
  }
  return IN(r, n);
}
const Qa = (t) => (n) => (e) => {
  const r = Ba(t, n), o = Ba(t, e), i = AN(r, o);
  return { from: r, to: i };
};
function Wa(t) {
  const n = t.length;
  if (n === 0) return { x: 0, y: 0 };
  let e = 0, r = 0;
  for (let o = 0; o < n; o++)
    e += t[o].x, r += t[o].y;
  return { x: e / n, y: r / n };
}
function FN(t, n) {
  const e = n.x - t.x, r = n.y - t.y, o = Math.sqrt(e * e + r * r);
  return o <= 1e-4 ? { x: 1, y: 0 } : { x: e / o, y: r / o };
}
function RN(t, n) {
  const e = n.length;
  if (e === 0) return n;
  const r = new Array(e);
  for (let o = 0; o < e; o++) {
    const i = n[((o - 1) % e + e) % e], s = n[((o + 1) % e + e) % e], u = n[o];
    r[o] = {
      x: u.x + ((i.x + s.x) / 2 - u.x) * t,
      y: u.y + ((i.y + s.y) / 2 - u.y) * t
    };
  }
  return r;
}
function BN(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
const Da = (t) => (n) => (e) => (r) => {
  const o = n.length;
  if (o === 0) return [];
  const i = Wa(n), s = Wa(e), u = FN(i, s), c = new Array(o);
  let a = 1 / 0, g = -1 / 0;
  for (let l = 0; l < o; l++) {
    const h = n[l], p = (h.x - i.x) * u.x + (h.y - i.y) * u.y;
    c[l] = p, p < a && (a = p), p > g && (g = p);
  }
  const _ = g - a;
  let d = new Array(o);
  for (let l = 0; l < o; l++) {
    const h = n[l], p = e[l];
    if (p === void 0) {
      d[l] = h;
      continue;
    }
    const $ = _ <= 1e-4 ? 0 : r.maxDelay * (1 - (c[l] - a) / _), m = Math.max(1e-4, 1 - $), y = BN((t - $) / m), N = y * y * (3 - 2 * y);
    d[l] = {
      x: h.x + (p.x - h.x) * N,
      y: h.y + (p.y - h.y) * N
    };
  }
  for (let l = 0; l < r.smoothPasses; l++)
    d = RN(0.5, d);
  return d;
}, Te = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ha = /* @__PURE__ */ x(Br)(0), Oa = (t) => (n) => (e) => {
  const r = at.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = at.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, QN = /* @__PURE__ */ x((t) => (n) => t + n.len)(0), _c = (t) => {
  const n = Rt((e) => J, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Tt(bt(1, t.length, t))((e) => [2, e.x, e.y]), 5];
  f();
}, WN = (t) => (n) => {
  const e = Te(n)(Te(t.w / 2)(t.h / 2));
  return [
    1,
    t.x + e,
    t.y,
    2,
    t.x + t.w - e,
    t.y,
    3,
    t.x + t.w,
    t.y,
    t.x + t.w,
    t.y + e,
    2,
    t.x + t.w,
    t.y + t.h - e,
    3,
    t.x + t.w,
    t.y + t.h,
    t.x + t.w - e,
    t.y + t.h,
    2,
    t.x + e,
    t.y + t.h,
    3,
    t.x,
    t.y + t.h,
    t.x,
    t.y + t.h - e,
    2,
    t.x,
    t.y + e,
    3,
    t.x,
    t.y,
    t.x + e,
    t.y,
    5
  ];
}, DN = (t) => {
  const n = Rt((e) => J, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Tt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, HN = (t) => {
  const n = { x: t.x, y: t.y, w: t.w, h: t.h };
  if (t.shape === "Cylinder")
    return bg(n);
  if (t.shape === "Parallelogram")
    return vg(n);
  if (t.shape === "Diamond")
    return Sg(n);
  if (t.shape === "Ellipse")
    return Tg(n);
  if (t.shape === "Document")
    return wg(n);
  if (t.shape === "Cloud")
    return Cg(n)(7);
  if (t.shape === "Rectangle")
    return WN(n)(7);
  f();
}, pn = (t) => (n) => (e) => z((r) => {
  const o = et(r) / et(e);
  return { x: t.x + (n.x - t.x) * o, y: t.y + (n.y - t.y) * o };
})(At(0, e - 1 | 0)), ON = (t) => {
  const n = se(t.w * 0.18)(t.h * 0.6);
  return [
    ...pn({ x: t.x + n, y: t.y })({ x: t.x + t.w, y: t.y })(16),
    ...pn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w - n, y: t.y + t.h })(16),
    ...pn({ x: t.x + t.w - n, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(16),
    ...pn({ x: t.x, y: t.y + t.h })({ x: t.x + n, y: t.y })(16)
  ];
}, Vr = (t) => (n) => {
  const e = Te(t)(Te(n.w / 2)(n.h / 2));
  return { ...n, x: n.x + e, y: n.y + e, w: n.w - 2 * e, h: n.h - 2 * e };
}, xu = (t) => (n) => {
  const e = n.y - t.y, r = n.x - t.x;
  return Sn(r * r + e * e);
}, zN = (t) => Tn((n) => (e) => ({ a: n, b: e, len: xu(n)(e) }), t, bt(1, t.length, t)), qN = (t) => (n) => {
  const e = n.length - 1 | 0, r = e >= 0 && e < n.length ? v("Just", n[e]) : J, o = (() => {
    if (r.tag === "Just")
      return [r._1];
    if (r.tag === "Nothing")
      return [];
    f();
  })(), i = 0 < n.length ? v("Just", n[0]) : J, s = (() => {
    if (i.tag === "Just")
      return i._1;
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    f();
  })(), u = n.length;
  return u < 3 ? n : [
    s,
    ...Tt(At(1, u - 2 | 0))((c) => {
      const a = c + 1 | 0, g = a >= 0 && a < n.length ? v("Just", n[a]) : J, _ = c >= 0 && c < n.length ? v("Just", n[c]) : J, d = c - 1 | 0, l = d >= 0 && d < n.length ? v("Just", n[d]) : J;
      if (l.tag === "Just" && _.tag === "Just" && g.tag === "Just") {
        const h = _._1, p = xu(h)(g._1), $ = xu(l._1)(h), m = Te(t)(p / 2), y = Te(t)($ / 2), N = p > 0 ? m / p : 0, T = h.x + (g._1.x - h.x) * N, w = h.y + (g._1.y - h.y) * N, k = $ > 0 ? y / $ : 0, L = h.x + (l._1.x - h.x) * k, P = h.y + (l._1.y - h.y) * k;
        return z((D) => {
          const V = et(D) / et(10), X = 1 - V;
          return { x: X * X * L + 2 * X * V * h.x + V * V * T, y: X * X * P + 2 * X * V * h.y + V * V * w };
        })(At(0, 10));
      }
      return [];
    }),
    ...o
  ];
}, YN = (t) => (n) => (e) => (r) => (o) => z((i) => {
  const s = et(i) / et(o), u = 1 - s, c = s * s * s, a = 3 * u * s * s, g = 3 * u * u * s, _ = u * u * u;
  return { x: _ * t.x + g * n.x + a * e.x + c * r.x, y: _ * t.y + g * n.y + a * e.y + c * r.y };
})(At(0, o - 1 | 0)), XN = (t) => [
  ...pn({ x: t.x, y: t.y })({ x: t.x + t.w, y: t.y })(12),
  ...pn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h * 0.85 })(12),
  ...YN({ x: t.x + t.w, y: t.y + t.h * 0.85 })({ x: t.x + t.w * 0.66, y: t.y + t.h * 1.05 })({ x: t.x + t.w * 0.34, y: t.y + t.h * 0.65 })({
    x: t.x,
    y: t.y + t.h * 0.85
  })(32),
  ...pn({ x: t.x, y: t.y + t.h * 0.85 })({ x: t.x, y: t.y })(12)
], za = (t) => (n) => z((e) => {
  const r = 6.283185307179586 * et(e) / et(64);
  return { x: t.x + n * oe(r), y: t.y + n * Kn(r) };
})(At(0, 63)), ds = (t) => (n) => {
  const e = 0.5522847498 * n;
  return [
    1,
    t.x + n,
    t.y,
    4,
    t.x + n,
    t.y + e,
    t.x + e,
    t.y + n,
    t.x,
    t.y + n,
    4,
    t.x - e,
    t.y + n,
    t.x - n,
    t.y + e,
    t.x - n,
    t.y,
    4,
    t.x - n,
    t.y - e,
    t.x - e,
    t.y - n,
    t.x,
    t.y - n,
    4,
    t.x + e,
    t.y - n,
    t.x + n,
    t.y - e,
    t.x + n,
    t.y,
    5
  ];
}, VN = (t) => {
  const n = t.y + t.h / 2, e = se(t.h * 0.4)(t.w * 0.2);
  return [
    ...pn({ x: t.x + e, y: t.y })({ x: t.x + t.w - e, y: t.y })(10),
    ...pn({ x: t.x + t.w - e, y: t.y })({ x: t.x + t.w, y: n })(8),
    ...pn({ x: t.x + t.w, y: n })({ x: t.x + t.w - e, y: t.y + t.h })(8),
    ...pn({ x: t.x + t.w - e, y: t.y + t.h })({ x: t.x + e, y: t.y + t.h })(10),
    ...pn({ x: t.x + e, y: t.y + t.h })({ x: t.x, y: n })(8),
    ...pn({ x: t.x, y: n })({ x: t.x + e, y: t.y })(8)
  ];
}, Ag = (t) => {
  const n = t.length;
  return n === 0 ? { x: 0, y: 0 } : { x: Ha(z((e) => e.x)(t)) / et(n), y: Ha(z((e) => e.y)(t)) / et(n) };
}, si = (t) => (n) => (e) => (r) => (o) => z((i) => {
  const s = e + (r - e) * (et(i) / et(o));
  return { x: t.x + n * oe(s), y: t.y + n * Kn(s) };
})(At(0, o - 1 | 0)), qa = (t) => (n) => {
  const e = Te(t)(Te(n.w / 2)(n.h / 2));
  return [
    ...pn({ x: n.x + e, y: n.y })({ x: n.x + n.w - e, y: n.y })(6),
    ...si({ x: n.x + n.w - e, y: n.y + e })(e)(4.71238898038469)(6.283185307179586)(12),
    ...pn({ x: n.x + n.w, y: n.y + e })({ x: n.x + n.w, y: n.y + n.h - e })(6),
    ...si({ x: n.x + n.w - e, y: n.y + n.h - e })(e)(0)(1.5707963267948966)(12),
    ...pn({ x: n.x + n.w - e, y: n.y + n.h })({ x: n.x + e, y: n.y + n.h })(6),
    ...si({ x: n.x + e, y: n.y + n.h - e })(e)(1.5707963267948966)(3.141592653589793)(12),
    ...pn({ x: n.x, y: n.y + n.h - e })({ x: n.x, y: n.y + e })(6),
    ...si({ x: n.x + e, y: n.y + e })(e)(3.141592653589793)(4.71238898038469)(12)
  ];
}, Fi = (t) => (n) => (e) => (r) => (o) => (i) => z((s) => {
  const u = r + (o - r) * (et(s) / et(i));
  return { x: t.x + n * oe(u), y: t.y + e * Kn(u) };
})(At(0, i - 1 | 0)), UN = (t) => {
  const n = t.h * 0.38;
  return [
    ...Tt(Eg(Lg(kg)({
      x: t.x,
      y: t.y - n,
      w: t.w,
      h: n
    }))(t.y))((e) => {
      const r = ar(e.p2.y - e.c.cy)(e.p2.x - e.c.cx), o = ar(e.p1.y - e.c.cy)(e.p1.x - e.c.cx);
      return Fi({ x: e.c.cx, y: e.c.cy })(e.c.r)(e.c.r)(o)(r > o ? r : r + 6.283185307179586)(16);
    }),
    ...pn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h })(8),
    ...pn({ x: t.x + t.w, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(12),
    ...pn({ x: t.x, y: t.y + t.h })({ x: t.x, y: t.y })(8)
  ];
}, KN = (t) => {
  const n = Te(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.y + t.h + 5 - n - 2, i = t.x + e;
  return [
    ...Fi({ x: i, y: r })(e)(n)(3.141592653589793)(6.283185307179586)(24),
    ...pn({ x: t.x + t.w, y: r })({ x: t.x + t.w, y: o })(12),
    ...Fi({ x: i, y: o })(e)(n)(0)(3.141592653589793)(24),
    ...pn({ x: t.x, y: o })({ x: t.x, y: r })(12)
  ];
}, $r = (t) => (n) => n.shape === "Cylinder" ? KN(n) : n.shape === "Parallelogram" ? ON(n) : n.shape === "Diamond" ? VN(n) : n.shape === "Ellipse" ? qa(se(n.w)(n.h) / 2)(n) : n.shape === "Document" ? XN(n) : n.shape === "Cloud" ? UN(n) : qa(t)(n), MN = (t) => {
  const n = Te(t.h * 0.075)(t.w * 0.075), e = t.w / 2;
  return Fi({ x: t.x + e, y: t.y + n })(e)(n)(0)(3.141592653589793)(24);
}, jN = (t) => (n) => (e) => x((r) => (o) => {
  const i = r.pos + o.len, s = e < i ? (e - r.pos) / o.len : 1, u = { x: o.a.x + (o.b.x - o.a.x) * s, y: o.a.y + (o.b.y - o.a.y) * s }, c = n > r.pos ? (n - r.pos) / o.len : 0, a = { x: o.a.x + (o.b.x - o.a.x) * c, y: o.a.y + (o.b.y - o.a.y) * c }, g = r.points.length - 1 | 0, _ = g >= 0 && g < r.points.length ? (() => {
    const d = r.points[g].x - a.x;
    return (d < 0 ? -d < 1e-4 : d < 1e-4) && (() => {
      const l = r.points[g].y - a.y;
      return l < 0 ? -l < 1e-4 : l < 1e-4;
    })();
  })() ? Qt(r.points)(u) : [...r.points, a, u] : [a, u];
  return o.len <= 0 || i <= n || r.pos >= e ? { ...r, pos: i } : { pos: i, points: _ };
})({ pos: 0, points: [] })(t).points, ZN = (t) => (n) => (e) => {
  const r = Rt((o) => J, (o) => (i) => v("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just") {
    const o = zN(t), i = QN(o), s = Oa(0)(i)(n * i), u = Oa(0)(i)(e * i);
    return u <= s ? [] : jN(o)(s)(u);
  }
  f();
}, tx = (t) => (n) => (e) => (r) => {
  const o = r.x - e.x, i = r.y - e.y, s = n.x - t.x, u = n.y - t.y, c = e.x - t.x, a = e.y - t.y, g = s * i - u * o, _ = (c * i - a * o) / g, d = (c * u - a * s) / g;
  return (g < 0 ? -g < 1e-9 : g < 1e-9) ? J : _ >= 0 && _ <= 1 && d >= 0 && d <= 1 ? v("Just", _) : J;
}, nx = (t) => (n) => (e) => {
  const r = Lt((o) => (i) => at.compare(o.t)(i.t))(yt((o) => {
    const i = tx(n)(e)(o._1)(o._2);
    return i.tag === "Just" ? v("Just", { t: i._1, p: { x: n.x + (e.x - n.x) * i._1, y: n.y + (e.y - n.y) * i._1 } }) : J;
  })(Tn(Oe, t, [...bt(1, t.length, t), ...bt(0, 1, t)])));
  return 0 < r.length ? v("Just", r[0].p) : J;
}, Ya = (t) => (n) => {
  const e = Wo(n);
  if (e.tag === "Nothing")
    return n;
  if (e.tag === "Just") {
    const r = e._1.init.length - 1 | 0;
    if (r >= 0 && r < e._1.init.length) {
      const o = nx(t)(e._1.init[r])(e._1.last);
      if (o.tag === "Just")
        return Qt(e._1.init)(o._1);
      if (o.tag === "Nothing")
        return n;
      f();
    }
    return n;
  }
  f();
}, dc = (t) => t, Pe = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, lr = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ex = /* @__PURE__ */ Sl(Jf)(Ht), rx = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ox = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Xa = /* @__PURE__ */ dc("SegMove"), ix = /* @__PURE__ */ dc("SegLine"), sx = /* @__PURE__ */ dc("SegQuad"), Va = { offset: 0.4, passes: 1, rMax: 1.5 }, Fg = (t) => $n(ye(t.x * 7919 + t.y * 3001 + t.w * 113 + t.h * 17 + 1)) * -1640531535 | 0, Ri = (t) => (n) => (e) => () => {
  t.push(3), t.push(n.x), t.push(n.y), t.push(e.x), t.push(e.y);
}, hs = (t) => (n) => () => {
  t.push(1), t.push(n.x), t.push(n.y);
}, Fe = (t) => (n) => () => {
  t.push(2), t.push(n.x), t.push(n.y);
}, Ao = /* @__PURE__ */ (() => {
  const t = x((n) => (e) => ((n * 31 | 0) + $n(ye(e.x * 100)) | 0) + $n(ye(e.y * 100)) | 0)(1);
  return (n) => t(n) * -1640531535 | 0;
})(), ux = (t) => {
  const n = [];
  let e = 0, r = { x: 0, y: 0 };
  for (; e < t.length; ) {
    const o = e, i = r, s = o >= 0 && o < t.length ? v("Just", t[o]) : J;
    if (s.tag === "Nothing") {
      e = t.length;
      continue;
    }
    if (s.tag === "Just") {
      if (s._1 === 1) {
        const u = {
          x: (() => {
            const c = o + 1 | 0;
            return c >= 0 && c < t.length ? t[c] : 0;
          })(),
          y: (() => {
            const c = o + 2 | 0;
            return c >= 0 && c < t.length ? t[c] : 0;
          })()
        };
        n.push({ kind: Xa, m: i, c: i, p: u, len: 0 }), r = u, e = o + 3 | 0;
        continue;
      }
      if (s._1 === 2) {
        const u = {
          x: (() => {
            const g = o + 1 | 0;
            return g >= 0 && g < t.length ? t[g] : 0;
          })(),
          y: (() => {
            const g = o + 2 | 0;
            return g >= 0 && g < t.length ? t[g] : 0;
          })()
        }, c = u.x - i.x, a = u.y - i.y;
        n.push({ kind: ix, m: i, c: i, p: u, len: Sn(c * c + a * a) }), r = u, e = o + 3 | 0;
        continue;
      }
      if (s._1 === 3) {
        const u = {
          x: (() => {
            const g = o + 3 | 0;
            return g >= 0 && g < t.length ? t[g] : 0;
          })(),
          y: (() => {
            const g = o + 4 | 0;
            return g >= 0 && g < t.length ? t[g] : 0;
          })()
        }, c = u.x - i.x, a = u.y - i.y;
        n.push({
          kind: sx,
          m: i,
          c: {
            x: (() => {
              const g = o + 1 | 0;
              return g >= 0 && g < t.length ? t[g] : 0;
            })(),
            y: (() => {
              const g = o + 2 | 0;
              return g >= 0 && g < t.length ? t[g] : 0;
            })()
          },
          p: u,
          len: Sn(c * c + a * a) * 1.05
        }), r = u, e = o + 5 | 0;
        continue;
      }
      if (s._1 === 5) {
        n.push({ kind: Xa, m: i, c: i, p: i, len: 0 }), e = o + 1 | 0;
        continue;
      }
      e = t.length;
      continue;
    }
    f();
  }
  return n;
}, cx = (t) => (n) => {
  const e = n.length - 1 | 0, r = e < 1 ? [] : bt(0, e, n), o = (() => {
    const s = r.length - 1 | 0;
    return s >= 0 && s < r.length ? v("Just", r[s]) : J;
  })(), i = n.length - 1 | 0;
  if (i >= 0 && i < n.length && o.tag === "Just") {
    const s = n[i].y - o._1.y, u = n[i].x - o._1.x, c = Sn(u * u + s * s);
    return c <= 1e-4 ? n : Qt((() => {
      const a = n.length - 1 | 0;
      return a < 1 ? [] : bt(0, a, n);
    })())({ x: n[i].x + u / c * t, y: n[i].y + s / c * t });
  }
  return n;
}, ax = (t) => (n) => (e) => Jn(x((r) => (o) => {
  const i = fn(0)(t)(r.prng), s = fn(0)(6.283185307179586)(i.prng);
  return { prng: s.prng, out: [{ x: o.x + i.value * oe(s.value), y: o.y + i.value * Kn(s.value) }, ...r.out] };
})({ prng: n, out: [] })(e).out), fx = (t) => (n) => (e) => {
  if (n.kind === "SegMove")
    return hs(t)(n.p);
  if (n.kind === "SegLine")
    return Fe(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  if (n.kind === "SegQuad")
    return Fe(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  f();
}, gx = (t) => (n) => {
  if (n.kind === "SegMove")
    return hs(t)(n.p);
  if (n.kind === "SegLine")
    return Fe(t)(n.p);
  if (n.kind === "SegQuad")
    return Ri(t)(n.c)(n.p);
  f();
}, Rg = (t) => (n) => {
  const e = ux(n), r = x((u) => (c) => u + c.len)(0)(e) * Pe(0)(lr(1)(t)), o = [];
  let i = 0, s = 0;
  for (; s < e.length; ) {
    const u = s, c = i;
    if (u >= 0 && u < e.length) {
      if (c + e[u].len <= r) {
        const a = e[u];
        gx(o)(a)(), i = c + a.len, s = u + 1 | 0;
        continue;
      }
      if (c >= r) {
        s = e.length;
        continue;
      }
      fx(o)(e[u])((r - c) / Pe(e[u].len)(1e-4))();
    }
    s = e.length;
  }
  return o;
}, Ua = { offset: 1.5, passes: 2, rMax: 14, overshoot: 2.5 }, Bg = (t) => (n) => (e) => (r) => {
  const o = r.y - e.y, i = e.y - n.y, s = r.x - e.x, u = Sn(s * s + o * o), c = e.x - n.x, a = Sn(c * c + i * i), g = lr(t.rMax * (N_(a > 0 && u > 0 ? Pe(-1)(lr(1)((c * s + i * o) / (a * u))) : 1) / 3.141592653589793))(0.4 * lr(a)(u));
  return { inP: a > 0 ? { x: e.x - c / a * g, y: e.y - i / a * g } : e, curr: e, outP: u > 0 ? { x: e.x + s / u * g, y: e.y + o / u * g } : e };
}, Qg = (t) => (n) => {
  const e = n.length, r = [], o = 0 < n.length ? v("Just", n[0]) : J;
  if (o.tag === "Just" ? hs(r)(o._1)() : o.tag === "Nothing" || f(), e >= 3) {
    let s = 1;
    for (; s <= (e - 2 | 0); ) {
      const u = s, c = u + 1 | 0;
      if (c >= 0 && c < n.length) {
        if (u >= 0 && u < n.length) {
          const a = u - 1 | 0;
          if (a >= 0 && a < n.length) {
            const g = Bg(t)(n[a])(n[u])(n[c]);
            Fe(r)(g.inP)(), Ri(r)(g.curr)(g.outP)();
          }
        }
        s = u + 1 | 0;
        continue;
      }
      s = u + 1 | 0;
    }
  }
  const i = n.length - 1 | 0;
  return i >= 0 && i < n.length && e >= 2 && Fe(r)(n[i])(), r;
}, lx = (t) => (n) => (e) => (r) => (o) => {
  if (o.length < 4)
    return Qg(t)(o);
  const i = 0 < o.length ? v("Just", o[0]) : J, s = (() => {
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = o.length - 1 | 0, c = Xe(Xe(n)(u) + u | 0)(u), a = (l) => {
    const h = Xe(l + u | 0)(u);
    return h >= 0 && h < o.length ? o[h] : s;
  }, g = z((l) => Bg(t)(a((c + l | 0) - 1 | 0))(a(c + l | 0))(a((c + l | 0) + 1 | 0)))(At(
    0,
    u - 1 | 0
  )), _ = [], d = 0 < g.length ? v("Just", g[0]) : J;
  if (d.tag === "Just")
    if (hs(_)(d._1.outP)(), ex((() => {
      const l = Rt((h) => J, (h) => (p) => v("Just", p), g);
      if (l.tag === "Nothing")
        return [];
      if (l.tag === "Just")
        return l._1;
      f();
    })())((l) => {
      const h = Fe(_)(l.inP);
      return () => (h(), Ri(_)(l.curr)(l.outP)());
    })(), e)
      Fe(_)(d._1.inP)(), Ri(_)(d._1.curr)(d._1.outP)(), _.push(5);
    else {
      const l = g.length - 1 | 0;
      l >= 0 && l < g.length ? Fe(_)((() => {
        const h = 1 - r;
        return { x: g[l].outP.x + (d._1.inP.x - g[l].outP.x) * h, y: g[l].outP.y + (d._1.inP.y - g[l].outP.y) * h };
      })())() : Fe(_)(d._1.inP)();
    }
  else d.tag === "Nothing" || f();
  return _;
}, Pr = (t) => (n) => (e) => (r) => {
  const o = rx(1)(r.length - 1 | 0), i = fn(0)(et(o))(eu("shape")(n)), s = ox(o - 1 | 0)($n(ye(i.value))), u = i.prng;
  return z((c) => {
    const a = fn(0)(1)(eu(un(c))(u)), g = fn(-0.18)(0.3)(a.prng), _ = a.value < 0.7, d = fn(0.5)(0.85)(g.prng), l = ax(t.offset)(d.prng)(r);
    return { path: e ? lx(t)(s)(_)(g.value)(l) : Qg(t)(l), alpha: d.value };
  })(At(0, t.passes - 1 | 0));
}, _x = (t) => (n) => (e) => Pr(t)(n)(!0)([
  { x: e.x, y: e.y },
  { x: e.x + e.w, y: e.y },
  { x: e.x + e.w, y: e.y + e.h },
  { x: e.x, y: e.y + e.h },
  { x: e.x, y: e.y }
]), dx = (t) => (n) => (e) => {
  const r = Pe(0)(lr(1)(e)), o = n.h / et(4), i = Pe(6)(o * 1.4);
  return yt((s) => s)(z((s) => {
    if (r < Pe(0)(et(s) / et(4) - 0.05))
      return J;
    const u = eu(un(s))(t), c = Pe(0)(et(s) / et(4) - 0.05), a = Xe(s)(2) === 0, g = a ? n.x - 2 : n.x + n.w + 2, _ = a ? n.x + n.w + 2 : n.x - 2, d = n.y + (et(s) + 0.5) * o;
    return v(
      "Just",
      {
        path: Rg(Pe(0)(lr(1)((r - c) / Pe(1e-4)(lr(1)(et(s + 1 | 0) / et(4) + 0.05) - c))))((() => {
          const l = { rMax: 2, offset: 0.6, passes: 1 }, h = Jn(x(($) => (m) => {
            const y = fn(-o * 0.08)(o * 0.08)($.prng);
            return { prng: y.prng, out: [{ x: g + (_ - g) * (et(m) / et(4)), y: d + y.value }, ...$.out] };
          })({ prng: u, out: [] })(At(0, 4)).out), p = h.length < 2 ? [] : Pr(l)(u)(!1)(h);
          return 0 < p.length ? p[0].path : [];
        })()),
        width: i,
        alpha: 1
      }
    );
  })(At(0, 3)));
}, Ws = (t, n, e) => ({ tag: t, _1: n, _2: e }), Wg = (t) => t, Ds = (t, n, e) => ({ tag: t, _1: n, _2: e }), Bi = (t) => (n) => (e) => {
  const r = at.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = at.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, Dg = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Fo = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Hg = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, _n = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Qn = /* @__PURE__ */ (() => {
  const t = ne.unfoldr(we);
  return (n) => t(Mn("IterNode", n, ve));
})(), mr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, hx = Ht.foldMap(A_), li = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Og = /* @__PURE__ */ nn(C)(Ht), px = /* @__PURE__ */ Pf(C), $x = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, hc = /* @__PURE__ */ Wg("LabelsShown"), mx = /* @__PURE__ */ Wg("LabelsHidden"), zg = (t) => {
  const n = t.Monad0().Bind1(), e = t.popTransform, r = t.popAlpha;
  return (o) => (i) => (s) => (u) => (c) => n.bind(t.pushAlpha(o.fadeAlpha))(() => n.bind(t.pushTransform({
    tx: i * (1 - o.popScale),
    ty: s * (1 - o.popScale),
    sx: o.popScale,
    sy: o.popScale
  }))(() => n.bind(t.pushTransform({ tx: 0, ty: u.y * (1 - o.flipY), sx: 1, sy: o.flipY }))(() => n.bind(c)(() => n.bind(e)(() => n.bind(e)(() => r))))));
}, ue = (t) => {
  const n = t.Apply0();
  return (e) => x((r) => (o) => n.apply(n.Functor0().map((i) => df)(r))(e(o)))(t.pure());
}, qg = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = Xr(o)(i)(r), a = 0 < t.length ? v("Just", t[0]) : J, g = (() => {
    if (a.tag === "Just")
      return a._1;
    if (a.tag === "Nothing")
      return u;
    f();
  })(), _ = t.length - 1 | 0, d = _ >= 0 && _ < t.length ? v("Just", t[_]) : J, l = (() => {
    if (d.tag === "Just")
      return d._1;
    if (d.tag === "Nothing")
      return s;
    f();
  })(), h = Qa(128)($r(4)(Vr(2)(n)))(za(g)(6)), p = g.x - u.x, $ = 2 * (() => {
    const B = g.y - u.y;
    return (p < 0 ? -p : p) + (B < 0 ? -B : B);
  })(), m = l.x - s.x, y = 2 * (() => {
    const B = l.y - s.y;
    return (m < 0 ? -m : m) + (B < 0 ? -B : B);
  })(), N = $ + Ho(t) + y, T = N <= 1e-4 ? 1 : 1 - y / N, w = N <= 1e-4 ? 0 : $ / N, k = T - w, L = Qa(128)(za(l)(6))($r(4)(Vr(2)(e))), P = { maxDelay: 0.4, smoothPasses: 2 }, D = Qr(t)(Bi(0)(1)(k <= 1e-4 ? 0 : (c - w) / k)), V = (() => {
    if (D.tag === "Just")
      return D._1;
    if (D.tag === "Nothing")
      return g;
    f();
  })(), X = (() => {
    if (T >= 1)
      return 0;
    const B = (c - T) / (1 - T), nt = B < 0 ? 0 : B > 1 ? 1 : B;
    return nt * nt * (3 - 2 * nt);
  })(), I = (() => {
    if (w <= 1e-4)
      return 1;
    const B = c / w, nt = B < 0 ? 0 : B > 1 ? 1 : B;
    return nt * nt * (3 - 2 * nt);
  })();
  return c < w ? Ds("PolyShape", Da(I)(h.from)(h.to)(P)) : c >= T ? Ds("PolyShape", Da(X)(L.from)(L.to)(P)) : Ds("CircleShape", V, 6);
}, Yg = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = qg(t)(n)(e)(r)(o)(i);
  if (s.tag === "PolyShape")
    return Ag(s._1);
  if (s.tag === "CircleShape")
    return s._1;
  f();
}, yx = (t) => (n) => {
  const e = t.y + t.h - 6, r = t.y + 6, o = t.x + 14, i = t.x + t.w - 14, s = x(Fo)(0)(z((u) => o - 10 < u.x + u.w + 12 && i + 10 > u.x - 12 && r - 10 < u.y + u.h + 12 && e + 10 > u.y - 12 ? Dg((u.x + u.w + 12 - (o - 10)) / 0.7071067811865476)((e + 10 - (u.y - 12)) / 0.7071067811865476) : 0)(n));
  return { ...t, x: t.x + s * 0.7071067811865476, y: t.y - s * 0.7071067811865476 };
}, Nx = (t) => (n) => (e) => x((r) => (o) => {
  const i = Hg(o)(n);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just") {
    const s = yx(i._1)(r.obstacles);
    return { acc: U(C)(o)(s)(r.acc), obstacles: Qt(r.obstacles)(s) };
  }
  f();
})({ acc: A, obstacles: e })(t).acc, pc = /* @__PURE__ */ (() => {
  const t = { r: 24, g: 24, b: 27, a: 255 }, n = { r: 244, g: 244, b: 245, a: 255 }, e = { r: 248, g: 249, b: 246, a: 255 }, r = { r: 26, g: 26, b: 26, a: 255 }, o = { r: 28, g: 101, b: 192, a: 255 }, i = { r: 247, g: 248, b: 250, a: 255 }, s = { r: 42, g: 48, b: 60, a: 255 }, u = { r: 120, g: 130, b: 146, a: 255 };
  return (c) => {
    if (c === "Light")
      return {
        bg: { r: 255, g: 255, b: 255, a: 255 },
        bgTransparent: { r: 0, g: 0, b: 0, a: 0 },
        bgDot: { r: 214, g: 211, b: 209, a: 255 },
        shadowFill: { r: 255, g: 255, b: 255, a: 255 },
        shadowDot: { r: 26, g: 26, b: 26, a: 255 },
        chip: { r: 255, g: 235, b: 130, a: 255 },
        chipShadow: { r: 214, g: 211, b: 209, a: 255 },
        chipText: Ee,
        nodeFill: en,
        nodeStroke: Ee,
        text: Ee,
        edge: Ee,
        arrowFill: Ee,
        tokenOutsideFill: Ee,
        tokenOutsideStroke: en,
        tokenInside: en,
        tokenInsideStroke: en,
        tokenInsideBlend: gi,
        tokenInsideAlpha: 1,
        chipPillFill: Ee,
        chipPillText: en,
        chipHairline: { r: 26, g: 26, b: 26, a: 90 },
        trailDot: Ee,
        wobble: !1,
        fontFamily: "Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    if (c === "Dark")
      return {
        bg: t,
        bgTransparent: { r: 0, g: 0, b: 0, a: 0 },
        bgDot: { r: 63, g: 63, b: 70, a: 255 },
        shadowFill: t,
        shadowDot: n,
        chip: { r: 234, g: 179, b: 8, a: 255 },
        chipShadow: { r: 0, g: 0, b: 0, a: 120 },
        chipText: t,
        nodeFill: Ee,
        nodeStroke: n,
        text: n,
        edge: n,
        arrowFill: n,
        tokenOutsideFill: en,
        tokenOutsideStroke: en,
        tokenInside: en,
        tokenInsideStroke: en,
        tokenInsideBlend: gi,
        tokenInsideAlpha: 1,
        chipPillFill: n,
        chipPillText: t,
        chipHairline: { r: 244, g: 244, b: 245, a: 120 },
        trailDot: n,
        wobble: !1,
        fontFamily: "Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    if (c === "Blueprint")
      return {
        bg: o,
        bgTransparent: { r: 0, g: 0, b: 0, a: 0 },
        bgDot: { r: 90, g: 160, b: 230, a: 255 },
        shadowFill: o,
        shadowDot: en,
        chip: en,
        chipShadow: { r: 0, g: 0, b: 0, a: 120 },
        chipText: o,
        nodeFill: o,
        nodeStroke: en,
        text: en,
        edge: en,
        arrowFill: en,
        tokenOutsideFill: en,
        tokenOutsideStroke: en,
        tokenInside: en,
        tokenInsideStroke: en,
        tokenInsideBlend: Ia,
        tokenInsideAlpha: 0.35,
        chipPillFill: en,
        chipPillText: o,
        chipHairline: { r: 255, g: 255, b: 255, a: 120 },
        trailDot: en,
        wobble: !1,
        fontFamily: "Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    if (c === "Whiteboard")
      return {
        bg: e,
        bgTransparent: { r: 0, g: 0, b: 0, a: 0 },
        bgDot: { r: 0, g: 0, b: 0, a: 0 },
        shadowFill: e,
        shadowDot: r,
        chip: { r: 217, g: 74, b: 56, a: 255 },
        chipShadow: { r: 26, g: 26, b: 26, a: 60 },
        chipText: e,
        nodeFill: e,
        nodeStroke: r,
        text: r,
        edge: r,
        arrowFill: r,
        tokenOutsideFill: r,
        tokenOutsideStroke: e,
        tokenInside: e,
        tokenInsideStroke: e,
        tokenInsideBlend: Ia,
        tokenInsideAlpha: 1,
        chipPillFill: r,
        chipPillText: e,
        chipHairline: { r: 26, g: 26, b: 26, a: 90 },
        trailDot: r,
        wobble: !0,
        fontFamily: "Supermarker, Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    if (c === "Isometric")
      return {
        bg: i,
        bgTransparent: { r: 0, g: 0, b: 0, a: 0 },
        bgDot: { r: 214, g: 218, b: 224, a: 255 },
        shadowFill: i,
        shadowDot: s,
        chip: { r: 255, g: 235, b: 130, a: 255 },
        chipShadow: { r: 100, g: 110, b: 125, a: 90 },
        chipText: s,
        nodeFill: { r: 236, g: 239, b: 244, a: 255 },
        nodeStroke: s,
        text: s,
        edge: u,
        arrowFill: u,
        tokenOutsideFill: s,
        tokenOutsideStroke: en,
        tokenInside: en,
        tokenInsideStroke: en,
        tokenInsideBlend: gi,
        tokenInsideAlpha: 1,
        chipPillFill: s,
        chipPillText: en,
        chipHairline: { r: 60, g: 66, b: 78, a: 90 },
        trailDot: s,
        wobble: !1,
        fontFamily: "Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    f();
  };
})(), Ju = (t) => (n) => Tt(Qn(t.nodes))((e) => {
  const r = _n(e._1)(n.nodes);
  return r.tag === "Just" && _s(r._1).alpha > 0 ? HN(e._2) : [];
}), xx = (t) => (n) => (e) => [
  1,
  t.vx,
  t.vy,
  2,
  t.vx + t.vw,
  t.vy,
  2,
  t.vx + t.vw,
  t.vy + t.vh,
  2,
  t.vx,
  t.vy + t.vh,
  5,
  ...Ju(n)(e)
], Jx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = yr.traverse(r);
  return (i) => (s) => {
    const u = nr(s), c = 0.32 * i.size;
    return o((a) => e.bind(a === 0 ? r.pure(0) : t.measureText(i)(mn(a)(s)))((g) => e.bind(t.measureText(i)(mn(a + 1 | 0)(s)))((_) => e.bind(t.measureInk(i)(a >= 0 && a < u.length ? Mi(u[a]) : " "))((d) => r.pure({ x: g, w: _ - g, up: d.ascent - c, down: d.descent + c })))))(At(
      0,
      u.length - 1 | 0
    ));
  };
}, Tx = (t) => (n) => {
  const e = (o) => (o.x - n.x) * (o.x - n.x) + (o.y - n.y) * (o.y - n.y), r = x((o) => (i) => e(i) < e(o) ? i : o)({ x: t.x, y: t.y })([{ x: t.x, y: t.y }, { x: t.x + t.w, y: t.y }, { x: t.x, y: t.y + t.h }, { x: t.x + t.w, y: t.y + t.h }]);
  return z((o) => {
    const i = et(o) / 5;
    return { x: r.x + (n.x - r.x) * i, y: r.y + (n.y - r.y) * i };
  })([1, 2, 3, 4]);
}, $c = (t) => {
  const n = ns(`
`)(t);
  return n.length === 0 ? [""] : n;
}, vx = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = Xr(o)(i)(r), a = 0 < t.length ? v("Just", t[0]) : J, g = (() => {
    if (a.tag === "Just")
      return a._1;
    if (a.tag === "Nothing")
      return u;
    f();
  })(), _ = t.length - 1 | 0, d = _ >= 0 && _ < t.length ? v("Just", t[_]) : J, l = (() => {
    if (d.tag === "Just")
      return d._1;
    if (d.tag === "Nothing")
      return s;
    f();
  })(), h = g.x - u.x, p = 2 * (() => {
    const P = g.y - u.y;
    return (h < 0 ? -h : h) + (P < 0 ? -P : P);
  })(), $ = l.x - s.x, m = 2 * (() => {
    const P = l.y - s.y;
    return ($ < 0 ? -$ : $) + (P < 0 ? -P : P);
  })(), y = p + Ho(t) + m, N = y <= 1e-4 ? 1 : 1 - m / y, T = y <= 1e-4 ? 0 : p / y, w = N - T, k = Qr(t)(Bi(0)(1)(w <= 1e-4 ? 0 : (c - T) / w)), L = (() => {
    if (k.tag === "Just")
      return k._1;
    if (k.tag === "Nothing")
      return g;
    f();
  })();
  return c < T ? Ws("InsideRect", Vr(2)(n)) : c >= N ? Ws("InsideRect", Vr(2)(e)) : Ws("InsideBall", L, 6);
}, wx = { offset: 0.8, passes: 2, rMax: 5 }, kx = (t) => {
  const n = t.Monad0().Applicative0(), e = ue(n);
  return (r) => (o) => (i) => (s) => {
    const u = { color: s, width: 1, lineJoin: kn, lineCap: _e }, c = { color: i, flat: !0 }, a = (g) => t.drawRoundedRect({ x: g.x, y: g.y, w: g.w, h: g.h })(4)(v("Just", c))(v("Just", u));
    return e((g) => {
      if (g._2.tag === "Travelling") {
        const _ = mr(g._2._1.edge)(r.edges), d = _n(g._2._1.target)(r.nodes), l = _n(g._2._1.source)(r.nodes);
        if (l.tag === "Just" && d.tag === "Just" && _.tag === "Just") {
          const h = vx((() => {
            if (g._2._1.direction === "Forward")
              return _._1;
            if (g._2._1.direction === "Backward")
              return Jn(_._1);
            f();
          })())(l._1)(d._1)(g._2._1.progress)(g._2._1.holdPre)(g._2._1.holdPost);
          if (h.tag === "InsideRect")
            return a(h._1);
          if (h.tag === "InsideBall")
            return t.fillStrokePath(ds(h._1)(h._2))(c)(u);
          f();
        }
        return n.pure();
      }
      if (g._2.tag === "Filling") {
        const _ = _n(g._2._1.node)(r.nodes);
        if (_.tag === "Just")
          return a(Vr(2)(_._1));
        if (_.tag === "Nothing")
          return n.pure();
        f();
      }
      return n.pure();
    })(Qn(o.tokens));
  };
}, Ka = (t) => (n) => (e) => (r) => t.strokePath((() => {
  const o = Rt(
    (i) => J,
    (i) => (s) => v("Just", { head: i, tail: s }),
    z((i) => i.pt)(d_(
      (i) => (s) => {
        const u = et(s) / et(72), c = fn(-0.18)(0.18)(i.prng), a = fn(-0.1)(0.1)(c.prng), g = fn(-0.07)(0.07)(a.prng), _ = e * (0.05 + 0.55 * u) * (1 + a.value), d = u * 28.274333882308138 + c.value;
        return { prng: g.prng, pt: { x: n.x + oe(d) * _ + g.value * e, y: n.y + Kn(d) * _ + g.value * e } };
      },
      { prng: 137, pt: { x: n.x, y: n.y } },
      At(0, 72)
    ))
  );
  if (o.tag === "Just")
    return [1, o._1.head.x, o._1.head.y, ...hx((i) => [2, i.x, i.y])(o._1.tail)];
  if (o.tag === "Nothing")
    return [];
  f();
})())({ color: r, width: 5.5, lineJoin: kn, lineCap: He }), bx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = ue(n.Applicative0());
  return (i) => (s) => (u) => o((c) => e.bind(t.pushAlpha(c.alpha))(() => e.bind(t.strokePath(c.path)({
    color: i.nodeFill,
    width: c.width,
    lineJoin: kn,
    lineCap: He
  }))(() => r)))(dx(Fg(s) + 7777 | 0)(s)(u));
}, Xg = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = n.Applicative0(), i = ue(o), s = t.popClip, u = ue(o), c = yr.traverse(o), a = Jx(t), g = bx(t), _ = t.popTransform;
  return (d) => (l) => (h) => (p) => ($) => (m) => (y) => {
    const N = (F) => e.bind(t.pushAlpha(F.alpha))(() => e.bind(t.strokePath(F.path)({
      color: l.nodeStroke,
      width: 2,
      lineJoin: kn,
      lineCap: He
    }))(() => r)), T = { family: l.fontFamily, size: l.wobble ? 15 : 11, weight: l.wobble ? 800 : 500 }, w = ns(`
`)(m.label === "" ? $ : m.label), k = w.length === 0 ? [""] : w, L = T.size * 1.2, P = m.shape === "Cylinder" ? t.strokePath(fN({ x: m.x, y: m.y, w: m.w, h: m.h }))({
      color: l.nodeStroke,
      width: 1.25,
      lineJoin: kn,
      lineCap: _e
    }) : o.pure(), D = (m.shape === "Cylinder" ? (m.y + (m.y + m.h + 5 - 2 * se(m.h * 0.075)(m.w * 0.075))) / 2 : (m.y + m.y + m.h) / 2) - et(k.length) * L / 2 + L / 2, V = y.tag === "PloppingOut" && l.wobble ? y._1 : -1, X = V >= 0, I = _s(y), B = X ? { alpha: 1, scale: 1 } : I, nt = m.x + m.w / 2, ut = m.y + m.h / 2, Y = e.bind(t.pushAlpha(B.alpha * h))(() => e.bind(t.pushTransform({
      tx: nt * (1 - B.scale),
      ty: ut * (1 - B.scale),
      sx: B.scale,
      sy: B.scale
    }))(() => {
      const F = { x: m.x, y: m.y, w: m.w, h: m.h }, E = {
        color: l.nodeStroke,
        width: l.wobble ? 2 : 1.25,
        lineJoin: kn,
        lineCap: l.wobble ? He : _e
      };
      return e.bind((() => {
        if (l.wobble) {
          if (m.shape === "Rectangle")
            return i(N)(_x(Ua)(Fg(F))(F));
          const S = $r(7)(m);
          return e.bind(i(N)((() => {
            const H = Ao(S);
            return S.length < 4 ? [] : Pr(Va)(H)(!0)(S);
          })()))(() => u((H) => i(N)((() => {
            const G = Ao(H);
            return H.length < 2 ? [] : Pr(Va)(G)(!1)(H);
          })()))(m.shape === "Cylinder" ? [MN(m)] : []));
        }
        return e.bind(Pg(t)(m.shape)(F)(7)(v("Just", { color: l.nodeFill, flat: !1 }))(v(
          "Just",
          E
        )))(() => P);
      })())(() => e.bind((() => {
        if (p.tag === "Just" && l.wobble && !X) {
          const S = p._1;
          return e.bind(c(a(T))(k))((H) => {
            const G = Lt((K) => (M) => at.compare(K.x)(M.x)), W = $n(ye(m.x * 7919 + m.y * 3001)) * -1640531535 | 0, Q = fn(5)(7.5)(W), j = fn(0)(Q.value)(Q.prng), q = -(1 + 2 * fn(-1)(1)(j.prng).value * 3.141592653589793 / 180), O = (K, M, gt, _t, xt) => G(yt((Nt) => Nt)([
              q * M + K >= _t && q * M + K <= xt ? v("Just", { x: M, y: q * M + K }) : J,
              q * gt + K >= _t && q * gt + K <= xt ? v("Just", { x: gt, y: q * gt + K }) : J,
              (() => {
                const Nt = (_t - K) / q;
                return Nt >= M && Nt <= gt ? v("Just", { x: Nt, y: _t }) : J;
              })(),
              (() => {
                const Nt = (xt - K) / q;
                return Nt >= M && Nt <= gt ? v("Just", { x: Nt, y: xt }) : J;
              })()
            ])), rt = Q.value, Z = Xe(S.frameHash)(3), ot = Z === 0 ? { r: 200, g: 35, b: 30, a: 220 } : Z === 1 ? { r: 35, g: 150, b: 80, a: 220 } : { r: 30, g: 80, b: 200, a: 220 }, tt = m.x + m.w / 2, ct = zn(Ft((K) => (M) => Ft((() => {
              const gt = D + et(K) * L, _t = tt - x((xt) => (Nt) => xt + Nt.w)(0)(M) / 2;
              return (xt) => (Nt) => {
                const jt = T.size * 0.1, Ln = xt - 1 | 0, ee = Ln >= 0 && Ln < M.length && xt > 0 ? (M[Ln].x + M[Ln].w + Nt.x) / 2 : Nt.x - jt;
                return {
                  x: _t + ee - 1,
                  y: gt - Nt.up - 1,
                  w: Fo(0)((() => {
                    const Xn = xt + 1 | 0;
                    return Xn >= 0 && Xn < M.length && xt < (M.length - 1 | 0) ? (Nt.x + Nt.w + M[Xn].x) / 2 - ee : Nt.x + Nt.w + jt - ee;
                  })()) + 2,
                  h: Nt.up + Nt.down + 2
                };
              };
            })())(M))(H)), lt = m.y + 4, Wt = m.x + m.w - 4, vt = m.x + 4, Bt = lt - q * vt + j.value, pt = m.y + m.h - 4, Jt = Tt(Tt(Ft((K) => (M) => {
              const gt = (M.from.x + M.to.x) / 2, _t = (M.from.y + M.to.y) / 2, xt = fn(-1)(1)(W + (911 * (K + 1 | 0) | 0) | 0), Nt = fn(-3)(5)(xt.prng), jt = xt.value * 3.141592653589793 / 180, Ln = oe(jt), ee = Kn(jt), Xn = (yn) => ({ x: gt + (yn.x - gt) * Ln - (yn.y - _t) * ee, y: _t + (yn.x - gt) * ee + (yn.y - _t) * Ln });
              return {
                from: (() => {
                  const yn = Xn(M.from), Pt = yn.y - _t, Gt = yn.x - gt, Wn = Sn(Gt * Gt + Pt * Pt), Vn = Wn < 1e-4 ? 1 : (Wn + Nt.value) / Wn;
                  return { x: gt + Gt * Vn, y: _t + Pt * Vn };
                })(),
                to: (() => {
                  const yn = Xn(M.to), Pt = fn(-3)(5)(Nt.prng).value, Gt = yn.y - _t, Wn = yn.x - gt, Vn = Sn(Wn * Wn + Gt * Gt), ke = Vn < 1e-4 ? 1 : (Vn + Pt) / Vn;
                  return { x: gt + Wn * ke, y: _t + Gt * ke };
                })()
              };
            })(yt((K) => {
              const M = O(Bt + et(K) * rt, vt, Wt, lt, pt);
              return M.length === 2 ? v("Just", { from: M[0], to: M[1] }) : J;
            })(At(0, li(1)($n(ye((pt - q * Wt - Bt) / rt)))))))((K) => ft(
              (M) => M.to.x - M.from.x > 1,
              x((M) => (gt) => Tt(M)((_t) => {
                const xt = O(_t.from.y - q * _t.from.x, gt.x, gt.x + gt.w, gt.y, gt.y + gt.h);
                return xt.length === 2 ? xt[0].x > _t.from.x + 1e-3 && xt[1].x < _t.to.x - 1e-3 ? [{ from: _t.from, to: xt[0] }, { from: xt[1], to: _t.to }] : xt[0].x <= _t.from.x + 1e-3 && xt[1].x < _t.to.x - 1e-3 ? [{ from: xt[1], to: _t.to }] : xt[0].x > _t.from.x + 1e-3 && xt[1].x >= _t.to.x - 1e-3 ? [{ from: _t.from, to: xt[0] }] : [] : [_t];
              }))([K])(ct)
            )))((K) => (() => {
              const M = K.to.x - K.from.x;
              return Sn(2) * (M >= 0 ? M : -M) <= 28;
            })() ? [K] : [
              { from: K.from, to: { x: K.from.x + (K.to.x - K.from.x) * 0.495, y: K.from.y + (K.to.y - K.from.y) * 0.495 } },
              { from: { x: K.from.x + (K.to.x - K.from.x) * 0.505, y: K.from.y + (K.to.y - K.from.y) * 0.505 }, to: K.to }
            ]), $t = Jt.length, mt = (K) => Fo(0)(Dg(1)(S.t * et($t) - et(K)));
            return e.bind(t.pushClip(_c($r(7)(m)))(Ai))(() => e.bind(i((K) => {
              const M = K._1, gt = fn(1.4)(1.9)(W + (1303 * (M + 1 | 0) | 0) | 0), _t = fn(0.35)(0.8)(gt.prng), xt = i((Nt) => e.bind(t.pushAlpha(Nt.alpha * _t.value))(() => e.bind(t.strokePath(Rg(mt(M))(Nt.path))({
                color: ot,
                width: gt.value,
                lineJoin: kn,
                lineCap: He
              }))(() => r)))(Pr({ ...Ua, rMax: 0, offset: 0.5 })(W + (53 * (M + 1 | 0) | 0) | 0)(!1)([K._2.from, K._2.to]));
              return mt(M) > 0 ? xt : o.pure();
            })(Ft(Oe)(Jt)))(() => s));
          });
        }
        return o.pure();
      })())(() => e.bind((() => {
        if (d === "LabelsShown")
          return i((S) => t.drawText({
            x: m.x + m.w / 2,
            y: D + et(S._1) * L,
            content: S._2,
            font: T,
            color: l.text,
            align: gs,
            baseline: Yr
          }))(Ft(Oe)(k));
        if (d === "LabelsHidden")
          return o.pure();
        f();
      })())(() => e.bind((() => {
        const S = g(l)(F)(V);
        return X ? S : o.pure();
      })())(() => e.bind(_)(() => r)))));
    }));
    return B.alpha * h > 0 ? Y : o.pure();
  };
}, Lx = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = Xg(t), i = t.popAlpha, s = ue(e);
  return (u) => (c) => (a) => {
    const g = { ...u, nodeFill: u.text, text: u.nodeFill, nodeStroke: u.nodeFill };
    return s((_) => {
      const d = _n(_._1)(a.nodes), l = _n(_._1)(c.nodes), h = (() => {
        if (l.tag === "Just" && d.tag === "Just") {
          const p = d._1, $ = l._1;
          return r.bind(t.pushAlpha(_._2))(() => r.bind(o(hc)(g)(1)(J)(_._1)($)(p))(() => i));
        }
        return e.pure();
      })();
      return _._2 > 0 ? h : e.pure();
    })(Qn(a.nodeInvert));
  };
}, Vg = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => (i) => r ? n.bind(t.clearBackground(e.bgTransparent))(() => t.setViewport(i)) : e.wobble ? n.bind(t.setViewport(i))(() => t.clearBackground(e.bg)) : n.bind(t.setViewport(i))(() => t.backgroundDots({
    viewport: i,
    bgColor: e.bg,
    dotColor: e.bgDot,
    tile: 12 * o,
    dotRadius: 0.7 * o
  }));
}, Ex = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = t.popAlpha;
  return (i) => (s) => (u) => (c) => (a) => (g) => (_) => (d) => (l) => {
    const h = (() => {
      if (l > 1e-4 && _ > 1 - l) {
        const $ = (1 - _) / l;
        return $ < 0 ? 0 : $ > 1 ? 1 : $;
      }
      if (d > 1e-4 && _ < d) {
        const $ = _ / d;
        return $ < 0 ? 0 : $ > 1 ? 1 : $;
      }
      return 1;
    })(), p = qg(c)(a)(g)(_)(d)(l);
    if (p.tag === "CircleShape")
      return i ? Ka(t)(p._1)(p._2)({ r: 200, g: 35, b: 30, a: 220 }) : t.fillStrokePath(ds(p._1)(p._2))({ color: s, flat: !0 })({
        color: u,
        width: 1,
        lineJoin: kn,
        lineCap: _e
      });
    if (p.tag === "PolyShape" && i && p._1.length >= 3)
      return r.bind(t.pushAlpha(h))(() => r.bind(Ka(t)(Ag(p._1))(6)({
        r: 200,
        g: 35,
        b: 30,
        a: 220
      }))(() => o));
    if (p.tag === "PolyShape")
      return i ? e.pure() : p._1.length >= 3 ? t.fillStrokePath(_c(p._1))({ color: s, flat: !0 })({
        color: u,
        width: 1,
        lineJoin: kn,
        lineCap: _e
      }) : e.pure();
    f();
  };
}, Sx = (t) => {
  const n = t.Monad0().Bind1(), e = t.popAlpha;
  return (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
    const g = Xr(c)(a)(u), _ = { x: i.x + i.w / 2, y: i.y + i.h / 2 }, d = { x: s.x + s.w / 2, y: s.y + s.h / 2 }, l = (h, p) => n.bind(t.pushAlpha(p))(() => n.bind(t.fillStrokePath(ds(h)(6))({
      color: r,
      flat: !0
    })({ color: o, width: 1, lineJoin: kn, lineCap: _e }))(() => e));
    return g < 0.5 ? l(
      _,
      (() => {
        const h = g * 2;
        return 1 - (h < 0 ? 0 : h > 1 ? 1 : h) * (h < 0 ? 0 : h > 1 ? 1 : h) * (h < 0 ? 3 : h > 1 ? 1 : 3 - 2 * h);
      })()
    ) : l(
      d,
      (() => {
        const h = (g - 0.5) * 2;
        return (h < 0 ? 0 : h > 1 ? 1 : h) * (h < 0 ? 0 : h > 1 ? 1 : h) * (h < 0 ? 3 : h > 1 ? 1 : 3 - 2 * h);
      })()
    );
  };
}, Qi = (t) => {
  const n = Ex(t), e = Sx(t), r = t.Monad0().Applicative0(), o = ue(r);
  return (i) => (s) => (u) => (c) => (a) => o((g) => {
    if (g._2.tag === "Travelling") {
      const _ = _n(g._2._1.target)(s.nodes), d = _n(g._2._1.source)(s.nodes);
      if (d.tag === "Just" && _.tag === "Just") {
        const l = mr(g._2._1.edge)(s.edges);
        if (l.tag === "Just")
          return n(i)(c)(a)((() => {
            if (g._2._1.direction === "Forward")
              return l._1;
            if (g._2._1.direction === "Backward")
              return Jn(l._1);
            f();
          })())(d._1)(_._1)(g._2._1.progress)(g._2._1.holdPre)(g._2._1.holdPost);
        if (l.tag === "Nothing")
          return e(c)(a)(d._1)(_._1)(g._2._1.progress)(g._2._1.holdPre)(g._2._1.holdPost);
        f();
      }
      return r.pure();
    }
    if (g._2.tag === "Filling") {
      if (i)
        return r.pure();
      const _ = _n(g._2._1.node)(s.nodes);
      if (_.tag === "Just")
        return t.fillStrokePath(_c($r(4)(Vr(2)(_._1))))({
          color: c,
          flat: !0
        })({ color: a, width: 1, lineJoin: kn, lineCap: _e });
      if (_.tag === "Nothing")
        return r.pure();
      f();
    }
    return r.pure();
  })(Qn(u.tokens));
}, Ug = (t) => {
  const n = Qi(t), e = t.Monad0(), r = e.Bind1(), o = Qi(t), i = kx(t), s = t.popClip, u = t.popBlend, c = t.popLayer, a = e.Applicative0(), g = ue(a), _ = t.popAlpha;
  return (d) => (l) => (h) => (p) => {
    const $ = l.wobble ? n(!0)(h)(p)(l.tokenInside)(l.tokenInsideStroke) : r.bind(t.insideTokenStyle(d))((m) => {
      if (m === "GenieSilhouette")
        return o(!1)(h)(p)(l.tokenInside)(l.tokenInsideStroke);
      if (m === "ConvexAbsorb")
        return i(h)(p)(l.tokenInside)(l.tokenInsideStroke);
      f();
    });
    if (l.tokenInsideBlend === "Difference")
      return r.bind(t.pushLayer(Uy))(() => r.bind(t.pushBlend(gi))(() => r.bind(t.pushClip(Ju(h)(p))(Ai))(() => r.bind($)(() => r.bind(s)(() => r.bind(u)(() => r.bind(c)(() => r.bind(t.pushLayer(Ky))(() => r.bind(g((m) => {
        const y = _n(m._1)(p.nodes);
        return y.tag === "Just" && _s(y._1).alpha > 0 ? Pg(t)(m._2.shape)({ x: m._2.x, y: m._2.y, w: m._2.w, h: m._2.h })(7)(v(
          "Just",
          { color: en, flat: !1 }
        ))(J) : a.pure();
      })(Qn(h.nodes)))(() => c)))))))));
    if (l.tokenInsideBlend === "Normal")
      return r.bind(t.pushClip(Ju(h)(p))(Ai))(() => r.bind(t.pushAlpha(l.tokenInsideAlpha))(() => r.bind($)(() => r.bind(_)(() => s))));
    f();
  };
}, Kg = (t) => {
  const n = t.Monad0().Bind1(), e = Qi(t), r = Qi(t), o = t.popClip, i = t.popLayer;
  return (s) => (u) => (c) => (a) => n.bind(t.pushLayer(Vy))(() => n.bind(t.pushClip(xx(u)(c)(a))(jy))(() => n.bind(s.wobble ? e(!0)(c)(a)(s.tokenOutsideFill)(s.tokenOutsideStroke) : r(!1)(c)(a)(s.tokenOutsideFill)(s.tokenOutsideStroke))(() => n.bind(o)(() => i))));
}, Cx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = ue(r);
  return (i) => (s) => (u) => (c) => (a) => (g) => {
    const _ = os(g).length, d = et(_ + 1 | 0), l = (m) => {
      const y = (u * d - et(m)) / 1.5, N = y < 0 ? 0 : y > 1 ? 1 : y;
      return N * N * (3 - 2 * N);
    }, p = ((m) => {
      let y = m, N = !0, T;
      for (; N; ) {
        const w = y;
        if (w >= _) {
          N = !1, T = w;
          continue;
        }
        if (l(w) >= 1) {
          y = w + 1 | 0;
          continue;
        }
        N = !1, T = w;
      }
      return T;
    })(0), $ = p >= _ ? [] : cr((m) => l(m) > 0)(At(p, _ - 1 | 0)).init;
    return e.bind((() => {
      const m = t.drawText({
        x: c,
        y: a,
        content: mn(p)(g),
        font: i,
        color: s,
        align: mu,
        baseline: Yr
      });
      return p > 0 ? m : r.pure();
    })())(() => o((m) => e.bind(t.measureText(i)(mn(m)(g)))((y) => {
      const N = l(m);
      return t.drawText({
        x: c + y,
        y: a - (1 - N) * 10,
        content: mn(1)(yo(Ze(mn(m)(g)))(g)),
        font: i,
        color: { ...s, a: $n(ye(N * et(s.a))) },
        align: mu,
        baseline: Yr
      });
    }))($));
  };
}, ps = (t) => (n) => (e) => (r) => {
  const o = z((h) => et(li(1)(os(h).length)))(r), i = Fo(1)(x(Br)(0)(o)), s = Xr(n)(e)(t), u = s * i, c = li(1)(r.length), g = ((h) => (p) => ($) => {
    let m = h, y = p, N = $, T = !0, w;
    for (; T; ) {
      const k = m, L = y, D = Rt((V) => J, (V) => (X) => v("Just", { head: V, tail: X }), N);
      if (D.tag === "Nothing") {
        T = !1, w = li(0)(c - 1 | 0);
        continue;
      }
      if (D.tag === "Just") {
        if (L + D._1.head >= u) {
          T = !1, w = k;
          continue;
        }
        m = k + 1 | 0, y = L + D._1.head, N = D._1.tail;
        continue;
      }
      f();
    }
    return w;
  })(0)(0)(o), _ = x(Br)(0)(g < 1 ? [] : bt(0, g, o)), d = _ / i;
  if (g >= 0 && g < o.length) {
    const h = (_ + o[g]) / i;
    return {
      line: g >= 0 && g < r.length ? r[g] : "",
      phaseInLabel: (() => {
        if (h <= d)
          return 1;
        const p = (s - d) / (h - d);
        return p < 0 ? 0 : p > 1 ? 1 : p;
      })()
    };
  }
  const l = (_ + 1) / i;
  return {
    line: g >= 0 && g < r.length ? r[g] : "",
    phaseInLabel: (() => {
      if (l <= d)
        return 1;
      const h = (s - d) / (l - d);
      return h < 0 ? 0 : h > 1 ? 1 : h;
    })()
  };
}, Px = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(ps(r)(0)(0)(z(c_)(o)).line))((i) => {
    const s = i + 28;
    return n.Applicative0().pure({ x: e.x + e.w / 2 - s / 2, y: e.y - 25.2 - 14, w: s, h: 25.2 });
  });
}, Gx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Px(t), o = n.Applicative0(), i = yr.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => Og(yt((a) => a)(c)))(i((c) => {
    if (c._2.tag === "Filling" && c._2._1.labels.length !== 0) {
      const a = _n(c._2._1.node)(s.nodes);
      if (a.tag === "Just")
        return e.bind(r(a._1)(c._2._1.progress)(c._2._1.labels))((g) => o.pure(v("Just", b(c._1, g))));
      if (a.tag === "Nothing")
        return o.pure(J);
      f();
    }
    return o.pure(J);
  })(Qn(u.tokens)));
}, Ix = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => (i) => (s) => (u) => (c) => {
    const a = Yg(e)(r)(o)(i)(s)(u);
    return n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(ps(i)(s)(u)(Tt(c)($c)).line))((g) => n.Applicative0().pure({
      x: a.x + 14 + g / 2 - g / 2 - 14,
      y: a.y - 6 - 8 - 6.6 - 6,
      w: g + 28,
      h: 25.2
    }));
  };
}, Ax = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Ix(t), o = n.Applicative0(), i = yr.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => Og(yt((a) => a)(c)))(i((c) => {
    if (c._2.tag === "Travelling" && c._2._1.labels.length !== 0) {
      const a = _n(c._2._1.target)(s.nodes), g = _n(c._2._1.source)(s.nodes), _ = mr(c._2._1.edge)(s.edges);
      if (_.tag === "Just" && g.tag === "Just" && a.tag === "Just")
        return e.bind(r((() => {
          if (c._2._1.direction === "Forward")
            return _._1;
          if (c._2._1.direction === "Backward")
            return Jn(_._1);
          f();
        })())(g._1)(a._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost)(c._2._1.labels))((d) => o.pure(v(
          "Just",
          b(c._1, d)
        )));
    }
    return o.pure(J);
  })(Qn(u.tokens)));
}, mc = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Ax(t), o = Gx(t);
  return (i) => (s) => e.bind(r(i)(s))((u) => e.bind(o(i)(s))((c) => n.Applicative0().pure(Nx((() => {
    const a = (g) => {
      if (g.tag === "Leaf")
        return A;
      if (g.tag === "Node")
        return Ot("Node", g._1, g._2, g._3, void 0, a(g._5), a(g._6));
      f();
    };
    return Lt(C.compare)(Et(On.foldr, a(u)));
  })())(u)([
    ...yt((a) => {
      const g = _n(a._1)(s.nodes);
      return g.tag === "Just" && _s(g._1).alpha > 0 ? v("Just", { x: a._2.x, y: a._2.y, w: a._2.w, h: a._2.h }) : J;
    })(Qn(i.nodes)),
    ...(() => {
      const a = (g, _) => {
        if (g.tag === "Leaf")
          return _;
        if (g.tag === "Node")
          return a(g._5, zt("Cons", g._4, a(g._6, _)));
        f();
      };
      return Et(Xt.foldr, a(c, Yt));
    })()
  ]))));
}, Mg = (t) => (n) => (e) => {
  const r = To(6)(0.55)(Bi(0)(1)((1 - t) / 0.06)), o = t > 0.94, i = o && e > 1e-4, s = To(6)(0.55)(Bi(0)(1)(t / 0.06)), u = t < 0.06, c = u && n > 1e-4, a = o && e <= 1e-4;
  return {
    popScale: c ? s : i ? r : 1,
    flipY: u && n <= 1e-4 ? s : a ? r : 1,
    fadeAlpha: (() => {
      if (c) {
        const g = t / 0.06;
        return g < 0 ? 0.55 : g > 1 ? 1 : 0.55 + 0.44999999999999996 * g;
      }
      if (i) {
        const g = (1 - t) / 0.06;
        return g < 0 ? 0.55 : g > 1 ? 1 : 0.55 + 0.44999999999999996 * g;
      }
      return 1;
    })()
  };
}, Fx = (t) => {
  const n = t.Monad0().Bind1(), e = zg(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const c = Mg(s)(0)(0), a = { family: r.fontFamily, size: 11, weight: 500 }, g = ps(s)(0)(0)(Tt(u)($c));
    return n.bind(t.measureText(a)(g.line))((_) => {
      const d = i.x + i.w / 2, l = _ + 28, h = i.y - 25.2 - 14, p = d - l / 2, $ = [1, d, h + 25.2, 2, d, i.y], m = { x: d, y: h + 12.6 };
      return e(c)(d - l / 2)(h + 25.2)(m)(n.bind(t.drawRoundedRect({ x: d - l / 2, y: h + 1.5, w: l, h: 25.2 })(6)(v(
        "Just",
        { color: r.chipShadow, flat: !0 }
      ))(J))(() => n.bind(t.drawRoundedRect({ x: p, y: h, w: l, h: 25.2 })(6)(v("Just", { color: r.chip, flat: !0 }))(v(
        "Just",
        { color: r.chipHairline, width: 1, lineJoin: kn, lineCap: _e }
      )))(() => n.bind(t.strokePath($)({
        color: r.chipHairline,
        width: 1,
        lineJoin: kn,
        lineCap: _e
      }))(() => t.drawText({
        x: d,
        y: m.y,
        content: g.line,
        font: a,
        color: r.chipText,
        align: gs,
        baseline: Yr
      })))));
    });
  };
}, Rx = (t) => {
  const n = zg(t), e = t.Monad0(), r = e.Bind1(), o = ue(e.Applicative0()), i = Cx(t);
  return (s) => (u) => (c) => (a) => (g) => (_) => (d) => (l) => (h) => {
    const p = ps(g)(_)(d)(Tt(l)($c)), $ = p.line, m = p.phaseInLabel / 0.45, y = m < 0 ? 0 : m > 1 ? 1 : m, N = h.w, T = h.y, w = h.x, k = w + 14, L = h.h, P = T + L / 2;
    return n(Mg(g)(_)(d))(w)(T + L)({ x: w + N / 2, y: P })(r.bind(o((D) => t.fillPath(ds(D)(1.5))({
      color: s.trailDot,
      flat: !0
    }))(Tx(h)(Yg(u)(c)(a)(g)(_)(d))))(() => r.bind(t.drawRoundedRect({ x: w, y: T, w: N, h: L })(3)(v(
      "Just",
      { color: s.chipPillFill, flat: !0 }
    ))(J))(() => i({ family: s.fontFamily, size: 11, weight: 500 })(s.chipPillText)(y)(k)(P)($))));
  };
}, yc = (t) => {
  const n = Rx(t), e = t.Monad0(), r = e.Applicative0(), o = Fx(t), i = e.Bind1(), s = ue(r), u = t.popLayer;
  return (c) => (a) => (g) => (_) => i.bind(t.pushLayer(My))(() => i.bind(s((d) => {
    if (d._2.tag === "Travelling") {
      if (d._2._1.labels.length !== 0) {
        const l = _n(d._2._1.target)(a.nodes), h = _n(d._2._1.source)(a.nodes), p = mr(d._2._1.edge)(a.edges), $ = Hg(d._1)(_);
        if ($.tag === "Just" && p.tag === "Just" && h.tag === "Just" && l.tag === "Just")
          return n(c)((() => {
            if (d._2._1.direction === "Forward")
              return p._1;
            if (d._2._1.direction === "Backward")
              return Jn(p._1);
            f();
          })())(h._1)(l._1)(d._2._1.progress)(d._2._1.holdPre)(d._2._1.holdPost)(d._2._1.labels)($._1);
      }
      return r.pure();
    }
    if (d._2.tag === "Filling" && d._2._1.labels.length !== 0) {
      const l = _n(d._2._1.node)(a.nodes);
      if (l.tag === "Just")
        return o(c)(a)(l._1)(d._2._1.progress)(d._2._1.labels);
      if (l.tag === "Nothing")
        return r.pure();
      f();
    }
    return r.pure();
  })(Qn(g.tokens)))(() => u));
}, jg = (t) => {
  const n = mc(t), e = yc(t);
  return (r) => (o) => (i) => t.Monad0().Bind1().bind(n(o)(i))((s) => e(r)(o)(i)(s));
}, Bx = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => {
    const i = o.length - 1 | 0, s = i < 1 ? [] : bt(0, i, o), u = s.length - 1 | 0, c = u >= 0 && u < s.length ? v("Just", s[u]) : J, a = o.length - 1 | 0, g = a >= 0 && a < o.length ? v("Just", o[a]) : J;
    if (g.tag === "Just" && c.tag === "Just") {
      const _ = fn(0.78)(1.18)(Ao(o) + 19 | 0), d = fn(0.4)(0.62)(_.prng), l = r.wobble ? 8.75 * d.value : 4.375, h = fn(0.4)(0.62)(d.prng), p = r.wobble ? 8.75 * h.value : 4.375, $ = g._1.y - c._1.y, m = g._1.x - c._1.x, y = Sn(m * m + $ * $), N = $ / y, T = -N, w = m / y, k = g._1.x + w * 0.875, L = g._1.y + N * 0.875, P = r.wobble ? 8.75 * _.value : 8.75, D = k - w * P, V = L - N * P, X = D + T * l, I = V + w * l, B = [1, k, L, 2, D + T * 4.375, V + w * 4.375, 2, D - T * 4.375, V - w * 4.375, 5], nt = D - T * p, ut = V - w * p, Y = { color: r.arrowFill, width: 2, lineJoin: kn, lineCap: He };
      return y <= 1e-4 ? e.pure() : r.wobble ? n.Bind1().bind(t.strokePath([1, X, I, 2, k, L])(Y))(() => t.strokePath([1, nt, ut, 2, k, L])(Y)) : t.fillPath(B)({ color: r.arrowFill, flat: !0 });
    }
    return e.pure();
  };
}, Qx = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = ue(e), i = t.popAlpha, s = Bx(t);
  return (u) => (c) => (a) => (g) => {
    const _ = qN(8)(a);
    if (g.hi <= g.lo)
      return e.pure();
    const d = ZN(_)(g.lo)(g.hi);
    if (d.length === 0)
      return e.pure();
    const l = { color: u.edge, width: u.wobble ? 2 : 0.9375, lineJoin: kn, lineCap: He }, h = u.wobble ? fn(-10)(4)(Ao(d)).value : 0, p = u.wobble ? cx(h)(d) : d;
    return r.bind(u.wobble ? o(($) => r.bind(t.pushAlpha($.alpha))(() => r.bind(t.strokePath($.path)(l))(() => i)))((() => {
      const $ = Ao(d);
      return p.length < 2 ? [] : Pr(wx)($)(!1)(p);
    })()) : t.strokePath(DN(d))(l))(() => {
      const $ = s(u)(p);
      return g.hi >= 0.999 ? $ : e.pure();
    });
  };
}, Zg = (t) => {
  const n = Qx(t), e = t.Monad0().Applicative0(), r = ue(e);
  return (o) => (i) => (s) => {
    const u = (c) => {
      const a = Ut((g) => c.x >= g._2.x - 1 && c.x <= g._2.x + g._2.w + 1 && c.y >= g._2.y - 1 && c.y <= g._2.y + g._2.h + 1)(Qn(i.nodes));
      return a.tag === "Just" ? v("Just", a._1._2) : J;
    };
    return r((c) => {
      const a = mr(c._1)(s.edges);
      if (a.tag === "Just")
        return n(o)(c._1)((() => {
          const g = (() => {
            if (0 < c._2.length) {
              const d = u(c._2[0]);
              if (d.tag === "Just")
                return Jn(Ya($r(7)(d._1))(Jn(c._2)));
            }
            return c._2;
          })(), _ = g.length - 1 | 0;
          if (_ >= 0 && _ < g.length) {
            const d = u(g[_]);
            if (d.tag === "Just")
              return Ya($r(7)(d._1))(g);
          }
          return g;
        })())((() => {
          if (a._1.tag === "Retracted")
            return { lo: 0, hi: 0 };
          if (a._1.tag === "Extended")
            return { lo: 0, hi: 1 };
          if (a._1.tag === "Extending")
            return { lo: 0, hi: a._1._2 };
          if (a._1.tag === "Retracting") {
            if (a._1._1 === "FromSource")
              return { lo: a._1._2, hi: 1 };
            if (a._1._1 === "FromTarget")
              return { lo: 0, hi: 1 - a._1._2 };
            if (a._1._1 === "FromBoth")
              return { lo: a._1._2 / 2, hi: 1 - a._1._2 / 2 };
          }
          f();
        })());
      if (a.tag === "Nothing")
        return e.pure();
      f();
    })(Qn(i.edges));
  };
}, Wx = (t) => (n) => {
  const e = (i) => {
    const s = _n(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !qn(
        (c) => 0 < c._2.length && c._2[0].x >= u.x && c._2[0].x <= u.x + u.w && c._2[0].y >= u.y && c._2[0].y <= u.y + u.h,
        Qn(t.edges)
      );
    }
    f();
  }, r = x((i) => (s) => (i * 31 | 0) + Qe(s) | 0)(5381)(nr(n.frameTitle)), o = (i) => {
    const s = _n(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !qn(
        (c) => {
          const a = c._2.length - 1 | 0;
          return a >= 0 && a < c._2.length && c._2[a].x >= u.x && c._2[a].x <= u.x + u.w && c._2[a].y >= u.y && c._2[a].y <= u.y + u.h;
        },
        Qn(t.edges)
      );
    }
    f();
  };
  return x((i) => (s) => {
    const u = s._2;
    return px((c) => {
      if (c.tag === "Nothing")
        return v("Just", u);
      if (c.tag === "Just")
        return v(
          "Just",
          { t: Fo(c._1.t)(u.t), angle: u.t >= c._1.t ? u.angle : c._1.angle, bigCircle: c._1.bigCircle || u.bigCircle, frameHash: c._1.frameHash }
        );
      f();
    })(s._1)(i);
  })(A)(Tt(Qn(n.tokens))((i) => {
    if (i._2.tag === "Filling") {
      const s = i._2._1.node;
      return [
        b(
          s,
          {
            t: 1,
            angle: (() => {
              const u = yt((c) => (() => {
                const a = _n(s)(t.nodes), g = c._2.length - 1 | 0;
                return g >= 0 && g < c._2.length && a.tag === "Just" && c._2[g].x >= a._1.x && c._2[g].x <= a._1.x + a._1.w && c._2[g].y >= a._1.y && c._2[g].y <= a._1.y + a._1.h;
              })() ? v("Just", c._2) : J)(Qn(t.edges));
              if (0 < u.length) {
                const c = u[0].length - 1 | 0, a = c < 1 ? [] : bt(0, c, u[0]), g = a.length - 1 | 0;
                if (g >= 0 && g < a.length) {
                  const _ = u[0].length - 1 | 0;
                  return _ >= 0 && _ < u[0].length ? ar(u[0][_].y - a[g].y)(u[0][_].x - a[g].x) : 0;
                }
                u[0].length - 1 | 0;
              }
              return 0;
            })(),
            bigCircle: e(s) || o(s),
            frameHash: r
          }
        )
      ];
    }
    if (i._2.tag === "Travelling") {
      if (i._2._1.progress >= 0.75)
        return [
          b(
            i._2._1.target,
            {
              t: (i._2._1.progress - 0.75) / 0.25,
              angle: (() => {
                const s = mr(i._2._1.edge)(t.edges);
                if (s.tag === "Just") {
                  const u = s._1.length - 1 | 0, c = u < 1 ? [] : bt(0, u, s._1), a = c.length - 1 | 0;
                  if (a >= 0 && a < c.length) {
                    const g = s._1.length - 1 | 0;
                    return g >= 0 && g < s._1.length ? ar(s._1[g].y - c[a].y)(s._1[g].x - c[a].x) : 0;
                  }
                  return s._1.length - 1 | 0, 0;
                }
                if (s.tag === "Nothing")
                  return 0;
                f();
              })(),
              bigCircle: e(i._2._1.target) || o(i._2._1.target),
              frameHash: r
            }
          )
        ];
      if (i._2._1.progress < 0.25)
        return [
          b(
            i._2._1.source,
            {
              t: i._2._1.progress / 0.25,
              angle: (() => {
                const s = mr(i._2._1.edge)(t.edges);
                if (s.tag === "Just")
                  return 1 < s._1.length && 0 < s._1.length ? ar(s._1[1].y - s._1[0].y)(s._1[1].x - s._1[0].x) : 0;
                if (s.tag === "Nothing")
                  return 0;
                f();
              })(),
              bigCircle: e(i._2._1.source) || o(i._2._1.source),
              frameHash: r
            }
          )
        ];
    }
    return [];
  }));
}, Dx = (t) => x((n) => (e) => (n * 31 | 0) + Qe(e) | 0)(5381)(nr(t.frameTitle)), tl = (t) => {
  const n = Xg(t), e = t.Monad0().Applicative0(), r = ue(e);
  return (o) => (i) => (s) => (u) => {
    const c = Dx(u), a = Wx(s)(u);
    return r((g) => {
      const _ = _n(g._1)(u.nodes);
      if (_.tag === "Just")
        return n(o)(i)((() => {
          const d = _n(g._1)(u.nodeFadeAlpha);
          if (d.tag === "Nothing")
            return 1;
          if (d.tag === "Just")
            return d._1;
          f();
        })())((() => {
          const d = _n(g._1)(a);
          return d.tag === "Just" ? v("Just", d._1) : d.tag === "Nothing" && $x(g._1)(u.visited) ? v("Just", { t: 1, angle: 0, bigCircle: !1, frameHash: c }) : J;
        })())(g._1)(g._2)(_._1);
      if (_.tag === "Nothing")
        return e.pure();
      f();
    })(Qn(s.nodes));
  };
}, nl = (t) => t, el = (t) => (n) => {
  const e = n.vw / n.vh, r = n.vh * t, o = { ...n, vx: n.vx - (r - n.vw) / 2, vw: r }, i = n.vw / t, s = { ...n, vy: n.vy - (i - n.vh) / 2, vh: i };
  return t <= 0 || n.vw <= 0 || n.vh <= 0 ? n : t > e ? o : t < e ? s : n;
}, Hx = (t) => (n) => (e) => {
  const r = it.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = it.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, Ma = (t) => (n) => (e) => {
  const r = at.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = at.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, ja = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Tu = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ox = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, zx = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, qx = (t) => (n) => {
  const e = Kn(t.angle), r = oe(t.angle);
  return { a: r, b: e, c: 0, d: 1, e: -n * r, f: n * e - t.boxHeight / 2 };
}, Yx = (t) => [t.box.ground.a, t.box.ground.b, t.box.ground.c, t.box.ground.d, t.box.top.a, t.box.top.b, t.box.top.c, t.box.top.d], Gr = (t) => (n) => {
  const e = (r) => Hx(0)(255)($n(ur(et(r) * t)));
  return { r: e(n.r), g: e(n.g), b: e(n.b), a: n.a };
}, En = (t) => (n) => (e) => (r) => ({ x: (n - e) * oe(t.angle), y: (n + e) * Kn(t.angle) - r }), _r = (t) => {
  const n = Rt((e) => J, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Tt(n._1.tail)((e) => [2, e.x, e.y]), 5];
  f();
}, Xx = (t) => (n) => (e) => (r) => (o) => {
  const i = (() => {
    if (t === "Forward")
      return o;
    if (t === "Backward")
      return Jn(o);
    f();
  })();
  if (0 < i.length) {
    const u = Qr(i)(Ma(0)(1)(Xr(e)(r)(n)));
    if (u.tag === "Nothing")
      return i[0];
    if (u.tag === "Just")
      return u._1;
    f();
  }
  const s = Qr(i)(Ma(0)(1)(Xr(e)(r)(n)));
  if (s.tag === "Nothing")
    return { x: 0, y: 0 };
  if (s.tag === "Just")
    return s._1;
  f();
}, Vx = (t) => {
  const n = Rt((e) => J, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Tt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, Ux = (t) => {
  const n = Rt((e) => J, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { vx: 0, vy: 0, vw: 0, vh: 0 };
  if (n.tag === "Just") {
    const e = x((r) => (o) => ({ minX: ja(r.minX)(o.x), minY: ja(r.minY)(o.y), maxX: Tu(r.maxX)(o.x), maxY: Tu(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { vx: e.minX - 40, vy: e.minY - 40, vw: e.maxX - e.minX + 80, vh: e.maxY - e.minY + 80 };
  }
  f();
}, Kx = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => {
    const i = o.box, s = o.np, u = { color: r.nodeStroke, width: 1, lineJoin: kn, lineCap: _e };
    return n.bind(t.fillStrokePath(_r([i.ground.d, i.ground.c, i.top.c, i.top.d]))({ color: Gr(0.66)(r.nodeFill), flat: !0 })(u))(() => n.bind(t.fillStrokePath(_r([
      i.ground.b,
      i.ground.c,
      i.top.c,
      i.top.b
    ]))({ color: Gr(0.82)(r.nodeFill), flat: !0 })(u))(() => n.bind(t.fillStrokePath(_r([i.top.a, i.top.b, i.top.c, i.top.d]))({
      color: Gr(1)(r.nodeFill),
      flat: !0
    })(u))(() => t.drawTextAffine(qx(e)(s.y + s.h))({
      x: s.x + s.w / 2,
      y: 0,
      content: s.label,
      font: { family: r.fontFamily, size: 11, weight: 600 },
      color: r.text,
      align: gs,
      baseline: Yr
    }))));
  };
}, Mx = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => (i) => {
    const s = { color: r.tokenOutsideStroke, width: 1, lineJoin: kn, lineCap: _e }, u = i.x - 5.5, c = i.x + 5.5, a = i.y - 5.5, g = i.y + 5.5, _ = o + 11, d = En(e)(u)(a)(_), l = En(e)(c)(a)(_), h = En(e)(c)(g)(_), p = En(e)(u)(g)(_), $ = En(e)(c)(g)(o), m = En(e)(c)(a)(o);
    return n.bind(t.fillStrokePath(_r([En(e)(u)(g)(o), $, h, p]))({ color: Gr(0.66)(r.tokenOutsideFill), flat: !0 })(s))(() => n.bind(t.fillStrokePath(_r([
      m,
      $,
      h,
      l
    ]))({ color: Gr(0.82)(r.tokenOutsideFill), flat: !0 })(s))(() => t.fillStrokePath(_r([d, l, h, p]))({
      color: Gr(1)(r.tokenOutsideFill),
      flat: !0
    })(s)));
  };
}, jx = (t) => {
  const n = Mx(t);
  return (e) => (r) => (o) => (i) => {
    if (i.tag === "Travelling") {
      const s = Ox(i._1.edge)(o.edges);
      return s.tag === "Just" ? v(
        "Just",
        (() => {
          const u = Xx(i._1.direction)(i._1.progress)(i._1.holdPre)(i._1.holdPost)(s._1);
          return { depth: u.x + u.y, draw: n(e)(r)(0)(u) };
        })()
      ) : J;
    }
    if (i.tag === "Filling") {
      const s = zx(i._1.node)(o.nodes);
      if (s.tag === "Just")
        return v(
          "Just",
          (() => {
            const u = { x: s._1.x + s._1.w / 2, y: s._1.y + s._1.h / 2 };
            return { depth: u.x + u.y, draw: n(e)(r)(e.boxHeight)(u) };
          })()
        );
    }
    return J;
  };
}, Zx = { angle: 0.5235987755982988, boxHeight: 26, transparentBg: !0 }, tJ = (t) => (n) => {
  const e = n.y + n.h, r = n.x + n.w;
  return {
    ground: { a: En(t)(n.x)(n.y)(0), b: En(t)(r)(n.y)(0), c: En(t)(r)(e)(0), d: En(t)(n.x)(e)(0) },
    top: { a: En(t)(n.x)(n.y)(t.boxHeight), b: En(t)(r)(n.y)(t.boxHeight), c: En(t)(r)(e)(t.boxHeight), d: En(t)(n.x)(e)(t.boxHeight) },
    depth: (n.x + r) / 2 + (n.y + e) / 2
  };
}, rl = (t) => (n) => z((e) => ({ np: e, box: tJ(t)(e) }))((() => {
  const e = (r, o) => {
    if (r.tag === "Leaf")
      return o;
    if (r.tag === "Node")
      return e(r._5, zt("Cons", r._4, e(r._6, o)));
    f();
  };
  return Et(Xt.foldr, e(n.nodes, Yt));
})()), nJ = (t) => (n) => [
  ...Tt(rl(t)(n))(Yx),
  ...(() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, zt("Cons", r._4, e(r._6, o)));
      f();
    };
    return Tt(Et(Xt.foldr, e(n.edges, Yt)))(z((r) => En(t)(r.x)(r.y)(0)));
  })()
], eJ = (t) => {
  const n = t.to.y - t.from.y, e = t.to.x - t.from.x, r = Tu(1e-4)(Sn(e * e + n * n)), o = n / r, i = e / r, s = t.to.y - o * 7, u = t.to.x - i * 7;
  return _r([t.to, { x: u - o * 3, y: s + i * 3 }, { x: u + o * 3, y: s - i * 3 }]);
}, rJ = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => (i) => (s) => (u) => {
    const c = En(r)(u.x)(u.y)(0), a = En(r)(s.x)(s.y)(0);
    return n.Bind1().bind(t.strokePath(Vx([a, c]))({
      color: o.edge,
      width: 1.5,
      lineJoin: kn,
      lineCap: He
    }))(() => {
      const g = t.fillPath(eJ({ from: a, to: c }))({ color: o.arrowFill, flat: !0 });
      return i ? g : e.pure();
    });
  };
}, oJ = (t) => {
  const n = rJ(t);
  return (e) => (r) => (o) => {
    const i = Tn(Oe, o, bt(1, o.length, o)), s = i.length - 1 | 0;
    return Ft((u) => (c) => ({ depth: (c._1.x + c._1.y + c._2.x + c._2.y) / 2, draw: n(e)(r)(u === s)(c._1)(c._2) }))(i);
  };
}, iJ = (t) => {
  const n = Kx(t), e = jx(t), r = oJ(t), o = t.Monad0(), i = Vg(t), s = Hi(o.Applicative0())(Ht);
  return (u) => (c) => (a) => (g) => {
    const _ = pc(c), d = [
      ...(() => {
        const l = (h, p) => {
          if (h.tag === "Leaf")
            return p;
          if (h.tag === "Node")
            return l(h._5, zt("Cons", h._4, l(h._6, p)));
          f();
        };
        return Tt(Et(Xt.foldr, l(a.edges, Yt)))(r(u)(_));
      })(),
      ...z((l) => ({ depth: l.box.depth, draw: n(u)(_)(l) }))(rl(u)(a)),
      ...yt(e(u)(_)(a))((() => {
        const l = (h, p) => {
          if (h.tag === "Leaf")
            return p;
          if (h.tag === "Node")
            return l(h._5, zt("Cons", h._4, l(h._6, p)));
          f();
        };
        return Et(Xt.foldr, l(g.tokens, Yt));
      })())
    ];
    return o.Bind1().bind(i(_)(u.transparentBg)(1)(Ux(nJ(u)(a))))(() => s((l) => l.draw)(Lt((l) => (h) => at.compare(l.depth)(h.depth))(d)));
  };
}, ol = (t, n) => ({ tag: t, _1: n }), sJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, uJ = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, cJ = /* @__PURE__ */ ol("ResolvedLabels"), aJ = (t) => {
  const n = Ut((e) => e.role === "FlyThrough")(t.levels);
  if (n.tag === "Just")
    return n._1;
  if (n.tag === "Nothing")
    return Ji(t);
  f();
}, fJ = (t) => (n) => (e) => {
  const r = e.frameTitle === "" ? 0 : 40, o = Vu(n)(e.camera);
  return (() => {
    if (t.outputAspect.tag === "Nothing")
      return nl;
    if (t.outputAspect.tag === "Just")
      return el(t.outputAspect._1);
    f();
  })()({ vx: o.x - t.padding, vy: o.y - t.padding - r, vw: o.w + 2 * t.padding, vh: o.h + 2 * t.padding + r });
}, gJ = (t) => (n) => {
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just") {
    const e = sJ(n._1)(t.segment.layout.nodes);
    if (e.tag === "Nothing")
      return [];
    if (e.tag === "Just") {
      const r = e._1.x * t.segment.placement.scale + t.segment.placement.tx, o = e._1.y * t.segment.placement.scale + t.segment.placement.ty, i = e._1.w * t.segment.placement.scale, s = e._1.h * t.segment.placement.scale;
      return [1, r, o, 2, r + i, o, 2, r + i, o + s, 2, r, o + s, 5];
    }
  }
  f();
}, lJ = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => (o) => {
    if (r === "")
      return n.Applicative0().pure();
    const i = o.vh / 720, s = 15 * i, u = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: s, weight: 600 };
    return e.bind(t.measureText(u)(r))((c) => {
      const a = o.vy + 12 * i, g = s + 6 * i * 2, _ = c + 11 * i * 2, d = o.vx + o.vw / 2;
      return e.bind(t.drawRoundedRect({ x: d - _ / 2, y: a, w: _, h: g })(g / 2)(v(
        "Just",
        { color: { r: 255, g: 255, b: 255, a: 240 }, flat: !0 }
      ))(v(
        "Just",
        { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1 * i, lineJoin: kn, lineCap: He }
      )))(() => t.drawText({
        x: d,
        y: a + g / 2,
        content: r,
        font: u,
        color: { r: 28, g: 30, b: 36, a: 255 },
        align: gs,
        baseline: Yr
      }));
    });
  };
}, _J = (t) => {
  const n = jg(t), e = yc(t), r = t.Monad0(), o = r.Bind1(), i = Vg(t), s = r.Applicative0(), u = Zg(t), c = tl(t)(hc), a = Lx(t), g = Kg(t), _ = Ug(t), d = lJ(t);
  return (l) => (h) => (p) => ($) => (m) => (y) => (N) => {
    const T = pc(l.theme), w = (() => {
      if (N.tag === "ResolvedLabels")
        return n(T)(m)(y);
      if (N.tag === "SpringLabels")
        return e(T)(m)(y)(N._1);
      f();
    })();
    return o.bind(i(T)(l.transparentBg)(h)($))(() => o.bind((() => {
      const k = o.bind(u(T)(m)(y))(() => o.bind(c(T)(m)(y))(() => o.bind(a(T)(m)(y))(() => o.bind(g(T)($)(m)(y))(() => o.bind(_(eN)(T)(m)(y))(() => w)))));
      return p ? k : s.pure();
    })())(() => o.bind(l.watermark === "" ? t.Monad0().Applicative0().pure() : t.drawText({
      x: $.vx + 6,
      y: $.vy + 6,
      content: l.watermark,
      font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 9, weight: 600 },
      color: { r: 180, g: 180, b: 180, a: 255 },
      align: mu,
      baseline: Xy
    }))(() => d(y.frameTitle)($))));
  };
}, dJ = (t) => {
  const n = t.Monad0(), e = jg(t), r = yc(t), o = n.Bind1(), i = Zg(t), s = tl(t), u = Kg(t), c = t.popTransform, a = Ug(t), g = t.popBakedTransform, _ = t.popClip, d = t.popAlpha;
  return (l) => (h) => (p) => ($) => (m) => {
    const y = m.state, N = { tx: m.segment.placement.tx, ty: m.segment.placement.ty, sx: m.segment.placement.scale, sy: m.segment.placement.scale }, T = pc(l.theme), w = m.segment.layout, k = jn(w), L = { vx: k.x - 1e3, vy: k.y - 1e3, vw: k.w + 2e3, vh: k.h + 2e3 }, P = 11 * m.segment.placement.scale * h >= 5 ? hc : mx, D = (() => {
      if (P === "LabelsHidden")
        return n.Applicative0().pure();
      if (P === "LabelsShown")
        return p.tag === "Leaf" ? e(T)(w)(y) : r(T)(w)(y)(p);
      f();
    })(), V = gJ($)((() => {
      const X = m.segment.path.length - 1 | 0;
      return X >= 0 && X < m.segment.path.length ? v("Just", m.segment.path[X]) : J;
    })());
    return o.bind(t.pushAlpha(m.bgAlpha))(() => o.bind(t.pushClip(V)(Ai))(() => o.bind(t.pushTransform(N))(() => o.bind(i(T)(w)(y))(() => o.bind(s(P)(T)(w)(y))(() => o.bind(u(T)(L)(w)(y))(() => o.bind(c)(() => o.bind(t.pushBakedTransform(N))(() => o.bind(a(rN)(T)(w)(y))(() => o.bind(g)(() => o.bind(t.pushTransform(N))(() => o.bind(D)(() => o.bind(c)(() => o.bind(_)(() => d))))))))))))));
  };
}, hJ = (t) => (n) => {
  const e = Vu(t)(n);
  return { vx: e.x, vy: e.y, vw: e.w, vh: e.h };
}, Ur = (t) => (n) => n.diving || n.levels.length > 1 ? (() => {
  if (t.outputAspect.tag === "Nothing")
    return nl;
  if (t.outputAspect.tag === "Just")
    return el(t.outputAspect._1);
  f();
})()(hJ(n.rootLayout)(n.camera)) : fJ(t)(n.rootLayout)({ ...Ji(n).state, camera: n.camera }), il = (t) => {
  const n = iJ(t), e = t.Monad0(), r = e.Applicative0(), o = e.Bind1(), i = dJ(t), s = _J(t);
  return (u) => (c) => (a) => {
    if (u.theme === "Isometric")
      return n({ ...Zx, transparentBg: u.transparentBg })(u.theme)(Ji(a).segment.layout)(Ji(a).state);
    const g = Ur(u)(a), _ = (l) => (h) => {
      if (h.length === 0)
        return r.pure();
      const p = Rt(($) => J, ($) => (m) => v("Just", { head: $, tail: m }), h);
      if (p.tag === "Nothing")
        return r.pure();
      if (p.tag === "Just") {
        const $ = p._1.head, m = p._1.tail;
        return o.bind((() => {
          const y = i(u)(a.camera.zoom)($.role === "Active" ? c : A)(l)($);
          return a.diving || $.role === "Active" ? y : r.pure();
        })())(() => _($)(m));
      }
      f();
    }, d = Rt((l) => J, (l) => (h) => v("Just", { head: l, tail: h }), a.levels);
    if (d.tag === "Nothing")
      return r.pure();
    if (d.tag === "Just") {
      const l = d._1.tail, h = d._1.head;
      return o.bind(s(u)(a.hasDives ? g.vw / uJ(1)(jn(a.rootLayout).w) : 1)(h.role === "Active" || h.role === "FlyThrough")(g)(h.segment.layout)(aJ(a).state)(l.length === 0 && c.tag !== "Leaf" ? ol("SpringLabels", c) : cJ))(() => _(h)(l));
    }
    f();
  };
}, Za = (t) => (n) => (e) => {
  const r = at.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = at.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, pJ = /* @__PURE__ */ mc(Ig), tf = /* @__PURE__ */ il(Ig), nf = (t) => {
  const n = t.vx + t.vw - 4, e = t.vy + t.vh - 4, r = t.vx + 4, o = t.vy + 4, i = (s) => {
    if (s.tag === "Leaf")
      return A;
    if (s.tag === "Node")
      return Ot("Node", s._1, s._2, s._3, { ...s._4, x: Za(r)(n - s._4.w)(s._4.x), y: Za(o)(e - s._4.h)(s._4.y) }, i(s._5), i(s._6));
    f();
  };
  return i;
}, $J = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = {
    padding: 8,
    transparentBg: (() => {
      if (n === "TransparentBackground")
        return !0;
      if (n === "PaintBackground")
        return !1;
      f();
    })(),
    halftoneShadows: !0,
    watermark: "",
    theme: t,
    outputAspect: r.width <= 0 || r.height <= 0 ? J : v("Just", r.width / r.height)
  }, c = $N(e)(r);
  return () => {
    const a = c(), g = o.levels.length - 1 | 0;
    if (g >= 0 && g < o.levels.length) {
      const d = pJ(o.levels[g].segment.layout)(o.levels[g].state)(a)(), l = $u(i)(nf(Ur(u)(o))(d))(s);
      return tf(u)(l.applied)(o)(a)(), l.springs;
    }
    const _ = $u(i)(nf(Ur(u)(o))(A))(s);
    return tf(u)(_.applied)(o)(a)(), _.springs;
  };
}, sl = (t) => t, qo = (t) => t, ef = /* @__PURE__ */ qo("Light"), mJ = /* @__PURE__ */ qo("Dark"), yJ = /* @__PURE__ */ qo("Blueprint"), NJ = /* @__PURE__ */ qo("Whiteboard"), xJ = /* @__PURE__ */ qo("Isometric"), JJ = /* @__PURE__ */ sl("PaintBackground"), TJ = /* @__PURE__ */ sl("TransparentBackground"), tr = (t) => "rgb(" + un(t.r) + "," + un(t.g) + "," + un(t.b) + ")", $e = /* @__PURE__ */ Af(/* @__PURE__ */ Gf("Fixed", /* @__PURE__ */ If(0)(20)(4))), vJ = (t) => "translate(" + $e(t.tx) + "," + $e(t.ty) + ") scale(" + $e(t.sx) + "," + $e(t.sy) + ")", kt = /* @__PURE__ */ Af(/* @__PURE__ */ Gf("Fixed", /* @__PURE__ */ If(0)(20)(2))), Nc = (t) => {
  const n = [];
  let e = 0;
  for (; e < t.length; ) {
    const r = e, o = r >= 0 && r < t.length ? v("Just", t[r]) : J;
    if (o.tag === "Nothing") {
      e = t.length;
      continue;
    }
    if (o.tag === "Just") {
      if (o._1 === 1) {
        n.push("M"), n.push(kt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(kt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 2) {
        n.push("L"), n.push(kt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(kt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 3) {
        n.push("Q"), n.push(kt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(kt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(kt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(kt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 5 | 0;
        continue;
      }
      if (o._1 === 4) {
        n.push("C"), n.push(kt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(kt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(kt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(kt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(kt((() => {
          const i = r + 5 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(kt((() => {
          const i = r + 6 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 7 | 0;
        continue;
      }
      if (o._1 === 5) {
        n.push("Z"), e = r + 1 | 0;
        continue;
      }
      e = t.length;
      continue;
    }
    f();
  }
  return es(" ")(n);
}, wJ = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, vu = /* @__PURE__ */ (() => {
  const t = Ye("&")("&amp;"), n = Ye("<")("&lt;"), e = (() => {
    const r = Ye(">")("&gt;"), o = (() => {
      const i = Ye('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), kJ = (t) => {
  if (t.style === "RunText")
    return "<tspan>" + vu(t.text) + "</tspan>";
  if (t.style === "RunCode")
    return `<tspan font-family="'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="400">` + vu(t.text) + "</tspan>";
  f();
}, Fn = (t) => (n) => {
  const e = n.maskDepth;
  return () => {
    e.value === 0 && n.out.push(t);
  };
}, bJ = (t) => (n) => {
  const e = [];
  let r = 0;
  const o = (i) => {
    const s = i >= 0 && i < n.length ? t.sx * n[i] + t.tx : t.sx * 0 + t.tx;
    return () => {
      e.push(s), e.push((() => {
        const u = i + 1 | 0;
        return u >= 0 && u < n.length ? t.sy * n[u] + t.ty : t.sy * 0 + t.ty;
      })());
    };
  };
  for (; r < n.length; ) {
    const i = r, s = i >= 0 && i < n.length ? v("Just", n[i]) : J;
    if (s.tag === "Nothing") {
      r = n.length;
      continue;
    }
    if (s.tag === "Just") {
      if (s._1 === 1) {
        e.push(s._1), o(i + 1 | 0)(), r = i + 3 | 0;
        continue;
      }
      if (s._1 === 2) {
        e.push(s._1), o(i + 1 | 0)(), r = i + 3 | 0;
        continue;
      }
      if (s._1 === 3) {
        e.push(s._1), o(i + 1 | 0)(), o(i + 3 | 0)(), r = i + 5 | 0;
        continue;
      }
      if (s._1 === 4) {
        e.push(s._1), o(i + 1 | 0)(), o(i + 3 | 0)(), o(i + 5 | 0)(), r = i + 7 | 0;
        continue;
      }
      if (s._1 === 5) {
        e.push(s._1), r = i + 1 | 0;
        continue;
      }
      r = n.length;
      continue;
    }
    f();
  }
  return e;
}, ui = (t) => (n) => {
  const e = t.bake;
  return () => {
    const r = e.value;
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return bJ(r._1)(n);
    f();
  };
}, ul = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => wJ
}, LJ = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => ul
}, EJ = { pure: (t) => (n) => () => t, Apply0: () => ul }, SJ = { Applicative0: () => EJ, Bind1: () => LJ }, CJ = (t) => (n) => '<defs><pattern id="' + t + '" x="0" y="0" width="' + kt(n.tile) + '" height="' + kt(n.tile) + '" patternUnits="userSpaceOnUse">' + (n.bgColor.a === 0 ? "" : '<rect width="' + kt(n.tile) + '" height="' + kt(n.tile) + '" fill="' + tr(n.bgColor) + '" fill-opacity="' + kt(et(n.bgColor.a) / 255) + '"/>') + '<circle cx="' + kt(n.tile / 2) + '" cy="' + kt(n.tile / 2) + '" r="' + kt(n.dotRadius) + '" fill="' + tr(n.dotColor) + '"/></pattern></defs><rect x="' + kt(n.viewport.vx) + '" y="' + kt(n.viewport.vy) + '" width="' + kt(n.viewport.vw) + '" height="' + kt(n.viewport.vh) + '" fill="url(#' + t + ')"/>', rf = (t) => (n) => '<path d="' + Nc(t) + '" fill="' + tr(n) + '" fill-opacity="' + kt(et(n.a) / 255) + '"/>', PJ = (t) => (n) => (e) => (r) => '<rect x="' + kt(t.x) + '" y="' + kt(t.y) + '" width="' + kt(t.w) + '" height="' + kt(t.h) + '" rx="' + kt(n) + '"' + (() => {
  if (e.tag === "Just")
    return ' fill="' + tr(e._1.color) + '" fill-opacity="' + kt(et(e._1.color.a) / 255) + '"';
  if (e.tag === "Nothing")
    return ' fill="none"';
  f();
})() + (() => {
  if (r.tag === "Just")
    return ' stroke="' + tr(r._1.color) + '" stroke-opacity="' + kt(et(r._1.color.a) / 255) + '" stroke-width="' + kt(r._1.width) + '" stroke-linejoin="' + (() => {
      if (r._1.lineJoin === "RoundJoin")
        return "round";
      if (r._1.lineJoin === "BevelJoin")
        return "bevel";
      if (r._1.lineJoin === "MiterJoin")
        return "miter";
      f();
    })() + '" stroke-linecap="' + (() => {
      if (r._1.lineCap === "ButtCap")
        return "butt";
      if (r._1.lineCap === "RoundCap")
        return "round";
      if (r._1.lineCap === "SquareCap")
        return "square";
      f();
    })() + '"';
  if (r.tag === "Nothing")
    return "";
  f();
})() + "/>", of = (t) => (n) => '<path d="' + Nc(t) + '" fill="none" stroke="' + tr(n.color) + '" stroke-opacity="' + kt(et(n.color.a) / 255) + '" stroke-width="' + kt(n.width) + '" stroke-linejoin="' + (() => {
  if (n.lineJoin === "RoundJoin")
    return "round";
  if (n.lineJoin === "BevelJoin")
    return "bevel";
  if (n.lineJoin === "MiterJoin")
    return "miter";
  f();
})() + '" stroke-linecap="' + (() => {
  if (n.lineCap === "ButtCap")
    return "butt";
  if (n.lineCap === "RoundCap")
    return "round";
  if (n.lineCap === "SquareCap")
    return "square";
  f();
})() + '"/>', sf = (t) => {
  const n = N0(zr(t.content));
  return '<text x="' + kt(t.x) + '" y="' + kt(t.y) + '"' + (() => {
    if (t.baseline === "BaselineTop")
      return ' dy="0.8em"';
    if (t.baseline === "BaselineMiddle")
      return ' dy="0.32em"';
    if (t.baseline === "BaselineAlphabetic" || t.baseline === "BaselineBottom")
      return "";
    f();
  })() + ' fill="' + tr(t.color) + '" fill-opacity="' + kt(et(t.color.a) / 255) + '" font-size="' + kt(t.font.size) + '" font-family="Ilisarniq, ui-sans-serif, system-ui, sans-serif" font-weight="' + un(t.font.weight) + '" text-anchor="' + (() => {
    if (t.align === "AlignLeft")
      return "start";
    if (t.align === "AlignCenter")
      return "middle";
    if (t.align === "AlignRight")
      return "end";
    f();
  })() + '">' + (n.length === 1 && n[0].style === "RunText" ? vu(n[0].text) : es("")(z(kJ)(n))) + "</text>";
}, GJ = (t) => "matrix(" + $e(t.a) + " " + $e(t.b) + " " + $e(t.c) + " " + $e(t.d) + " " + $e(t.e) + " " + $e(t.f) + ")", cl = {
  fillPath: (t) => (n) => (e) => {
    const r = ui(e)(t);
    return () => {
      const o = r();
      return Fn(rf(o)(n.color))(e)();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = ui(e)(t);
    return () => {
      const o = r(), i = e.bake.value;
      return Fn(of(o)((() => {
        if (i.tag === "Nothing")
          return n;
        if (i.tag === "Just")
          return { ...n, width: i._1.sx * n.width };
        f();
      })()))(e)();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = ui(r)(t);
    return () => {
      const i = o(), s = r.bake.value;
      return Fn(rf(i)(n.color) + of(i)((() => {
        if (s.tag === "Nothing")
          return e;
        if (s.tag === "Just")
          return { ...e, width: s._1.sx * e.width };
        f();
      })()))(r)();
    };
  },
  drawRoundedRect: (t) => (n) => (e) => (r) => (o) => {
    const i = o.bake;
    return () => {
      const s = i.value;
      return Fn(PJ((() => {
        if (s.tag === "Nothing")
          return t;
        if (s.tag === "Just")
          return { x: s._1.sx * t.x + s._1.tx, y: s._1.sy * t.y + s._1.ty, w: s._1.sx * t.w, h: s._1.sy * t.h };
        f();
      })())((() => {
        if (s.tag === "Nothing")
          return n;
        if (s.tag === "Just")
          return s._1.sx * n;
        f();
      })())(e)(r.tag === "Just" ? v(
        "Just",
        (() => {
          if (s.tag === "Nothing")
            return r._1;
          if (s.tag === "Just")
            return { ...r._1, width: s._1.sx * r._1.width };
          f();
        })()
      ) : J))(o)();
    };
  },
  drawText: (t) => (n) => {
    const e = n.bake;
    return () => {
      const r = e.value;
      return Fn(sf((() => {
        if (r.tag === "Nothing")
          return t;
        if (r.tag === "Just")
          return { ...t, x: r._1.sx * t.x + r._1.tx, y: r._1.sy * t.y + r._1.ty, font: { ...t.font, size: r._1.sx * t.font.size } };
        f();
      })()))(n)();
    };
  },
  drawTextAffine: (t) => (n) => Fn((() => {
    const e = 'transform="' + GJ(t) + '"';
    return (e === "" ? "<g>" : "<g " + e + ">") + sf(n) + "</g>";
  })()),
  pushTransform: (t) => Fn((() => {
    const n = 'transform="' + vJ(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popTransform: /* @__PURE__ */ Fn("</g>"),
  pushBakedTransform: (t) => (n) => {
    const e = n.bake;
    return () => {
      e.value = v("Just", t);
    };
  },
  popBakedTransform: (t) => {
    const n = t.bake;
    return () => {
      n.value = J;
    };
  },
  pushClip: (t) => (n) => (e) => {
    const r = e.clipCounter;
    return () => {
      const o = r.value;
      e.clipCounter.value = o + 1 | 0;
      const i = ui(e)(t)(), s = "clip" + un(o);
      return Fn((() => {
        const u = 'clip-path="url(#' + s + ')"';
        return '<defs><clipPath id="' + s + '"><path d="' + Nc(i) + '"' + (() => {
          if (n === "EvenOdd")
            return ' clip-rule="evenodd"';
          if (n === "NonZero")
            return "";
          f();
        })() + "/></clipPath></defs>" + (u === "" ? "<g>" : "<g " + u + ">");
      })())(e)();
    };
  },
  popClip: /* @__PURE__ */ Fn("</g>"),
  pushBlend: (t) => Fn((() => {
    const n = (() => {
      if (t === "Normal")
        return 'style="mix-blend-mode: normal"';
      if (t === "Difference")
        return 'style="mix-blend-mode: difference"';
      f();
    })();
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popBlend: /* @__PURE__ */ Fn("</g>"),
  pushAlpha: (t) => Fn((() => {
    const n = 'opacity="' + kt(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popAlpha: /* @__PURE__ */ Fn("</g>"),
  pushLayer: (t) => (n) => {
    const e = (() => {
      if (t === "LayerNodeMask") {
        const r = n.maskDepth;
        return () => {
          const o = r.value;
          n.maskDepth.value = o + 1 | 0;
        };
      }
      return () => {
      };
    })();
    return () => {
      e(), n.out.push("<g>");
    };
  },
  popLayer: (t) => {
    const n = t.maskDepth;
    return () => {
      const e = n.value, r = e - 1 | 0;
      e > 0 && (t.maskDepth.value = r), t.out.push("</g>");
    };
  },
  setViewport: (t) => (n) => () => {
  },
  clearBackground: (t) => (n) => Fn('<rect x="' + kt(n.viewport.vx) + '" y="' + kt(n.viewport.vy) + '" width="' + kt(n.viewport.vw) + '" height="' + kt(n.viewport.vh) + '" fill="' + tr(t) + '" opacity="' + kt(et(t.a) / 255) + '"/>')(n),
  backgroundDots: (t) => (n) => {
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      return n.patternCounter.value = r + 1 | 0, Fn(CJ("bg-dots-" + un(r))(t))(n)();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = _g(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = dg(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => Jg,
  Monad0: () => SJ
}, IJ = /* @__PURE__ */ il(cl), AJ = /* @__PURE__ */ mc(cl), FJ = (t) => (n) => (e) => (r) => (o) => {
  const i = {
    padding: 24,
    transparentBg: (() => {
      if (r === "TransparentBackground")
        return !0;
      if (r === "PaintBackground")
        return !1;
      f();
    })(),
    halftoneShadows: !0,
    watermark: "",
    theme: e,
    outputAspect: t
  }, s = Ur(i)(o);
  return {
    viewBox: kt(s.vx) + " " + kt(s.vy) + " " + kt(s.vw) + " " + kt(s.vh),
    body: (() => {
      const u = [], c = { value: 0 }, a = { value: 0 }, g = { value: 0 }, _ = { value: J };
      return IJ(i)(n)(o)({ out: u, maskDepth: c, clipCounter: a, patternCounter: g, viewport: s, bake: _ })(), es("")(u);
    })(),
    vx: s.vx,
    vy: s.vy,
    vw: s.vw,
    vh: s.vh
  };
}, RJ = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = {
    padding: 24,
    transparentBg: (() => {
      if (e === "TransparentBackground")
        return !0;
      if (e === "PaintBackground")
        return !1;
      f();
    })(),
    outputAspect: t
  }, u = $u(o)((() => {
    const c = [], a = { value: 0 }, g = { value: 0 }, _ = { value: 0 }, d = { value: J }, l = r.levels.length - 1 | 0;
    return l >= 0 && l < r.levels.length ? AJ(r.levels[l].segment.layout)(r.levels[l].state)({
      out: c,
      maskDepth: a,
      clipCounter: g,
      patternCounter: _,
      viewport: Ur(s)(r),
      bake: d
    })() : A;
  })())(i);
  return { parts: FJ(t)(u.applied)(n)(e)(r), springs: u.springs };
}, Yo = (t) => ({ bind: (n) => (e) => (r) => t.Bind1().bind(n(r))((o) => e(o._1)(o._2)), Apply0: () => al(t) }), al = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = { map: (r) => (o) => (i) => n.map((s) => b(r(s._1), s._2))(o(i)) };
  return {
    apply: (() => {
      const r = Yo(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => Xo(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, Xo = (t) => ({ pure: (n) => (e) => t.Applicative0().pure(b(n, e)), Apply0: () => al(t) }), BJ = (t) => {
  const n = { Applicative0: () => Xo(t), Bind1: () => Yo(t) };
  return { state: (e) => (r) => t.Applicative0().pure(e(r)), Monad0: () => n };
}, xc = (t, n) => ({ tag: t, _1: n }), ze = (t, n) => ({ tag: t, _1: n }), vn = /* @__PURE__ */ BJ(Ke), Dt = /* @__PURE__ */ Yo(Ke), Bn = vn.state((t) => b(t, t)), sn = /* @__PURE__ */ Xo(Ke), Re = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, fl = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, $s = /* @__PURE__ */ Hi(sn)(Ht), Be = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, QJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, WJ = /* @__PURE__ */ (() => {
  const t = ne.unfoldr((n) => {
    if (n.tag === "Nil")
      return J;
    if (n.tag === "Cons")
      return v("Just", b(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, zt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Yt);
  })());
})(), DJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = !0;
        continue;
      }
    }
    f();
  }
  return i;
}, ms = (t) => (n) => (e) => x((r) => (o) => t.Bind1().bind(r)((i) => n(i)(o)))(t.Applicative0().pure(e)), HJ = /* @__PURE__ */ x((t) => (n) => U(C)(n)()(t))(A), OJ = /* @__PURE__ */ (() => {
  const n = ((e) => (r) => {
    let o = e, i = r, s = !0, u;
    for (; s; ) {
      const c = o, a = i;
      if (a.tag === "Nil") {
        s = !1, u = c;
        continue;
      }
      if (a.tag === "Cons") {
        o = U(C)(a._1)()(c), i = a._2;
        continue;
      }
      f();
    }
    return u;
  })(A);
  return (e) => n((() => {
    const r = (o, i) => {
      if (o.tag === "Leaf")
        return i;
      if (o.tag === "Node")
        return r(o._5, zt("Cons", o._3, r(o._6, i)));
      f();
    };
    return r(e, Yt);
  })());
})(), zJ = /* @__PURE__ */ ze("Exit"), qJ = (t) => xc("Par", t), gl = (t) => xc("Seq", t), YJ = (t) => (n) => (e) => {
  const r = dr(qt, J, (o) => o._1 === t, e);
  if (r.tag === "Just") {
    const o = Me(qt, J, r._1, b(t, n), e);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return o._1;
    f();
  }
  if (r.tag === "Nothing")
    return Qt(e)(b(t, n));
  f();
}, XJ = (t) => (n) => z((e) => e._1 === t ? b(e._1, { ...e._2, label: v("Just", n) }) : b(e._1, e._2)), wn = (t) => vn.state((n) => b(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return { ...n, error: v("Just", { msg: t, line: n.currentLine, column: n.currentColumn }) };
    f();
  })()
)), VJ = (t) => Dt.bind(vn.state((n) => b(void 0, { ...n, currentLine: t.line, currentColumn: t.column })))(() => Dt.bind(Bn)((n) => {
  if (n.error.tag === "Just")
    return sn.pure();
  if (n.error.tag === "Nothing") {
    if (t.op.tag === "Enter") {
      if (!Re(t.op._1.id)(n.currNodes))
        return wn("cannot enter node " + t.op._1.id + ": does not exist");
      if (!fl(t.op._1.id)(n.interiorOf))
        return wn("cannot enter node " + t.op._1.id + ": it has no `inside` block");
      if (Hn(le)(t.op._1.id)(n.enterStack))
        return wn("cannot enter node " + t.op._1.id + ": already entered");
      const e = t.op._1;
      return vn.state((r) => b(
        void 0,
        { ...r, enterStack: Qt(r.enterStack)(e.id), scenes: Qt(r.scenes)(Zi("EnterNode", e.id)) }
      ));
    }
    if (t.op.tag === "Exit") {
      const e = Wo(n.enterStack);
      if (e.tag === "Nothing")
        return wn("`exit` without a matching `enter`");
      if (e.tag === "Just") {
        const r = e._1.init;
        return vn.state((o) => b(void 0, { ...o, enterStack: r, scenes: Qt(o.scenes)(H1) }));
      }
      f();
    }
    return sn.pure();
  }
  f();
})), UJ = (t) => Dt.bind(Bn)((n) => {
  const e = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + un(n.kfCounter);
  if (qn((o) => o.id === e, n.keyframes))
    return wn("duplicate frame name " + e);
  const r = {
    ...n,
    keyframes: Qt(n.keyframes)({ id: e, nodes: n.currNodes, edges: n.currEdges }),
    kfCounter: n.kfCounter + 1 | 0,
    currentKf: v("Just", e)
  };
  return vn.state((o) => b(void 0, r));
}), KJ = /* @__PURE__ */ $s((t) => Dt.bind(Bn)((n) => {
  if (n.error.tag === "Just")
    return sn.pure();
  if (n.error.tag === "Nothing")
    return fl(t.node)(n.interiorOf) ? wn("node " + t.node + " has more than one `inside` block") : vn.state((e) => b(void 0, { ...e, interiorOf: U(C)(t.node)(t.doc)(e.interiorOf) }));
  f();
})), MJ = (t) => (n) => {
  const e = n.from + "->" + n.to, r = n.newFrom + "->" + n.newTo, o = St("Left", "cannot repoint " + n.from + "→" + n.to + ": edge does not exist"), i = Be(e)(t.currEdges) ? St("Right", void 0) : o;
  return (() => {
    if (i.tag === "Left") {
      const s = i._1;
      return (u) => St("Left", s);
    }
    if (i.tag === "Right") {
      const s = i._1;
      return (u) => u(s);
    }
    f();
  })()(() => {
    const s = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newFrom;
    if (!Re(n.newFrom)(t.currNodes))
      return St("Left", s);
    const u = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newTo;
    if (!Re(n.newTo)(t.currNodes))
      return St("Left", u);
    const c = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": target edge already exists";
    return e !== r && Be(r)(t.currEdges) ? St("Left", c) : St(
      "Right",
      {
        nextCurrEdges: U(C)(r)()(mo(C)(e)(t.currEdges)),
        newId: r,
        newEdge: { id: r, from: { node: n.newFrom, port: J }, to: { node: n.newTo, port: J } }
      }
    );
  });
}, ll = {
  graphNodes: [],
  graphEdges: A,
  currNodes: A,
  currEdges: A,
  keyframes: [],
  scenes: [],
  kfCounter: 0,
  eventCounter: 0,
  currentKf: J,
  currentLine: 0,
  currentColumn: 0,
  error: J,
  enterStack: [],
  interiorOf: A
}, uf = (t) => (n) => Dt.bind(Bn)((e) => {
  const r = "ev-" + un(e.eventCounter);
  return Dt.bind((() => {
    const o = { ...e, eventCounter: e.eventCounter + 1 | 0 };
    return vn.state((i) => b(void 0, o));
  })())(() => sn.pure({ events: [{ id: r, kind: n, when: t }], firstId: v("Just", r), lastId: v("Just", r) }));
}), jJ = (t) => (n) => {
  if (n.tag === "Token") {
    const e = n._1;
    return Dt.bind(Bn)((r) => {
      const o = !Re(e.from)(r.currNodes), i = !Re(e.to)(r.currNodes);
      if (o || i)
        return Dt.bind(wn(o ? i ? "token references unknown node: " + e.from + ", " + e.to : "token references unknown node: " + e.from : i ? "token references unknown node: " + e.to : "token references unknown node: "))(() => sn.pure({ events: [], firstId: J, lastId: J }));
      const s = e.to + "->" + e.from, u = e.from + "->" + e.to;
      return Be(u)(r.currEdges) ? uf(t)(Bc(
        "SendToken",
        { from: e.from, to: e.to, edge: u, direction: W1, labels: e.labels }
      )) : Be(s)(r.currEdges) ? uf(t)(Bc(
        "SendToken",
        { from: e.from, to: e.to, edge: s, direction: D1, labels: e.labels }
      )) : Dt.bind(wn("token " + e.from + "→" + e.to + ": no edge between " + e.from + " and " + e.to))(() => sn.pure({
        events: [],
        firstId: J,
        lastId: J
      }));
    });
  }
  return sn.pure({ events: [], firstId: J, lastId: J });
}, ZJ = (t) => (n) => {
  if (0 < t.length) {
    const e = t[0];
    return Dt.bind(vn.state((r) => b(void 0, { ...r, currentLine: e.line, currentColumn: e.column })))(() => wn(n));
  }
  return wn(n);
}, tT = (t) => yt((n) => QJ(n)(t.graphEdges))(Et($o, WJ(t.currEdges))), nT = (t) => (n) => {
  const e = ft((o) => o.from.node === n.id || o.to.node === n.id, tT(t)), r = ms(yf)((o) => (i) => {
    const s = i.from + "->" + n.id, u = n.id + "->" + i.to, c = i.from + "->" + i.to, a = "via " + i.from + " " + i.to + ": no edge " + i.from + "→" + n.id;
    if (!Be(s)(t.currEdges))
      return St("Left", a);
    const g = "via " + i.from + " " + i.to + ": no edge " + n.id + "→" + i.to;
    if (!Be(u)(t.currEdges))
      return St("Left", g);
    const _ = "via " + i.from + " " + i.to + ": would create " + i.from + "→" + i.to + " but it already exists";
    return Be(c)(t.currEdges) || DJ(c)(o.synthesized) ? St("Left", _) : St(
      "Right",
      {
        consumed: U(C)(s)()(U(C)(u)()(o.consumed)),
        synthesized: U(C)(c)({
          id: c,
          from: { node: i.from, port: J },
          to: { node: i.to, port: J }
        })(o.synthesized)
      }
    );
  })({ consumed: A, synthesized: A })(n.via);
  return (() => {
    if (r.tag === "Left") {
      const o = r._1;
      return (i) => St("Left", o);
    }
    if (r.tag === "Right") {
      const o = r._1;
      return (i) => i(o);
    }
    f();
  })()((o) => {
    const i = o.consumed, s = ft((u) => !Be(u.id)(i), e);
    return s.length === 0 ? St(
      "Right",
      {
        nextCurrEdges: Pn(
          C.compare,
          Cn,
          Ie(C.compare, t.currEdges, HJ(z((u) => u.id)(e))),
          OJ((() => {
            const u = (c) => {
              if (c.tag === "Leaf")
                return A;
              if (c.tag === "Node")
                return Ot("Node", c._1, c._2, c._3, void 0, u(c._5), u(c._6));
              f();
            };
            return u(o.synthesized);
          })())
        ),
        synthesized: o.synthesized
      }
    ) : St(
      "Left",
      "cannot delete node " + n.id + ": still connected (" + es(", ")(z((u) => u.from.node + "→" + u.to.node)(s)) + "). Use -edge to drop them or `via a b` to merge " + n.id + "'s endpoints."
    );
  });
}, wu = (t) => {
  if (t.tag === "Leaf")
    return [t._1];
  if (t.tag === "Par" || t.tag === "Seq")
    return Tt(t._1)(wu);
  f();
}, eT = Dt.bind(Bn)((t) => {
  if (t.error.tag === "Just")
    return sn.pure();
  if (t.error.tag === "Nothing") {
    const n = t.enterStack.length - 1 | 0;
    return n >= 0 && n < t.enterStack.length ? wn("entered node " + t.enterStack[n] + " was never exited") : sn.pure();
  }
  f();
}), rT = (t) => ({
  nodes: z(Oi)(t.graphNodes),
  edges: (() => {
    const n = (e, r) => {
      if (e.tag === "Leaf")
        return r;
      if (e.tag === "Node")
        return n(e._5, zt("Cons", e._4, n(e._6, r)));
      f();
    };
    return Et(Xt.foldr, n(t.graphEdges, Yt));
  })(),
  constraints: []
}), oT = (t) => {
  if (t.tag === "AddNode") {
    const n = t._1;
    return vn.state((e) => b(
      void 0,
      {
        ...e,
        graphNodes: YJ(n.id)({ id: n.id, size: b(1, 1), ports: [], label: v("Just", n.label), shape: n.shape })(e.graphNodes),
        currNodes: U(C)(n.id)()(e.currNodes)
      }
    ));
  }
  if (t.tag === "DelNode") {
    const n = t._1;
    return Dt.bind(Bn)((e) => {
      if (!Re(n.id)(e.currNodes))
        return wn("cannot delete node " + n.id + ": does not exist");
      const r = nT(e)(n);
      if (r.tag === "Left")
        return wn(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return vn.state((i) => b(
          void 0,
          {
            ...i,
            currNodes: mo(C)(n.id)(i.currNodes),
            currEdges: o.nextCurrEdges,
            graphEdges: Pn(C.compare, Cn, o.synthesized, i.graphEdges)
          }
        ));
      }
      f();
    });
  }
  if (t.tag === "ModNode") {
    const n = t._1;
    return Dt.bind(Bn)((e) => {
      if (!Re(n.id)(e.currNodes))
        return wn("cannot modify node " + n.id + ": does not exist");
      if (n.label.tag === "Just") {
        const r = n.label._1;
        return vn.state((o) => b(void 0, { ...o, graphNodes: XJ(n.id)(r)(o.graphNodes) }));
      }
      if (n.label.tag === "Nothing")
        return sn.pure();
      f();
    });
  }
  if (t.tag === "AddEdge") {
    const n = t._1;
    return Dt.bind(Bn)((e) => {
      const r = !Re(n.from)(e.currNodes), o = !Re(n.to)(e.currNodes);
      if (r || o)
        return wn("cannot add edge " + n.from + "→" + n.to + ": unknown node " + (r ? o ? n.from + ", " + n.to : n.from : o ? n.to : ""));
      const i = n.from + "->" + n.to;
      return vn.state((s) => b(
        void 0,
        {
          ...s,
          graphEdges: U(C)(i)({ id: i, from: { node: n.from, port: J }, to: { node: n.to, port: J } })(s.graphEdges),
          currEdges: U(C)(i)()(s.currEdges)
        }
      ));
    });
  }
  if (t.tag === "DelEdge") {
    const n = t._1;
    return Dt.bind(Bn)((e) => {
      const r = n.from + "->" + n.to;
      return Be(r)(e.currEdges) ? vn.state((o) => b(void 0, { ...o, currEdges: mo(C)(r)(o.currEdges) })) : wn("cannot delete edge " + n.from + "→" + n.to + ": does not exist");
    });
  }
  if (t.tag === "RepointEdge") {
    const n = t._1;
    return Dt.bind(Bn)((e) => {
      const r = MJ(e)(n);
      if (r.tag === "Left")
        return wn(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return vn.state((i) => b(
          void 0,
          { ...i, currEdges: o.nextCurrEdges, graphEdges: U(C)(o.newId)(o.newEdge)(i.graphEdges) }
        ));
      }
      f();
    });
  }
  return sn.pure();
}, iT = (t) => Dt.bind(vn.state((n) => b(void 0, { ...n, currentLine: t.line, currentColumn: t.column })))(() => oT(t.op)), sT = (t) => (n) => Dt.bind($s(iT)(n))(() => Dt.bind(Bn)((e) => {
  const r = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + un(e.kfCounter);
  if (qn((i) => i.id === r, e.keyframes))
    return wn("duplicate frame name " + r);
  const o = {
    ...e,
    keyframes: Qt(e.keyframes)({ id: r, nodes: e.currNodes, edges: e.currEdges }),
    kfCounter: e.kfCounter + 1 | 0,
    currentKf: v("Just", r),
    scenes: (() => {
      if (e.currentKf.tag === "Nothing")
        return e.scenes;
      if (e.currentKf.tag === "Just")
        return Qt(e.scenes)(Zi("Structural", { from: e.currentKf._1, to: r, focus: J }));
      f();
    })()
  };
  return vn.state((i) => b(void 0, o));
})), uT = (t) => (n) => {
  const e = Rt((r) => J, (r) => (o) => v("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return sn.pure({ events: [], firstId: J, lastId: J });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Dt.bind(Ro(t)(e._1.head))((o) => Dt.bind(ms({
      Applicative0: () => Xo(Ke),
      Bind1: () => Yo(Ke)
    })((i) => (s) => Dt.bind(Ro((() => {
      if (i.lastId.tag === "Just")
        return Xu("After", i.lastId._1);
      if (i.lastId.tag === "Nothing")
        return t;
      f();
    })())(s))((u) => sn.pure({
      events: [...i.events, ...u.events],
      firstId: (() => {
        if (i.firstId.tag === "Just")
          return v("Just", i.firstId._1);
        if (i.firstId.tag === "Nothing")
          return u.firstId;
        f();
      })(),
      lastId: (() => {
        if (u.lastId.tag === "Just")
          return v("Just", u.lastId._1);
        if (u.lastId.tag === "Nothing")
          return i.lastId;
        f();
      })()
    })))(o)(r))((i) => sn.pure(i)));
  }
  f();
}, cT = (t) => (n) => {
  const e = Rt((r) => J, (r) => (o) => v("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return sn.pure({ events: [], firstId: J, lastId: J });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Dt.bind(Ro(t)(e._1.head))((o) => Dt.bind(aT((() => {
      if (o.firstId.tag === "Just")
        return Xu("With", o.firstId._1);
      if (o.firstId.tag === "Nothing")
        return t;
      f();
    })())(r))((i) => sn.pure({
      events: [...o.events, ...i.events],
      firstId: o.firstId,
      lastId: (() => {
        if (o.lastId.tag === "Just")
          return v("Just", o.lastId._1);
        if (o.lastId.tag === "Nothing")
          return i.lastId;
        f();
      })()
    })));
  }
  f();
}, Ro = (t) => (n) => {
  if (n.tag === "Leaf") {
    const e = n._1;
    return Dt.bind(vn.state((r) => b(void 0, { ...r, currentLine: e.line, currentColumn: e.column })))(() => jJ(t)(e.op));
  }
  if (n.tag === "Seq")
    return uT(t)(n._1);
  if (n.tag === "Par")
    return cT(t)(n._1);
  f();
}, aT = (t) => ms({
  Applicative0: () => Xo(Ke),
  Bind1: () => Yo(Ke)
})((n) => (e) => Dt.bind(Ro(t)(e))((r) => sn.pure({
  events: [...n.events, ...r.events],
  firstId: (() => {
    if (n.firstId.tag === "Just")
      return v("Just", n.firstId._1);
    if (n.firstId.tag === "Nothing")
      return r.firstId;
    f();
  })(),
  lastId: (() => {
    if (r.lastId.tag === "Just")
      return v("Just", r.lastId._1);
    if (r.lastId.tag === "Nothing")
      return n.lastId;
    f();
  })()
})))({ events: [], firstId: J, lastId: J }), fT = (t) => Dt.bind(Bn)((n) => {
  if (n.currentKf.tag === "Nothing")
    return wn("flow ops before any structural frame");
  if (n.currentKf.tag === "Just") {
    const e = n.currentKf._1;
    return Dt.bind(Ro(Q1)(t))((r) => Dt.bind(Bn)((o) => {
      const i = { ...o, scenes: Qt(o.scenes)(Zi("DataFlow", { keyframe: e, events: r.events, focus: J })) };
      return vn.state((s) => b(void 0, i));
    }));
  }
  f();
}), gT = (t) => Dt.bind(Bn)((n) => {
  if (n.error.tag === "Just")
    return sn.pure();
  if (n.error.tag === "Nothing") {
    const e = wu(t.ops), r = ft(
      (s) => s.op.tag === "AddNode" || s.op.tag === "DelNode" || s.op.tag === "ModNode" || s.op.tag === "AddEdge" || s.op.tag === "DelEdge" || s.op.tag === "RepointEdge",
      e
    ), o = ft((s) => s.op.tag === "Enter" || s.op.tag === "Exit", e), i = ft(
      (s) => !(s.op.tag === "AddNode" || s.op.tag === "DelNode" || s.op.tag === "ModNode" || s.op.tag === "AddEdge" || s.op.tag === "DelEdge" || s.op.tag === "RepointEdge") && !(s.op.tag === "Enter" || s.op.tag === "Exit"),
      e
    );
    return o.length !== 0 && i.length !== 0 ? ZJ(o)("`enter`/`exit` cannot be mixed with flow tokens in the same frame") : Dt.bind((() => {
      const s = sT(t.name)(r);
      return r.length !== 0 ? s : sn.pure();
    })())(() => Dt.bind((() => {
      const s = UJ(t.name);
      return r.length === 0 && i.length !== 0 ? s : sn.pure();
    })())(() => Dt.bind((() => {
      const s = fT(t.ops);
      return i.length !== 0 ? s : sn.pure();
    })())(() => $s(VJ)(o))));
  }
  f();
}), _l = (t) => Dt.bind(KJ(t.interiors))(() => Dt.bind($s(gT)(t.frames))(() => Dt.bind(eT)(() => Dt.bind(Bn)((n) => {
  if (n.error.tag === "Just")
    return sn.pure(St("Left", n.error._1));
  if (n.error.tag === "Nothing") {
    const e = lT(t.interiors);
    if (e.tag === "Left")
      return sn.pure(St("Left", e._1));
    if (e.tag === "Right")
      return sn.pure(St("Right", { seed: t.seed, graph: rT(n), keyframes: n.keyframes, scenes: n.scenes, interiors: e._1 }));
  }
  f();
})))), lT = (t) => {
  const n = ms(yf)((e) => (r) => {
    const o = _l(r.doc)(ll)._1;
    return (() => {
      if (o.tag === "Left") {
        const i = o._1;
        return (s) => St("Left", i);
      }
      if (o.tag === "Right") {
        const i = o._1;
        return (s) => s(i);
      }
      f();
    })()((i) => St("Right", U(C)(r.node)(i)(e)));
  })(A)(t);
  if (n.tag === "Left")
    return St("Left", n._1);
  if (n.tag === "Right")
    return St("Right", n._1);
  f();
}, Ir = (t, n) => ({ tag: "ParseError", _1: t, _2: n }), R = (t, n, e) => ({ tag: "ParseState", _1: t, _2: n, _3: e }), Wi = (t, n, e) => ({ tag: t, _1: n, _2: e }), _T = (t) => Wi("More", t), dT = (t) => Wi("Lift", t), hT = {
  defer: (t) => {
    const n = m1(t);
    return (e, r, o, i, s) => y1(n)(e, r, o, i, s);
  }
}, dl = { map: (t) => (n) => (e, r, o, i, s) => r((u) => n(e, r, o, i, (c, a) => r((g) => s(c, t(a))))) }, pT = {
  alt: (t) => (n) => (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((a) => t(
      R(u, c, !1),
      r,
      o,
      (g, _) => {
        const d = g._3;
        return r((l) => d ? i(g, _) : n(e, r, o, i, s));
      },
      s
    ));
  },
  Functor0: () => dl
}, $T = (t) => {
  const n = t.Monad0();
  return (e) => (r) => {
    const o = (i) => {
      let s = i, u = !0, c;
      for (; u; ) {
        const g = s();
        if (g.tag === "More") {
          s = g._1;
          continue;
        }
        if (g.tag === "Lift") {
          u = !1, c = n.Bind1().Apply0().Functor0().map(xf)(g._1);
          continue;
        }
        if (g.tag === "Stop") {
          u = !1, c = n.Applicative0().pure(so("Done", b(g._2, g._1)));
          continue;
        }
        f();
      }
      return c;
    };
    return t.tailRecM(o)((i) => r(
      e,
      _T,
      dT,
      (s, u) => Wi("Stop", s, St("Left", u)),
      (s, u) => Wi("Stop", s, St("Right", u))
    ));
  };
}, hl = (t, n, e, r, o) => o(t, t._2), mT = { index: 0, line: 1, column: 1 }, yT = (t) => {
  const n = $T(t);
  return (e) => (r) => t.Monad0().Bind1().Apply0().Functor0().map(zi)(n(R(e, mT, !1))(r));
}, NT = /* @__PURE__ */ yT(ql), pl = {
  apply: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, a) => r((g) => {
      const _ = e._3 && !c._3 ? R(c._1, c._2, !0) : c;
      return n(_, r, o, i, (d, l) => r((h) => s(_._3 && !d._3 ? R(d._1, d._2, !0) : d, a(l))));
    })
  )),
  Functor0: () => dl
}, $l = { pure: (t) => (n, e, r, o, i) => i(n, t), Apply0: () => pl }, xT = {
  bind: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, a) => r((g) => n(a)(e._3 && !c._3 ? R(c._1, c._2, !0) : c, r, o, i, s))
  )),
  Apply0: () => pl
}, JT = { Applicative0: () => $l, Bind1: () => xT }, ys = (t) => (n, e, r, o, i) => e((s) => hl(
  n,
  e,
  r,
  o,
  (u, c) => e((a) => o(n._3 && !u._3 ? R(u._1, u._2, !0) : u, Ir(t, c)))
)), TT = { empty: /* @__PURE__ */ ys("No alternative"), Alt0: () => pT }, vT = { Applicative0: () => $l, Plus1: () => TT }, wT = {
  tailRecM: (t) => (n) => (e, r, o, i, s) => {
    const u = (c, a, g) => t(a)(
      c,
      r,
      o,
      i,
      (_, d) => {
        const l = c._3 && !_._3 ? R(_._1, _._2, !0) : _;
        if (d.tag === "Loop")
          return g === 0 ? r((h) => u(l, d._1, 30)) : u(l, d._1, g - 1 | 0);
        if (d.tag === "Done")
          return s(l, d._1);
        f();
      }
    );
    return u(e, n, 30);
  },
  Monad0: () => JT
}, kT = (t) => (n) => {
  const e = n.Plus1().Alt0(), r = n.Applicative0();
  return (o) => t.tailRecM((i) => t.Monad0().Bind1().bind(e.alt(e.Functor0().map(xf)(o))(r.pure(so(
    "Done",
    void 0
  ))))((s) => r.pure((() => {
    if (s.tag === "Loop")
      return so("Loop", zt("Cons", s._1, i));
    if (s.tag === "Done")
      return so(
        "Done",
        ((c) => (a) => {
          let g = c, _ = a, d = !0, l;
          for (; d; ) {
            const h = g, p = _;
            if (p.tag === "Nil") {
              d = !1, l = h;
              continue;
            }
            if (p.tag === "Cons") {
              g = zt("Cons", p._1, h), _ = p._2;
              continue;
            }
            f();
          }
          return l;
        })(Yt)(i)
      );
    f();
  })())))(Yt);
}, ce = /* @__PURE__ */ kT(wT)(vT), Ct = (t) => (n) => {
  const e = ys("Expected " + n);
  return (r, o, i, s, u) => {
    const c = r._1, a = r._2;
    return o((g) => t(
      R(c, a, !1),
      o,
      i,
      (_, d) => {
        const l = _._3;
        return o((h) => l ? s(_, d) : e(r, o, i, s, u));
      },
      u
    ));
  };
}, Jc = (t) => (n, e, r, o, i) => {
  const s = n._3, u = n._1, c = n._2;
  return e((a) => {
    const g = (_, d) => {
      const l = _._3;
      return e((h) => l ? o(R(_._1, _._2, s), d) : i(n, void 0));
    };
    return e((_) => e((d) => t(
      R(u, c, !1),
      e,
      r,
      (l, h) => g(R(l._1, l._2, !1), h),
      (l, h) => e((p) => e(($) => ys("Negated parser succeeded")(
        l,
        e,
        r,
        g,
        (m, y) => e((N) => i(l._3 && !m._3 ? R(m._1, m._2, !0) : m, y))
      )))
    )));
  });
}, bT = (t) => {
  const n = t.foldr((e) => (r) => {
    if (r.tag === "Nothing")
      return v("Just", e);
    if (r.tag === "Just")
      return v(
        "Just",
        (o, i, s, u, c) => {
          const a = o._1, g = o._2;
          return i((_) => e(
            R(a, g, !1),
            i,
            s,
            (d, l) => {
              const h = d._3;
              return i((p) => h ? u(d, l) : r._1(o, i, s, u, c));
            },
            c
          ));
        }
      );
    f();
  })(J);
  return (e) => {
    const r = n(e);
    if (r.tag === "Nothing")
      return ys("No alternative");
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, LT = (t) => (n) => (e) => (r, o, i, s, u) => o((c) => o((a) => o((g) => o((_) => t(
  r,
  o,
  i,
  s,
  (d, l) => o((h) => o((p) => {
    const $ = r._3 && !d._3 ? R(d._1, d._2, !0) : d;
    return e(
      $,
      o,
      i,
      s,
      (m, y) => o((N) => {
        const T = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
        return o((w) => o((k) => {
          const L = r._3 && !T._3 ? R(T._1, T._2, !0) : T;
          return n(
            L,
            o,
            i,
            s,
            (P, D) => o((V) => u(L._3 && !P._3 ? R(P._1, P._2, !0) : P, y))
          );
        }));
      })
    );
  }))
))))), ku = (t) => (n) => (e) => {
  if (n === 10)
    return { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  if (n === 13) {
    const r = Pd()(e);
    return r.tag === "Just" && r._1 === 10 ? { index: t.index + 1 | 0, line: t.line, column: t.column } : { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  }
  return n === 9 ? { index: t.index + 1 | 0, line: t.line, column: (t.column + 8 | 0) - Xe(t.column - 1 | 0)(8) | 0 } : { index: t.index + 1 | 0, line: t.line, column: t.column + 1 | 0 };
}, ET = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const c = r, a = o, g = i, _ = rs(a);
    if (_.tag === "Nothing") {
      s = !1, u = c;
      continue;
    }
    if (_.tag === "Just") {
      r = _._1.tail === "" ? ku(c)(_._1.head)(g) : ku(c)(_._1.head)(_._1.tail), o = _._1.tail, i = g;
      continue;
    }
    f();
  }
  return u;
}, Mt = (t) => (n, e, r, o, i) => {
  const s = rs(n._1);
  if (s.tag === "Nothing")
    return o(n, Ir("Unexpected EOF", n._2));
  if (s.tag === "Just") {
    if (s._1.head < 0 || s._1.head > 65535)
      return o(n, Ir("Expected Char", n._2));
    if (s._1.head >= 0 && s._1.head <= 65535) {
      const u = jf(s._1.head);
      return t(u) ? i(R(s._1.tail, ku(n._2)(s._1.head)(s._1.tail), !0), u) : o(n, Ir("Predicate unsatisfied", n._2));
    }
  }
  f();
}, Tc = (t, n, e, r, o) => t._1 === "" ? o(R(t._1, t._2, !0), void 0) : r(t, Ir("Expected EOF", t._2)), ST = (t) => (n, e, r, o, i) => {
  const s = t(n._1);
  if (s.tag === "Left")
    return o(n, Ir(s._1, n._2));
  if (s.tag === "Right")
    return i(R(s._1.remainder, ET(n._2)(s._1.consumed)(s._1.remainder), s._1.consumed !== ""), s._1.value);
  f();
}, Kr = (t) => ST((n) => {
  const e = $1(t)(n);
  return e.tag === "Just" ? St("Right", { value: t, consumed: t, remainder: e._1 }) : St("Left", "Expected " + qs(t));
}), CT = /* @__PURE__ */ Mt((t) => !0), cf = (t, n) => ({ tag: t, _1: n }), PT = /* @__PURE__ */ nn(C)(Ht), GT = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = C.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = v("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ml = /* @__PURE__ */ bT(Ht), yl = /* @__PURE__ */ (() => {
  const t = Mt((n) => n === " " || n === "	" || n === `
` || n === "\r");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? R(u._1, u._2, !0) : u, void 0))
  ));
})(), vc = (t, n, e, r, o) => n((i) => Kr("#")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = ce(Mt((_) => _ !== `
`)), g = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => o(g._3 && !d._3 ? R(d._1, d._2, !0) : d, void 0))
    ));
  })
)), IT = /* @__PURE__ */ Ct(/* @__PURE__ */ (() => {
  const t = Ct(Mt((e) => e === "}"))("'}'"), n = Mt((e) => e === `
` || e === "\r");
  return (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((a) => r((g) => t(
      R(u, c, !1),
      r,
      o,
      (_, d) => r((l) => {
        const h = e._1, p = e._2;
        return r(($) => r((m) => vc(
          R(h, p, !1),
          r,
          o,
          (y, N) => {
            const T = y._3;
            return r((w) => {
              if (T)
                return i(y, N);
              const k = e._1, L = e._2;
              return r((P) => r((D) => n(
                R(k, L, !1),
                r,
                o,
                (V, X) => {
                  const I = V._3;
                  return r((B) => I ? i(V, X) : Tc(e, r, o, i, s));
                },
                (V, X) => r((I) => s(V, void 0))
              )));
            });
          },
          (y, N) => r((T) => s(y, void 0))
        )));
      }),
      (_, d) => r((l) => s(R(u, c, !1), void 0))
    )));
  };
})())("newline or '}' (statements end at the end of the line)"), te = /* @__PURE__ */ (() => {
  const t = ce((n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => yl(
      R(s, u, !1),
      e,
      r,
      (a, g) => {
        const _ = a._3;
        return e((d) => _ ? o(a, g) : vc(n, e, r, o, i));
      },
      i
    ));
  });
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? R(u._1, u._2, !0) : u, void 0))
  ));
})(), ge = (t, n, e, r, o) => n((i) => {
  const s = (a, g) => n((_) => te(t._3 && !a._3 ? R(a._1, a._2, !0) : a, n, e, r, o)), u = t._1, c = t._2;
  return n((a) => yl(
    R(u, c, !1),
    n,
    e,
    (g, _) => {
      const d = g._3;
      return n((l) => d ? r(g, _) : vc(t, n, e, r, s));
    },
    s
  ));
}), Nl = /* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === "|"))("'|'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const g = ce(Mt((d) => d !== "|")), _ = n._3 && !u._3 ? R(u._1, u._2, !0) : u;
      return e((d) => g(
        _,
        e,
        r,
        o,
        (l, h) => e((p) => {
          const $ = Ct(Ct(Mt((y) => y === "|"))("'|'"))("closing '|'"), m = _._3 && !l._3 ? R(l._1, l._2, !0) : l;
          return e((y) => $(
            m,
            e,
            r,
            o,
            (N, T) => e((w) => i(
              m._3 && !N._3 ? R(N._1, N._2, !0) : N,
              Nr(Et(Xt.foldr, h))
            ))
          ));
        })
      ));
    })
  ));
})(), Di = /* @__PURE__ */ Mt((t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z"), Dn = /* @__PURE__ */ (() => {
  const t = ce(Mt((n) => n === " " || n === "	"));
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? R(u._1, u._2, !0) : u, void 0))
  ));
})(), AT = /* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === "\\"))("'\\\\'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const g = n._3 && !u._3 ? R(u._1, u._2, !0) : u;
      return e((_) => CT(
        g,
        e,
        r,
        o,
        (d, l) => e((h) => i(
          g._3 && !d._3 ? R(d._1, d._2, !0) : d,
          l === "n" ? `
` : l === "t" ? "	" : l === "r" ? "\r" : l
        ))
      ));
    })
  ));
})(), FT = /* @__PURE__ */ (() => {
  const t = Mt((n) => n !== '"' && n !== "\\" && n !== `
`);
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => AT(R(s, u, !1), e, r, (a, g) => e((_) => t(n, e, r, o, i)), i));
  };
})(), wc = /* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === '"'))(`'"'`);
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const g = ce(FT), _ = n._3 && !u._3 ? R(u._1, u._2, !0) : u;
      return e((d) => g(
        _,
        e,
        r,
        o,
        (l, h) => e((p) => {
          const $ = Ct(Ct(Mt((y) => y === '"'))(`'"'`))(`closing '"' (unterminated string)`), m = _._3 && !l._3 ? R(l._1, l._2, !0) : l;
          return e((y) => $(
            m,
            e,
            r,
            o,
            (N, T) => e((w) => i(
              m._3 && !N._3 ? R(N._1, N._2, !0) : N,
              Nr(Et(Xt.foldr, h))
            ))
          ));
        })
      ));
    })
  ));
})(), RT = /* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === ":"))("':'");
  return (n, e, r, o, i) => e((s) => Dn(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => Ct((g, _, d, l, h) => {
      const p = g._1, $ = g._2;
      return _((m) => {
        const y = (N, T) => {
          const w = N._3;
          return _((k) => {
            if (w)
              return l(N, T);
            const L = g._1, P = g._2;
            return _((D) => Nl(
              R(L, P, !1),
              _,
              d,
              (V, X) => {
                const I = V._3;
                return _((B) => I ? l(V, X) : wc(g, _, d, l, h));
              },
              h
            ));
          });
        };
        return _((N) => t(
          R(p, $, !1),
          _,
          d,
          y,
          (T, w) => _((k) => _((L) => Dn(
            T,
            _,
            d,
            y,
            (P, D) => _((V) => {
              const X = ce(Mt((B) => B !== `
` && B !== "\r" && B !== "#" && B !== "}")), I = T._3 && !P._3 ? R(P._1, P._2, !0) : P;
              return _((B) => X(
                I,
                _,
                d,
                y,
                (nt, ut) => _((Y) => h(
                  I._3 && !nt._3 ? R(nt._1, nt._2, !0) : nt,
                  md(Nr(Et(Xt.foldr, ut)))
                ))
              ));
            })
          )))
        ));
      });
    })('label ("…", : rest-of-line, or |…|)')(n._3 && !u._3 ? R(u._1, u._2, !0) : u, e, r, o, i))
  ));
})(), BT = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => Nl(
    R(i, s, !1),
    n,
    e,
    (c, a) => {
      const g = c._3;
      return n((_) => g ? r(c, a) : wc(t, n, e, r, o));
    },
    o
  ));
}, Bo = /* @__PURE__ */ Mt((t) => t >= "0" && t <= "9"), bn = /* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => e((s) => {
    const u = (g, _) => e((d) => {
      const l = ce((() => {
        const p = Ct(Mt((m) => m === "_"))("'_'"), $ = Ct(Mt((m) => m === "-"))("'-'");
        return (m, y, N, T, w) => {
          const k = m._1, L = m._2;
          return y((P) => Di(
            R(k, L, !1),
            y,
            N,
            (D, V) => {
              const X = D._3;
              return y((I) => {
                if (X)
                  return T(D, V);
                const B = m._1, nt = m._2;
                return y((ut) => Bo(
                  R(B, nt, !1),
                  y,
                  N,
                  (Y, F) => {
                    const E = Y._3;
                    return y((S) => {
                      if (E)
                        return T(Y, F);
                      const H = m._1, G = m._2;
                      return y((W) => p(
                        R(H, G, !1),
                        y,
                        N,
                        (Q, j) => {
                          const q = Q._3;
                          return y((O) => q ? T(Q, j) : $(m, y, N, T, w));
                        },
                        w
                      ));
                    });
                  },
                  w
                ));
              });
            },
            w
          ));
        };
      })()), h = n._3 && !g._3 ? R(g._1, g._2, !0) : g;
      return e((p) => l(
        h,
        e,
        r,
        o,
        ($, m) => e((y) => i(
          h._3 && !$._3 ? R($._1, $._2, !0) : $,
          Mi(_) + Nr(Et(Xt.foldr, m))
        ))
      ));
    }), c = n._1, a = n._2;
    return e((g) => Di(
      R(c, a, !1),
      e,
      r,
      (_, d) => {
        const l = _._3;
        return e((h) => l ? o(_, d) : t(n, e, r, o, u));
      },
      u
    ));
  });
})(), QT = /* @__PURE__ */ Ct((t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => wc(
    R(i, s, !1),
    n,
    e,
    (c, a) => {
      const g = c._3;
      return n((_) => g ? r(c, a) : bn(t, n, e, r, o));
    },
    o
  ));
})("frame name (identifier or quoted string)"), af = (t, n, e, r, o) => n((i) => Dn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Ct(bn)("attribute key"), g = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => {
        const p = g._3 && !d._3 ? R(d._1, d._2, !0) : d;
        return n(($) => Dn(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = Ct(Ct(Mt((k) => k === ":"))("':'"))("':'"), w = p._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((k) => T(
              w,
              n,
              e,
              r,
              (L, P) => n((D) => {
                const V = w._3 && !L._3 ? R(L._1, L._2, !0) : L;
                return n((X) => Dn(
                  V,
                  n,
                  e,
                  r,
                  (I, B) => n((nt) => {
                    const ut = Ct(bn)("attribute value"), Y = V._3 && !I._3 ? R(I._1, I._2, !0) : I;
                    return n((F) => ut(
                      Y,
                      n,
                      e,
                      r,
                      (E, S) => n((H) => {
                        const G = Y._3 && !E._3 ? R(E._1, E._2, !0) : E;
                        return n((W) => Dn(
                          G,
                          n,
                          e,
                          r,
                          (Q, j) => n((q) => o(G._3 && !Q._3 ? R(Q._1, Q._2, !0) : Q, b(l, S)))
                        ));
                      })
                    ));
                  })
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), WT = (t, n, e, r, o) => n((i) => bn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => Dn(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(($, m, y, N, T) => {
          const w = $._1, k = $._2;
          return m((L) => Kr("->")(
            R(w, k, !1),
            m,
            y,
            (P, D) => {
              const V = P._3;
              return m((X) => V ? N(P, D) : Kr("<-")($, m, y, N, T));
            },
            T
          ));
        })("'->' or '<-'"), p = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = p._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((w) => Dn(
              T,
              n,
              e,
              r,
              (k, L) => n((P) => {
                const D = Ct(bn)("target node identifier"), V = T._3 && !k._3 ? R(k._1, k._2, !0) : k;
                return n((X) => D(
                  V,
                  n,
                  e,
                  r,
                  (I, B) => n((nt) => {
                    const ut = ce((F, E, S, H, G) => {
                      const W = F._3;
                      return E((Q) => E((j) => Dn(
                        F,
                        E,
                        S,
                        (q, O) => H(R(q._1, q._2, W), O),
                        (q, O) => E((rt) => E((Z) => {
                          const ot = F._3 && !q._3 ? R(q._1, q._2, !0) : q;
                          return BT(
                            ot,
                            E,
                            S,
                            (tt, ct) => H(R(tt._1, tt._2, W), ct),
                            (tt, ct) => E((lt) => G(ot._3 && !tt._3 ? R(tt._1, tt._2, !0) : tt, ct))
                          );
                        }))
                      )));
                    }), Y = V._3 && !I._3 ? R(I._1, I._2, !0) : I;
                    return n((F) => ut(
                      Y,
                      n,
                      e,
                      r,
                      (E, S) => n((H) => (() => {
                        if (y === "<-") {
                          const W = ze(
                            "Token",
                            { from: B, to: u, labels: z(Fc)(Et(Xt.foldr, S)) }
                          );
                          return (Q, j, q, O, rt) => rt(Q, W);
                        }
                        const G = ze(
                          "Token",
                          { from: u, to: B, labels: z(Fc)(Et(Xt.foldr, S)) }
                        );
                        return (W, Q, j, q, O) => O(W, G);
                      })()(Y._3 && !E._3 ? R(E._1, E._2, !0) : E, n, e, r, o))
                    ));
                  })
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), DT = (t, n, e, r, o) => n((i) => Bo(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = ce(Bo), g = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => {
        const p = k_(Mi(u) + Nr(Et(
          Xt.foldr,
          l
        )));
        return (() => {
          if (p.tag === "Just") {
            const $ = p._1;
            return (m, y, N, T, w) => w(m, $);
          }
          if (p.tag === "Nothing")
            return ($, m, y, N, T) => T($, 0);
          f();
        })()(g._3 && !d._3 ? R(d._1, d._2, !0) : d, n, e, r, o);
      })
    ));
  })
)), Vo = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Kr(t)(
    n,
    e,
    r,
    (c, a) => o(R(c._1, c._2, s), a),
    (c, a) => e((g) => {
      const _ = Jc((() => {
        const l = Ct(Mt((p) => p === "_"))("'_'"), h = Ct(Mt((p) => p === "-"))("'-'");
        return (p, $, m, y, N) => {
          const T = p._1, w = p._2;
          return $((k) => Di(
            R(T, w, !1),
            $,
            m,
            (L, P) => {
              const D = L._3;
              return $((V) => {
                if (D)
                  return y(L, P);
                const X = p._1, I = p._2;
                return $((B) => Bo(
                  R(X, I, !1),
                  $,
                  m,
                  (nt, ut) => {
                    const Y = nt._3;
                    return $((F) => {
                      if (Y)
                        return y(nt, ut);
                      const E = p._1, S = p._2;
                      return $((H) => l(
                        R(E, S, !1),
                        $,
                        m,
                        (G, W) => {
                          const Q = G._3;
                          return $((j) => Q ? y(G, W) : h(p, $, m, y, N));
                        },
                        N
                      ));
                    });
                  },
                  N
                ));
              });
            },
            N
          ));
        };
      })()), d = n._3 && !c._3 ? R(c._1, c._2, !0) : c;
      return e((l) => _(
        d,
        e,
        r,
        (h, p) => o(R(h._1, h._2, s), p),
        (h, p) => e(($) => {
          const m = d._3 && !h._3 ? R(h._1, h._2, !0) : h;
          return e((y) => te(
            m,
            e,
            r,
            (N, T) => o(R(N._1, N._2, s), T),
            (N, T) => e((w) => i(m._3 && !N._3 ? R(N._1, N._2, !0) : N, t))
          ));
        })
      ));
    })
  ));
}, HT = (t, n, e, r, o) => n((i) => ge(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => Vo("via")(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n((p) => bn(
          h,
          n,
          e,
          r,
          ($, m) => n((y) => {
            const N = h._3 && !$._3 ? R($._1, $._2, !0) : $;
            return n((T) => ge(
              N,
              n,
              e,
              r,
              (w, k) => n((L) => {
                const P = N._3 && !w._3 ? R(w._1, w._2, !0) : w;
                return n((D) => bn(
                  P,
                  n,
                  e,
                  r,
                  (V, X) => n((I) => o(P._3 && !V._3 ? R(V._1, V._2, !0) : V, { from: m, to: X }))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), er = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Kr(t)(
    n,
    e,
    r,
    (c, a) => o(R(c._1, c._2, s), a),
    (c, a) => e((g) => {
      const _ = Jc((() => {
        const l = Ct(Mt((p) => p === "_"))("'_'"), h = Ct(Mt((p) => p === "-"))("'-'");
        return (p, $, m, y, N) => {
          const T = p._1, w = p._2;
          return $((k) => Di(
            R(T, w, !1),
            $,
            m,
            (L, P) => {
              const D = L._3;
              return $((V) => {
                if (D)
                  return y(L, P);
                const X = p._1, I = p._2;
                return $((B) => Bo(
                  R(X, I, !1),
                  $,
                  m,
                  (nt, ut) => {
                    const Y = nt._3;
                    return $((F) => {
                      if (Y)
                        return y(nt, ut);
                      const E = p._1, S = p._2;
                      return $((H) => l(
                        R(E, S, !1),
                        $,
                        m,
                        (G, W) => {
                          const Q = G._3;
                          return $((j) => Q ? y(G, W) : h(p, $, m, y, N));
                        },
                        N
                      ));
                    });
                  },
                  N
                ));
              });
            },
            N
          ));
        };
      })()), d = n._3 && !c._3 ? R(c._1, c._2, !0) : c;
      return e((l) => _(
        d,
        e,
        r,
        (h, p) => o(R(h._1, h._2, s), p),
        (h, p) => e(($) => i(d._3 && !h._3 ? R(h._1, h._2, !0) : h, void 0))
      ));
    })
  ));
}, OT = (t, n, e, r, o) => n((i) => er("+edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => ge(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(bn)("source node identifier"), p = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = p._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((w) => ge(
              T,
              n,
              e,
              r,
              (k, L) => n((P) => {
                const D = Ct(bn)("target node identifier"), V = T._3 && !k._3 ? R(k._1, k._2, !0) : k;
                return n((X) => D(
                  V,
                  n,
                  e,
                  r,
                  (I, B) => n((nt) => o(
                    V._3 && !I._3 ? R(I._1, I._2, !0) : I,
                    ze("AddEdge", { from: y, to: B })
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), zT = (t, n, e, r, o) => n((i) => er("-edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => ge(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(bn)("source node identifier"), p = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = p._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((w) => ge(
              T,
              n,
              e,
              r,
              (k, L) => n((P) => {
                const D = Ct(bn)("target node identifier"), V = T._3 && !k._3 ? R(k._1, k._2, !0) : k;
                return n((X) => D(
                  V,
                  n,
                  e,
                  r,
                  (I, B) => n((nt) => o(
                    V._3 && !I._3 ? R(I._1, I._2, !0) : I,
                    ze("DelEdge", { from: y, to: B })
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), qT = (t, n, e, r, o) => n((i) => er("-node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => ge(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(bn)("node identifier"), p = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = ce((k, L, P, D, V) => {
              const X = k._3;
              return HT(k, L, P, (I, B) => D(R(I._1, I._2, X), B), V);
            }), w = p._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((k) => T(
              w,
              n,
              e,
              r,
              (L, P) => n((D) => o(
                w._3 && !L._3 ? R(L._1, L._2, !0) : L,
                ze("DelNode", { id: y, via: Et(Xt.foldr, P) })
              ))
            ));
          })
        ));
      })
    ));
  })
)), YT = (t, n, e, r, o) => n((i) => er("enter")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => ge(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(bn)("node identifier"), p = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => o(
            p._3 && !m._3 ? R(m._1, m._2, !0) : m,
            ze("Enter", { id: y })
          ))
        ));
      })
    ));
  })
)), XT = (t, n, e, r, o) => n((i) => er("exit")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => o(t._3 && !s._3 ? R(s._1, s._2, !0) : s, zJ))
)), VT = (t, n, e, r, o) => n((i) => er("~edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => ge(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(bn)("source node identifier"), p = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = p._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((w) => ge(
              T,
              n,
              e,
              r,
              (k, L) => n((P) => {
                const D = Ct(bn)("target node identifier"), V = T._3 && !k._3 ? R(k._1, k._2, !0) : k;
                return n((X) => D(
                  V,
                  n,
                  e,
                  r,
                  (I, B) => n((nt) => {
                    const ut = V._3 && !I._3 ? R(I._1, I._2, !0) : I;
                    return n((Y) => te(
                      ut,
                      n,
                      e,
                      r,
                      (F, E) => n((S) => {
                        const H = Ct(Kr("->"))("'->'"), G = ut._3 && !F._3 ? R(F._1, F._2, !0) : F;
                        return n((W) => H(
                          G,
                          n,
                          e,
                          r,
                          (Q, j) => n((q) => {
                            const O = G._3 && !Q._3 ? R(Q._1, Q._2, !0) : Q;
                            return n((rt) => te(
                              O,
                              n,
                              e,
                              r,
                              (Z, ot) => n((tt) => {
                                const ct = Ct(bn)("new source node identifier"), lt = O._3 && !Z._3 ? R(Z._1, Z._2, !0) : Z;
                                return n((Wt) => ct(
                                  lt,
                                  n,
                                  e,
                                  r,
                                  (vt, Bt) => n((pt) => {
                                    const Jt = lt._3 && !vt._3 ? R(vt._1, vt._2, !0) : vt;
                                    return n(($t) => ge(
                                      Jt,
                                      n,
                                      e,
                                      r,
                                      (mt, K) => n((M) => {
                                        const gt = Ct(bn)("new target node identifier"), _t = Jt._3 && !mt._3 ? R(mt._1, mt._2, !0) : mt;
                                        return n((xt) => gt(
                                          _t,
                                          n,
                                          e,
                                          r,
                                          (Nt, jt) => n((Ln) => o(
                                            _t._3 && !Nt._3 ? R(Nt._1, Nt._2, !0) : Nt,
                                            ze("RepointEdge", { from: y, to: B, newFrom: Bt, newTo: jt })
                                          ))
                                        ));
                                      })
                                    ));
                                  })
                                ));
                              })
                            ));
                          })
                        ));
                      })
                    ));
                  })
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), UT = (t, n, e, r, o) => n((i) => er("seed")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => Dn(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(DT)("integer (seed value)"), p = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = p._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((w) => te(
              T,
              n,
              e,
              r,
              (k, L) => n((P) => o(T._3 && !k._3 ? R(k._1, k._2, !0) : k, y))
            ));
          })
        ));
      })
    ));
  })
)), Uo = /* @__PURE__ */ LT(/* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (c, a) => e((g) => e((_) => {
      const d = n._3 && !c._3 ? R(c._1, c._2, !0) : c;
      return te(d, e, r, o, (l, h) => e((p) => i(d._3 && !l._3 ? R(l._1, l._2, !0) : l, h)));
    }))
  )));
})())(/* @__PURE__ */ Ct(/* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => te(
    n,
    e,
    r,
    o,
    (c, a) => e((g) => e((_) => {
      const d = n._3 && !c._3 ? R(c._1, c._2, !0) : c;
      return t(d, e, r, o, (l, h) => e((p) => i(d._3 && !l._3 ? R(l._1, l._2, !0) : l, h)));
    }))
  )));
})())("closing '}'")), KT = /* @__PURE__ */ Uo((t, n, e, r, o) => n((i) => {
  const s = (a, g) => n((_) => (() => {
    if (g.tag === "Nothing")
      return (d, l, h, p, $) => $(d, A);
    if (g.tag === "Just") {
      const d = g._1, l = ce((() => {
        const h = Ct(Mt((p) => p === ","))("','");
        return (p, $, m, y, N) => {
          const T = p._3;
          return $((w) => $((k) => $((L) => $((P) => $((D) => $((V) => Dn(
            p,
            $,
            m,
            (X, I) => y(R(X._1, X._2, T), I),
            (X, I) => $((B) => $((nt) => {
              const ut = p._3 && !X._3 ? R(X._1, X._2, !0) : X;
              return h(
                ut,
                $,
                m,
                (Y, F) => y(R(Y._1, Y._2, T), F),
                (Y, F) => $((E) => {
                  const S = ut._3 && !Y._3 ? R(Y._1, Y._2, !0) : Y;
                  return $((H) => $((G) => {
                    const W = p._3 && !S._3 ? R(S._1, S._2, !0) : S;
                    return Dn(
                      W,
                      $,
                      m,
                      (Q, j) => y(R(Q._1, Q._2, T), j),
                      (Q, j) => $((q) => {
                        const O = W._3 && !Q._3 ? R(Q._1, Q._2, !0) : Q;
                        return $((rt) => $((Z) => {
                          const ot = p._3 && !O._3 ? R(O._1, O._2, !0) : O;
                          return af(
                            ot,
                            $,
                            m,
                            (tt, ct) => y(R(tt._1, tt._2, T), ct),
                            (tt, ct) => $((lt) => N(ot._3 && !tt._3 ? R(tt._1, tt._2, !0) : tt, ct))
                          );
                        }));
                      })
                    );
                  }));
                })
              );
            }))
          )))))));
        };
      })());
      return (h, p, $, m, y) => p((N) => l(
        h,
        p,
        $,
        m,
        (T, w) => p((k) => y(
          h._3 && !T._3 ? R(T._1, T._2, !0) : T,
          PT([d, ...Et(Xt.foldr, w)])
        ))
      ));
    }
    f();
  })()(t._3 && !a._3 ? R(a._1, a._2, !0) : a, n, e, r, o)), u = t._1, c = t._2;
  return n((a) => n((g) => af(
    R(u, c, !1),
    n,
    e,
    (_, d) => n((l) => s(t, J)),
    (_, d) => n((l) => s(_, v("Just", d)))
  )));
})), MT = (t, n, e, r, o) => n((i) => er("+node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => ge(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(bn)("node identifier"), p = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = p._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((w) => n((k) => Dn(
              T,
              n,
              e,
              r,
              (L, P) => n((D) => {
                const V = Mt((I) => I === `
` || I === "\r" || I === "#" || I === "}" || I === "{"), X = T._3 && !L._3 ? R(L._1, L._2, !0) : L;
                return n((I) => {
                  const B = (Y, F) => n((E) => (F ? ((S, H, G, W, Q) => Q(S, "")) : RT)(
                    X._3 && !Y._3 ? R(Y._1, Y._2, !0) : Y,
                    n,
                    e,
                    r,
                    (S, H) => n((G) => {
                      const W = T._3 && !S._3 ? R(S._1, S._2, !0) : S;
                      return n((Q) => {
                        const j = (rt, Z) => n((ot) => o(
                          W._3 && !rt._3 ? R(rt._1, rt._2, !0) : rt,
                          ze(
                            "AddNode",
                            {
                              id: y,
                              label: H,
                              shape: (() => {
                                const tt = GT("shape")(Z);
                                if (tt.tag === "Just")
                                  return tt._1 === "rectangle" || tt._1 === "rect" ? Ae : tt._1 === "cylinder" || tt._1 === "cyl" ? Ic : tt._1 === "parallelogram" ? S1 : tt._1 === "diamond" ? C1 : tt._1 === "ellipse" ? P1 : tt._1 === "document" || tt._1 === "doc" ? Ac : tt._1 === "cloud" ? G1 : Ae;
                                if (tt.tag === "Nothing")
                                  return Ae;
                                f();
                              })()
                            }
                          )
                        )), q = W._1, O = W._2;
                        return n((rt) => {
                          const Z = (ot, tt) => {
                            const ct = ot._3;
                            return n((lt) => ct ? r(ot, tt) : j(W, A));
                          };
                          return n((ot) => n((tt) => Dn(
                            R(q, O, !1),
                            n,
                            e,
                            (ct, lt) => Z(R(ct._1, ct._2, !1), lt),
                            (ct, lt) => n((Wt) => n((vt) => KT(
                              ct,
                              n,
                              e,
                              (Bt, pt) => Z(R(Bt._1, Bt._2, !1), pt),
                              (Bt, pt) => n((Jt) => j(ct._3 && !Bt._3 ? R(Bt._1, Bt._2, !0) : Bt, pt))
                            )))
                          )));
                        });
                      });
                    })
                  )), nt = X._1, ut = X._2;
                  return n((Y) => {
                    const F = (E, S) => {
                      const H = E._3;
                      return n((G) => H ? r(E, S) : B(X, !1));
                    };
                    return n((E) => n((S) => n((H) => Tc(
                      R(nt, ut, !1),
                      n,
                      e,
                      (G, W) => {
                        const Q = G._3;
                        return n((j) => Q ? F(R(nt, ut, !1), W) : n((q) => V(
                          R(nt, ut, !1),
                          n,
                          e,
                          (O, rt) => F(R(nt, ut, !1), rt),
                          (O, rt) => n((Z) => n((ot) => B(R(nt, ut, !1), !0)))
                        )));
                      },
                      (G, W) => n((Q) => n((j) => B(R(nt, ut, !1), !0)))
                    ))));
                  });
                });
              })
            )));
          })
        ));
      })
    ));
  })
)), jT = (t, n, e, r, o) => n((i) => hl(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Ct(ml([MT, qT, VT, OT, zT, YT, XT, WT]))("statement (+node, -node, +edge, -edge, ~edge, enter, exit, or 'a -> b')"), g = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => o(
        g._3 && !d._3 ? R(d._1, d._2, !0) : d,
        xc("Leaf", { op: l, line: u.line, column: u.column })
      ))
    ));
  })
)), ZT = (t, n, e, r, o) => n((i) => Vo("seq")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => Uo(kc(gl))(
    t._3 && !s._3 ? R(s._1, s._2, !0) : s,
    n,
    e,
    r,
    o
  ))
)), tv = (t, n, e, r, o) => n((i) => Vo("par")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => Uo(kc(qJ))(
    t._3 && !s._3 ? R(s._1, s._2, !0) : s,
    n,
    e,
    r,
    o
  ))
)), kc = (t) => {
  const n = ce(nv());
  return (e, r, o, i, s) => r((u) => n(
    e,
    r,
    o,
    i,
    (c, a) => r((g) => s(
      e._3 && !c._3 ? R(c._1, c._2, !0) : c,
      t(Et(Xt.foldr, a))
    ))
  ));
}, nv = /* @__PURE__ */ _f(() => {
  const t = Jc(Ct(Mt((n) => n === "}"))("'}'"));
  return (n, e, r, o, i) => e((s) => {
    const u = n._3;
    return e((c) => e((a) => te(
      n,
      e,
      r,
      (g, _) => o(R(g._1, g._2, u), _),
      (g, _) => e((d) => e((l) => {
        const h = n._3 && !g._3 ? R(g._1, g._2, !0) : g;
        return t(
          h,
          e,
          r,
          (p, $) => o(R(p._1, p._2, u), $),
          (p, $) => e((m) => {
            const y = h._3 && !p._3 ? R(p._1, p._2, !0) : p;
            return e((N) => {
              const T = ml([
                (k, L, P, D, V) => {
                  const X = k._3;
                  return tv(k, L, P, (I, B) => D(R(I._1, I._2, X), B), V);
                },
                (k, L, P, D, V) => {
                  const X = k._3;
                  return ZT(k, L, P, (I, B) => D(R(I._1, I._2, X), B), V);
                },
                jT
              ]), w = n._3 && !y._3 ? R(y._1, y._2, !0) : y;
              return e((k) => T(
                w,
                e,
                r,
                o,
                (L, P) => e((D) => {
                  const V = w._3 && !L._3 ? R(L._1, L._2, !0) : L;
                  return e((X) => Dn(
                    V,
                    e,
                    r,
                    o,
                    (I, B) => e((nt) => {
                      const ut = V._3 && !I._3 ? R(I._1, I._2, !0) : I;
                      return e((Y) => IT(
                        ut,
                        e,
                        r,
                        o,
                        (F, E) => e((S) => i(ut._3 && !F._3 ? R(F._1, F._2, !0) : F, P))
                      ));
                    })
                  ));
                })
              ));
            });
          })
        );
      }))
    )));
  });
}), ev = (t, n, e, r, o) => n((i) => Vo("frame")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => QT(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n((p) => te(
          h,
          n,
          e,
          r,
          ($, m) => n((y) => {
            const N = Uo(kc(gl)), T = h._3 && !$._3 ? R($._1, $._2, !0) : $;
            return n((w) => N(
              T,
              n,
              e,
              r,
              (k, L) => n((P) => {
                const D = T._3 && !k._3 ? R(k._1, k._2, !0) : k;
                return n((V) => te(
                  D,
                  n,
                  e,
                  r,
                  (X, I) => n((B) => o(
                    D._3 && !X._3 ? R(X._1, X._2, !0) : X,
                    { name: v("Just", d), ops: L }
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), rv = (t, n, e, r, o) => n((i) => Vo("inside")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Ct(bn)("node identifier"), g = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => {
        const p = g._3 && !d._3 ? R(d._1, d._2, !0) : d;
        return n(($) => te(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = p._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((w) => Uo(xl)(
              T,
              n,
              e,
              r,
              (k, L) => n((P) => {
                const D = T._3 && !k._3 ? R(k._1, k._2, !0) : k;
                return n((V) => te(
                  D,
                  n,
                  e,
                  r,
                  (X, I) => n((B) => o(D._3 && !X._3 ? R(X._1, X._2, !0) : X, { node: l, doc: L }))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), xl = (t, n, e, r, o) => n((i) => {
  const s = (a, g) => n((_) => {
    const d = ce(ov()), l = t._3 && !a._3 ? R(a._1, a._2, !0) : a;
    return n((h) => d(
      l,
      n,
      e,
      r,
      (p, $) => n((m) => {
        const y = Et(Xt.foldr, $);
        return o(
          l._3 && !p._3 ? R(p._1, p._2, !0) : p,
          {
            seed: (() => {
              if (g.tag === "Nothing")
                return 0;
              if (g.tag === "Just")
                return g._1;
              f();
            })(),
            frames: yt((N) => {
              if (N.tag === "TopFrame")
                return v("Just", N._1);
              if (N.tag === "TopInside")
                return J;
              f();
            })(y),
            interiors: yt((N) => {
              if (N.tag === "TopInside")
                return v("Just", N._1);
              if (N.tag === "TopFrame")
                return J;
              f();
            })(y)
          }
        );
      })
    ));
  }), u = t._1, c = t._2;
  return n((a) => n((g) => UT(
    R(u, c, !1),
    n,
    e,
    (_, d) => {
      const l = _._3;
      return n((h) => l ? r(_, d) : s(t, J));
    },
    (_, d) => n((l) => s(_, v("Just", d)))
  )));
}), ov = /* @__PURE__ */ _f(() => hT.defer((t) => (n, e, r, o, i) => {
  const s = n._1, u = n._2;
  return e((c) => e((a) => rv(
    R(s, u, !1),
    e,
    r,
    (g, _) => e((d) => e((l) => ev(n, e, r, o, (h, p) => e(($) => i(h, cf("TopFrame", p)))))),
    (g, _) => e((d) => i(g, cf("TopInside", _)))
  )));
})), iv = /* @__PURE__ */ (() => {
  const t = Ct((n, e, r, o, i) => e((s) => e((u) => te(
    n,
    e,
    r,
    o,
    (c, a) => e((g) => e((_) => {
      const d = n._3 && !c._3 ? R(c._1, c._2, !0) : c;
      return Tc(
        d,
        e,
        r,
        o,
        (l, h) => e((p) => i(d._3 && !l._3 ? R(l._1, l._2, !0) : l, h))
      );
    }))
  ))))("'frame', 'inside', or end of input");
  return (n, e, r, o, i) => e((s) => e((u) => e((c) => e((a) => te(
    n,
    e,
    r,
    o,
    (g, _) => e((d) => e((l) => {
      const h = n._3 && !g._3 ? R(g._1, g._2, !0) : g;
      return xl(
        h,
        e,
        r,
        o,
        (p, $) => e((m) => {
          const y = h._3 && !p._3 ? R(p._1, p._2, !0) : p;
          return e((N) => e((T) => {
            const w = n._3 && !y._3 ? R(y._1, y._2, !0) : y;
            return t(
              w,
              e,
              r,
              o,
              (k, L) => e((P) => i(w._3 && !k._3 ? R(k._1, k._2, !0) : k, $))
            );
          }));
        })
      );
    }))
  )))));
})(), sv = (t) => {
  const n = NT(t)(iv);
  if (n.tag === "Left")
    return St("Left", { msg: n._1._1, line: n._1._2.line, column: n._1._2.column });
  if (n.tag === "Right")
    return St("Right", n._1);
  f();
}, uv = (t) => {
  const n = sv(t);
  if (n.tag === "Left")
    return St("Left", n._1.msg);
  if (n.tag === "Right")
    return St("Right", n._1);
  f();
};
function cv(t, n, e, r) {
  if (typeof window < "u") {
    var o = window[e];
    if (o != null && r instanceof o)
      return n(r);
  }
  for (var i = r; i != null; ) {
    var s = Object.getPrototypeOf(i), u = s.constructor.name;
    if (u === e)
      return n(r);
    if (u === "Object")
      return t;
    i = s;
  }
  return t;
}
function ci(t) {
  return function(n) {
    return function(e) {
      return function() {
        e.setAttribute(t, n);
      };
    };
  };
}
const av = function() {
  return window;
};
function fv(t) {
  return function(n) {
    return function() {
      return n.requestAnimationFrame(t);
    };
  };
}
const gv = (t) => t, lv = (t) => () => t.clientWidth || 0, _v = () => window.devicePixelRatio || 1, dv = (t, n) => {
  n.innerHTML = t;
}, Hs = (t, n, e) => {
  t.style.setProperty(n, e);
}, hv = (t) => (n) => t === n, Jl = (t) => t, Tl = (t, n, e) => ({ tag: t, _1: n, _2: e }), vl = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, pv = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, $v = /* @__PURE__ */ Tl("AutoSize"), ff = /* @__PURE__ */ Jl("CanvasRenderer"), mv = /* @__PURE__ */ Jl("SvgRenderer"), yv = (t) => (n) => {
  const e = t - n * et($n(ye(t / n)));
  return n <= 0 ? 0 : e < 0 ? e + n : e;
}, Nv = (t) => x((n) => (e) => {
  const r = t(e);
  return () => (n(), r());
})(() => {
}), wl = () => Q_() / 1e3, Os = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
  const g = jn(s.layout), _ = R1(s.layout), d = { center: { x: _.x + _.w / 2, y: g.y + g.h / 2 }, zoom: ju(s.layout)(g)(0) }, l = Vu(s.layout)(d), h = () => {
    const N = wl(), T = c.value;
    return c.value = N, T === 0 ? 0 : N - T;
  }, p = cp(s)(vl(a)(s.totalDuration)), $ = i ? p : { ...p, levels: z((N) => ({ ...N, state: { ...N.state, frameTitle: "" } }))(p.levels) }, m = s.dives.length === 0 && (l.w + 48) * 1.0909090909090908 <= 1100 && (l.h + 48) * 1.0909090909090908 <= 1400, y = m ? { ...$, camera: d, levels: z((N) => ({ ...N, state: { ...N.state, camera: d } }))($.levels) } : $;
  if (n === "CanvasRenderer")
    return () => {
      const N = h(), T = gv(t), w = Ur({ padding: 8, outputAspect: J })(y), k = (() => {
        if (e.tag === "FixedSize")
          return { w: e._1, h: e._2 };
        if (e.tag === "AutoSize") {
          if (m)
            return { w: w.vw * 1.0909090909090908, h: w.vh * 1.0909090909090908 };
          const F = lv(t)();
          return { w: F, h: w.vw <= 0 ? F : F * w.vh / w.vw };
        }
        f();
      })(), L = _v(), P = k.w * L, D = k.h * L, V = D_(T)(), X = H_(T)(), I = O_(T)(P);
      V !== P && I();
      const B = z_(T)(D);
      if (X !== D && B(), Hs(t, "height", un($n(ur(k.h))) + "px"), e.tag === "FixedSize")
        Hs(t, "width", un($n(ur(k.w))) + "px");
      else if (e.tag === "AutoSize") {
        const F = un($n(ur(k.w))) + "px";
        m && Hs(t, "width", F);
      } else
        f();
      const nt = W_(T)();
      ir(nt)(), di(nt)({ scaleX: L, scaleY: L })();
      const ut = u.value, Y = $J(r)(o)(nt)({ width: k.w, height: k.h })(y)(N)(ut)();
      return u.value = Y, sr(nt)();
    };
  if (n === "SvgRenderer")
    return () => {
      const N = h(), T = u.value, w = RJ((() => {
        if (e.tag === "AutoSize")
          return J;
        if (e.tag === "FixedSize")
          return e._1 <= 0 || e._2 <= 0 ? J : v("Just", e._1 / e._2);
        f();
      })())(r)(o)(y)(N)(T);
      return u.value = w.springs, ci("viewBox")(w.parts.viewBox)(t)(), ci("preserveAspectRatio")("xMidYMid meet")(t)(), e.tag === "FixedSize" ? (ci("width")(un($n(ur(e._1))))(t)(), ci("height")(un($n(ur(e._2))))(t)()) : e.tag === "AutoSize" || f(), dv(w.parts.body, t);
    };
  f();
}, xv = (t) => {
  const n = uv(t);
  if (n.tag === "Left")
    return St("Left", n._1);
  if (n.tag === "Right") {
    const e = _l(n._1)(ll)._1;
    if (e.tag === "Left")
      return St("Left", e._1.msg);
    if (e.tag === "Right")
      return St("Right", e._1);
  }
  f();
}, zs = (t) => (n) => {
  const e = Ut((r) => r.startT <= n && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return e._1.scene._1.to;
    if (e._1.scene.tag === "DataFlow")
      return e._1.scene._1.keyframe;
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode")
      return "";
    f();
  }
  if (e.tag === "Nothing") {
    const r = t.spans.length - 1 | 0;
    if (r >= 0 && r < t.spans.length) {
      if (t.spans[r].scene.tag === "Structural")
        return t.spans[r].scene._1.to;
      if (t.spans[r].scene.tag === "DataFlow")
        return t.spans[r].scene._1.keyframe;
      if (t.spans[r].scene.tag === "EnterNode" || t.spans[r].scene.tag === "ExitNode")
        return "";
      f();
    }
    return "";
  }
  f();
}, Jv = { ...hd, tokenZoomFloor: 1, minZoom: 1.6, maxZoom: 3.2 }, Tv = (t) => (n) => (e) => (r) => (o) => (i) => (s) => () => {
  let u = 1, c = !0, a = !1, g = 0, _ = 0;
  const d = { value: A }, l = { value: 0 };
  let h = !1, p = [];
  Os(t)(e)(r)(o)(i)(s)(n)(d)(l)(0)();
  const $ = (k) => () => {
    const L = p, P = c, D = { time: k, keyframe: zs(n)(k), playing: P };
    return Nv((V) => V(D))(L)();
  }, m = () => (c = !1, $(g)()), y = () => {
    if (!h && (a = !1, c)) {
      const P = wl(), D = _;
      _ = P;
      const V = u, X = g, I = yv(D === 0 ? X + 0 * V : X + (P - D) * V)(n.totalDuration + 0.8);
      return g = I, Os(t)(e)(r)(o)(i)(s)(n)(d)(l)(I)(), $(I)(), N();
    }
  }, N = () => {
    if (!h && !a) {
      a = !0;
      const P = av();
      fv(y)(P)();
    }
  }, T = () => (_ = 0, c = !0, N()), w = () => (c || T(), $(g)());
  return T(), {
    play: w,
    pause: m,
    toggle: () => c ? m() : w(),
    seek: (k) => {
      const L = pv(0)(vl(n.totalDuration)(k));
      return () => (g = L, _ = 0, Os(t)(e)(r)(o)(i)(s)(n)(d)(l)(L)(), $(L)());
    },
    setSpeed: (k) => () => u = k,
    currentTime: () => g,
    currentKeyframe: () => {
      const k = g;
      return zs(n)(k);
    },
    isPlaying: () => c,
    duration: n.totalDuration,
    subscribe: (k) => () => {
      p = Qt(p)(k);
      const P = g, D = c;
      k({ time: P, keyframe: zs(n)(P), playing: D })();
      const V = Lf((X) => !hv(X)(k));
      return () => {
        p = V(p);
      };
    },
    destroy: () => h = !0
  };
}, vv = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = xv(n);
  if (u.tag === "Left")
    return () => St("Left", u._1);
  if (u.tag === "Right") {
    const c = u._1, a = ag(c);
    return () => {
      const g = a(), _ = fg(c)(), d = Nh(Jv)(ah)(c)(gg(g)(_)(c));
      if (d.tag === "Left")
        return St("Left", "precompute failed");
      if (d.tag === "Right") {
        const l = Tv(t)(d._1)(e)(r)(o)(i)(s)();
        return St("Right", l);
      }
      f();
    };
  }
  f();
}, gf = In.createElement;
In.Fragment;
function bc(t) {
  return (n) => Array.isArray(n.children) ? gf.apply(null, [t, n].concat(n.children)) : gf(t, n);
}
function wv(t) {
  return (n) => {
    const e = (r, o) => {
      var i = null;
      r._data != null && (i = { _data: void 0 }, Object.entries(r._data).forEach(function(u) {
        i["data-" + u[0]] = u[1];
      }));
      var s = null;
      return r._aria != null && (s = { _aria: void 0 }, Object.entries(r._aria).forEach(function(u) {
        s["aria-" + u[0]] = u[1];
      })), Object.assign({ ref: o }, r, i, s);
    };
    return () => {
      const r = In.forwardRef(
        (o, i) => t(n)(e(o, i))
      );
      return r.displayName = n, r;
    };
  };
}
const kl = /* @__PURE__ */ wv(bc), kv = /* @__PURE__ */ kl("canvas")(), bv = (t, n) => {
  const e = In.useRef(n);
  return e.current !== n && !t(e.current, n) && (e.current = n), e.current;
};
In.memo;
In.memo;
function lf(t, n) {
  const [e, r] = In.useState(
    typeof n == "function" ? () => n : n
  );
  return r.hasOwnProperty("$$reactBasicHooks$$cachedSetState") || (r.$$reactBasicHooks$$cachedSetState = (o) => () => r(o)), t(e, r.$$reactBasicHooks$$cachedSetState);
}
function bl(t, n, e) {
  const r = bv(t, n);
  In.useEffect(e, [r]);
}
const Lv = In.useRef;
function Ev(t) {
  return t.current;
}
In.useContext;
In.useDebugValue;
In.useId;
In.useDeferredValue;
In.useSyncExternalStore;
In.useSyncExternalStore;
function Sv(t, n) {
  return n.displayName = t, n.toString = () => t, n;
}
In.useEffectEvent || In.experimental_useEffectEvent;
const Cv = (t) => (n) => (e) => () => bl((r, o) => t.eq(r)(o), n, e), Pv = /* @__PURE__ */ N1(Ev), Gv = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, Iv = (t) => {
  const n = {
    apply: (e) => (r) => () => {
      const o = e(), i = r();
      return o(i);
    },
    Functor0: () => Gv
  };
  return { pure: (e) => () => e, Apply0: () => n };
}, Av = /* @__PURE__ */ Cv({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), to = /* @__PURE__ */ Hi(qi)(Cl), bu = Iv().pure, Fv = /* @__PURE__ */ bc(kv), Rv = {
  eq: (t) => (n) => (t.renderer === "CanvasRenderer" ? n.renderer === "CanvasRenderer" : t.renderer === "SvgRenderer" && n.renderer === "SvgRenderer") && (t.sizing.tag === "AutoSize" ? n.sizing.tag === "AutoSize" : t.sizing.tag === "FixedSize" && n.sizing.tag === "FixedSize" && t.sizing._1 === n.sizing._1 && t.sizing._2 === n.sizing._2) && t.source === n.source && (t.theme === "Light" ? n.theme === "Light" : t.theme === "Dark" ? n.theme === "Dark" : t.theme === "Blueprint" ? n.theme === "Blueprint" : t.theme === "Whiteboard" ? n.theme === "Whiteboard" : t.theme === "Isometric" && n.theme === "Isometric") && (t.transparency === "PaintBackground" ? n.transparency === "PaintBackground" : t.transparency === "TransparentBackground" && n.transparency === "TransparentBackground")
}, Bv = /* @__PURE__ */ kl("svg")(), Ll = (t) => (n) => {
  const e = or(n.theme, J, qt), r = (() => {
    if (e.tag === "Nothing")
      return "light";
    if (e.tag === "Just")
      return e._1;
    f();
  })(), o = or(n.renderer, J, qt), i = (() => {
    if (o.tag === "Nothing")
      return "canvas";
    if (o.tag === "Just")
      return o._1;
    f();
  })(), s = r === "light" ? v("Just", ef) : r === "dark" ? v("Just", mJ) : r === "blueprint" ? v("Just", yJ) : r === "whiteboard" ? v("Just", NJ) : r === "isometric" ? v("Just", xJ) : J, u = i === "svg" ? v("Just", mv) : i === "canvas" ? v("Just", ff) : J, c = {
    source: t,
    renderer: (() => {
      if (u.tag === "Nothing")
        return ff;
      if (u.tag === "Just")
        return u._1;
      f();
    })(),
    sizing: (() => {
      const a = or(n.width, J, qt);
      if (a.tag === "Just") {
        const g = or(n.height, J, qt);
        if (g.tag === "Just")
          return Tl("FixedSize", a._1, g._1);
      }
      return $v;
    })(),
    theme: (() => {
      if (s.tag === "Nothing")
        return ef;
      if (s.tag === "Just")
        return s._1;
      f();
    })(),
    transparency: (() => {
      const a = or(n.transparent, J, qt);
      if (a.tag === "Nothing")
        return !1;
      if (a.tag === "Just")
        return a._1;
      f();
    })() ? TJ : JJ
  };
  return () => {
    const a = Lv(Pl), g = lf((h, p) => b(h, p), J), _ = g._1, d = lf((h, p) => b(h, p), { time: 0, keyframe: "", playing: !1 });
    Av(b(i, r))((() => {
      const h = Lc("[markgraf] unknown renderer " + qs(i) + ", defaulting to canvas"), p = (() => {
        if (u.tag === "Nothing")
          return !0;
        if (u.tag === "Just")
          return !1;
        f();
      })() ? h : () => {
      };
      return () => {
        p();
        const $ = Lc("[markgraf] unknown theme " + qs(r) + ", defaulting to light");
        return (() => {
          if (s.tag === "Nothing")
            return !0;
          if (s.tag === "Just")
            return !1;
          f();
        })() && $(), () => {
        };
      };
    })())();
    const l = Pv(a);
    return bl(
      (h, p) => Rv.eq(h)(p),
      c,
      () => {
        const h = l(), p = or(h, J, qt), $ = (() => {
          if (p.tag === "Just")
            return cv(J, qt, "Element", p._1);
          if (p.tag === "Nothing")
            return J;
          f();
        })();
        if ($.tag === "Nothing")
          return () => {
          };
        if ($.tag === "Just") {
          const m = vv($._1)(c.source)(c.renderer)(c.sizing)(c.theme)(c.transparency)(!0)();
          if (m.tag === "Left")
            return Fl("[markgraf] " + m._1)(), () => {
            };
          if (m.tag === "Right") {
            const y = m._1;
            g._2((T) => v("Just", y))();
            const N = y.subscribe((T) => d._2((w) => T))();
            return () => (N(), y.destroy(), g._2((T) => J)());
          }
        }
        f();
      }
    ), bu({
      elementRef: a,
      time: d._1.time,
      keyframe: d._1.keyframe,
      playing: d._1.playing,
      duration: _.tag === "Just" ? _._1.duration : 0,
      ready: (() => {
        if (_.tag === "Nothing")
          return !1;
        if (_.tag === "Just")
          return !0;
        f();
      })(),
      play: to((h) => h.play)(_),
      pause: to((h) => h.pause)(_),
      toggle: to((h) => h.toggle)(_),
      seek: (h) => to((p) => p.seek(h))(_),
      setSpeed: (h) => to((p) => p.setSpeed(h))(_)
    })();
  };
}, Qv = /* @__PURE__ */ Sv(
  "MarkgrafPlayer",
  (t) => {
    const n = Ll(t.src)({ renderer: t.renderer, width: t.width, height: t.height, theme: t.theme, transparent: t.transparent })(), e = or(t.renderer, J, qt);
    return (() => {
      if (e.tag === "Nothing")
        return "canvas";
      if (e.tag === "Just")
        return e._1;
      f();
    })() === "svg" ? bu(bc(Bv)({ className: "markgraf-player", ref: n.elementRef }))() : bu(Fv({ className: "markgraf-player", ref: n.elementRef }))();
  }
), Dv = (t, n) => Ll(t)(n ?? {}), Hv = Qv;
export {
  Hv as MarkgrafPlayer,
  Dv as useMarkgraf
};
