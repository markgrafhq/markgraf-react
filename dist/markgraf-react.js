import mn from "react";
function vf(t) {
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
function Ke(t, n) {
  return n > 0 ? Math.floor(t / n) : n < 0 ? -Math.floor(t / -n) : 0;
}
const an = function(t) {
  return t.toString();
}, ec = function(t) {
  var n = t.toString();
  return isNaN(n + ".0") ? n : n + ".0";
}, Tf = function(t) {
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
}, Yi = (t) => t, dn = /* @__PURE__ */ Yi("LT"), hn = /* @__PURE__ */ Yi("GT"), yn = /* @__PURE__ */ Yi("EQ"), b = (t, n) => ({ tag: t, _1: n }), T = /* @__PURE__ */ b("Nothing"), Yt = (t) => b("Just", t), rc = (t) => {
  if (t.tag === "Nothing")
    return !0;
  if (t.tag === "Just")
    return !1;
  f();
}, yf = (t) => {
  if (t.tag === "Nothing")
    return !1;
  if (t.tag === "Just")
    return !0;
  f();
}, wf = null;
function Ye(t, n, e) {
  return t == null ? n : e(t);
}
const L = (t, n) => ({ tag: "Tuple", _1: t, _2: n }), gr = (t) => (n) => L(t, n), Ro = (t) => t._2, Fo = (t) => t._1, Lf = function(t) {
  return function() {
    console.log(t);
  };
}, Ln = (t) => (n) => t, O = function(t) {
  return function(n) {
    for (var e = n.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = t(n[o]);
    return r;
  };
}, kf = { map: O }, oc = (t) => t, bt = typeof Array.prototype.flatMap == "function" ? function(t) {
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
}, kt = (t, n) => ({ tag: t, _1: n }), bf = (t) => kt("Right", t), Ef = {
  map: (t) => (n) => {
    if (n.tag === "Left")
      return kt("Left", n._1);
    if (n.tag === "Right")
      return kt("Right", t(n._1));
    f();
  }
}, ic = {
  apply: (t) => (n) => {
    if (t.tag === "Left")
      return kt("Left", t._1);
    if (t.tag === "Right") {
      if (n.tag === "Left")
        return kt("Left", n._1);
      if (n.tag === "Right")
        return kt("Right", t._1(n._1));
    }
    f();
  },
  Functor0: () => Ef
}, xf = {
  bind: (t) => {
    if (t.tag === "Left") {
      const n = t._1;
      return (e) => kt("Left", n);
    }
    if (t.tag === "Right") {
      const n = t._1;
      return (e) => e(n);
    }
    f();
  },
  Apply0: () => ic
}, Cf = { pure: bf, Apply0: () => ic }, Sf = { Applicative0: () => Cf, Bind1: () => xf }, Gf = (t) => t, If = { map: (t) => (n) => t(n) }, sc = { apply: (t) => (n) => t(n), Functor0: () => If }, Pf = { bind: (t) => (n) => n(t), Apply0: () => sc }, Af = { pure: Gf, Apply0: () => sc }, Te = { Applicative0: () => Af, Bind1: () => Pf }, Rf = function(t) {
  return function() {
    return t;
  };
}, Ff = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return Xi.pure(e(r))();
  },
  Functor0: () => Bf
}, Xi = { pure: Rf, Apply0: () => Ff }, Bf = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, vr = (t, n) => ({ tag: t, _1: n }), uc = (t) => vr("Loop", t), Qf = {
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
  Monad0: () => Te
}, Df = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, Wf = function(t, n) {
  return n.push(t);
}, qf = /* @__PURE__ */ Df(Wf), Hf = (t, n) => ({ tag: "Iterator", _1: t, _2: n }), Of = (t) => (n) => (e) => () => {
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
}, zf = (t) => (n) => () => {
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
}, br = function(t) {
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
}, Vf = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldr((o) => {
    const i = r(o);
    return (s) => n.apply(n.Functor0().map((u) => oc)(i))(s);
  })(t.pure());
}, Bt = {
  foldr: br,
  foldl: J,
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => Bt.foldr((r) => (o) => t.Semigroup0().append(e(r))(o))(n);
  }
}, Pt = function(t) {
  return function(n) {
    for (var e = n.length, r = Array(e), o = 0; o < e; o++)
      r[o] = t(o)(n[o]);
    return r;
  };
};
var Ui = function(t) {
  return function(n) {
    return t === n;
  };
};
const Yf = Ui, Xf = Ui, Mi = Ui, Uf = function(t) {
  return function(n) {
    return function(e) {
      if (n.length !== e.length) return !1;
      for (var r = 0; r < n.length; r++)
        if (!t(n[r])(e[r])) return !1;
      return !0;
    };
  };
}, te = { eq: Mi }, Mf = { eq: Xf }, Er = { eq: Yf };
var Ki = function(t) {
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
const Kf = Ki, jf = Ki, Zf = Ki, G = { compare: /* @__PURE__ */ Zf(dn)(yn)(hn), Eq0: () => te }, pt = { compare: /* @__PURE__ */ jf(dn)(yn)(hn), Eq0: () => Mf }, rt = { compare: /* @__PURE__ */ Kf(dn)(yn)(hn), Eq0: () => Er }, tg = function(t) {
  return t;
}, ng = /* @__PURE__ */ (function() {
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
            function a(g, l) {
              switch (l - g) {
                case 0:
                  return s([]);
                case 1:
                  return i(t)(u(c[g]));
                case 2:
                  return o(i(n)(u(c[g])))(u(c[g + 1]));
                case 3:
                  return o(o(i(e)(u(c[g])))(u(c[g + 1])))(u(c[g + 2]));
                default:
                  var d = g + Math.floor((l - g) / 4) * 2;
                  return o(i(r)(a(g, d)))(a(d, l));
              }
            }
            return a(0, c.length);
          };
        };
      };
    };
  };
})(), eg = (t) => t, Yr = {
  traverse: (t) => {
    const n = t.Apply0();
    return ng(n.apply)(n.Functor0().map)(t.pure);
  },
  sequence: (t) => Yr.traverse(t)(eg),
  Functor0: () => kf,
  Foldable1: () => Bt
}, Xt = function(t, n) {
  for (var e = t > n ? -1 : 1, r = new Array(e * (n - t) + 1), o = t, i = 0; o !== n; )
    r[i++] = o, o += e;
  return r[i] = o, r;
};
var rg = function(t, n) {
  if (t < 1)
    return [];
  var e = new Array(t);
  return e.fill(n);
}, og = function(t, n) {
  for (var e = [], r = 0, o = 0; o < t; o++)
    e[r++] = n;
  return e;
};
const ig = typeof Array.prototype.fill == "function" ? rg : og, Et = /* @__PURE__ */ (function() {
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
}, sg = function(t, n, e, r) {
  for (var o = 0; o < r.length; o++) {
    var i = e(r[o]);
    if (n(i)) return i;
  }
  return t;
}, er = function(t, n, e, r) {
  for (var o = 0, i = r.length; o < i; o++)
    if (e(r[o])) return t(o);
  return n;
}, ug = function(t, n, e, r) {
  for (var o = r.length - 1; o >= 0; o--)
    if (e(r[o])) return t(o);
  return n;
}, cg = function(t, n, e, r, o) {
  if (e < 0 || e > o.length) return n;
  var i = o.slice();
  return i.splice(e, 0, r), t(i);
}, cc = function(t, n, e, r) {
  if (e < 0 || e >= r.length) return n;
  var o = r.slice();
  return o.splice(e, 1), t(o);
}, rr = function(t, n, e, r, o) {
  if (e < 0 || e >= o.length) return n;
  var i = o.slice();
  return i[e] = r, t(i);
}, vn = function(t) {
  return t.slice().reverse();
}, Cn = function(t) {
  if (t.length <= 1e4)
    return Array.prototype.concat.apply([], t);
  for (var n = [], e = 0, r = t.length; e < r; e++)
    for (var o = t[e], i = 0, s = o.length; i < s; i++)
      n.push(o[i]);
  return n;
}, gt = function(t, n) {
  return n.filter(t);
}, ag = /* @__PURE__ */ (function() {
  function t(n, e, r, o, i, s) {
    var u, c, a, g, l, d, _;
    for (u = i + (s - i >> 1), u - i > 1 && t(n, e, o, r, i, u), s - u > 1 && t(n, e, o, r, u, s), c = i, a = u, g = i; c < u && a < s; )
      l = o[c], d = o[a], _ = e(n(l)(d)), _ > 0 ? (r[g++] = d, ++a) : (r[g++] = l, ++c);
    for (; c < u; )
      r[g++] = o[c++];
    for (; a < s; )
      r[g++] = o[a++];
  }
  return function(n, e, r) {
    var o;
    return r.length < 2 ? r : (o = r.slice(0), t(n, e, o, r.slice(0), 0, r.length), o);
  };
})(), Gt = function(t, n, e) {
  return e.slice(t, n);
}, $n = function(t, n, e) {
  for (var r = n.length < e.length ? n.length : e.length, o = new Array(r), i = 0; i < r; i++)
    o[i] = t(n[i])(e[i]);
  return o;
}, de = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (t(n[r])) return !0;
  return !1;
}, ac = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (!t(n[r])) return !1;
  return !0;
}, Lt = (t) => (n) => ag(
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
), fg = (t) => (n) => Lt((e) => (r) => t.compare(n(e))(n(r))), gn = (t) => (n) => (() => {
  const e = qf(n);
  return () => {
    const r = [...t];
    return e(r)(), r;
  };
})()(), gg = (t) => {
  if (t.length === 0)
    return t.length - 1 | 0, T;
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? b("Just", { init: Gt(0, t.length - 1 | 0, t), last: t[n] }) : T;
}, _g = (t) => (n) => (e) => t >= 0 && t < e.length ? rr(Yt, T, t, n(e[t]), e) : T, Ce = (t) => (n) => {
  const r = ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if (c >= 0 && c < n.length) {
        if (t(n[c])) {
          i = c + 1 | 0;
          continue;
        }
        s = !1, u = b("Just", c);
        continue;
      }
      s = !1, u = T;
    }
    return u;
  })(0);
  if (r.tag === "Just")
    return r._1 === 0 ? { init: [], rest: n } : { init: Gt(0, r._1, n), rest: Gt(r._1, n.length, n) };
  if (r.tag === "Nothing")
    return { init: n, rest: [] };
  f();
}, or = (t) => (n) => {
  const e = Lt((r) => (o) => t(r._2)(o._2))(Pt(gr)(n));
  return 0 < e.length ? O(Ro)(fg(rt)(Fo)((() => {
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
}, lg = (t) => (n) => {
  const e = [], o = Hf(
    (i) => i >= 0 && i < n.length ? b("Just", n[i]) : T,
    { value: 0 }
  );
  return zf(o)((i) => () => {
    const s = [];
    s.push(i), Of(t(i))(o)(s)(), e.push(s);
  })(), e;
}, ln = (t) => (n) => {
  const e = er(Yt, T, t, n);
  return e.tag === "Just" ? b("Just", n[e._1]) : T;
}, fc = (t) => (n) => gt(t, n), In = (t) => (n) => (e) => {
  const r = er(Yt, T, (o) => t.eq(o)(n), e);
  if (r.tag === "Nothing")
    return !1;
  if (r.tag === "Just")
    return !0;
  f();
}, gc = (t) => (n) => bt(n)(t), vt = (t) => gc((n) => {
  const e = t(n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [e._1];
  f();
}), dg = isFinite, ir = Math.abs, ji = Math.ceil, Zi = Math.cos, _c = Math.exp, lc = Math.floor, yi = function(t) {
  return function(n) {
    return Math.pow(t, n);
  };
}, jr = Math.round, ts = Math.sin, _r = Math.sqrt, hg = function(t) {
  return function(n) {
    return function(e) {
      return (e | 0) === e ? t(e) : n;
    };
  };
}, ct = function(t) {
  return t;
}, pg = function(t) {
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
}, $g = /* @__PURE__ */ pg(Yt)(T), mg = /* @__PURE__ */ $g(10), dc = /* @__PURE__ */ hg(Yt)(T), ce = (t) => {
  if (!dg(t))
    return 0;
  if (t >= ct(2147483647))
    return 2147483647;
  if (t <= ct(-2147483648))
    return -2147483648;
  const n = dc(t);
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return n._1;
  f();
}, qt = (t, n, e) => ({ tag: t, _1: n, _2: e }), zt = /* @__PURE__ */ qt("Nil"), Mt = {
  foldr: (t) => (n) => {
    const e = Mt.foldl((i) => (s) => t(s)(i))(n), o = ((i) => (s) => {
      let u = i, c = s, a = !0, g;
      for (; a; ) {
        const l = u, d = c;
        if (d.tag === "Nil") {
          a = !1, g = l;
          continue;
        }
        if (d.tag === "Cons") {
          u = qt("Cons", d._1, l), c = d._2;
          continue;
        }
        f();
      }
      return g;
    })(zt);
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
    return (e) => Mt.foldl((r) => {
      const o = t.Semigroup0().append(r);
      return (i) => o(e(i));
    })(n);
  }
}, Ng = function(t) {
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
}, Jg = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, vg = { unfoldr1: /* @__PURE__ */ Ng(rc)(Jg)(Fo)(Ro) }, Tg = function(t) {
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
}, yg = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, On = {
  unfoldr: /* @__PURE__ */ Tg(rc)(yg)(Fo)(Ro),
  Unfoldable10: () => vg
}, Dt = (t, n, e, r, o, i, s) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s }), Wn = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), Zr = (t, n, e) => ({ tag: "Split", _1: t, _2: n, _3: e }), Ks = (t, n, e) => ({ tag: "SplitLast", _1: t, _2: n, _3: e }), Q = /* @__PURE__ */ Dt("Leaf"), Qe = /* @__PURE__ */ Wn("IterLeaf"), en = (t, n, e, r) => {
  if (e.tag === "Leaf") {
    if (r.tag === "Leaf")
      return Dt("Node", 1, 1, t, n, e, r);
    if (r.tag === "Node")
      return Dt("Node", 1 + r._1 | 0, 1 + r._2 | 0, t, n, e, r);
    f();
  }
  if (e.tag === "Node") {
    if (r.tag === "Leaf")
      return Dt("Node", 1 + e._1 | 0, 1 + e._2 | 0, t, n, e, r);
    if (r.tag === "Node")
      return Dt("Node", e._1 > r._1 ? 1 + e._1 | 0 : 1 + r._1 | 0, (1 + e._2 | 0) + r._2 | 0, t, n, e, r);
  }
  f();
}, kn = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r.tag === "Leaf" ? Dt("Node", 1, 1, t, n, Q, Q) : r.tag === "Node" && r._1 > 1 ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      f();
    })() ? en(r._5._3, r._5._4, en(t, n, e, r._5._5), en(r._3, r._4, r._5._6, r._6)) : en(r._3, r._4, en(t, n, e, r._5), r._6) : en(t, n, e, r);
  if (e.tag === "Node")
    return r.tag === "Node" ? r._1 > (e._1 + 1 | 0) ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      f();
    })() ? en(r._5._3, r._5._4, en(t, n, e, r._5._5), en(r._3, r._4, r._5._6, r._6)) : en(r._3, r._4, en(t, n, e, r._5), r._6) : e._1 > (r._1 + 1 | 0) ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      f();
    })() ? en(e._6._3, e._6._4, en(e._3, e._4, e._5, e._6._5), en(t, n, e._6._6, r)) : en(e._3, e._4, e._5, en(t, n, e._6, r)) : en(t, n, e, r) : r.tag === "Leaf" && e._1 > 1 ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      f();
    })() ? en(e._6._3, e._6._4, en(e._3, e._4, e._5, e._6._5), en(t, n, e._6._6, r)) : en(e._3, e._4, e._5, en(t, n, e._6, r)) : en(t, n, e, r);
  f();
}, sr = (t, n, e) => {
  if (e.tag === "Leaf")
    return Zr(T, Q, Q);
  if (e.tag === "Node") {
    const r = t(n)(e._3);
    if (r === "LT") {
      const o = sr(t, n, e._5);
      return Zr(o._1, o._2, kn(e._3, e._4, o._3, e._6));
    }
    if (r === "GT") {
      const o = sr(t, n, e._6);
      return Zr(o._1, kn(e._3, e._4, e._5, o._2), o._3);
    }
    if (r === "EQ")
      return Zr(b("Just", e._4), e._5, e._6);
  }
  f();
}, hc = (t, n, e, r) => {
  if (r.tag === "Leaf")
    return Ks(t, n, e);
  if (r.tag === "Node") {
    const o = hc(r._3, r._4, r._5, r._6);
    return Ks(o._1, o._2, kn(t, n, e, o._3));
  }
  f();
}, Xr = (t, n) => {
  if (t.tag === "Leaf")
    return n;
  if (t.tag === "Node") {
    const e = hc(t._3, t._4, t._5, t._6);
    return kn(e._1, e._2, e._3, n);
  }
  f();
}, ae = (t, n, e) => {
  if (n.tag === "Leaf")
    return Q;
  if (e.tag === "Leaf")
    return n;
  if (e.tag === "Node") {
    const r = sr(t, e._3, n);
    return Xr(ae(t, r._2, e._5), ae(t, r._3, e._6));
  }
  f();
}, po = (t, n, e, r) => {
  if (e.tag === "Leaf" || r.tag === "Leaf")
    return Q;
  if (r.tag === "Node") {
    const o = sr(t, r._3, e), i = po(t, n, o._2, r._5), s = po(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return kn(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return Xr(i, s);
  }
  f();
}, bn = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r;
  if (r.tag === "Leaf")
    return e;
  if (r.tag === "Node") {
    const o = sr(t, r._3, e), i = bn(t, n, o._2, r._5), s = bn(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return kn(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return kn(r._3, r._4, i, s);
  }
  f();
}, wg = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return Q;
    if (r.tag === "Node") {
      const o = n(r._3)(r._4);
      if (o.tag === "Just")
        return kn(r._3, o._1, e(r._5), e(r._6));
      if (o.tag === "Nothing")
        return Xr(e(r._5), e(r._6));
    }
    f();
  };
  return e;
}, Lg = (t) => (n) => (r) => {
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
        let l = a, d = g, _ = !0, h;
        for (; _; ) {
          const p = l, $ = d;
          if ($.tag === "Leaf") {
            _ = !1, h = p;
            continue;
          }
          if ($.tag === "Node") {
            if ($._6.tag === "Leaf") {
              l = Wn("IterEmit", $._3, $._4, p), d = $._5;
              continue;
            }
            l = Wn("IterEmit", $._3, $._4, Wn("IterNode", $._6, p)), d = $._5;
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
}, De = /* @__PURE__ */ Lg((t, n, e) => b("Just", L(L(t, n), e)))((t) => T), yt = (t) => (n) => (e) => (r) => {
  const o = (i) => {
    if (i.tag === "Leaf")
      return Dt("Node", 1, 1, e, r, Q, Q);
    if (i.tag === "Node") {
      const s = t.compare(e)(i._3);
      if (s === "LT")
        return kn(i._3, i._4, o(i._5), i._6);
      if (s === "GT")
        return kn(i._3, i._4, i._5, o(i._6));
      if (s === "EQ")
        return Dt("Node", i._1, i._2, e, n(i._4)(r), i._5, i._6);
    }
    f();
  };
  return o;
}, Y = (t) => (n) => (e) => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return Dt("Node", 1, 1, n, e, Q, Q);
    if (o.tag === "Node") {
      const i = t.compare(n)(o._3);
      if (i === "LT")
        return kn(o._3, o._4, r(o._5), o._6);
      if (i === "GT")
        return kn(o._3, o._4, o._5, r(o._6));
      if (i === "EQ")
        return Dt("Node", o._1, o._2, n, e, o._5, o._6);
    }
    f();
  };
  return r;
}, jt = (t) => (n) => n.foldl((e) => (r) => Y(t)(r._1)(r._2)(e))(Q), xr = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return Q;
    if (r.tag === "Node") {
      const o = t.compare(n)(r._3);
      if (o === "LT")
        return kn(r._3, r._4, e(r._5), r._6);
      if (o === "GT")
        return kn(r._3, r._4, r._5, e(r._6));
      if (o === "EQ")
        return Xr(r._5, r._6);
    }
    f();
  };
  return e;
}, kg = (t) => {
  const n = t.compare;
  return (e) => (r) => (o) => {
    const i = sr(n, r, o), s = e(i._1);
    if (s.tag === "Nothing")
      return Xr(i._2, i._3);
    if (s.tag === "Just")
      return kn(r, s._1, i._2, i._3);
    f();
  };
}, Zt = function(t) {
  return function(n) {
    return t + n | 0;
  };
}, ur = function(t) {
  return function(n) {
    return t + n;
  };
}, ns = function(t) {
  return function(n) {
    if (n === 0) return 0;
    var e = Math.abs(n);
    return (t % e + e) % e;
  };
}, fn = function(t) {
  return function(n) {
    return t.length === 0 ? n : n.length === 0 ? t : t.concat(n);
  };
};
function es(t) {
  return function(n) {
    return function(e) {
      return t.apply(e, [n]);
    };
  };
}
const bg = es(Number.prototype.toPrecision), Eg = es(Number.prototype.toFixed), xg = es(Number.prototype.toExponential), Xn = (t, n) => ({ tag: t, _1: n }), Un = (t) => (n) => (e) => {
  const r = rt.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = rt.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, Mn = (t) => {
  if (t.tag === "Precision")
    return bg(t._1);
  if (t.tag === "Fixed")
    return Eg(t._1);
  if (t.tag === "Exponential")
    return xg(t._1);
  f();
};
function pc() {
  return Date.now();
}
function Cg(t) {
  return function() {
    return t.getContext("2d");
  };
}
function Sg(t) {
  return function() {
    return t.width;
  };
}
function Gg(t) {
  return function() {
    return t.height;
  };
}
function Ig(t) {
  return function(n) {
    return function() {
      t.width = n;
    };
  };
}
function Pg(t) {
  return function(n) {
    return function() {
      t.height = n;
    };
  };
}
function rs(t) {
  return function(n) {
    return function() {
      t.lineWidth = n;
    };
  };
}
function Ag(t) {
  return function(n) {
    return function() {
      t.fillStyle = n;
    };
  };
}
function Rg(t) {
  return function(n) {
    return function() {
      t.strokeStyle = n;
    };
  };
}
function ni(t) {
  return function(n) {
    return function() {
      t.lineCap = n;
    };
  };
}
function ei(t) {
  return function(n) {
    return function() {
      t.lineJoin = n;
    };
  };
}
function Fg(t) {
  return function(n) {
    return function() {
      t.globalCompositeOperation = n;
    };
  };
}
function Bg(t) {
  return function(n) {
    return function() {
      t.globalAlpha = n;
    };
  };
}
function $c(t) {
  return function() {
    t.beginPath();
  };
}
function os(t) {
  return function() {
    t.stroke();
  };
}
function is(t) {
  return function() {
    t.fill();
  };
}
function Qg(t) {
  return function() {
    t.clip();
  };
}
function Dg(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.lineTo(n, e);
      };
    };
  };
}
function Wg(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.moveTo(n, e);
      };
    };
  };
}
function qg(t) {
  return function() {
    t.closePath();
  };
}
function Hg(t) {
  return function(n) {
    return function() {
      t.fillRect(n.x, n.y, n.width, n.height);
    };
  };
}
function Og(t) {
  return function(n) {
    return function() {
      t.clearRect(n.x, n.y, n.width, n.height);
    };
  };
}
function ss(t) {
  return function(n) {
    return function() {
      t.scale(n.scaleX, n.scaleY);
    };
  };
}
function mc(t) {
  return function(n) {
    return function() {
      t.translate(n.translateX, n.translateY);
    };
  };
}
function zg(t) {
  return function(n) {
    return function() {
      t.textAlign = n;
    };
  };
}
function Vg(t) {
  return function(n) {
    return function() {
      t.textBaseline = n;
    };
  };
}
function Yg(t) {
  return function(n) {
    return function() {
      t.font = n;
    };
  };
}
function Xg(t) {
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
function hr(t) {
  return function() {
    t.save();
  };
}
function pr(t) {
  return function() {
    t.restore();
  };
}
function Ug(t) {
  return function(n) {
    return function() {
      t.quadraticCurveTo(n.cpx, n.cpy, n.x, n.y);
    };
  };
}
function Mg(t) {
  return function(n) {
    return function() {
      t.bezierCurveTo(n.cp1x, n.cp1y, n.cp2x, n.cp2y, n.x, n.y);
    };
  };
}
const Nc = (t) => t, us = (t) => t, cs = (t) => t, as = (t) => t, Bo = (t) => t, Kg = /* @__PURE__ */ Bo("BaselineTop"), jg = /* @__PURE__ */ Bo("BaselineMiddle"), Zg = /* @__PURE__ */ Bo("BaselineAlphabetic"), t0 = /* @__PURE__ */ Bo("BaselineBottom"), n0 = /* @__PURE__ */ as("AlignLeft"), e0 = /* @__PURE__ */ as("AlignRight"), r0 = /* @__PURE__ */ as("AlignCenter"), fs = /* @__PURE__ */ cs("BevelJoin"), Qo = /* @__PURE__ */ cs("RoundJoin"), gs = /* @__PURE__ */ cs("MiterJoin"), _s = /* @__PURE__ */ us("Round"), ls = /* @__PURE__ */ us("Square"), ds = /* @__PURE__ */ us("Butt"), o0 = /* @__PURE__ */ Nc("SourceOver"), i0 = /* @__PURE__ */ Nc("Difference"), s0 = (t) => (n) => Vg(t)((() => {
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
})()), u0 = (t) => (n) => zg(t)((() => {
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
})()), Do = (t) => (n) => {
  if (n === "BevelJoin")
    return ei(t)("bevel");
  if (n === "RoundJoin")
    return ei(t)("round");
  if (n === "MiterJoin")
    return ei(t)("miter");
  f();
}, hs = (t) => (n) => {
  if (n === "Round")
    return ni(t)("round");
  if (n === "Square")
    return ni(t)("square");
  if (n === "Butt")
    return ni(t)("butt");
  f();
}, js = (t) => (n) => Fg(t)((() => {
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
})()), Pn = {
  foldr: (t) => (n) => {
    const e = Mt.foldr(t)(n);
    return (r) => e((() => {
      const o = (i, s) => {
        if (i.tag === "Leaf")
          return s;
        if (i.tag === "Node")
          return o(i._5, qt("Cons", i._3, o(i._6, s)));
        f();
      };
      return o(r, zt);
    })());
  }
}, Wo = (t) => t, c0 = (t) => t, a0 = /* @__PURE__ */ Wo("Linear"), f0 = /* @__PURE__ */ Wo("EaseInOutQuad"), g0 = /* @__PURE__ */ Wo("EaseOutExpo"), _0 = /* @__PURE__ */ Wo("SpringBouncy"), Cr = (t) => (n) => (e) => {
  const r = _r(1 - n * n), o = t * r;
  return 1 - _c(-n * t * e) * (Zi(o * e) + n / r * ts(o * e));
}, l0 = (t) => {
  const n = pt.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = pt.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, ps = (t) => (n) => (() => {
  if (t === "Linear")
    return c0;
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
    return (e) => e >= 1 ? 1 : 1 - yi(2)(-10 * e);
  if (t === "Spring")
    return (e) => 1 - (1 + 6 * e) * _c(-6 * e);
  if (t === "SpringBouncy")
    return Cr(6)(0.7);
  f();
})()(l0(n)), Jc = /* @__PURE__ */ J(ur)(0), d0 = (t) => (n) => (e) => {
  const r = pt.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = pt.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, Zs = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, tu = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, vc = (t) => (n) => {
  const e = $n(
    (s) => (u) => ({
      a: s,
      b: u,
      len: (() => {
        const c = u.y - s.y, a = u.x - s.x;
        return _r(a * a + c * c);
      })()
    }),
    t,
    Gt(1, t.length, t)
  ), r = Jc(O((s) => s.len)(e)), o = d0(0)(r)(n * r), i = (s) => (u) => (c) => {
    let a = s, g = u, l = c, d = !0, _;
    for (; d; ) {
      const h = a, p = g, $ = l, m = Wt((N) => T, (N) => (v) => b("Just", { head: N, tail: v }), h);
      if (m.tag === "Nothing") {
        const N = t.length - 1 | 0;
        if (N >= 0 && N < t.length) {
          d = !1, _ = t[N];
          continue;
        }
        d = !1, _ = $;
        continue;
      }
      if (m.tag === "Just") {
        if (p <= m._1.head.len) {
          const N = m._1.head.len <= 0 ? 0 : p / m._1.head.len;
          d = !1, _ = { x: m._1.head.a.x + (m._1.head.b.x - m._1.head.a.x) * N, y: m._1.head.a.y + (m._1.head.b.y - m._1.head.a.y) * N };
          continue;
        }
        a = m._1.tail, g = p - m._1.head.len, l = $;
        continue;
      }
      f();
    }
    return _;
  };
  return 0 < t.length ? b("Just", i(e)(o)(t[0])) : T;
}, $s = (t) => Jc($n(
  (n) => (e) => {
    const r = e.y - n.y, o = e.x - n.x;
    return _r(o * o + r * r);
  },
  t,
  Gt(1, t.length, t)
)), ye = (t) => {
  const n = Wt(
    (e) => T,
    (e) => (r) => b("Just", { head: e, tail: r }),
    [
      ...(() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, qt("Cons", r._4, e(r._6, o)));
          f();
        };
        return bt(Et(Mt.foldr, e(t.nodes, zt)))((r) => [
          { x: r.x, y: r.y },
          { x: r.x + r.w, y: r.y + r.h }
        ]);
      })(),
      ...Cn((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, qt("Cons", r._4, e(r._6, o)));
          f();
        };
        return Et(Mt.foldr, e(t.edges, zt));
      })()),
      ...Cn((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, qt("Cons", r._4, e(r._6, o)));
          f();
        };
        return Et(Mt.foldr, e(t.chipExtras, zt));
      })())
    ]
  );
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: Zs(r.minX)(o.x), minY: Zs(r.minY)(o.y), maxX: tu(r.maxX)(o.x), maxY: tu(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, Tr = function(t) {
  return function(n) {
    if (t >= 0 && t < n.length) return n.charAt(t);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
}, We = function(t) {
  return t.join("");
}, ms = function(t) {
  return t.split("");
}, Ns = function(t) {
  return t;
}, Pe = function(t) {
  return t.length;
}, nu = function(t) {
  return function(n) {
    return n.substr(0, t);
  };
}, Sr = function(t) {
  return function(n) {
    return n.substring(t);
  };
}, h0 = function(t) {
  return function(n) {
    return { before: n.substring(0, t), after: n.substring(t) };
  };
}, p0 = (t) => (n) => {
  const e = h0(Pe(t))(n);
  return e.before === t ? b("Just", e.after) : T;
}, $0 = function(n) {
  return function(e) {
    return function() {
      return n(e);
    };
  };
}, m0 = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, N0 = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, Ae = (t) => BigInt(t), J0 = (t) => Number(t), lo = (t) => (n) => t + n, ho = (t) => (n) => t * n, wi = (t) => (n) => t - n, Tc = 0n, $o = 1n, yc = (t) => (n) => t ^ n, Gr = (t) => (n) => t & n, Js = (t) => (n) => t << n, Li = (t) => (n) => t >> n, v0 = (t) => (n) => t == n, T0 = (t) => (n) => t === n ? 0 : t > n ? 1 : -1, y0 = { eq: v0 }, eu = {
  compare: (t) => (n) => {
    const e = T0(t)(n);
    return e === 1 ? hn : e === 0 ? yn : dn;
  },
  Eq0: () => y0
}, w0 = /* @__PURE__ */ m0(Yt)(T), L0 = /* @__PURE__ */ N0(Yt)(T), wc = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = pt.compare(n._1)(e._1);
      return r === "LT" ? dn : r === "GT" ? hn : pt.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), k0 = (t) => (n) => ir(t._1 - n._1) + ir(t._2 - n._2), qo = (t) => t, un = /* @__PURE__ */ qo("North"), cn = /* @__PURE__ */ qo("South"), Kn = /* @__PURE__ */ qo("East"), xe = /* @__PURE__ */ qo("West"), ru = (t) => t, Lc = (t) => t, ou = (t, n) => ({ tag: t, _1: n }), kc = (t, n) => ({ tag: t, _1: n }), vs = (t, n) => ({ tag: t, _1: n }), b0 = /* @__PURE__ */ vs("First"), E0 = /* @__PURE__ */ Lc("Forward"), x0 = /* @__PURE__ */ Lc("Backward"), C0 = /* @__PURE__ */ jt(G)(Bt), S0 = (t) => br((n) => (e) => ({
  nodes: bn(G.compare, Ln, n.nodes, e.nodes),
  edges: bn(G.compare, Ln, n.edges, e.edges)
}))({ nodes: Q, edges: Q })(t.keyframes), G0 = (t) => (n) => ({
  entering: {
    nodes: ae(G.compare, n.nodes, t.nodes),
    edges: ae(G.compare, n.edges, t.edges)
  },
  leaving: {
    nodes: ae(G.compare, t.nodes, n.nodes),
    edges: ae(G.compare, t.edges, n.edges)
  },
  surviving: {
    nodes: po(G.compare, Ln, t.nodes, n.nodes),
    edges: po(G.compare, Ln, t.edges, n.edges)
  }
}), bc = (t) => t, Ts = (t) => (n) => (e) => {
  const r = pt.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = pt.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, Re = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, cr = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, je = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ki = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
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
}, I0 = /* @__PURE__ */ J((t) => (n) => Y(G)(n)()(t))(Q), P0 = /* @__PURE__ */ J((t) => (n) => Y(G)(n)()(t))(Q), A0 = /* @__PURE__ */ (() => {
  const t = On.unfoldr(De);
  return (n) => t(Wn("IterNode", n, Qe));
})(), Ec = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, iu = /* @__PURE__ */ jt(G)(Bt), R0 = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, F0 = /* @__PURE__ */ bc("Hold"), B0 = /* @__PURE__ */ bc("Gap"), Q0 = (t) => (n) => (e) => {
  const r = e.center.y - n.center.y, o = e.center.x - n.center.x, i = _r(o * o + r * r), s = e.zoom - n.zoom, u = s < 0 ? -s : s;
  return Ts(t.minTransition)(t.maxTransition)(Re(t.panSpeed <= 0 ? t.minTransition : i / t.panSpeed)(t.zoomSpeed <= 0 ? t.minTransition : u / t.zoomSpeed));
}, D0 = /* @__PURE__ */ J((t) => (n) => {
  const e = t.length - 1 | 0;
  return e >= 0 && e < t.length && t[e] === n ? t : gn(t)(n);
})([]), ys = (t) => {
  const n = Wt((e) => T, (e) => (r) => b("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: cr(r.minX)(o.x), minY: cr(r.minY)(o.y), maxX: Re(r.maxX)(o.x), maxY: Re(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, xc = (t) => {
  const n = Wt((e) => T, (e) => (r) => b("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return T;
  if (n.tag === "Just")
    return b("Just", ys(t));
  f();
}, W0 = (t) => (n) => (e) => I0(bt(Et(Pn.foldr, e))((r) => {
  const o = je(r)(t);
  if (o.tag === "Just")
    return gt((i) => !ki(i)(n), [o._1.source, o._1.target]);
  if (o.tag === "Nothing")
    return [];
  f();
})), q0 = (t) => (n) => (e) => {
  const r = ps(t.easing)(Ts(0)(1)(e.endT <= e.startT ? 1 : (n - e.startT) / (e.endT - e.startT)));
  return {
    center: { x: e.fromCam.center.x + (e.toCam.center.x - e.fromCam.center.x) * r, y: e.fromCam.center.y + (e.toCam.center.y - e.fromCam.center.y) * r },
    zoom: e.fromCam.zoom + (e.toCam.zoom - e.fromCam.zoom) * r
  };
}, H0 = (t) => (n) => (e) => (r) => {
  const o = (s, u) => cr(Q0(t)(s.toCam)(u.toCam))(s.endT - s.startT), i = J((s) => (u) => {
    if (s.pending.tag === "Nothing")
      return { acc: s.acc, pending: b("Just", u) };
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
      })() || o(s.pending._1, u) <= 0 ? { acc: gn(s.acc)(s.pending._1), pending: b("Just", u) } : {
        acc: gn(gn(s.acc)({ ...s.pending._1, endT: u.startT - o(s.pending._1, u) }))({
          startT: u.startT - o(s.pending._1, u),
          endT: u.startT,
          fromCam: s.pending._1.toCam,
          toCam: u.toCam
        }),
        pending: b("Just", u)
      };
    f();
  })({ acc: [], pending: T })(r);
  if (i.pending.tag === "Nothing")
    return i.acc;
  if (i.pending.tag === "Just")
    return gn(i.acc)(i.pending._1);
  f();
}, O0 = (t) => t.kind.tag === "SendToken" ? b("Just", L(t.kind._1.edge, { source: t.kind._1.from, target: t.kind._1.to })) : T, z0 = (t) => t.tag === "DataFlow" ? vt(O0)(t._1.events) : [], V0 = (t) => (n) => P0(vt((e) => ki(e._2.source)(n) || ki(e._2.target)(n) ? b("Just", e._1) : T)(A0(t))), Y0 = (t) => (n) => {
  const e = (r) => {
    const o = ug(Yt, T, (i) => i.kind === "Hold", r < 1 ? [] : Gt(0, r, n));
    if (o.tag === "Just")
      return o._1 >= 0 && o._1 < n.length ? b("Just", n[o._1].cam) : T;
    if (o.tag === "Nothing")
      return T;
    f();
  };
  return Pt((r) => (o) => {
    if (o.kind === "Hold")
      return { startT: o.startT, endT: o.endT, fromCam: o.cam, toCam: o.cam };
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
          })(), u = r + 1 | 0, c = er(Yt, T, (a) => a.kind === "Hold", u < 1 ? n : Gt(u, n.length, n));
          if (c.tag === "Just") {
            const a = (r + 1 | 0) + c._1 | 0;
            return a >= 0 && a < n.length ? n[a].cam : s;
          }
          if (c.tag === "Nothing")
            return s;
          f();
        })()
      };
    f();
  })(n);
}, X0 = {
  padding: 24,
  easing: g0,
  minZoom: 0.9,
  maxZoom: 2.5,
  panSpeed: 700,
  zoomSpeed: 1.5,
  minTransition: 0.3,
  maxTransition: 1.4
}, U0 = (t) => (n) => (e) => {
  const r = n.w + e * 2, o = n.h + e * 2, i = ye(t);
  return r <= 0 || o <= 0 || i.w <= 0 || i.h <= 0 ? 1 : cr(i.w / r)(i.h / o);
}, ws = (t) => {
  const n = Wt((e) => T, (e) => (r) => b("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: cr(r.minX)(o.x), minY: cr(r.minY)(o.y), maxX: Re(r.maxX)(o.x + o.w), maxY: Re(r.maxY)(o.y + o.h) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x + n._1.head.w,
      maxY: n._1.head.y + n._1.head.h
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, Cc = (t) => (n) => (e) => {
  if (e.tag === "Leaf")
    return ye(t);
  const r = V0(n)(e), o = [
    ...vt((i) => {
      const s = Ec(i)(t.nodes);
      return s.tag === "Just" ? b("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : T;
    })(Et(
      Pn.foldr,
      bn(G.compare, Ln, e, W0(n)(e)(r))
    )),
    ...vt((i) => {
      const s = je(i)(t.edges);
      return s.tag === "Just" ? b("Just", ys(s._1)) : T;
    })(Et(Pn.foldr, r)),
    ...vt((i) => {
      const s = je(i)(t.chipExtras);
      if (s.tag === "Just")
        return xc(s._1);
      if (s.tag === "Nothing")
        return T;
      f();
    })(Et(Pn.foldr, r))
  ];
  return o.length === 0 ? ye(t) : ws(o);
}, M0 = (t) => (n) => (e) => (r) => {
  const o = [
    ...vt((i) => i)([
      (() => {
        const i = je(e)(t.edges);
        return i.tag === "Just" ? b("Just", ys(i._1)) : T;
      })(),
      (() => {
        const i = je(e)(t.chipExtras);
        if (i.tag === "Just")
          return xc(i._1);
        if (i.tag === "Nothing")
          return T;
        f();
      })()
    ]),
    ...(() => {
      const i = je(e)(n);
      if (i.tag === "Just")
        return vt((s) => {
          const u = Ec(s)(t.nodes);
          return u.tag === "Just" ? b("Just", { x: u._1.x, y: u._1.y, w: u._1.w, h: u._1.h }) : T;
        })([i._1.source, i._1.target]);
      if (i.tag === "Nothing")
        return [];
      f();
    })()
  ];
  return o.length === 0 ? Cc(t)(n)(r) : ws(o);
}, K0 = /* @__PURE__ */ J((t) => (n) => {
  const e = t.length - 1 | 0, r = e >= 0 && e < t.length ? b("Just", t[e]) : T;
  return r.tag === "Just" && r._1.fromCam.zoom === r._1.toCam.zoom && r._1.fromCam.center.x === r._1.toCam.center.x && r._1.fromCam.center.y === r._1.toCam.center.y && n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y && (() => {
    const o = r._1.toCam.center.x - n.toCam.center.x;
    return (o < 0 ? -o < 8 : o < 8) && (() => {
      const i = r._1.toCam.center.y - n.toCam.center.y;
      return (i < 0 ? -i < 8 : i < 8) && (() => {
        const s = r._1.toCam.zoom - n.toCam.zoom;
        return s < 0 ? -s < 0.08 : s < 0.08;
      })();
    })();
  })() ? gn((() => {
    const o = t.length - 1 | 0;
    return o < 1 ? [] : Gt(0, o, t);
  })())({ ...r._1, endT: n.endT }) : gn(t)(n);
})([]), Sc = (t) => (n) => {
  const e = ye(t), r = e.w / Re(1e-4)(n.zoom), o = e.h / Re(1e-4)(n.zoom);
  return { x: n.center.x - r / 2, y: n.center.y - o / 2, w: r, h: o };
}, j0 = (t) => bn(
  G.compare,
  Ln,
  iu(O((n) => L(n.id, { source: n.from.node, target: n.to.node }))(t.graph.edges)),
  iu(bt(t.scenes)(z0))
), bi = (t) => (n) => (e) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: Ts(t.minZoom)(t.maxZoom)(U0(n)(e)(t.padding)) }), Z0 = (t) => (n) => (e) => (r) => {
  const o = bi(t)(n)(ye(n)), i = gt(
    (s) => s >= 0 && s <= e,
    D0(Lt(pt.compare)([0, e, ...bt(r)((s) => [s.startT, s.endT])]))
  );
  return H0(t)(n)(o)(K0(Y0(o)(vt((s) => {
    const u = (s._1 + s._2) / 2;
    if (s._2 <= s._1)
      return T;
    const c = J(R0)(0)(O((g) => g.priority)(gt(
      (g) => g.startT <= u && u < g.endT,
      r
    ))), a = O((g) => g.bbox)(gt(
      (g) => g.priority === c,
      gt((g) => g.startT <= u && u < g.endT, r)
    ));
    return a.length === 0 ? b("Just", { kind: B0, startT: s._1, endT: s._2, cam: o }) : b("Just", { kind: F0, startT: s._1, endT: s._2, cam: bi(t)(n)(ws(a)) });
  })($n(gr, i, Gt(1, i.length, i))))));
}, t_ = (t) => (n) => (e) => (r) => {
  const o = ln((i) => r >= i.startT && r < i.endT)(e);
  if (o.tag === "Just")
    return q0(t)(r)(o._1);
  if (o.tag === "Nothing") {
    const i = e.length - 1 | 0;
    if (i >= 0 && i < e.length && r >= e[i].endT)
      return e[i].toCam;
    const s = bi(t)(n)(ye(n));
    return 0 < e.length ? e[0].fromCam : s;
  }
  f();
};
function yr(t) {
  return t.charCodeAt(0);
}
function Gc(t) {
  return String.fromCharCode(t);
}
const $e = function(t) {
  return function(n) {
    return function(e) {
      return e.replace(new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), n);
    };
  };
}, Ls = function(t) {
  return function(n) {
    return n.split(t);
  };
}, n_ = function(t) {
  return t.trim();
}, Ho = function(t) {
  return function(n) {
    return n.join(t);
  };
};
var e_ = typeof Array.from == "function", r_ = typeof Symbol < "u" && Symbol != null && typeof Symbol.iterator < "u" && typeof String.prototype[Symbol.iterator] == "function", o_ = typeof String.prototype.fromCodePoint == "function", i_ = typeof String.prototype.codePointAt == "function";
const s_ = function(t) {
  return i_ ? function(n) {
    return n.codePointAt(0);
  } : t;
}, u_ = function(t) {
  return o_ ? String.fromCodePoint : t;
}, c_ = function(t) {
  return function(n) {
    return r_ ? function(e) {
      for (var r = "", o = e[Symbol.iterator](), i = 0; i < n; ++i) {
        var s = o.next();
        if (s.done) return r;
        r += s.value;
      }
      return r;
    } : t(n);
  };
}, a_ = function(t) {
  return function(n) {
    return e_ ? function(e) {
      return Array.from(e, n);
    } : t;
  };
}, Oo = (t) => {
  const n = Pe(t);
  if (n === 0)
    return T;
  if (n === 1)
    return b("Just", { head: yr(Tr(0)(t)), tail: "" });
  const e = yr(Tr(1)(t)), r = yr(Tr(0)(t));
  return 55296 <= r && r <= 56319 && 56320 <= e && e <= 57343 ? b("Just", { head: (((r - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0, tail: Sr(2)(t) }) : b("Just", { head: r, tail: Sr(1)(t) });
}, f_ = (t) => {
  const n = Oo(t);
  return n.tag === "Just" ? b("Just", L(n._1.head, n._1.tail)) : T;
}, g_ = (t) => On.unfoldr(f_)(t), __ = (t) => {
  const n = yr(Tr(0)(t));
  if (55296 <= n && n <= 56319 && Pe(t) > 1) {
    const e = yr(Tr(1)(t));
    if (56320 <= e && e <= 57343)
      return (((n - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0;
  }
  return n;
}, Ic = /* @__PURE__ */ s_(__), ks = /* @__PURE__ */ a_(g_)(Ic), ri = (t) => Ns(t >= 0 && t <= 65535 ? Gc(t) : t < 0 ? "\0" : "￿"), l_ = (t) => t <= 65535 ? ri(t) : ri(Ke(t - 65536 | 0, 1024) + 55296 | 0) + ri(ns(t - 65536 | 0)(1024) + 56320 | 0), d_ = /* @__PURE__ */ u_(l_), Pc = (t) => (n) => {
  if (t < 1)
    return "";
  const e = Oo(n);
  return e.tag === "Just" ? d_(e._1.head) + Pc(t - 1 | 0)(e._1.tail) : n;
}, _n = /* @__PURE__ */ c_(Pc), h_ = (t) => (n) => n === "" ? T : b("Just", Ic(n)), mo = (t, n, e) => ({ tag: t, _1: n, _2: e }), p_ = () => ({ tag: "ExtendFromSource" }), No = (t, n) => ({ tag: t, _1: n }), bs = (t) => t, Jo = (t, n) => ({ tag: t, _1: n }), oi = /* @__PURE__ */ Jo("NotYet"), su = /* @__PURE__ */ Jo("Consumed"), $_ = /* @__PURE__ */ bs("FromSource"), uu = /* @__PURE__ */ bs("FromTarget"), m_ = /* @__PURE__ */ bs("FromBoth"), ii = /* @__PURE__ */ No("Hidden"), N_ = /* @__PURE__ */ No("Visible"), Ac = /* @__PURE__ */ p_(), si = /* @__PURE__ */ mo("Retracted"), J_ = /* @__PURE__ */ mo("Extended"), Ei = (t, n) => ({ tag: t, _1: n }), Oe = (t, n, e) => ({ tag: t, _1: n, _2: e }), Rc = (t) => t, Se = (t, n) => ({ tag: t, _1: n }), Ue = (t, n, e, r, o, i, s, u, c) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s, _7: u, _8: c }), Fc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, zo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ne = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, wr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, cu = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, au = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
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
}, ze = /* @__PURE__ */ (() => {
  const t = On.unfoldr((n) => {
    if (n.tag === "Nil")
      return T;
    if (n.tag === "Cons")
      return b("Just", L(n._1, n._2));
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
    return e(n, zt);
  })());
})(), v_ = /* @__PURE__ */ J((t) => (n) => Y(G)(n)()(t))(Q), xi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
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
}, T_ = /* @__PURE__ */ jt(G)(Bt), y_ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ui = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
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
}, w_ = /* @__PURE__ */ Se("NoKeyframes"), L_ = (t) => Se("DuplicateEventId", t), k_ = (t) => Se("UnknownEvent", t), Bc = /* @__PURE__ */ Rc("PlopIn"), b_ = /* @__PURE__ */ Rc("PlopOut"), E_ = (t) => (n) => vt((e) => {
  if (e.target.tag === "NodeWindow" || e.target.tag === "EdgeWindow")
    return T;
  if (e.target.tag === "TokenWindow")
    return b(
      "Just",
      { startT: e.startT, endT: e.endT, bbox: M0(t)(n)(e.target._2)(Q), priority: 1 }
    );
  if (e.target.tag === "FillWindow")
    return b(
      "Just",
      {
        startT: e.startT,
        endT: e.endT,
        bbox: Cc(t)(n)(Dt(
          "Node",
          1,
          1,
          e.target._2,
          void 0,
          Q,
          Q
        )),
        priority: 1
      }
    );
  f();
}), x_ = (t) => (n) => (e) => (r) => (o) => {
  const i = ct(J((a) => (g) => a + ks(g).length | 0)(0)(e.labels)) * t.tokenReadSecPerChar, s = (a) => {
    const g = Fc(a)(n.nodes);
    if (g.tag === "Just")
      return { x: g._1.x + g._1.w / 2, y: g._1.y + g._1.h / 2 };
    if (g.tag === "Nothing")
      return { x: 0, y: 0 };
    f();
  }, u = zo(e.edge)(n.edges), c = (() => {
    if (u.tag === "Just") {
      const a = (() => {
        if (e.direction === "Forward")
          return u._1;
        if (e.direction === "Backward")
          return vn(u._1);
        f();
      })(), g = (() => {
        if (e.direction === "Forward")
          return u._1;
        if (e.direction === "Backward")
          return vn(u._1);
        f();
      })(), l = s(e.from), d = g.length - 1 | 0;
      return (2 * (() => {
        const _ = 0 < a.length ? a[0] : s(e.from), h = _.x - l.x, p = _.y - l.y;
        return (h < 0 ? -h : h) + (p < 0 ? -p : p);
      })() + $s(u._1) + 2 * (() => {
        const _ = d >= 0 && d < g.length ? g[d] : s(e.to), h = s(e.to), p = h.x - _.x, $ = h.y - _.y;
        return (p < 0 ? -p : p) + ($ < 0 ? -$ : $);
      })()) / t.tokenSpeed;
    }
    if (u.tag === "Nothing")
      return 0 / t.tokenSpeed;
    f();
  })();
  return t.tokenSpeed <= 0 ? t.minTokenDuration : Ne(t.minTokenDuration)(Ne(c)(i) / Ne(0.05)(1 - r - o));
}, C_ = (t) => {
  if (t.event.kind.tag === "SendToken")
    return b(
      "Just",
      {
        startT: t.startT,
        endT: t.endT,
        target: Ue(
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
    return b("Just", { startT: t.startT, endT: t.endT, target: Ue("FillWindow", t.event.id, t.event.kind._1.node, t.event.kind._1.labels) });
  f();
}, S_ = (t) => (n) => (e) => vt((r) => {
  const o = vt((i) => Fc(i)(t.nodes))(Et(
    Pn.foldr,
    (() => {
      if (r.scene.tag === "Structural")
        return bn(
          G.compare,
          Ln,
          (() => {
            const i = wr(r.scene._1.from)(e);
            if (i.tag === "Nothing")
              return Q;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })(),
          (() => {
            const i = wr(r.scene._1.to)(e);
            if (i.tag === "Nothing")
              return Q;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })()
        );
      if (r.scene.tag === "DataFlow") {
        const i = wr(r.scene._1.keyframe)(e);
        if (i.tag === "Nothing")
          return Q;
        if (i.tag === "Just")
          return i._1.nodes;
      }
      f();
    })()
  ));
  return o.length === 0 ? T : b(
    "Just",
    {
      startT: r.startT,
      endT: r.endT,
      bbox: (() => {
        const i = J((s) => (u) => ({ minX: cu(s.minX)(u.x), minY: cu(s.minY)(u.y), maxX: Ne(s.maxX)(u.x + u.w), maxY: Ne(s.maxY)(u.y + u.h) }))(0 < o.length ? { minX: o[0].x, minY: o[0].y, maxX: o[0].x + o[0].w, maxY: o[0].y + o[0].h } : { minX: 0, minY: 0, maxX: 0, maxY: 0 })(Gt(1, o.length, o));
        return { x: i.minX, y: i.minY, w: i.maxX - i.minX, h: i.maxY - i.minY };
      })(),
      priority: 0
    }
  );
}), G_ = (t) => (n) => (e) => {
  const r = zo(e)(t);
  if (r.tag === "Nothing")
    return uu;
  if (r.tag === "Just") {
    const o = au(r._1.target)(n);
    return au(r._1.source)(n) ? o ? m_ : $_ : uu;
  }
  f();
}, I_ = (t) => (n) => (e) => (r) => {
  const o = (() => {
    if (r.event.when.tag === "First")
      return 0;
    if (r.event.when.tag === "At")
      return r.event.when._1;
    if (r.event.when.tag === "After") {
      const i = r.event.when._1, s = ln((u) => u.event.id === i)(e);
      if (s.tag === "Nothing")
        return 0;
      if (s.tag === "Just")
        return s._1.endT;
      f();
    }
    if (r.event.when.tag === "With") {
      const i = r.event.when._1, s = ln((u) => u.event.id === i)(e);
      if (s.tag === "Nothing")
        return 0;
      if (s.tag === "Just")
        return s._1.startT;
    }
    f();
  })();
  return gn(e)({
    startT: o,
    endT: (() => {
      if (r.event.kind.tag === "SendToken")
        return o + x_(t)(n)(r.event.kind._1)(r.holdPre)(r.holdPost);
      if (r.event.kind.tag === "FillNodeWithoutTransition")
        return o + t.plop;
      f();
    })(),
    event: r.event,
    holdPre: r.holdPre,
    holdPost: r.holdPost
  });
}, Es = (t) => (n) => {
  if (n < 0)
    return Oe("AtKeyframe", t.initialKeyframe);
  if (n >= t.totalDuration) {
    const r = t.spans.length - 1 | 0;
    return r >= 0 && r < t.spans.length ? Oe(
      "AtKeyframe",
      (() => {
        if (t.spans[r].scene.tag === "Structural")
          return t.spans[r].scene._1.to;
        if (t.spans[r].scene.tag === "DataFlow")
          return t.spans[r].scene._1.keyframe;
        f();
      })()
    ) : Oe("AtKeyframe", t.initialKeyframe);
  }
  const e = ln((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return Oe("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return Oe("AtKeyframe", e._1.scene._1.keyframe);
    f();
  }
  if (e.tag === "Nothing")
    return Oe("AtKeyframe", t.initialKeyframe);
  f();
}, P_ = (t) => {
  if (t.when.tag === "First")
    return [];
  if (t.when.tag === "At")
    return [];
  if (t.when.tag === "After")
    return [t.when._1];
  if (t.when.tag === "With")
    return [t.when._1];
  f();
}, fu = { id: "", nodes: Q, edges: Q }, A_ = (t) => (n) => G0((() => {
  const e = wr(n.from)(t);
  if (e.tag === "Nothing")
    return fu;
  if (e.tag === "Just")
    return e._1;
  f();
})())((() => {
  const e = wr(n.to)(t);
  if (e.tag === "Nothing")
    return fu;
  if (e.tag === "Just")
    return e._1;
  f();
})()), ci = (t) => (n) => (e) => (r) => {
  const o = zo(r)(e.edges);
  if (o.tag === "Just")
    return t <= 0 ? n : Ne(n)($s(o._1) / t);
  if (o.tag === "Nothing")
    return n;
  f();
}, Qc = (t) => (n) => (e) => (r) => (o) => {
  const i = t.plop, s = A_(e)(o), u = O((_) => ({
    startT: 0,
    endT: 0 + ci(t.edgeSpeed)(t.minEdgeDuration)(n)(_),
    target: Ue("EdgeWindow", _, Ei("Extend", Ac))
  }))(ze(s.entering.edges)), c = O((_) => ({ startT: 0, endT: i, target: Ue("NodeWindow", _, Bc) }))(ze(s.entering.nodes)), a = J(Ne)(0)(O((_) => ci(t.edgeSpeed)(t.minEdgeDuration)(n)(_))(ze(s.leaving.edges))), g = (_) => de(
    (h) => {
      const p = zo(h)(r);
      if (p.tag === "Just")
        return p._1.source === _ || p._1.target === _;
      if (p.tag === "Nothing")
        return !1;
      f();
    },
    ze(s.leaving.edges)
  ) ? a : 0, l = O((_) => ({ startT: g(_), endT: g(_) + t.plop, target: Ue("NodeWindow", _, b_) }))(ze(s.leaving.nodes)), d = O((_) => ({
    startT: 0,
    endT: ci(t.edgeSpeed)(t.minEdgeDuration)(n)(_),
    target: Ue("EdgeWindow", _, Ei("Retract", G_(r)(s.leaving.nodes)(_)))
  }))(ze(s.leaving.edges));
  return {
    duration: (() => {
      const _ = Lt(pt.compare)([
        ...O((p) => p.endT)(d),
        ...O((p) => p.endT)(l),
        ...O((p) => p.endT)(c),
        ...O((p) => p.endT)(u)
      ]), h = _.length - 1 | 0;
      return h >= 0 && h < _.length ? _[h] + t.gap : t.gap;
    })(),
    windows: [...d, ...l, ...c, ...u]
  };
}, R_ = (t) => (n) => (e) => (r) => (o) => (i) => O((() => {
  const s = o.startT;
  return (u) => ({ ...u, startT: u.startT + s, endT: u.endT + s });
})())(Qc(t)(n)(e)(r)(i).windows), F_ = (t) => vt((n) => Et(br, n).length > 1 ? b(
  "Just",
  (() => {
    const e = Wt(
      (r) => T,
      (r) => (o) => b("Just", { head: r, tail: o }),
      Et(br, n)
    );
    if (e.tag === "Just")
      return e._1.head;
    if (e.tag === "Nothing")
      return "";
    f();
  })()
) : T)(lg(Mi)(Lt(G.compare)(t))), B_ = (t) => {
  const n = O((r) => r.id)(t), e = v_(n);
  return [
    ...O(L_)(F_(n)),
    ...O(k_)(gt((r) => !xi(r)(e), bt(t)(P_)))
  ];
}, Q_ = (t) => {
  const n = T_(O((r) => L(
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
    if (xi(i)(o))
      return [Se("ScheduleCycle", [...Et(Pn.foldr, o), i])];
    if (xi(i)(r))
      return [];
    const s = y_(i)(n);
    if (s.tag === "Nothing")
      return [];
    if (s.tag === "Just")
      return bt(s._1)(e(Y(G)(i)()(r))(Y(G)(i)()(o)));
    f();
  };
  return bt(t)((r) => e(Q)(Q)(r.id));
}, D_ = {
  plop: 0.5,
  gap: 0.5,
  edgeSpeed: 350,
  minEdgeDuration: 0.3,
  tokenSpeed: 100,
  minTokenDuration: 1.4,
  tokenReadSecPerChar: 0.06,
  nodeEasing: _0,
  edgeEasing: f0,
  tokenEasing: a0
}, W_ = (t) => (n) => {
  if (n.tag === "Structural")
    return vt((e) => e)([
      ui(n._1.from)(t) ? T : b("Just", Se("UnknownKeyframe", n._1.from)),
      ui(n._1.to)(t) ? T : b("Just", Se("UnknownKeyframe", n._1.to))
    ]);
  if (n.tag === "DataFlow")
    return [
      ...vt((e) => e)([ui(n._1.keyframe)(t) ? T : b("Just", Se("UnknownKeyframe", n._1.keyframe))]),
      ...B_(n._1.events),
      ...Q_(n._1.events)
    ];
  f();
}, q_ = (t) => (n) => {
  const e = bt(n)(W_(t));
  return e.length === 0 ? kt("Right", void 0) : kt("Left", e);
}, Dc = (t) => (n) => (e) => J(I_(t)(n))([])(Pt((r) => (o) => ({
  event: o,
  holdPre: o.kind.tag === "SendToken" ? (() => {
    const i = r - 1 | 0;
    return i >= 0 && i < e.length && e[i].kind.tag === "SendToken" && e[i].kind._1.to === o.kind._1.from;
  })() ? 0 : 0.18 : 0,
  holdPost: o.kind.tag === "SendToken" ? (() => {
    const i = r + 1 | 0;
    return i >= 0 && i < e.length && e[i].kind.tag === "SendToken" && e[i].kind._1.from === o.kind._1.to;
  })() ? 0 : 0.18 : 0
}))(e)), H_ = (t) => (n) => (e) => {
  const r = Dc(t)(n)(e.events);
  return r.length === 0 ? t.gap : J(Ne)(0)(O((o) => o.endT)(r)) + t.gap;
}, O_ = (t) => (n) => (e) => (r) => (o) => {
  if (o.tag === "Structural")
    return Qc(t)(n)(e)(r)(o._1).duration;
  if (o.tag === "DataFlow")
    return H_(t)(n)(o._1);
  f();
}, z_ = (t) => (n) => (e) => (r) => (o) => J((i) => (s) => {
  const u = O_(t)(n)(e)(r)(s);
  return { acc: gn(i.acc)({ startT: i.t, endT: i.t + u, scene: s }), t: i.t + u };
})({ acc: [], t: 0 })(o).acc, V_ = (t) => (n) => (e) => (r) => O((() => {
  const o = e.startT;
  return (i) => ({ ...i, startT: i.startT + o, endT: i.endT + o });
})())(vt(C_)(Dc(t)(n)(r.events))), Y_ = (t) => (n) => (e) => (r) => (o) => {
  if (o.scene.tag === "Structural")
    return R_(t)(n)(e)(r)(o)(o.scene._1);
  if (o.scene.tag === "DataFlow")
    return V_(t)(n)(o)(o.scene._1);
  f();
}, X_ = (t) => (n) => (e) => (r) => {
  const o = 0 < e.keyframes.length ? b("Just", e.keyframes[0]) : T;
  if (o.tag === "Nothing")
    return kt("Left", [w_]);
  if (o.tag === "Just") {
    const i = o._1, s = C0(O((a) => L(a.id, a))(e.keyframes)), u = j0(e), c = q_(s)(e.scenes);
    return (() => {
      if (c.tag === "Left") {
        const a = c._1;
        return (g) => kt("Left", a);
      }
      if (c.tag === "Right") {
        const a = c._1;
        return (g) => g(a);
      }
      f();
    })()(() => {
      const a = z_(n)(r)(s)(u)(e.scenes), g = a.length - 1 | 0, l = g >= 0 && g < a.length ? a[g].endT : 0, d = Lt((_) => (h) => pt.compare(_.startT)(h.startT))(bt(a)(Y_(n)(r)(s)(u)));
      return kt(
        "Right",
        {
          totalDuration: l,
          windows: d,
          spans: a,
          keyframes: s,
          initialKeyframe: i.id,
          timing: n,
          layout: r,
          cameraSpans: Z0(t)(r)(l)([
            ...S_(r)(u)(s)(a),
            ...E_(r)(u)(d)
          ]),
          cameraConfig: t
        }
      );
    });
  }
  f();
}, Ir = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Wc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, vo = (t) => (n) => (e) => {
  const r = pt.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = pt.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, U_ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, M_ = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, K_ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
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
}, j_ = /* @__PURE__ */ jt(G)(Bt), Z_ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
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
}, tl = /* @__PURE__ */ jt(G)(Bt), nl = /* @__PURE__ */ jt(G)(Bt), el = (t) => (n) => (e) => (r) => {
  const o = ye(t), i = o.w / Ir(1e-4)(n.zoom) / 2, s = o.h / Ir(1e-4)(n.zoom) / 2, u = e.y - n.center.y, c = e.x - n.center.x;
  return {
    ...n,
    center: {
      x: i <= 1e-4 ? n.center.x + 0 * r * 0.35 : c < 0 ? n.center.x + c / (1 + -c / i) * r * 0.35 : n.center.x + c / (1 + c / i) * r * 0.35,
      y: s <= 1e-4 ? n.center.y + 0 * r * 0.35 : u < 0 ? n.center.y + u / (1 + -u / s) * r * 0.35 : n.center.y + u / (1 + u / s) * r * 0.35
    }
  };
}, ai = (t) => (n) => {
  const e = Wc(n)(t.keyframes);
  if (e.tag === "Nothing")
    return Q;
  if (e.tag === "Just")
    return e._1.nodes;
  f();
}, fi = (t) => (n) => {
  const e = Wc(n)(t.keyframes);
  if (e.tag === "Nothing")
    return Q;
  if (e.tag === "Just")
    return e._1.edges;
  f();
}, rl = (t) => (n) => (e) => de(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), ol = (t) => (n) => (e) => de((r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e, t), il = (t) => (n) => (e) => de((r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e, t), sl = (t) => (n) => (e) => de(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), ul = (t) => (n) => {
  const e = Es(t)(n);
  if (e.tag === "AtKeyframe")
    return _n(3)(e._1) === "kf-" ? "" : e._1;
  if (e.tag === "InTransition")
    return _n(3)(e._2) === "kf-" ? "" : e._2;
  f();
}, qc = (t) => (n) => (e) => ln((r) => e(r) && n >= r.startT && n < r.endT)(t), cl = (t) => {
  const n = vo(0)(1)(t / 0.2), e = vo(0)(1)((1 - t) / 0.2);
  return n * n * (3 - 2 * n) * e * e * (3 - 2 * e);
}, al = (t) => (n) => {
  if (n.tag === "Travelling") {
    const e = U_(n._1.edge)(t.edges);
    if (e.tag === "Just") {
      const r = vc(e._1)(n._1.progress);
      return r.tag === "Just" ? b("Just", { dot: r._1, weight: cl(n._1.progress) }) : T;
    }
    if (e.tag === "Nothing")
      return T;
    f();
  }
  return T;
}, fl = (t) => (n) => {
  const e = Es(t)(n);
  if (e.tag === "AtKeyframe")
    return ai(t)(e._1);
  if (e.tag === "InTransition")
    return bn(G.compare, Ln, ai(t)(e._1), ai(t)(e._2));
  f();
}, gl = (t) => (n) => {
  const e = Es(t)(n);
  if (e.tag === "AtKeyframe")
    return fi(t)(e._1);
  if (e.tag === "InTransition")
    return bn(G.compare, Ln, fi(t)(e._1), fi(t)(e._2));
  f();
}, _l = (t) => (n) => {
  const e = ye(t), r = e.h / Ir(1e-4)(n.zoom), o = e.w / Ir(1e-4)(n.zoom);
  return {
    ...n,
    center: {
      x: o >= e.w ? e.x + e.w / 2 : vo(e.x + o / 2)(e.x + e.w - o / 2)(n.center.x),
      y: r >= e.h ? e.y + e.h / 2 : vo(e.y + r / 2)(e.y + e.h - r / 2)(n.center.y)
    }
  };
}, To = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : Ir(0)(M_(1)((n - t.startT) / e));
}, ll = (t) => (n) => (e) => (r) => {
  const o = qc(t.windows)(n)((i) => i.target.tag === "EdgeWindow" && i.target._1 === r);
  if (o.tag === "Just") {
    const i = ps(t.timing.edgeEasing)(To(o._1)(n)), s = o._1.target.tag === "EdgeWindow" ? o._1.target._2 : Ei("Extend", Ac);
    if (s.tag === "Retract")
      return mo("Retracting", s._1, i);
    if (s.tag === "Extend")
      return mo("Extending", s._1, i);
    f();
  }
  if (o.tag === "Nothing")
    return sl(t.windows)(n)(r) || rl(t.windows)(n)(r) ? si : K_(r)(e) ? J_ : si;
  f();
}, dl = (t) => (n) => {
  const e = gl(t)(n);
  return j_(O((r) => L(r, ll(t)(n)(e)(r)))((() => {
    const r = (o) => {
      if (o.tag === "Leaf")
        return Q;
      if (o.tag === "Node")
        return Dt("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
      f();
    };
    return Et(Pn.foldr, r(t.layout.edges));
  })()));
}, hl = (t) => (n) => (e) => (r) => {
  const o = qc(t.windows)(n)((i) => i.target.tag === "NodeWindow" && i.target._1 === r);
  if (o.tag === "Just") {
    const i = To(o._1)(n), s = o._1.target.tag === "NodeWindow" ? o._1.target._2 : Bc;
    if (s === "PlopIn")
      return No("PloppingIn", i);
    if (s === "PlopOut")
      return No("PloppingOut", i);
    f();
  }
  if (o.tag === "Nothing")
    return il(t.windows)(n)(r) || ol(t.windows)(n)(r) ? ii : Z_(r)(e) ? N_ : ii;
  f();
}, pl = (t) => (n) => {
  const e = fl(t)(n);
  return tl(O((r) => L(r, hl(t)(n)(e)(r)))((() => {
    const r = (o) => {
      if (o.tag === "Leaf")
        return Q;
      if (o.tag === "Node")
        return Dt("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
      f();
    };
    return Et(Pn.foldr, r(t.layout.nodes));
  })()));
}, $l = (t) => (n) => (e) => n.target.tag === "TokenWindow" ? L(
  n.target._1,
  e < n.startT ? oi : e >= n.endT ? su : Jo(
    "Travelling",
    {
      edge: n.target._2,
      direction: n.target._3,
      progress: ps(t.timing.tokenEasing)(To(n)(e)),
      labels: n.target._6,
      source: n.target._4,
      target: n.target._5,
      holdPre: n.target._7,
      holdPost: n.target._8
    }
  )
) : n.target.tag === "FillWindow" ? L(
  n.target._1,
  e < n.startT ? oi : e >= n.endT ? su : Jo("Filling", { node: n.target._2, progress: To(n)(e), labels: n.target._3 })
) : L("", oi), ml = (t) => (n) => nl(O((e) => $l(t)(e)(n))(gt(
  (e) => e.target.tag === "TokenWindow" || e.target.tag === "FillWindow",
  t.windows
))), Nl = (t) => (n) => {
  const e = vt(al(t))((() => {
    const r = (o, i) => {
      if (o.tag === "Leaf")
        return i;
      if (o.tag === "Node")
        return r(o._5, qt("Cons", o._4, r(o._6, i)));
      f();
    };
    return Et(Mt.foldr, r(n.tokens, zt));
  })());
  return 0 < e.length ? b("Just", e[0]) : T;
}, Jl = (t) => (n) => {
  const e = Nl(t)(n);
  if (e.tag === "Nothing")
    return n.camera;
  if (e.tag === "Just")
    return el(t)(n.camera)(e._1.dot)(e._1.weight);
  f();
}, vl = (t) => (n) => {
  const e = {
    nodes: pl(t)(n),
    edges: dl(t)(n),
    tokens: ml(t)(n),
    camera: t_(t.cameraConfig)(t.layout)(t.cameraSpans)(n),
    frameTitle: ul(t)(n)
  };
  return { ...e, camera: _l(t.layout)(Jl(t.layout)(e)) };
}, Hc = (t) => t, Oc = /* @__PURE__ */ Hc("RunText"), Tl = /* @__PURE__ */ Hc("RunCode"), zc = (t) => (n) => (e) => n.length === 0 ? e : gn(e)({ style: t, text: We(n) }), yl = (t) => ({
  style: (() => {
    if (t.style === "RunText")
      return Tl;
    if (t.style === "RunCode")
      return Oc;
    f();
  })(),
  buf: [],
  runs: zc(t.style)(t.buf)(t.runs)
}), wl = (t) => (n) => 0 < n.length ? { ...t, buf: gn(t.buf)(n[0]) } : { ...t, buf: gn(t.buf)("\\") }, Ll = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, c = Wt((a) => T, (a) => (g) => b("Just", { head: a, tail: g }), r);
    if (c.tag === "Nothing") {
      o = !1, i = s;
      continue;
    }
    if (c.tag === "Just") {
      if (c._1.head === "\\") {
        e = wl(s)(c._1.tail), r = Gt(1, c._1.tail.length, c._1.tail);
        continue;
      }
      if (c._1.head === "`") {
        e = yl(s), r = c._1.tail;
        continue;
      }
      e = { ...s, buf: gn(s.buf)(c._1.head) }, r = c._1.tail;
      continue;
    }
    f();
  }
  return i;
}, Vc = (t) => {
  const n = Ll({ style: Oc, buf: [], runs: [] })(ms(t));
  return zc(n.style)(n.buf)(n.runs);
};
let to = null;
function kl() {
  return to || (typeof document > "u" ? null : (to = document.createElement("canvas").getContext("2d"), to));
}
const gu = /* @__PURE__ */ new Map(), bl = (t) => (n) => (e) => (r) => () => {
  const o = `${e} ${n}px ${t}|${r}`, i = gu.get(o);
  if (i !== void 0) return i;
  const s = kl();
  if (!s)
    return r.length * n * 0.62;
  s.font = `${e} ${n}px ${t}`;
  const u = s.measureText(r).width;
  return gu.set(o, u), u;
}, El = Yr.traverse(Xi), xl = /* @__PURE__ */ J(ur)(0), Pr = /* @__PURE__ */ (() => {
  const t = $e(`\r
`)(" "), n = $e(`
`)(" "), e = (() => {
    const r = $e("\r")(" "), o = (() => {
      const i = $e("	")(" ");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), Cl = (t) => (n) => {
  const e = El((r) => {
    const o = (() => {
      if (r.style === "RunText")
        return t.text;
      if (r.style === "RunCode")
        return t.code;
      f();
    })();
    return bl(o.family)(o.size)(o.weight)(Pr(r.text));
  })(Vc(Pr(n)));
  return () => {
    const r = e();
    return xl(r);
  };
}, Sl = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: "500" }, Gl = { family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", size: 11, weight: "400" }, Il = { text: Sl, code: Gl }, $r = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Pl = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Al = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Rl = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, _u = (t) => We(vn(Ce((n) => n === " ")(vn(Ce((n) => n === " ")(ms(t)).rest)).rest)), Fl = (t) => J((n) => (e) => e._1 > 0 && (e._2 === " " || e._2 === "-" || e._2 === "_" || e._2 === ".") ? b("Just", e._1) : n)(T)(Pt(gr)(t)), Ci = (t) => (n) => {
  if (t <= 0)
    return [n];
  if (Pe(n) <= t)
    return [n];
  const e = ms(n), r = t < 1 ? [] : Gt(0, t, e), o = Fl(r);
  if (o.tag === "Just") {
    const i = _u(nu(!(o._1 >= 0 && o._1 < r.length) || r[o._1] === " " ? o._1 : o._1 + 1 | 0)(n)), s = _u(Sr(o._1 + 1 | 0)(n));
    return s === "" ? [i] : [i, ...Ci(t)(s)];
  }
  if (o.tag === "Nothing") {
    const i = nu(t)(n), s = Sr(t)(n);
    return s === "" ? [i] : [i, ...Ci(t)(s)];
  }
  f();
}, Bl = { cellW: 7, cellH: 3, maxLineWidth: 20 }, Ql = (t) => (n) => {
  const e = O((i) => L(
    (() => {
      if (i.label.tag === "Just")
        return i.label._1;
      if (i.label.tag === "Nothing")
        return i.id;
      f();
    })(),
    i
  ))(n.nodes), r = $r(1)(Ke(
    (Pl(t.maxLineWidth)(J((i) => (s) => $r(i)(Pe(s._1)))(0)(e)) + 2 | 0) + t.cellW | 0,
    t.cellW
  )), o = (r * t.cellW | 0) - 1 | 0;
  return {
    ...n,
    nodes: O((i) => {
      if (!(i._2.size._1 === 1 && i._2.size._2 === 1))
        return i._2;
      const s = bt(Ls(`
`)(i._1))(Ci(o)), u = J((c) => (a) => $r(c)(Pe(a)))(0)(s);
      return {
        ...i._2,
        size: L(
          ct(u > o ? Ke((u + 2 | 0) + t.cellW | 0, t.cellW) : r),
          ct($r(1)(Ke(s.length + t.cellH | 0, t.cellH)))
        )
      };
    })(e)
  };
}, Dl = (t) => (n) => (e) => ({
  ...e,
  nodes: O((r) => {
    const o = Rl(r.id)(n);
    if (o.tag === "Nothing")
      return r;
    if (o.tag === "Just")
      return { ...r, size: L(Al(r.size._1)(ct($r(1)(ce(ji((o._1 + 32) / t))))), r.size._2) };
    f();
  })(e.nodes)
}), Wl = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ql = (t) => {
  const n = t.length;
  return ((r) => (o) => {
    let i = r, s = o, u = !0, c;
    for (; u; ) {
      const a = i, g = s;
      if (a >= n) {
        u = !1, c = g;
        continue;
      }
      const l = (d) => (_) => {
        let h = d, p = _, $ = !0, m;
        for (; $; ) {
          const N = h, v = p;
          if (N >= n) {
            $ = !1, m = v;
            continue;
          }
          if (a >= 0 && a < t.length) {
            if (N >= 0 && N < t.length) {
              h = N + 1 | 0, p = (() => {
                const w = t[a].position, y = t[a].size, k = t[N].position, E = t[N].size;
                return w._1 < k._1 + E._1 && k._1 < w._1 + y._1 && w._2 < k._2 + E._2 && k._2 < w._2 + y._2;
              })() ? v + 1 | 0 : v;
              continue;
            }
            h = N + 1 | 0, p = v;
            continue;
          }
          $ = !1, m = v;
        }
        return m;
      };
      i = a + 1 | 0, s = l(a + 1 | 0)(g);
    }
    return c;
  })(0)(0);
}, lu = (t) => J((n) => (e) => n + k0(e.start)(e.end))(0)(t.segments), Hl = (t) => (n) => (e) => ({
  crossingCount: J((r) => (o) => r + o.jumps.length | 0)(0)(n),
  bendCount: J((r) => (o) => r + o.bends.length | 0)(0)(n),
  totalEdgeLength: J((r) => (o) => r + lu(o))(0)(n),
  maxEdgeLength: J((r) => (o) => Wl(r)(lu(o)))(0)(n),
  nodeOverlapCount: ql(t),
  constraintViolations: e,
  jumpCount: J((r) => (o) => r + o.jumps.length | 0)(0)(n)
}), xs = (t) => t, Ut = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = rt.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Cs = /* @__PURE__ */ xs("LEFT"), Ol = /* @__PURE__ */ xs("RIGHT"), Yc = /* @__PURE__ */ xs("UNDEFINED"), zl = {
  eq: (t) => (n) => t === "LEFT" ? n === "LEFT" : t === "RIGHT" ? n === "RIGHT" : t === "UP" ? n === "UP" : t === "DOWN" ? n === "DOWN" : t === "UNDEFINED" && n === "UNDEFINED"
}, Vl = {
  compare: (t) => (n) => {
    if (t === "LEFT")
      return n === "LEFT" ? yn : dn;
    if (n === "LEFT")
      return hn;
    if (t === "RIGHT")
      return n === "RIGHT" ? yn : dn;
    if (n === "RIGHT")
      return hn;
    if (t === "UP")
      return n === "UP" ? yn : dn;
    if (n === "UP")
      return hn;
    if (t === "DOWN")
      return n === "DOWN" ? yn : dn;
    if (n === "DOWN")
      return hn;
    if (t === "UNDEFINED" && n === "UNDEFINED")
      return yn;
    f();
  },
  Eq0: () => zl
}, Yl = (t) => (e) => {
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
}, Xl = { x: 0, y: 0 }, Hn = (t) => (n) => (e) => {
  const r = Ut(t)(e.cNodes);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cNodes: Y(rt)(t)(n(r._1))(e.cNodes) };
  f();
}, Lr = (t) => (n) => (e) => {
  const r = Ut(t)(e.cGroups);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cGroups: Y(rt)(t)(n(r._1))(e.cGroups) };
  f();
}, Ul = (t) => J((n) => (e) => Hn(e)((r) => ({ ...r, hitboxPreCompaction: r.hitbox }))(n))(t)(t.cNodeOrder), Ml = (t) => {
  const n = J((e) => (r) => {
    const o = Ut(r)(t.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return J((i) => (s) => yt(rt)(fn)(s)([r])(i))(e)(o._1.constraints);
    f();
  })(Q)(t.cNodeOrder);
  return J((e) => (r) => Hn(r)((o) => ({
    ...o,
    constraints: (() => {
      const i = Ut(r)(n);
      if (i.tag === "Nothing")
        return [];
      if (i.tag === "Just")
        return i._1;
      f();
    })()
  }))(e))(t)(t.cNodeOrder);
}, Kl = (t) => (n) => Hn(t)((e) => ({ ...e, ignoreSpacing: { left: e.ignoreSpacing.left || n.left, right: e.ignoreSpacing.right || n.right, up: e.ignoreSpacing.up || n.up, down: e.ignoreSpacing.down || n.down } })), jl = (t) => {
  const n = J((e) => (r) => Lr(r)((o) => ({ ...o, outDegree: o.outDegreeReal }))(e))(t)(t.cGroupOrder);
  return J((e) => (r) => Hn(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder);
}, Fn = { left: !1, right: !1, up: !1, down: !1 }, Zl = { horizontalSpacing: (t) => (n) => 0, verticalSpacing: (t) => (n) => 0 }, Ss = (t) => J((n) => (e) => {
  const r = Ut(e)(n.cGroups);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just") {
    const o = J((s) => (u) => {
      const c = Ut(u)(n.cNodes);
      if (c.tag === "Nothing")
        return s;
      if (c.tag === "Just") {
        if (s.tag === "Nothing")
          return b("Just", u);
        if (s.tag === "Just") {
          const a = Ut(s._1)(n.cNodes);
          if (a.tag === "Nothing")
            return b("Just", u);
          if (a.tag === "Just")
            return c._1.hitbox.x < a._1.hitbox.x ? b("Just", u) : b("Just", s._1);
        }
      }
      f();
    })(T)(r._1.cNodes), i = Lr(e)((s) => ({ ...s, reference: o }))(n);
    if (o.tag === "Nothing")
      return i;
    if (o.tag === "Just") {
      const s = Ut(o._1)(i.cNodes);
      if (s.tag === "Nothing")
        return i;
      if (s.tag === "Just") {
        const u = s._1;
        return J((c) => (a) => Hn(a)((g) => ({ ...g, cGroupOffset: { x: g.hitbox.x - u.hitbox.x, y: g.hitbox.y - u.hitbox.y } }))(c))(i)(r._1.cNodes);
      }
    }
  }
  f();
})(t)(t.cGroupOrder), En = (t) => Ss({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return Q;
      if (e.tag === "Node")
        return Dt("Node", e._1, e._2, e._3, { ...e._4, hitbox: { ...e._4.hitbox, x: -e._4.hitbox.x - e._4.hitbox.width } }, n(e._5), n(e._6));
      f();
    };
    return n(t.cNodes);
  })()
}), Vn = (t) => Ss({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return Q;
      if (e.tag === "Node")
        return Dt(
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
}), Xc = (t) => {
  const n = J((e) => (r) => Lr(r)((o) => ({ ...o, outDegree: 0, outDegreeReal: 0, incomingConstraints: [] }))(e))(t)(t.cGroupOrder);
  return J((e) => (r) => {
    const o = Ut(r)(e.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just") {
      if (o._1.cGroup.tag === "Nothing")
        return e;
      if (o._1.cGroup.tag === "Just") {
        const i = o._1.cGroup._1;
        return J((s) => (u) => {
          const c = Ut(u)(s.cNodes);
          if (c.tag === "Nothing")
            return s;
          if (c.tag === "Just")
            return c._1.cGroup.tag === "Just" && c._1.cGroup._1 !== i ? Lr(c._1.cGroup._1)((a) => ({ ...a, outDegree: a.outDegree + 1 | 0, outDegreeReal: a.outDegreeReal + 1 | 0 }))(Lr(i)((a) => In(Er)(u)(a.incomingConstraints) ? a : { ...a, incomingConstraints: [...a.incomingConstraints, u] })(s)) : s;
          f();
        })(e)(o._1.constraints);
      }
    }
    f();
  })(n)(n.cNodeOrder);
}, no = (t) => {
  const n = Ml(t.cGraph);
  return { ...t, cGraph: Xc(J((e) => (r) => Hn(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder)) };
}, t1 = (t) => (n) => J((e) => (r) => {
  if (t === "LEFT" || t === "UP") {
    const i = r._2;
    return Hn(r._1)((s) => ({ ...s, constraints: [...s.constraints, i] }))(e);
  }
  const o = r._1;
  return Hn(r._2)((i) => ({ ...i, constraints: [...i.constraints, o] }))(e);
})(n)(t === "LEFT" || t === "RIGHT" ? n.predefinedHorizontalConstraints : n.predefinedVerticalConstraints), Rn = (t) => {
  const n = {
    ...t,
    cGraph: t1(t.direction)({
      ...t.cGraph,
      cNodes: (() => {
        const e = (r) => {
          if (r.tag === "Leaf")
            return Q;
          if (r.tag === "Node")
            return Dt("Node", r._1, r._2, r._3, { ...r._4, constraints: [] }, e(r._5), e(r._6));
          f();
        };
        return e(t.cGraph.cNodes);
      })()
    })
  };
  return {
    ...n,
    cGraph: Xc((() => {
      if (n.constraintAlgorithm.tag === "Nothing")
        return n.cGraph;
      if (n.constraintAlgorithm.tag === "Just")
        return n.constraintAlgorithm._1(n);
      f();
    })())
  };
}, n1 = (t) => (n) => (e) => {
  const r = { ...e, direction: n };
  if (t === "UNDEFINED")
    return n === "LEFT" ? Rn(r) : n === "RIGHT" ? Rn({ ...r, cGraph: En(r.cGraph) }) : n === "UP" ? Rn({ ...r, cGraph: Vn(r.cGraph) }) : n === "DOWN" ? Rn({ ...r, cGraph: En(Vn(r.cGraph)) }) : r;
  if (t === "LEFT")
    return n === "RIGHT" ? no({ ...r, cGraph: En(r.cGraph) }) : n === "UP" ? Rn({ ...r, cGraph: Vn(r.cGraph) }) : n === "DOWN" ? Rn({ ...r, cGraph: En(Vn(r.cGraph)) }) : r;
  if (t === "RIGHT")
    return n === "LEFT" ? no({ ...r, cGraph: En(r.cGraph) }) : n === "UP" ? Rn({ ...r, cGraph: Vn(En(r.cGraph)) }) : n === "DOWN" ? Rn({ ...r, cGraph: En(Vn(En(r.cGraph))) }) : r;
  if (t === "UP")
    return n === "LEFT" ? Rn({ ...r, cGraph: Vn(r.cGraph) }) : n === "RIGHT" ? Rn({ ...r, cGraph: En(Vn(r.cGraph)) }) : n === "DOWN" ? no({ ...r, cGraph: En(r.cGraph) }) : r;
  if (t === "DOWN")
    return n === "LEFT" ? Rn({ ...r, cGraph: Vn(En(r.cGraph)) }) : n === "RIGHT" ? Rn({ ...r, cGraph: En(Vn(En(r.cGraph))) }) : n === "UP" ? no({ ...r, cGraph: En(r.cGraph) }) : r;
  f();
}, Uc = (t) => (n) => n.finished || !Yl(t)(n.cGraph.supportedDirections) || (t === "LEFT" ? n.direction === "LEFT" : t === "RIGHT" ? n.direction === "RIGHT" : t === "UP" ? n.direction === "UP" : t === "DOWN" ? n.direction === "DOWN" : t === "UNDEFINED" && n.direction === "UNDEFINED") ? n : n1(n.direction)(t)(n), e1 = (t) => {
  if (t.finished)
    return t;
  const n = t.direction === "UNDEFINED" ? Uc(Cs)(t) : t, e = { ...n, cGraph: jl(n.cGraph) };
  if (e.compactionAlgorithm.tag === "Nothing")
    return e;
  if (e.compactionAlgorithm.tag === "Just")
    return e.compactionAlgorithm._1(e);
  f();
}, Mc = (t) => (n) => (e) => {
  const r = Ut(t)(e.cNodes), o = Ut(n)(e.cGroups);
  return r.tag === "Just" && o.tag === "Just" ? (() => {
    if (r._1.cGroup.tag === "Nothing")
      return !1;
    if (r._1.cGroup.tag === "Just")
      return !0;
    f();
  })() && (r._1.cGroup.tag === "Nothing" || !(r._1.cGroup.tag === "Just" && r._1.cGroup._1 === n)) ? e : {
    ...e,
    cNodes: Y(rt)(t)({ ...r._1, cGroup: b("Just", n) })(e.cNodes),
    cGroups: Y(rt)(n)({
      ...o._1,
      cNodes: In(Er)(t)(o._1.cNodes) ? o._1.cNodes : [...o._1.cNodes, t],
      reference: (() => {
        if (o._1.reference.tag === "Nothing")
          return b("Just", t);
        if (o._1.reference.tag === "Just")
          return b("Just", o._1.reference._1);
        f();
      })()
    })(e.cGroups)
  } : e;
}, Kc = (t) => (n) => ({
  id: n.nextCNodeId,
  graph: {
    ...n,
    cNodes: Y(rt)(n.nextCNodeId)({
      id: n.nextCNodeId,
      origin: t.origin,
      kind: t.kind,
      cGroup: T,
      cGroupOffset: Xl,
      hitbox: t.hitbox,
      hitboxPreCompaction: t.hitbox,
      constraints: [],
      startPos: -1e308,
      ignoreSpacing: Fn
    })(n.cNodes),
    cNodeOrder: [...n.cNodeOrder, n.nextCNodeId],
    nextCNodeId: n.nextCNodeId + 1 | 0
  }
}), Gs = (t) => (n) => {
  const e = n.nextCGroupId;
  return {
    id: e,
    graph: J((r) => (o) => Mc(o)(e)(r))({
      ...n,
      cGroups: Y(rt)(e)({
        id: e,
        master: t.master,
        cNodes: [],
        startPos: -1e308,
        incomingConstraints: [],
        outDegree: 0,
        outDegreeReal: 0,
        reference: T,
        delta: 0,
        deltaNormalized: 0
      })(n.cGroups),
      cGroupOrder: [...n.cGroupOrder, e],
      nextCGroupId: e + 1 | 0
    })(t.nodes)
  };
}, r1 = (t) => J((n) => (e) => {
  const r = Ut(e)(n.cNodes);
  return r.tag === "Just" && r._1.cGroup.tag === "Nothing" ? Gs({ master: T, nodes: [e] })(n).graph : n;
})(t)(t.cNodeOrder), o1 = (t) => ({
  cGraph: Ul(r1(Ss(t))),
  direction: Yc,
  compactionAlgorithm: T,
  constraintAlgorithm: T,
  spacingsHandler: Zl,
  lockFun: T,
  finished: !1
}), yo = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, du = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Is = (t) => (n) => (e) => (r) => (o) => ({
  id: t,
  representedEdges: [o],
  affectedBends: [n, e],
  hitbox: { x: yo(n._1)(e._1), y: yo(n._2)(e._2), width: ir(n._1 - e._1), height: ir(n._2 - e._2) },
  ignoreSpacing: Fn,
  potentialGroupParents: (() => {
    if (r.tag === "Nothing")
      return [];
    if (r.tag === "Just")
      return [r._1];
    f();
  })(),
  aPort: T
}), i1 = (t) => (n) => {
  const e = yo(t.hitbox.x)(n.hitbox.x), r = yo(t.hitbox.y)(n.hitbox.y);
  return {
    ...t,
    representedEdges: [...t.representedEdges, ...n.representedEdges],
    affectedBends: [...t.affectedBends, ...n.affectedBends],
    potentialGroupParents: [...t.potentialGroupParents, ...n.potentialGroupParents],
    hitbox: {
      x: e,
      y: r,
      width: du(t.hitbox.x + t.hitbox.width)(n.hitbox.x + n.hitbox.width) - e,
      height: du(t.hitbox.y + t.hitbox.height)(n.hitbox.y + n.hitbox.height) - r
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
}, s1 = (t) => (n) => ir(t.hitbox.x - n.hitbox.x) <= 1e-4 && n.hitbox.y - (t.hitbox.y + t.hitbox.height) <= 1e-4 && t.hitbox.y - (n.hitbox.y + n.hitbox.height) <= 1e-4, u1 = (t) => (n) => ir(t.hitbox.x - n.hitbox.x) <= 1e-4 ? pt.compare(t.hitbox.y)(n.hitbox.y) : t.hitbox.x < n.hitbox.x ? dn : hn, jc = (t, n) => ({ tag: t, _1: n }), Ps = /* @__PURE__ */ jt(G)(Bt), Vo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, hu = /* @__PURE__ */ (() => {
  const t = { eq: (e) => (r) => e._1 === r._1 && (e._2.tag === "Nothing" ? r._2.tag === "Nothing" : e._2.tag === "Just" && r._2.tag === "Just" && e._2._1 === r._2._1) }, n = {
    compare: (e) => (r) => {
      const o = G.compare(e._1)(r._1);
      if (o === "LT")
        return dn;
      if (o === "GT")
        return hn;
      if (e._2.tag === "Nothing")
        return r._2.tag === "Nothing" ? yn : dn;
      if (r._2.tag === "Nothing")
        return hn;
      if (e._2.tag === "Just" && r._2.tag === "Just")
        return G.compare(e._2._1)(r._2._1);
      f();
    },
    Eq0: () => t
  };
  return J((e) => (r) => Y(n)(r)()(e))(Q);
})(), ge = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, c1 = /* @__PURE__ */ J((t) => (n) => Y(Vl)(n)()(t))(Q), gi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = wc.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, a1 = (t) => (n) => {
  const e = Ps(O((i) => L(i.id, i))(t)), r = vt((i) => Vo(i)(e))(n), o = rt.compare((() => {
    const i = hu(O((s) => L(s.from.node, s.from.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })())((() => {
    const i = hu(O((s) => L(s.to.node, s.to.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })());
  if (o === "LT")
    return { ...Fn, left: !0, right: !1 };
  if (o === "GT")
    return { ...Fn, left: !1, right: !0 };
  if (o === "EQ")
    return Fn;
  f();
}, f1 = (t) => vt((n) => {
  if (n.direction === "V")
    return b("Just", { start: n.start, end: n.end });
  if (n.direction === "H")
    return T;
  f();
})(t.segments), pu = (t) => (n) => (e) => {
  if (e.tag === "Just") {
    const r = ge(n)(t);
    if (r.tag === "Just") {
      const o = ln((i) => i.id === e._1)(r._1);
      if (o.tag === "Just")
        return o._1.side;
      if (o.tag === "Nothing")
        return Kn;
      f();
    }
    if (r.tag === "Nothing")
      return Kn;
    f();
  }
  if (e.tag === "Nothing")
    return Kn;
  f();
}, g1 = (t) => (n) => (e) => {
  const r = Kc({
    origin: b("Just", jc("SegmentOrigin", e)),
    kind: b("Just", "vs"),
    hitbox: e.hitbox
  })(n.cGraph), o = Kl(r.id)(e.ignoreSpacing)(r.graph);
  return {
    ...n,
    cGraph: (() => {
      if (0 < e.potentialGroupParents.length) {
        const i = Ut(e.potentialGroupParents[0])(o.cNodes);
        if (i.tag === "Just") {
          if (i._1.cGroup.tag === "Just")
            return Mc(r.id)(i._1.cGroup._1)(o);
          if (i._1.cGroup.tag === "Nothing")
            return o;
          f();
        }
        if (i.tag === "Nothing")
          return o;
        f();
      }
      return Gs({ master: b("Just", r.id), nodes: [r.id] })(o).graph;
    })(),
    edgeToCs: J((i) => (s) => yt(G)(fn)(s)([r.id])(i))(n.edgeToCs)(e.representedEdges),
    lockMap: Y(rt)(r.id)(a1(t)(e.representedEdges))(n.lockMap)
  };
}, _1 = (t) => (n) => (e) => {
  const r = Wt(
    (o) => T,
    (o) => (i) => b("Just", { head: o, tail: i }),
    Lt(u1)(n)
  );
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just") {
    const o = J((i) => (s) => s1(i.survivor)(s) ? { ...i, survivor: i1(i.survivor)(s) } : { survivor: s, merged: [...i.merged, i.survivor] })({ survivor: r._1.head, merged: [] })(r._1.tail);
    return J(g1(t))(e)([...o.merged, o.survivor]);
  }
  f();
}, l1 = (t) => ({
  cGraph: {
    cNodes: Q,
    cNodeOrder: [],
    cGroups: Q,
    cGroupOrder: [],
    supportedDirections: c1([Yc, Cs, Ol]),
    predefinedHorizontalConstraints: [],
    predefinedVerticalConstraints: [],
    nextCNodeId: 0,
    nextCGroupId: 0
  },
  nodeToC: Q,
  edgeToCs: Q,
  lockMap: Q
}), d1 = (t) => {
  const n = ct(4);
  return { x: t.position._1 * n, y: t.position._2 * n, width: t.size._1 * n, height: t.size._2 * n };
}, h1 = (t) => (n) => (e) => J((r) => (o) => {
  const i = Kc({ origin: b("Just", jc("NodeOrigin", o.node)), kind: T, hitbox: d1(o) })(r.cGraph), s = ge(o.node)(t), u = (() => {
    if (s.tag === "Nothing")
      return L(0, 0);
    if (s.tag === "Just")
      return s._1;
    f();
  })();
  return {
    ...r,
    cGraph: Gs({ master: b("Just", i.id), nodes: [i.id] })(i.graph).graph,
    nodeToC: Y(G)(o.node)(i.id)(r.nodeToC),
    lockMap: Y(rt)(i.id)((() => {
      const c = u._1 - u._2 | 0;
      return c < 0 ? { ...Fn, left: !0 } : c > 0 ? { ...Fn, right: !0 } : Fn;
    })())(r.lockMap)
  };
})(e)(n), p1 = (t) => J((n) => (e) => yt(G)((r) => (o) => L(
  r._1 + o._1 | 0,
  r._2 + o._2 | 0
))(e.to.node)(L(1, 0))(yt(G)((r) => (o) => L(r._1 + o._1 | 0, r._2 + o._2 | 0))(e.from.node)(L(
  0,
  1
))(n)))(Q)(t), $1 = (t) => J((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? Y(G)(e.origin._1._1)(e.hitbox.x)(n) : n)(Q)(vt((n) => Ut(n)(t.cNodes))(t.cNodeOrder)), m1 = (t) => J((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? Y(G)(e.origin._1._1)(e.hitbox.x - e.hitboxPreCompaction.x)(n) : n)(Q)(vt((n) => Ut(n)(t.cNodes))(t.cNodeOrder)), N1 = (t) => J((n) => (e) => {
  if (e.origin.tag === "Just" && e.origin._1.tag === "SegmentOrigin") {
    const r = e.hitbox.x - e.hitboxPreCompaction.x;
    return J((o) => (i) => Y(wc)(i)(r)(o))(n)(e.origin._1._1.affectedBends);
  }
  return n;
})(Q)(vt((n) => Ut(n)(t.cNodes))(t.cNodeOrder)), Zc = (t) => {
  const n = Ps(O((e) => L(e.id, e))(t.edges));
  return vt((e) => {
    const r = Vo(e.edge)(n);
    if (r.tag === "Just")
      return b(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.from.node,
          tgt: r._1.to.node,
          srcSide: pu(t.ports)(r._1.from.node)(r._1.from.port),
          tgtSide: pu(t.ports)(r._1.to.node)(r._1.to.port),
          path: e
        }
      );
    if (r.tag === "Nothing")
      return T;
    f();
  })(t.paths);
}, J1 = (t) => (n) => {
  const e = bt(n)((r) => {
    if (r.src === r.tgt)
      return [];
    if ((r.srcSide === "North" || r.srcSide === "South") && (r.tgtSide === "North" || r.tgtSide === "South"))
      return [];
    const o = ge(r.tgt)(t.nodeToC), i = (() => {
      if (o.tag === "Just")
        return Ut(o._1)(t.cGraph.cNodes);
      if (o.tag === "Nothing")
        return T;
      f();
    })(), s = ge(r.src)(t.nodeToC), u = (() => {
      if (s.tag === "Just")
        return Ut(s._1)(t.cGraph.cNodes);
      if (s.tag === "Nothing")
        return T;
      f();
    })(), c = (() => {
      if (u.tag === "Just") {
        if (i.tag === "Just") {
          if (u._1.cGroup.tag === "Just") {
            if (i._1.cGroup.tag === "Just")
              return b("Just", { srcGroup: u._1.cGroup._1, tgtGroup: i._1.cGroup._1, delta: 0, weight: 100 });
            if (i._1.cGroup.tag === "Nothing")
              return T;
            f();
          }
          if (u._1.cGroup.tag === "Nothing")
            return T;
          f();
        }
        if (i.tag === "Nothing")
          return T;
        f();
      }
      if (u.tag === "Nothing")
        return T;
      f();
    })(), a = (_) => (h) => (p) => {
      if (u.tag === "Just") {
        if (u._1.cGroup.tag === "Just") {
          if (p.cGroup.tag === "Just")
            return _(p.hitbox.x) && p.cGroup._1 !== u._1.cGroup._1 ? b("Just", h(p.cGroup._1)(u._1.cGroup._1)) : T;
          if (p.cGroup.tag === "Nothing")
            return T;
          f();
        }
        if (u._1.cGroup.tag === "Nothing")
          return T;
        f();
      }
      if (u.tag === "Nothing")
        return T;
      f();
    }, g = vt((_) => Ut(_)(t.cGraph.cNodes))((() => {
      const _ = Vo(r.edgeId)(t.edgeToCs);
      if (_.tag === "Nothing")
        return [];
      if (_.tag === "Just")
        return _._1;
      f();
    })()), l = (() => {
      if (u.tag === "Just" && r.srcSide === "West") {
        const _ = u._1;
        return vt(a((h) => h < _.hitbox.x)((h) => (p) => ({ srcGroup: h, tgtGroup: p, delta: 1, weight: 100 })))(g);
      }
      return [];
    })(), d = (() => {
      if (u.tag === "Just" && r.tgtSide === "East") {
        const _ = u._1;
        return vt(a((h) => h > _.hitbox.x)((h) => (p) => ({ srcGroup: p, tgtGroup: h, delta: 1, weight: 100 })))(g);
      }
      return [];
    })();
    if (c.tag === "Nothing")
      return [];
    if (c.tag === "Just")
      return [c._1, ...l, ...d];
    f();
  });
  return {
    sameEdgeVerticalSegments: (r) => (o) => r.origin.tag === "Just" && r.origin._1.tag === "SegmentOrigin" && o.origin.tag === "Just" && o.origin._1.tag === "SegmentOrigin" && (() => {
      const i = o.origin._1._1;
      return de((s) => In(te)(s)(i.representedEdges), r.origin._1._1.representedEdges);
    })(),
    vsLNodePair: (r) => (o) => r.origin.tag === "Just" && o.origin.tag === "Just" && (r.origin._1.tag === "SegmentOrigin" ? o.origin._1.tag === "NodeOrigin" : r.origin._1.tag === "NodeOrigin" && o.origin._1.tag === "SegmentOrigin"),
    edgeLengthEdges: (r) => e
  };
}, v1 = (t) => (n) => {
  const e = ct(4), r = $1(t), o = m1(t), i = Ps(O((u) => L(u.id, L(u.from.node, u.to.node)))(n.edges)), s = N1(t);
  return {
    nodes: O((u) => {
      const c = ge(u.node)(r);
      if (c.tag === "Just")
        return { ...u, position: L(c._1 / e, u.position._2) };
      if (c.tag === "Nothing")
        return u;
      f();
    })(n.nodes),
    edges: O((u) => {
      const c = Vo(u.edge)(i), a = (() => {
        if (c.tag === "Nothing")
          return u.segments;
        if (c.tag === "Just") {
          const g = ge(c._1._1)(o), l = (() => {
            if (g.tag === "Nothing")
              return 0;
            if (g.tag === "Just")
              return g._1;
            f();
          })(), d = ge(c._1._2)(o), _ = (() => {
            if (d.tag === "Nothing")
              return 0;
            if (d.tag === "Just")
              return d._1;
            f();
          })();
          return Pt((() => {
            const h = u.reversed ? _ : l, p = u.reversed ? l : _, $ = u.segments.length;
            return (m) => (N) => {
              if (N.direction === "V") {
                const v = (() => {
                  if (m === 0)
                    return h;
                  if (m === ($ - 1 | 0))
                    return p;
                  const w = gi(N.start)(s);
                  if (w.tag === "Nothing")
                    return 0;
                  if (w.tag === "Just")
                    return w._1;
                  f();
                })();
                return { ...N, start: L(N.start._1 + v, N.start._2), end: L(N.end._1 + v, N.end._2) };
              }
              if (N.direction === "H")
                return {
                  ...N,
                  start: L(
                    (() => {
                      if (m === 0)
                        return N.start._1 + h;
                      const v = gi(N.start)(s);
                      if (v.tag === "Nothing")
                        return N.start._1 + 0;
                      if (v.tag === "Just")
                        return N.start._1 + v._1;
                      f();
                    })(),
                    N.start._2
                  ),
                  end: L(
                    (() => {
                      if (m === ($ - 1 | 0))
                        return N.end._1 + p;
                      const v = gi(N.end)(s);
                      if (v.tag === "Nothing")
                        return N.end._1 + 0;
                      if (v.tag === "Just")
                        return N.end._1 + v._1;
                      f();
                    })(),
                    N.end._2
                  )
                };
              f();
            };
          })())(u.segments);
        }
        f();
      })();
      return { ...u, segments: a, bends: $n((g) => (l) => g.end, a, Gt(1, a.length, a)) };
    })(n.paths)
  };
}, T1 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Is(o.nextId)(i._2.start)(i._2.end)(T)(t.edgeId), u = (() => {
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
}, $u = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...Is(i.nextId)(r.start)(L(r.start._1, o.down ? e.y : e.y + e.height))(b(
        "Just",
        n
      ))(t.edgeId),
      aPort: b("Just", { node: t.src, side: o.side }),
      ignoreSpacing: o.down ? { ...Fn, down: !0 } : { ...Fn, up: !0 }
    }
  ]
}), eo = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...Is(i.nextId)(r.end)(L(r.end._1, o.down ? e.y : e.y + e.height))(b(
        "Just",
        n
      ))(t.edgeId),
      aPort: b("Just", { node: t.tgt, side: o.side }),
      ignoreSpacing: o.down ? { ...Fn, down: !0 } : { ...Fn, up: !0 }
    }
  ]
}), y1 = (t) => (n) => (e) => {
  const r = ge(e.src)(t.nodeToC), o = ge(e.tgt)(t.nodeToC), i = (() => {
    if (r.tag === "Just") {
      const g = Ut(r._1)(t.cGraph.cNodes);
      return g.tag === "Just" ? b("Just", g._1.hitbox) : T;
    }
    if (r.tag === "Nothing")
      return T;
    f();
  })(), s = (() => {
    if (o.tag === "Just") {
      const g = Ut(o._1)(t.cGraph.cNodes);
      return g.tag === "Just" ? b("Just", g._1.hitbox) : T;
    }
    if (o.tag === "Nothing")
      return T;
    f();
  })(), u = f1(e.path), c = J(T1(e)(i)(s)(u.length - 1 | 0))(n)(Pt((g) => (l) => L(
    g,
    l
  ))(u));
  if (0 < u.length) {
    const g = (() => {
      if (r.tag === "Just" && i.tag === "Just") {
        if (e.srcSide === "North")
          return $u(e)(r._1)(i._1)(u[0])({ side: un, down: !0 })(c);
        if (e.srcSide === "South")
          return $u(e)(r._1)(i._1)(u[0])({ side: cn, down: !1 })(c);
      }
      return c;
    })(), l = u.length - 1 | 0;
    if (l >= 0 && l < u.length && o.tag === "Just" && s.tag === "Just") {
      if (e.tgtSide === "North")
        return eo(e)(o._1)(s._1)(u[l])({ side: un, down: !0 })(g);
      if (e.tgtSide === "South")
        return eo(e)(o._1)(s._1)(u[l])({ side: cn, down: !1 })(g);
    }
    return g;
  }
  const a = u.length - 1 | 0;
  if (a >= 0 && a < u.length && o.tag === "Just" && s.tag === "Just") {
    if (e.tgtSide === "North")
      return eo(e)(o._1)(s._1)(u[a])({ side: un, down: !0 })(c);
    if (e.tgtSide === "South")
      return eo(e)(o._1)(s._1)(u[a])({ side: cn, down: !1 })(c);
  }
  return c;
}, w1 = (t) => (n) => (e) => _1(t)(J(y1(e))({ nextId: 0, segments: [] })(n).segments)(e), L1 = (t) => w1(t.edges)(Zc(t))(h1(p1(t.edges))(t.nodes)(l1())), _e = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = rt.compare(t)(s._3);
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
}, Si = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Gi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = rt.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, k1 = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, b1 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => {
    const o = (u) => {
      let c = u, a = !0, g;
      for (; a; ) {
        const l = c, d = Wt((_) => T, (_) => (h) => b("Just", { head: _, tail: h }), l.queue);
        if (d.tag === "Nothing") {
          a = !1, g = l;
          continue;
        }
        if (d.tag === "Just") {
          const _ = d._1.head;
          if ((($) => {
            let m = $, N = !0, v;
            for (; N; ) {
              const w = m;
              if (w.tag === "Leaf") {
                N = !1, v = !1;
                continue;
              }
              if (w.tag === "Node") {
                const y = t.compare(_)(w._3);
                if (y === "LT") {
                  m = w._5;
                  continue;
                }
                if (y === "GT") {
                  m = w._6;
                  continue;
                }
                if (y === "EQ") {
                  N = !1, v = !0;
                  continue;
                }
              }
              f();
            }
            return v;
          })(l.removedNodes)) {
            c = { ...l, queue: d._1.tail };
            continue;
          }
          const h = ln((p) => !_e(p.eid)(l.removedEdges) && (n.eq(p.src)(_) || n.eq(p.tgt)(_)))(r);
          if (h.tag === "Nothing") {
            c = { ...l, queue: d._1.tail };
            continue;
          }
          if (h.tag === "Just") {
            const p = n.eq(h._1.src)(_) ? h._1.tgt : h._1.src, $ = {
              ...l,
              degree: Y(t)(p)((() => {
                const N = ((v) => {
                  let w = v, y = !0, k;
                  for (; y; ) {
                    const E = w;
                    if (E.tag === "Leaf") {
                      y = !1, k = T;
                      continue;
                    }
                    if (E.tag === "Node") {
                      const I = t.compare(p)(E._3);
                      if (I === "LT") {
                        w = E._5;
                        continue;
                      }
                      if (I === "GT") {
                        w = E._6;
                        continue;
                      }
                      if (I === "EQ") {
                        y = !1, k = b("Just", E._4);
                        continue;
                      }
                    }
                    f();
                  }
                  return k;
                })(l.degree);
                if (N.tag === "Nothing")
                  return -1;
                if (N.tag === "Just")
                  return N._1 - 1 | 0;
                f();
              })())(l.degree),
              removedNodes: Y(t)(_)()(l.removedNodes),
              removedEdges: Y(rt)(h._1.eid)()(l.removedEdges),
              record: [...l.record, { node: _, neighbour: p, viaSrc: n.eq(h._1.src)(_) }],
              queue: d._1.tail
            };
            if ((() => {
              const N = ((w) => {
                let y = w, k = !0, E;
                for (; k; ) {
                  const I = y;
                  if (I.tag === "Leaf") {
                    k = !1, E = T;
                    continue;
                  }
                  if (I.tag === "Node") {
                    const D = t.compare(p)(I._3);
                    if (D === "LT") {
                      y = I._5;
                      continue;
                    }
                    if (D === "GT") {
                      y = I._6;
                      continue;
                    }
                    if (D === "EQ") {
                      k = !1, E = b("Just", I._4);
                      continue;
                    }
                  }
                  f();
                }
                return E;
              })($.degree), v = (w) => {
                let y = w, k = !0, E;
                for (; k; ) {
                  const I = y;
                  if (I.tag === "Leaf") {
                    k = !1, E = !1;
                    continue;
                  }
                  if (I.tag === "Node") {
                    const D = t.compare(p)(I._3);
                    if (D === "LT") {
                      y = I._5;
                      continue;
                    }
                    if (D === "GT") {
                      y = I._6;
                      continue;
                    }
                    if (D === "EQ") {
                      k = !1, E = !0;
                      continue;
                    }
                  }
                  f();
                }
                return E;
              };
              return (() => {
                if (N.tag === "Nothing")
                  return !1;
                if (N.tag === "Just")
                  return N._1 === 1;
                f();
              })() && !v($.removedNodes);
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
    }, i = J((u) => (c) => yt(t)(Zt)(c.src)(1)(yt(t)(Zt)(c.tgt)(1)(u)))(Q)(r), s = o({
      degree: i,
      removedNodes: Q,
      removedEdges: Q,
      record: [],
      queue: gt(
        (u) => {
          const a = ((g) => {
            let l = g, d = !0, _;
            for (; d; ) {
              const h = l;
              if (h.tag === "Leaf") {
                d = !1, _ = T;
                continue;
              }
              if (h.tag === "Node") {
                const p = t.compare(u)(h._3);
                if (p === "LT") {
                  l = h._5;
                  continue;
                }
                if (p === "GT") {
                  l = h._6;
                  continue;
                }
                if (p === "EQ") {
                  d = !1, _ = b("Just", h._4);
                  continue;
                }
              }
              f();
            }
            return _;
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
      coreNodes: gt(
        (u) => !((a) => {
          let g = a, l = !0, d;
          for (; l; ) {
            const _ = g;
            if (_.tag === "Leaf") {
              l = !1, d = !1;
              continue;
            }
            if (_.tag === "Node") {
              const h = t.compare(u)(_._3);
              if (h === "LT") {
                g = _._5;
                continue;
              }
              if (h === "GT") {
                g = _._6;
                continue;
              }
              if (h === "EQ") {
                l = !1, d = !0;
                continue;
              }
            }
            f();
          }
          return d;
        })(s.removedNodes),
        e
      ),
      coreEdges: gt((u) => !_e(u.eid)(s.removedEdges), r),
      removed: s.record
    };
  };
}, E1 = (t) => (n) => (e) => J((r) => (o) => {
  const i = o.neighbour, s = (() => {
    const u = ((a) => {
      let g = a, l = !0, d;
      for (; l; ) {
        const _ = g;
        if (_.tag === "Leaf") {
          l = !1, d = T;
          continue;
        }
        if (_.tag === "Node") {
          const h = t.compare(i)(_._3);
          if (h === "LT") {
            g = _._5;
            continue;
          }
          if (h === "GT") {
            g = _._6;
            continue;
          }
          if (h === "EQ") {
            l = !1, d = b("Just", _._4);
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
  return Y(t)(o.node)(o.viaSrc ? s - 1 | 0 : s + 1 | 0)(r);
})(e)(vn(n)), Ii = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = { ...o, treeNode: Y(t)(r)()(o.treeNode) };
    return J((s) => (u) => {
      if (_e(u.eid)(s.st.edgeVisited))
        return s;
      const c = { ...s.st, edgeVisited: Y(rt)(u.eid)()(s.st.edgeVisited) }, a = n.eq(u.src)((() => {
        const g = u.src, l = (_) => {
          let h = _, p = !0, $;
          for (; p; ) {
            const m = h;
            if (m.tag === "Leaf") {
              p = !1, $ = !1;
              continue;
            }
            if (m.tag === "Node") {
              const N = t.compare(g)(m._3);
              if (N === "LT") {
                h = m._5;
                continue;
              }
              if (N === "GT") {
                h = m._6;
                continue;
              }
              if (N === "EQ") {
                p = !1, $ = !0;
                continue;
              }
            }
            f();
          }
          return $;
        }, d = u.tgt;
        return l(c.treeNode) && !((h) => {
          let p = h, $ = !0, m;
          for (; $; ) {
            const N = p;
            if (N.tag === "Leaf") {
              $ = !1, m = !1;
              continue;
            }
            if (N.tag === "Node") {
              const v = t.compare(d)(N._3);
              if (v === "LT") {
                p = N._5;
                continue;
              }
              if (v === "GT") {
                p = N._6;
                continue;
              }
              if (v === "EQ") {
                $ = !1, m = !0;
                continue;
              }
            }
            f();
          }
          return m;
        })(c.treeNode);
      })() ? u.src : (() => {
        const g = u.tgt, l = (_) => {
          let h = _, p = !0, $;
          for (; p; ) {
            const m = h;
            if (m.tag === "Leaf") {
              p = !1, $ = !1;
              continue;
            }
            if (m.tag === "Node") {
              const N = t.compare(g)(m._3);
              if (N === "LT") {
                h = m._5;
                continue;
              }
              if (N === "GT") {
                h = m._6;
                continue;
              }
              if (N === "EQ") {
                p = !1, $ = !0;
                continue;
              }
            }
            f();
          }
          return $;
        }, d = u.src;
        return l(c.treeNode) && !((h) => {
          let p = h, $ = !0, m;
          for (; $; ) {
            const N = p;
            if (N.tag === "Leaf") {
              $ = !1, m = !1;
              continue;
            }
            if (N.tag === "Node") {
              const v = t.compare(d)(N._3);
              if (v === "LT") {
                p = N._5;
                continue;
              }
              if (v === "GT") {
                p = N._6;
                continue;
              }
              if (v === "EQ") {
                $ = !1, m = !0;
                continue;
              }
            }
            f();
          }
          return m;
        })(c.treeNode);
      })() ? u.tgt : u.src) ? u.tgt : u.src;
      if (_e(u.eid)(c.treeEdge)) {
        if (((d) => {
          let _ = d, h = !0, p;
          for (; h; ) {
            const $ = _;
            if ($.tag === "Leaf") {
              h = !1, p = !1;
              continue;
            }
            if ($.tag === "Node") {
              const m = t.compare(a)($._3);
              if (m === "LT") {
                _ = $._5;
                continue;
              }
              if (m === "GT") {
                _ = $._6;
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
        const g = Ii(t)(e)(a)(c);
        return { count: s.count + g.count | 0, st: g.st };
      }
      if ((() => {
        const g = (d) => {
          let _ = d, h = !0, p;
          for (; h; ) {
            const $ = _;
            if ($.tag === "Leaf") {
              h = !1, p = !1;
              continue;
            }
            if ($.tag === "Node") {
              const m = t.compare(a)($._3);
              if (m === "LT") {
                _ = $._5;
                continue;
              }
              if (m === "GT") {
                _ = $._6;
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
        }, l = u.tgt;
        return !g(c.treeNode) && (() => {
          const _ = ((m) => {
            let N = m, v = !0, w;
            for (; v; ) {
              const y = N;
              if (y.tag === "Leaf") {
                v = !1, w = T;
                continue;
              }
              if (y.tag === "Node") {
                const k = t.compare(l)(y._3);
                if (k === "LT") {
                  N = y._5;
                  continue;
                }
                if (k === "GT") {
                  N = y._6;
                  continue;
                }
                if (k === "EQ") {
                  v = !1, w = b("Just", y._4);
                  continue;
                }
              }
              f();
            }
            return w;
          })(c.layer), h = u.src, $ = ((m) => {
            let N = m, v = !0, w;
            for (; v; ) {
              const y = N;
              if (y.tag === "Leaf") {
                v = !1, w = T;
                continue;
              }
              if (y.tag === "Node") {
                const k = t.compare(h)(y._3);
                if (k === "LT") {
                  N = y._5;
                  continue;
                }
                if (k === "GT") {
                  N = y._6;
                  continue;
                }
                if (k === "EQ") {
                  v = !1, w = b("Just", y._4);
                  continue;
                }
              }
              f();
            }
            return w;
          })(c.layer);
          if (_.tag === "Nothing") {
            if ($.tag === "Nothing")
              return u.delta === 0;
            if ($.tag === "Just")
              return u.delta === -$._1;
            f();
          }
          if (_.tag === "Just") {
            if ($.tag === "Nothing")
              return u.delta === (_._1 - 0 | 0);
            if ($.tag === "Just")
              return u.delta === (_._1 - $._1 | 0);
          }
          f();
        })();
      })()) {
        const g = Ii(t)(e)(a)({ ...c, treeEdge: Y(rt)(u.eid)()(c.treeEdge) });
        return { count: s.count + g.count | 0, st: g.st };
      }
      return { ...s, st: c };
    })({ count: 1, st: i })(gt((s) => (n.eq(s.src)(r) || n.eq(s.tgt)(r)) && !_e(s.eid)(i.edgeVisited), e));
  };
}, wo = (t) => (n) => (e) => (r) => {
  const o = r.src, s = ((p) => {
    let $ = p, m = !0, N;
    for (; m; ) {
      const v = $;
      if (v.tag === "Leaf") {
        m = !1, N = T;
        continue;
      }
      if (v.tag === "Node") {
        const w = t.compare(o)(v._3);
        if (w === "LT") {
          $ = v._5;
          continue;
        }
        if (w === "GT") {
          $ = v._6;
          continue;
        }
        if (w === "EQ") {
          m = !1, N = b("Just", v._4);
          continue;
        }
      }
      f();
    }
    return N;
  })(n.poID), u = (() => {
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1;
    f();
  })(), c = r.tgt, g = ((p) => {
    let $ = p, m = !0, N;
    for (; m; ) {
      const v = $;
      if (v.tag === "Leaf") {
        m = !1, N = T;
        continue;
      }
      if (v.tag === "Node") {
        const w = t.compare(c)(v._3);
        if (w === "LT") {
          $ = v._5;
          continue;
        }
        if (w === "GT") {
          $ = v._6;
          continue;
        }
        if (w === "EQ") {
          m = !1, N = b("Just", v._4);
          continue;
        }
      }
      f();
    }
    return N;
  })(n.poID), l = (() => {
    if (g.tag === "Nothing")
      return 0;
    if (g.tag === "Just")
      return g._1;
    f();
  })(), _ = ((p) => {
    let $ = p, m = !0, N;
    for (; m; ) {
      const v = $;
      if (v.tag === "Leaf") {
        m = !1, N = T;
        continue;
      }
      if (v.tag === "Node") {
        const w = t.compare(e)(v._3);
        if (w === "LT") {
          $ = v._5;
          continue;
        }
        if (w === "GT") {
          $ = v._6;
          continue;
        }
        if (w === "EQ") {
          m = !1, N = b("Just", v._4);
          continue;
        }
      }
      f();
    }
    return N;
  })(n.poID), h = (() => {
    if (_.tag === "Nothing")
      return 0;
    if (_.tag === "Just")
      return _._1;
    f();
  })();
  return (() => {
    const p = r.src, m = ((N) => {
      let v = N, w = !0, y;
      for (; w; ) {
        const k = v;
        if (k.tag === "Leaf") {
          w = !1, y = T;
          continue;
        }
        if (k.tag === "Node") {
          const E = t.compare(p)(k._3);
          if (E === "LT") {
            v = k._5;
            continue;
          }
          if (E === "GT") {
            v = k._6;
            continue;
          }
          if (E === "EQ") {
            w = !1, y = b("Just", k._4);
            continue;
          }
        }
        f();
      }
      return y;
    })(n.lowestPoID);
    return (() => {
      if (m.tag === "Nothing")
        return 0 <= h;
      if (m.tag === "Just")
        return m._1 <= h;
      f();
    })() && (() => {
      const N = r.tgt;
      return h <= u && (() => {
        const w = ((y) => {
          let k = y, E = !0, I;
          for (; E; ) {
            const D = k;
            if (D.tag === "Leaf") {
              E = !1, I = T;
              continue;
            }
            if (D.tag === "Node") {
              const z = t.compare(N)(D._3);
              if (z === "LT") {
                k = D._5;
                continue;
              }
              if (z === "GT") {
                k = D._6;
                continue;
              }
              if (z === "EQ") {
                E = !1, I = b("Just", D._4);
                continue;
              }
            }
            f();
          }
          return I;
        })(n.lowestPoID);
        return (() => {
          if (w.tag === "Nothing")
            return 0 <= h;
          if (w.tag === "Just")
            return w._1 <= h;
          f();
        })() && h <= l;
      })();
    })();
  })() ? u >= l : u < l;
}, x1 = (t) => {
  const n = jt(t)(Bt);
  return (e) => ({
    layer: n(O((r) => L(r, 0))(e)),
    treeNode: Q,
    treeEdge: Q,
    poID: Q,
    lowestPoID: Q,
    cutvalue: Q,
    postOrder: 1,
    edgeVisited: Q
  });
}, C1 = (t) => (n) => (e) => J((r) => (o) => {
  if ((() => {
    const d = o.src, _ = ($) => {
      let m = $, N = !0, v;
      for (; N; ) {
        const w = m;
        if (w.tag === "Leaf") {
          N = !1, v = !1;
          continue;
        }
        if (w.tag === "Node") {
          const y = t.compare(d)(w._3);
          if (y === "LT") {
            m = w._5;
            continue;
          }
          if (y === "GT") {
            m = w._6;
            continue;
          }
          if (y === "EQ") {
            N = !1, v = !0;
            continue;
          }
        }
        f();
      }
      return v;
    }, h = o.tgt, p = ($) => {
      let m = $, N = !0, v;
      for (; N; ) {
        const w = m;
        if (w.tag === "Leaf") {
          N = !1, v = !1;
          continue;
        }
        if (w.tag === "Node") {
          const y = t.compare(h)(w._3);
          if (y === "LT") {
            m = w._5;
            continue;
          }
          if (y === "GT") {
            m = w._6;
            continue;
          }
          if (y === "EQ") {
            N = !1, v = !0;
            continue;
          }
        }
        f();
      }
      return v;
    };
    return _(e.treeNode) === p(e.treeNode);
  })())
    return r;
  const i = o.tgt, u = ((d) => {
    let _ = d, h = !0, p;
    for (; h; ) {
      const $ = _;
      if ($.tag === "Leaf") {
        h = !1, p = T;
        continue;
      }
      if ($.tag === "Node") {
        const m = t.compare(i)($._3);
        if (m === "LT") {
          _ = $._5;
          continue;
        }
        if (m === "GT") {
          _ = $._6;
          continue;
        }
        if (m === "EQ") {
          h = !1, p = b("Just", $._4);
          continue;
        }
      }
      f();
    }
    return p;
  })(e.layer), c = o.src, g = ((d) => {
    let _ = d, h = !0, p;
    for (; h; ) {
      const $ = _;
      if ($.tag === "Leaf") {
        h = !1, p = T;
        continue;
      }
      if ($.tag === "Node") {
        const m = t.compare(c)($._3);
        if (m === "LT") {
          _ = $._5;
          continue;
        }
        if (m === "GT") {
          _ = $._6;
          continue;
        }
        if (m === "EQ") {
          h = !1, p = b("Just", $._4);
          continue;
        }
      }
      f();
    }
    return p;
  })(e.layer), l = (() => {
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
  return l < r.slack ? { edge: b("Just", o), slack: l } : r;
})({ edge: T, slack: 1e9 })(n).edge, S1 = (t) => {
  const n = jt(t)(Bt);
  return (e) => (r) => {
    const o = J((i) => (s) => Si(i)((() => {
      const c = ((a) => {
        let g = a, l = !0, d;
        for (; l; ) {
          const _ = g;
          if (_.tag === "Leaf") {
            l = !1, d = T;
            continue;
          }
          if (_.tag === "Node") {
            const h = t.compare(s)(_._3);
            if (h === "LT") {
              g = _._5;
              continue;
            }
            if (h === "GT") {
              g = _._6;
              continue;
            }
            if (h === "EQ") {
              l = !1, d = b("Just", _._4);
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
    return n(O((i) => L(
      i,
      (() => {
        const u = ((c) => {
          let a = c, g = !0, l;
          for (; g; ) {
            const d = a;
            if (d.tag === "Leaf") {
              g = !1, l = T;
              continue;
            }
            if (d.tag === "Node") {
              const _ = t.compare(i)(d._3);
              if (_ === "LT") {
                a = d._5;
                continue;
              }
              if (_ === "GT") {
                a = d._6;
                continue;
              }
              if (_ === "EQ") {
                g = !1, l = b("Just", d._4);
                continue;
              }
            }
            f();
          }
          return l;
        })(r);
        if (u.tag === "Nothing")
          return -o;
        if (u.tag === "Just")
          return u._1 - o | 0;
        f();
      })()
    ))(e));
  };
}, ta = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = J((u) => (c) => {
      const a = ta(t)(e)(n.eq(c.src)(r) ? c.tgt : c.src)({ ...u.st, edgeVisited: Y(rt)(c.eid)()(u.st.edgeVisited) });
      return { lowest: Si(u.lowest)(a.lowest), st: a.st };
    })({ lowest: 1e9, st: o })(gt(
      (u) => _e(u.eid)(o.treeEdge) && (n.eq(u.src)(r) || n.eq(u.tgt)(r)) && !_e(u.eid)(o.edgeVisited),
      e
    )), s = Si(i.lowest)(i.st.postOrder);
    return {
      lowest: s,
      st: {
        ...i.st,
        poID: Y(t)(r)(i.st.postOrder)(i.st.poID),
        lowestPoID: Y(t)(r)(s)(i.st.lowestPoID),
        postOrder: i.st.postOrder + 1 | 0
      }
    };
  };
}, na = (t) => {
  const n = ta(t);
  return (e) => (r) => (o) => 0 < e.length ? n(r)(e[0])({ ...o, edgeVisited: Q, postOrder: 1, poID: Q, lowestPoID: Q }).st : o;
}, G1 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => gt((i) => _e(i.eid)(r.treeEdge) && (n.eq(i.src)(o) || n.eq(i.tgt)(o)), e);
}, I1 = (t) => (n) => ln((e) => {
  const r = Gi(e.eid)(n.cutvalue);
  return _e(e.eid)(n.treeEdge) && (() => {
    if (r.tag === "Nothing")
      return !1;
    if (r.tag === "Just")
      return r._1 < -1e-10;
    f();
  })();
})(t), ea = (t) => {
  const n = Ii(t);
  return (e) => (r) => (o) => {
    const i = 0 < e.length ? b("Just", e[0]) : T;
    if (i.tag === "Nothing")
      return o;
    if (i.tag === "Just") {
      const s = n(r)(i._1)({ ...o, edgeVisited: Q, treeNode: Q, treeEdge: Q });
      if (s.count >= e.length)
        return s.st;
      const u = C1(t)(r)(s.st);
      if (u.tag === "Nothing")
        return s.st;
      if (u.tag === "Just") {
        const c = u._1.tgt, g = (($) => {
          let m = $, N = !0, v;
          for (; N; ) {
            const w = m;
            if (w.tag === "Leaf") {
              N = !1, v = T;
              continue;
            }
            if (w.tag === "Node") {
              const y = t.compare(c)(w._3);
              if (y === "LT") {
                m = w._5;
                continue;
              }
              if (y === "GT") {
                m = w._6;
                continue;
              }
              if (y === "EQ") {
                N = !1, v = b("Just", w._4);
                continue;
              }
            }
            f();
          }
          return v;
        })(s.st.layer), l = u._1.src, _ = (($) => {
          let m = $, N = !0, v;
          for (; N; ) {
            const w = m;
            if (w.tag === "Leaf") {
              N = !1, v = T;
              continue;
            }
            if (w.tag === "Node") {
              const y = t.compare(l)(w._3);
              if (y === "LT") {
                m = w._5;
                continue;
              }
              if (y === "GT") {
                m = w._6;
                continue;
              }
              if (y === "EQ") {
                N = !1, v = b("Just", w._4);
                continue;
              }
            }
            f();
          }
          return v;
        })(s.st.layer), h = (() => {
          if (g.tag === "Nothing") {
            if (_.tag === "Nothing")
              return -u._1.delta;
            if (_.tag === "Just")
              return -_._1 - u._1.delta | 0;
            f();
          }
          if (g.tag === "Just") {
            if (_.tag === "Nothing")
              return (g._1 - 0 | 0) - u._1.delta | 0;
            if (_.tag === "Just")
              return (g._1 - _._1 | 0) - u._1.delta | 0;
          }
          f();
        })(), p = (() => {
          const $ = u._1.tgt;
          return ((N) => {
            let v = N, w = !0, y;
            for (; w; ) {
              const k = v;
              if (k.tag === "Leaf") {
                w = !1, y = !1;
                continue;
              }
              if (k.tag === "Node") {
                const E = t.compare($)(k._3);
                if (E === "LT") {
                  v = k._5;
                  continue;
                }
                if (E === "GT") {
                  v = k._6;
                  continue;
                }
                if (E === "EQ") {
                  w = !1, y = !0;
                  continue;
                }
              }
              f();
            }
            return y;
          })(s.st.treeNode);
        })() ? -h : h;
        return ea(t)(e)(r)({
          ...s.st,
          layer: J(($) => (m) => ((v) => {
            let w = v, y = !0, k;
            for (; y; ) {
              const E = w;
              if (E.tag === "Leaf") {
                y = !1, k = !1;
                continue;
              }
              if (E.tag === "Node") {
                const I = t.compare(m)(E._3);
                if (I === "LT") {
                  w = E._5;
                  continue;
                }
                if (I === "GT") {
                  w = E._6;
                  continue;
                }
                if (I === "EQ") {
                  y = !1, k = !0;
                  continue;
                }
              }
              f();
            }
            return k;
          })(s.st.treeNode) ? Y(t)(m)((() => {
            const v = ((w) => {
              let y = w, k = !0, E;
              for (; k; ) {
                const I = y;
                if (I.tag === "Leaf") {
                  k = !1, E = T;
                  continue;
                }
                if (I.tag === "Node") {
                  const D = t.compare(m)(I._3);
                  if (D === "LT") {
                    y = I._5;
                    continue;
                  }
                  if (D === "GT") {
                    y = I._6;
                    continue;
                  }
                  if (D === "EQ") {
                    k = !1, E = b("Just", I._4);
                    continue;
                  }
                }
                f();
              }
              return E;
            })(s.st.layer);
            if (v.tag === "Nothing")
              return 0 + p | 0;
            if (v.tag === "Just")
              return v._1 + p | 0;
            f();
          })())($) : $)(s.st.layer)(e)
        });
      }
    }
    f();
  };
}, P1 = (t) => (n) => (e) => (r) => J((o) => (i) => {
  if (wo(t)(r)(i.src)(e) && !wo(t)(r)(i.tgt)(e)) {
    const s = i.tgt, c = ((_) => {
      let h = _, p = !0, $;
      for (; p; ) {
        const m = h;
        if (m.tag === "Leaf") {
          p = !1, $ = T;
          continue;
        }
        if (m.tag === "Node") {
          const N = t.compare(s)(m._3);
          if (N === "LT") {
            h = m._5;
            continue;
          }
          if (N === "GT") {
            h = m._6;
            continue;
          }
          if (N === "EQ") {
            p = !1, $ = b("Just", m._4);
            continue;
          }
        }
        f();
      }
      return $;
    })(r.layer), a = i.src, l = ((_) => {
      let h = _, p = !0, $;
      for (; p; ) {
        const m = h;
        if (m.tag === "Leaf") {
          p = !1, $ = T;
          continue;
        }
        if (m.tag === "Node") {
          const N = t.compare(a)(m._3);
          if (N === "LT") {
            h = m._5;
            continue;
          }
          if (N === "GT") {
            h = m._6;
            continue;
          }
          if (N === "EQ") {
            p = !1, $ = b("Just", m._4);
            continue;
          }
        }
        f();
      }
      return $;
    })(r.layer), d = (() => {
      if (c.tag === "Nothing") {
        if (l.tag === "Nothing")
          return -i.delta;
        if (l.tag === "Just")
          return -l._1 - i.delta | 0;
        f();
      }
      if (c.tag === "Just") {
        if (l.tag === "Nothing")
          return (c._1 - 0 | 0) - i.delta | 0;
        if (l.tag === "Just")
          return (c._1 - l._1 | 0) - i.delta | 0;
      }
      f();
    })();
    if (d < o.slack)
      return { edge: b("Just", i), slack: d };
  }
  return o;
})({ edge: T, slack: 1e9 })(n).edge, A1 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => (i) => {
    const s = i.tgt, u = i.src;
    return J((c) => (a) => {
      if ((() => {
        const g = Gi(a.eid)(r.cutvalue);
        if (g.tag === "Just")
          return !0;
        if (g.tag === "Nothing")
          return !1;
        f();
      })()) {
        const g = Gi(a.eid)(r.cutvalue), l = (() => {
          if (g.tag === "Nothing")
            return 0;
          if (g.tag === "Just")
            return g._1;
          f();
        })();
        return n.eq(u)(a.src) || n.eq(s)(a.tgt) ? c - (l - a.weight) : c + (l - a.weight);
      }
      return n.eq(o)(u) ? n.eq(a.src)(o) ? c + a.weight : c - a.weight : n.eq(a.src)(o) ? c - a.weight : c + a.weight;
    })(i.weight)(gt((c) => c.eid !== i.eid && (n.eq(c.src)(o) || n.eq(c.tgt)(o)), e));
  };
}, R1 = (t) => {
  const n = A1(t);
  return (e) => (r) => (o) => {
    const i = (u, c, a) => {
      const l = ((d) => {
        let _ = d, h = !0, p;
        for (; h; ) {
          const $ = _;
          if ($.tag === "Leaf") {
            h = !1, p = T;
            continue;
          }
          if ($.tag === "Node") {
            const m = t.compare(u)($._3);
            if (m === "LT") {
              _ = $._5;
              continue;
            }
            if (m === "GT") {
              _ = $._6;
              continue;
            }
            if (m === "EQ") {
              h = !1, p = b("Just", $._4);
              continue;
            }
          }
          f();
        }
        return p;
      })(a);
      if (l.tag === "Just")
        return Y(t)(u)(gt((d) => d.eid !== c.eid, l._1))(a);
      if (l.tag === "Nothing")
        return a;
      f();
    };
    return ((u) => (c) => {
      let a = u, g = c, l = !0, d;
      for (; l; ) {
        const _ = a, h = g, $ = ((N) => {
          let v = N, w = !0, y;
          for (; w; ) {
            const k = v;
            if (k.tag === "Leaf") {
              w = !1, y = T;
              continue;
            }
            if (k.tag === "Node") {
              const E = t.compare(h)(k._3);
              if (E === "LT") {
                v = k._5;
                continue;
              }
              if (E === "GT") {
                v = k._6;
                continue;
              }
              if (E === "EQ") {
                w = !1, y = b("Just", k._4);
                continue;
              }
            }
            f();
          }
          return y;
        })(_.unknown), m = (() => {
          if ($.tag === "Nothing")
            return [];
          if ($.tag === "Just")
            return $._1;
          f();
        })();
        if (m.length === 1) {
          const N = t.Eq0().eq(m[0].src)(h) ? m[0].tgt : m[0].src;
          a = {
            unknown: i(h, m[0], i(N, m[0], _.unknown)),
            cutvalue: Y(rt)(m[0].eid)(n(e)(_)(h)(m[0]))(_.cutvalue)
          }, g = N;
          continue;
        }
        l = !1, d = _;
      }
      return d;
    })(r)(o);
  };
}, ra = (t) => {
  const n = t.Eq0(), e = t.Eq0(), r = { eq: (a) => (g) => a.delta === g.delta && a.eid === g.eid && e.eq(a.src)(g.src) && n.eq(a.tgt)(g.tgt) && a.weight === g.weight }, o = {
    compare: (a) => (g) => {
      const l = rt.compare(a.delta)(g.delta);
      if (l === "LT" || l === "GT" || l !== "EQ")
        return l;
      const d = rt.compare(a.eid)(g.eid);
      if (d === "LT" || d === "GT" || d !== "EQ")
        return d;
      const _ = t.compare(a.src)(g.src);
      if (_ === "LT" || _ === "GT" || _ !== "EQ")
        return _;
      const h = t.compare(a.tgt)(g.tgt);
      if (h === "LT" || h === "GT" || h !== "EQ")
        return h;
      const p = pt.compare(a.weight)(g.weight);
      return p === "LT" || p === "GT" || p !== "EQ" ? p : yn;
    },
    Eq0: () => r
  }, i = J((a) => (g) => Y(o)(g)()(a))(Q), s = G1(t), u = jt(t)(Bt), c = R1(t);
  return (a) => (g) => (l) => {
    const d = {
      unknown: u(O((_) => L(
        _,
        Et(Pn.foldr, i(s(g)(l)(_)))
      ))(a)),
      cutvalue: Q
    };
    return {
      ...l,
      cutvalue: J(c(g))(d)(gt(
        (_) => {
          const p = (($) => {
            let m = $, N = !0, v;
            for (; N; ) {
              const w = m;
              if (w.tag === "Leaf") {
                N = !1, v = T;
                continue;
              }
              if (w.tag === "Node") {
                const y = t.compare(_)(w._3);
                if (y === "LT") {
                  m = w._5;
                  continue;
                }
                if (y === "GT") {
                  m = w._6;
                  continue;
                }
                if (y === "EQ") {
                  N = !1, v = b("Just", w._4);
                  continue;
                }
              }
              f();
            }
            return v;
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
}, F1 = (t) => {
  const n = na(t), e = ra(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const c = { ...u, treeEdge: Y(rt)(s.eid)()(xr(rt)(i.eid)(u.treeEdge)) }, a = s.tgt, l = ((m) => {
      let N = m, v = !0, w;
      for (; v; ) {
        const y = N;
        if (y.tag === "Leaf") {
          v = !1, w = T;
          continue;
        }
        if (y.tag === "Node") {
          const k = t.compare(a)(y._3);
          if (k === "LT") {
            N = y._5;
            continue;
          }
          if (k === "GT") {
            N = y._6;
            continue;
          }
          if (k === "EQ") {
            v = !1, w = b("Just", y._4);
            continue;
          }
        }
        f();
      }
      return w;
    })(c.layer), d = s.src, h = ((m) => {
      let N = m, v = !0, w;
      for (; v; ) {
        const y = N;
        if (y.tag === "Leaf") {
          v = !1, w = T;
          continue;
        }
        if (y.tag === "Node") {
          const k = t.compare(d)(y._3);
          if (k === "LT") {
            N = y._5;
            continue;
          }
          if (k === "GT") {
            N = y._6;
            continue;
          }
          if (k === "EQ") {
            v = !1, w = b("Just", y._4);
            continue;
          }
        }
        f();
      }
      return w;
    })(c.layer), p = (() => {
      if (l.tag === "Nothing") {
        if (h.tag === "Nothing")
          return -s.delta;
        if (h.tag === "Just")
          return -h._1 - s.delta | 0;
        f();
      }
      if (l.tag === "Just") {
        if (h.tag === "Nothing")
          return (l._1 - 0 | 0) - s.delta | 0;
        if (h.tag === "Just")
          return (l._1 - h._1 | 0) - s.delta | 0;
      }
      f();
    })(), $ = wo(t)(c)(s.tgt)(i) ? -p : p;
    return e(r)(o)(n(r)(o)({
      ...c,
      layer: J((m) => (N) => wo(t)(c)(N)(i) ? m : Y(t)(N)((() => {
        const w = ((y) => {
          let k = y, E = !0, I;
          for (; E; ) {
            const D = k;
            if (D.tag === "Leaf") {
              E = !1, I = T;
              continue;
            }
            if (D.tag === "Node") {
              const z = t.compare(N)(D._3);
              if (z === "LT") {
                k = D._5;
                continue;
              }
              if (z === "GT") {
                k = D._6;
                continue;
              }
              if (z === "EQ") {
                E = !1, I = b("Just", D._4);
                continue;
              }
            }
            f();
          }
          return I;
        })(c.layer);
        if (w.tag === "Nothing")
          return 0 + $ | 0;
        if (w.tag === "Just")
          return w._1 + $ | 0;
        f();
      })())(m))(c.layer)(r)
    }));
  };
}, B1 = (t) => {
  const n = F1(t);
  return (e) => (r) => (o) => (i) => ((u) => (c) => {
    let a = u, g = c, l = !0, d;
    for (; l; ) {
      const _ = a, h = g;
      if (_ === 0) {
        l = !1, d = h;
        continue;
      }
      const p = I1(o)(h);
      if (p.tag === "Nothing") {
        l = !1, d = h;
        continue;
      }
      if (p.tag === "Just") {
        const $ = P1(t)(o)(p._1)(h);
        if ($.tag === "Nothing") {
          l = !1, d = h;
          continue;
        }
        if ($.tag === "Just") {
          a = _ - 1 | 0, g = n(r)(o)(p._1)($._1)(h);
          continue;
        }
      }
      f();
    }
    return d;
  })(e)(i);
}, Q1 = (t) => {
  const n = ra(t), e = na(t), r = ea(t);
  return (o) => (i) => (s) => n(o)(i)(e(o)(i)(r(o)(i)(s)));
}, mu = (t) => (n) => J((e) => (r) => yt(t)(fn)(n(r))([r])(e))(Q), D1 = (t) => {
  const n = jt(t)(Bt);
  return (e) => (r) => (o) => {
    const i = (c) => (a) => (g) => (l) => {
      let d = c, _ = a, h = g, p = l, $ = !0, m;
      for (; $; ) {
        const N = d, v = _, w = h, y = p, k = Wt((E) => T, (E) => (I) => b("Just", { head: E, tail: I }), w);
        if (k.tag === "Nothing") {
          $ = !1, m = y;
          continue;
        }
        if (k.tag === "Just") {
          const E = k._1.head, D = ((P) => {
            let R = P, j = !0, et;
            for (; j; ) {
              const X = R;
              if (X.tag === "Leaf") {
                j = !1, et = T;
                continue;
              }
              if (X.tag === "Node") {
                const A = t.compare(E)(X._3);
                if (A === "LT") {
                  R = X._5;
                  continue;
                }
                if (A === "GT") {
                  R = X._6;
                  continue;
                }
                if (A === "EQ") {
                  j = !1, et = b("Just", X._4);
                  continue;
                }
              }
              f();
            }
            return et;
          })(y.layer), z = (() => {
            if (D.tag === "Nothing")
              return 0;
            if (D.tag === "Just")
              return D._1;
            f();
          })(), U = J((P) => (R) => {
            const j = R.tgt, X = ((x) => {
              let C = x, q = !0, S;
              for (; q; ) {
                const F = C;
                if (F.tag === "Leaf") {
                  q = !1, S = T;
                  continue;
                }
                if (F.tag === "Node") {
                  const W = t.compare(j)(F._3);
                  if (W === "LT") {
                    C = F._5;
                    continue;
                  }
                  if (W === "GT") {
                    C = F._6;
                    continue;
                  }
                  if (W === "EQ") {
                    q = !1, S = b("Just", F._4);
                    continue;
                  }
                }
                f();
              }
              return S;
            })(P.incident), A = (() => {
              if (X.tag === "Nothing")
                return -1;
              if (X.tag === "Just")
                return X._1 - 1 | 0;
              f();
            })();
            return {
              st: {
                ...P.st,
                layer: Y(t)(R.tgt)(k1((() => {
                  const x = R.tgt, q = ((S) => {
                    let F = S, W = !0, K;
                    for (; W; ) {
                      const V = F;
                      if (V.tag === "Leaf") {
                        W = !1, K = T;
                        continue;
                      }
                      if (V.tag === "Node") {
                        const B = t.compare(x)(V._3);
                        if (B === "LT") {
                          F = V._5;
                          continue;
                        }
                        if (B === "GT") {
                          F = V._6;
                          continue;
                        }
                        if (B === "EQ") {
                          W = !1, K = b("Just", V._4);
                          continue;
                        }
                      }
                      f();
                    }
                    return K;
                  })(P.st.layer);
                  if (q.tag === "Nothing")
                    return 0;
                  if (q.tag === "Just")
                    return q._1;
                  f();
                })())(z + R.delta | 0))(P.st.layer)
              },
              incident: Y(t)(R.tgt)(A)(P.incident),
              queue: A === 0 ? [...P.queue, R.tgt] : P.queue
            };
          })({ st: y, incident: v, queue: k._1.tail })((() => {
            const R = ((j) => {
              let et = j, X = !0, A;
              for (; X; ) {
                const x = et;
                if (x.tag === "Leaf") {
                  X = !1, A = T;
                  continue;
                }
                if (x.tag === "Node") {
                  const C = t.compare(E)(x._3);
                  if (C === "LT") {
                    et = x._5;
                    continue;
                  }
                  if (C === "GT") {
                    et = x._6;
                    continue;
                  }
                  if (C === "EQ") {
                    X = !1, A = b("Just", x._4);
                    continue;
                  }
                }
                f();
              }
              return A;
            })(N);
            if (R.tag === "Nothing")
              return [];
            if (R.tag === "Just")
              return R._1;
            f();
          })());
          d = N, _ = U.incident, h = U.queue, p = U.st;
          continue;
        }
        f();
      }
      return m;
    }, s = mu(t)((c) => c.tgt)(r), u = n(O((c) => L(
      c,
      (() => {
        const g = ((l) => {
          let d = l, _ = !0, h;
          for (; _; ) {
            const p = d;
            if (p.tag === "Leaf") {
              _ = !1, h = T;
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
                _ = !1, h = b("Just", p._4);
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
    return i(mu(t)((c) => c.src)(r))(u)(gt(
      (c) => {
        const g = ((l) => {
          let d = l, _ = !0, h;
          for (; _; ) {
            const p = d;
            if (p.tag === "Leaf") {
              _ = !1, h = T;
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
                _ = !1, h = b("Just", p._4);
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
}, W1 = (t) => {
  const n = x1(t), e = D1(t), r = Q1(t), o = B1(t);
  return (i) => (s) => {
    const u = e(i)(s)(n(i));
    return s.length === 0 ? u.layer : o(4 * i.length | 0)(i)(s)(r(i)(s)(u)).layer;
  };
}, oa = (t) => {
  const n = S1(t), e = W1(t), r = b1(t);
  return (o) => (i) => {
    if (o.length === 0)
      return Q;
    if (o.length < 40)
      return n(o)(e(o)(i));
    const s = r(o)(i);
    return n(o)(E1(t)(s.removed)(e(s.coreNodes)(s.coreEdges)));
  };
}, ia = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = rt.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Pi = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, q1 = /* @__PURE__ */ oa(rt), Ar = (t) => (n) => ({ ...n, edges: [...n.edges, { src: t.src, tgt: t.tgt, delta: t.delta, weight: t.weight, eid: n.nextEid }], nextEid: n.nextEid + 1 | 0 }), H1 = (t) => (n) => (e) => {
  if (e.cGroup.tag === "Nothing")
    return n;
  if (e.cGroup.tag === "Just") {
    const r = ct((() => {
      const o = ia(e.cGroup._1)(t);
      if (o.tag === "Nothing")
        return 0;
      if (o.tag === "Just")
        return o._1;
      f();
    })());
    return Hn(e.id)((o) => ({ ...o, hitbox: { ...o.hitbox, x: r + o.cGroupOffset.x } }))(n);
  }
  f();
}, O1 = (t) => (n) => ({
  ...n,
  cGraph: J(H1(t))(n.cGraph)((() => {
    const e = n.cGraph;
    return vt((r) => Ut(r)(e.cNodes))(e.cNodeOrder);
  })())
}), z1 = (t) => (n) => (e) => (r) => (o) => {
  const i = ce(ji(n.cGroupOffset.x - t.cGroupOffset.x));
  return Ar({ src: o.nextNodeId, tgt: r, delta: Pi(0)(-i), weight: 1 })(Ar({ src: o.nextNodeId, tgt: e, delta: Pi(0)(i), weight: 1 })({
    ...o,
    nodes: [...o.nodes, o.nextNodeId],
    nextNodeId: o.nextNodeId + 1 | 0
  }));
}, V1 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = Pi(0)(ce(ji(e.cGroupOffset.x + e.hitbox.width + (n.direction === "LEFT" || n.direction === "RIGHT" ? n.spacingsHandler.horizontalSpacing(e)(r) : n.spacingsHandler.verticalSpacing(e)(r)) - r.cGroupOffset.x)));
  return t.sameEdgeVerticalSegments(e)(r) ? z1(e)(r)(o)(i)(s) : Ar({ src: o, tgt: i, delta: u, weight: t.vsLNodePair(e)(r) ? 2 : 1 })(s);
}, Y1 = (t) => (n) => (e) => (r) => (o) => {
  const i = Ut(o)(n.cGraph.cNodes);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just")
    return (e.cGroup.tag === "Nothing" ? i._1.cGroup.tag === "Nothing" : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" && e.cGroup._1 === i._1.cGroup._1) ? r : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" ? V1(t)(n)(e)(i._1)(e.cGroup._1)(i._1.cGroup._1)(r) : r;
  f();
}, X1 = (t) => (n) => (e) => (r) => J(Y1(t)(n)(r))(e)(r.constraints), U1 = (t) => (n) => Ar({ src: n.srcGroup, tgt: n.tgtGroup, delta: n.delta, weight: n.weight })(t), M1 = (t) => {
  const n = J((o) => (i) => yt(rt)(Zt)(i.tgt)(1)(o))(Q)(t.edges), e = gt(
    (o) => {
      const i = ia(o)(n);
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
  return J((o) => (i) => Ar({ src: r, tgt: i, delta: 1, weight: 0 })(o))({ ...t, nodes: [...t.nodes, r], nextNodeId: r + 1 | 0 })(e);
}, K1 = (t) => (n) => {
  const e = M1(J(U1)(J(X1(t)(n))({
    nodes: n.cGraph.cGroupOrder,
    edges: [],
    nextNodeId: n.cGraph.nextCGroupId,
    nextEid: 0
  })((() => {
    const r = n.cGraph;
    return vt((o) => Ut(o)(r.cNodes))(r.cNodeOrder);
  })()))(t.edgeLengthEdges(n.cGraph)));
  return { nodes: e.nodes, edges: e.edges };
}, j1 = (t) => (n) => {
  const e = K1(t)(n);
  return O1(q1(e.nodes)(e.edges))(n);
}, Z1 = (t) => (n) => (e) => (t.direction === "LEFT" || t.direction === "RIGHT" ? n.hitbox.y <= e.hitbox.y ? n.ignoreSpacing.down || e.ignoreSpacing.up : n.ignoreSpacing.up || e.ignoreSpacing.down : n.hitbox.x <= e.hitbox.x ? n.ignoreSpacing.right || e.ignoreSpacing.left : n.ignoreSpacing.left || e.ignoreSpacing.right) ? 0 : t.direction === "LEFT" || t.direction === "RIGHT" ? t.spacingsHandler.verticalSpacing(n)(e) : t.spacingsHandler.horizontalSpacing(n)(e), td = (t) => (n) => (e) => {
  const r = Z1(t)(n)(e);
  return e.hitbox.y + e.hitbox.height + r - n.hitbox.y > 1e-4 && n.hitbox.y + n.hitbox.height + r - e.hitbox.y > 1e-4;
}, nd = (t) => (n) => (e) => (r) => n.id === r.id || n.cGroup.tag === "Just" && r.cGroup.tag === "Just" && n.cGroup._1 === r.cGroup._1 || !(r.hitbox.x > n.hitbox.x || n.hitbox.x === r.hitbox.x && n.hitbox.width < r.hitbox.width) || !td(t)(n)(r) ? e : Hn(n.id)((o) => ({ ...o, constraints: [...o.constraints, r.id] }))(e), ed = (t) => (n) => (e) => (r) => J(nd(t)(r))(e)(n), rd = (t) => {
  const n = J((r) => (o) => Hn(o.id)((i) => ({ ...i, constraints: [] }))(r))(t.cGraph)((() => {
    const r = t.cGraph;
    return vt((o) => Ut(o)(r.cNodes))(r.cNodeOrder);
  })()), e = vt((r) => Ut(r)(n.cNodes))(n.cNodeOrder);
  return J(ed(t)(e))(n)(e);
}, sa = (t) => t, Ht = /* @__PURE__ */ sa("H"), Ot = /* @__PURE__ */ sa("V"), od = (t) => L(t._2, t._1), ua = (t) => ({ ...t, position: L(t.position._2, t.position._1), size: L(t.size._2, t.size._1) }), id = (t) => ({
  start: L(t.start._2, t.start._1),
  end: L(t.end._2, t.end._1),
  direction: (() => {
    if (t.direction === "H")
      return Ot;
    if (t.direction === "V")
      return Ht;
    f();
  })()
}), ca = (t) => ({ ...t, segments: O(id)(t.segments), bends: O(od)(t.bends) }), sd = (t) => ({ nodes: O(ua)(t.nodes), edges: t.edges, paths: O(ca)(t.paths), ports: t.ports }), ud = (t) => {
  const n = ct(4);
  return {
    horizontalSpacing: (e) => (r) => t.sameEdgeVerticalSegments(e)(r) || e.ignoreSpacing.right || r.ignoreSpacing.left ? 0 : n,
    verticalSpacing: (e) => (r) => t.sameEdgeVerticalSegments(e)(r) ? 1 : (e.hitbox.y <= r.hitbox.y ? e.ignoreSpacing.down || r.ignoreSpacing.up : e.ignoreSpacing.up || r.ignoreSpacing.down) ? 0 : n
  };
}, cd = (t) => (n) => j1(n), ad = (t) => (n) => {
  const e = sd(n), r = L1(e), o = J1(r)(Zc(e)), i = v1(Uc(Cs)(e1({
    ...o1(r.cGraph),
    compactionAlgorithm: b("Just", cd()(o)),
    constraintAlgorithm: b("Just", rd),
    spacingsHandler: ud(o)
  })).cGraph)({ nodes: e.nodes, edges: e.edges, paths: e.paths });
  return { nodes: O(ua)(i.nodes), edges: O(ca)(i.edges) };
}, aa = (t) => t, Ve = /* @__PURE__ */ jt(rt)(Bt), wt = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = rt.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Nu = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, at = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ft = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Me = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, fd = (t) => (n) => {
  const e = rt.compare(t._1)(n._1);
  return e === "LT" ? dn : e === "GT" ? hn : rt.compare(t._2)(n._2);
}, Xe = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, gd = /* @__PURE__ */ (() => {
  const t = On.unfoldr(De);
  return (n) => t(Wn("IterNode", n, Qe));
})(), _d = (t) => t, Ju = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ld = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ro = /* @__PURE__ */ aa("Regular"), oo = /* @__PURE__ */ aa("Critical"), fa = (t) => (n) => {
  const e = J((s) => (u) => Y(G)(u.node)(u)(s))(Q)(n), r = 1.25 * ct(4), o = (s, u, c) => ((g) => (l) => (d) => {
    let _ = g, h = l, p = d, $ = !0, m;
    for (; $; ) {
      const N = _, v = h, w = p;
      if (w.critical) {
        $ = !1, m = w;
        continue;
      }
      const y = Wt((E) => T, (E) => (I) => b("Just", { head: E, tail: I }), N), k = Wt((E) => T, (E) => (I) => b("Just", { head: E, tail: I }), v);
      if (y.tag === "Just" && k.tag === "Just") {
        const E = y._1.head > k._1.head - s && y._1.head < k._1.head + s ? { ...w, critical: !0 } : y._1.head > k._1.head - r && y._1.head < k._1.head + r ? { ...w, conflicts: w.conflicts + 1 | 0 } : w;
        if (E.critical) {
          $ = !1, m = E;
          continue;
        }
        if (y._1.head <= k._1.head) {
          _ = y._1.tail, h = v, p = E;
          continue;
        }
        _ = N, h = k._1.tail, p = E;
        continue;
      }
      $ = !1, m = w;
    }
    return m;
  })(u)(c)({ conflicts: 0, critical: !1 }), i = (s, u, c) => {
    if (ft(J(ft)(-1e18)(u.incoming))(J(ft)(-1e18)(u.outgoing)) - at(J(at)(1e18)(u.incoming))(J(at)(1e18)(u.outgoing)) < 1e-3 || ft(J(ft)(-1e18)(c.incoming))(J(ft)(-1e18)(c.outgoing)) - at(J(at)(1e18)(c.incoming))(J(at)(1e18)(c.outgoing)) < 1e-3)
      return [];
    const a = o(s, u.outgoing, c.incoming), g = o(s, c.outgoing, u.incoming);
    if (a.critical || g.critical)
      return [...a.critical ? [{ src: c.id, tgt: u.id, weight: 1, kind: oo }] : [], ...g.critical ? [{ src: u.id, tgt: c.id, weight: 1, kind: oo }] : []];
    const l = at(J(at)(1e18)(u.incoming))(J(at)(1e18)(u.outgoing)), d = ft(J(ft)(-1e18)(u.incoming))(J(ft)(-1e18)(u.outgoing)), _ = at(J(at)(1e18)(c.incoming))(J(at)(1e18)(c.outgoing)), h = ft(J(ft)(-1e18)(c.incoming))(J(ft)(-1e18)(c.outgoing)), p = (1 * a.conflicts | 0) + (16 * (J((m) => (N) => N > h ? m : N >= _ ? m + 1 | 0 : m)(0)(u.outgoing) + J((m) => (N) => N > d ? m : N >= l ? m + 1 | 0 : m)(0)(c.incoming) | 0) | 0) | 0, $ = (1 * g.conflicts | 0) + (16 * (J((m) => (N) => N > d ? m : N >= l ? m + 1 | 0 : m)(0)(c.outgoing) + J((m) => (N) => N > h ? m : N >= _ ? m + 1 | 0 : m)(0)(u.incoming) | 0) | 0) | 0;
    return p < $ ? [{ src: u.id, tgt: c.id, weight: $ - p | 0, kind: ro }] : p > $ ? [{ src: c.id, tgt: u.id, weight: p - $ | 0, kind: ro }] : p > 0 ? [{ src: u.id, tgt: c.id, weight: 0, kind: ro }, { src: c.id, tgt: u.id, weight: 0, kind: ro }] : [];
  };
  return J((s) => (u) => J((c) => (a) => Y(G)(a._1)(a._2)(c))(s)((() => {
    const c = J((P) => (R) => {
      const j = R.edge.from.node + "|" + (() => {
        if (R.edge.from.port.tag === "Just")
          return R.edge.from.port._1;
        if (R.edge.from.port.tag === "Nothing")
          return "_auto_" + R.edge.id;
        f();
      })(), et = Ju(j)(P.entries);
      if (et.tag === "Nothing")
        return {
          ...P,
          entries: Y(G)(j)({
            id: 0,
            members: [R.edge.id],
            incoming: [R.fromPos._1],
            outgoing: [R.toPos._1],
            slot: 0,
            mark: 0,
            splitBy: T,
            splitPartner: T
          })(P.entries),
          order: [...P.order, j]
        };
      if (et.tag === "Just")
        return {
          ...P,
          entries: Y(G)(j)({
            ...et._1,
            members: [...et._1.members, R.edge.id],
            incoming: [...Ce((X) => X < R.fromPos._1)(et._1.incoming).init, R.fromPos._1, ...Ce((X) => X <= R.fromPos._1)(et._1.incoming).rest],
            outgoing: [...Ce((X) => X < R.toPos._1)(et._1.outgoing).init, R.toPos._1, ...Ce((X) => X <= R.toPos._1)(et._1.outgoing).rest]
          })(P.entries)
        };
      f();
    })({ entries: Q, order: [] })(u._2), a = Pt((P) => (R) => ({ ...R, id: P }))(vt((P) => Ju(P)(c.entries))(c.order));
    if (a.length === 0)
      return [];
    const g = J((P) => (R) => P.prev.tag === "Just" && R - P.prev._1 < 1e-9 ? P : { prev: b("Just", R), out: [...P.out, R] })({ prev: T, out: [] })(Lt(pt.compare)([
      ...bt(a)((P) => P.incoming),
      ...bt(a)((P) => P.outgoing)
    ])).out, l = g.length < 2 ? 0.2 * r : 0.2 * J((P) => (R) => {
      if (P.prev.tag === "Nothing")
        return { prev: b("Just", R), mn: P.mn };
      if (P.prev.tag === "Just")
        return { prev: b("Just", R), mn: at(P.mn)(R - P.prev._1) };
      f();
    })({ prev: T, mn: 1e18 })(g).mn, d = {
      segments: a,
      deps: (() => {
        const P = a.length;
        return bt(bt(Xt(0, P - 2 | 0))((R) => bt(Xt(R + 1 | 0, P - 1 | 0))((j) => [
          L(R, j)
        ])))((R) => R._1 >= 0 && R._1 < a.length ? R._2 >= 0 && R._2 < a.length ? i(l, a[R._1], a[R._2]) : [] : []);
      })()
    }, _ = gt(
      (P) => {
        if (P.kind === "Critical")
          return !0;
        if (P.kind === "Regular")
          return !1;
        f();
      },
      d.deps
    ), h = (() => {
      if (_.length < 2)
        return d;
      const P = Ve((() => {
        const A = d.segments;
        return O((x) => L(x.id, x.mark))((() => {
          const x = A.length, C = (F) => {
            let W = F, K = !0, V;
            for (; K; ) {
              const B = W, nt = ln((M) => {
                const tt = wt(M)(B.inWeight);
                if (tt.tag === "Nothing")
                  return !0;
                if (tt.tag === "Just")
                  return tt._1 === 0;
                f();
              })(B.remaining);
              if (nt.tag === "Nothing") {
                K = !1, V = B;
                continue;
              }
              if (nt.tag === "Just") {
                const M = nt._1;
                W = {
                  ...B,
                  inWeight: J((tt) => (ot) => yt(rt)(Zt)(ot.tgt)(-ot.weight)(tt))(B.inWeight)((() => {
                    const tt = wt(M)(B.depsBySrc);
                    if (tt.tag === "Nothing")
                      return [];
                    if (tt.tag === "Just")
                      return tt._1;
                    f();
                  })()),
                  marks: Y(rt)(M)(B.nextSource)(B.marks),
                  nextSource: B.nextSource + 1 | 0,
                  outWeight: J((tt) => (ot) => yt(rt)(Zt)(ot.src)(-ot.weight)(tt))(B.outWeight)((() => {
                    const tt = wt(M)(B.depsByTgt);
                    if (tt.tag === "Nothing")
                      return [];
                    if (tt.tag === "Just")
                      return tt._1;
                    f();
                  })()),
                  remaining: gt((tt) => tt !== M, B.remaining)
                };
                continue;
              }
              f();
            }
            return V;
          }, q = (F) => {
            let W = F, K = !0, V;
            for (; K; ) {
              const B = W, nt = ln((M) => {
                const tt = wt(M)(B.outWeight);
                if (tt.tag === "Nothing")
                  return !0;
                if (tt.tag === "Just")
                  return tt._1 === 0;
                f();
              })(B.remaining);
              if (nt.tag === "Nothing") {
                K = !1, V = B;
                continue;
              }
              if (nt.tag === "Just") {
                const M = nt._1;
                W = {
                  ...B,
                  inWeight: J((tt) => (ot) => yt(rt)(Zt)(ot.tgt)(-ot.weight)(tt))(B.inWeight)((() => {
                    const tt = wt(M)(B.depsBySrc);
                    if (tt.tag === "Nothing")
                      return [];
                    if (tt.tag === "Just")
                      return tt._1;
                    f();
                  })()),
                  marks: Y(rt)(M)(B.nextSink)(B.marks),
                  nextSink: B.nextSink - 1 | 0,
                  outWeight: J((tt) => (ot) => yt(rt)(Zt)(ot.src)(-ot.weight)(tt))(B.outWeight)((() => {
                    const tt = wt(M)(B.depsByTgt);
                    if (tt.tag === "Nothing")
                      return [];
                    if (tt.tag === "Just")
                      return tt._1;
                    f();
                  })()),
                  remaining: gt((tt) => tt !== M, B.remaining)
                };
                continue;
              }
              f();
            }
            return V;
          };
          return ((F) => {
            let W = F, K = !0, V;
            for (; K; ) {
              const nt = C(q(W));
              if (nt.remaining.length === 0) {
                K = !1, V = O((M) => {
                  const tt = wt(M.id)(nt.marks), ot = (() => {
                    if (tt.tag === "Nothing")
                      return M.id;
                    if (tt.tag === "Just")
                      return tt._1;
                    f();
                  })();
                  return { ...M, mark: ot < x ? (ot + x | 0) + 1 | 0 : ot };
                })(A);
                continue;
              }
              W = (() => {
                const M = (ot) => {
                  const st = wt(ot)(nt.outWeight), _t = wt(ot)(nt.inWeight);
                  return (() => {
                    if (st.tag === "Nothing")
                      return 0;
                    if (st.tag === "Just")
                      return st._1;
                    f();
                  })() - (() => {
                    if (_t.tag === "Nothing")
                      return 0;
                    if (_t.tag === "Just")
                      return _t._1;
                    f();
                  })() | 0;
                }, tt = Lt((ot) => (st) => rt.compare(M(st))(M(ot)))(nt.remaining);
                if (0 < tt.length) {
                  const ot = tt[0];
                  return {
                    ...nt,
                    inWeight: J((st) => (_t) => yt(rt)(Zt)(_t.tgt)(-_t.weight)(st))(nt.inWeight)((() => {
                      const st = wt(ot)(nt.depsBySrc);
                      if (st.tag === "Nothing")
                        return [];
                      if (st.tag === "Just")
                        return st._1;
                      f();
                    })()),
                    marks: Y(rt)(ot)(nt.nextSource)(nt.marks),
                    nextSource: nt.nextSource + 1 | 0,
                    outWeight: J((st) => (_t) => yt(rt)(Zt)(_t.src)(-_t.weight)(st))(nt.outWeight)((() => {
                      const st = wt(ot)(nt.depsByTgt);
                      if (st.tag === "Nothing")
                        return [];
                      if (st.tag === "Just")
                        return st._1;
                      f();
                    })()),
                    remaining: gt((st) => st !== ot, nt.remaining)
                  };
                }
                return nt;
              })();
            }
            return V;
          })({
            remaining: O((F) => F.id)(A),
            marks: Q,
            inWeight: J((F) => (W) => yt(rt)(Zt)(W.tgt)(W.weight)(F))(Q)(_),
            outWeight: J((F) => (W) => yt(rt)(Zt)(W.src)(W.weight)(F))(Q)(_),
            depsBySrc: J((F) => (W) => yt(rt)(fn)(W.src)([W])(F))(Q)(_),
            depsByTgt: J((F) => (W) => yt(rt)(fn)(W.tgt)([W])(F))(Q)(_),
            nextSink: x - 1 | 0,
            nextSource: x + 1 | 0
          });
        })());
      })()), R = gt(
        (A) => {
          const x = wt(A.src)(P), C = wt(A.tgt)(P);
          return (() => {
            if (x.tag === "Nothing")
              return 0;
            if (x.tag === "Just")
              return x._1;
            f();
          })() > (() => {
            if (C.tag === "Nothing")
              return 0;
            if (C.tag === "Just")
              return C._1;
            f();
          })();
        },
        _
      );
      if (R.length === 0)
        return d;
      const j = J((A) => (x) => {
        if (In(Er)(x.src)(A.decisions) || In(Er)(x.tgt)(A.decisions))
          return A;
        const C = wt(x.src)(A.segMap), q = wt(x.tgt)(A.segMap);
        if (C.tag === "Just" && q.tag === "Just") {
          const S = (C._1.incoming.length + C._1.outgoing.length | 0) > 2 && (q._1.incoming.length + q._1.outgoing.length | 0) <= 2, F = S ? q._1 : C._1;
          return {
            decisions: [...A.decisions, F.id],
            segMap: Y(rt)(F.id)({ ...F, splitBy: b("Just", S ? C._1.id : q._1.id) })(A.segMap)
          };
        }
        return A;
      })({ decisions: [], segMap: Ve(O((A) => L(A.id, A))(d.segments)) })(R), et = j.segMap, X = J((A) => (x) => {
        const C = at(J(at)(1e18)(x.incoming))(J(at)(1e18)(x.outgoing)), q = ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(x.outgoing)), S = gt(
          (B) => B.a.startPosition <= q && B.a.endPosition >= C,
          Pt((B) => (nt) => ({ i: B, a: nt }))(A.freeAreas)
        );
        if (S.length === 0) {
          const B = {
            ...x,
            incoming: Lt(pt.compare)(x.incoming),
            outgoing: Lt(pt.compare)([(C + q) / 2]),
            splitPartner: b("Just", A.nextId)
          }, nt = {
            id: A.nextId,
            incoming: Lt(pt.compare)([(C + q) / 2]),
            mark: 0,
            members: x.members,
            outgoing: Lt(pt.compare)(x.outgoing),
            slot: 0,
            splitBy: T,
            splitPartner: b("Just", x.id)
          };
          return {
            segMap: Y(rt)(nt.id)(nt)(Y(rt)(B.id)(B)(A.segMap)),
            freeAreas: A.freeAreas,
            nextId: A.nextId + 1 | 0
          };
        }
        const F = 0 < S.length ? b("Just", S[0]) : T, W = (() => {
          if (F.tag === "Nothing")
            return { i: 0, a: { startPosition: 0, endPosition: 0, size: 0 } };
          if (F.tag === "Just") {
            if (S.length === 1)
              return F._1;
            const B = O((nt) => ({
              c: nt,
              rating: (() => {
                const M = (nt.a.startPosition + nt.a.endPosition) / 2, tt = [M], ot = [M], st = J((() => {
                  const At = A.segMap;
                  return (Tt) => (Vt) => {
                    const ht = wt(Vt.tgt)(At);
                    if (ht.tag === "Nothing")
                      return Tt;
                    if (ht.tag === "Just") {
                      const mt = at(J(at)(1e18)(ht._1.incoming))(J(at)(1e18)(ht._1.outgoing)), lt = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), dt = at(J(at)(1e18)(x.incoming))(J(at)(1e18)(tt)), it = (() => {
                        const Ct = ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(tt)), St = J((Ft) => (nn) => nn > lt ? Ft : nn >= mt ? Ft + 1 | 0 : Ft)(0)(tt) + J((Ft) => (nn) => nn > Ct ? Ft : nn >= dt ? Ft + 1 | 0 : Ft)(0)(ht._1.incoming) | 0, be = at(J(at)(1e18)(x.incoming))(J(at)(1e18)(tt)), Ee = ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(tt)), He = at(J(at)(1e18)(ht._1.incoming))(J(at)(1e18)(ht._1.outgoing)), ie = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), dr = J((Ft) => (nn) => nn > Ee ? Ft : nn >= be ? Ft + 1 | 0 : Ft)(0)(ht._1.outgoing) + J((Ft) => (nn) => nn > ie ? Ft : nn >= He ? Ft + 1 | 0 : Ft)(0)(x.incoming) | 0;
                        return St === dr ? St > 0 ? { ...Tt, deps: Tt.deps + 2 | 0, crossings: Tt.crossings + St | 0 } : Tt : { ...Tt, deps: Tt.deps + 1 | 0, crossings: Tt.crossings + Xe(St)(dr) | 0 };
                      })(), ut = at(J(at)(1e18)(ht._1.incoming))(J(at)(1e18)(ht._1.outgoing)), $t = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), Nt = at(J(at)(1e18)(ot))(J(at)(1e18)(x.outgoing)), Rt = ft(J(ft)(-1e18)(ot))(J(ft)(-1e18)(x.outgoing)), It = J((Ct) => (St) => St > $t ? Ct : St >= ut ? Ct + 1 | 0 : Ct)(0)(x.outgoing) + J((Ct) => (St) => St > Rt ? Ct : St >= Nt ? Ct + 1 | 0 : Ct)(0)(ht._1.incoming) | 0, tn = at(J(at)(1e18)(ot))(J(at)(1e18)(x.outgoing)), zn = ft(J(ft)(-1e18)(ot))(J(ft)(-1e18)(x.outgoing)), qe = at(J(at)(1e18)(ht._1.incoming))(J(at)(1e18)(ht._1.outgoing)), ke = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), oe = J((Ct) => (St) => St > zn ? Ct : St >= tn ? Ct + 1 | 0 : Ct)(0)(ht._1.outgoing) + J((Ct) => (St) => St > ke ? Ct : St >= qe ? Ct + 1 | 0 : Ct)(0)(ot) | 0;
                      return It === oe ? It > 0 ? { ...it, deps: it.deps + 2 | 0, crossings: it.crossings + It | 0 } : it : { ...it, deps: it.deps + 1 | 0, crossings: it.crossings + Xe(It)(oe) | 0 };
                    }
                    f();
                  };
                })())(J((() => {
                  const At = A.segMap;
                  return (Tt) => (Vt) => {
                    const ht = wt(Vt.src)(At);
                    if (ht.tag === "Nothing")
                      return Tt;
                    if (ht.tag === "Just") {
                      const mt = at(J(at)(1e18)(ht._1.incoming))(J(at)(1e18)(ht._1.outgoing)), lt = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), dt = at(J(at)(1e18)(x.incoming))(J(at)(1e18)(tt)), it = (() => {
                        const Ct = ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(tt)), St = J((Ft) => (nn) => nn > lt ? Ft : nn >= mt ? Ft + 1 | 0 : Ft)(0)(tt) + J((Ft) => (nn) => nn > Ct ? Ft : nn >= dt ? Ft + 1 | 0 : Ft)(0)(ht._1.incoming) | 0, be = at(J(at)(1e18)(x.incoming))(J(at)(1e18)(tt)), Ee = ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(tt)), He = at(J(at)(1e18)(ht._1.incoming))(J(at)(1e18)(ht._1.outgoing)), ie = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), dr = J((Ft) => (nn) => nn > Ee ? Ft : nn >= be ? Ft + 1 | 0 : Ft)(0)(ht._1.outgoing) + J((Ft) => (nn) => nn > ie ? Ft : nn >= He ? Ft + 1 | 0 : Ft)(0)(x.incoming) | 0;
                        return St === dr ? St > 0 ? { ...Tt, deps: Tt.deps + 2 | 0, crossings: Tt.crossings + St | 0 } : Tt : { ...Tt, deps: Tt.deps + 1 | 0, crossings: Tt.crossings + Xe(St)(dr) | 0 };
                      })(), ut = at(J(at)(1e18)(ht._1.incoming))(J(at)(1e18)(ht._1.outgoing)), $t = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), Nt = at(J(at)(1e18)(ot))(J(at)(1e18)(x.outgoing)), Rt = ft(J(ft)(-1e18)(ot))(J(ft)(-1e18)(x.outgoing)), It = J((Ct) => (St) => St > $t ? Ct : St >= ut ? Ct + 1 | 0 : Ct)(0)(x.outgoing) + J((Ct) => (St) => St > Rt ? Ct : St >= Nt ? Ct + 1 | 0 : Ct)(0)(ht._1.incoming) | 0, tn = at(J(at)(1e18)(ot))(J(at)(1e18)(x.outgoing)), zn = ft(J(ft)(-1e18)(ot))(J(ft)(-1e18)(x.outgoing)), qe = at(J(at)(1e18)(ht._1.incoming))(J(at)(1e18)(ht._1.outgoing)), ke = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), oe = J((Ct) => (St) => St > zn ? Ct : St >= tn ? Ct + 1 | 0 : Ct)(0)(ht._1.outgoing) + J((Ct) => (St) => St > ke ? Ct : St >= qe ? Ct + 1 | 0 : Ct)(0)(ot) | 0;
                      return It === oe ? It > 0 ? { ...it, deps: it.deps + 2 | 0, crossings: it.crossings + It | 0 } : it : { ...it, deps: it.deps + 1 | 0, crossings: it.crossings + Xe(It)(oe) | 0 };
                    }
                    f();
                  };
                })())({ crossings: 0, deps: 0 })(gt((At) => At.tgt === x.id, d.deps)))(gt((At) => At.src === x.id, d.deps)), _t = (() => {
                  if (x.splitBy.tag === "Just")
                    return wt(x.splitBy._1)(A.segMap);
                  if (x.splitBy.tag === "Nothing")
                    return T;
                  f();
                })();
                if (_t.tag === "Just")
                  return {
                    ...st,
                    deps: st.deps + 2 | 0,
                    crossings: (() => {
                      const At = at(J(at)(1e18)(_t._1.incoming))(J(at)(1e18)(_t._1.outgoing)), Tt = at(J(at)(1e18)(ot))(J(at)(1e18)(x.outgoing)), Vt = ft(J(ft)(-1e18)(_t._1.incoming))(J(ft)(-1e18)(_t._1.outgoing)), ht = ft(J(ft)(-1e18)(ot))(J(ft)(-1e18)(x.outgoing)), mt = at(J(at)(1e18)(x.incoming))(J(at)(1e18)(tt));
                      return st.crossings + (() => {
                        const lt = at(J(at)(1e18)(_t._1.incoming))(J(at)(1e18)(_t._1.outgoing)), dt = ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(tt)), it = ft(J(ft)(-1e18)(_t._1.incoming))(J(ft)(-1e18)(_t._1.outgoing));
                        return ((J((ut) => ($t) => $t > Vt ? ut : $t >= At ? ut + 1 | 0 : ut)(0)(tt) + J((ut) => ($t) => $t > dt ? ut : $t >= mt ? ut + 1 | 0 : ut)(0)(_t._1.incoming) | 0) + J((ut) => ($t) => $t > ht ? ut : $t >= Tt ? ut + 1 | 0 : ut)(0)(_t._1.outgoing) | 0) + J((ut) => ($t) => $t > it ? ut : $t >= lt ? ut + 1 | 0 : ut)(0)(ot) | 0;
                      })() | 0;
                    })()
                  };
                if (_t.tag === "Nothing")
                  return st;
                f();
              })()
            }))(S);
            return J((nt) => (M) => M.rating.crossings < nt.rating.crossings || !(M.rating.crossings > nt.rating.crossings) && (M.rating.deps < nt.rating.deps || !(M.rating.deps > nt.rating.deps) && M.c.a.size > nt.c.a.size) ? M : nt)(0 < B.length ? B[0] : { c: F._1, rating: { crossings: 1e6, deps: 1e6 } })(B).c;
          }
          f();
        })(), K = {
          ...x,
          incoming: Lt(pt.compare)(x.incoming),
          outgoing: Lt(pt.compare)([(W.a.startPosition + W.a.endPosition) / 2]),
          splitPartner: b("Just", A.nextId)
        }, V = {
          id: A.nextId,
          incoming: Lt(pt.compare)([(W.a.startPosition + W.a.endPosition) / 2]),
          mark: 0,
          members: x.members,
          outgoing: Lt(pt.compare)(x.outgoing),
          slot: 0,
          splitBy: T,
          splitPartner: b("Just", x.id)
        };
        return {
          segMap: Y(rt)(V.id)(V)(Y(rt)(K.id)(K)(A.segMap)),
          freeAreas: (() => {
            if (W.i >= 0 && W.i < A.freeAreas.length) {
              const B = cc(Yt, T, W.i, A.freeAreas), nt = (() => {
                if (B.tag === "Nothing")
                  return A.freeAreas;
                if (B.tag === "Just")
                  return B._1;
                f();
              })();
              if (A.freeAreas[W.i].size / 2 < l)
                return nt;
              const M = (A.freeAreas[W.i].startPosition + A.freeAreas[W.i].endPosition) / 2, tt = M - l, ot = M + l;
              return [
                ...W.i < 1 ? [] : Gt(0, W.i, nt),
                ...A.freeAreas[W.i].startPosition <= tt ? [{ startPosition: A.freeAreas[W.i].startPosition, endPosition: tt, size: tt - A.freeAreas[W.i].startPosition }] : [],
                ...ot <= A.freeAreas[W.i].endPosition ? [{ startPosition: ot, endPosition: A.freeAreas[W.i].endPosition, size: A.freeAreas[W.i].endPosition - ot }] : [],
                ...W.i < 1 ? nt : Gt(W.i, nt.length, nt)
              ];
            }
            return A.freeAreas;
          })(),
          nextId: A.nextId + 1 | 0
        };
      })({
        segMap: et,
        freeAreas: (() => {
          const A = Lt(pt.compare)([
            ...bt(d.segments)((x) => x.incoming),
            ...bt(d.segments)((x) => x.outgoing)
          ]);
          return vt(_d)($n(
            (x) => (C) => C - x >= 2 * l ? b("Just", { startPosition: x + l, endPosition: C - l, size: C - x - 2 * l }) : T,
            A,
            Gt(1, A.length, A)
          ));
        })(),
        nextId: d.segments.length
      })(Lt((A) => (x) => pt.compare(ft(J(ft)(-1e18)(A.incoming))(J(ft)(-1e18)(A.outgoing)) - at(J(at)(1e18)(A.incoming))(J(at)(1e18)(A.outgoing)))(ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(x.outgoing)) - at(J(at)(1e18)(x.incoming))(J(at)(1e18)(x.outgoing))))(vt((A) => wt(A)(et))(j.decisions)));
      return {
        segments: (() => {
          const A = (x, C) => {
            if (x.tag === "Leaf")
              return C;
            if (x.tag === "Node")
              return A(x._5, qt("Cons", x._4, A(x._6, C)));
            f();
          };
          return Et(Mt.foldr, A(X.segMap, zt));
        })(),
        deps: (() => {
          const A = X.segMap, x = (S, F) => {
            if (S.tag === "Leaf")
              return F;
            if (S.tag === "Node")
              return x(S._5, qt("Cons", S._4, x(S._6, F)));
            f();
          }, C = Et(Mt.foldr, x(A, zt)), q = C.length;
          return [
            ...bt(bt(Xt(0, q - 2 | 0))((S) => bt(Xt(S + 1 | 0, q - 1 | 0))((F) => [
              L(S, F)
            ])))((S) => S._1 >= 0 && S._1 < C.length ? S._2 >= 0 && S._2 < C.length ? C[S._1].splitPartner.tag !== "Nothing" && C[S._1].splitPartner.tag === "Just" && C[S._1].splitPartner._1 === C[S._2].id || C[S._2].splitPartner.tag !== "Nothing" && C[S._2].splitPartner.tag === "Just" && C[S._2].splitPartner._1 === C[S._1].id ? [] : i(l, C[S._1], C[S._2]) : [] : []),
            ...bt(C)((S) => S.splitBy.tag === "Just" && S.splitPartner.tag === "Just" && (() => {
              const F = wt(S.splitPartner._1)(A);
              if (F.tag === "Nothing")
                return !1;
              if (F.tag === "Just")
                return !0;
              f();
            })() && (() => {
              const F = wt(S.splitBy._1)(A);
              if (F.tag === "Nothing")
                return !1;
              if (F.tag === "Just")
                return !0;
              f();
            })() ? [{ src: S.id, tgt: S.splitBy._1, weight: 1, kind: oo }, { src: S.splitBy._1, tgt: S.splitPartner._1, weight: 1, kind: oo }] : [])
          ];
        })()
      };
    })(), p = h.segments, $ = p.length, m = (P) => {
      let R = P, j = !0, et;
      for (; j; ) {
        const X = R, A = ln((x) => {
          const C = wt(x)(X.inWeight);
          if (C.tag === "Nothing")
            return !0;
          if (C.tag === "Just")
            return C._1 === 0;
          f();
        })(X.remaining);
        if (A.tag === "Nothing") {
          j = !1, et = X;
          continue;
        }
        if (A.tag === "Just") {
          const x = A._1;
          R = {
            ...X,
            inWeight: J((C) => (q) => yt(rt)(Zt)(q.tgt)(-q.weight)(C))(X.inWeight)((() => {
              const C = wt(x)(X.depsBySrc);
              if (C.tag === "Nothing")
                return [];
              if (C.tag === "Just")
                return C._1;
              f();
            })()),
            marks: Y(rt)(x)(X.nextSource)(X.marks),
            nextSource: X.nextSource + 1 | 0,
            outWeight: J((C) => (q) => yt(rt)(Zt)(q.src)(-q.weight)(C))(X.outWeight)((() => {
              const C = wt(x)(X.depsByTgt);
              if (C.tag === "Nothing")
                return [];
              if (C.tag === "Just")
                return C._1;
              f();
            })()),
            remaining: gt((C) => C !== x, X.remaining)
          };
          continue;
        }
        f();
      }
      return et;
    }, N = (P) => {
      let R = P, j = !0, et;
      for (; j; ) {
        const X = R, A = ln((x) => {
          const C = wt(x)(X.outWeight);
          if (C.tag === "Nothing")
            return !0;
          if (C.tag === "Just")
            return C._1 === 0;
          f();
        })(X.remaining);
        if (A.tag === "Nothing") {
          j = !1, et = X;
          continue;
        }
        if (A.tag === "Just") {
          const x = A._1;
          R = {
            ...X,
            inWeight: J((C) => (q) => yt(rt)(Zt)(q.tgt)(-q.weight)(C))(X.inWeight)((() => {
              const C = wt(x)(X.depsBySrc);
              if (C.tag === "Nothing")
                return [];
              if (C.tag === "Just")
                return C._1;
              f();
            })()),
            marks: Y(rt)(x)(X.nextSink)(X.marks),
            nextSink: X.nextSink - 1 | 0,
            outWeight: J((C) => (q) => yt(rt)(Zt)(q.src)(-q.weight)(C))(X.outWeight)((() => {
              const C = wt(x)(X.depsByTgt);
              if (C.tag === "Nothing")
                return [];
              if (C.tag === "Just")
                return C._1;
              f();
            })()),
            remaining: gt((C) => C !== x, X.remaining)
          };
          continue;
        }
        f();
      }
      return et;
    }, w = ((P) => {
      let R = P, j = !0, et;
      for (; j; ) {
        const A = m(N(R));
        if (A.remaining.length === 0) {
          j = !1, et = O((x) => {
            const C = wt(x.id)(A.marks), q = (() => {
              if (C.tag === "Nothing")
                return x.id;
              if (C.tag === "Just")
                return C._1;
              f();
            })();
            return { ...x, mark: q < $ ? (q + $ | 0) + 1 | 0 : q };
          })(p);
          continue;
        }
        R = (() => {
          const x = (q) => {
            const S = wt(q)(A.outWeight), F = wt(q)(A.inWeight);
            return (() => {
              if (S.tag === "Nothing")
                return 0;
              if (S.tag === "Just")
                return S._1;
              f();
            })() - (() => {
              if (F.tag === "Nothing")
                return 0;
              if (F.tag === "Just")
                return F._1;
              f();
            })() | 0;
          }, C = Lt((q) => (S) => rt.compare(x(S))(x(q)))(A.remaining);
          if (0 < C.length) {
            const q = C[0];
            return {
              ...A,
              inWeight: J((S) => (F) => yt(rt)(Zt)(F.tgt)(-F.weight)(S))(A.inWeight)((() => {
                const S = wt(q)(A.depsBySrc);
                if (S.tag === "Nothing")
                  return [];
                if (S.tag === "Just")
                  return S._1;
                f();
              })()),
              marks: Y(rt)(q)(A.nextSource)(A.marks),
              nextSource: A.nextSource + 1 | 0,
              outWeight: J((S) => (F) => yt(rt)(Zt)(F.src)(-F.weight)(S))(A.outWeight)((() => {
                const S = wt(q)(A.depsByTgt);
                if (S.tag === "Nothing")
                  return [];
                if (S.tag === "Just")
                  return S._1;
                f();
              })()),
              remaining: gt((S) => S !== q, A.remaining)
            };
          }
          return A;
        })();
      }
      return et;
    })({
      remaining: O((P) => P.id)(p),
      marks: Q,
      inWeight: J((P) => (R) => yt(rt)(Zt)(R.tgt)(R.weight)(P))(Q)(h.deps),
      outWeight: J((P) => (R) => yt(rt)(Zt)(R.src)(R.weight)(P))(Q)(h.deps),
      depsBySrc: J((P) => (R) => yt(rt)(fn)(R.src)([R])(P))(Q)(h.deps),
      depsByTgt: J((P) => (R) => yt(rt)(fn)(R.tgt)([R])(P))(Q)(h.deps),
      nextSink: $ - 1 | 0,
      nextSource: $ + 1 | 0
    }), y = (() => {
      const P = (() => {
        const X = Ve(O((A) => L(A.id, A.mark))(w));
        return {
          segments: w,
          deps: vt((A) => (() => {
            if (A.kind === "Critical")
              return !0;
            if (A.kind === "Regular")
              return !1;
            f();
          })() ? b("Just", A) : (() => {
            const x = wt(A.src)(X), C = wt(A.tgt)(X);
            return (() => {
              if (x.tag === "Nothing")
                return 0;
              if (x.tag === "Just")
                return x._1;
              f();
            })() > (() => {
              if (C.tag === "Nothing")
                return 0;
              if (C.tag === "Just")
                return C._1;
              f();
            })();
          })() ? A.weight === 0 ? T : b("Just", { src: A.tgt, tgt: A.src, weight: A.weight, kind: A.kind }) : b("Just", A))(h.deps)
        };
      })(), R = J((X) => (A) => yt(rt)(Zt)(A.tgt)(1)(X))(Q)(P.deps), et = ((X) => {
        let A = X, x = !0, C;
        for (; x; ) {
          const q = A, S = Wt((F) => T, (F) => (W) => b("Just", { head: F, tail: W }), q.queue);
          if (S.tag === "Nothing") {
            x = !1, C = q;
            continue;
          }
          if (S.tag === "Just") {
            A = J((() => {
              const F = wt(S._1.head)(q.slots), W = (() => {
                if (F.tag === "Nothing")
                  return 0;
                if (F.tag === "Just")
                  return F._1;
                f();
              })();
              return (K) => (V) => {
                const B = wt(V)(K.inDegree), nt = (() => {
                  if (B.tag === "Nothing")
                    return -1;
                  if (B.tag === "Just")
                    return B._1 - 1 | 0;
                  f();
                })();
                return {
                  ...K,
                  slots: Y(rt)(V)(Nu((() => {
                    const M = wt(V)(K.slots);
                    if (M.tag === "Nothing")
                      return 0;
                    if (M.tag === "Just")
                      return M._1;
                    f();
                  })())(W + 1 | 0))(K.slots),
                  inDegree: Y(rt)(V)(nt)(K.inDegree),
                  queue: nt === 0 ? [...K.queue, V] : K.queue
                };
              };
            })())({ ...q, queue: S._1.tail })((() => {
              const F = wt(S._1.head)(q.adj);
              if (F.tag === "Nothing")
                return [];
              if (F.tag === "Just")
                return F._1;
              f();
            })());
            continue;
          }
          f();
        }
        return C;
      })({
        slots: Ve(O((X) => L(X.id, 0))(P.segments)),
        inDegree: R,
        adj: J((X) => (A) => yt(rt)(fn)(A.src)([A.tgt])(X))(Q)(P.deps),
        queue: O((X) => X.id)(gt(
          (X) => {
            const A = wt(X.id)(R);
            if (A.tag === "Nothing")
              return !0;
            if (A.tag === "Just")
              return A._1 === 0;
            f();
          },
          P.segments
        ))
      });
      return Lt((X) => (A) => rt.compare(X.slot)(A.slot))(O((X) => ({
        ...X,
        slot: (() => {
          const A = wt(X.id)(et.slots);
          if (A.tag === "Nothing")
            return 0;
          if (A.tag === "Just")
            return A._1;
          f();
        })()
      }))(P.segments));
    })(), k = 1 + J((P) => (R) => Nu(P)(R.slot))(0)(y) | 0, E = bt(y)((P) => P.members), I = gt((P) => In(te)(P.edge.id)(E), t), D = J(ft)(-1e18)(O((P) => P.fromPos._2)(I)), z = J(at)(1e18)(O((P) => P.toPos._2)(I));
    if (D > z) {
      const P = Ve(O((R) => L(R.id, R))(y));
      return Cn(O((R) => O((j) => L(
        j,
        {
          slot: R.slot,
          slotCount: k,
          gapTop: z,
          gapBottom: D,
          partner: (() => {
            if (R.splitPartner.tag === "Just") {
              const et = wt(R.splitPartner._1)(P);
              if (et.tag === "Just")
                return b("Just", { slot: et._1.slot, splitX: 0 < et._1.incoming.length ? et._1.incoming[0] : 0 });
              if (et.tag === "Nothing")
                return T;
              f();
            }
            if (R.splitPartner.tag === "Nothing")
              return T;
            f();
          })()
        }
      ))(R.members))(gt(
        (R) => {
          if (R.splitPartner.tag === "Just") {
            const j = wt(R.splitPartner._1)(P);
            return !(j.tag === "Just" && (() => {
              if (j._1.splitBy.tag === "Nothing")
                return !1;
              if (j._1.splitBy.tag === "Just")
                return !0;
              f();
            })());
          }
          if (R.splitPartner.tag === "Nothing")
            return !0;
          f();
        },
        y
      )));
    }
    const U = Ve(O((P) => L(P.id, P))(y));
    return Cn(O((P) => O((R) => L(
      R,
      {
        slot: P.slot,
        slotCount: k,
        gapTop: D,
        gapBottom: z,
        partner: (() => {
          if (P.splitPartner.tag === "Just") {
            const j = wt(P.splitPartner._1)(U);
            if (j.tag === "Just")
              return b("Just", { slot: j._1.slot, splitX: 0 < j._1.incoming.length ? j._1.incoming[0] : 0 });
            if (j.tag === "Nothing")
              return T;
            f();
          }
          if (P.splitPartner.tag === "Nothing")
            return T;
          f();
        })()
      }
    ))(P.members))(gt(
      (P) => {
        if (P.splitPartner.tag === "Just") {
          const R = wt(P.splitPartner._1)(U);
          return !(R.tag === "Just" && (() => {
            if (R._1.splitBy.tag === "Nothing")
              return !1;
            if (R._1.splitBy.tag === "Just")
              return !0;
            f();
          })());
        }
        if (P.splitPartner.tag === "Nothing")
          return !0;
        f();
      },
      y
    )));
  })()))(Q)(gd(J((s) => (u) => {
    const c = Me(u.edge.from.node)(e);
    if (c.tag === "Just") {
      const a = Me(u.edge.to.node)(e);
      return a.tag === "Just" && c._1.layer !== a._1.layer ? yt(rt)(fn)(Xe(c._1.layer)(a._1.layer))([u])(s) : s;
    }
    return s;
  })(Q)((() => {
    const s = (u) => L(
      (() => {
        const c = Me(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.layer : 1e6;
      })(),
      (() => {
        const c = Me(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.order : 1e6;
      })()
    );
    return Lt((u) => (c) => fd(s(u))(s(c)))(t);
  })())));
}, dd = (t) => (n) => {
  const e = fa(t)(n), r = J((o) => (i) => Y(G)(i.node)(i)(o))(Q)(n);
  return J((o) => (i) => {
    const s = Me(i.edge.from.node)(r);
    if (s.tag === "Just") {
      const u = Me(i.edge.to.node)(r);
      if (u.tag === "Just" && s._1.layer !== u._1.layer) {
        const c = ld(i.edge.id)(e);
        if (c.tag === "Just")
          return Y(rt)(Xe(s._1.layer)(u._1.layer))(c._1.slotCount)(o);
      }
      return o;
    }
    return o;
  })(Q)(t);
}, ga = Bt.foldMap(/* @__PURE__ */ (() => {
  const t = { append: (n) => (e) => n || e };
  return { mempty: !1, Semigroup0: () => t };
})()), rn = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, on = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, mr = (t) => (n) => (e) => (r) => ga((o) => e >= o.x && e < o.x + o.w && n > o.y && t < o.y + o.h)(r), Lo = (t) => (n) => (e) => (r) => mr(rn(n)(e))(on(n)(e))(r)(t), io = /* @__PURE__ */ ct(4), hd = /* @__PURE__ */ gc((t) => {
  if (t.direction === "H") {
    const n = rn(t.start._1)(t.end._1);
    return [{ x: n, y: t.start._2 - 1, w: on(t.start._1)(t.end._1) - n, h: 2 }];
  }
  if (t.direction === "V") {
    const n = rn(t.start._2)(t.end._2);
    return [{ x: t.start._1 - 1, y: n, w: 2, h: on(t.start._2)(t.end._2) - n }];
  }
  f();
}), Rr = /* @__PURE__ */ fc((t) => {
  const n = t.start._1 - t.end._1;
  return !((n < 0 ? -n < 1e-6 : n < 1e-6) && (() => {
    const e = t.start._2 - t.end._2;
    return e < 0 ? -e < 1e-6 : e < 1e-6;
  })());
}), pd = (t) => (n) => (e) => {
  const r = Wt((o) => T, (o) => (i) => b("Just", { head: o, tail: i }), n);
  if (r.tag === "Nothing")
    return [{ start: t.start, end: e.end, direction: t.direction }];
  if (r.tag === "Just") {
    const o = (r._1.head.direction === "H" ? t.direction === "H" : r._1.head.direction === "V" && t.direction === "V") ? [{ start: t.start, end: r._1.head.end, direction: t.direction }] : [t, r._1.head], i = gg(r._1.tail);
    if (i.tag === "Nothing") {
      const s = o.length - 1 | 0;
      return s >= 0 && s < o.length && (o[s].direction === "H" ? e.direction === "H" : o[s].direction === "V" && e.direction === "V") ? [
        ...(() => {
          const u = o.length - 1 | 0;
          return u < 1 ? [] : Gt(0, u, o);
        })(),
        { start: o[s].start, end: e.end, direction: e.direction }
      ] : [...o, e];
    }
    if (i.tag === "Just")
      return (i._1.last.direction === "H" ? e.direction === "H" : i._1.last.direction === "V" && e.direction === "V") ? [...o, ...i._1.init, { start: i._1.last.start, end: e.end, direction: e.direction }] : [...o, ...r._1.tail, e];
  }
  f();
}, Fr = (t) => {
  const n = (r) => (o) => {
    const i = Wt((s) => T, (s) => (u) => b("Just", { head: s, tail: u }), o);
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
  }, e = Wt((r) => T, (r) => (o) => b("Just", { head: r, tail: o }), t);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return n(e._1.head)(e._1.tail);
  f();
}, Nr = (t) => (n) => (e) => (r) => ga((o) => e >= o.y && e < o.y + o.h && n > o.x && t < o.x + o.w)(r), kr = (t) => (n) => (e) => (r) => Nr(rn(n)(e))(on(n)(e))(r)(t), $d = (t) => (n) => (e) => (r) => {
  const o = e + 2 | 0, i = o < 1 ? n : Gt(o, n.length, n), s = e < 1 ? [] : Gt(0, e, n), u = (e + 1 | 0) === (r - 1 | 0), c = e === 0, a = e >= 0 && e < n.length ? b("Just", n[e]) : T;
  if (a.tag === "Just") {
    const g = e + 1 | 0, l = g >= 0 && g < n.length ? b("Just", n[g]) : T;
    if (l.tag === "Just") {
      const d = a._1.start._1 === l._1.end._1 && (!c || a._1.direction === "V") && (!u || l._1.direction === "V") && !Lo(t)(rn(a._1.start._2)(l._1.end._2))(on(a._1.start._2)(l._1.end._2))(a._1.start._1) ? b("Just", [...s, { start: a._1.start, end: l._1.end, direction: Ot }, ...i]) : T, _ = a._1.start._2 === l._1.end._2 && (!c || a._1.direction === "H") && (!u || l._1.direction === "H") && !kr(t)(rn(a._1.start._1)(l._1.end._1))(on(a._1.start._1)(l._1.end._1))(a._1.start._2) ? b("Just", [...s, { start: a._1.start, end: l._1.end, direction: Ht }, ...i]) : T;
      return d.tag === "Nothing" ? _ : d;
    }
    if (l.tag === "Nothing")
      return T;
    f();
  }
  if (a.tag === "Nothing")
    return T;
  f();
}, md = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if ((c + 1 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const a = $d(t)(n)(c)(e);
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
}, Nd = (t) => (n) => (e) => (r) => {
  const o = (d, _, h) => !Lo(t)(rn(_)(h))(on(_)(h))(d), i = e + 3 | 0, s = i < 1 ? n : Gt(i, n.length, n), u = e < 1 ? [] : Gt(0, e, n), c = (e + 2 | 0) === (r - 1 | 0), a = e === 0, g = (d, _, h) => !kr(t)(rn(_)(h))(on(_)(h))(d), l = e >= 0 && e < n.length ? b("Just", n[e]) : T;
  if (l.tag === "Just") {
    const d = e + 2 | 0, _ = d >= 0 && d < n.length ? b("Just", n[d]) : T;
    if (_.tag === "Just") {
      const h = l._1.start._1 === _._1.end._1 && (!a || l._1.direction === "V") && (!c || _._1.direction === "V") && o(l._1.start._1, l._1.start._2, _._1.end._2) ? b("Just", [...u, { start: l._1.start, end: _._1.end, direction: Ot }, ...s]) : l._1.start._2 === _._1.end._2 && (!a || l._1.direction === "H") && (!c || _._1.direction === "H") && g(l._1.start._2, l._1.start._1, _._1.end._1) ? b("Just", [...u, { start: l._1.start, end: _._1.end, direction: Ht }, ...s]) : T, p = (!a || l._1.direction === "V") && (!c || _._1.direction === "H") && o(l._1.start._1, l._1.start._2, _._1.end._2) && g(
        _._1.end._2,
        l._1.start._1,
        _._1.end._1
      ) ? b(
        "Just",
        [
          ...u,
          { start: l._1.start, end: L(l._1.start._1, _._1.end._2), direction: Ot },
          { start: L(l._1.start._1, _._1.end._2), end: _._1.end, direction: Ht },
          ...s
        ]
      ) : T, $ = (!a || l._1.direction === "H") && (!c || _._1.direction === "V") && g(l._1.start._2, l._1.start._1, _._1.end._1) && o(
        _._1.end._1,
        l._1.start._2,
        _._1.end._2
      ) ? b(
        "Just",
        [
          ...u,
          { start: l._1.start, end: L(_._1.end._1, l._1.start._2), direction: Ht },
          { start: L(_._1.end._1, l._1.start._2), end: _._1.end, direction: Ot },
          ...s
        ]
      ) : T, m = p.tag === "Nothing" ? $ : p;
      return h.tag === "Nothing" ? m : h;
    }
    if (_.tag === "Nothing")
      return T;
    f();
  }
  if (l.tag === "Nothing")
    return T;
  f();
}, Jd = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if ((c + 2 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const a = Nd(t)(n)(c)(e);
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
}, vd = (t) => {
  const n = (e) => {
    let r = e, o = !0, i;
    for (; o; ) {
      const s = r, u = Fr(Rr(md(t)(Jd(t)(s))));
      if (u.length < s.length) {
        r = u;
        continue;
      }
      o = !1, i = u;
    }
    return i;
  };
  return (e) => n(Fr(Rr(e)));
}, Td = (t) => (n) => (e) => (r) => {
  const o = rn(e)(r), i = on(e)(r), s = gt((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = Lt((a) => (g) => pt.compare(a.x)(g.x))(s);
    return 0 < c.length ? c[0].x - 1 : (e + r) / 2;
  }
  const u = Lt((c) => (a) => pt.compare(a.x)(c.x))(O((c) => ({ ...c, x: c.x + c.w }))(s));
  return 0 < u.length ? u[0].x + 1 : (e + r) / 2;
}, yd = (t) => (n) => (e) => (r) => {
  const o = rn(e)(r), i = on(e)(r), s = gt((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = Lt((a) => (g) => pt.compare(a.y)(g.y))(s);
    return 0 < c.length ? c[0].y - 1 : (e + r) / 2;
  }
  const u = Lt((c) => (a) => pt.compare(a.y)(c.y))(O((c) => ({ ...c, y: c.y + c.h }))(s));
  return 0 < u.length ? u[0].y + 1 : (e + r) / 2;
}, wd = (t) => (n) => (e) => (r) => {
  const o = rn(e)(r), i = on(e)(r), s = gt((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = Lt((a) => (g) => pt.compare(g.x)(a.x))(O((a) => ({ ...a, x: a.x + a.w }))(s));
    return 0 < c.length ? c[0].x : (e + r) / 2;
  }
  const u = Lt((c) => (a) => pt.compare(c.x)(a.x))(s);
  return 0 < u.length ? u[0].x - 1 : (e + r) / 2;
}, Ld = (t) => (n) => (e) => (r) => {
  const o = rn(e)(r), i = on(e)(r), s = gt((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = Lt((a) => (g) => pt.compare(g.y)(a.y))(O((a) => ({ ...a, y: a.y + a.h }))(s));
    return 0 < c.length ? c[0].y : (e + r) / 2;
  }
  const u = Lt((c) => (a) => pt.compare(c.y)(a.y))(s);
  return 0 < u.length ? u[0].y - 1 : (e + r) / 2;
}, _a = (t) => (n) => (e) => {
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
}, vu = (t) => (n) => (e) => (r) => (o) => {
  const i = rn(n)(e), s = on(n)(e);
  if (!mr(i)(s)(r)(t))
    return r;
  if (!mr(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return mr(i)(s)(u)(t) ? _a((c) => mr(i)(s)(c)(t))(u)(1) : u;
}, kd = (t) => (n) => (e) => (r) => (o) => {
  const i = rn(n)(e), s = on(n)(e);
  if (!Nr(i)(s)(r)(t))
    return r;
  if (!Nr(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return Nr(i)(s)(u)(t) ? _a((c) => Nr(i)(s)(c)(t))(u)(1) : u;
}, bd = (t) => (n) => (e) => (r) => {
  const o = rn(n)(e), i = on(n)(e), s = gt((a) => r >= a.x && r < a.x + a.w && a.y + a.h > o && a.y < i, t), u = J((a) => (g) => on(a)(g.x + g.w + 4))(r + 4)(s), c = J((a) => (g) => rn(a)(g.x - 4))(r - 4)(s);
  return (() => {
    const a = u - r, g = c - r;
    return (a < 0 ? -a : a) <= (g < 0 ? -g : g);
  })() ? u : c;
}, Ed = (t) => (n) => (e) => (r) => {
  const o = rn(n)(e), i = on(n)(e), s = gt((a) => r >= a.y && r < a.y + a.h && a.x + a.w > o && a.x < i, t), u = J((a) => (g) => on(a)(g.y + g.h + 4))(r + 4)(s), c = J((a) => (g) => rn(a)(g.y - 4))(r - 4)(s);
  return (() => {
    const a = u - r, g = c - r;
    return (a < 0 ? -a : a) <= (g < 0 ? -g : g);
  })() ? u : c;
}, xd = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = (() => {
    if (r === "South")
      return L(o._1, o._2 + 4);
    if (r === "North")
      return L(o._1, o._2 - 4);
    if (r === "East")
      return L(o._1 + 4, o._2);
    if (r === "West")
      return L(o._1 - 4, o._2);
    f();
  })(), c = (() => {
    if (i === "South")
      return L(s._1, s._2 + 4);
    if (i === "North")
      return L(s._1, s._2 - 4);
    if (i === "East")
      return L(s._1 + 4, s._2);
    if (i === "West")
      return L(s._1 - 4, s._2);
    f();
  })(), a = (y, k, E) => !Lo(n)(rn(k)(E))(on(k)(E))(y), g = (y, k, E) => !Lo(e)(rn(k)(E))(on(k)(E))(y), l = (y, k, E, I) => t.tag === "Just" && !kr(e)(rn(y)(k))(on(y)(k))(t._1) ? t._1 : kd(n)(y)(k)(E)(I), d = (y, k, E, I) => {
    if (y === E) {
      const z = bd(n)(k)(I)(y), U = yd(n)(y)(k)(I), P = Ld(n)(y)(k)(I);
      return [
        { start: L(y, k), end: L(y, U), direction: Ot },
        { start: L(y, U), end: L(z, U), direction: Ht },
        { start: L(z, U), end: L(z, P), direction: Ot },
        { start: L(z, P), end: L(E, P), direction: Ht },
        { start: L(E, P), end: L(E, I), direction: Ot }
      ];
    }
    const D = l(y, E, k, I);
    return [
      { start: L(y, k), end: L(y, D), direction: Ot },
      { start: L(y, D), end: L(E, D), direction: Ht },
      { start: L(E, D), end: L(E, I), direction: Ot }
    ];
  }, _ = (y, k, E, I) => {
    if (k === I) {
      const z = Ed(n)(y)(E)(k), U = Td(n)(k)(y)(E), P = wd(n)(k)(y)(E);
      return [
        { start: L(y, k), end: L(U, k), direction: Ht },
        { start: L(U, k), end: L(U, z), direction: Ot },
        { start: L(U, z), end: L(P, z), direction: Ht },
        { start: L(P, z), end: L(P, I), direction: Ot },
        { start: L(P, I), end: L(E, I), direction: Ht }
      ];
    }
    const D = vu(n)(k)(I)(y)(E);
    return [
      { start: L(y, k), end: L(D, k), direction: Ht },
      { start: L(D, k), end: L(D, I), direction: Ot },
      { start: L(D, I), end: L(E, I), direction: Ht }
    ];
  }, h = (y, k, E) => !kr(n)(rn(k)(E))(on(k)(E))(y), p = (y, k, E) => !kr(e)(rn(k)(E))(on(k)(E))(y), $ = (y, k, E, I) => {
    if (p(k, y, E) && g(E, k, I))
      return [
        { start: L(y, k), end: L(E, k), direction: Ht },
        { start: L(E, k), end: L(E, I), direction: Ot }
      ];
    const D = vu(n)(k)(I)(y)(E);
    return [
      { start: L(y, k), end: L(D, k), direction: Ht },
      { start: L(D, k), end: L(D, I), direction: Ot },
      { start: L(D, I), end: L(E, I), direction: Ht }
    ];
  }, m = (y, k, E, I) => {
    if (g(y, k, I) && p(I, y, E))
      return [
        { start: L(y, k), end: L(y, I), direction: Ot },
        { start: L(y, I), end: L(E, I), direction: Ht }
      ];
    const D = l(y, E, k, I);
    return [
      { start: L(y, k), end: L(y, D), direction: Ot },
      { start: L(y, D), end: L(E, D), direction: Ht },
      { start: L(E, D), end: L(E, I), direction: Ot }
    ];
  }, N = (() => {
    if (r === "South")
      return i === "North" ? u._1 === c._1 && a(u._1, u._2, c._2) ? [{ start: L(u._1, u._2), end: L(c._1, c._2), direction: Ot }] : d(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? m(u._1, u._2, c._1, c._2) : d(u._1, u._2, c._1, c._2);
    if (r === "North")
      return i === "South" ? u._1 === c._1 && a(u._1, u._2, c._2) ? [{ start: L(u._1, u._2), end: L(c._1, c._2), direction: Ot }] : d(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? m(u._1, u._2, c._1, c._2) : d(u._1, u._2, c._1, c._2);
    if (r === "East")
      return i === "West" ? u._2 === c._2 && h(u._2, u._1, c._1) ? [{ start: L(u._1, u._2), end: L(c._1, c._2), direction: Ht }] : _(u._1, u._2, c._1, c._2) : i === "North" || i === "South" ? $(u._1, u._2, c._1, c._2) : d(u._1, u._2, c._1, c._2);
    if (r === "West") {
      if (i === "East")
        return u._2 === c._2 && h(u._2, u._1, c._1) ? [{ start: L(u._1, u._2), end: L(c._1, c._2), direction: Ht }] : _(u._1, u._2, c._1, c._2);
      if (i === "North" || i === "South")
        return $(u._1, u._2, c._1, c._2);
    }
    return d(u._1, u._2, c._1, c._2);
  })(), v = (() => {
    if (r === "South" || r === "North")
      return Ot;
    if (r === "East" || r === "West")
      return Ht;
    f();
  })(), w = {
    start: L(c._1, c._2),
    end: L(s._1, s._2),
    direction: (() => {
      if (i === "South" || i === "North")
        return Ot;
      if (i === "East" || i === "West")
        return Ht;
      f();
    })()
  };
  return u._1 === c._1 && u._2 === c._2 ? [{ start: L(o._1, o._2), end: L(s._1, s._2), direction: v }] : pd({ start: L(o._1, o._2), end: L(u._1, u._2), direction: v })(N)(w);
}, Cd = /* @__PURE__ */ O((t) => ({ x: t.position._1 * io - 2, y: t.position._2 * io - 2, w: t.size._1 * io + 4, h: t.size._2 * io + 4 })), ko = /* @__PURE__ */ jt(G)(Bt), se = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, _i = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Sd = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t._1)(s._3._1);
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
          o = !1, i = b("Just", s._4);
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
          o = !1, i = b("Just", s._4);
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
          o = !1, i = b("Just", s._4);
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
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Tu = (t) => (n) => {
  const e = n.position._1 + n.size._1, r = n.position._2 * 2 + n.size._2, o = n.position._1 * 2 + n.size._1, i = n.position._2 + n.size._2;
  if (t === "South")
    return L(o, i * 2);
  if (t === "North")
    return L(o, n.position._2 * 2);
  if (t === "East")
    return L(e * 2, r);
  if (t === "West")
    return L(n.position._1 * 2, r);
  f();
}, li = (t) => (n) => {
  const e = ct(4);
  if (t === "South")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "North")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "East")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  if (t === "West")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  f();
}, yu = (t) => (n) => J((e) => (r) => yt(t)(fn)(n(r))([r])(e))(Q), wu = (t) => (n) => (e) => (r) => {
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
}, la = (t) => (n) => {
  const e = t.hi - t.lo, r = (t.lo + t.hi) / 2, o = n.length;
  return o === 0 ? Q : ko(o === 1 ? O((i) => L(i, r))(n) : Pt((i) => (s) => L(s, t.lo + ct(i + 1 | 0) * e / ct(o + 1 | 0)))(n));
}, da = (t) => (n) => (e) => (r) => (o) => {
  const i = yu(G)((_) => _.to.node)(t), s = yu(G)((_) => _.from.node)(t), u = J((_) => (h) => Y(G)(h.node)(h)(_))(Q)(n), c = (_, h, p) => {
    const $ = se(_)(u);
    if ($.tag === "Nothing")
      return L(0, 0);
    if ($.tag === "Just") {
      const m = se(_)(e);
      if (m.tag === "Nothing") {
        const N = ct(4);
        if (p === "South")
          return L($._1.position._1 * N + $._1.size._1 * N / 2, ($._1.position._2 + $._1.size._2) * N);
        if (p === "North")
          return L($._1.position._1 * N + $._1.size._1 * N / 2, $._1.position._2 * N);
        if (p === "East")
          return L(($._1.position._1 + $._1.size._1) * N, $._1.position._2 * N + $._1.size._2 * N / 2);
        if (p === "West")
          return L($._1.position._1 * N, $._1.position._2 * N + $._1.size._2 * N / 2);
        f();
      }
      if (m.tag === "Just") {
        const N = ln((v) => v.id === h)(m._1);
        if (N.tag === "Nothing") {
          const v = ct(4);
          if (p === "South")
            return L($._1.position._1 * v + $._1.size._1 * v / 2, ($._1.position._2 + $._1.size._2) * v);
          if (p === "North")
            return L($._1.position._1 * v + $._1.size._1 * v / 2, $._1.position._2 * v);
          if (p === "East")
            return L(($._1.position._1 + $._1.size._1) * v, $._1.position._2 * v + $._1.size._2 * v / 2);
          if (p === "West")
            return L($._1.position._1 * v, $._1.position._2 * v + $._1.size._2 * v / 2);
          f();
        }
        if (N.tag === "Just") {
          const v = ct(4);
          if (N._1.side === "North")
            return L($._1.position._1 * v + ct(N._1.offset) * v, $._1.position._2 * v);
          if (N._1.side === "South")
            return L($._1.position._1 * v + ct(N._1.offset) * v, ($._1.position._2 + $._1.size._2) * v);
          if (N._1.side === "East")
            return L(($._1.position._1 + $._1.size._1) * v, $._1.position._2 * v + ct(N._1.offset) * v);
          if (N._1.side === "West")
            return L($._1.position._1 * v, $._1.position._2 * v + ct(N._1.offset) * v);
        }
      }
    }
    f();
  }, a = ko(bt(r)((_) => {
    if (_.nodes.length <= 2)
      return [];
    const h = ct(4);
    if (1 < _.nodes.length) {
      const p = se(_.nodes[1])(u);
      if (p.tag === "Nothing")
        return [];
      if (p.tag === "Just") {
        const $ = p._1.position._1 * h + p._1.size._1 * h / 2;
        return O((m) => L(m, $))($n(
          (m) => (N) => _.edgeId + ":" + m + "->" + N,
          _.nodes,
          Gt(1, _.nodes.length, _.nodes)
        ));
      }
      f();
    }
    return [];
  })), g = (_) => {
    const h = se(_.from.node)(u), p = se(_.to.node)(u);
    if (h.tag === "Just" && p.tag === "Just") {
      const $ = h._1, m = p._1, N = Lt((v) => (w) => rt.compare(v.score)(w.score))(O((v) => {
        const w = v._1, y = v._2;
        return {
          from: w,
          to: y,
          score: (() => {
            const k = (z, U, P, R, j) => {
              const et = li(z)(U), X = li(z)(P);
              return et.lo < X.hi && X.lo < et.hi && (w === "South" ? y === "North" && j._2 > R._2 : w === "North" ? y === "South" && j._2 < R._2 : w === "East" ? y === "West" && j._1 > R._1 : w === "West" && y === "East" && j._1 < R._1) ? 0 : wu(w)(y)(R)(j);
            }, E = Tu(w)($), I = Tu(y)(m), D = wu(w)(y)(E)(I);
            return (() => {
              if (D > 0) {
                if (w === "South")
                  return y === "North" ? k(cn, $, m, E, I) * 10 | 0 : D * 10 | 0;
                if (w === "North")
                  return y === "South" ? k(un, $, m, E, I) * 10 | 0 : D * 10 | 0;
                if (w === "East")
                  return y === "West" ? k(Kn, $, m, E, I) * 10 | 0 : D * 10 | 0;
                if (w === "West" && y === "East")
                  return k(xe, $, m, E, I) * 10 | 0;
              }
              return D * 10 | 0;
            })() + (w === "South" ? y === "North" ? 0 : 15 : w === "North" ? y === "South" ? 0 : 15 : w === "East" ? y === "West" ? 5 : 15 : w === "West" && y === "East" ? 5 : 15) | 0;
          })()
        };
      })([
        L(cn, un),
        L(Kn, un),
        L(xe, un),
        L(cn, Kn),
        L(cn, xe),
        L(un, cn),
        L(un, Kn),
        L(un, xe),
        L(Kn, cn),
        L(xe, cn),
        L(Kn, xe),
        L(xe, Kn)
      ]));
      if (0 < N.length)
        return { from: N[0].from, to: N[0].to };
    }
    return { from: cn, to: un };
  }, l = ko(O((_) => L(_.id, g(_)))(t)), d = (_, h, p, $, m, N) => {
    const v = ct(4), w = se(h)(u);
    if (w.tag === "Nothing")
      return L(0, 0);
    if (w.tag === "Just") {
      const y = Sd(L(p, _))(o);
      if (y.tag === "Just") {
        const k = w._1.position._1 * v + y._1, E = ct(4);
        if (_ === "South")
          return L(k, (w._1.position._2 + w._1.size._2) * E);
        if (_ === "North")
          return L(k, w._1.position._2 * E);
        if (_ === "East")
          return L((w._1.position._1 + w._1.size._1) * E, k);
        if (_ === "West")
          return L(w._1.position._1 * E, k);
        f();
      }
      if (y.tag === "Nothing") {
        const k = li(_)(w._1), E = (k.lo + k.hi) / 2, I = _i(p)(la(k)(O((U) => U.id)(Lt((U) => (P) => pt.compare(m(_)(U))(m(_)(P)))(gt(
          (U) => {
            const P = _i(U.id)(l);
            if (P.tag === "Just") {
              const R = N(P._1);
              return R === "North" ? _ === "North" : R === "South" ? _ === "South" : R === "East" ? _ === "East" : R === "West" && _ === "West";
            }
            if (P.tag === "Nothing")
              return !0;
            f();
          },
          (() => {
            const U = se(h)($);
            if (U.tag === "Nothing")
              return [];
            if (U.tag === "Just")
              return U._1;
            f();
          })()
        ))))), D = (() => {
          if (I.tag === "Nothing")
            return E;
          if (I.tag === "Just")
            return I._1;
          f();
        })(), z = ct(4);
        if (_ === "South")
          return L(D, (w._1.position._2 + w._1.size._2) * z);
        if (_ === "North")
          return L(D, w._1.position._2 * z);
        if (_ === "East")
          return L((w._1.position._1 + w._1.size._1) * z, D);
        if (_ === "West")
          return L(w._1.position._1 * z, D);
      }
    }
    f();
  };
  return O((_) => {
    const h = _i(_.edge.id)(a);
    if (h.tag === "Nothing")
      return _;
    if (h.tag === "Just")
      return {
        ..._,
        fromPos: _n(3)(_.edge.from.node) === "$d:" ? L(h._1, _.fromPos._2) : _.fromPos,
        toPos: _n(3)(_.edge.to.node) === "$d:" ? L(h._1, _.toPos._2) : _.toPos
      };
    f();
  })(O((_) => {
    if (_.from.port.tag === "Just" && _.to.port.tag === "Just")
      return {
        edge: _,
        fromPos: c(_.from.node, _.from.port._1, cn),
        toPos: c(_.to.node, _.to.port._1, un),
        fromSide: cn,
        toSide: un
      };
    const h = g(_);
    return {
      edge: _,
      fromPos: d(
        h.from,
        _.from.node,
        _.id,
        s,
        (p) => ($) => {
          const m = se($.to.node)(u);
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just") {
            const N = ct(4);
            if (p === "South" || p === "North")
              return m._1.position._1 * N + m._1.size._1 * N / 2;
            if (p === "East" || p === "West")
              return m._1.position._2 * N + m._1.size._2 * N / 2;
          }
          f();
        },
        (p) => p.from
      ),
      toPos: d(
        h.to,
        _.to.node,
        _.id,
        i,
        (p) => ($) => {
          const m = se($.from.node)(u);
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just") {
            const N = ct(4);
            if (p === "South" || p === "North")
              return m._1.position._1 * N + m._1.size._1 * N / 2;
            if (p === "East" || p === "West")
              return m._1.position._2 * N + m._1.size._2 * N / 2;
          }
          f();
        },
        (p) => p.to
      ),
      fromSide: h.from,
      toSide: h.to
    };
  })(t));
}, ha = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ze = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Gd = /* @__PURE__ */ (() => {
  const t = On.unfoldr(De);
  return (n) => t(Wn("IterNode", n, Qe));
})(), Ai = (t) => (n) => t.gapTop + 1 * ct(4) + ct(n) * 2.5 * ct(4), Id = (t) => (n) => {
  const e = ha(n.edge.id)(t);
  if (e.tag === "Just") {
    if (e._1.partner.tag === "Just")
      return b("Just", { slot1Y: Ai(e._1)(e._1.slot), splitX: e._1.partner._1.splitX, slot2Y: Ai(e._1)(e._1.partner._1.slot) });
    if (e._1.partner.tag === "Nothing")
      return T;
    f();
  }
  if (e.tag === "Nothing")
    return T;
  f();
}, Pd = (t) => (n) => {
  const e = J((r) => (o) => Y(G)(o.node)(o)(r))(Q)(n);
  return Cn(Pt((r) => (o) => {
    const i = Ze(o.node)(e);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just") {
      const s = i._1;
      return Pt((u) => (c) => {
        const a = o.edges.length, g = ct(4), l = s.position._1 * g, d = s.position._2 * g, _ = s.size._2 * g, h = ct((2 * a | 0) + 1 | 0), p = d + _ * ct(a - u | 0) / h, $ = d + _ * ct((a + 1 | 0) + u | 0) / h, m = l - g * 2.5 * ct(u + 1 | 0), N = [
          { start: L(l, p), end: L(m, p), direction: Ht },
          { start: L(m, p), end: L(m, $), direction: Ot },
          { start: L(m, $), end: L(l, $), direction: Ht }
        ];
        return { edge: c.id, segments: N, bends: $n((v) => (w) => v.end, N, Gt(1, 3, N)), bendType: [], jumps: [], reversed: !1 };
      })(o.edges);
    }
    f();
  })(O((r) => ({ node: r._1, edges: r._2 }))(Gd(J((r) => (o) => yt(G)(fn)(o.from.node)([
    o
  ])(r))(Q)(t)))));
}, Ad = (t) => (n) => {
  const e = J((i) => (s) => Y(G)(s.node)(s)(i))(Q)(n), r = (i) => {
    const s = Ze(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.position._1;
    f();
  }, o = (i) => {
    const s = Ze(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.layer;
    f();
  };
  return Lt((i) => (s) => {
    const u = rt.compare(o(i.edge.from.node))(o(s.edge.from.node));
    if (u === "EQ") {
      const c = pt.compare(r(i.edge.from.node))(r(s.edge.from.node));
      return c === "EQ" ? pt.compare(r(i.edge.to.node))(r(s.edge.to.node)) : c;
    }
    return u;
  })(t);
}, Nn = (t) => {
  const n = ct(4);
  return { x: t.position._1 * n - 2, y: t.position._2 * n - 2, w: t.size._1 * n + 4, h: t.size._2 * n + 4 };
}, Rd = (t) => t.from.node === t.to.node, Fd = (t) => (n) => (e) => (r) => {
  const o = vd(e)(xd(t)(n)(e)(r.fromSide)(r.fromPos)(r.toSide)(r.toPos));
  return {
    edge: r.edge.id,
    segments: o,
    bends: $n((i) => (s) => i.end, o, Gt(1, o.length, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, Bd = (t) => (n) => (e) => (r) => {
  const o = [
    { start: L(r.fromPos._1, r.fromPos._2), end: L(r.fromPos._1, t.slot1Y), direction: Ot },
    { start: L(r.fromPos._1, t.slot1Y), end: L(t.splitX, t.slot1Y), direction: Ht },
    { start: L(t.splitX, t.slot1Y), end: L(t.splitX, t.slot2Y), direction: Ot },
    { start: L(t.splitX, t.slot2Y), end: L(r.toPos._1, t.slot2Y), direction: Ht },
    { start: L(r.toPos._1, t.slot2Y), end: L(r.toPos._1, r.toPos._2), direction: Ot }
  ];
  return {
    edge: r.edge.id,
    segments: o,
    bends: $n((i) => (s) => i.end, o, Gt(1, 5, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, Qd = (t) => (n) => (e) => {
  const r = Ze(t.edge.from.node)(e);
  if (r.tag === "Just") {
    const i = Ze(t.edge.to.node)(e);
    return i.tag === "Just" ? gt(
      (s) => !(s.h === Nn(r._1).h && s.w === Nn(r._1).w && s.x === Nn(r._1).x && s.y === Nn(r._1).y) && !(s.h === Nn(i._1).h && s.w === Nn(i._1).w && s.x === Nn(i._1).x && s.y === Nn(i._1).y),
      n
    ) : gt((s) => !(s.h === Nn(r._1).h && s.w === Nn(r._1).w && s.x === Nn(r._1).x && s.y === Nn(r._1).y), n);
  }
  const o = Ze(t.edge.to.node)(e);
  return o.tag === "Just" ? gt((i) => !(i.h === Nn(o._1).h && i.w === Nn(o._1).w && i.x === Nn(o._1).x && i.y === Nn(o._1).y), n) : gt((i) => !0, n);
}, Dd = (t) => (n) => {
  const e = ha(n.edge.id)(t);
  if (e.tag === "Just")
    return b("Just", Ai(e._1)(e._1.slot));
  if (e.tag === "Nothing")
    return T;
  f();
}, Wd = (t) => (n) => (e) => (r) => (o) => {
  const i = J((a) => (g) => Y(G)(g.node)(g)(a))(Q)(n), s = Cd(n), u = da(gt((a) => a.from.node !== a.to.node, t))(n)(e)(r)(o), c = fa(u)(n);
  return [
    ...Pd(gt(Rd, t))(n),
    ...J((a) => (g) => {
      const l = Qd(g)(s)(i), d = [...l, ...a.edgeObstacles], _ = Id(c)(g), h = (() => {
        if (_.tag === "Just")
          return Bd(_._1)(l)(d)(g);
        if (_.tag === "Nothing")
          return Fd(Dd(c)(g))(l)(d)(g);
        f();
      })();
      return { results: [...a.results, h], edgeObstacles: [...a.edgeObstacles, ...hd(h.segments)] };
    })({ results: [], edgeObstacles: [] })(Ad(u)(n)).results
  ];
}, Je = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ve = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, qd = (t) => (n) => (e) => {
  if (t.start._1 !== n.start._1)
    return T;
  const r = ve(Je(t.start._2)(t.end._2))(Je(n.start._2)(n.end._2)), o = Je(ve(t.start._2)(t.end._2))(ve(n.start._2)(n.end._2));
  return r < o ? b("Just", { position: L(t.start._1, (r + o) / 2), crossingEdge: e }) : T;
}, Hd = (t) => (n) => (e) => {
  if (t.start._2 !== n.start._2)
    return T;
  const r = ve(Je(t.start._1)(t.end._1))(Je(n.start._1)(n.end._1)), o = Je(ve(t.start._1)(t.end._1))(ve(n.start._1)(n.end._1));
  return r < o ? b("Just", { position: L((r + o) / 2, t.start._2), crossingEdge: e }) : T;
}, Od = (t) => (n) => (e) => {
  if (t.direction === "H")
    return Hd(t)(n)(e);
  if (t.direction === "V")
    return qd(t)(n)(e);
  f();
}, zd = (t) => (n) => (e) => {
  const r = t + 1 | 0, o = r < 1 ? e : Gt(r, e.length, e);
  return bt(n.segments)((i) => bt(o)((s) => vt((u) => Od(i)(u)(s.edge))(gt(
    (u) => u.direction === "H" ? i.direction === "H" : u.direction === "V" && i.direction === "V",
    s.segments
  ))));
}, Vd = (t) => (n) => (e) => n.start._1 > Je(t.start._1)(t.end._1) && n.start._1 < ve(t.start._1)(t.end._1) && t.start._2 > Je(n.start._2)(n.end._2) && t.start._2 < ve(n.start._2)(n.end._2) ? b("Just", { position: L(n.start._1, t.start._2), crossingEdge: e }) : T, Yd = (t) => (n) => bt(gt((e) => e.direction === "H", t.segments))((e) => bt(n)((r) => vt((o) => Vd(e)(o)(r.edge))(gt(
  (o) => o.direction === "V",
  r.segments
)))), Xd = (t) => (n) => (e) => [
  ...Yd(n)(gt((r) => r.edge !== n.edge, e)),
  ...zd(t)(n)(e)
], Lu = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, pa = (t) => _n(3)(t) === "$d:", Ud = (t) => (n) => (e) => J((r) => (o) => {
  const i = Lu(o.from.node)(t), s = (() => {
    if (i.tag === "Nothing")
      return 0;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = Lu(o.to.node)(t), c = (() => {
    if (u.tag === "Nothing")
      return -s;
    if (u.tag === "Just")
      return u._1 - s | 0;
    f();
  })();
  if (c <= 1)
    return { ...r, edges: [...r.edges, o], chains: [...r.chains, { edgeId: o.id, nodes: [o.from.node, o.to.node] }] };
  const a = o.id, g = O((d) => "$d:" + a + ":" + an(d))(Xt(1, c - 1 | 0)), l = [o.from.node, ...g, o.to.node];
  return {
    ...r,
    layers: J((d) => (_) => {
      const h = _._2, p = _g(s + _._1 | 0)(($) => [...$, h])(d);
      if (p.tag === "Nothing")
        return d;
      if (p.tag === "Just")
        return p._1;
      f();
    })(r.layers)($n(gr, Xt(1, c - 1 | 0), g)),
    edges: [
      ...r.edges,
      ...$n(
        (d) => (_) => ({ id: a + ":" + d + "->" + _, from: { node: d, port: o.from.port }, to: { node: _, port: o.to.port } }),
        l,
        Gt(1, l.length, l)
      )
    ],
    chains: [...r.chains, { edgeId: o.id, nodes: l }]
  };
})({ layers: e, edges: [], chains: [] })(n), bo = /* @__PURE__ */ (() => {
  const t = {
    eq: (n) => (e) => n._1 === e._1 && (n._2 === "North" ? e._2 === "North" : n._2 === "South" ? e._2 === "South" : n._2 === "East" ? e._2 === "East" : n._2 === "West" && e._2 === "West")
  };
  return {
    compare: (n) => (e) => {
      const r = G.compare(n._1)(e._1);
      if (r === "LT")
        return dn;
      if (r === "GT")
        return hn;
      if (n._2 === "North")
        return e._2 === "North" ? yn : dn;
      if (e._2 === "North")
        return hn;
      if (n._2 === "South")
        return e._2 === "South" ? yn : dn;
      if (e._2 === "South")
        return hn;
      if (n._2 === "East")
        return e._2 === "East" ? yn : dn;
      if (e._2 === "East")
        return hn;
      if (n._2 === "West" && e._2 === "West")
        return yn;
      f();
    },
    Eq0: () => t
  };
})(), Md = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = bo.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Kd = /* @__PURE__ */ jt(G)(Bt), di = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, jd = /* @__PURE__ */ jt(bo)(Bt), ku = /* @__PURE__ */ (() => {
  const t = On.unfoldr(De);
  return (n) => t(Wn("IterNode", n, Qe));
})(), tr = (t) => (n) => (e) => (r) => {
  const o = Md(L(n, e))(t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just")
    return o._1;
  f();
}, $a = (t) => (n) => (e) => {
  const r = Kd(Cn(O((s) => Pt((u) => (c) => L(c, u))(s))(t))), o = (s, u) => {
    if (s === "South") {
      const c = di(u.to.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    if (s === "North") {
      const c = di(u.from.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    return 0;
  }, i = (s) => J((u) => (c) => bn(
    bo.compare,
    Ln,
    jd(O((a) => L(L(a._1, s), a._2))(ku(la({
      lo: 0,
      hi: (() => {
        const a = di(c._1)(e);
        if (a.tag === "Just")
          return a._1._1;
        if (a.tag === "Nothing")
          return _n(3)(c._1) === "$d:" ? 0 : 1;
        f();
      })()
    })(O((a) => a.id)(Lt((a) => (g) => rt.compare(o(s, a))(o(s, g)))(c._2)))))),
    u
  ))(Q)(ku(J((u) => (c) => c.from.node === c.to.node ? u : s === "South" ? yt(G)(fn)(c.from.node)([c])(u) : s === "North" ? yt(G)(fn)(c.to.node)([c])(u) : u)(Q)(n)));
  return bn(bo.compare, Ln, i(un), i(cn));
}, ma = (t) => t, Na = (t) => t, Ja = (t) => t, Zd = /* @__PURE__ */ J((t) => (n) => Y(G)(n)()(t))(Q), th = /* @__PURE__ */ (() => {
  const t = On.unfoldr((n) => {
    if (n.tag === "Nil")
      return T;
    if (n.tag === "Cons")
      return b("Just", L(n._1, n._2));
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
    return e(n, zt);
  })());
})(), Z = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Sn = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ne = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, jn = /* @__PURE__ */ jt(G)(Bt), hi = /* @__PURE__ */ kg(G), Ri = /* @__PURE__ */ (() => {
  const t = On.unfoldr(De);
  return (n) => t(Wn("IterNode", n, Qe));
})(), nh = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, eh = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = rt.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, bu = /* @__PURE__ */ Ja("VDown"), Eu = /* @__PURE__ */ Ja("VUp"), rh = /* @__PURE__ */ Na("ForwardPhase"), oh = /* @__PURE__ */ Na("StackPhase"), xu = /* @__PURE__ */ ma("HRight"), Cu = /* @__PURE__ */ ma("HLeft"), Su = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
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
}, ih = (t) => (n) => (e) => {
  const r = J((u) => (c) => yt(G)(Zt)(c.tgt)(1)(u))(Q)(t), o = th(Zd([
    ...O((u) => u.src)(t),
    ...O((u) => u.tgt)(t),
    ...(() => {
      const u = (c, a) => {
        if (c.tag === "Leaf")
          return a;
        if (c.tag === "Node")
          return u(c._5, qt("Cons", c._4, u(c._6, a)));
        f();
      };
      return Et(Mt.foldr, u(n, zt));
    })()
  ])), i = J((u) => (c) => yt(G)(fn)(c.src)([{ target: c.tgt, sep: c.sep }])(u))(Q)(t);
  return ((u) => (c) => (a) => {
    let g = u, l = c, d = a, _ = !0, h;
    for (; _; ) {
      const p = g, $ = l, m = d, N = Wt((v) => T, (v) => (w) => b("Just", { head: v, tail: w }), p);
      if (N.tag === "Nothing") {
        _ = !1, h = m;
        continue;
      }
      if (N.tag === "Just") {
        const v = Z(N._1.head)(m), w = (() => {
          if (v.tag === "Nothing")
            return 0;
          if (v.tag === "Just")
            return v._1;
          f();
        })(), y = J((k) => (E) => {
          const I = Z(E.target)(k.result), D = w + E.sep, z = Z(E.target)(k.indeg), U = (() => {
            if (z.tag === "Nothing")
              return -1;
            if (z.tag === "Just")
              return z._1 - 1 | 0;
            f();
          })();
          return {
            newQueue: U === 0 ? [...k.newQueue, E.target] : k.newQueue,
            result: Y(G)(E.target)((() => {
              if (I.tag === "Nothing")
                return D;
              if (I.tag === "Just") {
                if (e === "VDown")
                  return Sn(I._1)(D);
                if (e === "VUp")
                  return ne(I._1)(D);
              }
              f();
            })())(k.result),
            indeg: Y(G)(E.target)(U)(k.indeg)
          };
        })({ newQueue: [], result: m, indeg: $ })((() => {
          const k = Z(N._1.head)(i);
          if (k.tag === "Nothing")
            return [];
          if (k.tag === "Just")
            return k._1;
          f();
        })());
        g = [...N._1.tail, ...y.newQueue], l = y.indeg, d = y.result;
        continue;
      }
      f();
    }
    return h;
  })(gt(
    (u) => {
      const c = Z(u)(r);
      if (c.tag === "Nothing")
        return !0;
      if (c.tag === "Just")
        return c._1 === 0;
      f();
    },
    o
  ))(Q)(J((u) => (c) => Y(G)(c)(0)(u))(Q)(o));
}, sh = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, qt("Cons", i._4, n(i._6, s)));
    f();
  }, e = Et(Mt.foldr, n(t, zt)), r = J(Sn)(999999)(e);
  if (r === 0 || e.length === 0)
    return t;
  const o = (i) => {
    if (i.tag === "Leaf")
      return Q;
    if (i.tag === "Node")
      return Dt("Node", i._1, i._2, i._3, i._4 - r, o(i._5), o(i._6));
    f();
  };
  return o(t);
}, va = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, qt("Cons", i._4, n(i._6, s)));
    f();
  }, e = n(t, zt), r = (i) => (s) => {
    let u = i, c = s, a = !0, g;
    for (; a; ) {
      const l = u, d = c;
      if (d.tag === "Nil") {
        a = !1, g = l;
        continue;
      }
      if (d.tag === "Cons") {
        u = ne(l)(d._1), c = d._2;
        continue;
      }
      f();
    }
    return g;
  }, o = (i) => (s) => {
    let u = i, c = s, a = !0, g;
    for (; a; ) {
      const l = u, d = c;
      if (d.tag === "Nil") {
        a = !1, g = l;
        continue;
      }
      if (d.tag === "Cons") {
        u = Sn(l)(d._1), c = d._2;
        continue;
      }
      f();
    }
    return g;
  };
  return r(-999999)(e) - o(999999)(e);
}, Jr = (t) => (n) => ((r) => (o) => {
  let i = r, s = o, u = !0, c;
  for (; u; ) {
    const a = i, g = s;
    if (a === n) {
      u = !1, c = g;
      continue;
    }
    i = (() => {
      const l = Z(a)(t.align);
      if (l.tag === "Nothing")
        return n;
      if (l.tag === "Just")
        return l._1;
      f();
    })(), s = [...g, a];
  }
  return c;
})((() => {
  const r = Z(n)(t.align);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just")
    return r._1;
  f();
})())([n]), uh = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (g) => {
  const l = (x, C, q) => {
    const S = x.from.node === C ? x.from.port : x.to.node === C ? x.to.port : T;
    if (S.tag === "Just") {
      const F = Z(C)(o);
      if (F.tag === "Just") {
        const W = ln((K) => K.id === S._1)(F._1);
        if (W.tag === "Just") {
          const K = ct(W._1.offset) * ct(4);
          return q === "North" || q === "South" ? K : 0;
        }
        if (W.tag === "Nothing") {
          const K = Z(C)(r), V = tr(s)(x.id)(q)((() => {
            if (K.tag === "Nothing")
              return 0.5;
            if (K.tag === "Just")
              return K._1._1 / 2;
            f();
          })());
          return q === "North" || q === "South" ? V : 0;
        }
        f();
      }
      if (F.tag === "Nothing") {
        const W = Z(C)(r), K = tr(s)(x.id)(q)((() => {
          if (W.tag === "Nothing")
            return 0.5;
          if (W.tag === "Just")
            return W._1._1 / 2;
          f();
        })());
        return q === "North" || q === "South" ? K : 0;
      }
      f();
    }
    if (S.tag === "Nothing") {
      const F = Z(C)(r), W = tr(s)(x.id)(q)((() => {
        if (F.tag === "Nothing")
          return 0.5;
        if (F.tag === "Just")
          return F._1._1 / 2;
        f();
      })());
      return q === "North" || q === "South" ? W : 0;
    }
    f();
  }, d = (x, C) => {
    if (x.from.node === C) {
      if (g === "HRight")
        return cn;
      if (g === "HLeft")
        return un;
      f();
    }
    if (g === "HRight")
      return un;
    if (g === "HLeft")
      return cn;
    f();
  }, _ = (x, C, q) => J((S) => (F) => Y(G)(F)((() => {
    const W = Z(F)(S);
    if (W.tag === "Nothing")
      return 0 + C;
    if (W.tag === "Just")
      return W._1 + C;
    f();
  })())(S))(q)(Jr(c)(x)), h = (() => {
    if (g === "HRight")
      return e;
    if (g === "HLeft")
      return vn(e);
    f();
  })(), p = (x) => {
    const C = Z(x)(r);
    if (C.tag === "Nothing")
      return 1;
    if (C.tag === "Just")
      return C._1._1;
    f();
  }, $ = jn(Cn(Pt((x) => (C) => O((q) => L(q, x))(C))(e))), m = (x, C) => _n(3)(x) === "$d:" && _n(3)(C) === "$d:" || _n(3)(x) === "$d:" || _n(3)(C) === "$d:" ? 10 : ct(t.nodeGap), N = J((x) => (C) => hi((q) => b(
    "Just",
    [
      ...(() => {
        if (q.tag === "Nothing")
          return [];
        if (q.tag === "Just")
          return q._1;
        f();
      })(),
      C
    ]
  ))(C.to.node)(x))(Q)(i), v = J((x) => (C) => hi((q) => b(
    "Just",
    [
      ...(() => {
        if (q.tag === "Nothing")
          return [];
        if (q.tag === "Just")
          return q._1;
        f();
      })(),
      C
    ]
  ))(C.from.node)(x))(Q)(i), w = Cn(e), y = J((x) => (C) => {
    const q = Z(C)(c.root), S = (() => {
      if (q.tag === "Nothing")
        return C;
      if (q.tag === "Just")
        return q._1;
      f();
    })();
    return C === S ? x : hi((F) => b(
      "Just",
      (() => {
        if (F.tag === "Nothing")
          return !0;
        if (F.tag === "Just")
          return F._1;
        f();
      })() && _n(3)(C) === "$d:"
    ))(S)(x);
  })(jn(O((x) => L(x, !0))(or(G.compare)((() => {
    const x = (C, q) => {
      if (C.tag === "Leaf")
        return q;
      if (C.tag === "Node")
        return x(C._5, qt("Cons", C._4, x(C._6, q)));
      f();
    };
    return Et(Mt.foldr, x(c.root, zt));
  })()))))(w), k = (x, C) => {
    const q = x.free, S = Z(q)(c.root), F = (() => {
      if (S.tag === "Nothing")
        return q;
      if (S.tag === "Just")
        return S._1;
      f();
    })(), W = Z(F)(y), K = (() => {
      if (W.tag === "Nothing")
        return !0;
      if (W.tag === "Just")
        return W._1;
      f();
    })();
    return J((V) => (B) => {
      if (V.edge.tag === "Just")
        return V;
      if (V.edge.tag === "Nothing") {
        if ((() => {
          const st = Z(F)(C.su);
          return !K && (() => {
            const _t = Z(B.from.node)($);
            return B.from.node !== B.to.node && (() => {
              const At = Z(B.to.node)($);
              return (() => {
                if (_t.tag === "Nothing")
                  return -1;
                if (_t.tag === "Just")
                  return _t._1;
                f();
              })() === (() => {
                if (At.tag === "Nothing")
                  return -1;
                if (At.tag === "Just")
                  return At._1;
                f();
              })();
            })();
          })() || (() => {
            if (st.tag === "Nothing")
              return !1;
            if (st.tag === "Just")
              return st._1;
            f();
          })();
        })())
          return V;
        const nt = B.from.node === q ? B.to.node : B.from.node, M = Z(nt)(c.root), tt = (() => {
          if (M.tag === "Nothing")
            return nt;
          if (M.tag === "Just")
            return M._1;
          f();
        })(), ot = tt !== F;
        return ot && (() => {
          const st = Z(tt)(C.blockFinished);
          if (st.tag === "Nothing")
            return !1;
          if (st.tag === "Just")
            return st._1;
          f();
        })() ? { ...V, edge: b("Just", B), hasEdges: !0 } : { ...V, hasEdges: V.hasEdges || ot };
      }
      f();
    })({ edge: T, hasEdges: !1 })((() => {
      if (x.isRoot) {
        if (g === "HRight") {
          const V = Z(q)(N);
          if (V.tag === "Nothing")
            return [];
          if (V.tag === "Just")
            return V._1;
          f();
        }
        if (g === "HLeft") {
          const V = Z(q)(v);
          if (V.tag === "Nothing")
            return [];
          if (V.tag === "Just")
            return V._1;
        }
        f();
      }
      if (g === "HRight") {
        const V = Z(q)(v);
        if (V.tag === "Nothing")
          return [];
        if (V.tag === "Just")
          return V._1;
        f();
      }
      if (g === "HLeft") {
        const V = Z(q)(N);
        if (V.tag === "Nothing")
          return [];
        if (V.tag === "Just")
          return V._1;
      }
      f();
    })());
  }, E = (x, C, q, S) => {
    const F = (() => {
      if (a === "VDown")
        return -1e18;
      if (a === "VUp")
        return 1e18;
      f();
    })(), W = { free: C, isRoot: q }, K = k(W, S);
    if (K.edge.tag === "Nothing")
      return K.hasEdges ? { thresh: F, state: { ...S, queue: [...S.queue, W] } } : { thresh: F, state: S };
    if (K.edge.tag === "Just") {
      const V = K.edge._1.from.node === C ? K.edge._1.to.node : K.edge._1.from.node;
      return {
        thresh: (() => {
          const B = Z((() => {
            const ot = Z(V)(c.root);
            if (ot.tag === "Nothing")
              return V;
            if (ot.tag === "Just")
              return ot._1;
            f();
          })())(S.x), nt = Z(V)(u), M = Z(C)(u), tt = (() => {
            if (B.tag === "Just")
              return B._1;
            if (B.tag === "Nothing")
              return T;
            f();
          })();
          return (() => {
            if (tt.tag === "Nothing")
              return 0;
            if (tt.tag === "Just")
              return tt._1;
            f();
          })() + (() => {
            if (nt.tag === "Nothing")
              return 0;
            if (nt.tag === "Just")
              return nt._1;
            f();
          })() + l(
            K.edge._1,
            V,
            (() => {
              if (q) {
                if (g === "HRight")
                  return cn;
                if (g === "HLeft")
                  return un;
                f();
              }
              if (g === "HRight")
                return un;
              if (g === "HLeft")
                return cn;
              f();
            })()
          ) - (() => {
            if (M.tag === "Nothing")
              return 0;
            if (M.tag === "Just")
              return M._1;
            f();
          })() - l(
            K.edge._1,
            C,
            (() => {
              if (q) {
                if (g === "HRight")
                  return un;
                if (g === "HLeft")
                  return cn;
                f();
              }
              if (g === "HRight")
                return cn;
              if (g === "HLeft")
                return un;
              f();
            })()
          );
        })(),
        state: {
          ...S,
          su: Y(G)((() => {
            const B = Z(K.edge._1.from.node)(c.root);
            if (B.tag === "Nothing")
              return K.edge._1.from.node;
            if (B.tag === "Just")
              return B._1;
            f();
          })())(!0)(Y(G)((() => {
            const B = Z(K.edge._1.to.node)(c.root);
            if (B.tag === "Nothing")
              return K.edge._1.to.node;
            if (B.tag === "Just")
              return B._1;
            f();
          })())(!0)(S.su))
        }
      };
    }
    f();
  }, I = (x, C, q, S) => {
    const F = C === x, W = Z(C)(c.align), K = (() => {
      if (W.tag === "Nothing")
        return C === x;
      if (W.tag === "Just")
        return W._1 === x;
      f();
    })();
    if (!(F || K))
      return { thresh: q, state: S };
    const V = (() => {
      if (a === "VDown")
        return F && q <= -1e18;
      if (a === "VUp")
        return F && q >= 1e18;
      f();
    })() ? E(x, C, !0, S) : { thresh: q, state: S };
    return (() => {
      if (a === "VDown")
        return V.thresh <= -1e18 && K;
      if (a === "VUp")
        return V.thresh >= 1e18 && K;
      f();
    })() ? E(x, C, !1, V.state) : V;
  }, D = (x) => (C) => (q) => {
    const S = Z(q)(n.nodeIndex), F = (() => {
      if (S.tag === "Nothing")
        return 0;
      if (S.tag === "Just")
        return S._1;
      f();
    })(), W = ln((M) => In(te)(q)(M))(h), K = (() => {
      if (W.tag === "Nothing")
        return [];
      if (W.tag === "Just")
        return W._1;
      f();
    })(), V = K.length;
    if ((() => {
      if (a === "VDown")
        return F <= 0;
      if (a === "VUp")
        return F >= (V - 1 | 0);
      f();
    })()) {
      const M = I(x, q, C.thresh, C.st);
      return { ...C, st: M.state, thresh: M.thresh };
    }
    const B = (() => {
      if (a === "VDown")
        return F - 1 | 0;
      if (a === "VUp")
        return F + 1 | 0;
      f();
    })(), nt = B >= 0 && B < K.length ? b("Just", K[B]) : T;
    if (nt.tag === "Nothing")
      return C;
    if (nt.tag === "Just") {
      const M = Z(nt._1)(c.root), tt = (() => {
        if (M.tag === "Nothing")
          return nt._1;
        if (M.tag === "Just")
          return M._1;
        f();
      })(), ot = I(x, q, C.thresh, z(tt)(C.st)), st = (() => {
        const tn = Z(x)(ot.state.sink);
        if (tn.tag === "Nothing")
          return x === x;
        if (tn.tag === "Just")
          return tn._1 === x;
        f();
      })() ? {
        ...ot.state,
        sink: Y(G)(x)((() => {
          const tn = Z(tt)(ot.state.sink);
          if (tn.tag === "Nothing")
            return tt;
          if (tn.tag === "Just")
            return tn._1;
          f();
        })())(ot.state.sink)
      } : ot.state, _t = Z(tt)(st.sink), At = (() => {
        if (_t.tag === "Nothing")
          return tt;
        if (_t.tag === "Just")
          return _t._1;
        f();
      })(), Tt = Z(x)(st.sink), Vt = (() => {
        if (Tt.tag === "Nothing")
          return x;
        if (Tt.tag === "Just")
          return Tt._1;
        f();
      })();
      if (Vt === At) {
        const tn = Z(tt)(st.x), zn = (() => {
          if (tn.tag === "Just")
            return tn._1;
          if (tn.tag === "Nothing")
            return T;
          f();
        })(), qe = (() => {
          if (zn.tag === "Nothing")
            return 0;
          if (zn.tag === "Just")
            return zn._1;
          f();
        })(), ke = Z(x)(st.x), oe = (() => {
          if (ke.tag === "Just")
            return ke._1;
          if (ke.tag === "Nothing")
            return T;
          f();
        })(), Ct = (() => {
          if (oe.tag === "Nothing")
            return 0;
          if (oe.tag === "Just")
            return oe._1;
          f();
        })(), St = m(q, nt._1), be = Z(nt._1)(u), Ee = Z(q)(u), He = (() => {
          if (be.tag === "Nothing")
            return 0;
          if (be.tag === "Just")
            return be._1;
          f();
        })() - (() => {
          if (Ee.tag === "Nothing")
            return 0;
          if (Ee.tag === "Just")
            return Ee._1;
          f();
        })();
        if (a === "VDown") {
          const ie = ne(qe + He + p(nt._1) + St)(ot.thresh);
          return {
            st: { ...st, x: Y(G)(x)(b("Just", C.initial ? ie : ne(Ct)(ie)))(st.x) },
            initial: !1,
            thresh: ot.thresh
          };
        }
        if (a === "VUp") {
          const ie = Sn(qe + He - St - p(q))(ot.thresh);
          return {
            st: { ...st, x: Y(G)(x)(b("Just", C.initial ? ie : Sn(Ct)(ie)))(st.x) },
            initial: !1,
            thresh: ot.thresh
          };
        }
        f();
      }
      const ht = Z(tt)(st.x), mt = (() => {
        if (ht.tag === "Just")
          return ht._1;
        if (ht.tag === "Nothing")
          return T;
        f();
      })(), lt = (() => {
        if (mt.tag === "Nothing")
          return 0;
        if (mt.tag === "Just")
          return mt._1;
        f();
      })(), dt = Z(x)(st.x), it = (() => {
        if (dt.tag === "Just")
          return dt._1;
        if (dt.tag === "Nothing")
          return T;
        f();
      })(), ut = (() => {
        if (it.tag === "Nothing")
          return 0;
        if (it.tag === "Just")
          return it._1;
        f();
      })(), $t = ct(t.nodeGap), Nt = Z(q)(u), Rt = Z(nt._1)(u), It = (() => {
        if (Nt.tag === "Nothing")
          return 0;
        if (Nt.tag === "Just")
          return Nt._1;
        f();
      })() - (() => {
        if (Rt.tag === "Nothing")
          return 0;
        if (Rt.tag === "Just")
          return Rt._1;
        f();
      })();
      return {
        st: {
          ...st,
          classEdges: [
            ...st.classEdges,
            {
              src: Vt,
              tgt: At,
              sep: (() => {
                if (a === "VDown")
                  return ut + It - lt - p(nt._1) - $t;
                if (a === "VUp")
                  return ut + It + p(q) + $t - lt;
                f();
              })()
            }
          ]
        },
        initial: C.initial,
        thresh: ot.thresh
      };
    }
    f();
  }, z = (x) => (C) => {
    const q = Z(x)(C.x), S = (() => {
      if (q.tag === "Just")
        return q._1;
      if (q.tag === "Nothing")
        return T;
      f();
    })();
    if (S.tag === "Just")
      return C;
    if (S.tag === "Nothing") {
      const F = J(D(x))({
        st: { ...C, x: Y(G)(x)(b("Just", 0))(C.x) },
        initial: !0,
        thresh: (() => {
          if (a === "VDown")
            return -1e18;
          if (a === "VUp")
            return 1e18;
          f();
        })()
      })(Jr(c)(x));
      return { ...F.st, blockFinished: Y(G)(x)(!0)(F.st.blockFinished) };
    }
    f();
  }, U = J((x) => (C) => J((q) => (S) => {
    const F = Z(S)(c.root), W = (() => {
      if (F.tag === "Nothing")
        return S;
      if (F.tag === "Just")
        return F._1;
      f();
    })();
    return W === S ? z(W)(q) : q;
  })(x)((() => {
    if (a === "VDown")
      return C;
    if (a === "VUp")
      return vn(C);
    f();
  })()))({
    x: jn(O((x) => L(x, T))(w)),
    sink: jn(O((x) => L(x, x))(w)),
    classEdges: [],
    su: Q,
    blockFinished: Q,
    queue: []
  })(h), P = ih(U.classEdges)(U.sink)(a), R = (x, C, q, S) => {
    const F = Z(C)(S), W = Z(C)(u);
    return (() => {
      if (F.tag === "Nothing")
        return 0;
      if (F.tag === "Just")
        return F._1;
      f();
    })() + (() => {
      if (W.tag === "Nothing")
        return 0;
      if (W.tag === "Just")
        return W._1;
      f();
    })() + l(x, C, q);
  }, j = jn(O((x) => L(x, !0))(or(G.compare)((() => {
    const x = (C, q) => {
      if (C.tag === "Leaf")
        return q;
      if (C.tag === "Node")
        return x(C._5, qt("Cons", C._4, x(C._6, q)));
      f();
    };
    return Et(Mt.foldr, x(c.root, zt));
  })()))), et = (x) => (C) => (q) => {
    const S = k(q, { su: C.su, blockFinished: j }), F = {
      phase: x,
      ppFree: q.free,
      ppIsRoot: q.isRoot,
      edgeId: T,
      delta: 0,
      avail: 0,
      shift: 0,
      freeSu: (() => {
        const W = Z((() => {
          const K = Z(q.free)(c.root);
          if (K.tag === "Nothing")
            return q.free;
          if (K.tag === "Just")
            return K._1;
          f();
        })())(C.su);
        if (W.tag === "Nothing")
          return !1;
        if (W.tag === "Just")
          return W._1;
        f();
      })(),
      hasEdges: S.hasEdges,
      candCount: (() => {
        if (q.isRoot) {
          if (g === "HRight") {
            const W = Z(q.free)(N);
            if (W.tag === "Nothing")
              return 0;
            if (W.tag === "Just")
              return W._1.length;
            f();
          }
          if (g === "HLeft") {
            const W = Z(q.free)(v);
            if (W.tag === "Nothing")
              return 0;
            if (W.tag === "Just")
              return W._1.length;
          }
          f();
        }
        if (g === "HRight") {
          const W = Z(q.free)(v);
          if (W.tag === "Nothing")
            return 0;
          if (W.tag === "Just")
            return W._1.length;
          f();
        }
        if (g === "HLeft") {
          const W = Z(q.free)(N);
          if (W.tag === "Nothing")
            return 0;
          if (W.tag === "Just")
            return W._1.length;
        }
        f();
      })()
    };
    if (S.edge.tag === "Nothing")
      return { ...C, stack: [...C.stack, q], trace: [...C.trace, F], x: C.x };
    if (S.edge.tag === "Just") {
      const W = S.edge._1.from.node === q.free ? L(S.edge._1.from.node, S.edge._1.to.node) : L(S.edge._1.to.node, S.edge._1.from.node), K = R(S.edge._1, W._1, d(S.edge._1, W._1), C.x) - R(S.edge._1, W._2, d(S.edge._1, W._2), C.x), V = Z(W._1)(c.root), B = (() => {
        if (V.tag === "Nothing")
          return W._1;
        if (V.tag === "Just")
          return V._1;
        f();
      })(), nt = { ...F, edgeId: b("Just", S.edge._1.id), delta: K };
      if (K > 0 && K < 1e300) {
        const M = J((st) => (_t) => {
          const At = Z(_t)($), Tt = (() => {
            if (At.tag === "Nothing")
              return -1;
            if (At.tag === "Just")
              return At._1;
            f();
          })();
          if (Tt >= 0 && Tt < e.length) {
            const mt = e[Tt], lt = Z(_t)(n.nodeIndex), dt = (() => {
              if (lt.tag === "Nothing")
                return -2;
              if (lt.tag === "Just")
                return lt._1 - 1 | 0;
              f();
            })();
            return dt >= 0 && dt < mt.length ? Sn(st)((() => {
              const it = Z(_t)(C.x), ut = Z(_t)(u), $t = Z(mt[dt])(C.x), Nt = Z(mt[dt])(u);
              return (() => {
                if (it.tag === "Nothing")
                  return 0;
                if (it.tag === "Just")
                  return it._1;
                f();
              })() + (() => {
                if (ut.tag === "Nothing")
                  return 0;
                if (ut.tag === "Just")
                  return ut._1;
                f();
              })() - ((() => {
                if ($t.tag === "Nothing")
                  return 0;
                if ($t.tag === "Just")
                  return $t._1;
                f();
              })() + (() => {
                if (Nt.tag === "Nothing")
                  return 0;
                if (Nt.tag === "Just")
                  return Nt._1;
                f();
              })() + p(mt[dt]) + m(_t, mt[dt]));
            })()) : st;
          }
          const Vt = Z(_t)(n.nodeIndex), ht = (() => {
            if (Vt.tag === "Nothing")
              return -2;
            if (Vt.tag === "Just")
              return Vt._1 - 1 | 0;
            f();
          })();
          return ht >= 0 && ht < 0 ? Sn(st)((() => {
            const mt = Z(_t)(C.x), lt = Z(_t)(u), dt = Z([][ht])(C.x), it = Z([][ht])(u);
            return (() => {
              if (mt.tag === "Nothing")
                return 0;
              if (mt.tag === "Just")
                return mt._1;
              f();
            })() + (() => {
              if (lt.tag === "Nothing")
                return 0;
              if (lt.tag === "Just")
                return lt._1;
              f();
            })() - ((() => {
              if (dt.tag === "Nothing")
                return 0;
              if (dt.tag === "Just")
                return dt._1;
              f();
            })() + (() => {
              if (it.tag === "Nothing")
                return 0;
              if (it.tag === "Just")
                return it._1;
              f();
            })() + p([][ht]) + m(_t, [][ht]));
          })()) : st;
        })(K)(Jr(c)(B)), tt = M > 0 ? -M : 0, ot = { ...C, x: M > 0 ? _(B, tt, C.x) : C.x, trace: [...C.trace, { ...nt, avail: M, shift: tt }] };
        return M > 0 ? ot : { ...ot, stack: [...ot.stack, q] };
      }
      if (K < 0 && -K < 1e300) {
        const M = J((st) => (_t) => {
          const At = Z(_t)($), Tt = (() => {
            if (At.tag === "Nothing")
              return -1;
            if (At.tag === "Just")
              return At._1;
            f();
          })();
          if (Tt >= 0 && Tt < e.length) {
            const mt = e[Tt], lt = Z(_t)(n.nodeIndex), dt = (() => {
              if (lt.tag === "Nothing")
                return 0;
              if (lt.tag === "Just")
                return lt._1 + 1 | 0;
              f();
            })();
            return dt >= 0 && dt < mt.length ? Sn(st)((() => {
              const it = Z(mt[dt])(C.x), ut = Z(mt[dt])(u), $t = Z(_t)(C.x), Nt = Z(_t)(u);
              return (() => {
                if (it.tag === "Nothing")
                  return 0;
                if (it.tag === "Just")
                  return it._1;
                f();
              })() + (() => {
                if (ut.tag === "Nothing")
                  return 0;
                if (ut.tag === "Just")
                  return ut._1;
                f();
              })() - ((() => {
                if ($t.tag === "Nothing")
                  return 0;
                if ($t.tag === "Just")
                  return $t._1;
                f();
              })() + (() => {
                if (Nt.tag === "Nothing")
                  return 0;
                if (Nt.tag === "Just")
                  return Nt._1;
                f();
              })() + p(_t) + m(_t, mt[dt]));
            })()) : st;
          }
          const Vt = Z(_t)(n.nodeIndex), ht = (() => {
            if (Vt.tag === "Nothing")
              return 0;
            if (Vt.tag === "Just")
              return Vt._1 + 1 | 0;
            f();
          })();
          return ht >= 0 && ht < 0 ? Sn(st)((() => {
            const mt = Z([][ht])(C.x), lt = Z([][ht])(u), dt = Z(_t)(C.x), it = Z(_t)(u);
            return (() => {
              if (mt.tag === "Nothing")
                return 0;
              if (mt.tag === "Just")
                return mt._1;
              f();
            })() + (() => {
              if (lt.tag === "Nothing")
                return 0;
              if (lt.tag === "Just")
                return lt._1;
              f();
            })() - ((() => {
              if (dt.tag === "Nothing")
                return 0;
              if (dt.tag === "Just")
                return dt._1;
              f();
            })() + (() => {
              if (it.tag === "Nothing")
                return 0;
              if (it.tag === "Just")
                return it._1;
              f();
            })() + p(_t) + m(_t, [][ht]));
          })()) : st;
        })(-K)(Jr(c)(B)), tt = M > 0 ? M : 0, ot = { ...C, x: M > 0 ? _(B, tt, C.x) : C.x, trace: [...C.trace, { ...nt, avail: M, shift: tt }] };
        return M > 0 ? ot : { ...ot, stack: [...ot.stack, q] };
      }
      return { ...C, stack: [...C.stack, q], trace: [...C.trace, nt], x: C.x };
    }
    f();
  }, X = J(et(rh))({
    x: jn(O((x) => L(
      x,
      (() => {
        const C = Z(x)(c.root), q = (() => {
          if (C.tag === "Nothing")
            return x;
          if (C.tag === "Just")
            return C._1;
          f();
        })(), S = Z(q)(U.x), F = Z((() => {
          const K = Z(q)(U.sink);
          if (K.tag === "Nothing")
            return q;
          if (K.tag === "Just")
            return K._1;
          f();
        })())(P), W = (() => {
          if (S.tag === "Just")
            return S._1;
          if (S.tag === "Nothing")
            return T;
          f();
        })();
        return (() => {
          if (W.tag === "Nothing")
            return 0;
          if (W.tag === "Just")
            return W._1;
          f();
        })() + (() => {
          if (F.tag === "Nothing")
            return 0;
          if (F.tag === "Just")
            return F._1;
          f();
        })();
      })()
    ))(w)),
    su: U.su,
    stack: [],
    trace: []
  })(U.queue), A = J(et(oh))({ ...X, stack: [] })(vn(X.stack));
  return { x: A.x, queue: U.queue, trace: A.trace };
}, ch = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (g) => uh(t)(n)(e)(r)(o)(i)(s)(u)(c)(a)(g).x, ah = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = (c, a, g) => {
    const l = Z(a)(e), d = (() => {
      if (l.tag === "Nothing")
        return 0.5;
      if (l.tag === "Just")
        return l._1._1 / 2;
      f();
    })(), _ = c.from.node === a ? c.from.port : c.to.node === a ? c.to.port : T;
    if (_.tag === "Just") {
      const h = Z(a)(n);
      if (h.tag === "Just") {
        const p = ln(($) => $.id === _._1)(h._1);
        if (p.tag === "Just") {
          const $ = ct(p._1.offset) * ct(4);
          return g === "North" || g === "South" ? $ : 0;
        }
        if (p.tag === "Nothing") {
          const $ = tr(o)(c.id)(g)(d);
          return g === "North" || g === "South" ? $ : 0;
        }
        f();
      }
      if (h.tag === "Nothing") {
        const p = tr(o)(c.id)(g)(d);
        return g === "North" || g === "South" ? p : 0;
      }
      f();
    }
    if (_.tag === "Nothing") {
      const h = tr(o)(c.id)(g)(d);
      return g === "North" || g === "South" ? h : 0;
    }
    f();
  }, u = (c) => (a) => (g) => (l) => {
    let d = c, _ = a, h = g, p = l, $ = !0, m;
    for (; $; ) {
      const N = d, v = _, w = h, k = Wt((E) => T, (E) => (I) => b("Just", { head: E, tail: I }), p);
      if (k.tag === "Nothing") {
        $ = !1, m = N;
        continue;
      }
      if (k.tag === "Just") {
        const E = k._1.head, I = ln((z) => z.from.node === w && z.to.node === E || z.from.node === E && z.to.node === w)(r), D = (() => {
          if (I.tag === "Nothing")
            return v + 0;
          if (I.tag === "Just")
            return v + (s(I._1, w, I._1.from.node === w ? cn : un) - s(
              I._1,
              E,
              I._1.from.node === E ? cn : un
            ));
          f();
        })();
        d = Y(G)(E)(D)(N), _ = D, h = E, p = k._1.tail;
        continue;
      }
      f();
    }
    return m;
  };
  return J((c) => (a) => {
    const g = Wt((_) => T, (_) => (h) => b("Just", { head: _, tail: h }), Jr(t)(a)), l = (() => {
      if (g.tag === "Nothing")
        return Y(G)(a)(0)(Q);
      if (g.tag === "Just")
        return u(Y(G)(g._1.head)(0)(Q))(0)(g._1.head)(g._1.tail);
      f();
    })(), d = J((_) => (h) => ne(_)(-h._2))(0)(Ri(l));
    return J((_) => (h) => Y(G)(h._1)(h._2 + d)(_))(c)(Ri(l));
  })(Q)(or(G.compare)((() => {
    const c = (a, g) => {
      if (a.tag === "Leaf")
        return g;
      if (a.tag === "Node")
        return c(a._5, qt("Cons", a._4, c(a._6, g)));
      f();
    };
    return Et(Mt.foldr, c(t.root, zt));
  })()));
}, fh = (t) => (n) => {
  const e = (o, i, s) => _n(3)(i) === "$d:" && ac(
    pa,
    (() => {
      const u = Z(i)(t.preds);
      if (u.tag === "Nothing")
        return [];
      if (u.tag === "Just")
        return u._1;
      f();
    })()
  ), r = (o) => (i) => (s) => (u) => (c) => (a) => (g) => {
    let l = o, d = i, _ = u, h = a, p = g, $ = !0, m;
    for (; $; ) {
      const N = l, v = d, w = _, y = h, k = p, E = v.length;
      if (k >= E) {
        $ = !1, m = N;
        continue;
      }
      const I = k >= 0 && k < v.length ? b("Just", v[k]) : T, D = (() => {
        if (I.tag === "Nothing")
          return "";
        if (I.tag === "Just")
          return I._1;
        f();
      })(), z = e(t, D);
      if (k === (E - 1 | 0) || z) {
        const U = (() => {
          if (z) {
            const P = Z(D)(t.preds), R = (() => {
              if (P.tag === "Nothing")
                return [];
              if (P.tag === "Just")
                return P._1;
              f();
            })();
            if (0 < R.length) {
              const j = w - 1 | 0, et = Z(R[0])(t.nodeIndex);
              if (et.tag === "Nothing")
                return j;
              if (et.tag === "Just")
                return et._1;
              f();
            }
          }
          return w - 1 | 0;
        })();
        l = J((P) => (R) => {
          if (R >= 0 && R < v.length) {
            const j = v[R];
            return e(t, j) ? P : J((et) => (X) => {
              const A = Z(X)(t.nodeIndex), x = (() => {
                if (A.tag === "Nothing")
                  return 0;
                if (A.tag === "Just")
                  return A._1;
                f();
              })();
              return x < y || x > U ? Y(G)(X + "→" + j)()(et) : et;
            })(P)((() => {
              const et = Z(j)(t.preds);
              if (et.tag === "Nothing")
                return [];
              if (et.tag === "Just")
                return et._1;
              f();
            })());
          }
          return e(t, "") ? P : J((j) => (et) => {
            const X = Z(et)(t.nodeIndex), A = (() => {
              if (X.tag === "Nothing")
                return 0;
              if (X.tag === "Just")
                return X._1;
              f();
            })();
            return A < y || A > U ? Y(G)(et + "→")()(j) : j;
          })(P)((() => {
            const j = Z("")(t.preds);
            if (j.tag === "Nothing")
              return [];
            if (j.tag === "Just")
              return j._1;
            f();
          })());
        })(N)(Xt(0, k)), d = v, _ = w, h = U, p = k + 1 | 0;
        continue;
      }
      l = N, d = v, _ = w, h = y, p = k + 1 | 0;
    }
    return m;
  };
  return n.length < 3 ? Q : J((o) => (i) => {
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
  })(Q)(Xt(1, n.length - 2 | 0));
}, gh = (t) => (n) => (e) => (r) => (o) => {
  const i = Cn(n), s = J((u) => (c) => {
    const a = J((g) => (l) => {
      const d = (() => {
        if (o === "HRight") {
          const $ = Z(l)(t.preds);
          if ($.tag === "Nothing")
            return [];
          if ($.tag === "Just")
            return $._1;
          f();
        }
        if (o === "HLeft") {
          const $ = Z(l)(t.succs);
          if ($.tag === "Nothing")
            return [];
          if ($.tag === "Just")
            return $._1;
        }
        f();
      })(), _ = d.length;
      if (_ === 0)
        return g;
      const h = Ke(_ - 1 | 0, 2), p = Ke(_, 2);
      return J(($) => (m) => {
        if ((() => {
          const N = Z(l)($.align);
          if (N.tag === "Nothing")
            return l !== l;
          if (N.tag === "Just")
            return N._1 !== l;
          f();
        })())
          return $;
        if (m >= 0 && m < d.length) {
          const N = Z(d[m])(t.nodeIndex), v = (() => {
            if (N.tag === "Nothing")
              return 0;
            if (N.tag === "Just")
              return N._1;
            f();
          })();
          if (!(Su(d[m] + "→" + l)(e) || Su(l + "→" + d[m])(e)) && (() => {
            if (r === "VDown")
              return $.r < v;
            if (r === "VUp")
              return $.r > v;
            f();
          })()) {
            const w = Z(d[m])($.root), y = (() => {
              if (w.tag === "Nothing")
                return d[m];
              if (w.tag === "Just")
                return w._1;
              f();
            })();
            return {
              root: Y(G)(l)(y)($.root),
              align: Y(G)(d[m])(l)(Y(G)(l)(y)($.align)),
              r: v
            };
          }
        }
        return $;
      })(g)((() => {
        if (r === "VDown")
          return Xt(h, p);
        if (r === "VUp")
          return vn(Xt(h, p));
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
        return vn(c);
      f();
    })());
    return { root: a.root, align: a.align };
  })({ root: jn(O((u) => L(u, u))(i)), align: jn(O((u) => L(u, u))(i)) })((() => {
    if (o === "HRight")
      return n;
    if (o === "HLeft")
      return vn(n);
    f();
  })());
  return { root: s.root, align: s.align };
}, so = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
  const g = gh(n)(e)(u)(c)(a), l = ah(g)(o)(r)(i)(s)(a);
  return wg()((d) => (_) => b(
    "Just",
    (() => {
      const h = Z(d)(l);
      if (h.tag === "Nothing")
        return _ + 0;
      if (h.tag === "Just")
        return _ + h._1;
      f();
    })()
  ))(ch(t)(n)(e)(r)(o)(i)(s)(l)(g)(c)(a));
}, Gu = (t) => (n) => Pt((e) => (r) => J((o) => (i) => i >= 0 && i < n.length ? i >= 0 && i < t.length ? o + n[i] + t[i] : o + n[i] + 0 : i >= 0 && i < t.length ? o + 1 + t[i] : o + 1)(0)((() => {
  const o = Xt(0, n.length - 1 | 0);
  return e < 1 ? [] : Gt(0, e, o);
})()))(n), _h = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = nh(0)(n.length - 1 | 0), c = ct(t.layerGap), a = s(ig(u, c)), g = dd(da(o)(a)(r)(i)(Q))(a);
  return O((l) => {
    const d = eh(l)(g);
    return d.tag === "Just" && d._1 > 0 ? ne(c)(2 + ct(d._1 - 1 | 0) * 2.5) : c;
  })(Xt(0, u - 1 | 0));
}, Ta = (t) => (n) => (e) => (r) => ac(
  (o) => J((i) => (s) => {
    if (!i.ok)
      return i;
    const u = Z(s)(r), c = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      f();
    })(), a = Z(s)(e), g = (() => {
      if (a.tag === "Nothing")
        return c + 1;
      if (a.tag === "Just")
        return c + a._1._1;
      f();
    })();
    return c + 1e-4 > i.pos && g + 1e-4 > i.pos ? { ok: !0, pos: g } : { ok: !1, pos: i.pos };
  })({ ok: !0, pos: -1e18 })(o).ok,
  n
), lh = (t) => (n) => (e) => (r) => {
  const o = Lt((i) => (s) => pt.compare(i.w)(s.w))(O((i) => ({ l: i, w: va(i) }))(gt(
    Ta()(n)(e),
    r
  )));
  return 0 < o.length ? b("Just", o[0].l) : T;
}, dh = (t) => (n) => {
  const e = jn(Cn(O(Pt((o) => (i) => L(i, o)))(t))), r = (o) => Lt((i) => (s) => rt.compare((() => {
    const u = Z(i)(e);
    if (u.tag === "Nothing")
      return 0;
    if (u.tag === "Just")
      return u._1;
    f();
  })())((() => {
    const u = Z(s)(e);
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
          return Q;
        if (i.tag === "Node")
          return Dt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(J((i) => (s) => yt(G)(fn)(s.to.node)([s.from.node])(i))(Q)(n));
    })(),
    succs: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return Q;
        if (i.tag === "Node")
          return Dt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(J((i) => (s) => yt(G)(fn)(s.from.node)([s.to.node])(i))(Q)(n));
    })(),
    nodeIndex: e
  };
}, hh = (t) => (n) => {
  const e = Lt((l) => (d) => pt.compare(l.w)(d.w))(Pt((l) => (d) => ({ i: l, l: d, w: va(d) }))(n)), r = 0 < e.length ? b("Just", e[0]) : T, o = (() => {
    if (r.tag === "Just")
      return r._1.i;
    if (r.tag === "Nothing")
      return 0;
    f();
  })(), i = o >= 0 && o < n.length ? b("Just", n[o]) : T, s = (() => {
    if (i.tag === "Just")
      return ((d) => (_) => {
        let h = d, p = _, $ = !0, m;
        for (; $; ) {
          const N = h, v = p;
          if (v.tag === "Nil") {
            $ = !1, m = N;
            continue;
          }
          if (v.tag === "Cons") {
            h = Sn(N)(v._1), p = v._2;
            continue;
          }
          f();
        }
        return m;
      })(999999)((() => {
        const d = (_, h) => {
          if (_.tag === "Leaf")
            return h;
          if (_.tag === "Node")
            return d(_._5, qt("Cons", _._4, d(_._6, h)));
          f();
        };
        return d(i._1, zt);
      })());
    if (i.tag === "Nothing")
      return 0;
    f();
  })(), u = (l) => J((d) => (_) => ne(d)((() => {
    const h = Z(_._1)(t);
    if (h.tag === "Nothing")
      return _._2 + 1;
    if (h.tag === "Just")
      return _._2 + h._1._1;
    f();
  })()))(-999999)(Ri(l)), c = o >= 0 && o < n.length ? b("Just", n[o]) : T, a = (() => {
    if (c.tag === "Just")
      return u(c._1);
    if (c.tag === "Nothing")
      return 0;
    f();
  })(), g = $n(
    (l) => (d) => {
      const _ = (h) => {
        if (h.tag === "Leaf")
          return Q;
        if (h.tag === "Node")
          return Dt("Node", h._1, h._2, h._3, h._4 + d, _(h._5), _(h._6));
        f();
      };
      return _(l);
    },
    n,
    Pt((l) => (d) => ns(l)(2) === 0 ? s - ((h) => (p) => {
      let $ = h, m = p, N = !0, v;
      for (; N; ) {
        const w = $, y = m;
        if (y.tag === "Nil") {
          N = !1, v = w;
          continue;
        }
        if (y.tag === "Cons") {
          $ = Sn(w)(y._1), m = y._2;
          continue;
        }
        f();
      }
      return v;
    })(999999)((() => {
      const h = (p, $) => {
        if (p.tag === "Leaf")
          return $;
        if (p.tag === "Node")
          return h(p._5, qt("Cons", p._4, h(p._6, $)));
        f();
      };
      return h(d, zt);
    })()) : a - u(d))(n)
  );
  return sh(J((l) => (d) => {
    const _ = Lt(pt.compare)(vt(Z(d))(g));
    return Y(G)(d)(_.length === 4 ? 1 < _.length && 2 < _.length ? (_[1] + _[2]) / 2 : 0 : 0 < _.length ? _[0] : 0)(l);
  })(Q)(or(G.compare)(Cn(O((l) => {
    const d = (_) => {
      if (_.tag === "Leaf")
        return Q;
      if (_.tag === "Node")
        return Dt("Node", _._1, _._2, _._3, void 0, d(_._5), d(_._6));
      f();
    };
    return Et(Pn.foldr, d(l));
  })(g)))));
}, ph = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = dh(n)(o), u = fh(s)(n), c = { nodeGap: t.nodeGap * 4 | 0 }, a = bn(
    G.compare,
    Ln,
    jn(O((_) => L(_, L(1, 1)))(gt(
      pa,
      Cn(n)
    ))),
    (() => {
      const _ = (h) => {
        if (h.tag === "Leaf")
          return Q;
        if (h.tag === "Node")
          return Dt("Node", h._1, h._2, h._3, L(h._4._1 * ct(4), h._4._2), _(h._5), _(h._6));
        f();
      };
      return _(e);
    })()
  ), g = [
    so(c)(s)(n)(a)(r)(o)(i)(u)(bu)(xu),
    so(c)(s)(n)(a)(r)(o)(i)(u)(Eu)(xu),
    so(c)(s)(n)(a)(r)(o)(i)(u)(bu)(Cu),
    so(c)(s)(n)(a)(r)(o)(i)(u)(Eu)(Cu)
  ], l = hh(a)(g);
  if (Ta()(n)(a)(l))
    return l;
  const d = lh()(n)(a)(g);
  if (d.tag === "Just")
    return d._1;
  if (d.tag === "Nothing")
    return g[0];
  f();
}, $h = (t) => (n) => (e) => (r) => {
  const o = sg(
    T,
    yf,
    (i) => i.node === n ? b("Just", i.position) : T,
    t
  );
  if (o.tag === "Nothing")
    return t;
  if (o.tag === "Just") {
    const i = o._1;
    return O((s) => s.node === e ? { ...s, position: L(i._1 + r._1, i._2 + r._2) } : s)(t);
  }
  f();
}, mh = (t) => (n) => (e) => (r) => {
  const o = gt((s) => In(te)(s.node)(n), t), i = (() => {
    if (e === "Vertical") {
      if (r === "Start")
        return J((s) => (u) => Sn(s)(u.position._1))(99999)(o);
      if (r === "End")
        return J((s) => (u) => ne(s)(u.position._1))(0)(o);
      if (r === "Center") {
        const s = J((u) => (c) => u + c.position._1)(0)(o);
        return o.length === 0 ? 0 : s / ct(o.length);
      }
      f();
    }
    if (e === "Horizontal") {
      if (r === "Start")
        return J((s) => (u) => Sn(s)(u.position._2))(99999)(o);
      if (r === "End")
        return J((s) => (u) => ne(s)(u.position._2))(0)(o);
      if (r === "Center") {
        const s = J((u) => (c) => u + c.position._2)(0)(o);
        return o.length === 0 ? 0 : s / ct(o.length);
      }
    }
    f();
  })();
  return O((s) => {
    if (In(te)(s.node)(n)) {
      if (e === "Vertical")
        return { ...s, position: L(i, s.position._2) };
      if (e === "Horizontal")
        return { ...s, position: L(s.position._1, i) };
      f();
    }
    return s;
  })(t);
}, Nh = (t) => (n) => J((e) => (r) => {
  if (r.tag === "Lock") {
    const o = r._1.node, i = r._1.position;
    return O((s) => s.node === o ? { ...s, position: i } : s)(e);
  }
  return r.tag === "AlignGroup" ? mh(e)(r._1.nodes)(r._1.axis)(r._1.alignment) : r.tag === "RelativePosition" ? $h(e)(r._1.anchor)(r._1.target)(r._1.offset) : e;
})(n)(t), Jh = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const c = O((l) => J((d) => (_) => ne(d)((() => {
    const h = Z(_)(r);
    if (h.tag === "Nothing")
      return 1;
    if (h.tag === "Just")
      return h._1._2;
    f();
  })()))(1)(l))(e), a = ph(t)(e)(r)(o)(i)(u), g = Gu(_h(t)(e)(r)(o)(i)(s)((l) => {
    const d = Gu(l)(c);
    return Cn(Pt((_) => (h) => Pt((p) => ($) => ({
      node: $,
      position: L(
        (() => {
          const m = Z($)(a);
          return (() => {
            if (m.tag === "Nothing")
              return 0;
            if (m.tag === "Just")
              return m._1;
            f();
          })() / ct(4);
        })(),
        _ >= 0 && _ < d.length ? d[_] : 0
      ),
      size: (() => {
        const m = _n(3)($) === "$d:" ? L(0, 1) : L(1, 1), N = Z($)(r);
        if (N.tag === "Nothing")
          return m;
        if (N.tag === "Just")
          return N._1;
        f();
      })(),
      layer: _,
      order: p
    }))(h))(e));
  }))(c);
  return Nh(n)(Cn(Pt((l) => (d) => Pt((_) => (h) => ({
    node: h,
    position: L(
      (() => {
        const p = Z(h)(a);
        return (() => {
          if (p.tag === "Nothing")
            return 0;
          if (p.tag === "Just")
            return p._1;
          f();
        })() / ct(4);
      })(),
      l >= 0 && l < g.length ? g[l] : 0
    ),
    size: (() => {
      const p = _n(3)(h) === "$d:" ? L(0, 1) : L(1, 1), $ = Z(h)(r);
      if ($.tag === "Nothing")
        return p;
      if ($.tag === "Just")
        return $._1;
      f();
    })(),
    layer: l,
    order: _
  }))(d))(e)));
}, pi = /* @__PURE__ */ Js($o)(/* @__PURE__ */ Ae(32)), Iu = /* @__PURE__ */ Js($o)(/* @__PURE__ */ Ae(31)), Br = /* @__PURE__ */ (() => {
  const t = w0("25214903917");
  if (t.tag === "Nothing")
    return Tc;
  if (t.tag === "Just")
    return t._1;
  f();
})(), Qr = /* @__PURE__ */ wi(/* @__PURE__ */ Js($o)(/* @__PURE__ */ Ae(48)))($o), vh = (t) => {
  const n = L0(t);
  return Gr(yc((() => {
    if (n.tag === "Nothing")
      return Tc;
    if (n.tag === "Just")
      return n._1;
    f();
  })())(Br))(Qr);
}, Fi = /* @__PURE__ */ Ae(11), Eo = (t) => (n) => {
  const e = Gr(lo(ho(n)(Br))(Fi))(Qr);
  return L(
    (() => {
      const r = dc(J0(Li(e)(Ae(48 - t | 0))));
      if (r.tag === "Nothing")
        return 0;
      if (r.tag === "Just")
        return r._1;
      f();
    })(),
    e
  );
}, Th = (t) => {
  const n = Eo(26)(t), e = Eo(27)(n._2);
  return L((ct(n._1) * yi(2)(27) + ct(e._1)) / yi(2)(53), e._2);
}, yh = (t) => (n) => {
  const e = J((r) => (o) => {
    const i = Th(r.finalR);
    return { rs: [...r.rs, i._1], finalR: i._2 };
  })({ rs: [], finalR: t })(n);
  return L(
    O((r) => r.x)(Lt((r) => (o) => pt.compare(r.k)(o.k))($n((r) => (o) => ({ x: r, k: o }), n, e.rs))),
    e.finalR
  );
}, wh = (t) => {
  const n = Gr(lo(ho(t)(Br))(Fi))(Qr), e = Gr(lo(ho(n)(Br))(Fi))(Qr);
  return L(
    lo(ho((() => {
      const r = Li(n)(Ae(16));
      return eu.compare(r)(Iu) !== "LT" ? wi(r)(pi) : r;
    })())(pi))((() => {
      const r = Li(e)(Ae(16));
      return eu.compare(r)(Iu) !== "LT" ? wi(r)(pi) : r;
    })()),
    e
  );
}, Dr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, xo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
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
}, As = /* @__PURE__ */ jt(G)(Bt), Zn = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Co = /* @__PURE__ */ jt(G)(Bt), Lh = /* @__PURE__ */ Uf(Mi), kh = /* @__PURE__ */ J(ur)(0), bh = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Pu = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
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
}, Eh = (t) => (n) => (e) => (r) => (o) => As(J((i) => (s) => {
  const u = Lt((c) => (a) => rt.compare((() => {
    const g = Dr(c.id)(o);
    if (g.tag === "Nothing")
      return 1e6;
    if (g.tag === "Just")
      return g._1;
    f();
  })())((() => {
    const g = Dr(a.id)(o);
    if (g.tag === "Nothing")
      return 1e6;
    if (g.tag === "Just")
      return g._1;
    f();
  })()))(gt((c) => xo(c.to.node)(e), gt((c) => c.from.node === s, r)));
  return {
    ranks: [...i.ranks, ...Pt((c) => (a) => L(a.id, ct((i.rankSum + c | 0) + 1 | 0)))(u)],
    rankSum: i.rankSum + u.length | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), xh = (t) => (n) => (e) => (r) => (o) => As(J((i) => (s) => {
  const u = Lt((a) => (g) => {
    const l = rt.compare((() => {
      const d = Zn(g.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      f();
    })())((() => {
      const d = Zn(a.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      f();
    })());
    return l === "EQ" ? rt.compare((() => {
      const d = Dr(a.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      f();
    })())((() => {
      const d = Dr(g.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      f();
    })()) : l;
  })(gt((a) => xo(a.from.node)(e), gt((a) => a.to.node === s, r))), c = u.length;
  return {
    ranks: [...i.ranks, ...Pt((a) => (g) => L(g.id, ct((i.rankSum + c | 0) - a | 0)))(u)],
    rankSum: i.rankSum + c | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), Bi = (t) => (n) => (e) => {
  const r = Co(Pt((u) => (c) => L(c, u))(t)), o = Co(Pt((u) => (c) => L(c, u))(n)), i = vt((u) => {
    const c = Zn(u.from.node)(r), a = Zn(u.to.node)(o);
    if (c.tag === "Just" && a.tag === "Just")
      return b("Just", L(c._1, a._1));
    const g = Zn(u.from.node)(o), l = Zn(u.to.node)(r);
    return g.tag === "Just" && l.tag === "Just" ? b("Just", L(l._1, g._1)) : T;
  })(e), s = i.length;
  return J((u) => (c) => J((a) => (g) => c >= 0 && c < i.length && g >= 0 && g < i.length && ((i[c]._1 - i[g]._1 | 0) * (i[c]._2 - i[g]._2 | 0) | 0) < 0 ? a + 1 | 0 : a)(u)(Xt(c + 1 | 0, s - 1 | 0)))(0)(Xt(0, s - 2 | 0));
}, Ch = (t) => (n) => (e) => (r) => (o) => {
  const i = (u) => (c) => {
    let a = u, g = c, l = !0, d;
    for (; l; ) {
      const _ = a, h = g;
      if (h >= (_.length - 1 | 0)) {
        l = !1, d = _;
        continue;
      }
      const p = h >= 0 && h < _.length ? b("Just", _[h]) : T, $ = h + 1 | 0;
      if ($ >= 0 && $ < _.length && p.tag === "Just") {
        const m = p._1, N = _[$];
        if (de((k) => k.before === m && k.after === N, o)) {
          a = _, g = h + 1 | 0;
          continue;
        }
        if ((() => {
          const k = Zn(m)(t), E = Zn(N)(t);
          return k.tag === "Just" && E.tag === "Just" && k._1 < E._1;
        })()) {
          a = _, g = h + 1 | 0;
          continue;
        }
        const v = rr(Yt, T, h, N, _), w = (() => {
          if (v.tag === "Just")
            return rr(Yt, T, h + 1 | 0, m, v._1);
          if (v.tag === "Nothing")
            return T;
          f();
        })(), y = (() => {
          if (w.tag === "Nothing")
            return _;
          if (w.tag === "Just")
            return w._1;
          f();
        })();
        if (Bi(e)(y)(r) < Bi(e)(_)(r)) {
          a = y, g = h + 1 | 0;
          continue;
        }
        a = _, g = h + 1 | 0;
        continue;
      }
      l = !1, d = _;
    }
    return d;
  };
  return ((u) => {
    let c = u, a = !0, g;
    for (; a; ) {
      const l = c, d = i(l)(0);
      if (Lh(d)(l)) {
        a = !1, g = l;
        continue;
      }
      c = d;
    }
    return g;
  })(n);
}, uo = (t) => (n) => J((e) => (r) => {
  if (r >= 0 && r < t.length) {
    const o = t[r], i = r + 1 | 0;
    if (i >= 0 && i < t.length)
      return e + Bi(o)(t[i])(n) | 0;
  }
  return e;
})(0)(Xt(0, t.length - 2 | 0)), Sh = (t) => (n) => (e) => {
  const r = vt((a) => a.tag === "OrderConstraint" ? b("Just", { before: a._1.before, after: a._1.after }) : T)(t.constraints), o = (a) => J((g) => (l) => {
    const d = l.after, _ = l.before, h = er(Yt, T, ($) => $ === _, g), p = er(Yt, T, ($) => $ === d, g);
    if (h.tag === "Just" && p.tag === "Just" && h._1 > p._1) {
      const $ = cc(Yt, T, h._1, g), m = (() => {
        if ($.tag === "Nothing")
          return g;
        if ($.tag === "Just")
          return $._1;
        f();
      })(), N = cg(Yt, T, p._1, _, m);
      if (N.tag === "Nothing")
        return m;
      if (N.tag === "Just")
        return N._1;
      f();
    }
    return g;
  })(a)(r), i = As(Pt((a) => (g) => L(g.id, a))(e)), s = (a, g, l) => {
    const d = a.length;
    return J((_) => (h) => {
      const p = g ? h - 1 | 0 : h + 1 | 0, $ = p >= 0 && p < _._1.length ? b("Just", _._1[p]) : T;
      if ($.tag === "Just") {
        const m = h >= 0 && h < _._1.length ? b("Just", _._1[h]) : T;
        if (m.tag === "Just") {
          const N = Co(Pt((E) => (I) => L(I, E))($._1)), v = Co(Pt((E) => (I) => L(I, E))(m._1)), w = g ? Eh($._1)(N)(v)(e)(i) : xh($._1)(N)(v)(e)(i), y = J((E) => (I) => {
            const D = vt((U) => Dr(U.id)(w))(gt(g ? (U) => U.to.node === I._2 && xo(U.from.node)(N) : (U) => U.from.node === I._2 && xo(U.to.node)(N), e));
            if (D.length === 0)
              return { ...E, items: [...E.items, { n: I._2, key: T, origIdx: I._1 }] };
            const z = Eo(24)(E.r);
            return {
              items: [
                ...E.items,
                {
                  n: I._2,
                  key: b("Just", (kh(D) + (ct(z._1) * 4172325152040912e-24 - 0.03500000014901161)) / ct(D.length)),
                  origIdx: I._1
                }
              ],
              r: z._2
            };
          })({ items: [], r: _._2 })(Pt(gr)(m._1)), k = rr(
            Yt,
            T,
            h,
            Ch(t.modelOrder)(o(O((E) => E.n)(Lt((E) => (I) => {
              const D = Zn(E.n)(t.modelOrder), z = Zn(I.n)(t.modelOrder);
              if (D.tag === "Just" && z.tag === "Just") {
                const U = rt.compare(D._1)(z._1);
                return U === "EQ" ? pt.compare(E.key)(I.key) : U;
              }
              return pt.compare(E.key)(I.key);
            })((() => {
              const E = y.items, I = (z) => (U) => {
                let P = z, R = U, j = !0, et;
                for (; j; ) {
                  const X = P, A = R;
                  if (X >= 0 && X < E.length) {
                    if (E[X].key.tag === "Just") {
                      j = !1, et = E[X].key._1;
                      continue;
                    }
                    if (E[X].key.tag === "Nothing") {
                      P = X + 1 | 0, R = A;
                      continue;
                    }
                    f();
                  }
                  j = !1, et = A;
                }
                return et;
              };
              return ((z) => (U) => (P) => {
                let R = z, j = U, et = P, X = !0, A;
                for (; X; ) {
                  const x = R, C = j, q = et;
                  if (x >= 0 && x < E.length) {
                    if (E[x].key.tag === "Just") {
                      R = x + 1 | 0, j = E[x].key._1, et = [...q, { n: E[x].n, key: E[x].key._1, origIdx: E[x].origIdx }];
                      continue;
                    }
                    if (E[x].key.tag === "Nothing") {
                      const S = (C + I(x + 1 | 0)(C + 1)) / 2;
                      R = x + 1 | 0, j = S, et = [...q, { n: E[x].n, key: S, origIdx: E[x].origIdx }];
                      continue;
                    }
                    f();
                  }
                  X = !1, A = q;
                }
                return A;
              })(0)(-1)([]);
            })()))))($._1)(e)(r),
            _._1
          );
          if (k.tag === "Just")
            return L(k._1, y.r);
          if (k.tag === "Nothing")
            return L(_._1, _._2);
          f();
        }
        if (m.tag === "Nothing")
          return L(_._1, _._2);
        f();
      }
      if ($.tag === "Nothing")
        return L(_._1, _._2);
      f();
    })(L(a, l))(g ? Xt(1, d - 1 | 0) : vn(Xt(0, d - 2 | 0)));
  }, u = J((a) => (g) => Y(G)(g.from.node)()(Y(G)(g.to.node)()(a)))(Q)(e), c = J((a) => (g) => {
    if (a.result.crossings === 0)
      return a;
    const l = (N) => (v) => (w) => (y) => {
      let k = N, E = v, I = w, D = y, z = !0, U;
      for (; z; ) {
        const P = k, R = E, j = I, et = D;
        if (j === 0) {
          z = !1, U = { layout: P, crossings: 0, random: et };
          continue;
        }
        const X = s(P, R, et), A = uo(X._1)(e);
        if (A < j) {
          k = X._1, E = !R, I = A, D = X._2;
          continue;
        }
        z = !1, U = { layout: P, crossings: j, random: X._2 };
      }
      return U;
    }, d = Eo(1)(a.result.random), _ = d._1 !== 0, h = t.modelOrder.tag === "Leaf", p = (a.firstTry || a.secondTry) && !h ? a.firstTry : _, $ = (() => {
      if (!h) {
        const y = s(n, p, d._2);
        return l(y._1)(!p)(uo(y._1)(e))(y._2);
      }
      const N = p ? 0 : bh(0)(n.length - 1 | 0), v = N >= 0 && N < n.length ? b("Just", n[N]) : T;
      if (v.tag === "Just" && v._1.length > 1) {
        const y = gt((k) => Pu(k)(u), v._1);
        if (y.length > 1) {
          const k = yh(d._2)(y), E = k._1, I = rr(
            Yt,
            T,
            N,
            o(J((D) => (z) => Pu(z)(u) ? D.idx >= 0 && D.idx < E.length ? { idx: D.idx + 1 | 0, result: [...D.result, E[D.idx]] } : { idx: D.idx, result: [...D.result, z] } : { idx: D.idx, result: [...D.result, z] })({ idx: 0, result: [] })(v._1).result),
            n
          );
          if (I.tag === "Just") {
            const D = s(I._1, p, k._2);
            return l(D._1)(!p)(uo(D._1)(e))(D._2);
          }
        }
      }
      const w = s(n, p, d._2);
      return l(w._1)(!p)(uo(w._1)(e))(w._2);
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
      random: Gr(yc(wh(vh(1))._1)(Br))(Qr)
    },
    firstTry: t.modelOrder.tag !== "Leaf",
    secondTry: !1
  })(Xt(1, t.iterations)).result;
  return n.length <= 0 || t.iterations <= 0 ? n : c.layout;
}, Gh = (t) => t, Au = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
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
}, Jn = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ar = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
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
}, Wr = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = G.compare(n._1)(e._1);
      return r === "LT" ? dn : r === "GT" ? hn : G.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), Ih = /* @__PURE__ */ jt(G)(Bt), Ph = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = Wr.compare(t)(s._3);
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
}, Ah = /* @__PURE__ */ Gh("Greedy"), $i = (t) => (n) => (e) => J((r) => (o) => {
  if (o.from.node === o.to.node)
    return r;
  if (o.from.node === n && !Au(o.to.node)(r.marks)) {
    const i = Jn(o.to.node)(r.inDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = Y(G)(o.to.node)(s)(r.inDeg);
    return (() => {
      const c = Jn(o.to.node)(r.outDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        f();
      })() && !In(te)(o.to.node)(r.sources);
    })() ? { ...r, inDeg: u, sources: [...r.sources, o.to.node] } : { ...r, inDeg: u };
  }
  if (o.to.node === n && !Au(o.from.node)(r.marks)) {
    const i = Jn(o.from.node)(r.outDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = Y(G)(o.from.node)(s)(r.outDeg);
    return (() => {
      const c = Jn(o.from.node)(r.inDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        f();
      })() && !In(te)(o.from.node)(r.sinks);
    })() ? { ...r, outDeg: u, sinks: [...r.sinks, o.from.node] } : { ...r, outDeg: u };
  }
  return r;
})({ ...e, remaining: gt((r) => r !== n, e.remaining) })(t), Rh = /* @__PURE__ */ J((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return Y(G)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return Y(G)(n._1.node)(0)(t);
    if (n._1.pin.tag === "LastLayer")
      return Y(G)(n._1.node)(99999)(t);
  }
  return t;
})(Q), ya = (t) => (n) => (e) => {
  const r = Jn(n)(t), o = Jn(e)(t);
  return r.tag === "Just" && o.tag === "Just" && r._1 > o._1;
}, wa = (t) => (n) => (e) => (r) => {
  if (ar(e)(r.visited) || ar(e)(r.visiting))
    return r;
  const o = J(Fh(t)(n)(e))({ ...r, visiting: Y(G)(e)()(r.visiting) })((() => {
    const i = Jn(e)(n);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just")
      return i._1;
    f();
  })());
  return {
    ...o,
    visiting: xr(G)(e)(o.visiting),
    visited: Y(G)(e)()(o.visited)
  };
}, Fh = (t) => (n) => (e) => (r) => (o) => ya(t)(e)(o) ? { ...r, backEdges: Y(Wr)(L(e, o))()(r.backEdges) } : ar(o)(r.visiting) ? { ...r, backEdges: Y(Wr)(L(e, o))()(r.backEdges) } : ar(o)(r.visited) ? r : wa(t)(n)(o)(r), Bh = (t) => (n) => (e) => {
  const r = (d) => {
    let _ = d, h = !0, p;
    for (; h; ) {
      const $ = _, m = Wt((N) => T, (N) => (v) => b("Just", { head: N, tail: v }), $.sinks);
      if (m.tag === "Just") {
        _ = $i(e)(m._1.head)({
          ...$,
          sinks: m._1.tail,
          marks: Y(G)(m._1.head)($.nextRight)($.marks),
          nextRight: $.nextRight - 1 | 0
        });
        continue;
      }
      if (m.tag === "Nothing") {
        const N = Wt((v) => T, (v) => (w) => b("Just", { head: v, tail: w }), $.sources);
        if (N.tag === "Just") {
          _ = $i(e)(N._1.head)({
            ...$,
            sources: N._1.tail,
            marks: Y(G)(N._1.head)($.nextLeft)($.marks),
            nextLeft: $.nextLeft + 1 | 0
          });
          continue;
        }
        if (N.tag === "Nothing") {
          const v = (y) => {
            const k = Jn(y)($.outDeg), E = Jn(y)($.inDeg);
            return (() => {
              if (k.tag === "Nothing")
                return 0;
              if (k.tag === "Just")
                return k._1;
              f();
            })() - (() => {
              if (E.tag === "Nothing")
                return 0;
              if (E.tag === "Just")
                return E._1;
              f();
            })() | 0;
          }, w = Lt((y) => (k) => {
            const E = rt.compare(v(k))(v(y));
            return E === "EQ" ? rt.compare((() => {
              const I = Jn(y)(n);
              if (I.tag === "Nothing")
                return 1e6;
              if (I.tag === "Just")
                return I._1;
              f();
            })())((() => {
              const I = Jn(k)(n);
              if (I.tag === "Nothing")
                return 1e6;
              if (I.tag === "Just")
                return I._1;
              f();
            })()) : E;
          })($.remaining);
          if (0 < w.length) {
            const y = w[0];
            _ = $i(e)(y)({
              ...$,
              remaining: gt((k) => k !== y, $.remaining),
              marks: Y(G)(y)($.nextLeft)($.marks),
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
  }, o = or(G.compare)([...O((d) => d.from.node)(e), ...O((d) => d.to.node)(e)]), i = gt((d) => d.from.node !== d.to.node, e), s = J((d) => (_) => yt(G)(Zt)(_.to.node)(1)(d))(Q)(i), u = J((d) => (_) => yt(G)(Zt)(_.from.node)(1)(d))(Q)(i), c = gt(
    (d) => {
      const _ = Jn(d)(s);
      if (_.tag === "Nothing")
        return !0;
      if (_.tag === "Just")
        return _._1 === 0;
      f();
    },
    o
  ), a = gt(
    (d) => {
      const _ = Jn(d)(u);
      if (_.tag === "Nothing")
        return !0;
      if (_.tag === "Just")
        return _._1 === 0;
      f();
    },
    o
  ), g = o.length + 1 | 0, l = J((d) => (_) => {
    const h = Jn(_)(d);
    return h.tag === "Just" && h._1 < 0 ? Y(G)(_)(h._1 + g | 0)(d) : d;
  })(r({
    remaining: gt((d) => !In(te)(d)(c) && !In(te)(d)(a), o),
    marks: Q,
    inDeg: s,
    outDeg: u,
    sources: c,
    sinks: a,
    nextLeft: 1,
    nextRight: -1
  }).marks)(o);
  return J((d) => (_) => {
    if (_.from.node === _.to.node)
      return d;
    if (ya(t)(_.from.node)(_.to.node))
      return Y(Wr)(L(_.from.node, _.to.node))()(d);
    const h = Jn(_.from.node)(l), p = Jn(_.to.node)(l);
    return h.tag === "Just" && p.tag === "Just" && h._1 > p._1 ? Y(Wr)(L(_.from.node, _.to.node))()(d) : d;
  })(Q)(e);
}, Qh = /* @__PURE__ */ J((t) => (n) => yt(G)(fn)(n.from.node)([n.to.node])(t))(Q), Dh = (t) => (n) => {
  const e = Qh(n), r = or(G.compare)([...O((i) => i.from.node)(n), ...O((i) => i.to.node)(n)]), o = J((i) => (s) => Y(G)(s.to.node)()(i))(Q)(n);
  return J((i) => (s) => wa(t)(e)(s)(i))({
    visiting: Q,
    visited: Q,
    backEdges: Q
  })([...gt((i) => !ar(i)(o), r), ...gt((i) => ar(i)(o), r)]).backEdges;
}, Wh = (t) => (n) => (e) => (r) => {
  const o = Ih(Pt((u) => (c) => L(c, u))(n)), i = Rh(e), s = (() => {
    if (t === "DepthFirst")
      return Dh(i)(r);
    if (t === "Greedy")
      return Bh(i)(o)(r);
    f();
  })();
  return {
    edges: O((u) => Ph(L(u.from.node, u.to.node))(s) ? { ...u, from: u.to, to: u.from } : u)(r),
    reversedEdges: s
  };
}, La = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, qh = /* @__PURE__ */ J((t) => (n) => Y(G)(n)()(t))(Q), So = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
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
}, Hh = /* @__PURE__ */ oa(G), Yn = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ru = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, mi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = rt.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Oh = /* @__PURE__ */ jt(rt)(Bt), zh = (t) => (n) => bn(G.compare, Ln, t, n), ka = /* @__PURE__ */ Pt((t) => (n) => ({ src: n.src, tgt: n.tgt, delta: 1, weight: 1, eid: t })), Vh = (t) => J((n) => (e) => ({
  base: (() => {
    const r = (o) => (i) => {
      let s = o, u = i, c = !0, a;
      for (; c; ) {
        const g = s, l = u;
        if (l.tag === "Nil") {
          c = !1, a = g;
          continue;
        }
        if (l.tag === "Cons") {
          s = La(g)(l._1), u = l._2;
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
      return o(e, zt);
    })()) | 0) + 1 | 0;
  })(),
  result: [
    ...n.result,
    (() => {
      if (n.base === 0)
        return e;
      const r = (o) => {
        if (o.tag === "Leaf")
          return Q;
        if (o.tag === "Node")
          return Dt("Node", o._1, o._2, o._3, o._4 + n.base | 0, r(o._5), r(o._6));
        f();
      };
      return r(e);
    })()
  ]
}))({ base: 0, result: [] })(t).result, Yh = (t) => (n) => {
  const e = qh(t);
  return Hh(t)(ka(gt((r) => So(r.src)(e) && So(r.tgt)(e), n)));
}, Xh = (t) => (n) => {
  const e = J((o) => (i) => yt(G)(fn)(i.tgt)([i.src])(yt(G)(fn)(i.src)([
    i.tgt
  ])(o)))(Q)(n), r = (o) => (i) => (s) => {
    let u = o, c = i, a = s, g = !0, l;
    for (; g; ) {
      const d = u, _ = c, h = a, p = Wt(($) => T, ($) => (m) => b("Just", { head: $, tail: m }), d);
      if (p.tag === "Nothing") {
        g = !1, l = { nodes: h };
        continue;
      }
      if (p.tag === "Just") {
        if (So(p._1.head)(_)) {
          u = p._1.tail, c = _, a = h;
          continue;
        }
        u = [
          ...p._1.tail,
          ...(() => {
            const $ = Yn(p._1.head)(e);
            if ($.tag === "Nothing")
              return [];
            if ($.tag === "Just")
              return $._1;
            f();
          })()
        ], c = Y(G)(p._1.head)()(_), a = [...h, p._1.head];
        continue;
      }
      f();
    }
    return l;
  };
  return J((o) => (i) => {
    if (So(i)(o.visited))
      return o;
    const s = r([i])(o.visited)([]);
    return {
      ...o,
      visited: J((u) => (c) => Y(G)(c)()(u))(o.visited)(s.nodes),
      components: [...o.components, s.nodes]
    };
  })({ visited: Q, components: [] })(t).components;
}, Uh = (t) => (n) => (e) => {
  const r = J((i) => (s) => yt(G)(Zt)(s.tgt)(1)(i))(Q)(n), o = J((i) => (s) => yt(G)(Zt)(s.src)(1)(i))(Q)(n);
  return J((i) => (s) => {
    const u = Yn(s)(r), c = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      f();
    })();
    if ((() => {
      const N = Yn(s)(o);
      return (() => {
        if (N.tag === "Nothing")
          return c !== 0;
        if (N.tag === "Just")
          return c !== N._1;
        f();
      })() || c === 0;
    })())
      return i;
    const a = Yn(s)(i.layers), g = (() => {
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      f();
    })(), l = i.layers, d = J((N) => (v) => v.tgt === s ? {
      ...N,
      mIn: Ru(N.mIn)((() => {
        const w = Yn(s)(l), y = Yn(v.src)(l);
        return (() => {
          if (w.tag === "Nothing")
            return 0;
          if (w.tag === "Just")
            return w._1;
          f();
        })() - (() => {
          if (y.tag === "Nothing")
            return 0;
          if (y.tag === "Just")
            return y._1;
          f();
        })() | 0;
      })())
    } : v.src === s ? {
      ...N,
      mOut: Ru(N.mOut)((() => {
        const w = Yn(v.tgt)(l), y = Yn(s)(l);
        return (() => {
          if (w.tag === "Nothing")
            return 0;
          if (w.tag === "Just")
            return w._1;
          f();
        })() - (() => {
          if (y.tag === "Nothing")
            return 0;
          if (y.tag === "Just")
            return y._1;
          f();
        })() | 0;
      })())
    } : N)({ mIn: 1e9, mOut: 1e9 })(n), _ = d.mIn === 1e9 ? -1 : d.mIn, h = d.mOut === 1e9 ? -1 : d.mOut;
    if (_ < 0 || h < 0)
      return i;
    const p = (g - _ | 0) + 1 | 0, $ = (g + h | 0) - 1 | 0;
    if ($ < p)
      return i;
    const m = J((N) => (v) => {
      const w = mi(v)(i.filling), y = (() => {
        if (w.tag === "Nothing")
          return 0;
        if (w.tag === "Just")
          return w._1;
        f();
      })();
      return y < N.bestFill ? { best: v, bestFill: y } : N;
    })({
      best: g,
      bestFill: (() => {
        const N = mi(g)(i.filling);
        if (N.tag === "Nothing")
          return 0;
        if (N.tag === "Just")
          return N._1;
        f();
      })()
    })(Xt(p, $));
    return m.best === g ? i : {
      layers: Y(G)(s)(m.best)(i.layers),
      filling: Y(rt)(g)((() => {
        const N = mi(g)(i.filling);
        if (N.tag === "Nothing")
          return -1;
        if (N.tag === "Just")
          return N._1 - 1 | 0;
        f();
      })())(Y(rt)(m.best)(m.bestFill + 1 | 0)(i.filling))
    };
  })({
    layers: e,
    filling: Oh(O((i) => L(
      i,
      J((s) => (u) => (() => {
        const c = Yn(u)(e);
        return c.tag === "Nothing" ? !1 : c.tag === "Just" && c._1 === i;
      })() ? s + 1 | 0 : s)(0)(t)
    ))(Xt(
      0,
      J((i) => (s) => La(i)((() => {
        const u = Yn(s)(e);
        if (u.tag === "Nothing")
          return 0;
        if (u.tag === "Just")
          return u._1;
        f();
      })()))(0)(t)
    )))
  })(t).layers;
}, Mh = (t) => (n) => Uh(t)(ka(n))(J(zh)(Q)(Vh(O((e) => Yh(e)(n))(Xh(t)(n))))), Kh = (t) => t, Ge = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Go = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ba = /* @__PURE__ */ (() => {
  const t = On.unfoldr(De);
  return (n) => t(Wn("IterNode", n, Qe));
})(), jh = /* @__PURE__ */ Kh("NetworkSimplex"), Zh = (t) => (n) => J((e) => (r) => {
  const o = J(Go)(0)(vt((i) => Ge(i)(e))(r));
  return J((i) => (s) => Y(G)(s)(o)(i))(e)(r);
})(n)(t), tp = (t) => (n) => ({
  layers: O((e) => gt(
    (r) => {
      const o = Ge(r)(n);
      return o.tag === "Nothing" ? !1 : o.tag === "Just" && o._1 === e;
    },
    t
  ))(Xt(
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
          i = Go(a)(g._1), s = g._2;
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
      return r(n, zt);
    })())
  )),
  nodeLayer: n
}), np = (t) => (n) => (e) => {
  const r = J((o) => (i) => Y(G)(i)(!0)(o))(Q)(n);
  return J((o) => (i) => Y(G)(i._1)(i._2)(o))(Mh(n)(vt((o) => o.from.node === o.to.node || (() => {
    const i = Ge(o.from.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() || (() => {
    const i = Ge(o.to.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() ? T : b("Just", { src: o.from.node, tgt: o.to.node }))(t)))(ba(e));
}, ep = (t) => (n) => (e) => (r) => {
  const o = (c) => (a) => {
    const g = Ge(a)(c);
    if (g.tag === "Just")
      return c;
    if (g.tag === "Nothing") {
      const l = gt(
        (_) => _ !== a,
        (() => {
          const _ = Ge(a)(t);
          if (_.tag === "Nothing")
            return [];
          if (_.tag === "Just")
            return _._1;
          f();
        })()
      ), d = J(o)(c)(l);
      return Y(G)(a)(1 + J(Go)(0)(vt((_) => Ge(_)(d))(l)) | 0)(d);
    }
    f();
  }, i = J(o)(Q)(e), u = ((c) => (a) => {
    let g = c, l = a, d = !0, _;
    for (; d; ) {
      const h = g, p = l;
      if (p.tag === "Nil") {
        d = !1, _ = h;
        continue;
      }
      if (p.tag === "Cons") {
        g = Go(h)(p._1), l = p._2;
        continue;
      }
      f();
    }
    return _;
  })(1)((() => {
    const c = (a, g) => {
      if (a.tag === "Leaf")
        return g;
      if (a.tag === "Node")
        return c(a._5, qt("Cons", a._4, c(a._6, g)));
      f();
    };
    return c(i, zt);
  })());
  return J((c) => (a) => Y(G)(a._1)(a._2)(c))((() => {
    const c = (a) => {
      if (a.tag === "Leaf")
        return Q;
      if (a.tag === "Node")
        return Dt("Node", a._1, a._2, a._3, u - a._4 | 0, c(a._5), c(a._6));
      f();
    };
    return c(i);
  })())(ba(r));
}, rp = /* @__PURE__ */ J((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return Y(G)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return Y(G)(n._1.node)(0)(t);
  }
  return t;
})(Q), op = /* @__PURE__ */ J((t) => (n) => yt(G)(fn)(n.to.node)([n.from.node])(t))(Q), ip = /* @__PURE__ */ J((t) => (n) => yt(G)(fn)(n.from.node)([n.to.node])(t))(Q), sp = (t) => (n) => (e) => (r) => {
  const o = ip(e), i = op(e), s = rp(n);
  return tp(r)(Zh(vt((u) => u.tag === "SameLayer" ? b("Just", u._1.nodes) : T)(n))((() => {
    if (t === "LongestPath")
      return ep(o)(i)(r)(s);
    if (t === "NetworkSimplex")
      return np(e)(r)(s);
    f();
  })()));
}, up = /* @__PURE__ */ jt(G)(Bt), cp = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Fu = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Bu = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, qr = /* @__PURE__ */ jt(G)(Bt), ap = /* @__PURE__ */ jt(G)(Bt), Qu = /* @__PURE__ */ (() => {
  const t = O((n) => ({ start: n.end, end: n.start, direction: n.direction }));
  return (n) => vn(t(n));
})(), fp = (t) => (n) => (e) => (r) => {
  const o = up(O((s) => L(s.edge, s))(r)), i = (s) => 0 < s.nodes.length && (() => {
    const u = cp(s.edgeId)(e);
    return u.tag === "Just" && s.nodes[0] !== u._1._1;
  })();
  return O((s) => {
    if (s.nodes.length <= 2) {
      const g = Fu(s.edgeId)(o);
      if (g.tag === "Just") {
        const l = i(s), d = Fr(Rr(l ? Qu(g._1.segments) : g._1.segments));
        return { ...g._1, edge: s.edgeId, segments: d, bends: $n((_) => (h) => _.end, d, Gt(1, d.length, d)), reversed: l };
      }
      if (g.tag === "Nothing")
        return { edge: s.edgeId, segments: [], bends: [], bendType: [], jumps: [], reversed: !1 };
      f();
    }
    const u = bt(vt((g) => Fu(g)(o))($n(
      (g) => (l) => s.edgeId + ":" + g + "->" + l,
      s.nodes,
      Gt(1, s.nodes.length, s.nodes)
    )))((g) => g.segments), c = i(s), a = Fr(Rr(c ? Qu(u) : u));
    return {
      edge: s.edgeId,
      segments: a,
      bends: $n((g) => (l) => g.end, a, Gt(1, a.length, a)),
      bendType: [],
      jumps: [],
      reversed: c
    };
  })(t);
}, gp = { layers: [], edges: [], chains: [] }, _p = {
  nodeGap: 3,
  layerGap: 2,
  iterations: 8,
  layerer: jh,
  cycleBreaker: Ah,
  compactPostRouting: !1
}, lp = (t) => ({
  pos: L(0, 0),
  size: L(
    J((n) => (e) => Bu(n)(e.position._1 + e.size._1))(0)(t),
    J((n) => (e) => Bu(n)(e.position._2 + e.size._2))(0)(t)
  )
}), dp = (t) => (n) => (e) => {
  const r = qr(O((a) => L(a.id, a.ports))(n.nodes)), o = gt((a) => _n(3)(a.node) !== "$d:", e.placements), i = fp(e.withDummies.chains)(e.acyclic.reversedEdges)(ap(O((a) => L(
    a.id,
    L(a.from.node, a.to.node)
  ))(n.edges)))(Wd(e.withDummies.edges)(e.placements)(r)(e.withDummies.chains)($a(e.ordered)(gt(
    (a) => a.from.node !== a.to.node,
    e.withDummies.edges
  ))((() => {
    const a = (g) => {
      if (g.tag === "Leaf")
        return Q;
      if (g.tag === "Node")
        return Dt("Node", g._1, g._2, g._3, L(g._4._1 * 4, g._4._2), a(g._5), a(g._6));
      f();
    };
    return a(qr(O((g) => L(g.id, g.size))(n.nodes)));
  })()))), s = t.compactPostRouting ? ad()({
    nodes: o,
    edges: n.edges,
    paths: i,
    ports: r
  }) : { nodes: o, edges: i }, u = O((a) => {
    const g = Fr(Rr(a.segments));
    return { ...a, segments: g, bends: $n((l) => (d) => l.end, g, Gt(1, g.length, g)) };
  })(s.edges), c = Pt((a) => (g) => ({ ...g, jumps: Xd(a)(g)(u) }))(u);
  return { nodes: s.nodes, edges: c, boundingBox: lp(s.nodes), metrics: Hl(s.nodes)(c)(0) };
}, hp = (t) => (n) => (e) => {
  const r = qr(O((i) => L(i.id, i.size))(n.nodes)), o = {
    ...e,
    placements: Jh({ nodeGap: t.nodeGap, layerGap: t.layerGap })(n.constraints)(e.ordered)(r)(qr(O((i) => L(
      i.id,
      i.ports
    ))(n.nodes)))(e.withDummies.edges)(e.withDummies.chains)($a(e.ordered)(e.withDummies.edges)((() => {
      const i = (s) => {
        if (s.tag === "Leaf")
          return Q;
        if (s.tag === "Node")
          return Dt("Node", s._1, s._2, s._3, L(s._4._1 * 4, s._4._2), i(s._5), i(s._6));
        f();
      };
      return i(r);
    })()))
  };
  return { pipeline: o, result: dp(t)(n)(o) };
}, pp = (t) => (n) => (e) => hp(t)(n)({
  ...e,
  ordered: Sh({
    iterations: t.iterations,
    constraints: n.constraints,
    modelOrder: qr(Pt((r) => (o) => L(o.id, r))(n.nodes))
  })(e.withDummies.layers)(e.withDummies.edges)
}), $p = (t) => (n) => (e) => pp(t)(n)({
  ...e,
  withDummies: Ud(e.layered.nodeLayer)(e.acyclic.edges)(e.layered.layers)
}), mp = (t) => (n) => {
  const e = O((o) => o.id)(n.nodes), r = Wh(t.cycleBreaker)(e)(n.constraints)(n.edges);
  return $p(t)(n)({
    acyclic: r,
    layered: sp(t.layerer)(n.constraints)(r.edges)(e),
    withDummies: gp,
    ordered: [],
    placements: []
  });
}, Np = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Jp = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ea = /* @__PURE__ */ jt(G)(Bt), vp = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
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
}, Tp = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
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
}, yp = /* @__PURE__ */ J((t) => (n) => Y(G)(n)()(t))(Q), wp = /* @__PURE__ */ J((t) => (n) => Y(G)(n)()(t))(Q), Lp = Yr.traverse(Xi), Rs = /* @__PURE__ */ jt(G)(Bt), kp = (t) => (n) => (e) => {
  const r = ln((o) => o.id === e)(t.graph.edges);
  if (r.tag === "Just")
    return b("Just", r._1);
  if (r.tag === "Nothing")
    return Np(e)(n);
  f();
}, bp = (t) => (n) => (e) => ({
  x: e.position._1 * t,
  y: e.position._2 * t,
  w: e.size._1 * t,
  h: e.size._2 * t,
  label: (() => {
    const r = Jp(e.node)(n);
    if (r.tag === "Just")
      return r._1;
    if (r.tag === "Nothing")
      return e.node;
    f();
  })()
}), Ep = (t) => ({ id: t, size: L(1, 1), ports: [], label: b("Just", t) }), xp = (t) => (n) => (e) => L(e.node, bp(t)(n)(e)), Cp = (t) => Ea(vt((n) => b(
  "Just",
  L(n.edge, { id: n.edge, from: { node: n.from, port: T }, to: { node: n.to, port: T } })
))(bt(t.scenes)((n) => n.tag === "DataFlow" ? vt((e) => e.kind.tag === "SendToken" ? b("Just", e.kind._1) : T)(n._1.events) : []))), xa = (t) => {
  const n = S0(t), e = gt((o) => vp(o.id)(n.nodes), t.graph.nodes), r = gt((o) => Tp(o.id)(n.edges), t.graph.edges);
  return {
    nodes: [
      ...e,
      ...O(Ep)(Et(
        Pn.foldr,
        ae(G.compare, n.nodes, yp(O((o) => o.id)(e)))
      ))
    ],
    edges: [
      ...r,
      ...vt(kp(t)(Cp(t)))(Et(
        Pn.foldr,
        ae(G.compare, n.edges, wp(O((o) => o.id)(r)))
      ))
    ],
    constraints: t.graph.constraints
  };
}, Sp = (t) => {
  const n = Lp((e) => {
    const r = Cl(Il)((() => {
      if (e.label.tag === "Just")
        return e.label._1;
      if (e.label.tag === "Nothing")
        return e.id;
      f();
    })());
    return () => {
      const o = r();
      return L(e.id, o);
    };
  })(xa(t).nodes);
  return () => {
    const e = n();
    return Rs(e);
  };
}, Gp = (t) => (n) => {
  const e = Wt((r) => T, (r) => (o) => b("Just", { head: r, tail: o }), n.segments);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ x: e._1.head.start._1 * t, y: e._1.head.start._2 * t }, ...O((r) => ({ x: r.end._1 * t, y: r.end._2 * t }))([e._1.head, ...e._1.tail])];
  f();
}, Ip = (t) => (n) => L(n.edge, Gp(t)(n)), Pp = (t) => (n) => (e) => ({
  nodes: Rs(O(xp(ct(4) * t)(n))(e.nodes)),
  edges: Ea(O(Ip(t))(e.edges)),
  chipExtras: Q
}), Ap = ct(4) * 8, Rp = (t) => (n) => {
  const e = Dl(Ap)(t)(Ql(Bl)(xa(n)));
  return Pp(8)(Rs(O((r) => L(
    r.id,
    (() => {
      if (r.label.tag === "Just")
        return r.label._1;
      if (r.label.tag === "Nothing")
        return r.id;
      f();
    })()
  ))(e.nodes)))(mp(_p)(e).result);
}, Du = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Fp = (t) => (n) => (e) => {
  const r = t < 0.05 ? t : 0.05, o = (s, u) => {
    if (u.tag === "Leaf")
      return s;
    if (u.tag === "Node")
      return o(
        (() => {
          const c = Du(u._3)(e), a = (() => {
            if (c.tag === "Just")
              return c._1;
            if (c.tag === "Nothing")
              return { x: u._4.x, y: u._4.y, vx: 0, vy: 0 };
            f();
          })(), g = a.vx + (180 * (u._4.x - a.x) - 22 * a.vx) * r, l = a.vy + (180 * (u._4.y - a.y) - 22 * a.vy) * r;
          return Y(G)(u._3)({ x: a.x + g * r, y: a.y + l * r, vx: g, vy: l })(o(s, u._5));
        })(),
        u._6
      );
    f();
  }, i = o(Q, n);
  return {
    springs: i,
    applied: (() => {
      const s = (u, c) => {
        if (c.tag === "Leaf")
          return u;
        if (c.tag === "Node")
          return s(
            (() => {
              const a = s(u, c._5), g = Du(c._3)(i);
              if (g.tag === "Just")
                return Y(G)(c._3)({ ...c._4, x: g._1.x, y: g._1.y })(a);
              if (g.tag === "Nothing")
                return Y(G)(c._3)(c._4)(a);
              f();
            })(),
            c._6
          );
        f();
      };
      return s(Q, n);
    })()
  };
};
(function() {
  var t = {}, n = "Pure", e = "Throw", r = "Catch", o = "Sync", i = "Async", s = "Bind", u = "Bracket", c = "Fork", a = "Sequential", g = "Map", l = "Apply", d = "Alt", _ = "Cons", h = "Resume", p = "Release", $ = "Finalizer", m = "Finalized", N = "Forked";
  function v(S, F, W, K) {
    this.tag = S, this._1 = F, this._2 = W, this._3 = K;
  }
  function w(S) {
    var F = function(W, K, V) {
      return new v(S, W, K, V);
    };
    return F.tag = S, F;
  }
  function y(S) {
    return new v(n, void 0);
  }
  function k(S) {
    try {
      S();
    } catch (F) {
      setTimeout(function() {
        throw F;
      }, 0);
    }
  }
  function E(S, F, W) {
    try {
      return F(W());
    } catch (K) {
      return S(K);
    }
  }
  function I(S, F, W) {
    try {
      return F(W)();
    } catch (K) {
      return W(S(K))(), y;
    }
  }
  var D = (function() {
    var S = 1024, F = 0, W = 0, K = new Array(S), V = !1;
    function B() {
      var nt;
      for (V = !0; F !== 0; )
        F--, nt = K[W], K[W] = void 0, W = (W + 1) % S, nt();
      V = !1;
    }
    return {
      isDraining: function() {
        return V;
      },
      enqueue: function(nt) {
        var M;
        F === S && (M = V, B(), V = M), K[(W + F) % S] = nt, F++, V || B();
      }
    };
  })();
  function z(S) {
    var F = {}, W = 0, K = 0;
    return {
      register: function(V) {
        var B = W++;
        V.onComplete({
          rethrow: !0,
          handler: function(nt) {
            return function() {
              K--, delete F[B];
            };
          }
        })(), F[B] = V, K++;
      },
      isEmpty: function() {
        return K === 0;
      },
      killAll: function(V, B) {
        return function() {
          if (K === 0)
            return B();
          var nt = 0, M = {};
          function tt(st) {
            M[st] = F[st].kill(V, function(_t) {
              return function() {
                delete M[st], nt--, S.isLeft(_t) && S.fromLeft(_t) && setTimeout(function() {
                  throw S.fromLeft(_t);
                }, 0), nt === 0 && B();
              };
            })();
          }
          for (var ot in F)
            F.hasOwnProperty(ot) && (nt++, tt(ot));
          return F = {}, W = 0, K = 0, function(st) {
            return new v(o, function() {
              for (var _t in M)
                M.hasOwnProperty(_t) && M[_t]();
            });
          };
        };
      }
    };
  }
  var U = 0, P = 1, R = 2, j = 3, et = 4, X = 5, A = 6;
  function x(S, F, W) {
    var K = 0, V = U, B = W, nt = null, M = null, tt = null, ot = null, st = null, _t = 0, At = 0, Tt = null, Vt = !0;
    function ht(it) {
      for (var ut, $t, Nt; ; )
        switch (ut = null, $t = null, Nt = null, V) {
          case R:
            V = P;
            try {
              B = tt(B), ot === null ? tt = null : (tt = ot._1, ot = ot._2);
            } catch (It) {
              V = X, nt = S.left(It), B = null;
            }
            break;
          case j:
            S.isLeft(B) ? (V = X, nt = B, B = null) : tt === null ? V = X : (V = R, B = S.fromRight(B));
            break;
          case P:
            switch (B.tag) {
              case s:
                tt && (ot = new v(_, tt, ot)), tt = B._2, V = P, B = B._1;
                break;
              case n:
                tt === null ? (V = X, B = S.right(B._1)) : (V = R, B = B._1);
                break;
              case o:
                V = j, B = E(S.left, S.right, B._1);
                break;
              case i:
                V = et, B = I(S.left, B._1, function(It) {
                  return function() {
                    K === it && (K++, D.enqueue(function() {
                      K === it + 1 && (V = j, B = It, ht(K));
                    }));
                  };
                });
                return;
              case e:
                V = X, nt = S.left(B._1), B = null;
                break;
              // Enqueue the Catch so that we can call the error handler later on
              // in case of an exception.
              case r:
                tt === null ? st = new v(_, B, st, M) : st = new v(_, B, new v(_, new v(h, tt, ot), st, M), M), tt = null, ot = null, V = P, B = B._1;
                break;
              // Enqueue the Bracket so that we can call the appropriate handlers
              // after resource acquisition.
              case u:
                _t++, tt === null ? st = new v(_, B, st, M) : st = new v(_, B, new v(_, new v(h, tt, ot), st, M), M), tt = null, ot = null, V = P, B = B._1;
                break;
              case c:
                V = j, ut = x(S, F, B._2), F && F.register(ut), B._1 && ut.run(), B = S.right(ut);
                break;
              case a:
                V = P, B = q(S, F, B._1);
                break;
            }
            break;
          case X:
            if (tt = null, ot = null, st === null)
              V = A, B = M || nt || B;
            else
              switch (ut = st._3, Nt = st._1, st = st._2, Nt.tag) {
                // We cannot recover from an unmasked interrupt. Otherwise we should
                // continue stepping, or run the exception handler if an exception
                // was raised.
                case r:
                  M && M !== ut && _t === 0 ? V = X : nt && (V = P, B = Nt._2(S.fromLeft(nt)), nt = null);
                  break;
                // We cannot resume from an unmasked interrupt or exception.
                case h:
                  M && M !== ut && _t === 0 || nt ? V = X : (tt = Nt._1, ot = Nt._2, V = R, B = S.fromRight(B));
                  break;
                // If we have a bracket, we should enqueue the handlers,
                // and continue with the success branch only if the fiber has
                // not been interrupted. If the bracket acquisition failed, we
                // should not run either.
                case u:
                  _t--, nt === null && ($t = S.fromRight(B), st = new v(_, new v(p, Nt._2, $t), st, ut), (M === ut || _t > 0) && (V = P, B = Nt._3($t)));
                  break;
                // Enqueue the appropriate handler. We increase the bracket count
                // because it should not be cancelled.
                case p:
                  st = new v(_, new v(m, B, nt), st, M), V = P, M && M !== ut && _t === 0 ? B = Nt._1.killed(S.fromLeft(M))(Nt._2) : nt ? B = Nt._1.failed(S.fromLeft(nt))(Nt._2) : B = Nt._1.completed(S.fromRight(B))(Nt._2), nt = null, _t++;
                  break;
                case $:
                  _t++, st = new v(_, new v(m, B, nt), st, M), V = P, B = Nt._1;
                  break;
                case m:
                  _t--, V = X, B = Nt._1, nt = Nt._2;
                  break;
              }
            break;
          case A:
            for (var Rt in Tt)
              Tt.hasOwnProperty(Rt) && (Vt = Vt && Tt[Rt].rethrow, k(Tt[Rt].handler(B)));
            Tt = null, M && nt ? setTimeout(function() {
              throw S.fromLeft(nt);
            }, 0) : S.isLeft(B) && Vt && setTimeout(function() {
              if (Vt)
                throw S.fromLeft(B);
            }, 0);
            return;
          case U:
            V = P;
            break;
          case et:
            return;
        }
    }
    function mt(it) {
      return function() {
        if (V === A)
          return Vt = Vt && it.rethrow, it.handler(B)(), function() {
          };
        var ut = At++;
        return Tt = Tt || {}, Tt[ut] = it, function() {
          Tt !== null && delete Tt[ut];
        };
      };
    }
    function lt(it, ut) {
      return function() {
        if (V === A)
          return ut(S.right(void 0))(), function() {
          };
        var $t = mt({
          rethrow: !1,
          handler: function() {
            return ut(S.right(void 0));
          }
        })();
        switch (V) {
          case U:
            M = S.left(it), V = A, B = M, ht(K);
            break;
          case et:
            M === null && (M = S.left(it)), _t === 0 && (V === et && (st = new v(_, new v($, B(it)), st, M)), V = X, B = null, nt = null, ht(++K));
            break;
          default:
            M === null && (M = S.left(it)), _t === 0 && (V = X, B = null, nt = null);
        }
        return $t;
      };
    }
    function dt(it) {
      return function() {
        var ut = mt({
          rethrow: !1,
          handler: it
        })();
        return V === U && ht(K), ut;
      };
    }
    return {
      kill: lt,
      join: dt,
      onComplete: mt,
      isSuspended: function() {
        return V === U;
      },
      run: function() {
        V === U && (D.isDraining() ? ht(K) : D.enqueue(function() {
          ht(K);
        }));
      }
    };
  }
  function C(S, F, W, K) {
    var V = 0, B = {}, nt = 0, M = {}, tt = new Error("[ParAff] Early exit"), ot = null, st = t;
    function _t(mt, lt, dt) {
      var it = lt, ut = null, $t = null, Nt = 0, Rt = {}, It, tn;
      t: for (; ; )
        switch (It = null, it.tag) {
          case N:
            if (it._3 === t && (It = B[it._1], Rt[Nt++] = It.kill(mt, function(zn) {
              return function() {
                Nt--, Nt === 0 && dt(zn)();
              };
            })), ut === null)
              break t;
            it = ut._2, $t === null ? ut = null : (ut = $t._1, $t = $t._2);
            break;
          case g:
            it = it._2;
            break;
          case l:
          case d:
            ut && ($t = new v(_, ut, $t)), ut = it, it = it._1;
            break;
        }
      if (Nt === 0)
        dt(S.right(void 0))();
      else
        for (tn = 0, It = Nt; tn < It; tn++)
          Rt[tn] = Rt[tn]();
      return Rt;
    }
    function At(mt, lt, dt) {
      var it, ut, $t, Nt, Rt, It;
      for (S.isLeft(mt) ? (it = mt, ut = null) : (ut = mt, it = null); ; ) {
        if ($t = null, Nt = null, Rt = null, It = null, ot !== null)
          return;
        if (lt === null) {
          K(it || ut)();
          return;
        }
        if (lt._3 !== t)
          return;
        switch (lt.tag) {
          case g:
            it === null ? (lt._3 = S.right(lt._1(S.fromRight(ut))), ut = lt._3) : lt._3 = it;
            break;
          case l:
            if ($t = lt._1._3, Nt = lt._2._3, it) {
              if (lt._3 = it, Rt = !0, It = nt++, M[It] = _t(tt, it === $t ? lt._2 : lt._1, function() {
                return function() {
                  delete M[It], Rt ? Rt = !1 : dt === null ? At(it, null, null) : At(it, dt._1, dt._2);
                };
              }), Rt) {
                Rt = !1;
                return;
              }
            } else {
              if ($t === t || Nt === t)
                return;
              ut = S.right(S.fromRight($t)(S.fromRight(Nt))), lt._3 = ut;
            }
            break;
          case d:
            if ($t = lt._1._3, Nt = lt._2._3, $t === t && S.isLeft(Nt) || Nt === t && S.isLeft($t))
              return;
            if ($t !== t && S.isLeft($t) && Nt !== t && S.isLeft(Nt))
              it = ut === $t ? Nt : $t, ut = null, lt._3 = it;
            else if (lt._3 = ut, Rt = !0, It = nt++, M[It] = _t(tt, ut === $t ? lt._2 : lt._1, function() {
              return function() {
                delete M[It], Rt ? Rt = !1 : dt === null ? At(ut, null, null) : At(ut, dt._1, dt._2);
              };
            }), Rt) {
              Rt = !1;
              return;
            }
            break;
        }
        dt === null ? lt = null : (lt = dt._1, dt = dt._2);
      }
    }
    function Tt(mt) {
      return function(lt) {
        return function() {
          delete B[mt._1], mt._3 = lt, At(lt, mt._2._1, mt._2._2);
        };
      };
    }
    function Vt() {
      var mt = P, lt = W, dt = null, it = null, ut, $t;
      t: for (; ; )
        switch (ut = null, $t = null, mt) {
          case P:
            switch (lt.tag) {
              case g:
                dt && (it = new v(_, dt, it)), dt = new v(g, lt._1, t, t), lt = lt._2;
                break;
              case l:
                dt && (it = new v(_, dt, it)), dt = new v(l, t, lt._2, t), lt = lt._1;
                break;
              case d:
                dt && (it = new v(_, dt, it)), dt = new v(d, t, lt._2, t), lt = lt._1;
                break;
              default:
                $t = V++, mt = X, ut = lt, lt = new v(N, $t, new v(_, dt, it), t), ut = x(S, F, ut), ut.onComplete({
                  rethrow: !1,
                  handler: Tt(lt)
                })(), B[$t] = ut, F && F.register(ut);
            }
            break;
          case X:
            if (dt === null)
              break t;
            dt._1 === t ? (dt._1 = lt, mt = P, lt = dt._2, dt._2 = t) : (dt._2 = lt, lt = dt, it === null ? dt = null : (dt = it._1, it = it._2));
        }
      for (st = lt, $t = 0; $t < V; $t++)
        B[$t].run();
    }
    function ht(mt, lt) {
      ot = S.left(mt);
      var dt;
      for (var it in M)
        if (M.hasOwnProperty(it)) {
          dt = M[it];
          for (it in dt)
            dt.hasOwnProperty(it) && dt[it]();
        }
      M = null;
      var ut = _t(mt, st, lt);
      return function($t) {
        return new v(i, function(Nt) {
          return function() {
            for (var Rt in ut)
              ut.hasOwnProperty(Rt) && ut[Rt]();
            return y;
          };
        });
      };
    }
    return Vt(), function(mt) {
      return new v(i, function(lt) {
        return function() {
          return ht(mt, lt);
        };
      });
    };
  }
  function q(S, F, W) {
    return new v(i, function(K) {
      return function() {
        return C(S, F, W, K);
      };
    });
  }
  return v.EMPTY = t, v.Pure = w(n), v.Throw = w(e), v.Catch = w(r), v.Sync = w(o), v.Async = w(i), v.Bind = w(s), v.Bracket = w(u), v.Fork = w(c), v.Seq = w(a), v.ParMap = w(g), v.ParApply = w(l), v.ParAlt = w(d), v.Fiber = x, v.Supervisor = z, v.Scheduler = D, v.nonCanceler = y, v;
})();
let co = null;
function Bp() {
  return co || (typeof document > "u" ? null : (co = document.createElement("canvas").getContext("2d"), co));
}
const Wu = /* @__PURE__ */ new Map(), Ca = (t) => (n) => (e) => (r) => {
  const o = `${e} ${n}px ${t}|${r}`, i = Wu.get(o);
  if (i !== void 0) return i;
  const s = Bp();
  if (!s) return r.length * n * 0.62;
  s.font = `${e} ${n}px ${t}`;
  const u = s.measureText(r).width;
  return Wu.set(o, u), u;
}, Qp = (t) => () => t.clip("evenodd"), Dp = (t) => (n) => () => {
  const e = Math.max(8, Math.ceil(8 / Math.max(n.tile, 1e-3))), r = Math.max(2, Math.round(n.tile * e)), o = document.createElement("canvas");
  o.width = r, o.height = r;
  const i = o.getContext("2d");
  i.scale(e, e), i.fillStyle = n.bgCss, i.fillRect(0, 0, n.tile, n.tile), i.fillStyle = n.dotCss, i.beginPath(), i.arc(n.tile / 2, n.tile / 2, n.dotR, 0, 2 * Math.PI), i.fill();
  const s = t.createPattern(o, "repeat");
  s && typeof s.setTransform == "function" && s.setTransform(new DOMMatrix().scaleSelf(1 / e, 1 / e)), t.save(), t.fillStyle = s, t.fillRect(n.vx, n.vy, n.vw, n.vh), t.restore();
}, Wp = (t) => (n) => (e) => (r) => (o) => (i) => () => {
  if (typeof t.roundRect == "function")
    t.roundRect(n, e, r, o, i);
  else {
    const s = Math.min(i, r / 2, o / 2);
    t.moveTo(n + s, e), t.lineTo(n + r - s, e), t.quadraticCurveTo(n + r, e, n + r, e + s), t.lineTo(n + r, e + o - s), t.quadraticCurveTo(n + r, e + o, n + r - s, e + o), t.lineTo(n + s, e + o), t.quadraticCurveTo(n, e + o, n, e + o - s), t.lineTo(n, e + s), t.quadraticCurveTo(n, e, n + s, e), t.closePath();
  }
}, qp = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Fs = (t) => (n) => (e) => {
  const r = n.stroke;
  return () => {
    const o = r.value, i = Rg(t)(e);
    if (o !== e)
      return i(), n.stroke.value = e;
  };
}, Hp = (t) => (n) => (e) => {
  const r = n.font;
  return () => {
    const o = r.value, i = Yg(t)(e);
    if (o !== e)
      return i(), n.font.value = e;
  };
}, Ur = (t) => (n) => (e) => {
  const r = n.fill;
  return () => {
    const o = r.value, i = Ag(t)(e);
    if (o !== e)
      return i(), n.fill.value = e;
  };
}, Yo = (t) => (n) => {
  const e = n.length, r = (i) => {
    if (i >= e)
      return () => {
      };
    const s = i >= 0 && i < n.length ? n[i] : 0;
    if (s === 1) {
      const u = Wg(t)((() => {
        const a = i + 1 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })())((() => {
        const a = i + 2 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 2) {
      const u = Dg(t)((() => {
        const a = i + 1 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })())((() => {
        const a = i + 2 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 3) {
      const u = Ug(t)({
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
      const u = Mg(t)({
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
      const u = qg(t), c = r(i + 1 | 0);
      return () => (u(), c());
    }
    return () => {
    };
  }, o = $c(t);
  return () => (o(), r(0)());
}, Op = () => ({ font: { value: "" }, fill: { value: "" }, stroke: { value: "" } }), zp = (t) => (n) => {
  const e = Og(t)({ x: 0, y: 0, width: n.width, height: n.height });
  return () => {
    e();
    const r = Op();
    return { ctx: t, surface: n, styleCache: r, maskDepth: { value: 0 } };
  };
}, Vp = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, Yp = (t) => an(t.weight) + " " + ec(t.size) + "px Ilisarniq, ui-sans-serif, system-ui, sans-serif", ee = (t) => {
  const n = ec(ct(t.a) / 255);
  return t.a >= 255 ? "rgb(" + an(t.r) + "," + an(t.g) + "," + an(t.b) + ")" : "rgba(" + an(t.r) + "," + an(t.g) + "," + an(t.b) + "," + n + ")";
}, Xp = (t) => (n) => (e) => (r) => {
  const o = Ur(t)(e)(ee(r));
  return () => (o(), Hg(t)({ x: 0, y: 0, width: n.width, height: n.height })());
}, Up = (t) => (n) => (e) => {
  const r = n.font;
  return () => (r.value = "", n.fill.value = "", n.stroke.value = "", Dp(t)({
    vx: e.viewport.vx,
    vy: e.viewport.vy,
    vw: e.viewport.vw,
    vh: e.viewport.vh,
    bgCss: ee(e.bgColor),
    dotCss: ee(e.dotColor),
    tile: e.tile,
    dotR: e.dotRadius
  })());
}, Mp = (t) => (n) => (e) => (r) => {
  const o = Ur(t)(n)(ee(r));
  return () => (o(), Yo(t)(e)(), is(t)());
}, Kp = (t) => (n) => (e) => (r) => (o) => {
  const i = Ur(t)(n)(ee(r));
  return () => (i(), Fs(t)(n)(ee(o.color))(), rs(t)(o.width)(), Do(t)((() => {
    if (o.lineJoin === "RoundJoin")
      return Qo;
    if (o.lineJoin === "BevelJoin")
      return fs;
    if (o.lineJoin === "MiterJoin")
      return gs;
    f();
  })())(), hs(t)((() => {
    if (o.lineCap === "ButtCap")
      return ds;
    if (o.lineCap === "RoundCap")
      return _s;
    if (o.lineCap === "SquareCap")
      return ls;
    f();
  })())(), Yo(t)(e)(), is(t)(), os(t)());
}, jp = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = $c(t);
  return () => {
    if (s(), Wp(t)(e.x)(e.y)(e.w)(e.h)(r)(), o.tag === "Just" ? (Ur(t)(n)(ee(o._1.color))(), is(t)()) : o.tag === "Nothing" || f(), i.tag === "Just")
      return Fs(t)(n)(ee(i._1.color))(), rs(t)(i._1.width)(), Do(t)((() => {
        if (i._1.lineJoin === "RoundJoin")
          return Qo;
        if (i._1.lineJoin === "BevelJoin")
          return fs;
        if (i._1.lineJoin === "MiterJoin")
          return gs;
        f();
      })())(), hs(t)((() => {
        if (i._1.lineCap === "ButtCap")
          return ds;
        if (i._1.lineCap === "RoundCap")
          return _s;
        if (i._1.lineCap === "SquareCap")
          return ls;
        f();
      })())(), os(t)();
    i.tag !== "Nothing" && f();
  };
}, Zp = (t) => (n) => (e) => (r) => {
  const o = Fs(t)(n)(ee(r.color));
  return () => (o(), rs(t)(r.width)(), Do(t)((() => {
    if (r.lineJoin === "RoundJoin")
      return Qo;
    if (r.lineJoin === "BevelJoin")
      return fs;
    if (r.lineJoin === "MiterJoin")
      return gs;
    f();
  })())(), hs(t)((() => {
    if (r.lineCap === "ButtCap")
      return ds;
    if (r.lineCap === "RoundCap")
      return _s;
    if (r.lineCap === "SquareCap")
      return ls;
    f();
  })())(), Yo(t)(e)(), os(t)());
}, t$ = (t) => (n) => (e) => {
  const r = Ur(t)(n)(ee(e.color));
  return () => (r(), Hp(t)(n)(Yp(e.font))(), u0(t)((() => {
    if (e.align === "AlignLeft")
      return n0;
    if (e.align === "AlignCenter")
      return r0;
    if (e.align === "AlignRight")
      return e0;
    f();
  })())(), s0(t)((() => {
    if (e.baseline === "BaselineTop")
      return Kg;
    if (e.baseline === "BaselineMiddle")
      return jg;
    if (e.baseline === "BaselineAlphabetic")
      return Zg;
    if (e.baseline === "BaselineBottom")
      return t0;
    f();
  })())(), Xg(t)(e.content)(e.x)(e.y)());
}, Sa = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => Vp
}, n$ = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => Sa
}, e$ = (t) => (n) => (e) => {
  const r = qp(n.width / e.vw)(n.height / e.vh), o = mc(t)({ translateX: (n.width - e.vw * r) / 2 - e.vx * r, translateY: (n.height - e.vh * r) / 2 - e.vy * r });
  return () => (o(), ss(t)({ scaleX: r, scaleY: r })(), Do(t)(Qo)());
}, r$ = { pure: (t) => (n) => () => t, Apply0: () => Sa }, o$ = { Applicative0: () => r$, Bind1: () => n$ }, Ga = {
  fillPath: (t) => (n) => (e) => {
    const r = Mp(e.ctx)(e.styleCache)(t)(n.color), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = Zp(e.ctx)(e.styleCache)(t)(n), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = Kp(r.ctx)(r.styleCache)(t)(n.color)(e), i = r.maskDepth;
    return () => {
      if (i.value === 0)
        return o();
    };
  },
  drawRoundedRect: (t) => (n) => (e) => (r) => (o) => {
    const i = jp(o.ctx)(o.styleCache)(t)(n)(e)(r), s = o.maskDepth;
    return () => {
      if (s.value === 0)
        return i();
    };
  },
  drawText: (t) => (n) => {
    const e = t$(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  pushTransform: (t) => (n) => {
    const e = hr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", mc(n.ctx)({ translateX: t.tx, translateY: t.ty })(), ss(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popTransform: (t) => {
    const n = pr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushClip: (t) => (n) => (e) => {
    const r = hr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0) {
        if (r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", Yo(e.ctx)(t)(), n === "NonZero")
          return Qg(e.ctx)();
        if (n === "EvenOdd")
          return Qp(e.ctx)();
        f();
      }
    };
  },
  popClip: (t) => {
    const n = pr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBlend: (t) => (n) => {
    const e = hr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        if (e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", t === "Normal")
          return js(n.ctx)(o0)();
        if (t === "Difference")
          return js(n.ctx)(i0)();
        f();
      }
    };
  },
  popBlend: (t) => {
    const n = pr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushAlpha: (t) => (n) => {
    const e = hr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", Bg(n.ctx)(t)();
    };
  },
  popAlpha: (t) => {
    const n = pr(t.ctx), e = t.maskDepth;
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
    const e = e$(n.ctx)(n.surface)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  clearBackground: (t) => (n) => {
    const e = Xp(n.ctx)(n.surface)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  backgroundDots: (t) => (n) => {
    const e = Up(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = Ca(t.family)(t.size)(t.weight)(Pr(n));
    return () => r;
  },
  Monad0: () => o$
};
function i$(t, n) {
  const e = n.x - t.x, r = n.y - t.y;
  return Math.sqrt(e * e + r * r);
}
function s$(t) {
  const n = t.length, e = new Array(n);
  for (let r = 0; r < n; r++) {
    const o = t[r], i = t[(r + 1) % n];
    e[r] = { a: o, b: i, len: i$(o, i) };
  }
  return e;
}
function u$(t, n, e) {
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
function qu(t, n) {
  if (n.length === 0) return [];
  const e = s$(n);
  let r = 0;
  for (let i = 0; i < e.length; i++) r += e[i].len;
  const o = new Array(t);
  for (let i = 0; i < t; i++)
    o[i] = u$(e, n, i * r / t);
  return o;
}
function c$(t, n) {
  const e = n.length;
  if (e === 0) return n;
  const r = (t % e + e) % e | 0, o = new Array(e);
  for (let i = 0; i < e; i++) o[i] = n[(i + r) % e];
  return o;
}
function a$(t, n) {
  const e = n.length;
  if (e === 0) return n;
  let r = 0, o = 1 / 0;
  for (let i = 0; i < e; i++) {
    let s = 0;
    for (let u = 0; u < e; u++) {
      const c = t[u] || { x: 0, y: 0 }, a = n[(u + i) % e] || { x: 0, y: 0 }, g = c.x - a.x, l = c.y - a.y;
      s += g * g + l * l;
    }
    s < o && (o = s, r = i);
  }
  return c$(r, n);
}
const Hu = (t) => (n) => (e) => {
  const r = qu(t, n), o = qu(t, e), i = a$(r, o);
  return { from: r, to: i };
};
function Ou(t) {
  const n = t.length;
  if (n === 0) return { x: 0, y: 0 };
  let e = 0, r = 0;
  for (let o = 0; o < n; o++)
    e += t[o].x, r += t[o].y;
  return { x: e / n, y: r / n };
}
function f$(t, n) {
  const e = n.x - t.x, r = n.y - t.y, o = Math.sqrt(e * e + r * r);
  return o <= 1e-4 ? { x: 1, y: 0 } : { x: e / o, y: r / o };
}
function g$(t, n) {
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
function _$(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
const zu = (t) => (n) => (e) => (r) => {
  const o = n.length;
  if (o === 0) return [];
  const i = Ou(n), s = Ou(e), u = f$(i, s), c = new Array(o);
  let a = 1 / 0, g = -1 / 0;
  for (let _ = 0; _ < o; _++) {
    const h = n[_], p = (h.x - i.x) * u.x + (h.y - i.y) * u.y;
    c[_] = p, p < a && (a = p), p > g && (g = p);
  }
  const l = g - a;
  let d = new Array(o);
  for (let _ = 0; _ < o; _++) {
    const h = n[_], p = e[_];
    if (p === void 0) {
      d[_] = h;
      continue;
    }
    const $ = l <= 1e-4 ? 0 : r.maxDelay * (1 - (c[_] - a) / l), m = Math.max(1e-4, 1 - $), N = _$((t - $) / m), v = N * N * (3 - 2 * N);
    d[_] = {
      x: h.x + (p.x - h.x) * v,
      y: h.y + (p.y - h.y) * v
    };
  }
  for (let _ = 0; _ < r.smoothPasses; _++)
    d = g$(0.5, d);
  return d;
}, Ia = (t) => t, Pa = (t) => t, Xo = (t) => t, Aa = (t) => t, l$ = (t) => t, Ra = (t) => t, Fa = (t) => t, Ba = /* @__PURE__ */ Fa("BaselineTop"), Hr = /* @__PURE__ */ Fa("BaselineMiddle"), Io = /* @__PURE__ */ Ra("AlignLeft"), Bs = /* @__PURE__ */ Ra("AlignCenter"), re = /* @__PURE__ */ l$("RoundJoin"), we = /* @__PURE__ */ Aa("ButtCap"), Qa = /* @__PURE__ */ Aa("RoundCap"), d$ = /* @__PURE__ */ Xo("LayerPolyOut"), h$ = /* @__PURE__ */ Xo("LayerPolyIn"), p$ = /* @__PURE__ */ Xo("LayerNodeMask"), $$ = /* @__PURE__ */ Xo("LayerOverlay"), Qi = /* @__PURE__ */ Pa("NonZero"), m$ = /* @__PURE__ */ Pa("EvenOdd"), N$ = /* @__PURE__ */ Ia("Normal"), Di = /* @__PURE__ */ Ia("Difference"), sn = { r: 255, g: 255, b: 255, a: 255 }, ue = { r: 26, g: 26, b: 26, a: 255 }, Ni = (t, n, e) => ({ tag: t, _1: n, _2: e }), le = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Or = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Da = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Fe = (t) => (n) => (e) => {
  const r = pt.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = pt.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, An = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, he = /* @__PURE__ */ (() => {
  const t = On.unfoldr(De);
  return (n) => t(Wn("IterNode", n, Qe));
})(), Ji = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Wa = /* @__PURE__ */ jt(G)(Bt), Vu = /* @__PURE__ */ J(ur)(0), Uo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, qa = (t) => {
  const n = t.Monad0().Bind1(), e = t.popTransform, r = t.popAlpha;
  return (o) => (i) => (s) => (u) => (c) => n.bind(t.pushAlpha(o.fadeAlpha))(() => n.bind(t.pushTransform({
    tx: i * (1 - o.popScale),
    ty: s * (1 - o.popScale),
    sx: o.popScale,
    sy: o.popScale
  }))(() => n.bind(t.pushTransform({ tx: 0, ty: u.y * (1 - o.flipY), sx: 1, sy: o.flipY }))(() => n.bind(c)(() => n.bind(e)(() => n.bind(e)(() => r))))));
}, pe = (t) => {
  const n = t.Apply0();
  return (e) => J((r) => (o) => n.apply(n.Functor0().map((i) => oc)(r))(e(o)))(t.pure());
}, J$ = (t) => ({ x: t.x, y: t.y, w: t.w, h: t.h }), v$ = /* @__PURE__ */ J((t) => (n) => t + n.len)(0), T$ = (t) => {
  const n = Wt((e) => T, (e) => (r) => b("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...bt(Gt(1, t.length, t))((e) => [2, e.x, e.y]), 5];
  f();
}, y$ = (t) => (n) => {
  const e = t.y + t.h - 6, r = t.y + 6, o = t.x + 14, i = t.x + t.w - 14, s = J(Or)(0)(O((u) => o - 10 < u.x + u.w + 12 && i + 10 > u.x - 12 && r - 10 < u.y + u.h + 12 && e + 10 > u.y - 12 ? le((u.x + u.w + 12 - (o - 10)) / 0.7071067811865476)((e + 10 - (u.y - 12)) / 0.7071067811865476) : 0)(n));
  return { ...t, x: t.x + s * 0.7071067811865476, y: t.y - s * 0.7071067811865476 };
}, Ha = (t) => (n) => {
  const e = le(n)(le(t.w / 2)(t.h / 2));
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
}, w$ = (t) => (n) => (e) => J((r) => (o) => {
  const i = Da(o)(n);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just") {
    const s = y$(i._1)(r.obstacles);
    return { acc: Y(G)(o)(s)(r.acc), obstacles: gn(r.obstacles)(s) };
  }
  f();
})({ acc: Q, obstacles: e })(t).acc, L$ = (t) => {
  const n = Wt((e) => T, (e) => (r) => b("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...bt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, Oa = /* @__PURE__ */ (() => {
  const t = { r: 24, g: 24, b: 27, a: 255 }, n = { r: 244, g: 244, b: 245, a: 255 }, e = { r: 28, g: 101, b: 192, a: 255 };
  return (r) => {
    if (r === "Light")
      return {
        bg: { r: 255, g: 255, b: 255, a: 255 },
        bgTransparent: { r: 0, g: 0, b: 0, a: 0 },
        bgDot: { r: 214, g: 211, b: 209, a: 255 },
        shadowFill: { r: 255, g: 255, b: 255, a: 255 },
        shadowDot: { r: 26, g: 26, b: 26, a: 255 },
        chip: { r: 255, g: 235, b: 130, a: 255 },
        chipShadow: { r: 214, g: 211, b: 209, a: 255 },
        chipText: ue,
        nodeFill: sn,
        nodeStroke: ue,
        text: ue,
        edge: ue,
        arrowFill: ue,
        tokenOutsideFill: ue,
        tokenOutsideStroke: sn,
        tokenInside: sn,
        tokenInsideStroke: sn,
        tokenInsideBlend: Di,
        tokenInsideAlpha: 1,
        chipPillFill: ue,
        chipPillText: sn,
        chipHairline: { r: 26, g: 26, b: 26, a: 90 },
        trailDot: ue
      };
    if (r === "Dark")
      return {
        bg: t,
        bgTransparent: { r: 0, g: 0, b: 0, a: 0 },
        bgDot: { r: 63, g: 63, b: 70, a: 255 },
        shadowFill: t,
        shadowDot: n,
        chip: { r: 234, g: 179, b: 8, a: 255 },
        chipShadow: { r: 0, g: 0, b: 0, a: 120 },
        chipText: t,
        nodeFill: ue,
        nodeStroke: n,
        text: n,
        edge: n,
        arrowFill: n,
        tokenOutsideFill: sn,
        tokenOutsideStroke: sn,
        tokenInside: sn,
        tokenInsideStroke: sn,
        tokenInsideBlend: Di,
        tokenInsideAlpha: 1,
        chipPillFill: n,
        chipPillText: t,
        chipHairline: { r: 244, g: 244, b: 245, a: 120 },
        trailDot: n
      };
    if (r === "Blueprint")
      return {
        bg: e,
        bgTransparent: { r: 0, g: 0, b: 0, a: 0 },
        bgDot: { r: 90, g: 160, b: 230, a: 255 },
        shadowFill: e,
        shadowDot: sn,
        chip: sn,
        chipShadow: { r: 0, g: 0, b: 0, a: 120 },
        chipText: e,
        nodeFill: e,
        nodeStroke: sn,
        text: sn,
        edge: sn,
        arrowFill: sn,
        tokenOutsideFill: sn,
        tokenOutsideStroke: sn,
        tokenInside: sn,
        tokenInsideStroke: sn,
        tokenInsideBlend: N$,
        tokenInsideAlpha: 0.35,
        chipPillFill: sn,
        chipPillText: e,
        chipHairline: { r: 255, g: 255, b: 255, a: 120 },
        trailDot: sn
      };
    f();
  };
})(), Mo = (t) => {
  if (t.tag === "Hidden")
    return { alpha: 0, scale: 0 };
  if (t.tag === "Visible")
    return { alpha: 1, scale: 1 };
  if (t.tag === "PloppingIn")
    return { alpha: t._1 > 0 ? 1 : 0, scale: Cr(8)(0.6)(Fe(0)(1)(t._1)) };
  if (t.tag === "PloppingOut")
    return { alpha: t._1 < 1 ? 1 : 0, scale: Cr(8)(0.6)(Fe(0)(1)(1 - t._1)) };
  f();
}, Wi = (t) => (n) => bt(he(t.nodes))((e) => {
  const r = An(e._1)(n.nodes);
  return r.tag === "Just" && Mo(r._1).alpha > 0 ? Ha(e._2)(7) : [];
}), k$ = (t) => (n) => (e) => [
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
  ...Wi(n)(e)
], ao = (t) => (n) => (e) => O((r) => {
  const o = ct(r) / ct(e);
  return { x: t.x + (n.x - t.x) * o, y: t.y + (n.y - t.y) * o };
})(Xt(0, e - 1 | 0)), b$ = (t) => (n) => {
  const e = (o) => (o.x - n.x) * (o.x - n.x) + (o.y - n.y) * (o.y - n.y), r = J((o) => (i) => e(i) < e(o) ? i : o)({ x: t.x, y: t.y })([{ x: t.x, y: t.y }, { x: t.x + t.w, y: t.y }, { x: t.x, y: t.y + t.h }, { x: t.x + t.w, y: t.y + t.h }]);
  return O((o) => {
    const i = ct(o) / 5;
    return { x: r.x + (n.x - r.x) * i, y: r.y + (n.y - r.y) * i };
  })([1, 2, 3, 4]);
}, Qs = (t) => {
  const n = Ls(`
`)(t);
  return n.length === 0 ? [""] : n;
}, qi = (t) => (n) => {
  const e = le(t)(le(n.w / 2)(n.h / 2));
  return { ...n, x: n.x + e, y: n.y + e, w: n.w - 2 * e, h: n.h - 2 * e };
}, E$ = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = t.popClip, i = t.popTransform, s = t.popAlpha;
  return (u) => (c) => (a) => (g) => {
    const l = Mo(g), d = { ...a, y: a.y + 5 }, _ = d.x + d.w / 2, h = d.y + d.h / 2, p = r.bind(t.pushAlpha(l.alpha))(() => r.bind(t.pushTransform({
      tx: _ * (1 - l.scale),
      ty: h * (1 - l.scale),
      sx: l.scale,
      sy: l.scale
    }))(() => r.bind(t.drawRoundedRect({ x: d.x, y: d.y, w: d.w, h: d.h })(7)(b("Just", { color: u.shadowFill, flat: !0 }))(T))(() => r.bind((() => {
      const $ = r.bind(t.pushClip(Ha(d)(7))(Qi))(() => r.bind(t.backgroundDots({
        viewport: { vx: d.x, vy: d.y, vw: d.w, vh: d.h },
        bgColor: u.bgTransparent,
        dotColor: u.shadowDot,
        tile: 1.6,
        dotRadius: 0.25
      }))(() => o));
      return c ? $ : e.pure();
    })())(() => r.bind(t.drawRoundedRect({ x: d.x, y: d.y, w: d.w, h: d.h })(7)(T)(b(
      "Just",
      { color: u.nodeStroke, width: 1.25, lineJoin: re, lineCap: we }
    )))(() => r.bind(i)(() => s))))));
    return l.alpha > 0 ? p : e.pure();
  };
}, x$ = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = pe(e), i = t.popTransform, s = t.popAlpha;
  return (u) => (c) => (a) => (g) => {
    const l = Ls(`
`)(a.label === "" ? c : a.label), d = l.length === 0 ? [""] : l, _ = a.y + a.h / 2 - ct(d.length) * 13.2 / 2 + 6.6, h = Mo(g), p = a.x + a.w / 2, $ = a.y + a.h / 2, m = r.bind(t.pushAlpha(h.alpha))(() => r.bind(t.pushTransform({
      tx: p * (1 - h.scale),
      ty: $ * (1 - h.scale),
      sx: h.scale,
      sy: h.scale
    }))(() => r.bind(t.drawRoundedRect({ x: a.x, y: a.y, w: a.w, h: a.h })(7)(b("Just", { color: u.nodeFill, flat: !1 }))(b(
      "Just",
      { color: u.nodeStroke, width: 1.25, lineJoin: re, lineCap: we }
    )))(() => r.bind(o((N) => t.drawText({
      x: a.x + a.w / 2,
      y: _ + ct(N._1) * 13.2,
      content: N._2,
      font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 },
      color: u.text,
      align: Bs,
      baseline: Hr
    }))(Pt(gr)(d)))(() => r.bind(i)(() => s)))));
    return h.alpha > 0 ? m : e.pure();
  };
}, za = (t) => {
  const n = x$(t), e = t.Monad0().Applicative0(), r = pe(e);
  return (o) => (i) => (s) => r((u) => {
    const c = An(u._1)(s.nodes);
    if (c.tag === "Just")
      return n(o)(u._1)(u._2)(c._1);
    if (c.tag === "Nothing")
      return e.pure();
    f();
  })(he(i.nodes));
}, Va = (t) => {
  const n = E$(t), e = t.Monad0().Applicative0(), r = pe(e);
  return (o) => (i) => (s) => (u) => r((c) => {
    const a = An(c._1)(u.nodes);
    if (a.tag === "Just")
      return n(o)(i)(c._2)(a._1);
    if (a.tag === "Nothing")
      return e.pure();
    f();
  })(he(s.nodes));
}, Hi = (t) => (n) => {
  const e = n.y - t.y, r = n.x - t.x;
  return _r(r * r + e * e);
}, C$ = (t) => $n((n) => (e) => ({ a: n, b: e, len: Hi(n)(e) }), t, Gt(1, t.length, t)), S$ = (t) => (n) => {
  const e = n.length - 1 | 0, r = e >= 0 && e < n.length ? b("Just", n[e]) : T, o = (() => {
    if (r.tag === "Just")
      return [r._1];
    if (r.tag === "Nothing")
      return [];
    f();
  })(), i = 0 < n.length ? b("Just", n[0]) : T, s = (() => {
    if (i.tag === "Just")
      return i._1;
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    f();
  })(), u = n.length;
  return u < 3 ? n : [
    s,
    ...bt(Xt(1, u - 2 | 0))((c) => {
      const a = c + 1 | 0, g = a >= 0 && a < n.length ? b("Just", n[a]) : T, l = c >= 0 && c < n.length ? b("Just", n[c]) : T, d = c - 1 | 0, _ = d >= 0 && d < n.length ? b("Just", n[d]) : T;
      if (_.tag === "Just" && l.tag === "Just" && g.tag === "Just") {
        const h = l._1, p = Hi(h)(g._1), $ = Hi(_._1)(h), m = le(t)(p / 2), N = le(t)($ / 2), v = p > 0 ? m / p : 0, w = h.x + (g._1.x - h.x) * v, y = h.y + (g._1.y - h.y) * v, k = $ > 0 ? N / $ : 0, E = h.x + (_._1.x - h.x) * k, I = h.y + (_._1.y - h.y) * k;
        return O((D) => {
          const z = ct(D) / ct(10), U = 1 - z;
          return { x: U * U * E + 2 * U * z * h.x + z * z * w, y: U * U * I + 2 * U * z * h.y + z * z * y };
        })(Xt(0, 10));
      }
      return [];
    }),
    ...o
  ];
}, G$ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = pe(r);
  return (i) => (s) => (u) => (c) => (a) => (g) => {
    const l = ks(g).length, d = ct(l + 1 | 0), _ = (m) => {
      const N = (u * d - ct(m)) / 1.5, v = N < 0 ? 0 : N > 1 ? 1 : N;
      return v * v * (3 - 2 * v);
    }, p = ((m) => {
      let N = m, v = !0, w;
      for (; v; ) {
        const y = N;
        if (y >= l) {
          v = !1, w = y;
          continue;
        }
        if (_(y) >= 1) {
          N = y + 1 | 0;
          continue;
        }
        v = !1, w = y;
      }
      return w;
    })(0), $ = p >= l ? [] : Ce((m) => _(m) > 0)(Xt(p, l - 1 | 0)).init;
    return e.bind((() => {
      const m = t.drawText({
        x: c,
        y: a,
        content: _n(p)(g),
        font: i,
        color: s,
        align: Io,
        baseline: Hr
      });
      return p > 0 ? m : r.pure();
    })())(() => o((m) => e.bind(t.measureText(i)(_n(m)(g)))((N) => {
      const v = _(m);
      return t.drawText({
        x: c + N,
        y: a - (1 - v) * 10,
        content: _n(1)(Sr(Pe(_n(m)(g)))(g)),
        font: i,
        color: { ...s, a: ce(lc(v * ct(s.a))) },
        align: Io,
        baseline: Hr
      });
    }))($));
  };
}, Ko = (t) => (n) => (e) => (r) => {
  const o = O((p) => ct(Ji(1)(ks(p).length)))(r), i = Or(1)(J(ur)(0)(o)), s = Or(0.05)(1 - n - e), u = t < n ? 0 : t > 1 - e ? 1 : (t - n) / s, c = u * i, a = Ji(1)(r.length), l = ((p) => ($) => (m) => {
    let N = p, v = $, w = m, y = !0, k;
    for (; y; ) {
      const E = N, I = v, z = Wt((U) => T, (U) => (P) => b("Just", { head: U, tail: P }), w);
      if (z.tag === "Nothing") {
        y = !1, k = Ji(0)(a - 1 | 0);
        continue;
      }
      if (z.tag === "Just") {
        if (I + z._1.head >= c) {
          y = !1, k = E;
          continue;
        }
        N = E + 1 | 0, v = I + z._1.head, w = z._1.tail;
        continue;
      }
      f();
    }
    return k;
  })(0)(0)(o), d = J(ur)(0)(l < 1 ? [] : Gt(0, l, o)), _ = d / i;
  if (l >= 0 && l < o.length) {
    const p = (d + o[l]) / i;
    return {
      line: l >= 0 && l < r.length ? r[l] : "",
      phaseInLabel: (() => {
        if (p <= _)
          return 1;
        const $ = (u - _) / (p - _);
        return $ < 0 ? 0 : $ > 1 ? 1 : $;
      })()
    };
  }
  const h = (d + 1) / i;
  return {
    line: l >= 0 && l < r.length ? r[l] : "",
    phaseInLabel: (() => {
      if (h <= _)
        return 1;
      const p = (u - _) / (h - _);
      return p < 0 ? 0 : p > 1 ? 1 : p;
    })()
  };
}, I$ = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(Ko(r)(0)(0)(O(tg)(o)).line))((i) => {
    const s = i + 28;
    return n.Applicative0().pure({ x: e.x + e.w / 2 - s / 2, y: e.y - 25.2 - 14, w: s, h: 25.2 });
  });
}, P$ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = I$(t), o = n.Applicative0(), i = Yr.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => Wa(vt((a) => a)(c)))(i((c) => {
    if (c._2.tag === "Filling" && c._2._1.labels.length !== 0) {
      const a = An(c._2._1.node)(s.nodes);
      if (a.tag === "Just")
        return e.bind(r(a._1)(c._2._1.progress)(c._2._1.labels))((g) => o.pure(b("Just", L(c._1, g))));
      if (a.tag === "Nothing")
        return o.pure(T);
      f();
    }
    return o.pure(T);
  })(he(u.tokens)));
}, Yu = (t) => (n) => O((e) => {
  const r = 6.283185307179586 * ct(e) / ct(64);
  return { x: t.x + n * Zi(r), y: t.y + n * ts(r) };
})(Xt(0, 63)), Ds = (t) => (n) => {
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
}, A$ = (t) => {
  const n = t.Monad0().Bind1(), e = t.popAlpha;
  return (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
    const g = { x: i.x + i.w / 2, y: i.y + i.h / 2 }, l = Or(0.05)(1 - c - a), d = u < c ? 0 : u > 1 - a ? 1 : (u - c) / l, _ = { x: s.x + s.w / 2, y: s.y + s.h / 2 }, h = (p, $) => n.bind(t.pushAlpha($))(() => n.bind(t.fillStrokePath(Ds(p)(6))({ color: r, flat: !0 })({
      color: o,
      width: 1,
      lineJoin: re,
      lineCap: we
    }))(() => e));
    return d < 0.5 ? h(
      g,
      (() => {
        const p = d * 2;
        return 1 - (p < 0 ? 0 : p > 1 ? 1 : p) * (p < 0 ? 0 : p > 1 ? 1 : p) * (p < 0 ? 3 : p > 1 ? 1 : 3 - 2 * p);
      })()
    ) : h(
      _,
      (() => {
        const p = (d - 0.5) * 2;
        return (p < 0 ? 0 : p > 1 ? 1 : p) * (p < 0 ? 0 : p > 1 ? 1 : p) * (p < 0 ? 3 : p > 1 ? 1 : 3 - 2 * p);
      })()
    );
  };
}, R$ = (t) => {
  const n = t.length;
  return n === 0 ? { x: 0, y: 0 } : { x: Vu(O((e) => e.x)(t)) / ct(n), y: Vu(O((e) => e.y)(t)) / ct(n) };
}, Ya = (t) => (n) => (e) => {
  const r = Cr(6)(0.55)(Fe(0)(1)((1 - t) / 0.06)), o = t > 0.94, i = o && e > 1e-4, s = Cr(6)(0.55)(Fe(0)(1)(t / 0.06)), u = t < 0.06, c = u && n > 1e-4, a = o && e <= 1e-4;
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
}, F$ = (t) => {
  const n = t.Monad0().Bind1(), e = qa(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const c = Ya(s)(0)(0), a = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 }, g = Ko(s)(0)(0)(bt(u)(Qs));
    return n.bind(t.measureText(a)(g.line))((l) => {
      const d = i.x + i.w / 2, _ = l + 28, h = i.y - 25.2 - 14, p = d - _ / 2, $ = [1, d, h + 25.2, 2, d, i.y], m = { x: d, y: h + 12.6 };
      return e(c)(d - _ / 2)(h + 25.2)(m)(n.bind(t.drawRoundedRect({ x: d - _ / 2, y: h + 1.5, w: _, h: 25.2 })(6)(b(
        "Just",
        { color: r.chipShadow, flat: !0 }
      ))(T))(() => n.bind(t.drawRoundedRect({ x: p, y: h, w: _, h: 25.2 })(6)(b("Just", { color: r.chip, flat: !0 }))(b(
        "Just",
        { color: r.chipHairline, width: 1, lineJoin: re, lineCap: we }
      )))(() => n.bind(t.strokePath($)({
        color: r.chipHairline,
        width: 1,
        lineJoin: re,
        lineCap: we
      }))(() => t.drawText({
        x: d,
        y: m.y,
        content: g.line,
        font: a,
        color: r.chipText,
        align: Bs,
        baseline: Hr
      })))));
    });
  };
}, B$ = (t) => {
  const n = t.Monad0().Applicative0();
  return (e) => (r) => {
    const o = r.length - 1 | 0, i = o < 1 ? [] : Gt(0, o, r), s = i.length - 1 | 0, u = s >= 0 && s < i.length ? b("Just", i[s]) : T, c = r.length - 1 | 0;
    if (c >= 0 && c < r.length && u.tag === "Just") {
      const a = r[c].y - u._1.y, g = r[c].x - u._1.x, l = _r(g * g + a * a), d = a / l, _ = -d, h = g / l, p = r[c].x + h * 0.875, $ = r[c].y + d * 0.875, m = $ - d * 8.75, N = p - h * 8.75, v = [1, p, $, 2, N + _ * 4.375, m + h * 4.375, 2, N - _ * 4.375, m - h * 4.375, 5];
      return l <= 1e-4 ? n.pure() : t.fillPath(v)({ color: e.arrowFill, flat: !0 });
    }
    return n.pure();
  };
}, fo = (t) => (n) => (e) => (r) => (o) => O((i) => {
  const s = e + (r - e) * (ct(i) / ct(o));
  return { x: t.x + n * Zi(s), y: t.y + n * ts(s) };
})(Xt(0, o - 1 | 0)), Xu = (t) => (n) => {
  const e = le(t)(le(n.w / 2)(n.h / 2));
  return [
    ...ao({ x: n.x + e, y: n.y })({ x: n.x + n.w - e, y: n.y })(6),
    ...fo({ x: n.x + n.w - e, y: n.y + e })(e)(4.71238898038469)(6.283185307179586)(12),
    ...ao({ x: n.x + n.w, y: n.y + e })({ x: n.x + n.w, y: n.y + n.h - e })(6),
    ...fo({ x: n.x + n.w - e, y: n.y + n.h - e })(e)(0)(1.5707963267948966)(12),
    ...ao({ x: n.x + n.w - e, y: n.y + n.h })({ x: n.x + e, y: n.y + n.h })(6),
    ...fo({ x: n.x + e, y: n.y + n.h - e })(e)(1.5707963267948966)(3.141592653589793)(12),
    ...ao({ x: n.x, y: n.y + n.h - e })({ x: n.x, y: n.y + e })(6),
    ...fo({ x: n.x + e, y: n.y + e })(e)(3.141592653589793)(4.71238898038469)(12)
  ];
}, Q$ = (t) => (n) => (e) => J((r) => (o) => {
  const i = r.pos + o.len, s = e < i ? (e - r.pos) / o.len : 1, u = { x: o.a.x + (o.b.x - o.a.x) * s, y: o.a.y + (o.b.y - o.a.y) * s }, c = n > r.pos ? (n - r.pos) / o.len : 0, a = { x: o.a.x + (o.b.x - o.a.x) * c, y: o.a.y + (o.b.y - o.a.y) * c }, g = r.points.length - 1 | 0, l = g >= 0 && g < r.points.length ? (() => {
    const d = r.points[g].x - a.x;
    return (d < 0 ? -d < 1e-4 : d < 1e-4) && (() => {
      const _ = r.points[g].y - a.y;
      return _ < 0 ? -_ < 1e-4 : _ < 1e-4;
    })();
  })() ? gn(r.points)(u) : [...r.points, a, u] : [a, u];
  return o.len <= 0 || i <= n || r.pos >= e ? { ...r, pos: i } : { pos: i, points: l };
})({ pos: 0, points: [] })(t).points, D$ = (t) => (n) => (e) => {
  const r = Wt((o) => T, (o) => (i) => b("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just") {
    const o = C$(t), i = v$(o), s = Fe(0)(i)(n * i), u = Fe(0)(i)(e * i);
    return u <= s ? [] : Q$(o)(s)(u);
  }
  f();
}, W$ = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = B$(t);
  return (o) => (i) => (s) => (u) => {
    const c = S$(8)(s);
    if (u.hi <= u.lo)
      return e.pure();
    const a = D$(c)(u.lo)(u.hi);
    return a.length === 0 ? e.pure() : n.Bind1().bind(t.strokePath(L$(a))({
      color: o.edge,
      width: 0.9375,
      lineJoin: re,
      lineCap: Qa
    }))(() => r(o)(a));
  };
}, Xa = (t) => {
  const n = W$(t), e = t.Monad0().Applicative0(), r = pe(e);
  return (o) => (i) => (s) => r((u) => {
    const c = Uo(u._1)(s.edges);
    if (c.tag === "Just")
      return n(o)(u._1)(u._2)((() => {
        if (c._1.tag === "Retracted")
          return { lo: 0, hi: 0 };
        if (c._1.tag === "Extended")
          return { lo: 0, hi: 1 };
        if (c._1.tag === "Extending")
          return { lo: 0, hi: c._1._2 };
        if (c._1.tag === "Retracting") {
          if (c._1._1 === "FromSource")
            return { lo: c._1._2, hi: 1 };
          if (c._1._1 === "FromTarget")
            return { lo: 0, hi: 1 - c._1._2 };
          if (c._1._1 === "FromBoth")
            return { lo: c._1._2 / 2, hi: 1 - c._1._2 / 2 };
        }
        f();
      })());
    if (c.tag === "Nothing")
      return e.pure();
    f();
  })(he(i.edges));
}, Ua = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = 0 < t.length ? b("Just", t[0]) : T, a = (() => {
    if (c.tag === "Just")
      return c._1;
    if (c.tag === "Nothing")
      return u;
    f();
  })(), g = t.length - 1 | 0, l = g >= 0 && g < t.length ? b("Just", t[g]) : T, d = (() => {
    if (l.tag === "Just")
      return l._1;
    if (l.tag === "Nothing")
      return s;
    f();
  })(), _ = Hu(128)(Xu(4)(qi(2)(n)))(Yu(a)(6)), h = Or(0.05)(1 - o - i), p = r < o ? 0 : r > 1 - i ? 1 : (r - o) / h, $ = a.x - u.x, m = 2 * (() => {
    const j = a.y - u.y;
    return ($ < 0 ? -$ : $) + (j < 0 ? -j : j);
  })(), N = d.x - s.x, v = 2 * (() => {
    const j = d.y - s.y;
    return (N < 0 ? -N : N) + (j < 0 ? -j : j);
  })(), w = m + $s(t) + v, y = w <= 1e-4 ? 1 : 1 - v / w, k = w <= 1e-4 ? 0 : m / w, E = y - k, I = Hu(128)(Yu(d)(6))(Xu(4)(qi(2)(e))), D = { maxDelay: 0.4, smoothPasses: 2 }, z = vc(t)(Fe(0)(1)(E <= 1e-4 ? 0 : (p - k) / E)), U = (() => {
    if (z.tag === "Just")
      return z._1;
    if (z.tag === "Nothing")
      return a;
    f();
  })(), P = (() => {
    if (y >= 1)
      return 0;
    const j = (p - y) / (1 - y), et = j < 0 ? 0 : j > 1 ? 1 : j;
    return et * et * (3 - 2 * et);
  })(), R = (() => {
    if (k <= 1e-4)
      return 1;
    const j = p / k, et = j < 0 ? 0 : j > 1 ? 1 : j;
    return et * et * (3 - 2 * et);
  })();
  return p < k ? Ni("PolyShape", zu(R)(_.from)(_.to)(D)) : p >= y ? Ni("PolyShape", zu(P)(I.from)(I.to)(D)) : Ni("CircleShape", U, 6);
}, q$ = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => {
  const a = Ua(r)(o)(i)(s)(u)(c);
  if (a.tag === "CircleShape")
    return t.fillStrokePath(Ds(a._1)(a._2))({ color: n, flat: !0 })({
      color: e,
      width: 1,
      lineJoin: re,
      lineCap: we
    });
  if (a.tag === "PolyShape")
    return a._1.length >= 3 ? t.fillStrokePath(T$(a._1))({ color: n, flat: !0 })({
      color: e,
      width: 1,
      lineJoin: re,
      lineCap: we
    }) : t.Monad0().Applicative0().pure();
  f();
}, Ma = (t) => {
  const n = A$(t), e = t.Monad0().Applicative0(), r = pe(e);
  return (o) => (i) => (s) => (u) => r((c) => {
    if (c._2.tag === "Travelling") {
      const a = An(c._2._1.target)(o.nodes), g = An(c._2._1.source)(o.nodes);
      if (g.tag === "Just" && a.tag === "Just") {
        const l = Uo(c._2._1.edge)(o.edges);
        if (l.tag === "Just")
          return q$(t)(s)(u)((() => {
            if (c._2._1.direction === "Forward")
              return l._1;
            if (c._2._1.direction === "Backward")
              return vn(l._1);
            f();
          })())(g._1)(a._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost);
        if (l.tag === "Nothing")
          return n(s)(u)(g._1)(a._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost);
        f();
      }
      return e.pure();
    }
    if (c._2.tag === "Filling") {
      const a = An(c._2._1.node)(o.nodes);
      if (a.tag === "Just")
        return t.drawRoundedRect((() => {
          const g = qi(2)(a._1);
          return { x: g.x, y: g.y, w: g.w, h: g.h };
        })())(4)(b("Just", { color: s, flat: !0 }))(b(
          "Just",
          { color: u, width: 1, lineJoin: re, lineCap: we }
        ));
      if (a.tag === "Nothing")
        return e.pure();
      f();
    }
    return e.pure();
  })(he(i.tokens));
}, Ka = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Ma(t), o = t.popClip, i = t.popBlend, s = t.popLayer, u = n.Applicative0(), c = pe(u), a = t.popAlpha;
  return (g) => (l) => (d) => {
    if (g.tokenInsideBlend === "Difference")
      return e.bind(t.pushLayer(h$))(() => e.bind(t.pushBlend(Di))(() => e.bind(t.pushClip(Wi(l)(d))(Qi))(() => e.bind(r(l)(d)(g.tokenInside)(g.tokenInsideStroke))(() => e.bind(o)(() => e.bind(i)(() => e.bind(s)(() => e.bind(t.pushLayer(p$))(() => e.bind(c((_) => {
        const h = An(_._1)(d.nodes);
        return h.tag === "Just" && Mo(h._1).alpha > 0 ? t.drawRoundedRect({ x: _._2.x, y: _._2.y, w: _._2.w, h: _._2.h })(7)(b(
          "Just",
          { color: sn, flat: !1 }
        ))(T) : u.pure();
      })(he(l.nodes)))(() => s)))))))));
    if (g.tokenInsideBlend === "Normal")
      return e.bind(t.pushClip(Wi(l)(d))(Qi))(() => e.bind(t.pushAlpha(g.tokenInsideAlpha))(() => e.bind(r(l)(d)(g.tokenInside)(g.tokenInsideStroke))(() => e.bind(a)(() => o))));
    f();
  };
}, ja = (t) => {
  const n = t.Monad0().Bind1(), e = Ma(t), r = t.popClip, o = t.popLayer;
  return (i) => (s) => (u) => (c) => n.bind(t.pushLayer(d$))(() => n.bind(t.pushClip(k$(s)(u)(c))(m$))(() => n.bind(e(u)(c)(i.tokenOutsideFill)(i.tokenOutsideStroke))(() => n.bind(r)(() => o))));
}, Za = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Ua(t)(n)(e)(r)(o)(i);
  if (s.tag === "PolyShape")
    return R$(s._1);
  if (s.tag === "CircleShape")
    return s._1;
  f();
}, H$ = (t) => {
  const n = qa(t), e = t.Monad0(), r = e.Bind1(), o = pe(e.Applicative0()), i = G$(t);
  return (s) => (u) => (c) => (a) => (g) => (l) => (d) => (_) => (h) => {
    const p = Ko(g)(l)(d)(bt(_)(Qs)), $ = p.line, m = p.phaseInLabel / 0.45, N = m < 0 ? 0 : m > 1 ? 1 : m, v = h.w, w = h.y, y = h.x, k = y + 14, E = h.h, I = w + E / 2;
    return n(Ya(g)(l)(d))(y)(w + E)({ x: y + v / 2, y: I })(r.bind(o((D) => t.fillPath(Ds(D)(1.5))({
      color: s.trailDot,
      flat: !0
    }))(b$(h)(Za(u)(c)(a)(g)(l)(d))))(() => r.bind(t.drawRoundedRect({ x: y, y: w, w: v, h: E })(3)(b(
      "Just",
      { color: s.chipPillFill, flat: !0 }
    ))(T))(() => i({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(s.chipPillText)(N)(k)(I)($))));
  };
}, tf = (t) => {
  const n = H$(t), e = t.Monad0(), r = e.Applicative0(), o = F$(t), i = e.Bind1(), s = pe(r), u = t.popLayer;
  return (c) => (a) => (g) => (l) => i.bind(t.pushLayer($$))(() => i.bind(s((d) => {
    if (d._2.tag === "Travelling") {
      if (d._2._1.labels.length !== 0) {
        const _ = An(d._2._1.target)(a.nodes), h = An(d._2._1.source)(a.nodes), p = Uo(d._2._1.edge)(a.edges), $ = Da(d._1)(l);
        if ($.tag === "Just" && p.tag === "Just" && h.tag === "Just" && _.tag === "Just")
          return n(c)((() => {
            if (d._2._1.direction === "Forward")
              return p._1;
            if (d._2._1.direction === "Backward")
              return vn(p._1);
            f();
          })())(h._1)(_._1)(d._2._1.progress)(d._2._1.holdPre)(d._2._1.holdPost)(d._2._1.labels)($._1);
      }
      return r.pure();
    }
    if (d._2.tag === "Filling" && d._2._1.labels.length !== 0) {
      const _ = An(d._2._1.node)(a.nodes);
      if (_.tag === "Just")
        return o(c)(a)(_._1)(d._2._1.progress)(d._2._1.labels);
      if (_.tag === "Nothing")
        return r.pure();
      f();
    }
    return r.pure();
  })(he(g.tokens)))(() => u));
}, O$ = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => (i) => (s) => (u) => (c) => {
    const a = Za(e)(r)(o)(i)(s)(u);
    return n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(Ko(i)(s)(u)(bt(c)(Qs)).line))((g) => n.Applicative0().pure({
      x: a.x + 14 + g / 2 - g / 2 - 14,
      y: a.y - 6 - 8 - 6.6 - 6,
      w: g + 28,
      h: 25.2
    }));
  };
}, z$ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = O$(t), o = n.Applicative0(), i = Yr.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => Wa(vt((a) => a)(c)))(i((c) => {
    if (c._2.tag === "Travelling" && c._2._1.labels.length !== 0) {
      const a = An(c._2._1.target)(s.nodes), g = An(c._2._1.source)(s.nodes), l = Uo(c._2._1.edge)(s.edges);
      if (l.tag === "Just" && g.tag === "Just" && a.tag === "Just")
        return e.bind(r((() => {
          if (c._2._1.direction === "Forward")
            return l._1;
          if (c._2._1.direction === "Backward")
            return vn(l._1);
          f();
        })())(g._1)(a._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost)(c._2._1.labels))((d) => o.pure(b(
          "Just",
          L(c._1, d)
        )));
    }
    return o.pure(T);
  })(he(u.tokens)));
}, nf = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = z$(t), o = P$(t);
  return (i) => (s) => e.bind(r(i)(s))((u) => e.bind(o(i)(s))((c) => n.Applicative0().pure(w$((() => {
    const a = (g) => {
      if (g.tag === "Leaf")
        return Q;
      if (g.tag === "Node")
        return Dt("Node", g._1, g._2, g._3, void 0, a(g._5), a(g._6));
      f();
    };
    return Lt(G.compare)(Et(Pn.foldr, a(u)));
  })())(u)([
    ...O(J$)((() => {
      const a = (g, l) => {
        if (g.tag === "Leaf")
          return l;
        if (g.tag === "Node")
          return a(g._5, qt("Cons", g._4, a(g._6, l)));
        f();
      };
      return Et(Mt.foldr, a(i.nodes, zt));
    })()),
    ...(() => {
      const a = (g, l) => {
        if (g.tag === "Leaf")
          return l;
        if (g.tag === "Node")
          return a(g._5, qt("Cons", g._4, a(g._6, l)));
        f();
      };
      return Et(Mt.foldr, a(c, zt));
    })()
  ]))));
}, V$ = (t) => {
  const n = nf(t), e = tf(t);
  return (r) => (o) => (i) => t.Monad0().Bind1().bind(n(o)(i))((s) => e(r)(o)(i)(s));
}, jo = (t) => (n) => (e) => {
  const r = Sc(n)(e.camera);
  return { vx: r.x - t.padding, vy: r.y - t.padding - 40, vw: r.w + 2 * t.padding, vh: r.h + 2 * t.padding + 40 };
}, ef = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => (o) => {
    if (r === "")
      return n.Applicative0().pure();
    const i = o.vh / 720, s = 15 * i, u = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: s, weight: 600 };
    return e.bind(t.measureText(u)(r))((c) => {
      const a = o.vy + 12 * i, g = s + 6 * i * 2, l = c + 11 * i * 2, d = o.vx + o.vw / 2;
      return e.bind(t.drawRoundedRect({ x: d - l / 2, y: a, w: l, h: g })(g / 2)(b(
        "Just",
        { color: { r: 255, g: 255, b: 255, a: 240 }, flat: !0 }
      ))(b(
        "Just",
        { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1 * i, lineJoin: re, lineCap: Qa }
      )))(() => t.drawText({
        x: d,
        y: a + g / 2,
        content: r,
        font: u,
        color: { r: 28, g: 30, b: 36, a: 255 },
        align: Bs,
        baseline: Hr
      }));
    });
  };
}, Y$ = (t) => {
  const n = t.Monad0().Bind1(), e = t.Monad0().Bind1(), r = Xa(t), o = Va(t), i = za(t), s = ja(t), u = Ka(t), c = V$(t), a = ef(t);
  return (g) => (l) => (d) => {
    const _ = jo(g)(l)(d), h = Oa(g.theme);
    return n.bind(g.transparentBg ? e.bind(t.clearBackground(h.bgTransparent))(() => t.setViewport(_)) : e.bind(t.setViewport(_))(() => t.backgroundDots({ viewport: _, bgColor: h.bg, dotColor: h.bgDot, tile: 12, dotRadius: 0.7 })))(() => n.bind(r(h)(l)(d))(() => n.bind(o(h)(g.halftoneShadows)(l)(d))(() => n.bind(i(h)(l)(d))(() => n.bind(s(h)(_)(l)(d))(() => n.bind(u(h)(l)(d))(() => n.bind(c(h)(l)(d))(() => n.bind(g.watermark === "" ? t.Monad0().Applicative0().pure() : t.drawText({
      x: _.vx + 6,
      y: _.vy + 6,
      content: g.watermark,
      font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 9, weight: 600 },
      color: { r: 180, g: 180, b: 180, a: 255 },
      align: Io,
      baseline: Ba
    }))(() => a(d.frameTitle)(_)))))))));
  };
}, X$ = (t) => {
  const n = t.Monad0().Bind1(), e = t.Monad0().Bind1(), r = Xa(t), o = Va(t), i = za(t), s = ja(t), u = Ka(t), c = tf(t), a = ef(t);
  return (g) => (l) => (d) => (_) => {
    const h = jo(g)(l)(d), p = Oa(g.theme);
    return n.bind(g.transparentBg ? e.bind(t.clearBackground(p.bgTransparent))(() => t.setViewport(h)) : e.bind(t.setViewport(h))(() => t.backgroundDots({ viewport: h, bgColor: p.bg, dotColor: p.bgDot, tile: 12, dotRadius: 0.7 })))(() => n.bind(r(p)(l)(d))(() => n.bind(o(p)(g.halftoneShadows)(l)(d))(() => n.bind(i(p)(l)(d))(() => n.bind(s(p)(h)(l)(d))(() => n.bind(u(p)(l)(d))(() => n.bind(c(p)(l)(d)(_))(() => n.bind(g.watermark === "" ? t.Monad0().Applicative0().pure() : t.drawText({
      x: h.vx + 6,
      y: h.vy + 6,
      content: g.watermark,
      font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 9, weight: 600 },
      color: { r: 180, g: 180, b: 180, a: 255 },
      align: Io,
      baseline: Ba
    }))(() => a(d.frameTitle)(h)))))))));
  };
}, Uu = (t) => (n) => (e) => {
  const r = pt.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = pt.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, U$ = /* @__PURE__ */ nf(Ga), M$ = /* @__PURE__ */ X$(Ga), K$ = (t) => {
  const n = t.vx + t.vw - 4, e = t.vy + t.vh - 4, r = t.vx + 4, o = t.vy + 4, i = (s) => {
    if (s.tag === "Leaf")
      return Q;
    if (s.tag === "Node")
      return Dt("Node", s._1, s._2, s._3, { ...s._4, x: Uu(r)(n - s._4.w)(s._4.x), y: Uu(o)(e - s._4.h)(s._4.y) }, i(s._5), i(s._6));
    f();
  };
  return i;
}, j$ = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const c = { padding: 24, transparentBg: n, halftoneShadows: !0, watermark: "", theme: t }, a = zp(e)(r);
  return () => {
    const g = a(), l = U$(o)(i)(g)(), d = Fp(s)(K$(jo(c)(o)(i))(l))(u);
    return M$(c)(o)(i)(d.applied)(g)(), d.springs;
  };
}, Le = (t) => "rgb(" + an(t.r) + "," + an(t.g) + "," + an(t.b) + ")", go = /* @__PURE__ */ Mn(/* @__PURE__ */ Xn("Fixed", /* @__PURE__ */ Un(0)(20)(4))), Z$ = (t) => "translate(" + go(t.tx) + "," + go(t.ty) + ") scale(" + go(t.sx) + "," + go(t.sy) + ")", Jt = /* @__PURE__ */ Mn(/* @__PURE__ */ Xn("Fixed", /* @__PURE__ */ Un(0)(20)(2))), Ws = (t) => {
  const n = [];
  let e = 0;
  for (; e < t.length; ) {
    const r = e, o = r >= 0 && r < t.length ? b("Just", t[r]) : T;
    if (o.tag === "Nothing") {
      e = t.length;
      continue;
    }
    if (o.tag === "Just") {
      if (o._1 === 1) {
        n.push("M"), n.push(Jt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Jt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 2) {
        n.push("L"), n.push(Jt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Jt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 3) {
        n.push("Q"), n.push(Jt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Jt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Jt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Jt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 5 | 0;
        continue;
      }
      if (o._1 === 4) {
        n.push("C"), n.push(Jt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Jt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Jt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Jt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Jt((() => {
          const i = r + 5 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Jt((() => {
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
  return Ho(" ")(n);
}, tm = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, Oi = /* @__PURE__ */ (() => {
  const t = $e("&")("&amp;"), n = $e("<")("&lt;"), e = (() => {
    const r = $e(">")("&gt;"), o = (() => {
      const i = $e('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), nm = (t) => {
  if (t.style === "RunText")
    return "<tspan>" + Oi(t.text) + "</tspan>";
  if (t.style === "RunCode")
    return `<tspan font-family="'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="400">` + Oi(t.text) + "</tspan>";
  f();
}, Tn = (t) => (n) => {
  const e = n.maskDepth;
  return () => {
    e.value === 0 && n.out.push(t);
  };
}, rf = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => tm
}, em = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => rf
}, rm = { pure: (t) => (n) => () => t, Apply0: () => rf }, om = { Applicative0: () => rm, Bind1: () => em }, im = (t) => (n) => '<defs><pattern id="' + t + '" x="0" y="0" width="' + Jt(n.tile) + '" height="' + Jt(n.tile) + '" patternUnits="userSpaceOnUse">' + (n.bgColor.a === 0 ? "" : '<rect width="' + Jt(n.tile) + '" height="' + Jt(n.tile) + '" fill="' + Le(n.bgColor) + '" fill-opacity="' + Jt(ct(n.bgColor.a) / 255) + '"/>') + '<circle cx="' + Jt(n.tile / 2) + '" cy="' + Jt(n.tile / 2) + '" r="' + Jt(n.dotRadius) + '" fill="' + Le(n.dotColor) + '"/></pattern></defs><rect x="' + Jt(n.viewport.vx) + '" y="' + Jt(n.viewport.vy) + '" width="' + Jt(n.viewport.vw) + '" height="' + Jt(n.viewport.vh) + '" fill="url(#' + t + ')"/>', Mu = (t) => (n) => '<path d="' + Ws(t) + '" fill="' + Le(n) + '" fill-opacity="' + Jt(ct(n.a) / 255) + '"/>', sm = (t) => (n) => (e) => (r) => '<rect x="' + Jt(t.x) + '" y="' + Jt(t.y) + '" width="' + Jt(t.w) + '" height="' + Jt(t.h) + '" rx="' + Jt(n) + '"' + (() => {
  if (e.tag === "Just")
    return ' fill="' + Le(e._1.color) + '" fill-opacity="' + Jt(ct(e._1.color.a) / 255) + '"';
  if (e.tag === "Nothing")
    return ' fill="none"';
  f();
})() + (() => {
  if (r.tag === "Just")
    return ' stroke="' + Le(r._1.color) + '" stroke-opacity="' + Jt(ct(r._1.color.a) / 255) + '" stroke-width="' + Jt(r._1.width) + '" stroke-linejoin="' + (() => {
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
})() + "/>", Ku = (t) => (n) => '<path d="' + Ws(t) + '" fill="none" stroke="' + Le(n.color) + '" stroke-opacity="' + Jt(ct(n.color.a) / 255) + '" stroke-width="' + Jt(n.width) + '" stroke-linejoin="' + (() => {
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
})() + '"/>', um = (t) => {
  const n = Vc(Pr(t.content));
  return '<text x="' + Jt(t.x) + '" y="' + Jt(t.y) + '"' + (() => {
    if (t.baseline === "BaselineTop")
      return ' dy="0.8em"';
    if (t.baseline === "BaselineMiddle")
      return ' dy="0.32em"';
    if (t.baseline === "BaselineAlphabetic" || t.baseline === "BaselineBottom")
      return "";
    f();
  })() + ' fill="' + Le(t.color) + '" fill-opacity="' + Jt(ct(t.color.a) / 255) + '" font-size="' + Jt(t.font.size) + '" font-family="Ilisarniq, ui-sans-serif, system-ui, sans-serif" font-weight="' + an(t.font.weight) + '" text-anchor="' + (() => {
    if (t.align === "AlignLeft")
      return "start";
    if (t.align === "AlignCenter")
      return "middle";
    if (t.align === "AlignRight")
      return "end";
    f();
  })() + '">' + (n.length === 1 && n[0].style === "RunText" ? Oi(n[0].text) : Ho("")(O(nm)(n))) + "</text>";
}, cm = {
  fillPath: (t) => (n) => Tn(Mu(t)(n.color)),
  strokePath: (t) => (n) => Tn(Ku(t)(n)),
  fillStrokePath: (t) => (n) => (e) => Tn(Mu(t)(n.color) + Ku(t)(e)),
  drawRoundedRect: (t) => (n) => (e) => (r) => Tn(sm(t)(n)(e)(r)),
  drawText: (t) => Tn(um(t)),
  pushTransform: (t) => Tn((() => {
    const n = 'transform="' + Z$(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popTransform: /* @__PURE__ */ Tn("</g>"),
  pushClip: (t) => (n) => (e) => {
    const r = e.clipCounter;
    return () => {
      const o = r.value;
      e.clipCounter.value = o + 1 | 0;
      const i = "clip" + an(o);
      return Tn((() => {
        const s = 'clip-path="url(#' + i + ')"';
        return '<defs><clipPath id="' + i + '"><path d="' + Ws(t) + '"' + (() => {
          if (n === "EvenOdd")
            return ' clip-rule="evenodd"';
          if (n === "NonZero")
            return "";
          f();
        })() + "/></clipPath></defs>" + (s === "" ? "<g>" : "<g " + s + ">");
      })())(e)();
    };
  },
  popClip: /* @__PURE__ */ Tn("</g>"),
  pushBlend: (t) => Tn((() => {
    const n = (() => {
      if (t === "Normal")
        return 'style="mix-blend-mode: normal"';
      if (t === "Difference")
        return 'style="mix-blend-mode: difference"';
      f();
    })();
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popBlend: /* @__PURE__ */ Tn("</g>"),
  pushAlpha: (t) => Tn((() => {
    const n = 'opacity="' + Jt(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popAlpha: /* @__PURE__ */ Tn("</g>"),
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
  clearBackground: (t) => (n) => Tn('<rect x="' + Jt(n.viewport.vx) + '" y="' + Jt(n.viewport.vy) + '" width="' + Jt(n.viewport.vw) + '" height="' + Jt(n.viewport.vh) + '" fill="' + Le(t) + '" opacity="' + Jt(ct(t.a) / 255) + '"/>')(n),
  backgroundDots: (t) => (n) => {
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      return n.patternCounter.value = r + 1 | 0, Tn(im("bg-dots-" + an(r))(t))(n)();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = Ca(t.family)(t.size)(t.weight)(Pr(n));
    return () => r;
  },
  Monad0: () => om
}, am = /* @__PURE__ */ Y$(cm), fm = (t) => (n) => (e) => (r) => {
  const o = { padding: 24, transparentBg: n, halftoneShadows: !0, watermark: "", theme: t }, i = jo(o)(e)(r);
  return {
    viewBox: Jt(i.vx) + " " + Jt(i.vy) + " " + Jt(i.vw) + " " + Jt(i.vh),
    body: (() => {
      const s = [], u = { value: 0 }, c = { value: 0 }, a = { value: 0 };
      return am(o)(e)(r)({ out: s, maskDepth: u, clipCounter: c, patternCounter: a, viewport: i })(), Ho("")(s);
    })(),
    vx: i.vx,
    vy: i.vy,
    vw: i.vw,
    vh: i.vh
  };
}, qs = (t) => t, gm = /* @__PURE__ */ qs("Light"), _m = /* @__PURE__ */ qs("Dark"), lm = /* @__PURE__ */ qs("Blueprint"), Mr = (t) => ({ bind: (n) => (e) => (r) => t.Bind1().bind(n(r))((o) => e(o._1)(o._2)), Apply0: () => of(t) }), of = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = { map: (r) => (o) => (i) => n.map((s) => L(r(s._1), s._2))(o(i)) };
  return {
    apply: (() => {
      const r = Mr(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => Kr(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, Kr = (t) => ({ pure: (n) => (e) => t.Applicative0().pure(L(n, e)), Apply0: () => of(t) }), dm = (t) => {
  const n = { Applicative0: () => Kr(t), Bind1: () => Mr(t) };
  return { state: (e) => (r) => t.Applicative0().pure(e(r)), Monad0: () => n };
}, Hs = (t, n) => ({ tag: t, _1: n }), Be = (t, n) => ({ tag: t, _1: n }), xn = /* @__PURE__ */ dm(Te), Qt = /* @__PURE__ */ Mr(Te), Gn = xn.state((t) => L(t, t)), fe = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
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
}, me = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
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
}, pn = /* @__PURE__ */ Kr(Te), hm = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = b("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, pm = /* @__PURE__ */ (() => {
  const t = On.unfoldr((n) => {
    if (n.tag === "Nil")
      return T;
    if (n.tag === "Cons")
      return b("Just", L(n._1, n._2));
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
    return e(n, zt);
  })());
})(), $m = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = G.compare(t)(s._3);
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
}, Os = (t) => (n) => (e) => J((r) => (o) => t.Bind1().bind(r)((i) => n(i)(o)))(t.Applicative0().pure(e)), mm = /* @__PURE__ */ J((t) => (n) => Y(G)(n)()(t))(Q), Nm = /* @__PURE__ */ (() => {
  const n = ((e) => (r) => {
    let o = e, i = r, s = !0, u;
    for (; s; ) {
      const c = o, a = i;
      if (a.tag === "Nil") {
        s = !1, u = c;
        continue;
      }
      if (a.tag === "Cons") {
        o = Y(G)(a._1)()(c), i = a._2;
        continue;
      }
      f();
    }
    return u;
  })(Q);
  return (e) => n((() => {
    const r = (o, i) => {
      if (o.tag === "Leaf")
        return i;
      if (o.tag === "Node")
        return r(o._5, qt("Cons", o._3, r(o._6, i)));
      f();
    };
    return r(e, zt);
  })());
})(), sf = /* @__PURE__ */ Vf(pn)(Bt), Jm = (t) => Hs("Par", t), uf = (t) => Hs("Seq", t), vm = (t) => (n) => (e) => {
  const r = er(Yt, T, (o) => o._1 === t, e);
  if (r.tag === "Just") {
    const o = rr(Yt, T, r._1, L(t, n), e);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return o._1;
    f();
  }
  if (r.tag === "Nothing")
    return gn(e)(L(t, n));
  f();
}, Tm = (t) => (n) => O((e) => e._1 === t ? L(e._1, { ...e._2, label: b("Just", n) }) : L(e._1, e._2)), Dn = (t) => xn.state((n) => L(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return { ...n, error: b("Just", { msg: t, line: n.currentLine, column: n.currentColumn }) };
    f();
  })()
)), ym = (t) => Qt.bind(Gn)((n) => {
  const e = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + an(n.kfCounter);
  if (de((o) => o.id === e, n.keyframes))
    return Dn("duplicate frame name " + e);
  const r = {
    ...n,
    keyframes: gn(n.keyframes)({ id: e, nodes: n.currNodes, edges: n.currEdges }),
    kfCounter: n.kfCounter + 1 | 0,
    currentKf: b("Just", e)
  };
  return xn.state((o) => L(void 0, r));
}), wm = (t) => (n) => {
  const e = n.from + "->" + n.to, r = n.newFrom + "->" + n.newTo, o = kt("Left", "cannot repoint " + n.from + "→" + n.to + ": edge does not exist"), i = fe(e)(t.currEdges) ? kt("Right", void 0) : o;
  return (() => {
    if (i.tag === "Left") {
      const s = i._1;
      return (u) => kt("Left", s);
    }
    if (i.tag === "Right") {
      const s = i._1;
      return (u) => u(s);
    }
    f();
  })()(() => {
    const s = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newFrom;
    if (!me(n.newFrom)(t.currNodes))
      return kt("Left", s);
    const u = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newTo;
    if (!me(n.newTo)(t.currNodes))
      return kt("Left", u);
    const c = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": target edge already exists";
    return e !== r && fe(r)(t.currEdges) ? kt("Left", c) : kt(
      "Right",
      {
        nextCurrEdges: Y(G)(r)()(xr(G)(e)(t.currEdges)),
        newId: r,
        newEdge: { id: r, from: { node: n.newFrom, port: T }, to: { node: n.newTo, port: T } }
      }
    );
  });
}, Lm = {
  graphNodes: [],
  graphEdges: Q,
  currNodes: Q,
  currEdges: Q,
  keyframes: [],
  scenes: [],
  kfCounter: 0,
  eventCounter: 0,
  currentKf: T,
  currentLine: 0,
  currentColumn: 0,
  error: T
}, ju = (t) => (n) => Qt.bind(Gn)((e) => {
  const r = "ev-" + an(e.eventCounter);
  return Qt.bind((() => {
    const o = { ...e, eventCounter: e.eventCounter + 1 | 0 };
    return xn.state((i) => L(void 0, o));
  })())(() => pn.pure({ events: [{ id: r, kind: n, when: t }], firstId: b("Just", r), lastId: b("Just", r) }));
}), km = (t) => (n) => {
  if (n.tag === "Token") {
    const e = n._1;
    return Qt.bind(Gn)((r) => {
      const o = !me(e.from)(r.currNodes), i = !me(e.to)(r.currNodes);
      if (o || i)
        return Qt.bind(Dn(o ? i ? "token references unknown node: " + e.from + ", " + e.to : "token references unknown node: " + e.from : i ? "token references unknown node: " + e.to : "token references unknown node: "))(() => pn.pure({ events: [], firstId: T, lastId: T }));
      const s = e.to + "->" + e.from, u = e.from + "->" + e.to;
      return fe(u)(r.currEdges) ? ju(t)(ou(
        "SendToken",
        { from: e.from, to: e.to, edge: u, direction: E0, labels: e.labels }
      )) : fe(s)(r.currEdges) ? ju(t)(ou(
        "SendToken",
        { from: e.from, to: e.to, edge: s, direction: x0, labels: e.labels }
      )) : Qt.bind(Dn("token " + e.from + "→" + e.to + ": no edge between " + e.from + " and " + e.to))(() => pn.pure({
        events: [],
        firstId: T,
        lastId: T
      }));
    });
  }
  return pn.pure({ events: [], firstId: T, lastId: T });
}, bm = (t) => vt((n) => hm(n)(t.graphEdges))(Et(br, pm(t.currEdges))), Em = (t) => (n) => {
  const e = gt((o) => o.from.node === n.id || o.to.node === n.id, bm(t)), r = Os(Sf)((o) => (i) => {
    const s = i.from + "->" + n.id, u = n.id + "->" + i.to, c = i.from + "->" + i.to, a = "via " + i.from + " " + i.to + ": no edge " + i.from + "→" + n.id;
    if (!fe(s)(t.currEdges))
      return kt("Left", a);
    const g = "via " + i.from + " " + i.to + ": no edge " + n.id + "→" + i.to;
    if (!fe(u)(t.currEdges))
      return kt("Left", g);
    const l = "via " + i.from + " " + i.to + ": would create " + i.from + "→" + i.to + " but it already exists";
    return fe(c)(t.currEdges) || $m(c)(o.synthesized) ? kt("Left", l) : kt(
      "Right",
      {
        consumed: Y(G)(s)()(Y(G)(u)()(o.consumed)),
        synthesized: Y(G)(c)({
          id: c,
          from: { node: i.from, port: T },
          to: { node: i.to, port: T }
        })(o.synthesized)
      }
    );
  })({ consumed: Q, synthesized: Q })(n.via);
  return (() => {
    if (r.tag === "Left") {
      const o = r._1;
      return (i) => kt("Left", o);
    }
    if (r.tag === "Right") {
      const o = r._1;
      return (i) => i(o);
    }
    f();
  })()((o) => {
    const i = o.consumed, s = gt((u) => !fe(u.id)(i), e);
    return s.length === 0 ? kt(
      "Right",
      {
        nextCurrEdges: bn(
          G.compare,
          Ln,
          ae(G.compare, t.currEdges, mm(O((u) => u.id)(e))),
          Nm((() => {
            const u = (c) => {
              if (c.tag === "Leaf")
                return Q;
              if (c.tag === "Node")
                return Dt("Node", c._1, c._2, c._3, void 0, u(c._5), u(c._6));
              f();
            };
            return u(o.synthesized);
          })())
        ),
        synthesized: o.synthesized
      }
    ) : kt(
      "Left",
      "cannot delete node " + n.id + ": still connected (" + Ho(", ")(O((u) => u.from.node + "→" + u.to.node)(s)) + "). Use -edge to drop them or `via a b` to merge " + n.id + "'s endpoints."
    );
  });
}, zi = (t) => {
  if (t.tag === "Leaf")
    return [t._1];
  if (t.tag === "Par" || t.tag === "Seq")
    return bt(t._1)(zi);
  f();
}, xm = (t) => ({
  nodes: O(Ro)(t.graphNodes),
  edges: (() => {
    const n = (e, r) => {
      if (e.tag === "Leaf")
        return r;
      if (e.tag === "Node")
        return n(e._5, qt("Cons", e._4, n(e._6, r)));
      f();
    };
    return Et(Mt.foldr, n(t.graphEdges, zt));
  })(),
  constraints: []
}), Cm = (t) => {
  if (t.tag === "AddNode") {
    const n = t._1;
    return xn.state((e) => L(
      void 0,
      {
        ...e,
        graphNodes: vm(n.id)({ id: n.id, size: L(1, 1), ports: [], label: b("Just", n.label) })(e.graphNodes),
        currNodes: Y(G)(n.id)()(e.currNodes)
      }
    ));
  }
  if (t.tag === "DelNode") {
    const n = t._1;
    return Qt.bind(Gn)((e) => {
      if (!me(n.id)(e.currNodes))
        return Dn("cannot delete node " + n.id + ": does not exist");
      const r = Em(e)(n);
      if (r.tag === "Left")
        return Dn(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return xn.state((i) => L(
          void 0,
          {
            ...i,
            currNodes: xr(G)(n.id)(i.currNodes),
            currEdges: o.nextCurrEdges,
            graphEdges: bn(G.compare, Ln, o.synthesized, i.graphEdges)
          }
        ));
      }
      f();
    });
  }
  if (t.tag === "ModNode") {
    const n = t._1;
    return Qt.bind(Gn)((e) => {
      if (!me(n.id)(e.currNodes))
        return Dn("cannot modify node " + n.id + ": does not exist");
      if (n.label.tag === "Just") {
        const r = n.label._1;
        return xn.state((o) => L(void 0, { ...o, graphNodes: Tm(n.id)(r)(o.graphNodes) }));
      }
      if (n.label.tag === "Nothing")
        return pn.pure();
      f();
    });
  }
  if (t.tag === "AddEdge") {
    const n = t._1;
    return Qt.bind(Gn)((e) => {
      const r = !me(n.from)(e.currNodes), o = !me(n.to)(e.currNodes);
      if (r || o)
        return Dn("cannot add edge " + n.from + "→" + n.to + ": unknown node " + (r ? o ? n.from + ", " + n.to : n.from : o ? n.to : ""));
      const i = n.from + "->" + n.to;
      return xn.state((s) => L(
        void 0,
        {
          ...s,
          graphEdges: Y(G)(i)({ id: i, from: { node: n.from, port: T }, to: { node: n.to, port: T } })(s.graphEdges),
          currEdges: Y(G)(i)()(s.currEdges)
        }
      ));
    });
  }
  if (t.tag === "DelEdge") {
    const n = t._1;
    return Qt.bind(Gn)((e) => {
      const r = n.from + "->" + n.to;
      return fe(r)(e.currEdges) ? xn.state((o) => L(void 0, { ...o, currEdges: xr(G)(r)(o.currEdges) })) : Dn("cannot delete edge " + n.from + "→" + n.to + ": does not exist");
    });
  }
  if (t.tag === "RepointEdge") {
    const n = t._1;
    return Qt.bind(Gn)((e) => {
      const r = wm(e)(n);
      if (r.tag === "Left")
        return Dn(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return xn.state((i) => L(
          void 0,
          { ...i, currEdges: o.nextCurrEdges, graphEdges: Y(G)(o.newId)(o.newEdge)(i.graphEdges) }
        ));
      }
      f();
    });
  }
  return pn.pure();
}, Sm = (t) => Qt.bind(xn.state((n) => L(void 0, { ...n, currentLine: t.line, currentColumn: t.column })))(() => Cm(t.op)), Gm = (t) => (n) => Qt.bind(sf(Sm)(n))(() => Qt.bind(Gn)((e) => {
  const r = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + an(e.kfCounter);
  if (de((i) => i.id === r, e.keyframes))
    return Dn("duplicate frame name " + r);
  const o = {
    ...e,
    keyframes: gn(e.keyframes)({ id: r, nodes: e.currNodes, edges: e.currEdges }),
    kfCounter: e.kfCounter + 1 | 0,
    currentKf: b("Just", r),
    scenes: (() => {
      if (e.currentKf.tag === "Nothing")
        return e.scenes;
      if (e.currentKf.tag === "Just")
        return gn(e.scenes)(kc("Structural", { from: e.currentKf._1, to: r, focus: T }));
      f();
    })()
  };
  return xn.state((i) => L(void 0, o));
})), Im = (t) => (n) => {
  const e = Wt((r) => T, (r) => (o) => b("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return pn.pure({ events: [], firstId: T, lastId: T });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Qt.bind(zr(t)(e._1.head))((o) => Qt.bind(Os({
      Applicative0: () => Kr(Te),
      Bind1: () => Mr(Te)
    })((i) => (s) => Qt.bind(zr((() => {
      if (i.lastId.tag === "Just")
        return vs("After", i.lastId._1);
      if (i.lastId.tag === "Nothing")
        return t;
      f();
    })())(s))((u) => pn.pure({
      events: [...i.events, ...u.events],
      firstId: (() => {
        if (i.firstId.tag === "Just")
          return b("Just", i.firstId._1);
        if (i.firstId.tag === "Nothing")
          return u.firstId;
        f();
      })(),
      lastId: (() => {
        if (u.lastId.tag === "Just")
          return b("Just", u.lastId._1);
        if (u.lastId.tag === "Nothing")
          return i.lastId;
        f();
      })()
    })))(o)(r))((i) => pn.pure(i)));
  }
  f();
}, Pm = (t) => (n) => {
  const e = Wt((r) => T, (r) => (o) => b("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return pn.pure({ events: [], firstId: T, lastId: T });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Qt.bind(zr(t)(e._1.head))((o) => Qt.bind(Am((() => {
      if (o.firstId.tag === "Just")
        return vs("With", o.firstId._1);
      if (o.firstId.tag === "Nothing")
        return t;
      f();
    })())(r))((i) => pn.pure({
      events: [...o.events, ...i.events],
      firstId: o.firstId,
      lastId: (() => {
        if (o.lastId.tag === "Just")
          return b("Just", o.lastId._1);
        if (o.lastId.tag === "Nothing")
          return i.lastId;
        f();
      })()
    })));
  }
  f();
}, zr = (t) => (n) => {
  if (n.tag === "Leaf") {
    const e = n._1;
    return Qt.bind(xn.state((r) => L(void 0, { ...r, currentLine: e.line, currentColumn: e.column })))(() => km(t)(e.op));
  }
  if (n.tag === "Seq")
    return Im(t)(n._1);
  if (n.tag === "Par")
    return Pm(t)(n._1);
  f();
}, Am = (t) => Os({
  Applicative0: () => Kr(Te),
  Bind1: () => Mr(Te)
})((n) => (e) => Qt.bind(zr(t)(e))((r) => pn.pure({
  events: [...n.events, ...r.events],
  firstId: (() => {
    if (n.firstId.tag === "Just")
      return b("Just", n.firstId._1);
    if (n.firstId.tag === "Nothing")
      return r.firstId;
    f();
  })(),
  lastId: (() => {
    if (r.lastId.tag === "Just")
      return b("Just", r.lastId._1);
    if (r.lastId.tag === "Nothing")
      return n.lastId;
    f();
  })()
})))({ events: [], firstId: T, lastId: T }), Rm = (t) => Qt.bind(Gn)((n) => {
  if (n.currentKf.tag === "Nothing")
    return Dn("flow ops before any structural frame");
  if (n.currentKf.tag === "Just") {
    const e = n.currentKf._1;
    return Qt.bind(zr(b0)(t))((r) => Qt.bind(Gn)((o) => {
      const i = { ...o, scenes: gn(o.scenes)(kc("DataFlow", { keyframe: e, events: r.events, focus: T })) };
      return xn.state((s) => L(void 0, i));
    }));
  }
  f();
}), Fm = (t) => Qt.bind(Gn)((n) => {
  if (n.error.tag === "Just")
    return pn.pure();
  if (n.error.tag === "Nothing") {
    const e = zi(t.ops), r = gt(
      (i) => i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge",
      e
    ), o = gt(
      (i) => !(i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge"),
      e
    );
    return Qt.bind((() => {
      const i = Gm(t.name)(r);
      return r.length !== 0 ? i : pn.pure();
    })())(() => Qt.bind((() => {
      const i = ym(t.name);
      return r.length === 0 && o.length !== 0 ? i : pn.pure();
    })())(() => {
      const i = Rm(t.ops);
      return o.length !== 0 ? i : pn.pure();
    }));
  }
  f();
}), Bm = (t) => Qt.bind(sf(Fm)(t.frames))(() => Qt.bind(Gn)((n) => pn.pure((() => {
  if (n.error.tag === "Just")
    return kt("Left", n.error._1);
  if (n.error.tag === "Nothing")
    return kt("Right", { seed: t.seed, graph: xm(n), keyframes: n.keyframes, scenes: n.scenes });
  f();
})())))(Lm)._1, nr = (t, n) => ({ tag: "ParseError", _1: t, _2: n }), H = (t, n, e) => ({ tag: "ParseState", _1: t, _2: n, _3: e }), Po = (t, n, e) => ({ tag: t, _1: n, _2: e }), Qm = (t) => Po("More", t), Dm = (t) => Po("Lift", t), cf = { map: (t) => (n) => (e, r, o, i, s) => r((u) => n(e, r, o, i, (c, a) => r((g) => s(c, t(a))))) }, Wm = {
  alt: (t) => (n) => (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((a) => t(
      H(u, c, !1),
      r,
      o,
      (g, l) => {
        const d = g._3;
        return r((_) => d ? i(g, l) : n(e, r, o, i, s));
      },
      s
    ));
  },
  Functor0: () => cf
}, qm = (t) => {
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
          u = !1, c = n.Bind1().Apply0().Functor0().map(uc)(g._1);
          continue;
        }
        if (g.tag === "Stop") {
          u = !1, c = n.Applicative0().pure(vr("Done", L(g._2, g._1)));
          continue;
        }
        f();
      }
      return c;
    };
    return t.tailRecM(o)((i) => r(
      e,
      Qm,
      Dm,
      (s, u) => Po("Stop", s, kt("Left", u)),
      (s, u) => Po("Stop", s, kt("Right", u))
    ));
  };
}, af = (t, n, e, r, o) => o(t, t._2), Hm = { index: 0, line: 1, column: 1 }, Om = (t) => {
  const n = qm(t);
  return (e) => (r) => t.Monad0().Bind1().Apply0().Functor0().map(Fo)(n(H(e, Hm, !1))(r));
}, zm = /* @__PURE__ */ Om(Qf), ff = {
  apply: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, a) => r((g) => {
      const l = e._3 && !c._3 ? H(c._1, c._2, !0) : c;
      return n(l, r, o, i, (d, _) => r((h) => s(l._3 && !d._3 ? H(d._1, d._2, !0) : d, a(_))));
    })
  )),
  Functor0: () => cf
}, gf = { pure: (t) => (n, e, r, o, i) => i(n, t), Apply0: () => ff }, Vm = {
  bind: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, a) => r((g) => n(a)(e._3 && !c._3 ? H(c._1, c._2, !0) : c, r, o, i, s))
  )),
  Apply0: () => ff
}, Ym = { Applicative0: () => gf, Bind1: () => Vm }, Zo = (t) => (n, e, r, o, i) => e((s) => af(
  n,
  e,
  r,
  o,
  (u, c) => e((a) => o(n._3 && !u._3 ? H(u._1, u._2, !0) : u, nr(t, c)))
)), Xm = { empty: /* @__PURE__ */ Zo("No alternative"), Alt0: () => Wm }, Um = { Applicative0: () => gf, Plus1: () => Xm }, Mm = {
  tailRecM: (t) => (n) => (e, r, o, i, s) => {
    const u = (c, a, g) => t(a)(
      c,
      r,
      o,
      i,
      (l, d) => {
        const _ = c._3 && !l._3 ? H(l._1, l._2, !0) : l;
        if (d.tag === "Loop")
          return g === 0 ? r((h) => u(_, d._1, 30)) : u(_, d._1, g - 1 | 0);
        if (d.tag === "Done")
          return s(_, d._1);
        f();
      }
    );
    return u(e, n, 30);
  },
  Monad0: () => Ym
}, Km = (t) => (n) => {
  const e = n.Plus1().Alt0(), r = n.Applicative0();
  return (o) => t.tailRecM((i) => t.Monad0().Bind1().bind(e.alt(e.Functor0().map(uc)(o))(r.pure(vr(
    "Done",
    void 0
  ))))((s) => r.pure((() => {
    if (s.tag === "Loop")
      return vr("Loop", qt("Cons", s._1, i));
    if (s.tag === "Done")
      return vr(
        "Done",
        ((c) => (a) => {
          let g = c, l = a, d = !0, _;
          for (; d; ) {
            const h = g, p = l;
            if (p.tag === "Nil") {
              d = !1, _ = h;
              continue;
            }
            if (p.tag === "Cons") {
              g = qt("Cons", p._1, h), l = p._2;
              continue;
            }
            f();
          }
          return _;
        })(zt)(i)
      );
    f();
  })())))(zt);
}, Qn = /* @__PURE__ */ Km(Mm)(Um), xt = (t) => (n) => {
  const e = Zo("Expected " + n);
  return (r, o, i, s, u) => {
    const c = r._1, a = r._2;
    return o((g) => t(
      H(c, a, !1),
      o,
      i,
      (l, d) => {
        const _ = l._3;
        return o((h) => _ ? s(l, d) : e(r, o, i, s, u));
      },
      u
    ));
  };
}, zs = (t) => (n, e, r, o, i) => {
  const s = n._3, u = n._1, c = n._2;
  return e((a) => {
    const g = (l, d) => {
      const _ = l._3;
      return e((h) => _ ? o(H(l._1, l._2, s), d) : i(n, void 0));
    };
    return e((l) => e((d) => t(
      H(u, c, !1),
      e,
      r,
      (_, h) => g(H(_._1, _._2, !1), h),
      (_, h) => e((p) => e(($) => Zo("Negated parser succeeded")(
        _,
        e,
        r,
        g,
        (m, N) => e((v) => i(_._3 && !m._3 ? H(m._1, m._2, !0) : m, N))
      )))
    )));
  });
}, jm = (t) => {
  const n = t.foldr((e) => (r) => {
    if (r.tag === "Nothing")
      return b("Just", e);
    if (r.tag === "Just")
      return b(
        "Just",
        (o, i, s, u, c) => {
          const a = o._1, g = o._2;
          return i((l) => e(
            H(a, g, !1),
            i,
            s,
            (d, _) => {
              const h = d._3;
              return i((p) => h ? u(d, _) : r._1(o, i, s, u, c));
            },
            c
          ));
        }
      );
    f();
  })(T);
  return (e) => {
    const r = n(e);
    if (r.tag === "Nothing")
      return Zo("No alternative");
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, Zm = (t) => (n) => (e) => (r, o, i, s, u) => o((c) => o((a) => o((g) => o((l) => t(
  r,
  o,
  i,
  s,
  (d, _) => o((h) => o((p) => {
    const $ = r._3 && !d._3 ? H(d._1, d._2, !0) : d;
    return e(
      $,
      o,
      i,
      s,
      (m, N) => o((v) => {
        const w = $._3 && !m._3 ? H(m._1, m._2, !0) : m;
        return o((y) => o((k) => {
          const E = r._3 && !w._3 ? H(w._1, w._2, !0) : w;
          return n(
            E,
            o,
            i,
            s,
            (I, D) => o((z) => u(E._3 && !I._3 ? H(I._1, I._2, !0) : I, N))
          );
        }));
      })
    );
  }))
))))), Vi = (t) => (n) => (e) => {
  if (n === 10)
    return { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  if (n === 13) {
    const r = h_()(e);
    return r.tag === "Just" && r._1 === 10 ? { index: t.index + 1 | 0, line: t.line, column: t.column } : { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  }
  return n === 9 ? { index: t.index + 1 | 0, line: t.line, column: (t.column + 8 | 0) - ns(t.column - 1 | 0)(8) | 0 } : { index: t.index + 1 | 0, line: t.line, column: t.column + 1 | 0 };
}, tN = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const c = r, a = o, g = i, l = Oo(a);
    if (l.tag === "Nothing") {
      s = !1, u = c;
      continue;
    }
    if (l.tag === "Just") {
      r = l._1.tail === "" ? Vi(c)(l._1.head)(g) : Vi(c)(l._1.head)(l._1.tail), o = l._1.tail, i = g;
      continue;
    }
    f();
  }
  return u;
}, Kt = (t) => (n, e, r, o, i) => {
  const s = Oo(n._1);
  if (s.tag === "Nothing")
    return o(n, nr("Unexpected EOF", n._2));
  if (s.tag === "Just") {
    if (s._1.head < 0 || s._1.head > 65535)
      return o(n, nr("Expected Char", n._2));
    if (s._1.head >= 0 && s._1.head <= 65535) {
      const u = Gc(s._1.head);
      return t(u) ? i(H(s._1.tail, Vi(n._2)(s._1.head)(s._1.tail), !0), u) : o(n, nr("Predicate unsatisfied", n._2));
    }
  }
  f();
}, _f = (t, n, e, r, o) => t._1 === "" ? o(H(t._1, t._2, !0), void 0) : r(t, nr("Expected EOF", t._2)), nN = (t) => (n, e, r, o, i) => {
  const s = t(n._1);
  if (s.tag === "Left")
    return o(n, nr(s._1, n._2));
  if (s.tag === "Right")
    return i(H(s._1.remainder, tN(n._2)(s._1.consumed)(s._1.remainder), s._1.consumed !== ""), s._1.value);
  f();
}, fr = (t) => nN((n) => {
  const e = p0(t)(n);
  return e.tag === "Just" ? kt("Right", { value: t, consumed: t, remainder: e._1 }) : kt("Left", "Expected " + Tf(t));
}), eN = /* @__PURE__ */ Kt((t) => !0), lf = /* @__PURE__ */ jm(Bt), df = /* @__PURE__ */ (() => {
  const t = Kt((n) => n === " " || n === "	" || n === `
` || n === "\r");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? H(u._1, u._2, !0) : u, void 0))
  ));
})(), Vs = (t, n, e, r, o) => n((i) => fr("#")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Qn(Kt((l) => l !== `
`)), g = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((l) => a(
      g,
      n,
      e,
      r,
      (d, _) => n((h) => o(g._3 && !d._3 ? H(d._1, d._2, !0) : d, void 0))
    ));
  })
)), rN = /* @__PURE__ */ xt(/* @__PURE__ */ (() => {
  const t = xt(Kt((e) => e === "}"))("'}'"), n = Kt((e) => e === `
` || e === "\r");
  return (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((a) => r((g) => t(
      H(u, c, !1),
      r,
      o,
      (l, d) => r((_) => {
        const h = e._1, p = e._2;
        return r(($) => r((m) => Vs(
          H(h, p, !1),
          r,
          o,
          (N, v) => {
            const w = N._3;
            return r((y) => {
              if (w)
                return i(N, v);
              const k = e._1, E = e._2;
              return r((I) => r((D) => n(
                H(k, E, !1),
                r,
                o,
                (z, U) => {
                  const P = z._3;
                  return r((R) => P ? i(z, U) : _f(e, r, o, i, s));
                },
                (z, U) => r((P) => s(z, void 0))
              )));
            });
          },
          (N, v) => r((w) => s(N, void 0))
        )));
      }),
      (l, d) => r((_) => s(H(u, c, !1), void 0))
    )));
  };
})())("newline or '}' (statements end at the end of the line)"), Bn = /* @__PURE__ */ (() => {
  const t = Qn((n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => df(
      H(s, u, !1),
      e,
      r,
      (a, g) => {
        const l = a._3;
        return e((d) => l ? o(a, g) : Vs(n, e, r, o, i));
      },
      i
    ));
  });
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? H(u._1, u._2, !0) : u, void 0))
  ));
})(), qn = (t, n, e, r, o) => n((i) => {
  const s = (a, g) => n((l) => Bn(t._3 && !a._3 ? H(a._1, a._2, !0) : a, n, e, r, o)), u = t._1, c = t._2;
  return n((a) => df(
    H(u, c, !1),
    n,
    e,
    (g, l) => {
      const d = g._3;
      return n((_) => d ? r(g, l) : Vs(t, n, e, r, s));
    },
    s
  ));
}), hf = /* @__PURE__ */ (() => {
  const t = xt(Kt((n) => n === "|"))("'|'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const g = Qn(Kt((d) => d !== "|")), l = n._3 && !u._3 ? H(u._1, u._2, !0) : u;
      return e((d) => g(
        l,
        e,
        r,
        o,
        (_, h) => e((p) => {
          const $ = xt(xt(Kt((N) => N === "|"))("'|'"))("closing '|'"), m = l._3 && !_._3 ? H(_._1, _._2, !0) : _;
          return e((N) => $(
            m,
            e,
            r,
            o,
            (v, w) => e((y) => i(
              m._3 && !v._3 ? H(v._1, v._2, !0) : v,
              We(Et(Mt.foldr, h))
            ))
          ));
        })
      ));
    })
  ));
})(), Ao = /* @__PURE__ */ Kt((t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z"), Ie = /* @__PURE__ */ (() => {
  const t = Qn(Kt((n) => n === " " || n === "	"));
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? H(u._1, u._2, !0) : u, void 0))
  ));
})(), oN = /* @__PURE__ */ (() => {
  const t = xt(Kt((n) => n === "\\"))("'\\\\'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const g = n._3 && !u._3 ? H(u._1, u._2, !0) : u;
      return e((l) => eN(
        g,
        e,
        r,
        o,
        (d, _) => e((h) => i(
          g._3 && !d._3 ? H(d._1, d._2, !0) : d,
          _ === "n" ? `
` : _ === "t" ? "	" : _ === "r" ? "\r" : _
        ))
      ));
    })
  ));
})(), iN = /* @__PURE__ */ (() => {
  const t = Kt((n) => n !== '"' && n !== "\\" && n !== `
`);
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => oN(H(s, u, !1), e, r, (a, g) => e((l) => t(n, e, r, o, i)), i));
  };
})(), Ys = /* @__PURE__ */ (() => {
  const t = xt(Kt((n) => n === '"'))(`'"'`);
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const g = Qn(iN), l = n._3 && !u._3 ? H(u._1, u._2, !0) : u;
      return e((d) => g(
        l,
        e,
        r,
        o,
        (_, h) => e((p) => {
          const $ = xt(xt(Kt((N) => N === '"'))(`'"'`))(`closing '"' (unterminated string)`), m = l._3 && !_._3 ? H(_._1, _._2, !0) : _;
          return e((N) => $(
            m,
            e,
            r,
            o,
            (v, w) => e((y) => i(
              m._3 && !v._3 ? H(v._1, v._2, !0) : v,
              We(Et(Mt.foldr, h))
            ))
          ));
        })
      ));
    })
  ));
})(), sN = /* @__PURE__ */ (() => {
  const t = xt(Kt((n) => n === ":"))("':'");
  return (n, e, r, o, i) => e((s) => Ie(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => xt((g, l, d, _, h) => {
      const p = g._1, $ = g._2;
      return l((m) => {
        const N = (v, w) => {
          const y = v._3;
          return l((k) => {
            if (y)
              return _(v, w);
            const E = g._1, I = g._2;
            return l((D) => hf(
              H(E, I, !1),
              l,
              d,
              (z, U) => {
                const P = z._3;
                return l((R) => P ? _(z, U) : Ys(g, l, d, _, h));
              },
              h
            ));
          });
        };
        return l((v) => t(
          H(p, $, !1),
          l,
          d,
          N,
          (w, y) => l((k) => l((E) => Ie(
            w,
            l,
            d,
            N,
            (I, D) => l((z) => {
              const U = Qn(Kt((R) => R !== `
` && R !== "\r" && R !== "#" && R !== "}")), P = w._3 && !I._3 ? H(I._1, I._2, !0) : I;
              return l((R) => U(
                P,
                l,
                d,
                N,
                (j, et) => l((X) => h(
                  P._3 && !j._3 ? H(j._1, j._2, !0) : j,
                  n_(We(Et(Mt.foldr, et)))
                ))
              ));
            })
          )))
        ));
      });
    })('label ("…", : rest-of-line, or |…|)')(n._3 && !u._3 ? H(u._1, u._2, !0) : u, e, r, o, i))
  ));
})(), uN = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => hf(
    H(i, s, !1),
    n,
    e,
    (c, a) => {
      const g = c._3;
      return n((l) => g ? r(c, a) : Ys(t, n, e, r, o));
    },
    o
  ));
}, Vr = /* @__PURE__ */ Kt((t) => t >= "0" && t <= "9"), wn = /* @__PURE__ */ (() => {
  const t = xt(Kt((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => e((s) => {
    const u = (g, l) => e((d) => {
      const _ = Qn((() => {
        const p = xt(Kt((m) => m === "_"))("'_'"), $ = xt(Kt((m) => m === "-"))("'-'");
        return (m, N, v, w, y) => {
          const k = m._1, E = m._2;
          return N((I) => Ao(
            H(k, E, !1),
            N,
            v,
            (D, z) => {
              const U = D._3;
              return N((P) => {
                if (U)
                  return w(D, z);
                const R = m._1, j = m._2;
                return N((et) => Vr(
                  H(R, j, !1),
                  N,
                  v,
                  (X, A) => {
                    const x = X._3;
                    return N((C) => {
                      if (x)
                        return w(X, A);
                      const q = m._1, S = m._2;
                      return N((F) => p(
                        H(q, S, !1),
                        N,
                        v,
                        (W, K) => {
                          const V = W._3;
                          return N((B) => V ? w(W, K) : $(m, N, v, w, y));
                        },
                        y
                      ));
                    });
                  },
                  y
                ));
              });
            },
            y
          ));
        };
      })()), h = n._3 && !g._3 ? H(g._1, g._2, !0) : g;
      return e((p) => _(
        h,
        e,
        r,
        o,
        ($, m) => e((N) => i(
          h._3 && !$._3 ? H($._1, $._2, !0) : $,
          Ns(l) + We(Et(Mt.foldr, m))
        ))
      ));
    }), c = n._1, a = n._2;
    return e((g) => Ao(
      H(c, a, !1),
      e,
      r,
      (l, d) => {
        const _ = l._3;
        return e((h) => _ ? o(l, d) : t(n, e, r, o, u));
      },
      u
    ));
  });
})(), cN = /* @__PURE__ */ xt((t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => Ys(
    H(i, s, !1),
    n,
    e,
    (c, a) => {
      const g = c._3;
      return n((l) => g ? r(c, a) : wn(t, n, e, r, o));
    },
    o
  ));
})("frame name (identifier or quoted string)"), aN = (t, n, e, r, o) => n((i) => wn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => Ie(
      a,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = xt(($, m, N, v, w) => {
          const y = $._1, k = $._2;
          return m((E) => fr("->")(
            H(y, k, !1),
            m,
            N,
            (I, D) => {
              const z = I._3;
              return m((U) => z ? v(I, D) : fr("<-")($, m, N, v, w));
            },
            w
          ));
        })("'->' or '<-'"), p = a._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const w = p._3 && !m._3 ? H(m._1, m._2, !0) : m;
            return n((y) => Ie(
              w,
              n,
              e,
              r,
              (k, E) => n((I) => {
                const D = xt(wn)("target node identifier"), z = w._3 && !k._3 ? H(k._1, k._2, !0) : k;
                return n((U) => D(
                  z,
                  n,
                  e,
                  r,
                  (P, R) => n((j) => {
                    const et = Qn((A, x, C, q, S) => {
                      const F = A._3;
                      return x((W) => x((K) => Ie(
                        A,
                        x,
                        C,
                        (V, B) => q(H(V._1, V._2, F), B),
                        (V, B) => x((nt) => x((M) => {
                          const tt = A._3 && !V._3 ? H(V._1, V._2, !0) : V;
                          return uN(
                            tt,
                            x,
                            C,
                            (ot, st) => q(H(ot._1, ot._2, F), st),
                            (ot, st) => x((_t) => S(tt._3 && !ot._3 ? H(ot._1, ot._2, !0) : ot, st))
                          );
                        }))
                      )));
                    }), X = z._3 && !P._3 ? H(P._1, P._2, !0) : P;
                    return n((A) => et(
                      X,
                      n,
                      e,
                      r,
                      (x, C) => n((q) => (() => {
                        if (N === "<-") {
                          const F = Be(
                            "Token",
                            { from: R, to: u, labels: O(ru)(Et(Mt.foldr, C)) }
                          );
                          return (W, K, V, B, nt) => nt(W, F);
                        }
                        const S = Be(
                          "Token",
                          { from: u, to: R, labels: O(ru)(Et(Mt.foldr, C)) }
                        );
                        return (F, W, K, V, B) => B(F, S);
                      })()(X._3 && !x._3 ? H(x._1, x._2, !0) : x, n, e, r, o))
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
)), fN = (t, n, e, r, o) => n((i) => Vr(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Qn(Vr), g = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((l) => a(
      g,
      n,
      e,
      r,
      (d, _) => n((h) => {
        const p = mg(Ns(u) + We(Et(
          Mt.foldr,
          _
        )));
        return (() => {
          if (p.tag === "Just") {
            const $ = p._1;
            return (m, N, v, w, y) => y(m, $);
          }
          if (p.tag === "Nothing")
            return ($, m, N, v, w) => w($, 0);
          f();
        })()(g._3 && !d._3 ? H(d._1, d._2, !0) : d, n, e, r, o);
      })
    ));
  })
)), ti = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => fr(t)(
    n,
    e,
    r,
    (c, a) => o(H(c._1, c._2, s), a),
    (c, a) => e((g) => {
      const l = zs((() => {
        const _ = xt(Kt((p) => p === "_"))("'_'"), h = xt(Kt((p) => p === "-"))("'-'");
        return (p, $, m, N, v) => {
          const w = p._1, y = p._2;
          return $((k) => Ao(
            H(w, y, !1),
            $,
            m,
            (E, I) => {
              const D = E._3;
              return $((z) => {
                if (D)
                  return N(E, I);
                const U = p._1, P = p._2;
                return $((R) => Vr(
                  H(U, P, !1),
                  $,
                  m,
                  (j, et) => {
                    const X = j._3;
                    return $((A) => {
                      if (X)
                        return N(j, et);
                      const x = p._1, C = p._2;
                      return $((q) => _(
                        H(x, C, !1),
                        $,
                        m,
                        (S, F) => {
                          const W = S._3;
                          return $((K) => W ? N(S, F) : h(p, $, m, N, v));
                        },
                        v
                      ));
                    });
                  },
                  v
                ));
              });
            },
            v
          ));
        };
      })()), d = n._3 && !c._3 ? H(c._1, c._2, !0) : c;
      return e((_) => l(
        d,
        e,
        r,
        (h, p) => o(H(h._1, h._2, s), p),
        (h, p) => e(($) => {
          const m = d._3 && !h._3 ? H(h._1, h._2, !0) : h;
          return e((N) => Bn(
            m,
            e,
            r,
            (v, w) => o(H(v._1, v._2, s), w),
            (v, w) => e((y) => i(m._3 && !v._3 ? H(v._1, v._2, !0) : v, t))
          ));
        })
      ));
    })
  ));
}, gN = (t, n, e, r, o) => n((i) => qn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => ti("via")(
      a,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = a._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n((p) => wn(
          h,
          n,
          e,
          r,
          ($, m) => n((N) => {
            const v = h._3 && !$._3 ? H($._1, $._2, !0) : $;
            return n((w) => qn(
              v,
              n,
              e,
              r,
              (y, k) => n((E) => {
                const I = v._3 && !y._3 ? H(y._1, y._2, !0) : y;
                return n((D) => wn(
                  I,
                  n,
                  e,
                  r,
                  (z, U) => n((P) => o(I._3 && !z._3 ? H(z._1, z._2, !0) : z, { from: m, to: U }))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), lr = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => fr(t)(
    n,
    e,
    r,
    (c, a) => o(H(c._1, c._2, s), a),
    (c, a) => e((g) => {
      const l = zs((() => {
        const _ = xt(Kt((p) => p === "_"))("'_'"), h = xt(Kt((p) => p === "-"))("'-'");
        return (p, $, m, N, v) => {
          const w = p._1, y = p._2;
          return $((k) => Ao(
            H(w, y, !1),
            $,
            m,
            (E, I) => {
              const D = E._3;
              return $((z) => {
                if (D)
                  return N(E, I);
                const U = p._1, P = p._2;
                return $((R) => Vr(
                  H(U, P, !1),
                  $,
                  m,
                  (j, et) => {
                    const X = j._3;
                    return $((A) => {
                      if (X)
                        return N(j, et);
                      const x = p._1, C = p._2;
                      return $((q) => _(
                        H(x, C, !1),
                        $,
                        m,
                        (S, F) => {
                          const W = S._3;
                          return $((K) => W ? N(S, F) : h(p, $, m, N, v));
                        },
                        v
                      ));
                    });
                  },
                  v
                ));
              });
            },
            v
          ));
        };
      })()), d = n._3 && !c._3 ? H(c._1, c._2, !0) : c;
      return e((_) => l(
        d,
        e,
        r,
        (h, p) => o(H(h._1, h._2, s), p),
        (h, p) => e(($) => i(d._3 && !h._3 ? H(h._1, h._2, !0) : h, void 0))
      ));
    })
  ));
}, _N = (t, n, e, r, o) => n((i) => lr("+edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => qn(
      a,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = xt(wn)("source node identifier"), p = a._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const w = p._3 && !m._3 ? H(m._1, m._2, !0) : m;
            return n((y) => qn(
              w,
              n,
              e,
              r,
              (k, E) => n((I) => {
                const D = xt(wn)("target node identifier"), z = w._3 && !k._3 ? H(k._1, k._2, !0) : k;
                return n((U) => D(
                  z,
                  n,
                  e,
                  r,
                  (P, R) => n((j) => o(
                    z._3 && !P._3 ? H(P._1, P._2, !0) : P,
                    Be("AddEdge", { from: N, to: R })
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), lN = (t, n, e, r, o) => n((i) => lr("+node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => qn(
      a,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = xt(wn)("node identifier"), p = a._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const w = p._3 && !m._3 ? H(m._1, m._2, !0) : m;
            return n((y) => sN(
              w,
              n,
              e,
              r,
              (k, E) => n((I) => o(
                w._3 && !k._3 ? H(k._1, k._2, !0) : k,
                Be("AddNode", { id: N, label: E })
              ))
            ));
          })
        ));
      })
    ));
  })
)), dN = (t, n, e, r, o) => n((i) => lr("-edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => qn(
      a,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = xt(wn)("source node identifier"), p = a._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const w = p._3 && !m._3 ? H(m._1, m._2, !0) : m;
            return n((y) => qn(
              w,
              n,
              e,
              r,
              (k, E) => n((I) => {
                const D = xt(wn)("target node identifier"), z = w._3 && !k._3 ? H(k._1, k._2, !0) : k;
                return n((U) => D(
                  z,
                  n,
                  e,
                  r,
                  (P, R) => n((j) => o(
                    z._3 && !P._3 ? H(P._1, P._2, !0) : P,
                    Be("DelEdge", { from: N, to: R })
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), hN = (t, n, e, r, o) => n((i) => lr("-node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => qn(
      a,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = xt(wn)("node identifier"), p = a._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const w = Qn((k, E, I, D, z) => {
              const U = k._3;
              return gN(k, E, I, (P, R) => D(H(P._1, P._2, U), R), z);
            }), y = p._3 && !m._3 ? H(m._1, m._2, !0) : m;
            return n((k) => w(
              y,
              n,
              e,
              r,
              (E, I) => n((D) => o(
                y._3 && !E._3 ? H(E._1, E._2, !0) : E,
                Be("DelNode", { id: N, via: Et(Mt.foldr, I) })
              ))
            ));
          })
        ));
      })
    ));
  })
)), pN = (t, n, e, r, o) => n((i) => lr("~edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => qn(
      a,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = xt(wn)("source node identifier"), p = a._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const w = p._3 && !m._3 ? H(m._1, m._2, !0) : m;
            return n((y) => qn(
              w,
              n,
              e,
              r,
              (k, E) => n((I) => {
                const D = xt(wn)("target node identifier"), z = w._3 && !k._3 ? H(k._1, k._2, !0) : k;
                return n((U) => D(
                  z,
                  n,
                  e,
                  r,
                  (P, R) => n((j) => {
                    const et = z._3 && !P._3 ? H(P._1, P._2, !0) : P;
                    return n((X) => Bn(
                      et,
                      n,
                      e,
                      r,
                      (A, x) => n((C) => {
                        const q = xt(fr("->"))("'->'"), S = et._3 && !A._3 ? H(A._1, A._2, !0) : A;
                        return n((F) => q(
                          S,
                          n,
                          e,
                          r,
                          (W, K) => n((V) => {
                            const B = S._3 && !W._3 ? H(W._1, W._2, !0) : W;
                            return n((nt) => Bn(
                              B,
                              n,
                              e,
                              r,
                              (M, tt) => n((ot) => {
                                const st = xt(wn)("new source node identifier"), _t = B._3 && !M._3 ? H(M._1, M._2, !0) : M;
                                return n((At) => st(
                                  _t,
                                  n,
                                  e,
                                  r,
                                  (Tt, Vt) => n((ht) => {
                                    const mt = _t._3 && !Tt._3 ? H(Tt._1, Tt._2, !0) : Tt;
                                    return n((lt) => qn(
                                      mt,
                                      n,
                                      e,
                                      r,
                                      (dt, it) => n((ut) => {
                                        const $t = xt(wn)("new target node identifier"), Nt = mt._3 && !dt._3 ? H(dt._1, dt._2, !0) : dt;
                                        return n((Rt) => $t(
                                          Nt,
                                          n,
                                          e,
                                          r,
                                          (It, tn) => n((zn) => o(
                                            Nt._3 && !It._3 ? H(It._1, It._2, !0) : It,
                                            Be("RepointEdge", { from: N, to: R, newFrom: Vt, newTo: tn })
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
)), $N = (t, n, e, r, o) => n((i) => af(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = xt(lf([lN, hN, pN, _N, dN, aN]))("statement (+node, -node, +edge, -edge, ~edge, or 'a -> b')"), g = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((l) => a(
      g,
      n,
      e,
      r,
      (d, _) => n((h) => o(
        g._3 && !d._3 ? H(d._1, d._2, !0) : d,
        Hs("Leaf", { op: _, line: u.line, column: u.column })
      ))
    ));
  })
)), mN = (t, n, e, r, o) => n((i) => lr("seed")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => Ie(
      a,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = xt(fN)("integer (seed value)"), p = a._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const w = p._3 && !m._3 ? H(m._1, m._2, !0) : m;
            return n((y) => Bn(
              w,
              n,
              e,
              r,
              (k, E) => n((I) => o(w._3 && !k._3 ? H(k._1, k._2, !0) : k, N))
            ));
          })
        ));
      })
    ));
  })
)), Xs = /* @__PURE__ */ Zm(/* @__PURE__ */ (() => {
  const t = xt(Kt((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (c, a) => e((g) => e((l) => {
      const d = n._3 && !c._3 ? H(c._1, c._2, !0) : c;
      return Bn(d, e, r, o, (_, h) => e((p) => i(d._3 && !_._3 ? H(_._1, _._2, !0) : _, h)));
    }))
  )));
})())(/* @__PURE__ */ xt(/* @__PURE__ */ (() => {
  const t = xt(Kt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => Bn(
    n,
    e,
    r,
    o,
    (c, a) => e((g) => e((l) => {
      const d = n._3 && !c._3 ? H(c._1, c._2, !0) : c;
      return t(d, e, r, o, (_, h) => e((p) => i(d._3 && !_._3 ? H(_._1, _._2, !0) : _, h)));
    }))
  )));
})())("closing '}'")), NN = (t, n, e, r, o) => n((i) => ti("seq")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => Xs(Us(uf))(
    t._3 && !s._3 ? H(s._1, s._2, !0) : s,
    n,
    e,
    r,
    o
  ))
)), JN = (t, n, e, r, o) => n((i) => ti("par")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => Xs(Us(Jm))(
    t._3 && !s._3 ? H(s._1, s._2, !0) : s,
    n,
    e,
    r,
    o
  ))
)), Us = (t) => {
  const n = Qn(vN());
  return (e, r, o, i, s) => r((u) => n(
    e,
    r,
    o,
    i,
    (c, a) => r((g) => s(
      e._3 && !c._3 ? H(c._1, c._2, !0) : c,
      t(Et(Mt.foldr, a))
    ))
  ));
}, vN = /* @__PURE__ */ vf(() => {
  const t = zs(xt(Kt((n) => n === "}"))("'}'"));
  return (n, e, r, o, i) => e((s) => {
    const u = n._3;
    return e((c) => e((a) => Bn(
      n,
      e,
      r,
      (g, l) => o(H(g._1, g._2, u), l),
      (g, l) => e((d) => e((_) => {
        const h = n._3 && !g._3 ? H(g._1, g._2, !0) : g;
        return t(
          h,
          e,
          r,
          (p, $) => o(H(p._1, p._2, u), $),
          (p, $) => e((m) => {
            const N = h._3 && !p._3 ? H(p._1, p._2, !0) : p;
            return e((v) => {
              const w = lf([
                (k, E, I, D, z) => {
                  const U = k._3;
                  return JN(k, E, I, (P, R) => D(H(P._1, P._2, U), R), z);
                },
                (k, E, I, D, z) => {
                  const U = k._3;
                  return NN(k, E, I, (P, R) => D(H(P._1, P._2, U), R), z);
                },
                $N
              ]), y = n._3 && !N._3 ? H(N._1, N._2, !0) : N;
              return e((k) => w(
                y,
                e,
                r,
                o,
                (E, I) => e((D) => {
                  const z = y._3 && !E._3 ? H(E._1, E._2, !0) : E;
                  return e((U) => Ie(
                    z,
                    e,
                    r,
                    o,
                    (P, R) => e((j) => {
                      const et = z._3 && !P._3 ? H(P._1, P._2, !0) : P;
                      return e((X) => rN(
                        et,
                        e,
                        r,
                        o,
                        (A, x) => e((C) => i(et._3 && !A._3 ? H(A._1, A._2, !0) : A, I))
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
}), TN = (t, n, e, r, o) => n((i) => ti("frame")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => cN(
      a,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = a._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n((p) => Bn(
          h,
          n,
          e,
          r,
          ($, m) => n((N) => {
            const v = Xs(Us(uf)), w = h._3 && !$._3 ? H($._1, $._2, !0) : $;
            return n((y) => v(
              w,
              n,
              e,
              r,
              (k, E) => n((I) => {
                const D = w._3 && !k._3 ? H(k._1, k._2, !0) : k;
                return n((z) => Bn(
                  D,
                  n,
                  e,
                  r,
                  (U, P) => n((R) => o(
                    D._3 && !U._3 ? H(U._1, U._2, !0) : U,
                    { name: b("Just", d), ops: E }
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), yN = (t, n, e, r, o) => n((i) => Bn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => {
      const l = (h, p) => n(($) => {
        const m = Qn(TN), N = a._3 && !h._3 ? H(h._1, h._2, !0) : h;
        return n((v) => m(
          N,
          n,
          e,
          r,
          (w, y) => n((k) => {
            const E = N._3 && !w._3 ? H(w._1, w._2, !0) : w;
            return n((I) => Bn(
              E,
              n,
              e,
              r,
              (D, z) => n((U) => {
                const P = xt(_f)("'frame' or end of input"), R = E._3 && !D._3 ? H(D._1, D._2, !0) : D;
                return n((j) => P(
                  R,
                  n,
                  e,
                  r,
                  (et, X) => n((A) => o(
                    R._3 && !et._3 ? H(et._1, et._2, !0) : et,
                    {
                      seed: (() => {
                        if (p.tag === "Just")
                          return p._1;
                        if (p.tag === "Nothing")
                          return 0;
                        f();
                      })(),
                      frames: Et(Mt.foldr, y)
                    }
                  ))
                ));
              })
            ));
          })
        ));
      }), d = a._1, _ = a._2;
      return n((h) => n((p) => mN(
        H(d, _, !1),
        n,
        e,
        ($, m) => {
          const N = $._3;
          return n((v) => N ? r($, m) : l(a, T));
        },
        ($, m) => n((N) => l($, b("Just", m)))
      )));
    });
  })
)), wN = (t) => {
  const n = zm(t)(yN);
  if (n.tag === "Left")
    return kt("Left", { msg: n._1._1, line: n._1._2.line, column: n._1._2.column });
  if (n.tag === "Right")
    return kt("Right", n._1);
  f();
}, LN = (t) => {
  const n = wN(t);
  if (n.tag === "Left")
    return kt("Left", n._1.msg);
  if (n.tag === "Right")
    return kt("Right", n._1);
  f();
};
function kN(t, n, e, r) {
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
function _o(t) {
  return function(n) {
    return function(e) {
      return function() {
        e.setAttribute(t, n);
      };
    };
  };
}
const bN = function() {
  return window;
};
function EN(t) {
  return function(n) {
    return function() {
      return n.requestAnimationFrame(t);
    };
  };
}
const xN = (t) => t, CN = (t) => () => t.clientWidth || 0, SN = () => window.devicePixelRatio || 1, GN = (t, n) => {
  n.innerHTML = t;
}, Zu = (t, n, e) => {
  t.style.setProperty(n, e);
}, IN = (t) => (n) => t === n, pf = (t) => t, $f = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, PN = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, AN = /* @__PURE__ */ pf("CanvasRenderer"), RN = /* @__PURE__ */ pf("SvgRenderer"), FN = (t) => (n) => {
  const e = t - n * ct(ce(lc(t / n)));
  return n <= 0 ? 0 : e < 0 ? e + n : e;
}, BN = (t) => J((n) => (e) => {
  const r = t(e);
  return () => (n(), r());
})(() => {
}), QN = (t) => {
  const n = LN(t);
  if (n.tag === "Left")
    return kt("Left", n._1);
  if (n.tag === "Right") {
    const e = Bm(n._1);
    if (e.tag === "Left")
      return kt("Left", e._1.msg);
    if (e.tag === "Right")
      return kt("Right", e._1);
  }
  f();
}, vi = (t) => (n) => {
  const e = ln((r) => r.startT <= n && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return e._1.scene._1.to;
    if (e._1.scene.tag === "DataFlow")
      return e._1.scene._1.keyframe;
    f();
  }
  if (e.tag === "Nothing") {
    const r = t.spans.length - 1 | 0;
    if (r >= 0 && r < t.spans.length) {
      if (t.spans[r].scene.tag === "Structural")
        return t.spans[r].scene._1.to;
      if (t.spans[r].scene.tag === "DataFlow")
        return t.spans[r].scene._1.keyframe;
      f();
    }
    return "";
  }
  f();
}, DN = (t) => (n) => {
  if (n.tag === "Nothing")
    return t.viewBox;
  if (n.tag === "Just") {
    const e = n._1.w / n._1.h, r = t.vw / e, o = t.vh * e, i = t.vw / t.vh;
    return n._1.w <= 0 || n._1.h <= 0 || t.vw <= 0 || t.vh <= 0 ? t.viewBox : i > e ? Mn(Xn("Fixed", Un(0)(20)(2)))(t.vx) + " " + Mn(Xn(
      "Fixed",
      Un(0)(20)(2)
    ))(t.vy - (r - t.vh) / 2) + " " + Mn(Xn("Fixed", Un(0)(20)(2)))(t.vw) + " " + Mn(Xn(
      "Fixed",
      Un(0)(20)(2)
    ))(r) : i < e ? Mn(Xn("Fixed", Un(0)(20)(2)))(t.vx - (o - t.vw) / 2) + " " + Mn(Xn(
      "Fixed",
      Un(0)(20)(2)
    ))(t.vy) + " " + Mn(Xn("Fixed", Un(0)(20)(2)))(o) + " " + Mn(Xn(
      "Fixed",
      Un(0)(20)(2)
    ))(t.vh) : t.viewBox;
  }
  f();
}, Ti = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => {
  const a = vl(i)($f(c)(i.totalDuration));
  if (n === "CanvasRenderer")
    return () => {
      const g = pc(), l = u.value;
      u.value = g;
      const d = xN(t), _ = Sc(i.layout)(a.camera), h = _.w + 48, p = _.h + 48, $ = (() => {
        if (e.tag === "Just")
          return { w: e._1.w, h: e._1.h };
        if (e.tag === "Nothing") {
          const U = CN(t)();
          return { w: U, h: h <= 0 ? U : U * p / h };
        }
        f();
      })(), m = SN(), N = $.w * m, v = $.h * m, w = Sg(d)(), y = Gg(d)(), k = Ig(d)(N);
      w !== N && k();
      const E = Pg(d)(v);
      y !== v && E(), Zu(t, "height", an(ce(jr($.h))) + "px"), e.tag === "Just" ? Zu(t, "width", an(ce(jr($.w))) + "px") : e.tag === "Nothing" || f();
      const I = Cg(d)();
      hr(I)(), ss(I)({ scaleX: m, scaleY: m })();
      const D = s.value, z = j$(r)(o)(I)({ width: $.w, height: $.h })(i.layout)(a)(l === 0 ? 0 : (g - l) / 1e3)(D)();
      return s.value = z, pr(I)();
    };
  if (n === "SvgRenderer") {
    const g = fm(r)(o)(i.layout)(a), l = _o("viewBox")(DN(g)(e))(t);
    return () => (l(), _o("preserveAspectRatio")("xMidYMid meet")(t)(), e.tag === "Just" ? (_o("width")(an(ce(jr(e._1.w))))(t)(), _o("height")(an(ce(jr(e._1.h))))(t)()) : e.tag === "Nothing" || f(), GN(g.body, t));
  }
  f();
}, WN = (t) => (n) => (e) => (r) => (o) => (i) => () => {
  let s = 1, u = !0, c = !1, a = 0, g = 0;
  const l = { value: Q }, d = { value: 0 };
  let _ = !1, h = [];
  Ti(t)(e)(r)(o)(i)(n)(l)(d)(0)();
  const p = (y) => () => {
    const k = h, E = u, I = { time: y, keyframe: vi(n)(y), playing: E };
    return BN((D) => D(I))(k)();
  }, $ = () => (u = !1, p(a)()), m = () => {
    if (!_ && (c = !1, u)) {
      const E = pc(), I = g;
      g = E;
      const D = s, z = a, U = FN(I === 0 ? z + 0 * D : z + (E - I) / 1e3 * D)(n.totalDuration + 0.8);
      return a = U, Ti(t)(e)(r)(o)(i)(n)(l)(d)(U)(), p(U)(), N();
    }
  }, N = () => {
    if (!_ && !c) {
      c = !0;
      const E = bN();
      EN(m)(E)();
    }
  }, v = () => (g = 0, u = !0, N()), w = () => (u || v(), p(a)());
  return v(), {
    play: w,
    pause: $,
    toggle: () => u ? $() : w(),
    seek: (y) => {
      const k = PN(0)($f(n.totalDuration)(y));
      return () => (a = k, g = 0, Ti(t)(e)(r)(o)(i)(n)(l)(d)(k)(), p(k)());
    },
    setSpeed: (y) => () => s = y,
    currentTime: () => a,
    currentKeyframe: () => {
      const y = a;
      return vi(n)(y);
    },
    isPlaying: () => u,
    duration: n.totalDuration,
    subscribe: (y) => () => {
      h = gn(h)(y);
      const E = a, I = u;
      y({ time: E, keyframe: vi(n)(E), playing: I })();
      const D = fc((z) => !IN(z)(y));
      return () => {
        h = D(h);
      };
    },
    destroy: () => _ = !0
  };
}, qN = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = QN(n);
  if (s.tag === "Left")
    return () => kt("Left", s._1);
  if (s.tag === "Right") {
    const u = s._1, c = Sp(u);
    return () => {
      const a = c(), g = X_(X0)(D_)(u)(Rp(a)(u));
      if (g.tag === "Left")
        return kt("Left", "precompute failed");
      if (g.tag === "Right") {
        const l = WN(t)(g._1)(e)(r)(o)(i)();
        return kt("Right", l);
      }
      f();
    };
  }
  f();
}, tc = mn.createElement;
mn.Fragment;
function Ms(t) {
  return (n) => Array.isArray(n.children) ? tc.apply(null, [t, n].concat(n.children)) : tc(t, n);
}
function HN(t) {
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
      const r = mn.forwardRef(
        (o, i) => t(n)(e(o, i))
      );
      return r.displayName = n, r;
    };
  };
}
const mf = /* @__PURE__ */ HN(Ms), ON = /* @__PURE__ */ mf("canvas")(), zN = (t, n) => {
  const e = mn.useRef(n);
  return e.current !== n && !t(e.current, n) && (e.current = n), e.current;
};
mn.memo;
mn.memo;
function nc(t, n) {
  const [e, r] = mn.useState(
    typeof n == "function" ? () => n : n
  );
  return r.hasOwnProperty("$$reactBasicHooks$$cachedSetState") || (r.$$reactBasicHooks$$cachedSetState = (o) => () => r(o)), t(e, r.$$reactBasicHooks$$cachedSetState);
}
function VN(t, n, e) {
  const r = zN(t, n);
  mn.useEffect(e, [r]);
}
const YN = mn.useRef;
function XN(t) {
  return t.current;
}
mn.useContext;
mn.useDebugValue;
mn.useId;
mn.useDeferredValue;
mn.useSyncExternalStore;
mn.useSyncExternalStore;
function UN(t, n) {
  return n.displayName = t, n.toString = () => t, n;
}
mn.useEffectEvent || mn.experimental_useEffectEvent;
const MN = (t) => (n) => (e) => () => VN((r, o) => t.eq(r)(o), n, e), KN = /* @__PURE__ */ $0(XN), jN = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, ZN = (t) => {
  const n = {
    apply: (e) => (r) => () => {
      const o = e(), i = r();
      return o(i);
    },
    Functor0: () => jN
  };
  return { pure: (e) => () => e, Apply0: () => n };
}, t2 = /* @__PURE__ */ MN({
  eq: (t) => (n) => t._1 === n._1 && t._2._1 === n._2._1 && t._2._2._1 === n._2._2._1 && t._2._2._2._1 === n._2._2._2._1 && (t._2._2._2._2.tag === "Nothing" ? n._2._2._2._2.tag === "Nothing" : t._2._2._2._2.tag === "Just" && n._2._2._2._2.tag === "Just" && t._2._2._2._2._1.h === n._2._2._2._2._1.h && t._2._2._2._2._1.w === n._2._2._2._2._1.w)
}), Nf = ZN().pure, n2 = /* @__PURE__ */ Ms(ON), e2 = /* @__PURE__ */ mf("svg")(), Jf = (t) => (n) => (e) => (r) => (o) => () => {
  const i = YN(wf), s = nc((a, g) => L(a, g), T), u = s._1, c = nc((a, g) => L(a, g), { time: 0, keyframe: "", playing: !1 });
  return t2(L(t, L(n, L(e, L(r, o)))))((() => {
    const a = KN(i);
    return () => {
      const g = a(), l = Ye(g, T, Yt), d = (() => {
        if (l.tag === "Just")
          return kN(T, Yt, "Element", l._1);
        if (l.tag === "Nothing")
          return T;
        f();
      })();
      if (d.tag === "Nothing")
        return () => {
        };
      if (d.tag === "Just") {
        const _ = qN(d._1)(t)(n === "svg" ? RN : AN)(o)(e === "dark" ? _m : e === "blueprint" ? lm : gm)(r)();
        if (_.tag === "Left")
          return Lf("[markgraf] " + _._1)(), () => {
          };
        if (_.tag === "Right") {
          const h = _._1;
          s._2(($) => b("Just", h))();
          const p = h.subscribe(($) => c._2((m) => $))();
          return () => (p(), h.destroy(), s._2(($) => T)());
        }
      }
      f();
    };
  })())(), Nf({
    elementRef: i,
    time: c._1.time,
    keyframe: c._1.keyframe,
    playing: c._1.playing,
    duration: u.tag === "Just" ? u._1.duration : 0,
    ready: (() => {
      if (u.tag === "Just")
        return !0;
      if (u.tag === "Nothing")
        return !1;
      f();
    })(),
    play: (() => {
      if (u.tag === "Just")
        return u._1.play;
      if (u.tag === "Nothing")
        return () => {
        };
      f();
    })(),
    pause: (() => {
      if (u.tag === "Just")
        return u._1.pause;
      if (u.tag === "Nothing")
        return () => {
        };
      f();
    })(),
    toggle: (() => {
      if (u.tag === "Just")
        return u._1.toggle;
      if (u.tag === "Nothing")
        return () => {
        };
      f();
    })(),
    seek: (a) => {
      if (u.tag === "Just")
        return u._1.seek(a);
      if (u.tag === "Nothing")
        return () => {
        };
      f();
    },
    setSpeed: (a) => {
      if (u.tag === "Just")
        return u._1.setSpeed(a);
      if (u.tag === "Nothing")
        return () => {
        };
      f();
    }
  })();
}, r2 = /* @__PURE__ */ UN(
  "MarkgrafPlayer",
  (t) => {
    const n = Ye(t.renderer, T, Yt), e = (() => {
      if (n.tag === "Nothing")
        return "canvas";
      if (n.tag === "Just")
        return n._1;
      f();
    })(), r = Jf(t.src)(e)((() => {
      const o = Ye(t.theme, T, Yt);
      if (o.tag === "Nothing")
        return "light";
      if (o.tag === "Just")
        return o._1;
      f();
    })())((() => {
      const o = Ye(t.transparent, T, Yt);
      if (o.tag === "Nothing")
        return !1;
      if (o.tag === "Just")
        return o._1;
      f();
    })())((() => {
      const o = Ye(t.width, T, Yt);
      if (o.tag === "Just") {
        const i = Ye(t.height, T, Yt);
        if (i.tag === "Just")
          return b("Just", { w: o._1, h: i._1 });
        if (i.tag === "Nothing")
          return T;
        f();
      }
      if (o.tag === "Nothing")
        return T;
      f();
    })())();
    return Nf(e === "svg" ? Ms(e2)({ className: "markgraf-player", ref: r.elementRef }) : n2({ className: "markgraf-player", ref: r.elementRef }))();
  }
), i2 = (t, n) => Jf(t)(n?.renderer ?? "canvas")(n?.theme ?? "light")(n?.transparent ?? !1), s2 = r2;
export {
  s2 as MarkgrafPlayer,
  i2 as useMarkgraf
};
