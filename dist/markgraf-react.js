import Fn from "react";
function pf(t) {
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
function Fe(t, n) {
  return n > 0 ? Math.floor(t / n) : n < 0 ? -Math.floor(t / -n) : 0;
}
const Cn = (t) => (n) => t, q = function(t) {
  return function(n) {
    for (var e = n.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = t(n[o]);
    return r;
  };
}, Gl = { map: q }, $f = (t) => t, sn = function(t) {
  return t.toString();
}, mf = function(t) {
  var n = t.toString();
  return isNaN(n + ".0") ? n : n + ".0";
}, ou = function(t) {
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
}, Fu = (t) => t, Jn = /* @__PURE__ */ Fu("LT"), Tn = /* @__PURE__ */ Fu("GT"), An = /* @__PURE__ */ Fu("EQ"), v = (t, n) => ({ tag: t, _1: n }), x = /* @__PURE__ */ v("Nothing"), Yt = (t) => v("Just", t), yf = (t) => {
  if (t.tag === "Nothing")
    return !0;
  if (t.tag === "Just")
    return !1;
  f();
}, Nf = (t) => {
  if (t.tag === "Nothing")
    return !1;
  if (t.tag === "Just")
    return !0;
  f();
}, mo = function(t) {
  return function(n) {
    return function(e) {
      for (var r = n, o = e.length, i = o - 1; i >= 0; i--)
        r = t(e[i])(r);
      return r;
    };
  };
}, J = function(t) {
  return function(n) {
    return function(e) {
      for (var r = n, o = e.length, i = 0; i < o; i++)
        r = t(r)(e[i]);
      return r;
    };
  };
}, ts = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldr((o) => {
    const i = r(o);
    return (s) => n.apply(n.Functor0().map((u) => $f)(i))(s);
  })(t.pure());
}, xf = (t) => {
  const n = ts(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, Il = {
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
}, Ot = {
  foldr: mo,
  foldl: J,
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => Ot.foldr((r) => (o) => t.Semigroup0().append(e(r))(o))(n);
  }
}, Fl = null;
function Ve(t, n, e) {
  return t == null ? n : e(t);
}
const k = (t, n) => ({ tag: "Tuple", _1: t, _2: n }), qe = (t) => (n) => k(t, n), ns = (t) => t._2, es = (t) => t._1, Bl = function(t) {
  return function() {
    return t;
  };
}, Rl = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return rs.pure(e(r))();
  },
  Functor0: () => Ql
}, rs = { pure: Bl, Apply0: () => Rl }, Ql = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, Wl = function(t) {
  return function() {
    console.log(t);
  };
}, Fc = function(t) {
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
}, Pt = (t, n) => ({ tag: t, _1: n }), Hl = (t) => Pt("Right", t), Dl = {
  map: (t) => (n) => {
    if (n.tag === "Left")
      return Pt("Left", n._1);
    if (n.tag === "Right")
      return Pt("Right", t(n._1));
    f();
  }
}, Jf = {
  apply: (t) => (n) => {
    if (t.tag === "Left")
      return Pt("Left", t._1);
    if (t.tag === "Right") {
      if (n.tag === "Left")
        return Pt("Left", n._1);
      if (n.tag === "Right")
        return Pt("Right", t._1(n._1));
    }
    f();
  },
  Functor0: () => Dl
}, Ol = {
  bind: (t) => {
    if (t.tag === "Left") {
      const n = t._1;
      return (e) => Pt("Left", n);
    }
    if (t.tag === "Right") {
      const n = t._1;
      return (e) => e(n);
    }
    f();
  },
  Apply0: () => Jf
}, ql = { pure: Hl, Apply0: () => Jf }, Tf = { Applicative0: () => ql, Bind1: () => Ol }, zl = (t) => t, Yl = { map: (t) => (n) => t(n) }, vf = { apply: (t) => (n) => t(n), Functor0: () => Yl }, Xl = { bind: (t) => (n) => n(t), Apply0: () => vf }, Vl = { pure: zl, Apply0: () => vf }, or = { Applicative0: () => Vl, Bind1: () => Xl }, fo = (t, n) => ({ tag: t, _1: n }), wf = (t) => fo("Loop", t), Ul = {
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
  Monad0: () => or
}, Kl = function(t) {
  return function(n) {
    return function() {
      return t(n());
    };
  };
}, Ml = function(t) {
  return function() {
    return t;
  };
}, jl = { map: Kl }, Zl = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return bf.pure(e(r))();
  },
  Functor0: () => jl
}, bf = { pure: Ml, Apply0: () => Zl }, t1 = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, n1 = function(t, n) {
  return n.push(t);
}, e1 = /* @__PURE__ */ t1(n1), r1 = (t, n) => ({ tag: "Iterator", _1: t, _2: n }), o1 = (t) => (n) => (e) => () => {
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
}, i1 = (t) => (n) => () => {
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
}, Bt = function(t) {
  return function(n) {
    for (var e = n.length, r = Array(e), o = 0; o < e; o++)
      r[o] = t(o)(n[o]);
    return r;
  };
};
var Bu = function(t) {
  return function(n) {
    return t === n;
  };
};
const s1 = Bu, u1 = Bu, Do = Bu, Ru = function(t) {
  return function(n) {
    return function(e) {
      if (n.length !== e.length) return !1;
      for (var r = 0; r < n.length; r++)
        if (!t(n[r])(e[r])) return !1;
      return !0;
    };
  };
}, pe = { eq: Do }, c1 = { eq: u1 }, zr = { eq: s1 };
var Qu = function(t) {
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
const a1 = Qu, f1 = Qu, g1 = Qu, A = { compare: /* @__PURE__ */ g1(Jn)(An)(Tn), Eq0: () => pe }, ct = { compare: /* @__PURE__ */ f1(Jn)(An)(Tn), Eq0: () => c1 }, ot = { compare: /* @__PURE__ */ a1(Jn)(An)(Tn), Eq0: () => zr }, l1 = function(t) {
  return t;
}, _1 = /* @__PURE__ */ (function() {
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
})(), d1 = (t) => t, wr = {
  traverse: (t) => {
    const n = t.Apply0();
    return _1(n.apply)(n.Functor0().map)(t.pure);
  },
  sequence: (t) => wr.traverse(t)(d1),
  Functor0: () => Gl,
  Foldable1: () => Ot
}, Ft = function(t, n) {
  for (var e = t > n ? -1 : 1, r = new Array(e * (n - t) + 1), o = t, i = 0; o !== n; )
    r[i++] = o, o += e;
  return r[i] = o, r;
};
var h1 = function(t, n) {
  if (t < 1)
    return [];
  var e = new Array(t);
  return e.fill(n);
}, p1 = function(t, n) {
  for (var e = [], r = 0, o = 0; o < t; o++)
    e[r++] = n;
  return e;
};
const $1 = typeof Array.prototype.fill == "function" ? h1 : p1, St = /* @__PURE__ */ (function() {
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
})(), Wt = function(t, n, e) {
  return e.length === 0 ? t({}) : n(e[0])(e.slice(1));
}, kf = function(t, n, e, r) {
  for (var o = 0; o < r.length; o++) {
    var i = e(r[o]);
    if (n(i)) return i;
  }
  return t;
}, Nr = function(t, n, e, r) {
  for (var o = 0, i = r.length; o < i; o++)
    if (e(r[o])) return t(o);
  return n;
}, Lf = function(t, n, e, r) {
  for (var o = r.length - 1; o >= 0; o--)
    if (e(r[o])) return t(o);
  return n;
}, Ef = function(t, n, e, r, o) {
  if (e < 0 || e > o.length) return n;
  var i = o.slice();
  return i.splice(e, 0, r), t(i);
}, Sf = function(t, n, e, r) {
  if (e < 0 || e >= r.length) return n;
  var o = r.slice();
  return o.splice(e, 1), t(o);
}, ir = function(t, n, e, r, o) {
  if (e < 0 || e >= o.length) return n;
  var i = o.slice();
  return i[e] = r, t(i);
}, wn = function(t) {
  return t.slice().reverse();
}, Xn = function(t) {
  if (t.length <= 1e4)
    return Array.prototype.concat.apply([], t);
  for (var n = [], e = 0, r = t.length; e < r; e++)
    for (var o = t[e], i = 0, s = o.length; i < s; i++)
      n.push(o[i]);
  return n;
}, ft = function(t, n) {
  return n.filter(t);
}, m1 = function(t, n, e) {
  for (var r = e.length, o = n, i = new Array(r), s = 0; s < r; s++)
    o = t(o)(e[s]), i[s] = o;
  return i;
}, y1 = /* @__PURE__ */ (function() {
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
})(), Lt = function(t, n, e) {
  return e.slice(t, n);
}, bn = function(t, n, e) {
  for (var r = n.length < e.length ? n.length : e.length, o = new Array(r), i = 0; i < r; i++)
    o[i] = t(n[i])(e[i]);
  return o;
}, Vn = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (t(n[r])) return !0;
  return !1;
}, Cf = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (!t(n[r])) return !1;
  return !0;
}, Et = (t) => (n) => y1(
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
), N1 = (t) => (n) => Et((e) => (r) => t.compare(n(e))(n(r))), Qt = (t) => (n) => (() => {
  const e = e1(n);
  return () => {
    const r = [...t];
    return e(r)(), r;
  };
})()(), xr = (t) => {
  if (t.length === 0)
    return t.length - 1 | 0, x;
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? v("Just", { init: Lt(0, t.length - 1 | 0, t), last: t[n] }) : x;
}, x1 = (t) => (n) => (e) => t >= 0 && t < e.length ? ir(Yt, x, t, n(e[t]), e) : x, hr = (t) => (n) => {
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
      s = !1, u = x;
    }
    return u;
  })(0);
  if (r.tag === "Just")
    return r._1 === 0 ? { init: [], rest: n } : { init: Lt(0, r._1, n), rest: Lt(r._1, n.length, n) };
  if (r.tag === "Nothing")
    return { init: n, rest: [] };
  f();
}, Yr = (t) => (n) => {
  const e = Et((r) => (o) => t(r._2)(o._2))(Bt(qe)(n));
  return 0 < e.length ? q(ns)(N1(ot)(es)((() => {
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
}, J1 = (t) => (n) => {
  const e = [], o = r1(
    (i) => i >= 0 && i < n.length ? v("Just", n[i]) : x,
    { value: 0 }
  );
  return i1(o)((i) => () => {
    const s = [];
    s.push(i), o1(t(i))(o)(s)(), e.push(s);
  })(), e;
}, Mt = (t) => (n) => {
  const e = Nr(Yt, x, t, n);
  return e.tag === "Just" ? v("Just", n[e._1]) : x;
}, Pf = (t) => (n) => ft(t, n), Yn = (t) => (n) => (e) => {
  const r = Nr(Yt, x, (o) => t.eq(o)(n), e);
  if (r.tag === "Nothing")
    return !1;
  if (r.tag === "Just")
    return !0;
  f();
}, Af = (t) => (n) => Tt(n)(t), yt = (t) => Af((n) => {
  const e = t(n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [e._1];
  f();
}), T1 = isFinite, sr = Math.abs, v1 = Math.acos, pr = function(t) {
  return function(n) {
    return Math.atan2(t, n);
  };
}, os = Math.ceil, ue = Math.cos, is = Math.exp, Te = Math.floor, Bc = Math.log, w1 = function(t) {
  return function(n) {
    return Math.min(t, n);
  };
}, iu = function(t) {
  return function(n) {
    return Math.pow(t, n);
  };
}, Me = Math.round, Zn = Math.sin, Sn = Math.sqrt, b1 = Math.tan, k1 = function(t) {
  return function(n) {
    return function(e) {
      return (e | 0) === e ? t(e) : n;
    };
  };
}, rt = function(t) {
  return t;
}, L1 = function(t) {
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
}, E1 = /* @__PURE__ */ L1(Yt)(x), S1 = /* @__PURE__ */ E1(10), Gf = /* @__PURE__ */ k1(Yt)(x), $n = (t) => {
  if (!T1(t))
    return 0;
  if (t >= rt(2147483647))
    return 2147483647;
  if (t <= rt(-2147483648))
    return -2147483648;
  const n = Gf(t);
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return n._1;
  f();
}, Xt = (t, n, e) => ({ tag: t, _1: n, _2: e }), Vt = /* @__PURE__ */ Xt("Nil"), Ut = {
  foldr: (t) => (n) => {
    const e = Ut.foldl((i) => (s) => t(s)(i))(n), o = ((i) => (s) => {
      let u = i, c = s, a = !0, g;
      for (; a; ) {
        const _ = u, d = c;
        if (d.tag === "Nil") {
          a = !1, g = _;
          continue;
        }
        if (d.tag === "Cons") {
          u = Xt("Cons", d._1, _), c = d._2;
          continue;
        }
        f();
      }
      return g;
    })(Vt);
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
    return (e) => Ut.foldl((r) => {
      const o = t.Semigroup0().append(r);
      return (i) => o(e(i));
    })(n);
  }
}, C1 = function(t) {
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
}, P1 = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, A1 = { unfoldr1: /* @__PURE__ */ C1(yf)(P1)(es)(ns) }, G1 = function(t) {
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
}, I1 = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, oe = {
  unfoldr: /* @__PURE__ */ G1(yf)(I1)(es)(ns),
  Unfoldable10: () => A1
}, zt = (t, n, e, r, o, i, s) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s }), te = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), ni = (t, n, e) => ({ tag: "Split", _1: t, _2: n, _3: e }), Rc = (t, n, e) => ({ tag: "SplitLast", _1: t, _2: n, _3: e }), I = /* @__PURE__ */ zt("Leaf"), Ee = /* @__PURE__ */ te("IterLeaf"), gn = (t, n, e, r) => {
  if (e.tag === "Leaf") {
    if (r.tag === "Leaf")
      return zt("Node", 1, 1, t, n, e, r);
    if (r.tag === "Node")
      return zt("Node", 1 + r._1 | 0, 1 + r._2 | 0, t, n, e, r);
    f();
  }
  if (e.tag === "Node") {
    if (r.tag === "Leaf")
      return zt("Node", 1 + e._1 | 0, 1 + e._2 | 0, t, n, e, r);
    if (r.tag === "Node")
      return zt("Node", e._1 > r._1 ? 1 + e._1 | 0 : 1 + r._1 | 0, (1 + e._2 | 0) + r._2 | 0, t, n, e, r);
  }
  f();
}, Un = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r.tag === "Leaf" ? zt("Node", 1, 1, t, n, I, I) : r.tag === "Node" && r._1 > 1 ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      f();
    })() ? gn(r._5._3, r._5._4, gn(t, n, e, r._5._5), gn(r._3, r._4, r._5._6, r._6)) : gn(r._3, r._4, gn(t, n, e, r._5), r._6) : gn(t, n, e, r);
  if (e.tag === "Node")
    return r.tag === "Node" ? r._1 > (e._1 + 1 | 0) ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      f();
    })() ? gn(r._5._3, r._5._4, gn(t, n, e, r._5._5), gn(r._3, r._4, r._5._6, r._6)) : gn(r._3, r._4, gn(t, n, e, r._5), r._6) : e._1 > (r._1 + 1 | 0) ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      f();
    })() ? gn(e._6._3, e._6._4, gn(e._3, e._4, e._5, e._6._5), gn(t, n, e._6._6, r)) : gn(e._3, e._4, e._5, gn(t, n, e._6, r)) : gn(t, n, e, r) : r.tag === "Leaf" && e._1 > 1 ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      f();
    })() ? gn(e._6._3, e._6._4, gn(e._3, e._4, e._5, e._6._5), gn(t, n, e._6._6, r)) : gn(e._3, e._4, e._5, gn(t, n, e._6, r)) : gn(t, n, e, r);
  f();
}, Xr = (t, n, e) => {
  if (e.tag === "Leaf")
    return ni(x, I, I);
  if (e.tag === "Node") {
    const r = t(n)(e._3);
    if (r === "LT") {
      const o = Xr(t, n, e._5);
      return ni(o._1, o._2, Un(e._3, e._4, o._3, e._6));
    }
    if (r === "GT") {
      const o = Xr(t, n, e._6);
      return ni(o._1, Un(e._3, e._4, e._5, o._2), o._3);
    }
    if (r === "EQ")
      return ni(v("Just", e._4), e._5, e._6);
  }
  f();
}, If = (t, n, e, r) => {
  if (r.tag === "Leaf")
    return Rc(t, n, e);
  if (r.tag === "Node") {
    const o = If(r._3, r._4, r._5, r._6);
    return Rc(o._1, o._2, Un(t, n, e, o._3));
  }
  f();
}, Oo = (t, n) => {
  if (t.tag === "Leaf")
    return n;
  if (t.tag === "Node") {
    const e = If(t._3, t._4, t._5, t._6);
    return Un(e._1, e._2, e._3, n);
  }
  f();
}, Be = (t, n, e) => {
  if (n.tag === "Leaf")
    return I;
  if (e.tag === "Leaf")
    return n;
  if (e.tag === "Node") {
    const r = Xr(t, e._3, n);
    return Oo(Be(t, r._2, e._5), Be(t, r._3, e._6));
  }
  f();
}, Ni = (t, n, e, r) => {
  if (e.tag === "Leaf" || r.tag === "Leaf")
    return I;
  if (r.tag === "Node") {
    const o = Xr(t, r._3, e), i = Ni(t, n, o._2, r._5), s = Ni(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return Un(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return Oo(i, s);
  }
  f();
}, Pn = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r;
  if (r.tag === "Leaf")
    return e;
  if (r.tag === "Node") {
    const o = Xr(t, r._3, e), i = Pn(t, n, o._2, r._5), s = Pn(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return Un(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return Un(r._3, r._4, i, s);
  }
  f();
}, F1 = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return I;
    if (r.tag === "Node") {
      const o = n(r._3)(r._4);
      if (o.tag === "Just")
        return Un(r._3, o._1, e(r._5), e(r._6));
      if (o.tag === "Nothing")
        return Oo(e(r._5), e(r._6));
    }
    f();
  };
  return e;
}, B1 = (t) => (n) => (r) => {
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
          const $ = _, p = d;
          if (p.tag === "Leaf") {
            l = !1, h = $;
            continue;
          }
          if (p.tag === "Node") {
            if (p._6.tag === "Leaf") {
              _ = te("IterEmit", p._3, p._4, $), d = p._5;
              continue;
            }
            _ = te("IterEmit", p._3, p._4, te("IterNode", p._6, $)), d = p._5;
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
}, Se = /* @__PURE__ */ B1((t, n, e) => v("Just", k(k(t, n), e)))((t) => x), kt = (t) => (n) => (e) => (r) => {
  const o = (i) => {
    if (i.tag === "Leaf")
      return zt("Node", 1, 1, e, r, I, I);
    if (i.tag === "Node") {
      const s = t.compare(e)(i._3);
      if (s === "LT")
        return Un(i._3, i._4, o(i._5), i._6);
      if (s === "GT")
        return Un(i._3, i._4, i._5, o(i._6));
      if (s === "EQ")
        return zt("Node", i._1, i._2, e, n(i._4)(r), i._5, i._6);
    }
    f();
  };
  return o;
}, U = (t) => (n) => (e) => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return zt("Node", 1, 1, n, e, I, I);
    if (o.tag === "Node") {
      const i = t.compare(n)(o._3);
      if (i === "LT")
        return Un(o._3, o._4, r(o._5), o._6);
      if (i === "GT")
        return Un(o._3, o._4, o._5, r(o._6));
      if (i === "EQ")
        return zt("Node", o._1, o._2, n, e, o._5, o._6);
    }
    f();
  };
  return r;
}, en = (t) => (n) => n.foldl((e) => (r) => U(t)(r._1)(r._2)(e))(I), yo = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return I;
    if (r.tag === "Node") {
      const o = t.compare(n)(r._3);
      if (o === "LT")
        return Un(r._3, r._4, e(r._5), r._6);
      if (o === "GT")
        return Un(r._3, r._4, r._5, e(r._6));
      if (o === "EQ")
        return Oo(r._5, r._6);
    }
    f();
  };
  return e;
}, Ff = (t) => {
  const n = t.compare;
  return (e) => (r) => (o) => {
    const i = Xr(n, r, o), s = e(i._1);
    if (s.tag === "Nothing")
      return Oo(i._2, i._3);
    if (s.tag === "Just")
      return Un(r, s._1, i._2, i._3);
    f();
  };
}, cn = function(t) {
  return function(n) {
    return t + n | 0;
  };
}, Vr = function(t) {
  return function(n) {
    return t + n;
  };
}, tr = function(t) {
  return function(n) {
    if (n === 0) return 0;
    var e = Math.abs(n);
    return (t % e + e) % e;
  };
}, un = function(t) {
  return function(n) {
    return t.length === 0 ? n : n.length === 0 ? t : t.concat(n);
  };
}, R1 = { append: un }, Q1 = { mempty: [], Semigroup0: () => R1 };
function Wu(t) {
  return function(n) {
    return function(e) {
      return t.apply(e, [n]);
    };
  };
}
const W1 = Wu(Number.prototype.toPrecision), H1 = Wu(Number.prototype.toFixed), D1 = Wu(Number.prototype.toExponential), Bf = (t, n) => ({ tag: t, _1: n }), Rf = (t) => (n) => (e) => {
  const r = ot.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ot.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, Qf = (t) => {
  if (t.tag === "Precision")
    return W1(t._1);
  if (t.tag === "Fixed")
    return H1(t._1);
  if (t.tag === "Exponential")
    return D1(t._1);
  f();
};
function O1() {
  return Date.now();
}
function q1(t) {
  return function() {
    return t.getContext("2d");
  };
}
function z1(t) {
  return function() {
    return t.width;
  };
}
function Y1(t) {
  return function() {
    return t.height;
  };
}
function X1(t) {
  return function(n) {
    return function() {
      t.width = n;
    };
  };
}
function V1(t) {
  return function(n) {
    return function() {
      t.height = n;
    };
  };
}
function Hu(t) {
  return function(n) {
    return function() {
      t.lineWidth = n;
    };
  };
}
function U1(t) {
  return function(n) {
    return function() {
      t.fillStyle = n;
    };
  };
}
function K1(t) {
  return function(n) {
    return function() {
      t.strokeStyle = n;
    };
  };
}
function Ps(t) {
  return function(n) {
    return function() {
      t.lineCap = n;
    };
  };
}
function As(t) {
  return function(n) {
    return function() {
      t.lineJoin = n;
    };
  };
}
function M1(t) {
  return function(n) {
    return function() {
      t.globalCompositeOperation = n;
    };
  };
}
function j1(t) {
  return function(n) {
    return function() {
      t.globalAlpha = n;
    };
  };
}
function Wf(t) {
  return function() {
    t.beginPath();
  };
}
function Du(t) {
  return function() {
    t.stroke();
  };
}
function Ou(t) {
  return function() {
    t.fill();
  };
}
function Z1(t) {
  return function() {
    t.clip();
  };
}
function io(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.lineTo(n, e);
      };
    };
  };
}
function Hf(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.moveTo(n, e);
      };
    };
  };
}
function Df(t) {
  return function() {
    t.closePath();
  };
}
function t_(t) {
  return function(n) {
    return function() {
      t.fillRect(n.x, n.y, n.width, n.height);
    };
  };
}
function n_(t) {
  return function(n) {
    return function() {
      t.clearRect(n.x, n.y, n.width, n.height);
    };
  };
}
function xi(t) {
  return function(n) {
    return function() {
      t.scale(n.scaleX, n.scaleY);
    };
  };
}
function su(t) {
  return function(n) {
    return function() {
      t.translate(n.translateX, n.translateY);
    };
  };
}
function e_(t) {
  return function(n) {
    return function() {
      t.transform(n.a, n.b, n.c, n.d, n.e, n.f);
    };
  };
}
function r_(t) {
  return function(n) {
    return function() {
      t.textAlign = n;
    };
  };
}
function o_(t) {
  return function(n) {
    return function() {
      t.textBaseline = n;
    };
  };
}
function i_(t) {
  return function(n) {
    return function() {
      t.font = n;
    };
  };
}
function s_(t) {
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
function Ue(t) {
  return function() {
    t.save();
  };
}
function Ke(t) {
  return function() {
    t.restore();
  };
}
function so(t) {
  return function(n) {
    return function() {
      t.quadraticCurveTo(n.cpx, n.cpy, n.x, n.y);
    };
  };
}
function u_(t) {
  return function(n) {
    return function() {
      t.bezierCurveTo(n.cp1x, n.cp1y, n.cp2x, n.cp2y, n.x, n.y);
    };
  };
}
const Of = (t) => t, qu = (t) => t, zu = (t) => t, Yu = (t) => t, ss = (t) => t, c_ = /* @__PURE__ */ ss("BaselineTop"), a_ = /* @__PURE__ */ ss("BaselineMiddle"), f_ = /* @__PURE__ */ ss("BaselineAlphabetic"), g_ = /* @__PURE__ */ ss("BaselineBottom"), l_ = /* @__PURE__ */ Yu("AlignLeft"), __ = /* @__PURE__ */ Yu("AlignRight"), d_ = /* @__PURE__ */ Yu("AlignCenter"), Xu = /* @__PURE__ */ zu("BevelJoin"), us = /* @__PURE__ */ zu("RoundJoin"), Vu = /* @__PURE__ */ zu("MiterJoin"), Uu = /* @__PURE__ */ qu("Round"), Ku = /* @__PURE__ */ qu("Square"), Mu = /* @__PURE__ */ qu("Butt"), h_ = /* @__PURE__ */ Of("SourceOver"), p_ = /* @__PURE__ */ Of("Difference"), $_ = (t) => (n) => o_(t)((() => {
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
})()), m_ = (t) => (n) => r_(t)((() => {
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
})()), cs = (t) => (n) => {
  if (n === "BevelJoin")
    return As(t)("bevel");
  if (n === "RoundJoin")
    return As(t)("round");
  if (n === "MiterJoin")
    return As(t)("miter");
  f();
}, ju = (t) => (n) => {
  if (n === "Round")
    return Ps(t)("round");
  if (n === "Square")
    return Ps(t)("square");
  if (n === "Butt")
    return Ps(t)("butt");
  f();
}, Qc = (t) => (n) => M1(t)((() => {
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
    const e = Ut.foldr(t)(n);
    return (r) => e((() => {
      const o = (i, s) => {
        if (i.tag === "Leaf")
          return s;
        if (i.tag === "Node")
          return o(i._5, Xt("Cons", i._3, o(i._6, s)));
        f();
      };
      return o(r, Vt);
    })());
  }
}, y_ = (t) => {
  const n = {
    append: (() => {
      const e = t.compare;
      return (r) => (o) => Pn(e, Cn, r, o);
    })()
  };
  return { mempty: I, Semigroup0: () => n };
}, go = function(t) {
  return function(n) {
    if (t >= 0 && t < n.length) return n.charAt(t);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
}, br = function(t) {
  return t.join("");
}, kr = function(t) {
  return t.split("");
}, as = function(t) {
  return t;
}, ur = function(t) {
  return t.length;
}, Wc = function(t) {
  return function(n) {
    return n.substr(0, t);
  };
}, No = function(t) {
  return function(n) {
    return n.substring(t);
  };
}, N_ = function(t) {
  return function(n) {
    return { before: n.substring(0, t), after: n.substring(t) };
  };
}, x_ = (t) => (n) => {
  const e = N_(ur(t))(n);
  return e.before === t ? v("Just", e.after) : x;
}, J_ = function(t) {
  var n = null;
  return function() {
    return t === void 0 || (n = t(), t = void 0), n;
  };
}, T_ = function(t) {
  return t();
}, v_ = function(n) {
  return function(e) {
    return function() {
      return n(e);
    };
  };
}, w_ = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, b_ = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, Jr = (t) => BigInt(t), k_ = (t) => Number(t), pi = (t) => (n) => t + n, $i = (t) => (n) => t * n, uu = (t) => (n) => t - n, qf = 0n, Ji = 1n, zf = (t) => (n) => t ^ n, xo = (t) => (n) => t & n, Zu = (t) => (n) => t << n, cu = (t) => (n) => t >> n, L_ = (t) => (n) => t == n, E_ = (t) => (n) => t === n ? 0 : t > n ? 1 : -1, S_ = { eq: L_ }, Hc = {
  compare: (t) => (n) => {
    const e = E_(t)(n);
    return e === 1 ? Tn : e === 0 ? An : Jn;
  },
  Eq0: () => S_
}, C_ = /* @__PURE__ */ w_(Yt)(x), P_ = /* @__PURE__ */ b_(Yt)(x), Yf = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = ct.compare(n._1)(e._1);
      return r === "LT" ? Jn : r === "GT" ? Tn : ct.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), A_ = (t) => (n) => sr(t._1 - n._1) + sr(t._2 - n._2), Lr = (t) => t, fs = (t) => t, dn = /* @__PURE__ */ fs("North"), hn = /* @__PURE__ */ fs("South"), Ae = /* @__PURE__ */ fs("East"), Ge = /* @__PURE__ */ fs("West"), Re = /* @__PURE__ */ Lr("Rectangle"), Dc = /* @__PURE__ */ Lr("Cylinder"), G_ = /* @__PURE__ */ Lr("Parallelogram"), I_ = /* @__PURE__ */ Lr("Diamond"), F_ = /* @__PURE__ */ Lr("Ellipse"), Oc = /* @__PURE__ */ Lr("Document"), B_ = /* @__PURE__ */ Lr("Cloud"), qc = (t) => t, Xf = /* @__PURE__ */ J(Vr)(0), R_ = (t) => (n) => (e) => {
  const r = ct.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ct.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, de = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ur = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, zc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Vf = (t) => {
  const n = { top: 0, bottom: 0, left: 0, right: 0 }, e = t.shape === "Cloud" ? { ...n, top: t.h * 0.38 } : t.shape === "Cylinder" ? { ...n, bottom: 5 } : t.shape === "Document" ? { ...n, bottom: t.h * 0.05 } : n;
  return [{ x: t.x - e.left, y: t.y - e.top }, { x: t.x + t.w + e.right, y: t.y + t.h + e.bottom }];
}, Tr = (t) => (n) => {
  const e = bn(
    (s) => (u) => ({
      a: s,
      b: u,
      len: (() => {
        const c = u.y - s.y, a = u.x - s.x;
        return Sn(a * a + c * c);
      })()
    }),
    t,
    Lt(1, t.length, t)
  ), r = Xf(q((s) => s.len)(e)), o = R_(0)(r)(n * r), i = (s) => (u) => (c) => {
    let a = s, g = u, _ = c, d = !0, l;
    for (; d; ) {
      const h = a, $ = g, p = _, m = Wt((y) => x, (y) => (N) => v("Just", { head: y, tail: N }), h);
      if (m.tag === "Nothing") {
        const y = t.length - 1 | 0;
        if (y >= 0 && y < t.length) {
          d = !1, l = t[y];
          continue;
        }
        d = !1, l = p;
        continue;
      }
      if (m.tag === "Just") {
        if ($ <= m._1.head.len) {
          const y = m._1.head.len <= 0 ? 0 : $ / m._1.head.len;
          d = !1, l = { x: m._1.head.a.x + (m._1.head.b.x - m._1.head.a.x) * y, y: m._1.head.a.y + (m._1.head.b.y - m._1.head.a.y) * y };
          continue;
        }
        a = m._1.tail, g = $ - m._1.head.len, _ = p;
        continue;
      }
      f();
    }
    return l;
  };
  return 0 < t.length ? v("Just", i(e)(o)(t[0])) : x;
}, qo = (t) => Xf(bn(
  (n) => (e) => {
    const r = e.y - n.y, o = e.x - n.x;
    return Sn(o * o + r * r);
  },
  t,
  Lt(1, t.length, t)
)), Q_ = (t) => (n) => (e) => (r) => (o) => {
  const i = 0 < t.length ? v("Just", t[0]) : x, s = (() => {
    if (i.tag === "Nothing")
      return n;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = t.length - 1 | 0, c = u >= 0 && u < t.length ? v("Just", t[u]) : x, a = (() => {
    if (c.tag === "Nothing")
      return e;
    if (c.tag === "Just")
      return c._1;
    f();
  })(), g = de(0.05)(1 - o.pre - o.post), _ = r < o.pre ? 0 : r > 1 - o.post ? 1 : (r - o.pre) / g, d = a.x - e.x, l = 2 * (() => {
    const T = a.y - e.y;
    return (d < 0 ? -d : d) + (T < 0 ? -T : T);
  })(), h = s.x - n.x, $ = 2 * (() => {
    const T = s.y - n.y;
    return (h < 0 ? -h : h) + (T < 0 ? -T : T);
  })(), p = $ + qo(t) + l, m = p <= 1e-4 ? 1 : 1 - l / p, y = p <= 1e-4 ? 0 : $ / p;
  if (_ <= y) {
    const T = y <= 1e-4 ? 1 : _ / y;
    return { x: n.x + (s.x - n.x) * T, y: n.y + (s.y - n.y) * T };
  }
  if (_ >= m) {
    const T = m >= 1 ? 0 : (_ - m) / (1 - m);
    return { x: a.x + (e.x - a.x) * T, y: a.y + (e.y - a.y) * T };
  }
  const N = Tr(t)((_ - y) / de(1e-4)(m - y));
  if (N.tag === "Nothing")
    return s;
  if (N.tag === "Just")
    return N._1;
  f();
}, W_ = (t) => {
  const n = (r, o) => {
    if (r.tag === "Leaf")
      return o;
    if (r.tag === "Node")
      return n(r._5, Xt("Cons", r._4, n(r._6, o)));
    f();
  }, e = Wt(
    (r) => x,
    (r) => (o) => v("Just", { head: r, tail: o }),
    Tt(St(Ut.foldr, n(t.nodes, Vt)))(Vf)
  );
  if (e.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (e.tag === "Just") {
    const r = J((o) => (i) => ({ minX: Ur(o.minX)(i.x), minY: Ur(o.minY)(i.y), maxX: de(o.maxX)(i.x), maxY: de(o.maxY)(i.y) }))({
      minX: e._1.head.x,
      minY: e._1.head.y,
      maxX: e._1.head.x,
      maxY: e._1.head.y
    })(e._1.tail);
    return { x: r.minX, y: r.minY, w: r.maxX - r.minX, h: r.maxY - r.minY };
  }
  f();
}, H_ = (t) => (n) => {
  const e = de(4)(0.15 * Ur(n.w)(n.h)), r = de(1)(t.w), o = de(1)(t.h), i = de(1)(n.w - 2 * e), s = de(1)(n.h - 2 * e), u = Ur(i / r)(s / o);
  return { scale: u, tx: n.x + e + (i - r * u) / 2 - t.x * u, ty: n.y + e + (s - o * u) / 2 - t.y * u };
}, tc = { scale: 1, tx: 0, ty: 0 }, Kn = (t) => {
  const n = Wt(
    (e) => x,
    (e) => (r) => v("Just", { head: e, tail: r }),
    [
      ...(() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, Xt("Cons", r._4, e(r._6, o)));
          f();
        };
        return Tt(St(Ut.foldr, e(t.nodes, Vt)))(Vf);
      })(),
      ...Xn((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, Xt("Cons", r._4, e(r._6, o)));
          f();
        };
        return St(Ut.foldr, e(t.edges, Vt));
      })()),
      ...Xn((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, Xt("Cons", r._4, e(r._6, o)));
          f();
        };
        return St(Ut.foldr, e(t.chipExtras, Vt));
      })())
    ]
  );
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: Ur(r.minX)(o.x), minY: Ur(r.minY)(o.y), maxX: de(r.maxX)(o.x), maxY: de(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, D_ = (t) => (n) => ((r) => (o) => (i) => {
  let s = r, u = o, c = i, a = !0, g;
  for (; a; ) {
    const _ = s, d = u, l = c, h = Wt(($) => x, ($) => (p) => v("Just", { head: $, tail: p }), d);
    if (h.tag === "Nothing") {
      a = !1, g = l;
      continue;
    }
    if (h.tag === "Just") {
      const $ = zc(h._1.head)(_.interiors);
      if ($.tag === "Nothing") {
        a = !1, g = l;
        continue;
      }
      if ($.tag === "Just") {
        s = $._1, u = h._1.tail, c = (() => {
          const p = H_(Kn($._1.layout))((() => {
            const m = zc(h._1.head)(_.layout.nodes);
            if (m.tag === "Nothing")
              return { x: 0, y: 0, w: 1, h: 1, label: "", shape: Re };
            if (m.tag === "Just")
              return m._1;
            f();
          })());
          return { scale: l.scale * p.scale, tx: l.scale * p.tx + l.tx, ty: l.scale * p.ty + l.ty };
        })();
        continue;
      }
    }
    f();
  }
  return g;
})(t)(n)(tc), Uf = (t) => t, Yc = (t, n) => ({ tag: t, _1: n }), nc = (t) => t, zo = (t, n) => ({ tag: t, _1: n }), ec = (t, n) => ({ tag: t, _1: n }), Yo = /* @__PURE__ */ nc("Animated"), O_ = /* @__PURE__ */ nc("StaticStill"), q_ = /* @__PURE__ */ nc("TitleCard"), z_ = /* @__PURE__ */ ec("First"), Y_ = /* @__PURE__ */ Uf("Forward"), X_ = /* @__PURE__ */ Uf("Backward"), V_ = /* @__PURE__ */ zo("ExitNode"), Kf = /* @__PURE__ */ en(A)(Ot), U_ = (t) => mo((n) => (e) => ({
  nodes: Pn(A.compare, Cn, n.nodes, e.nodes),
  edges: Pn(A.compare, Cn, n.edges, e.edges)
}))({ nodes: I, edges: I })(t.keyframes), K_ = (t) => (n) => ({
  entering: {
    nodes: Be(A.compare, n.nodes, t.nodes),
    edges: Be(A.compare, n.edges, t.edges)
  },
  leaving: {
    nodes: Be(A.compare, t.nodes, n.nodes),
    edges: Be(A.compare, t.edges, n.edges)
  },
  surviving: {
    nodes: Ni(A.compare, Cn, t.nodes, n.nodes),
    edges: Ni(A.compare, Cn, t.edges, n.edges)
  }
}), Ti = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Kr = (t) => (n) => {
  const e = ct.compare(t)(n);
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
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, au = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, M_ = /* @__PURE__ */ J((t) => (n) => U(A)(n)()(t))(I), j_ = /* @__PURE__ */ J((t) => (n) => U(A)(n)()(t))(I), Z_ = /* @__PURE__ */ (() => {
  const t = oe.unfoldr(Se);
  return (n) => t(te("IterNode", n, Ee));
})(), Mf = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Xc = /* @__PURE__ */ en(A)(Ot), lo = (t) => {
  const n = Wt((e) => x, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: Ti(r.minX)(o.x), minY: Ti(r.minY)(o.y), maxX: Kr(r.maxX)(o.x), maxY: Kr(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, td = (t) => {
  const n = Wt((e) => x, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return x;
  if (n.tag === "Just")
    return v("Just", lo(t));
  f();
}, nd = (t) => (n) => (e) => M_(Tt(St(On.foldr, e))((r) => {
  const o = Jo(r)(t);
  if (o.tag === "Just")
    return ft((i) => !au(i)(n), [o._1.source, o._1.target]);
  if (o.tag === "Nothing")
    return [];
  f();
})), ed = (t) => t.kind.tag === "SendToken" ? v("Just", k(t.kind._1.edge, { source: t.kind._1.from, target: t.kind._1.to })) : x, rd = (t) => t.tag === "DataFlow" ? yt(ed)(t._1.events) : [], od = (t) => (n) => j_(yt((e) => au(e._2.source)(n) || au(e._2.target)(n) ? v("Just", e._1) : x)(Z_(t))), id = (t) => {
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? 0 < t.length ? t[0].x === t[n].x && t[0].y === t[n].y ? v("Just", lo([t[0]])) : v("Just", lo([t[0], t[n]])) : x : 0 < t.length ? v("Just", lo([t[0]])) : x;
}, vi = (t) => {
  const n = Wt((e) => x, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: Ti(r.minX)(o.x), minY: Ti(r.minY)(o.y), maxX: Kr(r.maxX)(o.x + o.w), maxY: Kr(r.maxY)(o.y + o.h) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x + n._1.head.w,
      maxY: n._1.head.y + n._1.head.h
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, jf = (t) => (n) => (e) => {
  if (e.tag === "Leaf")
    return Kn(t);
  const r = od(n)(e), o = [
    ...yt((i) => {
      const s = Mf(i)(t.nodes);
      return s.tag === "Just" ? v("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : x;
    })(St(
      On.foldr,
      Pn(A.compare, Cn, e, nd(n)(e)(r))
    )),
    ...yt((i) => {
      const s = Jo(i)(t.edges);
      return s.tag === "Just" ? v("Just", lo(s._1)) : x;
    })(St(On.foldr, r)),
    ...yt((i) => {
      const s = Jo(i)(t.chipExtras);
      if (s.tag === "Just")
        return td(s._1);
      if (s.tag === "Nothing")
        return x;
      f();
    })(St(On.foldr, r))
  ];
  return o.length === 0 ? Kn(t) : vi(o);
}, oo = (t) => (n) => (e) => {
  const r = [
    ...yt((o) => o)([
      (() => {
        const o = Jo(e)(t.chipExtras);
        if (o.tag === "Just")
          return id(o._1);
        if (o.tag === "Nothing")
          return x;
        f();
      })()
    ]),
    ...(() => {
      const o = Jo(e)(n);
      if (o.tag === "Just")
        return yt((i) => {
          const s = Mf(i)(t.nodes);
          return s.tag === "Just" ? v("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : x;
        })([o._1.source, o._1.target]);
      if (o.tag === "Nothing")
        return [];
      f();
    })()
  ];
  return r.length === 0 ? jf(t)(n)(I) : vi(r);
}, Zf = (t) => (n) => {
  const e = Kn(t), r = e.w / Kr(1e-4)(n.zoom), o = e.h / Kr(1e-4)(n.zoom);
  return { x: n.center.x - r / 2, y: n.center.y - o / 2, w: r, h: o };
}, sd = (t) => Pn(
  A.compare,
  Cn,
  Xc(q((n) => k(n.id, { source: n.from.node, target: n.to.node }))(t.graph.edges)),
  Xc(Tt(t.scenes)(rd))
), gs = (t) => t, ud = (t) => t, Xo = /* @__PURE__ */ gs("Linear"), cd = /* @__PURE__ */ gs("EaseInOutQuad"), wi = /* @__PURE__ */ gs("EaseInOutCubic"), ad = /* @__PURE__ */ gs("SpringBouncy"), To = (t) => (n) => (e) => {
  const r = Sn(1 - n * n), o = t * r;
  return 1 - is(-n * t * e) * (ue(o * e) + n / r * Zn(o * e));
}, fd = (t) => {
  const n = ct.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = ct.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, vo = (t) => (n) => (() => {
  if (t === "Linear")
    return ud;
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
    return (e) => e >= 1 ? 1 : 1 - iu(2)(-10 * e);
  if (t === "Spring")
    return (e) => 1 - (1 + 6 * e) * is(-6 * e);
  if (t === "SpringBouncy")
    return To(6)(0.7);
  f();
})()(fd(n)), t0 = (t) => t, rc = (t) => t, ls = (t) => (n) => (e) => {
  const r = ct.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ct.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, wo = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, n0 = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, gd = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ld = /* @__PURE__ */ rc("Hold"), _d = /* @__PURE__ */ rc("Gap"), dd = /* @__PURE__ */ rc("Move"), _o = /* @__PURE__ */ t0("LinearLerp"), Vc = /* @__PURE__ */ t0("LogLerp"), hd = (t) => (n) => (e) => {
  const r = e.center.y - n.center.y, o = e.center.x - n.center.x, i = Sn(o * o + r * r), s = e.zoom - n.zoom, u = s < 0 ? -s : s;
  return ls(t.minTransition)(t.maxTransition)(wo(t.panSpeed <= 0 ? t.minTransition : i / t.panSpeed)(t.zoomSpeed <= 0 ? t.minTransition : u / t.zoomSpeed));
}, pd = /* @__PURE__ */ J((t) => (n) => {
  const e = t.length - 1 | 0;
  return e >= 0 && e < t.length && t[e] === n ? t : Qt(t)(n);
})([]), Uc = (t) => (n) => {
  const e = { x: 0, y: 0 }, r = 0 < t.length ? t[0].pos : e, o = Lf(Yt, x, (i) => i.t <= n, t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just") {
    const i = o._1 + 1 | 0;
    if (i >= 0 && i < t.length) {
      if (o._1 >= 0 && o._1 < t.length) {
        const s = ls(0)(1)(t[i].t <= t[o._1].t ? 0 : (n - t[o._1].t) / (t[i].t - t[o._1].t));
        return { x: t[o._1].pos.x + (t[i].pos.x - t[o._1].pos.x) * s, y: t[o._1].pos.y + (t[i].pos.y - t[o._1].pos.y) * s };
      }
      return e;
    }
    return o._1 >= 0 && o._1 < t.length ? t[o._1].pos : e;
  }
  f();
}, fu = (t) => (n) => ({ center: { x: n.center.x * t.scale + t.tx, y: n.center.y * t.scale + t.ty }, zoom: n.zoom / wo(1e-6)(t.scale) }), $d = (t) => (n) => (e) => ({
  center: { x: t.center.x + (n.center.x - t.center.x) * e, y: t.center.y + (n.center.y - t.center.y) * e },
  zoom: is((() => {
    const r = Bc(wo(1e-6)(t.zoom));
    return r + (Bc(wo(1e-6)(n.zoom)) - r) * e;
  })())
}), md = (t) => (n) => (e) => {
  const r = vo(e.easing)(ls(0)(1)(e.endT <= e.startT ? 1 : (n - e.startT) / (e.endT - e.startT)));
  if (e.interp === "LinearLerp")
    return {
      center: { x: e.fromCam.center.x + (e.toCam.center.x - e.fromCam.center.x) * r, y: e.fromCam.center.y + (e.toCam.center.y - e.fromCam.center.y) * r },
      zoom: e.fromCam.zoom + (e.toCam.zoom - e.fromCam.zoom) * r
    };
  if (e.interp === "LogLerp")
    return $d(e.fromCam)(e.toCam)(r);
  f();
}, yd = (t) => (n) => (e) => (r) => {
  const o = (s, u) => n0(hd(t)(s.toCam)(u.toCam))(s.endT - s.startT), i = J((s) => (u) => {
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
          interp: _o
        }),
        pending: v("Just", u)
      };
    f();
  })({ acc: [], pending: x })(r);
  if (i.pending.tag === "Nothing")
    return i.acc;
  if (i.pending.tag === "Just")
    return Qt(i.acc)(i.pending._1);
  f();
}, Nd = (t) => (n) => {
  const e = (r) => {
    const o = Lf(Yt, x, (i) => i.kind === "Hold" || i.kind === "Move", r < 1 ? [] : Lt(0, r, n));
    if (o.tag === "Just")
      return o._1 >= 0 && o._1 < n.length ? v("Just", n[o._1].toCam) : x;
    if (o.tag === "Nothing")
      return x;
    f();
  };
  return Bt((r) => (o) => {
    if (o.kind === "Hold")
      return { startT: o.startT, endT: o.endT, fromCam: o.fromCam, toCam: o.toCam, easing: o.easing, interp: _o };
    if (o.kind === "Move")
      return { startT: o.startT, endT: o.endT, fromCam: o.fromCam, toCam: o.toCam, easing: Xo, interp: _o };
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
          })(), u = r + 1 | 0, c = Nr(
            Yt,
            x,
            (a) => a.kind === "Hold" || a.kind === "Move",
            u < 1 ? n : Lt(u, n.length, n)
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
        interp: _o
      };
    f();
  })(n);
}, xd = {
  padding: 24,
  easing: Xo,
  minZoom: 0.9,
  maxZoom: 2.5,
  tokenZoomFloor: 0,
  panSpeed: 1500,
  zoomSpeed: 4,
  minTransition: 0.15,
  maxTransition: 0.6,
  cameraDecay: 16
}, oc = (t) => (n) => (e) => {
  const r = n.w + e * 2, o = n.h + e * 2, i = Kn(t);
  return r <= 0 || o <= 0 || i.w <= 0 || i.h <= 0 ? 1 : n0(i.w / r)(i.h / o);
}, Jd = /* @__PURE__ */ J((t) => (n) => {
  const e = t.length - 1 | 0, r = e >= 0 && e < t.length ? v("Just", t[e]) : x;
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
    return o < 1 ? [] : Lt(0, o, t);
  })())({ ...r._1, endT: n.endT }) : Qt(t)(n);
})([]), ho = (t) => (n) => (e) => (r) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: wo(r)(ls(t.minZoom)(t.maxZoom)(oc(n)(e)(t.padding))) }), Td = (t) => (n) => (e) => (r) => {
  const o = Et((u) => (c) => ot.compare(c.priority)(u.priority)), i = ho(t)(n)(Kn(n))(0), s = ft(
    (u) => u >= 0 && u <= e,
    pd(Et(ct.compare)([
      0,
      e,
      ...Tt(r)((u) => [u.startT, u.endT]),
      ...Tt(r)((u) => {
        if (u.pathFollow.tag === "Nothing")
          return [];
        if (u.pathFollow.tag === "Just")
          return q((c) => c.t)(u.pathFollow._1.samples);
        f();
      })
    ]))
  );
  return yd(t)(n)(i)(Jd(Nd(i)(yt((u) => {
    const c = (u._1 + u._2) / 2;
    if (u._2 <= u._1)
      return x;
    const a = yt((_) => _.pathFollow)(o(ft((_) => _.startT <= c && c < _.endT, r)));
    if (0 < a.length)
      return v(
        "Just",
        {
          kind: dd,
          startT: u._1,
          endT: u._2,
          fromCam: { center: Uc(a[0].samples)(u._1), zoom: a[0].zoom },
          toCam: { center: Uc(a[0].samples)(u._2), zoom: a[0].zoom },
          easing: Xo
        }
      );
    const g = q((_) => _.bbox)(ft(
      (_) => _.priority === J(gd)(0)(q((d) => d.priority)(ft(
        (d) => d.startT <= c && c < d.endT,
        r
      ))),
      ft((_) => _.startT <= c && c < _.endT, r)
    ));
    return g.length === 0 ? v("Just", { kind: _d, startT: u._1, endT: u._2, fromCam: i, toCam: i, easing: t.easing }) : v(
      "Just",
      {
        kind: ld,
        startT: u._1,
        endT: u._2,
        fromCam: ho(t)(n)(vi(g))(Vn(
          (_) => _.priority >= 1,
          ft((_) => _.startT <= c && c < _.endT, r)
        ) ? t.tokenZoomFloor : 0),
        toCam: ho(t)(n)(vi(g))(Vn(
          (_) => _.priority >= 1,
          ft((_) => _.startT <= c && c < _.endT, r)
        ) ? t.tokenZoomFloor : 0),
        easing: t.easing
      }
    );
  })(bn(qe, s, Lt(1, s.length, s))))));
}, e0 = (t) => (n) => (e) => (r) => {
  const o = Mt((i) => r >= i.startT && r < i.endT)(e);
  if (o.tag === "Just")
    return md()(r)(o._1);
  if (o.tag === "Nothing") {
    const i = e.length - 1 | 0;
    if (i >= 0 && i < e.length && r >= e[i].endT)
      return e[i].toCam;
    const s = ho(t)(n)(Kn(n))(0);
    return 0 < e.length ? e[0].fromCam : s;
  }
  f();
};
function nr(t) {
  return t.charCodeAt(0);
}
function r0(t) {
  return String.fromCharCode(t);
}
const je = function(t) {
  return function(n) {
    return function(e) {
      return e.replace(new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), n);
    };
  };
}, _s = function(t) {
  return function(n) {
    return n.split(t);
  };
}, vd = function(t) {
  return t.trim();
}, ds = function(t) {
  return function(n) {
    return n.join(t);
  };
};
var wd = typeof Array.from == "function", bd = typeof Symbol < "u" && Symbol != null && typeof Symbol.iterator < "u" && typeof String.prototype[Symbol.iterator] == "function", kd = typeof String.prototype.fromCodePoint == "function", Ld = typeof String.prototype.codePointAt == "function";
const Ed = function(t) {
  return Ld ? function(n) {
    return n.codePointAt(0);
  } : t;
}, Sd = function(t) {
  return kd ? String.fromCodePoint : t;
}, Cd = function(t) {
  return function(n) {
    return bd ? function(e) {
      for (var r = "", o = e[Symbol.iterator](), i = 0; i < n; ++i) {
        var s = o.next();
        if (s.done) return r;
        r += s.value;
      }
      return r;
    } : t(n);
  };
}, Pd = function(t) {
  return function(n) {
    return wd ? function(e) {
      return Array.from(e, n);
    } : t;
  };
}, hs = (t) => {
  const n = ur(t);
  if (n === 0)
    return x;
  if (n === 1)
    return v("Just", { head: nr(go(0)(t)), tail: "" });
  const e = nr(go(1)(t)), r = nr(go(0)(t));
  return 55296 <= r && r <= 56319 && 56320 <= e && e <= 57343 ? v("Just", { head: (((r - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0, tail: No(2)(t) }) : v("Just", { head: r, tail: No(1)(t) });
}, Ad = (t) => {
  const n = hs(t);
  return n.tag === "Just" ? v("Just", k(n._1.head, n._1.tail)) : x;
}, Gd = (t) => oe.unfoldr(Ad)(t), Id = (t) => {
  const n = nr(go(0)(t));
  if (55296 <= n && n <= 56319 && ur(t) > 1) {
    const e = nr(go(1)(t));
    if (56320 <= e && e <= 57343)
      return (((n - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0;
  }
  return n;
}, o0 = /* @__PURE__ */ Ed(Id), ps = /* @__PURE__ */ Pd(Gd)(o0), Gs = (t) => as(t >= 0 && t <= 65535 ? r0(t) : t < 0 ? "\0" : "\uffff"), Fd = (t) => t <= 65535 ? Gs(t) : Gs(Fe(t - 65536 | 0, 1024) + 55296 | 0) + Gs(tr(t - 65536 | 0)(1024) + 56320 | 0), Bd = /* @__PURE__ */ Sd(Fd), i0 = (t) => (n) => {
  if (t < 1)
    return "";
  const e = hs(n);
  return e.tag === "Just" ? Bd(e._1.head) + i0(t - 1 | 0)(e._1.tail) : n;
}, xn = /* @__PURE__ */ Cd(i0), Rd = (t) => (n) => n === "" ? x : v("Just", o0(n)), bi = (t, n, e) => ({ tag: t, _1: n, _2: e }), Qd = () => ({ tag: "ExtendFromSource" }), ki = (t, n) => ({ tag: t, _1: n }), ic = (t) => t, Li = (t, n) => ({ tag: t, _1: n }), Is = /* @__PURE__ */ Li("NotYet"), Kc = /* @__PURE__ */ Li("Consumed"), Wd = /* @__PURE__ */ ic("FromSource"), Mc = /* @__PURE__ */ ic("FromTarget"), Hd = /* @__PURE__ */ ic("FromBoth"), Fs = /* @__PURE__ */ ki("Hidden"), Dd = /* @__PURE__ */ ki("Visible"), s0 = /* @__PURE__ */ Qd(), Bs = /* @__PURE__ */ bi("Retracted"), Od = /* @__PURE__ */ bi("Extended"), u0 = (t) => t, gu = (t, n) => ({ tag: t, _1: n }), Xe = (t, n, e) => ({ tag: t, _1: n, _2: e }), c0 = (t) => t, Ze = (t, n) => ({ tag: t, _1: n }), Gr = (t, n, e, r, o, i, s, u, c) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s, _7: u, _8: c }), Vo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, ve = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, a0 = /* @__PURE__ */ en(A)(Ot), lu = /* @__PURE__ */ Ru(Do), Ir = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Ei = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, bo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, jc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, f0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Er = /* @__PURE__ */ (() => {
  const t = oe.unfoldr((n) => {
    if (n.tag === "Nil")
      return x;
    if (n.tag === "Cons")
      return v("Just", k(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, Xt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Vt);
  })());
})(), qd = /* @__PURE__ */ J((t) => (n) => U(A)(n)()(t))(I), _u = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, ei = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, zd = /* @__PURE__ */ Ze("NoKeyframes"), Yd = (t) => Ze("DuplicateEventId", t), Xd = (t) => Ze("UnknownEvent", t), g0 = /* @__PURE__ */ c0("PlopIn"), Vd = /* @__PURE__ */ c0("PlopOut"), Ud = /* @__PURE__ */ u0("DiveIn"), Kd = /* @__PURE__ */ u0("DiveOut"), Md = (t) => (n) => (e) => (r) => {
  const o = Vo(r.edge)(n.edges), i = (() => {
    if (o.tag === "Nothing")
      return 0;
    if (o.tag === "Just")
      return qo(o._1);
    f();
  })(), s = ve(t.minTokenDuration)(ve(rt(J((u) => (c) => u + ps(c).length | 0)(0)(r.labels)) * t.tokenReadSecPerChar)(t.tokenSpeed <= 0 ? 0 : i / t.tokenSpeed)) + e.pre + e.post;
  return { duration: s, holdPre: s <= 0 ? 0 : e.pre / s, holdPost: s <= 0 ? 0 : e.post / s };
}, jd = (t) => (n) => a0(yt((e) => {
  if (e.kind.tag === "SendToken")
    return v(
      "Just",
      k(
        e.id,
        {
          pre: (() => {
            const r = e.when;
            return (() => {
              const o = e.kind._1.from;
              return Vn(
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
              return Vn(
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
    return x;
  f();
})(n)), Zd = (t) => {
  if (t.event.kind.tag === "SendToken")
    return v(
      "Just",
      {
        startT: t.startT,
        endT: t.endT,
        target: Gr(
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
    return v("Just", { startT: t.startT, endT: t.endT, target: Gr("FillWindow", t.event.id, t.event.kind._1.node, t.event.kind._1.labels) });
  f();
}, th = (t) => (n) => (e) => (r) => {
  const o = Mt((i) => lu(i.path)(n) && (sr(i.endT - e) < 1e-4 || sr(i.startT - r) < 1e-4))(t.segments);
  if (o.tag === "Just")
    return v("Just", o._1);
  if (o.tag === "Nothing")
    return Mt((i) => lu(i.path)(n))(t.segments);
  f();
}, nh = (t) => (n) => (e) => yt((r) => {
  const o = yt((i) => bo(i)(t.nodes))(St(
    On.foldr,
    (() => {
      if (r.scene.tag === "Structural")
        return Pn(
          A.compare,
          Cn,
          (() => {
            const i = Ir(r.scene._1.from)(e);
            if (i.tag === "Nothing")
              return I;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })(),
          (() => {
            const i = Ir(r.scene._1.to)(e);
            if (i.tag === "Nothing")
              return I;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })()
        );
      if (r.scene.tag === "DataFlow") {
        const i = Ir(r.scene._1.keyframe)(e);
        if (i.tag === "Nothing")
          return I;
        if (i.tag === "Just")
          return i._1.nodes;
        f();
      }
      if (r.scene.tag === "Hold") {
        const i = Ir(r.scene._1)(e);
        if (i.tag === "Nothing")
          return I;
        if (i.tag === "Just")
          return i._1.nodes;
        f();
      }
      if (r.scene.tag === "EnterNode" || r.scene.tag === "ExitNode")
        return I;
      f();
    })()
  ));
  return o.length === 0 ? x : v(
    "Just",
    {
      startT: r.startT,
      endT: r.endT,
      bbox: (() => {
        const i = J((s) => (u) => ({ minX: Ei(s.minX)(u.x), minY: Ei(s.minY)(u.y), maxX: ve(s.maxX)(u.x + u.w), maxY: ve(s.maxY)(u.y + u.h) }))(0 < o.length ? { minX: o[0].x, minY: o[0].y, maxX: o[0].x + o[0].w, maxY: o[0].y + o[0].h } : { minX: 0, minY: 0, maxX: 0, maxY: 0 })(Lt(1, o.length, o));
        return { x: i.minX, y: i.minY, w: i.maxX - i.minX, h: i.maxY - i.minY };
      })(),
      priority: 0,
      pathFollow: x
    }
  );
}), eh = (t) => (n) => (e) => {
  const r = Vo(e)(t);
  if (r.tag === "Nothing")
    return Mc;
  if (r.tag === "Just") {
    const o = jc(r._1.target)(n);
    return jc(r._1.source)(n) ? o ? Hd : Wd : Mc;
  }
  f();
}, rh = { pre: 0, post: 0 }, oh = (t) => (n) => (e) => (r) => (o) => {
  const i = f0(o.event.id)(e), s = (() => {
    if (i.tag === "Nothing")
      return rh;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = (() => {
    if (o.event.when.tag === "First")
      return 0;
    if (o.event.when.tag === "At")
      return o.event.when._1;
    if (o.event.when.tag === "After") {
      const a = o.event.when._1, g = Mt((_) => _.event.id === a)(r);
      if (g.tag === "Nothing")
        return 0;
      if (g.tag === "Just")
        return g._1.endT;
      f();
    }
    if (o.event.when.tag === "With") {
      const a = o.event.when._1, g = Mt((_) => _.event.id === a)(r);
      if (g.tag === "Nothing")
        return 0;
      if (g.tag === "Just")
        return g._1.startT;
    }
    f();
  })(), c = (() => {
    if (o.event.kind.tag === "SendToken")
      return Md(t)(n)(s)(o.event.kind._1);
    if (o.event.kind.tag === "FillNodeWithoutTransition")
      return { duration: t.plop, holdPre: 0, holdPost: 0 };
    f();
  })();
  return Qt(r)({ startT: u, endT: u + c.duration, event: o.event, holdPre: c.holdPre, holdPost: c.holdPost });
}, l0 = (t) => (n) => (e) => J(oh(t)(n)(jd(t)(e)))([])(Bt((r) => (o) => ({ event: o }))(e)), ih = (t) => (n) => {
  const e = bo(n)(t.interiors);
  if (e.tag === "Nothing")
    return t;
  if (e.tag === "Just")
    return e._1;
  f();
}, sh = (t) => (n) => ({ ...n, fromCam: fu(t)(n.fromCam), toCam: fu(t)(n.toCam) }), uh = (t) => {
  if (t.when.tag === "First")
    return [];
  if (t.when.tag === "At")
    return [];
  if (t.when.tag === "After")
    return [t.when._1];
  if (t.when.tag === "With")
    return [t.when._1];
  f();
}, Zc = { id: "", nodes: I, edges: I, kind: Yo }, ch = (t) => (n) => K_((() => {
  const e = Ir(n.from)(t);
  if (e.tag === "Nothing")
    return Zc;
  if (e.tag === "Just")
    return e._1;
  f();
})())((() => {
  const e = Ir(n.to)(t);
  if (e.tag === "Nothing")
    return Zc;
  if (e.tag === "Just")
    return e._1;
  f();
})()), ah = (t) => (n) => {
  const e = bo(n)(t.interiors);
  if (e.tag === "Nothing")
    return { layout: t.layout, interiors: I };
  if (e.tag === "Just")
    return e._1;
  f();
}, Rs = (t) => (n) => (e) => (r) => {
  const o = Vo(r)(e.edges);
  if (o.tag === "Just")
    return t <= 0 ? n : ve(n)(qo(o._1) / t);
  if (o.tag === "Nothing")
    return n;
  f();
}, _0 = (t) => (n) => (e) => (r) => (o) => {
  const i = t.plop, s = ch(e)(o), u = q((l) => ({
    startT: 0,
    endT: 0 + Rs(t.edgeSpeed)(t.minEdgeDuration)(n)(l),
    target: Gr("EdgeWindow", l, gu("Extend", s0))
  }))(Er(s.entering.edges)), c = q((l) => ({ startT: 0, endT: i, target: Gr("NodeWindow", l, g0) }))(Er(s.entering.nodes)), a = J(ve)(0)(q((l) => Rs(t.edgeSpeed)(t.minEdgeDuration)(n)(l))(Er(s.leaving.edges))), g = (l) => Vn(
    (h) => {
      const $ = Vo(h)(r);
      if ($.tag === "Just")
        return $._1.source === l || $._1.target === l;
      if ($.tag === "Nothing")
        return !1;
      f();
    },
    Er(s.leaving.edges)
  ) ? a : 0, _ = q((l) => ({ startT: g(l), endT: g(l) + t.plop, target: Gr("NodeWindow", l, Vd) }))(Er(s.leaving.nodes)), d = q((l) => ({
    startT: 0,
    endT: Rs(t.edgeSpeed)(t.minEdgeDuration)(n)(l),
    target: Gr("EdgeWindow", l, gu("Retract", eh(r)(s.leaving.nodes)(l)))
  }))(Er(s.leaving.edges));
  return {
    duration: (() => {
      const l = Et(ct.compare)([
        ...q(($) => $.endT)(d),
        ...q(($) => $.endT)(_),
        ...q(($) => $.endT)(c),
        ...q(($) => $.endT)(u)
      ]), h = l.length - 1 | 0;
      return h >= 0 && h < l.length ? l[h] + t.gap : t.gap;
    })(),
    windows: [...d, ..._, ...c, ...u]
  };
}, fh = (t) => (n) => (e) => (r) => (o) => (i) => q((() => {
  const s = o.startT;
  return (u) => ({ ...u, startT: u.startT + s, endT: u.endT + s });
})())(_0(t)(n)(e)(r)(i).windows), gh = (t) => yt((n) => St(mo, n).length > 1 ? v(
  "Just",
  (() => {
    const e = Wt(
      (r) => x,
      (r) => (o) => v("Just", { head: r, tail: o }),
      St(mo, n)
    );
    if (e.tag === "Just")
      return e._1.head;
    if (e.tag === "Nothing")
      return "";
    f();
  })()
) : x)(J1(Do)(Et(A.compare)(t))), lh = (t) => {
  const n = q((r) => r.id)(t), e = qd(n);
  return [
    ...q(Yd)(gh(n)),
    ...q(Xd)(ft((r) => !_u(r)(e), Tt(t)(uh)))
  ];
}, _h = (t) => (n) => (e) => {
  const r = ve(t.minZoom)(t.tokenZoomFloor);
  return yt((o) => {
    if (o.target.tag === "NodeWindow" || o.target.tag === "EdgeWindow")
      return x;
    if (o.target.tag === "TokenWindow")
      return v(
        "Just",
        (() => {
          const i = { pre: o.target._7, post: o.target._8 };
          if (t.tokenZoomFloor <= 0)
            return {
              startT: o.startT,
              endT: o.endT,
              bbox: oo(n)(e)(o.target._2),
              priority: 1,
              pathFollow: x
            };
          const s = Vo(o.target._2)(n.edges);
          if (s.tag === "Just") {
            const u = bo(o.target._4)(n.nodes);
            if (u.tag === "Just") {
              const c = bo(o.target._5)(n.nodes);
              if (c.tag === "Just") {
                const a = c._1;
                return {
                  startT: o.startT,
                  endT: o.endT,
                  bbox: oo(n)(e)(o.target._2),
                  priority: 1,
                  pathFollow: v(
                    "Just",
                    {
                      samples: (() => {
                        const g = o.startT + i.pre * (o.endT - o.startT), _ = ve(1e-4)(o.endT - i.post * (o.endT - o.startT) - g), d = o.endT - o.startT;
                        return q((l) => {
                          const h = g + rt(l) / rt(32) * _;
                          return {
                            t: h,
                            pos: Q_(s._1)({ x: u._1.x + u._1.w / 2, y: u._1.y + u._1.h / 2 })({
                              x: a.x + a.w / 2,
                              y: a.y + a.h / 2
                            })(d <= 0 ? 0 : (h - o.startT) / d)(i)
                          };
                        })(Ft(0, 32));
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
                  bbox: oo(n)(e)(o.target._2),
                  priority: 1,
                  pathFollow: x
                };
              f();
            }
            if (u.tag === "Nothing")
              return {
                startT: o.startT,
                endT: o.endT,
                bbox: oo(n)(e)(o.target._2),
                priority: 1,
                pathFollow: x
              };
            f();
          }
          if (s.tag === "Nothing")
            return {
              startT: o.startT,
              endT: o.endT,
              bbox: oo(n)(e)(o.target._2),
              priority: 1,
              pathFollow: x
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
          bbox: jf(n)(e)(zt(
            "Node",
            1,
            1,
            o.target._2,
            void 0,
            I,
            I
          )),
          priority: 1,
          pathFollow: x
        }
      );
    f();
  });
}, dh = (t) => (n) => (e) => (r) => (o) => Td(t)(o.layout)(r.endT)([
  ...nh(o.layout)(e)(n)(ft((i) => i.startT >= o.startT && i.endT <= o.endT, r.spans)),
  ..._h(t)(o.layout)(e)(o.windows)
]), hh = (t) => {
  const n = a0(q((r) => k(
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
    if (_u(i)(o))
      return [Ze("ScheduleCycle", [...St(On.foldr, o), i])];
    if (_u(i)(r))
      return [];
    const s = f0(i)(n);
    if (s.tag === "Nothing")
      return [];
    if (s.tag === "Just")
      return Tt(s._1)(e(U(A)(i)()(r))(U(A)(i)()(o)));
    f();
  };
  return Tt(t)((r) => e(I)(I)(r.id));
}, ph = {
  plop: 0.5,
  gap: 0.5,
  edgeSpeed: 350,
  minEdgeDuration: 0.3,
  tokenSpeed: 250,
  minTokenDuration: 1.8,
  tokenHold: 0.5,
  stillHold: 1.8,
  hatchHold: 0.4,
  tokenReadSecPerChar: 0.06,
  nodeEasing: ad,
  edgeEasing: cd,
  tokenEasing: Xo,
  diveDur: 1.2,
  retreatDur: 1.2
}, $h = (t) => (n) => (e) => (r) => q((() => {
  const o = e.startT;
  return (i) => ({ ...i, startT: i.startT + o, endT: i.endT + o });
})())(yt(Zd)(l0(t)(n)(r.events))), mh = (t) => (n) => (e) => (r) => (o) => {
  if (o.scene.tag === "Structural")
    return fh(t)(n)(e)(r)(o)(o.scene._1);
  if (o.scene.tag === "Hold")
    return [];
  if (o.scene.tag === "DataFlow")
    return $h(t)(n)(o)(o.scene._1);
  if (o.scene.tag === "EnterNode")
    return [];
  if (o.scene.tag === "ExitNode")
    return [];
  f();
}, yh = (t) => (n) => (e) => {
  const r = l0(t)(n)(e.events);
  return r.length === 0 ? t.gap : J(ve)(0)(q((o) => o.endT)(r)) + t.gap;
}, Nh = (t) => (n) => (e) => (r) => (o) => {
  if (o.tag === "Structural")
    return _0(t)(n)(e)(r)(o._1).duration;
  if (o.tag === "Hold")
    return t.stillHold;
  if (o.tag === "DataFlow")
    return yh(t)(n)(o._1);
  if (o.tag === "EnterNode" || o.tag === "ExitNode")
    return 0;
  f();
}, d0 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = D_(n)(r), u = e.layout, c = Kf(q(($) => k($.id, $))(o.keyframes)), a = 0 < o.keyframes.length ? v("Just", o.keyframes[0]) : x, g = (() => {
    if (a.tag === "Just")
      return a._1.id;
    if (a.tag === "Nothing")
      return "";
    f();
  })(), _ = sd(o), d = ($) => ({
    segments: $.runSpans.length === 0 ? $.segments : Qt($.segments)({
      startT: $.runStart,
      endT: $.t,
      path: r,
      layout: u,
      placement: s,
      windows: $.runWindows,
      spans: $.runSpans,
      keyframes: c,
      initialKeyframe: g,
      edgeEndpoints: _
    }),
    spans: $.spans,
    windows: $.windows,
    dives: $.dives
  }), l = J(($) => (p) => {
    if (p.tag === "EnterNode") {
      const T = d($), w = $.t + t.diveDur, b = Qt(r)(p._1), L = d0(t)(n)(ah(e)(p._1))(b)(ih(o)(p._1))(w), C = L.endT + t.retreatDur;
      return {
        ...$,
        t: C,
        runStart: C,
        runSpans: [],
        runWindows: [],
        segments: [...T.segments, ...L.segments],
        spans: [...T.spans, ...L.spans],
        windows: [...T.windows, ...L.windows],
        dives: [
          ...T.dives,
          { startT: $.t, endT: w, node: p._1, parentPath: r, childPath: b, direction: Ud },
          ...L.dives,
          { startT: L.endT, endT: C, node: p._1, parentPath: r, childPath: b, direction: Kd }
        ]
      };
    }
    if (p.tag === "ExitNode")
      return $;
    const m = $.t + Nh(t)(u)(c)(_)(p), y = { startT: $.t, endT: m, scene: p }, N = mh(t)(u)(c)(_)(y);
    return {
      ...$,
      t: m,
      runSpans: Qt($.runSpans)(y),
      runWindows: [...$.runWindows, ...N],
      spans: Qt($.spans)(y),
      windows: [...$.windows, ...N]
    };
  })({ t: i, runStart: i, runSpans: [], runWindows: [], segments: [], spans: [], windows: [], dives: [] })(o.scenes), h = d(l);
  return {
    endT: l.t,
    spans: h.spans,
    windows: Et(($) => (p) => ct.compare($.startT)(p.startT))(h.windows),
    segments: h.segments,
    dives: h.dives
  };
}, xh = (t) => (n) => (e) => e.endT <= t || e.startT >= n ? x : v("Just", { ...e, startT: ve(t)(e.startT), endT: Ei(n)(e.endT) }), sc = (t) => (n) => (e) => {
  const r = Kn(e.layout), o = {
    x: r.x * e.placement.scale + e.placement.tx,
    y: r.y * e.placement.scale + e.placement.ty,
    w: r.w * e.placement.scale,
    h: r.h * e.placement.scale
  }, i = 40 / (11 * e.placement.scale), s = oc(n)(o)(t.padding * e.placement.scale);
  return {
    center: { x: o.x + o.w / 2, y: o.y + o.h / 2 },
    zoom: (() => {
      if (e.layout.nodes.tag === "Leaf")
        return !0;
      if (e.layout.nodes.tag === "Node")
        return e.layout.nodes._2 <= 1;
      f();
    })() ? Ei(s)(i) : s
  };
}, Jh = (t) => (n) => (e) => e.placement.scale === 1 && e.placement.tx === 0 && e.placement.ty === 0 ? fu(e.placement)(ho(t)(e.layout)(Kn(e.layout))(0)) : sc(t)(n)(e), Th = (t) => (n) => (e) => (r) => yt((o) => {
  const i = th(r)(o.parentPath)(o.startT)(o.endT);
  if (i.tag === "Just") {
    const s = o.childPath, u = Mt((c) => lu(c.path)(s))(r.segments);
    if (u.tag === "Just") {
      const c = Jh(t)(n)(i._1), a = sc(t)(n)(u._1);
      if (o.direction === "DiveIn")
        return v(
          "Just",
          { startT: o.startT, endT: o.endT, fromCam: c, toCam: a, easing: wi, interp: Vc }
        );
      if (o.direction === "DiveOut")
        return v(
          "Just",
          { startT: o.startT, endT: o.endT, fromCam: a, toCam: c, easing: wi, interp: Vc }
        );
      f();
    }
    if (u.tag === "Nothing")
      return x;
    f();
  }
  if (i.tag === "Nothing")
    return x;
  f();
})(r.dives), vh = (t) => (n) => {
  if (n.tag === "Structural")
    return yt((e) => e)([
      ei(n._1.from)(t) ? x : v("Just", Ze("UnknownKeyframe", n._1.from)),
      ei(n._1.to)(t) ? x : v("Just", Ze("UnknownKeyframe", n._1.to))
    ]);
  if (n.tag === "Hold")
    return yt((e) => e)([ei(n._1)(t) ? x : v("Just", Ze("UnknownKeyframe", n._1))]);
  if (n.tag === "DataFlow")
    return [
      ...yt((e) => e)([ei(n._1.keyframe)(t) ? x : v("Just", Ze("UnknownKeyframe", n._1.keyframe))]),
      ...lh(n._1.events),
      ...hh(n._1.events)
    ];
  if (n.tag === "EnterNode")
    return [];
  if (n.tag === "ExitNode")
    return [];
  f();
}, wh = (t) => (n) => {
  const e = Tt(n)(vh(t));
  return e.length === 0 ? Pt("Right", void 0) : Pt("Left", e);
}, bh = (t) => (n) => (e) => (r) => Et((o) => (i) => ct.compare(o.startT)(i.startT))(Tt(r.segments)((o) => o.placement.scale === 1 && o.placement.tx === 0 && o.placement.ty === 0 ? yt(xh(o.startT)(o.endT))(q(sh(o.placement))(dh(t)(e)(o.edgeEndpoints)(r)(o))) : [
  (() => {
    const i = sc(t)(n)(o);
    return { startT: o.startT, endT: o.endT, fromCam: i, toCam: i, easing: Xo, interp: _o };
  })()
])), kh = (t) => (n) => (e) => (r) => {
  if (0 < e.keyframes.length) {
    const o = e.keyframes[0], i = Kf(q((u) => k(u.id, u))(e.keyframes)), s = wh(i)(e.scenes);
    return (() => {
      if (s.tag === "Left") {
        const u = s._1;
        return (c) => Pt("Left", u);
      }
      if (s.tag === "Right") {
        const u = s._1;
        return (c) => c(u);
      }
      f();
    })()(() => {
      const u = d0(n)(r)(r)([])(e)(0);
      return Pt(
        "Right",
        {
          totalDuration: u.endT,
          windows: u.windows,
          spans: u.spans,
          keyframes: i,
          initialKeyframe: o.id,
          timing: n,
          layout: r.layout,
          cameraSpans: [...Th(t)(r.layout)(i)(u), ...bh(t)(r.layout)(i)(u)],
          cameraConfig: t,
          levelTree: r,
          segments: u.segments,
          dives: u.dives,
          seed: e.seed
        }
      );
    });
  }
  return Pt("Left", [zd]);
}, uc = (t) => t, h0 = /* @__PURE__ */ en(A)(Ot), he = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ko = { eq: /* @__PURE__ */ Ru(Do) }, cc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, ta = Ot.foldMap(y_(A)), du = (t) => (n) => (e) => {
  const r = ct.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ct.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, Lh = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Eh = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Sh = /* @__PURE__ */ (() => {
  const t = oe.unfoldr(Se);
  return (n) => t(te("IterNode", n, Ee));
})(), Fr = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ch = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Ph = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Ah = /* @__PURE__ */ en(A)(Ot), Gh = /* @__PURE__ */ en(A)(Ot), p0 = /* @__PURE__ */ uc("Backdrop"), Ih = /* @__PURE__ */ uc("FlyThrough"), Si = /* @__PURE__ */ uc("Active"), Fh = (t) => (n) => (e) => ({ ...e, state: { ...e.state, edgeFadeAlpha: h0(q((r) => k(r, n))(t)) } }), na = (t) => (n) => (e) => {
  const r = (t + n) / 2, o = e - r, i = o < 0 ? -1 : 1, s = (n - t) / 2, u = s * 0.15, c = s - u, a = o < 0 ? -o : o;
  return n <= t ? (t + n) / 2 : a <= c ? e : r + i * (s - u * is(-(a - c) / u));
}, Bh = (t) => (n) => (e) => (r) => {
  const o = Kn(t), i = o.w / he(1e-4)(n.zoom) / 2, s = o.h / he(1e-4)(n.zoom) / 2, u = e.y - n.center.y, c = e.x - n.center.x;
  return {
    ...n,
    center: {
      x: i <= 1e-4 ? n.center.x + 0 * r * 0.35 : c < 0 ? n.center.x + c / (1 + -c / i) * r * 0.35 : n.center.x + c / (1 + c / i) * r * 0.35,
      y: s <= 1e-4 ? n.center.y + 0 * r * 0.35 : u < 0 ? n.center.y + u / (1 + -u / s) * r * 0.35 : n.center.y + u / (1 + u / s) * r * 0.35
    }
  };
}, Ci = (t) => (n) => (e) => {
  const r = Mt((o) => ko.eq(o.path)(n) && e >= o.startT && e < o.endT)(t.segments);
  if (r.tag === "Just")
    return v("Just", r._1);
  if (r.tag === "Nothing")
    return Mt((o) => ko.eq(o.path)(n))(t.segments);
  f();
}, Rh = (t) => ({
  startT: 0,
  endT: t.totalDuration,
  path: [],
  layout: t.layout,
  placement: tc,
  windows: t.windows,
  spans: t.spans,
  keyframes: t.keyframes,
  initialKeyframe: t.initialKeyframe,
  edgeEndpoints: I
}), Qh = (t) => q((n) => n < 1 ? [] : Lt(0, n, t))(Ft(0, t.length - 1 | 0)), Qs = (t) => (n) => {
  const e = cc(n)(t.keyframes);
  if (e.tag === "Nothing")
    return I;
  if (e.tag === "Just")
    return e._1.nodes;
  f();
}, Ws = (t) => (n) => {
  const e = cc(n)(t.keyframes);
  if (e.tag === "Nothing")
    return I;
  if (e.tag === "Just")
    return e._1.edges;
  f();
}, $s = (t) => (n) => {
  if (n < t.startT)
    return Xe("AtKeyframe", t.initialKeyframe);
  const e = Mt((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return Xe("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return Xe("AtKeyframe", e._1.scene._1.keyframe);
    if (e._1.scene.tag === "Hold")
      return Xe("AtKeyframe", e._1.scene._1);
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode")
      return Xe("AtKeyframe", t.initialKeyframe);
    f();
  }
  if (e.tag === "Nothing") {
    const r = t.spans.length - 1 | 0;
    return r >= 0 && r < t.spans.length ? Xe(
      "AtKeyframe",
      (() => {
        if (t.spans[r].scene.tag === "Structural")
          return t.spans[r].scene._1.to;
        if (t.spans[r].scene.tag === "DataFlow")
          return t.spans[r].scene._1.keyframe;
        if (t.spans[r].scene.tag === "Hold")
          return t.spans[r].scene._1;
        if (t.spans[r].scene.tag === "EnterNode" || t.spans[r].scene.tag === "ExitNode")
          return t.initialKeyframe;
        f();
      })()
    ) : Xe("AtKeyframe", t.initialKeyframe);
  }
  f();
}, Wh = /* @__PURE__ */ J((t) => (n) => {
  const e = xr(t);
  return e.tag === "Just" && n.startT <= e._1.last.endT + 1e-6 ? Qt(e._1.init)({ ...e._1.last, endT: he(e._1.last.endT)(n.endT), windows: Qt(e._1.last.windows)(n) }) : Qt(t)({ endT: n.endT, windows: [n] });
})([]), Hh = (t) => (n) => (e) => ta((r) => ta((o) => o.target.tag === "FillWindow" ? o.startT <= e ? zt("Node", 1, 1, o.target._2, void 0, I, I) : I : o.target.tag === "TokenWindow" && o.startT + (o.endT - o.startT) * 0.25 <= e ? zt("Node", 1, 1, o.target._4, void 0, I, I) : I)(r.windows))(ft(
  (r) => e <= r.endT + t,
  Wh(Et((r) => (o) => ct.compare(r.startT)(o.startT))(ft(
    (r) => r.target.tag === "FillWindow" || r.target.tag === "TokenWindow",
    n
  )))
)), Dh = (t) => (n) => (e) => Vn(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), Oh = (t) => (n) => (e) => Vn((r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e, t), qh = (t) => (n) => (e) => Vn((r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e, t), zh = (t) => (n) => (e) => Vn(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), Yh = (t) => (n) => {
  const e = $s(t)(n);
  if (e.tag === "AtKeyframe")
    return xn(3)(e._1) === "kf-" ? "" : e._1;
  if (e.tag === "InTransition")
    return xn(3)(e._2) === "kf-" ? "" : e._2;
  f();
}, Xh = (t) => (n) => {
  const e = $s(t)(n), r = cc((() => {
    if (e.tag === "AtKeyframe")
      return e._1;
    if (e.tag === "InTransition")
      return e._2;
    f();
  })())(t.keyframes);
  if (r.tag === "Just")
    return r._1.kind;
  if (r.tag === "Nothing")
    return Yo;
  f();
}, $0 = (t) => (n) => (e) => Mt((r) => e(r) && n >= r.startT && n < r.endT)(t), Vh = (t) => {
  const n = du(0)(1)(t / 0.2), e = du(0)(1)((1 - t) / 0.2);
  return n * n * (3 - 2 * n) * e * e * (3 - 2 * e);
}, Uh = (t) => (n) => {
  if (n.tag === "Travelling") {
    const e = Lh(n._1.edge)(t.edges);
    if (e.tag === "Just") {
      const r = Tr(e._1)(n._1.progress);
      return r.tag === "Just" ? v("Just", { dot: r._1, weight: Vh(n._1.progress) }) : x;
    }
    if (e.tag === "Nothing")
      return x;
    f();
  }
  return x;
}, Kh = {
  nodes: I,
  edges: I,
  tokens: I,
  camera: { center: { x: 0, y: 0 }, zoom: 1 },
  frameTitle: "",
  staticKind: Yo,
  visited: I,
  nodeFadeAlpha: I,
  nodeLabelFadeAlpha: I,
  edgeFadeAlpha: I,
  nodeInvert: I
}, Mh = { nodes: I, edges: I, chipExtras: I, edgeLabels: I }, jh = {
  segment: {
    startT: 0,
    endT: 0,
    path: [],
    layout: Mh,
    placement: tc,
    windows: [],
    spans: [],
    keyframes: I,
    initialKeyframe: "",
    edgeEndpoints: I
  },
  state: Kh,
  bgAlpha: 1,
  blur: 0,
  minis: [],
  role: Si
}, Pi = (t) => {
  const n = t.levels.length - 1 | 0;
  return n >= 0 && n < t.levels.length ? t.levels[n] : jh;
}, Zh = (t) => (n) => {
  const e = Eh(n)(t.nodes);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just") {
    const r = e._1, o = (i) => i.x >= r.x - 1 && i.x <= r.x + r.w + 1 && i.y >= r.y - 1 && i.y <= r.y + r.h + 1;
    return yt((i) => (() => {
      if (0 < i._2.length) {
        const u = i._2.length - 1 | 0;
        return o(i._2[0]) || u >= 0 && u < i._2.length && o(i._2[u]);
      }
      const s = i._2.length - 1 | 0;
      return s >= 0 && s < i._2.length && o(i._2[s]);
    })() ? v("Just", i._1) : x)(Sh(t.edges));
  }
  f();
}, tp = (t) => (n) => {
  const e = $s(t)(n);
  if (e.tag === "AtKeyframe")
    return Qs(t)(e._1);
  if (e.tag === "InTransition")
    return Pn(A.compare, Cn, Qs(t)(e._1), Qs(t)(e._2));
  f();
}, np = (t) => (n) => {
  const e = $s(t)(n);
  if (e.tag === "AtKeyframe")
    return Ws(t)(e._1);
  if (e.tag === "InTransition")
    return Pn(A.compare, Cn, Ws(t)(e._1), Ws(t)(e._2));
  f();
}, ep = (t) => (n) => {
  const e = t.w / he(1e-4)(n.zoom), r = t.h / he(1e-4)(n.zoom);
  return {
    ...n,
    center: {
      x: e >= t.w ? t.x + t.w / 2 : na(t.x + e / 2)(t.x + t.w - e / 2)(n.center.x),
      y: r >= t.h ? t.y + t.h / 2 : na(t.y + r / 2)(t.y + t.h - r / 2)(n.center.y)
    }
  };
}, rp = (t) => ep((() => {
  const n = Kn(t.layout), e = n.x * t.placement.scale + t.placement.tx, r = n.y * t.placement.scale + t.placement.ty;
  return { x: e, y: r, w: (n.x + n.w) * t.placement.scale + t.placement.tx - e, h: (n.y + n.h) * t.placement.scale + t.placement.ty - r };
})()), op = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : he(0)(Fr(1)((n - t.startT) / e));
}, Ai = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : he(0)(Fr(1)((n - t.startT) / e));
}, ip = (t) => (n) => (e) => (r) => (o) => {
  const i = $0(n)(e)((s) => s.target.tag === "EdgeWindow" && s.target._1 === o);
  if (i.tag === "Just") {
    const s = vo(t.timing.edgeEasing)(Ai(i._1)(e)), u = i._1.target.tag === "EdgeWindow" ? i._1.target._2 : gu("Extend", s0);
    if (u.tag === "Retract")
      return bi("Retracting", u._1, s);
    if (u.tag === "Extend")
      return bi("Extending", u._1, s);
    f();
  }
  if (i.tag === "Nothing")
    return zh(n)(e)(o) || Dh(n)(e)(o) ? Bs : Ch(o)(r) ? Od : Bs;
  f();
}, sp = (t) => (n) => (e) => {
  const r = np(n)(e);
  return h0(q((o) => k(o, ip(t)(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return I;
      if (i.tag === "Node")
        return zt("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return St(On.foldr, o(n.layout.edges));
  })()));
}, up = (t) => (n) => (e) => (r) => {
  const o = $0(t)(n)((i) => i.target.tag === "NodeWindow" && i.target._1 === r);
  if (o.tag === "Just") {
    const i = Ai(o._1)(n), s = o._1.target.tag === "NodeWindow" ? o._1.target._2 : g0;
    if (s === "PlopIn")
      return ki("PloppingIn", i);
    if (s === "PlopOut")
      return ki("PloppingOut", i);
    f();
  }
  if (o.tag === "Nothing")
    return qh(t)(n)(r) || Oh(t)(n)(r) ? Fs : Ph(r)(e) ? Dd : Fs;
  f();
}, cp = (t) => (n) => (e) => {
  const r = tp(n)(e);
  return Ah(q((o) => k(o, up(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return I;
      if (i.tag === "Node")
        return zt("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return St(On.foldr, o(n.layout.nodes));
  })()));
}, ap = (t) => (n) => (e) => n.target.tag === "TokenWindow" ? k(
  n.target._1,
  e < n.startT ? Is : e >= n.endT ? Kc : Li(
    "Travelling",
    {
      edge: n.target._2,
      direction: n.target._3,
      progress: vo(t.timing.tokenEasing)(Ai(n)(e)),
      labels: n.target._6,
      source: n.target._4,
      target: n.target._5,
      holdPre: n.target._7,
      holdPost: n.target._8
    }
  )
) : n.target.tag === "FillWindow" ? k(
  n.target._1,
  e < n.startT ? Is : e >= n.endT ? Kc : Li("Filling", { node: n.target._2, progress: Ai(n)(e), labels: n.target._3 })
) : k("", Is), fp = (t) => (n) => (e) => Gh(q((r) => ap(t)(r)(e))(ft(
  (r) => r.target.tag === "TokenWindow" || r.target.tag === "FillWindow",
  n
))), gp = (t) => (n) => (e) => ({
  nodes: cp()(n)(e),
  edges: sp(t)(n)(e),
  tokens: fp(t)(n.windows)(e),
  camera: e0(t.cameraConfig)(n.layout)(t.cameraSpans)(e),
  frameTitle: Yh(n)(e),
  staticKind: Xh(n)(e),
  visited: Hh(t.timing.hatchHold)(n.windows)(e),
  nodeFadeAlpha: I,
  nodeLabelFadeAlpha: I,
  edgeFadeAlpha: I,
  nodeInvert: I
}), Qr = (t) => (n) => (e) => (r) => ({ segment: e, state: gp(t)(e)(n), bgAlpha: 1, blur: 0, minis: lp(t)(n)(e), role: r }), lp = (t) => (n) => (e) => yt((r) => {
  const o = Ci(t)(Qt(e.path)(r))(n);
  if (o.tag === "Just")
    return v("Just", { ...Qr(t)(du(o._1.startT)(o._1.endT - 1e-4)(n))(o._1)(p0), bgAlpha: 0 });
  if (o.tag === "Nothing")
    return x;
  f();
})((() => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return I;
    if (o.tag === "Node")
      return zt("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
    f();
  };
  return St(On.foldr, r(e.layout.nodes));
})()), _p = (t) => (n) => (e) => kf(
  x,
  Nf,
  (r) => r.direction === "DiveIn" && ko.eq(r.parentPath)(n.path) && e >= r.startT - 0.7 && e < r.startT ? v("Just", { node: r.node, phase: (e - (r.startT - 0.7)) / 0.7 }) : x,
  t.dives
), dp = (t) => (n) => (e) => (r) => {
  const o = _p(t)(n)(e);
  if (o.tag === "Just") {
    const i = Zn(3.141592653589793 * o._1.phase * 3);
    return {
      ...r,
      state: { ...r.state, nodeInvert: zt("Node", 1, 1, o._1.node, 1 * i * i, I, I) }
    };
  }
  if (o.tag === "Nothing")
    return r;
  f();
}, m0 = (t) => (n) => yt((e) => {
  const r = Mt((o) => o.direction === "DiveIn" && ko.eq(o.childPath)((() => {
    const i = e.length + 1 | 0;
    return i < 1 ? [] : Lt(0, i, n);
  })()))(t.dives);
  if (r.tag === "Just") {
    const o = Ci(t)(e)(r._1.startT - 1e-4);
    if (o.tag === "Just")
      return v(
        "Just",
        (() => {
          const i = Qr(t)(r._1.startT - 1e-4)(o._1)(p0);
          return { ...i, state: { ...i.state, nodeFadeAlpha: zt("Node", 1, 1, r._1.node, 0, I, I) } };
        })()
      );
    if (o.tag === "Nothing")
      return x;
    f();
  }
  if (r.tag === "Nothing")
    return x;
  f();
})(Qh(n)), y0 = (t) => (n) => {
  const e = ft((o) => n >= o.startT && n < o.endT, t.segments), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r] : Rh(t);
}, hp = (t) => (n) => (e) => {
  const r = op(e)(n), o = Ci(t)(e.parentPath)((() => {
    if (e.direction === "DiveIn")
      return e.startT - 1e-4;
    if (e.direction === "DiveOut")
      return e.endT - 1e-4;
    f();
  })()), i = Ci(t)(e.childPath)((() => {
    if (e.direction === "DiveIn")
      return e.endT;
    if (e.direction === "DiveOut")
      return e.startT - 1e-4;
    f();
  })()), s = (() => {
    if (e.direction === "DiveIn")
      return vo(wi)(r);
    if (e.direction === "DiveOut")
      return 1 - vo(wi)(r);
    f();
  })(), u = 1 - he(0)(Fr(1)((s - 0.55) / 0.3)), c = 1 - he(0)(Fr(1)((s - 0.1) / 0.25)), a = 1 - he(0)(Fr(1)((s - 0.8) / 0.2)), g = (d) => {
    const l = Qr(t)((() => {
      if (e.direction === "DiveIn")
        return e.startT - 1e-4;
      if (e.direction === "DiveOut")
        return e.endT - 1e-4;
      f();
    })())(d)(Ih);
    return {
      ...Fh(Zh(d.layout)(e.node))(c)({
        ...l,
        state: {
          ...l.state,
          nodeFadeAlpha: zt("Node", 1, 1, e.node, u, I, I),
          nodeLabelFadeAlpha: zt("Node", 1, 1, e.node, c, I, I)
        }
      }),
      minis: ft((h) => !ko.eq(h.segment.path)(e.childPath), l.minis),
      bgAlpha: a
    };
  }, _ = 0 + 1 * he(0)(Fr(1)((s - 0.1) / 0.5));
  return [
    ...m0(t)(e.parentPath),
    ...(() => {
      if (o.tag === "Just") {
        if (i.tag === "Just")
          return [
            g(o._1),
            {
              ...Qr(t)((() => {
                if (e.direction === "DiveIn")
                  return e.endT;
                if (e.direction === "DiveOut")
                  return e.startT - 1e-4;
                f();
              })())(i._1)(Si),
              bgAlpha: _
            }
          ];
        if (i.tag === "Nothing")
          return [g(o._1)];
        f();
      }
      if (o.tag === "Nothing")
        return [Qr(t)(n)(y0(t)(n))(Si)];
      f();
    })()
  ];
}, pp = (t) => (n) => {
  const e = yt(Uh(t))((() => {
    const r = (o, i) => {
      if (o.tag === "Leaf")
        return i;
      if (o.tag === "Node")
        return r(o._5, Xt("Cons", o._4, r(o._6, i)));
      f();
    };
    return St(Ut.foldr, r(n.tokens, Vt));
  })());
  return 0 < e.length ? v("Just", e[0]) : x;
}, $p = (t) => (n) => {
  const e = pp(t)(n);
  if (e.tag === "Nothing")
    return n.camera;
  if (e.tag === "Just")
    return Bh(t)(n.camera)(e._1.dot)(e._1.weight);
  f();
}, mp = (t) => (n) => t.placement.scale === 1 && t.placement.tx === 0 && t.placement.ty === 0 ? $p(t.layout)(n) : n.camera, yp = (t) => (n) => Mt((e) => n >= e.startT && n < e.endT)(t.dives), Np = (t) => (n) => {
  const e = y0(t)(n), r = Qr(t)(n)(e)(Si), o = t.dives.length !== 0, i = e0(t.cameraConfig)(t.layout)(t.cameraSpans)(n), s = rp(e)(mp(e)({ ...r.state, camera: i })), u = dp(t)(e)(n)({ ...r, state: { ...r.state, camera: s } }), c = m0(t)(e.path), a = yp(t)(n);
  if (a.tag === "Just")
    return { levels: hp(t)(n)(a._1), camera: i, rootLayout: t.layout, hasDives: o, diving: !0 };
  if (a.tag === "Nothing")
    return { levels: Qt(c)(u), camera: s, rootLayout: t.layout, hasDives: o, diving: !1 };
  f();
}, N0 = (t) => t, x0 = /* @__PURE__ */ N0("RunText"), xp = /* @__PURE__ */ N0("RunCode"), J0 = (t) => (n) => (e) => n.length === 0 ? e : Qt(e)({ style: t, text: br(n) }), Jp = (t) => ({
  style: (() => {
    if (t.style === "RunText")
      return xp;
    if (t.style === "RunCode")
      return x0;
    f();
  })(),
  buf: [],
  runs: J0(t.style)(t.buf)(t.runs)
}), Tp = (t) => (n) => 0 < n.length ? { ...t, buf: Qt(t.buf)(n[0]) } : { ...t, buf: Qt(t.buf)("\\") }, vp = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, c = Wt((a) => x, (a) => (g) => v("Just", { head: a, tail: g }), r);
    if (c.tag === "Nothing") {
      o = !1, i = s;
      continue;
    }
    if (c.tag === "Just") {
      if (c._1.head === "\\") {
        e = Tp(s)(c._1.tail), r = Lt(1, c._1.tail.length, c._1.tail);
        continue;
      }
      if (c._1.head === "`") {
        e = Jp(s), r = c._1.tail;
        continue;
      }
      e = { ...s, buf: Qt(s.buf)(c._1.head) }, r = c._1.tail;
      continue;
    }
    f();
  }
  return i;
}, T0 = (t) => {
  const n = vp({ style: x0, buf: [], runs: [] })(kr(t));
  return J0(n.style)(n.buf)(n.runs);
};
let ri = null;
function wp() {
  return ri || (typeof document > "u" ? null : (ri = document.createElement("canvas").getContext("2d"), ri));
}
const ea = /* @__PURE__ */ new Map(), bp = (t) => (n) => (e) => (r) => () => {
  const o = `${e} ${n}px ${t}|${r}`, i = ea.get(o);
  if (i !== void 0) return i;
  const s = wp();
  if (!s)
    return r.length * n * 0.62;
  s.font = `${e} ${n}px ${t}`;
  const u = s.measureText(r).width;
  return ea.set(o, u), u;
}, kp = wr.traverse(rs), Lp = /* @__PURE__ */ J(Vr)(0), Mr = /* @__PURE__ */ (() => {
  const t = je(`\r
`)(" "), n = je(`
`)(" "), e = (() => {
    const r = je("\r")(" "), o = (() => {
      const i = je("	")(" ");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), v0 = (t) => (n) => {
  const e = kp((r) => {
    const o = (() => {
      if (r.style === "RunText")
        return t.text;
      if (r.style === "RunCode")
        return t.code;
      f();
    })();
    return bp(o.family)(o.size)(o.weight)(Mr(r.text));
  })(T0(Mr(n)));
  return () => {
    const r = e();
    return Lp(r);
  };
}, Ep = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: "500" }, Sp = { family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", size: 11, weight: "400" }, w0 = { text: Ep, code: Sp }, Cp = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Pr = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Pp = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ap = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Gp = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, ra = (t) => br(wn(hr((n) => n === " ")(wn(hr((n) => n === " ")(kr(t)).rest)).rest)), Ip = (t) => J((n) => (e) => e._1 > 0 && (e._2 === " " || e._2 === "-" || e._2 === "_" || e._2 === ".") ? v("Just", e._1) : n)(x)(Bt(qe)(t)), hu = (t) => (n) => {
  if (t <= 0)
    return [n];
  if (ur(n) <= t)
    return [n];
  const e = kr(n), r = t < 1 ? [] : Lt(0, t, e), o = Ip(r);
  if (o.tag === "Just") {
    const i = ra(Wc(!(o._1 >= 0 && o._1 < r.length) || r[o._1] === " " ? o._1 : o._1 + 1 | 0)(n)), s = ra(No(o._1 + 1 | 0)(n));
    return s === "" ? [i] : [i, ...hu(t)(s)];
  }
  if (o.tag === "Nothing") {
    const i = Wc(t)(n), s = No(t)(n);
    return s === "" ? [i] : [i, ...hu(t)(s)];
  }
  f();
}, Fp = { cellW: 7, cellH: 3, maxLineWidth: 20 }, Bp = (t) => (n) => {
  const e = q((i) => k(
    (() => {
      if (i.label.tag === "Just")
        return i.label._1;
      if (i.label.tag === "Nothing")
        return i.id;
      f();
    })(),
    i
  ))(n.nodes), r = Pr(1)(Fe(
    (Pp(t.maxLineWidth)(J((i) => (s) => Pr(i)(ur(s._1)))(0)(e)) + 2 | 0) + t.cellW | 0,
    t.cellW
  )), o = (r * t.cellW | 0) - 1 | 0;
  return {
    ...n,
    nodes: q((i) => {
      if (!(i._2.size._1 === 1 && i._2.size._2 === 1))
        return i._2;
      const s = Tt(_s(`
`)(i._1))(hu(o)), u = J((a) => (g) => Pr(a)(ur(g)))(0)(s), c = i._2.shape === "Cylinder" ? Pr(1)(Fe((u + 2 | 0) + t.cellW | 0, t.cellW)) : r;
      return {
        ...i._2,
        size: k(
          rt(u > o ? Fe((u + 2 | 0) + t.cellW | 0, t.cellW) : c),
          rt(Pr(1)(Fe(s.length + t.cellH | 0, t.cellH)) + (i._2.shape === "Cylinder" || i._2.shape === "Document" ? 1 : 0) | 0)
        )
      };
    })(e)
  };
}, Rp = (t) => (n) => (e) => ({
  ...e,
  nodes: q((r) => {
    const o = Gp(r.id)(n);
    if (o.tag === "Nothing")
      return r;
    if (o.tag === "Just")
      return {
        ...r,
        size: k(
          Ap(r.size._1)(rt(Pr(1)($n(os(r.shape === "Cylinder" ? (o._1 + 0) / t : (o._1 + 32) / t))))),
          r.size._2
        )
      };
    f();
  })(e.nodes)
}), Qp = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Wp = (t) => {
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
        let h = d, $ = l, p = !0, m;
        for (; p; ) {
          const y = h, N = $;
          if (y >= n) {
            p = !1, m = N;
            continue;
          }
          if (a >= 0 && a < t.length) {
            if (y >= 0 && y < t.length) {
              h = y + 1 | 0, $ = (() => {
                const T = t[a].position, w = t[a].size, b = t[y].position, L = t[y].size;
                return T._1 < b._1 + L._1 && b._1 < T._1 + w._1 && T._2 < b._2 + L._2 && b._2 < T._2 + w._2;
              })() ? N + 1 | 0 : N;
              continue;
            }
            h = y + 1 | 0, $ = N;
            continue;
          }
          p = !1, m = N;
        }
        return m;
      };
      i = a + 1 | 0, s = _(a + 1 | 0)(g);
    }
    return c;
  })(0)(0);
}, oa = (t) => J((n) => (e) => n + A_(e.start)(e.end))(0)(t.segments), Hp = (t) => (n) => (e) => ({
  crossingCount: J((r) => (o) => r + o.jumps.length | 0)(0)(n),
  bendCount: J((r) => (o) => r + o.bends.length | 0)(0)(n),
  totalEdgeLength: J((r) => (o) => r + oa(o))(0)(n),
  maxEdgeLength: J((r) => (o) => Qp(r)(oa(o)))(0)(n),
  nodeOverlapCount: Wp(t),
  constraintViolations: e,
  jumpCount: J((r) => (o) => r + o.jumps.length | 0)(0)(n)
}), ac = (t) => t, jt = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = ot.compare(t)(s._3);
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
}, fc = /* @__PURE__ */ ac("LEFT"), Dp = /* @__PURE__ */ ac("RIGHT"), b0 = /* @__PURE__ */ ac("UNDEFINED"), Op = {
  eq: (t) => (n) => t === "LEFT" ? n === "LEFT" : t === "RIGHT" ? n === "RIGHT" : t === "UP" ? n === "UP" : t === "DOWN" ? n === "DOWN" : t === "UNDEFINED" && n === "UNDEFINED"
}, qp = {
  compare: (t) => (n) => {
    if (t === "LEFT")
      return n === "LEFT" ? An : Jn;
    if (n === "LEFT")
      return Tn;
    if (t === "RIGHT")
      return n === "RIGHT" ? An : Jn;
    if (n === "RIGHT")
      return Tn;
    if (t === "UP")
      return n === "UP" ? An : Jn;
    if (n === "UP")
      return Tn;
    if (t === "DOWN")
      return n === "DOWN" ? An : Jn;
    if (n === "DOWN")
      return Tn;
    if (t === "UNDEFINED" && n === "UNDEFINED")
      return An;
    f();
  },
  Eq0: () => Op
}, zp = (t) => (e) => {
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
}, Yp = { x: 0, y: 0 }, ne = (t) => (n) => (e) => {
  const r = jt(t)(e.cNodes);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cNodes: U(ot)(t)(n(r._1))(e.cNodes) };
  f();
}, po = (t) => (n) => (e) => {
  const r = jt(t)(e.cGroups);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cGroups: U(ot)(t)(n(r._1))(e.cGroups) };
  f();
}, Xp = (t) => J((n) => (e) => ne(e)((r) => ({ ...r, hitboxPreCompaction: r.hitbox }))(n))(t)(t.cNodeOrder), Vp = (t) => {
  const n = J((e) => (r) => {
    const o = jt(r)(t.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return J((i) => (s) => kt(ot)(un)(s)([r])(i))(e)(o._1.constraints);
    f();
  })(I)(t.cNodeOrder);
  return J((e) => (r) => ne(r)((o) => ({
    ...o,
    constraints: (() => {
      const i = jt(r)(n);
      if (i.tag === "Nothing")
        return [];
      if (i.tag === "Just")
        return i._1;
      f();
    })()
  }))(e))(t)(t.cNodeOrder);
}, Up = (t) => (n) => ne(t)((e) => ({ ...e, ignoreSpacing: { left: e.ignoreSpacing.left || n.left, right: e.ignoreSpacing.right || n.right, up: e.ignoreSpacing.up || n.up, down: e.ignoreSpacing.down || n.down } })), Kp = (t) => {
  const n = J((e) => (r) => po(r)((o) => ({ ...o, outDegree: o.outDegreeReal }))(e))(t)(t.cGroupOrder);
  return J((e) => (r) => ne(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder);
}, le = { left: !1, right: !1, up: !1, down: !1 }, Mp = { horizontalSpacing: (t) => (n) => 0, verticalSpacing: (t) => (n) => 0 }, gc = (t) => J((n) => (e) => {
  const r = jt(e)(n.cGroups);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just") {
    const o = J((s) => (u) => {
      const c = jt(u)(n.cNodes);
      if (c.tag === "Nothing")
        return s;
      if (c.tag === "Just") {
        if (s.tag === "Nothing")
          return v("Just", u);
        if (s.tag === "Just") {
          const a = jt(s._1)(n.cNodes);
          if (a.tag === "Nothing")
            return v("Just", u);
          if (a.tag === "Just")
            return c._1.hitbox.x < a._1.hitbox.x ? v("Just", u) : v("Just", s._1);
        }
      }
      f();
    })(x)(r._1.cNodes), i = po(e)((s) => ({ ...s, reference: o }))(n);
    if (o.tag === "Nothing")
      return i;
    if (o.tag === "Just") {
      const s = jt(o._1)(i.cNodes);
      if (s.tag === "Nothing")
        return i;
      if (s.tag === "Just") {
        const u = s._1;
        return J((c) => (a) => ne(a)((g) => ({ ...g, cGroupOffset: { x: g.hitbox.x - u.hitbox.x, y: g.hitbox.y - u.hitbox.y } }))(c))(i)(r._1.cNodes);
      }
    }
  }
  f();
})(t)(t.cGroupOrder), jn = (t) => gc({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return I;
      if (e.tag === "Node")
        return zt("Node", e._1, e._2, e._3, { ...e._4, hitbox: { ...e._4.hitbox, x: -e._4.hitbox.x - e._4.hitbox.width } }, n(e._5), n(e._6));
      f();
    };
    return n(t.cNodes);
  })()
}), me = (t) => gc({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return I;
      if (e.tag === "Node")
        return zt(
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
}), k0 = (t) => {
  const n = J((e) => (r) => po(r)((o) => ({ ...o, outDegree: 0, outDegreeReal: 0, incomingConstraints: [] }))(e))(t)(t.cGroupOrder);
  return J((e) => (r) => {
    const o = jt(r)(e.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just") {
      if (o._1.cGroup.tag === "Nothing")
        return e;
      if (o._1.cGroup.tag === "Just") {
        const i = o._1.cGroup._1;
        return J((s) => (u) => {
          const c = jt(u)(s.cNodes);
          if (c.tag === "Nothing")
            return s;
          if (c.tag === "Just")
            return c._1.cGroup.tag === "Just" && c._1.cGroup._1 !== i ? po(c._1.cGroup._1)((a) => ({ ...a, outDegree: a.outDegree + 1 | 0, outDegreeReal: a.outDegreeReal + 1 | 0 }))(po(i)((a) => Yn(zr)(u)(a.incomingConstraints) ? a : { ...a, incomingConstraints: [...a.incomingConstraints, u] })(s)) : s;
          f();
        })(e)(o._1.constraints);
      }
    }
    f();
  })(n)(n.cNodeOrder);
}, oi = (t) => {
  const n = Vp(t.cGraph);
  return { ...t, cGraph: k0(J((e) => (r) => ne(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder)) };
}, jp = (t) => (n) => J((e) => (r) => {
  if (t === "LEFT" || t === "UP") {
    const i = r._2;
    return ne(r._1)((s) => ({ ...s, constraints: [...s.constraints, i] }))(e);
  }
  const o = r._1;
  return ne(r._2)((i) => ({ ...i, constraints: [...i.constraints, o] }))(e);
})(n)(t === "LEFT" || t === "RIGHT" ? n.predefinedHorizontalConstraints : n.predefinedVerticalConstraints), ge = (t) => {
  const n = {
    ...t,
    cGraph: jp(t.direction)({
      ...t.cGraph,
      cNodes: (() => {
        const e = (r) => {
          if (r.tag === "Leaf")
            return I;
          if (r.tag === "Node")
            return zt("Node", r._1, r._2, r._3, { ...r._4, constraints: [] }, e(r._5), e(r._6));
          f();
        };
        return e(t.cGraph.cNodes);
      })()
    })
  };
  return {
    ...n,
    cGraph: k0((() => {
      if (n.constraintAlgorithm.tag === "Nothing")
        return n.cGraph;
      if (n.constraintAlgorithm.tag === "Just")
        return n.constraintAlgorithm._1(n);
      f();
    })())
  };
}, Zp = (t) => (n) => (e) => {
  const r = { ...e, direction: n };
  if (t === "UNDEFINED")
    return n === "LEFT" ? ge(r) : n === "RIGHT" ? ge({ ...r, cGraph: jn(r.cGraph) }) : n === "UP" ? ge({ ...r, cGraph: me(r.cGraph) }) : n === "DOWN" ? ge({ ...r, cGraph: jn(me(r.cGraph)) }) : r;
  if (t === "LEFT")
    return n === "RIGHT" ? oi({ ...r, cGraph: jn(r.cGraph) }) : n === "UP" ? ge({ ...r, cGraph: me(r.cGraph) }) : n === "DOWN" ? ge({ ...r, cGraph: jn(me(r.cGraph)) }) : r;
  if (t === "RIGHT")
    return n === "LEFT" ? oi({ ...r, cGraph: jn(r.cGraph) }) : n === "UP" ? ge({ ...r, cGraph: me(jn(r.cGraph)) }) : n === "DOWN" ? ge({ ...r, cGraph: jn(me(jn(r.cGraph))) }) : r;
  if (t === "UP")
    return n === "LEFT" ? ge({ ...r, cGraph: me(r.cGraph) }) : n === "RIGHT" ? ge({ ...r, cGraph: jn(me(r.cGraph)) }) : n === "DOWN" ? oi({ ...r, cGraph: jn(r.cGraph) }) : r;
  if (t === "DOWN")
    return n === "LEFT" ? ge({ ...r, cGraph: me(jn(r.cGraph)) }) : n === "RIGHT" ? ge({ ...r, cGraph: jn(me(jn(r.cGraph))) }) : n === "UP" ? oi({ ...r, cGraph: jn(r.cGraph) }) : r;
  f();
}, L0 = (t) => (n) => n.finished || !zp(t)(n.cGraph.supportedDirections) || (t === "LEFT" ? n.direction === "LEFT" : t === "RIGHT" ? n.direction === "RIGHT" : t === "UP" ? n.direction === "UP" : t === "DOWN" ? n.direction === "DOWN" : t === "UNDEFINED" && n.direction === "UNDEFINED") ? n : Zp(n.direction)(t)(n), t$ = (t) => {
  if (t.finished)
    return t;
  const n = t.direction === "UNDEFINED" ? L0(fc)(t) : t, e = { ...n, cGraph: Kp(n.cGraph) };
  if (e.compactionAlgorithm.tag === "Nothing")
    return e;
  if (e.compactionAlgorithm.tag === "Just")
    return e.compactionAlgorithm._1(e);
  f();
}, E0 = (t) => (n) => (e) => {
  const r = jt(t)(e.cNodes), o = jt(n)(e.cGroups);
  return r.tag === "Just" && o.tag === "Just" ? (() => {
    if (r._1.cGroup.tag === "Nothing")
      return !1;
    if (r._1.cGroup.tag === "Just")
      return !0;
    f();
  })() && (r._1.cGroup.tag === "Nothing" || !(r._1.cGroup.tag === "Just" && r._1.cGroup._1 === n)) ? e : {
    ...e,
    cNodes: U(ot)(t)({ ...r._1, cGroup: v("Just", n) })(e.cNodes),
    cGroups: U(ot)(n)({
      ...o._1,
      cNodes: Yn(zr)(t)(o._1.cNodes) ? o._1.cNodes : [...o._1.cNodes, t],
      reference: (() => {
        if (o._1.reference.tag === "Nothing")
          return v("Just", t);
        if (o._1.reference.tag === "Just")
          return v("Just", o._1.reference._1);
        f();
      })()
    })(e.cGroups)
  } : e;
}, S0 = (t) => (n) => ({
  id: n.nextCNodeId,
  graph: {
    ...n,
    cNodes: U(ot)(n.nextCNodeId)({
      id: n.nextCNodeId,
      origin: t.origin,
      kind: t.kind,
      cGroup: x,
      cGroupOffset: Yp,
      hitbox: t.hitbox,
      hitboxPreCompaction: t.hitbox,
      constraints: [],
      startPos: -1e308,
      ignoreSpacing: le
    })(n.cNodes),
    cNodeOrder: [...n.cNodeOrder, n.nextCNodeId],
    nextCNodeId: n.nextCNodeId + 1 | 0
  }
}), lc = (t) => (n) => {
  const e = n.nextCGroupId;
  return {
    id: e,
    graph: J((r) => (o) => E0(o)(e)(r))({
      ...n,
      cGroups: U(ot)(e)({
        id: e,
        master: t.master,
        cNodes: [],
        startPos: -1e308,
        incomingConstraints: [],
        outDegree: 0,
        outDegreeReal: 0,
        reference: x,
        delta: 0,
        deltaNormalized: 0
      })(n.cGroups),
      cGroupOrder: [...n.cGroupOrder, e],
      nextCGroupId: e + 1 | 0
    })(t.nodes)
  };
}, n$ = (t) => J((n) => (e) => {
  const r = jt(e)(n.cNodes);
  return r.tag === "Just" && r._1.cGroup.tag === "Nothing" ? lc({ master: x, nodes: [e] })(n).graph : n;
})(t)(t.cNodeOrder), e$ = (t) => ({
  cGraph: Xp(n$(gc(t))),
  direction: b0,
  compactionAlgorithm: x,
  constraintAlgorithm: x,
  spacingsHandler: Mp,
  lockFun: x,
  finished: !1
}), r$ = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, o$ = (t) => (n) => {
  const e = ct.compare(t._1)(n._1);
  return e === "LT" ? Jn : e === "GT" ? Tn : ot.compare(t._2)(n._2);
}, i$ = /* @__PURE__ */ (() => {
  const t = oe.unfoldr(Se);
  return (n) => t(te("IterNode", n, Ee));
})(), ia = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = ot.compare(t)(s._3);
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
}, sa = (t) => t.kind.tag === "Nothing" ? !1 : t.kind.tag === "Just" && t.kind._1 === "vs", ua = (t) => t.kind.tag === "Nothing" || !(t.kind.tag === "Just" && t.kind._1 === "vs"), ms = (t) => (n) => o$(k(t.hitbox.x + t.hitbox.width / 2, t.id))(k(n.hitbox.x + n.hitbox.width / 2, n.id)), s$ = (t) => (n) => {
  const e = Nr(Yt, x, (r) => ms(t)(r) === "LT", n);
  if (e.tag === "Just") {
    const r = Ef(Yt, x, e._1, t, n);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return Qt(n)(t);
  f();
}, C0 = (t) => (n) => {
  const e = ft((o) => ms(o)(t) === "LT", n), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? v("Just", e[r]) : x;
}, u$ = (t) => (n) => {
  const e = s$(n)(t.intervals), r = Mt((i) => ms(n)(i) === "LT")(e), o = U(ot)(n.id)((() => {
    const i = C0(n)(e);
    return i.tag === "Just" ? v("Just", i._1.id) : x;
  })())(t.cand);
  return {
    ...t,
    intervals: e,
    cand: (() => {
      if (r.tag === "Just")
        return U(ot)(r._1.id)(v("Just", n.id))(o);
      if (r.tag === "Nothing")
        return o;
      f();
    })()
  };
}, c$ = (t) => (n) => {
  const e = ct.compare(t.low ? t.node.hitbox.y : t.node.hitbox.y + t.node.hitbox.height)(n.low ? n.node.hitbox.y : n.node.hitbox.y + n.node.hitbox.height);
  return e === "EQ" ? t.low ? t.low && !n.low ? Tn : An : n.low ? Jn : An : e;
}, a$ = (t) => J((n) => (e) => ne(e.id)((r) => ({ ...r, constraints: [] }))(n))(t)(yt((n) => jt(n)(t.cNodes))(t.cNodeOrder)), Hs = (t) => (n) => J((e) => (r) => {
  const o = jt(r._1)(e.cNodes);
  if (o.tag === "Just")
    return ne(r._1)((i) => ({ ...i, constraints: [...i.constraints, ...r._2] }))(e);
  if (o.tag === "Nothing")
    return e;
  f();
})(n)(i$(t)), P0 = (t) => (n) => n.kind.tag !== "Nothing" && n.kind.tag === "Just" && n.kind._1 === "vs" ? n.ignoreSpacing.up ? n.ignoreSpacing.down ? n : { ...n, hitbox: { ...n.hitbox, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t - 0.01, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t, height: n.hitbox.height + 2 * t } }, ca = (t) => (n) => (e) => J((r) => (o) => e(o) ? ne(o.id)(P0(t))(r) : r)(n)(yt((r) => jt(r)(n.cNodes))(n.cNodeOrder)), f$ = (t) => (n) => {
  const e = (r, o, i) => {
    const s = ne(i)(P0(t))(r);
    return o.length <= 1 ? s : J((u) => (c) => c === i ? u : ne(c)((a) => a.ignoreSpacing.up ? { ...a, hitbox: { ...a.hitbox, y: a.hitbox.y + t + 0.01, height: a.hitbox.height - t - 0.01 } } : a.ignoreSpacing.down ? { ...a, hitbox: { ...a.hitbox, height: a.hitbox.height - t - 0.01 } } : a)(u))(s)(o);
  };
  return J((r) => (o) => {
    if (o.master.tag === "Nothing")
      return 0 < o.cNodes.length ? e(r, o.cNodes, o.cNodes[0]) : r;
    if (o.master.tag === "Just")
      return e(r, o.cNodes, o.master._1);
    f();
  })(n)(yt((r) => jt(r)(n.cGroups))(n.cGroupOrder));
}, g$ = (t) => (n) => {
  const e = C0(n)(t.intervals), r = Mt((i) => ms(n)(i) === "LT")(t.intervals), o = e.tag === "Just" && (() => {
    const i = ia(n.id)(t.cand);
    return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === e._1.id)) && e._1.cGroup.tag === "Just" && n.cGroup.tag === "Just" && e._1.cGroup._1 !== n.cGroup._1;
  })() ? kt(ot)(un)(e._1.id)([n.id])(t.constraints) : t.constraints;
  return {
    ...t,
    constraints: r.tag === "Just" && (() => {
      const i = ia(r._1.id)(t.cand);
      return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === n.id)) && n.cGroup.tag === "Just" && r._1.cGroup.tag === "Just" && n.cGroup._1 !== r._1.cGroup._1;
    })() ? kt(ot)(un)(n.id)([r._1.id])(o) : o,
    intervals: ft((i) => i.id !== n.id, t.intervals)
  };
}, l$ = (t) => (n) => n.low ? u$(t)(n.node) : g$(t)(n.node), Ds = (t) => (n) => J(l$)({ intervals: [], cand: I, constraints: I })(Et(c$)(Tt(ft(
  t,
  yt((e) => jt(e)(n.cNodes))(n.cNodeOrder)
))((e) => [{ node: e, low: !0 }, { node: e, low: !1 }]))).constraints, _$ = (t) => (n) => {
  const e = r$(0)(t / 2 - 0.5), r = Hs(Ds(sa)(ca(e)(n)(sa)))(n), o = Hs(Ds(ua)(ca(e)(r)(ua)))(r);
  return Hs(Ds((i) => !0)(f$(e)(o)))(o);
}, d$ = (t) => (n) => _$(t)(a$(n.cGraph)), Gi = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, aa = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, _c = (t) => (n) => (e) => (r) => (o) => ({
  id: t,
  representedEdges: [o],
  affectedBends: [n, e],
  hitbox: { x: Gi(n._1)(e._1), y: Gi(n._2)(e._2), width: sr(n._1 - e._1), height: sr(n._2 - e._2) },
  ignoreSpacing: le,
  potentialGroupParents: (() => {
    if (r.tag === "Nothing")
      return [];
    if (r.tag === "Just")
      return [r._1];
    f();
  })(),
  aPort: x
}), h$ = (t) => (n) => {
  const e = Gi(t.hitbox.x)(n.hitbox.x), r = Gi(t.hitbox.y)(n.hitbox.y);
  return {
    ...t,
    representedEdges: [...t.representedEdges, ...n.representedEdges],
    affectedBends: [...t.affectedBends, ...n.affectedBends],
    potentialGroupParents: [...t.potentialGroupParents, ...n.potentialGroupParents],
    hitbox: {
      x: e,
      y: r,
      width: aa(t.hitbox.x + t.hitbox.width)(n.hitbox.x + n.hitbox.width) - e,
      height: aa(t.hitbox.y + t.hitbox.height)(n.hitbox.y + n.hitbox.height) - r
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
}, p$ = (t) => (n) => sr(t.hitbox.x - n.hitbox.x) <= 1e-4 && n.hitbox.y - (t.hitbox.y + t.hitbox.height) <= 1e-4 && t.hitbox.y - (n.hitbox.y + n.hitbox.height) <= 1e-4, $$ = (t) => (n) => sr(t.hitbox.x - n.hitbox.x) <= 1e-4 ? ct.compare(t.hitbox.y)(n.hitbox.y) : t.hitbox.x < n.hitbox.x ? Jn : Tn, A0 = (t, n) => ({ tag: t, _1: n }), dc = /* @__PURE__ */ en(A)(Ot), ys = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, fa = /* @__PURE__ */ (() => {
  const t = { eq: (e) => (r) => e._1 === r._1 && (e._2.tag === "Nothing" ? r._2.tag === "Nothing" : e._2.tag === "Just" && r._2.tag === "Just" && e._2._1 === r._2._1) }, n = {
    compare: (e) => (r) => {
      const o = A.compare(e._1)(r._1);
      if (o === "LT")
        return Jn;
      if (o === "GT")
        return Tn;
      if (e._2.tag === "Nothing")
        return r._2.tag === "Nothing" ? An : Jn;
      if (r._2.tag === "Nothing")
        return Tn;
      if (e._2.tag === "Just" && r._2.tag === "Just")
        return A.compare(e._2._1)(r._2._1);
      f();
    },
    Eq0: () => t
  };
  return J((e) => (r) => U(n)(r)()(e))(I);
})(), De = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, m$ = /* @__PURE__ */ J((t) => (n) => U(qp)(n)()(t))(I), Os = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = Yf.compare(t)(s._3);
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
}, y$ = (t) => (n) => {
  const e = dc(q((i) => k(i.id, i))(t)), r = yt((i) => ys(i)(e))(n), o = ot.compare((() => {
    const i = fa(q((s) => k(s.from.node, s.from.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })())((() => {
    const i = fa(q((s) => k(s.to.node, s.to.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })());
  if (o === "LT")
    return { ...le, left: !0, right: !1 };
  if (o === "GT")
    return { ...le, left: !1, right: !0 };
  if (o === "EQ")
    return le;
  f();
}, N$ = (t) => yt((n) => {
  if (n.direction === "V")
    return v("Just", { start: n.start, end: n.end });
  if (n.direction === "H")
    return x;
  f();
})(t.segments), ii = (t) => (n) => (e) => (r) => {
  if (r.tag === "Just") {
    const o = De(e)(n);
    if (o.tag === "Just") {
      const i = Mt((s) => s.id === r._1)(o._1);
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
}, x$ = (t) => (n) => (e) => {
  const r = S0({
    origin: v("Just", A0("SegmentOrigin", e)),
    kind: v("Just", "vs"),
    hitbox: e.hitbox
  })(n.cGraph), o = Up(r.id)(e.ignoreSpacing)(r.graph);
  return {
    ...n,
    cGraph: (() => {
      if (0 < e.potentialGroupParents.length) {
        const i = jt(e.potentialGroupParents[0])(o.cNodes);
        if (i.tag === "Just") {
          if (i._1.cGroup.tag === "Just")
            return E0(r.id)(i._1.cGroup._1)(o);
          if (i._1.cGroup.tag === "Nothing")
            return o;
          f();
        }
        if (i.tag === "Nothing")
          return o;
        f();
      }
      return lc({ master: v("Just", r.id), nodes: [r.id] })(o).graph;
    })(),
    edgeToCs: J((i) => (s) => kt(A)(un)(s)([r.id])(i))(n.edgeToCs)(e.representedEdges),
    lockMap: U(ot)(r.id)(y$(t)(e.representedEdges))(n.lockMap)
  };
}, J$ = (t) => (n) => (e) => {
  const r = Wt(
    (o) => x,
    (o) => (i) => v("Just", { head: o, tail: i }),
    Et($$)(n)
  );
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just") {
    const o = J((i) => (s) => p$(i.survivor)(s) ? { ...i, survivor: h$(i.survivor)(s) } : { survivor: s, merged: [...i.merged, i.survivor] })({ survivor: r._1.head, merged: [] })(r._1.tail);
    return J(x$(t))(e)([...o.merged, o.survivor]);
  }
  f();
}, T$ = (t) => ({
  cGraph: {
    cNodes: I,
    cNodeOrder: [],
    cGroups: I,
    cGroupOrder: [],
    supportedDirections: m$([b0, fc, Dp]),
    predefinedHorizontalConstraints: [],
    predefinedVerticalConstraints: [],
    nextCNodeId: 0,
    nextCGroupId: 0
  },
  nodeToC: I,
  edgeToCs: I,
  lockMap: I
}), v$ = (t) => {
  const n = rt(4);
  return { x: t.position._1 * n, y: t.position._2 * n, width: t.size._1 * n, height: t.size._2 * n };
}, w$ = (t) => (n) => (e) => J((r) => (o) => {
  const i = S0({ origin: v("Just", A0("NodeOrigin", o.node)), kind: x, hitbox: v$(o) })(r.cGraph), s = De(o.node)(t), u = (() => {
    if (s.tag === "Nothing")
      return k(0, 0);
    if (s.tag === "Just")
      return s._1;
    f();
  })();
  return {
    ...r,
    cGraph: lc({ master: v("Just", i.id), nodes: [i.id] })(i.graph).graph,
    nodeToC: U(A)(o.node)(i.id)(r.nodeToC),
    lockMap: U(ot)(i.id)((() => {
      const c = u._1 - u._2 | 0;
      return c < 0 ? { ...le, left: !0 } : c > 0 ? { ...le, right: !0 } : le;
    })())(r.lockMap)
  };
})(e)(n), b$ = (t) => J((n) => (e) => kt(A)((r) => (o) => k(
  r._1 + o._1 | 0,
  r._2 + o._2 | 0
))(e.to.node)(k(1, 0))(kt(A)((r) => (o) => k(r._1 + o._1 | 0, r._2 + o._2 | 0))(e.from.node)(k(
  0,
  1
))(n)))(I)(t), k$ = (t) => J((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? U(A)(e.origin._1._1)(e.hitbox.x)(n) : n)(I)(yt((n) => jt(n)(t.cNodes))(t.cNodeOrder)), L$ = (t) => J((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? U(A)(e.origin._1._1)(e.hitbox.x - e.hitboxPreCompaction.x)(n) : n)(I)(yt((n) => jt(n)(t.cNodes))(t.cNodeOrder)), E$ = (t) => J((n) => (e) => {
  if (e.origin.tag === "Just" && e.origin._1.tag === "SegmentOrigin") {
    const r = e.hitbox.x - e.hitboxPreCompaction.x;
    return J((o) => (i) => U(Yf)(i)(r)(o))(n)(e.origin._1._1.affectedBends);
  }
  return n;
})(I)(yt((n) => jt(n)(t.cNodes))(t.cNodeOrder)), G0 = (t) => {
  const n = dc(q((e) => k(e.id, e))(t.edges));
  return yt((e) => {
    const r = ys(e.edge)(n);
    if (r.tag === "Just")
      return e.reversed ? v(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.to.node,
          tgt: r._1.from.node,
          srcSide: ii(Ae)(t.ports)(r._1.to.node)(r._1.to.port),
          tgtSide: ii(Ge)(t.ports)(r._1.from.node)(r._1.from.port),
          path: e
        }
      ) : v(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.from.node,
          tgt: r._1.to.node,
          srcSide: ii(Ae)(t.ports)(r._1.from.node)(r._1.from.port),
          tgtSide: ii(Ge)(t.ports)(r._1.to.node)(r._1.to.port),
          path: e
        }
      );
    if (r.tag === "Nothing")
      return x;
    f();
  })(t.paths);
}, S$ = (t) => (n) => {
  const e = Tt(n)((r) => {
    if (r.src === r.tgt)
      return [];
    if ((r.srcSide === "North" || r.srcSide === "South") && (r.tgtSide === "North" || r.tgtSide === "South"))
      return [];
    const o = De(r.tgt)(t.nodeToC), i = (() => {
      if (o.tag === "Just")
        return jt(o._1)(t.cGraph.cNodes);
      if (o.tag === "Nothing")
        return x;
      f();
    })(), s = De(r.src)(t.nodeToC), u = (() => {
      if (s.tag === "Just")
        return jt(s._1)(t.cGraph.cNodes);
      if (s.tag === "Nothing")
        return x;
      f();
    })(), c = (() => {
      if (u.tag === "Just") {
        if (i.tag === "Just") {
          if (u._1.cGroup.tag === "Just") {
            if (i._1.cGroup.tag === "Just")
              return v("Just", { srcGroup: u._1.cGroup._1, tgtGroup: i._1.cGroup._1, delta: 0, weight: 100 });
            if (i._1.cGroup.tag === "Nothing")
              return x;
            f();
          }
          if (u._1.cGroup.tag === "Nothing")
            return x;
          f();
        }
        if (i.tag === "Nothing")
          return x;
        f();
      }
      if (u.tag === "Nothing")
        return x;
      f();
    })(), a = (l) => (h) => ($) => {
      if (u.tag === "Just") {
        if (u._1.cGroup.tag === "Just") {
          if ($.cGroup.tag === "Just")
            return l($.hitbox.x) && $.cGroup._1 !== u._1.cGroup._1 ? v("Just", h($.cGroup._1)(u._1.cGroup._1)) : x;
          if ($.cGroup.tag === "Nothing")
            return x;
          f();
        }
        if (u._1.cGroup.tag === "Nothing")
          return x;
        f();
      }
      if (u.tag === "Nothing")
        return x;
      f();
    }, g = yt((l) => jt(l)(t.cGraph.cNodes))((() => {
      const l = ys(r.edgeId)(t.edgeToCs);
      if (l.tag === "Nothing")
        return [];
      if (l.tag === "Just")
        return l._1;
      f();
    })()), _ = (() => {
      if (u.tag === "Just" && r.srcSide === "West") {
        const l = u._1;
        return yt(a((h) => h < l.hitbox.x)((h) => ($) => ({ srcGroup: h, tgtGroup: $, delta: 1, weight: 100 })))(g);
      }
      return [];
    })(), d = (() => {
      if (u.tag === "Just" && r.tgtSide === "East") {
        const l = u._1;
        return yt(a((h) => h > l.hitbox.x)((h) => ($) => ({ srcGroup: $, tgtGroup: h, delta: 1, weight: 100 })))(g);
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
      return Vn((s) => Yn(pe)(s)(i.representedEdges), r.origin._1._1.representedEdges);
    })(),
    vsLNodePair: (r) => (o) => r.origin.tag === "Just" && o.origin.tag === "Just" && (r.origin._1.tag === "SegmentOrigin" ? o.origin._1.tag === "NodeOrigin" : r.origin._1.tag === "NodeOrigin" && o.origin._1.tag === "SegmentOrigin"),
    edgeLengthEdges: (r) => e
  };
}, C$ = (t) => (n) => {
  const e = rt(4), r = k$(t), o = L$(t), i = dc(q((u) => k(u.id, k(u.from.node, u.to.node)))(n.edges)), s = E$(t);
  return {
    nodes: q((u) => {
      const c = De(u.node)(r);
      if (c.tag === "Just")
        return { ...u, position: k(c._1 / e, u.position._2) };
      if (c.tag === "Nothing")
        return u;
      f();
    })(n.nodes),
    edges: q((u) => {
      const c = ys(u.edge)(i), a = (() => {
        if (c.tag === "Nothing")
          return u.segments;
        if (c.tag === "Just") {
          const g = De(c._1._1)(o), _ = (() => {
            if (g.tag === "Nothing")
              return 0;
            if (g.tag === "Just")
              return g._1;
            f();
          })(), d = De(c._1._2)(o), l = (() => {
            if (d.tag === "Nothing")
              return 0;
            if (d.tag === "Just")
              return d._1;
            f();
          })();
          return Bt((() => {
            const h = u.reversed ? l : _, $ = u.reversed ? _ : l, p = u.segments.length;
            return (m) => (y) => {
              if (y.direction === "V") {
                const N = (() => {
                  if (m === 0)
                    return h;
                  if (m === (p - 1 | 0))
                    return $;
                  const T = Os(y.start)(s);
                  if (T.tag === "Nothing")
                    return 0;
                  if (T.tag === "Just")
                    return T._1;
                  f();
                })();
                return { ...y, start: k(y.start._1 + N, y.start._2), end: k(y.end._1 + N, y.end._2) };
              }
              if (y.direction === "H")
                return {
                  ...y,
                  start: k(
                    (() => {
                      if (m === 0)
                        return y.start._1 + h;
                      const N = Os(y.start)(s);
                      if (N.tag === "Nothing")
                        return y.start._1 + 0;
                      if (N.tag === "Just")
                        return y.start._1 + N._1;
                      f();
                    })(),
                    y.start._2
                  ),
                  end: k(
                    (() => {
                      if (m === (p - 1 | 0))
                        return y.end._1 + $;
                      const N = Os(y.end)(s);
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
      return { ...u, segments: a, bends: bn((g) => (_) => g.end, a, Lt(1, a.length, a)) };
    })(n.paths)
  };
}, P$ = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = _c(o.nextId)(i._2.start)(i._2.end)(x)(t.edgeId), u = (() => {
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
}, ga = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ..._c(i.nextId)(r.start)(k(r.start._1, o.down ? e.y : e.y + e.height))(v(
        "Just",
        n
      ))(t.edgeId),
      aPort: v("Just", { node: t.src, side: o.side }),
      ignoreSpacing: o.down ? { ...le, down: !0 } : { ...le, up: !0 }
    }
  ]
}), si = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ..._c(i.nextId)(r.end)(k(r.end._1, o.down ? e.y : e.y + e.height))(v(
        "Just",
        n
      ))(t.edgeId),
      aPort: v("Just", { node: t.tgt, side: o.side }),
      ignoreSpacing: o.down ? { ...le, down: !0 } : { ...le, up: !0 }
    }
  ]
}), A$ = (t) => (n) => (e) => {
  if (e.src === e.tgt)
    return n;
  const r = De(e.src)(t.nodeToC), o = De(e.tgt)(t.nodeToC), i = (() => {
    if (r.tag === "Just") {
      const g = jt(r._1)(t.cGraph.cNodes);
      return g.tag === "Just" ? v("Just", g._1.hitbox) : x;
    }
    if (r.tag === "Nothing")
      return x;
    f();
  })(), s = (() => {
    if (o.tag === "Just") {
      const g = jt(o._1)(t.cGraph.cNodes);
      return g.tag === "Just" ? v("Just", g._1.hitbox) : x;
    }
    if (o.tag === "Nothing")
      return x;
    f();
  })(), u = N$(e.path), c = J(P$(e)(i)(s)(u.length - 1 | 0))(n)(Bt((g) => (_) => k(
    g,
    _
  ))(u));
  if (0 < u.length) {
    const g = (() => {
      if (r.tag === "Just" && i.tag === "Just") {
        if (e.srcSide === "North")
          return ga(e)(r._1)(i._1)(u[0])({ side: dn, down: !0 })(c);
        if (e.srcSide === "South")
          return ga(e)(r._1)(i._1)(u[0])({ side: hn, down: !1 })(c);
      }
      return c;
    })(), _ = u.length - 1 | 0;
    if (_ >= 0 && _ < u.length && o.tag === "Just" && s.tag === "Just") {
      if (e.tgtSide === "North")
        return si(e)(o._1)(s._1)(u[_])({ side: dn, down: !0 })(g);
      if (e.tgtSide === "South")
        return si(e)(o._1)(s._1)(u[_])({ side: hn, down: !1 })(g);
    }
    return g;
  }
  const a = u.length - 1 | 0;
  if (a >= 0 && a < u.length && o.tag === "Just" && s.tag === "Just") {
    if (e.tgtSide === "North")
      return si(e)(o._1)(s._1)(u[a])({ side: dn, down: !0 })(c);
    if (e.tgtSide === "South")
      return si(e)(o._1)(s._1)(u[a])({ side: hn, down: !1 })(c);
  }
  return c;
}, G$ = (t) => (n) => (e) => J$(t)(J(A$(e))({ nextId: 0, segments: [] })(n).segments)(e), I$ = (t) => G$(t.edges)(G0(t))(w$(b$(t.edges))(t.nodes)(T$())), Oe = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = ot.compare(t)(s._3);
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
}, pu = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, $u = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = ot.compare(t)(s._3);
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
}, F$ = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, B$ = (t) => {
  const n = t.Eq0();
  return (e) => (r) => {
    const o = (u) => {
      let c = u, a = !0, g;
      for (; a; ) {
        const _ = c, d = Wt((l) => x, (l) => (h) => v("Just", { head: l, tail: h }), _.queue);
        if (d.tag === "Nothing") {
          a = !1, g = _;
          continue;
        }
        if (d.tag === "Just") {
          const l = d._1.head;
          if (((p) => {
            let m = p, y = !0, N;
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
          const h = Mt(($) => !Oe($.eid)(_.removedEdges) && (n.eq($.src)(l) || n.eq($.tgt)(l)))(r);
          if (h.tag === "Nothing") {
            c = { ..._, queue: d._1.tail };
            continue;
          }
          if (h.tag === "Just") {
            const $ = n.eq(h._1.src)(l) ? h._1.tgt : h._1.src, p = {
              ..._,
              degree: U(t)($)((() => {
                const y = ((N) => {
                  let T = N, w = !0, b;
                  for (; w; ) {
                    const L = T;
                    if (L.tag === "Leaf") {
                      w = !1, b = x;
                      continue;
                    }
                    if (L.tag === "Node") {
                      const C = t.compare($)(L._3);
                      if (C === "LT") {
                        T = L._5;
                        continue;
                      }
                      if (C === "GT") {
                        T = L._6;
                        continue;
                      }
                      if (C === "EQ") {
                        w = !1, b = v("Just", L._4);
                        continue;
                      }
                    }
                    f();
                  }
                  return b;
                })(_.degree);
                if (y.tag === "Nothing")
                  return -1;
                if (y.tag === "Just")
                  return y._1 - 1 | 0;
                f();
              })())(_.degree),
              removedNodes: U(t)(l)()(_.removedNodes),
              removedEdges: U(ot)(h._1.eid)()(_.removedEdges),
              record: [..._.record, { node: l, neighbour: $, viaSrc: n.eq(h._1.src)(l) }],
              queue: d._1.tail
            };
            if ((() => {
              const y = ((T) => {
                let w = T, b = !0, L;
                for (; b; ) {
                  const C = w;
                  if (C.tag === "Leaf") {
                    b = !1, L = x;
                    continue;
                  }
                  if (C.tag === "Node") {
                    const H = t.compare($)(C._3);
                    if (H === "LT") {
                      w = C._5;
                      continue;
                    }
                    if (H === "GT") {
                      w = C._6;
                      continue;
                    }
                    if (H === "EQ") {
                      b = !1, L = v("Just", C._4);
                      continue;
                    }
                  }
                  f();
                }
                return L;
              })(p.degree), N = (T) => {
                let w = T, b = !0, L;
                for (; b; ) {
                  const C = w;
                  if (C.tag === "Leaf") {
                    b = !1, L = !1;
                    continue;
                  }
                  if (C.tag === "Node") {
                    const H = t.compare($)(C._3);
                    if (H === "LT") {
                      w = C._5;
                      continue;
                    }
                    if (H === "GT") {
                      w = C._6;
                      continue;
                    }
                    if (H === "EQ") {
                      b = !1, L = !0;
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
              })() && !N(p.removedNodes);
            })()) {
              c = { ...p, queue: [...p.queue, $] };
              continue;
            }
            c = p;
            continue;
          }
        }
        f();
      }
      return g;
    }, i = J((u) => (c) => kt(t)(cn)(c.src)(1)(kt(t)(cn)(c.tgt)(1)(u)))(I)(r), s = o({
      degree: i,
      removedNodes: I,
      removedEdges: I,
      record: [],
      queue: ft(
        (u) => {
          const a = ((g) => {
            let _ = g, d = !0, l;
            for (; d; ) {
              const h = _;
              if (h.tag === "Leaf") {
                d = !1, l = x;
                continue;
              }
              if (h.tag === "Node") {
                const $ = t.compare(u)(h._3);
                if ($ === "LT") {
                  _ = h._5;
                  continue;
                }
                if ($ === "GT") {
                  _ = h._6;
                  continue;
                }
                if ($ === "EQ") {
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
      coreEdges: ft((u) => !Oe(u.eid)(s.removedEdges), r),
      removed: s.record
    };
  };
}, R$ = (t) => (n) => (e) => J((r) => (o) => {
  const i = o.neighbour, s = (() => {
    const u = ((a) => {
      let g = a, _ = !0, d;
      for (; _; ) {
        const l = g;
        if (l.tag === "Leaf") {
          _ = !1, d = x;
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
})(e)(wn(n)), mu = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = { ...o, treeNode: U(t)(r)()(o.treeNode) };
    return J((s) => (u) => {
      if (Oe(u.eid)(s.st.edgeVisited))
        return s;
      const c = { ...s.st, edgeVisited: U(ot)(u.eid)()(s.st.edgeVisited) }, a = n.eq(u.src)((() => {
        const g = u.src, _ = (l) => {
          let h = l, $ = !0, p;
          for (; $; ) {
            const m = h;
            if (m.tag === "Leaf") {
              $ = !1, p = !1;
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
                $ = !1, p = !0;
                continue;
              }
            }
            f();
          }
          return p;
        }, d = u.tgt;
        return _(c.treeNode) && !((h) => {
          let $ = h, p = !0, m;
          for (; p; ) {
            const y = $;
            if (y.tag === "Leaf") {
              p = !1, m = !1;
              continue;
            }
            if (y.tag === "Node") {
              const N = t.compare(d)(y._3);
              if (N === "LT") {
                $ = y._5;
                continue;
              }
              if (N === "GT") {
                $ = y._6;
                continue;
              }
              if (N === "EQ") {
                p = !1, m = !0;
                continue;
              }
            }
            f();
          }
          return m;
        })(c.treeNode);
      })() ? u.src : (() => {
        const g = u.tgt, _ = (l) => {
          let h = l, $ = !0, p;
          for (; $; ) {
            const m = h;
            if (m.tag === "Leaf") {
              $ = !1, p = !1;
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
                $ = !1, p = !0;
                continue;
              }
            }
            f();
          }
          return p;
        }, d = u.src;
        return _(c.treeNode) && !((h) => {
          let $ = h, p = !0, m;
          for (; p; ) {
            const y = $;
            if (y.tag === "Leaf") {
              p = !1, m = !1;
              continue;
            }
            if (y.tag === "Node") {
              const N = t.compare(d)(y._3);
              if (N === "LT") {
                $ = y._5;
                continue;
              }
              if (N === "GT") {
                $ = y._6;
                continue;
              }
              if (N === "EQ") {
                p = !1, m = !0;
                continue;
              }
            }
            f();
          }
          return m;
        })(c.treeNode);
      })() ? u.tgt : u.src) ? u.tgt : u.src;
      if (Oe(u.eid)(c.treeEdge)) {
        if (((d) => {
          let l = d, h = !0, $;
          for (; h; ) {
            const p = l;
            if (p.tag === "Leaf") {
              h = !1, $ = !1;
              continue;
            }
            if (p.tag === "Node") {
              const m = t.compare(a)(p._3);
              if (m === "LT") {
                l = p._5;
                continue;
              }
              if (m === "GT") {
                l = p._6;
                continue;
              }
              if (m === "EQ") {
                h = !1, $ = !0;
                continue;
              }
            }
            f();
          }
          return $;
        })(c.treeNode))
          return { ...s, st: c };
        const g = mu(t)(e)(a)(c);
        return { count: s.count + g.count | 0, st: g.st };
      }
      if ((() => {
        const g = (d) => {
          let l = d, h = !0, $;
          for (; h; ) {
            const p = l;
            if (p.tag === "Leaf") {
              h = !1, $ = !1;
              continue;
            }
            if (p.tag === "Node") {
              const m = t.compare(a)(p._3);
              if (m === "LT") {
                l = p._5;
                continue;
              }
              if (m === "GT") {
                l = p._6;
                continue;
              }
              if (m === "EQ") {
                h = !1, $ = !0;
                continue;
              }
            }
            f();
          }
          return $;
        }, _ = u.tgt;
        return !g(c.treeNode) && (() => {
          const l = ((m) => {
            let y = m, N = !0, T;
            for (; N; ) {
              const w = y;
              if (w.tag === "Leaf") {
                N = !1, T = x;
                continue;
              }
              if (w.tag === "Node") {
                const b = t.compare(_)(w._3);
                if (b === "LT") {
                  y = w._5;
                  continue;
                }
                if (b === "GT") {
                  y = w._6;
                  continue;
                }
                if (b === "EQ") {
                  N = !1, T = v("Just", w._4);
                  continue;
                }
              }
              f();
            }
            return T;
          })(c.layer), h = u.src, p = ((m) => {
            let y = m, N = !0, T;
            for (; N; ) {
              const w = y;
              if (w.tag === "Leaf") {
                N = !1, T = x;
                continue;
              }
              if (w.tag === "Node") {
                const b = t.compare(h)(w._3);
                if (b === "LT") {
                  y = w._5;
                  continue;
                }
                if (b === "GT") {
                  y = w._6;
                  continue;
                }
                if (b === "EQ") {
                  N = !1, T = v("Just", w._4);
                  continue;
                }
              }
              f();
            }
            return T;
          })(c.layer);
          if (l.tag === "Nothing") {
            if (p.tag === "Nothing")
              return u.delta === 0;
            if (p.tag === "Just")
              return u.delta === -p._1;
            f();
          }
          if (l.tag === "Just") {
            if (p.tag === "Nothing")
              return u.delta === (l._1 - 0 | 0);
            if (p.tag === "Just")
              return u.delta === (l._1 - p._1 | 0);
          }
          f();
        })();
      })()) {
        const g = mu(t)(e)(a)({ ...c, treeEdge: U(ot)(u.eid)()(c.treeEdge) });
        return { count: s.count + g.count | 0, st: g.st };
      }
      return { ...s, st: c };
    })({ count: 1, st: i })(ft((s) => (n.eq(s.src)(r) || n.eq(s.tgt)(r)) && !Oe(s.eid)(i.edgeVisited), e));
  };
}, Ii = (t) => (n) => (e) => (r) => {
  const o = r.src, s = (($) => {
    let p = $, m = !0, y;
    for (; m; ) {
      const N = p;
      if (N.tag === "Leaf") {
        m = !1, y = x;
        continue;
      }
      if (N.tag === "Node") {
        const T = t.compare(o)(N._3);
        if (T === "LT") {
          p = N._5;
          continue;
        }
        if (T === "GT") {
          p = N._6;
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
  })(), c = r.tgt, g = (($) => {
    let p = $, m = !0, y;
    for (; m; ) {
      const N = p;
      if (N.tag === "Leaf") {
        m = !1, y = x;
        continue;
      }
      if (N.tag === "Node") {
        const T = t.compare(c)(N._3);
        if (T === "LT") {
          p = N._5;
          continue;
        }
        if (T === "GT") {
          p = N._6;
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
  })(), l = (($) => {
    let p = $, m = !0, y;
    for (; m; ) {
      const N = p;
      if (N.tag === "Leaf") {
        m = !1, y = x;
        continue;
      }
      if (N.tag === "Node") {
        const T = t.compare(e)(N._3);
        if (T === "LT") {
          p = N._5;
          continue;
        }
        if (T === "GT") {
          p = N._6;
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
    const $ = r.src, m = ((y) => {
      let N = y, T = !0, w;
      for (; T; ) {
        const b = N;
        if (b.tag === "Leaf") {
          T = !1, w = x;
          continue;
        }
        if (b.tag === "Node") {
          const L = t.compare($)(b._3);
          if (L === "LT") {
            N = b._5;
            continue;
          }
          if (L === "GT") {
            N = b._6;
            continue;
          }
          if (L === "EQ") {
            T = !1, w = v("Just", b._4);
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
          let b = w, L = !0, C;
          for (; L; ) {
            const H = b;
            if (H.tag === "Leaf") {
              L = !1, C = x;
              continue;
            }
            if (H.tag === "Node") {
              const X = t.compare(y)(H._3);
              if (X === "LT") {
                b = H._5;
                continue;
              }
              if (X === "GT") {
                b = H._6;
                continue;
              }
              if (X === "EQ") {
                L = !1, C = v("Just", H._4);
                continue;
              }
            }
            f();
          }
          return C;
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
}, Q$ = (t) => {
  const n = en(t)(Ot);
  return (e) => ({
    layer: n(q((r) => k(r, 0))(e)),
    treeNode: I,
    treeEdge: I,
    poID: I,
    lowestPoID: I,
    cutvalue: I,
    postOrder: 1,
    edgeVisited: I
  });
}, W$ = (t) => (n) => (e) => J((r) => (o) => {
  if ((() => {
    const d = o.src, l = (p) => {
      let m = p, y = !0, N;
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
    }, h = o.tgt, $ = (p) => {
      let m = p, y = !0, N;
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
    return l(e.treeNode) === $(e.treeNode);
  })())
    return r;
  const i = o.tgt, u = ((d) => {
    let l = d, h = !0, $;
    for (; h; ) {
      const p = l;
      if (p.tag === "Leaf") {
        h = !1, $ = x;
        continue;
      }
      if (p.tag === "Node") {
        const m = t.compare(i)(p._3);
        if (m === "LT") {
          l = p._5;
          continue;
        }
        if (m === "GT") {
          l = p._6;
          continue;
        }
        if (m === "EQ") {
          h = !1, $ = v("Just", p._4);
          continue;
        }
      }
      f();
    }
    return $;
  })(e.layer), c = o.src, g = ((d) => {
    let l = d, h = !0, $;
    for (; h; ) {
      const p = l;
      if (p.tag === "Leaf") {
        h = !1, $ = x;
        continue;
      }
      if (p.tag === "Node") {
        const m = t.compare(c)(p._3);
        if (m === "LT") {
          l = p._5;
          continue;
        }
        if (m === "GT") {
          l = p._6;
          continue;
        }
        if (m === "EQ") {
          h = !1, $ = v("Just", p._4);
          continue;
        }
      }
      f();
    }
    return $;
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
})({ edge: x, slack: 1e9 })(n).edge, H$ = (t) => {
  const n = en(t)(Ot);
  return (e) => (r) => {
    const o = J((i) => (s) => pu(i)((() => {
      const c = ((a) => {
        let g = a, _ = !0, d;
        for (; _; ) {
          const l = g;
          if (l.tag === "Leaf") {
            _ = !1, d = x;
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
    return n(q((i) => k(
      i,
      (() => {
        const u = ((c) => {
          let a = c, g = !0, _;
          for (; g; ) {
            const d = a;
            if (d.tag === "Leaf") {
              g = !1, _ = x;
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
}, I0 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = J((u) => (c) => {
      const a = I0(t)(e)(n.eq(c.src)(r) ? c.tgt : c.src)({ ...u.st, edgeVisited: U(ot)(c.eid)()(u.st.edgeVisited) });
      return { lowest: pu(u.lowest)(a.lowest), st: a.st };
    })({ lowest: 1e9, st: o })(ft(
      (u) => Oe(u.eid)(o.treeEdge) && (n.eq(u.src)(r) || n.eq(u.tgt)(r)) && !Oe(u.eid)(o.edgeVisited),
      e
    )), s = pu(i.lowest)(i.st.postOrder);
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
}, F0 = (t) => {
  const n = I0(t);
  return (e) => (r) => (o) => 0 < e.length ? n(r)(e[0])({ ...o, edgeVisited: I, postOrder: 1, poID: I, lowestPoID: I }).st : o;
}, D$ = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => ft((i) => Oe(i.eid)(r.treeEdge) && (n.eq(i.src)(o) || n.eq(i.tgt)(o)), e);
}, O$ = (t) => (n) => Mt((e) => {
  const r = $u(e.eid)(n.cutvalue);
  return Oe(e.eid)(n.treeEdge) && (() => {
    if (r.tag === "Nothing")
      return !1;
    if (r.tag === "Just")
      return r._1 < -1e-10;
    f();
  })();
})(t), B0 = (t) => {
  const n = mu(t);
  return (e) => (r) => (o) => {
    const i = 0 < e.length ? v("Just", e[0]) : x;
    if (i.tag === "Nothing")
      return o;
    if (i.tag === "Just") {
      const s = n(r)(i._1)({ ...o, edgeVisited: I, treeNode: I, treeEdge: I });
      if (s.count >= e.length)
        return s.st;
      const u = W$(t)(r)(s.st);
      if (u.tag === "Nothing")
        return s.st;
      if (u.tag === "Just") {
        const c = u._1.tgt, g = ((p) => {
          let m = p, y = !0, N;
          for (; y; ) {
            const T = m;
            if (T.tag === "Leaf") {
              y = !1, N = x;
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
        })(s.st.layer), _ = u._1.src, l = ((p) => {
          let m = p, y = !0, N;
          for (; y; ) {
            const T = m;
            if (T.tag === "Leaf") {
              y = !1, N = x;
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
        })(), $ = (() => {
          const p = u._1.tgt;
          return ((y) => {
            let N = y, T = !0, w;
            for (; T; ) {
              const b = N;
              if (b.tag === "Leaf") {
                T = !1, w = !1;
                continue;
              }
              if (b.tag === "Node") {
                const L = t.compare(p)(b._3);
                if (L === "LT") {
                  N = b._5;
                  continue;
                }
                if (L === "GT") {
                  N = b._6;
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
        return B0(t)(e)(r)({
          ...s.st,
          layer: J((p) => (m) => ((N) => {
            let T = N, w = !0, b;
            for (; w; ) {
              const L = T;
              if (L.tag === "Leaf") {
                w = !1, b = !1;
                continue;
              }
              if (L.tag === "Node") {
                const C = t.compare(m)(L._3);
                if (C === "LT") {
                  T = L._5;
                  continue;
                }
                if (C === "GT") {
                  T = L._6;
                  continue;
                }
                if (C === "EQ") {
                  w = !1, b = !0;
                  continue;
                }
              }
              f();
            }
            return b;
          })(s.st.treeNode) ? U(t)(m)((() => {
            const N = ((T) => {
              let w = T, b = !0, L;
              for (; b; ) {
                const C = w;
                if (C.tag === "Leaf") {
                  b = !1, L = x;
                  continue;
                }
                if (C.tag === "Node") {
                  const H = t.compare(m)(C._3);
                  if (H === "LT") {
                    w = C._5;
                    continue;
                  }
                  if (H === "GT") {
                    w = C._6;
                    continue;
                  }
                  if (H === "EQ") {
                    b = !1, L = v("Just", C._4);
                    continue;
                  }
                }
                f();
              }
              return L;
            })(s.st.layer);
            if (N.tag === "Nothing")
              return 0 + $ | 0;
            if (N.tag === "Just")
              return N._1 + $ | 0;
            f();
          })())(p) : p)(s.st.layer)(e)
        });
      }
    }
    f();
  };
}, q$ = (t) => (n) => (e) => (r) => J((o) => (i) => {
  if (Ii(t)(r)(i.src)(e) && !Ii(t)(r)(i.tgt)(e)) {
    const s = i.tgt, c = ((l) => {
      let h = l, $ = !0, p;
      for (; $; ) {
        const m = h;
        if (m.tag === "Leaf") {
          $ = !1, p = x;
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
            $ = !1, p = v("Just", m._4);
            continue;
          }
        }
        f();
      }
      return p;
    })(r.layer), a = i.src, _ = ((l) => {
      let h = l, $ = !0, p;
      for (; $; ) {
        const m = h;
        if (m.tag === "Leaf") {
          $ = !1, p = x;
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
            $ = !1, p = v("Just", m._4);
            continue;
          }
        }
        f();
      }
      return p;
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
})({ edge: x, slack: 1e9 })(n).edge, z$ = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => (i) => {
    const s = i.tgt, u = i.src;
    return J((c) => (a) => {
      if ((() => {
        const g = $u(a.eid)(r.cutvalue);
        if (g.tag === "Just")
          return !0;
        if (g.tag === "Nothing")
          return !1;
        f();
      })()) {
        const g = $u(a.eid)(r.cutvalue), _ = (() => {
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
}, Y$ = (t) => {
  const n = z$(t);
  return (e) => (r) => (o) => {
    const i = (u, c, a) => {
      const _ = ((d) => {
        let l = d, h = !0, $;
        for (; h; ) {
          const p = l;
          if (p.tag === "Leaf") {
            h = !1, $ = x;
            continue;
          }
          if (p.tag === "Node") {
            const m = t.compare(u)(p._3);
            if (m === "LT") {
              l = p._5;
              continue;
            }
            if (m === "GT") {
              l = p._6;
              continue;
            }
            if (m === "EQ") {
              h = !1, $ = v("Just", p._4);
              continue;
            }
          }
          f();
        }
        return $;
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
        const l = a, h = g, p = ((y) => {
          let N = y, T = !0, w;
          for (; T; ) {
            const b = N;
            if (b.tag === "Leaf") {
              T = !1, w = x;
              continue;
            }
            if (b.tag === "Node") {
              const L = t.compare(h)(b._3);
              if (L === "LT") {
                N = b._5;
                continue;
              }
              if (L === "GT") {
                N = b._6;
                continue;
              }
              if (L === "EQ") {
                T = !1, w = v("Just", b._4);
                continue;
              }
            }
            f();
          }
          return w;
        })(l.unknown), m = (() => {
          if (p.tag === "Nothing")
            return [];
          if (p.tag === "Just")
            return p._1;
          f();
        })();
        if (m.length === 1) {
          const y = t.Eq0().eq(m[0].src)(h) ? m[0].tgt : m[0].src;
          a = {
            unknown: i(h, m[0], i(y, m[0], l.unknown)),
            cutvalue: U(ot)(m[0].eid)(n(e)(l)(h)(m[0]))(l.cutvalue)
          }, g = y;
          continue;
        }
        _ = !1, d = l;
      }
      return d;
    })(r)(o);
  };
}, R0 = (t) => {
  const n = t.Eq0(), e = t.Eq0(), r = { eq: (a) => (g) => a.delta === g.delta && a.eid === g.eid && e.eq(a.src)(g.src) && n.eq(a.tgt)(g.tgt) && a.weight === g.weight }, o = {
    compare: (a) => (g) => {
      const _ = ot.compare(a.delta)(g.delta);
      if (_ === "LT" || _ === "GT" || _ !== "EQ")
        return _;
      const d = ot.compare(a.eid)(g.eid);
      if (d === "LT" || d === "GT" || d !== "EQ")
        return d;
      const l = t.compare(a.src)(g.src);
      if (l === "LT" || l === "GT" || l !== "EQ")
        return l;
      const h = t.compare(a.tgt)(g.tgt);
      if (h === "LT" || h === "GT" || h !== "EQ")
        return h;
      const $ = ct.compare(a.weight)(g.weight);
      return $ === "LT" || $ === "GT" || $ !== "EQ" ? $ : An;
    },
    Eq0: () => r
  }, i = J((a) => (g) => U(o)(g)()(a))(I), s = D$(t), u = en(t)(Ot), c = Y$(t);
  return (a) => (g) => (_) => {
    const d = {
      unknown: u(q((l) => k(
        l,
        St(On.foldr, i(s(g)(_)(l)))
      ))(a)),
      cutvalue: I
    };
    return {
      ..._,
      cutvalue: J(c(g))(d)(ft(
        (l) => {
          const $ = ((p) => {
            let m = p, y = !0, N;
            for (; y; ) {
              const T = m;
              if (T.tag === "Leaf") {
                y = !1, N = x;
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
          if ($.tag === "Nothing")
            return !1;
          if ($.tag === "Just")
            return $._1.length === 1;
          f();
        },
        a
      )).cutvalue
    };
  };
}, X$ = (t) => {
  const n = F0(t), e = R0(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const c = { ...u, treeEdge: U(ot)(s.eid)()(yo(ot)(i.eid)(u.treeEdge)) }, a = s.tgt, _ = ((m) => {
      let y = m, N = !0, T;
      for (; N; ) {
        const w = y;
        if (w.tag === "Leaf") {
          N = !1, T = x;
          continue;
        }
        if (w.tag === "Node") {
          const b = t.compare(a)(w._3);
          if (b === "LT") {
            y = w._5;
            continue;
          }
          if (b === "GT") {
            y = w._6;
            continue;
          }
          if (b === "EQ") {
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
          N = !1, T = x;
          continue;
        }
        if (w.tag === "Node") {
          const b = t.compare(d)(w._3);
          if (b === "LT") {
            y = w._5;
            continue;
          }
          if (b === "GT") {
            y = w._6;
            continue;
          }
          if (b === "EQ") {
            N = !1, T = v("Just", w._4);
            continue;
          }
        }
        f();
      }
      return T;
    })(c.layer), $ = (() => {
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
    })(), p = Ii(t)(c)(s.tgt)(i) ? $ : -$;
    return e(r)(o)(n(r)(o)({
      ...c,
      layer: J((m) => (y) => Ii(t)(c)(y)(i) ? m : U(t)(y)((() => {
        const T = ((w) => {
          let b = w, L = !0, C;
          for (; L; ) {
            const H = b;
            if (H.tag === "Leaf") {
              L = !1, C = x;
              continue;
            }
            if (H.tag === "Node") {
              const X = t.compare(y)(H._3);
              if (X === "LT") {
                b = H._5;
                continue;
              }
              if (X === "GT") {
                b = H._6;
                continue;
              }
              if (X === "EQ") {
                L = !1, C = v("Just", H._4);
                continue;
              }
            }
            f();
          }
          return C;
        })(c.layer);
        if (T.tag === "Nothing")
          return 0 + p | 0;
        if (T.tag === "Just")
          return T._1 + p | 0;
        f();
      })())(m))(c.layer)(r)
    }));
  };
}, V$ = (t) => {
  const n = X$(t);
  return (e) => (r) => (o) => (i) => ((u) => (c) => {
    let a = u, g = c, _ = !0, d;
    for (; _; ) {
      const l = a, h = g;
      if (l === 0) {
        _ = !1, d = h;
        continue;
      }
      const $ = O$(o)(h);
      if ($.tag === "Nothing") {
        _ = !1, d = h;
        continue;
      }
      if ($.tag === "Just") {
        const p = q$(t)(o)($._1)(h);
        if (p.tag === "Nothing") {
          _ = !1, d = h;
          continue;
        }
        if (p.tag === "Just") {
          a = l - 1 | 0, g = n(r)(o)($._1)(p._1)(h);
          continue;
        }
      }
      f();
    }
    return d;
  })(e)(i);
}, U$ = (t) => {
  const n = R0(t), e = F0(t), r = B0(t);
  return (o) => (i) => (s) => n(o)(i)(e(o)(i)(r(o)(i)(s)));
}, la = (t) => (n) => J((e) => (r) => kt(t)(un)(n(r))([r])(e))(I), K$ = (t) => {
  const n = en(t)(Ot);
  return (e) => (r) => (o) => {
    const i = (c) => (a) => (g) => (_) => {
      let d = c, l = a, h = g, $ = _, p = !0, m;
      for (; p; ) {
        const y = d, N = l, T = h, w = $, b = Wt((L) => x, (L) => (C) => v("Just", { head: L, tail: C }), T);
        if (b.tag === "Nothing") {
          p = !1, m = w;
          continue;
        }
        if (b.tag === "Just") {
          const L = b._1.head, H = ((G) => {
            let R = G, nt = !0, et;
            for (; nt; ) {
              const z = R;
              if (z.tag === "Leaf") {
                nt = !1, et = x;
                continue;
              }
              if (z.tag === "Node") {
                const Q = t.compare(L)(z._3);
                if (Q === "LT") {
                  R = z._5;
                  continue;
                }
                if (Q === "GT") {
                  R = z._6;
                  continue;
                }
                if (Q === "EQ") {
                  nt = !1, et = v("Just", z._4);
                  continue;
                }
              }
              f();
            }
            return et;
          })(w.layer), X = (() => {
            if (H.tag === "Nothing")
              return 0;
            if (H.tag === "Just")
              return H._1;
            f();
          })(), Y = J((G) => (R) => {
            const nt = R.tgt, z = ((E) => {
              let S = E, O = !0, P;
              for (; O; ) {
                const B = S;
                if (B.tag === "Leaf") {
                  O = !1, P = x;
                  continue;
                }
                if (B.tag === "Node") {
                  const W = t.compare(nt)(B._3);
                  if (W === "LT") {
                    S = B._5;
                    continue;
                  }
                  if (W === "GT") {
                    S = B._6;
                    continue;
                  }
                  if (W === "EQ") {
                    O = !1, P = v("Just", B._4);
                    continue;
                  }
                }
                f();
              }
              return P;
            })(G.incident), Q = (() => {
              if (z.tag === "Nothing")
                return -1;
              if (z.tag === "Just")
                return z._1 - 1 | 0;
              f();
            })();
            return {
              st: {
                ...G.st,
                layer: U(t)(R.tgt)(F$((() => {
                  const E = R.tgt, O = ((P) => {
                    let B = P, W = !0, K;
                    for (; W; ) {
                      const V = B;
                      if (V.tag === "Leaf") {
                        W = !1, K = x;
                        continue;
                      }
                      if (V.tag === "Node") {
                        const D = t.compare(E)(V._3);
                        if (D === "LT") {
                          B = V._5;
                          continue;
                        }
                        if (D === "GT") {
                          B = V._6;
                          continue;
                        }
                        if (D === "EQ") {
                          W = !1, K = v("Just", V._4);
                          continue;
                        }
                      }
                      f();
                    }
                    return K;
                  })(G.st.layer);
                  if (O.tag === "Nothing")
                    return 0;
                  if (O.tag === "Just")
                    return O._1;
                  f();
                })())(X + R.delta | 0))(G.st.layer)
              },
              incident: U(t)(R.tgt)(Q)(G.incident),
              queue: Q === 0 ? [...G.queue, R.tgt] : G.queue
            };
          })({ st: w, incident: N, queue: b._1.tail })((() => {
            const R = ((nt) => {
              let et = nt, z = !0, Q;
              for (; z; ) {
                const E = et;
                if (E.tag === "Leaf") {
                  z = !1, Q = x;
                  continue;
                }
                if (E.tag === "Node") {
                  const S = t.compare(L)(E._3);
                  if (S === "LT") {
                    et = E._5;
                    continue;
                  }
                  if (S === "GT") {
                    et = E._6;
                    continue;
                  }
                  if (S === "EQ") {
                    z = !1, Q = v("Just", E._4);
                    continue;
                  }
                }
                f();
              }
              return Q;
            })(y);
            if (R.tag === "Nothing")
              return [];
            if (R.tag === "Just")
              return R._1;
            f();
          })());
          d = y, l = Y.incident, h = Y.queue, $ = Y.st;
          continue;
        }
        f();
      }
      return m;
    }, s = la(t)((c) => c.tgt)(r), u = n(q((c) => k(
      c,
      (() => {
        const g = ((_) => {
          let d = _, l = !0, h;
          for (; l; ) {
            const $ = d;
            if ($.tag === "Leaf") {
              l = !1, h = x;
              continue;
            }
            if ($.tag === "Node") {
              const p = t.compare(c)($._3);
              if (p === "LT") {
                d = $._5;
                continue;
              }
              if (p === "GT") {
                d = $._6;
                continue;
              }
              if (p === "EQ") {
                l = !1, h = v("Just", $._4);
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
    return i(la(t)((c) => c.src)(r))(u)(ft(
      (c) => {
        const g = ((_) => {
          let d = _, l = !0, h;
          for (; l; ) {
            const $ = d;
            if ($.tag === "Leaf") {
              l = !1, h = x;
              continue;
            }
            if ($.tag === "Node") {
              const p = t.compare(c)($._3);
              if (p === "LT") {
                d = $._5;
                continue;
              }
              if (p === "GT") {
                d = $._6;
                continue;
              }
              if (p === "EQ") {
                l = !1, h = v("Just", $._4);
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
}, M$ = (t) => {
  const n = Q$(t), e = K$(t), r = U$(t), o = V$(t);
  return (i) => (s) => {
    const u = e(i)(s)(n(i));
    return s.length === 0 ? u.layer : o(4 * i.length | 0)(i)(s)(r(i)(s)(u)).layer;
  };
}, Q0 = (t) => {
  const n = H$(t), e = M$(t), r = B$(t);
  return (o) => (i) => {
    if (o.length === 0)
      return I;
    if (o.length < 40)
      return n(o)(e(o)(i));
    const s = r(o)(i);
    return n(o)(R$(t)(s.removed)(e(s.coreNodes)(s.coreEdges)));
  };
}, W0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = ot.compare(t)(s._3);
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
}, yu = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, j$ = /* @__PURE__ */ Q0(ot), Lo = (t) => (n) => ({ ...n, edges: [...n.edges, { src: t.src, tgt: t.tgt, delta: t.delta, weight: t.weight, eid: n.nextEid }], nextEid: n.nextEid + 1 | 0 }), Z$ = (t) => (n) => (e) => {
  if (e.cGroup.tag === "Nothing")
    return n;
  if (e.cGroup.tag === "Just") {
    const r = rt((() => {
      const o = W0(e.cGroup._1)(t);
      if (o.tag === "Nothing")
        return 0;
      if (o.tag === "Just")
        return o._1;
      f();
    })());
    return ne(e.id)((o) => ({ ...o, hitbox: { ...o.hitbox, x: r + o.cGroupOffset.x } }))(n);
  }
  f();
}, tm = (t) => (n) => ({
  ...n,
  cGraph: J(Z$(t))(n.cGraph)((() => {
    const e = n.cGraph;
    return yt((r) => jt(r)(e.cNodes))(e.cNodeOrder);
  })())
}), nm = (t) => (n) => (e) => (r) => (o) => {
  const i = $n(os(n.cGroupOffset.x - t.cGroupOffset.x));
  return Lo({ src: o.nextNodeId, tgt: r, delta: yu(0)(-i), weight: 1 })(Lo({ src: o.nextNodeId, tgt: e, delta: yu(0)(i), weight: 1 })({
    ...o,
    nodes: [...o.nodes, o.nextNodeId],
    nextNodeId: o.nextNodeId + 1 | 0
  }));
}, em = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = yu(0)($n(os(e.cGroupOffset.x + e.hitbox.width + (n.direction === "LEFT" || n.direction === "RIGHT" ? n.spacingsHandler.horizontalSpacing(e)(r) : n.spacingsHandler.verticalSpacing(e)(r)) - r.cGroupOffset.x)));
  return t.sameEdgeVerticalSegments(e)(r) ? nm(e)(r)(o)(i)(s) : Lo({ src: o, tgt: i, delta: u, weight: t.vsLNodePair(e)(r) ? 2 : 1 })(s);
}, rm = (t) => (n) => (e) => (r) => (o) => {
  const i = jt(o)(n.cGraph.cNodes);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just")
    return (e.cGroup.tag === "Nothing" ? i._1.cGroup.tag === "Nothing" : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" && e.cGroup._1 === i._1.cGroup._1) ? r : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" ? em(t)(n)(e)(i._1)(e.cGroup._1)(i._1.cGroup._1)(r) : r;
  f();
}, om = (t) => (n) => (e) => (r) => J(rm(t)(n)(r))(e)(r.constraints), im = (t) => (n) => Lo({ src: n.srcGroup, tgt: n.tgtGroup, delta: n.delta, weight: n.weight })(t), sm = (t) => {
  const n = J((o) => (i) => kt(ot)(cn)(i.tgt)(1)(o))(I)(t.edges), e = ft(
    (o) => {
      const i = W0(o)(n);
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
  return J((o) => (i) => Lo({ src: r, tgt: i, delta: 1, weight: 0 })(o))({ ...t, nodes: [...t.nodes, r], nextNodeId: r + 1 | 0 })(e);
}, um = (t) => (n) => {
  const e = sm(J(im)(J(om(t)(n))({
    nodes: n.cGraph.cGroupOrder,
    edges: [],
    nextNodeId: n.cGraph.nextCGroupId,
    nextEid: 0
  })((() => {
    const r = n.cGraph;
    return yt((o) => jt(o)(r.cNodes))(r.cNodeOrder);
  })()))(t.edgeLengthEdges(n.cGraph)));
  return { nodes: e.nodes, edges: e.edges };
}, cm = (t) => (n) => {
  const e = um(t)(n);
  return tm(j$(e.nodes)(e.edges))(n);
}, H0 = (t) => t, tn = /* @__PURE__ */ H0("H"), nn = /* @__PURE__ */ H0("V"), am = (t) => k(t._2, t._1), D0 = (t) => ({ ...t, position: k(t.position._2, t.position._1), size: k(t.size._2, t.size._1) }), fm = (t) => ({
  start: k(t.start._2, t.start._1),
  end: k(t.end._2, t.end._1),
  direction: (() => {
    if (t.direction === "H")
      return nn;
    if (t.direction === "V")
      return tn;
    f();
  })()
}), O0 = (t) => ({ ...t, segments: q(fm)(t.segments), bends: q(am)(t.bends) }), gm = (t) => ({ nodes: q(D0)(t.nodes), edges: t.edges, paths: q(O0)(t.paths), ports: t.ports }), lm = { nodeNode: 8, edgeNode: 4, edgeEdge: 10 }, _m = (t) => (n) => ({
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
}), dm = (t) => (n) => cm(n), hm = (t) => (n) => (e) => {
  const r = gm(e), o = I$(r), i = S$(o)(G0(r)), s = C$(L0(fc)(t$({
    ...e$(o.cGraph),
    compactionAlgorithm: v("Just", dm()(i)),
    constraintAlgorithm: v("Just", d$(n.edgeEdge)),
    spacingsHandler: _m(n)(i)
  })).cGraph)({ nodes: r.nodes, edges: r.edges, paths: r.paths });
  return { nodes: q(D0)(s.nodes), edges: q(O0)(s.edges) };
}, q0 = (t) => t, Sr = /* @__PURE__ */ en(ot)(Ot), It = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = ot.compare(t)(s._3);
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
}, _a = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, dt = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ht = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Br = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, pm = (t) => (n) => {
  const e = ot.compare(t._1)(n._1);
  return e === "LT" ? Jn : e === "GT" ? Tn : ot.compare(t._2)(n._2);
}, Ar = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, $m = /* @__PURE__ */ (() => {
  const t = oe.unfoldr(Se);
  return (n) => t(te("IterNode", n, Ee));
})(), mm = (t) => t, da = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, ym = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, ui = /* @__PURE__ */ q0("Regular"), ci = /* @__PURE__ */ q0("Critical"), z0 = (t) => (n) => {
  const e = J((s) => (u) => U(A)(u.node)(u)(s))(I)(n), r = 1.25 * rt(4), o = (s, u, c) => ((g) => (_) => (d) => {
    let l = g, h = _, $ = d, p = !0, m;
    for (; p; ) {
      const y = l, N = h, T = $;
      if (T.critical) {
        p = !1, m = T;
        continue;
      }
      const w = Wt((L) => x, (L) => (C) => v("Just", { head: L, tail: C }), y), b = Wt((L) => x, (L) => (C) => v("Just", { head: L, tail: C }), N);
      if (w.tag === "Just" && b.tag === "Just") {
        const L = w._1.head > b._1.head - s && w._1.head < b._1.head + s ? { ...T, critical: !0 } : w._1.head > b._1.head - r && w._1.head < b._1.head + r ? { ...T, conflicts: T.conflicts + 1 | 0 } : T;
        if (L.critical) {
          p = !1, m = L;
          continue;
        }
        if (w._1.head <= b._1.head) {
          l = w._1.tail, h = N, $ = L;
          continue;
        }
        l = y, h = b._1.tail, $ = L;
        continue;
      }
      p = !1, m = T;
    }
    return m;
  })(u)(c)({ conflicts: 0, critical: !1 }), i = (s, u, c) => {
    if (ht(J(ht)(-1e18)(u.incoming))(J(ht)(-1e18)(u.outgoing)) - dt(J(dt)(1e18)(u.incoming))(J(dt)(1e18)(u.outgoing)) < 1e-3 || ht(J(ht)(-1e18)(c.incoming))(J(ht)(-1e18)(c.outgoing)) - dt(J(dt)(1e18)(c.incoming))(J(dt)(1e18)(c.outgoing)) < 1e-3)
      return [];
    const a = o(s, u.outgoing, c.incoming), g = o(s, c.outgoing, u.incoming);
    if (a.critical || g.critical)
      return [...a.critical ? [{ src: c.id, tgt: u.id, weight: 1, kind: ci }] : [], ...g.critical ? [{ src: u.id, tgt: c.id, weight: 1, kind: ci }] : []];
    const _ = dt(J(dt)(1e18)(u.incoming))(J(dt)(1e18)(u.outgoing)), d = ht(J(ht)(-1e18)(u.incoming))(J(ht)(-1e18)(u.outgoing)), l = dt(J(dt)(1e18)(c.incoming))(J(dt)(1e18)(c.outgoing)), h = ht(J(ht)(-1e18)(c.incoming))(J(ht)(-1e18)(c.outgoing)), $ = (1 * a.conflicts | 0) + (16 * (J((m) => (y) => y > h ? m : y >= l ? m + 1 | 0 : m)(0)(u.outgoing) + J((m) => (y) => y > d ? m : y >= _ ? m + 1 | 0 : m)(0)(c.incoming) | 0) | 0) | 0, p = (1 * g.conflicts | 0) + (16 * (J((m) => (y) => y > d ? m : y >= _ ? m + 1 | 0 : m)(0)(c.outgoing) + J((m) => (y) => y > h ? m : y >= l ? m + 1 | 0 : m)(0)(u.incoming) | 0) | 0) | 0;
    return $ < p ? [{ src: u.id, tgt: c.id, weight: p - $ | 0, kind: ui }] : $ > p ? [{ src: c.id, tgt: u.id, weight: $ - p | 0, kind: ui }] : $ > 0 ? [{ src: u.id, tgt: c.id, weight: 0, kind: ui }, { src: c.id, tgt: u.id, weight: 0, kind: ui }] : [];
  };
  return J((s) => (u) => J((c) => (a) => U(A)(a._1)(a._2)(c))(s)((() => {
    const c = J((G) => (R) => {
      const nt = R.edge.from.node + "|" + (() => {
        if (R.edge.from.port.tag === "Just")
          return R.edge.from.port._1;
        if (R.edge.from.port.tag === "Nothing")
          return "_auto_" + R.edge.id;
        f();
      })(), et = da(nt)(G.entries);
      if (et.tag === "Nothing")
        return {
          ...G,
          entries: U(A)(nt)({
            id: 0,
            members: [R.edge.id],
            incoming: [R.fromPos._1],
            outgoing: [R.toPos._1],
            slot: 0,
            mark: 0,
            splitBy: x,
            splitPartner: x
          })(G.entries),
          order: [...G.order, nt]
        };
      if (et.tag === "Just")
        return {
          ...G,
          entries: U(A)(nt)({
            ...et._1,
            members: [...et._1.members, R.edge.id],
            incoming: [...hr((z) => z < R.fromPos._1)(et._1.incoming).init, R.fromPos._1, ...hr((z) => z <= R.fromPos._1)(et._1.incoming).rest],
            outgoing: [...hr((z) => z < R.toPos._1)(et._1.outgoing).init, R.toPos._1, ...hr((z) => z <= R.toPos._1)(et._1.outgoing).rest]
          })(G.entries)
        };
      f();
    })({ entries: I, order: [] })(u._2), a = Bt((G) => (R) => ({ ...R, id: G }))(yt((G) => da(G)(c.entries))(c.order));
    if (a.length === 0)
      return [];
    const g = J((G) => (R) => G.prev.tag === "Just" && R - G.prev._1 < 1e-9 ? G : { prev: v("Just", R), out: [...G.out, R] })({ prev: x, out: [] })(Et(ct.compare)([
      ...Tt(a)((G) => G.incoming),
      ...Tt(a)((G) => G.outgoing)
    ])).out, _ = g.length < 2 ? 0.2 * r : 0.2 * J((G) => (R) => {
      if (G.prev.tag === "Nothing")
        return { prev: v("Just", R), mn: G.mn };
      if (G.prev.tag === "Just")
        return { prev: v("Just", R), mn: dt(G.mn)(R - G.prev._1) };
      f();
    })({ prev: x, mn: 1e18 })(g).mn, d = {
      segments: a,
      deps: (() => {
        const G = a.length;
        return Tt(Tt(Ft(0, G - 2 | 0))((R) => Tt(Ft(R + 1 | 0, G - 1 | 0))((nt) => [
          k(R, nt)
        ])))((R) => R._1 >= 0 && R._1 < a.length ? R._2 >= 0 && R._2 < a.length ? i(_, a[R._1], a[R._2]) : [] : []);
      })()
    }, l = ft(
      (G) => {
        if (G.kind === "Critical")
          return !0;
        if (G.kind === "Regular")
          return !1;
        f();
      },
      d.deps
    ), h = (() => {
      if (l.length < 2)
        return d;
      const G = Sr((() => {
        const Q = d.segments;
        return q((E) => k(E.id, E.mark))((() => {
          const E = Q.length, S = (B) => {
            let W = B, K = !0, V;
            for (; K; ) {
              const D = W, M = Mt((Z) => {
                const tt = It(Z)(D.inWeight);
                if (tt.tag === "Nothing")
                  return !0;
                if (tt.tag === "Just")
                  return tt._1 === 0;
                f();
              })(D.remaining);
              if (M.tag === "Nothing") {
                K = !1, V = D;
                continue;
              }
              if (M.tag === "Just") {
                const Z = M._1;
                W = {
                  ...D,
                  inWeight: J((tt) => (j) => kt(ot)(cn)(j.tgt)(-j.weight)(tt))(D.inWeight)((() => {
                    const tt = It(Z)(D.depsBySrc);
                    if (tt.tag === "Nothing")
                      return [];
                    if (tt.tag === "Just")
                      return tt._1;
                    f();
                  })()),
                  marks: U(ot)(Z)(D.nextSource)(D.marks),
                  nextSource: D.nextSource + 1 | 0,
                  outWeight: J((tt) => (j) => kt(ot)(cn)(j.src)(-j.weight)(tt))(D.outWeight)((() => {
                    const tt = It(Z)(D.depsByTgt);
                    if (tt.tag === "Nothing")
                      return [];
                    if (tt.tag === "Just")
                      return tt._1;
                    f();
                  })()),
                  remaining: ft((tt) => tt !== Z, D.remaining)
                };
                continue;
              }
              f();
            }
            return V;
          }, O = (B) => {
            let W = B, K = !0, V;
            for (; K; ) {
              const D = W, M = Mt((Z) => {
                const tt = It(Z)(D.outWeight);
                if (tt.tag === "Nothing")
                  return !0;
                if (tt.tag === "Just")
                  return tt._1 === 0;
                f();
              })(D.remaining);
              if (M.tag === "Nothing") {
                K = !1, V = D;
                continue;
              }
              if (M.tag === "Just") {
                const Z = M._1;
                W = {
                  ...D,
                  inWeight: J((tt) => (j) => kt(ot)(cn)(j.tgt)(-j.weight)(tt))(D.inWeight)((() => {
                    const tt = It(Z)(D.depsBySrc);
                    if (tt.tag === "Nothing")
                      return [];
                    if (tt.tag === "Just")
                      return tt._1;
                    f();
                  })()),
                  marks: U(ot)(Z)(D.nextSink)(D.marks),
                  nextSink: D.nextSink - 1 | 0,
                  outWeight: J((tt) => (j) => kt(ot)(cn)(j.src)(-j.weight)(tt))(D.outWeight)((() => {
                    const tt = It(Z)(D.depsByTgt);
                    if (tt.tag === "Nothing")
                      return [];
                    if (tt.tag === "Just")
                      return tt._1;
                    f();
                  })()),
                  remaining: ft((tt) => tt !== Z, D.remaining)
                };
                continue;
              }
              f();
            }
            return V;
          };
          return ((B) => {
            let W = B, K = !0, V;
            for (; K; ) {
              const M = S(O(W));
              if (M.remaining.length === 0) {
                K = !1, V = q((Z) => {
                  const tt = It(Z.id)(M.marks), j = (() => {
                    if (tt.tag === "Nothing")
                      return Z.id;
                    if (tt.tag === "Just")
                      return tt._1;
                    f();
                  })();
                  return { ...Z, mark: j < E ? (j + E | 0) + 1 | 0 : j };
                })(Q);
                continue;
              }
              W = (() => {
                const Z = (j) => {
                  const ut = It(j)(M.outWeight), lt = It(j)(M.inWeight);
                  return (() => {
                    if (ut.tag === "Nothing")
                      return 0;
                    if (ut.tag === "Just")
                      return ut._1;
                    f();
                  })() - (() => {
                    if (lt.tag === "Nothing")
                      return 0;
                    if (lt.tag === "Just")
                      return lt._1;
                    f();
                  })() | 0;
                }, tt = Et((j) => (ut) => ot.compare(Z(ut))(Z(j)))(M.remaining);
                if (0 < tt.length) {
                  const j = tt[0];
                  return {
                    ...M,
                    inWeight: J((ut) => (lt) => kt(ot)(cn)(lt.tgt)(-lt.weight)(ut))(M.inWeight)((() => {
                      const ut = It(j)(M.depsBySrc);
                      if (ut.tag === "Nothing")
                        return [];
                      if (ut.tag === "Just")
                        return ut._1;
                      f();
                    })()),
                    marks: U(ot)(j)(M.nextSource)(M.marks),
                    nextSource: M.nextSource + 1 | 0,
                    outWeight: J((ut) => (lt) => kt(ot)(cn)(lt.src)(-lt.weight)(ut))(M.outWeight)((() => {
                      const ut = It(j)(M.depsByTgt);
                      if (ut.tag === "Nothing")
                        return [];
                      if (ut.tag === "Just")
                        return ut._1;
                      f();
                    })()),
                    remaining: ft((ut) => ut !== j, M.remaining)
                  };
                }
                return M;
              })();
            }
            return V;
          })({
            remaining: q((B) => B.id)(Q),
            marks: I,
            inWeight: J((B) => (W) => kt(ot)(cn)(W.tgt)(W.weight)(B))(I)(l),
            outWeight: J((B) => (W) => kt(ot)(cn)(W.src)(W.weight)(B))(I)(l),
            depsBySrc: J((B) => (W) => kt(ot)(un)(W.src)([W])(B))(I)(l),
            depsByTgt: J((B) => (W) => kt(ot)(un)(W.tgt)([W])(B))(I)(l),
            nextSink: E - 1 | 0,
            nextSource: E + 1 | 0
          });
        })());
      })()), R = ft(
        (Q) => {
          const E = It(Q.src)(G), S = It(Q.tgt)(G);
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
      if (R.length === 0)
        return d;
      const nt = J((Q) => (E) => {
        if (Yn(zr)(E.src)(Q.decisions) || Yn(zr)(E.tgt)(Q.decisions))
          return Q;
        const S = It(E.src)(Q.segMap), O = It(E.tgt)(Q.segMap);
        if (S.tag === "Just" && O.tag === "Just") {
          const P = (S._1.incoming.length + S._1.outgoing.length | 0) > 2 && (O._1.incoming.length + O._1.outgoing.length | 0) <= 2, B = P ? O._1 : S._1;
          return {
            decisions: [...Q.decisions, B.id],
            segMap: U(ot)(B.id)({ ...B, splitBy: v("Just", P ? S._1.id : O._1.id) })(Q.segMap)
          };
        }
        return Q;
      })({ decisions: [], segMap: Sr(q((Q) => k(Q.id, Q))(d.segments)) })(R), et = nt.segMap, z = J((Q) => (E) => {
        const S = dt(J(dt)(1e18)(E.incoming))(J(dt)(1e18)(E.outgoing)), O = ht(J(ht)(-1e18)(E.incoming))(J(ht)(-1e18)(E.outgoing)), P = ft(
          (D) => D.a.startPosition <= O && D.a.endPosition >= S,
          Bt((D) => (M) => ({ i: D, a: M }))(Q.freeAreas)
        );
        if (P.length === 0) {
          const D = {
            ...E,
            incoming: Et(ct.compare)(E.incoming),
            outgoing: Et(ct.compare)([(S + O) / 2]),
            splitPartner: v("Just", Q.nextId)
          }, M = {
            id: Q.nextId,
            incoming: Et(ct.compare)([(S + O) / 2]),
            mark: 0,
            members: E.members,
            outgoing: Et(ct.compare)(E.outgoing),
            slot: 0,
            splitBy: x,
            splitPartner: v("Just", E.id)
          };
          return {
            segMap: U(ot)(M.id)(M)(U(ot)(D.id)(D)(Q.segMap)),
            freeAreas: Q.freeAreas,
            nextId: Q.nextId + 1 | 0
          };
        }
        const B = 0 < P.length ? v("Just", P[0]) : x, W = (() => {
          if (B.tag === "Nothing")
            return { i: 0, a: { startPosition: 0, endPosition: 0, size: 0 } };
          if (B.tag === "Just") {
            if (P.length === 1)
              return B._1;
            const D = q((M) => ({
              c: M,
              rating: (() => {
                const Z = (M.a.startPosition + M.a.endPosition) / 2, tt = [Z], j = [Z], ut = J((() => {
                  const qt = Q.segMap;
                  return (wt) => (Ht) => {
                    const pt = It(Ht.tgt)(qt);
                    if (pt.tag === "Nothing")
                      return wt;
                    if (pt.tag === "Just") {
                      const xt = dt(J(dt)(1e18)(pt._1.incoming))(J(dt)(1e18)(pt._1.outgoing)), $t = ht(J(ht)(-1e18)(pt._1.incoming))(J(ht)(-1e18)(pt._1.outgoing)), mt = dt(J(dt)(1e18)(E.incoming))(J(dt)(1e18)(tt)), gt = (() => {
                        const Gt = ht(J(ht)(-1e18)(E.incoming))(J(ht)(-1e18)(tt)), Ct = J((Kt) => (fn) => fn > $t ? Kt : fn >= xt ? Kt + 1 | 0 : Kt)(0)(tt) + J((Kt) => (fn) => fn > Gt ? Kt : fn >= mt ? Kt + 1 | 0 : Kt)(0)(pt._1.incoming) | 0, ie = dt(J(dt)(1e18)(E.incoming))(J(dt)(1e18)(tt)), zn = ht(J(ht)(-1e18)(E.incoming))(J(ht)(-1e18)(tt)), Mn = dt(J(dt)(1e18)(pt._1.incoming))(J(dt)(1e18)(pt._1.outgoing)), Rn = ht(J(ht)(-1e18)(pt._1.incoming))(J(ht)(-1e18)(pt._1.outgoing)), Ye = J((Kt) => (fn) => fn > zn ? Kt : fn >= ie ? Kt + 1 | 0 : Kt)(0)(pt._1.outgoing) + J((Kt) => (fn) => fn > Rn ? Kt : fn >= Mn ? Kt + 1 | 0 : Kt)(0)(E.incoming) | 0;
                        return Ct === Ye ? Ct > 0 ? { ...wt, deps: wt.deps + 2 | 0, crossings: wt.crossings + Ct | 0 } : wt : { ...wt, deps: wt.deps + 1 | 0, crossings: wt.crossings + Ar(Ct)(Ye) | 0 };
                      })(), _t = dt(J(dt)(1e18)(pt._1.incoming))(J(dt)(1e18)(pt._1.outgoing)), it = ht(J(ht)(-1e18)(pt._1.incoming))(J(ht)(-1e18)(pt._1.outgoing)), at = dt(J(dt)(1e18)(j))(J(dt)(1e18)(E.outgoing)), Jt = ht(J(ht)(-1e18)(j))(J(ht)(-1e18)(E.outgoing)), Nt = J((Gt) => (Ct) => Ct > it ? Gt : Ct >= _t ? Gt + 1 | 0 : Gt)(0)(E.outgoing) + J((Gt) => (Ct) => Ct > Jt ? Gt : Ct >= at ? Gt + 1 | 0 : Gt)(0)(pt._1.incoming) | 0, bt = dt(J(dt)(1e18)(j))(J(dt)(1e18)(E.outgoing)), Dt = ht(J(ht)(-1e18)(j))(J(ht)(-1e18)(E.outgoing)), fe = dt(J(dt)(1e18)(pt._1.incoming))(J(dt)(1e18)(pt._1.outgoing)), qn = ht(J(ht)(-1e18)(pt._1.incoming))(J(ht)(-1e18)(pt._1.outgoing)), Bn = J((Gt) => (Ct) => Ct > Dt ? Gt : Ct >= bt ? Gt + 1 | 0 : Gt)(0)(pt._1.outgoing) + J((Gt) => (Ct) => Ct > qn ? Gt : Ct >= fe ? Gt + 1 | 0 : Gt)(0)(j) | 0;
                      return Nt === Bn ? Nt > 0 ? { ...gt, deps: gt.deps + 2 | 0, crossings: gt.crossings + Nt | 0 } : gt : { ...gt, deps: gt.deps + 1 | 0, crossings: gt.crossings + Ar(Nt)(Bn) | 0 };
                    }
                    f();
                  };
                })())(J((() => {
                  const qt = Q.segMap;
                  return (wt) => (Ht) => {
                    const pt = It(Ht.src)(qt);
                    if (pt.tag === "Nothing")
                      return wt;
                    if (pt.tag === "Just") {
                      const xt = dt(J(dt)(1e18)(pt._1.incoming))(J(dt)(1e18)(pt._1.outgoing)), $t = ht(J(ht)(-1e18)(pt._1.incoming))(J(ht)(-1e18)(pt._1.outgoing)), mt = dt(J(dt)(1e18)(E.incoming))(J(dt)(1e18)(tt)), gt = (() => {
                        const Gt = ht(J(ht)(-1e18)(E.incoming))(J(ht)(-1e18)(tt)), Ct = J((Kt) => (fn) => fn > $t ? Kt : fn >= xt ? Kt + 1 | 0 : Kt)(0)(tt) + J((Kt) => (fn) => fn > Gt ? Kt : fn >= mt ? Kt + 1 | 0 : Kt)(0)(pt._1.incoming) | 0, ie = dt(J(dt)(1e18)(E.incoming))(J(dt)(1e18)(tt)), zn = ht(J(ht)(-1e18)(E.incoming))(J(ht)(-1e18)(tt)), Mn = dt(J(dt)(1e18)(pt._1.incoming))(J(dt)(1e18)(pt._1.outgoing)), Rn = ht(J(ht)(-1e18)(pt._1.incoming))(J(ht)(-1e18)(pt._1.outgoing)), Ye = J((Kt) => (fn) => fn > zn ? Kt : fn >= ie ? Kt + 1 | 0 : Kt)(0)(pt._1.outgoing) + J((Kt) => (fn) => fn > Rn ? Kt : fn >= Mn ? Kt + 1 | 0 : Kt)(0)(E.incoming) | 0;
                        return Ct === Ye ? Ct > 0 ? { ...wt, deps: wt.deps + 2 | 0, crossings: wt.crossings + Ct | 0 } : wt : { ...wt, deps: wt.deps + 1 | 0, crossings: wt.crossings + Ar(Ct)(Ye) | 0 };
                      })(), _t = dt(J(dt)(1e18)(pt._1.incoming))(J(dt)(1e18)(pt._1.outgoing)), it = ht(J(ht)(-1e18)(pt._1.incoming))(J(ht)(-1e18)(pt._1.outgoing)), at = dt(J(dt)(1e18)(j))(J(dt)(1e18)(E.outgoing)), Jt = ht(J(ht)(-1e18)(j))(J(ht)(-1e18)(E.outgoing)), Nt = J((Gt) => (Ct) => Ct > it ? Gt : Ct >= _t ? Gt + 1 | 0 : Gt)(0)(E.outgoing) + J((Gt) => (Ct) => Ct > Jt ? Gt : Ct >= at ? Gt + 1 | 0 : Gt)(0)(pt._1.incoming) | 0, bt = dt(J(dt)(1e18)(j))(J(dt)(1e18)(E.outgoing)), Dt = ht(J(ht)(-1e18)(j))(J(ht)(-1e18)(E.outgoing)), fe = dt(J(dt)(1e18)(pt._1.incoming))(J(dt)(1e18)(pt._1.outgoing)), qn = ht(J(ht)(-1e18)(pt._1.incoming))(J(ht)(-1e18)(pt._1.outgoing)), Bn = J((Gt) => (Ct) => Ct > Dt ? Gt : Ct >= bt ? Gt + 1 | 0 : Gt)(0)(pt._1.outgoing) + J((Gt) => (Ct) => Ct > qn ? Gt : Ct >= fe ? Gt + 1 | 0 : Gt)(0)(j) | 0;
                      return Nt === Bn ? Nt > 0 ? { ...gt, deps: gt.deps + 2 | 0, crossings: gt.crossings + Nt | 0 } : gt : { ...gt, deps: gt.deps + 1 | 0, crossings: gt.crossings + Ar(Nt)(Bn) | 0 };
                    }
                    f();
                  };
                })())({ crossings: 0, deps: 0 })(ft((qt) => qt.tgt === E.id, d.deps)))(ft((qt) => qt.src === E.id, d.deps)), lt = (() => {
                  if (E.splitBy.tag === "Just")
                    return It(E.splitBy._1)(Q.segMap);
                  if (E.splitBy.tag === "Nothing")
                    return x;
                  f();
                })();
                if (lt.tag === "Just")
                  return {
                    ...ut,
                    deps: ut.deps + 2 | 0,
                    crossings: (() => {
                      const qt = dt(J(dt)(1e18)(lt._1.incoming))(J(dt)(1e18)(lt._1.outgoing)), wt = dt(J(dt)(1e18)(j))(J(dt)(1e18)(E.outgoing)), Ht = ht(J(ht)(-1e18)(lt._1.incoming))(J(ht)(-1e18)(lt._1.outgoing)), pt = ht(J(ht)(-1e18)(j))(J(ht)(-1e18)(E.outgoing)), xt = dt(J(dt)(1e18)(E.incoming))(J(dt)(1e18)(tt));
                      return ut.crossings + (() => {
                        const $t = dt(J(dt)(1e18)(lt._1.incoming))(J(dt)(1e18)(lt._1.outgoing)), mt = ht(J(ht)(-1e18)(E.incoming))(J(ht)(-1e18)(tt)), gt = ht(J(ht)(-1e18)(lt._1.incoming))(J(ht)(-1e18)(lt._1.outgoing));
                        return ((J((_t) => (it) => it > Ht ? _t : it >= qt ? _t + 1 | 0 : _t)(0)(tt) + J((_t) => (it) => it > mt ? _t : it >= xt ? _t + 1 | 0 : _t)(0)(lt._1.incoming) | 0) + J((_t) => (it) => it > pt ? _t : it >= wt ? _t + 1 | 0 : _t)(0)(lt._1.outgoing) | 0) + J((_t) => (it) => it > gt ? _t : it >= $t ? _t + 1 | 0 : _t)(0)(j) | 0;
                      })() | 0;
                    })()
                  };
                if (lt.tag === "Nothing")
                  return ut;
                f();
              })()
            }))(P);
            return J((M) => (Z) => Z.rating.crossings < M.rating.crossings || !(Z.rating.crossings > M.rating.crossings) && (Z.rating.deps < M.rating.deps || !(Z.rating.deps > M.rating.deps) && Z.c.a.size > M.c.a.size) ? Z : M)(0 < D.length ? D[0] : { c: B._1, rating: { crossings: 1e6, deps: 1e6 } })(D).c;
          }
          f();
        })(), K = {
          ...E,
          incoming: Et(ct.compare)(E.incoming),
          outgoing: Et(ct.compare)([(W.a.startPosition + W.a.endPosition) / 2]),
          splitPartner: v("Just", Q.nextId)
        }, V = {
          id: Q.nextId,
          incoming: Et(ct.compare)([(W.a.startPosition + W.a.endPosition) / 2]),
          mark: 0,
          members: E.members,
          outgoing: Et(ct.compare)(E.outgoing),
          slot: 0,
          splitBy: x,
          splitPartner: v("Just", E.id)
        };
        return {
          segMap: U(ot)(V.id)(V)(U(ot)(K.id)(K)(Q.segMap)),
          freeAreas: (() => {
            if (W.i >= 0 && W.i < Q.freeAreas.length) {
              const D = Sf(Yt, x, W.i, Q.freeAreas), M = (() => {
                if (D.tag === "Nothing")
                  return Q.freeAreas;
                if (D.tag === "Just")
                  return D._1;
                f();
              })();
              if (Q.freeAreas[W.i].size / 2 < _)
                return M;
              const Z = (Q.freeAreas[W.i].startPosition + Q.freeAreas[W.i].endPosition) / 2, tt = Z - _, j = Z + _;
              return [
                ...W.i < 1 ? [] : Lt(0, W.i, M),
                ...Q.freeAreas[W.i].startPosition <= tt ? [{ startPosition: Q.freeAreas[W.i].startPosition, endPosition: tt, size: tt - Q.freeAreas[W.i].startPosition }] : [],
                ...j <= Q.freeAreas[W.i].endPosition ? [{ startPosition: j, endPosition: Q.freeAreas[W.i].endPosition, size: Q.freeAreas[W.i].endPosition - j }] : [],
                ...W.i < 1 ? M : Lt(W.i, M.length, M)
              ];
            }
            return Q.freeAreas;
          })(),
          nextId: Q.nextId + 1 | 0
        };
      })({
        segMap: et,
        freeAreas: (() => {
          const Q = Et(ct.compare)([
            ...Tt(d.segments)((E) => E.incoming),
            ...Tt(d.segments)((E) => E.outgoing)
          ]);
          return yt(mm)(bn(
            (E) => (S) => S - E >= 2 * _ ? v("Just", { startPosition: E + _, endPosition: S - _, size: S - E - 2 * _ }) : x,
            Q,
            Lt(1, Q.length, Q)
          ));
        })(),
        nextId: d.segments.length
      })(Et((Q) => (E) => ct.compare(ht(J(ht)(-1e18)(Q.incoming))(J(ht)(-1e18)(Q.outgoing)) - dt(J(dt)(1e18)(Q.incoming))(J(dt)(1e18)(Q.outgoing)))(ht(J(ht)(-1e18)(E.incoming))(J(ht)(-1e18)(E.outgoing)) - dt(J(dt)(1e18)(E.incoming))(J(dt)(1e18)(E.outgoing))))(yt((Q) => It(Q)(et))(nt.decisions)));
      return {
        segments: (() => {
          const Q = (E, S) => {
            if (E.tag === "Leaf")
              return S;
            if (E.tag === "Node")
              return Q(E._5, Xt("Cons", E._4, Q(E._6, S)));
            f();
          };
          return St(Ut.foldr, Q(z.segMap, Vt));
        })(),
        deps: (() => {
          const Q = z.segMap, E = (P, B) => {
            if (P.tag === "Leaf")
              return B;
            if (P.tag === "Node")
              return E(P._5, Xt("Cons", P._4, E(P._6, B)));
            f();
          }, S = St(Ut.foldr, E(Q, Vt)), O = S.length;
          return [
            ...Tt(Tt(Ft(0, O - 2 | 0))((P) => Tt(Ft(P + 1 | 0, O - 1 | 0))((B) => [
              k(P, B)
            ])))((P) => P._1 >= 0 && P._1 < S.length ? P._2 >= 0 && P._2 < S.length ? S[P._1].splitPartner.tag !== "Nothing" && S[P._1].splitPartner.tag === "Just" && S[P._1].splitPartner._1 === S[P._2].id || S[P._2].splitPartner.tag !== "Nothing" && S[P._2].splitPartner.tag === "Just" && S[P._2].splitPartner._1 === S[P._1].id ? [] : i(_, S[P._1], S[P._2]) : [] : []),
            ...Tt(S)((P) => P.splitBy.tag === "Just" && P.splitPartner.tag === "Just" && (() => {
              const B = It(P.splitPartner._1)(Q);
              if (B.tag === "Nothing")
                return !1;
              if (B.tag === "Just")
                return !0;
              f();
            })() && (() => {
              const B = It(P.splitBy._1)(Q);
              if (B.tag === "Nothing")
                return !1;
              if (B.tag === "Just")
                return !0;
              f();
            })() ? [{ src: P.id, tgt: P.splitBy._1, weight: 1, kind: ci }, { src: P.splitBy._1, tgt: P.splitPartner._1, weight: 1, kind: ci }] : [])
          ];
        })()
      };
    })(), $ = h.segments, p = $.length, m = (G) => {
      let R = G, nt = !0, et;
      for (; nt; ) {
        const z = R, Q = Mt((E) => {
          const S = It(E)(z.inWeight);
          if (S.tag === "Nothing")
            return !0;
          if (S.tag === "Just")
            return S._1 === 0;
          f();
        })(z.remaining);
        if (Q.tag === "Nothing") {
          nt = !1, et = z;
          continue;
        }
        if (Q.tag === "Just") {
          const E = Q._1;
          R = {
            ...z,
            inWeight: J((S) => (O) => kt(ot)(cn)(O.tgt)(-O.weight)(S))(z.inWeight)((() => {
              const S = It(E)(z.depsBySrc);
              if (S.tag === "Nothing")
                return [];
              if (S.tag === "Just")
                return S._1;
              f();
            })()),
            marks: U(ot)(E)(z.nextSource)(z.marks),
            nextSource: z.nextSource + 1 | 0,
            outWeight: J((S) => (O) => kt(ot)(cn)(O.src)(-O.weight)(S))(z.outWeight)((() => {
              const S = It(E)(z.depsByTgt);
              if (S.tag === "Nothing")
                return [];
              if (S.tag === "Just")
                return S._1;
              f();
            })()),
            remaining: ft((S) => S !== E, z.remaining)
          };
          continue;
        }
        f();
      }
      return et;
    }, y = (G) => {
      let R = G, nt = !0, et;
      for (; nt; ) {
        const z = R, Q = Mt((E) => {
          const S = It(E)(z.outWeight);
          if (S.tag === "Nothing")
            return !0;
          if (S.tag === "Just")
            return S._1 === 0;
          f();
        })(z.remaining);
        if (Q.tag === "Nothing") {
          nt = !1, et = z;
          continue;
        }
        if (Q.tag === "Just") {
          const E = Q._1;
          R = {
            ...z,
            inWeight: J((S) => (O) => kt(ot)(cn)(O.tgt)(-O.weight)(S))(z.inWeight)((() => {
              const S = It(E)(z.depsBySrc);
              if (S.tag === "Nothing")
                return [];
              if (S.tag === "Just")
                return S._1;
              f();
            })()),
            marks: U(ot)(E)(z.nextSink)(z.marks),
            nextSink: z.nextSink - 1 | 0,
            outWeight: J((S) => (O) => kt(ot)(cn)(O.src)(-O.weight)(S))(z.outWeight)((() => {
              const S = It(E)(z.depsByTgt);
              if (S.tag === "Nothing")
                return [];
              if (S.tag === "Just")
                return S._1;
              f();
            })()),
            remaining: ft((S) => S !== E, z.remaining)
          };
          continue;
        }
        f();
      }
      return et;
    }, T = ((G) => {
      let R = G, nt = !0, et;
      for (; nt; ) {
        const Q = m(y(R));
        if (Q.remaining.length === 0) {
          nt = !1, et = q((E) => {
            const S = It(E.id)(Q.marks), O = (() => {
              if (S.tag === "Nothing")
                return E.id;
              if (S.tag === "Just")
                return S._1;
              f();
            })();
            return { ...E, mark: O < p ? (O + p | 0) + 1 | 0 : O };
          })($);
          continue;
        }
        R = (() => {
          const E = (O) => {
            const P = It(O)(Q.outWeight), B = It(O)(Q.inWeight);
            return (() => {
              if (P.tag === "Nothing")
                return 0;
              if (P.tag === "Just")
                return P._1;
              f();
            })() - (() => {
              if (B.tag === "Nothing")
                return 0;
              if (B.tag === "Just")
                return B._1;
              f();
            })() | 0;
          }, S = Et((O) => (P) => ot.compare(E(P))(E(O)))(Q.remaining);
          if (0 < S.length) {
            const O = S[0];
            return {
              ...Q,
              inWeight: J((P) => (B) => kt(ot)(cn)(B.tgt)(-B.weight)(P))(Q.inWeight)((() => {
                const P = It(O)(Q.depsBySrc);
                if (P.tag === "Nothing")
                  return [];
                if (P.tag === "Just")
                  return P._1;
                f();
              })()),
              marks: U(ot)(O)(Q.nextSource)(Q.marks),
              nextSource: Q.nextSource + 1 | 0,
              outWeight: J((P) => (B) => kt(ot)(cn)(B.src)(-B.weight)(P))(Q.outWeight)((() => {
                const P = It(O)(Q.depsByTgt);
                if (P.tag === "Nothing")
                  return [];
                if (P.tag === "Just")
                  return P._1;
                f();
              })()),
              remaining: ft((P) => P !== O, Q.remaining)
            };
          }
          return Q;
        })();
      }
      return et;
    })({
      remaining: q((G) => G.id)($),
      marks: I,
      inWeight: J((G) => (R) => kt(ot)(cn)(R.tgt)(R.weight)(G))(I)(h.deps),
      outWeight: J((G) => (R) => kt(ot)(cn)(R.src)(R.weight)(G))(I)(h.deps),
      depsBySrc: J((G) => (R) => kt(ot)(un)(R.src)([R])(G))(I)(h.deps),
      depsByTgt: J((G) => (R) => kt(ot)(un)(R.tgt)([R])(G))(I)(h.deps),
      nextSink: p - 1 | 0,
      nextSource: p + 1 | 0
    }), w = (() => {
      const G = (() => {
        const z = Sr(q((Q) => k(Q.id, Q.mark))(T));
        return {
          segments: T,
          deps: yt((Q) => (() => {
            if (Q.kind === "Critical")
              return !0;
            if (Q.kind === "Regular")
              return !1;
            f();
          })() ? v("Just", Q) : (() => {
            const E = It(Q.src)(z), S = It(Q.tgt)(z);
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
          })() ? Q.weight === 0 ? x : v("Just", { src: Q.tgt, tgt: Q.src, weight: Q.weight, kind: Q.kind }) : v("Just", Q))(h.deps)
        };
      })(), R = J((z) => (Q) => kt(ot)(cn)(Q.tgt)(1)(z))(I)(G.deps), et = ((z) => {
        let Q = z, E = !0, S;
        for (; E; ) {
          const O = Q, P = Wt((B) => x, (B) => (W) => v("Just", { head: B, tail: W }), O.queue);
          if (P.tag === "Nothing") {
            E = !1, S = O;
            continue;
          }
          if (P.tag === "Just") {
            Q = J((() => {
              const B = It(P._1.head)(O.slots), W = (() => {
                if (B.tag === "Nothing")
                  return 0;
                if (B.tag === "Just")
                  return B._1;
                f();
              })();
              return (K) => (V) => {
                const D = It(V)(K.inDegree), M = (() => {
                  if (D.tag === "Nothing")
                    return -1;
                  if (D.tag === "Just")
                    return D._1 - 1 | 0;
                  f();
                })();
                return {
                  ...K,
                  slots: U(ot)(V)(_a((() => {
                    const Z = It(V)(K.slots);
                    if (Z.tag === "Nothing")
                      return 0;
                    if (Z.tag === "Just")
                      return Z._1;
                    f();
                  })())(W + 1 | 0))(K.slots),
                  inDegree: U(ot)(V)(M)(K.inDegree),
                  queue: M === 0 ? [...K.queue, V] : K.queue
                };
              };
            })())({ ...O, queue: P._1.tail })((() => {
              const B = It(P._1.head)(O.adj);
              if (B.tag === "Nothing")
                return [];
              if (B.tag === "Just")
                return B._1;
              f();
            })());
            continue;
          }
          f();
        }
        return S;
      })({
        slots: Sr(q((z) => k(z.id, 0))(G.segments)),
        inDegree: R,
        adj: J((z) => (Q) => kt(ot)(un)(Q.src)([Q.tgt])(z))(I)(G.deps),
        queue: q((z) => z.id)(ft(
          (z) => {
            const Q = It(z.id)(R);
            if (Q.tag === "Nothing")
              return !0;
            if (Q.tag === "Just")
              return Q._1 === 0;
            f();
          },
          G.segments
        ))
      });
      return Et((z) => (Q) => ot.compare(z.slot)(Q.slot))(q((z) => ({
        ...z,
        slot: (() => {
          const Q = It(z.id)(et.slots);
          if (Q.tag === "Nothing")
            return 0;
          if (Q.tag === "Just")
            return Q._1;
          f();
        })()
      }))(G.segments));
    })(), b = 1 + J((G) => (R) => _a(G)(R.slot))(0)(w) | 0, L = Tt(w)((G) => G.members), C = ft((G) => Yn(pe)(G.edge.id)(L), t), H = J(ht)(-1e18)(q((G) => G.fromPos._2)(C)), X = J(dt)(1e18)(q((G) => G.toPos._2)(C));
    if (H > X) {
      const G = Sr(q((R) => k(R.id, R))(w));
      return Xn(q((R) => q((nt) => k(
        nt,
        {
          slot: R.slot,
          slotCount: b,
          gapTop: X,
          gapBottom: H,
          partner: (() => {
            if (R.splitPartner.tag === "Just") {
              const et = It(R.splitPartner._1)(G);
              if (et.tag === "Just")
                return v("Just", { slot: et._1.slot, splitX: 0 < et._1.incoming.length ? et._1.incoming[0] : 0 });
              if (et.tag === "Nothing")
                return x;
              f();
            }
            if (R.splitPartner.tag === "Nothing")
              return x;
            f();
          })()
        }
      ))(R.members))(ft(
        (R) => {
          if (R.splitPartner.tag === "Just") {
            const nt = It(R.splitPartner._1)(G);
            return !(nt.tag === "Just" && (() => {
              if (nt._1.splitBy.tag === "Nothing")
                return !1;
              if (nt._1.splitBy.tag === "Just")
                return !0;
              f();
            })());
          }
          if (R.splitPartner.tag === "Nothing")
            return !0;
          f();
        },
        w
      )));
    }
    const Y = Sr(q((G) => k(G.id, G))(w));
    return Xn(q((G) => q((R) => k(
      R,
      {
        slot: G.slot,
        slotCount: b,
        gapTop: H,
        gapBottom: X,
        partner: (() => {
          if (G.splitPartner.tag === "Just") {
            const nt = It(G.splitPartner._1)(Y);
            if (nt.tag === "Just")
              return v("Just", { slot: nt._1.slot, splitX: 0 < nt._1.incoming.length ? nt._1.incoming[0] : 0 });
            if (nt.tag === "Nothing")
              return x;
            f();
          }
          if (G.splitPartner.tag === "Nothing")
            return x;
          f();
        })()
      }
    ))(G.members))(ft(
      (G) => {
        if (G.splitPartner.tag === "Just") {
          const R = It(G.splitPartner._1)(Y);
          return !(R.tag === "Just" && (() => {
            if (R._1.splitBy.tag === "Nothing")
              return !1;
            if (R._1.splitBy.tag === "Just")
              return !0;
            f();
          })());
        }
        if (G.splitPartner.tag === "Nothing")
          return !0;
        f();
      },
      w
    )));
  })()))(I)($m(J((s) => (u) => {
    const c = Br(u.edge.from.node)(e);
    if (c.tag === "Just") {
      const a = Br(u.edge.to.node)(e);
      return a.tag === "Just" && c._1.layer !== a._1.layer ? kt(ot)(un)(Ar(c._1.layer)(a._1.layer))([u])(s) : s;
    }
    return s;
  })(I)((() => {
    const s = (u) => k(
      (() => {
        const c = Br(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.layer : 1e6;
      })(),
      (() => {
        const c = Br(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.order : 1e6;
      })()
    );
    return Et((u) => (c) => pm(s(u))(s(c)))(t);
  })())));
}, Nm = (t) => (n) => {
  const e = z0(t)(n), r = J((o) => (i) => U(A)(i.node)(i)(o))(I)(n);
  return J((o) => (i) => {
    const s = Br(i.edge.from.node)(r);
    if (s.tag === "Just") {
      const u = Br(i.edge.to.node)(r);
      if (u.tag === "Just" && s._1.layer !== u._1.layer) {
        const c = ym(i.edge.id)(e);
        if (c.tag === "Just")
          return U(ot)(Ar(s._1.layer)(u._1.layer))(c._1.slotCount)(o);
      }
      return o;
    }
    return o;
  })(I)(t);
}, Y0 = Ot.foldMap(/* @__PURE__ */ (() => {
  const t = { append: (n) => (e) => n || e };
  return { mempty: !1, Semigroup0: () => t };
})()), ln = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, _n = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, uo = (t) => (n) => (e) => (r) => Y0((o) => e >= o.x && e < o.x + o.w && n > o.y && t < o.y + o.h)(r), Fi = (t) => (n) => (e) => (r) => uo(ln(n)(e))(_n(n)(e))(r)(t), ai = /* @__PURE__ */ rt(4), xm = /* @__PURE__ */ Af((t) => {
  if (t.direction === "H") {
    const n = ln(t.start._1)(t.end._1);
    return [{ x: n, y: t.start._2 - 1, w: _n(t.start._1)(t.end._1) - n, h: 2 }];
  }
  if (t.direction === "V") {
    const n = ln(t.start._2)(t.end._2);
    return [{ x: t.start._1 - 1, y: n, w: 2, h: _n(t.start._2)(t.end._2) - n }];
  }
  f();
}), Eo = /* @__PURE__ */ Pf((t) => {
  const n = t.start._1 - t.end._1;
  return !((n < 0 ? -n < 1e-6 : n < 1e-6) && (() => {
    const e = t.start._2 - t.end._2;
    return e < 0 ? -e < 1e-6 : e < 1e-6;
  })());
}), Jm = (t) => (n) => (e) => {
  const r = Wt((o) => x, (o) => (i) => v("Just", { head: o, tail: i }), n);
  if (r.tag === "Nothing")
    return [{ start: t.start, end: e.end, direction: t.direction }];
  if (r.tag === "Just") {
    const o = (r._1.head.direction === "H" ? t.direction === "H" : r._1.head.direction === "V" && t.direction === "V") ? [{ start: t.start, end: r._1.head.end, direction: t.direction }] : [t, r._1.head], i = xr(r._1.tail);
    if (i.tag === "Nothing") {
      const s = o.length - 1 | 0;
      return s >= 0 && s < o.length && (o[s].direction === "H" ? e.direction === "H" : o[s].direction === "V" && e.direction === "V") ? [
        ...(() => {
          const u = o.length - 1 | 0;
          return u < 1 ? [] : Lt(0, u, o);
        })(),
        { start: o[s].start, end: e.end, direction: e.direction }
      ] : [...o, e];
    }
    if (i.tag === "Just")
      return (i._1.last.direction === "H" ? e.direction === "H" : i._1.last.direction === "V" && e.direction === "V") ? [...o, ...i._1.init, { start: i._1.last.start, end: e.end, direction: e.direction }] : [...o, ...r._1.tail, e];
  }
  f();
}, So = (t) => {
  const n = (r) => (o) => {
    const i = Wt((s) => x, (s) => (u) => v("Just", { head: s, tail: u }), o);
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
  }, e = Wt((r) => x, (r) => (o) => v("Just", { head: r, tail: o }), t);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return n(e._1.head)(e._1.tail);
  f();
}, co = (t) => (n) => (e) => (r) => Y0((o) => e >= o.y && e < o.y + o.h && n > o.x && t < o.x + o.w)(r), $o = (t) => (n) => (e) => (r) => co(ln(n)(e))(_n(n)(e))(r)(t), Tm = (t) => (n) => (e) => (r) => {
  const o = e + 2 | 0, i = o < 1 ? n : Lt(o, n.length, n), s = e < 1 ? [] : Lt(0, e, n), u = (e + 1 | 0) === (r - 1 | 0), c = e === 0, a = e >= 0 && e < n.length ? v("Just", n[e]) : x;
  if (a.tag === "Just") {
    const g = e + 1 | 0, _ = g >= 0 && g < n.length ? v("Just", n[g]) : x;
    if (_.tag === "Just") {
      const d = a._1.start._1 === _._1.end._1 && (!c || a._1.direction === "V") && (!u || _._1.direction === "V") && !Fi(t)(ln(a._1.start._2)(_._1.end._2))(_n(a._1.start._2)(_._1.end._2))(a._1.start._1) ? v("Just", [...s, { start: a._1.start, end: _._1.end, direction: nn }, ...i]) : x, l = a._1.start._2 === _._1.end._2 && (!c || a._1.direction === "H") && (!u || _._1.direction === "H") && !$o(t)(ln(a._1.start._1)(_._1.end._1))(_n(a._1.start._1)(_._1.end._1))(a._1.start._2) ? v("Just", [...s, { start: a._1.start, end: _._1.end, direction: tn }, ...i]) : x;
      return d.tag === "Nothing" ? l : d;
    }
    if (_.tag === "Nothing")
      return x;
    f();
  }
  if (a.tag === "Nothing")
    return x;
  f();
}, vm = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if ((c + 1 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const a = Tm(t)(n)(c)(e);
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
}, wm = (t) => (n) => (e) => (r) => {
  const o = (d, l, h) => !Fi(t)(ln(l)(h))(_n(l)(h))(d), i = e + 3 | 0, s = i < 1 ? n : Lt(i, n.length, n), u = e < 1 ? [] : Lt(0, e, n), c = (e + 2 | 0) === (r - 1 | 0), a = e === 0, g = (d, l, h) => !$o(t)(ln(l)(h))(_n(l)(h))(d), _ = e >= 0 && e < n.length ? v("Just", n[e]) : x;
  if (_.tag === "Just") {
    const d = e + 2 | 0, l = d >= 0 && d < n.length ? v("Just", n[d]) : x;
    if (l.tag === "Just") {
      const h = _._1.start._1 === l._1.end._1 && (!a || _._1.direction === "V") && (!c || l._1.direction === "V") && o(_._1.start._1, _._1.start._2, l._1.end._2) ? v("Just", [...u, { start: _._1.start, end: l._1.end, direction: nn }, ...s]) : _._1.start._2 === l._1.end._2 && (!a || _._1.direction === "H") && (!c || l._1.direction === "H") && g(_._1.start._2, _._1.start._1, l._1.end._1) ? v("Just", [...u, { start: _._1.start, end: l._1.end, direction: tn }, ...s]) : x, $ = (!a || _._1.direction === "V") && (!c || l._1.direction === "H") && o(_._1.start._1, _._1.start._2, l._1.end._2) && g(
        l._1.end._2,
        _._1.start._1,
        l._1.end._1
      ) ? v(
        "Just",
        [
          ...u,
          { start: _._1.start, end: k(_._1.start._1, l._1.end._2), direction: nn },
          { start: k(_._1.start._1, l._1.end._2), end: l._1.end, direction: tn },
          ...s
        ]
      ) : x, p = (!a || _._1.direction === "H") && (!c || l._1.direction === "V") && g(_._1.start._2, _._1.start._1, l._1.end._1) && o(
        l._1.end._1,
        _._1.start._2,
        l._1.end._2
      ) ? v(
        "Just",
        [
          ...u,
          { start: _._1.start, end: k(l._1.end._1, _._1.start._2), direction: tn },
          { start: k(l._1.end._1, _._1.start._2), end: l._1.end, direction: nn },
          ...s
        ]
      ) : x, m = $.tag === "Nothing" ? p : $;
      return h.tag === "Nothing" ? m : h;
    }
    if (l.tag === "Nothing")
      return x;
    f();
  }
  if (_.tag === "Nothing")
    return x;
  f();
}, bm = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if ((c + 2 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const a = wm(t)(n)(c)(e);
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
}, km = (t) => {
  const n = (e) => {
    let r = e, o = !0, i;
    for (; o; ) {
      const s = r, u = So(Eo(vm(t)(bm(t)(s))));
      if (u.length < s.length) {
        r = u;
        continue;
      }
      o = !1, i = u;
    }
    return i;
  };
  return (e) => n(So(Eo(e)));
}, Lm = (t) => (n) => (e) => (r) => {
  const o = ln(e)(r), i = _n(e)(r), s = ft((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = Et((a) => (g) => ct.compare(a.x)(g.x))(s);
    return 0 < c.length ? c[0].x - 1 : (e + r) / 2;
  }
  const u = Et((c) => (a) => ct.compare(a.x)(c.x))(q((c) => ({ ...c, x: c.x + c.w }))(s));
  return 0 < u.length ? u[0].x + 1 : (e + r) / 2;
}, Em = (t) => (n) => (e) => (r) => {
  const o = ln(e)(r), i = _n(e)(r), s = ft((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = Et((a) => (g) => ct.compare(a.y)(g.y))(s);
    return 0 < c.length ? c[0].y - 1 : (e + r) / 2;
  }
  const u = Et((c) => (a) => ct.compare(a.y)(c.y))(q((c) => ({ ...c, y: c.y + c.h }))(s));
  return 0 < u.length ? u[0].y + 1 : (e + r) / 2;
}, Sm = (t) => (n) => (e) => (r) => {
  const o = ln(e)(r), i = _n(e)(r), s = ft((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = Et((a) => (g) => ct.compare(g.x)(a.x))(q((a) => ({ ...a, x: a.x + a.w }))(s));
    return 0 < c.length ? c[0].x : (e + r) / 2;
  }
  const u = Et((c) => (a) => ct.compare(c.x)(a.x))(s);
  return 0 < u.length ? u[0].x - 1 : (e + r) / 2;
}, Cm = (t) => (n) => (e) => (r) => {
  const o = ln(e)(r), i = _n(e)(r), s = ft((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = Et((a) => (g) => ct.compare(g.y)(a.y))(q((a) => ({ ...a, y: a.y + a.h }))(s));
    return 0 < c.length ? c[0].y : (e + r) / 2;
  }
  const u = Et((c) => (a) => ct.compare(c.y)(a.y))(s);
  return 0 < u.length ? u[0].y - 1 : (e + r) / 2;
}, X0 = (t) => (n) => (e) => {
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
}, ha = (t) => (n) => (e) => (r) => (o) => {
  const i = ln(n)(e), s = _n(n)(e);
  if (!uo(i)(s)(r)(t))
    return r;
  if (!uo(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return uo(i)(s)(u)(t) ? X0((c) => uo(i)(s)(c)(t))(u)(1) : u;
}, Pm = (t) => (n) => (e) => (r) => (o) => {
  const i = ln(n)(e), s = _n(n)(e);
  if (!co(i)(s)(r)(t))
    return r;
  if (!co(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return co(i)(s)(u)(t) ? X0((c) => co(i)(s)(c)(t))(u)(1) : u;
}, Am = (t) => (n) => (e) => (r) => {
  const o = ln(n)(e), i = _n(n)(e), s = ft((a) => r >= a.x && r < a.x + a.w && a.y + a.h > o && a.y < i, t), u = J((a) => (g) => _n(a)(g.x + g.w + 4))(r + 4)(s), c = J((a) => (g) => ln(a)(g.x - 4))(r - 4)(s);
  return (() => {
    const a = u - r, g = c - r;
    return (a < 0 ? -a : a) <= (g < 0 ? -g : g);
  })() ? u : c;
}, Gm = (t) => (n) => (e) => (r) => {
  const o = ln(n)(e), i = _n(n)(e), s = ft((a) => r >= a.y && r < a.y + a.h && a.x + a.w > o && a.x < i, t), u = J((a) => (g) => _n(a)(g.y + g.h + 4))(r + 4)(s), c = J((a) => (g) => ln(a)(g.y - 4))(r - 4)(s);
  return (() => {
    const a = u - r, g = c - r;
    return (a < 0 ? -a : a) <= (g < 0 ? -g : g);
  })() ? u : c;
}, Im = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = (() => {
    if (r === "South")
      return k(o._1, o._2 + 4);
    if (r === "North")
      return k(o._1, o._2 - 4);
    if (r === "East")
      return k(o._1 + 4, o._2);
    if (r === "West")
      return k(o._1 - 4, o._2);
    f();
  })(), c = (() => {
    if (i === "South")
      return k(s._1, s._2 + 4);
    if (i === "North")
      return k(s._1, s._2 - 4);
    if (i === "East")
      return k(s._1 + 4, s._2);
    if (i === "West")
      return k(s._1 - 4, s._2);
    f();
  })(), a = (w, b, L) => !Fi(n)(ln(b)(L))(_n(b)(L))(w), g = (w, b, L) => !Fi(e)(ln(b)(L))(_n(b)(L))(w), _ = (w, b, L, C) => t.tag === "Just" && !$o(e)(ln(w)(b))(_n(w)(b))(t._1) ? t._1 : Pm(n)(w)(b)(L)(C), d = (w, b, L, C) => {
    if (w === L) {
      const X = Am(n)(b)(C)(w), Y = Em(n)(w)(b)(C), G = Cm(n)(w)(b)(C);
      return [
        { start: k(w, b), end: k(w, Y), direction: nn },
        { start: k(w, Y), end: k(X, Y), direction: tn },
        { start: k(X, Y), end: k(X, G), direction: nn },
        { start: k(X, G), end: k(L, G), direction: tn },
        { start: k(L, G), end: k(L, C), direction: nn }
      ];
    }
    const H = _(w, L, b, C);
    return [
      { start: k(w, b), end: k(w, H), direction: nn },
      { start: k(w, H), end: k(L, H), direction: tn },
      { start: k(L, H), end: k(L, C), direction: nn }
    ];
  }, l = (w, b, L, C) => {
    if (b === C) {
      const X = Gm(n)(w)(L)(b), Y = Lm(n)(b)(w)(L), G = Sm(n)(b)(w)(L);
      return [
        { start: k(w, b), end: k(Y, b), direction: tn },
        { start: k(Y, b), end: k(Y, X), direction: nn },
        { start: k(Y, X), end: k(G, X), direction: tn },
        { start: k(G, X), end: k(G, C), direction: nn },
        { start: k(G, C), end: k(L, C), direction: tn }
      ];
    }
    const H = ha(n)(b)(C)(w)(L);
    return [
      { start: k(w, b), end: k(H, b), direction: tn },
      { start: k(H, b), end: k(H, C), direction: nn },
      { start: k(H, C), end: k(L, C), direction: tn }
    ];
  }, h = (w, b, L) => !$o(n)(ln(b)(L))(_n(b)(L))(w), $ = (w, b, L) => !$o(e)(ln(b)(L))(_n(b)(L))(w), p = (w, b, L, C) => {
    if ($(b, w, L) && g(L, b, C))
      return [
        { start: k(w, b), end: k(L, b), direction: tn },
        { start: k(L, b), end: k(L, C), direction: nn }
      ];
    const H = ha(n)(b)(C)(w)(L);
    return [
      { start: k(w, b), end: k(H, b), direction: tn },
      { start: k(H, b), end: k(H, C), direction: nn },
      { start: k(H, C), end: k(L, C), direction: tn }
    ];
  }, m = (w, b, L, C) => {
    if (g(w, b, C) && $(C, w, L))
      return [
        { start: k(w, b), end: k(w, C), direction: nn },
        { start: k(w, C), end: k(L, C), direction: tn }
      ];
    const H = _(w, L, b, C);
    return [
      { start: k(w, b), end: k(w, H), direction: nn },
      { start: k(w, H), end: k(L, H), direction: tn },
      { start: k(L, H), end: k(L, C), direction: nn }
    ];
  }, y = (() => {
    if (r === "South")
      return i === "North" ? u._1 === c._1 && a(u._1, u._2, c._2) ? [{ start: k(u._1, u._2), end: k(c._1, c._2), direction: nn }] : d(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? m(u._1, u._2, c._1, c._2) : d(u._1, u._2, c._1, c._2);
    if (r === "North")
      return i === "South" ? u._1 === c._1 && a(u._1, u._2, c._2) ? [{ start: k(u._1, u._2), end: k(c._1, c._2), direction: nn }] : d(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? m(u._1, u._2, c._1, c._2) : d(u._1, u._2, c._1, c._2);
    if (r === "East")
      return i === "West" ? u._2 === c._2 && h(u._2, u._1, c._1) ? [{ start: k(u._1, u._2), end: k(c._1, c._2), direction: tn }] : l(u._1, u._2, c._1, c._2) : i === "North" || i === "South" ? p(u._1, u._2, c._1, c._2) : d(u._1, u._2, c._1, c._2);
    if (r === "West") {
      if (i === "East")
        return u._2 === c._2 && h(u._2, u._1, c._1) ? [{ start: k(u._1, u._2), end: k(c._1, c._2), direction: tn }] : l(u._1, u._2, c._1, c._2);
      if (i === "North" || i === "South")
        return p(u._1, u._2, c._1, c._2);
    }
    return d(u._1, u._2, c._1, c._2);
  })(), N = (() => {
    if (r === "South" || r === "North")
      return nn;
    if (r === "East" || r === "West")
      return tn;
    f();
  })(), T = {
    start: k(c._1, c._2),
    end: k(s._1, s._2),
    direction: (() => {
      if (i === "South" || i === "North")
        return nn;
      if (i === "East" || i === "West")
        return tn;
      f();
    })()
  };
  return u._1 === c._1 && u._2 === c._2 ? [{ start: k(o._1, o._2), end: k(s._1, s._2), direction: N }] : Jm({ start: k(o._1, o._2), end: k(u._1, u._2), direction: N })(y)(T);
}, Fm = /* @__PURE__ */ q((t) => ({ x: t.position._1 * ai - 2, y: t.position._2 * ai - 2, w: t.size._1 * ai + 4, h: t.size._2 * ai + 4 })), Bi = /* @__PURE__ */ en(A)(Ot), Ce = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, qs = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Bm = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t._1)(s._3._1);
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
}, pa = (t) => (n) => {
  const e = n.position._1 + n.size._1, r = n.position._2 * 2 + n.size._2, o = n.position._1 * 2 + n.size._1, i = n.position._2 + n.size._2;
  if (t === "South")
    return k(o, i * 2);
  if (t === "North")
    return k(o, n.position._2 * 2);
  if (t === "East")
    return k(e * 2, r);
  if (t === "West")
    return k(n.position._1 * 2, r);
  f();
}, zs = (t) => (n) => {
  const e = rt(4);
  if (t === "South")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "North")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "East")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  if (t === "West")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  f();
}, $a = (t) => (n) => J((e) => (r) => kt(t)(un)(n(r))([r])(e))(I), ma = (t) => (n) => (e) => (r) => {
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
}, V0 = (t) => (n) => {
  const e = t.hi - t.lo, r = (t.lo + t.hi) / 2, o = n.length;
  return o === 0 ? I : Bi(o === 1 ? q((i) => k(i, r))(n) : Bt((i) => (s) => k(s, t.lo + rt(i + 1 | 0) * e / rt(o + 1 | 0)))(n));
}, U0 = (t) => (n) => (e) => (r) => (o) => {
  const i = $a(A)((l) => l.to.node)(t), s = $a(A)((l) => l.from.node)(t), u = J((l) => (h) => U(A)(h.node)(h)(l))(I)(n), c = (l, h, $) => {
    const p = Ce(l)(u);
    if (p.tag === "Nothing")
      return k(0, 0);
    if (p.tag === "Just") {
      const m = Ce(l)(e);
      if (m.tag === "Nothing") {
        const y = rt(4);
        if ($ === "South")
          return k(p._1.position._1 * y + p._1.size._1 * y / 2, (p._1.position._2 + p._1.size._2) * y);
        if ($ === "North")
          return k(p._1.position._1 * y + p._1.size._1 * y / 2, p._1.position._2 * y);
        if ($ === "East")
          return k((p._1.position._1 + p._1.size._1) * y, p._1.position._2 * y + p._1.size._2 * y / 2);
        if ($ === "West")
          return k(p._1.position._1 * y, p._1.position._2 * y + p._1.size._2 * y / 2);
        f();
      }
      if (m.tag === "Just") {
        const y = Mt((N) => N.id === h)(m._1);
        if (y.tag === "Nothing") {
          const N = rt(4);
          if ($ === "South")
            return k(p._1.position._1 * N + p._1.size._1 * N / 2, (p._1.position._2 + p._1.size._2) * N);
          if ($ === "North")
            return k(p._1.position._1 * N + p._1.size._1 * N / 2, p._1.position._2 * N);
          if ($ === "East")
            return k((p._1.position._1 + p._1.size._1) * N, p._1.position._2 * N + p._1.size._2 * N / 2);
          if ($ === "West")
            return k(p._1.position._1 * N, p._1.position._2 * N + p._1.size._2 * N / 2);
          f();
        }
        if (y.tag === "Just") {
          const N = rt(4);
          if (y._1.side === "North")
            return k(p._1.position._1 * N + rt(y._1.offset) * N, p._1.position._2 * N);
          if (y._1.side === "South")
            return k(p._1.position._1 * N + rt(y._1.offset) * N, (p._1.position._2 + p._1.size._2) * N);
          if (y._1.side === "East")
            return k((p._1.position._1 + p._1.size._1) * N, p._1.position._2 * N + rt(y._1.offset) * N);
          if (y._1.side === "West")
            return k(p._1.position._1 * N, p._1.position._2 * N + rt(y._1.offset) * N);
        }
      }
    }
    f();
  }, a = Bi(Tt(r)((l) => {
    if (l.nodes.length <= 2)
      return [];
    const h = rt(4);
    if (1 < l.nodes.length) {
      const $ = Ce(l.nodes[1])(u);
      if ($.tag === "Nothing")
        return [];
      if ($.tag === "Just") {
        const p = $._1.position._1 * h + $._1.size._1 * h / 2;
        return q((m) => k(m, p))(bn(
          (m) => (y) => l.edgeId + ":" + m + "->" + y,
          l.nodes,
          Lt(1, l.nodes.length, l.nodes)
        ));
      }
      f();
    }
    return [];
  })), g = (l) => {
    const h = Ce(l.from.node)(u), $ = Ce(l.to.node)(u);
    if (h.tag === "Just" && $.tag === "Just") {
      const p = h._1, m = $._1, y = Et((N) => (T) => ot.compare(N.score)(T.score))(q((N) => {
        const T = N._1, w = N._2;
        return {
          from: T,
          to: w,
          score: (() => {
            const b = (X, Y, G, R, nt) => {
              const et = zs(X)(Y), z = zs(X)(G);
              return et.lo < z.hi && z.lo < et.hi && (T === "South" ? w === "North" && nt._2 > R._2 : T === "North" ? w === "South" && nt._2 < R._2 : T === "East" ? w === "West" && nt._1 > R._1 : T === "West" && w === "East" && nt._1 < R._1) ? 0 : ma(T)(w)(R)(nt);
            }, L = pa(T)(p), C = pa(w)(m), H = ma(T)(w)(L)(C);
            return (() => {
              if (H > 0) {
                if (T === "South")
                  return w === "North" ? b(hn, p, m, L, C) * 10 | 0 : H * 10 | 0;
                if (T === "North")
                  return w === "South" ? b(dn, p, m, L, C) * 10 | 0 : H * 10 | 0;
                if (T === "East")
                  return w === "West" ? b(Ae, p, m, L, C) * 10 | 0 : H * 10 | 0;
                if (T === "West" && w === "East")
                  return b(Ge, p, m, L, C) * 10 | 0;
              }
              return H * 10 | 0;
            })() + (T === "South" ? w === "North" ? 0 : 15 : T === "North" ? w === "South" ? 0 : 15 : T === "East" ? w === "West" ? 5 : 15 : T === "West" && w === "East" ? 5 : 15) | 0;
          })()
        };
      })([
        k(hn, dn),
        k(Ae, dn),
        k(Ge, dn),
        k(hn, Ae),
        k(hn, Ge),
        k(dn, hn),
        k(dn, Ae),
        k(dn, Ge),
        k(Ae, hn),
        k(Ge, hn),
        k(Ae, Ge),
        k(Ge, Ae)
      ]));
      if (0 < y.length)
        return { from: y[0].from, to: y[0].to };
    }
    return { from: hn, to: dn };
  }, _ = Bi(q((l) => k(l.id, g(l)))(t)), d = (l, h, $, p, m, y) => {
    const N = rt(4), T = Ce(h)(u);
    if (T.tag === "Nothing")
      return k(0, 0);
    if (T.tag === "Just") {
      const w = Bm(k($, l))(o);
      if (w.tag === "Just") {
        const b = T._1.position._1 * N + w._1, L = rt(4);
        if (l === "South")
          return k(b, (T._1.position._2 + T._1.size._2) * L);
        if (l === "North")
          return k(b, T._1.position._2 * L);
        if (l === "East")
          return k((T._1.position._1 + T._1.size._1) * L, b);
        if (l === "West")
          return k(T._1.position._1 * L, b);
        f();
      }
      if (w.tag === "Nothing") {
        const b = zs(l)(T._1), L = (b.lo + b.hi) / 2, C = qs($)(V0(b)(q((Y) => Y.id)(Et((Y) => (G) => ct.compare(m(l)(Y))(m(l)(G)))(ft(
          (Y) => {
            const G = qs(Y.id)(_);
            if (G.tag === "Just") {
              const R = y(G._1);
              return R === "North" ? l === "North" : R === "South" ? l === "South" : R === "East" ? l === "East" : R === "West" && l === "West";
            }
            if (G.tag === "Nothing")
              return !0;
            f();
          },
          (() => {
            const Y = Ce(h)(p);
            if (Y.tag === "Nothing")
              return [];
            if (Y.tag === "Just")
              return Y._1;
            f();
          })()
        ))))), H = (() => {
          if (C.tag === "Nothing")
            return L;
          if (C.tag === "Just")
            return C._1;
          f();
        })(), X = rt(4);
        if (l === "South")
          return k(H, (T._1.position._2 + T._1.size._2) * X);
        if (l === "North")
          return k(H, T._1.position._2 * X);
        if (l === "East")
          return k((T._1.position._1 + T._1.size._1) * X, H);
        if (l === "West")
          return k(T._1.position._1 * X, H);
      }
    }
    f();
  };
  return q((l) => {
    const h = qs(l.edge.id)(a);
    if (h.tag === "Nothing")
      return l;
    if (h.tag === "Just")
      return {
        ...l,
        fromPos: xn(3)(l.edge.from.node) === "$d:" ? k(h._1, l.fromPos._2) : l.fromPos,
        toPos: xn(3)(l.edge.to.node) === "$d:" ? k(h._1, l.toPos._2) : l.toPos
      };
    f();
  })(q((l) => {
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
        ($) => (p) => {
          const m = Ce(p.to.node)(u);
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just") {
            const y = rt(4);
            if ($ === "South" || $ === "North")
              return m._1.position._1 * y + m._1.size._1 * y / 2;
            if ($ === "East" || $ === "West")
              return m._1.position._2 * y + m._1.size._2 * y / 2;
          }
          f();
        },
        ($) => $.from
      ),
      toPos: d(
        h.to,
        l.to.node,
        l.id,
        i,
        ($) => (p) => {
          const m = Ce(p.from.node)(u);
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just") {
            const y = rt(4);
            if ($ === "South" || $ === "North")
              return m._1.position._1 * y + m._1.size._1 * y / 2;
            if ($ === "East" || $ === "West")
              return m._1.position._2 * y + m._1.size._2 * y / 2;
          }
          f();
        },
        ($) => $.to
      ),
      fromSide: h.from,
      toSide: h.to
    };
  })(t));
}, K0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Wr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Rm = /* @__PURE__ */ (() => {
  const t = oe.unfoldr(Se);
  return (n) => t(te("IterNode", n, Ee));
})(), Nu = (t) => (n) => t.gapTop + 1 * rt(4) + rt(n) * 2.5 * rt(4), Qm = (t) => (n) => {
  const e = K0(n.edge.id)(t);
  if (e.tag === "Just") {
    if (e._1.partner.tag === "Just")
      return v("Just", { slot1Y: Nu(e._1)(e._1.slot), splitX: e._1.partner._1.splitX, slot2Y: Nu(e._1)(e._1.partner._1.slot) });
    if (e._1.partner.tag === "Nothing")
      return x;
    f();
  }
  if (e.tag === "Nothing")
    return x;
  f();
}, Wm = (t) => (n) => {
  const e = J((r) => (o) => U(A)(o.node)(o)(r))(I)(n);
  return Xn(Bt((r) => (o) => {
    const i = Wr(o.node)(e);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just") {
      const s = i._1;
      return Bt((u) => (c) => {
        const a = o.edges.length, g = rt(4), _ = s.position._1 * g, d = s.position._2 * g, l = s.size._2 * g, h = rt((2 * a | 0) + 1 | 0), $ = d + l * rt(a - u | 0) / h, p = d + l * rt((a + 1 | 0) + u | 0) / h, m = _ - g * 2.5 * rt(u + 1 | 0), y = [
          { start: k(_, $), end: k(m, $), direction: tn },
          { start: k(m, $), end: k(m, p), direction: nn },
          { start: k(m, p), end: k(_, p), direction: tn }
        ];
        return { edge: c.id, segments: y, bends: bn((N) => (T) => N.end, y, Lt(1, 3, y)), bendType: [], jumps: [], reversed: !1 };
      })(o.edges);
    }
    f();
  })(q((r) => ({ node: r._1, edges: r._2 }))(Rm(J((r) => (o) => kt(A)(un)(o.from.node)([
    o
  ])(r))(I)(t)))));
}, Hm = (t) => (n) => {
  const e = J((i) => (s) => U(A)(s.node)(s)(i))(I)(n), r = (i) => {
    const s = Wr(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.position._1;
    f();
  }, o = (i) => {
    const s = Wr(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.layer;
    f();
  };
  return Et((i) => (s) => {
    const u = ot.compare(o(i.edge.from.node))(o(s.edge.from.node));
    if (u === "EQ") {
      const c = ct.compare(r(i.edge.from.node))(r(s.edge.from.node));
      return c === "EQ" ? ct.compare(r(i.edge.to.node))(r(s.edge.to.node)) : c;
    }
    return u;
  })(t);
}, Qn = (t) => {
  const n = rt(4);
  return { x: t.position._1 * n - 2, y: t.position._2 * n - 2, w: t.size._1 * n + 4, h: t.size._2 * n + 4 };
}, Dm = (t) => t.from.node === t.to.node, Om = (t) => (n) => (e) => (r) => {
  const o = km(e)(Im(t)(n)(e)(r.fromSide)(r.fromPos)(r.toSide)(r.toPos));
  return {
    edge: r.edge.id,
    segments: o,
    bends: bn((i) => (s) => i.end, o, Lt(1, o.length, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, qm = (t) => (n) => (e) => (r) => {
  const o = [
    { start: k(r.fromPos._1, r.fromPos._2), end: k(r.fromPos._1, t.slot1Y), direction: nn },
    { start: k(r.fromPos._1, t.slot1Y), end: k(t.splitX, t.slot1Y), direction: tn },
    { start: k(t.splitX, t.slot1Y), end: k(t.splitX, t.slot2Y), direction: nn },
    { start: k(t.splitX, t.slot2Y), end: k(r.toPos._1, t.slot2Y), direction: tn },
    { start: k(r.toPos._1, t.slot2Y), end: k(r.toPos._1, r.toPos._2), direction: nn }
  ];
  return {
    edge: r.edge.id,
    segments: o,
    bends: bn((i) => (s) => i.end, o, Lt(1, 5, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, zm = (t) => (n) => (e) => {
  const r = Wr(t.edge.from.node)(e);
  if (r.tag === "Just") {
    const i = Wr(t.edge.to.node)(e);
    return i.tag === "Just" ? ft(
      (s) => !(s.h === Qn(r._1).h && s.w === Qn(r._1).w && s.x === Qn(r._1).x && s.y === Qn(r._1).y) && !(s.h === Qn(i._1).h && s.w === Qn(i._1).w && s.x === Qn(i._1).x && s.y === Qn(i._1).y),
      n
    ) : ft((s) => !(s.h === Qn(r._1).h && s.w === Qn(r._1).w && s.x === Qn(r._1).x && s.y === Qn(r._1).y), n);
  }
  const o = Wr(t.edge.to.node)(e);
  return o.tag === "Just" ? ft((i) => !(i.h === Qn(o._1).h && i.w === Qn(o._1).w && i.x === Qn(o._1).x && i.y === Qn(o._1).y), n) : ft((i) => !0, n);
}, Ym = (t) => (n) => {
  const e = K0(n.edge.id)(t);
  if (e.tag === "Just")
    return v("Just", Nu(e._1)(e._1.slot));
  if (e.tag === "Nothing")
    return x;
  f();
}, Xm = (t) => (n) => (e) => (r) => (o) => {
  const i = J((a) => (g) => U(A)(g.node)(g)(a))(I)(n), s = Fm(n), u = U0(ft((a) => a.from.node !== a.to.node, t))(n)(e)(r)(o), c = z0(u)(n);
  return [
    ...Wm(ft(Dm, t))(n),
    ...J((a) => (g) => {
      const _ = zm(g)(s)(i), d = [..._, ...a.edgeObstacles], l = Qm(c)(g), h = (() => {
        if (l.tag === "Just")
          return qm(l._1)(_)(d)(g);
        if (l.tag === "Nothing")
          return Om(Ym(c)(g))(_)(d)(g);
        f();
      })();
      return { results: [...a.results, h], edgeObstacles: [...a.edgeObstacles, ...xm(h.segments)] };
    })({ results: [], edgeObstacles: [] })(Hm(u)(n)).results
  ];
}, er = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, rr = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Vm = (t) => (n) => (e) => {
  if (t.start._1 !== n.start._1)
    return x;
  const r = rr(er(t.start._2)(t.end._2))(er(n.start._2)(n.end._2)), o = er(rr(t.start._2)(t.end._2))(rr(n.start._2)(n.end._2));
  return r < o ? v("Just", { position: k(t.start._1, (r + o) / 2), crossingEdge: e }) : x;
}, Um = (t) => (n) => (e) => {
  if (t.start._2 !== n.start._2)
    return x;
  const r = rr(er(t.start._1)(t.end._1))(er(n.start._1)(n.end._1)), o = er(rr(t.start._1)(t.end._1))(rr(n.start._1)(n.end._1));
  return r < o ? v("Just", { position: k((r + o) / 2, t.start._2), crossingEdge: e }) : x;
}, Km = (t) => (n) => (e) => {
  if (t.direction === "H")
    return Um(t)(n)(e);
  if (t.direction === "V")
    return Vm(t)(n)(e);
  f();
}, Mm = (t) => (n) => (e) => {
  const r = t + 1 | 0, o = r < 1 ? e : Lt(r, e.length, e);
  return Tt(n.segments)((i) => Tt(o)((s) => yt((u) => Km(i)(u)(s.edge))(ft(
    (u) => u.direction === "H" ? i.direction === "H" : u.direction === "V" && i.direction === "V",
    s.segments
  ))));
}, jm = (t) => (n) => (e) => n.start._1 > er(t.start._1)(t.end._1) && n.start._1 < rr(t.start._1)(t.end._1) && t.start._2 > er(n.start._2)(n.end._2) && t.start._2 < rr(n.start._2)(n.end._2) ? v("Just", { position: k(n.start._1, t.start._2), crossingEdge: e }) : x, Zm = (t) => (n) => Tt(ft((e) => e.direction === "H", t.segments))((e) => Tt(n)((r) => yt((o) => jm(e)(o)(r.edge))(ft(
  (o) => o.direction === "V",
  r.segments
)))), ty = (t) => (n) => (e) => [
  ...Zm(n)(ft((r) => r.edge !== n.edge, e)),
  ...Mm(t)(n)(e)
], ya = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, M0 = (t) => xn(3)(t) === "$d:", ny = (t) => (n) => (e) => J((r) => (o) => {
  const i = ya(o.from.node)(t), s = (() => {
    if (i.tag === "Nothing")
      return 0;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = ya(o.to.node)(t), c = (() => {
    if (u.tag === "Nothing")
      return -s;
    if (u.tag === "Just")
      return u._1 - s | 0;
    f();
  })();
  if (c <= 1)
    return { ...r, edges: [...r.edges, o], chains: [...r.chains, { edgeId: o.id, nodes: [o.from.node, o.to.node] }] };
  const a = o.id, g = q((d) => "$d:" + a + ":" + sn(d))(Ft(1, c - 1 | 0)), _ = [o.from.node, ...g, o.to.node];
  return {
    ...r,
    layers: J((d) => (l) => {
      const h = l._2, $ = x1(s + l._1 | 0)((p) => [...p, h])(d);
      if ($.tag === "Nothing")
        return d;
      if ($.tag === "Just")
        return $._1;
      f();
    })(r.layers)(bn(qe, Ft(1, c - 1 | 0), g)),
    edges: [
      ...r.edges,
      ...bn(
        (d) => (l) => ({ id: a + ":" + d + "->" + l, from: { node: d, port: o.from.port }, to: { node: l, port: o.to.port }, label: x }),
        _,
        Lt(1, _.length, _)
      )
    ],
    chains: [...r.chains, { edgeId: o.id, nodes: _ }]
  };
})({ layers: e, edges: [], chains: [] })(n), Ri = /* @__PURE__ */ (() => {
  const t = {
    eq: (n) => (e) => n._1 === e._1 && (n._2 === "North" ? e._2 === "North" : n._2 === "South" ? e._2 === "South" : n._2 === "East" ? e._2 === "East" : n._2 === "West" && e._2 === "West")
  };
  return {
    compare: (n) => (e) => {
      const r = A.compare(n._1)(e._1);
      if (r === "LT")
        return Jn;
      if (r === "GT")
        return Tn;
      if (n._2 === "North")
        return e._2 === "North" ? An : Jn;
      if (e._2 === "North")
        return Tn;
      if (n._2 === "South")
        return e._2 === "South" ? An : Jn;
      if (e._2 === "South")
        return Tn;
      if (n._2 === "East")
        return e._2 === "East" ? An : Jn;
      if (e._2 === "East")
        return Tn;
      if (n._2 === "West" && e._2 === "West")
        return An;
      f();
    },
    Eq0: () => t
  };
})(), ey = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = Ri.compare(t)(s._3);
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
}, ry = /* @__PURE__ */ en(A)(Ot), Ys = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, oy = /* @__PURE__ */ en(Ri)(Ot), Na = /* @__PURE__ */ (() => {
  const t = oe.unfoldr(Se);
  return (n) => t(te("IterNode", n, Ee));
})(), Hr = (t) => (n) => (e) => (r) => {
  const o = ey(k(n, e))(t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just")
    return o._1;
  f();
}, j0 = (t) => (n) => (e) => {
  const r = ry(Xn(q((s) => Bt((u) => (c) => k(c, u))(s))(t))), o = (s, u) => {
    if (s === "South") {
      const c = Ys(u.to.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    if (s === "North") {
      const c = Ys(u.from.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    return 0;
  }, i = (s) => J((u) => (c) => Pn(
    Ri.compare,
    Cn,
    oy(q((a) => k(k(a._1, s), a._2))(Na(V0({
      lo: 0,
      hi: (() => {
        const a = Ys(c._1)(e);
        if (a.tag === "Just")
          return a._1._1;
        if (a.tag === "Nothing")
          return xn(3)(c._1) === "$d:" ? 0 : 1;
        f();
      })()
    })(q((a) => a.id)(Et((a) => (g) => ot.compare(o(s, a))(o(s, g)))(c._2)))))),
    u
  ))(I)(Na(J((u) => (c) => c.from.node === c.to.node ? u : s === "South" ? kt(A)(un)(c.from.node)([c])(u) : s === "North" ? kt(A)(un)(c.to.node)([c])(u) : u)(I)(n)));
  return Pn(Ri.compare, Cn, i(dn), i(hn));
}, Z0 = (t) => t, tg = (t) => t, ng = (t) => t, iy = /* @__PURE__ */ J((t) => (n) => U(A)(n)()(t))(I), sy = /* @__PURE__ */ (() => {
  const t = oe.unfoldr((n) => {
    if (n.tag === "Nil")
      return x;
    if (n.tag === "Cons")
      return v("Just", k(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, Xt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Vt);
  })());
})(), st = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, se = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, we = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ne = /* @__PURE__ */ en(A)(Ot), Xs = /* @__PURE__ */ Ff(A), xu = /* @__PURE__ */ (() => {
  const t = oe.unfoldr(Se);
  return (n) => t(te("IterNode", n, Ee));
})(), uy = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, cy = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = ot.compare(t)(s._3);
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
}, xa = /* @__PURE__ */ ng("VDown"), Ja = /* @__PURE__ */ ng("VUp"), ay = /* @__PURE__ */ tg("ForwardPhase"), fy = /* @__PURE__ */ tg("StackPhase"), Ta = /* @__PURE__ */ Z0("HRight"), va = /* @__PURE__ */ Z0("HLeft"), wa = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, gy = (t) => (n) => (e) => {
  const r = J((u) => (c) => kt(A)(cn)(c.tgt)(1)(u))(I)(t), o = sy(iy([
    ...q((u) => u.src)(t),
    ...q((u) => u.tgt)(t),
    ...(() => {
      const u = (c, a) => {
        if (c.tag === "Leaf")
          return a;
        if (c.tag === "Node")
          return u(c._5, Xt("Cons", c._4, u(c._6, a)));
        f();
      };
      return St(Ut.foldr, u(n, Vt));
    })()
  ])), i = J((u) => (c) => kt(A)(un)(c.src)([{ target: c.tgt, sep: c.sep }])(u))(I)(t);
  return ((u) => (c) => (a) => {
    let g = u, _ = c, d = a, l = !0, h;
    for (; l; ) {
      const $ = g, p = _, m = d, y = Wt((N) => x, (N) => (T) => v("Just", { head: N, tail: T }), $);
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
        })(), w = J((b) => (L) => {
          const C = st(L.target)(b.result), H = T + L.sep, X = st(L.target)(b.indeg), Y = (() => {
            if (X.tag === "Nothing")
              return -1;
            if (X.tag === "Just")
              return X._1 - 1 | 0;
            f();
          })();
          return {
            newQueue: Y === 0 ? [...b.newQueue, L.target] : b.newQueue,
            result: U(A)(L.target)((() => {
              if (C.tag === "Nothing")
                return H;
              if (C.tag === "Just") {
                if (e === "VDown")
                  return se(C._1)(H);
                if (e === "VUp")
                  return we(C._1)(H);
              }
              f();
            })())(b.result),
            indeg: U(A)(L.target)(Y)(b.indeg)
          };
        })({ newQueue: [], result: m, indeg: p })((() => {
          const b = st(y._1.head)(i);
          if (b.tag === "Nothing")
            return [];
          if (b.tag === "Just")
            return b._1;
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
  ))(r)(J((u) => (c) => U(A)(c)(0)(u))(I)(o));
}, ly = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, Xt("Cons", i._4, n(i._6, s)));
    f();
  }, e = St(Ut.foldr, n(t, Vt)), r = J(se)(999999)(e);
  if (r === 0 || e.length === 0)
    return t;
  const o = (i) => {
    if (i.tag === "Leaf")
      return I;
    if (i.tag === "Node")
      return zt("Node", i._1, i._2, i._3, i._4 - r, o(i._5), o(i._6));
    f();
  };
  return o(t);
}, eg = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, Xt("Cons", i._4, n(i._6, s)));
    f();
  }, e = n(t, Vt), r = (i) => (s) => {
    let u = i, c = s, a = !0, g;
    for (; a; ) {
      const _ = u, d = c;
      if (d.tag === "Nil") {
        a = !1, g = _;
        continue;
      }
      if (d.tag === "Cons") {
        u = we(_)(d._1), c = d._2;
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
        u = se(_)(d._1), c = d._2;
        continue;
      }
      f();
    }
    return g;
  };
  return r(-999999)(e) - o(999999)(e);
}, ao = (t) => (n) => ((r) => (o) => {
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
})())([n]), _y = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (g) => {
  const _ = (E, S, O) => {
    const P = E.from.node === S ? E.from.port : E.to.node === S ? E.to.port : x;
    if (P.tag === "Just") {
      const B = st(S)(o);
      if (B.tag === "Just") {
        const W = Mt((K) => K.id === P._1)(B._1);
        if (W.tag === "Just") {
          const K = rt(W._1.offset) * rt(4);
          return O === "North" || O === "South" ? K : 0;
        }
        if (W.tag === "Nothing") {
          const K = st(S)(r), V = Hr(s)(E.id)(O)((() => {
            if (K.tag === "Nothing")
              return 0.5;
            if (K.tag === "Just")
              return K._1._1 / 2;
            f();
          })());
          return O === "North" || O === "South" ? V : 0;
        }
        f();
      }
      if (B.tag === "Nothing") {
        const W = st(S)(r), K = Hr(s)(E.id)(O)((() => {
          if (W.tag === "Nothing")
            return 0.5;
          if (W.tag === "Just")
            return W._1._1 / 2;
          f();
        })());
        return O === "North" || O === "South" ? K : 0;
      }
      f();
    }
    if (P.tag === "Nothing") {
      const B = st(S)(r), W = Hr(s)(E.id)(O)((() => {
        if (B.tag === "Nothing")
          return 0.5;
        if (B.tag === "Just")
          return B._1._1 / 2;
        f();
      })());
      return O === "North" || O === "South" ? W : 0;
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
  }, l = (E, S, O) => J((P) => (B) => U(A)(B)((() => {
    const W = st(B)(P);
    if (W.tag === "Nothing")
      return 0 + S;
    if (W.tag === "Just")
      return W._1 + S;
    f();
  })())(P))(O)(ao(c)(E)), h = (() => {
    if (g === "HRight")
      return e;
    if (g === "HLeft")
      return wn(e);
    f();
  })(), $ = (E) => {
    const S = st(E)(r);
    if (S.tag === "Nothing")
      return 1;
    if (S.tag === "Just")
      return S._1._1;
    f();
  }, p = Ne(Xn(Bt((E) => (S) => q((O) => k(O, E))(S))(e))), m = (E, S) => xn(3)(E) === "$d:" && xn(3)(S) === "$d:" || xn(3)(E) === "$d:" || xn(3)(S) === "$d:" ? 10 : rt(t.nodeGap), y = J((E) => (S) => Xs((O) => v(
    "Just",
    [
      ...(() => {
        if (O.tag === "Nothing")
          return [];
        if (O.tag === "Just")
          return O._1;
        f();
      })(),
      S
    ]
  ))(S.to.node)(E))(I)(i), N = J((E) => (S) => Xs((O) => v(
    "Just",
    [
      ...(() => {
        if (O.tag === "Nothing")
          return [];
        if (O.tag === "Just")
          return O._1;
        f();
      })(),
      S
    ]
  ))(S.from.node)(E))(I)(i), T = Xn(e), w = J((E) => (S) => {
    const O = st(S)(c.root), P = (() => {
      if (O.tag === "Nothing")
        return S;
      if (O.tag === "Just")
        return O._1;
      f();
    })();
    return S === P ? E : Xs((B) => v(
      "Just",
      (() => {
        if (B.tag === "Nothing")
          return !0;
        if (B.tag === "Just")
          return B._1;
        f();
      })() && xn(3)(S) === "$d:"
    ))(P)(E);
  })(Ne(q((E) => k(E, !0))(Yr(A.compare)((() => {
    const E = (S, O) => {
      if (S.tag === "Leaf")
        return O;
      if (S.tag === "Node")
        return E(S._5, Xt("Cons", S._4, E(S._6, O)));
      f();
    };
    return St(Ut.foldr, E(c.root, Vt));
  })()))))(T), b = (E, S) => {
    const O = E.free, P = st(O)(c.root), B = (() => {
      if (P.tag === "Nothing")
        return O;
      if (P.tag === "Just")
        return P._1;
      f();
    })(), W = st(B)(w), K = (() => {
      if (W.tag === "Nothing")
        return !0;
      if (W.tag === "Just")
        return W._1;
      f();
    })();
    return J((V) => (D) => {
      if (V.edge.tag === "Just")
        return V;
      if (V.edge.tag === "Nothing") {
        if ((() => {
          const ut = st(B)(S.su);
          return !K && (() => {
            const lt = st(D.from.node)(p);
            return D.from.node !== D.to.node && (() => {
              const qt = st(D.to.node)(p);
              return (() => {
                if (lt.tag === "Nothing")
                  return -1;
                if (lt.tag === "Just")
                  return lt._1;
                f();
              })() === (() => {
                if (qt.tag === "Nothing")
                  return -1;
                if (qt.tag === "Just")
                  return qt._1;
                f();
              })();
            })();
          })() || (() => {
            if (ut.tag === "Nothing")
              return !1;
            if (ut.tag === "Just")
              return ut._1;
            f();
          })();
        })())
          return V;
        const M = D.from.node === O ? D.to.node : D.from.node, Z = st(M)(c.root), tt = (() => {
          if (Z.tag === "Nothing")
            return M;
          if (Z.tag === "Just")
            return Z._1;
          f();
        })(), j = tt !== B;
        return j && (() => {
          const ut = st(tt)(S.blockFinished);
          if (ut.tag === "Nothing")
            return !1;
          if (ut.tag === "Just")
            return ut._1;
          f();
        })() ? { ...V, edge: v("Just", D), hasEdges: !0 } : { ...V, hasEdges: V.hasEdges || j };
      }
      f();
    })({ edge: x, hasEdges: !1 })((() => {
      if (E.isRoot) {
        if (g === "HRight") {
          const V = st(O)(y);
          if (V.tag === "Nothing")
            return [];
          if (V.tag === "Just")
            return V._1;
          f();
        }
        if (g === "HLeft") {
          const V = st(O)(N);
          if (V.tag === "Nothing")
            return [];
          if (V.tag === "Just")
            return V._1;
        }
        f();
      }
      if (g === "HRight") {
        const V = st(O)(N);
        if (V.tag === "Nothing")
          return [];
        if (V.tag === "Just")
          return V._1;
        f();
      }
      if (g === "HLeft") {
        const V = st(O)(y);
        if (V.tag === "Nothing")
          return [];
        if (V.tag === "Just")
          return V._1;
      }
      f();
    })());
  }, L = (E, S, O, P) => {
    const B = (() => {
      if (a === "VDown")
        return -1e18;
      if (a === "VUp")
        return 1e18;
      f();
    })(), W = { free: S, isRoot: O }, K = b(W, P);
    if (K.edge.tag === "Nothing")
      return K.hasEdges ? { thresh: B, state: { ...P, queue: [...P.queue, W] } } : { thresh: B, state: P };
    if (K.edge.tag === "Just") {
      const V = K.edge._1.from.node === S ? K.edge._1.to.node : K.edge._1.from.node;
      return {
        thresh: (() => {
          const D = st((() => {
            const j = st(V)(c.root);
            if (j.tag === "Nothing")
              return V;
            if (j.tag === "Just")
              return j._1;
            f();
          })())(P.x), M = st(V)(u), Z = st(S)(u), tt = (() => {
            if (D.tag === "Just")
              return D._1;
            if (D.tag === "Nothing")
              return x;
            f();
          })();
          return (() => {
            if (tt.tag === "Nothing")
              return 0;
            if (tt.tag === "Just")
              return tt._1;
            f();
          })() + (() => {
            if (M.tag === "Nothing")
              return 0;
            if (M.tag === "Just")
              return M._1;
            f();
          })() + _(
            K.edge._1,
            V,
            (() => {
              if (O) {
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
            K.edge._1,
            S,
            (() => {
              if (O) {
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
          ...P,
          su: U(A)((() => {
            const D = st(K.edge._1.from.node)(c.root);
            if (D.tag === "Nothing")
              return K.edge._1.from.node;
            if (D.tag === "Just")
              return D._1;
            f();
          })())(!0)(U(A)((() => {
            const D = st(K.edge._1.to.node)(c.root);
            if (D.tag === "Nothing")
              return K.edge._1.to.node;
            if (D.tag === "Just")
              return D._1;
            f();
          })())(!0)(P.su))
        }
      };
    }
    f();
  }, C = (E, S, O, P) => {
    const B = S === E, W = st(S)(c.align), K = (() => {
      if (W.tag === "Nothing")
        return S === E;
      if (W.tag === "Just")
        return W._1 === E;
      f();
    })();
    if (!(B || K))
      return { thresh: O, state: P };
    const V = (() => {
      if (a === "VDown")
        return B && O <= -1e18;
      if (a === "VUp")
        return B && O >= 1e18;
      f();
    })() ? L(E, S, !0, P) : { thresh: O, state: P };
    return (() => {
      if (a === "VDown")
        return V.thresh <= -1e18 && K;
      if (a === "VUp")
        return V.thresh >= 1e18 && K;
      f();
    })() ? L(E, S, !1, V.state) : V;
  }, H = (E) => (S) => (O) => {
    const P = st(O)(n.nodeIndex), B = (() => {
      if (P.tag === "Nothing")
        return 0;
      if (P.tag === "Just")
        return P._1;
      f();
    })(), W = Mt((Z) => Yn(pe)(O)(Z))(h), K = (() => {
      if (W.tag === "Nothing")
        return [];
      if (W.tag === "Just")
        return W._1;
      f();
    })(), V = K.length;
    if ((() => {
      if (a === "VDown")
        return B <= 0;
      if (a === "VUp")
        return B >= (V - 1 | 0);
      f();
    })()) {
      const Z = C(E, O, S.thresh, S.st);
      return { ...S, st: Z.state, thresh: Z.thresh };
    }
    const D = (() => {
      if (a === "VDown")
        return B - 1 | 0;
      if (a === "VUp")
        return B + 1 | 0;
      f();
    })(), M = D >= 0 && D < K.length ? v("Just", K[D]) : x;
    if (M.tag === "Nothing")
      return S;
    if (M.tag === "Just") {
      const Z = st(M._1)(c.root), tt = (() => {
        if (Z.tag === "Nothing")
          return M._1;
        if (Z.tag === "Just")
          return Z._1;
        f();
      })(), j = C(E, O, S.thresh, X(tt)(S.st)), ut = (() => {
        const bt = st(E)(j.state.sink);
        if (bt.tag === "Nothing")
          return E === E;
        if (bt.tag === "Just")
          return bt._1 === E;
        f();
      })() ? {
        ...j.state,
        sink: U(A)(E)((() => {
          const bt = st(tt)(j.state.sink);
          if (bt.tag === "Nothing")
            return tt;
          if (bt.tag === "Just")
            return bt._1;
          f();
        })())(j.state.sink)
      } : j.state, lt = st(tt)(ut.sink), qt = (() => {
        if (lt.tag === "Nothing")
          return tt;
        if (lt.tag === "Just")
          return lt._1;
        f();
      })(), wt = st(E)(ut.sink), Ht = (() => {
        if (wt.tag === "Nothing")
          return E;
        if (wt.tag === "Just")
          return wt._1;
        f();
      })();
      if (Ht === qt) {
        const bt = st(tt)(ut.x), Dt = (() => {
          if (bt.tag === "Just")
            return bt._1;
          if (bt.tag === "Nothing")
            return x;
          f();
        })(), fe = (() => {
          if (Dt.tag === "Nothing")
            return 0;
          if (Dt.tag === "Just")
            return Dt._1;
          f();
        })(), qn = st(E)(ut.x), Bn = (() => {
          if (qn.tag === "Just")
            return qn._1;
          if (qn.tag === "Nothing")
            return x;
          f();
        })(), Gt = (() => {
          if (Bn.tag === "Nothing")
            return 0;
          if (Bn.tag === "Just")
            return Bn._1;
          f();
        })(), Ct = m(O, M._1), ie = st(M._1)(u), zn = st(O)(u), Mn = (() => {
          if (ie.tag === "Nothing")
            return 0;
          if (ie.tag === "Just")
            return ie._1;
          f();
        })() - (() => {
          if (zn.tag === "Nothing")
            return 0;
          if (zn.tag === "Just")
            return zn._1;
          f();
        })();
        if (a === "VDown") {
          const Rn = we(fe + Mn + $(M._1) + Ct)(j.thresh);
          return {
            st: { ...ut, x: U(A)(E)(v("Just", S.initial ? Rn : we(Gt)(Rn)))(ut.x) },
            initial: !1,
            thresh: j.thresh
          };
        }
        if (a === "VUp") {
          const Rn = se(fe + Mn - Ct - $(O))(j.thresh);
          return {
            st: { ...ut, x: U(A)(E)(v("Just", S.initial ? Rn : se(Gt)(Rn)))(ut.x) },
            initial: !1,
            thresh: j.thresh
          };
        }
        f();
      }
      const pt = st(tt)(ut.x), xt = (() => {
        if (pt.tag === "Just")
          return pt._1;
        if (pt.tag === "Nothing")
          return x;
        f();
      })(), $t = (() => {
        if (xt.tag === "Nothing")
          return 0;
        if (xt.tag === "Just")
          return xt._1;
        f();
      })(), mt = st(E)(ut.x), gt = (() => {
        if (mt.tag === "Just")
          return mt._1;
        if (mt.tag === "Nothing")
          return x;
        f();
      })(), _t = (() => {
        if (gt.tag === "Nothing")
          return 0;
        if (gt.tag === "Just")
          return gt._1;
        f();
      })(), it = rt(t.nodeGap), at = st(O)(u), Jt = st(M._1)(u), Nt = (() => {
        if (at.tag === "Nothing")
          return 0;
        if (at.tag === "Just")
          return at._1;
        f();
      })() - (() => {
        if (Jt.tag === "Nothing")
          return 0;
        if (Jt.tag === "Just")
          return Jt._1;
        f();
      })();
      return {
        st: {
          ...ut,
          classEdges: [
            ...ut.classEdges,
            {
              src: Ht,
              tgt: qt,
              sep: (() => {
                if (a === "VDown")
                  return _t + Nt - $t - $(M._1) - it;
                if (a === "VUp")
                  return _t + Nt + $(O) + it - $t;
                f();
              })()
            }
          ]
        },
        initial: S.initial,
        thresh: j.thresh
      };
    }
    f();
  }, X = (E) => (S) => {
    const O = st(E)(S.x), P = (() => {
      if (O.tag === "Just")
        return O._1;
      if (O.tag === "Nothing")
        return x;
      f();
    })();
    if (P.tag === "Just")
      return S;
    if (P.tag === "Nothing") {
      const B = J(H(E))({
        st: { ...S, x: U(A)(E)(v("Just", 0))(S.x) },
        initial: !0,
        thresh: (() => {
          if (a === "VDown")
            return -1e18;
          if (a === "VUp")
            return 1e18;
          f();
        })()
      })(ao(c)(E));
      return { ...B.st, blockFinished: U(A)(E)(!0)(B.st.blockFinished) };
    }
    f();
  }, Y = J((E) => (S) => J((O) => (P) => {
    const B = st(P)(c.root), W = (() => {
      if (B.tag === "Nothing")
        return P;
      if (B.tag === "Just")
        return B._1;
      f();
    })();
    return W === P ? X(W)(O) : O;
  })(E)((() => {
    if (a === "VDown")
      return S;
    if (a === "VUp")
      return wn(S);
    f();
  })()))({
    x: Ne(q((E) => k(E, x))(T)),
    sink: Ne(q((E) => k(E, E))(T)),
    classEdges: [],
    su: I,
    blockFinished: I,
    queue: []
  })(h), G = gy(Y.classEdges)(Y.sink)(a), R = (E, S, O, P) => {
    const B = st(S)(P), W = st(S)(u);
    return (() => {
      if (B.tag === "Nothing")
        return 0;
      if (B.tag === "Just")
        return B._1;
      f();
    })() + (() => {
      if (W.tag === "Nothing")
        return 0;
      if (W.tag === "Just")
        return W._1;
      f();
    })() + _(E, S, O);
  }, nt = Ne(q((E) => k(E, !0))(Yr(A.compare)((() => {
    const E = (S, O) => {
      if (S.tag === "Leaf")
        return O;
      if (S.tag === "Node")
        return E(S._5, Xt("Cons", S._4, E(S._6, O)));
      f();
    };
    return St(Ut.foldr, E(c.root, Vt));
  })()))), et = (E) => (S) => (O) => {
    const P = b(O, { su: S.su, blockFinished: nt }), B = {
      phase: E,
      ppFree: O.free,
      ppIsRoot: O.isRoot,
      edgeId: x,
      delta: 0,
      avail: 0,
      shift: 0,
      freeSu: (() => {
        const W = st((() => {
          const K = st(O.free)(c.root);
          if (K.tag === "Nothing")
            return O.free;
          if (K.tag === "Just")
            return K._1;
          f();
        })())(S.su);
        if (W.tag === "Nothing")
          return !1;
        if (W.tag === "Just")
          return W._1;
        f();
      })(),
      hasEdges: P.hasEdges,
      candCount: (() => {
        if (O.isRoot) {
          if (g === "HRight") {
            const W = st(O.free)(y);
            if (W.tag === "Nothing")
              return 0;
            if (W.tag === "Just")
              return W._1.length;
            f();
          }
          if (g === "HLeft") {
            const W = st(O.free)(N);
            if (W.tag === "Nothing")
              return 0;
            if (W.tag === "Just")
              return W._1.length;
          }
          f();
        }
        if (g === "HRight") {
          const W = st(O.free)(N);
          if (W.tag === "Nothing")
            return 0;
          if (W.tag === "Just")
            return W._1.length;
          f();
        }
        if (g === "HLeft") {
          const W = st(O.free)(y);
          if (W.tag === "Nothing")
            return 0;
          if (W.tag === "Just")
            return W._1.length;
        }
        f();
      })()
    };
    if (P.edge.tag === "Nothing")
      return { ...S, stack: [...S.stack, O], trace: [...S.trace, B], x: S.x };
    if (P.edge.tag === "Just") {
      const W = P.edge._1.from.node === O.free ? k(P.edge._1.from.node, P.edge._1.to.node) : k(P.edge._1.to.node, P.edge._1.from.node), K = R(P.edge._1, W._1, d(P.edge._1, W._1), S.x) - R(P.edge._1, W._2, d(P.edge._1, W._2), S.x), V = st(W._1)(c.root), D = (() => {
        if (V.tag === "Nothing")
          return W._1;
        if (V.tag === "Just")
          return V._1;
        f();
      })(), M = { ...B, edgeId: v("Just", P.edge._1.id), delta: K };
      if (K > 0 && K < 1e300) {
        const Z = J((ut) => (lt) => {
          const qt = st(lt)(p), wt = (() => {
            if (qt.tag === "Nothing")
              return -1;
            if (qt.tag === "Just")
              return qt._1;
            f();
          })();
          if (wt >= 0 && wt < e.length) {
            const xt = e[wt], $t = st(lt)(n.nodeIndex), mt = (() => {
              if ($t.tag === "Nothing")
                return -2;
              if ($t.tag === "Just")
                return $t._1 - 1 | 0;
              f();
            })();
            return mt >= 0 && mt < xt.length ? se(ut)((() => {
              const gt = st(lt)(S.x), _t = st(lt)(u), it = st(xt[mt])(S.x), at = st(xt[mt])(u);
              return (() => {
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
              })() - ((() => {
                if (it.tag === "Nothing")
                  return 0;
                if (it.tag === "Just")
                  return it._1;
                f();
              })() + (() => {
                if (at.tag === "Nothing")
                  return 0;
                if (at.tag === "Just")
                  return at._1;
                f();
              })() + $(xt[mt]) + m(lt, xt[mt]));
            })()) : ut;
          }
          const Ht = st(lt)(n.nodeIndex), pt = (() => {
            if (Ht.tag === "Nothing")
              return -2;
            if (Ht.tag === "Just")
              return Ht._1 - 1 | 0;
            f();
          })();
          return pt >= 0 && pt < 0 ? se(ut)((() => {
            const xt = st(lt)(S.x), $t = st(lt)(u), mt = st([][pt])(S.x), gt = st([][pt])(u);
            return (() => {
              if (xt.tag === "Nothing")
                return 0;
              if (xt.tag === "Just")
                return xt._1;
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
              if (gt.tag === "Nothing")
                return 0;
              if (gt.tag === "Just")
                return gt._1;
              f();
            })() + $([][pt]) + m(lt, [][pt]));
          })()) : ut;
        })(K)(ao(c)(D)), tt = Z > 0 ? -Z : 0, j = { ...S, x: Z > 0 ? l(D, tt, S.x) : S.x, trace: [...S.trace, { ...M, avail: Z, shift: tt }] };
        return Z > 0 ? j : { ...j, stack: [...j.stack, O] };
      }
      if (K < 0 && -K < 1e300) {
        const Z = J((ut) => (lt) => {
          const qt = st(lt)(p), wt = (() => {
            if (qt.tag === "Nothing")
              return -1;
            if (qt.tag === "Just")
              return qt._1;
            f();
          })();
          if (wt >= 0 && wt < e.length) {
            const xt = e[wt], $t = st(lt)(n.nodeIndex), mt = (() => {
              if ($t.tag === "Nothing")
                return 0;
              if ($t.tag === "Just")
                return $t._1 + 1 | 0;
              f();
            })();
            return mt >= 0 && mt < xt.length ? se(ut)((() => {
              const gt = st(xt[mt])(S.x), _t = st(xt[mt])(u), it = st(lt)(S.x), at = st(lt)(u);
              return (() => {
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
              })() - ((() => {
                if (it.tag === "Nothing")
                  return 0;
                if (it.tag === "Just")
                  return it._1;
                f();
              })() + (() => {
                if (at.tag === "Nothing")
                  return 0;
                if (at.tag === "Just")
                  return at._1;
                f();
              })() + $(lt) + m(lt, xt[mt]));
            })()) : ut;
          }
          const Ht = st(lt)(n.nodeIndex), pt = (() => {
            if (Ht.tag === "Nothing")
              return 0;
            if (Ht.tag === "Just")
              return Ht._1 + 1 | 0;
            f();
          })();
          return pt >= 0 && pt < 0 ? se(ut)((() => {
            const xt = st([][pt])(S.x), $t = st([][pt])(u), mt = st(lt)(S.x), gt = st(lt)(u);
            return (() => {
              if (xt.tag === "Nothing")
                return 0;
              if (xt.tag === "Just")
                return xt._1;
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
              if (gt.tag === "Nothing")
                return 0;
              if (gt.tag === "Just")
                return gt._1;
              f();
            })() + $(lt) + m(lt, [][pt]));
          })()) : ut;
        })(-K)(ao(c)(D)), tt = Z > 0 ? Z : 0, j = { ...S, x: Z > 0 ? l(D, tt, S.x) : S.x, trace: [...S.trace, { ...M, avail: Z, shift: tt }] };
        return Z > 0 ? j : { ...j, stack: [...j.stack, O] };
      }
      return { ...S, stack: [...S.stack, O], trace: [...S.trace, M], x: S.x };
    }
    f();
  }, z = J(et(ay))({
    x: Ne(q((E) => k(
      E,
      (() => {
        const S = st(E)(c.root), O = (() => {
          if (S.tag === "Nothing")
            return E;
          if (S.tag === "Just")
            return S._1;
          f();
        })(), P = st(O)(Y.x), B = st((() => {
          const K = st(O)(Y.sink);
          if (K.tag === "Nothing")
            return O;
          if (K.tag === "Just")
            return K._1;
          f();
        })())(G), W = (() => {
          if (P.tag === "Just")
            return P._1;
          if (P.tag === "Nothing")
            return x;
          f();
        })();
        return (() => {
          if (W.tag === "Nothing")
            return 0;
          if (W.tag === "Just")
            return W._1;
          f();
        })() + (() => {
          if (B.tag === "Nothing")
            return 0;
          if (B.tag === "Just")
            return B._1;
          f();
        })();
      })()
    ))(T)),
    su: Y.su,
    stack: [],
    trace: []
  })(Y.queue), Q = J(et(fy))({ ...z, stack: [] })(wn(z.stack));
  return { x: Q.x, queue: Y.queue, trace: Q.trace };
}, dy = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (g) => _y(t)(n)(e)(r)(o)(i)(s)(u)(c)(a)(g).x, hy = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = (c, a, g) => {
    const _ = st(a)(e), d = (() => {
      if (_.tag === "Nothing")
        return 0.5;
      if (_.tag === "Just")
        return _._1._1 / 2;
      f();
    })(), l = c.from.node === a ? c.from.port : c.to.node === a ? c.to.port : x;
    if (l.tag === "Just") {
      const h = st(a)(n);
      if (h.tag === "Just") {
        const $ = Mt((p) => p.id === l._1)(h._1);
        if ($.tag === "Just") {
          const p = rt($._1.offset) * rt(4);
          return g === "North" || g === "South" ? p : 0;
        }
        if ($.tag === "Nothing") {
          const p = Hr(o)(c.id)(g)(d);
          return g === "North" || g === "South" ? p : 0;
        }
        f();
      }
      if (h.tag === "Nothing") {
        const $ = Hr(o)(c.id)(g)(d);
        return g === "North" || g === "South" ? $ : 0;
      }
      f();
    }
    if (l.tag === "Nothing") {
      const h = Hr(o)(c.id)(g)(d);
      return g === "North" || g === "South" ? h : 0;
    }
    f();
  }, u = (c) => (a) => (g) => (_) => {
    let d = c, l = a, h = g, $ = _, p = !0, m;
    for (; p; ) {
      const y = d, N = l, T = h, b = Wt((L) => x, (L) => (C) => v("Just", { head: L, tail: C }), $);
      if (b.tag === "Nothing") {
        p = !1, m = y;
        continue;
      }
      if (b.tag === "Just") {
        const L = b._1.head, C = Mt((X) => X.from.node === T && X.to.node === L || X.from.node === L && X.to.node === T)(r), H = (() => {
          if (C.tag === "Nothing")
            return N + 0;
          if (C.tag === "Just")
            return N + (s(C._1, T, C._1.from.node === T ? hn : dn) - s(
              C._1,
              L,
              C._1.from.node === L ? hn : dn
            ));
          f();
        })();
        d = U(A)(L)(H)(y), l = H, h = L, $ = b._1.tail;
        continue;
      }
      f();
    }
    return m;
  };
  return J((c) => (a) => {
    const g = Wt((l) => x, (l) => (h) => v("Just", { head: l, tail: h }), ao(t)(a)), _ = (() => {
      if (g.tag === "Nothing")
        return U(A)(a)(0)(I);
      if (g.tag === "Just")
        return u(U(A)(g._1.head)(0)(I))(0)(g._1.head)(g._1.tail);
      f();
    })(), d = J((l) => (h) => we(l)(-h._2))(0)(xu(_));
    return J((l) => (h) => U(A)(h._1)(h._2 + d)(l))(c)(xu(_));
  })(I)(Yr(A.compare)((() => {
    const c = (a, g) => {
      if (a.tag === "Leaf")
        return g;
      if (a.tag === "Node")
        return c(a._5, Xt("Cons", a._4, c(a._6, g)));
      f();
    };
    return St(Ut.foldr, c(t.root, Vt));
  })()));
}, py = (t) => (n) => {
  const e = (o, i, s) => xn(3)(i) === "$d:" && Cf(
    M0,
    (() => {
      const u = st(i)(t.preds);
      if (u.tag === "Nothing")
        return [];
      if (u.tag === "Just")
        return u._1;
      f();
    })()
  ), r = (o) => (i) => (s) => (u) => (c) => (a) => (g) => {
    let _ = o, d = i, l = u, h = a, $ = g, p = !0, m;
    for (; p; ) {
      const y = _, N = d, T = l, w = h, b = $, L = N.length;
      if (b >= L) {
        p = !1, m = y;
        continue;
      }
      const C = b >= 0 && b < N.length ? v("Just", N[b]) : x, H = (() => {
        if (C.tag === "Nothing")
          return "";
        if (C.tag === "Just")
          return C._1;
        f();
      })(), X = e(t, H);
      if (b === (L - 1 | 0) || X) {
        const Y = (() => {
          if (X) {
            const G = st(H)(t.preds), R = (() => {
              if (G.tag === "Nothing")
                return [];
              if (G.tag === "Just")
                return G._1;
              f();
            })();
            if (0 < R.length) {
              const nt = T - 1 | 0, et = st(R[0])(t.nodeIndex);
              if (et.tag === "Nothing")
                return nt;
              if (et.tag === "Just")
                return et._1;
              f();
            }
          }
          return T - 1 | 0;
        })();
        _ = J((G) => (R) => {
          if (R >= 0 && R < N.length) {
            const nt = N[R];
            return e(t, nt) ? G : J((et) => (z) => {
              const Q = st(z)(t.nodeIndex), E = (() => {
                if (Q.tag === "Nothing")
                  return 0;
                if (Q.tag === "Just")
                  return Q._1;
                f();
              })();
              return E < w || E > Y ? U(A)(z + "→" + nt)()(et) : et;
            })(G)((() => {
              const et = st(nt)(t.preds);
              if (et.tag === "Nothing")
                return [];
              if (et.tag === "Just")
                return et._1;
              f();
            })());
          }
          return e(t, "") ? G : J((nt) => (et) => {
            const z = st(et)(t.nodeIndex), Q = (() => {
              if (z.tag === "Nothing")
                return 0;
              if (z.tag === "Just")
                return z._1;
              f();
            })();
            return Q < w || Q > Y ? U(A)(et + "→")()(nt) : nt;
          })(G)((() => {
            const nt = st("")(t.preds);
            if (nt.tag === "Nothing")
              return [];
            if (nt.tag === "Just")
              return nt._1;
            f();
          })());
        })(y)(Ft(0, b)), d = N, l = T, h = Y, $ = b + 1 | 0;
        continue;
      }
      _ = y, d = N, l = T, h = w, $ = b + 1 | 0;
    }
    return m;
  };
  return n.length < 3 ? I : J((o) => (i) => {
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
  })(I)(Ft(1, n.length - 2 | 0));
}, $y = (t) => (n) => (e) => (r) => (o) => {
  const i = Xn(n), s = J((u) => (c) => {
    const a = J((g) => (_) => {
      const d = (() => {
        if (o === "HRight") {
          const p = st(_)(t.preds);
          if (p.tag === "Nothing")
            return [];
          if (p.tag === "Just")
            return p._1;
          f();
        }
        if (o === "HLeft") {
          const p = st(_)(t.succs);
          if (p.tag === "Nothing")
            return [];
          if (p.tag === "Just")
            return p._1;
        }
        f();
      })(), l = d.length;
      if (l === 0)
        return g;
      const h = Fe(l - 1 | 0, 2), $ = Fe(l, 2);
      return J((p) => (m) => {
        if ((() => {
          const y = st(_)(p.align);
          if (y.tag === "Nothing")
            return _ !== _;
          if (y.tag === "Just")
            return y._1 !== _;
          f();
        })())
          return p;
        if (m >= 0 && m < d.length) {
          const y = st(d[m])(t.nodeIndex), N = (() => {
            if (y.tag === "Nothing")
              return 0;
            if (y.tag === "Just")
              return y._1;
            f();
          })();
          if (!(wa(d[m] + "→" + _)(e) || wa(_ + "→" + d[m])(e)) && (() => {
            if (r === "VDown")
              return p.r < N;
            if (r === "VUp")
              return p.r > N;
            f();
          })()) {
            const T = st(d[m])(p.root), w = (() => {
              if (T.tag === "Nothing")
                return d[m];
              if (T.tag === "Just")
                return T._1;
              f();
            })();
            return {
              root: U(A)(_)(w)(p.root),
              align: U(A)(d[m])(_)(U(A)(_)(w)(p.align)),
              r: N
            };
          }
        }
        return p;
      })(g)((() => {
        if (r === "VDown")
          return Ft(h, $);
        if (r === "VUp")
          return wn(Ft(h, $));
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
        return wn(c);
      f();
    })());
    return { root: a.root, align: a.align };
  })({ root: Ne(q((u) => k(u, u))(i)), align: Ne(q((u) => k(u, u))(i)) })((() => {
    if (o === "HRight")
      return n;
    if (o === "HLeft")
      return wn(n);
    f();
  })());
  return { root: s.root, align: s.align };
}, fi = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
  const g = $y(n)(e)(u)(c)(a), _ = hy(g)(o)(r)(i)(s)(a);
  return F1()((d) => (l) => v(
    "Just",
    (() => {
      const h = st(d)(_);
      if (h.tag === "Nothing")
        return l + 0;
      if (h.tag === "Just")
        return l + h._1;
      f();
    })()
  ))(dy(t)(n)(e)(r)(o)(i)(s)(_)(g)(c)(a));
}, ba = (t) => (n) => Bt((e) => (r) => J((o) => (i) => i >= 0 && i < n.length ? i >= 0 && i < t.length ? o + n[i] + t[i] : o + n[i] + 0 : i >= 0 && i < t.length ? o + 1 + t[i] : o + 1)(0)((() => {
  const o = Ft(0, n.length - 1 | 0);
  return e < 1 ? [] : Lt(0, e, o);
})()))(n), my = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = uy(0)(n.length - 1 | 0), c = rt(t.layerGap), a = s($1(u, c)), g = Nm(U0(o)(a)(r)(i)(I))(a);
  return q((_) => {
    const d = cy(_)(g);
    return d.tag === "Just" && d._1 > 0 ? we(c)(2 + rt(d._1 - 1 | 0) * 2.5) : c;
  })(Ft(0, u - 1 | 0));
}, rg = (t) => (n) => (e) => (r) => Cf(
  (o) => J((i) => (s) => {
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
), yy = (t) => (n) => (e) => (r) => {
  const o = Et((i) => (s) => ct.compare(i.w)(s.w))(q((i) => ({ l: i, w: eg(i) }))(ft(
    rg()(n)(e),
    r
  )));
  return 0 < o.length ? v("Just", o[0].l) : x;
}, Ny = (t) => (n) => {
  const e = Ne(Xn(q(Bt((o) => (i) => k(i, o)))(t))), r = (o) => Et((i) => (s) => ot.compare((() => {
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
          return I;
        if (i.tag === "Node")
          return zt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(J((i) => (s) => kt(A)(un)(s.to.node)([s.from.node])(i))(I)(n));
    })(),
    succs: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return I;
        if (i.tag === "Node")
          return zt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(J((i) => (s) => kt(A)(un)(s.from.node)([s.to.node])(i))(I)(n));
    })(),
    nodeIndex: e
  };
}, xy = (t) => (n) => {
  const e = Et((_) => (d) => ct.compare(_.w)(d.w))(Bt((_) => (d) => ({ i: _, l: d, w: eg(d) }))(n)), r = 0 < e.length ? v("Just", e[0]) : x, o = (() => {
    if (r.tag === "Just")
      return r._1.i;
    if (r.tag === "Nothing")
      return 0;
    f();
  })(), i = o >= 0 && o < n.length ? v("Just", n[o]) : x, s = (() => {
    if (i.tag === "Just")
      return ((d) => (l) => {
        let h = d, $ = l, p = !0, m;
        for (; p; ) {
          const y = h, N = $;
          if (N.tag === "Nil") {
            p = !1, m = y;
            continue;
          }
          if (N.tag === "Cons") {
            h = se(y)(N._1), $ = N._2;
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
            return d(l._5, Xt("Cons", l._4, d(l._6, h)));
          f();
        };
        return d(i._1, Vt);
      })());
    if (i.tag === "Nothing")
      return 0;
    f();
  })(), u = (_) => J((d) => (l) => we(d)((() => {
    const h = st(l._1)(t);
    if (h.tag === "Nothing")
      return l._2 + 1;
    if (h.tag === "Just")
      return l._2 + h._1._1;
    f();
  })()))(-999999)(xu(_)), c = o >= 0 && o < n.length ? v("Just", n[o]) : x, a = (() => {
    if (c.tag === "Just")
      return u(c._1);
    if (c.tag === "Nothing")
      return 0;
    f();
  })(), g = bn(
    (_) => (d) => {
      const l = (h) => {
        if (h.tag === "Leaf")
          return I;
        if (h.tag === "Node")
          return zt("Node", h._1, h._2, h._3, h._4 + d, l(h._5), l(h._6));
        f();
      };
      return l(_);
    },
    n,
    Bt((_) => (d) => tr(_)(2) === 0 ? s - ((h) => ($) => {
      let p = h, m = $, y = !0, N;
      for (; y; ) {
        const T = p, w = m;
        if (w.tag === "Nil") {
          y = !1, N = T;
          continue;
        }
        if (w.tag === "Cons") {
          p = se(T)(w._1), m = w._2;
          continue;
        }
        f();
      }
      return N;
    })(999999)((() => {
      const h = ($, p) => {
        if ($.tag === "Leaf")
          return p;
        if ($.tag === "Node")
          return h($._5, Xt("Cons", $._4, h($._6, p)));
        f();
      };
      return h(d, Vt);
    })()) : a - u(d))(n)
  );
  return ly(J((_) => (d) => {
    const l = Et(ct.compare)(yt(st(d))(g));
    return U(A)(d)(l.length === 4 ? 1 < l.length && 2 < l.length ? (l[1] + l[2]) / 2 : 0 : 0 < l.length ? l[0] : 0)(_);
  })(I)(Yr(A.compare)(Xn(q((_) => {
    const d = (l) => {
      if (l.tag === "Leaf")
        return I;
      if (l.tag === "Node")
        return zt("Node", l._1, l._2, l._3, void 0, d(l._5), d(l._6));
      f();
    };
    return St(On.foldr, d(_));
  })(g)))));
}, Jy = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Ny(n)(o), u = py(s)(n), c = { nodeGap: t.nodeGap * 4 | 0 }, a = Pn(
    A.compare,
    Cn,
    Ne(q((l) => k(l, k(1, 1)))(ft(
      M0,
      Xn(n)
    ))),
    (() => {
      const l = (h) => {
        if (h.tag === "Leaf")
          return I;
        if (h.tag === "Node")
          return zt("Node", h._1, h._2, h._3, k(h._4._1 * rt(4), h._4._2), l(h._5), l(h._6));
        f();
      };
      return l(e);
    })()
  ), g = [
    fi(c)(s)(n)(a)(r)(o)(i)(u)(xa)(Ta),
    fi(c)(s)(n)(a)(r)(o)(i)(u)(Ja)(Ta),
    fi(c)(s)(n)(a)(r)(o)(i)(u)(xa)(va),
    fi(c)(s)(n)(a)(r)(o)(i)(u)(Ja)(va)
  ], _ = xy(a)(g);
  if (rg()(n)(a)(_))
    return _;
  const d = yy()(n)(a)(g);
  if (d.tag === "Just")
    return d._1;
  if (d.tag === "Nothing")
    return g[0];
  f();
}, Ty = (t) => (n) => (e) => (r) => {
  const o = kf(
    x,
    Nf,
    (i) => i.node === n ? v("Just", i.position) : x,
    t
  );
  if (o.tag === "Nothing")
    return t;
  if (o.tag === "Just") {
    const i = o._1;
    return q((s) => s.node === e ? { ...s, position: k(i._1 + r._1, i._2 + r._2) } : s)(t);
  }
  f();
}, vy = (t) => (n) => (e) => (r) => {
  const o = ft((s) => Yn(pe)(s.node)(n), t), i = (() => {
    if (e === "Vertical") {
      if (r === "Start")
        return J((s) => (u) => se(s)(u.position._1))(99999)(o);
      if (r === "End")
        return J((s) => (u) => we(s)(u.position._1))(0)(o);
      if (r === "Center") {
        const s = J((u) => (c) => u + c.position._1)(0)(o);
        return o.length === 0 ? 0 : s / rt(o.length);
      }
      f();
    }
    if (e === "Horizontal") {
      if (r === "Start")
        return J((s) => (u) => se(s)(u.position._2))(99999)(o);
      if (r === "End")
        return J((s) => (u) => we(s)(u.position._2))(0)(o);
      if (r === "Center") {
        const s = J((u) => (c) => u + c.position._2)(0)(o);
        return o.length === 0 ? 0 : s / rt(o.length);
      }
    }
    f();
  })();
  return q((s) => {
    if (Yn(pe)(s.node)(n)) {
      if (e === "Vertical")
        return { ...s, position: k(i, s.position._2) };
      if (e === "Horizontal")
        return { ...s, position: k(s.position._1, i) };
      f();
    }
    return s;
  })(t);
}, wy = (t) => (n) => J((e) => (r) => r.tag === "AlignGroup" ? vy(e)(r._1.nodes)(r._1.axis)(r._1.alignment) : r.tag === "RelativePosition" ? Ty(e)(r._1.anchor)(r._1.target)(r._1.offset) : e)(n)(t), by = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const c = q((_) => J((d) => (l) => we(d)((() => {
    const h = st(l)(r);
    if (h.tag === "Nothing")
      return 1;
    if (h.tag === "Just")
      return h._1._2;
    f();
  })()))(1)(_))(e), a = Jy(t)(e)(r)(o)(i)(u), g = ba(my(t)(e)(r)(o)(i)(s)((_) => {
    const d = ba(_)(c);
    return Xn(Bt((l) => (h) => Bt(($) => (p) => ({
      node: p,
      position: k(
        (() => {
          const m = st(p)(a);
          return (() => {
            if (m.tag === "Nothing")
              return 0;
            if (m.tag === "Just")
              return m._1;
            f();
          })() / rt(4);
        })(),
        l >= 0 && l < d.length ? d[l] : 0
      ),
      size: (() => {
        const m = xn(3)(p) === "$d:" ? k(0, 1) : k(1, 1), y = st(p)(r);
        if (y.tag === "Nothing")
          return m;
        if (y.tag === "Just")
          return y._1;
        f();
      })(),
      layer: l,
      order: $
    }))(h))(e));
  }))(c);
  return wy(n)(Xn(Bt((_) => (d) => Bt((l) => (h) => ({
    node: h,
    position: k(
      (() => {
        const $ = st(h)(a);
        return (() => {
          if ($.tag === "Nothing")
            return 0;
          if ($.tag === "Just")
            return $._1;
          f();
        })() / rt(4);
      })(),
      _ >= 0 && _ < g.length ? g[_] : 0
    ),
    size: (() => {
      const $ = xn(3)(h) === "$d:" ? k(0, 1) : k(1, 1), p = st(h)(r);
      if (p.tag === "Nothing")
        return $;
      if (p.tag === "Just")
        return p._1;
      f();
    })(),
    layer: _,
    order: l
  }))(d))(e)));
}, Vs = /* @__PURE__ */ Zu(Ji)(/* @__PURE__ */ Jr(32)), ka = /* @__PURE__ */ Zu(Ji)(/* @__PURE__ */ Jr(31)), Co = /* @__PURE__ */ (() => {
  const t = C_("25214903917");
  if (t.tag === "Nothing")
    return qf;
  if (t.tag === "Just")
    return t._1;
  f();
})(), Po = /* @__PURE__ */ uu(/* @__PURE__ */ Zu(Ji)(/* @__PURE__ */ Jr(48)))(Ji), ky = (t) => {
  const n = P_(t);
  return xo(zf((() => {
    if (n.tag === "Nothing")
      return qf;
    if (n.tag === "Just")
      return n._1;
    f();
  })())(Co))(Po);
}, Ju = /* @__PURE__ */ Jr(11), Qi = (t) => (n) => {
  const e = xo(pi($i(n)(Co))(Ju))(Po);
  return k(
    (() => {
      const r = Gf(k_(cu(e)(Jr(48 - t | 0))));
      if (r.tag === "Nothing")
        return 0;
      if (r.tag === "Just")
        return r._1;
      f();
    })(),
    e
  );
}, Ly = (t) => {
  const n = Qi(26)(t), e = Qi(27)(n._2);
  return k((rt(n._1) * iu(2)(27) + rt(e._1)) / iu(2)(53), e._2);
}, Ey = (t) => (n) => {
  const e = J((r) => (o) => {
    const i = Ly(r.finalR);
    return { rs: [...r.rs, i._1], finalR: i._2 };
  })({ rs: [], finalR: t })(n);
  return k(
    q((r) => r.x)(Et((r) => (o) => ct.compare(r.k)(o.k))(bn((r) => (o) => ({ x: r, k: o }), n, e.rs))),
    e.finalR
  );
}, Sy = (t) => {
  const n = xo(pi($i(t)(Co))(Ju))(Po), e = xo(pi($i(n)(Co))(Ju))(Po);
  return k(
    pi($i((() => {
      const r = cu(n)(Jr(16));
      return Hc.compare(r)(ka) !== "LT" ? uu(r)(Vs) : r;
    })())(Vs))((() => {
      const r = cu(e)(Jr(16));
      return Hc.compare(r)(ka) !== "LT" ? uu(r)(Vs) : r;
    })()),
    e
  );
}, Ao = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Wi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, hc = /* @__PURE__ */ en(A)(Ot), Rr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Hi = /* @__PURE__ */ en(A)(Ot), Cy = /* @__PURE__ */ Ru(Do), Py = /* @__PURE__ */ J(Vr)(0), Ay = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, La = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Gy = (t) => (n) => (e) => {
  if (t >= 0 && t < e.length) {
    const r = e[t];
    if (n >= 0 && n < e.length) {
      const o = ir(Yt, x, t, e[n], e);
      if (o.tag === "Just")
        return ir(Yt, x, n, r, o._1);
      if (o.tag === "Nothing")
        return x;
      f();
    }
  }
  return x;
}, Iy = (t) => (n) => (e) => (r) => (o) => hc(J((i) => (s) => {
  const u = Et((c) => (a) => ot.compare((() => {
    const g = Ao(c.id)(o);
    if (g.tag === "Nothing")
      return 1e6;
    if (g.tag === "Just")
      return g._1;
    f();
  })())((() => {
    const g = Ao(a.id)(o);
    if (g.tag === "Nothing")
      return 1e6;
    if (g.tag === "Just")
      return g._1;
    f();
  })()))(ft((c) => Wi(c.to.node)(e), ft((c) => c.from.node === s, r)));
  return {
    ranks: [...i.ranks, ...Bt((c) => (a) => k(a.id, rt((i.rankSum + c | 0) + 1 | 0)))(u)],
    rankSum: i.rankSum + u.length | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), Fy = (t) => (n) => (e) => (r) => (o) => hc(J((i) => (s) => {
  const u = Et((a) => (g) => {
    const _ = ot.compare((() => {
      const d = Rr(g.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      f();
    })())((() => {
      const d = Rr(a.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      f();
    })());
    return _ === "EQ" ? ot.compare((() => {
      const d = Ao(a.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      f();
    })())((() => {
      const d = Ao(g.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      f();
    })()) : _;
  })(ft((a) => Wi(a.from.node)(e), ft((a) => a.to.node === s, r))), c = u.length;
  return {
    ranks: [...i.ranks, ...Bt((a) => (g) => k(g.id, rt((i.rankSum + c | 0) - a | 0)))(u)],
    rankSum: i.rankSum + c | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), Tu = (t) => (n) => (e) => {
  const r = Hi(Bt((u) => (c) => k(c, u))(t)), o = Hi(Bt((u) => (c) => k(c, u))(n)), i = yt((u) => {
    const c = Rr(u.from.node)(r), a = Rr(u.to.node)(o);
    if (c.tag === "Just" && a.tag === "Just")
      return v("Just", k(c._1, a._1));
    const g = Rr(u.from.node)(o), _ = Rr(u.to.node)(r);
    return g.tag === "Just" && _.tag === "Just" ? v("Just", k(_._1, g._1)) : x;
  })(e), s = i.length;
  return J((u) => (c) => J((a) => (g) => c >= 0 && c < i.length && g >= 0 && g < i.length && ((i[c]._1 - i[g]._1 | 0) * (i[c]._2 - i[g]._2 | 0) | 0) < 0 ? a + 1 | 0 : a)(u)(Ft(c + 1 | 0, s - 1 | 0)))(0)(Ft(0, s - 2 | 0));
}, By = (t) => (n) => (e) => (r) => {
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
          const $ = d[l], p = d[h];
          if (Vn((T) => T.before === $ && T.after === p, r)) {
            c = d, a = l + 1 | 0;
            continue;
          }
          const m = ir(Yt, x, l, p, d), y = (() => {
            if (m.tag === "Just")
              return ir(Yt, x, l + 1 | 0, $, m._1);
            if (m.tag === "Nothing")
              return x;
            f();
          })(), N = (() => {
            if (y.tag === "Nothing")
              return d;
            if (y.tag === "Just")
              return y._1;
            f();
          })();
          if (Tu(n)(N)(e) < Tu(n)(d)(e)) {
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
      if (Cy(_)(g)) {
        c = !1, a = g;
        continue;
      }
      u = _;
    }
    return a;
  })(t);
}, gi = (t) => (n) => J((e) => (r) => {
  if (r >= 0 && r < t.length) {
    const o = t[r], i = r + 1 | 0;
    if (i >= 0 && i < t.length)
      return e + Tu(o)(t[i])(n) | 0;
  }
  return e;
})(0)(Ft(0, t.length - 2 | 0)), Ry = /* @__PURE__ */ (() => {
  const t = (n) => {
    if (n.length < 7) {
      const s = (u) => (c) => {
        let a = u, g = c, _ = !0, d;
        for (; _; ) {
          const l = a, h = g, $ = h - 1 | 0;
          if ($ >= 0 && $ < l.length) {
            if (h >= 0 && h < l.length && h > 0 && l[$].key > l[h].key) {
              const p = Gy(h - 1 | 0)(h)(l);
              if (p.tag === "Just") {
                a = p._1, g = h - 1 | 0;
                continue;
              }
              if (p.tag === "Nothing") {
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
      return J((u) => (c) => s(u)(c))(n)(Ft(1, n.length - 1 | 0));
    }
    const e = Fe(n.length, 2), r = t(Lt(0, e, n)), o = t(Lt(e, n.length, n));
    return ((s) => (u) => (c) => {
      let a = s, g = u, _ = c, d = !0, l;
      for (; d; ) {
        const h = a, $ = g, p = _;
        if ($ >= 0 && $ < r.length) {
          if (p >= 0 && p < o.length) {
            if (r[$].key > o[p].key) {
              a = Qt(h)(o[p]), g = $, _ = p + 1 | 0;
              continue;
            }
            a = Qt(h)(r[$]), g = $ + 1 | 0, _ = p;
            continue;
          }
          d = !1, l = [...h, ...$ < 1 ? r : Lt($, r.length, r)];
          continue;
        }
        d = !1, l = [...h, ...p < 1 ? o : Lt(p, o.length, o)];
      }
      return l;
    })([])(0)(0);
  };
  return t;
})(), Qy = (t) => (n) => (e) => {
  const r = yt((a) => a.tag === "OrderConstraint" ? v("Just", { before: a._1.before, after: a._1.after }) : x)(t.constraints), o = (a) => J((g) => (_) => {
    const d = _.after, l = _.before, h = Nr(Yt, x, (p) => p === l, g), $ = Nr(Yt, x, (p) => p === d, g);
    if (h.tag === "Just" && $.tag === "Just" && h._1 > $._1) {
      const p = Sf(Yt, x, h._1, g), m = (() => {
        if (p.tag === "Nothing")
          return g;
        if (p.tag === "Just")
          return p._1;
        f();
      })(), y = Ef(Yt, x, $._1, l, m);
      if (y.tag === "Nothing")
        return m;
      if (y.tag === "Just")
        return y._1;
      f();
    }
    return g;
  })(a)(r), i = hc(Bt((a) => (g) => k(g.id, a))(e)), s = (a, g, _) => {
    const d = a.length;
    return J((l) => (h) => {
      const $ = g ? h - 1 | 0 : h + 1 | 0, p = $ >= 0 && $ < l._1.length ? v("Just", l._1[$]) : x;
      if (p.tag === "Just") {
        const m = h >= 0 && h < l._1.length ? v("Just", l._1[h]) : x;
        if (m.tag === "Just") {
          const y = Hi(Bt((L) => (C) => k(C, L))(p._1)), N = Hi(Bt((L) => (C) => k(C, L))(m._1)), T = g ? Iy(p._1)(y)(N)(e)(i) : Fy(p._1)(y)(N)(e)(i), w = J((L) => (C) => {
            const H = yt((Y) => Ao(Y.id)(T))(ft(g ? (Y) => Y.to.node === C._2 && Wi(Y.from.node)(y) : (Y) => Y.from.node === C._2 && Wi(Y.to.node)(y), e));
            if (H.length === 0)
              return { ...L, items: [...L.items, { n: C._2, key: x, origIdx: C._1 }] };
            const X = Qi(24)(L.r);
            return {
              items: [
                ...L.items,
                {
                  n: C._2,
                  key: v("Just", (Py(H) + (rt(X._1) * 4172325152040912e-24 - 0.03500000014901161)) / rt(H.length)),
                  origIdx: C._1
                }
              ],
              r: X._2
            };
          })({ items: [], r: l._2 })(Bt(qe)(m._1)), b = ir(
            Yt,
            x,
            h,
            By(o(q((L) => L.n)(Ry((() => {
              const L = w.items, C = (X) => (Y) => {
                let G = X, R = Y, nt = !0, et;
                for (; nt; ) {
                  const z = G, Q = R;
                  if (z >= 0 && z < L.length) {
                    if (L[z].key.tag === "Just") {
                      nt = !1, et = L[z].key._1;
                      continue;
                    }
                    if (L[z].key.tag === "Nothing") {
                      G = z + 1 | 0, R = Q;
                      continue;
                    }
                    f();
                  }
                  nt = !1, et = Q;
                }
                return et;
              };
              return ((X) => (Y) => (G) => {
                let R = X, nt = Y, et = G, z = !0, Q;
                for (; z; ) {
                  const E = R, S = nt, O = et;
                  if (E >= 0 && E < L.length) {
                    if (L[E].key.tag === "Just") {
                      R = E + 1 | 0, nt = L[E].key._1, et = [...O, { n: L[E].n, key: L[E].key._1, origIdx: L[E].origIdx }];
                      continue;
                    }
                    if (L[E].key.tag === "Nothing") {
                      const P = (S + C(E + 1 | 0)(S + 1)) / 2;
                      R = E + 1 | 0, nt = P, et = [...O, { n: L[E].n, key: P, origIdx: L[E].origIdx }];
                      continue;
                    }
                    f();
                  }
                  z = !1, Q = O;
                }
                return Q;
              })(0)(-1)([]);
            })()))))(p._1)(e)(r),
            l._1
          );
          if (b.tag === "Just")
            return k(b._1, w.r);
          if (b.tag === "Nothing")
            return k(l._1, l._2);
          f();
        }
        if (m.tag === "Nothing")
          return k(l._1, l._2);
        f();
      }
      if (p.tag === "Nothing")
        return k(l._1, l._2);
      f();
    })(k(a, _))(g ? Ft(1, d - 1 | 0) : wn(Ft(0, d - 2 | 0)));
  }, u = J((a) => (g) => U(A)(g.from.node)()(U(A)(g.to.node)()(a)))(I)(e), c = J((a) => (g) => {
    if (a.result.crossings === 0)
      return a;
    const _ = (y) => (N) => (T) => (w) => {
      let b = y, L = N, C = T, H = w, X = !0, Y;
      for (; X; ) {
        const G = b, R = L, nt = C, et = H;
        if (nt === 0) {
          X = !1, Y = { layout: G, crossings: 0, random: et };
          continue;
        }
        const z = s(G, R, et), Q = gi(z._1)(e);
        if (Q < nt) {
          b = z._1, L = !R, C = Q, H = z._2;
          continue;
        }
        X = !1, Y = { layout: G, crossings: nt, random: z._2 };
      }
      return Y;
    }, d = Qi(1)(a.result.random), l = d._1 !== 0, h = t.modelOrder.tag === "Leaf", $ = (a.firstTry || a.secondTry) && !h ? a.firstTry : l, p = (() => {
      if (!h) {
        const w = s(n, $, d._2);
        return _(w._1)(!$)(gi(w._1)(e))(w._2);
      }
      const y = $ ? 0 : Ay(0)(n.length - 1 | 0), N = y >= 0 && y < n.length ? v("Just", n[y]) : x;
      if (N.tag === "Just" && N._1.length > 1) {
        const w = ft((b) => La(b)(u), N._1);
        if (w.length > 1) {
          const b = Ey(d._2)(w), L = b._1, C = ir(
            Yt,
            x,
            y,
            o(J((H) => (X) => La(X)(u) ? H.idx >= 0 && H.idx < L.length ? { idx: H.idx + 1 | 0, result: [...H.result, L[H.idx]] } : { idx: H.idx, result: [...H.result, X] } : { idx: H.idx, result: [...H.result, X] })({ idx: 0, result: [] })(N._1).result),
            n
          );
          if (C.tag === "Just") {
            const H = s(C._1, $, b._2);
            return _(H._1)(!$)(gi(H._1)(e))(H._2);
          }
        }
      }
      const T = s(n, $, d._2);
      return _(T._1)(!$)(gi(T._1)(e))(T._2);
    })(), m = a.secondTry ? !1 : a.secondTry;
    return a.firstTry ? {
      result: p.crossings < a.result.crossings ? { layout: p.layout, crossings: p.crossings, random: p.random } : { ...a.result, random: p.random },
      firstTry: !1,
      secondTry: !0
    } : {
      result: p.crossings < a.result.crossings ? { layout: p.layout, crossings: p.crossings, random: p.random } : { ...a.result, random: p.random },
      firstTry: a.firstTry,
      secondTry: m
    };
  })({
    result: {
      layout: n,
      crossings: 1e9,
      random: xo(zf(Sy(ky(1))._1)(Co))(Po)
    },
    firstTry: t.modelOrder.tag !== "Leaf",
    secondTry: !1
  })(Ft(1, t.iterations)).result;
  return n.length <= 0 || t.iterations <= 0 ? n : c.layout;
}, Wy = (t) => t, Ea = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Hn = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, jr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Go = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = A.compare(n._1)(e._1);
      return r === "LT" ? Jn : r === "GT" ? Tn : A.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), Hy = /* @__PURE__ */ en(A)(Ot), Dy = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = Go.compare(t)(s._3);
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
}, Oy = /* @__PURE__ */ Wy("Greedy"), Us = (t) => (n) => (e) => J((r) => (o) => {
  if (o.from.node === o.to.node)
    return r;
  if (o.from.node === n && !Ea(o.to.node)(r.marks)) {
    const i = Hn(o.to.node)(r.inDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = U(A)(o.to.node)(s)(r.inDeg);
    return (() => {
      const c = Hn(o.to.node)(r.outDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        f();
      })() && !Yn(pe)(o.to.node)(r.sources);
    })() ? { ...r, inDeg: u, sources: [...r.sources, o.to.node] } : { ...r, inDeg: u };
  }
  if (o.to.node === n && !Ea(o.from.node)(r.marks)) {
    const i = Hn(o.from.node)(r.outDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = U(A)(o.from.node)(s)(r.outDeg);
    return (() => {
      const c = Hn(o.from.node)(r.inDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        f();
      })() && !Yn(pe)(o.from.node)(r.sinks);
    })() ? { ...r, outDeg: u, sinks: [...r.sinks, o.from.node] } : { ...r, outDeg: u };
  }
  return r;
})({ ...e, remaining: ft((r) => r !== n, e.remaining) })(t), qy = /* @__PURE__ */ J((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return U(A)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return U(A)(n._1.node)(0)(t);
    if (n._1.pin.tag === "LastLayer")
      return U(A)(n._1.node)(99999)(t);
  }
  return t;
})(I), og = (t) => (n) => (e) => {
  const r = Hn(n)(t), o = Hn(e)(t);
  return r.tag === "Just" && o.tag === "Just" && r._1 > o._1;
}, ig = (t) => (n) => (e) => (r) => {
  if (jr(e)(r.visited) || jr(e)(r.visiting))
    return r;
  const o = J(zy(t)(n)(e))({ ...r, visiting: U(A)(e)()(r.visiting) })((() => {
    const i = Hn(e)(n);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just")
      return i._1;
    f();
  })());
  return {
    ...o,
    visiting: yo(A)(e)(o.visiting),
    visited: U(A)(e)()(o.visited)
  };
}, zy = (t) => (n) => (e) => (r) => (o) => og(t)(e)(o) ? { ...r, backEdges: U(Go)(k(e, o))()(r.backEdges) } : jr(o)(r.visiting) ? { ...r, backEdges: U(Go)(k(e, o))()(r.backEdges) } : jr(o)(r.visited) ? r : ig(t)(n)(o)(r), Yy = (t) => (n) => (e) => {
  const r = (d) => {
    let l = d, h = !0, $;
    for (; h; ) {
      const p = l, m = Wt((y) => x, (y) => (N) => v("Just", { head: y, tail: N }), p.sinks);
      if (m.tag === "Just") {
        l = Us(e)(m._1.head)({
          ...p,
          sinks: m._1.tail,
          marks: U(A)(m._1.head)(p.nextRight)(p.marks),
          nextRight: p.nextRight - 1 | 0
        });
        continue;
      }
      if (m.tag === "Nothing") {
        const y = Wt((N) => x, (N) => (T) => v("Just", { head: N, tail: T }), p.sources);
        if (y.tag === "Just") {
          l = Us(e)(y._1.head)({
            ...p,
            sources: y._1.tail,
            marks: U(A)(y._1.head)(p.nextLeft)(p.marks),
            nextLeft: p.nextLeft + 1 | 0
          });
          continue;
        }
        if (y.tag === "Nothing") {
          const N = (w) => {
            const b = Hn(w)(p.outDeg), L = Hn(w)(p.inDeg);
            return (() => {
              if (b.tag === "Nothing")
                return 0;
              if (b.tag === "Just")
                return b._1;
              f();
            })() - (() => {
              if (L.tag === "Nothing")
                return 0;
              if (L.tag === "Just")
                return L._1;
              f();
            })() | 0;
          }, T = Et((w) => (b) => {
            const L = ot.compare(N(b))(N(w));
            return L === "EQ" ? ot.compare((() => {
              const C = Hn(w)(n);
              if (C.tag === "Nothing")
                return 1e6;
              if (C.tag === "Just")
                return C._1;
              f();
            })())((() => {
              const C = Hn(b)(n);
              if (C.tag === "Nothing")
                return 1e6;
              if (C.tag === "Just")
                return C._1;
              f();
            })()) : L;
          })(p.remaining);
          if (0 < T.length) {
            const w = T[0];
            l = Us(e)(w)({
              ...p,
              remaining: ft((b) => b !== w, p.remaining),
              marks: U(A)(w)(p.nextLeft)(p.marks),
              nextLeft: p.nextLeft + 1 | 0
            });
            continue;
          }
          h = !1, $ = p;
          continue;
        }
      }
      f();
    }
    return $;
  }, o = Yr(A.compare)([...q((d) => d.from.node)(e), ...q((d) => d.to.node)(e)]), i = ft((d) => d.from.node !== d.to.node, e), s = J((d) => (l) => kt(A)(cn)(l.to.node)(1)(d))(I)(i), u = J((d) => (l) => kt(A)(cn)(l.from.node)(1)(d))(I)(i), c = ft(
    (d) => {
      const l = Hn(d)(s);
      if (l.tag === "Nothing")
        return !0;
      if (l.tag === "Just")
        return l._1 === 0;
      f();
    },
    o
  ), a = ft(
    (d) => {
      const l = Hn(d)(u);
      if (l.tag === "Nothing")
        return !0;
      if (l.tag === "Just")
        return l._1 === 0;
      f();
    },
    o
  ), g = o.length + 1 | 0, _ = J((d) => (l) => {
    const h = Hn(l)(d);
    return h.tag === "Just" && h._1 < 0 ? U(A)(l)(h._1 + g | 0)(d) : d;
  })(r({
    remaining: ft((d) => !Yn(pe)(d)(c) && !Yn(pe)(d)(a), o),
    marks: I,
    inDeg: s,
    outDeg: u,
    sources: c,
    sinks: a,
    nextLeft: 1,
    nextRight: -1
  }).marks)(o);
  return J((d) => (l) => {
    if (l.from.node === l.to.node)
      return d;
    if (og(t)(l.from.node)(l.to.node))
      return U(Go)(k(l.from.node, l.to.node))()(d);
    const h = Hn(l.from.node)(_), $ = Hn(l.to.node)(_);
    return h.tag === "Just" && $.tag === "Just" && h._1 > $._1 ? U(Go)(k(l.from.node, l.to.node))()(d) : d;
  })(I)(e);
}, Xy = /* @__PURE__ */ J((t) => (n) => kt(A)(un)(n.from.node)([n.to.node])(t))(I), Vy = (t) => (n) => {
  const e = Xy(n), r = Yr(A.compare)([...q((i) => i.from.node)(n), ...q((i) => i.to.node)(n)]), o = J((i) => (s) => U(A)(s.to.node)()(i))(I)(n);
  return J((i) => (s) => ig(t)(e)(s)(i))({
    visiting: I,
    visited: I,
    backEdges: I
  })([...ft((i) => !jr(i)(o), r), ...ft((i) => jr(i)(o), r)]).backEdges;
}, Uy = (t) => (n) => (e) => (r) => {
  const o = Hy(Bt((u) => (c) => k(c, u))(n)), i = qy(e), s = (() => {
    if (t === "DepthFirst")
      return Vy(i)(r);
    if (t === "Greedy")
      return Yy(i)(o)(r);
    f();
  })();
  return {
    edges: q((u) => Dy(k(u.from.node, u.to.node))(s) ? { ...u, from: u.to, to: u.from } : u)(r),
    reversedEdges: s
  };
}, sg = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ky = /* @__PURE__ */ J((t) => (n) => U(A)(n)()(t))(I), Di = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, My = /* @__PURE__ */ Q0(A), ye = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Sa = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ks = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = ot.compare(t)(s._3);
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
}, jy = /* @__PURE__ */ en(ot)(Ot), Zy = (t) => (n) => Pn(A.compare, Cn, t, n), ug = /* @__PURE__ */ Bt((t) => (n) => ({ src: n.src, tgt: n.tgt, delta: 1, weight: 1, eid: t })), t2 = (t) => J((n) => (e) => ({
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
          s = sg(g)(_._1), u = _._2;
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
          return o(i._5, Xt("Cons", i._4, o(i._6, s)));
        f();
      };
      return o(e, Vt);
    })()) | 0) + 1 | 0;
  })(),
  result: [
    ...n.result,
    (() => {
      if (n.base === 0)
        return e;
      const r = (o) => {
        if (o.tag === "Leaf")
          return I;
        if (o.tag === "Node")
          return zt("Node", o._1, o._2, o._3, o._4 + n.base | 0, r(o._5), r(o._6));
        f();
      };
      return r(e);
    })()
  ]
}))({ base: 0, result: [] })(t).result, n2 = (t) => (n) => {
  const e = Ky(t);
  return My(t)(ug(ft((r) => Di(r.src)(e) && Di(r.tgt)(e), n)));
}, e2 = (t) => (n) => {
  const e = J((o) => (i) => kt(A)(un)(i.tgt)([i.src])(kt(A)(un)(i.src)([
    i.tgt
  ])(o)))(I)(n), r = (o) => (i) => (s) => {
    let u = o, c = i, a = s, g = !0, _;
    for (; g; ) {
      const d = u, l = c, h = a, $ = Wt((p) => x, (p) => (m) => v("Just", { head: p, tail: m }), d);
      if ($.tag === "Nothing") {
        g = !1, _ = { nodes: h };
        continue;
      }
      if ($.tag === "Just") {
        if (Di($._1.head)(l)) {
          u = $._1.tail, c = l, a = h;
          continue;
        }
        u = [
          ...$._1.tail,
          ...(() => {
            const p = ye($._1.head)(e);
            if (p.tag === "Nothing")
              return [];
            if (p.tag === "Just")
              return p._1;
            f();
          })()
        ], c = U(A)($._1.head)()(l), a = [...h, $._1.head];
        continue;
      }
      f();
    }
    return _;
  };
  return J((o) => (i) => {
    if (Di(i)(o.visited))
      return o;
    const s = r([i])(o.visited)([]);
    return {
      ...o,
      visited: J((u) => (c) => U(A)(c)()(u))(o.visited)(s.nodes),
      components: [...o.components, s.nodes]
    };
  })({ visited: I, components: [] })(t).components;
}, r2 = (t) => (n) => (e) => {
  const r = J((i) => (s) => kt(A)(cn)(s.tgt)(1)(i))(I)(n), o = J((i) => (s) => kt(A)(cn)(s.src)(1)(i))(I)(n);
  return J((i) => (s) => {
    const u = ye(s)(r), c = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      f();
    })();
    if ((() => {
      const y = ye(s)(o);
      return (() => {
        if (y.tag === "Nothing")
          return c !== 0;
        if (y.tag === "Just")
          return c !== y._1;
        f();
      })() || c === 0;
    })())
      return i;
    const a = ye(s)(i.layers), g = (() => {
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      f();
    })(), _ = i.layers, d = J((y) => (N) => N.tgt === s ? {
      ...y,
      mIn: Sa(y.mIn)((() => {
        const T = ye(s)(_), w = ye(N.src)(_);
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
      mOut: Sa(y.mOut)((() => {
        const T = ye(N.tgt)(_), w = ye(s)(_);
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
    const $ = (g - l | 0) + 1 | 0, p = (g + h | 0) - 1 | 0;
    if (p < $)
      return i;
    const m = J((y) => (N) => {
      const T = Ks(N)(i.filling), w = (() => {
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
        const y = Ks(g)(i.filling);
        if (y.tag === "Nothing")
          return 0;
        if (y.tag === "Just")
          return y._1;
        f();
      })()
    })(Ft($, p));
    return m.best === g ? i : {
      layers: U(A)(s)(m.best)(i.layers),
      filling: U(ot)(g)((() => {
        const y = Ks(g)(i.filling);
        if (y.tag === "Nothing")
          return -1;
        if (y.tag === "Just")
          return y._1 - 1 | 0;
        f();
      })())(U(ot)(m.best)(m.bestFill + 1 | 0)(i.filling))
    };
  })({
    layers: e,
    filling: jy(q((i) => k(
      i,
      J((s) => (u) => (() => {
        const c = ye(u)(e);
        return c.tag === "Nothing" ? !1 : c.tag === "Just" && c._1 === i;
      })() ? s + 1 | 0 : s)(0)(t)
    ))(Ft(
      0,
      J((i) => (s) => sg(i)((() => {
        const u = ye(s)(e);
        if (u.tag === "Nothing")
          return 0;
        if (u.tag === "Just")
          return u._1;
        f();
      })()))(0)(t)
    )))
  })(t).layers;
}, o2 = (t) => (n) => r2(t)(ug(n))(J(Zy)(I)(t2(q((e) => n2(e)(n))(e2(t)(n))))), i2 = (t) => t, $r = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Oi = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, cg = /* @__PURE__ */ (() => {
  const t = oe.unfoldr(Se);
  return (n) => t(te("IterNode", n, Ee));
})(), s2 = /* @__PURE__ */ i2("NetworkSimplex"), u2 = (t) => (n) => J((e) => (r) => {
  const o = J(Oi)(0)(yt((i) => $r(i)(e))(r));
  return J((i) => (s) => U(A)(s)(o)(i))(e)(r);
})(n)(t), c2 = (t) => (n) => ({
  layers: q((e) => ft(
    (r) => {
      const o = $r(r)(n);
      return o.tag === "Nothing" ? !1 : o.tag === "Just" && o._1 === e;
    },
    t
  ))(Ft(
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
          i = Oi(a)(g._1), s = g._2;
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
          return r(o._5, Xt("Cons", o._4, r(o._6, i)));
        f();
      };
      return r(n, Vt);
    })())
  )),
  nodeLayer: n
}), a2 = (t) => (n) => (e) => {
  const r = J((o) => (i) => U(A)(i)(!0)(o))(I)(n);
  return J((o) => (i) => U(A)(i._1)(i._2)(o))(o2(n)(yt((o) => o.from.node === o.to.node || (() => {
    const i = $r(o.from.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() || (() => {
    const i = $r(o.to.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() ? x : v("Just", { src: o.from.node, tgt: o.to.node }))(t)))(cg(e));
}, f2 = (t) => (n) => (e) => (r) => {
  const o = (c) => (a) => {
    const g = $r(a)(c);
    if (g.tag === "Just")
      return c;
    if (g.tag === "Nothing") {
      const _ = ft(
        (l) => l !== a,
        (() => {
          const l = $r(a)(t);
          if (l.tag === "Nothing")
            return [];
          if (l.tag === "Just")
            return l._1;
          f();
        })()
      ), d = J(o)(c)(_);
      return U(A)(a)(1 + J(Oi)(0)(yt((l) => $r(l)(d))(_)) | 0)(d);
    }
    f();
  }, i = J(o)(I)(e), u = ((c) => (a) => {
    let g = c, _ = a, d = !0, l;
    for (; d; ) {
      const h = g, $ = _;
      if ($.tag === "Nil") {
        d = !1, l = h;
        continue;
      }
      if ($.tag === "Cons") {
        g = Oi(h)($._1), _ = $._2;
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
        return c(a._5, Xt("Cons", a._4, c(a._6, g)));
      f();
    };
    return c(i, Vt);
  })());
  return J((c) => (a) => U(A)(a._1)(a._2)(c))((() => {
    const c = (a) => {
      if (a.tag === "Leaf")
        return I;
      if (a.tag === "Node")
        return zt("Node", a._1, a._2, a._3, u - a._4 | 0, c(a._5), c(a._6));
      f();
    };
    return c(i);
  })())(cg(r));
}, g2 = /* @__PURE__ */ J((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return U(A)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return U(A)(n._1.node)(0)(t);
  }
  return t;
})(I), l2 = /* @__PURE__ */ J((t) => (n) => kt(A)(un)(n.to.node)([n.from.node])(t))(I), _2 = /* @__PURE__ */ J((t) => (n) => kt(A)(un)(n.from.node)([n.to.node])(t))(I), d2 = (t) => (n) => (e) => (r) => {
  const o = _2(e), i = l2(e), s = g2(n);
  return c2(r)(u2(yt((u) => u.tag === "SameLayer" ? v("Just", u._1.nodes) : x)(n))((() => {
    if (t === "LongestPath")
      return f2(o)(i)(r)(s);
    if (t === "NetworkSimplex")
      return a2(e)(r)(s);
    f();
  })()));
}, h2 = /* @__PURE__ */ en(A)(Ot), p2 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Ca = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Io = /* @__PURE__ */ en(A)(Ot), $2 = /* @__PURE__ */ en(A)(Ot), Aa = /* @__PURE__ */ (() => {
  const t = q((n) => ({ start: n.end, end: n.start, direction: n.direction }));
  return (n) => wn(t(n));
})(), m2 = (t) => (n) => (e) => (r) => {
  const o = h2(q((s) => k(s.edge, s))(r)), i = (s) => 0 < s.nodes.length && (() => {
    const u = p2(s.edgeId)(e);
    return u.tag === "Just" && s.nodes[0] !== u._1._1;
  })();
  return q((s) => {
    if (s.nodes.length <= 2) {
      const g = Ca(s.edgeId)(o);
      if (g.tag === "Just") {
        const _ = i(s), d = So(Eo(_ ? Aa(g._1.segments) : g._1.segments));
        return { ...g._1, edge: s.edgeId, segments: d, bends: bn((l) => (h) => l.end, d, Lt(1, d.length, d)), reversed: _ };
      }
      if (g.tag === "Nothing")
        return { edge: s.edgeId, segments: [], bends: [], bendType: [], jumps: [], reversed: !1 };
      f();
    }
    const u = Tt(yt((g) => Ca(g)(o))(bn(
      (g) => (_) => s.edgeId + ":" + g + "->" + _,
      s.nodes,
      Lt(1, s.nodes.length, s.nodes)
    )))((g) => g.segments), c = i(s), a = So(Eo(c ? Aa(u) : u));
    return {
      edge: s.edgeId,
      segments: a,
      bends: bn((g) => (_) => g.end, a, Lt(1, a.length, a)),
      bendType: [],
      jumps: [],
      reversed: c
    };
  })(t);
}, y2 = { layers: [], edges: [], chains: [] }, N2 = {
  nodeGap: 3,
  layerGap: 2,
  iterations: 8,
  layerer: s2,
  cycleBreaker: Oy,
  compactPostRouting: !0,
  compactionSpacings: lm
}, x2 = (t) => ({
  pos: k(0, 0),
  size: k(
    J((n) => (e) => Pa(n)(e.position._1 + e.size._1))(0)(t),
    J((n) => (e) => Pa(n)(e.position._2 + e.size._2))(0)(t)
  )
}), J2 = (t) => (n) => (e) => {
  const r = Io(q((a) => k(a.id, a.ports))(n.nodes)), o = ft((a) => xn(3)(a.node) !== "$d:", e.placements), i = m2(e.withDummies.chains)(e.acyclic.reversedEdges)($2(q((a) => k(
    a.id,
    k(a.from.node, a.to.node)
  ))(n.edges)))(Xm(e.withDummies.edges)(e.placements)(r)(e.withDummies.chains)(j0(e.ordered)(ft(
    (a) => a.from.node !== a.to.node,
    e.withDummies.edges
  ))((() => {
    const a = (g) => {
      if (g.tag === "Leaf")
        return I;
      if (g.tag === "Node")
        return zt("Node", g._1, g._2, g._3, k(g._4._1 * 4, g._4._2), a(g._5), a(g._6));
      f();
    };
    return a(Io(q((g) => k(g.id, g.size))(n.nodes)));
  })()))), s = t.compactPostRouting ? hm()(t.compactionSpacings)({
    nodes: o,
    edges: n.edges,
    paths: i,
    ports: r
  }) : { nodes: o, edges: i }, u = q((a) => {
    const g = So(Eo(a.segments));
    return { ...a, segments: g, bends: bn((_) => (d) => _.end, g, Lt(1, g.length, g)) };
  })(s.edges), c = Bt((a) => (g) => ({ ...g, jumps: ty(a)(g)(u) }))(u);
  return { nodes: s.nodes, edges: c, boundingBox: x2(s.nodes), metrics: Hp(s.nodes)(c)(0) };
}, T2 = (t) => (n) => (e) => {
  const r = Io(q((i) => k(i.id, i.size))(n.nodes)), o = {
    ...e,
    placements: by({ nodeGap: t.nodeGap, layerGap: t.layerGap })(n.constraints)(e.ordered)(r)(Io(q((i) => k(
      i.id,
      i.ports
    ))(n.nodes)))(e.withDummies.edges)(e.withDummies.chains)(j0(e.ordered)(e.withDummies.edges)((() => {
      const i = (s) => {
        if (s.tag === "Leaf")
          return I;
        if (s.tag === "Node")
          return zt("Node", s._1, s._2, s._3, k(s._4._1 * 4, s._4._2), i(s._5), i(s._6));
        f();
      };
      return i(r);
    })()))
  };
  return { pipeline: o, result: J2(t)(n)(o) };
}, v2 = (t) => (n) => (e) => T2(t)(n)({
  ...e,
  ordered: Qy({
    iterations: t.iterations,
    constraints: n.constraints,
    modelOrder: Io(Bt((r) => (o) => k(o.id, r))(n.nodes))
  })(e.withDummies.layers)(e.withDummies.edges)
}), w2 = (t) => (n) => (e) => v2(t)(n)({
  ...e,
  withDummies: ny(e.layered.nodeLayer)(e.acyclic.edges)(e.layered.layers)
}), b2 = (t) => (n) => {
  const e = q((o) => o.id)(n.nodes), r = Uy(t.cycleBreaker)(e)(n.constraints)(n.edges);
  return w2(t)(n)({
    acyclic: r,
    layered: d2(t.layerer)(n.constraints)(r.edges)(e),
    withDummies: y2,
    ordered: [],
    placements: []
  });
}, Ns = (t) => t, k2 = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, gr = /* @__PURE__ */ Ns("TopSide"), lr = /* @__PURE__ */ Ns("BottomSide"), _r = /* @__PURE__ */ Ns("LeftSide"), dr = /* @__PURE__ */ Ns("RightSide"), L2 = (t) => {
  const n = ct.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = ct.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, Ga = (t) => (n) => (e) => {
  const r = k2(t.h * 0.12)(t.w * 0.2), o = t.w / 2;
  return (n < 0 ? t.y + r : t.y + t.h - r) + n * r * Sn(L2((() => {
    const i = (e - (t.x + o)) / o;
    return 1 - i * i;
  })()));
}, Wn = (t) => (n) => (e) => (r) => {
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
      o = Re, i = _, s = d, u = l;
      continue;
    }
    if (g === "Cylinder") {
      if (d === "TopSide") {
        c = !1, a = Ga(_)(-1)(l);
        continue;
      }
      if (d === "BottomSide") {
        c = !1, a = Ga(_)(1)(l);
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
    o = Re, i = _, s = d, u = l;
  }
  return a;
}, Ia = (t) => (n) => {
  const e = n.y - t.y, r = e < 0 ? -e : e, o = n.x - (t.x + t.w), i = o < 0 ? -o : o, s = n.x - t.x, u = s < 0 ? -s : s, c = n.y - (t.y + t.h), a = c < 0 ? -c : c;
  return r <= a && r <= u && r <= i ? gr : a <= u && a <= i ? lr : u <= i ? _r : dr;
}, E2 = /* @__PURE__ */ (() => {
  const t = oe.unfoldr(Se);
  return (n) => t(te("IterNode", n, Ee));
})(), pc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Fo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Bo = /* @__PURE__ */ en(A)(Ot), S2 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, C2 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, P2 = /* @__PURE__ */ J((t) => (n) => U(A)(n)()(t))(I), A2 = /* @__PURE__ */ J((t) => (n) => U(A)(n)()(t))(I), xs = wr.traverse(rs), qi = /* @__PURE__ */ en(A)(Ot), G2 = (t) => (n) => Pn(A.compare, Cn, t, n), I2 = /* @__PURE__ */ J((t) => (n) => U(A)(n)()(t))(I), F2 = /* @__PURE__ */ en(A)(Ot), B2 = (t) => (n) => Pn(A.compare, Cn, t, n), R2 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Fa = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Q2 = (t) => (n) => ({
  ...n,
  edges: Bo(q((e) => k(
    e._1,
    (() => {
      const r = pc(e._1)(t);
      if (r.tag === "Nothing")
        return e._2;
      if (r.tag === "Just") {
        const o = Fo(r._1._2)(n.nodes), i = Fo(r._1._1)(n.nodes), s = (() => {
          if (i.tag === "Nothing")
            return e._2;
          if (i.tag === "Just") {
            const u = Wt((c) => x, (c) => (a) => v("Just", { head: c, tail: a }), e._2);
            if (u.tag === "Nothing")
              return e._2;
            if (u.tag === "Just")
              return [
                (() => {
                  const c = Wt((d) => x, (d) => (l) => v("Just", { head: d, tail: l }), u._1.tail), a = c.tag === "Just" ? v("Just", c._1.head) : x, g = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, _ = (() => {
                    if (a.tag === "Just") {
                      if ((a._1.x > u._1.head.x ? a._1.x - u._1.head.x < 0.5 : u._1.head.x - a._1.x < 0.5) && u._1.head.x >= g.x - 0.5 && u._1.head.x <= g.x + g.w + 0.5)
                        return a._1.y >= g.y + g.h ? v("Just", lr) : a._1.y <= g.y ? v("Just", gr) : x;
                      if ((a._1.y > u._1.head.y ? a._1.y - u._1.head.y < 0.5 : u._1.head.y - a._1.y < 0.5) && u._1.head.y >= g.y - 0.5 && u._1.head.y <= g.y + g.h + 0.5) {
                        if (a._1.x >= g.x + g.w)
                          return v("Just", dr);
                        if (a._1.x <= g.x)
                          return v("Just", _r);
                      }
                      return x;
                    }
                    if (a.tag === "Nothing")
                      return x;
                    f();
                  })();
                  if (_.tag === "Just") {
                    if (_._1 === "TopSide")
                      return { ...u._1.head, y: Wn(i._1.shape)(g)(gr)(u._1.head.x) };
                    if (_._1 === "BottomSide")
                      return { ...u._1.head, y: Wn(i._1.shape)(g)(lr)(u._1.head.x) };
                    if (_._1 === "LeftSide")
                      return { ...u._1.head, x: Wn(i._1.shape)(g)(_r)(u._1.head.y) };
                    if (_._1 === "RightSide")
                      return { ...u._1.head, x: Wn(i._1.shape)(g)(dr)(u._1.head.y) };
                    f();
                  }
                  if (_.tag === "Nothing") {
                    const d = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, l = Ia(d)(u._1.head);
                    if (l === "TopSide")
                      return { ...u._1.head, y: Wn(i._1.shape)(d)(gr)(u._1.head.x) };
                    if (l === "BottomSide")
                      return { ...u._1.head, y: Wn(i._1.shape)(d)(lr)(u._1.head.x) };
                    if (l === "LeftSide")
                      return { ...u._1.head, x: Wn(i._1.shape)(d)(_r)(u._1.head.y) };
                    if (l === "RightSide")
                      return { ...u._1.head, x: Wn(i._1.shape)(d)(dr)(u._1.head.y) };
                  }
                  f();
                })(),
                ...u._1.tail
              ];
          }
          f();
        })();
        if (o.tag === "Nothing")
          return s;
        if (o.tag === "Just") {
          const u = xr(s);
          if (u.tag === "Nothing")
            return s;
          if (u.tag === "Just")
            return Qt(u._1.init)((() => {
              const c = xr(u._1.init), a = c.tag === "Just" ? v("Just", c._1.last) : x, g = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, _ = (() => {
                if (a.tag === "Just") {
                  if ((a._1.x > u._1.last.x ? a._1.x - u._1.last.x < 0.5 : u._1.last.x - a._1.x < 0.5) && u._1.last.x >= g.x - 0.5 && u._1.last.x <= g.x + g.w + 0.5)
                    return a._1.y >= g.y + g.h ? v("Just", lr) : a._1.y <= g.y ? v("Just", gr) : x;
                  if ((a._1.y > u._1.last.y ? a._1.y - u._1.last.y < 0.5 : u._1.last.y - a._1.y < 0.5) && u._1.last.y >= g.y - 0.5 && u._1.last.y <= g.y + g.h + 0.5) {
                    if (a._1.x >= g.x + g.w)
                      return v("Just", dr);
                    if (a._1.x <= g.x)
                      return v("Just", _r);
                  }
                  return x;
                }
                if (a.tag === "Nothing")
                  return x;
                f();
              })();
              if (_.tag === "Just") {
                if (_._1 === "TopSide")
                  return { ...u._1.last, y: Wn(o._1.shape)(g)(gr)(u._1.last.x) };
                if (_._1 === "BottomSide")
                  return { ...u._1.last, y: Wn(o._1.shape)(g)(lr)(u._1.last.x) };
                if (_._1 === "LeftSide")
                  return { ...u._1.last, x: Wn(o._1.shape)(g)(_r)(u._1.last.y) };
                if (_._1 === "RightSide")
                  return { ...u._1.last, x: Wn(o._1.shape)(g)(dr)(u._1.last.y) };
                f();
              }
              if (_.tag === "Nothing") {
                const d = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, l = Ia(d)(u._1.last);
                if (l === "TopSide")
                  return { ...u._1.last, y: Wn(o._1.shape)(d)(gr)(u._1.last.x) };
                if (l === "BottomSide")
                  return { ...u._1.last, y: Wn(o._1.shape)(d)(lr)(u._1.last.x) };
                if (l === "LeftSide")
                  return { ...u._1.last, x: Wn(o._1.shape)(d)(_r)(u._1.last.y) };
                if (l === "RightSide")
                  return { ...u._1.last, x: Wn(o._1.shape)(d)(dr)(u._1.last.y) };
              }
              f();
            })());
        }
      }
      f();
    })()
  ))(E2(n.edges)))
}), W2 = (t) => (n) => (e) => {
  const r = Mt((o) => o.id === e)(t.graph.edges);
  if (r.tag === "Just")
    return v("Just", r._1);
  if (r.tag === "Nothing")
    return pc(e)(n);
  f();
}, H2 = (t) => (n) => (e) => (r) => ({
  x: r.position._1 * t,
  y: r.position._2 * t,
  w: r.size._1 * t,
  h: r.size._2 * t,
  label: (() => {
    const o = Fo(r.node)(n);
    if (o.tag === "Just")
      return o._1;
    if (o.tag === "Nothing")
      return r.node;
    f();
  })(),
  shape: (() => {
    const o = Fo(r.node)(e);
    if (o.tag === "Nothing")
      return Re;
    if (o.tag === "Just")
      return o._1;
    f();
  })()
}), D2 = (t) => ({ id: t, size: k(1, 1), ports: [], label: v("Just", t), shape: Re }), O2 = (t) => (n) => (e) => (r) => k(r.node, H2(t)(n)(e)(r)), ag = (t) => {
  const n = _s(`
`)(t);
  return n.length === 0 ? [""] : n;
}, fg = (t) => {
  const n = (e, r) => {
    if (e.tag === "Leaf")
      return r;
    if (e.tag === "Node")
      return n(e._5, Xt("Cons", e._4, n(e._6, r)));
    f();
  };
  return St(Ut.foldr, n(t.interiors, Vt));
}, q2 = (t) => Bo(yt((n) => v(
  "Just",
  k(n.edge, { id: n.edge, from: { node: n.from, port: x }, to: { node: n.to, port: x }, label: x })
))(Tt(t.scenes)((n) => n.tag === "DataFlow" ? yt((e) => e.kind.tag === "SendToken" ? v("Just", e.kind._1) : x)(n._1.events) : []))), gg = (t) => {
  const n = U_(t), e = ft((o) => S2(o.id)(n.nodes), t.graph.nodes), r = ft((o) => C2(o.id)(n.edges), t.graph.edges);
  return {
    nodes: [
      ...e,
      ...q(D2)(St(
        On.foldr,
        Be(A.compare, n.nodes, P2(q((o) => o.id)(e)))
      ))
    ],
    edges: [
      ...r,
      ...yt(W2(t)(q2(t)))(St(
        On.foldr,
        Be(A.compare, n.edges, A2(q((o) => o.id)(r)))
      ))
    ],
    constraints: t.graph.constraints
  };
}, z2 = (t) => {
  const n = xs((e) => {
    const r = v0(w0)((() => {
      if (e.label.tag === "Just")
        return e.label._1;
      if (e.label.tag === "Nothing")
        return e.id;
      f();
    })());
    return () => {
      const o = r();
      return k(e.id, o);
    };
  })(gg(t).nodes);
  return () => {
    const e = n();
    return qi(e);
  };
}, lg = (t) => {
  const n = z2(t);
  return () => {
    const e = n(), r = xs(lg)(fg(t))();
    return J(G2)(e)(r);
  };
}, Y2 = (t) => (n) => {
  const e = Wt((r) => x, (r) => (o) => v("Just", { head: r, tail: o }), n.segments);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ x: e._1.head.start._1 * t, y: e._1.head.start._2 * t }, ...q((r) => ({ x: r.end._1 * t, y: r.end._2 * t }))([e._1.head, ...e._1.tail])];
  f();
}, X2 = (t) => (n) => k(n.edge, Y2(t)(n)), V2 = (t) => (n) => (e) => (r) => ({
  nodes: qi(q(O2(rt(4) * t)(n)(e))(r.nodes)),
  edges: Bo(q(X2(t))(r.edges)),
  chipExtras: I,
  edgeLabels: I
}), U2 = (t) => J((n) => (e) => {
  if (e.tag === "Structural")
    return n;
  if (e.tag === "DataFlow")
    return J((r) => (o) => {
      if (o.kind.tag === "SendToken")
        return J((i) => (s) => U(A)(s)()(i))(r)(o.kind._1.labels);
      if (o.kind.tag === "FillNodeWithoutTransition")
        return J((i) => (s) => U(A)(s)()(i))(r)(o.kind._1.labels);
      f();
    })(n)(e._1.events);
  if (e.tag === "Hold" || e.tag === "EnterNode" || e.tag === "ExitNode")
    return n;
  f();
})(I)(t.scenes), K2 = (t) => {
  const n = xs((e) => {
    const r = v0(w0)(e);
    return () => {
      const o = r();
      return k(e, { labelW: o, charCount: ur(Mr(e)), lineCount: 1 });
    };
  })(St(
    On.foldr,
    I2(Tt(St(On.foldr, U2(t)))(ag))
  ));
  return () => {
    const e = n();
    return F2(e);
  };
}, _g = (t) => {
  const n = K2(t);
  return () => {
    const e = n(), r = xs(_g)(fg(t))();
    return J(B2)(e)(r);
  };
}, M2 = rt(4) * 8, j2 = (t) => (n) => {
  const e = Rp(M2)(t)(Bp(Fp)(gg(n)));
  return {
    ...Q2(Bo(q((r) => k(r.id, k(r.from.node, r.to.node)))(e.edges)))(V2(8)(qi(q((r) => k(
      r.id,
      (() => {
        if (r.label.tag === "Just")
          return r.label._1;
        if (r.label.tag === "Nothing")
          return r.id;
        f();
      })()
    ))(e.nodes)))(qi(q((r) => k(r.id, r.shape))(e.nodes)))(b2(N2)(e).result)),
    edgeLabels: Bo(yt((r) => r.label.tag === "Just" ? v("Just", k(r.id, r.label._1)) : x)(e.edges))
  };
}, Z2 = (t) => Tt(t.scenes)((n) => {
  if (n.tag === "Structural")
    return [];
  if (n.tag === "DataFlow")
    return n._1.events;
  if (n.tag === "Hold")
    return [];
  if (n.tag === "EnterNode")
    return [];
  if (n.tag === "ExitNode")
    return [];
  f();
}), tN = (t) => (n) => (e) => {
  const r = (o) => {
    const i = yt((s) => {
      const u = R2(s)(t);
      return u.tag === "Just" ? v("Just", { w: u._1.labelW + 28, h: rt(Cp(1)(u._1.lineCount)) * 13.2 + 12 }) : x;
    })(Tt(o)(ag));
    return i.length === 0 ? x : v(
      "Just",
      { w: J(Fa)(0)(q((s) => s.w)(i)), h: J(Fa)(0)(q((s) => s.h)(i)) }
    );
  };
  return J((o) => (i) => {
    if (i.kind.tag === "SendToken") {
      const s = pc(i.kind._1.edge)(e.edges), u = r(i.kind._1.labels);
      if (u.tag === "Just" && s.tag === "Just") {
        const c = u._1;
        return kt(A)(un)(i.kind._1.edge)(q((a) => ({ x: a.x + 14 + c.w, y: a.y - 6 - 8 - c.h }))(s._1))(o);
      }
      return o;
    }
    if (i.kind.tag === "FillNodeWithoutTransition") {
      const s = Fo(i.kind._1.node)(e.nodes), u = r(i.kind._1.labels);
      return u.tag === "Just" && s.tag === "Just" ? kt(A)(un)("__fill__:" + i.kind._1.node)((() => {
        const c = s._1.y - u._1.h - 14, a = s._1.x + s._1.w / 2, g = a - u._1.w / 2, _ = a + u._1.w / 2, d = s._1.y - 14;
        return [{ x: g, y: c }, { x: _, y: c }, { x: g, y: d }, { x: _, y: d }];
      })())(o) : o;
    }
    f();
  })(I)(Z2(n));
}, dg = (t) => (n) => (e) => ({
  layout: (() => {
    const r = j2(t)(e);
    return { ...r, chipExtras: tN(n)(e)(r) };
  })(),
  interiors: (() => {
    const r = dg(t)(n), o = (i) => {
      if (i.tag === "Leaf")
        return I;
      if (i.tag === "Node")
        return zt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
      f();
    };
    return o(e.interiors);
  })()
}), Ba = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, vu = (t) => (n) => (e) => {
  const r = t < 0.05 ? t : 0.05, o = (s, u) => {
    if (u.tag === "Leaf")
      return s;
    if (u.tag === "Node")
      return o(
        (() => {
          const c = Ba(u._3)(e), a = (() => {
            if (c.tag === "Just")
              return c._1;
            if (c.tag === "Nothing")
              return { x: u._4.x, y: u._4.y, vx: 0, vy: 0 };
            f();
          })(), g = a.vx + (180 * (u._4.x - a.x) - 22 * a.vx) * r, _ = a.vy + (180 * (u._4.y - a.y) - 22 * a.vy) * r;
          return U(A)(u._3)({ x: a.x + g * r, y: a.y + _ * r, vx: g, vy: _ })(o(s, u._5));
        })(),
        u._6
      );
    f();
  }, i = o(I, n);
  return {
    springs: i,
    applied: (() => {
      const s = (u, c) => {
        if (c.tag === "Leaf")
          return u;
        if (c.tag === "Node")
          return s(
            (() => {
              const a = s(u, c._5), g = Ba(c._3)(i);
              if (g.tag === "Just")
                return U(A)(c._3)({ ...c._4, x: g._1.x, y: g._1.y })(a);
              if (g.tag === "Nothing")
                return U(A)(c._3)(c._4)(a);
              f();
            })(),
            c._6
          );
        f();
      };
      return s(I, n);
    })()
  };
};
(function() {
  var t = {}, n = "Pure", e = "Throw", r = "Catch", o = "Sync", i = "Async", s = "Bind", u = "Bracket", c = "Fork", a = "Sequential", g = "Map", _ = "Apply", d = "Alt", l = "Cons", h = "Resume", $ = "Release", p = "Finalizer", m = "Finalized", y = "Forked";
  function N(P, B, W, K) {
    this.tag = P, this._1 = B, this._2 = W, this._3 = K;
  }
  function T(P) {
    var B = function(W, K, V) {
      return new N(P, W, K, V);
    };
    return B.tag = P, B;
  }
  function w(P) {
    return new N(n, void 0);
  }
  function b(P) {
    try {
      P();
    } catch (B) {
      setTimeout(function() {
        throw B;
      }, 0);
    }
  }
  function L(P, B, W) {
    try {
      return B(W());
    } catch (K) {
      return P(K);
    }
  }
  function C(P, B, W) {
    try {
      return B(W)();
    } catch (K) {
      return W(P(K))(), w;
    }
  }
  var H = (function() {
    var P = 1024, B = 0, W = 0, K = new Array(P), V = !1;
    function D() {
      var M;
      for (V = !0; B !== 0; )
        B--, M = K[W], K[W] = void 0, W = (W + 1) % P, M();
      V = !1;
    }
    return {
      isDraining: function() {
        return V;
      },
      enqueue: function(M) {
        var Z;
        B === P && (Z = V, D(), V = Z), K[(W + B) % P] = M, B++, V || D();
      }
    };
  })();
  function X(P) {
    var B = {}, W = 0, K = 0;
    return {
      register: function(V) {
        var D = W++;
        V.onComplete({
          rethrow: !0,
          handler: function(M) {
            return function() {
              K--, delete B[D];
            };
          }
        })(), B[D] = V, K++;
      },
      isEmpty: function() {
        return K === 0;
      },
      killAll: function(V, D) {
        return function() {
          if (K === 0)
            return D();
          var M = 0, Z = {};
          function tt(ut) {
            Z[ut] = B[ut].kill(V, function(lt) {
              return function() {
                delete Z[ut], M--, P.isLeft(lt) && P.fromLeft(lt) && setTimeout(function() {
                  throw P.fromLeft(lt);
                }, 0), M === 0 && D();
              };
            })();
          }
          for (var j in B)
            B.hasOwnProperty(j) && (M++, tt(j));
          return B = {}, W = 0, K = 0, function(ut) {
            return new N(o, function() {
              for (var lt in Z)
                Z.hasOwnProperty(lt) && Z[lt]();
            });
          };
        };
      }
    };
  }
  var Y = 0, G = 1, R = 2, nt = 3, et = 4, z = 5, Q = 6;
  function E(P, B, W) {
    var K = 0, V = Y, D = W, M = null, Z = null, tt = null, j = null, ut = null, lt = 0, qt = 0, wt = null, Ht = !0;
    function pt(gt) {
      for (var _t, it, at; ; )
        switch (_t = null, it = null, at = null, V) {
          case R:
            V = G;
            try {
              D = tt(D), j === null ? tt = null : (tt = j._1, j = j._2);
            } catch (Nt) {
              V = z, M = P.left(Nt), D = null;
            }
            break;
          case nt:
            P.isLeft(D) ? (V = z, M = D, D = null) : tt === null ? V = z : (V = R, D = P.fromRight(D));
            break;
          case G:
            switch (D.tag) {
              case s:
                tt && (j = new N(l, tt, j)), tt = D._2, V = G, D = D._1;
                break;
              case n:
                tt === null ? (V = z, D = P.right(D._1)) : (V = R, D = D._1);
                break;
              case o:
                V = nt, D = L(P.left, P.right, D._1);
                break;
              case i:
                V = et, D = C(P.left, D._1, function(Nt) {
                  return function() {
                    K === gt && (K++, H.enqueue(function() {
                      K === gt + 1 && (V = nt, D = Nt, pt(K));
                    }));
                  };
                });
                return;
              case e:
                V = z, M = P.left(D._1), D = null;
                break;
              // Enqueue the Catch so that we can call the error handler later on
              // in case of an exception.
              case r:
                tt === null ? ut = new N(l, D, ut, Z) : ut = new N(l, D, new N(l, new N(h, tt, j), ut, Z), Z), tt = null, j = null, V = G, D = D._1;
                break;
              // Enqueue the Bracket so that we can call the appropriate handlers
              // after resource acquisition.
              case u:
                lt++, tt === null ? ut = new N(l, D, ut, Z) : ut = new N(l, D, new N(l, new N(h, tt, j), ut, Z), Z), tt = null, j = null, V = G, D = D._1;
                break;
              case c:
                V = nt, _t = E(P, B, D._2), B && B.register(_t), D._1 && _t.run(), D = P.right(_t);
                break;
              case a:
                V = G, D = O(P, B, D._1);
                break;
            }
            break;
          case z:
            if (tt = null, j = null, ut === null)
              V = Q, D = Z || M || D;
            else
              switch (_t = ut._3, at = ut._1, ut = ut._2, at.tag) {
                // We cannot recover from an unmasked interrupt. Otherwise we should
                // continue stepping, or run the exception handler if an exception
                // was raised.
                case r:
                  Z && Z !== _t && lt === 0 ? V = z : M && (V = G, D = at._2(P.fromLeft(M)), M = null);
                  break;
                // We cannot resume from an unmasked interrupt or exception.
                case h:
                  Z && Z !== _t && lt === 0 || M ? V = z : (tt = at._1, j = at._2, V = R, D = P.fromRight(D));
                  break;
                // If we have a bracket, we should enqueue the handlers,
                // and continue with the success branch only if the fiber has
                // not been interrupted. If the bracket acquisition failed, we
                // should not run either.
                case u:
                  lt--, M === null && (it = P.fromRight(D), ut = new N(l, new N($, at._2, it), ut, _t), (Z === _t || lt > 0) && (V = G, D = at._3(it)));
                  break;
                // Enqueue the appropriate handler. We increase the bracket count
                // because it should not be cancelled.
                case $:
                  ut = new N(l, new N(m, D, M), ut, Z), V = G, Z && Z !== _t && lt === 0 ? D = at._1.killed(P.fromLeft(Z))(at._2) : M ? D = at._1.failed(P.fromLeft(M))(at._2) : D = at._1.completed(P.fromRight(D))(at._2), M = null, lt++;
                  break;
                case p:
                  lt++, ut = new N(l, new N(m, D, M), ut, Z), V = G, D = at._1;
                  break;
                case m:
                  lt--, V = z, D = at._1, M = at._2;
                  break;
              }
            break;
          case Q:
            for (var Jt in wt)
              wt.hasOwnProperty(Jt) && (Ht = Ht && wt[Jt].rethrow, b(wt[Jt].handler(D)));
            wt = null, Z && M ? setTimeout(function() {
              throw P.fromLeft(M);
            }, 0) : P.isLeft(D) && Ht && setTimeout(function() {
              if (Ht)
                throw P.fromLeft(D);
            }, 0);
            return;
          case Y:
            V = G;
            break;
          case et:
            return;
        }
    }
    function xt(gt) {
      return function() {
        if (V === Q)
          return Ht = Ht && gt.rethrow, gt.handler(D)(), function() {
          };
        var _t = qt++;
        return wt = wt || {}, wt[_t] = gt, function() {
          wt !== null && delete wt[_t];
        };
      };
    }
    function $t(gt, _t) {
      return function() {
        if (V === Q)
          return _t(P.right(void 0))(), function() {
          };
        var it = xt({
          rethrow: !1,
          handler: function() {
            return _t(P.right(void 0));
          }
        })();
        switch (V) {
          case Y:
            Z = P.left(gt), V = Q, D = Z, pt(K);
            break;
          case et:
            Z === null && (Z = P.left(gt)), lt === 0 && (V === et && (ut = new N(l, new N(p, D(gt)), ut, Z)), V = z, D = null, M = null, pt(++K));
            break;
          default:
            Z === null && (Z = P.left(gt)), lt === 0 && (V = z, D = null, M = null);
        }
        return it;
      };
    }
    function mt(gt) {
      return function() {
        var _t = xt({
          rethrow: !1,
          handler: gt
        })();
        return V === Y && pt(K), _t;
      };
    }
    return {
      kill: $t,
      join: mt,
      onComplete: xt,
      isSuspended: function() {
        return V === Y;
      },
      run: function() {
        V === Y && (H.isDraining() ? pt(K) : H.enqueue(function() {
          pt(K);
        }));
      }
    };
  }
  function S(P, B, W, K) {
    var V = 0, D = {}, M = 0, Z = {}, tt = new Error("[ParAff] Early exit"), j = null, ut = t;
    function lt(xt, $t, mt) {
      var gt = $t, _t = null, it = null, at = 0, Jt = {}, Nt, bt;
      t: for (; ; )
        switch (Nt = null, gt.tag) {
          case y:
            if (gt._3 === t && (Nt = D[gt._1], Jt[at++] = Nt.kill(xt, function(Dt) {
              return function() {
                at--, at === 0 && mt(Dt)();
              };
            })), _t === null)
              break t;
            gt = _t._2, it === null ? _t = null : (_t = it._1, it = it._2);
            break;
          case g:
            gt = gt._2;
            break;
          case _:
          case d:
            _t && (it = new N(l, _t, it)), _t = gt, gt = gt._1;
            break;
        }
      if (at === 0)
        mt(P.right(void 0))();
      else
        for (bt = 0, Nt = at; bt < Nt; bt++)
          Jt[bt] = Jt[bt]();
      return Jt;
    }
    function qt(xt, $t, mt) {
      var gt, _t, it, at, Jt, Nt;
      for (P.isLeft(xt) ? (gt = xt, _t = null) : (_t = xt, gt = null); ; ) {
        if (it = null, at = null, Jt = null, Nt = null, j !== null)
          return;
        if ($t === null) {
          K(gt || _t)();
          return;
        }
        if ($t._3 !== t)
          return;
        switch ($t.tag) {
          case g:
            gt === null ? ($t._3 = P.right($t._1(P.fromRight(_t))), _t = $t._3) : $t._3 = gt;
            break;
          case _:
            if (it = $t._1._3, at = $t._2._3, gt) {
              if ($t._3 = gt, Jt = !0, Nt = M++, Z[Nt] = lt(tt, gt === it ? $t._2 : $t._1, function() {
                return function() {
                  delete Z[Nt], Jt ? Jt = !1 : mt === null ? qt(gt, null, null) : qt(gt, mt._1, mt._2);
                };
              }), Jt) {
                Jt = !1;
                return;
              }
            } else {
              if (it === t || at === t)
                return;
              _t = P.right(P.fromRight(it)(P.fromRight(at))), $t._3 = _t;
            }
            break;
          case d:
            if (it = $t._1._3, at = $t._2._3, it === t && P.isLeft(at) || at === t && P.isLeft(it))
              return;
            if (it !== t && P.isLeft(it) && at !== t && P.isLeft(at))
              gt = _t === it ? at : it, _t = null, $t._3 = gt;
            else if ($t._3 = _t, Jt = !0, Nt = M++, Z[Nt] = lt(tt, _t === it ? $t._2 : $t._1, function() {
              return function() {
                delete Z[Nt], Jt ? Jt = !1 : mt === null ? qt(_t, null, null) : qt(_t, mt._1, mt._2);
              };
            }), Jt) {
              Jt = !1;
              return;
            }
            break;
        }
        mt === null ? $t = null : ($t = mt._1, mt = mt._2);
      }
    }
    function wt(xt) {
      return function($t) {
        return function() {
          delete D[xt._1], xt._3 = $t, qt($t, xt._2._1, xt._2._2);
        };
      };
    }
    function Ht() {
      var xt = G, $t = W, mt = null, gt = null, _t, it;
      t: for (; ; )
        switch (_t = null, it = null, xt) {
          case G:
            switch ($t.tag) {
              case g:
                mt && (gt = new N(l, mt, gt)), mt = new N(g, $t._1, t, t), $t = $t._2;
                break;
              case _:
                mt && (gt = new N(l, mt, gt)), mt = new N(_, t, $t._2, t), $t = $t._1;
                break;
              case d:
                mt && (gt = new N(l, mt, gt)), mt = new N(d, t, $t._2, t), $t = $t._1;
                break;
              default:
                it = V++, xt = z, _t = $t, $t = new N(y, it, new N(l, mt, gt), t), _t = E(P, B, _t), _t.onComplete({
                  rethrow: !1,
                  handler: wt($t)
                })(), D[it] = _t, B && B.register(_t);
            }
            break;
          case z:
            if (mt === null)
              break t;
            mt._1 === t ? (mt._1 = $t, xt = G, $t = mt._2, mt._2 = t) : (mt._2 = $t, $t = mt, gt === null ? mt = null : (mt = gt._1, gt = gt._2));
        }
      for (ut = $t, it = 0; it < V; it++)
        D[it].run();
    }
    function pt(xt, $t) {
      j = P.left(xt);
      var mt;
      for (var gt in Z)
        if (Z.hasOwnProperty(gt)) {
          mt = Z[gt];
          for (gt in mt)
            mt.hasOwnProperty(gt) && mt[gt]();
        }
      Z = null;
      var _t = lt(xt, ut, $t);
      return function(it) {
        return new N(i, function(at) {
          return function() {
            for (var Jt in _t)
              _t.hasOwnProperty(Jt) && _t[Jt]();
            return w;
          };
        });
      };
    }
    return Ht(), function(xt) {
      return new N(i, function($t) {
        return function() {
          return pt(xt, $t);
        };
      });
    };
  }
  function O(P, B, W) {
    return new N(i, function(K) {
      return function() {
        return S(P, B, W, K);
      };
    });
  }
  return N.EMPTY = t, N.Pure = T(n), N.Throw = T(e), N.Catch = T(r), N.Sync = T(o), N.Async = T(i), N.Bind = T(s), N.Bracket = T(u), N.Fork = T(c), N.Seq = T(a), N.ParMap = T(g), N.ParApply = T(_), N.ParAlt = T(d), N.Fiber = E, N.Supervisor = X, N.Scheduler = H, N.nonCanceler = w, N;
})();
let Ms = null;
function nN() {
  return Ms || (typeof document > "u" ? null : Ms = document.createElement("canvas").getContext("2d"));
}
const js = /* @__PURE__ */ new Map();
function hg(t, n, e, r, o, i) {
  const s = `${e} ${n}px ${t}`, u = s + "|" + r;
  if (js.has(u)) return js.get(u);
  const c = nN();
  if (!c) return i;
  c.font = s;
  const a = o(c.measureText(r)), g = typeof document < "u" ? document.fonts : null;
  if (!g || g.check(s)) js.set(u, a);
  else if (g && g.load)
    try {
      g.load(s);
    } catch {
    }
  return a;
}
const eN = (t, n, e, r) => hg(t, n, e, r, (o) => o.width, -1), rN = (t, n, e, r) => hg(
  t,
  n,
  e,
  r,
  (o) => ({ ascent: o.actualBoundingBoxAscent, descent: o.actualBoundingBoxDescent }),
  { ascent: -1, descent: -1 }
), pg = (t) => (n) => {
  const e = eN(t.family, t.size, t.weight, Mr(n));
  return e < 0 ? rt(ps(n).length) * t.size * 0.62 : e;
}, $g = (t) => (n) => {
  const e = rN(t.family, t.size, t.weight, Mr(n));
  return e.ascent < 0 ? { ascent: t.size * 0.72, descent: t.size * 0.2 } : e;
}, mg = (t) => t, yg = (t) => t, Js = (t) => t, Ng = (t) => t, oN = (t) => t, xg = (t) => t, Jg = (t) => t, iN = /* @__PURE__ */ Jg("BaselineTop"), cr = /* @__PURE__ */ Jg("BaselineMiddle"), wu = /* @__PURE__ */ xg("AlignLeft"), eo = /* @__PURE__ */ xg("AlignCenter"), vn = /* @__PURE__ */ oN("RoundJoin"), $e = /* @__PURE__ */ Ng("ButtCap"), Je = /* @__PURE__ */ Ng("RoundCap"), sN = /* @__PURE__ */ Js("LayerPolyOut"), uN = /* @__PURE__ */ Js("LayerPolyIn"), cN = /* @__PURE__ */ Js("LayerNodeMask"), aN = /* @__PURE__ */ Js("LayerOverlay"), zi = /* @__PURE__ */ yg("NonZero"), fN = /* @__PURE__ */ yg("EvenOdd"), Ra = /* @__PURE__ */ mg("Normal"), mi = /* @__PURE__ */ mg("Difference"), on = { r: 255, g: 255, b: 255, a: 255 }, Pe = { r: 26, g: 26, b: 26, a: 255 }, bu = (t) => (n) => Math.imul(t, n), ro = (t) => {
  const n = t + 1831565813 | 0, e = bu(n ^ n >>> 15)(n | 1), r = e ^ (e + bu(e ^ e >>> 7)(e | 61) | 0), o = r ^ r >>> 14;
  return { prng: o, value: o < 0 ? (rt(o) + 4294967296) / 4294967296 : rt(o) / 4294967296 };
}, pn = (t) => (n) => (e) => {
  const r = ro(e);
  return { prng: r.prng, value: t + r.value * (n - t) };
}, ku = (t) => (n) => J((e) => (r) => bu(e ^ r)(-2048144789))(n)(q(nr)(kr(t))), gN = (t) => t, Tg = (t) => t, lN = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ce = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, vg = (t) => (n) => (e) => {
  const r = ot.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ot.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, Lu = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, _N = (t) => (n) => (e) => {
  const r = ct.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ct.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, dN = /* @__PURE__ */ Tg("FlatLevel"), hN = /* @__PURE__ */ Tg("NestedLevel"), wg = /* @__PURE__ */ gN("GenieSilhouette"), pN = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, yLift: 0 };
  const o = ro(t);
  return { prng: o.prng, yLift: o.value * e.yJitter * r };
}, $N = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, dx: 0 };
  const o = ro(t);
  return { prng: o.prng, dx: (o.value * 2 - 1) * e.xJitter * r };
}, Qa = (t) => (n) => {
  const e = n.cy - t.cy, r = n.cx - t.cx, o = Sn(r * r + e * e), i = (t.r * t.r - n.r * n.r + o * o) / (2 * o), s = Sn(lN(0)(t.r * t.r - i * i)), u = t.cx + i * r / o, c = t.cy + i * e / o, a = { x: u - s * e / o, y: c + s * r / o }, g = { x: u + s * e / o, y: c - s * r / o };
  return o === 0 || o > t.r + n.r ? { x: (t.cx + n.cx) / 2, y: t.cy } : a.y < g.y ? a : g;
}, mN = (t) => (n) => {
  const e = ce(n)(ce(t.w / 2)(t.h / 2));
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
}, yN = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n)
    return { prng: t, r: o };
  if (e)
    return { prng: t, r: o * (1 + i.rJitter) };
  if (r)
    return { prng: t, r: o * i.smallScale };
  const s = ro(t);
  return { prng: s.prng, r: o * (1 + s.value * i.rJitter) };
}, bg = (t) => {
  const n = ce(t.w)(t.h) / 2;
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
}, NN = (t) => (n) => (e) => {
  const r = ro(t), o = n.length;
  return o === 0 ? { prng: t, idx: -1 } : {
    prng: r.prng,
    idx: (() => {
      const i = vg(0)(o - 1 | 0)($n(Te(r.value * rt(e))));
      return i >= 0 && i < n.length ? n[i] : -1;
    })()
  };
}, xN = (t) => (n) => {
  const e = ro(t), r = n.length;
  return r === 0 ? { prng: t, idx: -1 } : {
    prng: e.prng,
    idx: (() => {
      const o = vg(0)(r - 1 | 0)($n(Te(e.value * rt(r))));
      return o >= 0 && o < n.length ? n[o] : -1;
    })()
  };
}, kg = (t) => {
  const n = ce(t.w * 0.18)(t.h * 0.6);
  return [1, t.x + n, t.y, 2, t.x + t.w, t.y, 2, t.x + t.w - n, t.y + t.h, 2, t.x, t.y + t.h, 5];
}, Lg = (t) => [
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
], Eg = { rBase: 1.2, stepRatio: 0.7, rJitter: 0.35, yJitter: 0.2, xJitter: 0.2, heroShift: 0.2, smallScale: 0.85, smallShift: 0.15, seed: 7, minN: 3 }, JN = (t) => {
  const n = ce(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.x + e;
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
}, Sg = (t) => {
  const n = ce(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + t.h + 5, o = t.y + n, i = r - n, s = t.x + e;
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
}, Cg = (t) => (n) => {
  const e = n.y + n.h, r = w1(t.rBase * n.h)(n.w / (2 * (1 + (rt(t.minN) - 1) * t.stepRatio))), o = n.w - 2 * r, i = 2 * r * t.stepRatio, s = Lu(t.minN)(o <= 0 || i <= 0 ? t.minN : $n(Me(o / i)) + 1 | 0), u = s >= 3 ? Ft(1, s - 2 | 0) : [], c = u.length, a = Fe(c + 1 | 0, 2), g = a < 1 ? [] : Lt(0, a, u), _ = xN(t.seed)((() => {
    const p = c - a | 0;
    return p < 1 ? u : Lt(p, u.length, u);
  })()), d = _.idx, l = NN(_.prng)(ft((p) => p !== d, g))(Lu(1)(g.length - (Yn(zr)(d)(g) ? 1 : 0) | 0)), h = l.idx, $ = s >= 2 ? o / (rt(s) - 1) : 0;
  return J((p) => (m) => {
    const y = m === h, N = m === d, T = m === 0 || m === (s - 1 | 0), w = yN(p.prng)(T)(N)(y)(r)(t), b = pN(w.prng)(T)(t)(n.h), L = $N(b.prng)(T)(t)($);
    return {
      prng: L.prng,
      circles: Qt(p.circles)({
        cx: n.x + _N(w.r)(n.w - w.r)((s >= 2 ? r + rt(m) / (rt(s) - 1) * o + L.dx : r + 0 * o + L.dx) + (N ? t.heroShift * $ : y ? -1 * t.smallShift * $ : 0)),
        cy: e - b.yLift,
        r: w.r
      })
    };
  })({ prng: l.prng, circles: [] })(Ft(0, s - 1 | 0)).circles;
}, Pg = (t) => (n) => {
  const e = t.length;
  return Bt((r) => (o) => ({
    c: o,
    p1: (() => {
      if (r === 0)
        return { x: o.cx - o.r, y: n };
      const i = r - 1 | 0;
      return i >= 0 && i < t.length ? Qa(t[i])(o) : { x: o.cx - o.r, y: n };
    })(),
    p2: (() => {
      if (r === (e - 1 | 0))
        return { x: o.cx + o.r, y: n };
      const i = r + 1 | 0;
      return i >= 0 && i < t.length ? Qa(o)(t[i]) : { x: o.cx + o.r, y: n };
    })()
  }))(t);
}, Ag = (t) => {
  const n = ce(t.h * 0.4)(t.w * 0.2);
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
}, TN = (t) => (n) => (e) => {
  const r = pr(n.y - t.cy)(n.x - t.cx), o = pr(e.y - t.cy)(e.x - t.cx), i = o > r ? o - r : o + 6.283185307179586 - r, s = Lu(1)($n(os(i / 1.5707963267948966))), u = i / rt(s), c = 1.3333333333333333 * b1(u / 4);
  return Tt(Ft(0, s - 1 | 0))((a) => {
    const g = r + rt(a + 1 | 0) * u, _ = t.cx + t.r * ue(g), d = t.cy + t.r * Zn(g), l = r + rt(a) * u;
    return [
      4,
      t.cx + t.r * ue(l) - c * t.r * Zn(l),
      t.cy + t.r * Zn(l) + c * t.r * ue(l),
      _ + c * t.r * Zn(g),
      d - c * t.r * ue(g),
      _,
      d
    ];
  });
}, Gg = (t) => (n) => {
  const e = t.h * 0.38, r = Pg(Cg(Eg)({ x: t.x, y: t.y - e, w: t.w, h: e }))(t.y), o = ce(n)(ce(t.w / 2)(t.h / 2));
  return 0 < r.length ? [
    1,
    r[0].p1.x,
    r[0].p1.y,
    ...Tt(r)((i) => TN(i.c)(i.p1)(i.p2)),
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
  ] : mN(t)(n);
}, $c = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n === "Rectangle")
    return t.drawRoundedRect(e)(r)(o)(i);
  if (n === "Cylinder") {
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
  if (n === "Parallelogram") {
    const s = kg(e);
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
    const s = Ag(e);
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
  if (n === "Document") {
    const s = Lg(e);
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
    const s = Gg(e)(r);
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
}, vN = (t) => () => t.clip("evenodd"), wN = (t) => (n) => () => {
  t.filter = `blur(${n}px)`;
}, bN = (t) => (n) => () => {
  const e = Math.max(8, Math.ceil(8 / Math.max(n.tile, 1e-3))), r = Math.max(2, Math.round(n.tile * e)), o = document.createElement("canvas");
  o.width = r, o.height = r;
  const i = o.getContext("2d");
  i.scale(e, e), i.fillStyle = n.bgCss, i.fillRect(0, 0, n.tile, n.tile), i.fillStyle = n.dotCss, i.beginPath(), i.arc(n.tile / 2, n.tile / 2, n.dotR, 0, 2 * Math.PI), i.fill();
  const s = t.createPattern(o, "repeat");
  s && typeof s.setTransform == "function" && s.setTransform(new DOMMatrix().translateSelf(n.ox, n.oy).scaleSelf(1 / e, 1 / e)), t.save(), t.fillStyle = s, t.fillRect(n.vx, n.vy, n.vw, n.vh), t.restore();
}, Eu = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, mc = (t) => (n) => (e) => {
  const r = n.stroke;
  return () => {
    const o = r.value, i = K1(t)(e);
    if (o !== e)
      return i(), n.stroke.value = e;
  };
}, kN = (t) => (n) => (e) => {
  const r = n.font;
  return () => {
    const o = r.value, i = i_(t)(e);
    if (o !== e)
      return i(), n.font.value = e;
  };
}, Uo = (t) => (n) => (e) => {
  const r = n.fill;
  return () => {
    const o = r.value, i = U1(t)(e);
    if (o !== e)
      return i(), n.fill.value = e;
  };
}, Ts = (t) => (n) => {
  const e = n.length, r = (i) => {
    if (i >= e)
      return () => {
      };
    const s = i >= 0 && i < n.length ? n[i] : 0;
    if (s === 1) {
      const u = Hf(t)((() => {
        const a = i + 1 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })())((() => {
        const a = i + 2 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 2) {
      const u = io(t)((() => {
        const a = i + 1 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })())((() => {
        const a = i + 2 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 3) {
      const u = so(t)({
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
      const u = u_(t)({
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
      const u = Df(t), c = r(i + 1 | 0);
      return () => (u(), c());
    }
    return () => {
    };
  }, o = Wf(t);
  return () => (o(), r(0)());
}, LN = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Eu(i)(Eu(r / 2)(o / 2)), u = Hf(t)(n + s)(e);
  return () => (u(), io(t)(n + r - s)(e)(), so(t)({ cpx: n + r, cpy: e, x: n + r, y: e + s })(), io(t)(n + r)(e + o - s)(), so(t)({ cpx: n + r, cpy: e + o, x: n + r - s, y: e + o })(), io(t)(n + s)(e + o)(), so(t)({ cpx: n, cpy: e + o, x: n, y: e + o - s })(), io(t)(n)(e + s)(), so(t)({ cpx: n, cpy: e, x: n + s, y: e })(), Df(t)());
}, EN = () => ({ font: { value: "" }, fill: { value: "" }, stroke: { value: "" } }), SN = (t) => (n) => {
  const e = n_(t)({ x: 0, y: 0, width: n.width, height: n.height });
  return () => {
    e();
    const r = EN();
    return { ctx: t, surface: n, styleCache: r, maskDepth: { value: 0 }, groupAlpha: { value: 1 }, alphaSaves: { value: [] } };
  };
}, CN = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, PN = (t) => sn(t.weight) + " " + mf(t.size) + "px " + t.family, be = (t) => {
  const n = mf(rt(t.a) / 255);
  return t.a >= 255 ? "rgb(" + sn(t.r) + "," + sn(t.g) + "," + sn(t.b) + ")" : "rgba(" + sn(t.r) + "," + sn(t.g) + "," + sn(t.b) + "," + n + ")";
}, AN = (t) => (n) => (e) => (r) => {
  const o = Uo(t)(e)(be(r));
  return () => (o(), t_(t)({ x: 0, y: 0, width: n.width, height: n.height })());
}, GN = (t) => (n) => (e) => {
  const r = n.font;
  return () => (r.value = "", n.fill.value = "", n.stroke.value = "", bN(t)({
    vx: e.viewport.vx,
    vy: e.viewport.vy,
    vw: e.viewport.vw,
    vh: e.viewport.vh,
    bgCss: be(e.bgColor),
    dotCss: be(e.dotColor),
    tile: e.tile,
    dotR: e.dotRadius,
    ox: e.origin.x,
    oy: e.origin.y
  })());
}, IN = (t) => (n) => (e) => (r) => {
  const o = Uo(t)(n)(be(r));
  return () => (o(), Ts(t)(e)(), Ou(t)());
}, FN = (t) => (n) => (e) => (r) => (o) => {
  const i = Uo(t)(n)(be(r));
  return () => (i(), mc(t)(n)(be(o.color))(), Hu(t)(o.width)(), cs(t)((() => {
    if (o.lineJoin === "RoundJoin")
      return us;
    if (o.lineJoin === "BevelJoin")
      return Xu;
    if (o.lineJoin === "MiterJoin")
      return Vu;
    f();
  })())(), ju(t)((() => {
    if (o.lineCap === "ButtCap")
      return Mu;
    if (o.lineCap === "RoundCap")
      return Uu;
    if (o.lineCap === "SquareCap")
      return Ku;
    f();
  })())(), Ts(t)(e)(), Ou(t)(), Du(t)());
}, BN = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Wf(t);
  return () => {
    if (s(), LN(t)(e.x)(e.y)(e.w)(e.h)(r)(), o.tag === "Just" ? (Uo(t)(n)(be(o._1.color))(), Ou(t)()) : o.tag === "Nothing" || f(), i.tag === "Just")
      return mc(t)(n)(be(i._1.color))(), Hu(t)(i._1.width)(), cs(t)((() => {
        if (i._1.lineJoin === "RoundJoin")
          return us;
        if (i._1.lineJoin === "BevelJoin")
          return Xu;
        if (i._1.lineJoin === "MiterJoin")
          return Vu;
        f();
      })())(), ju(t)((() => {
        if (i._1.lineCap === "ButtCap")
          return Mu;
        if (i._1.lineCap === "RoundCap")
          return Uu;
        if (i._1.lineCap === "SquareCap")
          return Ku;
        f();
      })())(), Du(t)();
    i.tag !== "Nothing" && f();
  };
}, RN = (t) => (n) => (e) => (r) => {
  const o = mc(t)(n)(be(r.color));
  return () => (o(), Hu(t)(r.width)(), cs(t)((() => {
    if (r.lineJoin === "RoundJoin")
      return us;
    if (r.lineJoin === "BevelJoin")
      return Xu;
    if (r.lineJoin === "MiterJoin")
      return Vu;
    f();
  })())(), ju(t)((() => {
    if (r.lineCap === "ButtCap")
      return Mu;
    if (r.lineCap === "RoundCap")
      return Uu;
    if (r.lineCap === "SquareCap")
      return Ku;
    f();
  })())(), Ts(t)(e)(), Du(t)());
}, Wa = (t) => (n) => (e) => {
  const r = Uo(t)(n)(be(e.color));
  return () => (r(), kN(t)(n)(PN(e.font))(), m_(t)((() => {
    if (e.align === "AlignLeft")
      return l_;
    if (e.align === "AlignCenter")
      return d_;
    if (e.align === "AlignRight")
      return __;
    f();
  })())(), $_(t)((() => {
    if (e.baseline === "BaselineTop")
      return c_;
    if (e.baseline === "BaselineMiddle")
      return a_;
    if (e.baseline === "BaselineAlphabetic")
      return f_;
    if (e.baseline === "BaselineBottom")
      return g_;
    f();
  })())(), s_(t)(e.content)(e.x)(e.y)());
}, Ig = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => CN
}, QN = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => Ig
}, WN = (t) => (n) => (e) => {
  const r = Eu(n.width / e.vw)(n.height / e.vh), o = su(t)({ translateX: (n.width - e.vw * r) / 2 - e.vx * r, translateY: (n.height - e.vh * r) / 2 - e.vy * r });
  return () => (o(), xi(t)({ scaleX: r, scaleY: r })(), cs(t)(us)());
}, HN = { pure: (t) => (n) => () => t, Apply0: () => Ig }, DN = { Applicative0: () => HN, Bind1: () => QN }, Fg = {
  fillPath: (t) => (n) => (e) => {
    const r = IN(e.ctx)(e.styleCache)(t)(n.color), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = RN(e.ctx)(e.styleCache)(t)(n), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = FN(r.ctx)(r.styleCache)(t)(n.color)(e), i = r.maskDepth;
    return () => {
      if (i.value === 0)
        return o();
    };
  },
  drawRoundedRect: (t) => (n) => (e) => (r) => (o) => {
    const i = BN(o.ctx)(o.styleCache)(t)(n)(e)(r), s = o.maskDepth;
    return () => {
      if (s.value === 0)
        return i();
    };
  },
  drawText: (t) => (n) => {
    const e = Wa(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  drawTextAffine: (t) => (n) => (e) => {
    const r = Ue(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", e_(e.ctx)(t)(), Wa(e.ctx)(e.styleCache)(n)(), Ke(e.ctx)(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "";
    };
  },
  pushTransform: (t) => (n) => {
    const e = Ue(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", su(n.ctx)({ translateX: t.tx, translateY: t.ty })(), xi(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popTransform: (t) => {
    const n = Ke(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBakedTransform: (t) => (n) => {
    const e = Ue(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", su(n.ctx)({ translateX: t.tx, translateY: t.ty })(), xi(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popBakedTransform: (t) => {
    const n = Ke(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushClip: (t) => (n) => (e) => {
    const r = Ue(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0) {
        if (r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", Ts(e.ctx)(t)(), n === "NonZero")
          return Z1(e.ctx)();
        if (n === "EvenOdd")
          return vN(e.ctx)();
        f();
      }
    };
  },
  popClip: (t) => {
    const n = Ke(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBlend: (t) => (n) => {
    const e = Ue(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        if (e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", t === "Normal")
          return Qc(n.ctx)(h_)();
        if (t === "Difference")
          return Qc(n.ctx)(p_)();
        f();
      }
    };
  },
  popBlend: (t) => {
    const n = Ke(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushAlpha: (t) => (n) => {
    const e = Ue(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "";
        const i = n.groupAlpha.value, s = n.alphaSaves.value;
        n.alphaSaves.value = [...s, i];
        const u = i * t;
        return n.groupAlpha.value = u, j1(n.ctx)(u)();
      }
    };
  },
  popAlpha: (t) => {
    const n = Ke(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0) {
        n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
        const o = t.alphaSaves.value, i = xr(o);
        if (i.tag === "Just")
          return t.alphaSaves.value = i._1.init, t.groupAlpha.value = i._1.last;
        if (i.tag === "Nothing")
          return t.groupAlpha.value = 1;
        f();
      }
    };
  },
  pushBlur: (t) => (n) => {
    const e = Ue(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "";
        const i = wN(n.ctx)(t);
        if (t >= 0.01)
          return i();
      }
    };
  },
  popBlur: (t) => {
    const n = Ke(t.ctx), e = t.maskDepth;
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
    const e = WN(n.ctx)(n.surface)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  clearBackground: (t) => (n) => {
    const e = AN(n.ctx)(n.surface)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  backgroundDots: (t) => (n) => {
    const e = GN(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = pg(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = $g(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => wg,
  Monad0: () => DN
}, ON = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Zr = (t) => (n) => (e) => {
  const r = ON(0.05)(1 - t - n);
  return e < t ? 0 : e > 1 - n ? 1 : (e - t) / r;
}, Ha = (t) => {
  const n = ct.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = ct.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, vs = (t) => {
  if (t.tag === "Hidden")
    return { alpha: 0, scale: 0 };
  if (t.tag === "Visible")
    return { alpha: 1, scale: 1 };
  if (t.tag === "PloppingIn")
    return { alpha: t._1 > 0 ? 1 : 0, scale: To(8)(0.6)(Ha(t._1)) };
  if (t.tag === "PloppingOut")
    return { alpha: t._1 < 1 ? 1 : 0, scale: To(8)(0.6)(Ha(1 - t._1)) };
  f();
};
function qN(t, n) {
  const e = n.x - t.x, r = n.y - t.y;
  return Math.sqrt(e * e + r * r);
}
function zN(t) {
  const n = t.length, e = new Array(n);
  for (let r = 0; r < n; r++) {
    const o = t[r], i = t[(r + 1) % n];
    e[r] = { a: o, b: i, len: qN(o, i) };
  }
  return e;
}
function YN(t, n, e) {
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
function Da(t, n) {
  if (n.length === 0) return [];
  const e = zN(n);
  let r = 0;
  for (let i = 0; i < e.length; i++) r += e[i].len;
  const o = new Array(t);
  for (let i = 0; i < t; i++)
    o[i] = YN(e, n, i * r / t);
  return o;
}
function XN(t, n) {
  const e = n.length;
  if (e === 0) return n;
  const r = (t % e + e) % e | 0, o = new Array(e);
  for (let i = 0; i < e; i++) o[i] = n[(i + r) % e];
  return o;
}
function VN(t, n) {
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
  return XN(r, n);
}
const Oa = (t) => (n) => (e) => {
  const r = Da(t, n), o = Da(t, e), i = VN(r, o);
  return { from: r, to: i };
};
function qa(t) {
  const n = t.length;
  if (n === 0) return { x: 0, y: 0 };
  let e = 0, r = 0;
  for (let o = 0; o < n; o++)
    e += t[o].x, r += t[o].y;
  return { x: e / n, y: r / n };
}
function UN(t, n) {
  const e = n.x - t.x, r = n.y - t.y, o = Math.sqrt(e * e + r * r);
  return o <= 1e-4 ? { x: 1, y: 0 } : { x: e / o, y: r / o };
}
function KN(t, n) {
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
function MN(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
const za = (t) => (n) => (e) => (r) => {
  const o = n.length;
  if (o === 0) return [];
  const i = qa(n), s = qa(e), u = UN(i, s), c = new Array(o);
  let a = 1 / 0, g = -1 / 0;
  for (let l = 0; l < o; l++) {
    const h = n[l], $ = (h.x - i.x) * u.x + (h.y - i.y) * u.y;
    c[l] = $, $ < a && (a = $), $ > g && (g = $);
  }
  const _ = g - a;
  let d = new Array(o);
  for (let l = 0; l < o; l++) {
    const h = n[l], $ = e[l];
    if ($ === void 0) {
      d[l] = h;
      continue;
    }
    const p = _ <= 1e-4 ? 0 : r.maxDelay * (1 - (c[l] - a) / _), m = Math.max(1e-4, 1 - p), y = MN((t - p) / m), N = y * y * (3 - 2 * y);
    d[l] = {
      x: h.x + ($.x - h.x) * N,
      y: h.y + ($.y - h.y) * N
    };
  }
  for (let l = 0; l < r.smoothPasses; l++)
    d = KN(0.5, d);
  return d;
}, ke = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ya = /* @__PURE__ */ J(Vr)(0), Xa = (t) => (n) => (e) => {
  const r = ct.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ct.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, jN = /* @__PURE__ */ J((t) => (n) => t + n.len)(0), yc = (t) => {
  const n = Wt((e) => x, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Tt(Lt(1, t.length, t))((e) => [2, e.x, e.y]), 5];
  f();
}, ZN = (t) => (n) => {
  const e = ke(n)(ke(t.w / 2)(t.h / 2));
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
}, tx = (t) => {
  const n = Wt((e) => x, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Tt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, nx = (t) => {
  const n = { x: t.x, y: t.y, w: t.w, h: t.h };
  if (t.shape === "Cylinder")
    return Sg(n);
  if (t.shape === "Parallelogram")
    return kg(n);
  if (t.shape === "Diamond")
    return Ag(n);
  if (t.shape === "Ellipse")
    return bg(n);
  if (t.shape === "Document")
    return Lg(n);
  if (t.shape === "Cloud")
    return Gg(n)(7);
  if (t.shape === "Rectangle")
    return ZN(n)(7);
  f();
}, mn = (t) => (n) => (e) => q((r) => {
  const o = rt(r) / rt(e);
  return { x: t.x + (n.x - t.x) * o, y: t.y + (n.y - t.y) * o };
})(Ft(0, e - 1 | 0)), ex = (t) => {
  const n = ce(t.w * 0.18)(t.h * 0.6);
  return [
    ...mn({ x: t.x + n, y: t.y })({ x: t.x + t.w, y: t.y })(16),
    ...mn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w - n, y: t.y + t.h })(16),
    ...mn({ x: t.x + t.w - n, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(16),
    ...mn({ x: t.x, y: t.y + t.h })({ x: t.x + n, y: t.y })(16)
  ];
}, to = (t) => (n) => {
  const e = ke(t)(ke(n.w / 2)(n.h / 2));
  return { ...n, x: n.x + e, y: n.y + e, w: n.w - 2 * e, h: n.h - 2 * e };
}, Su = (t) => (n) => {
  const e = n.y - t.y, r = n.x - t.x;
  return Sn(r * r + e * e);
}, rx = (t) => bn((n) => (e) => ({ a: n, b: e, len: Su(n)(e) }), t, Lt(1, t.length, t)), ox = (t) => (n) => {
  const e = n.length - 1 | 0, r = e >= 0 && e < n.length ? v("Just", n[e]) : x, o = (() => {
    if (r.tag === "Just")
      return [r._1];
    if (r.tag === "Nothing")
      return [];
    f();
  })(), i = 0 < n.length ? v("Just", n[0]) : x, s = (() => {
    if (i.tag === "Just")
      return i._1;
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    f();
  })(), u = n.length;
  return u < 3 ? n : [
    s,
    ...Tt(Ft(1, u - 2 | 0))((c) => {
      const a = c + 1 | 0, g = a >= 0 && a < n.length ? v("Just", n[a]) : x, _ = c >= 0 && c < n.length ? v("Just", n[c]) : x, d = c - 1 | 0, l = d >= 0 && d < n.length ? v("Just", n[d]) : x;
      if (l.tag === "Just" && _.tag === "Just" && g.tag === "Just") {
        const h = _._1, $ = Su(h)(g._1), p = Su(l._1)(h), m = ke(t)($ / 2), y = ke(t)(p / 2), N = $ > 0 ? m / $ : 0, T = h.x + (g._1.x - h.x) * N, w = h.y + (g._1.y - h.y) * N, b = p > 0 ? y / p : 0, L = h.x + (l._1.x - h.x) * b, C = h.y + (l._1.y - h.y) * b;
        return q((H) => {
          const X = rt(H) / rt(10), Y = 1 - X;
          return { x: Y * Y * L + 2 * Y * X * h.x + X * X * T, y: Y * Y * C + 2 * Y * X * h.y + X * X * w };
        })(Ft(0, 10));
      }
      return [];
    }),
    ...o
  ];
}, ix = (t) => (n) => (e) => (r) => (o) => q((i) => {
  const s = rt(i) / rt(o), u = 1 - s, c = s * s * s, a = 3 * u * s * s, g = 3 * u * u * s, _ = u * u * u;
  return { x: _ * t.x + g * n.x + a * e.x + c * r.x, y: _ * t.y + g * n.y + a * e.y + c * r.y };
})(Ft(0, o - 1 | 0)), sx = (t) => [
  ...mn({ x: t.x, y: t.y })({ x: t.x + t.w, y: t.y })(12),
  ...mn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h * 0.85 })(12),
  ...ix({ x: t.x + t.w, y: t.y + t.h * 0.85 })({ x: t.x + t.w * 0.66, y: t.y + t.h * 1.05 })({ x: t.x + t.w * 0.34, y: t.y + t.h * 0.65 })({
    x: t.x,
    y: t.y + t.h * 0.85
  })(32),
  ...mn({ x: t.x, y: t.y + t.h * 0.85 })({ x: t.x, y: t.y })(12)
], Va = (t) => (n) => q((e) => {
  const r = 6.283185307179586 * rt(e) / rt(64);
  return { x: t.x + n * ue(r), y: t.y + n * Zn(r) };
})(Ft(0, 63)), ws = (t) => (n) => {
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
}, ux = (t) => {
  const n = t.y + t.h / 2, e = ce(t.h * 0.4)(t.w * 0.2);
  return [
    ...mn({ x: t.x + e, y: t.y })({ x: t.x + t.w - e, y: t.y })(10),
    ...mn({ x: t.x + t.w - e, y: t.y })({ x: t.x + t.w, y: n })(8),
    ...mn({ x: t.x + t.w, y: n })({ x: t.x + t.w - e, y: t.y + t.h })(8),
    ...mn({ x: t.x + t.w - e, y: t.y + t.h })({ x: t.x + e, y: t.y + t.h })(10),
    ...mn({ x: t.x + e, y: t.y + t.h })({ x: t.x, y: n })(8),
    ...mn({ x: t.x, y: n })({ x: t.x + e, y: t.y })(8)
  ];
}, Bg = (t) => {
  const n = t.length;
  return n === 0 ? { x: 0, y: 0 } : { x: Ya(q((e) => e.x)(t)) / rt(n), y: Ya(q((e) => e.y)(t)) / rt(n) };
}, li = (t) => (n) => (e) => (r) => (o) => q((i) => {
  const s = e + (r - e) * (rt(i) / rt(o));
  return { x: t.x + n * ue(s), y: t.y + n * Zn(s) };
})(Ft(0, o - 1 | 0)), Ua = (t) => (n) => {
  const e = ke(t)(ke(n.w / 2)(n.h / 2));
  return [
    ...mn({ x: n.x + e, y: n.y })({ x: n.x + n.w - e, y: n.y })(6),
    ...li({ x: n.x + n.w - e, y: n.y + e })(e)(4.71238898038469)(6.283185307179586)(12),
    ...mn({ x: n.x + n.w, y: n.y + e })({ x: n.x + n.w, y: n.y + n.h - e })(6),
    ...li({ x: n.x + n.w - e, y: n.y + n.h - e })(e)(0)(1.5707963267948966)(12),
    ...mn({ x: n.x + n.w - e, y: n.y + n.h })({ x: n.x + e, y: n.y + n.h })(6),
    ...li({ x: n.x + e, y: n.y + n.h - e })(e)(1.5707963267948966)(3.141592653589793)(12),
    ...mn({ x: n.x, y: n.y + n.h - e })({ x: n.x, y: n.y + e })(6),
    ...li({ x: n.x + e, y: n.y + e })(e)(3.141592653589793)(4.71238898038469)(12)
  ];
}, Yi = (t) => (n) => (e) => (r) => (o) => (i) => q((s) => {
  const u = r + (o - r) * (rt(s) / rt(i));
  return { x: t.x + n * ue(u), y: t.y + e * Zn(u) };
})(Ft(0, i - 1 | 0)), cx = (t) => {
  const n = t.h * 0.38;
  return [
    ...Tt(Pg(Cg(Eg)({
      x: t.x,
      y: t.y - n,
      w: t.w,
      h: n
    }))(t.y))((e) => {
      const r = pr(e.p2.y - e.c.cy)(e.p2.x - e.c.cx), o = pr(e.p1.y - e.c.cy)(e.p1.x - e.c.cx);
      return Yi({ x: e.c.cx, y: e.c.cy })(e.c.r)(e.c.r)(o)(r > o ? r : r + 6.283185307179586)(16);
    }),
    ...mn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h })(8),
    ...mn({ x: t.x + t.w, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(12),
    ...mn({ x: t.x, y: t.y + t.h })({ x: t.x, y: t.y })(8)
  ];
}, ax = (t) => {
  const n = ke(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.y + t.h + 5 - n - 2, i = t.x + e;
  return [
    ...Yi({ x: i, y: r })(e)(n)(3.141592653589793)(6.283185307179586)(24),
    ...mn({ x: t.x + t.w, y: r })({ x: t.x + t.w, y: o })(12),
    ...Yi({ x: i, y: o })(e)(n)(0)(3.141592653589793)(24),
    ...mn({ x: t.x, y: o })({ x: t.x, y: r })(12)
  ];
}, vr = (t) => (n) => n.shape === "Cylinder" ? ax(n) : n.shape === "Parallelogram" ? ex(n) : n.shape === "Diamond" ? ux(n) : n.shape === "Ellipse" ? Ua(ce(n.w)(n.h) / 2)(n) : n.shape === "Document" ? sx(n) : n.shape === "Cloud" ? cx(n) : Ua(t)(n), fx = (t) => {
  const n = ke(t.h * 0.075)(t.w * 0.075), e = t.w / 2;
  return Yi({ x: t.x + e, y: t.y + n })(e)(n)(0)(3.141592653589793)(24);
}, gx = (t) => (n) => (e) => J((r) => (o) => {
  const i = r.pos + o.len, s = e < i ? (e - r.pos) / o.len : 1, u = { x: o.a.x + (o.b.x - o.a.x) * s, y: o.a.y + (o.b.y - o.a.y) * s }, c = n > r.pos ? (n - r.pos) / o.len : 0, a = { x: o.a.x + (o.b.x - o.a.x) * c, y: o.a.y + (o.b.y - o.a.y) * c }, g = r.points.length - 1 | 0, _ = g >= 0 && g < r.points.length ? (() => {
    const d = r.points[g].x - a.x;
    return (d < 0 ? -d < 1e-4 : d < 1e-4) && (() => {
      const l = r.points[g].y - a.y;
      return l < 0 ? -l < 1e-4 : l < 1e-4;
    })();
  })() ? Qt(r.points)(u) : [...r.points, a, u] : [a, u];
  return o.len <= 0 || i <= n || r.pos >= e ? { ...r, pos: i } : { pos: i, points: _ };
})({ pos: 0, points: [] })(t).points, lx = (t) => (n) => (e) => {
  const r = Wt((o) => x, (o) => (i) => v("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just") {
    const o = rx(t), i = jN(o), s = Xa(0)(i)(n * i), u = Xa(0)(i)(e * i);
    return u <= s ? [] : gx(o)(s)(u);
  }
  f();
}, _x = (t) => (n) => (e) => (r) => {
  const o = r.x - e.x, i = r.y - e.y, s = n.x - t.x, u = n.y - t.y, c = e.x - t.x, a = e.y - t.y, g = s * i - u * o, _ = (c * i - a * o) / g, d = (c * u - a * s) / g;
  return (g < 0 ? -g < 1e-9 : g < 1e-9) ? x : _ >= 0 && _ <= 1 && d >= 0 && d <= 1 ? v("Just", _) : x;
}, dx = (t) => (n) => (e) => {
  const r = Et((o) => (i) => ct.compare(o.t)(i.t))(yt((o) => {
    const i = _x(n)(e)(o._1)(o._2);
    return i.tag === "Just" ? v("Just", { t: i._1, p: { x: n.x + (e.x - n.x) * i._1, y: n.y + (e.y - n.y) * i._1 } }) : x;
  })(bn(qe, t, [...Lt(1, t.length, t), ...Lt(0, 1, t)])));
  return 0 < r.length ? v("Just", r[0].p) : x;
}, Ka = (t) => (n) => {
  const e = xr(n);
  if (e.tag === "Nothing")
    return n;
  if (e.tag === "Just") {
    const r = e._1.init.length - 1 | 0;
    if (r >= 0 && r < e._1.init.length) {
      const o = dx(t)(e._1.init[r])(e._1.last);
      if (o.tag === "Just")
        return Qt(e._1.init)(o._1);
      if (o.tag === "Nothing")
        return n;
      f();
    }
    return n;
  }
  f();
}, Nc = (t) => t, Ie = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, mr = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, hx = /* @__PURE__ */ xf(bf)(Ot), px = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, $x = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ma = /* @__PURE__ */ Nc("SegMove"), mx = /* @__PURE__ */ Nc("SegLine"), yx = /* @__PURE__ */ Nc("SegQuad"), ja = { offset: 0.4, passes: 1, rMax: 1.5 }, Rg = (t) => $n(Te(t.x * 7919 + t.y * 3001 + t.w * 113 + t.h * 17 + 1)) * -1640531535 | 0, Xi = (t) => (n) => (e) => () => {
  t.push(3), t.push(n.x), t.push(n.y), t.push(e.x), t.push(e.y);
}, bs = (t) => (n) => () => {
  t.push(1), t.push(n.x), t.push(n.y);
}, Qe = (t) => (n) => () => {
  t.push(2), t.push(n.x), t.push(n.y);
}, Ro = /* @__PURE__ */ (() => {
  const t = J((n) => (e) => ((n * 31 | 0) + $n(Te(e.x * 100)) | 0) + $n(Te(e.y * 100)) | 0)(1);
  return (n) => t(n) * -1640531535 | 0;
})(), Nx = (t) => {
  const n = [];
  let e = 0, r = { x: 0, y: 0 };
  for (; e < t.length; ) {
    const o = e, i = r, s = o >= 0 && o < t.length ? v("Just", t[o]) : x;
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
        n.push({ kind: Ma, m: i, c: i, p: u, len: 0 }), r = u, e = o + 3 | 0;
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
        n.push({ kind: mx, m: i, c: i, p: u, len: Sn(c * c + a * a) }), r = u, e = o + 3 | 0;
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
          kind: yx,
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
        n.push({ kind: Ma, m: i, c: i, p: i, len: 0 }), e = o + 1 | 0;
        continue;
      }
      e = t.length;
      continue;
    }
    f();
  }
  return n;
}, xx = (t) => (n) => {
  const e = n.length - 1 | 0, r = e < 1 ? [] : Lt(0, e, n), o = (() => {
    const s = r.length - 1 | 0;
    return s >= 0 && s < r.length ? v("Just", r[s]) : x;
  })(), i = n.length - 1 | 0;
  if (i >= 0 && i < n.length && o.tag === "Just") {
    const s = n[i].y - o._1.y, u = n[i].x - o._1.x, c = Sn(u * u + s * s);
    return c <= 1e-4 ? n : Qt((() => {
      const a = n.length - 1 | 0;
      return a < 1 ? [] : Lt(0, a, n);
    })())({ x: n[i].x + u / c * t, y: n[i].y + s / c * t });
  }
  return n;
}, Jx = (t) => (n) => (e) => wn(J((r) => (o) => {
  const i = pn(0)(t)(r.prng), s = pn(0)(6.283185307179586)(i.prng);
  return { prng: s.prng, out: [{ x: o.x + i.value * ue(s.value), y: o.y + i.value * Zn(s.value) }, ...r.out] };
})({ prng: n, out: [] })(e).out), Tx = (t) => (n) => (e) => {
  if (n.kind === "SegMove")
    return bs(t)(n.p);
  if (n.kind === "SegLine")
    return Qe(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  if (n.kind === "SegQuad")
    return Qe(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  f();
}, vx = (t) => (n) => {
  if (n.kind === "SegMove")
    return bs(t)(n.p);
  if (n.kind === "SegLine")
    return Qe(t)(n.p);
  if (n.kind === "SegQuad")
    return Xi(t)(n.c)(n.p);
  f();
}, Qg = (t) => (n) => {
  const e = Nx(n), r = J((u) => (c) => u + c.len)(0)(e) * Ie(0)(mr(1)(t)), o = [];
  let i = 0, s = 0;
  for (; s < e.length; ) {
    const u = s, c = i;
    if (u >= 0 && u < e.length) {
      if (c + e[u].len <= r) {
        const a = e[u];
        vx(o)(a)(), i = c + a.len, s = u + 1 | 0;
        continue;
      }
      if (c >= r) {
        s = e.length;
        continue;
      }
      Tx(o)(e[u])((r - c) / Ie(e[u].len)(1e-4))();
    }
    s = e.length;
  }
  return o;
}, Za = { offset: 1.5, passes: 2, rMax: 14, overshoot: 2.5 }, Wg = (t) => (n) => (e) => (r) => {
  const o = r.y - e.y, i = e.y - n.y, s = r.x - e.x, u = Sn(s * s + o * o), c = e.x - n.x, a = Sn(c * c + i * i), g = mr(t.rMax * (v1(a > 0 && u > 0 ? Ie(-1)(mr(1)((c * s + i * o) / (a * u))) : 1) / 3.141592653589793))(0.4 * mr(a)(u));
  return { inP: a > 0 ? { x: e.x - c / a * g, y: e.y - i / a * g } : e, curr: e, outP: u > 0 ? { x: e.x + s / u * g, y: e.y + o / u * g } : e };
}, Hg = (t) => (n) => {
  const e = n.length, r = [], o = 0 < n.length ? v("Just", n[0]) : x;
  if (o.tag === "Just" ? bs(r)(o._1)() : o.tag === "Nothing" || f(), e >= 3) {
    let s = 1;
    for (; s <= (e - 2 | 0); ) {
      const u = s, c = u + 1 | 0;
      if (c >= 0 && c < n.length) {
        if (u >= 0 && u < n.length) {
          const a = u - 1 | 0;
          if (a >= 0 && a < n.length) {
            const g = Wg(t)(n[a])(n[u])(n[c]);
            Qe(r)(g.inP)(), Xi(r)(g.curr)(g.outP)();
          }
        }
        s = u + 1 | 0;
        continue;
      }
      s = u + 1 | 0;
    }
  }
  const i = n.length - 1 | 0;
  return i >= 0 && i < n.length && e >= 2 && Qe(r)(n[i])(), r;
}, wx = (t) => (n) => (e) => (r) => (o) => {
  if (o.length < 4)
    return Hg(t)(o);
  const i = 0 < o.length ? v("Just", o[0]) : x, s = (() => {
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = o.length - 1 | 0, c = tr(tr(n)(u) + u | 0)(u), a = (l) => {
    const h = tr(l + u | 0)(u);
    return h >= 0 && h < o.length ? o[h] : s;
  }, g = q((l) => Wg(t)(a((c + l | 0) - 1 | 0))(a(c + l | 0))(a((c + l | 0) + 1 | 0)))(Ft(
    0,
    u - 1 | 0
  )), _ = [], d = 0 < g.length ? v("Just", g[0]) : x;
  if (d.tag === "Just")
    if (bs(_)(d._1.outP)(), hx((() => {
      const l = Wt((h) => x, (h) => ($) => v("Just", $), g);
      if (l.tag === "Nothing")
        return [];
      if (l.tag === "Just")
        return l._1;
      f();
    })())((l) => {
      const h = Qe(_)(l.inP);
      return () => (h(), Xi(_)(l.curr)(l.outP)());
    })(), e)
      Qe(_)(d._1.inP)(), Xi(_)(d._1.curr)(d._1.outP)(), _.push(5);
    else {
      const l = g.length - 1 | 0;
      l >= 0 && l < g.length ? Qe(_)((() => {
        const h = 1 - r;
        return { x: g[l].outP.x + (d._1.inP.x - g[l].outP.x) * h, y: g[l].outP.y + (d._1.inP.y - g[l].outP.y) * h };
      })())() : Qe(_)(d._1.inP)();
    }
  else d.tag === "Nothing" || f();
  return _;
}, Dr = (t) => (n) => (e) => (r) => {
  const o = px(1)(r.length - 1 | 0), i = pn(0)(rt(o))(ku("shape")(n)), s = $x(o - 1 | 0)($n(Te(i.value))), u = i.prng;
  return q((c) => {
    const a = pn(0)(1)(ku(sn(c))(u)), g = pn(-0.18)(0.3)(a.prng), _ = a.value < 0.7, d = pn(0.5)(0.85)(g.prng), l = Jx(t.offset)(d.prng)(r);
    return { path: e ? wx(t)(s)(_)(g.value)(l) : Hg(t)(l), alpha: d.value };
  })(Ft(0, t.passes - 1 | 0));
}, bx = (t) => (n) => (e) => Dr(t)(n)(!0)([
  { x: e.x, y: e.y },
  { x: e.x + e.w, y: e.y },
  { x: e.x + e.w, y: e.y + e.h },
  { x: e.x, y: e.y + e.h },
  { x: e.x, y: e.y }
]), kx = (t) => (n) => (e) => {
  const r = Ie(0)(mr(1)(e)), o = n.h / rt(4), i = Ie(6)(o * 1.4);
  return yt((s) => s)(q((s) => {
    if (r < Ie(0)(rt(s) / rt(4) - 0.05))
      return x;
    const u = ku(sn(s))(t), c = Ie(0)(rt(s) / rt(4) - 0.05), a = tr(s)(2) === 0, g = a ? n.x - 2 : n.x + n.w + 2, _ = a ? n.x + n.w + 2 : n.x - 2, d = n.y + (rt(s) + 0.5) * o;
    return v(
      "Just",
      {
        path: Qg(Ie(0)(mr(1)((r - c) / Ie(1e-4)(mr(1)(rt(s + 1 | 0) / rt(4) + 0.05) - c))))((() => {
          const l = { rMax: 2, offset: 0.6, passes: 1 }, h = wn(J((p) => (m) => {
            const y = pn(-o * 0.08)(o * 0.08)(p.prng);
            return { prng: y.prng, out: [{ x: g + (_ - g) * (rt(m) / rt(4)), y: d + y.value }, ...p.out] };
          })({ prng: u, out: [] })(Ft(0, 4)).out), $ = h.length < 2 ? [] : Dr(l)(u)(!1)(h);
          return 0 < $.length ? $[0].path : [];
        })()),
        width: i,
        alpha: 1
      }
    );
  })(Ft(0, 3)));
}, Zs = (t, n, e) => ({ tag: t, _1: n, _2: e }), Dg = (t) => t, tu = (t, n, e) => ({ tag: t, _1: n, _2: e }), Vi = (t) => (n) => (e) => {
  const r = ct.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ct.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, Og = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Qo = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, qg = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, an = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, In = /* @__PURE__ */ (() => {
  const t = oe.unfoldr(Se);
  return (n) => t(te("IterNode", n, Ee));
})(), Le = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Lx = Ot.foldMap(Q1), yi = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, zg = /* @__PURE__ */ en(A)(Ot), Ex = /* @__PURE__ */ Ff(A), Sx = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, xc = /* @__PURE__ */ Dg("LabelsShown"), Cx = /* @__PURE__ */ Dg("LabelsHidden"), Yg = (t) => {
  const n = t.Monad0().Bind1(), e = t.popTransform, r = t.popAlpha;
  return (o) => (i) => (s) => (u) => (c) => n.bind(t.pushAlpha(o.fadeAlpha))(() => n.bind(t.pushTransform({
    tx: i * (1 - o.popScale),
    ty: s * (1 - o.popScale),
    sx: o.popScale,
    sy: o.popScale
  }))(() => n.bind(t.pushTransform({ tx: 0, ty: u.y * (1 - o.flipY), sx: 1, sy: o.flipY }))(() => n.bind(c)(() => n.bind(e)(() => n.bind(e)(() => r))))));
}, ee = (t) => {
  const n = t.Apply0();
  return (e) => J((r) => (o) => n.apply(n.Functor0().map((i) => $f)(r))(e(o)))(t.pure());
}, Xg = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = Zr(o)(i)(r), a = 0 < t.length ? v("Just", t[0]) : x, g = (() => {
    if (a.tag === "Just")
      return a._1;
    if (a.tag === "Nothing")
      return u;
    f();
  })(), _ = t.length - 1 | 0, d = _ >= 0 && _ < t.length ? v("Just", t[_]) : x, l = (() => {
    if (d.tag === "Just")
      return d._1;
    if (d.tag === "Nothing")
      return s;
    f();
  })(), h = Oa(128)(vr(4)(to(2)(n)))(Va(g)(6)), $ = g.x - u.x, p = 2 * (() => {
    const R = g.y - u.y;
    return ($ < 0 ? -$ : $) + (R < 0 ? -R : R);
  })(), m = l.x - s.x, y = 2 * (() => {
    const R = l.y - s.y;
    return (m < 0 ? -m : m) + (R < 0 ? -R : R);
  })(), N = p + qo(t) + y, T = N <= 1e-4 ? 1 : 1 - y / N, w = N <= 1e-4 ? 0 : p / N, b = T - w, L = Oa(128)(Va(l)(6))(vr(4)(to(2)(e))), C = { maxDelay: 0.4, smoothPasses: 2 }, H = Tr(t)(Vi(0)(1)(b <= 1e-4 ? 0 : (c - w) / b)), X = (() => {
    if (H.tag === "Just")
      return H._1;
    if (H.tag === "Nothing")
      return g;
    f();
  })(), Y = (() => {
    if (T >= 1)
      return 0;
    const R = (c - T) / (1 - T), nt = R < 0 ? 0 : R > 1 ? 1 : R;
    return nt * nt * (3 - 2 * nt);
  })(), G = (() => {
    if (w <= 1e-4)
      return 1;
    const R = c / w, nt = R < 0 ? 0 : R > 1 ? 1 : R;
    return nt * nt * (3 - 2 * nt);
  })();
  return c < w ? tu("PolyShape", za(G)(h.from)(h.to)(C)) : c >= T ? tu("PolyShape", za(Y)(L.from)(L.to)(C)) : tu("CircleShape", X, 6);
}, Vg = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Xg(t)(n)(e)(r)(o)(i);
  if (s.tag === "PolyShape")
    return Bg(s._1);
  if (s.tag === "CircleShape")
    return s._1;
  f();
}, Px = (t) => (n) => {
  const e = t.y + t.h - 6, r = t.y + 6, o = t.x + 14, i = t.x + t.w - 14, s = J(Qo)(0)(q((u) => o - 10 < u.x + u.w + 12 && i + 10 > u.x - 12 && r - 10 < u.y + u.h + 12 && e + 10 > u.y - 12 ? Og((u.x + u.w + 12 - (o - 10)) / 0.7071067811865476)((e + 10 - (u.y - 12)) / 0.7071067811865476) : 0)(n));
  return { ...t, x: t.x + s * 0.7071067811865476, y: t.y - s * 0.7071067811865476 };
}, Ax = (t) => (n) => (e) => J((r) => (o) => {
  const i = qg(o)(n);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just") {
    const s = Px(i._1)(r.obstacles);
    return { acc: U(A)(o)(s)(r.acc), obstacles: Qt(r.obstacles)(s) };
  }
  f();
})({ acc: I, obstacles: e })(t).acc, Jc = /* @__PURE__ */ (() => {
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
        chipText: Pe,
        nodeFill: on,
        nodeStroke: Pe,
        text: Pe,
        edge: Pe,
        arrowFill: Pe,
        tokenOutsideFill: Pe,
        tokenOutsideStroke: on,
        tokenInside: on,
        tokenInsideStroke: on,
        tokenInsideBlend: mi,
        tokenInsideAlpha: 1,
        chipPillFill: Pe,
        chipPillText: on,
        chipHairline: { r: 26, g: 26, b: 26, a: 90 },
        trailDot: Pe,
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
        nodeFill: Pe,
        nodeStroke: n,
        text: n,
        edge: n,
        arrowFill: n,
        tokenOutsideFill: on,
        tokenOutsideStroke: on,
        tokenInside: on,
        tokenInsideStroke: on,
        tokenInsideBlend: mi,
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
        shadowDot: on,
        chip: on,
        chipShadow: { r: 0, g: 0, b: 0, a: 120 },
        chipText: o,
        nodeFill: o,
        nodeStroke: on,
        text: on,
        edge: on,
        arrowFill: on,
        tokenOutsideFill: on,
        tokenOutsideStroke: on,
        tokenInside: on,
        tokenInsideStroke: on,
        tokenInsideBlend: Ra,
        tokenInsideAlpha: 0.35,
        chipPillFill: on,
        chipPillText: o,
        chipHairline: { r: 255, g: 255, b: 255, a: 120 },
        trailDot: on,
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
        tokenInsideBlend: Ra,
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
        tokenOutsideStroke: on,
        tokenInside: on,
        tokenInsideStroke: on,
        tokenInsideBlend: mi,
        tokenInsideAlpha: 1,
        chipPillFill: s,
        chipPillText: on,
        chipHairline: { r: 60, g: 66, b: 78, a: 90 },
        trailDot: s,
        wobble: !1,
        fontFamily: "Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    f();
  };
})(), Cu = (t) => (n) => Tt(In(t.nodes))((e) => {
  const r = an(e._1)(n.nodes);
  return r.tag === "Just" && vs(r._1).alpha > 0 ? nx(e._2) : [];
}), Gx = (t) => (n) => (e) => [
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
  ...Cu(n)(e)
], Ix = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = wr.traverse(r);
  return (i) => (s) => {
    const u = kr(s), c = 0.32 * i.size;
    return o((a) => e.bind(a === 0 ? r.pure(0) : t.measureText(i)(xn(a)(s)))((g) => e.bind(t.measureText(i)(xn(a + 1 | 0)(s)))((_) => e.bind(t.measureInk(i)(a >= 0 && a < u.length ? as(u[a]) : " "))((d) => r.pure({ x: g, w: _ - g, up: d.ascent - c, down: d.descent + c })))))(Ft(
      0,
      u.length - 1 | 0
    ));
  };
}, Fx = (t) => (n) => {
  const e = (o) => (o.x - n.x) * (o.x - n.x) + (o.y - n.y) * (o.y - n.y), r = J((o) => (i) => e(i) < e(o) ? i : o)({ x: t.x, y: t.y })([{ x: t.x, y: t.y }, { x: t.x + t.w, y: t.y }, { x: t.x, y: t.y + t.h }, { x: t.x + t.w, y: t.y + t.h }]);
  return q((o) => {
    const i = rt(o) / 5;
    return { x: r.x + (n.x - r.x) * i, y: r.y + (n.y - r.y) * i };
  })([1, 2, 3, 4]);
}, Tc = (t) => {
  const n = _s(`
`)(t);
  return n.length === 0 ? [""] : n;
}, Bx = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = Zr(o)(i)(r), a = 0 < t.length ? v("Just", t[0]) : x, g = (() => {
    if (a.tag === "Just")
      return a._1;
    if (a.tag === "Nothing")
      return u;
    f();
  })(), _ = t.length - 1 | 0, d = _ >= 0 && _ < t.length ? v("Just", t[_]) : x, l = (() => {
    if (d.tag === "Just")
      return d._1;
    if (d.tag === "Nothing")
      return s;
    f();
  })(), h = g.x - u.x, $ = 2 * (() => {
    const C = g.y - u.y;
    return (h < 0 ? -h : h) + (C < 0 ? -C : C);
  })(), p = l.x - s.x, m = 2 * (() => {
    const C = l.y - s.y;
    return (p < 0 ? -p : p) + (C < 0 ? -C : C);
  })(), y = $ + qo(t) + m, N = y <= 1e-4 ? 1 : 1 - m / y, T = y <= 1e-4 ? 0 : $ / y, w = N - T, b = Tr(t)(Vi(0)(1)(w <= 1e-4 ? 0 : (c - T) / w)), L = (() => {
    if (b.tag === "Just")
      return b._1;
    if (b.tag === "Nothing")
      return g;
    f();
  })();
  return c < T ? Zs("InsideRect", to(2)(n)) : c >= N ? Zs("InsideRect", to(2)(e)) : Zs("InsideBall", L, 6);
}, Rx = { offset: 0.8, passes: 2, rMax: 5 }, Qx = (t) => {
  const n = t.Monad0().Applicative0(), e = ee(n);
  return (r) => (o) => (i) => (s) => {
    const u = { color: s, width: 1, lineJoin: vn, lineCap: $e }, c = { color: i, flat: !0 }, a = (g) => t.drawRoundedRect({ x: g.x, y: g.y, w: g.w, h: g.h })(4)(v("Just", c))(v("Just", u));
    return e((g) => {
      if (g._2.tag === "Travelling") {
        const _ = Le(g._2._1.edge)(r.edges), d = an(g._2._1.target)(r.nodes), l = an(g._2._1.source)(r.nodes);
        if (l.tag === "Just" && d.tag === "Just" && _.tag === "Just") {
          const h = Bx((() => {
            if (g._2._1.direction === "Forward")
              return _._1;
            if (g._2._1.direction === "Backward")
              return wn(_._1);
            f();
          })())(l._1)(d._1)(g._2._1.progress)(g._2._1.holdPre)(g._2._1.holdPost);
          if (h.tag === "InsideRect")
            return a(h._1);
          if (h.tag === "InsideBall")
            return t.fillStrokePath(ws(h._1)(h._2))(c)(u);
          f();
        }
        return n.pure();
      }
      if (g._2.tag === "Filling") {
        const _ = an(g._2._1.node)(r.nodes);
        if (_.tag === "Just")
          return a(to(2)(_._1));
        if (_.tag === "Nothing")
          return n.pure();
        f();
      }
      return n.pure();
    })(In(o.tokens));
  };
}, tf = (t) => (n) => (e) => (r) => t.strokePath((() => {
  const o = Wt(
    (i) => x,
    (i) => (s) => v("Just", { head: i, tail: s }),
    q((i) => i.pt)(m1(
      (i) => (s) => {
        const u = rt(s) / rt(72), c = pn(-0.18)(0.18)(i.prng), a = pn(-0.1)(0.1)(c.prng), g = pn(-0.07)(0.07)(a.prng), _ = e * (0.05 + 0.55 * u) * (1 + a.value), d = u * 28.274333882308138 + c.value;
        return { prng: g.prng, pt: { x: n.x + ue(d) * _ + g.value * e, y: n.y + Zn(d) * _ + g.value * e } };
      },
      { prng: 137, pt: { x: n.x, y: n.y } },
      Ft(0, 72)
    ))
  );
  if (o.tag === "Just")
    return [1, o._1.head.x, o._1.head.y, ...Lx((i) => [2, i.x, i.y])(o._1.tail)];
  if (o.tag === "Nothing")
    return [];
  f();
})())({ color: r, width: 5.5, lineJoin: vn, lineCap: Je }), Wx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = ee(n.Applicative0());
  return (i) => (s) => (u) => o((c) => e.bind(t.pushAlpha(c.alpha))(() => e.bind(t.strokePath(c.path)({
    color: i.nodeFill,
    width: c.width,
    lineJoin: vn,
    lineCap: Je
  }))(() => r)))(kx(Rg(s) + 7777 | 0)(s)(u));
}, Ug = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = n.Applicative0(), i = ee(o), s = t.popClip, u = ee(o), c = wr.traverse(o), a = Ix(t), g = Wx(t), _ = t.popTransform;
  return (d) => (l) => (h) => ($) => (p) => (m) => (y) => (N) => (T) => {
    const w = (S) => e.bind(t.pushAlpha(S.alpha))(() => e.bind(t.strokePath(S.path)({
      color: h.nodeStroke,
      width: 2,
      lineJoin: vn,
      lineCap: Je
    }))(() => r)), b = { family: h.fontFamily, size: h.wobble ? 15 : 11, weight: h.wobble ? 800 : 500 }, L = _s(`
`)(N.label === "" ? y : N.label), C = L.length === 0 ? [""] : L, H = b.size * 1.2, X = N.shape === "Cylinder" ? t.strokePath(JN({ x: N.x, y: N.y, w: N.w, h: N.h }))({
      color: h.nodeStroke,
      width: 1.25,
      lineJoin: vn,
      lineCap: $e
    }) : o.pure(), Y = (N.shape === "Cylinder" ? (N.y + (N.y + N.h + 5 - 2 * ce(N.h * 0.075)(N.w * 0.075))) / 2 : (N.y + N.y + N.h) / 2) - rt(C.length) * H / 2 + H / 2, G = T.tag === "PloppingOut" && h.wobble ? T._1 : -1, R = G >= 0, nt = vs(T), et = R ? { alpha: 1, scale: 1 } : nt, z = N.x + N.w / 2, Q = N.y + N.h / 2, E = e.bind(t.pushAlpha(et.alpha * $))(() => e.bind(t.pushTransform({
      tx: z * (1 - et.scale),
      ty: Q * (1 - et.scale),
      sx: et.scale,
      sy: et.scale
    }))(() => {
      const S = { x: N.x, y: N.y, w: N.w, h: N.h }, O = {
        color: h.nodeStroke,
        width: h.wobble ? 2 : 1.25 * l,
        lineJoin: vn,
        lineCap: h.wobble ? Je : $e
      };
      return e.bind((() => {
        if (h.wobble) {
          if (N.shape === "Rectangle")
            return i(w)(bx(Za)(Rg(S))(S));
          const P = vr(7)(N);
          return e.bind(i(w)((() => {
            const B = Ro(P);
            return P.length < 4 ? [] : Dr(ja)(B)(!0)(P);
          })()))(() => u((B) => i(w)((() => {
            const W = Ro(B);
            return B.length < 2 ? [] : Dr(ja)(W)(!1)(B);
          })()))(N.shape === "Cylinder" ? [fx(N)] : []));
        }
        return e.bind($c(t)(N.shape)(S)(7)(v("Just", { color: h.nodeFill, flat: !1 }))(v(
          "Just",
          O
        )))(() => X);
      })())(() => e.bind((() => {
        if (m.tag === "Just" && h.wobble && !R) {
          const P = m._1;
          return e.bind(c(a(b))(C))((B) => {
            const W = Et((it) => (at) => ct.compare(it.x)(at.x)), K = $n(Te(N.x * 7919 + N.y * 3001)) * -1640531535 | 0, V = pn(5)(7.5)(K), D = pn(0)(V.value)(V.prng), M = -(1 + 2 * pn(-1)(1)(D.prng).value * 3.141592653589793 / 180), Z = (it, at, Jt, Nt, bt) => W(yt((Dt) => Dt)([
              M * at + it >= Nt && M * at + it <= bt ? v("Just", { x: at, y: M * at + it }) : x,
              M * Jt + it >= Nt && M * Jt + it <= bt ? v("Just", { x: Jt, y: M * Jt + it }) : x,
              (() => {
                const Dt = (Nt - it) / M;
                return Dt >= at && Dt <= Jt ? v("Just", { x: Dt, y: Nt }) : x;
              })(),
              (() => {
                const Dt = (bt - it) / M;
                return Dt >= at && Dt <= Jt ? v("Just", { x: Dt, y: bt }) : x;
              })()
            ])), tt = V.value, j = tr(P.frameHash)(3), ut = j === 0 ? { r: 200, g: 35, b: 30, a: 220 } : j === 1 ? { r: 35, g: 150, b: 80, a: 220 } : { r: 30, g: 80, b: 200, a: 220 }, lt = N.x + N.w / 2, qt = Xn(Bt((it) => (at) => Bt((() => {
              const Jt = Y + rt(it) * H, Nt = lt - J((bt) => (Dt) => bt + Dt.w)(0)(at) / 2;
              return (bt) => (Dt) => {
                const fe = b.size * 0.1, qn = bt - 1 | 0, Bn = qn >= 0 && qn < at.length && bt > 0 ? (at[qn].x + at[qn].w + Dt.x) / 2 : Dt.x - fe;
                return {
                  x: Nt + Bn - 1,
                  y: Jt - Dt.up - 1,
                  w: Qo(0)((() => {
                    const Gt = bt + 1 | 0;
                    return Gt >= 0 && Gt < at.length && bt < (at.length - 1 | 0) ? (Dt.x + Dt.w + at[Gt].x) / 2 - Bn : Dt.x + Dt.w + fe - Bn;
                  })()) + 2,
                  h: Dt.up + Dt.down + 2
                };
              };
            })())(at))(B)), wt = N.y + 4, Ht = N.x + N.w - 4, pt = N.x + 4, xt = wt - M * pt + D.value, $t = N.y + N.h - 4, mt = Tt(Tt(Bt((it) => (at) => {
              const Jt = (at.from.x + at.to.x) / 2, Nt = (at.from.y + at.to.y) / 2, bt = pn(-1)(1)(K + (911 * (it + 1 | 0) | 0) | 0), Dt = pn(-3)(5)(bt.prng), fe = bt.value * 3.141592653589793 / 180, qn = ue(fe), Bn = Zn(fe), Gt = (Ct) => ({ x: Jt + (Ct.x - Jt) * qn - (Ct.y - Nt) * Bn, y: Nt + (Ct.x - Jt) * Bn + (Ct.y - Nt) * qn });
              return {
                from: (() => {
                  const Ct = Gt(at.from), ie = Ct.y - Nt, zn = Ct.x - Jt, Mn = Sn(zn * zn + ie * ie), Rn = Mn < 1e-4 ? 1 : (Mn + Dt.value) / Mn;
                  return { x: Jt + zn * Rn, y: Nt + ie * Rn };
                })(),
                to: (() => {
                  const Ct = Gt(at.to), ie = pn(-3)(5)(Dt.prng).value, zn = Ct.y - Nt, Mn = Ct.x - Jt, Rn = Sn(Mn * Mn + zn * zn), Ye = Rn < 1e-4 ? 1 : (Rn + ie) / Rn;
                  return { x: Jt + Mn * Ye, y: Nt + zn * Ye };
                })()
              };
            })(yt((it) => {
              const at = Z(xt + rt(it) * tt, pt, Ht, wt, $t);
              return at.length === 2 ? v("Just", { from: at[0], to: at[1] }) : x;
            })(Ft(0, yi(1)($n(Te(($t - M * Ht - xt) / tt)))))))((it) => ft(
              (at) => at.to.x - at.from.x > 1,
              J((at) => (Jt) => Tt(at)((Nt) => {
                const bt = Z(Nt.from.y - M * Nt.from.x, Jt.x, Jt.x + Jt.w, Jt.y, Jt.y + Jt.h);
                return bt.length === 2 ? bt[0].x > Nt.from.x + 1e-3 && bt[1].x < Nt.to.x - 1e-3 ? [{ from: Nt.from, to: bt[0] }, { from: bt[1], to: Nt.to }] : bt[0].x <= Nt.from.x + 1e-3 && bt[1].x < Nt.to.x - 1e-3 ? [{ from: bt[1], to: Nt.to }] : bt[0].x > Nt.from.x + 1e-3 && bt[1].x >= Nt.to.x - 1e-3 ? [{ from: Nt.from, to: bt[0] }] : [] : [Nt];
              }))([it])(qt)
            )))((it) => (() => {
              const at = it.to.x - it.from.x;
              return Sn(2) * (at >= 0 ? at : -at) <= 28;
            })() ? [it] : [
              { from: it.from, to: { x: it.from.x + (it.to.x - it.from.x) * 0.495, y: it.from.y + (it.to.y - it.from.y) * 0.495 } },
              { from: { x: it.from.x + (it.to.x - it.from.x) * 0.505, y: it.from.y + (it.to.y - it.from.y) * 0.505 }, to: it.to }
            ]), gt = mt.length, _t = (it) => Qo(0)(Og(1)(P.t * rt(gt) - rt(it)));
            return e.bind(t.pushClip(yc(vr(7)(N)))(zi))(() => e.bind(i((it) => {
              const at = it._1, Jt = pn(1.4)(1.9)(K + (1303 * (at + 1 | 0) | 0) | 0), Nt = pn(0.35)(0.8)(Jt.prng), bt = i((Dt) => e.bind(t.pushAlpha(Dt.alpha * Nt.value))(() => e.bind(t.strokePath(Qg(_t(at))(Dt.path))({
                color: ut,
                width: Jt.value,
                lineJoin: vn,
                lineCap: Je
              }))(() => r)))(Dr({ ...Za, rMax: 0, offset: 0.5 })(K + (53 * (at + 1 | 0) | 0) | 0)(!1)([it._2.from, it._2.to]));
              return _t(at) > 0 ? bt : o.pure();
            })(Bt(qe)(mt)))(() => s));
          });
        }
        return o.pure();
      })())(() => e.bind((() => {
        if (d === "LabelsShown") {
          const P = e.bind(t.pushAlpha(p))(() => e.bind(i((B) => t.drawText({
            x: N.x + N.w / 2,
            y: Y + rt(B._1) * H,
            content: B._2,
            font: b,
            color: h.text,
            align: eo,
            baseline: cr
          }))(Bt(qe)(C)))(() => r));
          return p > 0 ? P : o.pure();
        }
        if (d === "LabelsHidden")
          return o.pure();
        f();
      })())(() => e.bind((() => {
        const P = g(h)(S)(G);
        return R ? P : o.pure();
      })())(() => e.bind(_)(() => r)))));
    }));
    return et.alpha * $ > 0 ? E : o.pure();
  };
}, Kg = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = Ug(t), i = t.popAlpha, s = ee(e);
  return (u) => (c) => (a) => {
    const g = { ...u, nodeFill: u.text, text: u.nodeFill, nodeStroke: u.nodeFill };
    return s((_) => {
      const d = an(_._1)(a.nodes), l = an(_._1)(c.nodes), h = (() => {
        if (l.tag === "Just" && d.tag === "Just") {
          const $ = d._1, p = l._1;
          return r.bind(t.pushAlpha(_._2))(() => r.bind(o(xc)(1)(g)(1)(1)(x)(_._1)(p)($))(() => i));
        }
        return e.pure();
      })();
      return _._2 > 0 ? h : e.pure();
    })(In(a.nodeInvert));
  };
}, Hx = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = ee(e);
  return (i) => (s) => (u) => {
    const c = { family: i.fontFamily, size: 11, weight: 500 };
    return o((a) => {
      if (a._2 === "" || (() => {
        const d = Le(a._1)(u.edges);
        return d.tag === "Nothing" || !(d.tag === "Just" && d._1.tag === "Extended");
      })())
        return e.pure();
      const g = Le(a._1)(s.edges), _ = (() => {
        if (g.tag === "Just")
          return Tr(g._1)(0.5);
        if (g.tag === "Nothing")
          return x;
        f();
      })();
      if (_.tag === "Nothing")
        return e.pure();
      if (_.tag === "Just") {
        const d = _._1;
        return r.bind(t.measureText(c)(a._2))((l) => {
          const h = l + 12;
          return r.bind(t.drawRoundedRect({ x: d.x - h / 2, y: d.y - 8.5, w: h, h: 17 })(3)(v(
            "Just",
            { color: i.chipPillFill, flat: !0 }
          ))(x))(() => t.drawText({
            x: d.x,
            y: d.y,
            content: a._2,
            font: c,
            color: i.chipPillText,
            align: eo,
            baseline: cr
          }));
        });
      }
      f();
    })(In(s.edgeLabels));
  };
}, Dx = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = t.popAlpha;
  return (i) => (s) => (u) => (c) => (a) => (g) => (_) => (d) => (l) => {
    const h = (() => {
      if (l > 1e-4 && _ > 1 - l) {
        const p = (1 - _) / l;
        return p < 0 ? 0 : p > 1 ? 1 : p;
      }
      if (d > 1e-4 && _ < d) {
        const p = _ / d;
        return p < 0 ? 0 : p > 1 ? 1 : p;
      }
      return 1;
    })(), $ = Xg(c)(a)(g)(_)(d)(l);
    if ($.tag === "CircleShape")
      return i ? tf(t)($._1)($._2)({ r: 200, g: 35, b: 30, a: 220 }) : t.fillStrokePath(ws($._1)($._2))({ color: s, flat: !0 })({
        color: u,
        width: 1,
        lineJoin: vn,
        lineCap: $e
      });
    if ($.tag === "PolyShape" && i && $._1.length >= 3)
      return r.bind(t.pushAlpha(h))(() => r.bind(tf(t)(Bg($._1))(6)({
        r: 200,
        g: 35,
        b: 30,
        a: 220
      }))(() => o));
    if ($.tag === "PolyShape")
      return i ? e.pure() : $._1.length >= 3 ? t.fillStrokePath(yc($._1))({ color: s, flat: !0 })({
        color: u,
        width: 1,
        lineJoin: vn,
        lineCap: $e
      }) : e.pure();
    f();
  };
}, Ox = (t) => {
  const n = t.Monad0().Bind1(), e = t.popAlpha;
  return (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
    const g = Zr(c)(a)(u), _ = { x: i.x + i.w / 2, y: i.y + i.h / 2 }, d = { x: s.x + s.w / 2, y: s.y + s.h / 2 }, l = (h, $) => n.bind(t.pushAlpha($))(() => n.bind(t.fillStrokePath(ws(h)(6))({
      color: r,
      flat: !0
    })({ color: o, width: 1, lineJoin: vn, lineCap: $e }))(() => e));
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
}, Ui = (t) => {
  const n = Dx(t), e = Ox(t), r = t.Monad0().Applicative0(), o = ee(r);
  return (i) => (s) => (u) => (c) => (a) => o((g) => {
    if (g._2.tag === "Travelling") {
      const _ = an(g._2._1.target)(s.nodes), d = an(g._2._1.source)(s.nodes);
      if (d.tag === "Just" && _.tag === "Just") {
        const l = Le(g._2._1.edge)(s.edges);
        if (l.tag === "Just")
          return n(i)(c)(a)((() => {
            if (g._2._1.direction === "Forward")
              return l._1;
            if (g._2._1.direction === "Backward")
              return wn(l._1);
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
      const _ = an(g._2._1.node)(s.nodes);
      if (_.tag === "Just")
        return t.fillStrokePath(yc(vr(4)(to(2)(_._1))))({
          color: c,
          flat: !0
        })({ color: a, width: 1, lineJoin: vn, lineCap: $e });
      if (_.tag === "Nothing")
        return r.pure();
      f();
    }
    return r.pure();
  })(In(u.tokens));
}, Mg = (t) => {
  const n = Ui(t), e = t.Monad0(), r = e.Bind1(), o = Ui(t), i = Qx(t), s = t.popClip, u = t.popBlend, c = t.popLayer, a = e.Applicative0(), g = ee(a), _ = t.popAlpha;
  return (d) => (l) => (h) => ($) => {
    const p = l.wobble ? n(!0)(h)($)(l.tokenInside)(l.tokenInsideStroke) : r.bind(t.insideTokenStyle(d))((m) => {
      if (m === "GenieSilhouette")
        return o(!1)(h)($)(l.tokenInside)(l.tokenInsideStroke);
      if (m === "ConvexAbsorb")
        return i(h)($)(l.tokenInside)(l.tokenInsideStroke);
      f();
    });
    if (l.tokenInsideBlend === "Difference")
      return r.bind(t.pushLayer(uN))(() => r.bind(t.pushBlend(mi))(() => r.bind(t.pushClip(Cu(h)($))(zi))(() => r.bind(p)(() => r.bind(s)(() => r.bind(u)(() => r.bind(c)(() => r.bind(t.pushLayer(cN))(() => r.bind(g((m) => {
        const y = an(m._1)($.nodes);
        return y.tag === "Just" && vs(y._1).alpha > 0 ? $c(t)(m._2.shape)({ x: m._2.x, y: m._2.y, w: m._2.w, h: m._2.h })(7)(v(
          "Just",
          { color: on, flat: !1 }
        ))(x) : a.pure();
      })(In(h.nodes)))(() => c)))))))));
    if (l.tokenInsideBlend === "Normal")
      return r.bind(t.pushClip(Cu(h)($))(zi))(() => r.bind(t.pushAlpha(l.tokenInsideAlpha))(() => r.bind(p)(() => r.bind(_)(() => s))));
    f();
  };
}, jg = (t) => {
  const n = t.Monad0().Bind1(), e = Ui(t), r = Ui(t), o = t.popClip, i = t.popLayer;
  return (s) => (u) => (c) => (a) => n.bind(t.pushLayer(sN))(() => n.bind(t.pushClip(Gx(u)(c)(a))(fN))(() => n.bind(s.wobble ? e(!0)(c)(a)(s.tokenOutsideFill)(s.tokenOutsideStroke) : r(!1)(c)(a)(s.tokenOutsideFill)(s.tokenOutsideStroke))(() => n.bind(o)(() => i))));
}, qx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = ee(r);
  return (i) => (s) => (u) => (c) => (a) => (g) => {
    const _ = ps(g).length, d = rt(_ + 1 | 0), l = (m) => {
      const y = (u * d - rt(m)) / 1.5, N = y < 0 ? 0 : y > 1 ? 1 : y;
      return N * N * (3 - 2 * N);
    }, $ = ((m) => {
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
    })(0), p = $ >= _ ? [] : hr((m) => l(m) > 0)(Ft($, _ - 1 | 0)).init;
    return e.bind((() => {
      const m = t.drawText({
        x: c,
        y: a,
        content: xn($)(g),
        font: i,
        color: s,
        align: wu,
        baseline: cr
      });
      return $ > 0 ? m : r.pure();
    })())(() => o((m) => e.bind(t.measureText(i)(xn(m)(g)))((y) => {
      const N = l(m);
      return t.drawText({
        x: c + y,
        y: a - (1 - N) * 10,
        content: xn(1)(No(ur(xn(m)(g)))(g)),
        font: i,
        color: { ...s, a: $n(Te(N * rt(s.a))) },
        align: wu,
        baseline: cr
      });
    }))(p));
  };
}, ks = (t) => (n) => (e) => (r) => {
  const o = q((h) => rt(yi(1)(ps(h).length)))(r), i = Qo(1)(J(Vr)(0)(o)), s = Zr(n)(e)(t), u = s * i, c = yi(1)(r.length), g = ((h) => ($) => (p) => {
    let m = h, y = $, N = p, T = !0, w;
    for (; T; ) {
      const b = m, L = y, H = Wt((X) => x, (X) => (Y) => v("Just", { head: X, tail: Y }), N);
      if (H.tag === "Nothing") {
        T = !1, w = yi(0)(c - 1 | 0);
        continue;
      }
      if (H.tag === "Just") {
        if (L + H._1.head >= u) {
          T = !1, w = b;
          continue;
        }
        m = b + 1 | 0, y = L + H._1.head, N = H._1.tail;
        continue;
      }
      f();
    }
    return w;
  })(0)(0)(o), _ = J(Vr)(0)(g < 1 ? [] : Lt(0, g, o)), d = _ / i;
  if (g >= 0 && g < o.length) {
    const h = (_ + o[g]) / i;
    return {
      line: g >= 0 && g < r.length ? r[g] : "",
      phaseInLabel: (() => {
        if (h <= d)
          return 1;
        const $ = (s - d) / (h - d);
        return $ < 0 ? 0 : $ > 1 ? 1 : $;
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
}, zx = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(ks(r)(0)(0)(q(l1)(o)).line))((i) => {
    const s = i + 28;
    return n.Applicative0().pure({ x: e.x + e.w / 2 - s / 2, y: e.y - 25.2 - 14, w: s, h: 25.2 });
  });
}, Yx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = zx(t), o = n.Applicative0(), i = wr.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => zg(yt((a) => a)(c)))(i((c) => {
    if (c._2.tag === "Filling" && c._2._1.labels.length !== 0) {
      const a = an(c._2._1.node)(s.nodes);
      if (a.tag === "Just")
        return e.bind(r(a._1)(c._2._1.progress)(c._2._1.labels))((g) => o.pure(v("Just", k(c._1, g))));
      if (a.tag === "Nothing")
        return o.pure(x);
      f();
    }
    return o.pure(x);
  })(In(u.tokens)));
}, Xx = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => (i) => (s) => (u) => (c) => {
    const a = Vg(e)(r)(o)(i)(s)(u);
    return n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(ks(i)(s)(u)(Tt(c)(Tc)).line))((g) => n.Applicative0().pure({
      x: a.x + 14 + g / 2 - g / 2 - 14,
      y: a.y - 6 - 8 - 6.6 - 6,
      w: g + 28,
      h: 25.2
    }));
  };
}, Vx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Xx(t), o = n.Applicative0(), i = wr.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => zg(yt((a) => a)(c)))(i((c) => {
    if (c._2.tag === "Travelling" && c._2._1.labels.length !== 0) {
      const a = an(c._2._1.target)(s.nodes), g = an(c._2._1.source)(s.nodes), _ = Le(c._2._1.edge)(s.edges);
      if (_.tag === "Just" && g.tag === "Just" && a.tag === "Just")
        return e.bind(r((() => {
          if (c._2._1.direction === "Forward")
            return _._1;
          if (c._2._1.direction === "Backward")
            return wn(_._1);
          f();
        })())(g._1)(a._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost)(c._2._1.labels))((d) => o.pure(v(
          "Just",
          k(c._1, d)
        )));
    }
    return o.pure(x);
  })(In(u.tokens)));
}, vc = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Vx(t), o = Yx(t);
  return (i) => (s) => e.bind(r(i)(s))((u) => e.bind(o(i)(s))((c) => n.Applicative0().pure(Ax((() => {
    const a = (g) => {
      if (g.tag === "Leaf")
        return I;
      if (g.tag === "Node")
        return zt("Node", g._1, g._2, g._3, void 0, a(g._5), a(g._6));
      f();
    };
    return Et(A.compare)(St(On.foldr, a(u)));
  })())(u)([
    ...yt((a) => {
      const g = an(a._1)(s.nodes);
      return g.tag === "Just" && vs(g._1).alpha > 0 ? v("Just", { x: a._2.x, y: a._2.y, w: a._2.w, h: a._2.h }) : x;
    })(In(i.nodes)),
    ...(() => {
      const a = (g, _) => {
        if (g.tag === "Leaf")
          return _;
        if (g.tag === "Node")
          return a(g._5, Xt("Cons", g._4, a(g._6, _)));
        f();
      };
      return St(Ut.foldr, a(c, Vt));
    })()
  ]))));
}, Zg = (t) => (n) => (e) => {
  const r = To(6)(0.55)(Vi(0)(1)((1 - t) / 0.06)), o = t > 0.94, i = o && e > 1e-4, s = To(6)(0.55)(Vi(0)(1)(t / 0.06)), u = t < 0.06, c = u && n > 1e-4, a = o && e <= 1e-4;
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
}, Ux = (t) => {
  const n = t.Monad0().Bind1(), e = Yg(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const c = Zg(s)(0)(0), a = { family: r.fontFamily, size: 11, weight: 500 }, g = ks(s)(0)(0)(Tt(u)(Tc));
    return n.bind(t.measureText(a)(g.line))((_) => {
      const d = i.x + i.w / 2, l = _ + 28, h = i.y - 25.2 - 14, $ = d - l / 2, p = [1, d, h + 25.2, 2, d, i.y], m = { x: d, y: h + 12.6 };
      return e(c)(d - l / 2)(h + 25.2)(m)(n.bind(t.drawRoundedRect({ x: d - l / 2, y: h + 1.5, w: l, h: 25.2 })(6)(v(
        "Just",
        { color: r.chipShadow, flat: !0 }
      ))(x))(() => n.bind(t.drawRoundedRect({ x: $, y: h, w: l, h: 25.2 })(6)(v("Just", { color: r.chip, flat: !0 }))(v(
        "Just",
        { color: r.chipHairline, width: 1, lineJoin: vn, lineCap: $e }
      )))(() => n.bind(t.strokePath(p)({
        color: r.chipHairline,
        width: 1,
        lineJoin: vn,
        lineCap: $e
      }))(() => t.drawText({
        x: d,
        y: m.y,
        content: g.line,
        font: a,
        color: r.chipText,
        align: eo,
        baseline: cr
      })))));
    });
  };
}, Kx = (t) => {
  const n = Yg(t), e = t.Monad0(), r = e.Bind1(), o = ee(e.Applicative0()), i = qx(t);
  return (s) => (u) => (c) => (a) => (g) => (_) => (d) => (l) => (h) => {
    const $ = ks(g)(_)(d)(Tt(l)(Tc)), p = $.line, m = $.phaseInLabel / 0.45, y = m < 0 ? 0 : m > 1 ? 1 : m, N = h.w, T = h.y, w = h.x, b = w + 14, L = h.h, C = T + L / 2;
    return n(Zg(g)(_)(d))(w)(T + L)({ x: w + N / 2, y: C })(r.bind(o((H) => t.fillPath(ws(H)(1.5))({
      color: s.trailDot,
      flat: !0
    }))(Fx(h)(Vg(u)(c)(a)(g)(_)(d))))(() => r.bind(t.drawRoundedRect({ x: w, y: T, w: N, h: L })(3)(v(
      "Just",
      { color: s.chipPillFill, flat: !0 }
    ))(x))(() => i({ family: s.fontFamily, size: 11, weight: 500 })(s.chipPillText)(y)(b)(C)(p))));
  };
}, wc = (t) => {
  const n = Kx(t), e = t.Monad0(), r = e.Applicative0(), o = Ux(t), i = e.Bind1(), s = ee(r), u = t.popLayer;
  return (c) => (a) => (g) => (_) => i.bind(t.pushLayer(aN))(() => i.bind(s((d) => {
    if (d._2.tag === "Travelling") {
      if (d._2._1.labels.length !== 0) {
        const l = an(d._2._1.target)(a.nodes), h = an(d._2._1.source)(a.nodes), $ = Le(d._2._1.edge)(a.edges), p = qg(d._1)(_);
        if (p.tag === "Just" && $.tag === "Just" && h.tag === "Just" && l.tag === "Just")
          return n(c)((() => {
            if (d._2._1.direction === "Forward")
              return $._1;
            if (d._2._1.direction === "Backward")
              return wn($._1);
            f();
          })())(h._1)(l._1)(d._2._1.progress)(d._2._1.holdPre)(d._2._1.holdPost)(d._2._1.labels)(p._1);
      }
      return r.pure();
    }
    if (d._2.tag === "Filling" && d._2._1.labels.length !== 0) {
      const l = an(d._2._1.node)(a.nodes);
      if (l.tag === "Just")
        return o(c)(a)(l._1)(d._2._1.progress)(d._2._1.labels);
      if (l.tag === "Nothing")
        return r.pure();
      f();
    }
    return r.pure();
  })(In(g.tokens)))(() => u));
}, tl = (t) => {
  const n = vc(t), e = wc(t);
  return (r) => (o) => (i) => t.Monad0().Bind1().bind(n(o)(i))((s) => e(r)(o)(i)(s));
}, Mx = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => {
    const i = o.length - 1 | 0, s = i < 1 ? [] : Lt(0, i, o), u = s.length - 1 | 0, c = u >= 0 && u < s.length ? v("Just", s[u]) : x, a = o.length - 1 | 0, g = a >= 0 && a < o.length ? v("Just", o[a]) : x;
    if (g.tag === "Just" && c.tag === "Just") {
      const _ = pn(0.78)(1.18)(Ro(o) + 19 | 0), d = pn(0.4)(0.62)(_.prng), l = r.wobble ? 8.75 * d.value : 4.375, h = pn(0.4)(0.62)(d.prng), $ = r.wobble ? 8.75 * h.value : 4.375, p = g._1.y - c._1.y, m = g._1.x - c._1.x, y = Sn(m * m + p * p), N = p / y, T = -N, w = m / y, b = g._1.x + w * 0.875, L = g._1.y + N * 0.875, C = r.wobble ? 8.75 * _.value : 8.75, H = b - w * C, X = L - N * C, Y = H + T * l, G = X + w * l, R = [1, b, L, 2, H + T * 4.375, X + w * 4.375, 2, H - T * 4.375, X - w * 4.375, 5], nt = H - T * $, et = X - w * $, z = { color: r.arrowFill, width: 2, lineJoin: vn, lineCap: Je };
      return y <= 1e-4 ? e.pure() : r.wobble ? n.Bind1().bind(t.strokePath([1, Y, G, 2, b, L])(z))(() => t.strokePath([1, nt, et, 2, b, L])(z)) : t.fillPath(R)({ color: r.arrowFill, flat: !0 });
    }
    return e.pure();
  };
}, jx = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = ee(e), i = t.popAlpha, s = Mx(t);
  return (u) => (c) => (a) => (g) => {
    const _ = ox(8)(a);
    if (g.hi <= g.lo)
      return e.pure();
    const d = lx(_)(g.lo)(g.hi);
    if (d.length === 0)
      return e.pure();
    const l = { color: u.edge, width: u.wobble ? 2 : 0.9375, lineJoin: vn, lineCap: Je }, h = u.wobble ? pn(-10)(4)(Ro(d)).value : 0, $ = u.wobble ? xx(h)(d) : d;
    return r.bind(u.wobble ? o((p) => r.bind(t.pushAlpha(p.alpha))(() => r.bind(t.strokePath(p.path)(l))(() => i)))((() => {
      const p = Ro(d);
      return $.length < 2 ? [] : Dr(Rx)(p)(!1)($);
    })()) : t.strokePath(tx(d))(l))(() => {
      const p = s(u)($);
      return g.hi >= 0.999 ? p : e.pure();
    });
  };
}, nl = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = jx(t), i = t.popAlpha, s = ee(e);
  return (u) => (c) => (a) => {
    const g = (_) => {
      const d = Mt((l) => _.x >= l._2.x - 1 && _.x <= l._2.x + l._2.w + 1 && _.y >= l._2.y - 1 && _.y <= l._2.y + l._2.h + 1)(In(c.nodes));
      return d.tag === "Just" ? v("Just", d._1._2) : x;
    };
    return s((_) => {
      const d = Le(_._1)(a.edges);
      if (d.tag === "Just") {
        const l = d._1, h = Le(_._1)(a.edgeFadeAlpha), $ = (() => {
          if (h.tag === "Nothing")
            return 1;
          if (h.tag === "Just")
            return h._1;
          f();
        })(), p = r.bind(t.pushAlpha($))(() => r.bind(o(u)(_._1)((() => {
          const m = (() => {
            if (0 < _._2.length) {
              const N = g(_._2[0]);
              if (N.tag === "Just")
                return wn(Ka(vr(7)(N._1))(wn(_._2)));
            }
            return _._2;
          })(), y = m.length - 1 | 0;
          if (y >= 0 && y < m.length) {
            const N = g(m[y]);
            if (N.tag === "Just")
              return Ka(vr(7)(N._1))(m);
          }
          return m;
        })())((() => {
          if (l.tag === "Retracted")
            return { lo: 0, hi: 0 };
          if (l.tag === "Extended")
            return { lo: 0, hi: 1 };
          if (l.tag === "Extending")
            return { lo: 0, hi: l._2 };
          if (l.tag === "Retracting") {
            if (l._1 === "FromSource")
              return { lo: l._2, hi: 1 };
            if (l._1 === "FromTarget")
              return { lo: 0, hi: 1 - l._2 };
            if (l._1 === "FromBoth")
              return { lo: l._2 / 2, hi: 1 - l._2 / 2 };
          }
          f();
        })()))(() => i));
        return $ > 0 ? p : e.pure();
      }
      if (d.tag === "Nothing")
        return e.pure();
      f();
    })(In(c.edges));
  };
}, Zx = (t) => (n) => {
  const e = (i) => {
    const s = an(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !Vn(
        (c) => 0 < c._2.length && c._2[0].x >= u.x && c._2[0].x <= u.x + u.w && c._2[0].y >= u.y && c._2[0].y <= u.y + u.h,
        In(t.edges)
      );
    }
    f();
  }, r = J((i) => (s) => (i * 31 | 0) + nr(s) | 0)(5381)(kr(n.frameTitle)), o = (i) => {
    const s = an(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !Vn(
        (c) => {
          const a = c._2.length - 1 | 0;
          return a >= 0 && a < c._2.length && c._2[a].x >= u.x && c._2[a].x <= u.x + u.w && c._2[a].y >= u.y && c._2[a].y <= u.y + u.h;
        },
        In(t.edges)
      );
    }
    f();
  };
  return J((i) => (s) => {
    const u = s._2;
    return Ex((c) => {
      if (c.tag === "Nothing")
        return v("Just", u);
      if (c.tag === "Just")
        return v(
          "Just",
          { t: Qo(c._1.t)(u.t), angle: u.t >= c._1.t ? u.angle : c._1.angle, bigCircle: c._1.bigCircle || u.bigCircle, frameHash: c._1.frameHash }
        );
      f();
    })(s._1)(i);
  })(I)(Tt(In(n.tokens))((i) => {
    if (i._2.tag === "Filling") {
      const s = i._2._1.node;
      return [
        k(
          s,
          {
            t: 1,
            angle: (() => {
              const u = yt((c) => (() => {
                const a = an(s)(t.nodes), g = c._2.length - 1 | 0;
                return g >= 0 && g < c._2.length && a.tag === "Just" && c._2[g].x >= a._1.x && c._2[g].x <= a._1.x + a._1.w && c._2[g].y >= a._1.y && c._2[g].y <= a._1.y + a._1.h;
              })() ? v("Just", c._2) : x)(In(t.edges));
              if (0 < u.length) {
                const c = u[0].length - 1 | 0, a = c < 1 ? [] : Lt(0, c, u[0]), g = a.length - 1 | 0;
                if (g >= 0 && g < a.length) {
                  const _ = u[0].length - 1 | 0;
                  return _ >= 0 && _ < u[0].length ? pr(u[0][_].y - a[g].y)(u[0][_].x - a[g].x) : 0;
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
          k(
            i._2._1.target,
            {
              t: (i._2._1.progress - 0.75) / 0.25,
              angle: (() => {
                const s = Le(i._2._1.edge)(t.edges);
                if (s.tag === "Just") {
                  const u = s._1.length - 1 | 0, c = u < 1 ? [] : Lt(0, u, s._1), a = c.length - 1 | 0;
                  if (a >= 0 && a < c.length) {
                    const g = s._1.length - 1 | 0;
                    return g >= 0 && g < s._1.length ? pr(s._1[g].y - c[a].y)(s._1[g].x - c[a].x) : 0;
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
          k(
            i._2._1.source,
            {
              t: i._2._1.progress / 0.25,
              angle: (() => {
                const s = Le(i._2._1.edge)(t.edges);
                if (s.tag === "Just")
                  return 1 < s._1.length && 0 < s._1.length ? pr(s._1[1].y - s._1[0].y)(s._1[1].x - s._1[0].x) : 0;
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
}, tJ = (t) => J((n) => (e) => (n * 31 | 0) + nr(e) | 0)(5381)(kr(t.frameTitle)), el = (t) => {
  const n = Ug(t), e = t.Monad0().Applicative0(), r = ee(e);
  return (o) => (i) => (s) => (u) => (c) => {
    const a = tJ(c), g = Zx(u)(c);
    return r((_) => {
      const d = an(_._1)(c.nodes);
      if (d.tag === "Just")
        return n(o)(i)(s)((() => {
          const l = an(_._1)(c.nodeFadeAlpha);
          if (l.tag === "Nothing")
            return 1;
          if (l.tag === "Just")
            return l._1;
          f();
        })())((() => {
          const l = an(_._1)(c.nodeLabelFadeAlpha);
          if (l.tag === "Nothing")
            return 1;
          if (l.tag === "Just")
            return l._1;
          f();
        })())((() => {
          const l = an(_._1)(g);
          return l.tag === "Just" ? v("Just", l._1) : l.tag === "Nothing" && Sx(_._1)(c.visited) ? v("Just", { t: 1, angle: 0, bigCircle: !1, frameHash: a }) : x;
        })())(_._1)(_._2)(d._1);
      if (d.tag === "Nothing")
        return e.pure();
      f();
    })(In(u.nodes));
  };
}, nJ = (t) => t, eJ = (t) => (n) => {
  const e = n.vw / n.vh, r = n.vh * t, o = { ...n, vx: n.vx - (r - n.vw) / 2, vw: r }, i = n.vw / t, s = { ...n, vy: n.vy - (i - n.vh) / 2, vh: i };
  return t <= 0 || n.vw <= 0 || n.vh <= 0 ? n : t > e ? o : t < e ? s : n;
}, rJ = (t) => (n) => (e) => {
  const r = ot.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ot.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, nf = (t) => (n) => (e) => {
  const r = ct.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ct.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, ef = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Pu = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, oJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, iJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, sJ = (t) => (n) => {
  const e = Zn(t.angle), r = ue(t.angle);
  return { a: r, b: e, c: 0, d: 1, e: -n * r, f: n * e - t.boxHeight / 2 };
}, uJ = (t) => [t.box.ground.a, t.box.ground.b, t.box.ground.c, t.box.ground.d, t.box.top.a, t.box.top.b, t.box.top.c, t.box.top.d], Or = (t) => (n) => {
  const e = (r) => rJ(0)(255)($n(Me(rt(r) * t)));
  return { r: e(n.r), g: e(n.g), b: e(n.b), a: n.a };
}, En = (t) => (n) => (e) => (r) => ({ x: (n - e) * ue(t.angle), y: (n + e) * Zn(t.angle) - r }), yr = (t) => {
  const n = Wt((e) => x, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Tt(n._1.tail)((e) => [2, e.x, e.y]), 5];
  f();
}, cJ = (t) => (n) => (e) => (r) => (o) => {
  const i = (() => {
    if (t === "Forward")
      return o;
    if (t === "Backward")
      return wn(o);
    f();
  })();
  if (0 < i.length) {
    const u = Tr(i)(nf(0)(1)(Zr(e)(r)(n)));
    if (u.tag === "Nothing")
      return i[0];
    if (u.tag === "Just")
      return u._1;
    f();
  }
  const s = Tr(i)(nf(0)(1)(Zr(e)(r)(n)));
  if (s.tag === "Nothing")
    return { x: 0, y: 0 };
  if (s.tag === "Just")
    return s._1;
  f();
}, aJ = (t) => {
  const n = Wt((e) => x, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Tt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, fJ = (t) => {
  const n = Wt((e) => x, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { vx: 0, vy: 0, vw: 0, vh: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: ef(r.minX)(o.x), minY: ef(r.minY)(o.y), maxX: Pu(r.maxX)(o.x), maxY: Pu(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { vx: e.minX - 40, vy: e.minY - 40, vw: e.maxX - e.minX + 80, vh: e.maxY - e.minY + 80 };
  }
  f();
}, gJ = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => {
    const i = o.box, s = o.np, u = { color: r.nodeStroke, width: 1, lineJoin: vn, lineCap: $e };
    return n.bind(t.fillStrokePath(yr([i.ground.d, i.ground.c, i.top.c, i.top.d]))({ color: Or(0.66)(r.nodeFill), flat: !0 })(u))(() => n.bind(t.fillStrokePath(yr([
      i.ground.b,
      i.ground.c,
      i.top.c,
      i.top.b
    ]))({ color: Or(0.82)(r.nodeFill), flat: !0 })(u))(() => n.bind(t.fillStrokePath(yr([i.top.a, i.top.b, i.top.c, i.top.d]))({
      color: Or(1)(r.nodeFill),
      flat: !0
    })(u))(() => t.drawTextAffine(sJ(e)(s.y + s.h))({
      x: s.x + s.w / 2,
      y: 0,
      content: s.label,
      font: { family: r.fontFamily, size: 11, weight: 600 },
      color: r.text,
      align: eo,
      baseline: cr
    }))));
  };
}, lJ = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => (i) => {
    const s = { color: r.tokenOutsideStroke, width: 1, lineJoin: vn, lineCap: $e }, u = i.x - 5.5, c = i.x + 5.5, a = i.y - 5.5, g = i.y + 5.5, _ = o + 11, d = En(e)(u)(a)(_), l = En(e)(c)(a)(_), h = En(e)(c)(g)(_), $ = En(e)(u)(g)(_), p = En(e)(c)(g)(o), m = En(e)(c)(a)(o);
    return n.bind(t.fillStrokePath(yr([En(e)(u)(g)(o), p, h, $]))({ color: Or(0.66)(r.tokenOutsideFill), flat: !0 })(s))(() => n.bind(t.fillStrokePath(yr([
      m,
      p,
      h,
      l
    ]))({ color: Or(0.82)(r.tokenOutsideFill), flat: !0 })(s))(() => t.fillStrokePath(yr([d, l, h, $]))({
      color: Or(1)(r.tokenOutsideFill),
      flat: !0
    })(s)));
  };
}, _J = (t) => {
  const n = lJ(t);
  return (e) => (r) => (o) => (i) => {
    if (i.tag === "Travelling") {
      const s = oJ(i._1.edge)(o.edges);
      return s.tag === "Just" ? v(
        "Just",
        (() => {
          const u = cJ(i._1.direction)(i._1.progress)(i._1.holdPre)(i._1.holdPost)(s._1);
          return { depth: u.x + u.y, draw: n(e)(r)(0)(u) };
        })()
      ) : x;
    }
    if (i.tag === "Filling") {
      const s = iJ(i._1.node)(o.nodes);
      if (s.tag === "Just")
        return v(
          "Just",
          (() => {
            const u = { x: s._1.x + s._1.w / 2, y: s._1.y + s._1.h / 2 };
            return { depth: u.x + u.y, draw: n(e)(r)(e.boxHeight)(u) };
          })()
        );
    }
    return x;
  };
}, dJ = { angle: 0.5235987755982988, boxHeight: 26, transparentBg: !0 }, hJ = (t) => (n) => {
  const e = n.y + n.h, r = n.x + n.w;
  return {
    ground: { a: En(t)(n.x)(n.y)(0), b: En(t)(r)(n.y)(0), c: En(t)(r)(e)(0), d: En(t)(n.x)(e)(0) },
    top: { a: En(t)(n.x)(n.y)(t.boxHeight), b: En(t)(r)(n.y)(t.boxHeight), c: En(t)(r)(e)(t.boxHeight), d: En(t)(n.x)(e)(t.boxHeight) },
    depth: (n.x + r) / 2 + (n.y + e) / 2
  };
}, rl = (t) => (n) => q((e) => ({ np: e, box: hJ(t)(e) }))((() => {
  const e = (r, o) => {
    if (r.tag === "Leaf")
      return o;
    if (r.tag === "Node")
      return e(r._5, Xt("Cons", r._4, e(r._6, o)));
    f();
  };
  return St(Ut.foldr, e(n.nodes, Vt));
})()), pJ = (t) => (n) => [
  ...Tt(rl(t)(n))(uJ),
  ...(() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, Xt("Cons", r._4, e(r._6, o)));
      f();
    };
    return Tt(St(Ut.foldr, e(n.edges, Vt)))(q((r) => En(t)(r.x)(r.y)(0)));
  })()
], $J = (t) => {
  const n = t.to.y - t.from.y, e = t.to.x - t.from.x, r = Pu(1e-4)(Sn(e * e + n * n)), o = n / r, i = e / r, s = t.to.y - o * 7, u = t.to.x - i * 7;
  return yr([t.to, { x: u - o * 3, y: s + i * 3 }, { x: u + o * 3, y: s - i * 3 }]);
}, mJ = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => (i) => (s) => (u) => {
    const c = En(r)(u.x)(u.y)(0), a = En(r)(s.x)(s.y)(0);
    return n.Bind1().bind(t.strokePath(aJ([a, c]))({
      color: o.edge,
      width: 1.5,
      lineJoin: vn,
      lineCap: Je
    }))(() => {
      const g = t.fillPath($J({ from: a, to: c }))({ color: o.arrowFill, flat: !0 });
      return i ? g : e.pure();
    });
  };
}, yJ = (t) => {
  const n = mJ(t);
  return (e) => (r) => (o) => {
    const i = bn(qe, o, Lt(1, o.length, o)), s = i.length - 1 | 0;
    return Bt((u) => (c) => ({ depth: (c._1.x + c._1.y + c._2.x + c._2.y) / 2, draw: n(e)(r)(u === s)(c._1)(c._2) }))(i);
  };
}, NJ = (t) => {
  const n = gJ(t), e = _J(t), r = yJ(t), o = t.Monad0(), i = ts(o.Applicative0())(Ot);
  return (s) => (u) => (c) => (a) => {
    const g = Jc(u), _ = [
      ...(() => {
        const d = (l, h) => {
          if (l.tag === "Leaf")
            return h;
          if (l.tag === "Node")
            return d(l._5, Xt("Cons", l._4, d(l._6, h)));
          f();
        };
        return Tt(St(Ut.foldr, d(c.edges, Vt)))(r(s)(g));
      })(),
      ...q((d) => ({ depth: d.box.depth, draw: n(s)(g)(d) }))(rl(s)(c)),
      ...yt(e(s)(g)(c))((() => {
        const d = (l, h) => {
          if (l.tag === "Leaf")
            return h;
          if (l.tag === "Node")
            return d(l._5, Xt("Cons", l._4, d(l._6, h)));
          f();
        };
        return St(Ut.foldr, d(a.tokens, Vt));
      })())
    ];
    return o.Bind1().bind((() => {
      const d = fJ(pJ(s)(c));
      return t.Monad0().Bind1().bind(t.clearBackground(s.transparentBg ? g.bgTransparent : g.bg))(() => t.setViewport(d));
    })())(() => i((d) => d.draw)(Et((d) => (l) => ct.compare(d.depth)(l.depth))(_)));
  };
}, ol = (t, n) => ({ tag: t, _1: n }), Ki = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, xJ = (t) => (n) => (e) => {
  const r = ct.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ct.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, bc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, JJ = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, TJ = /* @__PURE__ */ ol("ResolvedLabels"), vJ = (t) => {
  const n = Mt((e) => e.role === "FlyThrough")(t.levels);
  if (n.tag === "Just")
    return n._1;
  if (n.tag === "Nothing")
    return Pi(t);
  f();
}, Ls = (t) => (n) => {
  const e = Ki(1)(Kn(n.rootLayout).w), r = Zf(n.rootLayout)(n.camera), o = !n.diving && n.levels.length === 1 ? 1 : xJ(0)(1)(r.w / e), i = Pi(n).state.frameTitle === "" ? 0 * o : 40 * o, s = t.padding * o;
  return (() => {
    if (t.outputAspect.tag === "Nothing")
      return nJ;
    if (t.outputAspect.tag === "Just")
      return eJ(t.outputAspect._1);
    f();
  })()({ vx: r.x - s, vy: r.y - s - i, vw: r.w + 2 * s, vh: r.h + 2 * s + i });
}, wJ = (t) => (n) => {
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just") {
    const e = bc(n._1)(t.segment.layout.nodes);
    if (e.tag === "Nothing")
      return [];
    if (e.tag === "Just") {
      const r = e._1.x * t.segment.placement.scale + t.segment.placement.tx, o = e._1.y * t.segment.placement.scale + t.segment.placement.ty, i = e._1.w * t.segment.placement.scale, s = e._1.h * t.segment.placement.scale;
      return [1, r, o, 2, r + i, o, 2, r + i, o + s, 2, r, o + s, 5];
    }
  }
  f();
}, bJ = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => (o) => {
    if (r === "")
      return n.Applicative0().pure();
    const i = o.vh / 720, s = 56 * i;
    return e.bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 56, weight: 700 })(r))((u) => {
      const c = s + 16 * i * 2, a = u * i + 28 * i * 2, g = o.vy + o.vh / 2, _ = o.vx + o.vw / 2;
      return e.bind(t.drawRoundedRect({ x: _ - a / 2, y: g - c / 2, w: a, h: c })(16 * i)(v(
        "Just",
        { color: { r: 255, g: 255, b: 255, a: 235 }, flat: !0 }
      ))(v(
        "Just",
        { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1.5 * i, lineJoin: vn, lineCap: Je }
      )))(() => t.drawText({
        x: _,
        y: g,
        content: r,
        font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: s, weight: 700 },
        color: { r: 28, g: 30, b: 36, a: 255 },
        align: eo,
        baseline: cr
      }));
    });
  };
}, kJ = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => (o) => {
    if (r === "")
      return n.Applicative0().pure();
    const i = o.vh / 720, s = 15 * i;
    return e.bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 15, weight: 600 })(r))((u) => {
      const c = o.vy + 12 * i, a = s + 6 * i * 2, g = u * i + 11 * i * 2, _ = o.vx + o.vw / 2;
      return e.bind(t.drawRoundedRect({ x: _ - g / 2, y: c, w: g, h: a })(a / 2)(v(
        "Just",
        { color: { r: 255, g: 255, b: 255, a: 240 }, flat: !0 }
      ))(v(
        "Just",
        { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1 * i, lineJoin: vn, lineCap: Je }
      )))(() => t.drawText({
        x: _,
        y: c + a / 2,
        content: r,
        font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: s, weight: 600 },
        color: { r: 28, g: 30, b: 36, a: 255 },
        align: eo,
        baseline: cr
      }));
    });
  };
}, LJ = (t) => {
  const n = tl(t), e = wc(t), r = t.Monad0(), o = r.Bind1(), i = r.Applicative0(), s = nl(t), u = el(t)(xc)(1), c = Kg(t), a = jg(t), g = Mg(t), _ = Hx(t), d = t.popBlur, l = t.popAlpha, h = bJ(t), $ = kJ(t);
  return (p) => (m) => (y) => (N) => (T) => (w) => (b) => (L) => {
    const C = Jc(p.theme), H = (() => {
      if (L.tag === "ResolvedLabels")
        return n(C)(w)(b);
      if (L.tag === "SpringLabels")
        return e(C)(w)(b)(L._1);
      f();
    })();
    return o.bind(t.Monad0().Bind1().bind(t.clearBackground(p.transparentBg ? C.bgTransparent : C.bg))(() => t.setViewport(T)))(() => o.bind((() => {
      const X = o.bind((() => {
        const Y = t.pushAlpha(y);
        return y < 1 ? Y : i.pure();
      })())(() => o.bind((() => {
        const Y = t.pushBlur(N);
        return N > 0 ? Y : i.pure();
      })())(() => o.bind(s(C)(w)(b))(() => o.bind(u(C)(w)(b))(() => o.bind(c(C)(w)(b))(() => o.bind(a(C)(T)(w)(b))(() => o.bind(g(dN)(C)(w)(b))(() => o.bind(H)(() => o.bind((() => {
        const Y = _(C)(w)(b);
        return b.staticKind !== "Animated" ? Y : i.pure();
      })())(() => o.bind(N > 0 ? d : i.pure())(() => y < 1 ? l : i.pure()))))))))));
      return y > 0 ? X : i.pure();
    })())(() => o.bind(p.watermark === "" ? t.Monad0().Applicative0().pure() : t.drawText({
      x: T.vx + 6,
      y: T.vy + 6,
      content: p.watermark,
      font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 9, weight: 600 },
      color: { r: 180, g: 180, b: 180, a: 255 },
      align: wu,
      baseline: iN
    }))(() => b.staticKind === "TitleCard" ? h(b.frameTitle)(T) : $(b.frameTitle)(T))));
  };
}, il = (t) => {
  const n = t.Monad0().Applicative0(), e = xf(n)(Ot);
  return (r) => (o) => (i) => (s) => e(s.minis)((u) => {
    const c = sl(t)(r)(o)(i)(I)(s)(u);
    return (() => {
      const a = u.segment.path.length - 1 | 0;
      return u.bgAlpha > 0 && a >= 0 && a < u.segment.path.length && (() => {
        const g = bc(u.segment.path[a])(s.state.nodes);
        if (g.tag === "Just")
          return g._1.tag === "Hidden" ? !1 : g._1.tag !== "PloppingOut";
        if (g.tag === "Nothing")
          return !1;
        f();
      })();
    })() ? c : n.pure();
  });
}, sl = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = t.popTransform, i = tl(t), s = wc(t), u = nl(t), c = el(t), a = Kg(t), g = jg(t), _ = Mg(t), d = t.popBakedTransform, l = t.popClip, h = t.popBlur, $ = t.popAlpha;
  return (p) => (m) => (y) => (N) => (T) => (w) => {
    const b = w.blur > 0, L = w.segment.placement, C = w.state, H = { tx: L.tx, ty: L.ty, sx: L.scale, sy: L.scale }, X = Jc(p.theme), Y = w.segment.layout, G = Kn(Y), R = { vx: G.x - 1e3, vy: G.y - 1e3, vw: G.w + 2e3, vh: G.h + 2e3 }, nt = w.segment.path.length - 1 | 0, et = nt >= 0 && nt < w.segment.path.length ? bc(w.segment.path[nt])(T.segment.layout.nodes) : x, z = w.segment.placement.scale * y, Q = JJ(8)(Ki(1)(1 / (1.25 * Ki(1e-6)(z)))), E = 11 * z >= 5 ? xc : Cx, S = (() => {
      if (et.tag === "Nothing")
        return e.pure();
      if (et.tag === "Just") {
        const B = et._1;
        return r.bind(t.pushTransform({
          tx: T.segment.placement.tx,
          ty: T.segment.placement.ty,
          sx: T.segment.placement.scale,
          sy: T.segment.placement.scale
        }))(() => r.bind($c(t)(B.shape)({ x: B.x + 1, y: B.y + 1, w: B.w - 2, h: B.h - 2 })(7)(v(
          "Just",
          { color: X.bg, flat: !0 }
        ))(x))(() => o));
      }
      f();
    })(), O = (() => {
      if (E === "LabelsHidden")
        return e.pure();
      if (E === "LabelsShown")
        return N.tag === "Leaf" ? i(X)(Y)(C) : s(X)(Y)(C)(N);
      f();
    })(), P = wJ(T)((() => {
      const B = w.segment.path.length - 1 | 0;
      return B >= 0 && B < w.segment.path.length ? v("Just", w.segment.path[B]) : x;
    })());
    return r.bind(t.pushAlpha(w.bgAlpha))(() => r.bind((() => {
      const B = t.pushBlur(w.blur * L.scale);
      return b ? B : e.pure();
    })())(() => r.bind(t.pushClip(P)(zi))(() => r.bind(T.role === "Active" || T.role === "FlyThrough" ? S : e.pure())(() => r.bind(t.pushTransform(H))(() => r.bind(u(X)(Y)(C))(() => r.bind(c(E)(Q)(X)(Y)(C))(() => r.bind(a(X)(Y)(C))(() => r.bind(g(X)(R)(Y)(C))(() => r.bind(o)(() => r.bind(t.pushBakedTransform(H))(() => r.bind(_(hN)(X)(Y)(C))(() => r.bind(d)(() => r.bind(t.pushTransform(H))(() => r.bind(O)(() => r.bind(o)(() => r.bind(l)(() => r.bind(il(t)(p)(m)(y)(w))(() => r.bind(b ? h : e.pure())(() => $)))))))))))))))))));
  };
}, ul = (t) => {
  const n = NJ(t), e = t.Monad0(), r = e.Applicative0(), o = e.Bind1(), i = sl(t), s = LJ(t), u = il(t);
  return (c) => (a) => (g) => {
    if (c.theme === "Isometric")
      return n({ ...dJ, transparentBg: c.transparentBg })(c.theme)(Pi(g).segment.layout)(Pi(g).state);
    const _ = Ls(c)(g), d = (p) => g.hasDives ? _.vw / Ki(1)(Kn(g.rootLayout).w) : 1, l = { tileScale: d(), viewport: _ }, h = (p) => (m) => {
      if (m.length === 0)
        return r.pure();
      const y = Wt((N) => x, (N) => (T) => v("Just", { head: N, tail: T }), m);
      if (y.tag === "Nothing")
        return r.pure();
      if (y.tag === "Just") {
        const N = y._1.head, T = y._1.tail;
        return o.bind((() => {
          const w = i(c)(l)(g.camera.zoom)(N.role === "Active" ? a : I)(p)(N);
          return g.diving || N.role === "Active" ? w : r.pure();
        })())(() => h(N)(T));
      }
      f();
    }, $ = Wt((p) => x, (p) => (m) => v("Just", { head: p, tail: m }), g.levels);
    if ($.tag === "Nothing")
      return r.pure();
    if ($.tag === "Just") {
      const p = $._1.tail, m = $._1.head;
      return o.bind((() => {
        const y = p.length === 0;
        return s(c)(d())(m.role === "Active" || m.role === "FlyThrough" ? m.bgAlpha : 0)(m.blur)(_)(m.segment.layout)(vJ(g).state)(y && a.tag !== "Leaf" ? ol("SpringLabels", a) : TJ);
      })())(() => o.bind((() => {
        const y = u(c)(l)(g.camera.zoom)(m);
        return m.role === "Active" || m.role === "FlyThrough" ? y : r.pure();
      })())(() => h(m)(p)));
    }
    f();
  };
}, EJ = /* @__PURE__ */ vc(Fg), rf = /* @__PURE__ */ ul(Fg), SJ = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = {
    padding: 24,
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
    outputAspect: r.width <= 0 || r.height <= 0 ? x : v("Just", r.width / r.height)
  }, c = SN(e)(r);
  return () => {
    const a = c(), g = o.levels.length - 1 | 0;
    if (g >= 0 && g < o.levels.length) {
      const d = EJ(o.levels[g].segment.layout)(o.levels[g].state)(a)(), l = vu(i)(d)(s);
      return rf(u)(l.applied)(o)(a)(), l.springs;
    }
    const _ = vu(i)(I)(s);
    return rf(u)(_.applied)(o)(a)(), _.springs;
  };
}, cl = (t) => t, Ko = (t) => t, of = /* @__PURE__ */ Ko("Light"), CJ = /* @__PURE__ */ Ko("Dark"), PJ = /* @__PURE__ */ Ko("Blueprint"), AJ = /* @__PURE__ */ Ko("Whiteboard"), GJ = /* @__PURE__ */ Ko("Isometric"), IJ = /* @__PURE__ */ cl("PaintBackground"), FJ = /* @__PURE__ */ cl("TransparentBackground"), ar = (t) => "rgb(" + sn(t.r) + "," + sn(t.g) + "," + sn(t.b) + ")", xe = /* @__PURE__ */ Qf(/* @__PURE__ */ Bf("Fixed", /* @__PURE__ */ Rf(0)(20)(4))), BJ = (t) => "translate(" + xe(t.tx) + "," + xe(t.ty) + ") scale(" + xe(t.sx) + "," + xe(t.sy) + ")", vt = /* @__PURE__ */ Qf(/* @__PURE__ */ Bf("Fixed", /* @__PURE__ */ Rf(0)(20)(2))), kc = (t) => {
  const n = [];
  let e = 0;
  for (; e < t.length; ) {
    const r = e, o = r >= 0 && r < t.length ? v("Just", t[r]) : x;
    if (o.tag === "Nothing") {
      e = t.length;
      continue;
    }
    if (o.tag === "Just") {
      if (o._1 === 1) {
        n.push("M"), n.push(vt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(vt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 2) {
        n.push("L"), n.push(vt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(vt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 3) {
        n.push("Q"), n.push(vt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(vt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(vt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(vt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 5 | 0;
        continue;
      }
      if (o._1 === 4) {
        n.push("C"), n.push(vt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(vt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(vt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(vt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(vt((() => {
          const i = r + 5 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(vt((() => {
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
  return ds(" ")(n);
}, RJ = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, Au = /* @__PURE__ */ (() => {
  const t = je("&")("&amp;"), n = je("<")("&lt;"), e = (() => {
    const r = je(">")("&gt;"), o = (() => {
      const i = je('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), QJ = (t) => {
  if (t.style === "RunText")
    return "<tspan>" + Au(t.text) + "</tspan>";
  if (t.style === "RunCode")
    return `<tspan font-family="'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="400">` + Au(t.text) + "</tspan>";
  f();
}, kn = (t) => (n) => {
  const e = n.maskDepth;
  return () => {
    e.value === 0 && n.out.push(t);
  };
}, WJ = (t) => (n) => {
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
    const i = r, s = i >= 0 && i < n.length ? v("Just", n[i]) : x;
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
}, _i = (t) => (n) => {
  const e = t.bake;
  return () => {
    const r = e.value;
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return WJ(r._1)(n);
    f();
  };
}, al = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => RJ
}, HJ = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => al
}, DJ = { pure: (t) => (n) => () => t, Apply0: () => al }, OJ = { Applicative0: () => DJ, Bind1: () => HJ }, qJ = (t) => (n) => '<defs><pattern id="' + t + '" x="' + vt(n.origin.x) + '" y="' + vt(n.origin.y) + '" width="' + vt(n.tile) + '" height="' + vt(n.tile) + '" patternUnits="userSpaceOnUse">' + (n.bgColor.a === 0 ? "" : '<rect width="' + vt(n.tile) + '" height="' + vt(n.tile) + '" fill="' + ar(n.bgColor) + '" fill-opacity="' + vt(rt(n.bgColor.a) / 255) + '"/>') + '<circle cx="' + vt(n.tile / 2) + '" cy="' + vt(n.tile / 2) + '" r="' + vt(n.dotRadius) + '" fill="' + ar(n.dotColor) + '"/></pattern></defs><rect x="' + vt(n.viewport.vx) + '" y="' + vt(n.viewport.vy) + '" width="' + vt(n.viewport.vw) + '" height="' + vt(n.viewport.vh) + '" fill="url(#' + t + ')"/>', sf = (t) => (n) => '<path d="' + kc(t) + '" fill="' + ar(n) + '" fill-opacity="' + vt(rt(n.a) / 255) + '"/>', zJ = (t) => (n) => (e) => (r) => '<rect x="' + vt(t.x) + '" y="' + vt(t.y) + '" width="' + vt(t.w) + '" height="' + vt(t.h) + '" rx="' + vt(n) + '"' + (() => {
  if (e.tag === "Just")
    return ' fill="' + ar(e._1.color) + '" fill-opacity="' + vt(rt(e._1.color.a) / 255) + '"';
  if (e.tag === "Nothing")
    return ' fill="none"';
  f();
})() + (() => {
  if (r.tag === "Just")
    return ' stroke="' + ar(r._1.color) + '" stroke-opacity="' + vt(rt(r._1.color.a) / 255) + '" stroke-width="' + vt(r._1.width) + '" stroke-linejoin="' + (() => {
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
})() + "/>", uf = (t) => (n) => '<path d="' + kc(t) + '" fill="none" stroke="' + ar(n.color) + '" stroke-opacity="' + vt(rt(n.color.a) / 255) + '" stroke-width="' + vt(n.width) + '" stroke-linejoin="' + (() => {
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
})() + '"/>', cf = (t) => {
  const n = T0(Mr(t.content));
  return '<text x="' + vt(t.x) + '" y="' + vt(t.y) + '"' + (() => {
    if (t.baseline === "BaselineTop")
      return ' dy="0.8em"';
    if (t.baseline === "BaselineMiddle")
      return ' dy="0.32em"';
    if (t.baseline === "BaselineAlphabetic" || t.baseline === "BaselineBottom")
      return "";
    f();
  })() + ' fill="' + ar(t.color) + '" fill-opacity="' + vt(rt(t.color.a) / 255) + '" font-size="' + vt(t.font.size) + '" font-family="Ilisarniq, ui-sans-serif, system-ui, sans-serif" font-weight="' + sn(t.font.weight) + '" text-anchor="' + (() => {
    if (t.align === "AlignLeft")
      return "start";
    if (t.align === "AlignCenter")
      return "middle";
    if (t.align === "AlignRight")
      return "end";
    f();
  })() + '">' + (n.length === 1 && n[0].style === "RunText" ? Au(n[0].text) : ds("")(q(QJ)(n))) + "</text>";
}, YJ = (t) => "matrix(" + xe(t.a) + " " + xe(t.b) + " " + xe(t.c) + " " + xe(t.d) + " " + xe(t.e) + " " + xe(t.f) + ")", fl = {
  fillPath: (t) => (n) => (e) => {
    const r = _i(e)(t);
    return () => {
      const o = r();
      return kn(sf(o)(n.color))(e)();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = _i(e)(t);
    return () => {
      const o = r(), i = e.bake.value;
      return kn(uf(o)((() => {
        if (i.tag === "Nothing")
          return n;
        if (i.tag === "Just")
          return { ...n, width: i._1.sx * n.width };
        f();
      })()))(e)();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = _i(r)(t);
    return () => {
      const i = o(), s = r.bake.value;
      return kn(sf(i)(n.color) + uf(i)((() => {
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
      return kn(zJ((() => {
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
      ) : x))(o)();
    };
  },
  drawText: (t) => (n) => {
    const e = n.bake;
    return () => {
      const r = e.value;
      return kn(cf((() => {
        if (r.tag === "Nothing")
          return t;
        if (r.tag === "Just")
          return { ...t, x: r._1.sx * t.x + r._1.tx, y: r._1.sy * t.y + r._1.ty, font: { ...t.font, size: r._1.sx * t.font.size } };
        f();
      })()))(n)();
    };
  },
  drawTextAffine: (t) => (n) => kn((() => {
    const e = 'transform="' + YJ(t) + '"';
    return (e === "" ? "<g>" : "<g " + e + ">") + cf(n) + "</g>";
  })()),
  pushTransform: (t) => kn((() => {
    const n = 'transform="' + BJ(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popTransform: /* @__PURE__ */ kn("</g>"),
  pushBakedTransform: (t) => (n) => {
    const e = n.bake;
    return () => {
      e.value = v("Just", t);
    };
  },
  popBakedTransform: (t) => {
    const n = t.bake;
    return () => {
      n.value = x;
    };
  },
  pushClip: (t) => (n) => (e) => {
    const r = e.clipCounter;
    return () => {
      const o = r.value;
      e.clipCounter.value = o + 1 | 0;
      const i = _i(e)(t)(), s = "clip" + sn(o);
      return kn((() => {
        const u = 'clip-path="url(#' + s + ')"';
        return '<defs><clipPath id="' + s + '"><path d="' + kc(i) + '"' + (() => {
          if (n === "EvenOdd")
            return ' clip-rule="evenodd"';
          if (n === "NonZero")
            return "";
          f();
        })() + "/></clipPath></defs>" + (u === "" ? "<g>" : "<g " + u + ">");
      })())(e)();
    };
  },
  popClip: /* @__PURE__ */ kn("</g>"),
  pushBlend: (t) => kn((() => {
    const n = (() => {
      if (t === "Normal")
        return 'style="mix-blend-mode: normal"';
      if (t === "Difference")
        return 'style="mix-blend-mode: difference"';
      f();
    })();
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popBlend: /* @__PURE__ */ kn("</g>"),
  pushAlpha: (t) => kn((() => {
    const n = 'opacity="' + vt(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popAlpha: /* @__PURE__ */ kn("</g>"),
  pushBlur: (t) => (n) => {
    if (t < 0.01)
      return kn("<g>")(n);
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      n.patternCounter.value = r + 1 | 0;
      const o = "lvl-blur-" + sn(r);
      return kn((() => {
        const i = 'filter="url(#' + o + ')"';
        return '<defs><filter id="' + o + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="' + vt(t) + '"/></filter></defs>' + (i === "" ? "<g>" : "<g " + i + ">");
      })())(n)();
    };
  },
  popBlur: /* @__PURE__ */ kn("</g>"),
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
  clearBackground: (t) => (n) => kn('<rect x="' + vt(n.viewport.vx) + '" y="' + vt(n.viewport.vy) + '" width="' + vt(n.viewport.vw) + '" height="' + vt(n.viewport.vh) + '" fill="' + ar(t) + '" opacity="' + vt(rt(t.a) / 255) + '"/>')(n),
  backgroundDots: (t) => (n) => {
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      return n.patternCounter.value = r + 1 | 0, kn(qJ("bg-dots-" + sn(r))(t))(n)();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = pg(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = $g(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => wg,
  Monad0: () => OJ
}, XJ = /* @__PURE__ */ ul(fl), VJ = /* @__PURE__ */ vc(fl), UJ = (t) => (n) => (e) => (r) => (o) => {
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
  }, s = Ls(i)(o);
  return {
    viewBox: vt(s.vx) + " " + vt(s.vy) + " " + vt(s.vw) + " " + vt(s.vh),
    body: (() => {
      const u = [], c = { value: 0 }, a = { value: 0 }, g = { value: 0 }, _ = { value: x };
      return XJ(i)(n)(o)({ out: u, maskDepth: c, clipCounter: a, patternCounter: g, viewport: s, bake: _ })(), ds("")(u);
    })(),
    vx: s.vx,
    vy: s.vy,
    vw: s.vw,
    vh: s.vh
  };
}, KJ = (t) => (n) => (e) => (r) => (o) => (i) => {
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
  }, u = vu(o)((() => {
    const c = [], a = { value: 0 }, g = { value: 0 }, _ = { value: 0 }, d = { value: x }, l = r.levels.length - 1 | 0;
    return l >= 0 && l < r.levels.length ? VJ(r.levels[l].segment.layout)(r.levels[l].state)({
      out: c,
      maskDepth: a,
      clipCounter: g,
      patternCounter: _,
      viewport: Ls(s)(r),
      bake: d
    })() : I;
  })())(i);
  return { parts: UJ(t)(u.applied)(n)(e)(r), springs: u.springs };
}, Mo = (t) => ({ bind: (n) => (e) => (r) => t.Bind1().bind(n(r))((o) => e(o._1)(o._2)), Apply0: () => gl(t) }), gl = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = { map: (r) => (o) => (i) => n.map((s) => k(r(s._1), s._2))(o(i)) };
  return {
    apply: (() => {
      const r = Mo(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => jo(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, jo = (t) => ({ pure: (n) => (e) => t.Applicative0().pure(k(n, e)), Apply0: () => gl(t) }), MJ = (t) => {
  const n = { Applicative0: () => jo(t), Bind1: () => Mo(t) };
  return { state: (e) => (r) => t.Applicative0().pure(e(r)), Monad0: () => n };
}, Lc = (t, n) => ({ tag: t, _1: n }), Ec = (t) => t, ze = (t, n) => ({ tag: t, _1: n }), yn = /* @__PURE__ */ MJ(or), Rt = /* @__PURE__ */ Mo(or), Gn = yn.state((t) => k(t, t)), rn = /* @__PURE__ */ jo(or), We = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, ll = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Es = /* @__PURE__ */ ts(rn)(Ot), He = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, jJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, ZJ = /* @__PURE__ */ (() => {
  const t = oe.unfoldr((n) => {
    if (n.tag === "Nil")
      return x;
    if (n.tag === "Cons")
      return v("Just", k(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, Xt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Vt);
  })());
})(), tT = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, Ss = (t) => (n) => (e) => J((r) => (o) => t.Bind1().bind(r)((i) => n(i)(o)))(t.Applicative0().pure(e)), nT = /* @__PURE__ */ J((t) => (n) => U(A)(n)()(t))(I), eT = /* @__PURE__ */ (() => {
  const n = ((e) => (r) => {
    let o = e, i = r, s = !0, u;
    for (; s; ) {
      const c = o, a = i;
      if (a.tag === "Nil") {
        s = !1, u = c;
        continue;
      }
      if (a.tag === "Cons") {
        o = U(A)(a._1)()(c), i = a._2;
        continue;
      }
      f();
    }
    return u;
  })(I);
  return (e) => n((() => {
    const r = (o, i) => {
      if (o.tag === "Leaf")
        return i;
      if (o.tag === "Node")
        return r(o._5, Xt("Cons", o._3, r(o._6, i)));
      f();
    };
    return r(e, Vt);
  })());
})(), rT = /* @__PURE__ */ ze("Exit"), oT = /* @__PURE__ */ Ec("AnimatedKeyframe"), iT = /* @__PURE__ */ Ec("Still"), sT = /* @__PURE__ */ Ec("Title"), uT = (t) => Lc("Par", t), _l = (t) => Lc("Seq", t), cT = (t) => (n) => (e) => {
  const r = Nr(Yt, x, (o) => o._1 === t, e);
  if (r.tag === "Just") {
    const o = ir(Yt, x, r._1, k(t, n), e);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return o._1;
    f();
  }
  if (r.tag === "Nothing")
    return Qt(e)(k(t, n));
  f();
}, aT = (t) => (n) => q((e) => e._1 === t ? k(e._1, { ...e._2, label: v("Just", n) }) : k(e._1, e._2)), Nn = (t) => yn.state((n) => k(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return { ...n, error: v("Just", { msg: t, line: n.currentLine, column: n.currentColumn }) };
    f();
  })()
)), fT = (t) => Rt.bind(yn.state((n) => k(void 0, { ...n, currentLine: t.line, currentColumn: t.column })))(() => Rt.bind(Gn)((n) => {
  if (n.error.tag === "Just")
    return rn.pure();
  if (n.error.tag === "Nothing") {
    if (t.op.tag === "Enter") {
      if (!We(t.op._1.id)(n.currNodes))
        return Nn("cannot enter node " + t.op._1.id + ": does not exist");
      if (!ll(t.op._1.id)(n.interiorOf))
        return Nn("cannot enter node " + t.op._1.id + ": it has no `inside` block");
      if (Yn(pe)(t.op._1.id)(n.enterStack))
        return Nn("cannot enter node " + t.op._1.id + ": already entered");
      const e = t.op._1;
      return yn.state((r) => k(
        void 0,
        { ...r, enterStack: Qt(r.enterStack)(e.id), scenes: Qt(r.scenes)(zo("EnterNode", e.id)) }
      ));
    }
    if (t.op.tag === "Exit") {
      const e = xr(n.enterStack);
      if (e.tag === "Nothing")
        return Nn("`exit` without a matching `enter`");
      if (e.tag === "Just") {
        const r = e._1.init;
        return yn.state((o) => k(void 0, { ...o, enterStack: r, scenes: Qt(o.scenes)(V_) }));
      }
      f();
    }
    return rn.pure();
  }
  f();
})), gT = (t) => Rt.bind(Gn)((n) => {
  const e = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + sn(n.kfCounter);
  if (Vn((o) => o.id === e, n.keyframes))
    return Nn("duplicate frame name " + e);
  const r = {
    ...n,
    keyframes: Qt(n.keyframes)({ id: e, nodes: n.currNodes, edges: n.currEdges, kind: Yo }),
    kfCounter: n.kfCounter + 1 | 0,
    currentKf: v("Just", e)
  };
  return yn.state((o) => k(void 0, r));
}), lT = /* @__PURE__ */ Es((t) => Rt.bind(Gn)((n) => {
  if (n.error.tag === "Just")
    return rn.pure();
  if (n.error.tag === "Nothing")
    return ll(t.node)(n.interiorOf) ? Nn("node " + t.node + " has more than one `inside` block") : yn.state((e) => k(void 0, { ...e, interiorOf: U(A)(t.node)(t.doc)(e.interiorOf) }));
  f();
})), _T = (t) => (n) => {
  const e = n.from + "->" + n.to, r = n.newFrom + "->" + n.newTo, o = Pt("Left", "cannot repoint " + n.from + "→" + n.to + ": edge does not exist"), i = He(e)(t.currEdges) ? Pt("Right", void 0) : o;
  return (() => {
    if (i.tag === "Left") {
      const s = i._1;
      return (u) => Pt("Left", s);
    }
    if (i.tag === "Right") {
      const s = i._1;
      return (u) => u(s);
    }
    f();
  })()(() => {
    const s = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newFrom;
    if (!We(n.newFrom)(t.currNodes))
      return Pt("Left", s);
    const u = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newTo;
    if (!We(n.newTo)(t.currNodes))
      return Pt("Left", u);
    const c = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": target edge already exists";
    return e !== r && He(r)(t.currEdges) ? Pt("Left", c) : Pt(
      "Right",
      {
        nextCurrEdges: U(A)(r)()(yo(A)(e)(t.currEdges)),
        newId: r,
        newEdge: { id: r, from: { node: n.newFrom, port: x }, to: { node: n.newTo, port: x }, label: x }
      }
    );
  });
}, dl = {
  graphNodes: [],
  graphEdges: I,
  currNodes: I,
  currEdges: I,
  keyframes: [],
  scenes: [],
  kfCounter: 0,
  eventCounter: 0,
  currentKf: x,
  currentLine: 0,
  currentColumn: 0,
  error: x,
  enterStack: [],
  interiorOf: I
}, dT = Rt.bind(Gn)((t) => {
  if (t.error.tag === "Just")
    return rn.pure();
  if (t.error.tag === "Nothing") {
    if (t.currentKf.tag === "Just") {
      const n = t.currentKf._1;
      return yn.state((e) => k(void 0, { ...e, scenes: Qt(e.scenes)(zo("Hold", n)) }));
    }
    if (t.currentKf.tag === "Nothing")
      return rn.pure();
  }
  f();
}), af = (t) => (n) => Rt.bind(Gn)((e) => {
  const r = "ev-" + sn(e.eventCounter);
  return Rt.bind((() => {
    const o = { ...e, eventCounter: e.eventCounter + 1 | 0 };
    return yn.state((i) => k(void 0, o));
  })())(() => rn.pure({ events: [{ id: r, kind: n, when: t }], firstId: v("Just", r), lastId: v("Just", r) }));
}), hT = (t) => (n) => {
  if (n.tag === "Token") {
    const e = n._1;
    return Rt.bind(Gn)((r) => {
      const o = !We(e.from)(r.currNodes), i = !We(e.to)(r.currNodes);
      if (o || i)
        return Rt.bind(Nn(o ? i ? "token references unknown node: " + e.from + ", " + e.to : "token references unknown node: " + e.from : i ? "token references unknown node: " + e.to : "token references unknown node: "))(() => rn.pure({ events: [], firstId: x, lastId: x }));
      const s = e.to + "->" + e.from, u = e.from + "->" + e.to;
      return He(u)(r.currEdges) ? af(t)(Yc(
        "SendToken",
        { from: e.from, to: e.to, edge: u, direction: Y_, labels: e.labels }
      )) : He(s)(r.currEdges) ? af(t)(Yc(
        "SendToken",
        { from: e.from, to: e.to, edge: s, direction: X_, labels: e.labels }
      )) : Rt.bind(Nn("token " + e.from + "→" + e.to + ": no edge between " + e.from + " and " + e.to))(() => rn.pure({
        events: [],
        firstId: x,
        lastId: x
      }));
    });
  }
  return rn.pure({ events: [], firstId: x, lastId: x });
}, pT = (t) => (n) => {
  if (0 < t.length) {
    const e = t[0];
    return Rt.bind(yn.state((r) => k(void 0, { ...r, currentLine: e.line, currentColumn: e.column })))(() => Nn(n));
  }
  return Nn(n);
}, $T = (t) => yt((n) => jJ(n)(t.graphEdges))(St(mo, ZJ(t.currEdges))), mT = (t) => (n) => {
  const e = ft((o) => o.from.node === n.id || o.to.node === n.id, $T(t)), r = Ss(Tf)((o) => (i) => {
    const s = i.from + "->" + n.id, u = n.id + "->" + i.to, c = i.from + "->" + i.to, a = "via " + i.from + " " + i.to + ": no edge " + i.from + "→" + n.id;
    if (!He(s)(t.currEdges))
      return Pt("Left", a);
    const g = "via " + i.from + " " + i.to + ": no edge " + n.id + "→" + i.to;
    if (!He(u)(t.currEdges))
      return Pt("Left", g);
    const _ = "via " + i.from + " " + i.to + ": would create " + i.from + "→" + i.to + " but it already exists";
    return He(c)(t.currEdges) || tT(c)(o.synthesized) ? Pt("Left", _) : Pt(
      "Right",
      {
        consumed: U(A)(s)()(U(A)(u)()(o.consumed)),
        synthesized: U(A)(c)({
          id: c,
          from: { node: i.from, port: x },
          to: { node: i.to, port: x },
          label: x
        })(o.synthesized)
      }
    );
  })({ consumed: I, synthesized: I })(n.via);
  return (() => {
    if (r.tag === "Left") {
      const o = r._1;
      return (i) => Pt("Left", o);
    }
    if (r.tag === "Right") {
      const o = r._1;
      return (i) => i(o);
    }
    f();
  })()((o) => {
    const i = o.consumed, s = ft((u) => !He(u.id)(i), e);
    return s.length === 0 ? Pt(
      "Right",
      {
        nextCurrEdges: Pn(
          A.compare,
          Cn,
          Be(A.compare, t.currEdges, nT(q((u) => u.id)(e))),
          eT((() => {
            const u = (c) => {
              if (c.tag === "Leaf")
                return I;
              if (c.tag === "Node")
                return zt("Node", c._1, c._2, c._3, void 0, u(c._5), u(c._6));
              f();
            };
            return u(o.synthesized);
          })())
        ),
        synthesized: o.synthesized
      }
    ) : Pt(
      "Left",
      "cannot delete node " + n.id + ": still connected (" + ds(", ")(q((u) => u.from.node + "→" + u.to.node)(s)) + "). Use -edge to drop them or `via a b` to merge " + n.id + "'s endpoints."
    );
  });
}, Mi = (t) => {
  if (t.tag === "Leaf")
    return [t._1];
  if (t.tag === "Par" || t.tag === "Seq")
    return Tt(t._1)(Mi);
  f();
}, yT = Rt.bind(Gn)((t) => {
  if (t.error.tag === "Just")
    return rn.pure();
  if (t.error.tag === "Nothing") {
    const n = t.enterStack.length - 1 | 0;
    return n >= 0 && n < t.enterStack.length ? Nn("entered node " + t.enterStack[n] + " was never exited") : rn.pure();
  }
  f();
}), NT = (t) => ({
  nodes: q(ns)(t.graphNodes),
  edges: (() => {
    const n = (e, r) => {
      if (e.tag === "Leaf")
        return r;
      if (e.tag === "Node")
        return n(e._5, Xt("Cons", e._4, n(e._6, r)));
      f();
    };
    return St(Ut.foldr, n(t.graphEdges, Vt));
  })(),
  constraints: []
}), xT = (t) => {
  if (t.tag === "AddNode") {
    const n = t._1;
    return yn.state((e) => k(
      void 0,
      {
        ...e,
        graphNodes: cT(n.id)({ id: n.id, size: k(1, 1), ports: [], label: v("Just", n.label), shape: n.shape })(e.graphNodes),
        currNodes: U(A)(n.id)()(e.currNodes)
      }
    ));
  }
  if (t.tag === "DelNode") {
    const n = t._1;
    return Rt.bind(Gn)((e) => {
      if (!We(n.id)(e.currNodes))
        return Nn("cannot delete node " + n.id + ": does not exist");
      const r = mT(e)(n);
      if (r.tag === "Left")
        return Nn(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return yn.state((i) => k(
          void 0,
          {
            ...i,
            currNodes: yo(A)(n.id)(i.currNodes),
            currEdges: o.nextCurrEdges,
            graphEdges: Pn(A.compare, Cn, o.synthesized, i.graphEdges)
          }
        ));
      }
      f();
    });
  }
  if (t.tag === "ModNode") {
    const n = t._1;
    return Rt.bind(Gn)((e) => {
      if (!We(n.id)(e.currNodes))
        return Nn("cannot modify node " + n.id + ": does not exist");
      if (n.label.tag === "Just") {
        const r = n.label._1;
        return yn.state((o) => k(void 0, { ...o, graphNodes: aT(n.id)(r)(o.graphNodes) }));
      }
      if (n.label.tag === "Nothing")
        return rn.pure();
      f();
    });
  }
  if (t.tag === "AddEdge") {
    const n = t._1;
    return Rt.bind(Gn)((e) => {
      const r = !We(n.from)(e.currNodes), o = !We(n.to)(e.currNodes);
      if (r || o)
        return Nn("cannot add edge " + n.from + "→" + n.to + ": unknown node " + (r ? o ? n.from + ", " + n.to : n.from : o ? n.to : ""));
      const i = n.from + "->" + n.to;
      return yn.state((s) => k(
        void 0,
        {
          ...s,
          graphEdges: U(A)(i)({
            id: i,
            from: { node: n.from, port: x },
            to: { node: n.to, port: x },
            label: n.label
          })(s.graphEdges),
          currEdges: U(A)(i)()(s.currEdges)
        }
      ));
    });
  }
  if (t.tag === "DelEdge") {
    const n = t._1;
    return Rt.bind(Gn)((e) => {
      const r = n.from + "->" + n.to;
      return He(r)(e.currEdges) ? yn.state((o) => k(void 0, { ...o, currEdges: yo(A)(r)(o.currEdges) })) : Nn("cannot delete edge " + n.from + "→" + n.to + ": does not exist");
    });
  }
  if (t.tag === "RepointEdge") {
    const n = t._1;
    return Rt.bind(Gn)((e) => {
      const r = _T(e)(n);
      if (r.tag === "Left")
        return Nn(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return yn.state((i) => k(
          void 0,
          { ...i, currEdges: o.nextCurrEdges, graphEdges: U(A)(o.newId)(o.newEdge)(i.graphEdges) }
        ));
      }
      f();
    });
  }
  return rn.pure();
}, JT = (t) => Rt.bind(yn.state((n) => k(void 0, { ...n, currentLine: t.line, currentColumn: t.column })))(() => xT(t.op)), hl = (t) => (n) => (e) => Rt.bind(Es(JT)(e))(() => Rt.bind(Gn)((r) => {
  const o = n.tag === "Just" && n._1 !== "" ? n._1 : "kf-" + sn(r.kfCounter);
  if (Vn((s) => s.id === o, r.keyframes))
    return Nn("duplicate frame name " + o);
  const i = {
    ...r,
    keyframes: Qt(r.keyframes)({ id: o, nodes: r.currNodes, edges: r.currEdges, kind: t }),
    kfCounter: r.kfCounter + 1 | 0,
    currentKf: v("Just", o),
    scenes: (() => {
      if (r.currentKf.tag === "Nothing")
        return r.scenes;
      if (r.currentKf.tag === "Just")
        return Qt(r.scenes)(zo("Structural", { from: r.currentKf._1, to: o, focus: x }));
      f();
    })()
  };
  return yn.state((s) => k(void 0, i));
})), ff = (t) => (n) => {
  const e = Mi(n.ops), r = ft(
    (i) => i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge",
    e
  ), o = ft(
    (i) => !(i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge"),
    e
  );
  if (0 < o.length) {
    const i = o[0];
    return Rt.bind(yn.state((s) => k(void 0, { ...s, currentLine: i.line, currentColumn: i.column })))(() => Nn("still/title blocks hold a static snapshot; they cannot contain tokens (a -> b) or enter/exit"));
  }
  return t === "TitleCard" && r.length === 0 ? Nn(n.name.tag === "Just" && n.name._1 !== "" ? 'title "' + n.name._1 + '" has an empty body; give it nodes/edges to title, or use a still' : "title has an empty body; give it nodes/edges to title, or use a still") : Rt.bind(hl(t)(n.name)(r))(() => dT);
}, TT = (t) => (n) => {
  const e = Wt((r) => x, (r) => (o) => v("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return rn.pure({ events: [], firstId: x, lastId: x });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Rt.bind(Wo(t)(e._1.head))((o) => Rt.bind(Ss({
      Applicative0: () => jo(or),
      Bind1: () => Mo(or)
    })((i) => (s) => Rt.bind(Wo((() => {
      if (i.lastId.tag === "Just")
        return ec("After", i.lastId._1);
      if (i.lastId.tag === "Nothing")
        return t;
      f();
    })())(s))((u) => rn.pure({
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
    })))(o)(r))((i) => rn.pure(i)));
  }
  f();
}, vT = (t) => (n) => {
  const e = Wt((r) => x, (r) => (o) => v("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return rn.pure({ events: [], firstId: x, lastId: x });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Rt.bind(Wo(t)(e._1.head))((o) => Rt.bind(wT((() => {
      if (o.firstId.tag === "Just")
        return ec("With", o.firstId._1);
      if (o.firstId.tag === "Nothing")
        return t;
      f();
    })())(r))((i) => rn.pure({
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
}, Wo = (t) => (n) => {
  if (n.tag === "Leaf") {
    const e = n._1;
    return Rt.bind(yn.state((r) => k(void 0, { ...r, currentLine: e.line, currentColumn: e.column })))(() => hT(t)(e.op));
  }
  if (n.tag === "Seq")
    return TT(t)(n._1);
  if (n.tag === "Par")
    return vT(t)(n._1);
  f();
}, wT = (t) => Ss({
  Applicative0: () => jo(or),
  Bind1: () => Mo(or)
})((n) => (e) => Rt.bind(Wo(t)(e))((r) => rn.pure({
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
})))({ events: [], firstId: x, lastId: x }), bT = (t) => Rt.bind(Gn)((n) => {
  if (n.currentKf.tag === "Nothing")
    return Nn("flow ops before any structural frame");
  if (n.currentKf.tag === "Just") {
    const e = n.currentKf._1;
    return Rt.bind(Wo(z_)(t))((r) => Rt.bind(Gn)((o) => {
      const i = { ...o, scenes: Qt(o.scenes)(zo("DataFlow", { keyframe: e, events: r.events, focus: x })) };
      return yn.state((s) => k(void 0, i));
    }));
  }
  f();
}), kT = (t) => {
  const n = Mi(t.ops), e = ft(
    (i) => i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge",
    n
  ), r = ft((i) => i.op.tag === "Enter" || i.op.tag === "Exit", n), o = ft(
    (i) => !(i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge") && !(i.op.tag === "Enter" || i.op.tag === "Exit"),
    n
  );
  return r.length !== 0 && o.length !== 0 ? pT(r)("`enter`/`exit` cannot be mixed with flow tokens in the same frame") : Rt.bind((() => {
    const i = hl(Yo)(t.name)(e);
    return e.length !== 0 ? i : rn.pure();
  })())(() => Rt.bind((() => {
    const i = gT(t.name);
    return e.length === 0 && o.length !== 0 ? i : rn.pure();
  })())(() => Rt.bind((() => {
    const i = bT(t.ops);
    return o.length !== 0 ? i : rn.pure();
  })())(() => Es(fT)(r))));
}, LT = (t) => Rt.bind(Gn)((n) => {
  if (n.error.tag === "Just")
    return rn.pure();
  if (n.error.tag === "Nothing") {
    if (t.kind === "AnimatedKeyframe")
      return kT(t);
    if (t.kind === "Still")
      return ff(O_)(t);
    if (t.kind === "Title")
      return ff(q_)(t);
  }
  f();
}), pl = (t) => Rt.bind(lT(t.interiors))(() => Rt.bind(Es(LT)(t.frames))(() => Rt.bind(yT)(() => Rt.bind(Gn)((n) => {
  if (n.error.tag === "Just")
    return rn.pure(Pt("Left", n.error._1));
  if (n.error.tag === "Nothing") {
    const e = ET(t.interiors);
    if (e.tag === "Left")
      return rn.pure(Pt("Left", e._1));
    if (e.tag === "Right")
      return rn.pure(Pt("Right", { seed: t.seed, graph: NT(n), keyframes: n.keyframes, scenes: n.scenes, interiors: e._1 }));
  }
  f();
})))), ET = (t) => {
  const n = Ss(Tf)((e) => (r) => {
    const o = pl(r.doc)(dl)._1;
    return (() => {
      if (o.tag === "Left") {
        const i = o._1;
        return (s) => Pt("Left", i);
      }
      if (o.tag === "Right") {
        const i = o._1;
        return (s) => s(i);
      }
      f();
    })()((i) => Pt("Right", U(A)(r.node)(i)(e)));
  })(I)(t);
  if (n.tag === "Left")
    return Pt("Left", n._1);
  if (n.tag === "Right")
    return Pt("Right", n._1);
  f();
}, qr = (t, n) => ({ tag: "ParseError", _1: t, _2: n }), F = (t, n, e) => ({ tag: "ParseState", _1: t, _2: n, _3: e }), ji = (t, n, e) => ({ tag: t, _1: n, _2: e }), ST = (t) => ji("More", t), CT = (t) => ji("Lift", t), PT = {
  defer: (t) => {
    const n = J_(t);
    return (e, r, o, i, s) => T_(n)(e, r, o, i, s);
  }
}, $l = { map: (t) => (n) => (e, r, o, i, s) => r((u) => n(e, r, o, i, (c, a) => r((g) => s(c, t(a))))) }, AT = {
  alt: (t) => (n) => (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((a) => t(
      F(u, c, !1),
      r,
      o,
      (g, _) => {
        const d = g._3;
        return r((l) => d ? i(g, _) : n(e, r, o, i, s));
      },
      s
    ));
  },
  Functor0: () => $l
}, GT = (t) => {
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
          u = !1, c = n.Bind1().Apply0().Functor0().map(wf)(g._1);
          continue;
        }
        if (g.tag === "Stop") {
          u = !1, c = n.Applicative0().pure(fo("Done", k(g._2, g._1)));
          continue;
        }
        f();
      }
      return c;
    };
    return t.tailRecM(o)((i) => r(
      e,
      ST,
      CT,
      (s, u) => ji("Stop", s, Pt("Left", u)),
      (s, u) => ji("Stop", s, Pt("Right", u))
    ));
  };
}, ml = (t, n, e, r, o) => o(t, t._2), IT = { index: 0, line: 1, column: 1 }, FT = (t) => {
  const n = GT(t);
  return (e) => (r) => t.Monad0().Bind1().Apply0().Functor0().map(es)(n(F(e, IT, !1))(r));
}, BT = /* @__PURE__ */ FT(Ul), yl = {
  apply: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, a) => r((g) => {
      const _ = e._3 && !c._3 ? F(c._1, c._2, !0) : c;
      return n(_, r, o, i, (d, l) => r((h) => s(_._3 && !d._3 ? F(d._1, d._2, !0) : d, a(l))));
    })
  )),
  Functor0: () => $l
}, Nl = { pure: (t) => (n, e, r, o, i) => i(n, t), Apply0: () => yl }, RT = {
  bind: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, a) => r((g) => n(a)(e._3 && !c._3 ? F(c._1, c._2, !0) : c, r, o, i, s))
  )),
  Apply0: () => yl
}, QT = { Applicative0: () => Nl, Bind1: () => RT }, Cs = (t) => (n, e, r, o, i) => e((s) => ml(
  n,
  e,
  r,
  o,
  (u, c) => e((a) => o(n._3 && !u._3 ? F(u._1, u._2, !0) : u, qr(t, c)))
)), WT = { empty: /* @__PURE__ */ Cs("No alternative"), Alt0: () => AT }, HT = { Applicative0: () => Nl, Plus1: () => WT }, DT = {
  tailRecM: (t) => (n) => (e, r, o, i, s) => {
    const u = (c, a, g) => t(a)(
      c,
      r,
      o,
      i,
      (_, d) => {
        const l = c._3 && !_._3 ? F(_._1, _._2, !0) : _;
        if (d.tag === "Loop")
          return g === 0 ? r((h) => u(l, d._1, 30)) : u(l, d._1, g - 1 | 0);
        if (d.tag === "Done")
          return s(l, d._1);
        f();
      }
    );
    return u(e, n, 30);
  },
  Monad0: () => QT
}, OT = (t) => (n) => {
  const e = n.Plus1().Alt0(), r = n.Applicative0();
  return (o) => t.tailRecM((i) => t.Monad0().Bind1().bind(e.alt(e.Functor0().map(wf)(o))(r.pure(fo(
    "Done",
    void 0
  ))))((s) => r.pure((() => {
    if (s.tag === "Loop")
      return fo("Loop", Xt("Cons", s._1, i));
    if (s.tag === "Done")
      return fo(
        "Done",
        ((c) => (a) => {
          let g = c, _ = a, d = !0, l;
          for (; d; ) {
            const h = g, $ = _;
            if ($.tag === "Nil") {
              d = !1, l = h;
              continue;
            }
            if ($.tag === "Cons") {
              g = Xt("Cons", $._1, h), _ = $._2;
              continue;
            }
            f();
          }
          return l;
        })(Vt)(i)
      );
    f();
  })())))(Vt);
}, ae = /* @__PURE__ */ OT(DT)(HT), At = (t) => (n) => {
  const e = Cs("Expected " + n);
  return (r, o, i, s, u) => {
    const c = r._1, a = r._2;
    return o((g) => t(
      F(c, a, !1),
      o,
      i,
      (_, d) => {
        const l = _._3;
        return o((h) => l ? s(_, d) : e(r, o, i, s, u));
      },
      u
    ));
  };
}, Sc = (t) => (n, e, r, o, i) => {
  const s = n._3, u = n._1, c = n._2;
  return e((a) => {
    const g = (_, d) => {
      const l = _._3;
      return e((h) => l ? o(F(_._1, _._2, s), d) : i(n, void 0));
    };
    return e((_) => e((d) => t(
      F(u, c, !1),
      e,
      r,
      (l, h) => g(F(l._1, l._2, !1), h),
      (l, h) => e(($) => e((p) => Cs("Negated parser succeeded")(
        l,
        e,
        r,
        g,
        (m, y) => e((N) => i(l._3 && !m._3 ? F(m._1, m._2, !0) : m, y))
      )))
    )));
  });
}, qT = (t) => {
  const n = t.foldr((e) => (r) => {
    if (r.tag === "Nothing")
      return v("Just", e);
    if (r.tag === "Just")
      return v(
        "Just",
        (o, i, s, u, c) => {
          const a = o._1, g = o._2;
          return i((_) => e(
            F(a, g, !1),
            i,
            s,
            (d, l) => {
              const h = d._3;
              return i(($) => h ? u(d, l) : r._1(o, i, s, u, c));
            },
            c
          ));
        }
      );
    f();
  })(x);
  return (e) => {
    const r = n(e);
    if (r.tag === "Nothing")
      return Cs("No alternative");
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, zT = (t) => (n) => (e) => (r, o, i, s, u) => o((c) => o((a) => o((g) => o((_) => t(
  r,
  o,
  i,
  s,
  (d, l) => o((h) => o(($) => {
    const p = r._3 && !d._3 ? F(d._1, d._2, !0) : d;
    return e(
      p,
      o,
      i,
      s,
      (m, y) => o((N) => {
        const T = p._3 && !m._3 ? F(m._1, m._2, !0) : m;
        return o((w) => o((b) => {
          const L = r._3 && !T._3 ? F(T._1, T._2, !0) : T;
          return n(
            L,
            o,
            i,
            s,
            (C, H) => o((X) => u(L._3 && !C._3 ? F(C._1, C._2, !0) : C, y))
          );
        }));
      })
    );
  }))
))))), Gu = (t) => (n) => (e) => {
  if (n === 10)
    return { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  if (n === 13) {
    const r = Rd()(e);
    return r.tag === "Just" && r._1 === 10 ? { index: t.index + 1 | 0, line: t.line, column: t.column } : { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  }
  return n === 9 ? { index: t.index + 1 | 0, line: t.line, column: (t.column + 8 | 0) - tr(t.column - 1 | 0)(8) | 0 } : { index: t.index + 1 | 0, line: t.line, column: t.column + 1 | 0 };
}, YT = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const c = r, a = o, g = i, _ = hs(a);
    if (_.tag === "Nothing") {
      s = !1, u = c;
      continue;
    }
    if (_.tag === "Just") {
      r = _._1.tail === "" ? Gu(c)(_._1.head)(g) : Gu(c)(_._1.head)(_._1.tail), o = _._1.tail, i = g;
      continue;
    }
    f();
  }
  return u;
}, Zt = (t) => (n, e, r, o, i) => {
  const s = hs(n._1);
  if (s.tag === "Nothing")
    return o(n, qr("Unexpected EOF", n._2));
  if (s.tag === "Just") {
    if (s._1.head < 0 || s._1.head > 65535)
      return o(n, qr("Expected Char", n._2));
    if (s._1.head >= 0 && s._1.head <= 65535) {
      const u = r0(s._1.head);
      return t(u) ? i(F(s._1.tail, Gu(n._2)(s._1.head)(s._1.tail), !0), u) : o(n, qr("Predicate unsatisfied", n._2));
    }
  }
  f();
}, Cc = (t, n, e, r, o) => t._1 === "" ? o(F(t._1, t._2, !0), void 0) : r(t, qr("Expected EOF", t._2)), XT = (t) => (n, e, r, o, i) => {
  const s = t(n._1);
  if (s.tag === "Left")
    return o(n, qr(s._1, n._2));
  if (s.tag === "Right")
    return i(F(s._1.remainder, YT(n._2)(s._1.consumed)(s._1.remainder), s._1.consumed !== ""), s._1.value);
  f();
}, no = (t) => XT((n) => {
  const e = x_(t)(n);
  return e.tag === "Just" ? Pt("Right", { value: t, consumed: t, remainder: e._1 }) : Pt("Left", "Expected " + ou(t));
}), VT = /* @__PURE__ */ Zt((t) => !0), gf = (t, n) => ({ tag: t, _1: n }), UT = /* @__PURE__ */ en(A)(Ot), KT = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = A.compare(t)(s._3);
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
}, xl = /* @__PURE__ */ qT(Ot), Jl = /* @__PURE__ */ (() => {
  const t = Zt((n) => n === " " || n === "	" || n === `
` || n === "\r");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? F(u._1, u._2, !0) : u, void 0))
  ));
})(), Pc = (t, n, e, r, o) => n((i) => no("#")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = ae(Zt((_) => _ !== `
`)), g = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => o(g._3 && !d._3 ? F(d._1, d._2, !0) : d, void 0))
    ));
  })
)), MT = /* @__PURE__ */ At(/* @__PURE__ */ (() => {
  const t = At(Zt((e) => e === "}"))("'}'"), n = Zt((e) => e === `
` || e === "\r");
  return (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((a) => r((g) => t(
      F(u, c, !1),
      r,
      o,
      (_, d) => r((l) => {
        const h = e._1, $ = e._2;
        return r((p) => r((m) => Pc(
          F(h, $, !1),
          r,
          o,
          (y, N) => {
            const T = y._3;
            return r((w) => {
              if (T)
                return i(y, N);
              const b = e._1, L = e._2;
              return r((C) => r((H) => n(
                F(b, L, !1),
                r,
                o,
                (X, Y) => {
                  const G = X._3;
                  return r((R) => G ? i(X, Y) : Cc(e, r, o, i, s));
                },
                (X, Y) => r((G) => s(X, void 0))
              )));
            });
          },
          (y, N) => r((T) => s(y, void 0))
        )));
      }),
      (_, d) => r((l) => s(F(u, c, !1), void 0))
    )));
  };
})())("newline or '}' (statements end at the end of the line)"), re = /* @__PURE__ */ (() => {
  const t = ae((n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => Jl(
      F(s, u, !1),
      e,
      r,
      (a, g) => {
        const _ = a._3;
        return e((d) => _ ? o(a, g) : Pc(n, e, r, o, i));
      },
      i
    ));
  });
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? F(u._1, u._2, !0) : u, void 0))
  ));
})(), _e = (t, n, e, r, o) => n((i) => {
  const s = (a, g) => n((_) => re(t._3 && !a._3 ? F(a._1, a._2, !0) : a, n, e, r, o)), u = t._1, c = t._2;
  return n((a) => Jl(
    F(u, c, !1),
    n,
    e,
    (g, _) => {
      const d = g._3;
      return n((l) => d ? r(g, _) : Pc(t, n, e, r, s));
    },
    s
  ));
}), Tl = /* @__PURE__ */ (() => {
  const t = At(Zt((n) => n === "|"))("'|'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const g = ae(Zt((d) => d !== "|")), _ = n._3 && !u._3 ? F(u._1, u._2, !0) : u;
      return e((d) => g(
        _,
        e,
        r,
        o,
        (l, h) => e(($) => {
          const p = At(At(Zt((y) => y === "|"))("'|'"))("closing '|'"), m = _._3 && !l._3 ? F(l._1, l._2, !0) : l;
          return e((y) => p(
            m,
            e,
            r,
            o,
            (N, T) => e((w) => i(
              m._3 && !N._3 ? F(N._1, N._2, !0) : N,
              br(St(Ut.foldr, h))
            ))
          ));
        })
      ));
    })
  ));
})(), Zi = /* @__PURE__ */ Zt((t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z"), Dn = /* @__PURE__ */ (() => {
  const t = ae(Zt((n) => n === " " || n === "	"));
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? F(u._1, u._2, !0) : u, void 0))
  ));
})(), jT = /* @__PURE__ */ (() => {
  const t = At(Zt((n) => n === "\\"))("'\\\\'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const g = n._3 && !u._3 ? F(u._1, u._2, !0) : u;
      return e((_) => VT(
        g,
        e,
        r,
        o,
        (d, l) => e((h) => i(
          g._3 && !d._3 ? F(d._1, d._2, !0) : d,
          l === "n" ? `
` : l === "t" ? "	" : l === "r" ? "\r" : l
        ))
      ));
    })
  ));
})(), ZT = /* @__PURE__ */ (() => {
  const t = Zt((n) => n !== '"' && n !== "\\" && n !== `
`);
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => jT(F(s, u, !1), e, r, (a, g) => e((_) => t(n, e, r, o, i)), i));
  };
})(), Ac = /* @__PURE__ */ (() => {
  const t = At(Zt((n) => n === '"'))(`'"'`);
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const g = ae(ZT), _ = n._3 && !u._3 ? F(u._1, u._2, !0) : u;
      return e((d) => g(
        _,
        e,
        r,
        o,
        (l, h) => e(($) => {
          const p = At(At(Zt((y) => y === '"'))(`'"'`))(`closing '"' (unterminated string)`), m = _._3 && !l._3 ? F(l._1, l._2, !0) : l;
          return e((y) => p(
            m,
            e,
            r,
            o,
            (N, T) => e((w) => i(
              m._3 && !N._3 ? F(N._1, N._2, !0) : N,
              br(St(Ut.foldr, h))
            ))
          ));
        })
      ));
    })
  ));
})(), tv = /* @__PURE__ */ (() => {
  const t = At(Zt((n) => n === ":"))("':'");
  return (n, e, r, o, i) => e((s) => Dn(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => At((g, _, d, l, h) => {
      const $ = g._1, p = g._2;
      return _((m) => {
        const y = (N, T) => {
          const w = N._3;
          return _((b) => {
            if (w)
              return l(N, T);
            const L = g._1, C = g._2;
            return _((H) => Tl(
              F(L, C, !1),
              _,
              d,
              (X, Y) => {
                const G = X._3;
                return _((R) => G ? l(X, Y) : Ac(g, _, d, l, h));
              },
              h
            ));
          });
        };
        return _((N) => t(
          F($, p, !1),
          _,
          d,
          y,
          (T, w) => _((b) => _((L) => Dn(
            T,
            _,
            d,
            y,
            (C, H) => _((X) => {
              const Y = ae(Zt((R) => R !== `
` && R !== "\r" && R !== "#" && R !== "}")), G = T._3 && !C._3 ? F(C._1, C._2, !0) : C;
              return _((R) => Y(
                G,
                _,
                d,
                y,
                (nt, et) => _((z) => h(
                  G._3 && !nt._3 ? F(nt._1, nt._2, !0) : nt,
                  vd(br(St(Ut.foldr, et)))
                ))
              ));
            })
          )))
        ));
      });
    })('label ("…", : rest-of-line, or |…|)')(n._3 && !u._3 ? F(u._1, u._2, !0) : u, e, r, o, i))
  ));
})(), vl = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => Tl(
    F(i, s, !1),
    n,
    e,
    (c, a) => {
      const g = c._3;
      return n((_) => g ? r(c, a) : Ac(t, n, e, r, o));
    },
    o
  ));
}, Ho = /* @__PURE__ */ Zt((t) => t >= "0" && t <= "9"), Ln = /* @__PURE__ */ (() => {
  const t = At(Zt((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => e((s) => {
    const u = (g, _) => e((d) => {
      const l = ae((() => {
        const $ = At(Zt((m) => m === "_"))("'_'"), p = At(Zt((m) => m === "-"))("'-'");
        return (m, y, N, T, w) => {
          const b = m._1, L = m._2;
          return y((C) => Zi(
            F(b, L, !1),
            y,
            N,
            (H, X) => {
              const Y = H._3;
              return y((G) => {
                if (Y)
                  return T(H, X);
                const R = m._1, nt = m._2;
                return y((et) => Ho(
                  F(R, nt, !1),
                  y,
                  N,
                  (z, Q) => {
                    const E = z._3;
                    return y((S) => {
                      if (E)
                        return T(z, Q);
                      const O = m._1, P = m._2;
                      return y((B) => $(
                        F(O, P, !1),
                        y,
                        N,
                        (W, K) => {
                          const V = W._3;
                          return y((D) => V ? T(W, K) : p(m, y, N, T, w));
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
      })()), h = n._3 && !g._3 ? F(g._1, g._2, !0) : g;
      return e(($) => l(
        h,
        e,
        r,
        o,
        (p, m) => e((y) => i(
          h._3 && !p._3 ? F(p._1, p._2, !0) : p,
          as(_) + br(St(Ut.foldr, m))
        ))
      ));
    }), c = n._1, a = n._2;
    return e((g) => Zi(
      F(c, a, !1),
      e,
      r,
      (_, d) => {
        const l = _._3;
        return e((h) => l ? o(_, d) : t(n, e, r, o, u));
      },
      u
    ));
  });
})(), nv = /* @__PURE__ */ At((t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => Ac(
    F(i, s, !1),
    n,
    e,
    (c, a) => {
      const g = c._3;
      return n((_) => g ? r(c, a) : Ln(t, n, e, r, o));
    },
    o
  ));
})("frame name (identifier or quoted string)"), lf = (t, n, e, r, o) => n((i) => Dn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = At(Ln)("attribute key"), g = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => {
        const $ = g._3 && !d._3 ? F(d._1, d._2, !0) : d;
        return n((p) => Dn(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = At(At(Zt((b) => b === ":"))("':'"))("':'"), w = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((b) => T(
              w,
              n,
              e,
              r,
              (L, C) => n((H) => {
                const X = w._3 && !L._3 ? F(L._1, L._2, !0) : L;
                return n((Y) => Dn(
                  X,
                  n,
                  e,
                  r,
                  (G, R) => n((nt) => {
                    const et = At(Ln)("attribute value"), z = X._3 && !G._3 ? F(G._1, G._2, !0) : G;
                    return n((Q) => et(
                      z,
                      n,
                      e,
                      r,
                      (E, S) => n((O) => {
                        const P = z._3 && !E._3 ? F(E._1, E._2, !0) : E;
                        return n((B) => Dn(
                          P,
                          n,
                          e,
                          r,
                          (W, K) => n((V) => o(P._3 && !W._3 ? F(W._1, W._2, !0) : W, k(l, S)))
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
)), ev = (t, n, e, r, o) => n((i) => Ln(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => Dn(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = At((p, m, y, N, T) => {
          const w = p._1, b = p._2;
          return m((L) => no("->")(
            F(w, b, !1),
            m,
            y,
            (C, H) => {
              const X = C._3;
              return m((Y) => X ? N(C, H) : no("<-")(p, m, y, N, T));
            },
            T
          ));
        })("'->' or '<-'"), $ = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => Dn(
              T,
              n,
              e,
              r,
              (b, L) => n((C) => {
                const H = At(Ln)("target node identifier"), X = T._3 && !b._3 ? F(b._1, b._2, !0) : b;
                return n((Y) => H(
                  X,
                  n,
                  e,
                  r,
                  (G, R) => n((nt) => {
                    const et = ae((Q, E, S, O, P) => {
                      const B = Q._3;
                      return E((W) => E((K) => Dn(
                        Q,
                        E,
                        S,
                        (V, D) => O(F(V._1, V._2, B), D),
                        (V, D) => E((M) => E((Z) => {
                          const tt = Q._3 && !V._3 ? F(V._1, V._2, !0) : V;
                          return vl(
                            tt,
                            E,
                            S,
                            (j, ut) => O(F(j._1, j._2, B), ut),
                            (j, ut) => E((lt) => P(tt._3 && !j._3 ? F(j._1, j._2, !0) : j, ut))
                          );
                        }))
                      )));
                    }), z = X._3 && !G._3 ? F(G._1, G._2, !0) : G;
                    return n((Q) => et(
                      z,
                      n,
                      e,
                      r,
                      (E, S) => n((O) => (() => {
                        if (y === "<-") {
                          const B = ze(
                            "Token",
                            { from: R, to: u, labels: q(qc)(St(Ut.foldr, S)) }
                          );
                          return (W, K, V, D, M) => M(W, B);
                        }
                        const P = ze(
                          "Token",
                          { from: u, to: R, labels: q(qc)(St(Ut.foldr, S)) }
                        );
                        return (B, W, K, V, D) => D(B, P);
                      })()(z._3 && !E._3 ? F(E._1, E._2, !0) : E, n, e, r, o))
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
)), rv = (t, n, e, r, o) => n((i) => Ho(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = ae(Ho), g = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => {
        const $ = S1(as(u) + br(St(
          Ut.foldr,
          l
        )));
        return (() => {
          if ($.tag === "Just") {
            const p = $._1;
            return (m, y, N, T, w) => w(m, p);
          }
          if ($.tag === "Nothing")
            return (p, m, y, N, T) => T(p, 0);
          f();
        })()(g._3 && !d._3 ? F(d._1, d._2, !0) : d, n, e, r, o);
      })
    ));
  })
)), Zo = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => no(t)(
    n,
    e,
    r,
    (c, a) => o(F(c._1, c._2, s), a),
    (c, a) => e((g) => {
      const _ = Sc((() => {
        const l = At(Zt(($) => $ === "_"))("'_'"), h = At(Zt(($) => $ === "-"))("'-'");
        return ($, p, m, y, N) => {
          const T = $._1, w = $._2;
          return p((b) => Zi(
            F(T, w, !1),
            p,
            m,
            (L, C) => {
              const H = L._3;
              return p((X) => {
                if (H)
                  return y(L, C);
                const Y = $._1, G = $._2;
                return p((R) => Ho(
                  F(Y, G, !1),
                  p,
                  m,
                  (nt, et) => {
                    const z = nt._3;
                    return p((Q) => {
                      if (z)
                        return y(nt, et);
                      const E = $._1, S = $._2;
                      return p((O) => l(
                        F(E, S, !1),
                        p,
                        m,
                        (P, B) => {
                          const W = P._3;
                          return p((K) => W ? y(P, B) : h($, p, m, y, N));
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
      })()), d = n._3 && !c._3 ? F(c._1, c._2, !0) : c;
      return e((l) => _(
        d,
        e,
        r,
        (h, $) => o(F(h._1, h._2, s), $),
        (h, $) => e((p) => {
          const m = d._3 && !h._3 ? F(h._1, h._2, !0) : h;
          return e((y) => re(
            m,
            e,
            r,
            (N, T) => o(F(N._1, N._2, s), T),
            (N, T) => e((w) => i(m._3 && !N._3 ? F(N._1, N._2, !0) : N, t))
          ));
        })
      ));
    })
  ));
}, ov = (t, n, e, r, o) => n((i) => _e(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => Zo("via")(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n(($) => Ln(
          h,
          n,
          e,
          r,
          (p, m) => n((y) => {
            const N = h._3 && !p._3 ? F(p._1, p._2, !0) : p;
            return n((T) => _e(
              N,
              n,
              e,
              r,
              (w, b) => n((L) => {
                const C = N._3 && !w._3 ? F(w._1, w._2, !0) : w;
                return n((H) => Ln(
                  C,
                  n,
                  e,
                  r,
                  (X, Y) => n((G) => o(C._3 && !X._3 ? F(X._1, X._2, !0) : X, { from: m, to: Y }))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), fr = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => no(t)(
    n,
    e,
    r,
    (c, a) => o(F(c._1, c._2, s), a),
    (c, a) => e((g) => {
      const _ = Sc((() => {
        const l = At(Zt(($) => $ === "_"))("'_'"), h = At(Zt(($) => $ === "-"))("'-'");
        return ($, p, m, y, N) => {
          const T = $._1, w = $._2;
          return p((b) => Zi(
            F(T, w, !1),
            p,
            m,
            (L, C) => {
              const H = L._3;
              return p((X) => {
                if (H)
                  return y(L, C);
                const Y = $._1, G = $._2;
                return p((R) => Ho(
                  F(Y, G, !1),
                  p,
                  m,
                  (nt, et) => {
                    const z = nt._3;
                    return p((Q) => {
                      if (z)
                        return y(nt, et);
                      const E = $._1, S = $._2;
                      return p((O) => l(
                        F(E, S, !1),
                        p,
                        m,
                        (P, B) => {
                          const W = P._3;
                          return p((K) => W ? y(P, B) : h($, p, m, y, N));
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
      })()), d = n._3 && !c._3 ? F(c._1, c._2, !0) : c;
      return e((l) => _(
        d,
        e,
        r,
        (h, $) => o(F(h._1, h._2, s), $),
        (h, $) => e((p) => i(d._3 && !h._3 ? F(h._1, h._2, !0) : h, void 0))
      ));
    })
  ));
}, iv = (t, n, e, r, o) => n((i) => fr("+edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => _e(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = At(Ln)("source node identifier"), $ = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => _e(
              T,
              n,
              e,
              r,
              (b, L) => n((C) => {
                const H = At(Ln)("target node identifier"), X = T._3 && !b._3 ? F(b._1, b._2, !0) : b;
                return n((Y) => H(
                  X,
                  n,
                  e,
                  r,
                  (G, R) => n((nt) => {
                    const et = X._3 && !G._3 ? F(G._1, G._2, !0) : G;
                    return n((z) => {
                      const Q = (O, P) => n((B) => o(
                        et._3 && !O._3 ? F(O._1, O._2, !0) : O,
                        ze("AddEdge", { from: y, to: R, label: P.tag === "Just" ? v("Just", P._1) : x })
                      )), E = et._1, S = et._2;
                      return n((O) => n((P) => {
                        const B = (W, K) => {
                          const V = W._3;
                          return n((D) => V ? r(W, K) : Q(et, x));
                        };
                        return n((W) => n((K) => Dn(
                          F(E, S, !1),
                          n,
                          e,
                          (V, D) => B(F(V._1, V._2, !1), D),
                          (V, D) => n((M) => n((Z) => vl(
                            V,
                            n,
                            e,
                            (tt, j) => B(F(tt._1, tt._2, !1), j),
                            (tt, j) => n((ut) => {
                              const lt = V._3 && !tt._3 ? F(tt._1, tt._2, !0) : tt;
                              return n((qt) => Q(lt, v("Just", j)));
                            })
                          )))
                        )));
                      }));
                    });
                  })
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), sv = (t, n, e, r, o) => n((i) => fr("-edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => _e(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = At(Ln)("source node identifier"), $ = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => _e(
              T,
              n,
              e,
              r,
              (b, L) => n((C) => {
                const H = At(Ln)("target node identifier"), X = T._3 && !b._3 ? F(b._1, b._2, !0) : b;
                return n((Y) => H(
                  X,
                  n,
                  e,
                  r,
                  (G, R) => n((nt) => o(
                    X._3 && !G._3 ? F(G._1, G._2, !0) : G,
                    ze("DelEdge", { from: y, to: R })
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), uv = (t, n, e, r, o) => n((i) => fr("-node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => _e(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = At(Ln)("node identifier"), $ = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = ae((b, L, C, H, X) => {
              const Y = b._3;
              return ov(b, L, C, (G, R) => H(F(G._1, G._2, Y), R), X);
            }), w = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((b) => T(
              w,
              n,
              e,
              r,
              (L, C) => n((H) => o(
                w._3 && !L._3 ? F(L._1, L._2, !0) : L,
                ze("DelNode", { id: y, via: St(Ut.foldr, C) })
              ))
            ));
          })
        ));
      })
    ));
  })
)), cv = (t, n, e, r, o) => n((i) => fr("enter")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => _e(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = At(Ln)("node identifier"), $ = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => o(
            $._3 && !m._3 ? F(m._1, m._2, !0) : m,
            ze("Enter", { id: y })
          ))
        ));
      })
    ));
  })
)), av = (t, n, e, r, o) => n((i) => fr("exit")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => o(t._3 && !s._3 ? F(s._1, s._2, !0) : s, rT))
)), fv = (t, n, e, r, o) => n((i) => fr("~edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => _e(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = At(Ln)("source node identifier"), $ = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => _e(
              T,
              n,
              e,
              r,
              (b, L) => n((C) => {
                const H = At(Ln)("target node identifier"), X = T._3 && !b._3 ? F(b._1, b._2, !0) : b;
                return n((Y) => H(
                  X,
                  n,
                  e,
                  r,
                  (G, R) => n((nt) => {
                    const et = X._3 && !G._3 ? F(G._1, G._2, !0) : G;
                    return n((z) => re(
                      et,
                      n,
                      e,
                      r,
                      (Q, E) => n((S) => {
                        const O = At(no("->"))("'->'"), P = et._3 && !Q._3 ? F(Q._1, Q._2, !0) : Q;
                        return n((B) => O(
                          P,
                          n,
                          e,
                          r,
                          (W, K) => n((V) => {
                            const D = P._3 && !W._3 ? F(W._1, W._2, !0) : W;
                            return n((M) => re(
                              D,
                              n,
                              e,
                              r,
                              (Z, tt) => n((j) => {
                                const ut = At(Ln)("new source node identifier"), lt = D._3 && !Z._3 ? F(Z._1, Z._2, !0) : Z;
                                return n((qt) => ut(
                                  lt,
                                  n,
                                  e,
                                  r,
                                  (wt, Ht) => n((pt) => {
                                    const xt = lt._3 && !wt._3 ? F(wt._1, wt._2, !0) : wt;
                                    return n(($t) => _e(
                                      xt,
                                      n,
                                      e,
                                      r,
                                      (mt, gt) => n((_t) => {
                                        const it = At(Ln)("new target node identifier"), at = xt._3 && !mt._3 ? F(mt._1, mt._2, !0) : mt;
                                        return n((Jt) => it(
                                          at,
                                          n,
                                          e,
                                          r,
                                          (Nt, bt) => n((Dt) => o(
                                            at._3 && !Nt._3 ? F(Nt._1, Nt._2, !0) : Nt,
                                            ze("RepointEdge", { from: y, to: R, newFrom: Ht, newTo: bt })
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
)), gv = (t, n, e, r, o) => n((i) => fr("seed")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => Dn(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = At(rv)("integer (seed value)"), $ = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => re(
              T,
              n,
              e,
              r,
              (b, L) => n((C) => o(T._3 && !b._3 ? F(b._1, b._2, !0) : b, y))
            ));
          })
        ));
      })
    ));
  })
)), ti = /* @__PURE__ */ zT(/* @__PURE__ */ (() => {
  const t = At(Zt((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (c, a) => e((g) => e((_) => {
      const d = n._3 && !c._3 ? F(c._1, c._2, !0) : c;
      return re(d, e, r, o, (l, h) => e(($) => i(d._3 && !l._3 ? F(l._1, l._2, !0) : l, h)));
    }))
  )));
})())(/* @__PURE__ */ At(/* @__PURE__ */ (() => {
  const t = At(Zt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => re(
    n,
    e,
    r,
    o,
    (c, a) => e((g) => e((_) => {
      const d = n._3 && !c._3 ? F(c._1, c._2, !0) : c;
      return t(d, e, r, o, (l, h) => e(($) => i(d._3 && !l._3 ? F(l._1, l._2, !0) : l, h)));
    }))
  )));
})())("closing '}'")), lv = /* @__PURE__ */ ti((t, n, e, r, o) => n((i) => {
  const s = (a, g) => n((_) => (() => {
    if (g.tag === "Nothing")
      return (d, l, h, $, p) => p(d, I);
    if (g.tag === "Just") {
      const d = g._1, l = ae((() => {
        const h = At(Zt(($) => $ === ","))("','");
        return ($, p, m, y, N) => {
          const T = $._3;
          return p((w) => p((b) => p((L) => p((C) => p((H) => p((X) => Dn(
            $,
            p,
            m,
            (Y, G) => y(F(Y._1, Y._2, T), G),
            (Y, G) => p((R) => p((nt) => {
              const et = $._3 && !Y._3 ? F(Y._1, Y._2, !0) : Y;
              return h(
                et,
                p,
                m,
                (z, Q) => y(F(z._1, z._2, T), Q),
                (z, Q) => p((E) => {
                  const S = et._3 && !z._3 ? F(z._1, z._2, !0) : z;
                  return p((O) => p((P) => {
                    const B = $._3 && !S._3 ? F(S._1, S._2, !0) : S;
                    return Dn(
                      B,
                      p,
                      m,
                      (W, K) => y(F(W._1, W._2, T), K),
                      (W, K) => p((V) => {
                        const D = B._3 && !W._3 ? F(W._1, W._2, !0) : W;
                        return p((M) => p((Z) => {
                          const tt = $._3 && !D._3 ? F(D._1, D._2, !0) : D;
                          return lf(
                            tt,
                            p,
                            m,
                            (j, ut) => y(F(j._1, j._2, T), ut),
                            (j, ut) => p((lt) => N(tt._3 && !j._3 ? F(j._1, j._2, !0) : j, ut))
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
      return (h, $, p, m, y) => $((N) => l(
        h,
        $,
        p,
        m,
        (T, w) => $((b) => y(
          h._3 && !T._3 ? F(T._1, T._2, !0) : T,
          UT([d, ...St(Ut.foldr, w)])
        ))
      ));
    }
    f();
  })()(t._3 && !a._3 ? F(a._1, a._2, !0) : a, n, e, r, o)), u = t._1, c = t._2;
  return n((a) => n((g) => lf(
    F(u, c, !1),
    n,
    e,
    (_, d) => n((l) => s(t, x)),
    (_, d) => n((l) => s(_, v("Just", d)))
  )));
})), _v = (t, n, e, r, o) => n((i) => fr("+node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => _e(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = At(Ln)("node identifier"), $ = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => n((b) => Dn(
              T,
              n,
              e,
              r,
              (L, C) => n((H) => {
                const X = Zt((G) => G === `
` || G === "\r" || G === "#" || G === "}" || G === "{"), Y = T._3 && !L._3 ? F(L._1, L._2, !0) : L;
                return n((G) => {
                  const R = (z, Q) => n((E) => (Q ? ((S, O, P, B, W) => W(S, "")) : tv)(
                    Y._3 && !z._3 ? F(z._1, z._2, !0) : z,
                    n,
                    e,
                    r,
                    (S, O) => n((P) => {
                      const B = T._3 && !S._3 ? F(S._1, S._2, !0) : S;
                      return n((W) => {
                        const K = (M, Z) => n((tt) => o(
                          B._3 && !M._3 ? F(M._1, M._2, !0) : M,
                          ze(
                            "AddNode",
                            {
                              id: y,
                              label: O,
                              shape: (() => {
                                const j = KT("shape")(Z);
                                if (j.tag === "Just")
                                  return j._1 === "rectangle" || j._1 === "rect" ? Re : j._1 === "cylinder" || j._1 === "cyl" ? Dc : j._1 === "parallelogram" ? G_ : j._1 === "diamond" ? I_ : j._1 === "ellipse" ? F_ : j._1 === "document" || j._1 === "doc" ? Oc : j._1 === "cloud" ? B_ : Re;
                                if (j.tag === "Nothing")
                                  return Re;
                                f();
                              })()
                            }
                          )
                        )), V = B._1, D = B._2;
                        return n((M) => {
                          const Z = (tt, j) => {
                            const ut = tt._3;
                            return n((lt) => ut ? r(tt, j) : K(B, I));
                          };
                          return n((tt) => n((j) => Dn(
                            F(V, D, !1),
                            n,
                            e,
                            (ut, lt) => Z(F(ut._1, ut._2, !1), lt),
                            (ut, lt) => n((qt) => n((wt) => lv(
                              ut,
                              n,
                              e,
                              (Ht, pt) => Z(F(Ht._1, Ht._2, !1), pt),
                              (Ht, pt) => n((xt) => K(ut._3 && !Ht._3 ? F(Ht._1, Ht._2, !0) : Ht, pt))
                            )))
                          )));
                        });
                      });
                    })
                  )), nt = Y._1, et = Y._2;
                  return n((z) => {
                    const Q = (E, S) => {
                      const O = E._3;
                      return n((P) => O ? r(E, S) : R(Y, !1));
                    };
                    return n((E) => n((S) => n((O) => Cc(
                      F(nt, et, !1),
                      n,
                      e,
                      (P, B) => {
                        const W = P._3;
                        return n((K) => W ? Q(F(nt, et, !1), B) : n((V) => X(
                          F(nt, et, !1),
                          n,
                          e,
                          (D, M) => Q(F(nt, et, !1), M),
                          (D, M) => n((Z) => n((tt) => R(F(nt, et, !1), !0)))
                        )));
                      },
                      (P, B) => n((W) => n((K) => R(F(nt, et, !1), !0)))
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
)), dv = (t, n, e, r, o) => n((i) => ml(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = At(xl([_v, uv, fv, iv, sv, cv, av, ev]))("statement (+node, -node, +edge, -edge, ~edge, enter, exit, or 'a -> b')"), g = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => o(
        g._3 && !d._3 ? F(d._1, d._2, !0) : d,
        Lc("Leaf", { op: l, line: u.line, column: u.column })
      ))
    ));
  })
)), hv = (t, n, e, r, o) => n((i) => Zo("seq")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => ti(Gc(_l))(
    t._3 && !s._3 ? F(s._1, s._2, !0) : s,
    n,
    e,
    r,
    o
  ))
)), pv = (t, n, e, r, o) => n((i) => Zo("par")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => ti(Gc(uT))(
    t._3 && !s._3 ? F(s._1, s._2, !0) : s,
    n,
    e,
    r,
    o
  ))
)), Gc = (t) => {
  const n = ae($v());
  return (e, r, o, i, s) => r((u) => n(
    e,
    r,
    o,
    i,
    (c, a) => r((g) => s(
      e._3 && !c._3 ? F(c._1, c._2, !0) : c,
      t(St(Ut.foldr, a))
    ))
  ));
}, $v = /* @__PURE__ */ pf(() => {
  const t = Sc(At(Zt((n) => n === "}"))("'}'"));
  return (n, e, r, o, i) => e((s) => {
    const u = n._3;
    return e((c) => e((a) => re(
      n,
      e,
      r,
      (g, _) => o(F(g._1, g._2, u), _),
      (g, _) => e((d) => e((l) => {
        const h = n._3 && !g._3 ? F(g._1, g._2, !0) : g;
        return t(
          h,
          e,
          r,
          ($, p) => o(F($._1, $._2, u), p),
          ($, p) => e((m) => {
            const y = h._3 && !$._3 ? F($._1, $._2, !0) : $;
            return e((N) => {
              const T = xl([
                (b, L, C, H, X) => {
                  const Y = b._3;
                  return pv(b, L, C, (G, R) => H(F(G._1, G._2, Y), R), X);
                },
                (b, L, C, H, X) => {
                  const Y = b._3;
                  return hv(b, L, C, (G, R) => H(F(G._1, G._2, Y), R), X);
                },
                dv
              ]), w = n._3 && !y._3 ? F(y._1, y._2, !0) : y;
              return e((b) => T(
                w,
                e,
                r,
                o,
                (L, C) => e((H) => {
                  const X = w._3 && !L._3 ? F(L._1, L._2, !0) : L;
                  return e((Y) => Dn(
                    X,
                    e,
                    r,
                    o,
                    (G, R) => e((nt) => {
                      const et = X._3 && !G._3 ? F(G._1, G._2, !0) : G;
                      return e((z) => MT(
                        et,
                        e,
                        r,
                        o,
                        (Q, E) => e((S) => i(et._3 && !Q._3 ? F(Q._1, Q._2, !0) : Q, C))
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
}), nu = (t) => (n) => (e, r, o, i, s) => r((u) => Zo(t)(
  e,
  r,
  o,
  i,
  (c, a) => r((g) => {
    const _ = e._3 && !c._3 ? F(c._1, c._2, !0) : c;
    return r((d) => nv(
      _,
      r,
      o,
      i,
      (l, h) => r(($) => {
        const p = _._3 && !l._3 ? F(l._1, l._2, !0) : l;
        return r((m) => re(
          p,
          r,
          o,
          i,
          (y, N) => r((T) => {
            const w = ti(Gc(_l)), b = p._3 && !y._3 ? F(y._1, y._2, !0) : y;
            return r((L) => w(
              b,
              r,
              o,
              i,
              (C, H) => r((X) => {
                const Y = b._3 && !C._3 ? F(C._1, C._2, !0) : C;
                return r((G) => re(
                  Y,
                  r,
                  o,
                  i,
                  (R, nt) => r((et) => s(
                    Y._3 && !R._3 ? F(R._1, R._2, !0) : R,
                    { name: v("Just", h), ops: H, kind: n }
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), mv = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => nu("keyframe")(oT)(
    F(i, s, !1),
    n,
    e,
    (c, a) => {
      const g = c._3;
      return n((_) => {
        if (g)
          return r(c, a);
        const d = t._1, l = t._2;
        return n((h) => nu("still")(iT)(
          F(d, l, !1),
          n,
          e,
          ($, p) => {
            const m = $._3;
            return n((y) => m ? r($, p) : nu("title")(sT)(t, n, e, r, o));
          },
          o
        ));
      });
    },
    o
  ));
}, yv = (t, n, e, r, o) => n((i) => Zo("inside")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = At(Ln)("node identifier"), g = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => {
        const $ = g._3 && !d._3 ? F(d._1, d._2, !0) : d;
        return n((p) => re(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => ti(wl)(
              T,
              n,
              e,
              r,
              (b, L) => n((C) => {
                const H = T._3 && !b._3 ? F(b._1, b._2, !0) : b;
                return n((X) => re(
                  H,
                  n,
                  e,
                  r,
                  (Y, G) => n((R) => o(H._3 && !Y._3 ? F(Y._1, Y._2, !0) : Y, { node: l, doc: L }))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), wl = (t, n, e, r, o) => n((i) => {
  const s = (a, g) => n((_) => {
    const d = ae(Nv()), l = t._3 && !a._3 ? F(a._1, a._2, !0) : a;
    return n((h) => d(
      l,
      n,
      e,
      r,
      ($, p) => n((m) => {
        const y = St(Ut.foldr, p);
        return o(
          l._3 && !$._3 ? F($._1, $._2, !0) : $,
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
                return x;
              f();
            })(y),
            interiors: yt((N) => {
              if (N.tag === "TopInside")
                return v("Just", N._1);
              if (N.tag === "TopFrame")
                return x;
              f();
            })(y)
          }
        );
      })
    ));
  }), u = t._1, c = t._2;
  return n((a) => n((g) => gv(
    F(u, c, !1),
    n,
    e,
    (_, d) => {
      const l = _._3;
      return n((h) => l ? r(_, d) : s(t, x));
    },
    (_, d) => n((l) => s(_, v("Just", d)))
  )));
}), Nv = /* @__PURE__ */ pf(() => PT.defer((t) => (n, e, r, o, i) => {
  const s = n._1, u = n._2;
  return e((c) => e((a) => yv(
    F(s, u, !1),
    e,
    r,
    (g, _) => e((d) => e((l) => mv(n, e, r, o, (h, $) => e((p) => i(h, gf("TopFrame", $)))))),
    (g, _) => e((d) => i(g, gf("TopInside", _)))
  )));
})), xv = /* @__PURE__ */ (() => {
  const t = At((n, e, r, o, i) => e((s) => e((u) => re(
    n,
    e,
    r,
    o,
    (c, a) => e((g) => e((_) => {
      const d = n._3 && !c._3 ? F(c._1, c._2, !0) : c;
      return Cc(
        d,
        e,
        r,
        o,
        (l, h) => e(($) => i(d._3 && !l._3 ? F(l._1, l._2, !0) : l, h))
      );
    }))
  ))))("'keyframe', 'still', 'title', 'inside', or end of input");
  return (n, e, r, o, i) => e((s) => e((u) => e((c) => e((a) => re(
    n,
    e,
    r,
    o,
    (g, _) => e((d) => e((l) => {
      const h = n._3 && !g._3 ? F(g._1, g._2, !0) : g;
      return wl(
        h,
        e,
        r,
        o,
        ($, p) => e((m) => {
          const y = h._3 && !$._3 ? F($._1, $._2, !0) : $;
          return e((N) => e((T) => {
            const w = n._3 && !y._3 ? F(y._1, y._2, !0) : y;
            return t(
              w,
              e,
              r,
              o,
              (b, L) => e((C) => i(w._3 && !b._3 ? F(b._1, b._2, !0) : b, p))
            );
          }));
        })
      );
    }))
  )))));
})(), Jv = (t) => {
  const n = BT(t)(xv);
  if (n.tag === "Left")
    return Pt("Left", { msg: n._1._1, line: n._1._2.line, column: n._1._2.column });
  if (n.tag === "Right")
    return Pt("Right", n._1);
  f();
}, Tv = (t) => {
  const n = Jv(t);
  if (n.tag === "Left")
    return Pt("Left", n._1.msg);
  if (n.tag === "Right")
    return Pt("Right", n._1);
  f();
};
function vv(t, n, e, r) {
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
function di(t) {
  return function(n) {
    return function(e) {
      return function() {
        e.setAttribute(t, n);
      };
    };
  };
}
const wv = function() {
  return window;
};
function bv(t) {
  return function(n) {
    return function() {
      return n.requestAnimationFrame(t);
    };
  };
}
const kv = (t) => t, Lv = (t) => () => t.clientWidth || 0, Ev = (t) => () => t.clientHeight || 0, Sv = () => window.devicePixelRatio || 1, Cv = (t, n) => {
  n.innerHTML = t;
}, hi = (t, n, e) => {
  t.style.setProperty(n, e);
}, Pv = (t) => (n) => t === n, bl = (t) => t, kl = (t, n, e) => ({ tag: t, _1: n, _2: e }), Ll = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Av = (t) => (n) => {
  const e = ct.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Gv = /* @__PURE__ */ kl("AutoSize"), _f = /* @__PURE__ */ bl("CanvasRenderer"), Iv = /* @__PURE__ */ bl("SvgRenderer"), Fv = (t) => (n) => {
  const e = t - n * rt($n(Te(t / n)));
  return n <= 0 ? 0 : e < 0 ? e + n : e;
}, Bv = (t) => J((n) => (e) => {
  const r = t(e);
  return () => (n(), r());
})(() => {
}), El = () => O1() / 1e3, eu = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
  const g = Kn(s.layout), _ = W_(s.layout), d = { center: { x: _.x + _.w / 2, y: g.y + g.h / 2 }, zoom: oc(s.layout)(g)(0) }, l = Zf(s.layout)(d), h = () => {
    const N = El(), T = c.value;
    return c.value = N, T === 0 ? 0 : N - T;
  }, $ = Np(s)(Ll(a)(s.totalDuration)), p = i ? $ : { ...$, levels: q((N) => ({ ...N, state: { ...N.state, frameTitle: "" } }))($.levels) }, m = s.dives.length === 0 && (l.w + 48) * 1.0909090909090908 <= 1100 && (l.h + 48) * 1.0909090909090908 <= 1400, y = m ? { ...p, camera: d, levels: q((N) => ({ ...N, state: { ...N.state, camera: d } }))(p.levels) } : p;
  if (n === "CanvasRenderer")
    return () => {
      const N = h(), T = kv(t), w = Ls({ padding: 8, outputAspect: x })(y), b = (() => {
        if (e.tag === "FixedSize")
          return { w: e._1, h: e._2 };
        if (e.tag === "AutoSize") {
          if (m)
            return { w: w.vw * 1.0909090909090908, h: w.vh * 1.0909090909090908 };
          const Q = Lv(t)(), E = Ev(t)();
          return {
            w: Q,
            h: E <= 0 ? w.vw <= 0 ? Q : Q * w.vh / w.vw : E
          };
        }
        f();
      })(), L = Sv(), C = b.w * L, H = b.h * L, X = z1(T)(), Y = Y1(T)(), G = X1(T)(C);
      X !== C && G();
      const R = V1(T)(H);
      if (Y !== H && R(), e.tag === "FixedSize")
        hi(t, "width", sn($n(Me(b.w))) + "px"), hi(t, "height", sn($n(Me(b.h))) + "px");
      else if (e.tag === "AutoSize") {
        const Q = sn($n(Me(b.w))) + "px";
        m && (hi(t, "width", Q), hi(t, "height", sn($n(Me(b.h))) + "px"));
      } else
        f();
      const nt = q1(T)();
      Ue(nt)(), xi(nt)({ scaleX: L, scaleY: L })();
      const et = u.value, z = SJ(r)(o)(nt)({ width: b.w, height: b.h })(y)(N)(et)();
      return u.value = z, Ke(nt)();
    };
  if (n === "SvgRenderer")
    return () => {
      const N = h(), T = u.value, w = KJ((() => {
        if (e.tag === "AutoSize")
          return x;
        if (e.tag === "FixedSize")
          return e._1 <= 0 || e._2 <= 0 ? x : v("Just", e._1 / e._2);
        f();
      })())(r)(o)(y)(N)(T);
      return u.value = w.springs, di("viewBox")(w.parts.viewBox)(t)(), di("preserveAspectRatio")("xMidYMid meet")(t)(), e.tag === "FixedSize" ? (di("width")(sn($n(Me(e._1))))(t)(), di("height")(sn($n(Me(e._2))))(t)()) : e.tag === "AutoSize" || f(), Cv(w.parts.body, t);
    };
  f();
}, Rv = (t) => {
  const n = Tv(t);
  if (n.tag === "Left")
    return Pt("Left", n._1);
  if (n.tag === "Right") {
    const e = pl(n._1)(dl)._1;
    if (e.tag === "Left")
      return Pt("Left", e._1.msg);
    if (e.tag === "Right")
      return Pt("Right", e._1);
  }
  f();
}, ru = (t) => (n) => {
  const e = Mt((r) => r.startT <= n && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return e._1.scene._1.to;
    if (e._1.scene.tag === "DataFlow")
      return e._1.scene._1.keyframe;
    if (e._1.scene.tag === "Hold")
      return e._1.scene._1;
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
      if (t.spans[r].scene.tag === "Hold")
        return t.spans[r].scene._1;
      if (t.spans[r].scene.tag === "EnterNode" || t.spans[r].scene.tag === "ExitNode")
        return "";
      f();
    }
    return "";
  }
  f();
}, Qv = { ...xd, tokenZoomFloor: 1, minZoom: 1.6, maxZoom: 3.2 }, Wv = (t) => (n) => (e) => (r) => (o) => (i) => (s) => () => {
  let u = 1, c = !0, a = !1, g = 0, _ = 0;
  const d = { value: I }, l = { value: 0 };
  let h = !1, $ = [];
  eu(t)(e)(r)(o)(i)(s)(n)(d)(l)(0)();
  const p = (b) => () => {
    const L = $, C = c, H = { time: b, keyframe: ru(n)(b), playing: C };
    return Bv((X) => X(H))(L)();
  }, m = () => (c = !1, p(g)()), y = () => {
    if (!h && (a = !1, c)) {
      const C = El(), H = _;
      _ = C;
      const X = u, Y = g, G = Fv(H === 0 ? Y + 0 * X : Y + (C - H) * X)(n.totalDuration + 0.8);
      return g = G, eu(t)(e)(r)(o)(i)(s)(n)(d)(l)(G)(), p(G)(), N();
    }
  }, N = () => {
    if (!h && !a) {
      a = !0;
      const C = wv();
      bv(y)(C)();
    }
  }, T = () => (_ = 0, c = !0, N()), w = () => (c || T(), p(g)());
  return T(), {
    play: w,
    pause: m,
    toggle: () => c ? m() : w(),
    seek: (b) => {
      const L = Av(0)(Ll(n.totalDuration)(b));
      return () => (g = L, _ = 0, eu(t)(e)(r)(o)(i)(s)(n)(d)(l)(L)(), p(L)());
    },
    setSpeed: (b) => () => u = b,
    currentTime: () => g,
    currentKeyframe: () => {
      const b = g;
      return ru(n)(b);
    },
    isPlaying: () => c,
    duration: n.totalDuration,
    subscribe: (b) => () => {
      $ = Qt($)(b);
      const C = g, H = c;
      b({ time: C, keyframe: ru(n)(C), playing: H })();
      const X = Pf((Y) => !Pv(Y)(b));
      return () => {
        $ = X($);
      };
    },
    destroy: () => h = !0
  };
}, Hv = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = Rv(n);
  if (u.tag === "Left")
    return () => Pt("Left", u._1);
  if (u.tag === "Right") {
    const c = u._1, a = lg(c);
    return () => {
      const g = a(), _ = _g(c)(), d = kh(Qv)(ph)(c)(dg(g)(_)(c));
      if (d.tag === "Left")
        return Pt("Left", "precompute failed");
      if (d.tag === "Right") {
        const l = Wv(t)(d._1)(e)(r)(o)(i)(s)();
        return Pt("Right", l);
      }
      f();
    };
  }
  f();
}, df = Fn.createElement;
Fn.Fragment;
function Ic(t) {
  return (n) => Array.isArray(n.children) ? df.apply(null, [t, n].concat(n.children)) : df(t, n);
}
function Dv(t) {
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
      const r = Fn.forwardRef(
        (o, i) => t(n)(e(o, i))
      );
      return r.displayName = n, r;
    };
  };
}
const Sl = /* @__PURE__ */ Dv(Ic), Ov = /* @__PURE__ */ Sl("canvas")(), qv = (t, n) => {
  const e = Fn.useRef(n);
  return e.current !== n && !t(e.current, n) && (e.current = n), e.current;
};
Fn.memo;
Fn.memo;
function hf(t, n) {
  const [e, r] = Fn.useState(
    typeof n == "function" ? () => n : n
  );
  return r.hasOwnProperty("$$reactBasicHooks$$cachedSetState") || (r.$$reactBasicHooks$$cachedSetState = (o) => () => r(o)), t(e, r.$$reactBasicHooks$$cachedSetState);
}
function Cl(t, n, e) {
  const r = qv(t, n);
  Fn.useEffect(e, [r]);
}
const zv = Fn.useRef;
function Yv(t) {
  return t.current;
}
Fn.useContext;
Fn.useDebugValue;
Fn.useId;
Fn.useDeferredValue;
Fn.useSyncExternalStore;
Fn.useSyncExternalStore;
function Xv(t, n) {
  return n.displayName = t, n.toString = () => t, n;
}
Fn.useEffectEvent || Fn.experimental_useEffectEvent;
const Pl = (t) => (n) => (e) => () => Cl((r, o) => t.eq(r)(o), n, e), Vv = /* @__PURE__ */ v_(Yv), Uv = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, Kv = (t) => {
  const n = {
    apply: (e) => (r) => () => {
      const o = e(), i = r();
      return o(i);
    },
    Functor0: () => Uv
  };
  return { pure: (e) => () => e, Apply0: () => n };
}, Mv = /* @__PURE__ */ Pl({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), jv = /* @__PURE__ */ Pl({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), Cr = /* @__PURE__ */ ts(rs)(Il), Iu = Kv().pure, Zv = /* @__PURE__ */ Ic(Ov), tw = {
  eq: (t) => (n) => (t.renderer === "CanvasRenderer" ? n.renderer === "CanvasRenderer" : t.renderer === "SvgRenderer" && n.renderer === "SvgRenderer") && (t.sizing.tag === "AutoSize" ? n.sizing.tag === "AutoSize" : t.sizing.tag === "FixedSize" && n.sizing.tag === "FixedSize" && t.sizing._1 === n.sizing._1 && t.sizing._2 === n.sizing._2) && t.source === n.source && (t.theme === "Light" ? n.theme === "Light" : t.theme === "Dark" ? n.theme === "Dark" : t.theme === "Blueprint" ? n.theme === "Blueprint" : t.theme === "Whiteboard" ? n.theme === "Whiteboard" : t.theme === "Isometric" && n.theme === "Isometric") && (t.transparency === "PaintBackground" ? n.transparency === "PaintBackground" : t.transparency === "TransparentBackground" && n.transparency === "TransparentBackground")
}, nw = /* @__PURE__ */ Sl("svg")(), Al = (t) => (n) => {
  const e = Ve(n.theme, x, Yt), r = (() => {
    if (e.tag === "Nothing")
      return "light";
    if (e.tag === "Just")
      return e._1;
    f();
  })(), o = Ve(n.renderer, x, Yt), i = (() => {
    if (o.tag === "Nothing")
      return "canvas";
    if (o.tag === "Just")
      return o._1;
    f();
  })(), s = Ve(n.paused, x, Yt), u = (() => {
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just")
      return s._1;
    f();
  })(), c = r === "light" ? v("Just", of) : r === "dark" ? v("Just", CJ) : r === "blueprint" ? v("Just", PJ) : r === "whiteboard" ? v("Just", AJ) : r === "isometric" ? v("Just", GJ) : x, a = i === "svg" ? v("Just", Iv) : i === "canvas" ? v("Just", _f) : x, g = {
    source: t,
    renderer: (() => {
      if (a.tag === "Nothing")
        return _f;
      if (a.tag === "Just")
        return a._1;
      f();
    })(),
    sizing: (() => {
      const _ = Ve(n.width, x, Yt);
      if (_.tag === "Just") {
        const d = Ve(n.height, x, Yt);
        if (d.tag === "Just")
          return kl("FixedSize", _._1, d._1);
      }
      return Gv;
    })(),
    theme: (() => {
      if (c.tag === "Nothing")
        return of;
      if (c.tag === "Just")
        return c._1;
      f();
    })(),
    transparency: (() => {
      const _ = Ve(n.transparent, x, Yt);
      if (_.tag === "Nothing")
        return !1;
      if (_.tag === "Just")
        return _._1;
      f();
    })() ? FJ : IJ
  };
  return () => {
    const _ = zv(Fl), d = hf((p, m) => k(p, m), x), l = d._1, h = hf((p, m) => k(p, m), { time: 0, keyframe: "", playing: !1 });
    Mv(k(i, r))((() => {
      const p = Fc("[markgraf] unknown renderer " + ou(i) + ", defaulting to canvas"), m = (() => {
        if (a.tag === "Nothing")
          return !0;
        if (a.tag === "Just")
          return !1;
        f();
      })() ? p : () => {
      };
      return () => {
        m();
        const y = Fc("[markgraf] unknown theme " + ou(r) + ", defaulting to light");
        return (() => {
          if (c.tag === "Nothing")
            return !0;
          if (c.tag === "Just")
            return !1;
          f();
        })() && y(), () => {
        };
      };
    })())();
    const $ = Vv(_);
    return Cl(
      (p, m) => tw.eq(p)(m),
      g,
      () => {
        const p = $(), m = Ve(p, x, Yt), y = (() => {
          if (m.tag === "Just")
            return vv(x, Yt, "Element", m._1);
          if (m.tag === "Nothing")
            return x;
          f();
        })();
        if (y.tag === "Nothing")
          return () => {
          };
        if (y.tag === "Just") {
          const N = Hv(y._1)(g.source)(g.renderer)(g.sizing)(g.theme)(g.transparency)(!0)();
          if (N.tag === "Left")
            return Wl("[markgraf] " + N._1)(), () => {
            };
          if (N.tag === "Right") {
            const T = N._1;
            d._2((b) => v("Just", T))();
            const w = T.subscribe((b) => h._2((L) => b))();
            return () => (w(), T.destroy(), d._2((b) => x)());
          }
        }
        f();
      }
    ), jv(k(
      u,
      (() => {
        if (l.tag === "Nothing")
          return !1;
        if (l.tag === "Just")
          return !0;
        f();
      })()
    ))((() => {
      const p = Cr((m) => u ? m.pause : m.play)(l);
      return () => (p(), () => {
      });
    })())(), Iu({
      elementRef: _,
      time: h._1.time,
      keyframe: h._1.keyframe,
      playing: h._1.playing,
      duration: l.tag === "Just" ? l._1.duration : 0,
      ready: (() => {
        if (l.tag === "Nothing")
          return !1;
        if (l.tag === "Just")
          return !0;
        f();
      })(),
      play: Cr((p) => p.play)(l),
      pause: Cr((p) => p.pause)(l),
      toggle: Cr((p) => p.toggle)(l),
      seek: (p) => Cr((m) => m.seek(p))(l),
      setSpeed: (p) => Cr((m) => m.setSpeed(p))(l)
    })();
  };
}, ew = /* @__PURE__ */ Xv(
  "MarkgrafPlayer",
  (t) => {
    const n = Al(t.src)({ renderer: t.renderer, width: t.width, height: t.height, theme: t.theme, transparent: t.transparent, paused: t.paused })(), e = Ve(t.renderer, x, Yt);
    return (() => {
      if (e.tag === "Nothing")
        return "canvas";
      if (e.tag === "Just")
        return e._1;
      f();
    })() === "svg" ? Iu(Ic(nw)({ className: "markgraf-player", ref: n.elementRef }))() : Iu(Zv({ className: "markgraf-player", ref: n.elementRef }))();
  }
), ow = (t, n) => Al(t)(n ?? {}), iw = ew;
export {
  iw as MarkgrafPlayer,
  ow as useMarkgraf
};
