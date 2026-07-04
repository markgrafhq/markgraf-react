import jn from "react";
function U_(t) {
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
function Je(t, n) {
  return n > 0 ? Math.floor(t / n) : n < 0 ? -Math.floor(t / -n) : 0;
}
const Xn = (t) => (n) => t, H = function(t) {
  return function(n) {
    for (var e = n.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = t(n[o]);
    return r;
  };
}, V_ = { map: H }, da = (t) => t, rn = function(t) {
  return t.toString();
}, Mr = function(t) {
  var n = t.toString();
  return isNaN(n + ".0") ? n : n + ".0";
}, Ac = function(t) {
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
}, _a = (t) => t, Cn = /* @__PURE__ */ _a("LT"), An = /* @__PURE__ */ _a("GT"), Un = /* @__PURE__ */ _a("EQ"), J = (t, n) => ({ tag: t, _1: n }), x = /* @__PURE__ */ J("Nothing"), Ut = (t) => J("Just", t), ng = (t) => {
  if (t.tag === "Nothing")
    return !0;
  if (t.tag === "Just")
    return !1;
  f();
}, eg = (t) => {
  if (t.tag === "Nothing")
    return !1;
  if (t.tag === "Just")
    return !0;
  f();
}, Po = function(t) {
  return function(n) {
    return function(e) {
      for (var r = n, o = e.length, i = o - 1; i >= 0; i--)
        r = t(e[i])(r);
      return r;
    };
  };
}, N = function(t) {
  return function(n) {
    return function(e) {
      for (var r = n, o = e.length, i = 0; i < o; i++)
        r = t(r)(e[i]);
      return r;
    };
  };
}, Bi = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldr((o) => {
    const i = r(o);
    return (s) => n.apply(n.Functor0().map((u) => da)(i))(s);
  })(t.pure());
}, rg = (t) => {
  const n = Bi(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, ha = {
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
}, Xt = {
  foldr: Po,
  foldl: N,
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => Xt.foldr((r) => (o) => t.Semigroup0().append(e(r))(o))(n);
  }
}, og = null;
function Te(t, n, e) {
  return t == null ? n : e(t);
}
const k = (t, n) => ({ tag: "Tuple", _1: t, _2: n }), Mn = (t) => (n) => k(t, n), gu = (t) => t._2, du = (t) => t._1, K_ = function(t) {
  return function() {
    return t;
  };
}, M_ = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return go.pure(e(r))();
  },
  Functor0: () => j_
}, go = { pure: K_, Apply0: () => M_ }, j_ = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, Z_ = function(t) {
  return function() {
    console.log(t);
  };
}, Mf = function(t) {
  return function() {
    console.warn(t);
  };
}, xt = typeof Array.prototype.flatMap == "function" ? function(t) {
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
}, St = (t, n) => ({ tag: t, _1: n }), th = (t) => St("Left", t), ig = (t) => St("Right", t), nh = {
  map: (t) => (n) => {
    if (n.tag === "Left")
      return St("Left", n._1);
    if (n.tag === "Right")
      return St("Right", t(n._1));
    f();
  }
}, sg = {
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
  Functor0: () => nh
}, eh = {
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
  Apply0: () => sg
}, rh = { pure: ig, Apply0: () => sg }, ug = { Applicative0: () => rh, Bind1: () => eh }, oh = (t) => t, ih = { map: (t) => (n) => t(n) }, cg = { apply: (t) => (n) => t(n), Functor0: () => ih }, sh = { bind: (t) => (n) => n(t), Apply0: () => cg }, uh = { pure: oh, Apply0: () => cg }, yr = { Applicative0: () => uh, Bind1: () => sh }, di = (t, n) => ({ tag: t, _1: n }), ag = (t) => di("Loop", t), ch = {
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
  Monad0: () => yr
}, ah = function(t) {
  return function(n) {
    return function() {
      return t(n());
    };
  };
}, fh = function(t) {
  return function() {
    return t;
  };
}, lh = { map: ah }, gh = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return fg.pure(e(r))();
  },
  Functor0: () => lh
}, fg = { pure: fh, Apply0: () => gh }, dh = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, _h = function(t, n) {
  return n.push(t);
}, hh = /* @__PURE__ */ dh(_h), ph = (t, n) => ({ tag: "Iterator", _1: t, _2: n }), mh = (t) => (n) => (e) => () => {
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
}, $h = (t) => (n) => () => {
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
var pa = function(t) {
  return function(n) {
    return t === n;
  };
};
const yh = pa, vh = pa, Xo = pa, _u = function(t) {
  return function(n) {
    return function(e) {
      if (n.length !== e.length) return !1;
      for (var r = 0; r < n.length; r++)
        if (!t(n[r])(e[r])) return !1;
      return !0;
    };
  };
}, Pe = { eq: Xo }, xh = { eq: vh }, Go = { eq: yh };
var ma = function(t) {
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
const Nh = ma, wh = ma, Th = ma, I = { compare: /* @__PURE__ */ Th(Cn)(Un)(An), Eq0: () => Pe }, rt = { compare: /* @__PURE__ */ wh(Cn)(Un)(An), Eq0: () => xh }, ot = { compare: /* @__PURE__ */ Nh(Cn)(Un)(An), Eq0: () => Go }, lg = function(t) {
  return t;
}, Jh = /* @__PURE__ */ (function() {
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
            function a(l, d) {
              switch (d - l) {
                case 0:
                  return s([]);
                case 1:
                  return i(t)(u(c[l]));
                case 2:
                  return o(i(n)(u(c[l])))(u(c[l + 1]));
                case 3:
                  return o(o(i(e)(u(c[l])))(u(c[l + 1])))(u(c[l + 2]));
                default:
                  var _ = l + Math.floor((d - l) / 4) * 2;
                  return o(i(r)(a(l, _)))(a(_, d));
              }
            }
            return a(0, c.length);
          };
        };
      };
    };
  };
})(), bh = (t) => t, Qr = {
  traverse: (t) => {
    const n = t.Apply0();
    return Jh(n.apply)(n.Functor0().map)(t.pure);
  },
  sequence: (t) => Qr.traverse(t)(bh),
  Functor0: () => V_,
  Foldable1: () => Xt
}, Ht = function(t, n) {
  for (var e = t > n ? -1 : 1, r = new Array(e * (n - t) + 1), o = t, i = 0; o !== n; )
    r[i++] = o, o += e;
  return r[i] = o, r;
};
var kh = function(t, n) {
  if (t < 1)
    return [];
  var e = new Array(t);
  return e.fill(n);
}, Lh = function(t, n) {
  for (var e = [], r = 0, o = 0; o < t; o++)
    e[r++] = n;
  return e;
};
const Eh = typeof Array.prototype.fill == "function" ? kh : Lh, Dt = /* @__PURE__ */ (function() {
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
})(), zt = function(t, n, e) {
  return e.length === 0 ? t({}) : n(e[0])(e.slice(1));
}, gg = function(t, n, e, r) {
  for (var o = 0; o < r.length; o++) {
    var i = e(r[o]);
    if (n(i)) return i;
  }
  return t;
}, uo = function(t, n, e, r) {
  for (var o = 0, i = r.length; o < i; o++)
    if (e(r[o])) return t(o);
  return n;
}, dg = function(t, n, e, r, o) {
  if (e < 0 || e > o.length) return n;
  var i = o.slice();
  return i.splice(e, 0, r), t(i);
}, _g = function(t, n, e, r) {
  if (e < 0 || e >= r.length) return n;
  var o = r.slice();
  return o.splice(e, 1), t(o);
}, Rr = function(t, n, e, r, o) {
  if (e < 0 || e >= o.length) return n;
  var i = o.slice();
  return i[e] = r, t(i);
}, Pn = function(t) {
  return t.slice().reverse();
}, le = function(t) {
  if (t.length <= 1e4)
    return Array.prototype.concat.apply([], t);
  for (var n = [], e = 0, r = t.length; e < r; e++)
    for (var o = t[e], i = 0, s = o.length; i < s; i++)
      n.push(o[i]);
  return n;
}, lt = function(t, n) {
  return n.filter(t);
}, Sh = function(t, n, e) {
  for (var r = e.length, o = n, i = new Array(r), s = 0; s < r; s++)
    o = t(o)(e[s]), i[s] = o;
  return i;
}, Ch = /* @__PURE__ */ (function() {
  function t(n, e, r, o, i, s) {
    var u, c, a, l, d, _, g;
    for (u = i + (s - i >> 1), u - i > 1 && t(n, e, o, r, i, u), s - u > 1 && t(n, e, o, r, u, s), c = i, a = u, l = i; c < u && a < s; )
      d = o[c], _ = o[a], g = e(n(d)(_)), g > 0 ? (r[l++] = _, ++a) : (r[l++] = d, ++c);
    for (; c < u; )
      r[l++] = o[c++];
    for (; a < s; )
      r[l++] = o[a++];
  }
  return function(n, e, r) {
    var o;
    return r.length < 2 ? r : (o = r.slice(0), t(n, e, o, r.slice(0), 0, r.length), o);
  };
})(), bt = function(t, n, e) {
  return e.slice(t, n);
}, Ln = function(t, n, e) {
  for (var r = n.length < e.length ? n.length : e.length, o = new Array(r), i = 0; i < r; i++)
    o[i] = t(n[i])(e[i]);
  return o;
}, ge = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (t(n[r])) return !0;
  return !1;
}, hg = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (!t(n[r])) return !1;
  return !0;
}, It = (t) => (n) => Ch(
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
), Ah = (t) => (n) => It((e) => (r) => t.compare(n(e))(n(r))), Ft = (t) => (n) => (() => {
  const e = hh(n);
  return () => {
    const r = [...t];
    return e(r)(), r;
  };
})()(), Ge = (t) => {
  if (t.length === 0)
    return t.length - 1 | 0, x;
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? J("Just", { init: bt(0, t.length - 1 | 0, t), last: t[n] }) : x;
}, Ph = (t) => (n) => (e) => t >= 0 && t < e.length ? Rr(Ut, x, t, n(e[t]), e) : x, jr = (t) => (n) => {
  const r = ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if (c >= 0 && c < n.length) {
        if (t(n[c])) {
          i = c + 1 | 0;
          continue;
        }
        s = !1, u = J("Just", c);
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
}, Io = (t) => (n) => {
  const e = It((r) => (o) => t(r._2)(o._2))(Bt(Mn)(n));
  return 0 < e.length ? H(gu)(Ah(ot)(du)((() => {
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
}, Gh = (t) => (n) => {
  const e = [], o = ph(
    (i) => i >= 0 && i < n.length ? J("Just", n[i]) : x,
    { value: 0 }
  );
  return $h(o)((i) => () => {
    const s = [];
    s.push(i), mh(t(i))(o)(s)(), e.push(s);
  })(), e;
}, Zt = (t) => (n) => {
  const e = uo(Ut, x, t, n);
  return e.tag === "Just" ? J("Just", n[e._1]) : x;
}, pg = (t) => (n) => lt(t, n), ae = (t) => (n) => (e) => {
  const r = uo(Ut, x, (o) => t.eq(o)(n), e);
  if (r.tag === "Nothing")
    return !1;
  if (r.tag === "Just")
    return !0;
  f();
}, mg = (t) => (n) => xt(n)(t), vt = (t) => mg((n) => {
  const e = t(n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [e._1];
  f();
}), Ih = isFinite, Me = Math.abs, Fh = Math.acos, to = function(t) {
  return function(n) {
    return Math.atan2(t, n);
  };
}, hu = Math.ceil, Vn = Math.cos, Fo = Math.exp, Ie = Math.floor, bs = Math.log, Rh = function(t) {
  return function(n) {
    return Math.min(t, n);
  };
}, Ro = function(t) {
  return function(n) {
    return Math.pow(t, n);
  };
}, lr = Math.round, ie = Math.sin, Hn = Math.sqrt, Bh = Math.tan, zh = function(t) {
  return function(n) {
    return function(e) {
      return (e | 0) === e ? t(e) : n;
    };
  };
}, M = function(t) {
  return t;
}, Dh = function(t) {
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
}, Qh = /* @__PURE__ */ Dh(Ut)(x), Hh = /* @__PURE__ */ Qh(10), $g = /* @__PURE__ */ zh(Ut)(x), Nn = (t) => {
  if (!Ih(t))
    return 0;
  if (t >= M(2147483647))
    return 2147483647;
  if (t <= M(-2147483648))
    return -2147483648;
  const n = $g(t);
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return n._1;
  f();
}, Wh = (t, n) => ({ tag: "NonEmpty", _1: t, _2: n }), tn = (t, n, e) => ({ tag: t, _1: n, _2: e }), nn = /* @__PURE__ */ tn("Nil"), on = {
  foldr: (t) => (n) => {
    const e = on.foldl((i) => (s) => t(s)(i))(n), o = ((i) => (s) => {
      let u = i, c = s, a = !0, l;
      for (; a; ) {
        const d = u, _ = c;
        if (_.tag === "Nil") {
          a = !1, l = d;
          continue;
        }
        if (_.tag === "Cons") {
          u = tn("Cons", _._1, d), c = _._2;
          continue;
        }
        f();
      }
      return l;
    })(nn);
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
    return (e) => on.foldl((r) => {
      const o = t.Semigroup0().append(r);
      return (i) => o(e(i));
    })(n);
  }
}, Oh = function(t) {
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
}, qh = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, Xh = { unfoldr1: /* @__PURE__ */ Oh(ng)(qh)(du)(gu) }, Yh = function(t) {
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
}, Uh = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, ue = {
  unfoldr: /* @__PURE__ */ Yh(ng)(Uh)(du)(gu),
  Unfoldable10: () => Xh
}, Kt = (t, n, e, r, o, i, s) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s }), se = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), us = (t, n, e) => ({ tag: "Split", _1: t, _2: n, _3: e }), jf = (t, n, e) => ({ tag: "SplitLast", _1: t, _2: n, _3: e }), R = /* @__PURE__ */ Kt("Leaf"), Le = /* @__PURE__ */ se("IterLeaf"), $n = (t, n, e, r) => {
  if (e.tag === "Leaf") {
    if (r.tag === "Leaf")
      return Kt("Node", 1, 1, t, n, e, r);
    if (r.tag === "Node")
      return Kt("Node", 1 + r._1 | 0, 1 + r._2 | 0, t, n, e, r);
    f();
  }
  if (e.tag === "Node") {
    if (r.tag === "Leaf")
      return Kt("Node", 1 + e._1 | 0, 1 + e._2 | 0, t, n, e, r);
    if (r.tag === "Node")
      return Kt("Node", e._1 > r._1 ? 1 + e._1 | 0 : 1 + r._1 | 0, (1 + e._2 | 0) + r._2 | 0, t, n, e, r);
  }
  f();
}, de = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r.tag === "Leaf" ? Kt("Node", 1, 1, t, n, R, R) : r.tag === "Node" && r._1 > 1 ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      f();
    })() ? $n(r._5._3, r._5._4, $n(t, n, e, r._5._5), $n(r._3, r._4, r._5._6, r._6)) : $n(r._3, r._4, $n(t, n, e, r._5), r._6) : $n(t, n, e, r);
  if (e.tag === "Node")
    return r.tag === "Node" ? r._1 > (e._1 + 1 | 0) ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      f();
    })() ? $n(r._5._3, r._5._4, $n(t, n, e, r._5._5), $n(r._3, r._4, r._5._6, r._6)) : $n(r._3, r._4, $n(t, n, e, r._5), r._6) : e._1 > (r._1 + 1 | 0) ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      f();
    })() ? $n(e._6._3, e._6._4, $n(e._3, e._4, e._5, e._6._5), $n(t, n, e._6._6, r)) : $n(e._3, e._4, e._5, $n(t, n, e._6, r)) : $n(t, n, e, r) : r.tag === "Leaf" && e._1 > 1 ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      f();
    })() ? $n(e._6._3, e._6._4, $n(e._3, e._4, e._5, e._6._5), $n(t, n, e._6._6, r)) : $n(e._3, e._4, e._5, $n(t, n, e._6, r)) : $n(t, n, e, r);
  f();
}, Bo = (t, n, e) => {
  if (e.tag === "Leaf")
    return us(x, R, R);
  if (e.tag === "Node") {
    const r = t(n)(e._3);
    if (r === "LT") {
      const o = Bo(t, n, e._5);
      return us(o._1, o._2, de(e._3, e._4, o._3, e._6));
    }
    if (r === "GT") {
      const o = Bo(t, n, e._6);
      return us(o._1, de(e._3, e._4, e._5, o._2), o._3);
    }
    if (r === "EQ")
      return us(J("Just", e._4), e._5, e._6);
  }
  f();
}, yg = (t, n, e, r) => {
  if (r.tag === "Leaf")
    return jf(t, n, e);
  if (r.tag === "Node") {
    const o = yg(r._3, r._4, r._5, r._6);
    return jf(o._1, o._2, de(t, n, e, o._3));
  }
  f();
}, zi = (t, n) => {
  if (t.tag === "Leaf")
    return n;
  if (t.tag === "Node") {
    const e = yg(t._3, t._4, t._5, t._6);
    return de(e._1, e._2, e._3, n);
  }
  f();
}, gr = (t, n, e) => {
  if (n.tag === "Leaf")
    return R;
  if (e.tag === "Leaf")
    return n;
  if (e.tag === "Node") {
    const r = Bo(t, e._3, n);
    return zi(gr(t, r._2, e._5), gr(t, r._3, e._6));
  }
  f();
}, ks = (t, n, e, r) => {
  if (e.tag === "Leaf" || r.tag === "Leaf")
    return R;
  if (r.tag === "Node") {
    const o = Bo(t, r._3, e), i = ks(t, n, o._2, r._5), s = ks(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return de(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return zi(i, s);
  }
  f();
}, Yn = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r;
  if (r.tag === "Leaf")
    return e;
  if (r.tag === "Node") {
    const o = Bo(t, r._3, e), i = Yn(t, n, o._2, r._5), s = Yn(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return de(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return de(r._3, r._4, i, s);
  }
  f();
}, Vh = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return R;
    if (r.tag === "Node") {
      const o = n(r._3)(r._4);
      if (o.tag === "Just")
        return de(r._3, o._1, e(r._5), e(r._6));
      if (o.tag === "Nothing")
        return zi(e(r._5), e(r._6));
    }
    f();
  };
  return e;
}, Kh = (t) => (n) => (r) => {
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
      o = ((a) => (l) => {
        let d = a, _ = l, g = !0, p;
        for (; g; ) {
          const m = d, h = _;
          if (h.tag === "Leaf") {
            g = !1, p = m;
            continue;
          }
          if (h.tag === "Node") {
            if (h._6.tag === "Leaf") {
              d = se("IterEmit", h._3, h._4, m), _ = h._5;
              continue;
            }
            d = se("IterEmit", h._3, h._4, se("IterNode", h._6, m)), _ = h._5;
            continue;
          }
          f();
        }
        return p;
      })(u._2)(u._1);
      continue;
    }
    f();
  }
  return s;
}, Ee = /* @__PURE__ */ Kh((t, n, e) => J("Just", k(k(t, n), e)))((t) => x), At = (t) => (n) => (e) => (r) => {
  const o = (i) => {
    if (i.tag === "Leaf")
      return Kt("Node", 1, 1, e, r, R, R);
    if (i.tag === "Node") {
      const s = t.compare(e)(i._3);
      if (s === "LT")
        return de(i._3, i._4, o(i._5), i._6);
      if (s === "GT")
        return de(i._3, i._4, i._5, o(i._6));
      if (s === "EQ")
        return Kt("Node", i._1, i._2, e, n(i._4)(r), i._5, i._6);
    }
    f();
  };
  return o;
}, K = (t) => (n) => (e) => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return Kt("Node", 1, 1, n, e, R, R);
    if (o.tag === "Node") {
      const i = t.compare(n)(o._3);
      if (i === "LT")
        return de(o._3, o._4, r(o._5), o._6);
      if (i === "GT")
        return de(o._3, o._4, o._5, r(o._6));
      if (i === "EQ")
        return Kt("Node", o._1, o._2, n, e, o._5, o._6);
    }
    f();
  };
  return r;
}, an = (t) => (n) => n.foldl((e) => (r) => K(t)(r._1)(r._2)(e))(R), $i = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return R;
    if (r.tag === "Node") {
      const o = t.compare(n)(r._3);
      if (o === "LT")
        return de(r._3, r._4, e(r._5), r._6);
      if (o === "GT")
        return de(r._3, r._4, r._5, e(r._6));
      if (o === "EQ")
        return zi(r._5, r._6);
    }
    f();
  };
  return e;
}, vg = (t) => {
  const n = t.compare;
  return (e) => (r) => (o) => {
    const i = Bo(n, r, o), s = e(i._1);
    if (s.tag === "Nothing")
      return zi(i._2, i._3);
    if (s.tag === "Just")
      return de(r, s._1, i._2, i._3);
    f();
  };
}, pn = function(t) {
  return function(n) {
    return t + n | 0;
  };
}, co = function(t) {
  return function(n) {
    return t + n;
  };
}, pr = function(t) {
  return function(n) {
    if (n === 0) return 0;
    var e = Math.abs(n);
    return (t % e + e) % e;
  };
}, _n = function(t) {
  return function(n) {
    return t.length === 0 ? n : n.length === 0 ? t : t.concat(n);
  };
}, Mh = { append: _n }, jh = { mempty: [], Semigroup0: () => Mh };
function $a(t) {
  return function(n) {
    return function(e) {
      return t.apply(e, [n]);
    };
  };
}
const Zh = $a(Number.prototype.toPrecision), tp = $a(Number.prototype.toFixed), np = $a(Number.prototype.toExponential), xg = (t, n) => ({ tag: t, _1: n }), Ng = (t) => (n) => (e) => {
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
}, wg = (t) => {
  if (t.tag === "Precision")
    return Zh(t._1);
  if (t.tag === "Fixed")
    return tp(t._1);
  if (t.tag === "Exponential")
    return np(t._1);
  f();
};
function ep() {
  return Date.now();
}
function Zf(t) {
  return new Error(t);
}
function pu(t) {
  return function() {
    return t.getContext("2d");
  };
}
function rp(t) {
  return function() {
    return t.width;
  };
}
function op(t) {
  return function() {
    return t.height;
  };
}
function ya(t) {
  return function(n) {
    return function() {
      t.width = n;
    };
  };
}
function va(t) {
  return function(n) {
    return function() {
      t.height = n;
    };
  };
}
function xa(t) {
  return function(n) {
    return function() {
      t.lineWidth = n;
    };
  };
}
function Na(t) {
  return function(n) {
    return function() {
      t.fillStyle = n;
    };
  };
}
function ip(t) {
  return function(n) {
    return function() {
      t.strokeStyle = n;
    };
  };
}
function ec(t) {
  return function(n) {
    return function() {
      t.lineCap = n;
    };
  };
}
function rc(t) {
  return function(n) {
    return function() {
      t.lineJoin = n;
    };
  };
}
function sp(t) {
  return function(n) {
    return function() {
      t.globalCompositeOperation = n;
    };
  };
}
function up(t) {
  return function(n) {
    return function() {
      t.globalAlpha = n;
    };
  };
}
function Tg(t) {
  return function() {
    t.beginPath();
  };
}
function wa(t) {
  return function() {
    t.stroke();
  };
}
function Ta(t) {
  return function() {
    t.fill();
  };
}
function cp(t) {
  return function() {
    t.clip();
  };
}
function ui(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.lineTo(n, e);
      };
    };
  };
}
function Jg(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.moveTo(n, e);
      };
    };
  };
}
function bg(t) {
  return function() {
    t.closePath();
  };
}
function ap(t) {
  return function(n) {
    return function() {
      t.fillRect(n.x, n.y, n.width, n.height);
    };
  };
}
function Ja(t) {
  return function(n) {
    return function() {
      t.clearRect(n.x, n.y, n.width, n.height);
    };
  };
}
function Ls(t) {
  return function(n) {
    return function() {
      t.scale(n.scaleX, n.scaleY);
    };
  };
}
function Pc(t) {
  return function(n) {
    return function() {
      t.translate(n.translateX, n.translateY);
    };
  };
}
function fp(t) {
  return function(n) {
    return function() {
      t.transform(n.a, n.b, n.c, n.d, n.e, n.f);
    };
  };
}
function lp(t) {
  return function(n) {
    return function() {
      t.textAlign = n;
    };
  };
}
function gp(t) {
  return function(n) {
    return function() {
      t.textBaseline = n;
    };
  };
}
function mu(t) {
  return function(n) {
    return function() {
      t.font = n;
    };
  };
}
function ba(t) {
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
function kg(t) {
  return function(n) {
    return function() {
      return t.measureText(n);
    };
  };
}
function kr(t) {
  return function() {
    t.save();
  };
}
function Lr(t) {
  return function() {
    t.restore();
  };
}
function ci(t) {
  return function(n) {
    return function() {
      t.quadraticCurveTo(n.cpx, n.cpy, n.x, n.y);
    };
  };
}
function dp(t) {
  return function(n) {
    return function() {
      t.bezierCurveTo(n.cp1x, n.cp1y, n.cp2x, n.cp2y, n.x, n.y);
    };
  };
}
const Lg = (t) => t, ka = (t) => t, La = (t) => t, Ea = (t) => t, $u = (t) => t, _p = /* @__PURE__ */ $u("BaselineTop"), Sa = /* @__PURE__ */ $u("BaselineMiddle"), hp = /* @__PURE__ */ $u("BaselineAlphabetic"), pp = /* @__PURE__ */ $u("BaselineBottom"), mp = /* @__PURE__ */ Ea("AlignLeft"), $p = /* @__PURE__ */ Ea("AlignRight"), Ca = /* @__PURE__ */ Ea("AlignCenter"), Aa = /* @__PURE__ */ La("BevelJoin"), yu = /* @__PURE__ */ La("RoundJoin"), Pa = /* @__PURE__ */ La("MiterJoin"), Ga = /* @__PURE__ */ ka("Round"), Ia = /* @__PURE__ */ ka("Square"), Fa = /* @__PURE__ */ ka("Butt"), yp = /* @__PURE__ */ Lg("SourceOver"), vp = /* @__PURE__ */ Lg("Difference"), Ra = (t) => (n) => gp(t)((() => {
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
})()), Ba = (t) => (n) => lp(t)((() => {
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
})()), vu = (t) => (n) => {
  if (n === "BevelJoin")
    return rc(t)("bevel");
  if (n === "RoundJoin")
    return rc(t)("round");
  if (n === "MiterJoin")
    return rc(t)("miter");
  f();
}, za = (t) => (n) => {
  if (n === "Round")
    return ec(t)("round");
  if (n === "Square")
    return ec(t)("square");
  if (n === "Butt")
    return ec(t)("butt");
  f();
}, t0 = (t) => (n) => sp(t)((() => {
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
})()), xp = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldrWithIndex((o) => {
    const i = r(o);
    return (s) => {
      const u = i(s);
      return (c) => n.apply(n.Functor0().map((a) => da)(u))(c);
    };
  })(t.pure());
}, Np = (t) => {
  const n = xp(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, Da = {
  foldrWithIndex: (t) => (n) => {
    const e = Po((o) => {
      const i = o._1, s = o._2;
      return (u) => t(i)(s)(u);
    })(n), r = Bt(Mn);
    return (o) => e(r(o));
  },
  foldlWithIndex: (t) => (n) => {
    const e = N((o) => (i) => t(i._1)(o)(i._2))(n), r = Bt(Mn);
    return (o) => e(r(o));
  },
  foldMapWithIndex: (t) => {
    const n = t.mempty;
    return (e) => Da.foldrWithIndex((r) => (o) => (i) => t.Semigroup0().append(e(r)(o))(i))(n);
  },
  Foldable0: () => Xt
}, _e = {
  foldr: (t) => (n) => {
    const e = on.foldr(t)(n);
    return (r) => e((() => {
      const o = (i, s) => {
        if (i.tag === "Leaf")
          return s;
        if (i.tag === "Node")
          return o(i._5, tn("Cons", i._3, o(i._6, s)));
        f();
      };
      return o(r, nn);
    })());
  }
}, wp = (t) => {
  const n = {
    append: (() => {
      const e = t.compare;
      return (r) => (o) => Yn(e, Xn, r, o);
    })()
  };
  return { mempty: R, Semigroup0: () => n };
}, _i = function(t) {
  return function(n) {
    if (t >= 0 && t < n.length) return n.charAt(t);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
}, Hr = function(t) {
  return t.join("");
}, Wr = function(t) {
  return t.split("");
}, Di = function(t) {
  return t;
}, Fe = function(t) {
  return t.length;
}, n0 = function(t) {
  return function(n) {
    return n.substr(0, t);
  };
}, yi = function(t) {
  return function(n) {
    return n.substring(t);
  };
}, Eg = function(t) {
  return function(n) {
    return { before: n.substring(0, t), after: n.substring(t) };
  };
}, Tp = (t) => (n) => {
  const e = Eg(Fe(n) - Fe(t) | 0)(n);
  return e.after === t ? J("Just", e.before) : x;
}, _o = (t) => (n) => {
  const e = Eg(Fe(t))(n);
  return e.before === t ? J("Just", e.after) : x;
}, Sg = (t) => ({
  bind: (n) => (e) => t.Bind1().bind(n)((r) => {
    if (r.tag === "Left")
      return t.Applicative0().pure(St("Left", r._1));
    if (r.tag === "Right")
      return e(r._1);
    f();
  }),
  Apply0: () => Cg(t)
}), Cg = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = {
    map: (r) => n.map((o) => {
      if (o.tag === "Left")
        return St("Left", o._1);
      if (o.tag === "Right")
        return St("Right", r(o._1));
      f();
    })
  };
  return {
    apply: (() => {
      const r = Sg(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => Qa(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, Qa = (t) => ({ pure: (n) => t.Applicative0().pure(St("Right", n)), Apply0: () => Cg(t) }), Jp = (t) => {
  const n = { Applicative0: () => Qa(t), Bind1: () => Sg(t) };
  return { throwError: (e) => t.Applicative0().pure(St("Left", e)), Monad0: () => n };
};
function e0(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
const bp = (t, n, e) => ({ tag: t, _1: n, _2: e }), kp = (t) => (n) => (e) => e0(e) === n ? Qa(t).pure(e) : Jp(t).throwError(Wh(bp("TypeMismatch", n, e0(e)), nn)), Lp = function(t) {
  var n = null;
  return function() {
    return t === void 0 || (n = t(), t = void 0), n;
  };
}, Ep = function(t) {
  return t();
}, Yo = function(n) {
  return function(e) {
    return function() {
      return n(e);
    };
  };
}, Qi = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, Uo = function(n) {
  return function(e) {
    return function(r) {
      return function(o) {
        return function() {
          return n(e, r, o);
        };
      };
    };
  };
}, Ha = function(n) {
  return function(e) {
    return function(r) {
      return function(o) {
        return function(i) {
          return function() {
            return n(e, r, o, i);
          };
        };
      };
    };
  };
}, Sp = function(n) {
  return function(e) {
    return function(r) {
      return function(o) {
        return function(i) {
          return function(s) {
            return function() {
              return n(e, r, o, i, s);
            };
          };
        };
      };
    };
  };
}, Cp = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, Ap = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, ao = (t) => BigInt(t), Pp = (t) => Number(t), xs = (t) => (n) => t + n, Ns = (t) => (n) => t * n, Gc = (t) => (n) => t - n, Ag = 0n, Es = 1n, Pg = (t) => (n) => t ^ n, vi = (t) => (n) => t & n, Wa = (t) => (n) => t << n, Ic = (t) => (n) => t >> n, Gp = (t) => (n) => t == n, Ip = (t) => (n) => t === n ? 0 : t > n ? 1 : -1, Fp = { eq: Gp }, r0 = {
  compare: (t) => (n) => {
    const e = Ip(t)(n);
    return e === 1 ? An : e === 0 ? Un : Cn;
  },
  Eq0: () => Fp
}, Rp = /* @__PURE__ */ Cp(Ut)(x), Bp = /* @__PURE__ */ Ap(Ut)(x), o0 = function(t) {
  throw new Error(t);
}, Gg = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = rt.compare(n._1)(e._1);
      return r === "LT" ? Cn : r === "GT" ? An : rt.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), zp = (t) => (n) => Me(t._1 - n._1) + Me(t._2 - n._2), ho = (t) => t, xu = (t) => t, Tn = /* @__PURE__ */ xu("North"), Jn = /* @__PURE__ */ xu("South"), cr = /* @__PURE__ */ xu("East"), ar = /* @__PURE__ */ xu("West"), dr = /* @__PURE__ */ ho("Rectangle"), i0 = /* @__PURE__ */ ho("Cylinder"), Dp = /* @__PURE__ */ ho("Parallelogram"), Qp = /* @__PURE__ */ ho("Diamond"), Hp = /* @__PURE__ */ ho("Ellipse"), s0 = /* @__PURE__ */ ho("Document"), Wp = /* @__PURE__ */ ho("Cloud"), Ig = /* @__PURE__ */ N(co)(0), Op = (t) => (n) => (e) => {
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
}, Er = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ss = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, u0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, qp = (t) => {
  const n = { top: 0, bottom: 0, left: 0, right: 0 }, e = t.shape === "Cloud" ? { ...n, top: t.h * 0.38 } : t.shape === "Cylinder" ? { ...n, bottom: 5 } : t.shape === "Document" ? { ...n, bottom: t.h * 0.05 } : n;
  return [{ x: t.x - e.left, y: t.y - e.top }, { x: t.x + t.w + e.right, y: t.y + t.h + e.bottom }];
}, xi = (t) => (n) => {
  const e = Ln(
    (s) => (u) => ({
      a: s,
      b: u,
      len: (() => {
        const c = u.y - s.y, a = u.x - s.x;
        return Hn(a * a + c * c);
      })()
    }),
    t,
    bt(1, t.length, t)
  ), r = Ig(H((s) => s.len)(e)), o = Op(0)(r)(n * r), i = (s) => (u) => (c) => {
    let a = s, l = u, d = c, _ = !0, g;
    for (; _; ) {
      const p = a, m = l, h = d, $ = zt((y) => x, (y) => (v) => J("Just", { head: y, tail: v }), p);
      if ($.tag === "Nothing") {
        const y = t.length - 1 | 0;
        if (y >= 0 && y < t.length) {
          _ = !1, g = t[y];
          continue;
        }
        _ = !1, g = h;
        continue;
      }
      if ($.tag === "Just") {
        if (m <= $._1.head.len) {
          const y = $._1.head.len <= 0 ? 0 : m / $._1.head.len;
          _ = !1, g = { x: $._1.head.a.x + ($._1.head.b.x - $._1.head.a.x) * y, y: $._1.head.a.y + ($._1.head.b.y - $._1.head.a.y) * y };
          continue;
        }
        a = $._1.tail, l = m - $._1.head.len, d = h;
        continue;
      }
      f();
    }
    return g;
  };
  return 0 < t.length ? J("Just", i(e)(o)(t[0])) : x;
}, Xp = (t) => (n) => {
  const e = Er(1e-6)(t.scale);
  return { x: (n.x - t.tx) / e, y: (n.y - t.ty) / e, w: n.w / e, h: n.h / e };
}, Nu = (t) => Ig(Ln(
  (n) => (e) => {
    const r = e.y - n.y, o = e.x - n.x;
    return Hn(o * o + r * r);
  },
  t,
  bt(1, t.length, t)
)), Yp = (t) => (n) => {
  const e = Er(4)(0.15 * Ss(n.w)(n.h)), r = Er(1)(t.w), o = Er(1)(t.h), i = Er(1)(n.w - 2 * e), s = Er(1)(n.h - 2 * e), u = Ss(i / r)(s / o);
  return { scale: u, tx: n.x + e + (i - r * u) / 2 - t.x * u, ty: n.y + e + (s - o * u) / 2 - t.y * u };
}, Oa = { scale: 1, tx: 0, ty: 0 }, En = (t) => {
  const n = zt(
    (e) => x,
    (e) => (r) => J("Just", { head: e, tail: r }),
    [
      ...(() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, tn("Cons", r._4, e(r._6, o)));
          f();
        };
        return xt(Dt(on.foldr, e(t.nodes, nn)))(qp);
      })(),
      ...le((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, tn("Cons", r._4, e(r._6, o)));
          f();
        };
        return Dt(on.foldr, e(t.edges, nn));
      })())
    ]
  );
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = N((r) => (o) => ({ minX: Ss(r.minX)(o.x), minY: Ss(r.minY)(o.y), maxX: Er(r.maxX)(o.x), maxY: Er(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, Up = (t) => (n) => ((r) => (o) => (i) => {
  let s = r, u = o, c = i, a = !0, l;
  for (; a; ) {
    const d = s, _ = u, g = c, p = zt((m) => x, (m) => (h) => J("Just", { head: m, tail: h }), _);
    if (p.tag === "Nothing") {
      a = !1, l = g;
      continue;
    }
    if (p.tag === "Just") {
      const m = u0(p._1.head)(d.interiors);
      if (m.tag === "Nothing") {
        a = !1, l = g;
        continue;
      }
      if (m.tag === "Just") {
        s = m._1, u = p._1.tail, c = (() => {
          const h = Yp(En(m._1.layout))((() => {
            const $ = u0(p._1.head)(d.layout.nodes);
            if ($.tag === "Nothing")
              return { x: 0, y: 0, w: 1, h: 1, label: "", shape: dr };
            if ($.tag === "Just")
              return $._1;
            f();
          })());
          return { scale: g.scale * h.scale, tx: g.scale * h.tx + g.tx, ty: g.scale * h.ty + g.ty };
        })();
        continue;
      }
    }
    f();
  }
  return l;
})(t)(n)(Oa), Vp = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Kp = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ws = (t) => (n) => (e) => {
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
}, Mp = (t) => (n) => (e) => (r) => {
  const o = En(n);
  return e <= 0 || r <= 0 || o.w <= 0 || o.h <= 0 ? 1 : t ? Vp(o.w / e)(o.h / r) : Kp(o.w / e)(o.h / r);
}, Fg = (t) => (n) => (e) => {
  const r = t.widthPx / t.heightPx, o = e.w / e.h;
  if (t.widthPx <= 0 || t.heightPx <= 0) {
    const s = 1 / ws(0.05)(1)(n);
    return { w: e.w * s, h: e.h * s };
  }
  if (r > o) {
    const s = 1 / ws(0.05)(1)(n);
    return { w: e.h * r * s, h: e.h * s };
  }
  const i = 1 / ws(0.05)(1)(n);
  return { w: e.w * i, h: e.w / r * i };
}, c0 = (t) => (n) => (e) => (r) => (o) => {
  const i = t + o / 2, s = t + n - o / 2, u = t + n / 2, c = e + r / 2;
  return o >= n ? u : ws(i)(s)(c);
}, Rg = (t) => (n) => (e) => (r) => {
  const o = En(t);
  return { x: c0(o.x)(o.w)(n.x)(n.w)(e), y: c0(o.y)(o.h)(n.y)(n.h)(r) };
}, Bg = (t) => (n) => (e) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: Mp(t)(n)(e.w)(e.h) }), jp = (t) => (n) => (e) => (r) => {
  const o = { x: r.x - t.padding, y: r.y - t.padding, w: r.w + t.padding * 2, h: r.h + t.padding * 2 }, i = Fg(n)(0.65)(o), s = Rg(e)(o)(i.w)(i.h), u = { x: s.x - i.w / 2, y: s.y - i.h / 2, w: i.w, h: i.h };
  return { focus: r, paddedFocus: o, viewport: u, camera: Bg(n.widthPx > 0 && n.heightPx > 0)(e)(u) };
}, Zp = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = En(r), u = { x: s.x * o.scale + o.tx, y: s.y * o.scale + o.ty, w: s.w * o.scale, h: s.h * o.scale }, c = t.padding * o.scale, a = { x: u.x - c, y: u.y - c, w: u.w + c * 2, h: u.h + c * 2 }, l = Fg(n)(0.7)(a), d = Rg(e)(a)(l.w)(l.h), _ = { x: d.x - l.w / 2, y: d.y - l.h / 2, w: l.w, h: l.h };
  return { footprint: u, viewport: _, camera: Bg(n.widthPx > 0 && n.heightPx > 0)(e)(_) };
}, zg = (t) => t, tm = (t, n) => ({ tag: t, _1: n }), qa = (t) => t, Hi = (t, n) => ({ tag: t, _1: n }), Xa = (t, n) => ({ tag: t, _1: n }), Wi = /* @__PURE__ */ qa("Animated"), nm = /* @__PURE__ */ qa("StaticStill"), em = /* @__PURE__ */ qa("TitleCard"), rm = /* @__PURE__ */ Xa("First"), a0 = /* @__PURE__ */ zg("Forward"), f0 = /* @__PURE__ */ zg("Backward"), om = /* @__PURE__ */ Hi("ExitNode"), Dg = /* @__PURE__ */ an(I)(Xt), im = (t) => Po((n) => (e) => ({
  nodes: Yn(I.compare, Xn, n.nodes, e.nodes),
  edges: Yn(I.compare, Xn, n.edges, e.edges)
}))({ nodes: R, edges: R })(t.keyframes), sm = (t) => (n) => ({
  entering: {
    nodes: gr(I.compare, n.nodes, t.nodes),
    edges: gr(I.compare, n.edges, t.edges)
  },
  leaving: {
    nodes: gr(I.compare, t.nodes, n.nodes),
    edges: gr(I.compare, t.edges, n.edges)
  },
  surviving: {
    nodes: ks(I.compare, Xn, t.nodes, n.nodes),
    edges: ks(I.compare, Xn, t.edges, n.edges)
  }
}), Cs = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, zo = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, As = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Fc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, um = /* @__PURE__ */ N((t) => (n) => K(I)(n)()(t))(R), cm = /* @__PURE__ */ N((t) => (n) => K(I)(n)()(t))(R), am = /* @__PURE__ */ (() => {
  const t = ue.unfoldr(Ee);
  return (n) => t(se("IterNode", n, Le));
})(), Qg = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, l0 = /* @__PURE__ */ an(I)(Xt), Hg = (t) => {
  const n = zt((e) => x, (e) => (r) => J("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = N((r) => (o) => ({ minX: Cs(r.minX)(o.x), minY: Cs(r.minY)(o.y), maxX: zo(r.maxX)(o.x), maxY: zo(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, fm = (t) => (n) => (e) => um(xt(Dt(_e.foldr, e))((r) => {
  const o = As(r)(t);
  if (o.tag === "Just")
    return lt((i) => !Fc(i)(n), [o._1.source, o._1.target]);
  if (o.tag === "Nothing")
    return [];
  f();
})), lm = (t) => t.kind.tag === "SendToken" ? J("Just", k(t.kind._1.edge, { source: t.kind._1.from, target: t.kind._1.to })) : x, gm = (t) => t.tag === "DataFlow" ? vt(lm)(t._1.events) : [], dm = (t) => (n) => cm(vt((e) => Fc(e._2.source)(n) || Fc(e._2.target)(n) ? J("Just", e._1) : x)(am(t))), no = (t) => {
  const n = zt((e) => x, (e) => (r) => J("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = N((r) => (o) => ({ minX: Cs(r.minX)(o.x), minY: Cs(r.minY)(o.y), maxX: zo(r.maxX)(o.x + o.w), maxY: zo(r.maxY)(o.y + o.h) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x + n._1.head.w,
      maxY: n._1.head.y + n._1.head.h
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, Ya = (t) => (n) => (e) => {
  if (e.tag === "Leaf")
    return En(t);
  const r = dm(n)(e), o = [
    ...vt((i) => {
      const s = Qg(i)(t.nodes);
      return s.tag === "Just" ? J("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : x;
    })(Dt(
      _e.foldr,
      Yn(I.compare, Xn, e, fm(n)(e)(r))
    )),
    ...vt((i) => {
      const s = As(i)(t.edges);
      return s.tag === "Just" ? J("Just", Hg(s._1)) : x;
    })(Dt(_e.foldr, r))
  ];
  return o.length === 0 ? En(t) : no(o);
}, Wg = (t) => (n) => (e) => {
  const r = [
    ...vt((o) => o)([
      (() => {
        const o = As(e)(t.edges);
        return o.tag === "Just" ? J("Just", Hg(o._1)) : x;
      })()
    ]),
    ...(() => {
      const o = As(e)(n);
      if (o.tag === "Just")
        return vt((i) => {
          const s = Qg(i)(t.nodes);
          return s.tag === "Just" ? J("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : x;
        })([o._1.source, o._1.target]);
      if (o.tag === "Nothing")
        return [];
      f();
    })()
  ];
  return r.length === 0 ? Ya(t)(n)(R) : no(r);
}, Oi = (t) => (n) => {
  const e = En(t), r = e.w / zo(1e-4)(n.zoom), o = e.h / zo(1e-4)(n.zoom);
  return { x: n.center.x - r / 2, y: n.center.y - o / 2, w: r, h: o };
}, _m = (t) => Yn(
  I.compare,
  Xn,
  l0(H((n) => k(n.id, { source: n.from.node, target: n.to.node }))(t.graph.edges)),
  l0(xt(t.scenes)(gm))
), wu = (t) => t, hm = (t) => t, Ua = /* @__PURE__ */ wu("Linear"), pm = /* @__PURE__ */ wu("EaseInOutQuad"), Br = /* @__PURE__ */ wu("EaseInOutCubic"), mm = /* @__PURE__ */ wu("SpringBouncy"), Ni = (t) => (n) => (e) => {
  const r = Hn(1 - n * n), o = t * r;
  return 1 - Fo(-n * t * e) * (Vn(o * e) + n / r * ie(o * e));
}, $m = (t) => {
  const n = rt.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = rt.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, vr = (t) => (n) => (() => {
  if (t === "Linear")
    return hm;
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
    return (e) => e >= 1 ? 1 : 1 - Ro(2)(-10 * e);
  if (t === "Spring")
    return (e) => 1 - (1 + 6 * e) * Fo(-6 * e);
  if (t === "SpringBouncy")
    return Ni(6)(0.7);
  f();
})()($m(n)), Tu = (t) => t, Og = (t) => t, qg = (t) => t, je = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Do = (t) => (n) => (e) => {
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
}, Xg = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ym = (t) => (n) => {
  const e = ot.compare(t._1)(n._1);
  return e === "LT" ? Cn : e === "GT" ? An : rt.compare(t._2)(n._2);
}, vm = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, xm = /* @__PURE__ */ qg("Hold"), Nm = /* @__PURE__ */ qg("Gap"), Ps = /* @__PURE__ */ Og("LinearLerp"), g0 = /* @__PURE__ */ Og("StagedLogLerp"), Rc = /* @__PURE__ */ Tu("Overview"), wm = /* @__PURE__ */ Tu("DiveHome"), d0 = /* @__PURE__ */ Tu("DiveTransition"), Tm = /* @__PURE__ */ Tu("ActionFocus"), Jm = (t) => (n) => {
  const e = En(t), r = e.h / je(1e-6)(n.zoom), o = e.w / je(1e-6)(n.zoom);
  return { x: n.center.x - o / 2, y: n.center.y - r / 2, w: o, h: r };
}, bm = (t) => (n) => (e) => {
  const r = e.center.y - n.center.y, o = e.center.x - n.center.x, i = Hn(o * o + r * r), s = e.zoom - n.zoom, u = s < 0 ? -s : s;
  return Do(t.minTransition)(t.maxTransition)(je(t.panSpeed <= 0 ? t.minTransition : i / t.panSpeed)(t.zoomSpeed <= 0 ? t.minTransition : u / t.zoomSpeed));
}, km = (t) => ({ startT: t.startT, endT: t.endT, fromCam: t.fromCam, toCam: t.toCam, easing: t.easing, interp: t.interp, intent: t.intent }), Lm = /* @__PURE__ */ N((t) => (n) => {
  const e = t.length - 1 | 0;
  return e >= 0 && e < t.length && t[e] === n ? t : Ft(t)(n);
})([]), Em = (t) => (n) => {
  const e = t.x - n.x;
  return (e < 0 ? -e < 1e-3 : e < 1e-3) && (() => {
    const r = t.y - n.y;
    return (r < 0 ? -r < 1e-3 : r < 1e-3) && (() => {
      const o = t.w - n.w;
      return (o < 0 ? -o < 1e-3 : o < 1e-3) && (() => {
        const i = t.h - n.h;
        return i < 0 ? -i < 1e-3 : i < 1e-3;
      })();
    })();
  })();
}, Sm = (t) => (n) => t.tag === "Just" ? n.tag === "Just" && Em(t._1)(n._1) : t.tag === "Nothing" && n.tag === "Nothing", _0 = (t) => (n) => (e) => (r) => ({
  center: { x: r.center.x * e.scale + e.tx, y: r.center.y * e.scale + e.ty },
  zoom: r.zoom * En(t).w / je(1e-6)(e.scale * En(n).w)
}), Cm = (t) => (n) => ({ center: { x: n.center.x * t.scale + t.tx, y: n.center.y * t.scale + t.ty }, zoom: n.zoom / je(1e-6)(t.scale) }), Yg = (t) => (n) => (e) => (r) => ({
  center: { x: t.center.x + (n.center.x - t.center.x) * e, y: t.center.y + (n.center.y - t.center.y) * e },
  zoom: Fo((() => {
    const o = bs(je(1e-6)(t.zoom));
    return o + (bs(je(1e-6)(n.zoom)) - o) * r;
  })())
}), Ug = (t) => (n) => (e) => (r) => {
  const o = Fo(-t * n);
  return {
    center: { x: r.center.x + (e.center.x - r.center.x) * o, y: r.center.y + (e.center.y - r.center.y) * o },
    zoom: Fo((() => {
      const i = bs(je(1e-6)(r.zoom));
      return i + (bs(je(1e-6)(e.zoom)) - i) * o;
    })())
  };
}, Am = (t) => (n) => (e) => n.zoom >= t.zoom ? vr(Br)(Do(0)(1)((e - 0.28) / 0.72)) : vr(Br)(Do(0)(1)(e / 0.28)), Pm = (t) => (n) => (e) => n.zoom >= t.zoom ? vr(Br)(Do(0)(1)(e / 0.28)) : vr(Br)(Do(0)(1)((e - 0.28) / 0.72)), Gm = (t) => (n) => (e) => Yg(t)(n)(Pm(t)(n)(e))(Am(t)(n)(e)), Im = (t) => (n) => (e) => {
  const r = e.endT <= e.startT ? 1 : (n - e.startT) / (e.endT - e.startT), o = vr(e.easing)(Do(0)(1)(r));
  if (e.interp === "LinearLerp")
    return {
      center: { x: e.fromCam.center.x + (e.toCam.center.x - e.fromCam.center.x) * o, y: e.fromCam.center.y + (e.toCam.center.y - e.fromCam.center.y) * o },
      zoom: e.fromCam.zoom + (e.toCam.zoom - e.fromCam.zoom) * o
    };
  if (e.interp === "LogLerp")
    return Yg(e.fromCam)(e.toCam)(o)(o);
  if (e.interp === "StagedLogLerp")
    return Gm(e.fromCam)(e.toCam)(r);
  f();
}, Fm = { widthPx: 0, heightPx: 0 }, Ju = {
  padding: 24,
  easing: Ua,
  minimumReadableLabelPx: 24,
  minimumVisibleLabelPx: 5,
  labelBasePx: 11,
  panSpeed: 1500,
  zoomSpeed: 4,
  minTransition: 0.15,
  maxTransition: 0.6,
  cameraDecay: 6
}, ai = (t) => (n) => (e) => (r) => (o) => {
  const i = Jm(e)(r), s = o.x - t.padding, u = o.y - t.padding;
  return s >= i.x && u >= i.y && s + o.w + t.padding * 2 <= i.x + i.w && u + o.h + t.padding * 2 <= i.y + i.h;
}, Rm = (t) => (n) => (e) => (r) => (o) => Da.foldlWithIndex((i) => (s) => (u) => {
  const c = (() => {
    if (u.kind === "Hold") {
      const a = (() => {
        if (u.focus.tag === "Just") {
          if (u.intent === "ActionFocus" && ai(t)(n)(e)({ center: s.prev.center, zoom: u.toCam.zoom })(u.focus._1))
            return { ...u.toCam, center: s.prev.center };
          if (u.intent === "ActionFocus")
            return u.toCam;
          if (ai(t)(n)(e)(s.prev)(u.focus._1))
            return s.prev;
          if (ai(t)(n)(e)({ center: s.prev.center, zoom: u.toCam.zoom })(u.focus._1))
            return { ...u.toCam, center: s.prev.center };
        }
        return u.toCam;
      })();
      return { startT: u.startT, endT: u.endT, fromCam: a, toCam: a, easing: u.easing, interp: Ps, focus: u.focus, intent: u.intent };
    }
    if (u.kind === "Gap")
      return {
        startT: u.startT,
        endT: u.endT,
        fromCam: s.prev,
        toCam: (() => {
          const a = i + 1 | 0, l = uo(Ut, x, (d) => d.kind === "Hold", a < 1 ? o : bt(a, o.length, o));
          if (l.tag === "Just") {
            const d = (i + 1 | 0) + l._1 | 0;
            return d >= 0 && d < o.length ? (() => {
              if (o[d].focus.tag === "Just")
                return ai(t)(n)(e)(s.prev)(o[d].focus._1);
              if (o[d].focus.tag === "Nothing")
                return !1;
              f();
            })() ? s.prev : o[d].fromCam : s.prev;
          }
          if (l.tag === "Nothing")
            return s.prev;
          f();
        })(),
        easing: u.easing,
        interp: Ps,
        focus: x,
        intent: u.intent
      };
    f();
  })();
  return { acc: Ft(s.acc)(c), prev: c.toCam };
})({ acc: [], prev: r })(o).acc, Bm = (t) => (n) => (e) => (r) => (o) => {
  const i = (u, c) => Xg(bm(t)(u.toCam)(c.toCam))(u.endT - u.startT), s = N((u) => (c) => {
    if (u.pending.tag === "Nothing")
      return { acc: u.acc, pending: J("Just", c) };
    if (u.pending.tag === "Just")
      return !(c.fromCam.zoom === c.toCam.zoom && c.fromCam.center.x === c.toCam.center.x && c.fromCam.center.y === c.toCam.center.y) || (() => {
        if (c.focus.tag === "Just")
          return ai(t)(n)(e)(u.pending._1.toCam)(c.focus._1);
        if (c.focus.tag === "Nothing")
          return !1;
        f();
      })() || (() => {
        const a = u.pending._1.toCam.center.x - c.toCam.center.x;
        return (a < 0 ? -a < 8 : a < 8) && (() => {
          const l = u.pending._1.toCam.center.y - c.toCam.center.y;
          return (l < 0 ? -l < 8 : l < 8) && (() => {
            const d = u.pending._1.toCam.zoom - c.toCam.zoom;
            return d < 0 ? -d < 0.08 : d < 0.08;
          })();
        })();
      })() || i(u.pending._1, c) <= 0 ? { acc: Ft(u.acc)(u.pending._1), pending: J("Just", c) } : {
        acc: Ft(Ft(u.acc)({ ...u.pending._1, endT: c.startT - i(u.pending._1, c) }))({
          startT: c.startT - i(u.pending._1, c),
          endT: c.startT,
          fromCam: u.pending._1.toCam,
          toCam: c.toCam,
          easing: c.easing,
          interp: Ps,
          focus: c.focus,
          intent: c.intent
        }),
        pending: J("Just", c)
      };
    f();
  })({ acc: [], pending: x })(o);
  if (s.pending.tag === "Nothing")
    return s.acc;
  if (s.pending.tag === "Just")
    return Ft(s.acc)(s.pending._1);
  f();
}, zm = (t) => (n) => (e) => {
  const r = n.w + e * 2, o = n.h + e * 2, i = En(t);
  return r <= 0 || o <= 0 || i.w <= 0 || i.h <= 0 ? 1 : Xg(i.w / r)(i.h / o);
}, Dm = (t) => (n) => {
  if (t.tag === "Just") {
    if (n.tag === "Just")
      return J("Just", no([t._1, n._1]));
    if (n.tag === "Nothing")
      return J("Just", t._1);
    f();
  }
  if (t.tag === "Nothing") {
    if (n.tag === "Just")
      return J("Just", n._1);
    if (n.tag === "Nothing")
      return x;
  }
  f();
}, Qm = /* @__PURE__ */ N((t) => (n) => {
  const e = t.length - 1 | 0, r = e >= 0 && e < t.length ? J("Just", t[e]) : x;
  return r.tag === "Just" && r._1.fromCam.zoom === r._1.toCam.zoom && r._1.fromCam.center.x === r._1.toCam.center.x && r._1.fromCam.center.y === r._1.toCam.center.y && n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y && (!(r._1.intent === "ActionFocus" || n.intent === "ActionFocus") || (r._1.intent === "Overview" ? n.intent === "Overview" : r._1.intent === "DiveHome" ? n.intent === "DiveHome" : r._1.intent === "DiveTransition" ? n.intent === "DiveTransition" : r._1.intent === "ActionFocus" && n.intent === "ActionFocus") && Sm(r._1.focus)(n.focus)) && (() => {
    const o = r._1.toCam.center.x - n.toCam.center.x;
    return (o < 0 ? -o < 8 : o < 8) && (() => {
      const i = r._1.toCam.center.y - n.toCam.center.y;
      return (i < 0 ? -i < 8 : i < 8) && (() => {
        const s = r._1.toCam.zoom - n.toCam.zoom;
        return s < 0 ? -s < 0.08 : s < 0.08;
      })();
    })();
  })() ? Ft((() => {
    const o = t.length - 1 | 0;
    return o < 1 ? [] : bt(0, o, t);
  })())({ ...r._1, endT: n.endT, focus: Dm(r._1.focus)(n.focus) }) : Ft(t)(n);
})([]), Hm = (t) => {
  const n = It((e) => (r) => ym(k(
    (() => {
      if (r.intent === "DiveTransition")
        return 3;
      if (r.intent === "ActionFocus")
        return 2;
      if (r.intent === "DiveHome")
        return 1;
      if (r.intent === "Overview")
        return 0;
      f();
    })(),
    r.startT
  ))(k(
    (() => {
      if (e.intent === "DiveTransition")
        return 3;
      if (e.intent === "ActionFocus")
        return 2;
      if (e.intent === "DiveHome")
        return 1;
      if (e.intent === "Overview")
        return 0;
      f();
    })(),
    e.startT
  )))(t);
  return 0 < n.length ? J("Just", n[0]) : x;
}, Gs = (t) => (n) => (e) => (r) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: je(r)(zm(n)(e)(t.padding)) }), Wm = (t) => (n) => (e) => (r) => (o) => {
  const i = Gs(t)(e)(En(e))(0), s = lt(
    (c) => c >= 0 && c <= r,
    Lm(It(rt.compare)([0, r, ...xt(o)((c) => [c.startT, c.endT])]))
  ), u = (c, a) => ge((l) => l.priority >= 1, lt((l) => l.startT <= a && a < l.endT, o)) ? jp(t)(n)(e)(no(c)).camera : Gs(t)(e)(no(c))(0);
  return H(km)(Bm(t)(n)(e)(i)(Qm(Rm(t)(n)(e)(i)(vt((c) => {
    const a = (c._1 + c._2) / 2;
    if (c._2 <= c._1)
      return x;
    const l = H((d) => d.bbox)(lt(
      (d) => d.priority === N(vm)(0)(H((_) => _.priority)(lt(
        (_) => _.startT <= a && a < _.endT,
        o
      ))),
      lt((d) => d.startT <= a && a < d.endT, o)
    ));
    return l.length === 0 ? J(
      "Just",
      { kind: Nm, startT: c._1, endT: c._2, fromCam: i, toCam: i, easing: t.easing, focus: x, intent: Rc }
    ) : J(
      "Just",
      {
        kind: xm,
        startT: c._1,
        endT: c._2,
        fromCam: u(l, a),
        toCam: u(l, a),
        easing: t.easing,
        focus: J("Just", no(l)),
        intent: ge((d) => d.priority >= 1, lt((d) => d.startT <= a && a < d.endT, o)) ? Tm : Rc
      }
    );
  })(Ln(Mn, s, bt(1, s.length, s)))))));
}, Va = (t) => (n) => (e) => (r) => {
  const o = Hm(lt((i) => r >= i.startT && r < i.endT, e));
  if (o.tag === "Just")
    return { camera: Im()(r)(o._1), intent: o._1.intent };
  if (o.tag === "Nothing") {
    const i = e.length - 1 | 0;
    return i >= 0 && i < e.length && r >= e[i].endT ? { camera: e[i].toCam, intent: e[i].intent } : {
      camera: (() => {
        const s = Gs(t)(n)(En(n))(0);
        return 0 < e.length ? e[0].fromCam : s;
      })(),
      intent: 0 < e.length ? e[0].intent : Rc
    };
  }
  f();
};
function Ve(t) {
  return t.charCodeAt(0);
}
function Ka(t) {
  return String.fromCharCode(t);
}
const Om = (t) => t >= 0 && t <= 65535 ? J("Just", Ka(t)) : x, Sr = function(t) {
  return function(n) {
    return function(e) {
      return e.replace(new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), n);
    };
  };
}, bu = function(t) {
  return function(n) {
    return n.split(t);
  };
}, Vg = function(t) {
  return t.trim();
}, ku = function(t) {
  return function(n) {
    return n.join(t);
  };
};
var qm = typeof Array.from == "function", Xm = typeof Symbol < "u" && Symbol != null && typeof Symbol.iterator < "u" && typeof String.prototype[Symbol.iterator] == "function", Ym = typeof String.prototype.fromCodePoint == "function", Um = typeof String.prototype.codePointAt == "function";
const Vm = function(t) {
  return Um ? function(n) {
    return n.codePointAt(0);
  } : t;
}, Km = function(t) {
  return Ym ? String.fromCodePoint : t;
}, Mm = function(t) {
  return function(n) {
    return Xm ? function(e) {
      for (var r = "", o = e[Symbol.iterator](), i = 0; i < n; ++i) {
        var s = o.next();
        if (s.done) return r;
        r += s.value;
      }
      return r;
    } : t(n);
  };
}, jm = function(t) {
  return function(n) {
    return qm ? function(e) {
      return Array.from(e, n);
    } : t;
  };
}, Lu = (t) => {
  const n = Fe(t);
  if (n === 0)
    return x;
  if (n === 1)
    return J("Just", { head: Ve(_i(0)(t)), tail: "" });
  const e = Ve(_i(1)(t)), r = Ve(_i(0)(t));
  return 55296 <= r && r <= 56319 && 56320 <= e && e <= 57343 ? J("Just", { head: (((r - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0, tail: yi(2)(t) }) : J("Just", { head: r, tail: yi(1)(t) });
}, Zm = (t) => {
  const n = Lu(t);
  return n.tag === "Just" ? J("Just", k(n._1.head, n._1.tail)) : x;
}, t$ = (t) => ue.unfoldr(Zm)(t), n$ = (t) => {
  const n = Ve(_i(0)(t));
  if (55296 <= n && n <= 56319 && Fe(t) > 1) {
    const e = Ve(_i(1)(t));
    if (56320 <= e && e <= 57343)
      return (((n - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0;
  }
  return n;
}, Kg = /* @__PURE__ */ Vm(n$), Eu = /* @__PURE__ */ jm(t$)(Kg), oc = (t) => Di(t >= 0 && t <= 65535 ? Ka(t) : t < 0 ? "\0" : "\uffff"), e$ = (t) => t <= 65535 ? oc(t) : oc(Je(t - 65536 | 0, 1024) + 55296 | 0) + oc(pr(t - 65536 | 0)(1024) + 56320 | 0), r$ = /* @__PURE__ */ Km(e$), Mg = (t) => (n) => {
  if (t < 1)
    return "";
  const e = Lu(n);
  return e.tag === "Just" ? r$(e._1.head) + Mg(t - 1 | 0)(e._1.tail) : n;
}, Sn = /* @__PURE__ */ Mm(Mg), o$ = (t) => (n) => n === "" ? x : J("Just", Kg(n)), i$ = (t) => t, jg = (t) => (n) => {
  const e = n.vw / n.vh, r = n.vh * t, o = { ...n, vx: n.vx - (r - n.vw) / 2, vw: r }, i = n.vw / t, s = { ...n, vy: n.vy - (i - n.vh) / 2, vh: i };
  return t <= 0 || n.vw <= 0 || n.vh <= 0 ? n : t > e ? o : t < e ? s : n;
}, Ma = (t) => (n) => t.width <= 0 || t.height <= 0 ? n : jg(t.width / t.height)(n), Is = (t, n, e) => ({ tag: t, _1: n, _2: e }), s$ = () => ({ tag: "ExtendFromSource" }), Fs = (t, n) => ({ tag: t, _1: n }), ja = (t) => t, Rs = (t, n) => ({ tag: t, _1: n }), ic = /* @__PURE__ */ Rs("NotYet"), h0 = /* @__PURE__ */ Rs("Consumed"), u$ = /* @__PURE__ */ ja("FromSource"), p0 = /* @__PURE__ */ ja("FromTarget"), c$ = /* @__PURE__ */ ja("FromBoth"), sc = /* @__PURE__ */ Fs("Hidden"), a$ = /* @__PURE__ */ Fs("Visible"), Zg = /* @__PURE__ */ s$(), uc = /* @__PURE__ */ Is("Retracted"), f$ = /* @__PURE__ */ Is("Extended"), t1 = (t) => t, Bc = (t, n) => ({ tag: t, _1: n }), Tr = (t, n, e) => ({ tag: t, _1: n, _2: e }), n1 = (t) => t, Cr = (t, n) => ({ tag: t, _1: n }), wo = (t, n, e, r, o, i, s, u, c) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s, _7: u, _8: c }), Su = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Re = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, e1 = /* @__PURE__ */ an(I)(Xt), zc = /* @__PURE__ */ _u(Xo), To = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, wi = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Za = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, m0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, r1 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, $o = /* @__PURE__ */ (() => {
  const t = ue.unfoldr((n) => {
    if (n.tag === "Nil")
      return x;
    if (n.tag === "Cons")
      return J("Just", k(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, tn("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, nn);
  })());
})(), l$ = /* @__PURE__ */ N((t) => (n) => K(I)(n)()(t))(R), Dc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, cs = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, g$ = (t) => t, d$ = /* @__PURE__ */ Cr("NoKeyframes"), _$ = (t) => Cr("DuplicateEventId", t), h$ = (t) => Cr("UnknownEvent", t), o1 = /* @__PURE__ */ n1("PlopIn"), p$ = /* @__PURE__ */ n1("PlopOut"), m$ = /* @__PURE__ */ t1("DiveIn"), $$ = /* @__PURE__ */ t1("DiveOut"), y$ = (t) => (n) => (e) => vt((r) => {
  if (r.target.tag === "NodeWindow" || r.target.tag === "EdgeWindow")
    return x;
  if (r.target.tag === "TokenWindow")
    return J("Just", { startT: r.startT, endT: r.endT, bbox: Wg(n)(e)(r.target._2), priority: 1 });
  if (r.target.tag === "FillWindow")
    return J(
      "Just",
      {
        startT: r.startT,
        endT: r.endT,
        bbox: Ya(n)(e)(Kt(
          "Node",
          1,
          1,
          r.target._2,
          void 0,
          R,
          R
        )),
        priority: 1
      }
    );
  f();
}), v$ = (t) => (n) => (e) => (r) => {
  const o = Su(r.edge)(n.edges), i = (() => {
    if (o.tag === "Nothing")
      return 0;
    if (o.tag === "Just")
      return Nu(o._1);
    f();
  })(), s = Re(t.minTokenDuration)(Re(M(N((u) => (c) => u + Eu(c).length | 0)(0)(r.labels)) * t.tokenReadSecPerChar)(t.tokenSpeed <= 0 ? 0 : i / t.tokenSpeed)) + e.pre + e.post;
  return { duration: s, holdPre: s <= 0 ? 0 : e.pre / s, holdPost: s <= 0 ? 0 : e.post / s };
}, x$ = (t) => (n) => e1(vt((e) => {
  if (e.kind.tag === "SendToken")
    return J(
      "Just",
      k(
        e.id,
        {
          pre: (() => {
            const r = e.when;
            return (() => {
              const o = e.kind._1.from;
              return ge(
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
              return ge(
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
})(n)), N$ = (t) => {
  if (t.event.kind.tag === "SendToken")
    return J(
      "Just",
      {
        startT: t.startT,
        endT: t.endT,
        target: wo(
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
    return J("Just", { startT: t.startT, endT: t.endT, target: wo("FillWindow", t.event.id, t.event.kind._1.node, t.event.kind._1.labels) });
  f();
}, w$ = (t) => (n) => (e) => (r) => {
  const o = Zt((i) => zc(i.path)(n) && (Me(i.endT - e) < 1e-4 || Me(i.startT - r) < 1e-4))(t.segments);
  if (o.tag === "Just")
    return J("Just", o._1);
  if (o.tag === "Nothing")
    return Zt((i) => zc(i.path)(n))(t.segments);
  f();
}, T$ = (t) => (n) => (e) => vt((r) => {
  const o = vt((i) => Za(i)(t.nodes))(Dt(
    _e.foldr,
    (() => {
      if (r.scene.tag === "Structural")
        return Yn(
          I.compare,
          Xn,
          (() => {
            const i = To(r.scene._1.from)(e);
            if (i.tag === "Nothing")
              return R;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })(),
          (() => {
            const i = To(r.scene._1.to)(e);
            if (i.tag === "Nothing")
              return R;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })()
        );
      if (r.scene.tag === "DataFlow") {
        const i = To(r.scene._1.keyframe)(e);
        if (i.tag === "Nothing")
          return R;
        if (i.tag === "Just")
          return i._1.nodes;
        f();
      }
      if (r.scene.tag === "Hold") {
        const i = To(r.scene._1)(e);
        if (i.tag === "Nothing")
          return R;
        if (i.tag === "Just")
          return i._1.nodes;
        f();
      }
      if (r.scene.tag === "EnterNode" || r.scene.tag === "ExitNode")
        return R;
      f();
    })()
  ));
  return o.length === 0 ? x : J(
    "Just",
    {
      startT: r.startT,
      endT: r.endT,
      bbox: (() => {
        const i = N((s) => (u) => ({ minX: wi(s.minX)(u.x), minY: wi(s.minY)(u.y), maxX: Re(s.maxX)(u.x + u.w), maxY: Re(s.maxY)(u.y + u.h) }))(0 < o.length ? { minX: o[0].x, minY: o[0].y, maxX: o[0].x + o[0].w, maxY: o[0].y + o[0].h } : { minX: 0, minY: 0, maxX: 0, maxY: 0 })(bt(1, o.length, o));
        return { x: i.minX, y: i.minY, w: i.maxX - i.minX, h: i.maxY - i.minY };
      })(),
      priority: 0
    }
  );
}), J$ = (t) => (n) => (e) => (r) => (o) => [
  ...T$(o.layout)(e)(n)(lt((i) => i.startT >= o.startT && i.endT <= o.endT, r.spans)),
  ...y$()(o.layout)(e)(o.windows)
], b$ = (t) => (n) => (e) => (r) => (o) => (i) => Wm(t)(n)(i.layout)(o.endT)(J$()(e)(r)(o)(i)), $0 = /* @__PURE__ */ (() => {
  const t = N((n) => (e) => {
    const r = n.previous.tag === "Just" && Me(n.previous._1.endT - e.startT) < 1e-4 && !(e.fromCam.zoom === e.toCam.zoom && e.fromCam.center.x === e.toCam.center.x && e.fromCam.center.y === e.toCam.center.y) ? { ...e, fromCam: n.previous._1.toCam } : e;
    return { previous: J("Just", r), spans: Ft(n.spans)(r) };
  })({ previous: x, spans: [] });
  return (n) => t(n).spans;
})(), k$ = (t) => (n) => (e) => {
  const r = Su(e)(t);
  if (r.tag === "Nothing")
    return p0;
  if (r.tag === "Just") {
    const o = m0(r._1.target)(n);
    return m0(r._1.source)(n) ? o ? c$ : u$ : p0;
  }
  f();
}, L$ = (t) => (n) => {
  const e = En(n), r = Ma({ width: t.widthPx, height: t.heightPx })({
    vx: e.x,
    vy: e.y,
    vw: e.w,
    vh: e.h
  });
  return { w: r.vw, h: r.vh };
}, E$ = (t) => (n) => (e) => (r) => {
  const o = Re(e.center.x - r.x)(r.x + r.w - e.center.x), i = Re(e.center.y - r.y)(r.y + r.h - e.center.y), s = L$(t)(n);
  return wi(o <= 0 ? e.zoom : s.w / (o * 2))(i <= 0 ? e.zoom : s.h / (i * 2));
}, S$ = { pre: 0, post: 0 }, C$ = (t) => (n) => (e) => (r) => (o) => {
  const i = r1(o.event.id)(e), s = (() => {
    if (i.tag === "Nothing")
      return S$;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = (() => {
    if (o.event.when.tag === "First")
      return 0;
    if (o.event.when.tag === "At")
      return o.event.when._1;
    if (o.event.when.tag === "After") {
      const a = o.event.when._1, l = Zt((d) => d.event.id === a)(r);
      if (l.tag === "Nothing")
        return 0;
      if (l.tag === "Just")
        return l._1.endT;
      f();
    }
    if (o.event.when.tag === "With") {
      const a = o.event.when._1, l = Zt((d) => d.event.id === a)(r);
      if (l.tag === "Nothing")
        return 0;
      if (l.tag === "Just")
        return l._1.startT;
    }
    f();
  })(), c = (() => {
    if (o.event.kind.tag === "SendToken")
      return v$(t)(n)(s)(o.event.kind._1);
    if (o.event.kind.tag === "FillNodeWithoutTransition")
      return { duration: t.plop, holdPre: 0, holdPost: 0 };
    f();
  })();
  return Ft(r)({ startT: u, endT: u + c.duration, event: o.event, holdPre: c.holdPre, holdPost: c.holdPost });
}, i1 = (t) => (n) => (e) => N(C$(t)(n)(x$(t)(e)))([])(Bt((r) => (o) => ({ event: o }))(e)), tf = (t) => (n) => (e) => (r) => (o) => {
  const i = { width: n.widthPx, height: n.heightPx }, s = Ma(i)((() => {
    const u = Oi(e)(o);
    return { vx: u.x, vy: u.y, vw: u.w, vh: u.h };
  })());
  return t.labelBasePx * r.placement.scale * (i.width <= 0 || s.vw <= 0 ? 0 : i.width / s.vw);
}, A$ = (t) => (n) => (e) => (r) => (o) => {
  const i = tf(t)(n)(e)(r)(o);
  return i <= t.minimumReadableLabelPx ? o : { ...o, zoom: o.zoom * t.minimumReadableLabelPx / i };
}, P$ = (t) => (n) => {
  const e = Za(n)(t.interiors);
  if (e.tag === "Nothing")
    return t;
  if (e.tag === "Just")
    return e._1;
  f();
}, G$ = (t) => (n) => (e) => (r) => ({
  ...r,
  fromCam: _0(t)(n)(e)(r.fromCam),
  toCam: _0(t)(n)(e)(r.toCam)
}), I$ = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (o.tag === "Nothing")
    return i.zoom;
  if (o.tag === "Just")
    return Re(0)(E$(n)(e)(i)((() => {
      const s = t.padding * r.placement.scale;
      return { x: o._1.x - s, y: o._1.y - s, w: o._1.w + s * 2, h: o._1.h + s * 2 };
    })()));
  f();
}, F$ = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = tf(t)(n)(e)(r)(i);
  return s <= 0 ? i : { ...i, zoom: wi(i.zoom * t.minimumReadableLabelPx / s)(I$(t)(n)(e)(r)(o)(i)) };
}, R$ = (t) => {
  if (t.when.tag === "First")
    return [];
  if (t.when.tag === "At")
    return [];
  if (t.when.tag === "After")
    return [t.when._1];
  if (t.when.tag === "With")
    return [t.when._1];
  f();
}, y0 = { id: "", nodes: R, edges: R, kind: Wi }, B$ = (t) => (n) => sm((() => {
  const e = To(n.from)(t);
  if (e.tag === "Nothing")
    return y0;
  if (e.tag === "Just")
    return e._1;
  f();
})())((() => {
  const e = To(n.to)(t);
  if (e.tag === "Nothing")
    return y0;
  if (e.tag === "Just")
    return e._1;
  f();
})()), z$ = (t) => (n) => {
  const e = Za(n)(t.interiors);
  if (e.tag === "Nothing")
    return { layout: t.layout, interiors: R };
  if (e.tag === "Just")
    return e._1;
  f();
}, cc = (t) => (n) => (e) => (r) => {
  const o = Su(r)(e.edges);
  if (o.tag === "Just")
    return t <= 0 ? n : Re(n)(Nu(o._1) / t);
  if (o.tag === "Nothing")
    return n;
  f();
}, s1 = (t) => (n) => (e) => (r) => (o) => {
  const i = t.plop, s = B$(e)(o), u = H((g) => ({
    startT: 0,
    endT: 0 + cc(t.edgeSpeed)(t.minEdgeDuration)(n)(g),
    target: wo("EdgeWindow", g, Bc("Extend", Zg))
  }))($o(s.entering.edges)), c = H((g) => ({ startT: 0, endT: i, target: wo("NodeWindow", g, o1) }))($o(s.entering.nodes)), a = N(Re)(0)(H((g) => cc(t.edgeSpeed)(t.minEdgeDuration)(n)(g))($o(s.leaving.edges))), l = (g) => ge(
    (p) => {
      const m = Su(p)(r);
      if (m.tag === "Just")
        return m._1.source === g || m._1.target === g;
      if (m.tag === "Nothing")
        return !1;
      f();
    },
    $o(s.leaving.edges)
  ) ? a : 0, d = H((g) => ({ startT: l(g), endT: l(g) + t.plop, target: wo("NodeWindow", g, p$) }))($o(s.leaving.nodes)), _ = H((g) => ({
    startT: 0,
    endT: cc(t.edgeSpeed)(t.minEdgeDuration)(n)(g),
    target: wo("EdgeWindow", g, Bc("Retract", k$(r)(s.leaving.nodes)(g)))
  }))($o(s.leaving.edges));
  return {
    duration: (() => {
      const g = It(rt.compare)([
        ...H((m) => m.endT)(_),
        ...H((m) => m.endT)(d),
        ...H((m) => m.endT)(c),
        ...H((m) => m.endT)(u)
      ]), p = g.length - 1 | 0;
      return p >= 0 && p < g.length ? g[p] + t.gap : t.gap;
    })(),
    windows: [..._, ...d, ...c, ...u]
  };
}, D$ = (t) => (n) => (e) => (r) => (o) => (i) => H((() => {
  const s = o.startT;
  return (u) => ({ ...u, startT: u.startT + s, endT: u.endT + s });
})())(s1(t)(n)(e)(r)(i).windows), Q$ = (t) => vt((n) => Dt(Po, n).length > 1 ? J(
  "Just",
  (() => {
    const e = zt(
      (r) => x,
      (r) => (o) => J("Just", { head: r, tail: o }),
      Dt(Po, n)
    );
    if (e.tag === "Just")
      return e._1.head;
    if (e.tag === "Nothing")
      return "";
    f();
  })()
) : x)(Gh(Xo)(It(I.compare)(t))), H$ = (t) => {
  const n = H((r) => r.id)(t), e = l$(n);
  return [
    ...H(_$)(Q$(n)),
    ...H(h$)(lt((r) => !Dc(r)(e), xt(t)(R$)))
  ];
}, W$ = (t) => {
  const n = e1(H((r) => k(
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
    if (Dc(i)(o))
      return [Cr("ScheduleCycle", [...Dt(_e.foldr, o), i])];
    if (Dc(i)(r))
      return [];
    const s = r1(i)(n);
    if (s.tag === "Nothing")
      return [];
    if (s.tag === "Just")
      return xt(s._1)(e(K(I)(i)()(r))(K(I)(i)()(o)));
    f();
  };
  return xt(t)((r) => e(R)(R)(r.id));
}, nf = {
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
  nodeEasing: mm,
  edgeEasing: pm,
  tokenEasing: Ua,
  diveDur: 1.2,
  retreatDur: 1.2
}, O$ = (t) => (n) => (e) => (r) => H((() => {
  const o = e.startT;
  return (i) => ({ ...i, startT: i.startT + o, endT: i.endT + o });
})())(vt(N$)(i1(t)(n)(r.events))), q$ = (t) => (n) => (e) => (r) => (o) => {
  if (o.scene.tag === "Structural")
    return D$(t)(n)(e)(r)(o)(o.scene._1);
  if (o.scene.tag === "Hold")
    return [];
  if (o.scene.tag === "DataFlow")
    return O$(t)(n)(o)(o.scene._1);
  if (o.scene.tag === "EnterNode")
    return [];
  if (o.scene.tag === "ExitNode")
    return [];
  f();
}, X$ = (t) => (n) => (e) => {
  const r = i1(t)(n)(e.events);
  return r.length === 0 ? t.gap : N(Re)(0)(H((o) => o.endT)(r)) + t.gap;
}, Y$ = (t) => (n) => (e) => (r) => (o) => {
  if (o.tag === "Structural")
    return s1(t)(n)(e)(r)(o._1).duration;
  if (o.tag === "Hold")
    return t.stillHold;
  if (o.tag === "DataFlow")
    return X$(t)(n)(o._1);
  if (o.tag === "EnterNode" || o.tag === "ExitNode")
    return 0;
  f();
}, u1 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Up(n)(r), u = e.layout, c = Dg(H((m) => k(m.id, m))(o.keyframes)), a = 0 < o.keyframes.length ? J("Just", o.keyframes[0]) : x, l = (() => {
    if (a.tag === "Just")
      return a._1.id;
    if (a.tag === "Nothing")
      return "";
    f();
  })(), d = _m(o), _ = (m) => ({
    segments: m.runSpans.length === 0 ? m.segments : Ft(m.segments)({
      startT: m.runStart,
      endT: m.t,
      path: r,
      layout: u,
      placement: s,
      windows: m.runWindows,
      spans: m.runSpans,
      keyframes: c,
      initialKeyframe: l,
      edgeEndpoints: d
    }),
    spans: m.spans,
    windows: m.windows,
    dives: m.dives
  }), g = N((m) => (h) => {
    if (h.tag === "EnterNode") {
      const w = _(m), T = m.t + t.diveDur, b = Ft(r)(h._1), L = u1(t)(n)(z$(e)(h._1))(b)(P$(o)(h._1))(T), C = L.endT + t.retreatDur;
      return {
        ...m,
        t: C,
        runStart: C,
        runSpans: [],
        runWindows: [],
        segments: [...w.segments, ...L.segments],
        spans: [...w.spans, ...L.spans],
        windows: [...w.windows, ...L.windows],
        dives: [
          ...w.dives,
          { startT: m.t, endT: T, node: h._1, parentPath: r, childPath: b, direction: m$ },
          ...L.dives,
          { startT: L.endT, endT: C, node: h._1, parentPath: r, childPath: b, direction: $$ }
        ]
      };
    }
    if (h.tag === "ExitNode")
      return m;
    const $ = m.t + Y$(t)(u)(c)(d)(h), y = { startT: m.t, endT: $, scene: h }, v = q$(t)(u)(c)(d)(y);
    return {
      ...m,
      t: $,
      runSpans: Ft(m.runSpans)(y),
      runWindows: [...m.runWindows, ...v],
      spans: Ft(m.spans)(y),
      windows: [...m.windows, ...v]
    };
  })({ t: i, runStart: i, runSpans: [], runWindows: [], segments: [], spans: [], windows: [], dives: [] })(o.scenes), p = _(g);
  return {
    endT: g.t,
    spans: p.spans,
    windows: It((m) => (h) => rt.compare(m.startT)(h.startT))(p.windows),
    segments: p.segments,
    dives: p.dives
  };
}, U$ = (t) => (n) => (e) => e.endT <= t || e.startT >= n ? x : J("Just", { ...e, startT: Re(t)(e.startT), endT: wi(n)(e.endT) }), Qc = (t) => (n) => (e) => (r) => (o) => (i) => vt(U$(i.startT)(i.endT))(H(G$(e)(i.layout)(i.placement))(b$(t)(n)(r)(i.edgeEndpoints)(o)(i))), ef = (t) => (n) => (e) => (r) => Zp(t)(n)(e)(r.layout)(r.placement)((() => {
  if (r.layout.nodes.tag === "Leaf")
    return 0;
  if (r.layout.nodes.tag === "Node")
    return r.layout.nodes._2;
  f();
})()).camera, V$ = (t) => (n) => (e) => (r) => r.placement.scale === 1 && r.placement.tx === 0 && r.placement.ty === 0 ? Cm(r.placement)(Gs(t)(r.layout)(En(r.layout))(0)) : ef(t)(n)(e)(r), c1 = (t) => (n) => (e) => (r) => (o) => {
  const i = Oi(e)(o);
  return (() => {
    const s = En(r.layout), u = s.x * r.placement.scale + r.placement.tx, c = s.y * r.placement.scale + r.placement.ty;
    return u >= i.x && c >= i.y && u + s.w * r.placement.scale <= i.x + i.w && c + s.h * r.placement.scale <= i.y + i.h;
  })() && tf(t)(n)(e)(r)(o) >= t.minimumReadableLabelPx;
}, ac = (t) => (n) => (e) => (r) => (o) => (i) => c1(t)(n)(e)(r)(i) ? i : F$(t)(n)(e)(r)(o)(i), K$ = (t) => (n) => {
  if (n.tag === "Structural")
    return vt((e) => e)([
      cs(n._1.from)(t) ? x : J("Just", Cr("UnknownKeyframe", n._1.from)),
      cs(n._1.to)(t) ? x : J("Just", Cr("UnknownKeyframe", n._1.to))
    ]);
  if (n.tag === "Hold")
    return vt((e) => e)([cs(n._1)(t) ? x : J("Just", Cr("UnknownKeyframe", n._1))]);
  if (n.tag === "DataFlow")
    return [
      ...vt((e) => e)([cs(n._1.keyframe)(t) ? x : J("Just", Cr("UnknownKeyframe", n._1.keyframe))]),
      ...H$(n._1.events),
      ...W$(n._1.events)
    ];
  if (n.tag === "EnterNode")
    return [];
  if (n.tag === "ExitNode")
    return [];
  f();
}, M$ = (t) => (n) => {
  const e = xt(n)(K$(t));
  return e.length === 0 ? St("Right", void 0) : St("Left", e);
}, fc = (t) => (n) => (e) => (r) => (o) => (i) => c1(t)(n)(e)(r)(o) ? o : A$(t)(n)(e)(r)(i), j$ = (t) => (n) => {
  const e = zt((r) => x, (r) => (o) => J("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ ...e._1.head, fromCam: t }, ...e._1.tail];
  f();
}, Z$ = (t) => (n) => {
  const e = n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y ? (n.startT + n.endT) / 2 : n.endT + 1e-4, r = vt((o) => o.target.tag === "TokenWindow" ? J("Just", Wg(t.layout)(t.edgeEndpoints)(o.target._2)) : o.target.tag === "FillWindow" ? J(
    "Just",
    Ya(t.layout)(t.edgeEndpoints)(Kt(
      "Node",
      1,
      1,
      o.target._2,
      void 0,
      R,
      R
    ))
  ) : x)(lt((o) => o.startT <= e && e < o.endT, t.windows));
  return r.length === 0 ? x : J(
    "Just",
    (() => {
      const o = no(r);
      return { x: o.x * t.placement.scale + t.placement.tx, y: o.y * t.placement.scale + t.placement.ty, w: o.w * t.placement.scale, h: o.h * t.placement.scale };
    })()
  );
}, a1 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = o(i.fromCam), u = o(i.toCam), c = Z$(r)(i);
  return s.zoom === u.zoom && s.center.x === u.center.x && s.center.y === u.center.y ? {
    ...i,
    fromCam: ac(t)(n)(e)(r)(c)(s),
    toCam: ac(t)(n)(e)(r)(c)(u)
  } : { ...i, fromCam: s, toCam: ac(t)(n)(e)(r)(c)(u) };
}, f1 = (t) => (n) => (e) => (r) => (o) => (i) => i.intent === "ActionFocus" ? a1(t)(n)(e)(r)(fc(t)(n)(e)(r)(o))(i) : {
  ...i,
  fromCam: fc(t)(n)(e)(r)(o)(i.fromCam),
  toCam: fc(t)(n)(e)(r)(o)(i.toCam)
}, l1 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Zt((u) => u.intent === "ActionFocus" && Me(u.startT - r.startT) < 1e-4)(i);
  if (s.tag === "Just") {
    const u = f1(t)(n)(e)(r)(o)(s._1).toCam;
    return u.zoom < o.zoom ? { ...o, zoom: u.zoom } : o;
  }
  if (s.tag === "Nothing")
    return o;
  f();
}, ty = (t) => (n) => (e) => (r) => (o) => l1(t)(n)(e)(r)(ef(t)(n)(e)(r))(o), ny = (t) => (n) => (e) => (r) => (o) => vt((i) => {
  const s = w$(o)(i.parentPath)(i.startT)(i.endT);
  if (s.tag === "Just") {
    const u = i.childPath, c = Zt((a) => zc(a.path)(u))(o.segments);
    if (c.tag === "Just") {
      const a = V$(t)(n)(e)(s._1), l = ty(t)(n)(e)(c._1)(Qc(t)(n)(e)(r)(o)(c._1));
      if (i.direction === "DiveIn")
        return J(
          "Just",
          {
            startT: i.startT,
            endT: i.endT,
            fromCam: a,
            toCam: l,
            easing: Br,
            interp: g0,
            intent: d0
          }
        );
      if (i.direction === "DiveOut")
        return J(
          "Just",
          {
            startT: i.startT,
            endT: i.endT,
            fromCam: l,
            toCam: a,
            easing: Br,
            interp: g0,
            intent: d0
          }
        );
      f();
    }
    if (c.tag === "Nothing")
      return x;
    f();
  }
  if (s.tag === "Nothing")
    return x;
  f();
})(o.dives), ey = (t) => (n) => (e) => (r) => (o) => o.intent === "ActionFocus" ? a1(t)(n)(e)(r)(g$)(o) : o, ry = (t) => (n) => (e) => (r) => (o) => It((i) => (s) => rt.compare(i.startT)(s.startT))(xt(o.segments)((i) => {
  if (i.placement.scale === 1 && i.placement.tx === 0 && i.placement.ty === 0)
    return $0(H(ey(t)(n)(e)(i))(Qc(t)(n)(e)(r)(o)(i)));
  const s = Qc(t)(n)(e)(r)(o)(i), u = ef(t)(n)(e)(i), c = l1(t)(n)(e)(i)(u)(s);
  return s.length === 0 ? [
    {
      startT: i.startT,
      endT: i.endT,
      fromCam: c,
      toCam: c,
      easing: Ua,
      interp: Ps,
      intent: wm
    }
  ] : $0(j$(c)(H(f1(t)(n)(e)(i)(u))(s)));
})), g1 = (t) => (n) => (e) => (r) => (o) => [
  ...ny(t)(n)(e)(r)(o),
  ...ry(t)(n)(e)(r)(o)
], rf = (t) => (n) => (e) => (r) => {
  if (0 < e.keyframes.length) {
    const o = e.keyframes[0], i = Dg(H((u) => k(u.id, u))(e.keyframes)), s = M$(i)(e.scenes);
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
      const u = u1(n)(r)(r)([])(e)(0);
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
          cameraSpans: g1(t)(Fm)(r.layout)(i)(u),
          cameraConfig: t,
          levelTree: r,
          segments: u.segments,
          dives: u.dives,
          seed: e.seed
        }
      );
    });
  }
  return St("Left", [d$]);
}, d1 = (t) => (n) => ({
  ...n,
  cameraSpans: g1(n.cameraConfig)(t)(n.layout)(n.keyframes)({
    endT: n.totalDuration,
    spans: n.spans,
    windows: n.windows,
    segments: n.segments,
    dives: n.dives
  })
}), of = (t) => t, _1 = /* @__PURE__ */ an(I)(Xt), Ti = { eq: /* @__PURE__ */ _u(Xo) }, sf = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, _r = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, v0 = Xt.foldMap(wp(I)), oy = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, iy = /* @__PURE__ */ (() => {
  const t = ue.unfoldr(Ee);
  return (n) => t(se("IterNode", n, Le));
})(), Jo = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, sy = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, uy = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, cy = /* @__PURE__ */ an(I)(Xt), ay = /* @__PURE__ */ an(I)(Xt), fy = (t) => (n) => (e) => {
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
}, h1 = /* @__PURE__ */ of("Backdrop"), ly = /* @__PURE__ */ of("FlyThrough"), Bs = /* @__PURE__ */ of("Active"), gy = (t) => (n) => (e) => ({ ...e, state: { ...e.state, edgeFadeAlpha: _1(H((r) => k(r, n))(t)) } }), x0 = (t) => (n) => (e) => {
  const r = (t + n) / 2, o = e - r, i = o < 0 ? -1 : 1, s = (n - t) / 2, u = s * 0.15, c = s - u, a = o < 0 ? -o : o;
  return n <= t ? (t + n) / 2 : a <= c ? e : r + i * (s - u * Fo(-(a - c) / u));
}, zs = (t) => (n) => (e) => {
  const r = Zt((o) => Ti.eq(o.path)(n) && e >= o.startT && e < o.endT)(t.segments);
  if (r.tag === "Just")
    return J("Just", r._1);
  if (r.tag === "Nothing")
    return Zt((o) => Ti.eq(o.path)(n))(t.segments);
  f();
}, dy = (t) => ({
  startT: 0,
  endT: t.totalDuration,
  path: [],
  layout: t.layout,
  placement: Oa,
  windows: t.windows,
  spans: t.spans,
  keyframes: t.keyframes,
  initialKeyframe: t.initialKeyframe,
  edgeEndpoints: R
}), _y = (t) => H((n) => n < 1 ? [] : bt(0, n, t))(Ht(0, t.length - 1 | 0)), lc = (t) => (n) => {
  const e = sf(n)(t.keyframes);
  if (e.tag === "Nothing")
    return R;
  if (e.tag === "Just")
    return e._1.nodes;
  f();
}, gc = (t) => (n) => {
  const e = sf(n)(t.keyframes);
  if (e.tag === "Nothing")
    return R;
  if (e.tag === "Just")
    return e._1.edges;
  f();
}, Cu = (t) => (n) => {
  if (n < t.startT)
    return Tr("AtKeyframe", t.initialKeyframe);
  const e = Zt((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return Tr("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return Tr("AtKeyframe", e._1.scene._1.keyframe);
    if (e._1.scene.tag === "Hold")
      return Tr("AtKeyframe", e._1.scene._1);
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode")
      return Tr("AtKeyframe", t.initialKeyframe);
    f();
  }
  if (e.tag === "Nothing") {
    const r = t.spans.length - 1 | 0;
    return r >= 0 && r < t.spans.length ? Tr(
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
    ) : Tr("AtKeyframe", t.initialKeyframe);
  }
  f();
}, hy = /* @__PURE__ */ N((t) => (n) => {
  const e = Ge(t);
  return e.tag === "Just" && n.startT <= e._1.last.endT + 1e-6 ? Ft(e._1.init)({ ...e._1.last, endT: _r(e._1.last.endT)(n.endT), windows: Ft(e._1.last.windows)(n) }) : Ft(t)({ endT: n.endT, windows: [n] });
})([]), py = (t) => (n) => (e) => v0((r) => v0((o) => o.target.tag === "FillWindow" ? o.startT <= e ? Kt("Node", 1, 1, o.target._2, void 0, R, R) : R : o.target.tag === "TokenWindow" && o.startT + (o.endT - o.startT) * 0.25 <= e ? Kt("Node", 1, 1, o.target._4, void 0, R, R) : R)(r.windows))(lt(
  (r) => e <= r.endT + t,
  hy(It((r) => (o) => rt.compare(r.startT)(o.startT))(lt(
    (r) => r.target.tag === "FillWindow" || r.target.tag === "TokenWindow",
    n
  )))
)), my = (t) => (n) => (e) => ge(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), $y = (t) => (n) => (e) => ge((r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e, t), yy = (t) => (n) => (e) => ge((r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e, t), vy = (t) => (n) => (e) => ge(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), xy = (t) => (n) => {
  const e = Cu(t)(n);
  if (e.tag === "AtKeyframe")
    return Sn(3)(e._1) === "kf-" ? "" : e._1;
  if (e.tag === "InTransition")
    return Sn(3)(e._2) === "kf-" ? "" : e._2;
  f();
}, Ny = (t) => (n) => {
  const e = Cu(t)(n), r = sf((() => {
    if (e.tag === "AtKeyframe")
      return e._1;
    if (e.tag === "InTransition")
      return e._2;
    f();
  })())(t.keyframes);
  if (r.tag === "Just")
    return r._1.kind;
  if (r.tag === "Nothing")
    return Wi;
  f();
}, p1 = (t) => (n) => (e) => Zt((r) => e(r) && n >= r.startT && n < r.endT)(t), wy = {
  nodes: R,
  edges: R,
  tokens: R,
  camera: { center: { x: 0, y: 0 }, zoom: 1 },
  frameTitle: "",
  staticKind: Wi,
  visited: R,
  nodeFadeAlpha: R,
  nodeLabelFadeAlpha: R,
  edgeFadeAlpha: R,
  nodeInvert: R
}, Ty = { nodes: R, edges: R, chipExtras: R, edgeLabels: R }, Jy = {
  segment: {
    startT: 0,
    endT: 0,
    path: [],
    layout: Ty,
    placement: Oa,
    windows: [],
    spans: [],
    keyframes: R,
    initialKeyframe: "",
    edgeEndpoints: R
  },
  state: wy,
  bgAlpha: 1,
  blur: 0,
  minis: [],
  role: Bs
}, Ds = (t) => {
  const n = t.levels.length - 1 | 0;
  return n >= 0 && n < t.levels.length ? t.levels[n] : Jy;
}, by = (t) => (n) => {
  const e = oy(n)(t.nodes);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just") {
    const r = e._1, o = (i) => i.x >= r.x - 1 && i.x <= r.x + r.w + 1 && i.y >= r.y - 1 && i.y <= r.y + r.h + 1;
    return vt((i) => (() => {
      if (0 < i._2.length) {
        const u = i._2.length - 1 | 0;
        return o(i._2[0]) || u >= 0 && u < i._2.length && o(i._2[u]);
      }
      const s = i._2.length - 1 | 0;
      return s >= 0 && s < i._2.length && o(i._2[s]);
    })() ? J("Just", i._1) : x)(iy(t.edges));
  }
  f();
}, ky = (t) => (n) => {
  const e = Cu(t)(n);
  if (e.tag === "AtKeyframe")
    return lc(t)(e._1);
  if (e.tag === "InTransition")
    return Yn(I.compare, Xn, lc(t)(e._1), lc(t)(e._2));
  f();
}, Ly = (t) => (n) => {
  const e = Cu(t)(n);
  if (e.tag === "AtKeyframe")
    return gc(t)(e._1);
  if (e.tag === "InTransition")
    return Yn(I.compare, Xn, gc(t)(e._1), gc(t)(e._2));
  f();
}, Ey = (t) => (n) => (e) => {
  const r = En(t), o = r.h / _r(1e-4)(e.zoom), i = r.w / _r(1e-4)(e.zoom);
  return {
    ...e,
    center: {
      x: i >= n.w ? n.x + n.w / 2 : x0(n.x + i / 2)(n.x + n.w - i / 2)(e.center.x),
      y: o >= n.h ? n.y + n.h / 2 : x0(n.y + o / 2)(n.y + n.h - o / 2)(e.center.y)
    }
  };
}, Sy = (t) => (n) => (e) => Ey(t)((() => {
  const r = n * e.placement.scale, o = En(e.layout), i = (() => {
    const s = o.x * e.placement.scale + e.placement.tx, u = o.y * e.placement.scale + e.placement.ty;
    return { x: s, y: u, w: (o.x + o.w) * e.placement.scale + e.placement.tx - s, h: (o.y + o.h) * e.placement.scale + e.placement.ty - u };
  })();
  return { x: i.x - r, y: i.y - r, w: i.w + r * 2, h: i.h + r * 2 };
})()), Cy = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : _r(0)(Jo(1)((n - t.startT) / e));
}, Qs = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : _r(0)(Jo(1)((n - t.startT) / e));
}, Ay = (t) => (n) => (e) => (r) => (o) => {
  const i = p1(n)(e)((s) => s.target.tag === "EdgeWindow" && s.target._1 === o);
  if (i.tag === "Just") {
    const s = vr(t.timing.edgeEasing)(Qs(i._1)(e)), u = i._1.target.tag === "EdgeWindow" ? i._1.target._2 : Bc("Extend", Zg);
    if (u.tag === "Retract")
      return Is("Retracting", u._1, s);
    if (u.tag === "Extend")
      return Is("Extending", u._1, s);
    f();
  }
  if (i.tag === "Nothing")
    return vy(n)(e)(o) || my(n)(e)(o) ? uc : sy(o)(r) ? f$ : uc;
  f();
}, Py = (t) => (n) => (e) => {
  const r = Ly(n)(e);
  return _1(H((o) => k(o, Ay(t)(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return R;
      if (i.tag === "Node")
        return Kt("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return Dt(_e.foldr, o(n.layout.edges));
  })()));
}, Gy = (t) => (n) => (e) => (r) => {
  const o = p1(t)(n)((i) => i.target.tag === "NodeWindow" && i.target._1 === r);
  if (o.tag === "Just") {
    const i = Qs(o._1)(n), s = o._1.target.tag === "NodeWindow" ? o._1.target._2 : o1;
    if (s === "PlopIn")
      return Fs("PloppingIn", i);
    if (s === "PlopOut")
      return Fs("PloppingOut", i);
    f();
  }
  if (o.tag === "Nothing")
    return yy(t)(n)(r) || $y(t)(n)(r) ? sc : uy(r)(e) ? a$ : sc;
  f();
}, Iy = (t) => (n) => (e) => {
  const r = ky(n)(e);
  return cy(H((o) => k(o, Gy(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return R;
      if (i.tag === "Node")
        return Kt("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return Dt(_e.foldr, o(n.layout.nodes));
  })()));
}, Fy = (t) => (n) => (e) => n.target.tag === "TokenWindow" ? k(
  n.target._1,
  e < n.startT ? ic : e >= n.endT ? h0 : Rs(
    "Travelling",
    {
      edge: n.target._2,
      direction: n.target._3,
      progress: vr(t.timing.tokenEasing)(Qs(n)(e)),
      labels: n.target._6,
      source: n.target._4,
      target: n.target._5,
      holdPre: n.target._7,
      holdPost: n.target._8
    }
  )
) : n.target.tag === "FillWindow" ? k(
  n.target._1,
  e < n.startT ? ic : e >= n.endT ? h0 : Rs("Filling", { node: n.target._2, progress: Qs(n)(e), labels: n.target._3 })
) : k("", ic), Ry = (t) => (n) => (e) => ay(H((r) => Fy(t)(r)(e))(lt(
  (r) => r.target.tag === "TokenWindow" || r.target.tag === "FillWindow",
  n
))), By = (t) => (n) => (e) => ({
  nodes: Iy()(n)(e),
  edges: Py(t)(n)(e),
  tokens: Ry(t)(n.windows)(e),
  camera: Va(t.cameraConfig)(n.layout)(t.cameraSpans)(e).camera,
  frameTitle: xy(n)(e),
  staticKind: Ny(n)(e),
  visited: py(t.timing.hatchHold)(n.windows)(e),
  nodeFadeAlpha: R,
  nodeLabelFadeAlpha: R,
  edgeFadeAlpha: R,
  nodeInvert: R
}), Lo = (t) => (n) => (e) => (r) => ({ segment: e, state: By(t)(e)(n), bgAlpha: 1, blur: 0, minis: zy(t)(n)(e), role: r }), zy = (t) => (n) => (e) => vt((r) => {
  const o = zs(t)(Ft(e.path)(r))(n);
  if (o.tag === "Just")
    return J("Just", { ...Lo(t)(fy(o._1.startT)(o._1.endT - 1e-4)(n))(o._1)(h1), bgAlpha: 0 });
  if (o.tag === "Nothing")
    return x;
  f();
})((() => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return R;
    if (o.tag === "Node")
      return Kt("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
    f();
  };
  return Dt(_e.foldr, r(e.layout.nodes));
})()), Dy = (t) => (n) => (e) => gg(
  x,
  eg,
  (r) => r.direction === "DiveIn" && Ti.eq(r.parentPath)(n.path) && e >= r.startT - 0.7 && e < r.startT ? J("Just", { node: r.node, phase: (e - (r.startT - 0.7)) / 0.7 }) : x,
  t.dives
), Qy = (t) => (n) => (e) => (r) => {
  const o = Dy(t)(n)(e);
  if (o.tag === "Just") {
    const i = ie(3.141592653589793 * o._1.phase * 3);
    return {
      ...r,
      state: { ...r.state, nodeInvert: Kt("Node", 1, 1, o._1.node, 1 * i * i, R, R) }
    };
  }
  if (o.tag === "Nothing")
    return r;
  f();
}, m1 = (t) => (n) => vt((e) => {
  const r = Zt((o) => o.direction === "DiveIn" && Ti.eq(o.childPath)((() => {
    const i = e.length + 1 | 0;
    return i < 1 ? [] : bt(0, i, n);
  })()))(t.dives);
  if (r.tag === "Just") {
    const o = zs(t)(e)(r._1.startT - 1e-4);
    if (o.tag === "Just")
      return J(
        "Just",
        (() => {
          const i = Lo(t)(r._1.startT - 1e-4)(o._1)(h1);
          return { ...i, state: { ...i.state, nodeFadeAlpha: Kt("Node", 1, 1, r._1.node, 0, R, R) } };
        })()
      );
    if (o.tag === "Nothing")
      return x;
    f();
  }
  if (r.tag === "Nothing")
    return x;
  f();
})(_y(n)), $1 = (t) => (n) => {
  const e = lt((o) => n >= o.startT && n < o.endT, t.segments), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r] : dy(t);
}, Hy = (t) => (n) => (e) => {
  const r = Cy(e)(n), o = zs(t)(e.parentPath)((() => {
    if (e.direction === "DiveIn")
      return e.startT - 1e-4;
    if (e.direction === "DiveOut")
      return e.endT - 1e-4;
    f();
  })()), i = zs(t)(e.childPath)((() => {
    if (e.direction === "DiveIn")
      return e.endT;
    if (e.direction === "DiveOut")
      return e.startT - 1e-4;
    f();
  })()), s = (() => {
    if (e.direction === "DiveIn")
      return vr(Br)(r);
    if (e.direction === "DiveOut")
      return 1 - vr(Br)(r);
    f();
  })(), u = 1 - _r(0)(Jo(1)((s - 0.1) / 0.25)), c = 1 - _r(0)(Jo(1)((s - 0.1) / 0.25)), a = 1 - _r(0)(Jo(1)((s - 0.8) / 0.2)), l = (_) => {
    const g = Lo(t)((() => {
      if (e.direction === "DiveIn")
        return e.startT - 1e-4;
      if (e.direction === "DiveOut")
        return e.endT - 1e-4;
      f();
    })())(_)(ly);
    return {
      ...gy(by(_.layout)(e.node))(c)({
        ...g,
        state: {
          ...g.state,
          nodeFadeAlpha: Kt("Node", 1, 1, e.node, u, R, R),
          nodeLabelFadeAlpha: Kt("Node", 1, 1, e.node, c, R, R)
        }
      }),
      minis: lt((p) => !Ti.eq(p.segment.path)(e.childPath), g.minis),
      bgAlpha: a
    };
  }, d = 0 + 1 * _r(0)(Jo(1)((s - 0.1) / 0.5));
  return [
    ...m1(t)(e.parentPath),
    ...(() => {
      if (o.tag === "Just") {
        if (i.tag === "Just")
          return [
            l(o._1),
            {
              ...Lo(t)((() => {
                if (e.direction === "DiveIn")
                  return e.endT;
                if (e.direction === "DiveOut")
                  return e.startT - 1e-4;
                f();
              })())(i._1)(Bs),
              bgAlpha: d
            }
          ];
        if (i.tag === "Nothing")
          return [l(o._1)];
        f();
      }
      if (o.tag === "Nothing")
        return [Lo(t)(n)($1(t)(n))(Bs)];
      f();
    })()
  ];
}, Wy = (t) => (n) => Zt((e) => n >= e.startT && n < e.endT)(t.dives), Oy = (t) => (n) => {
  const e = $1(t)(n), r = Lo(t)(n)(e)(Bs), o = t.dives.length !== 0, i = Va(t.cameraConfig)(t.layout)(t.cameraSpans)(n).camera, s = Sy(t.layout)(t.cameraConfig.padding)(e)(i), u = Qy(t)(e)(n)({ ...r, state: { ...r.state, camera: s } }), c = m1(t)(e.path), a = Wy(t)(n);
  if (a.tag === "Just")
    return { levels: Hy(t)(n)(a._1), camera: i, rootLayout: t.layout, hasDives: o, diving: !0 };
  if (a.tag === "Nothing")
    return { levels: Ft(c)(u), camera: s, rootLayout: t.layout, hasDives: o, diving: !1 };
  f();
}, y1 = (t) => t, v1 = /* @__PURE__ */ y1("RunText"), qy = /* @__PURE__ */ y1("RunCode"), x1 = (t) => (n) => (e) => n.length === 0 ? e : Ft(e)({ style: t, text: Hr(n) }), Xy = (t) => ({
  style: (() => {
    if (t.style === "RunText")
      return qy;
    if (t.style === "RunCode")
      return v1;
    f();
  })(),
  buf: [],
  runs: x1(t.style)(t.buf)(t.runs)
}), Yy = (t) => (n) => 0 < n.length ? { ...t, buf: Ft(t.buf)(n[0]) } : { ...t, buf: Ft(t.buf)("\\") }, Uy = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, c = zt((a) => x, (a) => (l) => J("Just", { head: a, tail: l }), r);
    if (c.tag === "Nothing") {
      o = !1, i = s;
      continue;
    }
    if (c.tag === "Just") {
      if (c._1.head === "\\") {
        e = Yy(s)(c._1.tail), r = bt(1, c._1.tail.length, c._1.tail);
        continue;
      }
      if (c._1.head === "`") {
        e = Xy(s), r = c._1.tail;
        continue;
      }
      e = { ...s, buf: Ft(s.buf)(c._1.head) }, r = c._1.tail;
      continue;
    }
    f();
  }
  return i;
}, N1 = (t) => {
  const n = Uy({ style: v1, buf: [], runs: [] })(Wr(t));
  return x1(n.style)(n.buf)(n.runs);
};
let as = null;
function Vy() {
  return as || (typeof document > "u" ? null : (as = document.createElement("canvas").getContext("2d"), as));
}
const N0 = /* @__PURE__ */ new Map(), Ky = (t) => (n) => (e) => (r) => () => {
  const o = `${e} ${n}px ${t}|${r}`, i = N0.get(o);
  if (i !== void 0) return i;
  const s = Vy();
  if (!s)
    return r.length * n * 0.62;
  s.font = `${e} ${n}px ${t}`;
  const u = s.measureText(r).width;
  return N0.set(o, u), u;
}, My = Qr.traverse(go), jy = /* @__PURE__ */ N(co)(0), Qo = /* @__PURE__ */ (() => {
  const t = Sr(`\r
`)(" "), n = Sr(`
`)(" "), e = (() => {
    const r = Sr("\r")(" "), o = (() => {
      const i = Sr("	")(" ");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), w1 = (t) => (n) => {
  const e = My((r) => {
    const o = (() => {
      if (r.style === "RunText")
        return t.text;
      if (r.style === "RunCode")
        return t.code;
      f();
    })();
    return Ky(o.family)(o.size)(o.weight)(Qo(r.text));
  })(N1(Qo(n)));
  return () => {
    const r = e();
    return jy(r);
  };
}, Zy = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: "500" }, t2 = { family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", size: 11, weight: "400" }, T1 = { text: Zy, code: t2 }, n2 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, xo = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, e2 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, r2 = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, o2 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, w0 = (t) => Hr(Pn(jr((n) => n === " ")(Pn(jr((n) => n === " ")(Wr(t)).rest)).rest)), i2 = (t) => N((n) => (e) => e._1 > 0 && (e._2 === " " || e._2 === "-" || e._2 === "_" || e._2 === ".") ? J("Just", e._1) : n)(x)(Bt(Mn)(t)), Hc = (t) => (n) => {
  if (t <= 0)
    return [n];
  if (Fe(n) <= t)
    return [n];
  const e = Wr(n), r = t < 1 ? [] : bt(0, t, e), o = i2(r);
  if (o.tag === "Just") {
    const i = w0(n0(!(o._1 >= 0 && o._1 < r.length) || r[o._1] === " " ? o._1 : o._1 + 1 | 0)(n)), s = w0(yi(o._1 + 1 | 0)(n));
    return s === "" ? [i] : [i, ...Hc(t)(s)];
  }
  if (o.tag === "Nothing") {
    const i = n0(t)(n), s = yi(t)(n);
    return s === "" ? [i] : [i, ...Hc(t)(s)];
  }
  f();
}, s2 = { cellW: 7, cellH: 3, maxLineWidth: 20 }, u2 = (t) => (n) => {
  const e = H((i) => k(
    (() => {
      if (i.label.tag === "Just")
        return i.label._1;
      if (i.label.tag === "Nothing")
        return i.id;
      f();
    })(),
    i
  ))(n.nodes), r = xo(1)(Je(
    (e2(t.maxLineWidth)(N((i) => (s) => xo(i)(Fe(s._1)))(0)(e)) + 2 | 0) + t.cellW | 0,
    t.cellW
  )), o = (r * t.cellW | 0) - 1 | 0;
  return {
    ...n,
    nodes: H((i) => {
      if (!(i._2.size._1 === 1 && i._2.size._2 === 1))
        return i._2;
      const s = xt(bu(`
`)(i._1))(Hc(o)), u = N((a) => (l) => xo(a)(Fe(l)))(0)(s), c = i._2.shape === "Cylinder" ? xo(1)(Je((u + 2 | 0) + t.cellW | 0, t.cellW)) : r;
      return {
        ...i._2,
        size: k(
          M(u > o ? Je((u + 2 | 0) + t.cellW | 0, t.cellW) : c),
          M(xo(1)(Je(s.length + t.cellH | 0, t.cellH)) + (i._2.shape === "Cylinder" || i._2.shape === "Document" ? 1 : 0) | 0)
        )
      };
    })(e)
  };
}, c2 = (t) => (n) => (e) => ({
  ...e,
  nodes: H((r) => {
    const o = o2(r.id)(n);
    if (o.tag === "Nothing")
      return r;
    if (o.tag === "Just")
      return {
        ...r,
        size: k(
          r2(r.size._1)(M(xo(1)(Nn(hu(r.shape === "Cylinder" ? (o._1 + 0) / t : (o._1 + 32) / t))))),
          r.size._2
        )
      };
    f();
  })(e.nodes)
}), a2 = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, f2 = (t) => {
  const n = t.length;
  return ((r) => (o) => {
    let i = r, s = o, u = !0, c;
    for (; u; ) {
      const a = i, l = s;
      if (a >= n) {
        u = !1, c = l;
        continue;
      }
      const d = (_) => (g) => {
        let p = _, m = g, h = !0, $;
        for (; h; ) {
          const y = p, v = m;
          if (y >= n) {
            h = !1, $ = v;
            continue;
          }
          if (a >= 0 && a < t.length) {
            if (y >= 0 && y < t.length) {
              p = y + 1 | 0, m = (() => {
                const w = t[a].position, T = t[a].size, b = t[y].position, L = t[y].size;
                return w._1 < b._1 + L._1 && b._1 < w._1 + T._1 && w._2 < b._2 + L._2 && b._2 < w._2 + T._2;
              })() ? v + 1 | 0 : v;
              continue;
            }
            p = y + 1 | 0, m = v;
            continue;
          }
          h = !1, $ = v;
        }
        return $;
      };
      i = a + 1 | 0, s = d(a + 1 | 0)(l);
    }
    return c;
  })(0)(0);
}, T0 = (t) => N((n) => (e) => n + zp(e.start)(e.end))(0)(t.segments), l2 = (t) => (n) => (e) => ({
  crossingCount: N((r) => (o) => r + o.jumps.length | 0)(0)(n),
  bendCount: N((r) => (o) => r + o.bends.length | 0)(0)(n),
  totalEdgeLength: N((r) => (o) => r + T0(o))(0)(n),
  maxEdgeLength: N((r) => (o) => a2(r)(T0(o)))(0)(n),
  nodeOverlapCount: f2(t),
  constraintViolations: e,
  jumpCount: N((r) => (o) => r + o.jumps.length | 0)(0)(n)
}), uf = (t) => t, en = (t) => (e) => {
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
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, cf = /* @__PURE__ */ uf("LEFT"), g2 = /* @__PURE__ */ uf("RIGHT"), J1 = /* @__PURE__ */ uf("UNDEFINED"), d2 = {
  eq: (t) => (n) => t === "LEFT" ? n === "LEFT" : t === "RIGHT" ? n === "RIGHT" : t === "UP" ? n === "UP" : t === "DOWN" ? n === "DOWN" : t === "UNDEFINED" && n === "UNDEFINED"
}, _2 = {
  compare: (t) => (n) => {
    if (t === "LEFT")
      return n === "LEFT" ? Un : Cn;
    if (n === "LEFT")
      return An;
    if (t === "RIGHT")
      return n === "RIGHT" ? Un : Cn;
    if (n === "RIGHT")
      return An;
    if (t === "UP")
      return n === "UP" ? Un : Cn;
    if (n === "UP")
      return An;
    if (t === "DOWN")
      return n === "DOWN" ? Un : Cn;
    if (n === "DOWN")
      return An;
    if (t === "UNDEFINED" && n === "UNDEFINED")
      return Un;
    f();
  },
  Eq0: () => d2
}, h2 = (t) => (e) => {
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
}, p2 = { x: 0, y: 0 }, me = (t) => (n) => (e) => {
  const r = en(t)(e.cNodes);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cNodes: K(ot)(t)(n(r._1))(e.cNodes) };
  f();
}, hi = (t) => (n) => (e) => {
  const r = en(t)(e.cGroups);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cGroups: K(ot)(t)(n(r._1))(e.cGroups) };
  f();
}, m2 = (t) => N((n) => (e) => me(e)((r) => ({ ...r, hitboxPreCompaction: r.hitbox }))(n))(t)(t.cNodeOrder), $2 = (t) => {
  const n = N((e) => (r) => {
    const o = en(r)(t.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return N((i) => (s) => At(ot)(_n)(s)([r])(i))(e)(o._1.constraints);
    f();
  })(R)(t.cNodeOrder);
  return N((e) => (r) => me(r)((o) => ({
    ...o,
    constraints: (() => {
      const i = en(r)(n);
      if (i.tag === "Nothing")
        return [];
      if (i.tag === "Just")
        return i._1;
      f();
    })()
  }))(e))(t)(t.cNodeOrder);
}, y2 = (t) => (n) => me(t)((e) => ({ ...e, ignoreSpacing: { left: e.ignoreSpacing.left || n.left, right: e.ignoreSpacing.right || n.right, up: e.ignoreSpacing.up || n.up, down: e.ignoreSpacing.down || n.down } })), v2 = (t) => {
  const n = N((e) => (r) => hi(r)((o) => ({ ...o, outDegree: o.outDegreeReal }))(e))(t)(t.cGroupOrder);
  return N((e) => (r) => me(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder);
}, be = { left: !1, right: !1, up: !1, down: !1 }, x2 = { horizontalSpacing: (t) => (n) => 0, verticalSpacing: (t) => (n) => 0 }, af = (t) => N((n) => (e) => {
  const r = en(e)(n.cGroups);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just") {
    const o = N((s) => (u) => {
      const c = en(u)(n.cNodes);
      if (c.tag === "Nothing")
        return s;
      if (c.tag === "Just") {
        if (s.tag === "Nothing")
          return J("Just", u);
        if (s.tag === "Just") {
          const a = en(s._1)(n.cNodes);
          if (a.tag === "Nothing")
            return J("Just", u);
          if (a.tag === "Just")
            return c._1.hitbox.x < a._1.hitbox.x ? J("Just", u) : J("Just", s._1);
        }
      }
      f();
    })(x)(r._1.cNodes), i = hi(e)((s) => ({ ...s, reference: o }))(n);
    if (o.tag === "Nothing")
      return i;
    if (o.tag === "Just") {
      const s = en(o._1)(i.cNodes);
      if (s.tag === "Nothing")
        return i;
      if (s.tag === "Just") {
        const u = s._1;
        return N((c) => (a) => me(a)((l) => ({ ...l, cGroupOffset: { x: l.hitbox.x - u.hitbox.x, y: l.hitbox.y - u.hitbox.y } }))(c))(i)(r._1.cNodes);
      }
    }
  }
  f();
})(t)(t.cGroupOrder), he = (t) => af({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return R;
      if (e.tag === "Node")
        return Kt("Node", e._1, e._2, e._3, { ...e._4, hitbox: { ...e._4.hitbox, x: -e._4.hitbox.x - e._4.hitbox.width } }, n(e._5), n(e._6));
      f();
    };
    return n(t.cNodes);
  })()
}), Qe = (t) => af({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return R;
      if (e.tag === "Node")
        return Kt(
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
}), b1 = (t) => {
  const n = N((e) => (r) => hi(r)((o) => ({ ...o, outDegree: 0, outDegreeReal: 0, incomingConstraints: [] }))(e))(t)(t.cGroupOrder);
  return N((e) => (r) => {
    const o = en(r)(e.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just") {
      if (o._1.cGroup.tag === "Nothing")
        return e;
      if (o._1.cGroup.tag === "Just") {
        const i = o._1.cGroup._1;
        return N((s) => (u) => {
          const c = en(u)(s.cNodes);
          if (c.tag === "Nothing")
            return s;
          if (c.tag === "Just")
            return c._1.cGroup.tag === "Just" && c._1.cGroup._1 !== i ? hi(c._1.cGroup._1)((a) => ({ ...a, outDegree: a.outDegree + 1 | 0, outDegreeReal: a.outDegreeReal + 1 | 0 }))(hi(i)((a) => ae(Go)(u)(a.incomingConstraints) ? a : { ...a, incomingConstraints: [...a.incomingConstraints, u] })(s)) : s;
          f();
        })(e)(o._1.constraints);
      }
    }
    f();
  })(n)(n.cNodeOrder);
}, fs = (t) => {
  const n = $2(t.cGraph);
  return { ...t, cGraph: b1(N((e) => (r) => me(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder)) };
}, N2 = (t) => (n) => N((e) => (r) => {
  if (t === "LEFT" || t === "UP") {
    const i = r._2;
    return me(r._1)((s) => ({ ...s, constraints: [...s.constraints, i] }))(e);
  }
  const o = r._1;
  return me(r._2)((i) => ({ ...i, constraints: [...i.constraints, o] }))(e);
})(n)(t === "LEFT" || t === "RIGHT" ? n.predefinedHorizontalConstraints : n.predefinedVerticalConstraints), we = (t) => {
  const n = {
    ...t,
    cGraph: N2(t.direction)({
      ...t.cGraph,
      cNodes: (() => {
        const e = (r) => {
          if (r.tag === "Leaf")
            return R;
          if (r.tag === "Node")
            return Kt("Node", r._1, r._2, r._3, { ...r._4, constraints: [] }, e(r._5), e(r._6));
          f();
        };
        return e(t.cGraph.cNodes);
      })()
    })
  };
  return {
    ...n,
    cGraph: b1((() => {
      if (n.constraintAlgorithm.tag === "Nothing")
        return n.cGraph;
      if (n.constraintAlgorithm.tag === "Just")
        return n.constraintAlgorithm._1(n);
      f();
    })())
  };
}, w2 = (t) => (n) => (e) => {
  const r = { ...e, direction: n };
  if (t === "UNDEFINED")
    return n === "LEFT" ? we(r) : n === "RIGHT" ? we({ ...r, cGraph: he(r.cGraph) }) : n === "UP" ? we({ ...r, cGraph: Qe(r.cGraph) }) : n === "DOWN" ? we({ ...r, cGraph: he(Qe(r.cGraph)) }) : r;
  if (t === "LEFT")
    return n === "RIGHT" ? fs({ ...r, cGraph: he(r.cGraph) }) : n === "UP" ? we({ ...r, cGraph: Qe(r.cGraph) }) : n === "DOWN" ? we({ ...r, cGraph: he(Qe(r.cGraph)) }) : r;
  if (t === "RIGHT")
    return n === "LEFT" ? fs({ ...r, cGraph: he(r.cGraph) }) : n === "UP" ? we({ ...r, cGraph: Qe(he(r.cGraph)) }) : n === "DOWN" ? we({ ...r, cGraph: he(Qe(he(r.cGraph))) }) : r;
  if (t === "UP")
    return n === "LEFT" ? we({ ...r, cGraph: Qe(r.cGraph) }) : n === "RIGHT" ? we({ ...r, cGraph: he(Qe(r.cGraph)) }) : n === "DOWN" ? fs({ ...r, cGraph: he(r.cGraph) }) : r;
  if (t === "DOWN")
    return n === "LEFT" ? we({ ...r, cGraph: Qe(he(r.cGraph)) }) : n === "RIGHT" ? we({ ...r, cGraph: he(Qe(he(r.cGraph))) }) : n === "UP" ? fs({ ...r, cGraph: he(r.cGraph) }) : r;
  f();
}, k1 = (t) => (n) => n.finished || !h2(t)(n.cGraph.supportedDirections) || (t === "LEFT" ? n.direction === "LEFT" : t === "RIGHT" ? n.direction === "RIGHT" : t === "UP" ? n.direction === "UP" : t === "DOWN" ? n.direction === "DOWN" : t === "UNDEFINED" && n.direction === "UNDEFINED") ? n : w2(n.direction)(t)(n), T2 = (t) => {
  if (t.finished)
    return t;
  const n = t.direction === "UNDEFINED" ? k1(cf)(t) : t, e = { ...n, cGraph: v2(n.cGraph) };
  if (e.compactionAlgorithm.tag === "Nothing")
    return e;
  if (e.compactionAlgorithm.tag === "Just")
    return e.compactionAlgorithm._1(e);
  f();
}, L1 = (t) => (n) => (e) => {
  const r = en(t)(e.cNodes), o = en(n)(e.cGroups);
  return r.tag === "Just" && o.tag === "Just" ? (() => {
    if (r._1.cGroup.tag === "Nothing")
      return !1;
    if (r._1.cGroup.tag === "Just")
      return !0;
    f();
  })() && (r._1.cGroup.tag === "Nothing" || !(r._1.cGroup.tag === "Just" && r._1.cGroup._1 === n)) ? e : {
    ...e,
    cNodes: K(ot)(t)({ ...r._1, cGroup: J("Just", n) })(e.cNodes),
    cGroups: K(ot)(n)({
      ...o._1,
      cNodes: ae(Go)(t)(o._1.cNodes) ? o._1.cNodes : [...o._1.cNodes, t],
      reference: (() => {
        if (o._1.reference.tag === "Nothing")
          return J("Just", t);
        if (o._1.reference.tag === "Just")
          return J("Just", o._1.reference._1);
        f();
      })()
    })(e.cGroups)
  } : e;
}, E1 = (t) => (n) => ({
  id: n.nextCNodeId,
  graph: {
    ...n,
    cNodes: K(ot)(n.nextCNodeId)({
      id: n.nextCNodeId,
      origin: t.origin,
      kind: t.kind,
      cGroup: x,
      cGroupOffset: p2,
      hitbox: t.hitbox,
      hitboxPreCompaction: t.hitbox,
      constraints: [],
      startPos: -1e308,
      ignoreSpacing: be
    })(n.cNodes),
    cNodeOrder: [...n.cNodeOrder, n.nextCNodeId],
    nextCNodeId: n.nextCNodeId + 1 | 0
  }
}), ff = (t) => (n) => {
  const e = n.nextCGroupId;
  return {
    id: e,
    graph: N((r) => (o) => L1(o)(e)(r))({
      ...n,
      cGroups: K(ot)(e)({
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
}, J2 = (t) => N((n) => (e) => {
  const r = en(e)(n.cNodes);
  return r.tag === "Just" && r._1.cGroup.tag === "Nothing" ? ff({ master: x, nodes: [e] })(n).graph : n;
})(t)(t.cNodeOrder), b2 = (t) => ({
  cGraph: m2(J2(af(t))),
  direction: J1,
  compactionAlgorithm: x,
  constraintAlgorithm: x,
  spacingsHandler: x2,
  lockFun: x,
  finished: !1
}), k2 = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, L2 = (t) => (n) => {
  const e = rt.compare(t._1)(n._1);
  return e === "LT" ? Cn : e === "GT" ? An : ot.compare(t._2)(n._2);
}, E2 = /* @__PURE__ */ (() => {
  const t = ue.unfoldr(Ee);
  return (n) => t(se("IterNode", n, Le));
})(), J0 = (t) => (e) => {
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
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, b0 = (t) => t.kind.tag === "Nothing" ? !1 : t.kind.tag === "Just" && t.kind._1 === "vs", k0 = (t) => t.kind.tag === "Nothing" || !(t.kind.tag === "Just" && t.kind._1 === "vs"), Au = (t) => (n) => L2(k(t.hitbox.x + t.hitbox.width / 2, t.id))(k(n.hitbox.x + n.hitbox.width / 2, n.id)), S2 = (t) => (n) => {
  const e = uo(Ut, x, (r) => Au(t)(r) === "LT", n);
  if (e.tag === "Just") {
    const r = dg(Ut, x, e._1, t, n);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return Ft(n)(t);
  f();
}, S1 = (t) => (n) => {
  const e = lt((o) => Au(o)(t) === "LT", n), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? J("Just", e[r]) : x;
}, C2 = (t) => (n) => {
  const e = S2(n)(t.intervals), r = Zt((i) => Au(n)(i) === "LT")(e), o = K(ot)(n.id)((() => {
    const i = S1(n)(e);
    return i.tag === "Just" ? J("Just", i._1.id) : x;
  })())(t.cand);
  return {
    ...t,
    intervals: e,
    cand: (() => {
      if (r.tag === "Just")
        return K(ot)(r._1.id)(J("Just", n.id))(o);
      if (r.tag === "Nothing")
        return o;
      f();
    })()
  };
}, A2 = (t) => (n) => {
  const e = rt.compare(t.low ? t.node.hitbox.y : t.node.hitbox.y + t.node.hitbox.height)(n.low ? n.node.hitbox.y : n.node.hitbox.y + n.node.hitbox.height);
  return e === "EQ" ? t.low ? t.low && !n.low ? An : Un : n.low ? Cn : Un : e;
}, P2 = (t) => N((n) => (e) => me(e.id)((r) => ({ ...r, constraints: [] }))(n))(t)(vt((n) => en(n)(t.cNodes))(t.cNodeOrder)), dc = (t) => (n) => N((e) => (r) => {
  const o = en(r._1)(e.cNodes);
  if (o.tag === "Just")
    return me(r._1)((i) => ({ ...i, constraints: [...i.constraints, ...r._2] }))(e);
  if (o.tag === "Nothing")
    return e;
  f();
})(n)(E2(t)), C1 = (t) => (n) => n.kind.tag !== "Nothing" && n.kind.tag === "Just" && n.kind._1 === "vs" ? n.ignoreSpacing.up ? n.ignoreSpacing.down ? n : { ...n, hitbox: { ...n.hitbox, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t - 0.01, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t, height: n.hitbox.height + 2 * t } }, L0 = (t) => (n) => (e) => N((r) => (o) => e(o) ? me(o.id)(C1(t))(r) : r)(n)(vt((r) => en(r)(n.cNodes))(n.cNodeOrder)), G2 = (t) => (n) => {
  const e = (r, o, i) => {
    const s = me(i)(C1(t))(r);
    return o.length <= 1 ? s : N((u) => (c) => c === i ? u : me(c)((a) => a.ignoreSpacing.up ? { ...a, hitbox: { ...a.hitbox, y: a.hitbox.y + t + 0.01, height: a.hitbox.height - t - 0.01 } } : a.ignoreSpacing.down ? { ...a, hitbox: { ...a.hitbox, height: a.hitbox.height - t - 0.01 } } : a)(u))(s)(o);
  };
  return N((r) => (o) => {
    if (o.master.tag === "Nothing")
      return 0 < o.cNodes.length ? e(r, o.cNodes, o.cNodes[0]) : r;
    if (o.master.tag === "Just")
      return e(r, o.cNodes, o.master._1);
    f();
  })(n)(vt((r) => en(r)(n.cGroups))(n.cGroupOrder));
}, I2 = (t) => (n) => {
  const e = S1(n)(t.intervals), r = Zt((i) => Au(n)(i) === "LT")(t.intervals), o = e.tag === "Just" && (() => {
    const i = J0(n.id)(t.cand);
    return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === e._1.id)) && e._1.cGroup.tag === "Just" && n.cGroup.tag === "Just" && e._1.cGroup._1 !== n.cGroup._1;
  })() ? At(ot)(_n)(e._1.id)([n.id])(t.constraints) : t.constraints;
  return {
    ...t,
    constraints: r.tag === "Just" && (() => {
      const i = J0(r._1.id)(t.cand);
      return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === n.id)) && n.cGroup.tag === "Just" && r._1.cGroup.tag === "Just" && n.cGroup._1 !== r._1.cGroup._1;
    })() ? At(ot)(_n)(n.id)([r._1.id])(o) : o,
    intervals: lt((i) => i.id !== n.id, t.intervals)
  };
}, F2 = (t) => (n) => n.low ? C2(t)(n.node) : I2(t)(n.node), _c = (t) => (n) => N(F2)({ intervals: [], cand: R, constraints: R })(It(A2)(xt(lt(
  t,
  vt((e) => en(e)(n.cNodes))(n.cNodeOrder)
))((e) => [{ node: e, low: !0 }, { node: e, low: !1 }]))).constraints, R2 = (t) => (n) => {
  const e = k2(0)(t / 2 - 0.5), r = dc(_c(b0)(L0(e)(n)(b0)))(n), o = dc(_c(k0)(L0(e)(r)(k0)))(r);
  return dc(_c((i) => !0)(G2(e)(o)))(o);
}, B2 = (t) => (n) => R2(t)(P2(n.cGraph)), Hs = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, E0 = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, lf = (t) => (n) => (e) => (r) => (o) => ({
  id: t,
  representedEdges: [o],
  affectedBends: [n, e],
  hitbox: { x: Hs(n._1)(e._1), y: Hs(n._2)(e._2), width: Me(n._1 - e._1), height: Me(n._2 - e._2) },
  ignoreSpacing: be,
  potentialGroupParents: (() => {
    if (r.tag === "Nothing")
      return [];
    if (r.tag === "Just")
      return [r._1];
    f();
  })(),
  aPort: x
}), z2 = (t) => (n) => {
  const e = Hs(t.hitbox.x)(n.hitbox.x), r = Hs(t.hitbox.y)(n.hitbox.y);
  return {
    ...t,
    representedEdges: [...t.representedEdges, ...n.representedEdges],
    affectedBends: [...t.affectedBends, ...n.affectedBends],
    potentialGroupParents: [...t.potentialGroupParents, ...n.potentialGroupParents],
    hitbox: {
      x: e,
      y: r,
      width: E0(t.hitbox.x + t.hitbox.width)(n.hitbox.x + n.hitbox.width) - e,
      height: E0(t.hitbox.y + t.hitbox.height)(n.hitbox.y + n.hitbox.height) - r
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
}, D2 = (t) => (n) => Me(t.hitbox.x - n.hitbox.x) <= 1e-4 && n.hitbox.y - (t.hitbox.y + t.hitbox.height) <= 1e-4 && t.hitbox.y - (n.hitbox.y + n.hitbox.height) <= 1e-4, Q2 = (t) => (n) => Me(t.hitbox.x - n.hitbox.x) <= 1e-4 ? rt.compare(t.hitbox.y)(n.hitbox.y) : t.hitbox.x < n.hitbox.x ? Cn : An, A1 = (t, n) => ({ tag: t, _1: n }), gf = /* @__PURE__ */ an(I)(Xt), Pu = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, S0 = /* @__PURE__ */ (() => {
  const t = { eq: (e) => (r) => e._1 === r._1 && (e._2.tag === "Nothing" ? r._2.tag === "Nothing" : e._2.tag === "Just" && r._2.tag === "Just" && e._2._1 === r._2._1) }, n = {
    compare: (e) => (r) => {
      const o = I.compare(e._1)(r._1);
      if (o === "LT")
        return Cn;
      if (o === "GT")
        return An;
      if (e._2.tag === "Nothing")
        return r._2.tag === "Nothing" ? Un : Cn;
      if (r._2.tag === "Nothing")
        return An;
      if (e._2.tag === "Just" && r._2.tag === "Just")
        return I.compare(e._2._1)(r._2._1);
      f();
    },
    Eq0: () => t
  };
  return N((e) => (r) => K(n)(r)()(e))(R);
})(), mr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, H2 = /* @__PURE__ */ N((t) => (n) => K(_2)(n)()(t))(R), hc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = Gg.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, W2 = (t) => (n) => {
  const e = gf(H((i) => k(i.id, i))(t)), r = vt((i) => Pu(i)(e))(n), o = ot.compare((() => {
    const i = S0(H((s) => k(s.from.node, s.from.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })())((() => {
    const i = S0(H((s) => k(s.to.node, s.to.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })());
  if (o === "LT")
    return { ...be, left: !0, right: !1 };
  if (o === "GT")
    return { ...be, left: !1, right: !0 };
  if (o === "EQ")
    return be;
  f();
}, O2 = (t) => vt((n) => {
  if (n.direction === "V")
    return J("Just", { start: n.start, end: n.end });
  if (n.direction === "H")
    return x;
  f();
})(t.segments), ls = (t) => (n) => (e) => (r) => {
  if (r.tag === "Just") {
    const o = mr(e)(n);
    if (o.tag === "Just") {
      const i = Zt((s) => s.id === r._1)(o._1);
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
}, q2 = (t) => (n) => (e) => {
  const r = E1({
    origin: J("Just", A1("SegmentOrigin", e)),
    kind: J("Just", "vs"),
    hitbox: e.hitbox
  })(n.cGraph), o = y2(r.id)(e.ignoreSpacing)(r.graph);
  return {
    ...n,
    cGraph: (() => {
      if (0 < e.potentialGroupParents.length) {
        const i = en(e.potentialGroupParents[0])(o.cNodes);
        if (i.tag === "Just") {
          if (i._1.cGroup.tag === "Just")
            return L1(r.id)(i._1.cGroup._1)(o);
          if (i._1.cGroup.tag === "Nothing")
            return o;
          f();
        }
        if (i.tag === "Nothing")
          return o;
        f();
      }
      return ff({ master: J("Just", r.id), nodes: [r.id] })(o).graph;
    })(),
    edgeToCs: N((i) => (s) => At(I)(_n)(s)([r.id])(i))(n.edgeToCs)(e.representedEdges),
    lockMap: K(ot)(r.id)(W2(t)(e.representedEdges))(n.lockMap)
  };
}, X2 = (t) => (n) => (e) => {
  const r = zt(
    (o) => x,
    (o) => (i) => J("Just", { head: o, tail: i }),
    It(Q2)(n)
  );
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just") {
    const o = N((i) => (s) => D2(i.survivor)(s) ? { ...i, survivor: z2(i.survivor)(s) } : { survivor: s, merged: [...i.merged, i.survivor] })({ survivor: r._1.head, merged: [] })(r._1.tail);
    return N(q2(t))(e)([...o.merged, o.survivor]);
  }
  f();
}, Y2 = (t) => ({
  cGraph: {
    cNodes: R,
    cNodeOrder: [],
    cGroups: R,
    cGroupOrder: [],
    supportedDirections: H2([J1, cf, g2]),
    predefinedHorizontalConstraints: [],
    predefinedVerticalConstraints: [],
    nextCNodeId: 0,
    nextCGroupId: 0
  },
  nodeToC: R,
  edgeToCs: R,
  lockMap: R
}), U2 = (t) => {
  const n = M(4);
  return { x: t.position._1 * n, y: t.position._2 * n, width: t.size._1 * n, height: t.size._2 * n };
}, V2 = (t) => (n) => (e) => N((r) => (o) => {
  const i = E1({ origin: J("Just", A1("NodeOrigin", o.node)), kind: x, hitbox: U2(o) })(r.cGraph), s = mr(o.node)(t), u = (() => {
    if (s.tag === "Nothing")
      return k(0, 0);
    if (s.tag === "Just")
      return s._1;
    f();
  })();
  return {
    ...r,
    cGraph: ff({ master: J("Just", i.id), nodes: [i.id] })(i.graph).graph,
    nodeToC: K(I)(o.node)(i.id)(r.nodeToC),
    lockMap: K(ot)(i.id)((() => {
      const c = u._1 - u._2 | 0;
      return c < 0 ? { ...be, left: !0 } : c > 0 ? { ...be, right: !0 } : be;
    })())(r.lockMap)
  };
})(e)(n), K2 = (t) => N((n) => (e) => At(I)((r) => (o) => k(
  r._1 + o._1 | 0,
  r._2 + o._2 | 0
))(e.to.node)(k(1, 0))(At(I)((r) => (o) => k(r._1 + o._1 | 0, r._2 + o._2 | 0))(e.from.node)(k(
  0,
  1
))(n)))(R)(t), M2 = (t) => N((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? K(I)(e.origin._1._1)(e.hitbox.x)(n) : n)(R)(vt((n) => en(n)(t.cNodes))(t.cNodeOrder)), j2 = (t) => N((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? K(I)(e.origin._1._1)(e.hitbox.x - e.hitboxPreCompaction.x)(n) : n)(R)(vt((n) => en(n)(t.cNodes))(t.cNodeOrder)), Z2 = (t) => N((n) => (e) => {
  if (e.origin.tag === "Just" && e.origin._1.tag === "SegmentOrigin") {
    const r = e.hitbox.x - e.hitboxPreCompaction.x;
    return N((o) => (i) => K(Gg)(i)(r)(o))(n)(e.origin._1._1.affectedBends);
  }
  return n;
})(R)(vt((n) => en(n)(t.cNodes))(t.cNodeOrder)), P1 = (t) => {
  const n = gf(H((e) => k(e.id, e))(t.edges));
  return vt((e) => {
    const r = Pu(e.edge)(n);
    if (r.tag === "Just")
      return e.reversed ? J(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.to.node,
          tgt: r._1.from.node,
          srcSide: ls(cr)(t.ports)(r._1.to.node)(r._1.to.port),
          tgtSide: ls(ar)(t.ports)(r._1.from.node)(r._1.from.port),
          path: e
        }
      ) : J(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.from.node,
          tgt: r._1.to.node,
          srcSide: ls(cr)(t.ports)(r._1.from.node)(r._1.from.port),
          tgtSide: ls(ar)(t.ports)(r._1.to.node)(r._1.to.port),
          path: e
        }
      );
    if (r.tag === "Nothing")
      return x;
    f();
  })(t.paths);
}, tv = (t) => (n) => {
  const e = xt(n)((r) => {
    if (r.src === r.tgt)
      return [];
    if ((r.srcSide === "North" || r.srcSide === "South") && (r.tgtSide === "North" || r.tgtSide === "South"))
      return [];
    const o = mr(r.tgt)(t.nodeToC), i = (() => {
      if (o.tag === "Just")
        return en(o._1)(t.cGraph.cNodes);
      if (o.tag === "Nothing")
        return x;
      f();
    })(), s = mr(r.src)(t.nodeToC), u = (() => {
      if (s.tag === "Just")
        return en(s._1)(t.cGraph.cNodes);
      if (s.tag === "Nothing")
        return x;
      f();
    })(), c = (() => {
      if (u.tag === "Just") {
        if (i.tag === "Just") {
          if (u._1.cGroup.tag === "Just") {
            if (i._1.cGroup.tag === "Just")
              return J("Just", { srcGroup: u._1.cGroup._1, tgtGroup: i._1.cGroup._1, delta: 0, weight: 100 });
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
    })(), a = (g) => (p) => (m) => {
      if (u.tag === "Just") {
        if (u._1.cGroup.tag === "Just") {
          if (m.cGroup.tag === "Just")
            return g(m.hitbox.x) && m.cGroup._1 !== u._1.cGroup._1 ? J("Just", p(m.cGroup._1)(u._1.cGroup._1)) : x;
          if (m.cGroup.tag === "Nothing")
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
    }, l = vt((g) => en(g)(t.cGraph.cNodes))((() => {
      const g = Pu(r.edgeId)(t.edgeToCs);
      if (g.tag === "Nothing")
        return [];
      if (g.tag === "Just")
        return g._1;
      f();
    })()), d = (() => {
      if (u.tag === "Just" && r.srcSide === "West") {
        const g = u._1;
        return vt(a((p) => p < g.hitbox.x)((p) => (m) => ({ srcGroup: p, tgtGroup: m, delta: 1, weight: 100 })))(l);
      }
      return [];
    })(), _ = (() => {
      if (u.tag === "Just" && r.tgtSide === "East") {
        const g = u._1;
        return vt(a((p) => p > g.hitbox.x)((p) => (m) => ({ srcGroup: m, tgtGroup: p, delta: 1, weight: 100 })))(l);
      }
      return [];
    })();
    if (c.tag === "Nothing")
      return [];
    if (c.tag === "Just")
      return [c._1, ...d, ..._];
    f();
  });
  return {
    sameEdgeVerticalSegments: (r) => (o) => r.origin.tag === "Just" && r.origin._1.tag === "SegmentOrigin" && o.origin.tag === "Just" && o.origin._1.tag === "SegmentOrigin" && (() => {
      const i = o.origin._1._1;
      return ge((s) => ae(Pe)(s)(i.representedEdges), r.origin._1._1.representedEdges);
    })(),
    vsLNodePair: (r) => (o) => r.origin.tag === "Just" && o.origin.tag === "Just" && (r.origin._1.tag === "SegmentOrigin" ? o.origin._1.tag === "NodeOrigin" : r.origin._1.tag === "NodeOrigin" && o.origin._1.tag === "SegmentOrigin"),
    edgeLengthEdges: (r) => e
  };
}, nv = (t) => (n) => {
  const e = M(4), r = M2(t), o = j2(t), i = gf(H((u) => k(u.id, k(u.from.node, u.to.node)))(n.edges)), s = Z2(t);
  return {
    nodes: H((u) => {
      const c = mr(u.node)(r);
      if (c.tag === "Just")
        return { ...u, position: k(c._1 / e, u.position._2) };
      if (c.tag === "Nothing")
        return u;
      f();
    })(n.nodes),
    edges: H((u) => {
      const c = Pu(u.edge)(i), a = (() => {
        if (c.tag === "Nothing")
          return u.segments;
        if (c.tag === "Just") {
          const l = mr(c._1._1)(o), d = (() => {
            if (l.tag === "Nothing")
              return 0;
            if (l.tag === "Just")
              return l._1;
            f();
          })(), _ = mr(c._1._2)(o), g = (() => {
            if (_.tag === "Nothing")
              return 0;
            if (_.tag === "Just")
              return _._1;
            f();
          })();
          return Bt((() => {
            const p = u.reversed ? g : d, m = u.reversed ? d : g, h = u.segments.length;
            return ($) => (y) => {
              if (y.direction === "V") {
                const v = (() => {
                  if ($ === 0)
                    return p;
                  if ($ === (h - 1 | 0))
                    return m;
                  const w = hc(y.start)(s);
                  if (w.tag === "Nothing")
                    return 0;
                  if (w.tag === "Just")
                    return w._1;
                  f();
                })();
                return { ...y, start: k(y.start._1 + v, y.start._2), end: k(y.end._1 + v, y.end._2) };
              }
              if (y.direction === "H")
                return {
                  ...y,
                  start: k(
                    (() => {
                      if ($ === 0)
                        return y.start._1 + p;
                      const v = hc(y.start)(s);
                      if (v.tag === "Nothing")
                        return y.start._1 + 0;
                      if (v.tag === "Just")
                        return y.start._1 + v._1;
                      f();
                    })(),
                    y.start._2
                  ),
                  end: k(
                    (() => {
                      if ($ === (h - 1 | 0))
                        return y.end._1 + m;
                      const v = hc(y.end)(s);
                      if (v.tag === "Nothing")
                        return y.end._1 + 0;
                      if (v.tag === "Just")
                        return y.end._1 + v._1;
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
      return { ...u, segments: a, bends: Ln((l) => (d) => l.end, a, bt(1, a.length, a)) };
    })(n.paths)
  };
}, ev = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = lf(o.nextId)(i._2.start)(i._2.end)(x)(t.edgeId), u = (() => {
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
}, C0 = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...lf(i.nextId)(r.start)(k(r.start._1, o.down ? e.y : e.y + e.height))(J(
        "Just",
        n
      ))(t.edgeId),
      aPort: J("Just", { node: t.src, side: o.side }),
      ignoreSpacing: o.down ? { ...be, down: !0 } : { ...be, up: !0 }
    }
  ]
}), gs = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...lf(i.nextId)(r.end)(k(r.end._1, o.down ? e.y : e.y + e.height))(J(
        "Just",
        n
      ))(t.edgeId),
      aPort: J("Just", { node: t.tgt, side: o.side }),
      ignoreSpacing: o.down ? { ...be, down: !0 } : { ...be, up: !0 }
    }
  ]
}), rv = (t) => (n) => (e) => {
  if (e.src === e.tgt)
    return n;
  const r = mr(e.src)(t.nodeToC), o = mr(e.tgt)(t.nodeToC), i = (() => {
    if (r.tag === "Just") {
      const l = en(r._1)(t.cGraph.cNodes);
      return l.tag === "Just" ? J("Just", l._1.hitbox) : x;
    }
    if (r.tag === "Nothing")
      return x;
    f();
  })(), s = (() => {
    if (o.tag === "Just") {
      const l = en(o._1)(t.cGraph.cNodes);
      return l.tag === "Just" ? J("Just", l._1.hitbox) : x;
    }
    if (o.tag === "Nothing")
      return x;
    f();
  })(), u = O2(e.path), c = N(ev(e)(i)(s)(u.length - 1 | 0))(n)(Bt((l) => (d) => k(
    l,
    d
  ))(u));
  if (0 < u.length) {
    const l = (() => {
      if (r.tag === "Just" && i.tag === "Just") {
        if (e.srcSide === "North")
          return C0(e)(r._1)(i._1)(u[0])({ side: Tn, down: !0 })(c);
        if (e.srcSide === "South")
          return C0(e)(r._1)(i._1)(u[0])({ side: Jn, down: !1 })(c);
      }
      return c;
    })(), d = u.length - 1 | 0;
    if (d >= 0 && d < u.length && o.tag === "Just" && s.tag === "Just") {
      if (e.tgtSide === "North")
        return gs(e)(o._1)(s._1)(u[d])({ side: Tn, down: !0 })(l);
      if (e.tgtSide === "South")
        return gs(e)(o._1)(s._1)(u[d])({ side: Jn, down: !1 })(l);
    }
    return l;
  }
  const a = u.length - 1 | 0;
  if (a >= 0 && a < u.length && o.tag === "Just" && s.tag === "Just") {
    if (e.tgtSide === "North")
      return gs(e)(o._1)(s._1)(u[a])({ side: Tn, down: !0 })(c);
    if (e.tgtSide === "South")
      return gs(e)(o._1)(s._1)(u[a])({ side: Jn, down: !1 })(c);
  }
  return c;
}, ov = (t) => (n) => (e) => X2(t)(N(rv(e))({ nextId: 0, segments: [] })(n).segments)(e), iv = (t) => ov(t.edges)(P1(t))(V2(K2(t.edges))(t.nodes)(Y2())), $r = (t) => (e) => {
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
}, Wc = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Oc = (t) => (e) => {
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
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, sv = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, uv = (t) => {
  const n = t.Eq0();
  return (e) => (r) => {
    const o = (u) => {
      let c = u, a = !0, l;
      for (; a; ) {
        const d = c, _ = zt((g) => x, (g) => (p) => J("Just", { head: g, tail: p }), d.queue);
        if (_.tag === "Nothing") {
          a = !1, l = d;
          continue;
        }
        if (_.tag === "Just") {
          const g = _._1.head;
          if (((h) => {
            let $ = h, y = !0, v;
            for (; y; ) {
              const w = $;
              if (w.tag === "Leaf") {
                y = !1, v = !1;
                continue;
              }
              if (w.tag === "Node") {
                const T = t.compare(g)(w._3);
                if (T === "LT") {
                  $ = w._5;
                  continue;
                }
                if (T === "GT") {
                  $ = w._6;
                  continue;
                }
                if (T === "EQ") {
                  y = !1, v = !0;
                  continue;
                }
              }
              f();
            }
            return v;
          })(d.removedNodes)) {
            c = { ...d, queue: _._1.tail };
            continue;
          }
          const p = Zt((m) => !$r(m.eid)(d.removedEdges) && (n.eq(m.src)(g) || n.eq(m.tgt)(g)))(r);
          if (p.tag === "Nothing") {
            c = { ...d, queue: _._1.tail };
            continue;
          }
          if (p.tag === "Just") {
            const m = n.eq(p._1.src)(g) ? p._1.tgt : p._1.src, h = {
              ...d,
              degree: K(t)(m)((() => {
                const y = ((v) => {
                  let w = v, T = !0, b;
                  for (; T; ) {
                    const L = w;
                    if (L.tag === "Leaf") {
                      T = !1, b = x;
                      continue;
                    }
                    if (L.tag === "Node") {
                      const C = t.compare(m)(L._3);
                      if (C === "LT") {
                        w = L._5;
                        continue;
                      }
                      if (C === "GT") {
                        w = L._6;
                        continue;
                      }
                      if (C === "EQ") {
                        T = !1, b = J("Just", L._4);
                        continue;
                      }
                    }
                    f();
                  }
                  return b;
                })(d.degree);
                if (y.tag === "Nothing")
                  return -1;
                if (y.tag === "Just")
                  return y._1 - 1 | 0;
                f();
              })())(d.degree),
              removedNodes: K(t)(g)()(d.removedNodes),
              removedEdges: K(ot)(p._1.eid)()(d.removedEdges),
              record: [...d.record, { node: g, neighbour: m, viaSrc: n.eq(p._1.src)(g) }],
              queue: _._1.tail
            };
            if ((() => {
              const y = ((w) => {
                let T = w, b = !0, L;
                for (; b; ) {
                  const C = T;
                  if (C.tag === "Leaf") {
                    b = !1, L = x;
                    continue;
                  }
                  if (C.tag === "Node") {
                    const E = t.compare(m)(C._3);
                    if (E === "LT") {
                      T = C._5;
                      continue;
                    }
                    if (E === "GT") {
                      T = C._6;
                      continue;
                    }
                    if (E === "EQ") {
                      b = !1, L = J("Just", C._4);
                      continue;
                    }
                  }
                  f();
                }
                return L;
              })(h.degree), v = (w) => {
                let T = w, b = !0, L;
                for (; b; ) {
                  const C = T;
                  if (C.tag === "Leaf") {
                    b = !1, L = !1;
                    continue;
                  }
                  if (C.tag === "Node") {
                    const E = t.compare(m)(C._3);
                    if (E === "LT") {
                      T = C._5;
                      continue;
                    }
                    if (E === "GT") {
                      T = C._6;
                      continue;
                    }
                    if (E === "EQ") {
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
              })() && !v(h.removedNodes);
            })()) {
              c = { ...h, queue: [...h.queue, m] };
              continue;
            }
            c = h;
            continue;
          }
        }
        f();
      }
      return l;
    }, i = N((u) => (c) => At(t)(pn)(c.src)(1)(At(t)(pn)(c.tgt)(1)(u)))(R)(r), s = o({
      degree: i,
      removedNodes: R,
      removedEdges: R,
      record: [],
      queue: lt(
        (u) => {
          const a = ((l) => {
            let d = l, _ = !0, g;
            for (; _; ) {
              const p = d;
              if (p.tag === "Leaf") {
                _ = !1, g = x;
                continue;
              }
              if (p.tag === "Node") {
                const m = t.compare(u)(p._3);
                if (m === "LT") {
                  d = p._5;
                  continue;
                }
                if (m === "GT") {
                  d = p._6;
                  continue;
                }
                if (m === "EQ") {
                  _ = !1, g = J("Just", p._4);
                  continue;
                }
              }
              f();
            }
            return g;
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
      coreNodes: lt(
        (u) => !((a) => {
          let l = a, d = !0, _;
          for (; d; ) {
            const g = l;
            if (g.tag === "Leaf") {
              d = !1, _ = !1;
              continue;
            }
            if (g.tag === "Node") {
              const p = t.compare(u)(g._3);
              if (p === "LT") {
                l = g._5;
                continue;
              }
              if (p === "GT") {
                l = g._6;
                continue;
              }
              if (p === "EQ") {
                d = !1, _ = !0;
                continue;
              }
            }
            f();
          }
          return _;
        })(s.removedNodes),
        e
      ),
      coreEdges: lt((u) => !$r(u.eid)(s.removedEdges), r),
      removed: s.record
    };
  };
}, cv = (t) => (n) => (e) => N((r) => (o) => {
  const i = o.neighbour, s = (() => {
    const u = ((a) => {
      let l = a, d = !0, _;
      for (; d; ) {
        const g = l;
        if (g.tag === "Leaf") {
          d = !1, _ = x;
          continue;
        }
        if (g.tag === "Node") {
          const p = t.compare(i)(g._3);
          if (p === "LT") {
            l = g._5;
            continue;
          }
          if (p === "GT") {
            l = g._6;
            continue;
          }
          if (p === "EQ") {
            d = !1, _ = J("Just", g._4);
            continue;
          }
        }
        f();
      }
      return _;
    })(r);
    if (u.tag === "Nothing")
      return 0;
    if (u.tag === "Just")
      return u._1;
    f();
  })();
  return K(t)(o.node)(o.viaSrc ? s - 1 | 0 : s + 1 | 0)(r);
})(e)(Pn(n)), qc = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = { ...o, treeNode: K(t)(r)()(o.treeNode) };
    return N((s) => (u) => {
      if ($r(u.eid)(s.st.edgeVisited))
        return s;
      const c = { ...s.st, edgeVisited: K(ot)(u.eid)()(s.st.edgeVisited) }, a = n.eq(u.src)((() => {
        const l = u.src, d = (g) => {
          let p = g, m = !0, h;
          for (; m; ) {
            const $ = p;
            if ($.tag === "Leaf") {
              m = !1, h = !1;
              continue;
            }
            if ($.tag === "Node") {
              const y = t.compare(l)($._3);
              if (y === "LT") {
                p = $._5;
                continue;
              }
              if (y === "GT") {
                p = $._6;
                continue;
              }
              if (y === "EQ") {
                m = !1, h = !0;
                continue;
              }
            }
            f();
          }
          return h;
        }, _ = u.tgt;
        return d(c.treeNode) && !((p) => {
          let m = p, h = !0, $;
          for (; h; ) {
            const y = m;
            if (y.tag === "Leaf") {
              h = !1, $ = !1;
              continue;
            }
            if (y.tag === "Node") {
              const v = t.compare(_)(y._3);
              if (v === "LT") {
                m = y._5;
                continue;
              }
              if (v === "GT") {
                m = y._6;
                continue;
              }
              if (v === "EQ") {
                h = !1, $ = !0;
                continue;
              }
            }
            f();
          }
          return $;
        })(c.treeNode);
      })() ? u.src : (() => {
        const l = u.tgt, d = (g) => {
          let p = g, m = !0, h;
          for (; m; ) {
            const $ = p;
            if ($.tag === "Leaf") {
              m = !1, h = !1;
              continue;
            }
            if ($.tag === "Node") {
              const y = t.compare(l)($._3);
              if (y === "LT") {
                p = $._5;
                continue;
              }
              if (y === "GT") {
                p = $._6;
                continue;
              }
              if (y === "EQ") {
                m = !1, h = !0;
                continue;
              }
            }
            f();
          }
          return h;
        }, _ = u.src;
        return d(c.treeNode) && !((p) => {
          let m = p, h = !0, $;
          for (; h; ) {
            const y = m;
            if (y.tag === "Leaf") {
              h = !1, $ = !1;
              continue;
            }
            if (y.tag === "Node") {
              const v = t.compare(_)(y._3);
              if (v === "LT") {
                m = y._5;
                continue;
              }
              if (v === "GT") {
                m = y._6;
                continue;
              }
              if (v === "EQ") {
                h = !1, $ = !0;
                continue;
              }
            }
            f();
          }
          return $;
        })(c.treeNode);
      })() ? u.tgt : u.src) ? u.tgt : u.src;
      if ($r(u.eid)(c.treeEdge)) {
        if (((_) => {
          let g = _, p = !0, m;
          for (; p; ) {
            const h = g;
            if (h.tag === "Leaf") {
              p = !1, m = !1;
              continue;
            }
            if (h.tag === "Node") {
              const $ = t.compare(a)(h._3);
              if ($ === "LT") {
                g = h._5;
                continue;
              }
              if ($ === "GT") {
                g = h._6;
                continue;
              }
              if ($ === "EQ") {
                p = !1, m = !0;
                continue;
              }
            }
            f();
          }
          return m;
        })(c.treeNode))
          return { ...s, st: c };
        const l = qc(t)(e)(a)(c);
        return { count: s.count + l.count | 0, st: l.st };
      }
      if ((() => {
        const l = (_) => {
          let g = _, p = !0, m;
          for (; p; ) {
            const h = g;
            if (h.tag === "Leaf") {
              p = !1, m = !1;
              continue;
            }
            if (h.tag === "Node") {
              const $ = t.compare(a)(h._3);
              if ($ === "LT") {
                g = h._5;
                continue;
              }
              if ($ === "GT") {
                g = h._6;
                continue;
              }
              if ($ === "EQ") {
                p = !1, m = !0;
                continue;
              }
            }
            f();
          }
          return m;
        }, d = u.tgt;
        return !l(c.treeNode) && (() => {
          const g = (($) => {
            let y = $, v = !0, w;
            for (; v; ) {
              const T = y;
              if (T.tag === "Leaf") {
                v = !1, w = x;
                continue;
              }
              if (T.tag === "Node") {
                const b = t.compare(d)(T._3);
                if (b === "LT") {
                  y = T._5;
                  continue;
                }
                if (b === "GT") {
                  y = T._6;
                  continue;
                }
                if (b === "EQ") {
                  v = !1, w = J("Just", T._4);
                  continue;
                }
              }
              f();
            }
            return w;
          })(c.layer), p = u.src, h = (($) => {
            let y = $, v = !0, w;
            for (; v; ) {
              const T = y;
              if (T.tag === "Leaf") {
                v = !1, w = x;
                continue;
              }
              if (T.tag === "Node") {
                const b = t.compare(p)(T._3);
                if (b === "LT") {
                  y = T._5;
                  continue;
                }
                if (b === "GT") {
                  y = T._6;
                  continue;
                }
                if (b === "EQ") {
                  v = !1, w = J("Just", T._4);
                  continue;
                }
              }
              f();
            }
            return w;
          })(c.layer);
          if (g.tag === "Nothing") {
            if (h.tag === "Nothing")
              return u.delta === 0;
            if (h.tag === "Just")
              return u.delta === -h._1;
            f();
          }
          if (g.tag === "Just") {
            if (h.tag === "Nothing")
              return u.delta === (g._1 - 0 | 0);
            if (h.tag === "Just")
              return u.delta === (g._1 - h._1 | 0);
          }
          f();
        })();
      })()) {
        const l = qc(t)(e)(a)({ ...c, treeEdge: K(ot)(u.eid)()(c.treeEdge) });
        return { count: s.count + l.count | 0, st: l.st };
      }
      return { ...s, st: c };
    })({ count: 1, st: i })(lt((s) => (n.eq(s.src)(r) || n.eq(s.tgt)(r)) && !$r(s.eid)(i.edgeVisited), e));
  };
}, Ws = (t) => (n) => (e) => (r) => {
  const o = r.src, s = ((m) => {
    let h = m, $ = !0, y;
    for (; $; ) {
      const v = h;
      if (v.tag === "Leaf") {
        $ = !1, y = x;
        continue;
      }
      if (v.tag === "Node") {
        const w = t.compare(o)(v._3);
        if (w === "LT") {
          h = v._5;
          continue;
        }
        if (w === "GT") {
          h = v._6;
          continue;
        }
        if (w === "EQ") {
          $ = !1, y = J("Just", v._4);
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
  })(), c = r.tgt, l = ((m) => {
    let h = m, $ = !0, y;
    for (; $; ) {
      const v = h;
      if (v.tag === "Leaf") {
        $ = !1, y = x;
        continue;
      }
      if (v.tag === "Node") {
        const w = t.compare(c)(v._3);
        if (w === "LT") {
          h = v._5;
          continue;
        }
        if (w === "GT") {
          h = v._6;
          continue;
        }
        if (w === "EQ") {
          $ = !1, y = J("Just", v._4);
          continue;
        }
      }
      f();
    }
    return y;
  })(n.poID), d = (() => {
    if (l.tag === "Nothing")
      return 0;
    if (l.tag === "Just")
      return l._1;
    f();
  })(), g = ((m) => {
    let h = m, $ = !0, y;
    for (; $; ) {
      const v = h;
      if (v.tag === "Leaf") {
        $ = !1, y = x;
        continue;
      }
      if (v.tag === "Node") {
        const w = t.compare(e)(v._3);
        if (w === "LT") {
          h = v._5;
          continue;
        }
        if (w === "GT") {
          h = v._6;
          continue;
        }
        if (w === "EQ") {
          $ = !1, y = J("Just", v._4);
          continue;
        }
      }
      f();
    }
    return y;
  })(n.poID), p = (() => {
    if (g.tag === "Nothing")
      return 0;
    if (g.tag === "Just")
      return g._1;
    f();
  })();
  return (() => {
    const m = r.src, $ = ((y) => {
      let v = y, w = !0, T;
      for (; w; ) {
        const b = v;
        if (b.tag === "Leaf") {
          w = !1, T = x;
          continue;
        }
        if (b.tag === "Node") {
          const L = t.compare(m)(b._3);
          if (L === "LT") {
            v = b._5;
            continue;
          }
          if (L === "GT") {
            v = b._6;
            continue;
          }
          if (L === "EQ") {
            w = !1, T = J("Just", b._4);
            continue;
          }
        }
        f();
      }
      return T;
    })(n.lowestPoID);
    return (() => {
      if ($.tag === "Nothing")
        return 0 <= p;
      if ($.tag === "Just")
        return $._1 <= p;
      f();
    })() && (() => {
      const y = r.tgt;
      return p <= u && (() => {
        const w = ((T) => {
          let b = T, L = !0, C;
          for (; L; ) {
            const E = b;
            if (E.tag === "Leaf") {
              L = !1, C = x;
              continue;
            }
            if (E.tag === "Node") {
              const B = t.compare(y)(E._3);
              if (B === "LT") {
                b = E._5;
                continue;
              }
              if (B === "GT") {
                b = E._6;
                continue;
              }
              if (B === "EQ") {
                L = !1, C = J("Just", E._4);
                continue;
              }
            }
            f();
          }
          return C;
        })(n.lowestPoID);
        return (() => {
          if (w.tag === "Nothing")
            return 0 <= p;
          if (w.tag === "Just")
            return w._1 <= p;
          f();
        })() && p <= d;
      })();
    })();
  })() ? u >= d : u < d;
}, av = (t) => {
  const n = an(t)(Xt);
  return (e) => ({
    layer: n(H((r) => k(r, 0))(e)),
    treeNode: R,
    treeEdge: R,
    poID: R,
    lowestPoID: R,
    cutvalue: R,
    postOrder: 1,
    edgeVisited: R
  });
}, fv = (t) => (n) => (e) => N((r) => (o) => {
  if ((() => {
    const _ = o.src, g = (h) => {
      let $ = h, y = !0, v;
      for (; y; ) {
        const w = $;
        if (w.tag === "Leaf") {
          y = !1, v = !1;
          continue;
        }
        if (w.tag === "Node") {
          const T = t.compare(_)(w._3);
          if (T === "LT") {
            $ = w._5;
            continue;
          }
          if (T === "GT") {
            $ = w._6;
            continue;
          }
          if (T === "EQ") {
            y = !1, v = !0;
            continue;
          }
        }
        f();
      }
      return v;
    }, p = o.tgt, m = (h) => {
      let $ = h, y = !0, v;
      for (; y; ) {
        const w = $;
        if (w.tag === "Leaf") {
          y = !1, v = !1;
          continue;
        }
        if (w.tag === "Node") {
          const T = t.compare(p)(w._3);
          if (T === "LT") {
            $ = w._5;
            continue;
          }
          if (T === "GT") {
            $ = w._6;
            continue;
          }
          if (T === "EQ") {
            y = !1, v = !0;
            continue;
          }
        }
        f();
      }
      return v;
    };
    return g(e.treeNode) === m(e.treeNode);
  })())
    return r;
  const i = o.tgt, u = ((_) => {
    let g = _, p = !0, m;
    for (; p; ) {
      const h = g;
      if (h.tag === "Leaf") {
        p = !1, m = x;
        continue;
      }
      if (h.tag === "Node") {
        const $ = t.compare(i)(h._3);
        if ($ === "LT") {
          g = h._5;
          continue;
        }
        if ($ === "GT") {
          g = h._6;
          continue;
        }
        if ($ === "EQ") {
          p = !1, m = J("Just", h._4);
          continue;
        }
      }
      f();
    }
    return m;
  })(e.layer), c = o.src, l = ((_) => {
    let g = _, p = !0, m;
    for (; p; ) {
      const h = g;
      if (h.tag === "Leaf") {
        p = !1, m = x;
        continue;
      }
      if (h.tag === "Node") {
        const $ = t.compare(c)(h._3);
        if ($ === "LT") {
          g = h._5;
          continue;
        }
        if ($ === "GT") {
          g = h._6;
          continue;
        }
        if ($ === "EQ") {
          p = !1, m = J("Just", h._4);
          continue;
        }
      }
      f();
    }
    return m;
  })(e.layer), d = (() => {
    if (u.tag === "Nothing") {
      if (l.tag === "Nothing")
        return -o.delta;
      if (l.tag === "Just")
        return -l._1 - o.delta | 0;
      f();
    }
    if (u.tag === "Just") {
      if (l.tag === "Nothing")
        return (u._1 - 0 | 0) - o.delta | 0;
      if (l.tag === "Just")
        return (u._1 - l._1 | 0) - o.delta | 0;
    }
    f();
  })();
  return d < r.slack ? { edge: J("Just", o), slack: d } : r;
})({ edge: x, slack: 1e9 })(n).edge, lv = (t) => {
  const n = an(t)(Xt);
  return (e) => (r) => {
    const o = N((i) => (s) => Wc(i)((() => {
      const c = ((a) => {
        let l = a, d = !0, _;
        for (; d; ) {
          const g = l;
          if (g.tag === "Leaf") {
            d = !1, _ = x;
            continue;
          }
          if (g.tag === "Node") {
            const p = t.compare(s)(g._3);
            if (p === "LT") {
              l = g._5;
              continue;
            }
            if (p === "GT") {
              l = g._6;
              continue;
            }
            if (p === "EQ") {
              d = !1, _ = J("Just", g._4);
              continue;
            }
          }
          f();
        }
        return _;
      })(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    })()))(1e9)(e);
    return n(H((i) => k(
      i,
      (() => {
        const u = ((c) => {
          let a = c, l = !0, d;
          for (; l; ) {
            const _ = a;
            if (_.tag === "Leaf") {
              l = !1, d = x;
              continue;
            }
            if (_.tag === "Node") {
              const g = t.compare(i)(_._3);
              if (g === "LT") {
                a = _._5;
                continue;
              }
              if (g === "GT") {
                a = _._6;
                continue;
              }
              if (g === "EQ") {
                l = !1, d = J("Just", _._4);
                continue;
              }
            }
            f();
          }
          return d;
        })(r);
        if (u.tag === "Nothing")
          return -o;
        if (u.tag === "Just")
          return u._1 - o | 0;
        f();
      })()
    ))(e));
  };
}, G1 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = N((u) => (c) => {
      const a = G1(t)(e)(n.eq(c.src)(r) ? c.tgt : c.src)({ ...u.st, edgeVisited: K(ot)(c.eid)()(u.st.edgeVisited) });
      return { lowest: Wc(u.lowest)(a.lowest), st: a.st };
    })({ lowest: 1e9, st: o })(lt(
      (u) => $r(u.eid)(o.treeEdge) && (n.eq(u.src)(r) || n.eq(u.tgt)(r)) && !$r(u.eid)(o.edgeVisited),
      e
    )), s = Wc(i.lowest)(i.st.postOrder);
    return {
      lowest: s,
      st: {
        ...i.st,
        poID: K(t)(r)(i.st.postOrder)(i.st.poID),
        lowestPoID: K(t)(r)(s)(i.st.lowestPoID),
        postOrder: i.st.postOrder + 1 | 0
      }
    };
  };
}, I1 = (t) => {
  const n = G1(t);
  return (e) => (r) => (o) => 0 < e.length ? n(r)(e[0])({ ...o, edgeVisited: R, postOrder: 1, poID: R, lowestPoID: R }).st : o;
}, gv = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => lt((i) => $r(i.eid)(r.treeEdge) && (n.eq(i.src)(o) || n.eq(i.tgt)(o)), e);
}, dv = (t) => (n) => Zt((e) => {
  const r = Oc(e.eid)(n.cutvalue);
  return $r(e.eid)(n.treeEdge) && (() => {
    if (r.tag === "Nothing")
      return !1;
    if (r.tag === "Just")
      return r._1 < -1e-10;
    f();
  })();
})(t), F1 = (t) => {
  const n = qc(t);
  return (e) => (r) => (o) => {
    const i = 0 < e.length ? J("Just", e[0]) : x;
    if (i.tag === "Nothing")
      return o;
    if (i.tag === "Just") {
      const s = n(r)(i._1)({ ...o, edgeVisited: R, treeNode: R, treeEdge: R });
      if (s.count >= e.length)
        return s.st;
      const u = fv(t)(r)(s.st);
      if (u.tag === "Nothing")
        return s.st;
      if (u.tag === "Just") {
        const c = u._1.tgt, l = ((h) => {
          let $ = h, y = !0, v;
          for (; y; ) {
            const w = $;
            if (w.tag === "Leaf") {
              y = !1, v = x;
              continue;
            }
            if (w.tag === "Node") {
              const T = t.compare(c)(w._3);
              if (T === "LT") {
                $ = w._5;
                continue;
              }
              if (T === "GT") {
                $ = w._6;
                continue;
              }
              if (T === "EQ") {
                y = !1, v = J("Just", w._4);
                continue;
              }
            }
            f();
          }
          return v;
        })(s.st.layer), d = u._1.src, g = ((h) => {
          let $ = h, y = !0, v;
          for (; y; ) {
            const w = $;
            if (w.tag === "Leaf") {
              y = !1, v = x;
              continue;
            }
            if (w.tag === "Node") {
              const T = t.compare(d)(w._3);
              if (T === "LT") {
                $ = w._5;
                continue;
              }
              if (T === "GT") {
                $ = w._6;
                continue;
              }
              if (T === "EQ") {
                y = !1, v = J("Just", w._4);
                continue;
              }
            }
            f();
          }
          return v;
        })(s.st.layer), p = (() => {
          if (l.tag === "Nothing") {
            if (g.tag === "Nothing")
              return -u._1.delta;
            if (g.tag === "Just")
              return -g._1 - u._1.delta | 0;
            f();
          }
          if (l.tag === "Just") {
            if (g.tag === "Nothing")
              return (l._1 - 0 | 0) - u._1.delta | 0;
            if (g.tag === "Just")
              return (l._1 - g._1 | 0) - u._1.delta | 0;
          }
          f();
        })(), m = (() => {
          const h = u._1.tgt;
          return ((y) => {
            let v = y, w = !0, T;
            for (; w; ) {
              const b = v;
              if (b.tag === "Leaf") {
                w = !1, T = !1;
                continue;
              }
              if (b.tag === "Node") {
                const L = t.compare(h)(b._3);
                if (L === "LT") {
                  v = b._5;
                  continue;
                }
                if (L === "GT") {
                  v = b._6;
                  continue;
                }
                if (L === "EQ") {
                  w = !1, T = !0;
                  continue;
                }
              }
              f();
            }
            return T;
          })(s.st.treeNode);
        })() ? -p : p;
        return F1(t)(e)(r)({
          ...s.st,
          layer: N((h) => ($) => ((v) => {
            let w = v, T = !0, b;
            for (; T; ) {
              const L = w;
              if (L.tag === "Leaf") {
                T = !1, b = !1;
                continue;
              }
              if (L.tag === "Node") {
                const C = t.compare($)(L._3);
                if (C === "LT") {
                  w = L._5;
                  continue;
                }
                if (C === "GT") {
                  w = L._6;
                  continue;
                }
                if (C === "EQ") {
                  T = !1, b = !0;
                  continue;
                }
              }
              f();
            }
            return b;
          })(s.st.treeNode) ? K(t)($)((() => {
            const v = ((w) => {
              let T = w, b = !0, L;
              for (; b; ) {
                const C = T;
                if (C.tag === "Leaf") {
                  b = !1, L = x;
                  continue;
                }
                if (C.tag === "Node") {
                  const E = t.compare($)(C._3);
                  if (E === "LT") {
                    T = C._5;
                    continue;
                  }
                  if (E === "GT") {
                    T = C._6;
                    continue;
                  }
                  if (E === "EQ") {
                    b = !1, L = J("Just", C._4);
                    continue;
                  }
                }
                f();
              }
              return L;
            })(s.st.layer);
            if (v.tag === "Nothing")
              return 0 + m | 0;
            if (v.tag === "Just")
              return v._1 + m | 0;
            f();
          })())(h) : h)(s.st.layer)(e)
        });
      }
    }
    f();
  };
}, _v = (t) => (n) => (e) => (r) => N((o) => (i) => {
  if (Ws(t)(r)(i.src)(e) && !Ws(t)(r)(i.tgt)(e)) {
    const s = i.tgt, c = ((g) => {
      let p = g, m = !0, h;
      for (; m; ) {
        const $ = p;
        if ($.tag === "Leaf") {
          m = !1, h = x;
          continue;
        }
        if ($.tag === "Node") {
          const y = t.compare(s)($._3);
          if (y === "LT") {
            p = $._5;
            continue;
          }
          if (y === "GT") {
            p = $._6;
            continue;
          }
          if (y === "EQ") {
            m = !1, h = J("Just", $._4);
            continue;
          }
        }
        f();
      }
      return h;
    })(r.layer), a = i.src, d = ((g) => {
      let p = g, m = !0, h;
      for (; m; ) {
        const $ = p;
        if ($.tag === "Leaf") {
          m = !1, h = x;
          continue;
        }
        if ($.tag === "Node") {
          const y = t.compare(a)($._3);
          if (y === "LT") {
            p = $._5;
            continue;
          }
          if (y === "GT") {
            p = $._6;
            continue;
          }
          if (y === "EQ") {
            m = !1, h = J("Just", $._4);
            continue;
          }
        }
        f();
      }
      return h;
    })(r.layer), _ = (() => {
      if (c.tag === "Nothing") {
        if (d.tag === "Nothing")
          return -i.delta;
        if (d.tag === "Just")
          return -d._1 - i.delta | 0;
        f();
      }
      if (c.tag === "Just") {
        if (d.tag === "Nothing")
          return (c._1 - 0 | 0) - i.delta | 0;
        if (d.tag === "Just")
          return (c._1 - d._1 | 0) - i.delta | 0;
      }
      f();
    })();
    if (_ < o.slack)
      return { edge: J("Just", i), slack: _ };
  }
  return o;
})({ edge: x, slack: 1e9 })(n).edge, hv = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => (i) => {
    const s = i.tgt, u = i.src;
    return N((c) => (a) => {
      if ((() => {
        const l = Oc(a.eid)(r.cutvalue);
        if (l.tag === "Just")
          return !0;
        if (l.tag === "Nothing")
          return !1;
        f();
      })()) {
        const l = Oc(a.eid)(r.cutvalue), d = (() => {
          if (l.tag === "Nothing")
            return 0;
          if (l.tag === "Just")
            return l._1;
          f();
        })();
        return n.eq(u)(a.src) || n.eq(s)(a.tgt) ? c - (d - a.weight) : c + (d - a.weight);
      }
      return n.eq(o)(u) ? n.eq(a.src)(o) ? c + a.weight : c - a.weight : n.eq(a.src)(o) ? c - a.weight : c + a.weight;
    })(i.weight)(lt((c) => c.eid !== i.eid && (n.eq(c.src)(o) || n.eq(c.tgt)(o)), e));
  };
}, pv = (t) => {
  const n = hv(t);
  return (e) => (r) => (o) => {
    const i = (u, c, a) => {
      const d = ((_) => {
        let g = _, p = !0, m;
        for (; p; ) {
          const h = g;
          if (h.tag === "Leaf") {
            p = !1, m = x;
            continue;
          }
          if (h.tag === "Node") {
            const $ = t.compare(u)(h._3);
            if ($ === "LT") {
              g = h._5;
              continue;
            }
            if ($ === "GT") {
              g = h._6;
              continue;
            }
            if ($ === "EQ") {
              p = !1, m = J("Just", h._4);
              continue;
            }
          }
          f();
        }
        return m;
      })(a);
      if (d.tag === "Just")
        return K(t)(u)(lt((_) => _.eid !== c.eid, d._1))(a);
      if (d.tag === "Nothing")
        return a;
      f();
    };
    return ((u) => (c) => {
      let a = u, l = c, d = !0, _;
      for (; d; ) {
        const g = a, p = l, h = ((y) => {
          let v = y, w = !0, T;
          for (; w; ) {
            const b = v;
            if (b.tag === "Leaf") {
              w = !1, T = x;
              continue;
            }
            if (b.tag === "Node") {
              const L = t.compare(p)(b._3);
              if (L === "LT") {
                v = b._5;
                continue;
              }
              if (L === "GT") {
                v = b._6;
                continue;
              }
              if (L === "EQ") {
                w = !1, T = J("Just", b._4);
                continue;
              }
            }
            f();
          }
          return T;
        })(g.unknown), $ = (() => {
          if (h.tag === "Nothing")
            return [];
          if (h.tag === "Just")
            return h._1;
          f();
        })();
        if ($.length === 1) {
          const y = t.Eq0().eq($[0].src)(p) ? $[0].tgt : $[0].src;
          a = {
            unknown: i(p, $[0], i(y, $[0], g.unknown)),
            cutvalue: K(ot)($[0].eid)(n(e)(g)(p)($[0]))(g.cutvalue)
          }, l = y;
          continue;
        }
        d = !1, _ = g;
      }
      return _;
    })(r)(o);
  };
}, R1 = (t) => {
  const n = t.Eq0(), e = t.Eq0(), r = { eq: (a) => (l) => a.delta === l.delta && a.eid === l.eid && e.eq(a.src)(l.src) && n.eq(a.tgt)(l.tgt) && a.weight === l.weight }, o = {
    compare: (a) => (l) => {
      const d = ot.compare(a.delta)(l.delta);
      if (d === "LT" || d === "GT" || d !== "EQ")
        return d;
      const _ = ot.compare(a.eid)(l.eid);
      if (_ === "LT" || _ === "GT" || _ !== "EQ")
        return _;
      const g = t.compare(a.src)(l.src);
      if (g === "LT" || g === "GT" || g !== "EQ")
        return g;
      const p = t.compare(a.tgt)(l.tgt);
      if (p === "LT" || p === "GT" || p !== "EQ")
        return p;
      const m = rt.compare(a.weight)(l.weight);
      return m === "LT" || m === "GT" || m !== "EQ" ? m : Un;
    },
    Eq0: () => r
  }, i = N((a) => (l) => K(o)(l)()(a))(R), s = gv(t), u = an(t)(Xt), c = pv(t);
  return (a) => (l) => (d) => {
    const _ = {
      unknown: u(H((g) => k(
        g,
        Dt(_e.foldr, i(s(l)(d)(g)))
      ))(a)),
      cutvalue: R
    };
    return {
      ...d,
      cutvalue: N(c(l))(_)(lt(
        (g) => {
          const m = ((h) => {
            let $ = h, y = !0, v;
            for (; y; ) {
              const w = $;
              if (w.tag === "Leaf") {
                y = !1, v = x;
                continue;
              }
              if (w.tag === "Node") {
                const T = t.compare(g)(w._3);
                if (T === "LT") {
                  $ = w._5;
                  continue;
                }
                if (T === "GT") {
                  $ = w._6;
                  continue;
                }
                if (T === "EQ") {
                  y = !1, v = J("Just", w._4);
                  continue;
                }
              }
              f();
            }
            return v;
          })(_.unknown);
          if (m.tag === "Nothing")
            return !1;
          if (m.tag === "Just")
            return m._1.length === 1;
          f();
        },
        a
      )).cutvalue
    };
  };
}, mv = (t) => {
  const n = I1(t), e = R1(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const c = { ...u, treeEdge: K(ot)(s.eid)()($i(ot)(i.eid)(u.treeEdge)) }, a = s.tgt, d = (($) => {
      let y = $, v = !0, w;
      for (; v; ) {
        const T = y;
        if (T.tag === "Leaf") {
          v = !1, w = x;
          continue;
        }
        if (T.tag === "Node") {
          const b = t.compare(a)(T._3);
          if (b === "LT") {
            y = T._5;
            continue;
          }
          if (b === "GT") {
            y = T._6;
            continue;
          }
          if (b === "EQ") {
            v = !1, w = J("Just", T._4);
            continue;
          }
        }
        f();
      }
      return w;
    })(c.layer), _ = s.src, p = (($) => {
      let y = $, v = !0, w;
      for (; v; ) {
        const T = y;
        if (T.tag === "Leaf") {
          v = !1, w = x;
          continue;
        }
        if (T.tag === "Node") {
          const b = t.compare(_)(T._3);
          if (b === "LT") {
            y = T._5;
            continue;
          }
          if (b === "GT") {
            y = T._6;
            continue;
          }
          if (b === "EQ") {
            v = !1, w = J("Just", T._4);
            continue;
          }
        }
        f();
      }
      return w;
    })(c.layer), m = (() => {
      if (d.tag === "Nothing") {
        if (p.tag === "Nothing")
          return -s.delta;
        if (p.tag === "Just")
          return -p._1 - s.delta | 0;
        f();
      }
      if (d.tag === "Just") {
        if (p.tag === "Nothing")
          return (d._1 - 0 | 0) - s.delta | 0;
        if (p.tag === "Just")
          return (d._1 - p._1 | 0) - s.delta | 0;
      }
      f();
    })(), h = Ws(t)(c)(s.tgt)(i) ? m : -m;
    return e(r)(o)(n(r)(o)({
      ...c,
      layer: N(($) => (y) => Ws(t)(c)(y)(i) ? $ : K(t)(y)((() => {
        const w = ((T) => {
          let b = T, L = !0, C;
          for (; L; ) {
            const E = b;
            if (E.tag === "Leaf") {
              L = !1, C = x;
              continue;
            }
            if (E.tag === "Node") {
              const B = t.compare(y)(E._3);
              if (B === "LT") {
                b = E._5;
                continue;
              }
              if (B === "GT") {
                b = E._6;
                continue;
              }
              if (B === "EQ") {
                L = !1, C = J("Just", E._4);
                continue;
              }
            }
            f();
          }
          return C;
        })(c.layer);
        if (w.tag === "Nothing")
          return 0 + h | 0;
        if (w.tag === "Just")
          return w._1 + h | 0;
        f();
      })())($))(c.layer)(r)
    }));
  };
}, $v = (t) => {
  const n = mv(t);
  return (e) => (r) => (o) => (i) => ((u) => (c) => {
    let a = u, l = c, d = !0, _;
    for (; d; ) {
      const g = a, p = l;
      if (g === 0) {
        d = !1, _ = p;
        continue;
      }
      const m = dv(o)(p);
      if (m.tag === "Nothing") {
        d = !1, _ = p;
        continue;
      }
      if (m.tag === "Just") {
        const h = _v(t)(o)(m._1)(p);
        if (h.tag === "Nothing") {
          d = !1, _ = p;
          continue;
        }
        if (h.tag === "Just") {
          a = g - 1 | 0, l = n(r)(o)(m._1)(h._1)(p);
          continue;
        }
      }
      f();
    }
    return _;
  })(e)(i);
}, yv = (t) => {
  const n = R1(t), e = I1(t), r = F1(t);
  return (o) => (i) => (s) => n(o)(i)(e(o)(i)(r(o)(i)(s)));
}, A0 = (t) => (n) => N((e) => (r) => At(t)(_n)(n(r))([r])(e))(R), vv = (t) => {
  const n = an(t)(Xt);
  return (e) => (r) => (o) => {
    const i = (c) => (a) => (l) => (d) => {
      let _ = c, g = a, p = l, m = d, h = !0, $;
      for (; h; ) {
        const y = _, v = g, w = p, T = m, b = zt((L) => x, (L) => (C) => J("Just", { head: L, tail: C }), w);
        if (b.tag === "Nothing") {
          h = !1, $ = T;
          continue;
        }
        if (b.tag === "Just") {
          const L = b._1.head, E = ((F) => {
            let z = F, V = !0, Z;
            for (; V; ) {
              const Y = z;
              if (Y.tag === "Leaf") {
                V = !1, Z = x;
                continue;
              }
              if (Y.tag === "Node") {
                const W = t.compare(L)(Y._3);
                if (W === "LT") {
                  z = Y._5;
                  continue;
                }
                if (W === "GT") {
                  z = Y._6;
                  continue;
                }
                if (W === "EQ") {
                  V = !1, Z = J("Just", Y._4);
                  continue;
                }
              }
              f();
            }
            return Z;
          })(T.layer), B = (() => {
            if (E.tag === "Nothing")
              return 0;
            if (E.tag === "Just")
              return E._1;
            f();
          })(), D = N((F) => (z) => {
            const V = z.tgt, Y = ((A) => {
              let P = A, O = !0, G;
              for (; O; ) {
                const Q = P;
                if (Q.tag === "Leaf") {
                  O = !1, G = x;
                  continue;
                }
                if (Q.tag === "Node") {
                  const X = t.compare(V)(Q._3);
                  if (X === "LT") {
                    P = Q._5;
                    continue;
                  }
                  if (X === "GT") {
                    P = Q._6;
                    continue;
                  }
                  if (X === "EQ") {
                    O = !1, G = J("Just", Q._4);
                    continue;
                  }
                }
                f();
              }
              return G;
            })(F.incident), W = (() => {
              if (Y.tag === "Nothing")
                return -1;
              if (Y.tag === "Just")
                return Y._1 - 1 | 0;
              f();
            })();
            return {
              st: {
                ...F.st,
                layer: K(t)(z.tgt)(sv((() => {
                  const A = z.tgt, O = ((G) => {
                    let Q = G, X = !0, tt;
                    for (; X; ) {
                      const U = Q;
                      if (U.tag === "Leaf") {
                        X = !1, tt = x;
                        continue;
                      }
                      if (U.tag === "Node") {
                        const q = t.compare(A)(U._3);
                        if (q === "LT") {
                          Q = U._5;
                          continue;
                        }
                        if (q === "GT") {
                          Q = U._6;
                          continue;
                        }
                        if (q === "EQ") {
                          X = !1, tt = J("Just", U._4);
                          continue;
                        }
                      }
                      f();
                    }
                    return tt;
                  })(F.st.layer);
                  if (O.tag === "Nothing")
                    return 0;
                  if (O.tag === "Just")
                    return O._1;
                  f();
                })())(B + z.delta | 0))(F.st.layer)
              },
              incident: K(t)(z.tgt)(W)(F.incident),
              queue: W === 0 ? [...F.queue, z.tgt] : F.queue
            };
          })({ st: T, incident: v, queue: b._1.tail })((() => {
            const z = ((V) => {
              let Z = V, Y = !0, W;
              for (; Y; ) {
                const A = Z;
                if (A.tag === "Leaf") {
                  Y = !1, W = x;
                  continue;
                }
                if (A.tag === "Node") {
                  const P = t.compare(L)(A._3);
                  if (P === "LT") {
                    Z = A._5;
                    continue;
                  }
                  if (P === "GT") {
                    Z = A._6;
                    continue;
                  }
                  if (P === "EQ") {
                    Y = !1, W = J("Just", A._4);
                    continue;
                  }
                }
                f();
              }
              return W;
            })(y);
            if (z.tag === "Nothing")
              return [];
            if (z.tag === "Just")
              return z._1;
            f();
          })());
          _ = y, g = D.incident, p = D.queue, m = D.st;
          continue;
        }
        f();
      }
      return $;
    }, s = A0(t)((c) => c.tgt)(r), u = n(H((c) => k(
      c,
      (() => {
        const l = ((d) => {
          let _ = d, g = !0, p;
          for (; g; ) {
            const m = _;
            if (m.tag === "Leaf") {
              g = !1, p = x;
              continue;
            }
            if (m.tag === "Node") {
              const h = t.compare(c)(m._3);
              if (h === "LT") {
                _ = m._5;
                continue;
              }
              if (h === "GT") {
                _ = m._6;
                continue;
              }
              if (h === "EQ") {
                g = !1, p = J("Just", m._4);
                continue;
              }
            }
            f();
          }
          return p;
        })(s);
        if (l.tag === "Nothing")
          return 0;
        if (l.tag === "Just")
          return l._1.length;
        f();
      })()
    ))(e));
    return i(A0(t)((c) => c.src)(r))(u)(lt(
      (c) => {
        const l = ((d) => {
          let _ = d, g = !0, p;
          for (; g; ) {
            const m = _;
            if (m.tag === "Leaf") {
              g = !1, p = x;
              continue;
            }
            if (m.tag === "Node") {
              const h = t.compare(c)(m._3);
              if (h === "LT") {
                _ = m._5;
                continue;
              }
              if (h === "GT") {
                _ = m._6;
                continue;
              }
              if (h === "EQ") {
                g = !1, p = J("Just", m._4);
                continue;
              }
            }
            f();
          }
          return p;
        })(u);
        if (l.tag === "Nothing")
          return !0;
        if (l.tag === "Just")
          return l._1 === 0;
        f();
      },
      e
    ))(o);
  };
}, xv = (t) => {
  const n = av(t), e = vv(t), r = yv(t), o = $v(t);
  return (i) => (s) => {
    const u = e(i)(s)(n(i));
    return s.length === 0 ? u.layer : o(4 * i.length | 0)(i)(s)(r(i)(s)(u)).layer;
  };
}, B1 = (t) => {
  const n = lv(t), e = xv(t), r = uv(t);
  return (o) => (i) => {
    if (o.length === 0)
      return R;
    if (o.length < 40)
      return n(o)(e(o)(i));
    const s = r(o)(i);
    return n(o)(cv(t)(s.removed)(e(s.coreNodes)(s.coreEdges)));
  };
}, z1 = (t) => (e) => {
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
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Xc = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Nv = /* @__PURE__ */ B1(ot), Ji = (t) => (n) => ({ ...n, edges: [...n.edges, { src: t.src, tgt: t.tgt, delta: t.delta, weight: t.weight, eid: n.nextEid }], nextEid: n.nextEid + 1 | 0 }), wv = (t) => (n) => (e) => {
  if (e.cGroup.tag === "Nothing")
    return n;
  if (e.cGroup.tag === "Just") {
    const r = M((() => {
      const o = z1(e.cGroup._1)(t);
      if (o.tag === "Nothing")
        return 0;
      if (o.tag === "Just")
        return o._1;
      f();
    })());
    return me(e.id)((o) => ({ ...o, hitbox: { ...o.hitbox, x: r + o.cGroupOffset.x } }))(n);
  }
  f();
}, Tv = (t) => (n) => ({
  ...n,
  cGraph: N(wv(t))(n.cGraph)((() => {
    const e = n.cGraph;
    return vt((r) => en(r)(e.cNodes))(e.cNodeOrder);
  })())
}), Jv = (t) => (n) => (e) => (r) => (o) => {
  const i = Nn(hu(n.cGroupOffset.x - t.cGroupOffset.x));
  return Ji({ src: o.nextNodeId, tgt: r, delta: Xc(0)(-i), weight: 1 })(Ji({ src: o.nextNodeId, tgt: e, delta: Xc(0)(i), weight: 1 })({
    ...o,
    nodes: [...o.nodes, o.nextNodeId],
    nextNodeId: o.nextNodeId + 1 | 0
  }));
}, bv = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = Xc(0)(Nn(hu(e.cGroupOffset.x + e.hitbox.width + (n.direction === "LEFT" || n.direction === "RIGHT" ? n.spacingsHandler.horizontalSpacing(e)(r) : n.spacingsHandler.verticalSpacing(e)(r)) - r.cGroupOffset.x)));
  return t.sameEdgeVerticalSegments(e)(r) ? Jv(e)(r)(o)(i)(s) : Ji({ src: o, tgt: i, delta: u, weight: t.vsLNodePair(e)(r) ? 2 : 1 })(s);
}, kv = (t) => (n) => (e) => (r) => (o) => {
  const i = en(o)(n.cGraph.cNodes);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just")
    return (e.cGroup.tag === "Nothing" ? i._1.cGroup.tag === "Nothing" : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" && e.cGroup._1 === i._1.cGroup._1) ? r : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" ? bv(t)(n)(e)(i._1)(e.cGroup._1)(i._1.cGroup._1)(r) : r;
  f();
}, Lv = (t) => (n) => (e) => (r) => N(kv(t)(n)(r))(e)(r.constraints), Ev = (t) => (n) => Ji({ src: n.srcGroup, tgt: n.tgtGroup, delta: n.delta, weight: n.weight })(t), Sv = (t) => {
  const n = N((o) => (i) => At(ot)(pn)(i.tgt)(1)(o))(R)(t.edges), e = lt(
    (o) => {
      const i = z1(o)(n);
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
  return N((o) => (i) => Ji({ src: r, tgt: i, delta: 1, weight: 0 })(o))({ ...t, nodes: [...t.nodes, r], nextNodeId: r + 1 | 0 })(e);
}, Cv = (t) => (n) => {
  const e = Sv(N(Ev)(N(Lv(t)(n))({
    nodes: n.cGraph.cGroupOrder,
    edges: [],
    nextNodeId: n.cGraph.nextCGroupId,
    nextEid: 0
  })((() => {
    const r = n.cGraph;
    return vt((o) => en(o)(r.cNodes))(r.cNodeOrder);
  })()))(t.edgeLengthEdges(n.cGraph)));
  return { nodes: e.nodes, edges: e.edges };
}, Av = (t) => (n) => {
  const e = Cv(t)(n);
  return Tv(Nv(e.nodes)(e.edges))(n);
}, D1 = (t) => t, un = /* @__PURE__ */ D1("H"), cn = /* @__PURE__ */ D1("V"), Pv = (t) => k(t._2, t._1), Q1 = (t) => ({ ...t, position: k(t.position._2, t.position._1), size: k(t.size._2, t.size._1) }), Gv = (t) => ({
  start: k(t.start._2, t.start._1),
  end: k(t.end._2, t.end._1),
  direction: (() => {
    if (t.direction === "H")
      return cn;
    if (t.direction === "V")
      return un;
    f();
  })()
}), H1 = (t) => ({ ...t, segments: H(Gv)(t.segments), bends: H(Pv)(t.bends) }), Iv = (t) => ({ nodes: H(Q1)(t.nodes), edges: t.edges, paths: H(H1)(t.paths), ports: t.ports }), Fv = { nodeNode: 8, edgeNode: 4, edgeEdge: 10 }, Rv = (t) => (n) => ({
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
}), Bv = (t) => (n) => Av(n), zv = (t) => (n) => (e) => {
  const r = Iv(e), o = iv(r), i = tv(o)(P1(r)), s = nv(k1(cf)(T2({
    ...b2(o.cGraph),
    compactionAlgorithm: J("Just", Bv()(i)),
    constraintAlgorithm: J("Just", B2(n.edgeEdge)),
    spacingsHandler: Rv(n)(i)
  })).cGraph)({ nodes: r.nodes, edges: r.edges, paths: r.paths });
  return { nodes: H(Q1)(s.nodes), edges: H(H1)(s.edges) };
}, W1 = (t) => t, yo = /* @__PURE__ */ an(ot)(Xt), Rt = (t) => (e) => {
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
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, P0 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, pt = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, $t = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
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
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Dv = (t) => (n) => {
  const e = ot.compare(t._1)(n._1);
  return e === "LT" ? Cn : e === "GT" ? An : ot.compare(t._2)(n._2);
}, No = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Qv = /* @__PURE__ */ (() => {
  const t = ue.unfoldr(Ee);
  return (n) => t(se("IterNode", n, Le));
})(), Hv = (t) => t, G0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Wv = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ds = /* @__PURE__ */ W1("Regular"), _s = /* @__PURE__ */ W1("Critical"), O1 = (t) => (n) => {
  const e = N((s) => (u) => K(I)(u.node)(u)(s))(R)(n), r = 1.25 * M(4), o = (s, u, c) => ((l) => (d) => (_) => {
    let g = l, p = d, m = _, h = !0, $;
    for (; h; ) {
      const y = g, v = p, w = m;
      if (w.critical) {
        h = !1, $ = w;
        continue;
      }
      const T = zt((L) => x, (L) => (C) => J("Just", { head: L, tail: C }), y), b = zt((L) => x, (L) => (C) => J("Just", { head: L, tail: C }), v);
      if (T.tag === "Just" && b.tag === "Just") {
        const L = T._1.head > b._1.head - s && T._1.head < b._1.head + s ? { ...w, critical: !0 } : T._1.head > b._1.head - r && T._1.head < b._1.head + r ? { ...w, conflicts: w.conflicts + 1 | 0 } : w;
        if (L.critical) {
          h = !1, $ = L;
          continue;
        }
        if (T._1.head <= b._1.head) {
          g = T._1.tail, p = v, m = L;
          continue;
        }
        g = y, p = b._1.tail, m = L;
        continue;
      }
      h = !1, $ = w;
    }
    return $;
  })(u)(c)({ conflicts: 0, critical: !1 }), i = (s, u, c) => {
    if ($t(N($t)(-1e18)(u.incoming))(N($t)(-1e18)(u.outgoing)) - pt(N(pt)(1e18)(u.incoming))(N(pt)(1e18)(u.outgoing)) < 1e-3 || $t(N($t)(-1e18)(c.incoming))(N($t)(-1e18)(c.outgoing)) - pt(N(pt)(1e18)(c.incoming))(N(pt)(1e18)(c.outgoing)) < 1e-3)
      return [];
    const a = o(s, u.outgoing, c.incoming), l = o(s, c.outgoing, u.incoming);
    if (a.critical || l.critical)
      return [...a.critical ? [{ src: c.id, tgt: u.id, weight: 1, kind: _s }] : [], ...l.critical ? [{ src: u.id, tgt: c.id, weight: 1, kind: _s }] : []];
    const d = pt(N(pt)(1e18)(u.incoming))(N(pt)(1e18)(u.outgoing)), _ = $t(N($t)(-1e18)(u.incoming))(N($t)(-1e18)(u.outgoing)), g = pt(N(pt)(1e18)(c.incoming))(N(pt)(1e18)(c.outgoing)), p = $t(N($t)(-1e18)(c.incoming))(N($t)(-1e18)(c.outgoing)), m = (1 * a.conflicts | 0) + (16 * (N(($) => (y) => y > p ? $ : y >= g ? $ + 1 | 0 : $)(0)(u.outgoing) + N(($) => (y) => y > _ ? $ : y >= d ? $ + 1 | 0 : $)(0)(c.incoming) | 0) | 0) | 0, h = (1 * l.conflicts | 0) + (16 * (N(($) => (y) => y > _ ? $ : y >= d ? $ + 1 | 0 : $)(0)(c.outgoing) + N(($) => (y) => y > p ? $ : y >= g ? $ + 1 | 0 : $)(0)(u.incoming) | 0) | 0) | 0;
    return m < h ? [{ src: u.id, tgt: c.id, weight: h - m | 0, kind: ds }] : m > h ? [{ src: c.id, tgt: u.id, weight: m - h | 0, kind: ds }] : m > 0 ? [{ src: u.id, tgt: c.id, weight: 0, kind: ds }, { src: c.id, tgt: u.id, weight: 0, kind: ds }] : [];
  };
  return N((s) => (u) => N((c) => (a) => K(I)(a._1)(a._2)(c))(s)((() => {
    const c = N((F) => (z) => {
      const V = z.edge.from.node + "|" + (() => {
        if (z.edge.from.port.tag === "Just")
          return z.edge.from.port._1;
        if (z.edge.from.port.tag === "Nothing")
          return "_auto_" + z.edge.id;
        f();
      })(), Z = G0(V)(F.entries);
      if (Z.tag === "Nothing")
        return {
          ...F,
          entries: K(I)(V)({
            id: 0,
            members: [z.edge.id],
            incoming: [z.fromPos._1],
            outgoing: [z.toPos._1],
            slot: 0,
            mark: 0,
            splitBy: x,
            splitPartner: x
          })(F.entries),
          order: [...F.order, V]
        };
      if (Z.tag === "Just")
        return {
          ...F,
          entries: K(I)(V)({
            ...Z._1,
            members: [...Z._1.members, z.edge.id],
            incoming: [...jr((Y) => Y < z.fromPos._1)(Z._1.incoming).init, z.fromPos._1, ...jr((Y) => Y <= z.fromPos._1)(Z._1.incoming).rest],
            outgoing: [...jr((Y) => Y < z.toPos._1)(Z._1.outgoing).init, z.toPos._1, ...jr((Y) => Y <= z.toPos._1)(Z._1.outgoing).rest]
          })(F.entries)
        };
      f();
    })({ entries: R, order: [] })(u._2), a = Bt((F) => (z) => ({ ...z, id: F }))(vt((F) => G0(F)(c.entries))(c.order));
    if (a.length === 0)
      return [];
    const l = N((F) => (z) => F.prev.tag === "Just" && z - F.prev._1 < 1e-9 ? F : { prev: J("Just", z), out: [...F.out, z] })({ prev: x, out: [] })(It(rt.compare)([
      ...xt(a)((F) => F.incoming),
      ...xt(a)((F) => F.outgoing)
    ])).out, d = l.length < 2 ? 0.2 * r : 0.2 * N((F) => (z) => {
      if (F.prev.tag === "Nothing")
        return { prev: J("Just", z), mn: F.mn };
      if (F.prev.tag === "Just")
        return { prev: J("Just", z), mn: pt(F.mn)(z - F.prev._1) };
      f();
    })({ prev: x, mn: 1e18 })(l).mn, _ = {
      segments: a,
      deps: (() => {
        const F = a.length;
        return xt(xt(Ht(0, F - 2 | 0))((z) => xt(Ht(z + 1 | 0, F - 1 | 0))((V) => [
          k(z, V)
        ])))((z) => z._1 >= 0 && z._1 < a.length ? z._2 >= 0 && z._2 < a.length ? i(d, a[z._1], a[z._2]) : [] : []);
      })()
    }, g = lt(
      (F) => {
        if (F.kind === "Critical")
          return !0;
        if (F.kind === "Regular")
          return !1;
        f();
      },
      _.deps
    ), p = (() => {
      if (g.length < 2)
        return _;
      const F = yo((() => {
        const W = _.segments;
        return H((A) => k(A.id, A.mark))((() => {
          const A = W.length, P = (Q) => {
            let X = Q, tt = !0, U;
            for (; tt; ) {
              const q = X, j = Zt((et) => {
                const nt = Rt(et)(q.inWeight);
                if (nt.tag === "Nothing")
                  return !0;
                if (nt.tag === "Just")
                  return nt._1 === 0;
                f();
              })(q.remaining);
              if (j.tag === "Nothing") {
                tt = !1, U = q;
                continue;
              }
              if (j.tag === "Just") {
                const et = j._1;
                X = {
                  ...q,
                  inWeight: N((nt) => (ft) => At(ot)(pn)(ft.tgt)(-ft.weight)(nt))(q.inWeight)((() => {
                    const nt = Rt(et)(q.depsBySrc);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })()),
                  marks: K(ot)(et)(q.nextSource)(q.marks),
                  nextSource: q.nextSource + 1 | 0,
                  outWeight: N((nt) => (ft) => At(ot)(pn)(ft.src)(-ft.weight)(nt))(q.outWeight)((() => {
                    const nt = Rt(et)(q.depsByTgt);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })()),
                  remaining: lt((nt) => nt !== et, q.remaining)
                };
                continue;
              }
              f();
            }
            return U;
          }, O = (Q) => {
            let X = Q, tt = !0, U;
            for (; tt; ) {
              const q = X, j = Zt((et) => {
                const nt = Rt(et)(q.outWeight);
                if (nt.tag === "Nothing")
                  return !0;
                if (nt.tag === "Just")
                  return nt._1 === 0;
                f();
              })(q.remaining);
              if (j.tag === "Nothing") {
                tt = !1, U = q;
                continue;
              }
              if (j.tag === "Just") {
                const et = j._1;
                X = {
                  ...q,
                  inWeight: N((nt) => (ft) => At(ot)(pn)(ft.tgt)(-ft.weight)(nt))(q.inWeight)((() => {
                    const nt = Rt(et)(q.depsBySrc);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })()),
                  marks: K(ot)(et)(q.nextSink)(q.marks),
                  nextSink: q.nextSink - 1 | 0,
                  outWeight: N((nt) => (ft) => At(ot)(pn)(ft.src)(-ft.weight)(nt))(q.outWeight)((() => {
                    const nt = Rt(et)(q.depsByTgt);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })()),
                  remaining: lt((nt) => nt !== et, q.remaining)
                };
                continue;
              }
              f();
            }
            return U;
          };
          return ((Q) => {
            let X = Q, tt = !0, U;
            for (; tt; ) {
              const j = P(O(X));
              if (j.remaining.length === 0) {
                tt = !1, U = H((et) => {
                  const nt = Rt(et.id)(j.marks), ft = (() => {
                    if (nt.tag === "Nothing")
                      return et.id;
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })();
                  return { ...et, mark: ft < A ? (ft + A | 0) + 1 | 0 : ft };
                })(W);
                continue;
              }
              X = (() => {
                const et = (ft) => {
                  const ct = Rt(ft)(j.outWeight), dt = Rt(ft)(j.inWeight);
                  return (() => {
                    if (ct.tag === "Nothing")
                      return 0;
                    if (ct.tag === "Just")
                      return ct._1;
                    f();
                  })() - (() => {
                    if (dt.tag === "Nothing")
                      return 0;
                    if (dt.tag === "Just")
                      return dt._1;
                    f();
                  })() | 0;
                }, nt = It((ft) => (ct) => ot.compare(et(ct))(et(ft)))(j.remaining);
                if (0 < nt.length) {
                  const ft = nt[0];
                  return {
                    ...j,
                    inWeight: N((ct) => (dt) => At(ot)(pn)(dt.tgt)(-dt.weight)(ct))(j.inWeight)((() => {
                      const ct = Rt(ft)(j.depsBySrc);
                      if (ct.tag === "Nothing")
                        return [];
                      if (ct.tag === "Just")
                        return ct._1;
                      f();
                    })()),
                    marks: K(ot)(ft)(j.nextSource)(j.marks),
                    nextSource: j.nextSource + 1 | 0,
                    outWeight: N((ct) => (dt) => At(ot)(pn)(dt.src)(-dt.weight)(ct))(j.outWeight)((() => {
                      const ct = Rt(ft)(j.depsByTgt);
                      if (ct.tag === "Nothing")
                        return [];
                      if (ct.tag === "Just")
                        return ct._1;
                      f();
                    })()),
                    remaining: lt((ct) => ct !== ft, j.remaining)
                  };
                }
                return j;
              })();
            }
            return U;
          })({
            remaining: H((Q) => Q.id)(W),
            marks: R,
            inWeight: N((Q) => (X) => At(ot)(pn)(X.tgt)(X.weight)(Q))(R)(g),
            outWeight: N((Q) => (X) => At(ot)(pn)(X.src)(X.weight)(Q))(R)(g),
            depsBySrc: N((Q) => (X) => At(ot)(_n)(X.src)([X])(Q))(R)(g),
            depsByTgt: N((Q) => (X) => At(ot)(_n)(X.tgt)([X])(Q))(R)(g),
            nextSink: A - 1 | 0,
            nextSource: A + 1 | 0
          });
        })());
      })()), z = lt(
        (W) => {
          const A = Rt(W.src)(F), P = Rt(W.tgt)(F);
          return (() => {
            if (A.tag === "Nothing")
              return 0;
            if (A.tag === "Just")
              return A._1;
            f();
          })() > (() => {
            if (P.tag === "Nothing")
              return 0;
            if (P.tag === "Just")
              return P._1;
            f();
          })();
        },
        g
      );
      if (z.length === 0)
        return _;
      const V = N((W) => (A) => {
        if (ae(Go)(A.src)(W.decisions) || ae(Go)(A.tgt)(W.decisions))
          return W;
        const P = Rt(A.src)(W.segMap), O = Rt(A.tgt)(W.segMap);
        if (P.tag === "Just" && O.tag === "Just") {
          const G = (P._1.incoming.length + P._1.outgoing.length | 0) > 2 && (O._1.incoming.length + O._1.outgoing.length | 0) <= 2, Q = G ? O._1 : P._1;
          return {
            decisions: [...W.decisions, Q.id],
            segMap: K(ot)(Q.id)({ ...Q, splitBy: J("Just", G ? P._1.id : O._1.id) })(W.segMap)
          };
        }
        return W;
      })({ decisions: [], segMap: yo(H((W) => k(W.id, W))(_.segments)) })(z), Z = V.segMap, Y = N((W) => (A) => {
        const P = pt(N(pt)(1e18)(A.incoming))(N(pt)(1e18)(A.outgoing)), O = $t(N($t)(-1e18)(A.incoming))(N($t)(-1e18)(A.outgoing)), G = lt(
          (q) => q.a.startPosition <= O && q.a.endPosition >= P,
          Bt((q) => (j) => ({ i: q, a: j }))(W.freeAreas)
        );
        if (G.length === 0) {
          const q = {
            ...A,
            incoming: It(rt.compare)(A.incoming),
            outgoing: It(rt.compare)([(P + O) / 2]),
            splitPartner: J("Just", W.nextId)
          }, j = {
            id: W.nextId,
            incoming: It(rt.compare)([(P + O) / 2]),
            mark: 0,
            members: A.members,
            outgoing: It(rt.compare)(A.outgoing),
            slot: 0,
            splitBy: x,
            splitPartner: J("Just", A.id)
          };
          return {
            segMap: K(ot)(j.id)(j)(K(ot)(q.id)(q)(W.segMap)),
            freeAreas: W.freeAreas,
            nextId: W.nextId + 1 | 0
          };
        }
        const Q = 0 < G.length ? J("Just", G[0]) : x, X = (() => {
          if (Q.tag === "Nothing")
            return { i: 0, a: { startPosition: 0, endPosition: 0, size: 0 } };
          if (Q.tag === "Just") {
            if (G.length === 1)
              return Q._1;
            const q = H((j) => ({
              c: j,
              rating: (() => {
                const et = (j.a.startPosition + j.a.endPosition) / 2, nt = [et], ft = [et], ct = N((() => {
                  const Gt = W.segMap;
                  return (Jt) => (Yt) => {
                    const _t = Rt(Yt.tgt)(Gt);
                    if (_t.tag === "Nothing")
                      return Jt;
                    if (_t.tag === "Just") {
                      const Tt = pt(N(pt)(1e18)(_t._1.incoming))(N(pt)(1e18)(_t._1.outgoing)), ht = $t(N($t)(-1e18)(_t._1.incoming))(N($t)(-1e18)(_t._1.outgoing)), mt = pt(N(pt)(1e18)(A.incoming))(N(pt)(1e18)(nt)), st = (() => {
                        const Pt = $t(N($t)(-1e18)(A.incoming))(N($t)(-1e18)(nt)), Lt = N((qt) => (gn) => gn > ht ? qt : gn >= Tt ? qt + 1 | 0 : qt)(0)(nt) + N((qt) => (gn) => gn > Pt ? qt : gn >= mt ? qt + 1 | 0 : qt)(0)(_t._1.incoming) | 0, te = pt(N(pt)(1e18)(A.incoming))(N(pt)(1e18)(nt)), Rn = $t(N($t)(-1e18)(A.incoming))(N($t)(-1e18)(nt)), Bn = pt(N(pt)(1e18)(_t._1.incoming))(N(pt)(1e18)(_t._1.outgoing)), wn = $t(N($t)(-1e18)(_t._1.incoming))(N($t)(-1e18)(_t._1.outgoing)), Se = N((qt) => (gn) => gn > Rn ? qt : gn >= te ? qt + 1 | 0 : qt)(0)(_t._1.outgoing) + N((qt) => (gn) => gn > wn ? qt : gn >= Bn ? qt + 1 | 0 : qt)(0)(A.incoming) | 0;
                        return Lt === Se ? Lt > 0 ? { ...Jt, deps: Jt.deps + 2 | 0, crossings: Jt.crossings + Lt | 0 } : Jt : { ...Jt, deps: Jt.deps + 1 | 0, crossings: Jt.crossings + No(Lt)(Se) | 0 };
                      })(), gt = pt(N(pt)(1e18)(_t._1.incoming))(N(pt)(1e18)(_t._1.outgoing)), it = $t(N($t)(-1e18)(_t._1.incoming))(N($t)(-1e18)(_t._1.outgoing)), at = pt(N(pt)(1e18)(ft))(N(pt)(1e18)(A.outgoing)), wt = $t(N($t)(-1e18)(ft))(N($t)(-1e18)(A.outgoing)), Nt = N((Pt) => (Lt) => Lt > it ? Pt : Lt >= gt ? Pt + 1 | 0 : Pt)(0)(A.outgoing) + N((Pt) => (Lt) => Lt > wt ? Pt : Lt >= at ? Pt + 1 | 0 : Pt)(0)(_t._1.incoming) | 0, Ct = pt(N(pt)(1e18)(ft))(N(pt)(1e18)(A.outgoing)), Wt = $t(N($t)(-1e18)(ft))(N($t)(-1e18)(A.outgoing)), Zn = pt(N(pt)(1e18)(_t._1.incoming))(N(pt)(1e18)(_t._1.outgoing)), Gn = $t(N($t)(-1e18)(_t._1.incoming))(N($t)(-1e18)(_t._1.outgoing)), Fn = N((Pt) => (Lt) => Lt > Wt ? Pt : Lt >= Ct ? Pt + 1 | 0 : Pt)(0)(_t._1.outgoing) + N((Pt) => (Lt) => Lt > Gn ? Pt : Lt >= Zn ? Pt + 1 | 0 : Pt)(0)(ft) | 0;
                      return Nt === Fn ? Nt > 0 ? { ...st, deps: st.deps + 2 | 0, crossings: st.crossings + Nt | 0 } : st : { ...st, deps: st.deps + 1 | 0, crossings: st.crossings + No(Nt)(Fn) | 0 };
                    }
                    f();
                  };
                })())(N((() => {
                  const Gt = W.segMap;
                  return (Jt) => (Yt) => {
                    const _t = Rt(Yt.src)(Gt);
                    if (_t.tag === "Nothing")
                      return Jt;
                    if (_t.tag === "Just") {
                      const Tt = pt(N(pt)(1e18)(_t._1.incoming))(N(pt)(1e18)(_t._1.outgoing)), ht = $t(N($t)(-1e18)(_t._1.incoming))(N($t)(-1e18)(_t._1.outgoing)), mt = pt(N(pt)(1e18)(A.incoming))(N(pt)(1e18)(nt)), st = (() => {
                        const Pt = $t(N($t)(-1e18)(A.incoming))(N($t)(-1e18)(nt)), Lt = N((qt) => (gn) => gn > ht ? qt : gn >= Tt ? qt + 1 | 0 : qt)(0)(nt) + N((qt) => (gn) => gn > Pt ? qt : gn >= mt ? qt + 1 | 0 : qt)(0)(_t._1.incoming) | 0, te = pt(N(pt)(1e18)(A.incoming))(N(pt)(1e18)(nt)), Rn = $t(N($t)(-1e18)(A.incoming))(N($t)(-1e18)(nt)), Bn = pt(N(pt)(1e18)(_t._1.incoming))(N(pt)(1e18)(_t._1.outgoing)), wn = $t(N($t)(-1e18)(_t._1.incoming))(N($t)(-1e18)(_t._1.outgoing)), Se = N((qt) => (gn) => gn > Rn ? qt : gn >= te ? qt + 1 | 0 : qt)(0)(_t._1.outgoing) + N((qt) => (gn) => gn > wn ? qt : gn >= Bn ? qt + 1 | 0 : qt)(0)(A.incoming) | 0;
                        return Lt === Se ? Lt > 0 ? { ...Jt, deps: Jt.deps + 2 | 0, crossings: Jt.crossings + Lt | 0 } : Jt : { ...Jt, deps: Jt.deps + 1 | 0, crossings: Jt.crossings + No(Lt)(Se) | 0 };
                      })(), gt = pt(N(pt)(1e18)(_t._1.incoming))(N(pt)(1e18)(_t._1.outgoing)), it = $t(N($t)(-1e18)(_t._1.incoming))(N($t)(-1e18)(_t._1.outgoing)), at = pt(N(pt)(1e18)(ft))(N(pt)(1e18)(A.outgoing)), wt = $t(N($t)(-1e18)(ft))(N($t)(-1e18)(A.outgoing)), Nt = N((Pt) => (Lt) => Lt > it ? Pt : Lt >= gt ? Pt + 1 | 0 : Pt)(0)(A.outgoing) + N((Pt) => (Lt) => Lt > wt ? Pt : Lt >= at ? Pt + 1 | 0 : Pt)(0)(_t._1.incoming) | 0, Ct = pt(N(pt)(1e18)(ft))(N(pt)(1e18)(A.outgoing)), Wt = $t(N($t)(-1e18)(ft))(N($t)(-1e18)(A.outgoing)), Zn = pt(N(pt)(1e18)(_t._1.incoming))(N(pt)(1e18)(_t._1.outgoing)), Gn = $t(N($t)(-1e18)(_t._1.incoming))(N($t)(-1e18)(_t._1.outgoing)), Fn = N((Pt) => (Lt) => Lt > Wt ? Pt : Lt >= Ct ? Pt + 1 | 0 : Pt)(0)(_t._1.outgoing) + N((Pt) => (Lt) => Lt > Gn ? Pt : Lt >= Zn ? Pt + 1 | 0 : Pt)(0)(ft) | 0;
                      return Nt === Fn ? Nt > 0 ? { ...st, deps: st.deps + 2 | 0, crossings: st.crossings + Nt | 0 } : st : { ...st, deps: st.deps + 1 | 0, crossings: st.crossings + No(Nt)(Fn) | 0 };
                    }
                    f();
                  };
                })())({ crossings: 0, deps: 0 })(lt((Gt) => Gt.tgt === A.id, _.deps)))(lt((Gt) => Gt.src === A.id, _.deps)), dt = (() => {
                  if (A.splitBy.tag === "Just")
                    return Rt(A.splitBy._1)(W.segMap);
                  if (A.splitBy.tag === "Nothing")
                    return x;
                  f();
                })();
                if (dt.tag === "Just")
                  return {
                    ...ct,
                    deps: ct.deps + 2 | 0,
                    crossings: (() => {
                      const Gt = pt(N(pt)(1e18)(dt._1.incoming))(N(pt)(1e18)(dt._1.outgoing)), Jt = pt(N(pt)(1e18)(ft))(N(pt)(1e18)(A.outgoing)), Yt = $t(N($t)(-1e18)(dt._1.incoming))(N($t)(-1e18)(dt._1.outgoing)), _t = $t(N($t)(-1e18)(ft))(N($t)(-1e18)(A.outgoing)), Tt = pt(N(pt)(1e18)(A.incoming))(N(pt)(1e18)(nt));
                      return ct.crossings + (() => {
                        const ht = pt(N(pt)(1e18)(dt._1.incoming))(N(pt)(1e18)(dt._1.outgoing)), mt = $t(N($t)(-1e18)(A.incoming))(N($t)(-1e18)(nt)), st = $t(N($t)(-1e18)(dt._1.incoming))(N($t)(-1e18)(dt._1.outgoing));
                        return ((N((gt) => (it) => it > Yt ? gt : it >= Gt ? gt + 1 | 0 : gt)(0)(nt) + N((gt) => (it) => it > mt ? gt : it >= Tt ? gt + 1 | 0 : gt)(0)(dt._1.incoming) | 0) + N((gt) => (it) => it > _t ? gt : it >= Jt ? gt + 1 | 0 : gt)(0)(dt._1.outgoing) | 0) + N((gt) => (it) => it > st ? gt : it >= ht ? gt + 1 | 0 : gt)(0)(ft) | 0;
                      })() | 0;
                    })()
                  };
                if (dt.tag === "Nothing")
                  return ct;
                f();
              })()
            }))(G);
            return N((j) => (et) => et.rating.crossings < j.rating.crossings || !(et.rating.crossings > j.rating.crossings) && (et.rating.deps < j.rating.deps || !(et.rating.deps > j.rating.deps) && et.c.a.size > j.c.a.size) ? et : j)(0 < q.length ? q[0] : { c: Q._1, rating: { crossings: 1e6, deps: 1e6 } })(q).c;
          }
          f();
        })(), tt = {
          ...A,
          incoming: It(rt.compare)(A.incoming),
          outgoing: It(rt.compare)([(X.a.startPosition + X.a.endPosition) / 2]),
          splitPartner: J("Just", W.nextId)
        }, U = {
          id: W.nextId,
          incoming: It(rt.compare)([(X.a.startPosition + X.a.endPosition) / 2]),
          mark: 0,
          members: A.members,
          outgoing: It(rt.compare)(A.outgoing),
          slot: 0,
          splitBy: x,
          splitPartner: J("Just", A.id)
        };
        return {
          segMap: K(ot)(U.id)(U)(K(ot)(tt.id)(tt)(W.segMap)),
          freeAreas: (() => {
            if (X.i >= 0 && X.i < W.freeAreas.length) {
              const q = _g(Ut, x, X.i, W.freeAreas), j = (() => {
                if (q.tag === "Nothing")
                  return W.freeAreas;
                if (q.tag === "Just")
                  return q._1;
                f();
              })();
              if (W.freeAreas[X.i].size / 2 < d)
                return j;
              const et = (W.freeAreas[X.i].startPosition + W.freeAreas[X.i].endPosition) / 2, nt = et - d, ft = et + d;
              return [
                ...X.i < 1 ? [] : bt(0, X.i, j),
                ...W.freeAreas[X.i].startPosition <= nt ? [{ startPosition: W.freeAreas[X.i].startPosition, endPosition: nt, size: nt - W.freeAreas[X.i].startPosition }] : [],
                ...ft <= W.freeAreas[X.i].endPosition ? [{ startPosition: ft, endPosition: W.freeAreas[X.i].endPosition, size: W.freeAreas[X.i].endPosition - ft }] : [],
                ...X.i < 1 ? j : bt(X.i, j.length, j)
              ];
            }
            return W.freeAreas;
          })(),
          nextId: W.nextId + 1 | 0
        };
      })({
        segMap: Z,
        freeAreas: (() => {
          const W = It(rt.compare)([
            ...xt(_.segments)((A) => A.incoming),
            ...xt(_.segments)((A) => A.outgoing)
          ]);
          return vt(Hv)(Ln(
            (A) => (P) => P - A >= 2 * d ? J("Just", { startPosition: A + d, endPosition: P - d, size: P - A - 2 * d }) : x,
            W,
            bt(1, W.length, W)
          ));
        })(),
        nextId: _.segments.length
      })(It((W) => (A) => rt.compare($t(N($t)(-1e18)(W.incoming))(N($t)(-1e18)(W.outgoing)) - pt(N(pt)(1e18)(W.incoming))(N(pt)(1e18)(W.outgoing)))($t(N($t)(-1e18)(A.incoming))(N($t)(-1e18)(A.outgoing)) - pt(N(pt)(1e18)(A.incoming))(N(pt)(1e18)(A.outgoing))))(vt((W) => Rt(W)(Z))(V.decisions)));
      return {
        segments: (() => {
          const W = (A, P) => {
            if (A.tag === "Leaf")
              return P;
            if (A.tag === "Node")
              return W(A._5, tn("Cons", A._4, W(A._6, P)));
            f();
          };
          return Dt(on.foldr, W(Y.segMap, nn));
        })(),
        deps: (() => {
          const W = Y.segMap, A = (G, Q) => {
            if (G.tag === "Leaf")
              return Q;
            if (G.tag === "Node")
              return A(G._5, tn("Cons", G._4, A(G._6, Q)));
            f();
          }, P = Dt(on.foldr, A(W, nn)), O = P.length;
          return [
            ...xt(xt(Ht(0, O - 2 | 0))((G) => xt(Ht(G + 1 | 0, O - 1 | 0))((Q) => [
              k(G, Q)
            ])))((G) => G._1 >= 0 && G._1 < P.length ? G._2 >= 0 && G._2 < P.length ? P[G._1].splitPartner.tag !== "Nothing" && P[G._1].splitPartner.tag === "Just" && P[G._1].splitPartner._1 === P[G._2].id || P[G._2].splitPartner.tag !== "Nothing" && P[G._2].splitPartner.tag === "Just" && P[G._2].splitPartner._1 === P[G._1].id ? [] : i(d, P[G._1], P[G._2]) : [] : []),
            ...xt(P)((G) => G.splitBy.tag === "Just" && G.splitPartner.tag === "Just" && (() => {
              const Q = Rt(G.splitPartner._1)(W);
              if (Q.tag === "Nothing")
                return !1;
              if (Q.tag === "Just")
                return !0;
              f();
            })() && (() => {
              const Q = Rt(G.splitBy._1)(W);
              if (Q.tag === "Nothing")
                return !1;
              if (Q.tag === "Just")
                return !0;
              f();
            })() ? [{ src: G.id, tgt: G.splitBy._1, weight: 1, kind: _s }, { src: G.splitBy._1, tgt: G.splitPartner._1, weight: 1, kind: _s }] : [])
          ];
        })()
      };
    })(), m = p.segments, h = m.length, $ = (F) => {
      let z = F, V = !0, Z;
      for (; V; ) {
        const Y = z, W = Zt((A) => {
          const P = Rt(A)(Y.inWeight);
          if (P.tag === "Nothing")
            return !0;
          if (P.tag === "Just")
            return P._1 === 0;
          f();
        })(Y.remaining);
        if (W.tag === "Nothing") {
          V = !1, Z = Y;
          continue;
        }
        if (W.tag === "Just") {
          const A = W._1;
          z = {
            ...Y,
            inWeight: N((P) => (O) => At(ot)(pn)(O.tgt)(-O.weight)(P))(Y.inWeight)((() => {
              const P = Rt(A)(Y.depsBySrc);
              if (P.tag === "Nothing")
                return [];
              if (P.tag === "Just")
                return P._1;
              f();
            })()),
            marks: K(ot)(A)(Y.nextSource)(Y.marks),
            nextSource: Y.nextSource + 1 | 0,
            outWeight: N((P) => (O) => At(ot)(pn)(O.src)(-O.weight)(P))(Y.outWeight)((() => {
              const P = Rt(A)(Y.depsByTgt);
              if (P.tag === "Nothing")
                return [];
              if (P.tag === "Just")
                return P._1;
              f();
            })()),
            remaining: lt((P) => P !== A, Y.remaining)
          };
          continue;
        }
        f();
      }
      return Z;
    }, y = (F) => {
      let z = F, V = !0, Z;
      for (; V; ) {
        const Y = z, W = Zt((A) => {
          const P = Rt(A)(Y.outWeight);
          if (P.tag === "Nothing")
            return !0;
          if (P.tag === "Just")
            return P._1 === 0;
          f();
        })(Y.remaining);
        if (W.tag === "Nothing") {
          V = !1, Z = Y;
          continue;
        }
        if (W.tag === "Just") {
          const A = W._1;
          z = {
            ...Y,
            inWeight: N((P) => (O) => At(ot)(pn)(O.tgt)(-O.weight)(P))(Y.inWeight)((() => {
              const P = Rt(A)(Y.depsBySrc);
              if (P.tag === "Nothing")
                return [];
              if (P.tag === "Just")
                return P._1;
              f();
            })()),
            marks: K(ot)(A)(Y.nextSink)(Y.marks),
            nextSink: Y.nextSink - 1 | 0,
            outWeight: N((P) => (O) => At(ot)(pn)(O.src)(-O.weight)(P))(Y.outWeight)((() => {
              const P = Rt(A)(Y.depsByTgt);
              if (P.tag === "Nothing")
                return [];
              if (P.tag === "Just")
                return P._1;
              f();
            })()),
            remaining: lt((P) => P !== A, Y.remaining)
          };
          continue;
        }
        f();
      }
      return Z;
    }, w = ((F) => {
      let z = F, V = !0, Z;
      for (; V; ) {
        const W = $(y(z));
        if (W.remaining.length === 0) {
          V = !1, Z = H((A) => {
            const P = Rt(A.id)(W.marks), O = (() => {
              if (P.tag === "Nothing")
                return A.id;
              if (P.tag === "Just")
                return P._1;
              f();
            })();
            return { ...A, mark: O < h ? (O + h | 0) + 1 | 0 : O };
          })(m);
          continue;
        }
        z = (() => {
          const A = (O) => {
            const G = Rt(O)(W.outWeight), Q = Rt(O)(W.inWeight);
            return (() => {
              if (G.tag === "Nothing")
                return 0;
              if (G.tag === "Just")
                return G._1;
              f();
            })() - (() => {
              if (Q.tag === "Nothing")
                return 0;
              if (Q.tag === "Just")
                return Q._1;
              f();
            })() | 0;
          }, P = It((O) => (G) => ot.compare(A(G))(A(O)))(W.remaining);
          if (0 < P.length) {
            const O = P[0];
            return {
              ...W,
              inWeight: N((G) => (Q) => At(ot)(pn)(Q.tgt)(-Q.weight)(G))(W.inWeight)((() => {
                const G = Rt(O)(W.depsBySrc);
                if (G.tag === "Nothing")
                  return [];
                if (G.tag === "Just")
                  return G._1;
                f();
              })()),
              marks: K(ot)(O)(W.nextSource)(W.marks),
              nextSource: W.nextSource + 1 | 0,
              outWeight: N((G) => (Q) => At(ot)(pn)(Q.src)(-Q.weight)(G))(W.outWeight)((() => {
                const G = Rt(O)(W.depsByTgt);
                if (G.tag === "Nothing")
                  return [];
                if (G.tag === "Just")
                  return G._1;
                f();
              })()),
              remaining: lt((G) => G !== O, W.remaining)
            };
          }
          return W;
        })();
      }
      return Z;
    })({
      remaining: H((F) => F.id)(m),
      marks: R,
      inWeight: N((F) => (z) => At(ot)(pn)(z.tgt)(z.weight)(F))(R)(p.deps),
      outWeight: N((F) => (z) => At(ot)(pn)(z.src)(z.weight)(F))(R)(p.deps),
      depsBySrc: N((F) => (z) => At(ot)(_n)(z.src)([z])(F))(R)(p.deps),
      depsByTgt: N((F) => (z) => At(ot)(_n)(z.tgt)([z])(F))(R)(p.deps),
      nextSink: h - 1 | 0,
      nextSource: h + 1 | 0
    }), T = (() => {
      const F = (() => {
        const Y = yo(H((W) => k(W.id, W.mark))(w));
        return {
          segments: w,
          deps: vt((W) => (() => {
            if (W.kind === "Critical")
              return !0;
            if (W.kind === "Regular")
              return !1;
            f();
          })() ? J("Just", W) : (() => {
            const A = Rt(W.src)(Y), P = Rt(W.tgt)(Y);
            return (() => {
              if (A.tag === "Nothing")
                return 0;
              if (A.tag === "Just")
                return A._1;
              f();
            })() > (() => {
              if (P.tag === "Nothing")
                return 0;
              if (P.tag === "Just")
                return P._1;
              f();
            })();
          })() ? W.weight === 0 ? x : J("Just", { src: W.tgt, tgt: W.src, weight: W.weight, kind: W.kind }) : J("Just", W))(p.deps)
        };
      })(), z = N((Y) => (W) => At(ot)(pn)(W.tgt)(1)(Y))(R)(F.deps), Z = ((Y) => {
        let W = Y, A = !0, P;
        for (; A; ) {
          const O = W, G = zt((Q) => x, (Q) => (X) => J("Just", { head: Q, tail: X }), O.queue);
          if (G.tag === "Nothing") {
            A = !1, P = O;
            continue;
          }
          if (G.tag === "Just") {
            W = N((() => {
              const Q = Rt(G._1.head)(O.slots), X = (() => {
                if (Q.tag === "Nothing")
                  return 0;
                if (Q.tag === "Just")
                  return Q._1;
                f();
              })();
              return (tt) => (U) => {
                const q = Rt(U)(tt.inDegree), j = (() => {
                  if (q.tag === "Nothing")
                    return -1;
                  if (q.tag === "Just")
                    return q._1 - 1 | 0;
                  f();
                })();
                return {
                  ...tt,
                  slots: K(ot)(U)(P0((() => {
                    const et = Rt(U)(tt.slots);
                    if (et.tag === "Nothing")
                      return 0;
                    if (et.tag === "Just")
                      return et._1;
                    f();
                  })())(X + 1 | 0))(tt.slots),
                  inDegree: K(ot)(U)(j)(tt.inDegree),
                  queue: j === 0 ? [...tt.queue, U] : tt.queue
                };
              };
            })())({ ...O, queue: G._1.tail })((() => {
              const Q = Rt(G._1.head)(O.adj);
              if (Q.tag === "Nothing")
                return [];
              if (Q.tag === "Just")
                return Q._1;
              f();
            })());
            continue;
          }
          f();
        }
        return P;
      })({
        slots: yo(H((Y) => k(Y.id, 0))(F.segments)),
        inDegree: z,
        adj: N((Y) => (W) => At(ot)(_n)(W.src)([W.tgt])(Y))(R)(F.deps),
        queue: H((Y) => Y.id)(lt(
          (Y) => {
            const W = Rt(Y.id)(z);
            if (W.tag === "Nothing")
              return !0;
            if (W.tag === "Just")
              return W._1 === 0;
            f();
          },
          F.segments
        ))
      });
      return It((Y) => (W) => ot.compare(Y.slot)(W.slot))(H((Y) => ({
        ...Y,
        slot: (() => {
          const W = Rt(Y.id)(Z.slots);
          if (W.tag === "Nothing")
            return 0;
          if (W.tag === "Just")
            return W._1;
          f();
        })()
      }))(F.segments));
    })(), b = 1 + N((F) => (z) => P0(F)(z.slot))(0)(T) | 0, L = xt(T)((F) => F.members), C = lt((F) => ae(Pe)(F.edge.id)(L), t), E = N($t)(-1e18)(H((F) => F.fromPos._2)(C)), B = N(pt)(1e18)(H((F) => F.toPos._2)(C));
    if (E > B) {
      const F = yo(H((z) => k(z.id, z))(T));
      return le(H((z) => H((V) => k(
        V,
        {
          slot: z.slot,
          slotCount: b,
          gapTop: B,
          gapBottom: E,
          partner: (() => {
            if (z.splitPartner.tag === "Just") {
              const Z = Rt(z.splitPartner._1)(F);
              if (Z.tag === "Just")
                return J("Just", { slot: Z._1.slot, splitX: 0 < Z._1.incoming.length ? Z._1.incoming[0] : 0 });
              if (Z.tag === "Nothing")
                return x;
              f();
            }
            if (z.splitPartner.tag === "Nothing")
              return x;
            f();
          })()
        }
      ))(z.members))(lt(
        (z) => {
          if (z.splitPartner.tag === "Just") {
            const V = Rt(z.splitPartner._1)(F);
            return !(V.tag === "Just" && (() => {
              if (V._1.splitBy.tag === "Nothing")
                return !1;
              if (V._1.splitBy.tag === "Just")
                return !0;
              f();
            })());
          }
          if (z.splitPartner.tag === "Nothing")
            return !0;
          f();
        },
        T
      )));
    }
    const D = yo(H((F) => k(F.id, F))(T));
    return le(H((F) => H((z) => k(
      z,
      {
        slot: F.slot,
        slotCount: b,
        gapTop: E,
        gapBottom: B,
        partner: (() => {
          if (F.splitPartner.tag === "Just") {
            const V = Rt(F.splitPartner._1)(D);
            if (V.tag === "Just")
              return J("Just", { slot: V._1.slot, splitX: 0 < V._1.incoming.length ? V._1.incoming[0] : 0 });
            if (V.tag === "Nothing")
              return x;
            f();
          }
          if (F.splitPartner.tag === "Nothing")
            return x;
          f();
        })()
      }
    ))(F.members))(lt(
      (F) => {
        if (F.splitPartner.tag === "Just") {
          const z = Rt(F.splitPartner._1)(D);
          return !(z.tag === "Just" && (() => {
            if (z._1.splitBy.tag === "Nothing")
              return !1;
            if (z._1.splitBy.tag === "Just")
              return !0;
            f();
          })());
        }
        if (F.splitPartner.tag === "Nothing")
          return !0;
        f();
      },
      T
    )));
  })()))(R)(Qv(N((s) => (u) => {
    const c = bo(u.edge.from.node)(e);
    if (c.tag === "Just") {
      const a = bo(u.edge.to.node)(e);
      return a.tag === "Just" && c._1.layer !== a._1.layer ? At(ot)(_n)(No(c._1.layer)(a._1.layer))([u])(s) : s;
    }
    return s;
  })(R)((() => {
    const s = (u) => k(
      (() => {
        const c = bo(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.layer : 1e6;
      })(),
      (() => {
        const c = bo(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.order : 1e6;
      })()
    );
    return It((u) => (c) => Dv(s(u))(s(c)))(t);
  })())));
}, Ov = (t) => (n) => {
  const e = O1(t)(n), r = N((o) => (i) => K(I)(i.node)(i)(o))(R)(n);
  return N((o) => (i) => {
    const s = bo(i.edge.from.node)(r);
    if (s.tag === "Just") {
      const u = bo(i.edge.to.node)(r);
      if (u.tag === "Just" && s._1.layer !== u._1.layer) {
        const c = Wv(i.edge.id)(e);
        if (c.tag === "Just")
          return K(ot)(No(s._1.layer)(u._1.layer))(c._1.slotCount)(o);
      }
      return o;
    }
    return o;
  })(R)(t);
}, q1 = Xt.foldMap(/* @__PURE__ */ (() => {
  const t = { append: (n) => (e) => n || e };
  return { mempty: !1, Semigroup0: () => t };
})()), yn = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, vn = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, fi = (t) => (n) => (e) => (r) => q1((o) => e >= o.x && e < o.x + o.w && n > o.y && t < o.y + o.h)(r), Os = (t) => (n) => (e) => (r) => fi(yn(n)(e))(vn(n)(e))(r)(t), hs = /* @__PURE__ */ M(4), qv = /* @__PURE__ */ mg((t) => {
  if (t.direction === "H") {
    const n = yn(t.start._1)(t.end._1);
    return [{ x: n, y: t.start._2 - 1, w: vn(t.start._1)(t.end._1) - n, h: 2 }];
  }
  if (t.direction === "V") {
    const n = yn(t.start._2)(t.end._2);
    return [{ x: t.start._1 - 1, y: n, w: 2, h: vn(t.start._2)(t.end._2) - n }];
  }
  f();
}), bi = /* @__PURE__ */ pg((t) => {
  const n = t.start._1 - t.end._1;
  return !((n < 0 ? -n < 1e-6 : n < 1e-6) && (() => {
    const e = t.start._2 - t.end._2;
    return e < 0 ? -e < 1e-6 : e < 1e-6;
  })());
}), Xv = (t) => (n) => (e) => {
  const r = zt((o) => x, (o) => (i) => J("Just", { head: o, tail: i }), n);
  if (r.tag === "Nothing")
    return [{ start: t.start, end: e.end, direction: t.direction }];
  if (r.tag === "Just") {
    const o = (r._1.head.direction === "H" ? t.direction === "H" : r._1.head.direction === "V" && t.direction === "V") ? [{ start: t.start, end: r._1.head.end, direction: t.direction }] : [t, r._1.head], i = Ge(r._1.tail);
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
}, ki = (t) => {
  const n = (r) => (o) => {
    const i = zt((s) => x, (s) => (u) => J("Just", { head: s, tail: u }), o);
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
  }, e = zt((r) => x, (r) => (o) => J("Just", { head: r, tail: o }), t);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return n(e._1.head)(e._1.tail);
  f();
}, li = (t) => (n) => (e) => (r) => q1((o) => e >= o.y && e < o.y + o.h && n > o.x && t < o.x + o.w)(r), pi = (t) => (n) => (e) => (r) => li(yn(n)(e))(vn(n)(e))(r)(t), Yv = (t) => (n) => (e) => (r) => {
  const o = e + 2 | 0, i = o < 1 ? n : bt(o, n.length, n), s = e < 1 ? [] : bt(0, e, n), u = (e + 1 | 0) === (r - 1 | 0), c = e === 0, a = e >= 0 && e < n.length ? J("Just", n[e]) : x;
  if (a.tag === "Just") {
    const l = e + 1 | 0, d = l >= 0 && l < n.length ? J("Just", n[l]) : x;
    if (d.tag === "Just") {
      const _ = a._1.start._1 === d._1.end._1 && (!c || a._1.direction === "V") && (!u || d._1.direction === "V") && !Os(t)(yn(a._1.start._2)(d._1.end._2))(vn(a._1.start._2)(d._1.end._2))(a._1.start._1) ? J("Just", [...s, { start: a._1.start, end: d._1.end, direction: cn }, ...i]) : x, g = a._1.start._2 === d._1.end._2 && (!c || a._1.direction === "H") && (!u || d._1.direction === "H") && !pi(t)(yn(a._1.start._1)(d._1.end._1))(vn(a._1.start._1)(d._1.end._1))(a._1.start._2) ? J("Just", [...s, { start: a._1.start, end: d._1.end, direction: un }, ...i]) : x;
      return _.tag === "Nothing" ? g : _;
    }
    if (d.tag === "Nothing")
      return x;
    f();
  }
  if (a.tag === "Nothing")
    return x;
  f();
}, Uv = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if ((c + 1 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const a = Yv(t)(n)(c)(e);
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
}, Vv = (t) => (n) => (e) => (r) => {
  const o = (_, g, p) => !Os(t)(yn(g)(p))(vn(g)(p))(_), i = e + 3 | 0, s = i < 1 ? n : bt(i, n.length, n), u = e < 1 ? [] : bt(0, e, n), c = (e + 2 | 0) === (r - 1 | 0), a = e === 0, l = (_, g, p) => !pi(t)(yn(g)(p))(vn(g)(p))(_), d = e >= 0 && e < n.length ? J("Just", n[e]) : x;
  if (d.tag === "Just") {
    const _ = e + 2 | 0, g = _ >= 0 && _ < n.length ? J("Just", n[_]) : x;
    if (g.tag === "Just") {
      const p = d._1.start._1 === g._1.end._1 && (!a || d._1.direction === "V") && (!c || g._1.direction === "V") && o(d._1.start._1, d._1.start._2, g._1.end._2) ? J("Just", [...u, { start: d._1.start, end: g._1.end, direction: cn }, ...s]) : d._1.start._2 === g._1.end._2 && (!a || d._1.direction === "H") && (!c || g._1.direction === "H") && l(d._1.start._2, d._1.start._1, g._1.end._1) ? J("Just", [...u, { start: d._1.start, end: g._1.end, direction: un }, ...s]) : x, m = (!a || d._1.direction === "V") && (!c || g._1.direction === "H") && o(d._1.start._1, d._1.start._2, g._1.end._2) && l(
        g._1.end._2,
        d._1.start._1,
        g._1.end._1
      ) ? J(
        "Just",
        [
          ...u,
          { start: d._1.start, end: k(d._1.start._1, g._1.end._2), direction: cn },
          { start: k(d._1.start._1, g._1.end._2), end: g._1.end, direction: un },
          ...s
        ]
      ) : x, h = (!a || d._1.direction === "H") && (!c || g._1.direction === "V") && l(d._1.start._2, d._1.start._1, g._1.end._1) && o(
        g._1.end._1,
        d._1.start._2,
        g._1.end._2
      ) ? J(
        "Just",
        [
          ...u,
          { start: d._1.start, end: k(g._1.end._1, d._1.start._2), direction: un },
          { start: k(g._1.end._1, d._1.start._2), end: g._1.end, direction: cn },
          ...s
        ]
      ) : x, $ = m.tag === "Nothing" ? h : m;
      return p.tag === "Nothing" ? $ : p;
    }
    if (g.tag === "Nothing")
      return x;
    f();
  }
  if (d.tag === "Nothing")
    return x;
  f();
}, Kv = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if ((c + 2 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const a = Vv(t)(n)(c)(e);
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
}, Mv = (t) => {
  const n = (e) => {
    let r = e, o = !0, i;
    for (; o; ) {
      const s = r, u = ki(bi(Uv(t)(Kv(t)(s))));
      if (u.length < s.length) {
        r = u;
        continue;
      }
      o = !1, i = u;
    }
    return i;
  };
  return (e) => n(ki(bi(e)));
}, jv = (t) => (n) => (e) => (r) => {
  const o = yn(e)(r), i = vn(e)(r), s = lt((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = It((a) => (l) => rt.compare(a.x)(l.x))(s);
    return 0 < c.length ? c[0].x - 1 : (e + r) / 2;
  }
  const u = It((c) => (a) => rt.compare(a.x)(c.x))(H((c) => ({ ...c, x: c.x + c.w }))(s));
  return 0 < u.length ? u[0].x + 1 : (e + r) / 2;
}, Zv = (t) => (n) => (e) => (r) => {
  const o = yn(e)(r), i = vn(e)(r), s = lt((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = It((a) => (l) => rt.compare(a.y)(l.y))(s);
    return 0 < c.length ? c[0].y - 1 : (e + r) / 2;
  }
  const u = It((c) => (a) => rt.compare(a.y)(c.y))(H((c) => ({ ...c, y: c.y + c.h }))(s));
  return 0 < u.length ? u[0].y + 1 : (e + r) / 2;
}, tx = (t) => (n) => (e) => (r) => {
  const o = yn(e)(r), i = vn(e)(r), s = lt((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = It((a) => (l) => rt.compare(l.x)(a.x))(H((a) => ({ ...a, x: a.x + a.w }))(s));
    return 0 < c.length ? c[0].x : (e + r) / 2;
  }
  const u = It((c) => (a) => rt.compare(c.x)(a.x))(s);
  return 0 < u.length ? u[0].x - 1 : (e + r) / 2;
}, nx = (t) => (n) => (e) => (r) => {
  const o = yn(e)(r), i = vn(e)(r), s = lt((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = It((a) => (l) => rt.compare(l.y)(a.y))(H((a) => ({ ...a, y: a.y + a.h }))(s));
    return 0 < c.length ? c[0].y : (e + r) / 2;
  }
  const u = It((c) => (a) => rt.compare(c.y)(a.y))(s);
  return 0 < u.length ? u[0].y - 1 : (e + r) / 2;
}, X1 = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const c = r, a = o, l = i;
    if (l > 100) {
      s = !1, u = a;
      continue;
    }
    if (!c(a + l)) {
      s = !1, u = a + l;
      continue;
    }
    if (!c(a - l)) {
      s = !1, u = a - l;
      continue;
    }
    r = c, o = a, i = l + 1;
  }
  return u;
}, I0 = (t) => (n) => (e) => (r) => (o) => {
  const i = yn(n)(e), s = vn(n)(e);
  if (!fi(i)(s)(r)(t))
    return r;
  if (!fi(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return fi(i)(s)(u)(t) ? X1((c) => fi(i)(s)(c)(t))(u)(1) : u;
}, ex = (t) => (n) => (e) => (r) => (o) => {
  const i = yn(n)(e), s = vn(n)(e);
  if (!li(i)(s)(r)(t))
    return r;
  if (!li(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return li(i)(s)(u)(t) ? X1((c) => li(i)(s)(c)(t))(u)(1) : u;
}, rx = (t) => (n) => (e) => (r) => {
  const o = yn(n)(e), i = vn(n)(e), s = lt((a) => r >= a.x && r < a.x + a.w && a.y + a.h > o && a.y < i, t), u = N((a) => (l) => vn(a)(l.x + l.w + 4))(r + 4)(s), c = N((a) => (l) => yn(a)(l.x - 4))(r - 4)(s);
  return (() => {
    const a = u - r, l = c - r;
    return (a < 0 ? -a : a) <= (l < 0 ? -l : l);
  })() ? u : c;
}, ox = (t) => (n) => (e) => (r) => {
  const o = yn(n)(e), i = vn(n)(e), s = lt((a) => r >= a.y && r < a.y + a.h && a.x + a.w > o && a.x < i, t), u = N((a) => (l) => vn(a)(l.y + l.h + 4))(r + 4)(s), c = N((a) => (l) => yn(a)(l.y - 4))(r - 4)(s);
  return (() => {
    const a = u - r, l = c - r;
    return (a < 0 ? -a : a) <= (l < 0 ? -l : l);
  })() ? u : c;
}, ix = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
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
  })(), a = (T, b, L) => !Os(n)(yn(b)(L))(vn(b)(L))(T), l = (T, b, L) => !Os(e)(yn(b)(L))(vn(b)(L))(T), d = (T, b, L, C) => t.tag === "Just" && !pi(e)(yn(T)(b))(vn(T)(b))(t._1) ? t._1 : ex(n)(T)(b)(L)(C), _ = (T, b, L, C) => {
    if (T === L) {
      const B = rx(n)(b)(C)(T), D = Zv(n)(T)(b)(C), F = nx(n)(T)(b)(C);
      return [
        { start: k(T, b), end: k(T, D), direction: cn },
        { start: k(T, D), end: k(B, D), direction: un },
        { start: k(B, D), end: k(B, F), direction: cn },
        { start: k(B, F), end: k(L, F), direction: un },
        { start: k(L, F), end: k(L, C), direction: cn }
      ];
    }
    const E = d(T, L, b, C);
    return [
      { start: k(T, b), end: k(T, E), direction: cn },
      { start: k(T, E), end: k(L, E), direction: un },
      { start: k(L, E), end: k(L, C), direction: cn }
    ];
  }, g = (T, b, L, C) => {
    if (b === C) {
      const B = ox(n)(T)(L)(b), D = jv(n)(b)(T)(L), F = tx(n)(b)(T)(L);
      return [
        { start: k(T, b), end: k(D, b), direction: un },
        { start: k(D, b), end: k(D, B), direction: cn },
        { start: k(D, B), end: k(F, B), direction: un },
        { start: k(F, B), end: k(F, C), direction: cn },
        { start: k(F, C), end: k(L, C), direction: un }
      ];
    }
    const E = I0(n)(b)(C)(T)(L);
    return [
      { start: k(T, b), end: k(E, b), direction: un },
      { start: k(E, b), end: k(E, C), direction: cn },
      { start: k(E, C), end: k(L, C), direction: un }
    ];
  }, p = (T, b, L) => !pi(n)(yn(b)(L))(vn(b)(L))(T), m = (T, b, L) => !pi(e)(yn(b)(L))(vn(b)(L))(T), h = (T, b, L, C) => {
    if (m(b, T, L) && l(L, b, C))
      return [
        { start: k(T, b), end: k(L, b), direction: un },
        { start: k(L, b), end: k(L, C), direction: cn }
      ];
    const E = I0(n)(b)(C)(T)(L);
    return [
      { start: k(T, b), end: k(E, b), direction: un },
      { start: k(E, b), end: k(E, C), direction: cn },
      { start: k(E, C), end: k(L, C), direction: un }
    ];
  }, $ = (T, b, L, C) => {
    if (l(T, b, C) && m(C, T, L))
      return [
        { start: k(T, b), end: k(T, C), direction: cn },
        { start: k(T, C), end: k(L, C), direction: un }
      ];
    const E = d(T, L, b, C);
    return [
      { start: k(T, b), end: k(T, E), direction: cn },
      { start: k(T, E), end: k(L, E), direction: un },
      { start: k(L, E), end: k(L, C), direction: cn }
    ];
  }, y = (() => {
    if (r === "South")
      return i === "North" ? u._1 === c._1 && a(u._1, u._2, c._2) ? [{ start: k(u._1, u._2), end: k(c._1, c._2), direction: cn }] : _(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? $(u._1, u._2, c._1, c._2) : _(u._1, u._2, c._1, c._2);
    if (r === "North")
      return i === "South" ? u._1 === c._1 && a(u._1, u._2, c._2) ? [{ start: k(u._1, u._2), end: k(c._1, c._2), direction: cn }] : _(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? $(u._1, u._2, c._1, c._2) : _(u._1, u._2, c._1, c._2);
    if (r === "East")
      return i === "West" ? u._2 === c._2 && p(u._2, u._1, c._1) ? [{ start: k(u._1, u._2), end: k(c._1, c._2), direction: un }] : g(u._1, u._2, c._1, c._2) : i === "North" || i === "South" ? h(u._1, u._2, c._1, c._2) : _(u._1, u._2, c._1, c._2);
    if (r === "West") {
      if (i === "East")
        return u._2 === c._2 && p(u._2, u._1, c._1) ? [{ start: k(u._1, u._2), end: k(c._1, c._2), direction: un }] : g(u._1, u._2, c._1, c._2);
      if (i === "North" || i === "South")
        return h(u._1, u._2, c._1, c._2);
    }
    return _(u._1, u._2, c._1, c._2);
  })(), v = (() => {
    if (r === "South" || r === "North")
      return cn;
    if (r === "East" || r === "West")
      return un;
    f();
  })(), w = {
    start: k(c._1, c._2),
    end: k(s._1, s._2),
    direction: (() => {
      if (i === "South" || i === "North")
        return cn;
      if (i === "East" || i === "West")
        return un;
      f();
    })()
  };
  return u._1 === c._1 && u._2 === c._2 ? [{ start: k(o._1, o._2), end: k(s._1, s._2), direction: v }] : Xv({ start: k(o._1, o._2), end: k(u._1, u._2), direction: v })(y)(w);
}, sx = /* @__PURE__ */ H((t) => ({ x: t.position._1 * hs - 2, y: t.position._2 * hs - 2, w: t.size._1 * hs + 4, h: t.size._2 * hs + 4 })), qs = /* @__PURE__ */ an(I)(Xt), sr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, pc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ux = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t._1)(s._3._1);
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
          o = !1, i = J("Just", s._4);
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
          o = !1, i = J("Just", s._4);
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
          o = !1, i = J("Just", s._4);
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
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, F0 = (t) => (n) => {
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
}, mc = (t) => (n) => {
  const e = M(4);
  if (t === "South")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "North")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "East")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  if (t === "West")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  f();
}, R0 = (t) => (n) => N((e) => (r) => At(t)(_n)(n(r))([r])(e))(R), B0 = (t) => (n) => (e) => (r) => {
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
}, Y1 = (t) => (n) => {
  const e = t.hi - t.lo, r = (t.lo + t.hi) / 2, o = n.length;
  return o === 0 ? R : qs(o === 1 ? H((i) => k(i, r))(n) : Bt((i) => (s) => k(s, t.lo + M(i + 1 | 0) * e / M(o + 1 | 0)))(n));
}, U1 = (t) => (n) => (e) => (r) => (o) => {
  const i = R0(I)((g) => g.to.node)(t), s = R0(I)((g) => g.from.node)(t), u = N((g) => (p) => K(I)(p.node)(p)(g))(R)(n), c = (g, p, m) => {
    const h = sr(g)(u);
    if (h.tag === "Nothing")
      return k(0, 0);
    if (h.tag === "Just") {
      const $ = sr(g)(e);
      if ($.tag === "Nothing") {
        const y = M(4);
        if (m === "South")
          return k(h._1.position._1 * y + h._1.size._1 * y / 2, (h._1.position._2 + h._1.size._2) * y);
        if (m === "North")
          return k(h._1.position._1 * y + h._1.size._1 * y / 2, h._1.position._2 * y);
        if (m === "East")
          return k((h._1.position._1 + h._1.size._1) * y, h._1.position._2 * y + h._1.size._2 * y / 2);
        if (m === "West")
          return k(h._1.position._1 * y, h._1.position._2 * y + h._1.size._2 * y / 2);
        f();
      }
      if ($.tag === "Just") {
        const y = Zt((v) => v.id === p)($._1);
        if (y.tag === "Nothing") {
          const v = M(4);
          if (m === "South")
            return k(h._1.position._1 * v + h._1.size._1 * v / 2, (h._1.position._2 + h._1.size._2) * v);
          if (m === "North")
            return k(h._1.position._1 * v + h._1.size._1 * v / 2, h._1.position._2 * v);
          if (m === "East")
            return k((h._1.position._1 + h._1.size._1) * v, h._1.position._2 * v + h._1.size._2 * v / 2);
          if (m === "West")
            return k(h._1.position._1 * v, h._1.position._2 * v + h._1.size._2 * v / 2);
          f();
        }
        if (y.tag === "Just") {
          const v = M(4);
          if (y._1.side === "North")
            return k(h._1.position._1 * v + M(y._1.offset) * v, h._1.position._2 * v);
          if (y._1.side === "South")
            return k(h._1.position._1 * v + M(y._1.offset) * v, (h._1.position._2 + h._1.size._2) * v);
          if (y._1.side === "East")
            return k((h._1.position._1 + h._1.size._1) * v, h._1.position._2 * v + M(y._1.offset) * v);
          if (y._1.side === "West")
            return k(h._1.position._1 * v, h._1.position._2 * v + M(y._1.offset) * v);
        }
      }
    }
    f();
  }, a = qs(xt(r)((g) => {
    if (g.nodes.length <= 2)
      return [];
    const p = M(4);
    if (1 < g.nodes.length) {
      const m = sr(g.nodes[1])(u);
      if (m.tag === "Nothing")
        return [];
      if (m.tag === "Just") {
        const h = m._1.position._1 * p + m._1.size._1 * p / 2;
        return H(($) => k($, h))(Ln(
          ($) => (y) => g.edgeId + ":" + $ + "->" + y,
          g.nodes,
          bt(1, g.nodes.length, g.nodes)
        ));
      }
      f();
    }
    return [];
  })), l = (g) => {
    const p = sr(g.from.node)(u), m = sr(g.to.node)(u);
    if (p.tag === "Just" && m.tag === "Just") {
      const h = p._1, $ = m._1, y = It((v) => (w) => ot.compare(v.score)(w.score))(H((v) => {
        const w = v._1, T = v._2;
        return {
          from: w,
          to: T,
          score: (() => {
            const b = (B, D, F, z, V) => {
              const Z = mc(B)(D), Y = mc(B)(F);
              return Z.lo < Y.hi && Y.lo < Z.hi && (w === "South" ? T === "North" && V._2 > z._2 : w === "North" ? T === "South" && V._2 < z._2 : w === "East" ? T === "West" && V._1 > z._1 : w === "West" && T === "East" && V._1 < z._1) ? 0 : B0(w)(T)(z)(V);
            }, L = F0(w)(h), C = F0(T)($), E = B0(w)(T)(L)(C);
            return (() => {
              if (E > 0) {
                if (w === "South")
                  return T === "North" ? b(Jn, h, $, L, C) * 10 | 0 : E * 10 | 0;
                if (w === "North")
                  return T === "South" ? b(Tn, h, $, L, C) * 10 | 0 : E * 10 | 0;
                if (w === "East")
                  return T === "West" ? b(cr, h, $, L, C) * 10 | 0 : E * 10 | 0;
                if (w === "West" && T === "East")
                  return b(ar, h, $, L, C) * 10 | 0;
              }
              return E * 10 | 0;
            })() + (w === "South" ? T === "North" ? 0 : 15 : w === "North" ? T === "South" ? 0 : 15 : w === "East" ? T === "West" ? 5 : 15 : w === "West" && T === "East" ? 5 : 15) | 0;
          })()
        };
      })([
        k(Jn, Tn),
        k(cr, Tn),
        k(ar, Tn),
        k(Jn, cr),
        k(Jn, ar),
        k(Tn, Jn),
        k(Tn, cr),
        k(Tn, ar),
        k(cr, Jn),
        k(ar, Jn),
        k(cr, ar),
        k(ar, cr)
      ]));
      if (0 < y.length)
        return { from: y[0].from, to: y[0].to };
    }
    return { from: Jn, to: Tn };
  }, d = qs(H((g) => k(g.id, l(g)))(t)), _ = (g, p, m, h, $, y) => {
    const v = M(4), w = sr(p)(u);
    if (w.tag === "Nothing")
      return k(0, 0);
    if (w.tag === "Just") {
      const T = ux(k(m, g))(o);
      if (T.tag === "Just") {
        const b = w._1.position._1 * v + T._1, L = M(4);
        if (g === "South")
          return k(b, (w._1.position._2 + w._1.size._2) * L);
        if (g === "North")
          return k(b, w._1.position._2 * L);
        if (g === "East")
          return k((w._1.position._1 + w._1.size._1) * L, b);
        if (g === "West")
          return k(w._1.position._1 * L, b);
        f();
      }
      if (T.tag === "Nothing") {
        const b = mc(g)(w._1), L = (b.lo + b.hi) / 2, C = pc(m)(Y1(b)(H((D) => D.id)(It((D) => (F) => rt.compare($(g)(D))($(g)(F)))(lt(
          (D) => {
            const F = pc(D.id)(d);
            if (F.tag === "Just") {
              const z = y(F._1);
              return z === "North" ? g === "North" : z === "South" ? g === "South" : z === "East" ? g === "East" : z === "West" && g === "West";
            }
            if (F.tag === "Nothing")
              return !0;
            f();
          },
          (() => {
            const D = sr(p)(h);
            if (D.tag === "Nothing")
              return [];
            if (D.tag === "Just")
              return D._1;
            f();
          })()
        ))))), E = (() => {
          if (C.tag === "Nothing")
            return L;
          if (C.tag === "Just")
            return C._1;
          f();
        })(), B = M(4);
        if (g === "South")
          return k(E, (w._1.position._2 + w._1.size._2) * B);
        if (g === "North")
          return k(E, w._1.position._2 * B);
        if (g === "East")
          return k((w._1.position._1 + w._1.size._1) * B, E);
        if (g === "West")
          return k(w._1.position._1 * B, E);
      }
    }
    f();
  };
  return H((g) => {
    const p = pc(g.edge.id)(a);
    if (p.tag === "Nothing")
      return g;
    if (p.tag === "Just")
      return {
        ...g,
        fromPos: Sn(3)(g.edge.from.node) === "$d:" ? k(p._1, g.fromPos._2) : g.fromPos,
        toPos: Sn(3)(g.edge.to.node) === "$d:" ? k(p._1, g.toPos._2) : g.toPos
      };
    f();
  })(H((g) => {
    if (g.from.port.tag === "Just" && g.to.port.tag === "Just")
      return {
        edge: g,
        fromPos: c(g.from.node, g.from.port._1, Jn),
        toPos: c(g.to.node, g.to.port._1, Tn),
        fromSide: Jn,
        toSide: Tn
      };
    const p = l(g);
    return {
      edge: g,
      fromPos: _(
        p.from,
        g.from.node,
        g.id,
        s,
        (m) => (h) => {
          const $ = sr(h.to.node)(u);
          if ($.tag === "Nothing")
            return 0;
          if ($.tag === "Just") {
            const y = M(4);
            if (m === "South" || m === "North")
              return $._1.position._1 * y + $._1.size._1 * y / 2;
            if (m === "East" || m === "West")
              return $._1.position._2 * y + $._1.size._2 * y / 2;
          }
          f();
        },
        (m) => m.from
      ),
      toPos: _(
        p.to,
        g.to.node,
        g.id,
        i,
        (m) => (h) => {
          const $ = sr(h.from.node)(u);
          if ($.tag === "Nothing")
            return 0;
          if ($.tag === "Just") {
            const y = M(4);
            if (m === "South" || m === "North")
              return $._1.position._1 * y + $._1.size._1 * y / 2;
            if (m === "East" || m === "West")
              return $._1.position._2 * y + $._1.size._2 * y / 2;
          }
          f();
        },
        (m) => m.to
      ),
      fromSide: p.from,
      toSide: p.to
    };
  })(t));
}, V1 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Eo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, cx = /* @__PURE__ */ (() => {
  const t = ue.unfoldr(Ee);
  return (n) => t(se("IterNode", n, Le));
})(), Yc = (t) => (n) => t.gapTop + 1 * M(4) + M(n) * 2.5 * M(4), ax = (t) => (n) => {
  const e = V1(n.edge.id)(t);
  if (e.tag === "Just") {
    if (e._1.partner.tag === "Just")
      return J("Just", { slot1Y: Yc(e._1)(e._1.slot), splitX: e._1.partner._1.splitX, slot2Y: Yc(e._1)(e._1.partner._1.slot) });
    if (e._1.partner.tag === "Nothing")
      return x;
    f();
  }
  if (e.tag === "Nothing")
    return x;
  f();
}, fx = (t) => (n) => {
  const e = N((r) => (o) => K(I)(o.node)(o)(r))(R)(n);
  return le(Bt((r) => (o) => {
    const i = Eo(o.node)(e);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just") {
      const s = i._1;
      return Bt((u) => (c) => {
        const a = o.edges.length, l = M(4), d = s.position._1 * l, _ = s.position._2 * l, g = s.size._2 * l, p = M((2 * a | 0) + 1 | 0), m = _ + g * M(a - u | 0) / p, h = _ + g * M((a + 1 | 0) + u | 0) / p, $ = d - l * 2.5 * M(u + 1 | 0), y = [
          { start: k(d, m), end: k($, m), direction: un },
          { start: k($, m), end: k($, h), direction: cn },
          { start: k($, h), end: k(d, h), direction: un }
        ];
        return { edge: c.id, segments: y, bends: Ln((v) => (w) => v.end, y, bt(1, 3, y)), bendType: [], jumps: [], reversed: !1 };
      })(o.edges);
    }
    f();
  })(H((r) => ({ node: r._1, edges: r._2 }))(cx(N((r) => (o) => At(I)(_n)(o.from.node)([
    o
  ])(r))(R)(t)))));
}, lx = (t) => (n) => {
  const e = N((i) => (s) => K(I)(s.node)(s)(i))(R)(n), r = (i) => {
    const s = Eo(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.position._1;
    f();
  }, o = (i) => {
    const s = Eo(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.layer;
    f();
  };
  return It((i) => (s) => {
    const u = ot.compare(o(i.edge.from.node))(o(s.edge.from.node));
    if (u === "EQ") {
      const c = rt.compare(r(i.edge.from.node))(r(s.edge.from.node));
      return c === "EQ" ? rt.compare(r(i.edge.to.node))(r(s.edge.to.node)) : c;
    }
    return u;
  })(t);
}, ne = (t) => {
  const n = M(4);
  return { x: t.position._1 * n - 2, y: t.position._2 * n - 2, w: t.size._1 * n + 4, h: t.size._2 * n + 4 };
}, gx = (t) => t.from.node === t.to.node, dx = (t) => (n) => (e) => (r) => {
  const o = Mv(e)(ix(t)(n)(e)(r.fromSide)(r.fromPos)(r.toSide)(r.toPos));
  return {
    edge: r.edge.id,
    segments: o,
    bends: Ln((i) => (s) => i.end, o, bt(1, o.length, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, _x = (t) => (n) => (e) => (r) => {
  const o = [
    { start: k(r.fromPos._1, r.fromPos._2), end: k(r.fromPos._1, t.slot1Y), direction: cn },
    { start: k(r.fromPos._1, t.slot1Y), end: k(t.splitX, t.slot1Y), direction: un },
    { start: k(t.splitX, t.slot1Y), end: k(t.splitX, t.slot2Y), direction: cn },
    { start: k(t.splitX, t.slot2Y), end: k(r.toPos._1, t.slot2Y), direction: un },
    { start: k(r.toPos._1, t.slot2Y), end: k(r.toPos._1, r.toPos._2), direction: cn }
  ];
  return {
    edge: r.edge.id,
    segments: o,
    bends: Ln((i) => (s) => i.end, o, bt(1, 5, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, hx = (t) => (n) => (e) => {
  const r = Eo(t.edge.from.node)(e);
  if (r.tag === "Just") {
    const i = Eo(t.edge.to.node)(e);
    return i.tag === "Just" ? lt(
      (s) => !(s.h === ne(r._1).h && s.w === ne(r._1).w && s.x === ne(r._1).x && s.y === ne(r._1).y) && !(s.h === ne(i._1).h && s.w === ne(i._1).w && s.x === ne(i._1).x && s.y === ne(i._1).y),
      n
    ) : lt((s) => !(s.h === ne(r._1).h && s.w === ne(r._1).w && s.x === ne(r._1).x && s.y === ne(r._1).y), n);
  }
  const o = Eo(t.edge.to.node)(e);
  return o.tag === "Just" ? lt((i) => !(i.h === ne(o._1).h && i.w === ne(o._1).w && i.x === ne(o._1).x && i.y === ne(o._1).y), n) : lt((i) => !0, n);
}, px = (t) => (n) => {
  const e = V1(n.edge.id)(t);
  if (e.tag === "Just")
    return J("Just", Yc(e._1)(e._1.slot));
  if (e.tag === "Nothing")
    return x;
  f();
}, mx = (t) => (n) => (e) => (r) => (o) => {
  const i = N((a) => (l) => K(I)(l.node)(l)(a))(R)(n), s = sx(n), u = U1(lt((a) => a.from.node !== a.to.node, t))(n)(e)(r)(o), c = O1(u)(n);
  return [
    ...fx(lt(gx, t))(n),
    ...N((a) => (l) => {
      const d = hx(l)(s)(i), _ = [...d, ...a.edgeObstacles], g = ax(c)(l), p = (() => {
        if (g.tag === "Just")
          return _x(g._1)(d)(_)(l);
        if (g.tag === "Nothing")
          return dx(px(c)(l))(d)(_)(l);
        f();
      })();
      return { results: [...a.results, p], edgeObstacles: [...a.edgeObstacles, ...qv(p.segments)] };
    })({ results: [], edgeObstacles: [] })(lx(u)(n)).results
  ];
}, Gr = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ir = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, $x = (t) => (n) => (e) => {
  if (t.start._1 !== n.start._1)
    return x;
  const r = Ir(Gr(t.start._2)(t.end._2))(Gr(n.start._2)(n.end._2)), o = Gr(Ir(t.start._2)(t.end._2))(Ir(n.start._2)(n.end._2));
  return r < o ? J("Just", { position: k(t.start._1, (r + o) / 2), crossingEdge: e }) : x;
}, yx = (t) => (n) => (e) => {
  if (t.start._2 !== n.start._2)
    return x;
  const r = Ir(Gr(t.start._1)(t.end._1))(Gr(n.start._1)(n.end._1)), o = Gr(Ir(t.start._1)(t.end._1))(Ir(n.start._1)(n.end._1));
  return r < o ? J("Just", { position: k((r + o) / 2, t.start._2), crossingEdge: e }) : x;
}, vx = (t) => (n) => (e) => {
  if (t.direction === "H")
    return yx(t)(n)(e);
  if (t.direction === "V")
    return $x(t)(n)(e);
  f();
}, xx = (t) => (n) => (e) => {
  const r = t + 1 | 0, o = r < 1 ? e : bt(r, e.length, e);
  return xt(n.segments)((i) => xt(o)((s) => vt((u) => vx(i)(u)(s.edge))(lt(
    (u) => u.direction === "H" ? i.direction === "H" : u.direction === "V" && i.direction === "V",
    s.segments
  ))));
}, Nx = (t) => (n) => (e) => n.start._1 > Gr(t.start._1)(t.end._1) && n.start._1 < Ir(t.start._1)(t.end._1) && t.start._2 > Gr(n.start._2)(n.end._2) && t.start._2 < Ir(n.start._2)(n.end._2) ? J("Just", { position: k(n.start._1, t.start._2), crossingEdge: e }) : x, wx = (t) => (n) => xt(lt((e) => e.direction === "H", t.segments))((e) => xt(n)((r) => vt((o) => Nx(e)(o)(r.edge))(lt(
  (o) => o.direction === "V",
  r.segments
)))), Tx = (t) => (n) => (e) => [
  ...wx(n)(lt((r) => r.edge !== n.edge, e)),
  ...xx(t)(n)(e)
], z0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, K1 = (t) => Sn(3)(t) === "$d:", Jx = (t) => (n) => (e) => N((r) => (o) => {
  const i = z0(o.from.node)(t), s = (() => {
    if (i.tag === "Nothing")
      return 0;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = z0(o.to.node)(t), c = (() => {
    if (u.tag === "Nothing")
      return -s;
    if (u.tag === "Just")
      return u._1 - s | 0;
    f();
  })();
  if (c <= 1)
    return { ...r, edges: [...r.edges, o], chains: [...r.chains, { edgeId: o.id, nodes: [o.from.node, o.to.node] }] };
  const a = o.id, l = H((_) => "$d:" + a + ":" + rn(_))(Ht(1, c - 1 | 0)), d = [o.from.node, ...l, o.to.node];
  return {
    ...r,
    layers: N((_) => (g) => {
      const p = g._2, m = Ph(s + g._1 | 0)((h) => [...h, p])(_);
      if (m.tag === "Nothing")
        return _;
      if (m.tag === "Just")
        return m._1;
      f();
    })(r.layers)(Ln(Mn, Ht(1, c - 1 | 0), l)),
    edges: [
      ...r.edges,
      ...Ln(
        (_) => (g) => ({ id: a + ":" + _ + "->" + g, from: { node: _, port: o.from.port }, to: { node: g, port: o.to.port }, label: x }),
        d,
        bt(1, d.length, d)
      )
    ],
    chains: [...r.chains, { edgeId: o.id, nodes: d }]
  };
})({ layers: e, edges: [], chains: [] })(n), Xs = /* @__PURE__ */ (() => {
  const t = {
    eq: (n) => (e) => n._1 === e._1 && (n._2 === "North" ? e._2 === "North" : n._2 === "South" ? e._2 === "South" : n._2 === "East" ? e._2 === "East" : n._2 === "West" && e._2 === "West")
  };
  return {
    compare: (n) => (e) => {
      const r = I.compare(n._1)(e._1);
      if (r === "LT")
        return Cn;
      if (r === "GT")
        return An;
      if (n._2 === "North")
        return e._2 === "North" ? Un : Cn;
      if (e._2 === "North")
        return An;
      if (n._2 === "South")
        return e._2 === "South" ? Un : Cn;
      if (e._2 === "South")
        return An;
      if (n._2 === "East")
        return e._2 === "East" ? Un : Cn;
      if (e._2 === "East")
        return An;
      if (n._2 === "West" && e._2 === "West")
        return Un;
      f();
    },
    Eq0: () => t
  };
})(), bx = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = Xs.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, kx = /* @__PURE__ */ an(I)(Xt), $c = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Lx = /* @__PURE__ */ an(Xs)(Xt), D0 = /* @__PURE__ */ (() => {
  const t = ue.unfoldr(Ee);
  return (n) => t(se("IterNode", n, Le));
})(), So = (t) => (n) => (e) => (r) => {
  const o = bx(k(n, e))(t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just")
    return o._1;
  f();
}, M1 = (t) => (n) => (e) => {
  const r = kx(le(H((s) => Bt((u) => (c) => k(c, u))(s))(t))), o = (s, u) => {
    if (s === "South") {
      const c = $c(u.to.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    if (s === "North") {
      const c = $c(u.from.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    return 0;
  }, i = (s) => N((u) => (c) => Yn(
    Xs.compare,
    Xn,
    Lx(H((a) => k(k(a._1, s), a._2))(D0(Y1({
      lo: 0,
      hi: (() => {
        const a = $c(c._1)(e);
        if (a.tag === "Just")
          return a._1._1;
        if (a.tag === "Nothing")
          return Sn(3)(c._1) === "$d:" ? 0 : 1;
        f();
      })()
    })(H((a) => a.id)(It((a) => (l) => ot.compare(o(s, a))(o(s, l)))(c._2)))))),
    u
  ))(R)(D0(N((u) => (c) => c.from.node === c.to.node ? u : s === "South" ? At(I)(_n)(c.from.node)([c])(u) : s === "North" ? At(I)(_n)(c.to.node)([c])(u) : u)(R)(n)));
  return Yn(Xs.compare, Xn, i(Tn), i(Jn));
}, j1 = (t) => t, Z1 = (t) => t, td = (t) => t, Ex = /* @__PURE__ */ N((t) => (n) => K(I)(n)()(t))(R), Sx = /* @__PURE__ */ (() => {
  const t = ue.unfoldr((n) => {
    if (n.tag === "Nil")
      return x;
    if (n.tag === "Cons")
      return J("Just", k(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, tn("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, nn);
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
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ye = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ze = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, qe = /* @__PURE__ */ an(I)(Xt), yc = /* @__PURE__ */ vg(I), Uc = /* @__PURE__ */ (() => {
  const t = ue.unfoldr(Ee);
  return (n) => t(se("IterNode", n, Le));
})(), Cx = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ax = (t) => (e) => {
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
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Q0 = /* @__PURE__ */ td("VDown"), H0 = /* @__PURE__ */ td("VUp"), Px = /* @__PURE__ */ Z1("ForwardPhase"), Gx = /* @__PURE__ */ Z1("StackPhase"), W0 = /* @__PURE__ */ j1("HRight"), O0 = /* @__PURE__ */ j1("HLeft"), q0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, Ix = (t) => (n) => (e) => {
  const r = N((u) => (c) => At(I)(pn)(c.tgt)(1)(u))(R)(t), o = Sx(Ex([
    ...H((u) => u.src)(t),
    ...H((u) => u.tgt)(t),
    ...(() => {
      const u = (c, a) => {
        if (c.tag === "Leaf")
          return a;
        if (c.tag === "Node")
          return u(c._5, tn("Cons", c._4, u(c._6, a)));
        f();
      };
      return Dt(on.foldr, u(n, nn));
    })()
  ])), i = N((u) => (c) => At(I)(_n)(c.src)([{ target: c.tgt, sep: c.sep }])(u))(R)(t);
  return ((u) => (c) => (a) => {
    let l = u, d = c, _ = a, g = !0, p;
    for (; g; ) {
      const m = l, h = d, $ = _, y = zt((v) => x, (v) => (w) => J("Just", { head: v, tail: w }), m);
      if (y.tag === "Nothing") {
        g = !1, p = $;
        continue;
      }
      if (y.tag === "Just") {
        const v = ut(y._1.head)($), w = (() => {
          if (v.tag === "Nothing")
            return 0;
          if (v.tag === "Just")
            return v._1;
          f();
        })(), T = N((b) => (L) => {
          const C = ut(L.target)(b.result), E = w + L.sep, B = ut(L.target)(b.indeg), D = (() => {
            if (B.tag === "Nothing")
              return -1;
            if (B.tag === "Just")
              return B._1 - 1 | 0;
            f();
          })();
          return {
            newQueue: D === 0 ? [...b.newQueue, L.target] : b.newQueue,
            result: K(I)(L.target)((() => {
              if (C.tag === "Nothing")
                return E;
              if (C.tag === "Just") {
                if (e === "VDown")
                  return ye(C._1)(E);
                if (e === "VUp")
                  return Ze(C._1)(E);
              }
              f();
            })())(b.result),
            indeg: K(I)(L.target)(D)(b.indeg)
          };
        })({ newQueue: [], result: $, indeg: h })((() => {
          const b = ut(y._1.head)(i);
          if (b.tag === "Nothing")
            return [];
          if (b.tag === "Just")
            return b._1;
          f();
        })());
        l = [...y._1.tail, ...T.newQueue], d = T.indeg, _ = T.result;
        continue;
      }
      f();
    }
    return p;
  })(lt(
    (u) => {
      const c = ut(u)(r);
      if (c.tag === "Nothing")
        return !0;
      if (c.tag === "Just")
        return c._1 === 0;
      f();
    },
    o
  ))(r)(N((u) => (c) => K(I)(c)(0)(u))(R)(o));
}, Fx = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, tn("Cons", i._4, n(i._6, s)));
    f();
  }, e = Dt(on.foldr, n(t, nn)), r = N(ye)(999999)(e);
  if (r === 0 || e.length === 0)
    return t;
  const o = (i) => {
    if (i.tag === "Leaf")
      return R;
    if (i.tag === "Node")
      return Kt("Node", i._1, i._2, i._3, i._4 - r, o(i._5), o(i._6));
    f();
  };
  return o(t);
}, nd = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, tn("Cons", i._4, n(i._6, s)));
    f();
  }, e = n(t, nn), r = (i) => (s) => {
    let u = i, c = s, a = !0, l;
    for (; a; ) {
      const d = u, _ = c;
      if (_.tag === "Nil") {
        a = !1, l = d;
        continue;
      }
      if (_.tag === "Cons") {
        u = Ze(d)(_._1), c = _._2;
        continue;
      }
      f();
    }
    return l;
  }, o = (i) => (s) => {
    let u = i, c = s, a = !0, l;
    for (; a; ) {
      const d = u, _ = c;
      if (_.tag === "Nil") {
        a = !1, l = d;
        continue;
      }
      if (_.tag === "Cons") {
        u = ye(d)(_._1), c = _._2;
        continue;
      }
      f();
    }
    return l;
  };
  return r(-999999)(e) - o(999999)(e);
}, gi = (t) => (n) => ((r) => (o) => {
  let i = r, s = o, u = !0, c;
  for (; u; ) {
    const a = i, l = s;
    if (a === n) {
      u = !1, c = l;
      continue;
    }
    i = (() => {
      const d = ut(a)(t.align);
      if (d.tag === "Nothing")
        return n;
      if (d.tag === "Just")
        return d._1;
      f();
    })(), s = [...l, a];
  }
  return c;
})((() => {
  const r = ut(n)(t.align);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just")
    return r._1;
  f();
})())([n]), Rx = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (l) => {
  const d = (A, P, O) => {
    const G = A.from.node === P ? A.from.port : A.to.node === P ? A.to.port : x;
    if (G.tag === "Just") {
      const Q = ut(P)(o);
      if (Q.tag === "Just") {
        const X = Zt((tt) => tt.id === G._1)(Q._1);
        if (X.tag === "Just") {
          const tt = M(X._1.offset) * M(4);
          return O === "North" || O === "South" ? tt : 0;
        }
        if (X.tag === "Nothing") {
          const tt = ut(P)(r), U = So(s)(A.id)(O)((() => {
            if (tt.tag === "Nothing")
              return 0.5;
            if (tt.tag === "Just")
              return tt._1._1 / 2;
            f();
          })());
          return O === "North" || O === "South" ? U : 0;
        }
        f();
      }
      if (Q.tag === "Nothing") {
        const X = ut(P)(r), tt = So(s)(A.id)(O)((() => {
          if (X.tag === "Nothing")
            return 0.5;
          if (X.tag === "Just")
            return X._1._1 / 2;
          f();
        })());
        return O === "North" || O === "South" ? tt : 0;
      }
      f();
    }
    if (G.tag === "Nothing") {
      const Q = ut(P)(r), X = So(s)(A.id)(O)((() => {
        if (Q.tag === "Nothing")
          return 0.5;
        if (Q.tag === "Just")
          return Q._1._1 / 2;
        f();
      })());
      return O === "North" || O === "South" ? X : 0;
    }
    f();
  }, _ = (A, P) => {
    if (A.from.node === P) {
      if (l === "HRight")
        return Jn;
      if (l === "HLeft")
        return Tn;
      f();
    }
    if (l === "HRight")
      return Tn;
    if (l === "HLeft")
      return Jn;
    f();
  }, g = (A, P, O) => N((G) => (Q) => K(I)(Q)((() => {
    const X = ut(Q)(G);
    if (X.tag === "Nothing")
      return 0 + P;
    if (X.tag === "Just")
      return X._1 + P;
    f();
  })())(G))(O)(gi(c)(A)), p = (() => {
    if (l === "HRight")
      return e;
    if (l === "HLeft")
      return Pn(e);
    f();
  })(), m = (A) => {
    const P = ut(A)(r);
    if (P.tag === "Nothing")
      return 1;
    if (P.tag === "Just")
      return P._1._1;
    f();
  }, h = qe(le(Bt((A) => (P) => H((O) => k(O, A))(P))(e))), $ = (A, P) => Sn(3)(A) === "$d:" && Sn(3)(P) === "$d:" || Sn(3)(A) === "$d:" || Sn(3)(P) === "$d:" ? 10 : M(t.nodeGap), y = N((A) => (P) => yc((O) => J(
    "Just",
    [
      ...(() => {
        if (O.tag === "Nothing")
          return [];
        if (O.tag === "Just")
          return O._1;
        f();
      })(),
      P
    ]
  ))(P.to.node)(A))(R)(i), v = N((A) => (P) => yc((O) => J(
    "Just",
    [
      ...(() => {
        if (O.tag === "Nothing")
          return [];
        if (O.tag === "Just")
          return O._1;
        f();
      })(),
      P
    ]
  ))(P.from.node)(A))(R)(i), w = le(e), T = N((A) => (P) => {
    const O = ut(P)(c.root), G = (() => {
      if (O.tag === "Nothing")
        return P;
      if (O.tag === "Just")
        return O._1;
      f();
    })();
    return P === G ? A : yc((Q) => J(
      "Just",
      (() => {
        if (Q.tag === "Nothing")
          return !0;
        if (Q.tag === "Just")
          return Q._1;
        f();
      })() && Sn(3)(P) === "$d:"
    ))(G)(A);
  })(qe(H((A) => k(A, !0))(Io(I.compare)((() => {
    const A = (P, O) => {
      if (P.tag === "Leaf")
        return O;
      if (P.tag === "Node")
        return A(P._5, tn("Cons", P._4, A(P._6, O)));
      f();
    };
    return Dt(on.foldr, A(c.root, nn));
  })()))))(w), b = (A, P) => {
    const O = A.free, G = ut(O)(c.root), Q = (() => {
      if (G.tag === "Nothing")
        return O;
      if (G.tag === "Just")
        return G._1;
      f();
    })(), X = ut(Q)(T), tt = (() => {
      if (X.tag === "Nothing")
        return !0;
      if (X.tag === "Just")
        return X._1;
      f();
    })();
    return N((U) => (q) => {
      if (U.edge.tag === "Just")
        return U;
      if (U.edge.tag === "Nothing") {
        if ((() => {
          const ct = ut(Q)(P.su);
          return !tt && (() => {
            const dt = ut(q.from.node)(h);
            return q.from.node !== q.to.node && (() => {
              const Gt = ut(q.to.node)(h);
              return (() => {
                if (dt.tag === "Nothing")
                  return -1;
                if (dt.tag === "Just")
                  return dt._1;
                f();
              })() === (() => {
                if (Gt.tag === "Nothing")
                  return -1;
                if (Gt.tag === "Just")
                  return Gt._1;
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
          return U;
        const j = q.from.node === O ? q.to.node : q.from.node, et = ut(j)(c.root), nt = (() => {
          if (et.tag === "Nothing")
            return j;
          if (et.tag === "Just")
            return et._1;
          f();
        })(), ft = nt !== Q;
        return ft && (() => {
          const ct = ut(nt)(P.blockFinished);
          if (ct.tag === "Nothing")
            return !1;
          if (ct.tag === "Just")
            return ct._1;
          f();
        })() ? { ...U, edge: J("Just", q), hasEdges: !0 } : { ...U, hasEdges: U.hasEdges || ft };
      }
      f();
    })({ edge: x, hasEdges: !1 })((() => {
      if (A.isRoot) {
        if (l === "HRight") {
          const U = ut(O)(y);
          if (U.tag === "Nothing")
            return [];
          if (U.tag === "Just")
            return U._1;
          f();
        }
        if (l === "HLeft") {
          const U = ut(O)(v);
          if (U.tag === "Nothing")
            return [];
          if (U.tag === "Just")
            return U._1;
        }
        f();
      }
      if (l === "HRight") {
        const U = ut(O)(v);
        if (U.tag === "Nothing")
          return [];
        if (U.tag === "Just")
          return U._1;
        f();
      }
      if (l === "HLeft") {
        const U = ut(O)(y);
        if (U.tag === "Nothing")
          return [];
        if (U.tag === "Just")
          return U._1;
      }
      f();
    })());
  }, L = (A, P, O, G) => {
    const Q = (() => {
      if (a === "VDown")
        return -1e18;
      if (a === "VUp")
        return 1e18;
      f();
    })(), X = { free: P, isRoot: O }, tt = b(X, G);
    if (tt.edge.tag === "Nothing")
      return tt.hasEdges ? { thresh: Q, state: { ...G, queue: [...G.queue, X] } } : { thresh: Q, state: G };
    if (tt.edge.tag === "Just") {
      const U = tt.edge._1.from.node === P ? tt.edge._1.to.node : tt.edge._1.from.node;
      return {
        thresh: (() => {
          const q = ut((() => {
            const ft = ut(U)(c.root);
            if (ft.tag === "Nothing")
              return U;
            if (ft.tag === "Just")
              return ft._1;
            f();
          })())(G.x), j = ut(U)(u), et = ut(P)(u), nt = (() => {
            if (q.tag === "Just")
              return q._1;
            if (q.tag === "Nothing")
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
            if (j.tag === "Nothing")
              return 0;
            if (j.tag === "Just")
              return j._1;
            f();
          })() + d(
            tt.edge._1,
            U,
            (() => {
              if (O) {
                if (l === "HRight")
                  return Jn;
                if (l === "HLeft")
                  return Tn;
                f();
              }
              if (l === "HRight")
                return Tn;
              if (l === "HLeft")
                return Jn;
              f();
            })()
          ) - (() => {
            if (et.tag === "Nothing")
              return 0;
            if (et.tag === "Just")
              return et._1;
            f();
          })() - d(
            tt.edge._1,
            P,
            (() => {
              if (O) {
                if (l === "HRight")
                  return Tn;
                if (l === "HLeft")
                  return Jn;
                f();
              }
              if (l === "HRight")
                return Jn;
              if (l === "HLeft")
                return Tn;
              f();
            })()
          );
        })(),
        state: {
          ...G,
          su: K(I)((() => {
            const q = ut(tt.edge._1.from.node)(c.root);
            if (q.tag === "Nothing")
              return tt.edge._1.from.node;
            if (q.tag === "Just")
              return q._1;
            f();
          })())(!0)(K(I)((() => {
            const q = ut(tt.edge._1.to.node)(c.root);
            if (q.tag === "Nothing")
              return tt.edge._1.to.node;
            if (q.tag === "Just")
              return q._1;
            f();
          })())(!0)(G.su))
        }
      };
    }
    f();
  }, C = (A, P, O, G) => {
    const Q = P === A, X = ut(P)(c.align), tt = (() => {
      if (X.tag === "Nothing")
        return P === A;
      if (X.tag === "Just")
        return X._1 === A;
      f();
    })();
    if (!(Q || tt))
      return { thresh: O, state: G };
    const U = (() => {
      if (a === "VDown")
        return Q && O <= -1e18;
      if (a === "VUp")
        return Q && O >= 1e18;
      f();
    })() ? L(A, P, !0, G) : { thresh: O, state: G };
    return (() => {
      if (a === "VDown")
        return U.thresh <= -1e18 && tt;
      if (a === "VUp")
        return U.thresh >= 1e18 && tt;
      f();
    })() ? L(A, P, !1, U.state) : U;
  }, E = (A) => (P) => (O) => {
    const G = ut(O)(n.nodeIndex), Q = (() => {
      if (G.tag === "Nothing")
        return 0;
      if (G.tag === "Just")
        return G._1;
      f();
    })(), X = Zt((et) => ae(Pe)(O)(et))(p), tt = (() => {
      if (X.tag === "Nothing")
        return [];
      if (X.tag === "Just")
        return X._1;
      f();
    })(), U = tt.length;
    if ((() => {
      if (a === "VDown")
        return Q <= 0;
      if (a === "VUp")
        return Q >= (U - 1 | 0);
      f();
    })()) {
      const et = C(A, O, P.thresh, P.st);
      return { ...P, st: et.state, thresh: et.thresh };
    }
    const q = (() => {
      if (a === "VDown")
        return Q - 1 | 0;
      if (a === "VUp")
        return Q + 1 | 0;
      f();
    })(), j = q >= 0 && q < tt.length ? J("Just", tt[q]) : x;
    if (j.tag === "Nothing")
      return P;
    if (j.tag === "Just") {
      const et = ut(j._1)(c.root), nt = (() => {
        if (et.tag === "Nothing")
          return j._1;
        if (et.tag === "Just")
          return et._1;
        f();
      })(), ft = C(A, O, P.thresh, B(nt)(P.st)), ct = (() => {
        const Ct = ut(A)(ft.state.sink);
        if (Ct.tag === "Nothing")
          return A === A;
        if (Ct.tag === "Just")
          return Ct._1 === A;
        f();
      })() ? {
        ...ft.state,
        sink: K(I)(A)((() => {
          const Ct = ut(nt)(ft.state.sink);
          if (Ct.tag === "Nothing")
            return nt;
          if (Ct.tag === "Just")
            return Ct._1;
          f();
        })())(ft.state.sink)
      } : ft.state, dt = ut(nt)(ct.sink), Gt = (() => {
        if (dt.tag === "Nothing")
          return nt;
        if (dt.tag === "Just")
          return dt._1;
        f();
      })(), Jt = ut(A)(ct.sink), Yt = (() => {
        if (Jt.tag === "Nothing")
          return A;
        if (Jt.tag === "Just")
          return Jt._1;
        f();
      })();
      if (Yt === Gt) {
        const Ct = ut(nt)(ct.x), Wt = (() => {
          if (Ct.tag === "Just")
            return Ct._1;
          if (Ct.tag === "Nothing")
            return x;
          f();
        })(), Zn = (() => {
          if (Wt.tag === "Nothing")
            return 0;
          if (Wt.tag === "Just")
            return Wt._1;
          f();
        })(), Gn = ut(A)(ct.x), Fn = (() => {
          if (Gn.tag === "Just")
            return Gn._1;
          if (Gn.tag === "Nothing")
            return x;
          f();
        })(), Pt = (() => {
          if (Fn.tag === "Nothing")
            return 0;
          if (Fn.tag === "Just")
            return Fn._1;
          f();
        })(), Lt = $(O, j._1), te = ut(j._1)(u), Rn = ut(O)(u), Bn = (() => {
          if (te.tag === "Nothing")
            return 0;
          if (te.tag === "Just")
            return te._1;
          f();
        })() - (() => {
          if (Rn.tag === "Nothing")
            return 0;
          if (Rn.tag === "Just")
            return Rn._1;
          f();
        })();
        if (a === "VDown") {
          const wn = Ze(Zn + Bn + m(j._1) + Lt)(ft.thresh);
          return {
            st: { ...ct, x: K(I)(A)(J("Just", P.initial ? wn : Ze(Pt)(wn)))(ct.x) },
            initial: !1,
            thresh: ft.thresh
          };
        }
        if (a === "VUp") {
          const wn = ye(Zn + Bn - Lt - m(O))(ft.thresh);
          return {
            st: { ...ct, x: K(I)(A)(J("Just", P.initial ? wn : ye(Pt)(wn)))(ct.x) },
            initial: !1,
            thresh: ft.thresh
          };
        }
        f();
      }
      const _t = ut(nt)(ct.x), Tt = (() => {
        if (_t.tag === "Just")
          return _t._1;
        if (_t.tag === "Nothing")
          return x;
        f();
      })(), ht = (() => {
        if (Tt.tag === "Nothing")
          return 0;
        if (Tt.tag === "Just")
          return Tt._1;
        f();
      })(), mt = ut(A)(ct.x), st = (() => {
        if (mt.tag === "Just")
          return mt._1;
        if (mt.tag === "Nothing")
          return x;
        f();
      })(), gt = (() => {
        if (st.tag === "Nothing")
          return 0;
        if (st.tag === "Just")
          return st._1;
        f();
      })(), it = M(t.nodeGap), at = ut(O)(u), wt = ut(j._1)(u), Nt = (() => {
        if (at.tag === "Nothing")
          return 0;
        if (at.tag === "Just")
          return at._1;
        f();
      })() - (() => {
        if (wt.tag === "Nothing")
          return 0;
        if (wt.tag === "Just")
          return wt._1;
        f();
      })();
      return {
        st: {
          ...ct,
          classEdges: [
            ...ct.classEdges,
            {
              src: Yt,
              tgt: Gt,
              sep: (() => {
                if (a === "VDown")
                  return gt + Nt - ht - m(j._1) - it;
                if (a === "VUp")
                  return gt + Nt + m(O) + it - ht;
                f();
              })()
            }
          ]
        },
        initial: P.initial,
        thresh: ft.thresh
      };
    }
    f();
  }, B = (A) => (P) => {
    const O = ut(A)(P.x), G = (() => {
      if (O.tag === "Just")
        return O._1;
      if (O.tag === "Nothing")
        return x;
      f();
    })();
    if (G.tag === "Just")
      return P;
    if (G.tag === "Nothing") {
      const Q = N(E(A))({
        st: { ...P, x: K(I)(A)(J("Just", 0))(P.x) },
        initial: !0,
        thresh: (() => {
          if (a === "VDown")
            return -1e18;
          if (a === "VUp")
            return 1e18;
          f();
        })()
      })(gi(c)(A));
      return { ...Q.st, blockFinished: K(I)(A)(!0)(Q.st.blockFinished) };
    }
    f();
  }, D = N((A) => (P) => N((O) => (G) => {
    const Q = ut(G)(c.root), X = (() => {
      if (Q.tag === "Nothing")
        return G;
      if (Q.tag === "Just")
        return Q._1;
      f();
    })();
    return X === G ? B(X)(O) : O;
  })(A)((() => {
    if (a === "VDown")
      return P;
    if (a === "VUp")
      return Pn(P);
    f();
  })()))({
    x: qe(H((A) => k(A, x))(w)),
    sink: qe(H((A) => k(A, A))(w)),
    classEdges: [],
    su: R,
    blockFinished: R,
    queue: []
  })(p), F = Ix(D.classEdges)(D.sink)(a), z = (A, P, O, G) => {
    const Q = ut(P)(G), X = ut(P)(u);
    return (() => {
      if (Q.tag === "Nothing")
        return 0;
      if (Q.tag === "Just")
        return Q._1;
      f();
    })() + (() => {
      if (X.tag === "Nothing")
        return 0;
      if (X.tag === "Just")
        return X._1;
      f();
    })() + d(A, P, O);
  }, V = qe(H((A) => k(A, !0))(Io(I.compare)((() => {
    const A = (P, O) => {
      if (P.tag === "Leaf")
        return O;
      if (P.tag === "Node")
        return A(P._5, tn("Cons", P._4, A(P._6, O)));
      f();
    };
    return Dt(on.foldr, A(c.root, nn));
  })()))), Z = (A) => (P) => (O) => {
    const G = b(O, { su: P.su, blockFinished: V }), Q = {
      phase: A,
      ppFree: O.free,
      ppIsRoot: O.isRoot,
      edgeId: x,
      delta: 0,
      avail: 0,
      shift: 0,
      freeSu: (() => {
        const X = ut((() => {
          const tt = ut(O.free)(c.root);
          if (tt.tag === "Nothing")
            return O.free;
          if (tt.tag === "Just")
            return tt._1;
          f();
        })())(P.su);
        if (X.tag === "Nothing")
          return !1;
        if (X.tag === "Just")
          return X._1;
        f();
      })(),
      hasEdges: G.hasEdges,
      candCount: (() => {
        if (O.isRoot) {
          if (l === "HRight") {
            const X = ut(O.free)(y);
            if (X.tag === "Nothing")
              return 0;
            if (X.tag === "Just")
              return X._1.length;
            f();
          }
          if (l === "HLeft") {
            const X = ut(O.free)(v);
            if (X.tag === "Nothing")
              return 0;
            if (X.tag === "Just")
              return X._1.length;
          }
          f();
        }
        if (l === "HRight") {
          const X = ut(O.free)(v);
          if (X.tag === "Nothing")
            return 0;
          if (X.tag === "Just")
            return X._1.length;
          f();
        }
        if (l === "HLeft") {
          const X = ut(O.free)(y);
          if (X.tag === "Nothing")
            return 0;
          if (X.tag === "Just")
            return X._1.length;
        }
        f();
      })()
    };
    if (G.edge.tag === "Nothing")
      return { ...P, stack: [...P.stack, O], trace: [...P.trace, Q], x: P.x };
    if (G.edge.tag === "Just") {
      const X = G.edge._1.from.node === O.free ? k(G.edge._1.from.node, G.edge._1.to.node) : k(G.edge._1.to.node, G.edge._1.from.node), tt = z(G.edge._1, X._1, _(G.edge._1, X._1), P.x) - z(G.edge._1, X._2, _(G.edge._1, X._2), P.x), U = ut(X._1)(c.root), q = (() => {
        if (U.tag === "Nothing")
          return X._1;
        if (U.tag === "Just")
          return U._1;
        f();
      })(), j = { ...Q, edgeId: J("Just", G.edge._1.id), delta: tt };
      if (tt > 0 && tt < 1e300) {
        const et = N((ct) => (dt) => {
          const Gt = ut(dt)(h), Jt = (() => {
            if (Gt.tag === "Nothing")
              return -1;
            if (Gt.tag === "Just")
              return Gt._1;
            f();
          })();
          if (Jt >= 0 && Jt < e.length) {
            const Tt = e[Jt], ht = ut(dt)(n.nodeIndex), mt = (() => {
              if (ht.tag === "Nothing")
                return -2;
              if (ht.tag === "Just")
                return ht._1 - 1 | 0;
              f();
            })();
            return mt >= 0 && mt < Tt.length ? ye(ct)((() => {
              const st = ut(dt)(P.x), gt = ut(dt)(u), it = ut(Tt[mt])(P.x), at = ut(Tt[mt])(u);
              return (() => {
                if (st.tag === "Nothing")
                  return 0;
                if (st.tag === "Just")
                  return st._1;
                f();
              })() + (() => {
                if (gt.tag === "Nothing")
                  return 0;
                if (gt.tag === "Just")
                  return gt._1;
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
              })() + m(Tt[mt]) + $(dt, Tt[mt]));
            })()) : ct;
          }
          const Yt = ut(dt)(n.nodeIndex), _t = (() => {
            if (Yt.tag === "Nothing")
              return -2;
            if (Yt.tag === "Just")
              return Yt._1 - 1 | 0;
            f();
          })();
          return _t >= 0 && _t < 0 ? ye(ct)((() => {
            const Tt = ut(dt)(P.x), ht = ut(dt)(u), mt = ut([][_t])(P.x), st = ut([][_t])(u);
            return (() => {
              if (Tt.tag === "Nothing")
                return 0;
              if (Tt.tag === "Just")
                return Tt._1;
              f();
            })() + (() => {
              if (ht.tag === "Nothing")
                return 0;
              if (ht.tag === "Just")
                return ht._1;
              f();
            })() - ((() => {
              if (mt.tag === "Nothing")
                return 0;
              if (mt.tag === "Just")
                return mt._1;
              f();
            })() + (() => {
              if (st.tag === "Nothing")
                return 0;
              if (st.tag === "Just")
                return st._1;
              f();
            })() + m([][_t]) + $(dt, [][_t]));
          })()) : ct;
        })(tt)(gi(c)(q)), nt = et > 0 ? -et : 0, ft = { ...P, x: et > 0 ? g(q, nt, P.x) : P.x, trace: [...P.trace, { ...j, avail: et, shift: nt }] };
        return et > 0 ? ft : { ...ft, stack: [...ft.stack, O] };
      }
      if (tt < 0 && -tt < 1e300) {
        const et = N((ct) => (dt) => {
          const Gt = ut(dt)(h), Jt = (() => {
            if (Gt.tag === "Nothing")
              return -1;
            if (Gt.tag === "Just")
              return Gt._1;
            f();
          })();
          if (Jt >= 0 && Jt < e.length) {
            const Tt = e[Jt], ht = ut(dt)(n.nodeIndex), mt = (() => {
              if (ht.tag === "Nothing")
                return 0;
              if (ht.tag === "Just")
                return ht._1 + 1 | 0;
              f();
            })();
            return mt >= 0 && mt < Tt.length ? ye(ct)((() => {
              const st = ut(Tt[mt])(P.x), gt = ut(Tt[mt])(u), it = ut(dt)(P.x), at = ut(dt)(u);
              return (() => {
                if (st.tag === "Nothing")
                  return 0;
                if (st.tag === "Just")
                  return st._1;
                f();
              })() + (() => {
                if (gt.tag === "Nothing")
                  return 0;
                if (gt.tag === "Just")
                  return gt._1;
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
              })() + m(dt) + $(dt, Tt[mt]));
            })()) : ct;
          }
          const Yt = ut(dt)(n.nodeIndex), _t = (() => {
            if (Yt.tag === "Nothing")
              return 0;
            if (Yt.tag === "Just")
              return Yt._1 + 1 | 0;
            f();
          })();
          return _t >= 0 && _t < 0 ? ye(ct)((() => {
            const Tt = ut([][_t])(P.x), ht = ut([][_t])(u), mt = ut(dt)(P.x), st = ut(dt)(u);
            return (() => {
              if (Tt.tag === "Nothing")
                return 0;
              if (Tt.tag === "Just")
                return Tt._1;
              f();
            })() + (() => {
              if (ht.tag === "Nothing")
                return 0;
              if (ht.tag === "Just")
                return ht._1;
              f();
            })() - ((() => {
              if (mt.tag === "Nothing")
                return 0;
              if (mt.tag === "Just")
                return mt._1;
              f();
            })() + (() => {
              if (st.tag === "Nothing")
                return 0;
              if (st.tag === "Just")
                return st._1;
              f();
            })() + m(dt) + $(dt, [][_t]));
          })()) : ct;
        })(-tt)(gi(c)(q)), nt = et > 0 ? et : 0, ft = { ...P, x: et > 0 ? g(q, nt, P.x) : P.x, trace: [...P.trace, { ...j, avail: et, shift: nt }] };
        return et > 0 ? ft : { ...ft, stack: [...ft.stack, O] };
      }
      return { ...P, stack: [...P.stack, O], trace: [...P.trace, j], x: P.x };
    }
    f();
  }, Y = N(Z(Px))({
    x: qe(H((A) => k(
      A,
      (() => {
        const P = ut(A)(c.root), O = (() => {
          if (P.tag === "Nothing")
            return A;
          if (P.tag === "Just")
            return P._1;
          f();
        })(), G = ut(O)(D.x), Q = ut((() => {
          const tt = ut(O)(D.sink);
          if (tt.tag === "Nothing")
            return O;
          if (tt.tag === "Just")
            return tt._1;
          f();
        })())(F), X = (() => {
          if (G.tag === "Just")
            return G._1;
          if (G.tag === "Nothing")
            return x;
          f();
        })();
        return (() => {
          if (X.tag === "Nothing")
            return 0;
          if (X.tag === "Just")
            return X._1;
          f();
        })() + (() => {
          if (Q.tag === "Nothing")
            return 0;
          if (Q.tag === "Just")
            return Q._1;
          f();
        })();
      })()
    ))(w)),
    su: D.su,
    stack: [],
    trace: []
  })(D.queue), W = N(Z(Gx))({ ...Y, stack: [] })(Pn(Y.stack));
  return { x: W.x, queue: D.queue, trace: W.trace };
}, Bx = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (l) => Rx(t)(n)(e)(r)(o)(i)(s)(u)(c)(a)(l).x, zx = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = (c, a, l) => {
    const d = ut(a)(e), _ = (() => {
      if (d.tag === "Nothing")
        return 0.5;
      if (d.tag === "Just")
        return d._1._1 / 2;
      f();
    })(), g = c.from.node === a ? c.from.port : c.to.node === a ? c.to.port : x;
    if (g.tag === "Just") {
      const p = ut(a)(n);
      if (p.tag === "Just") {
        const m = Zt((h) => h.id === g._1)(p._1);
        if (m.tag === "Just") {
          const h = M(m._1.offset) * M(4);
          return l === "North" || l === "South" ? h : 0;
        }
        if (m.tag === "Nothing") {
          const h = So(o)(c.id)(l)(_);
          return l === "North" || l === "South" ? h : 0;
        }
        f();
      }
      if (p.tag === "Nothing") {
        const m = So(o)(c.id)(l)(_);
        return l === "North" || l === "South" ? m : 0;
      }
      f();
    }
    if (g.tag === "Nothing") {
      const p = So(o)(c.id)(l)(_);
      return l === "North" || l === "South" ? p : 0;
    }
    f();
  }, u = (c) => (a) => (l) => (d) => {
    let _ = c, g = a, p = l, m = d, h = !0, $;
    for (; h; ) {
      const y = _, v = g, w = p, b = zt((L) => x, (L) => (C) => J("Just", { head: L, tail: C }), m);
      if (b.tag === "Nothing") {
        h = !1, $ = y;
        continue;
      }
      if (b.tag === "Just") {
        const L = b._1.head, C = Zt((B) => B.from.node === w && B.to.node === L || B.from.node === L && B.to.node === w)(r), E = (() => {
          if (C.tag === "Nothing")
            return v + 0;
          if (C.tag === "Just")
            return v + (s(C._1, w, C._1.from.node === w ? Jn : Tn) - s(
              C._1,
              L,
              C._1.from.node === L ? Jn : Tn
            ));
          f();
        })();
        _ = K(I)(L)(E)(y), g = E, p = L, m = b._1.tail;
        continue;
      }
      f();
    }
    return $;
  };
  return N((c) => (a) => {
    const l = zt((g) => x, (g) => (p) => J("Just", { head: g, tail: p }), gi(t)(a)), d = (() => {
      if (l.tag === "Nothing")
        return K(I)(a)(0)(R);
      if (l.tag === "Just")
        return u(K(I)(l._1.head)(0)(R))(0)(l._1.head)(l._1.tail);
      f();
    })(), _ = N((g) => (p) => Ze(g)(-p._2))(0)(Uc(d));
    return N((g) => (p) => K(I)(p._1)(p._2 + _)(g))(c)(Uc(d));
  })(R)(Io(I.compare)((() => {
    const c = (a, l) => {
      if (a.tag === "Leaf")
        return l;
      if (a.tag === "Node")
        return c(a._5, tn("Cons", a._4, c(a._6, l)));
      f();
    };
    return Dt(on.foldr, c(t.root, nn));
  })()));
}, Dx = (t) => (n) => {
  const e = (o, i, s) => Sn(3)(i) === "$d:" && hg(
    K1,
    (() => {
      const u = ut(i)(t.preds);
      if (u.tag === "Nothing")
        return [];
      if (u.tag === "Just")
        return u._1;
      f();
    })()
  ), r = (o) => (i) => (s) => (u) => (c) => (a) => (l) => {
    let d = o, _ = i, g = u, p = a, m = l, h = !0, $;
    for (; h; ) {
      const y = d, v = _, w = g, T = p, b = m, L = v.length;
      if (b >= L) {
        h = !1, $ = y;
        continue;
      }
      const C = b >= 0 && b < v.length ? J("Just", v[b]) : x, E = (() => {
        if (C.tag === "Nothing")
          return "";
        if (C.tag === "Just")
          return C._1;
        f();
      })(), B = e(t, E);
      if (b === (L - 1 | 0) || B) {
        const D = (() => {
          if (B) {
            const F = ut(E)(t.preds), z = (() => {
              if (F.tag === "Nothing")
                return [];
              if (F.tag === "Just")
                return F._1;
              f();
            })();
            if (0 < z.length) {
              const V = w - 1 | 0, Z = ut(z[0])(t.nodeIndex);
              if (Z.tag === "Nothing")
                return V;
              if (Z.tag === "Just")
                return Z._1;
              f();
            }
          }
          return w - 1 | 0;
        })();
        d = N((F) => (z) => {
          if (z >= 0 && z < v.length) {
            const V = v[z];
            return e(t, V) ? F : N((Z) => (Y) => {
              const W = ut(Y)(t.nodeIndex), A = (() => {
                if (W.tag === "Nothing")
                  return 0;
                if (W.tag === "Just")
                  return W._1;
                f();
              })();
              return A < T || A > D ? K(I)(Y + "→" + V)()(Z) : Z;
            })(F)((() => {
              const Z = ut(V)(t.preds);
              if (Z.tag === "Nothing")
                return [];
              if (Z.tag === "Just")
                return Z._1;
              f();
            })());
          }
          return e(t, "") ? F : N((V) => (Z) => {
            const Y = ut(Z)(t.nodeIndex), W = (() => {
              if (Y.tag === "Nothing")
                return 0;
              if (Y.tag === "Just")
                return Y._1;
              f();
            })();
            return W < T || W > D ? K(I)(Z + "→")()(V) : V;
          })(F)((() => {
            const V = ut("")(t.preds);
            if (V.tag === "Nothing")
              return [];
            if (V.tag === "Just")
              return V._1;
            f();
          })());
        })(y)(Ht(0, b)), _ = v, g = w, p = D, m = b + 1 | 0;
        continue;
      }
      d = y, _ = v, g = w, p = T, m = b + 1 | 0;
    }
    return $;
  };
  return n.length < 3 ? R : N((o) => (i) => {
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
  })(R)(Ht(1, n.length - 2 | 0));
}, Qx = (t) => (n) => (e) => (r) => (o) => {
  const i = le(n), s = N((u) => (c) => {
    const a = N((l) => (d) => {
      const _ = (() => {
        if (o === "HRight") {
          const h = ut(d)(t.preds);
          if (h.tag === "Nothing")
            return [];
          if (h.tag === "Just")
            return h._1;
          f();
        }
        if (o === "HLeft") {
          const h = ut(d)(t.succs);
          if (h.tag === "Nothing")
            return [];
          if (h.tag === "Just")
            return h._1;
        }
        f();
      })(), g = _.length;
      if (g === 0)
        return l;
      const p = Je(g - 1 | 0, 2), m = Je(g, 2);
      return N((h) => ($) => {
        if ((() => {
          const y = ut(d)(h.align);
          if (y.tag === "Nothing")
            return d !== d;
          if (y.tag === "Just")
            return y._1 !== d;
          f();
        })())
          return h;
        if ($ >= 0 && $ < _.length) {
          const y = ut(_[$])(t.nodeIndex), v = (() => {
            if (y.tag === "Nothing")
              return 0;
            if (y.tag === "Just")
              return y._1;
            f();
          })();
          if (!(q0(_[$] + "→" + d)(e) || q0(d + "→" + _[$])(e)) && (() => {
            if (r === "VDown")
              return h.r < v;
            if (r === "VUp")
              return h.r > v;
            f();
          })()) {
            const w = ut(_[$])(h.root), T = (() => {
              if (w.tag === "Nothing")
                return _[$];
              if (w.tag === "Just")
                return w._1;
              f();
            })();
            return {
              root: K(I)(d)(T)(h.root),
              align: K(I)(_[$])(d)(K(I)(d)(T)(h.align)),
              r: v
            };
          }
        }
        return h;
      })(l)((() => {
        if (r === "VDown")
          return Ht(p, m);
        if (r === "VUp")
          return Pn(Ht(p, m));
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
        return Pn(c);
      f();
    })());
    return { root: a.root, align: a.align };
  })({ root: qe(H((u) => k(u, u))(i)), align: qe(H((u) => k(u, u))(i)) })((() => {
    if (o === "HRight")
      return n;
    if (o === "HLeft")
      return Pn(n);
    f();
  })());
  return { root: s.root, align: s.align };
}, ps = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
  const l = Qx(n)(e)(u)(c)(a), d = zx(l)(o)(r)(i)(s)(a);
  return Vh()((_) => (g) => J(
    "Just",
    (() => {
      const p = ut(_)(d);
      if (p.tag === "Nothing")
        return g + 0;
      if (p.tag === "Just")
        return g + p._1;
      f();
    })()
  ))(Bx(t)(n)(e)(r)(o)(i)(s)(d)(l)(c)(a));
}, X0 = (t) => (n) => Bt((e) => (r) => N((o) => (i) => i >= 0 && i < n.length ? i >= 0 && i < t.length ? o + n[i] + t[i] : o + n[i] + 0 : i >= 0 && i < t.length ? o + 1 + t[i] : o + 1)(0)((() => {
  const o = Ht(0, n.length - 1 | 0);
  return e < 1 ? [] : bt(0, e, o);
})()))(n), Hx = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = Cx(0)(n.length - 1 | 0), c = M(t.layerGap), a = s(Eh(u, c)), l = Ov(U1(o)(a)(r)(i)(R))(a);
  return H((d) => {
    const _ = Ax(d)(l);
    return _.tag === "Just" && _._1 > 0 ? Ze(c)(2 + M(_._1 - 1 | 0) * 2.5) : c;
  })(Ht(0, u - 1 | 0));
}, ed = (t) => (n) => (e) => (r) => hg(
  (o) => N((i) => (s) => {
    if (!i.ok)
      return i;
    const u = ut(s)(r), c = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      f();
    })(), a = ut(s)(e), l = (() => {
      if (a.tag === "Nothing")
        return c + 1;
      if (a.tag === "Just")
        return c + a._1._1;
      f();
    })();
    return c + 1e-4 > i.pos && l + 1e-4 > i.pos ? { ok: !0, pos: l } : { ok: !1, pos: i.pos };
  })({ ok: !0, pos: -1e18 })(o).ok,
  n
), Wx = (t) => (n) => (e) => (r) => {
  const o = It((i) => (s) => rt.compare(i.w)(s.w))(H((i) => ({ l: i, w: nd(i) }))(lt(
    ed()(n)(e),
    r
  )));
  return 0 < o.length ? J("Just", o[0].l) : x;
}, Ox = (t) => (n) => {
  const e = qe(le(H(Bt((o) => (i) => k(i, o)))(t))), r = (o) => It((i) => (s) => ot.compare((() => {
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
          return R;
        if (i.tag === "Node")
          return Kt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(N((i) => (s) => At(I)(_n)(s.to.node)([s.from.node])(i))(R)(n));
    })(),
    succs: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return R;
        if (i.tag === "Node")
          return Kt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(N((i) => (s) => At(I)(_n)(s.from.node)([s.to.node])(i))(R)(n));
    })(),
    nodeIndex: e
  };
}, qx = (t) => (n) => {
  const e = It((d) => (_) => rt.compare(d.w)(_.w))(Bt((d) => (_) => ({ i: d, l: _, w: nd(_) }))(n)), r = 0 < e.length ? J("Just", e[0]) : x, o = (() => {
    if (r.tag === "Just")
      return r._1.i;
    if (r.tag === "Nothing")
      return 0;
    f();
  })(), i = o >= 0 && o < n.length ? J("Just", n[o]) : x, s = (() => {
    if (i.tag === "Just")
      return ((_) => (g) => {
        let p = _, m = g, h = !0, $;
        for (; h; ) {
          const y = p, v = m;
          if (v.tag === "Nil") {
            h = !1, $ = y;
            continue;
          }
          if (v.tag === "Cons") {
            p = ye(y)(v._1), m = v._2;
            continue;
          }
          f();
        }
        return $;
      })(999999)((() => {
        const _ = (g, p) => {
          if (g.tag === "Leaf")
            return p;
          if (g.tag === "Node")
            return _(g._5, tn("Cons", g._4, _(g._6, p)));
          f();
        };
        return _(i._1, nn);
      })());
    if (i.tag === "Nothing")
      return 0;
    f();
  })(), u = (d) => N((_) => (g) => Ze(_)((() => {
    const p = ut(g._1)(t);
    if (p.tag === "Nothing")
      return g._2 + 1;
    if (p.tag === "Just")
      return g._2 + p._1._1;
    f();
  })()))(-999999)(Uc(d)), c = o >= 0 && o < n.length ? J("Just", n[o]) : x, a = (() => {
    if (c.tag === "Just")
      return u(c._1);
    if (c.tag === "Nothing")
      return 0;
    f();
  })(), l = Ln(
    (d) => (_) => {
      const g = (p) => {
        if (p.tag === "Leaf")
          return R;
        if (p.tag === "Node")
          return Kt("Node", p._1, p._2, p._3, p._4 + _, g(p._5), g(p._6));
        f();
      };
      return g(d);
    },
    n,
    Bt((d) => (_) => pr(d)(2) === 0 ? s - ((p) => (m) => {
      let h = p, $ = m, y = !0, v;
      for (; y; ) {
        const w = h, T = $;
        if (T.tag === "Nil") {
          y = !1, v = w;
          continue;
        }
        if (T.tag === "Cons") {
          h = ye(w)(T._1), $ = T._2;
          continue;
        }
        f();
      }
      return v;
    })(999999)((() => {
      const p = (m, h) => {
        if (m.tag === "Leaf")
          return h;
        if (m.tag === "Node")
          return p(m._5, tn("Cons", m._4, p(m._6, h)));
        f();
      };
      return p(_, nn);
    })()) : a - u(_))(n)
  );
  return Fx(N((d) => (_) => {
    const g = It(rt.compare)(vt(ut(_))(l));
    return K(I)(_)(g.length === 4 ? 1 < g.length && 2 < g.length ? (g[1] + g[2]) / 2 : 0 : 0 < g.length ? g[0] : 0)(d);
  })(R)(Io(I.compare)(le(H((d) => {
    const _ = (g) => {
      if (g.tag === "Leaf")
        return R;
      if (g.tag === "Node")
        return Kt("Node", g._1, g._2, g._3, void 0, _(g._5), _(g._6));
      f();
    };
    return Dt(_e.foldr, _(d));
  })(l)))));
}, Xx = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Ox(n)(o), u = Dx(s)(n), c = { nodeGap: t.nodeGap * 4 | 0 }, a = Yn(
    I.compare,
    Xn,
    qe(H((g) => k(g, k(1, 1)))(lt(
      K1,
      le(n)
    ))),
    (() => {
      const g = (p) => {
        if (p.tag === "Leaf")
          return R;
        if (p.tag === "Node")
          return Kt("Node", p._1, p._2, p._3, k(p._4._1 * M(4), p._4._2), g(p._5), g(p._6));
        f();
      };
      return g(e);
    })()
  ), l = [
    ps(c)(s)(n)(a)(r)(o)(i)(u)(Q0)(W0),
    ps(c)(s)(n)(a)(r)(o)(i)(u)(H0)(W0),
    ps(c)(s)(n)(a)(r)(o)(i)(u)(Q0)(O0),
    ps(c)(s)(n)(a)(r)(o)(i)(u)(H0)(O0)
  ], d = qx(a)(l);
  if (ed()(n)(a)(d))
    return d;
  const _ = Wx()(n)(a)(l);
  if (_.tag === "Just")
    return _._1;
  if (_.tag === "Nothing")
    return l[0];
  f();
}, Yx = (t) => (n) => (e) => (r) => {
  const o = gg(
    x,
    eg,
    (i) => i.node === n ? J("Just", i.position) : x,
    t
  );
  if (o.tag === "Nothing")
    return t;
  if (o.tag === "Just") {
    const i = o._1;
    return H((s) => s.node === e ? { ...s, position: k(i._1 + r._1, i._2 + r._2) } : s)(t);
  }
  f();
}, Ux = (t) => (n) => (e) => (r) => {
  const o = lt((s) => ae(Pe)(s.node)(n), t), i = (() => {
    if (e === "Vertical") {
      if (r === "Start")
        return N((s) => (u) => ye(s)(u.position._1))(99999)(o);
      if (r === "End")
        return N((s) => (u) => Ze(s)(u.position._1))(0)(o);
      if (r === "Center") {
        const s = N((u) => (c) => u + c.position._1)(0)(o);
        return o.length === 0 ? 0 : s / M(o.length);
      }
      f();
    }
    if (e === "Horizontal") {
      if (r === "Start")
        return N((s) => (u) => ye(s)(u.position._2))(99999)(o);
      if (r === "End")
        return N((s) => (u) => Ze(s)(u.position._2))(0)(o);
      if (r === "Center") {
        const s = N((u) => (c) => u + c.position._2)(0)(o);
        return o.length === 0 ? 0 : s / M(o.length);
      }
    }
    f();
  })();
  return H((s) => {
    if (ae(Pe)(s.node)(n)) {
      if (e === "Vertical")
        return { ...s, position: k(i, s.position._2) };
      if (e === "Horizontal")
        return { ...s, position: k(s.position._1, i) };
      f();
    }
    return s;
  })(t);
}, Vx = (t) => (n) => N((e) => (r) => r.tag === "AlignGroup" ? Ux(e)(r._1.nodes)(r._1.axis)(r._1.alignment) : r.tag === "RelativePosition" ? Yx(e)(r._1.anchor)(r._1.target)(r._1.offset) : e)(n)(t), Kx = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const c = H((d) => N((_) => (g) => Ze(_)((() => {
    const p = ut(g)(r);
    if (p.tag === "Nothing")
      return 1;
    if (p.tag === "Just")
      return p._1._2;
    f();
  })()))(1)(d))(e), a = Xx(t)(e)(r)(o)(i)(u), l = X0(Hx(t)(e)(r)(o)(i)(s)((d) => {
    const _ = X0(d)(c);
    return le(Bt((g) => (p) => Bt((m) => (h) => ({
      node: h,
      position: k(
        (() => {
          const $ = ut(h)(a);
          return (() => {
            if ($.tag === "Nothing")
              return 0;
            if ($.tag === "Just")
              return $._1;
            f();
          })() / M(4);
        })(),
        g >= 0 && g < _.length ? _[g] : 0
      ),
      size: (() => {
        const $ = Sn(3)(h) === "$d:" ? k(0, 1) : k(1, 1), y = ut(h)(r);
        if (y.tag === "Nothing")
          return $;
        if (y.tag === "Just")
          return y._1;
        f();
      })(),
      layer: g,
      order: m
    }))(p))(e));
  }))(c);
  return Vx(n)(le(Bt((d) => (_) => Bt((g) => (p) => ({
    node: p,
    position: k(
      (() => {
        const m = ut(p)(a);
        return (() => {
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just")
            return m._1;
          f();
        })() / M(4);
      })(),
      d >= 0 && d < l.length ? l[d] : 0
    ),
    size: (() => {
      const m = Sn(3)(p) === "$d:" ? k(0, 1) : k(1, 1), h = ut(p)(r);
      if (h.tag === "Nothing")
        return m;
      if (h.tag === "Just")
        return h._1;
      f();
    })(),
    layer: d,
    order: g
  }))(_))(e)));
}, vc = /* @__PURE__ */ Wa(Es)(/* @__PURE__ */ ao(32)), Y0 = /* @__PURE__ */ Wa(Es)(/* @__PURE__ */ ao(31)), Li = /* @__PURE__ */ (() => {
  const t = Rp("25214903917");
  if (t.tag === "Nothing")
    return Ag;
  if (t.tag === "Just")
    return t._1;
  f();
})(), Ei = /* @__PURE__ */ Gc(/* @__PURE__ */ Wa(Es)(/* @__PURE__ */ ao(48)))(Es), Mx = (t) => {
  const n = Bp(t);
  return vi(Pg((() => {
    if (n.tag === "Nothing")
      return Ag;
    if (n.tag === "Just")
      return n._1;
    f();
  })())(Li))(Ei);
}, Vc = /* @__PURE__ */ ao(11), Ys = (t) => (n) => {
  const e = vi(xs(Ns(n)(Li))(Vc))(Ei);
  return k(
    (() => {
      const r = $g(Pp(Ic(e)(ao(48 - t | 0))));
      if (r.tag === "Nothing")
        return 0;
      if (r.tag === "Just")
        return r._1;
      f();
    })(),
    e
  );
}, jx = (t) => {
  const n = Ys(26)(t), e = Ys(27)(n._2);
  return k((M(n._1) * Ro(2)(27) + M(e._1)) / Ro(2)(53), e._2);
}, Zx = (t) => (n) => {
  const e = N((r) => (o) => {
    const i = jx(r.finalR);
    return { rs: [...r.rs, i._1], finalR: i._2 };
  })({ rs: [], finalR: t })(n);
  return k(
    H((r) => r.x)(It((r) => (o) => rt.compare(r.k)(o.k))(Ln((r) => (o) => ({ x: r, k: o }), n, e.rs))),
    e.finalR
  );
}, tN = (t) => {
  const n = vi(xs(Ns(t)(Li))(Vc))(Ei), e = vi(xs(Ns(n)(Li))(Vc))(Ei);
  return k(
    xs(Ns((() => {
      const r = Ic(n)(ao(16));
      return r0.compare(r)(Y0) !== "LT" ? Gc(r)(vc) : r;
    })())(vc))((() => {
      const r = Ic(e)(ao(16));
      return r0.compare(r)(Y0) !== "LT" ? Gc(r)(vc) : r;
    })()),
    e
  );
}, Si = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Us = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, df = /* @__PURE__ */ an(I)(Xt), ko = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Vs = /* @__PURE__ */ an(I)(Xt), nN = /* @__PURE__ */ _u(Xo), eN = /* @__PURE__ */ N(co)(0), rN = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, U0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, oN = (t) => (n) => (e) => {
  if (t >= 0 && t < e.length) {
    const r = e[t];
    if (n >= 0 && n < e.length) {
      const o = Rr(Ut, x, t, e[n], e);
      if (o.tag === "Just")
        return Rr(Ut, x, n, r, o._1);
      if (o.tag === "Nothing")
        return x;
      f();
    }
  }
  return x;
}, iN = (t) => (n) => (e) => (r) => (o) => df(N((i) => (s) => {
  const u = It((c) => (a) => ot.compare((() => {
    const l = Si(c.id)(o);
    if (l.tag === "Nothing")
      return 1e6;
    if (l.tag === "Just")
      return l._1;
    f();
  })())((() => {
    const l = Si(a.id)(o);
    if (l.tag === "Nothing")
      return 1e6;
    if (l.tag === "Just")
      return l._1;
    f();
  })()))(lt((c) => Us(c.to.node)(e), lt((c) => c.from.node === s, r)));
  return {
    ranks: [...i.ranks, ...Bt((c) => (a) => k(a.id, M((i.rankSum + c | 0) + 1 | 0)))(u)],
    rankSum: i.rankSum + u.length | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), sN = (t) => (n) => (e) => (r) => (o) => df(N((i) => (s) => {
  const u = It((a) => (l) => {
    const d = ot.compare((() => {
      const _ = ko(l.from.node)(e);
      if (_.tag === "Nothing")
        return -1;
      if (_.tag === "Just")
        return _._1;
      f();
    })())((() => {
      const _ = ko(a.from.node)(e);
      if (_.tag === "Nothing")
        return -1;
      if (_.tag === "Just")
        return _._1;
      f();
    })());
    return d === "EQ" ? ot.compare((() => {
      const _ = Si(a.id)(o);
      if (_.tag === "Nothing")
        return 1e6;
      if (_.tag === "Just")
        return _._1;
      f();
    })())((() => {
      const _ = Si(l.id)(o);
      if (_.tag === "Nothing")
        return 1e6;
      if (_.tag === "Just")
        return _._1;
      f();
    })()) : d;
  })(lt((a) => Us(a.from.node)(e), lt((a) => a.to.node === s, r))), c = u.length;
  return {
    ranks: [...i.ranks, ...Bt((a) => (l) => k(l.id, M((i.rankSum + c | 0) - a | 0)))(u)],
    rankSum: i.rankSum + c | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), Kc = (t) => (n) => (e) => {
  const r = Vs(Bt((u) => (c) => k(c, u))(t)), o = Vs(Bt((u) => (c) => k(c, u))(n)), i = vt((u) => {
    const c = ko(u.from.node)(r), a = ko(u.to.node)(o);
    if (c.tag === "Just" && a.tag === "Just")
      return J("Just", k(c._1, a._1));
    const l = ko(u.from.node)(o), d = ko(u.to.node)(r);
    return l.tag === "Just" && d.tag === "Just" ? J("Just", k(d._1, l._1)) : x;
  })(e), s = i.length;
  return N((u) => (c) => N((a) => (l) => c >= 0 && c < i.length && l >= 0 && l < i.length && ((i[c]._1 - i[l]._1 | 0) * (i[c]._2 - i[l]._2 | 0) | 0) < 0 ? a + 1 | 0 : a)(u)(Ht(c + 1 | 0, s - 1 | 0)))(0)(Ht(0, s - 2 | 0));
}, uN = (t) => (n) => (e) => (r) => {
  const o = (s) => (u) => {
    let c = s, a = u, l = !0, d;
    for (; l; ) {
      const _ = c, g = a;
      if (g >= (_.length - 1 | 0)) {
        l = !1, d = _;
        continue;
      }
      if (g >= 0 && g < _.length) {
        const p = g + 1 | 0;
        if (p >= 0 && p < _.length) {
          const m = _[g], h = _[p];
          if (ge((w) => w.before === m && w.after === h, r)) {
            c = _, a = g + 1 | 0;
            continue;
          }
          const $ = Rr(Ut, x, g, h, _), y = (() => {
            if ($.tag === "Just")
              return Rr(Ut, x, g + 1 | 0, m, $._1);
            if ($.tag === "Nothing")
              return x;
            f();
          })(), v = (() => {
            if (y.tag === "Nothing")
              return _;
            if (y.tag === "Just")
              return y._1;
            f();
          })();
          if (Kc(n)(v)(e) < Kc(n)(_)(e)) {
            c = v, a = g + 1 | 0;
            continue;
          }
          c = _, a = g + 1 | 0;
          continue;
        }
        l = !1, d = _;
        continue;
      }
      l = !1, d = _;
    }
    return d;
  };
  return ((s) => {
    let u = s, c = !0, a;
    for (; c; ) {
      const l = u, d = o(l)(0);
      if (nN(d)(l)) {
        c = !1, a = l;
        continue;
      }
      u = d;
    }
    return a;
  })(t);
}, ms = (t) => (n) => N((e) => (r) => {
  if (r >= 0 && r < t.length) {
    const o = t[r], i = r + 1 | 0;
    if (i >= 0 && i < t.length)
      return e + Kc(o)(t[i])(n) | 0;
  }
  return e;
})(0)(Ht(0, t.length - 2 | 0)), cN = /* @__PURE__ */ (() => {
  const t = (n) => {
    if (n.length < 7) {
      const s = (u) => (c) => {
        let a = u, l = c, d = !0, _;
        for (; d; ) {
          const g = a, p = l, m = p - 1 | 0;
          if (m >= 0 && m < g.length) {
            if (p >= 0 && p < g.length && p > 0 && g[m].key > g[p].key) {
              const h = oN(p - 1 | 0)(p)(g);
              if (h.tag === "Just") {
                a = h._1, l = p - 1 | 0;
                continue;
              }
              if (h.tag === "Nothing") {
                d = !1, _ = g;
                continue;
              }
              f();
            }
            d = !1, _ = g;
            continue;
          }
          d = !1, _ = g;
        }
        return _;
      };
      return N((u) => (c) => s(u)(c))(n)(Ht(1, n.length - 1 | 0));
    }
    const e = Je(n.length, 2), r = t(bt(0, e, n)), o = t(bt(e, n.length, n));
    return ((s) => (u) => (c) => {
      let a = s, l = u, d = c, _ = !0, g;
      for (; _; ) {
        const p = a, m = l, h = d;
        if (m >= 0 && m < r.length) {
          if (h >= 0 && h < o.length) {
            if (r[m].key > o[h].key) {
              a = Ft(p)(o[h]), l = m, d = h + 1 | 0;
              continue;
            }
            a = Ft(p)(r[m]), l = m + 1 | 0, d = h;
            continue;
          }
          _ = !1, g = [...p, ...m < 1 ? r : bt(m, r.length, r)];
          continue;
        }
        _ = !1, g = [...p, ...h < 1 ? o : bt(h, o.length, o)];
      }
      return g;
    })([])(0)(0);
  };
  return t;
})(), aN = (t) => (n) => (e) => {
  const r = vt((a) => a.tag === "OrderConstraint" ? J("Just", { before: a._1.before, after: a._1.after }) : x)(t.constraints), o = (a) => N((l) => (d) => {
    const _ = d.after, g = d.before, p = uo(Ut, x, (h) => h === g, l), m = uo(Ut, x, (h) => h === _, l);
    if (p.tag === "Just" && m.tag === "Just" && p._1 > m._1) {
      const h = _g(Ut, x, p._1, l), $ = (() => {
        if (h.tag === "Nothing")
          return l;
        if (h.tag === "Just")
          return h._1;
        f();
      })(), y = dg(Ut, x, m._1, g, $);
      if (y.tag === "Nothing")
        return $;
      if (y.tag === "Just")
        return y._1;
      f();
    }
    return l;
  })(a)(r), i = df(Bt((a) => (l) => k(l.id, a))(e)), s = (a, l, d) => {
    const _ = a.length;
    return N((g) => (p) => {
      const m = l ? p - 1 | 0 : p + 1 | 0, h = m >= 0 && m < g._1.length ? J("Just", g._1[m]) : x;
      if (h.tag === "Just") {
        const $ = p >= 0 && p < g._1.length ? J("Just", g._1[p]) : x;
        if ($.tag === "Just") {
          const y = Vs(Bt((L) => (C) => k(C, L))(h._1)), v = Vs(Bt((L) => (C) => k(C, L))($._1)), w = l ? iN(h._1)(y)(v)(e)(i) : sN(h._1)(y)(v)(e)(i), T = N((L) => (C) => {
            const E = vt((D) => Si(D.id)(w))(lt(l ? (D) => D.to.node === C._2 && Us(D.from.node)(y) : (D) => D.from.node === C._2 && Us(D.to.node)(y), e));
            if (E.length === 0)
              return { ...L, items: [...L.items, { n: C._2, key: x, origIdx: C._1 }] };
            const B = Ys(24)(L.r);
            return {
              items: [
                ...L.items,
                {
                  n: C._2,
                  key: J("Just", (eN(E) + (M(B._1) * 4172325152040912e-24 - 0.03500000014901161)) / M(E.length)),
                  origIdx: C._1
                }
              ],
              r: B._2
            };
          })({ items: [], r: g._2 })(Bt(Mn)($._1)), b = Rr(
            Ut,
            x,
            p,
            uN(o(H((L) => L.n)(cN((() => {
              const L = T.items, C = (B) => (D) => {
                let F = B, z = D, V = !0, Z;
                for (; V; ) {
                  const Y = F, W = z;
                  if (Y >= 0 && Y < L.length) {
                    if (L[Y].key.tag === "Just") {
                      V = !1, Z = L[Y].key._1;
                      continue;
                    }
                    if (L[Y].key.tag === "Nothing") {
                      F = Y + 1 | 0, z = W;
                      continue;
                    }
                    f();
                  }
                  V = !1, Z = W;
                }
                return Z;
              };
              return ((B) => (D) => (F) => {
                let z = B, V = D, Z = F, Y = !0, W;
                for (; Y; ) {
                  const A = z, P = V, O = Z;
                  if (A >= 0 && A < L.length) {
                    if (L[A].key.tag === "Just") {
                      z = A + 1 | 0, V = L[A].key._1, Z = [...O, { n: L[A].n, key: L[A].key._1, origIdx: L[A].origIdx }];
                      continue;
                    }
                    if (L[A].key.tag === "Nothing") {
                      const G = (P + C(A + 1 | 0)(P + 1)) / 2;
                      z = A + 1 | 0, V = G, Z = [...O, { n: L[A].n, key: G, origIdx: L[A].origIdx }];
                      continue;
                    }
                    f();
                  }
                  Y = !1, W = O;
                }
                return W;
              })(0)(-1)([]);
            })()))))(h._1)(e)(r),
            g._1
          );
          if (b.tag === "Just")
            return k(b._1, T.r);
          if (b.tag === "Nothing")
            return k(g._1, g._2);
          f();
        }
        if ($.tag === "Nothing")
          return k(g._1, g._2);
        f();
      }
      if (h.tag === "Nothing")
        return k(g._1, g._2);
      f();
    })(k(a, d))(l ? Ht(1, _ - 1 | 0) : Pn(Ht(0, _ - 2 | 0)));
  }, u = N((a) => (l) => K(I)(l.from.node)()(K(I)(l.to.node)()(a)))(R)(e), c = N((a) => (l) => {
    if (a.result.crossings === 0)
      return a;
    const d = (y) => (v) => (w) => (T) => {
      let b = y, L = v, C = w, E = T, B = !0, D;
      for (; B; ) {
        const F = b, z = L, V = C, Z = E;
        if (V === 0) {
          B = !1, D = { layout: F, crossings: 0, random: Z };
          continue;
        }
        const Y = s(F, z, Z), W = ms(Y._1)(e);
        if (W < V) {
          b = Y._1, L = !z, C = W, E = Y._2;
          continue;
        }
        B = !1, D = { layout: F, crossings: V, random: Y._2 };
      }
      return D;
    }, _ = Ys(1)(a.result.random), g = _._1 !== 0, p = t.modelOrder.tag === "Leaf", m = (a.firstTry || a.secondTry) && !p ? a.firstTry : g, h = (() => {
      if (!p) {
        const T = s(n, m, _._2);
        return d(T._1)(!m)(ms(T._1)(e))(T._2);
      }
      const y = m ? 0 : rN(0)(n.length - 1 | 0), v = y >= 0 && y < n.length ? J("Just", n[y]) : x;
      if (v.tag === "Just" && v._1.length > 1) {
        const T = lt((b) => U0(b)(u), v._1);
        if (T.length > 1) {
          const b = Zx(_._2)(T), L = b._1, C = Rr(
            Ut,
            x,
            y,
            o(N((E) => (B) => U0(B)(u) ? E.idx >= 0 && E.idx < L.length ? { idx: E.idx + 1 | 0, result: [...E.result, L[E.idx]] } : { idx: E.idx, result: [...E.result, B] } : { idx: E.idx, result: [...E.result, B] })({ idx: 0, result: [] })(v._1).result),
            n
          );
          if (C.tag === "Just") {
            const E = s(C._1, m, b._2);
            return d(E._1)(!m)(ms(E._1)(e))(E._2);
          }
        }
      }
      const w = s(n, m, _._2);
      return d(w._1)(!m)(ms(w._1)(e))(w._2);
    })(), $ = a.secondTry ? !1 : a.secondTry;
    return a.firstTry ? {
      result: h.crossings < a.result.crossings ? { layout: h.layout, crossings: h.crossings, random: h.random } : { ...a.result, random: h.random },
      firstTry: !1,
      secondTry: !0
    } : {
      result: h.crossings < a.result.crossings ? { layout: h.layout, crossings: h.crossings, random: h.random } : { ...a.result, random: h.random },
      firstTry: a.firstTry,
      secondTry: $
    };
  })({
    result: {
      layout: n,
      crossings: 1e9,
      random: vi(Pg(tN(Mx(1))._1)(Li))(Ei)
    },
    firstTry: t.modelOrder.tag !== "Leaf",
    secondTry: !1
  })(Ht(1, t.iterations)).result;
  return n.length <= 0 || t.iterations <= 0 ? n : c.layout;
}, fN = (t) => t, V0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, re = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ho = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, Ci = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = I.compare(n._1)(e._1);
      return r === "LT" ? Cn : r === "GT" ? An : I.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), lN = /* @__PURE__ */ an(I)(Xt), gN = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = Ci.compare(t)(s._3);
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
}, dN = /* @__PURE__ */ fN("Greedy"), xc = (t) => (n) => (e) => N((r) => (o) => {
  if (o.from.node === o.to.node)
    return r;
  if (o.from.node === n && !V0(o.to.node)(r.marks)) {
    const i = re(o.to.node)(r.inDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = K(I)(o.to.node)(s)(r.inDeg);
    return (() => {
      const c = re(o.to.node)(r.outDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        f();
      })() && !ae(Pe)(o.to.node)(r.sources);
    })() ? { ...r, inDeg: u, sources: [...r.sources, o.to.node] } : { ...r, inDeg: u };
  }
  if (o.to.node === n && !V0(o.from.node)(r.marks)) {
    const i = re(o.from.node)(r.outDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = K(I)(o.from.node)(s)(r.outDeg);
    return (() => {
      const c = re(o.from.node)(r.inDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        f();
      })() && !ae(Pe)(o.from.node)(r.sinks);
    })() ? { ...r, outDeg: u, sinks: [...r.sinks, o.from.node] } : { ...r, outDeg: u };
  }
  return r;
})({ ...e, remaining: lt((r) => r !== n, e.remaining) })(t), _N = /* @__PURE__ */ N((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return K(I)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return K(I)(n._1.node)(0)(t);
    if (n._1.pin.tag === "LastLayer")
      return K(I)(n._1.node)(99999)(t);
  }
  return t;
})(R), rd = (t) => (n) => (e) => {
  const r = re(n)(t), o = re(e)(t);
  return r.tag === "Just" && o.tag === "Just" && r._1 > o._1;
}, od = (t) => (n) => (e) => (r) => {
  if (Ho(e)(r.visited) || Ho(e)(r.visiting))
    return r;
  const o = N(hN(t)(n)(e))({ ...r, visiting: K(I)(e)()(r.visiting) })((() => {
    const i = re(e)(n);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just")
      return i._1;
    f();
  })());
  return {
    ...o,
    visiting: $i(I)(e)(o.visiting),
    visited: K(I)(e)()(o.visited)
  };
}, hN = (t) => (n) => (e) => (r) => (o) => rd(t)(e)(o) ? { ...r, backEdges: K(Ci)(k(e, o))()(r.backEdges) } : Ho(o)(r.visiting) ? { ...r, backEdges: K(Ci)(k(e, o))()(r.backEdges) } : Ho(o)(r.visited) ? r : od(t)(n)(o)(r), pN = (t) => (n) => (e) => {
  const r = (_) => {
    let g = _, p = !0, m;
    for (; p; ) {
      const h = g, $ = zt((y) => x, (y) => (v) => J("Just", { head: y, tail: v }), h.sinks);
      if ($.tag === "Just") {
        g = xc(e)($._1.head)({
          ...h,
          sinks: $._1.tail,
          marks: K(I)($._1.head)(h.nextRight)(h.marks),
          nextRight: h.nextRight - 1 | 0
        });
        continue;
      }
      if ($.tag === "Nothing") {
        const y = zt((v) => x, (v) => (w) => J("Just", { head: v, tail: w }), h.sources);
        if (y.tag === "Just") {
          g = xc(e)(y._1.head)({
            ...h,
            sources: y._1.tail,
            marks: K(I)(y._1.head)(h.nextLeft)(h.marks),
            nextLeft: h.nextLeft + 1 | 0
          });
          continue;
        }
        if (y.tag === "Nothing") {
          const v = (T) => {
            const b = re(T)(h.outDeg), L = re(T)(h.inDeg);
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
          }, w = It((T) => (b) => {
            const L = ot.compare(v(b))(v(T));
            return L === "EQ" ? ot.compare((() => {
              const C = re(T)(n);
              if (C.tag === "Nothing")
                return 1e6;
              if (C.tag === "Just")
                return C._1;
              f();
            })())((() => {
              const C = re(b)(n);
              if (C.tag === "Nothing")
                return 1e6;
              if (C.tag === "Just")
                return C._1;
              f();
            })()) : L;
          })(h.remaining);
          if (0 < w.length) {
            const T = w[0];
            g = xc(e)(T)({
              ...h,
              remaining: lt((b) => b !== T, h.remaining),
              marks: K(I)(T)(h.nextLeft)(h.marks),
              nextLeft: h.nextLeft + 1 | 0
            });
            continue;
          }
          p = !1, m = h;
          continue;
        }
      }
      f();
    }
    return m;
  }, o = Io(I.compare)([...H((_) => _.from.node)(e), ...H((_) => _.to.node)(e)]), i = lt((_) => _.from.node !== _.to.node, e), s = N((_) => (g) => At(I)(pn)(g.to.node)(1)(_))(R)(i), u = N((_) => (g) => At(I)(pn)(g.from.node)(1)(_))(R)(i), c = lt(
    (_) => {
      const g = re(_)(s);
      if (g.tag === "Nothing")
        return !0;
      if (g.tag === "Just")
        return g._1 === 0;
      f();
    },
    o
  ), a = lt(
    (_) => {
      const g = re(_)(u);
      if (g.tag === "Nothing")
        return !0;
      if (g.tag === "Just")
        return g._1 === 0;
      f();
    },
    o
  ), l = o.length + 1 | 0, d = N((_) => (g) => {
    const p = re(g)(_);
    return p.tag === "Just" && p._1 < 0 ? K(I)(g)(p._1 + l | 0)(_) : _;
  })(r({
    remaining: lt((_) => !ae(Pe)(_)(c) && !ae(Pe)(_)(a), o),
    marks: R,
    inDeg: s,
    outDeg: u,
    sources: c,
    sinks: a,
    nextLeft: 1,
    nextRight: -1
  }).marks)(o);
  return N((_) => (g) => {
    if (g.from.node === g.to.node)
      return _;
    if (rd(t)(g.from.node)(g.to.node))
      return K(Ci)(k(g.from.node, g.to.node))()(_);
    const p = re(g.from.node)(d), m = re(g.to.node)(d);
    return p.tag === "Just" && m.tag === "Just" && p._1 > m._1 ? K(Ci)(k(g.from.node, g.to.node))()(_) : _;
  })(R)(e);
}, mN = /* @__PURE__ */ N((t) => (n) => At(I)(_n)(n.from.node)([n.to.node])(t))(R), $N = (t) => (n) => {
  const e = mN(n), r = Io(I.compare)([...H((i) => i.from.node)(n), ...H((i) => i.to.node)(n)]), o = N((i) => (s) => K(I)(s.to.node)()(i))(R)(n);
  return N((i) => (s) => od(t)(e)(s)(i))({
    visiting: R,
    visited: R,
    backEdges: R
  })([...lt((i) => !Ho(i)(o), r), ...lt((i) => Ho(i)(o), r)]).backEdges;
}, yN = (t) => (n) => (e) => (r) => {
  const o = lN(Bt((u) => (c) => k(c, u))(n)), i = _N(e), s = (() => {
    if (t === "DepthFirst")
      return $N(i)(r);
    if (t === "Greedy")
      return pN(i)(o)(r);
    f();
  })();
  return {
    edges: H((u) => gN(k(u.from.node, u.to.node))(s) ? { ...u, from: u.to, to: u.from } : u)(r),
    reversedEdges: s
  };
}, id = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, vN = /* @__PURE__ */ N((t) => (n) => K(I)(n)()(t))(R), Ks = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, xN = /* @__PURE__ */ B1(I), We = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, K0 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Nc = (t) => (e) => {
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
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, NN = /* @__PURE__ */ an(ot)(Xt), wN = (t) => (n) => Yn(I.compare, Xn, t, n), sd = /* @__PURE__ */ Bt((t) => (n) => ({ src: n.src, tgt: n.tgt, delta: 1, weight: 1, eid: t })), TN = (t) => N((n) => (e) => ({
  base: (() => {
    const r = (o) => (i) => {
      let s = o, u = i, c = !0, a;
      for (; c; ) {
        const l = s, d = u;
        if (d.tag === "Nil") {
          c = !1, a = l;
          continue;
        }
        if (d.tag === "Cons") {
          s = id(l)(d._1), u = d._2;
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
          return o(i._5, tn("Cons", i._4, o(i._6, s)));
        f();
      };
      return o(e, nn);
    })()) | 0) + 1 | 0;
  })(),
  result: [
    ...n.result,
    (() => {
      if (n.base === 0)
        return e;
      const r = (o) => {
        if (o.tag === "Leaf")
          return R;
        if (o.tag === "Node")
          return Kt("Node", o._1, o._2, o._3, o._4 + n.base | 0, r(o._5), r(o._6));
        f();
      };
      return r(e);
    })()
  ]
}))({ base: 0, result: [] })(t).result, JN = (t) => (n) => {
  const e = vN(t);
  return xN(t)(sd(lt((r) => Ks(r.src)(e) && Ks(r.tgt)(e), n)));
}, bN = (t) => (n) => {
  const e = N((o) => (i) => At(I)(_n)(i.tgt)([i.src])(At(I)(_n)(i.src)([
    i.tgt
  ])(o)))(R)(n), r = (o) => (i) => (s) => {
    let u = o, c = i, a = s, l = !0, d;
    for (; l; ) {
      const _ = u, g = c, p = a, m = zt((h) => x, (h) => ($) => J("Just", { head: h, tail: $ }), _);
      if (m.tag === "Nothing") {
        l = !1, d = { nodes: p };
        continue;
      }
      if (m.tag === "Just") {
        if (Ks(m._1.head)(g)) {
          u = m._1.tail, c = g, a = p;
          continue;
        }
        u = [
          ...m._1.tail,
          ...(() => {
            const h = We(m._1.head)(e);
            if (h.tag === "Nothing")
              return [];
            if (h.tag === "Just")
              return h._1;
            f();
          })()
        ], c = K(I)(m._1.head)()(g), a = [...p, m._1.head];
        continue;
      }
      f();
    }
    return d;
  };
  return N((o) => (i) => {
    if (Ks(i)(o.visited))
      return o;
    const s = r([i])(o.visited)([]);
    return {
      ...o,
      visited: N((u) => (c) => K(I)(c)()(u))(o.visited)(s.nodes),
      components: [...o.components, s.nodes]
    };
  })({ visited: R, components: [] })(t).components;
}, kN = (t) => (n) => (e) => {
  const r = N((i) => (s) => At(I)(pn)(s.tgt)(1)(i))(R)(n), o = N((i) => (s) => At(I)(pn)(s.src)(1)(i))(R)(n);
  return N((i) => (s) => {
    const u = We(s)(r), c = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      f();
    })();
    if ((() => {
      const y = We(s)(o);
      return (() => {
        if (y.tag === "Nothing")
          return c !== 0;
        if (y.tag === "Just")
          return c !== y._1;
        f();
      })() || c === 0;
    })())
      return i;
    const a = We(s)(i.layers), l = (() => {
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      f();
    })(), d = i.layers, _ = N((y) => (v) => v.tgt === s ? {
      ...y,
      mIn: K0(y.mIn)((() => {
        const w = We(s)(d), T = We(v.src)(d);
        return (() => {
          if (w.tag === "Nothing")
            return 0;
          if (w.tag === "Just")
            return w._1;
          f();
        })() - (() => {
          if (T.tag === "Nothing")
            return 0;
          if (T.tag === "Just")
            return T._1;
          f();
        })() | 0;
      })())
    } : v.src === s ? {
      ...y,
      mOut: K0(y.mOut)((() => {
        const w = We(v.tgt)(d), T = We(s)(d);
        return (() => {
          if (w.tag === "Nothing")
            return 0;
          if (w.tag === "Just")
            return w._1;
          f();
        })() - (() => {
          if (T.tag === "Nothing")
            return 0;
          if (T.tag === "Just")
            return T._1;
          f();
        })() | 0;
      })())
    } : y)({ mIn: 1e9, mOut: 1e9 })(n), g = _.mIn === 1e9 ? -1 : _.mIn, p = _.mOut === 1e9 ? -1 : _.mOut;
    if (g < 0 || p < 0)
      return i;
    const m = (l - g | 0) + 1 | 0, h = (l + p | 0) - 1 | 0;
    if (h < m)
      return i;
    const $ = N((y) => (v) => {
      const w = Nc(v)(i.filling), T = (() => {
        if (w.tag === "Nothing")
          return 0;
        if (w.tag === "Just")
          return w._1;
        f();
      })();
      return T < y.bestFill ? { best: v, bestFill: T } : y;
    })({
      best: l,
      bestFill: (() => {
        const y = Nc(l)(i.filling);
        if (y.tag === "Nothing")
          return 0;
        if (y.tag === "Just")
          return y._1;
        f();
      })()
    })(Ht(m, h));
    return $.best === l ? i : {
      layers: K(I)(s)($.best)(i.layers),
      filling: K(ot)(l)((() => {
        const y = Nc(l)(i.filling);
        if (y.tag === "Nothing")
          return -1;
        if (y.tag === "Just")
          return y._1 - 1 | 0;
        f();
      })())(K(ot)($.best)($.bestFill + 1 | 0)(i.filling))
    };
  })({
    layers: e,
    filling: NN(H((i) => k(
      i,
      N((s) => (u) => (() => {
        const c = We(u)(e);
        return c.tag === "Nothing" ? !1 : c.tag === "Just" && c._1 === i;
      })() ? s + 1 | 0 : s)(0)(t)
    ))(Ht(
      0,
      N((i) => (s) => id(i)((() => {
        const u = We(s)(e);
        if (u.tag === "Nothing")
          return 0;
        if (u.tag === "Just")
          return u._1;
        f();
      })()))(0)(t)
    )))
  })(t).layers;
}, LN = (t) => (n) => kN(t)(sd(n))(N(wN)(R)(TN(H((e) => JN(e)(n))(bN(t)(n))))), EN = (t) => t, eo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ms = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ud = /* @__PURE__ */ (() => {
  const t = ue.unfoldr(Ee);
  return (n) => t(se("IterNode", n, Le));
})(), SN = /* @__PURE__ */ EN("NetworkSimplex"), CN = (t) => (n) => N((e) => (r) => {
  const o = N(Ms)(0)(vt((i) => eo(i)(e))(r));
  return N((i) => (s) => K(I)(s)(o)(i))(e)(r);
})(n)(t), AN = (t) => (n) => ({
  layers: H((e) => lt(
    (r) => {
      const o = eo(r)(n);
      return o.tag === "Nothing" ? !1 : o.tag === "Just" && o._1 === e;
    },
    t
  ))(Ht(
    0,
    ((r) => (o) => {
      let i = r, s = o, u = !0, c;
      for (; u; ) {
        const a = i, l = s;
        if (l.tag === "Nil") {
          u = !1, c = a;
          continue;
        }
        if (l.tag === "Cons") {
          i = Ms(a)(l._1), s = l._2;
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
          return r(o._5, tn("Cons", o._4, r(o._6, i)));
        f();
      };
      return r(n, nn);
    })())
  )),
  nodeLayer: n
}), PN = (t) => (n) => (e) => {
  const r = N((o) => (i) => K(I)(i)(!0)(o))(R)(n);
  return N((o) => (i) => K(I)(i._1)(i._2)(o))(LN(n)(vt((o) => o.from.node === o.to.node || (() => {
    const i = eo(o.from.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() || (() => {
    const i = eo(o.to.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() ? x : J("Just", { src: o.from.node, tgt: o.to.node }))(t)))(ud(e));
}, GN = (t) => (n) => (e) => (r) => {
  const o = (c) => (a) => {
    const l = eo(a)(c);
    if (l.tag === "Just")
      return c;
    if (l.tag === "Nothing") {
      const d = lt(
        (g) => g !== a,
        (() => {
          const g = eo(a)(t);
          if (g.tag === "Nothing")
            return [];
          if (g.tag === "Just")
            return g._1;
          f();
        })()
      ), _ = N(o)(c)(d);
      return K(I)(a)(1 + N(Ms)(0)(vt((g) => eo(g)(_))(d)) | 0)(_);
    }
    f();
  }, i = N(o)(R)(e), u = ((c) => (a) => {
    let l = c, d = a, _ = !0, g;
    for (; _; ) {
      const p = l, m = d;
      if (m.tag === "Nil") {
        _ = !1, g = p;
        continue;
      }
      if (m.tag === "Cons") {
        l = Ms(p)(m._1), d = m._2;
        continue;
      }
      f();
    }
    return g;
  })(1)((() => {
    const c = (a, l) => {
      if (a.tag === "Leaf")
        return l;
      if (a.tag === "Node")
        return c(a._5, tn("Cons", a._4, c(a._6, l)));
      f();
    };
    return c(i, nn);
  })());
  return N((c) => (a) => K(I)(a._1)(a._2)(c))((() => {
    const c = (a) => {
      if (a.tag === "Leaf")
        return R;
      if (a.tag === "Node")
        return Kt("Node", a._1, a._2, a._3, u - a._4 | 0, c(a._5), c(a._6));
      f();
    };
    return c(i);
  })())(ud(r));
}, IN = /* @__PURE__ */ N((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return K(I)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return K(I)(n._1.node)(0)(t);
  }
  return t;
})(R), FN = /* @__PURE__ */ N((t) => (n) => At(I)(_n)(n.to.node)([n.from.node])(t))(R), RN = /* @__PURE__ */ N((t) => (n) => At(I)(_n)(n.from.node)([n.to.node])(t))(R), BN = (t) => (n) => (e) => (r) => {
  const o = RN(e), i = FN(e), s = IN(n);
  return AN(r)(CN(vt((u) => u.tag === "SameLayer" ? J("Just", u._1.nodes) : x)(n))((() => {
    if (t === "LongestPath")
      return GN(o)(i)(r)(s);
    if (t === "NetworkSimplex")
      return PN(e)(r)(s);
    f();
  })()));
}, zN = /* @__PURE__ */ an(I)(Xt), DN = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, M0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, j0 = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ai = /* @__PURE__ */ an(I)(Xt), QN = /* @__PURE__ */ an(I)(Xt), Z0 = /* @__PURE__ */ (() => {
  const t = H((n) => ({ start: n.end, end: n.start, direction: n.direction }));
  return (n) => Pn(t(n));
})(), HN = (t) => (n) => (e) => (r) => {
  const o = zN(H((s) => k(s.edge, s))(r)), i = (s) => 0 < s.nodes.length && (() => {
    const u = DN(s.edgeId)(e);
    return u.tag === "Just" && s.nodes[0] !== u._1._1;
  })();
  return H((s) => {
    if (s.nodes.length <= 2) {
      const l = M0(s.edgeId)(o);
      if (l.tag === "Just") {
        const d = i(s), _ = ki(bi(d ? Z0(l._1.segments) : l._1.segments));
        return { ...l._1, edge: s.edgeId, segments: _, bends: Ln((g) => (p) => g.end, _, bt(1, _.length, _)), reversed: d };
      }
      if (l.tag === "Nothing")
        return { edge: s.edgeId, segments: [], bends: [], bendType: [], jumps: [], reversed: !1 };
      f();
    }
    const u = xt(vt((l) => M0(l)(o))(Ln(
      (l) => (d) => s.edgeId + ":" + l + "->" + d,
      s.nodes,
      bt(1, s.nodes.length, s.nodes)
    )))((l) => l.segments), c = i(s), a = ki(bi(c ? Z0(u) : u));
    return {
      edge: s.edgeId,
      segments: a,
      bends: Ln((l) => (d) => l.end, a, bt(1, a.length, a)),
      bendType: [],
      jumps: [],
      reversed: c
    };
  })(t);
}, WN = { layers: [], edges: [], chains: [] }, ON = {
  nodeGap: 3,
  layerGap: 2,
  iterations: 8,
  layerer: SN,
  cycleBreaker: dN,
  compactPostRouting: !0,
  compactionSpacings: Fv
}, qN = (t) => ({
  pos: k(0, 0),
  size: k(
    N((n) => (e) => j0(n)(e.position._1 + e.size._1))(0)(t),
    N((n) => (e) => j0(n)(e.position._2 + e.size._2))(0)(t)
  )
}), XN = (t) => (n) => (e) => {
  const r = Ai(H((a) => k(a.id, a.ports))(n.nodes)), o = lt((a) => Sn(3)(a.node) !== "$d:", e.placements), i = HN(e.withDummies.chains)(e.acyclic.reversedEdges)(QN(H((a) => k(
    a.id,
    k(a.from.node, a.to.node)
  ))(n.edges)))(mx(e.withDummies.edges)(e.placements)(r)(e.withDummies.chains)(M1(e.ordered)(lt(
    (a) => a.from.node !== a.to.node,
    e.withDummies.edges
  ))((() => {
    const a = (l) => {
      if (l.tag === "Leaf")
        return R;
      if (l.tag === "Node")
        return Kt("Node", l._1, l._2, l._3, k(l._4._1 * 4, l._4._2), a(l._5), a(l._6));
      f();
    };
    return a(Ai(H((l) => k(l.id, l.size))(n.nodes)));
  })()))), s = t.compactPostRouting ? zv()(t.compactionSpacings)({
    nodes: o,
    edges: n.edges,
    paths: i,
    ports: r
  }) : { nodes: o, edges: i }, u = H((a) => {
    const l = ki(bi(a.segments));
    return { ...a, segments: l, bends: Ln((d) => (_) => d.end, l, bt(1, l.length, l)) };
  })(s.edges), c = Bt((a) => (l) => ({ ...l, jumps: Tx(a)(l)(u) }))(u);
  return { nodes: s.nodes, edges: c, boundingBox: qN(s.nodes), metrics: l2(s.nodes)(c)(0) };
}, YN = (t) => (n) => (e) => {
  const r = Ai(H((i) => k(i.id, i.size))(n.nodes)), o = {
    ...e,
    placements: Kx({ nodeGap: t.nodeGap, layerGap: t.layerGap })(n.constraints)(e.ordered)(r)(Ai(H((i) => k(
      i.id,
      i.ports
    ))(n.nodes)))(e.withDummies.edges)(e.withDummies.chains)(M1(e.ordered)(e.withDummies.edges)((() => {
      const i = (s) => {
        if (s.tag === "Leaf")
          return R;
        if (s.tag === "Node")
          return Kt("Node", s._1, s._2, s._3, k(s._4._1 * 4, s._4._2), i(s._5), i(s._6));
        f();
      };
      return i(r);
    })()))
  };
  return { pipeline: o, result: XN(t)(n)(o) };
}, UN = (t) => (n) => (e) => YN(t)(n)({
  ...e,
  ordered: aN({
    iterations: t.iterations,
    constraints: n.constraints,
    modelOrder: Ai(Bt((r) => (o) => k(o.id, r))(n.nodes))
  })(e.withDummies.layers)(e.withDummies.edges)
}), VN = (t) => (n) => (e) => UN(t)(n)({
  ...e,
  withDummies: Jx(e.layered.nodeLayer)(e.acyclic.edges)(e.layered.layers)
}), KN = (t) => (n) => {
  const e = H((o) => o.id)(n.nodes), r = yN(t.cycleBreaker)(e)(n.constraints)(n.edges);
  return VN(t)(n)({
    acyclic: r,
    layered: BN(t.layerer)(n.constraints)(r.edges)(e),
    withDummies: WN,
    ordered: [],
    placements: []
  });
}, Gu = (t) => t, MN = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Yr = /* @__PURE__ */ Gu("TopSide"), Ur = /* @__PURE__ */ Gu("BottomSide"), Vr = /* @__PURE__ */ Gu("LeftSide"), Kr = /* @__PURE__ */ Gu("RightSide"), jN = (t) => {
  const n = rt.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = rt.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, tl = (t) => (n) => (e) => {
  const r = MN(t.h * 0.12)(t.w * 0.2), o = t.w / 2;
  return (n < 0 ? t.y + r : t.y + t.h - r) + n * r * Hn(jN((() => {
    const i = (e - (t.x + o)) / o;
    return 1 - i * i;
  })()));
}, ee = (t) => (n) => (e) => (r) => {
  let o = t, i = n, s = e, u = r, c = !0, a;
  for (; c; ) {
    const l = o, d = i, _ = s, g = u;
    if (l === "Rectangle") {
      if (_ === "TopSide") {
        c = !1, a = d.y;
        continue;
      }
      if (_ === "BottomSide") {
        c = !1, a = d.y + d.h;
        continue;
      }
      if (_ === "LeftSide") {
        c = !1, a = d.x;
        continue;
      }
      if (_ === "RightSide") {
        c = !1, a = d.x + d.w;
        continue;
      }
      o = dr, i = d, s = _, u = g;
      continue;
    }
    if (l === "Cylinder") {
      if (_ === "TopSide") {
        c = !1, a = tl(d)(-1)(g);
        continue;
      }
      if (_ === "BottomSide") {
        c = !1, a = tl(d)(1)(g);
        continue;
      }
      if (_ === "LeftSide") {
        c = !1, a = d.x;
        continue;
      }
      if (_ === "RightSide") {
        c = !1, a = d.x + d.w;
        continue;
      }
    }
    o = dr, i = d, s = _, u = g;
  }
  return a;
}, nl = (t) => (n) => {
  const e = n.y - t.y, r = e < 0 ? -e : e, o = n.x - (t.x + t.w), i = o < 0 ? -o : o, s = n.x - t.x, u = s < 0 ? -s : s, c = n.y - (t.y + t.h), a = c < 0 ? -c : c;
  return r <= a && r <= u && r <= i ? Yr : a <= u && a <= i ? Ur : u <= i ? Vr : Kr;
}, ZN = /* @__PURE__ */ (() => {
  const t = ue.unfoldr(Ee);
  return (n) => t(se("IterNode", n, Le));
})(), _f = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Pi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Gi = /* @__PURE__ */ an(I)(Xt), tw = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, nw = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, ew = /* @__PURE__ */ N((t) => (n) => K(I)(n)()(t))(R), rw = /* @__PURE__ */ N((t) => (n) => K(I)(n)()(t))(R), Iu = Qr.traverse(go), js = /* @__PURE__ */ an(I)(Xt), ow = (t) => (n) => Yn(I.compare, Xn, t, n), iw = /* @__PURE__ */ N((t) => (n) => K(I)(n)()(t))(R), sw = /* @__PURE__ */ an(I)(Xt), uw = (t) => (n) => Yn(I.compare, Xn, t, n), cw = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, el = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, aw = (t) => (n) => ({
  ...n,
  edges: Gi(H((e) => k(
    e._1,
    (() => {
      const r = _f(e._1)(t);
      if (r.tag === "Nothing")
        return e._2;
      if (r.tag === "Just") {
        const o = Pi(r._1._2)(n.nodes), i = Pi(r._1._1)(n.nodes), s = (() => {
          if (i.tag === "Nothing")
            return e._2;
          if (i.tag === "Just") {
            const u = zt((c) => x, (c) => (a) => J("Just", { head: c, tail: a }), e._2);
            if (u.tag === "Nothing")
              return e._2;
            if (u.tag === "Just")
              return [
                (() => {
                  const c = zt((_) => x, (_) => (g) => J("Just", { head: _, tail: g }), u._1.tail), a = c.tag === "Just" ? J("Just", c._1.head) : x, l = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, d = (() => {
                    if (a.tag === "Just") {
                      if ((a._1.x > u._1.head.x ? a._1.x - u._1.head.x < 0.5 : u._1.head.x - a._1.x < 0.5) && u._1.head.x >= l.x - 0.5 && u._1.head.x <= l.x + l.w + 0.5)
                        return a._1.y >= l.y + l.h ? J("Just", Ur) : a._1.y <= l.y ? J("Just", Yr) : x;
                      if ((a._1.y > u._1.head.y ? a._1.y - u._1.head.y < 0.5 : u._1.head.y - a._1.y < 0.5) && u._1.head.y >= l.y - 0.5 && u._1.head.y <= l.y + l.h + 0.5) {
                        if (a._1.x >= l.x + l.w)
                          return J("Just", Kr);
                        if (a._1.x <= l.x)
                          return J("Just", Vr);
                      }
                      return x;
                    }
                    if (a.tag === "Nothing")
                      return x;
                    f();
                  })();
                  if (d.tag === "Just") {
                    if (d._1 === "TopSide")
                      return { ...u._1.head, y: ee(i._1.shape)(l)(Yr)(u._1.head.x) };
                    if (d._1 === "BottomSide")
                      return { ...u._1.head, y: ee(i._1.shape)(l)(Ur)(u._1.head.x) };
                    if (d._1 === "LeftSide")
                      return { ...u._1.head, x: ee(i._1.shape)(l)(Vr)(u._1.head.y) };
                    if (d._1 === "RightSide")
                      return { ...u._1.head, x: ee(i._1.shape)(l)(Kr)(u._1.head.y) };
                    f();
                  }
                  if (d.tag === "Nothing") {
                    const _ = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, g = nl(_)(u._1.head);
                    if (g === "TopSide")
                      return { ...u._1.head, y: ee(i._1.shape)(_)(Yr)(u._1.head.x) };
                    if (g === "BottomSide")
                      return { ...u._1.head, y: ee(i._1.shape)(_)(Ur)(u._1.head.x) };
                    if (g === "LeftSide")
                      return { ...u._1.head, x: ee(i._1.shape)(_)(Vr)(u._1.head.y) };
                    if (g === "RightSide")
                      return { ...u._1.head, x: ee(i._1.shape)(_)(Kr)(u._1.head.y) };
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
          const u = Ge(s);
          if (u.tag === "Nothing")
            return s;
          if (u.tag === "Just")
            return Ft(u._1.init)((() => {
              const c = Ge(u._1.init), a = c.tag === "Just" ? J("Just", c._1.last) : x, l = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, d = (() => {
                if (a.tag === "Just") {
                  if ((a._1.x > u._1.last.x ? a._1.x - u._1.last.x < 0.5 : u._1.last.x - a._1.x < 0.5) && u._1.last.x >= l.x - 0.5 && u._1.last.x <= l.x + l.w + 0.5)
                    return a._1.y >= l.y + l.h ? J("Just", Ur) : a._1.y <= l.y ? J("Just", Yr) : x;
                  if ((a._1.y > u._1.last.y ? a._1.y - u._1.last.y < 0.5 : u._1.last.y - a._1.y < 0.5) && u._1.last.y >= l.y - 0.5 && u._1.last.y <= l.y + l.h + 0.5) {
                    if (a._1.x >= l.x + l.w)
                      return J("Just", Kr);
                    if (a._1.x <= l.x)
                      return J("Just", Vr);
                  }
                  return x;
                }
                if (a.tag === "Nothing")
                  return x;
                f();
              })();
              if (d.tag === "Just") {
                if (d._1 === "TopSide")
                  return { ...u._1.last, y: ee(o._1.shape)(l)(Yr)(u._1.last.x) };
                if (d._1 === "BottomSide")
                  return { ...u._1.last, y: ee(o._1.shape)(l)(Ur)(u._1.last.x) };
                if (d._1 === "LeftSide")
                  return { ...u._1.last, x: ee(o._1.shape)(l)(Vr)(u._1.last.y) };
                if (d._1 === "RightSide")
                  return { ...u._1.last, x: ee(o._1.shape)(l)(Kr)(u._1.last.y) };
                f();
              }
              if (d.tag === "Nothing") {
                const _ = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, g = nl(_)(u._1.last);
                if (g === "TopSide")
                  return { ...u._1.last, y: ee(o._1.shape)(_)(Yr)(u._1.last.x) };
                if (g === "BottomSide")
                  return { ...u._1.last, y: ee(o._1.shape)(_)(Ur)(u._1.last.x) };
                if (g === "LeftSide")
                  return { ...u._1.last, x: ee(o._1.shape)(_)(Vr)(u._1.last.y) };
                if (g === "RightSide")
                  return { ...u._1.last, x: ee(o._1.shape)(_)(Kr)(u._1.last.y) };
              }
              f();
            })());
        }
      }
      f();
    })()
  ))(ZN(n.edges)))
}), fw = (t) => (n) => (e) => {
  const r = Zt((o) => o.id === e)(t.graph.edges);
  if (r.tag === "Just")
    return J("Just", r._1);
  if (r.tag === "Nothing")
    return _f(e)(n);
  f();
}, lw = (t) => (n) => (e) => (r) => ({
  x: r.position._1 * t,
  y: r.position._2 * t,
  w: r.size._1 * t,
  h: r.size._2 * t,
  label: (() => {
    const o = Pi(r.node)(n);
    if (o.tag === "Just")
      return o._1;
    if (o.tag === "Nothing")
      return r.node;
    f();
  })(),
  shape: (() => {
    const o = Pi(r.node)(e);
    if (o.tag === "Nothing")
      return dr;
    if (o.tag === "Just")
      return o._1;
    f();
  })()
}), gw = (t) => ({ id: t, size: k(1, 1), ports: [], label: J("Just", t), shape: dr }), dw = (t) => (n) => (e) => (r) => k(r.node, lw(t)(n)(e)(r)), cd = (t) => {
  const n = bu(`
`)(t);
  return n.length === 0 ? [""] : n;
}, ad = (t) => {
  const n = (e, r) => {
    if (e.tag === "Leaf")
      return r;
    if (e.tag === "Node")
      return n(e._5, tn("Cons", e._4, n(e._6, r)));
    f();
  };
  return Dt(on.foldr, n(t.interiors, nn));
}, _w = (t) => Gi(vt((n) => J(
  "Just",
  k(n.edge, { id: n.edge, from: { node: n.from, port: x }, to: { node: n.to, port: x }, label: x })
))(xt(t.scenes)((n) => n.tag === "DataFlow" ? vt((e) => e.kind.tag === "SendToken" ? J("Just", e.kind._1) : x)(n._1.events) : []))), fd = (t) => {
  const n = im(t), e = lt((o) => tw(o.id)(n.nodes), t.graph.nodes), r = lt((o) => nw(o.id)(n.edges), t.graph.edges);
  return {
    nodes: [
      ...e,
      ...H(gw)(Dt(
        _e.foldr,
        gr(I.compare, n.nodes, ew(H((o) => o.id)(e)))
      ))
    ],
    edges: [
      ...r,
      ...vt(fw(t)(_w(t)))(Dt(
        _e.foldr,
        gr(I.compare, n.edges, rw(H((o) => o.id)(r)))
      ))
    ],
    constraints: t.graph.constraints
  };
}, hw = (t) => {
  const n = Iu((e) => {
    const r = w1(T1)((() => {
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
  })(fd(t).nodes);
  return () => {
    const e = n();
    return js(e);
  };
}, ld = (t) => {
  const n = hw(t);
  return () => {
    const e = n(), r = Iu(ld)(ad(t))();
    return N(ow)(e)(r);
  };
}, pw = (t) => (n) => {
  const e = zt((r) => x, (r) => (o) => J("Just", { head: r, tail: o }), n.segments);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ x: e._1.head.start._1 * t, y: e._1.head.start._2 * t }, ...H((r) => ({ x: r.end._1 * t, y: r.end._2 * t }))([e._1.head, ...e._1.tail])];
  f();
}, mw = (t) => (n) => k(n.edge, pw(t)(n)), $w = (t) => (n) => (e) => (r) => ({
  nodes: js(H(dw(M(4) * t)(n)(e))(r.nodes)),
  edges: Gi(H(mw(t))(r.edges)),
  chipExtras: R,
  edgeLabels: R
}), yw = (t) => (n) => ({
  ...aw(Gi(H((e) => k(e.id, k(e.from.node, e.to.node)))(n.edges)))($w(8)(js(H((e) => k(
    e.id,
    (() => {
      if (e.label.tag === "Just")
        return e.label._1;
      if (e.label.tag === "Nothing")
        return e.id;
      f();
    })()
  ))(n.nodes)))(js(H((e) => k(e.id, e.shape))(n.nodes)))(KN(ON)(n).result)),
  edgeLabels: Gi(vt((e) => e.label.tag === "Just" ? J("Just", k(e.id, e.label._1)) : x)(n.edges))
}), vw = (t) => N((n) => (e) => {
  if (e.tag === "Structural")
    return n;
  if (e.tag === "DataFlow")
    return N((r) => (o) => {
      if (o.kind.tag === "SendToken")
        return N((i) => (s) => K(I)(s)()(i))(r)(o.kind._1.labels);
      if (o.kind.tag === "FillNodeWithoutTransition")
        return N((i) => (s) => K(I)(s)()(i))(r)(o.kind._1.labels);
      f();
    })(n)(e._1.events);
  if (e.tag === "Hold" || e.tag === "EnterNode" || e.tag === "ExitNode")
    return n;
  f();
})(R)(t.scenes), xw = (t) => {
  const n = Iu((e) => {
    const r = w1(T1)(e);
    return () => {
      const o = r();
      return k(e, { labelW: o, charCount: Fe(Qo(e)), lineCount: 1 });
    };
  })(Dt(
    _e.foldr,
    iw(xt(Dt(_e.foldr, vw(t)))(cd))
  ));
  return () => {
    const e = n();
    return sw(e);
  };
}, gd = (t) => {
  const n = xw(t);
  return () => {
    const e = n(), r = Iu(gd)(ad(t))();
    return N(uw)(e)(r);
  };
}, Nw = M(4) * 8, ww = (t) => xt(t.scenes)((n) => {
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
}), Tw = (t) => (n) => (e) => {
  const r = (o) => {
    const i = vt((s) => {
      const u = cw(s)(t);
      return u.tag === "Just" ? J("Just", { w: u._1.labelW + 28, h: M(n2(1)(u._1.lineCount)) * 13.2 + 12 }) : x;
    })(xt(o)(cd));
    return i.length === 0 ? x : J(
      "Just",
      { w: N(el)(0)(H((s) => s.w)(i)), h: N(el)(0)(H((s) => s.h)(i)) }
    );
  };
  return N((o) => (i) => {
    if (i.kind.tag === "SendToken") {
      const s = _f(i.kind._1.edge)(e.edges), u = r(i.kind._1.labels);
      if (u.tag === "Just" && s.tag === "Just") {
        const c = u._1;
        return At(I)(_n)(i.kind._1.edge)(H((a) => ({ x: a.x + 14 + c.w, y: a.y - 6 - 8 - c.h }))(s._1))(o);
      }
      return o;
    }
    if (i.kind.tag === "FillNodeWithoutTransition") {
      const s = Pi(i.kind._1.node)(e.nodes), u = r(i.kind._1.labels);
      return u.tag === "Just" && s.tag === "Just" ? At(I)(_n)("__fill__:" + i.kind._1.node)((() => {
        const c = s._1.y - u._1.h - 14, a = s._1.x + s._1.w / 2, l = a - u._1.w / 2, d = a + u._1.w / 2, _ = s._1.y - 14;
        return [{ x: l, y: c }, { x: d, y: c }, { x: l, y: _ }, { x: d, y: _ }];
      })())(o) : o;
    }
    f();
  })(R)(ww(n));
}, Fu = (t) => (n) => (e) => ({
  layout: (() => {
    const r = yw()(c2(Nw)(t)(u2(s2)(fd(e))));
    return { ...r, chipExtras: Tw(n)(e)(r) };
  })(),
  interiors: (() => {
    const r = Fu(t)(n), o = (i) => {
      if (i.tag === "Leaf")
        return R;
      if (i.tag === "Node")
        return Kt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
      f();
    };
    return o(e.interiors);
  })()
}), rl = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Mc = (t) => (n) => (e) => {
  const r = t < 0.05 ? t : 0.05, o = (s, u) => {
    if (u.tag === "Leaf")
      return s;
    if (u.tag === "Node")
      return o(
        (() => {
          const c = rl(u._3)(e), a = (() => {
            if (c.tag === "Just")
              return c._1;
            if (c.tag === "Nothing")
              return { x: u._4.x, y: u._4.y, vx: 0, vy: 0 };
            f();
          })(), l = a.vx + (180 * (u._4.x - a.x) - 22 * a.vx) * r, d = a.vy + (180 * (u._4.y - a.y) - 22 * a.vy) * r;
          return K(I)(u._3)({ x: a.x + l * r, y: a.y + d * r, vx: l, vy: d })(o(s, u._5));
        })(),
        u._6
      );
    f();
  }, i = o(R, n);
  return {
    springs: i,
    applied: (() => {
      const s = (u, c) => {
        if (c.tag === "Leaf")
          return u;
        if (c.tag === "Node")
          return s(
            (() => {
              const a = s(u, c._5), l = rl(c._3)(i);
              if (l.tag === "Just")
                return K(I)(c._3)({ ...c._4, x: l._1.x, y: l._1.y })(a);
              if (l.tag === "Nothing")
                return K(I)(c._3)(c._4)(a);
              f();
            })(),
            c._6
          );
        f();
      };
      return s(R, n);
    })()
  };
};
var po = (function() {
  var t = {}, n = "Pure", e = "Throw", r = "Catch", o = "Sync", i = "Async", s = "Bind", u = "Bracket", c = "Fork", a = "Sequential", l = "Map", d = "Apply", _ = "Alt", g = "Cons", p = "Resume", m = "Release", h = "Finalizer", $ = "Finalized", y = "Forked";
  function v(G, Q, X, tt) {
    this.tag = G, this._1 = Q, this._2 = X, this._3 = tt;
  }
  function w(G) {
    var Q = function(X, tt, U) {
      return new v(G, X, tt, U);
    };
    return Q.tag = G, Q;
  }
  function T(G) {
    return new v(n, void 0);
  }
  function b(G) {
    try {
      G();
    } catch (Q) {
      setTimeout(function() {
        throw Q;
      }, 0);
    }
  }
  function L(G, Q, X) {
    try {
      return Q(X());
    } catch (tt) {
      return G(tt);
    }
  }
  function C(G, Q, X) {
    try {
      return Q(X)();
    } catch (tt) {
      return X(G(tt))(), T;
    }
  }
  var E = (function() {
    var G = 1024, Q = 0, X = 0, tt = new Array(G), U = !1;
    function q() {
      var j;
      for (U = !0; Q !== 0; )
        Q--, j = tt[X], tt[X] = void 0, X = (X + 1) % G, j();
      U = !1;
    }
    return {
      isDraining: function() {
        return U;
      },
      enqueue: function(j) {
        var et;
        Q === G && (et = U, q(), U = et), tt[(X + Q) % G] = j, Q++, U || q();
      }
    };
  })();
  function B(G) {
    var Q = {}, X = 0, tt = 0;
    return {
      register: function(U) {
        var q = X++;
        U.onComplete({
          rethrow: !0,
          handler: function(j) {
            return function() {
              tt--, delete Q[q];
            };
          }
        })(), Q[q] = U, tt++;
      },
      isEmpty: function() {
        return tt === 0;
      },
      killAll: function(U, q) {
        return function() {
          if (tt === 0)
            return q();
          var j = 0, et = {};
          function nt(ct) {
            et[ct] = Q[ct].kill(U, function(dt) {
              return function() {
                delete et[ct], j--, G.isLeft(dt) && G.fromLeft(dt) && setTimeout(function() {
                  throw G.fromLeft(dt);
                }, 0), j === 0 && q();
              };
            })();
          }
          for (var ft in Q)
            Q.hasOwnProperty(ft) && (j++, nt(ft));
          return Q = {}, X = 0, tt = 0, function(ct) {
            return new v(o, function() {
              for (var dt in et)
                et.hasOwnProperty(dt) && et[dt]();
            });
          };
        };
      }
    };
  }
  var D = 0, F = 1, z = 2, V = 3, Z = 4, Y = 5, W = 6;
  function A(G, Q, X) {
    var tt = 0, U = D, q = X, j = null, et = null, nt = null, ft = null, ct = null, dt = 0, Gt = 0, Jt = null, Yt = !0;
    function _t(st) {
      for (var gt, it, at; ; )
        switch (gt = null, it = null, at = null, U) {
          case z:
            U = F;
            try {
              q = nt(q), ft === null ? nt = null : (nt = ft._1, ft = ft._2);
            } catch (Nt) {
              U = Y, j = G.left(Nt), q = null;
            }
            break;
          case V:
            G.isLeft(q) ? (U = Y, j = q, q = null) : nt === null ? U = Y : (U = z, q = G.fromRight(q));
            break;
          case F:
            switch (q.tag) {
              case s:
                nt && (ft = new v(g, nt, ft)), nt = q._2, U = F, q = q._1;
                break;
              case n:
                nt === null ? (U = Y, q = G.right(q._1)) : (U = z, q = q._1);
                break;
              case o:
                U = V, q = L(G.left, G.right, q._1);
                break;
              case i:
                U = Z, q = C(G.left, q._1, function(Nt) {
                  return function() {
                    tt === st && (tt++, E.enqueue(function() {
                      tt === st + 1 && (U = V, q = Nt, _t(tt));
                    }));
                  };
                });
                return;
              case e:
                U = Y, j = G.left(q._1), q = null;
                break;
              // Enqueue the Catch so that we can call the error handler later on
              // in case of an exception.
              case r:
                nt === null ? ct = new v(g, q, ct, et) : ct = new v(g, q, new v(g, new v(p, nt, ft), ct, et), et), nt = null, ft = null, U = F, q = q._1;
                break;
              // Enqueue the Bracket so that we can call the appropriate handlers
              // after resource acquisition.
              case u:
                dt++, nt === null ? ct = new v(g, q, ct, et) : ct = new v(g, q, new v(g, new v(p, nt, ft), ct, et), et), nt = null, ft = null, U = F, q = q._1;
                break;
              case c:
                U = V, gt = A(G, Q, q._2), Q && Q.register(gt), q._1 && gt.run(), q = G.right(gt);
                break;
              case a:
                U = F, q = O(G, Q, q._1);
                break;
            }
            break;
          case Y:
            if (nt = null, ft = null, ct === null)
              U = W, q = et || j || q;
            else
              switch (gt = ct._3, at = ct._1, ct = ct._2, at.tag) {
                // We cannot recover from an unmasked interrupt. Otherwise we should
                // continue stepping, or run the exception handler if an exception
                // was raised.
                case r:
                  et && et !== gt && dt === 0 ? U = Y : j && (U = F, q = at._2(G.fromLeft(j)), j = null);
                  break;
                // We cannot resume from an unmasked interrupt or exception.
                case p:
                  et && et !== gt && dt === 0 || j ? U = Y : (nt = at._1, ft = at._2, U = z, q = G.fromRight(q));
                  break;
                // If we have a bracket, we should enqueue the handlers,
                // and continue with the success branch only if the fiber has
                // not been interrupted. If the bracket acquisition failed, we
                // should not run either.
                case u:
                  dt--, j === null && (it = G.fromRight(q), ct = new v(g, new v(m, at._2, it), ct, gt), (et === gt || dt > 0) && (U = F, q = at._3(it)));
                  break;
                // Enqueue the appropriate handler. We increase the bracket count
                // because it should not be cancelled.
                case m:
                  ct = new v(g, new v($, q, j), ct, et), U = F, et && et !== gt && dt === 0 ? q = at._1.killed(G.fromLeft(et))(at._2) : j ? q = at._1.failed(G.fromLeft(j))(at._2) : q = at._1.completed(G.fromRight(q))(at._2), j = null, dt++;
                  break;
                case h:
                  dt++, ct = new v(g, new v($, q, j), ct, et), U = F, q = at._1;
                  break;
                case $:
                  dt--, U = Y, q = at._1, j = at._2;
                  break;
              }
            break;
          case W:
            for (var wt in Jt)
              Jt.hasOwnProperty(wt) && (Yt = Yt && Jt[wt].rethrow, b(Jt[wt].handler(q)));
            Jt = null, et && j ? setTimeout(function() {
              throw G.fromLeft(j);
            }, 0) : G.isLeft(q) && Yt && setTimeout(function() {
              if (Yt)
                throw G.fromLeft(q);
            }, 0);
            return;
          case D:
            U = F;
            break;
          case Z:
            return;
        }
    }
    function Tt(st) {
      return function() {
        if (U === W)
          return Yt = Yt && st.rethrow, st.handler(q)(), function() {
          };
        var gt = Gt++;
        return Jt = Jt || {}, Jt[gt] = st, function() {
          Jt !== null && delete Jt[gt];
        };
      };
    }
    function ht(st, gt) {
      return function() {
        if (U === W)
          return gt(G.right(void 0))(), function() {
          };
        var it = Tt({
          rethrow: !1,
          handler: function() {
            return gt(G.right(void 0));
          }
        })();
        switch (U) {
          case D:
            et = G.left(st), U = W, q = et, _t(tt);
            break;
          case Z:
            et === null && (et = G.left(st)), dt === 0 && (U === Z && (ct = new v(g, new v(h, q(st)), ct, et)), U = Y, q = null, j = null, _t(++tt));
            break;
          default:
            et === null && (et = G.left(st)), dt === 0 && (U = Y, q = null, j = null);
        }
        return it;
      };
    }
    function mt(st) {
      return function() {
        var gt = Tt({
          rethrow: !1,
          handler: st
        })();
        return U === D && _t(tt), gt;
      };
    }
    return {
      kill: ht,
      join: mt,
      onComplete: Tt,
      isSuspended: function() {
        return U === D;
      },
      run: function() {
        U === D && (E.isDraining() ? _t(tt) : E.enqueue(function() {
          _t(tt);
        }));
      }
    };
  }
  function P(G, Q, X, tt) {
    var U = 0, q = {}, j = 0, et = {}, nt = new Error("[ParAff] Early exit"), ft = null, ct = t;
    function dt(Tt, ht, mt) {
      var st = ht, gt = null, it = null, at = 0, wt = {}, Nt, Ct;
      t: for (; ; )
        switch (Nt = null, st.tag) {
          case y:
            if (st._3 === t && (Nt = q[st._1], wt[at++] = Nt.kill(Tt, function(Wt) {
              return function() {
                at--, at === 0 && mt(Wt)();
              };
            })), gt === null)
              break t;
            st = gt._2, it === null ? gt = null : (gt = it._1, it = it._2);
            break;
          case l:
            st = st._2;
            break;
          case d:
          case _:
            gt && (it = new v(g, gt, it)), gt = st, st = st._1;
            break;
        }
      if (at === 0)
        mt(G.right(void 0))();
      else
        for (Ct = 0, Nt = at; Ct < Nt; Ct++)
          wt[Ct] = wt[Ct]();
      return wt;
    }
    function Gt(Tt, ht, mt) {
      var st, gt, it, at, wt, Nt;
      for (G.isLeft(Tt) ? (st = Tt, gt = null) : (gt = Tt, st = null); ; ) {
        if (it = null, at = null, wt = null, Nt = null, ft !== null)
          return;
        if (ht === null) {
          tt(st || gt)();
          return;
        }
        if (ht._3 !== t)
          return;
        switch (ht.tag) {
          case l:
            st === null ? (ht._3 = G.right(ht._1(G.fromRight(gt))), gt = ht._3) : ht._3 = st;
            break;
          case d:
            if (it = ht._1._3, at = ht._2._3, st) {
              if (ht._3 = st, wt = !0, Nt = j++, et[Nt] = dt(nt, st === it ? ht._2 : ht._1, function() {
                return function() {
                  delete et[Nt], wt ? wt = !1 : mt === null ? Gt(st, null, null) : Gt(st, mt._1, mt._2);
                };
              }), wt) {
                wt = !1;
                return;
              }
            } else {
              if (it === t || at === t)
                return;
              gt = G.right(G.fromRight(it)(G.fromRight(at))), ht._3 = gt;
            }
            break;
          case _:
            if (it = ht._1._3, at = ht._2._3, it === t && G.isLeft(at) || at === t && G.isLeft(it))
              return;
            if (it !== t && G.isLeft(it) && at !== t && G.isLeft(at))
              st = gt === it ? at : it, gt = null, ht._3 = st;
            else if (ht._3 = gt, wt = !0, Nt = j++, et[Nt] = dt(nt, gt === it ? ht._2 : ht._1, function() {
              return function() {
                delete et[Nt], wt ? wt = !1 : mt === null ? Gt(gt, null, null) : Gt(gt, mt._1, mt._2);
              };
            }), wt) {
              wt = !1;
              return;
            }
            break;
        }
        mt === null ? ht = null : (ht = mt._1, mt = mt._2);
      }
    }
    function Jt(Tt) {
      return function(ht) {
        return function() {
          delete q[Tt._1], Tt._3 = ht, Gt(ht, Tt._2._1, Tt._2._2);
        };
      };
    }
    function Yt() {
      var Tt = F, ht = X, mt = null, st = null, gt, it;
      t: for (; ; )
        switch (gt = null, it = null, Tt) {
          case F:
            switch (ht.tag) {
              case l:
                mt && (st = new v(g, mt, st)), mt = new v(l, ht._1, t, t), ht = ht._2;
                break;
              case d:
                mt && (st = new v(g, mt, st)), mt = new v(d, t, ht._2, t), ht = ht._1;
                break;
              case _:
                mt && (st = new v(g, mt, st)), mt = new v(_, t, ht._2, t), ht = ht._1;
                break;
              default:
                it = U++, Tt = Y, gt = ht, ht = new v(y, it, new v(g, mt, st), t), gt = A(G, Q, gt), gt.onComplete({
                  rethrow: !1,
                  handler: Jt(ht)
                })(), q[it] = gt, Q && Q.register(gt);
            }
            break;
          case Y:
            if (mt === null)
              break t;
            mt._1 === t ? (mt._1 = ht, Tt = F, ht = mt._2, mt._2 = t) : (mt._2 = ht, ht = mt, st === null ? mt = null : (mt = st._1, st = st._2));
        }
      for (ct = ht, it = 0; it < U; it++)
        q[it].run();
    }
    function _t(Tt, ht) {
      ft = G.left(Tt);
      var mt;
      for (var st in et)
        if (et.hasOwnProperty(st)) {
          mt = et[st];
          for (st in mt)
            mt.hasOwnProperty(st) && mt[st]();
        }
      et = null;
      var gt = dt(Tt, ct, ht);
      return function(it) {
        return new v(i, function(at) {
          return function() {
            for (var wt in gt)
              gt.hasOwnProperty(wt) && gt[wt]();
            return T;
          };
        });
      };
    }
    return Yt(), function(Tt) {
      return new v(i, function(ht) {
        return function() {
          return _t(Tt, ht);
        };
      });
    };
  }
  function O(G, Q, X) {
    return new v(i, function(tt) {
      return function() {
        return P(G, Q, X, tt);
      };
    });
  }
  return v.EMPTY = t, v.Pure = w(n), v.Throw = w(e), v.Catch = w(r), v.Sync = w(o), v.Async = w(i), v.Bind = w(s), v.Bracket = w(u), v.Fork = w(c), v.Seq = w(a), v.ParMap = w(l), v.ParApply = w(d), v.ParAlt = w(_), v.Fiber = A, v.Supervisor = B, v.Scheduler = E, v.nonCanceler = T, v;
})();
const Jw = po.Pure;
po.Throw;
function ro(t) {
  return function(n) {
    return po.Bind(t, n);
  };
}
const oo = po.Sync, bw = po.Async;
function hf(t, n) {
  return function() {
    return po.Fiber(t, null, n);
  };
}
po.Seq;
const pf = {
  isLeft: (t) => {
    if (t.tag === "Left")
      return !0;
    if (t.tag === "Right")
      return !1;
    f();
  },
  fromLeft: (t) => {
    if (t.tag === "Left")
      return t._1;
    if (t.tag === "Right")
      return o0("unsafeFromLeft: Right");
    f();
  },
  fromRight: (t) => {
    if (t.tag === "Right")
      return t._1;
    if (t.tag === "Left")
      return o0("unsafeFromRight: Left");
    f();
  },
  left: th,
  right: ig
}, kw = /* @__PURE__ */ (() => {
  const t = Jw();
  return (n) => t;
})();
let wc = null;
function Lw() {
  return wc || (typeof document > "u" ? null : wc = document.createElement("canvas").getContext("2d"));
}
const Tc = /* @__PURE__ */ new Map();
function dd(t, n, e, r, o, i) {
  const s = `${e} ${n}px ${t}`, u = s + "|" + r;
  if (Tc.has(u)) return Tc.get(u);
  const c = Lw();
  if (!c) return i;
  c.font = s;
  const a = o(c.measureText(r)), l = typeof document < "u" ? document.fonts : null;
  if (!l || l.check(s)) Tc.set(u, a);
  else if (l && l.load)
    try {
      l.load(s);
    } catch {
    }
  return a;
}
const Ew = (t, n, e, r) => dd(t, n, e, r, (o) => o.width, -1), Sw = (t, n, e, r) => dd(
  t,
  n,
  e,
  r,
  (o) => ({ ascent: o.actualBoundingBoxAscent, descent: o.actualBoundingBoxDescent }),
  { ascent: -1, descent: -1 }
), _d = (t) => (n) => {
  const e = Ew(t.family, t.size, t.weight, Qo(n));
  return e < 0 ? M(Eu(n).length) * t.size * 0.62 : e;
}, hd = (t) => (n) => {
  const e = Sw(t.family, t.size, t.weight, Qo(n));
  return e.ascent < 0 ? { ascent: t.size * 0.72, descent: t.size * 0.2 } : e;
}, pd = (t) => t, md = (t) => t, Ru = (t) => t, $d = (t) => t, Cw = (t) => t, yd = (t) => t, vd = (t) => t, Aw = /* @__PURE__ */ vd("BaselineTop"), zr = /* @__PURE__ */ vd("BaselineMiddle"), jc = /* @__PURE__ */ yd("AlignLeft"), Vo = /* @__PURE__ */ yd("AlignCenter"), In = /* @__PURE__ */ Cw("RoundJoin"), Be = /* @__PURE__ */ $d("ButtCap"), Ke = /* @__PURE__ */ $d("RoundCap"), Pw = /* @__PURE__ */ Ru("LayerPolyOut"), Gw = /* @__PURE__ */ Ru("LayerPolyIn"), Iw = /* @__PURE__ */ Ru("LayerNodeMask"), Fw = /* @__PURE__ */ Ru("LayerOverlay"), Zs = /* @__PURE__ */ md("NonZero"), Rw = /* @__PURE__ */ md("EvenOdd"), ol = /* @__PURE__ */ pd("Normal"), Ts = /* @__PURE__ */ pd("Difference"), dn = { r: 255, g: 255, b: 255, a: 255 }, ur = { r: 26, g: 26, b: 26, a: 255 }, Zc = (t) => (n) => Math.imul(t, n), Ko = (t) => {
  const n = t + 1831565813 | 0, e = Zc(n ^ n >>> 15)(n | 1), r = e ^ (e + Zc(e ^ e >>> 7)(e | 61) | 0), o = r ^ r >>> 14;
  return { prng: o, value: o < 0 ? (M(o) + 4294967296) / 4294967296 : M(o) / 4294967296 };
}, bn = (t) => (n) => (e) => {
  const r = Ko(e);
  return { prng: r.prng, value: t + r.value * (n - t) };
}, ta = (t) => (n) => N((e) => (r) => Zc(e ^ r)(-2048144789))(n)(H(Ve)(Wr(t))), Bw = (t) => t, xd = (t) => t, zw = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, xe = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Nd = (t) => (n) => (e) => {
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
}, na = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Dw = (t) => (n) => (e) => {
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
}, Qw = /* @__PURE__ */ xd("FlatLevel"), Hw = /* @__PURE__ */ xd("NestedLevel"), wd = /* @__PURE__ */ Bw("GenieSilhouette"), Ww = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, yLift: 0 };
  const o = Ko(t);
  return { prng: o.prng, yLift: o.value * e.yJitter * r };
}, Ow = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, dx: 0 };
  const o = Ko(t);
  return { prng: o.prng, dx: (o.value * 2 - 1) * e.xJitter * r };
}, il = (t) => (n) => {
  const e = n.cy - t.cy, r = n.cx - t.cx, o = Hn(r * r + e * e), i = (t.r * t.r - n.r * n.r + o * o) / (2 * o), s = Hn(zw(0)(t.r * t.r - i * i)), u = t.cx + i * r / o, c = t.cy + i * e / o, a = { x: u - s * e / o, y: c + s * r / o }, l = { x: u + s * e / o, y: c - s * r / o };
  return o === 0 || o > t.r + n.r ? { x: (t.cx + n.cx) / 2, y: t.cy } : a.y < l.y ? a : l;
}, qw = (t) => (n) => {
  const e = xe(n)(xe(t.w / 2)(t.h / 2));
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
}, Xw = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n)
    return { prng: t, r: o };
  if (e)
    return { prng: t, r: o * (1 + i.rJitter) };
  if (r)
    return { prng: t, r: o * i.smallScale };
  const s = Ko(t);
  return { prng: s.prng, r: o * (1 + s.value * i.rJitter) };
}, Td = (t) => {
  const n = xe(t.w)(t.h) / 2;
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
}, Yw = (t) => (n) => (e) => {
  const r = Ko(t), o = n.length;
  return o === 0 ? { prng: t, idx: -1 } : {
    prng: r.prng,
    idx: (() => {
      const i = Nd(0)(o - 1 | 0)(Nn(Ie(r.value * M(e))));
      return i >= 0 && i < n.length ? n[i] : -1;
    })()
  };
}, Uw = (t) => (n) => {
  const e = Ko(t), r = n.length;
  return r === 0 ? { prng: t, idx: -1 } : {
    prng: e.prng,
    idx: (() => {
      const o = Nd(0)(r - 1 | 0)(Nn(Ie(e.value * M(r))));
      return o >= 0 && o < n.length ? n[o] : -1;
    })()
  };
}, Jd = (t) => {
  const n = xe(t.w * 0.18)(t.h * 0.6);
  return [1, t.x + n, t.y, 2, t.x + t.w, t.y, 2, t.x + t.w - n, t.y + t.h, 2, t.x, t.y + t.h, 5];
}, bd = (t) => [
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
], kd = { rBase: 1.2, stepRatio: 0.7, rJitter: 0.35, yJitter: 0.2, xJitter: 0.2, heroShift: 0.2, smallScale: 0.85, smallShift: 0.15, seed: 7, minN: 3 }, Vw = (t) => {
  const n = xe(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.x + e;
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
}, Ld = (t) => {
  const n = xe(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + t.h + 5, o = t.y + n, i = r - n, s = t.x + e;
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
}, Ed = (t) => (n) => {
  const e = n.y + n.h, r = Rh(t.rBase * n.h)(n.w / (2 * (1 + (M(t.minN) - 1) * t.stepRatio))), o = n.w - 2 * r, i = 2 * r * t.stepRatio, s = na(t.minN)(o <= 0 || i <= 0 ? t.minN : Nn(lr(o / i)) + 1 | 0), u = s >= 3 ? Ht(1, s - 2 | 0) : [], c = u.length, a = Je(c + 1 | 0, 2), l = a < 1 ? [] : bt(0, a, u), d = Uw(t.seed)((() => {
    const h = c - a | 0;
    return h < 1 ? u : bt(h, u.length, u);
  })()), _ = d.idx, g = Yw(d.prng)(lt((h) => h !== _, l))(na(1)(l.length - (ae(Go)(_)(l) ? 1 : 0) | 0)), p = g.idx, m = s >= 2 ? o / (M(s) - 1) : 0;
  return N((h) => ($) => {
    const y = $ === p, v = $ === _, w = $ === 0 || $ === (s - 1 | 0), T = Xw(h.prng)(w)(v)(y)(r)(t), b = Ww(T.prng)(w)(t)(n.h), L = Ow(b.prng)(w)(t)(m);
    return {
      prng: L.prng,
      circles: Ft(h.circles)({
        cx: n.x + Dw(T.r)(n.w - T.r)((s >= 2 ? r + M($) / (M(s) - 1) * o + L.dx : r + 0 * o + L.dx) + (v ? t.heroShift * m : y ? -1 * t.smallShift * m : 0)),
        cy: e - b.yLift,
        r: T.r
      })
    };
  })({ prng: g.prng, circles: [] })(Ht(0, s - 1 | 0)).circles;
}, Sd = (t) => (n) => {
  const e = t.length;
  return Bt((r) => (o) => ({
    c: o,
    p1: (() => {
      if (r === 0)
        return { x: o.cx - o.r, y: n };
      const i = r - 1 | 0;
      return i >= 0 && i < t.length ? il(t[i])(o) : { x: o.cx - o.r, y: n };
    })(),
    p2: (() => {
      if (r === (e - 1 | 0))
        return { x: o.cx + o.r, y: n };
      const i = r + 1 | 0;
      return i >= 0 && i < t.length ? il(o)(t[i]) : { x: o.cx + o.r, y: n };
    })()
  }))(t);
}, Cd = (t) => {
  const n = xe(t.h * 0.4)(t.w * 0.2);
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
}, Kw = (t) => (n) => (e) => {
  const r = to(n.y - t.cy)(n.x - t.cx), o = to(e.y - t.cy)(e.x - t.cx), i = o > r ? o - r : o + 6.283185307179586 - r, s = na(1)(Nn(hu(i / 1.5707963267948966))), u = i / M(s), c = 1.3333333333333333 * Bh(u / 4);
  return xt(Ht(0, s - 1 | 0))((a) => {
    const l = r + M(a + 1 | 0) * u, d = t.cx + t.r * Vn(l), _ = t.cy + t.r * ie(l), g = r + M(a) * u;
    return [
      4,
      t.cx + t.r * Vn(g) - c * t.r * ie(g),
      t.cy + t.r * ie(g) + c * t.r * Vn(g),
      d + c * t.r * ie(l),
      _ - c * t.r * Vn(l),
      d,
      _
    ];
  });
}, Ad = (t) => (n) => {
  const e = t.h * 0.38, r = Sd(Ed(kd)({ x: t.x, y: t.y - e, w: t.w, h: e }))(t.y), o = xe(n)(xe(t.w / 2)(t.h / 2));
  return 0 < r.length ? [
    1,
    r[0].p1.x,
    r[0].p1.y,
    ...xt(r)((i) => Kw(i.c)(i.p1)(i.p2)),
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
  ] : qw(t)(n);
}, mf = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n === "Rectangle")
    return t.drawRoundedRect(e)(r)(o)(i);
  if (n === "Cylinder") {
    const s = Ld(e);
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
    const s = Jd(e);
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
    const s = Cd(e);
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
    const s = Td(e);
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
    const s = bd(e);
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
    const s = Ad(e)(r);
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
}, Mw = (t) => () => t.clip("evenodd"), jw = (t) => (n) => () => {
  t.filter = `blur(${n}px)`;
}, Zw = (t) => (n) => () => {
  const e = Math.max(8, Math.ceil(8 / Math.max(n.tile, 1e-3))), r = Math.max(2, Math.round(n.tile * e)), o = document.createElement("canvas");
  o.width = r, o.height = r;
  const i = o.getContext("2d");
  i.scale(e, e), i.fillStyle = n.bgCss, i.fillRect(0, 0, n.tile, n.tile), i.fillStyle = n.dotCss, i.beginPath(), i.arc(n.tile / 2, n.tile / 2, n.dotR, 0, 2 * Math.PI), i.fill();
  const s = t.createPattern(o, "repeat");
  s && typeof s.setTransform == "function" && s.setTransform(new DOMMatrix().translateSelf(n.ox, n.oy).scaleSelf(1 / e, 1 / e)), t.save(), t.fillStyle = s, t.fillRect(n.vx, n.vy, n.vw, n.vh), t.restore();
}, ea = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, $f = (t) => (n) => (e) => {
  const r = n.stroke;
  return () => {
    const o = r.value, i = ip(t)(e);
    if (o !== e)
      return i(), n.stroke.value = e;
  };
}, tT = (t) => (n) => (e) => {
  const r = n.font;
  return () => {
    const o = r.value, i = mu(t)(e);
    if (o !== e)
      return i(), n.font.value = e;
  };
}, qi = (t) => (n) => (e) => {
  const r = n.fill;
  return () => {
    const o = r.value, i = Na(t)(e);
    if (o !== e)
      return i(), n.fill.value = e;
  };
}, Bu = (t) => (n) => {
  const e = n.length, r = (i) => {
    if (i >= e)
      return () => {
      };
    const s = i >= 0 && i < n.length ? n[i] : 0;
    if (s === 1) {
      const u = Jg(t)((() => {
        const a = i + 1 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })())((() => {
        const a = i + 2 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 2) {
      const u = ui(t)((() => {
        const a = i + 1 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })())((() => {
        const a = i + 2 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 3) {
      const u = ci(t)({
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
      const u = dp(t)({
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
      const u = bg(t), c = r(i + 1 | 0);
      return () => (u(), c());
    }
    return () => {
    };
  }, o = Tg(t);
  return () => (o(), r(0)());
}, nT = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = ea(i)(ea(r / 2)(o / 2)), u = Jg(t)(n + s)(e);
  return () => (u(), ui(t)(n + r - s)(e)(), ci(t)({ cpx: n + r, cpy: e, x: n + r, y: e + s })(), ui(t)(n + r)(e + o - s)(), ci(t)({ cpx: n + r, cpy: e + o, x: n + r - s, y: e + o })(), ui(t)(n + s)(e + o)(), ci(t)({ cpx: n, cpy: e + o, x: n, y: e + o - s })(), ui(t)(n)(e + s)(), ci(t)({ cpx: n, cpy: e, x: n + s, y: e })(), bg(t)());
}, eT = () => ({ font: { value: "" }, fill: { value: "" }, stroke: { value: "" } }), rT = (t) => (n) => {
  const e = Ja(t)({ x: 0, y: 0, width: n.width, height: n.height });
  return () => {
    e();
    const r = eT();
    return { ctx: t, surface: n, styleCache: r, maskDepth: { value: 0 }, groupAlpha: { value: 1 }, alphaSaves: { value: [] } };
  };
}, oT = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, iT = (t) => rn(t.weight) + " " + Mr(t.size) + "px " + t.family, tr = (t) => {
  const n = Mr(M(t.a) / 255);
  return t.a >= 255 ? "rgb(" + rn(t.r) + "," + rn(t.g) + "," + rn(t.b) + ")" : "rgba(" + rn(t.r) + "," + rn(t.g) + "," + rn(t.b) + "," + n + ")";
}, sT = (t) => (n) => (e) => (r) => {
  const o = qi(t)(e)(tr(r));
  return () => (o(), ap(t)({ x: 0, y: 0, width: n.width, height: n.height })());
}, uT = (t) => (n) => (e) => {
  const r = n.font;
  return () => (r.value = "", n.fill.value = "", n.stroke.value = "", Zw(t)({
    vx: e.viewport.vx,
    vy: e.viewport.vy,
    vw: e.viewport.vw,
    vh: e.viewport.vh,
    bgCss: tr(e.bgColor),
    dotCss: tr(e.dotColor),
    tile: e.tile,
    dotR: e.dotRadius,
    ox: e.origin.x,
    oy: e.origin.y
  })());
}, cT = (t) => (n) => (e) => (r) => {
  const o = qi(t)(n)(tr(r));
  return () => (o(), Bu(t)(e)(), Ta(t)());
}, aT = (t) => (n) => (e) => (r) => (o) => {
  const i = qi(t)(n)(tr(r));
  return () => (i(), $f(t)(n)(tr(o.color))(), xa(t)(o.width)(), vu(t)((() => {
    if (o.lineJoin === "RoundJoin")
      return yu;
    if (o.lineJoin === "BevelJoin")
      return Aa;
    if (o.lineJoin === "MiterJoin")
      return Pa;
    f();
  })())(), za(t)((() => {
    if (o.lineCap === "ButtCap")
      return Fa;
    if (o.lineCap === "RoundCap")
      return Ga;
    if (o.lineCap === "SquareCap")
      return Ia;
    f();
  })())(), Bu(t)(e)(), Ta(t)(), wa(t)());
}, fT = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Tg(t);
  return () => {
    if (s(), nT(t)(e.x)(e.y)(e.w)(e.h)(r)(), o.tag === "Just" ? (qi(t)(n)(tr(o._1.color))(), Ta(t)()) : o.tag === "Nothing" || f(), i.tag === "Just")
      return $f(t)(n)(tr(i._1.color))(), xa(t)(i._1.width)(), vu(t)((() => {
        if (i._1.lineJoin === "RoundJoin")
          return yu;
        if (i._1.lineJoin === "BevelJoin")
          return Aa;
        if (i._1.lineJoin === "MiterJoin")
          return Pa;
        f();
      })())(), za(t)((() => {
        if (i._1.lineCap === "ButtCap")
          return Fa;
        if (i._1.lineCap === "RoundCap")
          return Ga;
        if (i._1.lineCap === "SquareCap")
          return Ia;
        f();
      })())(), wa(t)();
    i.tag !== "Nothing" && f();
  };
}, lT = (t) => (n) => (e) => (r) => {
  const o = $f(t)(n)(tr(r.color));
  return () => (o(), xa(t)(r.width)(), vu(t)((() => {
    if (r.lineJoin === "RoundJoin")
      return yu;
    if (r.lineJoin === "BevelJoin")
      return Aa;
    if (r.lineJoin === "MiterJoin")
      return Pa;
    f();
  })())(), za(t)((() => {
    if (r.lineCap === "ButtCap")
      return Fa;
    if (r.lineCap === "RoundCap")
      return Ga;
    if (r.lineCap === "SquareCap")
      return Ia;
    f();
  })())(), Bu(t)(e)(), wa(t)());
}, sl = (t) => (n) => (e) => {
  const r = qi(t)(n)(tr(e.color));
  return () => (r(), tT(t)(n)(iT(e.font))(), Ba(t)((() => {
    if (e.align === "AlignLeft")
      return mp;
    if (e.align === "AlignCenter")
      return Ca;
    if (e.align === "AlignRight")
      return $p;
    f();
  })())(), Ra(t)((() => {
    if (e.baseline === "BaselineTop")
      return _p;
    if (e.baseline === "BaselineMiddle")
      return Sa;
    if (e.baseline === "BaselineAlphabetic")
      return hp;
    if (e.baseline === "BaselineBottom")
      return pp;
    f();
  })())(), ba(t)(e.content)(e.x)(e.y)());
}, Pd = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => oT
}, gT = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => Pd
}, dT = (t) => (n) => (e) => {
  const r = ea(n.width / e.vw)(n.height / e.vh), o = Pc(t)({ translateX: (n.width - e.vw * r) / 2 - e.vx * r, translateY: (n.height - e.vh * r) / 2 - e.vy * r });
  return () => (o(), Ls(t)({ scaleX: r, scaleY: r })(), vu(t)(yu)());
}, _T = { pure: (t) => (n) => () => t, Apply0: () => Pd }, hT = { Applicative0: () => _T, Bind1: () => gT }, Gd = {
  fillPath: (t) => (n) => (e) => {
    const r = cT(e.ctx)(e.styleCache)(t)(n.color), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = lT(e.ctx)(e.styleCache)(t)(n), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = aT(r.ctx)(r.styleCache)(t)(n.color)(e), i = r.maskDepth;
    return () => {
      if (i.value === 0)
        return o();
    };
  },
  drawRoundedRect: (t) => (n) => (e) => (r) => (o) => {
    const i = fT(o.ctx)(o.styleCache)(t)(n)(e)(r), s = o.maskDepth;
    return () => {
      if (s.value === 0)
        return i();
    };
  },
  drawText: (t) => (n) => {
    const e = sl(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  drawTextAffine: (t) => (n) => (e) => {
    const r = kr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", fp(e.ctx)(t)(), sl(e.ctx)(e.styleCache)(n)(), Lr(e.ctx)(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "";
    };
  },
  pushTransform: (t) => (n) => {
    const e = kr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", Pc(n.ctx)({ translateX: t.tx, translateY: t.ty })(), Ls(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popTransform: (t) => {
    const n = Lr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBakedTransform: (t) => (n) => {
    const e = kr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", Pc(n.ctx)({ translateX: t.tx, translateY: t.ty })(), Ls(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popBakedTransform: (t) => {
    const n = Lr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushClip: (t) => (n) => (e) => {
    const r = kr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0) {
        if (r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", Bu(e.ctx)(t)(), n === "NonZero")
          return cp(e.ctx)();
        if (n === "EvenOdd")
          return Mw(e.ctx)();
        f();
      }
    };
  },
  popClip: (t) => {
    const n = Lr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBlend: (t) => (n) => {
    const e = kr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        if (e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", t === "Normal")
          return t0(n.ctx)(yp)();
        if (t === "Difference")
          return t0(n.ctx)(vp)();
        f();
      }
    };
  },
  popBlend: (t) => {
    const n = Lr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushAlpha: (t) => (n) => {
    const e = kr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "";
        const i = n.groupAlpha.value, s = n.alphaSaves.value;
        n.alphaSaves.value = [...s, i];
        const u = i * t;
        return n.groupAlpha.value = u, up(n.ctx)(u)();
      }
    };
  },
  popAlpha: (t) => {
    const n = Lr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0) {
        n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
        const o = t.alphaSaves.value, i = Ge(o);
        if (i.tag === "Just")
          return t.alphaSaves.value = i._1.init, t.groupAlpha.value = i._1.last;
        if (i.tag === "Nothing")
          return t.groupAlpha.value = 1;
        f();
      }
    };
  },
  pushBlur: (t) => (n) => {
    const e = kr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "";
        const i = jw(n.ctx)(t);
        if (t >= 0.01)
          return i();
      }
    };
  },
  popBlur: (t) => {
    const n = Lr(t.ctx), e = t.maskDepth;
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
    const e = dT(n.ctx)(n.surface)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  clearBackground: (t) => (n) => {
    const e = sT(n.ctx)(n.surface)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  backgroundDots: (t) => (n) => {
    const e = uT(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = _d(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = hd(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => wd,
  Monad0: () => hT
}, pT = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Wo = (t) => (n) => (e) => {
  const r = pT(0.05)(1 - t - n);
  return e < t ? 0 : e > 1 - n ? 1 : (e - t) / r;
}, ul = (t) => {
  const n = rt.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = rt.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, zu = (t) => {
  if (t.tag === "Hidden")
    return { alpha: 0, scale: 0 };
  if (t.tag === "Visible")
    return { alpha: 1, scale: 1 };
  if (t.tag === "PloppingIn")
    return { alpha: t._1 > 0 ? 1 : 0, scale: Ni(8)(0.6)(ul(t._1)) };
  if (t.tag === "PloppingOut")
    return { alpha: t._1 < 1 ? 1 : 0, scale: Ni(8)(0.6)(ul(1 - t._1)) };
  f();
};
function mT(t, n) {
  const e = n.x - t.x, r = n.y - t.y;
  return Math.sqrt(e * e + r * r);
}
function $T(t) {
  const n = t.length, e = new Array(n);
  for (let r = 0; r < n; r++) {
    const o = t[r], i = t[(r + 1) % n];
    e[r] = { a: o, b: i, len: mT(o, i) };
  }
  return e;
}
function yT(t, n, e) {
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
function cl(t, n) {
  if (n.length === 0) return [];
  const e = $T(n);
  let r = 0;
  for (let i = 0; i < e.length; i++) r += e[i].len;
  const o = new Array(t);
  for (let i = 0; i < t; i++)
    o[i] = yT(e, n, i * r / t);
  return o;
}
function vT(t, n) {
  const e = n.length;
  if (e === 0) return n;
  const r = (t % e + e) % e | 0, o = new Array(e);
  for (let i = 0; i < e; i++) o[i] = n[(i + r) % e];
  return o;
}
function xT(t, n) {
  const e = n.length;
  if (e === 0) return n;
  let r = 0, o = 1 / 0;
  for (let i = 0; i < e; i++) {
    let s = 0;
    for (let u = 0; u < e; u++) {
      const c = t[u] || { x: 0, y: 0 }, a = n[(u + i) % e] || { x: 0, y: 0 }, l = c.x - a.x, d = c.y - a.y;
      s += l * l + d * d;
    }
    s < o && (o = s, r = i);
  }
  return vT(r, n);
}
const al = (t) => (n) => (e) => {
  const r = cl(t, n), o = cl(t, e), i = xT(r, o);
  return { from: r, to: i };
};
function fl(t) {
  const n = t.length;
  if (n === 0) return { x: 0, y: 0 };
  let e = 0, r = 0;
  for (let o = 0; o < n; o++)
    e += t[o].x, r += t[o].y;
  return { x: e / n, y: r / n };
}
function NT(t, n) {
  const e = n.x - t.x, r = n.y - t.y, o = Math.sqrt(e * e + r * r);
  return o <= 1e-4 ? { x: 1, y: 0 } : { x: e / o, y: r / o };
}
function wT(t, n) {
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
function TT(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
const ll = (t) => (n) => (e) => (r) => {
  const o = n.length;
  if (o === 0) return [];
  const i = fl(n), s = fl(e), u = NT(i, s), c = new Array(o);
  let a = 1 / 0, l = -1 / 0;
  for (let g = 0; g < o; g++) {
    const p = n[g], m = (p.x - i.x) * u.x + (p.y - i.y) * u.y;
    c[g] = m, m < a && (a = m), m > l && (l = m);
  }
  const d = l - a;
  let _ = new Array(o);
  for (let g = 0; g < o; g++) {
    const p = n[g], m = e[g];
    if (m === void 0) {
      _[g] = p;
      continue;
    }
    const h = d <= 1e-4 ? 0 : r.maxDelay * (1 - (c[g] - a) / d), $ = Math.max(1e-4, 1 - h), y = TT((t - h) / $), v = y * y * (3 - 2 * y);
    _[g] = {
      x: p.x + (m.x - p.x) * v,
      y: p.y + (m.y - p.y) * v
    };
  }
  for (let g = 0; g < r.smoothPasses; g++)
    _ = wT(0.5, _);
  return _;
}, nr = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, gl = /* @__PURE__ */ N(co)(0), dl = (t) => (n) => (e) => {
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
}, JT = /* @__PURE__ */ N((t) => (n) => t + n.len)(0), yf = (t) => {
  const n = zt((e) => x, (e) => (r) => J("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...xt(bt(1, t.length, t))((e) => [2, e.x, e.y]), 5];
  f();
}, bT = (t) => (n) => {
  const e = nr(n)(nr(t.w / 2)(t.h / 2));
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
}, kT = (t) => {
  const n = zt((e) => x, (e) => (r) => J("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...xt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, LT = (t) => {
  const n = { x: t.x, y: t.y, w: t.w, h: t.h };
  if (t.shape === "Cylinder")
    return Ld(n);
  if (t.shape === "Parallelogram")
    return Jd(n);
  if (t.shape === "Diamond")
    return Cd(n);
  if (t.shape === "Ellipse")
    return Td(n);
  if (t.shape === "Document")
    return bd(n);
  if (t.shape === "Cloud")
    return Ad(n)(7);
  if (t.shape === "Rectangle")
    return bT(n)(7);
  f();
}, kn = (t) => (n) => (e) => H((r) => {
  const o = M(r) / M(e);
  return { x: t.x + (n.x - t.x) * o, y: t.y + (n.y - t.y) * o };
})(Ht(0, e - 1 | 0)), ET = (t) => {
  const n = xe(t.w * 0.18)(t.h * 0.6);
  return [
    ...kn({ x: t.x + n, y: t.y })({ x: t.x + t.w, y: t.y })(16),
    ...kn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w - n, y: t.y + t.h })(16),
    ...kn({ x: t.x + t.w - n, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(16),
    ...kn({ x: t.x, y: t.y + t.h })({ x: t.x + n, y: t.y })(16)
  ];
}, Oo = (t) => (n) => {
  const e = nr(t)(nr(n.w / 2)(n.h / 2));
  return { ...n, x: n.x + e, y: n.y + e, w: n.w - 2 * e, h: n.h - 2 * e };
}, ra = (t) => (n) => {
  const e = n.y - t.y, r = n.x - t.x;
  return Hn(r * r + e * e);
}, ST = (t) => Ln((n) => (e) => ({ a: n, b: e, len: ra(n)(e) }), t, bt(1, t.length, t)), CT = (t) => (n) => {
  const e = n.length - 1 | 0, r = e >= 0 && e < n.length ? J("Just", n[e]) : x, o = (() => {
    if (r.tag === "Just")
      return [r._1];
    if (r.tag === "Nothing")
      return [];
    f();
  })(), i = 0 < n.length ? J("Just", n[0]) : x, s = (() => {
    if (i.tag === "Just")
      return i._1;
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    f();
  })(), u = n.length;
  return u < 3 ? n : [
    s,
    ...xt(Ht(1, u - 2 | 0))((c) => {
      const a = c + 1 | 0, l = a >= 0 && a < n.length ? J("Just", n[a]) : x, d = c >= 0 && c < n.length ? J("Just", n[c]) : x, _ = c - 1 | 0, g = _ >= 0 && _ < n.length ? J("Just", n[_]) : x;
      if (g.tag === "Just" && d.tag === "Just" && l.tag === "Just") {
        const p = d._1, m = ra(p)(l._1), h = ra(g._1)(p), $ = nr(t)(m / 2), y = nr(t)(h / 2), v = m > 0 ? $ / m : 0, w = p.x + (l._1.x - p.x) * v, T = p.y + (l._1.y - p.y) * v, b = h > 0 ? y / h : 0, L = p.x + (g._1.x - p.x) * b, C = p.y + (g._1.y - p.y) * b;
        return H((E) => {
          const B = M(E) / M(10), D = 1 - B;
          return { x: D * D * L + 2 * D * B * p.x + B * B * w, y: D * D * C + 2 * D * B * p.y + B * B * T };
        })(Ht(0, 10));
      }
      return [];
    }),
    ...o
  ];
}, AT = (t) => (n) => (e) => (r) => (o) => H((i) => {
  const s = M(i) / M(o), u = 1 - s, c = s * s * s, a = 3 * u * s * s, l = 3 * u * u * s, d = u * u * u;
  return { x: d * t.x + l * n.x + a * e.x + c * r.x, y: d * t.y + l * n.y + a * e.y + c * r.y };
})(Ht(0, o - 1 | 0)), PT = (t) => [
  ...kn({ x: t.x, y: t.y })({ x: t.x + t.w, y: t.y })(12),
  ...kn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h * 0.85 })(12),
  ...AT({ x: t.x + t.w, y: t.y + t.h * 0.85 })({ x: t.x + t.w * 0.66, y: t.y + t.h * 1.05 })({ x: t.x + t.w * 0.34, y: t.y + t.h * 0.65 })({
    x: t.x,
    y: t.y + t.h * 0.85
  })(32),
  ...kn({ x: t.x, y: t.y + t.h * 0.85 })({ x: t.x, y: t.y })(12)
], _l = (t) => (n) => H((e) => {
  const r = 6.283185307179586 * M(e) / M(64);
  return { x: t.x + n * Vn(r), y: t.y + n * ie(r) };
})(Ht(0, 63)), Du = (t) => (n) => {
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
}, GT = (t) => {
  const n = t.y + t.h / 2, e = xe(t.h * 0.4)(t.w * 0.2);
  return [
    ...kn({ x: t.x + e, y: t.y })({ x: t.x + t.w - e, y: t.y })(10),
    ...kn({ x: t.x + t.w - e, y: t.y })({ x: t.x + t.w, y: n })(8),
    ...kn({ x: t.x + t.w, y: n })({ x: t.x + t.w - e, y: t.y + t.h })(8),
    ...kn({ x: t.x + t.w - e, y: t.y + t.h })({ x: t.x + e, y: t.y + t.h })(10),
    ...kn({ x: t.x + e, y: t.y + t.h })({ x: t.x, y: n })(8),
    ...kn({ x: t.x, y: n })({ x: t.x + e, y: t.y })(8)
  ];
}, Id = (t) => {
  const n = t.length;
  return n === 0 ? { x: 0, y: 0 } : { x: gl(H((e) => e.x)(t)) / M(n), y: gl(H((e) => e.y)(t)) / M(n) };
}, $s = (t) => (n) => (e) => (r) => (o) => H((i) => {
  const s = e + (r - e) * (M(i) / M(o));
  return { x: t.x + n * Vn(s), y: t.y + n * ie(s) };
})(Ht(0, o - 1 | 0)), hl = (t) => (n) => {
  const e = nr(t)(nr(n.w / 2)(n.h / 2));
  return [
    ...kn({ x: n.x + e, y: n.y })({ x: n.x + n.w - e, y: n.y })(6),
    ...$s({ x: n.x + n.w - e, y: n.y + e })(e)(4.71238898038469)(6.283185307179586)(12),
    ...kn({ x: n.x + n.w, y: n.y + e })({ x: n.x + n.w, y: n.y + n.h - e })(6),
    ...$s({ x: n.x + n.w - e, y: n.y + n.h - e })(e)(0)(1.5707963267948966)(12),
    ...kn({ x: n.x + n.w - e, y: n.y + n.h })({ x: n.x + e, y: n.y + n.h })(6),
    ...$s({ x: n.x + e, y: n.y + n.h - e })(e)(1.5707963267948966)(3.141592653589793)(12),
    ...kn({ x: n.x, y: n.y + n.h - e })({ x: n.x, y: n.y + e })(6),
    ...$s({ x: n.x + e, y: n.y + e })(e)(3.141592653589793)(4.71238898038469)(12)
  ];
}, tu = (t) => (n) => (e) => (r) => (o) => (i) => H((s) => {
  const u = r + (o - r) * (M(s) / M(i));
  return { x: t.x + n * Vn(u), y: t.y + e * ie(u) };
})(Ht(0, i - 1 | 0)), IT = (t) => {
  const n = t.h * 0.38;
  return [
    ...xt(Sd(Ed(kd)({
      x: t.x,
      y: t.y - n,
      w: t.w,
      h: n
    }))(t.y))((e) => {
      const r = to(e.p2.y - e.c.cy)(e.p2.x - e.c.cx), o = to(e.p1.y - e.c.cy)(e.p1.x - e.c.cx);
      return tu({ x: e.c.cx, y: e.c.cy })(e.c.r)(e.c.r)(o)(r > o ? r : r + 6.283185307179586)(16);
    }),
    ...kn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h })(8),
    ...kn({ x: t.x + t.w, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(12),
    ...kn({ x: t.x, y: t.y + t.h })({ x: t.x, y: t.y })(8)
  ];
}, FT = (t) => {
  const n = nr(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.y + t.h + 5 - n - 2, i = t.x + e;
  return [
    ...tu({ x: i, y: r })(e)(n)(3.141592653589793)(6.283185307179586)(24),
    ...kn({ x: t.x + t.w, y: r })({ x: t.x + t.w, y: o })(12),
    ...tu({ x: i, y: o })(e)(n)(0)(3.141592653589793)(24),
    ...kn({ x: t.x, y: o })({ x: t.x, y: r })(12)
  ];
}, fo = (t) => (n) => n.shape === "Cylinder" ? FT(n) : n.shape === "Parallelogram" ? ET(n) : n.shape === "Diamond" ? GT(n) : n.shape === "Ellipse" ? hl(xe(n.w)(n.h) / 2)(n) : n.shape === "Document" ? PT(n) : n.shape === "Cloud" ? IT(n) : hl(t)(n), RT = (t) => {
  const n = nr(t.h * 0.075)(t.w * 0.075), e = t.w / 2;
  return tu({ x: t.x + e, y: t.y + n })(e)(n)(0)(3.141592653589793)(24);
}, BT = (t) => (n) => (e) => N((r) => (o) => {
  const i = r.pos + o.len, s = e < i ? (e - r.pos) / o.len : 1, u = { x: o.a.x + (o.b.x - o.a.x) * s, y: o.a.y + (o.b.y - o.a.y) * s }, c = n > r.pos ? (n - r.pos) / o.len : 0, a = { x: o.a.x + (o.b.x - o.a.x) * c, y: o.a.y + (o.b.y - o.a.y) * c }, l = r.points.length - 1 | 0, d = l >= 0 && l < r.points.length ? (() => {
    const _ = r.points[l].x - a.x;
    return (_ < 0 ? -_ < 1e-4 : _ < 1e-4) && (() => {
      const g = r.points[l].y - a.y;
      return g < 0 ? -g < 1e-4 : g < 1e-4;
    })();
  })() ? Ft(r.points)(u) : [...r.points, a, u] : [a, u];
  return o.len <= 0 || i <= n || r.pos >= e ? { ...r, pos: i } : { pos: i, points: d };
})({ pos: 0, points: [] })(t).points, zT = (t) => (n) => (e) => {
  const r = zt((o) => x, (o) => (i) => J("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just") {
    const o = ST(t), i = JT(o), s = dl(0)(i)(n * i), u = dl(0)(i)(e * i);
    return u <= s ? [] : BT(o)(s)(u);
  }
  f();
}, DT = (t) => (n) => (e) => (r) => {
  const o = r.x - e.x, i = r.y - e.y, s = n.x - t.x, u = n.y - t.y, c = e.x - t.x, a = e.y - t.y, l = s * i - u * o, d = (c * i - a * o) / l, _ = (c * u - a * s) / l;
  return (l < 0 ? -l < 1e-9 : l < 1e-9) ? x : d >= 0 && d <= 1 && _ >= 0 && _ <= 1 ? J("Just", d) : x;
}, QT = (t) => (n) => (e) => {
  const r = It((o) => (i) => rt.compare(o.t)(i.t))(vt((o) => {
    const i = DT(n)(e)(o._1)(o._2);
    return i.tag === "Just" ? J("Just", { t: i._1, p: { x: n.x + (e.x - n.x) * i._1, y: n.y + (e.y - n.y) * i._1 } }) : x;
  })(Ln(Mn, t, [...bt(1, t.length, t), ...bt(0, 1, t)])));
  return 0 < r.length ? J("Just", r[0].p) : x;
}, pl = (t) => (n) => {
  const e = Ge(n);
  if (e.tag === "Nothing")
    return n;
  if (e.tag === "Just") {
    const r = e._1.init.length - 1 | 0;
    if (r >= 0 && r < e._1.init.length) {
      const o = QT(t)(e._1.init[r])(e._1.last);
      if (o.tag === "Just")
        return Ft(e._1.init)(o._1);
      if (o.tag === "Nothing")
        return n;
      f();
    }
    return n;
  }
  f();
}, Ar = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, oa = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, HT = (t) => (n) => (e) => {
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
}, WT = (t) => (n) => {
  const e = Ar(0)(t.y + 4 - n.y) + Ar(0)(n.y + n.h - (t.y + t.h - 4)), r = Ar(0)(t.x + 4 - n.x) + Ar(0)(n.x + n.w - (t.x + t.w - 4));
  return r * n.h + e * n.w + r * e;
}, OT = (t) => (n) => {
  const e = t.y + t.h - 6, r = t.y + 6, o = t.x + 14, i = t.x + t.w - 14, s = N(Ar)(0)(H((u) => o - 10 < u.x + u.w + 12 && i + 10 > u.x - 12 && r - 10 < u.y + u.h + 12 && e + 10 > u.y - 12 ? oa((u.x + u.w + 12 - (o - 10)) / 0.7071067811865476)((e + 10 - (u.y - 12)) / 0.7071067811865476) : 0)(n));
  return { ...t, x: t.x + s * 0.7071067811865476, y: t.y - s * 0.7071067811865476 };
}, qT = (t) => (n) => {
  const e = oa(t.x + t.w)(n.x + n.w) - Ar(t.x)(n.x), r = oa(t.y + t.h)(n.y + n.h) - Ar(t.y)(n.y);
  return t.x < n.x + n.w && t.x + t.w > n.x && t.y < n.y + n.h && t.y + t.h > n.y ? e * r : 0;
}, ml = (t) => (n) => (e) => (r) => {
  const o = t + 4, i = Ar(0)(n - 8), s = o + i - e;
  return e <= i ? HT(o)(s)(r) : t + (n - e) / 2;
}, $l = (t) => (n) => ({ ...n, x: ml(t.x)(t.w)(n.w)(n.x), y: ml(t.y)(t.h)(n.h)(n.y) }), XT = (t) => {
  const n = 2 * t.token.x - t.rect.x - t.rect.w, e = t.token.y - t.rect.h / 2, r = t.token.x - t.rect.w / 2, o = 2 * t.token.y - t.rect.y - t.rect.h;
  return [
    { ...t.rect, x: t.rect.x, y: t.rect.y },
    { ...t.rect, x: n, y: t.rect.y },
    { ...t.rect, x: t.rect.x, y: o },
    { ...t.rect, x: n, y: o },
    { ...t.rect, x: t.rect.x, y: e },
    { ...t.rect, x: n, y: e },
    { ...t.rect, x: r, y: t.rect.y },
    { ...t.rect, x: r, y: o }
  ];
}, YT = (t) => (n) => (e) => (r) => (o) => {
  const i = o.y + o.h / 2 - e.token.y, s = o.y - r.y;
  return (() => {
    const u = o.x + o.w / 2 - e.token.x, c = o.x - r.x;
    return 1e6 * WT(t)(o) + 1e4 * N((a) => (l) => a + qT(o)(l))(0)(n) + 0.05 * (c * c + s * s) + 0.01 * (u * u + i * i);
  })() + (o.y > e.token.y ? 100 : 0);
}, UT = (t) => (n) => (e) => (r) => {
  const o = (s) => {
    const u = $l(t)(s);
    return { rect: u, score: YT(t)(n)(e)(r)(u) };
  }, i = zt((s) => x, (s) => (u) => J("Just", { head: s, tail: u }), [r, e.rect, ...XT(e)]);
  if (i.tag === "Nothing")
    return $l(t)(r);
  if (i.tag === "Just")
    return N((s) => (u) => {
      const c = o(u);
      return c.score < s.score ? c : s;
    })(o(i._1.head))(i._1.tail).rect;
  f();
}, VT = (t) => (n) => (e) => N((r) => (o) => {
  const i = OT(o.rect)(r.obstacles), s = i.x >= t.x + 4 && i.y >= t.y + 4 && i.x + i.w <= t.x + t.w - 4 && i.y + i.h <= t.y + t.h - 4 ? i : UT(t)(r.obstacles)(o)(i);
  return { acc: K(I)(o.id)(s)(r.acc), obstacles: Ft(r.obstacles)(s) };
})({ acc: R, obstacles: n })(e).acc, vf = (t) => t, fr = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, io = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, KT = /* @__PURE__ */ rg(fg)(Xt), MT = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, jT = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, yl = /* @__PURE__ */ vf("SegMove"), ZT = /* @__PURE__ */ vf("SegLine"), tJ = /* @__PURE__ */ vf("SegQuad"), vl = { offset: 0.4, passes: 1, rMax: 1.5 }, Fd = (t) => Nn(Ie(t.x * 7919 + t.y * 3001 + t.w * 113 + t.h * 17 + 1)) * -1640531535 | 0, nu = (t) => (n) => (e) => () => {
  t.push(3), t.push(n.x), t.push(n.y), t.push(e.x), t.push(e.y);
}, Qu = (t) => (n) => () => {
  t.push(1), t.push(n.x), t.push(n.y);
}, hr = (t) => (n) => () => {
  t.push(2), t.push(n.x), t.push(n.y);
}, Ii = /* @__PURE__ */ (() => {
  const t = N((n) => (e) => ((n * 31 | 0) + Nn(Ie(e.x * 100)) | 0) + Nn(Ie(e.y * 100)) | 0)(1);
  return (n) => t(n) * -1640531535 | 0;
})(), nJ = (t) => {
  const n = [];
  let e = 0, r = { x: 0, y: 0 };
  for (; e < t.length; ) {
    const o = e, i = r, s = o >= 0 && o < t.length ? J("Just", t[o]) : x;
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
        n.push({ kind: yl, m: i, c: i, p: u, len: 0 }), r = u, e = o + 3 | 0;
        continue;
      }
      if (s._1 === 2) {
        const u = {
          x: (() => {
            const l = o + 1 | 0;
            return l >= 0 && l < t.length ? t[l] : 0;
          })(),
          y: (() => {
            const l = o + 2 | 0;
            return l >= 0 && l < t.length ? t[l] : 0;
          })()
        }, c = u.x - i.x, a = u.y - i.y;
        n.push({ kind: ZT, m: i, c: i, p: u, len: Hn(c * c + a * a) }), r = u, e = o + 3 | 0;
        continue;
      }
      if (s._1 === 3) {
        const u = {
          x: (() => {
            const l = o + 3 | 0;
            return l >= 0 && l < t.length ? t[l] : 0;
          })(),
          y: (() => {
            const l = o + 4 | 0;
            return l >= 0 && l < t.length ? t[l] : 0;
          })()
        }, c = u.x - i.x, a = u.y - i.y;
        n.push({
          kind: tJ,
          m: i,
          c: {
            x: (() => {
              const l = o + 1 | 0;
              return l >= 0 && l < t.length ? t[l] : 0;
            })(),
            y: (() => {
              const l = o + 2 | 0;
              return l >= 0 && l < t.length ? t[l] : 0;
            })()
          },
          p: u,
          len: Hn(c * c + a * a) * 1.05
        }), r = u, e = o + 5 | 0;
        continue;
      }
      if (s._1 === 5) {
        n.push({ kind: yl, m: i, c: i, p: i, len: 0 }), e = o + 1 | 0;
        continue;
      }
      e = t.length;
      continue;
    }
    f();
  }
  return n;
}, eJ = (t) => (n) => {
  const e = n.length - 1 | 0, r = e < 1 ? [] : bt(0, e, n), o = (() => {
    const s = r.length - 1 | 0;
    return s >= 0 && s < r.length ? J("Just", r[s]) : x;
  })(), i = n.length - 1 | 0;
  if (i >= 0 && i < n.length && o.tag === "Just") {
    const s = n[i].y - o._1.y, u = n[i].x - o._1.x, c = Hn(u * u + s * s);
    return c <= 1e-4 ? n : Ft((() => {
      const a = n.length - 1 | 0;
      return a < 1 ? [] : bt(0, a, n);
    })())({ x: n[i].x + u / c * t, y: n[i].y + s / c * t });
  }
  return n;
}, rJ = (t) => (n) => (e) => Pn(N((r) => (o) => {
  const i = bn(0)(t)(r.prng), s = bn(0)(6.283185307179586)(i.prng);
  return { prng: s.prng, out: [{ x: o.x + i.value * Vn(s.value), y: o.y + i.value * ie(s.value) }, ...r.out] };
})({ prng: n, out: [] })(e).out), oJ = (t) => (n) => (e) => {
  if (n.kind === "SegMove")
    return Qu(t)(n.p);
  if (n.kind === "SegLine")
    return hr(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  if (n.kind === "SegQuad")
    return hr(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  f();
}, iJ = (t) => (n) => {
  if (n.kind === "SegMove")
    return Qu(t)(n.p);
  if (n.kind === "SegLine")
    return hr(t)(n.p);
  if (n.kind === "SegQuad")
    return nu(t)(n.c)(n.p);
  f();
}, Rd = (t) => (n) => {
  const e = nJ(n), r = N((u) => (c) => u + c.len)(0)(e) * fr(0)(io(1)(t)), o = [];
  let i = 0, s = 0;
  for (; s < e.length; ) {
    const u = s, c = i;
    if (u >= 0 && u < e.length) {
      if (c + e[u].len <= r) {
        const a = e[u];
        iJ(o)(a)(), i = c + a.len, s = u + 1 | 0;
        continue;
      }
      if (c >= r) {
        s = e.length;
        continue;
      }
      oJ(o)(e[u])((r - c) / fr(e[u].len)(1e-4))();
    }
    s = e.length;
  }
  return o;
}, xl = { offset: 1.5, passes: 2, rMax: 14, overshoot: 2.5 }, Bd = (t) => (n) => (e) => (r) => {
  const o = r.y - e.y, i = e.y - n.y, s = r.x - e.x, u = Hn(s * s + o * o), c = e.x - n.x, a = Hn(c * c + i * i), l = io(t.rMax * (Fh(a > 0 && u > 0 ? fr(-1)(io(1)((c * s + i * o) / (a * u))) : 1) / 3.141592653589793))(0.4 * io(a)(u));
  return { inP: a > 0 ? { x: e.x - c / a * l, y: e.y - i / a * l } : e, curr: e, outP: u > 0 ? { x: e.x + s / u * l, y: e.y + o / u * l } : e };
}, zd = (t) => (n) => {
  const e = n.length, r = [], o = 0 < n.length ? J("Just", n[0]) : x;
  if (o.tag === "Just" ? Qu(r)(o._1)() : o.tag === "Nothing" || f(), e >= 3) {
    let s = 1;
    for (; s <= (e - 2 | 0); ) {
      const u = s, c = u + 1 | 0;
      if (c >= 0 && c < n.length) {
        if (u >= 0 && u < n.length) {
          const a = u - 1 | 0;
          if (a >= 0 && a < n.length) {
            const l = Bd(t)(n[a])(n[u])(n[c]);
            hr(r)(l.inP)(), nu(r)(l.curr)(l.outP)();
          }
        }
        s = u + 1 | 0;
        continue;
      }
      s = u + 1 | 0;
    }
  }
  const i = n.length - 1 | 0;
  return i >= 0 && i < n.length && e >= 2 && hr(r)(n[i])(), r;
}, sJ = (t) => (n) => (e) => (r) => (o) => {
  if (o.length < 4)
    return zd(t)(o);
  const i = 0 < o.length ? J("Just", o[0]) : x, s = (() => {
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = o.length - 1 | 0, c = pr(pr(n)(u) + u | 0)(u), a = (g) => {
    const p = pr(g + u | 0)(u);
    return p >= 0 && p < o.length ? o[p] : s;
  }, l = H((g) => Bd(t)(a((c + g | 0) - 1 | 0))(a(c + g | 0))(a((c + g | 0) + 1 | 0)))(Ht(
    0,
    u - 1 | 0
  )), d = [], _ = 0 < l.length ? J("Just", l[0]) : x;
  if (_.tag === "Just")
    if (Qu(d)(_._1.outP)(), KT((() => {
      const g = zt((p) => x, (p) => (m) => J("Just", m), l);
      if (g.tag === "Nothing")
        return [];
      if (g.tag === "Just")
        return g._1;
      f();
    })())((g) => {
      const p = hr(d)(g.inP);
      return () => (p(), nu(d)(g.curr)(g.outP)());
    })(), e)
      hr(d)(_._1.inP)(), nu(d)(_._1.curr)(_._1.outP)(), d.push(5);
    else {
      const g = l.length - 1 | 0;
      g >= 0 && g < l.length ? hr(d)((() => {
        const p = 1 - r;
        return { x: l[g].outP.x + (_._1.inP.x - l[g].outP.x) * p, y: l[g].outP.y + (_._1.inP.y - l[g].outP.y) * p };
      })())() : hr(d)(_._1.inP)();
    }
  else _.tag === "Nothing" || f();
  return d;
}, Co = (t) => (n) => (e) => (r) => {
  const o = MT(1)(r.length - 1 | 0), i = bn(0)(M(o))(ta("shape")(n)), s = jT(o - 1 | 0)(Nn(Ie(i.value))), u = i.prng;
  return H((c) => {
    const a = bn(0)(1)(ta(rn(c))(u)), l = bn(-0.18)(0.3)(a.prng), d = a.value < 0.7, _ = bn(0.5)(0.85)(l.prng), g = rJ(t.offset)(_.prng)(r);
    return { path: e ? sJ(t)(s)(d)(l.value)(g) : zd(t)(g), alpha: _.value };
  })(Ht(0, t.passes - 1 | 0));
}, uJ = (t) => (n) => (e) => Co(t)(n)(!0)([
  { x: e.x, y: e.y },
  { x: e.x + e.w, y: e.y },
  { x: e.x + e.w, y: e.y + e.h },
  { x: e.x, y: e.y + e.h },
  { x: e.x, y: e.y }
]), cJ = (t) => (n) => (e) => {
  const r = fr(0)(io(1)(e)), o = n.h / M(4), i = fr(6)(o * 1.4);
  return vt((s) => s)(H((s) => {
    if (r < fr(0)(M(s) / M(4) - 0.05))
      return x;
    const u = ta(rn(s))(t), c = fr(0)(M(s) / M(4) - 0.05), a = pr(s)(2) === 0, l = a ? n.x - 2 : n.x + n.w + 2, d = a ? n.x + n.w + 2 : n.x - 2, _ = n.y + (M(s) + 0.5) * o;
    return J(
      "Just",
      {
        path: Rd(fr(0)(io(1)((r - c) / fr(1e-4)(io(1)(M(s + 1 | 0) / M(4) + 0.05) - c))))((() => {
          const g = { rMax: 2, offset: 0.6, passes: 1 }, p = Pn(N((h) => ($) => {
            const y = bn(-o * 0.08)(o * 0.08)(h.prng);
            return { prng: y.prng, out: [{ x: l + (d - l) * (M($) / M(4)), y: _ + y.value }, ...h.out] };
          })({ prng: u, out: [] })(Ht(0, 4)).out), m = p.length < 2 ? [] : Co(g)(u)(!1)(p);
          return 0 < m.length ? m[0].path : [];
        })()),
        width: i,
        alpha: 1
      }
    );
  })(Ht(0, 3)));
}, Jc = (t, n, e) => ({ tag: t, _1: n, _2: e }), Dd = (t) => t, bc = (t, n, e) => ({ tag: t, _1: n, _2: e }), eu = (t) => (n) => (e) => {
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
}, mn = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Kn = /* @__PURE__ */ (() => {
  const t = ue.unfoldr(Ee);
  return (n) => t(se("IterNode", n, Le));
})(), er = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, aJ = Xt.foldMap(jh), ru = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, fJ = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Js = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Qd = /* @__PURE__ */ an(I)(Xt), Hd = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, lJ = /* @__PURE__ */ vg(I), gJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, xf = /* @__PURE__ */ Dd("LabelsShown"), dJ = /* @__PURE__ */ Dd("LabelsHidden"), Wd = (t) => {
  const n = t.Monad0().Bind1(), e = t.popTransform, r = t.popAlpha;
  return (o) => (i) => (s) => (u) => (c) => n.bind(t.pushAlpha(o.fadeAlpha))(() => n.bind(t.pushTransform({
    tx: i * (1 - o.popScale),
    ty: s * (1 - o.popScale),
    sx: o.popScale,
    sy: o.popScale
  }))(() => n.bind(t.pushTransform({ tx: 0, ty: u.y * (1 - o.flipY), sx: 1, sy: o.flipY }))(() => n.bind(c)(() => n.bind(e)(() => n.bind(e)(() => r))))));
}, $e = (t) => {
  const n = t.Apply0();
  return (e) => N((r) => (o) => n.apply(n.Functor0().map((i) => da)(r))(e(o)))(t.pure());
}, Od = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = Wo(o)(i)(r), a = 0 < t.length ? J("Just", t[0]) : x, l = (() => {
    if (a.tag === "Just")
      return a._1;
    if (a.tag === "Nothing")
      return u;
    f();
  })(), d = t.length - 1 | 0, _ = d >= 0 && d < t.length ? J("Just", t[d]) : x, g = (() => {
    if (_.tag === "Just")
      return _._1;
    if (_.tag === "Nothing")
      return s;
    f();
  })(), p = al(128)(fo(4)(Oo(2)(n)))(_l(l)(6)), m = l.x - u.x, h = 2 * (() => {
    const z = l.y - u.y;
    return (m < 0 ? -m : m) + (z < 0 ? -z : z);
  })(), $ = g.x - s.x, y = 2 * (() => {
    const z = g.y - s.y;
    return ($ < 0 ? -$ : $) + (z < 0 ? -z : z);
  })(), v = h + Nu(t) + y, w = v <= 1e-4 ? 1 : 1 - y / v, T = v <= 1e-4 ? 0 : h / v, b = w - T, L = al(128)(_l(g)(6))(fo(4)(Oo(2)(e))), C = { maxDelay: 0.4, smoothPasses: 2 }, E = xi(t)(eu(0)(1)(b <= 1e-4 ? 0 : (c - T) / b)), B = (() => {
    if (E.tag === "Just")
      return E._1;
    if (E.tag === "Nothing")
      return l;
    f();
  })(), D = (() => {
    if (w >= 1)
      return 0;
    const z = (c - w) / (1 - w), V = z < 0 ? 0 : z > 1 ? 1 : z;
    return V * V * (3 - 2 * V);
  })(), F = (() => {
    if (T <= 1e-4)
      return 1;
    const z = c / T, V = z < 0 ? 0 : z > 1 ? 1 : z;
    return V * V * (3 - 2 * V);
  })();
  return c < T ? bc("PolyShape", ll(F)(p.from)(p.to)(C)) : c >= w ? bc("PolyShape", ll(D)(L.from)(L.to)(C)) : bc("CircleShape", B, 6);
}, Nf = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Od(t)(n)(e)(r)(o)(i);
  if (s.tag === "PolyShape")
    return Id(s._1);
  if (s.tag === "CircleShape")
    return s._1;
  f();
}, wf = /* @__PURE__ */ (() => {
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
        chipText: ur,
        nodeFill: dn,
        nodeStroke: ur,
        text: ur,
        edge: ur,
        arrowFill: ur,
        tokenOutsideFill: ur,
        tokenOutsideStroke: dn,
        tokenInside: dn,
        tokenInsideStroke: dn,
        tokenInsideBlend: Ts,
        tokenInsideAlpha: 1,
        chipPillFill: ur,
        chipPillText: dn,
        chipHairline: { r: 26, g: 26, b: 26, a: 90 },
        trailDot: ur,
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
        nodeFill: ur,
        nodeStroke: n,
        text: n,
        edge: n,
        arrowFill: n,
        tokenOutsideFill: dn,
        tokenOutsideStroke: dn,
        tokenInside: dn,
        tokenInsideStroke: dn,
        tokenInsideBlend: Ts,
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
        shadowDot: dn,
        chip: dn,
        chipShadow: { r: 0, g: 0, b: 0, a: 120 },
        chipText: o,
        nodeFill: o,
        nodeStroke: dn,
        text: dn,
        edge: dn,
        arrowFill: dn,
        tokenOutsideFill: dn,
        tokenOutsideStroke: dn,
        tokenInside: dn,
        tokenInsideStroke: dn,
        tokenInsideBlend: ol,
        tokenInsideAlpha: 0.35,
        chipPillFill: dn,
        chipPillText: o,
        chipHairline: { r: 255, g: 255, b: 255, a: 120 },
        trailDot: dn,
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
        tokenInsideBlend: ol,
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
        tokenOutsideStroke: dn,
        tokenInside: dn,
        tokenInsideStroke: dn,
        tokenInsideBlend: Ts,
        tokenInsideAlpha: 1,
        chipPillFill: s,
        chipPillText: dn,
        chipHairline: { r: 60, g: 66, b: 78, a: 90 },
        trailDot: s,
        wobble: !1,
        fontFamily: "Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    f();
  };
})(), ia = (t) => (n) => xt(Kn(t.nodes))((e) => {
  const r = mn(e._1)(n.nodes);
  return r.tag === "Just" && zu(r._1).alpha > 0 ? LT(e._2) : [];
}), _J = (t) => (n) => (e) => [
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
  ...ia(n)(e)
], hJ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = Qr.traverse(r);
  return (i) => (s) => {
    const u = Wr(s), c = 0.32 * i.size;
    return o((a) => e.bind(a === 0 ? r.pure(0) : t.measureText(i)(Sn(a)(s)))((l) => e.bind(t.measureText(i)(Sn(a + 1 | 0)(s)))((d) => e.bind(t.measureInk(i)(a >= 0 && a < u.length ? Di(u[a]) : " "))((_) => r.pure({ x: l, w: d - l, up: _.ascent - c, down: _.descent + c })))))(Ht(
      0,
      u.length - 1 | 0
    ));
  };
}, pJ = (t) => (n) => {
  const e = (o) => (o.x - n.x) * (o.x - n.x) + (o.y - n.y) * (o.y - n.y), r = N((o) => (i) => e(i) < e(o) ? i : o)({ x: t.x, y: t.y })([{ x: t.x, y: t.y }, { x: t.x + t.w, y: t.y }, { x: t.x, y: t.y + t.h }, { x: t.x + t.w, y: t.y + t.h }]);
  return H((o) => {
    const i = M(o) / 5;
    return { x: r.x + (n.x - r.x) * i, y: r.y + (n.y - r.y) * i };
  })([1, 2, 3, 4]);
}, Tf = (t) => {
  const n = bu(`
`)(t);
  return n.length === 0 ? [""] : n;
}, mJ = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = Wo(o)(i)(r), a = 0 < t.length ? J("Just", t[0]) : x, l = (() => {
    if (a.tag === "Just")
      return a._1;
    if (a.tag === "Nothing")
      return u;
    f();
  })(), d = t.length - 1 | 0, _ = d >= 0 && d < t.length ? J("Just", t[d]) : x, g = (() => {
    if (_.tag === "Just")
      return _._1;
    if (_.tag === "Nothing")
      return s;
    f();
  })(), p = l.x - u.x, m = 2 * (() => {
    const C = l.y - u.y;
    return (p < 0 ? -p : p) + (C < 0 ? -C : C);
  })(), h = g.x - s.x, $ = 2 * (() => {
    const C = g.y - s.y;
    return (h < 0 ? -h : h) + (C < 0 ? -C : C);
  })(), y = m + Nu(t) + $, v = y <= 1e-4 ? 1 : 1 - $ / y, w = y <= 1e-4 ? 0 : m / y, T = v - w, b = xi(t)(eu(0)(1)(T <= 1e-4 ? 0 : (c - w) / T)), L = (() => {
    if (b.tag === "Just")
      return b._1;
    if (b.tag === "Nothing")
      return l;
    f();
  })();
  return c < w ? Jc("InsideRect", Oo(2)(n)) : c >= v ? Jc("InsideRect", Oo(2)(e)) : Jc("InsideBall", L, 6);
}, $J = { offset: 0.8, passes: 2, rMax: 5 }, yJ = (t) => {
  const n = t.Monad0().Applicative0(), e = $e(n);
  return (r) => (o) => (i) => (s) => {
    const u = { color: s, width: 1, lineJoin: In, lineCap: Be }, c = { color: i, flat: !0 }, a = (l) => t.drawRoundedRect({ x: l.x, y: l.y, w: l.w, h: l.h })(4)(J("Just", c))(J("Just", u));
    return e((l) => {
      if (l._2.tag === "Travelling") {
        const d = er(l._2._1.edge)(r.edges), _ = mn(l._2._1.target)(r.nodes), g = mn(l._2._1.source)(r.nodes);
        if (g.tag === "Just" && _.tag === "Just" && d.tag === "Just") {
          const p = mJ((() => {
            if (l._2._1.direction === "Forward")
              return d._1;
            if (l._2._1.direction === "Backward")
              return Pn(d._1);
            f();
          })())(g._1)(_._1)(l._2._1.progress)(l._2._1.holdPre)(l._2._1.holdPost);
          if (p.tag === "InsideRect")
            return a(p._1);
          if (p.tag === "InsideBall")
            return t.fillStrokePath(Du(p._1)(p._2))(c)(u);
          f();
        }
        return n.pure();
      }
      if (l._2.tag === "Filling") {
        const d = mn(l._2._1.node)(r.nodes);
        if (d.tag === "Just")
          return a(Oo(2)(d._1));
        if (d.tag === "Nothing")
          return n.pure();
        f();
      }
      return n.pure();
    })(Kn(o.tokens));
  };
}, Nl = (t) => (n) => (e) => (r) => t.strokePath((() => {
  const o = zt(
    (i) => x,
    (i) => (s) => J("Just", { head: i, tail: s }),
    H((i) => i.pt)(Sh(
      (i) => (s) => {
        const u = M(s) / M(72), c = bn(-0.18)(0.18)(i.prng), a = bn(-0.1)(0.1)(c.prng), l = bn(-0.07)(0.07)(a.prng), d = e * (0.05 + 0.55 * u) * (1 + a.value), _ = u * 28.274333882308138 + c.value;
        return { prng: l.prng, pt: { x: n.x + Vn(_) * d + l.value * e, y: n.y + ie(_) * d + l.value * e } };
      },
      { prng: 137, pt: { x: n.x, y: n.y } },
      Ht(0, 72)
    ))
  );
  if (o.tag === "Just")
    return [1, o._1.head.x, o._1.head.y, ...aJ((i) => [2, i.x, i.y])(o._1.tail)];
  if (o.tag === "Nothing")
    return [];
  f();
})())({ color: r, width: 5.5, lineJoin: In, lineCap: Ke }), vJ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = $e(n.Applicative0());
  return (i) => (s) => (u) => o((c) => e.bind(t.pushAlpha(c.alpha))(() => e.bind(t.strokePath(c.path)({
    color: i.nodeFill,
    width: c.width,
    lineJoin: In,
    lineCap: Ke
  }))(() => r)))(cJ(Fd(s) + 7777 | 0)(s)(u));
}, qd = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = n.Applicative0(), i = $e(o), s = t.popClip, u = $e(o), c = Qr.traverse(o), a = hJ(t), l = vJ(t), d = t.popTransform;
  return (_) => (g) => (p) => (m) => (h) => ($) => (y) => (v) => (w) => {
    const T = (P) => e.bind(t.pushAlpha(P.alpha))(() => e.bind(t.strokePath(P.path)({
      color: p.nodeStroke,
      width: 2,
      lineJoin: In,
      lineCap: Ke
    }))(() => r)), b = { family: p.fontFamily, size: p.wobble ? 15 : 11, weight: p.wobble ? 800 : 500 }, L = bu(`
`)(v.label === "" ? y : v.label), C = L.length === 0 ? [""] : L, E = b.size * 1.2, B = v.shape === "Cylinder" ? t.strokePath(Vw({ x: v.x, y: v.y, w: v.w, h: v.h }))({
      color: p.nodeStroke,
      width: 1.25,
      lineJoin: In,
      lineCap: Be
    }) : o.pure(), D = (v.shape === "Cylinder" ? (v.y + (v.y + v.h + 5 - 2 * xe(v.h * 0.075)(v.w * 0.075))) / 2 : (v.y + v.y + v.h) / 2) - M(C.length) * E / 2 + E / 2, F = w.tag === "PloppingOut" && p.wobble ? w._1 : -1, z = F >= 0, V = zu(w), Z = z ? { alpha: 1, scale: 1 } : V, Y = v.x + v.w / 2, W = v.y + v.h / 2, A = e.bind(t.pushAlpha(Z.alpha * m))(() => e.bind(t.pushTransform({
      tx: Y * (1 - Z.scale),
      ty: W * (1 - Z.scale),
      sx: Z.scale,
      sy: Z.scale
    }))(() => {
      const P = { x: v.x, y: v.y, w: v.w, h: v.h }, O = {
        color: p.nodeStroke,
        width: p.wobble ? 2 : 1.25 * g,
        lineJoin: In,
        lineCap: p.wobble ? Ke : Be
      };
      return e.bind((() => {
        if (p.wobble) {
          if (v.shape === "Rectangle")
            return i(T)(uJ(xl)(Fd(P))(P));
          const G = fo(7)(v);
          return e.bind(i(T)((() => {
            const Q = Ii(G);
            return G.length < 4 ? [] : Co(vl)(Q)(!0)(G);
          })()))(() => u((Q) => i(T)((() => {
            const X = Ii(Q);
            return Q.length < 2 ? [] : Co(vl)(X)(!1)(Q);
          })()))(v.shape === "Cylinder" ? [RT(v)] : []));
        }
        return e.bind(mf(t)(v.shape)(P)(7)(J("Just", { color: p.nodeFill, flat: !1 }))(J(
          "Just",
          O
        )))(() => B);
      })())(() => e.bind((() => {
        if ($.tag === "Just" && p.wobble && !z) {
          const G = $._1;
          return e.bind(c(a(b))(C))((Q) => {
            const X = It((it) => (at) => rt.compare(it.x)(at.x)), tt = Nn(Ie(v.x * 7919 + v.y * 3001)) * -1640531535 | 0, U = bn(5)(7.5)(tt), q = bn(0)(U.value)(U.prng), j = -(1 + 2 * bn(-1)(1)(q.prng).value * 3.141592653589793 / 180), et = (it, at, wt, Nt, Ct) => X(vt((Wt) => Wt)([
              j * at + it >= Nt && j * at + it <= Ct ? J("Just", { x: at, y: j * at + it }) : x,
              j * wt + it >= Nt && j * wt + it <= Ct ? J("Just", { x: wt, y: j * wt + it }) : x,
              (() => {
                const Wt = (Nt - it) / j;
                return Wt >= at && Wt <= wt ? J("Just", { x: Wt, y: Nt }) : x;
              })(),
              (() => {
                const Wt = (Ct - it) / j;
                return Wt >= at && Wt <= wt ? J("Just", { x: Wt, y: Ct }) : x;
              })()
            ])), nt = U.value, ft = pr(G.frameHash)(3), ct = ft === 0 ? { r: 200, g: 35, b: 30, a: 220 } : ft === 1 ? { r: 35, g: 150, b: 80, a: 220 } : { r: 30, g: 80, b: 200, a: 220 }, dt = v.x + v.w / 2, Gt = le(Bt((it) => (at) => Bt((() => {
              const wt = D + M(it) * E, Nt = dt - N((Ct) => (Wt) => Ct + Wt.w)(0)(at) / 2;
              return (Ct) => (Wt) => {
                const Zn = b.size * 0.1, Gn = Ct - 1 | 0, Fn = Gn >= 0 && Gn < at.length && Ct > 0 ? (at[Gn].x + at[Gn].w + Wt.x) / 2 : Wt.x - Zn;
                return {
                  x: Nt + Fn - 1,
                  y: wt - Wt.up - 1,
                  w: ru(0)((() => {
                    const Pt = Ct + 1 | 0;
                    return Pt >= 0 && Pt < at.length && Ct < (at.length - 1 | 0) ? (Wt.x + Wt.w + at[Pt].x) / 2 - Fn : Wt.x + Wt.w + Zn - Fn;
                  })()) + 2,
                  h: Wt.up + Wt.down + 2
                };
              };
            })())(at))(Q)), Jt = v.y + 4, Yt = v.x + v.w - 4, _t = v.x + 4, Tt = Jt - j * _t + q.value, ht = v.y + v.h - 4, mt = xt(xt(Bt((it) => (at) => {
              const wt = (at.from.x + at.to.x) / 2, Nt = (at.from.y + at.to.y) / 2, Ct = bn(-1)(1)(tt + (911 * (it + 1 | 0) | 0) | 0), Wt = bn(-3)(5)(Ct.prng), Zn = Ct.value * 3.141592653589793 / 180, Gn = Vn(Zn), Fn = ie(Zn), Pt = (Lt) => ({ x: wt + (Lt.x - wt) * Gn - (Lt.y - Nt) * Fn, y: Nt + (Lt.x - wt) * Fn + (Lt.y - Nt) * Gn });
              return {
                from: (() => {
                  const Lt = Pt(at.from), te = Lt.y - Nt, Rn = Lt.x - wt, Bn = Hn(Rn * Rn + te * te), wn = Bn < 1e-4 ? 1 : (Bn + Wt.value) / Bn;
                  return { x: wt + Rn * wn, y: Nt + te * wn };
                })(),
                to: (() => {
                  const Lt = Pt(at.to), te = bn(-3)(5)(Wt.prng).value, Rn = Lt.y - Nt, Bn = Lt.x - wt, wn = Hn(Bn * Bn + Rn * Rn), Se = wn < 1e-4 ? 1 : (wn + te) / wn;
                  return { x: wt + Bn * Se, y: Nt + Rn * Se };
                })()
              };
            })(vt((it) => {
              const at = et(Tt + M(it) * nt, _t, Yt, Jt, ht);
              return at.length === 2 ? J("Just", { from: at[0], to: at[1] }) : x;
            })(Ht(0, Js(1)(Nn(Ie((ht - j * Yt - Tt) / nt)))))))((it) => lt(
              (at) => at.to.x - at.from.x > 1,
              N((at) => (wt) => xt(at)((Nt) => {
                const Ct = et(Nt.from.y - j * Nt.from.x, wt.x, wt.x + wt.w, wt.y, wt.y + wt.h);
                return Ct.length === 2 ? Ct[0].x > Nt.from.x + 1e-3 && Ct[1].x < Nt.to.x - 1e-3 ? [{ from: Nt.from, to: Ct[0] }, { from: Ct[1], to: Nt.to }] : Ct[0].x <= Nt.from.x + 1e-3 && Ct[1].x < Nt.to.x - 1e-3 ? [{ from: Ct[1], to: Nt.to }] : Ct[0].x > Nt.from.x + 1e-3 && Ct[1].x >= Nt.to.x - 1e-3 ? [{ from: Nt.from, to: Ct[0] }] : [] : [Nt];
              }))([it])(Gt)
            )))((it) => (() => {
              const at = it.to.x - it.from.x;
              return Hn(2) * (at >= 0 ? at : -at) <= 28;
            })() ? [it] : [
              { from: it.from, to: { x: it.from.x + (it.to.x - it.from.x) * 0.495, y: it.from.y + (it.to.y - it.from.y) * 0.495 } },
              { from: { x: it.from.x + (it.to.x - it.from.x) * 0.505, y: it.from.y + (it.to.y - it.from.y) * 0.505 }, to: it.to }
            ]), st = mt.length, gt = (it) => ru(0)(fJ(1)(G.t * M(st) - M(it)));
            return e.bind(t.pushClip(yf(fo(7)(v)))(Zs))(() => e.bind(i((it) => {
              const at = it._1, wt = bn(1.4)(1.9)(tt + (1303 * (at + 1 | 0) | 0) | 0), Nt = bn(0.35)(0.8)(wt.prng), Ct = i((Wt) => e.bind(t.pushAlpha(Wt.alpha * Nt.value))(() => e.bind(t.strokePath(Rd(gt(at))(Wt.path))({
                color: ct,
                width: wt.value,
                lineJoin: In,
                lineCap: Ke
              }))(() => r)))(Co({ ...xl, rMax: 0, offset: 0.5 })(tt + (53 * (at + 1 | 0) | 0) | 0)(!1)([it._2.from, it._2.to]));
              return gt(at) > 0 ? Ct : o.pure();
            })(Bt(Mn)(mt)))(() => s));
          });
        }
        return o.pure();
      })())(() => e.bind((() => {
        if (_ === "LabelsShown") {
          const G = e.bind(t.pushAlpha(h))(() => e.bind(i((Q) => t.drawText({
            x: v.x + v.w / 2,
            y: D + M(Q._1) * E,
            content: Q._2,
            font: b,
            color: p.text,
            align: Vo,
            baseline: zr
          }))(Bt(Mn)(C)))(() => r));
          return h > 0 ? G : o.pure();
        }
        if (_ === "LabelsHidden")
          return o.pure();
        f();
      })())(() => e.bind((() => {
        const G = l(p)(P)(F);
        return z ? G : o.pure();
      })())(() => e.bind(d)(() => r)))));
    }));
    return Z.alpha * m > 0 ? A : o.pure();
  };
}, Xd = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = qd(t), i = t.popAlpha, s = $e(e);
  return (u) => (c) => (a) => {
    const l = { ...u, nodeFill: u.text, text: u.nodeFill, nodeStroke: u.nodeFill };
    return s((d) => {
      const _ = mn(d._1)(a.nodes), g = mn(d._1)(c.nodes), p = (() => {
        if (g.tag === "Just" && _.tag === "Just") {
          const m = _._1, h = g._1;
          return r.bind(t.pushAlpha(d._2))(() => r.bind(o(xf)(1)(l)(1)(1)(x)(d._1)(h)(m))(() => i));
        }
        return e.pure();
      })();
      return d._2 > 0 ? p : e.pure();
    })(Kn(a.nodeInvert));
  };
}, xJ = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = $e(e);
  return (i) => (s) => (u) => {
    const c = { family: i.fontFamily, size: 11, weight: 500 };
    return o((a) => {
      if (a._2 === "" || (() => {
        const _ = er(a._1)(u.edges);
        return _.tag === "Nothing" || !(_.tag === "Just" && _._1.tag === "Extended");
      })())
        return e.pure();
      const l = er(a._1)(s.edges), d = (() => {
        if (l.tag === "Just")
          return xi(l._1)(0.5);
        if (l.tag === "Nothing")
          return x;
        f();
      })();
      if (d.tag === "Nothing")
        return e.pure();
      if (d.tag === "Just") {
        const _ = d._1;
        return r.bind(t.measureText(c)(a._2))((g) => {
          const p = g + 12;
          return r.bind(t.drawRoundedRect({ x: _.x - p / 2, y: _.y - 8.5, w: p, h: 17 })(3)(J(
            "Just",
            { color: i.chipPillFill, flat: !0 }
          ))(x))(() => t.drawText({
            x: _.x,
            y: _.y,
            content: a._2,
            font: c,
            color: i.chipPillText,
            align: Vo,
            baseline: zr
          }));
        });
      }
      f();
    })(Kn(s.edgeLabels));
  };
}, NJ = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = t.popAlpha;
  return (i) => (s) => (u) => (c) => (a) => (l) => (d) => (_) => (g) => {
    const p = (() => {
      if (g > 1e-4 && d > 1 - g) {
        const h = (1 - d) / g;
        return h < 0 ? 0 : h > 1 ? 1 : h;
      }
      if (_ > 1e-4 && d < _) {
        const h = d / _;
        return h < 0 ? 0 : h > 1 ? 1 : h;
      }
      return 1;
    })(), m = Od(c)(a)(l)(d)(_)(g);
    if (m.tag === "CircleShape")
      return i ? Nl(t)(m._1)(m._2)({ r: 200, g: 35, b: 30, a: 220 }) : t.fillStrokePath(Du(m._1)(m._2))({ color: s, flat: !0 })({
        color: u,
        width: 1,
        lineJoin: In,
        lineCap: Be
      });
    if (m.tag === "PolyShape" && i && m._1.length >= 3)
      return r.bind(t.pushAlpha(p))(() => r.bind(Nl(t)(Id(m._1))(6)({
        r: 200,
        g: 35,
        b: 30,
        a: 220
      }))(() => o));
    if (m.tag === "PolyShape")
      return i ? e.pure() : m._1.length >= 3 ? t.fillStrokePath(yf(m._1))({ color: s, flat: !0 })({
        color: u,
        width: 1,
        lineJoin: In,
        lineCap: Be
      }) : e.pure();
    f();
  };
}, wJ = (t) => {
  const n = t.Monad0().Bind1(), e = t.popAlpha;
  return (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
    const l = Wo(c)(a)(u), d = { x: i.x + i.w / 2, y: i.y + i.h / 2 }, _ = { x: s.x + s.w / 2, y: s.y + s.h / 2 }, g = (p, m) => n.bind(t.pushAlpha(m))(() => n.bind(t.fillStrokePath(Du(p)(6))({
      color: r,
      flat: !0
    })({ color: o, width: 1, lineJoin: In, lineCap: Be }))(() => e));
    return l < 0.5 ? g(
      d,
      (() => {
        const p = l * 2;
        return 1 - (p < 0 ? 0 : p > 1 ? 1 : p) * (p < 0 ? 0 : p > 1 ? 1 : p) * (p < 0 ? 3 : p > 1 ? 1 : 3 - 2 * p);
      })()
    ) : g(
      _,
      (() => {
        const p = (l - 0.5) * 2;
        return (p < 0 ? 0 : p > 1 ? 1 : p) * (p < 0 ? 0 : p > 1 ? 1 : p) * (p < 0 ? 3 : p > 1 ? 1 : 3 - 2 * p);
      })()
    );
  };
}, ou = (t) => {
  const n = NJ(t), e = wJ(t), r = t.Monad0().Applicative0(), o = $e(r);
  return (i) => (s) => (u) => (c) => (a) => o((l) => {
    if (l._2.tag === "Travelling") {
      const d = mn(l._2._1.target)(s.nodes), _ = mn(l._2._1.source)(s.nodes);
      if (_.tag === "Just" && d.tag === "Just") {
        const g = er(l._2._1.edge)(s.edges);
        if (g.tag === "Just")
          return n(i)(c)(a)((() => {
            if (l._2._1.direction === "Forward")
              return g._1;
            if (l._2._1.direction === "Backward")
              return Pn(g._1);
            f();
          })())(_._1)(d._1)(l._2._1.progress)(l._2._1.holdPre)(l._2._1.holdPost);
        if (g.tag === "Nothing")
          return e(c)(a)(_._1)(d._1)(l._2._1.progress)(l._2._1.holdPre)(l._2._1.holdPost);
        f();
      }
      return r.pure();
    }
    if (l._2.tag === "Filling") {
      if (i)
        return r.pure();
      const d = mn(l._2._1.node)(s.nodes);
      if (d.tag === "Just")
        return t.fillStrokePath(yf(fo(4)(Oo(2)(d._1))))({
          color: c,
          flat: !0
        })({ color: a, width: 1, lineJoin: In, lineCap: Be });
      if (d.tag === "Nothing")
        return r.pure();
      f();
    }
    return r.pure();
  })(Kn(u.tokens));
}, Yd = (t) => {
  const n = ou(t), e = t.Monad0(), r = e.Bind1(), o = ou(t), i = yJ(t), s = t.popClip, u = t.popBlend, c = t.popLayer, a = e.Applicative0(), l = $e(a), d = t.popAlpha;
  return (_) => (g) => (p) => (m) => {
    const h = g.wobble ? n(!0)(p)(m)(g.tokenInside)(g.tokenInsideStroke) : r.bind(t.insideTokenStyle(_))(($) => {
      if ($ === "GenieSilhouette")
        return o(!1)(p)(m)(g.tokenInside)(g.tokenInsideStroke);
      if ($ === "ConvexAbsorb")
        return i(p)(m)(g.tokenInside)(g.tokenInsideStroke);
      f();
    });
    if (g.tokenInsideBlend === "Difference")
      return r.bind(t.pushLayer(Gw))(() => r.bind(t.pushBlend(Ts))(() => r.bind(t.pushClip(ia(p)(m))(Zs))(() => r.bind(h)(() => r.bind(s)(() => r.bind(u)(() => r.bind(c)(() => r.bind(t.pushLayer(Iw))(() => r.bind(l(($) => {
        const y = mn($._1)(m.nodes);
        return y.tag === "Just" && zu(y._1).alpha > 0 ? mf(t)($._2.shape)({ x: $._2.x, y: $._2.y, w: $._2.w, h: $._2.h })(7)(J(
          "Just",
          { color: dn, flat: !1 }
        ))(x) : a.pure();
      })(Kn(p.nodes)))(() => c)))))))));
    if (g.tokenInsideBlend === "Normal")
      return r.bind(t.pushClip(ia(p)(m))(Zs))(() => r.bind(t.pushAlpha(g.tokenInsideAlpha))(() => r.bind(h)(() => r.bind(d)(() => s))));
    f();
  };
}, Ud = (t) => {
  const n = t.Monad0().Bind1(), e = ou(t), r = ou(t), o = t.popClip, i = t.popLayer;
  return (s) => (u) => (c) => (a) => n.bind(t.pushLayer(Pw))(() => n.bind(t.pushClip(_J(u)(c)(a))(Rw))(() => n.bind(s.wobble ? e(!0)(c)(a)(s.tokenOutsideFill)(s.tokenOutsideStroke) : r(!1)(c)(a)(s.tokenOutsideFill)(s.tokenOutsideStroke))(() => n.bind(o)(() => i))));
}, TJ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = $e(r);
  return (i) => (s) => (u) => (c) => (a) => (l) => {
    const d = Eu(l).length, _ = M(d + 1 | 0), g = ($) => {
      const y = (u * _ - M($)) / 1.5, v = y < 0 ? 0 : y > 1 ? 1 : y;
      return v * v * (3 - 2 * v);
    }, m = (($) => {
      let y = $, v = !0, w;
      for (; v; ) {
        const T = y;
        if (T >= d) {
          v = !1, w = T;
          continue;
        }
        if (g(T) >= 1) {
          y = T + 1 | 0;
          continue;
        }
        v = !1, w = T;
      }
      return w;
    })(0), h = m >= d ? [] : jr(($) => g($) > 0)(Ht(m, d - 1 | 0)).init;
    return e.bind((() => {
      const $ = t.drawText({
        x: c,
        y: a,
        content: Sn(m)(l),
        font: i,
        color: s,
        align: jc,
        baseline: zr
      });
      return m > 0 ? $ : r.pure();
    })())(() => o(($) => e.bind(t.measureText(i)(Sn($)(l)))((y) => {
      const v = g($);
      return t.drawText({
        x: c + y,
        y: a - (1 - v) * 10,
        content: Sn(1)(yi(Fe(Sn($)(l)))(l)),
        font: i,
        color: { ...s, a: Nn(Ie(v * M(s.a))) },
        align: jc,
        baseline: zr
      });
    }))(h));
  };
}, Hu = (t) => (n) => (e) => (r) => {
  const o = H((p) => M(Js(1)(Eu(p).length)))(r), i = ru(1)(N(co)(0)(o)), s = Wo(n)(e)(t), u = s * i, c = Js(1)(r.length), l = ((p) => (m) => (h) => {
    let $ = p, y = m, v = h, w = !0, T;
    for (; w; ) {
      const b = $, L = y, E = zt((B) => x, (B) => (D) => J("Just", { head: B, tail: D }), v);
      if (E.tag === "Nothing") {
        w = !1, T = Js(0)(c - 1 | 0);
        continue;
      }
      if (E.tag === "Just") {
        if (L + E._1.head >= u) {
          w = !1, T = b;
          continue;
        }
        $ = b + 1 | 0, y = L + E._1.head, v = E._1.tail;
        continue;
      }
      f();
    }
    return T;
  })(0)(0)(o), d = N(co)(0)(l < 1 ? [] : bt(0, l, o)), _ = d / i;
  if (l >= 0 && l < o.length) {
    const p = (d + o[l]) / i;
    return {
      line: l >= 0 && l < r.length ? r[l] : "",
      phaseInLabel: (() => {
        if (p <= _)
          return 1;
        const m = (s - _) / (p - _);
        return m < 0 ? 0 : m > 1 ? 1 : m;
      })()
    };
  }
  const g = (d + 1) / i;
  return {
    line: l >= 0 && l < r.length ? r[l] : "",
    phaseInLabel: (() => {
      if (g <= _)
        return 1;
      const p = (s - _) / (g - _);
      return p < 0 ? 0 : p > 1 ? 1 : p;
    })()
  };
}, Vd = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(Hu(r)(0)(0)(H(lg)(o)).line))((i) => {
    const s = i + 28;
    return n.Applicative0().pure({ x: e.x + e.w / 2 - s / 2, y: e.y - 25.2 - 14, w: s, h: 25.2 });
  });
}, JJ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Vd(t), o = n.Applicative0(), i = Qr.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => Qd(vt((a) => a)(c)))(i((c) => {
    if (c._2.tag === "Filling" && c._2._1.labels.length !== 0) {
      const a = mn(c._2._1.node)(s.nodes);
      if (a.tag === "Just")
        return e.bind(r(a._1)(c._2._1.progress)(c._2._1.labels))((l) => o.pure(J("Just", k(c._1, l))));
      if (a.tag === "Nothing")
        return o.pure(x);
      f();
    }
    return o.pure(x);
  })(Kn(u.tokens)));
}, bJ = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => (i) => (s) => (u) => (c) => {
    const a = Nf(e)(r)(o)(i)(s)(u);
    return n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(Hu(i)(s)(u)(xt(c)(Tf)).line))((l) => n.Applicative0().pure({
      x: a.x + 14 + l / 2 - l / 2 - 14,
      y: a.y - 6 - 8 - 6.6 - 6,
      w: l + 28,
      h: 25.2
    }));
  };
}, kJ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = bJ(t), o = n.Applicative0(), i = Qr.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => Qd(vt((a) => a)(c)))(i((c) => {
    if (c._2.tag === "Travelling" && c._2._1.labels.length !== 0) {
      const a = mn(c._2._1.target)(s.nodes), l = mn(c._2._1.source)(s.nodes), d = er(c._2._1.edge)(s.edges);
      if (d.tag === "Just" && l.tag === "Just" && a.tag === "Just") {
        const _ = (() => {
          if (c._2._1.direction === "Forward")
            return d._1;
          if (c._2._1.direction === "Backward")
            return Pn(d._1);
          f();
        })(), g = Nf(_)(l._1)(a._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost);
        return e.bind(r(_)(l._1)(a._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost)(c._2._1.labels))((p) => o.pure(J(
          "Just",
          k(c._1, { id: c._1, rect: p, token: g })
        )));
      }
    }
    return o.pure(x);
  })(Kn(u.tokens)));
}, Jf = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = kJ(t), o = JJ(t);
  return (i) => (s) => (u) => e.bind(r(s)(u))((c) => e.bind(o(s)(u))((a) => n.Applicative0().pure(VT({
    x: i.vx,
    y: i.vy,
    w: i.vw,
    h: i.vh
  })([
    ...vt((l) => {
      const d = mn(l._1)(u.nodes);
      return d.tag === "Just" && zu(d._1).alpha > 0 ? J("Just", { x: l._2.x, y: l._2.y, w: l._2.w, h: l._2.h }) : x;
    })(Kn(s.nodes)),
    ...(() => {
      const l = (d, _) => {
        if (d.tag === "Leaf")
          return _;
        if (d.tag === "Node")
          return l(d._5, tn("Cons", d._4, l(d._6, _)));
        f();
      };
      return Dt(on.foldr, l(a, nn));
    })()
  ])(vt((l) => Hd(l)(c))((() => {
    const l = (d) => {
      if (d.tag === "Leaf")
        return R;
      if (d.tag === "Node")
        return Kt("Node", d._1, d._2, d._3, void 0, l(d._5), l(d._6));
      f();
    };
    return It(I.compare)(Dt(_e.foldr, l(c)));
  })())))));
}, Kd = (t) => (n) => (e) => {
  const r = Ni(6)(0.55)(eu(0)(1)((1 - t) / 0.06)), o = t > 0.94, i = o && e > 1e-4, s = Ni(6)(0.55)(eu(0)(1)(t / 0.06)), u = t < 0.06, c = u && n > 1e-4, a = o && e <= 1e-4;
  return {
    popScale: c ? s : i ? r : 1,
    flipY: u && n <= 1e-4 ? s : a ? r : 1,
    fadeAlpha: (() => {
      if (c) {
        const l = t / 0.06;
        return l < 0 ? 0.55 : l > 1 ? 1 : 0.55 + 0.44999999999999996 * l;
      }
      if (i) {
        const l = (1 - t) / 0.06;
        return l < 0 ? 0.55 : l > 1 ? 1 : 0.55 + 0.44999999999999996 * l;
      }
      return 1;
    })()
  };
}, LJ = (t) => {
  const n = Wd(t), e = t.Monad0().Bind1();
  return (r) => (o) => (i) => (s) => (u) => {
    const c = Hu(i)(0)(0)(xt(s)(Tf)), a = { x: u.x + u.w / 2, y: u.y + u.h / 2 }, l = [1, a.x, u.y + u.h, 2, o.x + o.w / 2, o.y];
    return n(Kd(i)(0)(0))(u.x)(u.y + u.h)(a)(e.bind(t.drawRoundedRect({
      x: u.x,
      y: u.y + 1.5,
      w: u.w,
      h: u.h
    })(6)(J("Just", { color: r.chipShadow, flat: !0 }))(x))(() => e.bind(t.drawRoundedRect({
      x: u.x,
      y: u.y,
      w: u.w,
      h: u.h
    })(6)(J("Just", { color: r.chip, flat: !0 }))(J(
      "Just",
      { color: r.chipHairline, width: 1, lineJoin: In, lineCap: Be }
    )))(() => e.bind(t.strokePath(l)({
      color: r.chipHairline,
      width: 1,
      lineJoin: In,
      lineCap: Be
    }))(() => t.drawText({
      x: a.x,
      y: a.y,
      content: c.line,
      font: { family: r.fontFamily, size: 11, weight: 500 },
      color: r.chipText,
      align: Vo,
      baseline: zr
    })))));
  };
}, EJ = (t) => {
  const n = Vd(t), e = LJ(t);
  return (r) => (o) => (i) => (s) => (u) => t.Monad0().Bind1().bind(n(i)(s)(u))((c) => e(r)(i)(s)(u)(c));
}, SJ = (t) => {
  const n = Wd(t), e = t.Monad0(), r = e.Bind1(), o = $e(e.Applicative0()), i = TJ(t);
  return (s) => (u) => (c) => (a) => (l) => (d) => (_) => (g) => (p) => {
    const m = Hu(l)(d)(_)(xt(g)(Tf)), h = m.line, $ = m.phaseInLabel / 0.45, y = $ < 0 ? 0 : $ > 1 ? 1 : $, v = p.w, w = p.y, T = p.x, b = T + 14, L = p.h, C = w + L / 2;
    return n(Kd(l)(d)(_))(T)(w + L)({ x: T + v / 2, y: C })(r.bind(o((E) => t.fillPath(Du(E)(1.5))({
      color: s.trailDot,
      flat: !0
    }))(pJ(p)(Nf(u)(c)(a)(l)(d)(_))))(() => r.bind(t.drawRoundedRect({ x: T, y: w, w: v, h: L })(3)(J(
      "Just",
      { color: s.chipPillFill, flat: !0 }
    ))(x))(() => i({ family: s.fontFamily, size: 11, weight: 500 })(s.chipPillText)(y)(b)(C)(h))));
  };
}, bf = (t) => {
  const n = SJ(t), e = t.Monad0(), r = e.Applicative0(), o = EJ(t), i = e.Bind1(), s = $e(r), u = t.popLayer;
  return (c) => (a) => (l) => (d) => i.bind(t.pushLayer(Fw))(() => i.bind(s((_) => {
    if (_._2.tag === "Travelling") {
      if (_._2._1.labels.length !== 0) {
        const g = mn(_._2._1.target)(a.nodes), p = mn(_._2._1.source)(a.nodes), m = er(_._2._1.edge)(a.edges), h = Hd(_._1)(d);
        if (h.tag === "Just" && m.tag === "Just" && p.tag === "Just" && g.tag === "Just")
          return n(c)((() => {
            if (_._2._1.direction === "Forward")
              return m._1;
            if (_._2._1.direction === "Backward")
              return Pn(m._1);
            f();
          })())(p._1)(g._1)(_._2._1.progress)(_._2._1.holdPre)(_._2._1.holdPost)(_._2._1.labels)(h._1);
      }
      return r.pure();
    }
    if (_._2.tag === "Filling" && _._2._1.labels.length !== 0) {
      const g = mn(_._2._1.node)(a.nodes);
      if (g.tag === "Just")
        return o(c)(a)(g._1)(_._2._1.progress)(_._2._1.labels);
      if (g.tag === "Nothing")
        return r.pure();
      f();
    }
    return r.pure();
  })(Kn(l.tokens)))(() => u));
}, Md = (t) => {
  const n = Jf(t), e = bf(t);
  return (r) => (o) => (i) => (s) => t.Monad0().Bind1().bind(n(o)(i)(s))((u) => e(r)(i)(s)(u));
}, CJ = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => {
    const i = o.length - 1 | 0, s = i < 1 ? [] : bt(0, i, o), u = s.length - 1 | 0, c = u >= 0 && u < s.length ? J("Just", s[u]) : x, a = o.length - 1 | 0, l = a >= 0 && a < o.length ? J("Just", o[a]) : x;
    if (l.tag === "Just" && c.tag === "Just") {
      const d = bn(0.78)(1.18)(Ii(o) + 19 | 0), _ = bn(0.4)(0.62)(d.prng), g = r.wobble ? 8.75 * _.value : 4.375, p = bn(0.4)(0.62)(_.prng), m = r.wobble ? 8.75 * p.value : 4.375, h = l._1.y - c._1.y, $ = l._1.x - c._1.x, y = Hn($ * $ + h * h), v = h / y, w = -v, T = $ / y, b = l._1.x + T * 0.875, L = l._1.y + v * 0.875, C = r.wobble ? 8.75 * d.value : 8.75, E = b - T * C, B = L - v * C, D = E + w * g, F = B + T * g, z = [1, b, L, 2, E + w * 4.375, B + T * 4.375, 2, E - w * 4.375, B - T * 4.375, 5], V = E - w * m, Z = B - T * m, Y = { color: r.arrowFill, width: 2, lineJoin: In, lineCap: Ke };
      return y <= 1e-4 ? e.pure() : r.wobble ? n.Bind1().bind(t.strokePath([1, D, F, 2, b, L])(Y))(() => t.strokePath([1, V, Z, 2, b, L])(Y)) : t.fillPath(z)({ color: r.arrowFill, flat: !0 });
    }
    return e.pure();
  };
}, AJ = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = $e(e), i = t.popAlpha, s = CJ(t);
  return (u) => (c) => (a) => (l) => {
    const d = CT(8)(a);
    if (l.hi <= l.lo)
      return e.pure();
    const _ = zT(d)(l.lo)(l.hi);
    if (_.length === 0)
      return e.pure();
    const g = { color: u.edge, width: u.wobble ? 2 : 0.9375, lineJoin: In, lineCap: Ke }, p = u.wobble ? bn(-10)(4)(Ii(_)).value : 0, m = u.wobble ? eJ(p)(_) : _;
    return r.bind(u.wobble ? o((h) => r.bind(t.pushAlpha(h.alpha))(() => r.bind(t.strokePath(h.path)(g))(() => i)))((() => {
      const h = Ii(_);
      return m.length < 2 ? [] : Co($J)(h)(!1)(m);
    })()) : t.strokePath(kT(_))(g))(() => {
      const h = s(u)(m);
      return c && l.hi >= 0.999 ? h : e.pure();
    });
  };
}, jd = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = AJ(t), i = t.popAlpha, s = $e(e);
  return (u) => (c) => (a) => {
    const l = (d) => {
      const _ = Zt((g) => d.x >= g._2.x - 1 && d.x <= g._2.x + g._2.w + 1 && d.y >= g._2.y - 1 && d.y <= g._2.y + g._2.h + 1)(Kn(c.nodes));
      return _.tag === "Just" ? J("Just", _._1._2) : x;
    };
    return s((d) => {
      const _ = er(d._1)(a.edges);
      if (_.tag === "Just") {
        const g = _._1, p = er(d._1)(a.edgeFadeAlpha), m = (() => {
          if (p.tag === "Nothing")
            return 1;
          if (p.tag === "Just")
            return p._1;
          f();
        })(), h = r.bind(t.pushAlpha(m))(() => r.bind(o(u)((() => {
          const $ = _o("conn:")(d._1);
          if ($.tag === "Just")
            return !1;
          if ($.tag === "Nothing")
            return !0;
          f();
        })())((() => {
          const $ = (() => {
            if (0 < d._2.length) {
              const v = l(d._2[0]);
              if (v.tag === "Just")
                return Pn(pl(fo(7)(v._1))(Pn(d._2)));
            }
            return d._2;
          })(), y = $.length - 1 | 0;
          if (y >= 0 && y < $.length) {
            const v = l($[y]);
            if (v.tag === "Just")
              return pl(fo(7)(v._1))($);
          }
          return $;
        })())((() => {
          if (g.tag === "Retracted")
            return { lo: 0, hi: 0 };
          if (g.tag === "Extended")
            return { lo: 0, hi: 1 };
          if (g.tag === "Extending")
            return { lo: 0, hi: g._2 };
          if (g.tag === "Retracting") {
            if (g._1 === "FromSource")
              return { lo: g._2, hi: 1 };
            if (g._1 === "FromTarget")
              return { lo: 0, hi: 1 - g._2 };
            if (g._1 === "FromBoth")
              return { lo: g._2 / 2, hi: 1 - g._2 / 2 };
          }
          f();
        })()))(() => i));
        return m > 0 ? h : e.pure();
      }
      if (_.tag === "Nothing")
        return e.pure();
      f();
    })(Kn(c.edges));
  };
}, PJ = (t) => (n) => {
  const e = (i) => {
    const s = mn(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !ge(
        (c) => 0 < c._2.length && c._2[0].x >= u.x && c._2[0].x <= u.x + u.w && c._2[0].y >= u.y && c._2[0].y <= u.y + u.h,
        Kn(t.edges)
      );
    }
    f();
  }, r = N((i) => (s) => (i * 31 | 0) + Ve(s) | 0)(5381)(Wr(n.frameTitle)), o = (i) => {
    const s = mn(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !ge(
        (c) => {
          const a = c._2.length - 1 | 0;
          return a >= 0 && a < c._2.length && c._2[a].x >= u.x && c._2[a].x <= u.x + u.w && c._2[a].y >= u.y && c._2[a].y <= u.y + u.h;
        },
        Kn(t.edges)
      );
    }
    f();
  };
  return N((i) => (s) => {
    const u = s._2;
    return lJ((c) => {
      if (c.tag === "Nothing")
        return J("Just", u);
      if (c.tag === "Just")
        return J(
          "Just",
          { t: ru(c._1.t)(u.t), angle: u.t >= c._1.t ? u.angle : c._1.angle, bigCircle: c._1.bigCircle || u.bigCircle, frameHash: c._1.frameHash }
        );
      f();
    })(s._1)(i);
  })(R)(xt(Kn(n.tokens))((i) => {
    if (i._2.tag === "Filling") {
      const s = i._2._1.node;
      return [
        k(
          s,
          {
            t: 1,
            angle: (() => {
              const u = vt((c) => (() => {
                const a = mn(s)(t.nodes), l = c._2.length - 1 | 0;
                return l >= 0 && l < c._2.length && a.tag === "Just" && c._2[l].x >= a._1.x && c._2[l].x <= a._1.x + a._1.w && c._2[l].y >= a._1.y && c._2[l].y <= a._1.y + a._1.h;
              })() ? J("Just", c._2) : x)(Kn(t.edges));
              if (0 < u.length) {
                const c = u[0].length - 1 | 0, a = c < 1 ? [] : bt(0, c, u[0]), l = a.length - 1 | 0;
                if (l >= 0 && l < a.length) {
                  const d = u[0].length - 1 | 0;
                  return d >= 0 && d < u[0].length ? to(u[0][d].y - a[l].y)(u[0][d].x - a[l].x) : 0;
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
                const s = er(i._2._1.edge)(t.edges);
                if (s.tag === "Just") {
                  const u = s._1.length - 1 | 0, c = u < 1 ? [] : bt(0, u, s._1), a = c.length - 1 | 0;
                  if (a >= 0 && a < c.length) {
                    const l = s._1.length - 1 | 0;
                    return l >= 0 && l < s._1.length ? to(s._1[l].y - c[a].y)(s._1[l].x - c[a].x) : 0;
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
                const s = er(i._2._1.edge)(t.edges);
                if (s.tag === "Just")
                  return 1 < s._1.length && 0 < s._1.length ? to(s._1[1].y - s._1[0].y)(s._1[1].x - s._1[0].x) : 0;
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
}, GJ = (t) => N((n) => (e) => (n * 31 | 0) + Ve(e) | 0)(5381)(Wr(t.frameTitle)), Zd = (t) => {
  const n = qd(t), e = t.Monad0().Applicative0(), r = $e(e);
  return (o) => (i) => (s) => (u) => (c) => {
    const a = GJ(c), l = PJ(u)(c);
    return r((d) => {
      const _ = mn(d._1)(c.nodes);
      if (_.tag === "Just")
        return n(o)(i)(s)((() => {
          const g = mn(d._1)(c.nodeFadeAlpha);
          if (g.tag === "Nothing")
            return 1;
          if (g.tag === "Just")
            return g._1;
          f();
        })())((() => {
          const g = mn(d._1)(c.nodeLabelFadeAlpha);
          if (g.tag === "Nothing")
            return 1;
          if (g.tag === "Just")
            return g._1;
          f();
        })())((() => {
          const g = mn(d._1)(l);
          return g.tag === "Just" ? J("Just", g._1) : g.tag === "Nothing" && gJ(d._1)(c.visited) ? J("Just", { t: 1, angle: 0, bigCircle: !1, frameHash: a }) : x;
        })())(d._1)(d._2)(_._1);
      if (_.tag === "Nothing")
        return e.pure();
      f();
    })(Kn(u.nodes));
  };
}, IJ = (t) => (n) => (e) => {
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
}, wl = (t) => (n) => (e) => {
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
}, Tl = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, sa = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, FJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, RJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, BJ = /* @__PURE__ */ (() => {
  const t = ue.unfoldr(Ee);
  return (n) => t(se("IterNode", n, Le));
})(), zJ = (t) => (n) => {
  const e = ie(t.angle), r = Vn(t.angle);
  return { a: r, b: e, c: 0, d: 1, e: -n * r, f: n * e - t.boxHeight / 2 };
}, DJ = (t) => [t.box.ground.a, t.box.ground.b, t.box.ground.c, t.box.ground.d, t.box.top.a, t.box.top.b, t.box.top.c, t.box.top.d], Ao = (t) => (n) => {
  const e = (r) => IJ(0)(255)(Nn(lr(M(r) * t)));
  return { r: e(n.r), g: e(n.g), b: e(n.b), a: n.a };
}, On = (t) => (n) => (e) => (r) => ({ x: (n - e) * Vn(t.angle), y: (n + e) * ie(t.angle) - r }), so = (t) => {
  const n = zt((e) => x, (e) => (r) => J("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...xt(n._1.tail)((e) => [2, e.x, e.y]), 5];
  f();
}, QJ = (t) => (n) => (e) => (r) => (o) => {
  const i = (() => {
    if (t === "Forward")
      return o;
    if (t === "Backward")
      return Pn(o);
    f();
  })();
  if (0 < i.length) {
    const u = xi(i)(wl(0)(1)(Wo(e)(r)(n)));
    if (u.tag === "Nothing")
      return i[0];
    if (u.tag === "Just")
      return u._1;
    f();
  }
  const s = xi(i)(wl(0)(1)(Wo(e)(r)(n)));
  if (s.tag === "Nothing")
    return { x: 0, y: 0 };
  if (s.tag === "Just")
    return s._1;
  f();
}, HJ = (t) => {
  const n = zt((e) => x, (e) => (r) => J("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...xt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, WJ = (t) => {
  const n = zt((e) => x, (e) => (r) => J("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { vx: 0, vy: 0, vw: 0, vh: 0 };
  if (n.tag === "Just") {
    const e = N((r) => (o) => ({ minX: Tl(r.minX)(o.x), minY: Tl(r.minY)(o.y), maxX: sa(r.maxX)(o.x), maxY: sa(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { vx: e.minX - 40, vy: e.minY - 40, vw: e.maxX - e.minX + 80, vh: e.maxY - e.minY + 80 };
  }
  f();
}, OJ = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => {
    const i = o.box, s = o.np, u = { color: r.nodeStroke, width: 1, lineJoin: In, lineCap: Be };
    return n.bind(t.fillStrokePath(so([i.ground.d, i.ground.c, i.top.c, i.top.d]))({ color: Ao(0.66)(r.nodeFill), flat: !0 })(u))(() => n.bind(t.fillStrokePath(so([
      i.ground.b,
      i.ground.c,
      i.top.c,
      i.top.b
    ]))({ color: Ao(0.82)(r.nodeFill), flat: !0 })(u))(() => n.bind(t.fillStrokePath(so([i.top.a, i.top.b, i.top.c, i.top.d]))({
      color: Ao(1)(r.nodeFill),
      flat: !0
    })(u))(() => t.drawTextAffine(zJ(e)(s.y + s.h))({
      x: s.x + s.w / 2,
      y: 0,
      content: s.label,
      font: { family: r.fontFamily, size: 11, weight: 600 },
      color: r.text,
      align: Vo,
      baseline: zr
    }))));
  };
}, qJ = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => (i) => {
    const s = { color: r.tokenOutsideStroke, width: 1, lineJoin: In, lineCap: Be }, u = i.x - 5.5, c = i.x + 5.5, a = i.y - 5.5, l = i.y + 5.5, d = o + 11, _ = On(e)(u)(a)(d), g = On(e)(c)(a)(d), p = On(e)(c)(l)(d), m = On(e)(u)(l)(d), h = On(e)(c)(l)(o), $ = On(e)(c)(a)(o);
    return n.bind(t.fillStrokePath(so([On(e)(u)(l)(o), h, p, m]))({ color: Ao(0.66)(r.tokenOutsideFill), flat: !0 })(s))(() => n.bind(t.fillStrokePath(so([
      $,
      h,
      p,
      g
    ]))({ color: Ao(0.82)(r.tokenOutsideFill), flat: !0 })(s))(() => t.fillStrokePath(so([_, g, p, m]))({
      color: Ao(1)(r.tokenOutsideFill),
      flat: !0
    })(s)));
  };
}, XJ = (t) => {
  const n = qJ(t);
  return (e) => (r) => (o) => (i) => {
    if (i.tag === "Travelling") {
      const s = FJ(i._1.edge)(o.edges);
      return s.tag === "Just" ? J(
        "Just",
        (() => {
          const u = QJ(i._1.direction)(i._1.progress)(i._1.holdPre)(i._1.holdPost)(s._1);
          return { depth: u.x + u.y, draw: n(e)(r)(0)(u) };
        })()
      ) : x;
    }
    if (i.tag === "Filling") {
      const s = RJ(i._1.node)(o.nodes);
      if (s.tag === "Just")
        return J(
          "Just",
          (() => {
            const u = { x: s._1.x + s._1.w / 2, y: s._1.y + s._1.h / 2 };
            return { depth: u.x + u.y, draw: n(e)(r)(e.boxHeight)(u) };
          })()
        );
    }
    return x;
  };
}, YJ = { angle: 0.5235987755982988, boxHeight: 26, transparentBg: !0 }, UJ = (t) => (n) => {
  const e = n.y + n.h, r = n.x + n.w;
  return {
    ground: { a: On(t)(n.x)(n.y)(0), b: On(t)(r)(n.y)(0), c: On(t)(r)(e)(0), d: On(t)(n.x)(e)(0) },
    top: { a: On(t)(n.x)(n.y)(t.boxHeight), b: On(t)(r)(n.y)(t.boxHeight), c: On(t)(r)(e)(t.boxHeight), d: On(t)(n.x)(e)(t.boxHeight) },
    depth: (n.x + r) / 2 + (n.y + e) / 2
  };
}, t_ = (t) => (n) => H((e) => ({ np: e, box: UJ(t)(e) }))((() => {
  const e = (r, o) => {
    if (r.tag === "Leaf")
      return o;
    if (r.tag === "Node")
      return e(r._5, tn("Cons", r._4, e(r._6, o)));
    f();
  };
  return Dt(on.foldr, e(n.nodes, nn));
})()), VJ = (t) => (n) => [
  ...xt(t_(t)(n))(DJ),
  ...(() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, tn("Cons", r._4, e(r._6, o)));
      f();
    };
    return xt(Dt(on.foldr, e(n.edges, nn)))(H((r) => On(t)(r.x)(r.y)(0)));
  })()
], KJ = (t) => {
  const n = t.to.y - t.from.y, e = t.to.x - t.from.x, r = sa(1e-4)(Hn(e * e + n * n)), o = n / r, i = e / r, s = t.to.y - o * 7, u = t.to.x - i * 7;
  return so([t.to, { x: u - o * 3, y: s + i * 3 }, { x: u + o * 3, y: s - i * 3 }]);
}, MJ = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => (i) => (s) => (u) => {
    const c = On(r)(u.x)(u.y)(0), a = On(r)(s.x)(s.y)(0);
    return n.Bind1().bind(t.strokePath(HJ([a, c]))({
      color: o.edge,
      width: 1.5,
      lineJoin: In,
      lineCap: Ke
    }))(() => {
      const l = t.fillPath(KJ({ from: a, to: c }))({ color: o.arrowFill, flat: !0 });
      return i ? l : e.pure();
    });
  };
}, jJ = (t) => {
  const n = MJ(t);
  return (e) => (r) => (o) => (i) => {
    const s = Ln(Mn, i, bt(1, i.length, i)), u = s.length - 1 | 0;
    return Bt((c) => (a) => ({ depth: (a._1.x + a._1.y + a._2.x + a._2.y) / 2, draw: n(e)(r)(o && c === u)(a._1)(a._2) }))(s);
  };
}, ZJ = (t) => {
  const n = OJ(t), e = XJ(t), r = jJ(t), o = t.Monad0(), i = Bi(o.Applicative0())(Xt);
  return (s) => (u) => (c) => (a) => {
    const l = wf(u), d = [
      ...xt(BJ(c.edges))((_) => r(s)(l)((() => {
        const g = _o("conn:")(_._1);
        if (g.tag === "Just")
          return !1;
        if (g.tag === "Nothing")
          return !0;
        f();
      })())(_._2)),
      ...H((_) => ({ depth: _.box.depth, draw: n(s)(l)(_) }))(t_(s)(c)),
      ...vt(e(s)(l)(c))((() => {
        const _ = (g, p) => {
          if (g.tag === "Leaf")
            return p;
          if (g.tag === "Node")
            return _(g._5, tn("Cons", g._4, _(g._6, p)));
          f();
        };
        return Dt(on.foldr, _(a.tokens, nn));
      })())
    ];
    return o.Bind1().bind((() => {
      const _ = WJ(VJ(s)(c));
      return t.Monad0().Bind1().bind(t.clearBackground(s.transparentBg ? l.bgTransparent : l.bg))(() => t.setViewport(_));
    })())(() => i((_) => _.draw)(It((_) => (g) => rt.compare(_.depth)(g.depth))(d)));
  };
}, n_ = (t, n) => ({ tag: t, _1: n }), iu = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, tb = (t) => (n) => (e) => {
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
}, kf = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, nb = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, eb = /* @__PURE__ */ n_("ResolvedLabels"), rb = (t) => {
  const n = Zt((e) => e.role === "FlyThrough")(t.levels);
  if (n.tag === "Just")
    return n._1;
  if (n.tag === "Nothing")
    return Ds(t);
  f();
}, Xi = (t) => (n) => {
  const e = iu(1)(En(n.rootLayout).w), r = Oi(n.rootLayout)(n.camera), o = !n.diving && n.levels.length === 1 ? 1 : tb(0)(1)(r.w / e), i = Ds(n).state.frameTitle === "" ? 0 * o : 40 * o, s = t.padding * o * o;
  return (() => {
    if (t.outputAspect.tag === "Nothing")
      return i$;
    if (t.outputAspect.tag === "Just")
      return jg(t.outputAspect._1);
    f();
  })()({ vx: r.x - s, vy: r.y - s - i, vw: r.w + 2 * s, vh: r.h + 2 * s + i });
}, ob = (t) => (n) => {
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just") {
    const e = kf(n._1)(t.segment.layout.nodes);
    if (e.tag === "Nothing")
      return [];
    if (e.tag === "Just") {
      const r = e._1.x * t.segment.placement.scale + t.segment.placement.tx, o = e._1.y * t.segment.placement.scale + t.segment.placement.ty, i = e._1.w * t.segment.placement.scale, s = e._1.h * t.segment.placement.scale;
      return [1, r, o, 2, r + i, o, 2, r + i, o + s, 2, r, o + s, 5];
    }
  }
  f();
}, Lf = (t) => (n) => {
  const e = Xp(n.segment.placement)({ x: t.vx, y: t.vy, w: t.vw, h: t.vh });
  return { vx: e.x, vy: e.y, vw: e.w, vh: e.h };
}, ib = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => (o) => {
    if (r === "")
      return n.Applicative0().pure();
    const i = o.vh / 720, s = 56 * i;
    return e.bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 56, weight: 700 })(r))((u) => {
      const c = s + 16 * i * 2, a = u * i + 28 * i * 2, l = o.vy + o.vh / 2, d = o.vx + o.vw / 2;
      return e.bind(t.drawRoundedRect({ x: d - a / 2, y: l - c / 2, w: a, h: c })(16 * i)(J(
        "Just",
        { color: { r: 255, g: 255, b: 255, a: 235 }, flat: !0 }
      ))(J(
        "Just",
        { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1.5 * i, lineJoin: In, lineCap: Ke }
      )))(() => t.drawText({
        x: d,
        y: l,
        content: r,
        font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: s, weight: 700 },
        color: { r: 28, g: 30, b: 36, a: 255 },
        align: Vo,
        baseline: zr
      }));
    });
  };
}, sb = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => (o) => {
    if (r === "")
      return n.Applicative0().pure();
    const i = o.vh / 720, s = 15 * i;
    return e.bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 15, weight: 600 })(r))((u) => {
      const c = o.vy + 12 * i, a = s + 6 * i * 2, l = u * i + 11 * i * 2, d = o.vx + o.vw / 2;
      return e.bind(t.drawRoundedRect({ x: d - l / 2, y: c, w: l, h: a })(a / 2)(J(
        "Just",
        { color: { r: 255, g: 255, b: 255, a: 240 }, flat: !0 }
      ))(J(
        "Just",
        { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1 * i, lineJoin: In, lineCap: Ke }
      )))(() => t.drawText({
        x: d,
        y: c + a / 2,
        content: r,
        font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: s, weight: 600 },
        color: { r: 28, g: 30, b: 36, a: 255 },
        align: Vo,
        baseline: zr
      }));
    });
  };
}, ub = (t) => {
  const n = Md(t), e = bf(t), r = t.Monad0(), o = r.Bind1(), i = r.Applicative0(), s = jd(t), u = Zd(t)(xf)(1), c = Xd(t), a = Ud(t), l = Yd(t), d = xJ(t), _ = t.popBlur, g = t.popAlpha, p = ib(t), m = sb(t);
  return (h) => ($) => (y) => (v) => (w) => (T) => (b) => (L) => {
    const C = wf(h.theme), E = (() => {
      if (L.tag === "ResolvedLabels")
        return n(C)(w)(T)(b);
      if (L.tag === "SpringLabels")
        return e(C)(T)(b)(L._1);
      f();
    })();
    return o.bind(t.Monad0().Bind1().bind(t.clearBackground(h.transparentBg ? C.bgTransparent : C.bg))(() => t.setViewport(w)))(() => o.bind((() => {
      const B = o.bind((() => {
        const D = t.pushAlpha(y);
        return y < 1 ? D : i.pure();
      })())(() => o.bind((() => {
        const D = t.pushBlur(v);
        return v > 0 ? D : i.pure();
      })())(() => o.bind(s(C)(T)(b))(() => o.bind(u(C)(T)(b))(() => o.bind(c(C)(T)(b))(() => o.bind(a(C)(w)(T)(b))(() => o.bind(l(Qw)(C)(T)(b))(() => o.bind(E)(() => o.bind((() => {
        const D = d(C)(T)(b);
        return b.staticKind !== "Animated" ? D : i.pure();
      })())(() => o.bind(v > 0 ? _ : i.pure())(() => y < 1 ? g : i.pure()))))))))));
      return y > 0 ? B : i.pure();
    })())(() => o.bind(h.watermark === "" ? t.Monad0().Applicative0().pure() : t.drawText({
      x: w.vx + 6,
      y: w.vy + 6,
      content: h.watermark,
      font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 9, weight: 600 },
      color: { r: 180, g: 180, b: 180, a: 255 },
      align: jc,
      baseline: Aw
    }))(() => b.staticKind === "TitleCard" ? p(b.frameTitle)(w) : m(b.frameTitle)(w))));
  };
}, e_ = (t) => {
  const n = t.Monad0().Applicative0(), e = rg(n)(Xt);
  return (r) => (o) => (i) => (s) => e(s.minis)((u) => {
    const c = r_(t)(r)(o)(i)(R)(s)(u);
    return (() => {
      const a = u.segment.path.length - 1 | 0;
      return u.bgAlpha > 0 && a >= 0 && a < u.segment.path.length && (() => {
        const l = kf(u.segment.path[a])(s.state.nodes);
        if (l.tag === "Just")
          return l._1.tag === "Hidden" ? !1 : l._1.tag !== "PloppingOut";
        if (l.tag === "Nothing")
          return !1;
        f();
      })();
    })() ? c : n.pure();
  });
}, r_ = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = t.popTransform, i = Md(t), s = bf(t), u = jd(t), c = Zd(t), a = Xd(t), l = Ud(t), d = Yd(t), _ = t.popBakedTransform, g = t.popClip, p = t.popBlur, m = t.popAlpha;
  return (h) => ($) => (y) => (v) => (w) => (T) => {
    const b = T.blur > 0, L = T.segment.placement, C = T.state, E = { tx: L.tx, ty: L.ty, sx: L.scale, sy: L.scale }, B = wf(h.theme), D = T.segment.layout, F = En(D), z = { vx: F.x - 1e3, vy: F.y - 1e3, vw: F.w + 2e3, vh: F.h + 2e3 }, V = T.segment.path.length - 1 | 0, Z = V >= 0 && V < T.segment.path.length ? kf(T.segment.path[V])(w.segment.layout.nodes) : x, Y = T.segment.placement.scale * y, W = nb(8)(iu(1)(1 / (1.25 * iu(1e-6)(Y)))), A = 11 * Y >= 5 ? xf : dJ, P = (() => {
      if (Z.tag === "Nothing")
        return e.pure();
      if (Z.tag === "Just") {
        const Q = Z._1;
        return r.bind(t.pushTransform({
          tx: w.segment.placement.tx,
          ty: w.segment.placement.ty,
          sx: w.segment.placement.scale,
          sy: w.segment.placement.scale
        }))(() => r.bind(mf(t)(Q.shape)({ x: Q.x + 1, y: Q.y + 1, w: Q.w - 2, h: Q.h - 2 })(7)(J(
          "Just",
          { color: B.bg, flat: !0 }
        ))(x))(() => o));
      }
      f();
    })(), O = (() => {
      if (A === "LabelsHidden")
        return e.pure();
      if (A === "LabelsShown")
        return v.tag === "Leaf" ? i(B)(Lf($.viewport)(T))(D)(C) : s(B)(D)(C)(v);
      f();
    })(), G = ob(w)((() => {
      const Q = T.segment.path.length - 1 | 0;
      return Q >= 0 && Q < T.segment.path.length ? J("Just", T.segment.path[Q]) : x;
    })());
    return r.bind(t.pushAlpha(T.bgAlpha))(() => r.bind((() => {
      const Q = t.pushBlur(T.blur * L.scale);
      return b ? Q : e.pure();
    })())(() => r.bind(t.pushClip(G)(Zs))(() => r.bind(w.role === "Active" || w.role === "FlyThrough" ? P : e.pure())(() => r.bind(t.pushTransform(E))(() => r.bind(u(B)(D)(C))(() => r.bind(c(A)(W)(B)(D)(C))(() => r.bind(a(B)(D)(C))(() => r.bind(l(B)(z)(D)(C))(() => r.bind(o)(() => r.bind(t.pushBakedTransform(E))(() => r.bind(d(Hw)(B)(D)(C))(() => r.bind(_)(() => r.bind(g)(() => r.bind(t.pushTransform(E))(() => r.bind(O)(() => r.bind(o)(() => r.bind(e_(t)(h)($)(y)(T))(() => r.bind(b ? p : e.pure())(() => m)))))))))))))))))));
  };
}, o_ = (t) => {
  const n = ZJ(t), e = t.Monad0(), r = e.Applicative0(), o = e.Bind1(), i = r_(t), s = ub(t), u = e_(t);
  return (c) => (a) => (l) => {
    if (c.theme === "Isometric")
      return n({ ...YJ, transparentBg: c.transparentBg })(c.theme)(Ds(l).segment.layout)(Ds(l).state);
    const d = Xi(c)(l), _ = (h) => l.hasDives ? d.vw / iu(1)(En(l.rootLayout).w) : 1, g = { tileScale: _(), viewport: d }, p = (h) => ($) => {
      if ($.length === 0)
        return r.pure();
      const y = zt((v) => x, (v) => (w) => J("Just", { head: v, tail: w }), $);
      if (y.tag === "Nothing")
        return r.pure();
      if (y.tag === "Just") {
        const v = y._1.head, w = y._1.tail;
        return o.bind((() => {
          const T = i(c)(g)(l.camera.zoom)(v.role === "Active" ? a : R)(h)(v);
          return l.diving || v.role === "Active" ? T : r.pure();
        })())(() => p(v)(w));
      }
      f();
    }, m = zt((h) => x, (h) => ($) => J("Just", { head: h, tail: $ }), l.levels);
    if (m.tag === "Nothing")
      return r.pure();
    if (m.tag === "Just") {
      const h = m._1.tail, $ = m._1.head;
      return o.bind((() => {
        const y = h.length === 0;
        return s(c)(_())($.role === "Active" || $.role === "FlyThrough" ? $.bgAlpha : 0)($.blur)(d)($.segment.layout)(rb(l).state)(y && a.tag !== "Leaf" ? n_("SpringLabels", a) : eb);
      })())(() => o.bind((() => {
        const y = u(c)(g)(l.camera.zoom)($);
        return $.role === "Active" || $.role === "FlyThrough" ? y : r.pure();
      })())(() => p($)(h)));
    }
    f();
  };
}, cb = /* @__PURE__ */ Jf(Gd), Jl = /* @__PURE__ */ o_(Gd), ab = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
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
    outputAspect: r.width <= 0 || r.height <= 0 ? x : J("Just", r.width / r.height)
  }, c = rT(e)(r);
  return () => {
    const a = c(), l = o.levels.length - 1 | 0;
    if (l >= 0 && l < o.levels.length) {
      const _ = cb(Lf(Xi(u)(o))(o.levels[l]))(o.levels[l].segment.layout)(o.levels[l].state)(a)(), g = Mc(i)(_)(s);
      return Jl(u)(g.applied)(o)(a)(), g.springs;
    }
    const d = Mc(i)(R)(s);
    return Jl(u)(d.applied)(o)(a)(), d.springs;
  };
}, i_ = (t) => t, Yi = (t) => t, bl = /* @__PURE__ */ Yi("Light"), fb = /* @__PURE__ */ Yi("Dark"), lb = /* @__PURE__ */ Yi("Blueprint"), gb = /* @__PURE__ */ Yi("Whiteboard"), db = /* @__PURE__ */ Yi("Isometric"), _b = /* @__PURE__ */ i_("PaintBackground"), hb = /* @__PURE__ */ i_("TransparentBackground"), Dr = (t) => "rgb(" + rn(t.r) + "," + rn(t.g) + "," + rn(t.b) + ")", Xe = /* @__PURE__ */ wg(/* @__PURE__ */ xg("Fixed", /* @__PURE__ */ Ng(0)(20)(4))), pb = (t) => "translate(" + Xe(t.tx) + "," + Xe(t.ty) + ") scale(" + Xe(t.sx) + "," + Xe(t.sy) + ")", Et = /* @__PURE__ */ wg(/* @__PURE__ */ xg("Fixed", /* @__PURE__ */ Ng(0)(20)(2))), Ef = (t) => {
  const n = [];
  let e = 0;
  for (; e < t.length; ) {
    const r = e, o = r >= 0 && r < t.length ? J("Just", t[r]) : x;
    if (o.tag === "Nothing") {
      e = t.length;
      continue;
    }
    if (o.tag === "Just") {
      if (o._1 === 1) {
        n.push("M"), n.push(Et((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Et((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 2) {
        n.push("L"), n.push(Et((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Et((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 3) {
        n.push("Q"), n.push(Et((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Et((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Et((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Et((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 5 | 0;
        continue;
      }
      if (o._1 === 4) {
        n.push("C"), n.push(Et((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Et((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Et((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Et((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Et((() => {
          const i = r + 5 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Et((() => {
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
  return ku(" ")(n);
}, mb = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, ua = /* @__PURE__ */ (() => {
  const t = Sr("&")("&amp;"), n = Sr("<")("&lt;"), e = (() => {
    const r = Sr(">")("&gt;"), o = (() => {
      const i = Sr('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), $b = (t) => {
  if (t.style === "RunText")
    return "<tspan>" + ua(t.text) + "</tspan>";
  if (t.style === "RunCode")
    return `<tspan font-family="'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="400">` + ua(t.text) + "</tspan>";
  f();
}, Dn = (t) => (n) => {
  const e = n.maskDepth;
  return () => {
    e.value === 0 && n.out.push(t);
  };
}, yb = (t) => (n) => {
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
    const i = r, s = i >= 0 && i < n.length ? J("Just", n[i]) : x;
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
}, ys = (t) => (n) => {
  const e = t.bake;
  return () => {
    const r = e.value;
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return yb(r._1)(n);
    f();
  };
}, s_ = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => mb
}, vb = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => s_
}, xb = { pure: (t) => (n) => () => t, Apply0: () => s_ }, Nb = { Applicative0: () => xb, Bind1: () => vb }, wb = (t) => (n) => '<defs><pattern id="' + t + '" x="' + Et(n.origin.x) + '" y="' + Et(n.origin.y) + '" width="' + Et(n.tile) + '" height="' + Et(n.tile) + '" patternUnits="userSpaceOnUse">' + (n.bgColor.a === 0 ? "" : '<rect width="' + Et(n.tile) + '" height="' + Et(n.tile) + '" fill="' + Dr(n.bgColor) + '" fill-opacity="' + Et(M(n.bgColor.a) / 255) + '"/>') + '<circle cx="' + Et(n.tile / 2) + '" cy="' + Et(n.tile / 2) + '" r="' + Et(n.dotRadius) + '" fill="' + Dr(n.dotColor) + '"/></pattern></defs><rect x="' + Et(n.viewport.vx) + '" y="' + Et(n.viewport.vy) + '" width="' + Et(n.viewport.vw) + '" height="' + Et(n.viewport.vh) + '" fill="url(#' + t + ')"/>', kl = (t) => (n) => '<path d="' + Ef(t) + '" fill="' + Dr(n) + '" fill-opacity="' + Et(M(n.a) / 255) + '"/>', Tb = (t) => (n) => (e) => (r) => '<rect x="' + Et(t.x) + '" y="' + Et(t.y) + '" width="' + Et(t.w) + '" height="' + Et(t.h) + '" rx="' + Et(n) + '"' + (() => {
  if (e.tag === "Just")
    return ' fill="' + Dr(e._1.color) + '" fill-opacity="' + Et(M(e._1.color.a) / 255) + '"';
  if (e.tag === "Nothing")
    return ' fill="none"';
  f();
})() + (() => {
  if (r.tag === "Just")
    return ' stroke="' + Dr(r._1.color) + '" stroke-opacity="' + Et(M(r._1.color.a) / 255) + '" stroke-width="' + Et(r._1.width) + '" stroke-linejoin="' + (() => {
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
})() + "/>", Ll = (t) => (n) => '<path d="' + Ef(t) + '" fill="none" stroke="' + Dr(n.color) + '" stroke-opacity="' + Et(M(n.color.a) / 255) + '" stroke-width="' + Et(n.width) + '" stroke-linejoin="' + (() => {
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
})() + '"/>', El = (t) => {
  const n = N1(Qo(t.content));
  return '<text x="' + Et(t.x) + '" y="' + Et(t.y) + '"' + (() => {
    if (t.baseline === "BaselineTop")
      return ' dy="0.8em"';
    if (t.baseline === "BaselineMiddle")
      return ' dy="0.32em"';
    if (t.baseline === "BaselineAlphabetic" || t.baseline === "BaselineBottom")
      return "";
    f();
  })() + ' fill="' + Dr(t.color) + '" fill-opacity="' + Et(M(t.color.a) / 255) + '" font-size="' + Et(t.font.size) + '" font-family="Ilisarniq, ui-sans-serif, system-ui, sans-serif" font-weight="' + rn(t.font.weight) + '" text-anchor="' + (() => {
    if (t.align === "AlignLeft")
      return "start";
    if (t.align === "AlignCenter")
      return "middle";
    if (t.align === "AlignRight")
      return "end";
    f();
  })() + '">' + (n.length === 1 && n[0].style === "RunText" ? ua(n[0].text) : ku("")(H($b)(n))) + "</text>";
}, Jb = (t) => "matrix(" + Xe(t.a) + " " + Xe(t.b) + " " + Xe(t.c) + " " + Xe(t.d) + " " + Xe(t.e) + " " + Xe(t.f) + ")", u_ = {
  fillPath: (t) => (n) => (e) => {
    const r = ys(e)(t);
    return () => {
      const o = r();
      return Dn(kl(o)(n.color))(e)();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = ys(e)(t);
    return () => {
      const o = r(), i = e.bake.value;
      return Dn(Ll(o)((() => {
        if (i.tag === "Nothing")
          return n;
        if (i.tag === "Just")
          return { ...n, width: i._1.sx * n.width };
        f();
      })()))(e)();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = ys(r)(t);
    return () => {
      const i = o(), s = r.bake.value;
      return Dn(kl(i)(n.color) + Ll(i)((() => {
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
      return Dn(Tb((() => {
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
      })())(e)(r.tag === "Just" ? J(
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
      return Dn(El((() => {
        if (r.tag === "Nothing")
          return t;
        if (r.tag === "Just")
          return { ...t, x: r._1.sx * t.x + r._1.tx, y: r._1.sy * t.y + r._1.ty, font: { ...t.font, size: r._1.sx * t.font.size } };
        f();
      })()))(n)();
    };
  },
  drawTextAffine: (t) => (n) => Dn((() => {
    const e = 'transform="' + Jb(t) + '"';
    return (e === "" ? "<g>" : "<g " + e + ">") + El(n) + "</g>";
  })()),
  pushTransform: (t) => Dn((() => {
    const n = 'transform="' + pb(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popTransform: /* @__PURE__ */ Dn("</g>"),
  pushBakedTransform: (t) => (n) => {
    const e = n.bake;
    return () => {
      e.value = J("Just", t);
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
      const i = ys(e)(t)(), s = "clip" + rn(o);
      return Dn((() => {
        const u = 'clip-path="url(#' + s + ')"';
        return '<defs><clipPath id="' + s + '"><path d="' + Ef(i) + '"' + (() => {
          if (n === "EvenOdd")
            return ' clip-rule="evenodd"';
          if (n === "NonZero")
            return "";
          f();
        })() + "/></clipPath></defs>" + (u === "" ? "<g>" : "<g " + u + ">");
      })())(e)();
    };
  },
  popClip: /* @__PURE__ */ Dn("</g>"),
  pushBlend: (t) => Dn((() => {
    const n = (() => {
      if (t === "Normal")
        return 'style="mix-blend-mode: normal"';
      if (t === "Difference")
        return 'style="mix-blend-mode: difference"';
      f();
    })();
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popBlend: /* @__PURE__ */ Dn("</g>"),
  pushAlpha: (t) => Dn((() => {
    const n = 'opacity="' + Et(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popAlpha: /* @__PURE__ */ Dn("</g>"),
  pushBlur: (t) => (n) => {
    if (t < 0.01)
      return Dn("<g>")(n);
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      n.patternCounter.value = r + 1 | 0;
      const o = "lvl-blur-" + rn(r);
      return Dn((() => {
        const i = 'filter="url(#' + o + ')"';
        return '<defs><filter id="' + o + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="' + Et(t) + '"/></filter></defs>' + (i === "" ? "<g>" : "<g " + i + ">");
      })())(n)();
    };
  },
  popBlur: /* @__PURE__ */ Dn("</g>"),
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
  clearBackground: (t) => (n) => Dn('<rect x="' + Et(n.viewport.vx) + '" y="' + Et(n.viewport.vy) + '" width="' + Et(n.viewport.vw) + '" height="' + Et(n.viewport.vh) + '" fill="' + Dr(t) + '" opacity="' + Et(M(t.a) / 255) + '"/>')(n),
  backgroundDots: (t) => (n) => {
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      return n.patternCounter.value = r + 1 | 0, Dn(wb("bg-dots-" + rn(r))(t))(n)();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = _d(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = hd(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => wd,
  Monad0: () => Nb
}, bb = /* @__PURE__ */ o_(u_), kb = /* @__PURE__ */ Jf(u_), Lb = (t) => (n) => (e) => (r) => (o) => {
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
  }, s = Xi(i)(o);
  return {
    viewBox: Et(s.vx) + " " + Et(s.vy) + " " + Et(s.vw) + " " + Et(s.vh),
    body: (() => {
      const u = [], c = { value: 0 }, a = { value: 0 }, l = { value: 0 }, d = { value: x };
      return bb(i)(n)(o)({ out: u, maskDepth: c, clipCounter: a, patternCounter: l, viewport: s, bake: d })(), ku("")(u);
    })(),
    vx: s.vx,
    vy: s.vy,
    vw: s.vw,
    vh: s.vh
  };
}, Eb = (t) => (n) => (e) => (r) => (o) => (i) => {
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
  }, u = Mc(o)((() => {
    const c = [], a = { value: 0 }, l = { value: 0 }, d = { value: 0 }, _ = { value: x }, g = r.levels.length - 1 | 0;
    if (g >= 0 && g < r.levels.length) {
      const p = Lf(Xi(s)(r))(r.levels[g]);
      return kb(p)(r.levels[g].segment.layout)(r.levels[g].state)({
        out: c,
        maskDepth: a,
        clipCounter: l,
        patternCounter: d,
        viewport: p,
        bake: _
      })();
    }
    return R;
  })())(i);
  return { parts: Lb(t)(u.applied)(n)(e)(r), springs: u.springs };
}, Ui = (t) => ({ bind: (n) => (e) => (r) => t.Bind1().bind(n(r))((o) => e(o._1)(o._2)), Apply0: () => c_(t) }), c_ = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = { map: (r) => (o) => (i) => n.map((s) => k(r(s._1), s._2))(o(i)) };
  return {
    apply: (() => {
      const r = Ui(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => Vi(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, Vi = (t) => ({ pure: (n) => (e) => t.Applicative0().pure(k(n, e)), Apply0: () => c_(t) }), Sb = (t) => {
  const n = { Applicative0: () => Vi(t), Bind1: () => Ui(t) };
  return { state: (e) => (r) => t.Applicative0().pure(e(r)), Monad0: () => n };
}, Ki = (t, n) => ({ tag: t, _1: n }), Sf = (t) => t, rr = (t, n) => ({ tag: t, _1: n }), xn = /* @__PURE__ */ Sb(yr), Qt = /* @__PURE__ */ Ui(yr), qn = xn.state((t) => k(t, t)), ln = /* @__PURE__ */ Vi(yr), a_ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, f_ = /* @__PURE__ */ Bi(ln), Wu = /* @__PURE__ */ f_(Xt), Ue = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, l_ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Cb = /* @__PURE__ */ (() => {
  const t = ue.unfoldr((n) => {
    if (n.tag === "Nil")
      return x;
    if (n.tag === "Cons")
      return J("Just", k(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, tn("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, nn);
  })());
})(), Ae = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, Ab = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
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
}, Ou = (t) => (n) => (e) => N((r) => (o) => t.Bind1().bind(r)((i) => n(i)(o)))(t.Applicative0().pure(e)), Pb = /* @__PURE__ */ N((t) => (n) => K(I)(n)()(t))(R), Gb = /* @__PURE__ */ (() => {
  const n = ((e) => (r) => {
    let o = e, i = r, s = !0, u;
    for (; s; ) {
      const c = o, a = i;
      if (a.tag === "Nil") {
        s = !1, u = c;
        continue;
      }
      if (a.tag === "Cons") {
        o = K(I)(a._1)()(c), i = a._2;
        continue;
      }
      f();
    }
    return u;
  })(R);
  return (e) => n((() => {
    const r = (o, i) => {
      if (o.tag === "Leaf")
        return i;
      if (o.tag === "Node")
        return r(o._5, tn("Cons", o._3, r(o._6, i)));
      f();
    };
    return r(e, nn);
  })());
})(), Ib = /* @__PURE__ */ f_(ha), Fb = /* @__PURE__ */ rr("Exit"), Rb = /* @__PURE__ */ Sf("AnimatedKeyframe"), Bb = /* @__PURE__ */ Sf("Still"), zb = /* @__PURE__ */ Sf("Title"), Db = (t) => Ki("Par", t), g_ = (t) => Ki("Seq", t), Qb = { line: 0, column: 0, endLine: 0, endColumn: 0 }, Hb = (t) => (n) => (e) => {
  const r = uo(Ut, x, (o) => o._1 === t, e);
  if (r.tag === "Just") {
    const o = Rr(Ut, x, r._1, k(t, n), e);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return o._1;
    f();
  }
  if (r.tag === "Nothing")
    return Ft(e)(k(t, n));
  f();
}, Wb = (t) => (n) => H((e) => e._1 === t ? k(e._1, { ...e._2, label: J("Just", n) }) : k(e._1, e._2)), Ob = (t) => {
  const n = t.span;
  return xn.state((e) => k(void 0, { ...e, currentSpan: n }));
}, qu = {
  graphNodes: [],
  graphEdges: R,
  currNodes: R,
  currEdges: R,
  keyframes: [],
  scenes: [],
  kfCounter: 0,
  eventCounter: 0,
  currentKf: x,
  currentSpan: Qb,
  error: x,
  enterStack: [],
  interiorOf: R
}, ze = (t) => xn.state((n) => k(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return {
        ...n,
        error: J("Just", { msg: t, line: n.currentSpan.line, column: n.currentSpan.column, endLine: n.currentSpan.endLine, endColumn: n.currentSpan.endColumn })
      };
    f();
  })()
)), qb = /* @__PURE__ */ Wu((t) => Qt.bind(qn)((n) => {
  if (n.error.tag === "Just")
    return ln.pure();
  if (n.error.tag === "Nothing")
    return a_(t.node)(n.interiorOf) ? ze("node " + t.node + " has more than one `inside` block") : xn.state((e) => k(void 0, { ...e, interiorOf: K(I)(t.node)(t.doc)(e.interiorOf) }));
  f();
})), Xb = (t) => Qt.bind(qn)((n) => {
  const e = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + rn(n.kfCounter);
  if (ge((o) => o.id === e, n.keyframes))
    return ze("duplicate frame name " + e);
  const r = {
    ...n,
    keyframes: Ft(n.keyframes)({ id: e, nodes: n.currNodes, edges: n.currEdges, kind: Wi }),
    kfCounter: n.kfCounter + 1 | 0,
    currentKf: J("Just", e)
  };
  return xn.state((o) => k(void 0, r));
}), oe = (t) => (n) => Qt.bind(xn.state((e) => k(void 0, { ...e, currentSpan: t })))(() => ze(n)), Yb = (t) => Qt.bind((() => {
  const n = t.span;
  return xn.state((e) => k(void 0, { ...e, currentSpan: n }));
})())(() => Qt.bind(qn)((n) => {
  if (n.error.tag === "Just")
    return ln.pure();
  if (n.error.tag === "Nothing") {
    if (t.op.tag === "Enter") {
      if (!Ue(t.op._1.id)(n.currNodes))
        return oe(0 < t.operands.length ? t.operands[0] : t.span)("cannot dive into node " + t.op._1.id + ": does not exist");
      if (!a_(t.op._1.id)(n.interiorOf))
        return oe(0 < t.operands.length ? t.operands[0] : t.span)("cannot dive into node " + t.op._1.id + ": it has no `inside` block");
      if (ae(Pe)(t.op._1.id)(n.enterStack))
        return oe(0 < t.operands.length ? t.operands[0] : t.span)("cannot dive into node " + t.op._1.id + ": already active");
      const e = t.op._1;
      return xn.state((r) => k(
        void 0,
        { ...r, enterStack: Ft(r.enterStack)(e.id), scenes: Ft(r.scenes)(Hi("EnterNode", e.id)) }
      ));
    }
    if (t.op.tag === "Exit") {
      const e = Ge(n.enterStack);
      if (e.tag === "Nothing")
        return ze("`out` without a matching `into`");
      if (e.tag === "Just") {
        const r = e._1.init;
        return xn.state((o) => k(void 0, { ...o, enterStack: r, scenes: Ft(o.scenes)(om) }));
      }
      f();
    }
    return ln.pure();
  }
  f();
})), Ub = Qt.bind(qn)((t) => {
  if (t.error.tag === "Just")
    return ln.pure();
  if (t.error.tag === "Nothing") {
    if (t.currentKf.tag === "Just") {
      const n = t.currentKf._1;
      return xn.state((e) => k(void 0, { ...e, scenes: Ft(e.scenes)(Hi("Hold", n)) }));
    }
    if (t.currentKf.tag === "Nothing")
      return ln.pure();
  }
  f();
}), Vb = (t) => (n) => Qt.bind(qn)((e) => {
  const r = "ev-" + rn(e.eventCounter);
  return Qt.bind((() => {
    const o = { ...e, eventCounter: e.eventCounter + 1 | 0 };
    return xn.state((i) => k(void 0, o));
  })())(() => ln.pure({ events: [{ id: r, kind: n, when: t }], firstId: J("Just", r), lastId: J("Just", r) }));
}), Kb = (t) => (n) => 0 < t.length ? Qt.bind((() => {
  const e = t[0].span;
  return xn.state((r) => k(void 0, { ...r, currentSpan: e }));
})())(() => ze(n)) : ze(n), Mb = (t) => vt((n) => l_(n)(t.graphEdges))(Dt(Po, Cb(t.currEdges))), jb = (t) => (n) => {
  const e = lt((o) => o.from.node === n.id || o.to.node === n.id, Mb(t)), r = Ou(ug)((o) => (i) => {
    const s = i.from + "->" + n.id, u = n.id + "->" + i.to, c = i.from + "->" + i.to, a = "via " + i.from + " " + i.to + ": no edge " + i.from + "→" + n.id;
    if (!Ae(s)(t.currEdges))
      return St("Left", a);
    const l = "via " + i.from + " " + i.to + ": no edge " + n.id + "→" + i.to;
    if (!Ae(u)(t.currEdges))
      return St("Left", l);
    const d = "via " + i.from + " " + i.to + ": would create " + i.from + "→" + i.to + " but it already exists";
    return Ae(c)(t.currEdges) || Ab(c)(o.synthesized) ? St("Left", d) : St(
      "Right",
      {
        consumed: K(I)(s)()(K(I)(u)()(o.consumed)),
        synthesized: K(I)(c)({
          id: c,
          from: { node: i.from, port: x },
          to: { node: i.to, port: x },
          label: x
        })(o.synthesized)
      }
    );
  })({ consumed: R, synthesized: R })(n.via);
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
    const i = o.consumed, s = lt((u) => !Ae(u.id)(i), e);
    return s.length === 0 ? St(
      "Right",
      {
        nextCurrEdges: Yn(
          I.compare,
          Xn,
          gr(I.compare, t.currEdges, Pb(H((u) => u.id)(e))),
          Gb((() => {
            const u = (c) => {
              if (c.tag === "Leaf")
                return R;
              if (c.tag === "Node")
                return Kt("Node", c._1, c._2, c._3, void 0, u(c._5), u(c._6));
              f();
            };
            return u(o.synthesized);
          })())
        ),
        synthesized: o.synthesized
      }
    ) : St(
      "Left",
      "cannot delete node " + n.id + ": still connected (" + ku(", ")(H((u) => (() => {
        const c = _o("conn:")(u.id);
        if (c.tag === "Just")
          return !1;
        if (c.tag === "Nothing")
          return !0;
        f();
      })() ? u.from.node + "→" + u.to.node : u.from.node + "--" + u.to.node)(s)) + "). Use `- a -> b` or `- a -- b` to drop them, or `via a b` to merge " + n.id + "'s endpoints."
    );
  });
}, d_ = (t) => (n) => (e) => {
  if (t) {
    if (n) {
      const i = 0 < e.operands.length ? e.operands[0] : e.span, s = 1 < e.operands.length ? e.operands[1] : e.span;
      return { line: i.line, column: i.column, endLine: s.endLine, endColumn: s.endColumn };
    }
    return 0 < e.operands.length ? e.operands[0] : e.span;
  }
  if (n)
    return 1 < e.operands.length ? e.operands[1] : e.span;
  const r = 0 < e.operands.length ? e.operands[0] : e.span, o = 1 < e.operands.length ? e.operands[1] : e.span;
  return { line: r.line, column: r.column, endLine: o.endLine, endColumn: o.endColumn };
}, su = (t) => {
  if (t.tag === "Leaf")
    return [t._1];
  if (t.tag === "Par" || t.tag === "Seq")
    return xt(t._1)(su);
  f();
}, Zb = Qt.bind(qn)((t) => {
  if (t.error.tag === "Just")
    return ln.pure();
  if (t.error.tag === "Nothing") {
    const n = t.enterStack.length - 1 | 0;
    return n >= 0 && n < t.enterStack.length ? ze("entered node " + t.enterStack[n] + " was never exited") : ln.pure();
  }
  f();
}), t3 = (t) => ({
  nodes: H(gu)(t.graphNodes),
  edges: (() => {
    const n = (e, r) => {
      if (e.tag === "Leaf")
        return r;
      if (e.tag === "Node")
        return n(e._5, tn("Cons", e._4, n(e._6, r)));
      f();
    };
    return Dt(on.foldr, n(t.graphEdges, nn));
  })(),
  constraints: []
}), n3 = (t) => (n) => Qt.bind(qn)((e) => {
  const r = n.from + "->" + n.to, o = n.newFrom + "->" + n.newTo;
  return Ae(r)(e.currEdges) ? Ue(n.newFrom)(e.currNodes) ? Ue(n.newTo)(e.currNodes) ? r !== o && Ae(o)(e.currEdges) ? oe((() => {
    const i = 2 < t.operands.length ? t.operands[2] : t.span, s = 3 < t.operands.length ? t.operands[3] : t.span;
    return { line: i.line, column: i.column, endLine: s.endLine, endColumn: s.endColumn };
  })())("cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": target edge already exists") : xn.state((i) => k(
    void 0,
    {
      ...i,
      currEdges: K(I)(o)()($i(I)(r)(i.currEdges)),
      graphEdges: K(I)(o)({
        id: o,
        from: { node: n.newFrom, port: x },
        to: { node: n.newTo, port: x },
        label: x
      })(i.graphEdges)
    }
  )) : oe(3 < t.operands.length ? t.operands[3] : t.span)("cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newTo) : oe(2 < t.operands.length ? t.operands[2] : t.span)("cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newFrom) : oe((() => {
    const i = 0 < t.operands.length ? t.operands[0] : t.span, s = 1 < t.operands.length ? t.operands[1] : t.span;
    return { line: i.line, column: i.column, endLine: s.endLine, endColumn: s.endColumn };
  })())("cannot repoint " + n.from + "→" + n.to + ": edge does not exist");
}), e3 = (t) => {
  if (t.op.tag === "AddNode") {
    const n = t.op._1;
    return Qt.bind(qn)((e) => Ue(n.id)(e.currNodes) ? oe(0 < t.operands.length ? t.operands[0] : t.span)("cannot add node " + n.id + ": already exists") : xn.state((r) => k(
      void 0,
      {
        ...r,
        graphNodes: Hb(n.id)({ id: n.id, size: k(1, 1), ports: [], label: J("Just", n.label), shape: n.shape })(r.graphNodes),
        currNodes: K(I)(n.id)()(r.currNodes)
      }
    )));
  }
  if (t.op.tag === "DelNode") {
    const n = t.op._1;
    return Qt.bind(qn)((e) => {
      if (!Ue(n.id)(e.currNodes))
        return oe(0 < t.operands.length ? t.operands[0] : t.span)("cannot delete node " + n.id + ": does not exist");
      const r = jb(e)(n);
      if (r.tag === "Left")
        return oe(0 < t.operands.length ? t.operands[0] : t.span)(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return xn.state((i) => k(
          void 0,
          {
            ...i,
            currNodes: $i(I)(n.id)(i.currNodes),
            currEdges: o.nextCurrEdges,
            graphEdges: Yn(I.compare, Xn, o.synthesized, i.graphEdges)
          }
        ));
      }
      f();
    });
  }
  if (t.op.tag === "ModNode") {
    const n = t.op._1;
    return Qt.bind(qn)((e) => {
      if (!Ue(n.id)(e.currNodes))
        return oe(0 < t.operands.length ? t.operands[0] : t.span)("cannot modify node " + n.id + ": does not exist");
      if (n.label.tag === "Just") {
        const r = n.label._1;
        return xn.state((o) => k(void 0, { ...o, graphNodes: Wb(n.id)(r)(o.graphNodes) }));
      }
      if (n.label.tag === "Nothing")
        return ln.pure();
      f();
    });
  }
  if (t.op.tag === "AddEdge") {
    const n = t.op._1;
    return Qt.bind(qn)((e) => {
      const r = !Ue(n.from)(e.currNodes), o = !Ue(n.to)(e.currNodes);
      if (r || o)
        return oe(d_(r)(o)(t))((n.directed ? "cannot add edge " : "cannot add connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": unknown node " + (r ? o ? n.from + ", " + n.to : n.from : o ? n.to : ""));
      const i = n.directed ? n.from + "->" + n.to : n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
      return Ae(i)(e.currEdges) ? oe((() => {
        const s = 0 < t.operands.length ? t.operands[0] : t.span, u = 1 < t.operands.length ? t.operands[1] : t.span;
        return { line: s.line, column: s.column, endLine: u.endLine, endColumn: u.endColumn };
      })())((n.directed ? "cannot add edge " : "cannot add connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": already exists") : xn.state((s) => k(
        void 0,
        {
          ...s,
          graphEdges: K(I)(i)({
            id: i,
            from: { node: n.from, port: x },
            to: { node: n.to, port: x },
            label: n.label
          })(s.graphEdges),
          currEdges: K(I)(i)()(s.currEdges)
        }
      ));
    });
  }
  if (t.op.tag === "DelEdge") {
    const n = t.op._1;
    return Qt.bind(qn)((e) => {
      const r = n.directed ? n.from + "->" + n.to : n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
      return Ae(r)(e.currEdges) ? xn.state((o) => k(void 0, { ...o, currEdges: $i(I)(r)(o.currEdges) })) : oe((() => {
        const o = 0 < t.operands.length ? t.operands[0] : t.span, i = 1 < t.operands.length ? t.operands[1] : t.span;
        return { line: o.line, column: o.column, endLine: i.endLine, endColumn: i.endColumn };
      })())((n.directed ? "cannot delete edge " : "cannot delete connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": does not exist");
    });
  }
  return t.op.tag === "RepointEdge" ? n3(t)(t.op._1) : ln.pure();
}, r3 = (t) => Qt.bind((() => {
  const n = t.span;
  return xn.state((e) => k(void 0, { ...e, currentSpan: n }));
})())(() => e3(t)), __ = (t) => (n) => (e) => Qt.bind(Wu(r3)(e))(() => Qt.bind(qn)((r) => {
  const o = n.tag === "Just" && n._1 !== "" ? n._1 : "kf-" + rn(r.kfCounter);
  if (ge((s) => s.id === o, r.keyframes))
    return Qt.bind(Ib(Ob)(0 < e.length ? J("Just", e[0]) : x))(() => ze("duplicate frame name " + o));
  const i = {
    ...r,
    keyframes: Ft(r.keyframes)({ id: o, nodes: r.currNodes, edges: r.currEdges, kind: t }),
    kfCounter: r.kfCounter + 1 | 0,
    currentKf: J("Just", o),
    scenes: (() => {
      if (r.currentKf.tag === "Nothing")
        return r.scenes;
      if (r.currentKf.tag === "Just")
        return Ft(r.scenes)(Hi("Structural", { from: r.currentKf._1, to: o, focus: x }));
      f();
    })()
  };
  return xn.state((s) => k(void 0, i));
})), Sl = (t) => (n) => {
  const e = su(n.ops), r = lt(
    (i) => i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge",
    e
  ), o = lt(
    (i) => !(i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge"),
    e
  );
  return 0 < o.length ? Qt.bind((() => {
    const i = o[0].span;
    return xn.state((s) => k(void 0, { ...s, currentSpan: i }));
  })())(() => ze("still/title blocks hold a static snapshot; they cannot contain movement tokens (`api ~> db`) or dive commands (`into`/`out`)")) : t === "TitleCard" && r.length === 0 ? ze(n.name.tag === "Just" && n.name._1 !== "" ? 'title "' + n.name._1 + '" has an empty body; give it nodes/edges to title, or use a still' : "title has an empty body; give it nodes/edges to title, or use a still") : Qt.bind(__(t)(n.name)(r))(() => Ub);
}, o3 = (t) => (n) => {
  const e = n.to + "->" + n.from, r = n.from + "->" + n.to, o = n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
  if (Ae(r)(t.currEdges))
    return J("Just", { id: r, direction: a0 });
  if (Ae(e)(t.currEdges))
    return J("Just", { id: e, direction: f0 });
  const i = l_(o)(t.graphEdges);
  if (i.tag === "Just")
    return Ae(o)(t.currEdges) ? J(
      "Just",
      { id: o, direction: i._1.from.node === n.from && i._1.to.node === n.to ? a0 : f0 }
    ) : x;
  if (i.tag === "Nothing")
    return x;
  f();
}, i3 = (t) => (n) => {
  if (n.op.tag === "Token") {
    const e = n.op._1;
    return Qt.bind(qn)((r) => {
      const o = !Ue(e.from)(r.currNodes), i = !Ue(e.to)(r.currNodes);
      if (o || i)
        return Qt.bind(oe(d_(o)(i)(n))(o ? i ? "token references unknown node: " + e.from + ", " + e.to : "token references unknown node: " + e.from : i ? "token references unknown node: " + e.to : "token references unknown node: "))(() => ln.pure({ events: [], firstId: x, lastId: x }));
      const s = o3(r)(e);
      if (s.tag === "Just")
        return Vb(t)(tm("SendToken", { from: e.from, to: e.to, edge: s._1.id, direction: s._1.direction, labels: e.labels }));
      if (s.tag === "Nothing")
        return Qt.bind(oe((() => {
          const u = 0 < n.operands.length ? n.operands[0] : n.span, c = 1 < n.operands.length ? n.operands[1] : n.span;
          return { line: u.line, column: u.column, endLine: c.endLine, endColumn: c.endColumn };
        })())("token " + e.from + "→" + e.to + ": no edge between " + e.from + " and " + e.to))(() => ln.pure({
          events: [],
          firstId: x,
          lastId: x
        }));
      f();
    });
  }
  return ln.pure({ events: [], firstId: x, lastId: x });
}, s3 = (t) => (n) => {
  const e = zt((r) => x, (r) => (o) => J("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return ln.pure({ events: [], firstId: x, lastId: x });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Qt.bind(Fi(t)(e._1.head))((o) => Qt.bind(Ou({
      Applicative0: () => Vi(yr),
      Bind1: () => Ui(yr)
    })((i) => (s) => Qt.bind(Fi((() => {
      if (i.lastId.tag === "Just")
        return Xa("After", i.lastId._1);
      if (i.lastId.tag === "Nothing")
        return t;
      f();
    })())(s))((u) => ln.pure({
      events: [...i.events, ...u.events],
      firstId: (() => {
        if (i.firstId.tag === "Just")
          return J("Just", i.firstId._1);
        if (i.firstId.tag === "Nothing")
          return u.firstId;
        f();
      })(),
      lastId: (() => {
        if (u.lastId.tag === "Just")
          return J("Just", u.lastId._1);
        if (u.lastId.tag === "Nothing")
          return i.lastId;
        f();
      })()
    })))(o)(r))((i) => ln.pure(i)));
  }
  f();
}, u3 = (t) => (n) => {
  const e = zt((r) => x, (r) => (o) => J("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return ln.pure({ events: [], firstId: x, lastId: x });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Qt.bind(Fi(t)(e._1.head))((o) => Qt.bind(c3((() => {
      if (o.firstId.tag === "Just")
        return Xa("With", o.firstId._1);
      if (o.firstId.tag === "Nothing")
        return t;
      f();
    })())(r))((i) => ln.pure({
      events: [...o.events, ...i.events],
      firstId: o.firstId,
      lastId: (() => {
        if (o.lastId.tag === "Just")
          return J("Just", o.lastId._1);
        if (o.lastId.tag === "Nothing")
          return i.lastId;
        f();
      })()
    })));
  }
  f();
}, Fi = (t) => (n) => {
  if (n.tag === "Leaf") {
    const e = n._1;
    return Qt.bind((() => {
      const r = e.span;
      return xn.state((o) => k(void 0, { ...o, currentSpan: r }));
    })())(() => i3(t)(e));
  }
  if (n.tag === "Seq")
    return s3(t)(n._1);
  if (n.tag === "Par")
    return u3(t)(n._1);
  f();
}, c3 = (t) => Ou({
  Applicative0: () => Vi(yr),
  Bind1: () => Ui(yr)
})((n) => (e) => Qt.bind(Fi(t)(e))((r) => ln.pure({
  events: [...n.events, ...r.events],
  firstId: (() => {
    if (n.firstId.tag === "Just")
      return J("Just", n.firstId._1);
    if (n.firstId.tag === "Nothing")
      return r.firstId;
    f();
  })(),
  lastId: (() => {
    if (r.lastId.tag === "Just")
      return J("Just", r.lastId._1);
    if (r.lastId.tag === "Nothing")
      return n.lastId;
    f();
  })()
})))({ events: [], firstId: x, lastId: x }), a3 = (t) => Qt.bind(qn)((n) => {
  if (n.currentKf.tag === "Nothing")
    return ze("flow ops before any structural frame");
  if (n.currentKf.tag === "Just") {
    const e = n.currentKf._1;
    return Qt.bind(Fi(rm)(t))((r) => Qt.bind(qn)((o) => {
      const i = { ...o, scenes: Ft(o.scenes)(Hi("DataFlow", { keyframe: e, events: r.events, focus: x })) };
      return xn.state((s) => k(void 0, i));
    }));
  }
  f();
}), f3 = (t) => {
  const n = su(t.ops), e = lt(
    (i) => i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge",
    n
  ), r = lt((i) => i.op.tag === "Enter" || i.op.tag === "Exit", n), o = lt(
    (i) => !(i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge") && !(i.op.tag === "Enter" || i.op.tag === "Exit"),
    n
  );
  return r.length !== 0 && o.length !== 0 ? Kb(r)("`into`/`out` cannot be mixed with flow tokens in the same frame") : Qt.bind((() => {
    const i = __(Wi)(t.name)(e);
    return e.length !== 0 ? i : ln.pure();
  })())(() => Qt.bind((() => {
    const i = Xb(t.name);
    return e.length === 0 && o.length !== 0 ? i : ln.pure();
  })())(() => Qt.bind((() => {
    const i = a3(t.ops);
    return o.length !== 0 ? i : ln.pure();
  })())(() => Wu(Yb)(r))));
}, l3 = (t) => Qt.bind(qn)((n) => {
  if (n.error.tag === "Just")
    return ln.pure();
  if (n.error.tag === "Nothing") {
    if (t.kind === "AnimatedKeyframe")
      return f3(t);
    if (t.kind === "Still")
      return Sl(nm)(t);
    if (t.kind === "Title")
      return Sl(em)(t);
  }
  f();
}), Xu = (t) => Qt.bind(qb(t.interiors))(() => Qt.bind(Wu(l3)(t.frames))(() => Qt.bind(Zb)(() => Qt.bind(qn)((n) => {
  if (n.error.tag === "Just")
    return ln.pure(St("Left", n.error._1));
  if (n.error.tag === "Nothing") {
    const e = g3(t.interiors);
    if (e.tag === "Left")
      return ln.pure(St("Left", e._1));
    if (e.tag === "Right")
      return ln.pure(St("Right", { seed: t.seed, graph: t3(n), keyframes: n.keyframes, scenes: n.scenes, interiors: e._1 }));
  }
  f();
})))), g3 = (t) => {
  const n = Ou(ug)((e) => (r) => {
    const o = Xu(r.doc)(qu)._1;
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
    })()((i) => St("Right", K(I)(r.node)(i)(e)));
  })(R)(t);
  if (n.tag === "Left")
    return St("Left", n._1);
  if (n.tag === "Right")
    return St("Right", n._1);
  f();
}, Fr = (t, n) => ({ tag: "ParseError", _1: t, _2: n }), S = (t, n, e) => ({ tag: "ParseState", _1: t, _2: n, _3: e }), uu = (t, n, e) => ({ tag: t, _1: n, _2: e }), d3 = (t) => uu("More", t), _3 = (t) => uu("Lift", t), h3 = {
  defer: (t) => {
    const n = Lp(t);
    return (e, r, o, i, s) => Ep(n)(e, r, o, i, s);
  }
}, h_ = { map: (t) => (n) => (e, r, o, i, s) => r((u) => n(e, r, o, i, (c, a) => r((l) => s(c, t(a))))) }, p3 = {
  alt: (t) => (n) => (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((a) => t(
      S(u, c, !1),
      r,
      o,
      (l, d) => {
        const _ = l._3;
        return r((g) => _ ? i(l, d) : n(e, r, o, i, s));
      },
      s
    ));
  },
  Functor0: () => h_
}, m3 = (t) => {
  const n = t.Monad0();
  return (e) => (r) => {
    const o = (i) => {
      let s = i, u = !0, c;
      for (; u; ) {
        const l = s();
        if (l.tag === "More") {
          s = l._1;
          continue;
        }
        if (l.tag === "Lift") {
          u = !1, c = n.Bind1().Apply0().Functor0().map(ag)(l._1);
          continue;
        }
        if (l.tag === "Stop") {
          u = !1, c = n.Applicative0().pure(di("Done", k(l._2, l._1)));
          continue;
        }
        f();
      }
      return c;
    };
    return t.tailRecM(o)((i) => r(
      e,
      d3,
      _3,
      (s, u) => uu("Stop", s, St("Left", u)),
      (s, u) => uu("Stop", s, St("Right", u))
    ));
  };
}, lo = (t, n, e, r, o) => o(t, t._2), $3 = { index: 0, line: 1, column: 1 }, y3 = (t) => {
  const n = m3(t);
  return (e) => (r) => t.Monad0().Bind1().Apply0().Functor0().map(du)(n(S(e, $3, !1))(r));
}, v3 = /* @__PURE__ */ y3(ch), Yu = (t, n, e, r, o) => o(S(t._1, t._2, !0), void 0), p_ = {
  apply: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, a) => r((l) => {
      const d = e._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return n(d, r, o, i, (_, g) => r((p) => s(d._3 && !_._3 ? S(_._1, _._2, !0) : _, a(g))));
    })
  )),
  Functor0: () => h_
}, m_ = { pure: (t) => (n, e, r, o, i) => i(n, t), Apply0: () => p_ }, x3 = {
  bind: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, a) => r((l) => n(a)(e._3 && !c._3 ? S(c._1, c._2, !0) : c, r, o, i, s))
  )),
  Apply0: () => p_
}, N3 = { Applicative0: () => m_, Bind1: () => x3 }, Uu = (t) => (n, e, r, o, i) => e((s) => lo(
  n,
  e,
  r,
  o,
  (u, c) => e((a) => o(n._3 && !u._3 ? S(u._1, u._2, !0) : u, Fr(t, c)))
)), w3 = { empty: /* @__PURE__ */ Uu("No alternative"), Alt0: () => p3 }, T3 = { Applicative0: () => m_, Plus1: () => w3 }, J3 = {
  tailRecM: (t) => (n) => (e, r, o, i, s) => {
    const u = (c, a, l) => t(a)(
      c,
      r,
      o,
      i,
      (d, _) => {
        const g = c._3 && !d._3 ? S(d._1, d._2, !0) : d;
        if (_.tag === "Loop")
          return l === 0 ? r((p) => u(g, _._1, 30)) : u(g, _._1, l - 1 | 0);
        if (_.tag === "Done")
          return s(g, _._1);
        f();
      }
    );
    return u(e, n, 30);
  },
  Monad0: () => N3
}, b3 = (t) => (n) => {
  const e = n.Plus1().Alt0(), r = n.Applicative0();
  return (o) => t.tailRecM((i) => t.Monad0().Bind1().bind(e.alt(e.Functor0().map(ag)(o))(r.pure(di(
    "Done",
    void 0
  ))))((s) => r.pure((() => {
    if (s.tag === "Loop")
      return di("Loop", tn("Cons", s._1, i));
    if (s.tag === "Done")
      return di(
        "Done",
        ((c) => (a) => {
          let l = c, d = a, _ = !0, g;
          for (; _; ) {
            const p = l, m = d;
            if (m.tag === "Nil") {
              _ = !1, g = p;
              continue;
            }
            if (m.tag === "Cons") {
              l = tn("Cons", m._1, p), d = m._2;
              continue;
            }
            f();
          }
          return g;
        })(nn)(i)
      );
    f();
  })())))(nn);
}, Ne = /* @__PURE__ */ b3(J3)(T3), yt = (t) => (n) => {
  const e = Uu("Expected " + n);
  return (r, o, i, s, u) => {
    const c = r._1, a = r._2;
    return o((l) => t(
      S(c, a, !1),
      o,
      i,
      (d, _) => {
        const g = d._3;
        return o((p) => g ? s(d, _) : e(r, o, i, s, u));
      },
      u
    ));
  };
}, qo = (t) => (n, e, r, o, i) => {
  const s = n._3, u = n._1, c = n._2;
  return e((a) => {
    const l = (d, _) => {
      const g = d._3;
      return e((p) => g ? o(S(d._1, d._2, s), _) : i(n, void 0));
    };
    return e((d) => e((_) => t(
      S(u, c, !1),
      e,
      r,
      (g, p) => l(S(g._1, g._2, !1), p),
      (g, p) => e((m) => e((h) => Uu("Negated parser succeeded")(
        g,
        e,
        r,
        l,
        ($, y) => e((v) => i(g._3 && !$._3 ? S($._1, $._2, !0) : $, y))
      )))
    )));
  });
}, k3 = (t) => {
  const n = t.foldr((e) => (r) => {
    if (r.tag === "Nothing")
      return J("Just", e);
    if (r.tag === "Just")
      return J(
        "Just",
        (o, i, s, u, c) => {
          const a = o._1, l = o._2;
          return i((d) => e(
            S(a, l, !1),
            i,
            s,
            (_, g) => {
              const p = _._3;
              return i((m) => p ? u(_, g) : r._1(o, i, s, u, c));
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
      return Uu("No alternative");
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, $_ = (t) => (n) => (e) => (r, o, i, s, u) => o((c) => o((a) => o((l) => o((d) => t(
  r,
  o,
  i,
  s,
  (_, g) => o((p) => o((m) => {
    const h = r._3 && !_._3 ? S(_._1, _._2, !0) : _;
    return e(
      h,
      o,
      i,
      s,
      ($, y) => o((v) => {
        const w = h._3 && !$._3 ? S($._1, $._2, !0) : $;
        return o((T) => o((b) => {
          const L = r._3 && !w._3 ? S(w._1, w._2, !0) : w;
          return n(
            L,
            o,
            i,
            s,
            (C, E) => o((B) => u(L._3 && !C._3 ? S(C._1, C._2, !0) : C, y))
          );
        }));
      })
    );
  }))
))))), ca = (t) => (n) => (e) => {
  if (n === 10)
    return { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  if (n === 13) {
    const r = o$()(e);
    return r.tag === "Just" && r._1 === 10 ? { index: t.index + 1 | 0, line: t.line, column: t.column } : { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  }
  return n === 9 ? { index: t.index + 1 | 0, line: t.line, column: (t.column + 8 | 0) - pr(t.column - 1 | 0)(8) | 0 } : { index: t.index + 1 | 0, line: t.line, column: t.column + 1 | 0 };
}, L3 = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const c = r, a = o, l = i, d = Lu(a);
    if (d.tag === "Nothing") {
      s = !1, u = c;
      continue;
    }
    if (d.tag === "Just") {
      r = d._1.tail === "" ? ca(c)(d._1.head)(l) : ca(c)(d._1.head)(d._1.tail), o = d._1.tail, i = l;
      continue;
    }
    f();
  }
  return u;
}, kt = (t) => (n, e, r, o, i) => {
  const s = Lu(n._1);
  if (s.tag === "Nothing")
    return o(n, Fr("Unexpected EOF", n._2));
  if (s.tag === "Just") {
    if (s._1.head < 0 || s._1.head > 65535)
      return o(n, Fr("Expected Char", n._2));
    if (s._1.head >= 0 && s._1.head <= 65535) {
      const u = Ka(s._1.head);
      return t(u) ? i(S(s._1.tail, ca(n._2)(s._1.head)(s._1.tail), !0), u) : o(n, Fr("Predicate unsatisfied", n._2));
    }
  }
  f();
}, Mi = (t, n, e, r, o) => t._1 === "" ? o(S(t._1, t._2, !0), void 0) : r(t, Fr("Expected EOF", t._2)), E3 = (t) => (n, e, r, o, i) => {
  const s = t(n._1);
  if (s.tag === "Left")
    return o(n, Fr(s._1, n._2));
  if (s.tag === "Right")
    return i(S(s._1.remainder, L3(n._2)(s._1.consumed)(s._1.remainder), s._1.consumed !== ""), s._1.value);
  f();
}, fe = (t) => E3((n) => {
  const e = _o(t)(n);
  return e.tag === "Just" ? St("Right", { value: t, consumed: t, remainder: e._1 }) : St("Left", "Expected " + Ac(t));
}), S3 = /* @__PURE__ */ kt((t) => !0), Cl = (t, n) => ({ tag: t, _1: n }), Cf = /* @__PURE__ */ k3(Xt), C3 = /* @__PURE__ */ an(I)(Xt), A3 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, y_ = /* @__PURE__ */ (() => {
  const t = yt(kt((r) => r === "}"))("'}'"), n = yt(kt((r) => r === "#"))("'#'"), e = kt((r) => r === `
` || r === "\r");
  return (r, o, i, s, u) => {
    const c = r._1, a = r._2;
    return o((l) => o((d) => t(
      S(c, a, !1),
      o,
      i,
      (_, g) => o((p) => {
        const m = r._1, h = r._2;
        return o(($) => o((y) => n(
          S(m, h, !1),
          o,
          i,
          (v, w) => o((T) => {
            const b = r._1, L = r._2;
            return o((C) => o((E) => e(
              S(b, L, !1),
              o,
              i,
              (B, D) => o((F) => Mi(r, o, i, s, u)),
              (B, D) => o((F) => u(S(b, L, !1), void 0))
            )));
          }),
          (v, w) => o((T) => u(S(m, h, !1), void 0))
        )));
      }),
      (_, g) => o((p) => u(S(c, a, !1), void 0))
    )));
  };
})(), ve = (t) => (n, e, r, o, i) => e((s) => lo(
  n,
  e,
  r,
  o,
  (u, c) => e((a) => {
    const l = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
    return e((d) => t(
      l,
      e,
      r,
      o,
      (_, g) => e((p) => {
        const m = l._3 && !_._3 ? S(_._1, _._2, !0) : _;
        return e((h) => lo(
          m,
          e,
          r,
          o,
          ($, y) => e((v) => i(
            m._3 && !$._3 ? S($._1, $._2, !0) : $,
            k(g, { line: c.line, column: c.column, endLine: y.line, endColumn: y.column })
          ))
        ));
      })
    ));
  })
)), P3 = /* @__PURE__ */ (() => {
  const t = kt((n) => n === " " || n === "	" || n === `
` || n === "\r");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? S(u._1, u._2, !0) : u, void 0))
  ));
})(), v_ = (t, n, e, r, o) => n((i) => fe("#")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Ne(kt((d) => d !== `
`)), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((d) => a(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => o(l._3 && !_._3 ? S(_._1, _._2, !0) : _, void 0))
    ));
  })
)), G3 = /* @__PURE__ */ yt(/* @__PURE__ */ (() => {
  const t = yt(kt((e) => e === "}"))("'}'"), n = kt((e) => e === `
` || e === "\r");
  return (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((a) => r((l) => t(
      S(u, c, !1),
      r,
      o,
      (d, _) => r((g) => {
        const p = e._1, m = e._2;
        return r((h) => r(($) => v_(
          S(p, m, !1),
          r,
          o,
          (y, v) => {
            const w = y._3;
            return r((T) => {
              if (w)
                return i(y, v);
              const b = e._1, L = e._2;
              return r((C) => r((E) => n(
                S(b, L, !1),
                r,
                o,
                (B, D) => {
                  const F = B._3;
                  return r((z) => F ? i(B, D) : Mi(e, r, o, i, s));
                },
                (B, D) => r((F) => s(B, void 0))
              )));
            });
          },
          (y, v) => r((w) => s(y, void 0))
        )));
      }),
      (d, _) => r((g) => s(S(u, c, !1), void 0))
    )));
  };
})())("newline or '}' (statements end at the end of the line)"), ke = /* @__PURE__ */ (() => {
  const t = Ne((n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => P3(
      S(s, u, !1),
      e,
      r,
      (a, l) => {
        const d = a._3;
        return e((_) => d ? o(a, l) : v_(n, e, r, o, i));
      },
      i
    ));
  });
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? S(u._1, u._2, !0) : u, void 0))
  ));
})(), I3 = /* @__PURE__ */ (() => {
  const t = yt(kt((n) => n === "|"))("'|'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const l = Ne(kt((_) => _ !== "|")), d = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((_) => l(
        d,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = yt(yt(kt((y) => y === "|"))("'|'"))("closing '|'"), $ = d._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return e((y) => h(
            $,
            e,
            r,
            o,
            (v, w) => e((T) => i(
              $._3 && !v._3 ? S(v._1, v._2, !0) : v,
              Hr(Dt(on.foldr, p))
            ))
          ));
        })
      ));
    })
  ));
})(), F3 = /* @__PURE__ */ yt(/* @__PURE__ */ Cf([
  (t, n, e, r, o) => n((i) => {
    const s = t._3;
    return fe("->")(t, n, e, (u, c) => r(S(u._1, u._2, s), c), (u, c) => n((a) => o(u, !0)));
  }),
  (t, n, e, r, o) => n((i) => {
    const s = t._3;
    return fe("--")(t, n, e, (u, c) => r(S(u._1, u._2, s), c), (u, c) => n((a) => o(u, !1)));
  })
]))("edge arrow '->' or '--'"), R3 = (t) => t !== `
` && t !== "\r" && t !== "#" && t !== "}" && t !== "{", Vu = /* @__PURE__ */ kt((t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z"), Af = (t) => t === `
` || t === "\r" || t === "#" || t === "}", B3 = (t) => t === `
` || t === "\r" || t === "#" || t === "}" || t === "{", z3 = (t) => t !== "{" && t !== `
` && t !== "\r", D3 = /* @__PURE__ */ (() => {
  const t = yt(kt((n) => n === "-"))("'-'");
  return (n, e, r, o, i) => {
    const s = n._3;
    return e((u) => t(
      n,
      e,
      r,
      (c, a) => o(S(c._1, c._2, s), a),
      (c, a) => e((l) => {
        const d = qo((() => {
          const g = yt(kt((m) => m === ">"))("'>'"), p = yt(kt((m) => m === "-"))("'-'");
          return (m, h, $, y, v) => {
            const w = m._1, T = m._2;
            return h((b) => g(
              S(w, T, !1),
              h,
              $,
              (L, C) => {
                const E = L._3;
                return h((B) => E ? y(L, C) : p(m, h, $, y, v));
              },
              v
            ));
          };
        })()), _ = n._3 && !c._3 ? S(c._1, c._2, !0) : c;
        return e((g) => d(
          _,
          e,
          r,
          (p, m) => o(S(p._1, p._2, s), m),
          (p, m) => e((h) => i(_._3 && !p._3 ? S(p._1, p._2, !0) : p, "-"))
        ));
      })
    ));
  };
})(), Vt = /* @__PURE__ */ (() => {
  const t = Ne(kt((n) => n === " " || n === "	"));
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? S(u._1, u._2, !0) : u, void 0))
  ));
})(), ji = /* @__PURE__ */ (() => {
  const t = kt((n) => n === " " || n === "	");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => Vt(n._3 && !u._3 ? S(u._1, u._2, !0) : u, e, r, o, i))
  ));
})(), x_ = (t, n, e, r, o) => n((i) => Vt(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = yt(kt((d) => d === "-"))("'-'"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((d) => {
      const _ = (m, h) => n(($) => (() => {
        if (h.tag === "Just")
          return (y, v, w, T, b) => v((L) => F3(
            y,
            v,
            w,
            T,
            (C, E) => v((B) => b(C, J("Just", E)))
          ));
        if (h.tag === "Nothing")
          return (y, v, w, T, b) => b(y, x);
        f();
      })()(l._3 && !m._3 ? S(m._1, m._2, !0) : m, n, e, r, o)), g = l._1, p = l._2;
      return n((m) => n((h) => a(
        S(g, p, !1),
        n,
        e,
        ($, y) => n((v) => _(l, x)),
        ($, y) => n((v) => _(S(g, p, !1), J("Just", y)))
      )));
    });
  })
)), Q3 = (t) => {
  const n = _o("Expected ")(t), e = (() => {
    if (n.tag === "Nothing")
      return t;
    if (n.tag === "Just")
      return n._1;
    f();
  })();
  return e === "'{'" ? "Open the block with `{`." : e === "integer (seed value)" ? "Put an integer after `seed`." : e === "closing '}'" ? "Close this block with `}`." : e === `closing '"' (unterminated string)` ? 'This string is unterminated; close it with `"`.' : e === "closing '|'" ? "Close this pipe label with `|`." : e === "space after '+'" ? "Put a space after `+`: `+ api: API`." : e === "node identifier after '+'" ? "Put a node id after `+`: `+ api: API`." : e === "space after '-'" ? "Put a space after `-`: `- api`." : e === "node identifier after '-'" ? "Put a node id after `-`: `- api`." : e === "space after '~'" ? "Put a space after `~`: `~ api -> db => api -> cache`." : e === "node identifier" ? "Put a node identifier here." : e === "node identifier after 'inside'" ? "Tell `inside` which node owns this interior: `inside api { ... }`." : e === "source node identifier after 'via'" ? "Put the source node after `via`: `via a b`." : e === "target node identifier after 'via'" ? "Put the second endpoint after `via`: `via a b`." : e === "source node identifier" ? "Put a source node identifier here." : e === "new source node identifier" ? "Put the new source node identifier after `=>`." : e === "new target node identifier" ? "Put the new target node identifier after the replacement arrow." : e === "edge arrow '->' or '--'" ? "Use `->` for a directed edge or `--` for an undirected edge." : e === "source edge arrow '->'" ? "Use `->` in the edge you are changing: `~ api -> db => api -> cache`." : e === "replacement edge arrow '->'" ? "Use `->` in the replacement edge: `~ api -> db => api -> cache`." : e === "repoint separator '=>'" ? "Use `=>` before the replacement edge: `~ api -> db => api -> cache`." : e === "target node identifier" ? "Put a target node after the arrow." : e === "'~>'" ? "Use `~>` for movement from left to right." : e === "'<~'" ? "Use `<~` for movement from right to left." : e === "'->' or '<-'" ? "Use `~>` / `<~` for movement tokens." : e === 'label ("…", : rest-of-line, or |…|)' ? 'label must use `: text`, `"text"`, or `|multi-line|`.' : e === "attribute key" ? "Start each attribute with a name, like `shape`." : e === "':'" ? "Put `:` between the attribute name and value: `{shape: cylinder}`." : e === "attribute value" ? "Put an attribute value after `:`." : e === "closing '}' for attributes" ? "Close the attribute block with `}`." : e === "space after 'into'" ? "Put a space after `into`: `into api`." : e === "node identifier after 'into'" ? "Tell `into` which node to dive into." : e === "newline or '}' (statements end at the end of the line)" ? "This statement has extra text. Put the next statement on a new line or close the block with `}`." : e === "statement (+ node, - node, + edge, - edge, into, out, or 'a ~> b'/'a <~ b')" ? "I don't recognize this statement. Start with `+`, `-`, `~`, `into`, `out`, `par`, `seq`, or movement like `api ~> db`." : e === "'scene', 'still', 'title', 'inside', or end of input" ? "Start a block with `scene`, `still`, `title`, or `inside`." : e;
}, H3 = (t) => {
  const n = Vg(t), e = _o('"')(n), r = (() => {
    if (e.tag === "Just")
      return Tp('"')(e._1);
    if (e.tag === "Nothing")
      return x;
    f();
  })(), o = (() => {
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  })();
  return o === "" ? x : J("Just", o);
}, W3 = /* @__PURE__ */ (() => {
  const t = yt(kt((n) => n === "\\"))("'\\\\'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const l = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((d) => S3(
        l,
        e,
        r,
        o,
        (_, g) => e((p) => i(
          l._3 && !_._3 ? S(_._1, _._2, !0) : _,
          g === "n" ? `
` : g === "t" ? "	" : g === "r" ? "\r" : g
        ))
      ));
    })
  ));
})(), O3 = /* @__PURE__ */ (() => {
  const t = kt((n) => n !== '"' && n !== "\\" && n !== `
`);
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => W3(S(s, u, !1), e, r, (a, l) => e((d) => t(n, e, r, o, i)), i));
  };
})(), q3 = /* @__PURE__ */ (() => {
  const t = yt(kt((n) => n === '"'))(`'"'`);
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const l = Ne(O3), d = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((_) => l(
        d,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = yt(yt(kt((y) => y === '"'))(`'"'`))(`closing '"' (unterminated string)`), $ = d._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return e((y) => h(
            $,
            e,
            r,
            o,
            (v, w) => e((T) => i(
              $._3 && !v._3 ? S(v._1, v._2, !0) : v,
              Hr(Dt(on.foldr, p))
            ))
          ));
        })
      ));
    })
  ));
})(), Ri = /* @__PURE__ */ kt((t) => t >= "0" && t <= "9"), X3 = /* @__PURE__ */ (() => {
  const t = yt(kt((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => Vu(
      S(s, u, !1),
      e,
      r,
      (a, l) => {
        const d = a._3;
        return e((_) => {
          if (d)
            return o(a, l);
          const g = n._1, p = n._2;
          return e((m) => Ri(
            S(g, p, !1),
            e,
            r,
            (h, $) => {
              const y = h._3;
              return e((v) => {
                if (y)
                  return o(h, $);
                const w = n._1, T = n._2;
                return e((b) => t(
                  S(w, T, !1),
                  e,
                  r,
                  (L, C) => {
                    const E = L._3;
                    return e((B) => E ? o(L, C) : D3(n, e, r, o, i));
                  },
                  i
                ));
              });
            },
            i
          ));
        });
      },
      i
    ));
  };
})(), Qn = /* @__PURE__ */ (() => {
  const t = yt(kt((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => e((s) => {
    const u = (l, d) => e((_) => {
      const g = Ne(X3), p = n._3 && !l._3 ? S(l._1, l._2, !0) : l;
      return e((m) => g(
        p,
        e,
        r,
        o,
        (h, $) => e((y) => i(
          p._3 && !h._3 ? S(h._1, h._2, !0) : h,
          Di(d) + Hr(Dt(on.foldr, $))
        ))
      ));
    }), c = n._1, a = n._2;
    return e((l) => Vu(
      S(c, a, !1),
      e,
      r,
      (d, _) => {
        const g = d._3;
        return e((p) => g ? o(d, _) : t(n, e, r, o, u));
      },
      u
    ));
  });
})(), Al = (t, n, e, r, o) => n((i) => Vt(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = yt(Qn)("attribute key"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((d) => a(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => {
        const m = l._3 && !_._3 ? S(_._1, _._2, !0) : _;
        return n((h) => Vt(
          m,
          n,
          e,
          r,
          ($, y) => n((v) => {
            const w = yt(yt(kt((b) => b === ":"))("':'"))("':'"), T = m._3 && !$._3 ? S($._1, $._2, !0) : $;
            return n((b) => w(
              T,
              n,
              e,
              r,
              (L, C) => n((E) => {
                const B = T._3 && !L._3 ? S(L._1, L._2, !0) : L;
                return n((D) => Vt(
                  B,
                  n,
                  e,
                  r,
                  (F, z) => n((V) => {
                    const Z = yt(Qn)("attribute value"), Y = B._3 && !F._3 ? S(F._1, F._2, !0) : F;
                    return n((W) => Z(
                      Y,
                      n,
                      e,
                      r,
                      (A, P) => n((O) => {
                        const G = Y._3 && !A._3 ? S(A._1, A._2, !0) : A;
                        return n((Q) => Vt(
                          G,
                          n,
                          e,
                          r,
                          (X, tt) => n((U) => o(G._3 && !X._3 ? S(X._1, X._2, !0) : X, k(g, P)))
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
)), Y3 = /* @__PURE__ */ $_(/* @__PURE__ */ (() => {
  const t = yt(kt((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (c, a) => e((l) => e((d) => {
      const _ = n._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return Vt(_, e, r, o, (g, p) => e((m) => i(_._3 && !g._3 ? S(g._1, g._2, !0) : g, p)));
    }))
  )));
})())(/* @__PURE__ */ yt(/* @__PURE__ */ (() => {
  const t = yt(kt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => Vt(
    n,
    e,
    r,
    o,
    (c, a) => e((l) => e((d) => {
      const _ = n._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return t(_, e, r, o, (g, p) => e((m) => i(_._3 && !g._3 ? S(g._1, g._2, !0) : g, p)));
    }))
  )));
})())("closing '}' for attributes"))(/* @__PURE__ */ (() => {
  const t = yt(kt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => {
    const u = (l, d) => e((_) => (() => {
      if (d.tag === "Just")
        return (g, p, m, h, $) => $(g, R);
      if (d.tag === "Nothing")
        return (g, p, m, h, $) => p((y) => Al(
          g,
          p,
          m,
          h,
          (v, w) => p((T) => {
            const b = Ne((() => {
              const C = yt(kt((E) => E === ","))("','");
              return (E, B, D, F, z) => {
                const V = E._3;
                return B((Z) => B((Y) => B((W) => B((A) => B((P) => B((O) => Vt(
                  E,
                  B,
                  D,
                  (G, Q) => F(S(G._1, G._2, V), Q),
                  (G, Q) => B((X) => B((tt) => {
                    const U = E._3 && !G._3 ? S(G._1, G._2, !0) : G;
                    return C(
                      U,
                      B,
                      D,
                      (q, j) => F(S(q._1, q._2, V), j),
                      (q, j) => B((et) => {
                        const nt = U._3 && !q._3 ? S(q._1, q._2, !0) : q;
                        return B((ft) => B((ct) => {
                          const dt = E._3 && !nt._3 ? S(nt._1, nt._2, !0) : nt;
                          return Vt(
                            dt,
                            B,
                            D,
                            (Gt, Jt) => F(S(Gt._1, Gt._2, V), Jt),
                            (Gt, Jt) => B((Yt) => {
                              const _t = dt._3 && !Gt._3 ? S(Gt._1, Gt._2, !0) : Gt;
                              return B((Tt) => B((ht) => {
                                const mt = E._3 && !_t._3 ? S(_t._1, _t._2, !0) : _t;
                                return Al(
                                  mt,
                                  B,
                                  D,
                                  (st, gt) => F(S(st._1, st._2, V), gt),
                                  (st, gt) => B((it) => z(mt._3 && !st._3 ? S(st._1, st._2, !0) : st, gt))
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
            })()), L = g._3 && !v._3 ? S(v._1, v._2, !0) : v;
            return p((C) => b(
              L,
              p,
              m,
              h,
              (E, B) => p((D) => $(
                L._3 && !E._3 ? S(E._1, E._2, !0) : E,
                C3([w, ...Dt(on.foldr, B)])
              ))
            ));
          })
        ));
      f();
    })()(n._3 && !l._3 ? S(l._1, l._2, !0) : l, e, r, o, i)), c = n._1, a = n._2;
    return e((l) => e((d) => t(
      S(c, a, !1),
      e,
      r,
      (_, g) => e((p) => u(n, x)),
      (_, g) => e((p) => u(S(c, a, !1), J("Just", g)))
    )));
  });
})()), U3 = (t, n, e, r, o) => n((i) => Vt(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = yt(kt((d) => d === "{"))("'{'"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((d) => {
      const _ = (m, h) => n(($) => (() => {
        if (h.tag === "Just")
          return Y3;
        if (h.tag === "Nothing")
          return (y, v, w, T, b) => b(y, R);
        f();
      })()(l._3 && !m._3 ? S(m._1, m._2, !0) : m, n, e, r, o)), g = l._1, p = l._2;
      return n((m) => n((h) => a(
        S(g, p, !1),
        n,
        e,
        ($, y) => n((v) => _(l, x)),
        ($, y) => n((v) => _(S(g, p, !1), J("Just", y)))
      )));
    });
  })
)), V3 = (t) => (n) => (e) => (r, o, i, s, u) => o((c) => Vt(
  r,
  o,
  i,
  s,
  (a, l) => o((d) => {
    const _ = ve(yt(Qn)("target node identifier")), g = r._3 && !a._3 ? S(a._1, a._2, !0) : a;
    return o((p) => _(
      g,
      o,
      i,
      s,
      (m, h) => o(($) => u(
        g._3 && !m._3 ? S(m._1, m._2, !0) : m,
        { op: rr("DelEdge", { from: t, to: h._1, directed: e }), operands: [n, h._2] }
      ))
    ));
  })
)), K3 = (t, n, e, r, o) => n((i) => lo(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((l) => {
      const d = a._3;
      return n((_) => Qn(
        a,
        n,
        e,
        (g, p) => r(S(g._1, g._2, d), p),
        (g, p) => n((m) => {
          const h = a._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return n(($) => Vt(
            h,
            n,
            e,
            (y, v) => r(S(y._1, y._2, d), v),
            (y, v) => n((w) => {
              const T = h._3 && !y._3 ? S(y._1, y._2, !0) : y;
              return n((b) => {
                const L = (B, D) => n((F) => {
                  const z = T._3 && !B._3 ? S(B._1, B._2, !0) : B;
                  return n((V) => r(a._3 && !z._3 ? S(z._1, z._2, !0) : z, Fr("Use `~>` / `<~` for movement tokens.", u)));
                }), C = T._1, E = T._2;
                return n((B) => fe("->")(
                  S(C, E, !1),
                  n,
                  e,
                  (D, F) => {
                    const z = D._3;
                    return n((V) => z ? r(S(D._1, D._2, d), F) : fe("<-")(T, n, e, (Z, Y) => r(S(Z._1, Z._2, d), Y), L));
                  },
                  L
                ));
              });
            })
          ));
        })
      ));
    });
  })
)), M3 = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => ve(Qn)(
    t,
    n,
    e,
    (c, a) => r(S(c._1, c._2, s), a),
    (c, a) => n((l) => {
      const d = t._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return n((_) => Vt(
        d,
        n,
        e,
        (g, p) => r(S(g._1, g._2, s), p),
        (g, p) => n((m) => {
          const h = yt(kt((y) => y === "~"))("'~'"), $ = d._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return n((y) => {
            const v = (b, L) => n((C) => {
              const E = $._3 && !b._3 ? S(b._1, b._2, !0) : b;
              return n((B) => {
                const D = a._1, F = a._2, z = t._3 && !E._3 ? S(E._1, E._2, !0) : E;
                return n((V) => Vt(
                  z,
                  n,
                  e,
                  r,
                  (Z, Y) => n((W) => {
                    const A = yt(kt((G) => G === "~"))("'~'"), P = yt(kt((G) => G === "<"))("'<'"), O = z._3 && !Z._3 ? S(Z._1, Z._2, !0) : Z;
                    return n((G) => {
                      const Q = (U, q) => n((j) => {
                        const et = q === "~" ? yt(fe("~>"))("'~>'") : yt(fe("<~"))("'<~'"), nt = O._3 && !U._3 ? S(U._1, U._2, !0) : U;
                        return n((ft) => et(
                          nt,
                          n,
                          e,
                          r,
                          (ct, dt) => n((Gt) => o(
                            nt._3 && !ct._3 ? S(ct._1, ct._2, !0) : ct,
                            k(D, k(F, dt))
                          ))
                        ));
                      }), X = O._1, tt = O._2;
                      return n((U) => A(
                        S(X, tt, !1),
                        n,
                        e,
                        (q, j) => {
                          const et = q._3;
                          return n((nt) => et ? r(O, j) : P(O, n, e, (ft, ct) => r(O, ct), (ft, ct) => Q(O, ct)));
                        },
                        (q, j) => Q(O, j)
                      ));
                    });
                  })
                ));
              });
            }), w = $._1, T = $._2;
            return n((b) => h(
              S(w, T, !1),
              n,
              e,
              (L, C) => {
                const E = L._3;
                return n((B) => E ? r(S($._1, $._2, s), C) : n((D) => fe("<~")(
                  $,
                  n,
                  e,
                  (F, z) => r(S($._1, $._2, s), z),
                  (F, z) => n((V) => v($))
                )));
              },
              (L, C) => v($)
            ));
          });
        })
      ));
    })
  ));
}), j3 = /* @__PURE__ */ (() => {
  const t = yt(kt((n) => n === "~"))("'~'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const l = yt(ji)("space after '~'"), d = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((_) => l(
        d,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = ve(yt(Qn)("source node identifier")), $ = d._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return e((y) => h(
            $,
            e,
            r,
            o,
            (v, w) => e((T) => {
              const b = w._1, L = w._2, C = $._3 && !v._3 ? S(v._1, v._2, !0) : v;
              return e((E) => Vt(
                C,
                e,
                r,
                o,
                (B, D) => e((F) => {
                  const z = yt(fe("->"))("source edge arrow '->'"), V = C._3 && !B._3 ? S(B._1, B._2, !0) : B;
                  return e((Z) => z(
                    V,
                    e,
                    r,
                    o,
                    (Y, W) => e((A) => {
                      const P = V._3 && !Y._3 ? S(Y._1, Y._2, !0) : Y;
                      return e((O) => Vt(
                        P,
                        e,
                        r,
                        o,
                        (G, Q) => e((X) => {
                          const tt = ve(yt(Qn)("target node identifier")), U = P._3 && !G._3 ? S(G._1, G._2, !0) : G;
                          return e((q) => tt(
                            U,
                            e,
                            r,
                            o,
                            (j, et) => e((nt) => {
                              const ft = et._1, ct = et._2, dt = U._3 && !j._3 ? S(j._1, j._2, !0) : j;
                              return e((Gt) => Vt(
                                dt,
                                e,
                                r,
                                o,
                                (Jt, Yt) => e((_t) => {
                                  const Tt = yt(fe("=>"))("repoint separator '=>'"), ht = dt._3 && !Jt._3 ? S(Jt._1, Jt._2, !0) : Jt;
                                  return e((mt) => Tt(
                                    ht,
                                    e,
                                    r,
                                    o,
                                    (st, gt) => e((it) => {
                                      const at = ht._3 && !st._3 ? S(st._1, st._2, !0) : st;
                                      return e((wt) => Vt(
                                        at,
                                        e,
                                        r,
                                        o,
                                        (Nt, Ct) => e((Wt) => {
                                          const Zn = ve(yt(Qn)("new source node identifier")), Gn = at._3 && !Nt._3 ? S(Nt._1, Nt._2, !0) : Nt;
                                          return e((Fn) => Zn(
                                            Gn,
                                            e,
                                            r,
                                            o,
                                            (Pt, Lt) => e((te) => {
                                              const Rn = Lt._1, Bn = Lt._2, wn = Gn._3 && !Pt._3 ? S(Pt._1, Pt._2, !0) : Pt;
                                              return e((Se) => Vt(
                                                wn,
                                                e,
                                                r,
                                                o,
                                                (qt, gn) => e((Of) => {
                                                  const hn = yt(fe("->"))("replacement edge arrow '->'"), zn = wn._3 && !qt._3 ? S(qt._1, qt._2, !0) : qt;
                                                  return e((or) => hn(
                                                    zn,
                                                    e,
                                                    r,
                                                    o,
                                                    (ir, Nr) => e((Ce) => {
                                                      const wr = zn._3 && !ir._3 ? S(ir._1, ir._2, !0) : ir;
                                                      return e((De) => Vt(
                                                        wr,
                                                        e,
                                                        r,
                                                        o,
                                                        (ce, Mo) => e((jo) => {
                                                          const Zo = ve(yt(Qn)("new target node identifier")), mo = wr._3 && !ce._3 ? S(ce._1, ce._2, !0) : ce;
                                                          return e((Zi) => Zo(
                                                            mo,
                                                            e,
                                                            r,
                                                            o,
                                                            (qr, ti) => e((qf) => i(
                                                              mo._3 && !qr._3 ? S(qr._1, qr._2, !0) : qr,
                                                              {
                                                                op: rr("RepointEdge", { from: b, to: ft, newFrom: Rn, newTo: ti._1 }),
                                                                operands: [L, ct, Bn, ti._2]
                                                              }
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
                  ));
                })
              ));
            })
          ));
        })
      ));
    })
  ));
})(), Z3 = (t, n, e, r, o) => n((i) => Ri(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Ne(Ri), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((d) => a(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => {
        const m = Hh(Di(u) + Hr(Dt(
          on.foldr,
          g
        )));
        return (() => {
          if (m.tag === "Just") {
            const h = m._1;
            return ($, y, v, w, T) => T($, h);
          }
          if (m.tag === "Nothing")
            return (h, $, y, v, w) => w(h, 0);
          f();
        })()(l._3 && !_._3 ? S(_._1, _._2, !0) : _, n, e, r, o);
      })
    ));
  })
)), N_ = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => fe(t)(
    n,
    e,
    r,
    (c, a) => o(S(c._1, c._2, s), a),
    (c, a) => e((l) => {
      const d = qo((() => {
        const g = yt(kt((m) => m === "_"))("'_'"), p = yt(kt((m) => m === "-"))("'-'");
        return (m, h, $, y, v) => {
          const w = m._1, T = m._2;
          return h((b) => Vu(
            S(w, T, !1),
            h,
            $,
            (L, C) => {
              const E = L._3;
              return h((B) => {
                if (E)
                  return y(L, C);
                const D = m._1, F = m._2;
                return h((z) => Ri(
                  S(D, F, !1),
                  h,
                  $,
                  (V, Z) => {
                    const Y = V._3;
                    return h((W) => {
                      if (Y)
                        return y(V, Z);
                      const A = m._1, P = m._2;
                      return h((O) => g(
                        S(A, P, !1),
                        h,
                        $,
                        (G, Q) => {
                          const X = G._3;
                          return h((tt) => X ? y(G, Q) : p(m, h, $, y, v));
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
      })()), _ = n._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return e((g) => d(
        _,
        e,
        r,
        (p, m) => o(S(p._1, p._2, s), m),
        (p, m) => e((h) => {
          const $ = _._3 && !p._3 ? S(p._1, p._2, !0) : p;
          return e((y) => ke(
            $,
            e,
            r,
            (v, w) => o(S(v._1, v._2, s), w),
            (v, w) => e((T) => i($._3 && !v._3 ? S(v._1, v._2, !0) : v, t))
          ));
        })
      ));
    })
  ));
}, xr = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => fe(t)(
    n,
    e,
    r,
    (c, a) => o(S(c._1, c._2, s), a),
    (c, a) => e((l) => {
      const d = qo((() => {
        const g = yt(kt((m) => m === "_"))("'_'"), p = yt(kt((m) => m === "-"))("'-'");
        return (m, h, $, y, v) => {
          const w = m._1, T = m._2;
          return h((b) => Vu(
            S(w, T, !1),
            h,
            $,
            (L, C) => {
              const E = L._3;
              return h((B) => {
                if (E)
                  return y(L, C);
                const D = m._1, F = m._2;
                return h((z) => Ri(
                  S(D, F, !1),
                  h,
                  $,
                  (V, Z) => {
                    const Y = V._3;
                    return h((W) => {
                      if (Y)
                        return y(V, Z);
                      const A = m._1, P = m._2;
                      return h((O) => g(
                        S(A, P, !1),
                        h,
                        $,
                        (G, Q) => {
                          const X = G._3;
                          return h((tt) => X ? y(G, Q) : p(m, h, $, y, v));
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
      })()), _ = n._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return e((g) => d(
        _,
        e,
        r,
        (p, m) => o(S(p._1, p._2, s), m),
        (p, m) => e((h) => i(_._3 && !p._3 ? S(p._1, p._2, !0) : p, void 0))
      ));
    })
  ));
}, tk = (t, n, e, r, o) => n((i) => xr("into")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = yt(ji)("space after 'into'"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((d) => a(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => {
        const m = ve(yt(Qn)("node identifier after 'into'")), h = l._3 && !_._3 ? S(_._1, _._2, !0) : _;
        return n(($) => m(
          h,
          n,
          e,
          r,
          (y, v) => n((w) => o(
            h._3 && !y._3 ? S(y._1, y._2, !0) : y,
            { op: rr("Enter", { id: v._1 }), operands: [v._2] }
          ))
        ));
      })
    ));
  })
)), nk = (t, n, e, r, o) => n((i) => xr("out")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => o(t._3 && !s._3 ? S(s._1, s._2, !0) : s, { op: Fb, operands: [] }))
)), ek = (t, n, e, r, o) => n((i) => xr("seed")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((l) => Vt(
      a,
      n,
      e,
      r,
      (d, _) => n((g) => {
        const p = yt(Z3)("integer (seed value)"), m = a._3 && !d._3 ? S(d._1, d._2, !0) : d;
        return n((h) => p(
          m,
          n,
          e,
          r,
          ($, y) => n((v) => {
            const w = m._3 && !$._3 ? S($._1, $._2, !0) : $;
            return n((T) => ke(
              w,
              n,
              e,
              r,
              (b, L) => n((C) => o(w._3 && !b._3 ? S(b._1, b._2, !0) : b, y))
            ));
          })
        ));
      })
    ));
  })
)), rk = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => Vt(
    t,
    n,
    e,
    (c, a) => r(S(c._1, c._2, s), a),
    (c, a) => n((l) => xr("via")(
      t._3 && !c._3 ? S(c._1, c._2, !0) : c,
      n,
      e,
      (d, _) => r(S(d._1, d._2, s), _),
      (d, _) => n((g) => {
        const p = t._3 && !d._3 ? S(d._1, d._2, !0) : d;
        return n((m) => Yu(
          p,
          n,
          e,
          r,
          (h, $) => n((y) => {
            const v = p._3 && !h._3 ? S(h._1, h._2, !0) : h;
            return n((w) => ji(
              v,
              n,
              e,
              r,
              (T, b) => n((L) => {
                const C = yt(Qn)("source node identifier after 'via'"), E = v._3 && !T._3 ? S(T._1, T._2, !0) : T;
                return n((B) => C(
                  E,
                  n,
                  e,
                  r,
                  (D, F) => n((z) => {
                    const V = E._3 && !D._3 ? S(D._1, D._2, !0) : D;
                    return n((Z) => Vt(
                      V,
                      n,
                      e,
                      r,
                      (Y, W) => n((A) => {
                        const P = yt(Qn)("target node identifier after 'via'"), O = V._3 && !Y._3 ? S(Y._1, Y._2, !0) : Y;
                        return n((G) => P(
                          O,
                          n,
                          e,
                          r,
                          (Q, X) => n((tt) => o(O._3 && !Q._3 ? S(Q._1, Q._2, !0) : Q, { from: F, to: X }))
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
    ))
  ));
}), ok = (t) => (n) => {
  const e = Ne(rk);
  return (r, o, i, s, u) => o((c) => e(
    r,
    o,
    i,
    s,
    (a, l) => o((d) => u(
      r._3 && !a._3 ? S(a._1, a._2, !0) : a,
      { op: rr("DelNode", { id: t, via: Dt(on.foldr, l) }), operands: [n] }
    ))
  ));
}, ik = /* @__PURE__ */ (() => {
  const t = yt(kt((n) => n === "-"))("'-'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const l = yt(ji)("space after '-'"), d = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((_) => l(
        d,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = ve(yt(Qn)("node identifier after '-'")), $ = d._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return e((y) => h(
            $,
            e,
            r,
            o,
            (v, w) => e((T) => {
              const b = w._1, L = w._2, C = $._3 && !v._3 ? S(v._1, v._2, !0) : v;
              return e((E) => x_(
                C,
                e,
                r,
                o,
                (B, D) => e((F) => (() => {
                  if (D.tag === "Just")
                    return V3(b)(L)(D._1);
                  if (D.tag === "Nothing")
                    return ok(b)(L);
                  f();
                })()(C._3 && !B._3 ? S(B._1, B._2, !0) : B, e, r, o, i))
              ));
            })
          ));
        })
      ));
    })
  ));
})(), Oe = (t) => (n) => (e, r, o, i, s) => r((u) => lo(
  e,
  r,
  o,
  i,
  (c, a) => r((l) => {
    const d = e._3 && !c._3 ? S(c._1, c._2, !0) : c;
    return r((_) => xr(t)(
      d,
      r,
      o,
      i,
      (g, p) => r((m) => i(d._3 && !g._3 ? S(g._1, g._2, !0) : g, Fr(n, a)))
    ));
  })
)), sk = /* @__PURE__ */ (() => {
  const t = yt(kt((n) => n === ":"))("':'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const l = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((d) => Vt(
        l,
        e,
        r,
        o,
        (_, g) => e((p) => {
          const m = Ne(kt(R3)), h = l._3 && !_._3 ? S(_._1, _._2, !0) : _;
          return e(($) => m(
            h,
            e,
            r,
            o,
            (y, v) => e((w) => i(
              h._3 && !y._3 ? S(y._1, y._2, !0) : y,
              Vg(Hr(Dt(on.foldr, v)))
            ))
          ));
        })
      ));
    })
  ));
})(), uk = (t, n, e, r, o) => n((i) => Vt(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => yt((a, l, d, _, g) => {
    const p = a._1, m = a._2;
    return l((h) => sk(
      S(p, m, !1),
      l,
      d,
      ($, y) => {
        const v = $._3;
        return l((w) => {
          if (v)
            return _($, y);
          const T = a._1, b = a._2;
          return l((L) => I3(
            S(T, b, !1),
            l,
            d,
            (C, E) => {
              const B = C._3;
              return l((D) => B ? _(C, E) : q3(a, l, d, _, g));
            },
            g
          ));
        });
      },
      g
    ));
  })('label ("…", : rest-of-line, or |…|)')(t._3 && !s._3 ? S(s._1, s._2, !0) : s, n, e, r, o))
)), Ku = (t) => (n, e, r, o, i) => e((s) => Vt(
  n,
  e,
  r,
  o,
  (u, c) => e((a) => {
    const l = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
    return e((d) => {
      const _ = (m, h) => e(($) => (h ? ((y, v, w, T, b) => b(y, x)) : (y, v, w, T, b) => v((L) => uk(
        y,
        v,
        w,
        T,
        (C, E) => v((B) => b(C, J("Just", E)))
      )))(l._3 && !m._3 ? S(m._1, m._2, !0) : m, e, r, o, i)), g = l._1, p = l._2;
      return e((m) => {
        const h = ($, y) => {
          const v = $._3;
          return e((w) => v ? o($, y) : _(l, !1));
        };
        return e(($) => e((y) => e((v) => Mi(
          S(g, p, !1),
          e,
          r,
          (w, T) => {
            const b = w._3;
            return e((L) => b ? h(S(g, p, !1), T) : e((C) => kt(t)(
              S(g, p, !1),
              e,
              r,
              (E, B) => h(S(g, p, !1), B),
              (E, B) => e((D) => e((F) => _(S(g, p, !1), !0)))
            )));
          },
          (w, T) => e((b) => e((L) => _(S(g, p, !1), !0)))
        ))));
      });
    });
  })
)), ck = (t) => (n) => (e) => (r, o, i, s, u) => o((c) => Vt(
  r,
  o,
  i,
  s,
  (a, l) => o((d) => {
    const _ = ve(yt(Qn)("target node identifier")), g = r._3 && !a._3 ? S(a._1, a._2, !0) : a;
    return o((p) => _(
      g,
      o,
      i,
      s,
      (m, h) => o(($) => {
        const y = h._1, v = h._2, w = g._3 && !m._3 ? S(m._1, m._2, !0) : m;
        return o((T) => Ku(Af)(
          w,
          o,
          i,
          s,
          (b, L) => o((C) => u(
            w._3 && !b._3 ? S(b._1, b._2, !0) : b,
            {
              op: rr("AddEdge", { from: t, to: y, label: L.tag === "Just" ? J("Just", L._1) : x, directed: e }),
              operands: [n, v]
            }
          ))
        ));
      })
    ));
  })
)), ak = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => ve(Qn)(
    t,
    n,
    e,
    (c, a) => r(S(c._1, c._2, s), a),
    (c, a) => n((l) => {
      const d = t._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return n((_) => Vt(
        d,
        n,
        e,
        (g, p) => r(S(g._1, g._2, s), p),
        (g, p) => n((m) => {
          const h = yt(kt((y) => y === "<"))("'<'"), $ = d._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return n((y) => h(
            $,
            n,
            e,
            (v, w) => r(S($._1, $._2, s), w),
            (v, w) => n((T) => {
              const b = qo((C, E, B, D, F) => {
                const z = C._3;
                return fe("<-")(C, E, B, (V, Z) => D(S(V._1, V._2, z), Z), F);
              }), L = $._3 && !$._3 ? S($._1, $._2, !0) : $;
              return n((C) => b(
                L,
                n,
                e,
                (E, B) => r(S(E._1, E._2, s), B),
                (E, B) => n((D) => {
                  const F = L._3 && !E._3 ? S(E._1, E._2, !0) : E;
                  return n((z) => {
                    const V = a._1, Z = a._2, Y = t._3 && !F._3 ? S(F._1, F._2, !0) : F;
                    return n((W) => Vt(
                      Y,
                      n,
                      e,
                      r,
                      (A, P) => n((O) => {
                        const G = yt(fe("<~"))("'<~'"), Q = Y._3 && !A._3 ? S(A._1, A._2, !0) : A;
                        return n((X) => G(
                          Q,
                          n,
                          e,
                          r,
                          (tt, U) => n((q) => {
                            const j = Q._3 && !tt._3 ? S(tt._1, tt._2, !0) : tt;
                            return n((et) => Vt(
                              j,
                              n,
                              e,
                              r,
                              (nt, ft) => n((ct) => {
                                const dt = ve(yt(Qn)("target node identifier")), Gt = j._3 && !nt._3 ? S(nt._1, nt._2, !0) : nt;
                                return n((Jt) => dt(
                                  Gt,
                                  n,
                                  e,
                                  r,
                                  (Yt, _t) => n((Tt) => {
                                    const ht = _t._1, mt = _t._2, st = Gt._3 && !Yt._3 ? S(Yt._1, Yt._2, !0) : Yt;
                                    return n((gt) => Ku(Af)(
                                      st,
                                      n,
                                      e,
                                      r,
                                      (it, at) => n((wt) => o(
                                        st._3 && !it._3 ? S(it._1, it._2, !0) : it,
                                        {
                                          op: rr(
                                            "Token",
                                            {
                                              from: ht,
                                              to: V,
                                              labels: (() => {
                                                if (at.tag === "Nothing")
                                                  return [];
                                                if (at.tag === "Just")
                                                  return [at._1];
                                                f();
                                              })()
                                            }
                                          ),
                                          operands: [mt, Z]
                                        }
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
                  });
                })
              ));
            })
          ));
        })
      ));
    })
  ));
}), fk = (t, n, e, r, o) => n((i) => M3(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = u._2._2, l = u._1, d = u._2._1, _ = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((g) => Vt(
      _,
      n,
      e,
      r,
      (p, m) => n((h) => {
        const $ = ve(yt(Qn)("target node identifier")), y = _._3 && !p._3 ? S(p._1, p._2, !0) : p;
        return n((v) => $(
          y,
          n,
          e,
          r,
          (w, T) => n((b) => {
            const L = T._1, C = T._2, E = y._3 && !w._3 ? S(w._1, w._2, !0) : w;
            return n((B) => Ku(Af)(
              E,
              n,
              e,
              r,
              (D, F) => n((z) => (a === "<~" ? ((V, Z, Y, W, A) => A(
                V,
                {
                  op: rr(
                    "Token",
                    {
                      from: L,
                      to: l,
                      labels: (() => {
                        if (F.tag === "Nothing")
                          return [];
                        if (F.tag === "Just")
                          return [F._1];
                        f();
                      })()
                    }
                  ),
                  operands: a === "<~" ? [C, d] : [d, C]
                }
              )) : (V, Z, Y, W, A) => A(
                V,
                {
                  op: rr(
                    "Token",
                    {
                      from: l,
                      to: L,
                      labels: (() => {
                        if (F.tag === "Nothing")
                          return [];
                        if (F.tag === "Just")
                          return [F._1];
                        f();
                      })()
                    }
                  ),
                  operands: a === "<~" ? [C, d] : [d, C]
                }
              ))(E._3 && !D._3 ? S(D._1, D._2, !0) : D, n, e, r, o))
            ));
          })
        ));
      })
    ));
  })
)), lk = (t, n, e, r, o) => n((i) => Ku(B3)(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => o(
    s,
    (() => {
      if (u.tag === "Nothing")
        return "";
      if (u.tag === "Just")
        return u._1;
      f();
    })()
  ))
)), gk = (t) => (n) => (e, r, o, i, s) => r((u) => lk(
  e,
  r,
  o,
  i,
  (c, a) => r((l) => {
    const d = e._3 && !c._3 ? S(c._1, c._2, !0) : c;
    return r((_) => U3(
      d,
      r,
      o,
      i,
      (g, p) => r((m) => s(
        d._3 && !g._3 ? S(g._1, g._2, !0) : g,
        {
          op: rr(
            "AddNode",
            {
              id: t,
              label: a,
              shape: (() => {
                const h = A3("shape")(p);
                if (h.tag === "Just")
                  return h._1 === "rectangle" || h._1 === "rect" ? dr : h._1 === "cylinder" || h._1 === "cyl" ? i0 : h._1 === "parallelogram" ? Dp : h._1 === "diamond" ? Qp : h._1 === "ellipse" ? Hp : h._1 === "document" || h._1 === "doc" ? s0 : h._1 === "cloud" ? Wp : dr;
                if (h.tag === "Nothing")
                  return dr;
                f();
              })()
            }
          ),
          operands: [n]
        }
      ))
    ));
  })
)), dk = /* @__PURE__ */ (() => {
  const t = yt(kt((n) => n === "+"))("'+'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const l = yt(ji)("space after '+'"), d = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((_) => l(
        d,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = ve(yt(Qn)("node identifier after '+'")), $ = d._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return e((y) => h(
            $,
            e,
            r,
            o,
            (v, w) => e((T) => {
              const b = w._1, L = w._2, C = $._3 && !v._3 ? S(v._1, v._2, !0) : v;
              return e((E) => x_(
                C,
                e,
                r,
                o,
                (B, D) => e((F) => (() => {
                  if (D.tag === "Just")
                    return ck(b)(L)(D._1);
                  if (D.tag === "Nothing")
                    return gk(b)(L);
                  f();
                })()(C._3 && !B._3 ? S(B._1, B._2, !0) : B, e, r, o, i))
              ));
            })
          ));
        })
      ));
    })
  ));
})(), _k = (t, n, e, r, o) => n((i) => lo(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = yt(Cf([
      Oe("+node")('Use `+ api: API` instead of `+node api "API"`.'),
      Oe("+edge")("Use `+ api -> db` instead of `+edge api db`."),
      Oe("+conn")("Use `+ api -- db` instead of `+conn api db`."),
      Oe("-node")("Use `- api` instead of `-node api`."),
      Oe("-edge")("Use `- api -> db` instead of `-edge api db`."),
      Oe("-conn")("Use `- api -- db` instead of `-conn api db`."),
      Oe("~edge")("Use `~ api -> db => api -> cache` instead of `~edge api db -> api cache`."),
      Oe("enter")("Use `into api` instead of `enter api`."),
      Oe("exit")("Use `out` instead of `exit`."),
      K3,
      dk,
      ik,
      j3,
      fk,
      ak,
      tk,
      nk
    ]))("statement (+ node, - node, + edge, - edge, into, out, or 'a ~> b'/'a <~ b')"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((d) => a(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => {
        const m = l._3 && !_._3 ? S(_._1, _._2, !0) : _;
        return n((h) => lo(
          m,
          n,
          e,
          r,
          ($, y) => n((v) => {
            const w = { line: u.line, column: u.column, endLine: y.line, endColumn: y.column };
            return o(
              m._3 && !$._3 ? S($._1, $._2, !0) : $,
              Ki(
                "Leaf",
                { op: g.op, line: w.line, column: w.column, endLine: w.endLine, endColumn: w.endColumn, span: w, operands: g.operands }
              )
            );
          })
        ));
      })
    ));
  })
)), Pf = /* @__PURE__ */ $_(/* @__PURE__ */ (() => {
  const t = yt(kt((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (c, a) => e((l) => e((d) => {
      const _ = n._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return ke(_, e, r, o, (g, p) => e((m) => i(_._3 && !g._3 ? S(g._1, g._2, !0) : g, p)));
    }))
  )));
})())(/* @__PURE__ */ yt(/* @__PURE__ */ (() => {
  const t = yt(kt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => ke(
    n,
    e,
    r,
    o,
    (c, a) => e((l) => e((d) => {
      const _ = n._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return t(_, e, r, o, (g, p) => e((m) => i(_._3 && !g._3 ? S(g._1, g._2, !0) : g, p)));
    }))
  )));
})())("closing '}'")), hk = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => ke(
    t,
    n,
    e,
    (c, a) => r(S(c._1, c._2, s), a),
    (c, a) => n((l) => {
      const d = qo(yt(kt((g) => g === "}"))("'}'")), _ = t._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return n((g) => d(
        _,
        n,
        e,
        (p, m) => r(S(p._1, p._2, s), m),
        (p, m) => n((h) => qo(Mi)(
          _._3 && !p._3 ? S(p._1, p._2, !0) : p,
          n,
          e,
          ($, y) => r(S($._1, $._2, s), y),
          ($, y) => n((v) => {
            const w = t._3 && !$._3 ? S($._1, $._2, !0) : $;
            return n((T) => Yu(
              w,
              n,
              e,
              r,
              (b, L) => n((C) => {
                const E = Cf([mk, pk, _k]), B = w._3 && !b._3 ? S(b._1, b._2, !0) : b;
                return n((D) => E(
                  B,
                  n,
                  e,
                  r,
                  (F, z) => n((V) => {
                    const Z = B._3 && !F._3 ? S(F._1, F._2, !0) : F;
                    return n((Y) => Vt(
                      Z,
                      n,
                      e,
                      r,
                      (W, A) => n((P) => {
                        const O = Z._3 && !W._3 ? S(W._1, W._2, !0) : W;
                        return n((G) => G3(
                          O,
                          n,
                          e,
                          r,
                          (Q, X) => n((tt) => o(O._3 && !Q._3 ? S(Q._1, Q._2, !0) : Q, z))
                        ));
                      })
                    ));
                  })
                ));
              })
            ));
          })
        ))
      ));
    })
  ));
}), pk = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => {
    const c = (a, l) => {
      const d = a._3;
      return n((_) => d ? r(a, l) : n((g) => {
        const p = t._3;
        return n((m) => xr("seq")(
          t,
          n,
          e,
          (h, $) => r(S(h._1, h._2, p), $),
          (h, $) => n((y) => {
            const v = t._3 && !h._3 ? S(h._1, h._2, !0) : h;
            return n((w) => Vt(
              v,
              n,
              e,
              (T, b) => r(S(T._1, T._2, p), b),
              (T, b) => n((L) => y_(
                v._3 && !T._3 ? S(T._1, T._2, !0) : T,
                n,
                e,
                (C, E) => r(S(C._1, C._2, p), E),
                (C, E) => n((B) => {
                  const D = t._3 && !C._3 ? S(C._1, C._2, !0) : C;
                  return n((F) => Yu(
                    D,
                    n,
                    e,
                    r,
                    (z, V) => n((Z) => {
                      const Y = yt(yt(kt((A) => A === "{"))("'{'"))("'{'"), W = D._3 && !z._3 ? S(z._1, z._2, !0) : z;
                      return n((A) => Y(
                        W,
                        n,
                        e,
                        r,
                        (P, O) => n((G) => o(
                          W._3 && !P._3 ? S(P._1, P._2, !0) : P,
                          Ki("Seq", [])
                        ))
                      ));
                    })
                  ));
                })
              ))
            ));
          })
        ));
      }));
    };
    return n((a) => n((l) => xr("seq")(
      S(i, s, !1),
      n,
      e,
      (d, _) => c(S(d._1, d._2, !1), _),
      (d, _) => n((g) => n((p) => Vt(
        d,
        n,
        e,
        (m, h) => c(S(m._1, m._2, !1), h),
        (m, h) => n(($) => {
          const y = d._3 && !m._3 ? S(m._1, m._2, !0) : m;
          return yt(kt((v) => v === "{"))("'{'")(
            y,
            n,
            e,
            (v, w) => c(S(y._1, y._2, !1), w),
            (v, w) => n((T) => Pf(Gf(g_))(y, n, e, c, o))
          );
        })
      )))
    )));
  });
}, mk = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => {
    const c = (a, l) => {
      const d = a._3;
      return n((_) => d ? r(a, l) : n((g) => {
        const p = t._3;
        return n((m) => xr("par")(
          t,
          n,
          e,
          (h, $) => r(S(h._1, h._2, p), $),
          (h, $) => n((y) => {
            const v = t._3 && !h._3 ? S(h._1, h._2, !0) : h;
            return n((w) => Vt(
              v,
              n,
              e,
              (T, b) => r(S(T._1, T._2, p), b),
              (T, b) => n((L) => y_(
                v._3 && !T._3 ? S(T._1, T._2, !0) : T,
                n,
                e,
                (C, E) => r(S(C._1, C._2, p), E),
                (C, E) => n((B) => {
                  const D = t._3 && !C._3 ? S(C._1, C._2, !0) : C;
                  return n((F) => Yu(
                    D,
                    n,
                    e,
                    r,
                    (z, V) => n((Z) => {
                      const Y = yt(yt(kt((A) => A === "{"))("'{'"))("'{'"), W = D._3 && !z._3 ? S(z._1, z._2, !0) : z;
                      return n((A) => Y(
                        W,
                        n,
                        e,
                        r,
                        (P, O) => n((G) => o(
                          W._3 && !P._3 ? S(P._1, P._2, !0) : P,
                          Ki("Par", [])
                        ))
                      ));
                    })
                  ));
                })
              ))
            ));
          })
        ));
      }));
    };
    return n((a) => n((l) => xr("par")(
      S(i, s, !1),
      n,
      e,
      (d, _) => c(S(d._1, d._2, !1), _),
      (d, _) => n((g) => n((p) => Vt(
        d,
        n,
        e,
        (m, h) => c(S(m._1, m._2, !1), h),
        (m, h) => n(($) => {
          const y = d._3 && !m._3 ? S(m._1, m._2, !0) : m;
          return yt(kt((v) => v === "{"))("'{'")(
            y,
            n,
            e,
            (v, w) => c(S(y._1, y._2, !1), w),
            (v, w) => n((T) => Pf(Gf(Db))(y, n, e, c, o))
          );
        })
      )))
    )));
  });
}, Gf = (t) => {
  const n = Ne(hk);
  return (e, r, o, i, s) => r((u) => n(
    e,
    r,
    o,
    i,
    (c, a) => r((l) => s(
      e._3 && !c._3 ? S(c._1, c._2, !0) : c,
      t(Dt(on.foldr, a))
    ))
  ));
}, kc = (t) => (n) => (e, r, o, i, s) => r((u) => N_(t)(
  e,
  r,
  o,
  i,
  (c, a) => r((l) => {
    const d = Ne(kt(z3)), _ = e._3 && !c._3 ? S(c._1, c._2, !0) : c;
    return r((g) => d(
      _,
      r,
      o,
      i,
      (p, m) => r((h) => {
        const $ = yt(yt(kt((v) => v === "{"))("'{'"))("'{'"), y = _._3 && !p._3 ? S(p._1, p._2, !0) : p;
        return r((v) => $(
          y,
          r,
          o,
          i,
          (w, T) => r((b) => {
            const L = y._3 && !w._3 ? S(w._1, w._2, !0) : w;
            return r((C) => ke(
              L,
              r,
              o,
              i,
              (E, B) => r((D) => {
                const F = Gf(g_), z = L._3 && !E._3 ? S(E._1, E._2, !0) : E;
                return r((V) => F(
                  z,
                  r,
                  o,
                  i,
                  (Z, Y) => r((W) => {
                    const A = z._3 && !Z._3 ? S(Z._1, Z._2, !0) : Z;
                    return r((P) => ke(
                      A,
                      r,
                      o,
                      i,
                      (O, G) => r((Q) => {
                        const X = yt(yt(kt((U) => U === "}"))("'}'"))("closing '}'"), tt = A._3 && !O._3 ? S(O._1, O._2, !0) : O;
                        return r((U) => X(
                          tt,
                          r,
                          o,
                          i,
                          (q, j) => r((et) => {
                            const nt = tt._3 && !q._3 ? S(q._1, q._2, !0) : q;
                            return r((ft) => ke(
                              nt,
                              r,
                              o,
                              i,
                              (ct, dt) => r((Gt) => s(
                                nt._3 && !ct._3 ? S(ct._1, ct._2, !0) : ct,
                                { name: H3(Hr(Dt(on.foldr, m))), ops: Y, kind: n }
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
)), $k = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => Oe("keyframe")("Use `scene` instead of `keyframe`.")(
    S(i, s, !1),
    n,
    e,
    (c, a) => {
      const l = c._3;
      return n((d) => {
        if (l)
          return r(c, a);
        const _ = t._1, g = t._2;
        return n((p) => kc("scene")(Rb)(
          S(_, g, !1),
          n,
          e,
          (m, h) => {
            const $ = m._3;
            return n((y) => {
              if ($)
                return r(m, h);
              const v = t._1, w = t._2;
              return n((T) => kc("still")(Bb)(
                S(v, w, !1),
                n,
                e,
                (b, L) => {
                  const C = b._3;
                  return n((E) => C ? r(b, L) : kc("title")(zb)(t, n, e, r, o));
                },
                o
              ));
            });
          },
          o
        ));
      });
    },
    o
  ));
}, yk = (t, n, e, r, o) => n((i) => N_("inside")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = yt(Qn)("node identifier after 'inside'"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((d) => a(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => {
        const m = l._3 && !_._3 ? S(_._1, _._2, !0) : _;
        return n((h) => ke(
          m,
          n,
          e,
          r,
          ($, y) => n((v) => {
            const w = m._3 && !$._3 ? S($._1, $._2, !0) : $;
            return n((T) => Pf(w_)(
              w,
              n,
              e,
              r,
              (b, L) => n((C) => {
                const E = w._3 && !b._3 ? S(b._1, b._2, !0) : b;
                return n((B) => ke(
                  E,
                  n,
                  e,
                  r,
                  (D, F) => n((z) => o(E._3 && !D._3 ? S(D._1, D._2, !0) : D, { node: g, doc: L }))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), w_ = (t, n, e, r, o) => n((i) => {
  const s = (a, l) => n((d) => {
    const _ = Ne(vk()), g = t._3 && !a._3 ? S(a._1, a._2, !0) : a;
    return n((p) => _(
      g,
      n,
      e,
      r,
      (m, h) => n(($) => {
        const y = Dt(on.foldr, h);
        return o(
          g._3 && !m._3 ? S(m._1, m._2, !0) : m,
          {
            seed: (() => {
              if (l.tag === "Nothing")
                return 0;
              if (l.tag === "Just")
                return l._1;
              f();
            })(),
            frames: vt((v) => {
              if (v.tag === "TopFrame")
                return J("Just", v._1);
              if (v.tag === "TopInside")
                return x;
              f();
            })(y),
            interiors: vt((v) => {
              if (v.tag === "TopInside")
                return J("Just", v._1);
              if (v.tag === "TopFrame")
                return x;
              f();
            })(y)
          }
        );
      })
    ));
  }), u = t._1, c = t._2;
  return n((a) => n((l) => ek(
    S(u, c, !1),
    n,
    e,
    (d, _) => {
      const g = d._3;
      return n((p) => g ? r(d, _) : s(t, x));
    },
    (d, _) => n((g) => s(d, J("Just", _)))
  )));
}), vk = /* @__PURE__ */ U_(() => h3.defer((t) => (n, e, r, o, i) => {
  const s = n._1, u = n._2;
  return e((c) => e((a) => yk(
    S(s, u, !1),
    e,
    r,
    (l, d) => {
      const _ = l._3;
      return e((g) => _ ? o(l, d) : e((p) => $k(n, e, r, o, (m, h) => e(($) => i(m, Cl("TopFrame", h))))));
    },
    (l, d) => e((_) => i(l, Cl("TopInside", d)))
  )));
})), xk = /* @__PURE__ */ (() => {
  const t = yt((n, e, r, o, i) => e((s) => e((u) => ke(
    n,
    e,
    r,
    o,
    (c, a) => e((l) => e((d) => {
      const _ = n._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return Mi(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => i(_._3 && !g._3 ? S(g._1, g._2, !0) : g, p))
      );
    }))
  ))))("'scene', 'still', 'title', 'inside', or end of input");
  return (n, e, r, o, i) => e((s) => e((u) => e((c) => e((a) => ke(
    n,
    e,
    r,
    o,
    (l, d) => e((_) => e((g) => {
      const p = n._3 && !l._3 ? S(l._1, l._2, !0) : l;
      return w_(
        p,
        e,
        r,
        o,
        (m, h) => e(($) => {
          const y = p._3 && !m._3 ? S(m._1, m._2, !0) : m;
          return e((v) => e((w) => {
            const T = n._3 && !y._3 ? S(y._1, y._2, !0) : y;
            return t(
              T,
              e,
              r,
              o,
              (b, L) => e((C) => i(T._3 && !b._3 ? S(b._1, b._2, !0) : b, h))
            );
          }));
        })
      );
    }))
  )))));
})(), Nk = (t) => {
  const n = v3(t)(xk);
  if (n.tag === "Left")
    return St("Left", { msg: Q3(n._1._1), line: n._1._2.line, column: n._1._2.column, endLine: n._1._2.line, endColumn: n._1._2.column + 1 | 0 });
  if (n.tag === "Right")
    return St("Right", n._1);
  f();
}, If = (t) => {
  const n = Nk(t);
  if (n.tag === "Left")
    return St("Left", n._1.msg);
  if (n.tag === "Right")
    return St("Right", n._1);
  f();
};
function wk(t, n, e, r) {
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
function Ye(t) {
  return function(n) {
    return function(e) {
      return function() {
        e.setAttribute(t, n);
      };
    };
  };
}
function Lc(t) {
  return function() {
    return function(n) {
      return t(n)();
    };
  };
}
function Ec(t) {
  return function(n) {
    return function(e) {
      return function(r) {
        return function() {
          return r.addEventListener(t, n, e);
        };
      };
    };
  };
}
function Sc(t) {
  return function(n) {
    return function(e) {
      return function(r) {
        return function() {
          return r.removeEventListener(t, n, e);
        };
      };
    };
  };
}
const cu = function() {
  return window;
};
function Tk(t) {
  return function() {
    return t.document;
  };
}
function aa(t) {
  return function(n) {
    return function() {
      return n.requestAnimationFrame(t);
    };
  };
}
function Jk(t) {
  return function(n) {
    return function() {
      return n.cancelAnimationFrame(t);
    };
  };
}
const bk = (t) => t, fa = (t) => () => {
  const n = t.getBoundingClientRect?.(), e = n?.width || t.clientWidth || 0, r = n?.height || t.clientHeight || 0;
  return { width: e, height: r };
}, kk = (t) => (n) => () => {
  let e = 0;
  const r = () => {
    e || (e = requestAnimationFrame(() => {
      e = 0, n();
    }));
  }, o = typeof ResizeObserver > "u" ? null : new ResizeObserver(r);
  return o?.observe(t), window.addEventListener("resize", r), () => {
    e && cancelAnimationFrame(e), o?.disconnect(), window.removeEventListener("resize", r);
  };
}, Lk = () => window.devicePixelRatio || 1, Ek = (t) => (n) => (e) => (r) => (o) => () => {
  const i = Math.max(1, n || t.clientWidth || r), s = Math.max(1, e || t.clientHeight || o), u = "Markgraf needs more room", c = `Resize to at least ${Math.round(r)} × ${Math.round(o)} px`;
  if (t.setAttribute("data-mg-too-small", "1"), t.setAttribute("data-mg-viewport-css-width", String(n || 0)), t.setAttribute("data-mg-viewport-css-height", String(e || 0)), t.setAttribute("data-mg-camera-vw", "0"), t.setAttribute("data-mg-camera-vh", "0"), t.setAttribute("data-mg-camera-zoom", "0"), t instanceof SVGElement) {
    t.setAttribute("viewBox", `0 0 ${i} ${s}`), t.setAttribute("preserveAspectRatio", "xMidYMid meet"), t.innerHTML = `
      <rect x="0" y="0" width="${i}" height="${s}" rx="16" fill="#111827"/>
      <text x="${i / 2}" y="${s / 2 - 10}" text-anchor="middle" dominant-baseline="middle" fill="#f9fafb" font-family="system-ui, sans-serif" font-size="18" font-weight="700">${u}</text>
      <text x="${i / 2}" y="${s / 2 + 18}" text-anchor="middle" dominant-baseline="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="13">${c}</text>
    `;
    return;
  }
  if (t instanceof HTMLCanvasElement) {
    const a = window.devicePixelRatio || 1;
    t.width = Math.max(1, Math.round(i * a)), t.height = Math.max(1, Math.round(s * a));
    const l = t.getContext("2d");
    if (!l) return;
    l.save(), l.scale(a, a), l.clearRect(0, 0, i, s), l.fillStyle = "#111827", l.fillRect(0, 0, i, s), l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = "#f9fafb", l.font = "700 18px system-ui, sans-serif", l.fillText(u, i / 2, s / 2 - 10), l.fillStyle = "#cbd5e1", l.font = "13px system-ui, sans-serif", l.fillText(c, i / 2, s / 2 + 18), l.restore();
    return;
  }
  t.textContent = `${u}. ${c}.`;
}, Sk = (t, n) => {
  n.innerHTML = t;
}, Pl = (t, n, e) => {
  t.style.setProperty(n, e);
}, Ck = (t) => (n) => t === n, T_ = (t) => t, J_ = (t, n, e) => ({ tag: t, _1: n, _2: e }), Ak = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, b_ = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Pk = /* @__PURE__ */ J_("AutoSize"), Gl = /* @__PURE__ */ T_("CanvasRenderer"), Gk = /* @__PURE__ */ T_("SvgRenderer"), Ik = (t) => (n) => {
  const e = t - n * M(Nn(Ie(t / n)));
  return n <= 0 ? 0 : e < 0 ? e + n : e;
}, Fk = (t) => N((n) => (e) => {
  const r = t(e);
  return () => (n(), r());
})(() => {
}), k_ = (t) => (n) => ({ ...n, state: { ...n.state, camera: t }, minis: H((e) => k_(t)(e))(n.minis) }), Rk = (t) => (n) => (e) => {
  const r = Oi(e.rootLayout)(e.camera), o = Ye("data-mg-too-small")("0")(t);
  return () => (o(), Ye("data-mg-camera-vw")(Mr(r.w))(t)(), Ye("data-mg-camera-vh")(Mr(r.h))(t)(), Ye("data-mg-camera-zoom")(Mr(e.camera.zoom))(t)(), Ye("data-mg-viewport-css-width")(Mr(n.w))(t)(), Ye("data-mg-viewport-css-height")(Mr(n.h))(t)());
}, L_ = () => ep() / 1e3, Bk = (t) => {
  const n = If(t);
  if (n.tag === "Left")
    return St("Left", n._1);
  if (n.tag === "Right") {
    const e = Xu(n._1)(qu)._1;
    if (e.tag === "Left")
      return St("Left", e._1.msg);
    if (e.tag === "Right")
      return St("Right", e._1);
  }
  f();
}, Cc = (t) => (n) => {
  const e = Zt((r) => r.startT <= n && n < r.endT)(t.spans);
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
}, zk = (t) => (n) => (e) => {
  const r = ld(e);
  return () => {
    const o = r(), i = gd(e)(), s = rf(Ju)(nf)(e)(Fu(o)(i)(e));
    if (s.tag === "Left")
      return St("Left", "precompute failed");
    if (s.tag === "Right")
      return St("Right", { schedule: s._1 });
    f();
  };
}, Dk = (t) => (n) => {
  if (n.tag === "FixedSize") {
    const e = n._1 <= 0 || n._2 <= 0 ? x : J("Just", n._1 / n._2);
    return () => e;
  }
  if (n.tag === "AutoSize") {
    const e = fa(t);
    return () => {
      const r = e();
      return r.width <= 0 || r.height <= 0 ? x : J("Just", r.width / r.height);
    };
  }
  f();
}, vs = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (l) => () => {
  const d = L_(), _ = a.value;
  a.value = d;
  const g = _ === 0 ? 0 : d - _, p = (() => {
    if (e.tag === "FixedSize")
      return { w: e._1, h: e._2 };
    if (e.tag === "AutoSize") {
      const T = fa(t)();
      return { w: T.width <= 0 ? 480 : T.width, h: T.height <= 0 ? 320 : T.height };
    }
    f();
  })();
  if (p.w < 480 || p.h < 320)
    return Ek(t)(p.w)(p.h)(480)(320)();
  const m = d1({ widthPx: p.w, heightPx: p.h })(s), h = Oy(m)(b_(l)(m.totalDuration)), $ = i ? h : { ...h, levels: H((T) => ({ ...T, state: { ...T.state, frameTitle: "" } }))(h.levels) }, y = c.value, v = (() => {
    if (y.tag === "Nothing")
      return $.camera;
    if (y.tag === "Just")
      return Ug(s.cameraConfig.cameraDecay)(g)(y._1)($.camera);
    f();
  })();
  c.value = J("Just", v);
  const w = { ...$, camera: v, levels: H(k_(v))($.levels) };
  if (Rk(t)(p)(w)(), n === "CanvasRenderer") {
    const T = bk(t), b = Xi({ padding: 8, outputAspect: x })(w), L = (() => {
      if (e.tag === "FixedSize")
        return { w: e._1, h: e._2 };
      if (e.tag === "AutoSize") {
        const A = fa(t)();
        return {
          w: A.width,
          h: A.height <= 0 ? b.vw <= 0 ? A.width : A.width * b.vh / b.vw : A.height
        };
      }
      f();
    })(), C = Lk(), E = L.w * C, B = L.h * C, D = rp(T)(), F = op(T)(), z = ya(T)(E);
    D !== E && z();
    const V = va(T)(B);
    F !== B && V(), e.tag === "FixedSize" ? (Pl(t, "width", rn(Nn(lr(L.w))) + "px"), Pl(t, "height", rn(Nn(lr(L.h))) + "px")) : e.tag === "AutoSize" || f();
    const Z = pu(T)();
    kr(Z)(), Ls(Z)({ scaleX: C, scaleY: C })();
    const Y = u.value, W = ab(r)(o)(Z)({ width: L.w, height: L.h })(w)(g)(Y)();
    return u.value = W, Lr(Z)();
  }
  if (n === "SvgRenderer") {
    const T = u.value, b = Dk(t)(e)(), L = Eb(b)(r)(o)(w)(g)(T);
    return u.value = L.springs, Ye("viewBox")(L.parts.viewBox)(t)(), Ye("preserveAspectRatio")("xMidYMid meet")(t)(), e.tag === "FixedSize" ? (Ye("width")(rn(Nn(lr(e._1))))(t)(), Ye("height")(rn(Nn(lr(e._2))))(t)()) : e.tag === "AutoSize" || f(), Sk(L.parts.body, t);
  }
  f();
}, Qk = (t) => (n) => (e) => (r) => (o) => (i) => (s) => () => {
  let u = 1, c = !0, a = !1, l = 0, d = 0;
  const _ = { value: R }, g = { value: x }, p = { value: 0 };
  let m = !1, h = () => {
  }, $ = [];
  vs(t)(e)(r)(o)(i)(s)(n)(_)(g)(p)(0)();
  const y = (E) => () => {
    const B = $, D = c, F = { time: E, keyframe: Cc(n)(E), playing: D };
    return Fk((z) => z(F))(B)();
  }, v = () => (c = !1, y(l)()), w = () => {
    if (!m && (a = !1, c)) {
      const D = L_(), F = d;
      d = D;
      const z = u, V = l, Z = Ik(F === 0 ? V + 0 * z : V + (D - F) * z)(n.totalDuration + 0.8);
      return Z < V && (g.value = x), l = Z, vs(t)(e)(r)(o)(i)(s)(n)(_)(g)(p)(Z)(), y(Z)(), T();
    }
  }, T = () => {
    if (!m && !a) {
      a = !0;
      const D = cu();
      aa(w)(D)();
    }
  }, b = () => (d = 0, c = !0, T()), L = () => (c || b(), y(l)());
  return h = kk(t)(() => {
    if (!m) {
      const B = l;
      return vs(t)(e)(r)(o)(i)(s)(n)(_)(g)(p)(B)(), y(B)();
    }
  })(), b(), {
    play: L,
    pause: v,
    toggle: () => c ? v() : L(),
    seek: (E) => {
      const B = Ak(0)(b_(n.totalDuration)(E));
      return () => (l = B, d = 0, g.value = x, vs(t)(e)(r)(o)(i)(s)(n)(_)(g)(p)(B)(), y(B)());
    },
    setSpeed: (E) => () => u = E,
    currentTime: () => l,
    currentKeyframe: () => {
      const E = l;
      return Cc(n)(E);
    },
    isPlaying: () => c,
    duration: n.totalDuration,
    subscribe: (E) => () => {
      $ = Ft($)(E);
      const D = l, F = c;
      E({ time: D, keyframe: Cc(n)(D), playing: F })();
      const z = pg((V) => !Ck(V)(E));
      return () => {
        $ = z($);
      };
    },
    destroy: () => (m = !0, h())
  };
}, Hk = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = Bk(n);
  if (u.tag === "Left")
    return () => St("Left", u._1);
  if (u.tag === "Right") {
    const c = zk()(r)(u._1);
    return () => {
      const a = c();
      if (a.tag === "Left")
        return St("Left", a._1);
      if (a.tag === "Right") {
        const l = Qk(t)(a._1.schedule)(e)(r)(o)(i)(s)();
        return St("Right", l);
      }
      f();
    };
  }
  f();
}, Ff = () => document.createElement("canvas"), Wk = (t, n) => {
  t.letterSpacing = n;
}, Ok = (t, n) => {
  t.fontKerning = n;
}, E_ = /* @__PURE__ */ Qi(Wk), Rf = /* @__PURE__ */ Qi(Ok), qk = { alpha: !0, premultipliedAlpha: !0, antialias: !0, depth: !1 }, Xk = (t) => t.getContext("webgl", qk), Yk = (t, n, e) => {
  const r = (i, s) => {
    const u = t.createShader(i);
    return t.shaderSource(u, s), t.compileShader(u), t.getShaderParameter(u, t.COMPILE_STATUS) || console.error(t.getShaderInfoLog(u)), u;
  }, o = t.createProgram();
  return t.attachShader(o, r(t.VERTEX_SHADER, n)), t.attachShader(o, r(t.FRAGMENT_SHADER, e)), t.linkProgram(o), t.getProgramParameter(o, t.LINK_STATUS) || console.error(t.getProgramInfoLog(o)), t.useProgram(o), o;
}, Uk = (t, n) => {
  const e = t.createBuffer();
  t.bindBuffer(t.ARRAY_BUFFER, e), t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), t.STATIC_DRAW);
  const r = t.getAttribLocation(n, "position");
  t.enableVertexAttribArray(r), t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0);
}, Vk = (t, n) => t.getExtension(n), Kk = (t, n, e) => t.getUniformLocation(n, e), Mk = (t, n, e) => t.uniform1f(n, e), jk = (t, n, e, r) => t.uniform2f(n, e, r), Zk = (t, n, e) => t.uniform1i(n, e), tL = (t, n, e) => t.uniform4fv(n, new Float32Array(e)), nL = (t, n, e) => t.uniform2fv(n, new Float32Array(e)), eL = (t, n, e) => t.uniform1fv(n, new Float32Array(e)), rL = (t) => t.createTexture(), oL = (t, n, e, r) => {
  t.activeTexture(t.TEXTURE0 + r), t.bindTexture(t.TEXTURE_2D, n), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
}, iL = (t, n, e, r) => {
  (n.width !== e || n.height !== r) && (n.width = e, n.height = r), t.viewport(0, 0, e, r);
}, sL = (t) => {
  t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT);
}, uL = (t) => t.drawArrays(t.TRIANGLE_STRIP, 0, 4), cL = (t) => ({ width: t.clientWidth, height: t.clientHeight }), aL = () => window.devicePixelRatio, Il = () => performance.now(), au = /* @__PURE__ */ Ha(oL), Mt = /* @__PURE__ */ Uo(Kk), fL = /* @__PURE__ */ Uo(tL), ii = (t) => (n) => {
  const e = fL(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, lL = /* @__PURE__ */ Uo(nL), si = (t) => (n) => {
  const e = lL(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, gL = /* @__PURE__ */ Ha(jk), Jr = /* @__PURE__ */ Uo(Zk), dL = /* @__PURE__ */ Uo(eL), br = (t) => (n) => {
  const e = dL(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, He = /* @__PURE__ */ Uo(Mk), _L = /* @__PURE__ */ Qi(Uk), hL = /* @__PURE__ */ Ha(iL), pL = /* @__PURE__ */ Qi(Vk), mL = /* @__PURE__ */ Yo(Xk), $L = /* @__PURE__ */ Yo(uL), Fl = /* @__PURE__ */ Yo(rL), yL = /* @__PURE__ */ Yo(cL), vL = /* @__PURE__ */ Yo(sL), xL = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Rl = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = I.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = J("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, NL = /* @__PURE__ */ _u(Xo), wL = /* @__PURE__ */ (() => {
  const t = ue.unfoldr(Ee);
  return (n) => t(se("IterNode", n, Le));
})(), TL = (t) => vt((n) => n)(H((n) => {
  if (n.target.tag === "TokenWindow") {
    const e = xL(n.target._2)(t.layout.edges);
    if (e.tag === "Just")
      return J(
        "Just",
        {
          points: H((() => {
            const r = t.placement;
            return (o) => ({ x: o.x * r.scale + r.tx, y: o.y * r.scale + r.ty });
          })())([
            ...(() => {
              const r = Rl(n.target._4)(t.layout.nodes);
              if (r.tag === "Nothing")
                return [];
              if (r.tag === "Just")
                return [{ x: r._1.x + r._1.w / 2, y: r._1.y + r._1.h / 2 }];
              f();
            })(),
            ...(() => {
              if (n.target._3 === "Forward")
                return e._1;
              if (n.target._3 === "Backward")
                return Pn(e._1);
              f();
            })(),
            ...(() => {
              const r = Rl(n.target._5)(t.layout.nodes);
              if (r.tag === "Nothing")
                return [];
              if (r.tag === "Just")
                return [{ x: r._1.x + r._1.w / 2, y: r._1.y + r._1.h / 2 }];
              f();
            })()
          ]),
          labels: H(lg)(n.target._6),
          startT: n.startT,
          endT: n.endT,
          holdPre: n.target._7,
          holdPost: n.target._8
        }
      );
    if (e.tag === "Nothing")
      return x;
    f();
  }
  return x;
})(t.windows)), JL = (t) => t.msg + " (line " + rn(t.line) + ", cols " + rn(t.column) + "-" + rn(t.endColumn) + ")", bL = (t) => (n) => (e) => {
  const r = e.w * n.scale, o = e.h * n.scale;
  return {
    x: e.x * n.scale + n.tx + r / 2,
    y: e.y * n.scale + n.ty + o / 2,
    w: r,
    h: o,
    label: e.label,
    shape: (() => {
      if (e.shape === "Rectangle")
        return 0;
      if (e.shape === "Cylinder")
        return 1;
      if (e.shape === "Parallelogram")
        return 2;
      if (e.shape === "Diamond")
        return 3;
      if (e.shape === "Ellipse")
        return 4;
      if (e.shape === "Document")
        return 5;
      if (e.shape === "Cloud")
        return 6;
      f();
    })(),
    depth: t,
    labelScale: n.scale
  };
}, kL = (t) => H(bL(t.path.length)(t.placement))((() => {
  const n = (e, r) => {
    if (e.tag === "Leaf")
      return r;
    if (e.tag === "Node")
      return n(e._5, tn("Cons", e._4, n(e._6, r)));
    f();
  };
  return Dt(on.foldr, n(t.layout.nodes, nn));
})()), LL = (t) => (n) => (e) => ({
  points: H((r) => ({ x: r.x * n.scale + n.tx, y: r.y * n.scale + n.ty }))(e._2),
  depth: t,
  arrowhead: (() => {
    const r = _o("conn:")(e._1);
    if (r.tag === "Just")
      return !1;
    if (r.tag === "Nothing")
      return !0;
    f();
  })()
}), Bl = (t) => (n) => {
  const e = Zt((r) => NL(r.path)(n))(t);
  if (e.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (e.tag === "Just") {
    const r = En(e._1.layout), o = r.w * e._1.placement.scale, i = r.h * e._1.placement.scale;
    return { x: r.x * e._1.placement.scale + e._1.placement.tx + o / 2, y: r.y * e._1.placement.scale + e._1.placement.ty + i / 2, w: o, h: i };
  }
  f();
}, EL = (t) => H(LL(t.path.length)(t.placement))(wL(t.layout.edges)), SL = (t) => (n) => ({
  startT: n.startT,
  endT: n.endT,
  dir: (() => {
    if (n.direction === "DiveIn")
      return 1;
    if (n.direction === "DiveOut")
      return 0;
    f();
  })(),
  parent: Bl(t)(n.parentPath),
  child: Bl(t)(n.childPath)
}), CL = (t) => {
  const n = If(t), e = (() => {
    if (n.tag === "Left") {
      const r = n._1;
      return (o) => St("Left", r);
    }
    if (n.tag === "Right") {
      const r = n._1;
      return (o) => o(r);
    }
    f();
  })()((r) => {
    const o = Xu(r)(qu)._1;
    if (o.tag === "Left")
      return St("Left", JL(o._1));
    if (o.tag === "Right") {
      const i = rf(Ju)(nf)(o._1)(Fu(R)(R)(o._1));
      if (i.tag === "Left")
        return St("Left", "schedule: " + rn(i._1.length) + " error(s)");
      if (i.tag === "Right")
        return St(
          "Right",
          {
            ok: !0,
            error: "",
            duration: i._1.totalDuration,
            nodes: xt(i._1.segments)(kL),
            edges: xt(i._1.segments)(EL),
            tokens: xt(i._1.segments)(TL),
            dives: H(SL(i._1.segments))(i._1.dives)
          }
        );
    }
    f();
  });
  if (e.tag === "Left")
    return { ok: !1, error: e._1, duration: 0, nodes: [], edges: [], tokens: [], dives: [] };
  if (e.tag === "Right")
    return e._1;
  f();
}, Pr = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, AL = (t) => (n) => (e) => {
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
}, la = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, zl = (t) => (n) => (e) => (r) => (o) => {
  const i = t + e + r, s = r * 2, u = Pr(0)(n - t - 2 * e), c = i + u - s;
  return s <= u ? AL(i)(c)(o) : t + (n - t) / 2;
}, Dl = (t) => (n) => ({ ...n, cx: zl(t.minX)(t.maxX)(t.margin)(n.hw)(n.cx), cy: zl(t.minY)(t.maxY)(t.margin)(n.hh)(n.cy) }), PL = (t) => (n) => {
  const e = Pr(0)(t.minY + t.margin - (n.cy - n.hh)) + Pr(0)(n.cy + n.hh - (t.maxY - t.margin)), r = Pr(0)(t.minX + t.margin - (n.cx - n.hw)) + Pr(0)(n.cx + n.hw - (t.maxX - t.margin));
  return r * n.hh * 2 + e * n.hw * 2 + r * e;
}, GL = (t) => (n) => (e) => {
  const r = N(Pr)(0)(H((o) => n.cx - n.hw < o.cx + o.hw + t && n.cx + n.hw > o.cx - o.hw - t && n.cy - n.hh < o.cy + o.hh + t && n.cy + n.hh > o.cy - o.hh - t ? la((o.cx + o.hw + t - (n.cx - n.hw)) / 0.7071067811865476)((o.cy + o.hh + t - (n.cy - n.hh)) / 0.7071067811865476) : 0)(e));
  return { ...n, cx: n.cx + r * 0.7071067811865476, cy: n.cy + r * 0.7071067811865476 };
}, IL = (t) => (n) => {
  const e = la(t.cx + t.hw)(n.cx + n.hw) - Pr(t.cx - t.hw)(n.cx - n.hw), r = la(t.cy + t.hh)(n.cy + n.hh) - Pr(t.cy - t.hh)(n.cy - n.hh);
  return t.cx - t.hw < n.cx + n.hw && t.cx + t.hw > n.cx - n.hw && t.cy - t.hh < n.cy + n.hh && t.cy + t.hh > n.cy - n.hh ? e * r : 0;
}, FL = (t) => (n) => (e) => (r) => (o) => {
  const i = o.cy - o.dotY, s = o.cy - r.cy;
  return (() => {
    const u = o.cx - o.dotX, c = o.cx - r.cx;
    return 1e6 * PL(t)(o) + 1e4 * N((a) => (l) => a + IL(o)(l))(0)(n) + 0.05 * (c * c + s * s) + 0.01 * (u * u + i * i);
  })() + (o.cy < e.dotY ? 100 : 0);
}, RL = (t) => (n) => (e) => (r) => {
  const o = (s) => {
    const u = Dl(t)(s);
    return { chip: u, score: FL(t)(n)(e)(r)(u) };
  }, i = zt(
    (s) => x,
    (s) => (u) => J("Just", { head: s, tail: u }),
    [
      r,
      e,
      ...(() => {
        const s = 2 * e.dotX - e.cx, u = 2 * e.dotY - e.cy;
        return [
          { ...e, cx: e.cx, cy: e.cy },
          { ...e, cx: s, cy: e.cy },
          { ...e, cx: e.cx, cy: u },
          { ...e, cx: s, cy: u },
          { ...e, cx: e.cx, cy: e.dotY },
          { ...e, cx: s, cy: e.dotY },
          { ...e, cx: e.dotX, cy: e.cy },
          { ...e, cx: e.dotX, cy: u }
        ];
      })()
    ]
  );
  if (i.tag === "Nothing")
    return Dl(t)(r);
  if (i.tag === "Just")
    return N((s) => (u) => {
      const c = o(u);
      return c.score < s.score ? c : s;
    })(o(i._1.head))(i._1.tail).chip;
  f();
}, BL = (t) => (n) => (e) => (r) => N((o) => (i) => {
  const s = GL(n)(i.chip)(o.obstacles), u = s.cx - s.hw >= t.minX + t.margin && s.cx + s.hw <= t.maxX - t.margin && s.cy - s.hh >= t.minY + t.margin && s.cy + s.hh <= t.maxY - t.margin ? s : RL(t)(o.obstacles)(i.chip)(s), c = u.cx - i.chip.cx, a = u.cy - i.chip.cy;
  return {
    resolved: Ft(o.resolved)({ chip: u, glyphs: H((l) => ({ ...l, cx: l.cx + c, cy: l.cy + a }))(i.glyphs) }),
    obstacles: Ft(o.obstacles)({ cx: u.cx, cy: u.cy, hw: u.hw, hh: u.hh })
  };
})({ resolved: [], obstacles: e })(r).resolved, S_ = (t) => t, Ql = /* @__PURE__ */ S_("Visible"), zL = /* @__PURE__ */ S_("Hidden");
function DL(t) {
  return t.readyState;
}
const QL = (t) => () => {
  const n = DL(t);
  return n === "visible" ? Ql : n === "hidden" ? zL : Ql;
}, HL = (t) => () => {
  const n = cu(), e = Tk(n)(), r = cu();
  let o = !0;
  const i = () => {
    const d = o, _ = QL(e)();
    return t(d && _ === "Visible")();
  }, s = Lc((d) => i)();
  Ec("visibilitychange")(s)(!1)(e)();
  const u = Lc((d) => () => (o = !1, i()))();
  Ec("blur")(u)(!1)(r)();
  const c = Sc("blur")(u)(!1)(r), a = Lc((d) => () => (o = !0, i()))();
  Ec("focus")(a)(!1)(r)();
  const l = Sc("focus")(a)(!1)(r);
  return () => (Sc("visibilitychange")(s)(!1)(e)(), c(), l());
};
function WL(t, n, e) {
  return e.then(t, n);
}
function Hl(t) {
  return Promise.resolve(t);
}
function OL(t, n, e) {
  return e instanceof Error ? t(e) : n;
}
const Bf = (t) => (n) => bw((e) => () => (WL(
  (r) => {
    const i = e(St("Right", r))();
    return Hl(i);
  },
  (r) => {
    const i = e(St("Left", t(r)))();
    return Hl(i);
  },
  n
), kw)), zf = (t) => {
  const n = OL(Ut, x, t), e = kp(yr)("String")(t), r = (() => {
    const o = (() => {
      if (e.tag === "Left")
        return x;
      if (e.tag === "Right")
        return J("Just", Zf(e._1));
      f();
    })();
    return n.tag === "Nothing" ? o : n;
  })();
  if (r.tag === "Nothing")
    return Zf("Promise failed, couldn't extract JS Error or String");
  if (r.tag === "Just")
    return r._1;
  f();
}, Wl = jn.createElement;
jn.Fragment;
function Or(t) {
  return (n) => Array.isArray(n.children) ? Wl.apply(null, [t, n].concat(n.children)) : Wl(t, n);
}
function qL(t) {
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
      const r = jn.forwardRef(
        (o, i) => t(n)(e(o, i))
      );
      return r.displayName = n, r;
    };
  };
}
const Df = /* @__PURE__ */ qL(Or), C_ = /* @__PURE__ */ Df("div")(), A_ = /* @__PURE__ */ Df("canvas")(), XL = (t, n) => {
  const e = jn.useRef(n);
  return e.current !== n && !t(e.current, n) && (e.current = n), e.current;
};
jn.memo;
jn.memo;
function Ol(t, n) {
  const [e, r] = jn.useState(
    typeof n == "function" ? () => n : n
  );
  return r.hasOwnProperty("$$reactBasicHooks$$cachedSetState") || (r.$$reactBasicHooks$$cachedSetState = (o) => () => r(o)), t(e, r.$$reactBasicHooks$$cachedSetState);
}
function mi(t, n, e) {
  const r = XL(t, n);
  jn.useEffect(e, [r]);
}
const Wn = jn.useRef;
function YL(t) {
  return t.current;
}
function UL(t, n) {
  t.current = n;
}
jn.useContext;
jn.useDebugValue;
jn.useId;
jn.useDeferredValue;
jn.useSyncExternalStore;
jn.useSyncExternalStore;
function Qf(t, n) {
  return n.displayName = t, n.toString = () => t, n;
}
jn.useEffectEvent || jn.experimental_useEffectEvent;
const fn = /* @__PURE__ */ Qi(UL), P_ = (t) => (n) => (e) => () => mi((r, o) => t.eq(r)(o), n, e), sn = /* @__PURE__ */ Yo(YL), VL = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, G_ = (t) => {
  const n = {
    apply: (e) => (r) => () => {
      const o = e(), i = r();
      return o(i);
    },
    Functor0: () => VL
  };
  return { pure: (e) => () => e, Apply0: () => n };
}, KL = () => typeof document < "u" && document.fonts ? document.fonts : null, Hf = (t) => {
  const n = KL();
  return n ? n.load(t).then(() => {
  }) : Promise.resolve();
}, ML = "attribute vec2 position; void main(){ gl_Position = vec4(position, 0.0, 1.0); }", jL = `
  #extension GL_OES_standard_derivatives : enable
  precision highp float;
  uniform vec2 uRes;
  uniform float uTime;
  uniform float uTilt;
  uniform int uNodeCount;
  uniform int uEdgeCount;
  uniform int uArrowCount;
  uniform vec4 uNodeRect[24];   // (cx, cy, w, h) in world space
  uniform float uNodeShape[24]; // markgraf Shape id
  uniform vec4 uEdge[48];       // (x1, y1, x2, y2) orthogonal route segments
  uniform vec4 uArrow[32];      // (tipX, tipY, dirX, dirY) one per edge
  uniform sampler2D uLabel;     // baked node-label atlas, one node-label per row
  uniform float uLabelAspect;   // atlas cell width/height, to keep glyphs square
  uniform float uLabelFadeStart; // labels only appear once their level has settled
  uniform vec2 uLabelDim[24];   // per node: (text width, text em height) as fractions
                                // of the atlas cell — so the band fits the TEXT, not
                                // the (uniform) box markgraf sizes every node to
  uniform float uLabelH[24];    // per node: label font height in world units, matching
                                // the camera policy rather than the node face size
  uniform float uUnit;          // a node's half-height in world units — the
                                // characteristic scale everything else is sized by
  uniform int uTokCount;        // active data-flow balls this frame
  uniform vec2 uTokPos[8];      // their centres, in world space
  uniform float uTokGlow[8];    // each ball's 0..1 overlap with the block it's in
  uniform vec2 uTokNode[8];     // the centre of that block, to light only it

  uniform float uCamZ;           // camera distance from scene (default 12)
  uniform float uCamPanX;        // world-space pan offset X
  uniform float uCamPanY;        // world-space pan offset Y
  uniform float uRotY;           // Y-axis orbit angle (right-drag)

  uniform float uActiveDepth;    // how deep the camera is now (0 root .. 1 one level in)
  uniform float uNodeDepth[24];  // each node's level depth
  uniform float uEdgeDepth[48];  // each edge segment's level depth
  uniform float uArrowDepth[32]; // each arrowhead's level depth

  uniform sampler2D uGlyphAtlas; // per-glyph atlas (one ASCII char per cell)
  uniform int uChipCount;        // floating label chips this frame
  uniform vec4 uChipRect[8];     // (cx, cy, hw, hh) in screen px
  uniform vec2 uChipDot[8];      // the dot each chip points at, screen px
  uniform int uGlyphCount;       // laid-out chip glyphs across all chips
  uniform vec4 uGlyphRect[40];   // (cx, cy, hw, hh) in screen px
  uniform float uGlyphCell[40];  // atlas cell index of each glyph
  uniform float uGlyphAlpha[40]; // typewriter reveal alpha of each glyph

  const int MAXN = 24;
  const int MAXE = 48;
  const int MAXA = 32;
  const int MAXTOK = 8;
  const int MAXG = 40;
  const float GCOLS = 16.0;
  const float GROWS = 6.0;
  // Sized from uUnit in main() so proportions hold for any diagram, whatever
  // scale the layout came back at.
  float DEPTH, EDGE_R, EDGE_HZ, ARROW_LEN, ARROW_HW;

  mat2 rot(float a){ float c=cos(a), s=sin(a); return mat2(c,-s,s,c); }
  // The texture v that samples atlas row (0-based, top to bottom) at within-cell
  // height ty (0 bottom .. 1 top), over rows rows. FLIP_Y on upload means
  // canvas-top maps to v=1, hence the 1.0 - ... form.
  float rowV(float row, float ty, float rows){ return 1.0 - (row + 1.0 - ty)/rows; }
  // How present an element of the given level depth is right now: full when the
  // camera sits at its level, fading to nothing one level away. So as a dive
  // carries uActiveDepth from 0 toward 1, the level being left (depth 0) dissolves
  // while the level being entered (depth 1) resolves.
  float visForDepth(float depth){ return clamp(1.0 - abs(uActiveDepth - depth), 0.0, 1.0); }

  float sdSphere(vec3 p,float r){ return length(p)-r; }
  float sdRoundBox(vec3 p, vec3 b, float r){ vec3 q=abs(p)-b; return length(max(q,0.))+min(max(q.x,max(q.y,q.z)),0.)-r; }
  float sdBox2(vec2 p, vec2 b){ vec2 d=abs(p)-b; return length(max(d,0.))+min(max(d.x,d.y),0.); }
  float sdRoundRect2(vec2 p, vec2 b, float r){ vec2 q=abs(p)-b+r; return min(max(q.x,q.y),0.)+length(max(q,0.))-r; }
  float sdEll2(vec2 p, vec2 r){ float k1=length(p/r); float k2=length(p/(r*r)); return k1*(k1-1.0)/k2; }
  float ndot(vec2 a, vec2 b){ return a.x*b.x - a.y*b.y; }
  float sdRhombus2(vec2 p, vec2 b){
    p = abs(p);
    float h = clamp(ndot(b - 2.0*p, b) / dot(b,b), -1.0, 1.0);
    float d = length(p - 0.5*b*vec2(1.0-h, 1.0+h));
    return d * sign(p.x*b.y + p.y*b.x - b.x*b.y);
  }
  // Parallelogram: a box of half-size (wi,he) sheared horizontally by sk. (IQ.)
  float sdParallelogram2(vec2 p, float wi, float he, float sk){
    vec2 e = vec2(sk, he);
    p = (p.y < 0.0) ? -p : p;
    vec2 w = p - e; w.x -= clamp(w.x, -wi, wi);
    vec2 d = vec2(dot(w,w), -w.y);
    float s = p.x*e.y - p.y*e.x;
    p = (s < 0.0) ? -p : p;
    vec2 v = p - vec2(wi, 0.0); v -= e*clamp(dot(v,e)/dot(e,e), -1.0, 1.0);
    d = min(d, vec2(dot(v,v), wi*he - abs(s)));
    return sqrt(d.x)*sign(-d.y);
  }
  // Document: a rectangle whose bottom edge droops in a single wave (a page).
  float sdDocument2(vec2 p, vec2 he){
    float amp = he.y*0.16;
    float waveY = -he.y + amp + amp*cos(p.x/he.x*3.14159265);
    float box = sdBox2(p, he);
    return max(box, waveY - p.y);   // carve everything below the wave
  }
  // extrude a 2D distance d2 into a z-slab of half-thickness hz
  float extr(float d2, float pz, float hz){ vec2 w=vec2(d2, abs(pz)-hz); return min(max(w.x,w.y),0.)+length(max(w,0.)); }
  float smin(float a,float b,float k){ float h=clamp(0.5+0.5*(b-a)/k,0.,1.); return mix(b,a,h)-k*h*(1.-h); }

  // A node's silhouette, by markgraf Shape id, centred at the origin with half
  // extents he. Anything unrecognised falls back to a rounded rectangle.
  float nodeShapeDist(int sh, vec3 q, vec2 he){
    if(sh==1){ // Cylinder: straight body with elliptical caps (a side-view can)
      float bodyH = he.y*0.74, capH = he.y*0.26;
      float body = sdBox2(q.xy, vec2(he.x, bodyH));
      float top  = sdEll2(q.xy - vec2(0.0,  bodyH), vec2(he.x, capH));
      float bot  = sdEll2(q.xy - vec2(0.0, -bodyH), vec2(he.x, capH));
      return extr(min(min(body, top), bot), q.z, DEPTH);
    }
    if(sh==2) return extr(sdParallelogram2(q.xy, he.x*0.78, he.y, he.y*0.5), q.z, DEPTH); // Parallelogram
    if(sh==3) return extr(sdRhombus2(q.xy, he), q.z, DEPTH);       // Diamond
    if(sh==4) return extr(sdEll2(q.xy, he), q.z, DEPTH);            // Ellipse
    if(sh==5) return extr(sdDocument2(q.xy, he), q.z, DEPTH);       // Document
    if(sh==6){ // Cloud: a smooth union of lobes over a flat base
      float r = he.y;
      float d = sdSphere(q - vec3(-he.x*0.55, 0.0, 0.0), r*0.78);
      d = smin(d, sdSphere(q - vec3(-he.x*0.12,  he.y*0.30, 0.0), r*0.95), r*0.5);
      d = smin(d, sdSphere(q - vec3( he.x*0.35,  he.y*0.10, 0.0), r*0.85), r*0.5);
      d = smin(d, sdSphere(q - vec3( he.x*0.62, -he.y*0.05, 0.0), r*0.62), r*0.5);
      d = smin(d, sdRoundBox(q - vec3(0.0, -he.y*0.5, 0.0), vec3(he.x*0.9, he.y*0.22, DEPTH), r*0.2), r*0.5);
      return d;
    }
    return sdRoundBox(q, vec3(he.x, he.y, DEPTH), min(he.x,he.y)*0.18); // Rectangle
  }

  // Nearest node. The winner's shape, row index and rect are carried out of the
  // loop (WebGL1 forbids indexing uNode* with a non-loop index, so they can't be
  // looked up again afterwards).
  float mapNodeFull(vec3 p, out float nshape, out float nidx, out vec4 nrect, out vec2 nldim, out float ndepth, out float nlabelH){
    float d = 1e9; nshape = -1.0; nidx = -1.0; nrect = vec4(0.0); nldim = vec2(0.0); ndepth = 0.0; nlabelH = 0.0;
    for(int i=0;i<MAXN;i++){
      if(i>=uNodeCount) break;
      float vis = visForDepth(uNodeDepth[i]);
      if(vis < 0.02) continue;                 // wholly faded — skip (no label either)
      vec4 r = uNodeRect[i];
      float sh = uNodeShape[i];
      // Flatten the slab in Z by vis as it fades — keeping its full footprint, so
      // it never shrinks in-plane (the camera zoom is what should make it grow as
      // you dive in). The level being dived past thins to a lid and lifts away,
      // letting the interior nested inside it — which keeps its own thickness —
      // poke through in front. vis>=0.02 here (smaller is culled above).
      float nd = vis * nodeShapeDist(int(sh+0.5), vec3(p.xy - vec2(r.x, r.y), p.z/vis), r.zw*0.5);
      if(nd < d){ d = nd; nshape = sh; nidx = float(i); nrect = r; nldim = uLabelDim[i]; ndepth = uNodeDepth[i]; nlabelH = uLabelH[i]; }
    }
    return d;
  }
  float mapNode(vec3 p){ float a, b, f, h; vec4 c; vec2 e; return mapNodeFull(p, a, b, c, e, f, h); }

  float sdSeg2(vec2 p, vec2 a, vec2 b, float r){
    vec2 pa=p-a, ba=b-a; float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.);
    return length(pa-ba*h)-r;
  }
  // Exact round-cone SDF (a capsule with a different radius at each end). Used to
  // stretch a travelling ball into a teardrop without breaking the distance field
  // the way a scaled sphere would. (Inigo Quilez.)
  float sdRoundCone(vec3 p, vec3 a, vec3 b, float r1, float r2){
    vec3 ba = b - a; float l2 = dot(ba,ba); float rr = r1 - r2;
    float a2 = l2 - rr*rr; float il2 = 1.0/l2;
    vec3 pa = p - a; float y = dot(pa,ba); float z = y - l2;
    vec3 xp = pa*l2 - ba*y; float x2 = dot(xp,xp);
    float y2 = y*y*l2; float z2 = z*z*l2;
    float k = sign(rr)*rr*rr*x2;
    if(sign(z)*a2*z2 > k) return sqrt(x2+z2)*il2 - r2;
    if(sign(y)*a2*y2 < k) return sqrt(x2+y2)*il2 - r1;
    return (sqrt(x2*a2*il2)+y*rr)*il2 - r1;
  }
  // Extruded triangular arrowhead, tip at tip, pointing along unit dir.
  // Rounded and given real z-depth so it reads as a little volume that the ball
  // smooth-unions with cleanly, rather than a thin flat sliver.
  float arrowHead(vec3 p, vec2 tip, vec2 dir){
    vec2 n = vec2(-dir.y, dir.x);
    vec2 q = p.xy - tip;
    float along = dot(q, dir);           // <=0 behind the tip
    float side  = abs(dot(q, n));
    float tFrac = clamp(-along/ARROW_LEN, 0.0, 1.0);
    float d2 = max(max(side - ARROW_HW*tFrac, along), -along - ARROW_LEN) - uUnit*0.05;
    return extr(d2, p.z, uUnit*0.28);
  }
  float mapLines(vec3 p){
    float d = 1e9;
    for(int i=0;i<MAXE;i++){
      if(i>=uEdgeCount) break;
      float vis = visForDepth(uEdgeDepth[i]);
      if(vis < 0.02) continue;
      vec4 e = uEdge[i];
      d = min(d, extr(sdSeg2(p.xy, e.xy, e.zw, EDGE_R*vis), p.z, EDGE_HZ*vis));  // thin out as it fades
    }
    return d;
  }
  float mapArrows(vec3 p){
    float d = 1e9;
    for(int i=0;i<MAXA;i++){
      if(i>=uArrowCount) break;
      float vis = visForDepth(uArrowDepth[i]);
      if(vis < 0.02) continue;
      vec4 ar = uArrow[i];
      // Shrink the head about its tip (the point pinned to the node surface) as it
      // fades, matching the node and edge it belongs to.
      vec3 ps = vec3(ar.xy, 0.0) + (p - vec3(ar.xy, 0.0))/vis;
      d = min(d, vis * arrowHead(ps, ar.xy, ar.zw));
    }
    return d;
  }
  float mapEdge(vec3 p){ return min(mapLines(p), mapArrows(p)); }

  // A travelling ball centred at q's origin, swollen a little by its overlap. As
  // it straddles a node surface (glow ~0.5) it stretches into a teardrop reaching
  // toward the node centre (toNode) — as if the block were swallowing it through
  // the arrow tip — then rounds back to a sphere once fully inside (glow ~1).
  // The uniform-array indexing must happen at the call site (a loop symbol), never
  // via a passed-in index — WebGL1 forbids the latter.
  float tokenBall(vec3 q, float glow, vec2 toNode){
    float r = uUnit*0.30 * (1.0 + glow*0.6);
    float s = 4.0*glow*(1.0 - glow);            // 0 at the ends, 1 mid-crossing
    if(s < 0.02) return sdSphere(q, r);
    vec3 dir = vec3(normalize(toNode + vec2(1e-5, 0.0)), 0.0);
    vec3 tipEnd = dir * (uUnit * 1.1 * s);      // far end reaches into the block
    return sdRoundCone(q, vec3(0.0), tipEnd, r, r*0.32);
  }
  // The whole scene, after tilting the world about x so the slabs show depth.
  // Each ball genie-merges with the nearest block (a generous blend that stretches
  // into a thinning, pinching neck) and fuses with the edge it rides.
  float map(vec3 p){
    p.xz = rot(uRotY) * p.xz;
    p.yz = rot(uTilt) * p.yz;
    float nodes = mapNode(p);
    float lines = mapLines(p);
    float arrows = mapArrows(p);
    float d = min(nodes, min(lines, arrows));
    for(int i=0;i<MAXTOK;i++){
      if(i>=uTokCount) break;
      vec3 c = p - vec3(uTokPos[i], 0.0);
      float tok = tokenBall(c, uTokGlow[i], uTokNode[i] - uTokPos[i]);
      // Local proximity to the ball (drives the arrowhead bulge at the entry).
      float prox = 1.0 - smoothstep(0.0, uUnit*2.2, length(c));
      // The whole node the ball is inside puffs up by its overlap (glow), so every
      // face swells — including the x faces the ball never gets near, since edges
      // arrive top/bottom. Spread across the node, not just the entry point.
      float nodeProx = 1.0 - smoothstep(uUnit*1.5, uUnit*4.0, length(p - vec3(uTokNode[i], 0.0)));
      float nodeBulge = uUnit*0.2 * max(prox, uTokGlow[i]*nodeProx);
      d = min(d, smin(nodes - nodeBulge, tok, uUnit*0.6));
      d = min(d, smin(lines, tok, uUnit*0.7));
      d = min(d, smin(arrows - uUnit*0.12*prox, tok, uUnit*0.8));
    }
    return d;
  }
  vec3 calcNormal(vec3 p){ vec2 e=vec2(0.0015,0.); return normalize(vec3(map(p+e.xyy)-map(p-e.xyy), map(p+e.yxy)-map(p-e.yxy), map(p+e.yyx)-map(p-e.yyx))); }
  float calcAO(vec3 p, vec3 n){ float occ=0., sca=1.; for(int i=0;i<5;i++){ float h=0.01+0.12*float(i)/4.; occ+=(h-map(p+n*h))*sca; sca*=0.9; } return clamp(1.-2.2*occ,0.,1.); }

  // Neutral light blocks (the orange belongs to the travelling ball); a faint
  // variation by shape keeps them from looking flat.
  vec3 nodeTint(int sh){
    if(sh==1) return vec3(0.66,0.67,0.71);  // cylinder
    if(sh==6) return vec3(0.74,0.75,0.78);  // cloud
    if(sh==3) return vec3(0.70,0.69,0.68);  // diamond
    if(sh==4) return vec3(0.67,0.72,0.71);  // ellipse
    if(sh==2) return vec3(0.72,0.69,0.74);  // parallelogram
    if(sh==5) return vec3(0.74,0.72,0.68);  // document
    return vec3(0.70,0.70,0.73);            // rectangle
  }

  void main(){
    DEPTH = uUnit*0.42; EDGE_R = uUnit*0.16; EDGE_HZ = uUnit*0.12;
    ARROW_LEN = uUnit*0.55; ARROW_HW = uUnit*0.34;

    vec2 uv = (gl_FragCoord.xy - 0.5*uRes)/uRes.y;
    vec3 ro = vec3(uCamPanX, uCamPanY, uCamZ);
    vec3 rd = normalize(vec3(uv*1.5, -1.5));

    float t = 0.0; bool hit = false; vec3 p;
    for(int i=0;i<96;i++){
      p = ro + rd*t;
      float d = map(p);
      if(d < 0.001){ hit = true; break; }
      t += d*0.85;
      if(t > 30.0) break;
    }

    // background: a soft dark vertical wash with a faint vignette
    vec3 bg = mix(vec3(0.05,0.05,0.06), vec3(0.10,0.10,0.12), uv.y*0.5+0.5);
    bg *= 1.0 - 0.25*dot(uv,uv);
    vec3 col = bg;
    // z of the hit point in the tilted world frame — front faces have z > 0 and
    // should occlude chip labels; background / back faces leave chips visible.
    float hitZ = -1e9;

    if(hit){
      vec3 n = calcNormal(p);
      // classify the hit (node vs edge) and recover the winning node
      vec3 pw = p; pw.xz = rot(uRotY) * pw.xz; pw.yz = rot(uTilt) * pw.yz;
      hitZ = pw.z;
      float nshape, nidx, ndepth, nlabelH; vec4 nrect; vec2 nldim;
      float dn = mapNodeFull(pw, nshape, nidx, nrect, nldim, ndepth, nlabelH); float de = mapEdge(pw);
      bool isNode = dn <= de;

      // The install button's glassy material, tinted: diffuse + glossy spec, a
      // subtle rim, a fresnel mix toward a cool glass reflection, and a sharp
      // clearcoat highlight on top.
      vec3 v = -rd;
      vec3 key  = normalize(vec3(0.55, 0.8, 0.7));
      vec3 fill = normalize(vec3(-0.6, 0.25, 0.5));
      float ao = calcAO(p, n);
      float difKey  = clamp(dot(n,key), 0.0, 1.0);
      float difFill = clamp(dot(n,fill), 0.0, 1.0);
      float fres = pow(1.0 - clamp(dot(n,v),0.,1.), 3.0);
      vec3 hlf = normalize(key + v);
      float spec = pow(clamp(dot(n,hlf),0.,1.), 60.0);
      vec3 refl = reflect(rd, n);

      vec3 base = isNode ? nodeTint(int(nshape+0.5)) : vec3(0.40,0.42,0.47); // edges/arrows grey
      col = base*(0.62 + 0.46*difKey + 0.22*difFill) * (0.82 + 0.18*ao);
      col += vec3(1.0)*spec*0.4;                  // glossy highlight
      col += base*fres*0.3;                       // subtle rim
      vec3 glass = mix(vec3(0.10,0.11,0.16), vec3(0.74,0.76,0.85), clamp(refl.y*0.5+0.5,0.,1.));
      col = mix(col, glass, fres*0.45);
      float cc = pow(clamp(dot(n,hlf),0.,1.), 230.0); col += cc*0.9;

      // the block a ball is inside lights up warm and whole (gated by matching the
      // ball's block centre, so only that block lights); the edge a ball rides
      // lights along the stretch near it.
      if(isNode){
        float glow = 0.0;
        for(int i=0;i<MAXTOK;i++){
          if(i>=uTokCount) break;
          if(distance(uTokNode[i], nrect.xy) < uUnit*0.6) glow = max(glow, uTokGlow[i]);
        }
        col += vec3(1.0,0.6,0.26) * glow * (0.9 + 0.5*difKey);
      } else {
        float glow = 0.0;
        for(int i=0;i<MAXTOK;i++){
          if(i>=uTokCount) break;
          glow = max(glow, 1.0 - smoothstep(0.0, uUnit*1.8, distance(pw, vec3(uTokPos[i], 0.0))));
        }
        col += vec3(1.0,0.55,0.22) * glow * 0.7;
      }

      // label: stamp the node's atlas row onto its front face. The band is sized
      // in world units (a fixed height, width = height*cellAspect) and centred on
      // the node, so a texel stays square whatever the node's own aspect is.
      if(isNode){
        vec3 q = pw - vec3(nrect.x, nrect.y, 0.0);
        // Labels use the same world font height the shared camera policy uses,
        // rather than being a proportion of the shape face. The face still masks
        // them, but camera zoom no longer turns the whole face into giant text.
        float wf = nldim.x;                       // text width  / cell width
        float hf = nldim.y;                       // text em     / cell height
        float aspect = hf > 0.0 ? (wf / hf) * uLabelAspect : 1.0;  // text px aspect
        float bandH = max(nlabelH, 1e-4);
        float bandW = bandH * aspect;
        float inCell = step(abs(q.x), 0.5*bandW) * step(abs(q.y), 0.5*bandH);
        // map the band onto the text's centred sub-rect of the cell
        vec2 tc = vec2(0.5 + (q.x/bandW)*wf, 0.5 + (q.y/bandH)*hf);
        // Gate on the surface normal in the rotated frame so the label only
        // appears where the face genuinely points toward the camera.
        vec3 n_pw = n;
        n_pw.xz = rot(uRotY) * n_pw.xz;
        n_pw.yz = rot(uTilt) * n_pw.yz;
        float front = pow(max(0.0, n_pw.z), 2.0);
        float settled = smoothstep(uLabelFadeStart, 1.0, visForDepth(ndepth));
        float a = texture2D(uLabel, vec2(tc.x, rowV(nidx, tc.y, float(uNodeCount)))).a * inCell * front * settled;
        col = mix(col, vec3(0.03,0.03,0.05), a);
      }

      // tokens: tint everything within a ball (and its bulge) warm orange, with
      // an emissive lift — so the balls read on top of the blocks.
      float ti = 0.0;
      for(int i=0;i<MAXTOK;i++){
        if(i>=uTokCount) break;
        ti = max(ti, 1.0 - smoothstep(-uUnit*0.2, uUnit*0.85, tokenBall(pw - vec3(uTokPos[i], 0.0), uTokGlow[i], uTokNode[i] - uTokPos[i])));
      }
      vec3 tokCol = vec3(1.0, 0.55, 0.18);
      col = mix(col, tokCol, ti);
      col += tokCol * ti * 0.45;
    }

    // ---- world-space chip cards (pill + typewriter glyphs on a plane in the scene) -
    // Intersect the camera ray with a world plane at z = zChip (in the rotated/tilted
    // world frame the nodes live in), then draw the pill and glyphs in world coords
    // there. So the chip is a card IN the scene that orbits, tilts and zooms with
    // everything — not a flat overlay that always faces the camera. uChipRect and
    // uGlyphRect are world (x,y,hw,hh); the dot it rides is at z = 0.
    {
    vec3 pwRo = ro; pwRo.xz = rot(uRotY)*pwRo.xz; pwRo.yz = rot(uTilt)*pwRo.yz;
    vec3 pwRd = rd; pwRd.xz = rot(uRotY)*pwRd.xz; pwRd.yz = rot(uTilt)*pwRd.yz;
    float zChip = uUnit*0.5;                                 // float just in front of the slabs
    float tChip = (zChip - pwRo.z) / pwRd.z;
    if(abs(pwRd.z) > 1e-4 && tChip > 0.0){
    vec2 P = pwRo.xy + tChip*pwRd.xy;                        // ray ∩ chip plane, world coords
    for(int i=0;i<MAXTOK;i++){
      if(i>=uChipCount) break;
      vec4 cr = uChipRect[i];
      float dPill = sdRoundRect2(P - cr.xy, cr.zw, min(cr.z, cr.w)*0.54);
      float fw = fwidth(dPill);
      float fill = 1.0 - smoothstep(-fw, fw, dPill);
      col = mix(col, vec3(0.99, 0.97, 0.92), fill);          // warm card
      float border = (1.0 - smoothstep(-fw, fw, abs(dPill) - cr.w*0.07)) * fill;
      col = mix(col, vec3(0.72, 0.69, 0.62), border*0.5);
    }
    for(int k=0;k<MAXG;k++){
      if(k>=uGlyphCount) break;
      vec4 gr = uGlyphRect[k];
      vec2 loc = (P - gr.xy)/gr.zw;                          // [-1,1] within the cell
      if(abs(loc.x) <= 1.0 && abs(loc.y) <= 1.0){
        vec2 cell = loc*0.5 + 0.5;                           // [0,1]
        float idx = uGlyphCell[k];
        float gcol = mod(idx, GCOLS);
        float grow = floor(idx / GCOLS);
        float u = (gcol + cell.x)/GCOLS;
        float vv = rowV(grow, cell.y, GROWS);
        float a = texture2D(uGlyphAtlas, vec2(u, vv)).a * uGlyphAlpha[k];
        col = mix(col, vec3(0.10,0.08,0.06), a);             // dark ink
      }
    }
    }
    }

    gl_FragColor = vec4(col, 1.0);
  }
`, ZL = (t, n, e, r, o) => {
  const i = (a) => {
    a.preventDefault(), n(a.deltaX)(a.deltaY)(a.ctrlKey ? 1 : 0)();
  }, s = (a) => {
    a.preventDefault(), e(a.clientX)(a.clientY)();
  }, u = (a) => r(a.clientX)(a.clientY)(a.buttons)(a.shiftKey ? 1 : 0)(), c = (a) => o(a.clientX)(a.clientY)();
  return t.addEventListener("wheel", i, { passive: !1 }), t.addEventListener("pointerdown", s), window.addEventListener("pointermove", u), window.addEventListener("pointerup", c), () => {
    t.removeEventListener("wheel", i), t.removeEventListener("pointerdown", s), window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", c);
  };
}, jt = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, t5 = (t) => (n) => (e) => {
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
}, I_ = /* @__PURE__ */ (() => {
  const t = Qr.traverse(go);
  return (n) => (e) => t(e)(n);
})(), pe = (t) => (n) => {
  const e = rt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, n5 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ga = /* @__PURE__ */ N(co)(0), e5 = (t) => N((n) => (e) => {
  if (n.tag === "Nothing")
    return J("Just", e);
  if (n.tag === "Just")
    return J("Just", t(n._1)(e) === "LT" ? n._1 : e);
  f();
})(x), r5 = /* @__PURE__ */ Np(go)(Da), o5 = /* @__PURE__ */ Bi(go)(ha), ql = (t) => (n) => (e) => {
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
}, i5 = G_().pure, s5 = /* @__PURE__ */ Or(C_), u5 = /* @__PURE__ */ Or(A_), Xl = (t) => (n) => {
  const e = Ge(t);
  if (e.tag === "Just") {
    const r = Ge(e._1.init);
    if (r.tag === "Just")
      return J("Just", n(r._1.last)(e._1.last));
    if (r.tag === "Nothing")
      return x;
    f();
  }
  if (e.tag === "Nothing")
    return x;
  f();
}, Yl = (t) => (n) => (e) => ({ chip: { ...e.chip, cx: e.chip.cx + t, cy: e.chip.cy + n }, glyphs: H((r) => ({ ...r, cx: r.cx + t, cy: r.cy + n }))(e.glyphs) }), c5 = /* @__PURE__ */ Sp(ZL), a5 = (t) => ({ cx: t.x, cy: t.y, hw: t.hw, hh: t.hh }), fu = (t) => (n) => (e) => ({ cx: t.cx + (n.cx - t.cx) * e, cy: t.cy + (n.cy - t.cy) * e, hw: t.hw * Ro(n.hw / jt(1e-4)(t.hw))(e), hh: t.hh * Ro(n.hh / jt(1e-4)(t.hh))(e) }), Zr = (t) => (n) => Hn((n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y)), f5 = (t) => (n) => {
  const e = (r) => jt(0)(1 - Zr(n)({ x: r.x, y: r.y }) / (jt(r.hw)(r.hh) + t.ballRadius));
  return N((r) => (o) => e(o) > r.glow ? { glow: e(o), x: o.x, y: o.y } : r)({ glow: 0, x: 0, y: 0 })(t.worldNodes);
}, l5 = (t) => (n) => (e) => (r) => (o) => {
  const i = Ma({ width: n, height: e })((() => {
    const c = Oi(r)(o);
    return { vx: c.x, vy: c.y, vw: c.w, vh: c.h };
  })()), s = (i.vx + i.vw / 2 - t.midX) * t.scaleFactor, u = -(i.vy + i.vh / 2 - t.midY) * t.scaleFactor;
  return {
    centerX: s,
    centerY: u,
    camZ: i.vh * t.scaleFactor,
    viewport: { cx: s, cy: u, hw: i.vw * t.scaleFactor / 2, hh: i.vh * t.scaleFactor / 2 }
  };
}, g5 = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (t.cameraSchedule.tag === "Just") {
    const s = d1({ widthPx: e, heightPx: r })(t.cameraSchedule._1), u = Va(s.cameraConfig)(s.layout)(s.cameraSpans)(i).camera, c = (() => {
      if (n.tag === "Nothing")
        return u;
      if (n.tag === "Just")
        return Ug(s.cameraConfig.cameraDecay)(o)(n._1)(u);
      f();
    })();
    return J("Just", { camera: c, world: l5(t)(e)(r)(s.layout)(c) });
  }
  if (t.cameraSchedule.tag === "Nothing")
    return x;
  f();
}, Mu = "500 " + rn(Nn(lr(144))) + "px Ilisarniq, ui-sans-serif, system-ui, sans-serif", Wf = /* @__PURE__ */ vt((t) => t)(/* @__PURE__ */ H(Om)(/* @__PURE__ */ Ht(32, 126))), d5 = Je((Wf.length + 16 | 0) - 1 | 0, 16), _5 = (t) => M(t5(0)(Wf.length - 1 | 0)(Ve(t) - 32 | 0)), Ul = M(16) * 76, Vl = M(d5) * 100, Kl = () => {
  const t = Ff();
  ya(t)(Ul)(), va(t)(Vl)();
  const n = pu(t)();
  Ja(n)({ x: 0, y: 0, width: Ul, height: Vl })(), Na(n)("#fff")(), mu(n)("500 64px Ilisarniq, ui-sans-serif, system-ui, sans-serif")(), Ba(n)(Ca)(), Ra(n)(Sa)(), Rf(n)("normal")();
  const e = I_(Bt(Mn)(Wf))((r) => {
    const o = Di(r._2), i = ba(n)(o)(M(pr(r._1)(16)) * 76 + 38)(M(Je(r._1, 16)) * 100 + 50);
    return () => (i(), kg(n)(o)().width / 64);
  })();
  return { canvas: t, advances: e };
}, Ml = (t) => (n) => 2.36 * jt(t.hw / jt(0.2)(n))(t.hh), h5 = (t) => (n) => (e) => () => {
  const r = Kl();
  au(t)(n)(r.canvas)(1)(), fn(e)(r.advances)(), hf(
    pf,
    ro(ro(oo(() => Hf("500 64px Ilisarniq, ui-sans-serif, system-ui, sans-serif")))(Bf(zf)))(() => oo(() => {
      const i = Kl();
      return au(t)(n)(i.canvas)(1)(), fn(e)(i.advances)();
    }))
  )().run();
}, p5 = (t) => (n) => (e) => (r) => r < 0.31999999999999995 ? fu(n)(e.parent)((() => {
  const o = r / 0.31999999999999995;
  return o * o * (3 - 2 * o);
})()) : fu(e.parent)(t)((() => {
  const o = (r - 0.31999999999999995) / 0.68;
  return o * o * (3 - 2 * o);
})()), m5 = (t) => (n) => (e) => e < 0.68 ? fu(t)(n.parent)((() => {
  const r = e / 0.68;
  return r * r * (3 - 2 * r);
})()) : fu(n.parent)(n.child)((() => {
  const r = (e - 0.68) / 0.31999999999999995;
  return r * r * (3 - 2 * r);
})()), $5 = (t) => (n) => (e) => (r) => e.dir > 0.5 ? m5(n)(e)(r) : p5(t)(n)(e)(r), F_ = (t) => (n) => jt(0)(pe(1)((n - t.startT) / jt(1e-4)(t.endT - t.startT))), y5 = (t) => (n) => (e) => N((r) => (o) => e <= o.startT ? r : $5(t)(r)(o)(F_(o)(e)))(t)(n), v5 = (t) => (n) => {
  if (t.dir > 0.5) {
    const r = jt(0)(pe(1)((n - 0.68) / 0.31999999999999995));
    return r * r * (3 - 2 * r);
  }
  const e = jt(0)(pe(1)(n / 0.31999999999999995));
  return e * e * (3 - 2 * e);
}, x5 = (t) => (n) => N((e) => (r) => n <= r.startT ? e : n >= r.endT ? r.dir > 0.5 ? e + 1 : e + -1 : e + (r.dir > 0.5 ? 1 : -1) * v5(r)(F_(r)(n)))(0)(t), N5 = (t) => (n) => {
  const e = 1 - t.holdPre - t.holdPost;
  return e <= 0 ? n < 0.5 ? 0 : 1 : jt(0)(pe(1)((n - t.holdPre) / e));
}, w5 = (t) => (n) => (e) => {
  const r = jt(0)(pe(1)((t * M(n + 1 | 0) - M(e)) / 1.5));
  return r * r * (3 - 2 * r);
}, T5 = (t) => (n) => {
  const e = n.length === 0 ? [""] : n, r = H((d) => M(n5(1)(Fe(d))))(e), o = jt(1)(ga(r)), i = t * o, u = ((d) => (_) => (g) => {
    let p = d, m = _, h = g, $ = !0, y;
    for (; $; ) {
      const v = p, w = m, b = zt((L) => x, (L) => (C) => J("Just", { head: L, tail: C }), h);
      if (b.tag === "Nothing") {
        $ = !1, y = e.length - 1 | 0;
        continue;
      }
      if (b.tag === "Just") {
        if (w + b._1.head >= i) {
          $ = !1, y = v;
          continue;
        }
        p = v + 1 | 0, m = w + b._1.head, h = b._1.tail;
        continue;
      }
      f();
    }
    return y;
  })(0)(0)(r), c = ga(u < 1 ? [] : bt(0, u, r)), a = c / o;
  if (u >= 0 && u < r.length) {
    const d = (c + r[u]) / o;
    return { line: u >= 0 && u < e.length ? e[u] : "", phase: d <= a ? 1 : jt(0)(pe(1)((t - a) / (d - a))) };
  }
  const l = (c + 1) / o;
  return { line: u >= 0 && u < e.length ? e[u] : "", phase: l <= a ? 1 : jt(0)(pe(1)((t - a) / (l - a))) };
}, J5 = (t) => (n) => {
  const e = Ln(Mn, t, bt(1, t.length, t));
  return ((o) => (i) => {
    let s = o, u = i, c = !0, a;
    for (; c; ) {
      const l = s, _ = zt((g) => x, (g) => (p) => J("Just", { head: g, tail: p }), u);
      if (_.tag === "Nothing") {
        const g = t.length - 1 | 0;
        if (g >= 0 && g < t.length) {
          c = !1, a = t[g];
          continue;
        }
        c = !1, a = { x: 0, y: 0 };
        continue;
      }
      if (_.tag === "Just") {
        if (_._1.tail.length === 0 || l <= Zr(_._1.head._1)(_._1.head._2)) {
          const g = Zr(_._1.head._1)(_._1.head._2), p = g <= 0 ? 0 : l / g;
          c = !1, a = { x: _._1.head._1.x + (_._1.head._2.x - _._1.head._1.x) * p, y: _._1.head._1.y + (_._1.head._2.y - _._1.head._1.y) * p };
          continue;
        }
        s = l - Zr(_._1.head._1)(_._1.head._2), u = _._1.tail;
        continue;
      }
      f();
    }
    return a;
  })(jt(0)(pe(1)(n)) * N((o) => (i) => o + Zr(i._1)(i._2))(0)(e))(e);
}, b5 = (t) => (n) => H((e) => {
  const r = N5(e)((n - e.startT) / (e.endT - e.startT)), o = J5(e.path)(r), i = f5(t)(o);
  return { x: o.x, y: o.y, glow: i.glow, nx: i.x, ny: i.y, labels: e.labels, motionT: r, startT: e.startT, path: e.path };
})(bt(0, 8, lt((e) => n >= e.startT && n < e.endT, t.tokenFlows))), k5 = (t) => {
  const n = If(t);
  if (n.tag === "Left")
    return x;
  if (n.tag === "Right") {
    const e = Xu(n._1)(qu)._1;
    if (e.tag === "Left")
      return x;
    if (e.tag === "Right") {
      const r = rf(Ju)(nf)(e._1)(Fu(R)(R)(e._1));
      if (r.tag === "Left")
        return x;
      if (r.tag === "Right")
        return J("Just", r._1);
    }
  }
  f();
}, L5 = (t) => {
  const n = CL(t), e = k5(t), r = (() => {
    if (e.tag === "Nothing")
      return Ju;
    if (e.tag === "Just")
      return e._1.cameraConfig;
    f();
  })(), o = N((h) => ($) => ({ minX: pe(h.minX)($.x - $.w / 2), maxX: jt(h.maxX)($.x + $.w / 2), minY: pe(h.minY)($.y - $.h / 2), maxY: jt(h.maxY)($.y + $.h / 2) }))({ minX: 1e9, maxX: -1e9, minY: 1e9, maxY: -1e9 })(n.nodes), i = (o.minX + o.maxX) / 2, s = (o.minY + o.maxY) / 2, u = 6.6 / jt(o.maxX - o.minX)(o.maxY - o.minY), c = H((h) => ({ pts: H(($) => ({ x: ($.x - i) * u, y: -($.y - s) * u }))(h.points), depth: M(h.depth), arrowhead: h.arrowhead }))(n.edges), a = H((h) => ({
    x: (h.x - i) * u,
    y: -(h.y - s) * u,
    hw: h.w / 2 * u,
    hh: h.h / 2 * u,
    shape: M(h.shape),
    depth: M(h.depth),
    labelH: r.labelBasePx * h.labelScale * u
  }))(n.nodes), l = (h) => {
    const $ = e5(/* @__PURE__ */ (() => {
      const y = (v) => (h.x - v.x) * (h.x - v.x) + (h.y - v.y) * (h.y - v.y);
      return (v) => (w) => rt.compare(y(v))(y(w));
    })())(a);
    if ($.tag === "Just")
      return { x: $._1.x, y: $._1.y };
    if ($.tag === "Nothing")
      return h;
    f();
  }, d = a.length, _ = d === 0 ? 0.1 : N((h) => ($) => h + $.hh)(0)(a) / M(d), g = (h) => {
    const $ = lt((y) => y.depth === h, a);
    return $.length === 0 ? _ : N((y) => (v) => y + v.hh)(0)($) / M($.length);
  }, p = g(0), m = xt(c)((h) => H(($) => ({ seg: [$._1.x, $._1.y, $._2.x, $._2.y], depth: h.depth }))((() => {
    const $ = (() => {
      if (h.arrowhead) {
        const y = Xl(h.pts)(Mn);
        if (y.tag === "Just") {
          const v = Zr(y._1._1)(y._1._2);
          if (v > 1e-6) {
            const w = Ge(h.pts);
            if (w.tag === "Just") {
              const T = pe(_ * g(h.depth) / jt(1e-4)(p) * 0.05 + _ * g(h.depth) / jt(1e-4)(p) * 0.55)(v * 0.95);
              return Ft(w._1.init)({ x: y._1._2.x - (y._1._2.x - y._1._1.x) / v * T, y: y._1._2.y - (y._1._2.y - y._1._1.y) / v * T });
            }
            if (w.tag === "Nothing")
              return h.pts;
            f();
          }
          return h.pts;
        }
        if (y.tag === "Nothing")
          return h.pts;
        f();
      }
      return h.pts;
    })();
    return Ln(Mn, $, bt(1, $.length, $));
  })()));
  return {
    nodeList: n.nodes,
    worldNodes: a,
    halfW: N((h) => ($) => jt(h)(jt($.x + $.hw)($.hw - $.x)))(0)(a) + _ * 0.6,
    halfH: N((h) => ($) => jt(h)(jt($.y + $.hh)($.hh - $.y)))(0)(a) + _ * 0.6,
    unitHalfH: _,
    ballRadius: _ * 0.3,
    scaleFactor: u,
    nodeRectFlat: xt(a)((h) => [h.x, h.y, h.hw * 2, h.hh * 2]),
    nodeShapeFlat: H((h) => h.shape)(a),
    nodeLabelHeightFlat: H((h) => h.labelH)(a),
    nodeDepthFlat: H((h) => h.depth)(a),
    edgeSegFlat: xt(m)((h) => h.seg),
    edgeSegDepth: H((h) => h.depth)(m),
    arrowData: vt((h) => {
      if (h.arrowhead) {
        const $ = Xl(h.pts)(Mn);
        if ($.tag === "Just") {
          const y = Zr($._1._1)($._1._2);
          return y > 1e-6 ? J(
            "Just",
            (() => {
              const v = l($._1._2);
              return {
                tipX: $._1._2.x - ($._1._2.x - $._1._1.x) / y * (_ * g(h.depth) / jt(1e-4)(p)) * 0.05,
                tipY: $._1._2.y - ($._1._2.y - $._1._1.y) / y * (_ * g(h.depth) / jt(1e-4)(p)) * 0.05,
                dirX: ($._1._2.x - $._1._1.x) / y,
                dirY: ($._1._2.y - $._1._1.y) / y,
                cx: v.x,
                cy: v.y,
                depth: h.depth,
                unit: _ * g(h.depth) / jt(1e-4)(p)
              };
            })()
          ) : x;
        }
        if ($.tag === "Nothing")
          return x;
        f();
      }
      return x;
    })(c),
    tokenFlows: H((h) => ({
      path: (() => {
        const $ = H((v) => ({ x: (v.x - i) * u, y: -(v.y - s) * u }))(h.points), y = zt((v) => x, (v) => (w) => J("Just", { head: v, tail: w }), $);
        if (y.tag === "Just") {
          const v = Ge($);
          if (v.tag === "Just")
            return [l(y._1.head), ...Ft($)(l(v._1.last))];
          if (v.tag === "Nothing")
            return $;
          f();
        }
        if (y.tag === "Nothing")
          return $;
        f();
      })(),
      labels: h.labels,
      startT: h.startT,
      endT: h.endT,
      holdPre: h.holdPre,
      holdPost: h.holdPost
    }))(n.tokens),
    dives: H((h) => {
      const $ = (y) => ({ cx: (y.x - i) * u, cy: -(y.y - s) * u, hw: y.w / 2 * u, hh: y.h / 2 * u });
      return { startT: h.startT, endT: h.endT, dir: M(h.dir), parent: $(h.parent), child: $(h.child) };
    })(n.dives),
    duration: n.duration,
    midX: i,
    midY: s,
    cameraSchedule: e
  };
}, jl = (t) => () => {
  const n = Ff(), e = pu(n)();
  Rf(e)("normal")(), E_(e)("1px")();
  const r = I_(t)((o) => {
    const i = mu(e)(Mu);
    return () => (i(), [kg(e)(o.label)().width / 2048, 0.9]);
  })();
  return le(r);
}, R_ = (t) => (n) => {
  const e = pu(n);
  return () => {
    const r = e();
    return Ja(r)({ x: 0, y: 0, width: 2048, height: M(t.length) * 160 })(), Na(r)("#fff")(), Ba(r)(Ca)(), Ra(r)(Sa)(), Rf(r)("normal")(), E_(r)("1px")(), r5(t)((o) => (i) => {
      const s = mu(r)(Mu);
      return () => (s(), ba(r)(i.label)(1024)(M(o) * 160 + 80)());
    })();
  };
}, E5 = (t) => () => {
  const n = Ff();
  return ya(n)(2048)(), va(n)(M(t.length) * 160)(), R_(t)(n)(), n;
}, S5 = (t) => (n) => (e) => {
  const r = E5(t);
  return () => {
    const o = r();
    au(n)(e)(o)(0)(), hf(
      pf,
      ro(ro(oo(() => Hf(Mu)))(Bf(zf)))(() => oo((() => {
        const s = R_(t)(o);
        return () => (s(), au(n)(e)(o)(0)());
      })()))
    )().run();
  };
}, C5 = (t) => (n) => {
  const e = (r) => N((o) => (i) => (() => {
    const s = i.nx - r.cx, u = i.ny - r.cy, c = r.unit * 0.6;
    return s * s + u * u < c * c;
  })() ? jt(o)(i.glow) : o)(0)(n);
  return xt(t.arrowData)((r) => [r.tipX - r.dirX * r.unit * 0.2 * e(r), r.tipY - r.dirY * r.unit * 0.2 * e(r), r.dirX, r.dirY]);
}, A5 = (t) => (n) => (e) => (r) => {
  const o = pe(0.05)(t);
  return Bt((i) => (s) => {
    if (i >= 0 && i < e.length) {
      const _ = e[i].startT, g = Zt((y) => y.id === _)(n), p = (() => {
        if (g.tag === "Nothing")
          return { id: _, x: s.chip.cx, y: s.chip.cy, vx: 0, vy: 0 };
        if (g.tag === "Just")
          return g._1;
        f();
      })(), m = p.vx + (180 * (s.chip.cx - p.x) - 22 * p.vx) * o, h = p.vy + (180 * (s.chip.cy - p.y) - 22 * p.vy) * o, $ = { id: _, x: p.x + m * o, y: p.y + h * o, vx: m, vy: h };
      return k(Yl($.x - s.chip.cx)($.y - s.chip.cy)(s), $);
    }
    const u = Zt((_) => _.id === 0)(n), c = (() => {
      if (u.tag === "Nothing")
        return { id: 0, x: s.chip.cx, y: s.chip.cy, vx: 0, vy: 0 };
      if (u.tag === "Just")
        return u._1;
      f();
    })(), a = c.vx + (180 * (s.chip.cx - c.x) - 22 * c.vx) * o, l = c.vy + (180 * (s.chip.cy - c.y) - 22 * c.vy) * o, d = { id: 0, x: c.x + a * o, y: c.y + l * o, vx: a, vy: l };
    return k(Yl(d.x - s.chip.cx)(d.y - s.chip.cy)(s), d);
  })(r);
}, Zl = (t) => (n) => {
  const e = Ve(n) - 32 | 0;
  return e >= 0 && e < t.length ? t[e] : 0.5;
}, P5 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = n * 0.6 + n * 0.5454545454545454, u = n * 1.5625, c = u * 0.76, a = n * 0.7272727272727273, l = e.y + r + a + s, d = T5(o)(i), _ = Wr(d.line), g = _.length, p = ga(H((h) => n * Zl(t)(h))(_)), m = e.x + r + a + p / 2;
  return {
    chip: { cx: m, cy: l, hw: p / 2 + n * 1.2727272727272727, hh: s, dotX: e.x, dotY: e.y },
    glyphs: N((h) => ($) => {
      const y = w5(d.phase)(g)($._1), v = n * Zl(t)($._2), w = { cx: h._1 + v / 2, cy: l + (1 - y) * n * 0.85, hw: c / 2, hh: u / 2, cell: _5($._2), alpha: y };
      return k(h._1 + v, y > 0 ? Ft(h._2)(w) : h._2);
    })(k(m - p / 2, []))(Bt(Mn)(_))._2
  };
}, G5 = /* @__PURE__ */ Qf(
  "SdfDiagram",
  (t) => {
    const n = Wn(og), e = Wn(0), r = Wn(0), o = Wn(x), i = Wn([]), s = Wn([]), u = Wn(x), c = Wn(8), a = Wn(1), l = Wn(0), d = Wn(0), _ = Wn(0), g = Wn(0), p = Wn(x), m = Wn({ resW: 0, resH: 0 }), h = Wn(1), $ = Wn(!0), y = fn(h)(t.speed);
    mi(
      (T, b) => T === b,
      t.speed,
      () => (y(), () => {
      })
    );
    const v = fn($)(t.playing);
    mi(
      (T, b) => T === b,
      t.playing,
      () => (v(), () => {
      })
    );
    const w = sn(n);
    return mi(
      (T, b) => T === b,
      t.source,
      () => {
        const T = w(), b = Te(T, x, Ut);
        if (b.tag === "Nothing")
          return () => {
          };
        if (b.tag === "Just") {
          const L = mL(b._1)(), C = Te(L, x, Ut);
          if (C.tag === "Nothing")
            return () => {
            };
          if (C.tag === "Just") {
            const E = C._1;
            fn(u)(x)();
            const B = L5(t.source);
            pL(E)("OES_standard_derivatives")();
            const D = Yk(E, ML, jL);
            _L(E)(D)();
            const F = Mt(E)(D)("uRes")(), z = Mt(E)(D)("uTime")(), V = Mt(E)(D)("uTilt")(), Z = Mt(E)(D)("uNodeCount")(), Y = Mt(E)(D)("uEdgeCount")(), W = Mt(E)(D)("uNodeRect")(), A = Mt(E)(D)("uNodeShape")(), P = Mt(E)(D)("uEdge")(), O = Mt(E)(D)("uArrow")(), G = Mt(E)(D)("uArrowCount")(), Q = Mt(E)(D)("uLabel")(), X = Mt(E)(D)("uLabelAspect")(), tt = Mt(E)(D)("uLabelFadeStart")(), U = Mt(E)(D)("uLabelDim")(), q = Mt(E)(D)("uLabelH")(), j = Mt(E)(D)("uUnit")(), et = Mt(E)(D)("uTokCount")(), nt = Mt(E)(D)("uTokPos")(), ft = Mt(E)(D)("uTokGlow")(), ct = Mt(E)(D)("uTokNode")(), dt = Mt(E)(D)("uGlyphAtlas")(), Gt = Mt(E)(D)("uChipCount")(), Jt = Mt(E)(D)("uChipRect")(), Yt = Mt(E)(D)("uChipDot")(), _t = Mt(E)(D)("uGlyphCount")(), Tt = Mt(E)(D)("uGlyphRect")(), ht = Mt(E)(D)("uGlyphCell")(), mt = Mt(E)(D)("uGlyphAlpha")(), st = Mt(E)(D)("uCamZ")(), gt = Mt(E)(D)("uCamPanX")(), it = Mt(E)(D)("uCamPanY")(), at = Mt(E)(D)("uRotY")(), wt = Mt(E)(D)("uActiveDepth")(), Nt = Mt(E)(D)("uNodeDepth")(), Ct = Mt(E)(D)("uEdgeDepth")(), Wt = Mt(E)(D)("uArrowDepth")();
            Jr(E)(Q)(0)(), Jr(E)(dt)(1)(), He(E)(X)(12.8)(), He(E)(tt)(0.92)();
            const Zn = Fl(E)(), Gn = Fl(E)();
            S5(B.nodeList)(E)(Zn)(), h5(E)(Gn)(i)();
            const Fn = jl(B.nodeList)();
            si(E)(U)(Fn)(), hf(
              pf,
              ro(ro(oo(() => Hf(Mu)))(Bf(zf)))(() => ro(oo(jl(B.nodeList)))((hn) => oo(si(E)(U)(hn))))
            )().run(), Jr(E)(Z)(B.nodeList.length)(), Jr(E)(Y)(Je(B.edgeSegFlat.length, 4))(), Jr(E)(G)(B.arrowData.length)(), ii(E)(W)(B.nodeRectFlat)(), br(E)(A)(B.nodeShapeFlat)(), br(E)(q)(B.nodeLabelHeightFlat)(), ii(E)(P)(B.edgeSegFlat)(), br(E)(Nt)(B.nodeDepthFlat)(), br(E)(Ct)(B.edgeSegDepth)(), br(E)(Wt)(H((hn) => hn.depth)(B.arrowData))();
            const Lt = cu(), te = sn(o), Rn = o5((hn) => {
              const zn = Jk(hn)(Lt);
              return () => (zn(), fn(o)(x)());
            }), Bn = () => {
              const hn = te();
              return Rn(hn)();
            }, wn = () => {
              const hn = Il(), zn = sn(r)();
              fn(r)(hn)();
              const or = sn(h)(), ir = sn($)(), Nr = pe(0.05)((hn - zn) / 1e3), Ce = ir ? Nr * or : 0, De = sn(e)() + Ce;
              fn(e)(De)();
              const ce = yL(b._1)(), Mo = aL(), jo = jt(1)(pe(2)(Mo)), Zo = sn(i)(), mo = sn(s)(), Zi = sn(a)(), qr = sn(l)(), ti = sn(d)(), qf = sn(u)(), ts = sn(_)(), ns = 0 + sn(g)(), es = ce.width * jo, ni = ce.height * jo, Xf = { cx: 0, cy: 0, hw: B.halfW, hh: B.halfH }, z_ = (() => {
                const rs = B.duration > 0 ? De - B.duration * Ie(De / B.duration) : 0, Xr = b5(B)(rs), ei = g5(B)(qf)(ce.width)(ce.height)(Nr)(rs), ri = y5(Xf)(B.dives)(rs), Q_ = { centerX: ri.cx, centerY: ri.cy, camZ: ri.hh * 2, viewport: ri }, ju = (() => {
                  if (ei.tag === "Nothing")
                    return Q_;
                  if (ei.tag === "Just")
                    return ei._1.world;
                  f();
                })(), os = ju.centerX + qr, Zu = ju.centerY + ti, oi = ju.camZ * 1.18 * Zi, H_ = os * Vn(ts), W_ = Zu * Vn(ns) - os * ie(ts) * ie(ns), tc = es / ni, nc = Ml(ri)(tc) / Ml(Xf)(tc), O_ = B.ballRadius * nc, q_ = 11 * B.scaleFactor * nc, Yf = B.unitHalfH * nc, Uf = x5(B.dives)(rs), Vf = A5(Ce)(mo)(Xr)(BL((() => {
                  const Ot = 0.5 * tc * oi / jt(0.3)(Vn(ts)), Kf = 0.5 * oi / jt(0.3)(Vn(ns));
                  return { minX: os - Ot, maxX: os + Ot, minY: Zu - Kf, maxY: Zu + Kf, margin: 4 * oi / jt(1)(ni) };
                })())(Yf * 0.25)(H(a5)(lt((Ot) => Ot.depth >= Uf - 0.5, B.worldNodes)))(H((Ot) => P5(Zo)(q_)({
                  x: Ot.x,
                  y: Ot.y
                })(O_)(Ot.motionT)(Ot.labels))(Xr))), is = H((Ot) => Ot._1)(Vf), ss = bt(0, 40, xt(is)((Ot) => Ot.glyphs)), X_ = H((Ot) => Ot._2)(Vf), Y_ = fn(m)({ resW: es, resH: ni });
                return () => (Y_(), fn(s)(X_)(), fn(u)(ei.tag === "Just" ? J("Just", ei._1.camera) : x)(), fn(l)(qr)(), fn(d)(ti)(), fn(c)(oi)(), hL(E)(b._1)(Nn(lr(es)))(Nn(lr(ni)))(), vL(E)(), gL(E)(F)(es)(ni)(), He(E)(z)(De)(), He(E)(V)(ns)(), He(E)(st)(oi)(), He(E)(gt)(H_)(), He(E)(it)(W_)(), He(E)(at)(ts)(), He(E)(wt)(Uf)(), He(E)(j)(Yf)(), Jr(E)(et)(Xr.length)(), si(E)(nt)(xt(Xr)((Ot) => [Ot.x, Ot.y]))(), br(E)(ft)(H((Ot) => Ot.glow)(Xr))(), si(E)(ct)(xt(Xr)((Ot) => [Ot.nx, Ot.ny]))(), ii(E)(O)(C5(B)(Xr))(), Jr(E)(Gt)(is.length)(), ii(E)(Jt)(xt(is)((Ot) => [Ot.chip.cx, Ot.chip.cy, Ot.chip.hw, Ot.chip.hh]))(), si(E)(Yt)(xt(is)((Ot) => [Ot.chip.dotX, Ot.chip.dotY]))(), Jr(E)(_t)(ss.length)(), ii(E)(Tt)(xt(ss)((Ot) => [Ot.cx, Ot.cy, Ot.hw, Ot.hh]))(), br(E)(ht)(H((Ot) => Ot.cell)(ss))(), br(E)(mt)(H((Ot) => Ot.alpha)(ss))(), $L(E)());
              })();
              ce.width > 0 && z_();
              const D_ = aa(wn)(Lt)();
              return fn(o)(J("Just", D_))();
            }, Se = fn(r), qt = () => {
              const hn = Il();
              Se(hn)();
              const zn = aa(wn)(Lt)();
              return fn(o)(J("Just", zn))();
            };
            qt();
            const gn = HL((hn) => {
              const zn = sn(o);
              return () => {
                const or = zn();
                if (hn)
                  return or.tag === "Nothing" ? qt() : void 0;
                if (!hn && or.tag === "Just")
                  return Bn();
              };
            })(), Of = c5(b._1)((hn) => (zn) => (or) => {
              const ir = sn(c);
              return () => {
                const Nr = ir(), Ce = sn(m)();
                if (or > 0.5) {
                  const ce = sn(a)();
                  return fn(a)(ql(0.3)(2.6)(ce * Ro(1.01)(zn)))();
                }
                const wr = sn(l)(), De = sn(d)();
                return fn(l)(wr + hn * Nr / Ce.resH)(), fn(d)(De - zn * Nr / Ce.resH)();
              };
            })((hn) => (zn) => fn(p)(J("Just", { x: hn, y: zn })))((hn) => (zn) => (or) => (ir) => {
              const Nr = sn(p);
              return () => {
                const Ce = Nr();
                if (Ce.tag !== "Nothing") {
                  if (Ce.tag === "Just") {
                    const wr = zn - Ce._1.y, De = hn - Ce._1.x;
                    fn(p)(J("Just", { x: hn, y: zn }))();
                    const ce = sn(c)(), Mo = sn(m)();
                    if (or >= 1.5) {
                      const mo = sn(l)(), Zi = sn(d)();
                      return fn(l)(mo - De * ce / Mo.resH)(), fn(d)(Zi + wr * ce / Mo.resH)();
                    }
                    const jo = sn(_)(), Zo = sn(g)();
                    return fn(_)(jo + De * 5e-3)(), fn(g)(ql(-0.8)(0.8)(Zo + wr * 5e-3))();
                  }
                  f();
                }
              };
            })((hn) => (zn) => fn(p)(x))();
            return () => (Bn(), gn(), Of());
          }
        }
        f();
      }
    ), i5(s5({
      style: { position: "absolute", inset: "0" },
      children: [u5({ ref: n, style: { position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" } })]
    }))();
  }
), I5 = /* @__PURE__ */ Or(G5), F5 = /* @__PURE__ */ Or(C_), R5 = /* @__PURE__ */ P_({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), B5 = /* @__PURE__ */ P_({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), vo = /* @__PURE__ */ Bi(go)(ha), lu = G_().pure, z5 = /* @__PURE__ */ Or(A_), D5 = {
  eq: (t) => (n) => (t.renderer === "CanvasRenderer" ? n.renderer === "CanvasRenderer" : t.renderer === "SvgRenderer" && n.renderer === "SvgRenderer") && (t.sizing.tag === "AutoSize" ? n.sizing.tag === "AutoSize" : t.sizing.tag === "FixedSize" && n.sizing.tag === "FixedSize" && t.sizing._1 === n.sizing._1 && t.sizing._2 === n.sizing._2) && t.source === n.source && (t.theme === "Light" ? n.theme === "Light" : t.theme === "Dark" ? n.theme === "Dark" : t.theme === "Blueprint" ? n.theme === "Blueprint" : t.theme === "Whiteboard" ? n.theme === "Whiteboard" : t.theme === "Isometric" && n.theme === "Isometric") && (t.transparency === "PaintBackground" ? n.transparency === "PaintBackground" : t.transparency === "TransparentBackground" && n.transparency === "TransparentBackground")
}, Q5 = /* @__PURE__ */ Df("svg")(), tg = (t) => F5({
  className: "markgraf-player",
  style: { position: "relative", width: "100%", height: "100%" },
  children: [
    I5({
      source: t.src,
      speed: 1,
      playing: (() => {
        const n = Te(t.paused, x, Ut);
        if (n.tag === "Nothing")
          return !0;
        if (n.tag === "Just")
          return !n._1;
        f();
      })()
    })
  ]
}), B_ = (t) => (n) => {
  const e = Te(n.theme, x, Ut), r = (() => {
    if (e.tag === "Nothing")
      return "light";
    if (e.tag === "Just")
      return e._1;
    f();
  })(), o = Te(n.renderer, x, Ut), i = (() => {
    if (o.tag === "Nothing")
      return "canvas";
    if (o.tag === "Just")
      return o._1;
    f();
  })(), s = Te(n.paused, x, Ut), u = (() => {
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just")
      return s._1;
    f();
  })(), c = r === "light" ? J("Just", bl) : r === "dark" ? J("Just", fb) : r === "blueprint" ? J("Just", lb) : r === "whiteboard" ? J("Just", gb) : r === "isometric" ? J("Just", db) : x, a = i === "svg" ? J("Just", Gk) : i === "canvas" ? J("Just", Gl) : x, l = {
    source: t,
    renderer: (() => {
      if (a.tag === "Nothing")
        return Gl;
      if (a.tag === "Just")
        return a._1;
      f();
    })(),
    sizing: (() => {
      const d = Te(n.width, x, Ut);
      if (d.tag === "Just") {
        const _ = Te(n.height, x, Ut);
        if (_.tag === "Just")
          return J_("FixedSize", d._1, _._1);
      }
      return Pk;
    })(),
    theme: (() => {
      if (c.tag === "Nothing")
        return bl;
      if (c.tag === "Just")
        return c._1;
      f();
    })(),
    transparency: (() => {
      const d = Te(n.transparent, x, Ut);
      if (d.tag === "Nothing")
        return !1;
      if (d.tag === "Just")
        return d._1;
      f();
    })() ? hb : _b
  };
  return () => {
    const d = Wn(og), _ = Ol((h, $) => k(h, $), x), g = _._1, p = Ol((h, $) => k(h, $), { time: 0, keyframe: "", playing: !1 });
    R5(k(i, r))((() => {
      const h = Mf("[markgraf] unknown renderer " + Ac(i) + ", defaulting to canvas"), $ = (() => {
        if (a.tag === "Nothing")
          return !0;
        if (a.tag === "Just")
          return !1;
        f();
      })() ? h : () => {
      };
      return () => {
        $();
        const y = Mf("[markgraf] unknown theme " + Ac(r) + ", defaulting to light");
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
    const m = sn(d);
    return mi(
      (h, $) => D5.eq(h)($),
      l,
      () => {
        const h = m(), $ = Te(h, x, Ut), y = (() => {
          if ($.tag === "Just")
            return wk(x, Ut, "Element", $._1);
          if ($.tag === "Nothing")
            return x;
          f();
        })();
        if (y.tag === "Nothing")
          return () => {
          };
        if (y.tag === "Just") {
          const v = Hk(y._1)(l.source)(l.renderer)(l.sizing)(l.theme)(l.transparency)(!0)();
          if (v.tag === "Left")
            return Z_("[markgraf] " + v._1)(), () => {
            };
          if (v.tag === "Right") {
            const w = v._1;
            _._2((b) => J("Just", w))();
            const T = w.subscribe((b) => p._2((L) => b))();
            return () => (T(), w.destroy(), _._2((b) => x)());
          }
        }
        f();
      }
    ), B5(k(
      u,
      (() => {
        if (g.tag === "Nothing")
          return !1;
        if (g.tag === "Just")
          return !0;
        f();
      })()
    ))((() => {
      const h = vo(($) => u ? $.pause : $.play)(g);
      return () => (h(), () => {
      });
    })())(), lu({
      elementRef: d,
      time: p._1.time,
      keyframe: p._1.keyframe,
      playing: p._1.playing,
      duration: g.tag === "Just" ? g._1.duration : 0,
      ready: (() => {
        if (g.tag === "Nothing")
          return !1;
        if (g.tag === "Just")
          return !0;
        f();
      })(),
      play: vo((h) => h.play)(g),
      pause: vo((h) => h.pause)(g),
      toggle: vo((h) => h.toggle)(g),
      seek: (h) => vo(($) => $.seek(h))(g),
      setSpeed: (h) => vo(($) => $.setSpeed(h))(g)
    })();
  };
}, H5 = /* @__PURE__ */ Qf(
  "MarkgrafHeadlessPlayer",
  (t) => {
    const n = B_(t.src)({ renderer: t.renderer, width: t.width, height: t.height, theme: t.theme, transparent: t.transparent, paused: t.paused })(), e = Te(t.renderer, x, Ut);
    return (() => {
      if (e.tag === "Nothing")
        return "canvas";
      if (e.tag === "Just")
        return e._1;
      f();
    })() === "svg" ? lu(Or(Q5)({ className: "markgraf-player", ref: n.elementRef }))() : lu(z5({ className: "markgraf-player", ref: n.elementRef }))();
  }
), W5 = /* @__PURE__ */ Qf(
  "MarkgrafPlayer",
  (t) => lu((() => {
    const n = Te(t.renderer, x, Ut), e = (() => {
      if (n.tag === "Nothing")
        return "canvas";
      if (n.tag === "Just")
        return n._1;
      f();
    })();
    return e === "sdf" || e === "webgl" ? tg(t) : Or(H5)(t);
  })())()
), X5 = (t, n) => B_(t)(n ?? {}), Y5 = W5;
export {
  Y5 as MarkgrafPlayer,
  X5 as useMarkgraf
};
