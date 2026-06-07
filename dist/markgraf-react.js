import Fn from "react";
function yf(t) {
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
function Ae(t, n) {
  return n > 0 ? Math.floor(t / n) : n < 0 ? -Math.floor(t / -n) : 0;
}
const Cn = (t) => (n) => t, z = function(t) {
  return function(n) {
    for (var e = n.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = t(n[o]);
    return r;
  };
}, Rl = { map: z }, Nf = (t) => t, un = function(t) {
  return t.toString();
}, xf = function(t) {
  var n = t.toString();
  return isNaN(n + ".0") ? n : n + ".0";
}, Us = function(t) {
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
}, Cu = (t) => t, Jn = /* @__PURE__ */ Cu("LT"), Tn = /* @__PURE__ */ Cu("GT"), Gn = /* @__PURE__ */ Cu("EQ"), v = (t, n) => ({ tag: t, _1: n }), x = /* @__PURE__ */ v("Nothing"), zt = (t) => v("Just", t), Jf = (t) => {
  if (t.tag === "Nothing")
    return !0;
  if (t.tag === "Just")
    return !1;
  f();
}, Tf = (t) => {
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
}, Vi = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldr((o) => {
    const i = r(o);
    return (s) => n.apply(n.Functor0().map((u) => Nf)(i))(s);
  })(t.pure());
}, Bl = (t) => {
  const n = Vi(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, Ql = {
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
}, Dt = {
  foldr: mo,
  foldl: J,
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => Dt.foldr((r) => (o) => t.Semigroup0().append(e(r))(o))(n);
  }
}, Wl = null;
function Ve(t, n, e) {
  return t == null ? n : e(t);
}
const b = (t, n) => ({ tag: "Tuple", _1: t, _2: n }), Oe = (t) => (n) => b(t, n), Ui = (t) => t._2, Ki = (t) => t._1, Hl = function(t) {
  return function() {
    return t;
  };
}, Dl = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return Mi.pure(e(r))();
  },
  Functor0: () => Ol
}, Mi = { pure: Hl, Apply0: () => Dl }, Ol = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, zl = function(t) {
  return function() {
    console.log(t);
  };
}, Gc = function(t) {
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
}, St = (t, n) => ({ tag: t, _1: n }), ql = (t) => St("Right", t), Yl = {
  map: (t) => (n) => {
    if (n.tag === "Left")
      return St("Left", n._1);
    if (n.tag === "Right")
      return St("Right", t(n._1));
    f();
  }
}, vf = {
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
  Functor0: () => Yl
}, Xl = {
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
  Apply0: () => vf
}, Vl = { pure: ql, Apply0: () => vf }, wf = { Applicative0: () => Vl, Bind1: () => Xl }, Ul = (t) => t, Kl = { map: (t) => (n) => t(n) }, kf = { apply: (t) => (n) => t(n), Functor0: () => Kl }, Ml = { bind: (t) => (n) => n(t), Apply0: () => kf }, jl = { pure: Ul, Apply0: () => kf }, tr = { Applicative0: () => jl, Bind1: () => Ml }, co = (t, n) => ({ tag: t, _1: n }), bf = (t) => co("Loop", t), Zl = {
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
  Monad0: () => tr
}, t_ = function(t) {
  return function(n) {
    return function() {
      return t(n());
    };
  };
}, n_ = function(t) {
  return function() {
    return t;
  };
}, e_ = { map: t_ }, r_ = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return Lf.pure(e(r))();
  },
  Functor0: () => e_
}, Lf = { pure: n_, Apply0: () => r_ }, o_ = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, i_ = function(t, n) {
  return n.push(t);
}, s_ = /* @__PURE__ */ o_(i_), u_ = (t, n) => ({ tag: "Iterator", _1: t, _2: n }), c_ = (t) => (n) => (e) => () => {
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
}, a_ = (t) => (n) => () => {
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
var Pu = function(t) {
  return function(n) {
    return t === n;
  };
};
const f_ = Pu, g_ = Pu, Ho = Pu, Gu = function(t) {
  return function(n) {
    return function(e) {
      if (n.length !== e.length) return !1;
      for (var r = 0; r < n.length; r++)
        if (!t(n[r])(e[r])) return !1;
      return !0;
    };
  };
}, le = { eq: Ho }, l_ = { eq: g_ }, Qr = { eq: f_ };
var Au = function(t) {
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
const __ = Au, d_ = Au, h_ = Au, C = { compare: /* @__PURE__ */ h_(Jn)(Gn)(Tn), Eq0: () => le }, at = { compare: /* @__PURE__ */ d_(Jn)(Gn)(Tn), Eq0: () => l_ }, it = { compare: /* @__PURE__ */ __(Jn)(Gn)(Tn), Eq0: () => Qr }, p_ = function(t) {
  return t;
}, $_ = /* @__PURE__ */ (function() {
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
})(), m_ = (t) => t, xr = {
  traverse: (t) => {
    const n = t.Apply0();
    return $_(n.apply)(n.Functor0().map)(t.pure);
  },
  sequence: (t) => xr.traverse(t)(m_),
  Functor0: () => Rl,
  Foldable1: () => Dt
}, It = function(t, n) {
  for (var e = t > n ? -1 : 1, r = new Array(e * (n - t) + 1), o = t, i = 0; o !== n; )
    r[i++] = o, o += e;
  return r[i] = o, r;
};
var y_ = function(t, n) {
  if (t < 1)
    return [];
  var e = new Array(t);
  return e.fill(n);
}, N_ = function(t, n) {
  for (var e = [], r = 0, o = 0; o < t; o++)
    e[r++] = n;
  return e;
};
const x_ = typeof Array.prototype.fill == "function" ? y_ : N_, Et = /* @__PURE__ */ (function() {
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
})(), Qt = function(t, n, e) {
  return e.length === 0 ? t({}) : n(e[0])(e.slice(1));
}, Ef = function(t, n, e, r) {
  for (var o = 0; o < r.length; o++) {
    var i = e(r[o]);
    if (n(i)) return i;
  }
  return t;
}, pr = function(t, n, e, r) {
  for (var o = 0, i = r.length; o < i; o++)
    if (e(r[o])) return t(o);
  return n;
}, Sf = function(t, n, e, r) {
  for (var o = r.length - 1; o >= 0; o--)
    if (e(r[o])) return t(o);
  return n;
}, Cf = function(t, n, e, r, o) {
  if (e < 0 || e > o.length) return n;
  var i = o.slice();
  return i.splice(e, 0, r), t(i);
}, Pf = function(t, n, e, r) {
  if (e < 0 || e >= r.length) return n;
  var o = r.slice();
  return o.splice(e, 1), t(o);
}, nr = function(t, n, e, r, o) {
  if (e < 0 || e >= o.length) return n;
  var i = o.slice();
  return i[e] = r, t(i);
}, wn = function(t) {
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
}, J_ = function(t, n, e) {
  for (var r = e.length, o = n, i = new Array(r), s = 0; s < r; s++)
    o = t(o)(e[s]), i[s] = o;
  return i;
}, T_ = /* @__PURE__ */ (function() {
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
}, kn = function(t, n, e) {
  for (var r = n.length < e.length ? n.length : e.length, o = new Array(r), i = 0; i < r; i++)
    o[i] = t(n[i])(e[i]);
  return o;
}, qn = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (t(n[r])) return !0;
  return !1;
}, Gf = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (!t(n[r])) return !1;
  return !0;
}, Lt = (t) => (n) => T_(
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
), v_ = (t) => (n) => Lt((e) => (r) => t.compare(n(e))(n(r))), Bt = (t) => (n) => (() => {
  const e = s_(n);
  return () => {
    const r = [...t];
    return e(r)(), r;
  };
})()(), Do = (t) => {
  if (t.length === 0)
    return t.length - 1 | 0, x;
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? v("Just", { init: bt(0, t.length - 1 | 0, t), last: t[n] }) : x;
}, w_ = (t) => (n) => (e) => t >= 0 && t < e.length ? nr(zt, x, t, n(e[t]), e) : x, gr = (t) => (n) => {
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
    return r._1 === 0 ? { init: [], rest: n } : { init: bt(0, r._1, n), rest: bt(r._1, n.length, n) };
  if (r.tag === "Nothing")
    return { init: n, rest: [] };
  f();
}, Wr = (t) => (n) => {
  const e = Lt((r) => (o) => t(r._2)(o._2))(Ft(Oe)(n));
  return 0 < e.length ? z(Ui)(v_(it)(Ki)((() => {
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
}, k_ = (t) => (n) => {
  const e = [], o = u_(
    (i) => i >= 0 && i < n.length ? v("Just", n[i]) : x,
    { value: 0 }
  );
  return a_(o)((i) => () => {
    const s = [];
    s.push(i), c_(t(i))(o)(s)(), e.push(s);
  })(), e;
}, Ut = (t) => (n) => {
  const e = pr(zt, x, t, n);
  return e.tag === "Just" ? v("Just", n[e._1]) : x;
}, Af = (t) => (n) => ft(t, n), Dn = (t) => (n) => (e) => {
  const r = pr(zt, x, (o) => t.eq(o)(n), e);
  if (r.tag === "Nothing")
    return !1;
  if (r.tag === "Just")
    return !0;
  f();
}, If = (t) => (n) => Tt(n)(t), yt = (t) => If((n) => {
  const e = t(n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [e._1];
  f();
}), b_ = isFinite, er = Math.abs, L_ = Math.acos, lr = function(t) {
  return function(n) {
    return Math.atan2(t, n);
  };
}, ji = Math.ceil, ie = Math.cos, Zi = Math.exp, Ne = Math.floor, Ac = Math.log, E_ = function(t) {
  return function(n) {
    return Math.min(t, n);
  };
}, Ks = function(t) {
  return function(n) {
    return Math.pow(t, n);
  };
}, fr = Math.round, Kn = Math.sin, Sn = Math.sqrt, S_ = Math.tan, C_ = function(t) {
  return function(n) {
    return function(e) {
      return (e | 0) === e ? t(e) : n;
    };
  };
}, ot = function(t) {
  return t;
}, P_ = function(t) {
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
}, G_ = /* @__PURE__ */ P_(zt)(x), A_ = /* @__PURE__ */ G_(10), Ff = /* @__PURE__ */ C_(zt)(x), yn = (t) => {
  if (!b_(t))
    return 0;
  if (t >= ot(2147483647))
    return 2147483647;
  if (t <= ot(-2147483648))
    return -2147483648;
  const n = Ff(t);
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return n._1;
  f();
}, qt = (t, n, e) => ({ tag: t, _1: n, _2: e }), Yt = /* @__PURE__ */ qt("Nil"), Xt = {
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
          u = qt("Cons", d._1, _), c = d._2;
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
}, I_ = function(t) {
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
}, F_ = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, R_ = { unfoldr1: /* @__PURE__ */ I_(Jf)(F_)(Ki)(Ui) }, B_ = function(t) {
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
}, Q_ = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, ee = {
  unfoldr: /* @__PURE__ */ B_(Jf)(Q_)(Ki)(Ui),
  Unfoldable10: () => R_
}, Ot = (t, n, e, r, o, i, s) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s }), Mn = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), ti = (t, n, e) => ({ tag: "Split", _1: t, _2: n, _3: e }), Ic = (t, n, e) => ({ tag: "SplitLast", _1: t, _2: n, _3: e }), I = /* @__PURE__ */ Ot("Leaf"), we = /* @__PURE__ */ Mn("IterLeaf"), an = (t, n, e, r) => {
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
    return r.tag === "Leaf" ? Ot("Node", 1, 1, t, n, I, I) : r.tag === "Node" && r._1 > 1 ? r._5.tag === "Node" && (() => {
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
}, Hr = (t, n, e) => {
  if (e.tag === "Leaf")
    return ti(x, I, I);
  if (e.tag === "Node") {
    const r = t(n)(e._3);
    if (r === "LT") {
      const o = Hr(t, n, e._5);
      return ti(o._1, o._2, Yn(e._3, e._4, o._3, e._6));
    }
    if (r === "GT") {
      const o = Hr(t, n, e._6);
      return ti(o._1, Yn(e._3, e._4, e._5, o._2), o._3);
    }
    if (r === "EQ")
      return ti(v("Just", e._4), e._5, e._6);
  }
  f();
}, Rf = (t, n, e, r) => {
  if (r.tag === "Leaf")
    return Ic(t, n, e);
  if (r.tag === "Node") {
    const o = Rf(r._3, r._4, r._5, r._6);
    return Ic(o._1, o._2, Yn(t, n, e, o._3));
  }
  f();
}, Oo = (t, n) => {
  if (t.tag === "Leaf")
    return n;
  if (t.tag === "Node") {
    const e = Rf(t._3, t._4, t._5, t._6);
    return Yn(e._1, e._2, e._3, n);
  }
  f();
}, Ie = (t, n, e) => {
  if (n.tag === "Leaf")
    return I;
  if (e.tag === "Leaf")
    return n;
  if (e.tag === "Node") {
    const r = Hr(t, e._3, n);
    return Oo(Ie(t, r._2, e._5), Ie(t, r._3, e._6));
  }
  f();
}, mi = (t, n, e, r) => {
  if (e.tag === "Leaf" || r.tag === "Leaf")
    return I;
  if (r.tag === "Node") {
    const o = Hr(t, r._3, e), i = mi(t, n, o._2, r._5), s = mi(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return Yn(r._3, n(o._1._1)(r._4), i, s);
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
    const o = Hr(t, r._3, e), i = Pn(t, n, o._2, r._5), s = Pn(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return Yn(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return Yn(r._3, r._4, i, s);
  }
  f();
}, W_ = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return I;
    if (r.tag === "Node") {
      const o = n(r._3)(r._4);
      if (o.tag === "Just")
        return Yn(r._3, o._1, e(r._5), e(r._6));
      if (o.tag === "Nothing")
        return Oo(e(r._5), e(r._6));
    }
    f();
  };
  return e;
}, H_ = (t) => (n) => (r) => {
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
}, ke = /* @__PURE__ */ H_((t, n, e) => v("Just", b(b(t, n), e)))((t) => x), wt = (t) => (n) => (e) => (r) => {
  const o = (i) => {
    if (i.tag === "Leaf")
      return Ot("Node", 1, 1, e, r, I, I);
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
      return Ot("Node", 1, 1, n, e, I, I);
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
}, nn = (t) => (n) => n.foldl((e) => (r) => U(t)(r._1)(r._2)(e))(I), yo = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return I;
    if (r.tag === "Node") {
      const o = t.compare(n)(r._3);
      if (o === "LT")
        return Yn(r._3, r._4, e(r._5), r._6);
      if (o === "GT")
        return Yn(r._3, r._4, r._5, e(r._6));
      if (o === "EQ")
        return Oo(r._5, r._6);
    }
    f();
  };
  return e;
}, Bf = (t) => {
  const n = t.compare;
  return (e) => (r) => (o) => {
    const i = Hr(n, r, o), s = e(i._1);
    if (s.tag === "Nothing")
      return Oo(i._2, i._3);
    if (s.tag === "Just")
      return Yn(r, s._1, i._2, i._3);
    f();
  };
}, sn = function(t) {
  return function(n) {
    return t + n | 0;
  };
}, Dr = function(t) {
  return function(n) {
    return t + n;
  };
}, Me = function(t) {
  return function(n) {
    if (n === 0) return 0;
    var e = Math.abs(n);
    return (t % e + e) % e;
  };
}, on = function(t) {
  return function(n) {
    return t.length === 0 ? n : n.length === 0 ? t : t.concat(n);
  };
}, D_ = { append: on }, O_ = { mempty: [], Semigroup0: () => D_ };
function Iu(t) {
  return function(n) {
    return function(e) {
      return t.apply(e, [n]);
    };
  };
}
const z_ = Iu(Number.prototype.toPrecision), q_ = Iu(Number.prototype.toFixed), Y_ = Iu(Number.prototype.toExponential), Qf = (t, n) => ({ tag: t, _1: n }), Wf = (t) => (n) => (e) => {
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
}, Hf = (t) => {
  if (t.tag === "Precision")
    return z_(t._1);
  if (t.tag === "Fixed")
    return q_(t._1);
  if (t.tag === "Exponential")
    return Y_(t._1);
  f();
};
function X_() {
  return Date.now();
}
function V_(t) {
  return function() {
    return t.getContext("2d");
  };
}
function U_(t) {
  return function() {
    return t.width;
  };
}
function K_(t) {
  return function() {
    return t.height;
  };
}
function M_(t) {
  return function(n) {
    return function() {
      t.width = n;
    };
  };
}
function j_(t) {
  return function(n) {
    return function() {
      t.height = n;
    };
  };
}
function Fu(t) {
  return function(n) {
    return function() {
      t.lineWidth = n;
    };
  };
}
function Z_(t) {
  return function(n) {
    return function() {
      t.fillStyle = n;
    };
  };
}
function t1(t) {
  return function(n) {
    return function() {
      t.strokeStyle = n;
    };
  };
}
function vs(t) {
  return function(n) {
    return function() {
      t.lineCap = n;
    };
  };
}
function ws(t) {
  return function(n) {
    return function() {
      t.lineJoin = n;
    };
  };
}
function n1(t) {
  return function(n) {
    return function() {
      t.globalCompositeOperation = n;
    };
  };
}
function e1(t) {
  return function(n) {
    return function() {
      t.globalAlpha = n;
    };
  };
}
function Df(t) {
  return function() {
    t.beginPath();
  };
}
function Ru(t) {
  return function() {
    t.stroke();
  };
}
function Bu(t) {
  return function() {
    t.fill();
  };
}
function r1(t) {
  return function() {
    t.clip();
  };
}
function ro(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.lineTo(n, e);
      };
    };
  };
}
function Of(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.moveTo(n, e);
      };
    };
  };
}
function zf(t) {
  return function() {
    t.closePath();
  };
}
function o1(t) {
  return function(n) {
    return function() {
      t.fillRect(n.x, n.y, n.width, n.height);
    };
  };
}
function i1(t) {
  return function(n) {
    return function() {
      t.clearRect(n.x, n.y, n.width, n.height);
    };
  };
}
function yi(t) {
  return function(n) {
    return function() {
      t.scale(n.scaleX, n.scaleY);
    };
  };
}
function Ms(t) {
  return function(n) {
    return function() {
      t.translate(n.translateX, n.translateY);
    };
  };
}
function s1(t) {
  return function(n) {
    return function() {
      t.transform(n.a, n.b, n.c, n.d, n.e, n.f);
    };
  };
}
function u1(t) {
  return function(n) {
    return function() {
      t.textAlign = n;
    };
  };
}
function c1(t) {
  return function(n) {
    return function() {
      t.textBaseline = n;
    };
  };
}
function a1(t) {
  return function(n) {
    return function() {
      t.font = n;
    };
  };
}
function f1(t) {
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
function cr(t) {
  return function() {
    t.save();
  };
}
function ar(t) {
  return function() {
    t.restore();
  };
}
function oo(t) {
  return function(n) {
    return function() {
      t.quadraticCurveTo(n.cpx, n.cpy, n.x, n.y);
    };
  };
}
function g1(t) {
  return function(n) {
    return function() {
      t.bezierCurveTo(n.cp1x, n.cp1y, n.cp2x, n.cp2y, n.x, n.y);
    };
  };
}
const qf = (t) => t, Qu = (t) => t, Wu = (t) => t, Hu = (t) => t, ts = (t) => t, l1 = /* @__PURE__ */ ts("BaselineTop"), _1 = /* @__PURE__ */ ts("BaselineMiddle"), d1 = /* @__PURE__ */ ts("BaselineAlphabetic"), h1 = /* @__PURE__ */ ts("BaselineBottom"), p1 = /* @__PURE__ */ Hu("AlignLeft"), $1 = /* @__PURE__ */ Hu("AlignRight"), m1 = /* @__PURE__ */ Hu("AlignCenter"), Du = /* @__PURE__ */ Wu("BevelJoin"), ns = /* @__PURE__ */ Wu("RoundJoin"), Ou = /* @__PURE__ */ Wu("MiterJoin"), zu = /* @__PURE__ */ Qu("Round"), qu = /* @__PURE__ */ Qu("Square"), Yu = /* @__PURE__ */ Qu("Butt"), y1 = /* @__PURE__ */ qf("SourceOver"), N1 = /* @__PURE__ */ qf("Difference"), x1 = (t) => (n) => c1(t)((() => {
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
})()), J1 = (t) => (n) => u1(t)((() => {
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
})()), es = (t) => (n) => {
  if (n === "BevelJoin")
    return ws(t)("bevel");
  if (n === "RoundJoin")
    return ws(t)("round");
  if (n === "MiterJoin")
    return ws(t)("miter");
  f();
}, Xu = (t) => (n) => {
  if (n === "Round")
    return vs(t)("round");
  if (n === "Square")
    return vs(t)("square");
  if (n === "Butt")
    return vs(t)("butt");
  f();
}, Fc = (t) => (n) => n1(t)((() => {
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
          return o(i._5, qt("Cons", i._3, o(i._6, s)));
        f();
      };
      return o(r, Yt);
    })());
  }
}, T1 = (t) => {
  const n = {
    append: (() => {
      const e = t.compare;
      return (r) => (o) => Pn(e, Cn, r, o);
    })()
  };
  return { mempty: I, Semigroup0: () => n };
}, ao = function(t) {
  return function(n) {
    if (t >= 0 && t < n.length) return n.charAt(t);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
}, Jr = function(t) {
  return t.join("");
}, sr = function(t) {
  return t.split("");
}, rs = function(t) {
  return t;
}, rr = function(t) {
  return t.length;
}, Rc = function(t) {
  return function(n) {
    return n.substr(0, t);
  };
}, No = function(t) {
  return function(n) {
    return n.substring(t);
  };
}, v1 = function(t) {
  return function(n) {
    return { before: n.substring(0, t), after: n.substring(t) };
  };
}, w1 = (t) => (n) => {
  const e = v1(rr(t))(n);
  return e.before === t ? v("Just", e.after) : x;
}, k1 = function(t) {
  var n = null;
  return function() {
    return t === void 0 || (n = t(), t = void 0), n;
  };
}, b1 = function(t) {
  return t();
}, L1 = function(n) {
  return function(e) {
    return function() {
      return n(e);
    };
  };
}, E1 = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, S1 = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, $r = (t) => BigInt(t), C1 = (t) => Number(t), di = (t) => (n) => t + n, hi = (t) => (n) => t * n, js = (t) => (n) => t - n, Yf = 0n, Ni = 1n, Xf = (t) => (n) => t ^ n, xo = (t) => (n) => t & n, Vu = (t) => (n) => t << n, Zs = (t) => (n) => t >> n, P1 = (t) => (n) => t == n, G1 = (t) => (n) => t === n ? 0 : t > n ? 1 : -1, A1 = { eq: P1 }, Bc = {
  compare: (t) => (n) => {
    const e = G1(t)(n);
    return e === 1 ? Tn : e === 0 ? Gn : Jn;
  },
  Eq0: () => A1
}, I1 = /* @__PURE__ */ E1(zt)(x), F1 = /* @__PURE__ */ S1(zt)(x), Vf = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = at.compare(n._1)(e._1);
      return r === "LT" ? Jn : r === "GT" ? Tn : at.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), R1 = (t) => (n) => er(t._1 - n._1) + er(t._2 - n._2), Tr = (t) => t, os = (t) => t, dn = /* @__PURE__ */ os("North"), hn = /* @__PURE__ */ os("South"), Ce = /* @__PURE__ */ os("East"), Pe = /* @__PURE__ */ os("West"), Fe = /* @__PURE__ */ Tr("Rectangle"), Qc = /* @__PURE__ */ Tr("Cylinder"), B1 = /* @__PURE__ */ Tr("Parallelogram"), Q1 = /* @__PURE__ */ Tr("Diamond"), W1 = /* @__PURE__ */ Tr("Ellipse"), Wc = /* @__PURE__ */ Tr("Document"), H1 = /* @__PURE__ */ Tr("Cloud"), Hc = (t) => t, Uf = /* @__PURE__ */ J(Dr)(0), D1 = (t) => (n) => (e) => {
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
}, Jo = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Dc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, Kf = (t) => {
  const n = { top: 0, bottom: 0, left: 0, right: 0 }, e = t.shape === "Cloud" ? { ...n, top: t.h * 0.38 } : t.shape === "Cylinder" ? { ...n, bottom: 5 } : t.shape === "Document" ? { ...n, bottom: t.h * 0.05 } : n;
  return [{ x: t.x - e.left, y: t.y - e.top }, { x: t.x + t.w + e.right, y: t.y + t.h + e.bottom }];
}, mr = (t) => (n) => {
  const e = kn(
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
  ), r = Uf(z((s) => s.len)(e)), o = D1(0)(r)(n * r), i = (s) => (u) => (c) => {
    let a = s, g = u, _ = c, d = !0, l;
    for (; d; ) {
      const h = a, p = g, $ = _, m = Qt((y) => x, (y) => (N) => v("Just", { head: y, tail: N }), h);
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
  return 0 < t.length ? v("Just", i(e)(o)(t[0])) : x;
}, O1 = (t) => (n) => {
  const e = me(1)(t.w), r = me(1)(t.h), o = me(1)(n.w - 8), i = me(1)(n.h - 8), s = Jo(o / e)(i / r);
  return { scale: s, tx: n.x + 4 + (o - e * s) / 2 - t.x * s, ty: n.y + 4 + (i - r * s) / 2 - t.y * s };
}, zo = (t) => Uf(kn(
  (n) => (e) => {
    const r = e.y - n.y, o = e.x - n.x;
    return Sn(o * o + r * r);
  },
  t,
  bt(1, t.length, t)
)), z1 = (t) => (n) => (e) => (r) => (o) => {
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
  })(), g = me(0.05)(1 - o.pre - o.post), _ = r < o.pre ? 0 : r > 1 - o.post ? 1 : (r - o.pre) / g, d = a.x - e.x, l = 2 * (() => {
    const T = a.y - e.y;
    return (d < 0 ? -d : d) + (T < 0 ? -T : T);
  })(), h = s.x - n.x, p = 2 * (() => {
    const T = s.y - n.y;
    return (h < 0 ? -h : h) + (T < 0 ? -T : T);
  })(), $ = p + zo(t) + l, m = $ <= 1e-4 ? 1 : 1 - l / $, y = $ <= 1e-4 ? 0 : p / $;
  if (_ <= y) {
    const T = y <= 1e-4 ? 1 : _ / y;
    return { x: n.x + (s.x - n.x) * T, y: n.y + (s.y - n.y) * T };
  }
  if (_ >= m) {
    const T = m >= 1 ? 0 : (_ - m) / (1 - m);
    return { x: a.x + (e.x - a.x) * T, y: a.y + (e.y - a.y) * T };
  }
  const N = mr(t)((_ - y) / me(1e-4)(m - y));
  if (N.tag === "Nothing")
    return s;
  if (N.tag === "Just")
    return N._1;
  f();
}, q1 = (t) => {
  const n = (r, o) => {
    if (r.tag === "Leaf")
      return o;
    if (r.tag === "Node")
      return n(r._5, qt("Cons", r._4, n(r._6, o)));
    f();
  }, e = Qt(
    (r) => x,
    (r) => (o) => v("Just", { head: r, tail: o }),
    Tt(Et(Xt.foldr, n(t.nodes, Yt)))(Kf)
  );
  if (e.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (e.tag === "Just") {
    const r = J((o) => (i) => ({ minX: Jo(o.minX)(i.x), minY: Jo(o.minY)(i.y), maxX: me(o.maxX)(i.x), maxY: me(o.maxY)(i.y) }))({
      minX: e._1.head.x,
      minY: e._1.head.y,
      maxX: e._1.head.x,
      maxY: e._1.head.y
    })(e._1.tail);
    return { x: r.minX, y: r.minY, w: r.maxX - r.minX, h: r.maxY - r.minY };
  }
  f();
}, Uu = { scale: 1, tx: 0, ty: 0 }, jn = (t) => {
  const n = Qt(
    (e) => x,
    (e) => (r) => v("Just", { head: e, tail: r }),
    [
      ...(() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, qt("Cons", r._4, e(r._6, o)));
          f();
        };
        return Tt(Et(Xt.foldr, e(t.nodes, Yt)))(Kf);
      })(),
      ...zn((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, qt("Cons", r._4, e(r._6, o)));
          f();
        };
        return Et(Xt.foldr, e(t.edges, Yt));
      })()),
      ...zn((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, qt("Cons", r._4, e(r._6, o)));
          f();
        };
        return Et(Xt.foldr, e(t.chipExtras, Yt));
      })())
    ]
  );
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: Jo(r.minX)(o.x), minY: Jo(r.minY)(o.y), maxX: me(r.maxX)(o.x), maxY: me(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, Y1 = (t) => (n) => ((r) => (o) => (i) => {
  let s = r, u = o, c = i, a = !0, g;
  for (; a; ) {
    const _ = s, d = u, l = c, h = Qt((p) => x, (p) => ($) => v("Just", { head: p, tail: $ }), d);
    if (h.tag === "Nothing") {
      a = !1, g = l;
      continue;
    }
    if (h.tag === "Just") {
      const p = Dc(h._1.head)(_.interiors);
      if (p.tag === "Nothing") {
        a = !1, g = l;
        continue;
      }
      if (p.tag === "Just") {
        s = p._1, u = h._1.tail, c = (() => {
          const $ = O1(jn(p._1.layout))((() => {
            const m = Dc(h._1.head)(_.layout.nodes);
            if (m.tag === "Nothing")
              return { x: 0, y: 0, w: 1, h: 1, label: "", shape: Fe };
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
})(t)(n)(Uu), Mf = (t) => t, Oc = (t, n) => ({ tag: t, _1: n }), Ku = (t) => t, qo = (t, n) => ({ tag: t, _1: n }), Mu = (t, n) => ({ tag: t, _1: n }), Yo = /* @__PURE__ */ Ku("Animated"), X1 = /* @__PURE__ */ Ku("StaticStill"), V1 = /* @__PURE__ */ Ku("TitleCard"), U1 = /* @__PURE__ */ Mu("First"), K1 = /* @__PURE__ */ Mf("Forward"), M1 = /* @__PURE__ */ Mf("Backward"), j1 = /* @__PURE__ */ qo("ExitNode"), jf = /* @__PURE__ */ nn(C)(Dt), Z1 = (t) => mo((n) => (e) => ({
  nodes: Pn(C.compare, Cn, n.nodes, e.nodes),
  edges: Pn(C.compare, Cn, n.edges, e.edges)
}))({ nodes: I, edges: I })(t.keyframes), td = (t) => (n) => ({
  entering: {
    nodes: Ie(C.compare, n.nodes, t.nodes),
    edges: Ie(C.compare, n.edges, t.edges)
  },
  leaving: {
    nodes: Ie(C.compare, t.nodes, n.nodes),
    edges: Ie(C.compare, t.edges, n.edges)
  },
  surviving: {
    nodes: mi(C.compare, Cn, t.nodes, n.nodes),
    edges: mi(C.compare, Cn, t.edges, n.edges)
  }
}), xi = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Or = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, To = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, tu = (t) => (e) => {
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
}, nd = /* @__PURE__ */ J((t) => (n) => U(C)(n)()(t))(I), ed = /* @__PURE__ */ J((t) => (n) => U(C)(n)()(t))(I), rd = /* @__PURE__ */ (() => {
  const t = ee.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), Zf = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, zc = /* @__PURE__ */ nn(C)(Dt), fo = (t) => {
  const n = Qt((e) => x, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: xi(r.minX)(o.x), minY: xi(r.minY)(o.y), maxX: Or(r.maxX)(o.x), maxY: Or(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, od = (t) => {
  const n = Qt((e) => x, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return x;
  if (n.tag === "Just")
    return v("Just", fo(t));
  f();
}, id = (t) => (n) => (e) => nd(Tt(Et(On.foldr, e))((r) => {
  const o = To(r)(t);
  if (o.tag === "Just")
    return ft((i) => !tu(i)(n), [o._1.source, o._1.target]);
  if (o.tag === "Nothing")
    return [];
  f();
})), sd = (t) => t.kind.tag === "SendToken" ? v("Just", b(t.kind._1.edge, { source: t.kind._1.from, target: t.kind._1.to })) : x, ud = (t) => t.tag === "DataFlow" ? yt(sd)(t._1.events) : [], cd = (t) => (n) => ed(yt((e) => tu(e._2.source)(n) || tu(e._2.target)(n) ? v("Just", e._1) : x)(rd(t))), ad = (t) => {
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? 0 < t.length ? t[0].x === t[n].x && t[0].y === t[n].y ? v("Just", fo([t[0]])) : v("Just", fo([t[0], t[n]])) : x : 0 < t.length ? v("Just", fo([t[0]])) : x;
}, Ji = (t) => {
  const n = Qt((e) => x, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: xi(r.minX)(o.x), minY: xi(r.minY)(o.y), maxX: Or(r.maxX)(o.x + o.w), maxY: Or(r.maxY)(o.y + o.h) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x + n._1.head.w,
      maxY: n._1.head.y + n._1.head.h
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, t0 = (t) => (n) => (e) => {
  if (e.tag === "Leaf")
    return jn(t);
  const r = cd(n)(e), o = [
    ...yt((i) => {
      const s = Zf(i)(t.nodes);
      return s.tag === "Just" ? v("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : x;
    })(Et(
      On.foldr,
      Pn(C.compare, Cn, e, id(n)(e)(r))
    )),
    ...yt((i) => {
      const s = To(i)(t.edges);
      return s.tag === "Just" ? v("Just", fo(s._1)) : x;
    })(Et(On.foldr, r)),
    ...yt((i) => {
      const s = To(i)(t.chipExtras);
      if (s.tag === "Just")
        return od(s._1);
      if (s.tag === "Nothing")
        return x;
      f();
    })(Et(On.foldr, r))
  ];
  return o.length === 0 ? jn(t) : Ji(o);
}, eo = (t) => (n) => (e) => {
  const r = [
    ...yt((o) => o)([
      (() => {
        const o = To(e)(t.chipExtras);
        if (o.tag === "Just")
          return ad(o._1);
        if (o.tag === "Nothing")
          return x;
        f();
      })()
    ]),
    ...(() => {
      const o = To(e)(n);
      if (o.tag === "Just")
        return yt((i) => {
          const s = Zf(i)(t.nodes);
          return s.tag === "Just" ? v("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : x;
        })([o._1.source, o._1.target]);
      if (o.tag === "Nothing")
        return [];
      f();
    })()
  ];
  return r.length === 0 ? t0(t)(n)(I) : Ji(r);
}, ju = (t) => (n) => {
  const e = jn(t), r = e.w / Or(1e-4)(n.zoom), o = e.h / Or(1e-4)(n.zoom);
  return { x: n.center.x - r / 2, y: n.center.y - o / 2, w: r, h: o };
}, fd = (t) => Pn(
  C.compare,
  Cn,
  zc(z((n) => b(n.id, { source: n.from.node, target: n.to.node }))(t.graph.edges)),
  zc(Tt(t.scenes)(ud))
), Zu = (t) => t, gd = (t) => t, yr = /* @__PURE__ */ Zu("Linear"), ld = /* @__PURE__ */ Zu("EaseInOutQuad"), _d = /* @__PURE__ */ Zu("SpringBouncy"), vo = (t) => (n) => (e) => {
  const r = Sn(1 - n * n), o = t * r;
  return 1 - Zi(-n * t * e) * (ie(o * e) + n / r * Kn(o * e));
}, dd = (t) => {
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
}, tc = (t) => (n) => (() => {
  if (t === "Linear")
    return gd;
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
    return (e) => e >= 1 ? 1 : 1 - Ks(2)(-10 * e);
  if (t === "Spring")
    return (e) => 1 - (1 + 6 * e) * Zi(-6 * e);
  if (t === "SpringBouncy")
    return vo(6)(0.7);
  f();
})()(dd(n)), n0 = (t) => t, nc = (t) => t, is = (t) => (n) => (e) => {
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
}, wo = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, e0 = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, hd = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, pd = /* @__PURE__ */ nc("Hold"), $d = /* @__PURE__ */ nc("Gap"), md = /* @__PURE__ */ nc("Move"), go = /* @__PURE__ */ n0("LinearLerp"), qc = /* @__PURE__ */ n0("LogLerp"), yd = (t) => (n) => (e) => {
  const r = e.center.y - n.center.y, o = e.center.x - n.center.x, i = Sn(o * o + r * r), s = e.zoom - n.zoom, u = s < 0 ? -s : s;
  return is(t.minTransition)(t.maxTransition)(wo(t.panSpeed <= 0 ? t.minTransition : i / t.panSpeed)(t.zoomSpeed <= 0 ? t.minTransition : u / t.zoomSpeed));
}, Nd = /* @__PURE__ */ J((t) => (n) => {
  const e = t.length - 1 | 0;
  return e >= 0 && e < t.length && t[e] === n ? t : Bt(t)(n);
})([]), Yc = (t) => (n) => {
  const e = { x: 0, y: 0 }, r = 0 < t.length ? t[0].pos : e, o = Sf(zt, x, (i) => i.t <= n, t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just") {
    const i = o._1 + 1 | 0;
    if (i >= 0 && i < t.length) {
      if (o._1 >= 0 && o._1 < t.length) {
        const s = is(0)(1)(t[i].t <= t[o._1].t ? 0 : (n - t[o._1].t) / (t[i].t - t[o._1].t));
        return { x: t[o._1].pos.x + (t[i].pos.x - t[o._1].pos.x) * s, y: t[o._1].pos.y + (t[i].pos.y - t[o._1].pos.y) * s };
      }
      return e;
    }
    return o._1 >= 0 && o._1 < t.length ? t[o._1].pos : e;
  }
  f();
}, nu = (t) => (n) => ({ center: { x: n.center.x * t.scale + t.tx, y: n.center.y * t.scale + t.ty }, zoom: n.zoom / wo(1e-6)(t.scale) }), xd = (t) => (n) => (e) => ({
  center: { x: t.center.x + (n.center.x - t.center.x) * e, y: t.center.y + (n.center.y - t.center.y) * e },
  zoom: Zi((() => {
    const r = Ac(wo(1e-6)(t.zoom));
    return r + (Ac(wo(1e-6)(n.zoom)) - r) * e;
  })())
}), Jd = (t) => (n) => (e) => {
  const r = tc(e.easing)(is(0)(1)(e.endT <= e.startT ? 1 : (n - e.startT) / (e.endT - e.startT)));
  if (e.interp === "LinearLerp")
    return {
      center: { x: e.fromCam.center.x + (e.toCam.center.x - e.fromCam.center.x) * r, y: e.fromCam.center.y + (e.toCam.center.y - e.fromCam.center.y) * r },
      zoom: e.fromCam.zoom + (e.toCam.zoom - e.fromCam.zoom) * r
    };
  if (e.interp === "LogLerp")
    return xd(e.fromCam)(e.toCam)(r);
  f();
}, Td = (t) => (n) => (e) => (r) => {
  const o = (s, u) => e0(yd(t)(s.toCam)(u.toCam))(s.endT - s.startT), i = J((s) => (u) => {
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
      })() || o(s.pending._1, u) <= 0 ? { acc: Bt(s.acc)(s.pending._1), pending: v("Just", u) } : {
        acc: Bt(Bt(s.acc)({ ...s.pending._1, endT: u.startT - o(s.pending._1, u) }))({
          startT: u.startT - o(s.pending._1, u),
          endT: u.startT,
          fromCam: s.pending._1.toCam,
          toCam: u.toCam,
          easing: u.easing,
          interp: go
        }),
        pending: v("Just", u)
      };
    f();
  })({ acc: [], pending: x })(r);
  if (i.pending.tag === "Nothing")
    return i.acc;
  if (i.pending.tag === "Just")
    return Bt(i.acc)(i.pending._1);
  f();
}, vd = (t) => (n) => {
  const e = (r) => {
    const o = Sf(zt, x, (i) => i.kind === "Hold" || i.kind === "Move", r < 1 ? [] : bt(0, r, n));
    if (o.tag === "Just")
      return o._1 >= 0 && o._1 < n.length ? v("Just", n[o._1].toCam) : x;
    if (o.tag === "Nothing")
      return x;
    f();
  };
  return Ft((r) => (o) => {
    if (o.kind === "Hold")
      return { startT: o.startT, endT: o.endT, fromCam: o.fromCam, toCam: o.toCam, easing: o.easing, interp: go };
    if (o.kind === "Move")
      return { startT: o.startT, endT: o.endT, fromCam: o.fromCam, toCam: o.toCam, easing: yr, interp: go };
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
          })(), u = r + 1 | 0, c = pr(
            zt,
            x,
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
        interp: go
      };
    f();
  })(n);
}, wd = {
  padding: 24,
  easing: yr,
  minZoom: 0.9,
  maxZoom: 2.5,
  tokenZoomFloor: 0,
  panSpeed: 1500,
  zoomSpeed: 4,
  minTransition: 0.15,
  maxTransition: 0.6,
  cameraDecay: 16
}, ec = (t) => (n) => (e) => {
  const r = n.w + e * 2, o = n.h + e * 2, i = jn(t);
  return r <= 0 || o <= 0 || i.w <= 0 || i.h <= 0 ? 1 : e0(i.w / r)(i.h / o);
}, kd = /* @__PURE__ */ J((t) => (n) => {
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
  })() ? Bt((() => {
    const o = t.length - 1 | 0;
    return o < 1 ? [] : bt(0, o, t);
  })())({ ...r._1, endT: n.endT }) : Bt(t)(n);
})([]), lo = (t) => (n) => (e) => (r) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: wo(r)(is(t.minZoom)(t.maxZoom)(ec(n)(e)(t.padding))) }), bd = (t) => (n) => (e) => (r) => {
  const o = Lt((u) => (c) => it.compare(c.priority)(u.priority)), i = lo(t)(n)(jn(n))(0), s = ft(
    (u) => u >= 0 && u <= e,
    Nd(Lt(at.compare)([
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
  return Td(t)(n)(i)(kd(vd(i)(yt((u) => {
    const c = (u._1 + u._2) / 2;
    if (u._2 <= u._1)
      return x;
    const a = yt((_) => _.pathFollow)(o(ft((_) => _.startT <= c && c < _.endT, r)));
    if (0 < a.length)
      return v(
        "Just",
        {
          kind: md,
          startT: u._1,
          endT: u._2,
          fromCam: { center: Yc(a[0].samples)(u._1), zoom: a[0].zoom },
          toCam: { center: Yc(a[0].samples)(u._2), zoom: a[0].zoom },
          easing: yr
        }
      );
    const g = z((_) => _.bbox)(ft(
      (_) => _.priority === J(hd)(0)(z((d) => d.priority)(ft(
        (d) => d.startT <= c && c < d.endT,
        r
      ))),
      ft((_) => _.startT <= c && c < _.endT, r)
    ));
    return g.length === 0 ? v("Just", { kind: $d, startT: u._1, endT: u._2, fromCam: i, toCam: i, easing: t.easing }) : v(
      "Just",
      {
        kind: pd,
        startT: u._1,
        endT: u._2,
        fromCam: lo(t)(n)(Ji(g))(qn(
          (_) => _.priority >= 1,
          ft((_) => _.startT <= c && c < _.endT, r)
        ) ? t.tokenZoomFloor : 0),
        toCam: lo(t)(n)(Ji(g))(qn(
          (_) => _.priority >= 1,
          ft((_) => _.startT <= c && c < _.endT, r)
        ) ? t.tokenZoomFloor : 0),
        easing: t.easing
      }
    );
  })(kn(Oe, s, bt(1, s.length, s))))));
}, r0 = (t) => (n) => (e) => (r) => {
  const o = Ut((i) => r >= i.startT && r < i.endT)(e);
  if (o.tag === "Just")
    return Jd()(r)(o._1);
  if (o.tag === "Nothing") {
    const i = e.length - 1 | 0;
    if (i >= 0 && i < e.length && r >= e[i].endT)
      return e[i].toCam;
    const s = lo(t)(n)(jn(n))(0);
    return 0 < e.length ? e[0].fromCam : s;
  }
  f();
};
function We(t) {
  return t.charCodeAt(0);
}
function o0(t) {
  return String.fromCharCode(t);
}
const Ue = function(t) {
  return function(n) {
    return function(e) {
      return e.replace(new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), n);
    };
  };
}, ss = function(t) {
  return function(n) {
    return n.split(t);
  };
}, Ld = function(t) {
  return t.trim();
}, us = function(t) {
  return function(n) {
    return n.join(t);
  };
};
var Ed = typeof Array.from == "function", Sd = typeof Symbol < "u" && Symbol != null && typeof Symbol.iterator < "u" && typeof String.prototype[Symbol.iterator] == "function", Cd = typeof String.prototype.fromCodePoint == "function", Pd = typeof String.prototype.codePointAt == "function";
const Gd = function(t) {
  return Pd ? function(n) {
    return n.codePointAt(0);
  } : t;
}, Ad = function(t) {
  return Cd ? String.fromCodePoint : t;
}, Id = function(t) {
  return function(n) {
    return Sd ? function(e) {
      for (var r = "", o = e[Symbol.iterator](), i = 0; i < n; ++i) {
        var s = o.next();
        if (s.done) return r;
        r += s.value;
      }
      return r;
    } : t(n);
  };
}, Fd = function(t) {
  return function(n) {
    return Ed ? function(e) {
      return Array.from(e, n);
    } : t;
  };
}, cs = (t) => {
  const n = rr(t);
  if (n === 0)
    return x;
  if (n === 1)
    return v("Just", { head: We(ao(0)(t)), tail: "" });
  const e = We(ao(1)(t)), r = We(ao(0)(t));
  return 55296 <= r && r <= 56319 && 56320 <= e && e <= 57343 ? v("Just", { head: (((r - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0, tail: No(2)(t) }) : v("Just", { head: r, tail: No(1)(t) });
}, Rd = (t) => {
  const n = cs(t);
  return n.tag === "Just" ? v("Just", b(n._1.head, n._1.tail)) : x;
}, Bd = (t) => ee.unfoldr(Rd)(t), Qd = (t) => {
  const n = We(ao(0)(t));
  if (55296 <= n && n <= 56319 && rr(t) > 1) {
    const e = We(ao(1)(t));
    if (56320 <= e && e <= 57343)
      return (((n - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0;
  }
  return n;
}, i0 = /* @__PURE__ */ Gd(Qd), as = /* @__PURE__ */ Fd(Bd)(i0), ks = (t) => rs(t >= 0 && t <= 65535 ? o0(t) : t < 0 ? "\0" : "\uffff"), Wd = (t) => t <= 65535 ? ks(t) : ks(Ae(t - 65536 | 0, 1024) + 55296 | 0) + ks(Me(t - 65536 | 0)(1024) + 56320 | 0), Hd = /* @__PURE__ */ Ad(Wd), s0 = (t) => (n) => {
  if (t < 1)
    return "";
  const e = cs(n);
  return e.tag === "Just" ? Hd(e._1.head) + s0(t - 1 | 0)(e._1.tail) : n;
}, Nn = /* @__PURE__ */ Id(s0), Dd = (t) => (n) => n === "" ? x : v("Just", i0(n)), zr = (t, n, e) => ({ tag: t, _1: n, _2: e }), Od = () => ({ tag: "ExtendFromSource" }), qr = (t, n) => ({ tag: t, _1: n }), rc = (t) => t, Ti = (t, n) => ({ tag: t, _1: n }), bs = /* @__PURE__ */ Ti("NotYet"), Xc = /* @__PURE__ */ Ti("Consumed"), zd = /* @__PURE__ */ rc("FromSource"), Vc = /* @__PURE__ */ rc("FromTarget"), u0 = /* @__PURE__ */ rc("FromBoth"), _o = /* @__PURE__ */ qr("Hidden"), qd = /* @__PURE__ */ qr("Visible"), oc = /* @__PURE__ */ Od(), ho = /* @__PURE__ */ zr("Retracted"), Yd = /* @__PURE__ */ zr("Extended"), c0 = (t) => t, eu = (t, n) => ({ tag: t, _1: n }), Ye = (t, n, e) => ({ tag: t, _1: n, _2: e }), a0 = (t) => t, Ke = (t, n) => ({ tag: t, _1: n }), Er = (t, n, e, r, o, i, s, u, c) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s, _7: u, _8: c }), Xo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, xe = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, f0 = /* @__PURE__ */ nn(C)(Dt), ru = /* @__PURE__ */ Gu(Ho), Sr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, vi = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ko = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, Uc = (t) => (e) => {
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
}, g0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, vr = /* @__PURE__ */ (() => {
  const t = ee.unfoldr((n) => {
    if (n.tag === "Nil")
      return x;
    if (n.tag === "Cons")
      return v("Just", b(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, qt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Yt);
  })());
})(), Xd = /* @__PURE__ */ J((t) => (n) => U(C)(n)()(t))(I), ou = (t) => (e) => {
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
}, ni = (t) => (e) => {
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
}, Vd = /* @__PURE__ */ Ke("NoKeyframes"), Ud = (t) => Ke("DuplicateEventId", t), Kd = (t) => Ke("UnknownEvent", t), l0 = /* @__PURE__ */ a0("PlopIn"), Md = /* @__PURE__ */ a0("PlopOut"), jd = /* @__PURE__ */ c0("DiveIn"), Zd = /* @__PURE__ */ c0("DiveOut"), th = (t) => (n) => (e) => (r) => {
  const o = Xo(r.edge)(n.edges), i = (() => {
    if (o.tag === "Nothing")
      return 0;
    if (o.tag === "Just")
      return zo(o._1);
    f();
  })(), s = xe(t.minTokenDuration)(xe(ot(J((u) => (c) => u + as(c).length | 0)(0)(r.labels)) * t.tokenReadSecPerChar)(t.tokenSpeed <= 0 ? 0 : i / t.tokenSpeed)) + e.pre + e.post;
  return { duration: s, holdPre: s <= 0 ? 0 : e.pre / s, holdPost: s <= 0 ? 0 : e.post / s };
}, nh = (t) => (n) => f0(yt((e) => {
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
    return x;
  f();
})(n)), eh = (t) => {
  if (t.event.kind.tag === "SendToken")
    return v(
      "Just",
      {
        startT: t.startT,
        endT: t.endT,
        target: Er(
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
    return v("Just", { startT: t.startT, endT: t.endT, target: Er("FillWindow", t.event.id, t.event.kind._1.node, t.event.kind._1.labels) });
  f();
}, rh = (t) => (n) => (e) => (r) => {
  const o = Ut((i) => ru(i.path)(n) && (er(i.endT - e) < 1e-4 || er(i.startT - r) < 1e-4))(t.segments);
  if (o.tag === "Just")
    return v("Just", o._1);
  if (o.tag === "Nothing")
    return Ut((i) => ru(i.path)(n))(t.segments);
  f();
}, oh = (t) => (n) => (e) => yt((r) => {
  const o = yt((i) => ko(i)(t.nodes))(Et(
    On.foldr,
    (() => {
      if (r.scene.tag === "Structural")
        return Pn(
          C.compare,
          Cn,
          (() => {
            const i = Sr(r.scene._1.from)(e);
            if (i.tag === "Nothing")
              return I;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })(),
          (() => {
            const i = Sr(r.scene._1.to)(e);
            if (i.tag === "Nothing")
              return I;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })()
        );
      if (r.scene.tag === "DataFlow") {
        const i = Sr(r.scene._1.keyframe)(e);
        if (i.tag === "Nothing")
          return I;
        if (i.tag === "Just")
          return i._1.nodes;
        f();
      }
      if (r.scene.tag === "Hold") {
        const i = Sr(r.scene._1)(e);
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
        const i = J((s) => (u) => ({ minX: vi(s.minX)(u.x), minY: vi(s.minY)(u.y), maxX: xe(s.maxX)(u.x + u.w), maxY: xe(s.maxY)(u.y + u.h) }))(0 < o.length ? { minX: o[0].x, minY: o[0].y, maxX: o[0].x + o[0].w, maxY: o[0].y + o[0].h } : { minX: 0, minY: 0, maxX: 0, maxY: 0 })(bt(1, o.length, o));
        return { x: i.minX, y: i.minY, w: i.maxX - i.minX, h: i.maxY - i.minY };
      })(),
      priority: 0,
      pathFollow: x
    }
  );
}), ih = (t) => (n) => (e) => {
  const r = Xo(e)(t);
  if (r.tag === "Nothing")
    return Vc;
  if (r.tag === "Just") {
    const o = Uc(r._1.target)(n);
    return Uc(r._1.source)(n) ? o ? u0 : zd : Vc;
  }
  f();
}, sh = { pre: 0, post: 0 }, uh = (t) => (n) => (e) => (r) => (o) => {
  const i = g0(o.event.id)(e), s = (() => {
    if (i.tag === "Nothing")
      return sh;
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
      return th(t)(n)(s)(o.event.kind._1);
    if (o.event.kind.tag === "FillNodeWithoutTransition")
      return { duration: t.plop, holdPre: 0, holdPost: 0 };
    f();
  })();
  return Bt(r)({ startT: u, endT: u + c.duration, event: o.event, holdPre: c.holdPre, holdPost: c.holdPost });
}, _0 = (t) => (n) => (e) => J(uh(t)(n)(nh(t)(e)))([])(Ft((r) => (o) => ({ event: o }))(e)), ch = (t) => (n) => {
  const e = ko(n)(t.interiors);
  if (e.tag === "Nothing")
    return t;
  if (e.tag === "Just")
    return e._1;
  f();
}, ah = (t) => (n) => ({ ...n, fromCam: nu(t)(n.fromCam), toCam: nu(t)(n.toCam) }), fh = (t) => {
  if (t.when.tag === "First")
    return [];
  if (t.when.tag === "At")
    return [];
  if (t.when.tag === "After")
    return [t.when._1];
  if (t.when.tag === "With")
    return [t.when._1];
  f();
}, Kc = { id: "", nodes: I, edges: I, kind: Yo }, gh = (t) => (n) => td((() => {
  const e = Sr(n.from)(t);
  if (e.tag === "Nothing")
    return Kc;
  if (e.tag === "Just")
    return e._1;
  f();
})())((() => {
  const e = Sr(n.to)(t);
  if (e.tag === "Nothing")
    return Kc;
  if (e.tag === "Just")
    return e._1;
  f();
})()), lh = (t) => (n) => {
  const e = ko(n)(t.interiors);
  if (e.tag === "Nothing")
    return { layout: t.layout, interiors: I };
  if (e.tag === "Just")
    return e._1;
  f();
}, Ls = (t) => (n) => (e) => (r) => {
  const o = Xo(r)(e.edges);
  if (o.tag === "Just")
    return t <= 0 ? n : xe(n)(zo(o._1) / t);
  if (o.tag === "Nothing")
    return n;
  f();
}, d0 = (t) => (n) => (e) => (r) => (o) => {
  const i = t.plop, s = gh(e)(o), u = z((l) => ({
    startT: 0,
    endT: 0 + Ls(t.edgeSpeed)(t.minEdgeDuration)(n)(l),
    target: Er("EdgeWindow", l, eu("Extend", oc))
  }))(vr(s.entering.edges)), c = z((l) => ({ startT: 0, endT: i, target: Er("NodeWindow", l, l0) }))(vr(s.entering.nodes)), a = J(xe)(0)(z((l) => Ls(t.edgeSpeed)(t.minEdgeDuration)(n)(l))(vr(s.leaving.edges))), g = (l) => qn(
    (h) => {
      const p = Xo(h)(r);
      if (p.tag === "Just")
        return p._1.source === l || p._1.target === l;
      if (p.tag === "Nothing")
        return !1;
      f();
    },
    vr(s.leaving.edges)
  ) ? a : 0, _ = z((l) => ({ startT: g(l), endT: g(l) + t.plop, target: Er("NodeWindow", l, Md) }))(vr(s.leaving.nodes)), d = z((l) => ({
    startT: 0,
    endT: Ls(t.edgeSpeed)(t.minEdgeDuration)(n)(l),
    target: Er("EdgeWindow", l, eu("Retract", ih(r)(s.leaving.nodes)(l)))
  }))(vr(s.leaving.edges));
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
}, _h = (t) => (n) => (e) => (r) => (o) => (i) => z((() => {
  const s = o.startT;
  return (u) => ({ ...u, startT: u.startT + s, endT: u.endT + s });
})())(d0(t)(n)(e)(r)(i).windows), dh = (t) => yt((n) => Et(mo, n).length > 1 ? v(
  "Just",
  (() => {
    const e = Qt(
      (r) => x,
      (r) => (o) => v("Just", { head: r, tail: o }),
      Et(mo, n)
    );
    if (e.tag === "Just")
      return e._1.head;
    if (e.tag === "Nothing")
      return "";
    f();
  })()
) : x)(k_(Ho)(Lt(C.compare)(t))), hh = (t) => {
  const n = z((r) => r.id)(t), e = Xd(n);
  return [
    ...z(Ud)(dh(n)),
    ...z(Kd)(ft((r) => !ou(r)(e), Tt(t)(fh)))
  ];
}, ph = (t) => (n) => (e) => {
  const r = xe(t.minZoom)(t.tokenZoomFloor);
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
              bbox: eo(n)(e)(o.target._2),
              priority: 1,
              pathFollow: x
            };
          const s = Xo(o.target._2)(n.edges);
          if (s.tag === "Just") {
            const u = ko(o.target._4)(n.nodes);
            if (u.tag === "Just") {
              const c = ko(o.target._5)(n.nodes);
              if (c.tag === "Just") {
                const a = c._1;
                return {
                  startT: o.startT,
                  endT: o.endT,
                  bbox: eo(n)(e)(o.target._2),
                  priority: 1,
                  pathFollow: v(
                    "Just",
                    {
                      samples: (() => {
                        const g = o.startT + i.pre * (o.endT - o.startT), _ = xe(1e-4)(o.endT - i.post * (o.endT - o.startT) - g), d = o.endT - o.startT;
                        return z((l) => {
                          const h = g + ot(l) / ot(32) * _;
                          return {
                            t: h,
                            pos: z1(s._1)({ x: u._1.x + u._1.w / 2, y: u._1.y + u._1.h / 2 })({
                              x: a.x + a.w / 2,
                              y: a.y + a.h / 2
                            })(d <= 0 ? 0 : (h - o.startT) / d)(i)
                          };
                        })(It(0, 32));
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
                  bbox: eo(n)(e)(o.target._2),
                  priority: 1,
                  pathFollow: x
                };
              f();
            }
            if (u.tag === "Nothing")
              return {
                startT: o.startT,
                endT: o.endT,
                bbox: eo(n)(e)(o.target._2),
                priority: 1,
                pathFollow: x
              };
            f();
          }
          if (s.tag === "Nothing")
            return {
              startT: o.startT,
              endT: o.endT,
              bbox: eo(n)(e)(o.target._2),
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
          bbox: t0(n)(e)(Ot(
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
}, $h = (t) => (n) => (e) => (r) => (o) => bd(t)(o.layout)(r.endT)([
  ...oh(o.layout)(e)(n)(ft((i) => i.startT >= o.startT && i.endT <= o.endT, r.spans)),
  ...ph(t)(o.layout)(e)(o.windows)
]), mh = (t) => {
  const n = f0(z((r) => b(
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
    if (ou(i)(o))
      return [Ke("ScheduleCycle", [...Et(On.foldr, o), i])];
    if (ou(i)(r))
      return [];
    const s = g0(i)(n);
    if (s.tag === "Nothing")
      return [];
    if (s.tag === "Just")
      return Tt(s._1)(e(U(C)(i)()(r))(U(C)(i)()(o)));
    f();
  };
  return Tt(t)((r) => e(I)(I)(r.id));
}, yh = {
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
  nodeEasing: _d,
  edgeEasing: ld,
  tokenEasing: yr,
  diveDur: 1.2,
  retreatDur: 1.2
}, Nh = (t) => (n) => (e) => (r) => z((() => {
  const o = e.startT;
  return (i) => ({ ...i, startT: i.startT + o, endT: i.endT + o });
})())(yt(eh)(_0(t)(n)(r.events))), xh = (t) => (n) => (e) => (r) => (o) => {
  if (o.scene.tag === "Structural")
    return _h(t)(n)(e)(r)(o)(o.scene._1);
  if (o.scene.tag === "Hold")
    return [];
  if (o.scene.tag === "DataFlow")
    return Nh(t)(n)(o)(o.scene._1);
  if (o.scene.tag === "EnterNode")
    return [];
  if (o.scene.tag === "ExitNode")
    return [];
  f();
}, Jh = (t) => (n) => (e) => {
  const r = _0(t)(n)(e.events);
  return r.length === 0 ? t.gap : J(xe)(0)(z((o) => o.endT)(r)) + t.gap;
}, Th = (t) => (n) => (e) => (r) => (o) => {
  if (o.tag === "Structural")
    return d0(t)(n)(e)(r)(o._1).duration;
  if (o.tag === "Hold")
    return t.stillHold;
  if (o.tag === "DataFlow")
    return Jh(t)(n)(o._1);
  if (o.tag === "EnterNode" || o.tag === "ExitNode")
    return 0;
  f();
}, h0 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Y1(n)(r), u = e.layout, c = jf(z((p) => b(p.id, p))(o.keyframes)), a = 0 < o.keyframes.length ? v("Just", o.keyframes[0]) : x, g = (() => {
    if (a.tag === "Just")
      return a._1.id;
    if (a.tag === "Nothing")
      return "";
    f();
  })(), _ = fd(o), d = (p) => ({
    segments: p.runSpans.length === 0 ? p.segments : Bt(p.segments)({
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
  }), l = J((p) => ($) => {
    if ($.tag === "EnterNode") {
      const T = d(p), w = p.t + t.diveDur, k = Bt(r)($._1), L = h0(t)(n)(lh(e)($._1))(k)(ch(o)($._1))(w), P = L.endT + t.retreatDur;
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
          { startT: p.t, endT: w, node: $._1, parentPath: r, childPath: k, direction: jd },
          ...L.dives,
          { startT: L.endT, endT: P, node: $._1, parentPath: r, childPath: k, direction: Zd }
        ]
      };
    }
    if ($.tag === "ExitNode")
      return p;
    const m = p.t + Th(t)(u)(c)(_)($), y = { startT: p.t, endT: m, scene: $ }, N = xh(t)(u)(c)(_)(y);
    return {
      ...p,
      t: m,
      runSpans: Bt(p.runSpans)(y),
      runWindows: [...p.runWindows, ...N],
      spans: Bt(p.spans)(y),
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
}, vh = (t) => (n) => (e) => e.endT <= t || e.startT >= n ? x : v("Just", { ...e, startT: xe(t)(e.startT), endT: vi(n)(e.endT) }), ic = (t) => (n) => (e) => {
  const r = jn(e.layout), o = {
    x: r.x * e.placement.scale + e.placement.tx,
    y: r.y * e.placement.scale + e.placement.ty,
    w: r.w * e.placement.scale,
    h: r.h * e.placement.scale
  };
  return {
    center: { x: o.x + o.w / 2, y: o.y + o.h / 2 },
    zoom: vi(ec(n)(o)(t.padding * e.placement.scale))(40 / (11 * e.placement.scale))
  };
}, wh = (t) => (n) => (e) => e.placement.scale === 1 && e.placement.tx === 0 && e.placement.ty === 0 ? nu(e.placement)(lo(t)(e.layout)(jn(e.layout))(0)) : ic(t)(n)(e), kh = (t) => (n) => (e) => (r) => yt((o) => {
  const i = rh(r)(o.parentPath)(o.startT)(o.endT);
  if (i.tag === "Just") {
    const s = o.childPath, u = Ut((c) => ru(c.path)(s))(r.segments);
    if (u.tag === "Just") {
      const c = wh(t)(n)(i._1), a = ic(t)(n)(u._1);
      if (o.direction === "DiveIn")
        return v(
          "Just",
          { startT: o.startT, endT: o.endT, fromCam: c, toCam: a, easing: yr, interp: qc }
        );
      if (o.direction === "DiveOut")
        return v(
          "Just",
          { startT: o.startT, endT: o.endT, fromCam: a, toCam: c, easing: yr, interp: qc }
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
})(r.dives), bh = (t) => (n) => {
  if (n.tag === "Structural")
    return yt((e) => e)([
      ni(n._1.from)(t) ? x : v("Just", Ke("UnknownKeyframe", n._1.from)),
      ni(n._1.to)(t) ? x : v("Just", Ke("UnknownKeyframe", n._1.to))
    ]);
  if (n.tag === "Hold")
    return yt((e) => e)([ni(n._1)(t) ? x : v("Just", Ke("UnknownKeyframe", n._1))]);
  if (n.tag === "DataFlow")
    return [
      ...yt((e) => e)([ni(n._1.keyframe)(t) ? x : v("Just", Ke("UnknownKeyframe", n._1.keyframe))]),
      ...hh(n._1.events),
      ...mh(n._1.events)
    ];
  if (n.tag === "EnterNode")
    return [];
  if (n.tag === "ExitNode")
    return [];
  f();
}, Lh = (t) => (n) => {
  const e = Tt(n)(bh(t));
  return e.length === 0 ? St("Right", void 0) : St("Left", e);
}, Eh = (t) => (n) => (e) => (r) => Lt((o) => (i) => at.compare(o.startT)(i.startT))(Tt(r.segments)((o) => o.placement.scale === 1 && o.placement.tx === 0 && o.placement.ty === 0 ? yt(vh(o.startT)(o.endT))(z(ah(o.placement))($h(t)(e)(o.edgeEndpoints)(r)(o))) : [
  (() => {
    const i = ic(t)(n)(o);
    return { startT: o.startT, endT: o.endT, fromCam: i, toCam: i, easing: yr, interp: go };
  })()
])), Sh = (t) => (n) => (e) => (r) => {
  if (0 < e.keyframes.length) {
    const o = e.keyframes[0], i = jf(z((u) => b(u.id, u))(e.keyframes)), s = Lh(i)(e.scenes);
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
      const u = h0(n)(r)(r)([])(e)(0);
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
          cameraSpans: [...Eh(t)(r.layout)(i)(u), ...kh(t)(r.layout)(i)(u)],
          cameraConfig: t,
          levelTree: r,
          segments: u.segments,
          dives: u.dives,
          seed: e.seed
        }
      );
    });
  }
  return St("Left", [Vd]);
}, iu = (t) => (n) => Math.imul(t, n), Zr = (t) => {
  const n = t + 1831565813 | 0, e = iu(n ^ n >>> 15)(n | 1), r = e ^ (e + iu(e ^ e >>> 7)(e | 61) | 0), o = r ^ r >>> 14;
  return { prng: o, value: o < 0 ? (ot(o) + 4294967296) / 4294967296 : ot(o) / 4294967296 };
}, fn = (t) => (n) => (e) => {
  const r = Zr(e);
  return { prng: r.prng, value: t + r.value * (n - t) };
}, su = (t) => (n) => J((e) => (r) => iu(e ^ r)(-2048144789))(n)(z(We)(sr(t))), sc = (t) => t, se = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, wi = /* @__PURE__ */ Gu(Ho), Ch = /* @__PURE__ */ (() => {
  const t = ee.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), p0 = /* @__PURE__ */ nn(C)(Dt), uc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, Mc = Dt.foldMap(T1(C)), jc = (t) => (n) => (e) => {
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
}, Ph = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, Yr = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Gh = (t) => (e) => {
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
}, Ah = /* @__PURE__ */ nn(C)(Dt), Ih = (t) => (e) => {
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
}, Fh = /* @__PURE__ */ nn(C)(Dt), Rh = /* @__PURE__ */ sc("Backdrop"), Zc = /* @__PURE__ */ sc("FlyThrough"), ki = /* @__PURE__ */ sc("Active"), ta = (t) => (n) => (e) => {
  const r = (t + n) / 2, o = e - r, i = o < 0 ? -1 : 1, s = (n - t) / 2, u = s * 0.15, c = s - u, a = o < 0 ? -o : o;
  return n <= t ? (t + n) / 2 : a <= c ? e : r + i * (s - u * Zi(-(a - c) / u));
}, Bh = (t) => (n) => (e) => (r) => {
  const o = jn(t), i = o.w / se(1e-4)(n.zoom) / 2, s = o.h / se(1e-4)(n.zoom) / 2, u = e.y - n.center.y, c = e.x - n.center.x;
  return {
    ...n,
    center: {
      x: i <= 1e-4 ? n.center.x + 0 * r * 0.35 : c < 0 ? n.center.x + c / (1 + -c / i) * r * 0.35 : n.center.x + c / (1 + c / i) * r * 0.35,
      y: s <= 1e-4 ? n.center.y + 0 * r * 0.35 : u < 0 ? n.center.y + u / (1 + -u / s) * r * 0.35 : n.center.y + u / (1 + u / s) * r * 0.35
    }
  };
}, uu = (t) => (n) => (e) => {
  const r = Ut((o) => wi(o.path)(n) && e >= o.startT && e < o.endT)(t.segments);
  if (r.tag === "Just")
    return v("Just", r._1);
  if (r.tag === "Nothing")
    return Ut((o) => wi(o.path)(n))(t.segments);
  f();
}, Qh = (t) => ({
  startT: 0,
  endT: t.totalDuration,
  path: [],
  layout: t.layout,
  placement: Uu,
  windows: t.windows,
  spans: t.spans,
  keyframes: t.keyframes,
  initialKeyframe: t.initialKeyframe,
  edgeEndpoints: I
}), Wh = (t) => z((n) => n < 1 ? [] : bt(0, n, t))(It(0, t.length - 1 | 0)), Hh = (t) => J((n) => (e) => (n * 31 | 0) + We(e) | 0)(7)(sr(t)), $0 = (t) => (n) => (e) => ({
  ...e,
  state: {
    ...e.state,
    nodes: p0(z((r) => b(r._1, t(r._1)(r._2)))(Ch(e.state.nodes))),
    edges: (() => {
      const r = (o) => {
        if (o.tag === "Leaf")
          return I;
        if (o.tag === "Node")
          return Ot("Node", o._1, o._2, o._3, n(o._4), r(o._5), r(o._6));
        f();
      };
      return r(e.state.edges);
    })()
  }
}), Es = (t) => (n) => {
  const e = uc(n)(t.keyframes);
  if (e.tag === "Nothing")
    return I;
  if (e.tag === "Just")
    return e._1.nodes;
  f();
}, Ss = (t) => (n) => {
  const e = uc(n)(t.keyframes);
  if (e.tag === "Nothing")
    return I;
  if (e.tag === "Just")
    return e._1.edges;
  f();
}, fs = (t) => (n) => {
  if (n < t.startT)
    return Ye("AtKeyframe", t.initialKeyframe);
  const e = Ut((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return Ye("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return Ye("AtKeyframe", e._1.scene._1.keyframe);
    if (e._1.scene.tag === "Hold")
      return Ye("AtKeyframe", e._1.scene._1);
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode")
      return Ye("AtKeyframe", t.initialKeyframe);
    f();
  }
  if (e.tag === "Nothing") {
    const r = t.spans.length - 1 | 0;
    return r >= 0 && r < t.spans.length ? Ye(
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
    ) : Ye("AtKeyframe", t.initialKeyframe);
  }
  f();
}, Dh = /* @__PURE__ */ J((t) => (n) => {
  const e = Do(t);
  return e.tag === "Just" && n.startT <= e._1.last.endT + 1e-6 ? Bt(e._1.init)({ ...e._1.last, endT: se(e._1.last.endT)(n.endT), windows: Bt(e._1.last.windows)(n) }) : Bt(t)({ endT: n.endT, windows: [n] });
})([]), Oh = (t) => (n) => (e) => Mc((r) => Mc((o) => o.target.tag === "FillWindow" ? o.startT <= e ? Ot("Node", 1, 1, o.target._2, void 0, I, I) : I : o.target.tag === "TokenWindow" && o.startT + (o.endT - o.startT) * 0.25 <= e ? Ot("Node", 1, 1, o.target._4, void 0, I, I) : I)(r.windows))(ft(
  (r) => e <= r.endT + t,
  Dh(Lt((r) => (o) => at.compare(r.startT)(o.startT))(ft(
    (r) => r.target.tag === "FillWindow" || r.target.tag === "TokenWindow",
    n
  )))
)), zh = (t) => (n) => (e) => qn(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), qh = (t) => (n) => (e) => qn((r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e, t), Yh = (t) => (n) => (e) => qn((r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e, t), Xh = (t) => (n) => (e) => qn(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), Vh = (t) => (n) => {
  const e = fs(t)(n);
  if (e.tag === "AtKeyframe")
    return Nn(3)(e._1) === "kf-" ? "" : e._1;
  if (e.tag === "InTransition")
    return Nn(3)(e._2) === "kf-" ? "" : e._2;
  f();
}, Uh = (t) => (n) => {
  const e = fs(t)(n), r = uc((() => {
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
}, m0 = (t) => (n) => (e) => Ut((r) => e(r) && n >= r.startT && n < r.endT)(t), Kh = (t) => {
  const n = jc(0)(1)(t / 0.2), e = jc(0)(1)((1 - t) / 0.2);
  return n * n * (3 - 2 * n) * e * e * (3 - 2 * e);
}, Mh = (t) => (n) => {
  if (n.tag === "Travelling") {
    const e = Ph(n._1.edge)(t.edges);
    if (e.tag === "Just") {
      const r = mr(e._1)(n._1.progress);
      return r.tag === "Just" ? v("Just", { dot: r._1, weight: Kh(n._1.progress) }) : x;
    }
    if (e.tag === "Nothing")
      return x;
    f();
  }
  return x;
}, jh = {
  nodes: I,
  edges: I,
  tokens: I,
  camera: { center: { x: 0, y: 0 }, zoom: 1 },
  frameTitle: "",
  staticKind: Yo,
  visited: I,
  nodeFadeAlpha: I,
  nodeInvert: I
}, Zh = { nodes: I, edges: I, chipExtras: I, edgeLabels: I }, tp = {
  segment: {
    startT: 0,
    endT: 0,
    path: [],
    layout: Zh,
    placement: Uu,
    windows: [],
    spans: [],
    keyframes: I,
    initialKeyframe: "",
    edgeEndpoints: I
  },
  state: jh,
  bgAlpha: 1,
  role: ki
}, bi = (t) => {
  const n = t.levels.length - 1 | 0;
  return n >= 0 && n < t.levels.length ? t.levels[n] : tp;
}, np = (t) => (n) => {
  const e = fs(t)(n);
  if (e.tag === "AtKeyframe")
    return Es(t)(e._1);
  if (e.tag === "InTransition")
    return Pn(C.compare, Cn, Es(t)(e._1), Es(t)(e._2));
  f();
}, ep = (t) => (n) => {
  const e = fs(t)(n);
  if (e.tag === "AtKeyframe")
    return Ss(t)(e._1);
  if (e.tag === "InTransition")
    return Pn(C.compare, Cn, Ss(t)(e._1), Ss(t)(e._2));
  f();
}, rp = (t) => (n) => {
  const e = t.w / se(1e-4)(n.zoom), r = t.h / se(1e-4)(n.zoom);
  return {
    ...n,
    center: {
      x: e >= t.w ? t.x + t.w / 2 : ta(t.x + e / 2)(t.x + t.w - e / 2)(n.center.x),
      y: r >= t.h ? t.y + t.h / 2 : ta(t.y + r / 2)(t.y + t.h - r / 2)(n.center.y)
    }
  };
}, op = (t) => rp((() => {
  const n = jn(t.layout), e = n.x * t.placement.scale + t.placement.tx, r = n.y * t.placement.scale + t.placement.ty;
  return { x: e, y: r, w: (n.x + n.w) * t.placement.scale + t.placement.tx - e, h: (n.y + n.h) * t.placement.scale + t.placement.ty - r };
})()), ip = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : se(0)(Yr(1)((n - t.startT) / e));
}, y0 = (t) => (n) => (e) => se(0)(Yr(1)((e - fn(0)(0.3)(t + Hh(n) | 0).value) / se(1e-4)(0.7))), na = (t) => (n) => (e) => $0((r) => (o) => o.tag === "Hidden" ? _o : qr("PloppingOut", r === n ? se(0)(Yr(1)((e - 0.45) / se(1e-4)(0.55))) : y0(t)(r)(e)))((r) => r.tag === "Retracted" ? ho : zr("Retracting", u0, e)), ea = (t) => (n) => $0((e) => (r) => r.tag === "Hidden" ? _o : qr("PloppingIn", y0(t)(e)(n)))((e) => e.tag === "Retracted" ? ho : zr("Extending", oc, n)), Li = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : se(0)(Yr(1)((n - t.startT) / e));
}, sp = (t) => (n) => (e) => (r) => (o) => {
  const i = m0(n)(e)((s) => s.target.tag === "EdgeWindow" && s.target._1 === o);
  if (i.tag === "Just") {
    const s = tc(t.timing.edgeEasing)(Li(i._1)(e)), u = i._1.target.tag === "EdgeWindow" ? i._1.target._2 : eu("Extend", oc);
    if (u.tag === "Retract")
      return zr("Retracting", u._1, s);
    if (u.tag === "Extend")
      return zr("Extending", u._1, s);
    f();
  }
  if (i.tag === "Nothing")
    return Xh(n)(e)(o) || zh(n)(e)(o) ? ho : Gh(o)(r) ? Yd : ho;
  f();
}, up = (t) => (n) => (e) => {
  const r = ep(n)(e);
  return Ah(z((o) => b(o, sp(t)(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return I;
      if (i.tag === "Node")
        return Ot("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return Et(On.foldr, o(n.layout.edges));
  })()));
}, cp = (t) => (n) => (e) => (r) => {
  const o = m0(t)(n)((i) => i.target.tag === "NodeWindow" && i.target._1 === r);
  if (o.tag === "Just") {
    const i = Li(o._1)(n), s = o._1.target.tag === "NodeWindow" ? o._1.target._2 : l0;
    if (s === "PlopIn")
      return qr("PloppingIn", i);
    if (s === "PlopOut")
      return qr("PloppingOut", i);
    f();
  }
  if (o.tag === "Nothing")
    return Yh(t)(n)(r) || qh(t)(n)(r) ? _o : Ih(r)(e) ? qd : _o;
  f();
}, ap = (t) => (n) => (e) => {
  const r = np(n)(e);
  return p0(z((o) => b(o, cp(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return I;
      if (i.tag === "Node")
        return Ot("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return Et(On.foldr, o(n.layout.nodes));
  })()));
}, fp = (t) => (n) => (e) => n.target.tag === "TokenWindow" ? b(
  n.target._1,
  e < n.startT ? bs : e >= n.endT ? Xc : Ti(
    "Travelling",
    {
      edge: n.target._2,
      direction: n.target._3,
      progress: tc(t.timing.tokenEasing)(Li(n)(e)),
      labels: n.target._6,
      source: n.target._4,
      target: n.target._5,
      holdPre: n.target._7,
      holdPost: n.target._8
    }
  )
) : n.target.tag === "FillWindow" ? b(
  n.target._1,
  e < n.startT ? bs : e >= n.endT ? Xc : Ti("Filling", { node: n.target._2, progress: Li(n)(e), labels: n.target._3 })
) : b("", bs), gp = (t) => (n) => (e) => Fh(z((r) => fp(t)(r)(e))(ft(
  (r) => r.target.tag === "TokenWindow" || r.target.tag === "FillWindow",
  n
))), Cr = (t) => (n) => (e) => ({
  nodes: ap()(n)(e),
  edges: up(t)(n)(e),
  tokens: gp(t)(n.windows)(e),
  camera: r0(t.cameraConfig)(n.layout)(t.cameraSpans)(e),
  frameTitle: Vh(n)(e),
  staticKind: Uh(n)(e),
  visited: Oh(t.timing.hatchHold)(n.windows)(e),
  nodeFadeAlpha: I,
  nodeInvert: I
}), lp = (t) => (n) => (e) => Ef(
  x,
  Tf,
  (r) => r.direction === "DiveIn" && wi(r.parentPath)(n.path) && e >= r.startT - 0.7 && e < r.startT ? v("Just", { node: r.node, phase: (e - (r.startT - 0.7)) / 0.7 }) : x,
  t.dives
), _p = (t) => (n) => (e) => (r) => {
  const o = lp(t)(n)(e);
  if (o.tag === "Just") {
    const i = Kn(3.141592653589793 * o._1.phase * 3);
    return {
      ...r,
      state: { ...r.state, nodeInvert: Ot("Node", 1, 1, o._1.node, 1 * i * i, I, I) }
    };
  }
  if (o.tag === "Nothing")
    return r;
  f();
}, N0 = (t) => (n) => yt((e) => {
  const r = Ut((o) => o.direction === "DiveIn" && wi(o.childPath)((() => {
    const i = e.length + 1 | 0;
    return i < 1 ? [] : bt(0, i, n);
  })()))(t.dives);
  if (r.tag === "Just") {
    const o = uu(t)(e)(r._1.startT - 1e-4);
    if (o.tag === "Just")
      return v(
        "Just",
        {
          bgAlpha: 1,
          role: Rh,
          segment: o._1,
          state: {
            ...Cr(t)(o._1)(r._1.startT - 1e-4),
            nodeFadeAlpha: Ot("Node", 1, 1, r._1.node, 0, I, I)
          }
        }
      );
    if (o.tag === "Nothing")
      return x;
    f();
  }
  if (r.tag === "Nothing")
    return x;
  f();
})(Wh(n)), x0 = (t) => (n) => {
  const e = ft((o) => n >= o.startT && n < o.endT, t.segments), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r] : Qh(t);
}, dp = (t) => (n) => (e) => {
  const r = ip(e)(n), o = uu(t)(e.parentPath)((() => {
    if (e.direction === "DiveIn")
      return e.startT - 1e-4;
    if (e.direction === "DiveOut")
      return e.endT - 1e-4;
    f();
  })()), i = uu(t)(e.childPath)((() => {
    if (e.direction === "DiveIn")
      return e.endT;
    if (e.direction === "DiveOut")
      return e.startT - 1e-4;
    f();
  })()), s = se(0)(Yr(1)(r / 0.6)), u = se(0)(Yr(1)((r - 0.4) / 0.6)), c = (() => {
    if (e.direction === "DiveIn")
      return na(t.seed)(e.node)(s);
    if (e.direction === "DiveOut")
      return ea(t.seed)(u);
    f();
  })(), a = (() => {
    if (e.direction === "DiveIn")
      return ea(t.seed)(u);
    if (e.direction === "DiveOut")
      return na(t.seed)(e.node)(s);
    f();
  })();
  return [
    ...N0(t)(e.parentPath),
    ...(() => {
      if (o.tag === "Just") {
        if (i.tag === "Just")
          return [
            c({
              segment: o._1,
              state: Cr(t)(o._1)((() => {
                if (e.direction === "DiveIn")
                  return e.startT - 1e-4;
                if (e.direction === "DiveOut")
                  return e.endT - 1e-4;
                f();
              })()),
              bgAlpha: 1,
              role: Zc
            }),
            a({
              segment: i._1,
              state: Cr(t)(i._1)((() => {
                if (e.direction === "DiveIn")
                  return e.endT;
                if (e.direction === "DiveOut")
                  return e.startT - 1e-4;
                f();
              })()),
              bgAlpha: 1,
              role: ki
            })
          ];
        if (i.tag === "Nothing")
          return [
            c({
              segment: o._1,
              state: Cr(t)(o._1)((() => {
                if (e.direction === "DiveIn")
                  return e.startT - 1e-4;
                if (e.direction === "DiveOut")
                  return e.endT - 1e-4;
                f();
              })()),
              bgAlpha: 1,
              role: Zc
            })
          ];
        f();
      }
      if (o.tag === "Nothing")
        return [
          (() => {
            const g = x0(t)(n);
            return { segment: g, state: Cr(t)(g)(n), bgAlpha: 1, role: ki };
          })()
        ];
      f();
    })()
  ];
}, hp = (t) => (n) => {
  const e = yt(Mh(t))((() => {
    const r = (o, i) => {
      if (o.tag === "Leaf")
        return i;
      if (o.tag === "Node")
        return r(o._5, qt("Cons", o._4, r(o._6, i)));
      f();
    };
    return Et(Xt.foldr, r(n.tokens, Yt));
  })());
  return 0 < e.length ? v("Just", e[0]) : x;
}, pp = (t) => (n) => {
  const e = hp(t)(n);
  if (e.tag === "Nothing")
    return n.camera;
  if (e.tag === "Just")
    return Bh(t)(n.camera)(e._1.dot)(e._1.weight);
  f();
}, $p = (t) => (n) => t.placement.scale === 1 && t.placement.tx === 0 && t.placement.ty === 0 ? pp(t.layout)(n) : n.camera, mp = (t) => (n) => Ut((e) => n >= e.startT && n < e.endT)(t.dives), yp = (t) => (n) => {
  const e = x0(t)(n), r = Cr(t)(e)(n), o = t.dives.length !== 0, i = r0(t.cameraConfig)(t.layout)(t.cameraSpans)(n), s = op(e)($p(e)({ ...r, camera: i })), u = _p(t)(e)(n)({ bgAlpha: 1, role: ki, segment: e, state: { ...r, camera: s } }), c = N0(t)(e.path), a = mp(t)(n);
  if (a.tag === "Just")
    return { levels: dp(t)(n)(a._1), camera: i, rootLayout: t.layout, hasDives: o, diving: !0 };
  if (a.tag === "Nothing")
    return { levels: Bt(c)(u), camera: s, rootLayout: t.layout, hasDives: o, diving: !1 };
  f();
}, J0 = (t) => t, T0 = /* @__PURE__ */ J0("RunText"), Np = /* @__PURE__ */ J0("RunCode"), v0 = (t) => (n) => (e) => n.length === 0 ? e : Bt(e)({ style: t, text: Jr(n) }), xp = (t) => ({
  style: (() => {
    if (t.style === "RunText")
      return Np;
    if (t.style === "RunCode")
      return T0;
    f();
  })(),
  buf: [],
  runs: v0(t.style)(t.buf)(t.runs)
}), Jp = (t) => (n) => 0 < n.length ? { ...t, buf: Bt(t.buf)(n[0]) } : { ...t, buf: Bt(t.buf)("\\") }, Tp = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, c = Qt((a) => x, (a) => (g) => v("Just", { head: a, tail: g }), r);
    if (c.tag === "Nothing") {
      o = !1, i = s;
      continue;
    }
    if (c.tag === "Just") {
      if (c._1.head === "\\") {
        e = Jp(s)(c._1.tail), r = bt(1, c._1.tail.length, c._1.tail);
        continue;
      }
      if (c._1.head === "`") {
        e = xp(s), r = c._1.tail;
        continue;
      }
      e = { ...s, buf: Bt(s.buf)(c._1.head) }, r = c._1.tail;
      continue;
    }
    f();
  }
  return i;
}, w0 = (t) => {
  const n = Tp({ style: T0, buf: [], runs: [] })(sr(t));
  return v0(n.style)(n.buf)(n.runs);
};
let ei = null;
function vp() {
  return ei || (typeof document > "u" ? null : (ei = document.createElement("canvas").getContext("2d"), ei));
}
const ra = /* @__PURE__ */ new Map(), wp = (t) => (n) => (e) => (r) => () => {
  const o = `${e} ${n}px ${t}|${r}`, i = ra.get(o);
  if (i !== void 0) return i;
  const s = vp();
  if (!s)
    return r.length * n * 0.62;
  s.font = `${e} ${n}px ${t}`;
  const u = s.measureText(r).width;
  return ra.set(o, u), u;
}, kp = xr.traverse(Mi), bp = /* @__PURE__ */ J(Dr)(0), Xr = /* @__PURE__ */ (() => {
  const t = Ue(`\r
`)(" "), n = Ue(`
`)(" "), e = (() => {
    const r = Ue("\r")(" "), o = (() => {
      const i = Ue("	")(" ");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), k0 = (t) => (n) => {
  const e = kp((r) => {
    const o = (() => {
      if (r.style === "RunText")
        return t.text;
      if (r.style === "RunCode")
        return t.code;
      f();
    })();
    return wp(o.family)(o.size)(o.weight)(Xr(r.text));
  })(w0(Xr(n)));
  return () => {
    const r = e();
    return bp(r);
  };
}, Lp = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: "500" }, Ep = { family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", size: 11, weight: "400" }, b0 = { text: Lp, code: Ep }, Sp = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, br = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Cp = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Pp = (t) => (n) => {
  const e = at.compare(t)(n);
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
}, oa = (t) => Jr(wn(gr((n) => n === " ")(wn(gr((n) => n === " ")(sr(t)).rest)).rest)), Ap = (t) => J((n) => (e) => e._1 > 0 && (e._2 === " " || e._2 === "-" || e._2 === "_" || e._2 === ".") ? v("Just", e._1) : n)(x)(Ft(Oe)(t)), cu = (t) => (n) => {
  if (t <= 0)
    return [n];
  if (rr(n) <= t)
    return [n];
  const e = sr(n), r = t < 1 ? [] : bt(0, t, e), o = Ap(r);
  if (o.tag === "Just") {
    const i = oa(Rc(!(o._1 >= 0 && o._1 < r.length) || r[o._1] === " " ? o._1 : o._1 + 1 | 0)(n)), s = oa(No(o._1 + 1 | 0)(n));
    return s === "" ? [i] : [i, ...cu(t)(s)];
  }
  if (o.tag === "Nothing") {
    const i = Rc(t)(n), s = No(t)(n);
    return s === "" ? [i] : [i, ...cu(t)(s)];
  }
  f();
}, Ip = { cellW: 7, cellH: 3, maxLineWidth: 20 }, Fp = (t) => (n) => {
  const e = z((i) => b(
    (() => {
      if (i.label.tag === "Just")
        return i.label._1;
      if (i.label.tag === "Nothing")
        return i.id;
      f();
    })(),
    i
  ))(n.nodes), r = br(1)(Ae(
    (Cp(t.maxLineWidth)(J((i) => (s) => br(i)(rr(s._1)))(0)(e)) + 2 | 0) + t.cellW | 0,
    t.cellW
  )), o = (r * t.cellW | 0) - 1 | 0;
  return {
    ...n,
    nodes: z((i) => {
      if (!(i._2.size._1 === 1 && i._2.size._2 === 1))
        return i._2;
      const s = Tt(ss(`
`)(i._1))(cu(o)), u = J((a) => (g) => br(a)(rr(g)))(0)(s), c = i._2.shape === "Cylinder" ? br(1)(Ae((u + 2 | 0) + t.cellW | 0, t.cellW)) : r;
      return {
        ...i._2,
        size: b(
          ot(u > o ? Ae((u + 2 | 0) + t.cellW | 0, t.cellW) : c),
          ot(br(1)(Ae(s.length + t.cellH | 0, t.cellH)) + (i._2.shape === "Cylinder" || i._2.shape === "Document" ? 1 : 0) | 0)
        )
      };
    })(e)
  };
}, Rp = (t) => (n) => (e) => ({
  ...e,
  nodes: z((r) => {
    const o = Gp(r.id)(n);
    if (o.tag === "Nothing")
      return r;
    if (o.tag === "Just")
      return {
        ...r,
        size: b(
          Pp(r.size._1)(ot(br(1)(yn(ji(r.shape === "Cylinder" ? (o._1 + 0) / t : (o._1 + 32) / t))))),
          r.size._2
        )
      };
    f();
  })(e.nodes)
}), Bp = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Qp = (t) => {
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
}, ia = (t) => J((n) => (e) => n + R1(e.start)(e.end))(0)(t.segments), Wp = (t) => (n) => (e) => ({
  crossingCount: J((r) => (o) => r + o.jumps.length | 0)(0)(n),
  bendCount: J((r) => (o) => r + o.bends.length | 0)(0)(n),
  totalEdgeLength: J((r) => (o) => r + ia(o))(0)(n),
  maxEdgeLength: J((r) => (o) => Bp(r)(ia(o)))(0)(n),
  nodeOverlapCount: Qp(t),
  constraintViolations: e,
  jumpCount: J((r) => (o) => r + o.jumps.length | 0)(0)(n)
}), cc = (t) => t, Kt = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, ac = /* @__PURE__ */ cc("LEFT"), Hp = /* @__PURE__ */ cc("RIGHT"), L0 = /* @__PURE__ */ cc("UNDEFINED"), Dp = {
  eq: (t) => (n) => t === "LEFT" ? n === "LEFT" : t === "RIGHT" ? n === "RIGHT" : t === "UP" ? n === "UP" : t === "DOWN" ? n === "DOWN" : t === "UNDEFINED" && n === "UNDEFINED"
}, Op = {
  compare: (t) => (n) => {
    if (t === "LEFT")
      return n === "LEFT" ? Gn : Jn;
    if (n === "LEFT")
      return Tn;
    if (t === "RIGHT")
      return n === "RIGHT" ? Gn : Jn;
    if (n === "RIGHT")
      return Tn;
    if (t === "UP")
      return n === "UP" ? Gn : Jn;
    if (n === "UP")
      return Tn;
    if (t === "DOWN")
      return n === "DOWN" ? Gn : Jn;
    if (n === "DOWN")
      return Tn;
    if (t === "UNDEFINED" && n === "UNDEFINED")
      return Gn;
    f();
  },
  Eq0: () => Dp
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
}, qp = { x: 0, y: 0 }, Zn = (t) => (n) => (e) => {
  const r = Kt(t)(e.cNodes);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cNodes: U(it)(t)(n(r._1))(e.cNodes) };
  f();
}, po = (t) => (n) => (e) => {
  const r = Kt(t)(e.cGroups);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cGroups: U(it)(t)(n(r._1))(e.cGroups) };
  f();
}, Yp = (t) => J((n) => (e) => Zn(e)((r) => ({ ...r, hitboxPreCompaction: r.hitbox }))(n))(t)(t.cNodeOrder), Xp = (t) => {
  const n = J((e) => (r) => {
    const o = Kt(r)(t.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return J((i) => (s) => wt(it)(on)(s)([r])(i))(e)(o._1.constraints);
    f();
  })(I)(t.cNodeOrder);
  return J((e) => (r) => Zn(r)((o) => ({
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
}, Vp = (t) => (n) => Zn(t)((e) => ({ ...e, ignoreSpacing: { left: e.ignoreSpacing.left || n.left, right: e.ignoreSpacing.right || n.right, up: e.ignoreSpacing.up || n.up, down: e.ignoreSpacing.down || n.down } })), Up = (t) => {
  const n = J((e) => (r) => po(r)((o) => ({ ...o, outDegree: o.outDegreeReal }))(e))(t)(t.cGroupOrder);
  return J((e) => (r) => Zn(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder);
}, fe = { left: !1, right: !1, up: !1, down: !1 }, Kp = { horizontalSpacing: (t) => (n) => 0, verticalSpacing: (t) => (n) => 0 }, fc = (t) => J((n) => (e) => {
  const r = Kt(e)(n.cGroups);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just") {
    const o = J((s) => (u) => {
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
    })(x)(r._1.cNodes), i = po(e)((s) => ({ ...s, reference: o }))(n);
    if (o.tag === "Nothing")
      return i;
    if (o.tag === "Just") {
      const s = Kt(o._1)(i.cNodes);
      if (s.tag === "Nothing")
        return i;
      if (s.tag === "Just") {
        const u = s._1;
        return J((c) => (a) => Zn(a)((g) => ({ ...g, cGroupOffset: { x: g.hitbox.x - u.hitbox.x, y: g.hitbox.y - u.hitbox.y } }))(c))(i)(r._1.cNodes);
      }
    }
  }
  f();
})(t)(t.cGroupOrder), Un = (t) => fc({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return I;
      if (e.tag === "Node")
        return Ot("Node", e._1, e._2, e._3, { ...e._4, hitbox: { ...e._4.hitbox, x: -e._4.hitbox.x - e._4.hitbox.width } }, n(e._5), n(e._6));
      f();
    };
    return n(t.cNodes);
  })()
}), de = (t) => fc({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return I;
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
}), E0 = (t) => {
  const n = J((e) => (r) => po(r)((o) => ({ ...o, outDegree: 0, outDegreeReal: 0, incomingConstraints: [] }))(e))(t)(t.cGroupOrder);
  return J((e) => (r) => {
    const o = Kt(r)(e.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just") {
      if (o._1.cGroup.tag === "Nothing")
        return e;
      if (o._1.cGroup.tag === "Just") {
        const i = o._1.cGroup._1;
        return J((s) => (u) => {
          const c = Kt(u)(s.cNodes);
          if (c.tag === "Nothing")
            return s;
          if (c.tag === "Just")
            return c._1.cGroup.tag === "Just" && c._1.cGroup._1 !== i ? po(c._1.cGroup._1)((a) => ({ ...a, outDegree: a.outDegree + 1 | 0, outDegreeReal: a.outDegreeReal + 1 | 0 }))(po(i)((a) => Dn(Qr)(u)(a.incomingConstraints) ? a : { ...a, incomingConstraints: [...a.incomingConstraints, u] })(s)) : s;
          f();
        })(e)(o._1.constraints);
      }
    }
    f();
  })(n)(n.cNodeOrder);
}, ri = (t) => {
  const n = Xp(t.cGraph);
  return { ...t, cGraph: E0(J((e) => (r) => Zn(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder)) };
}, Mp = (t) => (n) => J((e) => (r) => {
  if (t === "LEFT" || t === "UP") {
    const i = r._2;
    return Zn(r._1)((s) => ({ ...s, constraints: [...s.constraints, i] }))(e);
  }
  const o = r._1;
  return Zn(r._2)((i) => ({ ...i, constraints: [...i.constraints, o] }))(e);
})(n)(t === "LEFT" || t === "RIGHT" ? n.predefinedHorizontalConstraints : n.predefinedVerticalConstraints), ae = (t) => {
  const n = {
    ...t,
    cGraph: Mp(t.direction)({
      ...t.cGraph,
      cNodes: (() => {
        const e = (r) => {
          if (r.tag === "Leaf")
            return I;
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
    cGraph: E0((() => {
      if (n.constraintAlgorithm.tag === "Nothing")
        return n.cGraph;
      if (n.constraintAlgorithm.tag === "Just")
        return n.constraintAlgorithm._1(n);
      f();
    })())
  };
}, jp = (t) => (n) => (e) => {
  const r = { ...e, direction: n };
  if (t === "UNDEFINED")
    return n === "LEFT" ? ae(r) : n === "RIGHT" ? ae({ ...r, cGraph: Un(r.cGraph) }) : n === "UP" ? ae({ ...r, cGraph: de(r.cGraph) }) : n === "DOWN" ? ae({ ...r, cGraph: Un(de(r.cGraph)) }) : r;
  if (t === "LEFT")
    return n === "RIGHT" ? ri({ ...r, cGraph: Un(r.cGraph) }) : n === "UP" ? ae({ ...r, cGraph: de(r.cGraph) }) : n === "DOWN" ? ae({ ...r, cGraph: Un(de(r.cGraph)) }) : r;
  if (t === "RIGHT")
    return n === "LEFT" ? ri({ ...r, cGraph: Un(r.cGraph) }) : n === "UP" ? ae({ ...r, cGraph: de(Un(r.cGraph)) }) : n === "DOWN" ? ae({ ...r, cGraph: Un(de(Un(r.cGraph))) }) : r;
  if (t === "UP")
    return n === "LEFT" ? ae({ ...r, cGraph: de(r.cGraph) }) : n === "RIGHT" ? ae({ ...r, cGraph: Un(de(r.cGraph)) }) : n === "DOWN" ? ri({ ...r, cGraph: Un(r.cGraph) }) : r;
  if (t === "DOWN")
    return n === "LEFT" ? ae({ ...r, cGraph: de(Un(r.cGraph)) }) : n === "RIGHT" ? ae({ ...r, cGraph: Un(de(Un(r.cGraph))) }) : n === "UP" ? ri({ ...r, cGraph: Un(r.cGraph) }) : r;
  f();
}, S0 = (t) => (n) => n.finished || !zp(t)(n.cGraph.supportedDirections) || (t === "LEFT" ? n.direction === "LEFT" : t === "RIGHT" ? n.direction === "RIGHT" : t === "UP" ? n.direction === "UP" : t === "DOWN" ? n.direction === "DOWN" : t === "UNDEFINED" && n.direction === "UNDEFINED") ? n : jp(n.direction)(t)(n), Zp = (t) => {
  if (t.finished)
    return t;
  const n = t.direction === "UNDEFINED" ? S0(ac)(t) : t, e = { ...n, cGraph: Up(n.cGraph) };
  if (e.compactionAlgorithm.tag === "Nothing")
    return e;
  if (e.compactionAlgorithm.tag === "Just")
    return e.compactionAlgorithm._1(e);
  f();
}, C0 = (t) => (n) => (e) => {
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
      cNodes: Dn(Qr)(t)(o._1.cNodes) ? o._1.cNodes : [...o._1.cNodes, t],
      reference: (() => {
        if (o._1.reference.tag === "Nothing")
          return v("Just", t);
        if (o._1.reference.tag === "Just")
          return v("Just", o._1.reference._1);
        f();
      })()
    })(e.cGroups)
  } : e;
}, P0 = (t) => (n) => ({
  id: n.nextCNodeId,
  graph: {
    ...n,
    cNodes: U(it)(n.nextCNodeId)({
      id: n.nextCNodeId,
      origin: t.origin,
      kind: t.kind,
      cGroup: x,
      cGroupOffset: qp,
      hitbox: t.hitbox,
      hitboxPreCompaction: t.hitbox,
      constraints: [],
      startPos: -1e308,
      ignoreSpacing: fe
    })(n.cNodes),
    cNodeOrder: [...n.cNodeOrder, n.nextCNodeId],
    nextCNodeId: n.nextCNodeId + 1 | 0
  }
}), gc = (t) => (n) => {
  const e = n.nextCGroupId;
  return {
    id: e,
    graph: J((r) => (o) => C0(o)(e)(r))({
      ...n,
      cGroups: U(it)(e)({
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
}, t$ = (t) => J((n) => (e) => {
  const r = Kt(e)(n.cNodes);
  return r.tag === "Just" && r._1.cGroup.tag === "Nothing" ? gc({ master: x, nodes: [e] })(n).graph : n;
})(t)(t.cNodeOrder), n$ = (t) => ({
  cGraph: Yp(t$(fc(t))),
  direction: L0,
  compactionAlgorithm: x,
  constraintAlgorithm: x,
  spacingsHandler: Kp,
  lockFun: x,
  finished: !1
}), e$ = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, r$ = (t) => (n) => {
  const e = at.compare(t._1)(n._1);
  return e === "LT" ? Jn : e === "GT" ? Tn : it.compare(t._2)(n._2);
}, o$ = /* @__PURE__ */ (() => {
  const t = ee.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), sa = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, ua = (t) => t.kind.tag === "Nothing" ? !1 : t.kind.tag === "Just" && t.kind._1 === "vs", ca = (t) => t.kind.tag === "Nothing" || !(t.kind.tag === "Just" && t.kind._1 === "vs"), gs = (t) => (n) => r$(b(t.hitbox.x + t.hitbox.width / 2, t.id))(b(n.hitbox.x + n.hitbox.width / 2, n.id)), i$ = (t) => (n) => {
  const e = pr(zt, x, (r) => gs(t)(r) === "LT", n);
  if (e.tag === "Just") {
    const r = Cf(zt, x, e._1, t, n);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return Bt(n)(t);
  f();
}, G0 = (t) => (n) => {
  const e = ft((o) => gs(o)(t) === "LT", n), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? v("Just", e[r]) : x;
}, s$ = (t) => (n) => {
  const e = i$(n)(t.intervals), r = Ut((i) => gs(n)(i) === "LT")(e), o = U(it)(n.id)((() => {
    const i = G0(n)(e);
    return i.tag === "Just" ? v("Just", i._1.id) : x;
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
}, u$ = (t) => (n) => {
  const e = at.compare(t.low ? t.node.hitbox.y : t.node.hitbox.y + t.node.hitbox.height)(n.low ? n.node.hitbox.y : n.node.hitbox.y + n.node.hitbox.height);
  return e === "EQ" ? t.low ? t.low && !n.low ? Tn : Gn : n.low ? Jn : Gn : e;
}, c$ = (t) => J((n) => (e) => Zn(e.id)((r) => ({ ...r, constraints: [] }))(n))(t)(yt((n) => Kt(n)(t.cNodes))(t.cNodeOrder)), Cs = (t) => (n) => J((e) => (r) => {
  const o = Kt(r._1)(e.cNodes);
  if (o.tag === "Just")
    return Zn(r._1)((i) => ({ ...i, constraints: [...i.constraints, ...r._2] }))(e);
  if (o.tag === "Nothing")
    return e;
  f();
})(n)(o$(t)), A0 = (t) => (n) => n.kind.tag !== "Nothing" && n.kind.tag === "Just" && n.kind._1 === "vs" ? n.ignoreSpacing.up ? n.ignoreSpacing.down ? n : { ...n, hitbox: { ...n.hitbox, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t - 0.01, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t, height: n.hitbox.height + 2 * t } }, aa = (t) => (n) => (e) => J((r) => (o) => e(o) ? Zn(o.id)(A0(t))(r) : r)(n)(yt((r) => Kt(r)(n.cNodes))(n.cNodeOrder)), a$ = (t) => (n) => {
  const e = (r, o, i) => {
    const s = Zn(i)(A0(t))(r);
    return o.length <= 1 ? s : J((u) => (c) => c === i ? u : Zn(c)((a) => a.ignoreSpacing.up ? { ...a, hitbox: { ...a.hitbox, y: a.hitbox.y + t + 0.01, height: a.hitbox.height - t - 0.01 } } : a.ignoreSpacing.down ? { ...a, hitbox: { ...a.hitbox, height: a.hitbox.height - t - 0.01 } } : a)(u))(s)(o);
  };
  return J((r) => (o) => {
    if (o.master.tag === "Nothing")
      return 0 < o.cNodes.length ? e(r, o.cNodes, o.cNodes[0]) : r;
    if (o.master.tag === "Just")
      return e(r, o.cNodes, o.master._1);
    f();
  })(n)(yt((r) => Kt(r)(n.cGroups))(n.cGroupOrder));
}, f$ = (t) => (n) => {
  const e = G0(n)(t.intervals), r = Ut((i) => gs(n)(i) === "LT")(t.intervals), o = e.tag === "Just" && (() => {
    const i = sa(n.id)(t.cand);
    return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === e._1.id)) && e._1.cGroup.tag === "Just" && n.cGroup.tag === "Just" && e._1.cGroup._1 !== n.cGroup._1;
  })() ? wt(it)(on)(e._1.id)([n.id])(t.constraints) : t.constraints;
  return {
    ...t,
    constraints: r.tag === "Just" && (() => {
      const i = sa(r._1.id)(t.cand);
      return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === n.id)) && n.cGroup.tag === "Just" && r._1.cGroup.tag === "Just" && n.cGroup._1 !== r._1.cGroup._1;
    })() ? wt(it)(on)(n.id)([r._1.id])(o) : o,
    intervals: ft((i) => i.id !== n.id, t.intervals)
  };
}, g$ = (t) => (n) => n.low ? s$(t)(n.node) : f$(t)(n.node), Ps = (t) => (n) => J(g$)({ intervals: [], cand: I, constraints: I })(Lt(u$)(Tt(ft(
  t,
  yt((e) => Kt(e)(n.cNodes))(n.cNodeOrder)
))((e) => [{ node: e, low: !0 }, { node: e, low: !1 }]))).constraints, l$ = (t) => (n) => {
  const e = e$(0)(t / 2 - 0.5), r = Cs(Ps(ua)(aa(e)(n)(ua)))(n), o = Cs(Ps(ca)(aa(e)(r)(ca)))(r);
  return Cs(Ps((i) => !0)(a$(e)(o)))(o);
}, _$ = (t) => (n) => l$(t)(c$(n.cGraph)), Ei = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, fa = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, lc = (t) => (n) => (e) => (r) => (o) => ({
  id: t,
  representedEdges: [o],
  affectedBends: [n, e],
  hitbox: { x: Ei(n._1)(e._1), y: Ei(n._2)(e._2), width: er(n._1 - e._1), height: er(n._2 - e._2) },
  ignoreSpacing: fe,
  potentialGroupParents: (() => {
    if (r.tag === "Nothing")
      return [];
    if (r.tag === "Just")
      return [r._1];
    f();
  })(),
  aPort: x
}), d$ = (t) => (n) => {
  const e = Ei(t.hitbox.x)(n.hitbox.x), r = Ei(t.hitbox.y)(n.hitbox.y);
  return {
    ...t,
    representedEdges: [...t.representedEdges, ...n.representedEdges],
    affectedBends: [...t.affectedBends, ...n.affectedBends],
    potentialGroupParents: [...t.potentialGroupParents, ...n.potentialGroupParents],
    hitbox: {
      x: e,
      y: r,
      width: fa(t.hitbox.x + t.hitbox.width)(n.hitbox.x + n.hitbox.width) - e,
      height: fa(t.hitbox.y + t.hitbox.height)(n.hitbox.y + n.hitbox.height) - r
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
}, h$ = (t) => (n) => er(t.hitbox.x - n.hitbox.x) <= 1e-4 && n.hitbox.y - (t.hitbox.y + t.hitbox.height) <= 1e-4 && t.hitbox.y - (n.hitbox.y + n.hitbox.height) <= 1e-4, p$ = (t) => (n) => er(t.hitbox.x - n.hitbox.x) <= 1e-4 ? at.compare(t.hitbox.y)(n.hitbox.y) : t.hitbox.x < n.hitbox.x ? Jn : Tn, I0 = (t, n) => ({ tag: t, _1: n }), _c = /* @__PURE__ */ nn(C)(Dt), ls = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, ga = /* @__PURE__ */ (() => {
  const t = { eq: (e) => (r) => e._1 === r._1 && (e._2.tag === "Nothing" ? r._2.tag === "Nothing" : e._2.tag === "Just" && r._2.tag === "Just" && e._2._1 === r._2._1) }, n = {
    compare: (e) => (r) => {
      const o = C.compare(e._1)(r._1);
      if (o === "LT")
        return Jn;
      if (o === "GT")
        return Tn;
      if (e._2.tag === "Nothing")
        return r._2.tag === "Nothing" ? Gn : Jn;
      if (r._2.tag === "Nothing")
        return Tn;
      if (e._2.tag === "Just" && r._2.tag === "Just")
        return C.compare(e._2._1)(r._2._1);
      f();
    },
    Eq0: () => t
  };
  return J((e) => (r) => U(n)(r)()(e))(I);
})(), He = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, $$ = /* @__PURE__ */ J((t) => (n) => U(Op)(n)()(t))(I), Gs = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = Vf.compare(t)(s._3);
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
}, m$ = (t) => (n) => {
  const e = _c(z((i) => b(i.id, i))(t)), r = yt((i) => ls(i)(e))(n), o = it.compare((() => {
    const i = ga(z((s) => b(s.from.node, s.from.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })())((() => {
    const i = ga(z((s) => b(s.to.node, s.to.port))(r));
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
}, y$ = (t) => yt((n) => {
  if (n.direction === "V")
    return v("Just", { start: n.start, end: n.end });
  if (n.direction === "H")
    return x;
  f();
})(t.segments), oi = (t) => (n) => (e) => (r) => {
  if (r.tag === "Just") {
    const o = He(e)(n);
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
}, N$ = (t) => (n) => (e) => {
  const r = P0({
    origin: v("Just", I0("SegmentOrigin", e)),
    kind: v("Just", "vs"),
    hitbox: e.hitbox
  })(n.cGraph), o = Vp(r.id)(e.ignoreSpacing)(r.graph);
  return {
    ...n,
    cGraph: (() => {
      if (0 < e.potentialGroupParents.length) {
        const i = Kt(e.potentialGroupParents[0])(o.cNodes);
        if (i.tag === "Just") {
          if (i._1.cGroup.tag === "Just")
            return C0(r.id)(i._1.cGroup._1)(o);
          if (i._1.cGroup.tag === "Nothing")
            return o;
          f();
        }
        if (i.tag === "Nothing")
          return o;
        f();
      }
      return gc({ master: v("Just", r.id), nodes: [r.id] })(o).graph;
    })(),
    edgeToCs: J((i) => (s) => wt(C)(on)(s)([r.id])(i))(n.edgeToCs)(e.representedEdges),
    lockMap: U(it)(r.id)(m$(t)(e.representedEdges))(n.lockMap)
  };
}, x$ = (t) => (n) => (e) => {
  const r = Qt(
    (o) => x,
    (o) => (i) => v("Just", { head: o, tail: i }),
    Lt(p$)(n)
  );
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just") {
    const o = J((i) => (s) => h$(i.survivor)(s) ? { ...i, survivor: d$(i.survivor)(s) } : { survivor: s, merged: [...i.merged, i.survivor] })({ survivor: r._1.head, merged: [] })(r._1.tail);
    return J(N$(t))(e)([...o.merged, o.survivor]);
  }
  f();
}, J$ = (t) => ({
  cGraph: {
    cNodes: I,
    cNodeOrder: [],
    cGroups: I,
    cGroupOrder: [],
    supportedDirections: $$([L0, ac, Hp]),
    predefinedHorizontalConstraints: [],
    predefinedVerticalConstraints: [],
    nextCNodeId: 0,
    nextCGroupId: 0
  },
  nodeToC: I,
  edgeToCs: I,
  lockMap: I
}), T$ = (t) => {
  const n = ot(4);
  return { x: t.position._1 * n, y: t.position._2 * n, width: t.size._1 * n, height: t.size._2 * n };
}, v$ = (t) => (n) => (e) => J((r) => (o) => {
  const i = P0({ origin: v("Just", I0("NodeOrigin", o.node)), kind: x, hitbox: T$(o) })(r.cGraph), s = He(o.node)(t), u = (() => {
    if (s.tag === "Nothing")
      return b(0, 0);
    if (s.tag === "Just")
      return s._1;
    f();
  })();
  return {
    ...r,
    cGraph: gc({ master: v("Just", i.id), nodes: [i.id] })(i.graph).graph,
    nodeToC: U(C)(o.node)(i.id)(r.nodeToC),
    lockMap: U(it)(i.id)((() => {
      const c = u._1 - u._2 | 0;
      return c < 0 ? { ...fe, left: !0 } : c > 0 ? { ...fe, right: !0 } : fe;
    })())(r.lockMap)
  };
})(e)(n), w$ = (t) => J((n) => (e) => wt(C)((r) => (o) => b(
  r._1 + o._1 | 0,
  r._2 + o._2 | 0
))(e.to.node)(b(1, 0))(wt(C)((r) => (o) => b(r._1 + o._1 | 0, r._2 + o._2 | 0))(e.from.node)(b(
  0,
  1
))(n)))(I)(t), k$ = (t) => J((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? U(C)(e.origin._1._1)(e.hitbox.x)(n) : n)(I)(yt((n) => Kt(n)(t.cNodes))(t.cNodeOrder)), b$ = (t) => J((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? U(C)(e.origin._1._1)(e.hitbox.x - e.hitboxPreCompaction.x)(n) : n)(I)(yt((n) => Kt(n)(t.cNodes))(t.cNodeOrder)), L$ = (t) => J((n) => (e) => {
  if (e.origin.tag === "Just" && e.origin._1.tag === "SegmentOrigin") {
    const r = e.hitbox.x - e.hitboxPreCompaction.x;
    return J((o) => (i) => U(Vf)(i)(r)(o))(n)(e.origin._1._1.affectedBends);
  }
  return n;
})(I)(yt((n) => Kt(n)(t.cNodes))(t.cNodeOrder)), F0 = (t) => {
  const n = _c(z((e) => b(e.id, e))(t.edges));
  return yt((e) => {
    const r = ls(e.edge)(n);
    if (r.tag === "Just")
      return e.reversed ? v(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.to.node,
          tgt: r._1.from.node,
          srcSide: oi(Ce)(t.ports)(r._1.to.node)(r._1.to.port),
          tgtSide: oi(Pe)(t.ports)(r._1.from.node)(r._1.from.port),
          path: e
        }
      ) : v(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.from.node,
          tgt: r._1.to.node,
          srcSide: oi(Ce)(t.ports)(r._1.from.node)(r._1.from.port),
          tgtSide: oi(Pe)(t.ports)(r._1.to.node)(r._1.to.port),
          path: e
        }
      );
    if (r.tag === "Nothing")
      return x;
    f();
  })(t.paths);
}, E$ = (t) => (n) => {
  const e = Tt(n)((r) => {
    if (r.src === r.tgt)
      return [];
    if ((r.srcSide === "North" || r.srcSide === "South") && (r.tgtSide === "North" || r.tgtSide === "South"))
      return [];
    const o = He(r.tgt)(t.nodeToC), i = (() => {
      if (o.tag === "Just")
        return Kt(o._1)(t.cGraph.cNodes);
      if (o.tag === "Nothing")
        return x;
      f();
    })(), s = He(r.src)(t.nodeToC), u = (() => {
      if (s.tag === "Just")
        return Kt(s._1)(t.cGraph.cNodes);
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
    })(), a = (l) => (h) => (p) => {
      if (u.tag === "Just") {
        if (u._1.cGroup.tag === "Just") {
          if (p.cGroup.tag === "Just")
            return l(p.hitbox.x) && p.cGroup._1 !== u._1.cGroup._1 ? v("Just", h(p.cGroup._1)(u._1.cGroup._1)) : x;
          if (p.cGroup.tag === "Nothing")
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
    }, g = yt((l) => Kt(l)(t.cGraph.cNodes))((() => {
      const l = ls(r.edgeId)(t.edgeToCs);
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
      return qn((s) => Dn(le)(s)(i.representedEdges), r.origin._1._1.representedEdges);
    })(),
    vsLNodePair: (r) => (o) => r.origin.tag === "Just" && o.origin.tag === "Just" && (r.origin._1.tag === "SegmentOrigin" ? o.origin._1.tag === "NodeOrigin" : r.origin._1.tag === "NodeOrigin" && o.origin._1.tag === "SegmentOrigin"),
    edgeLengthEdges: (r) => e
  };
}, S$ = (t) => (n) => {
  const e = ot(4), r = k$(t), o = b$(t), i = _c(z((u) => b(u.id, b(u.from.node, u.to.node)))(n.edges)), s = L$(t);
  return {
    nodes: z((u) => {
      const c = He(u.node)(r);
      if (c.tag === "Just")
        return { ...u, position: b(c._1 / e, u.position._2) };
      if (c.tag === "Nothing")
        return u;
      f();
    })(n.nodes),
    edges: z((u) => {
      const c = ls(u.edge)(i), a = (() => {
        if (c.tag === "Nothing")
          return u.segments;
        if (c.tag === "Just") {
          const g = He(c._1._1)(o), _ = (() => {
            if (g.tag === "Nothing")
              return 0;
            if (g.tag === "Just")
              return g._1;
            f();
          })(), d = He(c._1._2)(o), l = (() => {
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
                  const T = Gs(y.start)(s);
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
                      const N = Gs(y.start)(s);
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
                      const N = Gs(y.end)(s);
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
      return { ...u, segments: a, bends: kn((g) => (_) => g.end, a, bt(1, a.length, a)) };
    })(n.paths)
  };
}, C$ = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = lc(o.nextId)(i._2.start)(i._2.end)(x)(t.edgeId), u = (() => {
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
}, la = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...lc(i.nextId)(r.start)(b(r.start._1, o.down ? e.y : e.y + e.height))(v(
        "Just",
        n
      ))(t.edgeId),
      aPort: v("Just", { node: t.src, side: o.side }),
      ignoreSpacing: o.down ? { ...fe, down: !0 } : { ...fe, up: !0 }
    }
  ]
}), ii = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...lc(i.nextId)(r.end)(b(r.end._1, o.down ? e.y : e.y + e.height))(v(
        "Just",
        n
      ))(t.edgeId),
      aPort: v("Just", { node: t.tgt, side: o.side }),
      ignoreSpacing: o.down ? { ...fe, down: !0 } : { ...fe, up: !0 }
    }
  ]
}), P$ = (t) => (n) => (e) => {
  if (e.src === e.tgt)
    return n;
  const r = He(e.src)(t.nodeToC), o = He(e.tgt)(t.nodeToC), i = (() => {
    if (r.tag === "Just") {
      const g = Kt(r._1)(t.cGraph.cNodes);
      return g.tag === "Just" ? v("Just", g._1.hitbox) : x;
    }
    if (r.tag === "Nothing")
      return x;
    f();
  })(), s = (() => {
    if (o.tag === "Just") {
      const g = Kt(o._1)(t.cGraph.cNodes);
      return g.tag === "Just" ? v("Just", g._1.hitbox) : x;
    }
    if (o.tag === "Nothing")
      return x;
    f();
  })(), u = y$(e.path), c = J(C$(e)(i)(s)(u.length - 1 | 0))(n)(Ft((g) => (_) => b(
    g,
    _
  ))(u));
  if (0 < u.length) {
    const g = (() => {
      if (r.tag === "Just" && i.tag === "Just") {
        if (e.srcSide === "North")
          return la(e)(r._1)(i._1)(u[0])({ side: dn, down: !0 })(c);
        if (e.srcSide === "South")
          return la(e)(r._1)(i._1)(u[0])({ side: hn, down: !1 })(c);
      }
      return c;
    })(), _ = u.length - 1 | 0;
    if (_ >= 0 && _ < u.length && o.tag === "Just" && s.tag === "Just") {
      if (e.tgtSide === "North")
        return ii(e)(o._1)(s._1)(u[_])({ side: dn, down: !0 })(g);
      if (e.tgtSide === "South")
        return ii(e)(o._1)(s._1)(u[_])({ side: hn, down: !1 })(g);
    }
    return g;
  }
  const a = u.length - 1 | 0;
  if (a >= 0 && a < u.length && o.tag === "Just" && s.tag === "Just") {
    if (e.tgtSide === "North")
      return ii(e)(o._1)(s._1)(u[a])({ side: dn, down: !0 })(c);
    if (e.tgtSide === "South")
      return ii(e)(o._1)(s._1)(u[a])({ side: hn, down: !1 })(c);
  }
  return c;
}, G$ = (t) => (n) => (e) => x$(t)(J(P$(e))({ nextId: 0, segments: [] })(n).segments)(e), A$ = (t) => G$(t.edges)(F0(t))(v$(w$(t.edges))(t.nodes)(J$())), De = (t) => (e) => {
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
}, au = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, fu = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, I$ = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, F$ = (t) => {
  const n = t.Eq0();
  return (e) => (r) => {
    const o = (u) => {
      let c = u, a = !0, g;
      for (; a; ) {
        const _ = c, d = Qt((l) => x, (l) => (h) => v("Just", { head: l, tail: h }), _.queue);
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
                      w = !1, k = x;
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
                    k = !1, L = x;
                    continue;
                  }
                  if (P.tag === "Node") {
                    const O = t.compare(p)(P._3);
                    if (O === "LT") {
                      w = P._5;
                      continue;
                    }
                    if (O === "GT") {
                      w = P._6;
                      continue;
                    }
                    if (O === "EQ") {
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
                    const O = t.compare(p)(P._3);
                    if (O === "LT") {
                      w = P._5;
                      continue;
                    }
                    if (O === "GT") {
                      w = P._6;
                      continue;
                    }
                    if (O === "EQ") {
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
    }, i = J((u) => (c) => wt(t)(sn)(c.src)(1)(wt(t)(sn)(c.tgt)(1)(u)))(I)(r), s = o({
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
})(e)(wn(n)), gu = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = { ...o, treeNode: U(t)(r)()(o.treeNode) };
    return J((s) => (u) => {
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
        const g = gu(t)(e)(a)(c);
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
                N = !1, T = x;
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
                N = !1, T = x;
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
        const g = gu(t)(e)(a)({ ...c, treeEdge: U(it)(u.eid)()(c.treeEdge) });
        return { count: s.count + g.count | 0, st: g.st };
      }
      return { ...s, st: c };
    })({ count: 1, st: i })(ft((s) => (n.eq(s.src)(r) || n.eq(s.tgt)(r)) && !De(s.eid)(i.edgeVisited), e));
  };
}, Si = (t) => (n) => (e) => (r) => {
  const o = r.src, s = ((p) => {
    let $ = p, m = !0, y;
    for (; m; ) {
      const N = $;
      if (N.tag === "Leaf") {
        m = !1, y = x;
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
        m = !1, y = x;
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
        m = !1, y = x;
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
          T = !1, w = x;
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
            const O = k;
            if (O.tag === "Leaf") {
              L = !1, P = x;
              continue;
            }
            if (O.tag === "Node") {
              const X = t.compare(y)(O._3);
              if (X === "LT") {
                k = O._5;
                continue;
              }
              if (X === "GT") {
                k = O._6;
                continue;
              }
              if (X === "EQ") {
                L = !1, P = v("Just", O._4);
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
}, B$ = (t) => {
  const n = nn(t)(Dt);
  return (e) => ({
    layer: n(z((r) => b(r, 0))(e)),
    treeNode: I,
    treeEdge: I,
    poID: I,
    lowestPoID: I,
    cutvalue: I,
    postOrder: 1,
    edgeVisited: I
  });
}, Q$ = (t) => (n) => (e) => J((r) => (o) => {
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
        h = !1, p = x;
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
        h = !1, p = x;
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
})({ edge: x, slack: 1e9 })(n).edge, W$ = (t) => {
  const n = nn(t)(Dt);
  return (e) => (r) => {
    const o = J((i) => (s) => au(i)((() => {
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
    return n(z((i) => b(
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
}, R0 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = J((u) => (c) => {
      const a = R0(t)(e)(n.eq(c.src)(r) ? c.tgt : c.src)({ ...u.st, edgeVisited: U(it)(c.eid)()(u.st.edgeVisited) });
      return { lowest: au(u.lowest)(a.lowest), st: a.st };
    })({ lowest: 1e9, st: o })(ft(
      (u) => De(u.eid)(o.treeEdge) && (n.eq(u.src)(r) || n.eq(u.tgt)(r)) && !De(u.eid)(o.edgeVisited),
      e
    )), s = au(i.lowest)(i.st.postOrder);
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
}, B0 = (t) => {
  const n = R0(t);
  return (e) => (r) => (o) => 0 < e.length ? n(r)(e[0])({ ...o, edgeVisited: I, postOrder: 1, poID: I, lowestPoID: I }).st : o;
}, H$ = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => ft((i) => De(i.eid)(r.treeEdge) && (n.eq(i.src)(o) || n.eq(i.tgt)(o)), e);
}, D$ = (t) => (n) => Ut((e) => {
  const r = fu(e.eid)(n.cutvalue);
  return De(e.eid)(n.treeEdge) && (() => {
    if (r.tag === "Nothing")
      return !1;
    if (r.tag === "Just")
      return r._1 < -1e-10;
    f();
  })();
})(t), Q0 = (t) => {
  const n = gu(t);
  return (e) => (r) => (o) => {
    const i = 0 < e.length ? v("Just", e[0]) : x;
    if (i.tag === "Nothing")
      return o;
    if (i.tag === "Just") {
      const s = n(r)(i._1)({ ...o, edgeVisited: I, treeNode: I, treeEdge: I });
      if (s.count >= e.length)
        return s.st;
      const u = Q$(t)(r)(s.st);
      if (u.tag === "Nothing")
        return s.st;
      if (u.tag === "Just") {
        const c = u._1.tgt, g = (($) => {
          let m = $, y = !0, N;
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
        })(s.st.layer), _ = u._1.src, l = (($) => {
          let m = $, y = !0, N;
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
        return Q0(t)(e)(r)({
          ...s.st,
          layer: J(($) => (m) => ((N) => {
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
                  k = !1, L = x;
                  continue;
                }
                if (P.tag === "Node") {
                  const O = t.compare(m)(P._3);
                  if (O === "LT") {
                    w = P._5;
                    continue;
                  }
                  if (O === "GT") {
                    w = P._6;
                    continue;
                  }
                  if (O === "EQ") {
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
}, O$ = (t) => (n) => (e) => (r) => J((o) => (i) => {
  if (Si(t)(r)(i.src)(e) && !Si(t)(r)(i.tgt)(e)) {
    const s = i.tgt, c = ((l) => {
      let h = l, p = !0, $;
      for (; p; ) {
        const m = h;
        if (m.tag === "Leaf") {
          p = !1, $ = x;
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
          p = !1, $ = x;
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
})({ edge: x, slack: 1e9 })(n).edge, z$ = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => (i) => {
    const s = i.tgt, u = i.src;
    return J((c) => (a) => {
      if ((() => {
        const g = fu(a.eid)(r.cutvalue);
        if (g.tag === "Just")
          return !0;
        if (g.tag === "Nothing")
          return !1;
        f();
      })()) {
        const g = fu(a.eid)(r.cutvalue), _ = (() => {
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
}, q$ = (t) => {
  const n = z$(t);
  return (e) => (r) => (o) => {
    const i = (u, c, a) => {
      const _ = ((d) => {
        let l = d, h = !0, p;
        for (; h; ) {
          const $ = l;
          if ($.tag === "Leaf") {
            h = !1, p = x;
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
              T = !1, w = x;
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
}, W0 = (t) => {
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
  }, i = J((a) => (g) => U(o)(g)()(a))(I), s = H$(t), u = nn(t)(Dt), c = q$(t);
  return (a) => (g) => (_) => {
    const d = {
      unknown: u(z((l) => b(
        l,
        Et(On.foldr, i(s(g)(_)(l)))
      ))(a)),
      cutvalue: I
    };
    return {
      ..._,
      cutvalue: J(c(g))(d)(ft(
        (l) => {
          const p = (($) => {
            let m = $, y = !0, N;
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
}, Y$ = (t) => {
  const n = B0(t), e = W0(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const c = { ...u, treeEdge: U(it)(s.eid)()(yo(it)(i.eid)(u.treeEdge)) }, a = s.tgt, _ = ((m) => {
      let y = m, N = !0, T;
      for (; N; ) {
        const w = y;
        if (w.tag === "Leaf") {
          N = !1, T = x;
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
          N = !1, T = x;
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
    })(), $ = Si(t)(c)(s.tgt)(i) ? p : -p;
    return e(r)(o)(n(r)(o)({
      ...c,
      layer: J((m) => (y) => Si(t)(c)(y)(i) ? m : U(t)(y)((() => {
        const T = ((w) => {
          let k = w, L = !0, P;
          for (; L; ) {
            const O = k;
            if (O.tag === "Leaf") {
              L = !1, P = x;
              continue;
            }
            if (O.tag === "Node") {
              const X = t.compare(y)(O._3);
              if (X === "LT") {
                k = O._5;
                continue;
              }
              if (X === "GT") {
                k = O._6;
                continue;
              }
              if (X === "EQ") {
                L = !1, P = v("Just", O._4);
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
}, X$ = (t) => {
  const n = Y$(t);
  return (e) => (r) => (o) => (i) => ((u) => (c) => {
    let a = u, g = c, _ = !0, d;
    for (; _; ) {
      const l = a, h = g;
      if (l === 0) {
        _ = !1, d = h;
        continue;
      }
      const p = D$(o)(h);
      if (p.tag === "Nothing") {
        _ = !1, d = h;
        continue;
      }
      if (p.tag === "Just") {
        const $ = O$(t)(o)(p._1)(h);
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
}, V$ = (t) => {
  const n = W0(t), e = B0(t), r = Q0(t);
  return (o) => (i) => (s) => n(o)(i)(e(o)(i)(r(o)(i)(s)));
}, _a = (t) => (n) => J((e) => (r) => wt(t)(on)(n(r))([r])(e))(I), U$ = (t) => {
  const n = nn(t)(Dt);
  return (e) => (r) => (o) => {
    const i = (c) => (a) => (g) => (_) => {
      let d = c, l = a, h = g, p = _, $ = !0, m;
      for (; $; ) {
        const y = d, N = l, T = h, w = p, k = Qt((L) => x, (L) => (P) => v("Just", { head: L, tail: P }), T);
        if (k.tag === "Nothing") {
          $ = !1, m = w;
          continue;
        }
        if (k.tag === "Just") {
          const L = k._1.head, O = ((A) => {
            let B = A, et = !0, st;
            for (; et; ) {
              const Y = B;
              if (Y.tag === "Leaf") {
                et = !1, st = x;
                continue;
              }
              if (Y.tag === "Node") {
                const R = t.compare(L)(Y._3);
                if (R === "LT") {
                  B = Y._5;
                  continue;
                }
                if (R === "GT") {
                  B = Y._6;
                  continue;
                }
                if (R === "EQ") {
                  et = !1, st = v("Just", Y._4);
                  continue;
                }
              }
              f();
            }
            return st;
          })(w.layer), X = (() => {
            if (O.tag === "Nothing")
              return 0;
            if (O.tag === "Just")
              return O._1;
            f();
          })(), V = J((A) => (B) => {
            const et = B.tgt, Y = ((E) => {
              let S = E, H = !0, G;
              for (; H; ) {
                const W = S;
                if (W.tag === "Leaf") {
                  H = !1, G = x;
                  continue;
                }
                if (W.tag === "Node") {
                  const Q = t.compare(et)(W._3);
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
            })(A.incident), R = (() => {
              if (Y.tag === "Nothing")
                return -1;
              if (Y.tag === "Just")
                return Y._1 - 1 | 0;
              f();
            })();
            return {
              st: {
                ...A.st,
                layer: U(t)(B.tgt)(I$((() => {
                  const E = B.tgt, H = ((G) => {
                    let W = G, Q = !0, M;
                    for (; Q; ) {
                      const q = W;
                      if (q.tag === "Leaf") {
                        Q = !1, M = x;
                        continue;
                      }
                      if (q.tag === "Node") {
                        const D = t.compare(E)(q._3);
                        if (D === "LT") {
                          W = q._5;
                          continue;
                        }
                        if (D === "GT") {
                          W = q._6;
                          continue;
                        }
                        if (D === "EQ") {
                          Q = !1, M = v("Just", q._4);
                          continue;
                        }
                      }
                      f();
                    }
                    return M;
                  })(A.st.layer);
                  if (H.tag === "Nothing")
                    return 0;
                  if (H.tag === "Just")
                    return H._1;
                  f();
                })())(X + B.delta | 0))(A.st.layer)
              },
              incident: U(t)(B.tgt)(R)(A.incident),
              queue: R === 0 ? [...A.queue, B.tgt] : A.queue
            };
          })({ st: w, incident: N, queue: k._1.tail })((() => {
            const B = ((et) => {
              let st = et, Y = !0, R;
              for (; Y; ) {
                const E = st;
                if (E.tag === "Leaf") {
                  Y = !1, R = x;
                  continue;
                }
                if (E.tag === "Node") {
                  const S = t.compare(L)(E._3);
                  if (S === "LT") {
                    st = E._5;
                    continue;
                  }
                  if (S === "GT") {
                    st = E._6;
                    continue;
                  }
                  if (S === "EQ") {
                    Y = !1, R = v("Just", E._4);
                    continue;
                  }
                }
                f();
              }
              return R;
            })(y);
            if (B.tag === "Nothing")
              return [];
            if (B.tag === "Just")
              return B._1;
            f();
          })());
          d = y, l = V.incident, h = V.queue, p = V.st;
          continue;
        }
        f();
      }
      return m;
    }, s = _a(t)((c) => c.tgt)(r), u = n(z((c) => b(
      c,
      (() => {
        const g = ((_) => {
          let d = _, l = !0, h;
          for (; l; ) {
            const p = d;
            if (p.tag === "Leaf") {
              l = !1, h = x;
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
    return i(_a(t)((c) => c.src)(r))(u)(ft(
      (c) => {
        const g = ((_) => {
          let d = _, l = !0, h;
          for (; l; ) {
            const p = d;
            if (p.tag === "Leaf") {
              l = !1, h = x;
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
}, K$ = (t) => {
  const n = B$(t), e = U$(t), r = V$(t), o = X$(t);
  return (i) => (s) => {
    const u = e(i)(s)(n(i));
    return s.length === 0 ? u.layer : o(4 * i.length | 0)(i)(s)(r(i)(s)(u)).layer;
  };
}, H0 = (t) => {
  const n = W$(t), e = K$(t), r = F$(t);
  return (o) => (i) => {
    if (o.length === 0)
      return I;
    if (o.length < 40)
      return n(o)(e(o)(i));
    const s = r(o)(i);
    return n(o)(R$(t)(s.removed)(e(s.coreNodes)(s.coreEdges)));
  };
}, D0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, lu = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, M$ = /* @__PURE__ */ H0(it), bo = (t) => (n) => ({ ...n, edges: [...n.edges, { src: t.src, tgt: t.tgt, delta: t.delta, weight: t.weight, eid: n.nextEid }], nextEid: n.nextEid + 1 | 0 }), j$ = (t) => (n) => (e) => {
  if (e.cGroup.tag === "Nothing")
    return n;
  if (e.cGroup.tag === "Just") {
    const r = ot((() => {
      const o = D0(e.cGroup._1)(t);
      if (o.tag === "Nothing")
        return 0;
      if (o.tag === "Just")
        return o._1;
      f();
    })());
    return Zn(e.id)((o) => ({ ...o, hitbox: { ...o.hitbox, x: r + o.cGroupOffset.x } }))(n);
  }
  f();
}, Z$ = (t) => (n) => ({
  ...n,
  cGraph: J(j$(t))(n.cGraph)((() => {
    const e = n.cGraph;
    return yt((r) => Kt(r)(e.cNodes))(e.cNodeOrder);
  })())
}), tm = (t) => (n) => (e) => (r) => (o) => {
  const i = yn(ji(n.cGroupOffset.x - t.cGroupOffset.x));
  return bo({ src: o.nextNodeId, tgt: r, delta: lu(0)(-i), weight: 1 })(bo({ src: o.nextNodeId, tgt: e, delta: lu(0)(i), weight: 1 })({
    ...o,
    nodes: [...o.nodes, o.nextNodeId],
    nextNodeId: o.nextNodeId + 1 | 0
  }));
}, nm = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = lu(0)(yn(ji(e.cGroupOffset.x + e.hitbox.width + (n.direction === "LEFT" || n.direction === "RIGHT" ? n.spacingsHandler.horizontalSpacing(e)(r) : n.spacingsHandler.verticalSpacing(e)(r)) - r.cGroupOffset.x)));
  return t.sameEdgeVerticalSegments(e)(r) ? tm(e)(r)(o)(i)(s) : bo({ src: o, tgt: i, delta: u, weight: t.vsLNodePair(e)(r) ? 2 : 1 })(s);
}, em = (t) => (n) => (e) => (r) => (o) => {
  const i = Kt(o)(n.cGraph.cNodes);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just")
    return (e.cGroup.tag === "Nothing" ? i._1.cGroup.tag === "Nothing" : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" && e.cGroup._1 === i._1.cGroup._1) ? r : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" ? nm(t)(n)(e)(i._1)(e.cGroup._1)(i._1.cGroup._1)(r) : r;
  f();
}, rm = (t) => (n) => (e) => (r) => J(em(t)(n)(r))(e)(r.constraints), om = (t) => (n) => bo({ src: n.srcGroup, tgt: n.tgtGroup, delta: n.delta, weight: n.weight })(t), im = (t) => {
  const n = J((o) => (i) => wt(it)(sn)(i.tgt)(1)(o))(I)(t.edges), e = ft(
    (o) => {
      const i = D0(o)(n);
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
  return J((o) => (i) => bo({ src: r, tgt: i, delta: 1, weight: 0 })(o))({ ...t, nodes: [...t.nodes, r], nextNodeId: r + 1 | 0 })(e);
}, sm = (t) => (n) => {
  const e = im(J(om)(J(rm(t)(n))({
    nodes: n.cGraph.cGroupOrder,
    edges: [],
    nextNodeId: n.cGraph.nextCGroupId,
    nextEid: 0
  })((() => {
    const r = n.cGraph;
    return yt((o) => Kt(o)(r.cNodes))(r.cNodeOrder);
  })()))(t.edgeLengthEdges(n.cGraph)));
  return { nodes: e.nodes, edges: e.edges };
}, um = (t) => (n) => {
  const e = sm(t)(n);
  return Z$(M$(e.nodes)(e.edges))(n);
}, O0 = (t) => t, Zt = /* @__PURE__ */ O0("H"), tn = /* @__PURE__ */ O0("V"), cm = (t) => b(t._2, t._1), z0 = (t) => ({ ...t, position: b(t.position._2, t.position._1), size: b(t.size._2, t.size._1) }), am = (t) => ({
  start: b(t.start._2, t.start._1),
  end: b(t.end._2, t.end._1),
  direction: (() => {
    if (t.direction === "H")
      return tn;
    if (t.direction === "V")
      return Zt;
    f();
  })()
}), q0 = (t) => ({ ...t, segments: z(am)(t.segments), bends: z(cm)(t.bends) }), fm = (t) => ({ nodes: z(z0)(t.nodes), edges: t.edges, paths: z(q0)(t.paths), ports: t.ports }), gm = { nodeNode: 8, edgeNode: 4, edgeEdge: 10 }, lm = (t) => (n) => ({
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
}), _m = (t) => (n) => um(n), dm = (t) => (n) => (e) => {
  const r = fm(e), o = A$(r), i = E$(o)(F0(r)), s = S$(S0(ac)(Zp({
    ...n$(o.cGraph),
    compactionAlgorithm: v("Just", _m()(i)),
    constraintAlgorithm: v("Just", _$(n.edgeEdge)),
    spacingsHandler: lm(n)(i)
  })).cGraph)({ nodes: r.nodes, edges: r.edges, paths: r.paths });
  return { nodes: z(z0)(s.nodes), edges: z(q0)(s.edges) };
}, Y0 = (t) => t, wr = /* @__PURE__ */ nn(it)(Dt), At = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, da = (t) => (n) => {
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
}, Pr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, hm = (t) => (n) => {
  const e = it.compare(t._1)(n._1);
  return e === "LT" ? Jn : e === "GT" ? Tn : it.compare(t._2)(n._2);
}, Lr = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, pm = /* @__PURE__ */ (() => {
  const t = ee.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), $m = (t) => t, ha = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, mm = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, si = /* @__PURE__ */ Y0("Regular"), ui = /* @__PURE__ */ Y0("Critical"), X0 = (t) => (n) => {
  const e = J((s) => (u) => U(C)(u.node)(u)(s))(I)(n), r = 1.25 * ot(4), o = (s, u, c) => ((g) => (_) => (d) => {
    let l = g, h = _, p = d, $ = !0, m;
    for (; $; ) {
      const y = l, N = h, T = p;
      if (T.critical) {
        $ = !1, m = T;
        continue;
      }
      const w = Qt((L) => x, (L) => (P) => v("Just", { head: L, tail: P }), y), k = Qt((L) => x, (L) => (P) => v("Just", { head: L, tail: P }), N);
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
    if (ht(J(ht)(-1e18)(u.incoming))(J(ht)(-1e18)(u.outgoing)) - dt(J(dt)(1e18)(u.incoming))(J(dt)(1e18)(u.outgoing)) < 1e-3 || ht(J(ht)(-1e18)(c.incoming))(J(ht)(-1e18)(c.outgoing)) - dt(J(dt)(1e18)(c.incoming))(J(dt)(1e18)(c.outgoing)) < 1e-3)
      return [];
    const a = o(s, u.outgoing, c.incoming), g = o(s, c.outgoing, u.incoming);
    if (a.critical || g.critical)
      return [...a.critical ? [{ src: c.id, tgt: u.id, weight: 1, kind: ui }] : [], ...g.critical ? [{ src: u.id, tgt: c.id, weight: 1, kind: ui }] : []];
    const _ = dt(J(dt)(1e18)(u.incoming))(J(dt)(1e18)(u.outgoing)), d = ht(J(ht)(-1e18)(u.incoming))(J(ht)(-1e18)(u.outgoing)), l = dt(J(dt)(1e18)(c.incoming))(J(dt)(1e18)(c.outgoing)), h = ht(J(ht)(-1e18)(c.incoming))(J(ht)(-1e18)(c.outgoing)), p = (1 * a.conflicts | 0) + (16 * (J((m) => (y) => y > h ? m : y >= l ? m + 1 | 0 : m)(0)(u.outgoing) + J((m) => (y) => y > d ? m : y >= _ ? m + 1 | 0 : m)(0)(c.incoming) | 0) | 0) | 0, $ = (1 * g.conflicts | 0) + (16 * (J((m) => (y) => y > d ? m : y >= _ ? m + 1 | 0 : m)(0)(c.outgoing) + J((m) => (y) => y > h ? m : y >= l ? m + 1 | 0 : m)(0)(u.incoming) | 0) | 0) | 0;
    return p < $ ? [{ src: u.id, tgt: c.id, weight: $ - p | 0, kind: si }] : p > $ ? [{ src: c.id, tgt: u.id, weight: p - $ | 0, kind: si }] : p > 0 ? [{ src: u.id, tgt: c.id, weight: 0, kind: si }, { src: c.id, tgt: u.id, weight: 0, kind: si }] : [];
  };
  return J((s) => (u) => J((c) => (a) => U(C)(a._1)(a._2)(c))(s)((() => {
    const c = J((A) => (B) => {
      const et = B.edge.from.node + "|" + (() => {
        if (B.edge.from.port.tag === "Just")
          return B.edge.from.port._1;
        if (B.edge.from.port.tag === "Nothing")
          return "_auto_" + B.edge.id;
        f();
      })(), st = ha(et)(A.entries);
      if (st.tag === "Nothing")
        return {
          ...A,
          entries: U(C)(et)({
            id: 0,
            members: [B.edge.id],
            incoming: [B.fromPos._1],
            outgoing: [B.toPos._1],
            slot: 0,
            mark: 0,
            splitBy: x,
            splitPartner: x
          })(A.entries),
          order: [...A.order, et]
        };
      if (st.tag === "Just")
        return {
          ...A,
          entries: U(C)(et)({
            ...st._1,
            members: [...st._1.members, B.edge.id],
            incoming: [...gr((Y) => Y < B.fromPos._1)(st._1.incoming).init, B.fromPos._1, ...gr((Y) => Y <= B.fromPos._1)(st._1.incoming).rest],
            outgoing: [...gr((Y) => Y < B.toPos._1)(st._1.outgoing).init, B.toPos._1, ...gr((Y) => Y <= B.toPos._1)(st._1.outgoing).rest]
          })(A.entries)
        };
      f();
    })({ entries: I, order: [] })(u._2), a = Ft((A) => (B) => ({ ...B, id: A }))(yt((A) => ha(A)(c.entries))(c.order));
    if (a.length === 0)
      return [];
    const g = J((A) => (B) => A.prev.tag === "Just" && B - A.prev._1 < 1e-9 ? A : { prev: v("Just", B), out: [...A.out, B] })({ prev: x, out: [] })(Lt(at.compare)([
      ...Tt(a)((A) => A.incoming),
      ...Tt(a)((A) => A.outgoing)
    ])).out, _ = g.length < 2 ? 0.2 * r : 0.2 * J((A) => (B) => {
      if (A.prev.tag === "Nothing")
        return { prev: v("Just", B), mn: A.mn };
      if (A.prev.tag === "Just")
        return { prev: v("Just", B), mn: dt(A.mn)(B - A.prev._1) };
      f();
    })({ prev: x, mn: 1e18 })(g).mn, d = {
      segments: a,
      deps: (() => {
        const A = a.length;
        return Tt(Tt(It(0, A - 2 | 0))((B) => Tt(It(B + 1 | 0, A - 1 | 0))((et) => [
          b(B, et)
        ])))((B) => B._1 >= 0 && B._1 < a.length ? B._2 >= 0 && B._2 < a.length ? i(_, a[B._1], a[B._2]) : [] : []);
      })()
    }, l = ft(
      (A) => {
        if (A.kind === "Critical")
          return !0;
        if (A.kind === "Regular")
          return !1;
        f();
      },
      d.deps
    ), h = (() => {
      if (l.length < 2)
        return d;
      const A = wr((() => {
        const R = d.segments;
        return z((E) => b(E.id, E.mark))((() => {
          const E = R.length, S = (W) => {
            let Q = W, M = !0, q;
            for (; M; ) {
              const D = Q, rt = Ut((Z) => {
                const nt = At(Z)(D.inWeight);
                if (nt.tag === "Nothing")
                  return !0;
                if (nt.tag === "Just")
                  return nt._1 === 0;
                f();
              })(D.remaining);
              if (rt.tag === "Nothing") {
                M = !1, q = D;
                continue;
              }
              if (rt.tag === "Just") {
                const Z = rt._1;
                Q = {
                  ...D,
                  inWeight: J((nt) => (tt) => wt(it)(sn)(tt.tgt)(-tt.weight)(nt))(D.inWeight)((() => {
                    const nt = At(Z)(D.depsBySrc);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })()),
                  marks: U(it)(Z)(D.nextSource)(D.marks),
                  nextSource: D.nextSource + 1 | 0,
                  outWeight: J((nt) => (tt) => wt(it)(sn)(tt.src)(-tt.weight)(nt))(D.outWeight)((() => {
                    const nt = At(Z)(D.depsByTgt);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })()),
                  remaining: ft((nt) => nt !== Z, D.remaining)
                };
                continue;
              }
              f();
            }
            return q;
          }, H = (W) => {
            let Q = W, M = !0, q;
            for (; M; ) {
              const D = Q, rt = Ut((Z) => {
                const nt = At(Z)(D.outWeight);
                if (nt.tag === "Nothing")
                  return !0;
                if (nt.tag === "Just")
                  return nt._1 === 0;
                f();
              })(D.remaining);
              if (rt.tag === "Nothing") {
                M = !1, q = D;
                continue;
              }
              if (rt.tag === "Just") {
                const Z = rt._1;
                Q = {
                  ...D,
                  inWeight: J((nt) => (tt) => wt(it)(sn)(tt.tgt)(-tt.weight)(nt))(D.inWeight)((() => {
                    const nt = At(Z)(D.depsBySrc);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })()),
                  marks: U(it)(Z)(D.nextSink)(D.marks),
                  nextSink: D.nextSink - 1 | 0,
                  outWeight: J((nt) => (tt) => wt(it)(sn)(tt.src)(-tt.weight)(nt))(D.outWeight)((() => {
                    const nt = At(Z)(D.depsByTgt);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })()),
                  remaining: ft((nt) => nt !== Z, D.remaining)
                };
                continue;
              }
              f();
            }
            return q;
          };
          return ((W) => {
            let Q = W, M = !0, q;
            for (; M; ) {
              const rt = S(H(Q));
              if (rt.remaining.length === 0) {
                M = !1, q = z((Z) => {
                  const nt = At(Z.id)(rt.marks), tt = (() => {
                    if (nt.tag === "Nothing")
                      return Z.id;
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })();
                  return { ...Z, mark: tt < E ? (tt + E | 0) + 1 | 0 : tt };
                })(R);
                continue;
              }
              Q = (() => {
                const Z = (tt) => {
                  const ct = At(tt)(rt.outWeight), lt = At(tt)(rt.inWeight);
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
                }, nt = Lt((tt) => (ct) => it.compare(Z(ct))(Z(tt)))(rt.remaining);
                if (0 < nt.length) {
                  const tt = nt[0];
                  return {
                    ...rt,
                    inWeight: J((ct) => (lt) => wt(it)(sn)(lt.tgt)(-lt.weight)(ct))(rt.inWeight)((() => {
                      const ct = At(tt)(rt.depsBySrc);
                      if (ct.tag === "Nothing")
                        return [];
                      if (ct.tag === "Just")
                        return ct._1;
                      f();
                    })()),
                    marks: U(it)(tt)(rt.nextSource)(rt.marks),
                    nextSource: rt.nextSource + 1 | 0,
                    outWeight: J((ct) => (lt) => wt(it)(sn)(lt.src)(-lt.weight)(ct))(rt.outWeight)((() => {
                      const ct = At(tt)(rt.depsByTgt);
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
            remaining: z((W) => W.id)(R),
            marks: I,
            inWeight: J((W) => (Q) => wt(it)(sn)(Q.tgt)(Q.weight)(W))(I)(l),
            outWeight: J((W) => (Q) => wt(it)(sn)(Q.src)(Q.weight)(W))(I)(l),
            depsBySrc: J((W) => (Q) => wt(it)(on)(Q.src)([Q])(W))(I)(l),
            depsByTgt: J((W) => (Q) => wt(it)(on)(Q.tgt)([Q])(W))(I)(l),
            nextSink: E - 1 | 0,
            nextSource: E + 1 | 0
          });
        })());
      })()), B = ft(
        (R) => {
          const E = At(R.src)(A), S = At(R.tgt)(A);
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
      const et = J((R) => (E) => {
        if (Dn(Qr)(E.src)(R.decisions) || Dn(Qr)(E.tgt)(R.decisions))
          return R;
        const S = At(E.src)(R.segMap), H = At(E.tgt)(R.segMap);
        if (S.tag === "Just" && H.tag === "Just") {
          const G = (S._1.incoming.length + S._1.outgoing.length | 0) > 2 && (H._1.incoming.length + H._1.outgoing.length | 0) <= 2, W = G ? H._1 : S._1;
          return {
            decisions: [...R.decisions, W.id],
            segMap: U(it)(W.id)({ ...W, splitBy: v("Just", G ? S._1.id : H._1.id) })(R.segMap)
          };
        }
        return R;
      })({ decisions: [], segMap: wr(z((R) => b(R.id, R))(d.segments)) })(B), st = et.segMap, Y = J((R) => (E) => {
        const S = dt(J(dt)(1e18)(E.incoming))(J(dt)(1e18)(E.outgoing)), H = ht(J(ht)(-1e18)(E.incoming))(J(ht)(-1e18)(E.outgoing)), G = ft(
          (D) => D.a.startPosition <= H && D.a.endPosition >= S,
          Ft((D) => (rt) => ({ i: D, a: rt }))(R.freeAreas)
        );
        if (G.length === 0) {
          const D = {
            ...E,
            incoming: Lt(at.compare)(E.incoming),
            outgoing: Lt(at.compare)([(S + H) / 2]),
            splitPartner: v("Just", R.nextId)
          }, rt = {
            id: R.nextId,
            incoming: Lt(at.compare)([(S + H) / 2]),
            mark: 0,
            members: E.members,
            outgoing: Lt(at.compare)(E.outgoing),
            slot: 0,
            splitBy: x,
            splitPartner: v("Just", E.id)
          };
          return {
            segMap: U(it)(rt.id)(rt)(U(it)(D.id)(D)(R.segMap)),
            freeAreas: R.freeAreas,
            nextId: R.nextId + 1 | 0
          };
        }
        const W = 0 < G.length ? v("Just", G[0]) : x, Q = (() => {
          if (W.tag === "Nothing")
            return { i: 0, a: { startPosition: 0, endPosition: 0, size: 0 } };
          if (W.tag === "Just") {
            if (G.length === 1)
              return W._1;
            const D = z((rt) => ({
              c: rt,
              rating: (() => {
                const Z = (rt.a.startPosition + rt.a.endPosition) / 2, nt = [Z], tt = [Z], ct = J((() => {
                  const Wt = R.segMap;
                  return (vt) => (Ht) => {
                    const pt = At(Ht.tgt)(Wt);
                    if (pt.tag === "Nothing")
                      return vt;
                    if (pt.tag === "Just") {
                      const Jt = dt(J(dt)(1e18)(pt._1.incoming))(J(dt)(1e18)(pt._1.outgoing)), $t = ht(J(ht)(-1e18)(pt._1.incoming))(J(ht)(-1e18)(pt._1.outgoing)), mt = dt(J(dt)(1e18)(E.incoming))(J(dt)(1e18)(nt)), K = (() => {
                        const Pt = ht(J(ht)(-1e18)(E.incoming))(J(ht)(-1e18)(nt)), Gt = J((Vt) => (cn) => cn > $t ? Vt : cn >= Jt ? Vt + 1 | 0 : Vt)(0)(nt) + J((Vt) => (cn) => cn > Pt ? Vt : cn >= mt ? Vt + 1 | 0 : Vt)(0)(pt._1.incoming) | 0, Hn = dt(J(dt)(1e18)(E.incoming))(J(dt)(1e18)(nt)), Vn = ht(J(ht)(-1e18)(E.incoming))(J(ht)(-1e18)(nt)), be = dt(J(dt)(1e18)(pt._1.incoming))(J(dt)(1e18)(pt._1.outgoing)), Le = ht(J(ht)(-1e18)(pt._1.incoming))(J(ht)(-1e18)(pt._1.outgoing)), no = J((Vt) => (cn) => cn > Vn ? Vt : cn >= Hn ? Vt + 1 | 0 : Vt)(0)(pt._1.outgoing) + J((Vt) => (cn) => cn > Le ? Vt : cn >= be ? Vt + 1 | 0 : Vt)(0)(E.incoming) | 0;
                        return Gt === no ? Gt > 0 ? { ...vt, deps: vt.deps + 2 | 0, crossings: vt.crossings + Gt | 0 } : vt : { ...vt, deps: vt.deps + 1 | 0, crossings: vt.crossings + Lr(Gt)(no) | 0 };
                      })(), j = dt(J(dt)(1e18)(pt._1.incoming))(J(dt)(1e18)(pt._1.outgoing)), gt = ht(J(ht)(-1e18)(pt._1.incoming))(J(ht)(-1e18)(pt._1.outgoing)), _t = dt(J(dt)(1e18)(tt))(J(dt)(1e18)(E.outgoing)), xt = ht(J(ht)(-1e18)(tt))(J(ht)(-1e18)(E.outgoing)), Nt = J((Pt) => (Gt) => Gt > gt ? Pt : Gt >= j ? Pt + 1 | 0 : Pt)(0)(E.outgoing) + J((Pt) => (Gt) => Gt > xt ? Pt : Gt >= _t ? Pt + 1 | 0 : Pt)(0)(pt._1.incoming) | 0, jt = dt(J(dt)(1e18)(tt))(J(dt)(1e18)(E.outgoing)), Ln = ht(J(ht)(-1e18)(tt))(J(ht)(-1e18)(E.outgoing)), re = dt(J(dt)(1e18)(pt._1.incoming))(J(dt)(1e18)(pt._1.outgoing)), Xn = ht(J(ht)(-1e18)(pt._1.incoming))(J(ht)(-1e18)(pt._1.outgoing)), xn = J((Pt) => (Gt) => Gt > Ln ? Pt : Gt >= jt ? Pt + 1 | 0 : Pt)(0)(pt._1.outgoing) + J((Pt) => (Gt) => Gt > Xn ? Pt : Gt >= re ? Pt + 1 | 0 : Pt)(0)(tt) | 0;
                      return Nt === xn ? Nt > 0 ? { ...K, deps: K.deps + 2 | 0, crossings: K.crossings + Nt | 0 } : K : { ...K, deps: K.deps + 1 | 0, crossings: K.crossings + Lr(Nt)(xn) | 0 };
                    }
                    f();
                  };
                })())(J((() => {
                  const Wt = R.segMap;
                  return (vt) => (Ht) => {
                    const pt = At(Ht.src)(Wt);
                    if (pt.tag === "Nothing")
                      return vt;
                    if (pt.tag === "Just") {
                      const Jt = dt(J(dt)(1e18)(pt._1.incoming))(J(dt)(1e18)(pt._1.outgoing)), $t = ht(J(ht)(-1e18)(pt._1.incoming))(J(ht)(-1e18)(pt._1.outgoing)), mt = dt(J(dt)(1e18)(E.incoming))(J(dt)(1e18)(nt)), K = (() => {
                        const Pt = ht(J(ht)(-1e18)(E.incoming))(J(ht)(-1e18)(nt)), Gt = J((Vt) => (cn) => cn > $t ? Vt : cn >= Jt ? Vt + 1 | 0 : Vt)(0)(nt) + J((Vt) => (cn) => cn > Pt ? Vt : cn >= mt ? Vt + 1 | 0 : Vt)(0)(pt._1.incoming) | 0, Hn = dt(J(dt)(1e18)(E.incoming))(J(dt)(1e18)(nt)), Vn = ht(J(ht)(-1e18)(E.incoming))(J(ht)(-1e18)(nt)), be = dt(J(dt)(1e18)(pt._1.incoming))(J(dt)(1e18)(pt._1.outgoing)), Le = ht(J(ht)(-1e18)(pt._1.incoming))(J(ht)(-1e18)(pt._1.outgoing)), no = J((Vt) => (cn) => cn > Vn ? Vt : cn >= Hn ? Vt + 1 | 0 : Vt)(0)(pt._1.outgoing) + J((Vt) => (cn) => cn > Le ? Vt : cn >= be ? Vt + 1 | 0 : Vt)(0)(E.incoming) | 0;
                        return Gt === no ? Gt > 0 ? { ...vt, deps: vt.deps + 2 | 0, crossings: vt.crossings + Gt | 0 } : vt : { ...vt, deps: vt.deps + 1 | 0, crossings: vt.crossings + Lr(Gt)(no) | 0 };
                      })(), j = dt(J(dt)(1e18)(pt._1.incoming))(J(dt)(1e18)(pt._1.outgoing)), gt = ht(J(ht)(-1e18)(pt._1.incoming))(J(ht)(-1e18)(pt._1.outgoing)), _t = dt(J(dt)(1e18)(tt))(J(dt)(1e18)(E.outgoing)), xt = ht(J(ht)(-1e18)(tt))(J(ht)(-1e18)(E.outgoing)), Nt = J((Pt) => (Gt) => Gt > gt ? Pt : Gt >= j ? Pt + 1 | 0 : Pt)(0)(E.outgoing) + J((Pt) => (Gt) => Gt > xt ? Pt : Gt >= _t ? Pt + 1 | 0 : Pt)(0)(pt._1.incoming) | 0, jt = dt(J(dt)(1e18)(tt))(J(dt)(1e18)(E.outgoing)), Ln = ht(J(ht)(-1e18)(tt))(J(ht)(-1e18)(E.outgoing)), re = dt(J(dt)(1e18)(pt._1.incoming))(J(dt)(1e18)(pt._1.outgoing)), Xn = ht(J(ht)(-1e18)(pt._1.incoming))(J(ht)(-1e18)(pt._1.outgoing)), xn = J((Pt) => (Gt) => Gt > Ln ? Pt : Gt >= jt ? Pt + 1 | 0 : Pt)(0)(pt._1.outgoing) + J((Pt) => (Gt) => Gt > Xn ? Pt : Gt >= re ? Pt + 1 | 0 : Pt)(0)(tt) | 0;
                      return Nt === xn ? Nt > 0 ? { ...K, deps: K.deps + 2 | 0, crossings: K.crossings + Nt | 0 } : K : { ...K, deps: K.deps + 1 | 0, crossings: K.crossings + Lr(Nt)(xn) | 0 };
                    }
                    f();
                  };
                })())({ crossings: 0, deps: 0 })(ft((Wt) => Wt.tgt === E.id, d.deps)))(ft((Wt) => Wt.src === E.id, d.deps)), lt = (() => {
                  if (E.splitBy.tag === "Just")
                    return At(E.splitBy._1)(R.segMap);
                  if (E.splitBy.tag === "Nothing")
                    return x;
                  f();
                })();
                if (lt.tag === "Just")
                  return {
                    ...ct,
                    deps: ct.deps + 2 | 0,
                    crossings: (() => {
                      const Wt = dt(J(dt)(1e18)(lt._1.incoming))(J(dt)(1e18)(lt._1.outgoing)), vt = dt(J(dt)(1e18)(tt))(J(dt)(1e18)(E.outgoing)), Ht = ht(J(ht)(-1e18)(lt._1.incoming))(J(ht)(-1e18)(lt._1.outgoing)), pt = ht(J(ht)(-1e18)(tt))(J(ht)(-1e18)(E.outgoing)), Jt = dt(J(dt)(1e18)(E.incoming))(J(dt)(1e18)(nt));
                      return ct.crossings + (() => {
                        const $t = dt(J(dt)(1e18)(lt._1.incoming))(J(dt)(1e18)(lt._1.outgoing)), mt = ht(J(ht)(-1e18)(E.incoming))(J(ht)(-1e18)(nt)), K = ht(J(ht)(-1e18)(lt._1.incoming))(J(ht)(-1e18)(lt._1.outgoing));
                        return ((J((j) => (gt) => gt > Ht ? j : gt >= Wt ? j + 1 | 0 : j)(0)(nt) + J((j) => (gt) => gt > mt ? j : gt >= Jt ? j + 1 | 0 : j)(0)(lt._1.incoming) | 0) + J((j) => (gt) => gt > pt ? j : gt >= vt ? j + 1 | 0 : j)(0)(lt._1.outgoing) | 0) + J((j) => (gt) => gt > K ? j : gt >= $t ? j + 1 | 0 : j)(0)(tt) | 0;
                      })() | 0;
                    })()
                  };
                if (lt.tag === "Nothing")
                  return ct;
                f();
              })()
            }))(G);
            return J((rt) => (Z) => Z.rating.crossings < rt.rating.crossings || !(Z.rating.crossings > rt.rating.crossings) && (Z.rating.deps < rt.rating.deps || !(Z.rating.deps > rt.rating.deps) && Z.c.a.size > rt.c.a.size) ? Z : rt)(0 < D.length ? D[0] : { c: W._1, rating: { crossings: 1e6, deps: 1e6 } })(D).c;
          }
          f();
        })(), M = {
          ...E,
          incoming: Lt(at.compare)(E.incoming),
          outgoing: Lt(at.compare)([(Q.a.startPosition + Q.a.endPosition) / 2]),
          splitPartner: v("Just", R.nextId)
        }, q = {
          id: R.nextId,
          incoming: Lt(at.compare)([(Q.a.startPosition + Q.a.endPosition) / 2]),
          mark: 0,
          members: E.members,
          outgoing: Lt(at.compare)(E.outgoing),
          slot: 0,
          splitBy: x,
          splitPartner: v("Just", E.id)
        };
        return {
          segMap: U(it)(q.id)(q)(U(it)(M.id)(M)(R.segMap)),
          freeAreas: (() => {
            if (Q.i >= 0 && Q.i < R.freeAreas.length) {
              const D = Pf(zt, x, Q.i, R.freeAreas), rt = (() => {
                if (D.tag === "Nothing")
                  return R.freeAreas;
                if (D.tag === "Just")
                  return D._1;
                f();
              })();
              if (R.freeAreas[Q.i].size / 2 < _)
                return rt;
              const Z = (R.freeAreas[Q.i].startPosition + R.freeAreas[Q.i].endPosition) / 2, nt = Z - _, tt = Z + _;
              return [
                ...Q.i < 1 ? [] : bt(0, Q.i, rt),
                ...R.freeAreas[Q.i].startPosition <= nt ? [{ startPosition: R.freeAreas[Q.i].startPosition, endPosition: nt, size: nt - R.freeAreas[Q.i].startPosition }] : [],
                ...tt <= R.freeAreas[Q.i].endPosition ? [{ startPosition: tt, endPosition: R.freeAreas[Q.i].endPosition, size: R.freeAreas[Q.i].endPosition - tt }] : [],
                ...Q.i < 1 ? rt : bt(Q.i, rt.length, rt)
              ];
            }
            return R.freeAreas;
          })(),
          nextId: R.nextId + 1 | 0
        };
      })({
        segMap: st,
        freeAreas: (() => {
          const R = Lt(at.compare)([
            ...Tt(d.segments)((E) => E.incoming),
            ...Tt(d.segments)((E) => E.outgoing)
          ]);
          return yt($m)(kn(
            (E) => (S) => S - E >= 2 * _ ? v("Just", { startPosition: E + _, endPosition: S - _, size: S - E - 2 * _ }) : x,
            R,
            bt(1, R.length, R)
          ));
        })(),
        nextId: d.segments.length
      })(Lt((R) => (E) => at.compare(ht(J(ht)(-1e18)(R.incoming))(J(ht)(-1e18)(R.outgoing)) - dt(J(dt)(1e18)(R.incoming))(J(dt)(1e18)(R.outgoing)))(ht(J(ht)(-1e18)(E.incoming))(J(ht)(-1e18)(E.outgoing)) - dt(J(dt)(1e18)(E.incoming))(J(dt)(1e18)(E.outgoing))))(yt((R) => At(R)(st))(et.decisions)));
      return {
        segments: (() => {
          const R = (E, S) => {
            if (E.tag === "Leaf")
              return S;
            if (E.tag === "Node")
              return R(E._5, qt("Cons", E._4, R(E._6, S)));
            f();
          };
          return Et(Xt.foldr, R(Y.segMap, Yt));
        })(),
        deps: (() => {
          const R = Y.segMap, E = (G, W) => {
            if (G.tag === "Leaf")
              return W;
            if (G.tag === "Node")
              return E(G._5, qt("Cons", G._4, E(G._6, W)));
            f();
          }, S = Et(Xt.foldr, E(R, Yt)), H = S.length;
          return [
            ...Tt(Tt(It(0, H - 2 | 0))((G) => Tt(It(G + 1 | 0, H - 1 | 0))((W) => [
              b(G, W)
            ])))((G) => G._1 >= 0 && G._1 < S.length ? G._2 >= 0 && G._2 < S.length ? S[G._1].splitPartner.tag !== "Nothing" && S[G._1].splitPartner.tag === "Just" && S[G._1].splitPartner._1 === S[G._2].id || S[G._2].splitPartner.tag !== "Nothing" && S[G._2].splitPartner.tag === "Just" && S[G._2].splitPartner._1 === S[G._1].id ? [] : i(_, S[G._1], S[G._2]) : [] : []),
            ...Tt(S)((G) => G.splitBy.tag === "Just" && G.splitPartner.tag === "Just" && (() => {
              const W = At(G.splitPartner._1)(R);
              if (W.tag === "Nothing")
                return !1;
              if (W.tag === "Just")
                return !0;
              f();
            })() && (() => {
              const W = At(G.splitBy._1)(R);
              if (W.tag === "Nothing")
                return !1;
              if (W.tag === "Just")
                return !0;
              f();
            })() ? [{ src: G.id, tgt: G.splitBy._1, weight: 1, kind: ui }, { src: G.splitBy._1, tgt: G.splitPartner._1, weight: 1, kind: ui }] : [])
          ];
        })()
      };
    })(), p = h.segments, $ = p.length, m = (A) => {
      let B = A, et = !0, st;
      for (; et; ) {
        const Y = B, R = Ut((E) => {
          const S = At(E)(Y.inWeight);
          if (S.tag === "Nothing")
            return !0;
          if (S.tag === "Just")
            return S._1 === 0;
          f();
        })(Y.remaining);
        if (R.tag === "Nothing") {
          et = !1, st = Y;
          continue;
        }
        if (R.tag === "Just") {
          const E = R._1;
          B = {
            ...Y,
            inWeight: J((S) => (H) => wt(it)(sn)(H.tgt)(-H.weight)(S))(Y.inWeight)((() => {
              const S = At(E)(Y.depsBySrc);
              if (S.tag === "Nothing")
                return [];
              if (S.tag === "Just")
                return S._1;
              f();
            })()),
            marks: U(it)(E)(Y.nextSource)(Y.marks),
            nextSource: Y.nextSource + 1 | 0,
            outWeight: J((S) => (H) => wt(it)(sn)(H.src)(-H.weight)(S))(Y.outWeight)((() => {
              const S = At(E)(Y.depsByTgt);
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
      return st;
    }, y = (A) => {
      let B = A, et = !0, st;
      for (; et; ) {
        const Y = B, R = Ut((E) => {
          const S = At(E)(Y.outWeight);
          if (S.tag === "Nothing")
            return !0;
          if (S.tag === "Just")
            return S._1 === 0;
          f();
        })(Y.remaining);
        if (R.tag === "Nothing") {
          et = !1, st = Y;
          continue;
        }
        if (R.tag === "Just") {
          const E = R._1;
          B = {
            ...Y,
            inWeight: J((S) => (H) => wt(it)(sn)(H.tgt)(-H.weight)(S))(Y.inWeight)((() => {
              const S = At(E)(Y.depsBySrc);
              if (S.tag === "Nothing")
                return [];
              if (S.tag === "Just")
                return S._1;
              f();
            })()),
            marks: U(it)(E)(Y.nextSink)(Y.marks),
            nextSink: Y.nextSink - 1 | 0,
            outWeight: J((S) => (H) => wt(it)(sn)(H.src)(-H.weight)(S))(Y.outWeight)((() => {
              const S = At(E)(Y.depsByTgt);
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
      return st;
    }, T = ((A) => {
      let B = A, et = !0, st;
      for (; et; ) {
        const R = m(y(B));
        if (R.remaining.length === 0) {
          et = !1, st = z((E) => {
            const S = At(E.id)(R.marks), H = (() => {
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
            const G = At(H)(R.outWeight), W = At(H)(R.inWeight);
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
          }, S = Lt((H) => (G) => it.compare(E(G))(E(H)))(R.remaining);
          if (0 < S.length) {
            const H = S[0];
            return {
              ...R,
              inWeight: J((G) => (W) => wt(it)(sn)(W.tgt)(-W.weight)(G))(R.inWeight)((() => {
                const G = At(H)(R.depsBySrc);
                if (G.tag === "Nothing")
                  return [];
                if (G.tag === "Just")
                  return G._1;
                f();
              })()),
              marks: U(it)(H)(R.nextSource)(R.marks),
              nextSource: R.nextSource + 1 | 0,
              outWeight: J((G) => (W) => wt(it)(sn)(W.src)(-W.weight)(G))(R.outWeight)((() => {
                const G = At(H)(R.depsByTgt);
                if (G.tag === "Nothing")
                  return [];
                if (G.tag === "Just")
                  return G._1;
                f();
              })()),
              remaining: ft((G) => G !== H, R.remaining)
            };
          }
          return R;
        })();
      }
      return st;
    })({
      remaining: z((A) => A.id)(p),
      marks: I,
      inWeight: J((A) => (B) => wt(it)(sn)(B.tgt)(B.weight)(A))(I)(h.deps),
      outWeight: J((A) => (B) => wt(it)(sn)(B.src)(B.weight)(A))(I)(h.deps),
      depsBySrc: J((A) => (B) => wt(it)(on)(B.src)([B])(A))(I)(h.deps),
      depsByTgt: J((A) => (B) => wt(it)(on)(B.tgt)([B])(A))(I)(h.deps),
      nextSink: $ - 1 | 0,
      nextSource: $ + 1 | 0
    }), w = (() => {
      const A = (() => {
        const Y = wr(z((R) => b(R.id, R.mark))(T));
        return {
          segments: T,
          deps: yt((R) => (() => {
            if (R.kind === "Critical")
              return !0;
            if (R.kind === "Regular")
              return !1;
            f();
          })() ? v("Just", R) : (() => {
            const E = At(R.src)(Y), S = At(R.tgt)(Y);
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
          })() ? R.weight === 0 ? x : v("Just", { src: R.tgt, tgt: R.src, weight: R.weight, kind: R.kind }) : v("Just", R))(h.deps)
        };
      })(), B = J((Y) => (R) => wt(it)(sn)(R.tgt)(1)(Y))(I)(A.deps), st = ((Y) => {
        let R = Y, E = !0, S;
        for (; E; ) {
          const H = R, G = Qt((W) => x, (W) => (Q) => v("Just", { head: W, tail: Q }), H.queue);
          if (G.tag === "Nothing") {
            E = !1, S = H;
            continue;
          }
          if (G.tag === "Just") {
            R = J((() => {
              const W = At(G._1.head)(H.slots), Q = (() => {
                if (W.tag === "Nothing")
                  return 0;
                if (W.tag === "Just")
                  return W._1;
                f();
              })();
              return (M) => (q) => {
                const D = At(q)(M.inDegree), rt = (() => {
                  if (D.tag === "Nothing")
                    return -1;
                  if (D.tag === "Just")
                    return D._1 - 1 | 0;
                  f();
                })();
                return {
                  ...M,
                  slots: U(it)(q)(da((() => {
                    const Z = At(q)(M.slots);
                    if (Z.tag === "Nothing")
                      return 0;
                    if (Z.tag === "Just")
                      return Z._1;
                    f();
                  })())(Q + 1 | 0))(M.slots),
                  inDegree: U(it)(q)(rt)(M.inDegree),
                  queue: rt === 0 ? [...M.queue, q] : M.queue
                };
              };
            })())({ ...H, queue: G._1.tail })((() => {
              const W = At(G._1.head)(H.adj);
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
        slots: wr(z((Y) => b(Y.id, 0))(A.segments)),
        inDegree: B,
        adj: J((Y) => (R) => wt(it)(on)(R.src)([R.tgt])(Y))(I)(A.deps),
        queue: z((Y) => Y.id)(ft(
          (Y) => {
            const R = At(Y.id)(B);
            if (R.tag === "Nothing")
              return !0;
            if (R.tag === "Just")
              return R._1 === 0;
            f();
          },
          A.segments
        ))
      });
      return Lt((Y) => (R) => it.compare(Y.slot)(R.slot))(z((Y) => ({
        ...Y,
        slot: (() => {
          const R = At(Y.id)(st.slots);
          if (R.tag === "Nothing")
            return 0;
          if (R.tag === "Just")
            return R._1;
          f();
        })()
      }))(A.segments));
    })(), k = 1 + J((A) => (B) => da(A)(B.slot))(0)(w) | 0, L = Tt(w)((A) => A.members), P = ft((A) => Dn(le)(A.edge.id)(L), t), O = J(ht)(-1e18)(z((A) => A.fromPos._2)(P)), X = J(dt)(1e18)(z((A) => A.toPos._2)(P));
    if (O > X) {
      const A = wr(z((B) => b(B.id, B))(w));
      return zn(z((B) => z((et) => b(
        et,
        {
          slot: B.slot,
          slotCount: k,
          gapTop: X,
          gapBottom: O,
          partner: (() => {
            if (B.splitPartner.tag === "Just") {
              const st = At(B.splitPartner._1)(A);
              if (st.tag === "Just")
                return v("Just", { slot: st._1.slot, splitX: 0 < st._1.incoming.length ? st._1.incoming[0] : 0 });
              if (st.tag === "Nothing")
                return x;
              f();
            }
            if (B.splitPartner.tag === "Nothing")
              return x;
            f();
          })()
        }
      ))(B.members))(ft(
        (B) => {
          if (B.splitPartner.tag === "Just") {
            const et = At(B.splitPartner._1)(A);
            return !(et.tag === "Just" && (() => {
              if (et._1.splitBy.tag === "Nothing")
                return !1;
              if (et._1.splitBy.tag === "Just")
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
    const V = wr(z((A) => b(A.id, A))(w));
    return zn(z((A) => z((B) => b(
      B,
      {
        slot: A.slot,
        slotCount: k,
        gapTop: O,
        gapBottom: X,
        partner: (() => {
          if (A.splitPartner.tag === "Just") {
            const et = At(A.splitPartner._1)(V);
            if (et.tag === "Just")
              return v("Just", { slot: et._1.slot, splitX: 0 < et._1.incoming.length ? et._1.incoming[0] : 0 });
            if (et.tag === "Nothing")
              return x;
            f();
          }
          if (A.splitPartner.tag === "Nothing")
            return x;
          f();
        })()
      }
    ))(A.members))(ft(
      (A) => {
        if (A.splitPartner.tag === "Just") {
          const B = At(A.splitPartner._1)(V);
          return !(B.tag === "Just" && (() => {
            if (B._1.splitBy.tag === "Nothing")
              return !1;
            if (B._1.splitBy.tag === "Just")
              return !0;
            f();
          })());
        }
        if (A.splitPartner.tag === "Nothing")
          return !0;
        f();
      },
      w
    )));
  })()))(I)(pm(J((s) => (u) => {
    const c = Pr(u.edge.from.node)(e);
    if (c.tag === "Just") {
      const a = Pr(u.edge.to.node)(e);
      return a.tag === "Just" && c._1.layer !== a._1.layer ? wt(it)(on)(Lr(c._1.layer)(a._1.layer))([u])(s) : s;
    }
    return s;
  })(I)((() => {
    const s = (u) => b(
      (() => {
        const c = Pr(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.layer : 1e6;
      })(),
      (() => {
        const c = Pr(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.order : 1e6;
      })()
    );
    return Lt((u) => (c) => hm(s(u))(s(c)))(t);
  })())));
}, ym = (t) => (n) => {
  const e = X0(t)(n), r = J((o) => (i) => U(C)(i.node)(i)(o))(I)(n);
  return J((o) => (i) => {
    const s = Pr(i.edge.from.node)(r);
    if (s.tag === "Just") {
      const u = Pr(i.edge.to.node)(r);
      if (u.tag === "Just" && s._1.layer !== u._1.layer) {
        const c = mm(i.edge.id)(e);
        if (c.tag === "Just")
          return U(it)(Lr(s._1.layer)(u._1.layer))(c._1.slotCount)(o);
      }
      return o;
    }
    return o;
  })(I)(t);
}, V0 = Dt.foldMap(/* @__PURE__ */ (() => {
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
}, io = (t) => (n) => (e) => (r) => V0((o) => e >= o.x && e < o.x + o.w && n > o.y && t < o.y + o.h)(r), Ci = (t) => (n) => (e) => (r) => io(gn(n)(e))(ln(n)(e))(r)(t), ci = /* @__PURE__ */ ot(4), Nm = /* @__PURE__ */ If((t) => {
  if (t.direction === "H") {
    const n = gn(t.start._1)(t.end._1);
    return [{ x: n, y: t.start._2 - 1, w: ln(t.start._1)(t.end._1) - n, h: 2 }];
  }
  if (t.direction === "V") {
    const n = gn(t.start._2)(t.end._2);
    return [{ x: t.start._1 - 1, y: n, w: 2, h: ln(t.start._2)(t.end._2) - n }];
  }
  f();
}), Lo = /* @__PURE__ */ Af((t) => {
  const n = t.start._1 - t.end._1;
  return !((n < 0 ? -n < 1e-6 : n < 1e-6) && (() => {
    const e = t.start._2 - t.end._2;
    return e < 0 ? -e < 1e-6 : e < 1e-6;
  })());
}), xm = (t) => (n) => (e) => {
  const r = Qt((o) => x, (o) => (i) => v("Just", { head: o, tail: i }), n);
  if (r.tag === "Nothing")
    return [{ start: t.start, end: e.end, direction: t.direction }];
  if (r.tag === "Just") {
    const o = (r._1.head.direction === "H" ? t.direction === "H" : r._1.head.direction === "V" && t.direction === "V") ? [{ start: t.start, end: r._1.head.end, direction: t.direction }] : [t, r._1.head], i = Do(r._1.tail);
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
}, Eo = (t) => {
  const n = (r) => (o) => {
    const i = Qt((s) => x, (s) => (u) => v("Just", { head: s, tail: u }), o);
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
  }, e = Qt((r) => x, (r) => (o) => v("Just", { head: r, tail: o }), t);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return n(e._1.head)(e._1.tail);
  f();
}, so = (t) => (n) => (e) => (r) => V0((o) => e >= o.y && e < o.y + o.h && n > o.x && t < o.x + o.w)(r), $o = (t) => (n) => (e) => (r) => so(gn(n)(e))(ln(n)(e))(r)(t), Jm = (t) => (n) => (e) => (r) => {
  const o = e + 2 | 0, i = o < 1 ? n : bt(o, n.length, n), s = e < 1 ? [] : bt(0, e, n), u = (e + 1 | 0) === (r - 1 | 0), c = e === 0, a = e >= 0 && e < n.length ? v("Just", n[e]) : x;
  if (a.tag === "Just") {
    const g = e + 1 | 0, _ = g >= 0 && g < n.length ? v("Just", n[g]) : x;
    if (_.tag === "Just") {
      const d = a._1.start._1 === _._1.end._1 && (!c || a._1.direction === "V") && (!u || _._1.direction === "V") && !Ci(t)(gn(a._1.start._2)(_._1.end._2))(ln(a._1.start._2)(_._1.end._2))(a._1.start._1) ? v("Just", [...s, { start: a._1.start, end: _._1.end, direction: tn }, ...i]) : x, l = a._1.start._2 === _._1.end._2 && (!c || a._1.direction === "H") && (!u || _._1.direction === "H") && !$o(t)(gn(a._1.start._1)(_._1.end._1))(ln(a._1.start._1)(_._1.end._1))(a._1.start._2) ? v("Just", [...s, { start: a._1.start, end: _._1.end, direction: Zt }, ...i]) : x;
      return d.tag === "Nothing" ? l : d;
    }
    if (_.tag === "Nothing")
      return x;
    f();
  }
  if (a.tag === "Nothing")
    return x;
  f();
}, Tm = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if ((c + 1 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const a = Jm(t)(n)(c)(e);
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
}, vm = (t) => (n) => (e) => (r) => {
  const o = (d, l, h) => !Ci(t)(gn(l)(h))(ln(l)(h))(d), i = e + 3 | 0, s = i < 1 ? n : bt(i, n.length, n), u = e < 1 ? [] : bt(0, e, n), c = (e + 2 | 0) === (r - 1 | 0), a = e === 0, g = (d, l, h) => !$o(t)(gn(l)(h))(ln(l)(h))(d), _ = e >= 0 && e < n.length ? v("Just", n[e]) : x;
  if (_.tag === "Just") {
    const d = e + 2 | 0, l = d >= 0 && d < n.length ? v("Just", n[d]) : x;
    if (l.tag === "Just") {
      const h = _._1.start._1 === l._1.end._1 && (!a || _._1.direction === "V") && (!c || l._1.direction === "V") && o(_._1.start._1, _._1.start._2, l._1.end._2) ? v("Just", [...u, { start: _._1.start, end: l._1.end, direction: tn }, ...s]) : _._1.start._2 === l._1.end._2 && (!a || _._1.direction === "H") && (!c || l._1.direction === "H") && g(_._1.start._2, _._1.start._1, l._1.end._1) ? v("Just", [...u, { start: _._1.start, end: l._1.end, direction: Zt }, ...s]) : x, p = (!a || _._1.direction === "V") && (!c || l._1.direction === "H") && o(_._1.start._1, _._1.start._2, l._1.end._2) && g(
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
      ) : x, $ = (!a || _._1.direction === "H") && (!c || l._1.direction === "V") && g(_._1.start._2, _._1.start._1, l._1.end._1) && o(
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
      ) : x, m = p.tag === "Nothing" ? $ : p;
      return h.tag === "Nothing" ? m : h;
    }
    if (l.tag === "Nothing")
      return x;
    f();
  }
  if (_.tag === "Nothing")
    return x;
  f();
}, wm = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if ((c + 2 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const a = vm(t)(n)(c)(e);
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
      const s = r, u = Eo(Lo(Tm(t)(wm(t)(s))));
      if (u.length < s.length) {
        r = u;
        continue;
      }
      o = !1, i = u;
    }
    return i;
  };
  return (e) => n(Eo(Lo(e)));
}, bm = (t) => (n) => (e) => (r) => {
  const o = gn(e)(r), i = ln(e)(r), s = ft((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = Lt((a) => (g) => at.compare(a.x)(g.x))(s);
    return 0 < c.length ? c[0].x - 1 : (e + r) / 2;
  }
  const u = Lt((c) => (a) => at.compare(a.x)(c.x))(z((c) => ({ ...c, x: c.x + c.w }))(s));
  return 0 < u.length ? u[0].x + 1 : (e + r) / 2;
}, Lm = (t) => (n) => (e) => (r) => {
  const o = gn(e)(r), i = ln(e)(r), s = ft((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = Lt((a) => (g) => at.compare(a.y)(g.y))(s);
    return 0 < c.length ? c[0].y - 1 : (e + r) / 2;
  }
  const u = Lt((c) => (a) => at.compare(a.y)(c.y))(z((c) => ({ ...c, y: c.y + c.h }))(s));
  return 0 < u.length ? u[0].y + 1 : (e + r) / 2;
}, Em = (t) => (n) => (e) => (r) => {
  const o = gn(e)(r), i = ln(e)(r), s = ft((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = Lt((a) => (g) => at.compare(g.x)(a.x))(z((a) => ({ ...a, x: a.x + a.w }))(s));
    return 0 < c.length ? c[0].x : (e + r) / 2;
  }
  const u = Lt((c) => (a) => at.compare(c.x)(a.x))(s);
  return 0 < u.length ? u[0].x - 1 : (e + r) / 2;
}, Sm = (t) => (n) => (e) => (r) => {
  const o = gn(e)(r), i = ln(e)(r), s = ft((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = Lt((a) => (g) => at.compare(g.y)(a.y))(z((a) => ({ ...a, y: a.y + a.h }))(s));
    return 0 < c.length ? c[0].y : (e + r) / 2;
  }
  const u = Lt((c) => (a) => at.compare(c.y)(a.y))(s);
  return 0 < u.length ? u[0].y - 1 : (e + r) / 2;
}, U0 = (t) => (n) => (e) => {
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
}, pa = (t) => (n) => (e) => (r) => (o) => {
  const i = gn(n)(e), s = ln(n)(e);
  if (!io(i)(s)(r)(t))
    return r;
  if (!io(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return io(i)(s)(u)(t) ? U0((c) => io(i)(s)(c)(t))(u)(1) : u;
}, Cm = (t) => (n) => (e) => (r) => (o) => {
  const i = gn(n)(e), s = ln(n)(e);
  if (!so(i)(s)(r)(t))
    return r;
  if (!so(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return so(i)(s)(u)(t) ? U0((c) => so(i)(s)(c)(t))(u)(1) : u;
}, Pm = (t) => (n) => (e) => (r) => {
  const o = gn(n)(e), i = ln(n)(e), s = ft((a) => r >= a.x && r < a.x + a.w && a.y + a.h > o && a.y < i, t), u = J((a) => (g) => ln(a)(g.x + g.w + 4))(r + 4)(s), c = J((a) => (g) => gn(a)(g.x - 4))(r - 4)(s);
  return (() => {
    const a = u - r, g = c - r;
    return (a < 0 ? -a : a) <= (g < 0 ? -g : g);
  })() ? u : c;
}, Gm = (t) => (n) => (e) => (r) => {
  const o = gn(n)(e), i = ln(n)(e), s = ft((a) => r >= a.y && r < a.y + a.h && a.x + a.w > o && a.x < i, t), u = J((a) => (g) => ln(a)(g.y + g.h + 4))(r + 4)(s), c = J((a) => (g) => gn(a)(g.y - 4))(r - 4)(s);
  return (() => {
    const a = u - r, g = c - r;
    return (a < 0 ? -a : a) <= (g < 0 ? -g : g);
  })() ? u : c;
}, Am = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
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
  })(), a = (w, k, L) => !Ci(n)(gn(k)(L))(ln(k)(L))(w), g = (w, k, L) => !Ci(e)(gn(k)(L))(ln(k)(L))(w), _ = (w, k, L, P) => t.tag === "Just" && !$o(e)(gn(w)(k))(ln(w)(k))(t._1) ? t._1 : Cm(n)(w)(k)(L)(P), d = (w, k, L, P) => {
    if (w === L) {
      const X = Pm(n)(k)(P)(w), V = Lm(n)(w)(k)(P), A = Sm(n)(w)(k)(P);
      return [
        { start: b(w, k), end: b(w, V), direction: tn },
        { start: b(w, V), end: b(X, V), direction: Zt },
        { start: b(X, V), end: b(X, A), direction: tn },
        { start: b(X, A), end: b(L, A), direction: Zt },
        { start: b(L, A), end: b(L, P), direction: tn }
      ];
    }
    const O = _(w, L, k, P);
    return [
      { start: b(w, k), end: b(w, O), direction: tn },
      { start: b(w, O), end: b(L, O), direction: Zt },
      { start: b(L, O), end: b(L, P), direction: tn }
    ];
  }, l = (w, k, L, P) => {
    if (k === P) {
      const X = Gm(n)(w)(L)(k), V = bm(n)(k)(w)(L), A = Em(n)(k)(w)(L);
      return [
        { start: b(w, k), end: b(V, k), direction: Zt },
        { start: b(V, k), end: b(V, X), direction: tn },
        { start: b(V, X), end: b(A, X), direction: Zt },
        { start: b(A, X), end: b(A, P), direction: tn },
        { start: b(A, P), end: b(L, P), direction: Zt }
      ];
    }
    const O = pa(n)(k)(P)(w)(L);
    return [
      { start: b(w, k), end: b(O, k), direction: Zt },
      { start: b(O, k), end: b(O, P), direction: tn },
      { start: b(O, P), end: b(L, P), direction: Zt }
    ];
  }, h = (w, k, L) => !$o(n)(gn(k)(L))(ln(k)(L))(w), p = (w, k, L) => !$o(e)(gn(k)(L))(ln(k)(L))(w), $ = (w, k, L, P) => {
    if (p(k, w, L) && g(L, k, P))
      return [
        { start: b(w, k), end: b(L, k), direction: Zt },
        { start: b(L, k), end: b(L, P), direction: tn }
      ];
    const O = pa(n)(k)(P)(w)(L);
    return [
      { start: b(w, k), end: b(O, k), direction: Zt },
      { start: b(O, k), end: b(O, P), direction: tn },
      { start: b(O, P), end: b(L, P), direction: Zt }
    ];
  }, m = (w, k, L, P) => {
    if (g(w, k, P) && p(P, w, L))
      return [
        { start: b(w, k), end: b(w, P), direction: tn },
        { start: b(w, P), end: b(L, P), direction: Zt }
      ];
    const O = _(w, L, k, P);
    return [
      { start: b(w, k), end: b(w, O), direction: tn },
      { start: b(w, O), end: b(L, O), direction: Zt },
      { start: b(L, O), end: b(L, P), direction: tn }
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
  return u._1 === c._1 && u._2 === c._2 ? [{ start: b(o._1, o._2), end: b(s._1, s._2), direction: N }] : xm({ start: b(o._1, o._2), end: b(u._1, u._2), direction: N })(y)(T);
}, Im = /* @__PURE__ */ z((t) => ({ x: t.position._1 * ci - 2, y: t.position._2 * ci - 2, w: t.size._1 * ci + 4, h: t.size._2 * ci + 4 })), Pi = /* @__PURE__ */ nn(C)(Dt), Ee = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, As = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, Fm = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, $a = (t) => (n) => {
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
}, Is = (t) => (n) => {
  const e = ot(4);
  if (t === "South")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "North")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "East")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  if (t === "West")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  f();
}, ma = (t) => (n) => J((e) => (r) => wt(t)(on)(n(r))([r])(e))(I), ya = (t) => (n) => (e) => (r) => {
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
}, K0 = (t) => (n) => {
  const e = t.hi - t.lo, r = (t.lo + t.hi) / 2, o = n.length;
  return o === 0 ? I : Pi(o === 1 ? z((i) => b(i, r))(n) : Ft((i) => (s) => b(s, t.lo + ot(i + 1 | 0) * e / ot(o + 1 | 0)))(n));
}, M0 = (t) => (n) => (e) => (r) => (o) => {
  const i = ma(C)((l) => l.to.node)(t), s = ma(C)((l) => l.from.node)(t), u = J((l) => (h) => U(C)(h.node)(h)(l))(I)(n), c = (l, h, p) => {
    const $ = Ee(l)(u);
    if ($.tag === "Nothing")
      return b(0, 0);
    if ($.tag === "Just") {
      const m = Ee(l)(e);
      if (m.tag === "Nothing") {
        const y = ot(4);
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
          const N = ot(4);
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
          const N = ot(4);
          if (y._1.side === "North")
            return b($._1.position._1 * N + ot(y._1.offset) * N, $._1.position._2 * N);
          if (y._1.side === "South")
            return b($._1.position._1 * N + ot(y._1.offset) * N, ($._1.position._2 + $._1.size._2) * N);
          if (y._1.side === "East")
            return b(($._1.position._1 + $._1.size._1) * N, $._1.position._2 * N + ot(y._1.offset) * N);
          if (y._1.side === "West")
            return b($._1.position._1 * N, $._1.position._2 * N + ot(y._1.offset) * N);
        }
      }
    }
    f();
  }, a = Pi(Tt(r)((l) => {
    if (l.nodes.length <= 2)
      return [];
    const h = ot(4);
    if (1 < l.nodes.length) {
      const p = Ee(l.nodes[1])(u);
      if (p.tag === "Nothing")
        return [];
      if (p.tag === "Just") {
        const $ = p._1.position._1 * h + p._1.size._1 * h / 2;
        return z((m) => b(m, $))(kn(
          (m) => (y) => l.edgeId + ":" + m + "->" + y,
          l.nodes,
          bt(1, l.nodes.length, l.nodes)
        ));
      }
      f();
    }
    return [];
  })), g = (l) => {
    const h = Ee(l.from.node)(u), p = Ee(l.to.node)(u);
    if (h.tag === "Just" && p.tag === "Just") {
      const $ = h._1, m = p._1, y = Lt((N) => (T) => it.compare(N.score)(T.score))(z((N) => {
        const T = N._1, w = N._2;
        return {
          from: T,
          to: w,
          score: (() => {
            const k = (X, V, A, B, et) => {
              const st = Is(X)(V), Y = Is(X)(A);
              return st.lo < Y.hi && Y.lo < st.hi && (T === "South" ? w === "North" && et._2 > B._2 : T === "North" ? w === "South" && et._2 < B._2 : T === "East" ? w === "West" && et._1 > B._1 : T === "West" && w === "East" && et._1 < B._1) ? 0 : ya(T)(w)(B)(et);
            }, L = $a(T)($), P = $a(w)(m), O = ya(T)(w)(L)(P);
            return (() => {
              if (O > 0) {
                if (T === "South")
                  return w === "North" ? k(hn, $, m, L, P) * 10 | 0 : O * 10 | 0;
                if (T === "North")
                  return w === "South" ? k(dn, $, m, L, P) * 10 | 0 : O * 10 | 0;
                if (T === "East")
                  return w === "West" ? k(Ce, $, m, L, P) * 10 | 0 : O * 10 | 0;
                if (T === "West" && w === "East")
                  return k(Pe, $, m, L, P) * 10 | 0;
              }
              return O * 10 | 0;
            })() + (T === "South" ? w === "North" ? 0 : 15 : T === "North" ? w === "South" ? 0 : 15 : T === "East" ? w === "West" ? 5 : 15 : T === "West" && w === "East" ? 5 : 15) | 0;
          })()
        };
      })([
        b(hn, dn),
        b(Ce, dn),
        b(Pe, dn),
        b(hn, Ce),
        b(hn, Pe),
        b(dn, hn),
        b(dn, Ce),
        b(dn, Pe),
        b(Ce, hn),
        b(Pe, hn),
        b(Ce, Pe),
        b(Pe, Ce)
      ]));
      if (0 < y.length)
        return { from: y[0].from, to: y[0].to };
    }
    return { from: hn, to: dn };
  }, _ = Pi(z((l) => b(l.id, g(l)))(t)), d = (l, h, p, $, m, y) => {
    const N = ot(4), T = Ee(h)(u);
    if (T.tag === "Nothing")
      return b(0, 0);
    if (T.tag === "Just") {
      const w = Fm(b(p, l))(o);
      if (w.tag === "Just") {
        const k = T._1.position._1 * N + w._1, L = ot(4);
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
        const k = Is(l)(T._1), L = (k.lo + k.hi) / 2, P = As(p)(K0(k)(z((V) => V.id)(Lt((V) => (A) => at.compare(m(l)(V))(m(l)(A)))(ft(
          (V) => {
            const A = As(V.id)(_);
            if (A.tag === "Just") {
              const B = y(A._1);
              return B === "North" ? l === "North" : B === "South" ? l === "South" : B === "East" ? l === "East" : B === "West" && l === "West";
            }
            if (A.tag === "Nothing")
              return !0;
            f();
          },
          (() => {
            const V = Ee(h)($);
            if (V.tag === "Nothing")
              return [];
            if (V.tag === "Just")
              return V._1;
            f();
          })()
        ))))), O = (() => {
          if (P.tag === "Nothing")
            return L;
          if (P.tag === "Just")
            return P._1;
          f();
        })(), X = ot(4);
        if (l === "South")
          return b(O, (T._1.position._2 + T._1.size._2) * X);
        if (l === "North")
          return b(O, T._1.position._2 * X);
        if (l === "East")
          return b((T._1.position._1 + T._1.size._1) * X, O);
        if (l === "West")
          return b(T._1.position._1 * X, O);
      }
    }
    f();
  };
  return z((l) => {
    const h = As(l.edge.id)(a);
    if (h.tag === "Nothing")
      return l;
    if (h.tag === "Just")
      return {
        ...l,
        fromPos: Nn(3)(l.edge.from.node) === "$d:" ? b(h._1, l.fromPos._2) : l.fromPos,
        toPos: Nn(3)(l.edge.to.node) === "$d:" ? b(h._1, l.toPos._2) : l.toPos
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
          const m = Ee($.to.node)(u);
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just") {
            const y = ot(4);
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
          const m = Ee($.from.node)(u);
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just") {
            const y = ot(4);
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
}, j0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, Ar = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, Rm = /* @__PURE__ */ (() => {
  const t = ee.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), _u = (t) => (n) => t.gapTop + 1 * ot(4) + ot(n) * 2.5 * ot(4), Bm = (t) => (n) => {
  const e = j0(n.edge.id)(t);
  if (e.tag === "Just") {
    if (e._1.partner.tag === "Just")
      return v("Just", { slot1Y: _u(e._1)(e._1.slot), splitX: e._1.partner._1.splitX, slot2Y: _u(e._1)(e._1.partner._1.slot) });
    if (e._1.partner.tag === "Nothing")
      return x;
    f();
  }
  if (e.tag === "Nothing")
    return x;
  f();
}, Qm = (t) => (n) => {
  const e = J((r) => (o) => U(C)(o.node)(o)(r))(I)(n);
  return zn(Ft((r) => (o) => {
    const i = Ar(o.node)(e);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just") {
      const s = i._1;
      return Ft((u) => (c) => {
        const a = o.edges.length, g = ot(4), _ = s.position._1 * g, d = s.position._2 * g, l = s.size._2 * g, h = ot((2 * a | 0) + 1 | 0), p = d + l * ot(a - u | 0) / h, $ = d + l * ot((a + 1 | 0) + u | 0) / h, m = _ - g * 2.5 * ot(u + 1 | 0), y = [
          { start: b(_, p), end: b(m, p), direction: Zt },
          { start: b(m, p), end: b(m, $), direction: tn },
          { start: b(m, $), end: b(_, $), direction: Zt }
        ];
        return { edge: c.id, segments: y, bends: kn((N) => (T) => N.end, y, bt(1, 3, y)), bendType: [], jumps: [], reversed: !1 };
      })(o.edges);
    }
    f();
  })(z((r) => ({ node: r._1, edges: r._2 }))(Rm(J((r) => (o) => wt(C)(on)(o.from.node)([
    o
  ])(r))(I)(t)))));
}, Wm = (t) => (n) => {
  const e = J((i) => (s) => U(C)(s.node)(s)(i))(I)(n), r = (i) => {
    const s = Ar(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.position._1;
    f();
  }, o = (i) => {
    const s = Ar(i)(e);
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
}, Rn = (t) => {
  const n = ot(4);
  return { x: t.position._1 * n - 2, y: t.position._2 * n - 2, w: t.size._1 * n + 4, h: t.size._2 * n + 4 };
}, Hm = (t) => t.from.node === t.to.node, Dm = (t) => (n) => (e) => (r) => {
  const o = km(e)(Am(t)(n)(e)(r.fromSide)(r.fromPos)(r.toSide)(r.toPos));
  return {
    edge: r.edge.id,
    segments: o,
    bends: kn((i) => (s) => i.end, o, bt(1, o.length, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, Om = (t) => (n) => (e) => (r) => {
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
    bends: kn((i) => (s) => i.end, o, bt(1, 5, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, zm = (t) => (n) => (e) => {
  const r = Ar(t.edge.from.node)(e);
  if (r.tag === "Just") {
    const i = Ar(t.edge.to.node)(e);
    return i.tag === "Just" ? ft(
      (s) => !(s.h === Rn(r._1).h && s.w === Rn(r._1).w && s.x === Rn(r._1).x && s.y === Rn(r._1).y) && !(s.h === Rn(i._1).h && s.w === Rn(i._1).w && s.x === Rn(i._1).x && s.y === Rn(i._1).y),
      n
    ) : ft((s) => !(s.h === Rn(r._1).h && s.w === Rn(r._1).w && s.x === Rn(r._1).x && s.y === Rn(r._1).y), n);
  }
  const o = Ar(t.edge.to.node)(e);
  return o.tag === "Just" ? ft((i) => !(i.h === Rn(o._1).h && i.w === Rn(o._1).w && i.x === Rn(o._1).x && i.y === Rn(o._1).y), n) : ft((i) => !0, n);
}, qm = (t) => (n) => {
  const e = j0(n.edge.id)(t);
  if (e.tag === "Just")
    return v("Just", _u(e._1)(e._1.slot));
  if (e.tag === "Nothing")
    return x;
  f();
}, Ym = (t) => (n) => (e) => (r) => (o) => {
  const i = J((a) => (g) => U(C)(g.node)(g)(a))(I)(n), s = Im(n), u = M0(ft((a) => a.from.node !== a.to.node, t))(n)(e)(r)(o), c = X0(u)(n);
  return [
    ...Qm(ft(Hm, t))(n),
    ...J((a) => (g) => {
      const _ = zm(g)(s)(i), d = [..._, ...a.edgeObstacles], l = Bm(c)(g), h = (() => {
        if (l.tag === "Just")
          return Om(l._1)(_)(d)(g);
        if (l.tag === "Nothing")
          return Dm(qm(c)(g))(_)(d)(g);
        f();
      })();
      return { results: [...a.results, h], edgeObstacles: [...a.edgeObstacles, ...Nm(h.segments)] };
    })({ results: [], edgeObstacles: [] })(Wm(u)(n)).results
  ];
}, je = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ze = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Xm = (t) => (n) => (e) => {
  if (t.start._1 !== n.start._1)
    return x;
  const r = Ze(je(t.start._2)(t.end._2))(je(n.start._2)(n.end._2)), o = je(Ze(t.start._2)(t.end._2))(Ze(n.start._2)(n.end._2));
  return r < o ? v("Just", { position: b(t.start._1, (r + o) / 2), crossingEdge: e }) : x;
}, Vm = (t) => (n) => (e) => {
  if (t.start._2 !== n.start._2)
    return x;
  const r = Ze(je(t.start._1)(t.end._1))(je(n.start._1)(n.end._1)), o = je(Ze(t.start._1)(t.end._1))(Ze(n.start._1)(n.end._1));
  return r < o ? v("Just", { position: b((r + o) / 2, t.start._2), crossingEdge: e }) : x;
}, Um = (t) => (n) => (e) => {
  if (t.direction === "H")
    return Vm(t)(n)(e);
  if (t.direction === "V")
    return Xm(t)(n)(e);
  f();
}, Km = (t) => (n) => (e) => {
  const r = t + 1 | 0, o = r < 1 ? e : bt(r, e.length, e);
  return Tt(n.segments)((i) => Tt(o)((s) => yt((u) => Um(i)(u)(s.edge))(ft(
    (u) => u.direction === "H" ? i.direction === "H" : u.direction === "V" && i.direction === "V",
    s.segments
  ))));
}, Mm = (t) => (n) => (e) => n.start._1 > je(t.start._1)(t.end._1) && n.start._1 < Ze(t.start._1)(t.end._1) && t.start._2 > je(n.start._2)(n.end._2) && t.start._2 < Ze(n.start._2)(n.end._2) ? v("Just", { position: b(n.start._1, t.start._2), crossingEdge: e }) : x, jm = (t) => (n) => Tt(ft((e) => e.direction === "H", t.segments))((e) => Tt(n)((r) => yt((o) => Mm(e)(o)(r.edge))(ft(
  (o) => o.direction === "V",
  r.segments
)))), Zm = (t) => (n) => (e) => [
  ...jm(n)(ft((r) => r.edge !== n.edge, e)),
  ...Km(t)(n)(e)
], Na = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, Z0 = (t) => Nn(3)(t) === "$d:", t2 = (t) => (n) => (e) => J((r) => (o) => {
  const i = Na(o.from.node)(t), s = (() => {
    if (i.tag === "Nothing")
      return 0;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = Na(o.to.node)(t), c = (() => {
    if (u.tag === "Nothing")
      return -s;
    if (u.tag === "Just")
      return u._1 - s | 0;
    f();
  })();
  if (c <= 1)
    return { ...r, edges: [...r.edges, o], chains: [...r.chains, { edgeId: o.id, nodes: [o.from.node, o.to.node] }] };
  const a = o.id, g = z((d) => "$d:" + a + ":" + un(d))(It(1, c - 1 | 0)), _ = [o.from.node, ...g, o.to.node];
  return {
    ...r,
    layers: J((d) => (l) => {
      const h = l._2, p = w_(s + l._1 | 0)(($) => [...$, h])(d);
      if (p.tag === "Nothing")
        return d;
      if (p.tag === "Just")
        return p._1;
      f();
    })(r.layers)(kn(Oe, It(1, c - 1 | 0), g)),
    edges: [
      ...r.edges,
      ...kn(
        (d) => (l) => ({ id: a + ":" + d + "->" + l, from: { node: d, port: o.from.port }, to: { node: l, port: o.to.port }, label: x }),
        _,
        bt(1, _.length, _)
      )
    ],
    chains: [...r.chains, { edgeId: o.id, nodes: _ }]
  };
})({ layers: e, edges: [], chains: [] })(n), Gi = /* @__PURE__ */ (() => {
  const t = {
    eq: (n) => (e) => n._1 === e._1 && (n._2 === "North" ? e._2 === "North" : n._2 === "South" ? e._2 === "South" : n._2 === "East" ? e._2 === "East" : n._2 === "West" && e._2 === "West")
  };
  return {
    compare: (n) => (e) => {
      const r = C.compare(n._1)(e._1);
      if (r === "LT")
        return Jn;
      if (r === "GT")
        return Tn;
      if (n._2 === "North")
        return e._2 === "North" ? Gn : Jn;
      if (e._2 === "North")
        return Tn;
      if (n._2 === "South")
        return e._2 === "South" ? Gn : Jn;
      if (e._2 === "South")
        return Tn;
      if (n._2 === "East")
        return e._2 === "East" ? Gn : Jn;
      if (e._2 === "East")
        return Tn;
      if (n._2 === "West" && e._2 === "West")
        return Gn;
      f();
    },
    Eq0: () => t
  };
})(), n2 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = Gi.compare(t)(s._3);
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
}, e2 = /* @__PURE__ */ nn(C)(Dt), Fs = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, r2 = /* @__PURE__ */ nn(Gi)(Dt), xa = /* @__PURE__ */ (() => {
  const t = ee.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), Ir = (t) => (n) => (e) => (r) => {
  const o = n2(b(n, e))(t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just")
    return o._1;
  f();
}, tg = (t) => (n) => (e) => {
  const r = e2(zn(z((s) => Ft((u) => (c) => b(c, u))(s))(t))), o = (s, u) => {
    if (s === "South") {
      const c = Fs(u.to.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    if (s === "North") {
      const c = Fs(u.from.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    return 0;
  }, i = (s) => J((u) => (c) => Pn(
    Gi.compare,
    Cn,
    r2(z((a) => b(b(a._1, s), a._2))(xa(K0({
      lo: 0,
      hi: (() => {
        const a = Fs(c._1)(e);
        if (a.tag === "Just")
          return a._1._1;
        if (a.tag === "Nothing")
          return Nn(3)(c._1) === "$d:" ? 0 : 1;
        f();
      })()
    })(z((a) => a.id)(Lt((a) => (g) => it.compare(o(s, a))(o(s, g)))(c._2)))))),
    u
  ))(I)(xa(J((u) => (c) => c.from.node === c.to.node ? u : s === "South" ? wt(C)(on)(c.from.node)([c])(u) : s === "North" ? wt(C)(on)(c.to.node)([c])(u) : u)(I)(n)));
  return Pn(Gi.compare, Cn, i(dn), i(hn));
}, ng = (t) => t, eg = (t) => t, rg = (t) => t, o2 = /* @__PURE__ */ J((t) => (n) => U(C)(n)()(t))(I), i2 = /* @__PURE__ */ (() => {
  const t = ee.unfoldr((n) => {
    if (n.tag === "Nil")
      return x;
    if (n.tag === "Cons")
      return v("Just", b(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, qt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Yt);
  })());
})(), ut = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, oe = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Je = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, pe = /* @__PURE__ */ nn(C)(Dt), Rs = /* @__PURE__ */ Bf(C), du = /* @__PURE__ */ (() => {
  const t = ee.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), s2 = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, u2 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, Ja = /* @__PURE__ */ rg("VDown"), Ta = /* @__PURE__ */ rg("VUp"), c2 = /* @__PURE__ */ eg("ForwardPhase"), a2 = /* @__PURE__ */ eg("StackPhase"), va = /* @__PURE__ */ ng("HRight"), wa = /* @__PURE__ */ ng("HLeft"), ka = (t) => (e) => {
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
}, f2 = (t) => (n) => (e) => {
  const r = J((u) => (c) => wt(C)(sn)(c.tgt)(1)(u))(I)(t), o = i2(o2([
    ...z((u) => u.src)(t),
    ...z((u) => u.tgt)(t),
    ...(() => {
      const u = (c, a) => {
        if (c.tag === "Leaf")
          return a;
        if (c.tag === "Node")
          return u(c._5, qt("Cons", c._4, u(c._6, a)));
        f();
      };
      return Et(Xt.foldr, u(n, Yt));
    })()
  ])), i = J((u) => (c) => wt(C)(on)(c.src)([{ target: c.tgt, sep: c.sep }])(u))(I)(t);
  return ((u) => (c) => (a) => {
    let g = u, _ = c, d = a, l = !0, h;
    for (; l; ) {
      const p = g, $ = _, m = d, y = Qt((N) => x, (N) => (T) => v("Just", { head: N, tail: T }), p);
      if (y.tag === "Nothing") {
        l = !1, h = m;
        continue;
      }
      if (y.tag === "Just") {
        const N = ut(y._1.head)(m), T = (() => {
          if (N.tag === "Nothing")
            return 0;
          if (N.tag === "Just")
            return N._1;
          f();
        })(), w = J((k) => (L) => {
          const P = ut(L.target)(k.result), O = T + L.sep, X = ut(L.target)(k.indeg), V = (() => {
            if (X.tag === "Nothing")
              return -1;
            if (X.tag === "Just")
              return X._1 - 1 | 0;
            f();
          })();
          return {
            newQueue: V === 0 ? [...k.newQueue, L.target] : k.newQueue,
            result: U(C)(L.target)((() => {
              if (P.tag === "Nothing")
                return O;
              if (P.tag === "Just") {
                if (e === "VDown")
                  return oe(P._1)(O);
                if (e === "VUp")
                  return Je(P._1)(O);
              }
              f();
            })())(k.result),
            indeg: U(C)(L.target)(V)(k.indeg)
          };
        })({ newQueue: [], result: m, indeg: $ })((() => {
          const k = ut(y._1.head)(i);
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
      const c = ut(u)(r);
      if (c.tag === "Nothing")
        return !0;
      if (c.tag === "Just")
        return c._1 === 0;
      f();
    },
    o
  ))(r)(J((u) => (c) => U(C)(c)(0)(u))(I)(o));
}, g2 = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, qt("Cons", i._4, n(i._6, s)));
    f();
  }, e = Et(Xt.foldr, n(t, Yt)), r = J(oe)(999999)(e);
  if (r === 0 || e.length === 0)
    return t;
  const o = (i) => {
    if (i.tag === "Leaf")
      return I;
    if (i.tag === "Node")
      return Ot("Node", i._1, i._2, i._3, i._4 - r, o(i._5), o(i._6));
    f();
  };
  return o(t);
}, og = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, qt("Cons", i._4, n(i._6, s)));
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
        u = Je(_)(d._1), c = d._2;
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
        u = oe(_)(d._1), c = d._2;
        continue;
      }
      f();
    }
    return g;
  };
  return r(-999999)(e) - o(999999)(e);
}, uo = (t) => (n) => ((r) => (o) => {
  let i = r, s = o, u = !0, c;
  for (; u; ) {
    const a = i, g = s;
    if (a === n) {
      u = !1, c = g;
      continue;
    }
    i = (() => {
      const _ = ut(a)(t.align);
      if (_.tag === "Nothing")
        return n;
      if (_.tag === "Just")
        return _._1;
      f();
    })(), s = [...g, a];
  }
  return c;
})((() => {
  const r = ut(n)(t.align);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just")
    return r._1;
  f();
})())([n]), l2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (g) => {
  const _ = (E, S, H) => {
    const G = E.from.node === S ? E.from.port : E.to.node === S ? E.to.port : x;
    if (G.tag === "Just") {
      const W = ut(S)(o);
      if (W.tag === "Just") {
        const Q = Ut((M) => M.id === G._1)(W._1);
        if (Q.tag === "Just") {
          const M = ot(Q._1.offset) * ot(4);
          return H === "North" || H === "South" ? M : 0;
        }
        if (Q.tag === "Nothing") {
          const M = ut(S)(r), q = Ir(s)(E.id)(H)((() => {
            if (M.tag === "Nothing")
              return 0.5;
            if (M.tag === "Just")
              return M._1._1 / 2;
            f();
          })());
          return H === "North" || H === "South" ? q : 0;
        }
        f();
      }
      if (W.tag === "Nothing") {
        const Q = ut(S)(r), M = Ir(s)(E.id)(H)((() => {
          if (Q.tag === "Nothing")
            return 0.5;
          if (Q.tag === "Just")
            return Q._1._1 / 2;
          f();
        })());
        return H === "North" || H === "South" ? M : 0;
      }
      f();
    }
    if (G.tag === "Nothing") {
      const W = ut(S)(r), Q = Ir(s)(E.id)(H)((() => {
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
  }, l = (E, S, H) => J((G) => (W) => U(C)(W)((() => {
    const Q = ut(W)(G);
    if (Q.tag === "Nothing")
      return 0 + S;
    if (Q.tag === "Just")
      return Q._1 + S;
    f();
  })())(G))(H)(uo(c)(E)), h = (() => {
    if (g === "HRight")
      return e;
    if (g === "HLeft")
      return wn(e);
    f();
  })(), p = (E) => {
    const S = ut(E)(r);
    if (S.tag === "Nothing")
      return 1;
    if (S.tag === "Just")
      return S._1._1;
    f();
  }, $ = pe(zn(Ft((E) => (S) => z((H) => b(H, E))(S))(e))), m = (E, S) => Nn(3)(E) === "$d:" && Nn(3)(S) === "$d:" || Nn(3)(E) === "$d:" || Nn(3)(S) === "$d:" ? 10 : ot(t.nodeGap), y = J((E) => (S) => Rs((H) => v(
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
  ))(S.to.node)(E))(I)(i), N = J((E) => (S) => Rs((H) => v(
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
  ))(S.from.node)(E))(I)(i), T = zn(e), w = J((E) => (S) => {
    const H = ut(S)(c.root), G = (() => {
      if (H.tag === "Nothing")
        return S;
      if (H.tag === "Just")
        return H._1;
      f();
    })();
    return S === G ? E : Rs((W) => v(
      "Just",
      (() => {
        if (W.tag === "Nothing")
          return !0;
        if (W.tag === "Just")
          return W._1;
        f();
      })() && Nn(3)(S) === "$d:"
    ))(G)(E);
  })(pe(z((E) => b(E, !0))(Wr(C.compare)((() => {
    const E = (S, H) => {
      if (S.tag === "Leaf")
        return H;
      if (S.tag === "Node")
        return E(S._5, qt("Cons", S._4, E(S._6, H)));
      f();
    };
    return Et(Xt.foldr, E(c.root, Yt));
  })()))))(T), k = (E, S) => {
    const H = E.free, G = ut(H)(c.root), W = (() => {
      if (G.tag === "Nothing")
        return H;
      if (G.tag === "Just")
        return G._1;
      f();
    })(), Q = ut(W)(w), M = (() => {
      if (Q.tag === "Nothing")
        return !0;
      if (Q.tag === "Just")
        return Q._1;
      f();
    })();
    return J((q) => (D) => {
      if (q.edge.tag === "Just")
        return q;
      if (q.edge.tag === "Nothing") {
        if ((() => {
          const ct = ut(W)(S.su);
          return !M && (() => {
            const lt = ut(D.from.node)($);
            return D.from.node !== D.to.node && (() => {
              const Wt = ut(D.to.node)($);
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
        const rt = D.from.node === H ? D.to.node : D.from.node, Z = ut(rt)(c.root), nt = (() => {
          if (Z.tag === "Nothing")
            return rt;
          if (Z.tag === "Just")
            return Z._1;
          f();
        })(), tt = nt !== W;
        return tt && (() => {
          const ct = ut(nt)(S.blockFinished);
          if (ct.tag === "Nothing")
            return !1;
          if (ct.tag === "Just")
            return ct._1;
          f();
        })() ? { ...q, edge: v("Just", D), hasEdges: !0 } : { ...q, hasEdges: q.hasEdges || tt };
      }
      f();
    })({ edge: x, hasEdges: !1 })((() => {
      if (E.isRoot) {
        if (g === "HRight") {
          const q = ut(H)(y);
          if (q.tag === "Nothing")
            return [];
          if (q.tag === "Just")
            return q._1;
          f();
        }
        if (g === "HLeft") {
          const q = ut(H)(N);
          if (q.tag === "Nothing")
            return [];
          if (q.tag === "Just")
            return q._1;
        }
        f();
      }
      if (g === "HRight") {
        const q = ut(H)(N);
        if (q.tag === "Nothing")
          return [];
        if (q.tag === "Just")
          return q._1;
        f();
      }
      if (g === "HLeft") {
        const q = ut(H)(y);
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
    })(), Q = { free: S, isRoot: H }, M = k(Q, G);
    if (M.edge.tag === "Nothing")
      return M.hasEdges ? { thresh: W, state: { ...G, queue: [...G.queue, Q] } } : { thresh: W, state: G };
    if (M.edge.tag === "Just") {
      const q = M.edge._1.from.node === S ? M.edge._1.to.node : M.edge._1.from.node;
      return {
        thresh: (() => {
          const D = ut((() => {
            const tt = ut(q)(c.root);
            if (tt.tag === "Nothing")
              return q;
            if (tt.tag === "Just")
              return tt._1;
            f();
          })())(G.x), rt = ut(q)(u), Z = ut(S)(u), nt = (() => {
            if (D.tag === "Just")
              return D._1;
            if (D.tag === "Nothing")
              return x;
            f();
          })();
          return (() => {
            if (nt.tag === "Nothing")
              return 0;
            if (nt.tag === "Just")
              return nt._1;
            f();
          })() + (() => {
            if (rt.tag === "Nothing")
              return 0;
            if (rt.tag === "Just")
              return rt._1;
            f();
          })() + _(
            M.edge._1,
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
            M.edge._1,
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
            const D = ut(M.edge._1.from.node)(c.root);
            if (D.tag === "Nothing")
              return M.edge._1.from.node;
            if (D.tag === "Just")
              return D._1;
            f();
          })())(!0)(U(C)((() => {
            const D = ut(M.edge._1.to.node)(c.root);
            if (D.tag === "Nothing")
              return M.edge._1.to.node;
            if (D.tag === "Just")
              return D._1;
            f();
          })())(!0)(G.su))
        }
      };
    }
    f();
  }, P = (E, S, H, G) => {
    const W = S === E, Q = ut(S)(c.align), M = (() => {
      if (Q.tag === "Nothing")
        return S === E;
      if (Q.tag === "Just")
        return Q._1 === E;
      f();
    })();
    if (!(W || M))
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
        return q.thresh <= -1e18 && M;
      if (a === "VUp")
        return q.thresh >= 1e18 && M;
      f();
    })() ? L(E, S, !1, q.state) : q;
  }, O = (E) => (S) => (H) => {
    const G = ut(H)(n.nodeIndex), W = (() => {
      if (G.tag === "Nothing")
        return 0;
      if (G.tag === "Just")
        return G._1;
      f();
    })(), Q = Ut((Z) => Dn(le)(H)(Z))(h), M = (() => {
      if (Q.tag === "Nothing")
        return [];
      if (Q.tag === "Just")
        return Q._1;
      f();
    })(), q = M.length;
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
    const D = (() => {
      if (a === "VDown")
        return W - 1 | 0;
      if (a === "VUp")
        return W + 1 | 0;
      f();
    })(), rt = D >= 0 && D < M.length ? v("Just", M[D]) : x;
    if (rt.tag === "Nothing")
      return S;
    if (rt.tag === "Just") {
      const Z = ut(rt._1)(c.root), nt = (() => {
        if (Z.tag === "Nothing")
          return rt._1;
        if (Z.tag === "Just")
          return Z._1;
        f();
      })(), tt = P(E, H, S.thresh, X(nt)(S.st)), ct = (() => {
        const jt = ut(E)(tt.state.sink);
        if (jt.tag === "Nothing")
          return E === E;
        if (jt.tag === "Just")
          return jt._1 === E;
        f();
      })() ? {
        ...tt.state,
        sink: U(C)(E)((() => {
          const jt = ut(nt)(tt.state.sink);
          if (jt.tag === "Nothing")
            return nt;
          if (jt.tag === "Just")
            return jt._1;
          f();
        })())(tt.state.sink)
      } : tt.state, lt = ut(nt)(ct.sink), Wt = (() => {
        if (lt.tag === "Nothing")
          return nt;
        if (lt.tag === "Just")
          return lt._1;
        f();
      })(), vt = ut(E)(ct.sink), Ht = (() => {
        if (vt.tag === "Nothing")
          return E;
        if (vt.tag === "Just")
          return vt._1;
        f();
      })();
      if (Ht === Wt) {
        const jt = ut(nt)(ct.x), Ln = (() => {
          if (jt.tag === "Just")
            return jt._1;
          if (jt.tag === "Nothing")
            return x;
          f();
        })(), re = (() => {
          if (Ln.tag === "Nothing")
            return 0;
          if (Ln.tag === "Just")
            return Ln._1;
          f();
        })(), Xn = ut(E)(ct.x), xn = (() => {
          if (Xn.tag === "Just")
            return Xn._1;
          if (Xn.tag === "Nothing")
            return x;
          f();
        })(), Pt = (() => {
          if (xn.tag === "Nothing")
            return 0;
          if (xn.tag === "Just")
            return xn._1;
          f();
        })(), Gt = m(H, rt._1), Hn = ut(rt._1)(u), Vn = ut(H)(u), be = (() => {
          if (Hn.tag === "Nothing")
            return 0;
          if (Hn.tag === "Just")
            return Hn._1;
          f();
        })() - (() => {
          if (Vn.tag === "Nothing")
            return 0;
          if (Vn.tag === "Just")
            return Vn._1;
          f();
        })();
        if (a === "VDown") {
          const Le = Je(re + be + p(rt._1) + Gt)(tt.thresh);
          return {
            st: { ...ct, x: U(C)(E)(v("Just", S.initial ? Le : Je(Pt)(Le)))(ct.x) },
            initial: !1,
            thresh: tt.thresh
          };
        }
        if (a === "VUp") {
          const Le = oe(re + be - Gt - p(H))(tt.thresh);
          return {
            st: { ...ct, x: U(C)(E)(v("Just", S.initial ? Le : oe(Pt)(Le)))(ct.x) },
            initial: !1,
            thresh: tt.thresh
          };
        }
        f();
      }
      const pt = ut(nt)(ct.x), Jt = (() => {
        if (pt.tag === "Just")
          return pt._1;
        if (pt.tag === "Nothing")
          return x;
        f();
      })(), $t = (() => {
        if (Jt.tag === "Nothing")
          return 0;
        if (Jt.tag === "Just")
          return Jt._1;
        f();
      })(), mt = ut(E)(ct.x), K = (() => {
        if (mt.tag === "Just")
          return mt._1;
        if (mt.tag === "Nothing")
          return x;
        f();
      })(), j = (() => {
        if (K.tag === "Nothing")
          return 0;
        if (K.tag === "Just")
          return K._1;
        f();
      })(), gt = ot(t.nodeGap), _t = ut(H)(u), xt = ut(rt._1)(u), Nt = (() => {
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
              src: Ht,
              tgt: Wt,
              sep: (() => {
                if (a === "VDown")
                  return j + Nt - $t - p(rt._1) - gt;
                if (a === "VUp")
                  return j + Nt + p(H) + gt - $t;
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
  }, X = (E) => (S) => {
    const H = ut(E)(S.x), G = (() => {
      if (H.tag === "Just")
        return H._1;
      if (H.tag === "Nothing")
        return x;
      f();
    })();
    if (G.tag === "Just")
      return S;
    if (G.tag === "Nothing") {
      const W = J(O(E))({
        st: { ...S, x: U(C)(E)(v("Just", 0))(S.x) },
        initial: !0,
        thresh: (() => {
          if (a === "VDown")
            return -1e18;
          if (a === "VUp")
            return 1e18;
          f();
        })()
      })(uo(c)(E));
      return { ...W.st, blockFinished: U(C)(E)(!0)(W.st.blockFinished) };
    }
    f();
  }, V = J((E) => (S) => J((H) => (G) => {
    const W = ut(G)(c.root), Q = (() => {
      if (W.tag === "Nothing")
        return G;
      if (W.tag === "Just")
        return W._1;
      f();
    })();
    return Q === G ? X(Q)(H) : H;
  })(E)((() => {
    if (a === "VDown")
      return S;
    if (a === "VUp")
      return wn(S);
    f();
  })()))({
    x: pe(z((E) => b(E, x))(T)),
    sink: pe(z((E) => b(E, E))(T)),
    classEdges: [],
    su: I,
    blockFinished: I,
    queue: []
  })(h), A = f2(V.classEdges)(V.sink)(a), B = (E, S, H, G) => {
    const W = ut(S)(G), Q = ut(S)(u);
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
  }, et = pe(z((E) => b(E, !0))(Wr(C.compare)((() => {
    const E = (S, H) => {
      if (S.tag === "Leaf")
        return H;
      if (S.tag === "Node")
        return E(S._5, qt("Cons", S._4, E(S._6, H)));
      f();
    };
    return Et(Xt.foldr, E(c.root, Yt));
  })()))), st = (E) => (S) => (H) => {
    const G = k(H, { su: S.su, blockFinished: et }), W = {
      phase: E,
      ppFree: H.free,
      ppIsRoot: H.isRoot,
      edgeId: x,
      delta: 0,
      avail: 0,
      shift: 0,
      freeSu: (() => {
        const Q = ut((() => {
          const M = ut(H.free)(c.root);
          if (M.tag === "Nothing")
            return H.free;
          if (M.tag === "Just")
            return M._1;
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
            const Q = ut(H.free)(y);
            if (Q.tag === "Nothing")
              return 0;
            if (Q.tag === "Just")
              return Q._1.length;
            f();
          }
          if (g === "HLeft") {
            const Q = ut(H.free)(N);
            if (Q.tag === "Nothing")
              return 0;
            if (Q.tag === "Just")
              return Q._1.length;
          }
          f();
        }
        if (g === "HRight") {
          const Q = ut(H.free)(N);
          if (Q.tag === "Nothing")
            return 0;
          if (Q.tag === "Just")
            return Q._1.length;
          f();
        }
        if (g === "HLeft") {
          const Q = ut(H.free)(y);
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
      const Q = G.edge._1.from.node === H.free ? b(G.edge._1.from.node, G.edge._1.to.node) : b(G.edge._1.to.node, G.edge._1.from.node), M = B(G.edge._1, Q._1, d(G.edge._1, Q._1), S.x) - B(G.edge._1, Q._2, d(G.edge._1, Q._2), S.x), q = ut(Q._1)(c.root), D = (() => {
        if (q.tag === "Nothing")
          return Q._1;
        if (q.tag === "Just")
          return q._1;
        f();
      })(), rt = { ...W, edgeId: v("Just", G.edge._1.id), delta: M };
      if (M > 0 && M < 1e300) {
        const Z = J((ct) => (lt) => {
          const Wt = ut(lt)($), vt = (() => {
            if (Wt.tag === "Nothing")
              return -1;
            if (Wt.tag === "Just")
              return Wt._1;
            f();
          })();
          if (vt >= 0 && vt < e.length) {
            const Jt = e[vt], $t = ut(lt)(n.nodeIndex), mt = (() => {
              if ($t.tag === "Nothing")
                return -2;
              if ($t.tag === "Just")
                return $t._1 - 1 | 0;
              f();
            })();
            return mt >= 0 && mt < Jt.length ? oe(ct)((() => {
              const K = ut(lt)(S.x), j = ut(lt)(u), gt = ut(Jt[mt])(S.x), _t = ut(Jt[mt])(u);
              return (() => {
                if (K.tag === "Nothing")
                  return 0;
                if (K.tag === "Just")
                  return K._1;
                f();
              })() + (() => {
                if (j.tag === "Nothing")
                  return 0;
                if (j.tag === "Just")
                  return j._1;
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
          const Ht = ut(lt)(n.nodeIndex), pt = (() => {
            if (Ht.tag === "Nothing")
              return -2;
            if (Ht.tag === "Just")
              return Ht._1 - 1 | 0;
            f();
          })();
          return pt >= 0 && pt < 0 ? oe(ct)((() => {
            const Jt = ut(lt)(S.x), $t = ut(lt)(u), mt = ut([][pt])(S.x), K = ut([][pt])(u);
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
        })(M)(uo(c)(D)), nt = Z > 0 ? -Z : 0, tt = { ...S, x: Z > 0 ? l(D, nt, S.x) : S.x, trace: [...S.trace, { ...rt, avail: Z, shift: nt }] };
        return Z > 0 ? tt : { ...tt, stack: [...tt.stack, H] };
      }
      if (M < 0 && -M < 1e300) {
        const Z = J((ct) => (lt) => {
          const Wt = ut(lt)($), vt = (() => {
            if (Wt.tag === "Nothing")
              return -1;
            if (Wt.tag === "Just")
              return Wt._1;
            f();
          })();
          if (vt >= 0 && vt < e.length) {
            const Jt = e[vt], $t = ut(lt)(n.nodeIndex), mt = (() => {
              if ($t.tag === "Nothing")
                return 0;
              if ($t.tag === "Just")
                return $t._1 + 1 | 0;
              f();
            })();
            return mt >= 0 && mt < Jt.length ? oe(ct)((() => {
              const K = ut(Jt[mt])(S.x), j = ut(Jt[mt])(u), gt = ut(lt)(S.x), _t = ut(lt)(u);
              return (() => {
                if (K.tag === "Nothing")
                  return 0;
                if (K.tag === "Just")
                  return K._1;
                f();
              })() + (() => {
                if (j.tag === "Nothing")
                  return 0;
                if (j.tag === "Just")
                  return j._1;
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
          const Ht = ut(lt)(n.nodeIndex), pt = (() => {
            if (Ht.tag === "Nothing")
              return 0;
            if (Ht.tag === "Just")
              return Ht._1 + 1 | 0;
            f();
          })();
          return pt >= 0 && pt < 0 ? oe(ct)((() => {
            const Jt = ut([][pt])(S.x), $t = ut([][pt])(u), mt = ut(lt)(S.x), K = ut(lt)(u);
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
        })(-M)(uo(c)(D)), nt = Z > 0 ? Z : 0, tt = { ...S, x: Z > 0 ? l(D, nt, S.x) : S.x, trace: [...S.trace, { ...rt, avail: Z, shift: nt }] };
        return Z > 0 ? tt : { ...tt, stack: [...tt.stack, H] };
      }
      return { ...S, stack: [...S.stack, H], trace: [...S.trace, rt], x: S.x };
    }
    f();
  }, Y = J(st(c2))({
    x: pe(z((E) => b(
      E,
      (() => {
        const S = ut(E)(c.root), H = (() => {
          if (S.tag === "Nothing")
            return E;
          if (S.tag === "Just")
            return S._1;
          f();
        })(), G = ut(H)(V.x), W = ut((() => {
          const M = ut(H)(V.sink);
          if (M.tag === "Nothing")
            return H;
          if (M.tag === "Just")
            return M._1;
          f();
        })())(A), Q = (() => {
          if (G.tag === "Just")
            return G._1;
          if (G.tag === "Nothing")
            return x;
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
    su: V.su,
    stack: [],
    trace: []
  })(V.queue), R = J(st(a2))({ ...Y, stack: [] })(wn(Y.stack));
  return { x: R.x, queue: V.queue, trace: R.trace };
}, _2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (g) => l2(t)(n)(e)(r)(o)(i)(s)(u)(c)(a)(g).x, d2 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = (c, a, g) => {
    const _ = ut(a)(e), d = (() => {
      if (_.tag === "Nothing")
        return 0.5;
      if (_.tag === "Just")
        return _._1._1 / 2;
      f();
    })(), l = c.from.node === a ? c.from.port : c.to.node === a ? c.to.port : x;
    if (l.tag === "Just") {
      const h = ut(a)(n);
      if (h.tag === "Just") {
        const p = Ut(($) => $.id === l._1)(h._1);
        if (p.tag === "Just") {
          const $ = ot(p._1.offset) * ot(4);
          return g === "North" || g === "South" ? $ : 0;
        }
        if (p.tag === "Nothing") {
          const $ = Ir(o)(c.id)(g)(d);
          return g === "North" || g === "South" ? $ : 0;
        }
        f();
      }
      if (h.tag === "Nothing") {
        const p = Ir(o)(c.id)(g)(d);
        return g === "North" || g === "South" ? p : 0;
      }
      f();
    }
    if (l.tag === "Nothing") {
      const h = Ir(o)(c.id)(g)(d);
      return g === "North" || g === "South" ? h : 0;
    }
    f();
  }, u = (c) => (a) => (g) => (_) => {
    let d = c, l = a, h = g, p = _, $ = !0, m;
    for (; $; ) {
      const y = d, N = l, T = h, k = Qt((L) => x, (L) => (P) => v("Just", { head: L, tail: P }), p);
      if (k.tag === "Nothing") {
        $ = !1, m = y;
        continue;
      }
      if (k.tag === "Just") {
        const L = k._1.head, P = Ut((X) => X.from.node === T && X.to.node === L || X.from.node === L && X.to.node === T)(r), O = (() => {
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
        d = U(C)(L)(O)(y), l = O, h = L, p = k._1.tail;
        continue;
      }
      f();
    }
    return m;
  };
  return J((c) => (a) => {
    const g = Qt((l) => x, (l) => (h) => v("Just", { head: l, tail: h }), uo(t)(a)), _ = (() => {
      if (g.tag === "Nothing")
        return U(C)(a)(0)(I);
      if (g.tag === "Just")
        return u(U(C)(g._1.head)(0)(I))(0)(g._1.head)(g._1.tail);
      f();
    })(), d = J((l) => (h) => Je(l)(-h._2))(0)(du(_));
    return J((l) => (h) => U(C)(h._1)(h._2 + d)(l))(c)(du(_));
  })(I)(Wr(C.compare)((() => {
    const c = (a, g) => {
      if (a.tag === "Leaf")
        return g;
      if (a.tag === "Node")
        return c(a._5, qt("Cons", a._4, c(a._6, g)));
      f();
    };
    return Et(Xt.foldr, c(t.root, Yt));
  })()));
}, h2 = (t) => (n) => {
  const e = (o, i, s) => Nn(3)(i) === "$d:" && Gf(
    Z0,
    (() => {
      const u = ut(i)(t.preds);
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
      const P = k >= 0 && k < N.length ? v("Just", N[k]) : x, O = (() => {
        if (P.tag === "Nothing")
          return "";
        if (P.tag === "Just")
          return P._1;
        f();
      })(), X = e(t, O);
      if (k === (L - 1 | 0) || X) {
        const V = (() => {
          if (X) {
            const A = ut(O)(t.preds), B = (() => {
              if (A.tag === "Nothing")
                return [];
              if (A.tag === "Just")
                return A._1;
              f();
            })();
            if (0 < B.length) {
              const et = T - 1 | 0, st = ut(B[0])(t.nodeIndex);
              if (st.tag === "Nothing")
                return et;
              if (st.tag === "Just")
                return st._1;
              f();
            }
          }
          return T - 1 | 0;
        })();
        _ = J((A) => (B) => {
          if (B >= 0 && B < N.length) {
            const et = N[B];
            return e(t, et) ? A : J((st) => (Y) => {
              const R = ut(Y)(t.nodeIndex), E = (() => {
                if (R.tag === "Nothing")
                  return 0;
                if (R.tag === "Just")
                  return R._1;
                f();
              })();
              return E < w || E > V ? U(C)(Y + "→" + et)()(st) : st;
            })(A)((() => {
              const st = ut(et)(t.preds);
              if (st.tag === "Nothing")
                return [];
              if (st.tag === "Just")
                return st._1;
              f();
            })());
          }
          return e(t, "") ? A : J((et) => (st) => {
            const Y = ut(st)(t.nodeIndex), R = (() => {
              if (Y.tag === "Nothing")
                return 0;
              if (Y.tag === "Just")
                return Y._1;
              f();
            })();
            return R < w || R > V ? U(C)(st + "→")()(et) : et;
          })(A)((() => {
            const et = ut("")(t.preds);
            if (et.tag === "Nothing")
              return [];
            if (et.tag === "Just")
              return et._1;
            f();
          })());
        })(y)(It(0, k)), d = N, l = T, h = V, p = k + 1 | 0;
        continue;
      }
      _ = y, d = N, l = T, h = w, p = k + 1 | 0;
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
  })(I)(It(1, n.length - 2 | 0));
}, p2 = (t) => (n) => (e) => (r) => (o) => {
  const i = zn(n), s = J((u) => (c) => {
    const a = J((g) => (_) => {
      const d = (() => {
        if (o === "HRight") {
          const $ = ut(_)(t.preds);
          if ($.tag === "Nothing")
            return [];
          if ($.tag === "Just")
            return $._1;
          f();
        }
        if (o === "HLeft") {
          const $ = ut(_)(t.succs);
          if ($.tag === "Nothing")
            return [];
          if ($.tag === "Just")
            return $._1;
        }
        f();
      })(), l = d.length;
      if (l === 0)
        return g;
      const h = Ae(l - 1 | 0, 2), p = Ae(l, 2);
      return J(($) => (m) => {
        if ((() => {
          const y = ut(_)($.align);
          if (y.tag === "Nothing")
            return _ !== _;
          if (y.tag === "Just")
            return y._1 !== _;
          f();
        })())
          return $;
        if (m >= 0 && m < d.length) {
          const y = ut(d[m])(t.nodeIndex), N = (() => {
            if (y.tag === "Nothing")
              return 0;
            if (y.tag === "Just")
              return y._1;
            f();
          })();
          if (!(ka(d[m] + "→" + _)(e) || ka(_ + "→" + d[m])(e)) && (() => {
            if (r === "VDown")
              return $.r < N;
            if (r === "VUp")
              return $.r > N;
            f();
          })()) {
            const T = ut(d[m])($.root), w = (() => {
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
          return It(h, p);
        if (r === "VUp")
          return wn(It(h, p));
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
  })({ root: pe(z((u) => b(u, u))(i)), align: pe(z((u) => b(u, u))(i)) })((() => {
    if (o === "HRight")
      return n;
    if (o === "HLeft")
      return wn(n);
    f();
  })());
  return { root: s.root, align: s.align };
}, ai = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
  const g = p2(n)(e)(u)(c)(a), _ = d2(g)(o)(r)(i)(s)(a);
  return W_()((d) => (l) => v(
    "Just",
    (() => {
      const h = ut(d)(_);
      if (h.tag === "Nothing")
        return l + 0;
      if (h.tag === "Just")
        return l + h._1;
      f();
    })()
  ))(_2(t)(n)(e)(r)(o)(i)(s)(_)(g)(c)(a));
}, ba = (t) => (n) => Ft((e) => (r) => J((o) => (i) => i >= 0 && i < n.length ? i >= 0 && i < t.length ? o + n[i] + t[i] : o + n[i] + 0 : i >= 0 && i < t.length ? o + 1 + t[i] : o + 1)(0)((() => {
  const o = It(0, n.length - 1 | 0);
  return e < 1 ? [] : bt(0, e, o);
})()))(n), $2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = s2(0)(n.length - 1 | 0), c = ot(t.layerGap), a = s(x_(u, c)), g = ym(M0(o)(a)(r)(i)(I))(a);
  return z((_) => {
    const d = u2(_)(g);
    return d.tag === "Just" && d._1 > 0 ? Je(c)(2 + ot(d._1 - 1 | 0) * 2.5) : c;
  })(It(0, u - 1 | 0));
}, ig = (t) => (n) => (e) => (r) => Gf(
  (o) => J((i) => (s) => {
    if (!i.ok)
      return i;
    const u = ut(s)(r), c = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      f();
    })(), a = ut(s)(e), g = (() => {
      if (a.tag === "Nothing")
        return c + 1;
      if (a.tag === "Just")
        return c + a._1._1;
      f();
    })();
    return c + 1e-4 > i.pos && g + 1e-4 > i.pos ? { ok: !0, pos: g } : { ok: !1, pos: i.pos };
  })({ ok: !0, pos: -1e18 })(o).ok,
  n
), m2 = (t) => (n) => (e) => (r) => {
  const o = Lt((i) => (s) => at.compare(i.w)(s.w))(z((i) => ({ l: i, w: og(i) }))(ft(
    ig()(n)(e),
    r
  )));
  return 0 < o.length ? v("Just", o[0].l) : x;
}, y2 = (t) => (n) => {
  const e = pe(zn(z(Ft((o) => (i) => b(i, o)))(t))), r = (o) => Lt((i) => (s) => it.compare((() => {
    const u = ut(i)(e);
    if (u.tag === "Nothing")
      return 0;
    if (u.tag === "Just")
      return u._1;
    f();
  })())((() => {
    const u = ut(s)(e);
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
          return Ot("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(J((i) => (s) => wt(C)(on)(s.to.node)([s.from.node])(i))(I)(n));
    })(),
    succs: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return I;
        if (i.tag === "Node")
          return Ot("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(J((i) => (s) => wt(C)(on)(s.from.node)([s.to.node])(i))(I)(n));
    })(),
    nodeIndex: e
  };
}, N2 = (t) => (n) => {
  const e = Lt((_) => (d) => at.compare(_.w)(d.w))(Ft((_) => (d) => ({ i: _, l: d, w: og(d) }))(n)), r = 0 < e.length ? v("Just", e[0]) : x, o = (() => {
    if (r.tag === "Just")
      return r._1.i;
    if (r.tag === "Nothing")
      return 0;
    f();
  })(), i = o >= 0 && o < n.length ? v("Just", n[o]) : x, s = (() => {
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
            h = oe(y)(N._1), p = N._2;
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
            return d(l._5, qt("Cons", l._4, d(l._6, h)));
          f();
        };
        return d(i._1, Yt);
      })());
    if (i.tag === "Nothing")
      return 0;
    f();
  })(), u = (_) => J((d) => (l) => Je(d)((() => {
    const h = ut(l._1)(t);
    if (h.tag === "Nothing")
      return l._2 + 1;
    if (h.tag === "Just")
      return l._2 + h._1._1;
    f();
  })()))(-999999)(du(_)), c = o >= 0 && o < n.length ? v("Just", n[o]) : x, a = (() => {
    if (c.tag === "Just")
      return u(c._1);
    if (c.tag === "Nothing")
      return 0;
    f();
  })(), g = kn(
    (_) => (d) => {
      const l = (h) => {
        if (h.tag === "Leaf")
          return I;
        if (h.tag === "Node")
          return Ot("Node", h._1, h._2, h._3, h._4 + d, l(h._5), l(h._6));
        f();
      };
      return l(_);
    },
    n,
    Ft((_) => (d) => Me(_)(2) === 0 ? s - ((h) => (p) => {
      let $ = h, m = p, y = !0, N;
      for (; y; ) {
        const T = $, w = m;
        if (w.tag === "Nil") {
          y = !1, N = T;
          continue;
        }
        if (w.tag === "Cons") {
          $ = oe(T)(w._1), m = w._2;
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
          return h(p._5, qt("Cons", p._4, h(p._6, $)));
        f();
      };
      return h(d, Yt);
    })()) : a - u(d))(n)
  );
  return g2(J((_) => (d) => {
    const l = Lt(at.compare)(yt(ut(d))(g));
    return U(C)(d)(l.length === 4 ? 1 < l.length && 2 < l.length ? (l[1] + l[2]) / 2 : 0 : 0 < l.length ? l[0] : 0)(_);
  })(I)(Wr(C.compare)(zn(z((_) => {
    const d = (l) => {
      if (l.tag === "Leaf")
        return I;
      if (l.tag === "Node")
        return Ot("Node", l._1, l._2, l._3, void 0, d(l._5), d(l._6));
      f();
    };
    return Et(On.foldr, d(_));
  })(g)))));
}, x2 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = y2(n)(o), u = h2(s)(n), c = { nodeGap: t.nodeGap * 4 | 0 }, a = Pn(
    C.compare,
    Cn,
    pe(z((l) => b(l, b(1, 1)))(ft(
      Z0,
      zn(n)
    ))),
    (() => {
      const l = (h) => {
        if (h.tag === "Leaf")
          return I;
        if (h.tag === "Node")
          return Ot("Node", h._1, h._2, h._3, b(h._4._1 * ot(4), h._4._2), l(h._5), l(h._6));
        f();
      };
      return l(e);
    })()
  ), g = [
    ai(c)(s)(n)(a)(r)(o)(i)(u)(Ja)(va),
    ai(c)(s)(n)(a)(r)(o)(i)(u)(Ta)(va),
    ai(c)(s)(n)(a)(r)(o)(i)(u)(Ja)(wa),
    ai(c)(s)(n)(a)(r)(o)(i)(u)(Ta)(wa)
  ], _ = N2(a)(g);
  if (ig()(n)(a)(_))
    return _;
  const d = m2()(n)(a)(g);
  if (d.tag === "Just")
    return d._1;
  if (d.tag === "Nothing")
    return g[0];
  f();
}, J2 = (t) => (n) => (e) => (r) => {
  const o = Ef(
    x,
    Tf,
    (i) => i.node === n ? v("Just", i.position) : x,
    t
  );
  if (o.tag === "Nothing")
    return t;
  if (o.tag === "Just") {
    const i = o._1;
    return z((s) => s.node === e ? { ...s, position: b(i._1 + r._1, i._2 + r._2) } : s)(t);
  }
  f();
}, T2 = (t) => (n) => (e) => (r) => {
  const o = ft((s) => Dn(le)(s.node)(n), t), i = (() => {
    if (e === "Vertical") {
      if (r === "Start")
        return J((s) => (u) => oe(s)(u.position._1))(99999)(o);
      if (r === "End")
        return J((s) => (u) => Je(s)(u.position._1))(0)(o);
      if (r === "Center") {
        const s = J((u) => (c) => u + c.position._1)(0)(o);
        return o.length === 0 ? 0 : s / ot(o.length);
      }
      f();
    }
    if (e === "Horizontal") {
      if (r === "Start")
        return J((s) => (u) => oe(s)(u.position._2))(99999)(o);
      if (r === "End")
        return J((s) => (u) => Je(s)(u.position._2))(0)(o);
      if (r === "Center") {
        const s = J((u) => (c) => u + c.position._2)(0)(o);
        return o.length === 0 ? 0 : s / ot(o.length);
      }
    }
    f();
  })();
  return z((s) => {
    if (Dn(le)(s.node)(n)) {
      if (e === "Vertical")
        return { ...s, position: b(i, s.position._2) };
      if (e === "Horizontal")
        return { ...s, position: b(s.position._1, i) };
      f();
    }
    return s;
  })(t);
}, v2 = (t) => (n) => J((e) => (r) => r.tag === "AlignGroup" ? T2(e)(r._1.nodes)(r._1.axis)(r._1.alignment) : r.tag === "RelativePosition" ? J2(e)(r._1.anchor)(r._1.target)(r._1.offset) : e)(n)(t), w2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const c = z((_) => J((d) => (l) => Je(d)((() => {
    const h = ut(l)(r);
    if (h.tag === "Nothing")
      return 1;
    if (h.tag === "Just")
      return h._1._2;
    f();
  })()))(1)(_))(e), a = x2(t)(e)(r)(o)(i)(u), g = ba($2(t)(e)(r)(o)(i)(s)((_) => {
    const d = ba(_)(c);
    return zn(Ft((l) => (h) => Ft((p) => ($) => ({
      node: $,
      position: b(
        (() => {
          const m = ut($)(a);
          return (() => {
            if (m.tag === "Nothing")
              return 0;
            if (m.tag === "Just")
              return m._1;
            f();
          })() / ot(4);
        })(),
        l >= 0 && l < d.length ? d[l] : 0
      ),
      size: (() => {
        const m = Nn(3)($) === "$d:" ? b(0, 1) : b(1, 1), y = ut($)(r);
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
  return v2(n)(zn(Ft((_) => (d) => Ft((l) => (h) => ({
    node: h,
    position: b(
      (() => {
        const p = ut(h)(a);
        return (() => {
          if (p.tag === "Nothing")
            return 0;
          if (p.tag === "Just")
            return p._1;
          f();
        })() / ot(4);
      })(),
      _ >= 0 && _ < g.length ? g[_] : 0
    ),
    size: (() => {
      const p = Nn(3)(h) === "$d:" ? b(0, 1) : b(1, 1), $ = ut(h)(r);
      if ($.tag === "Nothing")
        return p;
      if ($.tag === "Just")
        return $._1;
      f();
    })(),
    layer: _,
    order: l
  }))(d))(e)));
}, Bs = /* @__PURE__ */ Vu(Ni)(/* @__PURE__ */ $r(32)), La = /* @__PURE__ */ Vu(Ni)(/* @__PURE__ */ $r(31)), So = /* @__PURE__ */ (() => {
  const t = I1("25214903917");
  if (t.tag === "Nothing")
    return Yf;
  if (t.tag === "Just")
    return t._1;
  f();
})(), Co = /* @__PURE__ */ js(/* @__PURE__ */ Vu(Ni)(/* @__PURE__ */ $r(48)))(Ni), k2 = (t) => {
  const n = F1(t);
  return xo(Xf((() => {
    if (n.tag === "Nothing")
      return Yf;
    if (n.tag === "Just")
      return n._1;
    f();
  })())(So))(Co);
}, hu = /* @__PURE__ */ $r(11), Ai = (t) => (n) => {
  const e = xo(di(hi(n)(So))(hu))(Co);
  return b(
    (() => {
      const r = Ff(C1(Zs(e)($r(48 - t | 0))));
      if (r.tag === "Nothing")
        return 0;
      if (r.tag === "Just")
        return r._1;
      f();
    })(),
    e
  );
}, b2 = (t) => {
  const n = Ai(26)(t), e = Ai(27)(n._2);
  return b((ot(n._1) * Ks(2)(27) + ot(e._1)) / Ks(2)(53), e._2);
}, L2 = (t) => (n) => {
  const e = J((r) => (o) => {
    const i = b2(r.finalR);
    return { rs: [...r.rs, i._1], finalR: i._2 };
  })({ rs: [], finalR: t })(n);
  return b(
    z((r) => r.x)(Lt((r) => (o) => at.compare(r.k)(o.k))(kn((r) => (o) => ({ x: r, k: o }), n, e.rs))),
    e.finalR
  );
}, E2 = (t) => {
  const n = xo(di(hi(t)(So))(hu))(Co), e = xo(di(hi(n)(So))(hu))(Co);
  return b(
    di(hi((() => {
      const r = Zs(n)($r(16));
      return Bc.compare(r)(La) !== "LT" ? js(r)(Bs) : r;
    })())(Bs))((() => {
      const r = Zs(e)($r(16));
      return Bc.compare(r)(La) !== "LT" ? js(r)(Bs) : r;
    })()),
    e
  );
}, Po = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, Ii = (t) => (e) => {
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
}, dc = /* @__PURE__ */ nn(C)(Dt), Gr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, Fi = /* @__PURE__ */ nn(C)(Dt), S2 = /* @__PURE__ */ Gu(Ho), C2 = /* @__PURE__ */ J(Dr)(0), P2 = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ea = (t) => (e) => {
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
}, G2 = (t) => (n) => (e) => {
  if (t >= 0 && t < e.length) {
    const r = e[t];
    if (n >= 0 && n < e.length) {
      const o = nr(zt, x, t, e[n], e);
      if (o.tag === "Just")
        return nr(zt, x, n, r, o._1);
      if (o.tag === "Nothing")
        return x;
      f();
    }
  }
  return x;
}, A2 = (t) => (n) => (e) => (r) => (o) => dc(J((i) => (s) => {
  const u = Lt((c) => (a) => it.compare((() => {
    const g = Po(c.id)(o);
    if (g.tag === "Nothing")
      return 1e6;
    if (g.tag === "Just")
      return g._1;
    f();
  })())((() => {
    const g = Po(a.id)(o);
    if (g.tag === "Nothing")
      return 1e6;
    if (g.tag === "Just")
      return g._1;
    f();
  })()))(ft((c) => Ii(c.to.node)(e), ft((c) => c.from.node === s, r)));
  return {
    ranks: [...i.ranks, ...Ft((c) => (a) => b(a.id, ot((i.rankSum + c | 0) + 1 | 0)))(u)],
    rankSum: i.rankSum + u.length | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), I2 = (t) => (n) => (e) => (r) => (o) => dc(J((i) => (s) => {
  const u = Lt((a) => (g) => {
    const _ = it.compare((() => {
      const d = Gr(g.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      f();
    })())((() => {
      const d = Gr(a.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      f();
    })());
    return _ === "EQ" ? it.compare((() => {
      const d = Po(a.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      f();
    })())((() => {
      const d = Po(g.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      f();
    })()) : _;
  })(ft((a) => Ii(a.from.node)(e), ft((a) => a.to.node === s, r))), c = u.length;
  return {
    ranks: [...i.ranks, ...Ft((a) => (g) => b(g.id, ot((i.rankSum + c | 0) - a | 0)))(u)],
    rankSum: i.rankSum + c | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), pu = (t) => (n) => (e) => {
  const r = Fi(Ft((u) => (c) => b(c, u))(t)), o = Fi(Ft((u) => (c) => b(c, u))(n)), i = yt((u) => {
    const c = Gr(u.from.node)(r), a = Gr(u.to.node)(o);
    if (c.tag === "Just" && a.tag === "Just")
      return v("Just", b(c._1, a._1));
    const g = Gr(u.from.node)(o), _ = Gr(u.to.node)(r);
    return g.tag === "Just" && _.tag === "Just" ? v("Just", b(_._1, g._1)) : x;
  })(e), s = i.length;
  return J((u) => (c) => J((a) => (g) => c >= 0 && c < i.length && g >= 0 && g < i.length && ((i[c]._1 - i[g]._1 | 0) * (i[c]._2 - i[g]._2 | 0) | 0) < 0 ? a + 1 | 0 : a)(u)(It(c + 1 | 0, s - 1 | 0)))(0)(It(0, s - 2 | 0));
}, F2 = (t) => (n) => (e) => (r) => {
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
          const m = nr(zt, x, l, $, d), y = (() => {
            if (m.tag === "Just")
              return nr(zt, x, l + 1 | 0, p, m._1);
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
          if (pu(n)(N)(e) < pu(n)(d)(e)) {
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
      if (S2(_)(g)) {
        c = !1, a = g;
        continue;
      }
      u = _;
    }
    return a;
  })(t);
}, fi = (t) => (n) => J((e) => (r) => {
  if (r >= 0 && r < t.length) {
    const o = t[r], i = r + 1 | 0;
    if (i >= 0 && i < t.length)
      return e + pu(o)(t[i])(n) | 0;
  }
  return e;
})(0)(It(0, t.length - 2 | 0)), R2 = /* @__PURE__ */ (() => {
  const t = (n) => {
    if (n.length < 7) {
      const s = (u) => (c) => {
        let a = u, g = c, _ = !0, d;
        for (; _; ) {
          const l = a, h = g, p = h - 1 | 0;
          if (p >= 0 && p < l.length) {
            if (h >= 0 && h < l.length && h > 0 && l[p].key > l[h].key) {
              const $ = G2(h - 1 | 0)(h)(l);
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
      return J((u) => (c) => s(u)(c))(n)(It(1, n.length - 1 | 0));
    }
    const e = Ae(n.length, 2), r = t(bt(0, e, n)), o = t(bt(e, n.length, n));
    return ((s) => (u) => (c) => {
      let a = s, g = u, _ = c, d = !0, l;
      for (; d; ) {
        const h = a, p = g, $ = _;
        if (p >= 0 && p < r.length) {
          if ($ >= 0 && $ < o.length) {
            if (r[p].key > o[$].key) {
              a = Bt(h)(o[$]), g = p, _ = $ + 1 | 0;
              continue;
            }
            a = Bt(h)(r[p]), g = p + 1 | 0, _ = $;
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
})(), B2 = (t) => (n) => (e) => {
  const r = yt((a) => a.tag === "OrderConstraint" ? v("Just", { before: a._1.before, after: a._1.after }) : x)(t.constraints), o = (a) => J((g) => (_) => {
    const d = _.after, l = _.before, h = pr(zt, x, ($) => $ === l, g), p = pr(zt, x, ($) => $ === d, g);
    if (h.tag === "Just" && p.tag === "Just" && h._1 > p._1) {
      const $ = Pf(zt, x, h._1, g), m = (() => {
        if ($.tag === "Nothing")
          return g;
        if ($.tag === "Just")
          return $._1;
        f();
      })(), y = Cf(zt, x, p._1, l, m);
      if (y.tag === "Nothing")
        return m;
      if (y.tag === "Just")
        return y._1;
      f();
    }
    return g;
  })(a)(r), i = dc(Ft((a) => (g) => b(g.id, a))(e)), s = (a, g, _) => {
    const d = a.length;
    return J((l) => (h) => {
      const p = g ? h - 1 | 0 : h + 1 | 0, $ = p >= 0 && p < l._1.length ? v("Just", l._1[p]) : x;
      if ($.tag === "Just") {
        const m = h >= 0 && h < l._1.length ? v("Just", l._1[h]) : x;
        if (m.tag === "Just") {
          const y = Fi(Ft((L) => (P) => b(P, L))($._1)), N = Fi(Ft((L) => (P) => b(P, L))(m._1)), T = g ? A2($._1)(y)(N)(e)(i) : I2($._1)(y)(N)(e)(i), w = J((L) => (P) => {
            const O = yt((V) => Po(V.id)(T))(ft(g ? (V) => V.to.node === P._2 && Ii(V.from.node)(y) : (V) => V.from.node === P._2 && Ii(V.to.node)(y), e));
            if (O.length === 0)
              return { ...L, items: [...L.items, { n: P._2, key: x, origIdx: P._1 }] };
            const X = Ai(24)(L.r);
            return {
              items: [
                ...L.items,
                {
                  n: P._2,
                  key: v("Just", (C2(O) + (ot(X._1) * 4172325152040912e-24 - 0.03500000014901161)) / ot(O.length)),
                  origIdx: P._1
                }
              ],
              r: X._2
            };
          })({ items: [], r: l._2 })(Ft(Oe)(m._1)), k = nr(
            zt,
            x,
            h,
            F2(o(z((L) => L.n)(R2((() => {
              const L = w.items, P = (X) => (V) => {
                let A = X, B = V, et = !0, st;
                for (; et; ) {
                  const Y = A, R = B;
                  if (Y >= 0 && Y < L.length) {
                    if (L[Y].key.tag === "Just") {
                      et = !1, st = L[Y].key._1;
                      continue;
                    }
                    if (L[Y].key.tag === "Nothing") {
                      A = Y + 1 | 0, B = R;
                      continue;
                    }
                    f();
                  }
                  et = !1, st = R;
                }
                return st;
              };
              return ((X) => (V) => (A) => {
                let B = X, et = V, st = A, Y = !0, R;
                for (; Y; ) {
                  const E = B, S = et, H = st;
                  if (E >= 0 && E < L.length) {
                    if (L[E].key.tag === "Just") {
                      B = E + 1 | 0, et = L[E].key._1, st = [...H, { n: L[E].n, key: L[E].key._1, origIdx: L[E].origIdx }];
                      continue;
                    }
                    if (L[E].key.tag === "Nothing") {
                      const G = (S + P(E + 1 | 0)(S + 1)) / 2;
                      B = E + 1 | 0, et = G, st = [...H, { n: L[E].n, key: G, origIdx: L[E].origIdx }];
                      continue;
                    }
                    f();
                  }
                  Y = !1, R = H;
                }
                return R;
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
    })(b(a, _))(g ? It(1, d - 1 | 0) : wn(It(0, d - 2 | 0)));
  }, u = J((a) => (g) => U(C)(g.from.node)()(U(C)(g.to.node)()(a)))(I)(e), c = J((a) => (g) => {
    if (a.result.crossings === 0)
      return a;
    const _ = (y) => (N) => (T) => (w) => {
      let k = y, L = N, P = T, O = w, X = !0, V;
      for (; X; ) {
        const A = k, B = L, et = P, st = O;
        if (et === 0) {
          X = !1, V = { layout: A, crossings: 0, random: st };
          continue;
        }
        const Y = s(A, B, st), R = fi(Y._1)(e);
        if (R < et) {
          k = Y._1, L = !B, P = R, O = Y._2;
          continue;
        }
        X = !1, V = { layout: A, crossings: et, random: Y._2 };
      }
      return V;
    }, d = Ai(1)(a.result.random), l = d._1 !== 0, h = t.modelOrder.tag === "Leaf", p = (a.firstTry || a.secondTry) && !h ? a.firstTry : l, $ = (() => {
      if (!h) {
        const w = s(n, p, d._2);
        return _(w._1)(!p)(fi(w._1)(e))(w._2);
      }
      const y = p ? 0 : P2(0)(n.length - 1 | 0), N = y >= 0 && y < n.length ? v("Just", n[y]) : x;
      if (N.tag === "Just" && N._1.length > 1) {
        const w = ft((k) => Ea(k)(u), N._1);
        if (w.length > 1) {
          const k = L2(d._2)(w), L = k._1, P = nr(
            zt,
            x,
            y,
            o(J((O) => (X) => Ea(X)(u) ? O.idx >= 0 && O.idx < L.length ? { idx: O.idx + 1 | 0, result: [...O.result, L[O.idx]] } : { idx: O.idx, result: [...O.result, X] } : { idx: O.idx, result: [...O.result, X] })({ idx: 0, result: [] })(N._1).result),
            n
          );
          if (P.tag === "Just") {
            const O = s(P._1, p, k._2);
            return _(O._1)(!p)(fi(O._1)(e))(O._2);
          }
        }
      }
      const T = s(n, p, d._2);
      return _(T._1)(!p)(fi(T._1)(e))(T._2);
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
      random: xo(Xf(E2(k2(1))._1)(So))(Co)
    },
    firstTry: t.modelOrder.tag !== "Leaf",
    secondTry: !1
  })(It(1, t.iterations)).result;
  return n.length <= 0 || t.iterations <= 0 ? n : c.layout;
}, Q2 = (t) => t, Sa = (t) => (e) => {
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
}, Qn = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, Vr = (t) => (e) => {
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
}, Go = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = C.compare(n._1)(e._1);
      return r === "LT" ? Jn : r === "GT" ? Tn : C.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), W2 = /* @__PURE__ */ nn(C)(Dt), H2 = (t) => (e) => {
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
}, D2 = /* @__PURE__ */ Q2("Greedy"), Qs = (t) => (n) => (e) => J((r) => (o) => {
  if (o.from.node === o.to.node)
    return r;
  if (o.from.node === n && !Sa(o.to.node)(r.marks)) {
    const i = Qn(o.to.node)(r.inDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = U(C)(o.to.node)(s)(r.inDeg);
    return (() => {
      const c = Qn(o.to.node)(r.outDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        f();
      })() && !Dn(le)(o.to.node)(r.sources);
    })() ? { ...r, inDeg: u, sources: [...r.sources, o.to.node] } : { ...r, inDeg: u };
  }
  if (o.to.node === n && !Sa(o.from.node)(r.marks)) {
    const i = Qn(o.from.node)(r.outDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = U(C)(o.from.node)(s)(r.outDeg);
    return (() => {
      const c = Qn(o.from.node)(r.inDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        f();
      })() && !Dn(le)(o.from.node)(r.sinks);
    })() ? { ...r, outDeg: u, sinks: [...r.sinks, o.from.node] } : { ...r, outDeg: u };
  }
  return r;
})({ ...e, remaining: ft((r) => r !== n, e.remaining) })(t), O2 = /* @__PURE__ */ J((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return U(C)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return U(C)(n._1.node)(0)(t);
    if (n._1.pin.tag === "LastLayer")
      return U(C)(n._1.node)(99999)(t);
  }
  return t;
})(I), sg = (t) => (n) => (e) => {
  const r = Qn(n)(t), o = Qn(e)(t);
  return r.tag === "Just" && o.tag === "Just" && r._1 > o._1;
}, ug = (t) => (n) => (e) => (r) => {
  if (Vr(e)(r.visited) || Vr(e)(r.visiting))
    return r;
  const o = J(z2(t)(n)(e))({ ...r, visiting: U(C)(e)()(r.visiting) })((() => {
    const i = Qn(e)(n);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just")
      return i._1;
    f();
  })());
  return {
    ...o,
    visiting: yo(C)(e)(o.visiting),
    visited: U(C)(e)()(o.visited)
  };
}, z2 = (t) => (n) => (e) => (r) => (o) => sg(t)(e)(o) ? { ...r, backEdges: U(Go)(b(e, o))()(r.backEdges) } : Vr(o)(r.visiting) ? { ...r, backEdges: U(Go)(b(e, o))()(r.backEdges) } : Vr(o)(r.visited) ? r : ug(t)(n)(o)(r), q2 = (t) => (n) => (e) => {
  const r = (d) => {
    let l = d, h = !0, p;
    for (; h; ) {
      const $ = l, m = Qt((y) => x, (y) => (N) => v("Just", { head: y, tail: N }), $.sinks);
      if (m.tag === "Just") {
        l = Qs(e)(m._1.head)({
          ...$,
          sinks: m._1.tail,
          marks: U(C)(m._1.head)($.nextRight)($.marks),
          nextRight: $.nextRight - 1 | 0
        });
        continue;
      }
      if (m.tag === "Nothing") {
        const y = Qt((N) => x, (N) => (T) => v("Just", { head: N, tail: T }), $.sources);
        if (y.tag === "Just") {
          l = Qs(e)(y._1.head)({
            ...$,
            sources: y._1.tail,
            marks: U(C)(y._1.head)($.nextLeft)($.marks),
            nextLeft: $.nextLeft + 1 | 0
          });
          continue;
        }
        if (y.tag === "Nothing") {
          const N = (w) => {
            const k = Qn(w)($.outDeg), L = Qn(w)($.inDeg);
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
              const P = Qn(w)(n);
              if (P.tag === "Nothing")
                return 1e6;
              if (P.tag === "Just")
                return P._1;
              f();
            })())((() => {
              const P = Qn(k)(n);
              if (P.tag === "Nothing")
                return 1e6;
              if (P.tag === "Just")
                return P._1;
              f();
            })()) : L;
          })($.remaining);
          if (0 < T.length) {
            const w = T[0];
            l = Qs(e)(w)({
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
  }, o = Wr(C.compare)([...z((d) => d.from.node)(e), ...z((d) => d.to.node)(e)]), i = ft((d) => d.from.node !== d.to.node, e), s = J((d) => (l) => wt(C)(sn)(l.to.node)(1)(d))(I)(i), u = J((d) => (l) => wt(C)(sn)(l.from.node)(1)(d))(I)(i), c = ft(
    (d) => {
      const l = Qn(d)(s);
      if (l.tag === "Nothing")
        return !0;
      if (l.tag === "Just")
        return l._1 === 0;
      f();
    },
    o
  ), a = ft(
    (d) => {
      const l = Qn(d)(u);
      if (l.tag === "Nothing")
        return !0;
      if (l.tag === "Just")
        return l._1 === 0;
      f();
    },
    o
  ), g = o.length + 1 | 0, _ = J((d) => (l) => {
    const h = Qn(l)(d);
    return h.tag === "Just" && h._1 < 0 ? U(C)(l)(h._1 + g | 0)(d) : d;
  })(r({
    remaining: ft((d) => !Dn(le)(d)(c) && !Dn(le)(d)(a), o),
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
    if (sg(t)(l.from.node)(l.to.node))
      return U(Go)(b(l.from.node, l.to.node))()(d);
    const h = Qn(l.from.node)(_), p = Qn(l.to.node)(_);
    return h.tag === "Just" && p.tag === "Just" && h._1 > p._1 ? U(Go)(b(l.from.node, l.to.node))()(d) : d;
  })(I)(e);
}, Y2 = /* @__PURE__ */ J((t) => (n) => wt(C)(on)(n.from.node)([n.to.node])(t))(I), X2 = (t) => (n) => {
  const e = Y2(n), r = Wr(C.compare)([...z((i) => i.from.node)(n), ...z((i) => i.to.node)(n)]), o = J((i) => (s) => U(C)(s.to.node)()(i))(I)(n);
  return J((i) => (s) => ug(t)(e)(s)(i))({
    visiting: I,
    visited: I,
    backEdges: I
  })([...ft((i) => !Vr(i)(o), r), ...ft((i) => Vr(i)(o), r)]).backEdges;
}, V2 = (t) => (n) => (e) => (r) => {
  const o = W2(Ft((u) => (c) => b(c, u))(n)), i = O2(e), s = (() => {
    if (t === "DepthFirst")
      return X2(i)(r);
    if (t === "Greedy")
      return q2(i)(o)(r);
    f();
  })();
  return {
    edges: z((u) => H2(b(u.from.node, u.to.node))(s) ? { ...u, from: u.to, to: u.from } : u)(r),
    reversedEdges: s
  };
}, cg = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, U2 = /* @__PURE__ */ J((t) => (n) => U(C)(n)()(t))(I), Ri = (t) => (e) => {
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
}, K2 = /* @__PURE__ */ H0(C), he = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, Ca = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ws = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, M2 = /* @__PURE__ */ nn(it)(Dt), j2 = (t) => (n) => Pn(C.compare, Cn, t, n), ag = /* @__PURE__ */ Ft((t) => (n) => ({ src: n.src, tgt: n.tgt, delta: 1, weight: 1, eid: t })), Z2 = (t) => J((n) => (e) => ({
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
          s = cg(g)(_._1), u = _._2;
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
          return o(i._5, qt("Cons", i._4, o(i._6, s)));
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
          return I;
        if (o.tag === "Node")
          return Ot("Node", o._1, o._2, o._3, o._4 + n.base | 0, r(o._5), r(o._6));
        f();
      };
      return r(e);
    })()
  ]
}))({ base: 0, result: [] })(t).result, ty = (t) => (n) => {
  const e = U2(t);
  return K2(t)(ag(ft((r) => Ri(r.src)(e) && Ri(r.tgt)(e), n)));
}, ny = (t) => (n) => {
  const e = J((o) => (i) => wt(C)(on)(i.tgt)([i.src])(wt(C)(on)(i.src)([
    i.tgt
  ])(o)))(I)(n), r = (o) => (i) => (s) => {
    let u = o, c = i, a = s, g = !0, _;
    for (; g; ) {
      const d = u, l = c, h = a, p = Qt(($) => x, ($) => (m) => v("Just", { head: $, tail: m }), d);
      if (p.tag === "Nothing") {
        g = !1, _ = { nodes: h };
        continue;
      }
      if (p.tag === "Just") {
        if (Ri(p._1.head)(l)) {
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
  return J((o) => (i) => {
    if (Ri(i)(o.visited))
      return o;
    const s = r([i])(o.visited)([]);
    return {
      ...o,
      visited: J((u) => (c) => U(C)(c)()(u))(o.visited)(s.nodes),
      components: [...o.components, s.nodes]
    };
  })({ visited: I, components: [] })(t).components;
}, ey = (t) => (n) => (e) => {
  const r = J((i) => (s) => wt(C)(sn)(s.tgt)(1)(i))(I)(n), o = J((i) => (s) => wt(C)(sn)(s.src)(1)(i))(I)(n);
  return J((i) => (s) => {
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
    })(), _ = i.layers, d = J((y) => (N) => N.tgt === s ? {
      ...y,
      mIn: Ca(y.mIn)((() => {
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
      mOut: Ca(y.mOut)((() => {
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
    const m = J((y) => (N) => {
      const T = Ws(N)(i.filling), w = (() => {
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
        const y = Ws(g)(i.filling);
        if (y.tag === "Nothing")
          return 0;
        if (y.tag === "Just")
          return y._1;
        f();
      })()
    })(It(p, $));
    return m.best === g ? i : {
      layers: U(C)(s)(m.best)(i.layers),
      filling: U(it)(g)((() => {
        const y = Ws(g)(i.filling);
        if (y.tag === "Nothing")
          return -1;
        if (y.tag === "Just")
          return y._1 - 1 | 0;
        f();
      })())(U(it)(m.best)(m.bestFill + 1 | 0)(i.filling))
    };
  })({
    layers: e,
    filling: M2(z((i) => b(
      i,
      J((s) => (u) => (() => {
        const c = he(u)(e);
        return c.tag === "Nothing" ? !1 : c.tag === "Just" && c._1 === i;
      })() ? s + 1 | 0 : s)(0)(t)
    ))(It(
      0,
      J((i) => (s) => cg(i)((() => {
        const u = he(s)(e);
        if (u.tag === "Nothing")
          return 0;
        if (u.tag === "Just")
          return u._1;
        f();
      })()))(0)(t)
    )))
  })(t).layers;
}, ry = (t) => (n) => ey(t)(ag(n))(J(j2)(I)(Z2(z((e) => ty(e)(n))(ny(t)(n))))), oy = (t) => t, _r = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, Bi = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, fg = /* @__PURE__ */ (() => {
  const t = ee.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), iy = /* @__PURE__ */ oy("NetworkSimplex"), sy = (t) => (n) => J((e) => (r) => {
  const o = J(Bi)(0)(yt((i) => _r(i)(e))(r));
  return J((i) => (s) => U(C)(s)(o)(i))(e)(r);
})(n)(t), uy = (t) => (n) => ({
  layers: z((e) => ft(
    (r) => {
      const o = _r(r)(n);
      return o.tag === "Nothing" ? !1 : o.tag === "Just" && o._1 === e;
    },
    t
  ))(It(
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
          i = Bi(a)(g._1), s = g._2;
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
          return r(o._5, qt("Cons", o._4, r(o._6, i)));
        f();
      };
      return r(n, Yt);
    })())
  )),
  nodeLayer: n
}), cy = (t) => (n) => (e) => {
  const r = J((o) => (i) => U(C)(i)(!0)(o))(I)(n);
  return J((o) => (i) => U(C)(i._1)(i._2)(o))(ry(n)(yt((o) => o.from.node === o.to.node || (() => {
    const i = _r(o.from.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() || (() => {
    const i = _r(o.to.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() ? x : v("Just", { src: o.from.node, tgt: o.to.node }))(t)))(fg(e));
}, ay = (t) => (n) => (e) => (r) => {
  const o = (c) => (a) => {
    const g = _r(a)(c);
    if (g.tag === "Just")
      return c;
    if (g.tag === "Nothing") {
      const _ = ft(
        (l) => l !== a,
        (() => {
          const l = _r(a)(t);
          if (l.tag === "Nothing")
            return [];
          if (l.tag === "Just")
            return l._1;
          f();
        })()
      ), d = J(o)(c)(_);
      return U(C)(a)(1 + J(Bi)(0)(yt((l) => _r(l)(d))(_)) | 0)(d);
    }
    f();
  }, i = J(o)(I)(e), u = ((c) => (a) => {
    let g = c, _ = a, d = !0, l;
    for (; d; ) {
      const h = g, p = _;
      if (p.tag === "Nil") {
        d = !1, l = h;
        continue;
      }
      if (p.tag === "Cons") {
        g = Bi(h)(p._1), _ = p._2;
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
        return c(a._5, qt("Cons", a._4, c(a._6, g)));
      f();
    };
    return c(i, Yt);
  })());
  return J((c) => (a) => U(C)(a._1)(a._2)(c))((() => {
    const c = (a) => {
      if (a.tag === "Leaf")
        return I;
      if (a.tag === "Node")
        return Ot("Node", a._1, a._2, a._3, u - a._4 | 0, c(a._5), c(a._6));
      f();
    };
    return c(i);
  })())(fg(r));
}, fy = /* @__PURE__ */ J((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return U(C)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return U(C)(n._1.node)(0)(t);
  }
  return t;
})(I), gy = /* @__PURE__ */ J((t) => (n) => wt(C)(on)(n.to.node)([n.from.node])(t))(I), ly = /* @__PURE__ */ J((t) => (n) => wt(C)(on)(n.from.node)([n.to.node])(t))(I), _y = (t) => (n) => (e) => (r) => {
  const o = ly(e), i = gy(e), s = fy(n);
  return uy(r)(sy(yt((u) => u.tag === "SameLayer" ? v("Just", u._1.nodes) : x)(n))((() => {
    if (t === "LongestPath")
      return ay(o)(i)(r)(s);
    if (t === "NetworkSimplex")
      return cy(e)(r)(s);
    f();
  })()));
}, dy = /* @__PURE__ */ nn(C)(Dt), hy = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, Pa = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, Ga = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ao = /* @__PURE__ */ nn(C)(Dt), py = /* @__PURE__ */ nn(C)(Dt), Aa = /* @__PURE__ */ (() => {
  const t = z((n) => ({ start: n.end, end: n.start, direction: n.direction }));
  return (n) => wn(t(n));
})(), $y = (t) => (n) => (e) => (r) => {
  const o = dy(z((s) => b(s.edge, s))(r)), i = (s) => 0 < s.nodes.length && (() => {
    const u = hy(s.edgeId)(e);
    return u.tag === "Just" && s.nodes[0] !== u._1._1;
  })();
  return z((s) => {
    if (s.nodes.length <= 2) {
      const g = Pa(s.edgeId)(o);
      if (g.tag === "Just") {
        const _ = i(s), d = Eo(Lo(_ ? Aa(g._1.segments) : g._1.segments));
        return { ...g._1, edge: s.edgeId, segments: d, bends: kn((l) => (h) => l.end, d, bt(1, d.length, d)), reversed: _ };
      }
      if (g.tag === "Nothing")
        return { edge: s.edgeId, segments: [], bends: [], bendType: [], jumps: [], reversed: !1 };
      f();
    }
    const u = Tt(yt((g) => Pa(g)(o))(kn(
      (g) => (_) => s.edgeId + ":" + g + "->" + _,
      s.nodes,
      bt(1, s.nodes.length, s.nodes)
    )))((g) => g.segments), c = i(s), a = Eo(Lo(c ? Aa(u) : u));
    return {
      edge: s.edgeId,
      segments: a,
      bends: kn((g) => (_) => g.end, a, bt(1, a.length, a)),
      bendType: [],
      jumps: [],
      reversed: c
    };
  })(t);
}, my = { layers: [], edges: [], chains: [] }, yy = {
  nodeGap: 3,
  layerGap: 2,
  iterations: 8,
  layerer: iy,
  cycleBreaker: D2,
  compactPostRouting: !0,
  compactionSpacings: gm
}, Ny = (t) => ({
  pos: b(0, 0),
  size: b(
    J((n) => (e) => Ga(n)(e.position._1 + e.size._1))(0)(t),
    J((n) => (e) => Ga(n)(e.position._2 + e.size._2))(0)(t)
  )
}), xy = (t) => (n) => (e) => {
  const r = Ao(z((a) => b(a.id, a.ports))(n.nodes)), o = ft((a) => Nn(3)(a.node) !== "$d:", e.placements), i = $y(e.withDummies.chains)(e.acyclic.reversedEdges)(py(z((a) => b(
    a.id,
    b(a.from.node, a.to.node)
  ))(n.edges)))(Ym(e.withDummies.edges)(e.placements)(r)(e.withDummies.chains)(tg(e.ordered)(ft(
    (a) => a.from.node !== a.to.node,
    e.withDummies.edges
  ))((() => {
    const a = (g) => {
      if (g.tag === "Leaf")
        return I;
      if (g.tag === "Node")
        return Ot("Node", g._1, g._2, g._3, b(g._4._1 * 4, g._4._2), a(g._5), a(g._6));
      f();
    };
    return a(Ao(z((g) => b(g.id, g.size))(n.nodes)));
  })()))), s = t.compactPostRouting ? dm()(t.compactionSpacings)({
    nodes: o,
    edges: n.edges,
    paths: i,
    ports: r
  }) : { nodes: o, edges: i }, u = z((a) => {
    const g = Eo(Lo(a.segments));
    return { ...a, segments: g, bends: kn((_) => (d) => _.end, g, bt(1, g.length, g)) };
  })(s.edges), c = Ft((a) => (g) => ({ ...g, jumps: Zm(a)(g)(u) }))(u);
  return { nodes: s.nodes, edges: c, boundingBox: Ny(s.nodes), metrics: Wp(s.nodes)(c)(0) };
}, Jy = (t) => (n) => (e) => {
  const r = Ao(z((i) => b(i.id, i.size))(n.nodes)), o = {
    ...e,
    placements: w2({ nodeGap: t.nodeGap, layerGap: t.layerGap })(n.constraints)(e.ordered)(r)(Ao(z((i) => b(
      i.id,
      i.ports
    ))(n.nodes)))(e.withDummies.edges)(e.withDummies.chains)(tg(e.ordered)(e.withDummies.edges)((() => {
      const i = (s) => {
        if (s.tag === "Leaf")
          return I;
        if (s.tag === "Node")
          return Ot("Node", s._1, s._2, s._3, b(s._4._1 * 4, s._4._2), i(s._5), i(s._6));
        f();
      };
      return i(r);
    })()))
  };
  return { pipeline: o, result: xy(t)(n)(o) };
}, Ty = (t) => (n) => (e) => Jy(t)(n)({
  ...e,
  ordered: B2({
    iterations: t.iterations,
    constraints: n.constraints,
    modelOrder: Ao(Ft((r) => (o) => b(o.id, r))(n.nodes))
  })(e.withDummies.layers)(e.withDummies.edges)
}), vy = (t) => (n) => (e) => Ty(t)(n)({
  ...e,
  withDummies: t2(e.layered.nodeLayer)(e.acyclic.edges)(e.layered.layers)
}), wy = (t) => (n) => {
  const e = z((o) => o.id)(n.nodes), r = V2(t.cycleBreaker)(e)(n.constraints)(n.edges);
  return vy(t)(n)({
    acyclic: r,
    layered: _y(t.layerer)(n.constraints)(r.edges)(e),
    withDummies: my,
    ordered: [],
    placements: []
  });
}, _s = (t) => t, ky = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, $u = /* @__PURE__ */ _s("TopSide"), mu = /* @__PURE__ */ _s("BottomSide"), yu = /* @__PURE__ */ _s("LeftSide"), Nu = /* @__PURE__ */ _s("RightSide"), by = (t) => {
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
}, Ia = (t) => (n) => (e) => {
  const r = ky(t.h * 0.12)(t.w * 0.2), o = t.w / 2;
  return (n < 0 ? t.y + r : t.y + t.h - r) + n * r * Sn(by((() => {
    const i = (e - (t.x + o)) / o;
    return 1 - i * i;
  })()));
}, Xe = (t) => (n) => (e) => (r) => {
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
      o = Fe, i = _, s = d, u = l;
      continue;
    }
    if (g === "Cylinder") {
      if (d === "TopSide") {
        c = !1, a = Ia(_)(-1)(l);
        continue;
      }
      if (d === "BottomSide") {
        c = !1, a = Ia(_)(1)(l);
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
    o = Fe, i = _, s = d, u = l;
  }
  return a;
}, Fa = (t) => (n) => {
  const e = n.y - t.y, r = e < 0 ? -e : e, o = n.x - (t.x + t.w), i = o < 0 ? -o : o, s = n.x - t.x, u = s < 0 ? -s : s, c = n.y - (t.y + t.h), a = c < 0 ? -c : c;
  return r <= a && r <= u && r <= i ? $u : a <= u && a <= i ? mu : u <= i ? yu : Nu;
}, hc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
      o = !1, i = x;
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
}, Ly = /* @__PURE__ */ (() => {
  const t = ee.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), Fo = /* @__PURE__ */ nn(C)(Dt), Ey = (t) => (e) => {
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
}, Sy = (t) => (e) => {
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
}, Cy = /* @__PURE__ */ J((t) => (n) => U(C)(n)()(t))(I), Py = /* @__PURE__ */ J((t) => (n) => U(C)(n)()(t))(I), ds = xr.traverse(Mi), Qi = /* @__PURE__ */ nn(C)(Dt), Gy = (t) => (n) => Pn(C.compare, Cn, t, n), Ay = /* @__PURE__ */ J((t) => (n) => U(C)(n)()(t))(I), Iy = /* @__PURE__ */ nn(C)(Dt), Fy = (t) => (n) => Pn(C.compare, Cn, t, n), Ry = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, Ra = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, By = (t) => (n) => ({
  ...n,
  edges: Fo(z((e) => b(
    e._1,
    (() => {
      const r = hc(e._1)(t);
      if (r.tag === "Nothing")
        return e._2;
      if (r.tag === "Just") {
        const o = Io(r._1._2)(n.nodes), i = Io(r._1._1)(n.nodes), s = (() => {
          if (i.tag === "Nothing")
            return e._2;
          if (i.tag === "Just") {
            const u = Qt((c) => x, (c) => (a) => v("Just", { head: c, tail: a }), e._2);
            if (u.tag === "Nothing")
              return e._2;
            if (u.tag === "Just") {
              const c = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, a = Fa(c)(u._1.head);
              return [
                (() => {
                  if (a === "TopSide")
                    return { ...u._1.head, y: Xe(i._1.shape)(c)($u)(u._1.head.x) };
                  if (a === "BottomSide")
                    return { ...u._1.head, y: Xe(i._1.shape)(c)(mu)(u._1.head.x) };
                  if (a === "LeftSide")
                    return { ...u._1.head, x: Xe(i._1.shape)(c)(yu)(u._1.head.y) };
                  if (a === "RightSide")
                    return { ...u._1.head, x: Xe(i._1.shape)(c)(Nu)(u._1.head.y) };
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
          const u = Do(s);
          if (u.tag === "Nothing")
            return s;
          if (u.tag === "Just")
            return Bt(u._1.init)((() => {
              const c = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, a = Fa(c)(u._1.last);
              if (a === "TopSide")
                return { ...u._1.last, y: Xe(o._1.shape)(c)($u)(u._1.last.x) };
              if (a === "BottomSide")
                return { ...u._1.last, y: Xe(o._1.shape)(c)(mu)(u._1.last.x) };
              if (a === "LeftSide")
                return { ...u._1.last, x: Xe(o._1.shape)(c)(yu)(u._1.last.y) };
              if (a === "RightSide")
                return { ...u._1.last, x: Xe(o._1.shape)(c)(Nu)(u._1.last.y) };
              f();
            })());
        }
      }
      f();
    })()
  ))(Ly(n.edges)))
}), Qy = (t) => (n) => (e) => {
  const r = Ut((o) => o.id === e)(t.graph.edges);
  if (r.tag === "Just")
    return v("Just", r._1);
  if (r.tag === "Nothing")
    return hc(e)(n);
  f();
}, Wy = (t) => (n) => (e) => (r) => ({
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
      return Fe;
    if (o.tag === "Just")
      return o._1;
    f();
  })()
}), Hy = (t) => ({ id: t, size: b(1, 1), ports: [], label: v("Just", t), shape: Fe }), Dy = (t) => (n) => (e) => (r) => b(r.node, Wy(t)(n)(e)(r)), gg = (t) => {
  const n = ss(`
`)(t);
  return n.length === 0 ? [""] : n;
}, lg = (t) => {
  const n = (e, r) => {
    if (e.tag === "Leaf")
      return r;
    if (e.tag === "Node")
      return n(e._5, qt("Cons", e._4, n(e._6, r)));
    f();
  };
  return Et(Xt.foldr, n(t.interiors, Yt));
}, Oy = (t) => Fo(yt((n) => v(
  "Just",
  b(n.edge, { id: n.edge, from: { node: n.from, port: x }, to: { node: n.to, port: x }, label: x })
))(Tt(t.scenes)((n) => n.tag === "DataFlow" ? yt((e) => e.kind.tag === "SendToken" ? v("Just", e.kind._1) : x)(n._1.events) : []))), _g = (t) => {
  const n = Z1(t), e = ft((o) => Ey(o.id)(n.nodes), t.graph.nodes), r = ft((o) => Sy(o.id)(n.edges), t.graph.edges);
  return {
    nodes: [
      ...e,
      ...z(Hy)(Et(
        On.foldr,
        Ie(C.compare, n.nodes, Cy(z((o) => o.id)(e)))
      ))
    ],
    edges: [
      ...r,
      ...yt(Qy(t)(Oy(t)))(Et(
        On.foldr,
        Ie(C.compare, n.edges, Py(z((o) => o.id)(r)))
      ))
    ],
    constraints: t.graph.constraints
  };
}, zy = (t) => {
  const n = ds((e) => {
    const r = k0(b0)((() => {
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
  })(_g(t).nodes);
  return () => {
    const e = n();
    return Qi(e);
  };
}, dg = (t) => {
  const n = zy(t);
  return () => {
    const e = n(), r = ds(dg)(lg(t))();
    return J(Gy)(e)(r);
  };
}, qy = (t) => (n) => {
  const e = Qt((r) => x, (r) => (o) => v("Just", { head: r, tail: o }), n.segments);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ x: e._1.head.start._1 * t, y: e._1.head.start._2 * t }, ...z((r) => ({ x: r.end._1 * t, y: r.end._2 * t }))([e._1.head, ...e._1.tail])];
  f();
}, Yy = (t) => (n) => b(n.edge, qy(t)(n)), Xy = (t) => (n) => (e) => (r) => ({
  nodes: Qi(z(Dy(ot(4) * t)(n)(e))(r.nodes)),
  edges: Fo(z(Yy(t))(r.edges)),
  chipExtras: I,
  edgeLabels: I
}), Vy = (t) => J((n) => (e) => {
  if (e.tag === "Structural")
    return n;
  if (e.tag === "DataFlow")
    return J((r) => (o) => {
      if (o.kind.tag === "SendToken")
        return J((i) => (s) => U(C)(s)()(i))(r)(o.kind._1.labels);
      if (o.kind.tag === "FillNodeWithoutTransition")
        return J((i) => (s) => U(C)(s)()(i))(r)(o.kind._1.labels);
      f();
    })(n)(e._1.events);
  if (e.tag === "Hold" || e.tag === "EnterNode" || e.tag === "ExitNode")
    return n;
  f();
})(I)(t.scenes), Uy = (t) => {
  const n = ds((e) => {
    const r = k0(b0)(e);
    return () => {
      const o = r();
      return b(e, { labelW: o, charCount: rr(Xr(e)), lineCount: 1 });
    };
  })(Et(
    On.foldr,
    Ay(Tt(Et(On.foldr, Vy(t)))(gg))
  ));
  return () => {
    const e = n();
    return Iy(e);
  };
}, hg = (t) => {
  const n = Uy(t);
  return () => {
    const e = n(), r = ds(hg)(lg(t))();
    return J(Fy)(e)(r);
  };
}, Ky = ot(4) * 8, My = (t) => (n) => {
  const e = Rp(Ky)(t)(Fp(Ip)(_g(n)));
  return {
    ...By(Fo(z((r) => b(r.id, b(r.from.node, r.to.node)))(e.edges)))(Xy(8)(Qi(z((r) => b(
      r.id,
      (() => {
        if (r.label.tag === "Just")
          return r.label._1;
        if (r.label.tag === "Nothing")
          return r.id;
        f();
      })()
    ))(e.nodes)))(Qi(z((r) => b(r.id, r.shape))(e.nodes)))(wy(yy)(e).result)),
    edgeLabels: Fo(yt((r) => r.label.tag === "Just" ? v("Just", b(r.id, r.label._1)) : x)(e.edges))
  };
}, jy = (t) => Tt(t.scenes)((n) => {
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
}), Zy = (t) => (n) => (e) => {
  const r = (o) => {
    const i = yt((s) => {
      const u = Ry(s)(t);
      return u.tag === "Just" ? v("Just", { w: u._1.labelW + 28, h: ot(Sp(1)(u._1.lineCount)) * 13.2 + 12 }) : x;
    })(Tt(o)(gg));
    return i.length === 0 ? x : v(
      "Just",
      { w: J(Ra)(0)(z((s) => s.w)(i)), h: J(Ra)(0)(z((s) => s.h)(i)) }
    );
  };
  return J((o) => (i) => {
    if (i.kind.tag === "SendToken") {
      const s = hc(i.kind._1.edge)(e.edges), u = r(i.kind._1.labels);
      if (u.tag === "Just" && s.tag === "Just") {
        const c = u._1;
        return wt(C)(on)(i.kind._1.edge)(z((a) => ({ x: a.x + 14 + c.w, y: a.y - 6 - 8 - c.h }))(s._1))(o);
      }
      return o;
    }
    if (i.kind.tag === "FillNodeWithoutTransition") {
      const s = Io(i.kind._1.node)(e.nodes), u = r(i.kind._1.labels);
      return u.tag === "Just" && s.tag === "Just" ? wt(C)(on)("__fill__:" + i.kind._1.node)((() => {
        const c = s._1.y - u._1.h - 14, a = s._1.x + s._1.w / 2, g = a - u._1.w / 2, _ = a + u._1.w / 2, d = s._1.y - 14;
        return [{ x: g, y: c }, { x: _, y: c }, { x: g, y: d }, { x: _, y: d }];
      })())(o) : o;
    }
    f();
  })(I)(jy(n));
}, pg = (t) => (n) => (e) => ({
  layout: (() => {
    const r = My(t)(e);
    return { ...r, chipExtras: Zy(n)(e)(r) };
  })(),
  interiors: (() => {
    const r = pg(t)(n), o = (i) => {
      if (i.tag === "Leaf")
        return I;
      if (i.tag === "Node")
        return Ot("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
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
}, xu = (t) => (n) => (e) => {
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
          return U(C)(u._3)({ x: a.x + g * r, y: a.y + _ * r, vx: g, vy: _ })(o(s, u._5));
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
                return U(C)(c._3)({ ...c._4, x: g._1.x, y: g._1.y })(a);
              if (g.tag === "Nothing")
                return U(C)(c._3)(c._4)(a);
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
  var t = {}, n = "Pure", e = "Throw", r = "Catch", o = "Sync", i = "Async", s = "Bind", u = "Bracket", c = "Fork", a = "Sequential", g = "Map", _ = "Apply", d = "Alt", l = "Cons", h = "Resume", p = "Release", $ = "Finalizer", m = "Finalized", y = "Forked";
  function N(G, W, Q, M) {
    this.tag = G, this._1 = W, this._2 = Q, this._3 = M;
  }
  function T(G) {
    var W = function(Q, M, q) {
      return new N(G, Q, M, q);
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
    } catch (M) {
      return G(M);
    }
  }
  function P(G, W, Q) {
    try {
      return W(Q)();
    } catch (M) {
      return Q(G(M))(), w;
    }
  }
  var O = (function() {
    var G = 1024, W = 0, Q = 0, M = new Array(G), q = !1;
    function D() {
      var rt;
      for (q = !0; W !== 0; )
        W--, rt = M[Q], M[Q] = void 0, Q = (Q + 1) % G, rt();
      q = !1;
    }
    return {
      isDraining: function() {
        return q;
      },
      enqueue: function(rt) {
        var Z;
        W === G && (Z = q, D(), q = Z), M[(Q + W) % G] = rt, W++, q || D();
      }
    };
  })();
  function X(G) {
    var W = {}, Q = 0, M = 0;
    return {
      register: function(q) {
        var D = Q++;
        q.onComplete({
          rethrow: !0,
          handler: function(rt) {
            return function() {
              M--, delete W[D];
            };
          }
        })(), W[D] = q, M++;
      },
      isEmpty: function() {
        return M === 0;
      },
      killAll: function(q, D) {
        return function() {
          if (M === 0)
            return D();
          var rt = 0, Z = {};
          function nt(ct) {
            Z[ct] = W[ct].kill(q, function(lt) {
              return function() {
                delete Z[ct], rt--, G.isLeft(lt) && G.fromLeft(lt) && setTimeout(function() {
                  throw G.fromLeft(lt);
                }, 0), rt === 0 && D();
              };
            })();
          }
          for (var tt in W)
            W.hasOwnProperty(tt) && (rt++, nt(tt));
          return W = {}, Q = 0, M = 0, function(ct) {
            return new N(o, function() {
              for (var lt in Z)
                Z.hasOwnProperty(lt) && Z[lt]();
            });
          };
        };
      }
    };
  }
  var V = 0, A = 1, B = 2, et = 3, st = 4, Y = 5, R = 6;
  function E(G, W, Q) {
    var M = 0, q = V, D = Q, rt = null, Z = null, nt = null, tt = null, ct = null, lt = 0, Wt = 0, vt = null, Ht = !0;
    function pt(K) {
      for (var j, gt, _t; ; )
        switch (j = null, gt = null, _t = null, q) {
          case B:
            q = A;
            try {
              D = nt(D), tt === null ? nt = null : (nt = tt._1, tt = tt._2);
            } catch (Nt) {
              q = Y, rt = G.left(Nt), D = null;
            }
            break;
          case et:
            G.isLeft(D) ? (q = Y, rt = D, D = null) : nt === null ? q = Y : (q = B, D = G.fromRight(D));
            break;
          case A:
            switch (D.tag) {
              case s:
                nt && (tt = new N(l, nt, tt)), nt = D._2, q = A, D = D._1;
                break;
              case n:
                nt === null ? (q = Y, D = G.right(D._1)) : (q = B, D = D._1);
                break;
              case o:
                q = et, D = L(G.left, G.right, D._1);
                break;
              case i:
                q = st, D = P(G.left, D._1, function(Nt) {
                  return function() {
                    M === K && (M++, O.enqueue(function() {
                      M === K + 1 && (q = et, D = Nt, pt(M));
                    }));
                  };
                });
                return;
              case e:
                q = Y, rt = G.left(D._1), D = null;
                break;
              // Enqueue the Catch so that we can call the error handler later on
              // in case of an exception.
              case r:
                nt === null ? ct = new N(l, D, ct, Z) : ct = new N(l, D, new N(l, new N(h, nt, tt), ct, Z), Z), nt = null, tt = null, q = A, D = D._1;
                break;
              // Enqueue the Bracket so that we can call the appropriate handlers
              // after resource acquisition.
              case u:
                lt++, nt === null ? ct = new N(l, D, ct, Z) : ct = new N(l, D, new N(l, new N(h, nt, tt), ct, Z), Z), nt = null, tt = null, q = A, D = D._1;
                break;
              case c:
                q = et, j = E(G, W, D._2), W && W.register(j), D._1 && j.run(), D = G.right(j);
                break;
              case a:
                q = A, D = H(G, W, D._1);
                break;
            }
            break;
          case Y:
            if (nt = null, tt = null, ct === null)
              q = R, D = Z || rt || D;
            else
              switch (j = ct._3, _t = ct._1, ct = ct._2, _t.tag) {
                // We cannot recover from an unmasked interrupt. Otherwise we should
                // continue stepping, or run the exception handler if an exception
                // was raised.
                case r:
                  Z && Z !== j && lt === 0 ? q = Y : rt && (q = A, D = _t._2(G.fromLeft(rt)), rt = null);
                  break;
                // We cannot resume from an unmasked interrupt or exception.
                case h:
                  Z && Z !== j && lt === 0 || rt ? q = Y : (nt = _t._1, tt = _t._2, q = B, D = G.fromRight(D));
                  break;
                // If we have a bracket, we should enqueue the handlers,
                // and continue with the success branch only if the fiber has
                // not been interrupted. If the bracket acquisition failed, we
                // should not run either.
                case u:
                  lt--, rt === null && (gt = G.fromRight(D), ct = new N(l, new N(p, _t._2, gt), ct, j), (Z === j || lt > 0) && (q = A, D = _t._3(gt)));
                  break;
                // Enqueue the appropriate handler. We increase the bracket count
                // because it should not be cancelled.
                case p:
                  ct = new N(l, new N(m, D, rt), ct, Z), q = A, Z && Z !== j && lt === 0 ? D = _t._1.killed(G.fromLeft(Z))(_t._2) : rt ? D = _t._1.failed(G.fromLeft(rt))(_t._2) : D = _t._1.completed(G.fromRight(D))(_t._2), rt = null, lt++;
                  break;
                case $:
                  lt++, ct = new N(l, new N(m, D, rt), ct, Z), q = A, D = _t._1;
                  break;
                case m:
                  lt--, q = Y, D = _t._1, rt = _t._2;
                  break;
              }
            break;
          case R:
            for (var xt in vt)
              vt.hasOwnProperty(xt) && (Ht = Ht && vt[xt].rethrow, k(vt[xt].handler(D)));
            vt = null, Z && rt ? setTimeout(function() {
              throw G.fromLeft(rt);
            }, 0) : G.isLeft(D) && Ht && setTimeout(function() {
              if (Ht)
                throw G.fromLeft(D);
            }, 0);
            return;
          case V:
            q = A;
            break;
          case st:
            return;
        }
    }
    function Jt(K) {
      return function() {
        if (q === R)
          return Ht = Ht && K.rethrow, K.handler(D)(), function() {
          };
        var j = Wt++;
        return vt = vt || {}, vt[j] = K, function() {
          vt !== null && delete vt[j];
        };
      };
    }
    function $t(K, j) {
      return function() {
        if (q === R)
          return j(G.right(void 0))(), function() {
          };
        var gt = Jt({
          rethrow: !1,
          handler: function() {
            return j(G.right(void 0));
          }
        })();
        switch (q) {
          case V:
            Z = G.left(K), q = R, D = Z, pt(M);
            break;
          case st:
            Z === null && (Z = G.left(K)), lt === 0 && (q === st && (ct = new N(l, new N($, D(K)), ct, Z)), q = Y, D = null, rt = null, pt(++M));
            break;
          default:
            Z === null && (Z = G.left(K)), lt === 0 && (q = Y, D = null, rt = null);
        }
        return gt;
      };
    }
    function mt(K) {
      return function() {
        var j = Jt({
          rethrow: !1,
          handler: K
        })();
        return q === V && pt(M), j;
      };
    }
    return {
      kill: $t,
      join: mt,
      onComplete: Jt,
      isSuspended: function() {
        return q === V;
      },
      run: function() {
        q === V && (O.isDraining() ? pt(M) : O.enqueue(function() {
          pt(M);
        }));
      }
    };
  }
  function S(G, W, Q, M) {
    var q = 0, D = {}, rt = 0, Z = {}, nt = new Error("[ParAff] Early exit"), tt = null, ct = t;
    function lt(Jt, $t, mt) {
      var K = $t, j = null, gt = null, _t = 0, xt = {}, Nt, jt;
      t: for (; ; )
        switch (Nt = null, K.tag) {
          case y:
            if (K._3 === t && (Nt = D[K._1], xt[_t++] = Nt.kill(Jt, function(Ln) {
              return function() {
                _t--, _t === 0 && mt(Ln)();
              };
            })), j === null)
              break t;
            K = j._2, gt === null ? j = null : (j = gt._1, gt = gt._2);
            break;
          case g:
            K = K._2;
            break;
          case _:
          case d:
            j && (gt = new N(l, j, gt)), j = K, K = K._1;
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
      var K, j, gt, _t, xt, Nt;
      for (G.isLeft(Jt) ? (K = Jt, j = null) : (j = Jt, K = null); ; ) {
        if (gt = null, _t = null, xt = null, Nt = null, tt !== null)
          return;
        if ($t === null) {
          M(K || j)();
          return;
        }
        if ($t._3 !== t)
          return;
        switch ($t.tag) {
          case g:
            K === null ? ($t._3 = G.right($t._1(G.fromRight(j))), j = $t._3) : $t._3 = K;
            break;
          case _:
            if (gt = $t._1._3, _t = $t._2._3, K) {
              if ($t._3 = K, xt = !0, Nt = rt++, Z[Nt] = lt(nt, K === gt ? $t._2 : $t._1, function() {
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
              j = G.right(G.fromRight(gt)(G.fromRight(_t))), $t._3 = j;
            }
            break;
          case d:
            if (gt = $t._1._3, _t = $t._2._3, gt === t && G.isLeft(_t) || _t === t && G.isLeft(gt))
              return;
            if (gt !== t && G.isLeft(gt) && _t !== t && G.isLeft(_t))
              K = j === gt ? _t : gt, j = null, $t._3 = K;
            else if ($t._3 = j, xt = !0, Nt = rt++, Z[Nt] = lt(nt, j === gt ? $t._2 : $t._1, function() {
              return function() {
                delete Z[Nt], xt ? xt = !1 : mt === null ? Wt(j, null, null) : Wt(j, mt._1, mt._2);
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
          delete D[Jt._1], Jt._3 = $t, Wt($t, Jt._2._1, Jt._2._2);
        };
      };
    }
    function Ht() {
      var Jt = A, $t = Q, mt = null, K = null, j, gt;
      t: for (; ; )
        switch (j = null, gt = null, Jt) {
          case A:
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
                gt = q++, Jt = Y, j = $t, $t = new N(y, gt, new N(l, mt, K), t), j = E(G, W, j), j.onComplete({
                  rethrow: !1,
                  handler: vt($t)
                })(), D[gt] = j, W && W.register(j);
            }
            break;
          case Y:
            if (mt === null)
              break t;
            mt._1 === t ? (mt._1 = $t, Jt = A, $t = mt._2, mt._2 = t) : (mt._2 = $t, $t = mt, K === null ? mt = null : (mt = K._1, K = K._2));
        }
      for (ct = $t, gt = 0; gt < q; gt++)
        D[gt].run();
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
      var j = lt(Jt, ct, $t);
      return function(gt) {
        return new N(i, function(_t) {
          return function() {
            for (var xt in j)
              j.hasOwnProperty(xt) && j[xt]();
            return w;
          };
        });
      };
    }
    return Ht(), function(Jt) {
      return new N(i, function($t) {
        return function() {
          return pt(Jt, $t);
        };
      });
    };
  }
  function H(G, W, Q) {
    return new N(i, function(M) {
      return function() {
        return S(G, W, Q, M);
      };
    });
  }
  return N.EMPTY = t, N.Pure = T(n), N.Throw = T(e), N.Catch = T(r), N.Sync = T(o), N.Async = T(i), N.Bind = T(s), N.Bracket = T(u), N.Fork = T(c), N.Seq = T(a), N.ParMap = T(g), N.ParApply = T(_), N.ParAlt = T(d), N.Fiber = E, N.Supervisor = X, N.Scheduler = O, N.nonCanceler = w, N;
})();
let Hs = null;
function tN() {
  return Hs || (typeof document > "u" ? null : Hs = document.createElement("canvas").getContext("2d"));
}
const Ds = /* @__PURE__ */ new Map();
function $g(t, n, e, r, o, i) {
  const s = `${e} ${n}px ${t}`, u = s + "|" + r;
  if (Ds.has(u)) return Ds.get(u);
  const c = tN();
  if (!c) return i;
  c.font = s;
  const a = o(c.measureText(r)), g = typeof document < "u" ? document.fonts : null;
  if (!g || g.check(s)) Ds.set(u, a);
  else if (g && g.load)
    try {
      g.load(s);
    } catch {
    }
  return a;
}
const nN = (t, n, e, r) => $g(t, n, e, r, (o) => o.width, -1), eN = (t, n, e, r) => $g(
  t,
  n,
  e,
  r,
  (o) => ({ ascent: o.actualBoundingBoxAscent, descent: o.actualBoundingBoxDescent }),
  { ascent: -1, descent: -1 }
), mg = (t) => (n) => {
  const e = nN(t.family, t.size, t.weight, Xr(n));
  return e < 0 ? ot(as(n).length) * t.size * 0.62 : e;
}, yg = (t) => (n) => {
  const e = eN(t.family, t.size, t.weight, Xr(n));
  return e.ascent < 0 ? { ascent: t.size * 0.72, descent: t.size * 0.2 } : e;
}, Ng = (t) => t, xg = (t) => t, hs = (t) => t, Jg = (t) => t, rN = (t) => t, Tg = (t) => t, vg = (t) => t, oN = /* @__PURE__ */ vg("BaselineTop"), or = /* @__PURE__ */ vg("BaselineMiddle"), Ju = /* @__PURE__ */ Tg("AlignLeft"), to = /* @__PURE__ */ Tg("AlignCenter"), vn = /* @__PURE__ */ rN("RoundJoin"), _e = /* @__PURE__ */ Jg("ButtCap"), ye = /* @__PURE__ */ Jg("RoundCap"), iN = /* @__PURE__ */ hs("LayerPolyOut"), sN = /* @__PURE__ */ hs("LayerPolyIn"), uN = /* @__PURE__ */ hs("LayerNodeMask"), cN = /* @__PURE__ */ hs("LayerOverlay"), Wi = /* @__PURE__ */ xg("NonZero"), aN = /* @__PURE__ */ xg("EvenOdd"), Qa = /* @__PURE__ */ Ng("Normal"), pi = /* @__PURE__ */ Ng("Difference"), rn = { r: 255, g: 255, b: 255, a: 255 }, Se = { r: 26, g: 26, b: 26, a: 255 }, fN = (t) => t, wg = (t) => t, gN = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ue = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, kg = (t) => (n) => (e) => {
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
}, Tu = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, lN = (t) => (n) => (e) => {
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
}, _N = /* @__PURE__ */ wg("FlatLevel"), dN = /* @__PURE__ */ wg("NestedLevel"), bg = /* @__PURE__ */ fN("GenieSilhouette"), hN = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, yLift: 0 };
  const o = Zr(t);
  return { prng: o.prng, yLift: o.value * e.yJitter * r };
}, pN = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, dx: 0 };
  const o = Zr(t);
  return { prng: o.prng, dx: (o.value * 2 - 1) * e.xJitter * r };
}, Wa = (t) => (n) => {
  const e = n.cy - t.cy, r = n.cx - t.cx, o = Sn(r * r + e * e), i = (t.r * t.r - n.r * n.r + o * o) / (2 * o), s = Sn(gN(0)(t.r * t.r - i * i)), u = t.cx + i * r / o, c = t.cy + i * e / o, a = { x: u - s * e / o, y: c + s * r / o }, g = { x: u + s * e / o, y: c - s * r / o };
  return o === 0 || o > t.r + n.r ? { x: (t.cx + n.cx) / 2, y: t.cy } : a.y < g.y ? a : g;
}, $N = (t) => (n) => {
  const e = ue(n)(ue(t.w / 2)(t.h / 2));
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
}, mN = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n)
    return { prng: t, r: o };
  if (e)
    return { prng: t, r: o * (1 + i.rJitter) };
  if (r)
    return { prng: t, r: o * i.smallScale };
  const s = Zr(t);
  return { prng: s.prng, r: o * (1 + s.value * i.rJitter) };
}, Lg = (t) => {
  const n = ue(t.w)(t.h) / 2;
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
}, yN = (t) => (n) => (e) => {
  const r = Zr(t), o = n.length;
  return o === 0 ? { prng: t, idx: -1 } : {
    prng: r.prng,
    idx: (() => {
      const i = kg(0)(o - 1 | 0)(yn(Ne(r.value * ot(e))));
      return i >= 0 && i < n.length ? n[i] : -1;
    })()
  };
}, NN = (t) => (n) => {
  const e = Zr(t), r = n.length;
  return r === 0 ? { prng: t, idx: -1 } : {
    prng: e.prng,
    idx: (() => {
      const o = kg(0)(r - 1 | 0)(yn(Ne(e.value * ot(r))));
      return o >= 0 && o < n.length ? n[o] : -1;
    })()
  };
}, Eg = (t) => {
  const n = ue(t.w * 0.18)(t.h * 0.6);
  return [1, t.x + n, t.y, 2, t.x + t.w, t.y, 2, t.x + t.w - n, t.y + t.h, 2, t.x, t.y + t.h, 5];
}, Sg = (t) => [
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
], Cg = { rBase: 1.2, stepRatio: 0.7, rJitter: 0.35, yJitter: 0.2, xJitter: 0.2, heroShift: 0.2, smallScale: 0.85, smallShift: 0.15, seed: 7, minN: 3 }, xN = (t) => {
  const n = ue(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.x + e;
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
}, Pg = (t) => {
  const n = ue(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + t.h + 5, o = t.y + n, i = r - n, s = t.x + e;
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
}, Gg = (t) => (n) => {
  const e = n.y + n.h, r = E_(t.rBase * n.h)(n.w / (2 * (1 + (ot(t.minN) - 1) * t.stepRatio))), o = n.w - 2 * r, i = 2 * r * t.stepRatio, s = Tu(t.minN)(o <= 0 || i <= 0 ? t.minN : yn(fr(o / i)) + 1 | 0), u = s >= 3 ? It(1, s - 2 | 0) : [], c = u.length, a = Ae(c + 1 | 0, 2), g = a < 1 ? [] : bt(0, a, u), _ = NN(t.seed)((() => {
    const $ = c - a | 0;
    return $ < 1 ? u : bt($, u.length, u);
  })()), d = _.idx, l = yN(_.prng)(ft(($) => $ !== d, g))(Tu(1)(g.length - (Dn(Qr)(d)(g) ? 1 : 0) | 0)), h = l.idx, p = s >= 2 ? o / (ot(s) - 1) : 0;
  return J(($) => (m) => {
    const y = m === h, N = m === d, T = m === 0 || m === (s - 1 | 0), w = mN($.prng)(T)(N)(y)(r)(t), k = hN(w.prng)(T)(t)(n.h), L = pN(k.prng)(T)(t)(p);
    return {
      prng: L.prng,
      circles: Bt($.circles)({
        cx: n.x + lN(w.r)(n.w - w.r)((s >= 2 ? r + ot(m) / (ot(s) - 1) * o + L.dx : r + 0 * o + L.dx) + (N ? t.heroShift * p : y ? -1 * t.smallShift * p : 0)),
        cy: e - k.yLift,
        r: w.r
      })
    };
  })({ prng: l.prng, circles: [] })(It(0, s - 1 | 0)).circles;
}, Ag = (t) => (n) => {
  const e = t.length;
  return Ft((r) => (o) => ({
    c: o,
    p1: (() => {
      if (r === 0)
        return { x: o.cx - o.r, y: n };
      const i = r - 1 | 0;
      return i >= 0 && i < t.length ? Wa(t[i])(o) : { x: o.cx - o.r, y: n };
    })(),
    p2: (() => {
      if (r === (e - 1 | 0))
        return { x: o.cx + o.r, y: n };
      const i = r + 1 | 0;
      return i >= 0 && i < t.length ? Wa(o)(t[i]) : { x: o.cx + o.r, y: n };
    })()
  }))(t);
}, Ig = (t) => {
  const n = ue(t.h * 0.4)(t.w * 0.2);
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
}, JN = (t) => (n) => (e) => {
  const r = lr(n.y - t.cy)(n.x - t.cx), o = lr(e.y - t.cy)(e.x - t.cx), i = o > r ? o - r : o + 6.283185307179586 - r, s = Tu(1)(yn(ji(i / 1.5707963267948966))), u = i / ot(s), c = 1.3333333333333333 * S_(u / 4);
  return Tt(It(0, s - 1 | 0))((a) => {
    const g = r + ot(a + 1 | 0) * u, _ = t.cx + t.r * ie(g), d = t.cy + t.r * Kn(g), l = r + ot(a) * u;
    return [
      4,
      t.cx + t.r * ie(l) - c * t.r * Kn(l),
      t.cy + t.r * Kn(l) + c * t.r * ie(l),
      _ + c * t.r * Kn(g),
      d - c * t.r * ie(g),
      _,
      d
    ];
  });
}, Fg = (t) => (n) => {
  const e = t.h * 0.38, r = Ag(Gg(Cg)({ x: t.x, y: t.y - e, w: t.w, h: e }))(t.y), o = ue(n)(ue(t.w / 2)(t.h / 2));
  return 0 < r.length ? [
    1,
    r[0].p1.x,
    r[0].p1.y,
    ...Tt(r)((i) => JN(i.c)(i.p1)(i.p2)),
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
  ] : $N(t)(n);
}, Rg = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n === "Rectangle")
    return t.drawRoundedRect(e)(r)(o)(i);
  if (n === "Cylinder") {
    const s = Pg(e);
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
    const s = Eg(e);
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
    const s = Ig(e);
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
  if (n === "Document") {
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
  if (n === "Cloud") {
    const s = Fg(e)(r);
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
}, TN = (t) => () => t.clip("evenodd"), vN = (t) => (n) => () => {
  const e = Math.max(8, Math.ceil(8 / Math.max(n.tile, 1e-3))), r = Math.max(2, Math.round(n.tile * e)), o = document.createElement("canvas");
  o.width = r, o.height = r;
  const i = o.getContext("2d");
  i.scale(e, e), i.fillStyle = n.bgCss, i.fillRect(0, 0, n.tile, n.tile), i.fillStyle = n.dotCss, i.beginPath(), i.arc(n.tile / 2, n.tile / 2, n.dotR, 0, 2 * Math.PI), i.fill();
  const s = t.createPattern(o, "repeat");
  s && typeof s.setTransform == "function" && s.setTransform(new DOMMatrix().scaleSelf(1 / e, 1 / e)), t.save(), t.fillStyle = s, t.fillRect(n.vx, n.vy, n.vw, n.vh), t.restore();
}, vu = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, pc = (t) => (n) => (e) => {
  const r = n.stroke;
  return () => {
    const o = r.value, i = t1(t)(e);
    if (o !== e)
      return i(), n.stroke.value = e;
  };
}, wN = (t) => (n) => (e) => {
  const r = n.font;
  return () => {
    const o = r.value, i = a1(t)(e);
    if (o !== e)
      return i(), n.font.value = e;
  };
}, Vo = (t) => (n) => (e) => {
  const r = n.fill;
  return () => {
    const o = r.value, i = Z_(t)(e);
    if (o !== e)
      return i(), n.fill.value = e;
  };
}, ps = (t) => (n) => {
  const e = n.length, r = (i) => {
    if (i >= e)
      return () => {
      };
    const s = i >= 0 && i < n.length ? n[i] : 0;
    if (s === 1) {
      const u = Of(t)((() => {
        const a = i + 1 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })())((() => {
        const a = i + 2 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 2) {
      const u = ro(t)((() => {
        const a = i + 1 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })())((() => {
        const a = i + 2 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 3) {
      const u = oo(t)({
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
      const u = g1(t)({
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
      const u = zf(t), c = r(i + 1 | 0);
      return () => (u(), c());
    }
    return () => {
    };
  }, o = Df(t);
  return () => (o(), r(0)());
}, kN = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = vu(i)(vu(r / 2)(o / 2)), u = Of(t)(n + s)(e);
  return () => (u(), ro(t)(n + r - s)(e)(), oo(t)({ cpx: n + r, cpy: e, x: n + r, y: e + s })(), ro(t)(n + r)(e + o - s)(), oo(t)({ cpx: n + r, cpy: e + o, x: n + r - s, y: e + o })(), ro(t)(n + s)(e + o)(), oo(t)({ cpx: n, cpy: e + o, x: n, y: e + o - s })(), ro(t)(n)(e + s)(), oo(t)({ cpx: n, cpy: e, x: n + s, y: e })(), zf(t)());
}, bN = () => ({ font: { value: "" }, fill: { value: "" }, stroke: { value: "" } }), LN = (t) => (n) => {
  const e = i1(t)({ x: 0, y: 0, width: n.width, height: n.height });
  return () => {
    e();
    const r = bN();
    return { ctx: t, surface: n, styleCache: r, maskDepth: { value: 0 } };
  };
}, EN = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, SN = (t) => un(t.weight) + " " + xf(t.size) + "px " + t.family, Te = (t) => {
  const n = xf(ot(t.a) / 255);
  return t.a >= 255 ? "rgb(" + un(t.r) + "," + un(t.g) + "," + un(t.b) + ")" : "rgba(" + un(t.r) + "," + un(t.g) + "," + un(t.b) + "," + n + ")";
}, CN = (t) => (n) => (e) => (r) => {
  const o = Vo(t)(e)(Te(r));
  return () => (o(), o1(t)({ x: 0, y: 0, width: n.width, height: n.height })());
}, PN = (t) => (n) => (e) => {
  const r = n.font;
  return () => (r.value = "", n.fill.value = "", n.stroke.value = "", vN(t)({
    vx: e.viewport.vx,
    vy: e.viewport.vy,
    vw: e.viewport.vw,
    vh: e.viewport.vh,
    bgCss: Te(e.bgColor),
    dotCss: Te(e.dotColor),
    tile: e.tile,
    dotR: e.dotRadius
  })());
}, GN = (t) => (n) => (e) => (r) => {
  const o = Vo(t)(n)(Te(r));
  return () => (o(), ps(t)(e)(), Bu(t)());
}, AN = (t) => (n) => (e) => (r) => (o) => {
  const i = Vo(t)(n)(Te(r));
  return () => (i(), pc(t)(n)(Te(o.color))(), Fu(t)(o.width)(), es(t)((() => {
    if (o.lineJoin === "RoundJoin")
      return ns;
    if (o.lineJoin === "BevelJoin")
      return Du;
    if (o.lineJoin === "MiterJoin")
      return Ou;
    f();
  })())(), Xu(t)((() => {
    if (o.lineCap === "ButtCap")
      return Yu;
    if (o.lineCap === "RoundCap")
      return zu;
    if (o.lineCap === "SquareCap")
      return qu;
    f();
  })())(), ps(t)(e)(), Bu(t)(), Ru(t)());
}, IN = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Df(t);
  return () => {
    if (s(), kN(t)(e.x)(e.y)(e.w)(e.h)(r)(), o.tag === "Just" ? (Vo(t)(n)(Te(o._1.color))(), Bu(t)()) : o.tag === "Nothing" || f(), i.tag === "Just")
      return pc(t)(n)(Te(i._1.color))(), Fu(t)(i._1.width)(), es(t)((() => {
        if (i._1.lineJoin === "RoundJoin")
          return ns;
        if (i._1.lineJoin === "BevelJoin")
          return Du;
        if (i._1.lineJoin === "MiterJoin")
          return Ou;
        f();
      })())(), Xu(t)((() => {
        if (i._1.lineCap === "ButtCap")
          return Yu;
        if (i._1.lineCap === "RoundCap")
          return zu;
        if (i._1.lineCap === "SquareCap")
          return qu;
        f();
      })())(), Ru(t)();
    i.tag !== "Nothing" && f();
  };
}, FN = (t) => (n) => (e) => (r) => {
  const o = pc(t)(n)(Te(r.color));
  return () => (o(), Fu(t)(r.width)(), es(t)((() => {
    if (r.lineJoin === "RoundJoin")
      return ns;
    if (r.lineJoin === "BevelJoin")
      return Du;
    if (r.lineJoin === "MiterJoin")
      return Ou;
    f();
  })())(), Xu(t)((() => {
    if (r.lineCap === "ButtCap")
      return Yu;
    if (r.lineCap === "RoundCap")
      return zu;
    if (r.lineCap === "SquareCap")
      return qu;
    f();
  })())(), ps(t)(e)(), Ru(t)());
}, Ha = (t) => (n) => (e) => {
  const r = Vo(t)(n)(Te(e.color));
  return () => (r(), wN(t)(n)(SN(e.font))(), J1(t)((() => {
    if (e.align === "AlignLeft")
      return p1;
    if (e.align === "AlignCenter")
      return m1;
    if (e.align === "AlignRight")
      return $1;
    f();
  })())(), x1(t)((() => {
    if (e.baseline === "BaselineTop")
      return l1;
    if (e.baseline === "BaselineMiddle")
      return _1;
    if (e.baseline === "BaselineAlphabetic")
      return d1;
    if (e.baseline === "BaselineBottom")
      return h1;
    f();
  })())(), f1(t)(e.content)(e.x)(e.y)());
}, Bg = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => EN
}, RN = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => Bg
}, BN = (t) => (n) => (e) => {
  const r = vu(n.width / e.vw)(n.height / e.vh), o = Ms(t)({ translateX: (n.width - e.vw * r) / 2 - e.vx * r, translateY: (n.height - e.vh * r) / 2 - e.vy * r });
  return () => (o(), yi(t)({ scaleX: r, scaleY: r })(), es(t)(ns)());
}, QN = { pure: (t) => (n) => () => t, Apply0: () => Bg }, WN = { Applicative0: () => QN, Bind1: () => RN }, Qg = {
  fillPath: (t) => (n) => (e) => {
    const r = GN(e.ctx)(e.styleCache)(t)(n.color), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = FN(e.ctx)(e.styleCache)(t)(n), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = AN(r.ctx)(r.styleCache)(t)(n.color)(e), i = r.maskDepth;
    return () => {
      if (i.value === 0)
        return o();
    };
  },
  drawRoundedRect: (t) => (n) => (e) => (r) => (o) => {
    const i = IN(o.ctx)(o.styleCache)(t)(n)(e)(r), s = o.maskDepth;
    return () => {
      if (s.value === 0)
        return i();
    };
  },
  drawText: (t) => (n) => {
    const e = Ha(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  drawTextAffine: (t) => (n) => (e) => {
    const r = cr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", s1(e.ctx)(t)(), Ha(e.ctx)(e.styleCache)(n)(), ar(e.ctx)(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "";
    };
  },
  pushTransform: (t) => (n) => {
    const e = cr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", Ms(n.ctx)({ translateX: t.tx, translateY: t.ty })(), yi(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popTransform: (t) => {
    const n = ar(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBakedTransform: (t) => (n) => {
    const e = cr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", Ms(n.ctx)({ translateX: t.tx, translateY: t.ty })(), yi(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popBakedTransform: (t) => {
    const n = ar(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushClip: (t) => (n) => (e) => {
    const r = cr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0) {
        if (r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", ps(e.ctx)(t)(), n === "NonZero")
          return r1(e.ctx)();
        if (n === "EvenOdd")
          return TN(e.ctx)();
        f();
      }
    };
  },
  popClip: (t) => {
    const n = ar(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBlend: (t) => (n) => {
    const e = cr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        if (e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", t === "Normal")
          return Fc(n.ctx)(y1)();
        if (t === "Difference")
          return Fc(n.ctx)(N1)();
        f();
      }
    };
  },
  popBlend: (t) => {
    const n = ar(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushAlpha: (t) => (n) => {
    const e = cr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", e1(n.ctx)(t)();
    };
  },
  popAlpha: (t) => {
    const n = ar(t.ctx), e = t.maskDepth;
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
    const e = BN(n.ctx)(n.surface)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  clearBackground: (t) => (n) => {
    const e = CN(n.ctx)(n.surface)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  backgroundDots: (t) => (n) => {
    const e = PN(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = mg(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = yg(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => bg,
  Monad0: () => WN
}, HN = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ur = (t) => (n) => (e) => {
  const r = HN(0.05)(1 - t - n);
  return e < t ? 0 : e > 1 - n ? 1 : (e - t) / r;
}, Da = (t) => {
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
}, $s = (t) => {
  if (t.tag === "Hidden")
    return { alpha: 0, scale: 0 };
  if (t.tag === "Visible")
    return { alpha: 1, scale: 1 };
  if (t.tag === "PloppingIn")
    return { alpha: t._1 > 0 ? 1 : 0, scale: vo(8)(0.6)(Da(t._1)) };
  if (t.tag === "PloppingOut")
    return { alpha: t._1 < 1 ? 1 : 0, scale: vo(8)(0.6)(Da(1 - t._1)) };
  f();
};
function DN(t, n) {
  const e = n.x - t.x, r = n.y - t.y;
  return Math.sqrt(e * e + r * r);
}
function ON(t) {
  const n = t.length, e = new Array(n);
  for (let r = 0; r < n; r++) {
    const o = t[r], i = t[(r + 1) % n];
    e[r] = { a: o, b: i, len: DN(o, i) };
  }
  return e;
}
function zN(t, n, e) {
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
function Oa(t, n) {
  if (n.length === 0) return [];
  const e = ON(n);
  let r = 0;
  for (let i = 0; i < e.length; i++) r += e[i].len;
  const o = new Array(t);
  for (let i = 0; i < t; i++)
    o[i] = zN(e, n, i * r / t);
  return o;
}
function qN(t, n) {
  const e = n.length;
  if (e === 0) return n;
  const r = (t % e + e) % e | 0, o = new Array(e);
  for (let i = 0; i < e; i++) o[i] = n[(i + r) % e];
  return o;
}
function YN(t, n) {
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
  return qN(r, n);
}
const za = (t) => (n) => (e) => {
  const r = Oa(t, n), o = Oa(t, e), i = YN(r, o);
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
function XN(t, n) {
  const e = n.x - t.x, r = n.y - t.y, o = Math.sqrt(e * e + r * r);
  return o <= 1e-4 ? { x: 1, y: 0 } : { x: e / o, y: r / o };
}
function VN(t, n) {
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
function UN(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
const Ya = (t) => (n) => (e) => (r) => {
  const o = n.length;
  if (o === 0) return [];
  const i = qa(n), s = qa(e), u = XN(i, s), c = new Array(o);
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
    const $ = _ <= 1e-4 ? 0 : r.maxDelay * (1 - (c[l] - a) / _), m = Math.max(1e-4, 1 - $), y = UN((t - $) / m), N = y * y * (3 - 2 * y);
    d[l] = {
      x: h.x + (p.x - h.x) * N,
      y: h.y + (p.y - h.y) * N
    };
  }
  for (let l = 0; l < r.smoothPasses; l++)
    d = VN(0.5, d);
  return d;
}, ve = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Xa = /* @__PURE__ */ J(Dr)(0), Va = (t) => (n) => (e) => {
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
}, KN = /* @__PURE__ */ J((t) => (n) => t + n.len)(0), $c = (t) => {
  const n = Qt((e) => x, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Tt(bt(1, t.length, t))((e) => [2, e.x, e.y]), 5];
  f();
}, MN = (t) => (n) => {
  const e = ve(n)(ve(t.w / 2)(t.h / 2));
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
}, jN = (t) => {
  const n = Qt((e) => x, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Tt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, ZN = (t) => {
  const n = { x: t.x, y: t.y, w: t.w, h: t.h };
  if (t.shape === "Cylinder")
    return Pg(n);
  if (t.shape === "Parallelogram")
    return Eg(n);
  if (t.shape === "Diamond")
    return Ig(n);
  if (t.shape === "Ellipse")
    return Lg(n);
  if (t.shape === "Document")
    return Sg(n);
  if (t.shape === "Cloud")
    return Fg(n)(7);
  if (t.shape === "Rectangle")
    return MN(n)(7);
  f();
}, pn = (t) => (n) => (e) => z((r) => {
  const o = ot(r) / ot(e);
  return { x: t.x + (n.x - t.x) * o, y: t.y + (n.y - t.y) * o };
})(It(0, e - 1 | 0)), tx = (t) => {
  const n = ue(t.w * 0.18)(t.h * 0.6);
  return [
    ...pn({ x: t.x + n, y: t.y })({ x: t.x + t.w, y: t.y })(16),
    ...pn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w - n, y: t.y + t.h })(16),
    ...pn({ x: t.x + t.w - n, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(16),
    ...pn({ x: t.x, y: t.y + t.h })({ x: t.x + n, y: t.y })(16)
  ];
}, Kr = (t) => (n) => {
  const e = ve(t)(ve(n.w / 2)(n.h / 2));
  return { ...n, x: n.x + e, y: n.y + e, w: n.w - 2 * e, h: n.h - 2 * e };
}, wu = (t) => (n) => {
  const e = n.y - t.y, r = n.x - t.x;
  return Sn(r * r + e * e);
}, nx = (t) => kn((n) => (e) => ({ a: n, b: e, len: wu(n)(e) }), t, bt(1, t.length, t)), ex = (t) => (n) => {
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
    ...Tt(It(1, u - 2 | 0))((c) => {
      const a = c + 1 | 0, g = a >= 0 && a < n.length ? v("Just", n[a]) : x, _ = c >= 0 && c < n.length ? v("Just", n[c]) : x, d = c - 1 | 0, l = d >= 0 && d < n.length ? v("Just", n[d]) : x;
      if (l.tag === "Just" && _.tag === "Just" && g.tag === "Just") {
        const h = _._1, p = wu(h)(g._1), $ = wu(l._1)(h), m = ve(t)(p / 2), y = ve(t)($ / 2), N = p > 0 ? m / p : 0, T = h.x + (g._1.x - h.x) * N, w = h.y + (g._1.y - h.y) * N, k = $ > 0 ? y / $ : 0, L = h.x + (l._1.x - h.x) * k, P = h.y + (l._1.y - h.y) * k;
        return z((O) => {
          const X = ot(O) / ot(10), V = 1 - X;
          return { x: V * V * L + 2 * V * X * h.x + X * X * T, y: V * V * P + 2 * V * X * h.y + X * X * w };
        })(It(0, 10));
      }
      return [];
    }),
    ...o
  ];
}, rx = (t) => (n) => (e) => (r) => (o) => z((i) => {
  const s = ot(i) / ot(o), u = 1 - s, c = s * s * s, a = 3 * u * s * s, g = 3 * u * u * s, _ = u * u * u;
  return { x: _ * t.x + g * n.x + a * e.x + c * r.x, y: _ * t.y + g * n.y + a * e.y + c * r.y };
})(It(0, o - 1 | 0)), ox = (t) => [
  ...pn({ x: t.x, y: t.y })({ x: t.x + t.w, y: t.y })(12),
  ...pn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h * 0.85 })(12),
  ...rx({ x: t.x + t.w, y: t.y + t.h * 0.85 })({ x: t.x + t.w * 0.66, y: t.y + t.h * 1.05 })({ x: t.x + t.w * 0.34, y: t.y + t.h * 0.65 })({
    x: t.x,
    y: t.y + t.h * 0.85
  })(32),
  ...pn({ x: t.x, y: t.y + t.h * 0.85 })({ x: t.x, y: t.y })(12)
], Ua = (t) => (n) => z((e) => {
  const r = 6.283185307179586 * ot(e) / ot(64);
  return { x: t.x + n * ie(r), y: t.y + n * Kn(r) };
})(It(0, 63)), ms = (t) => (n) => {
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
}, ix = (t) => {
  const n = t.y + t.h / 2, e = ue(t.h * 0.4)(t.w * 0.2);
  return [
    ...pn({ x: t.x + e, y: t.y })({ x: t.x + t.w - e, y: t.y })(10),
    ...pn({ x: t.x + t.w - e, y: t.y })({ x: t.x + t.w, y: n })(8),
    ...pn({ x: t.x + t.w, y: n })({ x: t.x + t.w - e, y: t.y + t.h })(8),
    ...pn({ x: t.x + t.w - e, y: t.y + t.h })({ x: t.x + e, y: t.y + t.h })(10),
    ...pn({ x: t.x + e, y: t.y + t.h })({ x: t.x, y: n })(8),
    ...pn({ x: t.x, y: n })({ x: t.x + e, y: t.y })(8)
  ];
}, Wg = (t) => {
  const n = t.length;
  return n === 0 ? { x: 0, y: 0 } : { x: Xa(z((e) => e.x)(t)) / ot(n), y: Xa(z((e) => e.y)(t)) / ot(n) };
}, gi = (t) => (n) => (e) => (r) => (o) => z((i) => {
  const s = e + (r - e) * (ot(i) / ot(o));
  return { x: t.x + n * ie(s), y: t.y + n * Kn(s) };
})(It(0, o - 1 | 0)), Ka = (t) => (n) => {
  const e = ve(t)(ve(n.w / 2)(n.h / 2));
  return [
    ...pn({ x: n.x + e, y: n.y })({ x: n.x + n.w - e, y: n.y })(6),
    ...gi({ x: n.x + n.w - e, y: n.y + e })(e)(4.71238898038469)(6.283185307179586)(12),
    ...pn({ x: n.x + n.w, y: n.y + e })({ x: n.x + n.w, y: n.y + n.h - e })(6),
    ...gi({ x: n.x + n.w - e, y: n.y + n.h - e })(e)(0)(1.5707963267948966)(12),
    ...pn({ x: n.x + n.w - e, y: n.y + n.h })({ x: n.x + e, y: n.y + n.h })(6),
    ...gi({ x: n.x + e, y: n.y + n.h - e })(e)(1.5707963267948966)(3.141592653589793)(12),
    ...pn({ x: n.x, y: n.y + n.h - e })({ x: n.x, y: n.y + e })(6),
    ...gi({ x: n.x + e, y: n.y + e })(e)(3.141592653589793)(4.71238898038469)(12)
  ];
}, Hi = (t) => (n) => (e) => (r) => (o) => (i) => z((s) => {
  const u = r + (o - r) * (ot(s) / ot(i));
  return { x: t.x + n * ie(u), y: t.y + e * Kn(u) };
})(It(0, i - 1 | 0)), sx = (t) => {
  const n = t.h * 0.38;
  return [
    ...Tt(Ag(Gg(Cg)({
      x: t.x,
      y: t.y - n,
      w: t.w,
      h: n
    }))(t.y))((e) => {
      const r = lr(e.p2.y - e.c.cy)(e.p2.x - e.c.cx), o = lr(e.p1.y - e.c.cy)(e.p1.x - e.c.cx);
      return Hi({ x: e.c.cx, y: e.c.cy })(e.c.r)(e.c.r)(o)(r > o ? r : r + 6.283185307179586)(16);
    }),
    ...pn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h })(8),
    ...pn({ x: t.x + t.w, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(12),
    ...pn({ x: t.x, y: t.y + t.h })({ x: t.x, y: t.y })(8)
  ];
}, ux = (t) => {
  const n = ve(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.y + t.h + 5 - n - 2, i = t.x + e;
  return [
    ...Hi({ x: i, y: r })(e)(n)(3.141592653589793)(6.283185307179586)(24),
    ...pn({ x: t.x + t.w, y: r })({ x: t.x + t.w, y: o })(12),
    ...Hi({ x: i, y: o })(e)(n)(0)(3.141592653589793)(24),
    ...pn({ x: t.x, y: o })({ x: t.x, y: r })(12)
  ];
}, Nr = (t) => (n) => n.shape === "Cylinder" ? ux(n) : n.shape === "Parallelogram" ? tx(n) : n.shape === "Diamond" ? ix(n) : n.shape === "Ellipse" ? Ka(ue(n.w)(n.h) / 2)(n) : n.shape === "Document" ? ox(n) : n.shape === "Cloud" ? sx(n) : Ka(t)(n), cx = (t) => {
  const n = ve(t.h * 0.075)(t.w * 0.075), e = t.w / 2;
  return Hi({ x: t.x + e, y: t.y + n })(e)(n)(0)(3.141592653589793)(24);
}, ax = (t) => (n) => (e) => J((r) => (o) => {
  const i = r.pos + o.len, s = e < i ? (e - r.pos) / o.len : 1, u = { x: o.a.x + (o.b.x - o.a.x) * s, y: o.a.y + (o.b.y - o.a.y) * s }, c = n > r.pos ? (n - r.pos) / o.len : 0, a = { x: o.a.x + (o.b.x - o.a.x) * c, y: o.a.y + (o.b.y - o.a.y) * c }, g = r.points.length - 1 | 0, _ = g >= 0 && g < r.points.length ? (() => {
    const d = r.points[g].x - a.x;
    return (d < 0 ? -d < 1e-4 : d < 1e-4) && (() => {
      const l = r.points[g].y - a.y;
      return l < 0 ? -l < 1e-4 : l < 1e-4;
    })();
  })() ? Bt(r.points)(u) : [...r.points, a, u] : [a, u];
  return o.len <= 0 || i <= n || r.pos >= e ? { ...r, pos: i } : { pos: i, points: _ };
})({ pos: 0, points: [] })(t).points, fx = (t) => (n) => (e) => {
  const r = Qt((o) => x, (o) => (i) => v("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just") {
    const o = nx(t), i = KN(o), s = Va(0)(i)(n * i), u = Va(0)(i)(e * i);
    return u <= s ? [] : ax(o)(s)(u);
  }
  f();
}, gx = (t) => (n) => (e) => (r) => {
  const o = r.x - e.x, i = r.y - e.y, s = n.x - t.x, u = n.y - t.y, c = e.x - t.x, a = e.y - t.y, g = s * i - u * o, _ = (c * i - a * o) / g, d = (c * u - a * s) / g;
  return (g < 0 ? -g < 1e-9 : g < 1e-9) ? x : _ >= 0 && _ <= 1 && d >= 0 && d <= 1 ? v("Just", _) : x;
}, lx = (t) => (n) => (e) => {
  const r = Lt((o) => (i) => at.compare(o.t)(i.t))(yt((o) => {
    const i = gx(n)(e)(o._1)(o._2);
    return i.tag === "Just" ? v("Just", { t: i._1, p: { x: n.x + (e.x - n.x) * i._1, y: n.y + (e.y - n.y) * i._1 } }) : x;
  })(kn(Oe, t, [...bt(1, t.length, t), ...bt(0, 1, t)])));
  return 0 < r.length ? v("Just", r[0].p) : x;
}, Ma = (t) => (n) => {
  const e = Do(n);
  if (e.tag === "Nothing")
    return n;
  if (e.tag === "Just") {
    const r = e._1.init.length - 1 | 0;
    if (r >= 0 && r < e._1.init.length) {
      const o = lx(t)(e._1.init[r])(e._1.last);
      if (o.tag === "Just")
        return Bt(e._1.init)(o._1);
      if (o.tag === "Nothing")
        return n;
      f();
    }
    return n;
  }
  f();
}, mc = (t) => t, Ge = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, dr = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, _x = /* @__PURE__ */ Bl(Lf)(Dt), dx = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, hx = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ja = /* @__PURE__ */ mc("SegMove"), px = /* @__PURE__ */ mc("SegLine"), $x = /* @__PURE__ */ mc("SegQuad"), Za = { offset: 0.4, passes: 1, rMax: 1.5 }, Hg = (t) => yn(Ne(t.x * 7919 + t.y * 3001 + t.w * 113 + t.h * 17 + 1)) * -1640531535 | 0, Di = (t) => (n) => (e) => () => {
  t.push(3), t.push(n.x), t.push(n.y), t.push(e.x), t.push(e.y);
}, ys = (t) => (n) => () => {
  t.push(1), t.push(n.x), t.push(n.y);
}, Re = (t) => (n) => () => {
  t.push(2), t.push(n.x), t.push(n.y);
}, Ro = /* @__PURE__ */ (() => {
  const t = J((n) => (e) => ((n * 31 | 0) + yn(Ne(e.x * 100)) | 0) + yn(Ne(e.y * 100)) | 0)(1);
  return (n) => t(n) * -1640531535 | 0;
})(), mx = (t) => {
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
        n.push({ kind: ja, m: i, c: i, p: u, len: 0 }), r = u, e = o + 3 | 0;
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
        n.push({ kind: px, m: i, c: i, p: u, len: Sn(c * c + a * a) }), r = u, e = o + 3 | 0;
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
          kind: $x,
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
        n.push({ kind: ja, m: i, c: i, p: i, len: 0 }), e = o + 1 | 0;
        continue;
      }
      e = t.length;
      continue;
    }
    f();
  }
  return n;
}, yx = (t) => (n) => {
  const e = n.length - 1 | 0, r = e < 1 ? [] : bt(0, e, n), o = (() => {
    const s = r.length - 1 | 0;
    return s >= 0 && s < r.length ? v("Just", r[s]) : x;
  })(), i = n.length - 1 | 0;
  if (i >= 0 && i < n.length && o.tag === "Just") {
    const s = n[i].y - o._1.y, u = n[i].x - o._1.x, c = Sn(u * u + s * s);
    return c <= 1e-4 ? n : Bt((() => {
      const a = n.length - 1 | 0;
      return a < 1 ? [] : bt(0, a, n);
    })())({ x: n[i].x + u / c * t, y: n[i].y + s / c * t });
  }
  return n;
}, Nx = (t) => (n) => (e) => wn(J((r) => (o) => {
  const i = fn(0)(t)(r.prng), s = fn(0)(6.283185307179586)(i.prng);
  return { prng: s.prng, out: [{ x: o.x + i.value * ie(s.value), y: o.y + i.value * Kn(s.value) }, ...r.out] };
})({ prng: n, out: [] })(e).out), xx = (t) => (n) => (e) => {
  if (n.kind === "SegMove")
    return ys(t)(n.p);
  if (n.kind === "SegLine")
    return Re(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  if (n.kind === "SegQuad")
    return Re(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  f();
}, Jx = (t) => (n) => {
  if (n.kind === "SegMove")
    return ys(t)(n.p);
  if (n.kind === "SegLine")
    return Re(t)(n.p);
  if (n.kind === "SegQuad")
    return Di(t)(n.c)(n.p);
  f();
}, Dg = (t) => (n) => {
  const e = mx(n), r = J((u) => (c) => u + c.len)(0)(e) * Ge(0)(dr(1)(t)), o = [];
  let i = 0, s = 0;
  for (; s < e.length; ) {
    const u = s, c = i;
    if (u >= 0 && u < e.length) {
      if (c + e[u].len <= r) {
        const a = e[u];
        Jx(o)(a)(), i = c + a.len, s = u + 1 | 0;
        continue;
      }
      if (c >= r) {
        s = e.length;
        continue;
      }
      xx(o)(e[u])((r - c) / Ge(e[u].len)(1e-4))();
    }
    s = e.length;
  }
  return o;
}, tf = { offset: 1.5, passes: 2, rMax: 14, overshoot: 2.5 }, Og = (t) => (n) => (e) => (r) => {
  const o = r.y - e.y, i = e.y - n.y, s = r.x - e.x, u = Sn(s * s + o * o), c = e.x - n.x, a = Sn(c * c + i * i), g = dr(t.rMax * (L_(a > 0 && u > 0 ? Ge(-1)(dr(1)((c * s + i * o) / (a * u))) : 1) / 3.141592653589793))(0.4 * dr(a)(u));
  return { inP: a > 0 ? { x: e.x - c / a * g, y: e.y - i / a * g } : e, curr: e, outP: u > 0 ? { x: e.x + s / u * g, y: e.y + o / u * g } : e };
}, zg = (t) => (n) => {
  const e = n.length, r = [], o = 0 < n.length ? v("Just", n[0]) : x;
  if (o.tag === "Just" ? ys(r)(o._1)() : o.tag === "Nothing" || f(), e >= 3) {
    let s = 1;
    for (; s <= (e - 2 | 0); ) {
      const u = s, c = u + 1 | 0;
      if (c >= 0 && c < n.length) {
        if (u >= 0 && u < n.length) {
          const a = u - 1 | 0;
          if (a >= 0 && a < n.length) {
            const g = Og(t)(n[a])(n[u])(n[c]);
            Re(r)(g.inP)(), Di(r)(g.curr)(g.outP)();
          }
        }
        s = u + 1 | 0;
        continue;
      }
      s = u + 1 | 0;
    }
  }
  const i = n.length - 1 | 0;
  return i >= 0 && i < n.length && e >= 2 && Re(r)(n[i])(), r;
}, Tx = (t) => (n) => (e) => (r) => (o) => {
  if (o.length < 4)
    return zg(t)(o);
  const i = 0 < o.length ? v("Just", o[0]) : x, s = (() => {
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = o.length - 1 | 0, c = Me(Me(n)(u) + u | 0)(u), a = (l) => {
    const h = Me(l + u | 0)(u);
    return h >= 0 && h < o.length ? o[h] : s;
  }, g = z((l) => Og(t)(a((c + l | 0) - 1 | 0))(a(c + l | 0))(a((c + l | 0) + 1 | 0)))(It(
    0,
    u - 1 | 0
  )), _ = [], d = 0 < g.length ? v("Just", g[0]) : x;
  if (d.tag === "Just")
    if (ys(_)(d._1.outP)(), _x((() => {
      const l = Qt((h) => x, (h) => (p) => v("Just", p), g);
      if (l.tag === "Nothing")
        return [];
      if (l.tag === "Just")
        return l._1;
      f();
    })())((l) => {
      const h = Re(_)(l.inP);
      return () => (h(), Di(_)(l.curr)(l.outP)());
    })(), e)
      Re(_)(d._1.inP)(), Di(_)(d._1.curr)(d._1.outP)(), _.push(5);
    else {
      const l = g.length - 1 | 0;
      l >= 0 && l < g.length ? Re(_)((() => {
        const h = 1 - r;
        return { x: g[l].outP.x + (d._1.inP.x - g[l].outP.x) * h, y: g[l].outP.y + (d._1.inP.y - g[l].outP.y) * h };
      })())() : Re(_)(d._1.inP)();
    }
  else d.tag === "Nothing" || f();
  return _;
}, Fr = (t) => (n) => (e) => (r) => {
  const o = dx(1)(r.length - 1 | 0), i = fn(0)(ot(o))(su("shape")(n)), s = hx(o - 1 | 0)(yn(Ne(i.value))), u = i.prng;
  return z((c) => {
    const a = fn(0)(1)(su(un(c))(u)), g = fn(-0.18)(0.3)(a.prng), _ = a.value < 0.7, d = fn(0.5)(0.85)(g.prng), l = Nx(t.offset)(d.prng)(r);
    return { path: e ? Tx(t)(s)(_)(g.value)(l) : zg(t)(l), alpha: d.value };
  })(It(0, t.passes - 1 | 0));
}, vx = (t) => (n) => (e) => Fr(t)(n)(!0)([
  { x: e.x, y: e.y },
  { x: e.x + e.w, y: e.y },
  { x: e.x + e.w, y: e.y + e.h },
  { x: e.x, y: e.y + e.h },
  { x: e.x, y: e.y }
]), wx = (t) => (n) => (e) => {
  const r = Ge(0)(dr(1)(e)), o = n.h / ot(4), i = Ge(6)(o * 1.4);
  return yt((s) => s)(z((s) => {
    if (r < Ge(0)(ot(s) / ot(4) - 0.05))
      return x;
    const u = su(un(s))(t), c = Ge(0)(ot(s) / ot(4) - 0.05), a = Me(s)(2) === 0, g = a ? n.x - 2 : n.x + n.w + 2, _ = a ? n.x + n.w + 2 : n.x - 2, d = n.y + (ot(s) + 0.5) * o;
    return v(
      "Just",
      {
        path: Dg(Ge(0)(dr(1)((r - c) / Ge(1e-4)(dr(1)(ot(s + 1 | 0) / ot(4) + 0.05) - c))))((() => {
          const l = { rMax: 2, offset: 0.6, passes: 1 }, h = wn(J(($) => (m) => {
            const y = fn(-o * 0.08)(o * 0.08)($.prng);
            return { prng: y.prng, out: [{ x: g + (_ - g) * (ot(m) / ot(4)), y: d + y.value }, ...$.out] };
          })({ prng: u, out: [] })(It(0, 4)).out), p = h.length < 2 ? [] : Fr(l)(u)(!1)(h);
          return 0 < p.length ? p[0].path : [];
        })()),
        width: i,
        alpha: 1
      }
    );
  })(It(0, 3)));
}, Os = (t, n, e) => ({ tag: t, _1: n, _2: e }), qg = (t) => t, zs = (t, n, e) => ({ tag: t, _1: n, _2: e }), Oi = (t) => (n) => (e) => {
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
}, Yg = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Bo = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Xg = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
      o = !1, i = x;
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
}, In = /* @__PURE__ */ (() => {
  const t = ee.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), ze = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, kx = Dt.foldMap(O_), $i = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Vg = /* @__PURE__ */ nn(C)(Dt), bx = /* @__PURE__ */ Bf(C), Lx = (t) => (e) => {
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
}, yc = /* @__PURE__ */ qg("LabelsShown"), Ex = /* @__PURE__ */ qg("LabelsHidden"), Ug = (t) => {
  const n = t.Monad0().Bind1(), e = t.popTransform, r = t.popAlpha;
  return (o) => (i) => (s) => (u) => (c) => n.bind(t.pushAlpha(o.fadeAlpha))(() => n.bind(t.pushTransform({
    tx: i * (1 - o.popScale),
    ty: s * (1 - o.popScale),
    sx: o.popScale,
    sy: o.popScale
  }))(() => n.bind(t.pushTransform({ tx: 0, ty: u.y * (1 - o.flipY), sx: 1, sy: o.flipY }))(() => n.bind(c)(() => n.bind(e)(() => n.bind(e)(() => r))))));
}, te = (t) => {
  const n = t.Apply0();
  return (e) => J((r) => (o) => n.apply(n.Functor0().map((i) => Nf)(r))(e(o)))(t.pure());
}, Kg = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = Ur(o)(i)(r), a = 0 < t.length ? v("Just", t[0]) : x, g = (() => {
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
  })(), h = za(128)(Nr(4)(Kr(2)(n)))(Ua(g)(6)), p = g.x - u.x, $ = 2 * (() => {
    const B = g.y - u.y;
    return (p < 0 ? -p : p) + (B < 0 ? -B : B);
  })(), m = l.x - s.x, y = 2 * (() => {
    const B = l.y - s.y;
    return (m < 0 ? -m : m) + (B < 0 ? -B : B);
  })(), N = $ + zo(t) + y, T = N <= 1e-4 ? 1 : 1 - y / N, w = N <= 1e-4 ? 0 : $ / N, k = T - w, L = za(128)(Ua(l)(6))(Nr(4)(Kr(2)(e))), P = { maxDelay: 0.4, smoothPasses: 2 }, O = mr(t)(Oi(0)(1)(k <= 1e-4 ? 0 : (c - w) / k)), X = (() => {
    if (O.tag === "Just")
      return O._1;
    if (O.tag === "Nothing")
      return g;
    f();
  })(), V = (() => {
    if (T >= 1)
      return 0;
    const B = (c - T) / (1 - T), et = B < 0 ? 0 : B > 1 ? 1 : B;
    return et * et * (3 - 2 * et);
  })(), A = (() => {
    if (w <= 1e-4)
      return 1;
    const B = c / w, et = B < 0 ? 0 : B > 1 ? 1 : B;
    return et * et * (3 - 2 * et);
  })();
  return c < w ? zs("PolyShape", Ya(A)(h.from)(h.to)(P)) : c >= T ? zs("PolyShape", Ya(V)(L.from)(L.to)(P)) : zs("CircleShape", X, 6);
}, Mg = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Kg(t)(n)(e)(r)(o)(i);
  if (s.tag === "PolyShape")
    return Wg(s._1);
  if (s.tag === "CircleShape")
    return s._1;
  f();
}, Sx = (t) => (n) => {
  const e = t.y + t.h - 6, r = t.y + 6, o = t.x + 14, i = t.x + t.w - 14, s = J(Bo)(0)(z((u) => o - 10 < u.x + u.w + 12 && i + 10 > u.x - 12 && r - 10 < u.y + u.h + 12 && e + 10 > u.y - 12 ? Yg((u.x + u.w + 12 - (o - 10)) / 0.7071067811865476)((e + 10 - (u.y - 12)) / 0.7071067811865476) : 0)(n));
  return { ...t, x: t.x + s * 0.7071067811865476, y: t.y - s * 0.7071067811865476 };
}, Cx = (t) => (n) => (e) => J((r) => (o) => {
  const i = Xg(o)(n);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just") {
    const s = Sx(i._1)(r.obstacles);
    return { acc: U(C)(o)(s)(r.acc), obstacles: Bt(r.obstacles)(s) };
  }
  f();
})({ acc: I, obstacles: e })(t).acc, Nc = /* @__PURE__ */ (() => {
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
        chipText: Se,
        nodeFill: rn,
        nodeStroke: Se,
        text: Se,
        edge: Se,
        arrowFill: Se,
        tokenOutsideFill: Se,
        tokenOutsideStroke: rn,
        tokenInside: rn,
        tokenInsideStroke: rn,
        tokenInsideBlend: pi,
        tokenInsideAlpha: 1,
        chipPillFill: Se,
        chipPillText: rn,
        chipHairline: { r: 26, g: 26, b: 26, a: 90 },
        trailDot: Se,
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
        nodeFill: Se,
        nodeStroke: n,
        text: n,
        edge: n,
        arrowFill: n,
        tokenOutsideFill: rn,
        tokenOutsideStroke: rn,
        tokenInside: rn,
        tokenInsideStroke: rn,
        tokenInsideBlend: pi,
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
        shadowDot: rn,
        chip: rn,
        chipShadow: { r: 0, g: 0, b: 0, a: 120 },
        chipText: o,
        nodeFill: o,
        nodeStroke: rn,
        text: rn,
        edge: rn,
        arrowFill: rn,
        tokenOutsideFill: rn,
        tokenOutsideStroke: rn,
        tokenInside: rn,
        tokenInsideStroke: rn,
        tokenInsideBlend: Qa,
        tokenInsideAlpha: 0.35,
        chipPillFill: rn,
        chipPillText: o,
        chipHairline: { r: 255, g: 255, b: 255, a: 120 },
        trailDot: rn,
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
        tokenInsideBlend: Qa,
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
        tokenOutsideStroke: rn,
        tokenInside: rn,
        tokenInsideStroke: rn,
        tokenInsideBlend: pi,
        tokenInsideAlpha: 1,
        chipPillFill: s,
        chipPillText: rn,
        chipHairline: { r: 60, g: 66, b: 78, a: 90 },
        trailDot: s,
        wobble: !1,
        fontFamily: "Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    f();
  };
})(), ku = (t) => (n) => Tt(In(t.nodes))((e) => {
  const r = _n(e._1)(n.nodes);
  return r.tag === "Just" && $s(r._1).alpha > 0 ? ZN(e._2) : [];
}), Px = (t) => (n) => (e) => [
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
  ...ku(n)(e)
], Gx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = xr.traverse(r);
  return (i) => (s) => {
    const u = sr(s), c = 0.32 * i.size;
    return o((a) => e.bind(a === 0 ? r.pure(0) : t.measureText(i)(Nn(a)(s)))((g) => e.bind(t.measureText(i)(Nn(a + 1 | 0)(s)))((_) => e.bind(t.measureInk(i)(a >= 0 && a < u.length ? rs(u[a]) : " "))((d) => r.pure({ x: g, w: _ - g, up: d.ascent - c, down: d.descent + c })))))(It(
      0,
      u.length - 1 | 0
    ));
  };
}, Ax = (t) => (n) => {
  const e = (o) => (o.x - n.x) * (o.x - n.x) + (o.y - n.y) * (o.y - n.y), r = J((o) => (i) => e(i) < e(o) ? i : o)({ x: t.x, y: t.y })([{ x: t.x, y: t.y }, { x: t.x + t.w, y: t.y }, { x: t.x, y: t.y + t.h }, { x: t.x + t.w, y: t.y + t.h }]);
  return z((o) => {
    const i = ot(o) / 5;
    return { x: r.x + (n.x - r.x) * i, y: r.y + (n.y - r.y) * i };
  })([1, 2, 3, 4]);
}, xc = (t) => {
  const n = ss(`
`)(t);
  return n.length === 0 ? [""] : n;
}, Ix = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = Ur(o)(i)(r), a = 0 < t.length ? v("Just", t[0]) : x, g = (() => {
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
  })(), h = g.x - u.x, p = 2 * (() => {
    const P = g.y - u.y;
    return (h < 0 ? -h : h) + (P < 0 ? -P : P);
  })(), $ = l.x - s.x, m = 2 * (() => {
    const P = l.y - s.y;
    return ($ < 0 ? -$ : $) + (P < 0 ? -P : P);
  })(), y = p + zo(t) + m, N = y <= 1e-4 ? 1 : 1 - m / y, T = y <= 1e-4 ? 0 : p / y, w = N - T, k = mr(t)(Oi(0)(1)(w <= 1e-4 ? 0 : (c - T) / w)), L = (() => {
    if (k.tag === "Just")
      return k._1;
    if (k.tag === "Nothing")
      return g;
    f();
  })();
  return c < T ? Os("InsideRect", Kr(2)(n)) : c >= N ? Os("InsideRect", Kr(2)(e)) : Os("InsideBall", L, 6);
}, Fx = { offset: 0.8, passes: 2, rMax: 5 }, Rx = (t) => {
  const n = t.Monad0().Applicative0(), e = te(n);
  return (r) => (o) => (i) => (s) => {
    const u = { color: s, width: 1, lineJoin: vn, lineCap: _e }, c = { color: i, flat: !0 }, a = (g) => t.drawRoundedRect({ x: g.x, y: g.y, w: g.w, h: g.h })(4)(v("Just", c))(v("Just", u));
    return e((g) => {
      if (g._2.tag === "Travelling") {
        const _ = ze(g._2._1.edge)(r.edges), d = _n(g._2._1.target)(r.nodes), l = _n(g._2._1.source)(r.nodes);
        if (l.tag === "Just" && d.tag === "Just" && _.tag === "Just") {
          const h = Ix((() => {
            if (g._2._1.direction === "Forward")
              return _._1;
            if (g._2._1.direction === "Backward")
              return wn(_._1);
            f();
          })())(l._1)(d._1)(g._2._1.progress)(g._2._1.holdPre)(g._2._1.holdPost);
          if (h.tag === "InsideRect")
            return a(h._1);
          if (h.tag === "InsideBall")
            return t.fillStrokePath(ms(h._1)(h._2))(c)(u);
          f();
        }
        return n.pure();
      }
      if (g._2.tag === "Filling") {
        const _ = _n(g._2._1.node)(r.nodes);
        if (_.tag === "Just")
          return a(Kr(2)(_._1));
        if (_.tag === "Nothing")
          return n.pure();
        f();
      }
      return n.pure();
    })(In(o.tokens));
  };
}, nf = (t) => (n) => (e) => (r) => t.strokePath((() => {
  const o = Qt(
    (i) => x,
    (i) => (s) => v("Just", { head: i, tail: s }),
    z((i) => i.pt)(J_(
      (i) => (s) => {
        const u = ot(s) / ot(72), c = fn(-0.18)(0.18)(i.prng), a = fn(-0.1)(0.1)(c.prng), g = fn(-0.07)(0.07)(a.prng), _ = e * (0.05 + 0.55 * u) * (1 + a.value), d = u * 28.274333882308138 + c.value;
        return { prng: g.prng, pt: { x: n.x + ie(d) * _ + g.value * e, y: n.y + Kn(d) * _ + g.value * e } };
      },
      { prng: 137, pt: { x: n.x, y: n.y } },
      It(0, 72)
    ))
  );
  if (o.tag === "Just")
    return [1, o._1.head.x, o._1.head.y, ...kx((i) => [2, i.x, i.y])(o._1.tail)];
  if (o.tag === "Nothing")
    return [];
  f();
})())({ color: r, width: 5.5, lineJoin: vn, lineCap: ye }), Bx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = te(n.Applicative0());
  return (i) => (s) => (u) => o((c) => e.bind(t.pushAlpha(c.alpha))(() => e.bind(t.strokePath(c.path)({
    color: i.nodeFill,
    width: c.width,
    lineJoin: vn,
    lineCap: ye
  }))(() => r)))(wx(Hg(s) + 7777 | 0)(s)(u));
}, jg = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = n.Applicative0(), i = te(o), s = t.popClip, u = te(o), c = xr.traverse(o), a = Gx(t), g = Bx(t), _ = t.popTransform;
  return (d) => (l) => (h) => (p) => ($) => (m) => (y) => {
    const N = (R) => e.bind(t.pushAlpha(R.alpha))(() => e.bind(t.strokePath(R.path)({
      color: l.nodeStroke,
      width: 2,
      lineJoin: vn,
      lineCap: ye
    }))(() => r)), T = { family: l.fontFamily, size: l.wobble ? 15 : 11, weight: l.wobble ? 800 : 500 }, w = ss(`
`)(m.label === "" ? $ : m.label), k = w.length === 0 ? [""] : w, L = T.size * 1.2, P = m.shape === "Cylinder" ? t.strokePath(xN({ x: m.x, y: m.y, w: m.w, h: m.h }))({
      color: l.nodeStroke,
      width: 1.25,
      lineJoin: vn,
      lineCap: _e
    }) : o.pure(), O = (m.shape === "Cylinder" ? (m.y + (m.y + m.h + 5 - 2 * ue(m.h * 0.075)(m.w * 0.075))) / 2 : (m.y + m.y + m.h) / 2) - ot(k.length) * L / 2 + L / 2, X = y.tag === "PloppingOut" && l.wobble ? y._1 : -1, V = X >= 0, A = $s(y), B = V ? { alpha: 1, scale: 1 } : A, et = m.x + m.w / 2, st = m.y + m.h / 2, Y = e.bind(t.pushAlpha(B.alpha * h))(() => e.bind(t.pushTransform({
      tx: et * (1 - B.scale),
      ty: st * (1 - B.scale),
      sx: B.scale,
      sy: B.scale
    }))(() => {
      const R = { x: m.x, y: m.y, w: m.w, h: m.h }, E = {
        color: l.nodeStroke,
        width: l.wobble ? 2 : 1.25,
        lineJoin: vn,
        lineCap: l.wobble ? ye : _e
      };
      return e.bind((() => {
        if (l.wobble) {
          if (m.shape === "Rectangle")
            return i(N)(vx(tf)(Hg(R))(R));
          const S = Nr(7)(m);
          return e.bind(i(N)((() => {
            const H = Ro(S);
            return S.length < 4 ? [] : Fr(Za)(H)(!0)(S);
          })()))(() => u((H) => i(N)((() => {
            const G = Ro(H);
            return H.length < 2 ? [] : Fr(Za)(G)(!1)(H);
          })()))(m.shape === "Cylinder" ? [cx(m)] : []));
        }
        return e.bind(Rg(t)(m.shape)(R)(7)(v("Just", { color: l.nodeFill, flat: !1 }))(v(
          "Just",
          E
        )))(() => P);
      })())(() => e.bind((() => {
        if (p.tag === "Just" && l.wobble && !V) {
          const S = p._1;
          return e.bind(c(a(T))(k))((H) => {
            const G = Lt((K) => (j) => at.compare(K.x)(j.x)), W = yn(Ne(m.x * 7919 + m.y * 3001)) * -1640531535 | 0, Q = fn(5)(7.5)(W), M = fn(0)(Q.value)(Q.prng), q = -(1 + 2 * fn(-1)(1)(M.prng).value * 3.141592653589793 / 180), D = (K, j, gt, _t, xt) => G(yt((Nt) => Nt)([
              q * j + K >= _t && q * j + K <= xt ? v("Just", { x: j, y: q * j + K }) : x,
              q * gt + K >= _t && q * gt + K <= xt ? v("Just", { x: gt, y: q * gt + K }) : x,
              (() => {
                const Nt = (_t - K) / q;
                return Nt >= j && Nt <= gt ? v("Just", { x: Nt, y: _t }) : x;
              })(),
              (() => {
                const Nt = (xt - K) / q;
                return Nt >= j && Nt <= gt ? v("Just", { x: Nt, y: xt }) : x;
              })()
            ])), rt = Q.value, Z = Me(S.frameHash)(3), nt = Z === 0 ? { r: 200, g: 35, b: 30, a: 220 } : Z === 1 ? { r: 35, g: 150, b: 80, a: 220 } : { r: 30, g: 80, b: 200, a: 220 }, tt = m.x + m.w / 2, ct = zn(Ft((K) => (j) => Ft((() => {
              const gt = O + ot(K) * L, _t = tt - J((xt) => (Nt) => xt + Nt.w)(0)(j) / 2;
              return (xt) => (Nt) => {
                const jt = T.size * 0.1, Ln = xt - 1 | 0, re = Ln >= 0 && Ln < j.length && xt > 0 ? (j[Ln].x + j[Ln].w + Nt.x) / 2 : Nt.x - jt;
                return {
                  x: _t + re - 1,
                  y: gt - Nt.up - 1,
                  w: Bo(0)((() => {
                    const Xn = xt + 1 | 0;
                    return Xn >= 0 && Xn < j.length && xt < (j.length - 1 | 0) ? (Nt.x + Nt.w + j[Xn].x) / 2 - re : Nt.x + Nt.w + jt - re;
                  })()) + 2,
                  h: Nt.up + Nt.down + 2
                };
              };
            })())(j))(H)), lt = m.y + 4, Wt = m.x + m.w - 4, vt = m.x + 4, Ht = lt - q * vt + M.value, pt = m.y + m.h - 4, Jt = Tt(Tt(Ft((K) => (j) => {
              const gt = (j.from.x + j.to.x) / 2, _t = (j.from.y + j.to.y) / 2, xt = fn(-1)(1)(W + (911 * (K + 1 | 0) | 0) | 0), Nt = fn(-3)(5)(xt.prng), jt = xt.value * 3.141592653589793 / 180, Ln = ie(jt), re = Kn(jt), Xn = (xn) => ({ x: gt + (xn.x - gt) * Ln - (xn.y - _t) * re, y: _t + (xn.x - gt) * re + (xn.y - _t) * Ln });
              return {
                from: (() => {
                  const xn = Xn(j.from), Pt = xn.y - _t, Gt = xn.x - gt, Hn = Sn(Gt * Gt + Pt * Pt), Vn = Hn < 1e-4 ? 1 : (Hn + Nt.value) / Hn;
                  return { x: gt + Gt * Vn, y: _t + Pt * Vn };
                })(),
                to: (() => {
                  const xn = Xn(j.to), Pt = fn(-3)(5)(Nt.prng).value, Gt = xn.y - _t, Hn = xn.x - gt, Vn = Sn(Hn * Hn + Gt * Gt), be = Vn < 1e-4 ? 1 : (Vn + Pt) / Vn;
                  return { x: gt + Hn * be, y: _t + Gt * be };
                })()
              };
            })(yt((K) => {
              const j = D(Ht + ot(K) * rt, vt, Wt, lt, pt);
              return j.length === 2 ? v("Just", { from: j[0], to: j[1] }) : x;
            })(It(0, $i(1)(yn(Ne((pt - q * Wt - Ht) / rt)))))))((K) => ft(
              (j) => j.to.x - j.from.x > 1,
              J((j) => (gt) => Tt(j)((_t) => {
                const xt = D(_t.from.y - q * _t.from.x, gt.x, gt.x + gt.w, gt.y, gt.y + gt.h);
                return xt.length === 2 ? xt[0].x > _t.from.x + 1e-3 && xt[1].x < _t.to.x - 1e-3 ? [{ from: _t.from, to: xt[0] }, { from: xt[1], to: _t.to }] : xt[0].x <= _t.from.x + 1e-3 && xt[1].x < _t.to.x - 1e-3 ? [{ from: xt[1], to: _t.to }] : xt[0].x > _t.from.x + 1e-3 && xt[1].x >= _t.to.x - 1e-3 ? [{ from: _t.from, to: xt[0] }] : [] : [_t];
              }))([K])(ct)
            )))((K) => (() => {
              const j = K.to.x - K.from.x;
              return Sn(2) * (j >= 0 ? j : -j) <= 28;
            })() ? [K] : [
              { from: K.from, to: { x: K.from.x + (K.to.x - K.from.x) * 0.495, y: K.from.y + (K.to.y - K.from.y) * 0.495 } },
              { from: { x: K.from.x + (K.to.x - K.from.x) * 0.505, y: K.from.y + (K.to.y - K.from.y) * 0.505 }, to: K.to }
            ]), $t = Jt.length, mt = (K) => Bo(0)(Yg(1)(S.t * ot($t) - ot(K)));
            return e.bind(t.pushClip($c(Nr(7)(m)))(Wi))(() => e.bind(i((K) => {
              const j = K._1, gt = fn(1.4)(1.9)(W + (1303 * (j + 1 | 0) | 0) | 0), _t = fn(0.35)(0.8)(gt.prng), xt = i((Nt) => e.bind(t.pushAlpha(Nt.alpha * _t.value))(() => e.bind(t.strokePath(Dg(mt(j))(Nt.path))({
                color: nt,
                width: gt.value,
                lineJoin: vn,
                lineCap: ye
              }))(() => r)))(Fr({ ...tf, rMax: 0, offset: 0.5 })(W + (53 * (j + 1 | 0) | 0) | 0)(!1)([K._2.from, K._2.to]));
              return mt(j) > 0 ? xt : o.pure();
            })(Ft(Oe)(Jt)))(() => s));
          });
        }
        return o.pure();
      })())(() => e.bind((() => {
        if (d === "LabelsShown")
          return i((S) => t.drawText({
            x: m.x + m.w / 2,
            y: O + ot(S._1) * L,
            content: S._2,
            font: T,
            color: l.text,
            align: to,
            baseline: or
          }))(Ft(Oe)(k));
        if (d === "LabelsHidden")
          return o.pure();
        f();
      })())(() => e.bind((() => {
        const S = g(l)(R)(X);
        return V ? S : o.pure();
      })())(() => e.bind(_)(() => r)))));
    }));
    return B.alpha * h > 0 ? Y : o.pure();
  };
}, Qx = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = jg(t), i = t.popAlpha, s = te(e);
  return (u) => (c) => (a) => {
    const g = { ...u, nodeFill: u.text, text: u.nodeFill, nodeStroke: u.nodeFill };
    return s((_) => {
      const d = _n(_._1)(a.nodes), l = _n(_._1)(c.nodes), h = (() => {
        if (l.tag === "Just" && d.tag === "Just") {
          const p = d._1, $ = l._1;
          return r.bind(t.pushAlpha(_._2))(() => r.bind(o(yc)(g)(1)(x)(_._1)($)(p))(() => i));
        }
        return e.pure();
      })();
      return _._2 > 0 ? h : e.pure();
    })(In(a.nodeInvert));
  };
}, Wx = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = te(e);
  return (i) => (s) => (u) => {
    const c = { family: i.fontFamily, size: 11, weight: 500 };
    return o((a) => {
      if (a._2 === "" || (() => {
        const d = ze(a._1)(u.edges);
        return d.tag === "Nothing" || !(d.tag === "Just" && d._1.tag === "Extended");
      })())
        return e.pure();
      const g = ze(a._1)(s.edges), _ = (() => {
        if (g.tag === "Just")
          return mr(g._1)(0.5);
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
            align: to,
            baseline: or
          }));
        });
      }
      f();
    })(In(s.edgeLabels));
  };
}, Zg = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => (i) => r ? n.bind(t.clearBackground(e.bgTransparent))(() => t.setViewport(i)) : e.wobble ? n.bind(t.setViewport(i))(() => t.clearBackground(e.bg)) : n.bind(t.setViewport(i))(() => t.backgroundDots({
    viewport: i,
    bgColor: e.bg,
    dotColor: e.bgDot,
    tile: 12 * o,
    dotRadius: 0.7 * o
  }));
}, Hx = (t) => {
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
    })(), p = Kg(c)(a)(g)(_)(d)(l);
    if (p.tag === "CircleShape")
      return i ? nf(t)(p._1)(p._2)({ r: 200, g: 35, b: 30, a: 220 }) : t.fillStrokePath(ms(p._1)(p._2))({ color: s, flat: !0 })({
        color: u,
        width: 1,
        lineJoin: vn,
        lineCap: _e
      });
    if (p.tag === "PolyShape" && i && p._1.length >= 3)
      return r.bind(t.pushAlpha(h))(() => r.bind(nf(t)(Wg(p._1))(6)({
        r: 200,
        g: 35,
        b: 30,
        a: 220
      }))(() => o));
    if (p.tag === "PolyShape")
      return i ? e.pure() : p._1.length >= 3 ? t.fillStrokePath($c(p._1))({ color: s, flat: !0 })({
        color: u,
        width: 1,
        lineJoin: vn,
        lineCap: _e
      }) : e.pure();
    f();
  };
}, Dx = (t) => {
  const n = t.Monad0().Bind1(), e = t.popAlpha;
  return (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
    const g = Ur(c)(a)(u), _ = { x: i.x + i.w / 2, y: i.y + i.h / 2 }, d = { x: s.x + s.w / 2, y: s.y + s.h / 2 }, l = (h, p) => n.bind(t.pushAlpha(p))(() => n.bind(t.fillStrokePath(ms(h)(6))({
      color: r,
      flat: !0
    })({ color: o, width: 1, lineJoin: vn, lineCap: _e }))(() => e));
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
}, zi = (t) => {
  const n = Hx(t), e = Dx(t), r = t.Monad0().Applicative0(), o = te(r);
  return (i) => (s) => (u) => (c) => (a) => o((g) => {
    if (g._2.tag === "Travelling") {
      const _ = _n(g._2._1.target)(s.nodes), d = _n(g._2._1.source)(s.nodes);
      if (d.tag === "Just" && _.tag === "Just") {
        const l = ze(g._2._1.edge)(s.edges);
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
      const _ = _n(g._2._1.node)(s.nodes);
      if (_.tag === "Just")
        return t.fillStrokePath($c(Nr(4)(Kr(2)(_._1))))({
          color: c,
          flat: !0
        })({ color: a, width: 1, lineJoin: vn, lineCap: _e });
      if (_.tag === "Nothing")
        return r.pure();
      f();
    }
    return r.pure();
  })(In(u.tokens));
}, tl = (t) => {
  const n = zi(t), e = t.Monad0(), r = e.Bind1(), o = zi(t), i = Rx(t), s = t.popClip, u = t.popBlend, c = t.popLayer, a = e.Applicative0(), g = te(a), _ = t.popAlpha;
  return (d) => (l) => (h) => (p) => {
    const $ = l.wobble ? n(!0)(h)(p)(l.tokenInside)(l.tokenInsideStroke) : r.bind(t.insideTokenStyle(d))((m) => {
      if (m === "GenieSilhouette")
        return o(!1)(h)(p)(l.tokenInside)(l.tokenInsideStroke);
      if (m === "ConvexAbsorb")
        return i(h)(p)(l.tokenInside)(l.tokenInsideStroke);
      f();
    });
    if (l.tokenInsideBlend === "Difference")
      return r.bind(t.pushLayer(sN))(() => r.bind(t.pushBlend(pi))(() => r.bind(t.pushClip(ku(h)(p))(Wi))(() => r.bind($)(() => r.bind(s)(() => r.bind(u)(() => r.bind(c)(() => r.bind(t.pushLayer(uN))(() => r.bind(g((m) => {
        const y = _n(m._1)(p.nodes);
        return y.tag === "Just" && $s(y._1).alpha > 0 ? Rg(t)(m._2.shape)({ x: m._2.x, y: m._2.y, w: m._2.w, h: m._2.h })(7)(v(
          "Just",
          { color: rn, flat: !1 }
        ))(x) : a.pure();
      })(In(h.nodes)))(() => c)))))))));
    if (l.tokenInsideBlend === "Normal")
      return r.bind(t.pushClip(ku(h)(p))(Wi))(() => r.bind(t.pushAlpha(l.tokenInsideAlpha))(() => r.bind($)(() => r.bind(_)(() => s))));
    f();
  };
}, nl = (t) => {
  const n = t.Monad0().Bind1(), e = zi(t), r = zi(t), o = t.popClip, i = t.popLayer;
  return (s) => (u) => (c) => (a) => n.bind(t.pushLayer(iN))(() => n.bind(t.pushClip(Px(u)(c)(a))(aN))(() => n.bind(s.wobble ? e(!0)(c)(a)(s.tokenOutsideFill)(s.tokenOutsideStroke) : r(!1)(c)(a)(s.tokenOutsideFill)(s.tokenOutsideStroke))(() => n.bind(o)(() => i))));
}, Ox = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = te(r);
  return (i) => (s) => (u) => (c) => (a) => (g) => {
    const _ = as(g).length, d = ot(_ + 1 | 0), l = (m) => {
      const y = (u * d - ot(m)) / 1.5, N = y < 0 ? 0 : y > 1 ? 1 : y;
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
    })(0), $ = p >= _ ? [] : gr((m) => l(m) > 0)(It(p, _ - 1 | 0)).init;
    return e.bind((() => {
      const m = t.drawText({
        x: c,
        y: a,
        content: Nn(p)(g),
        font: i,
        color: s,
        align: Ju,
        baseline: or
      });
      return p > 0 ? m : r.pure();
    })())(() => o((m) => e.bind(t.measureText(i)(Nn(m)(g)))((y) => {
      const N = l(m);
      return t.drawText({
        x: c + y,
        y: a - (1 - N) * 10,
        content: Nn(1)(No(rr(Nn(m)(g)))(g)),
        font: i,
        color: { ...s, a: yn(Ne(N * ot(s.a))) },
        align: Ju,
        baseline: or
      });
    }))($));
  };
}, Ns = (t) => (n) => (e) => (r) => {
  const o = z((h) => ot($i(1)(as(h).length)))(r), i = Bo(1)(J(Dr)(0)(o)), s = Ur(n)(e)(t), u = s * i, c = $i(1)(r.length), g = ((h) => (p) => ($) => {
    let m = h, y = p, N = $, T = !0, w;
    for (; T; ) {
      const k = m, L = y, O = Qt((X) => x, (X) => (V) => v("Just", { head: X, tail: V }), N);
      if (O.tag === "Nothing") {
        T = !1, w = $i(0)(c - 1 | 0);
        continue;
      }
      if (O.tag === "Just") {
        if (L + O._1.head >= u) {
          T = !1, w = k;
          continue;
        }
        m = k + 1 | 0, y = L + O._1.head, N = O._1.tail;
        continue;
      }
      f();
    }
    return w;
  })(0)(0)(o), _ = J(Dr)(0)(g < 1 ? [] : bt(0, g, o)), d = _ / i;
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
}, zx = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(Ns(r)(0)(0)(z(p_)(o)).line))((i) => {
    const s = i + 28;
    return n.Applicative0().pure({ x: e.x + e.w / 2 - s / 2, y: e.y - 25.2 - 14, w: s, h: 25.2 });
  });
}, qx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = zx(t), o = n.Applicative0(), i = xr.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => Vg(yt((a) => a)(c)))(i((c) => {
    if (c._2.tag === "Filling" && c._2._1.labels.length !== 0) {
      const a = _n(c._2._1.node)(s.nodes);
      if (a.tag === "Just")
        return e.bind(r(a._1)(c._2._1.progress)(c._2._1.labels))((g) => o.pure(v("Just", b(c._1, g))));
      if (a.tag === "Nothing")
        return o.pure(x);
      f();
    }
    return o.pure(x);
  })(In(u.tokens)));
}, Yx = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => (i) => (s) => (u) => (c) => {
    const a = Mg(e)(r)(o)(i)(s)(u);
    return n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(Ns(i)(s)(u)(Tt(c)(xc)).line))((g) => n.Applicative0().pure({
      x: a.x + 14 + g / 2 - g / 2 - 14,
      y: a.y - 6 - 8 - 6.6 - 6,
      w: g + 28,
      h: 25.2
    }));
  };
}, Xx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Yx(t), o = n.Applicative0(), i = xr.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => Vg(yt((a) => a)(c)))(i((c) => {
    if (c._2.tag === "Travelling" && c._2._1.labels.length !== 0) {
      const a = _n(c._2._1.target)(s.nodes), g = _n(c._2._1.source)(s.nodes), _ = ze(c._2._1.edge)(s.edges);
      if (_.tag === "Just" && g.tag === "Just" && a.tag === "Just")
        return e.bind(r((() => {
          if (c._2._1.direction === "Forward")
            return _._1;
          if (c._2._1.direction === "Backward")
            return wn(_._1);
          f();
        })())(g._1)(a._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost)(c._2._1.labels))((d) => o.pure(v(
          "Just",
          b(c._1, d)
        )));
    }
    return o.pure(x);
  })(In(u.tokens)));
}, Jc = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Xx(t), o = qx(t);
  return (i) => (s) => e.bind(r(i)(s))((u) => e.bind(o(i)(s))((c) => n.Applicative0().pure(Cx((() => {
    const a = (g) => {
      if (g.tag === "Leaf")
        return I;
      if (g.tag === "Node")
        return Ot("Node", g._1, g._2, g._3, void 0, a(g._5), a(g._6));
      f();
    };
    return Lt(C.compare)(Et(On.foldr, a(u)));
  })())(u)([
    ...yt((a) => {
      const g = _n(a._1)(s.nodes);
      return g.tag === "Just" && $s(g._1).alpha > 0 ? v("Just", { x: a._2.x, y: a._2.y, w: a._2.w, h: a._2.h }) : x;
    })(In(i.nodes)),
    ...(() => {
      const a = (g, _) => {
        if (g.tag === "Leaf")
          return _;
        if (g.tag === "Node")
          return a(g._5, qt("Cons", g._4, a(g._6, _)));
        f();
      };
      return Et(Xt.foldr, a(c, Yt));
    })()
  ]))));
}, el = (t) => (n) => (e) => {
  const r = vo(6)(0.55)(Oi(0)(1)((1 - t) / 0.06)), o = t > 0.94, i = o && e > 1e-4, s = vo(6)(0.55)(Oi(0)(1)(t / 0.06)), u = t < 0.06, c = u && n > 1e-4, a = o && e <= 1e-4;
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
}, Vx = (t) => {
  const n = t.Monad0().Bind1(), e = Ug(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const c = el(s)(0)(0), a = { family: r.fontFamily, size: 11, weight: 500 }, g = Ns(s)(0)(0)(Tt(u)(xc));
    return n.bind(t.measureText(a)(g.line))((_) => {
      const d = i.x + i.w / 2, l = _ + 28, h = i.y - 25.2 - 14, p = d - l / 2, $ = [1, d, h + 25.2, 2, d, i.y], m = { x: d, y: h + 12.6 };
      return e(c)(d - l / 2)(h + 25.2)(m)(n.bind(t.drawRoundedRect({ x: d - l / 2, y: h + 1.5, w: l, h: 25.2 })(6)(v(
        "Just",
        { color: r.chipShadow, flat: !0 }
      ))(x))(() => n.bind(t.drawRoundedRect({ x: p, y: h, w: l, h: 25.2 })(6)(v("Just", { color: r.chip, flat: !0 }))(v(
        "Just",
        { color: r.chipHairline, width: 1, lineJoin: vn, lineCap: _e }
      )))(() => n.bind(t.strokePath($)({
        color: r.chipHairline,
        width: 1,
        lineJoin: vn,
        lineCap: _e
      }))(() => t.drawText({
        x: d,
        y: m.y,
        content: g.line,
        font: a,
        color: r.chipText,
        align: to,
        baseline: or
      })))));
    });
  };
}, Ux = (t) => {
  const n = Ug(t), e = t.Monad0(), r = e.Bind1(), o = te(e.Applicative0()), i = Ox(t);
  return (s) => (u) => (c) => (a) => (g) => (_) => (d) => (l) => (h) => {
    const p = Ns(g)(_)(d)(Tt(l)(xc)), $ = p.line, m = p.phaseInLabel / 0.45, y = m < 0 ? 0 : m > 1 ? 1 : m, N = h.w, T = h.y, w = h.x, k = w + 14, L = h.h, P = T + L / 2;
    return n(el(g)(_)(d))(w)(T + L)({ x: w + N / 2, y: P })(r.bind(o((O) => t.fillPath(ms(O)(1.5))({
      color: s.trailDot,
      flat: !0
    }))(Ax(h)(Mg(u)(c)(a)(g)(_)(d))))(() => r.bind(t.drawRoundedRect({ x: w, y: T, w: N, h: L })(3)(v(
      "Just",
      { color: s.chipPillFill, flat: !0 }
    ))(x))(() => i({ family: s.fontFamily, size: 11, weight: 500 })(s.chipPillText)(y)(k)(P)($))));
  };
}, Tc = (t) => {
  const n = Ux(t), e = t.Monad0(), r = e.Applicative0(), o = Vx(t), i = e.Bind1(), s = te(r), u = t.popLayer;
  return (c) => (a) => (g) => (_) => i.bind(t.pushLayer(cN))(() => i.bind(s((d) => {
    if (d._2.tag === "Travelling") {
      if (d._2._1.labels.length !== 0) {
        const l = _n(d._2._1.target)(a.nodes), h = _n(d._2._1.source)(a.nodes), p = ze(d._2._1.edge)(a.edges), $ = Xg(d._1)(_);
        if ($.tag === "Just" && p.tag === "Just" && h.tag === "Just" && l.tag === "Just")
          return n(c)((() => {
            if (d._2._1.direction === "Forward")
              return p._1;
            if (d._2._1.direction === "Backward")
              return wn(p._1);
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
  })(In(g.tokens)))(() => u));
}, rl = (t) => {
  const n = Jc(t), e = Tc(t);
  return (r) => (o) => (i) => t.Monad0().Bind1().bind(n(o)(i))((s) => e(r)(o)(i)(s));
}, Kx = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => {
    const i = o.length - 1 | 0, s = i < 1 ? [] : bt(0, i, o), u = s.length - 1 | 0, c = u >= 0 && u < s.length ? v("Just", s[u]) : x, a = o.length - 1 | 0, g = a >= 0 && a < o.length ? v("Just", o[a]) : x;
    if (g.tag === "Just" && c.tag === "Just") {
      const _ = fn(0.78)(1.18)(Ro(o) + 19 | 0), d = fn(0.4)(0.62)(_.prng), l = r.wobble ? 8.75 * d.value : 4.375, h = fn(0.4)(0.62)(d.prng), p = r.wobble ? 8.75 * h.value : 4.375, $ = g._1.y - c._1.y, m = g._1.x - c._1.x, y = Sn(m * m + $ * $), N = $ / y, T = -N, w = m / y, k = g._1.x + w * 0.875, L = g._1.y + N * 0.875, P = r.wobble ? 8.75 * _.value : 8.75, O = k - w * P, X = L - N * P, V = O + T * l, A = X + w * l, B = [1, k, L, 2, O + T * 4.375, X + w * 4.375, 2, O - T * 4.375, X - w * 4.375, 5], et = O - T * p, st = X - w * p, Y = { color: r.arrowFill, width: 2, lineJoin: vn, lineCap: ye };
      return y <= 1e-4 ? e.pure() : r.wobble ? n.Bind1().bind(t.strokePath([1, V, A, 2, k, L])(Y))(() => t.strokePath([1, et, st, 2, k, L])(Y)) : t.fillPath(B)({ color: r.arrowFill, flat: !0 });
    }
    return e.pure();
  };
}, Mx = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = te(e), i = t.popAlpha, s = Kx(t);
  return (u) => (c) => (a) => (g) => {
    const _ = ex(8)(a);
    if (g.hi <= g.lo)
      return e.pure();
    const d = fx(_)(g.lo)(g.hi);
    if (d.length === 0)
      return e.pure();
    const l = { color: u.edge, width: u.wobble ? 2 : 0.9375, lineJoin: vn, lineCap: ye }, h = u.wobble ? fn(-10)(4)(Ro(d)).value : 0, p = u.wobble ? yx(h)(d) : d;
    return r.bind(u.wobble ? o(($) => r.bind(t.pushAlpha($.alpha))(() => r.bind(t.strokePath($.path)(l))(() => i)))((() => {
      const $ = Ro(d);
      return p.length < 2 ? [] : Fr(Fx)($)(!1)(p);
    })()) : t.strokePath(jN(d))(l))(() => {
      const $ = s(u)(p);
      return g.hi >= 0.999 ? $ : e.pure();
    });
  };
}, ol = (t) => {
  const n = Mx(t), e = t.Monad0().Applicative0(), r = te(e);
  return (o) => (i) => (s) => {
    const u = (c) => {
      const a = Ut((g) => c.x >= g._2.x - 1 && c.x <= g._2.x + g._2.w + 1 && c.y >= g._2.y - 1 && c.y <= g._2.y + g._2.h + 1)(In(i.nodes));
      return a.tag === "Just" ? v("Just", a._1._2) : x;
    };
    return r((c) => {
      const a = ze(c._1)(s.edges);
      if (a.tag === "Just")
        return n(o)(c._1)((() => {
          const g = (() => {
            if (0 < c._2.length) {
              const d = u(c._2[0]);
              if (d.tag === "Just")
                return wn(Ma(Nr(7)(d._1))(wn(c._2)));
            }
            return c._2;
          })(), _ = g.length - 1 | 0;
          if (_ >= 0 && _ < g.length) {
            const d = u(g[_]);
            if (d.tag === "Just")
              return Ma(Nr(7)(d._1))(g);
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
    })(In(i.edges));
  };
}, jx = (t) => (n) => {
  const e = (i) => {
    const s = _n(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !qn(
        (c) => 0 < c._2.length && c._2[0].x >= u.x && c._2[0].x <= u.x + u.w && c._2[0].y >= u.y && c._2[0].y <= u.y + u.h,
        In(t.edges)
      );
    }
    f();
  }, r = J((i) => (s) => (i * 31 | 0) + We(s) | 0)(5381)(sr(n.frameTitle)), o = (i) => {
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
        In(t.edges)
      );
    }
    f();
  };
  return J((i) => (s) => {
    const u = s._2;
    return bx((c) => {
      if (c.tag === "Nothing")
        return v("Just", u);
      if (c.tag === "Just")
        return v(
          "Just",
          { t: Bo(c._1.t)(u.t), angle: u.t >= c._1.t ? u.angle : c._1.angle, bigCircle: c._1.bigCircle || u.bigCircle, frameHash: c._1.frameHash }
        );
      f();
    })(s._1)(i);
  })(I)(Tt(In(n.tokens))((i) => {
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
              })() ? v("Just", c._2) : x)(In(t.edges));
              if (0 < u.length) {
                const c = u[0].length - 1 | 0, a = c < 1 ? [] : bt(0, c, u[0]), g = a.length - 1 | 0;
                if (g >= 0 && g < a.length) {
                  const _ = u[0].length - 1 | 0;
                  return _ >= 0 && _ < u[0].length ? lr(u[0][_].y - a[g].y)(u[0][_].x - a[g].x) : 0;
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
                const s = ze(i._2._1.edge)(t.edges);
                if (s.tag === "Just") {
                  const u = s._1.length - 1 | 0, c = u < 1 ? [] : bt(0, u, s._1), a = c.length - 1 | 0;
                  if (a >= 0 && a < c.length) {
                    const g = s._1.length - 1 | 0;
                    return g >= 0 && g < s._1.length ? lr(s._1[g].y - c[a].y)(s._1[g].x - c[a].x) : 0;
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
                const s = ze(i._2._1.edge)(t.edges);
                if (s.tag === "Just")
                  return 1 < s._1.length && 0 < s._1.length ? lr(s._1[1].y - s._1[0].y)(s._1[1].x - s._1[0].x) : 0;
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
}, Zx = (t) => J((n) => (e) => (n * 31 | 0) + We(e) | 0)(5381)(sr(t.frameTitle)), il = (t) => {
  const n = jg(t), e = t.Monad0().Applicative0(), r = te(e);
  return (o) => (i) => (s) => (u) => {
    const c = Zx(u), a = jx(s)(u);
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
          return d.tag === "Just" ? v("Just", d._1) : d.tag === "Nothing" && Lx(g._1)(u.visited) ? v("Just", { t: 1, angle: 0, bigCircle: !1, frameHash: c }) : x;
        })())(g._1)(g._2)(_._1);
      if (_.tag === "Nothing")
        return e.pure();
      f();
    })(In(s.nodes));
  };
}, sl = (t) => t, ul = (t) => (n) => {
  const e = n.vw / n.vh, r = n.vh * t, o = { ...n, vx: n.vx - (r - n.vw) / 2, vw: r }, i = n.vw / t, s = { ...n, vy: n.vy - (i - n.vh) / 2, vh: i };
  return t <= 0 || n.vw <= 0 || n.vh <= 0 ? n : t > e ? o : t < e ? s : n;
}, tJ = (t) => (n) => (e) => {
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
}, ef = (t) => (n) => (e) => {
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
}, rf = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, bu = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, nJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, eJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, rJ = (t) => (n) => {
  const e = Kn(t.angle), r = ie(t.angle);
  return { a: r, b: e, c: 0, d: 1, e: -n * r, f: n * e - t.boxHeight / 2 };
}, oJ = (t) => [t.box.ground.a, t.box.ground.b, t.box.ground.c, t.box.ground.d, t.box.top.a, t.box.top.b, t.box.top.c, t.box.top.d], Rr = (t) => (n) => {
  const e = (r) => tJ(0)(255)(yn(fr(ot(r) * t)));
  return { r: e(n.r), g: e(n.g), b: e(n.b), a: n.a };
}, En = (t) => (n) => (e) => (r) => ({ x: (n - e) * ie(t.angle), y: (n + e) * Kn(t.angle) - r }), hr = (t) => {
  const n = Qt((e) => x, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Tt(n._1.tail)((e) => [2, e.x, e.y]), 5];
  f();
}, iJ = (t) => (n) => (e) => (r) => (o) => {
  const i = (() => {
    if (t === "Forward")
      return o;
    if (t === "Backward")
      return wn(o);
    f();
  })();
  if (0 < i.length) {
    const u = mr(i)(ef(0)(1)(Ur(e)(r)(n)));
    if (u.tag === "Nothing")
      return i[0];
    if (u.tag === "Just")
      return u._1;
    f();
  }
  const s = mr(i)(ef(0)(1)(Ur(e)(r)(n)));
  if (s.tag === "Nothing")
    return { x: 0, y: 0 };
  if (s.tag === "Just")
    return s._1;
  f();
}, sJ = (t) => {
  const n = Qt((e) => x, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Tt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, uJ = (t) => {
  const n = Qt((e) => x, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { vx: 0, vy: 0, vw: 0, vh: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: rf(r.minX)(o.x), minY: rf(r.minY)(o.y), maxX: bu(r.maxX)(o.x), maxY: bu(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { vx: e.minX - 40, vy: e.minY - 40, vw: e.maxX - e.minX + 80, vh: e.maxY - e.minY + 80 };
  }
  f();
}, cJ = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => {
    const i = o.box, s = o.np, u = { color: r.nodeStroke, width: 1, lineJoin: vn, lineCap: _e };
    return n.bind(t.fillStrokePath(hr([i.ground.d, i.ground.c, i.top.c, i.top.d]))({ color: Rr(0.66)(r.nodeFill), flat: !0 })(u))(() => n.bind(t.fillStrokePath(hr([
      i.ground.b,
      i.ground.c,
      i.top.c,
      i.top.b
    ]))({ color: Rr(0.82)(r.nodeFill), flat: !0 })(u))(() => n.bind(t.fillStrokePath(hr([i.top.a, i.top.b, i.top.c, i.top.d]))({
      color: Rr(1)(r.nodeFill),
      flat: !0
    })(u))(() => t.drawTextAffine(rJ(e)(s.y + s.h))({
      x: s.x + s.w / 2,
      y: 0,
      content: s.label,
      font: { family: r.fontFamily, size: 11, weight: 600 },
      color: r.text,
      align: to,
      baseline: or
    }))));
  };
}, aJ = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => (i) => {
    const s = { color: r.tokenOutsideStroke, width: 1, lineJoin: vn, lineCap: _e }, u = i.x - 5.5, c = i.x + 5.5, a = i.y - 5.5, g = i.y + 5.5, _ = o + 11, d = En(e)(u)(a)(_), l = En(e)(c)(a)(_), h = En(e)(c)(g)(_), p = En(e)(u)(g)(_), $ = En(e)(c)(g)(o), m = En(e)(c)(a)(o);
    return n.bind(t.fillStrokePath(hr([En(e)(u)(g)(o), $, h, p]))({ color: Rr(0.66)(r.tokenOutsideFill), flat: !0 })(s))(() => n.bind(t.fillStrokePath(hr([
      m,
      $,
      h,
      l
    ]))({ color: Rr(0.82)(r.tokenOutsideFill), flat: !0 })(s))(() => t.fillStrokePath(hr([d, l, h, p]))({
      color: Rr(1)(r.tokenOutsideFill),
      flat: !0
    })(s)));
  };
}, fJ = (t) => {
  const n = aJ(t);
  return (e) => (r) => (o) => (i) => {
    if (i.tag === "Travelling") {
      const s = nJ(i._1.edge)(o.edges);
      return s.tag === "Just" ? v(
        "Just",
        (() => {
          const u = iJ(i._1.direction)(i._1.progress)(i._1.holdPre)(i._1.holdPost)(s._1);
          return { depth: u.x + u.y, draw: n(e)(r)(0)(u) };
        })()
      ) : x;
    }
    if (i.tag === "Filling") {
      const s = eJ(i._1.node)(o.nodes);
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
}, gJ = { angle: 0.5235987755982988, boxHeight: 26, transparentBg: !0 }, lJ = (t) => (n) => {
  const e = n.y + n.h, r = n.x + n.w;
  return {
    ground: { a: En(t)(n.x)(n.y)(0), b: En(t)(r)(n.y)(0), c: En(t)(r)(e)(0), d: En(t)(n.x)(e)(0) },
    top: { a: En(t)(n.x)(n.y)(t.boxHeight), b: En(t)(r)(n.y)(t.boxHeight), c: En(t)(r)(e)(t.boxHeight), d: En(t)(n.x)(e)(t.boxHeight) },
    depth: (n.x + r) / 2 + (n.y + e) / 2
  };
}, cl = (t) => (n) => z((e) => ({ np: e, box: lJ(t)(e) }))((() => {
  const e = (r, o) => {
    if (r.tag === "Leaf")
      return o;
    if (r.tag === "Node")
      return e(r._5, qt("Cons", r._4, e(r._6, o)));
    f();
  };
  return Et(Xt.foldr, e(n.nodes, Yt));
})()), _J = (t) => (n) => [
  ...Tt(cl(t)(n))(oJ),
  ...(() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, qt("Cons", r._4, e(r._6, o)));
      f();
    };
    return Tt(Et(Xt.foldr, e(n.edges, Yt)))(z((r) => En(t)(r.x)(r.y)(0)));
  })()
], dJ = (t) => {
  const n = t.to.y - t.from.y, e = t.to.x - t.from.x, r = bu(1e-4)(Sn(e * e + n * n)), o = n / r, i = e / r, s = t.to.y - o * 7, u = t.to.x - i * 7;
  return hr([t.to, { x: u - o * 3, y: s + i * 3 }, { x: u + o * 3, y: s - i * 3 }]);
}, hJ = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => (i) => (s) => (u) => {
    const c = En(r)(u.x)(u.y)(0), a = En(r)(s.x)(s.y)(0);
    return n.Bind1().bind(t.strokePath(sJ([a, c]))({
      color: o.edge,
      width: 1.5,
      lineJoin: vn,
      lineCap: ye
    }))(() => {
      const g = t.fillPath(dJ({ from: a, to: c }))({ color: o.arrowFill, flat: !0 });
      return i ? g : e.pure();
    });
  };
}, pJ = (t) => {
  const n = hJ(t);
  return (e) => (r) => (o) => {
    const i = kn(Oe, o, bt(1, o.length, o)), s = i.length - 1 | 0;
    return Ft((u) => (c) => ({ depth: (c._1.x + c._1.y + c._2.x + c._2.y) / 2, draw: n(e)(r)(u === s)(c._1)(c._2) }))(i);
  };
}, $J = (t) => {
  const n = cJ(t), e = fJ(t), r = pJ(t), o = t.Monad0(), i = Zg(t), s = Vi(o.Applicative0())(Dt);
  return (u) => (c) => (a) => (g) => {
    const _ = Nc(c), d = [
      ...(() => {
        const l = (h, p) => {
          if (h.tag === "Leaf")
            return p;
          if (h.tag === "Node")
            return l(h._5, qt("Cons", h._4, l(h._6, p)));
          f();
        };
        return Tt(Et(Xt.foldr, l(a.edges, Yt)))(r(u)(_));
      })(),
      ...z((l) => ({ depth: l.box.depth, draw: n(u)(_)(l) }))(cl(u)(a)),
      ...yt(e(u)(_)(a))((() => {
        const l = (h, p) => {
          if (h.tag === "Leaf")
            return p;
          if (h.tag === "Node")
            return l(h._5, qt("Cons", h._4, l(h._6, p)));
          f();
        };
        return Et(Xt.foldr, l(g.tokens, Yt));
      })())
    ];
    return o.Bind1().bind(i(_)(u.transparentBg)(1)(uJ(_J(u)(a))))(() => s((l) => l.draw)(Lt((l) => (h) => at.compare(l.depth)(h.depth))(d)));
  };
}, al = (t, n) => ({ tag: t, _1: n }), mJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, yJ = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, NJ = /* @__PURE__ */ al("ResolvedLabels"), xJ = (t) => {
  const n = Ut((e) => e.role === "FlyThrough")(t.levels);
  if (n.tag === "Just")
    return n._1;
  if (n.tag === "Nothing")
    return bi(t);
  f();
}, JJ = (t) => (n) => (e) => {
  const r = e.frameTitle === "" ? 0 : 40, o = ju(n)(e.camera);
  return (() => {
    if (t.outputAspect.tag === "Nothing")
      return sl;
    if (t.outputAspect.tag === "Just")
      return ul(t.outputAspect._1);
    f();
  })()({ vx: o.x - t.padding, vy: o.y - t.padding - r, vw: o.w + 2 * t.padding, vh: o.h + 2 * t.padding + r });
}, TJ = (t) => (n) => {
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just") {
    const e = mJ(n._1)(t.segment.layout.nodes);
    if (e.tag === "Nothing")
      return [];
    if (e.tag === "Just") {
      const r = e._1.x * t.segment.placement.scale + t.segment.placement.tx, o = e._1.y * t.segment.placement.scale + t.segment.placement.ty, i = e._1.w * t.segment.placement.scale, s = e._1.h * t.segment.placement.scale;
      return [1, r, o, 2, r + i, o, 2, r + i, o + s, 2, r, o + s, 5];
    }
  }
  f();
}, vJ = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => (o) => {
    if (r === "")
      return n.Applicative0().pure();
    const i = o.vh / 720, s = 56 * i, u = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: s, weight: 700 };
    return e.bind(t.measureText(u)(r))((c) => {
      const a = s + 16 * i * 2, g = c + 28 * i * 2, _ = o.vy + o.vh / 2, d = o.vx + o.vw / 2;
      return e.bind(t.drawRoundedRect({ x: d - g / 2, y: _ - a / 2, w: g, h: a })(16 * i)(v(
        "Just",
        { color: { r: 255, g: 255, b: 255, a: 235 }, flat: !0 }
      ))(v(
        "Just",
        { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1.5 * i, lineJoin: vn, lineCap: ye }
      )))(() => t.drawText({
        x: d,
        y: _,
        content: r,
        font: u,
        color: { r: 28, g: 30, b: 36, a: 255 },
        align: to,
        baseline: or
      }));
    });
  };
}, wJ = (t) => {
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
        { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1 * i, lineJoin: vn, lineCap: ye }
      )))(() => t.drawText({
        x: d,
        y: a + g / 2,
        content: r,
        font: u,
        color: { r: 28, g: 30, b: 36, a: 255 },
        align: to,
        baseline: or
      }));
    });
  };
}, kJ = (t) => {
  const n = rl(t), e = Tc(t), r = t.Monad0(), o = r.Bind1(), i = Zg(t), s = r.Applicative0(), u = ol(t), c = il(t)(yc), a = Qx(t), g = nl(t), _ = tl(t), d = Wx(t), l = vJ(t), h = wJ(t);
  return (p) => ($) => (m) => (y) => (N) => (T) => (w) => {
    const k = Nc(p.theme), L = (() => {
      if (w.tag === "ResolvedLabels")
        return n(k)(N)(T);
      if (w.tag === "SpringLabels")
        return e(k)(N)(T)(w._1);
      f();
    })();
    return o.bind(i(k)(p.transparentBg)($)(y))(() => o.bind((() => {
      const P = o.bind(u(k)(N)(T))(() => o.bind(c(k)(N)(T))(() => o.bind(a(k)(N)(T))(() => o.bind(g(k)(y)(N)(T))(() => o.bind(_(_N)(k)(N)(T))(() => o.bind(L)(() => {
        const O = d(k)(N)(T);
        return T.staticKind !== "Animated" ? O : s.pure();
      }))))));
      return m ? P : s.pure();
    })())(() => o.bind(p.watermark === "" ? t.Monad0().Applicative0().pure() : t.drawText({
      x: y.vx + 6,
      y: y.vy + 6,
      content: p.watermark,
      font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 9, weight: 600 },
      color: { r: 180, g: 180, b: 180, a: 255 },
      align: Ju,
      baseline: oN
    }))(() => T.staticKind === "TitleCard" ? l(T.frameTitle)(y) : h(T.frameTitle)(y))));
  };
}, bJ = (t) => {
  const n = t.Monad0(), e = rl(t), r = Tc(t), o = n.Bind1(), i = ol(t), s = il(t), u = nl(t), c = t.popTransform, a = tl(t), g = t.popBakedTransform, _ = t.popClip, d = t.popAlpha;
  return (l) => (h) => (p) => ($) => (m) => {
    const y = m.state, N = { tx: m.segment.placement.tx, ty: m.segment.placement.ty, sx: m.segment.placement.scale, sy: m.segment.placement.scale }, T = Nc(l.theme), w = m.segment.layout, k = jn(w), L = { vx: k.x - 1e3, vy: k.y - 1e3, vw: k.w + 2e3, vh: k.h + 2e3 }, P = 11 * m.segment.placement.scale * h >= 5 ? yc : Ex, O = (() => {
      if (P === "LabelsHidden")
        return n.Applicative0().pure();
      if (P === "LabelsShown")
        return p.tag === "Leaf" ? e(T)(w)(y) : r(T)(w)(y)(p);
      f();
    })(), X = TJ($)((() => {
      const V = m.segment.path.length - 1 | 0;
      return V >= 0 && V < m.segment.path.length ? v("Just", m.segment.path[V]) : x;
    })());
    return o.bind(t.pushAlpha(m.bgAlpha))(() => o.bind(t.pushClip(X)(Wi))(() => o.bind(t.pushTransform(N))(() => o.bind(i(T)(w)(y))(() => o.bind(s(P)(T)(w)(y))(() => o.bind(u(T)(L)(w)(y))(() => o.bind(c)(() => o.bind(t.pushBakedTransform(N))(() => o.bind(a(dN)(T)(w)(y))(() => o.bind(g)(() => o.bind(t.pushTransform(N))(() => o.bind(O)(() => o.bind(c)(() => o.bind(_)(() => d))))))))))))));
  };
}, LJ = (t) => (n) => {
  const e = ju(t)(n);
  return { vx: e.x, vy: e.y, vw: e.w, vh: e.h };
}, Mr = (t) => (n) => n.diving || n.levels.length > 1 ? (() => {
  if (t.outputAspect.tag === "Nothing")
    return sl;
  if (t.outputAspect.tag === "Just")
    return ul(t.outputAspect._1);
  f();
})()(LJ(n.rootLayout)(n.camera)) : JJ(t)(n.rootLayout)({ ...bi(n).state, camera: n.camera }), fl = (t) => {
  const n = $J(t), e = t.Monad0(), r = e.Applicative0(), o = e.Bind1(), i = bJ(t), s = kJ(t);
  return (u) => (c) => (a) => {
    if (u.theme === "Isometric")
      return n({ ...gJ, transparentBg: u.transparentBg })(u.theme)(bi(a).segment.layout)(bi(a).state);
    const g = Mr(u)(a), _ = (l) => (h) => {
      if (h.length === 0)
        return r.pure();
      const p = Qt(($) => x, ($) => (m) => v("Just", { head: $, tail: m }), h);
      if (p.tag === "Nothing")
        return r.pure();
      if (p.tag === "Just") {
        const $ = p._1.head, m = p._1.tail;
        return o.bind((() => {
          const y = i(u)(a.camera.zoom)($.role === "Active" ? c : I)(l)($);
          return a.diving || $.role === "Active" ? y : r.pure();
        })())(() => _($)(m));
      }
      f();
    }, d = Qt((l) => x, (l) => (h) => v("Just", { head: l, tail: h }), a.levels);
    if (d.tag === "Nothing")
      return r.pure();
    if (d.tag === "Just") {
      const l = d._1.tail, h = d._1.head;
      return o.bind(s(u)(a.hasDives ? g.vw / yJ(1)(jn(a.rootLayout).w) : 1)(h.role === "Active" || h.role === "FlyThrough")(g)(h.segment.layout)(xJ(a).state)(l.length === 0 && c.tag !== "Leaf" ? al("SpringLabels", c) : NJ))(() => _(h)(l));
    }
    f();
  };
}, of = (t) => (n) => (e) => {
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
}, EJ = /* @__PURE__ */ Jc(Qg), sf = /* @__PURE__ */ fl(Qg), uf = (t) => {
  const n = t.vx + t.vw - 4, e = t.vy + t.vh - 4, r = t.vx + 4, o = t.vy + 4, i = (s) => {
    if (s.tag === "Leaf")
      return I;
    if (s.tag === "Node")
      return Ot("Node", s._1, s._2, s._3, { ...s._4, x: of(r)(n - s._4.w)(s._4.x), y: of(o)(e - s._4.h)(s._4.y) }, i(s._5), i(s._6));
    f();
  };
  return i;
}, SJ = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
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
    outputAspect: r.width <= 0 || r.height <= 0 ? x : v("Just", r.width / r.height)
  }, c = LN(e)(r);
  return () => {
    const a = c(), g = o.levels.length - 1 | 0;
    if (g >= 0 && g < o.levels.length) {
      const d = EJ(o.levels[g].segment.layout)(o.levels[g].state)(a)(), l = xu(i)(uf(Mr(u)(o))(d))(s);
      return sf(u)(l.applied)(o)(a)(), l.springs;
    }
    const _ = xu(i)(uf(Mr(u)(o))(I))(s);
    return sf(u)(_.applied)(o)(a)(), _.springs;
  };
}, gl = (t) => t, Uo = (t) => t, cf = /* @__PURE__ */ Uo("Light"), CJ = /* @__PURE__ */ Uo("Dark"), PJ = /* @__PURE__ */ Uo("Blueprint"), GJ = /* @__PURE__ */ Uo("Whiteboard"), AJ = /* @__PURE__ */ Uo("Isometric"), IJ = /* @__PURE__ */ gl("PaintBackground"), FJ = /* @__PURE__ */ gl("TransparentBackground"), ir = (t) => "rgb(" + un(t.r) + "," + un(t.g) + "," + un(t.b) + ")", $e = /* @__PURE__ */ Hf(/* @__PURE__ */ Qf("Fixed", /* @__PURE__ */ Wf(0)(20)(4))), RJ = (t) => "translate(" + $e(t.tx) + "," + $e(t.ty) + ") scale(" + $e(t.sx) + "," + $e(t.sy) + ")", kt = /* @__PURE__ */ Hf(/* @__PURE__ */ Qf("Fixed", /* @__PURE__ */ Wf(0)(20)(2))), vc = (t) => {
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
  return us(" ")(n);
}, BJ = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, Lu = /* @__PURE__ */ (() => {
  const t = Ue("&")("&amp;"), n = Ue("<")("&lt;"), e = (() => {
    const r = Ue(">")("&gt;"), o = (() => {
      const i = Ue('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), QJ = (t) => {
  if (t.style === "RunText")
    return "<tspan>" + Lu(t.text) + "</tspan>";
  if (t.style === "RunCode")
    return `<tspan font-family="'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="400">` + Lu(t.text) + "</tspan>";
  f();
}, Bn = (t) => (n) => {
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
}, li = (t) => (n) => {
  const e = t.bake;
  return () => {
    const r = e.value;
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return WJ(r._1)(n);
    f();
  };
}, ll = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => BJ
}, HJ = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => ll
}, DJ = { pure: (t) => (n) => () => t, Apply0: () => ll }, OJ = { Applicative0: () => DJ, Bind1: () => HJ }, zJ = (t) => (n) => '<defs><pattern id="' + t + '" x="0" y="0" width="' + kt(n.tile) + '" height="' + kt(n.tile) + '" patternUnits="userSpaceOnUse">' + (n.bgColor.a === 0 ? "" : '<rect width="' + kt(n.tile) + '" height="' + kt(n.tile) + '" fill="' + ir(n.bgColor) + '" fill-opacity="' + kt(ot(n.bgColor.a) / 255) + '"/>') + '<circle cx="' + kt(n.tile / 2) + '" cy="' + kt(n.tile / 2) + '" r="' + kt(n.dotRadius) + '" fill="' + ir(n.dotColor) + '"/></pattern></defs><rect x="' + kt(n.viewport.vx) + '" y="' + kt(n.viewport.vy) + '" width="' + kt(n.viewport.vw) + '" height="' + kt(n.viewport.vh) + '" fill="url(#' + t + ')"/>', af = (t) => (n) => '<path d="' + vc(t) + '" fill="' + ir(n) + '" fill-opacity="' + kt(ot(n.a) / 255) + '"/>', qJ = (t) => (n) => (e) => (r) => '<rect x="' + kt(t.x) + '" y="' + kt(t.y) + '" width="' + kt(t.w) + '" height="' + kt(t.h) + '" rx="' + kt(n) + '"' + (() => {
  if (e.tag === "Just")
    return ' fill="' + ir(e._1.color) + '" fill-opacity="' + kt(ot(e._1.color.a) / 255) + '"';
  if (e.tag === "Nothing")
    return ' fill="none"';
  f();
})() + (() => {
  if (r.tag === "Just")
    return ' stroke="' + ir(r._1.color) + '" stroke-opacity="' + kt(ot(r._1.color.a) / 255) + '" stroke-width="' + kt(r._1.width) + '" stroke-linejoin="' + (() => {
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
})() + "/>", ff = (t) => (n) => '<path d="' + vc(t) + '" fill="none" stroke="' + ir(n.color) + '" stroke-opacity="' + kt(ot(n.color.a) / 255) + '" stroke-width="' + kt(n.width) + '" stroke-linejoin="' + (() => {
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
})() + '"/>', gf = (t) => {
  const n = w0(Xr(t.content));
  return '<text x="' + kt(t.x) + '" y="' + kt(t.y) + '"' + (() => {
    if (t.baseline === "BaselineTop")
      return ' dy="0.8em"';
    if (t.baseline === "BaselineMiddle")
      return ' dy="0.32em"';
    if (t.baseline === "BaselineAlphabetic" || t.baseline === "BaselineBottom")
      return "";
    f();
  })() + ' fill="' + ir(t.color) + '" fill-opacity="' + kt(ot(t.color.a) / 255) + '" font-size="' + kt(t.font.size) + '" font-family="Ilisarniq, ui-sans-serif, system-ui, sans-serif" font-weight="' + un(t.font.weight) + '" text-anchor="' + (() => {
    if (t.align === "AlignLeft")
      return "start";
    if (t.align === "AlignCenter")
      return "middle";
    if (t.align === "AlignRight")
      return "end";
    f();
  })() + '">' + (n.length === 1 && n[0].style === "RunText" ? Lu(n[0].text) : us("")(z(QJ)(n))) + "</text>";
}, YJ = (t) => "matrix(" + $e(t.a) + " " + $e(t.b) + " " + $e(t.c) + " " + $e(t.d) + " " + $e(t.e) + " " + $e(t.f) + ")", _l = {
  fillPath: (t) => (n) => (e) => {
    const r = li(e)(t);
    return () => {
      const o = r();
      return Bn(af(o)(n.color))(e)();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = li(e)(t);
    return () => {
      const o = r(), i = e.bake.value;
      return Bn(ff(o)((() => {
        if (i.tag === "Nothing")
          return n;
        if (i.tag === "Just")
          return { ...n, width: i._1.sx * n.width };
        f();
      })()))(e)();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = li(r)(t);
    return () => {
      const i = o(), s = r.bake.value;
      return Bn(af(i)(n.color) + ff(i)((() => {
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
      return Bn(qJ((() => {
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
      return Bn(gf((() => {
        if (r.tag === "Nothing")
          return t;
        if (r.tag === "Just")
          return { ...t, x: r._1.sx * t.x + r._1.tx, y: r._1.sy * t.y + r._1.ty, font: { ...t.font, size: r._1.sx * t.font.size } };
        f();
      })()))(n)();
    };
  },
  drawTextAffine: (t) => (n) => Bn((() => {
    const e = 'transform="' + YJ(t) + '"';
    return (e === "" ? "<g>" : "<g " + e + ">") + gf(n) + "</g>";
  })()),
  pushTransform: (t) => Bn((() => {
    const n = 'transform="' + RJ(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popTransform: /* @__PURE__ */ Bn("</g>"),
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
      const i = li(e)(t)(), s = "clip" + un(o);
      return Bn((() => {
        const u = 'clip-path="url(#' + s + ')"';
        return '<defs><clipPath id="' + s + '"><path d="' + vc(i) + '"' + (() => {
          if (n === "EvenOdd")
            return ' clip-rule="evenodd"';
          if (n === "NonZero")
            return "";
          f();
        })() + "/></clipPath></defs>" + (u === "" ? "<g>" : "<g " + u + ">");
      })())(e)();
    };
  },
  popClip: /* @__PURE__ */ Bn("</g>"),
  pushBlend: (t) => Bn((() => {
    const n = (() => {
      if (t === "Normal")
        return 'style="mix-blend-mode: normal"';
      if (t === "Difference")
        return 'style="mix-blend-mode: difference"';
      f();
    })();
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popBlend: /* @__PURE__ */ Bn("</g>"),
  pushAlpha: (t) => Bn((() => {
    const n = 'opacity="' + kt(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popAlpha: /* @__PURE__ */ Bn("</g>"),
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
  clearBackground: (t) => (n) => Bn('<rect x="' + kt(n.viewport.vx) + '" y="' + kt(n.viewport.vy) + '" width="' + kt(n.viewport.vw) + '" height="' + kt(n.viewport.vh) + '" fill="' + ir(t) + '" opacity="' + kt(ot(t.a) / 255) + '"/>')(n),
  backgroundDots: (t) => (n) => {
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      return n.patternCounter.value = r + 1 | 0, Bn(zJ("bg-dots-" + un(r))(t))(n)();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = mg(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = yg(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => bg,
  Monad0: () => OJ
}, XJ = /* @__PURE__ */ fl(_l), VJ = /* @__PURE__ */ Jc(_l), UJ = (t) => (n) => (e) => (r) => (o) => {
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
  }, s = Mr(i)(o);
  return {
    viewBox: kt(s.vx) + " " + kt(s.vy) + " " + kt(s.vw) + " " + kt(s.vh),
    body: (() => {
      const u = [], c = { value: 0 }, a = { value: 0 }, g = { value: 0 }, _ = { value: x };
      return XJ(i)(n)(o)({ out: u, maskDepth: c, clipCounter: a, patternCounter: g, viewport: s, bake: _ })(), us("")(u);
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
  }, u = xu(o)((() => {
    const c = [], a = { value: 0 }, g = { value: 0 }, _ = { value: 0 }, d = { value: x }, l = r.levels.length - 1 | 0;
    return l >= 0 && l < r.levels.length ? VJ(r.levels[l].segment.layout)(r.levels[l].state)({
      out: c,
      maskDepth: a,
      clipCounter: g,
      patternCounter: _,
      viewport: Mr(s)(r),
      bake: d
    })() : I;
  })())(i);
  return { parts: UJ(t)(u.applied)(n)(e)(r), springs: u.springs };
}, Ko = (t) => ({ bind: (n) => (e) => (r) => t.Bind1().bind(n(r))((o) => e(o._1)(o._2)), Apply0: () => dl(t) }), dl = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = { map: (r) => (o) => (i) => n.map((s) => b(r(s._1), s._2))(o(i)) };
  return {
    apply: (() => {
      const r = Ko(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => Mo(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, Mo = (t) => ({ pure: (n) => (e) => t.Applicative0().pure(b(n, e)), Apply0: () => dl(t) }), MJ = (t) => {
  const n = { Applicative0: () => Mo(t), Bind1: () => Ko(t) };
  return { state: (e) => (r) => t.Applicative0().pure(e(r)), Monad0: () => n };
}, wc = (t, n) => ({ tag: t, _1: n }), kc = (t) => t, qe = (t, n) => ({ tag: t, _1: n }), $n = /* @__PURE__ */ MJ(tr), Rt = /* @__PURE__ */ Ko(tr), An = $n.state((t) => b(t, t)), en = /* @__PURE__ */ Mo(tr), Be = (t) => (e) => {
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
}, hl = (t) => (e) => {
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
}, xs = /* @__PURE__ */ Vi(en)(Dt), Qe = (t) => (e) => {
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
}, jJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, ZJ = /* @__PURE__ */ (() => {
  const t = ee.unfoldr((n) => {
    if (n.tag === "Nil")
      return x;
    if (n.tag === "Cons")
      return v("Just", b(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, qt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Yt);
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
}, Js = (t) => (n) => (e) => J((r) => (o) => t.Bind1().bind(r)((i) => n(i)(o)))(t.Applicative0().pure(e)), nT = /* @__PURE__ */ J((t) => (n) => U(C)(n)()(t))(I), eT = /* @__PURE__ */ (() => {
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
  })(I);
  return (e) => n((() => {
    const r = (o, i) => {
      if (o.tag === "Leaf")
        return i;
      if (o.tag === "Node")
        return r(o._5, qt("Cons", o._3, r(o._6, i)));
      f();
    };
    return r(e, Yt);
  })());
})(), rT = /* @__PURE__ */ qe("Exit"), oT = /* @__PURE__ */ kc("AnimatedKeyframe"), iT = /* @__PURE__ */ kc("Still"), sT = /* @__PURE__ */ kc("Title"), uT = (t) => wc("Par", t), pl = (t) => wc("Seq", t), cT = (t) => (n) => (e) => {
  const r = pr(zt, x, (o) => o._1 === t, e);
  if (r.tag === "Just") {
    const o = nr(zt, x, r._1, b(t, n), e);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return o._1;
    f();
  }
  if (r.tag === "Nothing")
    return Bt(e)(b(t, n));
  f();
}, aT = (t) => (n) => z((e) => e._1 === t ? b(e._1, { ...e._2, label: v("Just", n) }) : b(e._1, e._2)), mn = (t) => $n.state((n) => b(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return { ...n, error: v("Just", { msg: t, line: n.currentLine, column: n.currentColumn }) };
    f();
  })()
)), fT = (t) => Rt.bind($n.state((n) => b(void 0, { ...n, currentLine: t.line, currentColumn: t.column })))(() => Rt.bind(An)((n) => {
  if (n.error.tag === "Just")
    return en.pure();
  if (n.error.tag === "Nothing") {
    if (t.op.tag === "Enter") {
      if (!Be(t.op._1.id)(n.currNodes))
        return mn("cannot enter node " + t.op._1.id + ": does not exist");
      if (!hl(t.op._1.id)(n.interiorOf))
        return mn("cannot enter node " + t.op._1.id + ": it has no `inside` block");
      if (Dn(le)(t.op._1.id)(n.enterStack))
        return mn("cannot enter node " + t.op._1.id + ": already entered");
      const e = t.op._1;
      return $n.state((r) => b(
        void 0,
        { ...r, enterStack: Bt(r.enterStack)(e.id), scenes: Bt(r.scenes)(qo("EnterNode", e.id)) }
      ));
    }
    if (t.op.tag === "Exit") {
      const e = Do(n.enterStack);
      if (e.tag === "Nothing")
        return mn("`exit` without a matching `enter`");
      if (e.tag === "Just") {
        const r = e._1.init;
        return $n.state((o) => b(void 0, { ...o, enterStack: r, scenes: Bt(o.scenes)(j1) }));
      }
      f();
    }
    return en.pure();
  }
  f();
})), gT = (t) => Rt.bind(An)((n) => {
  const e = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + un(n.kfCounter);
  if (qn((o) => o.id === e, n.keyframes))
    return mn("duplicate frame name " + e);
  const r = {
    ...n,
    keyframes: Bt(n.keyframes)({ id: e, nodes: n.currNodes, edges: n.currEdges, kind: Yo }),
    kfCounter: n.kfCounter + 1 | 0,
    currentKf: v("Just", e)
  };
  return $n.state((o) => b(void 0, r));
}), lT = /* @__PURE__ */ xs((t) => Rt.bind(An)((n) => {
  if (n.error.tag === "Just")
    return en.pure();
  if (n.error.tag === "Nothing")
    return hl(t.node)(n.interiorOf) ? mn("node " + t.node + " has more than one `inside` block") : $n.state((e) => b(void 0, { ...e, interiorOf: U(C)(t.node)(t.doc)(e.interiorOf) }));
  f();
})), _T = (t) => (n) => {
  const e = n.from + "->" + n.to, r = n.newFrom + "->" + n.newTo, o = St("Left", "cannot repoint " + n.from + "→" + n.to + ": edge does not exist"), i = Qe(e)(t.currEdges) ? St("Right", void 0) : o;
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
    if (!Be(n.newFrom)(t.currNodes))
      return St("Left", s);
    const u = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newTo;
    if (!Be(n.newTo)(t.currNodes))
      return St("Left", u);
    const c = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": target edge already exists";
    return e !== r && Qe(r)(t.currEdges) ? St("Left", c) : St(
      "Right",
      {
        nextCurrEdges: U(C)(r)()(yo(C)(e)(t.currEdges)),
        newId: r,
        newEdge: { id: r, from: { node: n.newFrom, port: x }, to: { node: n.newTo, port: x }, label: x }
      }
    );
  });
}, $l = {
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
}, dT = Rt.bind(An)((t) => {
  if (t.error.tag === "Just")
    return en.pure();
  if (t.error.tag === "Nothing") {
    if (t.currentKf.tag === "Just") {
      const n = t.currentKf._1;
      return $n.state((e) => b(void 0, { ...e, scenes: Bt(e.scenes)(qo("Hold", n)) }));
    }
    if (t.currentKf.tag === "Nothing")
      return en.pure();
  }
  f();
}), lf = (t) => (n) => Rt.bind(An)((e) => {
  const r = "ev-" + un(e.eventCounter);
  return Rt.bind((() => {
    const o = { ...e, eventCounter: e.eventCounter + 1 | 0 };
    return $n.state((i) => b(void 0, o));
  })())(() => en.pure({ events: [{ id: r, kind: n, when: t }], firstId: v("Just", r), lastId: v("Just", r) }));
}), hT = (t) => (n) => {
  if (n.tag === "Token") {
    const e = n._1;
    return Rt.bind(An)((r) => {
      const o = !Be(e.from)(r.currNodes), i = !Be(e.to)(r.currNodes);
      if (o || i)
        return Rt.bind(mn(o ? i ? "token references unknown node: " + e.from + ", " + e.to : "token references unknown node: " + e.from : i ? "token references unknown node: " + e.to : "token references unknown node: "))(() => en.pure({ events: [], firstId: x, lastId: x }));
      const s = e.to + "->" + e.from, u = e.from + "->" + e.to;
      return Qe(u)(r.currEdges) ? lf(t)(Oc(
        "SendToken",
        { from: e.from, to: e.to, edge: u, direction: K1, labels: e.labels }
      )) : Qe(s)(r.currEdges) ? lf(t)(Oc(
        "SendToken",
        { from: e.from, to: e.to, edge: s, direction: M1, labels: e.labels }
      )) : Rt.bind(mn("token " + e.from + "→" + e.to + ": no edge between " + e.from + " and " + e.to))(() => en.pure({
        events: [],
        firstId: x,
        lastId: x
      }));
    });
  }
  return en.pure({ events: [], firstId: x, lastId: x });
}, pT = (t) => (n) => {
  if (0 < t.length) {
    const e = t[0];
    return Rt.bind($n.state((r) => b(void 0, { ...r, currentLine: e.line, currentColumn: e.column })))(() => mn(n));
  }
  return mn(n);
}, $T = (t) => yt((n) => jJ(n)(t.graphEdges))(Et(mo, ZJ(t.currEdges))), mT = (t) => (n) => {
  const e = ft((o) => o.from.node === n.id || o.to.node === n.id, $T(t)), r = Js(wf)((o) => (i) => {
    const s = i.from + "->" + n.id, u = n.id + "->" + i.to, c = i.from + "->" + i.to, a = "via " + i.from + " " + i.to + ": no edge " + i.from + "→" + n.id;
    if (!Qe(s)(t.currEdges))
      return St("Left", a);
    const g = "via " + i.from + " " + i.to + ": no edge " + n.id + "→" + i.to;
    if (!Qe(u)(t.currEdges))
      return St("Left", g);
    const _ = "via " + i.from + " " + i.to + ": would create " + i.from + "→" + i.to + " but it already exists";
    return Qe(c)(t.currEdges) || tT(c)(o.synthesized) ? St("Left", _) : St(
      "Right",
      {
        consumed: U(C)(s)()(U(C)(u)()(o.consumed)),
        synthesized: U(C)(c)({
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
      return (i) => St("Left", o);
    }
    if (r.tag === "Right") {
      const o = r._1;
      return (i) => i(o);
    }
    f();
  })()((o) => {
    const i = o.consumed, s = ft((u) => !Qe(u.id)(i), e);
    return s.length === 0 ? St(
      "Right",
      {
        nextCurrEdges: Pn(
          C.compare,
          Cn,
          Ie(C.compare, t.currEdges, nT(z((u) => u.id)(e))),
          eT((() => {
            const u = (c) => {
              if (c.tag === "Leaf")
                return I;
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
      "cannot delete node " + n.id + ": still connected (" + us(", ")(z((u) => u.from.node + "→" + u.to.node)(s)) + "). Use -edge to drop them or `via a b` to merge " + n.id + "'s endpoints."
    );
  });
}, qi = (t) => {
  if (t.tag === "Leaf")
    return [t._1];
  if (t.tag === "Par" || t.tag === "Seq")
    return Tt(t._1)(qi);
  f();
}, yT = Rt.bind(An)((t) => {
  if (t.error.tag === "Just")
    return en.pure();
  if (t.error.tag === "Nothing") {
    const n = t.enterStack.length - 1 | 0;
    return n >= 0 && n < t.enterStack.length ? mn("entered node " + t.enterStack[n] + " was never exited") : en.pure();
  }
  f();
}), NT = (t) => ({
  nodes: z(Ui)(t.graphNodes),
  edges: (() => {
    const n = (e, r) => {
      if (e.tag === "Leaf")
        return r;
      if (e.tag === "Node")
        return n(e._5, qt("Cons", e._4, n(e._6, r)));
      f();
    };
    return Et(Xt.foldr, n(t.graphEdges, Yt));
  })(),
  constraints: []
}), xT = (t) => {
  if (t.tag === "AddNode") {
    const n = t._1;
    return $n.state((e) => b(
      void 0,
      {
        ...e,
        graphNodes: cT(n.id)({ id: n.id, size: b(1, 1), ports: [], label: v("Just", n.label), shape: n.shape })(e.graphNodes),
        currNodes: U(C)(n.id)()(e.currNodes)
      }
    ));
  }
  if (t.tag === "DelNode") {
    const n = t._1;
    return Rt.bind(An)((e) => {
      if (!Be(n.id)(e.currNodes))
        return mn("cannot delete node " + n.id + ": does not exist");
      const r = mT(e)(n);
      if (r.tag === "Left")
        return mn(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return $n.state((i) => b(
          void 0,
          {
            ...i,
            currNodes: yo(C)(n.id)(i.currNodes),
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
    return Rt.bind(An)((e) => {
      if (!Be(n.id)(e.currNodes))
        return mn("cannot modify node " + n.id + ": does not exist");
      if (n.label.tag === "Just") {
        const r = n.label._1;
        return $n.state((o) => b(void 0, { ...o, graphNodes: aT(n.id)(r)(o.graphNodes) }));
      }
      if (n.label.tag === "Nothing")
        return en.pure();
      f();
    });
  }
  if (t.tag === "AddEdge") {
    const n = t._1;
    return Rt.bind(An)((e) => {
      const r = !Be(n.from)(e.currNodes), o = !Be(n.to)(e.currNodes);
      if (r || o)
        return mn("cannot add edge " + n.from + "→" + n.to + ": unknown node " + (r ? o ? n.from + ", " + n.to : n.from : o ? n.to : ""));
      const i = n.from + "->" + n.to;
      return $n.state((s) => b(
        void 0,
        {
          ...s,
          graphEdges: U(C)(i)({
            id: i,
            from: { node: n.from, port: x },
            to: { node: n.to, port: x },
            label: n.label
          })(s.graphEdges),
          currEdges: U(C)(i)()(s.currEdges)
        }
      ));
    });
  }
  if (t.tag === "DelEdge") {
    const n = t._1;
    return Rt.bind(An)((e) => {
      const r = n.from + "->" + n.to;
      return Qe(r)(e.currEdges) ? $n.state((o) => b(void 0, { ...o, currEdges: yo(C)(r)(o.currEdges) })) : mn("cannot delete edge " + n.from + "→" + n.to + ": does not exist");
    });
  }
  if (t.tag === "RepointEdge") {
    const n = t._1;
    return Rt.bind(An)((e) => {
      const r = _T(e)(n);
      if (r.tag === "Left")
        return mn(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return $n.state((i) => b(
          void 0,
          { ...i, currEdges: o.nextCurrEdges, graphEdges: U(C)(o.newId)(o.newEdge)(i.graphEdges) }
        ));
      }
      f();
    });
  }
  return en.pure();
}, JT = (t) => Rt.bind($n.state((n) => b(void 0, { ...n, currentLine: t.line, currentColumn: t.column })))(() => xT(t.op)), ml = (t) => (n) => (e) => Rt.bind(xs(JT)(e))(() => Rt.bind(An)((r) => {
  const o = n.tag === "Just" && n._1 !== "" ? n._1 : "kf-" + un(r.kfCounter);
  if (qn((s) => s.id === o, r.keyframes))
    return mn("duplicate frame name " + o);
  const i = {
    ...r,
    keyframes: Bt(r.keyframes)({ id: o, nodes: r.currNodes, edges: r.currEdges, kind: t }),
    kfCounter: r.kfCounter + 1 | 0,
    currentKf: v("Just", o),
    scenes: (() => {
      if (r.currentKf.tag === "Nothing")
        return r.scenes;
      if (r.currentKf.tag === "Just")
        return Bt(r.scenes)(qo("Structural", { from: r.currentKf._1, to: o, focus: x }));
      f();
    })()
  };
  return $n.state((s) => b(void 0, i));
})), _f = (t) => (n) => {
  const e = qi(n.ops), r = ft(
    (i) => i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge",
    e
  ), o = ft(
    (i) => !(i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge"),
    e
  );
  if (0 < o.length) {
    const i = o[0];
    return Rt.bind($n.state((s) => b(void 0, { ...s, currentLine: i.line, currentColumn: i.column })))(() => mn("still/title blocks hold a static snapshot; they cannot contain tokens (a -> b) or enter/exit"));
  }
  return t === "TitleCard" && r.length === 0 ? mn(n.name.tag === "Just" && n.name._1 !== "" ? 'title "' + n.name._1 + '" has an empty body; give it nodes/edges to title, or use a still' : "title has an empty body; give it nodes/edges to title, or use a still") : Rt.bind(ml(t)(n.name)(r))(() => dT);
}, TT = (t) => (n) => {
  const e = Qt((r) => x, (r) => (o) => v("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return en.pure({ events: [], firstId: x, lastId: x });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Rt.bind(Qo(t)(e._1.head))((o) => Rt.bind(Js({
      Applicative0: () => Mo(tr),
      Bind1: () => Ko(tr)
    })((i) => (s) => Rt.bind(Qo((() => {
      if (i.lastId.tag === "Just")
        return Mu("After", i.lastId._1);
      if (i.lastId.tag === "Nothing")
        return t;
      f();
    })())(s))((u) => en.pure({
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
    })))(o)(r))((i) => en.pure(i)));
  }
  f();
}, vT = (t) => (n) => {
  const e = Qt((r) => x, (r) => (o) => v("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return en.pure({ events: [], firstId: x, lastId: x });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Rt.bind(Qo(t)(e._1.head))((o) => Rt.bind(wT((() => {
      if (o.firstId.tag === "Just")
        return Mu("With", o.firstId._1);
      if (o.firstId.tag === "Nothing")
        return t;
      f();
    })())(r))((i) => en.pure({
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
}, Qo = (t) => (n) => {
  if (n.tag === "Leaf") {
    const e = n._1;
    return Rt.bind($n.state((r) => b(void 0, { ...r, currentLine: e.line, currentColumn: e.column })))(() => hT(t)(e.op));
  }
  if (n.tag === "Seq")
    return TT(t)(n._1);
  if (n.tag === "Par")
    return vT(t)(n._1);
  f();
}, wT = (t) => Js({
  Applicative0: () => Mo(tr),
  Bind1: () => Ko(tr)
})((n) => (e) => Rt.bind(Qo(t)(e))((r) => en.pure({
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
})))({ events: [], firstId: x, lastId: x }), kT = (t) => Rt.bind(An)((n) => {
  if (n.currentKf.tag === "Nothing")
    return mn("flow ops before any structural frame");
  if (n.currentKf.tag === "Just") {
    const e = n.currentKf._1;
    return Rt.bind(Qo(U1)(t))((r) => Rt.bind(An)((o) => {
      const i = { ...o, scenes: Bt(o.scenes)(qo("DataFlow", { keyframe: e, events: r.events, focus: x })) };
      return $n.state((s) => b(void 0, i));
    }));
  }
  f();
}), bT = (t) => {
  const n = qi(t.ops), e = ft(
    (i) => i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge",
    n
  ), r = ft((i) => i.op.tag === "Enter" || i.op.tag === "Exit", n), o = ft(
    (i) => !(i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge") && !(i.op.tag === "Enter" || i.op.tag === "Exit"),
    n
  );
  return r.length !== 0 && o.length !== 0 ? pT(r)("`enter`/`exit` cannot be mixed with flow tokens in the same frame") : Rt.bind((() => {
    const i = ml(Yo)(t.name)(e);
    return e.length !== 0 ? i : en.pure();
  })())(() => Rt.bind((() => {
    const i = gT(t.name);
    return e.length === 0 && o.length !== 0 ? i : en.pure();
  })())(() => Rt.bind((() => {
    const i = kT(t.ops);
    return o.length !== 0 ? i : en.pure();
  })())(() => xs(fT)(r))));
}, LT = (t) => Rt.bind(An)((n) => {
  if (n.error.tag === "Just")
    return en.pure();
  if (n.error.tag === "Nothing") {
    if (t.kind === "AnimatedKeyframe")
      return bT(t);
    if (t.kind === "Still")
      return _f(X1)(t);
    if (t.kind === "Title")
      return _f(V1)(t);
  }
  f();
}), yl = (t) => Rt.bind(lT(t.interiors))(() => Rt.bind(xs(LT)(t.frames))(() => Rt.bind(yT)(() => Rt.bind(An)((n) => {
  if (n.error.tag === "Just")
    return en.pure(St("Left", n.error._1));
  if (n.error.tag === "Nothing") {
    const e = ET(t.interiors);
    if (e.tag === "Left")
      return en.pure(St("Left", e._1));
    if (e.tag === "Right")
      return en.pure(St("Right", { seed: t.seed, graph: NT(n), keyframes: n.keyframes, scenes: n.scenes, interiors: e._1 }));
  }
  f();
})))), ET = (t) => {
  const n = Js(wf)((e) => (r) => {
    const o = yl(r.doc)($l)._1;
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
  })(I)(t);
  if (n.tag === "Left")
    return St("Left", n._1);
  if (n.tag === "Right")
    return St("Right", n._1);
  f();
}, Br = (t, n) => ({ tag: "ParseError", _1: t, _2: n }), F = (t, n, e) => ({ tag: "ParseState", _1: t, _2: n, _3: e }), Yi = (t, n, e) => ({ tag: t, _1: n, _2: e }), ST = (t) => Yi("More", t), CT = (t) => Yi("Lift", t), PT = {
  defer: (t) => {
    const n = k1(t);
    return (e, r, o, i, s) => b1(n)(e, r, o, i, s);
  }
}, Nl = { map: (t) => (n) => (e, r, o, i, s) => r((u) => n(e, r, o, i, (c, a) => r((g) => s(c, t(a))))) }, GT = {
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
  Functor0: () => Nl
}, AT = (t) => {
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
          u = !1, c = n.Bind1().Apply0().Functor0().map(bf)(g._1);
          continue;
        }
        if (g.tag === "Stop") {
          u = !1, c = n.Applicative0().pure(co("Done", b(g._2, g._1)));
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
      (s, u) => Yi("Stop", s, St("Left", u)),
      (s, u) => Yi("Stop", s, St("Right", u))
    ));
  };
}, xl = (t, n, e, r, o) => o(t, t._2), IT = { index: 0, line: 1, column: 1 }, FT = (t) => {
  const n = AT(t);
  return (e) => (r) => t.Monad0().Bind1().Apply0().Functor0().map(Ki)(n(F(e, IT, !1))(r));
}, RT = /* @__PURE__ */ FT(Zl), Jl = {
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
  Functor0: () => Nl
}, Tl = { pure: (t) => (n, e, r, o, i) => i(n, t), Apply0: () => Jl }, BT = {
  bind: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, a) => r((g) => n(a)(e._3 && !c._3 ? F(c._1, c._2, !0) : c, r, o, i, s))
  )),
  Apply0: () => Jl
}, QT = { Applicative0: () => Tl, Bind1: () => BT }, Ts = (t) => (n, e, r, o, i) => e((s) => xl(
  n,
  e,
  r,
  o,
  (u, c) => e((a) => o(n._3 && !u._3 ? F(u._1, u._2, !0) : u, Br(t, c)))
)), WT = { empty: /* @__PURE__ */ Ts("No alternative"), Alt0: () => GT }, HT = { Applicative0: () => Tl, Plus1: () => WT }, DT = {
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
  return (o) => t.tailRecM((i) => t.Monad0().Bind1().bind(e.alt(e.Functor0().map(bf)(o))(r.pure(co(
    "Done",
    void 0
  ))))((s) => r.pure((() => {
    if (s.tag === "Loop")
      return co("Loop", qt("Cons", s._1, i));
    if (s.tag === "Done")
      return co(
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
              g = qt("Cons", p._1, h), _ = p._2;
              continue;
            }
            f();
          }
          return l;
        })(Yt)(i)
      );
    f();
  })())))(Yt);
}, ce = /* @__PURE__ */ OT(DT)(HT), Ct = (t) => (n) => {
  const e = Ts("Expected " + n);
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
}, bc = (t) => (n, e, r, o, i) => {
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
      (l, h) => e((p) => e(($) => Ts("Negated parser succeeded")(
        l,
        e,
        r,
        g,
        (m, y) => e((N) => i(l._3 && !m._3 ? F(m._1, m._2, !0) : m, y))
      )))
    )));
  });
}, zT = (t) => {
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
              return i((p) => h ? u(d, l) : r._1(o, i, s, u, c));
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
      return Ts("No alternative");
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, qT = (t) => (n) => (e) => (r, o, i, s, u) => o((c) => o((a) => o((g) => o((_) => t(
  r,
  o,
  i,
  s,
  (d, l) => o((h) => o((p) => {
    const $ = r._3 && !d._3 ? F(d._1, d._2, !0) : d;
    return e(
      $,
      o,
      i,
      s,
      (m, y) => o((N) => {
        const T = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
        return o((w) => o((k) => {
          const L = r._3 && !T._3 ? F(T._1, T._2, !0) : T;
          return n(
            L,
            o,
            i,
            s,
            (P, O) => o((X) => u(L._3 && !P._3 ? F(P._1, P._2, !0) : P, y))
          );
        }));
      })
    );
  }))
))))), Eu = (t) => (n) => (e) => {
  if (n === 10)
    return { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  if (n === 13) {
    const r = Dd()(e);
    return r.tag === "Just" && r._1 === 10 ? { index: t.index + 1 | 0, line: t.line, column: t.column } : { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  }
  return n === 9 ? { index: t.index + 1 | 0, line: t.line, column: (t.column + 8 | 0) - Me(t.column - 1 | 0)(8) | 0 } : { index: t.index + 1 | 0, line: t.line, column: t.column + 1 | 0 };
}, YT = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const c = r, a = o, g = i, _ = cs(a);
    if (_.tag === "Nothing") {
      s = !1, u = c;
      continue;
    }
    if (_.tag === "Just") {
      r = _._1.tail === "" ? Eu(c)(_._1.head)(g) : Eu(c)(_._1.head)(_._1.tail), o = _._1.tail, i = g;
      continue;
    }
    f();
  }
  return u;
}, Mt = (t) => (n, e, r, o, i) => {
  const s = cs(n._1);
  if (s.tag === "Nothing")
    return o(n, Br("Unexpected EOF", n._2));
  if (s.tag === "Just") {
    if (s._1.head < 0 || s._1.head > 65535)
      return o(n, Br("Expected Char", n._2));
    if (s._1.head >= 0 && s._1.head <= 65535) {
      const u = o0(s._1.head);
      return t(u) ? i(F(s._1.tail, Eu(n._2)(s._1.head)(s._1.tail), !0), u) : o(n, Br("Predicate unsatisfied", n._2));
    }
  }
  f();
}, Lc = (t, n, e, r, o) => t._1 === "" ? o(F(t._1, t._2, !0), void 0) : r(t, Br("Expected EOF", t._2)), XT = (t) => (n, e, r, o, i) => {
  const s = t(n._1);
  if (s.tag === "Left")
    return o(n, Br(s._1, n._2));
  if (s.tag === "Right")
    return i(F(s._1.remainder, YT(n._2)(s._1.consumed)(s._1.remainder), s._1.consumed !== ""), s._1.value);
  f();
}, jr = (t) => XT((n) => {
  const e = w1(t)(n);
  return e.tag === "Just" ? St("Right", { value: t, consumed: t, remainder: e._1 }) : St("Left", "Expected " + Us(t));
}), VT = /* @__PURE__ */ Mt((t) => !0), df = (t, n) => ({ tag: t, _1: n }), UT = /* @__PURE__ */ nn(C)(Dt), KT = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
}, vl = /* @__PURE__ */ zT(Dt), wl = /* @__PURE__ */ (() => {
  const t = Mt((n) => n === " " || n === "	" || n === `
` || n === "\r");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? F(u._1, u._2, !0) : u, void 0))
  ));
})(), Ec = (t, n, e, r, o) => n((i) => jr("#")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = ce(Mt((_) => _ !== `
`)), g = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => o(g._3 && !d._3 ? F(d._1, d._2, !0) : d, void 0))
    ));
  })
)), MT = /* @__PURE__ */ Ct(/* @__PURE__ */ (() => {
  const t = Ct(Mt((e) => e === "}"))("'}'"), n = Mt((e) => e === `
` || e === "\r");
  return (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((a) => r((g) => t(
      F(u, c, !1),
      r,
      o,
      (_, d) => r((l) => {
        const h = e._1, p = e._2;
        return r(($) => r((m) => Ec(
          F(h, p, !1),
          r,
          o,
          (y, N) => {
            const T = y._3;
            return r((w) => {
              if (T)
                return i(y, N);
              const k = e._1, L = e._2;
              return r((P) => r((O) => n(
                F(k, L, !1),
                r,
                o,
                (X, V) => {
                  const A = X._3;
                  return r((B) => A ? i(X, V) : Lc(e, r, o, i, s));
                },
                (X, V) => r((A) => s(X, void 0))
              )));
            });
          },
          (y, N) => r((T) => s(y, void 0))
        )));
      }),
      (_, d) => r((l) => s(F(u, c, !1), void 0))
    )));
  };
})())("newline or '}' (statements end at the end of the line)"), ne = /* @__PURE__ */ (() => {
  const t = ce((n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => wl(
      F(s, u, !1),
      e,
      r,
      (a, g) => {
        const _ = a._3;
        return e((d) => _ ? o(a, g) : Ec(n, e, r, o, i));
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
})(), ge = (t, n, e, r, o) => n((i) => {
  const s = (a, g) => n((_) => ne(t._3 && !a._3 ? F(a._1, a._2, !0) : a, n, e, r, o)), u = t._1, c = t._2;
  return n((a) => wl(
    F(u, c, !1),
    n,
    e,
    (g, _) => {
      const d = g._3;
      return n((l) => d ? r(g, _) : Ec(t, n, e, r, s));
    },
    s
  ));
}), kl = /* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === "|"))("'|'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const g = ce(Mt((d) => d !== "|")), _ = n._3 && !u._3 ? F(u._1, u._2, !0) : u;
      return e((d) => g(
        _,
        e,
        r,
        o,
        (l, h) => e((p) => {
          const $ = Ct(Ct(Mt((y) => y === "|"))("'|'"))("closing '|'"), m = _._3 && !l._3 ? F(l._1, l._2, !0) : l;
          return e((y) => $(
            m,
            e,
            r,
            o,
            (N, T) => e((w) => i(
              m._3 && !N._3 ? F(N._1, N._2, !0) : N,
              Jr(Et(Xt.foldr, h))
            ))
          ));
        })
      ));
    })
  ));
})(), Xi = /* @__PURE__ */ Mt((t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z"), Wn = /* @__PURE__ */ (() => {
  const t = ce(Mt((n) => n === " " || n === "	"));
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? F(u._1, u._2, !0) : u, void 0))
  ));
})(), jT = /* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === "\\"))("'\\\\'");
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
  const t = Mt((n) => n !== '"' && n !== "\\" && n !== `
`);
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => jT(F(s, u, !1), e, r, (a, g) => e((_) => t(n, e, r, o, i)), i));
  };
})(), Sc = /* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === '"'))(`'"'`);
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const g = ce(ZT), _ = n._3 && !u._3 ? F(u._1, u._2, !0) : u;
      return e((d) => g(
        _,
        e,
        r,
        o,
        (l, h) => e((p) => {
          const $ = Ct(Ct(Mt((y) => y === '"'))(`'"'`))(`closing '"' (unterminated string)`), m = _._3 && !l._3 ? F(l._1, l._2, !0) : l;
          return e((y) => $(
            m,
            e,
            r,
            o,
            (N, T) => e((w) => i(
              m._3 && !N._3 ? F(N._1, N._2, !0) : N,
              Jr(Et(Xt.foldr, h))
            ))
          ));
        })
      ));
    })
  ));
})(), tv = /* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === ":"))("':'");
  return (n, e, r, o, i) => e((s) => Wn(
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
            return _((O) => kl(
              F(L, P, !1),
              _,
              d,
              (X, V) => {
                const A = X._3;
                return _((B) => A ? l(X, V) : Sc(g, _, d, l, h));
              },
              h
            ));
          });
        };
        return _((N) => t(
          F(p, $, !1),
          _,
          d,
          y,
          (T, w) => _((k) => _((L) => Wn(
            T,
            _,
            d,
            y,
            (P, O) => _((X) => {
              const V = ce(Mt((B) => B !== `
` && B !== "\r" && B !== "#" && B !== "}")), A = T._3 && !P._3 ? F(P._1, P._2, !0) : P;
              return _((B) => V(
                A,
                _,
                d,
                y,
                (et, st) => _((Y) => h(
                  A._3 && !et._3 ? F(et._1, et._2, !0) : et,
                  Ld(Jr(Et(Xt.foldr, st)))
                ))
              ));
            })
          )))
        ));
      });
    })('label ("…", : rest-of-line, or |…|)')(n._3 && !u._3 ? F(u._1, u._2, !0) : u, e, r, o, i))
  ));
})(), bl = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => kl(
    F(i, s, !1),
    n,
    e,
    (c, a) => {
      const g = c._3;
      return n((_) => g ? r(c, a) : Sc(t, n, e, r, o));
    },
    o
  ));
}, Wo = /* @__PURE__ */ Mt((t) => t >= "0" && t <= "9"), bn = /* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => e((s) => {
    const u = (g, _) => e((d) => {
      const l = ce((() => {
        const p = Ct(Mt((m) => m === "_"))("'_'"), $ = Ct(Mt((m) => m === "-"))("'-'");
        return (m, y, N, T, w) => {
          const k = m._1, L = m._2;
          return y((P) => Xi(
            F(k, L, !1),
            y,
            N,
            (O, X) => {
              const V = O._3;
              return y((A) => {
                if (V)
                  return T(O, X);
                const B = m._1, et = m._2;
                return y((st) => Wo(
                  F(B, et, !1),
                  y,
                  N,
                  (Y, R) => {
                    const E = Y._3;
                    return y((S) => {
                      if (E)
                        return T(Y, R);
                      const H = m._1, G = m._2;
                      return y((W) => p(
                        F(H, G, !1),
                        y,
                        N,
                        (Q, M) => {
                          const q = Q._3;
                          return y((D) => q ? T(Q, M) : $(m, y, N, T, w));
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
      return e((p) => l(
        h,
        e,
        r,
        o,
        ($, m) => e((y) => i(
          h._3 && !$._3 ? F($._1, $._2, !0) : $,
          rs(_) + Jr(Et(Xt.foldr, m))
        ))
      ));
    }), c = n._1, a = n._2;
    return e((g) => Xi(
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
})(), nv = /* @__PURE__ */ Ct((t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => Sc(
    F(i, s, !1),
    n,
    e,
    (c, a) => {
      const g = c._3;
      return n((_) => g ? r(c, a) : bn(t, n, e, r, o));
    },
    o
  ));
})("frame name (identifier or quoted string)"), hf = (t, n, e, r, o) => n((i) => Wn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Ct(bn)("attribute key"), g = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => {
        const p = g._3 && !d._3 ? F(d._1, d._2, !0) : d;
        return n(($) => Wn(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = Ct(Ct(Mt((k) => k === ":"))("':'"))("':'"), w = p._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((k) => T(
              w,
              n,
              e,
              r,
              (L, P) => n((O) => {
                const X = w._3 && !L._3 ? F(L._1, L._2, !0) : L;
                return n((V) => Wn(
                  X,
                  n,
                  e,
                  r,
                  (A, B) => n((et) => {
                    const st = Ct(bn)("attribute value"), Y = X._3 && !A._3 ? F(A._1, A._2, !0) : A;
                    return n((R) => st(
                      Y,
                      n,
                      e,
                      r,
                      (E, S) => n((H) => {
                        const G = Y._3 && !E._3 ? F(E._1, E._2, !0) : E;
                        return n((W) => Wn(
                          G,
                          n,
                          e,
                          r,
                          (Q, M) => n((q) => o(G._3 && !Q._3 ? F(Q._1, Q._2, !0) : Q, b(l, S)))
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
)), ev = (t, n, e, r, o) => n((i) => bn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => Wn(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(($, m, y, N, T) => {
          const w = $._1, k = $._2;
          return m((L) => jr("->")(
            F(w, k, !1),
            m,
            y,
            (P, O) => {
              const X = P._3;
              return m((V) => X ? N(P, O) : jr("<-")($, m, y, N, T));
            },
            T
          ));
        })("'->' or '<-'"), p = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = p._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => Wn(
              T,
              n,
              e,
              r,
              (k, L) => n((P) => {
                const O = Ct(bn)("target node identifier"), X = T._3 && !k._3 ? F(k._1, k._2, !0) : k;
                return n((V) => O(
                  X,
                  n,
                  e,
                  r,
                  (A, B) => n((et) => {
                    const st = ce((R, E, S, H, G) => {
                      const W = R._3;
                      return E((Q) => E((M) => Wn(
                        R,
                        E,
                        S,
                        (q, D) => H(F(q._1, q._2, W), D),
                        (q, D) => E((rt) => E((Z) => {
                          const nt = R._3 && !q._3 ? F(q._1, q._2, !0) : q;
                          return bl(
                            nt,
                            E,
                            S,
                            (tt, ct) => H(F(tt._1, tt._2, W), ct),
                            (tt, ct) => E((lt) => G(nt._3 && !tt._3 ? F(tt._1, tt._2, !0) : tt, ct))
                          );
                        }))
                      )));
                    }), Y = X._3 && !A._3 ? F(A._1, A._2, !0) : A;
                    return n((R) => st(
                      Y,
                      n,
                      e,
                      r,
                      (E, S) => n((H) => (() => {
                        if (y === "<-") {
                          const W = qe(
                            "Token",
                            { from: B, to: u, labels: z(Hc)(Et(Xt.foldr, S)) }
                          );
                          return (Q, M, q, D, rt) => rt(Q, W);
                        }
                        const G = qe(
                          "Token",
                          { from: u, to: B, labels: z(Hc)(Et(Xt.foldr, S)) }
                        );
                        return (W, Q, M, q, D) => D(W, G);
                      })()(Y._3 && !E._3 ? F(E._1, E._2, !0) : E, n, e, r, o))
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
)), rv = (t, n, e, r, o) => n((i) => Wo(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = ce(Wo), g = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => {
        const p = A_(rs(u) + Jr(Et(
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
        })()(g._3 && !d._3 ? F(d._1, d._2, !0) : d, n, e, r, o);
      })
    ));
  })
)), jo = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => jr(t)(
    n,
    e,
    r,
    (c, a) => o(F(c._1, c._2, s), a),
    (c, a) => e((g) => {
      const _ = bc((() => {
        const l = Ct(Mt((p) => p === "_"))("'_'"), h = Ct(Mt((p) => p === "-"))("'-'");
        return (p, $, m, y, N) => {
          const T = p._1, w = p._2;
          return $((k) => Xi(
            F(T, w, !1),
            $,
            m,
            (L, P) => {
              const O = L._3;
              return $((X) => {
                if (O)
                  return y(L, P);
                const V = p._1, A = p._2;
                return $((B) => Wo(
                  F(V, A, !1),
                  $,
                  m,
                  (et, st) => {
                    const Y = et._3;
                    return $((R) => {
                      if (Y)
                        return y(et, st);
                      const E = p._1, S = p._2;
                      return $((H) => l(
                        F(E, S, !1),
                        $,
                        m,
                        (G, W) => {
                          const Q = G._3;
                          return $((M) => Q ? y(G, W) : h(p, $, m, y, N));
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
        (h, p) => o(F(h._1, h._2, s), p),
        (h, p) => e(($) => {
          const m = d._3 && !h._3 ? F(h._1, h._2, !0) : h;
          return e((y) => ne(
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
}, ov = (t, n, e, r, o) => n((i) => ge(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => jo("via")(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n((p) => bn(
          h,
          n,
          e,
          r,
          ($, m) => n((y) => {
            const N = h._3 && !$._3 ? F($._1, $._2, !0) : $;
            return n((T) => ge(
              N,
              n,
              e,
              r,
              (w, k) => n((L) => {
                const P = N._3 && !w._3 ? F(w._1, w._2, !0) : w;
                return n((O) => bn(
                  P,
                  n,
                  e,
                  r,
                  (X, V) => n((A) => o(P._3 && !X._3 ? F(X._1, X._2, !0) : X, { from: m, to: V }))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), ur = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => jr(t)(
    n,
    e,
    r,
    (c, a) => o(F(c._1, c._2, s), a),
    (c, a) => e((g) => {
      const _ = bc((() => {
        const l = Ct(Mt((p) => p === "_"))("'_'"), h = Ct(Mt((p) => p === "-"))("'-'");
        return (p, $, m, y, N) => {
          const T = p._1, w = p._2;
          return $((k) => Xi(
            F(T, w, !1),
            $,
            m,
            (L, P) => {
              const O = L._3;
              return $((X) => {
                if (O)
                  return y(L, P);
                const V = p._1, A = p._2;
                return $((B) => Wo(
                  F(V, A, !1),
                  $,
                  m,
                  (et, st) => {
                    const Y = et._3;
                    return $((R) => {
                      if (Y)
                        return y(et, st);
                      const E = p._1, S = p._2;
                      return $((H) => l(
                        F(E, S, !1),
                        $,
                        m,
                        (G, W) => {
                          const Q = G._3;
                          return $((M) => Q ? y(G, W) : h(p, $, m, y, N));
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
        (h, p) => o(F(h._1, h._2, s), p),
        (h, p) => e(($) => i(d._3 && !h._3 ? F(h._1, h._2, !0) : h, void 0))
      ));
    })
  ));
}, iv = (t, n, e, r, o) => n((i) => ur("+edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => ge(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(bn)("source node identifier"), p = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = p._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => ge(
              T,
              n,
              e,
              r,
              (k, L) => n((P) => {
                const O = Ct(bn)("target node identifier"), X = T._3 && !k._3 ? F(k._1, k._2, !0) : k;
                return n((V) => O(
                  X,
                  n,
                  e,
                  r,
                  (A, B) => n((et) => {
                    const st = X._3 && !A._3 ? F(A._1, A._2, !0) : A;
                    return n((Y) => {
                      const R = (H, G) => n((W) => o(
                        st._3 && !H._3 ? F(H._1, H._2, !0) : H,
                        qe("AddEdge", { from: y, to: B, label: G.tag === "Just" ? v("Just", G._1) : x })
                      )), E = st._1, S = st._2;
                      return n((H) => n((G) => {
                        const W = (Q, M) => {
                          const q = Q._3;
                          return n((D) => q ? r(Q, M) : R(st, x));
                        };
                        return n((Q) => n((M) => Wn(
                          F(E, S, !1),
                          n,
                          e,
                          (q, D) => W(F(q._1, q._2, !1), D),
                          (q, D) => n((rt) => n((Z) => bl(
                            q,
                            n,
                            e,
                            (nt, tt) => W(F(nt._1, nt._2, !1), tt),
                            (nt, tt) => n((ct) => {
                              const lt = q._3 && !nt._3 ? F(nt._1, nt._2, !0) : nt;
                              return n((Wt) => R(lt, v("Just", tt)));
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
)), sv = (t, n, e, r, o) => n((i) => ur("-edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => ge(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(bn)("source node identifier"), p = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = p._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => ge(
              T,
              n,
              e,
              r,
              (k, L) => n((P) => {
                const O = Ct(bn)("target node identifier"), X = T._3 && !k._3 ? F(k._1, k._2, !0) : k;
                return n((V) => O(
                  X,
                  n,
                  e,
                  r,
                  (A, B) => n((et) => o(
                    X._3 && !A._3 ? F(A._1, A._2, !0) : A,
                    qe("DelEdge", { from: y, to: B })
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), uv = (t, n, e, r, o) => n((i) => ur("-node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => ge(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(bn)("node identifier"), p = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = ce((k, L, P, O, X) => {
              const V = k._3;
              return ov(k, L, P, (A, B) => O(F(A._1, A._2, V), B), X);
            }), w = p._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((k) => T(
              w,
              n,
              e,
              r,
              (L, P) => n((O) => o(
                w._3 && !L._3 ? F(L._1, L._2, !0) : L,
                qe("DelNode", { id: y, via: Et(Xt.foldr, P) })
              ))
            ));
          })
        ));
      })
    ));
  })
)), cv = (t, n, e, r, o) => n((i) => ur("enter")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => ge(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(bn)("node identifier"), p = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => o(
            p._3 && !m._3 ? F(m._1, m._2, !0) : m,
            qe("Enter", { id: y })
          ))
        ));
      })
    ));
  })
)), av = (t, n, e, r, o) => n((i) => ur("exit")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => o(t._3 && !s._3 ? F(s._1, s._2, !0) : s, rT))
)), fv = (t, n, e, r, o) => n((i) => ur("~edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => ge(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(bn)("source node identifier"), p = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = p._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => ge(
              T,
              n,
              e,
              r,
              (k, L) => n((P) => {
                const O = Ct(bn)("target node identifier"), X = T._3 && !k._3 ? F(k._1, k._2, !0) : k;
                return n((V) => O(
                  X,
                  n,
                  e,
                  r,
                  (A, B) => n((et) => {
                    const st = X._3 && !A._3 ? F(A._1, A._2, !0) : A;
                    return n((Y) => ne(
                      st,
                      n,
                      e,
                      r,
                      (R, E) => n((S) => {
                        const H = Ct(jr("->"))("'->'"), G = st._3 && !R._3 ? F(R._1, R._2, !0) : R;
                        return n((W) => H(
                          G,
                          n,
                          e,
                          r,
                          (Q, M) => n((q) => {
                            const D = G._3 && !Q._3 ? F(Q._1, Q._2, !0) : Q;
                            return n((rt) => ne(
                              D,
                              n,
                              e,
                              r,
                              (Z, nt) => n((tt) => {
                                const ct = Ct(bn)("new source node identifier"), lt = D._3 && !Z._3 ? F(Z._1, Z._2, !0) : Z;
                                return n((Wt) => ct(
                                  lt,
                                  n,
                                  e,
                                  r,
                                  (vt, Ht) => n((pt) => {
                                    const Jt = lt._3 && !vt._3 ? F(vt._1, vt._2, !0) : vt;
                                    return n(($t) => ge(
                                      Jt,
                                      n,
                                      e,
                                      r,
                                      (mt, K) => n((j) => {
                                        const gt = Ct(bn)("new target node identifier"), _t = Jt._3 && !mt._3 ? F(mt._1, mt._2, !0) : mt;
                                        return n((xt) => gt(
                                          _t,
                                          n,
                                          e,
                                          r,
                                          (Nt, jt) => n((Ln) => o(
                                            _t._3 && !Nt._3 ? F(Nt._1, Nt._2, !0) : Nt,
                                            qe("RepointEdge", { from: y, to: B, newFrom: Ht, newTo: jt })
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
)), gv = (t, n, e, r, o) => n((i) => ur("seed")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => Wn(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(rv)("integer (seed value)"), p = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = p._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => ne(
              T,
              n,
              e,
              r,
              (k, L) => n((P) => o(T._3 && !k._3 ? F(k._1, k._2, !0) : k, y))
            ));
          })
        ));
      })
    ));
  })
)), Zo = /* @__PURE__ */ qT(/* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (c, a) => e((g) => e((_) => {
      const d = n._3 && !c._3 ? F(c._1, c._2, !0) : c;
      return ne(d, e, r, o, (l, h) => e((p) => i(d._3 && !l._3 ? F(l._1, l._2, !0) : l, h)));
    }))
  )));
})())(/* @__PURE__ */ Ct(/* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => ne(
    n,
    e,
    r,
    o,
    (c, a) => e((g) => e((_) => {
      const d = n._3 && !c._3 ? F(c._1, c._2, !0) : c;
      return t(d, e, r, o, (l, h) => e((p) => i(d._3 && !l._3 ? F(l._1, l._2, !0) : l, h)));
    }))
  )));
})())("closing '}'")), lv = /* @__PURE__ */ Zo((t, n, e, r, o) => n((i) => {
  const s = (a, g) => n((_) => (() => {
    if (g.tag === "Nothing")
      return (d, l, h, p, $) => $(d, I);
    if (g.tag === "Just") {
      const d = g._1, l = ce((() => {
        const h = Ct(Mt((p) => p === ","))("','");
        return (p, $, m, y, N) => {
          const T = p._3;
          return $((w) => $((k) => $((L) => $((P) => $((O) => $((X) => Wn(
            p,
            $,
            m,
            (V, A) => y(F(V._1, V._2, T), A),
            (V, A) => $((B) => $((et) => {
              const st = p._3 && !V._3 ? F(V._1, V._2, !0) : V;
              return h(
                st,
                $,
                m,
                (Y, R) => y(F(Y._1, Y._2, T), R),
                (Y, R) => $((E) => {
                  const S = st._3 && !Y._3 ? F(Y._1, Y._2, !0) : Y;
                  return $((H) => $((G) => {
                    const W = p._3 && !S._3 ? F(S._1, S._2, !0) : S;
                    return Wn(
                      W,
                      $,
                      m,
                      (Q, M) => y(F(Q._1, Q._2, T), M),
                      (Q, M) => $((q) => {
                        const D = W._3 && !Q._3 ? F(Q._1, Q._2, !0) : Q;
                        return $((rt) => $((Z) => {
                          const nt = p._3 && !D._3 ? F(D._1, D._2, !0) : D;
                          return hf(
                            nt,
                            $,
                            m,
                            (tt, ct) => y(F(tt._1, tt._2, T), ct),
                            (tt, ct) => $((lt) => N(nt._3 && !tt._3 ? F(tt._1, tt._2, !0) : tt, ct))
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
          h._3 && !T._3 ? F(T._1, T._2, !0) : T,
          UT([d, ...Et(Xt.foldr, w)])
        ))
      ));
    }
    f();
  })()(t._3 && !a._3 ? F(a._1, a._2, !0) : a, n, e, r, o)), u = t._1, c = t._2;
  return n((a) => n((g) => hf(
    F(u, c, !1),
    n,
    e,
    (_, d) => n((l) => s(t, x)),
    (_, d) => n((l) => s(_, v("Just", d)))
  )));
})), _v = (t, n, e, r, o) => n((i) => ur("+node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => ge(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(bn)("node identifier"), p = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = p._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => n((k) => Wn(
              T,
              n,
              e,
              r,
              (L, P) => n((O) => {
                const X = Mt((A) => A === `
` || A === "\r" || A === "#" || A === "}" || A === "{"), V = T._3 && !L._3 ? F(L._1, L._2, !0) : L;
                return n((A) => {
                  const B = (Y, R) => n((E) => (R ? ((S, H, G, W, Q) => Q(S, "")) : tv)(
                    V._3 && !Y._3 ? F(Y._1, Y._2, !0) : Y,
                    n,
                    e,
                    r,
                    (S, H) => n((G) => {
                      const W = T._3 && !S._3 ? F(S._1, S._2, !0) : S;
                      return n((Q) => {
                        const M = (rt, Z) => n((nt) => o(
                          W._3 && !rt._3 ? F(rt._1, rt._2, !0) : rt,
                          qe(
                            "AddNode",
                            {
                              id: y,
                              label: H,
                              shape: (() => {
                                const tt = KT("shape")(Z);
                                if (tt.tag === "Just")
                                  return tt._1 === "rectangle" || tt._1 === "rect" ? Fe : tt._1 === "cylinder" || tt._1 === "cyl" ? Qc : tt._1 === "parallelogram" ? B1 : tt._1 === "diamond" ? Q1 : tt._1 === "ellipse" ? W1 : tt._1 === "document" || tt._1 === "doc" ? Wc : tt._1 === "cloud" ? H1 : Fe;
                                if (tt.tag === "Nothing")
                                  return Fe;
                                f();
                              })()
                            }
                          )
                        )), q = W._1, D = W._2;
                        return n((rt) => {
                          const Z = (nt, tt) => {
                            const ct = nt._3;
                            return n((lt) => ct ? r(nt, tt) : M(W, I));
                          };
                          return n((nt) => n((tt) => Wn(
                            F(q, D, !1),
                            n,
                            e,
                            (ct, lt) => Z(F(ct._1, ct._2, !1), lt),
                            (ct, lt) => n((Wt) => n((vt) => lv(
                              ct,
                              n,
                              e,
                              (Ht, pt) => Z(F(Ht._1, Ht._2, !1), pt),
                              (Ht, pt) => n((Jt) => M(ct._3 && !Ht._3 ? F(Ht._1, Ht._2, !0) : Ht, pt))
                            )))
                          )));
                        });
                      });
                    })
                  )), et = V._1, st = V._2;
                  return n((Y) => {
                    const R = (E, S) => {
                      const H = E._3;
                      return n((G) => H ? r(E, S) : B(V, !1));
                    };
                    return n((E) => n((S) => n((H) => Lc(
                      F(et, st, !1),
                      n,
                      e,
                      (G, W) => {
                        const Q = G._3;
                        return n((M) => Q ? R(F(et, st, !1), W) : n((q) => X(
                          F(et, st, !1),
                          n,
                          e,
                          (D, rt) => R(F(et, st, !1), rt),
                          (D, rt) => n((Z) => n((nt) => B(F(et, st, !1), !0)))
                        )));
                      },
                      (G, W) => n((Q) => n((M) => B(F(et, st, !1), !0)))
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
)), dv = (t, n, e, r, o) => n((i) => xl(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Ct(vl([_v, uv, fv, iv, sv, cv, av, ev]))("statement (+node, -node, +edge, -edge, ~edge, enter, exit, or 'a -> b')"), g = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => o(
        g._3 && !d._3 ? F(d._1, d._2, !0) : d,
        wc("Leaf", { op: l, line: u.line, column: u.column })
      ))
    ));
  })
)), hv = (t, n, e, r, o) => n((i) => jo("seq")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => Zo(Cc(pl))(
    t._3 && !s._3 ? F(s._1, s._2, !0) : s,
    n,
    e,
    r,
    o
  ))
)), pv = (t, n, e, r, o) => n((i) => jo("par")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => Zo(Cc(uT))(
    t._3 && !s._3 ? F(s._1, s._2, !0) : s,
    n,
    e,
    r,
    o
  ))
)), Cc = (t) => {
  const n = ce($v());
  return (e, r, o, i, s) => r((u) => n(
    e,
    r,
    o,
    i,
    (c, a) => r((g) => s(
      e._3 && !c._3 ? F(c._1, c._2, !0) : c,
      t(Et(Xt.foldr, a))
    ))
  ));
}, $v = /* @__PURE__ */ yf(() => {
  const t = bc(Ct(Mt((n) => n === "}"))("'}'"));
  return (n, e, r, o, i) => e((s) => {
    const u = n._3;
    return e((c) => e((a) => ne(
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
          (p, $) => o(F(p._1, p._2, u), $),
          (p, $) => e((m) => {
            const y = h._3 && !p._3 ? F(p._1, p._2, !0) : p;
            return e((N) => {
              const T = vl([
                (k, L, P, O, X) => {
                  const V = k._3;
                  return pv(k, L, P, (A, B) => O(F(A._1, A._2, V), B), X);
                },
                (k, L, P, O, X) => {
                  const V = k._3;
                  return hv(k, L, P, (A, B) => O(F(A._1, A._2, V), B), X);
                },
                dv
              ]), w = n._3 && !y._3 ? F(y._1, y._2, !0) : y;
              return e((k) => T(
                w,
                e,
                r,
                o,
                (L, P) => e((O) => {
                  const X = w._3 && !L._3 ? F(L._1, L._2, !0) : L;
                  return e((V) => Wn(
                    X,
                    e,
                    r,
                    o,
                    (A, B) => e((et) => {
                      const st = X._3 && !A._3 ? F(A._1, A._2, !0) : A;
                      return e((Y) => MT(
                        st,
                        e,
                        r,
                        o,
                        (R, E) => e((S) => i(st._3 && !R._3 ? F(R._1, R._2, !0) : R, P))
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
}), qs = (t) => (n) => (e, r, o, i, s) => r((u) => jo(t)(
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
      (l, h) => r((p) => {
        const $ = _._3 && !l._3 ? F(l._1, l._2, !0) : l;
        return r((m) => ne(
          $,
          r,
          o,
          i,
          (y, N) => r((T) => {
            const w = Zo(Cc(pl)), k = $._3 && !y._3 ? F(y._1, y._2, !0) : y;
            return r((L) => w(
              k,
              r,
              o,
              i,
              (P, O) => r((X) => {
                const V = k._3 && !P._3 ? F(P._1, P._2, !0) : P;
                return r((A) => ne(
                  V,
                  r,
                  o,
                  i,
                  (B, et) => r((st) => s(
                    V._3 && !B._3 ? F(B._1, B._2, !0) : B,
                    { name: v("Just", h), ops: O, kind: n }
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
  return n((u) => qs("keyframe")(oT)(
    F(i, s, !1),
    n,
    e,
    (c, a) => {
      const g = c._3;
      return n((_) => {
        if (g)
          return r(c, a);
        const d = t._1, l = t._2;
        return n((h) => qs("still")(iT)(
          F(d, l, !1),
          n,
          e,
          (p, $) => {
            const m = p._3;
            return n((y) => m ? r(p, $) : qs("title")(sT)(t, n, e, r, o));
          },
          o
        ));
      });
    },
    o
  ));
}, yv = (t, n, e, r, o) => n((i) => jo("inside")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Ct(bn)("node identifier"), g = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => {
        const p = g._3 && !d._3 ? F(d._1, d._2, !0) : d;
        return n(($) => ne(
          p,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = p._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => Zo(Ll)(
              T,
              n,
              e,
              r,
              (k, L) => n((P) => {
                const O = T._3 && !k._3 ? F(k._1, k._2, !0) : k;
                return n((X) => ne(
                  O,
                  n,
                  e,
                  r,
                  (V, A) => n((B) => o(O._3 && !V._3 ? F(V._1, V._2, !0) : V, { node: l, doc: L }))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), Ll = (t, n, e, r, o) => n((i) => {
  const s = (a, g) => n((_) => {
    const d = ce(Nv()), l = t._3 && !a._3 ? F(a._1, a._2, !0) : a;
    return n((h) => d(
      l,
      n,
      e,
      r,
      (p, $) => n((m) => {
        const y = Et(Xt.foldr, $);
        return o(
          l._3 && !p._3 ? F(p._1, p._2, !0) : p,
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
}), Nv = /* @__PURE__ */ yf(() => PT.defer((t) => (n, e, r, o, i) => {
  const s = n._1, u = n._2;
  return e((c) => e((a) => yv(
    F(s, u, !1),
    e,
    r,
    (g, _) => e((d) => e((l) => mv(n, e, r, o, (h, p) => e(($) => i(h, df("TopFrame", p)))))),
    (g, _) => e((d) => i(g, df("TopInside", _)))
  )));
})), xv = /* @__PURE__ */ (() => {
  const t = Ct((n, e, r, o, i) => e((s) => e((u) => ne(
    n,
    e,
    r,
    o,
    (c, a) => e((g) => e((_) => {
      const d = n._3 && !c._3 ? F(c._1, c._2, !0) : c;
      return Lc(
        d,
        e,
        r,
        o,
        (l, h) => e((p) => i(d._3 && !l._3 ? F(l._1, l._2, !0) : l, h))
      );
    }))
  ))))("'keyframe', 'still', 'title', 'inside', or end of input");
  return (n, e, r, o, i) => e((s) => e((u) => e((c) => e((a) => ne(
    n,
    e,
    r,
    o,
    (g, _) => e((d) => e((l) => {
      const h = n._3 && !g._3 ? F(g._1, g._2, !0) : g;
      return Ll(
        h,
        e,
        r,
        o,
        (p, $) => e((m) => {
          const y = h._3 && !p._3 ? F(p._1, p._2, !0) : p;
          return e((N) => e((T) => {
            const w = n._3 && !y._3 ? F(y._1, y._2, !0) : y;
            return t(
              w,
              e,
              r,
              o,
              (k, L) => e((P) => i(w._3 && !k._3 ? F(k._1, k._2, !0) : k, $))
            );
          }));
        })
      );
    }))
  )))));
})(), Jv = (t) => {
  const n = RT(t)(xv);
  if (n.tag === "Left")
    return St("Left", { msg: n._1._1, line: n._1._2.line, column: n._1._2.column });
  if (n.tag === "Right")
    return St("Right", n._1);
  f();
}, Tv = (t) => {
  const n = Jv(t);
  if (n.tag === "Left")
    return St("Left", n._1.msg);
  if (n.tag === "Right")
    return St("Right", n._1);
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
function _i(t) {
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
function kv(t) {
  return function(n) {
    return function() {
      return n.requestAnimationFrame(t);
    };
  };
}
const bv = (t) => t, Lv = (t) => () => t.clientWidth || 0, Ev = () => window.devicePixelRatio || 1, Sv = (t, n) => {
  n.innerHTML = t;
}, Ys = (t, n, e) => {
  t.style.setProperty(n, e);
}, Cv = (t) => (n) => t === n, El = (t) => t, Sl = (t, n, e) => ({ tag: t, _1: n, _2: e }), Cl = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Pv = (t) => (n) => {
  const e = at.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Gv = /* @__PURE__ */ Sl("AutoSize"), pf = /* @__PURE__ */ El("CanvasRenderer"), Av = /* @__PURE__ */ El("SvgRenderer"), Iv = (t) => (n) => {
  const e = t - n * ot(yn(Ne(t / n)));
  return n <= 0 ? 0 : e < 0 ? e + n : e;
}, Fv = (t) => J((n) => (e) => {
  const r = t(e);
  return () => (n(), r());
})(() => {
}), Pl = () => X_() / 1e3, Xs = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
  const g = jn(s.layout), _ = q1(s.layout), d = { center: { x: _.x + _.w / 2, y: g.y + g.h / 2 }, zoom: ec(s.layout)(g)(0) }, l = ju(s.layout)(d), h = () => {
    const N = Pl(), T = c.value;
    return c.value = N, T === 0 ? 0 : N - T;
  }, p = yp(s)(Cl(a)(s.totalDuration)), $ = i ? p : { ...p, levels: z((N) => ({ ...N, state: { ...N.state, frameTitle: "" } }))(p.levels) }, m = s.dives.length === 0 && (l.w + 48) * 1.0909090909090908 <= 1100 && (l.h + 48) * 1.0909090909090908 <= 1400, y = m ? { ...$, camera: d, levels: z((N) => ({ ...N, state: { ...N.state, camera: d } }))($.levels) } : $;
  if (n === "CanvasRenderer")
    return () => {
      const N = h(), T = bv(t), w = Mr({ padding: 8, outputAspect: x })(y), k = (() => {
        if (e.tag === "FixedSize")
          return { w: e._1, h: e._2 };
        if (e.tag === "AutoSize") {
          if (m)
            return { w: w.vw * 1.0909090909090908, h: w.vh * 1.0909090909090908 };
          const R = Lv(t)();
          return { w: R, h: w.vw <= 0 ? R : R * w.vh / w.vw };
        }
        f();
      })(), L = Ev(), P = k.w * L, O = k.h * L, X = U_(T)(), V = K_(T)(), A = M_(T)(P);
      X !== P && A();
      const B = j_(T)(O);
      if (V !== O && B(), Ys(t, "height", un(yn(fr(k.h))) + "px"), e.tag === "FixedSize")
        Ys(t, "width", un(yn(fr(k.w))) + "px");
      else if (e.tag === "AutoSize") {
        const R = un(yn(fr(k.w))) + "px";
        m && Ys(t, "width", R);
      } else
        f();
      const et = V_(T)();
      cr(et)(), yi(et)({ scaleX: L, scaleY: L })();
      const st = u.value, Y = SJ(r)(o)(et)({ width: k.w, height: k.h })(y)(N)(st)();
      return u.value = Y, ar(et)();
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
      return u.value = w.springs, _i("viewBox")(w.parts.viewBox)(t)(), _i("preserveAspectRatio")("xMidYMid meet")(t)(), e.tag === "FixedSize" ? (_i("width")(un(yn(fr(e._1))))(t)(), _i("height")(un(yn(fr(e._2))))(t)()) : e.tag === "AutoSize" || f(), Sv(w.parts.body, t);
    };
  f();
}, Rv = (t) => {
  const n = Tv(t);
  if (n.tag === "Left")
    return St("Left", n._1);
  if (n.tag === "Right") {
    const e = yl(n._1)($l)._1;
    if (e.tag === "Left")
      return St("Left", e._1.msg);
    if (e.tag === "Right")
      return St("Right", e._1);
  }
  f();
}, Vs = (t) => (n) => {
  const e = Ut((r) => r.startT <= n && n < r.endT)(t.spans);
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
}, Bv = { ...wd, tokenZoomFloor: 1, minZoom: 1.6, maxZoom: 3.2 }, Qv = (t) => (n) => (e) => (r) => (o) => (i) => (s) => () => {
  let u = 1, c = !0, a = !1, g = 0, _ = 0;
  const d = { value: I }, l = { value: 0 };
  let h = !1, p = [];
  Xs(t)(e)(r)(o)(i)(s)(n)(d)(l)(0)();
  const $ = (k) => () => {
    const L = p, P = c, O = { time: k, keyframe: Vs(n)(k), playing: P };
    return Fv((X) => X(O))(L)();
  }, m = () => (c = !1, $(g)()), y = () => {
    if (!h && (a = !1, c)) {
      const P = Pl(), O = _;
      _ = P;
      const X = u, V = g, A = Iv(O === 0 ? V + 0 * X : V + (P - O) * X)(n.totalDuration + 0.8);
      return g = A, Xs(t)(e)(r)(o)(i)(s)(n)(d)(l)(A)(), $(A)(), N();
    }
  }, N = () => {
    if (!h && !a) {
      a = !0;
      const P = wv();
      kv(y)(P)();
    }
  }, T = () => (_ = 0, c = !0, N()), w = () => (c || T(), $(g)());
  return T(), {
    play: w,
    pause: m,
    toggle: () => c ? m() : w(),
    seek: (k) => {
      const L = Pv(0)(Cl(n.totalDuration)(k));
      return () => (g = L, _ = 0, Xs(t)(e)(r)(o)(i)(s)(n)(d)(l)(L)(), $(L)());
    },
    setSpeed: (k) => () => u = k,
    currentTime: () => g,
    currentKeyframe: () => {
      const k = g;
      return Vs(n)(k);
    },
    isPlaying: () => c,
    duration: n.totalDuration,
    subscribe: (k) => () => {
      p = Bt(p)(k);
      const P = g, O = c;
      k({ time: P, keyframe: Vs(n)(P), playing: O })();
      const X = Af((V) => !Cv(V)(k));
      return () => {
        p = X(p);
      };
    },
    destroy: () => h = !0
  };
}, Wv = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = Rv(n);
  if (u.tag === "Left")
    return () => St("Left", u._1);
  if (u.tag === "Right") {
    const c = u._1, a = dg(c);
    return () => {
      const g = a(), _ = hg(c)(), d = Sh(Bv)(yh)(c)(pg(g)(_)(c));
      if (d.tag === "Left")
        return St("Left", "precompute failed");
      if (d.tag === "Right") {
        const l = Qv(t)(d._1)(e)(r)(o)(i)(s)();
        return St("Right", l);
      }
      f();
    };
  }
  f();
}, $f = Fn.createElement;
Fn.Fragment;
function Pc(t) {
  return (n) => Array.isArray(n.children) ? $f.apply(null, [t, n].concat(n.children)) : $f(t, n);
}
function Hv(t) {
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
const Gl = /* @__PURE__ */ Hv(Pc), Dv = /* @__PURE__ */ Gl("canvas")(), Ov = (t, n) => {
  const e = Fn.useRef(n);
  return e.current !== n && !t(e.current, n) && (e.current = n), e.current;
};
Fn.memo;
Fn.memo;
function mf(t, n) {
  const [e, r] = Fn.useState(
    typeof n == "function" ? () => n : n
  );
  return r.hasOwnProperty("$$reactBasicHooks$$cachedSetState") || (r.$$reactBasicHooks$$cachedSetState = (o) => () => r(o)), t(e, r.$$reactBasicHooks$$cachedSetState);
}
function Al(t, n, e) {
  const r = Ov(t, n);
  Fn.useEffect(e, [r]);
}
const zv = Fn.useRef;
function qv(t) {
  return t.current;
}
Fn.useContext;
Fn.useDebugValue;
Fn.useId;
Fn.useDeferredValue;
Fn.useSyncExternalStore;
Fn.useSyncExternalStore;
function Yv(t, n) {
  return n.displayName = t, n.toString = () => t, n;
}
Fn.useEffectEvent || Fn.experimental_useEffectEvent;
const Il = (t) => (n) => (e) => () => Al((r, o) => t.eq(r)(o), n, e), Xv = /* @__PURE__ */ L1(qv), Vv = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, Uv = (t) => {
  const n = {
    apply: (e) => (r) => () => {
      const o = e(), i = r();
      return o(i);
    },
    Functor0: () => Vv
  };
  return { pure: (e) => () => e, Apply0: () => n };
}, Kv = /* @__PURE__ */ Il({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), Mv = /* @__PURE__ */ Il({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), kr = /* @__PURE__ */ Vi(Mi)(Ql), Su = Uv().pure, jv = /* @__PURE__ */ Pc(Dv), Zv = {
  eq: (t) => (n) => (t.renderer === "CanvasRenderer" ? n.renderer === "CanvasRenderer" : t.renderer === "SvgRenderer" && n.renderer === "SvgRenderer") && (t.sizing.tag === "AutoSize" ? n.sizing.tag === "AutoSize" : t.sizing.tag === "FixedSize" && n.sizing.tag === "FixedSize" && t.sizing._1 === n.sizing._1 && t.sizing._2 === n.sizing._2) && t.source === n.source && (t.theme === "Light" ? n.theme === "Light" : t.theme === "Dark" ? n.theme === "Dark" : t.theme === "Blueprint" ? n.theme === "Blueprint" : t.theme === "Whiteboard" ? n.theme === "Whiteboard" : t.theme === "Isometric" && n.theme === "Isometric") && (t.transparency === "PaintBackground" ? n.transparency === "PaintBackground" : t.transparency === "TransparentBackground" && n.transparency === "TransparentBackground")
}, tw = /* @__PURE__ */ Gl("svg")(), Fl = (t) => (n) => {
  const e = Ve(n.theme, x, zt), r = (() => {
    if (e.tag === "Nothing")
      return "light";
    if (e.tag === "Just")
      return e._1;
    f();
  })(), o = Ve(n.renderer, x, zt), i = (() => {
    if (o.tag === "Nothing")
      return "canvas";
    if (o.tag === "Just")
      return o._1;
    f();
  })(), s = Ve(n.paused, x, zt), u = (() => {
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just")
      return s._1;
    f();
  })(), c = r === "light" ? v("Just", cf) : r === "dark" ? v("Just", CJ) : r === "blueprint" ? v("Just", PJ) : r === "whiteboard" ? v("Just", GJ) : r === "isometric" ? v("Just", AJ) : x, a = i === "svg" ? v("Just", Av) : i === "canvas" ? v("Just", pf) : x, g = {
    source: t,
    renderer: (() => {
      if (a.tag === "Nothing")
        return pf;
      if (a.tag === "Just")
        return a._1;
      f();
    })(),
    sizing: (() => {
      const _ = Ve(n.width, x, zt);
      if (_.tag === "Just") {
        const d = Ve(n.height, x, zt);
        if (d.tag === "Just")
          return Sl("FixedSize", _._1, d._1);
      }
      return Gv;
    })(),
    theme: (() => {
      if (c.tag === "Nothing")
        return cf;
      if (c.tag === "Just")
        return c._1;
      f();
    })(),
    transparency: (() => {
      const _ = Ve(n.transparent, x, zt);
      if (_.tag === "Nothing")
        return !1;
      if (_.tag === "Just")
        return _._1;
      f();
    })() ? FJ : IJ
  };
  return () => {
    const _ = zv(Wl), d = mf(($, m) => b($, m), x), l = d._1, h = mf(($, m) => b($, m), { time: 0, keyframe: "", playing: !1 });
    Kv(b(i, r))((() => {
      const $ = Gc("[markgraf] unknown renderer " + Us(i) + ", defaulting to canvas"), m = (() => {
        if (a.tag === "Nothing")
          return !0;
        if (a.tag === "Just")
          return !1;
        f();
      })() ? $ : () => {
      };
      return () => {
        m();
        const y = Gc("[markgraf] unknown theme " + Us(r) + ", defaulting to light");
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
    const p = Xv(_);
    return Al(
      ($, m) => Zv.eq($)(m),
      g,
      () => {
        const $ = p(), m = Ve($, x, zt), y = (() => {
          if (m.tag === "Just")
            return vv(x, zt, "Element", m._1);
          if (m.tag === "Nothing")
            return x;
          f();
        })();
        if (y.tag === "Nothing")
          return () => {
          };
        if (y.tag === "Just") {
          const N = Wv(y._1)(g.source)(g.renderer)(g.sizing)(g.theme)(g.transparency)(!0)();
          if (N.tag === "Left")
            return zl("[markgraf] " + N._1)(), () => {
            };
          if (N.tag === "Right") {
            const T = N._1;
            d._2((k) => v("Just", T))();
            const w = T.subscribe((k) => h._2((L) => k))();
            return () => (w(), T.destroy(), d._2((k) => x)());
          }
        }
        f();
      }
    ), Mv(b(
      u,
      (() => {
        if (l.tag === "Nothing")
          return !1;
        if (l.tag === "Just")
          return !0;
        f();
      })()
    ))((() => {
      const $ = kr((m) => u ? m.pause : m.play)(l);
      return () => ($(), () => {
      });
    })())(), Su({
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
      play: kr(($) => $.play)(l),
      pause: kr(($) => $.pause)(l),
      toggle: kr(($) => $.toggle)(l),
      seek: ($) => kr((m) => m.seek($))(l),
      setSpeed: ($) => kr((m) => m.setSpeed($))(l)
    })();
  };
}, nw = /* @__PURE__ */ Yv(
  "MarkgrafPlayer",
  (t) => {
    const n = Fl(t.src)({ renderer: t.renderer, width: t.width, height: t.height, theme: t.theme, transparent: t.transparent, paused: t.paused })(), e = Ve(t.renderer, x, zt);
    return (() => {
      if (e.tag === "Nothing")
        return "canvas";
      if (e.tag === "Just")
        return e._1;
      f();
    })() === "svg" ? Su(Pc(tw)({ className: "markgraf-player", ref: n.elementRef }))() : Su(jv({ className: "markgraf-player", ref: n.elementRef }))();
  }
), rw = (t, n) => Fl(t)(n ?? {}), ow = nw;
export {
  ow as MarkgrafPlayer,
  rw as useMarkgraf
};
