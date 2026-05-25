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
function a() {
  throw new Error("Failed pattern match");
}
function Me(t, n) {
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
}, Yi = (t) => t, dn = /* @__PURE__ */ Yi("LT"), hn = /* @__PURE__ */ Yi("GT"), yn = /* @__PURE__ */ Yi("EQ"), b = (t, n) => ({ tag: t, _1: n }), y = /* @__PURE__ */ b("Nothing"), Kt = (t) => b("Just", t), rc = (t) => {
  if (t.tag === "Nothing")
    return !0;
  if (t.tag === "Just")
    return !1;
  a();
}, yf = (t) => {
  if (t.tag === "Nothing")
    return !1;
  if (t.tag === "Just")
    return !0;
  a();
}, wf = null;
function dr(t, n, e) {
  return t == null ? n : e(t);
}
const L = (t, n) => ({ tag: "Tuple", _1: t, _2: n }), fr = (t) => (n) => L(t, n), Ro = (t) => t._2, Fo = (t) => t._1, Lf = function(t) {
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
    a();
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
    a();
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
    a();
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
        a();
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
    a();
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
            function f(g, l) {
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
                  return o(i(r)(f(g, d)))(f(d, l));
              }
            }
            return f(0, c.length);
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
}, Yt = function(t, n) {
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
}, nr = function(t, n, e, r) {
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
}, er = function(t, n, e, r, o) {
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
    var u, c, f, g, l, d, _;
    for (u = i + (s - i >> 1), u - i > 1 && t(n, e, o, r, i, u), s - u > 1 && t(n, e, o, r, u, s), c = i, f = u, g = i; c < u && f < s; )
      l = o[c], d = o[f], _ = e(n(l)(d)), _ > 0 ? (r[g++] = d, ++f) : (r[g++] = l, ++c);
    for (; c < u; )
      r[g++] = o[c++];
    for (; f < s; )
      r[g++] = o[f++];
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
    a();
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
    return t.length - 1 | 0, y;
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? b("Just", { init: Gt(0, t.length - 1 | 0, t), last: t[n] }) : y;
}, _g = (t) => (n) => (e) => t >= 0 && t < e.length ? er(Kt, y, t, n(e[t]), e) : y, Ce = (t) => (n) => {
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
      s = !1, u = y;
    }
    return u;
  })(0);
  if (r.tag === "Just")
    return r._1 === 0 ? { init: [], rest: n } : { init: Gt(0, r._1, n), rest: Gt(r._1, n.length, n) };
  if (r.tag === "Nothing")
    return { init: n, rest: [] };
  a();
}, rr = (t) => (n) => {
  const e = Lt((r) => (o) => t(r._2)(o._2))(Pt(fr)(n));
  return 0 < e.length ? O(Ro)(fg(rt)(Fo)((() => {
    const r = [e[0]];
    for (const o of e) {
      const i = t((() => {
        const s = r.length - 1 | 0;
        if (s >= 0 && s < r.length)
          return r[s]._2;
        a();
      })())(o._2);
      (i === "LT" || i === "GT" || i !== "EQ") && r.push(o);
    }
    return r;
  })())) : [];
}, lg = (t) => (n) => {
  const e = [], o = Hf(
    (i) => i >= 0 && i < n.length ? b("Just", n[i]) : y,
    { value: 0 }
  );
  return zf(o)((i) => () => {
    const s = [];
    s.push(i), Of(t(i))(o)(s)(), e.push(s);
  })(), e;
}, ln = (t) => (n) => {
  const e = nr(Kt, y, t, n);
  return e.tag === "Just" ? b("Just", n[e._1]) : y;
}, fc = (t) => (n) => gt(t, n), In = (t) => (n) => (e) => {
  const r = nr(Kt, y, (o) => t.eq(o)(n), e);
  if (r.tag === "Nothing")
    return !1;
  if (r.tag === "Just")
    return !0;
  a();
}, gc = (t) => (n) => bt(n)(t), vt = (t) => gc((n) => {
  const e = t(n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [e._1];
  a();
}), dg = isFinite, or = Math.abs, ji = Math.ceil, Zi = Math.cos, _c = Math.exp, lc = Math.floor, yi = function(t) {
  return function(n) {
    return Math.pow(t, n);
  };
}, jr = Math.round, ts = Math.sin, gr = Math.sqrt, hg = function(t) {
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
}, $g = /* @__PURE__ */ pg(Kt)(y), mg = /* @__PURE__ */ $g(10), dc = /* @__PURE__ */ hg(Kt)(y), ce = (t) => {
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
  a();
}, qt = (t, n, e) => ({ tag: t, _1: n, _2: e }), zt = /* @__PURE__ */ qt("Nil"), Ut = {
  foldr: (t) => (n) => {
    const e = Ut.foldl((i) => (s) => t(s)(i))(n), o = ((i) => (s) => {
      let u = i, c = s, f = !0, g;
      for (; f; ) {
        const l = u, d = c;
        if (d.tag === "Nil") {
          f = !1, g = l;
          continue;
        }
        if (d.tag === "Cons") {
          u = qt("Cons", d._1, l), c = d._2;
          continue;
        }
        a();
      }
      return g;
    })(zt);
    return (i) => e(o(i));
  },
  foldl: (t) => (e) => (r) => {
    let o = e, i = r, s = !0, u;
    for (; s; ) {
      const c = o, f = i;
      if (f.tag === "Nil") {
        s = !1, u = c;
        continue;
      }
      if (f.tag === "Cons") {
        o = t(c)(f._1), i = f._2;
        continue;
      }
      a();
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
}, Ng = function(t) {
  return function(n) {
    return function(e) {
      return function(r) {
        return function(o) {
          return function(i) {
            for (var s = [], u = i; ; ) {
              var c = o(u);
              s.push(e(c));
              var f = r(c);
              if (t(f)) return s;
              u = n(f);
            }
          };
        };
      };
    };
  };
}, Jg = (t) => {
  if (t.tag === "Just")
    return t._1;
  a();
}, vg = { unfoldr1: /* @__PURE__ */ Ng(rc)(Jg)(Fo)(Ro) }, Tg = function(t) {
  return function(n) {
    return function(e) {
      return function(r) {
        return function(o) {
          return function(i) {
            for (var s = [], u = i; ; ) {
              var c = o(u);
              if (t(c)) return s;
              var f = n(c);
              s.push(e(f)), u = r(f);
            }
          };
        };
      };
    };
  };
}, yg = (t) => {
  if (t.tag === "Just")
    return t._1;
  a();
}, On = {
  unfoldr: /* @__PURE__ */ Tg(rc)(yg)(Fo)(Ro),
  Unfoldable10: () => vg
}, Dt = (t, n, e, r, o, i, s) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s }), Wn = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), Zr = (t, n, e) => ({ tag: "Split", _1: t, _2: n, _3: e }), Ks = (t, n, e) => ({ tag: "SplitLast", _1: t, _2: n, _3: e }), Q = /* @__PURE__ */ Dt("Leaf"), Qe = /* @__PURE__ */ Wn("IterLeaf"), en = (t, n, e, r) => {
  if (e.tag === "Leaf") {
    if (r.tag === "Leaf")
      return Dt("Node", 1, 1, t, n, e, r);
    if (r.tag === "Node")
      return Dt("Node", 1 + r._1 | 0, 1 + r._2 | 0, t, n, e, r);
    a();
  }
  if (e.tag === "Node") {
    if (r.tag === "Leaf")
      return Dt("Node", 1 + e._1 | 0, 1 + e._2 | 0, t, n, e, r);
    if (r.tag === "Node")
      return Dt("Node", e._1 > r._1 ? 1 + e._1 | 0 : 1 + r._1 | 0, (1 + e._2 | 0) + r._2 | 0, t, n, e, r);
  }
  a();
}, kn = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r.tag === "Leaf" ? Dt("Node", 1, 1, t, n, Q, Q) : r.tag === "Node" && r._1 > 1 ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      a();
    })() ? en(r._5._3, r._5._4, en(t, n, e, r._5._5), en(r._3, r._4, r._5._6, r._6)) : en(r._3, r._4, en(t, n, e, r._5), r._6) : en(t, n, e, r);
  if (e.tag === "Node")
    return r.tag === "Node" ? r._1 > (e._1 + 1 | 0) ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      a();
    })() ? en(r._5._3, r._5._4, en(t, n, e, r._5._5), en(r._3, r._4, r._5._6, r._6)) : en(r._3, r._4, en(t, n, e, r._5), r._6) : e._1 > (r._1 + 1 | 0) ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      a();
    })() ? en(e._6._3, e._6._4, en(e._3, e._4, e._5, e._6._5), en(t, n, e._6._6, r)) : en(e._3, e._4, e._5, en(t, n, e._6, r)) : en(t, n, e, r) : r.tag === "Leaf" && e._1 > 1 ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      a();
    })() ? en(e._6._3, e._6._4, en(e._3, e._4, e._5, e._6._5), en(t, n, e._6._6, r)) : en(e._3, e._4, e._5, en(t, n, e._6, r)) : en(t, n, e, r);
  a();
}, ir = (t, n, e) => {
  if (e.tag === "Leaf")
    return Zr(y, Q, Q);
  if (e.tag === "Node") {
    const r = t(n)(e._3);
    if (r === "LT") {
      const o = ir(t, n, e._5);
      return Zr(o._1, o._2, kn(e._3, e._4, o._3, e._6));
    }
    if (r === "GT") {
      const o = ir(t, n, e._6);
      return Zr(o._1, kn(e._3, e._4, e._5, o._2), o._3);
    }
    if (r === "EQ")
      return Zr(b("Just", e._4), e._5, e._6);
  }
  a();
}, hc = (t, n, e, r) => {
  if (r.tag === "Leaf")
    return Ks(t, n, e);
  if (r.tag === "Node") {
    const o = hc(r._3, r._4, r._5, r._6);
    return Ks(o._1, o._2, kn(t, n, e, o._3));
  }
  a();
}, Xr = (t, n) => {
  if (t.tag === "Leaf")
    return n;
  if (t.tag === "Node") {
    const e = hc(t._3, t._4, t._5, t._6);
    return kn(e._1, e._2, e._3, n);
  }
  a();
}, ae = (t, n, e) => {
  if (n.tag === "Leaf")
    return Q;
  if (e.tag === "Leaf")
    return n;
  if (e.tag === "Node") {
    const r = ir(t, e._3, n);
    return Xr(ae(t, r._2, e._5), ae(t, r._3, e._6));
  }
  a();
}, po = (t, n, e, r) => {
  if (e.tag === "Leaf" || r.tag === "Leaf")
    return Q;
  if (r.tag === "Node") {
    const o = ir(t, r._3, e), i = po(t, n, o._2, r._5), s = po(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return kn(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return Xr(i, s);
  }
  a();
}, bn = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r;
  if (r.tag === "Leaf")
    return e;
  if (r.tag === "Node") {
    const o = ir(t, r._3, e), i = bn(t, n, o._2, r._5), s = bn(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return kn(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return kn(r._3, r._4, i, s);
  }
  a();
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
    a();
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
      o = ((f) => (g) => {
        let l = f, d = g, _ = !0, h;
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
          a();
        }
        return h;
      })(u._2)(u._1);
      continue;
    }
    a();
  }
  return s;
}, De = /* @__PURE__ */ Lg((t, n, e) => b("Just", L(L(t, n), e)))((t) => y), yt = (t) => (n) => (e) => (r) => {
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
    a();
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
    a();
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
    a();
  };
  return e;
}, kg = (t) => {
  const n = t.compare;
  return (e) => (r) => (o) => {
    const i = ir(n, r, o), s = e(i._1);
    if (s.tag === "Nothing")
      return Xr(i._2, i._3);
    if (s.tag === "Just")
      return kn(r, s._1, i._2, i._3);
    a();
  };
}, Zt = function(t) {
  return function(n) {
    return t + n | 0;
  };
}, sr = function(t) {
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
    a();
  })(), i = rt.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  a();
}, Mn = (t) => {
  if (t.tag === "Precision")
    return bg(t._1);
  if (t.tag === "Fixed")
    return Eg(t._1);
  if (t.tag === "Exponential")
    return xg(t._1);
  a();
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
  a();
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
  a();
})()), Do = (t) => (n) => {
  if (n === "BevelJoin")
    return ei(t)("bevel");
  if (n === "RoundJoin")
    return ei(t)("round");
  if (n === "MiterJoin")
    return ei(t)("miter");
  a();
}, hs = (t) => (n) => {
  if (n === "Round")
    return ni(t)("round");
  if (n === "Square")
    return ni(t)("square");
  if (n === "Butt")
    return ni(t)("butt");
  a();
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
  a();
})()), Pn = {
  foldr: (t) => (n) => {
    const e = Ut.foldr(t)(n);
    return (r) => e((() => {
      const o = (i, s) => {
        if (i.tag === "Leaf")
          return s;
        if (i.tag === "Node")
          return o(i._5, qt("Cons", i._3, o(i._6, s)));
        a();
      };
      return o(r, zt);
    })());
  }
}, Wo = (t) => t, c0 = (t) => t, a0 = /* @__PURE__ */ Wo("Linear"), f0 = /* @__PURE__ */ Wo("EaseInOutQuad"), g0 = /* @__PURE__ */ Wo("EaseOutExpo"), _0 = /* @__PURE__ */ Wo("SpringBouncy"), Cr = (t) => (n) => (e) => {
  const r = gr(1 - n * n), o = t * r;
  return 1 - _c(-n * t * e) * (Zi(o * e) + n / r * ts(o * e));
}, l0 = (t) => {
  const n = pt.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    a();
  })(), r = pt.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  a();
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
  a();
})()(l0(n)), Jc = /* @__PURE__ */ J(sr)(0), d0 = (t) => (n) => (e) => {
  const r = pt.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    a();
  })(), i = pt.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  a();
}, Zs = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, tu = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, vc = (t) => (n) => {
  const e = $n(
    (s) => (u) => ({
      a: s,
      b: u,
      len: (() => {
        const c = u.y - s.y, f = u.x - s.x;
        return gr(f * f + c * c);
      })()
    }),
    t,
    Gt(1, t.length, t)
  ), r = Jc(O((s) => s.len)(e)), o = d0(0)(r)(n * r), i = (s) => (u) => (c) => {
    let f = s, g = u, l = c, d = !0, _;
    for (; d; ) {
      const h = f, p = g, $ = l, m = Wt((N) => y, (N) => (v) => b("Just", { head: N, tail: v }), h);
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
        f = m._1.tail, g = p - m._1.head.len, l = $;
        continue;
      }
      a();
    }
    return _;
  };
  return 0 < t.length ? b("Just", i(e)(o)(t[0])) : y;
}, $s = (t) => Jc($n(
  (n) => (e) => {
    const r = e.y - n.y, o = e.x - n.x;
    return gr(o * o + r * r);
  },
  t,
  Gt(1, t.length, t)
)), ye = (t) => {
  const n = Wt(
    (e) => y,
    (e) => (r) => b("Just", { head: e, tail: r }),
    [
      ...(() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, qt("Cons", r._4, e(r._6, o)));
          a();
        };
        return bt(Et(Ut.foldr, e(t.nodes, zt)))((r) => [
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
          a();
        };
        return Et(Ut.foldr, e(t.edges, zt));
      })()),
      ...Cn((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, qt("Cons", r._4, e(r._6, o)));
          a();
        };
        return Et(Ut.foldr, e(t.chipExtras, zt));
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
  a();
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
  return e.before === t ? b("Just", e.after) : y;
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
}, w0 = /* @__PURE__ */ m0(Kt)(y), L0 = /* @__PURE__ */ N0(Kt)(y), wc = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = pt.compare(n._1)(e._1);
      return r === "LT" ? dn : r === "GT" ? hn : pt.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), k0 = (t) => (n) => or(t._1 - n._1) + or(t._2 - n._2), qo = (t) => t, un = /* @__PURE__ */ qo("North"), cn = /* @__PURE__ */ qo("South"), Kn = /* @__PURE__ */ qo("East"), xe = /* @__PURE__ */ qo("West"), ru = (t) => t, Lc = (t) => t, ou = (t, n) => ({ tag: t, _1: n }), kc = (t, n) => ({ tag: t, _1: n }), vs = (t, n) => ({ tag: t, _1: n }), b0 = /* @__PURE__ */ vs("First"), E0 = /* @__PURE__ */ Lc("Forward"), x0 = /* @__PURE__ */ Lc("Backward"), C0 = /* @__PURE__ */ jt(G)(Bt), S0 = (t) => br((n) => (e) => ({
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
    a();
  })(), i = pt.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  a();
}, Re = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, ur = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, Ke = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
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
    a();
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
      o = !1, i = y;
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
    a();
  }
  return i;
}, iu = /* @__PURE__ */ jt(G)(Bt), R0 = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, F0 = /* @__PURE__ */ bc("Hold"), B0 = /* @__PURE__ */ bc("Gap"), Q0 = (t) => (n) => (e) => {
  const r = e.center.y - n.center.y, o = e.center.x - n.center.x, i = gr(o * o + r * r), s = e.zoom - n.zoom, u = s < 0 ? -s : s;
  return Ts(t.minTransition)(t.maxTransition)(Re(t.panSpeed <= 0 ? t.minTransition : i / t.panSpeed)(t.zoomSpeed <= 0 ? t.minTransition : u / t.zoomSpeed));
}, D0 = /* @__PURE__ */ J((t) => (n) => {
  const e = t.length - 1 | 0;
  return e >= 0 && e < t.length && t[e] === n ? t : gn(t)(n);
})([]), ys = (t) => {
  const n = Wt((e) => y, (e) => (r) => b("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: ur(r.minX)(o.x), minY: ur(r.minY)(o.y), maxX: Re(r.maxX)(o.x), maxY: Re(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  a();
}, xc = (t) => {
  const n = Wt((e) => y, (e) => (r) => b("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return y;
  if (n.tag === "Just")
    return b("Just", ys(t));
  a();
}, W0 = (t) => (n) => (e) => I0(bt(Et(Pn.foldr, e))((r) => {
  const o = Ke(r)(t);
  if (o.tag === "Just")
    return gt((i) => !ki(i)(n), [o._1.source, o._1.target]);
  if (o.tag === "Nothing")
    return [];
  a();
})), q0 = (t) => (n) => (e) => {
  const r = ps(t.easing)(Ts(0)(1)(e.endT <= e.startT ? 1 : (n - e.startT) / (e.endT - e.startT)));
  return {
    center: { x: e.fromCam.center.x + (e.toCam.center.x - e.fromCam.center.x) * r, y: e.fromCam.center.y + (e.toCam.center.y - e.fromCam.center.y) * r },
    zoom: e.fromCam.zoom + (e.toCam.zoom - e.fromCam.zoom) * r
  };
}, H0 = (t) => (n) => (e) => (r) => {
  const o = (s, u) => ur(Q0(t)(s.toCam)(u.toCam))(s.endT - s.startT), i = J((s) => (u) => {
    if (s.pending.tag === "Nothing")
      return { acc: s.acc, pending: b("Just", u) };
    if (s.pending.tag === "Just")
      return !(u.fromCam.zoom === u.toCam.zoom && u.fromCam.center.x === u.toCam.center.x && u.fromCam.center.y === u.toCam.center.y) || (() => {
        const c = s.pending._1.toCam.center.x - u.toCam.center.x;
        return (c < 0 ? -c < 8 : c < 8) && (() => {
          const f = s.pending._1.toCam.center.y - u.toCam.center.y;
          return (f < 0 ? -f < 8 : f < 8) && (() => {
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
    a();
  })({ acc: [], pending: y })(r);
  if (i.pending.tag === "Nothing")
    return i.acc;
  if (i.pending.tag === "Just")
    return gn(i.acc)(i.pending._1);
  a();
}, O0 = (t) => t.kind.tag === "SendToken" ? b("Just", L(t.kind._1.edge, { source: t.kind._1.from, target: t.kind._1.to })) : y, z0 = (t) => t.tag === "DataFlow" ? vt(O0)(t._1.events) : [], V0 = (t) => (n) => P0(vt((e) => ki(e._2.source)(n) || ki(e._2.target)(n) ? b("Just", e._1) : y)(A0(t))), Y0 = (t) => (n) => {
  const e = (r) => {
    const o = ug(Kt, y, (i) => i.kind === "Hold", r < 1 ? [] : Gt(0, r, n));
    if (o.tag === "Just")
      return o._1 >= 0 && o._1 < n.length ? b("Just", n[o._1].cam) : y;
    if (o.tag === "Nothing")
      return y;
    a();
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
          a();
        })(),
        toCam: (() => {
          const i = e(r), s = (() => {
            if (i.tag === "Nothing")
              return t;
            if (i.tag === "Just")
              return i._1;
            a();
          })(), u = r + 1 | 0, c = nr(Kt, y, (f) => f.kind === "Hold", u < 1 ? n : Gt(u, n.length, n));
          if (c.tag === "Just") {
            const f = (r + 1 | 0) + c._1 | 0;
            return f >= 0 && f < n.length ? n[f].cam : s;
          }
          if (c.tag === "Nothing")
            return s;
          a();
        })()
      };
    a();
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
  return r <= 0 || o <= 0 || i.w <= 0 || i.h <= 0 ? 1 : ur(i.w / r)(i.h / o);
}, ws = (t) => {
  const n = Wt((e) => y, (e) => (r) => b("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: ur(r.minX)(o.x), minY: ur(r.minY)(o.y), maxX: Re(r.maxX)(o.x + o.w), maxY: Re(r.maxY)(o.y + o.h) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x + n._1.head.w,
      maxY: n._1.head.y + n._1.head.h
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  a();
}, Cc = (t) => (n) => (e) => {
  if (e.tag === "Leaf")
    return ye(t);
  const r = V0(n)(e), o = [
    ...vt((i) => {
      const s = Ec(i)(t.nodes);
      return s.tag === "Just" ? b("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : y;
    })(Et(
      Pn.foldr,
      bn(G.compare, Ln, e, W0(n)(e)(r))
    )),
    ...vt((i) => {
      const s = Ke(i)(t.edges);
      return s.tag === "Just" ? b("Just", ys(s._1)) : y;
    })(Et(Pn.foldr, r)),
    ...vt((i) => {
      const s = Ke(i)(t.chipExtras);
      if (s.tag === "Just")
        return xc(s._1);
      if (s.tag === "Nothing")
        return y;
      a();
    })(Et(Pn.foldr, r))
  ];
  return o.length === 0 ? ye(t) : ws(o);
}, M0 = (t) => (n) => (e) => (r) => {
  const o = [
    ...vt((i) => i)([
      (() => {
        const i = Ke(e)(t.edges);
        return i.tag === "Just" ? b("Just", ys(i._1)) : y;
      })(),
      (() => {
        const i = Ke(e)(t.chipExtras);
        if (i.tag === "Just")
          return xc(i._1);
        if (i.tag === "Nothing")
          return y;
        a();
      })()
    ]),
    ...(() => {
      const i = Ke(e)(n);
      if (i.tag === "Just")
        return vt((s) => {
          const u = Ec(s)(t.nodes);
          return u.tag === "Just" ? b("Just", { x: u._1.x, y: u._1.y, w: u._1.w, h: u._1.h }) : y;
        })([i._1.source, i._1.target]);
      if (i.tag === "Nothing")
        return [];
      a();
    })()
  ];
  return o.length === 0 ? Cc(t)(n)(r) : ws(o);
}, K0 = /* @__PURE__ */ J((t) => (n) => {
  const e = t.length - 1 | 0, r = e >= 0 && e < t.length ? b("Just", t[e]) : y;
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
      return y;
    const c = J(R0)(0)(O((g) => g.priority)(gt(
      (g) => g.startT <= u && u < g.endT,
      r
    ))), f = O((g) => g.bbox)(gt(
      (g) => g.priority === c,
      gt((g) => g.startT <= u && u < g.endT, r)
    ));
    return f.length === 0 ? b("Just", { kind: B0, startT: s._1, endT: s._2, cam: o }) : b("Just", { kind: F0, startT: s._1, endT: s._2, cam: bi(t)(n)(ws(f)) });
  })($n(fr, i, Gt(1, i.length, i))))));
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
  a();
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
    return y;
  if (n === 1)
    return b("Just", { head: yr(Tr(0)(t)), tail: "" });
  const e = yr(Tr(1)(t)), r = yr(Tr(0)(t));
  return 55296 <= r && r <= 56319 && 56320 <= e && e <= 57343 ? b("Just", { head: (((r - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0, tail: Sr(2)(t) }) : b("Just", { head: r, tail: Sr(1)(t) });
}, f_ = (t) => {
  const n = Oo(t);
  return n.tag === "Just" ? b("Just", L(n._1.head, n._1.tail)) : y;
}, g_ = (t) => On.unfoldr(f_)(t), __ = (t) => {
  const n = yr(Tr(0)(t));
  if (55296 <= n && n <= 56319 && Pe(t) > 1) {
    const e = yr(Tr(1)(t));
    if (56320 <= e && e <= 57343)
      return (((n - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0;
  }
  return n;
}, Ic = /* @__PURE__ */ s_(__), ks = /* @__PURE__ */ a_(g_)(Ic), ri = (t) => Ns(t >= 0 && t <= 65535 ? Gc(t) : t < 0 ? "\0" : "￿"), l_ = (t) => t <= 65535 ? ri(t) : ri(Me(t - 65536 | 0, 1024) + 55296 | 0) + ri(ns(t - 65536 | 0)(1024) + 56320 | 0), d_ = /* @__PURE__ */ u_(l_), Pc = (t) => (n) => {
  if (t < 1)
    return "";
  const e = Oo(n);
  return e.tag === "Just" ? d_(e._1.head) + Pc(t - 1 | 0)(e._1.tail) : n;
}, _n = /* @__PURE__ */ c_(Pc), h_ = (t) => (n) => n === "" ? y : b("Just", Ic(n)), mo = (t, n, e) => ({ tag: t, _1: n, _2: e }), p_ = () => ({ tag: "ExtendFromSource" }), No = (t, n) => ({ tag: t, _1: n }), bs = (t) => t, Jo = (t, n) => ({ tag: t, _1: n }), oi = /* @__PURE__ */ Jo("NotYet"), su = /* @__PURE__ */ Jo("Consumed"), $_ = /* @__PURE__ */ bs("FromSource"), uu = /* @__PURE__ */ bs("FromTarget"), m_ = /* @__PURE__ */ bs("FromBoth"), ii = /* @__PURE__ */ No("Hidden"), N_ = /* @__PURE__ */ No("Visible"), Ac = /* @__PURE__ */ p_(), si = /* @__PURE__ */ mo("Retracted"), J_ = /* @__PURE__ */ mo("Extended"), Ei = (t, n) => ({ tag: t, _1: n }), Oe = (t, n, e) => ({ tag: t, _1: n, _2: e }), Rc = (t) => t, Se = (t, n) => ({ tag: t, _1: n }), Xe = (t, n, e, r, o, i, s, u, c) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s, _7: u, _8: c }), Fc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, zo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, Ne = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, wr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, cu = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
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
    a();
  }
  return i;
}, ze = /* @__PURE__ */ (() => {
  const t = On.unfoldr((n) => {
    if (n.tag === "Nil")
      return y;
    if (n.tag === "Cons")
      return b("Just", L(n._1, n._2));
    a();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, qt("Cons", r._3, e(r._6, o)));
      a();
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
    a();
  }
  return i;
}, T_ = /* @__PURE__ */ jt(G)(Bt), y_ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
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
    a();
  }
  return i;
}, w_ = /* @__PURE__ */ Se("NoKeyframes"), L_ = (t) => Se("DuplicateEventId", t), k_ = (t) => Se("UnknownEvent", t), Bc = /* @__PURE__ */ Rc("PlopIn"), b_ = /* @__PURE__ */ Rc("PlopOut"), E_ = (t) => (n) => vt((e) => {
  if (e.target.tag === "NodeWindow" || e.target.tag === "EdgeWindow")
    return y;
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
  a();
}), x_ = (t) => (n) => (e) => (r) => (o) => {
  const i = ct(J((f) => (g) => f + ks(g).length | 0)(0)(e.labels)) * t.tokenReadSecPerChar, s = (f) => {
    const g = Fc(f)(n.nodes);
    if (g.tag === "Just")
      return { x: g._1.x + g._1.w / 2, y: g._1.y + g._1.h / 2 };
    if (g.tag === "Nothing")
      return { x: 0, y: 0 };
    a();
  }, u = zo(e.edge)(n.edges), c = (() => {
    if (u.tag === "Just") {
      const f = (() => {
        if (e.direction === "Forward")
          return u._1;
        if (e.direction === "Backward")
          return vn(u._1);
        a();
      })(), g = (() => {
        if (e.direction === "Forward")
          return u._1;
        if (e.direction === "Backward")
          return vn(u._1);
        a();
      })(), l = s(e.from), d = g.length - 1 | 0;
      return (2 * (() => {
        const _ = 0 < f.length ? f[0] : s(e.from), h = _.x - l.x, p = _.y - l.y;
        return (h < 0 ? -h : h) + (p < 0 ? -p : p);
      })() + $s(u._1) + 2 * (() => {
        const _ = d >= 0 && d < g.length ? g[d] : s(e.to), h = s(e.to), p = h.x - _.x, $ = h.y - _.y;
        return (p < 0 ? -p : p) + ($ < 0 ? -$ : $);
      })()) / t.tokenSpeed;
    }
    if (u.tag === "Nothing")
      return 0 / t.tokenSpeed;
    a();
  })();
  return t.tokenSpeed <= 0 ? t.minTokenDuration : Ne(t.minTokenDuration)(Ne(c)(i) / Ne(0.05)(1 - r - o));
}, C_ = (t) => {
  if (t.event.kind.tag === "SendToken")
    return b(
      "Just",
      {
        startT: t.startT,
        endT: t.endT,
        target: Xe(
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
    return b("Just", { startT: t.startT, endT: t.endT, target: Xe("FillWindow", t.event.id, t.event.kind._1.node, t.event.kind._1.labels) });
  a();
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
            a();
          })(),
          (() => {
            const i = wr(r.scene._1.to)(e);
            if (i.tag === "Nothing")
              return Q;
            if (i.tag === "Just")
              return i._1.nodes;
            a();
          })()
        );
      if (r.scene.tag === "DataFlow") {
        const i = wr(r.scene._1.keyframe)(e);
        if (i.tag === "Nothing")
          return Q;
        if (i.tag === "Just")
          return i._1.nodes;
      }
      a();
    })()
  ));
  return o.length === 0 ? y : b(
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
  a();
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
      a();
    }
    if (r.event.when.tag === "With") {
      const i = r.event.when._1, s = ln((u) => u.event.id === i)(e);
      if (s.tag === "Nothing")
        return 0;
      if (s.tag === "Just")
        return s._1.startT;
    }
    a();
  })();
  return gn(e)({
    startT: o,
    endT: (() => {
      if (r.event.kind.tag === "SendToken")
        return o + x_(t)(n)(r.event.kind._1)(r.holdPre)(r.holdPost);
      if (r.event.kind.tag === "FillNodeWithoutTransition")
        return o + t.plop;
      a();
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
        a();
      })()
    ) : Oe("AtKeyframe", t.initialKeyframe);
  }
  const e = ln((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return Oe("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return Oe("AtKeyframe", e._1.scene._1.keyframe);
    a();
  }
  if (e.tag === "Nothing")
    return Oe("AtKeyframe", t.initialKeyframe);
  a();
}, P_ = (t) => {
  if (t.when.tag === "First")
    return [];
  if (t.when.tag === "At")
    return [];
  if (t.when.tag === "After")
    return [t.when._1];
  if (t.when.tag === "With")
    return [t.when._1];
  a();
}, fu = { id: "", nodes: Q, edges: Q }, A_ = (t) => (n) => G0((() => {
  const e = wr(n.from)(t);
  if (e.tag === "Nothing")
    return fu;
  if (e.tag === "Just")
    return e._1;
  a();
})())((() => {
  const e = wr(n.to)(t);
  if (e.tag === "Nothing")
    return fu;
  if (e.tag === "Just")
    return e._1;
  a();
})()), ci = (t) => (n) => (e) => (r) => {
  const o = zo(r)(e.edges);
  if (o.tag === "Just")
    return t <= 0 ? n : Ne(n)($s(o._1) / t);
  if (o.tag === "Nothing")
    return n;
  a();
}, Qc = (t) => (n) => (e) => (r) => (o) => {
  const i = t.plop, s = A_(e)(o), u = O((_) => ({
    startT: 0,
    endT: 0 + ci(t.edgeSpeed)(t.minEdgeDuration)(n)(_),
    target: Xe("EdgeWindow", _, Ei("Extend", Ac))
  }))(ze(s.entering.edges)), c = O((_) => ({ startT: 0, endT: i, target: Xe("NodeWindow", _, Bc) }))(ze(s.entering.nodes)), f = J(Ne)(0)(O((_) => ci(t.edgeSpeed)(t.minEdgeDuration)(n)(_))(ze(s.leaving.edges))), g = (_) => de(
    (h) => {
      const p = zo(h)(r);
      if (p.tag === "Just")
        return p._1.source === _ || p._1.target === _;
      if (p.tag === "Nothing")
        return !1;
      a();
    },
    ze(s.leaving.edges)
  ) ? f : 0, l = O((_) => ({ startT: g(_), endT: g(_) + t.plop, target: Xe("NodeWindow", _, b_) }))(ze(s.leaving.nodes)), d = O((_) => ({
    startT: 0,
    endT: ci(t.edgeSpeed)(t.minEdgeDuration)(n)(_),
    target: Xe("EdgeWindow", _, Ei("Retract", G_(r)(s.leaving.nodes)(_)))
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
      (r) => y,
      (r) => (o) => b("Just", { head: r, tail: o }),
      Et(br, n)
    );
    if (e.tag === "Just")
      return e._1.head;
    if (e.tag === "Nothing")
      return "";
    a();
  })()
) : y)(lg(Mi)(Lt(G.compare)(t))), B_ = (t) => {
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
      a();
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
    a();
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
      ui(n._1.from)(t) ? y : b("Just", Se("UnknownKeyframe", n._1.from)),
      ui(n._1.to)(t) ? y : b("Just", Se("UnknownKeyframe", n._1.to))
    ]);
  if (n.tag === "DataFlow")
    return [
      ...vt((e) => e)([ui(n._1.keyframe)(t) ? y : b("Just", Se("UnknownKeyframe", n._1.keyframe))]),
      ...B_(n._1.events),
      ...Q_(n._1.events)
    ];
  a();
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
  a();
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
  a();
}, X_ = (t) => (n) => (e) => (r) => {
  const o = 0 < e.keyframes.length ? b("Just", e.keyframes[0]) : y;
  if (o.tag === "Nothing")
    return kt("Left", [w_]);
  if (o.tag === "Just") {
    const i = o._1, s = C0(O((f) => L(f.id, f))(e.keyframes)), u = j0(e), c = q_(s)(e.scenes);
    return (() => {
      if (c.tag === "Left") {
        const f = c._1;
        return (g) => kt("Left", f);
      }
      if (c.tag === "Right") {
        const f = c._1;
        return (g) => g(f);
      }
      a();
    })()(() => {
      const f = z_(n)(r)(s)(u)(e.scenes), g = f.length - 1 | 0, l = g >= 0 && g < f.length ? f[g].endT : 0, d = Lt((_) => (h) => pt.compare(_.startT)(h.startT))(bt(f)(Y_(n)(r)(s)(u)));
      return kt(
        "Right",
        {
          totalDuration: l,
          windows: d,
          spans: f,
          keyframes: s,
          initialKeyframe: i.id,
          timing: n,
          layout: r,
          cameraSpans: Z0(t)(r)(l)([
            ...S_(r)(u)(s)(f),
            ...E_(r)(u)(d)
          ]),
          cameraConfig: t
        }
      );
    });
  }
  a();
}, Ir = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, Wc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, vo = (t) => (n) => (e) => {
  const r = pt.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    a();
  })(), i = pt.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  a();
}, U_ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, M_ = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
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
    a();
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
    a();
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
  a();
}, fi = (t) => (n) => {
  const e = Wc(n)(t.keyframes);
  if (e.tag === "Nothing")
    return Q;
  if (e.tag === "Just")
    return e._1.edges;
  a();
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
  a();
}, qc = (t) => (n) => (e) => ln((r) => e(r) && n >= r.startT && n < r.endT)(t), cl = (t) => {
  const n = vo(0)(1)(t / 0.2), e = vo(0)(1)((1 - t) / 0.2);
  return n * n * (3 - 2 * n) * e * e * (3 - 2 * e);
}, al = (t) => (n) => {
  if (n.tag === "Travelling") {
    const e = U_(n._1.edge)(t.edges);
    if (e.tag === "Just") {
      const r = vc(e._1)(n._1.progress);
      return r.tag === "Just" ? b("Just", { dot: r._1, weight: cl(n._1.progress) }) : y;
    }
    if (e.tag === "Nothing")
      return y;
    a();
  }
  return y;
}, fl = (t) => (n) => {
  const e = Es(t)(n);
  if (e.tag === "AtKeyframe")
    return ai(t)(e._1);
  if (e.tag === "InTransition")
    return bn(G.compare, Ln, ai(t)(e._1), ai(t)(e._2));
  a();
}, gl = (t) => (n) => {
  const e = Es(t)(n);
  if (e.tag === "AtKeyframe")
    return fi(t)(e._1);
  if (e.tag === "InTransition")
    return bn(G.compare, Ln, fi(t)(e._1), fi(t)(e._2));
  a();
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
    a();
  }
  if (o.tag === "Nothing")
    return sl(t.windows)(n)(r) || rl(t.windows)(n)(r) ? si : K_(r)(e) ? J_ : si;
  a();
}, dl = (t) => (n) => {
  const e = gl(t)(n);
  return j_(O((r) => L(r, ll(t)(n)(e)(r)))((() => {
    const r = (o) => {
      if (o.tag === "Leaf")
        return Q;
      if (o.tag === "Node")
        return Dt("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
      a();
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
    a();
  }
  if (o.tag === "Nothing")
    return il(t.windows)(n)(r) || ol(t.windows)(n)(r) ? ii : Z_(r)(e) ? N_ : ii;
  a();
}, pl = (t) => (n) => {
  const e = fl(t)(n);
  return tl(O((r) => L(r, hl(t)(n)(e)(r)))((() => {
    const r = (o) => {
      if (o.tag === "Leaf")
        return Q;
      if (o.tag === "Node")
        return Dt("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
      a();
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
      a();
    };
    return Et(Ut.foldr, r(n.tokens, zt));
  })());
  return 0 < e.length ? b("Just", e[0]) : y;
}, Jl = (t) => (n) => {
  const e = Nl(t)(n);
  if (e.tag === "Nothing")
    return n.camera;
  if (e.tag === "Just")
    return el(t)(n.camera)(e._1.dot)(e._1.weight);
  a();
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
    a();
  })(),
  buf: [],
  runs: zc(t.style)(t.buf)(t.runs)
}), wl = (t) => (n) => 0 < n.length ? { ...t, buf: gn(t.buf)(n[0]) } : { ...t, buf: gn(t.buf)("\\") }, Ll = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, c = Wt((f) => y, (f) => (g) => b("Just", { head: f, tail: g }), r);
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
    a();
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
}, El = Yr.traverse(Xi), xl = /* @__PURE__ */ J(sr)(0), Pr = /* @__PURE__ */ (() => {
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
      a();
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
  a();
}, Pl = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, Al = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, Rl = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, _u = (t) => We(vn(Ce((n) => n === " ")(vn(Ce((n) => n === " ")(ms(t)).rest)).rest)), Fl = (t) => J((n) => (e) => e._1 > 0 && (e._2 === " " || e._2 === "-" || e._2 === "_" || e._2 === ".") ? b("Just", e._1) : n)(y)(Pt(fr)(t)), Ci = (t) => (n) => {
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
  a();
}, Bl = { cellW: 7, cellH: 3, maxLineWidth: 20 }, Ql = (t) => (n) => {
  const e = O((i) => L(
    (() => {
      if (i.label.tag === "Just")
        return i.label._1;
      if (i.label.tag === "Nothing")
        return i.id;
      a();
    })(),
    i
  ))(n.nodes), r = $r(1)(Me(
    (Pl(t.maxLineWidth)(J((i) => (s) => $r(i)(Pe(s._1)))(0)(e)) + 2 | 0) + t.cellW | 0,
    t.cellW
  )), o = (r * t.cellW | 0) - 1 | 0;
  return {
    ...n,
    nodes: O((i) => {
      if (!(i._2.size._1 === 1 && i._2.size._2 === 1))
        return i._2;
      const s = bt(Ls(`
`)(i._1))(Ci(o)), u = J((c) => (f) => $r(c)(Pe(f)))(0)(s);
      return {
        ...i._2,
        size: L(
          ct(u > o ? Me((u + 2 | 0) + t.cellW | 0, t.cellW) : r),
          ct($r(1)(Me(s.length + t.cellH | 0, t.cellH)))
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
    a();
  })(e.nodes)
}), Wl = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, ql = (t) => {
  const n = t.length;
  return ((r) => (o) => {
    let i = r, s = o, u = !0, c;
    for (; u; ) {
      const f = i, g = s;
      if (f >= n) {
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
          if (f >= 0 && f < t.length) {
            if (N >= 0 && N < t.length) {
              h = N + 1 | 0, p = (() => {
                const T = t[f].position, w = t[f].size, k = t[N].position, E = t[N].size;
                return T._1 < k._1 + E._1 && k._1 < T._1 + w._1 && T._2 < k._2 + E._2 && k._2 < T._2 + w._2;
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
      i = f + 1 | 0, s = l(f + 1 | 0)(g);
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
}), xs = (t) => t, Xt = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
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
    a();
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
    a();
  }
  return i;
}, Xl = { x: 0, y: 0 }, Hn = (t) => (n) => (e) => {
  const r = Xt(t)(e.cNodes);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cNodes: Y(rt)(t)(n(r._1))(e.cNodes) };
  a();
}, Lr = (t) => (n) => (e) => {
  const r = Xt(t)(e.cGroups);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cGroups: Y(rt)(t)(n(r._1))(e.cGroups) };
  a();
}, Ul = (t) => J((n) => (e) => Hn(e)((r) => ({ ...r, hitboxPreCompaction: r.hitbox }))(n))(t)(t.cNodeOrder), Ml = (t) => {
  const n = J((e) => (r) => {
    const o = Xt(r)(t.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return J((i) => (s) => yt(rt)(fn)(s)([r])(i))(e)(o._1.constraints);
    a();
  })(Q)(t.cNodeOrder);
  return J((e) => (r) => Hn(r)((o) => ({
    ...o,
    constraints: (() => {
      const i = Xt(r)(n);
      if (i.tag === "Nothing")
        return [];
      if (i.tag === "Just")
        return i._1;
      a();
    })()
  }))(e))(t)(t.cNodeOrder);
}, Kl = (t) => (n) => Hn(t)((e) => ({ ...e, ignoreSpacing: { left: e.ignoreSpacing.left || n.left, right: e.ignoreSpacing.right || n.right, up: e.ignoreSpacing.up || n.up, down: e.ignoreSpacing.down || n.down } })), jl = (t) => {
  const n = J((e) => (r) => Lr(r)((o) => ({ ...o, outDegree: o.outDegreeReal }))(e))(t)(t.cGroupOrder);
  return J((e) => (r) => Hn(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder);
}, Fn = { left: !1, right: !1, up: !1, down: !1 }, Zl = { horizontalSpacing: (t) => (n) => 0, verticalSpacing: (t) => (n) => 0 }, Ss = (t) => J((n) => (e) => {
  const r = Xt(e)(n.cGroups);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just") {
    const o = J((s) => (u) => {
      const c = Xt(u)(n.cNodes);
      if (c.tag === "Nothing")
        return s;
      if (c.tag === "Just") {
        if (s.tag === "Nothing")
          return b("Just", u);
        if (s.tag === "Just") {
          const f = Xt(s._1)(n.cNodes);
          if (f.tag === "Nothing")
            return b("Just", u);
          if (f.tag === "Just")
            return c._1.hitbox.x < f._1.hitbox.x ? b("Just", u) : b("Just", s._1);
        }
      }
      a();
    })(y)(r._1.cNodes), i = Lr(e)((s) => ({ ...s, reference: o }))(n);
    if (o.tag === "Nothing")
      return i;
    if (o.tag === "Just") {
      const s = Xt(o._1)(i.cNodes);
      if (s.tag === "Nothing")
        return i;
      if (s.tag === "Just") {
        const u = s._1;
        return J((c) => (f) => Hn(f)((g) => ({ ...g, cGroupOffset: { x: g.hitbox.x - u.hitbox.x, y: g.hitbox.y - u.hitbox.y } }))(c))(i)(r._1.cNodes);
      }
    }
  }
  a();
})(t)(t.cGroupOrder), En = (t) => Ss({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return Q;
      if (e.tag === "Node")
        return Dt("Node", e._1, e._2, e._3, { ...e._4, hitbox: { ...e._4.hitbox, x: -e._4.hitbox.x - e._4.hitbox.width } }, n(e._5), n(e._6));
      a();
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
      a();
    };
    return n(t.cNodes);
  })()
}), Xc = (t) => {
  const n = J((e) => (r) => Lr(r)((o) => ({ ...o, outDegree: 0, outDegreeReal: 0, incomingConstraints: [] }))(e))(t)(t.cGroupOrder);
  return J((e) => (r) => {
    const o = Xt(r)(e.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just") {
      if (o._1.cGroup.tag === "Nothing")
        return e;
      if (o._1.cGroup.tag === "Just") {
        const i = o._1.cGroup._1;
        return J((s) => (u) => {
          const c = Xt(u)(s.cNodes);
          if (c.tag === "Nothing")
            return s;
          if (c.tag === "Just")
            return c._1.cGroup.tag === "Just" && c._1.cGroup._1 !== i ? Lr(c._1.cGroup._1)((f) => ({ ...f, outDegree: f.outDegree + 1 | 0, outDegreeReal: f.outDegreeReal + 1 | 0 }))(Lr(i)((f) => In(Er)(u)(f.incomingConstraints) ? f : { ...f, incomingConstraints: [...f.incomingConstraints, u] })(s)) : s;
          a();
        })(e)(o._1.constraints);
      }
    }
    a();
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
          a();
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
      a();
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
  a();
}, Uc = (t) => (n) => n.finished || !Yl(t)(n.cGraph.supportedDirections) || (t === "LEFT" ? n.direction === "LEFT" : t === "RIGHT" ? n.direction === "RIGHT" : t === "UP" ? n.direction === "UP" : t === "DOWN" ? n.direction === "DOWN" : t === "UNDEFINED" && n.direction === "UNDEFINED") ? n : n1(n.direction)(t)(n), e1 = (t) => {
  if (t.finished)
    return t;
  const n = t.direction === "UNDEFINED" ? Uc(Cs)(t) : t, e = { ...n, cGraph: jl(n.cGraph) };
  if (e.compactionAlgorithm.tag === "Nothing")
    return e;
  if (e.compactionAlgorithm.tag === "Just")
    return e.compactionAlgorithm._1(e);
  a();
}, Mc = (t) => (n) => (e) => {
  const r = Xt(t)(e.cNodes), o = Xt(n)(e.cGroups);
  return r.tag === "Just" && o.tag === "Just" ? (() => {
    if (r._1.cGroup.tag === "Nothing")
      return !1;
    if (r._1.cGroup.tag === "Just")
      return !0;
    a();
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
        a();
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
      cGroup: y,
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
        reference: y,
        delta: 0,
        deltaNormalized: 0
      })(n.cGroups),
      cGroupOrder: [...n.cGroupOrder, e],
      nextCGroupId: e + 1 | 0
    })(t.nodes)
  };
}, r1 = (t) => J((n) => (e) => {
  const r = Xt(e)(n.cNodes);
  return r.tag === "Just" && r._1.cGroup.tag === "Nothing" ? Gs({ master: y, nodes: [e] })(n).graph : n;
})(t)(t.cNodeOrder), o1 = (t) => ({
  cGraph: Ul(r1(Ss(t))),
  direction: Yc,
  compactionAlgorithm: y,
  constraintAlgorithm: y,
  spacingsHandler: Zl,
  lockFun: y,
  finished: !1
}), yo = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, du = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, Is = (t) => (n) => (e) => (r) => (o) => ({
  id: t,
  representedEdges: [o],
  affectedBends: [n, e],
  hitbox: { x: yo(n._1)(e._1), y: yo(n._2)(e._2), width: or(n._1 - e._1), height: or(n._2 - e._2) },
  ignoreSpacing: Fn,
  potentialGroupParents: (() => {
    if (r.tag === "Nothing")
      return [];
    if (r.tag === "Just")
      return [r._1];
    a();
  })(),
  aPort: y
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
      a();
    })()
  };
}, s1 = (t) => (n) => or(t.hitbox.x - n.hitbox.x) <= 1e-4 && n.hitbox.y - (t.hitbox.y + t.hitbox.height) <= 1e-4 && t.hitbox.y - (n.hitbox.y + n.hitbox.height) <= 1e-4, u1 = (t) => (n) => or(t.hitbox.x - n.hitbox.x) <= 1e-4 ? pt.compare(t.hitbox.y)(n.hitbox.y) : t.hitbox.x < n.hitbox.x ? dn : hn, jc = (t, n) => ({ tag: t, _1: n }), Ps = /* @__PURE__ */ jt(G)(Bt), Vo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
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
      a();
    },
    Eq0: () => t
  };
  return J((e) => (r) => Y(n)(r)()(e))(Q);
})(), ge = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, c1 = /* @__PURE__ */ J((t) => (n) => Y(Vl)(n)()(t))(Q), gi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, a1 = (t) => (n) => {
  const e = Ps(O((i) => L(i.id, i))(t)), r = vt((i) => Vo(i)(e))(n), o = rt.compare((() => {
    const i = hu(O((s) => L(s.from.node, s.from.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    a();
  })())((() => {
    const i = hu(O((s) => L(s.to.node, s.to.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    a();
  })());
  if (o === "LT")
    return { ...Fn, left: !0, right: !1 };
  if (o === "GT")
    return { ...Fn, left: !1, right: !0 };
  if (o === "EQ")
    return Fn;
  a();
}, f1 = (t) => vt((n) => {
  if (n.direction === "V")
    return b("Just", { start: n.start, end: n.end });
  if (n.direction === "H")
    return y;
  a();
})(t.segments), pu = (t) => (n) => (e) => {
  if (e.tag === "Just") {
    const r = ge(n)(t);
    if (r.tag === "Just") {
      const o = ln((i) => i.id === e._1)(r._1);
      if (o.tag === "Just")
        return o._1.side;
      if (o.tag === "Nothing")
        return Kn;
      a();
    }
    if (r.tag === "Nothing")
      return Kn;
    a();
  }
  if (e.tag === "Nothing")
    return Kn;
  a();
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
        const i = Xt(e.potentialGroupParents[0])(o.cNodes);
        if (i.tag === "Just") {
          if (i._1.cGroup.tag === "Just")
            return Mc(r.id)(i._1.cGroup._1)(o);
          if (i._1.cGroup.tag === "Nothing")
            return o;
          a();
        }
        if (i.tag === "Nothing")
          return o;
        a();
      }
      return Gs({ master: b("Just", r.id), nodes: [r.id] })(o).graph;
    })(),
    edgeToCs: J((i) => (s) => yt(G)(fn)(s)([r.id])(i))(n.edgeToCs)(e.representedEdges),
    lockMap: Y(rt)(r.id)(a1(t)(e.representedEdges))(n.lockMap)
  };
}, _1 = (t) => (n) => (e) => {
  const r = Wt(
    (o) => y,
    (o) => (i) => b("Just", { head: o, tail: i }),
    Lt(u1)(n)
  );
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just") {
    const o = J((i) => (s) => s1(i.survivor)(s) ? { ...i, survivor: i1(i.survivor)(s) } : { survivor: s, merged: [...i.merged, i.survivor] })({ survivor: r._1.head, merged: [] })(r._1.tail);
    return J(g1(t))(e)([...o.merged, o.survivor]);
  }
  a();
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
  const i = Kc({ origin: b("Just", jc("NodeOrigin", o.node)), kind: y, hitbox: d1(o) })(r.cGraph), s = ge(o.node)(t), u = (() => {
    if (s.tag === "Nothing")
      return L(0, 0);
    if (s.tag === "Just")
      return s._1;
    a();
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
))(n)))(Q)(t), $1 = (t) => J((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? Y(G)(e.origin._1._1)(e.hitbox.x)(n) : n)(Q)(vt((n) => Xt(n)(t.cNodes))(t.cNodeOrder)), m1 = (t) => J((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? Y(G)(e.origin._1._1)(e.hitbox.x - e.hitboxPreCompaction.x)(n) : n)(Q)(vt((n) => Xt(n)(t.cNodes))(t.cNodeOrder)), N1 = (t) => J((n) => (e) => {
  if (e.origin.tag === "Just" && e.origin._1.tag === "SegmentOrigin") {
    const r = e.hitbox.x - e.hitboxPreCompaction.x;
    return J((o) => (i) => Y(wc)(i)(r)(o))(n)(e.origin._1._1.affectedBends);
  }
  return n;
})(Q)(vt((n) => Xt(n)(t.cNodes))(t.cNodeOrder)), Zc = (t) => {
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
      return y;
    a();
  })(t.paths);
}, J1 = (t) => (n) => {
  const e = bt(n)((r) => {
    if (r.src === r.tgt)
      return [];
    if ((r.srcSide === "North" || r.srcSide === "South") && (r.tgtSide === "North" || r.tgtSide === "South"))
      return [];
    const o = ge(r.tgt)(t.nodeToC), i = (() => {
      if (o.tag === "Just")
        return Xt(o._1)(t.cGraph.cNodes);
      if (o.tag === "Nothing")
        return y;
      a();
    })(), s = ge(r.src)(t.nodeToC), u = (() => {
      if (s.tag === "Just")
        return Xt(s._1)(t.cGraph.cNodes);
      if (s.tag === "Nothing")
        return y;
      a();
    })(), c = (() => {
      if (u.tag === "Just") {
        if (i.tag === "Just") {
          if (u._1.cGroup.tag === "Just") {
            if (i._1.cGroup.tag === "Just")
              return b("Just", { srcGroup: u._1.cGroup._1, tgtGroup: i._1.cGroup._1, delta: 0, weight: 100 });
            if (i._1.cGroup.tag === "Nothing")
              return y;
            a();
          }
          if (u._1.cGroup.tag === "Nothing")
            return y;
          a();
        }
        if (i.tag === "Nothing")
          return y;
        a();
      }
      if (u.tag === "Nothing")
        return y;
      a();
    })(), f = (_) => (h) => (p) => {
      if (u.tag === "Just") {
        if (u._1.cGroup.tag === "Just") {
          if (p.cGroup.tag === "Just")
            return _(p.hitbox.x) && p.cGroup._1 !== u._1.cGroup._1 ? b("Just", h(p.cGroup._1)(u._1.cGroup._1)) : y;
          if (p.cGroup.tag === "Nothing")
            return y;
          a();
        }
        if (u._1.cGroup.tag === "Nothing")
          return y;
        a();
      }
      if (u.tag === "Nothing")
        return y;
      a();
    }, g = vt((_) => Xt(_)(t.cGraph.cNodes))((() => {
      const _ = Vo(r.edgeId)(t.edgeToCs);
      if (_.tag === "Nothing")
        return [];
      if (_.tag === "Just")
        return _._1;
      a();
    })()), l = (() => {
      if (u.tag === "Just" && r.srcSide === "West") {
        const _ = u._1;
        return vt(f((h) => h < _.hitbox.x)((h) => (p) => ({ srcGroup: h, tgtGroup: p, delta: 1, weight: 100 })))(g);
      }
      return [];
    })(), d = (() => {
      if (u.tag === "Just" && r.tgtSide === "East") {
        const _ = u._1;
        return vt(f((h) => h > _.hitbox.x)((h) => (p) => ({ srcGroup: p, tgtGroup: h, delta: 1, weight: 100 })))(g);
      }
      return [];
    })();
    if (c.tag === "Nothing")
      return [];
    if (c.tag === "Just")
      return [c._1, ...l, ...d];
    a();
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
      a();
    })(n.nodes),
    edges: O((u) => {
      const c = Vo(u.edge)(i), f = (() => {
        if (c.tag === "Nothing")
          return u.segments;
        if (c.tag === "Just") {
          const g = ge(c._1._1)(o), l = (() => {
            if (g.tag === "Nothing")
              return 0;
            if (g.tag === "Just")
              return g._1;
            a();
          })(), d = ge(c._1._2)(o), _ = (() => {
            if (d.tag === "Nothing")
              return 0;
            if (d.tag === "Just")
              return d._1;
            a();
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
                  const T = gi(N.start)(s);
                  if (T.tag === "Nothing")
                    return 0;
                  if (T.tag === "Just")
                    return T._1;
                  a();
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
                      a();
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
                      a();
                    })(),
                    N.end._2
                  )
                };
              a();
            };
          })())(u.segments);
        }
        a();
      })();
      return { ...u, segments: f, bends: $n((g) => (l) => g.end, f, Gt(1, f.length, f)) };
    })(n.paths)
  };
}, T1 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Is(o.nextId)(i._2.start)(i._2.end)(y)(t.edgeId), u = (() => {
    if (i._1 === 0) {
      if (n.tag === "Nothing")
        return s;
      if (n.tag === "Just")
        return {
          ...s,
          ignoreSpacing: i._2.end._2 < n._1.y ? { ...s.ignoreSpacing, down: !0 } : i._2.end._2 > n._1.y + n._1.height ? { ...s.ignoreSpacing, up: !0 } : { ...s.ignoreSpacing, up: !0, down: !0 }
        };
      a();
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
          a();
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
      const g = Xt(r._1)(t.cGraph.cNodes);
      return g.tag === "Just" ? b("Just", g._1.hitbox) : y;
    }
    if (r.tag === "Nothing")
      return y;
    a();
  })(), s = (() => {
    if (o.tag === "Just") {
      const g = Xt(o._1)(t.cGraph.cNodes);
      return g.tag === "Just" ? b("Just", g._1.hitbox) : y;
    }
    if (o.tag === "Nothing")
      return y;
    a();
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
  const f = u.length - 1 | 0;
  if (f >= 0 && f < u.length && o.tag === "Just" && s.tag === "Just") {
    if (e.tgtSide === "North")
      return eo(e)(o._1)(s._1)(u[f])({ side: un, down: !0 })(c);
    if (e.tgtSide === "South")
      return eo(e)(o._1)(s._1)(u[f])({ side: cn, down: !1 })(c);
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
    a();
  }
  return i;
}, Si = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, Gi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, k1 = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, b1 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => {
    const o = (u) => {
      let c = u, f = !0, g;
      for (; f; ) {
        const l = c, d = Wt((_) => y, (_) => (h) => b("Just", { head: _, tail: h }), l.queue);
        if (d.tag === "Nothing") {
          f = !1, g = l;
          continue;
        }
        if (d.tag === "Just") {
          const _ = d._1.head;
          if ((($) => {
            let m = $, N = !0, v;
            for (; N; ) {
              const T = m;
              if (T.tag === "Leaf") {
                N = !1, v = !1;
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
                  N = !1, v = !0;
                  continue;
                }
              }
              a();
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
                  let T = v, w = !0, k;
                  for (; w; ) {
                    const E = T;
                    if (E.tag === "Leaf") {
                      w = !1, k = y;
                      continue;
                    }
                    if (E.tag === "Node") {
                      const I = t.compare(p)(E._3);
                      if (I === "LT") {
                        T = E._5;
                        continue;
                      }
                      if (I === "GT") {
                        T = E._6;
                        continue;
                      }
                      if (I === "EQ") {
                        w = !1, k = b("Just", E._4);
                        continue;
                      }
                    }
                    a();
                  }
                  return k;
                })(l.degree);
                if (N.tag === "Nothing")
                  return -1;
                if (N.tag === "Just")
                  return N._1 - 1 | 0;
                a();
              })())(l.degree),
              removedNodes: Y(t)(_)()(l.removedNodes),
              removedEdges: Y(rt)(h._1.eid)()(l.removedEdges),
              record: [...l.record, { node: _, neighbour: p, viaSrc: n.eq(h._1.src)(_) }],
              queue: d._1.tail
            };
            if ((() => {
              const N = ((T) => {
                let w = T, k = !0, E;
                for (; k; ) {
                  const I = w;
                  if (I.tag === "Leaf") {
                    k = !1, E = y;
                    continue;
                  }
                  if (I.tag === "Node") {
                    const W = t.compare(p)(I._3);
                    if (W === "LT") {
                      w = I._5;
                      continue;
                    }
                    if (W === "GT") {
                      w = I._6;
                      continue;
                    }
                    if (W === "EQ") {
                      k = !1, E = b("Just", I._4);
                      continue;
                    }
                  }
                  a();
                }
                return E;
              })($.degree), v = (T) => {
                let w = T, k = !0, E;
                for (; k; ) {
                  const I = w;
                  if (I.tag === "Leaf") {
                    k = !1, E = !1;
                    continue;
                  }
                  if (I.tag === "Node") {
                    const W = t.compare(p)(I._3);
                    if (W === "LT") {
                      w = I._5;
                      continue;
                    }
                    if (W === "GT") {
                      w = I._6;
                      continue;
                    }
                    if (W === "EQ") {
                      k = !1, E = !0;
                      continue;
                    }
                  }
                  a();
                }
                return E;
              };
              return (() => {
                if (N.tag === "Nothing")
                  return !1;
                if (N.tag === "Just")
                  return N._1 === 1;
                a();
              })() && !v($.removedNodes);
            })()) {
              c = { ...$, queue: [...$.queue, p] };
              continue;
            }
            c = $;
            continue;
          }
        }
        a();
      }
      return g;
    }, i = J((u) => (c) => yt(t)(Zt)(c.src)(1)(yt(t)(Zt)(c.tgt)(1)(u)))(Q)(r), s = o({
      degree: i,
      removedNodes: Q,
      removedEdges: Q,
      record: [],
      queue: gt(
        (u) => {
          const f = ((g) => {
            let l = g, d = !0, _;
            for (; d; ) {
              const h = l;
              if (h.tag === "Leaf") {
                d = !1, _ = y;
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
              a();
            }
            return _;
          })(i);
          if (f.tag === "Nothing")
            return !1;
          if (f.tag === "Just")
            return f._1 === 1;
          a();
        },
        e
      )
    });
    return {
      coreNodes: gt(
        (u) => !((f) => {
          let g = f, l = !0, d;
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
            a();
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
    const u = ((f) => {
      let g = f, l = !0, d;
      for (; l; ) {
        const _ = g;
        if (_.tag === "Leaf") {
          l = !1, d = y;
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
        a();
      }
      return d;
    })(r);
    if (u.tag === "Nothing")
      return 0;
    if (u.tag === "Just")
      return u._1;
    a();
  })();
  return Y(t)(o.node)(o.viaSrc ? s - 1 | 0 : s + 1 | 0)(r);
})(e)(vn(n)), Ii = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = { ...o, treeNode: Y(t)(r)()(o.treeNode) };
    return J((s) => (u) => {
      if (_e(u.eid)(s.st.edgeVisited))
        return s;
      const c = { ...s.st, edgeVisited: Y(rt)(u.eid)()(s.st.edgeVisited) }, f = n.eq(u.src)((() => {
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
            a();
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
            a();
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
            a();
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
            a();
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
              const m = t.compare(f)($._3);
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
            a();
          }
          return p;
        })(c.treeNode))
          return { ...s, st: c };
        const g = Ii(t)(e)(f)(c);
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
              const m = t.compare(f)($._3);
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
            a();
          }
          return p;
        }, l = u.tgt;
        return !g(c.treeNode) && (() => {
          const _ = ((m) => {
            let N = m, v = !0, T;
            for (; v; ) {
              const w = N;
              if (w.tag === "Leaf") {
                v = !1, T = y;
                continue;
              }
              if (w.tag === "Node") {
                const k = t.compare(l)(w._3);
                if (k === "LT") {
                  N = w._5;
                  continue;
                }
                if (k === "GT") {
                  N = w._6;
                  continue;
                }
                if (k === "EQ") {
                  v = !1, T = b("Just", w._4);
                  continue;
                }
              }
              a();
            }
            return T;
          })(c.layer), h = u.src, $ = ((m) => {
            let N = m, v = !0, T;
            for (; v; ) {
              const w = N;
              if (w.tag === "Leaf") {
                v = !1, T = y;
                continue;
              }
              if (w.tag === "Node") {
                const k = t.compare(h)(w._3);
                if (k === "LT") {
                  N = w._5;
                  continue;
                }
                if (k === "GT") {
                  N = w._6;
                  continue;
                }
                if (k === "EQ") {
                  v = !1, T = b("Just", w._4);
                  continue;
                }
              }
              a();
            }
            return T;
          })(c.layer);
          if (_.tag === "Nothing") {
            if ($.tag === "Nothing")
              return u.delta === 0;
            if ($.tag === "Just")
              return u.delta === -$._1;
            a();
          }
          if (_.tag === "Just") {
            if ($.tag === "Nothing")
              return u.delta === (_._1 - 0 | 0);
            if ($.tag === "Just")
              return u.delta === (_._1 - $._1 | 0);
          }
          a();
        })();
      })()) {
        const g = Ii(t)(e)(f)({ ...c, treeEdge: Y(rt)(u.eid)()(c.treeEdge) });
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
        m = !1, N = y;
        continue;
      }
      if (v.tag === "Node") {
        const T = t.compare(o)(v._3);
        if (T === "LT") {
          $ = v._5;
          continue;
        }
        if (T === "GT") {
          $ = v._6;
          continue;
        }
        if (T === "EQ") {
          m = !1, N = b("Just", v._4);
          continue;
        }
      }
      a();
    }
    return N;
  })(n.poID), u = (() => {
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1;
    a();
  })(), c = r.tgt, g = ((p) => {
    let $ = p, m = !0, N;
    for (; m; ) {
      const v = $;
      if (v.tag === "Leaf") {
        m = !1, N = y;
        continue;
      }
      if (v.tag === "Node") {
        const T = t.compare(c)(v._3);
        if (T === "LT") {
          $ = v._5;
          continue;
        }
        if (T === "GT") {
          $ = v._6;
          continue;
        }
        if (T === "EQ") {
          m = !1, N = b("Just", v._4);
          continue;
        }
      }
      a();
    }
    return N;
  })(n.poID), l = (() => {
    if (g.tag === "Nothing")
      return 0;
    if (g.tag === "Just")
      return g._1;
    a();
  })(), _ = ((p) => {
    let $ = p, m = !0, N;
    for (; m; ) {
      const v = $;
      if (v.tag === "Leaf") {
        m = !1, N = y;
        continue;
      }
      if (v.tag === "Node") {
        const T = t.compare(e)(v._3);
        if (T === "LT") {
          $ = v._5;
          continue;
        }
        if (T === "GT") {
          $ = v._6;
          continue;
        }
        if (T === "EQ") {
          m = !1, N = b("Just", v._4);
          continue;
        }
      }
      a();
    }
    return N;
  })(n.poID), h = (() => {
    if (_.tag === "Nothing")
      return 0;
    if (_.tag === "Just")
      return _._1;
    a();
  })();
  return (() => {
    const p = r.src, m = ((N) => {
      let v = N, T = !0, w;
      for (; T; ) {
        const k = v;
        if (k.tag === "Leaf") {
          T = !1, w = y;
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
            T = !1, w = b("Just", k._4);
            continue;
          }
        }
        a();
      }
      return w;
    })(n.lowestPoID);
    return (() => {
      if (m.tag === "Nothing")
        return 0 <= h;
      if (m.tag === "Just")
        return m._1 <= h;
      a();
    })() && (() => {
      const N = r.tgt;
      return h <= u && (() => {
        const T = ((w) => {
          let k = w, E = !0, I;
          for (; E; ) {
            const W = k;
            if (W.tag === "Leaf") {
              E = !1, I = y;
              continue;
            }
            if (W.tag === "Node") {
              const z = t.compare(N)(W._3);
              if (z === "LT") {
                k = W._5;
                continue;
              }
              if (z === "GT") {
                k = W._6;
                continue;
              }
              if (z === "EQ") {
                E = !1, I = b("Just", W._4);
                continue;
              }
            }
            a();
          }
          return I;
        })(n.lowestPoID);
        return (() => {
          if (T.tag === "Nothing")
            return 0 <= h;
          if (T.tag === "Just")
            return T._1 <= h;
          a();
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
        const T = m;
        if (T.tag === "Leaf") {
          N = !1, v = !1;
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
            N = !1, v = !0;
            continue;
          }
        }
        a();
      }
      return v;
    }, h = o.tgt, p = ($) => {
      let m = $, N = !0, v;
      for (; N; ) {
        const T = m;
        if (T.tag === "Leaf") {
          N = !1, v = !1;
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
            N = !1, v = !0;
            continue;
          }
        }
        a();
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
        h = !1, p = y;
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
      a();
    }
    return p;
  })(e.layer), c = o.src, g = ((d) => {
    let _ = d, h = !0, p;
    for (; h; ) {
      const $ = _;
      if ($.tag === "Leaf") {
        h = !1, p = y;
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
      a();
    }
    return p;
  })(e.layer), l = (() => {
    if (u.tag === "Nothing") {
      if (g.tag === "Nothing")
        return -o.delta;
      if (g.tag === "Just")
        return -g._1 - o.delta | 0;
      a();
    }
    if (u.tag === "Just") {
      if (g.tag === "Nothing")
        return (u._1 - 0 | 0) - o.delta | 0;
      if (g.tag === "Just")
        return (u._1 - g._1 | 0) - o.delta | 0;
    }
    a();
  })();
  return l < r.slack ? { edge: b("Just", o), slack: l } : r;
})({ edge: y, slack: 1e9 })(n).edge, S1 = (t) => {
  const n = jt(t)(Bt);
  return (e) => (r) => {
    const o = J((i) => (s) => Si(i)((() => {
      const c = ((f) => {
        let g = f, l = !0, d;
        for (; l; ) {
          const _ = g;
          if (_.tag === "Leaf") {
            l = !1, d = y;
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
          a();
        }
        return d;
      })(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      a();
    })()))(1e9)(e);
    return n(O((i) => L(
      i,
      (() => {
        const u = ((c) => {
          let f = c, g = !0, l;
          for (; g; ) {
            const d = f;
            if (d.tag === "Leaf") {
              g = !1, l = y;
              continue;
            }
            if (d.tag === "Node") {
              const _ = t.compare(i)(d._3);
              if (_ === "LT") {
                f = d._5;
                continue;
              }
              if (_ === "GT") {
                f = d._6;
                continue;
              }
              if (_ === "EQ") {
                g = !1, l = b("Just", d._4);
                continue;
              }
            }
            a();
          }
          return l;
        })(r);
        if (u.tag === "Nothing")
          return -o;
        if (u.tag === "Just")
          return u._1 - o | 0;
        a();
      })()
    ))(e));
  };
}, ta = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = J((u) => (c) => {
      const f = ta(t)(e)(n.eq(c.src)(r) ? c.tgt : c.src)({ ...u.st, edgeVisited: Y(rt)(c.eid)()(u.st.edgeVisited) });
      return { lowest: Si(u.lowest)(f.lowest), st: f.st };
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
    a();
  })();
})(t), ea = (t) => {
  const n = Ii(t);
  return (e) => (r) => (o) => {
    const i = 0 < e.length ? b("Just", e[0]) : y;
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
            const T = m;
            if (T.tag === "Leaf") {
              N = !1, v = y;
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
                N = !1, v = b("Just", T._4);
                continue;
              }
            }
            a();
          }
          return v;
        })(s.st.layer), l = u._1.src, _ = (($) => {
          let m = $, N = !0, v;
          for (; N; ) {
            const T = m;
            if (T.tag === "Leaf") {
              N = !1, v = y;
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
                N = !1, v = b("Just", T._4);
                continue;
              }
            }
            a();
          }
          return v;
        })(s.st.layer), h = (() => {
          if (g.tag === "Nothing") {
            if (_.tag === "Nothing")
              return -u._1.delta;
            if (_.tag === "Just")
              return -_._1 - u._1.delta | 0;
            a();
          }
          if (g.tag === "Just") {
            if (_.tag === "Nothing")
              return (g._1 - 0 | 0) - u._1.delta | 0;
            if (_.tag === "Just")
              return (g._1 - _._1 | 0) - u._1.delta | 0;
          }
          a();
        })(), p = (() => {
          const $ = u._1.tgt;
          return ((N) => {
            let v = N, T = !0, w;
            for (; T; ) {
              const k = v;
              if (k.tag === "Leaf") {
                T = !1, w = !1;
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
                  T = !1, w = !0;
                  continue;
                }
              }
              a();
            }
            return w;
          })(s.st.treeNode);
        })() ? -h : h;
        return ea(t)(e)(r)({
          ...s.st,
          layer: J(($) => (m) => ((v) => {
            let T = v, w = !0, k;
            for (; w; ) {
              const E = T;
              if (E.tag === "Leaf") {
                w = !1, k = !1;
                continue;
              }
              if (E.tag === "Node") {
                const I = t.compare(m)(E._3);
                if (I === "LT") {
                  T = E._5;
                  continue;
                }
                if (I === "GT") {
                  T = E._6;
                  continue;
                }
                if (I === "EQ") {
                  w = !1, k = !0;
                  continue;
                }
              }
              a();
            }
            return k;
          })(s.st.treeNode) ? Y(t)(m)((() => {
            const v = ((T) => {
              let w = T, k = !0, E;
              for (; k; ) {
                const I = w;
                if (I.tag === "Leaf") {
                  k = !1, E = y;
                  continue;
                }
                if (I.tag === "Node") {
                  const W = t.compare(m)(I._3);
                  if (W === "LT") {
                    w = I._5;
                    continue;
                  }
                  if (W === "GT") {
                    w = I._6;
                    continue;
                  }
                  if (W === "EQ") {
                    k = !1, E = b("Just", I._4);
                    continue;
                  }
                }
                a();
              }
              return E;
            })(s.st.layer);
            if (v.tag === "Nothing")
              return 0 + p | 0;
            if (v.tag === "Just")
              return v._1 + p | 0;
            a();
          })())($) : $)(s.st.layer)(e)
        });
      }
    }
    a();
  };
}, P1 = (t) => (n) => (e) => (r) => J((o) => (i) => {
  if (wo(t)(r)(i.src)(e) && !wo(t)(r)(i.tgt)(e)) {
    const s = i.tgt, c = ((_) => {
      let h = _, p = !0, $;
      for (; p; ) {
        const m = h;
        if (m.tag === "Leaf") {
          p = !1, $ = y;
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
        a();
      }
      return $;
    })(r.layer), f = i.src, l = ((_) => {
      let h = _, p = !0, $;
      for (; p; ) {
        const m = h;
        if (m.tag === "Leaf") {
          p = !1, $ = y;
          continue;
        }
        if (m.tag === "Node") {
          const N = t.compare(f)(m._3);
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
        a();
      }
      return $;
    })(r.layer), d = (() => {
      if (c.tag === "Nothing") {
        if (l.tag === "Nothing")
          return -i.delta;
        if (l.tag === "Just")
          return -l._1 - i.delta | 0;
        a();
      }
      if (c.tag === "Just") {
        if (l.tag === "Nothing")
          return (c._1 - 0 | 0) - i.delta | 0;
        if (l.tag === "Just")
          return (c._1 - l._1 | 0) - i.delta | 0;
      }
      a();
    })();
    if (d < o.slack)
      return { edge: b("Just", i), slack: d };
  }
  return o;
})({ edge: y, slack: 1e9 })(n).edge, A1 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => (i) => {
    const s = i.tgt, u = i.src;
    return J((c) => (f) => {
      if ((() => {
        const g = Gi(f.eid)(r.cutvalue);
        if (g.tag === "Just")
          return !0;
        if (g.tag === "Nothing")
          return !1;
        a();
      })()) {
        const g = Gi(f.eid)(r.cutvalue), l = (() => {
          if (g.tag === "Nothing")
            return 0;
          if (g.tag === "Just")
            return g._1;
          a();
        })();
        return n.eq(u)(f.src) || n.eq(s)(f.tgt) ? c - (l - f.weight) : c + (l - f.weight);
      }
      return n.eq(o)(u) ? n.eq(f.src)(o) ? c + f.weight : c - f.weight : n.eq(f.src)(o) ? c - f.weight : c + f.weight;
    })(i.weight)(gt((c) => c.eid !== i.eid && (n.eq(c.src)(o) || n.eq(c.tgt)(o)), e));
  };
}, R1 = (t) => {
  const n = A1(t);
  return (e) => (r) => (o) => {
    const i = (u, c, f) => {
      const l = ((d) => {
        let _ = d, h = !0, p;
        for (; h; ) {
          const $ = _;
          if ($.tag === "Leaf") {
            h = !1, p = y;
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
          a();
        }
        return p;
      })(f);
      if (l.tag === "Just")
        return Y(t)(u)(gt((d) => d.eid !== c.eid, l._1))(f);
      if (l.tag === "Nothing")
        return f;
      a();
    };
    return ((u) => (c) => {
      let f = u, g = c, l = !0, d;
      for (; l; ) {
        const _ = f, h = g, $ = ((N) => {
          let v = N, T = !0, w;
          for (; T; ) {
            const k = v;
            if (k.tag === "Leaf") {
              T = !1, w = y;
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
                T = !1, w = b("Just", k._4);
                continue;
              }
            }
            a();
          }
          return w;
        })(_.unknown), m = (() => {
          if ($.tag === "Nothing")
            return [];
          if ($.tag === "Just")
            return $._1;
          a();
        })();
        if (m.length === 1) {
          const N = t.Eq0().eq(m[0].src)(h) ? m[0].tgt : m[0].src;
          f = {
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
  const n = t.Eq0(), e = t.Eq0(), r = { eq: (f) => (g) => f.delta === g.delta && f.eid === g.eid && e.eq(f.src)(g.src) && n.eq(f.tgt)(g.tgt) && f.weight === g.weight }, o = {
    compare: (f) => (g) => {
      const l = rt.compare(f.delta)(g.delta);
      if (l === "LT" || l === "GT" || l !== "EQ")
        return l;
      const d = rt.compare(f.eid)(g.eid);
      if (d === "LT" || d === "GT" || d !== "EQ")
        return d;
      const _ = t.compare(f.src)(g.src);
      if (_ === "LT" || _ === "GT" || _ !== "EQ")
        return _;
      const h = t.compare(f.tgt)(g.tgt);
      if (h === "LT" || h === "GT" || h !== "EQ")
        return h;
      const p = pt.compare(f.weight)(g.weight);
      return p === "LT" || p === "GT" || p !== "EQ" ? p : yn;
    },
    Eq0: () => r
  }, i = J((f) => (g) => Y(o)(g)()(f))(Q), s = G1(t), u = jt(t)(Bt), c = R1(t);
  return (f) => (g) => (l) => {
    const d = {
      unknown: u(O((_) => L(
        _,
        Et(Pn.foldr, i(s(g)(l)(_)))
      ))(f)),
      cutvalue: Q
    };
    return {
      ...l,
      cutvalue: J(c(g))(d)(gt(
        (_) => {
          const p = (($) => {
            let m = $, N = !0, v;
            for (; N; ) {
              const T = m;
              if (T.tag === "Leaf") {
                N = !1, v = y;
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
                  N = !1, v = b("Just", T._4);
                  continue;
                }
              }
              a();
            }
            return v;
          })(d.unknown);
          if (p.tag === "Nothing")
            return !1;
          if (p.tag === "Just")
            return p._1.length === 1;
          a();
        },
        f
      )).cutvalue
    };
  };
}, F1 = (t) => {
  const n = na(t), e = ra(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const c = { ...u, treeEdge: Y(rt)(s.eid)()(xr(rt)(i.eid)(u.treeEdge)) }, f = s.tgt, l = ((m) => {
      let N = m, v = !0, T;
      for (; v; ) {
        const w = N;
        if (w.tag === "Leaf") {
          v = !1, T = y;
          continue;
        }
        if (w.tag === "Node") {
          const k = t.compare(f)(w._3);
          if (k === "LT") {
            N = w._5;
            continue;
          }
          if (k === "GT") {
            N = w._6;
            continue;
          }
          if (k === "EQ") {
            v = !1, T = b("Just", w._4);
            continue;
          }
        }
        a();
      }
      return T;
    })(c.layer), d = s.src, h = ((m) => {
      let N = m, v = !0, T;
      for (; v; ) {
        const w = N;
        if (w.tag === "Leaf") {
          v = !1, T = y;
          continue;
        }
        if (w.tag === "Node") {
          const k = t.compare(d)(w._3);
          if (k === "LT") {
            N = w._5;
            continue;
          }
          if (k === "GT") {
            N = w._6;
            continue;
          }
          if (k === "EQ") {
            v = !1, T = b("Just", w._4);
            continue;
          }
        }
        a();
      }
      return T;
    })(c.layer), p = (() => {
      if (l.tag === "Nothing") {
        if (h.tag === "Nothing")
          return -s.delta;
        if (h.tag === "Just")
          return -h._1 - s.delta | 0;
        a();
      }
      if (l.tag === "Just") {
        if (h.tag === "Nothing")
          return (l._1 - 0 | 0) - s.delta | 0;
        if (h.tag === "Just")
          return (l._1 - h._1 | 0) - s.delta | 0;
      }
      a();
    })(), $ = wo(t)(c)(s.tgt)(i) ? -p : p;
    return e(r)(o)(n(r)(o)({
      ...c,
      layer: J((m) => (N) => wo(t)(c)(N)(i) ? m : Y(t)(N)((() => {
        const T = ((w) => {
          let k = w, E = !0, I;
          for (; E; ) {
            const W = k;
            if (W.tag === "Leaf") {
              E = !1, I = y;
              continue;
            }
            if (W.tag === "Node") {
              const z = t.compare(N)(W._3);
              if (z === "LT") {
                k = W._5;
                continue;
              }
              if (z === "GT") {
                k = W._6;
                continue;
              }
              if (z === "EQ") {
                E = !1, I = b("Just", W._4);
                continue;
              }
            }
            a();
          }
          return I;
        })(c.layer);
        if (T.tag === "Nothing")
          return 0 + $ | 0;
        if (T.tag === "Just")
          return T._1 + $ | 0;
        a();
      })())(m))(c.layer)(r)
    }));
  };
}, B1 = (t) => {
  const n = F1(t);
  return (e) => (r) => (o) => (i) => ((u) => (c) => {
    let f = u, g = c, l = !0, d;
    for (; l; ) {
      const _ = f, h = g;
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
          f = _ - 1 | 0, g = n(r)(o)(p._1)($._1)(h);
          continue;
        }
      }
      a();
    }
    return d;
  })(e)(i);
}, Q1 = (t) => {
  const n = ra(t), e = na(t), r = ea(t);
  return (o) => (i) => (s) => n(o)(i)(e(o)(i)(r(o)(i)(s)));
}, mu = (t) => (n) => J((e) => (r) => yt(t)(fn)(n(r))([r])(e))(Q), D1 = (t) => {
  const n = jt(t)(Bt);
  return (e) => (r) => (o) => {
    const i = (c) => (f) => (g) => (l) => {
      let d = c, _ = f, h = g, p = l, $ = !0, m;
      for (; $; ) {
        const N = d, v = _, T = h, w = p, k = Wt((E) => y, (E) => (I) => b("Just", { head: E, tail: I }), T);
        if (k.tag === "Nothing") {
          $ = !1, m = w;
          continue;
        }
        if (k.tag === "Just") {
          const E = k._1.head, W = ((P) => {
            let R = P, j = !0, et;
            for (; j; ) {
              const X = R;
              if (X.tag === "Leaf") {
                j = !1, et = y;
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
              a();
            }
            return et;
          })(w.layer), z = (() => {
            if (W.tag === "Nothing")
              return 0;
            if (W.tag === "Just")
              return W._1;
            a();
          })(), M = J((P) => (R) => {
            const j = R.tgt, X = ((x) => {
              let C = x, q = !0, S;
              for (; q; ) {
                const F = C;
                if (F.tag === "Leaf") {
                  q = !1, S = y;
                  continue;
                }
                if (F.tag === "Node") {
                  const D = t.compare(j)(F._3);
                  if (D === "LT") {
                    C = F._5;
                    continue;
                  }
                  if (D === "GT") {
                    C = F._6;
                    continue;
                  }
                  if (D === "EQ") {
                    q = !1, S = b("Just", F._4);
                    continue;
                  }
                }
                a();
              }
              return S;
            })(P.incident), A = (() => {
              if (X.tag === "Nothing")
                return -1;
              if (X.tag === "Just")
                return X._1 - 1 | 0;
              a();
            })();
            return {
              st: {
                ...P.st,
                layer: Y(t)(R.tgt)(k1((() => {
                  const x = R.tgt, q = ((S) => {
                    let F = S, D = !0, K;
                    for (; D; ) {
                      const V = F;
                      if (V.tag === "Leaf") {
                        D = !1, K = y;
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
                          D = !1, K = b("Just", V._4);
                          continue;
                        }
                      }
                      a();
                    }
                    return K;
                  })(P.st.layer);
                  if (q.tag === "Nothing")
                    return 0;
                  if (q.tag === "Just")
                    return q._1;
                  a();
                })())(z + R.delta | 0))(P.st.layer)
              },
              incident: Y(t)(R.tgt)(A)(P.incident),
              queue: A === 0 ? [...P.queue, R.tgt] : P.queue
            };
          })({ st: w, incident: v, queue: k._1.tail })((() => {
            const R = ((j) => {
              let et = j, X = !0, A;
              for (; X; ) {
                const x = et;
                if (x.tag === "Leaf") {
                  X = !1, A = y;
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
                a();
              }
              return A;
            })(N);
            if (R.tag === "Nothing")
              return [];
            if (R.tag === "Just")
              return R._1;
            a();
          })());
          d = N, _ = M.incident, h = M.queue, p = M.st;
          continue;
        }
        a();
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
              _ = !1, h = y;
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
            a();
          }
          return h;
        })(s);
        if (g.tag === "Nothing")
          return 0;
        if (g.tag === "Just")
          return g._1.length;
        a();
      })()
    ))(e));
    return i(mu(t)((c) => c.src)(r))(u)(gt(
      (c) => {
        const g = ((l) => {
          let d = l, _ = !0, h;
          for (; _; ) {
            const p = d;
            if (p.tag === "Leaf") {
              _ = !1, h = y;
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
            a();
          }
          return h;
        })(u);
        if (g.tag === "Nothing")
          return !0;
        if (g.tag === "Just")
          return g._1 === 0;
        a();
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
      o = !1, i = y;
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
    a();
  }
  return i;
}, Pi = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
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
      a();
    })());
    return Hn(e.id)((o) => ({ ...o, hitbox: { ...o.hitbox, x: r + o.cGroupOffset.x } }))(n);
  }
  a();
}, O1 = (t) => (n) => ({
  ...n,
  cGraph: J(H1(t))(n.cGraph)((() => {
    const e = n.cGraph;
    return vt((r) => Xt(r)(e.cNodes))(e.cNodeOrder);
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
  const i = Xt(o)(n.cGraph.cNodes);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just")
    return (e.cGroup.tag === "Nothing" ? i._1.cGroup.tag === "Nothing" : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" && e.cGroup._1 === i._1.cGroup._1) ? r : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" ? V1(t)(n)(e)(i._1)(e.cGroup._1)(i._1.cGroup._1)(r) : r;
  a();
}, X1 = (t) => (n) => (e) => (r) => J(Y1(t)(n)(r))(e)(r.constraints), U1 = (t) => (n) => Ar({ src: n.srcGroup, tgt: n.tgtGroup, delta: n.delta, weight: n.weight })(t), M1 = (t) => {
  const n = J((o) => (i) => yt(rt)(Zt)(i.tgt)(1)(o))(Q)(t.edges), e = gt(
    (o) => {
      const i = ia(o)(n);
      if (i.tag === "Nothing")
        return !0;
      if (i.tag === "Just")
        return i._1 === 0;
      a();
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
    return vt((o) => Xt(o)(r.cNodes))(r.cNodeOrder);
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
    return vt((o) => Xt(o)(r.cNodes))(r.cNodeOrder);
  })()), e = vt((r) => Xt(r)(n.cNodes))(n.cNodeOrder);
  return J(ed(t)(e))(n)(e);
}, sa = (t) => t, Ht = /* @__PURE__ */ sa("H"), Ot = /* @__PURE__ */ sa("V"), od = (t) => L(t._2, t._1), ua = (t) => ({ ...t, position: L(t.position._2, t.position._1), size: L(t.size._2, t.size._1) }), id = (t) => ({
  start: L(t.start._2, t.start._1),
  end: L(t.end._2, t.end._1),
  direction: (() => {
    if (t.direction === "H")
      return Ot;
    if (t.direction === "V")
      return Ht;
    a();
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
      o = !1, i = y;
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
    a();
  }
  return i;
}, Nu = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, at = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, ft = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, Ue = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, fd = (t) => (n) => {
  const e = rt.compare(t._1)(n._1);
  return e === "LT" ? dn : e === "GT" ? hn : rt.compare(t._2)(n._2);
}, Ye = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, gd = /* @__PURE__ */ (() => {
  const t = On.unfoldr(De);
  return (n) => t(Wn("IterNode", n, Qe));
})(), _d = (t) => t, Ju = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, ld = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, ro = /* @__PURE__ */ aa("Regular"), oo = /* @__PURE__ */ aa("Critical"), fa = (t) => (n) => {
  const e = J((s) => (u) => Y(G)(u.node)(u)(s))(Q)(n), r = 1.25 * ct(4), o = (s, u, c) => ((g) => (l) => (d) => {
    let _ = g, h = l, p = d, $ = !0, m;
    for (; $; ) {
      const N = _, v = h, T = p;
      if (T.critical) {
        $ = !1, m = T;
        continue;
      }
      const w = Wt((E) => y, (E) => (I) => b("Just", { head: E, tail: I }), N), k = Wt((E) => y, (E) => (I) => b("Just", { head: E, tail: I }), v);
      if (w.tag === "Just" && k.tag === "Just") {
        const E = w._1.head > k._1.head - s && w._1.head < k._1.head + s ? { ...T, critical: !0 } : w._1.head > k._1.head - r && w._1.head < k._1.head + r ? { ...T, conflicts: T.conflicts + 1 | 0 } : T;
        if (E.critical) {
          $ = !1, m = E;
          continue;
        }
        if (w._1.head <= k._1.head) {
          _ = w._1.tail, h = v, p = E;
          continue;
        }
        _ = N, h = k._1.tail, p = E;
        continue;
      }
      $ = !1, m = T;
    }
    return m;
  })(u)(c)({ conflicts: 0, critical: !1 }), i = (s, u, c) => {
    if (ft(J(ft)(-1e18)(u.incoming))(J(ft)(-1e18)(u.outgoing)) - at(J(at)(1e18)(u.incoming))(J(at)(1e18)(u.outgoing)) < 1e-3 || ft(J(ft)(-1e18)(c.incoming))(J(ft)(-1e18)(c.outgoing)) - at(J(at)(1e18)(c.incoming))(J(at)(1e18)(c.outgoing)) < 1e-3)
      return [];
    const f = o(s, u.outgoing, c.incoming), g = o(s, c.outgoing, u.incoming);
    if (f.critical || g.critical)
      return [...f.critical ? [{ src: c.id, tgt: u.id, weight: 1, kind: oo }] : [], ...g.critical ? [{ src: u.id, tgt: c.id, weight: 1, kind: oo }] : []];
    const l = at(J(at)(1e18)(u.incoming))(J(at)(1e18)(u.outgoing)), d = ft(J(ft)(-1e18)(u.incoming))(J(ft)(-1e18)(u.outgoing)), _ = at(J(at)(1e18)(c.incoming))(J(at)(1e18)(c.outgoing)), h = ft(J(ft)(-1e18)(c.incoming))(J(ft)(-1e18)(c.outgoing)), p = (1 * f.conflicts | 0) + (16 * (J((m) => (N) => N > h ? m : N >= _ ? m + 1 | 0 : m)(0)(u.outgoing) + J((m) => (N) => N > d ? m : N >= l ? m + 1 | 0 : m)(0)(c.incoming) | 0) | 0) | 0, $ = (1 * g.conflicts | 0) + (16 * (J((m) => (N) => N > d ? m : N >= l ? m + 1 | 0 : m)(0)(c.outgoing) + J((m) => (N) => N > h ? m : N >= _ ? m + 1 | 0 : m)(0)(u.incoming) | 0) | 0) | 0;
    return p < $ ? [{ src: u.id, tgt: c.id, weight: $ - p | 0, kind: ro }] : p > $ ? [{ src: c.id, tgt: u.id, weight: p - $ | 0, kind: ro }] : p > 0 ? [{ src: u.id, tgt: c.id, weight: 0, kind: ro }, { src: c.id, tgt: u.id, weight: 0, kind: ro }] : [];
  };
  return J((s) => (u) => J((c) => (f) => Y(G)(f._1)(f._2)(c))(s)((() => {
    const c = J((P) => (R) => {
      const j = R.edge.from.node + "|" + (() => {
        if (R.edge.from.port.tag === "Just")
          return R.edge.from.port._1;
        if (R.edge.from.port.tag === "Nothing")
          return "_auto_" + R.edge.id;
        a();
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
            splitBy: y,
            splitPartner: y
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
      a();
    })({ entries: Q, order: [] })(u._2), f = Pt((P) => (R) => ({ ...R, id: P }))(vt((P) => Ju(P)(c.entries))(c.order));
    if (f.length === 0)
      return [];
    const g = J((P) => (R) => P.prev.tag === "Just" && R - P.prev._1 < 1e-9 ? P : { prev: b("Just", R), out: [...P.out, R] })({ prev: y, out: [] })(Lt(pt.compare)([
      ...bt(f)((P) => P.incoming),
      ...bt(f)((P) => P.outgoing)
    ])).out, l = g.length < 2 ? 0.2 * r : 0.2 * J((P) => (R) => {
      if (P.prev.tag === "Nothing")
        return { prev: b("Just", R), mn: P.mn };
      if (P.prev.tag === "Just")
        return { prev: b("Just", R), mn: at(P.mn)(R - P.prev._1) };
      a();
    })({ prev: y, mn: 1e18 })(g).mn, d = {
      segments: f,
      deps: (() => {
        const P = f.length;
        return bt(bt(Yt(0, P - 2 | 0))((R) => bt(Yt(R + 1 | 0, P - 1 | 0))((j) => [
          L(R, j)
        ])))((R) => R._1 >= 0 && R._1 < f.length ? R._2 >= 0 && R._2 < f.length ? i(l, f[R._1], f[R._2]) : [] : []);
      })()
    }, _ = gt(
      (P) => {
        if (P.kind === "Critical")
          return !0;
        if (P.kind === "Regular")
          return !1;
        a();
      },
      d.deps
    ), h = (() => {
      if (_.length < 2)
        return d;
      const P = Ve((() => {
        const A = d.segments;
        return O((x) => L(x.id, x.mark))((() => {
          const x = A.length, C = (F) => {
            let D = F, K = !0, V;
            for (; K; ) {
              const B = D, nt = ln((U) => {
                const tt = wt(U)(B.inWeight);
                if (tt.tag === "Nothing")
                  return !0;
                if (tt.tag === "Just")
                  return tt._1 === 0;
                a();
              })(B.remaining);
              if (nt.tag === "Nothing") {
                K = !1, V = B;
                continue;
              }
              if (nt.tag === "Just") {
                const U = nt._1;
                D = {
                  ...B,
                  inWeight: J((tt) => (ot) => yt(rt)(Zt)(ot.tgt)(-ot.weight)(tt))(B.inWeight)((() => {
                    const tt = wt(U)(B.depsBySrc);
                    if (tt.tag === "Nothing")
                      return [];
                    if (tt.tag === "Just")
                      return tt._1;
                    a();
                  })()),
                  marks: Y(rt)(U)(B.nextSource)(B.marks),
                  nextSource: B.nextSource + 1 | 0,
                  outWeight: J((tt) => (ot) => yt(rt)(Zt)(ot.src)(-ot.weight)(tt))(B.outWeight)((() => {
                    const tt = wt(U)(B.depsByTgt);
                    if (tt.tag === "Nothing")
                      return [];
                    if (tt.tag === "Just")
                      return tt._1;
                    a();
                  })()),
                  remaining: gt((tt) => tt !== U, B.remaining)
                };
                continue;
              }
              a();
            }
            return V;
          }, q = (F) => {
            let D = F, K = !0, V;
            for (; K; ) {
              const B = D, nt = ln((U) => {
                const tt = wt(U)(B.outWeight);
                if (tt.tag === "Nothing")
                  return !0;
                if (tt.tag === "Just")
                  return tt._1 === 0;
                a();
              })(B.remaining);
              if (nt.tag === "Nothing") {
                K = !1, V = B;
                continue;
              }
              if (nt.tag === "Just") {
                const U = nt._1;
                D = {
                  ...B,
                  inWeight: J((tt) => (ot) => yt(rt)(Zt)(ot.tgt)(-ot.weight)(tt))(B.inWeight)((() => {
                    const tt = wt(U)(B.depsBySrc);
                    if (tt.tag === "Nothing")
                      return [];
                    if (tt.tag === "Just")
                      return tt._1;
                    a();
                  })()),
                  marks: Y(rt)(U)(B.nextSink)(B.marks),
                  nextSink: B.nextSink - 1 | 0,
                  outWeight: J((tt) => (ot) => yt(rt)(Zt)(ot.src)(-ot.weight)(tt))(B.outWeight)((() => {
                    const tt = wt(U)(B.depsByTgt);
                    if (tt.tag === "Nothing")
                      return [];
                    if (tt.tag === "Just")
                      return tt._1;
                    a();
                  })()),
                  remaining: gt((tt) => tt !== U, B.remaining)
                };
                continue;
              }
              a();
            }
            return V;
          };
          return ((F) => {
            let D = F, K = !0, V;
            for (; K; ) {
              const nt = C(q(D));
              if (nt.remaining.length === 0) {
                K = !1, V = O((U) => {
                  const tt = wt(U.id)(nt.marks), ot = (() => {
                    if (tt.tag === "Nothing")
                      return U.id;
                    if (tt.tag === "Just")
                      return tt._1;
                    a();
                  })();
                  return { ...U, mark: ot < x ? (ot + x | 0) + 1 | 0 : ot };
                })(A);
                continue;
              }
              D = (() => {
                const U = (ot) => {
                  const st = wt(ot)(nt.outWeight), _t = wt(ot)(nt.inWeight);
                  return (() => {
                    if (st.tag === "Nothing")
                      return 0;
                    if (st.tag === "Just")
                      return st._1;
                    a();
                  })() - (() => {
                    if (_t.tag === "Nothing")
                      return 0;
                    if (_t.tag === "Just")
                      return _t._1;
                    a();
                  })() | 0;
                }, tt = Lt((ot) => (st) => rt.compare(U(st))(U(ot)))(nt.remaining);
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
                      a();
                    })()),
                    marks: Y(rt)(ot)(nt.nextSource)(nt.marks),
                    nextSource: nt.nextSource + 1 | 0,
                    outWeight: J((st) => (_t) => yt(rt)(Zt)(_t.src)(-_t.weight)(st))(nt.outWeight)((() => {
                      const st = wt(ot)(nt.depsByTgt);
                      if (st.tag === "Nothing")
                        return [];
                      if (st.tag === "Just")
                        return st._1;
                      a();
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
            inWeight: J((F) => (D) => yt(rt)(Zt)(D.tgt)(D.weight)(F))(Q)(_),
            outWeight: J((F) => (D) => yt(rt)(Zt)(D.src)(D.weight)(F))(Q)(_),
            depsBySrc: J((F) => (D) => yt(rt)(fn)(D.src)([D])(F))(Q)(_),
            depsByTgt: J((F) => (D) => yt(rt)(fn)(D.tgt)([D])(F))(Q)(_),
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
            a();
          })() > (() => {
            if (C.tag === "Nothing")
              return 0;
            if (C.tag === "Just")
              return C._1;
            a();
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
            splitBy: y,
            splitPartner: b("Just", x.id)
          };
          return {
            segMap: Y(rt)(nt.id)(nt)(Y(rt)(B.id)(B)(A.segMap)),
            freeAreas: A.freeAreas,
            nextId: A.nextId + 1 | 0
          };
        }
        const F = 0 < S.length ? b("Just", S[0]) : y, D = (() => {
          if (F.tag === "Nothing")
            return { i: 0, a: { startPosition: 0, endPosition: 0, size: 0 } };
          if (F.tag === "Just") {
            if (S.length === 1)
              return F._1;
            const B = O((nt) => ({
              c: nt,
              rating: (() => {
                const U = (nt.a.startPosition + nt.a.endPosition) / 2, tt = [U], ot = [U], st = J((() => {
                  const At = A.segMap;
                  return (Tt) => (Vt) => {
                    const ht = wt(Vt.tgt)(At);
                    if (ht.tag === "Nothing")
                      return Tt;
                    if (ht.tag === "Just") {
                      const mt = at(J(at)(1e18)(ht._1.incoming))(J(at)(1e18)(ht._1.outgoing)), lt = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), dt = at(J(at)(1e18)(x.incoming))(J(at)(1e18)(tt)), it = (() => {
                        const Ct = ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(tt)), St = J((Ft) => (nn) => nn > lt ? Ft : nn >= mt ? Ft + 1 | 0 : Ft)(0)(tt) + J((Ft) => (nn) => nn > Ct ? Ft : nn >= dt ? Ft + 1 | 0 : Ft)(0)(ht._1.incoming) | 0, be = at(J(at)(1e18)(x.incoming))(J(at)(1e18)(tt)), Ee = ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(tt)), He = at(J(at)(1e18)(ht._1.incoming))(J(at)(1e18)(ht._1.outgoing)), ie = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), lr = J((Ft) => (nn) => nn > Ee ? Ft : nn >= be ? Ft + 1 | 0 : Ft)(0)(ht._1.outgoing) + J((Ft) => (nn) => nn > ie ? Ft : nn >= He ? Ft + 1 | 0 : Ft)(0)(x.incoming) | 0;
                        return St === lr ? St > 0 ? { ...Tt, deps: Tt.deps + 2 | 0, crossings: Tt.crossings + St | 0 } : Tt : { ...Tt, deps: Tt.deps + 1 | 0, crossings: Tt.crossings + Ye(St)(lr) | 0 };
                      })(), ut = at(J(at)(1e18)(ht._1.incoming))(J(at)(1e18)(ht._1.outgoing)), $t = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), Nt = at(J(at)(1e18)(ot))(J(at)(1e18)(x.outgoing)), Rt = ft(J(ft)(-1e18)(ot))(J(ft)(-1e18)(x.outgoing)), It = J((Ct) => (St) => St > $t ? Ct : St >= ut ? Ct + 1 | 0 : Ct)(0)(x.outgoing) + J((Ct) => (St) => St > Rt ? Ct : St >= Nt ? Ct + 1 | 0 : Ct)(0)(ht._1.incoming) | 0, tn = at(J(at)(1e18)(ot))(J(at)(1e18)(x.outgoing)), zn = ft(J(ft)(-1e18)(ot))(J(ft)(-1e18)(x.outgoing)), qe = at(J(at)(1e18)(ht._1.incoming))(J(at)(1e18)(ht._1.outgoing)), ke = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), oe = J((Ct) => (St) => St > zn ? Ct : St >= tn ? Ct + 1 | 0 : Ct)(0)(ht._1.outgoing) + J((Ct) => (St) => St > ke ? Ct : St >= qe ? Ct + 1 | 0 : Ct)(0)(ot) | 0;
                      return It === oe ? It > 0 ? { ...it, deps: it.deps + 2 | 0, crossings: it.crossings + It | 0 } : it : { ...it, deps: it.deps + 1 | 0, crossings: it.crossings + Ye(It)(oe) | 0 };
                    }
                    a();
                  };
                })())(J((() => {
                  const At = A.segMap;
                  return (Tt) => (Vt) => {
                    const ht = wt(Vt.src)(At);
                    if (ht.tag === "Nothing")
                      return Tt;
                    if (ht.tag === "Just") {
                      const mt = at(J(at)(1e18)(ht._1.incoming))(J(at)(1e18)(ht._1.outgoing)), lt = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), dt = at(J(at)(1e18)(x.incoming))(J(at)(1e18)(tt)), it = (() => {
                        const Ct = ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(tt)), St = J((Ft) => (nn) => nn > lt ? Ft : nn >= mt ? Ft + 1 | 0 : Ft)(0)(tt) + J((Ft) => (nn) => nn > Ct ? Ft : nn >= dt ? Ft + 1 | 0 : Ft)(0)(ht._1.incoming) | 0, be = at(J(at)(1e18)(x.incoming))(J(at)(1e18)(tt)), Ee = ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(tt)), He = at(J(at)(1e18)(ht._1.incoming))(J(at)(1e18)(ht._1.outgoing)), ie = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), lr = J((Ft) => (nn) => nn > Ee ? Ft : nn >= be ? Ft + 1 | 0 : Ft)(0)(ht._1.outgoing) + J((Ft) => (nn) => nn > ie ? Ft : nn >= He ? Ft + 1 | 0 : Ft)(0)(x.incoming) | 0;
                        return St === lr ? St > 0 ? { ...Tt, deps: Tt.deps + 2 | 0, crossings: Tt.crossings + St | 0 } : Tt : { ...Tt, deps: Tt.deps + 1 | 0, crossings: Tt.crossings + Ye(St)(lr) | 0 };
                      })(), ut = at(J(at)(1e18)(ht._1.incoming))(J(at)(1e18)(ht._1.outgoing)), $t = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), Nt = at(J(at)(1e18)(ot))(J(at)(1e18)(x.outgoing)), Rt = ft(J(ft)(-1e18)(ot))(J(ft)(-1e18)(x.outgoing)), It = J((Ct) => (St) => St > $t ? Ct : St >= ut ? Ct + 1 | 0 : Ct)(0)(x.outgoing) + J((Ct) => (St) => St > Rt ? Ct : St >= Nt ? Ct + 1 | 0 : Ct)(0)(ht._1.incoming) | 0, tn = at(J(at)(1e18)(ot))(J(at)(1e18)(x.outgoing)), zn = ft(J(ft)(-1e18)(ot))(J(ft)(-1e18)(x.outgoing)), qe = at(J(at)(1e18)(ht._1.incoming))(J(at)(1e18)(ht._1.outgoing)), ke = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), oe = J((Ct) => (St) => St > zn ? Ct : St >= tn ? Ct + 1 | 0 : Ct)(0)(ht._1.outgoing) + J((Ct) => (St) => St > ke ? Ct : St >= qe ? Ct + 1 | 0 : Ct)(0)(ot) | 0;
                      return It === oe ? It > 0 ? { ...it, deps: it.deps + 2 | 0, crossings: it.crossings + It | 0 } : it : { ...it, deps: it.deps + 1 | 0, crossings: it.crossings + Ye(It)(oe) | 0 };
                    }
                    a();
                  };
                })())({ crossings: 0, deps: 0 })(gt((At) => At.tgt === x.id, d.deps)))(gt((At) => At.src === x.id, d.deps)), _t = (() => {
                  if (x.splitBy.tag === "Just")
                    return wt(x.splitBy._1)(A.segMap);
                  if (x.splitBy.tag === "Nothing")
                    return y;
                  a();
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
                a();
              })()
            }))(S);
            return J((nt) => (U) => U.rating.crossings < nt.rating.crossings || !(U.rating.crossings > nt.rating.crossings) && (U.rating.deps < nt.rating.deps || !(U.rating.deps > nt.rating.deps) && U.c.a.size > nt.c.a.size) ? U : nt)(0 < B.length ? B[0] : { c: F._1, rating: { crossings: 1e6, deps: 1e6 } })(B).c;
          }
          a();
        })(), K = {
          ...x,
          incoming: Lt(pt.compare)(x.incoming),
          outgoing: Lt(pt.compare)([(D.a.startPosition + D.a.endPosition) / 2]),
          splitPartner: b("Just", A.nextId)
        }, V = {
          id: A.nextId,
          incoming: Lt(pt.compare)([(D.a.startPosition + D.a.endPosition) / 2]),
          mark: 0,
          members: x.members,
          outgoing: Lt(pt.compare)(x.outgoing),
          slot: 0,
          splitBy: y,
          splitPartner: b("Just", x.id)
        };
        return {
          segMap: Y(rt)(V.id)(V)(Y(rt)(K.id)(K)(A.segMap)),
          freeAreas: (() => {
            if (D.i >= 0 && D.i < A.freeAreas.length) {
              const B = cc(Kt, y, D.i, A.freeAreas), nt = (() => {
                if (B.tag === "Nothing")
                  return A.freeAreas;
                if (B.tag === "Just")
                  return B._1;
                a();
              })();
              if (A.freeAreas[D.i].size / 2 < l)
                return nt;
              const U = (A.freeAreas[D.i].startPosition + A.freeAreas[D.i].endPosition) / 2, tt = U - l, ot = U + l;
              return [
                ...D.i < 1 ? [] : Gt(0, D.i, nt),
                ...A.freeAreas[D.i].startPosition <= tt ? [{ startPosition: A.freeAreas[D.i].startPosition, endPosition: tt, size: tt - A.freeAreas[D.i].startPosition }] : [],
                ...ot <= A.freeAreas[D.i].endPosition ? [{ startPosition: ot, endPosition: A.freeAreas[D.i].endPosition, size: A.freeAreas[D.i].endPosition - ot }] : [],
                ...D.i < 1 ? nt : Gt(D.i, nt.length, nt)
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
            (x) => (C) => C - x >= 2 * l ? b("Just", { startPosition: x + l, endPosition: C - l, size: C - x - 2 * l }) : y,
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
            a();
          };
          return Et(Ut.foldr, A(X.segMap, zt));
        })(),
        deps: (() => {
          const A = X.segMap, x = (S, F) => {
            if (S.tag === "Leaf")
              return F;
            if (S.tag === "Node")
              return x(S._5, qt("Cons", S._4, x(S._6, F)));
            a();
          }, C = Et(Ut.foldr, x(A, zt)), q = C.length;
          return [
            ...bt(bt(Yt(0, q - 2 | 0))((S) => bt(Yt(S + 1 | 0, q - 1 | 0))((F) => [
              L(S, F)
            ])))((S) => S._1 >= 0 && S._1 < C.length ? S._2 >= 0 && S._2 < C.length ? C[S._1].splitPartner.tag !== "Nothing" && C[S._1].splitPartner.tag === "Just" && C[S._1].splitPartner._1 === C[S._2].id || C[S._2].splitPartner.tag !== "Nothing" && C[S._2].splitPartner.tag === "Just" && C[S._2].splitPartner._1 === C[S._1].id ? [] : i(l, C[S._1], C[S._2]) : [] : []),
            ...bt(C)((S) => S.splitBy.tag === "Just" && S.splitPartner.tag === "Just" && (() => {
              const F = wt(S.splitPartner._1)(A);
              if (F.tag === "Nothing")
                return !1;
              if (F.tag === "Just")
                return !0;
              a();
            })() && (() => {
              const F = wt(S.splitBy._1)(A);
              if (F.tag === "Nothing")
                return !1;
              if (F.tag === "Just")
                return !0;
              a();
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
          a();
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
              a();
            })()),
            marks: Y(rt)(x)(X.nextSource)(X.marks),
            nextSource: X.nextSource + 1 | 0,
            outWeight: J((C) => (q) => yt(rt)(Zt)(q.src)(-q.weight)(C))(X.outWeight)((() => {
              const C = wt(x)(X.depsByTgt);
              if (C.tag === "Nothing")
                return [];
              if (C.tag === "Just")
                return C._1;
              a();
            })()),
            remaining: gt((C) => C !== x, X.remaining)
          };
          continue;
        }
        a();
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
          a();
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
              a();
            })()),
            marks: Y(rt)(x)(X.nextSink)(X.marks),
            nextSink: X.nextSink - 1 | 0,
            outWeight: J((C) => (q) => yt(rt)(Zt)(q.src)(-q.weight)(C))(X.outWeight)((() => {
              const C = wt(x)(X.depsByTgt);
              if (C.tag === "Nothing")
                return [];
              if (C.tag === "Just")
                return C._1;
              a();
            })()),
            remaining: gt((C) => C !== x, X.remaining)
          };
          continue;
        }
        a();
      }
      return et;
    }, T = ((P) => {
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
              a();
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
              a();
            })() - (() => {
              if (F.tag === "Nothing")
                return 0;
              if (F.tag === "Just")
                return F._1;
              a();
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
                a();
              })()),
              marks: Y(rt)(q)(A.nextSource)(A.marks),
              nextSource: A.nextSource + 1 | 0,
              outWeight: J((S) => (F) => yt(rt)(Zt)(F.src)(-F.weight)(S))(A.outWeight)((() => {
                const S = wt(q)(A.depsByTgt);
                if (S.tag === "Nothing")
                  return [];
                if (S.tag === "Just")
                  return S._1;
                a();
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
    }), w = (() => {
      const P = (() => {
        const X = Ve(O((A) => L(A.id, A.mark))(T));
        return {
          segments: T,
          deps: vt((A) => (() => {
            if (A.kind === "Critical")
              return !0;
            if (A.kind === "Regular")
              return !1;
            a();
          })() ? b("Just", A) : (() => {
            const x = wt(A.src)(X), C = wt(A.tgt)(X);
            return (() => {
              if (x.tag === "Nothing")
                return 0;
              if (x.tag === "Just")
                return x._1;
              a();
            })() > (() => {
              if (C.tag === "Nothing")
                return 0;
              if (C.tag === "Just")
                return C._1;
              a();
            })();
          })() ? A.weight === 0 ? y : b("Just", { src: A.tgt, tgt: A.src, weight: A.weight, kind: A.kind }) : b("Just", A))(h.deps)
        };
      })(), R = J((X) => (A) => yt(rt)(Zt)(A.tgt)(1)(X))(Q)(P.deps), et = ((X) => {
        let A = X, x = !0, C;
        for (; x; ) {
          const q = A, S = Wt((F) => y, (F) => (D) => b("Just", { head: F, tail: D }), q.queue);
          if (S.tag === "Nothing") {
            x = !1, C = q;
            continue;
          }
          if (S.tag === "Just") {
            A = J((() => {
              const F = wt(S._1.head)(q.slots), D = (() => {
                if (F.tag === "Nothing")
                  return 0;
                if (F.tag === "Just")
                  return F._1;
                a();
              })();
              return (K) => (V) => {
                const B = wt(V)(K.inDegree), nt = (() => {
                  if (B.tag === "Nothing")
                    return -1;
                  if (B.tag === "Just")
                    return B._1 - 1 | 0;
                  a();
                })();
                return {
                  ...K,
                  slots: Y(rt)(V)(Nu((() => {
                    const U = wt(V)(K.slots);
                    if (U.tag === "Nothing")
                      return 0;
                    if (U.tag === "Just")
                      return U._1;
                    a();
                  })())(D + 1 | 0))(K.slots),
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
              a();
            })());
            continue;
          }
          a();
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
            a();
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
          a();
        })()
      }))(P.segments));
    })(), k = 1 + J((P) => (R) => Nu(P)(R.slot))(0)(w) | 0, E = bt(w)((P) => P.members), I = gt((P) => In(te)(P.edge.id)(E), t), W = J(ft)(-1e18)(O((P) => P.fromPos._2)(I)), z = J(at)(1e18)(O((P) => P.toPos._2)(I));
    if (W > z) {
      const P = Ve(O((R) => L(R.id, R))(w));
      return Cn(O((R) => O((j) => L(
        j,
        {
          slot: R.slot,
          slotCount: k,
          gapTop: z,
          gapBottom: W,
          partner: (() => {
            if (R.splitPartner.tag === "Just") {
              const et = wt(R.splitPartner._1)(P);
              if (et.tag === "Just")
                return b("Just", { slot: et._1.slot, splitX: 0 < et._1.incoming.length ? et._1.incoming[0] : 0 });
              if (et.tag === "Nothing")
                return y;
              a();
            }
            if (R.splitPartner.tag === "Nothing")
              return y;
            a();
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
              a();
            })());
          }
          if (R.splitPartner.tag === "Nothing")
            return !0;
          a();
        },
        w
      )));
    }
    const M = Ve(O((P) => L(P.id, P))(w));
    return Cn(O((P) => O((R) => L(
      R,
      {
        slot: P.slot,
        slotCount: k,
        gapTop: W,
        gapBottom: z,
        partner: (() => {
          if (P.splitPartner.tag === "Just") {
            const j = wt(P.splitPartner._1)(M);
            if (j.tag === "Just")
              return b("Just", { slot: j._1.slot, splitX: 0 < j._1.incoming.length ? j._1.incoming[0] : 0 });
            if (j.tag === "Nothing")
              return y;
            a();
          }
          if (P.splitPartner.tag === "Nothing")
            return y;
          a();
        })()
      }
    ))(P.members))(gt(
      (P) => {
        if (P.splitPartner.tag === "Just") {
          const R = wt(P.splitPartner._1)(M);
          return !(R.tag === "Just" && (() => {
            if (R._1.splitBy.tag === "Nothing")
              return !1;
            if (R._1.splitBy.tag === "Just")
              return !0;
            a();
          })());
        }
        if (P.splitPartner.tag === "Nothing")
          return !0;
        a();
      },
      w
    )));
  })()))(Q)(gd(J((s) => (u) => {
    const c = Ue(u.edge.from.node)(e);
    if (c.tag === "Just") {
      const f = Ue(u.edge.to.node)(e);
      return f.tag === "Just" && c._1.layer !== f._1.layer ? yt(rt)(fn)(Ye(c._1.layer)(f._1.layer))([u])(s) : s;
    }
    return s;
  })(Q)((() => {
    const s = (u) => L(
      (() => {
        const c = Ue(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.layer : 1e6;
      })(),
      (() => {
        const c = Ue(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.order : 1e6;
      })()
    );
    return Lt((u) => (c) => fd(s(u))(s(c)))(t);
  })())));
}, dd = (t) => (n) => {
  const e = fa(t)(n), r = J((o) => (i) => Y(G)(i.node)(i)(o))(Q)(n);
  return J((o) => (i) => {
    const s = Ue(i.edge.from.node)(r);
    if (s.tag === "Just") {
      const u = Ue(i.edge.to.node)(r);
      if (u.tag === "Just" && s._1.layer !== u._1.layer) {
        const c = ld(i.edge.id)(e);
        if (c.tag === "Just")
          return Y(rt)(Ye(s._1.layer)(u._1.layer))(c._1.slotCount)(o);
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
  a();
}, on = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, mr = (t) => (n) => (e) => (r) => ga((o) => e >= o.x && e < o.x + o.w && n > o.y && t < o.y + o.h)(r), Lo = (t) => (n) => (e) => (r) => mr(rn(n)(e))(on(n)(e))(r)(t), io = /* @__PURE__ */ ct(4), hd = /* @__PURE__ */ gc((t) => {
  if (t.direction === "H") {
    const n = rn(t.start._1)(t.end._1);
    return [{ x: n, y: t.start._2 - 1, w: on(t.start._1)(t.end._1) - n, h: 2 }];
  }
  if (t.direction === "V") {
    const n = rn(t.start._2)(t.end._2);
    return [{ x: t.start._1 - 1, y: n, w: 2, h: on(t.start._2)(t.end._2) - n }];
  }
  a();
}), Rr = /* @__PURE__ */ fc((t) => {
  const n = t.start._1 - t.end._1;
  return !((n < 0 ? -n < 1e-6 : n < 1e-6) && (() => {
    const e = t.start._2 - t.end._2;
    return e < 0 ? -e < 1e-6 : e < 1e-6;
  })());
}), pd = (t) => (n) => (e) => {
  const r = Wt((o) => y, (o) => (i) => b("Just", { head: o, tail: i }), n);
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
  a();
}, Fr = (t) => {
  const n = (r) => (o) => {
    const i = Wt((s) => y, (s) => (u) => b("Just", { head: s, tail: u }), o);
    if (i.tag === "Nothing")
      return [r];
    if (i.tag === "Just")
      return (r.direction === "H" ? i._1.head.direction === "H" : r.direction === "V" && i._1.head.direction === "V") && (() => {
        if (r.direction === "H")
          return r.end._1 - r.start._1 >= 0 == i._1.head.end._1 - i._1.head.start._1 >= 0;
        if (r.direction === "V")
          return r.end._2 - r.start._2 >= 0 == i._1.head.end._2 - i._1.head.start._2 >= 0;
        a();
      })() ? n({ start: r.start, end: i._1.head.end, direction: r.direction })(i._1.tail) : [r, ...n(i._1.head)(i._1.tail)];
    a();
  }, e = Wt((r) => y, (r) => (o) => b("Just", { head: r, tail: o }), t);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return n(e._1.head)(e._1.tail);
  a();
}, Nr = (t) => (n) => (e) => (r) => ga((o) => e >= o.y && e < o.y + o.h && n > o.x && t < o.x + o.w)(r), kr = (t) => (n) => (e) => (r) => Nr(rn(n)(e))(on(n)(e))(r)(t), $d = (t) => (n) => (e) => (r) => {
  const o = e + 2 | 0, i = o < 1 ? n : Gt(o, n.length, n), s = e < 1 ? [] : Gt(0, e, n), u = (e + 1 | 0) === (r - 1 | 0), c = e === 0, f = e >= 0 && e < n.length ? b("Just", n[e]) : y;
  if (f.tag === "Just") {
    const g = e + 1 | 0, l = g >= 0 && g < n.length ? b("Just", n[g]) : y;
    if (l.tag === "Just") {
      const d = f._1.start._1 === l._1.end._1 && (!c || f._1.direction === "V") && (!u || l._1.direction === "V") && !Lo(t)(rn(f._1.start._2)(l._1.end._2))(on(f._1.start._2)(l._1.end._2))(f._1.start._1) ? b("Just", [...s, { start: f._1.start, end: l._1.end, direction: Ot }, ...i]) : y, _ = f._1.start._2 === l._1.end._2 && (!c || f._1.direction === "H") && (!u || l._1.direction === "H") && !kr(t)(rn(f._1.start._1)(l._1.end._1))(on(f._1.start._1)(l._1.end._1))(f._1.start._2) ? b("Just", [...s, { start: f._1.start, end: l._1.end, direction: Ht }, ...i]) : y;
      return d.tag === "Nothing" ? _ : d;
    }
    if (l.tag === "Nothing")
      return y;
    a();
  }
  if (f.tag === "Nothing")
    return y;
  a();
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
      const f = $d(t)(n)(c)(e);
      if (f.tag === "Just") {
        s = !1, u = f._1;
        continue;
      }
      if (f.tag === "Nothing") {
        i = c + 1 | 0;
        continue;
      }
      a();
    }
    return u;
  })(0);
}, Nd = (t) => (n) => (e) => (r) => {
  const o = (d, _, h) => !Lo(t)(rn(_)(h))(on(_)(h))(d), i = e + 3 | 0, s = i < 1 ? n : Gt(i, n.length, n), u = e < 1 ? [] : Gt(0, e, n), c = (e + 2 | 0) === (r - 1 | 0), f = e === 0, g = (d, _, h) => !kr(t)(rn(_)(h))(on(_)(h))(d), l = e >= 0 && e < n.length ? b("Just", n[e]) : y;
  if (l.tag === "Just") {
    const d = e + 2 | 0, _ = d >= 0 && d < n.length ? b("Just", n[d]) : y;
    if (_.tag === "Just") {
      const h = l._1.start._1 === _._1.end._1 && (!f || l._1.direction === "V") && (!c || _._1.direction === "V") && o(l._1.start._1, l._1.start._2, _._1.end._2) ? b("Just", [...u, { start: l._1.start, end: _._1.end, direction: Ot }, ...s]) : l._1.start._2 === _._1.end._2 && (!f || l._1.direction === "H") && (!c || _._1.direction === "H") && g(l._1.start._2, l._1.start._1, _._1.end._1) ? b("Just", [...u, { start: l._1.start, end: _._1.end, direction: Ht }, ...s]) : y, p = (!f || l._1.direction === "V") && (!c || _._1.direction === "H") && o(l._1.start._1, l._1.start._2, _._1.end._2) && g(
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
      ) : y, $ = (!f || l._1.direction === "H") && (!c || _._1.direction === "V") && g(l._1.start._2, l._1.start._1, _._1.end._1) && o(
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
      ) : y, m = p.tag === "Nothing" ? $ : p;
      return h.tag === "Nothing" ? m : h;
    }
    if (_.tag === "Nothing")
      return y;
    a();
  }
  if (l.tag === "Nothing")
    return y;
  a();
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
      const f = Nd(t)(n)(c)(e);
      if (f.tag === "Just") {
        s = !1, u = f._1;
        continue;
      }
      if (f.tag === "Nothing") {
        i = c + 1 | 0;
        continue;
      }
      a();
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
    const c = Lt((f) => (g) => pt.compare(f.x)(g.x))(s);
    return 0 < c.length ? c[0].x - 1 : (e + r) / 2;
  }
  const u = Lt((c) => (f) => pt.compare(f.x)(c.x))(O((c) => ({ ...c, x: c.x + c.w }))(s));
  return 0 < u.length ? u[0].x + 1 : (e + r) / 2;
}, yd = (t) => (n) => (e) => (r) => {
  const o = rn(e)(r), i = on(e)(r), s = gt((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = Lt((f) => (g) => pt.compare(f.y)(g.y))(s);
    return 0 < c.length ? c[0].y - 1 : (e + r) / 2;
  }
  const u = Lt((c) => (f) => pt.compare(f.y)(c.y))(O((c) => ({ ...c, y: c.y + c.h }))(s));
  return 0 < u.length ? u[0].y + 1 : (e + r) / 2;
}, wd = (t) => (n) => (e) => (r) => {
  const o = rn(e)(r), i = on(e)(r), s = gt((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = Lt((f) => (g) => pt.compare(g.x)(f.x))(O((f) => ({ ...f, x: f.x + f.w }))(s));
    return 0 < c.length ? c[0].x : (e + r) / 2;
  }
  const u = Lt((c) => (f) => pt.compare(c.x)(f.x))(s);
  return 0 < u.length ? u[0].x - 1 : (e + r) / 2;
}, Ld = (t) => (n) => (e) => (r) => {
  const o = rn(e)(r), i = on(e)(r), s = gt((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = Lt((f) => (g) => pt.compare(g.y)(f.y))(O((f) => ({ ...f, y: f.y + f.h }))(s));
    return 0 < c.length ? c[0].y : (e + r) / 2;
  }
  const u = Lt((c) => (f) => pt.compare(c.y)(f.y))(s);
  return 0 < u.length ? u[0].y - 1 : (e + r) / 2;
}, _a = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const c = r, f = o, g = i;
    if (g > 100) {
      s = !1, u = f;
      continue;
    }
    if (!c(f + g)) {
      s = !1, u = f + g;
      continue;
    }
    if (!c(f - g)) {
      s = !1, u = f - g;
      continue;
    }
    r = c, o = f, i = g + 1;
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
  const o = rn(n)(e), i = on(n)(e), s = gt((f) => r >= f.x && r < f.x + f.w && f.y + f.h > o && f.y < i, t), u = J((f) => (g) => on(f)(g.x + g.w + 4))(r + 4)(s), c = J((f) => (g) => rn(f)(g.x - 4))(r - 4)(s);
  return (() => {
    const f = u - r, g = c - r;
    return (f < 0 ? -f : f) <= (g < 0 ? -g : g);
  })() ? u : c;
}, Ed = (t) => (n) => (e) => (r) => {
  const o = rn(n)(e), i = on(n)(e), s = gt((f) => r >= f.y && r < f.y + f.h && f.x + f.w > o && f.x < i, t), u = J((f) => (g) => on(f)(g.y + g.h + 4))(r + 4)(s), c = J((f) => (g) => rn(f)(g.y - 4))(r - 4)(s);
  return (() => {
    const f = u - r, g = c - r;
    return (f < 0 ? -f : f) <= (g < 0 ? -g : g);
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
    a();
  })(), c = (() => {
    if (i === "South")
      return L(s._1, s._2 + 4);
    if (i === "North")
      return L(s._1, s._2 - 4);
    if (i === "East")
      return L(s._1 + 4, s._2);
    if (i === "West")
      return L(s._1 - 4, s._2);
    a();
  })(), f = (w, k, E) => !Lo(n)(rn(k)(E))(on(k)(E))(w), g = (w, k, E) => !Lo(e)(rn(k)(E))(on(k)(E))(w), l = (w, k, E, I) => t.tag === "Just" && !kr(e)(rn(w)(k))(on(w)(k))(t._1) ? t._1 : kd(n)(w)(k)(E)(I), d = (w, k, E, I) => {
    if (w === E) {
      const z = bd(n)(k)(I)(w), M = yd(n)(w)(k)(I), P = Ld(n)(w)(k)(I);
      return [
        { start: L(w, k), end: L(w, M), direction: Ot },
        { start: L(w, M), end: L(z, M), direction: Ht },
        { start: L(z, M), end: L(z, P), direction: Ot },
        { start: L(z, P), end: L(E, P), direction: Ht },
        { start: L(E, P), end: L(E, I), direction: Ot }
      ];
    }
    const W = l(w, E, k, I);
    return [
      { start: L(w, k), end: L(w, W), direction: Ot },
      { start: L(w, W), end: L(E, W), direction: Ht },
      { start: L(E, W), end: L(E, I), direction: Ot }
    ];
  }, _ = (w, k, E, I) => {
    if (k === I) {
      const z = Ed(n)(w)(E)(k), M = Td(n)(k)(w)(E), P = wd(n)(k)(w)(E);
      return [
        { start: L(w, k), end: L(M, k), direction: Ht },
        { start: L(M, k), end: L(M, z), direction: Ot },
        { start: L(M, z), end: L(P, z), direction: Ht },
        { start: L(P, z), end: L(P, I), direction: Ot },
        { start: L(P, I), end: L(E, I), direction: Ht }
      ];
    }
    const W = vu(n)(k)(I)(w)(E);
    return [
      { start: L(w, k), end: L(W, k), direction: Ht },
      { start: L(W, k), end: L(W, I), direction: Ot },
      { start: L(W, I), end: L(E, I), direction: Ht }
    ];
  }, h = (w, k, E) => !kr(n)(rn(k)(E))(on(k)(E))(w), p = (w, k, E) => !kr(e)(rn(k)(E))(on(k)(E))(w), $ = (w, k, E, I) => {
    if (p(k, w, E) && g(E, k, I))
      return [
        { start: L(w, k), end: L(E, k), direction: Ht },
        { start: L(E, k), end: L(E, I), direction: Ot }
      ];
    const W = vu(n)(k)(I)(w)(E);
    return [
      { start: L(w, k), end: L(W, k), direction: Ht },
      { start: L(W, k), end: L(W, I), direction: Ot },
      { start: L(W, I), end: L(E, I), direction: Ht }
    ];
  }, m = (w, k, E, I) => {
    if (g(w, k, I) && p(I, w, E))
      return [
        { start: L(w, k), end: L(w, I), direction: Ot },
        { start: L(w, I), end: L(E, I), direction: Ht }
      ];
    const W = l(w, E, k, I);
    return [
      { start: L(w, k), end: L(w, W), direction: Ot },
      { start: L(w, W), end: L(E, W), direction: Ht },
      { start: L(E, W), end: L(E, I), direction: Ot }
    ];
  }, N = (() => {
    if (r === "South")
      return i === "North" ? u._1 === c._1 && f(u._1, u._2, c._2) ? [{ start: L(u._1, u._2), end: L(c._1, c._2), direction: Ot }] : d(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? m(u._1, u._2, c._1, c._2) : d(u._1, u._2, c._1, c._2);
    if (r === "North")
      return i === "South" ? u._1 === c._1 && f(u._1, u._2, c._2) ? [{ start: L(u._1, u._2), end: L(c._1, c._2), direction: Ot }] : d(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? m(u._1, u._2, c._1, c._2) : d(u._1, u._2, c._1, c._2);
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
    a();
  })(), T = {
    start: L(c._1, c._2),
    end: L(s._1, s._2),
    direction: (() => {
      if (i === "South" || i === "North")
        return Ot;
      if (i === "East" || i === "West")
        return Ht;
      a();
    })()
  };
  return u._1 === c._1 && u._2 === c._2 ? [{ start: L(o._1, o._2), end: L(s._1, s._2), direction: v }] : pd({ start: L(o._1, o._2), end: L(u._1, u._2), direction: v })(N)(T);
}, Cd = /* @__PURE__ */ O((t) => ({ x: t.position._1 * io - 2, y: t.position._2 * io - 2, w: t.size._1 * io + 4, h: t.size._2 * io + 4 })), ko = /* @__PURE__ */ jt(G)(Bt), se = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, _i = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, Sd = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
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
  a();
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
  a();
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
    a();
  })() && (() => {
    if (n === "East")
      return e._1 > r._1;
    if (n === "West" || n === "North")
      return e._1 < r._1;
    if (n === "South")
      return e._1 > r._1;
    a();
  })(), i = (t === "East" || t === "West") && (n === "North" || n === "South") && (() => {
    if (t === "South")
      return r._1 > e._1;
    if (t === "North")
      return r._1 < e._1;
    if (t === "East")
      return r._1 > e._1;
    if (t === "West")
      return r._1 < e._1;
    a();
  })() && (() => {
    if (n === "East")
      return e._2 > r._2;
    if (n === "West" || n === "North")
      return e._2 < r._2;
    if (n === "South")
      return e._2 > r._2;
    a();
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
        a();
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
          a();
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
    a();
  }, f = ko(bt(r)((_) => {
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
      a();
    }
    return [];
  })), g = (_) => {
    const h = se(_.from.node)(u), p = se(_.to.node)(u);
    if (h.tag === "Just" && p.tag === "Just") {
      const $ = h._1, m = p._1, N = Lt((v) => (T) => rt.compare(v.score)(T.score))(O((v) => {
        const T = v._1, w = v._2;
        return {
          from: T,
          to: w,
          score: (() => {
            const k = (z, M, P, R, j) => {
              const et = li(z)(M), X = li(z)(P);
              return et.lo < X.hi && X.lo < et.hi && (T === "South" ? w === "North" && j._2 > R._2 : T === "North" ? w === "South" && j._2 < R._2 : T === "East" ? w === "West" && j._1 > R._1 : T === "West" && w === "East" && j._1 < R._1) ? 0 : wu(T)(w)(R)(j);
            }, E = Tu(T)($), I = Tu(w)(m), W = wu(T)(w)(E)(I);
            return (() => {
              if (W > 0) {
                if (T === "South")
                  return w === "North" ? k(cn, $, m, E, I) * 10 | 0 : W * 10 | 0;
                if (T === "North")
                  return w === "South" ? k(un, $, m, E, I) * 10 | 0 : W * 10 | 0;
                if (T === "East")
                  return w === "West" ? k(Kn, $, m, E, I) * 10 | 0 : W * 10 | 0;
                if (T === "West" && w === "East")
                  return k(xe, $, m, E, I) * 10 | 0;
              }
              return W * 10 | 0;
            })() + (T === "South" ? w === "North" ? 0 : 15 : T === "North" ? w === "South" ? 0 : 15 : T === "East" ? w === "West" ? 5 : 15 : T === "West" && w === "East" ? 5 : 15) | 0;
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
    const v = ct(4), T = se(h)(u);
    if (T.tag === "Nothing")
      return L(0, 0);
    if (T.tag === "Just") {
      const w = Sd(L(p, _))(o);
      if (w.tag === "Just") {
        const k = T._1.position._1 * v + w._1, E = ct(4);
        if (_ === "South")
          return L(k, (T._1.position._2 + T._1.size._2) * E);
        if (_ === "North")
          return L(k, T._1.position._2 * E);
        if (_ === "East")
          return L((T._1.position._1 + T._1.size._1) * E, k);
        if (_ === "West")
          return L(T._1.position._1 * E, k);
        a();
      }
      if (w.tag === "Nothing") {
        const k = li(_)(T._1), E = (k.lo + k.hi) / 2, I = _i(p)(la(k)(O((M) => M.id)(Lt((M) => (P) => pt.compare(m(_)(M))(m(_)(P)))(gt(
          (M) => {
            const P = _i(M.id)(l);
            if (P.tag === "Just") {
              const R = N(P._1);
              return R === "North" ? _ === "North" : R === "South" ? _ === "South" : R === "East" ? _ === "East" : R === "West" && _ === "West";
            }
            if (P.tag === "Nothing")
              return !0;
            a();
          },
          (() => {
            const M = se(h)($);
            if (M.tag === "Nothing")
              return [];
            if (M.tag === "Just")
              return M._1;
            a();
          })()
        ))))), W = (() => {
          if (I.tag === "Nothing")
            return E;
          if (I.tag === "Just")
            return I._1;
          a();
        })(), z = ct(4);
        if (_ === "South")
          return L(W, (T._1.position._2 + T._1.size._2) * z);
        if (_ === "North")
          return L(W, T._1.position._2 * z);
        if (_ === "East")
          return L((T._1.position._1 + T._1.size._1) * z, W);
        if (_ === "West")
          return L(T._1.position._1 * z, W);
      }
    }
    a();
  };
  return O((_) => {
    const h = _i(_.edge.id)(f);
    if (h.tag === "Nothing")
      return _;
    if (h.tag === "Just")
      return {
        ..._,
        fromPos: _n(3)(_.edge.from.node) === "$d:" ? L(h._1, _.fromPos._2) : _.fromPos,
        toPos: _n(3)(_.edge.to.node) === "$d:" ? L(h._1, _.toPos._2) : _.toPos
      };
    a();
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
          a();
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
          a();
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
      o = !1, i = y;
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
    a();
  }
  return i;
}, je = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
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
      return y;
    a();
  }
  if (e.tag === "Nothing")
    return y;
  a();
}, Pd = (t) => (n) => {
  const e = J((r) => (o) => Y(G)(o.node)(o)(r))(Q)(n);
  return Cn(Pt((r) => (o) => {
    const i = je(o.node)(e);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just") {
      const s = i._1;
      return Pt((u) => (c) => {
        const f = o.edges.length, g = ct(4), l = s.position._1 * g, d = s.position._2 * g, _ = s.size._2 * g, h = ct((2 * f | 0) + 1 | 0), p = d + _ * ct(f - u | 0) / h, $ = d + _ * ct((f + 1 | 0) + u | 0) / h, m = l - g * 2.5 * ct(u + 1 | 0), N = [
          { start: L(l, p), end: L(m, p), direction: Ht },
          { start: L(m, p), end: L(m, $), direction: Ot },
          { start: L(m, $), end: L(l, $), direction: Ht }
        ];
        return { edge: c.id, segments: N, bends: $n((v) => (T) => v.end, N, Gt(1, 3, N)), bendType: [], jumps: [], reversed: !1 };
      })(o.edges);
    }
    a();
  })(O((r) => ({ node: r._1, edges: r._2 }))(Gd(J((r) => (o) => yt(G)(fn)(o.from.node)([
    o
  ])(r))(Q)(t)))));
}, Ad = (t) => (n) => {
  const e = J((i) => (s) => Y(G)(s.node)(s)(i))(Q)(n), r = (i) => {
    const s = je(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.position._1;
    a();
  }, o = (i) => {
    const s = je(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.layer;
    a();
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
  const r = je(t.edge.from.node)(e);
  if (r.tag === "Just") {
    const i = je(t.edge.to.node)(e);
    return i.tag === "Just" ? gt(
      (s) => !(s.h === Nn(r._1).h && s.w === Nn(r._1).w && s.x === Nn(r._1).x && s.y === Nn(r._1).y) && !(s.h === Nn(i._1).h && s.w === Nn(i._1).w && s.x === Nn(i._1).x && s.y === Nn(i._1).y),
      n
    ) : gt((s) => !(s.h === Nn(r._1).h && s.w === Nn(r._1).w && s.x === Nn(r._1).x && s.y === Nn(r._1).y), n);
  }
  const o = je(t.edge.to.node)(e);
  return o.tag === "Just" ? gt((i) => !(i.h === Nn(o._1).h && i.w === Nn(o._1).w && i.x === Nn(o._1).x && i.y === Nn(o._1).y), n) : gt((i) => !0, n);
}, Dd = (t) => (n) => {
  const e = ha(n.edge.id)(t);
  if (e.tag === "Just")
    return b("Just", Ai(e._1)(e._1.slot));
  if (e.tag === "Nothing")
    return y;
  a();
}, Wd = (t) => (n) => (e) => (r) => (o) => {
  const i = J((f) => (g) => Y(G)(g.node)(g)(f))(Q)(n), s = Cd(n), u = da(gt((f) => f.from.node !== f.to.node, t))(n)(e)(r)(o), c = fa(u)(n);
  return [
    ...Pd(gt(Rd, t))(n),
    ...J((f) => (g) => {
      const l = Qd(g)(s)(i), d = [...l, ...f.edgeObstacles], _ = Id(c)(g), h = (() => {
        if (_.tag === "Just")
          return Bd(_._1)(l)(d)(g);
        if (_.tag === "Nothing")
          return Fd(Dd(c)(g))(l)(d)(g);
        a();
      })();
      return { results: [...f.results, h], edgeObstacles: [...f.edgeObstacles, ...hd(h.segments)] };
    })({ results: [], edgeObstacles: [] })(Ad(u)(n)).results
  ];
}, Je = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, ve = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, qd = (t) => (n) => (e) => {
  if (t.start._1 !== n.start._1)
    return y;
  const r = ve(Je(t.start._2)(t.end._2))(Je(n.start._2)(n.end._2)), o = Je(ve(t.start._2)(t.end._2))(ve(n.start._2)(n.end._2));
  return r < o ? b("Just", { position: L(t.start._1, (r + o) / 2), crossingEdge: e }) : y;
}, Hd = (t) => (n) => (e) => {
  if (t.start._2 !== n.start._2)
    return y;
  const r = ve(Je(t.start._1)(t.end._1))(Je(n.start._1)(n.end._1)), o = Je(ve(t.start._1)(t.end._1))(ve(n.start._1)(n.end._1));
  return r < o ? b("Just", { position: L((r + o) / 2, t.start._2), crossingEdge: e }) : y;
}, Od = (t) => (n) => (e) => {
  if (t.direction === "H")
    return Hd(t)(n)(e);
  if (t.direction === "V")
    return qd(t)(n)(e);
  a();
}, zd = (t) => (n) => (e) => {
  const r = t + 1 | 0, o = r < 1 ? e : Gt(r, e.length, e);
  return bt(n.segments)((i) => bt(o)((s) => vt((u) => Od(i)(u)(s.edge))(gt(
    (u) => u.direction === "H" ? i.direction === "H" : u.direction === "V" && i.direction === "V",
    s.segments
  ))));
}, Vd = (t) => (n) => (e) => n.start._1 > Je(t.start._1)(t.end._1) && n.start._1 < ve(t.start._1)(t.end._1) && t.start._2 > Je(n.start._2)(n.end._2) && t.start._2 < ve(n.start._2)(n.end._2) ? b("Just", { position: L(n.start._1, t.start._2), crossingEdge: e }) : y, Yd = (t) => (n) => bt(gt((e) => e.direction === "H", t.segments))((e) => bt(n)((r) => vt((o) => Vd(e)(o)(r.edge))(gt(
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
      o = !1, i = y;
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
    a();
  }
  return i;
}, pa = (t) => _n(3)(t) === "$d:", Ud = (t) => (n) => (e) => J((r) => (o) => {
  const i = Lu(o.from.node)(t), s = (() => {
    if (i.tag === "Nothing")
      return 0;
    if (i.tag === "Just")
      return i._1;
    a();
  })(), u = Lu(o.to.node)(t), c = (() => {
    if (u.tag === "Nothing")
      return -s;
    if (u.tag === "Just")
      return u._1 - s | 0;
    a();
  })();
  if (c <= 1)
    return { ...r, edges: [...r.edges, o], chains: [...r.chains, { edgeId: o.id, nodes: [o.from.node, o.to.node] }] };
  const f = o.id, g = O((d) => "$d:" + f + ":" + an(d))(Yt(1, c - 1 | 0)), l = [o.from.node, ...g, o.to.node];
  return {
    ...r,
    layers: J((d) => (_) => {
      const h = _._2, p = _g(s + _._1 | 0)(($) => [...$, h])(d);
      if (p.tag === "Nothing")
        return d;
      if (p.tag === "Just")
        return p._1;
      a();
    })(r.layers)($n(fr, Yt(1, c - 1 | 0), g)),
    edges: [
      ...r.edges,
      ...$n(
        (d) => (_) => ({ id: f + ":" + d + "->" + _, from: { node: d, port: o.from.port }, to: { node: _, port: o.to.port } }),
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
      a();
    },
    Eq0: () => t
  };
})(), Md = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, Kd = /* @__PURE__ */ jt(G)(Bt), di = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, jd = /* @__PURE__ */ jt(bo)(Bt), ku = /* @__PURE__ */ (() => {
  const t = On.unfoldr(De);
  return (n) => t(Wn("IterNode", n, Qe));
})(), Ze = (t) => (n) => (e) => (r) => {
  const o = Md(L(n, e))(t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just")
    return o._1;
  a();
}, $a = (t) => (n) => (e) => {
  const r = Kd(Cn(O((s) => Pt((u) => (c) => L(c, u))(s))(t))), o = (s, u) => {
    if (s === "South") {
      const c = di(u.to.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      a();
    }
    if (s === "North") {
      const c = di(u.from.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      a();
    }
    return 0;
  }, i = (s) => J((u) => (c) => bn(
    bo.compare,
    Ln,
    jd(O((f) => L(L(f._1, s), f._2))(ku(la({
      lo: 0,
      hi: (() => {
        const f = di(c._1)(e);
        if (f.tag === "Just")
          return f._1._1;
        if (f.tag === "Nothing")
          return _n(3)(c._1) === "$d:" ? 0 : 1;
        a();
      })()
    })(O((f) => f.id)(Lt((f) => (g) => rt.compare(o(s, f))(o(s, g)))(c._2)))))),
    u
  ))(Q)(ku(J((u) => (c) => c.from.node === c.to.node ? u : s === "South" ? yt(G)(fn)(c.from.node)([c])(u) : s === "North" ? yt(G)(fn)(c.to.node)([c])(u) : u)(Q)(n)));
  return bn(bo.compare, Ln, i(un), i(cn));
}, ma = (t) => t, Na = (t) => t, Ja = (t) => t, Zd = /* @__PURE__ */ J((t) => (n) => Y(G)(n)()(t))(Q), th = /* @__PURE__ */ (() => {
  const t = On.unfoldr((n) => {
    if (n.tag === "Nil")
      return y;
    if (n.tag === "Cons")
      return b("Just", L(n._1, n._2));
    a();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, qt("Cons", r._3, e(r._6, o)));
      a();
    };
    return e(n, zt);
  })());
})(), Z = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, Sn = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, ne = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, jn = /* @__PURE__ */ jt(G)(Bt), hi = /* @__PURE__ */ kg(G), Ri = /* @__PURE__ */ (() => {
  const t = On.unfoldr(De);
  return (n) => t(Wn("IterNode", n, Qe));
})(), nh = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, eh = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
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
    a();
  }
  return i;
}, ih = (t) => (n) => (e) => {
  const r = J((u) => (c) => yt(G)(Zt)(c.tgt)(1)(u))(Q)(t), o = th(Zd([
    ...O((u) => u.src)(t),
    ...O((u) => u.tgt)(t),
    ...(() => {
      const u = (c, f) => {
        if (c.tag === "Leaf")
          return f;
        if (c.tag === "Node")
          return u(c._5, qt("Cons", c._4, u(c._6, f)));
        a();
      };
      return Et(Ut.foldr, u(n, zt));
    })()
  ])), i = J((u) => (c) => yt(G)(fn)(c.src)([{ target: c.tgt, sep: c.sep }])(u))(Q)(t);
  return ((u) => (c) => (f) => {
    let g = u, l = c, d = f, _ = !0, h;
    for (; _; ) {
      const p = g, $ = l, m = d, N = Wt((v) => y, (v) => (T) => b("Just", { head: v, tail: T }), p);
      if (N.tag === "Nothing") {
        _ = !1, h = m;
        continue;
      }
      if (N.tag === "Just") {
        const v = Z(N._1.head)(m), T = (() => {
          if (v.tag === "Nothing")
            return 0;
          if (v.tag === "Just")
            return v._1;
          a();
        })(), w = J((k) => (E) => {
          const I = Z(E.target)(k.result), W = T + E.sep, z = Z(E.target)(k.indeg), M = (() => {
            if (z.tag === "Nothing")
              return -1;
            if (z.tag === "Just")
              return z._1 - 1 | 0;
            a();
          })();
          return {
            newQueue: M === 0 ? [...k.newQueue, E.target] : k.newQueue,
            result: Y(G)(E.target)((() => {
              if (I.tag === "Nothing")
                return W;
              if (I.tag === "Just") {
                if (e === "VDown")
                  return Sn(I._1)(W);
                if (e === "VUp")
                  return ne(I._1)(W);
              }
              a();
            })())(k.result),
            indeg: Y(G)(E.target)(M)(k.indeg)
          };
        })({ newQueue: [], result: m, indeg: $ })((() => {
          const k = Z(N._1.head)(i);
          if (k.tag === "Nothing")
            return [];
          if (k.tag === "Just")
            return k._1;
          a();
        })());
        g = [...N._1.tail, ...w.newQueue], l = w.indeg, d = w.result;
        continue;
      }
      a();
    }
    return h;
  })(gt(
    (u) => {
      const c = Z(u)(r);
      if (c.tag === "Nothing")
        return !0;
      if (c.tag === "Just")
        return c._1 === 0;
      a();
    },
    o
  ))(Q)(J((u) => (c) => Y(G)(c)(0)(u))(Q)(o));
}, sh = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, qt("Cons", i._4, n(i._6, s)));
    a();
  }, e = Et(Ut.foldr, n(t, zt)), r = J(Sn)(999999)(e);
  if (r === 0 || e.length === 0)
    return t;
  const o = (i) => {
    if (i.tag === "Leaf")
      return Q;
    if (i.tag === "Node")
      return Dt("Node", i._1, i._2, i._3, i._4 - r, o(i._5), o(i._6));
    a();
  };
  return o(t);
}, va = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, qt("Cons", i._4, n(i._6, s)));
    a();
  }, e = n(t, zt), r = (i) => (s) => {
    let u = i, c = s, f = !0, g;
    for (; f; ) {
      const l = u, d = c;
      if (d.tag === "Nil") {
        f = !1, g = l;
        continue;
      }
      if (d.tag === "Cons") {
        u = ne(l)(d._1), c = d._2;
        continue;
      }
      a();
    }
    return g;
  }, o = (i) => (s) => {
    let u = i, c = s, f = !0, g;
    for (; f; ) {
      const l = u, d = c;
      if (d.tag === "Nil") {
        f = !1, g = l;
        continue;
      }
      if (d.tag === "Cons") {
        u = Sn(l)(d._1), c = d._2;
        continue;
      }
      a();
    }
    return g;
  };
  return r(-999999)(e) - o(999999)(e);
}, Jr = (t) => (n) => ((r) => (o) => {
  let i = r, s = o, u = !0, c;
  for (; u; ) {
    const f = i, g = s;
    if (f === n) {
      u = !1, c = g;
      continue;
    }
    i = (() => {
      const l = Z(f)(t.align);
      if (l.tag === "Nothing")
        return n;
      if (l.tag === "Just")
        return l._1;
      a();
    })(), s = [...g, f];
  }
  return c;
})((() => {
  const r = Z(n)(t.align);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just")
    return r._1;
  a();
})())([n]), uh = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (f) => (g) => {
  const l = (x, C, q) => {
    const S = x.from.node === C ? x.from.port : x.to.node === C ? x.to.port : y;
    if (S.tag === "Just") {
      const F = Z(C)(o);
      if (F.tag === "Just") {
        const D = ln((K) => K.id === S._1)(F._1);
        if (D.tag === "Just") {
          const K = ct(D._1.offset) * ct(4);
          return q === "North" || q === "South" ? K : 0;
        }
        if (D.tag === "Nothing") {
          const K = Z(C)(r), V = Ze(s)(x.id)(q)((() => {
            if (K.tag === "Nothing")
              return 0.5;
            if (K.tag === "Just")
              return K._1._1 / 2;
            a();
          })());
          return q === "North" || q === "South" ? V : 0;
        }
        a();
      }
      if (F.tag === "Nothing") {
        const D = Z(C)(r), K = Ze(s)(x.id)(q)((() => {
          if (D.tag === "Nothing")
            return 0.5;
          if (D.tag === "Just")
            return D._1._1 / 2;
          a();
        })());
        return q === "North" || q === "South" ? K : 0;
      }
      a();
    }
    if (S.tag === "Nothing") {
      const F = Z(C)(r), D = Ze(s)(x.id)(q)((() => {
        if (F.tag === "Nothing")
          return 0.5;
        if (F.tag === "Just")
          return F._1._1 / 2;
        a();
      })());
      return q === "North" || q === "South" ? D : 0;
    }
    a();
  }, d = (x, C) => {
    if (x.from.node === C) {
      if (g === "HRight")
        return cn;
      if (g === "HLeft")
        return un;
      a();
    }
    if (g === "HRight")
      return un;
    if (g === "HLeft")
      return cn;
    a();
  }, _ = (x, C, q) => J((S) => (F) => Y(G)(F)((() => {
    const D = Z(F)(S);
    if (D.tag === "Nothing")
      return 0 + C;
    if (D.tag === "Just")
      return D._1 + C;
    a();
  })())(S))(q)(Jr(c)(x)), h = (() => {
    if (g === "HRight")
      return e;
    if (g === "HLeft")
      return vn(e);
    a();
  })(), p = (x) => {
    const C = Z(x)(r);
    if (C.tag === "Nothing")
      return 1;
    if (C.tag === "Just")
      return C._1._1;
    a();
  }, $ = jn(Cn(Pt((x) => (C) => O((q) => L(q, x))(C))(e))), m = (x, C) => _n(3)(x) === "$d:" && _n(3)(C) === "$d:" || _n(3)(x) === "$d:" || _n(3)(C) === "$d:" ? 10 : ct(t.nodeGap), N = J((x) => (C) => hi((q) => b(
    "Just",
    [
      ...(() => {
        if (q.tag === "Nothing")
          return [];
        if (q.tag === "Just")
          return q._1;
        a();
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
        a();
      })(),
      C
    ]
  ))(C.from.node)(x))(Q)(i), T = Cn(e), w = J((x) => (C) => {
    const q = Z(C)(c.root), S = (() => {
      if (q.tag === "Nothing")
        return C;
      if (q.tag === "Just")
        return q._1;
      a();
    })();
    return C === S ? x : hi((F) => b(
      "Just",
      (() => {
        if (F.tag === "Nothing")
          return !0;
        if (F.tag === "Just")
          return F._1;
        a();
      })() && _n(3)(C) === "$d:"
    ))(S)(x);
  })(jn(O((x) => L(x, !0))(rr(G.compare)((() => {
    const x = (C, q) => {
      if (C.tag === "Leaf")
        return q;
      if (C.tag === "Node")
        return x(C._5, qt("Cons", C._4, x(C._6, q)));
      a();
    };
    return Et(Ut.foldr, x(c.root, zt));
  })()))))(T), k = (x, C) => {
    const q = x.free, S = Z(q)(c.root), F = (() => {
      if (S.tag === "Nothing")
        return q;
      if (S.tag === "Just")
        return S._1;
      a();
    })(), D = Z(F)(w), K = (() => {
      if (D.tag === "Nothing")
        return !0;
      if (D.tag === "Just")
        return D._1;
      a();
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
                a();
              })() === (() => {
                if (At.tag === "Nothing")
                  return -1;
                if (At.tag === "Just")
                  return At._1;
                a();
              })();
            })();
          })() || (() => {
            if (st.tag === "Nothing")
              return !1;
            if (st.tag === "Just")
              return st._1;
            a();
          })();
        })())
          return V;
        const nt = B.from.node === q ? B.to.node : B.from.node, U = Z(nt)(c.root), tt = (() => {
          if (U.tag === "Nothing")
            return nt;
          if (U.tag === "Just")
            return U._1;
          a();
        })(), ot = tt !== F;
        return ot && (() => {
          const st = Z(tt)(C.blockFinished);
          if (st.tag === "Nothing")
            return !1;
          if (st.tag === "Just")
            return st._1;
          a();
        })() ? { ...V, edge: b("Just", B), hasEdges: !0 } : { ...V, hasEdges: V.hasEdges || ot };
      }
      a();
    })({ edge: y, hasEdges: !1 })((() => {
      if (x.isRoot) {
        if (g === "HRight") {
          const V = Z(q)(N);
          if (V.tag === "Nothing")
            return [];
          if (V.tag === "Just")
            return V._1;
          a();
        }
        if (g === "HLeft") {
          const V = Z(q)(v);
          if (V.tag === "Nothing")
            return [];
          if (V.tag === "Just")
            return V._1;
        }
        a();
      }
      if (g === "HRight") {
        const V = Z(q)(v);
        if (V.tag === "Nothing")
          return [];
        if (V.tag === "Just")
          return V._1;
        a();
      }
      if (g === "HLeft") {
        const V = Z(q)(N);
        if (V.tag === "Nothing")
          return [];
        if (V.tag === "Just")
          return V._1;
      }
      a();
    })());
  }, E = (x, C, q, S) => {
    const F = (() => {
      if (f === "VDown")
        return -1e18;
      if (f === "VUp")
        return 1e18;
      a();
    })(), D = { free: C, isRoot: q }, K = k(D, S);
    if (K.edge.tag === "Nothing")
      return K.hasEdges ? { thresh: F, state: { ...S, queue: [...S.queue, D] } } : { thresh: F, state: S };
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
            a();
          })())(S.x), nt = Z(V)(u), U = Z(C)(u), tt = (() => {
            if (B.tag === "Just")
              return B._1;
            if (B.tag === "Nothing")
              return y;
            a();
          })();
          return (() => {
            if (tt.tag === "Nothing")
              return 0;
            if (tt.tag === "Just")
              return tt._1;
            a();
          })() + (() => {
            if (nt.tag === "Nothing")
              return 0;
            if (nt.tag === "Just")
              return nt._1;
            a();
          })() + l(
            K.edge._1,
            V,
            (() => {
              if (q) {
                if (g === "HRight")
                  return cn;
                if (g === "HLeft")
                  return un;
                a();
              }
              if (g === "HRight")
                return un;
              if (g === "HLeft")
                return cn;
              a();
            })()
          ) - (() => {
            if (U.tag === "Nothing")
              return 0;
            if (U.tag === "Just")
              return U._1;
            a();
          })() - l(
            K.edge._1,
            C,
            (() => {
              if (q) {
                if (g === "HRight")
                  return un;
                if (g === "HLeft")
                  return cn;
                a();
              }
              if (g === "HRight")
                return cn;
              if (g === "HLeft")
                return un;
              a();
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
            a();
          })())(!0)(Y(G)((() => {
            const B = Z(K.edge._1.to.node)(c.root);
            if (B.tag === "Nothing")
              return K.edge._1.to.node;
            if (B.tag === "Just")
              return B._1;
            a();
          })())(!0)(S.su))
        }
      };
    }
    a();
  }, I = (x, C, q, S) => {
    const F = C === x, D = Z(C)(c.align), K = (() => {
      if (D.tag === "Nothing")
        return C === x;
      if (D.tag === "Just")
        return D._1 === x;
      a();
    })();
    if (!(F || K))
      return { thresh: q, state: S };
    const V = (() => {
      if (f === "VDown")
        return F && q <= -1e18;
      if (f === "VUp")
        return F && q >= 1e18;
      a();
    })() ? E(x, C, !0, S) : { thresh: q, state: S };
    return (() => {
      if (f === "VDown")
        return V.thresh <= -1e18 && K;
      if (f === "VUp")
        return V.thresh >= 1e18 && K;
      a();
    })() ? E(x, C, !1, V.state) : V;
  }, W = (x) => (C) => (q) => {
    const S = Z(q)(n.nodeIndex), F = (() => {
      if (S.tag === "Nothing")
        return 0;
      if (S.tag === "Just")
        return S._1;
      a();
    })(), D = ln((U) => In(te)(q)(U))(h), K = (() => {
      if (D.tag === "Nothing")
        return [];
      if (D.tag === "Just")
        return D._1;
      a();
    })(), V = K.length;
    if ((() => {
      if (f === "VDown")
        return F <= 0;
      if (f === "VUp")
        return F >= (V - 1 | 0);
      a();
    })()) {
      const U = I(x, q, C.thresh, C.st);
      return { ...C, st: U.state, thresh: U.thresh };
    }
    const B = (() => {
      if (f === "VDown")
        return F - 1 | 0;
      if (f === "VUp")
        return F + 1 | 0;
      a();
    })(), nt = B >= 0 && B < K.length ? b("Just", K[B]) : y;
    if (nt.tag === "Nothing")
      return C;
    if (nt.tag === "Just") {
      const U = Z(nt._1)(c.root), tt = (() => {
        if (U.tag === "Nothing")
          return nt._1;
        if (U.tag === "Just")
          return U._1;
        a();
      })(), ot = I(x, q, C.thresh, z(tt)(C.st)), st = (() => {
        const tn = Z(x)(ot.state.sink);
        if (tn.tag === "Nothing")
          return x === x;
        if (tn.tag === "Just")
          return tn._1 === x;
        a();
      })() ? {
        ...ot.state,
        sink: Y(G)(x)((() => {
          const tn = Z(tt)(ot.state.sink);
          if (tn.tag === "Nothing")
            return tt;
          if (tn.tag === "Just")
            return tn._1;
          a();
        })())(ot.state.sink)
      } : ot.state, _t = Z(tt)(st.sink), At = (() => {
        if (_t.tag === "Nothing")
          return tt;
        if (_t.tag === "Just")
          return _t._1;
        a();
      })(), Tt = Z(x)(st.sink), Vt = (() => {
        if (Tt.tag === "Nothing")
          return x;
        if (Tt.tag === "Just")
          return Tt._1;
        a();
      })();
      if (Vt === At) {
        const tn = Z(tt)(st.x), zn = (() => {
          if (tn.tag === "Just")
            return tn._1;
          if (tn.tag === "Nothing")
            return y;
          a();
        })(), qe = (() => {
          if (zn.tag === "Nothing")
            return 0;
          if (zn.tag === "Just")
            return zn._1;
          a();
        })(), ke = Z(x)(st.x), oe = (() => {
          if (ke.tag === "Just")
            return ke._1;
          if (ke.tag === "Nothing")
            return y;
          a();
        })(), Ct = (() => {
          if (oe.tag === "Nothing")
            return 0;
          if (oe.tag === "Just")
            return oe._1;
          a();
        })(), St = m(q, nt._1), be = Z(nt._1)(u), Ee = Z(q)(u), He = (() => {
          if (be.tag === "Nothing")
            return 0;
          if (be.tag === "Just")
            return be._1;
          a();
        })() - (() => {
          if (Ee.tag === "Nothing")
            return 0;
          if (Ee.tag === "Just")
            return Ee._1;
          a();
        })();
        if (f === "VDown") {
          const ie = ne(qe + He + p(nt._1) + St)(ot.thresh);
          return {
            st: { ...st, x: Y(G)(x)(b("Just", C.initial ? ie : ne(Ct)(ie)))(st.x) },
            initial: !1,
            thresh: ot.thresh
          };
        }
        if (f === "VUp") {
          const ie = Sn(qe + He - St - p(q))(ot.thresh);
          return {
            st: { ...st, x: Y(G)(x)(b("Just", C.initial ? ie : Sn(Ct)(ie)))(st.x) },
            initial: !1,
            thresh: ot.thresh
          };
        }
        a();
      }
      const ht = Z(tt)(st.x), mt = (() => {
        if (ht.tag === "Just")
          return ht._1;
        if (ht.tag === "Nothing")
          return y;
        a();
      })(), lt = (() => {
        if (mt.tag === "Nothing")
          return 0;
        if (mt.tag === "Just")
          return mt._1;
        a();
      })(), dt = Z(x)(st.x), it = (() => {
        if (dt.tag === "Just")
          return dt._1;
        if (dt.tag === "Nothing")
          return y;
        a();
      })(), ut = (() => {
        if (it.tag === "Nothing")
          return 0;
        if (it.tag === "Just")
          return it._1;
        a();
      })(), $t = ct(t.nodeGap), Nt = Z(q)(u), Rt = Z(nt._1)(u), It = (() => {
        if (Nt.tag === "Nothing")
          return 0;
        if (Nt.tag === "Just")
          return Nt._1;
        a();
      })() - (() => {
        if (Rt.tag === "Nothing")
          return 0;
        if (Rt.tag === "Just")
          return Rt._1;
        a();
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
                if (f === "VDown")
                  return ut + It - lt - p(nt._1) - $t;
                if (f === "VUp")
                  return ut + It + p(q) + $t - lt;
                a();
              })()
            }
          ]
        },
        initial: C.initial,
        thresh: ot.thresh
      };
    }
    a();
  }, z = (x) => (C) => {
    const q = Z(x)(C.x), S = (() => {
      if (q.tag === "Just")
        return q._1;
      if (q.tag === "Nothing")
        return y;
      a();
    })();
    if (S.tag === "Just")
      return C;
    if (S.tag === "Nothing") {
      const F = J(W(x))({
        st: { ...C, x: Y(G)(x)(b("Just", 0))(C.x) },
        initial: !0,
        thresh: (() => {
          if (f === "VDown")
            return -1e18;
          if (f === "VUp")
            return 1e18;
          a();
        })()
      })(Jr(c)(x));
      return { ...F.st, blockFinished: Y(G)(x)(!0)(F.st.blockFinished) };
    }
    a();
  }, M = J((x) => (C) => J((q) => (S) => {
    const F = Z(S)(c.root), D = (() => {
      if (F.tag === "Nothing")
        return S;
      if (F.tag === "Just")
        return F._1;
      a();
    })();
    return D === S ? z(D)(q) : q;
  })(x)((() => {
    if (f === "VDown")
      return C;
    if (f === "VUp")
      return vn(C);
    a();
  })()))({
    x: jn(O((x) => L(x, y))(T)),
    sink: jn(O((x) => L(x, x))(T)),
    classEdges: [],
    su: Q,
    blockFinished: Q,
    queue: []
  })(h), P = ih(M.classEdges)(M.sink)(f), R = (x, C, q, S) => {
    const F = Z(C)(S), D = Z(C)(u);
    return (() => {
      if (F.tag === "Nothing")
        return 0;
      if (F.tag === "Just")
        return F._1;
      a();
    })() + (() => {
      if (D.tag === "Nothing")
        return 0;
      if (D.tag === "Just")
        return D._1;
      a();
    })() + l(x, C, q);
  }, j = jn(O((x) => L(x, !0))(rr(G.compare)((() => {
    const x = (C, q) => {
      if (C.tag === "Leaf")
        return q;
      if (C.tag === "Node")
        return x(C._5, qt("Cons", C._4, x(C._6, q)));
      a();
    };
    return Et(Ut.foldr, x(c.root, zt));
  })()))), et = (x) => (C) => (q) => {
    const S = k(q, { su: C.su, blockFinished: j }), F = {
      phase: x,
      ppFree: q.free,
      ppIsRoot: q.isRoot,
      edgeId: y,
      delta: 0,
      avail: 0,
      shift: 0,
      freeSu: (() => {
        const D = Z((() => {
          const K = Z(q.free)(c.root);
          if (K.tag === "Nothing")
            return q.free;
          if (K.tag === "Just")
            return K._1;
          a();
        })())(C.su);
        if (D.tag === "Nothing")
          return !1;
        if (D.tag === "Just")
          return D._1;
        a();
      })(),
      hasEdges: S.hasEdges,
      candCount: (() => {
        if (q.isRoot) {
          if (g === "HRight") {
            const D = Z(q.free)(N);
            if (D.tag === "Nothing")
              return 0;
            if (D.tag === "Just")
              return D._1.length;
            a();
          }
          if (g === "HLeft") {
            const D = Z(q.free)(v);
            if (D.tag === "Nothing")
              return 0;
            if (D.tag === "Just")
              return D._1.length;
          }
          a();
        }
        if (g === "HRight") {
          const D = Z(q.free)(v);
          if (D.tag === "Nothing")
            return 0;
          if (D.tag === "Just")
            return D._1.length;
          a();
        }
        if (g === "HLeft") {
          const D = Z(q.free)(N);
          if (D.tag === "Nothing")
            return 0;
          if (D.tag === "Just")
            return D._1.length;
        }
        a();
      })()
    };
    if (S.edge.tag === "Nothing")
      return { ...C, stack: [...C.stack, q], trace: [...C.trace, F], x: C.x };
    if (S.edge.tag === "Just") {
      const D = S.edge._1.from.node === q.free ? L(S.edge._1.from.node, S.edge._1.to.node) : L(S.edge._1.to.node, S.edge._1.from.node), K = R(S.edge._1, D._1, d(S.edge._1, D._1), C.x) - R(S.edge._1, D._2, d(S.edge._1, D._2), C.x), V = Z(D._1)(c.root), B = (() => {
        if (V.tag === "Nothing")
          return D._1;
        if (V.tag === "Just")
          return V._1;
        a();
      })(), nt = { ...F, edgeId: b("Just", S.edge._1.id), delta: K };
      if (K > 0 && K < 1e300) {
        const U = J((st) => (_t) => {
          const At = Z(_t)($), Tt = (() => {
            if (At.tag === "Nothing")
              return -1;
            if (At.tag === "Just")
              return At._1;
            a();
          })();
          if (Tt >= 0 && Tt < e.length) {
            const mt = e[Tt], lt = Z(_t)(n.nodeIndex), dt = (() => {
              if (lt.tag === "Nothing")
                return -2;
              if (lt.tag === "Just")
                return lt._1 - 1 | 0;
              a();
            })();
            return dt >= 0 && dt < mt.length ? Sn(st)((() => {
              const it = Z(_t)(C.x), ut = Z(_t)(u), $t = Z(mt[dt])(C.x), Nt = Z(mt[dt])(u);
              return (() => {
                if (it.tag === "Nothing")
                  return 0;
                if (it.tag === "Just")
                  return it._1;
                a();
              })() + (() => {
                if (ut.tag === "Nothing")
                  return 0;
                if (ut.tag === "Just")
                  return ut._1;
                a();
              })() - ((() => {
                if ($t.tag === "Nothing")
                  return 0;
                if ($t.tag === "Just")
                  return $t._1;
                a();
              })() + (() => {
                if (Nt.tag === "Nothing")
                  return 0;
                if (Nt.tag === "Just")
                  return Nt._1;
                a();
              })() + p(mt[dt]) + m(_t, mt[dt]));
            })()) : st;
          }
          const Vt = Z(_t)(n.nodeIndex), ht = (() => {
            if (Vt.tag === "Nothing")
              return -2;
            if (Vt.tag === "Just")
              return Vt._1 - 1 | 0;
            a();
          })();
          return ht >= 0 && ht < 0 ? Sn(st)((() => {
            const mt = Z(_t)(C.x), lt = Z(_t)(u), dt = Z([][ht])(C.x), it = Z([][ht])(u);
            return (() => {
              if (mt.tag === "Nothing")
                return 0;
              if (mt.tag === "Just")
                return mt._1;
              a();
            })() + (() => {
              if (lt.tag === "Nothing")
                return 0;
              if (lt.tag === "Just")
                return lt._1;
              a();
            })() - ((() => {
              if (dt.tag === "Nothing")
                return 0;
              if (dt.tag === "Just")
                return dt._1;
              a();
            })() + (() => {
              if (it.tag === "Nothing")
                return 0;
              if (it.tag === "Just")
                return it._1;
              a();
            })() + p([][ht]) + m(_t, [][ht]));
          })()) : st;
        })(K)(Jr(c)(B)), tt = U > 0 ? -U : 0, ot = { ...C, x: U > 0 ? _(B, tt, C.x) : C.x, trace: [...C.trace, { ...nt, avail: U, shift: tt }] };
        return U > 0 ? ot : { ...ot, stack: [...ot.stack, q] };
      }
      if (K < 0 && -K < 1e300) {
        const U = J((st) => (_t) => {
          const At = Z(_t)($), Tt = (() => {
            if (At.tag === "Nothing")
              return -1;
            if (At.tag === "Just")
              return At._1;
            a();
          })();
          if (Tt >= 0 && Tt < e.length) {
            const mt = e[Tt], lt = Z(_t)(n.nodeIndex), dt = (() => {
              if (lt.tag === "Nothing")
                return 0;
              if (lt.tag === "Just")
                return lt._1 + 1 | 0;
              a();
            })();
            return dt >= 0 && dt < mt.length ? Sn(st)((() => {
              const it = Z(mt[dt])(C.x), ut = Z(mt[dt])(u), $t = Z(_t)(C.x), Nt = Z(_t)(u);
              return (() => {
                if (it.tag === "Nothing")
                  return 0;
                if (it.tag === "Just")
                  return it._1;
                a();
              })() + (() => {
                if (ut.tag === "Nothing")
                  return 0;
                if (ut.tag === "Just")
                  return ut._1;
                a();
              })() - ((() => {
                if ($t.tag === "Nothing")
                  return 0;
                if ($t.tag === "Just")
                  return $t._1;
                a();
              })() + (() => {
                if (Nt.tag === "Nothing")
                  return 0;
                if (Nt.tag === "Just")
                  return Nt._1;
                a();
              })() + p(_t) + m(_t, mt[dt]));
            })()) : st;
          }
          const Vt = Z(_t)(n.nodeIndex), ht = (() => {
            if (Vt.tag === "Nothing")
              return 0;
            if (Vt.tag === "Just")
              return Vt._1 + 1 | 0;
            a();
          })();
          return ht >= 0 && ht < 0 ? Sn(st)((() => {
            const mt = Z([][ht])(C.x), lt = Z([][ht])(u), dt = Z(_t)(C.x), it = Z(_t)(u);
            return (() => {
              if (mt.tag === "Nothing")
                return 0;
              if (mt.tag === "Just")
                return mt._1;
              a();
            })() + (() => {
              if (lt.tag === "Nothing")
                return 0;
              if (lt.tag === "Just")
                return lt._1;
              a();
            })() - ((() => {
              if (dt.tag === "Nothing")
                return 0;
              if (dt.tag === "Just")
                return dt._1;
              a();
            })() + (() => {
              if (it.tag === "Nothing")
                return 0;
              if (it.tag === "Just")
                return it._1;
              a();
            })() + p(_t) + m(_t, [][ht]));
          })()) : st;
        })(-K)(Jr(c)(B)), tt = U > 0 ? U : 0, ot = { ...C, x: U > 0 ? _(B, tt, C.x) : C.x, trace: [...C.trace, { ...nt, avail: U, shift: tt }] };
        return U > 0 ? ot : { ...ot, stack: [...ot.stack, q] };
      }
      return { ...C, stack: [...C.stack, q], trace: [...C.trace, nt], x: C.x };
    }
    a();
  }, X = J(et(rh))({
    x: jn(O((x) => L(
      x,
      (() => {
        const C = Z(x)(c.root), q = (() => {
          if (C.tag === "Nothing")
            return x;
          if (C.tag === "Just")
            return C._1;
          a();
        })(), S = Z(q)(M.x), F = Z((() => {
          const K = Z(q)(M.sink);
          if (K.tag === "Nothing")
            return q;
          if (K.tag === "Just")
            return K._1;
          a();
        })())(P), D = (() => {
          if (S.tag === "Just")
            return S._1;
          if (S.tag === "Nothing")
            return y;
          a();
        })();
        return (() => {
          if (D.tag === "Nothing")
            return 0;
          if (D.tag === "Just")
            return D._1;
          a();
        })() + (() => {
          if (F.tag === "Nothing")
            return 0;
          if (F.tag === "Just")
            return F._1;
          a();
        })();
      })()
    ))(T)),
    su: M.su,
    stack: [],
    trace: []
  })(M.queue), A = J(et(oh))({ ...X, stack: [] })(vn(X.stack));
  return { x: A.x, queue: M.queue, trace: A.trace };
}, ch = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (f) => (g) => uh(t)(n)(e)(r)(o)(i)(s)(u)(c)(f)(g).x, ah = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = (c, f, g) => {
    const l = Z(f)(e), d = (() => {
      if (l.tag === "Nothing")
        return 0.5;
      if (l.tag === "Just")
        return l._1._1 / 2;
      a();
    })(), _ = c.from.node === f ? c.from.port : c.to.node === f ? c.to.port : y;
    if (_.tag === "Just") {
      const h = Z(f)(n);
      if (h.tag === "Just") {
        const p = ln(($) => $.id === _._1)(h._1);
        if (p.tag === "Just") {
          const $ = ct(p._1.offset) * ct(4);
          return g === "North" || g === "South" ? $ : 0;
        }
        if (p.tag === "Nothing") {
          const $ = Ze(o)(c.id)(g)(d);
          return g === "North" || g === "South" ? $ : 0;
        }
        a();
      }
      if (h.tag === "Nothing") {
        const p = Ze(o)(c.id)(g)(d);
        return g === "North" || g === "South" ? p : 0;
      }
      a();
    }
    if (_.tag === "Nothing") {
      const h = Ze(o)(c.id)(g)(d);
      return g === "North" || g === "South" ? h : 0;
    }
    a();
  }, u = (c) => (f) => (g) => (l) => {
    let d = c, _ = f, h = g, p = l, $ = !0, m;
    for (; $; ) {
      const N = d, v = _, T = h, k = Wt((E) => y, (E) => (I) => b("Just", { head: E, tail: I }), p);
      if (k.tag === "Nothing") {
        $ = !1, m = N;
        continue;
      }
      if (k.tag === "Just") {
        const E = k._1.head, I = ln((z) => z.from.node === T && z.to.node === E || z.from.node === E && z.to.node === T)(r), W = (() => {
          if (I.tag === "Nothing")
            return v + 0;
          if (I.tag === "Just")
            return v + (s(I._1, T, I._1.from.node === T ? cn : un) - s(
              I._1,
              E,
              I._1.from.node === E ? cn : un
            ));
          a();
        })();
        d = Y(G)(E)(W)(N), _ = W, h = E, p = k._1.tail;
        continue;
      }
      a();
    }
    return m;
  };
  return J((c) => (f) => {
    const g = Wt((_) => y, (_) => (h) => b("Just", { head: _, tail: h }), Jr(t)(f)), l = (() => {
      if (g.tag === "Nothing")
        return Y(G)(f)(0)(Q);
      if (g.tag === "Just")
        return u(Y(G)(g._1.head)(0)(Q))(0)(g._1.head)(g._1.tail);
      a();
    })(), d = J((_) => (h) => ne(_)(-h._2))(0)(Ri(l));
    return J((_) => (h) => Y(G)(h._1)(h._2 + d)(_))(c)(Ri(l));
  })(Q)(rr(G.compare)((() => {
    const c = (f, g) => {
      if (f.tag === "Leaf")
        return g;
      if (f.tag === "Node")
        return c(f._5, qt("Cons", f._4, c(f._6, g)));
      a();
    };
    return Et(Ut.foldr, c(t.root, zt));
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
      a();
    })()
  ), r = (o) => (i) => (s) => (u) => (c) => (f) => (g) => {
    let l = o, d = i, _ = u, h = f, p = g, $ = !0, m;
    for (; $; ) {
      const N = l, v = d, T = _, w = h, k = p, E = v.length;
      if (k >= E) {
        $ = !1, m = N;
        continue;
      }
      const I = k >= 0 && k < v.length ? b("Just", v[k]) : y, W = (() => {
        if (I.tag === "Nothing")
          return "";
        if (I.tag === "Just")
          return I._1;
        a();
      })(), z = e(t, W);
      if (k === (E - 1 | 0) || z) {
        const M = (() => {
          if (z) {
            const P = Z(W)(t.preds), R = (() => {
              if (P.tag === "Nothing")
                return [];
              if (P.tag === "Just")
                return P._1;
              a();
            })();
            if (0 < R.length) {
              const j = T - 1 | 0, et = Z(R[0])(t.nodeIndex);
              if (et.tag === "Nothing")
                return j;
              if (et.tag === "Just")
                return et._1;
              a();
            }
          }
          return T - 1 | 0;
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
                a();
              })();
              return x < w || x > M ? Y(G)(X + "→" + j)()(et) : et;
            })(P)((() => {
              const et = Z(j)(t.preds);
              if (et.tag === "Nothing")
                return [];
              if (et.tag === "Just")
                return et._1;
              a();
            })());
          }
          return e(t, "") ? P : J((j) => (et) => {
            const X = Z(et)(t.nodeIndex), A = (() => {
              if (X.tag === "Nothing")
                return 0;
              if (X.tag === "Just")
                return X._1;
              a();
            })();
            return A < w || A > M ? Y(G)(et + "→")()(j) : j;
          })(P)((() => {
            const j = Z("")(t.preds);
            if (j.tag === "Nothing")
              return [];
            if (j.tag === "Just")
              return j._1;
            a();
          })());
        })(N)(Yt(0, k)), d = v, _ = T, h = M, p = k + 1 | 0;
        continue;
      }
      l = N, d = v, _ = T, h = w, p = k + 1 | 0;
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
  })(Q)(Yt(1, n.length - 2 | 0));
}, gh = (t) => (n) => (e) => (r) => (o) => {
  const i = Cn(n), s = J((u) => (c) => {
    const f = J((g) => (l) => {
      const d = (() => {
        if (o === "HRight") {
          const $ = Z(l)(t.preds);
          if ($.tag === "Nothing")
            return [];
          if ($.tag === "Just")
            return $._1;
          a();
        }
        if (o === "HLeft") {
          const $ = Z(l)(t.succs);
          if ($.tag === "Nothing")
            return [];
          if ($.tag === "Just")
            return $._1;
        }
        a();
      })(), _ = d.length;
      if (_ === 0)
        return g;
      const h = Me(_ - 1 | 0, 2), p = Me(_, 2);
      return J(($) => (m) => {
        if ((() => {
          const N = Z(l)($.align);
          if (N.tag === "Nothing")
            return l !== l;
          if (N.tag === "Just")
            return N._1 !== l;
          a();
        })())
          return $;
        if (m >= 0 && m < d.length) {
          const N = Z(d[m])(t.nodeIndex), v = (() => {
            if (N.tag === "Nothing")
              return 0;
            if (N.tag === "Just")
              return N._1;
            a();
          })();
          if (!(Su(d[m] + "→" + l)(e) || Su(l + "→" + d[m])(e)) && (() => {
            if (r === "VDown")
              return $.r < v;
            if (r === "VUp")
              return $.r > v;
            a();
          })()) {
            const T = Z(d[m])($.root), w = (() => {
              if (T.tag === "Nothing")
                return d[m];
              if (T.tag === "Just")
                return T._1;
              a();
            })();
            return {
              root: Y(G)(l)(w)($.root),
              align: Y(G)(d[m])(l)(Y(G)(l)(w)($.align)),
              r: v
            };
          }
        }
        return $;
      })(g)((() => {
        if (r === "VDown")
          return Yt(h, p);
        if (r === "VUp")
          return vn(Yt(h, p));
        a();
      })());
    })({
      root: u.root,
      align: u.align,
      r: (() => {
        if (r === "VDown")
          return -1;
        if (r === "VUp")
          return 999999;
        a();
      })()
    })((() => {
      if (r === "VDown")
        return c;
      if (r === "VUp")
        return vn(c);
      a();
    })());
    return { root: f.root, align: f.align };
  })({ root: jn(O((u) => L(u, u))(i)), align: jn(O((u) => L(u, u))(i)) })((() => {
    if (o === "HRight")
      return n;
    if (o === "HLeft")
      return vn(n);
    a();
  })());
  return { root: s.root, align: s.align };
}, so = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (f) => {
  const g = gh(n)(e)(u)(c)(f), l = ah(g)(o)(r)(i)(s)(f);
  return wg()((d) => (_) => b(
    "Just",
    (() => {
      const h = Z(d)(l);
      if (h.tag === "Nothing")
        return _ + 0;
      if (h.tag === "Just")
        return _ + h._1;
      a();
    })()
  ))(ch(t)(n)(e)(r)(o)(i)(s)(l)(g)(c)(f));
}, Gu = (t) => (n) => Pt((e) => (r) => J((o) => (i) => i >= 0 && i < n.length ? i >= 0 && i < t.length ? o + n[i] + t[i] : o + n[i] + 0 : i >= 0 && i < t.length ? o + 1 + t[i] : o + 1)(0)((() => {
  const o = Yt(0, n.length - 1 | 0);
  return e < 1 ? [] : Gt(0, e, o);
})()))(n), _h = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = nh(0)(n.length - 1 | 0), c = ct(t.layerGap), f = s(ig(u, c)), g = dd(da(o)(f)(r)(i)(Q))(f);
  return O((l) => {
    const d = eh(l)(g);
    return d.tag === "Just" && d._1 > 0 ? ne(c)(2 + ct(d._1 - 1 | 0) * 2.5) : c;
  })(Yt(0, u - 1 | 0));
}, Ta = (t) => (n) => (e) => (r) => ac(
  (o) => J((i) => (s) => {
    if (!i.ok)
      return i;
    const u = Z(s)(r), c = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      a();
    })(), f = Z(s)(e), g = (() => {
      if (f.tag === "Nothing")
        return c + 1;
      if (f.tag === "Just")
        return c + f._1._1;
      a();
    })();
    return c + 1e-4 > i.pos && g + 1e-4 > i.pos ? { ok: !0, pos: g } : { ok: !1, pos: i.pos };
  })({ ok: !0, pos: -1e18 })(o).ok,
  n
), lh = (t) => (n) => (e) => (r) => {
  const o = Lt((i) => (s) => pt.compare(i.w)(s.w))(O((i) => ({ l: i, w: va(i) }))(gt(
    Ta()(n)(e),
    r
  )));
  return 0 < o.length ? b("Just", o[0].l) : y;
}, dh = (t) => (n) => {
  const e = jn(Cn(O(Pt((o) => (i) => L(i, o)))(t))), r = (o) => Lt((i) => (s) => rt.compare((() => {
    const u = Z(i)(e);
    if (u.tag === "Nothing")
      return 0;
    if (u.tag === "Just")
      return u._1;
    a();
  })())((() => {
    const u = Z(s)(e);
    if (u.tag === "Nothing")
      return 0;
    if (u.tag === "Just")
      return u._1;
    a();
  })()))(o);
  return {
    preds: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return Q;
        if (i.tag === "Node")
          return Dt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        a();
      };
      return o(J((i) => (s) => yt(G)(fn)(s.to.node)([s.from.node])(i))(Q)(n));
    })(),
    succs: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return Q;
        if (i.tag === "Node")
          return Dt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        a();
      };
      return o(J((i) => (s) => yt(G)(fn)(s.from.node)([s.to.node])(i))(Q)(n));
    })(),
    nodeIndex: e
  };
}, hh = (t) => (n) => {
  const e = Lt((l) => (d) => pt.compare(l.w)(d.w))(Pt((l) => (d) => ({ i: l, l: d, w: va(d) }))(n)), r = 0 < e.length ? b("Just", e[0]) : y, o = (() => {
    if (r.tag === "Just")
      return r._1.i;
    if (r.tag === "Nothing")
      return 0;
    a();
  })(), i = o >= 0 && o < n.length ? b("Just", n[o]) : y, s = (() => {
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
          a();
        }
        return m;
      })(999999)((() => {
        const d = (_, h) => {
          if (_.tag === "Leaf")
            return h;
          if (_.tag === "Node")
            return d(_._5, qt("Cons", _._4, d(_._6, h)));
          a();
        };
        return d(i._1, zt);
      })());
    if (i.tag === "Nothing")
      return 0;
    a();
  })(), u = (l) => J((d) => (_) => ne(d)((() => {
    const h = Z(_._1)(t);
    if (h.tag === "Nothing")
      return _._2 + 1;
    if (h.tag === "Just")
      return _._2 + h._1._1;
    a();
  })()))(-999999)(Ri(l)), c = o >= 0 && o < n.length ? b("Just", n[o]) : y, f = (() => {
    if (c.tag === "Just")
      return u(c._1);
    if (c.tag === "Nothing")
      return 0;
    a();
  })(), g = $n(
    (l) => (d) => {
      const _ = (h) => {
        if (h.tag === "Leaf")
          return Q;
        if (h.tag === "Node")
          return Dt("Node", h._1, h._2, h._3, h._4 + d, _(h._5), _(h._6));
        a();
      };
      return _(l);
    },
    n,
    Pt((l) => (d) => ns(l)(2) === 0 ? s - ((h) => (p) => {
      let $ = h, m = p, N = !0, v;
      for (; N; ) {
        const T = $, w = m;
        if (w.tag === "Nil") {
          N = !1, v = T;
          continue;
        }
        if (w.tag === "Cons") {
          $ = Sn(T)(w._1), m = w._2;
          continue;
        }
        a();
      }
      return v;
    })(999999)((() => {
      const h = (p, $) => {
        if (p.tag === "Leaf")
          return $;
        if (p.tag === "Node")
          return h(p._5, qt("Cons", p._4, h(p._6, $)));
        a();
      };
      return h(d, zt);
    })()) : f - u(d))(n)
  );
  return sh(J((l) => (d) => {
    const _ = Lt(pt.compare)(vt(Z(d))(g));
    return Y(G)(d)(_.length === 4 ? 1 < _.length && 2 < _.length ? (_[1] + _[2]) / 2 : 0 : 0 < _.length ? _[0] : 0)(l);
  })(Q)(rr(G.compare)(Cn(O((l) => {
    const d = (_) => {
      if (_.tag === "Leaf")
        return Q;
      if (_.tag === "Node")
        return Dt("Node", _._1, _._2, _._3, void 0, d(_._5), d(_._6));
      a();
    };
    return Et(Pn.foldr, d(l));
  })(g)))));
}, ph = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = dh(n)(o), u = fh(s)(n), c = { nodeGap: t.nodeGap * 4 | 0 }, f = bn(
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
        a();
      };
      return _(e);
    })()
  ), g = [
    so(c)(s)(n)(f)(r)(o)(i)(u)(bu)(xu),
    so(c)(s)(n)(f)(r)(o)(i)(u)(Eu)(xu),
    so(c)(s)(n)(f)(r)(o)(i)(u)(bu)(Cu),
    so(c)(s)(n)(f)(r)(o)(i)(u)(Eu)(Cu)
  ], l = hh(f)(g);
  if (Ta()(n)(f)(l))
    return l;
  const d = lh()(n)(f)(g);
  if (d.tag === "Just")
    return d._1;
  if (d.tag === "Nothing")
    return g[0];
  a();
}, $h = (t) => (n) => (e) => (r) => {
  const o = sg(
    y,
    yf,
    (i) => i.node === n ? b("Just", i.position) : y,
    t
  );
  if (o.tag === "Nothing")
    return t;
  if (o.tag === "Just") {
    const i = o._1;
    return O((s) => s.node === e ? { ...s, position: L(i._1 + r._1, i._2 + r._2) } : s)(t);
  }
  a();
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
      a();
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
    a();
  })();
  return O((s) => {
    if (In(te)(s.node)(n)) {
      if (e === "Vertical")
        return { ...s, position: L(i, s.position._2) };
      if (e === "Horizontal")
        return { ...s, position: L(s.position._1, i) };
      a();
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
    a();
  })()))(1)(l))(e), f = ph(t)(e)(r)(o)(i)(u), g = Gu(_h(t)(e)(r)(o)(i)(s)((l) => {
    const d = Gu(l)(c);
    return Cn(Pt((_) => (h) => Pt((p) => ($) => ({
      node: $,
      position: L(
        (() => {
          const m = Z($)(f);
          return (() => {
            if (m.tag === "Nothing")
              return 0;
            if (m.tag === "Just")
              return m._1;
            a();
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
        a();
      })(),
      layer: _,
      order: p
    }))(h))(e));
  }))(c);
  return Nh(n)(Cn(Pt((l) => (d) => Pt((_) => (h) => ({
    node: h,
    position: L(
      (() => {
        const p = Z(h)(f);
        return (() => {
          if (p.tag === "Nothing")
            return 0;
          if (p.tag === "Just")
            return p._1;
          a();
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
      a();
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
  a();
})(), Qr = /* @__PURE__ */ wi(/* @__PURE__ */ Js($o)(/* @__PURE__ */ Ae(48)))($o), vh = (t) => {
  const n = L0(t);
  return Gr(yc((() => {
    if (n.tag === "Nothing")
      return Tc;
    if (n.tag === "Just")
      return n._1;
    a();
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
      a();
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
      o = !1, i = y;
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
    a();
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
    a();
  }
  return i;
}, As = /* @__PURE__ */ jt(G)(Bt), Zn = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, Co = /* @__PURE__ */ jt(G)(Bt), Lh = /* @__PURE__ */ Uf(Mi), kh = /* @__PURE__ */ J(sr)(0), bh = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
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
    a();
  }
  return i;
}, Eh = (t) => (n) => (e) => (r) => (o) => As(J((i) => (s) => {
  const u = Lt((c) => (f) => rt.compare((() => {
    const g = Dr(c.id)(o);
    if (g.tag === "Nothing")
      return 1e6;
    if (g.tag === "Just")
      return g._1;
    a();
  })())((() => {
    const g = Dr(f.id)(o);
    if (g.tag === "Nothing")
      return 1e6;
    if (g.tag === "Just")
      return g._1;
    a();
  })()))(gt((c) => xo(c.to.node)(e), gt((c) => c.from.node === s, r)));
  return {
    ranks: [...i.ranks, ...Pt((c) => (f) => L(f.id, ct((i.rankSum + c | 0) + 1 | 0)))(u)],
    rankSum: i.rankSum + u.length | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), xh = (t) => (n) => (e) => (r) => (o) => As(J((i) => (s) => {
  const u = Lt((f) => (g) => {
    const l = rt.compare((() => {
      const d = Zn(g.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      a();
    })())((() => {
      const d = Zn(f.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      a();
    })());
    return l === "EQ" ? rt.compare((() => {
      const d = Dr(f.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      a();
    })())((() => {
      const d = Dr(g.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      a();
    })()) : l;
  })(gt((f) => xo(f.from.node)(e), gt((f) => f.to.node === s, r))), c = u.length;
  return {
    ranks: [...i.ranks, ...Pt((f) => (g) => L(g.id, ct((i.rankSum + c | 0) - f | 0)))(u)],
    rankSum: i.rankSum + c | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), Bi = (t) => (n) => (e) => {
  const r = Co(Pt((u) => (c) => L(c, u))(t)), o = Co(Pt((u) => (c) => L(c, u))(n)), i = vt((u) => {
    const c = Zn(u.from.node)(r), f = Zn(u.to.node)(o);
    if (c.tag === "Just" && f.tag === "Just")
      return b("Just", L(c._1, f._1));
    const g = Zn(u.from.node)(o), l = Zn(u.to.node)(r);
    return g.tag === "Just" && l.tag === "Just" ? b("Just", L(l._1, g._1)) : y;
  })(e), s = i.length;
  return J((u) => (c) => J((f) => (g) => c >= 0 && c < i.length && g >= 0 && g < i.length && ((i[c]._1 - i[g]._1 | 0) * (i[c]._2 - i[g]._2 | 0) | 0) < 0 ? f + 1 | 0 : f)(u)(Yt(c + 1 | 0, s - 1 | 0)))(0)(Yt(0, s - 2 | 0));
}, Ch = (t) => (n) => (e) => (r) => (o) => {
  const i = (u) => (c) => {
    let f = u, g = c, l = !0, d;
    for (; l; ) {
      const _ = f, h = g;
      if (h >= (_.length - 1 | 0)) {
        l = !1, d = _;
        continue;
      }
      const p = h >= 0 && h < _.length ? b("Just", _[h]) : y, $ = h + 1 | 0;
      if ($ >= 0 && $ < _.length && p.tag === "Just") {
        const m = p._1, N = _[$];
        if (de((k) => k.before === m && k.after === N, o)) {
          f = _, g = h + 1 | 0;
          continue;
        }
        if ((() => {
          const k = Zn(m)(t), E = Zn(N)(t);
          return k.tag === "Just" && E.tag === "Just" && k._1 < E._1;
        })()) {
          f = _, g = h + 1 | 0;
          continue;
        }
        const v = er(Kt, y, h, N, _), T = (() => {
          if (v.tag === "Just")
            return er(Kt, y, h + 1 | 0, m, v._1);
          if (v.tag === "Nothing")
            return y;
          a();
        })(), w = (() => {
          if (T.tag === "Nothing")
            return _;
          if (T.tag === "Just")
            return T._1;
          a();
        })();
        if (Bi(e)(w)(r) < Bi(e)(_)(r)) {
          f = w, g = h + 1 | 0;
          continue;
        }
        f = _, g = h + 1 | 0;
        continue;
      }
      l = !1, d = _;
    }
    return d;
  };
  return ((u) => {
    let c = u, f = !0, g;
    for (; f; ) {
      const l = c, d = i(l)(0);
      if (Lh(d)(l)) {
        f = !1, g = l;
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
})(0)(Yt(0, t.length - 2 | 0)), Sh = (t) => (n) => (e) => {
  const r = vt((f) => f.tag === "OrderConstraint" ? b("Just", { before: f._1.before, after: f._1.after }) : y)(t.constraints), o = (f) => J((g) => (l) => {
    const d = l.after, _ = l.before, h = nr(Kt, y, ($) => $ === _, g), p = nr(Kt, y, ($) => $ === d, g);
    if (h.tag === "Just" && p.tag === "Just" && h._1 > p._1) {
      const $ = cc(Kt, y, h._1, g), m = (() => {
        if ($.tag === "Nothing")
          return g;
        if ($.tag === "Just")
          return $._1;
        a();
      })(), N = cg(Kt, y, p._1, _, m);
      if (N.tag === "Nothing")
        return m;
      if (N.tag === "Just")
        return N._1;
      a();
    }
    return g;
  })(f)(r), i = As(Pt((f) => (g) => L(g.id, f))(e)), s = (f, g, l) => {
    const d = f.length;
    return J((_) => (h) => {
      const p = g ? h - 1 | 0 : h + 1 | 0, $ = p >= 0 && p < _._1.length ? b("Just", _._1[p]) : y;
      if ($.tag === "Just") {
        const m = h >= 0 && h < _._1.length ? b("Just", _._1[h]) : y;
        if (m.tag === "Just") {
          const N = Co(Pt((E) => (I) => L(I, E))($._1)), v = Co(Pt((E) => (I) => L(I, E))(m._1)), T = g ? Eh($._1)(N)(v)(e)(i) : xh($._1)(N)(v)(e)(i), w = J((E) => (I) => {
            const W = vt((M) => Dr(M.id)(T))(gt(g ? (M) => M.to.node === I._2 && xo(M.from.node)(N) : (M) => M.from.node === I._2 && xo(M.to.node)(N), e));
            if (W.length === 0)
              return { ...E, items: [...E.items, { n: I._2, key: y, origIdx: I._1 }] };
            const z = Eo(24)(E.r);
            return {
              items: [
                ...E.items,
                {
                  n: I._2,
                  key: b("Just", (kh(W) + (ct(z._1) * 4172325152040912e-24 - 0.03500000014901161)) / ct(W.length)),
                  origIdx: I._1
                }
              ],
              r: z._2
            };
          })({ items: [], r: _._2 })(Pt(fr)(m._1)), k = er(
            Kt,
            y,
            h,
            Ch(t.modelOrder)(o(O((E) => E.n)(Lt((E) => (I) => {
              const W = Zn(E.n)(t.modelOrder), z = Zn(I.n)(t.modelOrder);
              if (W.tag === "Just" && z.tag === "Just") {
                const M = rt.compare(W._1)(z._1);
                return M === "EQ" ? pt.compare(E.key)(I.key) : M;
              }
              return pt.compare(E.key)(I.key);
            })((() => {
              const E = w.items, I = (z) => (M) => {
                let P = z, R = M, j = !0, et;
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
                    a();
                  }
                  j = !1, et = A;
                }
                return et;
              };
              return ((z) => (M) => (P) => {
                let R = z, j = M, et = P, X = !0, A;
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
                    a();
                  }
                  X = !1, A = q;
                }
                return A;
              })(0)(-1)([]);
            })()))))($._1)(e)(r),
            _._1
          );
          if (k.tag === "Just")
            return L(k._1, w.r);
          if (k.tag === "Nothing")
            return L(_._1, _._2);
          a();
        }
        if (m.tag === "Nothing")
          return L(_._1, _._2);
        a();
      }
      if ($.tag === "Nothing")
        return L(_._1, _._2);
      a();
    })(L(f, l))(g ? Yt(1, d - 1 | 0) : vn(Yt(0, d - 2 | 0)));
  }, u = J((f) => (g) => Y(G)(g.from.node)()(Y(G)(g.to.node)()(f)))(Q)(e), c = J((f) => (g) => {
    if (f.result.crossings === 0)
      return f;
    const l = (N) => (v) => (T) => (w) => {
      let k = N, E = v, I = T, W = w, z = !0, M;
      for (; z; ) {
        const P = k, R = E, j = I, et = W;
        if (j === 0) {
          z = !1, M = { layout: P, crossings: 0, random: et };
          continue;
        }
        const X = s(P, R, et), A = uo(X._1)(e);
        if (A < j) {
          k = X._1, E = !R, I = A, W = X._2;
          continue;
        }
        z = !1, M = { layout: P, crossings: j, random: X._2 };
      }
      return M;
    }, d = Eo(1)(f.result.random), _ = d._1 !== 0, h = t.modelOrder.tag === "Leaf", p = (f.firstTry || f.secondTry) && !h ? f.firstTry : _, $ = (() => {
      if (!h) {
        const w = s(n, p, d._2);
        return l(w._1)(!p)(uo(w._1)(e))(w._2);
      }
      const N = p ? 0 : bh(0)(n.length - 1 | 0), v = N >= 0 && N < n.length ? b("Just", n[N]) : y;
      if (v.tag === "Just" && v._1.length > 1) {
        const w = gt((k) => Pu(k)(u), v._1);
        if (w.length > 1) {
          const k = yh(d._2)(w), E = k._1, I = er(
            Kt,
            y,
            N,
            o(J((W) => (z) => Pu(z)(u) ? W.idx >= 0 && W.idx < E.length ? { idx: W.idx + 1 | 0, result: [...W.result, E[W.idx]] } : { idx: W.idx, result: [...W.result, z] } : { idx: W.idx, result: [...W.result, z] })({ idx: 0, result: [] })(v._1).result),
            n
          );
          if (I.tag === "Just") {
            const W = s(I._1, p, k._2);
            return l(W._1)(!p)(uo(W._1)(e))(W._2);
          }
        }
      }
      const T = s(n, p, d._2);
      return l(T._1)(!p)(uo(T._1)(e))(T._2);
    })(), m = f.secondTry ? !1 : f.secondTry;
    return f.firstTry ? {
      result: $.crossings < f.result.crossings ? { layout: $.layout, crossings: $.crossings, random: $.random } : { ...f.result, random: $.random },
      firstTry: !1,
      secondTry: !0
    } : {
      result: $.crossings < f.result.crossings ? { layout: $.layout, crossings: $.crossings, random: $.random } : { ...f.result, random: $.random },
      firstTry: f.firstTry,
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
  })(Yt(1, t.iterations)).result;
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
    a();
  }
  return i;
}, Jn = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, cr = (t) => (e) => {
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
    a();
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
    a();
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
      a();
    })(), u = Y(G)(o.to.node)(s)(r.inDeg);
    return (() => {
      const c = Jn(o.to.node)(r.outDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        a();
      })() && !In(te)(o.to.node)(r.sources);
    })() ? { ...r, inDeg: u, sources: [...r.sources, o.to.node] } : { ...r, inDeg: u };
  }
  if (o.to.node === n && !Au(o.from.node)(r.marks)) {
    const i = Jn(o.from.node)(r.outDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      a();
    })(), u = Y(G)(o.from.node)(s)(r.outDeg);
    return (() => {
      const c = Jn(o.from.node)(r.inDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        a();
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
  if (cr(e)(r.visited) || cr(e)(r.visiting))
    return r;
  const o = J(Fh(t)(n)(e))({ ...r, visiting: Y(G)(e)()(r.visiting) })((() => {
    const i = Jn(e)(n);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just")
      return i._1;
    a();
  })());
  return {
    ...o,
    visiting: xr(G)(e)(o.visiting),
    visited: Y(G)(e)()(o.visited)
  };
}, Fh = (t) => (n) => (e) => (r) => (o) => ya(t)(e)(o) ? { ...r, backEdges: Y(Wr)(L(e, o))()(r.backEdges) } : cr(o)(r.visiting) ? { ...r, backEdges: Y(Wr)(L(e, o))()(r.backEdges) } : cr(o)(r.visited) ? r : wa(t)(n)(o)(r), Bh = (t) => (n) => (e) => {
  const r = (d) => {
    let _ = d, h = !0, p;
    for (; h; ) {
      const $ = _, m = Wt((N) => y, (N) => (v) => b("Just", { head: N, tail: v }), $.sinks);
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
        const N = Wt((v) => y, (v) => (T) => b("Just", { head: v, tail: T }), $.sources);
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
          const v = (w) => {
            const k = Jn(w)($.outDeg), E = Jn(w)($.inDeg);
            return (() => {
              if (k.tag === "Nothing")
                return 0;
              if (k.tag === "Just")
                return k._1;
              a();
            })() - (() => {
              if (E.tag === "Nothing")
                return 0;
              if (E.tag === "Just")
                return E._1;
              a();
            })() | 0;
          }, T = Lt((w) => (k) => {
            const E = rt.compare(v(k))(v(w));
            return E === "EQ" ? rt.compare((() => {
              const I = Jn(w)(n);
              if (I.tag === "Nothing")
                return 1e6;
              if (I.tag === "Just")
                return I._1;
              a();
            })())((() => {
              const I = Jn(k)(n);
              if (I.tag === "Nothing")
                return 1e6;
              if (I.tag === "Just")
                return I._1;
              a();
            })()) : E;
          })($.remaining);
          if (0 < T.length) {
            const w = T[0];
            _ = $i(e)(w)({
              ...$,
              remaining: gt((k) => k !== w, $.remaining),
              marks: Y(G)(w)($.nextLeft)($.marks),
              nextLeft: $.nextLeft + 1 | 0
            });
            continue;
          }
          h = !1, p = $;
          continue;
        }
      }
      a();
    }
    return p;
  }, o = rr(G.compare)([...O((d) => d.from.node)(e), ...O((d) => d.to.node)(e)]), i = gt((d) => d.from.node !== d.to.node, e), s = J((d) => (_) => yt(G)(Zt)(_.to.node)(1)(d))(Q)(i), u = J((d) => (_) => yt(G)(Zt)(_.from.node)(1)(d))(Q)(i), c = gt(
    (d) => {
      const _ = Jn(d)(s);
      if (_.tag === "Nothing")
        return !0;
      if (_.tag === "Just")
        return _._1 === 0;
      a();
    },
    o
  ), f = gt(
    (d) => {
      const _ = Jn(d)(u);
      if (_.tag === "Nothing")
        return !0;
      if (_.tag === "Just")
        return _._1 === 0;
      a();
    },
    o
  ), g = o.length + 1 | 0, l = J((d) => (_) => {
    const h = Jn(_)(d);
    return h.tag === "Just" && h._1 < 0 ? Y(G)(_)(h._1 + g | 0)(d) : d;
  })(r({
    remaining: gt((d) => !In(te)(d)(c) && !In(te)(d)(f), o),
    marks: Q,
    inDeg: s,
    outDeg: u,
    sources: c,
    sinks: f,
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
  const e = Qh(n), r = rr(G.compare)([...O((i) => i.from.node)(n), ...O((i) => i.to.node)(n)]), o = J((i) => (s) => Y(G)(s.to.node)()(i))(Q)(n);
  return J((i) => (s) => wa(t)(e)(s)(i))({
    visiting: Q,
    visited: Q,
    backEdges: Q
  })([...gt((i) => !cr(i)(o), r), ...gt((i) => cr(i)(o), r)]).backEdges;
}, Wh = (t) => (n) => (e) => (r) => {
  const o = Ih(Pt((u) => (c) => L(c, u))(n)), i = Rh(e), s = (() => {
    if (t === "DepthFirst")
      return Dh(i)(r);
    if (t === "Greedy")
      return Bh(i)(o)(r);
    a();
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
  a();
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
    a();
  }
  return i;
}, Hh = /* @__PURE__ */ oa(G), Yn = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, Ru = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, mi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, Oh = /* @__PURE__ */ jt(rt)(Bt), zh = (t) => (n) => bn(G.compare, Ln, t, n), ka = /* @__PURE__ */ Pt((t) => (n) => ({ src: n.src, tgt: n.tgt, delta: 1, weight: 1, eid: t })), Vh = (t) => J((n) => (e) => ({
  base: (() => {
    const r = (o) => (i) => {
      let s = o, u = i, c = !0, f;
      for (; c; ) {
        const g = s, l = u;
        if (l.tag === "Nil") {
          c = !1, f = g;
          continue;
        }
        if (l.tag === "Cons") {
          s = La(g)(l._1), u = l._2;
          continue;
        }
        a();
      }
      return f;
    };
    return (n.base + r(0)((() => {
      const o = (i, s) => {
        if (i.tag === "Leaf")
          return s;
        if (i.tag === "Node")
          return o(i._5, qt("Cons", i._4, o(i._6, s)));
        a();
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
        a();
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
    let u = o, c = i, f = s, g = !0, l;
    for (; g; ) {
      const d = u, _ = c, h = f, p = Wt(($) => y, ($) => (m) => b("Just", { head: $, tail: m }), d);
      if (p.tag === "Nothing") {
        g = !1, l = { nodes: h };
        continue;
      }
      if (p.tag === "Just") {
        if (So(p._1.head)(_)) {
          u = p._1.tail, c = _, f = h;
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
            a();
          })()
        ], c = Y(G)(p._1.head)()(_), f = [...h, p._1.head];
        continue;
      }
      a();
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
      a();
    })();
    if ((() => {
      const N = Yn(s)(o);
      return (() => {
        if (N.tag === "Nothing")
          return c !== 0;
        if (N.tag === "Just")
          return c !== N._1;
        a();
      })() || c === 0;
    })())
      return i;
    const f = Yn(s)(i.layers), g = (() => {
      if (f.tag === "Nothing")
        return 0;
      if (f.tag === "Just")
        return f._1;
      a();
    })(), l = i.layers, d = J((N) => (v) => v.tgt === s ? {
      ...N,
      mIn: Ru(N.mIn)((() => {
        const T = Yn(s)(l), w = Yn(v.src)(l);
        return (() => {
          if (T.tag === "Nothing")
            return 0;
          if (T.tag === "Just")
            return T._1;
          a();
        })() - (() => {
          if (w.tag === "Nothing")
            return 0;
          if (w.tag === "Just")
            return w._1;
          a();
        })() | 0;
      })())
    } : v.src === s ? {
      ...N,
      mOut: Ru(N.mOut)((() => {
        const T = Yn(v.tgt)(l), w = Yn(s)(l);
        return (() => {
          if (T.tag === "Nothing")
            return 0;
          if (T.tag === "Just")
            return T._1;
          a();
        })() - (() => {
          if (w.tag === "Nothing")
            return 0;
          if (w.tag === "Just")
            return w._1;
          a();
        })() | 0;
      })())
    } : N)({ mIn: 1e9, mOut: 1e9 })(n), _ = d.mIn === 1e9 ? -1 : d.mIn, h = d.mOut === 1e9 ? -1 : d.mOut;
    if (_ < 0 || h < 0)
      return i;
    const p = (g - _ | 0) + 1 | 0, $ = (g + h | 0) - 1 | 0;
    if ($ < p)
      return i;
    const m = J((N) => (v) => {
      const T = mi(v)(i.filling), w = (() => {
        if (T.tag === "Nothing")
          return 0;
        if (T.tag === "Just")
          return T._1;
        a();
      })();
      return w < N.bestFill ? { best: v, bestFill: w } : N;
    })({
      best: g,
      bestFill: (() => {
        const N = mi(g)(i.filling);
        if (N.tag === "Nothing")
          return 0;
        if (N.tag === "Just")
          return N._1;
        a();
      })()
    })(Yt(p, $));
    return m.best === g ? i : {
      layers: Y(G)(s)(m.best)(i.layers),
      filling: Y(rt)(g)((() => {
        const N = mi(g)(i.filling);
        if (N.tag === "Nothing")
          return -1;
        if (N.tag === "Just")
          return N._1 - 1 | 0;
        a();
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
    ))(Yt(
      0,
      J((i) => (s) => La(i)((() => {
        const u = Yn(s)(e);
        if (u.tag === "Nothing")
          return 0;
        if (u.tag === "Just")
          return u._1;
        a();
      })()))(0)(t)
    )))
  })(t).layers;
}, Mh = (t) => (n) => Uh(t)(ka(n))(J(zh)(Q)(Vh(O((e) => Yh(e)(n))(Xh(t)(n))))), Kh = (t) => t, Ge = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, Go = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
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
  ))(Yt(
    0,
    ((r) => (o) => {
      let i = r, s = o, u = !0, c;
      for (; u; ) {
        const f = i, g = s;
        if (g.tag === "Nil") {
          u = !1, c = f;
          continue;
        }
        if (g.tag === "Cons") {
          i = Go(f)(g._1), s = g._2;
          continue;
        }
        a();
      }
      return c;
    })(0)((() => {
      const r = (o, i) => {
        if (o.tag === "Leaf")
          return i;
        if (o.tag === "Node")
          return r(o._5, qt("Cons", o._4, r(o._6, i)));
        a();
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
    a();
  })() || (() => {
    const i = Ge(o.to.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    a();
  })() ? y : b("Just", { src: o.from.node, tgt: o.to.node }))(t)))(ba(e));
}, ep = (t) => (n) => (e) => (r) => {
  const o = (c) => (f) => {
    const g = Ge(f)(c);
    if (g.tag === "Just")
      return c;
    if (g.tag === "Nothing") {
      const l = gt(
        (_) => _ !== f,
        (() => {
          const _ = Ge(f)(t);
          if (_.tag === "Nothing")
            return [];
          if (_.tag === "Just")
            return _._1;
          a();
        })()
      ), d = J(o)(c)(l);
      return Y(G)(f)(1 + J(Go)(0)(vt((_) => Ge(_)(d))(l)) | 0)(d);
    }
    a();
  }, i = J(o)(Q)(e), u = ((c) => (f) => {
    let g = c, l = f, d = !0, _;
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
      a();
    }
    return _;
  })(1)((() => {
    const c = (f, g) => {
      if (f.tag === "Leaf")
        return g;
      if (f.tag === "Node")
        return c(f._5, qt("Cons", f._4, c(f._6, g)));
      a();
    };
    return c(i, zt);
  })());
  return J((c) => (f) => Y(G)(f._1)(f._2)(c))((() => {
    const c = (f) => {
      if (f.tag === "Leaf")
        return Q;
      if (f.tag === "Node")
        return Dt("Node", f._1, f._2, f._3, u - f._4 | 0, c(f._5), c(f._6));
      a();
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
  return tp(r)(Zh(vt((u) => u.tag === "SameLayer" ? b("Just", u._1.nodes) : y)(n))((() => {
    if (t === "LongestPath")
      return ep(o)(i)(r)(s);
    if (t === "NetworkSimplex")
      return np(e)(r)(s);
    a();
  })()));
}, up = /* @__PURE__ */ jt(G)(Bt), cp = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, Fu = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, Bu = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
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
      a();
    }
    const u = bt(vt((g) => Fu(g)(o))($n(
      (g) => (l) => s.edgeId + ":" + g + "->" + l,
      s.nodes,
      Gt(1, s.nodes.length, s.nodes)
    )))((g) => g.segments), c = i(s), f = Fr(Rr(c ? Qu(u) : u));
    return {
      edge: s.edgeId,
      segments: f,
      bends: $n((g) => (l) => g.end, f, Gt(1, f.length, f)),
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
  const r = qr(O((f) => L(f.id, f.ports))(n.nodes)), o = gt((f) => _n(3)(f.node) !== "$d:", e.placements), i = fp(e.withDummies.chains)(e.acyclic.reversedEdges)(ap(O((f) => L(
    f.id,
    L(f.from.node, f.to.node)
  ))(n.edges)))(Wd(e.withDummies.edges)(e.placements)(r)(e.withDummies.chains)($a(e.ordered)(gt(
    (f) => f.from.node !== f.to.node,
    e.withDummies.edges
  ))((() => {
    const f = (g) => {
      if (g.tag === "Leaf")
        return Q;
      if (g.tag === "Node")
        return Dt("Node", g._1, g._2, g._3, L(g._4._1 * 4, g._4._2), f(g._5), f(g._6));
      a();
    };
    return f(qr(O((g) => L(g.id, g.size))(n.nodes)));
  })()))), s = t.compactPostRouting ? ad()({
    nodes: o,
    edges: n.edges,
    paths: i,
    ports: r
  }) : { nodes: o, edges: i }, u = O((f) => {
    const g = Fr(Rr(f.segments));
    return { ...f, segments: g, bends: $n((l) => (d) => l.end, g, Gt(1, g.length, g)) };
  })(s.edges), c = Pt((f) => (g) => ({ ...g, jumps: Xd(f)(g)(u) }))(u);
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
        a();
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
      o = !1, i = y;
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
    a();
  }
  return i;
}, Jp = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
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
    a();
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
    a();
  }
  return i;
}, yp = /* @__PURE__ */ J((t) => (n) => Y(G)(n)()(t))(Q), wp = /* @__PURE__ */ J((t) => (n) => Y(G)(n)()(t))(Q), Lp = Yr.traverse(Xi), Rs = /* @__PURE__ */ jt(G)(Bt), kp = (t) => (n) => (e) => {
  const r = ln((o) => o.id === e)(t.graph.edges);
  if (r.tag === "Just")
    return b("Just", r._1);
  if (r.tag === "Nothing")
    return Np(e)(n);
  a();
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
    a();
  })()
}), Ep = (t) => ({ id: t, size: L(1, 1), ports: [], label: b("Just", t) }), xp = (t) => (n) => (e) => L(e.node, bp(t)(n)(e)), Cp = (t) => Ea(vt((n) => b(
  "Just",
  L(n.edge, { id: n.edge, from: { node: n.from, port: y }, to: { node: n.to, port: y } })
))(bt(t.scenes)((n) => n.tag === "DataFlow" ? vt((e) => e.kind.tag === "SendToken" ? b("Just", e.kind._1) : y)(n._1.events) : []))), xa = (t) => {
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
      a();
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
  const e = Wt((r) => y, (r) => (o) => b("Just", { head: r, tail: o }), n.segments);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ x: e._1.head.start._1 * t, y: e._1.head.start._2 * t }, ...O((r) => ({ x: r.end._1 * t, y: r.end._2 * t }))([e._1.head, ...e._1.tail])];
  a();
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
      a();
    })()
  ))(e.nodes)))(mp(_p)(e).result);
}, Du = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, Fp = (t) => (n) => (e) => {
  const r = t < 0.05 ? t : 0.05, o = (s, u) => {
    if (u.tag === "Leaf")
      return s;
    if (u.tag === "Node")
      return o(
        (() => {
          const c = Du(u._3)(e), f = (() => {
            if (c.tag === "Just")
              return c._1;
            if (c.tag === "Nothing")
              return { x: u._4.x, y: u._4.y, vx: 0, vy: 0 };
            a();
          })(), g = f.vx + (180 * (u._4.x - f.x) - 22 * f.vx) * r, l = f.vy + (180 * (u._4.y - f.y) - 22 * f.vy) * r;
          return Y(G)(u._3)({ x: f.x + g * r, y: f.y + l * r, vx: g, vy: l })(o(s, u._5));
        })(),
        u._6
      );
    a();
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
              const f = s(u, c._5), g = Du(c._3)(i);
              if (g.tag === "Just")
                return Y(G)(c._3)({ ...c._4, x: g._1.x, y: g._1.y })(f);
              if (g.tag === "Nothing")
                return Y(G)(c._3)(c._4)(f);
              a();
            })(),
            c._6
          );
        a();
      };
      return s(Q, n);
    })()
  };
};
(function() {
  var t = {}, n = "Pure", e = "Throw", r = "Catch", o = "Sync", i = "Async", s = "Bind", u = "Bracket", c = "Fork", f = "Sequential", g = "Map", l = "Apply", d = "Alt", _ = "Cons", h = "Resume", p = "Release", $ = "Finalizer", m = "Finalized", N = "Forked";
  function v(S, F, D, K) {
    this.tag = S, this._1 = F, this._2 = D, this._3 = K;
  }
  function T(S) {
    var F = function(D, K, V) {
      return new v(S, D, K, V);
    };
    return F.tag = S, F;
  }
  function w(S) {
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
  function E(S, F, D) {
    try {
      return F(D());
    } catch (K) {
      return S(K);
    }
  }
  function I(S, F, D) {
    try {
      return F(D)();
    } catch (K) {
      return D(S(K))(), w;
    }
  }
  var W = (function() {
    var S = 1024, F = 0, D = 0, K = new Array(S), V = !1;
    function B() {
      var nt;
      for (V = !0; F !== 0; )
        F--, nt = K[D], K[D] = void 0, D = (D + 1) % S, nt();
      V = !1;
    }
    return {
      isDraining: function() {
        return V;
      },
      enqueue: function(nt) {
        var U;
        F === S && (U = V, B(), V = U), K[(D + F) % S] = nt, F++, V || B();
      }
    };
  })();
  function z(S) {
    var F = {}, D = 0, K = 0;
    return {
      register: function(V) {
        var B = D++;
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
          var nt = 0, U = {};
          function tt(st) {
            U[st] = F[st].kill(V, function(_t) {
              return function() {
                delete U[st], nt--, S.isLeft(_t) && S.fromLeft(_t) && setTimeout(function() {
                  throw S.fromLeft(_t);
                }, 0), nt === 0 && B();
              };
            })();
          }
          for (var ot in F)
            F.hasOwnProperty(ot) && (nt++, tt(ot));
          return F = {}, D = 0, K = 0, function(st) {
            return new v(o, function() {
              for (var _t in U)
                U.hasOwnProperty(_t) && U[_t]();
            });
          };
        };
      }
    };
  }
  var M = 0, P = 1, R = 2, j = 3, et = 4, X = 5, A = 6;
  function x(S, F, D) {
    var K = 0, V = M, B = D, nt = null, U = null, tt = null, ot = null, st = null, _t = 0, At = 0, Tt = null, Vt = !0;
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
                    K === it && (K++, W.enqueue(function() {
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
                tt === null ? st = new v(_, B, st, U) : st = new v(_, B, new v(_, new v(h, tt, ot), st, U), U), tt = null, ot = null, V = P, B = B._1;
                break;
              // Enqueue the Bracket so that we can call the appropriate handlers
              // after resource acquisition.
              case u:
                _t++, tt === null ? st = new v(_, B, st, U) : st = new v(_, B, new v(_, new v(h, tt, ot), st, U), U), tt = null, ot = null, V = P, B = B._1;
                break;
              case c:
                V = j, ut = x(S, F, B._2), F && F.register(ut), B._1 && ut.run(), B = S.right(ut);
                break;
              case f:
                V = P, B = q(S, F, B._1);
                break;
            }
            break;
          case X:
            if (tt = null, ot = null, st === null)
              V = A, B = U || nt || B;
            else
              switch (ut = st._3, Nt = st._1, st = st._2, Nt.tag) {
                // We cannot recover from an unmasked interrupt. Otherwise we should
                // continue stepping, or run the exception handler if an exception
                // was raised.
                case r:
                  U && U !== ut && _t === 0 ? V = X : nt && (V = P, B = Nt._2(S.fromLeft(nt)), nt = null);
                  break;
                // We cannot resume from an unmasked interrupt or exception.
                case h:
                  U && U !== ut && _t === 0 || nt ? V = X : (tt = Nt._1, ot = Nt._2, V = R, B = S.fromRight(B));
                  break;
                // If we have a bracket, we should enqueue the handlers,
                // and continue with the success branch only if the fiber has
                // not been interrupted. If the bracket acquisition failed, we
                // should not run either.
                case u:
                  _t--, nt === null && ($t = S.fromRight(B), st = new v(_, new v(p, Nt._2, $t), st, ut), (U === ut || _t > 0) && (V = P, B = Nt._3($t)));
                  break;
                // Enqueue the appropriate handler. We increase the bracket count
                // because it should not be cancelled.
                case p:
                  st = new v(_, new v(m, B, nt), st, U), V = P, U && U !== ut && _t === 0 ? B = Nt._1.killed(S.fromLeft(U))(Nt._2) : nt ? B = Nt._1.failed(S.fromLeft(nt))(Nt._2) : B = Nt._1.completed(S.fromRight(B))(Nt._2), nt = null, _t++;
                  break;
                case $:
                  _t++, st = new v(_, new v(m, B, nt), st, U), V = P, B = Nt._1;
                  break;
                case m:
                  _t--, V = X, B = Nt._1, nt = Nt._2;
                  break;
              }
            break;
          case A:
            for (var Rt in Tt)
              Tt.hasOwnProperty(Rt) && (Vt = Vt && Tt[Rt].rethrow, k(Tt[Rt].handler(B)));
            Tt = null, U && nt ? setTimeout(function() {
              throw S.fromLeft(nt);
            }, 0) : S.isLeft(B) && Vt && setTimeout(function() {
              if (Vt)
                throw S.fromLeft(B);
            }, 0);
            return;
          case M:
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
          case M:
            U = S.left(it), V = A, B = U, ht(K);
            break;
          case et:
            U === null && (U = S.left(it)), _t === 0 && (V === et && (st = new v(_, new v($, B(it)), st, U)), V = X, B = null, nt = null, ht(++K));
            break;
          default:
            U === null && (U = S.left(it)), _t === 0 && (V = X, B = null, nt = null);
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
        return V === M && ht(K), ut;
      };
    }
    return {
      kill: lt,
      join: dt,
      onComplete: mt,
      isSuspended: function() {
        return V === M;
      },
      run: function() {
        V === M && (W.isDraining() ? ht(K) : W.enqueue(function() {
          ht(K);
        }));
      }
    };
  }
  function C(S, F, D, K) {
    var V = 0, B = {}, nt = 0, U = {}, tt = new Error("[ParAff] Early exit"), ot = null, st = t;
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
              if (lt._3 = it, Rt = !0, It = nt++, U[It] = _t(tt, it === $t ? lt._2 : lt._1, function() {
                return function() {
                  delete U[It], Rt ? Rt = !1 : dt === null ? At(it, null, null) : At(it, dt._1, dt._2);
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
            else if (lt._3 = ut, Rt = !0, It = nt++, U[It] = _t(tt, ut === $t ? lt._2 : lt._1, function() {
              return function() {
                delete U[It], Rt ? Rt = !1 : dt === null ? At(ut, null, null) : At(ut, dt._1, dt._2);
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
      var mt = P, lt = D, dt = null, it = null, ut, $t;
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
      for (var it in U)
        if (U.hasOwnProperty(it)) {
          dt = U[it];
          for (it in dt)
            dt.hasOwnProperty(it) && dt[it]();
        }
      U = null;
      var ut = _t(mt, st, lt);
      return function($t) {
        return new v(i, function(Nt) {
          return function() {
            for (var Rt in ut)
              ut.hasOwnProperty(Rt) && ut[Rt]();
            return w;
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
  function q(S, F, D) {
    return new v(i, function(K) {
      return function() {
        return C(S, F, D, K);
      };
    });
  }
  return v.EMPTY = t, v.Pure = T(n), v.Throw = T(e), v.Catch = T(r), v.Sync = T(o), v.Async = T(i), v.Bind = T(s), v.Bracket = T(u), v.Fork = T(c), v.Seq = T(f), v.ParMap = T(g), v.ParApply = T(l), v.ParAlt = T(d), v.Fiber = x, v.Supervisor = z, v.Scheduler = W, v.nonCanceler = w, v;
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
  a();
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
        const f = i + 1 | 0;
        return f >= 0 && f < n.length ? n[f] : 0;
      })())((() => {
        const f = i + 2 | 0;
        return f >= 0 && f < n.length ? n[f] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 2) {
      const u = Dg(t)((() => {
        const f = i + 1 | 0;
        return f >= 0 && f < n.length ? n[f] : 0;
      })())((() => {
        const f = i + 2 | 0;
        return f >= 0 && f < n.length ? n[f] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 3) {
      const u = Ug(t)({
        cpx: (() => {
          const f = i + 1 | 0;
          return f >= 0 && f < n.length ? n[f] : 0;
        })(),
        cpy: (() => {
          const f = i + 2 | 0;
          return f >= 0 && f < n.length ? n[f] : 0;
        })(),
        x: (() => {
          const f = i + 3 | 0;
          return f >= 0 && f < n.length ? n[f] : 0;
        })(),
        y: (() => {
          const f = i + 4 | 0;
          return f >= 0 && f < n.length ? n[f] : 0;
        })()
      }), c = r(i + 5 | 0);
      return () => (u(), c());
    }
    if (s === 4) {
      const u = Mg(t)({
        cp1x: (() => {
          const f = i + 1 | 0;
          return f >= 0 && f < n.length ? n[f] : 0;
        })(),
        cp1y: (() => {
          const f = i + 2 | 0;
          return f >= 0 && f < n.length ? n[f] : 0;
        })(),
        cp2x: (() => {
          const f = i + 3 | 0;
          return f >= 0 && f < n.length ? n[f] : 0;
        })(),
        cp2y: (() => {
          const f = i + 4 | 0;
          return f >= 0 && f < n.length ? n[f] : 0;
        })(),
        x: (() => {
          const f = i + 5 | 0;
          return f >= 0 && f < n.length ? n[f] : 0;
        })(),
        y: (() => {
          const f = i + 6 | 0;
          return f >= 0 && f < n.length ? n[f] : 0;
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
    a();
  })())(), hs(t)((() => {
    if (o.lineCap === "ButtCap")
      return ds;
    if (o.lineCap === "RoundCap")
      return _s;
    if (o.lineCap === "SquareCap")
      return ls;
    a();
  })())(), Yo(t)(e)(), is(t)(), os(t)());
}, jp = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = $c(t);
  return () => {
    if (s(), Wp(t)(e.x)(e.y)(e.w)(e.h)(r)(), o.tag === "Just" ? (Ur(t)(n)(ee(o._1.color))(), is(t)()) : o.tag === "Nothing" || a(), i.tag === "Just")
      return Fs(t)(n)(ee(i._1.color))(), rs(t)(i._1.width)(), Do(t)((() => {
        if (i._1.lineJoin === "RoundJoin")
          return Qo;
        if (i._1.lineJoin === "BevelJoin")
          return fs;
        if (i._1.lineJoin === "MiterJoin")
          return gs;
        a();
      })())(), hs(t)((() => {
        if (i._1.lineCap === "ButtCap")
          return ds;
        if (i._1.lineCap === "RoundCap")
          return _s;
        if (i._1.lineCap === "SquareCap")
          return ls;
        a();
      })())(), os(t)();
    i.tag !== "Nothing" && a();
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
    a();
  })())(), hs(t)((() => {
    if (r.lineCap === "ButtCap")
      return ds;
    if (r.lineCap === "RoundCap")
      return _s;
    if (r.lineCap === "SquareCap")
      return ls;
    a();
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
    a();
  })())(), s0(t)((() => {
    if (e.baseline === "BaselineTop")
      return Kg;
    if (e.baseline === "BaselineMiddle")
      return jg;
    if (e.baseline === "BaselineAlphabetic")
      return Zg;
    if (e.baseline === "BaselineBottom")
      return t0;
    a();
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
        a();
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
        a();
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
      const c = t[u] || { x: 0, y: 0 }, f = n[(u + i) % e] || { x: 0, y: 0 }, g = c.x - f.x, l = c.y - f.y;
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
  let f = 1 / 0, g = -1 / 0;
  for (let _ = 0; _ < o; _++) {
    const h = n[_], p = (h.x - i.x) * u.x + (h.y - i.y) * u.y;
    c[_] = p, p < f && (f = p), p > g && (g = p);
  }
  const l = g - f;
  let d = new Array(o);
  for (let _ = 0; _ < o; _++) {
    const h = n[_], p = e[_];
    if (p === void 0) {
      d[_] = h;
      continue;
    }
    const $ = l <= 1e-4 ? 0 : r.maxDelay * (1 - (c[_] - f) / l), m = Math.max(1e-4, 1 - $), N = _$((t - $) / m), v = N * N * (3 - 2 * N);
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
  a();
}, Or = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, Da = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, Fe = (t) => (n) => (e) => {
  const r = pt.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    a();
  })(), i = pt.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  a();
}, An = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
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
  a();
}, Wa = /* @__PURE__ */ jt(G)(Bt), Vu = /* @__PURE__ */ J(sr)(0), Uo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
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
  const n = Wt((e) => y, (e) => (r) => b("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...bt(Gt(1, t.length, t))((e) => [2, e.x, e.y]), 5];
  a();
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
  a();
})({ acc: Q, obstacles: e })(t).acc, L$ = (t) => {
  const n = Wt((e) => y, (e) => (r) => b("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...bt(n._1.tail)((e) => [2, e.x, e.y])];
  a();
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
    a();
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
  a();
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
})(Yt(0, e - 1 | 0)), b$ = (t) => (n) => {
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
  return (u) => (c) => (f) => (g) => {
    const l = Mo(g), d = { ...f, y: f.y + 5 }, _ = d.x + d.w / 2, h = d.y + d.h / 2, p = r.bind(t.pushAlpha(l.alpha))(() => r.bind(t.pushTransform({
      tx: _ * (1 - l.scale),
      ty: h * (1 - l.scale),
      sx: l.scale,
      sy: l.scale
    }))(() => r.bind(t.drawRoundedRect({ x: d.x, y: d.y, w: d.w, h: d.h })(7)(b("Just", { color: u.shadowFill, flat: !0 }))(y))(() => r.bind((() => {
      const $ = r.bind(t.pushClip(Ha(d)(7))(Qi))(() => r.bind(t.backgroundDots({
        viewport: { vx: d.x, vy: d.y, vw: d.w, vh: d.h },
        bgColor: u.bgTransparent,
        dotColor: u.shadowDot,
        tile: 1.6,
        dotRadius: 0.25
      }))(() => o));
      return c ? $ : e.pure();
    })())(() => r.bind(t.drawRoundedRect({ x: d.x, y: d.y, w: d.w, h: d.h })(7)(y)(b(
      "Just",
      { color: u.nodeStroke, width: 1.25, lineJoin: re, lineCap: we }
    )))(() => r.bind(i)(() => s))))));
    return l.alpha > 0 ? p : e.pure();
  };
}, x$ = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = pe(e), i = t.popTransform, s = t.popAlpha;
  return (u) => (c) => (f) => (g) => {
    const l = Ls(`
`)(f.label === "" ? c : f.label), d = l.length === 0 ? [""] : l, _ = f.y + f.h / 2 - ct(d.length) * 13.2 / 2 + 6.6, h = Mo(g), p = f.x + f.w / 2, $ = f.y + f.h / 2, m = r.bind(t.pushAlpha(h.alpha))(() => r.bind(t.pushTransform({
      tx: p * (1 - h.scale),
      ty: $ * (1 - h.scale),
      sx: h.scale,
      sy: h.scale
    }))(() => r.bind(t.drawRoundedRect({ x: f.x, y: f.y, w: f.w, h: f.h })(7)(b("Just", { color: u.nodeFill, flat: !1 }))(b(
      "Just",
      { color: u.nodeStroke, width: 1.25, lineJoin: re, lineCap: we }
    )))(() => r.bind(o((N) => t.drawText({
      x: f.x + f.w / 2,
      y: _ + ct(N._1) * 13.2,
      content: N._2,
      font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 },
      color: u.text,
      align: Bs,
      baseline: Hr
    }))(Pt(fr)(d)))(() => r.bind(i)(() => s)))));
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
    a();
  })(he(i.nodes));
}, Va = (t) => {
  const n = E$(t), e = t.Monad0().Applicative0(), r = pe(e);
  return (o) => (i) => (s) => (u) => r((c) => {
    const f = An(c._1)(u.nodes);
    if (f.tag === "Just")
      return n(o)(i)(c._2)(f._1);
    if (f.tag === "Nothing")
      return e.pure();
    a();
  })(he(s.nodes));
}, Hi = (t) => (n) => {
  const e = n.y - t.y, r = n.x - t.x;
  return gr(r * r + e * e);
}, C$ = (t) => $n((n) => (e) => ({ a: n, b: e, len: Hi(n)(e) }), t, Gt(1, t.length, t)), S$ = (t) => (n) => {
  const e = n.length - 1 | 0, r = e >= 0 && e < n.length ? b("Just", n[e]) : y, o = (() => {
    if (r.tag === "Just")
      return [r._1];
    if (r.tag === "Nothing")
      return [];
    a();
  })(), i = 0 < n.length ? b("Just", n[0]) : y, s = (() => {
    if (i.tag === "Just")
      return i._1;
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    a();
  })(), u = n.length;
  return u < 3 ? n : [
    s,
    ...bt(Yt(1, u - 2 | 0))((c) => {
      const f = c + 1 | 0, g = f >= 0 && f < n.length ? b("Just", n[f]) : y, l = c >= 0 && c < n.length ? b("Just", n[c]) : y, d = c - 1 | 0, _ = d >= 0 && d < n.length ? b("Just", n[d]) : y;
      if (_.tag === "Just" && l.tag === "Just" && g.tag === "Just") {
        const h = l._1, p = Hi(h)(g._1), $ = Hi(_._1)(h), m = le(t)(p / 2), N = le(t)($ / 2), v = p > 0 ? m / p : 0, T = h.x + (g._1.x - h.x) * v, w = h.y + (g._1.y - h.y) * v, k = $ > 0 ? N / $ : 0, E = h.x + (_._1.x - h.x) * k, I = h.y + (_._1.y - h.y) * k;
        return O((W) => {
          const z = ct(W) / ct(10), M = 1 - z;
          return { x: M * M * E + 2 * M * z * h.x + z * z * T, y: M * M * I + 2 * M * z * h.y + z * z * w };
        })(Yt(0, 10));
      }
      return [];
    }),
    ...o
  ];
}, G$ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = pe(r);
  return (i) => (s) => (u) => (c) => (f) => (g) => {
    const l = ks(g).length, d = ct(l + 1 | 0), _ = (m) => {
      const N = (u * d - ct(m)) / 1.5, v = N < 0 ? 0 : N > 1 ? 1 : N;
      return v * v * (3 - 2 * v);
    }, p = ((m) => {
      let N = m, v = !0, T;
      for (; v; ) {
        const w = N;
        if (w >= l) {
          v = !1, T = w;
          continue;
        }
        if (_(w) >= 1) {
          N = w + 1 | 0;
          continue;
        }
        v = !1, T = w;
      }
      return T;
    })(0), $ = p >= l ? [] : Ce((m) => _(m) > 0)(Yt(p, l - 1 | 0)).init;
    return e.bind((() => {
      const m = t.drawText({
        x: c,
        y: f,
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
        y: f - (1 - v) * 10,
        content: _n(1)(Sr(Pe(_n(m)(g)))(g)),
        font: i,
        color: { ...s, a: ce(lc(v * ct(s.a))) },
        align: Io,
        baseline: Hr
      });
    }))($));
  };
}, Ko = (t) => (n) => (e) => (r) => {
  const o = O((p) => ct(Ji(1)(ks(p).length)))(r), i = Or(1)(J(sr)(0)(o)), s = Or(0.05)(1 - n - e), u = t < n ? 0 : t > 1 - e ? 1 : (t - n) / s, c = u * i, f = Ji(1)(r.length), l = ((p) => ($) => (m) => {
    let N = p, v = $, T = m, w = !0, k;
    for (; w; ) {
      const E = N, I = v, z = Wt((M) => y, (M) => (P) => b("Just", { head: M, tail: P }), T);
      if (z.tag === "Nothing") {
        w = !1, k = Ji(0)(f - 1 | 0);
        continue;
      }
      if (z.tag === "Just") {
        if (I + z._1.head >= c) {
          w = !1, k = E;
          continue;
        }
        N = E + 1 | 0, v = I + z._1.head, T = z._1.tail;
        continue;
      }
      a();
    }
    return k;
  })(0)(0)(o), d = J(sr)(0)(l < 1 ? [] : Gt(0, l, o)), _ = d / i;
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
  return (s) => (u) => e.Apply0().Functor0().map((c) => Wa(vt((f) => f)(c)))(i((c) => {
    if (c._2.tag === "Filling" && c._2._1.labels.length !== 0) {
      const f = An(c._2._1.node)(s.nodes);
      if (f.tag === "Just")
        return e.bind(r(f._1)(c._2._1.progress)(c._2._1.labels))((g) => o.pure(b("Just", L(c._1, g))));
      if (f.tag === "Nothing")
        return o.pure(y);
      a();
    }
    return o.pure(y);
  })(he(u.tokens)));
}, Yu = (t) => (n) => O((e) => {
  const r = 6.283185307179586 * ct(e) / ct(64);
  return { x: t.x + n * Zi(r), y: t.y + n * ts(r) };
})(Yt(0, 63)), Ds = (t) => (n) => {
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
  return (r) => (o) => (i) => (s) => (u) => (c) => (f) => {
    const g = { x: i.x + i.w / 2, y: i.y + i.h / 2 }, l = Or(0.05)(1 - c - f), d = u < c ? 0 : u > 1 - f ? 1 : (u - c) / l, _ = { x: s.x + s.w / 2, y: s.y + s.h / 2 }, h = (p, $) => n.bind(t.pushAlpha($))(() => n.bind(t.fillStrokePath(Ds(p)(6))({ color: r, flat: !0 })({
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
  const r = Cr(6)(0.55)(Fe(0)(1)((1 - t) / 0.06)), o = t > 0.94, i = o && e > 1e-4, s = Cr(6)(0.55)(Fe(0)(1)(t / 0.06)), u = t < 0.06, c = u && n > 1e-4, f = o && e <= 1e-4;
  return {
    popScale: c ? s : i ? r : 1,
    flipY: u && n <= 1e-4 ? s : f ? r : 1,
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
    const c = Ya(s)(0)(0), f = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 }, g = Ko(s)(0)(0)(bt(u)(Qs));
    return n.bind(t.measureText(f)(g.line))((l) => {
      const d = i.x + i.w / 2, _ = l + 28, h = i.y - 25.2 - 14, p = d - _ / 2, $ = [1, d, h + 25.2, 2, d, i.y], m = { x: d, y: h + 12.6 };
      return e(c)(d - _ / 2)(h + 25.2)(m)(n.bind(t.drawRoundedRect({ x: d - _ / 2, y: h + 1.5, w: _, h: 25.2 })(6)(b(
        "Just",
        { color: r.chipShadow, flat: !0 }
      ))(y))(() => n.bind(t.drawRoundedRect({ x: p, y: h, w: _, h: 25.2 })(6)(b("Just", { color: r.chip, flat: !0 }))(b(
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
        font: f,
        color: r.chipText,
        align: Bs,
        baseline: Hr
      })))));
    });
  };
}, B$ = (t) => {
  const n = t.Monad0().Applicative0();
  return (e) => (r) => {
    const o = r.length - 1 | 0, i = o < 1 ? [] : Gt(0, o, r), s = i.length - 1 | 0, u = s >= 0 && s < i.length ? b("Just", i[s]) : y, c = r.length - 1 | 0;
    if (c >= 0 && c < r.length && u.tag === "Just") {
      const f = r[c].y - u._1.y, g = r[c].x - u._1.x, l = gr(g * g + f * f), d = f / l, _ = -d, h = g / l, p = r[c].x + h * 0.875, $ = r[c].y + d * 0.875, m = $ - d * 8.75, N = p - h * 8.75, v = [1, p, $, 2, N + _ * 4.375, m + h * 4.375, 2, N - _ * 4.375, m - h * 4.375, 5];
      return l <= 1e-4 ? n.pure() : t.fillPath(v)({ color: e.arrowFill, flat: !0 });
    }
    return n.pure();
  };
}, fo = (t) => (n) => (e) => (r) => (o) => O((i) => {
  const s = e + (r - e) * (ct(i) / ct(o));
  return { x: t.x + n * Zi(s), y: t.y + n * ts(s) };
})(Yt(0, o - 1 | 0)), Xu = (t) => (n) => {
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
  const i = r.pos + o.len, s = e < i ? (e - r.pos) / o.len : 1, u = { x: o.a.x + (o.b.x - o.a.x) * s, y: o.a.y + (o.b.y - o.a.y) * s }, c = n > r.pos ? (n - r.pos) / o.len : 0, f = { x: o.a.x + (o.b.x - o.a.x) * c, y: o.a.y + (o.b.y - o.a.y) * c }, g = r.points.length - 1 | 0, l = g >= 0 && g < r.points.length ? (() => {
    const d = r.points[g].x - f.x;
    return (d < 0 ? -d < 1e-4 : d < 1e-4) && (() => {
      const _ = r.points[g].y - f.y;
      return _ < 0 ? -_ < 1e-4 : _ < 1e-4;
    })();
  })() ? gn(r.points)(u) : [...r.points, f, u] : [f, u];
  return o.len <= 0 || i <= n || r.pos >= e ? { ...r, pos: i } : { pos: i, points: l };
})({ pos: 0, points: [] })(t).points, D$ = (t) => (n) => (e) => {
  const r = Wt((o) => y, (o) => (i) => b("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just") {
    const o = C$(t), i = v$(o), s = Fe(0)(i)(n * i), u = Fe(0)(i)(e * i);
    return u <= s ? [] : Q$(o)(s)(u);
  }
  a();
}, W$ = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = B$(t);
  return (o) => (i) => (s) => (u) => {
    const c = S$(8)(s);
    if (u.hi <= u.lo)
      return e.pure();
    const f = D$(c)(u.lo)(u.hi);
    return f.length === 0 ? e.pure() : n.Bind1().bind(t.strokePath(L$(f))({
      color: o.edge,
      width: 0.9375,
      lineJoin: re,
      lineCap: Qa
    }))(() => r(o)(f));
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
        a();
      })());
    if (c.tag === "Nothing")
      return e.pure();
    a();
  })(he(i.edges));
}, Ua = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = 0 < t.length ? b("Just", t[0]) : y, f = (() => {
    if (c.tag === "Just")
      return c._1;
    if (c.tag === "Nothing")
      return u;
    a();
  })(), g = t.length - 1 | 0, l = g >= 0 && g < t.length ? b("Just", t[g]) : y, d = (() => {
    if (l.tag === "Just")
      return l._1;
    if (l.tag === "Nothing")
      return s;
    a();
  })(), _ = Hu(128)(Xu(4)(qi(2)(n)))(Yu(f)(6)), h = Or(0.05)(1 - o - i), p = r < o ? 0 : r > 1 - i ? 1 : (r - o) / h, $ = f.x - u.x, m = 2 * (() => {
    const j = f.y - u.y;
    return ($ < 0 ? -$ : $) + (j < 0 ? -j : j);
  })(), N = d.x - s.x, v = 2 * (() => {
    const j = d.y - s.y;
    return (N < 0 ? -N : N) + (j < 0 ? -j : j);
  })(), T = m + $s(t) + v, w = T <= 1e-4 ? 1 : 1 - v / T, k = T <= 1e-4 ? 0 : m / T, E = w - k, I = Hu(128)(Yu(d)(6))(Xu(4)(qi(2)(e))), W = { maxDelay: 0.4, smoothPasses: 2 }, z = vc(t)(Fe(0)(1)(E <= 1e-4 ? 0 : (p - k) / E)), M = (() => {
    if (z.tag === "Just")
      return z._1;
    if (z.tag === "Nothing")
      return f;
    a();
  })(), P = (() => {
    if (w >= 1)
      return 0;
    const j = (p - w) / (1 - w), et = j < 0 ? 0 : j > 1 ? 1 : j;
    return et * et * (3 - 2 * et);
  })(), R = (() => {
    if (k <= 1e-4)
      return 1;
    const j = p / k, et = j < 0 ? 0 : j > 1 ? 1 : j;
    return et * et * (3 - 2 * et);
  })();
  return p < k ? Ni("PolyShape", zu(R)(_.from)(_.to)(W)) : p >= w ? Ni("PolyShape", zu(P)(I.from)(I.to)(W)) : Ni("CircleShape", M, 6);
}, q$ = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => {
  const f = Ua(r)(o)(i)(s)(u)(c);
  if (f.tag === "CircleShape")
    return t.fillStrokePath(Ds(f._1)(f._2))({ color: n, flat: !0 })({
      color: e,
      width: 1,
      lineJoin: re,
      lineCap: we
    });
  if (f.tag === "PolyShape")
    return f._1.length >= 3 ? t.fillStrokePath(T$(f._1))({ color: n, flat: !0 })({
      color: e,
      width: 1,
      lineJoin: re,
      lineCap: we
    }) : t.Monad0().Applicative0().pure();
  a();
}, Ma = (t) => {
  const n = A$(t), e = t.Monad0().Applicative0(), r = pe(e);
  return (o) => (i) => (s) => (u) => r((c) => {
    if (c._2.tag === "Travelling") {
      const f = An(c._2._1.target)(o.nodes), g = An(c._2._1.source)(o.nodes);
      if (g.tag === "Just" && f.tag === "Just") {
        const l = Uo(c._2._1.edge)(o.edges);
        if (l.tag === "Just")
          return q$(t)(s)(u)((() => {
            if (c._2._1.direction === "Forward")
              return l._1;
            if (c._2._1.direction === "Backward")
              return vn(l._1);
            a();
          })())(g._1)(f._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost);
        if (l.tag === "Nothing")
          return n(s)(u)(g._1)(f._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost);
        a();
      }
      return e.pure();
    }
    if (c._2.tag === "Filling") {
      const f = An(c._2._1.node)(o.nodes);
      if (f.tag === "Just")
        return t.drawRoundedRect((() => {
          const g = qi(2)(f._1);
          return { x: g.x, y: g.y, w: g.w, h: g.h };
        })())(4)(b("Just", { color: s, flat: !0 }))(b(
          "Just",
          { color: u, width: 1, lineJoin: re, lineCap: we }
        ));
      if (f.tag === "Nothing")
        return e.pure();
      a();
    }
    return e.pure();
  })(he(i.tokens));
}, Ka = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Ma(t), o = t.popClip, i = t.popBlend, s = t.popLayer, u = n.Applicative0(), c = pe(u), f = t.popAlpha;
  return (g) => (l) => (d) => {
    if (g.tokenInsideBlend === "Difference")
      return e.bind(t.pushLayer(h$))(() => e.bind(t.pushBlend(Di))(() => e.bind(t.pushClip(Wi(l)(d))(Qi))(() => e.bind(r(l)(d)(g.tokenInside)(g.tokenInsideStroke))(() => e.bind(o)(() => e.bind(i)(() => e.bind(s)(() => e.bind(t.pushLayer(p$))(() => e.bind(c((_) => {
        const h = An(_._1)(d.nodes);
        return h.tag === "Just" && Mo(h._1).alpha > 0 ? t.drawRoundedRect({ x: _._2.x, y: _._2.y, w: _._2.w, h: _._2.h })(7)(b(
          "Just",
          { color: sn, flat: !1 }
        ))(y) : u.pure();
      })(he(l.nodes)))(() => s)))))))));
    if (g.tokenInsideBlend === "Normal")
      return e.bind(t.pushClip(Wi(l)(d))(Qi))(() => e.bind(t.pushAlpha(g.tokenInsideAlpha))(() => e.bind(r(l)(d)(g.tokenInside)(g.tokenInsideStroke))(() => e.bind(f)(() => o))));
    a();
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
  a();
}, H$ = (t) => {
  const n = qa(t), e = t.Monad0(), r = e.Bind1(), o = pe(e.Applicative0()), i = G$(t);
  return (s) => (u) => (c) => (f) => (g) => (l) => (d) => (_) => (h) => {
    const p = Ko(g)(l)(d)(bt(_)(Qs)), $ = p.line, m = p.phaseInLabel / 0.45, N = m < 0 ? 0 : m > 1 ? 1 : m, v = h.w, T = h.y, w = h.x, k = w + 14, E = h.h, I = T + E / 2;
    return n(Ya(g)(l)(d))(w)(T + E)({ x: w + v / 2, y: I })(r.bind(o((W) => t.fillPath(Ds(W)(1.5))({
      color: s.trailDot,
      flat: !0
    }))(b$(h)(Za(u)(c)(f)(g)(l)(d))))(() => r.bind(t.drawRoundedRect({ x: w, y: T, w: v, h: E })(3)(b(
      "Just",
      { color: s.chipPillFill, flat: !0 }
    ))(y))(() => i({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(s.chipPillText)(N)(k)(I)($))));
  };
}, tf = (t) => {
  const n = H$(t), e = t.Monad0(), r = e.Applicative0(), o = F$(t), i = e.Bind1(), s = pe(r), u = t.popLayer;
  return (c) => (f) => (g) => (l) => i.bind(t.pushLayer($$))(() => i.bind(s((d) => {
    if (d._2.tag === "Travelling") {
      if (d._2._1.labels.length !== 0) {
        const _ = An(d._2._1.target)(f.nodes), h = An(d._2._1.source)(f.nodes), p = Uo(d._2._1.edge)(f.edges), $ = Da(d._1)(l);
        if ($.tag === "Just" && p.tag === "Just" && h.tag === "Just" && _.tag === "Just")
          return n(c)((() => {
            if (d._2._1.direction === "Forward")
              return p._1;
            if (d._2._1.direction === "Backward")
              return vn(p._1);
            a();
          })())(h._1)(_._1)(d._2._1.progress)(d._2._1.holdPre)(d._2._1.holdPost)(d._2._1.labels)($._1);
      }
      return r.pure();
    }
    if (d._2.tag === "Filling" && d._2._1.labels.length !== 0) {
      const _ = An(d._2._1.node)(f.nodes);
      if (_.tag === "Just")
        return o(c)(f)(_._1)(d._2._1.progress)(d._2._1.labels);
      if (_.tag === "Nothing")
        return r.pure();
      a();
    }
    return r.pure();
  })(he(g.tokens)))(() => u));
}, O$ = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => (i) => (s) => (u) => (c) => {
    const f = Za(e)(r)(o)(i)(s)(u);
    return n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(Ko(i)(s)(u)(bt(c)(Qs)).line))((g) => n.Applicative0().pure({
      x: f.x + 14 + g / 2 - g / 2 - 14,
      y: f.y - 6 - 8 - 6.6 - 6,
      w: g + 28,
      h: 25.2
    }));
  };
}, z$ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = O$(t), o = n.Applicative0(), i = Yr.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => Wa(vt((f) => f)(c)))(i((c) => {
    if (c._2.tag === "Travelling" && c._2._1.labels.length !== 0) {
      const f = An(c._2._1.target)(s.nodes), g = An(c._2._1.source)(s.nodes), l = Uo(c._2._1.edge)(s.edges);
      if (l.tag === "Just" && g.tag === "Just" && f.tag === "Just")
        return e.bind(r((() => {
          if (c._2._1.direction === "Forward")
            return l._1;
          if (c._2._1.direction === "Backward")
            return vn(l._1);
          a();
        })())(g._1)(f._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost)(c._2._1.labels))((d) => o.pure(b(
          "Just",
          L(c._1, d)
        )));
    }
    return o.pure(y);
  })(he(u.tokens)));
}, nf = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = z$(t), o = P$(t);
  return (i) => (s) => e.bind(r(i)(s))((u) => e.bind(o(i)(s))((c) => n.Applicative0().pure(w$((() => {
    const f = (g) => {
      if (g.tag === "Leaf")
        return Q;
      if (g.tag === "Node")
        return Dt("Node", g._1, g._2, g._3, void 0, f(g._5), f(g._6));
      a();
    };
    return Lt(G.compare)(Et(Pn.foldr, f(u)));
  })())(u)([
    ...O(J$)((() => {
      const f = (g, l) => {
        if (g.tag === "Leaf")
          return l;
        if (g.tag === "Node")
          return f(g._5, qt("Cons", g._4, f(g._6, l)));
        a();
      };
      return Et(Ut.foldr, f(i.nodes, zt));
    })()),
    ...(() => {
      const f = (g, l) => {
        if (g.tag === "Leaf")
          return l;
        if (g.tag === "Node")
          return f(g._5, qt("Cons", g._4, f(g._6, l)));
        a();
      };
      return Et(Ut.foldr, f(c, zt));
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
      const f = o.vy + 12 * i, g = s + 6 * i * 2, l = c + 11 * i * 2, d = o.vx + o.vw / 2;
      return e.bind(t.drawRoundedRect({ x: d - l / 2, y: f, w: l, h: g })(g / 2)(b(
        "Just",
        { color: { r: 255, g: 255, b: 255, a: 240 }, flat: !0 }
      ))(b(
        "Just",
        { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1 * i, lineJoin: re, lineCap: Qa }
      )))(() => t.drawText({
        x: d,
        y: f + g / 2,
        content: r,
        font: u,
        color: { r: 28, g: 30, b: 36, a: 255 },
        align: Bs,
        baseline: Hr
      }));
    });
  };
}, Y$ = (t) => {
  const n = t.Monad0().Bind1(), e = t.Monad0().Bind1(), r = Xa(t), o = Va(t), i = za(t), s = ja(t), u = Ka(t), c = V$(t), f = ef(t);
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
    }))(() => f(d.frameTitle)(_)))))))));
  };
}, X$ = (t) => {
  const n = t.Monad0().Bind1(), e = t.Monad0().Bind1(), r = Xa(t), o = Va(t), i = za(t), s = ja(t), u = Ka(t), c = tf(t), f = ef(t);
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
    }))(() => f(d.frameTitle)(h)))))))));
  };
}, Uu = (t) => (n) => (e) => {
  const r = pt.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    a();
  })(), i = pt.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  a();
}, U$ = /* @__PURE__ */ nf(Ga), M$ = /* @__PURE__ */ X$(Ga), K$ = (t) => {
  const n = t.vx + t.vw - 4, e = t.vy + t.vh - 4, r = t.vx + 4, o = t.vy + 4, i = (s) => {
    if (s.tag === "Leaf")
      return Q;
    if (s.tag === "Node")
      return Dt("Node", s._1, s._2, s._3, { ...s._4, x: Uu(r)(n - s._4.w)(s._4.x), y: Uu(o)(e - s._4.h)(s._4.y) }, i(s._5), i(s._6));
    a();
  };
  return i;
}, j$ = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = { padding: 24, transparentBg: !1, halftoneShadows: !0, watermark: "", theme: t }, c = zp(n)(e);
  return () => {
    const f = c(), g = U$(r)(o)(f)(), l = Fp(i)(K$(jo(u)(r)(o))(g))(s);
    return M$(u)(r)(o)(l.applied)(f)(), l.springs;
  };
}, Le = (t) => "rgb(" + an(t.r) + "," + an(t.g) + "," + an(t.b) + ")", go = /* @__PURE__ */ Mn(/* @__PURE__ */ Xn("Fixed", /* @__PURE__ */ Un(0)(20)(4))), Z$ = (t) => "translate(" + go(t.tx) + "," + go(t.ty) + ") scale(" + go(t.sx) + "," + go(t.sy) + ")", Jt = /* @__PURE__ */ Mn(/* @__PURE__ */ Xn("Fixed", /* @__PURE__ */ Un(0)(20)(2))), Ws = (t) => {
  const n = [];
  let e = 0;
  for (; e < t.length; ) {
    const r = e, o = r >= 0 && r < t.length ? b("Just", t[r]) : y;
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
    a();
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
  a();
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
  a();
})() + (() => {
  if (r.tag === "Just")
    return ' stroke="' + Le(r._1.color) + '" stroke-opacity="' + Jt(ct(r._1.color.a) / 255) + '" stroke-width="' + Jt(r._1.width) + '" stroke-linejoin="' + (() => {
      if (r._1.lineJoin === "RoundJoin")
        return "round";
      if (r._1.lineJoin === "BevelJoin")
        return "bevel";
      if (r._1.lineJoin === "MiterJoin")
        return "miter";
      a();
    })() + '" stroke-linecap="' + (() => {
      if (r._1.lineCap === "ButtCap")
        return "butt";
      if (r._1.lineCap === "RoundCap")
        return "round";
      if (r._1.lineCap === "SquareCap")
        return "square";
      a();
    })() + '"';
  if (r.tag === "Nothing")
    return "";
  a();
})() + "/>", Ku = (t) => (n) => '<path d="' + Ws(t) + '" fill="none" stroke="' + Le(n.color) + '" stroke-opacity="' + Jt(ct(n.color.a) / 255) + '" stroke-width="' + Jt(n.width) + '" stroke-linejoin="' + (() => {
  if (n.lineJoin === "RoundJoin")
    return "round";
  if (n.lineJoin === "BevelJoin")
    return "bevel";
  if (n.lineJoin === "MiterJoin")
    return "miter";
  a();
})() + '" stroke-linecap="' + (() => {
  if (n.lineCap === "ButtCap")
    return "butt";
  if (n.lineCap === "RoundCap")
    return "round";
  if (n.lineCap === "SquareCap")
    return "square";
  a();
})() + '"/>', um = (t) => {
  const n = Vc(Pr(t.content));
  return '<text x="' + Jt(t.x) + '" y="' + Jt(t.y) + '"' + (() => {
    if (t.baseline === "BaselineTop")
      return ' dy="0.8em"';
    if (t.baseline === "BaselineMiddle")
      return ' dy="0.32em"';
    if (t.baseline === "BaselineAlphabetic" || t.baseline === "BaselineBottom")
      return "";
    a();
  })() + ' fill="' + Le(t.color) + '" fill-opacity="' + Jt(ct(t.color.a) / 255) + '" font-size="' + Jt(t.font.size) + '" font-family="Ilisarniq, ui-sans-serif, system-ui, sans-serif" font-weight="' + an(t.font.weight) + '" text-anchor="' + (() => {
    if (t.align === "AlignLeft")
      return "start";
    if (t.align === "AlignCenter")
      return "middle";
    if (t.align === "AlignRight")
      return "end";
    a();
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
          a();
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
      a();
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
}, am = /* @__PURE__ */ Y$(cm), fm = (t) => (n) => (e) => {
  const r = { padding: 24, transparentBg: !1, halftoneShadows: !0, watermark: "", theme: t }, o = jo(r)(n)(e);
  return {
    viewBox: Jt(o.vx) + " " + Jt(o.vy) + " " + Jt(o.vw) + " " + Jt(o.vh),
    body: (() => {
      const i = [], s = { value: 0 }, u = { value: 0 }, c = { value: 0 };
      return am(r)(n)(e)({ out: i, maskDepth: s, clipCounter: u, patternCounter: c, viewport: o })(), Ho("")(i);
    })(),
    vx: o.vx,
    vy: o.vy,
    vw: o.vw,
    vh: o.vh
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
    a();
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
    a();
  }
  return i;
}, pn = /* @__PURE__ */ Kr(Te), hm = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = y;
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
    a();
  }
  return i;
}, pm = /* @__PURE__ */ (() => {
  const t = On.unfoldr((n) => {
    if (n.tag === "Nil")
      return y;
    if (n.tag === "Cons")
      return b("Just", L(n._1, n._2));
    a();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, qt("Cons", r._3, e(r._6, o)));
      a();
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
    a();
  }
  return i;
}, Os = (t) => (n) => (e) => J((r) => (o) => t.Bind1().bind(r)((i) => n(i)(o)))(t.Applicative0().pure(e)), mm = /* @__PURE__ */ J((t) => (n) => Y(G)(n)()(t))(Q), Nm = /* @__PURE__ */ (() => {
  const n = ((e) => (r) => {
    let o = e, i = r, s = !0, u;
    for (; s; ) {
      const c = o, f = i;
      if (f.tag === "Nil") {
        s = !1, u = c;
        continue;
      }
      if (f.tag === "Cons") {
        o = Y(G)(f._1)()(c), i = f._2;
        continue;
      }
      a();
    }
    return u;
  })(Q);
  return (e) => n((() => {
    const r = (o, i) => {
      if (o.tag === "Leaf")
        return i;
      if (o.tag === "Node")
        return r(o._5, qt("Cons", o._3, r(o._6, i)));
      a();
    };
    return r(e, zt);
  })());
})(), sf = /* @__PURE__ */ Vf(pn)(Bt), Jm = (t) => Hs("Par", t), uf = (t) => Hs("Seq", t), vm = (t) => (n) => (e) => {
  const r = nr(Kt, y, (o) => o._1 === t, e);
  if (r.tag === "Just") {
    const o = er(Kt, y, r._1, L(t, n), e);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return o._1;
    a();
  }
  if (r.tag === "Nothing")
    return gn(e)(L(t, n));
  a();
}, Tm = (t) => (n) => O((e) => e._1 === t ? L(e._1, { ...e._2, label: b("Just", n) }) : L(e._1, e._2)), Dn = (t) => xn.state((n) => L(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return { ...n, error: b("Just", { msg: t, line: n.currentLine, column: n.currentColumn }) };
    a();
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
    a();
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
        newEdge: { id: r, from: { node: n.newFrom, port: y }, to: { node: n.newTo, port: y } }
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
  currentKf: y,
  currentLine: 0,
  currentColumn: 0,
  error: y
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
        return Qt.bind(Dn(o ? i ? "token references unknown node: " + e.from + ", " + e.to : "token references unknown node: " + e.from : i ? "token references unknown node: " + e.to : "token references unknown node: "))(() => pn.pure({ events: [], firstId: y, lastId: y }));
      const s = e.to + "->" + e.from, u = e.from + "->" + e.to;
      return fe(u)(r.currEdges) ? ju(t)(ou(
        "SendToken",
        { from: e.from, to: e.to, edge: u, direction: E0, labels: e.labels }
      )) : fe(s)(r.currEdges) ? ju(t)(ou(
        "SendToken",
        { from: e.from, to: e.to, edge: s, direction: x0, labels: e.labels }
      )) : Qt.bind(Dn("token " + e.from + "→" + e.to + ": no edge between " + e.from + " and " + e.to))(() => pn.pure({
        events: [],
        firstId: y,
        lastId: y
      }));
    });
  }
  return pn.pure({ events: [], firstId: y, lastId: y });
}, bm = (t) => vt((n) => hm(n)(t.graphEdges))(Et(br, pm(t.currEdges))), Em = (t) => (n) => {
  const e = gt((o) => o.from.node === n.id || o.to.node === n.id, bm(t)), r = Os(Sf)((o) => (i) => {
    const s = i.from + "->" + n.id, u = n.id + "->" + i.to, c = i.from + "->" + i.to, f = "via " + i.from + " " + i.to + ": no edge " + i.from + "→" + n.id;
    if (!fe(s)(t.currEdges))
      return kt("Left", f);
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
          from: { node: i.from, port: y },
          to: { node: i.to, port: y }
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
    a();
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
              a();
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
  a();
}, xm = (t) => ({
  nodes: O(Ro)(t.graphNodes),
  edges: (() => {
    const n = (e, r) => {
      if (e.tag === "Leaf")
        return r;
      if (e.tag === "Node")
        return n(e._5, qt("Cons", e._4, n(e._6, r)));
      a();
    };
    return Et(Ut.foldr, n(t.graphEdges, zt));
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
      a();
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
      a();
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
          graphEdges: Y(G)(i)({ id: i, from: { node: n.from, port: y }, to: { node: n.to, port: y } })(s.graphEdges),
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
      a();
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
        return gn(e.scenes)(kc("Structural", { from: e.currentKf._1, to: r, focus: y }));
      a();
    })()
  };
  return xn.state((i) => L(void 0, o));
})), Im = (t) => (n) => {
  const e = Wt((r) => y, (r) => (o) => b("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return pn.pure({ events: [], firstId: y, lastId: y });
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
      a();
    })())(s))((u) => pn.pure({
      events: [...i.events, ...u.events],
      firstId: (() => {
        if (i.firstId.tag === "Just")
          return b("Just", i.firstId._1);
        if (i.firstId.tag === "Nothing")
          return u.firstId;
        a();
      })(),
      lastId: (() => {
        if (u.lastId.tag === "Just")
          return b("Just", u.lastId._1);
        if (u.lastId.tag === "Nothing")
          return i.lastId;
        a();
      })()
    })))(o)(r))((i) => pn.pure(i)));
  }
  a();
}, Pm = (t) => (n) => {
  const e = Wt((r) => y, (r) => (o) => b("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return pn.pure({ events: [], firstId: y, lastId: y });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Qt.bind(zr(t)(e._1.head))((o) => Qt.bind(Am((() => {
      if (o.firstId.tag === "Just")
        return vs("With", o.firstId._1);
      if (o.firstId.tag === "Nothing")
        return t;
      a();
    })())(r))((i) => pn.pure({
      events: [...o.events, ...i.events],
      firstId: o.firstId,
      lastId: (() => {
        if (o.lastId.tag === "Just")
          return b("Just", o.lastId._1);
        if (o.lastId.tag === "Nothing")
          return i.lastId;
        a();
      })()
    })));
  }
  a();
}, zr = (t) => (n) => {
  if (n.tag === "Leaf") {
    const e = n._1;
    return Qt.bind(xn.state((r) => L(void 0, { ...r, currentLine: e.line, currentColumn: e.column })))(() => km(t)(e.op));
  }
  if (n.tag === "Seq")
    return Im(t)(n._1);
  if (n.tag === "Par")
    return Pm(t)(n._1);
  a();
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
    a();
  })(),
  lastId: (() => {
    if (r.lastId.tag === "Just")
      return b("Just", r.lastId._1);
    if (r.lastId.tag === "Nothing")
      return n.lastId;
    a();
  })()
})))({ events: [], firstId: y, lastId: y }), Rm = (t) => Qt.bind(Gn)((n) => {
  if (n.currentKf.tag === "Nothing")
    return Dn("flow ops before any structural frame");
  if (n.currentKf.tag === "Just") {
    const e = n.currentKf._1;
    return Qt.bind(zr(b0)(t))((r) => Qt.bind(Gn)((o) => {
      const i = { ...o, scenes: gn(o.scenes)(kc("DataFlow", { keyframe: e, events: r.events, focus: y })) };
      return xn.state((s) => L(void 0, i));
    }));
  }
  a();
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
  a();
}), Bm = (t) => Qt.bind(sf(Fm)(t.frames))(() => Qt.bind(Gn)((n) => pn.pure((() => {
  if (n.error.tag === "Just")
    return kt("Left", n.error._1);
  if (n.error.tag === "Nothing")
    return kt("Right", { seed: t.seed, graph: xm(n), keyframes: n.keyframes, scenes: n.scenes });
  a();
})())))(Lm)._1, tr = (t, n) => ({ tag: "ParseError", _1: t, _2: n }), H = (t, n, e) => ({ tag: "ParseState", _1: t, _2: n, _3: e }), Po = (t, n, e) => ({ tag: t, _1: n, _2: e }), Qm = (t) => Po("More", t), Dm = (t) => Po("Lift", t), cf = { map: (t) => (n) => (e, r, o, i, s) => r((u) => n(e, r, o, i, (c, f) => r((g) => s(c, t(f))))) }, Wm = {
  alt: (t) => (n) => (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((f) => t(
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
        a();
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
    (c, f) => r((g) => {
      const l = e._3 && !c._3 ? H(c._1, c._2, !0) : c;
      return n(l, r, o, i, (d, _) => r((h) => s(l._3 && !d._3 ? H(d._1, d._2, !0) : d, f(_))));
    })
  )),
  Functor0: () => cf
}, gf = { pure: (t) => (n, e, r, o, i) => i(n, t), Apply0: () => ff }, Vm = {
  bind: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, f) => r((g) => n(f)(e._3 && !c._3 ? H(c._1, c._2, !0) : c, r, o, i, s))
  )),
  Apply0: () => ff
}, Ym = { Applicative0: () => gf, Bind1: () => Vm }, Zo = (t) => (n, e, r, o, i) => e((s) => af(
  n,
  e,
  r,
  o,
  (u, c) => e((f) => o(n._3 && !u._3 ? H(u._1, u._2, !0) : u, tr(t, c)))
)), Xm = { empty: /* @__PURE__ */ Zo("No alternative"), Alt0: () => Wm }, Um = { Applicative0: () => gf, Plus1: () => Xm }, Mm = {
  tailRecM: (t) => (n) => (e, r, o, i, s) => {
    const u = (c, f, g) => t(f)(
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
        a();
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
        ((c) => (f) => {
          let g = c, l = f, d = !0, _;
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
            a();
          }
          return _;
        })(zt)(i)
      );
    a();
  })())))(zt);
}, Qn = /* @__PURE__ */ Km(Mm)(Um), xt = (t) => (n) => {
  const e = Zo("Expected " + n);
  return (r, o, i, s, u) => {
    const c = r._1, f = r._2;
    return o((g) => t(
      H(c, f, !1),
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
  return e((f) => {
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
          const f = o._1, g = o._2;
          return i((l) => e(
            H(f, g, !1),
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
    a();
  })(y);
  return (e) => {
    const r = n(e);
    if (r.tag === "Nothing")
      return Zo("No alternative");
    if (r.tag === "Just")
      return r._1;
    a();
  };
}, Zm = (t) => (n) => (e) => (r, o, i, s, u) => o((c) => o((f) => o((g) => o((l) => t(
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
        const T = $._3 && !m._3 ? H(m._1, m._2, !0) : m;
        return o((w) => o((k) => {
          const E = r._3 && !T._3 ? H(T._1, T._2, !0) : T;
          return n(
            E,
            o,
            i,
            s,
            (I, W) => o((z) => u(E._3 && !I._3 ? H(I._1, I._2, !0) : I, N))
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
    const c = r, f = o, g = i, l = Oo(f);
    if (l.tag === "Nothing") {
      s = !1, u = c;
      continue;
    }
    if (l.tag === "Just") {
      r = l._1.tail === "" ? Vi(c)(l._1.head)(g) : Vi(c)(l._1.head)(l._1.tail), o = l._1.tail, i = g;
      continue;
    }
    a();
  }
  return u;
}, Mt = (t) => (n, e, r, o, i) => {
  const s = Oo(n._1);
  if (s.tag === "Nothing")
    return o(n, tr("Unexpected EOF", n._2));
  if (s.tag === "Just") {
    if (s._1.head < 0 || s._1.head > 65535)
      return o(n, tr("Expected Char", n._2));
    if (s._1.head >= 0 && s._1.head <= 65535) {
      const u = Gc(s._1.head);
      return t(u) ? i(H(s._1.tail, Vi(n._2)(s._1.head)(s._1.tail), !0), u) : o(n, tr("Predicate unsatisfied", n._2));
    }
  }
  a();
}, _f = (t, n, e, r, o) => t._1 === "" ? o(H(t._1, t._2, !0), void 0) : r(t, tr("Expected EOF", t._2)), nN = (t) => (n, e, r, o, i) => {
  const s = t(n._1);
  if (s.tag === "Left")
    return o(n, tr(s._1, n._2));
  if (s.tag === "Right")
    return i(H(s._1.remainder, tN(n._2)(s._1.consumed)(s._1.remainder), s._1.consumed !== ""), s._1.value);
  a();
}, ar = (t) => nN((n) => {
  const e = p0(t)(n);
  return e.tag === "Just" ? kt("Right", { value: t, consumed: t, remainder: e._1 }) : kt("Left", "Expected " + Tf(t));
}), eN = /* @__PURE__ */ Mt((t) => !0), lf = /* @__PURE__ */ jm(Bt), df = /* @__PURE__ */ (() => {
  const t = Mt((n) => n === " " || n === "	" || n === `
` || n === "\r");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((f) => i(n._3 && !u._3 ? H(u._1, u._2, !0) : u, void 0))
  ));
})(), Vs = (t, n, e, r, o) => n((i) => ar("#")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = Qn(Mt((l) => l !== `
`)), g = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((l) => f(
      g,
      n,
      e,
      r,
      (d, _) => n((h) => o(g._3 && !d._3 ? H(d._1, d._2, !0) : d, void 0))
    ));
  })
)), rN = /* @__PURE__ */ xt(/* @__PURE__ */ (() => {
  const t = xt(Mt((e) => e === "}"))("'}'"), n = Mt((e) => e === `
` || e === "\r");
  return (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((f) => r((g) => t(
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
            const T = N._3;
            return r((w) => {
              if (T)
                return i(N, v);
              const k = e._1, E = e._2;
              return r((I) => r((W) => n(
                H(k, E, !1),
                r,
                o,
                (z, M) => {
                  const P = z._3;
                  return r((R) => P ? i(z, M) : _f(e, r, o, i, s));
                },
                (z, M) => r((P) => s(z, void 0))
              )));
            });
          },
          (N, v) => r((T) => s(N, void 0))
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
      (f, g) => {
        const l = f._3;
        return e((d) => l ? o(f, g) : Vs(n, e, r, o, i));
      },
      i
    ));
  });
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((f) => i(n._3 && !u._3 ? H(u._1, u._2, !0) : u, void 0))
  ));
})(), qn = (t, n, e, r, o) => n((i) => {
  const s = (f, g) => n((l) => Bn(t._3 && !f._3 ? H(f._1, f._2, !0) : f, n, e, r, o)), u = t._1, c = t._2;
  return n((f) => df(
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
  const t = xt(Mt((n) => n === "|"))("'|'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((f) => {
      const g = Qn(Mt((d) => d !== "|")), l = n._3 && !u._3 ? H(u._1, u._2, !0) : u;
      return e((d) => g(
        l,
        e,
        r,
        o,
        (_, h) => e((p) => {
          const $ = xt(xt(Mt((N) => N === "|"))("'|'"))("closing '|'"), m = l._3 && !_._3 ? H(_._1, _._2, !0) : _;
          return e((N) => $(
            m,
            e,
            r,
            o,
            (v, T) => e((w) => i(
              m._3 && !v._3 ? H(v._1, v._2, !0) : v,
              We(Et(Ut.foldr, h))
            ))
          ));
        })
      ));
    })
  ));
})(), Ao = /* @__PURE__ */ Mt((t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z"), Ie = /* @__PURE__ */ (() => {
  const t = Qn(Mt((n) => n === " " || n === "	"));
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((f) => i(n._3 && !u._3 ? H(u._1, u._2, !0) : u, void 0))
  ));
})(), oN = /* @__PURE__ */ (() => {
  const t = xt(Mt((n) => n === "\\"))("'\\\\'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((f) => {
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
  const t = Mt((n) => n !== '"' && n !== "\\" && n !== `
`);
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => oN(H(s, u, !1), e, r, (f, g) => e((l) => t(n, e, r, o, i)), i));
  };
})(), Ys = /* @__PURE__ */ (() => {
  const t = xt(Mt((n) => n === '"'))(`'"'`);
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((f) => {
      const g = Qn(iN), l = n._3 && !u._3 ? H(u._1, u._2, !0) : u;
      return e((d) => g(
        l,
        e,
        r,
        o,
        (_, h) => e((p) => {
          const $ = xt(xt(Mt((N) => N === '"'))(`'"'`))(`closing '"' (unterminated string)`), m = l._3 && !_._3 ? H(_._1, _._2, !0) : _;
          return e((N) => $(
            m,
            e,
            r,
            o,
            (v, T) => e((w) => i(
              m._3 && !v._3 ? H(v._1, v._2, !0) : v,
              We(Et(Ut.foldr, h))
            ))
          ));
        })
      ));
    })
  ));
})(), sN = /* @__PURE__ */ (() => {
  const t = xt(Mt((n) => n === ":"))("':'");
  return (n, e, r, o, i) => e((s) => Ie(
    n,
    e,
    r,
    o,
    (u, c) => e((f) => xt((g, l, d, _, h) => {
      const p = g._1, $ = g._2;
      return l((m) => {
        const N = (v, T) => {
          const w = v._3;
          return l((k) => {
            if (w)
              return _(v, T);
            const E = g._1, I = g._2;
            return l((W) => hf(
              H(E, I, !1),
              l,
              d,
              (z, M) => {
                const P = z._3;
                return l((R) => P ? _(z, M) : Ys(g, l, d, _, h));
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
          (T, w) => l((k) => l((E) => Ie(
            T,
            l,
            d,
            N,
            (I, W) => l((z) => {
              const M = Qn(Mt((R) => R !== `
` && R !== "\r" && R !== "#" && R !== "}")), P = T._3 && !I._3 ? H(I._1, I._2, !0) : I;
              return l((R) => M(
                P,
                l,
                d,
                N,
                (j, et) => l((X) => h(
                  P._3 && !j._3 ? H(j._1, j._2, !0) : j,
                  n_(We(Et(Ut.foldr, et)))
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
    (c, f) => {
      const g = c._3;
      return n((l) => g ? r(c, f) : Ys(t, n, e, r, o));
    },
    o
  ));
}, Vr = /* @__PURE__ */ Mt((t) => t >= "0" && t <= "9"), wn = /* @__PURE__ */ (() => {
  const t = xt(Mt((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => e((s) => {
    const u = (g, l) => e((d) => {
      const _ = Qn((() => {
        const p = xt(Mt((m) => m === "_"))("'_'"), $ = xt(Mt((m) => m === "-"))("'-'");
        return (m, N, v, T, w) => {
          const k = m._1, E = m._2;
          return N((I) => Ao(
            H(k, E, !1),
            N,
            v,
            (W, z) => {
              const M = W._3;
              return N((P) => {
                if (M)
                  return T(W, z);
                const R = m._1, j = m._2;
                return N((et) => Vr(
                  H(R, j, !1),
                  N,
                  v,
                  (X, A) => {
                    const x = X._3;
                    return N((C) => {
                      if (x)
                        return T(X, A);
                      const q = m._1, S = m._2;
                      return N((F) => p(
                        H(q, S, !1),
                        N,
                        v,
                        (D, K) => {
                          const V = D._3;
                          return N((B) => V ? T(D, K) : $(m, N, v, T, w));
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
      })()), h = n._3 && !g._3 ? H(g._1, g._2, !0) : g;
      return e((p) => _(
        h,
        e,
        r,
        o,
        ($, m) => e((N) => i(
          h._3 && !$._3 ? H($._1, $._2, !0) : $,
          Ns(l) + We(Et(Ut.foldr, m))
        ))
      ));
    }), c = n._1, f = n._2;
    return e((g) => Ao(
      H(c, f, !1),
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
    (c, f) => {
      const g = c._3;
      return n((l) => g ? r(c, f) : wn(t, n, e, r, o));
    },
    o
  ));
})("frame name (identifier or quoted string)"), aN = (t, n, e, r, o) => n((i) => wn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => Ie(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = xt(($, m, N, v, T) => {
          const w = $._1, k = $._2;
          return m((E) => ar("->")(
            H(w, k, !1),
            m,
            N,
            (I, W) => {
              const z = I._3;
              return m((M) => z ? v(I, W) : ar("<-")($, m, N, v, T));
            },
            T
          ));
        })("'->' or '<-'"), p = f._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const T = p._3 && !m._3 ? H(m._1, m._2, !0) : m;
            return n((w) => Ie(
              T,
              n,
              e,
              r,
              (k, E) => n((I) => {
                const W = xt(wn)("target node identifier"), z = T._3 && !k._3 ? H(k._1, k._2, !0) : k;
                return n((M) => W(
                  z,
                  n,
                  e,
                  r,
                  (P, R) => n((j) => {
                    const et = Qn((A, x, C, q, S) => {
                      const F = A._3;
                      return x((D) => x((K) => Ie(
                        A,
                        x,
                        C,
                        (V, B) => q(H(V._1, V._2, F), B),
                        (V, B) => x((nt) => x((U) => {
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
                            { from: R, to: u, labels: O(ru)(Et(Ut.foldr, C)) }
                          );
                          return (D, K, V, B, nt) => nt(D, F);
                        }
                        const S = Be(
                          "Token",
                          { from: u, to: R, labels: O(ru)(Et(Ut.foldr, C)) }
                        );
                        return (F, D, K, V, B) => B(F, S);
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
    const f = Qn(Vr), g = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((l) => f(
      g,
      n,
      e,
      r,
      (d, _) => n((h) => {
        const p = mg(Ns(u) + We(Et(
          Ut.foldr,
          _
        )));
        return (() => {
          if (p.tag === "Just") {
            const $ = p._1;
            return (m, N, v, T, w) => w(m, $);
          }
          if (p.tag === "Nothing")
            return ($, m, N, v, T) => T($, 0);
          a();
        })()(g._3 && !d._3 ? H(d._1, d._2, !0) : d, n, e, r, o);
      })
    ));
  })
)), ti = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => ar(t)(
    n,
    e,
    r,
    (c, f) => o(H(c._1, c._2, s), f),
    (c, f) => e((g) => {
      const l = zs((() => {
        const _ = xt(Mt((p) => p === "_"))("'_'"), h = xt(Mt((p) => p === "-"))("'-'");
        return (p, $, m, N, v) => {
          const T = p._1, w = p._2;
          return $((k) => Ao(
            H(T, w, !1),
            $,
            m,
            (E, I) => {
              const W = E._3;
              return $((z) => {
                if (W)
                  return N(E, I);
                const M = p._1, P = p._2;
                return $((R) => Vr(
                  H(M, P, !1),
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
                          const D = S._3;
                          return $((K) => D ? N(S, F) : h(p, $, m, N, v));
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
            (v, T) => o(H(v._1, v._2, s), T),
            (v, T) => e((w) => i(m._3 && !v._3 ? H(v._1, v._2, !0) : v, t))
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
    const f = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => ti("via")(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = f._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n((p) => wn(
          h,
          n,
          e,
          r,
          ($, m) => n((N) => {
            const v = h._3 && !$._3 ? H($._1, $._2, !0) : $;
            return n((T) => qn(
              v,
              n,
              e,
              r,
              (w, k) => n((E) => {
                const I = v._3 && !w._3 ? H(w._1, w._2, !0) : w;
                return n((W) => wn(
                  I,
                  n,
                  e,
                  r,
                  (z, M) => n((P) => o(I._3 && !z._3 ? H(z._1, z._2, !0) : z, { from: m, to: M }))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), _r = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => ar(t)(
    n,
    e,
    r,
    (c, f) => o(H(c._1, c._2, s), f),
    (c, f) => e((g) => {
      const l = zs((() => {
        const _ = xt(Mt((p) => p === "_"))("'_'"), h = xt(Mt((p) => p === "-"))("'-'");
        return (p, $, m, N, v) => {
          const T = p._1, w = p._2;
          return $((k) => Ao(
            H(T, w, !1),
            $,
            m,
            (E, I) => {
              const W = E._3;
              return $((z) => {
                if (W)
                  return N(E, I);
                const M = p._1, P = p._2;
                return $((R) => Vr(
                  H(M, P, !1),
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
                          const D = S._3;
                          return $((K) => D ? N(S, F) : h(p, $, m, N, v));
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
}, _N = (t, n, e, r, o) => n((i) => _r("+edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => qn(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = xt(wn)("source node identifier"), p = f._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const T = p._3 && !m._3 ? H(m._1, m._2, !0) : m;
            return n((w) => qn(
              T,
              n,
              e,
              r,
              (k, E) => n((I) => {
                const W = xt(wn)("target node identifier"), z = T._3 && !k._3 ? H(k._1, k._2, !0) : k;
                return n((M) => W(
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
)), lN = (t, n, e, r, o) => n((i) => _r("+node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => qn(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = xt(wn)("node identifier"), p = f._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const T = p._3 && !m._3 ? H(m._1, m._2, !0) : m;
            return n((w) => sN(
              T,
              n,
              e,
              r,
              (k, E) => n((I) => o(
                T._3 && !k._3 ? H(k._1, k._2, !0) : k,
                Be("AddNode", { id: N, label: E })
              ))
            ));
          })
        ));
      })
    ));
  })
)), dN = (t, n, e, r, o) => n((i) => _r("-edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => qn(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = xt(wn)("source node identifier"), p = f._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const T = p._3 && !m._3 ? H(m._1, m._2, !0) : m;
            return n((w) => qn(
              T,
              n,
              e,
              r,
              (k, E) => n((I) => {
                const W = xt(wn)("target node identifier"), z = T._3 && !k._3 ? H(k._1, k._2, !0) : k;
                return n((M) => W(
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
)), hN = (t, n, e, r, o) => n((i) => _r("-node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => qn(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = xt(wn)("node identifier"), p = f._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const T = Qn((k, E, I, W, z) => {
              const M = k._3;
              return gN(k, E, I, (P, R) => W(H(P._1, P._2, M), R), z);
            }), w = p._3 && !m._3 ? H(m._1, m._2, !0) : m;
            return n((k) => T(
              w,
              n,
              e,
              r,
              (E, I) => n((W) => o(
                w._3 && !E._3 ? H(E._1, E._2, !0) : E,
                Be("DelNode", { id: N, via: Et(Ut.foldr, I) })
              ))
            ));
          })
        ));
      })
    ));
  })
)), pN = (t, n, e, r, o) => n((i) => _r("~edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => qn(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = xt(wn)("source node identifier"), p = f._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const T = p._3 && !m._3 ? H(m._1, m._2, !0) : m;
            return n((w) => qn(
              T,
              n,
              e,
              r,
              (k, E) => n((I) => {
                const W = xt(wn)("target node identifier"), z = T._3 && !k._3 ? H(k._1, k._2, !0) : k;
                return n((M) => W(
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
                        const q = xt(ar("->"))("'->'"), S = et._3 && !A._3 ? H(A._1, A._2, !0) : A;
                        return n((F) => q(
                          S,
                          n,
                          e,
                          r,
                          (D, K) => n((V) => {
                            const B = S._3 && !D._3 ? H(D._1, D._2, !0) : D;
                            return n((nt) => Bn(
                              B,
                              n,
                              e,
                              r,
                              (U, tt) => n((ot) => {
                                const st = xt(wn)("new source node identifier"), _t = B._3 && !U._3 ? H(U._1, U._2, !0) : U;
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
    const f = xt(lf([lN, hN, pN, _N, dN, aN]))("statement (+node, -node, +edge, -edge, ~edge, or 'a -> b')"), g = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((l) => f(
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
)), mN = (t, n, e, r, o) => n((i) => _r("seed")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => Ie(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = xt(fN)("integer (seed value)"), p = f._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const T = p._3 && !m._3 ? H(m._1, m._2, !0) : m;
            return n((w) => Bn(
              T,
              n,
              e,
              r,
              (k, E) => n((I) => o(T._3 && !k._3 ? H(k._1, k._2, !0) : k, N))
            ));
          })
        ));
      })
    ));
  })
)), Xs = /* @__PURE__ */ Zm(/* @__PURE__ */ (() => {
  const t = xt(Mt((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (c, f) => e((g) => e((l) => {
      const d = n._3 && !c._3 ? H(c._1, c._2, !0) : c;
      return Bn(d, e, r, o, (_, h) => e((p) => i(d._3 && !_._3 ? H(_._1, _._2, !0) : _, h)));
    }))
  )));
})())(/* @__PURE__ */ xt(/* @__PURE__ */ (() => {
  const t = xt(Mt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => Bn(
    n,
    e,
    r,
    o,
    (c, f) => e((g) => e((l) => {
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
    (c, f) => r((g) => s(
      e._3 && !c._3 ? H(c._1, c._2, !0) : c,
      t(Et(Ut.foldr, f))
    ))
  ));
}, vN = /* @__PURE__ */ vf(() => {
  const t = zs(xt(Mt((n) => n === "}"))("'}'"));
  return (n, e, r, o, i) => e((s) => {
    const u = n._3;
    return e((c) => e((f) => Bn(
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
              const T = lf([
                (k, E, I, W, z) => {
                  const M = k._3;
                  return JN(k, E, I, (P, R) => W(H(P._1, P._2, M), R), z);
                },
                (k, E, I, W, z) => {
                  const M = k._3;
                  return NN(k, E, I, (P, R) => W(H(P._1, P._2, M), R), z);
                },
                $N
              ]), w = n._3 && !N._3 ? H(N._1, N._2, !0) : N;
              return e((k) => T(
                w,
                e,
                r,
                o,
                (E, I) => e((W) => {
                  const z = w._3 && !E._3 ? H(E._1, E._2, !0) : E;
                  return e((M) => Ie(
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
    const f = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => cN(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = f._3 && !l._3 ? H(l._1, l._2, !0) : l;
        return n((p) => Bn(
          h,
          n,
          e,
          r,
          ($, m) => n((N) => {
            const v = Xs(Us(uf)), T = h._3 && !$._3 ? H($._1, $._2, !0) : $;
            return n((w) => v(
              T,
              n,
              e,
              r,
              (k, E) => n((I) => {
                const W = T._3 && !k._3 ? H(k._1, k._2, !0) : k;
                return n((z) => Bn(
                  W,
                  n,
                  e,
                  r,
                  (M, P) => n((R) => o(
                    W._3 && !M._3 ? H(M._1, M._2, !0) : M,
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
    const f = t._3 && !s._3 ? H(s._1, s._2, !0) : s;
    return n((g) => {
      const l = (h, p) => n(($) => {
        const m = Qn(TN), N = f._3 && !h._3 ? H(h._1, h._2, !0) : h;
        return n((v) => m(
          N,
          n,
          e,
          r,
          (T, w) => n((k) => {
            const E = N._3 && !T._3 ? H(T._1, T._2, !0) : T;
            return n((I) => Bn(
              E,
              n,
              e,
              r,
              (W, z) => n((M) => {
                const P = xt(_f)("'frame' or end of input"), R = E._3 && !W._3 ? H(W._1, W._2, !0) : W;
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
                        a();
                      })(),
                      frames: Et(Ut.foldr, w)
                    }
                  ))
                ));
              })
            ));
          })
        ));
      }), d = f._1, _ = f._2;
      return n((h) => n((p) => mN(
        H(d, _, !1),
        n,
        e,
        ($, m) => {
          const N = $._3;
          return n((v) => N ? r($, m) : l(f, y));
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
  a();
}, LN = (t) => {
  const n = wN(t);
  if (n.tag === "Left")
    return kt("Left", n._1.msg);
  if (n.tag === "Right")
    return kt("Right", n._1);
  a();
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
  a();
}, PN = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
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
  a();
}, vi = (t) => (n) => {
  const e = ln((r) => r.startT <= n && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return e._1.scene._1.to;
    if (e._1.scene.tag === "DataFlow")
      return e._1.scene._1.keyframe;
    a();
  }
  if (e.tag === "Nothing") {
    const r = t.spans.length - 1 | 0;
    if (r >= 0 && r < t.spans.length) {
      if (t.spans[r].scene.tag === "Structural")
        return t.spans[r].scene._1.to;
      if (t.spans[r].scene.tag === "DataFlow")
        return t.spans[r].scene._1.keyframe;
      a();
    }
    return "";
  }
  a();
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
  a();
}, Ti = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const c = vl(o)($f(u)(o.totalDuration));
  if (n === "CanvasRenderer")
    return () => {
      const f = pc(), g = s.value;
      s.value = f;
      const l = xN(t), d = Sc(o.layout)(c.camera), _ = d.w + 48, h = d.h + 48, p = (() => {
        if (e.tag === "Just")
          return { w: e._1.w, h: e._1.h };
        if (e.tag === "Nothing") {
          const z = CN(t)();
          return { w: z, h: _ <= 0 ? z : z * h / _ };
        }
        a();
      })(), $ = SN(), m = p.w * $, N = p.h * $, v = Sg(l)(), T = Gg(l)(), w = Ig(l)(m);
      v !== m && w();
      const k = Pg(l)(N);
      T !== N && k(), Zu(t, "height", an(ce(jr(p.h))) + "px"), e.tag === "Just" ? Zu(t, "width", an(ce(jr(p.w))) + "px") : e.tag === "Nothing" || a();
      const E = Cg(l)();
      hr(E)(), ss(E)({ scaleX: $, scaleY: $ })();
      const I = i.value, W = j$(r)(E)({ width: p.w, height: p.h })(o.layout)(c)(g === 0 ? 0 : (f - g) / 1e3)(I)();
      return i.value = W, pr(E)();
    };
  if (n === "SvgRenderer") {
    const f = fm(r)(o.layout)(c), g = _o("viewBox")(DN(f)(e))(t);
    return () => (g(), _o("preserveAspectRatio")("xMidYMid meet")(t)(), e.tag === "Just" ? (_o("width")(an(ce(jr(e._1.w))))(t)(), _o("height")(an(ce(jr(e._1.h))))(t)()) : e.tag === "Nothing" || a(), GN(f.body, t));
  }
  a();
}, WN = (t) => (n) => (e) => (r) => (o) => () => {
  let i = 1, s = !0, u = !1, c = 0, f = 0;
  const g = { value: Q }, l = { value: 0 };
  let d = !1, _ = [];
  Ti(t)(e)(r)(o)(n)(g)(l)(0)();
  const h = (T) => () => {
    const w = _, k = s, E = { time: T, keyframe: vi(n)(T), playing: k };
    return BN((I) => I(E))(w)();
  }, p = () => (s = !1, h(c)()), $ = () => {
    if (!d && (u = !1, s)) {
      const k = pc(), E = f;
      f = k;
      const I = i, W = c, z = FN(E === 0 ? W + 0 * I : W + (k - E) / 1e3 * I)(n.totalDuration + 0.8);
      return c = z, Ti(t)(e)(r)(o)(n)(g)(l)(z)(), h(z)(), m();
    }
  }, m = () => {
    if (!d && !u) {
      u = !0;
      const k = bN();
      EN($)(k)();
    }
  }, N = () => (f = 0, s = !0, m()), v = () => (s || N(), h(c)());
  return N(), {
    play: v,
    pause: p,
    toggle: () => s ? p() : v(),
    seek: (T) => {
      const w = PN(0)($f(n.totalDuration)(T));
      return () => (c = w, f = 0, Ti(t)(e)(r)(o)(n)(g)(l)(w)(), h(w)());
    },
    setSpeed: (T) => () => i = T,
    currentTime: () => c,
    currentKeyframe: () => {
      const T = c;
      return vi(n)(T);
    },
    isPlaying: () => s,
    duration: n.totalDuration,
    subscribe: (T) => () => {
      _ = gn(_)(T);
      const k = c, E = s;
      T({ time: k, keyframe: vi(n)(k), playing: E })();
      const I = fc((W) => !IN(W)(T));
      return () => {
        _ = I(_);
      };
    },
    destroy: () => d = !0
  };
}, qN = (t) => (n) => (e) => (r) => (o) => {
  const i = QN(n);
  if (i.tag === "Left")
    return () => kt("Left", i._1);
  if (i.tag === "Right") {
    const s = i._1, u = Sp(s);
    return () => {
      const c = u(), f = X_(X0)(D_)(s)(Rp(c)(s));
      if (f.tag === "Left")
        return kt("Left", "precompute failed");
      if (f.tag === "Right") {
        const g = WN(t)(f._1)(e)(r)(o)();
        return kt("Right", g);
      }
      a();
    };
  }
  a();
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
  eq: (t) => (n) => t._1 === n._1 && t._2._1 === n._2._1 && t._2._2._1 === n._2._2._1 && (t._2._2._2.tag === "Nothing" ? n._2._2._2.tag === "Nothing" : t._2._2._2.tag === "Just" && n._2._2._2.tag === "Just" && t._2._2._2._1.h === n._2._2._2._1.h && t._2._2._2._1.w === n._2._2._2._1.w)
}), Nf = ZN().pure, n2 = /* @__PURE__ */ Ms(ON), e2 = /* @__PURE__ */ mf("svg")(), Jf = (t) => (n) => (e) => (r) => () => {
  const o = YN(wf), i = nc((c, f) => L(c, f), y), s = i._1, u = nc((c, f) => L(c, f), { time: 0, keyframe: "", playing: !1 });
  return t2(L(t, L(n, L(e, r))))((() => {
    const c = KN(o);
    return () => {
      const f = c(), g = dr(f, y, Kt), l = (() => {
        if (g.tag === "Just")
          return kN(y, Kt, "Element", g._1);
        if (g.tag === "Nothing")
          return y;
        a();
      })();
      if (l.tag === "Nothing")
        return () => {
        };
      if (l.tag === "Just") {
        const d = qN(l._1)(t)(n === "svg" ? RN : AN)(r)(e === "dark" ? _m : e === "blueprint" ? lm : gm)();
        if (d.tag === "Left")
          return Lf("[markgraf] " + d._1)(), () => {
          };
        if (d.tag === "Right") {
          const _ = d._1;
          i._2((p) => b("Just", _))();
          const h = _.subscribe((p) => u._2(($) => p))();
          return () => (h(), _.destroy(), i._2((p) => y)());
        }
      }
      a();
    };
  })())(), Nf({
    elementRef: o,
    time: u._1.time,
    keyframe: u._1.keyframe,
    playing: u._1.playing,
    duration: s.tag === "Just" ? s._1.duration : 0,
    ready: (() => {
      if (s.tag === "Just")
        return !0;
      if (s.tag === "Nothing")
        return !1;
      a();
    })(),
    play: (() => {
      if (s.tag === "Just")
        return s._1.play;
      if (s.tag === "Nothing")
        return () => {
        };
      a();
    })(),
    pause: (() => {
      if (s.tag === "Just")
        return s._1.pause;
      if (s.tag === "Nothing")
        return () => {
        };
      a();
    })(),
    toggle: (() => {
      if (s.tag === "Just")
        return s._1.toggle;
      if (s.tag === "Nothing")
        return () => {
        };
      a();
    })(),
    seek: (c) => {
      if (s.tag === "Just")
        return s._1.seek(c);
      if (s.tag === "Nothing")
        return () => {
        };
      a();
    },
    setSpeed: (c) => {
      if (s.tag === "Just")
        return s._1.setSpeed(c);
      if (s.tag === "Nothing")
        return () => {
        };
      a();
    }
  })();
}, r2 = /* @__PURE__ */ UN(
  "MarkgrafPlayer",
  (t) => {
    const n = dr(t.renderer, y, Kt), e = (() => {
      if (n.tag === "Nothing")
        return "canvas";
      if (n.tag === "Just")
        return n._1;
      a();
    })(), r = Jf(t.src)(e)((() => {
      const o = dr(t.theme, y, Kt);
      if (o.tag === "Nothing")
        return "light";
      if (o.tag === "Just")
        return o._1;
      a();
    })())((() => {
      const o = dr(t.width, y, Kt);
      if (o.tag === "Just") {
        const i = dr(t.height, y, Kt);
        if (i.tag === "Just")
          return b("Just", { w: o._1, h: i._1 });
        if (i.tag === "Nothing")
          return y;
        a();
      }
      if (o.tag === "Nothing")
        return y;
      a();
    })())();
    return Nf(e === "svg" ? Ms(e2)({ className: "markgraf-player", ref: r.elementRef }) : n2({ className: "markgraf-player", ref: r.elementRef }))();
  }
), i2 = (t, n) => Jf(t)(n?.renderer ?? "canvas")(n?.theme ?? "light"), s2 = r2;
export {
  s2 as MarkgrafPlayer,
  i2 as useMarkgraf
};
