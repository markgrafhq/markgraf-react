import dn from "react";
function gf(t) {
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
function ze(t, n) {
  return n > 0 ? Math.floor(t / n) : n < 0 ? -Math.floor(t / -n) : 0;
}
const _n = function(t) {
  return t.toString();
}, Fu = function(t) {
  var n = t.toString();
  return isNaN(n + ".0") ? n : n + ".0";
}, _f = function(t) {
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
}, Pi = (t) => t, Nn = /* @__PURE__ */ Pi("LT"), Jn = /* @__PURE__ */ Pi("GT"), kn = /* @__PURE__ */ Pi("EQ"), b = (t, n) => ({ tag: t, _1: n }), T = /* @__PURE__ */ b("Nothing"), en = (t) => b("Just", t), Bu = (t) => {
  if (t.tag === "Nothing")
    return !0;
  if (t.tag === "Just")
    return !1;
  a();
}, lf = (t) => {
  if (t.tag === "Nothing")
    return !1;
  if (t.tag === "Just")
    return !0;
  a();
}, df = null;
function Qu(t, n, e) {
  return t == null ? n : e(t);
}
const E = (t, n) => ({ tag: "Tuple", _1: t, _2: n }), ir = (t) => (n) => E(t, n), Eo = (t) => t._2, bo = (t) => t._1, hf = function(t) {
  return function() {
    console.log(t);
  };
}, yn = (t) => (n) => t, z = function(t) {
  return function(n) {
    for (var e = n.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = t(n[o]);
    return r;
  };
}, pf = { map: z }, Du = (t) => t, Ct = typeof Array.prototype.flatMap == "function" ? function(t) {
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
}, Et = (t, n) => ({ tag: t, _1: n }), $f = (t) => Et("Right", t), mf = {
  map: (t) => (n) => {
    if (n.tag === "Left")
      return Et("Left", n._1);
    if (n.tag === "Right")
      return Et("Right", t(n._1));
    a();
  }
}, Wu = {
  apply: (t) => (n) => {
    if (t.tag === "Left")
      return Et("Left", t._1);
    if (t.tag === "Right") {
      if (n.tag === "Left")
        return Et("Left", n._1);
      if (n.tag === "Right")
        return Et("Right", t._1(n._1));
    }
    a();
  },
  Functor0: () => mf
}, Nf = {
  bind: (t) => {
    if (t.tag === "Left") {
      const n = t._1;
      return (e) => Et("Left", n);
    }
    if (t.tag === "Right") {
      const n = t._1;
      return (e) => e(n);
    }
    a();
  },
  Apply0: () => Wu
}, Jf = { pure: $f, Apply0: () => Wu }, vf = { Applicative0: () => Jf, Bind1: () => Nf }, yf = (t) => t, Tf = { map: (t) => (n) => t(n) }, qu = { apply: (t) => (n) => t(n), Functor0: () => Tf }, wf = { bind: (t) => (n) => n(t), Apply0: () => qu }, Lf = { pure: yf, Apply0: () => qu }, $e = { Applicative0: () => Lf, Bind1: () => wf }, Ef = function(t) {
  return function() {
    return t;
  };
}, bf = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return Ai.pure(e(r))();
  },
  Functor0: () => kf
}, Ai = { pure: Ef, Apply0: () => bf }, kf = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, pr = (t, n) => ({ tag: t, _1: n }), Hu = (t) => pr("Loop", t), xf = {
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
  Monad0: () => $e
}, Cf = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, Sf = function(t, n) {
  return n.push(t);
}, Gf = /* @__PURE__ */ Cf(Sf), Pf = (t, n) => ({ tag: "Iterator", _1: t, _2: n }), Af = (t) => (n) => (e) => () => {
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
}, If = (t) => (n) => () => {
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
}, yr = function(t) {
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
}, Rf = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldr((o) => {
    const i = r(o);
    return (s) => n.apply(n.Functor0().map((u) => Du)(i))(s);
  })(t.pure());
}, Ft = {
  foldr: yr,
  foldl: J,
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => Ft.foldr((r) => (o) => t.Semigroup0().append(e(r))(o))(n);
  }
}, At = function(t) {
  return function(n) {
    for (var e = n.length, r = Array(e), o = 0; o < e; o++)
      r[o] = t(o)(n[o]);
    return r;
  };
};
var Ii = function(t) {
  return function(n) {
    return t === n;
  };
};
const Ff = Ii, Bf = Ii, Ri = Ii, Qf = function(t) {
  return function(n) {
    return function(e) {
      if (n.length !== e.length) return !1;
      for (var r = 0; r < n.length; r++)
        if (!t(n[r])(e[r])) return !1;
      return !0;
    };
  };
}, Xn = { eq: Ri }, Df = { eq: Bf }, Tr = { eq: Ff };
var Fi = function(t) {
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
const Wf = Fi, qf = Fi, Hf = Fi, G = { compare: /* @__PURE__ */ Hf(Nn)(kn)(Jn), Eq0: () => Xn }, pt = { compare: /* @__PURE__ */ qf(Nn)(kn)(Jn), Eq0: () => Df }, rt = { compare: /* @__PURE__ */ Wf(Nn)(kn)(Jn), Eq0: () => Tr }, zu = function(t) {
  return t;
}, zf = /* @__PURE__ */ (function() {
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
})(), Of = (t) => t, Wr = {
  traverse: (t) => {
    const n = t.Apply0();
    return zf(n.apply)(n.Functor0().map)(t.pure);
  },
  sequence: (t) => Wr.traverse(t)(Of),
  Functor0: () => pf,
  Foldable1: () => Ft
}, Yt = function(t, n) {
  for (var e = t > n ? -1 : 1, r = new Array(e * (n - t) + 1), o = t, i = 0; o !== n; )
    r[i++] = o, o += e;
  return r[i] = o, r;
};
var Vf = function(t, n) {
  if (t < 1)
    return [];
  var e = new Array(t);
  return e.fill(n);
}, Yf = function(t, n) {
  for (var e = [], r = 0, o = 0; o < t; o++)
    e[r++] = n;
  return e;
};
const Xf = typeof Array.prototype.fill == "function" ? Vf : Yf, bt = /* @__PURE__ */ (function() {
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
}, Uf = function(t, n, e, r) {
  for (var o = 0; o < r.length; o++) {
    var i = e(r[o]);
    if (n(i)) return i;
  }
  return t;
}, Me = function(t, n, e, r) {
  for (var o = 0, i = r.length; o < i; o++)
    if (e(r[o])) return t(o);
  return n;
}, Mf = function(t, n, e, r) {
  for (var o = r.length - 1; o >= 0; o--)
    if (e(r[o])) return t(o);
  return n;
}, Kf = function(t, n, e, r, o) {
  if (e < 0 || e > o.length) return n;
  var i = o.slice();
  return i.splice(e, 0, r), t(i);
}, Ou = function(t, n, e, r) {
  if (e < 0 || e >= r.length) return n;
  var o = r.slice();
  return o.splice(e, 1), t(o);
}, Ke = function(t, n, e, r, o) {
  if (e < 0 || e >= o.length) return n;
  var i = o.slice();
  return i[e] = r, t(i);
}, $n = function(t) {
  return t.slice().reverse();
}, xn = function(t) {
  if (t.length <= 1e4)
    return Array.prototype.concat.apply([], t);
  for (var n = [], e = 0, r = t.length; e < r; e++)
    for (var o = t[e], i = 0, s = o.length; i < s; i++)
      n.push(o[i]);
  return n;
}, gt = function(t, n) {
  return n.filter(t);
}, jf = /* @__PURE__ */ (function() {
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
})(), It = function(t, n, e) {
  return e.slice(t, n);
}, Tn = function(t, n, e) {
  for (var r = n.length < e.length ? n.length : e.length, o = new Array(r), i = 0; i < r; i++)
    o[i] = t(n[i])(e[i]);
  return o;
}, ae = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (t(n[r])) return !0;
  return !1;
}, Vu = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (!t(n[r])) return !1;
  return !0;
}, Lt = (t) => (n) => jf(
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
), Zf = (t) => (n) => Lt((e) => (r) => t.compare(n(e))(n(r))), sn = (t) => (n) => (() => {
  const e = Gf(n);
  return () => {
    const r = [...t];
    return e(r)(), r;
  };
})()(), Yu = (t) => {
  if (t.length === 0)
    return t.length - 1 | 0, T;
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? b("Just", { init: It(0, t.length - 1 | 0, t), last: t[n] }) : T;
}, tg = (t) => (n) => (e) => t >= 0 && t < e.length ? Ke(en, T, t, n(e[t]), e) : T, Le = (t) => (n) => {
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
    return r._1 === 0 ? { init: [], rest: n } : { init: It(0, r._1, n), rest: It(r._1, n.length, n) };
  if (r.tag === "Nothing")
    return { init: n, rest: [] };
  a();
}, je = (t) => (n) => {
  const e = Lt((r) => (o) => t(r._2)(o._2))(At(ir)(n));
  return 0 < e.length ? z(Eo)(Zf(rt)(bo)((() => {
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
}, ng = (t) => (n) => {
  const e = [], o = Pf(
    (i) => i >= 0 && i < n.length ? b("Just", n[i]) : T,
    { value: 0 }
  );
  return If(o)((i) => () => {
    const s = [];
    s.push(i), Af(t(i))(o)(s)(), e.push(s);
  })(), e;
}, gn = (t) => (n) => {
  const e = Me(en, T, t, n);
  return e.tag === "Just" ? b("Just", n[e._1]) : T;
}, Xu = (t) => (n) => gt(t, n), Gn = (t) => (n) => (e) => {
  const r = Me(en, T, (o) => t.eq(o)(n), e);
  if (r.tag === "Nothing")
    return !1;
  if (r.tag === "Just")
    return !0;
  a();
}, Uu = (t) => (n) => Ct(n)(t), yt = (t) => Uu((n) => {
  const e = t(n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [e._1];
  a();
}), eg = isFinite, Ze = Math.abs, Bi = Math.ceil, Qi = Math.cos, Mu = Math.exp, Ku = Math.floor, fi = function(t) {
  return function(n) {
    return Math.pow(t, n);
  };
}, rg = Math.round, Di = Math.sin, sr = Math.sqrt, og = function(t) {
  return function(n) {
    return function(e) {
      return (e | 0) === e ? t(e) : n;
    };
  };
}, at = function(t) {
  return t;
}, ig = function(t) {
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
}, sg = /* @__PURE__ */ ig(en)(T), ug = /* @__PURE__ */ sg(10), ju = /* @__PURE__ */ og(en)(T), ur = (t) => {
  if (!eg(t))
    return 0;
  if (t >= at(2147483647))
    return 2147483647;
  if (t <= at(-2147483648))
    return -2147483648;
  const n = ju(t);
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return n._1;
  a();
}, qt = (t, n, e) => ({ tag: t, _1: n, _2: e }), Ot = /* @__PURE__ */ qt("Nil"), Xt = {
  foldr: (t) => (n) => {
    const e = Xt.foldl((i) => (s) => t(s)(i))(n), o = ((i) => (s) => {
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
    })(Ot);
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
    return (e) => Xt.foldl((r) => {
      const o = t.Semigroup0().append(r);
      return (i) => o(e(i));
    })(n);
  }
}, cg = function(t) {
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
}, ag = (t) => {
  if (t.tag === "Just")
    return t._1;
  a();
}, fg = { unfoldr1: /* @__PURE__ */ cg(Bu)(ag)(bo)(Eo) }, gg = function(t) {
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
}, _g = (t) => {
  if (t.tag === "Just")
    return t._1;
  a();
}, qn = {
  unfoldr: /* @__PURE__ */ gg(Bu)(_g)(bo)(Eo),
  Unfoldable10: () => fg
}, Wt = (t, n, e, r, o, i, s) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s }), Dn = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), Vr = (t, n, e) => ({ tag: "Split", _1: t, _2: n, _3: e }), Ps = (t, n, e) => ({ tag: "SplitLast", _1: t, _2: n, _3: e }), W = /* @__PURE__ */ Wt("Leaf"), Ae = /* @__PURE__ */ Dn("IterLeaf"), nn = (t, n, e, r) => {
  if (e.tag === "Leaf") {
    if (r.tag === "Leaf")
      return Wt("Node", 1, 1, t, n, e, r);
    if (r.tag === "Node")
      return Wt("Node", 1 + r._1 | 0, 1 + r._2 | 0, t, n, e, r);
    a();
  }
  if (e.tag === "Node") {
    if (r.tag === "Leaf")
      return Wt("Node", 1 + e._1 | 0, 1 + e._2 | 0, t, n, e, r);
    if (r.tag === "Node")
      return Wt("Node", e._1 > r._1 ? 1 + e._1 | 0 : 1 + r._1 | 0, (1 + e._2 | 0) + r._2 | 0, t, n, e, r);
  }
  a();
}, wn = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r.tag === "Leaf" ? Wt("Node", 1, 1, t, n, W, W) : r.tag === "Node" && r._1 > 1 ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      a();
    })() ? nn(r._5._3, r._5._4, nn(t, n, e, r._5._5), nn(r._3, r._4, r._5._6, r._6)) : nn(r._3, r._4, nn(t, n, e, r._5), r._6) : nn(t, n, e, r);
  if (e.tag === "Node")
    return r.tag === "Node" ? r._1 > (e._1 + 1 | 0) ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      a();
    })() ? nn(r._5._3, r._5._4, nn(t, n, e, r._5._5), nn(r._3, r._4, r._5._6, r._6)) : nn(r._3, r._4, nn(t, n, e, r._5), r._6) : e._1 > (r._1 + 1 | 0) ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      a();
    })() ? nn(e._6._3, e._6._4, nn(e._3, e._4, e._5, e._6._5), nn(t, n, e._6._6, r)) : nn(e._3, e._4, e._5, nn(t, n, e._6, r)) : nn(t, n, e, r) : r.tag === "Leaf" && e._1 > 1 ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      a();
    })() ? nn(e._6._3, e._6._4, nn(e._3, e._4, e._5, e._6._5), nn(t, n, e._6._6, r)) : nn(e._3, e._4, e._5, nn(t, n, e._6, r)) : nn(t, n, e, r);
  a();
}, tr = (t, n, e) => {
  if (e.tag === "Leaf")
    return Vr(T, W, W);
  if (e.tag === "Node") {
    const r = t(n)(e._3);
    if (r === "LT") {
      const o = tr(t, n, e._5);
      return Vr(o._1, o._2, wn(e._3, e._4, o._3, e._6));
    }
    if (r === "GT") {
      const o = tr(t, n, e._6);
      return Vr(o._1, wn(e._3, e._4, e._5, o._2), o._3);
    }
    if (r === "EQ")
      return Vr(b("Just", e._4), e._5, e._6);
  }
  a();
}, Zu = (t, n, e, r) => {
  if (r.tag === "Leaf")
    return Ps(t, n, e);
  if (r.tag === "Node") {
    const o = Zu(r._3, r._4, r._5, r._6);
    return Ps(o._1, o._2, wn(t, n, e, o._3));
  }
  a();
}, qr = (t, n) => {
  if (t.tag === "Leaf")
    return n;
  if (t.tag === "Node") {
    const e = Zu(t._3, t._4, t._5, t._6);
    return wn(e._1, e._2, e._3, n);
  }
  a();
}, re = (t, n, e) => {
  if (n.tag === "Leaf")
    return W;
  if (e.tag === "Leaf")
    return n;
  if (e.tag === "Node") {
    const r = tr(t, e._3, n);
    return qr(re(t, r._2, e._5), re(t, r._3, e._6));
  }
  a();
}, so = (t, n, e, r) => {
  if (e.tag === "Leaf" || r.tag === "Leaf")
    return W;
  if (r.tag === "Node") {
    const o = tr(t, r._3, e), i = so(t, n, o._2, r._5), s = so(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return wn(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return qr(i, s);
  }
  a();
}, Ln = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r;
  if (r.tag === "Leaf")
    return e;
  if (r.tag === "Node") {
    const o = tr(t, r._3, e), i = Ln(t, n, o._2, r._5), s = Ln(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return wn(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return wn(r._3, r._4, i, s);
  }
  a();
}, lg = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return W;
    if (r.tag === "Node") {
      const o = n(r._3)(r._4);
      if (o.tag === "Just")
        return wn(r._3, o._1, e(r._5), e(r._6));
      if (o.tag === "Nothing")
        return qr(e(r._5), e(r._6));
    }
    a();
  };
  return e;
}, dg = (t) => (n) => (r) => {
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
              l = Dn("IterEmit", $._3, $._4, p), d = $._5;
              continue;
            }
            l = Dn("IterEmit", $._3, $._4, Dn("IterNode", $._6, p)), d = $._5;
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
}, Ie = /* @__PURE__ */ dg((t, n, e) => b("Just", E(E(t, n), e)))((t) => T), Tt = (t) => (n) => (e) => (r) => {
  const o = (i) => {
    if (i.tag === "Leaf")
      return Wt("Node", 1, 1, e, r, W, W);
    if (i.tag === "Node") {
      const s = t.compare(e)(i._3);
      if (s === "LT")
        return wn(i._3, i._4, o(i._5), i._6);
      if (s === "GT")
        return wn(i._3, i._4, i._5, o(i._6));
      if (s === "EQ")
        return Wt("Node", i._1, i._2, e, n(i._4)(r), i._5, i._6);
    }
    a();
  };
  return o;
}, X = (t) => (n) => (e) => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return Wt("Node", 1, 1, n, e, W, W);
    if (o.tag === "Node") {
      const i = t.compare(n)(o._3);
      if (i === "LT")
        return wn(o._3, o._4, r(o._5), o._6);
      if (i === "GT")
        return wn(o._3, o._4, o._5, r(o._6));
      if (i === "EQ")
        return Wt("Node", o._1, o._2, n, e, o._5, o._6);
    }
    a();
  };
  return r;
}, Mt = (t) => (n) => n.foldl((e) => (r) => X(t)(r._1)(r._2)(e))(W), wr = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return W;
    if (r.tag === "Node") {
      const o = t.compare(n)(r._3);
      if (o === "LT")
        return wn(r._3, r._4, e(r._5), r._6);
      if (o === "GT")
        return wn(r._3, r._4, r._5, e(r._6));
      if (o === "EQ")
        return qr(r._5, r._6);
    }
    a();
  };
  return e;
}, hg = (t) => {
  const n = t.compare;
  return (e) => (r) => (o) => {
    const i = tr(n, r, o), s = e(i._1);
    if (s.tag === "Nothing")
      return qr(i._2, i._3);
    if (s.tag === "Just")
      return wn(r, s._1, i._2, i._3);
    a();
  };
}, jt = function(t) {
  return function(n) {
    return t + n | 0;
  };
}, nr = function(t) {
  return function(n) {
    return t + n;
  };
}, Wi = function(t) {
  return function(n) {
    if (n === 0) return 0;
    var e = Math.abs(n);
    return (t % e + e) % e;
  };
}, un = function(t) {
  return function(n) {
    return t.length === 0 ? n : n.length === 0 ? t : t.concat(n);
  };
};
function qi(t) {
  return function(n) {
    return function(e) {
      return t.apply(e, [n]);
    };
  };
}
const pg = qi(Number.prototype.toPrecision), $g = qi(Number.prototype.toFixed), mg = qi(Number.prototype.toExponential), tc = (t, n) => ({ tag: t, _1: n }), nc = (t) => (n) => (e) => {
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
}, ec = (t) => {
  if (t.tag === "Precision")
    return pg(t._1);
  if (t.tag === "Fixed")
    return $g(t._1);
  if (t.tag === "Exponential")
    return mg(t._1);
  a();
};
function rc() {
  return Date.now();
}
function Ng(t) {
  return function() {
    return t.getContext("2d");
  };
}
function Jg(t) {
  return function() {
    return t.width;
  };
}
function vg(t) {
  return function() {
    return t.height;
  };
}
function yg(t) {
  return function(n) {
    return function() {
      t.width = n;
    };
  };
}
function Tg(t) {
  return function(n) {
    return function() {
      t.height = n;
    };
  };
}
function Hi(t) {
  return function(n) {
    return function() {
      t.lineWidth = n;
    };
  };
}
function wg(t) {
  return function(n) {
    return function() {
      t.fillStyle = n;
    };
  };
}
function Lg(t) {
  return function(n) {
    return function() {
      t.strokeStyle = n;
    };
  };
}
function zo(t) {
  return function(n) {
    return function() {
      t.lineCap = n;
    };
  };
}
function Oo(t) {
  return function(n) {
    return function() {
      t.lineJoin = n;
    };
  };
}
function Eg(t) {
  return function(n) {
    return function() {
      t.globalCompositeOperation = n;
    };
  };
}
function bg(t) {
  return function(n) {
    return function() {
      t.globalAlpha = n;
    };
  };
}
function oc(t) {
  return function() {
    t.beginPath();
  };
}
function zi(t) {
  return function() {
    t.stroke();
  };
}
function Oi(t) {
  return function() {
    t.fill();
  };
}
function kg(t) {
  return function() {
    t.clip();
  };
}
function xg(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.lineTo(n, e);
      };
    };
  };
}
function Cg(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.moveTo(n, e);
      };
    };
  };
}
function Sg(t) {
  return function() {
    t.closePath();
  };
}
function Gg(t) {
  return function(n) {
    return function() {
      t.fillRect(n.x, n.y, n.width, n.height);
    };
  };
}
function Pg(t) {
  return function(n) {
    return function() {
      t.clearRect(n.x, n.y, n.width, n.height);
    };
  };
}
function Vi(t) {
  return function(n) {
    return function() {
      t.scale(n.scaleX, n.scaleY);
    };
  };
}
function ic(t) {
  return function(n) {
    return function() {
      t.translate(n.translateX, n.translateY);
    };
  };
}
function Ag(t) {
  return function(n) {
    return function() {
      t.textAlign = n;
    };
  };
}
function Ig(t) {
  return function(n) {
    return function() {
      t.textBaseline = n;
    };
  };
}
function Rg(t) {
  return function(n) {
    return function() {
      t.font = n;
    };
  };
}
function Fg(t) {
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
function fr(t) {
  return function() {
    t.save();
  };
}
function gr(t) {
  return function() {
    t.restore();
  };
}
function Bg(t) {
  return function(n) {
    return function() {
      t.quadraticCurveTo(n.cpx, n.cpy, n.x, n.y);
    };
  };
}
function Qg(t) {
  return function(n) {
    return function() {
      t.bezierCurveTo(n.cp1x, n.cp1y, n.cp2x, n.cp2y, n.x, n.y);
    };
  };
}
const sc = (t) => t, Yi = (t) => t, Xi = (t) => t, Ui = (t) => t, ko = (t) => t, Dg = /* @__PURE__ */ ko("BaselineTop"), Wg = /* @__PURE__ */ ko("BaselineMiddle"), qg = /* @__PURE__ */ ko("BaselineAlphabetic"), Hg = /* @__PURE__ */ ko("BaselineBottom"), zg = /* @__PURE__ */ Ui("AlignLeft"), Og = /* @__PURE__ */ Ui("AlignRight"), Vg = /* @__PURE__ */ Ui("AlignCenter"), Mi = /* @__PURE__ */ Xi("BevelJoin"), xo = /* @__PURE__ */ Xi("RoundJoin"), Ki = /* @__PURE__ */ Xi("MiterJoin"), ji = /* @__PURE__ */ Yi("Round"), Zi = /* @__PURE__ */ Yi("Square"), ts = /* @__PURE__ */ Yi("Butt"), Yg = /* @__PURE__ */ sc("SourceOver"), Xg = /* @__PURE__ */ sc("Difference"), Ug = (t) => (n) => Ig(t)((() => {
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
})()), Mg = (t) => (n) => Ag(t)((() => {
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
})()), Co = (t) => (n) => {
  if (n === "BevelJoin")
    return Oo(t)("bevel");
  if (n === "RoundJoin")
    return Oo(t)("round");
  if (n === "MiterJoin")
    return Oo(t)("miter");
  a();
}, ns = (t) => (n) => {
  if (n === "Round")
    return zo(t)("round");
  if (n === "Square")
    return zo(t)("square");
  if (n === "Butt")
    return zo(t)("butt");
  a();
}, As = (t) => (n) => Eg(t)((() => {
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
    const e = Xt.foldr(t)(n);
    return (r) => e((() => {
      const o = (i, s) => {
        if (i.tag === "Leaf")
          return s;
        if (i.tag === "Node")
          return o(i._5, qt("Cons", i._3, o(i._6, s)));
        a();
      };
      return o(r, Ot);
    })());
  }
}, So = (t) => t, Kg = (t) => t, jg = /* @__PURE__ */ So("Linear"), Zg = /* @__PURE__ */ So("EaseInOutQuad"), t0 = /* @__PURE__ */ So("EaseOutExpo"), n0 = /* @__PURE__ */ So("SpringBouncy"), Lr = (t) => (n) => (e) => {
  const r = sr(1 - n * n), o = t * r;
  return 1 - Mu(-n * t * e) * (Qi(o * e) + n / r * Di(o * e));
}, e0 = (t) => {
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
}, es = (t) => (n) => (() => {
  if (t === "Linear")
    return Kg;
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
    return (e) => e >= 1 ? 1 : 1 - fi(2)(-10 * e);
  if (t === "Spring")
    return (e) => 1 - (1 + 6 * e) * Mu(-6 * e);
  if (t === "SpringBouncy")
    return Lr(6)(0.7);
  a();
})()(e0(n)), uc = /* @__PURE__ */ J(nr)(0), r0 = (t) => (n) => (e) => {
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
}, Is = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, Rs = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, cc = (t) => (n) => {
  const e = Tn(
    (s) => (u) => ({
      a: s,
      b: u,
      len: (() => {
        const c = u.y - s.y, f = u.x - s.x;
        return sr(f * f + c * c);
      })()
    }),
    t,
    It(1, t.length, t)
  ), r = uc(z((s) => s.len)(e)), o = r0(0)(r)(n * r), i = (s) => (u) => (c) => {
    let f = s, g = u, l = c, d = !0, _;
    for (; d; ) {
      const h = f, p = g, $ = l, m = Qt((N) => T, (N) => (v) => b("Just", { head: N, tail: v }), h);
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
  return 0 < t.length ? b("Just", i(e)(o)(t[0])) : T;
}, rs = (t) => uc(Tn(
  (n) => (e) => {
    const r = e.y - n.y, o = e.x - n.x;
    return sr(o * o + r * r);
  },
  t,
  It(1, t.length, t)
)), me = (t) => {
  const n = Qt(
    (e) => T,
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
        return Ct(bt(Xt.foldr, e(t.nodes, Ot)))((r) => [
          { x: r.x, y: r.y },
          { x: r.x + r.w, y: r.y + r.h }
        ]);
      })(),
      ...xn((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, qt("Cons", r._4, e(r._6, o)));
          a();
        };
        return bt(Xt.foldr, e(t.edges, Ot));
      })()),
      ...xn((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, qt("Cons", r._4, e(r._6, o)));
          a();
        };
        return bt(Xt.foldr, e(t.chipExtras, Ot));
      })())
    ]
  );
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: Is(r.minX)(o.x), minY: Is(r.minY)(o.y), maxX: Rs(r.maxX)(o.x), maxY: Rs(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  a();
}, $r = function(t) {
  return function(n) {
    if (t >= 0 && t < n.length) return n.charAt(t);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
}, Re = function(t) {
  return t.join("");
}, os = function(t) {
  return t.split("");
}, is = function(t) {
  return t;
}, xe = function(t) {
  return t.length;
}, Fs = function(t) {
  return function(n) {
    return n.substr(0, t);
  };
}, Er = function(t) {
  return function(n) {
    return n.substring(t);
  };
}, o0 = function(t) {
  return function(n) {
    return { before: n.substring(0, t), after: n.substring(t) };
  };
}, i0 = (t) => (n) => {
  const e = o0(xe(t))(n);
  return e.before === t ? b("Just", e.after) : T;
}, s0 = function(n) {
  return function(e) {
    return function() {
      return n(e);
    };
  };
}, u0 = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, c0 = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, Ce = (t) => BigInt(t), a0 = (t) => Number(t), oo = (t) => (n) => t + n, io = (t) => (n) => t * n, gi = (t) => (n) => t - n, ac = 0n, uo = 1n, fc = (t) => (n) => t ^ n, br = (t) => (n) => t & n, ss = (t) => (n) => t << n, _i = (t) => (n) => t >> n, f0 = (t) => (n) => t == n, g0 = (t) => (n) => t === n ? 0 : t > n ? 1 : -1, _0 = { eq: f0 }, Bs = {
  compare: (t) => (n) => {
    const e = g0(t)(n);
    return e === 1 ? Jn : e === 0 ? kn : Nn;
  },
  Eq0: () => _0
}, l0 = /* @__PURE__ */ u0(en)(T), d0 = /* @__PURE__ */ c0(en)(T), h0 = (t) => (n) => Ze(t._1 - n._1) + Ze(t._2 - n._2), Go = (t) => t, cn = /* @__PURE__ */ Go("North"), an = /* @__PURE__ */ Go("South"), Vn = /* @__PURE__ */ Go("East"), we = /* @__PURE__ */ Go("West"), gc = (t) => t, Qs = (t, n) => ({ tag: t, _1: n }), _c = (t, n) => ({ tag: t, _1: n }), us = (t, n) => ({ tag: t, _1: n }), p0 = /* @__PURE__ */ us("First"), $0 = /* @__PURE__ */ gc("Forward"), m0 = /* @__PURE__ */ gc("Backward"), N0 = /* @__PURE__ */ Mt(G)(Ft), J0 = (t) => yr((n) => (e) => ({
  nodes: Ln(G.compare, yn, n.nodes, e.nodes),
  edges: Ln(G.compare, yn, n.edges, e.edges)
}))({ nodes: W, edges: W })(t.keyframes), v0 = (t) => (n) => ({
  entering: {
    nodes: re(G.compare, n.nodes, t.nodes),
    edges: re(G.compare, n.edges, t.edges)
  },
  leaving: {
    nodes: re(G.compare, t.nodes, n.nodes),
    edges: re(G.compare, t.edges, n.edges)
  },
  surviving: {
    nodes: so(G.compare, yn, t.nodes, n.nodes),
    edges: so(G.compare, yn, t.edges, n.edges)
  }
}), lc = (t) => t, cs = (t) => (n) => (e) => {
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
}, Se = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, er = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, Oe = (t) => (e) => {
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
    a();
  }
  return i;
}, li = (t) => (e) => {
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
}, y0 = /* @__PURE__ */ J((t) => (n) => X(G)(n)()(t))(W), T0 = /* @__PURE__ */ J((t) => (n) => X(G)(n)()(t))(W), w0 = /* @__PURE__ */ (() => {
  const t = qn.unfoldr(Ie);
  return (n) => t(Dn("IterNode", n, Ae));
})(), dc = (t) => (e) => {
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
    a();
  }
  return i;
}, Ds = /* @__PURE__ */ Mt(G)(Ft), L0 = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, E0 = /* @__PURE__ */ lc("Hold"), b0 = /* @__PURE__ */ lc("Gap"), k0 = (t) => (n) => (e) => {
  const r = e.center.y - n.center.y, o = e.center.x - n.center.x, i = sr(o * o + r * r), s = e.zoom - n.zoom, u = s < 0 ? -s : s;
  return cs(t.minTransition)(t.maxTransition)(Se(t.panSpeed <= 0 ? t.minTransition : i / t.panSpeed)(t.zoomSpeed <= 0 ? t.minTransition : u / t.zoomSpeed));
}, x0 = /* @__PURE__ */ J((t) => (n) => {
  const e = t.length - 1 | 0;
  return e >= 0 && e < t.length && t[e] === n ? t : sn(t)(n);
})([]), as = (t) => {
  const n = Qt((e) => T, (e) => (r) => b("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: er(r.minX)(o.x), minY: er(r.minY)(o.y), maxX: Se(r.maxX)(o.x), maxY: Se(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  a();
}, hc = (t) => {
  const n = Qt((e) => T, (e) => (r) => b("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return T;
  if (n.tag === "Just")
    return b("Just", as(t));
  a();
}, C0 = (t) => (n) => (e) => y0(Ct(bt(Pn.foldr, e))((r) => {
  const o = Oe(r)(t);
  if (o.tag === "Just")
    return gt((i) => !li(i)(n), [o._1.source, o._1.target]);
  if (o.tag === "Nothing")
    return [];
  a();
})), S0 = (t) => (n) => (e) => {
  const r = es(t.easing)(cs(0)(1)(e.endT <= e.startT ? 1 : (n - e.startT) / (e.endT - e.startT)));
  return {
    center: { x: e.fromCam.center.x + (e.toCam.center.x - e.fromCam.center.x) * r, y: e.fromCam.center.y + (e.toCam.center.y - e.fromCam.center.y) * r },
    zoom: e.fromCam.zoom + (e.toCam.zoom - e.fromCam.zoom) * r
  };
}, G0 = (t) => (n) => (e) => (r) => {
  const o = (s, u) => er(k0(t)(s.toCam)(u.toCam))(s.endT - s.startT), i = J((s) => (u) => {
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
      })() || o(s.pending._1, u) <= 0 ? { acc: sn(s.acc)(s.pending._1), pending: b("Just", u) } : {
        acc: sn(sn(s.acc)({ ...s.pending._1, endT: u.startT - o(s.pending._1, u) }))({
          startT: u.startT - o(s.pending._1, u),
          endT: u.startT,
          fromCam: s.pending._1.toCam,
          toCam: u.toCam
        }),
        pending: b("Just", u)
      };
    a();
  })({ acc: [], pending: T })(r);
  if (i.pending.tag === "Nothing")
    return i.acc;
  if (i.pending.tag === "Just")
    return sn(i.acc)(i.pending._1);
  a();
}, P0 = (t) => t.kind.tag === "SendToken" ? b("Just", E(t.kind._1.edge, { source: t.kind._1.from, target: t.kind._1.to })) : T, A0 = (t) => t.tag === "DataFlow" ? yt(P0)(t._1.events) : [], I0 = (t) => (n) => T0(yt((e) => li(e._2.source)(n) || li(e._2.target)(n) ? b("Just", e._1) : T)(w0(t))), R0 = (t) => (n) => {
  const e = (r) => {
    const o = Mf(en, T, (i) => i.kind === "Hold", r < 1 ? [] : It(0, r, n));
    if (o.tag === "Just")
      return o._1 >= 0 && o._1 < n.length ? b("Just", n[o._1].cam) : T;
    if (o.tag === "Nothing")
      return T;
    a();
  };
  return At((r) => (o) => {
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
          })(), u = r + 1 | 0, c = Me(en, T, (f) => f.kind === "Hold", u < 1 ? n : It(u, n.length, n));
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
}, Ws = {
  padding: 24,
  easing: t0,
  minZoom: 0.9,
  maxZoom: 2.5,
  panSpeed: 700,
  zoomSpeed: 1.5,
  minTransition: 0.3,
  maxTransition: 1.4
}, F0 = (t) => (n) => (e) => {
  const r = n.w + e * 2, o = n.h + e * 2, i = me(t);
  return r <= 0 || o <= 0 || i.w <= 0 || i.h <= 0 ? 1 : er(i.w / r)(i.h / o);
}, fs = (t) => {
  const n = Qt((e) => T, (e) => (r) => b("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: er(r.minX)(o.x), minY: er(r.minY)(o.y), maxX: Se(r.maxX)(o.x + o.w), maxY: Se(r.maxY)(o.y + o.h) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x + n._1.head.w,
      maxY: n._1.head.y + n._1.head.h
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  a();
}, pc = (t) => (n) => (e) => {
  if (e.tag === "Leaf")
    return me(t);
  const r = I0(n)(e), o = [
    ...yt((i) => {
      const s = dc(i)(t.nodes);
      return s.tag === "Just" ? b("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : T;
    })(bt(
      Pn.foldr,
      Ln(G.compare, yn, e, C0(n)(e)(r))
    )),
    ...yt((i) => {
      const s = Oe(i)(t.edges);
      return s.tag === "Just" ? b("Just", as(s._1)) : T;
    })(bt(Pn.foldr, r)),
    ...yt((i) => {
      const s = Oe(i)(t.chipExtras);
      if (s.tag === "Just")
        return hc(s._1);
      if (s.tag === "Nothing")
        return T;
      a();
    })(bt(Pn.foldr, r))
  ];
  return o.length === 0 ? me(t) : fs(o);
}, B0 = (t) => (n) => (e) => (r) => {
  const o = [
    ...yt((i) => i)([
      (() => {
        const i = Oe(e)(t.edges);
        return i.tag === "Just" ? b("Just", as(i._1)) : T;
      })(),
      (() => {
        const i = Oe(e)(t.chipExtras);
        if (i.tag === "Just")
          return hc(i._1);
        if (i.tag === "Nothing")
          return T;
        a();
      })()
    ]),
    ...(() => {
      const i = Oe(e)(n);
      if (i.tag === "Just")
        return yt((s) => {
          const u = dc(s)(t.nodes);
          return u.tag === "Just" ? b("Just", { x: u._1.x, y: u._1.y, w: u._1.w, h: u._1.h }) : T;
        })([i._1.source, i._1.target]);
      if (i.tag === "Nothing")
        return [];
      a();
    })()
  ];
  return o.length === 0 ? pc(t)(n)(r) : fs(o);
}, Q0 = /* @__PURE__ */ J((t) => (n) => {
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
  })() ? sn((() => {
    const o = t.length - 1 | 0;
    return o < 1 ? [] : It(0, o, t);
  })())({ ...r._1, endT: n.endT }) : sn(t)(n);
})([]), $c = (t) => (n) => {
  const e = me(t), r = e.w / Se(1e-4)(n.zoom), o = e.h / Se(1e-4)(n.zoom);
  return { x: n.center.x - r / 2, y: n.center.y - o / 2, w: r, h: o };
}, D0 = (t) => Ln(
  G.compare,
  yn,
  Ds(z((n) => E(n.id, { source: n.from.node, target: n.to.node }))(t.graph.edges)),
  Ds(Ct(t.scenes)(A0))
), di = (t) => (n) => (e) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: cs(t.minZoom)(t.maxZoom)(F0(n)(e)(t.padding)) }), W0 = (t) => (n) => (e) => (r) => {
  const o = di(t)(n)(me(n)), i = gt(
    (s) => s >= 0 && s <= e,
    x0(Lt(pt.compare)([0, e, ...Ct(r)((s) => [s.startT, s.endT])]))
  );
  return G0(t)(n)(o)(Q0(R0(o)(yt((s) => {
    const u = (s._1 + s._2) / 2;
    if (s._2 <= s._1)
      return T;
    const c = J(L0)(0)(z((g) => g.priority)(gt(
      (g) => g.startT <= u && u < g.endT,
      r
    ))), f = z((g) => g.bbox)(gt(
      (g) => g.priority === c,
      gt((g) => g.startT <= u && u < g.endT, r)
    ));
    return f.length === 0 ? b("Just", { kind: b0, startT: s._1, endT: s._2, cam: o }) : b("Just", { kind: E0, startT: s._1, endT: s._2, cam: di(t)(n)(fs(f)) });
  })(Tn(ir, i, It(1, i.length, i))))));
}, q0 = (t) => (n) => (e) => (r) => {
  const o = gn((i) => r >= i.startT && r < i.endT)(e);
  if (o.tag === "Just")
    return S0(t)(r)(o._1);
  if (o.tag === "Nothing") {
    const i = e.length - 1 | 0;
    if (i >= 0 && i < e.length && r >= e[i].endT)
      return e[i].toCam;
    const s = di(t)(n)(me(n));
    return 0 < e.length ? e[0].fromCam : s;
  }
  a();
};
function mr(t) {
  return t.charCodeAt(0);
}
function mc(t) {
  return String.fromCharCode(t);
}
const _e = function(t) {
  return function(n) {
    return function(e) {
      return e.replace(new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), n);
    };
  };
}, gs = function(t) {
  return function(n) {
    return n.split(t);
  };
}, H0 = function(t) {
  return t.trim();
}, Po = function(t) {
  return function(n) {
    return n.join(t);
  };
};
var z0 = typeof Array.from == "function", O0 = typeof Symbol < "u" && Symbol != null && typeof Symbol.iterator < "u" && typeof String.prototype[Symbol.iterator] == "function", V0 = typeof String.prototype.fromCodePoint == "function", Y0 = typeof String.prototype.codePointAt == "function";
const X0 = function(t) {
  return Y0 ? function(n) {
    return n.codePointAt(0);
  } : t;
}, U0 = function(t) {
  return V0 ? String.fromCodePoint : t;
}, M0 = function(t) {
  return function(n) {
    return O0 ? function(e) {
      for (var r = "", o = e[Symbol.iterator](), i = 0; i < n; ++i) {
        var s = o.next();
        if (s.done) return r;
        r += s.value;
      }
      return r;
    } : t(n);
  };
}, K0 = function(t) {
  return function(n) {
    return z0 ? function(e) {
      return Array.from(e, n);
    } : t;
  };
}, Ao = (t) => {
  const n = xe(t);
  if (n === 0)
    return T;
  if (n === 1)
    return b("Just", { head: mr($r(0)(t)), tail: "" });
  const e = mr($r(1)(t)), r = mr($r(0)(t));
  return 55296 <= r && r <= 56319 && 56320 <= e && e <= 57343 ? b("Just", { head: (((r - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0, tail: Er(2)(t) }) : b("Just", { head: r, tail: Er(1)(t) });
}, j0 = (t) => {
  const n = Ao(t);
  return n.tag === "Just" ? b("Just", E(n._1.head, n._1.tail)) : T;
}, Z0 = (t) => qn.unfoldr(j0)(t), t_ = (t) => {
  const n = mr($r(0)(t));
  if (55296 <= n && n <= 56319 && xe(t) > 1) {
    const e = mr($r(1)(t));
    if (56320 <= e && e <= 57343)
      return (((n - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0;
  }
  return n;
}, Nc = /* @__PURE__ */ X0(t_), _s = /* @__PURE__ */ K0(Z0)(Nc), Vo = (t) => is(t >= 0 && t <= 65535 ? mc(t) : t < 0 ? "\0" : "￿"), n_ = (t) => t <= 65535 ? Vo(t) : Vo(ze(t - 65536 | 0, 1024) + 55296 | 0) + Vo(Wi(t - 65536 | 0)(1024) + 56320 | 0), e_ = /* @__PURE__ */ U0(n_), Jc = (t) => (n) => {
  if (t < 1)
    return "";
  const e = Ao(n);
  return e.tag === "Just" ? e_(e._1.head) + Jc(t - 1 | 0)(e._1.tail) : n;
}, fn = /* @__PURE__ */ M0(Jc), r_ = (t) => (n) => n === "" ? T : b("Just", Nc(n)), co = (t, n, e) => ({ tag: t, _1: n, _2: e }), o_ = () => ({ tag: "ExtendFromSource" }), ao = (t, n) => ({ tag: t, _1: n }), ls = (t) => t, fo = (t, n) => ({ tag: t, _1: n }), Yo = /* @__PURE__ */ fo("NotYet"), qs = /* @__PURE__ */ fo("Consumed"), i_ = /* @__PURE__ */ ls("FromSource"), Hs = /* @__PURE__ */ ls("FromTarget"), s_ = /* @__PURE__ */ ls("FromBoth"), Xo = /* @__PURE__ */ ao("Hidden"), u_ = /* @__PURE__ */ ao("Visible"), vc = /* @__PURE__ */ o_(), Uo = /* @__PURE__ */ co("Retracted"), c_ = /* @__PURE__ */ co("Extended"), hi = (t, n) => ({ tag: t, _1: n }), Qe = (t, n, e) => ({ tag: t, _1: n, _2: e }), yc = (t) => t, Ee = (t, n) => ({ tag: t, _1: n }), He = (t, n, e, r, o, i, s, u, c) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s, _7: u, _8: c }), Tc = (t) => (e) => {
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
    a();
  }
  return i;
}, Io = (t) => (e) => {
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
    a();
  }
  return i;
}, de = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, Nr = (t) => (e) => {
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
    a();
  }
  return i;
}, zs = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, Os = (t) => (e) => {
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
}, De = /* @__PURE__ */ (() => {
  const t = qn.unfoldr((n) => {
    if (n.tag === "Nil")
      return T;
    if (n.tag === "Cons")
      return b("Just", E(n._1, n._2));
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
    return e(n, Ot);
  })());
})(), a_ = /* @__PURE__ */ J((t) => (n) => X(G)(n)()(t))(W), pi = (t) => (e) => {
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
}, f_ = /* @__PURE__ */ Mt(G)(Ft), g_ = (t) => (e) => {
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
    a();
  }
  return i;
}, Mo = (t) => (e) => {
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
}, __ = /* @__PURE__ */ Ee("NoKeyframes"), l_ = (t) => Ee("DuplicateEventId", t), d_ = (t) => Ee("UnknownEvent", t), wc = /* @__PURE__ */ yc("PlopIn"), h_ = /* @__PURE__ */ yc("PlopOut"), p_ = (t) => (n) => yt((e) => {
  if (e.target.tag === "NodeWindow" || e.target.tag === "EdgeWindow")
    return T;
  if (e.target.tag === "TokenWindow")
    return b(
      "Just",
      { startT: e.startT, endT: e.endT, bbox: B0(t)(n)(e.target._2)(W), priority: 1 }
    );
  if (e.target.tag === "FillWindow")
    return b(
      "Just",
      {
        startT: e.startT,
        endT: e.endT,
        bbox: pc(t)(n)(Wt(
          "Node",
          1,
          1,
          e.target._2,
          void 0,
          W,
          W
        )),
        priority: 1
      }
    );
  a();
}), $_ = (t) => (n) => (e) => (r) => (o) => {
  const i = at(J((f) => (g) => f + _s(g).length | 0)(0)(e.labels)) * t.tokenReadSecPerChar, s = (f) => {
    const g = Tc(f)(n.nodes);
    if (g.tag === "Just")
      return { x: g._1.x + g._1.w / 2, y: g._1.y + g._1.h / 2 };
    if (g.tag === "Nothing")
      return { x: 0, y: 0 };
    a();
  }, u = Io(e.edge)(n.edges), c = (() => {
    if (u.tag === "Just") {
      const f = (() => {
        if (e.direction === "Forward")
          return u._1;
        if (e.direction === "Backward")
          return $n(u._1);
        a();
      })(), g = (() => {
        if (e.direction === "Forward")
          return u._1;
        if (e.direction === "Backward")
          return $n(u._1);
        a();
      })(), l = s(e.from), d = g.length - 1 | 0;
      return (2 * (() => {
        const _ = 0 < f.length ? f[0] : s(e.from), h = _.x - l.x, p = _.y - l.y;
        return (h < 0 ? -h : h) + (p < 0 ? -p : p);
      })() + rs(u._1) + 2 * (() => {
        const _ = d >= 0 && d < g.length ? g[d] : s(e.to), h = s(e.to), p = h.x - _.x, $ = h.y - _.y;
        return (p < 0 ? -p : p) + ($ < 0 ? -$ : $);
      })()) / t.tokenSpeed;
    }
    if (u.tag === "Nothing")
      return 0 / t.tokenSpeed;
    a();
  })();
  return t.tokenSpeed <= 0 ? t.minTokenDuration : de(t.minTokenDuration)(de(c)(i) / de(0.05)(1 - r - o));
}, m_ = (t) => {
  if (t.event.kind.tag === "SendToken")
    return b(
      "Just",
      {
        startT: t.startT,
        endT: t.endT,
        target: He(
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
    return b("Just", { startT: t.startT, endT: t.endT, target: He("FillWindow", t.event.id, t.event.kind._1.node, t.event.kind._1.labels) });
  a();
}, N_ = (t) => (n) => (e) => yt((r) => {
  const o = yt((i) => Tc(i)(t.nodes))(bt(
    Pn.foldr,
    (() => {
      if (r.scene.tag === "Structural")
        return Ln(
          G.compare,
          yn,
          (() => {
            const i = Nr(r.scene._1.from)(e);
            if (i.tag === "Nothing")
              return W;
            if (i.tag === "Just")
              return i._1.nodes;
            a();
          })(),
          (() => {
            const i = Nr(r.scene._1.to)(e);
            if (i.tag === "Nothing")
              return W;
            if (i.tag === "Just")
              return i._1.nodes;
            a();
          })()
        );
      if (r.scene.tag === "DataFlow") {
        const i = Nr(r.scene._1.keyframe)(e);
        if (i.tag === "Nothing")
          return W;
        if (i.tag === "Just")
          return i._1.nodes;
      }
      a();
    })()
  ));
  return o.length === 0 ? T : b(
    "Just",
    {
      startT: r.startT,
      endT: r.endT,
      bbox: (() => {
        const i = J((s) => (u) => ({ minX: zs(s.minX)(u.x), minY: zs(s.minY)(u.y), maxX: de(s.maxX)(u.x + u.w), maxY: de(s.maxY)(u.y + u.h) }))(0 < o.length ? { minX: o[0].x, minY: o[0].y, maxX: o[0].x + o[0].w, maxY: o[0].y + o[0].h } : { minX: 0, minY: 0, maxX: 0, maxY: 0 })(It(1, o.length, o));
        return { x: i.minX, y: i.minY, w: i.maxX - i.minX, h: i.maxY - i.minY };
      })(),
      priority: 0
    }
  );
}), J_ = (t) => (n) => (e) => {
  const r = Io(e)(t);
  if (r.tag === "Nothing")
    return Hs;
  if (r.tag === "Just") {
    const o = Os(r._1.target)(n);
    return Os(r._1.source)(n) ? o ? s_ : i_ : Hs;
  }
  a();
}, v_ = (t) => (n) => (e) => (r) => {
  const o = (() => {
    if (r.event.when.tag === "First")
      return 0;
    if (r.event.when.tag === "At")
      return r.event.when._1;
    if (r.event.when.tag === "After") {
      const i = r.event.when._1, s = gn((u) => u.event.id === i)(e);
      if (s.tag === "Nothing")
        return 0;
      if (s.tag === "Just")
        return s._1.endT;
      a();
    }
    if (r.event.when.tag === "With") {
      const i = r.event.when._1, s = gn((u) => u.event.id === i)(e);
      if (s.tag === "Nothing")
        return 0;
      if (s.tag === "Just")
        return s._1.startT;
    }
    a();
  })();
  return sn(e)({
    startT: o,
    endT: (() => {
      if (r.event.kind.tag === "SendToken")
        return o + $_(t)(n)(r.event.kind._1)(r.holdPre)(r.holdPost);
      if (r.event.kind.tag === "FillNodeWithoutTransition")
        return o + t.plop;
      a();
    })(),
    event: r.event,
    holdPre: r.holdPre,
    holdPost: r.holdPost
  });
}, ds = (t) => (n) => {
  if (n < 0)
    return Qe("AtKeyframe", t.initialKeyframe);
  if (n >= t.totalDuration) {
    const r = t.spans.length - 1 | 0;
    return r >= 0 && r < t.spans.length ? Qe(
      "AtKeyframe",
      (() => {
        if (t.spans[r].scene.tag === "Structural")
          return t.spans[r].scene._1.to;
        if (t.spans[r].scene.tag === "DataFlow")
          return t.spans[r].scene._1.keyframe;
        a();
      })()
    ) : Qe("AtKeyframe", t.initialKeyframe);
  }
  const e = gn((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return Qe("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return Qe("AtKeyframe", e._1.scene._1.keyframe);
    a();
  }
  if (e.tag === "Nothing")
    return Qe("AtKeyframe", t.initialKeyframe);
  a();
}, y_ = (t) => {
  if (t.when.tag === "First")
    return [];
  if (t.when.tag === "At")
    return [];
  if (t.when.tag === "After")
    return [t.when._1];
  if (t.when.tag === "With")
    return [t.when._1];
  a();
}, Vs = { id: "", nodes: W, edges: W }, T_ = (t) => (n) => v0((() => {
  const e = Nr(n.from)(t);
  if (e.tag === "Nothing")
    return Vs;
  if (e.tag === "Just")
    return e._1;
  a();
})())((() => {
  const e = Nr(n.to)(t);
  if (e.tag === "Nothing")
    return Vs;
  if (e.tag === "Just")
    return e._1;
  a();
})()), Ko = (t) => (n) => (e) => (r) => {
  const o = Io(r)(e.edges);
  if (o.tag === "Just")
    return t <= 0 ? n : de(n)(rs(o._1) / t);
  if (o.tag === "Nothing")
    return n;
  a();
}, Lc = (t) => (n) => (e) => (r) => (o) => {
  const i = t.plop, s = T_(e)(o), u = z((_) => ({
    startT: 0,
    endT: 0 + Ko(t.edgeSpeed)(t.minEdgeDuration)(n)(_),
    target: He("EdgeWindow", _, hi("Extend", vc))
  }))(De(s.entering.edges)), c = z((_) => ({ startT: 0, endT: i, target: He("NodeWindow", _, wc) }))(De(s.entering.nodes)), f = J(de)(0)(z((_) => Ko(t.edgeSpeed)(t.minEdgeDuration)(n)(_))(De(s.leaving.edges))), g = (_) => ae(
    (h) => {
      const p = Io(h)(r);
      if (p.tag === "Just")
        return p._1.source === _ || p._1.target === _;
      if (p.tag === "Nothing")
        return !1;
      a();
    },
    De(s.leaving.edges)
  ) ? f : 0, l = z((_) => ({ startT: g(_), endT: g(_) + t.plop, target: He("NodeWindow", _, h_) }))(De(s.leaving.nodes)), d = z((_) => ({
    startT: 0,
    endT: Ko(t.edgeSpeed)(t.minEdgeDuration)(n)(_),
    target: He("EdgeWindow", _, hi("Retract", J_(r)(s.leaving.nodes)(_)))
  }))(De(s.leaving.edges));
  return {
    duration: (() => {
      const _ = Lt(pt.compare)([
        ...z((p) => p.endT)(d),
        ...z((p) => p.endT)(l),
        ...z((p) => p.endT)(c),
        ...z((p) => p.endT)(u)
      ]), h = _.length - 1 | 0;
      return h >= 0 && h < _.length ? _[h] + t.gap : t.gap;
    })(),
    windows: [...d, ...l, ...c, ...u]
  };
}, w_ = (t) => (n) => (e) => (r) => (o) => (i) => z((() => {
  const s = o.startT;
  return (u) => ({ ...u, startT: u.startT + s, endT: u.endT + s });
})())(Lc(t)(n)(e)(r)(i).windows), L_ = (t) => yt((n) => bt(yr, n).length > 1 ? b(
  "Just",
  (() => {
    const e = Qt(
      (r) => T,
      (r) => (o) => b("Just", { head: r, tail: o }),
      bt(yr, n)
    );
    if (e.tag === "Just")
      return e._1.head;
    if (e.tag === "Nothing")
      return "";
    a();
  })()
) : T)(ng(Ri)(Lt(G.compare)(t))), E_ = (t) => {
  const n = z((r) => r.id)(t), e = a_(n);
  return [
    ...z(l_)(L_(n)),
    ...z(d_)(gt((r) => !pi(r)(e), Ct(t)(y_)))
  ];
}, b_ = (t) => {
  const n = f_(z((r) => E(
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
    if (pi(i)(o))
      return [Ee("ScheduleCycle", [...bt(Pn.foldr, o), i])];
    if (pi(i)(r))
      return [];
    const s = g_(i)(n);
    if (s.tag === "Nothing")
      return [];
    if (s.tag === "Just")
      return Ct(s._1)(e(X(G)(i)()(r))(X(G)(i)()(o)));
    a();
  };
  return Ct(t)((r) => e(W)(W)(r.id));
}, k_ = {
  plop: 0.5,
  gap: 0.5,
  edgeSpeed: 350,
  minEdgeDuration: 0.3,
  tokenSpeed: 100,
  minTokenDuration: 1.4,
  tokenReadSecPerChar: 0.06,
  nodeEasing: n0,
  edgeEasing: Zg,
  tokenEasing: jg
}, x_ = (t) => (n) => {
  if (n.tag === "Structural")
    return yt((e) => e)([
      Mo(n._1.from)(t) ? T : b("Just", Ee("UnknownKeyframe", n._1.from)),
      Mo(n._1.to)(t) ? T : b("Just", Ee("UnknownKeyframe", n._1.to))
    ]);
  if (n.tag === "DataFlow")
    return [
      ...yt((e) => e)([Mo(n._1.keyframe)(t) ? T : b("Just", Ee("UnknownKeyframe", n._1.keyframe))]),
      ...E_(n._1.events),
      ...b_(n._1.events)
    ];
  a();
}, C_ = (t) => (n) => {
  const e = Ct(n)(x_(t));
  return e.length === 0 ? Et("Right", void 0) : Et("Left", e);
}, Ec = (t) => (n) => (e) => J(v_(t)(n))([])(At((r) => (o) => ({
  event: o,
  holdPre: o.kind.tag === "SendToken" ? (() => {
    const i = r - 1 | 0;
    return i >= 0 && i < e.length && e[i].kind.tag === "SendToken" && e[i].kind._1.to === o.kind._1.from;
  })() ? 0 : 0.18 : 0,
  holdPost: o.kind.tag === "SendToken" ? (() => {
    const i = r + 1 | 0;
    return i >= 0 && i < e.length && e[i].kind.tag === "SendToken" && e[i].kind._1.from === o.kind._1.to;
  })() ? 0 : 0.18 : 0
}))(e)), S_ = (t) => (n) => (e) => {
  const r = Ec(t)(n)(e.events);
  return r.length === 0 ? t.gap : J(de)(0)(z((o) => o.endT)(r)) + t.gap;
}, G_ = (t) => (n) => (e) => (r) => (o) => {
  if (o.tag === "Structural")
    return Lc(t)(n)(e)(r)(o._1).duration;
  if (o.tag === "DataFlow")
    return S_(t)(n)(o._1);
  a();
}, P_ = (t) => (n) => (e) => (r) => (o) => J((i) => (s) => {
  const u = G_(t)(n)(e)(r)(s);
  return { acc: sn(i.acc)({ startT: i.t, endT: i.t + u, scene: s }), t: i.t + u };
})({ acc: [], t: 0 })(o).acc, A_ = (t) => (n) => (e) => (r) => z((() => {
  const o = e.startT;
  return (i) => ({ ...i, startT: i.startT + o, endT: i.endT + o });
})())(yt(m_)(Ec(t)(n)(r.events))), I_ = (t) => (n) => (e) => (r) => (o) => {
  if (o.scene.tag === "Structural")
    return w_(t)(n)(e)(r)(o)(o.scene._1);
  if (o.scene.tag === "DataFlow")
    return A_(t)(n)(o)(o.scene._1);
  a();
}, R_ = (t) => (n) => (e) => {
  const r = 0 < n.keyframes.length ? b("Just", n.keyframes[0]) : T;
  if (r.tag === "Nothing")
    return Et("Left", [__]);
  if (r.tag === "Just") {
    const o = r._1, i = N0(z((c) => E(c.id, c))(n.keyframes)), s = D0(n), u = C_(i)(n.scenes);
    return (() => {
      if (u.tag === "Left") {
        const c = u._1;
        return (f) => Et("Left", c);
      }
      if (u.tag === "Right") {
        const c = u._1;
        return (f) => f(c);
      }
      a();
    })()(() => {
      const c = P_(t)(e)(i)(s)(n.scenes), f = c.length - 1 | 0, g = f >= 0 && f < c.length ? c[f].endT : 0, l = Lt((d) => (_) => pt.compare(d.startT)(_.startT))(Ct(c)(I_(t)(e)(i)(s)));
      return Et(
        "Right",
        {
          totalDuration: g,
          windows: l,
          spans: c,
          keyframes: i,
          initialKeyframe: o.id,
          timing: t,
          layout: e,
          cameraSpans: W0(Ws)(e)(g)([
            ...N_(e)(s)(i)(c),
            ...p_(e)(s)(l)
          ]),
          cameraConfig: Ws
        }
      );
    });
  }
  a();
}, kr = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, bc = (t) => (e) => {
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
    a();
  }
  return i;
}, go = (t) => (n) => (e) => {
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
}, F_ = (t) => (e) => {
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
    a();
  }
  return i;
}, B_ = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, Q_ = (t) => (e) => {
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
}, D_ = /* @__PURE__ */ Mt(G)(Ft), W_ = (t) => (e) => {
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
}, q_ = /* @__PURE__ */ Mt(G)(Ft), H_ = /* @__PURE__ */ Mt(G)(Ft), z_ = (t) => (n) => (e) => (r) => {
  const o = me(t), i = o.w / kr(1e-4)(n.zoom) / 2, s = o.h / kr(1e-4)(n.zoom) / 2, u = e.y - n.center.y, c = e.x - n.center.x;
  return {
    ...n,
    center: {
      x: i <= 1e-4 ? n.center.x + 0 * r * 0.35 : c < 0 ? n.center.x + c / (1 + -c / i) * r * 0.35 : n.center.x + c / (1 + c / i) * r * 0.35,
      y: s <= 1e-4 ? n.center.y + 0 * r * 0.35 : u < 0 ? n.center.y + u / (1 + -u / s) * r * 0.35 : n.center.y + u / (1 + u / s) * r * 0.35
    }
  };
}, jo = (t) => (n) => {
  const e = bc(n)(t.keyframes);
  if (e.tag === "Nothing")
    return W;
  if (e.tag === "Just")
    return e._1.nodes;
  a();
}, Zo = (t) => (n) => {
  const e = bc(n)(t.keyframes);
  if (e.tag === "Nothing")
    return W;
  if (e.tag === "Just")
    return e._1.edges;
  a();
}, O_ = (t) => (n) => (e) => ae(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), V_ = (t) => (n) => (e) => ae((r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e, t), Y_ = (t) => (n) => (e) => ae((r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e, t), X_ = (t) => (n) => (e) => ae(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), U_ = (t) => (n) => {
  const e = ds(t)(n);
  if (e.tag === "AtKeyframe")
    return fn(3)(e._1) === "kf-" ? "" : e._1;
  if (e.tag === "InTransition")
    return fn(3)(e._2) === "kf-" ? "" : e._2;
  a();
}, kc = (t) => (n) => (e) => gn((r) => e(r) && n >= r.startT && n < r.endT)(t), M_ = (t) => {
  const n = go(0)(1)(t / 0.2), e = go(0)(1)((1 - t) / 0.2);
  return n * n * (3 - 2 * n) * e * e * (3 - 2 * e);
}, K_ = (t) => (n) => {
  if (n.tag === "Travelling") {
    const e = F_(n._1.edge)(t.edges);
    if (e.tag === "Just") {
      const r = cc(e._1)(n._1.progress);
      return r.tag === "Just" ? b("Just", { dot: r._1, weight: M_(n._1.progress) }) : T;
    }
    if (e.tag === "Nothing")
      return T;
    a();
  }
  return T;
}, j_ = (t) => (n) => {
  const e = ds(t)(n);
  if (e.tag === "AtKeyframe")
    return jo(t)(e._1);
  if (e.tag === "InTransition")
    return Ln(G.compare, yn, jo(t)(e._1), jo(t)(e._2));
  a();
}, Z_ = (t) => (n) => {
  const e = ds(t)(n);
  if (e.tag === "AtKeyframe")
    return Zo(t)(e._1);
  if (e.tag === "InTransition")
    return Ln(G.compare, yn, Zo(t)(e._1), Zo(t)(e._2));
  a();
}, tl = (t) => (n) => {
  const e = me(t), r = e.h / kr(1e-4)(n.zoom), o = e.w / kr(1e-4)(n.zoom);
  return {
    ...n,
    center: {
      x: o >= e.w ? e.x + e.w / 2 : go(e.x + o / 2)(e.x + e.w - o / 2)(n.center.x),
      y: r >= e.h ? e.y + e.h / 2 : go(e.y + r / 2)(e.y + e.h - r / 2)(n.center.y)
    }
  };
}, _o = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : kr(0)(B_(1)((n - t.startT) / e));
}, nl = (t) => (n) => (e) => (r) => {
  const o = kc(t.windows)(n)((i) => i.target.tag === "EdgeWindow" && i.target._1 === r);
  if (o.tag === "Just") {
    const i = es(t.timing.edgeEasing)(_o(o._1)(n)), s = o._1.target.tag === "EdgeWindow" ? o._1.target._2 : hi("Extend", vc);
    if (s.tag === "Retract")
      return co("Retracting", s._1, i);
    if (s.tag === "Extend")
      return co("Extending", s._1, i);
    a();
  }
  if (o.tag === "Nothing")
    return X_(t.windows)(n)(r) || O_(t.windows)(n)(r) ? Uo : Q_(r)(e) ? c_ : Uo;
  a();
}, el = (t) => (n) => {
  const e = Z_(t)(n);
  return D_(z((r) => E(r, nl(t)(n)(e)(r)))((() => {
    const r = (o) => {
      if (o.tag === "Leaf")
        return W;
      if (o.tag === "Node")
        return Wt("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
      a();
    };
    return bt(Pn.foldr, r(t.layout.edges));
  })()));
}, rl = (t) => (n) => (e) => (r) => {
  const o = kc(t.windows)(n)((i) => i.target.tag === "NodeWindow" && i.target._1 === r);
  if (o.tag === "Just") {
    const i = _o(o._1)(n), s = o._1.target.tag === "NodeWindow" ? o._1.target._2 : wc;
    if (s === "PlopIn")
      return ao("PloppingIn", i);
    if (s === "PlopOut")
      return ao("PloppingOut", i);
    a();
  }
  if (o.tag === "Nothing")
    return Y_(t.windows)(n)(r) || V_(t.windows)(n)(r) ? Xo : W_(r)(e) ? u_ : Xo;
  a();
}, ol = (t) => (n) => {
  const e = j_(t)(n);
  return q_(z((r) => E(r, rl(t)(n)(e)(r)))((() => {
    const r = (o) => {
      if (o.tag === "Leaf")
        return W;
      if (o.tag === "Node")
        return Wt("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
      a();
    };
    return bt(Pn.foldr, r(t.layout.nodes));
  })()));
}, il = (t) => (n) => (e) => n.target.tag === "TokenWindow" ? E(
  n.target._1,
  e < n.startT ? Yo : e >= n.endT ? qs : fo(
    "Travelling",
    {
      edge: n.target._2,
      direction: n.target._3,
      progress: es(t.timing.tokenEasing)(_o(n)(e)),
      labels: n.target._6,
      source: n.target._4,
      target: n.target._5,
      holdPre: n.target._7,
      holdPost: n.target._8
    }
  )
) : n.target.tag === "FillWindow" ? E(
  n.target._1,
  e < n.startT ? Yo : e >= n.endT ? qs : fo("Filling", { node: n.target._2, progress: _o(n)(e), labels: n.target._3 })
) : E("", Yo), sl = (t) => (n) => H_(z((e) => il(t)(e)(n))(gt(
  (e) => e.target.tag === "TokenWindow" || e.target.tag === "FillWindow",
  t.windows
))), ul = (t) => (n) => {
  const e = yt(K_(t))((() => {
    const r = (o, i) => {
      if (o.tag === "Leaf")
        return i;
      if (o.tag === "Node")
        return r(o._5, qt("Cons", o._4, r(o._6, i)));
      a();
    };
    return bt(Xt.foldr, r(n.tokens, Ot));
  })());
  return 0 < e.length ? b("Just", e[0]) : T;
}, cl = (t) => (n) => {
  const e = ul(t)(n);
  if (e.tag === "Nothing")
    return n.camera;
  if (e.tag === "Just")
    return z_(t)(n.camera)(e._1.dot)(e._1.weight);
  a();
}, al = (t) => (n) => {
  const e = {
    nodes: ol(t)(n),
    edges: el(t)(n),
    tokens: sl(t)(n),
    camera: q0(t.cameraConfig)(t.layout)(t.cameraSpans)(n),
    frameTitle: U_(t)(n)
  };
  return { ...e, camera: tl(t.layout)(cl(t.layout)(e)) };
}, xc = (t) => t, Cc = /* @__PURE__ */ xc("RunText"), fl = /* @__PURE__ */ xc("RunCode"), Sc = (t) => (n) => (e) => n.length === 0 ? e : sn(e)({ style: t, text: Re(n) }), gl = (t) => ({
  style: (() => {
    if (t.style === "RunText")
      return fl;
    if (t.style === "RunCode")
      return Cc;
    a();
  })(),
  buf: [],
  runs: Sc(t.style)(t.buf)(t.runs)
}), _l = (t) => (n) => 0 < n.length ? { ...t, buf: sn(t.buf)(n[0]) } : { ...t, buf: sn(t.buf)("\\") }, ll = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, c = Qt((f) => T, (f) => (g) => b("Just", { head: f, tail: g }), r);
    if (c.tag === "Nothing") {
      o = !1, i = s;
      continue;
    }
    if (c.tag === "Just") {
      if (c._1.head === "\\") {
        e = _l(s)(c._1.tail), r = It(1, c._1.tail.length, c._1.tail);
        continue;
      }
      if (c._1.head === "`") {
        e = gl(s), r = c._1.tail;
        continue;
      }
      e = { ...s, buf: sn(s.buf)(c._1.head) }, r = c._1.tail;
      continue;
    }
    a();
  }
  return i;
}, Gc = (t) => {
  const n = ll({ style: Cc, buf: [], runs: [] })(os(t));
  return Sc(n.style)(n.buf)(n.runs);
};
let Yr = null;
function dl() {
  return Yr || (typeof document > "u" ? null : (Yr = document.createElement("canvas").getContext("2d"), Yr));
}
const Ys = /* @__PURE__ */ new Map(), hl = (t) => (n) => (e) => (r) => () => {
  const o = `${e} ${n}px ${t}|${r}`, i = Ys.get(o);
  if (i !== void 0) return i;
  const s = dl();
  if (!s)
    return r.length * n * 0.62;
  s.font = `${e} ${n}px ${t}`;
  const u = s.measureText(r).width;
  return Ys.set(o, u), u;
}, pl = Wr.traverse(Ai), $l = /* @__PURE__ */ J(nr)(0), xr = /* @__PURE__ */ (() => {
  const t = _e(`\r
`)(" "), n = _e(`
`)(" "), e = (() => {
    const r = _e("\r")(" "), o = (() => {
      const i = _e("	")(" ");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), ml = (t) => (n) => {
  const e = pl((r) => {
    const o = (() => {
      if (r.style === "RunText")
        return t.text;
      if (r.style === "RunCode")
        return t.code;
      a();
    })();
    return hl(o.family)(o.size)(o.weight)(xr(r.text));
  })(Gc(xr(n)));
  return () => {
    const r = e();
    return $l(r);
  };
}, Nl = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: "500" }, Jl = { family: "'Ioskeley Mono', ui-monospace, SFMono-Regular, Menlo, monospace", size: 11, weight: "400" }, vl = { text: Nl, code: Jl }, _r = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, yl = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, Tl = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, wl = (t) => (e) => {
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
    a();
  }
  return i;
}, Xs = (t) => Re($n(Le((n) => n === " ")($n(Le((n) => n === " ")(os(t)).rest)).rest)), Ll = (t) => J((n) => (e) => e._1 > 0 && (e._2 === " " || e._2 === "-" || e._2 === "_" || e._2 === ".") ? b("Just", e._1) : n)(T)(At(ir)(t)), $i = (t) => (n) => {
  if (t <= 0)
    return [n];
  if (xe(n) <= t)
    return [n];
  const e = os(n), r = t < 1 ? [] : It(0, t, e), o = Ll(r);
  if (o.tag === "Just") {
    const i = Xs(Fs(!(o._1 >= 0 && o._1 < r.length) || r[o._1] === " " ? o._1 : o._1 + 1 | 0)(n)), s = Xs(Er(o._1 + 1 | 0)(n));
    return s === "" ? [i] : [i, ...$i(t)(s)];
  }
  if (o.tag === "Nothing") {
    const i = Fs(t)(n), s = Er(t)(n);
    return s === "" ? [i] : [i, ...$i(t)(s)];
  }
  a();
}, El = { cellW: 7, cellH: 3, maxLineWidth: 20 }, bl = (t) => (n) => {
  const e = z((i) => E(
    (() => {
      if (i.label.tag === "Just")
        return i.label._1;
      if (i.label.tag === "Nothing")
        return i.id;
      a();
    })(),
    i
  ))(n.nodes), r = _r(1)(ze(
    (yl(t.maxLineWidth)(J((i) => (s) => _r(i)(xe(s._1)))(0)(e)) + 2 | 0) + t.cellW | 0,
    t.cellW
  )), o = (r * t.cellW | 0) - 1 | 0;
  return {
    ...n,
    nodes: z((i) => {
      if (!(i._2.size._1 === 1 && i._2.size._2 === 1))
        return i._2;
      const s = Ct(gs(`
`)(i._1))($i(o)), u = J((c) => (f) => _r(c)(xe(f)))(0)(s);
      return {
        ...i._2,
        size: E(
          at(u > o ? ze((u + 2 | 0) + t.cellW | 0, t.cellW) : r),
          at(_r(1)(ze(s.length + t.cellH | 0, t.cellH)))
        )
      };
    })(e)
  };
}, kl = (t) => (n) => (e) => ({
  ...e,
  nodes: z((r) => {
    const o = wl(r.id)(n);
    if (o.tag === "Nothing")
      return r;
    if (o.tag === "Just")
      return { ...r, size: E(Tl(r.size._1)(at(_r(1)(ur(Bi((o._1 + 32) / t))))), r.size._2) };
    a();
  })(e.nodes)
}), xl = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, Cl = (t) => {
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
                const y = t[f].position, w = t[f].size, L = t[N].position, k = t[N].size;
                return y._1 < L._1 + k._1 && L._1 < y._1 + w._1 && y._2 < L._2 + k._2 && L._2 < y._2 + w._2;
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
}, Us = (t) => J((n) => (e) => n + h0(e.start)(e.end))(0)(t.segments), Sl = (t) => (n) => (e) => ({
  crossingCount: J((r) => (o) => r + o.jumps.length | 0)(0)(n),
  bendCount: J((r) => (o) => r + o.bends.length | 0)(0)(n),
  totalEdgeLength: J((r) => (o) => r + Us(o))(0)(n),
  maxEdgeLength: J((r) => (o) => xl(r)(Us(o)))(0)(n),
  nodeOverlapCount: Cl(t),
  constraintViolations: e,
  jumpCount: J((r) => (o) => r + o.jumps.length | 0)(0)(n)
}), hs = (t) => t, Kt = (t) => (e) => {
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
    a();
  }
  return i;
}, ps = /* @__PURE__ */ hs("LEFT"), Gl = /* @__PURE__ */ hs("RIGHT"), Pc = /* @__PURE__ */ hs("UNDEFINED"), Pl = {
  eq: (t) => (n) => t === "LEFT" ? n === "LEFT" : t === "RIGHT" ? n === "RIGHT" : t === "UP" ? n === "UP" : t === "DOWN" ? n === "DOWN" : t === "UNDEFINED" && n === "UNDEFINED"
}, Al = {
  compare: (t) => (n) => {
    if (t === "LEFT")
      return n === "LEFT" ? kn : Nn;
    if (n === "LEFT")
      return Jn;
    if (t === "RIGHT")
      return n === "RIGHT" ? kn : Nn;
    if (n === "RIGHT")
      return Jn;
    if (t === "UP")
      return n === "UP" ? kn : Nn;
    if (n === "UP")
      return Jn;
    if (t === "DOWN")
      return n === "DOWN" ? kn : Nn;
    if (n === "DOWN")
      return Jn;
    if (t === "UNDEFINED" && n === "UNDEFINED")
      return kn;
    a();
  },
  Eq0: () => Pl
}, Il = (t) => (e) => {
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
}, Rl = { x: 0, y: 0 }, Un = (t) => (n) => (e) => {
  const r = Kt(t)(e.cNodes);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cNodes: X(rt)(t)(n(r._1))(e.cNodes) };
  a();
}, Jr = (t) => (n) => (e) => {
  const r = Kt(t)(e.cGroups);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cGroups: X(rt)(t)(n(r._1))(e.cGroups) };
  a();
}, Fl = (t) => J((n) => (e) => Un(e)((r) => ({ ...r, hitboxPreCompaction: r.hitbox }))(n))(t)(t.cNodeOrder), Bl = (t) => {
  const n = J((e) => (r) => {
    const o = Kt(r)(t.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return J((i) => (s) => Tt(rt)(un)(s)([r])(i))(e)(o._1.constraints);
    a();
  })(W)(t.cNodeOrder);
  return J((e) => (r) => Un(r)((o) => ({
    ...o,
    constraints: (() => {
      const i = Kt(r)(n);
      if (i.tag === "Nothing")
        return [];
      if (i.tag === "Just")
        return i._1;
      a();
    })()
  }))(e))(t)(t.cNodeOrder);
}, Ql = (t) => {
  const n = J((e) => (r) => Jr(r)((o) => ({ ...o, outDegree: o.outDegreeReal }))(e))(t)(t.cGroupOrder);
  return J((e) => (r) => Un(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder);
}, Dl = { left: !1, right: !1, up: !1, down: !1 }, Wl = { horizontalSpacing: (t) => (n) => 0, verticalSpacing: (t) => (n) => 0 }, $s = (t) => J((n) => (e) => {
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
          return b("Just", u);
        if (s.tag === "Just") {
          const f = Kt(s._1)(n.cNodes);
          if (f.tag === "Nothing")
            return b("Just", u);
          if (f.tag === "Just")
            return c._1.hitbox.x < f._1.hitbox.x ? b("Just", u) : b("Just", s._1);
        }
      }
      a();
    })(T)(r._1.cNodes), i = Jr(e)((s) => ({ ...s, reference: o }))(n);
    if (o.tag === "Nothing")
      return i;
    if (o.tag === "Just") {
      const s = Kt(o._1)(i.cNodes);
      if (s.tag === "Nothing")
        return i;
      if (s.tag === "Just") {
        const u = s._1;
        return J((c) => (f) => Un(f)((g) => ({ ...g, cGroupOffset: { x: g.hitbox.x - u.hitbox.x, y: g.hitbox.y - u.hitbox.y } }))(c))(i)(r._1.cNodes);
      }
    }
  }
  a();
})(t)(t.cGroupOrder), En = (t) => $s({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return W;
      if (e.tag === "Node")
        return Wt("Node", e._1, e._2, e._3, { ...e._4, hitbox: { ...e._4.hitbox, x: -e._4.hitbox.x - e._4.hitbox.width } }, n(e._5), n(e._6));
      a();
    };
    return n(t.cNodes);
  })()
}), zn = (t) => $s({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return W;
      if (e.tag === "Node")
        return Wt(
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
}), Ac = (t) => {
  const n = J((e) => (r) => Jr(r)((o) => ({ ...o, outDegree: 0, outDegreeReal: 0, incomingConstraints: [] }))(e))(t)(t.cGroupOrder);
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
            return c._1.cGroup.tag === "Just" && c._1.cGroup._1 !== i ? Jr(c._1.cGroup._1)((f) => ({ ...f, outDegree: f.outDegree + 1 | 0, outDegreeReal: f.outDegreeReal + 1 | 0 }))(Jr(i)((f) => Gn(Tr)(u)(f.incomingConstraints) ? f : { ...f, incomingConstraints: [...f.incomingConstraints, u] })(s)) : s;
          a();
        })(e)(o._1.constraints);
      }
    }
    a();
  })(n)(n.cNodeOrder);
}, Xr = (t) => {
  const n = Bl(t.cGraph);
  return { ...t, cGraph: Ac(J((e) => (r) => Un(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder)) };
}, ql = (t) => (n) => J((e) => (r) => {
  if (t === "LEFT" || t === "UP") {
    const i = r._2;
    return Un(r._1)((s) => ({ ...s, constraints: [...s.constraints, i] }))(e);
  }
  const o = r._1;
  return Un(r._2)((i) => ({ ...i, constraints: [...i.constraints, o] }))(e);
})(n)(t === "LEFT" || t === "RIGHT" ? n.predefinedHorizontalConstraints : n.predefinedVerticalConstraints), In = (t) => {
  const n = {
    ...t,
    cGraph: ql(t.direction)({
      ...t.cGraph,
      cNodes: (() => {
        const e = (r) => {
          if (r.tag === "Leaf")
            return W;
          if (r.tag === "Node")
            return Wt("Node", r._1, r._2, r._3, { ...r._4, constraints: [] }, e(r._5), e(r._6));
          a();
        };
        return e(t.cGraph.cNodes);
      })()
    })
  };
  return {
    ...n,
    cGraph: Ac((() => {
      if (n.constraintAlgorithm.tag === "Nothing")
        return n.cGraph;
      if (n.constraintAlgorithm.tag === "Just")
        return n.constraintAlgorithm._1(n);
      a();
    })())
  };
}, Hl = (t) => (n) => (e) => {
  const r = { ...e, direction: n };
  if (t === "UNDEFINED")
    return n === "LEFT" ? In(r) : n === "RIGHT" ? In({ ...r, cGraph: En(r.cGraph) }) : n === "UP" ? In({ ...r, cGraph: zn(r.cGraph) }) : n === "DOWN" ? In({ ...r, cGraph: En(zn(r.cGraph)) }) : r;
  if (t === "LEFT")
    return n === "RIGHT" ? Xr({ ...r, cGraph: En(r.cGraph) }) : n === "UP" ? In({ ...r, cGraph: zn(r.cGraph) }) : n === "DOWN" ? In({ ...r, cGraph: En(zn(r.cGraph)) }) : r;
  if (t === "RIGHT")
    return n === "LEFT" ? Xr({ ...r, cGraph: En(r.cGraph) }) : n === "UP" ? In({ ...r, cGraph: zn(En(r.cGraph)) }) : n === "DOWN" ? In({ ...r, cGraph: En(zn(En(r.cGraph))) }) : r;
  if (t === "UP")
    return n === "LEFT" ? In({ ...r, cGraph: zn(r.cGraph) }) : n === "RIGHT" ? In({ ...r, cGraph: En(zn(r.cGraph)) }) : n === "DOWN" ? Xr({ ...r, cGraph: En(r.cGraph) }) : r;
  if (t === "DOWN")
    return n === "LEFT" ? In({ ...r, cGraph: zn(En(r.cGraph)) }) : n === "RIGHT" ? In({ ...r, cGraph: En(zn(En(r.cGraph))) }) : n === "UP" ? Xr({ ...r, cGraph: En(r.cGraph) }) : r;
  a();
}, Ic = (t) => (n) => n.finished || !Il(t)(n.cGraph.supportedDirections) || (t === "LEFT" ? n.direction === "LEFT" : t === "RIGHT" ? n.direction === "RIGHT" : t === "UP" ? n.direction === "UP" : t === "DOWN" ? n.direction === "DOWN" : t === "UNDEFINED" && n.direction === "UNDEFINED") ? n : Hl(n.direction)(t)(n), zl = (t) => {
  if (t.finished)
    return t;
  const n = t.direction === "UNDEFINED" ? Ic(ps)(t) : t, e = { ...n, cGraph: Ql(n.cGraph) };
  if (e.compactionAlgorithm.tag === "Nothing")
    return e;
  if (e.compactionAlgorithm.tag === "Just")
    return e.compactionAlgorithm._1(e);
  a();
}, Rc = (t) => (n) => (e) => {
  const r = Kt(t)(e.cNodes), o = Kt(n)(e.cGroups);
  return r.tag === "Just" && o.tag === "Just" ? (() => {
    if (r._1.cGroup.tag === "Nothing")
      return !1;
    if (r._1.cGroup.tag === "Just")
      return !0;
    a();
  })() && (r._1.cGroup.tag === "Nothing" || !(r._1.cGroup.tag === "Just" && r._1.cGroup._1 === n)) ? e : {
    ...e,
    cNodes: X(rt)(t)({ ...r._1, cGroup: b("Just", n) })(e.cNodes),
    cGroups: X(rt)(n)({
      ...o._1,
      cNodes: Gn(Tr)(t)(o._1.cNodes) ? o._1.cNodes : [...o._1.cNodes, t],
      reference: (() => {
        if (o._1.reference.tag === "Nothing")
          return b("Just", t);
        if (o._1.reference.tag === "Just")
          return b("Just", o._1.reference._1);
        a();
      })()
    })(e.cGroups)
  } : e;
}, Fc = (t) => (n) => ({
  id: n.nextCNodeId,
  graph: {
    ...n,
    cNodes: X(rt)(n.nextCNodeId)({
      id: n.nextCNodeId,
      origin: t.origin,
      kind: t.kind,
      cGroup: T,
      cGroupOffset: Rl,
      hitbox: t.hitbox,
      hitboxPreCompaction: t.hitbox,
      constraints: [],
      startPos: -1e308
    })(n.cNodes),
    cNodeOrder: [...n.cNodeOrder, n.nextCNodeId],
    nextCNodeId: n.nextCNodeId + 1 | 0
  }
}), ms = (t) => (n) => {
  const e = n.nextCGroupId;
  return {
    id: e,
    graph: J((r) => (o) => Rc(o)(e)(r))({
      ...n,
      cGroups: X(rt)(e)({
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
}, Ol = (t) => J((n) => (e) => {
  const r = Kt(e)(n.cNodes);
  return r.tag === "Just" && r._1.cGroup.tag === "Nothing" ? ms({ master: T, nodes: [e] })(n).graph : n;
})(t)(t.cNodeOrder), Vl = (t) => ({
  cGraph: Fl(Ol($s(t))),
  direction: Pc,
  compactionAlgorithm: T,
  constraintAlgorithm: T,
  spacingsHandler: Wl,
  lockFun: T,
  finished: !1
}), lo = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, Ms = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, Yl = (t) => (n) => (e) => (r) => (o) => ({
  id: t,
  representedEdges: [o],
  affectedBends: [n, e],
  hitbox: { x: lo(n._1)(e._1), y: lo(n._2)(e._2), width: Ze(n._1 - e._1), height: Ze(n._2 - e._2) },
  ignoreSpacing: Dl,
  potentialGroupParents: (() => {
    if (r.tag === "Nothing")
      return [];
    if (r.tag === "Just")
      return [r._1];
    a();
  })(),
  aPort: T
}), Xl = (t) => (n) => {
  const e = lo(t.hitbox.x)(n.hitbox.x), r = lo(t.hitbox.y)(n.hitbox.y);
  return {
    ...t,
    representedEdges: [...t.representedEdges, ...n.representedEdges],
    affectedBends: [...t.affectedBends, ...n.affectedBends],
    potentialGroupParents: [...t.potentialGroupParents, ...n.potentialGroupParents],
    hitbox: {
      x: e,
      y: r,
      width: Ms(t.hitbox.x + t.hitbox.width)(n.hitbox.x + n.hitbox.width) - e,
      height: Ms(t.hitbox.y + t.hitbox.height)(n.hitbox.y + n.hitbox.height) - r
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
}, Ul = (t) => (n) => Ze(t.hitbox.x - n.hitbox.x) <= 1e-4 && n.hitbox.y - (t.hitbox.y + t.hitbox.height) <= 1e-4 && t.hitbox.y - (n.hitbox.y + n.hitbox.height) <= 1e-4, Ml = (t) => (n) => Ze(t.hitbox.x - n.hitbox.x) <= 1e-4 ? pt.compare(t.hitbox.y)(n.hitbox.y) : t.hitbox.x < n.hitbox.x ? Nn : Jn, Bc = (t, n) => ({ tag: t, _1: n }), ie = (t) => (e) => {
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
    a();
  }
  return i;
}, Kl = /* @__PURE__ */ J((t) => (n) => X(Al)(n)()(t))(W), Qc = /* @__PURE__ */ Mt(G)(Ft), mi = (t) => (e) => {
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
    a();
  }
  return i;
}, jl = (t) => yt((n) => {
  if (n.direction === "V")
    return b("Just", { start: n.start, end: n.end });
  if (n.direction === "H")
    return T;
  a();
})(t.segments), Ks = (t) => (n) => (e) => {
  if (e.tag === "Just") {
    const r = ie(n)(t);
    if (r.tag === "Just") {
      const o = gn((i) => i.id === e._1)(r._1);
      if (o.tag === "Just")
        return o._1.side;
      if (o.tag === "Nothing")
        return Vn;
      a();
    }
    if (r.tag === "Nothing")
      return Vn;
    a();
  }
  if (e.tag === "Nothing")
    return Vn;
  a();
}, Zl = (t) => (n) => {
  const e = Fc({
    origin: b("Just", Bc("SegmentOrigin", n)),
    kind: b("Just", "vs"),
    hitbox: n.hitbox
  })(t.cGraph);
  return {
    ...t,
    cGraph: (() => {
      if (0 < n.potentialGroupParents.length) {
        const r = Kt(n.potentialGroupParents[0])(e.graph.cNodes);
        if (r.tag === "Just") {
          if (r._1.cGroup.tag === "Just")
            return Rc(e.id)(r._1.cGroup._1)(e.graph);
          if (r._1.cGroup.tag === "Nothing")
            return e.graph;
          a();
        }
        if (r.tag === "Nothing")
          return e.graph;
        a();
      }
      return ms({ master: b("Just", e.id), nodes: [e.id] })(e.graph).graph;
    })(),
    edgeToCs: J((r) => (o) => Tt(G)(un)(o)([e.id])(r))(t.edgeToCs)(n.representedEdges)
  };
}, t1 = (t) => (n) => {
  const e = Qt(
    (r) => T,
    (r) => (o) => b("Just", { head: r, tail: o }),
    Lt(Ml)(t)
  );
  if (e.tag === "Nothing")
    return n;
  if (e.tag === "Just") {
    const r = J((o) => (i) => Ul(o.survivor)(i) ? { ...o, survivor: Xl(o.survivor)(i) } : { survivor: i, merged: [...o.merged, o.survivor] })({ survivor: e._1.head, merged: [] })(e._1.tail);
    return J(Zl)(n)([...r.merged, r.survivor]);
  }
  a();
}, n1 = (t) => ({
  cGraph: {
    cNodes: W,
    cNodeOrder: [],
    cGroups: W,
    cGroupOrder: [],
    supportedDirections: Kl([Pc, ps, Gl]),
    predefinedHorizontalConstraints: [],
    predefinedVerticalConstraints: [],
    nextCNodeId: 0,
    nextCGroupId: 0
  },
  nodeToC: W,
  edgeToCs: W
}), e1 = (t) => (n) => J((e) => (r) => {
  const o = Fc({
    origin: b("Just", Bc("NodeOrigin", r.node)),
    kind: T,
    hitbox: { x: r.position._1, y: r.position._2, width: r.size._1, height: r.size._2 }
  })(e.cGraph);
  return {
    ...e,
    cGraph: ms({ master: b("Just", o.id), nodes: [o.id] })(o.graph).graph,
    nodeToC: X(G)(r.node)(o.id)(e.nodeToC)
  };
})(n)(t), r1 = (t) => J((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? X(G)(e.origin._1._1)(e.hitbox.x)(n) : n)(W)(yt((n) => Kt(n)(t.cNodes))(t.cNodeOrder)), o1 = (t) => J((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? X(G)(e.origin._1._1)(e.hitbox.x - e.hitboxPreCompaction.x)(n) : n)(W)(yt((n) => Kt(n)(t.cNodes))(t.cNodeOrder)), i1 = (t) => J((n) => (e) => {
  if (e.origin.tag === "Just" && e.origin._1.tag === "SegmentOrigin") {
    const r = e.hitbox.x - e.hitboxPreCompaction.x;
    return J((o) => (i) => X(G)(i)(r)(o))(n)(e.origin._1._1.representedEdges);
  }
  return n;
})(W)(yt((n) => Kt(n)(t.cNodes))(t.cNodeOrder)), Dc = (t) => {
  const n = Qc(z((e) => E(e.id, e))(t.edges));
  return yt((e) => {
    const r = mi(e.edge)(n);
    if (r.tag === "Just")
      return b(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.from.node,
          tgt: r._1.to.node,
          srcSide: Ks(t.ports)(r._1.from.node)(r._1.from.port),
          tgtSide: Ks(t.ports)(r._1.to.node)(r._1.to.port),
          path: e
        }
      );
    if (r.tag === "Nothing")
      return T;
    a();
  })(t.paths);
}, s1 = (t) => (n) => {
  const e = yt((r) => {
    if ((r.srcSide === "North" || r.srcSide === "South") && (r.tgtSide === "North" || r.tgtSide === "South"))
      return T;
    const o = ie(r.src)(t.nodeToC);
    if (o.tag === "Just") {
      const i = ie(r.tgt)(t.nodeToC);
      if (i.tag === "Just") {
        const s = Kt(o._1)(t.cGraph.cNodes);
        if (s.tag === "Just") {
          const u = Kt(i._1)(t.cGraph.cNodes);
          if (u.tag === "Just") {
            if (s._1.cGroup.tag === "Just") {
              if (u._1.cGroup.tag === "Just")
                return b("Just", { srcGroup: s._1.cGroup._1, tgtGroup: u._1.cGroup._1, delta: 0, weight: 100 });
              if (u._1.cGroup.tag === "Nothing")
                return T;
              a();
            }
            if (s._1.cGroup.tag === "Nothing")
              return T;
            a();
          }
          if (u.tag === "Nothing")
            return T;
          a();
        }
        if (s.tag === "Nothing")
          return T;
        a();
      }
      if (i.tag === "Nothing")
        return T;
      a();
    }
    if (o.tag === "Nothing")
      return T;
    a();
  })(n);
  return {
    sameEdgeVerticalSegments: (r) => (o) => r.origin.tag === "Just" && r.origin._1.tag === "SegmentOrigin" && o.origin.tag === "Just" && o.origin._1.tag === "SegmentOrigin" && (() => {
      const i = o.origin._1._1;
      return ae((s) => Gn(Xn)(s)(i.representedEdges), r.origin._1._1.representedEdges);
    })(),
    vsLNodePair: (r) => (o) => r.origin.tag === "Just" && o.origin.tag === "Just" && (r.origin._1.tag === "SegmentOrigin" ? o.origin._1.tag === "NodeOrigin" : r.origin._1.tag === "NodeOrigin" && o.origin._1.tag === "SegmentOrigin"),
    edgeLengthEdges: (r) => e
  };
}, u1 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = i._1 === 0, u = Yl(o.nextId)(i._2.start)(i._2.end)(s && (t.srcSide === "North" || t.srcSide === "South") ? ie(t.src)(W) : T)(t.edgeId), c = (() => {
    if (s) {
      if (t.srcSide === "North")
        return { ...u, aPort: b("Just", { node: t.src, side: cn }) };
      if (t.srcSide === "South")
        return { ...u, aPort: b("Just", { node: t.src, side: an }) };
      if (n.tag === "Nothing")
        return u;
      if (n.tag === "Just")
        return u.hitbox.y >= n._1.y && u.hitbox.y + u.hitbox.height <= n._1.y + n._1.height ? { ...u, ignoreSpacing: { ...u.ignoreSpacing, up: !0, down: !0 } } : u;
      a();
    }
    return u;
  })();
  return {
    nextId: o.nextId + 1 | 0,
    segments: [
      ...o.segments,
      (() => {
        if (i._1 === r) {
          if (e.tag === "Nothing")
            return c;
          if (e.tag === "Just")
            return c.hitbox.y >= e._1.y && c.hitbox.y + c.hitbox.height <= e._1.y + e._1.height ? { ...c, ignoreSpacing: { ...c.ignoreSpacing, up: !0, down: !0 } } : c;
          a();
        }
        return c;
      })()
    ]
  };
}, c1 = (t) => (n) => (e) => {
  const r = jl(e.path);
  return J(u1(e)((() => {
    const o = ie(e.src)(t.nodeToC);
    if (o.tag === "Just") {
      const i = Kt(o._1)(t.cGraph.cNodes);
      return i.tag === "Just" ? b("Just", i._1.hitbox) : T;
    }
    if (o.tag === "Nothing")
      return T;
    a();
  })())((() => {
    const o = ie(e.tgt)(t.nodeToC);
    if (o.tag === "Just") {
      const i = Kt(o._1)(t.cGraph.cNodes);
      return i.tag === "Just" ? b("Just", i._1.hitbox) : T;
    }
    if (o.tag === "Nothing")
      return T;
    a();
  })())(r.length - 1 | 0))(n)(At((o) => (i) => E(o, i))(r));
}, a1 = (t) => (n) => t1(J(c1(n))({ nextId: 0, segments: [] })(t).segments)(n), f1 = (t) => a1(Dc(t))(e1(t.nodes)(n1())), g1 = (t) => (n) => {
  const e = r1(t), r = o1(t), o = Qc(z((s) => E(s.id, E(s.from.node, s.to.node)))(n.edges)), i = i1(t);
  return {
    nodes: z((s) => {
      const u = ie(s.node)(e);
      if (u.tag === "Just")
        return { ...s, position: E(u._1, s.position._2) };
      if (u.tag === "Nothing")
        return s;
      a();
    })(n.nodes),
    edges: z((s) => ({
      ...s,
      bends: (() => {
        const u = s.edge;
        return z((c) => {
          const f = mi(u)(i);
          if (f.tag === "Just")
            return E(c._1 + f._1, c._2);
          if (f.tag === "Nothing")
            return c;
          a();
        })(s.bends);
      })(),
      segments: (() => {
        const u = mi(s.edge)(o);
        if (u.tag === "Nothing")
          return s.segments;
        if (u.tag === "Just") {
          const c = ie(u._1._1)(r), f = (() => {
            if (c.tag === "Nothing")
              return 0;
            if (c.tag === "Just")
              return c._1;
            a();
          })() * at(4), g = ie(u._1._2)(r), l = (() => {
            if (g.tag === "Nothing")
              return 0;
            if (g.tag === "Just")
              return g._1;
            a();
          })() * at(4), d = Qt((_) => T, (_) => (h) => b("Just", { head: _, tail: h }), s.segments);
          if (d.tag === "Nothing")
            return s.segments;
          if (d.tag === "Just") {
            const _ = { ...d._1.head, start: E(d._1.head.start._1 + f, d._1.head.start._2) }, h = Yu(d._1.tail);
            if (h.tag === "Nothing")
              return [{ ..._, end: E(_.end._1 + l, _.end._2) }];
            if (h.tag === "Just")
              return [_, ...sn(h._1.init)({ ...h._1.last, end: E(h._1.last.end._1 + l, h._1.last.end._2) })];
          }
        }
        a();
      })()
    }))(n.paths)
  };
}, se = (t) => (e) => {
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
}, Ni = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, Ji = (t) => (e) => {
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
    a();
  }
  return i;
}, _1 = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, l1 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => {
    const o = (u) => {
      let c = u, f = !0, g;
      for (; f; ) {
        const l = c, d = Qt((_) => T, (_) => (h) => b("Just", { head: _, tail: h }), l.queue);
        if (d.tag === "Nothing") {
          f = !1, g = l;
          continue;
        }
        if (d.tag === "Just") {
          const _ = d._1.head;
          if ((($) => {
            let m = $, N = !0, v;
            for (; N; ) {
              const y = m;
              if (y.tag === "Leaf") {
                N = !1, v = !1;
                continue;
              }
              if (y.tag === "Node") {
                const w = t.compare(_)(y._3);
                if (w === "LT") {
                  m = y._5;
                  continue;
                }
                if (w === "GT") {
                  m = y._6;
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
          const h = gn((p) => !se(p.eid)(l.removedEdges) && (n.eq(p.src)(_) || n.eq(p.tgt)(_)))(r);
          if (h.tag === "Nothing") {
            c = { ...l, queue: d._1.tail };
            continue;
          }
          if (h.tag === "Just") {
            const p = n.eq(h._1.src)(_) ? h._1.tgt : h._1.src, $ = {
              ...l,
              degree: X(t)(p)((() => {
                const N = ((v) => {
                  let y = v, w = !0, L;
                  for (; w; ) {
                    const k = y;
                    if (k.tag === "Leaf") {
                      w = !1, L = T;
                      continue;
                    }
                    if (k.tag === "Node") {
                      const A = t.compare(p)(k._3);
                      if (A === "LT") {
                        y = k._5;
                        continue;
                      }
                      if (A === "GT") {
                        y = k._6;
                        continue;
                      }
                      if (A === "EQ") {
                        w = !1, L = b("Just", k._4);
                        continue;
                      }
                    }
                    a();
                  }
                  return L;
                })(l.degree);
                if (N.tag === "Nothing")
                  return -1;
                if (N.tag === "Just")
                  return N._1 - 1 | 0;
                a();
              })())(l.degree),
              removedNodes: X(t)(_)()(l.removedNodes),
              removedEdges: X(rt)(h._1.eid)()(l.removedEdges),
              record: [...l.record, { node: _, neighbour: p, viaSrc: n.eq(h._1.src)(_) }],
              queue: d._1.tail
            };
            if ((() => {
              const N = ((y) => {
                let w = y, L = !0, k;
                for (; L; ) {
                  const A = w;
                  if (A.tag === "Leaf") {
                    L = !1, k = T;
                    continue;
                  }
                  if (A.tag === "Node") {
                    const H = t.compare(p)(A._3);
                    if (H === "LT") {
                      w = A._5;
                      continue;
                    }
                    if (H === "GT") {
                      w = A._6;
                      continue;
                    }
                    if (H === "EQ") {
                      L = !1, k = b("Just", A._4);
                      continue;
                    }
                  }
                  a();
                }
                return k;
              })($.degree), v = (y) => {
                let w = y, L = !0, k;
                for (; L; ) {
                  const A = w;
                  if (A.tag === "Leaf") {
                    L = !1, k = !1;
                    continue;
                  }
                  if (A.tag === "Node") {
                    const H = t.compare(p)(A._3);
                    if (H === "LT") {
                      w = A._5;
                      continue;
                    }
                    if (H === "GT") {
                      w = A._6;
                      continue;
                    }
                    if (H === "EQ") {
                      L = !1, k = !0;
                      continue;
                    }
                  }
                  a();
                }
                return k;
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
    }, i = J((u) => (c) => Tt(t)(jt)(c.src)(1)(Tt(t)(jt)(c.tgt)(1)(u)))(W)(r), s = o({
      degree: i,
      removedNodes: W,
      removedEdges: W,
      record: [],
      queue: gt(
        (u) => {
          const f = ((g) => {
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
      coreEdges: gt((u) => !se(u.eid)(s.removedEdges), r),
      removed: s.record
    };
  };
}, d1 = (t) => (n) => (e) => J((r) => (o) => {
  const i = o.neighbour, s = (() => {
    const u = ((f) => {
      let g = f, l = !0, d;
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
  return X(t)(o.node)(o.viaSrc ? s - 1 | 0 : s + 1 | 0)(r);
})(e)($n(n)), vi = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = { ...o, treeNode: X(t)(r)()(o.treeNode) };
    return J((s) => (u) => {
      if (se(u.eid)(s.st.edgeVisited))
        return s;
      const c = { ...s.st, edgeVisited: X(rt)(u.eid)()(s.st.edgeVisited) }, f = n.eq(u.src)((() => {
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
      if (se(u.eid)(c.treeEdge)) {
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
        const g = vi(t)(e)(f)(c);
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
            let N = m, v = !0, y;
            for (; v; ) {
              const w = N;
              if (w.tag === "Leaf") {
                v = !1, y = T;
                continue;
              }
              if (w.tag === "Node") {
                const L = t.compare(l)(w._3);
                if (L === "LT") {
                  N = w._5;
                  continue;
                }
                if (L === "GT") {
                  N = w._6;
                  continue;
                }
                if (L === "EQ") {
                  v = !1, y = b("Just", w._4);
                  continue;
                }
              }
              a();
            }
            return y;
          })(c.layer), h = u.src, $ = ((m) => {
            let N = m, v = !0, y;
            for (; v; ) {
              const w = N;
              if (w.tag === "Leaf") {
                v = !1, y = T;
                continue;
              }
              if (w.tag === "Node") {
                const L = t.compare(h)(w._3);
                if (L === "LT") {
                  N = w._5;
                  continue;
                }
                if (L === "GT") {
                  N = w._6;
                  continue;
                }
                if (L === "EQ") {
                  v = !1, y = b("Just", w._4);
                  continue;
                }
              }
              a();
            }
            return y;
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
        const g = vi(t)(e)(f)({ ...c, treeEdge: X(rt)(u.eid)()(c.treeEdge) });
        return { count: s.count + g.count | 0, st: g.st };
      }
      return { ...s, st: c };
    })({ count: 1, st: i })(gt((s) => (n.eq(s.src)(r) || n.eq(s.tgt)(r)) && !se(s.eid)(i.edgeVisited), e));
  };
}, ho = (t) => (n) => (e) => (r) => {
  const o = r.src, s = ((p) => {
    let $ = p, m = !0, N;
    for (; m; ) {
      const v = $;
      if (v.tag === "Leaf") {
        m = !1, N = T;
        continue;
      }
      if (v.tag === "Node") {
        const y = t.compare(o)(v._3);
        if (y === "LT") {
          $ = v._5;
          continue;
        }
        if (y === "GT") {
          $ = v._6;
          continue;
        }
        if (y === "EQ") {
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
        m = !1, N = T;
        continue;
      }
      if (v.tag === "Node") {
        const y = t.compare(c)(v._3);
        if (y === "LT") {
          $ = v._5;
          continue;
        }
        if (y === "GT") {
          $ = v._6;
          continue;
        }
        if (y === "EQ") {
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
        m = !1, N = T;
        continue;
      }
      if (v.tag === "Node") {
        const y = t.compare(e)(v._3);
        if (y === "LT") {
          $ = v._5;
          continue;
        }
        if (y === "GT") {
          $ = v._6;
          continue;
        }
        if (y === "EQ") {
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
      let v = N, y = !0, w;
      for (; y; ) {
        const L = v;
        if (L.tag === "Leaf") {
          y = !1, w = T;
          continue;
        }
        if (L.tag === "Node") {
          const k = t.compare(p)(L._3);
          if (k === "LT") {
            v = L._5;
            continue;
          }
          if (k === "GT") {
            v = L._6;
            continue;
          }
          if (k === "EQ") {
            y = !1, w = b("Just", L._4);
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
        const y = ((w) => {
          let L = w, k = !0, A;
          for (; k; ) {
            const H = L;
            if (H.tag === "Leaf") {
              k = !1, A = T;
              continue;
            }
            if (H.tag === "Node") {
              const V = t.compare(N)(H._3);
              if (V === "LT") {
                L = H._5;
                continue;
              }
              if (V === "GT") {
                L = H._6;
                continue;
              }
              if (V === "EQ") {
                k = !1, A = b("Just", H._4);
                continue;
              }
            }
            a();
          }
          return A;
        })(n.lowestPoID);
        return (() => {
          if (y.tag === "Nothing")
            return 0 <= h;
          if (y.tag === "Just")
            return y._1 <= h;
          a();
        })() && h <= l;
      })();
    })();
  })() ? u >= l : u < l;
}, h1 = (t) => {
  const n = Mt(t)(Ft);
  return (e) => ({
    layer: n(z((r) => E(r, 0))(e)),
    treeNode: W,
    treeEdge: W,
    poID: W,
    lowestPoID: W,
    cutvalue: W,
    postOrder: 1,
    edgeVisited: W
  });
}, p1 = (t) => (n) => (e) => J((r) => (o) => {
  if ((() => {
    const d = o.src, _ = ($) => {
      let m = $, N = !0, v;
      for (; N; ) {
        const y = m;
        if (y.tag === "Leaf") {
          N = !1, v = !1;
          continue;
        }
        if (y.tag === "Node") {
          const w = t.compare(d)(y._3);
          if (w === "LT") {
            m = y._5;
            continue;
          }
          if (w === "GT") {
            m = y._6;
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
        const y = m;
        if (y.tag === "Leaf") {
          N = !1, v = !1;
          continue;
        }
        if (y.tag === "Node") {
          const w = t.compare(h)(y._3);
          if (w === "LT") {
            m = y._5;
            continue;
          }
          if (w === "GT") {
            m = y._6;
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
      a();
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
})({ edge: T, slack: 1e9 })(n).edge, $1 = (t) => {
  const n = Mt(t)(Ft);
  return (e) => (r) => {
    const o = J((i) => (s) => Ni(i)((() => {
      const c = ((f) => {
        let g = f, l = !0, d;
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
    return n(z((i) => E(
      i,
      (() => {
        const u = ((c) => {
          let f = c, g = !0, l;
          for (; g; ) {
            const d = f;
            if (d.tag === "Leaf") {
              g = !1, l = T;
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
}, Wc = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = J((u) => (c) => {
      const f = Wc(t)(e)(n.eq(c.src)(r) ? c.tgt : c.src)({ ...u.st, edgeVisited: X(rt)(c.eid)()(u.st.edgeVisited) });
      return { lowest: Ni(u.lowest)(f.lowest), st: f.st };
    })({ lowest: 1e9, st: o })(gt(
      (u) => se(u.eid)(o.treeEdge) && (n.eq(u.src)(r) || n.eq(u.tgt)(r)) && !se(u.eid)(o.edgeVisited),
      e
    )), s = Ni(i.lowest)(i.st.postOrder);
    return {
      lowest: s,
      st: {
        ...i.st,
        poID: X(t)(r)(i.st.postOrder)(i.st.poID),
        lowestPoID: X(t)(r)(s)(i.st.lowestPoID),
        postOrder: i.st.postOrder + 1 | 0
      }
    };
  };
}, qc = (t) => {
  const n = Wc(t);
  return (e) => (r) => (o) => 0 < e.length ? n(r)(e[0])({ ...o, edgeVisited: W, postOrder: 1, poID: W, lowestPoID: W }).st : o;
}, m1 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => gt((i) => se(i.eid)(r.treeEdge) && (n.eq(i.src)(o) || n.eq(i.tgt)(o)), e);
}, N1 = (t) => (n) => gn((e) => {
  const r = Ji(e.eid)(n.cutvalue);
  return se(e.eid)(n.treeEdge) && (() => {
    if (r.tag === "Nothing")
      return !1;
    if (r.tag === "Just")
      return r._1 < -1e-10;
    a();
  })();
})(t), Hc = (t) => {
  const n = vi(t);
  return (e) => (r) => (o) => {
    const i = 0 < e.length ? b("Just", e[0]) : T;
    if (i.tag === "Nothing")
      return o;
    if (i.tag === "Just") {
      const s = n(r)(i._1)({ ...o, edgeVisited: W, treeNode: W, treeEdge: W });
      if (s.count >= e.length)
        return s.st;
      const u = p1(t)(r)(s.st);
      if (u.tag === "Nothing")
        return s.st;
      if (u.tag === "Just") {
        const c = u._1.tgt, g = (($) => {
          let m = $, N = !0, v;
          for (; N; ) {
            const y = m;
            if (y.tag === "Leaf") {
              N = !1, v = T;
              continue;
            }
            if (y.tag === "Node") {
              const w = t.compare(c)(y._3);
              if (w === "LT") {
                m = y._5;
                continue;
              }
              if (w === "GT") {
                m = y._6;
                continue;
              }
              if (w === "EQ") {
                N = !1, v = b("Just", y._4);
                continue;
              }
            }
            a();
          }
          return v;
        })(s.st.layer), l = u._1.src, _ = (($) => {
          let m = $, N = !0, v;
          for (; N; ) {
            const y = m;
            if (y.tag === "Leaf") {
              N = !1, v = T;
              continue;
            }
            if (y.tag === "Node") {
              const w = t.compare(l)(y._3);
              if (w === "LT") {
                m = y._5;
                continue;
              }
              if (w === "GT") {
                m = y._6;
                continue;
              }
              if (w === "EQ") {
                N = !1, v = b("Just", y._4);
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
            let v = N, y = !0, w;
            for (; y; ) {
              const L = v;
              if (L.tag === "Leaf") {
                y = !1, w = !1;
                continue;
              }
              if (L.tag === "Node") {
                const k = t.compare($)(L._3);
                if (k === "LT") {
                  v = L._5;
                  continue;
                }
                if (k === "GT") {
                  v = L._6;
                  continue;
                }
                if (k === "EQ") {
                  y = !1, w = !0;
                  continue;
                }
              }
              a();
            }
            return w;
          })(s.st.treeNode);
        })() ? -h : h;
        return Hc(t)(e)(r)({
          ...s.st,
          layer: J(($) => (m) => ((v) => {
            let y = v, w = !0, L;
            for (; w; ) {
              const k = y;
              if (k.tag === "Leaf") {
                w = !1, L = !1;
                continue;
              }
              if (k.tag === "Node") {
                const A = t.compare(m)(k._3);
                if (A === "LT") {
                  y = k._5;
                  continue;
                }
                if (A === "GT") {
                  y = k._6;
                  continue;
                }
                if (A === "EQ") {
                  w = !1, L = !0;
                  continue;
                }
              }
              a();
            }
            return L;
          })(s.st.treeNode) ? X(t)(m)((() => {
            const v = ((y) => {
              let w = y, L = !0, k;
              for (; L; ) {
                const A = w;
                if (A.tag === "Leaf") {
                  L = !1, k = T;
                  continue;
                }
                if (A.tag === "Node") {
                  const H = t.compare(m)(A._3);
                  if (H === "LT") {
                    w = A._5;
                    continue;
                  }
                  if (H === "GT") {
                    w = A._6;
                    continue;
                  }
                  if (H === "EQ") {
                    L = !1, k = b("Just", A._4);
                    continue;
                  }
                }
                a();
              }
              return k;
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
}, J1 = (t) => (n) => (e) => (r) => J((o) => (i) => {
  if (ho(t)(r)(i.src)(e) && !ho(t)(r)(i.tgt)(e)) {
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
        a();
      }
      return $;
    })(r.layer), f = i.src, l = ((_) => {
      let h = _, p = !0, $;
      for (; p; ) {
        const m = h;
        if (m.tag === "Leaf") {
          p = !1, $ = T;
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
})({ edge: T, slack: 1e9 })(n).edge, v1 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => (i) => {
    const s = i.tgt, u = i.src;
    return J((c) => (f) => {
      if ((() => {
        const g = Ji(f.eid)(r.cutvalue);
        if (g.tag === "Just")
          return !0;
        if (g.tag === "Nothing")
          return !1;
        a();
      })()) {
        const g = Ji(f.eid)(r.cutvalue), l = (() => {
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
}, y1 = (t) => {
  const n = v1(t);
  return (e) => (r) => (o) => {
    const i = (u, c, f) => {
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
          a();
        }
        return p;
      })(f);
      if (l.tag === "Just")
        return X(t)(u)(gt((d) => d.eid !== c.eid, l._1))(f);
      if (l.tag === "Nothing")
        return f;
      a();
    };
    return ((u) => (c) => {
      let f = u, g = c, l = !0, d;
      for (; l; ) {
        const _ = f, h = g, $ = ((N) => {
          let v = N, y = !0, w;
          for (; y; ) {
            const L = v;
            if (L.tag === "Leaf") {
              y = !1, w = T;
              continue;
            }
            if (L.tag === "Node") {
              const k = t.compare(h)(L._3);
              if (k === "LT") {
                v = L._5;
                continue;
              }
              if (k === "GT") {
                v = L._6;
                continue;
              }
              if (k === "EQ") {
                y = !1, w = b("Just", L._4);
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
            cutvalue: X(rt)(m[0].eid)(n(e)(_)(h)(m[0]))(_.cutvalue)
          }, g = N;
          continue;
        }
        l = !1, d = _;
      }
      return d;
    })(r)(o);
  };
}, zc = (t) => {
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
      return p === "LT" || p === "GT" || p !== "EQ" ? p : kn;
    },
    Eq0: () => r
  }, i = J((f) => (g) => X(o)(g)()(f))(W), s = m1(t), u = Mt(t)(Ft), c = y1(t);
  return (f) => (g) => (l) => {
    const d = {
      unknown: u(z((_) => E(
        _,
        bt(Pn.foldr, i(s(g)(l)(_)))
      ))(f)),
      cutvalue: W
    };
    return {
      ...l,
      cutvalue: J(c(g))(d)(gt(
        (_) => {
          const p = (($) => {
            let m = $, N = !0, v;
            for (; N; ) {
              const y = m;
              if (y.tag === "Leaf") {
                N = !1, v = T;
                continue;
              }
              if (y.tag === "Node") {
                const w = t.compare(_)(y._3);
                if (w === "LT") {
                  m = y._5;
                  continue;
                }
                if (w === "GT") {
                  m = y._6;
                  continue;
                }
                if (w === "EQ") {
                  N = !1, v = b("Just", y._4);
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
}, T1 = (t) => {
  const n = qc(t), e = zc(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const c = { ...u, treeEdge: X(rt)(s.eid)()(wr(rt)(i.eid)(u.treeEdge)) }, f = s.tgt, l = ((m) => {
      let N = m, v = !0, y;
      for (; v; ) {
        const w = N;
        if (w.tag === "Leaf") {
          v = !1, y = T;
          continue;
        }
        if (w.tag === "Node") {
          const L = t.compare(f)(w._3);
          if (L === "LT") {
            N = w._5;
            continue;
          }
          if (L === "GT") {
            N = w._6;
            continue;
          }
          if (L === "EQ") {
            v = !1, y = b("Just", w._4);
            continue;
          }
        }
        a();
      }
      return y;
    })(c.layer), d = s.src, h = ((m) => {
      let N = m, v = !0, y;
      for (; v; ) {
        const w = N;
        if (w.tag === "Leaf") {
          v = !1, y = T;
          continue;
        }
        if (w.tag === "Node") {
          const L = t.compare(d)(w._3);
          if (L === "LT") {
            N = w._5;
            continue;
          }
          if (L === "GT") {
            N = w._6;
            continue;
          }
          if (L === "EQ") {
            v = !1, y = b("Just", w._4);
            continue;
          }
        }
        a();
      }
      return y;
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
    })(), $ = ho(t)(c)(s.tgt)(i) ? -p : p;
    return e(r)(o)(n(r)(o)({
      ...c,
      layer: J((m) => (N) => ho(t)(c)(N)(i) ? m : X(t)(N)((() => {
        const y = ((w) => {
          let L = w, k = !0, A;
          for (; k; ) {
            const H = L;
            if (H.tag === "Leaf") {
              k = !1, A = T;
              continue;
            }
            if (H.tag === "Node") {
              const V = t.compare(N)(H._3);
              if (V === "LT") {
                L = H._5;
                continue;
              }
              if (V === "GT") {
                L = H._6;
                continue;
              }
              if (V === "EQ") {
                k = !1, A = b("Just", H._4);
                continue;
              }
            }
            a();
          }
          return A;
        })(c.layer);
        if (y.tag === "Nothing")
          return 0 + $ | 0;
        if (y.tag === "Just")
          return y._1 + $ | 0;
        a();
      })())(m))(c.layer)(r)
    }));
  };
}, w1 = (t) => {
  const n = T1(t);
  return (e) => (r) => (o) => (i) => ((u) => (c) => {
    let f = u, g = c, l = !0, d;
    for (; l; ) {
      const _ = f, h = g;
      if (_ === 0) {
        l = !1, d = h;
        continue;
      }
      const p = N1(o)(h);
      if (p.tag === "Nothing") {
        l = !1, d = h;
        continue;
      }
      if (p.tag === "Just") {
        const $ = J1(t)(o)(p._1)(h);
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
}, L1 = (t) => {
  const n = zc(t), e = qc(t), r = Hc(t);
  return (o) => (i) => (s) => n(o)(i)(e(o)(i)(r(o)(i)(s)));
}, js = (t) => (n) => J((e) => (r) => Tt(t)(un)(n(r))([r])(e))(W), E1 = (t) => {
  const n = Mt(t)(Ft);
  return (e) => (r) => (o) => {
    const i = (c) => (f) => (g) => (l) => {
      let d = c, _ = f, h = g, p = l, $ = !0, m;
      for (; $; ) {
        const N = d, v = _, y = h, w = p, L = Qt((k) => T, (k) => (A) => b("Just", { head: k, tail: A }), y);
        if (L.tag === "Nothing") {
          $ = !1, m = w;
          continue;
        }
        if (L.tag === "Just") {
          const k = L._1.head, H = ((P) => {
            let R = P, j = !0, et;
            for (; j; ) {
              const Y = R;
              if (Y.tag === "Leaf") {
                j = !1, et = T;
                continue;
              }
              if (Y.tag === "Node") {
                const I = t.compare(k)(Y._3);
                if (I === "LT") {
                  R = Y._5;
                  continue;
                }
                if (I === "GT") {
                  R = Y._6;
                  continue;
                }
                if (I === "EQ") {
                  j = !1, et = b("Just", Y._4);
                  continue;
                }
              }
              a();
            }
            return et;
          })(w.layer), V = (() => {
            if (H.tag === "Nothing")
              return 0;
            if (H.tag === "Just")
              return H._1;
            a();
          })(), M = J((P) => (R) => {
            const j = R.tgt, Y = ((x) => {
              let C = x, D = !0, S;
              for (; D; ) {
                const F = C;
                if (F.tag === "Leaf") {
                  D = !1, S = T;
                  continue;
                }
                if (F.tag === "Node") {
                  const Q = t.compare(j)(F._3);
                  if (Q === "LT") {
                    C = F._5;
                    continue;
                  }
                  if (Q === "GT") {
                    C = F._6;
                    continue;
                  }
                  if (Q === "EQ") {
                    D = !1, S = b("Just", F._4);
                    continue;
                  }
                }
                a();
              }
              return S;
            })(P.incident), I = (() => {
              if (Y.tag === "Nothing")
                return -1;
              if (Y.tag === "Just")
                return Y._1 - 1 | 0;
              a();
            })();
            return {
              st: {
                ...P.st,
                layer: X(t)(R.tgt)(_1((() => {
                  const x = R.tgt, D = ((S) => {
                    let F = S, Q = !0, K;
                    for (; Q; ) {
                      const O = F;
                      if (O.tag === "Leaf") {
                        Q = !1, K = T;
                        continue;
                      }
                      if (O.tag === "Node") {
                        const B = t.compare(x)(O._3);
                        if (B === "LT") {
                          F = O._5;
                          continue;
                        }
                        if (B === "GT") {
                          F = O._6;
                          continue;
                        }
                        if (B === "EQ") {
                          Q = !1, K = b("Just", O._4);
                          continue;
                        }
                      }
                      a();
                    }
                    return K;
                  })(P.st.layer);
                  if (D.tag === "Nothing")
                    return 0;
                  if (D.tag === "Just")
                    return D._1;
                  a();
                })())(V + R.delta | 0))(P.st.layer)
              },
              incident: X(t)(R.tgt)(I)(P.incident),
              queue: I === 0 ? [...P.queue, R.tgt] : P.queue
            };
          })({ st: w, incident: v, queue: L._1.tail })((() => {
            const R = ((j) => {
              let et = j, Y = !0, I;
              for (; Y; ) {
                const x = et;
                if (x.tag === "Leaf") {
                  Y = !1, I = T;
                  continue;
                }
                if (x.tag === "Node") {
                  const C = t.compare(k)(x._3);
                  if (C === "LT") {
                    et = x._5;
                    continue;
                  }
                  if (C === "GT") {
                    et = x._6;
                    continue;
                  }
                  if (C === "EQ") {
                    Y = !1, I = b("Just", x._4);
                    continue;
                  }
                }
                a();
              }
              return I;
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
    }, s = js(t)((c) => c.tgt)(r), u = n(z((c) => E(
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
    return i(js(t)((c) => c.src)(r))(u)(gt(
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
}, b1 = (t) => {
  const n = h1(t), e = E1(t), r = L1(t), o = w1(t);
  return (i) => (s) => {
    const u = e(i)(s)(n(i));
    return s.length === 0 ? u.layer : o(4 * i.length | 0)(i)(s)(r(i)(s)(u)).layer;
  };
}, Oc = (t) => {
  const n = $1(t), e = b1(t), r = l1(t);
  return (o) => (i) => {
    if (o.length === 0)
      return W;
    if (o.length < 40)
      return n(o)(e(o)(i));
    const s = r(o)(i);
    return n(o)(d1(t)(s.removed)(e(s.coreNodes)(s.coreEdges)));
  };
}, Vc = (t) => (e) => {
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
    a();
  }
  return i;
}, yi = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, k1 = /* @__PURE__ */ Oc(rt), Cr = (t) => (n) => ({ ...n, edges: [...n.edges, { src: t.src, tgt: t.tgt, delta: t.delta, weight: t.weight, eid: n.nextEid }], nextEid: n.nextEid + 1 | 0 }), x1 = (t) => (n) => (e) => {
  if (e.cGroup.tag === "Nothing")
    return n;
  if (e.cGroup.tag === "Just") {
    const r = at((() => {
      const o = Vc(e.cGroup._1)(t);
      if (o.tag === "Nothing")
        return 0;
      if (o.tag === "Just")
        return o._1;
      a();
    })());
    return Un(e.id)((o) => ({ ...o, hitbox: { ...o.hitbox, x: r + o.cGroupOffset.x } }))(n);
  }
  a();
}, C1 = (t) => (n) => ({
  ...n,
  cGraph: J(x1(t))(n.cGraph)((() => {
    const e = n.cGraph;
    return yt((r) => Kt(r)(e.cNodes))(e.cNodeOrder);
  })())
}), S1 = (t) => (n) => (e) => (r) => (o) => {
  const i = ur(Bi(n.cGroupOffset.x - t.cGroupOffset.x));
  return Cr({ src: o.nextNodeId, tgt: r, delta: yi(0)(-i), weight: 1 })(Cr({ src: o.nextNodeId, tgt: e, delta: yi(0)(i), weight: 1 })({
    ...o,
    nodes: [...o.nodes, o.nextNodeId],
    nextNodeId: o.nextNodeId + 1 | 0
  }));
}, G1 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = yi(0)(ur(Bi(e.cGroupOffset.x + e.hitbox.width + (n.direction === "LEFT" || n.direction === "RIGHT" ? n.spacingsHandler.horizontalSpacing(e)(r) : n.spacingsHandler.verticalSpacing(e)(r)) - r.cGroupOffset.x)));
  return t.sameEdgeVerticalSegments(e)(r) ? S1(e)(r)(o)(i)(s) : Cr({ src: o, tgt: i, delta: u, weight: t.vsLNodePair(e)(r) ? 2 : 1 })(s);
}, P1 = (t) => (n) => (e) => (r) => (o) => {
  const i = Kt(o)(n.cGraph.cNodes);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just")
    return (e.cGroup.tag === "Nothing" ? i._1.cGroup.tag === "Nothing" : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" && e.cGroup._1 === i._1.cGroup._1) ? r : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" ? G1(t)(n)(e)(i._1)(e.cGroup._1)(i._1.cGroup._1)(r) : r;
  a();
}, A1 = (t) => (n) => (e) => (r) => J(P1(t)(n)(r))(e)(r.constraints), I1 = (t) => (n) => Cr({ src: n.srcGroup, tgt: n.tgtGroup, delta: n.delta, weight: n.weight })(t), R1 = (t) => {
  const n = J((o) => (i) => Tt(rt)(jt)(i.tgt)(1)(o))(W)(t.edges), e = gt(
    (o) => {
      const i = Vc(o)(n);
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
  return J((o) => (i) => Cr({ src: r, tgt: i, delta: 1, weight: 0 })(o))({ ...t, nodes: [...t.nodes, r], nextNodeId: r + 1 | 0 })(e);
}, F1 = (t) => (n) => {
  const e = R1(J(I1)(J(A1(t)(n))({
    nodes: n.cGraph.cGroupOrder,
    edges: [],
    nextNodeId: n.cGraph.nextCGroupId,
    nextEid: 0
  })((() => {
    const r = n.cGraph;
    return yt((o) => Kt(o)(r.cNodes))(r.cNodeOrder);
  })()))(t.edgeLengthEdges(n.cGraph)));
  return { nodes: e.nodes, edges: e.edges };
}, B1 = (t) => (n) => {
  const e = F1(t)(n);
  return C1(k1(e.nodes)(e.edges))(n);
}, Q1 = (t) => (n) => (e) => (r) => n.id === r.id || n.cGroup.tag === "Just" && r.cGroup.tag === "Just" && n.cGroup._1 === r.cGroup._1 || !(r.hitbox.x > n.hitbox.x || n.hitbox.x === r.hitbox.x && n.hitbox.width < r.hitbox.width) || (() => {
  const o = t.direction === "LEFT" || t.direction === "RIGHT" ? t.spacingsHandler.verticalSpacing(n)(r) : t.spacingsHandler.horizontalSpacing(n)(r);
  return !(r.hitbox.y + r.hitbox.height + o - n.hitbox.y > 1e-4 && n.hitbox.y + n.hitbox.height + o - r.hitbox.y > 1e-4);
})() ? e : Un(n.id)((o) => ({ ...o, constraints: [...o.constraints, r.id] }))(e), D1 = (t) => (n) => (e) => (r) => J(Q1(t)(r))(e)(n), W1 = (t) => {
  const n = J((r) => (o) => Un(o.id)((i) => ({ ...i, constraints: [] }))(r))(t.cGraph)((() => {
    const r = t.cGraph;
    return yt((o) => Kt(o)(r.cNodes))(r.cNodeOrder);
  })()), e = yt((r) => Kt(r)(n.cNodes))(n.cNodeOrder);
  return J(D1(t)(e))(n)(e);
}, Yc = (t) => t, Ht = /* @__PURE__ */ Yc("H"), zt = /* @__PURE__ */ Yc("V"), q1 = (t) => E(t._2, t._1), Xc = (t) => ({ ...t, position: E(t.position._2, t.position._1), size: E(t.size._2, t.size._1) }), H1 = (t) => ({
  start: E(t.start._2, t.start._1),
  end: E(t.end._2, t.end._1),
  direction: (() => {
    if (t.direction === "H")
      return zt;
    if (t.direction === "V")
      return Ht;
    a();
  })()
}), Uc = (t) => ({ ...t, segments: z(H1)(t.segments), bends: z(q1)(t.bends) }), z1 = (t) => ({ nodes: z(Xc)(t.nodes), edges: t.edges, paths: z(Uc)(t.paths), ports: t.ports }), O1 = { horizontalSpacing: (t) => (n) => 1, verticalSpacing: (t) => (n) => 1 }, V1 = (t) => (n) => B1(n), Y1 = (t) => (n) => {
  const e = z1(n), r = f1(e), o = g1(Ic(ps)(zl({
    ...Vl(r.cGraph),
    compactionAlgorithm: b(
      "Just",
      V1()(s1(r)(Dc(e)))
    ),
    constraintAlgorithm: b("Just", W1),
    spacingsHandler: O1
  })).cGraph)({ nodes: e.nodes, edges: e.edges, paths: e.paths });
  return { nodes: z(Xc)(o.nodes), edges: z(Uc)(o.edges) };
}, Mc = (t) => t, We = /* @__PURE__ */ Mt(rt)(Ft), wt = (t) => (e) => {
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
    a();
  }
  return i;
}, Zs = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, ct = (t) => (n) => {
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
}, ee = (t) => (e) => {
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
    a();
  }
  return i;
}, X1 = (t) => (n) => {
  const e = rt.compare(t._1)(n._1);
  return e === "LT" ? Nn : e === "GT" ? Jn : rt.compare(t._2)(n._2);
}, qe = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, U1 = /* @__PURE__ */ (() => {
  const t = qn.unfoldr(Ie);
  return (n) => t(Dn("IterNode", n, Ae));
})(), M1 = (t) => t, Ur = /* @__PURE__ */ Mc("Regular"), Mr = /* @__PURE__ */ Mc("Critical"), Kc = (t) => (n) => {
  const e = J((s) => (u) => X(G)(u.node)(u)(s))(W)(n), r = 1.25 * at(4), o = (s, u, c) => ((g) => (l) => (d) => {
    let _ = g, h = l, p = d, $ = !0, m;
    for (; $; ) {
      const N = _, v = h, y = p;
      if (y.critical) {
        $ = !1, m = y;
        continue;
      }
      const w = Qt((k) => T, (k) => (A) => b("Just", { head: k, tail: A }), N), L = Qt((k) => T, (k) => (A) => b("Just", { head: k, tail: A }), v);
      if (w.tag === "Just" && L.tag === "Just") {
        const k = w._1.head > L._1.head - s && w._1.head < L._1.head + s ? { ...y, critical: !0 } : w._1.head > L._1.head - r && w._1.head < L._1.head + r ? { ...y, conflicts: y.conflicts + 1 | 0 } : y;
        if (k.critical) {
          $ = !1, m = k;
          continue;
        }
        if (w._1.head <= L._1.head) {
          _ = w._1.tail, h = v, p = k;
          continue;
        }
        _ = N, h = L._1.tail, p = k;
        continue;
      }
      $ = !1, m = y;
    }
    return m;
  })(u)(c)({ conflicts: 0, critical: !1 }), i = (s, u, c) => {
    if (ft(J(ft)(-1e18)(u.incoming))(J(ft)(-1e18)(u.outgoing)) - ct(J(ct)(1e18)(u.incoming))(J(ct)(1e18)(u.outgoing)) < 1e-3 || ft(J(ft)(-1e18)(c.incoming))(J(ft)(-1e18)(c.outgoing)) - ct(J(ct)(1e18)(c.incoming))(J(ct)(1e18)(c.outgoing)) < 1e-3)
      return [];
    const f = o(s, u.outgoing, c.incoming), g = o(s, c.outgoing, u.incoming);
    if (f.critical || g.critical)
      return [...f.critical ? [{ src: c.id, tgt: u.id, weight: 1, kind: Mr }] : [], ...g.critical ? [{ src: u.id, tgt: c.id, weight: 1, kind: Mr }] : []];
    const l = ct(J(ct)(1e18)(u.incoming))(J(ct)(1e18)(u.outgoing)), d = ft(J(ft)(-1e18)(u.incoming))(J(ft)(-1e18)(u.outgoing)), _ = ct(J(ct)(1e18)(c.incoming))(J(ct)(1e18)(c.outgoing)), h = ft(J(ft)(-1e18)(c.incoming))(J(ft)(-1e18)(c.outgoing)), p = (1 * f.conflicts | 0) + (16 * (J((m) => (N) => N > h ? m : N >= _ ? m + 1 | 0 : m)(0)(u.outgoing) + J((m) => (N) => N > d ? m : N >= l ? m + 1 | 0 : m)(0)(c.incoming) | 0) | 0) | 0, $ = (1 * g.conflicts | 0) + (16 * (J((m) => (N) => N > d ? m : N >= l ? m + 1 | 0 : m)(0)(c.outgoing) + J((m) => (N) => N > h ? m : N >= _ ? m + 1 | 0 : m)(0)(u.incoming) | 0) | 0) | 0;
    return p < $ ? [{ src: u.id, tgt: c.id, weight: $ - p | 0, kind: Ur }] : p > $ ? [{ src: c.id, tgt: u.id, weight: p - $ | 0, kind: Ur }] : p > 0 ? [{ src: u.id, tgt: c.id, weight: 0, kind: Ur }, { src: c.id, tgt: u.id, weight: 0, kind: Ur }] : [];
  };
  return J((s) => (u) => J((c) => (f) => X(G)(f._1)(f._2)(c))(s)((() => {
    const c = J((P) => (R) => {
      const j = R.edge.from.node + "|" + (() => {
        if (R.edge.from.port.tag === "Just")
          return R.edge.from.port._1;
        if (R.edge.from.port.tag === "Nothing")
          return "_auto_" + R.edge.id;
        a();
      })(), et = ee(j)(P.entries);
      if (et.tag === "Nothing")
        return {
          ...P,
          entries: X(G)(j)({
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
          entries: X(G)(j)({
            ...et._1,
            members: [...et._1.members, R.edge.id],
            incoming: [...Le((Y) => Y < R.fromPos._1)(et._1.incoming).init, R.fromPos._1, ...Le((Y) => Y <= R.fromPos._1)(et._1.incoming).rest],
            outgoing: [...Le((Y) => Y < R.toPos._1)(et._1.outgoing).init, R.toPos._1, ...Le((Y) => Y <= R.toPos._1)(et._1.outgoing).rest]
          })(P.entries)
        };
      a();
    })({ entries: W, order: [] })(u._2), f = At((P) => (R) => ({ ...R, id: P }))(yt((P) => ee(P)(c.entries))(c.order));
    if (f.length === 0)
      return [];
    const g = J((P) => (R) => P.prev.tag === "Just" && R - P.prev._1 < 1e-9 ? P : { prev: b("Just", R), out: [...P.out, R] })({ prev: T, out: [] })(Lt(pt.compare)([
      ...Ct(f)((P) => P.incoming),
      ...Ct(f)((P) => P.outgoing)
    ])).out, l = g.length < 2 ? 0.2 * r : 0.2 * J((P) => (R) => {
      if (P.prev.tag === "Nothing")
        return { prev: b("Just", R), mn: P.mn };
      if (P.prev.tag === "Just")
        return { prev: b("Just", R), mn: ct(P.mn)(R - P.prev._1) };
      a();
    })({ prev: T, mn: 1e18 })(g).mn, d = {
      segments: f,
      deps: (() => {
        const P = f.length;
        return Ct(Ct(Yt(0, P - 2 | 0))((R) => Ct(Yt(R + 1 | 0, P - 1 | 0))((j) => [
          E(R, j)
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
      const P = We((() => {
        const I = d.segments;
        return z((x) => E(x.id, x.mark))((() => {
          const x = I.length, C = (F) => {
            let Q = F, K = !0, O;
            for (; K; ) {
              const B = Q, nt = gn((U) => {
                const tt = wt(U)(B.inWeight);
                if (tt.tag === "Nothing")
                  return !0;
                if (tt.tag === "Just")
                  return tt._1 === 0;
                a();
              })(B.remaining);
              if (nt.tag === "Nothing") {
                K = !1, O = B;
                continue;
              }
              if (nt.tag === "Just") {
                const U = nt._1;
                Q = {
                  ...B,
                  inWeight: J((tt) => (ot) => Tt(rt)(jt)(ot.tgt)(-ot.weight)(tt))(B.inWeight)((() => {
                    const tt = wt(U)(B.depsBySrc);
                    if (tt.tag === "Nothing")
                      return [];
                    if (tt.tag === "Just")
                      return tt._1;
                    a();
                  })()),
                  marks: X(rt)(U)(B.nextSource)(B.marks),
                  nextSource: B.nextSource + 1 | 0,
                  outWeight: J((tt) => (ot) => Tt(rt)(jt)(ot.src)(-ot.weight)(tt))(B.outWeight)((() => {
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
            return O;
          }, D = (F) => {
            let Q = F, K = !0, O;
            for (; K; ) {
              const B = Q, nt = gn((U) => {
                const tt = wt(U)(B.outWeight);
                if (tt.tag === "Nothing")
                  return !0;
                if (tt.tag === "Just")
                  return tt._1 === 0;
                a();
              })(B.remaining);
              if (nt.tag === "Nothing") {
                K = !1, O = B;
                continue;
              }
              if (nt.tag === "Just") {
                const U = nt._1;
                Q = {
                  ...B,
                  inWeight: J((tt) => (ot) => Tt(rt)(jt)(ot.tgt)(-ot.weight)(tt))(B.inWeight)((() => {
                    const tt = wt(U)(B.depsBySrc);
                    if (tt.tag === "Nothing")
                      return [];
                    if (tt.tag === "Just")
                      return tt._1;
                    a();
                  })()),
                  marks: X(rt)(U)(B.nextSink)(B.marks),
                  nextSink: B.nextSink - 1 | 0,
                  outWeight: J((tt) => (ot) => Tt(rt)(jt)(ot.src)(-ot.weight)(tt))(B.outWeight)((() => {
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
            return O;
          };
          return ((F) => {
            let Q = F, K = !0, O;
            for (; K; ) {
              const nt = C(D(Q));
              if (nt.remaining.length === 0) {
                K = !1, O = z((U) => {
                  const tt = wt(U.id)(nt.marks), ot = (() => {
                    if (tt.tag === "Nothing")
                      return U.id;
                    if (tt.tag === "Just")
                      return tt._1;
                    a();
                  })();
                  return { ...U, mark: ot < x ? (ot + x | 0) + 1 | 0 : ot };
                })(I);
                continue;
              }
              Q = (() => {
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
                    inWeight: J((st) => (_t) => Tt(rt)(jt)(_t.tgt)(-_t.weight)(st))(nt.inWeight)((() => {
                      const st = wt(ot)(nt.depsBySrc);
                      if (st.tag === "Nothing")
                        return [];
                      if (st.tag === "Just")
                        return st._1;
                      a();
                    })()),
                    marks: X(rt)(ot)(nt.nextSource)(nt.marks),
                    nextSource: nt.nextSource + 1 | 0,
                    outWeight: J((st) => (_t) => Tt(rt)(jt)(_t.src)(-_t.weight)(st))(nt.outWeight)((() => {
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
            return O;
          })({
            remaining: z((F) => F.id)(I),
            marks: W,
            inWeight: J((F) => (Q) => Tt(rt)(jt)(Q.tgt)(Q.weight)(F))(W)(_),
            outWeight: J((F) => (Q) => Tt(rt)(jt)(Q.src)(Q.weight)(F))(W)(_),
            depsBySrc: J((F) => (Q) => Tt(rt)(un)(Q.src)([Q])(F))(W)(_),
            depsByTgt: J((F) => (Q) => Tt(rt)(un)(Q.tgt)([Q])(F))(W)(_),
            nextSink: x - 1 | 0,
            nextSource: x + 1 | 0
          });
        })());
      })()), R = gt(
        (I) => {
          const x = wt(I.src)(P), C = wt(I.tgt)(P);
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
      const j = J((I) => (x) => {
        if (Gn(Tr)(x.src)(I.decisions) || Gn(Tr)(x.tgt)(I.decisions))
          return I;
        const C = wt(x.src)(I.segMap), D = wt(x.tgt)(I.segMap);
        if (C.tag === "Just" && D.tag === "Just") {
          const S = (C._1.incoming.length + C._1.outgoing.length | 0) > 2 && (D._1.incoming.length + D._1.outgoing.length | 0) <= 2, F = S ? D._1 : C._1;
          return {
            decisions: [...I.decisions, F.id],
            segMap: X(rt)(F.id)({ ...F, splitBy: b("Just", S ? C._1.id : D._1.id) })(I.segMap)
          };
        }
        return I;
      })({ decisions: [], segMap: We(z((I) => E(I.id, I))(d.segments)) })(R), et = j.segMap, Y = J((I) => (x) => {
        const C = ct(J(ct)(1e18)(x.incoming))(J(ct)(1e18)(x.outgoing)), D = ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(x.outgoing)), S = gt(
          (B) => B.a.startPosition <= D && B.a.endPosition >= C,
          At((B) => (nt) => ({ i: B, a: nt }))(I.freeAreas)
        );
        if (S.length === 0) {
          const B = {
            ...x,
            incoming: Lt(pt.compare)(x.incoming),
            outgoing: Lt(pt.compare)([(C + D) / 2]),
            splitPartner: b("Just", I.nextId)
          }, nt = {
            id: I.nextId,
            incoming: Lt(pt.compare)([(C + D) / 2]),
            mark: 0,
            members: x.members,
            outgoing: Lt(pt.compare)(x.outgoing),
            slot: 0,
            splitBy: T,
            splitPartner: b("Just", x.id)
          };
          return {
            segMap: X(rt)(nt.id)(nt)(X(rt)(B.id)(B)(I.segMap)),
            freeAreas: I.freeAreas,
            nextId: I.nextId + 1 | 0
          };
        }
        const F = 0 < S.length ? b("Just", S[0]) : T, Q = (() => {
          if (F.tag === "Nothing")
            return { i: 0, a: { startPosition: 0, endPosition: 0, size: 0 } };
          if (F.tag === "Just") {
            if (S.length === 1)
              return F._1;
            const B = z((nt) => ({
              c: nt,
              rating: (() => {
                const U = (nt.a.startPosition + nt.a.endPosition) / 2, tt = [U], ot = [U], st = J((() => {
                  const Pt = I.segMap;
                  return (vt) => (Vt) => {
                    const ht = wt(Vt.tgt)(Pt);
                    if (ht.tag === "Nothing")
                      return vt;
                    if (ht.tag === "Just") {
                      const mt = ct(J(ct)(1e18)(ht._1.incoming))(J(ct)(1e18)(ht._1.outgoing)), lt = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), dt = ct(J(ct)(1e18)(x.incoming))(J(ct)(1e18)(tt)), it = (() => {
                        const xt = ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(tt)), St = J((Bt) => (tn) => tn > lt ? Bt : tn >= mt ? Bt + 1 | 0 : Bt)(0)(tt) + J((Bt) => (tn) => tn > xt ? Bt : tn >= dt ? Bt + 1 | 0 : Bt)(0)(ht._1.incoming) | 0, ye = ct(J(ct)(1e18)(x.incoming))(J(ct)(1e18)(tt)), Te = ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(tt)), Be = ct(J(ct)(1e18)(ht._1.incoming))(J(ct)(1e18)(ht._1.outgoing)), te = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), ar = J((Bt) => (tn) => tn > Te ? Bt : tn >= ye ? Bt + 1 | 0 : Bt)(0)(ht._1.outgoing) + J((Bt) => (tn) => tn > te ? Bt : tn >= Be ? Bt + 1 | 0 : Bt)(0)(x.incoming) | 0;
                        return St === ar ? St > 0 ? { ...vt, deps: vt.deps + 2 | 0, crossings: vt.crossings + St | 0 } : vt : { ...vt, deps: vt.deps + 1 | 0, crossings: vt.crossings + qe(St)(ar) | 0 };
                      })(), ut = ct(J(ct)(1e18)(ht._1.incoming))(J(ct)(1e18)(ht._1.outgoing)), $t = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), Nt = ct(J(ct)(1e18)(ot))(J(ct)(1e18)(x.outgoing)), Rt = ft(J(ft)(-1e18)(ot))(J(ft)(-1e18)(x.outgoing)), Gt = J((xt) => (St) => St > $t ? xt : St >= ut ? xt + 1 | 0 : xt)(0)(x.outgoing) + J((xt) => (St) => St > Rt ? xt : St >= Nt ? xt + 1 | 0 : xt)(0)(ht._1.incoming) | 0, Zt = ct(J(ct)(1e18)(ot))(J(ct)(1e18)(x.outgoing)), Hn = ft(J(ft)(-1e18)(ot))(J(ft)(-1e18)(x.outgoing)), Fe = ct(J(ct)(1e18)(ht._1.incoming))(J(ct)(1e18)(ht._1.outgoing)), ve = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), Zn = J((xt) => (St) => St > Hn ? xt : St >= Zt ? xt + 1 | 0 : xt)(0)(ht._1.outgoing) + J((xt) => (St) => St > ve ? xt : St >= Fe ? xt + 1 | 0 : xt)(0)(ot) | 0;
                      return Gt === Zn ? Gt > 0 ? { ...it, deps: it.deps + 2 | 0, crossings: it.crossings + Gt | 0 } : it : { ...it, deps: it.deps + 1 | 0, crossings: it.crossings + qe(Gt)(Zn) | 0 };
                    }
                    a();
                  };
                })())(J((() => {
                  const Pt = I.segMap;
                  return (vt) => (Vt) => {
                    const ht = wt(Vt.src)(Pt);
                    if (ht.tag === "Nothing")
                      return vt;
                    if (ht.tag === "Just") {
                      const mt = ct(J(ct)(1e18)(ht._1.incoming))(J(ct)(1e18)(ht._1.outgoing)), lt = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), dt = ct(J(ct)(1e18)(x.incoming))(J(ct)(1e18)(tt)), it = (() => {
                        const xt = ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(tt)), St = J((Bt) => (tn) => tn > lt ? Bt : tn >= mt ? Bt + 1 | 0 : Bt)(0)(tt) + J((Bt) => (tn) => tn > xt ? Bt : tn >= dt ? Bt + 1 | 0 : Bt)(0)(ht._1.incoming) | 0, ye = ct(J(ct)(1e18)(x.incoming))(J(ct)(1e18)(tt)), Te = ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(tt)), Be = ct(J(ct)(1e18)(ht._1.incoming))(J(ct)(1e18)(ht._1.outgoing)), te = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), ar = J((Bt) => (tn) => tn > Te ? Bt : tn >= ye ? Bt + 1 | 0 : Bt)(0)(ht._1.outgoing) + J((Bt) => (tn) => tn > te ? Bt : tn >= Be ? Bt + 1 | 0 : Bt)(0)(x.incoming) | 0;
                        return St === ar ? St > 0 ? { ...vt, deps: vt.deps + 2 | 0, crossings: vt.crossings + St | 0 } : vt : { ...vt, deps: vt.deps + 1 | 0, crossings: vt.crossings + qe(St)(ar) | 0 };
                      })(), ut = ct(J(ct)(1e18)(ht._1.incoming))(J(ct)(1e18)(ht._1.outgoing)), $t = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), Nt = ct(J(ct)(1e18)(ot))(J(ct)(1e18)(x.outgoing)), Rt = ft(J(ft)(-1e18)(ot))(J(ft)(-1e18)(x.outgoing)), Gt = J((xt) => (St) => St > $t ? xt : St >= ut ? xt + 1 | 0 : xt)(0)(x.outgoing) + J((xt) => (St) => St > Rt ? xt : St >= Nt ? xt + 1 | 0 : xt)(0)(ht._1.incoming) | 0, Zt = ct(J(ct)(1e18)(ot))(J(ct)(1e18)(x.outgoing)), Hn = ft(J(ft)(-1e18)(ot))(J(ft)(-1e18)(x.outgoing)), Fe = ct(J(ct)(1e18)(ht._1.incoming))(J(ct)(1e18)(ht._1.outgoing)), ve = ft(J(ft)(-1e18)(ht._1.incoming))(J(ft)(-1e18)(ht._1.outgoing)), Zn = J((xt) => (St) => St > Hn ? xt : St >= Zt ? xt + 1 | 0 : xt)(0)(ht._1.outgoing) + J((xt) => (St) => St > ve ? xt : St >= Fe ? xt + 1 | 0 : xt)(0)(ot) | 0;
                      return Gt === Zn ? Gt > 0 ? { ...it, deps: it.deps + 2 | 0, crossings: it.crossings + Gt | 0 } : it : { ...it, deps: it.deps + 1 | 0, crossings: it.crossings + qe(Gt)(Zn) | 0 };
                    }
                    a();
                  };
                })())({ crossings: 0, deps: 0 })(gt((Pt) => Pt.tgt === x.id, d.deps)))(gt((Pt) => Pt.src === x.id, d.deps)), _t = (() => {
                  if (x.splitBy.tag === "Just")
                    return wt(x.splitBy._1)(I.segMap);
                  if (x.splitBy.tag === "Nothing")
                    return T;
                  a();
                })();
                if (_t.tag === "Just")
                  return {
                    ...st,
                    deps: st.deps + 2 | 0,
                    crossings: (() => {
                      const Pt = ct(J(ct)(1e18)(_t._1.incoming))(J(ct)(1e18)(_t._1.outgoing)), vt = ct(J(ct)(1e18)(ot))(J(ct)(1e18)(x.outgoing)), Vt = ft(J(ft)(-1e18)(_t._1.incoming))(J(ft)(-1e18)(_t._1.outgoing)), ht = ft(J(ft)(-1e18)(ot))(J(ft)(-1e18)(x.outgoing)), mt = ct(J(ct)(1e18)(x.incoming))(J(ct)(1e18)(tt));
                      return st.crossings + (() => {
                        const lt = ct(J(ct)(1e18)(_t._1.incoming))(J(ct)(1e18)(_t._1.outgoing)), dt = ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(tt)), it = ft(J(ft)(-1e18)(_t._1.incoming))(J(ft)(-1e18)(_t._1.outgoing));
                        return ((J((ut) => ($t) => $t > Vt ? ut : $t >= Pt ? ut + 1 | 0 : ut)(0)(tt) + J((ut) => ($t) => $t > dt ? ut : $t >= mt ? ut + 1 | 0 : ut)(0)(_t._1.incoming) | 0) + J((ut) => ($t) => $t > ht ? ut : $t >= vt ? ut + 1 | 0 : ut)(0)(_t._1.outgoing) | 0) + J((ut) => ($t) => $t > it ? ut : $t >= lt ? ut + 1 | 0 : ut)(0)(ot) | 0;
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
          outgoing: Lt(pt.compare)([(Q.a.startPosition + Q.a.endPosition) / 2]),
          splitPartner: b("Just", I.nextId)
        }, O = {
          id: I.nextId,
          incoming: Lt(pt.compare)([(Q.a.startPosition + Q.a.endPosition) / 2]),
          mark: 0,
          members: x.members,
          outgoing: Lt(pt.compare)(x.outgoing),
          slot: 0,
          splitBy: T,
          splitPartner: b("Just", x.id)
        };
        return {
          segMap: X(rt)(O.id)(O)(X(rt)(K.id)(K)(I.segMap)),
          freeAreas: (() => {
            if (Q.i >= 0 && Q.i < I.freeAreas.length) {
              const B = Ou(en, T, Q.i, I.freeAreas), nt = (() => {
                if (B.tag === "Nothing")
                  return I.freeAreas;
                if (B.tag === "Just")
                  return B._1;
                a();
              })();
              if (I.freeAreas[Q.i].size / 2 < l)
                return nt;
              const U = (I.freeAreas[Q.i].startPosition + I.freeAreas[Q.i].endPosition) / 2, tt = U - l, ot = U + l;
              return [
                ...Q.i < 1 ? [] : It(0, Q.i, nt),
                ...I.freeAreas[Q.i].startPosition <= tt ? [{ startPosition: I.freeAreas[Q.i].startPosition, endPosition: tt, size: tt - I.freeAreas[Q.i].startPosition }] : [],
                ...ot <= I.freeAreas[Q.i].endPosition ? [{ startPosition: ot, endPosition: I.freeAreas[Q.i].endPosition, size: I.freeAreas[Q.i].endPosition - ot }] : [],
                ...Q.i < 1 ? nt : It(Q.i, nt.length, nt)
              ];
            }
            return I.freeAreas;
          })(),
          nextId: I.nextId + 1 | 0
        };
      })({
        segMap: et,
        freeAreas: (() => {
          const I = Lt(pt.compare)([
            ...Ct(d.segments)((x) => x.incoming),
            ...Ct(d.segments)((x) => x.outgoing)
          ]);
          return yt(M1)(Tn(
            (x) => (C) => C - x >= 2 * l ? b("Just", { startPosition: x + l, endPosition: C - l, size: C - x - 2 * l }) : T,
            I,
            It(1, I.length, I)
          ));
        })(),
        nextId: d.segments.length
      })(Lt((I) => (x) => pt.compare(ft(J(ft)(-1e18)(I.incoming))(J(ft)(-1e18)(I.outgoing)) - ct(J(ct)(1e18)(I.incoming))(J(ct)(1e18)(I.outgoing)))(ft(J(ft)(-1e18)(x.incoming))(J(ft)(-1e18)(x.outgoing)) - ct(J(ct)(1e18)(x.incoming))(J(ct)(1e18)(x.outgoing))))(yt((I) => wt(I)(et))(j.decisions)));
      return {
        segments: (() => {
          const I = (x, C) => {
            if (x.tag === "Leaf")
              return C;
            if (x.tag === "Node")
              return I(x._5, qt("Cons", x._4, I(x._6, C)));
            a();
          };
          return bt(Xt.foldr, I(Y.segMap, Ot));
        })(),
        deps: (() => {
          const I = Y.segMap, x = (S, F) => {
            if (S.tag === "Leaf")
              return F;
            if (S.tag === "Node")
              return x(S._5, qt("Cons", S._4, x(S._6, F)));
            a();
          }, C = bt(Xt.foldr, x(I, Ot)), D = C.length;
          return [
            ...Ct(Ct(Yt(0, D - 2 | 0))((S) => Ct(Yt(S + 1 | 0, D - 1 | 0))((F) => [
              E(S, F)
            ])))((S) => S._1 >= 0 && S._1 < C.length ? S._2 >= 0 && S._2 < C.length ? C[S._1].splitPartner.tag !== "Nothing" && C[S._1].splitPartner.tag === "Just" && C[S._1].splitPartner._1 === C[S._2].id || C[S._2].splitPartner.tag !== "Nothing" && C[S._2].splitPartner.tag === "Just" && C[S._2].splitPartner._1 === C[S._1].id ? [] : i(l, C[S._1], C[S._2]) : [] : []),
            ...Ct(C)((S) => S.splitBy.tag === "Just" && S.splitPartner.tag === "Just" && (() => {
              const F = wt(S.splitPartner._1)(I);
              if (F.tag === "Nothing")
                return !1;
              if (F.tag === "Just")
                return !0;
              a();
            })() && (() => {
              const F = wt(S.splitBy._1)(I);
              if (F.tag === "Nothing")
                return !1;
              if (F.tag === "Just")
                return !0;
              a();
            })() ? [{ src: S.id, tgt: S.splitBy._1, weight: 1, kind: Mr }, { src: S.splitBy._1, tgt: S.splitPartner._1, weight: 1, kind: Mr }] : [])
          ];
        })()
      };
    })(), p = h.segments, $ = p.length, m = (P) => {
      let R = P, j = !0, et;
      for (; j; ) {
        const Y = R, I = gn((x) => {
          const C = wt(x)(Y.inWeight);
          if (C.tag === "Nothing")
            return !0;
          if (C.tag === "Just")
            return C._1 === 0;
          a();
        })(Y.remaining);
        if (I.tag === "Nothing") {
          j = !1, et = Y;
          continue;
        }
        if (I.tag === "Just") {
          const x = I._1;
          R = {
            ...Y,
            inWeight: J((C) => (D) => Tt(rt)(jt)(D.tgt)(-D.weight)(C))(Y.inWeight)((() => {
              const C = wt(x)(Y.depsBySrc);
              if (C.tag === "Nothing")
                return [];
              if (C.tag === "Just")
                return C._1;
              a();
            })()),
            marks: X(rt)(x)(Y.nextSource)(Y.marks),
            nextSource: Y.nextSource + 1 | 0,
            outWeight: J((C) => (D) => Tt(rt)(jt)(D.src)(-D.weight)(C))(Y.outWeight)((() => {
              const C = wt(x)(Y.depsByTgt);
              if (C.tag === "Nothing")
                return [];
              if (C.tag === "Just")
                return C._1;
              a();
            })()),
            remaining: gt((C) => C !== x, Y.remaining)
          };
          continue;
        }
        a();
      }
      return et;
    }, N = (P) => {
      let R = P, j = !0, et;
      for (; j; ) {
        const Y = R, I = gn((x) => {
          const C = wt(x)(Y.outWeight);
          if (C.tag === "Nothing")
            return !0;
          if (C.tag === "Just")
            return C._1 === 0;
          a();
        })(Y.remaining);
        if (I.tag === "Nothing") {
          j = !1, et = Y;
          continue;
        }
        if (I.tag === "Just") {
          const x = I._1;
          R = {
            ...Y,
            inWeight: J((C) => (D) => Tt(rt)(jt)(D.tgt)(-D.weight)(C))(Y.inWeight)((() => {
              const C = wt(x)(Y.depsBySrc);
              if (C.tag === "Nothing")
                return [];
              if (C.tag === "Just")
                return C._1;
              a();
            })()),
            marks: X(rt)(x)(Y.nextSink)(Y.marks),
            nextSink: Y.nextSink - 1 | 0,
            outWeight: J((C) => (D) => Tt(rt)(jt)(D.src)(-D.weight)(C))(Y.outWeight)((() => {
              const C = wt(x)(Y.depsByTgt);
              if (C.tag === "Nothing")
                return [];
              if (C.tag === "Just")
                return C._1;
              a();
            })()),
            remaining: gt((C) => C !== x, Y.remaining)
          };
          continue;
        }
        a();
      }
      return et;
    }, y = ((P) => {
      let R = P, j = !0, et;
      for (; j; ) {
        const I = m(N(R));
        if (I.remaining.length === 0) {
          j = !1, et = z((x) => {
            const C = wt(x.id)(I.marks), D = (() => {
              if (C.tag === "Nothing")
                return x.id;
              if (C.tag === "Just")
                return C._1;
              a();
            })();
            return { ...x, mark: D < $ ? (D + $ | 0) + 1 | 0 : D };
          })(p);
          continue;
        }
        R = (() => {
          const x = (D) => {
            const S = wt(D)(I.outWeight), F = wt(D)(I.inWeight);
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
          }, C = Lt((D) => (S) => rt.compare(x(S))(x(D)))(I.remaining);
          if (0 < C.length) {
            const D = C[0];
            return {
              ...I,
              inWeight: J((S) => (F) => Tt(rt)(jt)(F.tgt)(-F.weight)(S))(I.inWeight)((() => {
                const S = wt(D)(I.depsBySrc);
                if (S.tag === "Nothing")
                  return [];
                if (S.tag === "Just")
                  return S._1;
                a();
              })()),
              marks: X(rt)(D)(I.nextSource)(I.marks),
              nextSource: I.nextSource + 1 | 0,
              outWeight: J((S) => (F) => Tt(rt)(jt)(F.src)(-F.weight)(S))(I.outWeight)((() => {
                const S = wt(D)(I.depsByTgt);
                if (S.tag === "Nothing")
                  return [];
                if (S.tag === "Just")
                  return S._1;
                a();
              })()),
              remaining: gt((S) => S !== D, I.remaining)
            };
          }
          return I;
        })();
      }
      return et;
    })({
      remaining: z((P) => P.id)(p),
      marks: W,
      inWeight: J((P) => (R) => Tt(rt)(jt)(R.tgt)(R.weight)(P))(W)(h.deps),
      outWeight: J((P) => (R) => Tt(rt)(jt)(R.src)(R.weight)(P))(W)(h.deps),
      depsBySrc: J((P) => (R) => Tt(rt)(un)(R.src)([R])(P))(W)(h.deps),
      depsByTgt: J((P) => (R) => Tt(rt)(un)(R.tgt)([R])(P))(W)(h.deps),
      nextSink: $ - 1 | 0,
      nextSource: $ + 1 | 0
    }), w = (() => {
      const P = (() => {
        const Y = We(z((I) => E(I.id, I.mark))(y));
        return {
          segments: y,
          deps: yt((I) => (() => {
            if (I.kind === "Critical")
              return !0;
            if (I.kind === "Regular")
              return !1;
            a();
          })() ? b("Just", I) : (() => {
            const x = wt(I.src)(Y), C = wt(I.tgt)(Y);
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
          })() ? I.weight === 0 ? T : b("Just", { src: I.tgt, tgt: I.src, weight: I.weight, kind: I.kind }) : b("Just", I))(h.deps)
        };
      })(), R = J((Y) => (I) => Tt(rt)(jt)(I.tgt)(1)(Y))(W)(P.deps), et = ((Y) => {
        let I = Y, x = !0, C;
        for (; x; ) {
          const D = I, S = Qt((F) => T, (F) => (Q) => b("Just", { head: F, tail: Q }), D.queue);
          if (S.tag === "Nothing") {
            x = !1, C = D;
            continue;
          }
          if (S.tag === "Just") {
            I = J((() => {
              const F = wt(S._1.head)(D.slots), Q = (() => {
                if (F.tag === "Nothing")
                  return 0;
                if (F.tag === "Just")
                  return F._1;
                a();
              })();
              return (K) => (O) => {
                const B = wt(O)(K.inDegree), nt = (() => {
                  if (B.tag === "Nothing")
                    return -1;
                  if (B.tag === "Just")
                    return B._1 - 1 | 0;
                  a();
                })();
                return {
                  ...K,
                  slots: X(rt)(O)(Zs((() => {
                    const U = wt(O)(K.slots);
                    if (U.tag === "Nothing")
                      return 0;
                    if (U.tag === "Just")
                      return U._1;
                    a();
                  })())(Q + 1 | 0))(K.slots),
                  inDegree: X(rt)(O)(nt)(K.inDegree),
                  queue: nt === 0 ? [...K.queue, O] : K.queue
                };
              };
            })())({ ...D, queue: S._1.tail })((() => {
              const F = wt(S._1.head)(D.adj);
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
        slots: We(z((Y) => E(Y.id, 0))(P.segments)),
        inDegree: R,
        adj: J((Y) => (I) => Tt(rt)(un)(I.src)([I.tgt])(Y))(W)(P.deps),
        queue: z((Y) => Y.id)(gt(
          (Y) => {
            const I = wt(Y.id)(R);
            if (I.tag === "Nothing")
              return !0;
            if (I.tag === "Just")
              return I._1 === 0;
            a();
          },
          P.segments
        ))
      });
      return Lt((Y) => (I) => rt.compare(Y.slot)(I.slot))(z((Y) => ({
        ...Y,
        slot: (() => {
          const I = wt(Y.id)(et.slots);
          if (I.tag === "Nothing")
            return 0;
          if (I.tag === "Just")
            return I._1;
          a();
        })()
      }))(P.segments));
    })(), L = 1 + J((P) => (R) => Zs(P)(R.slot))(0)(w) | 0, k = Ct(w)((P) => P.members), A = gt((P) => Gn(Xn)(P.edge.id)(k), t), H = J(ft)(-1e18)(z((P) => P.fromPos._2)(A)), V = J(ct)(1e18)(z((P) => P.toPos._2)(A));
    if (H > V) {
      const P = We(z((R) => E(R.id, R))(w));
      return xn(z((R) => z((j) => E(
        j,
        {
          slot: R.slot,
          slotCount: L,
          gapTop: V,
          gapBottom: H,
          partner: (() => {
            if (R.splitPartner.tag === "Just") {
              const et = wt(R.splitPartner._1)(P);
              if (et.tag === "Just")
                return b("Just", { slot: et._1.slot, splitX: 0 < et._1.incoming.length ? et._1.incoming[0] : 0 });
              if (et.tag === "Nothing")
                return T;
              a();
            }
            if (R.splitPartner.tag === "Nothing")
              return T;
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
    const M = We(z((P) => E(P.id, P))(w));
    return xn(z((P) => z((R) => E(
      R,
      {
        slot: P.slot,
        slotCount: L,
        gapTop: H,
        gapBottom: V,
        partner: (() => {
          if (P.splitPartner.tag === "Just") {
            const j = wt(P.splitPartner._1)(M);
            if (j.tag === "Just")
              return b("Just", { slot: j._1.slot, splitX: 0 < j._1.incoming.length ? j._1.incoming[0] : 0 });
            if (j.tag === "Nothing")
              return T;
            a();
          }
          if (P.splitPartner.tag === "Nothing")
            return T;
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
  })()))(W)(U1(J((s) => (u) => {
    const c = ee(u.edge.from.node)(e);
    if (c.tag === "Just") {
      const f = ee(u.edge.to.node)(e);
      return f.tag === "Just" && c._1.layer !== f._1.layer ? Tt(rt)(un)(qe(c._1.layer)(f._1.layer))([u])(s) : s;
    }
    return s;
  })(W)((() => {
    const s = (u) => E(
      (() => {
        const c = ee(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.layer : 1e6;
      })(),
      (() => {
        const c = ee(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.order : 1e6;
      })()
    );
    return Lt((u) => (c) => X1(s(u))(s(c)))(t);
  })())));
}, K1 = (t) => (n) => {
  const e = Kc(t)(n), r = J((o) => (i) => X(G)(i.node)(i)(o))(W)(n);
  return J((o) => (i) => {
    const s = ee(i.edge.from.node)(r);
    if (s.tag === "Just") {
      const u = ee(i.edge.to.node)(r);
      if (u.tag === "Just" && s._1.layer !== u._1.layer) {
        const c = ee(i.edge.id)(e);
        if (c.tag === "Just")
          return X(rt)(qe(s._1.layer)(u._1.layer))(c._1.slotCount)(o);
      }
      return o;
    }
    return o;
  })(W)(t);
}, jc = Ft.foldMap(/* @__PURE__ */ (() => {
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
}, lr = (t) => (n) => (e) => (r) => jc((o) => e >= o.x && e < o.x + o.w && n > o.y && t < o.y + o.h)(r), po = (t) => (n) => (e) => (r) => lr(rn(n)(e))(on(n)(e))(r)(t), Kr = /* @__PURE__ */ at(4), j1 = /* @__PURE__ */ Uu((t) => {
  if (t.direction === "H") {
    const n = rn(t.start._1)(t.end._1);
    return [{ x: n, y: t.start._2 - 1, w: on(t.start._1)(t.end._1) - n, h: 2 }];
  }
  if (t.direction === "V") {
    const n = rn(t.start._2)(t.end._2);
    return [{ x: t.start._1 - 1, y: n, w: 2, h: on(t.start._2)(t.end._2) - n }];
  }
  a();
}), tu = /* @__PURE__ */ Xu((t) => !(t.start._1 === t.end._1 && t.start._2 === t.end._2)), Z1 = (t) => (n) => (e) => {
  const r = Qt((o) => T, (o) => (i) => b("Just", { head: o, tail: i }), n);
  if (r.tag === "Nothing")
    return [{ start: t.start, end: e.end, direction: t.direction }];
  if (r.tag === "Just") {
    const o = (r._1.head.direction === "H" ? t.direction === "H" : r._1.head.direction === "V" && t.direction === "V") ? [{ start: t.start, end: r._1.head.end, direction: t.direction }] : [t, r._1.head], i = Yu(r._1.tail);
    if (i.tag === "Nothing") {
      const s = o.length - 1 | 0;
      return s >= 0 && s < o.length && (o[s].direction === "H" ? e.direction === "H" : o[s].direction === "V" && e.direction === "V") ? [
        ...(() => {
          const u = o.length - 1 | 0;
          return u < 1 ? [] : It(0, u, o);
        })(),
        { start: o[s].start, end: e.end, direction: e.direction }
      ] : [...o, e];
    }
    if (i.tag === "Just")
      return (i._1.last.direction === "H" ? e.direction === "H" : i._1.last.direction === "V" && e.direction === "V") ? [...o, ...i._1.init, { start: i._1.last.start, end: e.end, direction: e.direction }] : [...o, ...r._1.tail, e];
  }
  a();
}, Ti = (t) => {
  const n = (r) => (o) => {
    const i = Qt((s) => T, (s) => (u) => b("Just", { head: s, tail: u }), o);
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
  }, e = Qt((r) => T, (r) => (o) => b("Just", { head: r, tail: o }), t);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return n(e._1.head)(e._1.tail);
  a();
}, dr = (t) => (n) => (e) => (r) => jc((o) => e >= o.y && e < o.y + o.h && n > o.x && t < o.x + o.w)(r), vr = (t) => (n) => (e) => (r) => dr(rn(n)(e))(on(n)(e))(r)(t), td = (t) => (n) => (e) => (r) => {
  const o = e + 2 | 0, i = o < 1 ? n : It(o, n.length, n), s = e < 1 ? [] : It(0, e, n), u = (e + 1 | 0) === (r - 1 | 0), c = e === 0, f = e >= 0 && e < n.length ? b("Just", n[e]) : T;
  if (f.tag === "Just") {
    const g = e + 1 | 0, l = g >= 0 && g < n.length ? b("Just", n[g]) : T;
    if (l.tag === "Just") {
      const d = f._1.start._1 === l._1.end._1 && (!c || f._1.direction === "V") && (!u || l._1.direction === "V") && !po(t)(rn(f._1.start._2)(l._1.end._2))(on(f._1.start._2)(l._1.end._2))(f._1.start._1) ? b("Just", [...s, { start: f._1.start, end: l._1.end, direction: zt }, ...i]) : T, _ = f._1.start._2 === l._1.end._2 && (!c || f._1.direction === "H") && (!u || l._1.direction === "H") && !vr(t)(rn(f._1.start._1)(l._1.end._1))(on(f._1.start._1)(l._1.end._1))(f._1.start._2) ? b("Just", [...s, { start: f._1.start, end: l._1.end, direction: Ht }, ...i]) : T;
      return d.tag === "Nothing" ? _ : d;
    }
    if (l.tag === "Nothing")
      return T;
    a();
  }
  if (f.tag === "Nothing")
    return T;
  a();
}, nd = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if ((c + 1 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const f = td(t)(n)(c)(e);
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
}, ed = (t) => (n) => (e) => (r) => {
  const o = (d, _, h) => !po(t)(rn(_)(h))(on(_)(h))(d), i = e + 3 | 0, s = i < 1 ? n : It(i, n.length, n), u = e < 1 ? [] : It(0, e, n), c = (e + 2 | 0) === (r - 1 | 0), f = e === 0, g = (d, _, h) => !vr(t)(rn(_)(h))(on(_)(h))(d), l = e >= 0 && e < n.length ? b("Just", n[e]) : T;
  if (l.tag === "Just") {
    const d = e + 2 | 0, _ = d >= 0 && d < n.length ? b("Just", n[d]) : T;
    if (_.tag === "Just") {
      const h = l._1.start._1 === _._1.end._1 && (!f || l._1.direction === "V") && (!c || _._1.direction === "V") && o(l._1.start._1, l._1.start._2, _._1.end._2) ? b("Just", [...u, { start: l._1.start, end: _._1.end, direction: zt }, ...s]) : l._1.start._2 === _._1.end._2 && (!f || l._1.direction === "H") && (!c || _._1.direction === "H") && g(l._1.start._2, l._1.start._1, _._1.end._1) ? b("Just", [...u, { start: l._1.start, end: _._1.end, direction: Ht }, ...s]) : T, p = (!f || l._1.direction === "V") && (!c || _._1.direction === "H") && o(l._1.start._1, l._1.start._2, _._1.end._2) && g(
        _._1.end._2,
        l._1.start._1,
        _._1.end._1
      ) ? b(
        "Just",
        [
          ...u,
          { start: l._1.start, end: E(l._1.start._1, _._1.end._2), direction: zt },
          { start: E(l._1.start._1, _._1.end._2), end: _._1.end, direction: Ht },
          ...s
        ]
      ) : T, $ = (!f || l._1.direction === "H") && (!c || _._1.direction === "V") && g(l._1.start._2, l._1.start._1, _._1.end._1) && o(
        _._1.end._1,
        l._1.start._2,
        _._1.end._2
      ) ? b(
        "Just",
        [
          ...u,
          { start: l._1.start, end: E(_._1.end._1, l._1.start._2), direction: Ht },
          { start: E(_._1.end._1, l._1.start._2), end: _._1.end, direction: zt },
          ...s
        ]
      ) : T, m = p.tag === "Nothing" ? $ : p;
      return h.tag === "Nothing" ? m : h;
    }
    if (_.tag === "Nothing")
      return T;
    a();
  }
  if (l.tag === "Nothing")
    return T;
  a();
}, rd = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if ((c + 2 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const f = ed(t)(n)(c)(e);
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
}, od = (t) => {
  const n = (e) => {
    let r = e, o = !0, i;
    for (; o; ) {
      const s = r, u = Ti(tu(nd(t)(rd(t)(s))));
      if (u.length < s.length) {
        r = u;
        continue;
      }
      o = !1, i = u;
    }
    return i;
  };
  return (e) => n(Ti(tu(e)));
}, id = (t) => (n) => (e) => (r) => {
  const o = rn(e)(r), i = on(e)(r), s = gt((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = Lt((f) => (g) => pt.compare(f.x)(g.x))(s);
    return 0 < c.length ? c[0].x - 1 : (e + r) / 2;
  }
  const u = Lt((c) => (f) => pt.compare(f.x)(c.x))(z((c) => ({ ...c, x: c.x + c.w }))(s));
  return 0 < u.length ? u[0].x + 1 : (e + r) / 2;
}, sd = (t) => (n) => (e) => (r) => {
  const o = rn(e)(r), i = on(e)(r), s = gt((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = Lt((f) => (g) => pt.compare(f.y)(g.y))(s);
    return 0 < c.length ? c[0].y - 1 : (e + r) / 2;
  }
  const u = Lt((c) => (f) => pt.compare(f.y)(c.y))(z((c) => ({ ...c, y: c.y + c.h }))(s));
  return 0 < u.length ? u[0].y + 1 : (e + r) / 2;
}, ud = (t) => (n) => (e) => (r) => {
  const o = rn(e)(r), i = on(e)(r), s = gt((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = Lt((f) => (g) => pt.compare(g.x)(f.x))(z((f) => ({ ...f, x: f.x + f.w }))(s));
    return 0 < c.length ? c[0].x : (e + r) / 2;
  }
  const u = Lt((c) => (f) => pt.compare(c.x)(f.x))(s);
  return 0 < u.length ? u[0].x - 1 : (e + r) / 2;
}, cd = (t) => (n) => (e) => (r) => {
  const o = rn(e)(r), i = on(e)(r), s = gt((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = Lt((f) => (g) => pt.compare(g.y)(f.y))(z((f) => ({ ...f, y: f.y + f.h }))(s));
    return 0 < c.length ? c[0].y : (e + r) / 2;
  }
  const u = Lt((c) => (f) => pt.compare(c.y)(f.y))(s);
  return 0 < u.length ? u[0].y - 1 : (e + r) / 2;
}, Zc = (t) => (n) => (e) => {
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
}, nu = (t) => (n) => (e) => (r) => (o) => {
  const i = rn(n)(e), s = on(n)(e);
  if (!lr(i)(s)(r)(t))
    return r;
  if (!lr(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return lr(i)(s)(u)(t) ? Zc((c) => lr(i)(s)(c)(t))(u)(1) : u;
}, ad = (t) => (n) => (e) => (r) => (o) => {
  const i = rn(n)(e), s = on(n)(e);
  if (!dr(i)(s)(r)(t))
    return r;
  if (!dr(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return dr(i)(s)(u)(t) ? Zc((c) => dr(i)(s)(c)(t))(u)(1) : u;
}, fd = (t) => (n) => (e) => (r) => {
  const o = rn(n)(e), i = on(n)(e), s = gt((f) => r >= f.x && r < f.x + f.w && f.y + f.h > o && f.y < i, t), u = J((f) => (g) => on(f)(g.x + g.w + 4))(r + 4)(s), c = J((f) => (g) => rn(f)(g.x - 4))(r - 4)(s);
  return (() => {
    const f = u - r, g = c - r;
    return (f < 0 ? -f : f) <= (g < 0 ? -g : g);
  })() ? u : c;
}, gd = (t) => (n) => (e) => (r) => {
  const o = rn(n)(e), i = on(n)(e), s = gt((f) => r >= f.y && r < f.y + f.h && f.x + f.w > o && f.x < i, t), u = J((f) => (g) => on(f)(g.y + g.h + 4))(r + 4)(s), c = J((f) => (g) => rn(f)(g.y - 4))(r - 4)(s);
  return (() => {
    const f = u - r, g = c - r;
    return (f < 0 ? -f : f) <= (g < 0 ? -g : g);
  })() ? u : c;
}, _d = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = (() => {
    if (r === "South")
      return E(o._1, o._2 + 4);
    if (r === "North")
      return E(o._1, o._2 - 4);
    if (r === "East")
      return E(o._1 + 4, o._2);
    if (r === "West")
      return E(o._1 - 4, o._2);
    a();
  })(), c = (() => {
    if (i === "South")
      return E(s._1, s._2 + 4);
    if (i === "North")
      return E(s._1, s._2 - 4);
    if (i === "East")
      return E(s._1 + 4, s._2);
    if (i === "West")
      return E(s._1 - 4, s._2);
    a();
  })(), f = (w, L, k) => !po(n)(rn(L)(k))(on(L)(k))(w), g = (w, L, k) => !po(e)(rn(L)(k))(on(L)(k))(w), l = (w, L, k, A) => t.tag === "Just" && !vr(e)(rn(w)(L))(on(w)(L))(t._1) ? t._1 : ad(n)(w)(L)(k)(A), d = (w, L, k, A) => {
    if (w === k) {
      const V = fd(n)(L)(A)(w), M = sd(n)(w)(L)(A), P = cd(n)(w)(L)(A);
      return [
        { start: E(w, L), end: E(w, M), direction: zt },
        { start: E(w, M), end: E(V, M), direction: Ht },
        { start: E(V, M), end: E(V, P), direction: zt },
        { start: E(V, P), end: E(k, P), direction: Ht },
        { start: E(k, P), end: E(k, A), direction: zt }
      ];
    }
    const H = l(w, k, L, A);
    return [
      { start: E(w, L), end: E(w, H), direction: zt },
      { start: E(w, H), end: E(k, H), direction: Ht },
      { start: E(k, H), end: E(k, A), direction: zt }
    ];
  }, _ = (w, L, k, A) => {
    if (L === A) {
      const V = gd(n)(w)(k)(L), M = id(n)(L)(w)(k), P = ud(n)(L)(w)(k);
      return [
        { start: E(w, L), end: E(M, L), direction: Ht },
        { start: E(M, L), end: E(M, V), direction: zt },
        { start: E(M, V), end: E(P, V), direction: Ht },
        { start: E(P, V), end: E(P, A), direction: zt },
        { start: E(P, A), end: E(k, A), direction: Ht }
      ];
    }
    const H = nu(n)(L)(A)(w)(k);
    return [
      { start: E(w, L), end: E(H, L), direction: Ht },
      { start: E(H, L), end: E(H, A), direction: zt },
      { start: E(H, A), end: E(k, A), direction: Ht }
    ];
  }, h = (w, L, k) => !vr(n)(rn(L)(k))(on(L)(k))(w), p = (w, L, k) => !vr(e)(rn(L)(k))(on(L)(k))(w), $ = (w, L, k, A) => {
    if (p(L, w, k) && g(k, L, A))
      return [
        { start: E(w, L), end: E(k, L), direction: Ht },
        { start: E(k, L), end: E(k, A), direction: zt }
      ];
    const H = nu(n)(L)(A)(w)(k);
    return [
      { start: E(w, L), end: E(H, L), direction: Ht },
      { start: E(H, L), end: E(H, A), direction: zt },
      { start: E(H, A), end: E(k, A), direction: Ht }
    ];
  }, m = (w, L, k, A) => {
    if (g(w, L, A) && p(A, w, k))
      return [
        { start: E(w, L), end: E(w, A), direction: zt },
        { start: E(w, A), end: E(k, A), direction: Ht }
      ];
    const H = l(w, k, L, A);
    return [
      { start: E(w, L), end: E(w, H), direction: zt },
      { start: E(w, H), end: E(k, H), direction: Ht },
      { start: E(k, H), end: E(k, A), direction: zt }
    ];
  }, N = (() => {
    if (r === "South")
      return i === "North" ? u._1 === c._1 && f(u._1, u._2, c._2) ? [{ start: E(u._1, u._2), end: E(c._1, c._2), direction: zt }] : d(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? m(u._1, u._2, c._1, c._2) : d(u._1, u._2, c._1, c._2);
    if (r === "North")
      return i === "South" ? u._1 === c._1 && f(u._1, u._2, c._2) ? [{ start: E(u._1, u._2), end: E(c._1, c._2), direction: zt }] : d(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? m(u._1, u._2, c._1, c._2) : d(u._1, u._2, c._1, c._2);
    if (r === "East")
      return i === "West" ? u._2 === c._2 && h(u._2, u._1, c._1) ? [{ start: E(u._1, u._2), end: E(c._1, c._2), direction: Ht }] : _(u._1, u._2, c._1, c._2) : i === "North" || i === "South" ? $(u._1, u._2, c._1, c._2) : d(u._1, u._2, c._1, c._2);
    if (r === "West") {
      if (i === "East")
        return u._2 === c._2 && h(u._2, u._1, c._1) ? [{ start: E(u._1, u._2), end: E(c._1, c._2), direction: Ht }] : _(u._1, u._2, c._1, c._2);
      if (i === "North" || i === "South")
        return $(u._1, u._2, c._1, c._2);
    }
    return d(u._1, u._2, c._1, c._2);
  })(), v = (() => {
    if (r === "South" || r === "North")
      return zt;
    if (r === "East" || r === "West")
      return Ht;
    a();
  })(), y = {
    start: E(c._1, c._2),
    end: E(s._1, s._2),
    direction: (() => {
      if (i === "South" || i === "North")
        return zt;
      if (i === "East" || i === "West")
        return Ht;
      a();
    })()
  };
  return u._1 === c._1 && u._2 === c._2 ? [{ start: E(o._1, o._2), end: E(s._1, s._2), direction: v }] : Z1({ start: E(o._1, o._2), end: E(u._1, u._2), direction: v })(N)(y);
}, ld = /* @__PURE__ */ z((t) => ({ x: t.position._1 * Kr - 2, y: t.position._2 * Kr - 2, w: t.size._1 * Kr + 4, h: t.size._2 * Kr + 4 })), wi = /* @__PURE__ */ Mt(G)(Ft), ne = (t) => (e) => {
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
    a();
  }
  return i;
}, dd = /* @__PURE__ */ Mt(G)(Ft), eu = (t) => (e) => {
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
    a();
  }
  return i;
}, hd = (t) => (e) => {
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
    a();
  }
  return i;
}, pd = (t) => (e) => {
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
    a();
  }
  return i;
}, ru = (t) => (n) => {
  const e = n.position._1 + n.size._1, r = n.position._2 * 2 + n.size._2, o = n.position._1 * 2 + n.size._1, i = n.position._2 + n.size._2;
  if (t === "South")
    return E(o, i * 2);
  if (t === "North")
    return E(o, n.position._2 * 2);
  if (t === "East")
    return E(e * 2, r);
  if (t === "West")
    return E(n.position._1 * 2, r);
  a();
}, ti = (t) => (n) => {
  const e = at(4);
  if (t === "South")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "North")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "East")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  if (t === "West")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  a();
}, ou = (t) => (n) => J((e) => (r) => Tt(t)(un)(n(r))([r])(e))(W), iu = (t) => (n) => (e) => (r) => {
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
}, ta = (t) => (n) => {
  const e = t.hi - t.lo, r = (t.lo + t.hi) / 2, o = n.length;
  return o === 0 ? W : wi(o === 1 ? z((i) => E(i, r))(n) : At((i) => (s) => E(s, t.lo + at(i + 1 | 0) * e / at(o + 1 | 0)))(n));
}, na = (t) => (n) => (e) => (r) => (o) => {
  const i = ou(G)((_) => _.to.node)(t), s = ou(G)((_) => _.from.node)(t), u = J((_) => (h) => X(G)(h.node)(h)(_))(W)(n), c = (_, h, p) => {
    const $ = ne(_)(u);
    if ($.tag === "Nothing")
      return E(0, 0);
    if ($.tag === "Just") {
      const m = ne(_)(e);
      if (m.tag === "Nothing") {
        const N = at(4);
        if (p === "South")
          return E($._1.position._1 * N + $._1.size._1 * N / 2, ($._1.position._2 + $._1.size._2) * N);
        if (p === "North")
          return E($._1.position._1 * N + $._1.size._1 * N / 2, $._1.position._2 * N);
        if (p === "East")
          return E(($._1.position._1 + $._1.size._1) * N, $._1.position._2 * N + $._1.size._2 * N / 2);
        if (p === "West")
          return E($._1.position._1 * N, $._1.position._2 * N + $._1.size._2 * N / 2);
        a();
      }
      if (m.tag === "Just") {
        const N = gn((v) => v.id === h)(m._1);
        if (N.tag === "Nothing") {
          const v = at(4);
          if (p === "South")
            return E($._1.position._1 * v + $._1.size._1 * v / 2, ($._1.position._2 + $._1.size._2) * v);
          if (p === "North")
            return E($._1.position._1 * v + $._1.size._1 * v / 2, $._1.position._2 * v);
          if (p === "East")
            return E(($._1.position._1 + $._1.size._1) * v, $._1.position._2 * v + $._1.size._2 * v / 2);
          if (p === "West")
            return E($._1.position._1 * v, $._1.position._2 * v + $._1.size._2 * v / 2);
          a();
        }
        if (N.tag === "Just") {
          const v = at(4);
          if (N._1.side === "North")
            return E($._1.position._1 * v + at(N._1.offset) * v, $._1.position._2 * v);
          if (N._1.side === "South")
            return E($._1.position._1 * v + at(N._1.offset) * v, ($._1.position._2 + $._1.size._2) * v);
          if (N._1.side === "East")
            return E(($._1.position._1 + $._1.size._1) * v, $._1.position._2 * v + at(N._1.offset) * v);
          if (N._1.side === "West")
            return E($._1.position._1 * v, $._1.position._2 * v + at(N._1.offset) * v);
        }
      }
    }
    a();
  }, f = dd(Ct(r)((_) => {
    if (_.nodes.length <= 2)
      return [];
    const h = at(4);
    if (1 < _.nodes.length) {
      const p = ne(_.nodes[1])(u);
      if (p.tag === "Nothing")
        return [];
      if (p.tag === "Just") {
        const $ = p._1.position._1 * h + p._1.size._1 * h / 2;
        return z((m) => E(m, $))(Tn(
          (m) => (N) => _.edgeId + ":" + m + "->" + N,
          _.nodes,
          It(1, _.nodes.length, _.nodes)
        ));
      }
      a();
    }
    return [];
  })), g = (_) => {
    const h = ne(_.from.node)(u), p = ne(_.to.node)(u);
    if (h.tag === "Just" && p.tag === "Just") {
      const $ = h._1, m = p._1, N = Lt((v) => (y) => rt.compare(v.score)(y.score))(z((v) => {
        const y = v._1, w = v._2;
        return {
          from: y,
          to: w,
          score: (() => {
            const L = (V, M, P, R, j) => {
              const et = ti(V)(M), Y = ti(V)(P);
              return et.lo < Y.hi && Y.lo < et.hi && (y === "South" ? w === "North" && j._2 > R._2 : y === "North" ? w === "South" && j._2 < R._2 : y === "East" ? w === "West" && j._1 > R._1 : y === "West" && w === "East" && j._1 < R._1) ? 0 : iu(y)(w)(R)(j);
            }, k = ru(y)($), A = ru(w)(m), H = iu(y)(w)(k)(A);
            return (() => {
              if (H > 0) {
                if (y === "South")
                  return w === "North" ? L(an, $, m, k, A) * 10 | 0 : H * 10 | 0;
                if (y === "North")
                  return w === "South" ? L(cn, $, m, k, A) * 10 | 0 : H * 10 | 0;
                if (y === "East")
                  return w === "West" ? L(Vn, $, m, k, A) * 10 | 0 : H * 10 | 0;
                if (y === "West" && w === "East")
                  return L(we, $, m, k, A) * 10 | 0;
              }
              return H * 10 | 0;
            })() + (y === "South" ? w === "North" ? 0 : 15 : y === "North" ? w === "South" ? 0 : 15 : y === "East" ? w === "West" ? 5 : 15 : y === "West" && w === "East" ? 5 : 15) | 0;
          })()
        };
      })([
        E(an, cn),
        E(Vn, cn),
        E(we, cn),
        E(an, Vn),
        E(an, we),
        E(cn, an),
        E(cn, Vn),
        E(cn, we),
        E(Vn, an),
        E(we, an),
        E(Vn, we),
        E(we, Vn)
      ]));
      if (0 < N.length)
        return { from: N[0].from, to: N[0].to };
    }
    return { from: an, to: cn };
  }, l = wi(z((_) => E(_.id, g(_)))(t)), d = (_, h, p, $, m, N) => {
    const v = at(4), y = ne(h)(u);
    if (y.tag === "Nothing")
      return E(0, 0);
    if (y.tag === "Just") {
      const w = hd(E(p, _))(o);
      if (w.tag === "Just") {
        const L = y._1.position._1 * v + w._1, k = at(4);
        if (_ === "South")
          return E(L, (y._1.position._2 + y._1.size._2) * k);
        if (_ === "North")
          return E(L, y._1.position._2 * k);
        if (_ === "East")
          return E((y._1.position._1 + y._1.size._1) * k, L);
        if (_ === "West")
          return E(y._1.position._1 * k, L);
        a();
      }
      if (w.tag === "Nothing") {
        const L = ti(_)(y._1), k = (L.lo + L.hi) / 2, A = eu(p)(ta(L)(z((M) => M.id)(Lt((M) => (P) => pt.compare(m(_)(M))(m(_)(P)))(gt(
          (M) => {
            const P = eu(M.id)(l);
            if (P.tag === "Just") {
              const R = N(P._1);
              return R === "North" ? _ === "North" : R === "South" ? _ === "South" : R === "East" ? _ === "East" : R === "West" && _ === "West";
            }
            if (P.tag === "Nothing")
              return !0;
            a();
          },
          (() => {
            const M = ne(h)($);
            if (M.tag === "Nothing")
              return [];
            if (M.tag === "Just")
              return M._1;
            a();
          })()
        ))))), H = (() => {
          if (A.tag === "Nothing")
            return k;
          if (A.tag === "Just")
            return A._1;
          a();
        })(), V = at(4);
        if (_ === "South")
          return E(H, (y._1.position._2 + y._1.size._2) * V);
        if (_ === "North")
          return E(H, y._1.position._2 * V);
        if (_ === "East")
          return E((y._1.position._1 + y._1.size._1) * V, H);
        if (_ === "West")
          return E(y._1.position._1 * V, H);
      }
    }
    a();
  };
  return z((_) => {
    const h = pd(_.edge.id)(f);
    if (h.tag === "Nothing")
      return _;
    if (h.tag === "Just")
      return {
        ..._,
        fromPos: fn(3)(_.edge.from.node) === "$d:" ? E(h._1, _.fromPos._2) : _.fromPos,
        toPos: fn(3)(_.edge.to.node) === "$d:" ? E(h._1, _.toPos._2) : _.toPos
      };
    a();
  })(z((_) => {
    if (_.from.port.tag === "Just" && _.to.port.tag === "Just")
      return {
        edge: _,
        fromPos: c(_.from.node, _.from.port._1, an),
        toPos: c(_.to.node, _.to.port._1, cn),
        fromSide: an,
        toSide: cn
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
          const m = ne($.to.node)(u);
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just") {
            const N = at(4);
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
          const m = ne($.from.node)(u);
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just") {
            const N = at(4);
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
}, ea = (t) => (e) => {
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
    a();
  }
  return i;
}, Ve = (t) => (e) => {
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
    a();
  }
  return i;
}, $d = /* @__PURE__ */ (() => {
  const t = qn.unfoldr(Ie);
  return (n) => t(Dn("IterNode", n, Ae));
})(), Li = (t) => (n) => t.gapTop + 1 * at(4) + at(n) * 2.5 * at(4), md = (t) => (n) => {
  const e = ea(n.edge.id)(t);
  if (e.tag === "Just") {
    if (e._1.partner.tag === "Just")
      return b("Just", { slot1Y: Li(e._1)(e._1.slot), splitX: e._1.partner._1.splitX, slot2Y: Li(e._1)(e._1.partner._1.slot) });
    if (e._1.partner.tag === "Nothing")
      return T;
    a();
  }
  if (e.tag === "Nothing")
    return T;
  a();
}, Nd = (t) => (n) => {
  const e = J((r) => (o) => X(G)(o.node)(o)(r))(W)(n);
  return xn(At((r) => (o) => {
    const i = Ve(o.node)(e);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just") {
      const s = i._1;
      return At((u) => (c) => {
        const f = o.edges.length, g = at(4), l = s.position._1 * g, d = s.position._2 * g, _ = s.size._2 * g, h = at((2 * f | 0) + 1 | 0), p = d + _ * at(f - u | 0) / h, $ = d + _ * at((f + 1 | 0) + u | 0) / h, m = l - g * 2.5 * at(u + 1 | 0), N = [
          { start: E(l, p), end: E(m, p), direction: Ht },
          { start: E(m, p), end: E(m, $), direction: zt },
          { start: E(m, $), end: E(l, $), direction: Ht }
        ];
        return { edge: c.id, segments: N, bends: Tn((v) => (y) => v.end, N, It(1, 3, N)), bendType: [], jumps: [], reversed: !1 };
      })(o.edges);
    }
    a();
  })(z((r) => ({ node: r._1, edges: r._2 }))($d(J((r) => (o) => Tt(G)(un)(o.from.node)([
    o
  ])(r))(W)(t)))));
}, Jd = (t) => (n) => {
  const e = J((i) => (s) => X(G)(s.node)(s)(i))(W)(n), r = (i) => {
    const s = Ve(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.position._1;
    a();
  }, o = (i) => {
    const s = Ve(i)(e);
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
}, hn = (t) => {
  const n = at(4);
  return { x: t.position._1 * n - 2, y: t.position._2 * n - 2, w: t.size._1 * n + 4, h: t.size._2 * n + 4 };
}, vd = (t) => t.from.node === t.to.node, yd = (t) => (n) => (e) => (r) => {
  const o = od(e)(_d(t)(n)(e)(r.fromSide)(r.fromPos)(r.toSide)(r.toPos));
  return {
    edge: r.edge.id,
    segments: o,
    bends: Tn((i) => (s) => i.end, o, It(1, o.length, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, Td = (t) => (n) => (e) => (r) => {
  const o = [
    { start: E(r.fromPos._1, r.fromPos._2), end: E(r.fromPos._1, t.slot1Y), direction: zt },
    { start: E(r.fromPos._1, t.slot1Y), end: E(t.splitX, t.slot1Y), direction: Ht },
    { start: E(t.splitX, t.slot1Y), end: E(t.splitX, t.slot2Y), direction: zt },
    { start: E(t.splitX, t.slot2Y), end: E(r.toPos._1, t.slot2Y), direction: Ht },
    { start: E(r.toPos._1, t.slot2Y), end: E(r.toPos._1, r.toPos._2), direction: zt }
  ];
  return {
    edge: r.edge.id,
    segments: o,
    bends: Tn((i) => (s) => i.end, o, It(1, 5, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, wd = (t) => (n) => (e) => {
  const r = Ve(t.edge.from.node)(e);
  if (r.tag === "Just") {
    const i = Ve(t.edge.to.node)(e);
    return i.tag === "Just" ? gt(
      (s) => !(s.h === hn(r._1).h && s.w === hn(r._1).w && s.x === hn(r._1).x && s.y === hn(r._1).y) && !(s.h === hn(i._1).h && s.w === hn(i._1).w && s.x === hn(i._1).x && s.y === hn(i._1).y),
      n
    ) : gt((s) => !(s.h === hn(r._1).h && s.w === hn(r._1).w && s.x === hn(r._1).x && s.y === hn(r._1).y), n);
  }
  const o = Ve(t.edge.to.node)(e);
  return o.tag === "Just" ? gt((i) => !(i.h === hn(o._1).h && i.w === hn(o._1).w && i.x === hn(o._1).x && i.y === hn(o._1).y), n) : gt((i) => !0, n);
}, Ld = (t) => (n) => {
  const e = ea(n.edge.id)(t);
  if (e.tag === "Just")
    return b("Just", Li(e._1)(e._1.slot));
  if (e.tag === "Nothing")
    return T;
  a();
}, Ed = (t) => (n) => (e) => (r) => (o) => {
  const i = J((f) => (g) => X(G)(g.node)(g)(f))(W)(n), s = ld(n), u = na(gt((f) => f.from.node !== f.to.node, t))(n)(e)(r)(o), c = Kc(u)(n);
  return [
    ...Nd(gt(vd, t))(n),
    ...J((f) => (g) => {
      const l = wd(g)(s)(i), d = [...l, ...f.edgeObstacles], _ = md(c)(g), h = (() => {
        if (_.tag === "Just")
          return Td(_._1)(l)(d)(g);
        if (_.tag === "Nothing")
          return yd(Ld(c)(g))(l)(d)(g);
        a();
      })();
      return { results: [...f.results, h], edgeObstacles: [...f.edgeObstacles, ...j1(h.segments)] };
    })({ results: [], edgeObstacles: [] })(Jd(u)(n)).results
  ];
}, he = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, pe = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, bd = (t) => (n) => (e) => {
  if (t.start._1 !== n.start._1)
    return T;
  const r = pe(he(t.start._2)(t.end._2))(he(n.start._2)(n.end._2)), o = he(pe(t.start._2)(t.end._2))(pe(n.start._2)(n.end._2));
  return r < o ? b("Just", { position: E(t.start._1, (r + o) / 2), crossingEdge: e }) : T;
}, kd = (t) => (n) => (e) => {
  if (t.start._2 !== n.start._2)
    return T;
  const r = pe(he(t.start._1)(t.end._1))(he(n.start._1)(n.end._1)), o = he(pe(t.start._1)(t.end._1))(pe(n.start._1)(n.end._1));
  return r < o ? b("Just", { position: E((r + o) / 2, t.start._2), crossingEdge: e }) : T;
}, xd = (t) => (n) => (e) => {
  if (t.direction === "H")
    return kd(t)(n)(e);
  if (t.direction === "V")
    return bd(t)(n)(e);
  a();
}, Cd = (t) => (n) => (e) => {
  const r = t + 1 | 0, o = r < 1 ? e : It(r, e.length, e);
  return Ct(n.segments)((i) => Ct(o)((s) => yt((u) => xd(i)(u)(s.edge))(gt(
    (u) => u.direction === "H" ? i.direction === "H" : u.direction === "V" && i.direction === "V",
    s.segments
  ))));
}, Sd = (t) => (n) => (e) => n.start._1 > he(t.start._1)(t.end._1) && n.start._1 < pe(t.start._1)(t.end._1) && t.start._2 > he(n.start._2)(n.end._2) && t.start._2 < pe(n.start._2)(n.end._2) ? b("Just", { position: E(n.start._1, t.start._2), crossingEdge: e }) : T, Gd = (t) => (n) => Ct(gt((e) => e.direction === "H", t.segments))((e) => Ct(n)((r) => yt((o) => Sd(e)(o)(r.edge))(gt(
  (o) => o.direction === "V",
  r.segments
)))), Pd = (t) => (n) => (e) => [
  ...Gd(n)(gt((r) => r.edge !== n.edge, e)),
  ...Cd(t)(n)(e)
], $o = /* @__PURE__ */ (() => {
  const t = {
    eq: (n) => (e) => n._1 === e._1 && (n._2 === "North" ? e._2 === "North" : n._2 === "South" ? e._2 === "South" : n._2 === "East" ? e._2 === "East" : n._2 === "West" && e._2 === "West")
  };
  return {
    compare: (n) => (e) => {
      const r = G.compare(n._1)(e._1);
      if (r === "LT")
        return Nn;
      if (r === "GT")
        return Jn;
      if (n._2 === "North")
        return e._2 === "North" ? kn : Nn;
      if (e._2 === "North")
        return Jn;
      if (n._2 === "South")
        return e._2 === "South" ? kn : Nn;
      if (e._2 === "South")
        return Jn;
      if (n._2 === "East")
        return e._2 === "East" ? kn : Nn;
      if (e._2 === "East")
        return Jn;
      if (n._2 === "West" && e._2 === "West")
        return kn;
      a();
    },
    Eq0: () => t
  };
})(), Ad = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = T;
      continue;
    }
    if (s.tag === "Node") {
      const u = $o.compare(t)(s._3);
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
}, Id = /* @__PURE__ */ Mt(G)(Ft), ni = (t) => (e) => {
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
    a();
  }
  return i;
}, Rd = /* @__PURE__ */ Mt($o)(Ft), su = /* @__PURE__ */ (() => {
  const t = qn.unfoldr(Ie);
  return (n) => t(Dn("IterNode", n, Ae));
})(), Ye = (t) => (n) => (e) => (r) => {
  const o = Ad(E(n, e))(t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just")
    return o._1;
  a();
}, ra = (t) => (n) => (e) => {
  const r = Id(xn(z((s) => At((u) => (c) => E(c, u))(s))(t))), o = (s, u) => {
    if (s === "South") {
      const c = ni(u.to.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      a();
    }
    if (s === "North") {
      const c = ni(u.from.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      a();
    }
    return 0;
  }, i = (s) => J((u) => (c) => Ln(
    $o.compare,
    yn,
    Rd(z((f) => E(E(f._1, s), f._2))(su(ta({
      lo: 0,
      hi: (() => {
        const f = ni(c._1)(e);
        if (f.tag === "Just")
          return f._1._1;
        if (f.tag === "Nothing")
          return fn(3)(c._1) === "$d:" ? 0 : 1;
        a();
      })()
    })(z((f) => f.id)(Lt((f) => (g) => rt.compare(o(s, f))(o(s, g)))(c._2)))))),
    u
  ))(W)(su(J((u) => (c) => c.from.node === c.to.node ? u : s === "South" ? Tt(G)(un)(c.from.node)([c])(u) : s === "North" ? Tt(G)(un)(c.to.node)([c])(u) : u)(W)(n)));
  return Ln($o.compare, yn, i(cn), i(an));
}, oa = (t) => t, ia = (t) => t, sa = (t) => t, Fd = /* @__PURE__ */ J((t) => (n) => X(G)(n)()(t))(W), Bd = /* @__PURE__ */ (() => {
  const t = qn.unfoldr((n) => {
    if (n.tag === "Nil")
      return T;
    if (n.tag === "Cons")
      return b("Just", E(n._1, n._2));
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
    return e(n, Ot);
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
    a();
  }
  return i;
}, Cn = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, Mn = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, Rn = /* @__PURE__ */ Mt(G)(Ft), ei = /* @__PURE__ */ hg(G), Sr = /* @__PURE__ */ (() => {
  const t = qn.unfoldr(Ie);
  return (n) => t(Dn("IterNode", n, Ae));
})(), uu = (t) => (e) => {
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
}, Qd = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, Dd = (t) => (e) => {
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
    a();
  }
  return i;
}, cu = /* @__PURE__ */ sa("VDown"), au = /* @__PURE__ */ sa("VUp"), Wd = /* @__PURE__ */ ia("ForwardPhase"), qd = /* @__PURE__ */ ia("StackPhase"), fu = /* @__PURE__ */ oa("HRight"), gu = /* @__PURE__ */ oa("HLeft"), Hd = (t) => (n) => (e) => {
  const r = J((u) => (c) => Tt(G)(jt)(c.tgt)(1)(u))(W)(t), o = Bd(Fd([
    ...z((u) => u.src)(t),
    ...z((u) => u.tgt)(t),
    ...(() => {
      const u = (c, f) => {
        if (c.tag === "Leaf")
          return f;
        if (c.tag === "Node")
          return u(c._5, qt("Cons", c._4, u(c._6, f)));
        a();
      };
      return bt(Xt.foldr, u(n, Ot));
    })()
  ])), i = J((u) => (c) => Tt(G)(un)(c.src)([{ target: c.tgt, sep: c.sep }])(u))(W)(t);
  return ((u) => (c) => (f) => {
    let g = u, l = c, d = f, _ = !0, h;
    for (; _; ) {
      const p = g, $ = l, m = d, N = Qt((v) => T, (v) => (y) => b("Just", { head: v, tail: y }), p);
      if (N.tag === "Nothing") {
        _ = !1, h = m;
        continue;
      }
      if (N.tag === "Just") {
        const v = Z(N._1.head)(m), y = (() => {
          if (v.tag === "Nothing")
            return 0;
          if (v.tag === "Just")
            return v._1;
          a();
        })(), w = J((L) => (k) => {
          const A = Z(k.target)(L.result), H = y + k.sep, V = Z(k.target)(L.indeg), M = (() => {
            if (V.tag === "Nothing")
              return -1;
            if (V.tag === "Just")
              return V._1 - 1 | 0;
            a();
          })();
          return {
            newQueue: M === 0 ? [...L.newQueue, k.target] : L.newQueue,
            result: X(G)(k.target)((() => {
              if (A.tag === "Nothing")
                return H;
              if (A.tag === "Just") {
                if (e === "VDown")
                  return Cn(A._1)(H);
                if (e === "VUp")
                  return Mn(A._1)(H);
              }
              a();
            })())(L.result),
            indeg: X(G)(k.target)(M)(L.indeg)
          };
        })({ newQueue: [], result: m, indeg: $ })((() => {
          const L = Z(N._1.head)(i);
          if (L.tag === "Nothing")
            return [];
          if (L.tag === "Just")
            return L._1;
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
  ))(W)(J((u) => (c) => X(G)(c)(0)(u))(W)(o));
}, zd = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, qt("Cons", i._4, n(i._6, s)));
    a();
  }, e = bt(Xt.foldr, n(t, Ot)), r = J(Cn)(999999)(e);
  if (r === 0 || e.length === 0)
    return t;
  const o = (i) => {
    if (i.tag === "Leaf")
      return W;
    if (i.tag === "Node")
      return Wt("Node", i._1, i._2, i._3, i._4 - r, o(i._5), o(i._6));
    a();
  };
  return o(t);
}, Od = (t) => (n) => {
  const e = (o, i, s) => fn(3)(i) === "$d:" && Vu(
    (u) => fn(3)(u) === "$d:",
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
      const N = l, v = d, y = _, w = h, L = p, k = v.length;
      if (L >= k) {
        $ = !1, m = N;
        continue;
      }
      const A = L >= 0 && L < v.length ? b("Just", v[L]) : T, H = (() => {
        if (A.tag === "Nothing")
          return "";
        if (A.tag === "Just")
          return A._1;
        a();
      })(), V = e(t, H);
      if (L === (k - 1 | 0) || V) {
        const M = (() => {
          if (V) {
            const P = Z(H)(t.preds), R = (() => {
              if (P.tag === "Nothing")
                return [];
              if (P.tag === "Just")
                return P._1;
              a();
            })();
            if (0 < R.length) {
              const j = y - 1 | 0, et = Z(R[0])(t.nodeIndex);
              if (et.tag === "Nothing")
                return j;
              if (et.tag === "Just")
                return et._1;
              a();
            }
          }
          return y - 1 | 0;
        })();
        l = J((P) => (R) => {
          if (R >= 0 && R < v.length) {
            const j = v[R];
            return e(t, j) ? P : J((et) => (Y) => {
              const I = Z(Y)(t.nodeIndex), x = (() => {
                if (I.tag === "Nothing")
                  return 0;
                if (I.tag === "Just")
                  return I._1;
                a();
              })();
              return x < w || x > M ? X(G)(Y + "→" + j)()(et) : et;
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
            const Y = Z(et)(t.nodeIndex), I = (() => {
              if (Y.tag === "Nothing")
                return 0;
              if (Y.tag === "Just")
                return Y._1;
              a();
            })();
            return I < w || I > M ? X(G)(et + "→")()(j) : j;
          })(P)((() => {
            const j = Z("")(t.preds);
            if (j.tag === "Nothing")
              return [];
            if (j.tag === "Just")
              return j._1;
            a();
          })());
        })(N)(Yt(0, L)), d = v, _ = y, h = M, p = L + 1 | 0;
        continue;
      }
      l = N, d = v, _ = y, h = w, p = L + 1 | 0;
    }
    return m;
  };
  return n.length < 3 ? W : J((o) => (i) => {
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
  })(W)(Yt(1, n.length - 2 | 0));
}, ua = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, qt("Cons", i._4, n(i._6, s)));
    a();
  }, e = n(t, Ot), r = (i) => (s) => {
    let u = i, c = s, f = !0, g;
    for (; f; ) {
      const l = u, d = c;
      if (d.tag === "Nil") {
        f = !1, g = l;
        continue;
      }
      if (d.tag === "Cons") {
        u = Mn(l)(d._1), c = d._2;
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
        u = Cn(l)(d._1), c = d._2;
        continue;
      }
      a();
    }
    return g;
  };
  return r(-999999)(e) - o(999999)(e);
}, hr = (t) => (n) => ((r) => (o) => {
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
})())([n]), Vd = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (f) => (g) => {
  const l = (x, C, D) => {
    const S = x.from.node === C ? x.from.port : x.to.node === C ? x.to.port : T;
    if (S.tag === "Just") {
      const F = Z(C)(o);
      if (F.tag === "Just") {
        const Q = gn((K) => K.id === S._1)(F._1);
        if (Q.tag === "Just") {
          const K = at(Q._1.offset) * at(4);
          return D === "North" || D === "South" ? K : 0;
        }
        if (Q.tag === "Nothing") {
          const K = Z(C)(r), O = Ye(s)(x.id)(D)((() => {
            if (K.tag === "Nothing")
              return 0.5;
            if (K.tag === "Just")
              return K._1._1 / 2;
            a();
          })());
          return D === "North" || D === "South" ? O : 0;
        }
        a();
      }
      if (F.tag === "Nothing") {
        const Q = Z(C)(r), K = Ye(s)(x.id)(D)((() => {
          if (Q.tag === "Nothing")
            return 0.5;
          if (Q.tag === "Just")
            return Q._1._1 / 2;
          a();
        })());
        return D === "North" || D === "South" ? K : 0;
      }
      a();
    }
    if (S.tag === "Nothing") {
      const F = Z(C)(r), Q = Ye(s)(x.id)(D)((() => {
        if (F.tag === "Nothing")
          return 0.5;
        if (F.tag === "Just")
          return F._1._1 / 2;
        a();
      })());
      return D === "North" || D === "South" ? Q : 0;
    }
    a();
  }, d = (x, C) => {
    if (x.from.node === C) {
      if (g === "HRight")
        return an;
      if (g === "HLeft")
        return cn;
      a();
    }
    if (g === "HRight")
      return cn;
    if (g === "HLeft")
      return an;
    a();
  }, _ = (x, C, D) => J((S) => (F) => X(G)(F)((() => {
    const Q = Z(F)(S);
    if (Q.tag === "Nothing")
      return 0 + C;
    if (Q.tag === "Just")
      return Q._1 + C;
    a();
  })())(S))(D)(hr(c)(x)), h = (() => {
    if (g === "HRight")
      return e;
    if (g === "HLeft")
      return $n(e);
    a();
  })(), p = (x) => {
    const C = Z(x)(r);
    if (C.tag === "Nothing")
      return 1;
    if (C.tag === "Just")
      return C._1._1;
    a();
  }, $ = Rn(xn(At((x) => (C) => z((D) => E(D, x))(C))(e))), m = (x, C) => fn(3)(x) === "$d:" && fn(3)(C) === "$d:" || fn(3)(x) === "$d:" || fn(3)(C) === "$d:" ? 10 : at(t.nodeGap), N = J((x) => (C) => ei((D) => b(
    "Just",
    [
      ...(() => {
        if (D.tag === "Nothing")
          return [];
        if (D.tag === "Just")
          return D._1;
        a();
      })(),
      C
    ]
  ))(C.to.node)(x))(W)(i), v = J((x) => (C) => ei((D) => b(
    "Just",
    [
      ...(() => {
        if (D.tag === "Nothing")
          return [];
        if (D.tag === "Just")
          return D._1;
        a();
      })(),
      C
    ]
  ))(C.from.node)(x))(W)(i), y = xn(e), w = J((x) => (C) => {
    const D = Z(C)(c.root), S = (() => {
      if (D.tag === "Nothing")
        return C;
      if (D.tag === "Just")
        return D._1;
      a();
    })();
    return C === S ? x : ei((F) => b(
      "Just",
      (() => {
        if (F.tag === "Nothing")
          return !0;
        if (F.tag === "Just")
          return F._1;
        a();
      })() && fn(3)(C) === "$d:"
    ))(S)(x);
  })(Rn(z((x) => E(x, !0))(je(G.compare)((() => {
    const x = (C, D) => {
      if (C.tag === "Leaf")
        return D;
      if (C.tag === "Node")
        return x(C._5, qt("Cons", C._4, x(C._6, D)));
      a();
    };
    return bt(Xt.foldr, x(c.root, Ot));
  })()))))(y), L = (x, C) => {
    const D = x.free, S = Z(D)(c.root), F = (() => {
      if (S.tag === "Nothing")
        return D;
      if (S.tag === "Just")
        return S._1;
      a();
    })(), Q = Z(F)(w), K = (() => {
      if (Q.tag === "Nothing")
        return !0;
      if (Q.tag === "Just")
        return Q._1;
      a();
    })();
    return J((O) => (B) => {
      if (O.edge.tag === "Just")
        return O;
      if (O.edge.tag === "Nothing") {
        if ((() => {
          const st = Z(F)(C.su);
          return !K && (() => {
            const _t = Z(B.from.node)($);
            return B.from.node !== B.to.node && (() => {
              const Pt = Z(B.to.node)($);
              return (() => {
                if (_t.tag === "Nothing")
                  return -1;
                if (_t.tag === "Just")
                  return _t._1;
                a();
              })() === (() => {
                if (Pt.tag === "Nothing")
                  return -1;
                if (Pt.tag === "Just")
                  return Pt._1;
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
          return O;
        const nt = B.from.node === D ? B.to.node : B.from.node, U = Z(nt)(c.root), tt = (() => {
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
        })() ? { ...O, edge: b("Just", B), hasEdges: !0 } : { ...O, hasEdges: O.hasEdges || ot };
      }
      a();
    })({ edge: T, hasEdges: !1 })((() => {
      if (x.isRoot) {
        if (g === "HRight") {
          const O = Z(D)(N);
          if (O.tag === "Nothing")
            return [];
          if (O.tag === "Just")
            return O._1;
          a();
        }
        if (g === "HLeft") {
          const O = Z(D)(v);
          if (O.tag === "Nothing")
            return [];
          if (O.tag === "Just")
            return O._1;
        }
        a();
      }
      if (g === "HRight") {
        const O = Z(D)(v);
        if (O.tag === "Nothing")
          return [];
        if (O.tag === "Just")
          return O._1;
        a();
      }
      if (g === "HLeft") {
        const O = Z(D)(N);
        if (O.tag === "Nothing")
          return [];
        if (O.tag === "Just")
          return O._1;
      }
      a();
    })());
  }, k = (x, C, D, S) => {
    const F = (() => {
      if (f === "VDown")
        return -1e18;
      if (f === "VUp")
        return 1e18;
      a();
    })(), Q = { free: C, isRoot: D }, K = L(Q, S);
    if (K.edge.tag === "Nothing")
      return K.hasEdges ? { thresh: F, state: { ...S, queue: [...S.queue, Q] } } : { thresh: F, state: S };
    if (K.edge.tag === "Just") {
      const O = K.edge._1.from.node === C ? K.edge._1.to.node : K.edge._1.from.node;
      return {
        thresh: (() => {
          const B = Z((() => {
            const ot = Z(O)(c.root);
            if (ot.tag === "Nothing")
              return O;
            if (ot.tag === "Just")
              return ot._1;
            a();
          })())(S.x), nt = Z(O)(u), U = Z(C)(u), tt = (() => {
            if (B.tag === "Just")
              return B._1;
            if (B.tag === "Nothing")
              return T;
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
            O,
            (() => {
              if (D) {
                if (g === "HRight")
                  return an;
                if (g === "HLeft")
                  return cn;
                a();
              }
              if (g === "HRight")
                return cn;
              if (g === "HLeft")
                return an;
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
              if (D) {
                if (g === "HRight")
                  return cn;
                if (g === "HLeft")
                  return an;
                a();
              }
              if (g === "HRight")
                return an;
              if (g === "HLeft")
                return cn;
              a();
            })()
          );
        })(),
        state: {
          ...S,
          su: X(G)((() => {
            const B = Z(K.edge._1.from.node)(c.root);
            if (B.tag === "Nothing")
              return K.edge._1.from.node;
            if (B.tag === "Just")
              return B._1;
            a();
          })())(!0)(X(G)((() => {
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
  }, A = (x, C, D, S) => {
    const F = C === x, Q = Z(C)(c.align), K = (() => {
      if (Q.tag === "Nothing")
        return C === x;
      if (Q.tag === "Just")
        return Q._1 === x;
      a();
    })();
    if (!(F || K))
      return { thresh: D, state: S };
    const O = (() => {
      if (f === "VDown")
        return F && D <= -1e18;
      if (f === "VUp")
        return F && D >= 1e18;
      a();
    })() ? k(x, C, !0, S) : { thresh: D, state: S };
    return (() => {
      if (f === "VDown")
        return O.thresh <= -1e18 && K;
      if (f === "VUp")
        return O.thresh >= 1e18 && K;
      a();
    })() ? k(x, C, !1, O.state) : O;
  }, H = (x) => (C) => (D) => {
    const S = Z(D)(n.nodeIndex), F = (() => {
      if (S.tag === "Nothing")
        return 0;
      if (S.tag === "Just")
        return S._1;
      a();
    })(), Q = gn((U) => Gn(Xn)(D)(U))(h), K = (() => {
      if (Q.tag === "Nothing")
        return [];
      if (Q.tag === "Just")
        return Q._1;
      a();
    })(), O = K.length;
    if ((() => {
      if (f === "VDown")
        return F <= 0;
      if (f === "VUp")
        return F >= (O - 1 | 0);
      a();
    })()) {
      const U = A(x, D, C.thresh, C.st);
      return { ...C, st: U.state, thresh: U.thresh };
    }
    const B = (() => {
      if (f === "VDown")
        return F - 1 | 0;
      if (f === "VUp")
        return F + 1 | 0;
      a();
    })(), nt = B >= 0 && B < K.length ? b("Just", K[B]) : T;
    if (nt.tag === "Nothing")
      return C;
    if (nt.tag === "Just") {
      const U = Z(nt._1)(c.root), tt = (() => {
        if (U.tag === "Nothing")
          return nt._1;
        if (U.tag === "Just")
          return U._1;
        a();
      })(), ot = A(x, D, C.thresh, V(tt)(C.st)), st = (() => {
        const Zt = Z(x)(ot.state.sink);
        if (Zt.tag === "Nothing")
          return x === x;
        if (Zt.tag === "Just")
          return Zt._1 === x;
        a();
      })() ? {
        ...ot.state,
        sink: X(G)(x)((() => {
          const Zt = Z(tt)(ot.state.sink);
          if (Zt.tag === "Nothing")
            return tt;
          if (Zt.tag === "Just")
            return Zt._1;
          a();
        })())(ot.state.sink)
      } : ot.state, _t = Z(tt)(st.sink), Pt = (() => {
        if (_t.tag === "Nothing")
          return tt;
        if (_t.tag === "Just")
          return _t._1;
        a();
      })(), vt = Z(x)(st.sink), Vt = (() => {
        if (vt.tag === "Nothing")
          return x;
        if (vt.tag === "Just")
          return vt._1;
        a();
      })();
      if (Vt === Pt) {
        const Zt = Z(tt)(st.x), Hn = (() => {
          if (Zt.tag === "Just")
            return Zt._1;
          if (Zt.tag === "Nothing")
            return T;
          a();
        })(), Fe = (() => {
          if (Hn.tag === "Nothing")
            return 0;
          if (Hn.tag === "Just")
            return Hn._1;
          a();
        })(), ve = Z(x)(st.x), Zn = (() => {
          if (ve.tag === "Just")
            return ve._1;
          if (ve.tag === "Nothing")
            return T;
          a();
        })(), xt = (() => {
          if (Zn.tag === "Nothing")
            return 0;
          if (Zn.tag === "Just")
            return Zn._1;
          a();
        })(), St = m(D, nt._1), ye = Z(nt._1)(u), Te = Z(D)(u), Be = (() => {
          if (ye.tag === "Nothing")
            return 0;
          if (ye.tag === "Just")
            return ye._1;
          a();
        })() - (() => {
          if (Te.tag === "Nothing")
            return 0;
          if (Te.tag === "Just")
            return Te._1;
          a();
        })();
        if (f === "VDown") {
          const te = Mn(Fe + Be + p(nt._1) + St)(ot.thresh);
          return {
            st: { ...st, x: X(G)(x)(b("Just", C.initial ? te : Mn(xt)(te)))(st.x) },
            initial: !1,
            thresh: ot.thresh
          };
        }
        if (f === "VUp") {
          const te = Cn(Fe + Be - St - p(D))(ot.thresh);
          return {
            st: { ...st, x: X(G)(x)(b("Just", C.initial ? te : Cn(xt)(te)))(st.x) },
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
          return T;
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
          return T;
        a();
      })(), ut = (() => {
        if (it.tag === "Nothing")
          return 0;
        if (it.tag === "Just")
          return it._1;
        a();
      })(), $t = at(t.nodeGap), Nt = Z(D)(u), Rt = Z(nt._1)(u), Gt = (() => {
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
              tgt: Pt,
              sep: (() => {
                if (f === "VDown")
                  return ut + Gt - lt - p(nt._1) - $t;
                if (f === "VUp")
                  return ut + Gt + p(D) + $t - lt;
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
  }, V = (x) => (C) => {
    const D = Z(x)(C.x), S = (() => {
      if (D.tag === "Just")
        return D._1;
      if (D.tag === "Nothing")
        return T;
      a();
    })();
    if (S.tag === "Just")
      return C;
    if (S.tag === "Nothing") {
      const F = J(H(x))({
        st: { ...C, x: X(G)(x)(b("Just", 0))(C.x) },
        initial: !0,
        thresh: (() => {
          if (f === "VDown")
            return -1e18;
          if (f === "VUp")
            return 1e18;
          a();
        })()
      })(hr(c)(x));
      return { ...F.st, blockFinished: X(G)(x)(!0)(F.st.blockFinished) };
    }
    a();
  }, M = J((x) => (C) => J((D) => (S) => {
    const F = Z(S)(c.root), Q = (() => {
      if (F.tag === "Nothing")
        return S;
      if (F.tag === "Just")
        return F._1;
      a();
    })();
    return Q === S ? V(Q)(D) : D;
  })(x)((() => {
    if (f === "VDown")
      return C;
    if (f === "VUp")
      return $n(C);
    a();
  })()))({
    x: Rn(z((x) => E(x, T))(y)),
    sink: Rn(z((x) => E(x, x))(y)),
    classEdges: [],
    su: W,
    blockFinished: W,
    queue: []
  })(h), P = Hd(M.classEdges)(M.sink)(f), R = (x, C, D, S) => {
    const F = Z(C)(S), Q = Z(C)(u);
    return (() => {
      if (F.tag === "Nothing")
        return 0;
      if (F.tag === "Just")
        return F._1;
      a();
    })() + (() => {
      if (Q.tag === "Nothing")
        return 0;
      if (Q.tag === "Just")
        return Q._1;
      a();
    })() + l(x, C, D);
  }, j = Rn(z((x) => E(x, !0))(je(G.compare)((() => {
    const x = (C, D) => {
      if (C.tag === "Leaf")
        return D;
      if (C.tag === "Node")
        return x(C._5, qt("Cons", C._4, x(C._6, D)));
      a();
    };
    return bt(Xt.foldr, x(c.root, Ot));
  })()))), et = (x) => (C) => (D) => {
    const S = L(D, { su: C.su, blockFinished: j }), F = {
      phase: x,
      ppFree: D.free,
      ppIsRoot: D.isRoot,
      edgeId: T,
      delta: 0,
      avail: 0,
      shift: 0,
      freeSu: (() => {
        const Q = Z((() => {
          const K = Z(D.free)(c.root);
          if (K.tag === "Nothing")
            return D.free;
          if (K.tag === "Just")
            return K._1;
          a();
        })())(C.su);
        if (Q.tag === "Nothing")
          return !1;
        if (Q.tag === "Just")
          return Q._1;
        a();
      })(),
      hasEdges: S.hasEdges,
      candCount: (() => {
        if (D.isRoot) {
          if (g === "HRight") {
            const Q = Z(D.free)(N);
            if (Q.tag === "Nothing")
              return 0;
            if (Q.tag === "Just")
              return Q._1.length;
            a();
          }
          if (g === "HLeft") {
            const Q = Z(D.free)(v);
            if (Q.tag === "Nothing")
              return 0;
            if (Q.tag === "Just")
              return Q._1.length;
          }
          a();
        }
        if (g === "HRight") {
          const Q = Z(D.free)(v);
          if (Q.tag === "Nothing")
            return 0;
          if (Q.tag === "Just")
            return Q._1.length;
          a();
        }
        if (g === "HLeft") {
          const Q = Z(D.free)(N);
          if (Q.tag === "Nothing")
            return 0;
          if (Q.tag === "Just")
            return Q._1.length;
        }
        a();
      })()
    };
    if (S.edge.tag === "Nothing")
      return { ...C, stack: [...C.stack, D], trace: [...C.trace, F], x: C.x };
    if (S.edge.tag === "Just") {
      const Q = S.edge._1.from.node === D.free ? E(S.edge._1.from.node, S.edge._1.to.node) : E(S.edge._1.to.node, S.edge._1.from.node), K = R(S.edge._1, Q._1, d(S.edge._1, Q._1), C.x) - R(S.edge._1, Q._2, d(S.edge._1, Q._2), C.x), O = Z(Q._1)(c.root), B = (() => {
        if (O.tag === "Nothing")
          return Q._1;
        if (O.tag === "Just")
          return O._1;
        a();
      })(), nt = { ...F, edgeId: b("Just", S.edge._1.id), delta: K };
      if (K > 0 && K < 1e300) {
        const U = J((st) => (_t) => {
          const Pt = Z(_t)($), vt = (() => {
            if (Pt.tag === "Nothing")
              return -1;
            if (Pt.tag === "Just")
              return Pt._1;
            a();
          })();
          if (vt >= 0 && vt < e.length) {
            const mt = e[vt], lt = Z(_t)(n.nodeIndex), dt = (() => {
              if (lt.tag === "Nothing")
                return -2;
              if (lt.tag === "Just")
                return lt._1 - 1 | 0;
              a();
            })();
            return dt >= 0 && dt < mt.length ? Cn(st)((() => {
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
          return ht >= 0 && ht < 0 ? Cn(st)((() => {
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
        })(K)(hr(c)(B)), tt = U > 0 ? -U : 0, ot = { ...C, x: U > 0 ? _(B, tt, C.x) : C.x, trace: [...C.trace, { ...nt, avail: U, shift: tt }] };
        return U > 0 ? ot : { ...ot, stack: [...ot.stack, D] };
      }
      if (K < 0 && -K < 1e300) {
        const U = J((st) => (_t) => {
          const Pt = Z(_t)($), vt = (() => {
            if (Pt.tag === "Nothing")
              return -1;
            if (Pt.tag === "Just")
              return Pt._1;
            a();
          })();
          if (vt >= 0 && vt < e.length) {
            const mt = e[vt], lt = Z(_t)(n.nodeIndex), dt = (() => {
              if (lt.tag === "Nothing")
                return 0;
              if (lt.tag === "Just")
                return lt._1 + 1 | 0;
              a();
            })();
            return dt >= 0 && dt < mt.length ? Cn(st)((() => {
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
          return ht >= 0 && ht < 0 ? Cn(st)((() => {
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
        })(-K)(hr(c)(B)), tt = U > 0 ? U : 0, ot = { ...C, x: U > 0 ? _(B, tt, C.x) : C.x, trace: [...C.trace, { ...nt, avail: U, shift: tt }] };
        return U > 0 ? ot : { ...ot, stack: [...ot.stack, D] };
      }
      return { ...C, stack: [...C.stack, D], trace: [...C.trace, nt], x: C.x };
    }
    a();
  }, Y = J(et(Wd))({
    x: Rn(z((x) => E(
      x,
      (() => {
        const C = Z(x)(c.root), D = (() => {
          if (C.tag === "Nothing")
            return x;
          if (C.tag === "Just")
            return C._1;
          a();
        })(), S = Z(D)(M.x), F = Z((() => {
          const K = Z(D)(M.sink);
          if (K.tag === "Nothing")
            return D;
          if (K.tag === "Just")
            return K._1;
          a();
        })())(P), Q = (() => {
          if (S.tag === "Just")
            return S._1;
          if (S.tag === "Nothing")
            return T;
          a();
        })();
        return (() => {
          if (Q.tag === "Nothing")
            return 0;
          if (Q.tag === "Just")
            return Q._1;
          a();
        })() + (() => {
          if (F.tag === "Nothing")
            return 0;
          if (F.tag === "Just")
            return F._1;
          a();
        })();
      })()
    ))(y)),
    su: M.su,
    stack: [],
    trace: []
  })(M.queue), I = J(et(qd))({ ...Y, stack: [] })($n(Y.stack));
  return { x: I.x, queue: M.queue, trace: I.trace };
}, Yd = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (f) => (g) => Vd(t)(n)(e)(r)(o)(i)(s)(u)(c)(f)(g).x, Xd = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = (c, f, g) => {
    const l = Z(f)(e), d = (() => {
      if (l.tag === "Nothing")
        return 0.5;
      if (l.tag === "Just")
        return l._1._1 / 2;
      a();
    })(), _ = c.from.node === f ? c.from.port : c.to.node === f ? c.to.port : T;
    if (_.tag === "Just") {
      const h = Z(f)(n);
      if (h.tag === "Just") {
        const p = gn(($) => $.id === _._1)(h._1);
        if (p.tag === "Just") {
          const $ = at(p._1.offset) * at(4);
          return g === "North" || g === "South" ? $ : 0;
        }
        if (p.tag === "Nothing") {
          const $ = Ye(o)(c.id)(g)(d);
          return g === "North" || g === "South" ? $ : 0;
        }
        a();
      }
      if (h.tag === "Nothing") {
        const p = Ye(o)(c.id)(g)(d);
        return g === "North" || g === "South" ? p : 0;
      }
      a();
    }
    if (_.tag === "Nothing") {
      const h = Ye(o)(c.id)(g)(d);
      return g === "North" || g === "South" ? h : 0;
    }
    a();
  }, u = (c) => (f) => (g) => (l) => {
    let d = c, _ = f, h = g, p = l, $ = !0, m;
    for (; $; ) {
      const N = d, v = _, y = h, L = Qt((k) => T, (k) => (A) => b("Just", { head: k, tail: A }), p);
      if (L.tag === "Nothing") {
        $ = !1, m = N;
        continue;
      }
      if (L.tag === "Just") {
        const k = L._1.head, A = gn((V) => V.from.node === y && V.to.node === k || V.from.node === k && V.to.node === y)(r), H = (() => {
          if (A.tag === "Nothing")
            return v + 0;
          if (A.tag === "Just")
            return v + (s(A._1, y, A._1.from.node === y ? an : cn) - s(
              A._1,
              k,
              A._1.from.node === k ? an : cn
            ));
          a();
        })();
        d = X(G)(k)(H)(N), _ = H, h = k, p = L._1.tail;
        continue;
      }
      a();
    }
    return m;
  };
  return J((c) => (f) => {
    const g = Qt((_) => T, (_) => (h) => b("Just", { head: _, tail: h }), hr(t)(f)), l = (() => {
      if (g.tag === "Nothing")
        return X(G)(f)(0)(W);
      if (g.tag === "Just")
        return u(X(G)(g._1.head)(0)(W))(0)(g._1.head)(g._1.tail);
      a();
    })(), d = J((_) => (h) => Mn(_)(-h._2))(0)(Sr(l));
    return J((_) => (h) => X(G)(h._1)(h._2 + d)(_))(c)(Sr(l));
  })(W)(je(G.compare)((() => {
    const c = (f, g) => {
      if (f.tag === "Leaf")
        return g;
      if (f.tag === "Node")
        return c(f._5, qt("Cons", f._4, c(f._6, g)));
      a();
    };
    return bt(Xt.foldr, c(t.root, Ot));
  })()));
}, Ud = (t) => (n) => (e) => (r) => (o) => {
  const i = xn(n), s = J((u) => (c) => {
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
      const h = ze(_ - 1 | 0, 2), p = ze(_, 2);
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
          if (!(uu(d[m] + "→" + l)(e) || uu(l + "→" + d[m])(e)) && (() => {
            if (r === "VDown")
              return $.r < v;
            if (r === "VUp")
              return $.r > v;
            a();
          })()) {
            const y = Z(d[m])($.root), w = (() => {
              if (y.tag === "Nothing")
                return d[m];
              if (y.tag === "Just")
                return y._1;
              a();
            })();
            return {
              root: X(G)(l)(w)($.root),
              align: X(G)(d[m])(l)(X(G)(l)(w)($.align)),
              r: v
            };
          }
        }
        return $;
      })(g)((() => {
        if (r === "VDown")
          return Yt(h, p);
        if (r === "VUp")
          return $n(Yt(h, p));
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
        return $n(c);
      a();
    })());
    return { root: f.root, align: f.align };
  })({ root: Rn(z((u) => E(u, u))(i)), align: Rn(z((u) => E(u, u))(i)) })((() => {
    if (o === "HRight")
      return n;
    if (o === "HLeft")
      return $n(n);
    a();
  })());
  return { root: s.root, align: s.align };
}, jr = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (f) => {
  const g = Ud(n)(e)(u)(c)(f), l = Xd(g)(o)(r)(i)(s)(f);
  return lg()((d) => (_) => b(
    "Just",
    (() => {
      const h = Z(d)(l);
      if (h.tag === "Nothing")
        return _ + 0;
      if (h.tag === "Just")
        return _ + h._1;
      a();
    })()
  ))(Yd(t)(n)(e)(r)(o)(i)(s)(l)(g)(c)(f));
}, _u = (t) => (n) => At((e) => (r) => J((o) => (i) => i >= 0 && i < n.length ? i >= 0 && i < t.length ? o + n[i] + t[i] : o + n[i] + 0 : i >= 0 && i < t.length ? o + 1 + t[i] : o + 1)(0)((() => {
  const o = Yt(0, n.length - 1 | 0);
  return e < 1 ? [] : It(0, e, o);
})()))(n), Md = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = Qd(0)(n.length - 1 | 0), c = at(t.layerGap), f = s(Xf(u, c)), g = K1(na(o)(f)(r)(i)(W))(f);
  return z((l) => {
    const d = Dd(l)(g);
    return d.tag === "Just" && d._1 > 0 ? Mn(c)(2 + at(d._1 - 1 | 0) * 2.5) : c;
  })(Yt(0, u - 1 | 0));
}, ca = (t) => (n) => (e) => (r) => Vu(
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
), Kd = (t) => (n) => (e) => (r) => {
  const o = Lt((i) => (s) => pt.compare(i.w)(s.w))(z((i) => ({ l: i, w: ua(i) }))(gt(
    ca()(n)(e),
    r
  )));
  return 0 < o.length ? b("Just", o[0].l) : T;
}, jd = (t) => (n) => {
  const e = Rn(xn(z(At((o) => (i) => E(i, o)))(t))), r = (o) => Lt((i) => (s) => rt.compare((() => {
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
          return W;
        if (i.tag === "Node")
          return Wt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        a();
      };
      return o(J((i) => (s) => Tt(G)(un)(s.to.node)([s.from.node])(i))(W)(n));
    })(),
    succs: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return W;
        if (i.tag === "Node")
          return Wt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        a();
      };
      return o(J((i) => (s) => Tt(G)(un)(s.from.node)([s.to.node])(i))(W)(n));
    })(),
    nodeIndex: e
  };
}, Zd = (t) => (n) => {
  const e = Lt((l) => (d) => pt.compare(l.w)(d.w))(At((l) => (d) => ({ i: l, l: d, w: ua(d) }))(n)), r = 0 < e.length ? b("Just", e[0]) : T, o = (() => {
    if (r.tag === "Just")
      return r._1.i;
    if (r.tag === "Nothing")
      return 0;
    a();
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
            h = Cn(N)(v._1), p = v._2;
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
        return d(i._1, Ot);
      })());
    if (i.tag === "Nothing")
      return 0;
    a();
  })(), u = (l) => J((d) => (_) => Mn(d)((() => {
    const h = Z(_._1)(t);
    if (h.tag === "Nothing")
      return _._2 + 1;
    if (h.tag === "Just")
      return _._2 + h._1._1;
    a();
  })()))(-999999)(Sr(l)), c = o >= 0 && o < n.length ? b("Just", n[o]) : T, f = (() => {
    if (c.tag === "Just")
      return u(c._1);
    if (c.tag === "Nothing")
      return 0;
    a();
  })(), g = Tn(
    (l) => (d) => {
      const _ = (h) => {
        if (h.tag === "Leaf")
          return W;
        if (h.tag === "Node")
          return Wt("Node", h._1, h._2, h._3, h._4 + d, _(h._5), _(h._6));
        a();
      };
      return _(l);
    },
    n,
    At((l) => (d) => Wi(l)(2) === 0 ? s - ((h) => (p) => {
      let $ = h, m = p, N = !0, v;
      for (; N; ) {
        const y = $, w = m;
        if (w.tag === "Nil") {
          N = !1, v = y;
          continue;
        }
        if (w.tag === "Cons") {
          $ = Cn(y)(w._1), m = w._2;
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
      return h(d, Ot);
    })()) : f - u(d))(n)
  );
  return zd(J((l) => (d) => {
    const _ = Lt(pt.compare)(yt(Z(d))(g));
    return X(G)(d)(_.length === 4 ? 1 < _.length && 2 < _.length ? (_[1] + _[2]) / 2 : 0 : 0 < _.length ? _[0] : 0)(l);
  })(W)(je(G.compare)(xn(z((l) => {
    const d = (_) => {
      if (_.tag === "Leaf")
        return W;
      if (_.tag === "Node")
        return Wt("Node", _._1, _._2, _._3, void 0, d(_._5), d(_._6));
      a();
    };
    return bt(Pn.foldr, d(l));
  })(g)))));
}, th = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = jd(n)(o), u = Od(s)(n), c = { nodeGap: t.nodeGap * 4 | 0 }, f = Ln(
    G.compare,
    yn,
    Rn(z((_) => E(_, E(0, 1)))(gt(
      (_) => fn(3)(_) === "$d:",
      xn(n)
    ))),
    (() => {
      const _ = (h) => {
        if (h.tag === "Leaf")
          return W;
        if (h.tag === "Node")
          return Wt("Node", h._1, h._2, h._3, E(h._4._1 * at(4), h._4._2), _(h._5), _(h._6));
        a();
      };
      return _(e);
    })()
  ), g = [
    jr(c)(s)(n)(f)(r)(o)(i)(u)(cu)(fu),
    jr(c)(s)(n)(f)(r)(o)(i)(u)(au)(fu),
    jr(c)(s)(n)(f)(r)(o)(i)(u)(cu)(gu),
    jr(c)(s)(n)(f)(r)(o)(i)(u)(au)(gu)
  ], l = Zd(f)(g);
  if (ca()(n)(f)(l))
    return l;
  const d = Kd()(n)(f)(g);
  if (d.tag === "Just")
    return d._1;
  if (d.tag === "Nothing")
    return g[0];
  a();
}, nh = (t) => (n) => (e) => (r) => {
  const o = Uf(
    T,
    lf,
    (i) => i.node === n ? b("Just", i.position) : T,
    t
  );
  if (o.tag === "Nothing")
    return t;
  if (o.tag === "Just") {
    const i = o._1;
    return z((s) => s.node === e ? { ...s, position: E(i._1 + r._1, i._2 + r._2) } : s)(t);
  }
  a();
}, eh = (t) => (n) => (e) => (r) => {
  const o = gt((s) => Gn(Xn)(s.node)(n), t), i = (() => {
    if (e === "Vertical") {
      if (r === "Start")
        return J((s) => (u) => Cn(s)(u.position._1))(99999)(o);
      if (r === "End")
        return J((s) => (u) => Mn(s)(u.position._1))(0)(o);
      if (r === "Center") {
        const s = J((u) => (c) => u + c.position._1)(0)(o);
        return o.length === 0 ? 0 : s / at(o.length);
      }
      a();
    }
    if (e === "Horizontal") {
      if (r === "Start")
        return J((s) => (u) => Cn(s)(u.position._2))(99999)(o);
      if (r === "End")
        return J((s) => (u) => Mn(s)(u.position._2))(0)(o);
      if (r === "Center") {
        const s = J((u) => (c) => u + c.position._2)(0)(o);
        return o.length === 0 ? 0 : s / at(o.length);
      }
    }
    a();
  })();
  return z((s) => {
    if (Gn(Xn)(s.node)(n)) {
      if (e === "Vertical")
        return { ...s, position: E(i, s.position._2) };
      if (e === "Horizontal")
        return { ...s, position: E(s.position._1, i) };
      a();
    }
    return s;
  })(t);
}, rh = (t) => (n) => J((e) => (r) => {
  if (r.tag === "Lock") {
    const o = r._1.node, i = r._1.position;
    return z((s) => s.node === o ? { ...s, position: i } : s)(e);
  }
  return r.tag === "AlignGroup" ? eh(e)(z(zu)(r._1.nodes))(r._1.axis)(r._1.alignment) : r.tag === "RelativePosition" ? nh(e)(r._1.anchor)(r._1.target)(r._1.offset) : e;
})(n)(t), oh = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const c = Rn(z((_) => E(_._1, _._2))(Sr(r))), f = z(z(zu))(e), g = z((_) => J((h) => (p) => Mn(h)((() => {
    const $ = Z(p)(c);
    if ($.tag === "Nothing")
      return 1;
    if ($.tag === "Just")
      return $._1._2;
    a();
  })()))(1)(_))(f), l = th(t)(f)(c)(Rn(z((_) => E(_._1, _._2))(Sr(o))))(i)(u), d = _u(Md(t)(e)(r)(o)(i)(s)((_) => {
    const h = _u(_)(g);
    return xn(At((p) => ($) => At((m) => (N) => ({
      node: N,
      position: E(
        (() => {
          const v = Z(N)(l);
          return (() => {
            if (v.tag === "Nothing")
              return 0;
            if (v.tag === "Just")
              return v._1;
            a();
          })() / at(4);
        })(),
        p >= 0 && p < h.length ? h[p] : 0
      ),
      size: (() => {
        const v = fn(3)(N) === "$d:" ? E(0, 1) : E(1, 1), y = Z(N)(c);
        if (y.tag === "Nothing")
          return v;
        if (y.tag === "Just")
          return y._1;
        a();
      })(),
      layer: p,
      order: m
    }))($))(f));
  }))(g);
  return rh(n)(xn(At((_) => (h) => At((p) => ($) => ({
    node: $,
    position: E(
      (() => {
        const m = Z($)(l);
        return (() => {
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just")
            return m._1;
          a();
        })() / at(4);
      })(),
      _ >= 0 && _ < d.length ? d[_] : 0
    ),
    size: (() => {
      const m = fn(3)($) === "$d:" ? E(0, 1) : E(1, 1), N = Z($)(c);
      if (N.tag === "Nothing")
        return m;
      if (N.tag === "Just")
        return N._1;
      a();
    })(),
    layer: _,
    order: p
  }))(h))(f)));
}, ri = /* @__PURE__ */ ss(uo)(/* @__PURE__ */ Ce(32)), lu = /* @__PURE__ */ ss(uo)(/* @__PURE__ */ Ce(31)), Gr = /* @__PURE__ */ (() => {
  const t = l0("25214903917");
  if (t.tag === "Nothing")
    return ac;
  if (t.tag === "Just")
    return t._1;
  a();
})(), Pr = /* @__PURE__ */ gi(/* @__PURE__ */ ss(uo)(/* @__PURE__ */ Ce(48)))(uo), ih = (t) => {
  const n = d0(t);
  return br(fc((() => {
    if (n.tag === "Nothing")
      return ac;
    if (n.tag === "Just")
      return n._1;
    a();
  })())(Gr))(Pr);
}, Ei = /* @__PURE__ */ Ce(11), mo = (t) => (n) => {
  const e = br(oo(io(n)(Gr))(Ei))(Pr);
  return E(
    (() => {
      const r = ju(a0(_i(e)(Ce(48 - t | 0))));
      if (r.tag === "Nothing")
        return 0;
      if (r.tag === "Just")
        return r._1;
      a();
    })(),
    e
  );
}, sh = (t) => {
  const n = mo(26)(t), e = mo(27)(n._2);
  return E((at(n._1) * fi(2)(27) + at(e._1)) / fi(2)(53), e._2);
}, uh = (t) => (n) => {
  const e = J((r) => (o) => {
    const i = sh(r.finalR);
    return { rs: [...r.rs, i._1], finalR: i._2 };
  })({ rs: [], finalR: t })(n);
  return E(
    z((r) => r.x)(Lt((r) => (o) => pt.compare(r.k)(o.k))(Tn((r) => (o) => ({ x: r, k: o }), n, e.rs))),
    e.finalR
  );
}, ch = (t) => {
  const n = br(oo(io(t)(Gr))(Ei))(Pr), e = br(oo(io(n)(Gr))(Ei))(Pr);
  return E(
    oo(io((() => {
      const r = _i(n)(Ce(16));
      return Bs.compare(r)(lu) !== "LT" ? gi(r)(ri) : r;
    })())(ri))((() => {
      const r = _i(e)(Ce(16));
      return Bs.compare(r)(lu) !== "LT" ? gi(r)(ri) : r;
    })()),
    e
  );
}, Ar = (t) => (e) => {
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
    a();
  }
  return i;
}, No = (t) => (e) => {
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
}, Ns = /* @__PURE__ */ Mt(G)(Ft), Yn = (t) => (e) => {
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
    a();
  }
  return i;
}, Jo = /* @__PURE__ */ Mt(G)(Ft), ah = /* @__PURE__ */ Qf(Ri), fh = /* @__PURE__ */ J(nr)(0), gh = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, du = (t) => (e) => {
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
}, _h = (t) => (n) => (e) => (r) => (o) => Ns(J((i) => (s) => {
  const u = Lt((c) => (f) => rt.compare((() => {
    const g = Ar(c.id)(o);
    if (g.tag === "Nothing")
      return 1e6;
    if (g.tag === "Just")
      return g._1;
    a();
  })())((() => {
    const g = Ar(f.id)(o);
    if (g.tag === "Nothing")
      return 1e6;
    if (g.tag === "Just")
      return g._1;
    a();
  })()))(gt((c) => No(c.to.node)(e), gt((c) => c.from.node === s, r)));
  return {
    ranks: [...i.ranks, ...At((c) => (f) => E(f.id, at((i.rankSum + c | 0) + 1 | 0)))(u)],
    rankSum: i.rankSum + u.length | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), lh = (t) => (n) => (e) => (r) => (o) => Ns(J((i) => (s) => {
  const u = Lt((f) => (g) => {
    const l = rt.compare((() => {
      const d = Yn(g.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      a();
    })())((() => {
      const d = Yn(f.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      a();
    })());
    return l === "EQ" ? rt.compare((() => {
      const d = Ar(f.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      a();
    })())((() => {
      const d = Ar(g.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      a();
    })()) : l;
  })(gt((f) => No(f.from.node)(e), gt((f) => f.to.node === s, r))), c = u.length;
  return {
    ranks: [...i.ranks, ...At((f) => (g) => E(g.id, at((i.rankSum + c | 0) - f | 0)))(u)],
    rankSum: i.rankSum + c | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), bi = (t) => (n) => (e) => {
  const r = Jo(At((u) => (c) => E(c, u))(t)), o = Jo(At((u) => (c) => E(c, u))(n)), i = yt((u) => {
    const c = Yn(u.from.node)(r), f = Yn(u.to.node)(o);
    if (c.tag === "Just" && f.tag === "Just")
      return b("Just", E(c._1, f._1));
    const g = Yn(u.from.node)(o), l = Yn(u.to.node)(r);
    return g.tag === "Just" && l.tag === "Just" ? b("Just", E(l._1, g._1)) : T;
  })(e), s = i.length;
  return J((u) => (c) => J((f) => (g) => c >= 0 && c < i.length && g >= 0 && g < i.length && ((i[c]._1 - i[g]._1 | 0) * (i[c]._2 - i[g]._2 | 0) | 0) < 0 ? f + 1 | 0 : f)(u)(Yt(c + 1 | 0, s - 1 | 0)))(0)(Yt(0, s - 2 | 0));
}, dh = (t) => (n) => (e) => (r) => (o) => {
  const i = (u) => (c) => {
    let f = u, g = c, l = !0, d;
    for (; l; ) {
      const _ = f, h = g;
      if (h >= (_.length - 1 | 0)) {
        l = !1, d = _;
        continue;
      }
      const p = h >= 0 && h < _.length ? b("Just", _[h]) : T, $ = h + 1 | 0;
      if ($ >= 0 && $ < _.length && p.tag === "Just") {
        const m = p._1, N = _[$];
        if (ae((L) => L.before === m && L.after === N, o)) {
          f = _, g = h + 1 | 0;
          continue;
        }
        if ((() => {
          const L = Yn(m)(t), k = Yn(N)(t);
          return L.tag === "Just" && k.tag === "Just" && L._1 < k._1;
        })()) {
          f = _, g = h + 1 | 0;
          continue;
        }
        const v = Ke(en, T, h, N, _), y = (() => {
          if (v.tag === "Just")
            return Ke(en, T, h + 1 | 0, m, v._1);
          if (v.tag === "Nothing")
            return T;
          a();
        })(), w = (() => {
          if (y.tag === "Nothing")
            return _;
          if (y.tag === "Just")
            return y._1;
          a();
        })();
        if (bi(e)(w)(r) < bi(e)(_)(r)) {
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
      if (ah(d)(l)) {
        f = !1, g = l;
        continue;
      }
      c = d;
    }
    return g;
  })(n);
}, Zr = (t) => (n) => J((e) => (r) => {
  if (r >= 0 && r < t.length) {
    const o = t[r], i = r + 1 | 0;
    if (i >= 0 && i < t.length)
      return e + bi(o)(t[i])(n) | 0;
  }
  return e;
})(0)(Yt(0, t.length - 2 | 0)), hh = (t) => (n) => (e) => {
  const r = yt((f) => f.tag === "OrderConstraint" ? b("Just", { before: f._1.before, after: f._1.after }) : T)(t.constraints), o = (f) => J((g) => (l) => {
    const d = l.after, _ = l.before, h = Me(en, T, ($) => $ === _, g), p = Me(en, T, ($) => $ === d, g);
    if (h.tag === "Just" && p.tag === "Just" && h._1 > p._1) {
      const $ = Ou(en, T, h._1, g), m = (() => {
        if ($.tag === "Nothing")
          return g;
        if ($.tag === "Just")
          return $._1;
        a();
      })(), N = Kf(en, T, p._1, _, m);
      if (N.tag === "Nothing")
        return m;
      if (N.tag === "Just")
        return N._1;
      a();
    }
    return g;
  })(f)(r), i = Ns(At((f) => (g) => E(g.id, f))(e)), s = (f, g, l) => {
    const d = f.length;
    return J((_) => (h) => {
      const p = g ? h - 1 | 0 : h + 1 | 0, $ = p >= 0 && p < _._1.length ? b("Just", _._1[p]) : T;
      if ($.tag === "Just") {
        const m = h >= 0 && h < _._1.length ? b("Just", _._1[h]) : T;
        if (m.tag === "Just") {
          const N = Jo(At((k) => (A) => E(A, k))($._1)), v = Jo(At((k) => (A) => E(A, k))(m._1)), y = g ? _h($._1)(N)(v)(e)(i) : lh($._1)(N)(v)(e)(i), w = J((k) => (A) => {
            const H = yt((M) => Ar(M.id)(y))(gt(g ? (M) => M.to.node === A._2 && No(M.from.node)(N) : (M) => M.from.node === A._2 && No(M.to.node)(N), e));
            if (H.length === 0)
              return { ...k, items: [...k.items, { n: A._2, key: T, origIdx: A._1 }] };
            const V = mo(24)(k.r);
            return {
              items: [
                ...k.items,
                {
                  n: A._2,
                  key: b("Just", (fh(H) + (at(V._1) * 4172325152040912e-24 - 0.03500000014901161)) / at(H.length)),
                  origIdx: A._1
                }
              ],
              r: V._2
            };
          })({ items: [], r: _._2 })(At(ir)(m._1)), L = Ke(
            en,
            T,
            h,
            dh(t.modelOrder)(o(z((k) => k.n)(Lt((k) => (A) => {
              const H = Yn(k.n)(t.modelOrder), V = Yn(A.n)(t.modelOrder);
              if (H.tag === "Just" && V.tag === "Just") {
                const M = rt.compare(H._1)(V._1);
                return M === "EQ" ? pt.compare(k.key)(A.key) : M;
              }
              return pt.compare(k.key)(A.key);
            })((() => {
              const k = w.items, A = (V) => (M) => {
                let P = V, R = M, j = !0, et;
                for (; j; ) {
                  const Y = P, I = R;
                  if (Y >= 0 && Y < k.length) {
                    if (k[Y].key.tag === "Just") {
                      j = !1, et = k[Y].key._1;
                      continue;
                    }
                    if (k[Y].key.tag === "Nothing") {
                      P = Y + 1 | 0, R = I;
                      continue;
                    }
                    a();
                  }
                  j = !1, et = I;
                }
                return et;
              };
              return ((V) => (M) => (P) => {
                let R = V, j = M, et = P, Y = !0, I;
                for (; Y; ) {
                  const x = R, C = j, D = et;
                  if (x >= 0 && x < k.length) {
                    if (k[x].key.tag === "Just") {
                      R = x + 1 | 0, j = k[x].key._1, et = [...D, { n: k[x].n, key: k[x].key._1, origIdx: k[x].origIdx }];
                      continue;
                    }
                    if (k[x].key.tag === "Nothing") {
                      const S = (C + A(x + 1 | 0)(C + 1)) / 2;
                      R = x + 1 | 0, j = S, et = [...D, { n: k[x].n, key: S, origIdx: k[x].origIdx }];
                      continue;
                    }
                    a();
                  }
                  Y = !1, I = D;
                }
                return I;
              })(0)(-1)([]);
            })()))))($._1)(e)(r),
            _._1
          );
          if (L.tag === "Just")
            return E(L._1, w.r);
          if (L.tag === "Nothing")
            return E(_._1, _._2);
          a();
        }
        if (m.tag === "Nothing")
          return E(_._1, _._2);
        a();
      }
      if ($.tag === "Nothing")
        return E(_._1, _._2);
      a();
    })(E(f, l))(g ? Yt(1, d - 1 | 0) : $n(Yt(0, d - 2 | 0)));
  }, u = J((f) => (g) => X(G)(g.from.node)()(X(G)(g.to.node)()(f)))(W)(e), c = J((f) => (g) => {
    if (f.result.crossings === 0)
      return f;
    const l = (N) => (v) => (y) => (w) => {
      let L = N, k = v, A = y, H = w, V = !0, M;
      for (; V; ) {
        const P = L, R = k, j = A, et = H;
        if (j === 0) {
          V = !1, M = { layout: P, crossings: 0, random: et };
          continue;
        }
        const Y = s(P, R, et), I = Zr(Y._1)(e);
        if (I < j) {
          L = Y._1, k = !R, A = I, H = Y._2;
          continue;
        }
        V = !1, M = { layout: P, crossings: j, random: Y._2 };
      }
      return M;
    }, d = mo(1)(f.result.random), _ = d._1 !== 0, h = t.modelOrder.tag === "Leaf", p = (f.firstTry || f.secondTry) && !h ? f.firstTry : _, $ = (() => {
      if (!h) {
        const w = s(n, p, d._2);
        return l(w._1)(!p)(Zr(w._1)(e))(w._2);
      }
      const N = p ? 0 : gh(0)(n.length - 1 | 0), v = N >= 0 && N < n.length ? b("Just", n[N]) : T;
      if (v.tag === "Just" && v._1.length > 1) {
        const w = gt((L) => du(L)(u), v._1);
        if (w.length > 1) {
          const L = uh(d._2)(w), k = L._1, A = Ke(
            en,
            T,
            N,
            o(J((H) => (V) => du(V)(u) ? H.idx >= 0 && H.idx < k.length ? { idx: H.idx + 1 | 0, result: [...H.result, k[H.idx]] } : { idx: H.idx, result: [...H.result, V] } : { idx: H.idx, result: [...H.result, V] })({ idx: 0, result: [] })(v._1).result),
            n
          );
          if (A.tag === "Just") {
            const H = s(A._1, p, L._2);
            return l(H._1)(!p)(Zr(H._1)(e))(H._2);
          }
        }
      }
      const y = s(n, p, d._2);
      return l(y._1)(!p)(Zr(y._1)(e))(y._2);
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
      random: br(fc(ch(ih(1))._1)(Gr))(Pr)
    },
    firstTry: t.modelOrder.tag !== "Leaf",
    secondTry: !1
  })(Yt(1, t.iterations)).result;
  return n.length <= 0 || t.iterations <= 0 ? n : c.layout;
}, ph = (t) => t, hu = (t) => (e) => {
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
}, pn = (t) => (e) => {
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
    a();
  }
  return i;
}, rr = (t) => (e) => {
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
}, Ir = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = G.compare(n._1)(e._1);
      return r === "LT" ? Nn : r === "GT" ? Jn : G.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), $h = /* @__PURE__ */ Mt(G)(Ft), mh = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = Ir.compare(t)(s._3);
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
}, Nh = /* @__PURE__ */ ph("Greedy"), oi = (t) => (n) => (e) => J((r) => (o) => {
  if (o.from.node === o.to.node)
    return r;
  if (o.from.node === n && !hu(o.to.node)(r.marks)) {
    const i = pn(o.to.node)(r.inDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      a();
    })(), u = X(G)(o.to.node)(s)(r.inDeg);
    return (() => {
      const c = pn(o.to.node)(r.outDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        a();
      })() && !Gn(Xn)(o.to.node)(r.sources);
    })() ? { ...r, inDeg: u, sources: [...r.sources, o.to.node] } : { ...r, inDeg: u };
  }
  if (o.to.node === n && !hu(o.from.node)(r.marks)) {
    const i = pn(o.from.node)(r.outDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      a();
    })(), u = X(G)(o.from.node)(s)(r.outDeg);
    return (() => {
      const c = pn(o.from.node)(r.inDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        a();
      })() && !Gn(Xn)(o.from.node)(r.sinks);
    })() ? { ...r, outDeg: u, sinks: [...r.sinks, o.from.node] } : { ...r, outDeg: u };
  }
  return r;
})({ ...e, remaining: gt((r) => r !== n, e.remaining) })(t), Jh = /* @__PURE__ */ J((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return X(G)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return X(G)(n._1.node)(0)(t);
    if (n._1.pin.tag === "LastLayer")
      return X(G)(n._1.node)(99999)(t);
  }
  return t;
})(W), aa = (t) => (n) => (e) => {
  const r = pn(n)(t), o = pn(e)(t);
  return r.tag === "Just" && o.tag === "Just" && r._1 > o._1;
}, fa = (t) => (n) => (e) => (r) => {
  if (rr(e)(r.visited) || rr(e)(r.visiting))
    return r;
  const o = J(vh(t)(n)(e))({ ...r, visiting: X(G)(e)()(r.visiting) })((() => {
    const i = pn(e)(n);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just")
      return i._1;
    a();
  })());
  return {
    ...o,
    visiting: wr(G)(e)(o.visiting),
    visited: X(G)(e)()(o.visited)
  };
}, vh = (t) => (n) => (e) => (r) => (o) => aa(t)(e)(o) ? { ...r, backEdges: X(Ir)(E(e, o))()(r.backEdges) } : rr(o)(r.visiting) ? { ...r, backEdges: X(Ir)(E(e, o))()(r.backEdges) } : rr(o)(r.visited) ? r : fa(t)(n)(o)(r), yh = (t) => (n) => (e) => {
  const r = (d) => {
    let _ = d, h = !0, p;
    for (; h; ) {
      const $ = _, m = Qt((N) => T, (N) => (v) => b("Just", { head: N, tail: v }), $.sinks);
      if (m.tag === "Just") {
        _ = oi(e)(m._1.head)({
          ...$,
          sinks: m._1.tail,
          marks: X(G)(m._1.head)($.nextRight)($.marks),
          nextRight: $.nextRight - 1 | 0
        });
        continue;
      }
      if (m.tag === "Nothing") {
        const N = Qt((v) => T, (v) => (y) => b("Just", { head: v, tail: y }), $.sources);
        if (N.tag === "Just") {
          _ = oi(e)(N._1.head)({
            ...$,
            sources: N._1.tail,
            marks: X(G)(N._1.head)($.nextLeft)($.marks),
            nextLeft: $.nextLeft + 1 | 0
          });
          continue;
        }
        if (N.tag === "Nothing") {
          const v = (w) => {
            const L = pn(w)($.outDeg), k = pn(w)($.inDeg);
            return (() => {
              if (L.tag === "Nothing")
                return 0;
              if (L.tag === "Just")
                return L._1;
              a();
            })() - (() => {
              if (k.tag === "Nothing")
                return 0;
              if (k.tag === "Just")
                return k._1;
              a();
            })() | 0;
          }, y = Lt((w) => (L) => {
            const k = rt.compare(v(L))(v(w));
            return k === "EQ" ? rt.compare((() => {
              const A = pn(w)(n);
              if (A.tag === "Nothing")
                return 1e6;
              if (A.tag === "Just")
                return A._1;
              a();
            })())((() => {
              const A = pn(L)(n);
              if (A.tag === "Nothing")
                return 1e6;
              if (A.tag === "Just")
                return A._1;
              a();
            })()) : k;
          })($.remaining);
          if (0 < y.length) {
            const w = y[0];
            _ = oi(e)(w)({
              ...$,
              remaining: gt((L) => L !== w, $.remaining),
              marks: X(G)(w)($.nextLeft)($.marks),
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
  }, o = je(G.compare)([...z((d) => d.from.node)(e), ...z((d) => d.to.node)(e)]), i = gt((d) => d.from.node !== d.to.node, e), s = J((d) => (_) => Tt(G)(jt)(_.to.node)(1)(d))(W)(i), u = J((d) => (_) => Tt(G)(jt)(_.from.node)(1)(d))(W)(i), c = gt(
    (d) => {
      const _ = pn(d)(s);
      if (_.tag === "Nothing")
        return !0;
      if (_.tag === "Just")
        return _._1 === 0;
      a();
    },
    o
  ), f = gt(
    (d) => {
      const _ = pn(d)(u);
      if (_.tag === "Nothing")
        return !0;
      if (_.tag === "Just")
        return _._1 === 0;
      a();
    },
    o
  ), g = o.length + 1 | 0, l = J((d) => (_) => {
    const h = pn(_)(d);
    return h.tag === "Just" && h._1 < 0 ? X(G)(_)(h._1 + g | 0)(d) : d;
  })(r({
    remaining: gt((d) => !Gn(Xn)(d)(c) && !Gn(Xn)(d)(f), o),
    marks: W,
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
    if (aa(t)(_.from.node)(_.to.node))
      return X(Ir)(E(_.from.node, _.to.node))()(d);
    const h = pn(_.from.node)(l), p = pn(_.to.node)(l);
    return h.tag === "Just" && p.tag === "Just" && h._1 > p._1 ? X(Ir)(E(_.from.node, _.to.node))()(d) : d;
  })(W)(e);
}, Th = /* @__PURE__ */ J((t) => (n) => Tt(G)(un)(n.from.node)([n.to.node])(t))(W), wh = (t) => (n) => {
  const e = Th(n), r = je(G.compare)([...z((i) => i.from.node)(n), ...z((i) => i.to.node)(n)]), o = J((i) => (s) => X(G)(s.to.node)()(i))(W)(n);
  return J((i) => (s) => fa(t)(e)(s)(i))({
    visiting: W,
    visited: W,
    backEdges: W
  })([...gt((i) => !rr(i)(o), r), ...gt((i) => rr(i)(o), r)]).backEdges;
}, Lh = (t) => (n) => (e) => (r) => {
  const o = $h(At((u) => (c) => E(c, u))(n)), i = Jh(e), s = (() => {
    if (t === "DepthFirst")
      return wh(i)(r);
    if (t === "Greedy")
      return yh(i)(o)(r);
    a();
  })();
  return {
    edges: z((u) => mh(E(u.from.node, u.to.node))(s) ? { ...u, from: u.to, to: u.from } : u)(r),
    reversedEdges: s
  };
}, pu = (t) => (e) => {
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
    a();
  }
  return i;
}, Eh = (t) => (n) => (e) => J((r) => (o) => {
  const i = pu(o.from.node)(t), s = (() => {
    if (i.tag === "Nothing")
      return 0;
    if (i.tag === "Just")
      return i._1;
    a();
  })(), u = pu(o.to.node)(t), c = (() => {
    if (u.tag === "Nothing")
      return -s;
    if (u.tag === "Just")
      return u._1 - s | 0;
    a();
  })();
  if (c <= 1)
    return { ...r, edges: [...r.edges, o], chains: [...r.chains, { edgeId: o.id, nodes: [o.from.node, o.to.node] }] };
  const f = o.id, g = z((d) => "$d:" + f + ":" + _n(d))(Yt(1, c - 1 | 0)), l = [o.from.node, ...g, o.to.node];
  return {
    ...r,
    layers: J((d) => (_) => {
      const h = _._2, p = tg(s + _._1 | 0)(($) => [...$, h])(d);
      if (p.tag === "Nothing")
        return d;
      if (p.tag === "Just")
        return p._1;
      a();
    })(r.layers)(Tn(ir, Yt(1, c - 1 | 0), g)),
    edges: [
      ...r.edges,
      ...Tn(
        (d) => (_) => ({ id: f + ":" + d + "->" + _, from: { node: d, port: o.from.port }, to: { node: _, port: o.to.port } }),
        l,
        It(1, l.length, l)
      )
    ],
    chains: [...r.chains, { edgeId: o.id, nodes: l }]
  };
})({ layers: e, edges: [], chains: [] })(n), ga = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, bh = /* @__PURE__ */ J((t) => (n) => X(G)(n)()(t))(W), vo = (t) => (e) => {
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
}, kh = /* @__PURE__ */ Oc(G), On = (t) => (e) => {
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
    a();
  }
  return i;
}, $u = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, ii = (t) => (e) => {
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
    a();
  }
  return i;
}, xh = /* @__PURE__ */ Mt(rt)(Ft), Ch = (t) => (n) => Ln(G.compare, yn, t, n), _a = /* @__PURE__ */ At((t) => (n) => ({ src: n.src, tgt: n.tgt, delta: 1, weight: 1, eid: t })), Sh = (t) => J((n) => (e) => ({
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
          s = ga(g)(l._1), u = l._2;
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
      return o(e, Ot);
    })()) | 0) + 1 | 0;
  })(),
  result: [
    ...n.result,
    (() => {
      if (n.base === 0)
        return e;
      const r = (o) => {
        if (o.tag === "Leaf")
          return W;
        if (o.tag === "Node")
          return Wt("Node", o._1, o._2, o._3, o._4 + n.base | 0, r(o._5), r(o._6));
        a();
      };
      return r(e);
    })()
  ]
}))({ base: 0, result: [] })(t).result, Gh = (t) => (n) => {
  const e = bh(t);
  return kh(t)(_a(gt((r) => vo(r.src)(e) && vo(r.tgt)(e), n)));
}, Ph = (t) => (n) => {
  const e = J((o) => (i) => Tt(G)(un)(i.tgt)([i.src])(Tt(G)(un)(i.src)([
    i.tgt
  ])(o)))(W)(n), r = (o) => (i) => (s) => {
    let u = o, c = i, f = s, g = !0, l;
    for (; g; ) {
      const d = u, _ = c, h = f, p = Qt(($) => T, ($) => (m) => b("Just", { head: $, tail: m }), d);
      if (p.tag === "Nothing") {
        g = !1, l = { nodes: h };
        continue;
      }
      if (p.tag === "Just") {
        if (vo(p._1.head)(_)) {
          u = p._1.tail, c = _, f = h;
          continue;
        }
        u = [
          ...p._1.tail,
          ...(() => {
            const $ = On(p._1.head)(e);
            if ($.tag === "Nothing")
              return [];
            if ($.tag === "Just")
              return $._1;
            a();
          })()
        ], c = X(G)(p._1.head)()(_), f = [...h, p._1.head];
        continue;
      }
      a();
    }
    return l;
  };
  return J((o) => (i) => {
    if (vo(i)(o.visited))
      return o;
    const s = r([i])(o.visited)([]);
    return {
      ...o,
      visited: J((u) => (c) => X(G)(c)()(u))(o.visited)(s.nodes),
      components: [...o.components, s.nodes]
    };
  })({ visited: W, components: [] })(t).components;
}, Ah = (t) => (n) => (e) => {
  const r = J((i) => (s) => Tt(G)(jt)(s.tgt)(1)(i))(W)(n), o = J((i) => (s) => Tt(G)(jt)(s.src)(1)(i))(W)(n);
  return J((i) => (s) => {
    const u = On(s)(r), c = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      a();
    })();
    if ((() => {
      const N = On(s)(o);
      return (() => {
        if (N.tag === "Nothing")
          return c !== 0;
        if (N.tag === "Just")
          return c !== N._1;
        a();
      })() || c === 0;
    })())
      return i;
    const f = On(s)(i.layers), g = (() => {
      if (f.tag === "Nothing")
        return 0;
      if (f.tag === "Just")
        return f._1;
      a();
    })(), l = i.layers, d = J((N) => (v) => v.tgt === s ? {
      ...N,
      mIn: $u(N.mIn)((() => {
        const y = On(s)(l), w = On(v.src)(l);
        return (() => {
          if (y.tag === "Nothing")
            return 0;
          if (y.tag === "Just")
            return y._1;
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
      mOut: $u(N.mOut)((() => {
        const y = On(v.tgt)(l), w = On(s)(l);
        return (() => {
          if (y.tag === "Nothing")
            return 0;
          if (y.tag === "Just")
            return y._1;
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
      const y = ii(v)(i.filling), w = (() => {
        if (y.tag === "Nothing")
          return 0;
        if (y.tag === "Just")
          return y._1;
        a();
      })();
      return w < N.bestFill ? { best: v, bestFill: w } : N;
    })({
      best: g,
      bestFill: (() => {
        const N = ii(g)(i.filling);
        if (N.tag === "Nothing")
          return 0;
        if (N.tag === "Just")
          return N._1;
        a();
      })()
    })(Yt(p, $));
    return m.best === g ? i : {
      layers: X(G)(s)(m.best)(i.layers),
      filling: X(rt)(g)((() => {
        const N = ii(g)(i.filling);
        if (N.tag === "Nothing")
          return -1;
        if (N.tag === "Just")
          return N._1 - 1 | 0;
        a();
      })())(X(rt)(m.best)(m.bestFill + 1 | 0)(i.filling))
    };
  })({
    layers: e,
    filling: xh(z((i) => E(
      i,
      J((s) => (u) => (() => {
        const c = On(u)(e);
        return c.tag === "Nothing" ? !1 : c.tag === "Just" && c._1 === i;
      })() ? s + 1 | 0 : s)(0)(t)
    ))(Yt(
      0,
      J((i) => (s) => ga(i)((() => {
        const u = On(s)(e);
        if (u.tag === "Nothing")
          return 0;
        if (u.tag === "Just")
          return u._1;
        a();
      })()))(0)(t)
    )))
  })(t).layers;
}, Ih = (t) => (n) => Ah(t)(_a(n))(J(Ch)(W)(Sh(z((e) => Gh(e)(n))(Ph(t)(n))))), Rh = (t) => t, be = (t) => (e) => {
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
    a();
  }
  return i;
}, yo = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, la = /* @__PURE__ */ (() => {
  const t = qn.unfoldr(Ie);
  return (n) => t(Dn("IterNode", n, Ae));
})(), Fh = /* @__PURE__ */ Rh("NetworkSimplex"), Bh = (t) => (n) => J((e) => (r) => {
  const o = J(yo)(0)(yt((i) => be(i)(e))(r));
  return J((i) => (s) => X(G)(s)(o)(i))(e)(r);
})(n)(t), Qh = (t) => (n) => ({
  layers: z((e) => gt(
    (r) => {
      const o = be(r)(n);
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
          i = yo(f)(g._1), s = g._2;
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
      return r(n, Ot);
    })())
  )),
  nodeLayer: n
}), Dh = (t) => (n) => (e) => {
  const r = J((o) => (i) => X(G)(i)(!0)(o))(W)(n);
  return J((o) => (i) => X(G)(i._1)(i._2)(o))(Ih(n)(yt((o) => o.from.node === o.to.node || (() => {
    const i = be(o.from.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    a();
  })() || (() => {
    const i = be(o.to.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    a();
  })() ? T : b("Just", { src: o.from.node, tgt: o.to.node }))(t)))(la(e));
}, Wh = (t) => (n) => (e) => (r) => {
  const o = (c) => (f) => {
    const g = be(f)(c);
    if (g.tag === "Just")
      return c;
    if (g.tag === "Nothing") {
      const l = gt(
        (_) => _ !== f,
        (() => {
          const _ = be(f)(t);
          if (_.tag === "Nothing")
            return [];
          if (_.tag === "Just")
            return _._1;
          a();
        })()
      ), d = J(o)(c)(l);
      return X(G)(f)(1 + J(yo)(0)(yt((_) => be(_)(d))(l)) | 0)(d);
    }
    a();
  }, i = J(o)(W)(e), u = ((c) => (f) => {
    let g = c, l = f, d = !0, _;
    for (; d; ) {
      const h = g, p = l;
      if (p.tag === "Nil") {
        d = !1, _ = h;
        continue;
      }
      if (p.tag === "Cons") {
        g = yo(h)(p._1), l = p._2;
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
    return c(i, Ot);
  })());
  return J((c) => (f) => X(G)(f._1)(f._2)(c))((() => {
    const c = (f) => {
      if (f.tag === "Leaf")
        return W;
      if (f.tag === "Node")
        return Wt("Node", f._1, f._2, f._3, u - f._4 | 0, c(f._5), c(f._6));
      a();
    };
    return c(i);
  })())(la(r));
}, qh = /* @__PURE__ */ J((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return X(G)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return X(G)(n._1.node)(0)(t);
  }
  return t;
})(W), Hh = /* @__PURE__ */ J((t) => (n) => Tt(G)(un)(n.to.node)([n.from.node])(t))(W), zh = /* @__PURE__ */ J((t) => (n) => Tt(G)(un)(n.from.node)([n.to.node])(t))(W), Oh = (t) => (n) => (e) => (r) => {
  const o = zh(e), i = Hh(e), s = qh(n);
  return Qh(r)(Bh(yt((u) => u.tag === "SameLayer" ? b("Just", u._1.nodes) : T)(n))((() => {
    if (t === "LongestPath")
      return Wh(o)(i)(r)(s);
    if (t === "NetworkSimplex")
      return Dh(e)(r)(s);
    a();
  })()));
}, Vh = /* @__PURE__ */ Mt(G)(Ft), Yh = (t) => (e) => {
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
    a();
  }
  return i;
}, mu = (t) => (e) => {
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
    a();
  }
  return i;
}, Nu = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, Rr = /* @__PURE__ */ Mt(G)(Ft), Xh = /* @__PURE__ */ Mt(G)(Ft), Ju = /* @__PURE__ */ (() => {
  const t = z((n) => ({ start: n.end, end: n.start, direction: n.direction }));
  return (n) => $n(t(n));
})(), Uh = (t) => (n) => (e) => (r) => {
  const o = Vh(z((s) => E(s.edge, s))(r)), i = (s) => 0 < s.nodes.length && (() => {
    const u = Yh(s.edgeId)(e);
    return u.tag === "Just" && s.nodes[0] !== u._1._1;
  })();
  return z((s) => {
    if (s.nodes.length <= 2) {
      const g = mu(s.edgeId)(o);
      if (g.tag === "Just") {
        const l = i(s);
        return { ...g._1, edge: s.edgeId, segments: l ? Ju(g._1.segments) : g._1.segments, reversed: l };
      }
      if (g.tag === "Nothing")
        return { edge: s.edgeId, segments: [], bends: [], bendType: [], jumps: [], reversed: !1 };
      a();
    }
    const u = Ct(yt((g) => mu(g)(o))(Tn(
      (g) => (l) => s.edgeId + ":" + g + "->" + l,
      s.nodes,
      It(1, s.nodes.length, s.nodes)
    )))((g) => g.segments), c = i(s), f = Ti(c ? Ju(u) : u);
    return {
      edge: s.edgeId,
      segments: f,
      bends: Tn((g) => (l) => g.end, f, It(1, f.length, f)),
      bendType: [],
      jumps: [],
      reversed: c
    };
  })(t);
}, Mh = { layers: [], edges: [], chains: [] }, Kh = {
  nodeGap: 3,
  layerGap: 2,
  iterations: 8,
  layerer: Fh,
  cycleBreaker: Nh,
  compactPostRouting: !0
}, jh = (t) => ({
  pos: E(0, 0),
  size: E(
    J((n) => (e) => Nu(n)(e.position._1 + e.size._1))(0)(t),
    J((n) => (e) => Nu(n)(e.position._2 + e.size._2))(0)(t)
  )
}), Zh = (t) => (n) => (e) => {
  const r = Rr(z((f) => E(f.id, f.ports))(n.nodes)), o = gt((f) => fn(3)(f.node) !== "$d:", e.placements), i = Uh(e.withDummies.chains)(e.acyclic.reversedEdges)(Xh(z((f) => E(
    f.id,
    E(f.from.node, f.to.node)
  ))(n.edges)))(Ed(e.withDummies.edges)(e.placements)(r)(e.withDummies.chains)(ra(e.ordered)(gt(
    (f) => f.from.node !== f.to.node,
    e.withDummies.edges
  ))((() => {
    const f = (g) => {
      if (g.tag === "Leaf")
        return W;
      if (g.tag === "Node")
        return Wt("Node", g._1, g._2, g._3, E(g._4._1 * 4, g._4._2), f(g._5), f(g._6));
      a();
    };
    return f(Rr(z((g) => E(g.id, g.size))(n.nodes)));
  })()))), s = t.compactPostRouting ? Y1()({
    nodes: o,
    edges: n.edges,
    paths: i,
    ports: r
  }) : { nodes: o, edges: i }, u = s.edges, c = At((f) => (g) => ({ ...g, jumps: Pd(f)(g)(u) }))(u);
  return { nodes: s.nodes, edges: c, boundingBox: jh(s.nodes), metrics: Sl(s.nodes)(c)(0) };
}, tp = (t) => (n) => (e) => {
  const r = Rr(z((i) => E(i.id, i.size))(n.nodes)), o = {
    ...e,
    placements: oh({ nodeGap: t.nodeGap, layerGap: t.layerGap })(n.constraints)(e.ordered)(r)(Rr(z((i) => E(
      i.id,
      i.ports
    ))(n.nodes)))(e.withDummies.edges)(e.withDummies.chains)(ra(e.ordered)(e.withDummies.edges)((() => {
      const i = (s) => {
        if (s.tag === "Leaf")
          return W;
        if (s.tag === "Node")
          return Wt("Node", s._1, s._2, s._3, E(s._4._1 * 4, s._4._2), i(s._5), i(s._6));
        a();
      };
      return i(r);
    })()))
  };
  return { pipeline: o, result: Zh(t)(n)(o) };
}, np = (t) => (n) => (e) => tp(t)(n)({
  ...e,
  ordered: hh({
    iterations: t.iterations,
    constraints: n.constraints,
    modelOrder: Rr(At((r) => (o) => E(o.id, r))(n.nodes))
  })(e.withDummies.layers)(e.withDummies.edges)
}), ep = (t) => (n) => (e) => np(t)(n)({
  ...e,
  withDummies: Eh(e.layered.nodeLayer)(e.acyclic.edges)(e.layered.layers)
}), rp = (t) => (n) => {
  const e = z((o) => o.id)(n.nodes), r = Lh(t.cycleBreaker)(e)(n.constraints)(n.edges);
  return ep(t)(n)({
    acyclic: r,
    layered: Oh(t.layerer)(n.constraints)(r.edges)(e),
    withDummies: Mh,
    ordered: [],
    placements: []
  });
}, op = (t) => (e) => {
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
    a();
  }
  return i;
}, ip = (t) => (e) => {
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
    a();
  }
  return i;
}, da = /* @__PURE__ */ Mt(G)(Ft), sp = (t) => (e) => {
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
}, up = (t) => (e) => {
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
}, cp = /* @__PURE__ */ J((t) => (n) => X(G)(n)()(t))(W), ap = /* @__PURE__ */ J((t) => (n) => X(G)(n)()(t))(W), fp = Wr.traverse(Ai), Js = /* @__PURE__ */ Mt(G)(Ft), gp = (t) => (n) => (e) => {
  const r = gn((o) => o.id === e)(t.graph.edges);
  if (r.tag === "Just")
    return b("Just", r._1);
  if (r.tag === "Nothing")
    return op(e)(n);
  a();
}, _p = (t) => (n) => (e) => ({
  x: e.position._1 * t,
  y: e.position._2 * t,
  w: e.size._1 * t,
  h: e.size._2 * t,
  label: (() => {
    const r = ip(e.node)(n);
    if (r.tag === "Just")
      return r._1;
    if (r.tag === "Nothing")
      return e.node;
    a();
  })()
}), lp = (t) => ({ id: t, size: E(1, 1), ports: [], label: b("Just", t) }), dp = (t) => (n) => (e) => E(e.node, _p(t)(n)(e)), hp = (t) => da(yt((n) => b(
  "Just",
  E(n.edge, { id: n.edge, from: { node: n.from, port: T }, to: { node: n.to, port: T } })
))(Ct(t.scenes)((n) => n.tag === "DataFlow" ? yt((e) => e.kind.tag === "SendToken" ? b("Just", e.kind._1) : T)(n._1.events) : []))), ha = (t) => {
  const n = J0(t), e = gt((o) => sp(o.id)(n.nodes), t.graph.nodes), r = gt((o) => up(o.id)(n.edges), t.graph.edges);
  return {
    nodes: [
      ...e,
      ...z(lp)(bt(
        Pn.foldr,
        re(G.compare, n.nodes, cp(z((o) => o.id)(e)))
      ))
    ],
    edges: [
      ...r,
      ...yt(gp(t)(hp(t)))(bt(
        Pn.foldr,
        re(G.compare, n.edges, ap(z((o) => o.id)(r)))
      ))
    ],
    constraints: t.graph.constraints
  };
}, pp = (t) => {
  const n = fp((e) => {
    const r = ml(vl)((() => {
      if (e.label.tag === "Just")
        return e.label._1;
      if (e.label.tag === "Nothing")
        return e.id;
      a();
    })());
    return () => {
      const o = r();
      return E(e.id, o);
    };
  })(ha(t).nodes);
  return () => {
    const e = n();
    return Js(e);
  };
}, $p = (t) => (n) => {
  const e = Qt((r) => T, (r) => (o) => b("Just", { head: r, tail: o }), n.segments);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ x: e._1.head.start._1 * t, y: e._1.head.start._2 * t }, ...z((r) => ({ x: r.end._1 * t, y: r.end._2 * t }))([e._1.head, ...e._1.tail])];
  a();
}, mp = (t) => (n) => E(n.edge, $p(t)(n)), Np = (t) => (n) => (e) => ({
  nodes: Js(z(dp(at(4) * t)(n))(e.nodes)),
  edges: da(z(mp(t))(e.edges)),
  chipExtras: W
}), Jp = at(4) * 8, vp = (t) => (n) => {
  const e = kl(Jp)(t)(bl(El)(ha(n)));
  return Np(8)(Js(z((r) => E(
    r.id,
    (() => {
      if (r.label.tag === "Just")
        return r.label._1;
      if (r.label.tag === "Nothing")
        return r.id;
      a();
    })()
  ))(e.nodes)))(rp(Kh)(e).result);
}, vu = (t) => (e) => {
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
    a();
  }
  return i;
}, yp = (t) => (n) => (e) => {
  const r = t < 0.05 ? t : 0.05, o = (s, u) => {
    if (u.tag === "Leaf")
      return s;
    if (u.tag === "Node")
      return o(
        (() => {
          const c = vu(u._3)(e), f = (() => {
            if (c.tag === "Just")
              return c._1;
            if (c.tag === "Nothing")
              return { x: u._4.x, y: u._4.y, vx: 0, vy: 0 };
            a();
          })(), g = f.vx + (180 * (u._4.x - f.x) - 22 * f.vx) * r, l = f.vy + (180 * (u._4.y - f.y) - 22 * f.vy) * r;
          return X(G)(u._3)({ x: f.x + g * r, y: f.y + l * r, vx: g, vy: l })(o(s, u._5));
        })(),
        u._6
      );
    a();
  }, i = o(W, n);
  return {
    springs: i,
    applied: (() => {
      const s = (u, c) => {
        if (c.tag === "Leaf")
          return u;
        if (c.tag === "Node")
          return s(
            (() => {
              const f = s(u, c._5), g = vu(c._3)(i);
              if (g.tag === "Just")
                return X(G)(c._3)({ ...c._4, x: g._1.x, y: g._1.y })(f);
              if (g.tag === "Nothing")
                return X(G)(c._3)(c._4)(f);
              a();
            })(),
            c._6
          );
        a();
      };
      return s(W, n);
    })()
  };
};
(function() {
  var t = {}, n = "Pure", e = "Throw", r = "Catch", o = "Sync", i = "Async", s = "Bind", u = "Bracket", c = "Fork", f = "Sequential", g = "Map", l = "Apply", d = "Alt", _ = "Cons", h = "Resume", p = "Release", $ = "Finalizer", m = "Finalized", N = "Forked";
  function v(S, F, Q, K) {
    this.tag = S, this._1 = F, this._2 = Q, this._3 = K;
  }
  function y(S) {
    var F = function(Q, K, O) {
      return new v(S, Q, K, O);
    };
    return F.tag = S, F;
  }
  function w(S) {
    return new v(n, void 0);
  }
  function L(S) {
    try {
      S();
    } catch (F) {
      setTimeout(function() {
        throw F;
      }, 0);
    }
  }
  function k(S, F, Q) {
    try {
      return F(Q());
    } catch (K) {
      return S(K);
    }
  }
  function A(S, F, Q) {
    try {
      return F(Q)();
    } catch (K) {
      return Q(S(K))(), w;
    }
  }
  var H = (function() {
    var S = 1024, F = 0, Q = 0, K = new Array(S), O = !1;
    function B() {
      var nt;
      for (O = !0; F !== 0; )
        F--, nt = K[Q], K[Q] = void 0, Q = (Q + 1) % S, nt();
      O = !1;
    }
    return {
      isDraining: function() {
        return O;
      },
      enqueue: function(nt) {
        var U;
        F === S && (U = O, B(), O = U), K[(Q + F) % S] = nt, F++, O || B();
      }
    };
  })();
  function V(S) {
    var F = {}, Q = 0, K = 0;
    return {
      register: function(O) {
        var B = Q++;
        O.onComplete({
          rethrow: !0,
          handler: function(nt) {
            return function() {
              K--, delete F[B];
            };
          }
        })(), F[B] = O, K++;
      },
      isEmpty: function() {
        return K === 0;
      },
      killAll: function(O, B) {
        return function() {
          if (K === 0)
            return B();
          var nt = 0, U = {};
          function tt(st) {
            U[st] = F[st].kill(O, function(_t) {
              return function() {
                delete U[st], nt--, S.isLeft(_t) && S.fromLeft(_t) && setTimeout(function() {
                  throw S.fromLeft(_t);
                }, 0), nt === 0 && B();
              };
            })();
          }
          for (var ot in F)
            F.hasOwnProperty(ot) && (nt++, tt(ot));
          return F = {}, Q = 0, K = 0, function(st) {
            return new v(o, function() {
              for (var _t in U)
                U.hasOwnProperty(_t) && U[_t]();
            });
          };
        };
      }
    };
  }
  var M = 0, P = 1, R = 2, j = 3, et = 4, Y = 5, I = 6;
  function x(S, F, Q) {
    var K = 0, O = M, B = Q, nt = null, U = null, tt = null, ot = null, st = null, _t = 0, Pt = 0, vt = null, Vt = !0;
    function ht(it) {
      for (var ut, $t, Nt; ; )
        switch (ut = null, $t = null, Nt = null, O) {
          case R:
            O = P;
            try {
              B = tt(B), ot === null ? tt = null : (tt = ot._1, ot = ot._2);
            } catch (Gt) {
              O = Y, nt = S.left(Gt), B = null;
            }
            break;
          case j:
            S.isLeft(B) ? (O = Y, nt = B, B = null) : tt === null ? O = Y : (O = R, B = S.fromRight(B));
            break;
          case P:
            switch (B.tag) {
              case s:
                tt && (ot = new v(_, tt, ot)), tt = B._2, O = P, B = B._1;
                break;
              case n:
                tt === null ? (O = Y, B = S.right(B._1)) : (O = R, B = B._1);
                break;
              case o:
                O = j, B = k(S.left, S.right, B._1);
                break;
              case i:
                O = et, B = A(S.left, B._1, function(Gt) {
                  return function() {
                    K === it && (K++, H.enqueue(function() {
                      K === it + 1 && (O = j, B = Gt, ht(K));
                    }));
                  };
                });
                return;
              case e:
                O = Y, nt = S.left(B._1), B = null;
                break;
              // Enqueue the Catch so that we can call the error handler later on
              // in case of an exception.
              case r:
                tt === null ? st = new v(_, B, st, U) : st = new v(_, B, new v(_, new v(h, tt, ot), st, U), U), tt = null, ot = null, O = P, B = B._1;
                break;
              // Enqueue the Bracket so that we can call the appropriate handlers
              // after resource acquisition.
              case u:
                _t++, tt === null ? st = new v(_, B, st, U) : st = new v(_, B, new v(_, new v(h, tt, ot), st, U), U), tt = null, ot = null, O = P, B = B._1;
                break;
              case c:
                O = j, ut = x(S, F, B._2), F && F.register(ut), B._1 && ut.run(), B = S.right(ut);
                break;
              case f:
                O = P, B = D(S, F, B._1);
                break;
            }
            break;
          case Y:
            if (tt = null, ot = null, st === null)
              O = I, B = U || nt || B;
            else
              switch (ut = st._3, Nt = st._1, st = st._2, Nt.tag) {
                // We cannot recover from an unmasked interrupt. Otherwise we should
                // continue stepping, or run the exception handler if an exception
                // was raised.
                case r:
                  U && U !== ut && _t === 0 ? O = Y : nt && (O = P, B = Nt._2(S.fromLeft(nt)), nt = null);
                  break;
                // We cannot resume from an unmasked interrupt or exception.
                case h:
                  U && U !== ut && _t === 0 || nt ? O = Y : (tt = Nt._1, ot = Nt._2, O = R, B = S.fromRight(B));
                  break;
                // If we have a bracket, we should enqueue the handlers,
                // and continue with the success branch only if the fiber has
                // not been interrupted. If the bracket acquisition failed, we
                // should not run either.
                case u:
                  _t--, nt === null && ($t = S.fromRight(B), st = new v(_, new v(p, Nt._2, $t), st, ut), (U === ut || _t > 0) && (O = P, B = Nt._3($t)));
                  break;
                // Enqueue the appropriate handler. We increase the bracket count
                // because it should not be cancelled.
                case p:
                  st = new v(_, new v(m, B, nt), st, U), O = P, U && U !== ut && _t === 0 ? B = Nt._1.killed(S.fromLeft(U))(Nt._2) : nt ? B = Nt._1.failed(S.fromLeft(nt))(Nt._2) : B = Nt._1.completed(S.fromRight(B))(Nt._2), nt = null, _t++;
                  break;
                case $:
                  _t++, st = new v(_, new v(m, B, nt), st, U), O = P, B = Nt._1;
                  break;
                case m:
                  _t--, O = Y, B = Nt._1, nt = Nt._2;
                  break;
              }
            break;
          case I:
            for (var Rt in vt)
              vt.hasOwnProperty(Rt) && (Vt = Vt && vt[Rt].rethrow, L(vt[Rt].handler(B)));
            vt = null, U && nt ? setTimeout(function() {
              throw S.fromLeft(nt);
            }, 0) : S.isLeft(B) && Vt && setTimeout(function() {
              if (Vt)
                throw S.fromLeft(B);
            }, 0);
            return;
          case M:
            O = P;
            break;
          case et:
            return;
        }
    }
    function mt(it) {
      return function() {
        if (O === I)
          return Vt = Vt && it.rethrow, it.handler(B)(), function() {
          };
        var ut = Pt++;
        return vt = vt || {}, vt[ut] = it, function() {
          vt !== null && delete vt[ut];
        };
      };
    }
    function lt(it, ut) {
      return function() {
        if (O === I)
          return ut(S.right(void 0))(), function() {
          };
        var $t = mt({
          rethrow: !1,
          handler: function() {
            return ut(S.right(void 0));
          }
        })();
        switch (O) {
          case M:
            U = S.left(it), O = I, B = U, ht(K);
            break;
          case et:
            U === null && (U = S.left(it)), _t === 0 && (O === et && (st = new v(_, new v($, B(it)), st, U)), O = Y, B = null, nt = null, ht(++K));
            break;
          default:
            U === null && (U = S.left(it)), _t === 0 && (O = Y, B = null, nt = null);
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
        return O === M && ht(K), ut;
      };
    }
    return {
      kill: lt,
      join: dt,
      onComplete: mt,
      isSuspended: function() {
        return O === M;
      },
      run: function() {
        O === M && (H.isDraining() ? ht(K) : H.enqueue(function() {
          ht(K);
        }));
      }
    };
  }
  function C(S, F, Q, K) {
    var O = 0, B = {}, nt = 0, U = {}, tt = new Error("[ParAff] Early exit"), ot = null, st = t;
    function _t(mt, lt, dt) {
      var it = lt, ut = null, $t = null, Nt = 0, Rt = {}, Gt, Zt;
      t: for (; ; )
        switch (Gt = null, it.tag) {
          case N:
            if (it._3 === t && (Gt = B[it._1], Rt[Nt++] = Gt.kill(mt, function(Hn) {
              return function() {
                Nt--, Nt === 0 && dt(Hn)();
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
        for (Zt = 0, Gt = Nt; Zt < Gt; Zt++)
          Rt[Zt] = Rt[Zt]();
      return Rt;
    }
    function Pt(mt, lt, dt) {
      var it, ut, $t, Nt, Rt, Gt;
      for (S.isLeft(mt) ? (it = mt, ut = null) : (ut = mt, it = null); ; ) {
        if ($t = null, Nt = null, Rt = null, Gt = null, ot !== null)
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
              if (lt._3 = it, Rt = !0, Gt = nt++, U[Gt] = _t(tt, it === $t ? lt._2 : lt._1, function() {
                return function() {
                  delete U[Gt], Rt ? Rt = !1 : dt === null ? Pt(it, null, null) : Pt(it, dt._1, dt._2);
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
            else if (lt._3 = ut, Rt = !0, Gt = nt++, U[Gt] = _t(tt, ut === $t ? lt._2 : lt._1, function() {
              return function() {
                delete U[Gt], Rt ? Rt = !1 : dt === null ? Pt(ut, null, null) : Pt(ut, dt._1, dt._2);
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
    function vt(mt) {
      return function(lt) {
        return function() {
          delete B[mt._1], mt._3 = lt, Pt(lt, mt._2._1, mt._2._2);
        };
      };
    }
    function Vt() {
      var mt = P, lt = Q, dt = null, it = null, ut, $t;
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
                $t = O++, mt = Y, ut = lt, lt = new v(N, $t, new v(_, dt, it), t), ut = x(S, F, ut), ut.onComplete({
                  rethrow: !1,
                  handler: vt(lt)
                })(), B[$t] = ut, F && F.register(ut);
            }
            break;
          case Y:
            if (dt === null)
              break t;
            dt._1 === t ? (dt._1 = lt, mt = P, lt = dt._2, dt._2 = t) : (dt._2 = lt, lt = dt, it === null ? dt = null : (dt = it._1, it = it._2));
        }
      for (st = lt, $t = 0; $t < O; $t++)
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
  function D(S, F, Q) {
    return new v(i, function(K) {
      return function() {
        return C(S, F, Q, K);
      };
    });
  }
  return v.EMPTY = t, v.Pure = y(n), v.Throw = y(e), v.Catch = y(r), v.Sync = y(o), v.Async = y(i), v.Bind = y(s), v.Bracket = y(u), v.Fork = y(c), v.Seq = y(f), v.ParMap = y(g), v.ParApply = y(l), v.ParAlt = y(d), v.Fiber = x, v.Supervisor = V, v.Scheduler = H, v.nonCanceler = w, v;
})();
let to = null;
function Tp() {
  return to || (typeof document > "u" ? null : (to = document.createElement("canvas").getContext("2d"), to));
}
const yu = /* @__PURE__ */ new Map(), pa = (t) => (n) => (e) => (r) => {
  const o = `${e} ${n}px ${t}|${r}`, i = yu.get(o);
  if (i !== void 0) return i;
  const s = Tp();
  if (!s) return r.length * n * 0.62;
  s.font = `${e} ${n}px ${t}`;
  const u = s.measureText(r).width;
  return yu.set(o, u), u;
}, wp = (t) => () => t.clip("evenodd"), Lp = (t) => (n) => () => {
  const e = Math.max(8, Math.ceil(8 / Math.max(n.tile, 1e-3))), r = Math.max(2, Math.round(n.tile * e)), o = document.createElement("canvas");
  o.width = r, o.height = r;
  const i = o.getContext("2d");
  i.scale(e, e), i.fillStyle = n.bgCss, i.fillRect(0, 0, n.tile, n.tile), i.fillStyle = n.dotCss, i.beginPath(), i.arc(n.tile / 2, n.tile / 2, n.dotR, 0, 2 * Math.PI), i.fill();
  const s = t.createPattern(o, "repeat");
  s && typeof s.setTransform == "function" && s.setTransform(new DOMMatrix().scaleSelf(1 / e, 1 / e)), t.save(), t.fillStyle = s, t.fillRect(n.vx, n.vy, n.vw, n.vh), t.restore();
}, Ep = (t) => (n) => (e) => (r) => (o) => (i) => () => {
  if (typeof t.roundRect == "function")
    t.roundRect(n, e, r, o, i);
  else {
    const s = Math.min(i, r / 2, o / 2);
    t.moveTo(n + s, e), t.lineTo(n + r - s, e), t.quadraticCurveTo(n + r, e, n + r, e + s), t.lineTo(n + r, e + o - s), t.quadraticCurveTo(n + r, e + o, n + r - s, e + o), t.lineTo(n + s, e + o), t.quadraticCurveTo(n, e + o, n, e + o - s), t.lineTo(n, e + s), t.quadraticCurveTo(n, e, n + s, e), t.closePath();
  }
}, bp = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, vs = (t) => (n) => (e) => {
  const r = n.stroke;
  return () => {
    const o = r.value, i = Lg(t)(e);
    if (o !== e)
      return i(), n.stroke.value = e;
  };
}, kp = (t) => (n) => (e) => {
  const r = n.font;
  return () => {
    const o = r.value, i = Rg(t)(e);
    if (o !== e)
      return i(), n.font.value = e;
  };
}, Hr = (t) => (n) => (e) => {
  const r = n.fill;
  return () => {
    const o = r.value, i = wg(t)(e);
    if (o !== e)
      return i(), n.fill.value = e;
  };
}, Ro = (t) => (n) => {
  const e = n.length, r = (i) => {
    if (i >= e)
      return () => {
      };
    const s = i >= 0 && i < n.length ? n[i] : 0;
    if (s === 1) {
      const u = Cg(t)((() => {
        const f = i + 1 | 0;
        return f >= 0 && f < n.length ? n[f] : 0;
      })())((() => {
        const f = i + 2 | 0;
        return f >= 0 && f < n.length ? n[f] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 2) {
      const u = xg(t)((() => {
        const f = i + 1 | 0;
        return f >= 0 && f < n.length ? n[f] : 0;
      })())((() => {
        const f = i + 2 | 0;
        return f >= 0 && f < n.length ? n[f] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 3) {
      const u = Bg(t)({
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
      const u = Qg(t)({
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
      const u = Sg(t), c = r(i + 1 | 0);
      return () => (u(), c());
    }
    return () => {
    };
  }, o = oc(t);
  return () => (o(), r(0)());
}, xp = () => ({ font: { value: "" }, fill: { value: "" }, stroke: { value: "" } }), Cp = (t) => (n) => {
  const e = Pg(t)({ x: 0, y: 0, width: n.width, height: n.height });
  return () => {
    e();
    const r = xp();
    return { ctx: t, surface: n, styleCache: r, maskDepth: { value: 0 } };
  };
}, Sp = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, Gp = (t) => _n(t.weight) + " " + Fu(t.size) + "px Ilisarniq, ui-sans-serif, system-ui, sans-serif", Kn = (t) => {
  const n = Fu(at(t.a) / 255);
  return t.a >= 255 ? "rgb(" + _n(t.r) + "," + _n(t.g) + "," + _n(t.b) + ")" : "rgba(" + _n(t.r) + "," + _n(t.g) + "," + _n(t.b) + "," + n + ")";
}, Pp = (t) => (n) => (e) => (r) => {
  const o = Hr(t)(e)(Kn(r));
  return () => (o(), Gg(t)({ x: 0, y: 0, width: n.width, height: n.height })());
}, Ap = (t) => (n) => (e) => {
  const r = n.font;
  return () => (r.value = "", n.fill.value = "", n.stroke.value = "", Lp(t)({
    vx: e.viewport.vx,
    vy: e.viewport.vy,
    vw: e.viewport.vw,
    vh: e.viewport.vh,
    bgCss: Kn(e.bgColor),
    dotCss: Kn(e.dotColor),
    tile: e.tile,
    dotR: e.dotRadius
  })());
}, Ip = (t) => (n) => (e) => (r) => {
  const o = Hr(t)(n)(Kn(r));
  return () => (o(), Ro(t)(e)(), Oi(t)());
}, Rp = (t) => (n) => (e) => (r) => (o) => {
  const i = Hr(t)(n)(Kn(r));
  return () => (i(), vs(t)(n)(Kn(o.color))(), Hi(t)(o.width)(), Co(t)((() => {
    if (o.lineJoin === "RoundJoin")
      return xo;
    if (o.lineJoin === "BevelJoin")
      return Mi;
    if (o.lineJoin === "MiterJoin")
      return Ki;
    a();
  })())(), ns(t)((() => {
    if (o.lineCap === "ButtCap")
      return ts;
    if (o.lineCap === "RoundCap")
      return ji;
    if (o.lineCap === "SquareCap")
      return Zi;
    a();
  })())(), Ro(t)(e)(), Oi(t)(), zi(t)());
}, Fp = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = oc(t);
  return () => {
    if (s(), Ep(t)(e.x)(e.y)(e.w)(e.h)(r)(), o.tag === "Just" ? (Hr(t)(n)(Kn(o._1.color))(), Oi(t)()) : o.tag === "Nothing" || a(), i.tag === "Just")
      return vs(t)(n)(Kn(i._1.color))(), Hi(t)(i._1.width)(), Co(t)((() => {
        if (i._1.lineJoin === "RoundJoin")
          return xo;
        if (i._1.lineJoin === "BevelJoin")
          return Mi;
        if (i._1.lineJoin === "MiterJoin")
          return Ki;
        a();
      })())(), ns(t)((() => {
        if (i._1.lineCap === "ButtCap")
          return ts;
        if (i._1.lineCap === "RoundCap")
          return ji;
        if (i._1.lineCap === "SquareCap")
          return Zi;
        a();
      })())(), zi(t)();
    i.tag !== "Nothing" && a();
  };
}, Bp = (t) => (n) => (e) => (r) => {
  const o = vs(t)(n)(Kn(r.color));
  return () => (o(), Hi(t)(r.width)(), Co(t)((() => {
    if (r.lineJoin === "RoundJoin")
      return xo;
    if (r.lineJoin === "BevelJoin")
      return Mi;
    if (r.lineJoin === "MiterJoin")
      return Ki;
    a();
  })())(), ns(t)((() => {
    if (r.lineCap === "ButtCap")
      return ts;
    if (r.lineCap === "RoundCap")
      return ji;
    if (r.lineCap === "SquareCap")
      return Zi;
    a();
  })())(), Ro(t)(e)(), zi(t)());
}, Qp = (t) => (n) => (e) => {
  const r = Hr(t)(n)(Kn(e.color));
  return () => (r(), kp(t)(n)(Gp(e.font))(), Mg(t)((() => {
    if (e.align === "AlignLeft")
      return zg;
    if (e.align === "AlignCenter")
      return Vg;
    if (e.align === "AlignRight")
      return Og;
    a();
  })())(), Ug(t)((() => {
    if (e.baseline === "BaselineTop")
      return Dg;
    if (e.baseline === "BaselineMiddle")
      return Wg;
    if (e.baseline === "BaselineAlphabetic")
      return qg;
    if (e.baseline === "BaselineBottom")
      return Hg;
    a();
  })())(), Fg(t)(e.content)(e.x)(e.y)());
}, $a = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => Sp
}, Dp = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => $a
}, Wp = (t) => (n) => (e) => {
  const r = bp(n.width / e.vw)(n.height / e.vh), o = ic(t)({ translateX: (n.width - e.vw * r) / 2 - e.vx * r, translateY: (n.height - e.vh * r) / 2 - e.vy * r });
  return () => (o(), Vi(t)({ scaleX: r, scaleY: r })(), Co(t)(xo)());
}, qp = { pure: (t) => (n) => () => t, Apply0: () => $a }, Hp = { Applicative0: () => qp, Bind1: () => Dp }, ma = {
  fillPath: (t) => (n) => (e) => {
    const r = Ip(e.ctx)(e.styleCache)(t)(n.color), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = Bp(e.ctx)(e.styleCache)(t)(n), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = Rp(r.ctx)(r.styleCache)(t)(n.color)(e), i = r.maskDepth;
    return () => {
      if (i.value === 0)
        return o();
    };
  },
  drawRoundedRect: (t) => (n) => (e) => (r) => (o) => {
    const i = Fp(o.ctx)(o.styleCache)(t)(n)(e)(r), s = o.maskDepth;
    return () => {
      if (s.value === 0)
        return i();
    };
  },
  drawText: (t) => (n) => {
    const e = Qp(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  pushTransform: (t) => (n) => {
    const e = fr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", ic(n.ctx)({ translateX: t.tx, translateY: t.ty })(), Vi(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popTransform: (t) => {
    const n = gr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushClip: (t) => (n) => (e) => {
    const r = fr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0) {
        if (r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", Ro(e.ctx)(t)(), n === "NonZero")
          return kg(e.ctx)();
        if (n === "EvenOdd")
          return wp(e.ctx)();
        a();
      }
    };
  },
  popClip: (t) => {
    const n = gr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBlend: (t) => (n) => {
    const e = fr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        if (e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", t === "Normal")
          return As(n.ctx)(Yg)();
        if (t === "Difference")
          return As(n.ctx)(Xg)();
        a();
      }
    };
  },
  popBlend: (t) => {
    const n = gr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushAlpha: (t) => (n) => {
    const e = fr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", bg(n.ctx)(t)();
    };
  },
  popAlpha: (t) => {
    const n = gr(t.ctx), e = t.maskDepth;
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
    const e = Wp(n.ctx)(n.surface)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  clearBackground: (t) => (n) => {
    const e = Pp(n.ctx)(n.surface)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  backgroundDots: (t) => (n) => {
    const e = Ap(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = pa(t.family)(t.size)(t.weight)(xr(n));
    return () => r;
  },
  Monad0: () => Hp
};
function zp(t, n) {
  const e = n.x - t.x, r = n.y - t.y;
  return Math.sqrt(e * e + r * r);
}
function Op(t) {
  const n = t.length, e = new Array(n);
  for (let r = 0; r < n; r++) {
    const o = t[r], i = t[(r + 1) % n];
    e[r] = { a: o, b: i, len: zp(o, i) };
  }
  return e;
}
function Vp(t, n, e) {
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
function Tu(t, n) {
  if (n.length === 0) return [];
  const e = Op(n);
  let r = 0;
  for (let i = 0; i < e.length; i++) r += e[i].len;
  const o = new Array(t);
  for (let i = 0; i < t; i++)
    o[i] = Vp(e, n, i * r / t);
  return o;
}
function Yp(t, n) {
  const e = n.length;
  if (e === 0) return n;
  const r = (t % e + e) % e | 0, o = new Array(e);
  for (let i = 0; i < e; i++) o[i] = n[(i + r) % e];
  return o;
}
function Xp(t, n) {
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
  return Yp(r, n);
}
const wu = (t) => (n) => (e) => {
  const r = Tu(t, n), o = Tu(t, e), i = Xp(r, o);
  return { from: r, to: i };
};
function Lu(t) {
  const n = t.length;
  if (n === 0) return { x: 0, y: 0 };
  let e = 0, r = 0;
  for (let o = 0; o < n; o++)
    e += t[o].x, r += t[o].y;
  return { x: e / n, y: r / n };
}
function Up(t, n) {
  const e = n.x - t.x, r = n.y - t.y, o = Math.sqrt(e * e + r * r);
  return o <= 1e-4 ? { x: 1, y: 0 } : { x: e / o, y: r / o };
}
function Mp(t, n) {
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
function Kp(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
const Eu = (t) => (n) => (e) => (r) => {
  const o = n.length;
  if (o === 0) return [];
  const i = Lu(n), s = Lu(e), u = Up(i, s), c = new Array(o);
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
    const $ = l <= 1e-4 ? 0 : r.maxDelay * (1 - (c[_] - f) / l), m = Math.max(1e-4, 1 - $), N = Kp((t - $) / m), v = N * N * (3 - 2 * N);
    d[_] = {
      x: h.x + (p.x - h.x) * v,
      y: h.y + (p.y - h.y) * v
    };
  }
  for (let _ = 0; _ < r.smoothPasses; _++)
    d = Mp(0.5, d);
  return d;
}, jp = (t) => t, Na = (t) => t, Fo = (t) => t, Ja = (t) => t, Zp = (t) => t, va = (t) => t, ya = (t) => t, Ta = /* @__PURE__ */ ya("BaselineTop"), Fr = /* @__PURE__ */ ya("BaselineMiddle"), To = /* @__PURE__ */ va("AlignLeft"), ys = /* @__PURE__ */ va("AlignCenter"), jn = /* @__PURE__ */ Zp("RoundJoin"), Ne = /* @__PURE__ */ Ja("ButtCap"), wa = /* @__PURE__ */ Ja("RoundCap"), t$ = /* @__PURE__ */ Fo("LayerPolyOut"), n$ = /* @__PURE__ */ Fo("LayerPolyIn"), e$ = /* @__PURE__ */ Fo("LayerNodeMask"), r$ = /* @__PURE__ */ Fo("LayerOverlay"), La = /* @__PURE__ */ Na("NonZero"), o$ = /* @__PURE__ */ Na("EvenOdd"), i$ = /* @__PURE__ */ jp("Difference"), Xe = { r: 255, g: 255, b: 255, a: 255 }, ue = { r: 26, g: 26, b: 26, a: 255 }, si = (t, n, e) => ({ tag: t, _1: n, _2: e }), ce = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, Br = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, Ea = (t) => (e) => {
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
    a();
  }
  return i;
}, Ge = (t) => (n) => (e) => {
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
    a();
  }
  return i;
}, fe = /* @__PURE__ */ (() => {
  const t = qn.unfoldr(Ie);
  return (n) => t(Dn("IterNode", n, Ae));
})(), ui = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, ba = /* @__PURE__ */ Mt(G)(Ft), bu = /* @__PURE__ */ J(nr)(0), Bo = (t) => (e) => {
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
    a();
  }
  return i;
}, ka = (t) => {
  const n = t.Monad0().Bind1(), e = t.popTransform, r = t.popAlpha;
  return (o) => (i) => (s) => (u) => (c) => n.bind(t.pushAlpha(o.fadeAlpha))(() => n.bind(t.pushTransform({
    tx: i * (1 - o.popScale),
    ty: s * (1 - o.popScale),
    sx: o.popScale,
    sy: o.popScale
  }))(() => n.bind(t.pushTransform({ tx: 0, ty: u.y * (1 - o.flipY), sx: 1, sy: o.flipY }))(() => n.bind(c)(() => n.bind(e)(() => n.bind(e)(() => r))))));
}, ge = (t) => {
  const n = t.Apply0();
  return (e) => J((r) => (o) => n.apply(n.Functor0().map((i) => Du)(r))(e(o)))(t.pure());
}, s$ = (t) => ({ x: t.x, y: t.y, w: t.w, h: t.h }), u$ = /* @__PURE__ */ J((t) => (n) => t + n.len)(0), c$ = (t) => {
  const n = Qt((e) => T, (e) => (r) => b("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Ct(It(1, t.length, t))((e) => [2, e.x, e.y]), 5];
  a();
}, a$ = (t) => (n) => {
  const e = t.y + t.h - 6, r = t.y + 6, o = t.x + 14, i = t.x + t.w - 14, s = J(Br)(0)(z((u) => o - 10 < u.x + u.w + 12 && i + 10 > u.x - 12 && r - 10 < u.y + u.h + 12 && e + 10 > u.y - 12 ? ce((u.x + u.w + 12 - (o - 10)) / 0.7071067811865476)((e + 10 - (u.y - 12)) / 0.7071067811865476) : 0)(n));
  return { ...t, x: t.x + s * 0.7071067811865476, y: t.y - s * 0.7071067811865476 };
}, f$ = { r: 26, g: 26, b: 26, a: 255 }, g$ = { r: 214, g: 211, b: 209, a: 255 }, xa = (t) => (n) => {
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
}, _$ = (t) => (n) => (e) => J((r) => (o) => {
  const i = Ea(o)(n);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just") {
    const s = a$(i._1)(r.obstacles);
    return { acc: X(G)(o)(s)(r.acc), obstacles: sn(r.obstacles)(s) };
  }
  a();
})({ acc: W, obstacles: e })(t).acc, l$ = (t) => {
  const n = Qt((e) => T, (e) => (r) => b("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Ct(n._1.tail)((e) => [2, e.x, e.y])];
  a();
}, Qo = (t) => {
  if (t.tag === "Hidden")
    return { alpha: 0, scale: 0 };
  if (t.tag === "Visible")
    return { alpha: 1, scale: 1 };
  if (t.tag === "PloppingIn")
    return { alpha: t._1 > 0 ? 1 : 0, scale: Lr(8)(0.6)(Ge(0)(1)(t._1)) };
  if (t.tag === "PloppingOut")
    return { alpha: t._1 < 1 ? 1 : 0, scale: Lr(8)(0.6)(Ge(0)(1)(1 - t._1)) };
  a();
}, Ca = (t) => (n) => Ct(fe(t.nodes))((e) => {
  const r = An(e._1)(n.nodes);
  return r.tag === "Just" && Qo(r._1).alpha > 0 ? xa(e._2)(7) : [];
}), d$ = (t) => (n) => (e) => [
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
  ...Ca(n)(e)
], no = (t) => (n) => (e) => z((r) => {
  const o = at(r) / at(e);
  return { x: t.x + (n.x - t.x) * o, y: t.y + (n.y - t.y) * o };
})(Yt(0, e - 1 | 0)), h$ = (t) => (n) => {
  const e = (o) => (o.x - n.x) * (o.x - n.x) + (o.y - n.y) * (o.y - n.y), r = J((o) => (i) => e(i) < e(o) ? i : o)({ x: t.x, y: t.y })([{ x: t.x, y: t.y }, { x: t.x + t.w, y: t.y }, { x: t.x, y: t.y + t.h }, { x: t.x + t.w, y: t.y + t.h }]);
  return z((o) => {
    const i = at(o) / 5;
    return { x: r.x + (n.x - r.x) * i, y: r.y + (n.y - r.y) * i };
  })([1, 2, 3, 4]);
}, Sa = (t) => {
  const n = gs(`
`)(t);
  return n.length === 0 ? [""] : n;
}, ki = (t) => (n) => {
  const e = ce(t)(ce(n.w / 2)(n.h / 2));
  return { ...n, x: n.x + e, y: n.y + e, w: n.w - 2 * e, h: n.h - 2 * e };
}, p$ = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = ge(e), i = t.popTransform, s = t.popAlpha;
  return (u) => (c) => (f) => {
    const g = gs(`
`)(c.label === "" ? u : c.label), l = g.length === 0 ? [""] : g, d = c.y + c.h / 2 - at(l.length) * 13.2 / 2 + 6.6, _ = Qo(f), h = c.x + c.w / 2, p = c.y + c.h / 2, $ = r.bind(t.pushAlpha(_.alpha))(() => r.bind(t.pushTransform({
      tx: h * (1 - _.scale),
      ty: p * (1 - _.scale),
      sx: _.scale,
      sy: _.scale
    }))(() => r.bind(t.drawRoundedRect({ x: c.x, y: c.y, w: c.w, h: c.h })(7)(b(
      "Just",
      { color: Xe, flat: !1 }
    ))(b(
      "Just",
      { color: ue, width: 1.25, lineJoin: jn, lineCap: Ne }
    )))(() => r.bind(o((m) => t.drawText({
      x: c.x + c.w / 2,
      y: d + at(m._1) * 13.2,
      content: m._2,
      font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 },
      color: ue,
      align: ys,
      baseline: Fr
    }))(At(ir)(l)))(() => r.bind(i)(() => s)))));
    return _.alpha > 0 ? $ : e.pure();
  };
}, Ga = (t) => {
  const n = p$(t), e = t.Monad0().Applicative0(), r = ge(e);
  return (o) => (i) => r((s) => {
    const u = An(s._1)(i.nodes);
    if (u.tag === "Just")
      return n(s._1)(s._2)(u._1);
    if (u.tag === "Nothing")
      return e.pure();
    a();
  })(fe(o.nodes));
}, xi = (t) => (n) => {
  const e = n.y - t.y, r = n.x - t.x;
  return sr(r * r + e * e);
}, $$ = (t) => Tn((n) => (e) => ({ a: n, b: e, len: xi(n)(e) }), t, It(1, t.length, t)), m$ = (t) => (n) => {
  const e = n.length - 1 | 0, r = e >= 0 && e < n.length ? b("Just", n[e]) : T, o = (() => {
    if (r.tag === "Just")
      return [r._1];
    if (r.tag === "Nothing")
      return [];
    a();
  })(), i = 0 < n.length ? b("Just", n[0]) : T, s = (() => {
    if (i.tag === "Just")
      return i._1;
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    a();
  })(), u = n.length;
  return u < 3 ? n : [
    s,
    ...Ct(Yt(1, u - 2 | 0))((c) => {
      const f = c + 1 | 0, g = f >= 0 && f < n.length ? b("Just", n[f]) : T, l = c >= 0 && c < n.length ? b("Just", n[c]) : T, d = c - 1 | 0, _ = d >= 0 && d < n.length ? b("Just", n[d]) : T;
      if (_.tag === "Just" && l.tag === "Just" && g.tag === "Just") {
        const h = l._1, p = xi(h)(g._1), $ = xi(_._1)(h), m = ce(t)(p / 2), N = ce(t)($ / 2), v = p > 0 ? m / p : 0, y = h.x + (g._1.x - h.x) * v, w = h.y + (g._1.y - h.y) * v, L = $ > 0 ? N / $ : 0, k = h.x + (_._1.x - h.x) * L, A = h.y + (_._1.y - h.y) * L;
        return z((H) => {
          const V = at(H) / at(10), M = 1 - V;
          return { x: M * M * k + 2 * M * V * h.x + V * V * y, y: M * M * A + 2 * M * V * h.y + V * V * w };
        })(Yt(0, 10));
      }
      return [];
    }),
    ...o
  ];
}, N$ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = ge(r);
  return (i) => (s) => (u) => (c) => (f) => (g) => {
    const l = _s(g).length, d = at(l + 1 | 0), _ = (m) => {
      const N = (u * d - at(m)) / 1.5, v = N < 0 ? 0 : N > 1 ? 1 : N;
      return v * v * (3 - 2 * v);
    }, p = ((m) => {
      let N = m, v = !0, y;
      for (; v; ) {
        const w = N;
        if (w >= l) {
          v = !1, y = w;
          continue;
        }
        if (_(w) >= 1) {
          N = w + 1 | 0;
          continue;
        }
        v = !1, y = w;
      }
      return y;
    })(0), $ = p >= l ? [] : Le((m) => _(m) > 0)(Yt(p, l - 1 | 0)).init;
    return e.bind((() => {
      const m = t.drawText({
        x: c,
        y: f,
        content: fn(p)(g),
        font: i,
        color: s,
        align: To,
        baseline: Fr
      });
      return p > 0 ? m : r.pure();
    })())(() => o((m) => e.bind(t.measureText(i)(fn(m)(g)))((N) => {
      const v = _(m);
      return t.drawText({
        x: c + N,
        y: f - (1 - v) * 10,
        content: fn(1)(Er(xe(fn(m)(g)))(g)),
        font: i,
        color: { ...s, a: ur(Ku(v * at(s.a))) },
        align: To,
        baseline: Fr
      });
    }))($));
  };
}, Do = (t) => (n) => (e) => (r) => {
  const o = z((p) => at(ui(1)(_s(p).length)))(r), i = Br(1)(J(nr)(0)(o)), s = Br(0.05)(1 - n - e), u = t < n ? 0 : t > 1 - e ? 1 : (t - n) / s, c = u * i, f = ui(1)(r.length), l = ((p) => ($) => (m) => {
    let N = p, v = $, y = m, w = !0, L;
    for (; w; ) {
      const k = N, A = v, V = Qt((M) => T, (M) => (P) => b("Just", { head: M, tail: P }), y);
      if (V.tag === "Nothing") {
        w = !1, L = ui(0)(f - 1 | 0);
        continue;
      }
      if (V.tag === "Just") {
        if (A + V._1.head >= c) {
          w = !1, L = k;
          continue;
        }
        N = k + 1 | 0, v = A + V._1.head, y = V._1.tail;
        continue;
      }
      a();
    }
    return L;
  })(0)(0)(o), d = J(nr)(0)(l < 1 ? [] : It(0, l, o)), _ = d / i;
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
}, J$ = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(Do(r)(0)(0)(o).line))((i) => {
    const s = i + 28;
    return n.Applicative0().pure({ x: e.x + e.w / 2 - s / 2, y: e.y - 25.2 - 14, w: s, h: 25.2 });
  });
}, v$ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = J$(t), o = n.Applicative0(), i = Wr.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => ba(yt((f) => f)(c)))(i((c) => {
    if (c._2.tag === "Filling" && c._2._1.labels.length !== 0) {
      const f = An(c._2._1.node)(s.nodes);
      if (f.tag === "Just")
        return e.bind(r(f._1)(c._2._1.progress)(c._2._1.labels))((g) => o.pure(b("Just", E(c._1, g))));
      if (f.tag === "Nothing")
        return o.pure(T);
      a();
    }
    return o.pure(T);
  })(fe(u.tokens)));
}, ku = (t) => (n) => z((e) => {
  const r = 6.283185307179586 * at(e) / at(64);
  return { x: t.x + n * Qi(r), y: t.y + n * Di(r) };
})(Yt(0, 63)), Ts = (t) => (n) => {
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
}, y$ = (t) => {
  const n = t.Monad0().Bind1(), e = t.popAlpha;
  return (r) => (o) => (i) => (s) => (u) => (c) => (f) => {
    const g = { x: i.x + i.w / 2, y: i.y + i.h / 2 }, l = Br(0.05)(1 - c - f), d = u < c ? 0 : u > 1 - f ? 1 : (u - c) / l, _ = { x: s.x + s.w / 2, y: s.y + s.h / 2 }, h = (p, $) => n.bind(t.pushAlpha($))(() => n.bind(t.fillStrokePath(Ts(p)(6))({ color: r, flat: !0 })({
      color: o,
      width: 1,
      lineJoin: jn,
      lineCap: Ne
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
}, T$ = { r: 255, g: 235, b: 130, a: 255 }, w$ = (t) => {
  const n = t.length;
  return n === 0 ? { x: 0, y: 0 } : { x: bu(z((e) => e.x)(t)) / at(n), y: bu(z((e) => e.y)(t)) / at(n) };
}, Pa = (t) => (n) => (e) => {
  const r = Lr(6)(0.55)(Ge(0)(1)((1 - t) / 0.06)), o = t > 0.94, i = o && e > 1e-4, s = Lr(6)(0.55)(Ge(0)(1)(t / 0.06)), u = t < 0.06, c = u && n > 1e-4, f = o && e <= 1e-4;
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
}, L$ = (t) => {
  const n = t.Monad0().Bind1(), e = ka(t);
  return (r) => (o) => (i) => (s) => {
    const u = Pa(i)(0)(0), c = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 }, f = Do(i)(0)(0)(s);
    return n.bind(t.measureText(c)(f.line))((g) => {
      const l = { r: 26, g: 26, b: 26, a: 90 }, d = o.x + o.w / 2, _ = g + 28, h = o.y - 25.2 - 14, p = d - _ / 2, $ = [1, d, h + 25.2, 2, d, o.y], m = { x: d, y: h + 12.6 };
      return e(u)(d - _ / 2)(h + 25.2)(m)(n.bind(t.drawRoundedRect({ x: d - _ / 2, y: h + 1.5, w: _, h: 25.2 })(6)(b(
        "Just",
        { color: g$, flat: !0 }
      ))(T))(() => n.bind(t.drawRoundedRect({ x: p, y: h, w: _, h: 25.2 })(6)(b("Just", { color: T$, flat: !0 }))(b(
        "Just",
        { color: l, width: 1, lineJoin: jn, lineCap: Ne }
      )))(() => n.bind(t.strokePath($)({
        color: l,
        width: 1,
        lineJoin: jn,
        lineCap: Ne
      }))(() => t.drawText({
        x: d,
        y: m.y,
        content: f.line,
        font: c,
        color: ue,
        align: ys,
        baseline: Fr
      })))));
    });
  };
}, Aa = { r: 0, g: 0, b: 0, a: 0 }, E$ = (t) => (n) => t.backgroundDots({
  viewport: { vx: n.x, vy: n.y, vw: n.w, vh: n.h },
  bgColor: Aa,
  dotColor: f$,
  tile: 1.6,
  dotRadius: 0.25
}), b$ = { r: 214, g: 211, b: 209, a: 255 }, Ia = { r: 255, g: 255, b: 255, a: 255 }, Ra = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => e ? n.bind(t.clearBackground(Aa))(() => t.setViewport(r)) : n.bind(t.setViewport(r))(() => t.backgroundDots({ viewport: r, bgColor: Ia, dotColor: b$, tile: 12, dotRadius: 0.7 }));
}, k$ = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = t.popClip, i = t.popTransform, s = t.popAlpha;
  return (u) => (c) => (f) => {
    const g = Qo(f), l = { ...c, y: c.y + 5 }, d = l.x + l.w / 2, _ = l.y + l.h / 2, h = r.bind(t.pushAlpha(g.alpha))(() => r.bind(t.pushTransform({
      tx: d * (1 - g.scale),
      ty: _ * (1 - g.scale),
      sx: g.scale,
      sy: g.scale
    }))(() => r.bind(t.drawRoundedRect({ x: l.x, y: l.y, w: l.w, h: l.h })(7)(b("Just", { color: Ia, flat: !0 }))(T))(() => r.bind((() => {
      const p = r.bind(t.pushClip(xa(l)(7))(La))(() => r.bind(E$(t)(l))(() => o));
      return u ? p : e.pure();
    })())(() => r.bind(t.drawRoundedRect({ x: l.x, y: l.y, w: l.w, h: l.h })(7)(T)(b(
      "Just",
      { color: ue, width: 1.25, lineJoin: jn, lineCap: Ne }
    )))(() => r.bind(i)(() => s))))));
    return g.alpha > 0 ? h : e.pure();
  };
}, Fa = (t) => {
  const n = k$(t), e = t.Monad0().Applicative0(), r = ge(e);
  return (o) => (i) => (s) => r((u) => {
    const c = An(u._1)(s.nodes);
    if (c.tag === "Just")
      return n(o)(u._2)(c._1);
    if (c.tag === "Nothing")
      return e.pure();
    a();
  })(fe(i.nodes));
}, x$ = (t) => {
  const n = t.Monad0().Applicative0();
  return (e) => {
    const r = e.length - 1 | 0, o = r < 1 ? [] : It(0, r, e), i = o.length - 1 | 0, s = i >= 0 && i < o.length ? b("Just", o[i]) : T, u = e.length - 1 | 0;
    if (u >= 0 && u < e.length && s.tag === "Just") {
      const c = e[u].y - s._1.y, f = e[u].x - s._1.x, g = sr(f * f + c * c), l = c / g, d = -l, _ = f / g, h = e[u].x + _ * 0.875, p = e[u].y + l * 0.875, $ = p - l * 8.75, m = h - _ * 8.75, N = [1, h, p, 2, m + d * 4.375, $ + _ * 4.375, 2, m - d * 4.375, $ - _ * 4.375, 5];
      return g <= 1e-4 ? n.pure() : t.fillPath(N)({ color: ue, flat: !0 });
    }
    return n.pure();
  };
}, eo = (t) => (n) => (e) => (r) => (o) => z((i) => {
  const s = e + (r - e) * (at(i) / at(o));
  return { x: t.x + n * Qi(s), y: t.y + n * Di(s) };
})(Yt(0, o - 1 | 0)), xu = (t) => (n) => {
  const e = ce(t)(ce(n.w / 2)(n.h / 2));
  return [
    ...no({ x: n.x + e, y: n.y })({ x: n.x + n.w - e, y: n.y })(6),
    ...eo({ x: n.x + n.w - e, y: n.y + e })(e)(4.71238898038469)(6.283185307179586)(12),
    ...no({ x: n.x + n.w, y: n.y + e })({ x: n.x + n.w, y: n.y + n.h - e })(6),
    ...eo({ x: n.x + n.w - e, y: n.y + n.h - e })(e)(0)(1.5707963267948966)(12),
    ...no({ x: n.x + n.w - e, y: n.y + n.h })({ x: n.x + e, y: n.y + n.h })(6),
    ...eo({ x: n.x + e, y: n.y + n.h - e })(e)(1.5707963267948966)(3.141592653589793)(12),
    ...no({ x: n.x, y: n.y + n.h - e })({ x: n.x, y: n.y + e })(6),
    ...eo({ x: n.x + e, y: n.y + e })(e)(3.141592653589793)(4.71238898038469)(12)
  ];
}, C$ = (t) => (n) => (e) => J((r) => (o) => {
  const i = r.pos + o.len, s = e < i ? (e - r.pos) / o.len : 1, u = { x: o.a.x + (o.b.x - o.a.x) * s, y: o.a.y + (o.b.y - o.a.y) * s }, c = n > r.pos ? (n - r.pos) / o.len : 0, f = { x: o.a.x + (o.b.x - o.a.x) * c, y: o.a.y + (o.b.y - o.a.y) * c }, g = r.points.length - 1 | 0, l = g >= 0 && g < r.points.length ? (() => {
    const d = r.points[g].x - f.x;
    return (d < 0 ? -d < 1e-4 : d < 1e-4) && (() => {
      const _ = r.points[g].y - f.y;
      return _ < 0 ? -_ < 1e-4 : _ < 1e-4;
    })();
  })() ? sn(r.points)(u) : [...r.points, f, u] : [f, u];
  return o.len <= 0 || i <= n || r.pos >= e ? { ...r, pos: i } : { pos: i, points: l };
})({ pos: 0, points: [] })(t).points, S$ = (t) => (n) => (e) => {
  const r = Qt((o) => T, (o) => (i) => b("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just") {
    const o = $$(t), i = u$(o), s = Ge(0)(i)(n * i), u = Ge(0)(i)(e * i);
    return u <= s ? [] : C$(o)(s)(u);
  }
  a();
}, G$ = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = x$(t);
  return (o) => (i) => (s) => {
    const u = m$(8)(i);
    if (s.hi <= s.lo)
      return e.pure();
    const c = S$(u)(s.lo)(s.hi);
    return c.length === 0 ? e.pure() : n.Bind1().bind(t.strokePath(l$(c))({
      color: ue,
      width: 0.9375,
      lineJoin: jn,
      lineCap: wa
    }))(() => r(c));
  };
}, Ba = (t) => {
  const n = G$(t), e = t.Monad0().Applicative0(), r = ge(e);
  return (o) => (i) => r((s) => {
    const u = Bo(s._1)(i.edges);
    if (u.tag === "Just")
      return n(s._1)(s._2)((() => {
        if (u._1.tag === "Retracted")
          return { lo: 0, hi: 0 };
        if (u._1.tag === "Extended")
          return { lo: 0, hi: 1 };
        if (u._1.tag === "Extending")
          return { lo: 0, hi: u._1._2 };
        if (u._1.tag === "Retracting") {
          if (u._1._1 === "FromSource")
            return { lo: u._1._2, hi: 1 };
          if (u._1._1 === "FromTarget")
            return { lo: 0, hi: 1 - u._1._2 };
          if (u._1._1 === "FromBoth")
            return { lo: u._1._2 / 2, hi: 1 - u._1._2 / 2 };
        }
        a();
      })());
    if (u.tag === "Nothing")
      return e.pure();
    a();
  })(fe(o.edges));
}, Qa = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = 0 < t.length ? b("Just", t[0]) : T, f = (() => {
    if (c.tag === "Just")
      return c._1;
    if (c.tag === "Nothing")
      return u;
    a();
  })(), g = t.length - 1 | 0, l = g >= 0 && g < t.length ? b("Just", t[g]) : T, d = (() => {
    if (l.tag === "Just")
      return l._1;
    if (l.tag === "Nothing")
      return s;
    a();
  })(), _ = wu(128)(xu(5)(ki(2)(n)))(ku(f)(6)), h = Br(0.05)(1 - o - i), p = r < o ? 0 : r > 1 - i ? 1 : (r - o) / h, $ = f.x - u.x, m = 2 * (() => {
    const j = f.y - u.y;
    return ($ < 0 ? -$ : $) + (j < 0 ? -j : j);
  })(), N = d.x - s.x, v = 2 * (() => {
    const j = d.y - s.y;
    return (N < 0 ? -N : N) + (j < 0 ? -j : j);
  })(), y = m + rs(t) + v, w = y <= 1e-4 ? 1 : 1 - v / y, L = y <= 1e-4 ? 0 : m / y, k = w - L, A = wu(128)(ku(d)(6))(xu(5)(ki(2)(e))), H = { maxDelay: 0.4, smoothPasses: 2 }, V = cc(t)(Ge(0)(1)(k <= 1e-4 ? 0 : (p - L) / k)), M = (() => {
    if (V.tag === "Just")
      return V._1;
    if (V.tag === "Nothing")
      return f;
    a();
  })(), P = (() => {
    if (w >= 1)
      return 0;
    const j = (p - w) / (1 - w), et = j < 0 ? 0 : j > 1 ? 1 : j;
    return et * et * (3 - 2 * et);
  })(), R = (() => {
    if (L <= 1e-4)
      return 1;
    const j = p / L, et = j < 0 ? 0 : j > 1 ? 1 : j;
    return et * et * (3 - 2 * et);
  })();
  return p < L ? si("PolyShape", Eu(R)(_.from)(_.to)(H)) : p >= w ? si("PolyShape", Eu(P)(A.from)(A.to)(H)) : si("CircleShape", M, 6);
}, P$ = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => {
  const f = Qa(r)(o)(i)(s)(u)(c);
  if (f.tag === "CircleShape")
    return t.fillStrokePath(Ts(f._1)(f._2))({ color: n, flat: !0 })({
      color: e,
      width: 1,
      lineJoin: jn,
      lineCap: Ne
    });
  if (f.tag === "PolyShape")
    return f._1.length >= 3 ? t.fillStrokePath(c$(f._1))({ color: n, flat: !0 })({
      color: e,
      width: 1,
      lineJoin: jn,
      lineCap: Ne
    }) : t.Monad0().Applicative0().pure();
  a();
}, Da = (t) => {
  const n = y$(t), e = t.Monad0().Applicative0(), r = ge(e);
  return (o) => (i) => (s) => (u) => r((c) => {
    if (c._2.tag === "Travelling") {
      const f = An(c._2._1.target)(o.nodes), g = An(c._2._1.source)(o.nodes);
      if (g.tag === "Just" && f.tag === "Just") {
        const l = Bo(c._2._1.edge)(o.edges);
        if (l.tag === "Just")
          return P$(t)(s)(u)((() => {
            if (c._2._1.direction === "Forward")
              return l._1;
            if (c._2._1.direction === "Backward")
              return $n(l._1);
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
          const g = ki(2)(f._1);
          return { x: g.x, y: g.y, w: g.w, h: g.h };
        })())(5)(b("Just", { color: s, flat: !0 }))(b(
          "Just",
          { color: u, width: 1, lineJoin: jn, lineCap: Ne }
        ));
      if (f.tag === "Nothing")
        return e.pure();
      a();
    }
    return e.pure();
  })(fe(i.tokens));
}, Wa = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Da(t), o = t.popClip, i = t.popBlend, s = t.popLayer, u = n.Applicative0(), c = ge(u);
  return (f) => (g) => e.bind(t.pushLayer(n$))(() => e.bind(t.pushBlend(i$))(() => e.bind(t.pushClip(Ca(f)(g))(La))(() => e.bind(r(f)(g)(Xe)(Xe))(() => e.bind(o)(() => e.bind(i)(() => e.bind(s)(() => e.bind(t.pushLayer(e$))(() => e.bind(c((l) => {
    const d = An(l._1)(g.nodes);
    return d.tag === "Just" && Qo(d._1).alpha > 0 ? t.drawRoundedRect({ x: l._2.x, y: l._2.y, w: l._2.w, h: l._2.h })(7)(b(
      "Just",
      { color: Xe, flat: !1 }
    ))(T) : u.pure();
  })(fe(f.nodes)))(() => s)))))))));
}, qa = (t) => {
  const n = t.Monad0().Bind1(), e = Da(t), r = t.popClip, o = t.popLayer;
  return (i) => (s) => (u) => n.bind(t.pushLayer(t$))(() => n.bind(t.pushClip(d$(i)(s)(u))(o$))(() => n.bind(e(s)(u)(ue)(Xe))(() => n.bind(r)(() => o))));
}, Ha = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Qa(t)(n)(e)(r)(o)(i);
  if (s.tag === "PolyShape")
    return w$(s._1);
  if (s.tag === "CircleShape")
    return s._1;
  a();
}, A$ = (t) => {
  const n = ka(t), e = t.Monad0(), r = e.Bind1(), o = ge(e.Applicative0()), i = N$(t);
  return (s) => (u) => (c) => (f) => (g) => (l) => (d) => (_) => {
    const h = Do(f)(g)(l)(Ct(d)(Sa)), p = h.line, $ = h.phaseInLabel / 0.45, m = $ < 0 ? 0 : $ > 1 ? 1 : $, N = _.w, v = _.y, y = _.x, w = y + 14, L = _.h, k = v + L / 2;
    return n(Pa(f)(g)(l))(y)(v + L)({ x: y + N / 2, y: k })(r.bind(o((A) => t.fillPath(Ts(A)(1.5))({
      color: ue,
      flat: !0
    }))(h$(_)(Ha(s)(u)(c)(f)(g)(l))))(() => r.bind(t.drawRoundedRect({ x: y, y: v, w: N, h: L })(3)(b(
      "Just",
      { color: ue, flat: !0 }
    ))(T))(() => i({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(Xe)(m)(w)(k)(p))));
  };
}, za = (t) => {
  const n = A$(t), e = t.Monad0(), r = e.Applicative0(), o = L$(t), i = e.Bind1(), s = ge(r), u = t.popLayer;
  return (c) => (f) => (g) => i.bind(t.pushLayer(r$))(() => i.bind(s((l) => {
    if (l._2.tag === "Travelling") {
      if (l._2._1.labels.length !== 0) {
        const d = An(l._2._1.target)(c.nodes), _ = An(l._2._1.source)(c.nodes), h = Bo(l._2._1.edge)(c.edges), p = Ea(l._1)(g);
        if (p.tag === "Just" && h.tag === "Just" && _.tag === "Just" && d.tag === "Just")
          return n((() => {
            if (l._2._1.direction === "Forward")
              return h._1;
            if (l._2._1.direction === "Backward")
              return $n(h._1);
            a();
          })())(_._1)(d._1)(l._2._1.progress)(l._2._1.holdPre)(l._2._1.holdPost)(l._2._1.labels)(p._1);
      }
      return r.pure();
    }
    if (l._2.tag === "Filling" && l._2._1.labels.length !== 0) {
      const d = An(l._2._1.node)(c.nodes);
      if (d.tag === "Just")
        return o(c)(d._1)(l._2._1.progress)(l._2._1.labels);
      if (d.tag === "Nothing")
        return r.pure();
      a();
    }
    return r.pure();
  })(fe(f.tokens)))(() => u));
}, I$ = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => (i) => (s) => (u) => (c) => {
    const f = Ha(e)(r)(o)(i)(s)(u);
    return n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(Do(i)(s)(u)(Ct(c)(Sa)).line))((g) => n.Applicative0().pure({
      x: f.x + 14 + g / 2 - g / 2 - 14,
      y: f.y - 6 - 8 - 6.6 - 6,
      w: g + 28,
      h: 25.2
    }));
  };
}, R$ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = I$(t), o = n.Applicative0(), i = Wr.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => ba(yt((f) => f)(c)))(i((c) => {
    if (c._2.tag === "Travelling" && c._2._1.labels.length !== 0) {
      const f = An(c._2._1.target)(s.nodes), g = An(c._2._1.source)(s.nodes), l = Bo(c._2._1.edge)(s.edges);
      if (l.tag === "Just" && g.tag === "Just" && f.tag === "Just")
        return e.bind(r((() => {
          if (c._2._1.direction === "Forward")
            return l._1;
          if (c._2._1.direction === "Backward")
            return $n(l._1);
          a();
        })())(g._1)(f._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost)(c._2._1.labels))((d) => o.pure(b(
          "Just",
          E(c._1, d)
        )));
    }
    return o.pure(T);
  })(fe(u.tokens)));
}, Oa = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = R$(t), o = v$(t);
  return (i) => (s) => e.bind(r(i)(s))((u) => e.bind(o(i)(s))((c) => n.Applicative0().pure(_$((() => {
    const f = (g) => {
      if (g.tag === "Leaf")
        return W;
      if (g.tag === "Node")
        return Wt("Node", g._1, g._2, g._3, void 0, f(g._5), f(g._6));
      a();
    };
    return Lt(G.compare)(bt(Pn.foldr, f(u)));
  })())(u)([
    ...z(s$)((() => {
      const f = (g, l) => {
        if (g.tag === "Leaf")
          return l;
        if (g.tag === "Node")
          return f(g._5, qt("Cons", g._4, f(g._6, l)));
        a();
      };
      return bt(Xt.foldr, f(i.nodes, Ot));
    })()),
    ...(() => {
      const f = (g, l) => {
        if (g.tag === "Leaf")
          return l;
        if (g.tag === "Node")
          return f(g._5, qt("Cons", g._4, f(g._6, l)));
        a();
      };
      return bt(Xt.foldr, f(c, Ot));
    })()
  ]))));
}, F$ = (t) => {
  const n = Oa(t), e = za(t);
  return (r) => (o) => t.Monad0().Bind1().bind(n(r)(o))((i) => e(r)(o)(i));
}, Wo = (t) => (n) => (e) => {
  const r = $c(n)(e.camera);
  return { vx: r.x - t.padding, vy: r.y - t.padding - 40, vw: r.w + 2 * t.padding, vh: r.h + 2 * t.padding + 40 };
}, Va = (t) => {
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
        { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1 * i, lineJoin: jn, lineCap: wa }
      )))(() => t.drawText({
        x: d,
        y: f + g / 2,
        content: r,
        font: u,
        color: { r: 28, g: 30, b: 36, a: 255 },
        align: ys,
        baseline: Fr
      }));
    });
  };
}, B$ = (t) => {
  const n = t.Monad0().Bind1(), e = Ra(t), r = Ba(t), o = Fa(t), i = Ga(t), s = qa(t), u = Wa(t), c = F$(t), f = Va(t);
  return (g) => (l) => (d) => {
    const _ = Wo(g)(l)(d);
    return n.bind(e(g.transparentBg)(_))(() => n.bind(r(l)(d))(() => n.bind(o(g.halftoneShadows)(l)(d))(() => n.bind(i(l)(d))(() => n.bind(s(_)(l)(d))(() => n.bind(u(l)(d))(() => n.bind(c(l)(d))(() => n.bind(g.watermark === "" ? t.Monad0().Applicative0().pure() : t.drawText({
      x: _.vx + 6,
      y: _.vy + 6,
      content: g.watermark,
      font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 9, weight: 600 },
      color: { r: 180, g: 180, b: 180, a: 255 },
      align: To,
      baseline: Ta
    }))(() => f(d.frameTitle)(_)))))))));
  };
}, Q$ = (t) => {
  const n = t.Monad0().Bind1(), e = Ra(t), r = Ba(t), o = Fa(t), i = Ga(t), s = qa(t), u = Wa(t), c = za(t), f = Va(t);
  return (g) => (l) => (d) => (_) => {
    const h = Wo(g)(l)(d);
    return n.bind(e(g.transparentBg)(h))(() => n.bind(r(l)(d))(() => n.bind(o(g.halftoneShadows)(l)(d))(() => n.bind(i(l)(d))(() => n.bind(s(h)(l)(d))(() => n.bind(u(l)(d))(() => n.bind(c(l)(d)(_))(() => n.bind(g.watermark === "" ? t.Monad0().Applicative0().pure() : t.drawText({
      x: h.vx + 6,
      y: h.vy + 6,
      content: g.watermark,
      font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 9, weight: 600 },
      color: { r: 180, g: 180, b: 180, a: 255 },
      align: To,
      baseline: Ta
    }))(() => f(d.frameTitle)(h)))))))));
  };
}, Cu = (t) => (n) => (e) => {
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
}, D$ = /* @__PURE__ */ Oa(ma), W$ = /* @__PURE__ */ Q$(ma), q$ = (t) => {
  const n = t.vx + t.vw - 4, e = t.vy + t.vh - 4, r = t.vx + 4, o = t.vy + 4, i = (s) => {
    if (s.tag === "Leaf")
      return W;
    if (s.tag === "Node")
      return Wt("Node", s._1, s._2, s._3, { ...s._4, x: Cu(r)(n - s._4.w)(s._4.x), y: Cu(o)(e - s._4.h)(s._4.y) }, i(s._5), i(s._6));
    a();
  };
  return i;
}, H$ = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { padding: 24, transparentBg: !1, halftoneShadows: !0, watermark: "" }, u = Cp(t)(n);
  return () => {
    const c = u(), f = D$(e)(r)(c)(), g = yp(o)(q$(Wo(s)(e)(r))(f))(i);
    return W$(s)(e)(r)(g.applied)(c)(), g.springs;
  };
}, Je = (t) => "rgb(" + _n(t.r) + "," + _n(t.g) + "," + _n(t.b) + ")", ro = /* @__PURE__ */ ec(/* @__PURE__ */ tc("Fixed", /* @__PURE__ */ nc(0)(20)(4))), z$ = (t) => "translate(" + ro(t.tx) + "," + ro(t.ty) + ") scale(" + ro(t.sx) + "," + ro(t.sy) + ")", Jt = /* @__PURE__ */ ec(/* @__PURE__ */ tc("Fixed", /* @__PURE__ */ nc(0)(20)(2))), ws = (t) => {
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
    a();
  }
  return Po(" ")(n);
}, O$ = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, Ci = /* @__PURE__ */ (() => {
  const t = _e("&")("&amp;"), n = _e("<")("&lt;"), e = (() => {
    const r = _e(">")("&gt;"), o = (() => {
      const i = _e('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), V$ = (t) => {
  if (t.style === "RunText")
    return "<tspan>" + Ci(t.text) + "</tspan>";
  if (t.style === "RunCode")
    return `<tspan font-family="'Ioskeley Mono', ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="400">` + Ci(t.text) + "</tspan>";
  a();
}, mn = (t) => (n) => {
  const e = n.maskDepth;
  return () => {
    e.value === 0 && n.out.push(t);
  };
}, Ya = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => O$
}, Y$ = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => Ya
}, X$ = { pure: (t) => (n) => () => t, Apply0: () => Ya }, U$ = { Applicative0: () => X$, Bind1: () => Y$ }, M$ = (t) => (n) => '<defs><pattern id="' + t + '" x="0" y="0" width="' + Jt(n.tile) + '" height="' + Jt(n.tile) + '" patternUnits="userSpaceOnUse">' + (n.bgColor.a === 0 ? "" : '<rect width="' + Jt(n.tile) + '" height="' + Jt(n.tile) + '" fill="' + Je(n.bgColor) + '" fill-opacity="' + Jt(at(n.bgColor.a) / 255) + '"/>') + '<circle cx="' + Jt(n.tile / 2) + '" cy="' + Jt(n.tile / 2) + '" r="' + Jt(n.dotRadius) + '" fill="' + Je(n.dotColor) + '"/></pattern></defs><rect x="' + Jt(n.viewport.vx) + '" y="' + Jt(n.viewport.vy) + '" width="' + Jt(n.viewport.vw) + '" height="' + Jt(n.viewport.vh) + '" fill="url(#' + t + ')"/>', Su = (t) => (n) => '<path d="' + ws(t) + '" fill="' + Je(n) + '" fill-opacity="' + Jt(at(n.a) / 255) + '"/>', K$ = (t) => (n) => (e) => (r) => '<rect x="' + Jt(t.x) + '" y="' + Jt(t.y) + '" width="' + Jt(t.w) + '" height="' + Jt(t.h) + '" rx="' + Jt(n) + '"' + (() => {
  if (e.tag === "Just")
    return ' fill="' + Je(e._1.color) + '" fill-opacity="' + Jt(at(e._1.color.a) / 255) + '"';
  if (e.tag === "Nothing")
    return ' fill="none"';
  a();
})() + (() => {
  if (r.tag === "Just")
    return ' stroke="' + Je(r._1.color) + '" stroke-opacity="' + Jt(at(r._1.color.a) / 255) + '" stroke-width="' + Jt(r._1.width) + '" stroke-linejoin="' + (() => {
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
})() + "/>", Gu = (t) => (n) => '<path d="' + ws(t) + '" fill="none" stroke="' + Je(n.color) + '" stroke-opacity="' + Jt(at(n.color.a) / 255) + '" stroke-width="' + Jt(n.width) + '" stroke-linejoin="' + (() => {
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
})() + '"/>', j$ = (t) => {
  const n = Gc(xr(t.content));
  return '<text x="' + Jt(t.x) + '" y="' + Jt(t.y) + '"' + (() => {
    if (t.baseline === "BaselineTop")
      return ' dy="0.8em"';
    if (t.baseline === "BaselineMiddle")
      return ' dy="0.32em"';
    if (t.baseline === "BaselineAlphabetic" || t.baseline === "BaselineBottom")
      return "";
    a();
  })() + ' fill="' + Je(t.color) + '" fill-opacity="' + Jt(at(t.color.a) / 255) + '" font-size="' + Jt(t.font.size) + '" font-family="Ilisarniq, ui-sans-serif, system-ui, sans-serif" font-weight="' + _n(t.font.weight) + '" text-anchor="' + (() => {
    if (t.align === "AlignLeft")
      return "start";
    if (t.align === "AlignCenter")
      return "middle";
    if (t.align === "AlignRight")
      return "end";
    a();
  })() + '">' + (n.length === 1 && n[0].style === "RunText" ? Ci(n[0].text) : Po("")(z(V$)(n))) + "</text>";
}, Z$ = {
  fillPath: (t) => (n) => mn(Su(t)(n.color)),
  strokePath: (t) => (n) => mn(Gu(t)(n)),
  fillStrokePath: (t) => (n) => (e) => mn(Su(t)(n.color) + Gu(t)(e)),
  drawRoundedRect: (t) => (n) => (e) => (r) => mn(K$(t)(n)(e)(r)),
  drawText: (t) => mn(j$(t)),
  pushTransform: (t) => mn((() => {
    const n = 'transform="' + z$(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popTransform: /* @__PURE__ */ mn("</g>"),
  pushClip: (t) => (n) => (e) => {
    const r = e.clipCounter;
    return () => {
      const o = r.value;
      e.clipCounter.value = o + 1 | 0;
      const i = "clip" + _n(o);
      return mn((() => {
        const s = 'clip-path="url(#' + i + ')"';
        return '<defs><clipPath id="' + i + '"><path d="' + ws(t) + '"' + (() => {
          if (n === "EvenOdd")
            return ' clip-rule="evenodd"';
          if (n === "NonZero")
            return "";
          a();
        })() + "/></clipPath></defs>" + (s === "" ? "<g>" : "<g " + s + ">");
      })())(e)();
    };
  },
  popClip: /* @__PURE__ */ mn("</g>"),
  pushBlend: (t) => mn((() => {
    const n = (() => {
      if (t === "Normal")
        return 'style="mix-blend-mode: normal"';
      if (t === "Difference")
        return 'style="mix-blend-mode: difference"';
      a();
    })();
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popBlend: /* @__PURE__ */ mn("</g>"),
  pushAlpha: (t) => mn((() => {
    const n = 'opacity="' + Jt(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popAlpha: /* @__PURE__ */ mn("</g>"),
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
  clearBackground: (t) => (n) => mn('<rect x="' + Jt(n.viewport.vx) + '" y="' + Jt(n.viewport.vy) + '" width="' + Jt(n.viewport.vw) + '" height="' + Jt(n.viewport.vh) + '" fill="' + Je(t) + '" opacity="' + Jt(at(t.a) / 255) + '"/>')(n),
  backgroundDots: (t) => (n) => {
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      return n.patternCounter.value = r + 1 | 0, mn(M$("bg-dots-" + _n(r))(t))(n)();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = pa(t.family)(t.size)(t.weight)(xr(n));
    return () => r;
  },
  Monad0: () => U$
}, tm = /* @__PURE__ */ B$(Z$), nm = (t) => (n) => {
  const e = { padding: 24, transparentBg: !1, halftoneShadows: !0, watermark: "" }, r = Wo(e)(t)(n);
  return {
    viewBox: Jt(r.vx) + " " + Jt(r.vy) + " " + Jt(r.vw) + " " + Jt(r.vh),
    body: (() => {
      const o = [], i = { value: 0 }, s = { value: 0 }, u = { value: 0 };
      return tm(e)(t)(n)({ out: o, maskDepth: i, clipCounter: s, patternCounter: u, viewport: r })(), Po("")(o);
    })()
  };
}, zr = (t) => ({ bind: (n) => (e) => (r) => t.Bind1().bind(n(r))((o) => e(o._1)(o._2)), Apply0: () => Xa(t) }), Xa = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = { map: (r) => (o) => (i) => n.map((s) => E(r(s._1), s._2))(o(i)) };
  return {
    apply: (() => {
      const r = zr(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => Or(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, Or = (t) => ({ pure: (n) => (e) => t.Applicative0().pure(E(n, e)), Apply0: () => Xa(t) }), em = (t) => {
  const n = { Applicative0: () => Or(t), Bind1: () => zr(t) };
  return { state: (e) => (r) => t.Applicative0().pure(e(r)), Monad0: () => n };
}, Ls = (t, n) => ({ tag: t, _1: n }), Pe = (t, n) => ({ tag: t, _1: n }), bn = /* @__PURE__ */ em($e), Dt = /* @__PURE__ */ zr($e), Sn = bn.state((t) => E(t, t)), oe = (t) => (e) => {
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
}, le = (t) => (e) => {
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
}, ln = /* @__PURE__ */ Or($e), rm = (t) => (e) => {
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
    a();
  }
  return i;
}, om = /* @__PURE__ */ (() => {
  const t = qn.unfoldr((n) => {
    if (n.tag === "Nil")
      return T;
    if (n.tag === "Cons")
      return b("Just", E(n._1, n._2));
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
    return e(n, Ot);
  })());
})(), im = (t) => (e) => {
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
}, Es = (t) => (n) => (e) => J((r) => (o) => t.Bind1().bind(r)((i) => n(i)(o)))(t.Applicative0().pure(e)), sm = /* @__PURE__ */ J((t) => (n) => X(G)(n)()(t))(W), um = /* @__PURE__ */ (() => {
  const n = ((e) => (r) => {
    let o = e, i = r, s = !0, u;
    for (; s; ) {
      const c = o, f = i;
      if (f.tag === "Nil") {
        s = !1, u = c;
        continue;
      }
      if (f.tag === "Cons") {
        o = X(G)(f._1)()(c), i = f._2;
        continue;
      }
      a();
    }
    return u;
  })(W);
  return (e) => n((() => {
    const r = (o, i) => {
      if (o.tag === "Leaf")
        return i;
      if (o.tag === "Node")
        return r(o._5, qt("Cons", o._3, r(o._6, i)));
      a();
    };
    return r(e, Ot);
  })());
})(), Ua = /* @__PURE__ */ Rf(ln)(Ft), cm = (t) => Ls("Par", t), Ma = (t) => Ls("Seq", t), am = (t) => (n) => (e) => {
  const r = Me(en, T, (o) => o._1 === t, e);
  if (r.tag === "Just") {
    const o = Ke(en, T, r._1, E(t, n), e);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return o._1;
    a();
  }
  if (r.tag === "Nothing")
    return sn(e)(E(t, n));
  a();
}, fm = (t) => (n) => z((e) => e._1 === t ? E(e._1, { ...e._2, label: b("Just", n) }) : E(e._1, e._2)), Qn = (t) => bn.state((n) => E(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return { ...n, error: b("Just", { msg: t, line: n.currentLine, column: n.currentColumn }) };
    a();
  })()
)), gm = (t) => Dt.bind(Sn)((n) => {
  const e = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + _n(n.kfCounter);
  if (ae((o) => o.id === e, n.keyframes))
    return Qn("duplicate frame name " + e);
  const r = {
    ...n,
    keyframes: sn(n.keyframes)({ id: e, nodes: n.currNodes, edges: n.currEdges }),
    kfCounter: n.kfCounter + 1 | 0,
    currentKf: b("Just", e)
  };
  return bn.state((o) => E(void 0, r));
}), _m = (t) => (n) => {
  const e = n.from + "->" + n.to, r = n.newFrom + "->" + n.newTo, o = Et("Left", "cannot repoint " + n.from + "→" + n.to + ": edge does not exist"), i = oe(e)(t.currEdges) ? Et("Right", void 0) : o;
  return (() => {
    if (i.tag === "Left") {
      const s = i._1;
      return (u) => Et("Left", s);
    }
    if (i.tag === "Right") {
      const s = i._1;
      return (u) => u(s);
    }
    a();
  })()(() => {
    const s = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newFrom;
    if (!le(n.newFrom)(t.currNodes))
      return Et("Left", s);
    const u = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newTo;
    if (!le(n.newTo)(t.currNodes))
      return Et("Left", u);
    const c = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": target edge already exists";
    return e !== r && oe(r)(t.currEdges) ? Et("Left", c) : Et(
      "Right",
      {
        nextCurrEdges: X(G)(r)()(wr(G)(e)(t.currEdges)),
        newId: r,
        newEdge: { id: r, from: { node: n.newFrom, port: T }, to: { node: n.newTo, port: T } }
      }
    );
  });
}, lm = {
  graphNodes: [],
  graphEdges: W,
  currNodes: W,
  currEdges: W,
  keyframes: [],
  scenes: [],
  kfCounter: 0,
  eventCounter: 0,
  currentKf: T,
  currentLine: 0,
  currentColumn: 0,
  error: T
}, Pu = (t) => (n) => Dt.bind(Sn)((e) => {
  const r = "ev-" + _n(e.eventCounter);
  return Dt.bind((() => {
    const o = { ...e, eventCounter: e.eventCounter + 1 | 0 };
    return bn.state((i) => E(void 0, o));
  })())(() => ln.pure({ events: [{ id: r, kind: n, when: t }], firstId: b("Just", r), lastId: b("Just", r) }));
}), dm = (t) => (n) => {
  if (n.tag === "Token") {
    const e = n._1;
    return Dt.bind(Sn)((r) => {
      const o = !le(e.from)(r.currNodes), i = !le(e.to)(r.currNodes);
      if (o || i)
        return Dt.bind(Qn(o ? i ? "token references unknown node: " + e.from + ", " + e.to : "token references unknown node: " + e.from : i ? "token references unknown node: " + e.to : "token references unknown node: "))(() => ln.pure({ events: [], firstId: T, lastId: T }));
      const s = e.to + "->" + e.from, u = e.from + "->" + e.to;
      return oe(u)(r.currEdges) ? Pu(t)(Qs(
        "SendToken",
        { from: e.from, to: e.to, edge: u, direction: $0, labels: e.labels }
      )) : oe(s)(r.currEdges) ? Pu(t)(Qs(
        "SendToken",
        { from: e.from, to: e.to, edge: s, direction: m0, labels: e.labels }
      )) : Dt.bind(Qn("token " + e.from + "→" + e.to + ": no edge between " + e.from + " and " + e.to))(() => ln.pure({
        events: [],
        firstId: T,
        lastId: T
      }));
    });
  }
  return ln.pure({ events: [], firstId: T, lastId: T });
}, hm = (t) => yt((n) => rm(n)(t.graphEdges))(bt(yr, om(t.currEdges))), pm = (t) => (n) => {
  const e = gt((o) => o.from.node === n.id || o.to.node === n.id, hm(t)), r = Es(vf)((o) => (i) => {
    const s = i.from + "->" + n.id, u = n.id + "->" + i.to, c = i.from + "->" + i.to, f = "via " + i.from + " " + i.to + ": no edge " + i.from + "→" + n.id;
    if (!oe(s)(t.currEdges))
      return Et("Left", f);
    const g = "via " + i.from + " " + i.to + ": no edge " + n.id + "→" + i.to;
    if (!oe(u)(t.currEdges))
      return Et("Left", g);
    const l = "via " + i.from + " " + i.to + ": would create " + i.from + "→" + i.to + " but it already exists";
    return oe(c)(t.currEdges) || im(c)(o.synthesized) ? Et("Left", l) : Et(
      "Right",
      {
        consumed: X(G)(s)()(X(G)(u)()(o.consumed)),
        synthesized: X(G)(c)({
          id: c,
          from: { node: i.from, port: T },
          to: { node: i.to, port: T }
        })(o.synthesized)
      }
    );
  })({ consumed: W, synthesized: W })(n.via);
  return (() => {
    if (r.tag === "Left") {
      const o = r._1;
      return (i) => Et("Left", o);
    }
    if (r.tag === "Right") {
      const o = r._1;
      return (i) => i(o);
    }
    a();
  })()((o) => {
    const i = o.consumed, s = gt((u) => !oe(u.id)(i), e);
    return s.length === 0 ? Et(
      "Right",
      {
        nextCurrEdges: Ln(
          G.compare,
          yn,
          re(G.compare, t.currEdges, sm(z((u) => u.id)(e))),
          um((() => {
            const u = (c) => {
              if (c.tag === "Leaf")
                return W;
              if (c.tag === "Node")
                return Wt("Node", c._1, c._2, c._3, void 0, u(c._5), u(c._6));
              a();
            };
            return u(o.synthesized);
          })())
        ),
        synthesized: o.synthesized
      }
    ) : Et(
      "Left",
      "cannot delete node " + n.id + ": still connected (" + Po(", ")(z((u) => u.from.node + "→" + u.to.node)(s)) + "). Use -edge to drop them or `via a b` to merge " + n.id + "'s endpoints."
    );
  });
}, Si = (t) => {
  if (t.tag === "Leaf")
    return [t._1];
  if (t.tag === "Par" || t.tag === "Seq")
    return Ct(t._1)(Si);
  a();
}, $m = (t) => ({
  nodes: z(Eo)(t.graphNodes),
  edges: (() => {
    const n = (e, r) => {
      if (e.tag === "Leaf")
        return r;
      if (e.tag === "Node")
        return n(e._5, qt("Cons", e._4, n(e._6, r)));
      a();
    };
    return bt(Xt.foldr, n(t.graphEdges, Ot));
  })(),
  constraints: []
}), mm = (t) => {
  if (t.tag === "AddNode") {
    const n = t._1;
    return bn.state((e) => E(
      void 0,
      {
        ...e,
        graphNodes: am(n.id)({ id: n.id, size: E(1, 1), ports: [], label: b("Just", n.label) })(e.graphNodes),
        currNodes: X(G)(n.id)()(e.currNodes)
      }
    ));
  }
  if (t.tag === "DelNode") {
    const n = t._1;
    return Dt.bind(Sn)((e) => {
      if (!le(n.id)(e.currNodes))
        return Qn("cannot delete node " + n.id + ": does not exist");
      const r = pm(e)(n);
      if (r.tag === "Left")
        return Qn(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return bn.state((i) => E(
          void 0,
          {
            ...i,
            currNodes: wr(G)(n.id)(i.currNodes),
            currEdges: o.nextCurrEdges,
            graphEdges: Ln(G.compare, yn, o.synthesized, i.graphEdges)
          }
        ));
      }
      a();
    });
  }
  if (t.tag === "ModNode") {
    const n = t._1;
    return Dt.bind(Sn)((e) => {
      if (!le(n.id)(e.currNodes))
        return Qn("cannot modify node " + n.id + ": does not exist");
      if (n.label.tag === "Just") {
        const r = n.label._1;
        return bn.state((o) => E(void 0, { ...o, graphNodes: fm(n.id)(r)(o.graphNodes) }));
      }
      if (n.label.tag === "Nothing")
        return ln.pure();
      a();
    });
  }
  if (t.tag === "AddEdge") {
    const n = t._1;
    return Dt.bind(Sn)((e) => {
      const r = !le(n.from)(e.currNodes), o = !le(n.to)(e.currNodes);
      if (r || o)
        return Qn("cannot add edge " + n.from + "→" + n.to + ": unknown node " + (r ? o ? n.from + ", " + n.to : n.from : o ? n.to : ""));
      const i = n.from + "->" + n.to;
      return bn.state((s) => E(
        void 0,
        {
          ...s,
          graphEdges: X(G)(i)({ id: i, from: { node: n.from, port: T }, to: { node: n.to, port: T } })(s.graphEdges),
          currEdges: X(G)(i)()(s.currEdges)
        }
      ));
    });
  }
  if (t.tag === "DelEdge") {
    const n = t._1;
    return Dt.bind(Sn)((e) => {
      const r = n.from + "->" + n.to;
      return oe(r)(e.currEdges) ? bn.state((o) => E(void 0, { ...o, currEdges: wr(G)(r)(o.currEdges) })) : Qn("cannot delete edge " + n.from + "→" + n.to + ": does not exist");
    });
  }
  if (t.tag === "RepointEdge") {
    const n = t._1;
    return Dt.bind(Sn)((e) => {
      const r = _m(e)(n);
      if (r.tag === "Left")
        return Qn(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return bn.state((i) => E(
          void 0,
          { ...i, currEdges: o.nextCurrEdges, graphEdges: X(G)(o.newId)(o.newEdge)(i.graphEdges) }
        ));
      }
      a();
    });
  }
  return ln.pure();
}, Nm = (t) => Dt.bind(bn.state((n) => E(void 0, { ...n, currentLine: t.line, currentColumn: t.column })))(() => mm(t.op)), Jm = (t) => (n) => Dt.bind(Ua(Nm)(n))(() => Dt.bind(Sn)((e) => {
  const r = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + _n(e.kfCounter);
  if (ae((i) => i.id === r, e.keyframes))
    return Qn("duplicate frame name " + r);
  const o = {
    ...e,
    keyframes: sn(e.keyframes)({ id: r, nodes: e.currNodes, edges: e.currEdges }),
    kfCounter: e.kfCounter + 1 | 0,
    currentKf: b("Just", r),
    scenes: (() => {
      if (e.currentKf.tag === "Nothing")
        return e.scenes;
      if (e.currentKf.tag === "Just")
        return sn(e.scenes)(_c("Structural", { from: e.currentKf._1, to: r, focus: T }));
      a();
    })()
  };
  return bn.state((i) => E(void 0, o));
})), vm = (t) => (n) => {
  const e = Qt((r) => T, (r) => (o) => b("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return ln.pure({ events: [], firstId: T, lastId: T });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Dt.bind(Qr(t)(e._1.head))((o) => Dt.bind(Es({
      Applicative0: () => Or($e),
      Bind1: () => zr($e)
    })((i) => (s) => Dt.bind(Qr((() => {
      if (i.lastId.tag === "Just")
        return us("After", i.lastId._1);
      if (i.lastId.tag === "Nothing")
        return t;
      a();
    })())(s))((u) => ln.pure({
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
    })))(o)(r))((i) => ln.pure(i)));
  }
  a();
}, ym = (t) => (n) => {
  const e = Qt((r) => T, (r) => (o) => b("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return ln.pure({ events: [], firstId: T, lastId: T });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Dt.bind(Qr(t)(e._1.head))((o) => Dt.bind(Tm((() => {
      if (o.firstId.tag === "Just")
        return us("With", o.firstId._1);
      if (o.firstId.tag === "Nothing")
        return t;
      a();
    })())(r))((i) => ln.pure({
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
}, Qr = (t) => (n) => {
  if (n.tag === "Leaf") {
    const e = n._1;
    return Dt.bind(bn.state((r) => E(void 0, { ...r, currentLine: e.line, currentColumn: e.column })))(() => dm(t)(e.op));
  }
  if (n.tag === "Seq")
    return vm(t)(n._1);
  if (n.tag === "Par")
    return ym(t)(n._1);
  a();
}, Tm = (t) => Es({
  Applicative0: () => Or($e),
  Bind1: () => zr($e)
})((n) => (e) => Dt.bind(Qr(t)(e))((r) => ln.pure({
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
})))({ events: [], firstId: T, lastId: T }), wm = (t) => Dt.bind(Sn)((n) => {
  if (n.currentKf.tag === "Nothing")
    return Qn("flow ops before any structural frame");
  if (n.currentKf.tag === "Just") {
    const e = n.currentKf._1;
    return Dt.bind(Qr(p0)(t))((r) => Dt.bind(Sn)((o) => {
      const i = { ...o, scenes: sn(o.scenes)(_c("DataFlow", { keyframe: e, events: r.events, focus: T })) };
      return bn.state((s) => E(void 0, i));
    }));
  }
  a();
}), Lm = (t) => Dt.bind(Sn)((n) => {
  if (n.error.tag === "Just")
    return ln.pure();
  if (n.error.tag === "Nothing") {
    const e = Si(t.ops), r = gt(
      (i) => i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge",
      e
    ), o = gt(
      (i) => !(i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge"),
      e
    );
    return Dt.bind((() => {
      const i = Jm(t.name)(r);
      return r.length !== 0 ? i : ln.pure();
    })())(() => Dt.bind((() => {
      const i = gm(t.name);
      return r.length === 0 && o.length !== 0 ? i : ln.pure();
    })())(() => {
      const i = wm(t.ops);
      return o.length !== 0 ? i : ln.pure();
    }));
  }
  a();
}), Em = (t) => Dt.bind(Ua(Lm)(t.frames))(() => Dt.bind(Sn)((n) => ln.pure((() => {
  if (n.error.tag === "Just")
    return Et("Left", n.error._1);
  if (n.error.tag === "Nothing")
    return Et("Right", { seed: t.seed, graph: $m(n), keyframes: n.keyframes, scenes: n.scenes });
  a();
})())))(lm)._1, Ue = (t, n) => ({ tag: "ParseError", _1: t, _2: n }), q = (t, n, e) => ({ tag: "ParseState", _1: t, _2: n, _3: e }), wo = (t, n, e) => ({ tag: t, _1: n, _2: e }), bm = (t) => wo("More", t), km = (t) => wo("Lift", t), Ka = { map: (t) => (n) => (e, r, o, i, s) => r((u) => n(e, r, o, i, (c, f) => r((g) => s(c, t(f))))) }, xm = {
  alt: (t) => (n) => (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((f) => t(
      q(u, c, !1),
      r,
      o,
      (g, l) => {
        const d = g._3;
        return r((_) => d ? i(g, l) : n(e, r, o, i, s));
      },
      s
    ));
  },
  Functor0: () => Ka
}, Cm = (t) => {
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
          u = !1, c = n.Bind1().Apply0().Functor0().map(Hu)(g._1);
          continue;
        }
        if (g.tag === "Stop") {
          u = !1, c = n.Applicative0().pure(pr("Done", E(g._2, g._1)));
          continue;
        }
        a();
      }
      return c;
    };
    return t.tailRecM(o)((i) => r(
      e,
      bm,
      km,
      (s, u) => wo("Stop", s, Et("Left", u)),
      (s, u) => wo("Stop", s, Et("Right", u))
    ));
  };
}, ja = (t, n, e, r, o) => o(t, t._2), Sm = { index: 0, line: 1, column: 1 }, Gm = (t) => {
  const n = Cm(t);
  return (e) => (r) => t.Monad0().Bind1().Apply0().Functor0().map(bo)(n(q(e, Sm, !1))(r));
}, Pm = /* @__PURE__ */ Gm(xf), Za = {
  apply: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, f) => r((g) => {
      const l = e._3 && !c._3 ? q(c._1, c._2, !0) : c;
      return n(l, r, o, i, (d, _) => r((h) => s(l._3 && !d._3 ? q(d._1, d._2, !0) : d, f(_))));
    })
  )),
  Functor0: () => Ka
}, tf = { pure: (t) => (n, e, r, o, i) => i(n, t), Apply0: () => Za }, Am = {
  bind: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, f) => r((g) => n(f)(e._3 && !c._3 ? q(c._1, c._2, !0) : c, r, o, i, s))
  )),
  Apply0: () => Za
}, Im = { Applicative0: () => tf, Bind1: () => Am }, qo = (t) => (n, e, r, o, i) => e((s) => ja(
  n,
  e,
  r,
  o,
  (u, c) => e((f) => o(n._3 && !u._3 ? q(u._1, u._2, !0) : u, Ue(t, c)))
)), Rm = { empty: /* @__PURE__ */ qo("No alternative"), Alt0: () => xm }, Fm = { Applicative0: () => tf, Plus1: () => Rm }, Bm = {
  tailRecM: (t) => (n) => (e, r, o, i, s) => {
    const u = (c, f, g) => t(f)(
      c,
      r,
      o,
      i,
      (l, d) => {
        const _ = c._3 && !l._3 ? q(l._1, l._2, !0) : l;
        if (d.tag === "Loop")
          return g === 0 ? r((h) => u(_, d._1, 30)) : u(_, d._1, g - 1 | 0);
        if (d.tag === "Done")
          return s(_, d._1);
        a();
      }
    );
    return u(e, n, 30);
  },
  Monad0: () => Im
}, Qm = (t) => (n) => {
  const e = n.Plus1().Alt0(), r = n.Applicative0();
  return (o) => t.tailRecM((i) => t.Monad0().Bind1().bind(e.alt(e.Functor0().map(Hu)(o))(r.pure(pr(
    "Done",
    void 0
  ))))((s) => r.pure((() => {
    if (s.tag === "Loop")
      return pr("Loop", qt("Cons", s._1, i));
    if (s.tag === "Done")
      return pr(
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
        })(Ot)(i)
      );
    a();
  })())))(Ot);
}, Bn = /* @__PURE__ */ Qm(Bm)(Fm), kt = (t) => (n) => {
  const e = qo("Expected " + n);
  return (r, o, i, s, u) => {
    const c = r._1, f = r._2;
    return o((g) => t(
      q(c, f, !1),
      o,
      i,
      (l, d) => {
        const _ = l._3;
        return o((h) => _ ? s(l, d) : e(r, o, i, s, u));
      },
      u
    ));
  };
}, bs = (t) => (n, e, r, o, i) => {
  const s = n._3, u = n._1, c = n._2;
  return e((f) => {
    const g = (l, d) => {
      const _ = l._3;
      return e((h) => _ ? o(q(l._1, l._2, s), d) : i(n, void 0));
    };
    return e((l) => e((d) => t(
      q(u, c, !1),
      e,
      r,
      (_, h) => g(q(_._1, _._2, !1), h),
      (_, h) => e((p) => e(($) => qo("Negated parser succeeded")(
        _,
        e,
        r,
        g,
        (m, N) => e((v) => i(_._3 && !m._3 ? q(m._1, m._2, !0) : m, N))
      )))
    )));
  });
}, Dm = (t) => {
  const n = t.foldr((e) => (r) => {
    if (r.tag === "Nothing")
      return b("Just", e);
    if (r.tag === "Just")
      return b(
        "Just",
        (o, i, s, u, c) => {
          const f = o._1, g = o._2;
          return i((l) => e(
            q(f, g, !1),
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
  })(T);
  return (e) => {
    const r = n(e);
    if (r.tag === "Nothing")
      return qo("No alternative");
    if (r.tag === "Just")
      return r._1;
    a();
  };
}, Wm = (t) => (n) => (e) => (r, o, i, s, u) => o((c) => o((f) => o((g) => o((l) => t(
  r,
  o,
  i,
  s,
  (d, _) => o((h) => o((p) => {
    const $ = r._3 && !d._3 ? q(d._1, d._2, !0) : d;
    return e(
      $,
      o,
      i,
      s,
      (m, N) => o((v) => {
        const y = $._3 && !m._3 ? q(m._1, m._2, !0) : m;
        return o((w) => o((L) => {
          const k = r._3 && !y._3 ? q(y._1, y._2, !0) : y;
          return n(
            k,
            o,
            i,
            s,
            (A, H) => o((V) => u(k._3 && !A._3 ? q(A._1, A._2, !0) : A, N))
          );
        }));
      })
    );
  }))
))))), Gi = (t) => (n) => (e) => {
  if (n === 10)
    return { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  if (n === 13) {
    const r = r_()(e);
    return r.tag === "Just" && r._1 === 10 ? { index: t.index + 1 | 0, line: t.line, column: t.column } : { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  }
  return n === 9 ? { index: t.index + 1 | 0, line: t.line, column: (t.column + 8 | 0) - Wi(t.column - 1 | 0)(8) | 0 } : { index: t.index + 1 | 0, line: t.line, column: t.column + 1 | 0 };
}, qm = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const c = r, f = o, g = i, l = Ao(f);
    if (l.tag === "Nothing") {
      s = !1, u = c;
      continue;
    }
    if (l.tag === "Just") {
      r = l._1.tail === "" ? Gi(c)(l._1.head)(g) : Gi(c)(l._1.head)(l._1.tail), o = l._1.tail, i = g;
      continue;
    }
    a();
  }
  return u;
}, Ut = (t) => (n, e, r, o, i) => {
  const s = Ao(n._1);
  if (s.tag === "Nothing")
    return o(n, Ue("Unexpected EOF", n._2));
  if (s.tag === "Just") {
    if (s._1.head < 0 || s._1.head > 65535)
      return o(n, Ue("Expected Char", n._2));
    if (s._1.head >= 0 && s._1.head <= 65535) {
      const u = mc(s._1.head);
      return t(u) ? i(q(s._1.tail, Gi(n._2)(s._1.head)(s._1.tail), !0), u) : o(n, Ue("Predicate unsatisfied", n._2));
    }
  }
  a();
}, nf = (t, n, e, r, o) => t._1 === "" ? o(q(t._1, t._2, !0), void 0) : r(t, Ue("Expected EOF", t._2)), Hm = (t) => (n, e, r, o, i) => {
  const s = t(n._1);
  if (s.tag === "Left")
    return o(n, Ue(s._1, n._2));
  if (s.tag === "Right")
    return i(q(s._1.remainder, qm(n._2)(s._1.consumed)(s._1.remainder), s._1.consumed !== ""), s._1.value);
  a();
}, or = (t) => Hm((n) => {
  const e = i0(t)(n);
  return e.tag === "Just" ? Et("Right", { value: t, consumed: t, remainder: e._1 }) : Et("Left", "Expected " + _f(t));
}), zm = /* @__PURE__ */ Ut((t) => !0), ef = /* @__PURE__ */ Dm(Ft), rf = /* @__PURE__ */ (() => {
  const t = Ut((n) => n === " " || n === "	" || n === `
` || n === "\r");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((f) => i(n._3 && !u._3 ? q(u._1, u._2, !0) : u, void 0))
  ));
})(), ks = (t, n, e, r, o) => n((i) => or("#")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = Bn(Ut((l) => l !== `
`)), g = t._3 && !s._3 ? q(s._1, s._2, !0) : s;
    return n((l) => f(
      g,
      n,
      e,
      r,
      (d, _) => n((h) => o(g._3 && !d._3 ? q(d._1, d._2, !0) : d, void 0))
    ));
  })
)), Om = /* @__PURE__ */ kt(/* @__PURE__ */ (() => {
  const t = kt(Ut((e) => e === "}"))("'}'"), n = Ut((e) => e === `
` || e === "\r");
  return (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((f) => r((g) => t(
      q(u, c, !1),
      r,
      o,
      (l, d) => r((_) => {
        const h = e._1, p = e._2;
        return r(($) => r((m) => ks(
          q(h, p, !1),
          r,
          o,
          (N, v) => {
            const y = N._3;
            return r((w) => {
              if (y)
                return i(N, v);
              const L = e._1, k = e._2;
              return r((A) => r((H) => n(
                q(L, k, !1),
                r,
                o,
                (V, M) => {
                  const P = V._3;
                  return r((R) => P ? i(V, M) : nf(e, r, o, i, s));
                },
                (V, M) => r((P) => s(V, void 0))
              )));
            });
          },
          (N, v) => r((y) => s(N, void 0))
        )));
      }),
      (l, d) => r((_) => s(q(u, c, !1), void 0))
    )));
  };
})())("newline or '}' (statements end at the end of the line)"), Fn = /* @__PURE__ */ (() => {
  const t = Bn((n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => rf(
      q(s, u, !1),
      e,
      r,
      (f, g) => {
        const l = f._3;
        return e((d) => l ? o(f, g) : ks(n, e, r, o, i));
      },
      i
    ));
  });
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((f) => i(n._3 && !u._3 ? q(u._1, u._2, !0) : u, void 0))
  ));
})(), Wn = (t, n, e, r, o) => n((i) => {
  const s = (f, g) => n((l) => Fn(t._3 && !f._3 ? q(f._1, f._2, !0) : f, n, e, r, o)), u = t._1, c = t._2;
  return n((f) => rf(
    q(u, c, !1),
    n,
    e,
    (g, l) => {
      const d = g._3;
      return n((_) => d ? r(g, l) : ks(t, n, e, r, s));
    },
    s
  ));
}), of = /* @__PURE__ */ (() => {
  const t = kt(Ut((n) => n === "|"))("'|'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((f) => {
      const g = Bn(Ut((d) => d !== "|")), l = n._3 && !u._3 ? q(u._1, u._2, !0) : u;
      return e((d) => g(
        l,
        e,
        r,
        o,
        (_, h) => e((p) => {
          const $ = kt(kt(Ut((N) => N === "|"))("'|'"))("closing '|'"), m = l._3 && !_._3 ? q(_._1, _._2, !0) : _;
          return e((N) => $(
            m,
            e,
            r,
            o,
            (v, y) => e((w) => i(
              m._3 && !v._3 ? q(v._1, v._2, !0) : v,
              Re(bt(Xt.foldr, h))
            ))
          ));
        })
      ));
    })
  ));
})(), Lo = /* @__PURE__ */ Ut((t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z"), ke = /* @__PURE__ */ (() => {
  const t = Bn(Ut((n) => n === " " || n === "	"));
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((f) => i(n._3 && !u._3 ? q(u._1, u._2, !0) : u, void 0))
  ));
})(), Vm = /* @__PURE__ */ (() => {
  const t = kt(Ut((n) => n === "\\"))("'\\\\'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((f) => {
      const g = n._3 && !u._3 ? q(u._1, u._2, !0) : u;
      return e((l) => zm(
        g,
        e,
        r,
        o,
        (d, _) => e((h) => i(
          g._3 && !d._3 ? q(d._1, d._2, !0) : d,
          _ === "n" ? `
` : _ === "t" ? "	" : _ === "r" ? "\r" : _
        ))
      ));
    })
  ));
})(), Ym = /* @__PURE__ */ (() => {
  const t = Ut((n) => n !== '"' && n !== "\\" && n !== `
`);
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => Vm(q(s, u, !1), e, r, (f, g) => e((l) => t(n, e, r, o, i)), i));
  };
})(), xs = /* @__PURE__ */ (() => {
  const t = kt(Ut((n) => n === '"'))(`'"'`);
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((f) => {
      const g = Bn(Ym), l = n._3 && !u._3 ? q(u._1, u._2, !0) : u;
      return e((d) => g(
        l,
        e,
        r,
        o,
        (_, h) => e((p) => {
          const $ = kt(kt(Ut((N) => N === '"'))(`'"'`))(`closing '"' (unterminated string)`), m = l._3 && !_._3 ? q(_._1, _._2, !0) : _;
          return e((N) => $(
            m,
            e,
            r,
            o,
            (v, y) => e((w) => i(
              m._3 && !v._3 ? q(v._1, v._2, !0) : v,
              Re(bt(Xt.foldr, h))
            ))
          ));
        })
      ));
    })
  ));
})(), Xm = /* @__PURE__ */ (() => {
  const t = kt(Ut((n) => n === ":"))("':'");
  return (n, e, r, o, i) => e((s) => ke(
    n,
    e,
    r,
    o,
    (u, c) => e((f) => kt((g, l, d, _, h) => {
      const p = g._1, $ = g._2;
      return l((m) => {
        const N = (v, y) => {
          const w = v._3;
          return l((L) => {
            if (w)
              return _(v, y);
            const k = g._1, A = g._2;
            return l((H) => of(
              q(k, A, !1),
              l,
              d,
              (V, M) => {
                const P = V._3;
                return l((R) => P ? _(V, M) : xs(g, l, d, _, h));
              },
              h
            ));
          });
        };
        return l((v) => t(
          q(p, $, !1),
          l,
          d,
          N,
          (y, w) => l((L) => l((k) => ke(
            y,
            l,
            d,
            N,
            (A, H) => l((V) => {
              const M = Bn(Ut((R) => R !== `
` && R !== "\r" && R !== "#" && R !== "}")), P = y._3 && !A._3 ? q(A._1, A._2, !0) : A;
              return l((R) => M(
                P,
                l,
                d,
                N,
                (j, et) => l((Y) => h(
                  P._3 && !j._3 ? q(j._1, j._2, !0) : j,
                  H0(Re(bt(Xt.foldr, et)))
                ))
              ));
            })
          )))
        ));
      });
    })('label ("…", : rest-of-line, or |…|)')(n._3 && !u._3 ? q(u._1, u._2, !0) : u, e, r, o, i))
  ));
})(), Um = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => of(
    q(i, s, !1),
    n,
    e,
    (c, f) => {
      const g = c._3;
      return n((l) => g ? r(c, f) : xs(t, n, e, r, o));
    },
    o
  ));
}, Dr = /* @__PURE__ */ Ut((t) => t >= "0" && t <= "9"), vn = /* @__PURE__ */ (() => {
  const t = kt(Ut((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => e((s) => {
    const u = (g, l) => e((d) => {
      const _ = Bn((() => {
        const p = kt(Ut((m) => m === "_"))("'_'"), $ = kt(Ut((m) => m === "-"))("'-'");
        return (m, N, v, y, w) => {
          const L = m._1, k = m._2;
          return N((A) => Lo(
            q(L, k, !1),
            N,
            v,
            (H, V) => {
              const M = H._3;
              return N((P) => {
                if (M)
                  return y(H, V);
                const R = m._1, j = m._2;
                return N((et) => Dr(
                  q(R, j, !1),
                  N,
                  v,
                  (Y, I) => {
                    const x = Y._3;
                    return N((C) => {
                      if (x)
                        return y(Y, I);
                      const D = m._1, S = m._2;
                      return N((F) => p(
                        q(D, S, !1),
                        N,
                        v,
                        (Q, K) => {
                          const O = Q._3;
                          return N((B) => O ? y(Q, K) : $(m, N, v, y, w));
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
      })()), h = n._3 && !g._3 ? q(g._1, g._2, !0) : g;
      return e((p) => _(
        h,
        e,
        r,
        o,
        ($, m) => e((N) => i(
          h._3 && !$._3 ? q($._1, $._2, !0) : $,
          is(l) + Re(bt(Xt.foldr, m))
        ))
      ));
    }), c = n._1, f = n._2;
    return e((g) => Lo(
      q(c, f, !1),
      e,
      r,
      (l, d) => {
        const _ = l._3;
        return e((h) => _ ? o(l, d) : t(n, e, r, o, u));
      },
      u
    ));
  });
})(), Mm = /* @__PURE__ */ kt((t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => xs(
    q(i, s, !1),
    n,
    e,
    (c, f) => {
      const g = c._3;
      return n((l) => g ? r(c, f) : vn(t, n, e, r, o));
    },
    o
  ));
})("frame name (identifier or quoted string)"), Km = (t, n, e, r, o) => n((i) => vn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = t._3 && !s._3 ? q(s._1, s._2, !0) : s;
    return n((g) => ke(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = kt(($, m, N, v, y) => {
          const w = $._1, L = $._2;
          return m((k) => or("->")(
            q(w, L, !1),
            m,
            N,
            (A, H) => {
              const V = A._3;
              return m((M) => V ? v(A, H) : or("<-")($, m, N, v, y));
            },
            y
          ));
        })("'->' or '<-'"), p = f._3 && !l._3 ? q(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const y = p._3 && !m._3 ? q(m._1, m._2, !0) : m;
            return n((w) => ke(
              y,
              n,
              e,
              r,
              (L, k) => n((A) => {
                const H = kt(vn)("target node identifier"), V = y._3 && !L._3 ? q(L._1, L._2, !0) : L;
                return n((M) => H(
                  V,
                  n,
                  e,
                  r,
                  (P, R) => n((j) => {
                    const et = Bn((I, x, C, D, S) => {
                      const F = I._3;
                      return x((Q) => x((K) => ke(
                        I,
                        x,
                        C,
                        (O, B) => D(q(O._1, O._2, F), B),
                        (O, B) => x((nt) => x((U) => {
                          const tt = I._3 && !O._3 ? q(O._1, O._2, !0) : O;
                          return Um(
                            tt,
                            x,
                            C,
                            (ot, st) => D(q(ot._1, ot._2, F), st),
                            (ot, st) => x((_t) => S(tt._3 && !ot._3 ? q(ot._1, ot._2, !0) : ot, st))
                          );
                        }))
                      )));
                    }), Y = V._3 && !P._3 ? q(P._1, P._2, !0) : P;
                    return n((I) => et(
                      Y,
                      n,
                      e,
                      r,
                      (x, C) => n((D) => (() => {
                        if (N === "<-") {
                          const F = Pe("Token", { from: R, to: u, labels: bt(Xt.foldr, C) });
                          return (Q, K, O, B, nt) => nt(Q, F);
                        }
                        const S = Pe("Token", { from: u, to: R, labels: bt(Xt.foldr, C) });
                        return (F, Q, K, O, B) => B(F, S);
                      })()(Y._3 && !x._3 ? q(x._1, x._2, !0) : x, n, e, r, o))
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
)), jm = (t, n, e, r, o) => n((i) => Dr(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = Bn(Dr), g = t._3 && !s._3 ? q(s._1, s._2, !0) : s;
    return n((l) => f(
      g,
      n,
      e,
      r,
      (d, _) => n((h) => {
        const p = ug(is(u) + Re(bt(
          Xt.foldr,
          _
        )));
        return (() => {
          if (p.tag === "Just") {
            const $ = p._1;
            return (m, N, v, y, w) => w(m, $);
          }
          if (p.tag === "Nothing")
            return ($, m, N, v, y) => y($, 0);
          a();
        })()(g._3 && !d._3 ? q(d._1, d._2, !0) : d, n, e, r, o);
      })
    ));
  })
)), Ho = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => or(t)(
    n,
    e,
    r,
    (c, f) => o(q(c._1, c._2, s), f),
    (c, f) => e((g) => {
      const l = bs((() => {
        const _ = kt(Ut((p) => p === "_"))("'_'"), h = kt(Ut((p) => p === "-"))("'-'");
        return (p, $, m, N, v) => {
          const y = p._1, w = p._2;
          return $((L) => Lo(
            q(y, w, !1),
            $,
            m,
            (k, A) => {
              const H = k._3;
              return $((V) => {
                if (H)
                  return N(k, A);
                const M = p._1, P = p._2;
                return $((R) => Dr(
                  q(M, P, !1),
                  $,
                  m,
                  (j, et) => {
                    const Y = j._3;
                    return $((I) => {
                      if (Y)
                        return N(j, et);
                      const x = p._1, C = p._2;
                      return $((D) => _(
                        q(x, C, !1),
                        $,
                        m,
                        (S, F) => {
                          const Q = S._3;
                          return $((K) => Q ? N(S, F) : h(p, $, m, N, v));
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
      })()), d = n._3 && !c._3 ? q(c._1, c._2, !0) : c;
      return e((_) => l(
        d,
        e,
        r,
        (h, p) => o(q(h._1, h._2, s), p),
        (h, p) => e(($) => {
          const m = d._3 && !h._3 ? q(h._1, h._2, !0) : h;
          return e((N) => Fn(
            m,
            e,
            r,
            (v, y) => o(q(v._1, v._2, s), y),
            (v, y) => e((w) => i(m._3 && !v._3 ? q(v._1, v._2, !0) : v, t))
          ));
        })
      ));
    })
  ));
}, Zm = (t, n, e, r, o) => n((i) => Wn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = t._3 && !s._3 ? q(s._1, s._2, !0) : s;
    return n((g) => Ho("via")(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = f._3 && !l._3 ? q(l._1, l._2, !0) : l;
        return n((p) => vn(
          h,
          n,
          e,
          r,
          ($, m) => n((N) => {
            const v = h._3 && !$._3 ? q($._1, $._2, !0) : $;
            return n((y) => Wn(
              v,
              n,
              e,
              r,
              (w, L) => n((k) => {
                const A = v._3 && !w._3 ? q(w._1, w._2, !0) : w;
                return n((H) => vn(
                  A,
                  n,
                  e,
                  r,
                  (V, M) => n((P) => o(A._3 && !V._3 ? q(V._1, V._2, !0) : V, { from: m, to: M }))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), cr = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => or(t)(
    n,
    e,
    r,
    (c, f) => o(q(c._1, c._2, s), f),
    (c, f) => e((g) => {
      const l = bs((() => {
        const _ = kt(Ut((p) => p === "_"))("'_'"), h = kt(Ut((p) => p === "-"))("'-'");
        return (p, $, m, N, v) => {
          const y = p._1, w = p._2;
          return $((L) => Lo(
            q(y, w, !1),
            $,
            m,
            (k, A) => {
              const H = k._3;
              return $((V) => {
                if (H)
                  return N(k, A);
                const M = p._1, P = p._2;
                return $((R) => Dr(
                  q(M, P, !1),
                  $,
                  m,
                  (j, et) => {
                    const Y = j._3;
                    return $((I) => {
                      if (Y)
                        return N(j, et);
                      const x = p._1, C = p._2;
                      return $((D) => _(
                        q(x, C, !1),
                        $,
                        m,
                        (S, F) => {
                          const Q = S._3;
                          return $((K) => Q ? N(S, F) : h(p, $, m, N, v));
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
      })()), d = n._3 && !c._3 ? q(c._1, c._2, !0) : c;
      return e((_) => l(
        d,
        e,
        r,
        (h, p) => o(q(h._1, h._2, s), p),
        (h, p) => e(($) => i(d._3 && !h._3 ? q(h._1, h._2, !0) : h, void 0))
      ));
    })
  ));
}, tN = (t, n, e, r, o) => n((i) => cr("+edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = t._3 && !s._3 ? q(s._1, s._2, !0) : s;
    return n((g) => Wn(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = kt(vn)("source node identifier"), p = f._3 && !l._3 ? q(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const y = p._3 && !m._3 ? q(m._1, m._2, !0) : m;
            return n((w) => Wn(
              y,
              n,
              e,
              r,
              (L, k) => n((A) => {
                const H = kt(vn)("target node identifier"), V = y._3 && !L._3 ? q(L._1, L._2, !0) : L;
                return n((M) => H(
                  V,
                  n,
                  e,
                  r,
                  (P, R) => n((j) => o(
                    V._3 && !P._3 ? q(P._1, P._2, !0) : P,
                    Pe("AddEdge", { from: N, to: R })
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), nN = (t, n, e, r, o) => n((i) => cr("+node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = t._3 && !s._3 ? q(s._1, s._2, !0) : s;
    return n((g) => Wn(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = kt(vn)("node identifier"), p = f._3 && !l._3 ? q(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const y = p._3 && !m._3 ? q(m._1, m._2, !0) : m;
            return n((w) => Xm(
              y,
              n,
              e,
              r,
              (L, k) => n((A) => o(
                y._3 && !L._3 ? q(L._1, L._2, !0) : L,
                Pe("AddNode", { id: N, label: k })
              ))
            ));
          })
        ));
      })
    ));
  })
)), eN = (t, n, e, r, o) => n((i) => cr("-edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = t._3 && !s._3 ? q(s._1, s._2, !0) : s;
    return n((g) => Wn(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = kt(vn)("source node identifier"), p = f._3 && !l._3 ? q(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const y = p._3 && !m._3 ? q(m._1, m._2, !0) : m;
            return n((w) => Wn(
              y,
              n,
              e,
              r,
              (L, k) => n((A) => {
                const H = kt(vn)("target node identifier"), V = y._3 && !L._3 ? q(L._1, L._2, !0) : L;
                return n((M) => H(
                  V,
                  n,
                  e,
                  r,
                  (P, R) => n((j) => o(
                    V._3 && !P._3 ? q(P._1, P._2, !0) : P,
                    Pe("DelEdge", { from: N, to: R })
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), rN = (t, n, e, r, o) => n((i) => cr("-node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = t._3 && !s._3 ? q(s._1, s._2, !0) : s;
    return n((g) => Wn(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = kt(vn)("node identifier"), p = f._3 && !l._3 ? q(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const y = Bn((L, k, A, H, V) => {
              const M = L._3;
              return Zm(L, k, A, (P, R) => H(q(P._1, P._2, M), R), V);
            }), w = p._3 && !m._3 ? q(m._1, m._2, !0) : m;
            return n((L) => y(
              w,
              n,
              e,
              r,
              (k, A) => n((H) => o(
                w._3 && !k._3 ? q(k._1, k._2, !0) : k,
                Pe("DelNode", { id: N, via: bt(Xt.foldr, A) })
              ))
            ));
          })
        ));
      })
    ));
  })
)), oN = (t, n, e, r, o) => n((i) => cr("~edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = t._3 && !s._3 ? q(s._1, s._2, !0) : s;
    return n((g) => Wn(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = kt(vn)("source node identifier"), p = f._3 && !l._3 ? q(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const y = p._3 && !m._3 ? q(m._1, m._2, !0) : m;
            return n((w) => Wn(
              y,
              n,
              e,
              r,
              (L, k) => n((A) => {
                const H = kt(vn)("target node identifier"), V = y._3 && !L._3 ? q(L._1, L._2, !0) : L;
                return n((M) => H(
                  V,
                  n,
                  e,
                  r,
                  (P, R) => n((j) => {
                    const et = V._3 && !P._3 ? q(P._1, P._2, !0) : P;
                    return n((Y) => Fn(
                      et,
                      n,
                      e,
                      r,
                      (I, x) => n((C) => {
                        const D = kt(or("->"))("'->'"), S = et._3 && !I._3 ? q(I._1, I._2, !0) : I;
                        return n((F) => D(
                          S,
                          n,
                          e,
                          r,
                          (Q, K) => n((O) => {
                            const B = S._3 && !Q._3 ? q(Q._1, Q._2, !0) : Q;
                            return n((nt) => Fn(
                              B,
                              n,
                              e,
                              r,
                              (U, tt) => n((ot) => {
                                const st = kt(vn)("new source node identifier"), _t = B._3 && !U._3 ? q(U._1, U._2, !0) : U;
                                return n((Pt) => st(
                                  _t,
                                  n,
                                  e,
                                  r,
                                  (vt, Vt) => n((ht) => {
                                    const mt = _t._3 && !vt._3 ? q(vt._1, vt._2, !0) : vt;
                                    return n((lt) => Wn(
                                      mt,
                                      n,
                                      e,
                                      r,
                                      (dt, it) => n((ut) => {
                                        const $t = kt(vn)("new target node identifier"), Nt = mt._3 && !dt._3 ? q(dt._1, dt._2, !0) : dt;
                                        return n((Rt) => $t(
                                          Nt,
                                          n,
                                          e,
                                          r,
                                          (Gt, Zt) => n((Hn) => o(
                                            Nt._3 && !Gt._3 ? q(Gt._1, Gt._2, !0) : Gt,
                                            Pe("RepointEdge", { from: N, to: R, newFrom: Vt, newTo: Zt })
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
)), iN = (t, n, e, r, o) => n((i) => ja(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = kt(ef([nN, rN, oN, tN, eN, Km]))("statement (+node, -node, +edge, -edge, ~edge, or 'a -> b')"), g = t._3 && !s._3 ? q(s._1, s._2, !0) : s;
    return n((l) => f(
      g,
      n,
      e,
      r,
      (d, _) => n((h) => o(
        g._3 && !d._3 ? q(d._1, d._2, !0) : d,
        Ls("Leaf", { op: _, line: u.line, column: u.column })
      ))
    ));
  })
)), sN = (t, n, e, r, o) => n((i) => cr("seed")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = t._3 && !s._3 ? q(s._1, s._2, !0) : s;
    return n((g) => ke(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = kt(jm)("integer (seed value)"), p = f._3 && !l._3 ? q(l._1, l._2, !0) : l;
        return n(($) => h(
          p,
          n,
          e,
          r,
          (m, N) => n((v) => {
            const y = p._3 && !m._3 ? q(m._1, m._2, !0) : m;
            return n((w) => Fn(
              y,
              n,
              e,
              r,
              (L, k) => n((A) => o(y._3 && !L._3 ? q(L._1, L._2, !0) : L, N))
            ));
          })
        ));
      })
    ));
  })
)), Cs = /* @__PURE__ */ Wm(/* @__PURE__ */ (() => {
  const t = kt(Ut((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (c, f) => e((g) => e((l) => {
      const d = n._3 && !c._3 ? q(c._1, c._2, !0) : c;
      return Fn(d, e, r, o, (_, h) => e((p) => i(d._3 && !_._3 ? q(_._1, _._2, !0) : _, h)));
    }))
  )));
})())(/* @__PURE__ */ kt(/* @__PURE__ */ (() => {
  const t = kt(Ut((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => Fn(
    n,
    e,
    r,
    o,
    (c, f) => e((g) => e((l) => {
      const d = n._3 && !c._3 ? q(c._1, c._2, !0) : c;
      return t(d, e, r, o, (_, h) => e((p) => i(d._3 && !_._3 ? q(_._1, _._2, !0) : _, h)));
    }))
  )));
})())("closing '}'")), uN = (t, n, e, r, o) => n((i) => Ho("seq")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => Cs(Ss(Ma))(
    t._3 && !s._3 ? q(s._1, s._2, !0) : s,
    n,
    e,
    r,
    o
  ))
)), cN = (t, n, e, r, o) => n((i) => Ho("par")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => Cs(Ss(cm))(
    t._3 && !s._3 ? q(s._1, s._2, !0) : s,
    n,
    e,
    r,
    o
  ))
)), Ss = (t) => {
  const n = Bn(aN());
  return (e, r, o, i, s) => r((u) => n(
    e,
    r,
    o,
    i,
    (c, f) => r((g) => s(
      e._3 && !c._3 ? q(c._1, c._2, !0) : c,
      t(bt(Xt.foldr, f))
    ))
  ));
}, aN = /* @__PURE__ */ gf(() => {
  const t = bs(kt(Ut((n) => n === "}"))("'}'"));
  return (n, e, r, o, i) => e((s) => {
    const u = n._3;
    return e((c) => e((f) => Fn(
      n,
      e,
      r,
      (g, l) => o(q(g._1, g._2, u), l),
      (g, l) => e((d) => e((_) => {
        const h = n._3 && !g._3 ? q(g._1, g._2, !0) : g;
        return t(
          h,
          e,
          r,
          (p, $) => o(q(p._1, p._2, u), $),
          (p, $) => e((m) => {
            const N = h._3 && !p._3 ? q(p._1, p._2, !0) : p;
            return e((v) => {
              const y = ef([
                (L, k, A, H, V) => {
                  const M = L._3;
                  return cN(L, k, A, (P, R) => H(q(P._1, P._2, M), R), V);
                },
                (L, k, A, H, V) => {
                  const M = L._3;
                  return uN(L, k, A, (P, R) => H(q(P._1, P._2, M), R), V);
                },
                iN
              ]), w = n._3 && !N._3 ? q(N._1, N._2, !0) : N;
              return e((L) => y(
                w,
                e,
                r,
                o,
                (k, A) => e((H) => {
                  const V = w._3 && !k._3 ? q(k._1, k._2, !0) : k;
                  return e((M) => ke(
                    V,
                    e,
                    r,
                    o,
                    (P, R) => e((j) => {
                      const et = V._3 && !P._3 ? q(P._1, P._2, !0) : P;
                      return e((Y) => Om(
                        et,
                        e,
                        r,
                        o,
                        (I, x) => e((C) => i(et._3 && !I._3 ? q(I._1, I._2, !0) : I, A))
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
}), fN = (t, n, e, r, o) => n((i) => Ho("frame")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = t._3 && !s._3 ? q(s._1, s._2, !0) : s;
    return n((g) => Mm(
      f,
      n,
      e,
      r,
      (l, d) => n((_) => {
        const h = f._3 && !l._3 ? q(l._1, l._2, !0) : l;
        return n((p) => Fn(
          h,
          n,
          e,
          r,
          ($, m) => n((N) => {
            const v = Cs(Ss(Ma)), y = h._3 && !$._3 ? q($._1, $._2, !0) : $;
            return n((w) => v(
              y,
              n,
              e,
              r,
              (L, k) => n((A) => {
                const H = y._3 && !L._3 ? q(L._1, L._2, !0) : L;
                return n((V) => Fn(
                  H,
                  n,
                  e,
                  r,
                  (M, P) => n((R) => o(
                    H._3 && !M._3 ? q(M._1, M._2, !0) : M,
                    { name: b("Just", d), ops: k }
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), gN = (t, n, e, r, o) => n((i) => Fn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const f = t._3 && !s._3 ? q(s._1, s._2, !0) : s;
    return n((g) => {
      const l = (h, p) => n(($) => {
        const m = Bn(fN), N = f._3 && !h._3 ? q(h._1, h._2, !0) : h;
        return n((v) => m(
          N,
          n,
          e,
          r,
          (y, w) => n((L) => {
            const k = N._3 && !y._3 ? q(y._1, y._2, !0) : y;
            return n((A) => Fn(
              k,
              n,
              e,
              r,
              (H, V) => n((M) => {
                const P = kt(nf)("'frame' or end of input"), R = k._3 && !H._3 ? q(H._1, H._2, !0) : H;
                return n((j) => P(
                  R,
                  n,
                  e,
                  r,
                  (et, Y) => n((I) => o(
                    R._3 && !et._3 ? q(et._1, et._2, !0) : et,
                    {
                      seed: (() => {
                        if (p.tag === "Just")
                          return p._1;
                        if (p.tag === "Nothing")
                          return 0;
                        a();
                      })(),
                      frames: bt(Xt.foldr, w)
                    }
                  ))
                ));
              })
            ));
          })
        ));
      }), d = f._1, _ = f._2;
      return n((h) => n((p) => sN(
        q(d, _, !1),
        n,
        e,
        ($, m) => {
          const N = $._3;
          return n((v) => N ? r($, m) : l(f, T));
        },
        ($, m) => n((N) => l($, b("Just", m)))
      )));
    });
  })
)), _N = (t) => {
  const n = Pm(t)(gN);
  if (n.tag === "Left")
    return Et("Left", { msg: n._1._1, line: n._1._2.line, column: n._1._2.column });
  if (n.tag === "Right")
    return Et("Right", n._1);
  a();
}, lN = (t) => {
  const n = _N(t);
  if (n.tag === "Left")
    return Et("Left", n._1.msg);
  if (n.tag === "Right")
    return Et("Right", n._1);
  a();
};
function dN(t, n, e, r) {
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
function Au(t) {
  return function(n) {
    return function(e) {
      return function() {
        e.setAttribute(t, n);
      };
    };
  };
}
const hN = function() {
  return window;
};
function pN(t) {
  return function(n) {
    return function() {
      return n.requestAnimationFrame(t);
    };
  };
}
const $N = (t) => t, mN = (t) => () => t.clientWidth || 0, NN = () => window.devicePixelRatio || 1, JN = (t, n) => {
  n.innerHTML = t;
}, vN = (t, n, e) => {
  t.style.setProperty(n, e);
}, yN = (t) => (n) => t === n, sf = (t) => t, uf = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  a();
}, TN = (t) => (n) => {
  const e = pt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  a();
}, wN = /* @__PURE__ */ sf("CanvasRenderer"), LN = /* @__PURE__ */ sf("SvgRenderer"), EN = (t) => (n) => {
  const e = t - n * at(ur(Ku(t / n)));
  return n <= 0 ? 0 : e < 0 ? e + n : e;
}, bN = (t) => J((n) => (e) => {
  const r = t(e);
  return () => (n(), r());
})(() => {
}), ci = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = al(e)(uf(i)(e.totalDuration));
  if (n === "CanvasRenderer")
    return () => {
      const u = rc(), c = o.value;
      o.value = u;
      const f = $N(t), g = $c(e.layout)(s.camera), l = g.w + 48, d = g.h + 48, _ = mN(t)(), h = l <= 0 ? _ : _ * d / l, p = NN(), $ = _ * p, m = h * p, N = Jg(f)(), v = vg(f)(), y = yg(f)($);
      N !== $ && y();
      const w = Tg(f)(m);
      v !== m && w(), vN(t, "height", _n(ur(rg(h))) + "px");
      const L = Ng(f)();
      fr(L)(), Vi(L)({ scaleX: p, scaleY: p })();
      const k = r.value, A = H$(L)({ width: _, height: h })(e.layout)(s)(c === 0 ? 0 : (u - c) / 1e3)(k)();
      return r.value = A, gr(L)();
    };
  if (n === "SvgRenderer") {
    const u = nm(e.layout)(s), c = Au("viewBox")(u.viewBox)(t);
    return () => (c(), Au("preserveAspectRatio")("xMidYMid meet")(t)(), JN(u.body, t));
  }
  a();
}, kN = (t) => {
  const n = lN(t);
  if (n.tag === "Left")
    return Et("Left", n._1);
  if (n.tag === "Right") {
    const e = Em(n._1);
    if (e.tag === "Left")
      return Et("Left", e._1.msg);
    if (e.tag === "Right")
      return Et("Right", e._1);
  }
  a();
}, ai = (t) => (n) => {
  const e = gn((r) => r.startT <= n && n < r.endT)(t.spans);
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
}, xN = (t) => (n) => (e) => () => {
  let r = 1, o = !0, i = !1, s = 0, u = 0;
  const c = { value: W }, f = { value: 0 };
  let g = !1, l = [];
  ci(t)(e)(n)(c)(f)(0)();
  const d = (N) => () => {
    const v = l, y = o, w = { time: N, keyframe: ai(n)(N), playing: y };
    return bN((L) => L(w))(v)();
  }, _ = () => (o = !1, d(s)()), h = () => {
    if (!g && (i = !1, o)) {
      const y = rc(), w = u;
      u = y;
      const L = r, k = s, A = EN(w === 0 ? k + 0 * L : k + (y - w) / 1e3 * L)(n.totalDuration + 0.8);
      return s = A, ci(t)(e)(n)(c)(f)(A)(), d(A)(), p();
    }
  }, p = () => {
    if (!g && !i) {
      i = !0;
      const y = hN();
      pN(h)(y)();
    }
  }, $ = () => (u = 0, o = !0, p()), m = () => (o || $(), d(s)());
  return $(), {
    play: m,
    pause: _,
    toggle: () => o ? _() : m(),
    seek: (N) => {
      const v = TN(0)(uf(n.totalDuration)(N));
      return () => (s = v, u = 0, ci(t)(e)(n)(c)(f)(v)(), d(v)());
    },
    setSpeed: (N) => () => r = N,
    currentTime: () => s,
    currentKeyframe: () => {
      const N = s;
      return ai(n)(N);
    },
    isPlaying: () => o,
    duration: n.totalDuration,
    subscribe: (N) => () => {
      l = sn(l)(N);
      const y = s, w = o;
      N({ time: y, keyframe: ai(n)(y), playing: w })();
      const L = Xu((k) => !yN(k)(N));
      return () => {
        l = L(l);
      };
    },
    destroy: () => g = !0
  };
}, CN = (t) => (n) => (e) => {
  const r = kN(n);
  if (r.tag === "Left")
    return () => Et("Left", r._1);
  if (r.tag === "Right") {
    const o = r._1, i = pp(o);
    return () => {
      const s = i(), u = R_(k_)(o)(vp(s)(o));
      if (u.tag === "Left")
        return Et("Left", "precompute failed");
      if (u.tag === "Right") {
        const c = xN(t)(u._1)(e)();
        return Et("Right", c);
      }
      a();
    };
  }
  a();
}, Iu = dn.createElement;
dn.Fragment;
function Gs(t) {
  return (n) => Array.isArray(n.children) ? Iu.apply(null, [t, n].concat(n.children)) : Iu(t, n);
}
function SN(t) {
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
      const r = dn.forwardRef(
        (o, i) => t(n)(e(o, i))
      );
      return r.displayName = n, r;
    };
  };
}
const cf = /* @__PURE__ */ SN(Gs), GN = /* @__PURE__ */ cf("canvas")(), PN = (t, n) => {
  const e = dn.useRef(n);
  return e.current !== n && !t(e.current, n) && (e.current = n), e.current;
};
dn.memo;
dn.memo;
function Ru(t, n) {
  const [e, r] = dn.useState(
    typeof n == "function" ? () => n : n
  );
  return r.hasOwnProperty("$$reactBasicHooks$$cachedSetState") || (r.$$reactBasicHooks$$cachedSetState = (o) => () => r(o)), t(e, r.$$reactBasicHooks$$cachedSetState);
}
function AN(t, n, e) {
  const r = PN(t, n);
  dn.useEffect(e, [r]);
}
const IN = dn.useRef;
function RN(t) {
  return t.current;
}
dn.useContext;
dn.useDebugValue;
dn.useId;
dn.useDeferredValue;
dn.useSyncExternalStore;
dn.useSyncExternalStore;
function FN(t, n) {
  return n.displayName = t, n.toString = () => t, n;
}
dn.useEffectEvent || dn.experimental_useEffectEvent;
const BN = (t) => (n) => (e) => () => AN((r, o) => t.eq(r)(o), n, e), QN = /* @__PURE__ */ s0(RN), DN = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, WN = (t) => {
  const n = {
    apply: (e) => (r) => () => {
      const o = e(), i = r();
      return o(i);
    },
    Functor0: () => DN
  };
  return { pure: (e) => () => e, Apply0: () => n };
}, qN = /* @__PURE__ */ BN({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), af = WN().pure, HN = /* @__PURE__ */ Gs(GN), zN = /* @__PURE__ */ cf("svg")(), ff = (t) => (n) => () => {
  const e = IN(df), r = Ru((s, u) => E(s, u), T), o = r._1, i = Ru((s, u) => E(s, u), { time: 0, keyframe: "", playing: !1 });
  return qN(E(t, n))((() => {
    const s = QN(e);
    return () => {
      const u = s(), c = Qu(u, T, en), f = (() => {
        if (c.tag === "Just")
          return dN(T, en, "Element", c._1);
        if (c.tag === "Nothing")
          return T;
        a();
      })();
      if (f.tag === "Nothing")
        return () => {
        };
      if (f.tag === "Just") {
        const g = CN(f._1)(t)(n === "svg" ? LN : wN)();
        if (g.tag === "Left")
          return hf("[markgraf] " + g._1)(), () => {
          };
        if (g.tag === "Right") {
          const l = g._1;
          r._2((_) => b("Just", l))();
          const d = l.subscribe((_) => i._2((h) => _))();
          return () => (d(), l.destroy(), r._2((_) => T)());
        }
      }
      a();
    };
  })())(), af({
    elementRef: e,
    time: i._1.time,
    keyframe: i._1.keyframe,
    playing: i._1.playing,
    duration: o.tag === "Just" ? o._1.duration : 0,
    ready: (() => {
      if (o.tag === "Just")
        return !0;
      if (o.tag === "Nothing")
        return !1;
      a();
    })(),
    play: (() => {
      if (o.tag === "Just")
        return o._1.play;
      if (o.tag === "Nothing")
        return () => {
        };
      a();
    })(),
    pause: (() => {
      if (o.tag === "Just")
        return o._1.pause;
      if (o.tag === "Nothing")
        return () => {
        };
      a();
    })(),
    toggle: (() => {
      if (o.tag === "Just")
        return o._1.toggle;
      if (o.tag === "Nothing")
        return () => {
        };
      a();
    })(),
    seek: (s) => {
      if (o.tag === "Just")
        return o._1.seek(s);
      if (o.tag === "Nothing")
        return () => {
        };
      a();
    },
    setSpeed: (s) => {
      if (o.tag === "Just")
        return o._1.setSpeed(s);
      if (o.tag === "Nothing")
        return () => {
        };
      a();
    }
  })();
}, ON = /* @__PURE__ */ FN(
  "MarkgrafPlayer",
  (t) => {
    const n = Qu(t.renderer, T, en), e = (() => {
      if (n.tag === "Nothing")
        return "canvas";
      if (n.tag === "Just")
        return n._1;
      a();
    })(), r = ff(t.src)(e)();
    return af(e === "svg" ? Gs(zN)({ className: "markgraf-player", ref: r.elementRef }) : HN({ className: "markgraf-player", ref: r.elementRef }))();
  }
), YN = (t, n) => ff(t)(n?.renderer ?? "canvas"), XN = ON;
export {
  XN as MarkgrafPlayer,
  YN as useMarkgraf
};
