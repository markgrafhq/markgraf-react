import Mn from "react";
function Vl(t) {
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
function Ne(t, n) {
  return n > 0 ? Math.floor(t / n) : n < 0 ? -Math.floor(t / -n) : 0;
}
const Hn = (t) => (n) => t, Q = function(t) {
  return function(n) {
    for (var e = n.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = t(n[o]);
    return r;
  };
}, D_ = { map: Q }, oa = (t) => t, un = function(t) {
  return t.toString();
}, Wr = function(t) {
  var n = t.toString();
  return isNaN(n + ".0") ? n : n + ".0";
}, Nc = function(t) {
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
}, ia = (t) => t, Sn = /* @__PURE__ */ ia("LT"), Cn = /* @__PURE__ */ ia("GT"), Yn = /* @__PURE__ */ ia("EQ"), N = (t, n) => ({ tag: t, _1: n }), v = /* @__PURE__ */ N("Nothing"), Xt = (t) => N("Just", t), Kl = (t) => {
  if (t.tag === "Nothing")
    return !0;
  if (t.tag === "Just")
    return !1;
  f();
}, Ml = (t) => {
  if (t.tag === "Nothing")
    return !1;
  if (t.tag === "Just")
    return !0;
  f();
}, Jo = function(t) {
  return function(n) {
    return function(e) {
      for (var r = n, o = e.length, i = o - 1; i >= 0; i--)
        r = t(e[i])(r);
      return r;
    };
  };
}, w = function(t) {
  return function(n) {
    return function(e) {
      for (var r = n, o = e.length, i = 0; i < o; i++)
        r = t(r)(e[i]);
      return r;
    };
  };
}, bi = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldr((o) => {
    const i = r(o);
    return (s) => n.apply(n.Functor0().map((u) => oa)(i))(s);
  })(t.pure());
}, jl = (t) => {
  const n = bi(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, Zl = {
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
}, qt = {
  foldr: Jo,
  foldl: w,
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => qt.foldr((r) => (o) => t.Semigroup0().append(e(r))(o))(n);
  }
}, tg = null;
function we(t, n, e) {
  return t == null ? n : e(t);
}
const k = (t, n) => ({ tag: "Tuple", _1: t, _2: n }), In = (t) => (n) => k(t, n), eu = (t) => t._2, ru = (t) => t._1, Q_ = function(t) {
  return function() {
    return t;
  };
}, H_ = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return oo.pure(e(r))();
  },
  Functor0: () => W_
}, oo = { pure: Q_, Apply0: () => H_ }, W_ = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, O_ = function(t) {
  return function() {
    console.log(t);
  };
}, Of = function(t) {
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
}, Tt = (t, n) => ({ tag: t, _1: n }), q_ = (t) => Tt("Left", t), ng = (t) => Tt("Right", t), X_ = {
  map: (t) => (n) => {
    if (n.tag === "Left")
      return Tt("Left", n._1);
    if (n.tag === "Right")
      return Tt("Right", t(n._1));
    f();
  }
}, eg = {
  apply: (t) => (n) => {
    if (t.tag === "Left")
      return Tt("Left", t._1);
    if (t.tag === "Right") {
      if (n.tag === "Left")
        return Tt("Left", n._1);
      if (n.tag === "Right")
        return Tt("Right", t._1(n._1));
    }
    f();
  },
  Functor0: () => X_
}, Y_ = {
  bind: (t) => {
    if (t.tag === "Left") {
      const n = t._1;
      return (e) => Tt("Left", n);
    }
    if (t.tag === "Right") {
      const n = t._1;
      return (e) => e(n);
    }
    f();
  },
  Apply0: () => eg
}, U_ = { pure: ng, Apply0: () => eg }, rg = { Applicative0: () => U_, Bind1: () => Y_ }, V_ = (t) => t, K_ = { map: (t) => (n) => t(n) }, og = { apply: (t) => (n) => t(n), Functor0: () => K_ }, M_ = { bind: (t) => (n) => n(t), Apply0: () => og }, j_ = { pure: V_, Apply0: () => og }, gr = { Applicative0: () => j_, Bind1: () => M_ }, ni = (t, n) => ({ tag: t, _1: n }), ig = (t) => ni("Loop", t), Z_ = {
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
  Monad0: () => gr
}, th = function(t) {
  return function(n) {
    return function() {
      return t(n());
    };
  };
}, nh = function(t) {
  return function() {
    return t;
  };
}, eh = { map: th }, rh = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return sg.pure(e(r))();
  },
  Functor0: () => eh
}, sg = { pure: nh, Apply0: () => rh }, oh = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, ih = function(t, n) {
  return n.push(t);
}, sh = /* @__PURE__ */ oh(ih), uh = (t, n) => ({ tag: "Iterator", _1: t, _2: n }), ch = (t) => (n) => (e) => () => {
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
}, ah = (t) => (n) => () => {
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
}, Rt = function(t) {
  return function(n) {
    for (var e = n.length, r = Array(e), o = 0; o < e; o++)
      r[o] = t(o)(n[o]);
    return r;
  };
};
var sa = function(t) {
  return function(n) {
    return t === n;
  };
};
const fh = sa, lh = sa, Ro = sa, ou = function(t) {
  return function(n) {
    return function(e) {
      if (n.length !== e.length) return !1;
      for (var r = 0; r < n.length; r++)
        if (!t(n[r])(e[r])) return !1;
      return !0;
    };
  };
}, be = { eq: Ro }, gh = { eq: lh }, bo = { eq: fh };
var ua = function(t) {
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
const dh = ua, _h = ua, hh = ua, G = { compare: /* @__PURE__ */ hh(Sn)(Yn)(Cn), Eq0: () => be }, ot = { compare: /* @__PURE__ */ _h(Sn)(Yn)(Cn), Eq0: () => gh }, it = { compare: /* @__PURE__ */ dh(Sn)(Yn)(Cn), Eq0: () => bo }, ug = function(t) {
  return t;
}, ph = /* @__PURE__ */ (function() {
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
})(), mh = (t) => t, Pr = {
  traverse: (t) => {
    const n = t.Apply0();
    return ph(n.apply)(n.Functor0().map)(t.pure);
  },
  sequence: (t) => Pr.traverse(t)(mh),
  Functor0: () => D_,
  Foldable1: () => qt
}, zt = function(t, n) {
  for (var e = t > n ? -1 : 1, r = new Array(e * (n - t) + 1), o = t, i = 0; o !== n; )
    r[i++] = o, o += e;
  return r[i] = o, r;
};
var $h = function(t, n) {
  if (t < 1)
    return [];
  var e = new Array(t);
  return e.fill(n);
}, yh = function(t, n) {
  for (var e = [], r = 0, o = 0; o < t; o++)
    e[r++] = n;
  return e;
};
const xh = typeof Array.prototype.fill == "function" ? $h : yh, Gt = /* @__PURE__ */ (function() {
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
})(), Bt = function(t, n, e) {
  return e.length === 0 ? t({}) : n(e[0])(e.slice(1));
}, cg = function(t, n, e, r) {
  for (var o = 0; o < r.length; o++) {
    var i = e(r[o]);
    if (n(i)) return i;
  }
  return t;
}, to = function(t, n, e, r) {
  for (var o = 0, i = r.length; o < i; o++)
    if (e(r[o])) return t(o);
  return n;
}, ag = function(t, n, e, r, o) {
  if (e < 0 || e > o.length) return n;
  var i = o.slice();
  return i.splice(e, 0, r), t(i);
}, fg = function(t, n, e, r) {
  if (e < 0 || e >= r.length) return n;
  var o = r.slice();
  return o.splice(e, 1), t(o);
}, Er = function(t, n, e, r, o) {
  if (e < 0 || e >= o.length) return n;
  var i = o.slice();
  return i[e] = r, t(i);
}, An = function(t) {
  return t.slice().reverse();
}, se = function(t) {
  if (t.length <= 1e4)
    return Array.prototype.concat.apply([], t);
  for (var n = [], e = 0, r = t.length; e < r; e++)
    for (var o = t[e], i = 0, s = o.length; i < s; i++)
      n.push(o[i]);
  return n;
}, at = function(t, n) {
  return n.filter(t);
}, vh = function(t, n, e) {
  for (var r = e.length, o = n, i = new Array(r), s = 0; s < r; s++)
    o = t(o)(e[s]), i[s] = o;
  return i;
}, wh = /* @__PURE__ */ (function() {
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
})(), Jt = function(t, n, e) {
  return e.slice(t, n);
}, pn = function(t, n, e) {
  for (var r = n.length < e.length ? n.length : e.length, o = new Array(r), i = 0; i < r; i++)
    o[i] = t(n[i])(e[i]);
  return o;
}, ue = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (t(n[r])) return !0;
  return !1;
}, lg = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (!t(n[r])) return !1;
  return !0;
}, Ct = (t) => (n) => wh(
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
), Nh = (t) => (n) => Ct((e) => (r) => t.compare(n(e))(n(r))), Pt = (t) => (n) => (() => {
  const e = sh(n);
  return () => {
    const r = [...t];
    return e(r)(), r;
  };
})()(), ke = (t) => {
  if (t.length === 0)
    return t.length - 1 | 0, v;
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? N("Just", { init: Jt(0, t.length - 1 | 0, t), last: t[n] }) : v;
}, Th = (t) => (n) => (e) => t >= 0 && t < e.length ? Er(Xt, v, t, n(e[t]), e) : v, Or = (t) => (n) => {
  const r = ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if (c >= 0 && c < n.length) {
        if (t(n[c])) {
          i = c + 1 | 0;
          continue;
        }
        s = !1, u = N("Just", c);
        continue;
      }
      s = !1, u = v;
    }
    return u;
  })(0);
  if (r.tag === "Just")
    return r._1 === 0 ? { init: [], rest: n } : { init: Jt(0, r._1, n), rest: Jt(r._1, n.length, n) };
  if (r.tag === "Nothing")
    return { init: n, rest: [] };
  f();
}, ko = (t) => (n) => {
  const e = Ct((r) => (o) => t(r._2)(o._2))(Rt(In)(n));
  return 0 < e.length ? Q(eu)(Nh(it)(ru)((() => {
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
}, Jh = (t) => (n) => {
  const e = [], o = uh(
    (i) => i >= 0 && i < n.length ? N("Just", n[i]) : v,
    { value: 0 }
  );
  return ah(o)((i) => () => {
    const s = [];
    s.push(i), ch(t(i))(o)(s)(), e.push(s);
  })(), e;
}, Mt = (t) => (n) => {
  const e = to(Xt, v, t, n);
  return e.tag === "Just" ? N("Just", n[e._1]) : v;
}, gg = (t) => (n) => at(t, n), ie = (t) => (n) => (e) => {
  const r = to(Xt, v, (o) => t.eq(o)(n), e);
  if (r.tag === "Nothing")
    return !1;
  if (r.tag === "Just")
    return !0;
  f();
}, dg = (t) => (n) => xt(n)(t), yt = (t) => dg((n) => {
  const e = t(n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [e._1];
  f();
}), bh = isFinite, He = Math.abs, kh = Math.acos, Xr = function(t) {
  return function(n) {
    return Math.atan2(t, n);
  };
}, iu = Math.ceil, Vn = Math.cos, Lo = Math.exp, Le = Math.floor, hs = Math.log, Lh = function(t) {
  return function(n) {
    return Math.min(t, n);
  };
}, Eo = function(t) {
  return function(n) {
    return Math.pow(t, n);
  };
}, er = Math.round, ee = Math.sin, Bn = Math.sqrt, Eh = Math.tan, Sh = function(t) {
  return function(n) {
    return function(e) {
      return (e | 0) === e ? t(e) : n;
    };
  };
}, M = function(t) {
  return t;
}, Ch = function(t) {
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
}, Ah = /* @__PURE__ */ Ch(Xt)(v), Ph = /* @__PURE__ */ Ah(10), _g = /* @__PURE__ */ Sh(Xt)(v), vn = (t) => {
  if (!bh(t))
    return 0;
  if (t >= M(2147483647))
    return 2147483647;
  if (t <= M(-2147483648))
    return -2147483648;
  const n = _g(t);
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return n._1;
  f();
}, Gh = (t, n) => ({ tag: "NonEmpty", _1: t, _2: n }), jt = (t, n, e) => ({ tag: t, _1: n, _2: e }), Zt = /* @__PURE__ */ jt("Nil"), tn = {
  foldr: (t) => (n) => {
    const e = tn.foldl((i) => (s) => t(s)(i))(n), o = ((i) => (s) => {
      let u = i, c = s, a = !0, l;
      for (; a; ) {
        const d = u, _ = c;
        if (_.tag === "Nil") {
          a = !1, l = d;
          continue;
        }
        if (_.tag === "Cons") {
          u = jt("Cons", _._1, d), c = _._2;
          continue;
        }
        f();
      }
      return l;
    })(Zt);
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
    return (e) => tn.foldl((r) => {
      const o = t.Semigroup0().append(r);
      return (i) => o(e(i));
    })(n);
  }
}, Fh = function(t) {
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
}, Ih = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, Rh = { unfoldr1: /* @__PURE__ */ Fh(Kl)(Ih)(ru)(eu) }, Bh = function(t) {
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
}, zh = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, me = {
  unfoldr: /* @__PURE__ */ Bh(Kl)(zh)(ru)(eu),
  Unfoldable10: () => Rh
}, Yt = (t, n, e, r, o, i, s) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s }), ge = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), Ki = (t, n, e) => ({ tag: "Split", _1: t, _2: n, _3: e }), qf = (t, n, e) => ({ tag: "SplitLast", _1: t, _2: n, _3: e }), I = /* @__PURE__ */ Yt("Leaf"), Ue = /* @__PURE__ */ ge("IterLeaf"), $n = (t, n, e, r) => {
  if (e.tag === "Leaf") {
    if (r.tag === "Leaf")
      return Yt("Node", 1, 1, t, n, e, r);
    if (r.tag === "Node")
      return Yt("Node", 1 + r._1 | 0, 1 + r._2 | 0, t, n, e, r);
    f();
  }
  if (e.tag === "Node") {
    if (r.tag === "Leaf")
      return Yt("Node", 1 + e._1 | 0, 1 + e._2 | 0, t, n, e, r);
    if (r.tag === "Node")
      return Yt("Node", e._1 > r._1 ? 1 + e._1 | 0 : 1 + r._1 | 0, (1 + e._2 | 0) + r._2 | 0, t, n, e, r);
  }
  f();
}, ce = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r.tag === "Leaf" ? Yt("Node", 1, 1, t, n, I, I) : r.tag === "Node" && r._1 > 1 ? r._5.tag === "Node" && (() => {
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
}, So = (t, n, e) => {
  if (e.tag === "Leaf")
    return Ki(v, I, I);
  if (e.tag === "Node") {
    const r = t(n)(e._3);
    if (r === "LT") {
      const o = So(t, n, e._5);
      return Ki(o._1, o._2, ce(e._3, e._4, o._3, e._6));
    }
    if (r === "GT") {
      const o = So(t, n, e._6);
      return Ki(o._1, ce(e._3, e._4, e._5, o._2), o._3);
    }
    if (r === "EQ")
      return Ki(N("Just", e._4), e._5, e._6);
  }
  f();
}, hg = (t, n, e, r) => {
  if (r.tag === "Leaf")
    return qf(t, n, e);
  if (r.tag === "Node") {
    const o = hg(r._3, r._4, r._5, r._6);
    return qf(o._1, o._2, ce(t, n, e, o._3));
  }
  f();
}, ki = (t, n) => {
  if (t.tag === "Leaf")
    return n;
  if (t.tag === "Node") {
    const e = hg(t._3, t._4, t._5, t._6);
    return ce(e._1, e._2, e._3, n);
  }
  f();
}, rr = (t, n, e) => {
  if (n.tag === "Leaf")
    return I;
  if (e.tag === "Leaf")
    return n;
  if (e.tag === "Node") {
    const r = So(t, e._3, n);
    return ki(rr(t, r._2, e._5), rr(t, r._3, e._6));
  }
  f();
}, ps = (t, n, e, r) => {
  if (e.tag === "Leaf" || r.tag === "Leaf")
    return I;
  if (r.tag === "Node") {
    const o = So(t, r._3, e), i = ps(t, n, o._2, r._5), s = ps(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return ce(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return ki(i, s);
  }
  f();
}, Wn = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r;
  if (r.tag === "Leaf")
    return e;
  if (r.tag === "Node") {
    const o = So(t, r._3, e), i = Wn(t, n, o._2, r._5), s = Wn(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return ce(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return ce(r._3, r._4, i, s);
  }
  f();
}, Dh = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return I;
    if (r.tag === "Node") {
      const o = n(r._3)(r._4);
      if (o.tag === "Just")
        return ce(r._3, o._1, e(r._5), e(r._6));
      if (o.tag === "Nothing")
        return ki(e(r._5), e(r._6));
    }
    f();
  };
  return e;
}, Qh = (t) => (n) => (r) => {
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
          const $ = d, h = _;
          if (h.tag === "Leaf") {
            g = !1, p = $;
            continue;
          }
          if (h.tag === "Node") {
            if (h._6.tag === "Leaf") {
              d = ge("IterEmit", h._3, h._4, $), _ = h._5;
              continue;
            }
            d = ge("IterEmit", h._3, h._4, ge("IterNode", h._6, $)), _ = h._5;
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
}, Ve = /* @__PURE__ */ Qh((t, n, e) => N("Just", k(k(t, n), e)))((t) => v), Et = (t) => (n) => (e) => (r) => {
  const o = (i) => {
    if (i.tag === "Leaf")
      return Yt("Node", 1, 1, e, r, I, I);
    if (i.tag === "Node") {
      const s = t.compare(e)(i._3);
      if (s === "LT")
        return ce(i._3, i._4, o(i._5), i._6);
      if (s === "GT")
        return ce(i._3, i._4, i._5, o(i._6));
      if (s === "EQ")
        return Yt("Node", i._1, i._2, e, n(i._4)(r), i._5, i._6);
    }
    f();
  };
  return o;
}, K = (t) => (n) => (e) => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return Yt("Node", 1, 1, n, e, I, I);
    if (o.tag === "Node") {
      const i = t.compare(n)(o._3);
      if (i === "LT")
        return ce(o._3, o._4, r(o._5), o._6);
      if (i === "GT")
        return ce(o._3, o._4, o._5, r(o._6));
      if (i === "EQ")
        return Yt("Node", o._1, o._2, n, e, o._5, o._6);
    }
    f();
  };
  return r;
}, cn = (t) => (n) => n.foldl((e) => (r) => K(t)(r._1)(r._2)(e))(I), si = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return I;
    if (r.tag === "Node") {
      const o = t.compare(n)(r._3);
      if (o === "LT")
        return ce(r._3, r._4, e(r._5), r._6);
      if (o === "GT")
        return ce(r._3, r._4, r._5, e(r._6));
      if (o === "EQ")
        return ki(r._5, r._6);
    }
    f();
  };
  return e;
}, pg = (t) => {
  const n = t.compare;
  return (e) => (r) => (o) => {
    const i = So(n, r, o), s = e(i._1);
    if (s.tag === "Nothing")
      return ki(i._2, i._3);
    if (s.tag === "Just")
      return ce(r, s._1, i._2, i._3);
    f();
  };
}, _n = function(t) {
  return function(n) {
    return t + n | 0;
  };
}, no = function(t) {
  return function(n) {
    return t + n;
  };
}, ar = function(t) {
  return function(n) {
    if (n === 0) return 0;
    var e = Math.abs(n);
    return (t % e + e) % e;
  };
}, gn = function(t) {
  return function(n) {
    return t.length === 0 ? n : n.length === 0 ? t : t.concat(n);
  };
}, Hh = { append: gn }, Wh = { mempty: [], Semigroup0: () => Hh };
function ca(t) {
  return function(n) {
    return function(e) {
      return t.apply(e, [n]);
    };
  };
}
const Oh = ca(Number.prototype.toPrecision), qh = ca(Number.prototype.toFixed), Xh = ca(Number.prototype.toExponential), mg = (t, n) => ({ tag: t, _1: n }), $g = (t) => (n) => (e) => {
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
}, yg = (t) => {
  if (t.tag === "Precision")
    return Oh(t._1);
  if (t.tag === "Fixed")
    return qh(t._1);
  if (t.tag === "Exponential")
    return Xh(t._1);
  f();
};
function Yh() {
  return Date.now();
}
function Xf(t) {
  return new Error(t);
}
function su(t) {
  return function() {
    return t.getContext("2d");
  };
}
function Uh(t) {
  return function() {
    return t.width;
  };
}
function Vh(t) {
  return function() {
    return t.height;
  };
}
function aa(t) {
  return function(n) {
    return function() {
      t.width = n;
    };
  };
}
function fa(t) {
  return function(n) {
    return function() {
      t.height = n;
    };
  };
}
function la(t) {
  return function(n) {
    return function() {
      t.lineWidth = n;
    };
  };
}
function ga(t) {
  return function(n) {
    return function() {
      t.fillStyle = n;
    };
  };
}
function Kh(t) {
  return function(n) {
    return function() {
      t.strokeStyle = n;
    };
  };
}
function Yu(t) {
  return function(n) {
    return function() {
      t.lineCap = n;
    };
  };
}
function Uu(t) {
  return function(n) {
    return function() {
      t.lineJoin = n;
    };
  };
}
function Mh(t) {
  return function(n) {
    return function() {
      t.globalCompositeOperation = n;
    };
  };
}
function jh(t) {
  return function(n) {
    return function() {
      t.globalAlpha = n;
    };
  };
}
function xg(t) {
  return function() {
    t.beginPath();
  };
}
function da(t) {
  return function() {
    t.stroke();
  };
}
function _a(t) {
  return function() {
    t.fill();
  };
}
function Zh(t) {
  return function() {
    t.clip();
  };
}
function Vo(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.lineTo(n, e);
      };
    };
  };
}
function vg(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.moveTo(n, e);
      };
    };
  };
}
function wg(t) {
  return function() {
    t.closePath();
  };
}
function tp(t) {
  return function(n) {
    return function() {
      t.fillRect(n.x, n.y, n.width, n.height);
    };
  };
}
function ha(t) {
  return function(n) {
    return function() {
      t.clearRect(n.x, n.y, n.width, n.height);
    };
  };
}
function ms(t) {
  return function(n) {
    return function() {
      t.scale(n.scaleX, n.scaleY);
    };
  };
}
function Tc(t) {
  return function(n) {
    return function() {
      t.translate(n.translateX, n.translateY);
    };
  };
}
function np(t) {
  return function(n) {
    return function() {
      t.transform(n.a, n.b, n.c, n.d, n.e, n.f);
    };
  };
}
function ep(t) {
  return function(n) {
    return function() {
      t.textAlign = n;
    };
  };
}
function rp(t) {
  return function(n) {
    return function() {
      t.textBaseline = n;
    };
  };
}
function uu(t) {
  return function(n) {
    return function() {
      t.font = n;
    };
  };
}
function pa(t) {
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
function Ng(t) {
  return function(n) {
    return function() {
      return t.measureText(n);
    };
  };
}
function xr(t) {
  return function() {
    t.save();
  };
}
function vr(t) {
  return function() {
    t.restore();
  };
}
function Ko(t) {
  return function(n) {
    return function() {
      t.quadraticCurveTo(n.cpx, n.cpy, n.x, n.y);
    };
  };
}
function op(t) {
  return function(n) {
    return function() {
      t.bezierCurveTo(n.cp1x, n.cp1y, n.cp2x, n.cp2y, n.x, n.y);
    };
  };
}
const Tg = (t) => t, ma = (t) => t, $a = (t) => t, ya = (t) => t, cu = (t) => t, ip = /* @__PURE__ */ cu("BaselineTop"), xa = /* @__PURE__ */ cu("BaselineMiddle"), sp = /* @__PURE__ */ cu("BaselineAlphabetic"), up = /* @__PURE__ */ cu("BaselineBottom"), cp = /* @__PURE__ */ ya("AlignLeft"), ap = /* @__PURE__ */ ya("AlignRight"), va = /* @__PURE__ */ ya("AlignCenter"), wa = /* @__PURE__ */ $a("BevelJoin"), au = /* @__PURE__ */ $a("RoundJoin"), Na = /* @__PURE__ */ $a("MiterJoin"), Ta = /* @__PURE__ */ ma("Round"), Ja = /* @__PURE__ */ ma("Square"), ba = /* @__PURE__ */ ma("Butt"), fp = /* @__PURE__ */ Tg("SourceOver"), lp = /* @__PURE__ */ Tg("Difference"), ka = (t) => (n) => rp(t)((() => {
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
})()), La = (t) => (n) => ep(t)((() => {
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
})()), fu = (t) => (n) => {
  if (n === "BevelJoin")
    return Uu(t)("bevel");
  if (n === "RoundJoin")
    return Uu(t)("round");
  if (n === "MiterJoin")
    return Uu(t)("miter");
  f();
}, Ea = (t) => (n) => {
  if (n === "Round")
    return Yu(t)("round");
  if (n === "Square")
    return Yu(t)("square");
  if (n === "Butt")
    return Yu(t)("butt");
  f();
}, Yf = (t) => (n) => Mh(t)((() => {
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
})()), gp = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldrWithIndex((o) => {
    const i = r(o);
    return (s) => {
      const u = i(s);
      return (c) => n.apply(n.Functor0().map((a) => oa)(u))(c);
    };
  })(t.pure());
}, dp = (t) => {
  const n = gp(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, Sa = {
  foldrWithIndex: (t) => (n) => {
    const e = Jo((o) => {
      const i = o._1, s = o._2;
      return (u) => t(i)(s)(u);
    })(n), r = Rt(In);
    return (o) => e(r(o));
  },
  foldlWithIndex: (t) => (n) => {
    const e = w((o) => (i) => t(i._1)(o)(i._2))(n), r = Rt(In);
    return (o) => e(r(o));
  },
  foldMapWithIndex: (t) => {
    const n = t.mempty;
    return (e) => Sa.foldrWithIndex((r) => (o) => (i) => t.Semigroup0().append(e(r)(o))(i))(n);
  },
  Foldable0: () => qt
}, ae = {
  foldr: (t) => (n) => {
    const e = tn.foldr(t)(n);
    return (r) => e((() => {
      const o = (i, s) => {
        if (i.tag === "Leaf")
          return s;
        if (i.tag === "Node")
          return o(i._5, jt("Cons", i._3, o(i._6, s)));
        f();
      };
      return o(r, Zt);
    })());
  }
}, _p = (t) => {
  const n = {
    append: (() => {
      const e = t.compare;
      return (r) => (o) => Wn(e, Hn, r, o);
    })()
  };
  return { mempty: I, Semigroup0: () => n };
}, Jg = (t) => ({
  bind: (n) => (e) => t.Bind1().bind(n)((r) => {
    if (r.tag === "Left")
      return t.Applicative0().pure(Tt("Left", r._1));
    if (r.tag === "Right")
      return e(r._1);
    f();
  }),
  Apply0: () => bg(t)
}), bg = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = {
    map: (r) => n.map((o) => {
      if (o.tag === "Left")
        return Tt("Left", o._1);
      if (o.tag === "Right")
        return Tt("Right", r(o._1));
      f();
    })
  };
  return {
    apply: (() => {
      const r = Jg(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => Ca(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, Ca = (t) => ({ pure: (n) => t.Applicative0().pure(Tt("Right", n)), Apply0: () => bg(t) }), hp = (t) => {
  const n = { Applicative0: () => Ca(t), Bind1: () => Jg(t) };
  return { throwError: (e) => t.Applicative0().pure(Tt("Left", e)), Monad0: () => n };
}, ei = function(t) {
  return function(n) {
    if (t >= 0 && t < n.length) return n.charAt(t);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
}, io = function(t) {
  return t.join("");
}, Gr = function(t) {
  return t.split("");
}, Li = function(t) {
  return t;
}, dr = function(t) {
  return t.length;
}, Uf = function(t) {
  return function(n) {
    return n.substr(0, t);
  };
}, ui = function(t) {
  return function(n) {
    return n.substring(t);
  };
}, pp = function(t) {
  return function(n) {
    return { before: n.substring(0, t), after: n.substring(t) };
  };
}, mp = (t) => (n) => {
  const e = pp(dr(t))(n);
  return e.before === t ? N("Just", e.after) : v;
};
function Vf(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
const $p = (t, n, e) => ({ tag: t, _1: n, _2: e }), yp = (t) => (n) => (e) => Vf(e) === n ? Ca(t).pure(e) : hp(t).throwError(Gh($p("TypeMismatch", n, Vf(e)), Zt)), xp = function(t) {
  var n = null;
  return function() {
    return t === void 0 || (n = t(), t = void 0), n;
  };
}, vp = function(t) {
  return t();
}, Bo = function(n) {
  return function(e) {
    return function() {
      return n(e);
    };
  };
}, Ei = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, zo = function(n) {
  return function(e) {
    return function(r) {
      return function(o) {
        return function() {
          return n(e, r, o);
        };
      };
    };
  };
}, Aa = function(n) {
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
}, wp = function(n) {
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
}, Np = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, Tp = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, eo = (t) => BigInt(t), Jp = (t) => Number(t), fs = (t) => (n) => t + n, ls = (t) => (n) => t * n, Jc = (t) => (n) => t - n, kg = 0n, $s = 1n, Lg = (t) => (n) => t ^ n, ci = (t) => (n) => t & n, Pa = (t) => (n) => t << n, bc = (t) => (n) => t >> n, bp = (t) => (n) => t == n, kp = (t) => (n) => t === n ? 0 : t > n ? 1 : -1, Lp = { eq: bp }, Kf = {
  compare: (t) => (n) => {
    const e = kp(t)(n);
    return e === 1 ? Cn : e === 0 ? Yn : Sn;
  },
  Eq0: () => Lp
}, Ep = /* @__PURE__ */ Np(Xt)(v), Sp = /* @__PURE__ */ Tp(Xt)(v), Mf = function(t) {
  throw new Error(t);
}, Eg = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = ot.compare(n._1)(e._1);
      return r === "LT" ? Sn : r === "GT" ? Cn : ot.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), Cp = (t) => (n) => He(t._1 - n._1) + He(t._2 - n._2), so = (t) => t, lu = (t) => t, wn = /* @__PURE__ */ lu("North"), Nn = /* @__PURE__ */ lu("South"), Ze = /* @__PURE__ */ lu("East"), tr = /* @__PURE__ */ lu("West"), or = /* @__PURE__ */ so("Rectangle"), jf = /* @__PURE__ */ so("Cylinder"), Ap = /* @__PURE__ */ so("Parallelogram"), Pp = /* @__PURE__ */ so("Diamond"), Gp = /* @__PURE__ */ so("Ellipse"), Zf = /* @__PURE__ */ so("Document"), Fp = /* @__PURE__ */ so("Cloud"), t0 = (t) => t, Sg = /* @__PURE__ */ w(no)(0), Ip = (t) => (n) => (e) => {
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
}, wr = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ys = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, n0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Rp = (t) => {
  const n = { top: 0, bottom: 0, left: 0, right: 0 }, e = t.shape === "Cloud" ? { ...n, top: t.h * 0.38 } : t.shape === "Cylinder" ? { ...n, bottom: 5 } : t.shape === "Document" ? { ...n, bottom: t.h * 0.05 } : n;
  return [{ x: t.x - e.left, y: t.y - e.top }, { x: t.x + t.w + e.right, y: t.y + t.h + e.bottom }];
}, ai = (t) => (n) => {
  const e = pn(
    (s) => (u) => ({
      a: s,
      b: u,
      len: (() => {
        const c = u.y - s.y, a = u.x - s.x;
        return Bn(a * a + c * c);
      })()
    }),
    t,
    Jt(1, t.length, t)
  ), r = Sg(Q((s) => s.len)(e)), o = Ip(0)(r)(n * r), i = (s) => (u) => (c) => {
    let a = s, l = u, d = c, _ = !0, g;
    for (; _; ) {
      const p = a, $ = l, h = d, m = Bt((y) => v, (y) => (x) => N("Just", { head: y, tail: x }), p);
      if (m.tag === "Nothing") {
        const y = t.length - 1 | 0;
        if (y >= 0 && y < t.length) {
          _ = !1, g = t[y];
          continue;
        }
        _ = !1, g = h;
        continue;
      }
      if (m.tag === "Just") {
        if ($ <= m._1.head.len) {
          const y = m._1.head.len <= 0 ? 0 : $ / m._1.head.len;
          _ = !1, g = { x: m._1.head.a.x + (m._1.head.b.x - m._1.head.a.x) * y, y: m._1.head.a.y + (m._1.head.b.y - m._1.head.a.y) * y };
          continue;
        }
        a = m._1.tail, l = $ - m._1.head.len, d = h;
        continue;
      }
      f();
    }
    return g;
  };
  return 0 < t.length ? N("Just", i(e)(o)(t[0])) : v;
}, Bp = (t) => (n) => {
  const e = wr(1e-6)(t.scale);
  return { x: (n.x - t.tx) / e, y: (n.y - t.ty) / e, w: n.w / e, h: n.h / e };
}, gu = (t) => Sg(pn(
  (n) => (e) => {
    const r = e.y - n.y, o = e.x - n.x;
    return Bn(o * o + r * r);
  },
  t,
  Jt(1, t.length, t)
)), zp = (t) => (n) => {
  const e = wr(4)(0.15 * ys(n.w)(n.h)), r = wr(1)(t.w), o = wr(1)(t.h), i = wr(1)(n.w - 2 * e), s = wr(1)(n.h - 2 * e), u = ys(i / r)(s / o);
  return { scale: u, tx: n.x + e + (i - r * u) / 2 - t.x * u, ty: n.y + e + (s - o * u) / 2 - t.y * u };
}, Ga = { scale: 1, tx: 0, ty: 0 }, bn = (t) => {
  const n = Bt(
    (e) => v,
    (e) => (r) => N("Just", { head: e, tail: r }),
    [
      ...(() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, jt("Cons", r._4, e(r._6, o)));
          f();
        };
        return xt(Gt(tn.foldr, e(t.nodes, Zt)))(Rp);
      })(),
      ...se((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, jt("Cons", r._4, e(r._6, o)));
          f();
        };
        return Gt(tn.foldr, e(t.edges, Zt));
      })())
    ]
  );
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = w((r) => (o) => ({ minX: ys(r.minX)(o.x), minY: ys(r.minY)(o.y), maxX: wr(r.maxX)(o.x), maxY: wr(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, Dp = (t) => (n) => ((r) => (o) => (i) => {
  let s = r, u = o, c = i, a = !0, l;
  for (; a; ) {
    const d = s, _ = u, g = c, p = Bt(($) => v, ($) => (h) => N("Just", { head: $, tail: h }), _);
    if (p.tag === "Nothing") {
      a = !1, l = g;
      continue;
    }
    if (p.tag === "Just") {
      const $ = n0(p._1.head)(d.interiors);
      if ($.tag === "Nothing") {
        a = !1, l = g;
        continue;
      }
      if ($.tag === "Just") {
        s = $._1, u = p._1.tail, c = (() => {
          const h = zp(bn($._1.layout))((() => {
            const m = n0(p._1.head)(d.layout.nodes);
            if (m.tag === "Nothing")
              return { x: 0, y: 0, w: 1, h: 1, label: "", shape: or };
            if (m.tag === "Just")
              return m._1;
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
})(t)(n)(Ga), Qp = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Hp = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, gs = (t) => (n) => (e) => {
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
}, Wp = (t) => (n) => (e) => (r) => {
  const o = bn(n);
  return e <= 0 || r <= 0 || o.w <= 0 || o.h <= 0 ? 1 : t ? Qp(o.w / e)(o.h / r) : Hp(o.w / e)(o.h / r);
}, Cg = (t) => (n) => (e) => {
  const r = t.widthPx / t.heightPx, o = e.w / e.h;
  if (t.widthPx <= 0 || t.heightPx <= 0) {
    const s = 1 / gs(0.05)(1)(n);
    return { w: e.w * s, h: e.h * s };
  }
  if (r > o) {
    const s = 1 / gs(0.05)(1)(n);
    return { w: e.h * r * s, h: e.h * s };
  }
  const i = 1 / gs(0.05)(1)(n);
  return { w: e.w * i, h: e.w / r * i };
}, e0 = (t) => (n) => (e) => (r) => (o) => {
  const i = t + o / 2, s = t + n - o / 2, u = t + n / 2, c = e + r / 2;
  return o >= n ? u : gs(i)(s)(c);
}, Ag = (t) => (n) => (e) => (r) => {
  const o = bn(t);
  return { x: e0(o.x)(o.w)(n.x)(n.w)(e), y: e0(o.y)(o.h)(n.y)(n.h)(r) };
}, Pg = (t) => (n) => (e) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: Wp(t)(n)(e.w)(e.h) }), Op = (t) => (n) => (e) => (r) => {
  const o = { x: r.x - t.padding, y: r.y - t.padding, w: r.w + t.padding * 2, h: r.h + t.padding * 2 }, i = Cg(n)(0.65)(o), s = Ag(e)(o)(i.w)(i.h), u = { x: s.x - i.w / 2, y: s.y - i.h / 2, w: i.w, h: i.h };
  return { focus: r, paddedFocus: o, viewport: u, camera: Pg(n.widthPx > 0 && n.heightPx > 0)(e)(u) };
}, qp = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = bn(r), u = { x: s.x * o.scale + o.tx, y: s.y * o.scale + o.ty, w: s.w * o.scale, h: s.h * o.scale }, c = t.padding * o.scale, a = { x: u.x - c, y: u.y - c, w: u.w + c * 2, h: u.h + c * 2 }, l = Cg(n)(0.7)(a), d = Ag(e)(a)(l.w)(l.h), _ = { x: d.x - l.w / 2, y: d.y - l.h / 2, w: l.w, h: l.h };
  return { footprint: u, viewport: _, camera: Pg(n.widthPx > 0 && n.heightPx > 0)(e)(_) };
}, Gg = (t) => t, r0 = (t, n) => ({ tag: t, _1: n }), Fa = (t) => t, Si = (t, n) => ({ tag: t, _1: n }), Ia = (t, n) => ({ tag: t, _1: n }), Ci = /* @__PURE__ */ Fa("Animated"), Xp = /* @__PURE__ */ Fa("StaticStill"), Yp = /* @__PURE__ */ Fa("TitleCard"), Up = /* @__PURE__ */ Ia("First"), Vp = /* @__PURE__ */ Gg("Forward"), Kp = /* @__PURE__ */ Gg("Backward"), Mp = /* @__PURE__ */ Si("ExitNode"), Fg = /* @__PURE__ */ cn(G)(qt), jp = (t) => Jo((n) => (e) => ({
  nodes: Wn(G.compare, Hn, n.nodes, e.nodes),
  edges: Wn(G.compare, Hn, n.edges, e.edges)
}))({ nodes: I, edges: I })(t.keyframes), Zp = (t) => (n) => ({
  entering: {
    nodes: rr(G.compare, n.nodes, t.nodes),
    edges: rr(G.compare, n.edges, t.edges)
  },
  leaving: {
    nodes: rr(G.compare, t.nodes, n.nodes),
    edges: rr(G.compare, t.edges, n.edges)
  },
  surviving: {
    nodes: ps(G.compare, Hn, t.nodes, n.nodes),
    edges: ps(G.compare, Hn, t.edges, n.edges)
  }
}), xs = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Co = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, vs = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, kc = (t) => (e) => {
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
}, tm = /* @__PURE__ */ w((t) => (n) => K(G)(n)()(t))(I), nm = /* @__PURE__ */ w((t) => (n) => K(G)(n)()(t))(I), em = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Ve);
  return (n) => t(ge("IterNode", n, Ue));
})(), Ig = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, o0 = /* @__PURE__ */ cn(G)(qt), Rg = (t) => {
  const n = Bt((e) => v, (e) => (r) => N("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = w((r) => (o) => ({ minX: xs(r.minX)(o.x), minY: xs(r.minY)(o.y), maxX: Co(r.maxX)(o.x), maxY: Co(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, rm = (t) => (n) => (e) => tm(xt(Gt(ae.foldr, e))((r) => {
  const o = vs(r)(t);
  if (o.tag === "Just")
    return at((i) => !kc(i)(n), [o._1.source, o._1.target]);
  if (o.tag === "Nothing")
    return [];
  f();
})), om = (t) => t.kind.tag === "SendToken" ? N("Just", k(t.kind._1.edge, { source: t.kind._1.from, target: t.kind._1.to })) : v, im = (t) => t.tag === "DataFlow" ? yt(om)(t._1.events) : [], sm = (t) => (n) => nm(yt((e) => kc(e._2.source)(n) || kc(e._2.target)(n) ? N("Just", e._1) : v)(em(t))), Yr = (t) => {
  const n = Bt((e) => v, (e) => (r) => N("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = w((r) => (o) => ({ minX: xs(r.minX)(o.x), minY: xs(r.minY)(o.y), maxX: Co(r.maxX)(o.x + o.w), maxY: Co(r.maxY)(o.y + o.h) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x + n._1.head.w,
      maxY: n._1.head.y + n._1.head.h
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, Ra = (t) => (n) => (e) => {
  if (e.tag === "Leaf")
    return bn(t);
  const r = sm(n)(e), o = [
    ...yt((i) => {
      const s = Ig(i)(t.nodes);
      return s.tag === "Just" ? N("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : v;
    })(Gt(
      ae.foldr,
      Wn(G.compare, Hn, e, rm(n)(e)(r))
    )),
    ...yt((i) => {
      const s = vs(i)(t.edges);
      return s.tag === "Just" ? N("Just", Rg(s._1)) : v;
    })(Gt(ae.foldr, r))
  ];
  return o.length === 0 ? bn(t) : Yr(o);
}, Bg = (t) => (n) => (e) => {
  const r = [
    ...yt((o) => o)([
      (() => {
        const o = vs(e)(t.edges);
        return o.tag === "Just" ? N("Just", Rg(o._1)) : v;
      })()
    ]),
    ...(() => {
      const o = vs(e)(n);
      if (o.tag === "Just")
        return yt((i) => {
          const s = Ig(i)(t.nodes);
          return s.tag === "Just" ? N("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : v;
        })([o._1.source, o._1.target]);
      if (o.tag === "Nothing")
        return [];
      f();
    })()
  ];
  return r.length === 0 ? Ra(t)(n)(I) : Yr(r);
}, Ai = (t) => (n) => {
  const e = bn(t), r = e.w / Co(1e-4)(n.zoom), o = e.h / Co(1e-4)(n.zoom);
  return { x: n.center.x - r / 2, y: n.center.y - o / 2, w: r, h: o };
}, um = (t) => Wn(
  G.compare,
  Hn,
  o0(Q((n) => k(n.id, { source: n.from.node, target: n.to.node }))(t.graph.edges)),
  o0(xt(t.scenes)(im))
), du = (t) => t, cm = (t) => t, Ba = /* @__PURE__ */ du("Linear"), am = /* @__PURE__ */ du("EaseInOutQuad"), Sr = /* @__PURE__ */ du("EaseInOutCubic"), fm = /* @__PURE__ */ du("SpringBouncy"), fi = (t) => (n) => (e) => {
  const r = Bn(1 - n * n), o = t * r;
  return 1 - Lo(-n * t * e) * (Vn(o * e) + n / r * ee(o * e));
}, lm = (t) => {
  const n = ot.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = ot.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, _r = (t) => (n) => (() => {
  if (t === "Linear")
    return cm;
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
    return (e) => e >= 1 ? 1 : 1 - Eo(2)(-10 * e);
  if (t === "Spring")
    return (e) => 1 - (1 + 6 * e) * Lo(-6 * e);
  if (t === "SpringBouncy")
    return fi(6)(0.7);
  f();
})()(lm(n)), _u = (t) => t, zg = (t) => t, Dg = (t) => t, We = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ao = (t) => (n) => (e) => {
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
}, Qg = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, gm = (t) => (n) => {
  const e = it.compare(t._1)(n._1);
  return e === "LT" ? Sn : e === "GT" ? Cn : ot.compare(t._2)(n._2);
}, dm = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, _m = /* @__PURE__ */ Dg("Hold"), hm = /* @__PURE__ */ Dg("Gap"), ws = /* @__PURE__ */ zg("LinearLerp"), i0 = /* @__PURE__ */ zg("StagedLogLerp"), Lc = /* @__PURE__ */ _u("Overview"), pm = /* @__PURE__ */ _u("DiveHome"), s0 = /* @__PURE__ */ _u("DiveTransition"), mm = /* @__PURE__ */ _u("ActionFocus"), $m = (t) => (n) => {
  const e = bn(t), r = e.h / We(1e-6)(n.zoom), o = e.w / We(1e-6)(n.zoom);
  return { x: n.center.x - o / 2, y: n.center.y - r / 2, w: o, h: r };
}, ym = (t) => (n) => (e) => {
  const r = e.center.y - n.center.y, o = e.center.x - n.center.x, i = Bn(o * o + r * r), s = e.zoom - n.zoom, u = s < 0 ? -s : s;
  return Ao(t.minTransition)(t.maxTransition)(We(t.panSpeed <= 0 ? t.minTransition : i / t.panSpeed)(t.zoomSpeed <= 0 ? t.minTransition : u / t.zoomSpeed));
}, xm = (t) => ({ startT: t.startT, endT: t.endT, fromCam: t.fromCam, toCam: t.toCam, easing: t.easing, interp: t.interp, intent: t.intent }), vm = /* @__PURE__ */ w((t) => (n) => {
  const e = t.length - 1 | 0;
  return e >= 0 && e < t.length && t[e] === n ? t : Pt(t)(n);
})([]), wm = (t) => (n) => {
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
}, Nm = (t) => (n) => t.tag === "Just" ? n.tag === "Just" && wm(t._1)(n._1) : t.tag === "Nothing" && n.tag === "Nothing", u0 = (t) => (n) => (e) => (r) => ({
  center: { x: r.center.x * e.scale + e.tx, y: r.center.y * e.scale + e.ty },
  zoom: r.zoom * bn(t).w / We(1e-6)(e.scale * bn(n).w)
}), Tm = (t) => (n) => ({ center: { x: n.center.x * t.scale + t.tx, y: n.center.y * t.scale + t.ty }, zoom: n.zoom / We(1e-6)(t.scale) }), Hg = (t) => (n) => (e) => (r) => ({
  center: { x: t.center.x + (n.center.x - t.center.x) * e, y: t.center.y + (n.center.y - t.center.y) * e },
  zoom: Lo((() => {
    const o = hs(We(1e-6)(t.zoom));
    return o + (hs(We(1e-6)(n.zoom)) - o) * r;
  })())
}), Wg = (t) => (n) => (e) => (r) => {
  const o = Lo(-t * n);
  return {
    center: { x: r.center.x + (e.center.x - r.center.x) * o, y: r.center.y + (e.center.y - r.center.y) * o },
    zoom: Lo((() => {
      const i = hs(We(1e-6)(r.zoom));
      return i + (hs(We(1e-6)(e.zoom)) - i) * o;
    })())
  };
}, Jm = (t) => (n) => (e) => n.zoom >= t.zoom ? _r(Sr)(Ao(0)(1)((e - 0.28) / 0.72)) : _r(Sr)(Ao(0)(1)(e / 0.28)), bm = (t) => (n) => (e) => n.zoom >= t.zoom ? _r(Sr)(Ao(0)(1)(e / 0.28)) : _r(Sr)(Ao(0)(1)((e - 0.28) / 0.72)), km = (t) => (n) => (e) => Hg(t)(n)(bm(t)(n)(e))(Jm(t)(n)(e)), Lm = (t) => (n) => (e) => {
  const r = e.endT <= e.startT ? 1 : (n - e.startT) / (e.endT - e.startT), o = _r(e.easing)(Ao(0)(1)(r));
  if (e.interp === "LinearLerp")
    return {
      center: { x: e.fromCam.center.x + (e.toCam.center.x - e.fromCam.center.x) * o, y: e.fromCam.center.y + (e.toCam.center.y - e.fromCam.center.y) * o },
      zoom: e.fromCam.zoom + (e.toCam.zoom - e.fromCam.zoom) * o
    };
  if (e.interp === "LogLerp")
    return Hg(e.fromCam)(e.toCam)(o)(o);
  if (e.interp === "StagedLogLerp")
    return km(e.fromCam)(e.toCam)(r);
  f();
}, Em = { widthPx: 0, heightPx: 0 }, hu = {
  padding: 24,
  easing: Ba,
  minimumReadableLabelPx: 24,
  minimumVisibleLabelPx: 5,
  labelBasePx: 11,
  panSpeed: 1500,
  zoomSpeed: 4,
  minTransition: 0.15,
  maxTransition: 0.6,
  cameraDecay: 6
}, Mo = (t) => (n) => (e) => (r) => (o) => {
  const i = $m(e)(r), s = o.x - t.padding, u = o.y - t.padding;
  return s >= i.x && u >= i.y && s + o.w + t.padding * 2 <= i.x + i.w && u + o.h + t.padding * 2 <= i.y + i.h;
}, Sm = (t) => (n) => (e) => (r) => (o) => Sa.foldlWithIndex((i) => (s) => (u) => {
  const c = (() => {
    if (u.kind === "Hold") {
      const a = (() => {
        if (u.focus.tag === "Just") {
          if (u.intent === "ActionFocus" && Mo(t)(n)(e)({ center: s.prev.center, zoom: u.toCam.zoom })(u.focus._1))
            return { ...u.toCam, center: s.prev.center };
          if (u.intent === "ActionFocus")
            return u.toCam;
          if (Mo(t)(n)(e)(s.prev)(u.focus._1))
            return s.prev;
          if (Mo(t)(n)(e)({ center: s.prev.center, zoom: u.toCam.zoom })(u.focus._1))
            return { ...u.toCam, center: s.prev.center };
        }
        return u.toCam;
      })();
      return { startT: u.startT, endT: u.endT, fromCam: a, toCam: a, easing: u.easing, interp: ws, focus: u.focus, intent: u.intent };
    }
    if (u.kind === "Gap")
      return {
        startT: u.startT,
        endT: u.endT,
        fromCam: s.prev,
        toCam: (() => {
          const a = i + 1 | 0, l = to(Xt, v, (d) => d.kind === "Hold", a < 1 ? o : Jt(a, o.length, o));
          if (l.tag === "Just") {
            const d = (i + 1 | 0) + l._1 | 0;
            return d >= 0 && d < o.length ? (() => {
              if (o[d].focus.tag === "Just")
                return Mo(t)(n)(e)(s.prev)(o[d].focus._1);
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
        interp: ws,
        focus: v,
        intent: u.intent
      };
    f();
  })();
  return { acc: Pt(s.acc)(c), prev: c.toCam };
})({ acc: [], prev: r })(o).acc, Cm = (t) => (n) => (e) => (r) => (o) => {
  const i = (u, c) => Qg(ym(t)(u.toCam)(c.toCam))(u.endT - u.startT), s = w((u) => (c) => {
    if (u.pending.tag === "Nothing")
      return { acc: u.acc, pending: N("Just", c) };
    if (u.pending.tag === "Just")
      return !(c.fromCam.zoom === c.toCam.zoom && c.fromCam.center.x === c.toCam.center.x && c.fromCam.center.y === c.toCam.center.y) || (() => {
        if (c.focus.tag === "Just")
          return Mo(t)(n)(e)(u.pending._1.toCam)(c.focus._1);
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
      })() || i(u.pending._1, c) <= 0 ? { acc: Pt(u.acc)(u.pending._1), pending: N("Just", c) } : {
        acc: Pt(Pt(u.acc)({ ...u.pending._1, endT: c.startT - i(u.pending._1, c) }))({
          startT: c.startT - i(u.pending._1, c),
          endT: c.startT,
          fromCam: u.pending._1.toCam,
          toCam: c.toCam,
          easing: c.easing,
          interp: ws,
          focus: c.focus,
          intent: c.intent
        }),
        pending: N("Just", c)
      };
    f();
  })({ acc: [], pending: v })(o);
  if (s.pending.tag === "Nothing")
    return s.acc;
  if (s.pending.tag === "Just")
    return Pt(s.acc)(s.pending._1);
  f();
}, Am = (t) => (n) => (e) => {
  const r = n.w + e * 2, o = n.h + e * 2, i = bn(t);
  return r <= 0 || o <= 0 || i.w <= 0 || i.h <= 0 ? 1 : Qg(i.w / r)(i.h / o);
}, Pm = (t) => (n) => {
  if (t.tag === "Just") {
    if (n.tag === "Just")
      return N("Just", Yr([t._1, n._1]));
    if (n.tag === "Nothing")
      return N("Just", t._1);
    f();
  }
  if (t.tag === "Nothing") {
    if (n.tag === "Just")
      return N("Just", n._1);
    if (n.tag === "Nothing")
      return v;
  }
  f();
}, Gm = /* @__PURE__ */ w((t) => (n) => {
  const e = t.length - 1 | 0, r = e >= 0 && e < t.length ? N("Just", t[e]) : v;
  return r.tag === "Just" && r._1.fromCam.zoom === r._1.toCam.zoom && r._1.fromCam.center.x === r._1.toCam.center.x && r._1.fromCam.center.y === r._1.toCam.center.y && n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y && (!(r._1.intent === "ActionFocus" || n.intent === "ActionFocus") || (r._1.intent === "Overview" ? n.intent === "Overview" : r._1.intent === "DiveHome" ? n.intent === "DiveHome" : r._1.intent === "DiveTransition" ? n.intent === "DiveTransition" : r._1.intent === "ActionFocus" && n.intent === "ActionFocus") && Nm(r._1.focus)(n.focus)) && (() => {
    const o = r._1.toCam.center.x - n.toCam.center.x;
    return (o < 0 ? -o < 8 : o < 8) && (() => {
      const i = r._1.toCam.center.y - n.toCam.center.y;
      return (i < 0 ? -i < 8 : i < 8) && (() => {
        const s = r._1.toCam.zoom - n.toCam.zoom;
        return s < 0 ? -s < 0.08 : s < 0.08;
      })();
    })();
  })() ? Pt((() => {
    const o = t.length - 1 | 0;
    return o < 1 ? [] : Jt(0, o, t);
  })())({ ...r._1, endT: n.endT, focus: Pm(r._1.focus)(n.focus) }) : Pt(t)(n);
})([]), Fm = (t) => {
  const n = Ct((e) => (r) => gm(k(
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
  return 0 < n.length ? N("Just", n[0]) : v;
}, Ns = (t) => (n) => (e) => (r) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: We(r)(Am(n)(e)(t.padding)) }), Im = (t) => (n) => (e) => (r) => (o) => {
  const i = Ns(t)(e)(bn(e))(0), s = at(
    (c) => c >= 0 && c <= r,
    vm(Ct(ot.compare)([0, r, ...xt(o)((c) => [c.startT, c.endT])]))
  ), u = (c, a) => ue((l) => l.priority >= 1, at((l) => l.startT <= a && a < l.endT, o)) ? Op(t)(n)(e)(Yr(c)).camera : Ns(t)(e)(Yr(c))(0);
  return Q(xm)(Cm(t)(n)(e)(i)(Gm(Sm(t)(n)(e)(i)(yt((c) => {
    const a = (c._1 + c._2) / 2;
    if (c._2 <= c._1)
      return v;
    const l = Q((d) => d.bbox)(at(
      (d) => d.priority === w(dm)(0)(Q((_) => _.priority)(at(
        (_) => _.startT <= a && a < _.endT,
        o
      ))),
      at((d) => d.startT <= a && a < d.endT, o)
    ));
    return l.length === 0 ? N(
      "Just",
      { kind: hm, startT: c._1, endT: c._2, fromCam: i, toCam: i, easing: t.easing, focus: v, intent: Lc }
    ) : N(
      "Just",
      {
        kind: _m,
        startT: c._1,
        endT: c._2,
        fromCam: u(l, a),
        toCam: u(l, a),
        easing: t.easing,
        focus: N("Just", Yr(l)),
        intent: ue((d) => d.priority >= 1, at((d) => d.startT <= a && a < d.endT, o)) ? mm : Lc
      }
    );
  })(pn(In, s, Jt(1, s.length, s)))))));
}, za = (t) => (n) => (e) => (r) => {
  const o = Fm(at((i) => r >= i.startT && r < i.endT, e));
  if (o.tag === "Just")
    return { camera: Lm()(r)(o._1), intent: o._1.intent };
  if (o.tag === "Nothing") {
    const i = e.length - 1 | 0;
    return i >= 0 && i < e.length && r >= e[i].endT ? { camera: e[i].toCam, intent: e[i].intent } : {
      camera: (() => {
        const s = Ns(t)(n)(bn(n))(0);
        return 0 < e.length ? e[0].fromCam : s;
      })(),
      intent: 0 < e.length ? e[0].intent : Lc
    };
  }
  f();
};
function De(t) {
  return t.charCodeAt(0);
}
function Da(t) {
  return String.fromCharCode(t);
}
const Rm = (t) => t >= 0 && t <= 65535 ? N("Just", Da(t)) : v, Nr = function(t) {
  return function(n) {
    return function(e) {
      return e.replace(new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), n);
    };
  };
}, pu = function(t) {
  return function(n) {
    return n.split(t);
  };
}, Bm = function(t) {
  return t.trim();
}, mu = function(t) {
  return function(n) {
    return n.join(t);
  };
};
var zm = typeof Array.from == "function", Dm = typeof Symbol < "u" && Symbol != null && typeof Symbol.iterator < "u" && typeof String.prototype[Symbol.iterator] == "function", Qm = typeof String.prototype.fromCodePoint == "function", Hm = typeof String.prototype.codePointAt == "function";
const Wm = function(t) {
  return Hm ? function(n) {
    return n.codePointAt(0);
  } : t;
}, Om = function(t) {
  return Qm ? String.fromCodePoint : t;
}, qm = function(t) {
  return function(n) {
    return Dm ? function(e) {
      for (var r = "", o = e[Symbol.iterator](), i = 0; i < n; ++i) {
        var s = o.next();
        if (s.done) return r;
        r += s.value;
      }
      return r;
    } : t(n);
  };
}, Xm = function(t) {
  return function(n) {
    return zm ? function(e) {
      return Array.from(e, n);
    } : t;
  };
}, $u = (t) => {
  const n = dr(t);
  if (n === 0)
    return v;
  if (n === 1)
    return N("Just", { head: De(ei(0)(t)), tail: "" });
  const e = De(ei(1)(t)), r = De(ei(0)(t));
  return 55296 <= r && r <= 56319 && 56320 <= e && e <= 57343 ? N("Just", { head: (((r - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0, tail: ui(2)(t) }) : N("Just", { head: r, tail: ui(1)(t) });
}, Ym = (t) => {
  const n = $u(t);
  return n.tag === "Just" ? N("Just", k(n._1.head, n._1.tail)) : v;
}, Um = (t) => me.unfoldr(Ym)(t), Vm = (t) => {
  const n = De(ei(0)(t));
  if (55296 <= n && n <= 56319 && dr(t) > 1) {
    const e = De(ei(1)(t));
    if (56320 <= e && e <= 57343)
      return (((n - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0;
  }
  return n;
}, Og = /* @__PURE__ */ Wm(Vm), yu = /* @__PURE__ */ Xm(Um)(Og), Vu = (t) => Li(t >= 0 && t <= 65535 ? Da(t) : t < 0 ? "\0" : "\uffff"), Km = (t) => t <= 65535 ? Vu(t) : Vu(Ne(t - 65536 | 0, 1024) + 55296 | 0) + Vu(ar(t - 65536 | 0)(1024) + 56320 | 0), Mm = /* @__PURE__ */ Om(Km), qg = (t) => (n) => {
  if (t < 1)
    return "";
  const e = $u(n);
  return e.tag === "Just" ? Mm(e._1.head) + qg(t - 1 | 0)(e._1.tail) : n;
}, En = /* @__PURE__ */ qm(qg), jm = (t) => (n) => n === "" ? v : N("Just", Og(n)), Zm = (t) => t, Xg = (t) => (n) => {
  const e = n.vw / n.vh, r = n.vh * t, o = { ...n, vx: n.vx - (r - n.vw) / 2, vw: r }, i = n.vw / t, s = { ...n, vy: n.vy - (i - n.vh) / 2, vh: i };
  return t <= 0 || n.vw <= 0 || n.vh <= 0 ? n : t > e ? o : t < e ? s : n;
}, Qa = (t) => (n) => t.width <= 0 || t.height <= 0 ? n : Xg(t.width / t.height)(n), Ts = (t, n, e) => ({ tag: t, _1: n, _2: e }), t$ = () => ({ tag: "ExtendFromSource" }), Js = (t, n) => ({ tag: t, _1: n }), Ha = (t) => t, bs = (t, n) => ({ tag: t, _1: n }), Ku = /* @__PURE__ */ bs("NotYet"), c0 = /* @__PURE__ */ bs("Consumed"), n$ = /* @__PURE__ */ Ha("FromSource"), a0 = /* @__PURE__ */ Ha("FromTarget"), e$ = /* @__PURE__ */ Ha("FromBoth"), Mu = /* @__PURE__ */ Js("Hidden"), r$ = /* @__PURE__ */ Js("Visible"), Yg = /* @__PURE__ */ t$(), ju = /* @__PURE__ */ Ts("Retracted"), o$ = /* @__PURE__ */ Ts("Extended"), Ug = (t) => t, Ec = (t, n) => ({ tag: t, _1: n }), mr = (t, n, e) => ({ tag: t, _1: n, _2: e }), Vg = (t) => t, Tr = (t, n) => ({ tag: t, _1: n }), _o = (t, n, e, r, o, i, s, u, c) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s, _7: u, _8: c }), xu = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ee = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Kg = /* @__PURE__ */ cn(G)(qt), Sc = /* @__PURE__ */ ou(Ro), ho = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, li = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Wa = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
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
}, Mg = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, co = /* @__PURE__ */ (() => {
  const t = me.unfoldr((n) => {
    if (n.tag === "Nil")
      return v;
    if (n.tag === "Cons")
      return N("Just", k(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, jt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Zt);
  })());
})(), i$ = /* @__PURE__ */ w((t) => (n) => K(G)(n)()(t))(I), Cc = (t) => (e) => {
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
}, Mi = (t) => (e) => {
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
}, s$ = (t) => t, u$ = /* @__PURE__ */ Tr("NoKeyframes"), c$ = (t) => Tr("DuplicateEventId", t), a$ = (t) => Tr("UnknownEvent", t), jg = /* @__PURE__ */ Vg("PlopIn"), f$ = /* @__PURE__ */ Vg("PlopOut"), l$ = /* @__PURE__ */ Ug("DiveIn"), g$ = /* @__PURE__ */ Ug("DiveOut"), d$ = (t) => (n) => (e) => yt((r) => {
  if (r.target.tag === "NodeWindow" || r.target.tag === "EdgeWindow")
    return v;
  if (r.target.tag === "TokenWindow")
    return N("Just", { startT: r.startT, endT: r.endT, bbox: Bg(n)(e)(r.target._2), priority: 1 });
  if (r.target.tag === "FillWindow")
    return N(
      "Just",
      {
        startT: r.startT,
        endT: r.endT,
        bbox: Ra(n)(e)(Yt(
          "Node",
          1,
          1,
          r.target._2,
          void 0,
          I,
          I
        )),
        priority: 1
      }
    );
  f();
}), _$ = (t) => (n) => (e) => (r) => {
  const o = xu(r.edge)(n.edges), i = (() => {
    if (o.tag === "Nothing")
      return 0;
    if (o.tag === "Just")
      return gu(o._1);
    f();
  })(), s = Ee(t.minTokenDuration)(Ee(M(w((u) => (c) => u + yu(c).length | 0)(0)(r.labels)) * t.tokenReadSecPerChar)(t.tokenSpeed <= 0 ? 0 : i / t.tokenSpeed)) + e.pre + e.post;
  return { duration: s, holdPre: s <= 0 ? 0 : e.pre / s, holdPost: s <= 0 ? 0 : e.post / s };
}, h$ = (t) => (n) => Kg(yt((e) => {
  if (e.kind.tag === "SendToken")
    return N(
      "Just",
      k(
        e.id,
        {
          pre: (() => {
            const r = e.when;
            return (() => {
              const o = e.kind._1.from;
              return ue(
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
              return ue(
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
    return v;
  f();
})(n)), p$ = (t) => {
  if (t.event.kind.tag === "SendToken")
    return N(
      "Just",
      {
        startT: t.startT,
        endT: t.endT,
        target: _o(
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
    return N("Just", { startT: t.startT, endT: t.endT, target: _o("FillWindow", t.event.id, t.event.kind._1.node, t.event.kind._1.labels) });
  f();
}, m$ = (t) => (n) => (e) => (r) => {
  const o = Mt((i) => Sc(i.path)(n) && (He(i.endT - e) < 1e-4 || He(i.startT - r) < 1e-4))(t.segments);
  if (o.tag === "Just")
    return N("Just", o._1);
  if (o.tag === "Nothing")
    return Mt((i) => Sc(i.path)(n))(t.segments);
  f();
}, $$ = (t) => (n) => (e) => yt((r) => {
  const o = yt((i) => Wa(i)(t.nodes))(Gt(
    ae.foldr,
    (() => {
      if (r.scene.tag === "Structural")
        return Wn(
          G.compare,
          Hn,
          (() => {
            const i = ho(r.scene._1.from)(e);
            if (i.tag === "Nothing")
              return I;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })(),
          (() => {
            const i = ho(r.scene._1.to)(e);
            if (i.tag === "Nothing")
              return I;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })()
        );
      if (r.scene.tag === "DataFlow") {
        const i = ho(r.scene._1.keyframe)(e);
        if (i.tag === "Nothing")
          return I;
        if (i.tag === "Just")
          return i._1.nodes;
        f();
      }
      if (r.scene.tag === "Hold") {
        const i = ho(r.scene._1)(e);
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
  return o.length === 0 ? v : N(
    "Just",
    {
      startT: r.startT,
      endT: r.endT,
      bbox: (() => {
        const i = w((s) => (u) => ({ minX: li(s.minX)(u.x), minY: li(s.minY)(u.y), maxX: Ee(s.maxX)(u.x + u.w), maxY: Ee(s.maxY)(u.y + u.h) }))(0 < o.length ? { minX: o[0].x, minY: o[0].y, maxX: o[0].x + o[0].w, maxY: o[0].y + o[0].h } : { minX: 0, minY: 0, maxX: 0, maxY: 0 })(Jt(1, o.length, o));
        return { x: i.minX, y: i.minY, w: i.maxX - i.minX, h: i.maxY - i.minY };
      })(),
      priority: 0
    }
  );
}), y$ = (t) => (n) => (e) => (r) => (o) => [
  ...$$(o.layout)(e)(n)(at((i) => i.startT >= o.startT && i.endT <= o.endT, r.spans)),
  ...d$()(o.layout)(e)(o.windows)
], x$ = (t) => (n) => (e) => (r) => (o) => (i) => Im(t)(n)(i.layout)(o.endT)(y$()(e)(r)(o)(i)), l0 = /* @__PURE__ */ (() => {
  const t = w((n) => (e) => {
    const r = n.previous.tag === "Just" && He(n.previous._1.endT - e.startT) < 1e-4 && !(e.fromCam.zoom === e.toCam.zoom && e.fromCam.center.x === e.toCam.center.x && e.fromCam.center.y === e.toCam.center.y) ? { ...e, fromCam: n.previous._1.toCam } : e;
    return { previous: N("Just", r), spans: Pt(n.spans)(r) };
  })({ previous: v, spans: [] });
  return (n) => t(n).spans;
})(), v$ = (t) => (n) => (e) => {
  const r = xu(e)(t);
  if (r.tag === "Nothing")
    return a0;
  if (r.tag === "Just") {
    const o = f0(r._1.target)(n);
    return f0(r._1.source)(n) ? o ? e$ : n$ : a0;
  }
  f();
}, w$ = (t) => (n) => {
  const e = bn(n), r = Qa({ width: t.widthPx, height: t.heightPx })({
    vx: e.x,
    vy: e.y,
    vw: e.w,
    vh: e.h
  });
  return { w: r.vw, h: r.vh };
}, N$ = (t) => (n) => (e) => (r) => {
  const o = Ee(e.center.x - r.x)(r.x + r.w - e.center.x), i = Ee(e.center.y - r.y)(r.y + r.h - e.center.y), s = w$(t)(n);
  return li(o <= 0 ? e.zoom : s.w / (o * 2))(i <= 0 ? e.zoom : s.h / (i * 2));
}, T$ = { pre: 0, post: 0 }, J$ = (t) => (n) => (e) => (r) => (o) => {
  const i = Mg(o.event.id)(e), s = (() => {
    if (i.tag === "Nothing")
      return T$;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = (() => {
    if (o.event.when.tag === "First")
      return 0;
    if (o.event.when.tag === "At")
      return o.event.when._1;
    if (o.event.when.tag === "After") {
      const a = o.event.when._1, l = Mt((d) => d.event.id === a)(r);
      if (l.tag === "Nothing")
        return 0;
      if (l.tag === "Just")
        return l._1.endT;
      f();
    }
    if (o.event.when.tag === "With") {
      const a = o.event.when._1, l = Mt((d) => d.event.id === a)(r);
      if (l.tag === "Nothing")
        return 0;
      if (l.tag === "Just")
        return l._1.startT;
    }
    f();
  })(), c = (() => {
    if (o.event.kind.tag === "SendToken")
      return _$(t)(n)(s)(o.event.kind._1);
    if (o.event.kind.tag === "FillNodeWithoutTransition")
      return { duration: t.plop, holdPre: 0, holdPost: 0 };
    f();
  })();
  return Pt(r)({ startT: u, endT: u + c.duration, event: o.event, holdPre: c.holdPre, holdPost: c.holdPost });
}, Zg = (t) => (n) => (e) => w(J$(t)(n)(h$(t)(e)))([])(Rt((r) => (o) => ({ event: o }))(e)), Oa = (t) => (n) => (e) => (r) => (o) => {
  const i = { width: n.widthPx, height: n.heightPx }, s = Qa(i)((() => {
    const u = Ai(e)(o);
    return { vx: u.x, vy: u.y, vw: u.w, vh: u.h };
  })());
  return t.labelBasePx * r.placement.scale * (i.width <= 0 || s.vw <= 0 ? 0 : i.width / s.vw);
}, b$ = (t) => (n) => (e) => (r) => (o) => {
  const i = Oa(t)(n)(e)(r)(o);
  return i <= t.minimumReadableLabelPx ? o : { ...o, zoom: o.zoom * t.minimumReadableLabelPx / i };
}, k$ = (t) => (n) => {
  const e = Wa(n)(t.interiors);
  if (e.tag === "Nothing")
    return t;
  if (e.tag === "Just")
    return e._1;
  f();
}, L$ = (t) => (n) => (e) => (r) => ({
  ...r,
  fromCam: u0(t)(n)(e)(r.fromCam),
  toCam: u0(t)(n)(e)(r.toCam)
}), E$ = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (o.tag === "Nothing")
    return i.zoom;
  if (o.tag === "Just")
    return Ee(0)(N$(n)(e)(i)((() => {
      const s = t.padding * r.placement.scale;
      return { x: o._1.x - s, y: o._1.y - s, w: o._1.w + s * 2, h: o._1.h + s * 2 };
    })()));
  f();
}, S$ = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Oa(t)(n)(e)(r)(i);
  return s <= 0 ? i : { ...i, zoom: li(i.zoom * t.minimumReadableLabelPx / s)(E$(t)(n)(e)(r)(o)(i)) };
}, C$ = (t) => {
  if (t.when.tag === "First")
    return [];
  if (t.when.tag === "At")
    return [];
  if (t.when.tag === "After")
    return [t.when._1];
  if (t.when.tag === "With")
    return [t.when._1];
  f();
}, g0 = { id: "", nodes: I, edges: I, kind: Ci }, A$ = (t) => (n) => Zp((() => {
  const e = ho(n.from)(t);
  if (e.tag === "Nothing")
    return g0;
  if (e.tag === "Just")
    return e._1;
  f();
})())((() => {
  const e = ho(n.to)(t);
  if (e.tag === "Nothing")
    return g0;
  if (e.tag === "Just")
    return e._1;
  f();
})()), P$ = (t) => (n) => {
  const e = Wa(n)(t.interiors);
  if (e.tag === "Nothing")
    return { layout: t.layout, interiors: I };
  if (e.tag === "Just")
    return e._1;
  f();
}, Zu = (t) => (n) => (e) => (r) => {
  const o = xu(r)(e.edges);
  if (o.tag === "Just")
    return t <= 0 ? n : Ee(n)(gu(o._1) / t);
  if (o.tag === "Nothing")
    return n;
  f();
}, t1 = (t) => (n) => (e) => (r) => (o) => {
  const i = t.plop, s = A$(e)(o), u = Q((g) => ({
    startT: 0,
    endT: 0 + Zu(t.edgeSpeed)(t.minEdgeDuration)(n)(g),
    target: _o("EdgeWindow", g, Ec("Extend", Yg))
  }))(co(s.entering.edges)), c = Q((g) => ({ startT: 0, endT: i, target: _o("NodeWindow", g, jg) }))(co(s.entering.nodes)), a = w(Ee)(0)(Q((g) => Zu(t.edgeSpeed)(t.minEdgeDuration)(n)(g))(co(s.leaving.edges))), l = (g) => ue(
    (p) => {
      const $ = xu(p)(r);
      if ($.tag === "Just")
        return $._1.source === g || $._1.target === g;
      if ($.tag === "Nothing")
        return !1;
      f();
    },
    co(s.leaving.edges)
  ) ? a : 0, d = Q((g) => ({ startT: l(g), endT: l(g) + t.plop, target: _o("NodeWindow", g, f$) }))(co(s.leaving.nodes)), _ = Q((g) => ({
    startT: 0,
    endT: Zu(t.edgeSpeed)(t.minEdgeDuration)(n)(g),
    target: _o("EdgeWindow", g, Ec("Retract", v$(r)(s.leaving.nodes)(g)))
  }))(co(s.leaving.edges));
  return {
    duration: (() => {
      const g = Ct(ot.compare)([
        ...Q(($) => $.endT)(_),
        ...Q(($) => $.endT)(d),
        ...Q(($) => $.endT)(c),
        ...Q(($) => $.endT)(u)
      ]), p = g.length - 1 | 0;
      return p >= 0 && p < g.length ? g[p] + t.gap : t.gap;
    })(),
    windows: [..._, ...d, ...c, ...u]
  };
}, G$ = (t) => (n) => (e) => (r) => (o) => (i) => Q((() => {
  const s = o.startT;
  return (u) => ({ ...u, startT: u.startT + s, endT: u.endT + s });
})())(t1(t)(n)(e)(r)(i).windows), F$ = (t) => yt((n) => Gt(Jo, n).length > 1 ? N(
  "Just",
  (() => {
    const e = Bt(
      (r) => v,
      (r) => (o) => N("Just", { head: r, tail: o }),
      Gt(Jo, n)
    );
    if (e.tag === "Just")
      return e._1.head;
    if (e.tag === "Nothing")
      return "";
    f();
  })()
) : v)(Jh(Ro)(Ct(G.compare)(t))), I$ = (t) => {
  const n = Q((r) => r.id)(t), e = i$(n);
  return [
    ...Q(c$)(F$(n)),
    ...Q(a$)(at((r) => !Cc(r)(e), xt(t)(C$)))
  ];
}, R$ = (t) => {
  const n = Kg(Q((r) => k(
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
    if (Cc(i)(o))
      return [Tr("ScheduleCycle", [...Gt(ae.foldr, o), i])];
    if (Cc(i)(r))
      return [];
    const s = Mg(i)(n);
    if (s.tag === "Nothing")
      return [];
    if (s.tag === "Just")
      return xt(s._1)(e(K(G)(i)()(r))(K(G)(i)()(o)));
    f();
  };
  return xt(t)((r) => e(I)(I)(r.id));
}, qa = {
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
  nodeEasing: fm,
  edgeEasing: am,
  tokenEasing: Ba,
  diveDur: 1.2,
  retreatDur: 1.2
}, B$ = (t) => (n) => (e) => (r) => Q((() => {
  const o = e.startT;
  return (i) => ({ ...i, startT: i.startT + o, endT: i.endT + o });
})())(yt(p$)(Zg(t)(n)(r.events))), z$ = (t) => (n) => (e) => (r) => (o) => {
  if (o.scene.tag === "Structural")
    return G$(t)(n)(e)(r)(o)(o.scene._1);
  if (o.scene.tag === "Hold")
    return [];
  if (o.scene.tag === "DataFlow")
    return B$(t)(n)(o)(o.scene._1);
  if (o.scene.tag === "EnterNode")
    return [];
  if (o.scene.tag === "ExitNode")
    return [];
  f();
}, D$ = (t) => (n) => (e) => {
  const r = Zg(t)(n)(e.events);
  return r.length === 0 ? t.gap : w(Ee)(0)(Q((o) => o.endT)(r)) + t.gap;
}, Q$ = (t) => (n) => (e) => (r) => (o) => {
  if (o.tag === "Structural")
    return t1(t)(n)(e)(r)(o._1).duration;
  if (o.tag === "Hold")
    return t.stillHold;
  if (o.tag === "DataFlow")
    return D$(t)(n)(o._1);
  if (o.tag === "EnterNode" || o.tag === "ExitNode")
    return 0;
  f();
}, n1 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Dp(n)(r), u = e.layout, c = Fg(Q(($) => k($.id, $))(o.keyframes)), a = 0 < o.keyframes.length ? N("Just", o.keyframes[0]) : v, l = (() => {
    if (a.tag === "Just")
      return a._1.id;
    if (a.tag === "Nothing")
      return "";
    f();
  })(), d = um(o), _ = ($) => ({
    segments: $.runSpans.length === 0 ? $.segments : Pt($.segments)({
      startT: $.runStart,
      endT: $.t,
      path: r,
      layout: u,
      placement: s,
      windows: $.runWindows,
      spans: $.runSpans,
      keyframes: c,
      initialKeyframe: l,
      edgeEndpoints: d
    }),
    spans: $.spans,
    windows: $.windows,
    dives: $.dives
  }), g = w(($) => (h) => {
    if (h.tag === "EnterNode") {
      const J = _($), T = $.t + t.diveDur, b = Pt(r)(h._1), L = n1(t)(n)(P$(e)(h._1))(b)(k$(o)(h._1))(T), A = L.endT + t.retreatDur;
      return {
        ...$,
        t: A,
        runStart: A,
        runSpans: [],
        runWindows: [],
        segments: [...J.segments, ...L.segments],
        spans: [...J.spans, ...L.spans],
        windows: [...J.windows, ...L.windows],
        dives: [
          ...J.dives,
          { startT: $.t, endT: T, node: h._1, parentPath: r, childPath: b, direction: l$ },
          ...L.dives,
          { startT: L.endT, endT: A, node: h._1, parentPath: r, childPath: b, direction: g$ }
        ]
      };
    }
    if (h.tag === "ExitNode")
      return $;
    const m = $.t + Q$(t)(u)(c)(d)(h), y = { startT: $.t, endT: m, scene: h }, x = z$(t)(u)(c)(d)(y);
    return {
      ...$,
      t: m,
      runSpans: Pt($.runSpans)(y),
      runWindows: [...$.runWindows, ...x],
      spans: Pt($.spans)(y),
      windows: [...$.windows, ...x]
    };
  })({ t: i, runStart: i, runSpans: [], runWindows: [], segments: [], spans: [], windows: [], dives: [] })(o.scenes), p = _(g);
  return {
    endT: g.t,
    spans: p.spans,
    windows: Ct(($) => (h) => ot.compare($.startT)(h.startT))(p.windows),
    segments: p.segments,
    dives: p.dives
  };
}, H$ = (t) => (n) => (e) => e.endT <= t || e.startT >= n ? v : N("Just", { ...e, startT: Ee(t)(e.startT), endT: li(n)(e.endT) }), Ac = (t) => (n) => (e) => (r) => (o) => (i) => yt(H$(i.startT)(i.endT))(Q(L$(e)(i.layout)(i.placement))(x$(t)(n)(r)(i.edgeEndpoints)(o)(i))), Xa = (t) => (n) => (e) => (r) => qp(t)(n)(e)(r.layout)(r.placement)((() => {
  if (r.layout.nodes.tag === "Leaf")
    return 0;
  if (r.layout.nodes.tag === "Node")
    return r.layout.nodes._2;
  f();
})()).camera, W$ = (t) => (n) => (e) => (r) => r.placement.scale === 1 && r.placement.tx === 0 && r.placement.ty === 0 ? Tm(r.placement)(Ns(t)(r.layout)(bn(r.layout))(0)) : Xa(t)(n)(e)(r), e1 = (t) => (n) => (e) => (r) => (o) => {
  const i = Ai(e)(o);
  return (() => {
    const s = bn(r.layout), u = s.x * r.placement.scale + r.placement.tx, c = s.y * r.placement.scale + r.placement.ty;
    return u >= i.x && c >= i.y && u + s.w * r.placement.scale <= i.x + i.w && c + s.h * r.placement.scale <= i.y + i.h;
  })() && Oa(t)(n)(e)(r)(o) >= t.minimumReadableLabelPx;
}, tc = (t) => (n) => (e) => (r) => (o) => (i) => e1(t)(n)(e)(r)(i) ? i : S$(t)(n)(e)(r)(o)(i), O$ = (t) => (n) => {
  if (n.tag === "Structural")
    return yt((e) => e)([
      Mi(n._1.from)(t) ? v : N("Just", Tr("UnknownKeyframe", n._1.from)),
      Mi(n._1.to)(t) ? v : N("Just", Tr("UnknownKeyframe", n._1.to))
    ]);
  if (n.tag === "Hold")
    return yt((e) => e)([Mi(n._1)(t) ? v : N("Just", Tr("UnknownKeyframe", n._1))]);
  if (n.tag === "DataFlow")
    return [
      ...yt((e) => e)([Mi(n._1.keyframe)(t) ? v : N("Just", Tr("UnknownKeyframe", n._1.keyframe))]),
      ...I$(n._1.events),
      ...R$(n._1.events)
    ];
  if (n.tag === "EnterNode")
    return [];
  if (n.tag === "ExitNode")
    return [];
  f();
}, q$ = (t) => (n) => {
  const e = xt(n)(O$(t));
  return e.length === 0 ? Tt("Right", void 0) : Tt("Left", e);
}, nc = (t) => (n) => (e) => (r) => (o) => (i) => e1(t)(n)(e)(r)(o) ? o : b$(t)(n)(e)(r)(i), X$ = (t) => (n) => {
  const e = Bt((r) => v, (r) => (o) => N("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ ...e._1.head, fromCam: t }, ...e._1.tail];
  f();
}, Y$ = (t) => (n) => {
  const e = n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y ? (n.startT + n.endT) / 2 : n.endT + 1e-4, r = yt((o) => o.target.tag === "TokenWindow" ? N("Just", Bg(t.layout)(t.edgeEndpoints)(o.target._2)) : o.target.tag === "FillWindow" ? N(
    "Just",
    Ra(t.layout)(t.edgeEndpoints)(Yt(
      "Node",
      1,
      1,
      o.target._2,
      void 0,
      I,
      I
    ))
  ) : v)(at((o) => o.startT <= e && e < o.endT, t.windows));
  return r.length === 0 ? v : N(
    "Just",
    (() => {
      const o = Yr(r);
      return { x: o.x * t.placement.scale + t.placement.tx, y: o.y * t.placement.scale + t.placement.ty, w: o.w * t.placement.scale, h: o.h * t.placement.scale };
    })()
  );
}, r1 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = o(i.fromCam), u = o(i.toCam), c = Y$(r)(i);
  return s.zoom === u.zoom && s.center.x === u.center.x && s.center.y === u.center.y ? {
    ...i,
    fromCam: tc(t)(n)(e)(r)(c)(s),
    toCam: tc(t)(n)(e)(r)(c)(u)
  } : { ...i, fromCam: s, toCam: tc(t)(n)(e)(r)(c)(u) };
}, o1 = (t) => (n) => (e) => (r) => (o) => (i) => i.intent === "ActionFocus" ? r1(t)(n)(e)(r)(nc(t)(n)(e)(r)(o))(i) : {
  ...i,
  fromCam: nc(t)(n)(e)(r)(o)(i.fromCam),
  toCam: nc(t)(n)(e)(r)(o)(i.toCam)
}, i1 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Mt((u) => u.intent === "ActionFocus" && He(u.startT - r.startT) < 1e-4)(i);
  if (s.tag === "Just") {
    const u = o1(t)(n)(e)(r)(o)(s._1).toCam;
    return u.zoom < o.zoom ? { ...o, zoom: u.zoom } : o;
  }
  if (s.tag === "Nothing")
    return o;
  f();
}, U$ = (t) => (n) => (e) => (r) => (o) => i1(t)(n)(e)(r)(Xa(t)(n)(e)(r))(o), V$ = (t) => (n) => (e) => (r) => (o) => yt((i) => {
  const s = m$(o)(i.parentPath)(i.startT)(i.endT);
  if (s.tag === "Just") {
    const u = i.childPath, c = Mt((a) => Sc(a.path)(u))(o.segments);
    if (c.tag === "Just") {
      const a = W$(t)(n)(e)(s._1), l = U$(t)(n)(e)(c._1)(Ac(t)(n)(e)(r)(o)(c._1));
      if (i.direction === "DiveIn")
        return N(
          "Just",
          {
            startT: i.startT,
            endT: i.endT,
            fromCam: a,
            toCam: l,
            easing: Sr,
            interp: i0,
            intent: s0
          }
        );
      if (i.direction === "DiveOut")
        return N(
          "Just",
          {
            startT: i.startT,
            endT: i.endT,
            fromCam: l,
            toCam: a,
            easing: Sr,
            interp: i0,
            intent: s0
          }
        );
      f();
    }
    if (c.tag === "Nothing")
      return v;
    f();
  }
  if (s.tag === "Nothing")
    return v;
  f();
})(o.dives), K$ = (t) => (n) => (e) => (r) => (o) => o.intent === "ActionFocus" ? r1(t)(n)(e)(r)(s$)(o) : o, M$ = (t) => (n) => (e) => (r) => (o) => Ct((i) => (s) => ot.compare(i.startT)(s.startT))(xt(o.segments)((i) => {
  if (i.placement.scale === 1 && i.placement.tx === 0 && i.placement.ty === 0)
    return l0(Q(K$(t)(n)(e)(i))(Ac(t)(n)(e)(r)(o)(i)));
  const s = Ac(t)(n)(e)(r)(o)(i), u = Xa(t)(n)(e)(i), c = i1(t)(n)(e)(i)(u)(s);
  return s.length === 0 ? [
    {
      startT: i.startT,
      endT: i.endT,
      fromCam: c,
      toCam: c,
      easing: Ba,
      interp: ws,
      intent: pm
    }
  ] : l0(X$(c)(Q(o1(t)(n)(e)(i)(u))(s)));
})), s1 = (t) => (n) => (e) => (r) => (o) => [
  ...V$(t)(n)(e)(r)(o),
  ...M$(t)(n)(e)(r)(o)
], Ya = (t) => (n) => (e) => (r) => {
  if (0 < e.keyframes.length) {
    const o = e.keyframes[0], i = Fg(Q((u) => k(u.id, u))(e.keyframes)), s = q$(i)(e.scenes);
    return (() => {
      if (s.tag === "Left") {
        const u = s._1;
        return (c) => Tt("Left", u);
      }
      if (s.tag === "Right") {
        const u = s._1;
        return (c) => c(u);
      }
      f();
    })()(() => {
      const u = n1(n)(r)(r)([])(e)(0);
      return Tt(
        "Right",
        {
          totalDuration: u.endT,
          windows: u.windows,
          spans: u.spans,
          keyframes: i,
          initialKeyframe: o.id,
          timing: n,
          layout: r.layout,
          cameraSpans: s1(t)(Em)(r.layout)(i)(u),
          cameraConfig: t,
          levelTree: r,
          segments: u.segments,
          dives: u.dives,
          seed: e.seed
        }
      );
    });
  }
  return Tt("Left", [u$]);
}, u1 = (t) => (n) => ({
  ...n,
  cameraSpans: s1(n.cameraConfig)(t)(n.layout)(n.keyframes)({
    endT: n.totalDuration,
    spans: n.spans,
    windows: n.windows,
    segments: n.segments,
    dives: n.dives
  })
}), Ua = (t) => t, c1 = /* @__PURE__ */ cn(G)(qt), gi = { eq: /* @__PURE__ */ ou(Ro) }, Va = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ir = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, d0 = qt.foldMap(_p(G)), j$ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Z$ = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Ve);
  return (n) => t(ge("IterNode", n, Ue));
})(), po = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ty = (t) => (e) => {
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
}, ny = (t) => (e) => {
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
}, ey = /* @__PURE__ */ cn(G)(qt), ry = /* @__PURE__ */ cn(G)(qt), oy = (t) => (n) => (e) => {
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
}, a1 = /* @__PURE__ */ Ua("Backdrop"), iy = /* @__PURE__ */ Ua("FlyThrough"), ks = /* @__PURE__ */ Ua("Active"), sy = (t) => (n) => (e) => ({ ...e, state: { ...e.state, edgeFadeAlpha: c1(Q((r) => k(r, n))(t)) } }), _0 = (t) => (n) => (e) => {
  const r = (t + n) / 2, o = e - r, i = o < 0 ? -1 : 1, s = (n - t) / 2, u = s * 0.15, c = s - u, a = o < 0 ? -o : o;
  return n <= t ? (t + n) / 2 : a <= c ? e : r + i * (s - u * Lo(-(a - c) / u));
}, Ls = (t) => (n) => (e) => {
  const r = Mt((o) => gi.eq(o.path)(n) && e >= o.startT && e < o.endT)(t.segments);
  if (r.tag === "Just")
    return N("Just", r._1);
  if (r.tag === "Nothing")
    return Mt((o) => gi.eq(o.path)(n))(t.segments);
  f();
}, uy = (t) => ({
  startT: 0,
  endT: t.totalDuration,
  path: [],
  layout: t.layout,
  placement: Ga,
  windows: t.windows,
  spans: t.spans,
  keyframes: t.keyframes,
  initialKeyframe: t.initialKeyframe,
  edgeEndpoints: I
}), cy = (t) => Q((n) => n < 1 ? [] : Jt(0, n, t))(zt(0, t.length - 1 | 0)), ec = (t) => (n) => {
  const e = Va(n)(t.keyframes);
  if (e.tag === "Nothing")
    return I;
  if (e.tag === "Just")
    return e._1.nodes;
  f();
}, rc = (t) => (n) => {
  const e = Va(n)(t.keyframes);
  if (e.tag === "Nothing")
    return I;
  if (e.tag === "Just")
    return e._1.edges;
  f();
}, vu = (t) => (n) => {
  if (n < t.startT)
    return mr("AtKeyframe", t.initialKeyframe);
  const e = Mt((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return mr("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return mr("AtKeyframe", e._1.scene._1.keyframe);
    if (e._1.scene.tag === "Hold")
      return mr("AtKeyframe", e._1.scene._1);
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode")
      return mr("AtKeyframe", t.initialKeyframe);
    f();
  }
  if (e.tag === "Nothing") {
    const r = t.spans.length - 1 | 0;
    return r >= 0 && r < t.spans.length ? mr(
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
    ) : mr("AtKeyframe", t.initialKeyframe);
  }
  f();
}, ay = /* @__PURE__ */ w((t) => (n) => {
  const e = ke(t);
  return e.tag === "Just" && n.startT <= e._1.last.endT + 1e-6 ? Pt(e._1.init)({ ...e._1.last, endT: ir(e._1.last.endT)(n.endT), windows: Pt(e._1.last.windows)(n) }) : Pt(t)({ endT: n.endT, windows: [n] });
})([]), fy = (t) => (n) => (e) => d0((r) => d0((o) => o.target.tag === "FillWindow" ? o.startT <= e ? Yt("Node", 1, 1, o.target._2, void 0, I, I) : I : o.target.tag === "TokenWindow" && o.startT + (o.endT - o.startT) * 0.25 <= e ? Yt("Node", 1, 1, o.target._4, void 0, I, I) : I)(r.windows))(at(
  (r) => e <= r.endT + t,
  ay(Ct((r) => (o) => ot.compare(r.startT)(o.startT))(at(
    (r) => r.target.tag === "FillWindow" || r.target.tag === "TokenWindow",
    n
  )))
)), ly = (t) => (n) => (e) => ue(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), gy = (t) => (n) => (e) => ue((r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e, t), dy = (t) => (n) => (e) => ue((r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e, t), _y = (t) => (n) => (e) => ue(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), hy = (t) => (n) => {
  const e = vu(t)(n);
  if (e.tag === "AtKeyframe")
    return En(3)(e._1) === "kf-" ? "" : e._1;
  if (e.tag === "InTransition")
    return En(3)(e._2) === "kf-" ? "" : e._2;
  f();
}, py = (t) => (n) => {
  const e = vu(t)(n), r = Va((() => {
    if (e.tag === "AtKeyframe")
      return e._1;
    if (e.tag === "InTransition")
      return e._2;
    f();
  })())(t.keyframes);
  if (r.tag === "Just")
    return r._1.kind;
  if (r.tag === "Nothing")
    return Ci;
  f();
}, f1 = (t) => (n) => (e) => Mt((r) => e(r) && n >= r.startT && n < r.endT)(t), my = {
  nodes: I,
  edges: I,
  tokens: I,
  camera: { center: { x: 0, y: 0 }, zoom: 1 },
  frameTitle: "",
  staticKind: Ci,
  visited: I,
  nodeFadeAlpha: I,
  nodeLabelFadeAlpha: I,
  edgeFadeAlpha: I,
  nodeInvert: I
}, $y = { nodes: I, edges: I, chipExtras: I, edgeLabels: I }, yy = {
  segment: {
    startT: 0,
    endT: 0,
    path: [],
    layout: $y,
    placement: Ga,
    windows: [],
    spans: [],
    keyframes: I,
    initialKeyframe: "",
    edgeEndpoints: I
  },
  state: my,
  bgAlpha: 1,
  blur: 0,
  minis: [],
  role: ks
}, Es = (t) => {
  const n = t.levels.length - 1 | 0;
  return n >= 0 && n < t.levels.length ? t.levels[n] : yy;
}, xy = (t) => (n) => {
  const e = j$(n)(t.nodes);
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
    })() ? N("Just", i._1) : v)(Z$(t.edges));
  }
  f();
}, vy = (t) => (n) => {
  const e = vu(t)(n);
  if (e.tag === "AtKeyframe")
    return ec(t)(e._1);
  if (e.tag === "InTransition")
    return Wn(G.compare, Hn, ec(t)(e._1), ec(t)(e._2));
  f();
}, wy = (t) => (n) => {
  const e = vu(t)(n);
  if (e.tag === "AtKeyframe")
    return rc(t)(e._1);
  if (e.tag === "InTransition")
    return Wn(G.compare, Hn, rc(t)(e._1), rc(t)(e._2));
  f();
}, Ny = (t) => (n) => (e) => {
  const r = bn(t), o = r.h / ir(1e-4)(e.zoom), i = r.w / ir(1e-4)(e.zoom);
  return {
    ...e,
    center: {
      x: i >= n.w ? n.x + n.w / 2 : _0(n.x + i / 2)(n.x + n.w - i / 2)(e.center.x),
      y: o >= n.h ? n.y + n.h / 2 : _0(n.y + o / 2)(n.y + n.h - o / 2)(e.center.y)
    }
  };
}, Ty = (t) => (n) => (e) => Ny(t)((() => {
  const r = n * e.placement.scale, o = bn(e.layout), i = (() => {
    const s = o.x * e.placement.scale + e.placement.tx, u = o.y * e.placement.scale + e.placement.ty;
    return { x: s, y: u, w: (o.x + o.w) * e.placement.scale + e.placement.tx - s, h: (o.y + o.h) * e.placement.scale + e.placement.ty - u };
  })();
  return { x: i.x - r, y: i.y - r, w: i.w + r * 2, h: i.h + r * 2 };
})()), Jy = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : ir(0)(po(1)((n - t.startT) / e));
}, Ss = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : ir(0)(po(1)((n - t.startT) / e));
}, by = (t) => (n) => (e) => (r) => (o) => {
  const i = f1(n)(e)((s) => s.target.tag === "EdgeWindow" && s.target._1 === o);
  if (i.tag === "Just") {
    const s = _r(t.timing.edgeEasing)(Ss(i._1)(e)), u = i._1.target.tag === "EdgeWindow" ? i._1.target._2 : Ec("Extend", Yg);
    if (u.tag === "Retract")
      return Ts("Retracting", u._1, s);
    if (u.tag === "Extend")
      return Ts("Extending", u._1, s);
    f();
  }
  if (i.tag === "Nothing")
    return _y(n)(e)(o) || ly(n)(e)(o) ? ju : ty(o)(r) ? o$ : ju;
  f();
}, ky = (t) => (n) => (e) => {
  const r = wy(n)(e);
  return c1(Q((o) => k(o, by(t)(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return I;
      if (i.tag === "Node")
        return Yt("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return Gt(ae.foldr, o(n.layout.edges));
  })()));
}, Ly = (t) => (n) => (e) => (r) => {
  const o = f1(t)(n)((i) => i.target.tag === "NodeWindow" && i.target._1 === r);
  if (o.tag === "Just") {
    const i = Ss(o._1)(n), s = o._1.target.tag === "NodeWindow" ? o._1.target._2 : jg;
    if (s === "PlopIn")
      return Js("PloppingIn", i);
    if (s === "PlopOut")
      return Js("PloppingOut", i);
    f();
  }
  if (o.tag === "Nothing")
    return dy(t)(n)(r) || gy(t)(n)(r) ? Mu : ny(r)(e) ? r$ : Mu;
  f();
}, Ey = (t) => (n) => (e) => {
  const r = vy(n)(e);
  return ey(Q((o) => k(o, Ly(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return I;
      if (i.tag === "Node")
        return Yt("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return Gt(ae.foldr, o(n.layout.nodes));
  })()));
}, Sy = (t) => (n) => (e) => n.target.tag === "TokenWindow" ? k(
  n.target._1,
  e < n.startT ? Ku : e >= n.endT ? c0 : bs(
    "Travelling",
    {
      edge: n.target._2,
      direction: n.target._3,
      progress: _r(t.timing.tokenEasing)(Ss(n)(e)),
      labels: n.target._6,
      source: n.target._4,
      target: n.target._5,
      holdPre: n.target._7,
      holdPost: n.target._8
    }
  )
) : n.target.tag === "FillWindow" ? k(
  n.target._1,
  e < n.startT ? Ku : e >= n.endT ? c0 : bs("Filling", { node: n.target._2, progress: Ss(n)(e), labels: n.target._3 })
) : k("", Ku), Cy = (t) => (n) => (e) => ry(Q((r) => Sy(t)(r)(e))(at(
  (r) => r.target.tag === "TokenWindow" || r.target.tag === "FillWindow",
  n
))), Ay = (t) => (n) => (e) => ({
  nodes: Ey()(n)(e),
  edges: ky(t)(n)(e),
  tokens: Cy(t)(n.windows)(e),
  camera: za(t.cameraConfig)(n.layout)(t.cameraSpans)(e).camera,
  frameTitle: hy(n)(e),
  staticKind: py(n)(e),
  visited: fy(t.timing.hatchHold)(n.windows)(e),
  nodeFadeAlpha: I,
  nodeLabelFadeAlpha: I,
  edgeFadeAlpha: I,
  nodeInvert: I
}), yo = (t) => (n) => (e) => (r) => ({ segment: e, state: Ay(t)(e)(n), bgAlpha: 1, blur: 0, minis: Py(t)(n)(e), role: r }), Py = (t) => (n) => (e) => yt((r) => {
  const o = Ls(t)(Pt(e.path)(r))(n);
  if (o.tag === "Just")
    return N("Just", { ...yo(t)(oy(o._1.startT)(o._1.endT - 1e-4)(n))(o._1)(a1), bgAlpha: 0 });
  if (o.tag === "Nothing")
    return v;
  f();
})((() => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return I;
    if (o.tag === "Node")
      return Yt("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
    f();
  };
  return Gt(ae.foldr, r(e.layout.nodes));
})()), Gy = (t) => (n) => (e) => cg(
  v,
  Ml,
  (r) => r.direction === "DiveIn" && gi.eq(r.parentPath)(n.path) && e >= r.startT - 0.7 && e < r.startT ? N("Just", { node: r.node, phase: (e - (r.startT - 0.7)) / 0.7 }) : v,
  t.dives
), Fy = (t) => (n) => (e) => (r) => {
  const o = Gy(t)(n)(e);
  if (o.tag === "Just") {
    const i = ee(3.141592653589793 * o._1.phase * 3);
    return {
      ...r,
      state: { ...r.state, nodeInvert: Yt("Node", 1, 1, o._1.node, 1 * i * i, I, I) }
    };
  }
  if (o.tag === "Nothing")
    return r;
  f();
}, l1 = (t) => (n) => yt((e) => {
  const r = Mt((o) => o.direction === "DiveIn" && gi.eq(o.childPath)((() => {
    const i = e.length + 1 | 0;
    return i < 1 ? [] : Jt(0, i, n);
  })()))(t.dives);
  if (r.tag === "Just") {
    const o = Ls(t)(e)(r._1.startT - 1e-4);
    if (o.tag === "Just")
      return N(
        "Just",
        (() => {
          const i = yo(t)(r._1.startT - 1e-4)(o._1)(a1);
          return { ...i, state: { ...i.state, nodeFadeAlpha: Yt("Node", 1, 1, r._1.node, 0, I, I) } };
        })()
      );
    if (o.tag === "Nothing")
      return v;
    f();
  }
  if (r.tag === "Nothing")
    return v;
  f();
})(cy(n)), g1 = (t) => (n) => {
  const e = at((o) => n >= o.startT && n < o.endT, t.segments), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r] : uy(t);
}, Iy = (t) => (n) => (e) => {
  const r = Jy(e)(n), o = Ls(t)(e.parentPath)((() => {
    if (e.direction === "DiveIn")
      return e.startT - 1e-4;
    if (e.direction === "DiveOut")
      return e.endT - 1e-4;
    f();
  })()), i = Ls(t)(e.childPath)((() => {
    if (e.direction === "DiveIn")
      return e.endT;
    if (e.direction === "DiveOut")
      return e.startT - 1e-4;
    f();
  })()), s = (() => {
    if (e.direction === "DiveIn")
      return _r(Sr)(r);
    if (e.direction === "DiveOut")
      return 1 - _r(Sr)(r);
    f();
  })(), u = 1 - ir(0)(po(1)((s - 0.1) / 0.25)), c = 1 - ir(0)(po(1)((s - 0.1) / 0.25)), a = 1 - ir(0)(po(1)((s - 0.8) / 0.2)), l = (_) => {
    const g = yo(t)((() => {
      if (e.direction === "DiveIn")
        return e.startT - 1e-4;
      if (e.direction === "DiveOut")
        return e.endT - 1e-4;
      f();
    })())(_)(iy);
    return {
      ...sy(xy(_.layout)(e.node))(c)({
        ...g,
        state: {
          ...g.state,
          nodeFadeAlpha: Yt("Node", 1, 1, e.node, u, I, I),
          nodeLabelFadeAlpha: Yt("Node", 1, 1, e.node, c, I, I)
        }
      }),
      minis: at((p) => !gi.eq(p.segment.path)(e.childPath), g.minis),
      bgAlpha: a
    };
  }, d = 0 + 1 * ir(0)(po(1)((s - 0.1) / 0.5));
  return [
    ...l1(t)(e.parentPath),
    ...(() => {
      if (o.tag === "Just") {
        if (i.tag === "Just")
          return [
            l(o._1),
            {
              ...yo(t)((() => {
                if (e.direction === "DiveIn")
                  return e.endT;
                if (e.direction === "DiveOut")
                  return e.startT - 1e-4;
                f();
              })())(i._1)(ks),
              bgAlpha: d
            }
          ];
        if (i.tag === "Nothing")
          return [l(o._1)];
        f();
      }
      if (o.tag === "Nothing")
        return [yo(t)(n)(g1(t)(n))(ks)];
      f();
    })()
  ];
}, Ry = (t) => (n) => Mt((e) => n >= e.startT && n < e.endT)(t.dives), By = (t) => (n) => {
  const e = g1(t)(n), r = yo(t)(n)(e)(ks), o = t.dives.length !== 0, i = za(t.cameraConfig)(t.layout)(t.cameraSpans)(n).camera, s = Ty(t.layout)(t.cameraConfig.padding)(e)(i), u = Fy(t)(e)(n)({ ...r, state: { ...r.state, camera: s } }), c = l1(t)(e.path), a = Ry(t)(n);
  if (a.tag === "Just")
    return { levels: Iy(t)(n)(a._1), camera: i, rootLayout: t.layout, hasDives: o, diving: !0 };
  if (a.tag === "Nothing")
    return { levels: Pt(c)(u), camera: s, rootLayout: t.layout, hasDives: o, diving: !1 };
  f();
}, d1 = (t) => t, _1 = /* @__PURE__ */ d1("RunText"), zy = /* @__PURE__ */ d1("RunCode"), h1 = (t) => (n) => (e) => n.length === 0 ? e : Pt(e)({ style: t, text: io(n) }), Dy = (t) => ({
  style: (() => {
    if (t.style === "RunText")
      return zy;
    if (t.style === "RunCode")
      return _1;
    f();
  })(),
  buf: [],
  runs: h1(t.style)(t.buf)(t.runs)
}), Qy = (t) => (n) => 0 < n.length ? { ...t, buf: Pt(t.buf)(n[0]) } : { ...t, buf: Pt(t.buf)("\\") }, Hy = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, c = Bt((a) => v, (a) => (l) => N("Just", { head: a, tail: l }), r);
    if (c.tag === "Nothing") {
      o = !1, i = s;
      continue;
    }
    if (c.tag === "Just") {
      if (c._1.head === "\\") {
        e = Qy(s)(c._1.tail), r = Jt(1, c._1.tail.length, c._1.tail);
        continue;
      }
      if (c._1.head === "`") {
        e = Dy(s), r = c._1.tail;
        continue;
      }
      e = { ...s, buf: Pt(s.buf)(c._1.head) }, r = c._1.tail;
      continue;
    }
    f();
  }
  return i;
}, p1 = (t) => {
  const n = Hy({ style: _1, buf: [], runs: [] })(Gr(t));
  return h1(n.style)(n.buf)(n.runs);
};
let ji = null;
function Wy() {
  return ji || (typeof document > "u" ? null : (ji = document.createElement("canvas").getContext("2d"), ji));
}
const h0 = /* @__PURE__ */ new Map(), Oy = (t) => (n) => (e) => (r) => () => {
  const o = `${e} ${n}px ${t}|${r}`, i = h0.get(o);
  if (i !== void 0) return i;
  const s = Wy();
  if (!s)
    return r.length * n * 0.62;
  s.font = `${e} ${n}px ${t}`;
  const u = s.measureText(r).width;
  return h0.set(o, u), u;
}, qy = Pr.traverse(oo), Xy = /* @__PURE__ */ w(no)(0), Po = /* @__PURE__ */ (() => {
  const t = Nr(`\r
`)(" "), n = Nr(`
`)(" "), e = (() => {
    const r = Nr("\r")(" "), o = (() => {
      const i = Nr("	")(" ");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), m1 = (t) => (n) => {
  const e = qy((r) => {
    const o = (() => {
      if (r.style === "RunText")
        return t.text;
      if (r.style === "RunCode")
        return t.code;
      f();
    })();
    return Oy(o.family)(o.size)(o.weight)(Po(r.text));
  })(p1(Po(n)));
  return () => {
    const r = e();
    return Xy(r);
  };
}, Yy = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: "500" }, Uy = { family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", size: 11, weight: "400" }, $1 = { text: Yy, code: Uy }, Vy = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, lo = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ky = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, My = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, jy = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, p0 = (t) => io(An(Or((n) => n === " ")(An(Or((n) => n === " ")(Gr(t)).rest)).rest)), Zy = (t) => w((n) => (e) => e._1 > 0 && (e._2 === " " || e._2 === "-" || e._2 === "_" || e._2 === ".") ? N("Just", e._1) : n)(v)(Rt(In)(t)), Pc = (t) => (n) => {
  if (t <= 0)
    return [n];
  if (dr(n) <= t)
    return [n];
  const e = Gr(n), r = t < 1 ? [] : Jt(0, t, e), o = Zy(r);
  if (o.tag === "Just") {
    const i = p0(Uf(!(o._1 >= 0 && o._1 < r.length) || r[o._1] === " " ? o._1 : o._1 + 1 | 0)(n)), s = p0(ui(o._1 + 1 | 0)(n));
    return s === "" ? [i] : [i, ...Pc(t)(s)];
  }
  if (o.tag === "Nothing") {
    const i = Uf(t)(n), s = ui(t)(n);
    return s === "" ? [i] : [i, ...Pc(t)(s)];
  }
  f();
}, t2 = { cellW: 7, cellH: 3, maxLineWidth: 20 }, n2 = (t) => (n) => {
  const e = Q((i) => k(
    (() => {
      if (i.label.tag === "Just")
        return i.label._1;
      if (i.label.tag === "Nothing")
        return i.id;
      f();
    })(),
    i
  ))(n.nodes), r = lo(1)(Ne(
    (Ky(t.maxLineWidth)(w((i) => (s) => lo(i)(dr(s._1)))(0)(e)) + 2 | 0) + t.cellW | 0,
    t.cellW
  )), o = (r * t.cellW | 0) - 1 | 0;
  return {
    ...n,
    nodes: Q((i) => {
      if (!(i._2.size._1 === 1 && i._2.size._2 === 1))
        return i._2;
      const s = xt(pu(`
`)(i._1))(Pc(o)), u = w((a) => (l) => lo(a)(dr(l)))(0)(s), c = i._2.shape === "Cylinder" ? lo(1)(Ne((u + 2 | 0) + t.cellW | 0, t.cellW)) : r;
      return {
        ...i._2,
        size: k(
          M(u > o ? Ne((u + 2 | 0) + t.cellW | 0, t.cellW) : c),
          M(lo(1)(Ne(s.length + t.cellH | 0, t.cellH)) + (i._2.shape === "Cylinder" || i._2.shape === "Document" ? 1 : 0) | 0)
        )
      };
    })(e)
  };
}, e2 = (t) => (n) => (e) => ({
  ...e,
  nodes: Q((r) => {
    const o = jy(r.id)(n);
    if (o.tag === "Nothing")
      return r;
    if (o.tag === "Just")
      return {
        ...r,
        size: k(
          My(r.size._1)(M(lo(1)(vn(iu(r.shape === "Cylinder" ? (o._1 + 0) / t : (o._1 + 32) / t))))),
          r.size._2
        )
      };
    f();
  })(e.nodes)
}), r2 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, o2 = (t) => {
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
        let p = _, $ = g, h = !0, m;
        for (; h; ) {
          const y = p, x = $;
          if (y >= n) {
            h = !1, m = x;
            continue;
          }
          if (a >= 0 && a < t.length) {
            if (y >= 0 && y < t.length) {
              p = y + 1 | 0, $ = (() => {
                const J = t[a].position, T = t[a].size, b = t[y].position, L = t[y].size;
                return J._1 < b._1 + L._1 && b._1 < J._1 + T._1 && J._2 < b._2 + L._2 && b._2 < J._2 + T._2;
              })() ? x + 1 | 0 : x;
              continue;
            }
            p = y + 1 | 0, $ = x;
            continue;
          }
          h = !1, m = x;
        }
        return m;
      };
      i = a + 1 | 0, s = d(a + 1 | 0)(l);
    }
    return c;
  })(0)(0);
}, m0 = (t) => w((n) => (e) => n + Cp(e.start)(e.end))(0)(t.segments), i2 = (t) => (n) => (e) => ({
  crossingCount: w((r) => (o) => r + o.jumps.length | 0)(0)(n),
  bendCount: w((r) => (o) => r + o.bends.length | 0)(0)(n),
  totalEdgeLength: w((r) => (o) => r + m0(o))(0)(n),
  maxEdgeLength: w((r) => (o) => r2(r)(m0(o)))(0)(n),
  nodeOverlapCount: o2(t),
  constraintViolations: e,
  jumpCount: w((r) => (o) => r + o.jumps.length | 0)(0)(n)
}), Ka = (t) => t, en = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ma = /* @__PURE__ */ Ka("LEFT"), s2 = /* @__PURE__ */ Ka("RIGHT"), y1 = /* @__PURE__ */ Ka("UNDEFINED"), u2 = {
  eq: (t) => (n) => t === "LEFT" ? n === "LEFT" : t === "RIGHT" ? n === "RIGHT" : t === "UP" ? n === "UP" : t === "DOWN" ? n === "DOWN" : t === "UNDEFINED" && n === "UNDEFINED"
}, c2 = {
  compare: (t) => (n) => {
    if (t === "LEFT")
      return n === "LEFT" ? Yn : Sn;
    if (n === "LEFT")
      return Cn;
    if (t === "RIGHT")
      return n === "RIGHT" ? Yn : Sn;
    if (n === "RIGHT")
      return Cn;
    if (t === "UP")
      return n === "UP" ? Yn : Sn;
    if (n === "UP")
      return Cn;
    if (t === "DOWN")
      return n === "DOWN" ? Yn : Sn;
    if (n === "DOWN")
      return Cn;
    if (t === "UNDEFINED" && n === "UNDEFINED")
      return Yn;
    f();
  },
  Eq0: () => u2
}, a2 = (t) => (e) => {
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
}, f2 = { x: 0, y: 0 }, _e = (t) => (n) => (e) => {
  const r = en(t)(e.cNodes);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cNodes: K(it)(t)(n(r._1))(e.cNodes) };
  f();
}, ri = (t) => (n) => (e) => {
  const r = en(t)(e.cGroups);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cGroups: K(it)(t)(n(r._1))(e.cGroups) };
  f();
}, l2 = (t) => w((n) => (e) => _e(e)((r) => ({ ...r, hitboxPreCompaction: r.hitbox }))(n))(t)(t.cNodeOrder), g2 = (t) => {
  const n = w((e) => (r) => {
    const o = en(r)(t.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return w((i) => (s) => Et(it)(gn)(s)([r])(i))(e)(o._1.constraints);
    f();
  })(I)(t.cNodeOrder);
  return w((e) => (r) => _e(r)((o) => ({
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
}, d2 = (t) => (n) => _e(t)((e) => ({ ...e, ignoreSpacing: { left: e.ignoreSpacing.left || n.left, right: e.ignoreSpacing.right || n.right, up: e.ignoreSpacing.up || n.up, down: e.ignoreSpacing.down || n.down } })), _2 = (t) => {
  const n = w((e) => (r) => ri(r)((o) => ({ ...o, outDegree: o.outDegreeReal }))(e))(t)(t.cGroupOrder);
  return w((e) => (r) => _e(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder);
}, Te = { left: !1, right: !1, up: !1, down: !1 }, h2 = { horizontalSpacing: (t) => (n) => 0, verticalSpacing: (t) => (n) => 0 }, ja = (t) => w((n) => (e) => {
  const r = en(e)(n.cGroups);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just") {
    const o = w((s) => (u) => {
      const c = en(u)(n.cNodes);
      if (c.tag === "Nothing")
        return s;
      if (c.tag === "Just") {
        if (s.tag === "Nothing")
          return N("Just", u);
        if (s.tag === "Just") {
          const a = en(s._1)(n.cNodes);
          if (a.tag === "Nothing")
            return N("Just", u);
          if (a.tag === "Just")
            return c._1.hitbox.x < a._1.hitbox.x ? N("Just", u) : N("Just", s._1);
        }
      }
      f();
    })(v)(r._1.cNodes), i = ri(e)((s) => ({ ...s, reference: o }))(n);
    if (o.tag === "Nothing")
      return i;
    if (o.tag === "Just") {
      const s = en(o._1)(i.cNodes);
      if (s.tag === "Nothing")
        return i;
      if (s.tag === "Just") {
        const u = s._1;
        return w((c) => (a) => _e(a)((l) => ({ ...l, cGroupOffset: { x: l.hitbox.x - u.hitbox.x, y: l.hitbox.y - u.hitbox.y } }))(c))(i)(r._1.cNodes);
      }
    }
  }
  f();
})(t)(t.cGroupOrder), le = (t) => ja({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return I;
      if (e.tag === "Node")
        return Yt("Node", e._1, e._2, e._3, { ...e._4, hitbox: { ...e._4.hitbox, x: -e._4.hitbox.x - e._4.hitbox.width } }, n(e._5), n(e._6));
      f();
    };
    return n(t.cNodes);
  })()
}), Ge = (t) => ja({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return I;
      if (e.tag === "Node")
        return Yt(
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
}), x1 = (t) => {
  const n = w((e) => (r) => ri(r)((o) => ({ ...o, outDegree: 0, outDegreeReal: 0, incomingConstraints: [] }))(e))(t)(t.cGroupOrder);
  return w((e) => (r) => {
    const o = en(r)(e.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just") {
      if (o._1.cGroup.tag === "Nothing")
        return e;
      if (o._1.cGroup.tag === "Just") {
        const i = o._1.cGroup._1;
        return w((s) => (u) => {
          const c = en(u)(s.cNodes);
          if (c.tag === "Nothing")
            return s;
          if (c.tag === "Just")
            return c._1.cGroup.tag === "Just" && c._1.cGroup._1 !== i ? ri(c._1.cGroup._1)((a) => ({ ...a, outDegree: a.outDegree + 1 | 0, outDegreeReal: a.outDegreeReal + 1 | 0 }))(ri(i)((a) => ie(bo)(u)(a.incomingConstraints) ? a : { ...a, incomingConstraints: [...a.incomingConstraints, u] })(s)) : s;
          f();
        })(e)(o._1.constraints);
      }
    }
    f();
  })(n)(n.cNodeOrder);
}, Zi = (t) => {
  const n = g2(t.cGraph);
  return { ...t, cGraph: x1(w((e) => (r) => _e(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder)) };
}, p2 = (t) => (n) => w((e) => (r) => {
  if (t === "LEFT" || t === "UP") {
    const i = r._2;
    return _e(r._1)((s) => ({ ...s, constraints: [...s.constraints, i] }))(e);
  }
  const o = r._1;
  return _e(r._2)((i) => ({ ...i, constraints: [...i.constraints, o] }))(e);
})(n)(t === "LEFT" || t === "RIGHT" ? n.predefinedHorizontalConstraints : n.predefinedVerticalConstraints), ve = (t) => {
  const n = {
    ...t,
    cGraph: p2(t.direction)({
      ...t.cGraph,
      cNodes: (() => {
        const e = (r) => {
          if (r.tag === "Leaf")
            return I;
          if (r.tag === "Node")
            return Yt("Node", r._1, r._2, r._3, { ...r._4, constraints: [] }, e(r._5), e(r._6));
          f();
        };
        return e(t.cGraph.cNodes);
      })()
    })
  };
  return {
    ...n,
    cGraph: x1((() => {
      if (n.constraintAlgorithm.tag === "Nothing")
        return n.cGraph;
      if (n.constraintAlgorithm.tag === "Just")
        return n.constraintAlgorithm._1(n);
      f();
    })())
  };
}, m2 = (t) => (n) => (e) => {
  const r = { ...e, direction: n };
  if (t === "UNDEFINED")
    return n === "LEFT" ? ve(r) : n === "RIGHT" ? ve({ ...r, cGraph: le(r.cGraph) }) : n === "UP" ? ve({ ...r, cGraph: Ge(r.cGraph) }) : n === "DOWN" ? ve({ ...r, cGraph: le(Ge(r.cGraph)) }) : r;
  if (t === "LEFT")
    return n === "RIGHT" ? Zi({ ...r, cGraph: le(r.cGraph) }) : n === "UP" ? ve({ ...r, cGraph: Ge(r.cGraph) }) : n === "DOWN" ? ve({ ...r, cGraph: le(Ge(r.cGraph)) }) : r;
  if (t === "RIGHT")
    return n === "LEFT" ? Zi({ ...r, cGraph: le(r.cGraph) }) : n === "UP" ? ve({ ...r, cGraph: Ge(le(r.cGraph)) }) : n === "DOWN" ? ve({ ...r, cGraph: le(Ge(le(r.cGraph))) }) : r;
  if (t === "UP")
    return n === "LEFT" ? ve({ ...r, cGraph: Ge(r.cGraph) }) : n === "RIGHT" ? ve({ ...r, cGraph: le(Ge(r.cGraph)) }) : n === "DOWN" ? Zi({ ...r, cGraph: le(r.cGraph) }) : r;
  if (t === "DOWN")
    return n === "LEFT" ? ve({ ...r, cGraph: Ge(le(r.cGraph)) }) : n === "RIGHT" ? ve({ ...r, cGraph: le(Ge(le(r.cGraph))) }) : n === "UP" ? Zi({ ...r, cGraph: le(r.cGraph) }) : r;
  f();
}, v1 = (t) => (n) => n.finished || !a2(t)(n.cGraph.supportedDirections) || (t === "LEFT" ? n.direction === "LEFT" : t === "RIGHT" ? n.direction === "RIGHT" : t === "UP" ? n.direction === "UP" : t === "DOWN" ? n.direction === "DOWN" : t === "UNDEFINED" && n.direction === "UNDEFINED") ? n : m2(n.direction)(t)(n), $2 = (t) => {
  if (t.finished)
    return t;
  const n = t.direction === "UNDEFINED" ? v1(Ma)(t) : t, e = { ...n, cGraph: _2(n.cGraph) };
  if (e.compactionAlgorithm.tag === "Nothing")
    return e;
  if (e.compactionAlgorithm.tag === "Just")
    return e.compactionAlgorithm._1(e);
  f();
}, w1 = (t) => (n) => (e) => {
  const r = en(t)(e.cNodes), o = en(n)(e.cGroups);
  return r.tag === "Just" && o.tag === "Just" ? (() => {
    if (r._1.cGroup.tag === "Nothing")
      return !1;
    if (r._1.cGroup.tag === "Just")
      return !0;
    f();
  })() && (r._1.cGroup.tag === "Nothing" || !(r._1.cGroup.tag === "Just" && r._1.cGroup._1 === n)) ? e : {
    ...e,
    cNodes: K(it)(t)({ ...r._1, cGroup: N("Just", n) })(e.cNodes),
    cGroups: K(it)(n)({
      ...o._1,
      cNodes: ie(bo)(t)(o._1.cNodes) ? o._1.cNodes : [...o._1.cNodes, t],
      reference: (() => {
        if (o._1.reference.tag === "Nothing")
          return N("Just", t);
        if (o._1.reference.tag === "Just")
          return N("Just", o._1.reference._1);
        f();
      })()
    })(e.cGroups)
  } : e;
}, N1 = (t) => (n) => ({
  id: n.nextCNodeId,
  graph: {
    ...n,
    cNodes: K(it)(n.nextCNodeId)({
      id: n.nextCNodeId,
      origin: t.origin,
      kind: t.kind,
      cGroup: v,
      cGroupOffset: f2,
      hitbox: t.hitbox,
      hitboxPreCompaction: t.hitbox,
      constraints: [],
      startPos: -1e308,
      ignoreSpacing: Te
    })(n.cNodes),
    cNodeOrder: [...n.cNodeOrder, n.nextCNodeId],
    nextCNodeId: n.nextCNodeId + 1 | 0
  }
}), Za = (t) => (n) => {
  const e = n.nextCGroupId;
  return {
    id: e,
    graph: w((r) => (o) => w1(o)(e)(r))({
      ...n,
      cGroups: K(it)(e)({
        id: e,
        master: t.master,
        cNodes: [],
        startPos: -1e308,
        incomingConstraints: [],
        outDegree: 0,
        outDegreeReal: 0,
        reference: v,
        delta: 0,
        deltaNormalized: 0
      })(n.cGroups),
      cGroupOrder: [...n.cGroupOrder, e],
      nextCGroupId: e + 1 | 0
    })(t.nodes)
  };
}, y2 = (t) => w((n) => (e) => {
  const r = en(e)(n.cNodes);
  return r.tag === "Just" && r._1.cGroup.tag === "Nothing" ? Za({ master: v, nodes: [e] })(n).graph : n;
})(t)(t.cNodeOrder), x2 = (t) => ({
  cGraph: l2(y2(ja(t))),
  direction: y1,
  compactionAlgorithm: v,
  constraintAlgorithm: v,
  spacingsHandler: h2,
  lockFun: v,
  finished: !1
}), v2 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, w2 = (t) => (n) => {
  const e = ot.compare(t._1)(n._1);
  return e === "LT" ? Sn : e === "GT" ? Cn : it.compare(t._2)(n._2);
}, N2 = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Ve);
  return (n) => t(ge("IterNode", n, Ue));
})(), $0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, y0 = (t) => t.kind.tag === "Nothing" ? !1 : t.kind.tag === "Just" && t.kind._1 === "vs", x0 = (t) => t.kind.tag === "Nothing" || !(t.kind.tag === "Just" && t.kind._1 === "vs"), wu = (t) => (n) => w2(k(t.hitbox.x + t.hitbox.width / 2, t.id))(k(n.hitbox.x + n.hitbox.width / 2, n.id)), T2 = (t) => (n) => {
  const e = to(Xt, v, (r) => wu(t)(r) === "LT", n);
  if (e.tag === "Just") {
    const r = ag(Xt, v, e._1, t, n);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return Pt(n)(t);
  f();
}, T1 = (t) => (n) => {
  const e = at((o) => wu(o)(t) === "LT", n), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? N("Just", e[r]) : v;
}, J2 = (t) => (n) => {
  const e = T2(n)(t.intervals), r = Mt((i) => wu(n)(i) === "LT")(e), o = K(it)(n.id)((() => {
    const i = T1(n)(e);
    return i.tag === "Just" ? N("Just", i._1.id) : v;
  })())(t.cand);
  return {
    ...t,
    intervals: e,
    cand: (() => {
      if (r.tag === "Just")
        return K(it)(r._1.id)(N("Just", n.id))(o);
      if (r.tag === "Nothing")
        return o;
      f();
    })()
  };
}, b2 = (t) => (n) => {
  const e = ot.compare(t.low ? t.node.hitbox.y : t.node.hitbox.y + t.node.hitbox.height)(n.low ? n.node.hitbox.y : n.node.hitbox.y + n.node.hitbox.height);
  return e === "EQ" ? t.low ? t.low && !n.low ? Cn : Yn : n.low ? Sn : Yn : e;
}, k2 = (t) => w((n) => (e) => _e(e.id)((r) => ({ ...r, constraints: [] }))(n))(t)(yt((n) => en(n)(t.cNodes))(t.cNodeOrder)), oc = (t) => (n) => w((e) => (r) => {
  const o = en(r._1)(e.cNodes);
  if (o.tag === "Just")
    return _e(r._1)((i) => ({ ...i, constraints: [...i.constraints, ...r._2] }))(e);
  if (o.tag === "Nothing")
    return e;
  f();
})(n)(N2(t)), J1 = (t) => (n) => n.kind.tag !== "Nothing" && n.kind.tag === "Just" && n.kind._1 === "vs" ? n.ignoreSpacing.up ? n.ignoreSpacing.down ? n : { ...n, hitbox: { ...n.hitbox, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t - 0.01, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t, height: n.hitbox.height + 2 * t } }, v0 = (t) => (n) => (e) => w((r) => (o) => e(o) ? _e(o.id)(J1(t))(r) : r)(n)(yt((r) => en(r)(n.cNodes))(n.cNodeOrder)), L2 = (t) => (n) => {
  const e = (r, o, i) => {
    const s = _e(i)(J1(t))(r);
    return o.length <= 1 ? s : w((u) => (c) => c === i ? u : _e(c)((a) => a.ignoreSpacing.up ? { ...a, hitbox: { ...a.hitbox, y: a.hitbox.y + t + 0.01, height: a.hitbox.height - t - 0.01 } } : a.ignoreSpacing.down ? { ...a, hitbox: { ...a.hitbox, height: a.hitbox.height - t - 0.01 } } : a)(u))(s)(o);
  };
  return w((r) => (o) => {
    if (o.master.tag === "Nothing")
      return 0 < o.cNodes.length ? e(r, o.cNodes, o.cNodes[0]) : r;
    if (o.master.tag === "Just")
      return e(r, o.cNodes, o.master._1);
    f();
  })(n)(yt((r) => en(r)(n.cGroups))(n.cGroupOrder));
}, E2 = (t) => (n) => {
  const e = T1(n)(t.intervals), r = Mt((i) => wu(n)(i) === "LT")(t.intervals), o = e.tag === "Just" && (() => {
    const i = $0(n.id)(t.cand);
    return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === e._1.id)) && e._1.cGroup.tag === "Just" && n.cGroup.tag === "Just" && e._1.cGroup._1 !== n.cGroup._1;
  })() ? Et(it)(gn)(e._1.id)([n.id])(t.constraints) : t.constraints;
  return {
    ...t,
    constraints: r.tag === "Just" && (() => {
      const i = $0(r._1.id)(t.cand);
      return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === n.id)) && n.cGroup.tag === "Just" && r._1.cGroup.tag === "Just" && n.cGroup._1 !== r._1.cGroup._1;
    })() ? Et(it)(gn)(n.id)([r._1.id])(o) : o,
    intervals: at((i) => i.id !== n.id, t.intervals)
  };
}, S2 = (t) => (n) => n.low ? J2(t)(n.node) : E2(t)(n.node), ic = (t) => (n) => w(S2)({ intervals: [], cand: I, constraints: I })(Ct(b2)(xt(at(
  t,
  yt((e) => en(e)(n.cNodes))(n.cNodeOrder)
))((e) => [{ node: e, low: !0 }, { node: e, low: !1 }]))).constraints, C2 = (t) => (n) => {
  const e = v2(0)(t / 2 - 0.5), r = oc(ic(y0)(v0(e)(n)(y0)))(n), o = oc(ic(x0)(v0(e)(r)(x0)))(r);
  return oc(ic((i) => !0)(L2(e)(o)))(o);
}, A2 = (t) => (n) => C2(t)(k2(n.cGraph)), Cs = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, w0 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, tf = (t) => (n) => (e) => (r) => (o) => ({
  id: t,
  representedEdges: [o],
  affectedBends: [n, e],
  hitbox: { x: Cs(n._1)(e._1), y: Cs(n._2)(e._2), width: He(n._1 - e._1), height: He(n._2 - e._2) },
  ignoreSpacing: Te,
  potentialGroupParents: (() => {
    if (r.tag === "Nothing")
      return [];
    if (r.tag === "Just")
      return [r._1];
    f();
  })(),
  aPort: v
}), P2 = (t) => (n) => {
  const e = Cs(t.hitbox.x)(n.hitbox.x), r = Cs(t.hitbox.y)(n.hitbox.y);
  return {
    ...t,
    representedEdges: [...t.representedEdges, ...n.representedEdges],
    affectedBends: [...t.affectedBends, ...n.affectedBends],
    potentialGroupParents: [...t.potentialGroupParents, ...n.potentialGroupParents],
    hitbox: {
      x: e,
      y: r,
      width: w0(t.hitbox.x + t.hitbox.width)(n.hitbox.x + n.hitbox.width) - e,
      height: w0(t.hitbox.y + t.hitbox.height)(n.hitbox.y + n.hitbox.height) - r
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
}, G2 = (t) => (n) => He(t.hitbox.x - n.hitbox.x) <= 1e-4 && n.hitbox.y - (t.hitbox.y + t.hitbox.height) <= 1e-4 && t.hitbox.y - (n.hitbox.y + n.hitbox.height) <= 1e-4, F2 = (t) => (n) => He(t.hitbox.x - n.hitbox.x) <= 1e-4 ? ot.compare(t.hitbox.y)(n.hitbox.y) : t.hitbox.x < n.hitbox.x ? Sn : Cn, b1 = (t, n) => ({ tag: t, _1: n }), nf = /* @__PURE__ */ cn(G)(qt), Nu = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, N0 = /* @__PURE__ */ (() => {
  const t = { eq: (e) => (r) => e._1 === r._1 && (e._2.tag === "Nothing" ? r._2.tag === "Nothing" : e._2.tag === "Just" && r._2.tag === "Just" && e._2._1 === r._2._1) }, n = {
    compare: (e) => (r) => {
      const o = G.compare(e._1)(r._1);
      if (o === "LT")
        return Sn;
      if (o === "GT")
        return Cn;
      if (e._2.tag === "Nothing")
        return r._2.tag === "Nothing" ? Yn : Sn;
      if (r._2.tag === "Nothing")
        return Cn;
      if (e._2.tag === "Just" && r._2.tag === "Just")
        return G.compare(e._2._1)(r._2._1);
      f();
    },
    Eq0: () => t
  };
  return w((e) => (r) => K(n)(r)()(e))(I);
})(), fr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, I2 = /* @__PURE__ */ w((t) => (n) => K(c2)(n)()(t))(I), sc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = Eg.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, R2 = (t) => (n) => {
  const e = nf(Q((i) => k(i.id, i))(t)), r = yt((i) => Nu(i)(e))(n), o = it.compare((() => {
    const i = N0(Q((s) => k(s.from.node, s.from.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })())((() => {
    const i = N0(Q((s) => k(s.to.node, s.to.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })());
  if (o === "LT")
    return { ...Te, left: !0, right: !1 };
  if (o === "GT")
    return { ...Te, left: !1, right: !0 };
  if (o === "EQ")
    return Te;
  f();
}, B2 = (t) => yt((n) => {
  if (n.direction === "V")
    return N("Just", { start: n.start, end: n.end });
  if (n.direction === "H")
    return v;
  f();
})(t.segments), ts = (t) => (n) => (e) => (r) => {
  if (r.tag === "Just") {
    const o = fr(e)(n);
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
}, z2 = (t) => (n) => (e) => {
  const r = N1({
    origin: N("Just", b1("SegmentOrigin", e)),
    kind: N("Just", "vs"),
    hitbox: e.hitbox
  })(n.cGraph), o = d2(r.id)(e.ignoreSpacing)(r.graph);
  return {
    ...n,
    cGraph: (() => {
      if (0 < e.potentialGroupParents.length) {
        const i = en(e.potentialGroupParents[0])(o.cNodes);
        if (i.tag === "Just") {
          if (i._1.cGroup.tag === "Just")
            return w1(r.id)(i._1.cGroup._1)(o);
          if (i._1.cGroup.tag === "Nothing")
            return o;
          f();
        }
        if (i.tag === "Nothing")
          return o;
        f();
      }
      return Za({ master: N("Just", r.id), nodes: [r.id] })(o).graph;
    })(),
    edgeToCs: w((i) => (s) => Et(G)(gn)(s)([r.id])(i))(n.edgeToCs)(e.representedEdges),
    lockMap: K(it)(r.id)(R2(t)(e.representedEdges))(n.lockMap)
  };
}, D2 = (t) => (n) => (e) => {
  const r = Bt(
    (o) => v,
    (o) => (i) => N("Just", { head: o, tail: i }),
    Ct(F2)(n)
  );
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just") {
    const o = w((i) => (s) => G2(i.survivor)(s) ? { ...i, survivor: P2(i.survivor)(s) } : { survivor: s, merged: [...i.merged, i.survivor] })({ survivor: r._1.head, merged: [] })(r._1.tail);
    return w(z2(t))(e)([...o.merged, o.survivor]);
  }
  f();
}, Q2 = (t) => ({
  cGraph: {
    cNodes: I,
    cNodeOrder: [],
    cGroups: I,
    cGroupOrder: [],
    supportedDirections: I2([y1, Ma, s2]),
    predefinedHorizontalConstraints: [],
    predefinedVerticalConstraints: [],
    nextCNodeId: 0,
    nextCGroupId: 0
  },
  nodeToC: I,
  edgeToCs: I,
  lockMap: I
}), H2 = (t) => {
  const n = M(4);
  return { x: t.position._1 * n, y: t.position._2 * n, width: t.size._1 * n, height: t.size._2 * n };
}, W2 = (t) => (n) => (e) => w((r) => (o) => {
  const i = N1({ origin: N("Just", b1("NodeOrigin", o.node)), kind: v, hitbox: H2(o) })(r.cGraph), s = fr(o.node)(t), u = (() => {
    if (s.tag === "Nothing")
      return k(0, 0);
    if (s.tag === "Just")
      return s._1;
    f();
  })();
  return {
    ...r,
    cGraph: Za({ master: N("Just", i.id), nodes: [i.id] })(i.graph).graph,
    nodeToC: K(G)(o.node)(i.id)(r.nodeToC),
    lockMap: K(it)(i.id)((() => {
      const c = u._1 - u._2 | 0;
      return c < 0 ? { ...Te, left: !0 } : c > 0 ? { ...Te, right: !0 } : Te;
    })())(r.lockMap)
  };
})(e)(n), O2 = (t) => w((n) => (e) => Et(G)((r) => (o) => k(
  r._1 + o._1 | 0,
  r._2 + o._2 | 0
))(e.to.node)(k(1, 0))(Et(G)((r) => (o) => k(r._1 + o._1 | 0, r._2 + o._2 | 0))(e.from.node)(k(
  0,
  1
))(n)))(I)(t), q2 = (t) => w((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? K(G)(e.origin._1._1)(e.hitbox.x)(n) : n)(I)(yt((n) => en(n)(t.cNodes))(t.cNodeOrder)), X2 = (t) => w((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? K(G)(e.origin._1._1)(e.hitbox.x - e.hitboxPreCompaction.x)(n) : n)(I)(yt((n) => en(n)(t.cNodes))(t.cNodeOrder)), Y2 = (t) => w((n) => (e) => {
  if (e.origin.tag === "Just" && e.origin._1.tag === "SegmentOrigin") {
    const r = e.hitbox.x - e.hitboxPreCompaction.x;
    return w((o) => (i) => K(Eg)(i)(r)(o))(n)(e.origin._1._1.affectedBends);
  }
  return n;
})(I)(yt((n) => en(n)(t.cNodes))(t.cNodeOrder)), k1 = (t) => {
  const n = nf(Q((e) => k(e.id, e))(t.edges));
  return yt((e) => {
    const r = Nu(e.edge)(n);
    if (r.tag === "Just")
      return e.reversed ? N(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.to.node,
          tgt: r._1.from.node,
          srcSide: ts(Ze)(t.ports)(r._1.to.node)(r._1.to.port),
          tgtSide: ts(tr)(t.ports)(r._1.from.node)(r._1.from.port),
          path: e
        }
      ) : N(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.from.node,
          tgt: r._1.to.node,
          srcSide: ts(Ze)(t.ports)(r._1.from.node)(r._1.from.port),
          tgtSide: ts(tr)(t.ports)(r._1.to.node)(r._1.to.port),
          path: e
        }
      );
    if (r.tag === "Nothing")
      return v;
    f();
  })(t.paths);
}, U2 = (t) => (n) => {
  const e = xt(n)((r) => {
    if (r.src === r.tgt)
      return [];
    if ((r.srcSide === "North" || r.srcSide === "South") && (r.tgtSide === "North" || r.tgtSide === "South"))
      return [];
    const o = fr(r.tgt)(t.nodeToC), i = (() => {
      if (o.tag === "Just")
        return en(o._1)(t.cGraph.cNodes);
      if (o.tag === "Nothing")
        return v;
      f();
    })(), s = fr(r.src)(t.nodeToC), u = (() => {
      if (s.tag === "Just")
        return en(s._1)(t.cGraph.cNodes);
      if (s.tag === "Nothing")
        return v;
      f();
    })(), c = (() => {
      if (u.tag === "Just") {
        if (i.tag === "Just") {
          if (u._1.cGroup.tag === "Just") {
            if (i._1.cGroup.tag === "Just")
              return N("Just", { srcGroup: u._1.cGroup._1, tgtGroup: i._1.cGroup._1, delta: 0, weight: 100 });
            if (i._1.cGroup.tag === "Nothing")
              return v;
            f();
          }
          if (u._1.cGroup.tag === "Nothing")
            return v;
          f();
        }
        if (i.tag === "Nothing")
          return v;
        f();
      }
      if (u.tag === "Nothing")
        return v;
      f();
    })(), a = (g) => (p) => ($) => {
      if (u.tag === "Just") {
        if (u._1.cGroup.tag === "Just") {
          if ($.cGroup.tag === "Just")
            return g($.hitbox.x) && $.cGroup._1 !== u._1.cGroup._1 ? N("Just", p($.cGroup._1)(u._1.cGroup._1)) : v;
          if ($.cGroup.tag === "Nothing")
            return v;
          f();
        }
        if (u._1.cGroup.tag === "Nothing")
          return v;
        f();
      }
      if (u.tag === "Nothing")
        return v;
      f();
    }, l = yt((g) => en(g)(t.cGraph.cNodes))((() => {
      const g = Nu(r.edgeId)(t.edgeToCs);
      if (g.tag === "Nothing")
        return [];
      if (g.tag === "Just")
        return g._1;
      f();
    })()), d = (() => {
      if (u.tag === "Just" && r.srcSide === "West") {
        const g = u._1;
        return yt(a((p) => p < g.hitbox.x)((p) => ($) => ({ srcGroup: p, tgtGroup: $, delta: 1, weight: 100 })))(l);
      }
      return [];
    })(), _ = (() => {
      if (u.tag === "Just" && r.tgtSide === "East") {
        const g = u._1;
        return yt(a((p) => p > g.hitbox.x)((p) => ($) => ({ srcGroup: $, tgtGroup: p, delta: 1, weight: 100 })))(l);
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
      return ue((s) => ie(be)(s)(i.representedEdges), r.origin._1._1.representedEdges);
    })(),
    vsLNodePair: (r) => (o) => r.origin.tag === "Just" && o.origin.tag === "Just" && (r.origin._1.tag === "SegmentOrigin" ? o.origin._1.tag === "NodeOrigin" : r.origin._1.tag === "NodeOrigin" && o.origin._1.tag === "SegmentOrigin"),
    edgeLengthEdges: (r) => e
  };
}, V2 = (t) => (n) => {
  const e = M(4), r = q2(t), o = X2(t), i = nf(Q((u) => k(u.id, k(u.from.node, u.to.node)))(n.edges)), s = Y2(t);
  return {
    nodes: Q((u) => {
      const c = fr(u.node)(r);
      if (c.tag === "Just")
        return { ...u, position: k(c._1 / e, u.position._2) };
      if (c.tag === "Nothing")
        return u;
      f();
    })(n.nodes),
    edges: Q((u) => {
      const c = Nu(u.edge)(i), a = (() => {
        if (c.tag === "Nothing")
          return u.segments;
        if (c.tag === "Just") {
          const l = fr(c._1._1)(o), d = (() => {
            if (l.tag === "Nothing")
              return 0;
            if (l.tag === "Just")
              return l._1;
            f();
          })(), _ = fr(c._1._2)(o), g = (() => {
            if (_.tag === "Nothing")
              return 0;
            if (_.tag === "Just")
              return _._1;
            f();
          })();
          return Rt((() => {
            const p = u.reversed ? g : d, $ = u.reversed ? d : g, h = u.segments.length;
            return (m) => (y) => {
              if (y.direction === "V") {
                const x = (() => {
                  if (m === 0)
                    return p;
                  if (m === (h - 1 | 0))
                    return $;
                  const J = sc(y.start)(s);
                  if (J.tag === "Nothing")
                    return 0;
                  if (J.tag === "Just")
                    return J._1;
                  f();
                })();
                return { ...y, start: k(y.start._1 + x, y.start._2), end: k(y.end._1 + x, y.end._2) };
              }
              if (y.direction === "H")
                return {
                  ...y,
                  start: k(
                    (() => {
                      if (m === 0)
                        return y.start._1 + p;
                      const x = sc(y.start)(s);
                      if (x.tag === "Nothing")
                        return y.start._1 + 0;
                      if (x.tag === "Just")
                        return y.start._1 + x._1;
                      f();
                    })(),
                    y.start._2
                  ),
                  end: k(
                    (() => {
                      if (m === (h - 1 | 0))
                        return y.end._1 + $;
                      const x = sc(y.end)(s);
                      if (x.tag === "Nothing")
                        return y.end._1 + 0;
                      if (x.tag === "Just")
                        return y.end._1 + x._1;
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
      return { ...u, segments: a, bends: pn((l) => (d) => l.end, a, Jt(1, a.length, a)) };
    })(n.paths)
  };
}, K2 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = tf(o.nextId)(i._2.start)(i._2.end)(v)(t.edgeId), u = (() => {
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
}, T0 = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...tf(i.nextId)(r.start)(k(r.start._1, o.down ? e.y : e.y + e.height))(N(
        "Just",
        n
      ))(t.edgeId),
      aPort: N("Just", { node: t.src, side: o.side }),
      ignoreSpacing: o.down ? { ...Te, down: !0 } : { ...Te, up: !0 }
    }
  ]
}), ns = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...tf(i.nextId)(r.end)(k(r.end._1, o.down ? e.y : e.y + e.height))(N(
        "Just",
        n
      ))(t.edgeId),
      aPort: N("Just", { node: t.tgt, side: o.side }),
      ignoreSpacing: o.down ? { ...Te, down: !0 } : { ...Te, up: !0 }
    }
  ]
}), M2 = (t) => (n) => (e) => {
  if (e.src === e.tgt)
    return n;
  const r = fr(e.src)(t.nodeToC), o = fr(e.tgt)(t.nodeToC), i = (() => {
    if (r.tag === "Just") {
      const l = en(r._1)(t.cGraph.cNodes);
      return l.tag === "Just" ? N("Just", l._1.hitbox) : v;
    }
    if (r.tag === "Nothing")
      return v;
    f();
  })(), s = (() => {
    if (o.tag === "Just") {
      const l = en(o._1)(t.cGraph.cNodes);
      return l.tag === "Just" ? N("Just", l._1.hitbox) : v;
    }
    if (o.tag === "Nothing")
      return v;
    f();
  })(), u = B2(e.path), c = w(K2(e)(i)(s)(u.length - 1 | 0))(n)(Rt((l) => (d) => k(
    l,
    d
  ))(u));
  if (0 < u.length) {
    const l = (() => {
      if (r.tag === "Just" && i.tag === "Just") {
        if (e.srcSide === "North")
          return T0(e)(r._1)(i._1)(u[0])({ side: wn, down: !0 })(c);
        if (e.srcSide === "South")
          return T0(e)(r._1)(i._1)(u[0])({ side: Nn, down: !1 })(c);
      }
      return c;
    })(), d = u.length - 1 | 0;
    if (d >= 0 && d < u.length && o.tag === "Just" && s.tag === "Just") {
      if (e.tgtSide === "North")
        return ns(e)(o._1)(s._1)(u[d])({ side: wn, down: !0 })(l);
      if (e.tgtSide === "South")
        return ns(e)(o._1)(s._1)(u[d])({ side: Nn, down: !1 })(l);
    }
    return l;
  }
  const a = u.length - 1 | 0;
  if (a >= 0 && a < u.length && o.tag === "Just" && s.tag === "Just") {
    if (e.tgtSide === "North")
      return ns(e)(o._1)(s._1)(u[a])({ side: wn, down: !0 })(c);
    if (e.tgtSide === "South")
      return ns(e)(o._1)(s._1)(u[a])({ side: Nn, down: !1 })(c);
  }
  return c;
}, j2 = (t) => (n) => (e) => D2(t)(w(M2(e))({ nextId: 0, segments: [] })(n).segments)(e), Z2 = (t) => j2(t.edges)(k1(t))(W2(O2(t.edges))(t.nodes)(Q2())), lr = (t) => (e) => {
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
}, Gc = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Fc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, tx = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, nx = (t) => {
  const n = t.Eq0();
  return (e) => (r) => {
    const o = (u) => {
      let c = u, a = !0, l;
      for (; a; ) {
        const d = c, _ = Bt((g) => v, (g) => (p) => N("Just", { head: g, tail: p }), d.queue);
        if (_.tag === "Nothing") {
          a = !1, l = d;
          continue;
        }
        if (_.tag === "Just") {
          const g = _._1.head;
          if (((h) => {
            let m = h, y = !0, x;
            for (; y; ) {
              const J = m;
              if (J.tag === "Leaf") {
                y = !1, x = !1;
                continue;
              }
              if (J.tag === "Node") {
                const T = t.compare(g)(J._3);
                if (T === "LT") {
                  m = J._5;
                  continue;
                }
                if (T === "GT") {
                  m = J._6;
                  continue;
                }
                if (T === "EQ") {
                  y = !1, x = !0;
                  continue;
                }
              }
              f();
            }
            return x;
          })(d.removedNodes)) {
            c = { ...d, queue: _._1.tail };
            continue;
          }
          const p = Mt(($) => !lr($.eid)(d.removedEdges) && (n.eq($.src)(g) || n.eq($.tgt)(g)))(r);
          if (p.tag === "Nothing") {
            c = { ...d, queue: _._1.tail };
            continue;
          }
          if (p.tag === "Just") {
            const $ = n.eq(p._1.src)(g) ? p._1.tgt : p._1.src, h = {
              ...d,
              degree: K(t)($)((() => {
                const y = ((x) => {
                  let J = x, T = !0, b;
                  for (; T; ) {
                    const L = J;
                    if (L.tag === "Leaf") {
                      T = !1, b = v;
                      continue;
                    }
                    if (L.tag === "Node") {
                      const A = t.compare($)(L._3);
                      if (A === "LT") {
                        J = L._5;
                        continue;
                      }
                      if (A === "GT") {
                        J = L._6;
                        continue;
                      }
                      if (A === "EQ") {
                        T = !1, b = N("Just", L._4);
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
              removedEdges: K(it)(p._1.eid)()(d.removedEdges),
              record: [...d.record, { node: g, neighbour: $, viaSrc: n.eq(p._1.src)(g) }],
              queue: _._1.tail
            };
            if ((() => {
              const y = ((J) => {
                let T = J, b = !0, L;
                for (; b; ) {
                  const A = T;
                  if (A.tag === "Leaf") {
                    b = !1, L = v;
                    continue;
                  }
                  if (A.tag === "Node") {
                    const E = t.compare($)(A._3);
                    if (E === "LT") {
                      T = A._5;
                      continue;
                    }
                    if (E === "GT") {
                      T = A._6;
                      continue;
                    }
                    if (E === "EQ") {
                      b = !1, L = N("Just", A._4);
                      continue;
                    }
                  }
                  f();
                }
                return L;
              })(h.degree), x = (J) => {
                let T = J, b = !0, L;
                for (; b; ) {
                  const A = T;
                  if (A.tag === "Leaf") {
                    b = !1, L = !1;
                    continue;
                  }
                  if (A.tag === "Node") {
                    const E = t.compare($)(A._3);
                    if (E === "LT") {
                      T = A._5;
                      continue;
                    }
                    if (E === "GT") {
                      T = A._6;
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
              })() && !x(h.removedNodes);
            })()) {
              c = { ...h, queue: [...h.queue, $] };
              continue;
            }
            c = h;
            continue;
          }
        }
        f();
      }
      return l;
    }, i = w((u) => (c) => Et(t)(_n)(c.src)(1)(Et(t)(_n)(c.tgt)(1)(u)))(I)(r), s = o({
      degree: i,
      removedNodes: I,
      removedEdges: I,
      record: [],
      queue: at(
        (u) => {
          const a = ((l) => {
            let d = l, _ = !0, g;
            for (; _; ) {
              const p = d;
              if (p.tag === "Leaf") {
                _ = !1, g = v;
                continue;
              }
              if (p.tag === "Node") {
                const $ = t.compare(u)(p._3);
                if ($ === "LT") {
                  d = p._5;
                  continue;
                }
                if ($ === "GT") {
                  d = p._6;
                  continue;
                }
                if ($ === "EQ") {
                  _ = !1, g = N("Just", p._4);
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
      coreNodes: at(
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
      coreEdges: at((u) => !lr(u.eid)(s.removedEdges), r),
      removed: s.record
    };
  };
}, ex = (t) => (n) => (e) => w((r) => (o) => {
  const i = o.neighbour, s = (() => {
    const u = ((a) => {
      let l = a, d = !0, _;
      for (; d; ) {
        const g = l;
        if (g.tag === "Leaf") {
          d = !1, _ = v;
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
            d = !1, _ = N("Just", g._4);
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
})(e)(An(n)), Ic = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = { ...o, treeNode: K(t)(r)()(o.treeNode) };
    return w((s) => (u) => {
      if (lr(u.eid)(s.st.edgeVisited))
        return s;
      const c = { ...s.st, edgeVisited: K(it)(u.eid)()(s.st.edgeVisited) }, a = n.eq(u.src)((() => {
        const l = u.src, d = (g) => {
          let p = g, $ = !0, h;
          for (; $; ) {
            const m = p;
            if (m.tag === "Leaf") {
              $ = !1, h = !1;
              continue;
            }
            if (m.tag === "Node") {
              const y = t.compare(l)(m._3);
              if (y === "LT") {
                p = m._5;
                continue;
              }
              if (y === "GT") {
                p = m._6;
                continue;
              }
              if (y === "EQ") {
                $ = !1, h = !0;
                continue;
              }
            }
            f();
          }
          return h;
        }, _ = u.tgt;
        return d(c.treeNode) && !((p) => {
          let $ = p, h = !0, m;
          for (; h; ) {
            const y = $;
            if (y.tag === "Leaf") {
              h = !1, m = !1;
              continue;
            }
            if (y.tag === "Node") {
              const x = t.compare(_)(y._3);
              if (x === "LT") {
                $ = y._5;
                continue;
              }
              if (x === "GT") {
                $ = y._6;
                continue;
              }
              if (x === "EQ") {
                h = !1, m = !0;
                continue;
              }
            }
            f();
          }
          return m;
        })(c.treeNode);
      })() ? u.src : (() => {
        const l = u.tgt, d = (g) => {
          let p = g, $ = !0, h;
          for (; $; ) {
            const m = p;
            if (m.tag === "Leaf") {
              $ = !1, h = !1;
              continue;
            }
            if (m.tag === "Node") {
              const y = t.compare(l)(m._3);
              if (y === "LT") {
                p = m._5;
                continue;
              }
              if (y === "GT") {
                p = m._6;
                continue;
              }
              if (y === "EQ") {
                $ = !1, h = !0;
                continue;
              }
            }
            f();
          }
          return h;
        }, _ = u.src;
        return d(c.treeNode) && !((p) => {
          let $ = p, h = !0, m;
          for (; h; ) {
            const y = $;
            if (y.tag === "Leaf") {
              h = !1, m = !1;
              continue;
            }
            if (y.tag === "Node") {
              const x = t.compare(_)(y._3);
              if (x === "LT") {
                $ = y._5;
                continue;
              }
              if (x === "GT") {
                $ = y._6;
                continue;
              }
              if (x === "EQ") {
                h = !1, m = !0;
                continue;
              }
            }
            f();
          }
          return m;
        })(c.treeNode);
      })() ? u.tgt : u.src) ? u.tgt : u.src;
      if (lr(u.eid)(c.treeEdge)) {
        if (((_) => {
          let g = _, p = !0, $;
          for (; p; ) {
            const h = g;
            if (h.tag === "Leaf") {
              p = !1, $ = !1;
              continue;
            }
            if (h.tag === "Node") {
              const m = t.compare(a)(h._3);
              if (m === "LT") {
                g = h._5;
                continue;
              }
              if (m === "GT") {
                g = h._6;
                continue;
              }
              if (m === "EQ") {
                p = !1, $ = !0;
                continue;
              }
            }
            f();
          }
          return $;
        })(c.treeNode))
          return { ...s, st: c };
        const l = Ic(t)(e)(a)(c);
        return { count: s.count + l.count | 0, st: l.st };
      }
      if ((() => {
        const l = (_) => {
          let g = _, p = !0, $;
          for (; p; ) {
            const h = g;
            if (h.tag === "Leaf") {
              p = !1, $ = !1;
              continue;
            }
            if (h.tag === "Node") {
              const m = t.compare(a)(h._3);
              if (m === "LT") {
                g = h._5;
                continue;
              }
              if (m === "GT") {
                g = h._6;
                continue;
              }
              if (m === "EQ") {
                p = !1, $ = !0;
                continue;
              }
            }
            f();
          }
          return $;
        }, d = u.tgt;
        return !l(c.treeNode) && (() => {
          const g = ((m) => {
            let y = m, x = !0, J;
            for (; x; ) {
              const T = y;
              if (T.tag === "Leaf") {
                x = !1, J = v;
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
                  x = !1, J = N("Just", T._4);
                  continue;
                }
              }
              f();
            }
            return J;
          })(c.layer), p = u.src, h = ((m) => {
            let y = m, x = !0, J;
            for (; x; ) {
              const T = y;
              if (T.tag === "Leaf") {
                x = !1, J = v;
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
                  x = !1, J = N("Just", T._4);
                  continue;
                }
              }
              f();
            }
            return J;
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
        const l = Ic(t)(e)(a)({ ...c, treeEdge: K(it)(u.eid)()(c.treeEdge) });
        return { count: s.count + l.count | 0, st: l.st };
      }
      return { ...s, st: c };
    })({ count: 1, st: i })(at((s) => (n.eq(s.src)(r) || n.eq(s.tgt)(r)) && !lr(s.eid)(i.edgeVisited), e));
  };
}, As = (t) => (n) => (e) => (r) => {
  const o = r.src, s = (($) => {
    let h = $, m = !0, y;
    for (; m; ) {
      const x = h;
      if (x.tag === "Leaf") {
        m = !1, y = v;
        continue;
      }
      if (x.tag === "Node") {
        const J = t.compare(o)(x._3);
        if (J === "LT") {
          h = x._5;
          continue;
        }
        if (J === "GT") {
          h = x._6;
          continue;
        }
        if (J === "EQ") {
          m = !1, y = N("Just", x._4);
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
  })(), c = r.tgt, l = (($) => {
    let h = $, m = !0, y;
    for (; m; ) {
      const x = h;
      if (x.tag === "Leaf") {
        m = !1, y = v;
        continue;
      }
      if (x.tag === "Node") {
        const J = t.compare(c)(x._3);
        if (J === "LT") {
          h = x._5;
          continue;
        }
        if (J === "GT") {
          h = x._6;
          continue;
        }
        if (J === "EQ") {
          m = !1, y = N("Just", x._4);
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
  })(), g = (($) => {
    let h = $, m = !0, y;
    for (; m; ) {
      const x = h;
      if (x.tag === "Leaf") {
        m = !1, y = v;
        continue;
      }
      if (x.tag === "Node") {
        const J = t.compare(e)(x._3);
        if (J === "LT") {
          h = x._5;
          continue;
        }
        if (J === "GT") {
          h = x._6;
          continue;
        }
        if (J === "EQ") {
          m = !1, y = N("Just", x._4);
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
    const $ = r.src, m = ((y) => {
      let x = y, J = !0, T;
      for (; J; ) {
        const b = x;
        if (b.tag === "Leaf") {
          J = !1, T = v;
          continue;
        }
        if (b.tag === "Node") {
          const L = t.compare($)(b._3);
          if (L === "LT") {
            x = b._5;
            continue;
          }
          if (L === "GT") {
            x = b._6;
            continue;
          }
          if (L === "EQ") {
            J = !1, T = N("Just", b._4);
            continue;
          }
        }
        f();
      }
      return T;
    })(n.lowestPoID);
    return (() => {
      if (m.tag === "Nothing")
        return 0 <= p;
      if (m.tag === "Just")
        return m._1 <= p;
      f();
    })() && (() => {
      const y = r.tgt;
      return p <= u && (() => {
        const J = ((T) => {
          let b = T, L = !0, A;
          for (; L; ) {
            const E = b;
            if (E.tag === "Leaf") {
              L = !1, A = v;
              continue;
            }
            if (E.tag === "Node") {
              const O = t.compare(y)(E._3);
              if (O === "LT") {
                b = E._5;
                continue;
              }
              if (O === "GT") {
                b = E._6;
                continue;
              }
              if (O === "EQ") {
                L = !1, A = N("Just", E._4);
                continue;
              }
            }
            f();
          }
          return A;
        })(n.lowestPoID);
        return (() => {
          if (J.tag === "Nothing")
            return 0 <= p;
          if (J.tag === "Just")
            return J._1 <= p;
          f();
        })() && p <= d;
      })();
    })();
  })() ? u >= d : u < d;
}, rx = (t) => {
  const n = cn(t)(qt);
  return (e) => ({
    layer: n(Q((r) => k(r, 0))(e)),
    treeNode: I,
    treeEdge: I,
    poID: I,
    lowestPoID: I,
    cutvalue: I,
    postOrder: 1,
    edgeVisited: I
  });
}, ox = (t) => (n) => (e) => w((r) => (o) => {
  if ((() => {
    const _ = o.src, g = (h) => {
      let m = h, y = !0, x;
      for (; y; ) {
        const J = m;
        if (J.tag === "Leaf") {
          y = !1, x = !1;
          continue;
        }
        if (J.tag === "Node") {
          const T = t.compare(_)(J._3);
          if (T === "LT") {
            m = J._5;
            continue;
          }
          if (T === "GT") {
            m = J._6;
            continue;
          }
          if (T === "EQ") {
            y = !1, x = !0;
            continue;
          }
        }
        f();
      }
      return x;
    }, p = o.tgt, $ = (h) => {
      let m = h, y = !0, x;
      for (; y; ) {
        const J = m;
        if (J.tag === "Leaf") {
          y = !1, x = !1;
          continue;
        }
        if (J.tag === "Node") {
          const T = t.compare(p)(J._3);
          if (T === "LT") {
            m = J._5;
            continue;
          }
          if (T === "GT") {
            m = J._6;
            continue;
          }
          if (T === "EQ") {
            y = !1, x = !0;
            continue;
          }
        }
        f();
      }
      return x;
    };
    return g(e.treeNode) === $(e.treeNode);
  })())
    return r;
  const i = o.tgt, u = ((_) => {
    let g = _, p = !0, $;
    for (; p; ) {
      const h = g;
      if (h.tag === "Leaf") {
        p = !1, $ = v;
        continue;
      }
      if (h.tag === "Node") {
        const m = t.compare(i)(h._3);
        if (m === "LT") {
          g = h._5;
          continue;
        }
        if (m === "GT") {
          g = h._6;
          continue;
        }
        if (m === "EQ") {
          p = !1, $ = N("Just", h._4);
          continue;
        }
      }
      f();
    }
    return $;
  })(e.layer), c = o.src, l = ((_) => {
    let g = _, p = !0, $;
    for (; p; ) {
      const h = g;
      if (h.tag === "Leaf") {
        p = !1, $ = v;
        continue;
      }
      if (h.tag === "Node") {
        const m = t.compare(c)(h._3);
        if (m === "LT") {
          g = h._5;
          continue;
        }
        if (m === "GT") {
          g = h._6;
          continue;
        }
        if (m === "EQ") {
          p = !1, $ = N("Just", h._4);
          continue;
        }
      }
      f();
    }
    return $;
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
  return d < r.slack ? { edge: N("Just", o), slack: d } : r;
})({ edge: v, slack: 1e9 })(n).edge, ix = (t) => {
  const n = cn(t)(qt);
  return (e) => (r) => {
    const o = w((i) => (s) => Gc(i)((() => {
      const c = ((a) => {
        let l = a, d = !0, _;
        for (; d; ) {
          const g = l;
          if (g.tag === "Leaf") {
            d = !1, _ = v;
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
              d = !1, _ = N("Just", g._4);
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
    return n(Q((i) => k(
      i,
      (() => {
        const u = ((c) => {
          let a = c, l = !0, d;
          for (; l; ) {
            const _ = a;
            if (_.tag === "Leaf") {
              l = !1, d = v;
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
                l = !1, d = N("Just", _._4);
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
}, L1 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = w((u) => (c) => {
      const a = L1(t)(e)(n.eq(c.src)(r) ? c.tgt : c.src)({ ...u.st, edgeVisited: K(it)(c.eid)()(u.st.edgeVisited) });
      return { lowest: Gc(u.lowest)(a.lowest), st: a.st };
    })({ lowest: 1e9, st: o })(at(
      (u) => lr(u.eid)(o.treeEdge) && (n.eq(u.src)(r) || n.eq(u.tgt)(r)) && !lr(u.eid)(o.edgeVisited),
      e
    )), s = Gc(i.lowest)(i.st.postOrder);
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
}, E1 = (t) => {
  const n = L1(t);
  return (e) => (r) => (o) => 0 < e.length ? n(r)(e[0])({ ...o, edgeVisited: I, postOrder: 1, poID: I, lowestPoID: I }).st : o;
}, sx = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => at((i) => lr(i.eid)(r.treeEdge) && (n.eq(i.src)(o) || n.eq(i.tgt)(o)), e);
}, ux = (t) => (n) => Mt((e) => {
  const r = Fc(e.eid)(n.cutvalue);
  return lr(e.eid)(n.treeEdge) && (() => {
    if (r.tag === "Nothing")
      return !1;
    if (r.tag === "Just")
      return r._1 < -1e-10;
    f();
  })();
})(t), S1 = (t) => {
  const n = Ic(t);
  return (e) => (r) => (o) => {
    const i = 0 < e.length ? N("Just", e[0]) : v;
    if (i.tag === "Nothing")
      return o;
    if (i.tag === "Just") {
      const s = n(r)(i._1)({ ...o, edgeVisited: I, treeNode: I, treeEdge: I });
      if (s.count >= e.length)
        return s.st;
      const u = ox(t)(r)(s.st);
      if (u.tag === "Nothing")
        return s.st;
      if (u.tag === "Just") {
        const c = u._1.tgt, l = ((h) => {
          let m = h, y = !0, x;
          for (; y; ) {
            const J = m;
            if (J.tag === "Leaf") {
              y = !1, x = v;
              continue;
            }
            if (J.tag === "Node") {
              const T = t.compare(c)(J._3);
              if (T === "LT") {
                m = J._5;
                continue;
              }
              if (T === "GT") {
                m = J._6;
                continue;
              }
              if (T === "EQ") {
                y = !1, x = N("Just", J._4);
                continue;
              }
            }
            f();
          }
          return x;
        })(s.st.layer), d = u._1.src, g = ((h) => {
          let m = h, y = !0, x;
          for (; y; ) {
            const J = m;
            if (J.tag === "Leaf") {
              y = !1, x = v;
              continue;
            }
            if (J.tag === "Node") {
              const T = t.compare(d)(J._3);
              if (T === "LT") {
                m = J._5;
                continue;
              }
              if (T === "GT") {
                m = J._6;
                continue;
              }
              if (T === "EQ") {
                y = !1, x = N("Just", J._4);
                continue;
              }
            }
            f();
          }
          return x;
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
        })(), $ = (() => {
          const h = u._1.tgt;
          return ((y) => {
            let x = y, J = !0, T;
            for (; J; ) {
              const b = x;
              if (b.tag === "Leaf") {
                J = !1, T = !1;
                continue;
              }
              if (b.tag === "Node") {
                const L = t.compare(h)(b._3);
                if (L === "LT") {
                  x = b._5;
                  continue;
                }
                if (L === "GT") {
                  x = b._6;
                  continue;
                }
                if (L === "EQ") {
                  J = !1, T = !0;
                  continue;
                }
              }
              f();
            }
            return T;
          })(s.st.treeNode);
        })() ? -p : p;
        return S1(t)(e)(r)({
          ...s.st,
          layer: w((h) => (m) => ((x) => {
            let J = x, T = !0, b;
            for (; T; ) {
              const L = J;
              if (L.tag === "Leaf") {
                T = !1, b = !1;
                continue;
              }
              if (L.tag === "Node") {
                const A = t.compare(m)(L._3);
                if (A === "LT") {
                  J = L._5;
                  continue;
                }
                if (A === "GT") {
                  J = L._6;
                  continue;
                }
                if (A === "EQ") {
                  T = !1, b = !0;
                  continue;
                }
              }
              f();
            }
            return b;
          })(s.st.treeNode) ? K(t)(m)((() => {
            const x = ((J) => {
              let T = J, b = !0, L;
              for (; b; ) {
                const A = T;
                if (A.tag === "Leaf") {
                  b = !1, L = v;
                  continue;
                }
                if (A.tag === "Node") {
                  const E = t.compare(m)(A._3);
                  if (E === "LT") {
                    T = A._5;
                    continue;
                  }
                  if (E === "GT") {
                    T = A._6;
                    continue;
                  }
                  if (E === "EQ") {
                    b = !1, L = N("Just", A._4);
                    continue;
                  }
                }
                f();
              }
              return L;
            })(s.st.layer);
            if (x.tag === "Nothing")
              return 0 + $ | 0;
            if (x.tag === "Just")
              return x._1 + $ | 0;
            f();
          })())(h) : h)(s.st.layer)(e)
        });
      }
    }
    f();
  };
}, cx = (t) => (n) => (e) => (r) => w((o) => (i) => {
  if (As(t)(r)(i.src)(e) && !As(t)(r)(i.tgt)(e)) {
    const s = i.tgt, c = ((g) => {
      let p = g, $ = !0, h;
      for (; $; ) {
        const m = p;
        if (m.tag === "Leaf") {
          $ = !1, h = v;
          continue;
        }
        if (m.tag === "Node") {
          const y = t.compare(s)(m._3);
          if (y === "LT") {
            p = m._5;
            continue;
          }
          if (y === "GT") {
            p = m._6;
            continue;
          }
          if (y === "EQ") {
            $ = !1, h = N("Just", m._4);
            continue;
          }
        }
        f();
      }
      return h;
    })(r.layer), a = i.src, d = ((g) => {
      let p = g, $ = !0, h;
      for (; $; ) {
        const m = p;
        if (m.tag === "Leaf") {
          $ = !1, h = v;
          continue;
        }
        if (m.tag === "Node") {
          const y = t.compare(a)(m._3);
          if (y === "LT") {
            p = m._5;
            continue;
          }
          if (y === "GT") {
            p = m._6;
            continue;
          }
          if (y === "EQ") {
            $ = !1, h = N("Just", m._4);
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
      return { edge: N("Just", i), slack: _ };
  }
  return o;
})({ edge: v, slack: 1e9 })(n).edge, ax = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => (i) => {
    const s = i.tgt, u = i.src;
    return w((c) => (a) => {
      if ((() => {
        const l = Fc(a.eid)(r.cutvalue);
        if (l.tag === "Just")
          return !0;
        if (l.tag === "Nothing")
          return !1;
        f();
      })()) {
        const l = Fc(a.eid)(r.cutvalue), d = (() => {
          if (l.tag === "Nothing")
            return 0;
          if (l.tag === "Just")
            return l._1;
          f();
        })();
        return n.eq(u)(a.src) || n.eq(s)(a.tgt) ? c - (d - a.weight) : c + (d - a.weight);
      }
      return n.eq(o)(u) ? n.eq(a.src)(o) ? c + a.weight : c - a.weight : n.eq(a.src)(o) ? c - a.weight : c + a.weight;
    })(i.weight)(at((c) => c.eid !== i.eid && (n.eq(c.src)(o) || n.eq(c.tgt)(o)), e));
  };
}, fx = (t) => {
  const n = ax(t);
  return (e) => (r) => (o) => {
    const i = (u, c, a) => {
      const d = ((_) => {
        let g = _, p = !0, $;
        for (; p; ) {
          const h = g;
          if (h.tag === "Leaf") {
            p = !1, $ = v;
            continue;
          }
          if (h.tag === "Node") {
            const m = t.compare(u)(h._3);
            if (m === "LT") {
              g = h._5;
              continue;
            }
            if (m === "GT") {
              g = h._6;
              continue;
            }
            if (m === "EQ") {
              p = !1, $ = N("Just", h._4);
              continue;
            }
          }
          f();
        }
        return $;
      })(a);
      if (d.tag === "Just")
        return K(t)(u)(at((_) => _.eid !== c.eid, d._1))(a);
      if (d.tag === "Nothing")
        return a;
      f();
    };
    return ((u) => (c) => {
      let a = u, l = c, d = !0, _;
      for (; d; ) {
        const g = a, p = l, h = ((y) => {
          let x = y, J = !0, T;
          for (; J; ) {
            const b = x;
            if (b.tag === "Leaf") {
              J = !1, T = v;
              continue;
            }
            if (b.tag === "Node") {
              const L = t.compare(p)(b._3);
              if (L === "LT") {
                x = b._5;
                continue;
              }
              if (L === "GT") {
                x = b._6;
                continue;
              }
              if (L === "EQ") {
                J = !1, T = N("Just", b._4);
                continue;
              }
            }
            f();
          }
          return T;
        })(g.unknown), m = (() => {
          if (h.tag === "Nothing")
            return [];
          if (h.tag === "Just")
            return h._1;
          f();
        })();
        if (m.length === 1) {
          const y = t.Eq0().eq(m[0].src)(p) ? m[0].tgt : m[0].src;
          a = {
            unknown: i(p, m[0], i(y, m[0], g.unknown)),
            cutvalue: K(it)(m[0].eid)(n(e)(g)(p)(m[0]))(g.cutvalue)
          }, l = y;
          continue;
        }
        d = !1, _ = g;
      }
      return _;
    })(r)(o);
  };
}, C1 = (t) => {
  const n = t.Eq0(), e = t.Eq0(), r = { eq: (a) => (l) => a.delta === l.delta && a.eid === l.eid && e.eq(a.src)(l.src) && n.eq(a.tgt)(l.tgt) && a.weight === l.weight }, o = {
    compare: (a) => (l) => {
      const d = it.compare(a.delta)(l.delta);
      if (d === "LT" || d === "GT" || d !== "EQ")
        return d;
      const _ = it.compare(a.eid)(l.eid);
      if (_ === "LT" || _ === "GT" || _ !== "EQ")
        return _;
      const g = t.compare(a.src)(l.src);
      if (g === "LT" || g === "GT" || g !== "EQ")
        return g;
      const p = t.compare(a.tgt)(l.tgt);
      if (p === "LT" || p === "GT" || p !== "EQ")
        return p;
      const $ = ot.compare(a.weight)(l.weight);
      return $ === "LT" || $ === "GT" || $ !== "EQ" ? $ : Yn;
    },
    Eq0: () => r
  }, i = w((a) => (l) => K(o)(l)()(a))(I), s = sx(t), u = cn(t)(qt), c = fx(t);
  return (a) => (l) => (d) => {
    const _ = {
      unknown: u(Q((g) => k(
        g,
        Gt(ae.foldr, i(s(l)(d)(g)))
      ))(a)),
      cutvalue: I
    };
    return {
      ...d,
      cutvalue: w(c(l))(_)(at(
        (g) => {
          const $ = ((h) => {
            let m = h, y = !0, x;
            for (; y; ) {
              const J = m;
              if (J.tag === "Leaf") {
                y = !1, x = v;
                continue;
              }
              if (J.tag === "Node") {
                const T = t.compare(g)(J._3);
                if (T === "LT") {
                  m = J._5;
                  continue;
                }
                if (T === "GT") {
                  m = J._6;
                  continue;
                }
                if (T === "EQ") {
                  y = !1, x = N("Just", J._4);
                  continue;
                }
              }
              f();
            }
            return x;
          })(_.unknown);
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
}, lx = (t) => {
  const n = E1(t), e = C1(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const c = { ...u, treeEdge: K(it)(s.eid)()(si(it)(i.eid)(u.treeEdge)) }, a = s.tgt, d = ((m) => {
      let y = m, x = !0, J;
      for (; x; ) {
        const T = y;
        if (T.tag === "Leaf") {
          x = !1, J = v;
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
            x = !1, J = N("Just", T._4);
            continue;
          }
        }
        f();
      }
      return J;
    })(c.layer), _ = s.src, p = ((m) => {
      let y = m, x = !0, J;
      for (; x; ) {
        const T = y;
        if (T.tag === "Leaf") {
          x = !1, J = v;
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
            x = !1, J = N("Just", T._4);
            continue;
          }
        }
        f();
      }
      return J;
    })(c.layer), $ = (() => {
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
    })(), h = As(t)(c)(s.tgt)(i) ? $ : -$;
    return e(r)(o)(n(r)(o)({
      ...c,
      layer: w((m) => (y) => As(t)(c)(y)(i) ? m : K(t)(y)((() => {
        const J = ((T) => {
          let b = T, L = !0, A;
          for (; L; ) {
            const E = b;
            if (E.tag === "Leaf") {
              L = !1, A = v;
              continue;
            }
            if (E.tag === "Node") {
              const O = t.compare(y)(E._3);
              if (O === "LT") {
                b = E._5;
                continue;
              }
              if (O === "GT") {
                b = E._6;
                continue;
              }
              if (O === "EQ") {
                L = !1, A = N("Just", E._4);
                continue;
              }
            }
            f();
          }
          return A;
        })(c.layer);
        if (J.tag === "Nothing")
          return 0 + h | 0;
        if (J.tag === "Just")
          return J._1 + h | 0;
        f();
      })())(m))(c.layer)(r)
    }));
  };
}, gx = (t) => {
  const n = lx(t);
  return (e) => (r) => (o) => (i) => ((u) => (c) => {
    let a = u, l = c, d = !0, _;
    for (; d; ) {
      const g = a, p = l;
      if (g === 0) {
        d = !1, _ = p;
        continue;
      }
      const $ = ux(o)(p);
      if ($.tag === "Nothing") {
        d = !1, _ = p;
        continue;
      }
      if ($.tag === "Just") {
        const h = cx(t)(o)($._1)(p);
        if (h.tag === "Nothing") {
          d = !1, _ = p;
          continue;
        }
        if (h.tag === "Just") {
          a = g - 1 | 0, l = n(r)(o)($._1)(h._1)(p);
          continue;
        }
      }
      f();
    }
    return _;
  })(e)(i);
}, dx = (t) => {
  const n = C1(t), e = E1(t), r = S1(t);
  return (o) => (i) => (s) => n(o)(i)(e(o)(i)(r(o)(i)(s)));
}, J0 = (t) => (n) => w((e) => (r) => Et(t)(gn)(n(r))([r])(e))(I), _x = (t) => {
  const n = cn(t)(qt);
  return (e) => (r) => (o) => {
    const i = (c) => (a) => (l) => (d) => {
      let _ = c, g = a, p = l, $ = d, h = !0, m;
      for (; h; ) {
        const y = _, x = g, J = p, T = $, b = Bt((L) => v, (L) => (A) => N("Just", { head: L, tail: A }), J);
        if (b.tag === "Nothing") {
          h = !1, m = T;
          continue;
        }
        if (b.tag === "Just") {
          const L = b._1.head, E = ((F) => {
            let B = F, Z = !0, tt;
            for (; Z; ) {
              const Y = B;
              if (Y.tag === "Leaf") {
                Z = !1, tt = v;
                continue;
              }
              if (Y.tag === "Node") {
                const z = t.compare(L)(Y._3);
                if (z === "LT") {
                  B = Y._5;
                  continue;
                }
                if (z === "GT") {
                  B = Y._6;
                  continue;
                }
                if (z === "EQ") {
                  Z = !1, tt = N("Just", Y._4);
                  continue;
                }
              }
              f();
            }
            return tt;
          })(T.layer), O = (() => {
            if (E.tag === "Nothing")
              return 0;
            if (E.tag === "Just")
              return E._1;
            f();
          })(), H = w((F) => (B) => {
            const Z = B.tgt, Y = ((S) => {
              let C = S, q = !0, P;
              for (; q; ) {
                const D = C;
                if (D.tag === "Leaf") {
                  q = !1, P = v;
                  continue;
                }
                if (D.tag === "Node") {
                  const W = t.compare(Z)(D._3);
                  if (W === "LT") {
                    C = D._5;
                    continue;
                  }
                  if (W === "GT") {
                    C = D._6;
                    continue;
                  }
                  if (W === "EQ") {
                    q = !1, P = N("Just", D._4);
                    continue;
                  }
                }
                f();
              }
              return P;
            })(F.incident), z = (() => {
              if (Y.tag === "Nothing")
                return -1;
              if (Y.tag === "Just")
                return Y._1 - 1 | 0;
              f();
            })();
            return {
              st: {
                ...F.st,
                layer: K(t)(B.tgt)(tx((() => {
                  const S = B.tgt, q = ((P) => {
                    let D = P, W = !0, V;
                    for (; W; ) {
                      const U = D;
                      if (U.tag === "Leaf") {
                        W = !1, V = v;
                        continue;
                      }
                      if (U.tag === "Node") {
                        const X = t.compare(S)(U._3);
                        if (X === "LT") {
                          D = U._5;
                          continue;
                        }
                        if (X === "GT") {
                          D = U._6;
                          continue;
                        }
                        if (X === "EQ") {
                          W = !1, V = N("Just", U._4);
                          continue;
                        }
                      }
                      f();
                    }
                    return V;
                  })(F.st.layer);
                  if (q.tag === "Nothing")
                    return 0;
                  if (q.tag === "Just")
                    return q._1;
                  f();
                })())(O + B.delta | 0))(F.st.layer)
              },
              incident: K(t)(B.tgt)(z)(F.incident),
              queue: z === 0 ? [...F.queue, B.tgt] : F.queue
            };
          })({ st: T, incident: x, queue: b._1.tail })((() => {
            const B = ((Z) => {
              let tt = Z, Y = !0, z;
              for (; Y; ) {
                const S = tt;
                if (S.tag === "Leaf") {
                  Y = !1, z = v;
                  continue;
                }
                if (S.tag === "Node") {
                  const C = t.compare(L)(S._3);
                  if (C === "LT") {
                    tt = S._5;
                    continue;
                  }
                  if (C === "GT") {
                    tt = S._6;
                    continue;
                  }
                  if (C === "EQ") {
                    Y = !1, z = N("Just", S._4);
                    continue;
                  }
                }
                f();
              }
              return z;
            })(y);
            if (B.tag === "Nothing")
              return [];
            if (B.tag === "Just")
              return B._1;
            f();
          })());
          _ = y, g = H.incident, p = H.queue, $ = H.st;
          continue;
        }
        f();
      }
      return m;
    }, s = J0(t)((c) => c.tgt)(r), u = n(Q((c) => k(
      c,
      (() => {
        const l = ((d) => {
          let _ = d, g = !0, p;
          for (; g; ) {
            const $ = _;
            if ($.tag === "Leaf") {
              g = !1, p = v;
              continue;
            }
            if ($.tag === "Node") {
              const h = t.compare(c)($._3);
              if (h === "LT") {
                _ = $._5;
                continue;
              }
              if (h === "GT") {
                _ = $._6;
                continue;
              }
              if (h === "EQ") {
                g = !1, p = N("Just", $._4);
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
    return i(J0(t)((c) => c.src)(r))(u)(at(
      (c) => {
        const l = ((d) => {
          let _ = d, g = !0, p;
          for (; g; ) {
            const $ = _;
            if ($.tag === "Leaf") {
              g = !1, p = v;
              continue;
            }
            if ($.tag === "Node") {
              const h = t.compare(c)($._3);
              if (h === "LT") {
                _ = $._5;
                continue;
              }
              if (h === "GT") {
                _ = $._6;
                continue;
              }
              if (h === "EQ") {
                g = !1, p = N("Just", $._4);
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
}, hx = (t) => {
  const n = rx(t), e = _x(t), r = dx(t), o = gx(t);
  return (i) => (s) => {
    const u = e(i)(s)(n(i));
    return s.length === 0 ? u.layer : o(4 * i.length | 0)(i)(s)(r(i)(s)(u)).layer;
  };
}, A1 = (t) => {
  const n = ix(t), e = hx(t), r = nx(t);
  return (o) => (i) => {
    if (o.length === 0)
      return I;
    if (o.length < 40)
      return n(o)(e(o)(i));
    const s = r(o)(i);
    return n(o)(ex(t)(s.removed)(e(s.coreNodes)(s.coreEdges)));
  };
}, P1 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Rc = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, px = /* @__PURE__ */ A1(it), di = (t) => (n) => ({ ...n, edges: [...n.edges, { src: t.src, tgt: t.tgt, delta: t.delta, weight: t.weight, eid: n.nextEid }], nextEid: n.nextEid + 1 | 0 }), mx = (t) => (n) => (e) => {
  if (e.cGroup.tag === "Nothing")
    return n;
  if (e.cGroup.tag === "Just") {
    const r = M((() => {
      const o = P1(e.cGroup._1)(t);
      if (o.tag === "Nothing")
        return 0;
      if (o.tag === "Just")
        return o._1;
      f();
    })());
    return _e(e.id)((o) => ({ ...o, hitbox: { ...o.hitbox, x: r + o.cGroupOffset.x } }))(n);
  }
  f();
}, $x = (t) => (n) => ({
  ...n,
  cGraph: w(mx(t))(n.cGraph)((() => {
    const e = n.cGraph;
    return yt((r) => en(r)(e.cNodes))(e.cNodeOrder);
  })())
}), yx = (t) => (n) => (e) => (r) => (o) => {
  const i = vn(iu(n.cGroupOffset.x - t.cGroupOffset.x));
  return di({ src: o.nextNodeId, tgt: r, delta: Rc(0)(-i), weight: 1 })(di({ src: o.nextNodeId, tgt: e, delta: Rc(0)(i), weight: 1 })({
    ...o,
    nodes: [...o.nodes, o.nextNodeId],
    nextNodeId: o.nextNodeId + 1 | 0
  }));
}, xx = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = Rc(0)(vn(iu(e.cGroupOffset.x + e.hitbox.width + (n.direction === "LEFT" || n.direction === "RIGHT" ? n.spacingsHandler.horizontalSpacing(e)(r) : n.spacingsHandler.verticalSpacing(e)(r)) - r.cGroupOffset.x)));
  return t.sameEdgeVerticalSegments(e)(r) ? yx(e)(r)(o)(i)(s) : di({ src: o, tgt: i, delta: u, weight: t.vsLNodePair(e)(r) ? 2 : 1 })(s);
}, vx = (t) => (n) => (e) => (r) => (o) => {
  const i = en(o)(n.cGraph.cNodes);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just")
    return (e.cGroup.tag === "Nothing" ? i._1.cGroup.tag === "Nothing" : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" && e.cGroup._1 === i._1.cGroup._1) ? r : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" ? xx(t)(n)(e)(i._1)(e.cGroup._1)(i._1.cGroup._1)(r) : r;
  f();
}, wx = (t) => (n) => (e) => (r) => w(vx(t)(n)(r))(e)(r.constraints), Nx = (t) => (n) => di({ src: n.srcGroup, tgt: n.tgtGroup, delta: n.delta, weight: n.weight })(t), Tx = (t) => {
  const n = w((o) => (i) => Et(it)(_n)(i.tgt)(1)(o))(I)(t.edges), e = at(
    (o) => {
      const i = P1(o)(n);
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
  return w((o) => (i) => di({ src: r, tgt: i, delta: 1, weight: 0 })(o))({ ...t, nodes: [...t.nodes, r], nextNodeId: r + 1 | 0 })(e);
}, Jx = (t) => (n) => {
  const e = Tx(w(Nx)(w(wx(t)(n))({
    nodes: n.cGraph.cGroupOrder,
    edges: [],
    nextNodeId: n.cGraph.nextCGroupId,
    nextEid: 0
  })((() => {
    const r = n.cGraph;
    return yt((o) => en(o)(r.cNodes))(r.cNodeOrder);
  })()))(t.edgeLengthEdges(n.cGraph)));
  return { nodes: e.nodes, edges: e.edges };
}, bx = (t) => (n) => {
  const e = Jx(t)(n);
  return $x(px(e.nodes)(e.edges))(n);
}, G1 = (t) => t, on = /* @__PURE__ */ G1("H"), sn = /* @__PURE__ */ G1("V"), kx = (t) => k(t._2, t._1), F1 = (t) => ({ ...t, position: k(t.position._2, t.position._1), size: k(t.size._2, t.size._1) }), Lx = (t) => ({
  start: k(t.start._2, t.start._1),
  end: k(t.end._2, t.end._1),
  direction: (() => {
    if (t.direction === "H")
      return sn;
    if (t.direction === "V")
      return on;
    f();
  })()
}), I1 = (t) => ({ ...t, segments: Q(Lx)(t.segments), bends: Q(kx)(t.bends) }), Ex = (t) => ({ nodes: Q(F1)(t.nodes), edges: t.edges, paths: Q(I1)(t.paths), ports: t.ports }), Sx = { nodeNode: 8, edgeNode: 4, edgeEdge: 10 }, Cx = (t) => (n) => ({
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
}), Ax = (t) => (n) => bx(n), Px = (t) => (n) => (e) => {
  const r = Ex(e), o = Z2(r), i = U2(o)(k1(r)), s = V2(v1(Ma)($2({
    ...x2(o.cGraph),
    compactionAlgorithm: N("Just", Ax()(i)),
    constraintAlgorithm: N("Just", A2(n.edgeEdge)),
    spacingsHandler: Cx(n)(i)
  })).cGraph)({ nodes: r.nodes, edges: r.edges, paths: r.paths });
  return { nodes: Q(F1)(s.nodes), edges: Q(I1)(s.edges) };
}, R1 = (t) => t, ao = /* @__PURE__ */ cn(it)(qt), It = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, b0 = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ht = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, mt = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, mo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Gx = (t) => (n) => {
  const e = it.compare(t._1)(n._1);
  return e === "LT" ? Sn : e === "GT" ? Cn : it.compare(t._2)(n._2);
}, go = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Fx = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Ve);
  return (n) => t(ge("IterNode", n, Ue));
})(), Ix = (t) => t, k0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Rx = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, es = /* @__PURE__ */ R1("Regular"), rs = /* @__PURE__ */ R1("Critical"), B1 = (t) => (n) => {
  const e = w((s) => (u) => K(G)(u.node)(u)(s))(I)(n), r = 1.25 * M(4), o = (s, u, c) => ((l) => (d) => (_) => {
    let g = l, p = d, $ = _, h = !0, m;
    for (; h; ) {
      const y = g, x = p, J = $;
      if (J.critical) {
        h = !1, m = J;
        continue;
      }
      const T = Bt((L) => v, (L) => (A) => N("Just", { head: L, tail: A }), y), b = Bt((L) => v, (L) => (A) => N("Just", { head: L, tail: A }), x);
      if (T.tag === "Just" && b.tag === "Just") {
        const L = T._1.head > b._1.head - s && T._1.head < b._1.head + s ? { ...J, critical: !0 } : T._1.head > b._1.head - r && T._1.head < b._1.head + r ? { ...J, conflicts: J.conflicts + 1 | 0 } : J;
        if (L.critical) {
          h = !1, m = L;
          continue;
        }
        if (T._1.head <= b._1.head) {
          g = T._1.tail, p = x, $ = L;
          continue;
        }
        g = y, p = b._1.tail, $ = L;
        continue;
      }
      h = !1, m = J;
    }
    return m;
  })(u)(c)({ conflicts: 0, critical: !1 }), i = (s, u, c) => {
    if (mt(w(mt)(-1e18)(u.incoming))(w(mt)(-1e18)(u.outgoing)) - ht(w(ht)(1e18)(u.incoming))(w(ht)(1e18)(u.outgoing)) < 1e-3 || mt(w(mt)(-1e18)(c.incoming))(w(mt)(-1e18)(c.outgoing)) - ht(w(ht)(1e18)(c.incoming))(w(ht)(1e18)(c.outgoing)) < 1e-3)
      return [];
    const a = o(s, u.outgoing, c.incoming), l = o(s, c.outgoing, u.incoming);
    if (a.critical || l.critical)
      return [...a.critical ? [{ src: c.id, tgt: u.id, weight: 1, kind: rs }] : [], ...l.critical ? [{ src: u.id, tgt: c.id, weight: 1, kind: rs }] : []];
    const d = ht(w(ht)(1e18)(u.incoming))(w(ht)(1e18)(u.outgoing)), _ = mt(w(mt)(-1e18)(u.incoming))(w(mt)(-1e18)(u.outgoing)), g = ht(w(ht)(1e18)(c.incoming))(w(ht)(1e18)(c.outgoing)), p = mt(w(mt)(-1e18)(c.incoming))(w(mt)(-1e18)(c.outgoing)), $ = (1 * a.conflicts | 0) + (16 * (w((m) => (y) => y > p ? m : y >= g ? m + 1 | 0 : m)(0)(u.outgoing) + w((m) => (y) => y > _ ? m : y >= d ? m + 1 | 0 : m)(0)(c.incoming) | 0) | 0) | 0, h = (1 * l.conflicts | 0) + (16 * (w((m) => (y) => y > _ ? m : y >= d ? m + 1 | 0 : m)(0)(c.outgoing) + w((m) => (y) => y > p ? m : y >= g ? m + 1 | 0 : m)(0)(u.incoming) | 0) | 0) | 0;
    return $ < h ? [{ src: u.id, tgt: c.id, weight: h - $ | 0, kind: es }] : $ > h ? [{ src: c.id, tgt: u.id, weight: $ - h | 0, kind: es }] : $ > 0 ? [{ src: u.id, tgt: c.id, weight: 0, kind: es }, { src: c.id, tgt: u.id, weight: 0, kind: es }] : [];
  };
  return w((s) => (u) => w((c) => (a) => K(G)(a._1)(a._2)(c))(s)((() => {
    const c = w((F) => (B) => {
      const Z = B.edge.from.node + "|" + (() => {
        if (B.edge.from.port.tag === "Just")
          return B.edge.from.port._1;
        if (B.edge.from.port.tag === "Nothing")
          return "_auto_" + B.edge.id;
        f();
      })(), tt = k0(Z)(F.entries);
      if (tt.tag === "Nothing")
        return {
          ...F,
          entries: K(G)(Z)({
            id: 0,
            members: [B.edge.id],
            incoming: [B.fromPos._1],
            outgoing: [B.toPos._1],
            slot: 0,
            mark: 0,
            splitBy: v,
            splitPartner: v
          })(F.entries),
          order: [...F.order, Z]
        };
      if (tt.tag === "Just")
        return {
          ...F,
          entries: K(G)(Z)({
            ...tt._1,
            members: [...tt._1.members, B.edge.id],
            incoming: [...Or((Y) => Y < B.fromPos._1)(tt._1.incoming).init, B.fromPos._1, ...Or((Y) => Y <= B.fromPos._1)(tt._1.incoming).rest],
            outgoing: [...Or((Y) => Y < B.toPos._1)(tt._1.outgoing).init, B.toPos._1, ...Or((Y) => Y <= B.toPos._1)(tt._1.outgoing).rest]
          })(F.entries)
        };
      f();
    })({ entries: I, order: [] })(u._2), a = Rt((F) => (B) => ({ ...B, id: F }))(yt((F) => k0(F)(c.entries))(c.order));
    if (a.length === 0)
      return [];
    const l = w((F) => (B) => F.prev.tag === "Just" && B - F.prev._1 < 1e-9 ? F : { prev: N("Just", B), out: [...F.out, B] })({ prev: v, out: [] })(Ct(ot.compare)([
      ...xt(a)((F) => F.incoming),
      ...xt(a)((F) => F.outgoing)
    ])).out, d = l.length < 2 ? 0.2 * r : 0.2 * w((F) => (B) => {
      if (F.prev.tag === "Nothing")
        return { prev: N("Just", B), mn: F.mn };
      if (F.prev.tag === "Just")
        return { prev: N("Just", B), mn: ht(F.mn)(B - F.prev._1) };
      f();
    })({ prev: v, mn: 1e18 })(l).mn, _ = {
      segments: a,
      deps: (() => {
        const F = a.length;
        return xt(xt(zt(0, F - 2 | 0))((B) => xt(zt(B + 1 | 0, F - 1 | 0))((Z) => [
          k(B, Z)
        ])))((B) => B._1 >= 0 && B._1 < a.length ? B._2 >= 0 && B._2 < a.length ? i(d, a[B._1], a[B._2]) : [] : []);
      })()
    }, g = at(
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
      const F = ao((() => {
        const z = _.segments;
        return Q((S) => k(S.id, S.mark))((() => {
          const S = z.length, C = (D) => {
            let W = D, V = !0, U;
            for (; V; ) {
              const X = W, et = Mt((nt) => {
                const j = It(nt)(X.inWeight);
                if (j.tag === "Nothing")
                  return !0;
                if (j.tag === "Just")
                  return j._1 === 0;
                f();
              })(X.remaining);
              if (et.tag === "Nothing") {
                V = !1, U = X;
                continue;
              }
              if (et.tag === "Just") {
                const nt = et._1;
                W = {
                  ...X,
                  inWeight: w((j) => (rt) => Et(it)(_n)(rt.tgt)(-rt.weight)(j))(X.inWeight)((() => {
                    const j = It(nt)(X.depsBySrc);
                    if (j.tag === "Nothing")
                      return [];
                    if (j.tag === "Just")
                      return j._1;
                    f();
                  })()),
                  marks: K(it)(nt)(X.nextSource)(X.marks),
                  nextSource: X.nextSource + 1 | 0,
                  outWeight: w((j) => (rt) => Et(it)(_n)(rt.src)(-rt.weight)(j))(X.outWeight)((() => {
                    const j = It(nt)(X.depsByTgt);
                    if (j.tag === "Nothing")
                      return [];
                    if (j.tag === "Just")
                      return j._1;
                    f();
                  })()),
                  remaining: at((j) => j !== nt, X.remaining)
                };
                continue;
              }
              f();
            }
            return U;
          }, q = (D) => {
            let W = D, V = !0, U;
            for (; V; ) {
              const X = W, et = Mt((nt) => {
                const j = It(nt)(X.outWeight);
                if (j.tag === "Nothing")
                  return !0;
                if (j.tag === "Just")
                  return j._1 === 0;
                f();
              })(X.remaining);
              if (et.tag === "Nothing") {
                V = !1, U = X;
                continue;
              }
              if (et.tag === "Just") {
                const nt = et._1;
                W = {
                  ...X,
                  inWeight: w((j) => (rt) => Et(it)(_n)(rt.tgt)(-rt.weight)(j))(X.inWeight)((() => {
                    const j = It(nt)(X.depsBySrc);
                    if (j.tag === "Nothing")
                      return [];
                    if (j.tag === "Just")
                      return j._1;
                    f();
                  })()),
                  marks: K(it)(nt)(X.nextSink)(X.marks),
                  nextSink: X.nextSink - 1 | 0,
                  outWeight: w((j) => (rt) => Et(it)(_n)(rt.src)(-rt.weight)(j))(X.outWeight)((() => {
                    const j = It(nt)(X.depsByTgt);
                    if (j.tag === "Nothing")
                      return [];
                    if (j.tag === "Just")
                      return j._1;
                    f();
                  })()),
                  remaining: at((j) => j !== nt, X.remaining)
                };
                continue;
              }
              f();
            }
            return U;
          };
          return ((D) => {
            let W = D, V = !0, U;
            for (; V; ) {
              const et = C(q(W));
              if (et.remaining.length === 0) {
                V = !1, U = Q((nt) => {
                  const j = It(nt.id)(et.marks), rt = (() => {
                    if (j.tag === "Nothing")
                      return nt.id;
                    if (j.tag === "Just")
                      return j._1;
                    f();
                  })();
                  return { ...nt, mark: rt < S ? (rt + S | 0) + 1 | 0 : rt };
                })(z);
                continue;
              }
              W = (() => {
                const nt = (rt) => {
                  const ct = It(rt)(et.outWeight), dt = It(rt)(et.inWeight);
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
                }, j = Ct((rt) => (ct) => it.compare(nt(ct))(nt(rt)))(et.remaining);
                if (0 < j.length) {
                  const rt = j[0];
                  return {
                    ...et,
                    inWeight: w((ct) => (dt) => Et(it)(_n)(dt.tgt)(-dt.weight)(ct))(et.inWeight)((() => {
                      const ct = It(rt)(et.depsBySrc);
                      if (ct.tag === "Nothing")
                        return [];
                      if (ct.tag === "Just")
                        return ct._1;
                      f();
                    })()),
                    marks: K(it)(rt)(et.nextSource)(et.marks),
                    nextSource: et.nextSource + 1 | 0,
                    outWeight: w((ct) => (dt) => Et(it)(_n)(dt.src)(-dt.weight)(ct))(et.outWeight)((() => {
                      const ct = It(rt)(et.depsByTgt);
                      if (ct.tag === "Nothing")
                        return [];
                      if (ct.tag === "Just")
                        return ct._1;
                      f();
                    })()),
                    remaining: at((ct) => ct !== rt, et.remaining)
                  };
                }
                return et;
              })();
            }
            return U;
          })({
            remaining: Q((D) => D.id)(z),
            marks: I,
            inWeight: w((D) => (W) => Et(it)(_n)(W.tgt)(W.weight)(D))(I)(g),
            outWeight: w((D) => (W) => Et(it)(_n)(W.src)(W.weight)(D))(I)(g),
            depsBySrc: w((D) => (W) => Et(it)(gn)(W.src)([W])(D))(I)(g),
            depsByTgt: w((D) => (W) => Et(it)(gn)(W.tgt)([W])(D))(I)(g),
            nextSink: S - 1 | 0,
            nextSource: S + 1 | 0
          });
        })());
      })()), B = at(
        (z) => {
          const S = It(z.src)(F), C = It(z.tgt)(F);
          return (() => {
            if (S.tag === "Nothing")
              return 0;
            if (S.tag === "Just")
              return S._1;
            f();
          })() > (() => {
            if (C.tag === "Nothing")
              return 0;
            if (C.tag === "Just")
              return C._1;
            f();
          })();
        },
        g
      );
      if (B.length === 0)
        return _;
      const Z = w((z) => (S) => {
        if (ie(bo)(S.src)(z.decisions) || ie(bo)(S.tgt)(z.decisions))
          return z;
        const C = It(S.src)(z.segMap), q = It(S.tgt)(z.segMap);
        if (C.tag === "Just" && q.tag === "Just") {
          const P = (C._1.incoming.length + C._1.outgoing.length | 0) > 2 && (q._1.incoming.length + q._1.outgoing.length | 0) <= 2, D = P ? q._1 : C._1;
          return {
            decisions: [...z.decisions, D.id],
            segMap: K(it)(D.id)({ ...D, splitBy: N("Just", P ? C._1.id : q._1.id) })(z.segMap)
          };
        }
        return z;
      })({ decisions: [], segMap: ao(Q((z) => k(z.id, z))(_.segments)) })(B), tt = Z.segMap, Y = w((z) => (S) => {
        const C = ht(w(ht)(1e18)(S.incoming))(w(ht)(1e18)(S.outgoing)), q = mt(w(mt)(-1e18)(S.incoming))(w(mt)(-1e18)(S.outgoing)), P = at(
          (X) => X.a.startPosition <= q && X.a.endPosition >= C,
          Rt((X) => (et) => ({ i: X, a: et }))(z.freeAreas)
        );
        if (P.length === 0) {
          const X = {
            ...S,
            incoming: Ct(ot.compare)(S.incoming),
            outgoing: Ct(ot.compare)([(C + q) / 2]),
            splitPartner: N("Just", z.nextId)
          }, et = {
            id: z.nextId,
            incoming: Ct(ot.compare)([(C + q) / 2]),
            mark: 0,
            members: S.members,
            outgoing: Ct(ot.compare)(S.outgoing),
            slot: 0,
            splitBy: v,
            splitPartner: N("Just", S.id)
          };
          return {
            segMap: K(it)(et.id)(et)(K(it)(X.id)(X)(z.segMap)),
            freeAreas: z.freeAreas,
            nextId: z.nextId + 1 | 0
          };
        }
        const D = 0 < P.length ? N("Just", P[0]) : v, W = (() => {
          if (D.tag === "Nothing")
            return { i: 0, a: { startPosition: 0, endPosition: 0, size: 0 } };
          if (D.tag === "Just") {
            if (P.length === 1)
              return D._1;
            const X = Q((et) => ({
              c: et,
              rating: (() => {
                const nt = (et.a.startPosition + et.a.endPosition) / 2, j = [nt], rt = [nt], ct = w((() => {
                  const Ot = z.segMap;
                  return (bt) => (Dt) => {
                    const _t = It(Dt.tgt)(Ot);
                    if (_t.tag === "Nothing")
                      return bt;
                    if (_t.tag === "Just") {
                      const wt = ht(w(ht)(1e18)(_t._1.incoming))(w(ht)(1e18)(_t._1.outgoing)), pt = mt(w(mt)(-1e18)(_t._1.incoming))(w(mt)(-1e18)(_t._1.outgoing)), $t = ht(w(ht)(1e18)(S.incoming))(w(ht)(1e18)(j)), lt = (() => {
                        const Ft = mt(w(mt)(-1e18)(S.incoming))(w(mt)(-1e18)(j)), St = w((Vt) => (dn) => dn > pt ? Vt : dn >= wt ? Vt + 1 | 0 : Vt)(0)(j) + w((Vt) => (dn) => dn > Ft ? Vt : dn >= $t ? Vt + 1 | 0 : Vt)(0)(_t._1.incoming) | 0, oe = ht(w(ht)(1e18)(S.incoming))(w(ht)(1e18)(j)), qn = mt(w(mt)(-1e18)(S.incoming))(w(mt)(-1e18)(j)), Xn = ht(w(ht)(1e18)(_t._1.incoming))(w(ht)(1e18)(_t._1.outgoing)), Gn = mt(w(mt)(-1e18)(_t._1.incoming))(w(mt)(-1e18)(_t._1.outgoing)), Ce = w((Vt) => (dn) => dn > qn ? Vt : dn >= oe ? Vt + 1 | 0 : Vt)(0)(_t._1.outgoing) + w((Vt) => (dn) => dn > Gn ? Vt : dn >= Xn ? Vt + 1 | 0 : Vt)(0)(S.incoming) | 0;
                        return St === Ce ? St > 0 ? { ...bt, deps: bt.deps + 2 | 0, crossings: bt.crossings + St | 0 } : bt : { ...bt, deps: bt.deps + 1 | 0, crossings: bt.crossings + go(St)(Ce) | 0 };
                      })(), gt = ht(w(ht)(1e18)(_t._1.incoming))(w(ht)(1e18)(_t._1.outgoing)), st = mt(w(mt)(-1e18)(_t._1.incoming))(w(mt)(-1e18)(_t._1.outgoing)), ft = ht(w(ht)(1e18)(rt))(w(ht)(1e18)(S.outgoing)), Nt = mt(w(mt)(-1e18)(rt))(w(mt)(-1e18)(S.outgoing)), vt = w((Ft) => (St) => St > st ? Ft : St >= gt ? Ft + 1 | 0 : Ft)(0)(S.outgoing) + w((Ft) => (St) => St > Nt ? Ft : St >= ft ? Ft + 1 | 0 : Ft)(0)(_t._1.incoming) | 0, kt = ht(w(ht)(1e18)(rt))(w(ht)(1e18)(S.outgoing)), Qt = mt(w(mt)(-1e18)(rt))(w(mt)(-1e18)(S.outgoing)), fe = ht(w(ht)(1e18)(_t._1.incoming))(w(ht)(1e18)(_t._1.outgoing)), On = mt(w(mt)(-1e18)(_t._1.incoming))(w(mt)(-1e18)(_t._1.outgoing)), zn = w((Ft) => (St) => St > Qt ? Ft : St >= kt ? Ft + 1 | 0 : Ft)(0)(_t._1.outgoing) + w((Ft) => (St) => St > On ? Ft : St >= fe ? Ft + 1 | 0 : Ft)(0)(rt) | 0;
                      return vt === zn ? vt > 0 ? { ...lt, deps: lt.deps + 2 | 0, crossings: lt.crossings + vt | 0 } : lt : { ...lt, deps: lt.deps + 1 | 0, crossings: lt.crossings + go(vt)(zn) | 0 };
                    }
                    f();
                  };
                })())(w((() => {
                  const Ot = z.segMap;
                  return (bt) => (Dt) => {
                    const _t = It(Dt.src)(Ot);
                    if (_t.tag === "Nothing")
                      return bt;
                    if (_t.tag === "Just") {
                      const wt = ht(w(ht)(1e18)(_t._1.incoming))(w(ht)(1e18)(_t._1.outgoing)), pt = mt(w(mt)(-1e18)(_t._1.incoming))(w(mt)(-1e18)(_t._1.outgoing)), $t = ht(w(ht)(1e18)(S.incoming))(w(ht)(1e18)(j)), lt = (() => {
                        const Ft = mt(w(mt)(-1e18)(S.incoming))(w(mt)(-1e18)(j)), St = w((Vt) => (dn) => dn > pt ? Vt : dn >= wt ? Vt + 1 | 0 : Vt)(0)(j) + w((Vt) => (dn) => dn > Ft ? Vt : dn >= $t ? Vt + 1 | 0 : Vt)(0)(_t._1.incoming) | 0, oe = ht(w(ht)(1e18)(S.incoming))(w(ht)(1e18)(j)), qn = mt(w(mt)(-1e18)(S.incoming))(w(mt)(-1e18)(j)), Xn = ht(w(ht)(1e18)(_t._1.incoming))(w(ht)(1e18)(_t._1.outgoing)), Gn = mt(w(mt)(-1e18)(_t._1.incoming))(w(mt)(-1e18)(_t._1.outgoing)), Ce = w((Vt) => (dn) => dn > qn ? Vt : dn >= oe ? Vt + 1 | 0 : Vt)(0)(_t._1.outgoing) + w((Vt) => (dn) => dn > Gn ? Vt : dn >= Xn ? Vt + 1 | 0 : Vt)(0)(S.incoming) | 0;
                        return St === Ce ? St > 0 ? { ...bt, deps: bt.deps + 2 | 0, crossings: bt.crossings + St | 0 } : bt : { ...bt, deps: bt.deps + 1 | 0, crossings: bt.crossings + go(St)(Ce) | 0 };
                      })(), gt = ht(w(ht)(1e18)(_t._1.incoming))(w(ht)(1e18)(_t._1.outgoing)), st = mt(w(mt)(-1e18)(_t._1.incoming))(w(mt)(-1e18)(_t._1.outgoing)), ft = ht(w(ht)(1e18)(rt))(w(ht)(1e18)(S.outgoing)), Nt = mt(w(mt)(-1e18)(rt))(w(mt)(-1e18)(S.outgoing)), vt = w((Ft) => (St) => St > st ? Ft : St >= gt ? Ft + 1 | 0 : Ft)(0)(S.outgoing) + w((Ft) => (St) => St > Nt ? Ft : St >= ft ? Ft + 1 | 0 : Ft)(0)(_t._1.incoming) | 0, kt = ht(w(ht)(1e18)(rt))(w(ht)(1e18)(S.outgoing)), Qt = mt(w(mt)(-1e18)(rt))(w(mt)(-1e18)(S.outgoing)), fe = ht(w(ht)(1e18)(_t._1.incoming))(w(ht)(1e18)(_t._1.outgoing)), On = mt(w(mt)(-1e18)(_t._1.incoming))(w(mt)(-1e18)(_t._1.outgoing)), zn = w((Ft) => (St) => St > Qt ? Ft : St >= kt ? Ft + 1 | 0 : Ft)(0)(_t._1.outgoing) + w((Ft) => (St) => St > On ? Ft : St >= fe ? Ft + 1 | 0 : Ft)(0)(rt) | 0;
                      return vt === zn ? vt > 0 ? { ...lt, deps: lt.deps + 2 | 0, crossings: lt.crossings + vt | 0 } : lt : { ...lt, deps: lt.deps + 1 | 0, crossings: lt.crossings + go(vt)(zn) | 0 };
                    }
                    f();
                  };
                })())({ crossings: 0, deps: 0 })(at((Ot) => Ot.tgt === S.id, _.deps)))(at((Ot) => Ot.src === S.id, _.deps)), dt = (() => {
                  if (S.splitBy.tag === "Just")
                    return It(S.splitBy._1)(z.segMap);
                  if (S.splitBy.tag === "Nothing")
                    return v;
                  f();
                })();
                if (dt.tag === "Just")
                  return {
                    ...ct,
                    deps: ct.deps + 2 | 0,
                    crossings: (() => {
                      const Ot = ht(w(ht)(1e18)(dt._1.incoming))(w(ht)(1e18)(dt._1.outgoing)), bt = ht(w(ht)(1e18)(rt))(w(ht)(1e18)(S.outgoing)), Dt = mt(w(mt)(-1e18)(dt._1.incoming))(w(mt)(-1e18)(dt._1.outgoing)), _t = mt(w(mt)(-1e18)(rt))(w(mt)(-1e18)(S.outgoing)), wt = ht(w(ht)(1e18)(S.incoming))(w(ht)(1e18)(j));
                      return ct.crossings + (() => {
                        const pt = ht(w(ht)(1e18)(dt._1.incoming))(w(ht)(1e18)(dt._1.outgoing)), $t = mt(w(mt)(-1e18)(S.incoming))(w(mt)(-1e18)(j)), lt = mt(w(mt)(-1e18)(dt._1.incoming))(w(mt)(-1e18)(dt._1.outgoing));
                        return ((w((gt) => (st) => st > Dt ? gt : st >= Ot ? gt + 1 | 0 : gt)(0)(j) + w((gt) => (st) => st > $t ? gt : st >= wt ? gt + 1 | 0 : gt)(0)(dt._1.incoming) | 0) + w((gt) => (st) => st > _t ? gt : st >= bt ? gt + 1 | 0 : gt)(0)(dt._1.outgoing) | 0) + w((gt) => (st) => st > lt ? gt : st >= pt ? gt + 1 | 0 : gt)(0)(rt) | 0;
                      })() | 0;
                    })()
                  };
                if (dt.tag === "Nothing")
                  return ct;
                f();
              })()
            }))(P);
            return w((et) => (nt) => nt.rating.crossings < et.rating.crossings || !(nt.rating.crossings > et.rating.crossings) && (nt.rating.deps < et.rating.deps || !(nt.rating.deps > et.rating.deps) && nt.c.a.size > et.c.a.size) ? nt : et)(0 < X.length ? X[0] : { c: D._1, rating: { crossings: 1e6, deps: 1e6 } })(X).c;
          }
          f();
        })(), V = {
          ...S,
          incoming: Ct(ot.compare)(S.incoming),
          outgoing: Ct(ot.compare)([(W.a.startPosition + W.a.endPosition) / 2]),
          splitPartner: N("Just", z.nextId)
        }, U = {
          id: z.nextId,
          incoming: Ct(ot.compare)([(W.a.startPosition + W.a.endPosition) / 2]),
          mark: 0,
          members: S.members,
          outgoing: Ct(ot.compare)(S.outgoing),
          slot: 0,
          splitBy: v,
          splitPartner: N("Just", S.id)
        };
        return {
          segMap: K(it)(U.id)(U)(K(it)(V.id)(V)(z.segMap)),
          freeAreas: (() => {
            if (W.i >= 0 && W.i < z.freeAreas.length) {
              const X = fg(Xt, v, W.i, z.freeAreas), et = (() => {
                if (X.tag === "Nothing")
                  return z.freeAreas;
                if (X.tag === "Just")
                  return X._1;
                f();
              })();
              if (z.freeAreas[W.i].size / 2 < d)
                return et;
              const nt = (z.freeAreas[W.i].startPosition + z.freeAreas[W.i].endPosition) / 2, j = nt - d, rt = nt + d;
              return [
                ...W.i < 1 ? [] : Jt(0, W.i, et),
                ...z.freeAreas[W.i].startPosition <= j ? [{ startPosition: z.freeAreas[W.i].startPosition, endPosition: j, size: j - z.freeAreas[W.i].startPosition }] : [],
                ...rt <= z.freeAreas[W.i].endPosition ? [{ startPosition: rt, endPosition: z.freeAreas[W.i].endPosition, size: z.freeAreas[W.i].endPosition - rt }] : [],
                ...W.i < 1 ? et : Jt(W.i, et.length, et)
              ];
            }
            return z.freeAreas;
          })(),
          nextId: z.nextId + 1 | 0
        };
      })({
        segMap: tt,
        freeAreas: (() => {
          const z = Ct(ot.compare)([
            ...xt(_.segments)((S) => S.incoming),
            ...xt(_.segments)((S) => S.outgoing)
          ]);
          return yt(Ix)(pn(
            (S) => (C) => C - S >= 2 * d ? N("Just", { startPosition: S + d, endPosition: C - d, size: C - S - 2 * d }) : v,
            z,
            Jt(1, z.length, z)
          ));
        })(),
        nextId: _.segments.length
      })(Ct((z) => (S) => ot.compare(mt(w(mt)(-1e18)(z.incoming))(w(mt)(-1e18)(z.outgoing)) - ht(w(ht)(1e18)(z.incoming))(w(ht)(1e18)(z.outgoing)))(mt(w(mt)(-1e18)(S.incoming))(w(mt)(-1e18)(S.outgoing)) - ht(w(ht)(1e18)(S.incoming))(w(ht)(1e18)(S.outgoing))))(yt((z) => It(z)(tt))(Z.decisions)));
      return {
        segments: (() => {
          const z = (S, C) => {
            if (S.tag === "Leaf")
              return C;
            if (S.tag === "Node")
              return z(S._5, jt("Cons", S._4, z(S._6, C)));
            f();
          };
          return Gt(tn.foldr, z(Y.segMap, Zt));
        })(),
        deps: (() => {
          const z = Y.segMap, S = (P, D) => {
            if (P.tag === "Leaf")
              return D;
            if (P.tag === "Node")
              return S(P._5, jt("Cons", P._4, S(P._6, D)));
            f();
          }, C = Gt(tn.foldr, S(z, Zt)), q = C.length;
          return [
            ...xt(xt(zt(0, q - 2 | 0))((P) => xt(zt(P + 1 | 0, q - 1 | 0))((D) => [
              k(P, D)
            ])))((P) => P._1 >= 0 && P._1 < C.length ? P._2 >= 0 && P._2 < C.length ? C[P._1].splitPartner.tag !== "Nothing" && C[P._1].splitPartner.tag === "Just" && C[P._1].splitPartner._1 === C[P._2].id || C[P._2].splitPartner.tag !== "Nothing" && C[P._2].splitPartner.tag === "Just" && C[P._2].splitPartner._1 === C[P._1].id ? [] : i(d, C[P._1], C[P._2]) : [] : []),
            ...xt(C)((P) => P.splitBy.tag === "Just" && P.splitPartner.tag === "Just" && (() => {
              const D = It(P.splitPartner._1)(z);
              if (D.tag === "Nothing")
                return !1;
              if (D.tag === "Just")
                return !0;
              f();
            })() && (() => {
              const D = It(P.splitBy._1)(z);
              if (D.tag === "Nothing")
                return !1;
              if (D.tag === "Just")
                return !0;
              f();
            })() ? [{ src: P.id, tgt: P.splitBy._1, weight: 1, kind: rs }, { src: P.splitBy._1, tgt: P.splitPartner._1, weight: 1, kind: rs }] : [])
          ];
        })()
      };
    })(), $ = p.segments, h = $.length, m = (F) => {
      let B = F, Z = !0, tt;
      for (; Z; ) {
        const Y = B, z = Mt((S) => {
          const C = It(S)(Y.inWeight);
          if (C.tag === "Nothing")
            return !0;
          if (C.tag === "Just")
            return C._1 === 0;
          f();
        })(Y.remaining);
        if (z.tag === "Nothing") {
          Z = !1, tt = Y;
          continue;
        }
        if (z.tag === "Just") {
          const S = z._1;
          B = {
            ...Y,
            inWeight: w((C) => (q) => Et(it)(_n)(q.tgt)(-q.weight)(C))(Y.inWeight)((() => {
              const C = It(S)(Y.depsBySrc);
              if (C.tag === "Nothing")
                return [];
              if (C.tag === "Just")
                return C._1;
              f();
            })()),
            marks: K(it)(S)(Y.nextSource)(Y.marks),
            nextSource: Y.nextSource + 1 | 0,
            outWeight: w((C) => (q) => Et(it)(_n)(q.src)(-q.weight)(C))(Y.outWeight)((() => {
              const C = It(S)(Y.depsByTgt);
              if (C.tag === "Nothing")
                return [];
              if (C.tag === "Just")
                return C._1;
              f();
            })()),
            remaining: at((C) => C !== S, Y.remaining)
          };
          continue;
        }
        f();
      }
      return tt;
    }, y = (F) => {
      let B = F, Z = !0, tt;
      for (; Z; ) {
        const Y = B, z = Mt((S) => {
          const C = It(S)(Y.outWeight);
          if (C.tag === "Nothing")
            return !0;
          if (C.tag === "Just")
            return C._1 === 0;
          f();
        })(Y.remaining);
        if (z.tag === "Nothing") {
          Z = !1, tt = Y;
          continue;
        }
        if (z.tag === "Just") {
          const S = z._1;
          B = {
            ...Y,
            inWeight: w((C) => (q) => Et(it)(_n)(q.tgt)(-q.weight)(C))(Y.inWeight)((() => {
              const C = It(S)(Y.depsBySrc);
              if (C.tag === "Nothing")
                return [];
              if (C.tag === "Just")
                return C._1;
              f();
            })()),
            marks: K(it)(S)(Y.nextSink)(Y.marks),
            nextSink: Y.nextSink - 1 | 0,
            outWeight: w((C) => (q) => Et(it)(_n)(q.src)(-q.weight)(C))(Y.outWeight)((() => {
              const C = It(S)(Y.depsByTgt);
              if (C.tag === "Nothing")
                return [];
              if (C.tag === "Just")
                return C._1;
              f();
            })()),
            remaining: at((C) => C !== S, Y.remaining)
          };
          continue;
        }
        f();
      }
      return tt;
    }, J = ((F) => {
      let B = F, Z = !0, tt;
      for (; Z; ) {
        const z = m(y(B));
        if (z.remaining.length === 0) {
          Z = !1, tt = Q((S) => {
            const C = It(S.id)(z.marks), q = (() => {
              if (C.tag === "Nothing")
                return S.id;
              if (C.tag === "Just")
                return C._1;
              f();
            })();
            return { ...S, mark: q < h ? (q + h | 0) + 1 | 0 : q };
          })($);
          continue;
        }
        B = (() => {
          const S = (q) => {
            const P = It(q)(z.outWeight), D = It(q)(z.inWeight);
            return (() => {
              if (P.tag === "Nothing")
                return 0;
              if (P.tag === "Just")
                return P._1;
              f();
            })() - (() => {
              if (D.tag === "Nothing")
                return 0;
              if (D.tag === "Just")
                return D._1;
              f();
            })() | 0;
          }, C = Ct((q) => (P) => it.compare(S(P))(S(q)))(z.remaining);
          if (0 < C.length) {
            const q = C[0];
            return {
              ...z,
              inWeight: w((P) => (D) => Et(it)(_n)(D.tgt)(-D.weight)(P))(z.inWeight)((() => {
                const P = It(q)(z.depsBySrc);
                if (P.tag === "Nothing")
                  return [];
                if (P.tag === "Just")
                  return P._1;
                f();
              })()),
              marks: K(it)(q)(z.nextSource)(z.marks),
              nextSource: z.nextSource + 1 | 0,
              outWeight: w((P) => (D) => Et(it)(_n)(D.src)(-D.weight)(P))(z.outWeight)((() => {
                const P = It(q)(z.depsByTgt);
                if (P.tag === "Nothing")
                  return [];
                if (P.tag === "Just")
                  return P._1;
                f();
              })()),
              remaining: at((P) => P !== q, z.remaining)
            };
          }
          return z;
        })();
      }
      return tt;
    })({
      remaining: Q((F) => F.id)($),
      marks: I,
      inWeight: w((F) => (B) => Et(it)(_n)(B.tgt)(B.weight)(F))(I)(p.deps),
      outWeight: w((F) => (B) => Et(it)(_n)(B.src)(B.weight)(F))(I)(p.deps),
      depsBySrc: w((F) => (B) => Et(it)(gn)(B.src)([B])(F))(I)(p.deps),
      depsByTgt: w((F) => (B) => Et(it)(gn)(B.tgt)([B])(F))(I)(p.deps),
      nextSink: h - 1 | 0,
      nextSource: h + 1 | 0
    }), T = (() => {
      const F = (() => {
        const Y = ao(Q((z) => k(z.id, z.mark))(J));
        return {
          segments: J,
          deps: yt((z) => (() => {
            if (z.kind === "Critical")
              return !0;
            if (z.kind === "Regular")
              return !1;
            f();
          })() ? N("Just", z) : (() => {
            const S = It(z.src)(Y), C = It(z.tgt)(Y);
            return (() => {
              if (S.tag === "Nothing")
                return 0;
              if (S.tag === "Just")
                return S._1;
              f();
            })() > (() => {
              if (C.tag === "Nothing")
                return 0;
              if (C.tag === "Just")
                return C._1;
              f();
            })();
          })() ? z.weight === 0 ? v : N("Just", { src: z.tgt, tgt: z.src, weight: z.weight, kind: z.kind }) : N("Just", z))(p.deps)
        };
      })(), B = w((Y) => (z) => Et(it)(_n)(z.tgt)(1)(Y))(I)(F.deps), tt = ((Y) => {
        let z = Y, S = !0, C;
        for (; S; ) {
          const q = z, P = Bt((D) => v, (D) => (W) => N("Just", { head: D, tail: W }), q.queue);
          if (P.tag === "Nothing") {
            S = !1, C = q;
            continue;
          }
          if (P.tag === "Just") {
            z = w((() => {
              const D = It(P._1.head)(q.slots), W = (() => {
                if (D.tag === "Nothing")
                  return 0;
                if (D.tag === "Just")
                  return D._1;
                f();
              })();
              return (V) => (U) => {
                const X = It(U)(V.inDegree), et = (() => {
                  if (X.tag === "Nothing")
                    return -1;
                  if (X.tag === "Just")
                    return X._1 - 1 | 0;
                  f();
                })();
                return {
                  ...V,
                  slots: K(it)(U)(b0((() => {
                    const nt = It(U)(V.slots);
                    if (nt.tag === "Nothing")
                      return 0;
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })())(W + 1 | 0))(V.slots),
                  inDegree: K(it)(U)(et)(V.inDegree),
                  queue: et === 0 ? [...V.queue, U] : V.queue
                };
              };
            })())({ ...q, queue: P._1.tail })((() => {
              const D = It(P._1.head)(q.adj);
              if (D.tag === "Nothing")
                return [];
              if (D.tag === "Just")
                return D._1;
              f();
            })());
            continue;
          }
          f();
        }
        return C;
      })({
        slots: ao(Q((Y) => k(Y.id, 0))(F.segments)),
        inDegree: B,
        adj: w((Y) => (z) => Et(it)(gn)(z.src)([z.tgt])(Y))(I)(F.deps),
        queue: Q((Y) => Y.id)(at(
          (Y) => {
            const z = It(Y.id)(B);
            if (z.tag === "Nothing")
              return !0;
            if (z.tag === "Just")
              return z._1 === 0;
            f();
          },
          F.segments
        ))
      });
      return Ct((Y) => (z) => it.compare(Y.slot)(z.slot))(Q((Y) => ({
        ...Y,
        slot: (() => {
          const z = It(Y.id)(tt.slots);
          if (z.tag === "Nothing")
            return 0;
          if (z.tag === "Just")
            return z._1;
          f();
        })()
      }))(F.segments));
    })(), b = 1 + w((F) => (B) => b0(F)(B.slot))(0)(T) | 0, L = xt(T)((F) => F.members), A = at((F) => ie(be)(F.edge.id)(L), t), E = w(mt)(-1e18)(Q((F) => F.fromPos._2)(A)), O = w(ht)(1e18)(Q((F) => F.toPos._2)(A));
    if (E > O) {
      const F = ao(Q((B) => k(B.id, B))(T));
      return se(Q((B) => Q((Z) => k(
        Z,
        {
          slot: B.slot,
          slotCount: b,
          gapTop: O,
          gapBottom: E,
          partner: (() => {
            if (B.splitPartner.tag === "Just") {
              const tt = It(B.splitPartner._1)(F);
              if (tt.tag === "Just")
                return N("Just", { slot: tt._1.slot, splitX: 0 < tt._1.incoming.length ? tt._1.incoming[0] : 0 });
              if (tt.tag === "Nothing")
                return v;
              f();
            }
            if (B.splitPartner.tag === "Nothing")
              return v;
            f();
          })()
        }
      ))(B.members))(at(
        (B) => {
          if (B.splitPartner.tag === "Just") {
            const Z = It(B.splitPartner._1)(F);
            return !(Z.tag === "Just" && (() => {
              if (Z._1.splitBy.tag === "Nothing")
                return !1;
              if (Z._1.splitBy.tag === "Just")
                return !0;
              f();
            })());
          }
          if (B.splitPartner.tag === "Nothing")
            return !0;
          f();
        },
        T
      )));
    }
    const H = ao(Q((F) => k(F.id, F))(T));
    return se(Q((F) => Q((B) => k(
      B,
      {
        slot: F.slot,
        slotCount: b,
        gapTop: E,
        gapBottom: O,
        partner: (() => {
          if (F.splitPartner.tag === "Just") {
            const Z = It(F.splitPartner._1)(H);
            if (Z.tag === "Just")
              return N("Just", { slot: Z._1.slot, splitX: 0 < Z._1.incoming.length ? Z._1.incoming[0] : 0 });
            if (Z.tag === "Nothing")
              return v;
            f();
          }
          if (F.splitPartner.tag === "Nothing")
            return v;
          f();
        })()
      }
    ))(F.members))(at(
      (F) => {
        if (F.splitPartner.tag === "Just") {
          const B = It(F.splitPartner._1)(H);
          return !(B.tag === "Just" && (() => {
            if (B._1.splitBy.tag === "Nothing")
              return !1;
            if (B._1.splitBy.tag === "Just")
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
  })()))(I)(Fx(w((s) => (u) => {
    const c = mo(u.edge.from.node)(e);
    if (c.tag === "Just") {
      const a = mo(u.edge.to.node)(e);
      return a.tag === "Just" && c._1.layer !== a._1.layer ? Et(it)(gn)(go(c._1.layer)(a._1.layer))([u])(s) : s;
    }
    return s;
  })(I)((() => {
    const s = (u) => k(
      (() => {
        const c = mo(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.layer : 1e6;
      })(),
      (() => {
        const c = mo(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.order : 1e6;
      })()
    );
    return Ct((u) => (c) => Gx(s(u))(s(c)))(t);
  })())));
}, Bx = (t) => (n) => {
  const e = B1(t)(n), r = w((o) => (i) => K(G)(i.node)(i)(o))(I)(n);
  return w((o) => (i) => {
    const s = mo(i.edge.from.node)(r);
    if (s.tag === "Just") {
      const u = mo(i.edge.to.node)(r);
      if (u.tag === "Just" && s._1.layer !== u._1.layer) {
        const c = Rx(i.edge.id)(e);
        if (c.tag === "Just")
          return K(it)(go(s._1.layer)(u._1.layer))(c._1.slotCount)(o);
      }
      return o;
    }
    return o;
  })(I)(t);
}, z1 = qt.foldMap(/* @__PURE__ */ (() => {
  const t = { append: (n) => (e) => n || e };
  return { mempty: !1, Semigroup0: () => t };
})()), yn = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, xn = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, jo = (t) => (n) => (e) => (r) => z1((o) => e >= o.x && e < o.x + o.w && n > o.y && t < o.y + o.h)(r), Ps = (t) => (n) => (e) => (r) => jo(yn(n)(e))(xn(n)(e))(r)(t), os = /* @__PURE__ */ M(4), zx = /* @__PURE__ */ dg((t) => {
  if (t.direction === "H") {
    const n = yn(t.start._1)(t.end._1);
    return [{ x: n, y: t.start._2 - 1, w: xn(t.start._1)(t.end._1) - n, h: 2 }];
  }
  if (t.direction === "V") {
    const n = yn(t.start._2)(t.end._2);
    return [{ x: t.start._1 - 1, y: n, w: 2, h: xn(t.start._2)(t.end._2) - n }];
  }
  f();
}), _i = /* @__PURE__ */ gg((t) => {
  const n = t.start._1 - t.end._1;
  return !((n < 0 ? -n < 1e-6 : n < 1e-6) && (() => {
    const e = t.start._2 - t.end._2;
    return e < 0 ? -e < 1e-6 : e < 1e-6;
  })());
}), Dx = (t) => (n) => (e) => {
  const r = Bt((o) => v, (o) => (i) => N("Just", { head: o, tail: i }), n);
  if (r.tag === "Nothing")
    return [{ start: t.start, end: e.end, direction: t.direction }];
  if (r.tag === "Just") {
    const o = (r._1.head.direction === "H" ? t.direction === "H" : r._1.head.direction === "V" && t.direction === "V") ? [{ start: t.start, end: r._1.head.end, direction: t.direction }] : [t, r._1.head], i = ke(r._1.tail);
    if (i.tag === "Nothing") {
      const s = o.length - 1 | 0;
      return s >= 0 && s < o.length && (o[s].direction === "H" ? e.direction === "H" : o[s].direction === "V" && e.direction === "V") ? [
        ...(() => {
          const u = o.length - 1 | 0;
          return u < 1 ? [] : Jt(0, u, o);
        })(),
        { start: o[s].start, end: e.end, direction: e.direction }
      ] : [...o, e];
    }
    if (i.tag === "Just")
      return (i._1.last.direction === "H" ? e.direction === "H" : i._1.last.direction === "V" && e.direction === "V") ? [...o, ...i._1.init, { start: i._1.last.start, end: e.end, direction: e.direction }] : [...o, ...r._1.tail, e];
  }
  f();
}, hi = (t) => {
  const n = (r) => (o) => {
    const i = Bt((s) => v, (s) => (u) => N("Just", { head: s, tail: u }), o);
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
  }, e = Bt((r) => v, (r) => (o) => N("Just", { head: r, tail: o }), t);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return n(e._1.head)(e._1.tail);
  f();
}, Zo = (t) => (n) => (e) => (r) => z1((o) => e >= o.y && e < o.y + o.h && n > o.x && t < o.x + o.w)(r), oi = (t) => (n) => (e) => (r) => Zo(yn(n)(e))(xn(n)(e))(r)(t), Qx = (t) => (n) => (e) => (r) => {
  const o = e + 2 | 0, i = o < 1 ? n : Jt(o, n.length, n), s = e < 1 ? [] : Jt(0, e, n), u = (e + 1 | 0) === (r - 1 | 0), c = e === 0, a = e >= 0 && e < n.length ? N("Just", n[e]) : v;
  if (a.tag === "Just") {
    const l = e + 1 | 0, d = l >= 0 && l < n.length ? N("Just", n[l]) : v;
    if (d.tag === "Just") {
      const _ = a._1.start._1 === d._1.end._1 && (!c || a._1.direction === "V") && (!u || d._1.direction === "V") && !Ps(t)(yn(a._1.start._2)(d._1.end._2))(xn(a._1.start._2)(d._1.end._2))(a._1.start._1) ? N("Just", [...s, { start: a._1.start, end: d._1.end, direction: sn }, ...i]) : v, g = a._1.start._2 === d._1.end._2 && (!c || a._1.direction === "H") && (!u || d._1.direction === "H") && !oi(t)(yn(a._1.start._1)(d._1.end._1))(xn(a._1.start._1)(d._1.end._1))(a._1.start._2) ? N("Just", [...s, { start: a._1.start, end: d._1.end, direction: on }, ...i]) : v;
      return _.tag === "Nothing" ? g : _;
    }
    if (d.tag === "Nothing")
      return v;
    f();
  }
  if (a.tag === "Nothing")
    return v;
  f();
}, Hx = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if ((c + 1 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const a = Qx(t)(n)(c)(e);
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
}, Wx = (t) => (n) => (e) => (r) => {
  const o = (_, g, p) => !Ps(t)(yn(g)(p))(xn(g)(p))(_), i = e + 3 | 0, s = i < 1 ? n : Jt(i, n.length, n), u = e < 1 ? [] : Jt(0, e, n), c = (e + 2 | 0) === (r - 1 | 0), a = e === 0, l = (_, g, p) => !oi(t)(yn(g)(p))(xn(g)(p))(_), d = e >= 0 && e < n.length ? N("Just", n[e]) : v;
  if (d.tag === "Just") {
    const _ = e + 2 | 0, g = _ >= 0 && _ < n.length ? N("Just", n[_]) : v;
    if (g.tag === "Just") {
      const p = d._1.start._1 === g._1.end._1 && (!a || d._1.direction === "V") && (!c || g._1.direction === "V") && o(d._1.start._1, d._1.start._2, g._1.end._2) ? N("Just", [...u, { start: d._1.start, end: g._1.end, direction: sn }, ...s]) : d._1.start._2 === g._1.end._2 && (!a || d._1.direction === "H") && (!c || g._1.direction === "H") && l(d._1.start._2, d._1.start._1, g._1.end._1) ? N("Just", [...u, { start: d._1.start, end: g._1.end, direction: on }, ...s]) : v, $ = (!a || d._1.direction === "V") && (!c || g._1.direction === "H") && o(d._1.start._1, d._1.start._2, g._1.end._2) && l(
        g._1.end._2,
        d._1.start._1,
        g._1.end._1
      ) ? N(
        "Just",
        [
          ...u,
          { start: d._1.start, end: k(d._1.start._1, g._1.end._2), direction: sn },
          { start: k(d._1.start._1, g._1.end._2), end: g._1.end, direction: on },
          ...s
        ]
      ) : v, h = (!a || d._1.direction === "H") && (!c || g._1.direction === "V") && l(d._1.start._2, d._1.start._1, g._1.end._1) && o(
        g._1.end._1,
        d._1.start._2,
        g._1.end._2
      ) ? N(
        "Just",
        [
          ...u,
          { start: d._1.start, end: k(g._1.end._1, d._1.start._2), direction: on },
          { start: k(g._1.end._1, d._1.start._2), end: g._1.end, direction: sn },
          ...s
        ]
      ) : v, m = $.tag === "Nothing" ? h : $;
      return p.tag === "Nothing" ? m : p;
    }
    if (g.tag === "Nothing")
      return v;
    f();
  }
  if (d.tag === "Nothing")
    return v;
  f();
}, Ox = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if ((c + 2 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const a = Wx(t)(n)(c)(e);
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
}, qx = (t) => {
  const n = (e) => {
    let r = e, o = !0, i;
    for (; o; ) {
      const s = r, u = hi(_i(Hx(t)(Ox(t)(s))));
      if (u.length < s.length) {
        r = u;
        continue;
      }
      o = !1, i = u;
    }
    return i;
  };
  return (e) => n(hi(_i(e)));
}, Xx = (t) => (n) => (e) => (r) => {
  const o = yn(e)(r), i = xn(e)(r), s = at((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = Ct((a) => (l) => ot.compare(a.x)(l.x))(s);
    return 0 < c.length ? c[0].x - 1 : (e + r) / 2;
  }
  const u = Ct((c) => (a) => ot.compare(a.x)(c.x))(Q((c) => ({ ...c, x: c.x + c.w }))(s));
  return 0 < u.length ? u[0].x + 1 : (e + r) / 2;
}, Yx = (t) => (n) => (e) => (r) => {
  const o = yn(e)(r), i = xn(e)(r), s = at((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = Ct((a) => (l) => ot.compare(a.y)(l.y))(s);
    return 0 < c.length ? c[0].y - 1 : (e + r) / 2;
  }
  const u = Ct((c) => (a) => ot.compare(a.y)(c.y))(Q((c) => ({ ...c, y: c.y + c.h }))(s));
  return 0 < u.length ? u[0].y + 1 : (e + r) / 2;
}, Ux = (t) => (n) => (e) => (r) => {
  const o = yn(e)(r), i = xn(e)(r), s = at((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = Ct((a) => (l) => ot.compare(l.x)(a.x))(Q((a) => ({ ...a, x: a.x + a.w }))(s));
    return 0 < c.length ? c[0].x : (e + r) / 2;
  }
  const u = Ct((c) => (a) => ot.compare(c.x)(a.x))(s);
  return 0 < u.length ? u[0].x - 1 : (e + r) / 2;
}, Vx = (t) => (n) => (e) => (r) => {
  const o = yn(e)(r), i = xn(e)(r), s = at((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = Ct((a) => (l) => ot.compare(l.y)(a.y))(Q((a) => ({ ...a, y: a.y + a.h }))(s));
    return 0 < c.length ? c[0].y : (e + r) / 2;
  }
  const u = Ct((c) => (a) => ot.compare(c.y)(a.y))(s);
  return 0 < u.length ? u[0].y - 1 : (e + r) / 2;
}, D1 = (t) => (n) => (e) => {
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
}, L0 = (t) => (n) => (e) => (r) => (o) => {
  const i = yn(n)(e), s = xn(n)(e);
  if (!jo(i)(s)(r)(t))
    return r;
  if (!jo(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return jo(i)(s)(u)(t) ? D1((c) => jo(i)(s)(c)(t))(u)(1) : u;
}, Kx = (t) => (n) => (e) => (r) => (o) => {
  const i = yn(n)(e), s = xn(n)(e);
  if (!Zo(i)(s)(r)(t))
    return r;
  if (!Zo(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return Zo(i)(s)(u)(t) ? D1((c) => Zo(i)(s)(c)(t))(u)(1) : u;
}, Mx = (t) => (n) => (e) => (r) => {
  const o = yn(n)(e), i = xn(n)(e), s = at((a) => r >= a.x && r < a.x + a.w && a.y + a.h > o && a.y < i, t), u = w((a) => (l) => xn(a)(l.x + l.w + 4))(r + 4)(s), c = w((a) => (l) => yn(a)(l.x - 4))(r - 4)(s);
  return (() => {
    const a = u - r, l = c - r;
    return (a < 0 ? -a : a) <= (l < 0 ? -l : l);
  })() ? u : c;
}, jx = (t) => (n) => (e) => (r) => {
  const o = yn(n)(e), i = xn(n)(e), s = at((a) => r >= a.y && r < a.y + a.h && a.x + a.w > o && a.x < i, t), u = w((a) => (l) => xn(a)(l.y + l.h + 4))(r + 4)(s), c = w((a) => (l) => yn(a)(l.y - 4))(r - 4)(s);
  return (() => {
    const a = u - r, l = c - r;
    return (a < 0 ? -a : a) <= (l < 0 ? -l : l);
  })() ? u : c;
}, Zx = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
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
  })(), a = (T, b, L) => !Ps(n)(yn(b)(L))(xn(b)(L))(T), l = (T, b, L) => !Ps(e)(yn(b)(L))(xn(b)(L))(T), d = (T, b, L, A) => t.tag === "Just" && !oi(e)(yn(T)(b))(xn(T)(b))(t._1) ? t._1 : Kx(n)(T)(b)(L)(A), _ = (T, b, L, A) => {
    if (T === L) {
      const O = Mx(n)(b)(A)(T), H = Yx(n)(T)(b)(A), F = Vx(n)(T)(b)(A);
      return [
        { start: k(T, b), end: k(T, H), direction: sn },
        { start: k(T, H), end: k(O, H), direction: on },
        { start: k(O, H), end: k(O, F), direction: sn },
        { start: k(O, F), end: k(L, F), direction: on },
        { start: k(L, F), end: k(L, A), direction: sn }
      ];
    }
    const E = d(T, L, b, A);
    return [
      { start: k(T, b), end: k(T, E), direction: sn },
      { start: k(T, E), end: k(L, E), direction: on },
      { start: k(L, E), end: k(L, A), direction: sn }
    ];
  }, g = (T, b, L, A) => {
    if (b === A) {
      const O = jx(n)(T)(L)(b), H = Xx(n)(b)(T)(L), F = Ux(n)(b)(T)(L);
      return [
        { start: k(T, b), end: k(H, b), direction: on },
        { start: k(H, b), end: k(H, O), direction: sn },
        { start: k(H, O), end: k(F, O), direction: on },
        { start: k(F, O), end: k(F, A), direction: sn },
        { start: k(F, A), end: k(L, A), direction: on }
      ];
    }
    const E = L0(n)(b)(A)(T)(L);
    return [
      { start: k(T, b), end: k(E, b), direction: on },
      { start: k(E, b), end: k(E, A), direction: sn },
      { start: k(E, A), end: k(L, A), direction: on }
    ];
  }, p = (T, b, L) => !oi(n)(yn(b)(L))(xn(b)(L))(T), $ = (T, b, L) => !oi(e)(yn(b)(L))(xn(b)(L))(T), h = (T, b, L, A) => {
    if ($(b, T, L) && l(L, b, A))
      return [
        { start: k(T, b), end: k(L, b), direction: on },
        { start: k(L, b), end: k(L, A), direction: sn }
      ];
    const E = L0(n)(b)(A)(T)(L);
    return [
      { start: k(T, b), end: k(E, b), direction: on },
      { start: k(E, b), end: k(E, A), direction: sn },
      { start: k(E, A), end: k(L, A), direction: on }
    ];
  }, m = (T, b, L, A) => {
    if (l(T, b, A) && $(A, T, L))
      return [
        { start: k(T, b), end: k(T, A), direction: sn },
        { start: k(T, A), end: k(L, A), direction: on }
      ];
    const E = d(T, L, b, A);
    return [
      { start: k(T, b), end: k(T, E), direction: sn },
      { start: k(T, E), end: k(L, E), direction: on },
      { start: k(L, E), end: k(L, A), direction: sn }
    ];
  }, y = (() => {
    if (r === "South")
      return i === "North" ? u._1 === c._1 && a(u._1, u._2, c._2) ? [{ start: k(u._1, u._2), end: k(c._1, c._2), direction: sn }] : _(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? m(u._1, u._2, c._1, c._2) : _(u._1, u._2, c._1, c._2);
    if (r === "North")
      return i === "South" ? u._1 === c._1 && a(u._1, u._2, c._2) ? [{ start: k(u._1, u._2), end: k(c._1, c._2), direction: sn }] : _(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? m(u._1, u._2, c._1, c._2) : _(u._1, u._2, c._1, c._2);
    if (r === "East")
      return i === "West" ? u._2 === c._2 && p(u._2, u._1, c._1) ? [{ start: k(u._1, u._2), end: k(c._1, c._2), direction: on }] : g(u._1, u._2, c._1, c._2) : i === "North" || i === "South" ? h(u._1, u._2, c._1, c._2) : _(u._1, u._2, c._1, c._2);
    if (r === "West") {
      if (i === "East")
        return u._2 === c._2 && p(u._2, u._1, c._1) ? [{ start: k(u._1, u._2), end: k(c._1, c._2), direction: on }] : g(u._1, u._2, c._1, c._2);
      if (i === "North" || i === "South")
        return h(u._1, u._2, c._1, c._2);
    }
    return _(u._1, u._2, c._1, c._2);
  })(), x = (() => {
    if (r === "South" || r === "North")
      return sn;
    if (r === "East" || r === "West")
      return on;
    f();
  })(), J = {
    start: k(c._1, c._2),
    end: k(s._1, s._2),
    direction: (() => {
      if (i === "South" || i === "North")
        return sn;
      if (i === "East" || i === "West")
        return on;
      f();
    })()
  };
  return u._1 === c._1 && u._2 === c._2 ? [{ start: k(o._1, o._2), end: k(s._1, s._2), direction: x }] : Dx({ start: k(o._1, o._2), end: k(u._1, u._2), direction: x })(y)(J);
}, tv = /* @__PURE__ */ Q((t) => ({ x: t.position._1 * os - 2, y: t.position._2 * os - 2, w: t.size._1 * os + 4, h: t.size._2 * os + 4 })), Gs = /* @__PURE__ */ cn(G)(qt), Me = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, uc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, nv = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
          o = !1, i = N("Just", s._4);
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
          o = !1, i = N("Just", s._4);
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
          o = !1, i = N("Just", s._4);
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, E0 = (t) => (n) => {
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
}, cc = (t) => (n) => {
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
}, S0 = (t) => (n) => w((e) => (r) => Et(t)(gn)(n(r))([r])(e))(I), C0 = (t) => (n) => (e) => (r) => {
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
}, Q1 = (t) => (n) => {
  const e = t.hi - t.lo, r = (t.lo + t.hi) / 2, o = n.length;
  return o === 0 ? I : Gs(o === 1 ? Q((i) => k(i, r))(n) : Rt((i) => (s) => k(s, t.lo + M(i + 1 | 0) * e / M(o + 1 | 0)))(n));
}, H1 = (t) => (n) => (e) => (r) => (o) => {
  const i = S0(G)((g) => g.to.node)(t), s = S0(G)((g) => g.from.node)(t), u = w((g) => (p) => K(G)(p.node)(p)(g))(I)(n), c = (g, p, $) => {
    const h = Me(g)(u);
    if (h.tag === "Nothing")
      return k(0, 0);
    if (h.tag === "Just") {
      const m = Me(g)(e);
      if (m.tag === "Nothing") {
        const y = M(4);
        if ($ === "South")
          return k(h._1.position._1 * y + h._1.size._1 * y / 2, (h._1.position._2 + h._1.size._2) * y);
        if ($ === "North")
          return k(h._1.position._1 * y + h._1.size._1 * y / 2, h._1.position._2 * y);
        if ($ === "East")
          return k((h._1.position._1 + h._1.size._1) * y, h._1.position._2 * y + h._1.size._2 * y / 2);
        if ($ === "West")
          return k(h._1.position._1 * y, h._1.position._2 * y + h._1.size._2 * y / 2);
        f();
      }
      if (m.tag === "Just") {
        const y = Mt((x) => x.id === p)(m._1);
        if (y.tag === "Nothing") {
          const x = M(4);
          if ($ === "South")
            return k(h._1.position._1 * x + h._1.size._1 * x / 2, (h._1.position._2 + h._1.size._2) * x);
          if ($ === "North")
            return k(h._1.position._1 * x + h._1.size._1 * x / 2, h._1.position._2 * x);
          if ($ === "East")
            return k((h._1.position._1 + h._1.size._1) * x, h._1.position._2 * x + h._1.size._2 * x / 2);
          if ($ === "West")
            return k(h._1.position._1 * x, h._1.position._2 * x + h._1.size._2 * x / 2);
          f();
        }
        if (y.tag === "Just") {
          const x = M(4);
          if (y._1.side === "North")
            return k(h._1.position._1 * x + M(y._1.offset) * x, h._1.position._2 * x);
          if (y._1.side === "South")
            return k(h._1.position._1 * x + M(y._1.offset) * x, (h._1.position._2 + h._1.size._2) * x);
          if (y._1.side === "East")
            return k((h._1.position._1 + h._1.size._1) * x, h._1.position._2 * x + M(y._1.offset) * x);
          if (y._1.side === "West")
            return k(h._1.position._1 * x, h._1.position._2 * x + M(y._1.offset) * x);
        }
      }
    }
    f();
  }, a = Gs(xt(r)((g) => {
    if (g.nodes.length <= 2)
      return [];
    const p = M(4);
    if (1 < g.nodes.length) {
      const $ = Me(g.nodes[1])(u);
      if ($.tag === "Nothing")
        return [];
      if ($.tag === "Just") {
        const h = $._1.position._1 * p + $._1.size._1 * p / 2;
        return Q((m) => k(m, h))(pn(
          (m) => (y) => g.edgeId + ":" + m + "->" + y,
          g.nodes,
          Jt(1, g.nodes.length, g.nodes)
        ));
      }
      f();
    }
    return [];
  })), l = (g) => {
    const p = Me(g.from.node)(u), $ = Me(g.to.node)(u);
    if (p.tag === "Just" && $.tag === "Just") {
      const h = p._1, m = $._1, y = Ct((x) => (J) => it.compare(x.score)(J.score))(Q((x) => {
        const J = x._1, T = x._2;
        return {
          from: J,
          to: T,
          score: (() => {
            const b = (O, H, F, B, Z) => {
              const tt = cc(O)(H), Y = cc(O)(F);
              return tt.lo < Y.hi && Y.lo < tt.hi && (J === "South" ? T === "North" && Z._2 > B._2 : J === "North" ? T === "South" && Z._2 < B._2 : J === "East" ? T === "West" && Z._1 > B._1 : J === "West" && T === "East" && Z._1 < B._1) ? 0 : C0(J)(T)(B)(Z);
            }, L = E0(J)(h), A = E0(T)(m), E = C0(J)(T)(L)(A);
            return (() => {
              if (E > 0) {
                if (J === "South")
                  return T === "North" ? b(Nn, h, m, L, A) * 10 | 0 : E * 10 | 0;
                if (J === "North")
                  return T === "South" ? b(wn, h, m, L, A) * 10 | 0 : E * 10 | 0;
                if (J === "East")
                  return T === "West" ? b(Ze, h, m, L, A) * 10 | 0 : E * 10 | 0;
                if (J === "West" && T === "East")
                  return b(tr, h, m, L, A) * 10 | 0;
              }
              return E * 10 | 0;
            })() + (J === "South" ? T === "North" ? 0 : 15 : J === "North" ? T === "South" ? 0 : 15 : J === "East" ? T === "West" ? 5 : 15 : J === "West" && T === "East" ? 5 : 15) | 0;
          })()
        };
      })([
        k(Nn, wn),
        k(Ze, wn),
        k(tr, wn),
        k(Nn, Ze),
        k(Nn, tr),
        k(wn, Nn),
        k(wn, Ze),
        k(wn, tr),
        k(Ze, Nn),
        k(tr, Nn),
        k(Ze, tr),
        k(tr, Ze)
      ]));
      if (0 < y.length)
        return { from: y[0].from, to: y[0].to };
    }
    return { from: Nn, to: wn };
  }, d = Gs(Q((g) => k(g.id, l(g)))(t)), _ = (g, p, $, h, m, y) => {
    const x = M(4), J = Me(p)(u);
    if (J.tag === "Nothing")
      return k(0, 0);
    if (J.tag === "Just") {
      const T = nv(k($, g))(o);
      if (T.tag === "Just") {
        const b = J._1.position._1 * x + T._1, L = M(4);
        if (g === "South")
          return k(b, (J._1.position._2 + J._1.size._2) * L);
        if (g === "North")
          return k(b, J._1.position._2 * L);
        if (g === "East")
          return k((J._1.position._1 + J._1.size._1) * L, b);
        if (g === "West")
          return k(J._1.position._1 * L, b);
        f();
      }
      if (T.tag === "Nothing") {
        const b = cc(g)(J._1), L = (b.lo + b.hi) / 2, A = uc($)(Q1(b)(Q((H) => H.id)(Ct((H) => (F) => ot.compare(m(g)(H))(m(g)(F)))(at(
          (H) => {
            const F = uc(H.id)(d);
            if (F.tag === "Just") {
              const B = y(F._1);
              return B === "North" ? g === "North" : B === "South" ? g === "South" : B === "East" ? g === "East" : B === "West" && g === "West";
            }
            if (F.tag === "Nothing")
              return !0;
            f();
          },
          (() => {
            const H = Me(p)(h);
            if (H.tag === "Nothing")
              return [];
            if (H.tag === "Just")
              return H._1;
            f();
          })()
        ))))), E = (() => {
          if (A.tag === "Nothing")
            return L;
          if (A.tag === "Just")
            return A._1;
          f();
        })(), O = M(4);
        if (g === "South")
          return k(E, (J._1.position._2 + J._1.size._2) * O);
        if (g === "North")
          return k(E, J._1.position._2 * O);
        if (g === "East")
          return k((J._1.position._1 + J._1.size._1) * O, E);
        if (g === "West")
          return k(J._1.position._1 * O, E);
      }
    }
    f();
  };
  return Q((g) => {
    const p = uc(g.edge.id)(a);
    if (p.tag === "Nothing")
      return g;
    if (p.tag === "Just")
      return {
        ...g,
        fromPos: En(3)(g.edge.from.node) === "$d:" ? k(p._1, g.fromPos._2) : g.fromPos,
        toPos: En(3)(g.edge.to.node) === "$d:" ? k(p._1, g.toPos._2) : g.toPos
      };
    f();
  })(Q((g) => {
    if (g.from.port.tag === "Just" && g.to.port.tag === "Just")
      return {
        edge: g,
        fromPos: c(g.from.node, g.from.port._1, Nn),
        toPos: c(g.to.node, g.to.port._1, wn),
        fromSide: Nn,
        toSide: wn
      };
    const p = l(g);
    return {
      edge: g,
      fromPos: _(
        p.from,
        g.from.node,
        g.id,
        s,
        ($) => (h) => {
          const m = Me(h.to.node)(u);
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just") {
            const y = M(4);
            if ($ === "South" || $ === "North")
              return m._1.position._1 * y + m._1.size._1 * y / 2;
            if ($ === "East" || $ === "West")
              return m._1.position._2 * y + m._1.size._2 * y / 2;
          }
          f();
        },
        ($) => $.from
      ),
      toPos: _(
        p.to,
        g.to.node,
        g.id,
        i,
        ($) => (h) => {
          const m = Me(h.from.node)(u);
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just") {
            const y = M(4);
            if ($ === "South" || $ === "North")
              return m._1.position._1 * y + m._1.size._1 * y / 2;
            if ($ === "East" || $ === "West")
              return m._1.position._2 * y + m._1.size._2 * y / 2;
          }
          f();
        },
        ($) => $.to
      ),
      fromSide: p.from,
      toSide: p.to
    };
  })(t));
}, W1 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
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
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ev = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Ve);
  return (n) => t(ge("IterNode", n, Ue));
})(), Bc = (t) => (n) => t.gapTop + 1 * M(4) + M(n) * 2.5 * M(4), rv = (t) => (n) => {
  const e = W1(n.edge.id)(t);
  if (e.tag === "Just") {
    if (e._1.partner.tag === "Just")
      return N("Just", { slot1Y: Bc(e._1)(e._1.slot), splitX: e._1.partner._1.splitX, slot2Y: Bc(e._1)(e._1.partner._1.slot) });
    if (e._1.partner.tag === "Nothing")
      return v;
    f();
  }
  if (e.tag === "Nothing")
    return v;
  f();
}, ov = (t) => (n) => {
  const e = w((r) => (o) => K(G)(o.node)(o)(r))(I)(n);
  return se(Rt((r) => (o) => {
    const i = xo(o.node)(e);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just") {
      const s = i._1;
      return Rt((u) => (c) => {
        const a = o.edges.length, l = M(4), d = s.position._1 * l, _ = s.position._2 * l, g = s.size._2 * l, p = M((2 * a | 0) + 1 | 0), $ = _ + g * M(a - u | 0) / p, h = _ + g * M((a + 1 | 0) + u | 0) / p, m = d - l * 2.5 * M(u + 1 | 0), y = [
          { start: k(d, $), end: k(m, $), direction: on },
          { start: k(m, $), end: k(m, h), direction: sn },
          { start: k(m, h), end: k(d, h), direction: on }
        ];
        return { edge: c.id, segments: y, bends: pn((x) => (J) => x.end, y, Jt(1, 3, y)), bendType: [], jumps: [], reversed: !1 };
      })(o.edges);
    }
    f();
  })(Q((r) => ({ node: r._1, edges: r._2 }))(ev(w((r) => (o) => Et(G)(gn)(o.from.node)([
    o
  ])(r))(I)(t)))));
}, iv = (t) => (n) => {
  const e = w((i) => (s) => K(G)(s.node)(s)(i))(I)(n), r = (i) => {
    const s = xo(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.position._1;
    f();
  }, o = (i) => {
    const s = xo(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.layer;
    f();
  };
  return Ct((i) => (s) => {
    const u = it.compare(o(i.edge.from.node))(o(s.edge.from.node));
    if (u === "EQ") {
      const c = ot.compare(r(i.edge.from.node))(r(s.edge.from.node));
      return c === "EQ" ? ot.compare(r(i.edge.to.node))(r(s.edge.to.node)) : c;
    }
    return u;
  })(t);
}, Zn = (t) => {
  const n = M(4);
  return { x: t.position._1 * n - 2, y: t.position._2 * n - 2, w: t.size._1 * n + 4, h: t.size._2 * n + 4 };
}, sv = (t) => t.from.node === t.to.node, uv = (t) => (n) => (e) => (r) => {
  const o = qx(e)(Zx(t)(n)(e)(r.fromSide)(r.fromPos)(r.toSide)(r.toPos));
  return {
    edge: r.edge.id,
    segments: o,
    bends: pn((i) => (s) => i.end, o, Jt(1, o.length, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, cv = (t) => (n) => (e) => (r) => {
  const o = [
    { start: k(r.fromPos._1, r.fromPos._2), end: k(r.fromPos._1, t.slot1Y), direction: sn },
    { start: k(r.fromPos._1, t.slot1Y), end: k(t.splitX, t.slot1Y), direction: on },
    { start: k(t.splitX, t.slot1Y), end: k(t.splitX, t.slot2Y), direction: sn },
    { start: k(t.splitX, t.slot2Y), end: k(r.toPos._1, t.slot2Y), direction: on },
    { start: k(r.toPos._1, t.slot2Y), end: k(r.toPos._1, r.toPos._2), direction: sn }
  ];
  return {
    edge: r.edge.id,
    segments: o,
    bends: pn((i) => (s) => i.end, o, Jt(1, 5, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, av = (t) => (n) => (e) => {
  const r = xo(t.edge.from.node)(e);
  if (r.tag === "Just") {
    const i = xo(t.edge.to.node)(e);
    return i.tag === "Just" ? at(
      (s) => !(s.h === Zn(r._1).h && s.w === Zn(r._1).w && s.x === Zn(r._1).x && s.y === Zn(r._1).y) && !(s.h === Zn(i._1).h && s.w === Zn(i._1).w && s.x === Zn(i._1).x && s.y === Zn(i._1).y),
      n
    ) : at((s) => !(s.h === Zn(r._1).h && s.w === Zn(r._1).w && s.x === Zn(r._1).x && s.y === Zn(r._1).y), n);
  }
  const o = xo(t.edge.to.node)(e);
  return o.tag === "Just" ? at((i) => !(i.h === Zn(o._1).h && i.w === Zn(o._1).w && i.x === Zn(o._1).x && i.y === Zn(o._1).y), n) : at((i) => !0, n);
}, fv = (t) => (n) => {
  const e = W1(n.edge.id)(t);
  if (e.tag === "Just")
    return N("Just", Bc(e._1)(e._1.slot));
  if (e.tag === "Nothing")
    return v;
  f();
}, lv = (t) => (n) => (e) => (r) => (o) => {
  const i = w((a) => (l) => K(G)(l.node)(l)(a))(I)(n), s = tv(n), u = H1(at((a) => a.from.node !== a.to.node, t))(n)(e)(r)(o), c = B1(u)(n);
  return [
    ...ov(at(sv, t))(n),
    ...w((a) => (l) => {
      const d = av(l)(s)(i), _ = [...d, ...a.edgeObstacles], g = rv(c)(l), p = (() => {
        if (g.tag === "Just")
          return cv(g._1)(d)(_)(l);
        if (g.tag === "Nothing")
          return uv(fv(c)(l))(d)(_)(l);
        f();
      })();
      return { results: [...a.results, p], edgeObstacles: [...a.edgeObstacles, ...zx(p.segments)] };
    })({ results: [], edgeObstacles: [] })(iv(u)(n)).results
  ];
}, kr = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Lr = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, gv = (t) => (n) => (e) => {
  if (t.start._1 !== n.start._1)
    return v;
  const r = Lr(kr(t.start._2)(t.end._2))(kr(n.start._2)(n.end._2)), o = kr(Lr(t.start._2)(t.end._2))(Lr(n.start._2)(n.end._2));
  return r < o ? N("Just", { position: k(t.start._1, (r + o) / 2), crossingEdge: e }) : v;
}, dv = (t) => (n) => (e) => {
  if (t.start._2 !== n.start._2)
    return v;
  const r = Lr(kr(t.start._1)(t.end._1))(kr(n.start._1)(n.end._1)), o = kr(Lr(t.start._1)(t.end._1))(Lr(n.start._1)(n.end._1));
  return r < o ? N("Just", { position: k((r + o) / 2, t.start._2), crossingEdge: e }) : v;
}, _v = (t) => (n) => (e) => {
  if (t.direction === "H")
    return dv(t)(n)(e);
  if (t.direction === "V")
    return gv(t)(n)(e);
  f();
}, hv = (t) => (n) => (e) => {
  const r = t + 1 | 0, o = r < 1 ? e : Jt(r, e.length, e);
  return xt(n.segments)((i) => xt(o)((s) => yt((u) => _v(i)(u)(s.edge))(at(
    (u) => u.direction === "H" ? i.direction === "H" : u.direction === "V" && i.direction === "V",
    s.segments
  ))));
}, pv = (t) => (n) => (e) => n.start._1 > kr(t.start._1)(t.end._1) && n.start._1 < Lr(t.start._1)(t.end._1) && t.start._2 > kr(n.start._2)(n.end._2) && t.start._2 < Lr(n.start._2)(n.end._2) ? N("Just", { position: k(n.start._1, t.start._2), crossingEdge: e }) : v, mv = (t) => (n) => xt(at((e) => e.direction === "H", t.segments))((e) => xt(n)((r) => yt((o) => pv(e)(o)(r.edge))(at(
  (o) => o.direction === "V",
  r.segments
)))), $v = (t) => (n) => (e) => [
  ...mv(n)(at((r) => r.edge !== n.edge, e)),
  ...hv(t)(n)(e)
], A0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, O1 = (t) => En(3)(t) === "$d:", yv = (t) => (n) => (e) => w((r) => (o) => {
  const i = A0(o.from.node)(t), s = (() => {
    if (i.tag === "Nothing")
      return 0;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = A0(o.to.node)(t), c = (() => {
    if (u.tag === "Nothing")
      return -s;
    if (u.tag === "Just")
      return u._1 - s | 0;
    f();
  })();
  if (c <= 1)
    return { ...r, edges: [...r.edges, o], chains: [...r.chains, { edgeId: o.id, nodes: [o.from.node, o.to.node] }] };
  const a = o.id, l = Q((_) => "$d:" + a + ":" + un(_))(zt(1, c - 1 | 0)), d = [o.from.node, ...l, o.to.node];
  return {
    ...r,
    layers: w((_) => (g) => {
      const p = g._2, $ = Th(s + g._1 | 0)((h) => [...h, p])(_);
      if ($.tag === "Nothing")
        return _;
      if ($.tag === "Just")
        return $._1;
      f();
    })(r.layers)(pn(In, zt(1, c - 1 | 0), l)),
    edges: [
      ...r.edges,
      ...pn(
        (_) => (g) => ({ id: a + ":" + _ + "->" + g, from: { node: _, port: o.from.port }, to: { node: g, port: o.to.port }, label: v }),
        d,
        Jt(1, d.length, d)
      )
    ],
    chains: [...r.chains, { edgeId: o.id, nodes: d }]
  };
})({ layers: e, edges: [], chains: [] })(n), Fs = /* @__PURE__ */ (() => {
  const t = {
    eq: (n) => (e) => n._1 === e._1 && (n._2 === "North" ? e._2 === "North" : n._2 === "South" ? e._2 === "South" : n._2 === "East" ? e._2 === "East" : n._2 === "West" && e._2 === "West")
  };
  return {
    compare: (n) => (e) => {
      const r = G.compare(n._1)(e._1);
      if (r === "LT")
        return Sn;
      if (r === "GT")
        return Cn;
      if (n._2 === "North")
        return e._2 === "North" ? Yn : Sn;
      if (e._2 === "North")
        return Cn;
      if (n._2 === "South")
        return e._2 === "South" ? Yn : Sn;
      if (e._2 === "South")
        return Cn;
      if (n._2 === "East")
        return e._2 === "East" ? Yn : Sn;
      if (e._2 === "East")
        return Cn;
      if (n._2 === "West" && e._2 === "West")
        return Yn;
      f();
    },
    Eq0: () => t
  };
})(), xv = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = Fs.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, vv = /* @__PURE__ */ cn(G)(qt), ac = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, wv = /* @__PURE__ */ cn(Fs)(qt), P0 = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Ve);
  return (n) => t(ge("IterNode", n, Ue));
})(), vo = (t) => (n) => (e) => (r) => {
  const o = xv(k(n, e))(t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just")
    return o._1;
  f();
}, q1 = (t) => (n) => (e) => {
  const r = vv(se(Q((s) => Rt((u) => (c) => k(c, u))(s))(t))), o = (s, u) => {
    if (s === "South") {
      const c = ac(u.to.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    if (s === "North") {
      const c = ac(u.from.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    return 0;
  }, i = (s) => w((u) => (c) => Wn(
    Fs.compare,
    Hn,
    wv(Q((a) => k(k(a._1, s), a._2))(P0(Q1({
      lo: 0,
      hi: (() => {
        const a = ac(c._1)(e);
        if (a.tag === "Just")
          return a._1._1;
        if (a.tag === "Nothing")
          return En(3)(c._1) === "$d:" ? 0 : 1;
        f();
      })()
    })(Q((a) => a.id)(Ct((a) => (l) => it.compare(o(s, a))(o(s, l)))(c._2)))))),
    u
  ))(I)(P0(w((u) => (c) => c.from.node === c.to.node ? u : s === "South" ? Et(G)(gn)(c.from.node)([c])(u) : s === "North" ? Et(G)(gn)(c.to.node)([c])(u) : u)(I)(n)));
  return Wn(Fs.compare, Hn, i(wn), i(Nn));
}, X1 = (t) => t, Y1 = (t) => t, U1 = (t) => t, Nv = /* @__PURE__ */ w((t) => (n) => K(G)(n)()(t))(I), Tv = /* @__PURE__ */ (() => {
  const t = me.unfoldr((n) => {
    if (n.tag === "Nil")
      return v;
    if (n.tag === "Cons")
      return N("Just", k(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, jt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Zt);
  })());
})(), ut = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, $e = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Oe = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Re = /* @__PURE__ */ cn(G)(qt), fc = /* @__PURE__ */ pg(G), zc = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Ve);
  return (n) => t(ge("IterNode", n, Ue));
})(), Jv = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, bv = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, G0 = /* @__PURE__ */ U1("VDown"), F0 = /* @__PURE__ */ U1("VUp"), kv = /* @__PURE__ */ Y1("ForwardPhase"), Lv = /* @__PURE__ */ Y1("StackPhase"), I0 = /* @__PURE__ */ X1("HRight"), R0 = /* @__PURE__ */ X1("HLeft"), B0 = (t) => (e) => {
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
}, Ev = (t) => (n) => (e) => {
  const r = w((u) => (c) => Et(G)(_n)(c.tgt)(1)(u))(I)(t), o = Tv(Nv([
    ...Q((u) => u.src)(t),
    ...Q((u) => u.tgt)(t),
    ...(() => {
      const u = (c, a) => {
        if (c.tag === "Leaf")
          return a;
        if (c.tag === "Node")
          return u(c._5, jt("Cons", c._4, u(c._6, a)));
        f();
      };
      return Gt(tn.foldr, u(n, Zt));
    })()
  ])), i = w((u) => (c) => Et(G)(gn)(c.src)([{ target: c.tgt, sep: c.sep }])(u))(I)(t);
  return ((u) => (c) => (a) => {
    let l = u, d = c, _ = a, g = !0, p;
    for (; g; ) {
      const $ = l, h = d, m = _, y = Bt((x) => v, (x) => (J) => N("Just", { head: x, tail: J }), $);
      if (y.tag === "Nothing") {
        g = !1, p = m;
        continue;
      }
      if (y.tag === "Just") {
        const x = ut(y._1.head)(m), J = (() => {
          if (x.tag === "Nothing")
            return 0;
          if (x.tag === "Just")
            return x._1;
          f();
        })(), T = w((b) => (L) => {
          const A = ut(L.target)(b.result), E = J + L.sep, O = ut(L.target)(b.indeg), H = (() => {
            if (O.tag === "Nothing")
              return -1;
            if (O.tag === "Just")
              return O._1 - 1 | 0;
            f();
          })();
          return {
            newQueue: H === 0 ? [...b.newQueue, L.target] : b.newQueue,
            result: K(G)(L.target)((() => {
              if (A.tag === "Nothing")
                return E;
              if (A.tag === "Just") {
                if (e === "VDown")
                  return $e(A._1)(E);
                if (e === "VUp")
                  return Oe(A._1)(E);
              }
              f();
            })())(b.result),
            indeg: K(G)(L.target)(H)(b.indeg)
          };
        })({ newQueue: [], result: m, indeg: h })((() => {
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
  })(at(
    (u) => {
      const c = ut(u)(r);
      if (c.tag === "Nothing")
        return !0;
      if (c.tag === "Just")
        return c._1 === 0;
      f();
    },
    o
  ))(r)(w((u) => (c) => K(G)(c)(0)(u))(I)(o));
}, Sv = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, jt("Cons", i._4, n(i._6, s)));
    f();
  }, e = Gt(tn.foldr, n(t, Zt)), r = w($e)(999999)(e);
  if (r === 0 || e.length === 0)
    return t;
  const o = (i) => {
    if (i.tag === "Leaf")
      return I;
    if (i.tag === "Node")
      return Yt("Node", i._1, i._2, i._3, i._4 - r, o(i._5), o(i._6));
    f();
  };
  return o(t);
}, V1 = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, jt("Cons", i._4, n(i._6, s)));
    f();
  }, e = n(t, Zt), r = (i) => (s) => {
    let u = i, c = s, a = !0, l;
    for (; a; ) {
      const d = u, _ = c;
      if (_.tag === "Nil") {
        a = !1, l = d;
        continue;
      }
      if (_.tag === "Cons") {
        u = Oe(d)(_._1), c = _._2;
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
        u = $e(d)(_._1), c = _._2;
        continue;
      }
      f();
    }
    return l;
  };
  return r(-999999)(e) - o(999999)(e);
}, ti = (t) => (n) => ((r) => (o) => {
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
})())([n]), Cv = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (l) => {
  const d = (S, C, q) => {
    const P = S.from.node === C ? S.from.port : S.to.node === C ? S.to.port : v;
    if (P.tag === "Just") {
      const D = ut(C)(o);
      if (D.tag === "Just") {
        const W = Mt((V) => V.id === P._1)(D._1);
        if (W.tag === "Just") {
          const V = M(W._1.offset) * M(4);
          return q === "North" || q === "South" ? V : 0;
        }
        if (W.tag === "Nothing") {
          const V = ut(C)(r), U = vo(s)(S.id)(q)((() => {
            if (V.tag === "Nothing")
              return 0.5;
            if (V.tag === "Just")
              return V._1._1 / 2;
            f();
          })());
          return q === "North" || q === "South" ? U : 0;
        }
        f();
      }
      if (D.tag === "Nothing") {
        const W = ut(C)(r), V = vo(s)(S.id)(q)((() => {
          if (W.tag === "Nothing")
            return 0.5;
          if (W.tag === "Just")
            return W._1._1 / 2;
          f();
        })());
        return q === "North" || q === "South" ? V : 0;
      }
      f();
    }
    if (P.tag === "Nothing") {
      const D = ut(C)(r), W = vo(s)(S.id)(q)((() => {
        if (D.tag === "Nothing")
          return 0.5;
        if (D.tag === "Just")
          return D._1._1 / 2;
        f();
      })());
      return q === "North" || q === "South" ? W : 0;
    }
    f();
  }, _ = (S, C) => {
    if (S.from.node === C) {
      if (l === "HRight")
        return Nn;
      if (l === "HLeft")
        return wn;
      f();
    }
    if (l === "HRight")
      return wn;
    if (l === "HLeft")
      return Nn;
    f();
  }, g = (S, C, q) => w((P) => (D) => K(G)(D)((() => {
    const W = ut(D)(P);
    if (W.tag === "Nothing")
      return 0 + C;
    if (W.tag === "Just")
      return W._1 + C;
    f();
  })())(P))(q)(ti(c)(S)), p = (() => {
    if (l === "HRight")
      return e;
    if (l === "HLeft")
      return An(e);
    f();
  })(), $ = (S) => {
    const C = ut(S)(r);
    if (C.tag === "Nothing")
      return 1;
    if (C.tag === "Just")
      return C._1._1;
    f();
  }, h = Re(se(Rt((S) => (C) => Q((q) => k(q, S))(C))(e))), m = (S, C) => En(3)(S) === "$d:" && En(3)(C) === "$d:" || En(3)(S) === "$d:" || En(3)(C) === "$d:" ? 10 : M(t.nodeGap), y = w((S) => (C) => fc((q) => N(
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
  ))(C.to.node)(S))(I)(i), x = w((S) => (C) => fc((q) => N(
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
  ))(C.from.node)(S))(I)(i), J = se(e), T = w((S) => (C) => {
    const q = ut(C)(c.root), P = (() => {
      if (q.tag === "Nothing")
        return C;
      if (q.tag === "Just")
        return q._1;
      f();
    })();
    return C === P ? S : fc((D) => N(
      "Just",
      (() => {
        if (D.tag === "Nothing")
          return !0;
        if (D.tag === "Just")
          return D._1;
        f();
      })() && En(3)(C) === "$d:"
    ))(P)(S);
  })(Re(Q((S) => k(S, !0))(ko(G.compare)((() => {
    const S = (C, q) => {
      if (C.tag === "Leaf")
        return q;
      if (C.tag === "Node")
        return S(C._5, jt("Cons", C._4, S(C._6, q)));
      f();
    };
    return Gt(tn.foldr, S(c.root, Zt));
  })()))))(J), b = (S, C) => {
    const q = S.free, P = ut(q)(c.root), D = (() => {
      if (P.tag === "Nothing")
        return q;
      if (P.tag === "Just")
        return P._1;
      f();
    })(), W = ut(D)(T), V = (() => {
      if (W.tag === "Nothing")
        return !0;
      if (W.tag === "Just")
        return W._1;
      f();
    })();
    return w((U) => (X) => {
      if (U.edge.tag === "Just")
        return U;
      if (U.edge.tag === "Nothing") {
        if ((() => {
          const ct = ut(D)(C.su);
          return !V && (() => {
            const dt = ut(X.from.node)(h);
            return X.from.node !== X.to.node && (() => {
              const Ot = ut(X.to.node)(h);
              return (() => {
                if (dt.tag === "Nothing")
                  return -1;
                if (dt.tag === "Just")
                  return dt._1;
                f();
              })() === (() => {
                if (Ot.tag === "Nothing")
                  return -1;
                if (Ot.tag === "Just")
                  return Ot._1;
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
        const et = X.from.node === q ? X.to.node : X.from.node, nt = ut(et)(c.root), j = (() => {
          if (nt.tag === "Nothing")
            return et;
          if (nt.tag === "Just")
            return nt._1;
          f();
        })(), rt = j !== D;
        return rt && (() => {
          const ct = ut(j)(C.blockFinished);
          if (ct.tag === "Nothing")
            return !1;
          if (ct.tag === "Just")
            return ct._1;
          f();
        })() ? { ...U, edge: N("Just", X), hasEdges: !0 } : { ...U, hasEdges: U.hasEdges || rt };
      }
      f();
    })({ edge: v, hasEdges: !1 })((() => {
      if (S.isRoot) {
        if (l === "HRight") {
          const U = ut(q)(y);
          if (U.tag === "Nothing")
            return [];
          if (U.tag === "Just")
            return U._1;
          f();
        }
        if (l === "HLeft") {
          const U = ut(q)(x);
          if (U.tag === "Nothing")
            return [];
          if (U.tag === "Just")
            return U._1;
        }
        f();
      }
      if (l === "HRight") {
        const U = ut(q)(x);
        if (U.tag === "Nothing")
          return [];
        if (U.tag === "Just")
          return U._1;
        f();
      }
      if (l === "HLeft") {
        const U = ut(q)(y);
        if (U.tag === "Nothing")
          return [];
        if (U.tag === "Just")
          return U._1;
      }
      f();
    })());
  }, L = (S, C, q, P) => {
    const D = (() => {
      if (a === "VDown")
        return -1e18;
      if (a === "VUp")
        return 1e18;
      f();
    })(), W = { free: C, isRoot: q }, V = b(W, P);
    if (V.edge.tag === "Nothing")
      return V.hasEdges ? { thresh: D, state: { ...P, queue: [...P.queue, W] } } : { thresh: D, state: P };
    if (V.edge.tag === "Just") {
      const U = V.edge._1.from.node === C ? V.edge._1.to.node : V.edge._1.from.node;
      return {
        thresh: (() => {
          const X = ut((() => {
            const rt = ut(U)(c.root);
            if (rt.tag === "Nothing")
              return U;
            if (rt.tag === "Just")
              return rt._1;
            f();
          })())(P.x), et = ut(U)(u), nt = ut(C)(u), j = (() => {
            if (X.tag === "Just")
              return X._1;
            if (X.tag === "Nothing")
              return v;
            f();
          })();
          return (() => {
            if (j.tag === "Nothing")
              return 0;
            if (j.tag === "Just")
              return j._1;
            f();
          })() + (() => {
            if (et.tag === "Nothing")
              return 0;
            if (et.tag === "Just")
              return et._1;
            f();
          })() + d(
            V.edge._1,
            U,
            (() => {
              if (q) {
                if (l === "HRight")
                  return Nn;
                if (l === "HLeft")
                  return wn;
                f();
              }
              if (l === "HRight")
                return wn;
              if (l === "HLeft")
                return Nn;
              f();
            })()
          ) - (() => {
            if (nt.tag === "Nothing")
              return 0;
            if (nt.tag === "Just")
              return nt._1;
            f();
          })() - d(
            V.edge._1,
            C,
            (() => {
              if (q) {
                if (l === "HRight")
                  return wn;
                if (l === "HLeft")
                  return Nn;
                f();
              }
              if (l === "HRight")
                return Nn;
              if (l === "HLeft")
                return wn;
              f();
            })()
          );
        })(),
        state: {
          ...P,
          su: K(G)((() => {
            const X = ut(V.edge._1.from.node)(c.root);
            if (X.tag === "Nothing")
              return V.edge._1.from.node;
            if (X.tag === "Just")
              return X._1;
            f();
          })())(!0)(K(G)((() => {
            const X = ut(V.edge._1.to.node)(c.root);
            if (X.tag === "Nothing")
              return V.edge._1.to.node;
            if (X.tag === "Just")
              return X._1;
            f();
          })())(!0)(P.su))
        }
      };
    }
    f();
  }, A = (S, C, q, P) => {
    const D = C === S, W = ut(C)(c.align), V = (() => {
      if (W.tag === "Nothing")
        return C === S;
      if (W.tag === "Just")
        return W._1 === S;
      f();
    })();
    if (!(D || V))
      return { thresh: q, state: P };
    const U = (() => {
      if (a === "VDown")
        return D && q <= -1e18;
      if (a === "VUp")
        return D && q >= 1e18;
      f();
    })() ? L(S, C, !0, P) : { thresh: q, state: P };
    return (() => {
      if (a === "VDown")
        return U.thresh <= -1e18 && V;
      if (a === "VUp")
        return U.thresh >= 1e18 && V;
      f();
    })() ? L(S, C, !1, U.state) : U;
  }, E = (S) => (C) => (q) => {
    const P = ut(q)(n.nodeIndex), D = (() => {
      if (P.tag === "Nothing")
        return 0;
      if (P.tag === "Just")
        return P._1;
      f();
    })(), W = Mt((nt) => ie(be)(q)(nt))(p), V = (() => {
      if (W.tag === "Nothing")
        return [];
      if (W.tag === "Just")
        return W._1;
      f();
    })(), U = V.length;
    if ((() => {
      if (a === "VDown")
        return D <= 0;
      if (a === "VUp")
        return D >= (U - 1 | 0);
      f();
    })()) {
      const nt = A(S, q, C.thresh, C.st);
      return { ...C, st: nt.state, thresh: nt.thresh };
    }
    const X = (() => {
      if (a === "VDown")
        return D - 1 | 0;
      if (a === "VUp")
        return D + 1 | 0;
      f();
    })(), et = X >= 0 && X < V.length ? N("Just", V[X]) : v;
    if (et.tag === "Nothing")
      return C;
    if (et.tag === "Just") {
      const nt = ut(et._1)(c.root), j = (() => {
        if (nt.tag === "Nothing")
          return et._1;
        if (nt.tag === "Just")
          return nt._1;
        f();
      })(), rt = A(S, q, C.thresh, O(j)(C.st)), ct = (() => {
        const kt = ut(S)(rt.state.sink);
        if (kt.tag === "Nothing")
          return S === S;
        if (kt.tag === "Just")
          return kt._1 === S;
        f();
      })() ? {
        ...rt.state,
        sink: K(G)(S)((() => {
          const kt = ut(j)(rt.state.sink);
          if (kt.tag === "Nothing")
            return j;
          if (kt.tag === "Just")
            return kt._1;
          f();
        })())(rt.state.sink)
      } : rt.state, dt = ut(j)(ct.sink), Ot = (() => {
        if (dt.tag === "Nothing")
          return j;
        if (dt.tag === "Just")
          return dt._1;
        f();
      })(), bt = ut(S)(ct.sink), Dt = (() => {
        if (bt.tag === "Nothing")
          return S;
        if (bt.tag === "Just")
          return bt._1;
        f();
      })();
      if (Dt === Ot) {
        const kt = ut(j)(ct.x), Qt = (() => {
          if (kt.tag === "Just")
            return kt._1;
          if (kt.tag === "Nothing")
            return v;
          f();
        })(), fe = (() => {
          if (Qt.tag === "Nothing")
            return 0;
          if (Qt.tag === "Just")
            return Qt._1;
          f();
        })(), On = ut(S)(ct.x), zn = (() => {
          if (On.tag === "Just")
            return On._1;
          if (On.tag === "Nothing")
            return v;
          f();
        })(), Ft = (() => {
          if (zn.tag === "Nothing")
            return 0;
          if (zn.tag === "Just")
            return zn._1;
          f();
        })(), St = m(q, et._1), oe = ut(et._1)(u), qn = ut(q)(u), Xn = (() => {
          if (oe.tag === "Nothing")
            return 0;
          if (oe.tag === "Just")
            return oe._1;
          f();
        })() - (() => {
          if (qn.tag === "Nothing")
            return 0;
          if (qn.tag === "Just")
            return qn._1;
          f();
        })();
        if (a === "VDown") {
          const Gn = Oe(fe + Xn + $(et._1) + St)(rt.thresh);
          return {
            st: { ...ct, x: K(G)(S)(N("Just", C.initial ? Gn : Oe(Ft)(Gn)))(ct.x) },
            initial: !1,
            thresh: rt.thresh
          };
        }
        if (a === "VUp") {
          const Gn = $e(fe + Xn - St - $(q))(rt.thresh);
          return {
            st: { ...ct, x: K(G)(S)(N("Just", C.initial ? Gn : $e(Ft)(Gn)))(ct.x) },
            initial: !1,
            thresh: rt.thresh
          };
        }
        f();
      }
      const _t = ut(j)(ct.x), wt = (() => {
        if (_t.tag === "Just")
          return _t._1;
        if (_t.tag === "Nothing")
          return v;
        f();
      })(), pt = (() => {
        if (wt.tag === "Nothing")
          return 0;
        if (wt.tag === "Just")
          return wt._1;
        f();
      })(), $t = ut(S)(ct.x), lt = (() => {
        if ($t.tag === "Just")
          return $t._1;
        if ($t.tag === "Nothing")
          return v;
        f();
      })(), gt = (() => {
        if (lt.tag === "Nothing")
          return 0;
        if (lt.tag === "Just")
          return lt._1;
        f();
      })(), st = M(t.nodeGap), ft = ut(q)(u), Nt = ut(et._1)(u), vt = (() => {
        if (ft.tag === "Nothing")
          return 0;
        if (ft.tag === "Just")
          return ft._1;
        f();
      })() - (() => {
        if (Nt.tag === "Nothing")
          return 0;
        if (Nt.tag === "Just")
          return Nt._1;
        f();
      })();
      return {
        st: {
          ...ct,
          classEdges: [
            ...ct.classEdges,
            {
              src: Dt,
              tgt: Ot,
              sep: (() => {
                if (a === "VDown")
                  return gt + vt - pt - $(et._1) - st;
                if (a === "VUp")
                  return gt + vt + $(q) + st - pt;
                f();
              })()
            }
          ]
        },
        initial: C.initial,
        thresh: rt.thresh
      };
    }
    f();
  }, O = (S) => (C) => {
    const q = ut(S)(C.x), P = (() => {
      if (q.tag === "Just")
        return q._1;
      if (q.tag === "Nothing")
        return v;
      f();
    })();
    if (P.tag === "Just")
      return C;
    if (P.tag === "Nothing") {
      const D = w(E(S))({
        st: { ...C, x: K(G)(S)(N("Just", 0))(C.x) },
        initial: !0,
        thresh: (() => {
          if (a === "VDown")
            return -1e18;
          if (a === "VUp")
            return 1e18;
          f();
        })()
      })(ti(c)(S));
      return { ...D.st, blockFinished: K(G)(S)(!0)(D.st.blockFinished) };
    }
    f();
  }, H = w((S) => (C) => w((q) => (P) => {
    const D = ut(P)(c.root), W = (() => {
      if (D.tag === "Nothing")
        return P;
      if (D.tag === "Just")
        return D._1;
      f();
    })();
    return W === P ? O(W)(q) : q;
  })(S)((() => {
    if (a === "VDown")
      return C;
    if (a === "VUp")
      return An(C);
    f();
  })()))({
    x: Re(Q((S) => k(S, v))(J)),
    sink: Re(Q((S) => k(S, S))(J)),
    classEdges: [],
    su: I,
    blockFinished: I,
    queue: []
  })(p), F = Ev(H.classEdges)(H.sink)(a), B = (S, C, q, P) => {
    const D = ut(C)(P), W = ut(C)(u);
    return (() => {
      if (D.tag === "Nothing")
        return 0;
      if (D.tag === "Just")
        return D._1;
      f();
    })() + (() => {
      if (W.tag === "Nothing")
        return 0;
      if (W.tag === "Just")
        return W._1;
      f();
    })() + d(S, C, q);
  }, Z = Re(Q((S) => k(S, !0))(ko(G.compare)((() => {
    const S = (C, q) => {
      if (C.tag === "Leaf")
        return q;
      if (C.tag === "Node")
        return S(C._5, jt("Cons", C._4, S(C._6, q)));
      f();
    };
    return Gt(tn.foldr, S(c.root, Zt));
  })()))), tt = (S) => (C) => (q) => {
    const P = b(q, { su: C.su, blockFinished: Z }), D = {
      phase: S,
      ppFree: q.free,
      ppIsRoot: q.isRoot,
      edgeId: v,
      delta: 0,
      avail: 0,
      shift: 0,
      freeSu: (() => {
        const W = ut((() => {
          const V = ut(q.free)(c.root);
          if (V.tag === "Nothing")
            return q.free;
          if (V.tag === "Just")
            return V._1;
          f();
        })())(C.su);
        if (W.tag === "Nothing")
          return !1;
        if (W.tag === "Just")
          return W._1;
        f();
      })(),
      hasEdges: P.hasEdges,
      candCount: (() => {
        if (q.isRoot) {
          if (l === "HRight") {
            const W = ut(q.free)(y);
            if (W.tag === "Nothing")
              return 0;
            if (W.tag === "Just")
              return W._1.length;
            f();
          }
          if (l === "HLeft") {
            const W = ut(q.free)(x);
            if (W.tag === "Nothing")
              return 0;
            if (W.tag === "Just")
              return W._1.length;
          }
          f();
        }
        if (l === "HRight") {
          const W = ut(q.free)(x);
          if (W.tag === "Nothing")
            return 0;
          if (W.tag === "Just")
            return W._1.length;
          f();
        }
        if (l === "HLeft") {
          const W = ut(q.free)(y);
          if (W.tag === "Nothing")
            return 0;
          if (W.tag === "Just")
            return W._1.length;
        }
        f();
      })()
    };
    if (P.edge.tag === "Nothing")
      return { ...C, stack: [...C.stack, q], trace: [...C.trace, D], x: C.x };
    if (P.edge.tag === "Just") {
      const W = P.edge._1.from.node === q.free ? k(P.edge._1.from.node, P.edge._1.to.node) : k(P.edge._1.to.node, P.edge._1.from.node), V = B(P.edge._1, W._1, _(P.edge._1, W._1), C.x) - B(P.edge._1, W._2, _(P.edge._1, W._2), C.x), U = ut(W._1)(c.root), X = (() => {
        if (U.tag === "Nothing")
          return W._1;
        if (U.tag === "Just")
          return U._1;
        f();
      })(), et = { ...D, edgeId: N("Just", P.edge._1.id), delta: V };
      if (V > 0 && V < 1e300) {
        const nt = w((ct) => (dt) => {
          const Ot = ut(dt)(h), bt = (() => {
            if (Ot.tag === "Nothing")
              return -1;
            if (Ot.tag === "Just")
              return Ot._1;
            f();
          })();
          if (bt >= 0 && bt < e.length) {
            const wt = e[bt], pt = ut(dt)(n.nodeIndex), $t = (() => {
              if (pt.tag === "Nothing")
                return -2;
              if (pt.tag === "Just")
                return pt._1 - 1 | 0;
              f();
            })();
            return $t >= 0 && $t < wt.length ? $e(ct)((() => {
              const lt = ut(dt)(C.x), gt = ut(dt)(u), st = ut(wt[$t])(C.x), ft = ut(wt[$t])(u);
              return (() => {
                if (lt.tag === "Nothing")
                  return 0;
                if (lt.tag === "Just")
                  return lt._1;
                f();
              })() + (() => {
                if (gt.tag === "Nothing")
                  return 0;
                if (gt.tag === "Just")
                  return gt._1;
                f();
              })() - ((() => {
                if (st.tag === "Nothing")
                  return 0;
                if (st.tag === "Just")
                  return st._1;
                f();
              })() + (() => {
                if (ft.tag === "Nothing")
                  return 0;
                if (ft.tag === "Just")
                  return ft._1;
                f();
              })() + $(wt[$t]) + m(dt, wt[$t]));
            })()) : ct;
          }
          const Dt = ut(dt)(n.nodeIndex), _t = (() => {
            if (Dt.tag === "Nothing")
              return -2;
            if (Dt.tag === "Just")
              return Dt._1 - 1 | 0;
            f();
          })();
          return _t >= 0 && _t < 0 ? $e(ct)((() => {
            const wt = ut(dt)(C.x), pt = ut(dt)(u), $t = ut([][_t])(C.x), lt = ut([][_t])(u);
            return (() => {
              if (wt.tag === "Nothing")
                return 0;
              if (wt.tag === "Just")
                return wt._1;
              f();
            })() + (() => {
              if (pt.tag === "Nothing")
                return 0;
              if (pt.tag === "Just")
                return pt._1;
              f();
            })() - ((() => {
              if ($t.tag === "Nothing")
                return 0;
              if ($t.tag === "Just")
                return $t._1;
              f();
            })() + (() => {
              if (lt.tag === "Nothing")
                return 0;
              if (lt.tag === "Just")
                return lt._1;
              f();
            })() + $([][_t]) + m(dt, [][_t]));
          })()) : ct;
        })(V)(ti(c)(X)), j = nt > 0 ? -nt : 0, rt = { ...C, x: nt > 0 ? g(X, j, C.x) : C.x, trace: [...C.trace, { ...et, avail: nt, shift: j }] };
        return nt > 0 ? rt : { ...rt, stack: [...rt.stack, q] };
      }
      if (V < 0 && -V < 1e300) {
        const nt = w((ct) => (dt) => {
          const Ot = ut(dt)(h), bt = (() => {
            if (Ot.tag === "Nothing")
              return -1;
            if (Ot.tag === "Just")
              return Ot._1;
            f();
          })();
          if (bt >= 0 && bt < e.length) {
            const wt = e[bt], pt = ut(dt)(n.nodeIndex), $t = (() => {
              if (pt.tag === "Nothing")
                return 0;
              if (pt.tag === "Just")
                return pt._1 + 1 | 0;
              f();
            })();
            return $t >= 0 && $t < wt.length ? $e(ct)((() => {
              const lt = ut(wt[$t])(C.x), gt = ut(wt[$t])(u), st = ut(dt)(C.x), ft = ut(dt)(u);
              return (() => {
                if (lt.tag === "Nothing")
                  return 0;
                if (lt.tag === "Just")
                  return lt._1;
                f();
              })() + (() => {
                if (gt.tag === "Nothing")
                  return 0;
                if (gt.tag === "Just")
                  return gt._1;
                f();
              })() - ((() => {
                if (st.tag === "Nothing")
                  return 0;
                if (st.tag === "Just")
                  return st._1;
                f();
              })() + (() => {
                if (ft.tag === "Nothing")
                  return 0;
                if (ft.tag === "Just")
                  return ft._1;
                f();
              })() + $(dt) + m(dt, wt[$t]));
            })()) : ct;
          }
          const Dt = ut(dt)(n.nodeIndex), _t = (() => {
            if (Dt.tag === "Nothing")
              return 0;
            if (Dt.tag === "Just")
              return Dt._1 + 1 | 0;
            f();
          })();
          return _t >= 0 && _t < 0 ? $e(ct)((() => {
            const wt = ut([][_t])(C.x), pt = ut([][_t])(u), $t = ut(dt)(C.x), lt = ut(dt)(u);
            return (() => {
              if (wt.tag === "Nothing")
                return 0;
              if (wt.tag === "Just")
                return wt._1;
              f();
            })() + (() => {
              if (pt.tag === "Nothing")
                return 0;
              if (pt.tag === "Just")
                return pt._1;
              f();
            })() - ((() => {
              if ($t.tag === "Nothing")
                return 0;
              if ($t.tag === "Just")
                return $t._1;
              f();
            })() + (() => {
              if (lt.tag === "Nothing")
                return 0;
              if (lt.tag === "Just")
                return lt._1;
              f();
            })() + $(dt) + m(dt, [][_t]));
          })()) : ct;
        })(-V)(ti(c)(X)), j = nt > 0 ? nt : 0, rt = { ...C, x: nt > 0 ? g(X, j, C.x) : C.x, trace: [...C.trace, { ...et, avail: nt, shift: j }] };
        return nt > 0 ? rt : { ...rt, stack: [...rt.stack, q] };
      }
      return { ...C, stack: [...C.stack, q], trace: [...C.trace, et], x: C.x };
    }
    f();
  }, Y = w(tt(kv))({
    x: Re(Q((S) => k(
      S,
      (() => {
        const C = ut(S)(c.root), q = (() => {
          if (C.tag === "Nothing")
            return S;
          if (C.tag === "Just")
            return C._1;
          f();
        })(), P = ut(q)(H.x), D = ut((() => {
          const V = ut(q)(H.sink);
          if (V.tag === "Nothing")
            return q;
          if (V.tag === "Just")
            return V._1;
          f();
        })())(F), W = (() => {
          if (P.tag === "Just")
            return P._1;
          if (P.tag === "Nothing")
            return v;
          f();
        })();
        return (() => {
          if (W.tag === "Nothing")
            return 0;
          if (W.tag === "Just")
            return W._1;
          f();
        })() + (() => {
          if (D.tag === "Nothing")
            return 0;
          if (D.tag === "Just")
            return D._1;
          f();
        })();
      })()
    ))(J)),
    su: H.su,
    stack: [],
    trace: []
  })(H.queue), z = w(tt(Lv))({ ...Y, stack: [] })(An(Y.stack));
  return { x: z.x, queue: H.queue, trace: z.trace };
}, Av = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (l) => Cv(t)(n)(e)(r)(o)(i)(s)(u)(c)(a)(l).x, Pv = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = (c, a, l) => {
    const d = ut(a)(e), _ = (() => {
      if (d.tag === "Nothing")
        return 0.5;
      if (d.tag === "Just")
        return d._1._1 / 2;
      f();
    })(), g = c.from.node === a ? c.from.port : c.to.node === a ? c.to.port : v;
    if (g.tag === "Just") {
      const p = ut(a)(n);
      if (p.tag === "Just") {
        const $ = Mt((h) => h.id === g._1)(p._1);
        if ($.tag === "Just") {
          const h = M($._1.offset) * M(4);
          return l === "North" || l === "South" ? h : 0;
        }
        if ($.tag === "Nothing") {
          const h = vo(o)(c.id)(l)(_);
          return l === "North" || l === "South" ? h : 0;
        }
        f();
      }
      if (p.tag === "Nothing") {
        const $ = vo(o)(c.id)(l)(_);
        return l === "North" || l === "South" ? $ : 0;
      }
      f();
    }
    if (g.tag === "Nothing") {
      const p = vo(o)(c.id)(l)(_);
      return l === "North" || l === "South" ? p : 0;
    }
    f();
  }, u = (c) => (a) => (l) => (d) => {
    let _ = c, g = a, p = l, $ = d, h = !0, m;
    for (; h; ) {
      const y = _, x = g, J = p, b = Bt((L) => v, (L) => (A) => N("Just", { head: L, tail: A }), $);
      if (b.tag === "Nothing") {
        h = !1, m = y;
        continue;
      }
      if (b.tag === "Just") {
        const L = b._1.head, A = Mt((O) => O.from.node === J && O.to.node === L || O.from.node === L && O.to.node === J)(r), E = (() => {
          if (A.tag === "Nothing")
            return x + 0;
          if (A.tag === "Just")
            return x + (s(A._1, J, A._1.from.node === J ? Nn : wn) - s(
              A._1,
              L,
              A._1.from.node === L ? Nn : wn
            ));
          f();
        })();
        _ = K(G)(L)(E)(y), g = E, p = L, $ = b._1.tail;
        continue;
      }
      f();
    }
    return m;
  };
  return w((c) => (a) => {
    const l = Bt((g) => v, (g) => (p) => N("Just", { head: g, tail: p }), ti(t)(a)), d = (() => {
      if (l.tag === "Nothing")
        return K(G)(a)(0)(I);
      if (l.tag === "Just")
        return u(K(G)(l._1.head)(0)(I))(0)(l._1.head)(l._1.tail);
      f();
    })(), _ = w((g) => (p) => Oe(g)(-p._2))(0)(zc(d));
    return w((g) => (p) => K(G)(p._1)(p._2 + _)(g))(c)(zc(d));
  })(I)(ko(G.compare)((() => {
    const c = (a, l) => {
      if (a.tag === "Leaf")
        return l;
      if (a.tag === "Node")
        return c(a._5, jt("Cons", a._4, c(a._6, l)));
      f();
    };
    return Gt(tn.foldr, c(t.root, Zt));
  })()));
}, Gv = (t) => (n) => {
  const e = (o, i, s) => En(3)(i) === "$d:" && lg(
    O1,
    (() => {
      const u = ut(i)(t.preds);
      if (u.tag === "Nothing")
        return [];
      if (u.tag === "Just")
        return u._1;
      f();
    })()
  ), r = (o) => (i) => (s) => (u) => (c) => (a) => (l) => {
    let d = o, _ = i, g = u, p = a, $ = l, h = !0, m;
    for (; h; ) {
      const y = d, x = _, J = g, T = p, b = $, L = x.length;
      if (b >= L) {
        h = !1, m = y;
        continue;
      }
      const A = b >= 0 && b < x.length ? N("Just", x[b]) : v, E = (() => {
        if (A.tag === "Nothing")
          return "";
        if (A.tag === "Just")
          return A._1;
        f();
      })(), O = e(t, E);
      if (b === (L - 1 | 0) || O) {
        const H = (() => {
          if (O) {
            const F = ut(E)(t.preds), B = (() => {
              if (F.tag === "Nothing")
                return [];
              if (F.tag === "Just")
                return F._1;
              f();
            })();
            if (0 < B.length) {
              const Z = J - 1 | 0, tt = ut(B[0])(t.nodeIndex);
              if (tt.tag === "Nothing")
                return Z;
              if (tt.tag === "Just")
                return tt._1;
              f();
            }
          }
          return J - 1 | 0;
        })();
        d = w((F) => (B) => {
          if (B >= 0 && B < x.length) {
            const Z = x[B];
            return e(t, Z) ? F : w((tt) => (Y) => {
              const z = ut(Y)(t.nodeIndex), S = (() => {
                if (z.tag === "Nothing")
                  return 0;
                if (z.tag === "Just")
                  return z._1;
                f();
              })();
              return S < T || S > H ? K(G)(Y + "→" + Z)()(tt) : tt;
            })(F)((() => {
              const tt = ut(Z)(t.preds);
              if (tt.tag === "Nothing")
                return [];
              if (tt.tag === "Just")
                return tt._1;
              f();
            })());
          }
          return e(t, "") ? F : w((Z) => (tt) => {
            const Y = ut(tt)(t.nodeIndex), z = (() => {
              if (Y.tag === "Nothing")
                return 0;
              if (Y.tag === "Just")
                return Y._1;
              f();
            })();
            return z < T || z > H ? K(G)(tt + "→")()(Z) : Z;
          })(F)((() => {
            const Z = ut("")(t.preds);
            if (Z.tag === "Nothing")
              return [];
            if (Z.tag === "Just")
              return Z._1;
            f();
          })());
        })(y)(zt(0, b)), _ = x, g = J, p = H, $ = b + 1 | 0;
        continue;
      }
      d = y, _ = x, g = J, p = T, $ = b + 1 | 0;
    }
    return m;
  };
  return n.length < 3 ? I : w((o) => (i) => {
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
  })(I)(zt(1, n.length - 2 | 0));
}, Fv = (t) => (n) => (e) => (r) => (o) => {
  const i = se(n), s = w((u) => (c) => {
    const a = w((l) => (d) => {
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
      const p = Ne(g - 1 | 0, 2), $ = Ne(g, 2);
      return w((h) => (m) => {
        if ((() => {
          const y = ut(d)(h.align);
          if (y.tag === "Nothing")
            return d !== d;
          if (y.tag === "Just")
            return y._1 !== d;
          f();
        })())
          return h;
        if (m >= 0 && m < _.length) {
          const y = ut(_[m])(t.nodeIndex), x = (() => {
            if (y.tag === "Nothing")
              return 0;
            if (y.tag === "Just")
              return y._1;
            f();
          })();
          if (!(B0(_[m] + "→" + d)(e) || B0(d + "→" + _[m])(e)) && (() => {
            if (r === "VDown")
              return h.r < x;
            if (r === "VUp")
              return h.r > x;
            f();
          })()) {
            const J = ut(_[m])(h.root), T = (() => {
              if (J.tag === "Nothing")
                return _[m];
              if (J.tag === "Just")
                return J._1;
              f();
            })();
            return {
              root: K(G)(d)(T)(h.root),
              align: K(G)(_[m])(d)(K(G)(d)(T)(h.align)),
              r: x
            };
          }
        }
        return h;
      })(l)((() => {
        if (r === "VDown")
          return zt(p, $);
        if (r === "VUp")
          return An(zt(p, $));
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
        return An(c);
      f();
    })());
    return { root: a.root, align: a.align };
  })({ root: Re(Q((u) => k(u, u))(i)), align: Re(Q((u) => k(u, u))(i)) })((() => {
    if (o === "HRight")
      return n;
    if (o === "HLeft")
      return An(n);
    f();
  })());
  return { root: s.root, align: s.align };
}, is = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
  const l = Fv(n)(e)(u)(c)(a), d = Pv(l)(o)(r)(i)(s)(a);
  return Dh()((_) => (g) => N(
    "Just",
    (() => {
      const p = ut(_)(d);
      if (p.tag === "Nothing")
        return g + 0;
      if (p.tag === "Just")
        return g + p._1;
      f();
    })()
  ))(Av(t)(n)(e)(r)(o)(i)(s)(d)(l)(c)(a));
}, z0 = (t) => (n) => Rt((e) => (r) => w((o) => (i) => i >= 0 && i < n.length ? i >= 0 && i < t.length ? o + n[i] + t[i] : o + n[i] + 0 : i >= 0 && i < t.length ? o + 1 + t[i] : o + 1)(0)((() => {
  const o = zt(0, n.length - 1 | 0);
  return e < 1 ? [] : Jt(0, e, o);
})()))(n), Iv = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = Jv(0)(n.length - 1 | 0), c = M(t.layerGap), a = s(xh(u, c)), l = Bx(H1(o)(a)(r)(i)(I))(a);
  return Q((d) => {
    const _ = bv(d)(l);
    return _.tag === "Just" && _._1 > 0 ? Oe(c)(2 + M(_._1 - 1 | 0) * 2.5) : c;
  })(zt(0, u - 1 | 0));
}, K1 = (t) => (n) => (e) => (r) => lg(
  (o) => w((i) => (s) => {
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
), Rv = (t) => (n) => (e) => (r) => {
  const o = Ct((i) => (s) => ot.compare(i.w)(s.w))(Q((i) => ({ l: i, w: V1(i) }))(at(
    K1()(n)(e),
    r
  )));
  return 0 < o.length ? N("Just", o[0].l) : v;
}, Bv = (t) => (n) => {
  const e = Re(se(Q(Rt((o) => (i) => k(i, o)))(t))), r = (o) => Ct((i) => (s) => it.compare((() => {
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
          return Yt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(w((i) => (s) => Et(G)(gn)(s.to.node)([s.from.node])(i))(I)(n));
    })(),
    succs: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return I;
        if (i.tag === "Node")
          return Yt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(w((i) => (s) => Et(G)(gn)(s.from.node)([s.to.node])(i))(I)(n));
    })(),
    nodeIndex: e
  };
}, zv = (t) => (n) => {
  const e = Ct((d) => (_) => ot.compare(d.w)(_.w))(Rt((d) => (_) => ({ i: d, l: _, w: V1(_) }))(n)), r = 0 < e.length ? N("Just", e[0]) : v, o = (() => {
    if (r.tag === "Just")
      return r._1.i;
    if (r.tag === "Nothing")
      return 0;
    f();
  })(), i = o >= 0 && o < n.length ? N("Just", n[o]) : v, s = (() => {
    if (i.tag === "Just")
      return ((_) => (g) => {
        let p = _, $ = g, h = !0, m;
        for (; h; ) {
          const y = p, x = $;
          if (x.tag === "Nil") {
            h = !1, m = y;
            continue;
          }
          if (x.tag === "Cons") {
            p = $e(y)(x._1), $ = x._2;
            continue;
          }
          f();
        }
        return m;
      })(999999)((() => {
        const _ = (g, p) => {
          if (g.tag === "Leaf")
            return p;
          if (g.tag === "Node")
            return _(g._5, jt("Cons", g._4, _(g._6, p)));
          f();
        };
        return _(i._1, Zt);
      })());
    if (i.tag === "Nothing")
      return 0;
    f();
  })(), u = (d) => w((_) => (g) => Oe(_)((() => {
    const p = ut(g._1)(t);
    if (p.tag === "Nothing")
      return g._2 + 1;
    if (p.tag === "Just")
      return g._2 + p._1._1;
    f();
  })()))(-999999)(zc(d)), c = o >= 0 && o < n.length ? N("Just", n[o]) : v, a = (() => {
    if (c.tag === "Just")
      return u(c._1);
    if (c.tag === "Nothing")
      return 0;
    f();
  })(), l = pn(
    (d) => (_) => {
      const g = (p) => {
        if (p.tag === "Leaf")
          return I;
        if (p.tag === "Node")
          return Yt("Node", p._1, p._2, p._3, p._4 + _, g(p._5), g(p._6));
        f();
      };
      return g(d);
    },
    n,
    Rt((d) => (_) => ar(d)(2) === 0 ? s - ((p) => ($) => {
      let h = p, m = $, y = !0, x;
      for (; y; ) {
        const J = h, T = m;
        if (T.tag === "Nil") {
          y = !1, x = J;
          continue;
        }
        if (T.tag === "Cons") {
          h = $e(J)(T._1), m = T._2;
          continue;
        }
        f();
      }
      return x;
    })(999999)((() => {
      const p = ($, h) => {
        if ($.tag === "Leaf")
          return h;
        if ($.tag === "Node")
          return p($._5, jt("Cons", $._4, p($._6, h)));
        f();
      };
      return p(_, Zt);
    })()) : a - u(_))(n)
  );
  return Sv(w((d) => (_) => {
    const g = Ct(ot.compare)(yt(ut(_))(l));
    return K(G)(_)(g.length === 4 ? 1 < g.length && 2 < g.length ? (g[1] + g[2]) / 2 : 0 : 0 < g.length ? g[0] : 0)(d);
  })(I)(ko(G.compare)(se(Q((d) => {
    const _ = (g) => {
      if (g.tag === "Leaf")
        return I;
      if (g.tag === "Node")
        return Yt("Node", g._1, g._2, g._3, void 0, _(g._5), _(g._6));
      f();
    };
    return Gt(ae.foldr, _(d));
  })(l)))));
}, Dv = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Bv(n)(o), u = Gv(s)(n), c = { nodeGap: t.nodeGap * 4 | 0 }, a = Wn(
    G.compare,
    Hn,
    Re(Q((g) => k(g, k(1, 1)))(at(
      O1,
      se(n)
    ))),
    (() => {
      const g = (p) => {
        if (p.tag === "Leaf")
          return I;
        if (p.tag === "Node")
          return Yt("Node", p._1, p._2, p._3, k(p._4._1 * M(4), p._4._2), g(p._5), g(p._6));
        f();
      };
      return g(e);
    })()
  ), l = [
    is(c)(s)(n)(a)(r)(o)(i)(u)(G0)(I0),
    is(c)(s)(n)(a)(r)(o)(i)(u)(F0)(I0),
    is(c)(s)(n)(a)(r)(o)(i)(u)(G0)(R0),
    is(c)(s)(n)(a)(r)(o)(i)(u)(F0)(R0)
  ], d = zv(a)(l);
  if (K1()(n)(a)(d))
    return d;
  const _ = Rv()(n)(a)(l);
  if (_.tag === "Just")
    return _._1;
  if (_.tag === "Nothing")
    return l[0];
  f();
}, Qv = (t) => (n) => (e) => (r) => {
  const o = cg(
    v,
    Ml,
    (i) => i.node === n ? N("Just", i.position) : v,
    t
  );
  if (o.tag === "Nothing")
    return t;
  if (o.tag === "Just") {
    const i = o._1;
    return Q((s) => s.node === e ? { ...s, position: k(i._1 + r._1, i._2 + r._2) } : s)(t);
  }
  f();
}, Hv = (t) => (n) => (e) => (r) => {
  const o = at((s) => ie(be)(s.node)(n), t), i = (() => {
    if (e === "Vertical") {
      if (r === "Start")
        return w((s) => (u) => $e(s)(u.position._1))(99999)(o);
      if (r === "End")
        return w((s) => (u) => Oe(s)(u.position._1))(0)(o);
      if (r === "Center") {
        const s = w((u) => (c) => u + c.position._1)(0)(o);
        return o.length === 0 ? 0 : s / M(o.length);
      }
      f();
    }
    if (e === "Horizontal") {
      if (r === "Start")
        return w((s) => (u) => $e(s)(u.position._2))(99999)(o);
      if (r === "End")
        return w((s) => (u) => Oe(s)(u.position._2))(0)(o);
      if (r === "Center") {
        const s = w((u) => (c) => u + c.position._2)(0)(o);
        return o.length === 0 ? 0 : s / M(o.length);
      }
    }
    f();
  })();
  return Q((s) => {
    if (ie(be)(s.node)(n)) {
      if (e === "Vertical")
        return { ...s, position: k(i, s.position._2) };
      if (e === "Horizontal")
        return { ...s, position: k(s.position._1, i) };
      f();
    }
    return s;
  })(t);
}, Wv = (t) => (n) => w((e) => (r) => r.tag === "AlignGroup" ? Hv(e)(r._1.nodes)(r._1.axis)(r._1.alignment) : r.tag === "RelativePosition" ? Qv(e)(r._1.anchor)(r._1.target)(r._1.offset) : e)(n)(t), Ov = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const c = Q((d) => w((_) => (g) => Oe(_)((() => {
    const p = ut(g)(r);
    if (p.tag === "Nothing")
      return 1;
    if (p.tag === "Just")
      return p._1._2;
    f();
  })()))(1)(d))(e), a = Dv(t)(e)(r)(o)(i)(u), l = z0(Iv(t)(e)(r)(o)(i)(s)((d) => {
    const _ = z0(d)(c);
    return se(Rt((g) => (p) => Rt(($) => (h) => ({
      node: h,
      position: k(
        (() => {
          const m = ut(h)(a);
          return (() => {
            if (m.tag === "Nothing")
              return 0;
            if (m.tag === "Just")
              return m._1;
            f();
          })() / M(4);
        })(),
        g >= 0 && g < _.length ? _[g] : 0
      ),
      size: (() => {
        const m = En(3)(h) === "$d:" ? k(0, 1) : k(1, 1), y = ut(h)(r);
        if (y.tag === "Nothing")
          return m;
        if (y.tag === "Just")
          return y._1;
        f();
      })(),
      layer: g,
      order: $
    }))(p))(e));
  }))(c);
  return Wv(n)(se(Rt((d) => (_) => Rt((g) => (p) => ({
    node: p,
    position: k(
      (() => {
        const $ = ut(p)(a);
        return (() => {
          if ($.tag === "Nothing")
            return 0;
          if ($.tag === "Just")
            return $._1;
          f();
        })() / M(4);
      })(),
      d >= 0 && d < l.length ? l[d] : 0
    ),
    size: (() => {
      const $ = En(3)(p) === "$d:" ? k(0, 1) : k(1, 1), h = ut(p)(r);
      if (h.tag === "Nothing")
        return $;
      if (h.tag === "Just")
        return h._1;
      f();
    })(),
    layer: d,
    order: g
  }))(_))(e)));
}, lc = /* @__PURE__ */ Pa($s)(/* @__PURE__ */ eo(32)), D0 = /* @__PURE__ */ Pa($s)(/* @__PURE__ */ eo(31)), pi = /* @__PURE__ */ (() => {
  const t = Ep("25214903917");
  if (t.tag === "Nothing")
    return kg;
  if (t.tag === "Just")
    return t._1;
  f();
})(), mi = /* @__PURE__ */ Jc(/* @__PURE__ */ Pa($s)(/* @__PURE__ */ eo(48)))($s), qv = (t) => {
  const n = Sp(t);
  return ci(Lg((() => {
    if (n.tag === "Nothing")
      return kg;
    if (n.tag === "Just")
      return n._1;
    f();
  })())(pi))(mi);
}, Dc = /* @__PURE__ */ eo(11), Is = (t) => (n) => {
  const e = ci(fs(ls(n)(pi))(Dc))(mi);
  return k(
    (() => {
      const r = _g(Jp(bc(e)(eo(48 - t | 0))));
      if (r.tag === "Nothing")
        return 0;
      if (r.tag === "Just")
        return r._1;
      f();
    })(),
    e
  );
}, Xv = (t) => {
  const n = Is(26)(t), e = Is(27)(n._2);
  return k((M(n._1) * Eo(2)(27) + M(e._1)) / Eo(2)(53), e._2);
}, Yv = (t) => (n) => {
  const e = w((r) => (o) => {
    const i = Xv(r.finalR);
    return { rs: [...r.rs, i._1], finalR: i._2 };
  })({ rs: [], finalR: t })(n);
  return k(
    Q((r) => r.x)(Ct((r) => (o) => ot.compare(r.k)(o.k))(pn((r) => (o) => ({ x: r, k: o }), n, e.rs))),
    e.finalR
  );
}, Uv = (t) => {
  const n = ci(fs(ls(t)(pi))(Dc))(mi), e = ci(fs(ls(n)(pi))(Dc))(mi);
  return k(
    fs(ls((() => {
      const r = bc(n)(eo(16));
      return Kf.compare(r)(D0) !== "LT" ? Jc(r)(lc) : r;
    })())(lc))((() => {
      const r = bc(e)(eo(16));
      return Kf.compare(r)(D0) !== "LT" ? Jc(r)(lc) : r;
    })()),
    e
  );
}, $i = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Rs = (t) => (e) => {
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
}, ef = /* @__PURE__ */ cn(G)(qt), $o = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Bs = /* @__PURE__ */ cn(G)(qt), Vv = /* @__PURE__ */ ou(Ro), Kv = /* @__PURE__ */ w(no)(0), Mv = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Q0 = (t) => (e) => {
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
}, jv = (t) => (n) => (e) => {
  if (t >= 0 && t < e.length) {
    const r = e[t];
    if (n >= 0 && n < e.length) {
      const o = Er(Xt, v, t, e[n], e);
      if (o.tag === "Just")
        return Er(Xt, v, n, r, o._1);
      if (o.tag === "Nothing")
        return v;
      f();
    }
  }
  return v;
}, Zv = (t) => (n) => (e) => (r) => (o) => ef(w((i) => (s) => {
  const u = Ct((c) => (a) => it.compare((() => {
    const l = $i(c.id)(o);
    if (l.tag === "Nothing")
      return 1e6;
    if (l.tag === "Just")
      return l._1;
    f();
  })())((() => {
    const l = $i(a.id)(o);
    if (l.tag === "Nothing")
      return 1e6;
    if (l.tag === "Just")
      return l._1;
    f();
  })()))(at((c) => Rs(c.to.node)(e), at((c) => c.from.node === s, r)));
  return {
    ranks: [...i.ranks, ...Rt((c) => (a) => k(a.id, M((i.rankSum + c | 0) + 1 | 0)))(u)],
    rankSum: i.rankSum + u.length | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), tw = (t) => (n) => (e) => (r) => (o) => ef(w((i) => (s) => {
  const u = Ct((a) => (l) => {
    const d = it.compare((() => {
      const _ = $o(l.from.node)(e);
      if (_.tag === "Nothing")
        return -1;
      if (_.tag === "Just")
        return _._1;
      f();
    })())((() => {
      const _ = $o(a.from.node)(e);
      if (_.tag === "Nothing")
        return -1;
      if (_.tag === "Just")
        return _._1;
      f();
    })());
    return d === "EQ" ? it.compare((() => {
      const _ = $i(a.id)(o);
      if (_.tag === "Nothing")
        return 1e6;
      if (_.tag === "Just")
        return _._1;
      f();
    })())((() => {
      const _ = $i(l.id)(o);
      if (_.tag === "Nothing")
        return 1e6;
      if (_.tag === "Just")
        return _._1;
      f();
    })()) : d;
  })(at((a) => Rs(a.from.node)(e), at((a) => a.to.node === s, r))), c = u.length;
  return {
    ranks: [...i.ranks, ...Rt((a) => (l) => k(l.id, M((i.rankSum + c | 0) - a | 0)))(u)],
    rankSum: i.rankSum + c | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), Qc = (t) => (n) => (e) => {
  const r = Bs(Rt((u) => (c) => k(c, u))(t)), o = Bs(Rt((u) => (c) => k(c, u))(n)), i = yt((u) => {
    const c = $o(u.from.node)(r), a = $o(u.to.node)(o);
    if (c.tag === "Just" && a.tag === "Just")
      return N("Just", k(c._1, a._1));
    const l = $o(u.from.node)(o), d = $o(u.to.node)(r);
    return l.tag === "Just" && d.tag === "Just" ? N("Just", k(d._1, l._1)) : v;
  })(e), s = i.length;
  return w((u) => (c) => w((a) => (l) => c >= 0 && c < i.length && l >= 0 && l < i.length && ((i[c]._1 - i[l]._1 | 0) * (i[c]._2 - i[l]._2 | 0) | 0) < 0 ? a + 1 | 0 : a)(u)(zt(c + 1 | 0, s - 1 | 0)))(0)(zt(0, s - 2 | 0));
}, nw = (t) => (n) => (e) => (r) => {
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
          const $ = _[g], h = _[p];
          if (ue((J) => J.before === $ && J.after === h, r)) {
            c = _, a = g + 1 | 0;
            continue;
          }
          const m = Er(Xt, v, g, h, _), y = (() => {
            if (m.tag === "Just")
              return Er(Xt, v, g + 1 | 0, $, m._1);
            if (m.tag === "Nothing")
              return v;
            f();
          })(), x = (() => {
            if (y.tag === "Nothing")
              return _;
            if (y.tag === "Just")
              return y._1;
            f();
          })();
          if (Qc(n)(x)(e) < Qc(n)(_)(e)) {
            c = x, a = g + 1 | 0;
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
      if (Vv(d)(l)) {
        c = !1, a = l;
        continue;
      }
      u = d;
    }
    return a;
  })(t);
}, ss = (t) => (n) => w((e) => (r) => {
  if (r >= 0 && r < t.length) {
    const o = t[r], i = r + 1 | 0;
    if (i >= 0 && i < t.length)
      return e + Qc(o)(t[i])(n) | 0;
  }
  return e;
})(0)(zt(0, t.length - 2 | 0)), ew = /* @__PURE__ */ (() => {
  const t = (n) => {
    if (n.length < 7) {
      const s = (u) => (c) => {
        let a = u, l = c, d = !0, _;
        for (; d; ) {
          const g = a, p = l, $ = p - 1 | 0;
          if ($ >= 0 && $ < g.length) {
            if (p >= 0 && p < g.length && p > 0 && g[$].key > g[p].key) {
              const h = jv(p - 1 | 0)(p)(g);
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
      return w((u) => (c) => s(u)(c))(n)(zt(1, n.length - 1 | 0));
    }
    const e = Ne(n.length, 2), r = t(Jt(0, e, n)), o = t(Jt(e, n.length, n));
    return ((s) => (u) => (c) => {
      let a = s, l = u, d = c, _ = !0, g;
      for (; _; ) {
        const p = a, $ = l, h = d;
        if ($ >= 0 && $ < r.length) {
          if (h >= 0 && h < o.length) {
            if (r[$].key > o[h].key) {
              a = Pt(p)(o[h]), l = $, d = h + 1 | 0;
              continue;
            }
            a = Pt(p)(r[$]), l = $ + 1 | 0, d = h;
            continue;
          }
          _ = !1, g = [...p, ...$ < 1 ? r : Jt($, r.length, r)];
          continue;
        }
        _ = !1, g = [...p, ...h < 1 ? o : Jt(h, o.length, o)];
      }
      return g;
    })([])(0)(0);
  };
  return t;
})(), rw = (t) => (n) => (e) => {
  const r = yt((a) => a.tag === "OrderConstraint" ? N("Just", { before: a._1.before, after: a._1.after }) : v)(t.constraints), o = (a) => w((l) => (d) => {
    const _ = d.after, g = d.before, p = to(Xt, v, (h) => h === g, l), $ = to(Xt, v, (h) => h === _, l);
    if (p.tag === "Just" && $.tag === "Just" && p._1 > $._1) {
      const h = fg(Xt, v, p._1, l), m = (() => {
        if (h.tag === "Nothing")
          return l;
        if (h.tag === "Just")
          return h._1;
        f();
      })(), y = ag(Xt, v, $._1, g, m);
      if (y.tag === "Nothing")
        return m;
      if (y.tag === "Just")
        return y._1;
      f();
    }
    return l;
  })(a)(r), i = ef(Rt((a) => (l) => k(l.id, a))(e)), s = (a, l, d) => {
    const _ = a.length;
    return w((g) => (p) => {
      const $ = l ? p - 1 | 0 : p + 1 | 0, h = $ >= 0 && $ < g._1.length ? N("Just", g._1[$]) : v;
      if (h.tag === "Just") {
        const m = p >= 0 && p < g._1.length ? N("Just", g._1[p]) : v;
        if (m.tag === "Just") {
          const y = Bs(Rt((L) => (A) => k(A, L))(h._1)), x = Bs(Rt((L) => (A) => k(A, L))(m._1)), J = l ? Zv(h._1)(y)(x)(e)(i) : tw(h._1)(y)(x)(e)(i), T = w((L) => (A) => {
            const E = yt((H) => $i(H.id)(J))(at(l ? (H) => H.to.node === A._2 && Rs(H.from.node)(y) : (H) => H.from.node === A._2 && Rs(H.to.node)(y), e));
            if (E.length === 0)
              return { ...L, items: [...L.items, { n: A._2, key: v, origIdx: A._1 }] };
            const O = Is(24)(L.r);
            return {
              items: [
                ...L.items,
                {
                  n: A._2,
                  key: N("Just", (Kv(E) + (M(O._1) * 4172325152040912e-24 - 0.03500000014901161)) / M(E.length)),
                  origIdx: A._1
                }
              ],
              r: O._2
            };
          })({ items: [], r: g._2 })(Rt(In)(m._1)), b = Er(
            Xt,
            v,
            p,
            nw(o(Q((L) => L.n)(ew((() => {
              const L = T.items, A = (O) => (H) => {
                let F = O, B = H, Z = !0, tt;
                for (; Z; ) {
                  const Y = F, z = B;
                  if (Y >= 0 && Y < L.length) {
                    if (L[Y].key.tag === "Just") {
                      Z = !1, tt = L[Y].key._1;
                      continue;
                    }
                    if (L[Y].key.tag === "Nothing") {
                      F = Y + 1 | 0, B = z;
                      continue;
                    }
                    f();
                  }
                  Z = !1, tt = z;
                }
                return tt;
              };
              return ((O) => (H) => (F) => {
                let B = O, Z = H, tt = F, Y = !0, z;
                for (; Y; ) {
                  const S = B, C = Z, q = tt;
                  if (S >= 0 && S < L.length) {
                    if (L[S].key.tag === "Just") {
                      B = S + 1 | 0, Z = L[S].key._1, tt = [...q, { n: L[S].n, key: L[S].key._1, origIdx: L[S].origIdx }];
                      continue;
                    }
                    if (L[S].key.tag === "Nothing") {
                      const P = (C + A(S + 1 | 0)(C + 1)) / 2;
                      B = S + 1 | 0, Z = P, tt = [...q, { n: L[S].n, key: P, origIdx: L[S].origIdx }];
                      continue;
                    }
                    f();
                  }
                  Y = !1, z = q;
                }
                return z;
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
        if (m.tag === "Nothing")
          return k(g._1, g._2);
        f();
      }
      if (h.tag === "Nothing")
        return k(g._1, g._2);
      f();
    })(k(a, d))(l ? zt(1, _ - 1 | 0) : An(zt(0, _ - 2 | 0)));
  }, u = w((a) => (l) => K(G)(l.from.node)()(K(G)(l.to.node)()(a)))(I)(e), c = w((a) => (l) => {
    if (a.result.crossings === 0)
      return a;
    const d = (y) => (x) => (J) => (T) => {
      let b = y, L = x, A = J, E = T, O = !0, H;
      for (; O; ) {
        const F = b, B = L, Z = A, tt = E;
        if (Z === 0) {
          O = !1, H = { layout: F, crossings: 0, random: tt };
          continue;
        }
        const Y = s(F, B, tt), z = ss(Y._1)(e);
        if (z < Z) {
          b = Y._1, L = !B, A = z, E = Y._2;
          continue;
        }
        O = !1, H = { layout: F, crossings: Z, random: Y._2 };
      }
      return H;
    }, _ = Is(1)(a.result.random), g = _._1 !== 0, p = t.modelOrder.tag === "Leaf", $ = (a.firstTry || a.secondTry) && !p ? a.firstTry : g, h = (() => {
      if (!p) {
        const T = s(n, $, _._2);
        return d(T._1)(!$)(ss(T._1)(e))(T._2);
      }
      const y = $ ? 0 : Mv(0)(n.length - 1 | 0), x = y >= 0 && y < n.length ? N("Just", n[y]) : v;
      if (x.tag === "Just" && x._1.length > 1) {
        const T = at((b) => Q0(b)(u), x._1);
        if (T.length > 1) {
          const b = Yv(_._2)(T), L = b._1, A = Er(
            Xt,
            v,
            y,
            o(w((E) => (O) => Q0(O)(u) ? E.idx >= 0 && E.idx < L.length ? { idx: E.idx + 1 | 0, result: [...E.result, L[E.idx]] } : { idx: E.idx, result: [...E.result, O] } : { idx: E.idx, result: [...E.result, O] })({ idx: 0, result: [] })(x._1).result),
            n
          );
          if (A.tag === "Just") {
            const E = s(A._1, $, b._2);
            return d(E._1)(!$)(ss(E._1)(e))(E._2);
          }
        }
      }
      const J = s(n, $, _._2);
      return d(J._1)(!$)(ss(J._1)(e))(J._2);
    })(), m = a.secondTry ? !1 : a.secondTry;
    return a.firstTry ? {
      result: h.crossings < a.result.crossings ? { layout: h.layout, crossings: h.crossings, random: h.random } : { ...a.result, random: h.random },
      firstTry: !1,
      secondTry: !0
    } : {
      result: h.crossings < a.result.crossings ? { layout: h.layout, crossings: h.crossings, random: h.random } : { ...a.result, random: h.random },
      firstTry: a.firstTry,
      secondTry: m
    };
  })({
    result: {
      layout: n,
      crossings: 1e9,
      random: ci(Lg(Uv(qv(1))._1)(pi))(mi)
    },
    firstTry: t.modelOrder.tag !== "Leaf",
    secondTry: !1
  })(zt(1, t.iterations)).result;
  return n.length <= 0 || t.iterations <= 0 ? n : c.layout;
}, ow = (t) => t, H0 = (t) => (e) => {
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
}, ne = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Go = (t) => (e) => {
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
}, yi = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = G.compare(n._1)(e._1);
      return r === "LT" ? Sn : r === "GT" ? Cn : G.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), iw = /* @__PURE__ */ cn(G)(qt), sw = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = yi.compare(t)(s._3);
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
}, uw = /* @__PURE__ */ ow("Greedy"), gc = (t) => (n) => (e) => w((r) => (o) => {
  if (o.from.node === o.to.node)
    return r;
  if (o.from.node === n && !H0(o.to.node)(r.marks)) {
    const i = ne(o.to.node)(r.inDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = K(G)(o.to.node)(s)(r.inDeg);
    return (() => {
      const c = ne(o.to.node)(r.outDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        f();
      })() && !ie(be)(o.to.node)(r.sources);
    })() ? { ...r, inDeg: u, sources: [...r.sources, o.to.node] } : { ...r, inDeg: u };
  }
  if (o.to.node === n && !H0(o.from.node)(r.marks)) {
    const i = ne(o.from.node)(r.outDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = K(G)(o.from.node)(s)(r.outDeg);
    return (() => {
      const c = ne(o.from.node)(r.inDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        f();
      })() && !ie(be)(o.from.node)(r.sinks);
    })() ? { ...r, outDeg: u, sinks: [...r.sinks, o.from.node] } : { ...r, outDeg: u };
  }
  return r;
})({ ...e, remaining: at((r) => r !== n, e.remaining) })(t), cw = /* @__PURE__ */ w((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return K(G)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return K(G)(n._1.node)(0)(t);
    if (n._1.pin.tag === "LastLayer")
      return K(G)(n._1.node)(99999)(t);
  }
  return t;
})(I), M1 = (t) => (n) => (e) => {
  const r = ne(n)(t), o = ne(e)(t);
  return r.tag === "Just" && o.tag === "Just" && r._1 > o._1;
}, j1 = (t) => (n) => (e) => (r) => {
  if (Go(e)(r.visited) || Go(e)(r.visiting))
    return r;
  const o = w(aw(t)(n)(e))({ ...r, visiting: K(G)(e)()(r.visiting) })((() => {
    const i = ne(e)(n);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just")
      return i._1;
    f();
  })());
  return {
    ...o,
    visiting: si(G)(e)(o.visiting),
    visited: K(G)(e)()(o.visited)
  };
}, aw = (t) => (n) => (e) => (r) => (o) => M1(t)(e)(o) ? { ...r, backEdges: K(yi)(k(e, o))()(r.backEdges) } : Go(o)(r.visiting) ? { ...r, backEdges: K(yi)(k(e, o))()(r.backEdges) } : Go(o)(r.visited) ? r : j1(t)(n)(o)(r), fw = (t) => (n) => (e) => {
  const r = (_) => {
    let g = _, p = !0, $;
    for (; p; ) {
      const h = g, m = Bt((y) => v, (y) => (x) => N("Just", { head: y, tail: x }), h.sinks);
      if (m.tag === "Just") {
        g = gc(e)(m._1.head)({
          ...h,
          sinks: m._1.tail,
          marks: K(G)(m._1.head)(h.nextRight)(h.marks),
          nextRight: h.nextRight - 1 | 0
        });
        continue;
      }
      if (m.tag === "Nothing") {
        const y = Bt((x) => v, (x) => (J) => N("Just", { head: x, tail: J }), h.sources);
        if (y.tag === "Just") {
          g = gc(e)(y._1.head)({
            ...h,
            sources: y._1.tail,
            marks: K(G)(y._1.head)(h.nextLeft)(h.marks),
            nextLeft: h.nextLeft + 1 | 0
          });
          continue;
        }
        if (y.tag === "Nothing") {
          const x = (T) => {
            const b = ne(T)(h.outDeg), L = ne(T)(h.inDeg);
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
          }, J = Ct((T) => (b) => {
            const L = it.compare(x(b))(x(T));
            return L === "EQ" ? it.compare((() => {
              const A = ne(T)(n);
              if (A.tag === "Nothing")
                return 1e6;
              if (A.tag === "Just")
                return A._1;
              f();
            })())((() => {
              const A = ne(b)(n);
              if (A.tag === "Nothing")
                return 1e6;
              if (A.tag === "Just")
                return A._1;
              f();
            })()) : L;
          })(h.remaining);
          if (0 < J.length) {
            const T = J[0];
            g = gc(e)(T)({
              ...h,
              remaining: at((b) => b !== T, h.remaining),
              marks: K(G)(T)(h.nextLeft)(h.marks),
              nextLeft: h.nextLeft + 1 | 0
            });
            continue;
          }
          p = !1, $ = h;
          continue;
        }
      }
      f();
    }
    return $;
  }, o = ko(G.compare)([...Q((_) => _.from.node)(e), ...Q((_) => _.to.node)(e)]), i = at((_) => _.from.node !== _.to.node, e), s = w((_) => (g) => Et(G)(_n)(g.to.node)(1)(_))(I)(i), u = w((_) => (g) => Et(G)(_n)(g.from.node)(1)(_))(I)(i), c = at(
    (_) => {
      const g = ne(_)(s);
      if (g.tag === "Nothing")
        return !0;
      if (g.tag === "Just")
        return g._1 === 0;
      f();
    },
    o
  ), a = at(
    (_) => {
      const g = ne(_)(u);
      if (g.tag === "Nothing")
        return !0;
      if (g.tag === "Just")
        return g._1 === 0;
      f();
    },
    o
  ), l = o.length + 1 | 0, d = w((_) => (g) => {
    const p = ne(g)(_);
    return p.tag === "Just" && p._1 < 0 ? K(G)(g)(p._1 + l | 0)(_) : _;
  })(r({
    remaining: at((_) => !ie(be)(_)(c) && !ie(be)(_)(a), o),
    marks: I,
    inDeg: s,
    outDeg: u,
    sources: c,
    sinks: a,
    nextLeft: 1,
    nextRight: -1
  }).marks)(o);
  return w((_) => (g) => {
    if (g.from.node === g.to.node)
      return _;
    if (M1(t)(g.from.node)(g.to.node))
      return K(yi)(k(g.from.node, g.to.node))()(_);
    const p = ne(g.from.node)(d), $ = ne(g.to.node)(d);
    return p.tag === "Just" && $.tag === "Just" && p._1 > $._1 ? K(yi)(k(g.from.node, g.to.node))()(_) : _;
  })(I)(e);
}, lw = /* @__PURE__ */ w((t) => (n) => Et(G)(gn)(n.from.node)([n.to.node])(t))(I), gw = (t) => (n) => {
  const e = lw(n), r = ko(G.compare)([...Q((i) => i.from.node)(n), ...Q((i) => i.to.node)(n)]), o = w((i) => (s) => K(G)(s.to.node)()(i))(I)(n);
  return w((i) => (s) => j1(t)(e)(s)(i))({
    visiting: I,
    visited: I,
    backEdges: I
  })([...at((i) => !Go(i)(o), r), ...at((i) => Go(i)(o), r)]).backEdges;
}, dw = (t) => (n) => (e) => (r) => {
  const o = iw(Rt((u) => (c) => k(c, u))(n)), i = cw(e), s = (() => {
    if (t === "DepthFirst")
      return gw(i)(r);
    if (t === "Greedy")
      return fw(i)(o)(r);
    f();
  })();
  return {
    edges: Q((u) => sw(k(u.from.node, u.to.node))(s) ? { ...u, from: u.to, to: u.from } : u)(r),
    reversedEdges: s
  };
}, Z1 = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, _w = /* @__PURE__ */ w((t) => (n) => K(G)(n)()(t))(I), zs = (t) => (e) => {
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
}, hw = /* @__PURE__ */ A1(G), Ie = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, W0 = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, dc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, pw = /* @__PURE__ */ cn(it)(qt), mw = (t) => (n) => Wn(G.compare, Hn, t, n), td = /* @__PURE__ */ Rt((t) => (n) => ({ src: n.src, tgt: n.tgt, delta: 1, weight: 1, eid: t })), $w = (t) => w((n) => (e) => ({
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
          s = Z1(l)(d._1), u = d._2;
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
          return o(i._5, jt("Cons", i._4, o(i._6, s)));
        f();
      };
      return o(e, Zt);
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
          return Yt("Node", o._1, o._2, o._3, o._4 + n.base | 0, r(o._5), r(o._6));
        f();
      };
      return r(e);
    })()
  ]
}))({ base: 0, result: [] })(t).result, yw = (t) => (n) => {
  const e = _w(t);
  return hw(t)(td(at((r) => zs(r.src)(e) && zs(r.tgt)(e), n)));
}, xw = (t) => (n) => {
  const e = w((o) => (i) => Et(G)(gn)(i.tgt)([i.src])(Et(G)(gn)(i.src)([
    i.tgt
  ])(o)))(I)(n), r = (o) => (i) => (s) => {
    let u = o, c = i, a = s, l = !0, d;
    for (; l; ) {
      const _ = u, g = c, p = a, $ = Bt((h) => v, (h) => (m) => N("Just", { head: h, tail: m }), _);
      if ($.tag === "Nothing") {
        l = !1, d = { nodes: p };
        continue;
      }
      if ($.tag === "Just") {
        if (zs($._1.head)(g)) {
          u = $._1.tail, c = g, a = p;
          continue;
        }
        u = [
          ...$._1.tail,
          ...(() => {
            const h = Ie($._1.head)(e);
            if (h.tag === "Nothing")
              return [];
            if (h.tag === "Just")
              return h._1;
            f();
          })()
        ], c = K(G)($._1.head)()(g), a = [...p, $._1.head];
        continue;
      }
      f();
    }
    return d;
  };
  return w((o) => (i) => {
    if (zs(i)(o.visited))
      return o;
    const s = r([i])(o.visited)([]);
    return {
      ...o,
      visited: w((u) => (c) => K(G)(c)()(u))(o.visited)(s.nodes),
      components: [...o.components, s.nodes]
    };
  })({ visited: I, components: [] })(t).components;
}, vw = (t) => (n) => (e) => {
  const r = w((i) => (s) => Et(G)(_n)(s.tgt)(1)(i))(I)(n), o = w((i) => (s) => Et(G)(_n)(s.src)(1)(i))(I)(n);
  return w((i) => (s) => {
    const u = Ie(s)(r), c = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      f();
    })();
    if ((() => {
      const y = Ie(s)(o);
      return (() => {
        if (y.tag === "Nothing")
          return c !== 0;
        if (y.tag === "Just")
          return c !== y._1;
        f();
      })() || c === 0;
    })())
      return i;
    const a = Ie(s)(i.layers), l = (() => {
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      f();
    })(), d = i.layers, _ = w((y) => (x) => x.tgt === s ? {
      ...y,
      mIn: W0(y.mIn)((() => {
        const J = Ie(s)(d), T = Ie(x.src)(d);
        return (() => {
          if (J.tag === "Nothing")
            return 0;
          if (J.tag === "Just")
            return J._1;
          f();
        })() - (() => {
          if (T.tag === "Nothing")
            return 0;
          if (T.tag === "Just")
            return T._1;
          f();
        })() | 0;
      })())
    } : x.src === s ? {
      ...y,
      mOut: W0(y.mOut)((() => {
        const J = Ie(x.tgt)(d), T = Ie(s)(d);
        return (() => {
          if (J.tag === "Nothing")
            return 0;
          if (J.tag === "Just")
            return J._1;
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
    const $ = (l - g | 0) + 1 | 0, h = (l + p | 0) - 1 | 0;
    if (h < $)
      return i;
    const m = w((y) => (x) => {
      const J = dc(x)(i.filling), T = (() => {
        if (J.tag === "Nothing")
          return 0;
        if (J.tag === "Just")
          return J._1;
        f();
      })();
      return T < y.bestFill ? { best: x, bestFill: T } : y;
    })({
      best: l,
      bestFill: (() => {
        const y = dc(l)(i.filling);
        if (y.tag === "Nothing")
          return 0;
        if (y.tag === "Just")
          return y._1;
        f();
      })()
    })(zt($, h));
    return m.best === l ? i : {
      layers: K(G)(s)(m.best)(i.layers),
      filling: K(it)(l)((() => {
        const y = dc(l)(i.filling);
        if (y.tag === "Nothing")
          return -1;
        if (y.tag === "Just")
          return y._1 - 1 | 0;
        f();
      })())(K(it)(m.best)(m.bestFill + 1 | 0)(i.filling))
    };
  })({
    layers: e,
    filling: pw(Q((i) => k(
      i,
      w((s) => (u) => (() => {
        const c = Ie(u)(e);
        return c.tag === "Nothing" ? !1 : c.tag === "Just" && c._1 === i;
      })() ? s + 1 | 0 : s)(0)(t)
    ))(zt(
      0,
      w((i) => (s) => Z1(i)((() => {
        const u = Ie(s)(e);
        if (u.tag === "Nothing")
          return 0;
        if (u.tag === "Just")
          return u._1;
        f();
      })()))(0)(t)
    )))
  })(t).layers;
}, ww = (t) => (n) => vw(t)(td(n))(w(mw)(I)($w(Q((e) => yw(e)(n))(xw(t)(n))))), Nw = (t) => t, Ur = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ds = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, nd = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Ve);
  return (n) => t(ge("IterNode", n, Ue));
})(), Tw = /* @__PURE__ */ Nw("NetworkSimplex"), Jw = (t) => (n) => w((e) => (r) => {
  const o = w(Ds)(0)(yt((i) => Ur(i)(e))(r));
  return w((i) => (s) => K(G)(s)(o)(i))(e)(r);
})(n)(t), bw = (t) => (n) => ({
  layers: Q((e) => at(
    (r) => {
      const o = Ur(r)(n);
      return o.tag === "Nothing" ? !1 : o.tag === "Just" && o._1 === e;
    },
    t
  ))(zt(
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
          i = Ds(a)(l._1), s = l._2;
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
          return r(o._5, jt("Cons", o._4, r(o._6, i)));
        f();
      };
      return r(n, Zt);
    })())
  )),
  nodeLayer: n
}), kw = (t) => (n) => (e) => {
  const r = w((o) => (i) => K(G)(i)(!0)(o))(I)(n);
  return w((o) => (i) => K(G)(i._1)(i._2)(o))(ww(n)(yt((o) => o.from.node === o.to.node || (() => {
    const i = Ur(o.from.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() || (() => {
    const i = Ur(o.to.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() ? v : N("Just", { src: o.from.node, tgt: o.to.node }))(t)))(nd(e));
}, Lw = (t) => (n) => (e) => (r) => {
  const o = (c) => (a) => {
    const l = Ur(a)(c);
    if (l.tag === "Just")
      return c;
    if (l.tag === "Nothing") {
      const d = at(
        (g) => g !== a,
        (() => {
          const g = Ur(a)(t);
          if (g.tag === "Nothing")
            return [];
          if (g.tag === "Just")
            return g._1;
          f();
        })()
      ), _ = w(o)(c)(d);
      return K(G)(a)(1 + w(Ds)(0)(yt((g) => Ur(g)(_))(d)) | 0)(_);
    }
    f();
  }, i = w(o)(I)(e), u = ((c) => (a) => {
    let l = c, d = a, _ = !0, g;
    for (; _; ) {
      const p = l, $ = d;
      if ($.tag === "Nil") {
        _ = !1, g = p;
        continue;
      }
      if ($.tag === "Cons") {
        l = Ds(p)($._1), d = $._2;
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
        return c(a._5, jt("Cons", a._4, c(a._6, l)));
      f();
    };
    return c(i, Zt);
  })());
  return w((c) => (a) => K(G)(a._1)(a._2)(c))((() => {
    const c = (a) => {
      if (a.tag === "Leaf")
        return I;
      if (a.tag === "Node")
        return Yt("Node", a._1, a._2, a._3, u - a._4 | 0, c(a._5), c(a._6));
      f();
    };
    return c(i);
  })())(nd(r));
}, Ew = /* @__PURE__ */ w((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return K(G)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return K(G)(n._1.node)(0)(t);
  }
  return t;
})(I), Sw = /* @__PURE__ */ w((t) => (n) => Et(G)(gn)(n.to.node)([n.from.node])(t))(I), Cw = /* @__PURE__ */ w((t) => (n) => Et(G)(gn)(n.from.node)([n.to.node])(t))(I), Aw = (t) => (n) => (e) => (r) => {
  const o = Cw(e), i = Sw(e), s = Ew(n);
  return bw(r)(Jw(yt((u) => u.tag === "SameLayer" ? N("Just", u._1.nodes) : v)(n))((() => {
    if (t === "LongestPath")
      return Lw(o)(i)(r)(s);
    if (t === "NetworkSimplex")
      return kw(e)(r)(s);
    f();
  })()));
}, Pw = /* @__PURE__ */ cn(G)(qt), Gw = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, O0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, q0 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, xi = /* @__PURE__ */ cn(G)(qt), Fw = /* @__PURE__ */ cn(G)(qt), X0 = /* @__PURE__ */ (() => {
  const t = Q((n) => ({ start: n.end, end: n.start, direction: n.direction }));
  return (n) => An(t(n));
})(), Iw = (t) => (n) => (e) => (r) => {
  const o = Pw(Q((s) => k(s.edge, s))(r)), i = (s) => 0 < s.nodes.length && (() => {
    const u = Gw(s.edgeId)(e);
    return u.tag === "Just" && s.nodes[0] !== u._1._1;
  })();
  return Q((s) => {
    if (s.nodes.length <= 2) {
      const l = O0(s.edgeId)(o);
      if (l.tag === "Just") {
        const d = i(s), _ = hi(_i(d ? X0(l._1.segments) : l._1.segments));
        return { ...l._1, edge: s.edgeId, segments: _, bends: pn((g) => (p) => g.end, _, Jt(1, _.length, _)), reversed: d };
      }
      if (l.tag === "Nothing")
        return { edge: s.edgeId, segments: [], bends: [], bendType: [], jumps: [], reversed: !1 };
      f();
    }
    const u = xt(yt((l) => O0(l)(o))(pn(
      (l) => (d) => s.edgeId + ":" + l + "->" + d,
      s.nodes,
      Jt(1, s.nodes.length, s.nodes)
    )))((l) => l.segments), c = i(s), a = hi(_i(c ? X0(u) : u));
    return {
      edge: s.edgeId,
      segments: a,
      bends: pn((l) => (d) => l.end, a, Jt(1, a.length, a)),
      bendType: [],
      jumps: [],
      reversed: c
    };
  })(t);
}, Rw = { layers: [], edges: [], chains: [] }, Bw = {
  nodeGap: 3,
  layerGap: 2,
  iterations: 8,
  layerer: Tw,
  cycleBreaker: uw,
  compactPostRouting: !0,
  compactionSpacings: Sx
}, zw = (t) => ({
  pos: k(0, 0),
  size: k(
    w((n) => (e) => q0(n)(e.position._1 + e.size._1))(0)(t),
    w((n) => (e) => q0(n)(e.position._2 + e.size._2))(0)(t)
  )
}), Dw = (t) => (n) => (e) => {
  const r = xi(Q((a) => k(a.id, a.ports))(n.nodes)), o = at((a) => En(3)(a.node) !== "$d:", e.placements), i = Iw(e.withDummies.chains)(e.acyclic.reversedEdges)(Fw(Q((a) => k(
    a.id,
    k(a.from.node, a.to.node)
  ))(n.edges)))(lv(e.withDummies.edges)(e.placements)(r)(e.withDummies.chains)(q1(e.ordered)(at(
    (a) => a.from.node !== a.to.node,
    e.withDummies.edges
  ))((() => {
    const a = (l) => {
      if (l.tag === "Leaf")
        return I;
      if (l.tag === "Node")
        return Yt("Node", l._1, l._2, l._3, k(l._4._1 * 4, l._4._2), a(l._5), a(l._6));
      f();
    };
    return a(xi(Q((l) => k(l.id, l.size))(n.nodes)));
  })()))), s = t.compactPostRouting ? Px()(t.compactionSpacings)({
    nodes: o,
    edges: n.edges,
    paths: i,
    ports: r
  }) : { nodes: o, edges: i }, u = Q((a) => {
    const l = hi(_i(a.segments));
    return { ...a, segments: l, bends: pn((d) => (_) => d.end, l, Jt(1, l.length, l)) };
  })(s.edges), c = Rt((a) => (l) => ({ ...l, jumps: $v(a)(l)(u) }))(u);
  return { nodes: s.nodes, edges: c, boundingBox: zw(s.nodes), metrics: i2(s.nodes)(c)(0) };
}, Qw = (t) => (n) => (e) => {
  const r = xi(Q((i) => k(i.id, i.size))(n.nodes)), o = {
    ...e,
    placements: Ov({ nodeGap: t.nodeGap, layerGap: t.layerGap })(n.constraints)(e.ordered)(r)(xi(Q((i) => k(
      i.id,
      i.ports
    ))(n.nodes)))(e.withDummies.edges)(e.withDummies.chains)(q1(e.ordered)(e.withDummies.edges)((() => {
      const i = (s) => {
        if (s.tag === "Leaf")
          return I;
        if (s.tag === "Node")
          return Yt("Node", s._1, s._2, s._3, k(s._4._1 * 4, s._4._2), i(s._5), i(s._6));
        f();
      };
      return i(r);
    })()))
  };
  return { pipeline: o, result: Dw(t)(n)(o) };
}, Hw = (t) => (n) => (e) => Qw(t)(n)({
  ...e,
  ordered: rw({
    iterations: t.iterations,
    constraints: n.constraints,
    modelOrder: xi(Rt((r) => (o) => k(o.id, r))(n.nodes))
  })(e.withDummies.layers)(e.withDummies.edges)
}), Ww = (t) => (n) => (e) => Hw(t)(n)({
  ...e,
  withDummies: yv(e.layered.nodeLayer)(e.acyclic.edges)(e.layered.layers)
}), Ow = (t) => (n) => {
  const e = Q((o) => o.id)(n.nodes), r = dw(t.cycleBreaker)(e)(n.constraints)(n.edges);
  return Ww(t)(n)({
    acyclic: r,
    layered: Aw(t.layerer)(n.constraints)(r.edges)(e),
    withDummies: Rw,
    ordered: [],
    placements: []
  });
}, Tu = (t) => t, qw = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, zr = /* @__PURE__ */ Tu("TopSide"), Dr = /* @__PURE__ */ Tu("BottomSide"), Qr = /* @__PURE__ */ Tu("LeftSide"), Hr = /* @__PURE__ */ Tu("RightSide"), Xw = (t) => {
  const n = ot.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = ot.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, Y0 = (t) => (n) => (e) => {
  const r = qw(t.h * 0.12)(t.w * 0.2), o = t.w / 2;
  return (n < 0 ? t.y + r : t.y + t.h - r) + n * r * Bn(Xw((() => {
    const i = (e - (t.x + o)) / o;
    return 1 - i * i;
  })()));
}, te = (t) => (n) => (e) => (r) => {
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
      o = or, i = d, s = _, u = g;
      continue;
    }
    if (l === "Cylinder") {
      if (_ === "TopSide") {
        c = !1, a = Y0(d)(-1)(g);
        continue;
      }
      if (_ === "BottomSide") {
        c = !1, a = Y0(d)(1)(g);
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
    o = or, i = d, s = _, u = g;
  }
  return a;
}, U0 = (t) => (n) => {
  const e = n.y - t.y, r = e < 0 ? -e : e, o = n.x - (t.x + t.w), i = o < 0 ? -o : o, s = n.x - t.x, u = s < 0 ? -s : s, c = n.y - (t.y + t.h), a = c < 0 ? -c : c;
  return r <= a && r <= u && r <= i ? zr : a <= u && a <= i ? Dr : u <= i ? Qr : Hr;
}, Yw = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Ve);
  return (n) => t(ge("IterNode", n, Ue));
})(), rf = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, vi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, wi = /* @__PURE__ */ cn(G)(qt), Uw = (t) => (e) => {
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
}, Vw = (t) => (e) => {
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
}, Kw = /* @__PURE__ */ w((t) => (n) => K(G)(n)()(t))(I), Mw = /* @__PURE__ */ w((t) => (n) => K(G)(n)()(t))(I), Ju = Pr.traverse(oo), Qs = /* @__PURE__ */ cn(G)(qt), jw = (t) => (n) => Wn(G.compare, Hn, t, n), Zw = /* @__PURE__ */ w((t) => (n) => K(G)(n)()(t))(I), tN = /* @__PURE__ */ cn(G)(qt), nN = (t) => (n) => Wn(G.compare, Hn, t, n), eN = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, V0 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, rN = (t) => (n) => ({
  ...n,
  edges: wi(Q((e) => k(
    e._1,
    (() => {
      const r = rf(e._1)(t);
      if (r.tag === "Nothing")
        return e._2;
      if (r.tag === "Just") {
        const o = vi(r._1._2)(n.nodes), i = vi(r._1._1)(n.nodes), s = (() => {
          if (i.tag === "Nothing")
            return e._2;
          if (i.tag === "Just") {
            const u = Bt((c) => v, (c) => (a) => N("Just", { head: c, tail: a }), e._2);
            if (u.tag === "Nothing")
              return e._2;
            if (u.tag === "Just")
              return [
                (() => {
                  const c = Bt((_) => v, (_) => (g) => N("Just", { head: _, tail: g }), u._1.tail), a = c.tag === "Just" ? N("Just", c._1.head) : v, l = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, d = (() => {
                    if (a.tag === "Just") {
                      if ((a._1.x > u._1.head.x ? a._1.x - u._1.head.x < 0.5 : u._1.head.x - a._1.x < 0.5) && u._1.head.x >= l.x - 0.5 && u._1.head.x <= l.x + l.w + 0.5)
                        return a._1.y >= l.y + l.h ? N("Just", Dr) : a._1.y <= l.y ? N("Just", zr) : v;
                      if ((a._1.y > u._1.head.y ? a._1.y - u._1.head.y < 0.5 : u._1.head.y - a._1.y < 0.5) && u._1.head.y >= l.y - 0.5 && u._1.head.y <= l.y + l.h + 0.5) {
                        if (a._1.x >= l.x + l.w)
                          return N("Just", Hr);
                        if (a._1.x <= l.x)
                          return N("Just", Qr);
                      }
                      return v;
                    }
                    if (a.tag === "Nothing")
                      return v;
                    f();
                  })();
                  if (d.tag === "Just") {
                    if (d._1 === "TopSide")
                      return { ...u._1.head, y: te(i._1.shape)(l)(zr)(u._1.head.x) };
                    if (d._1 === "BottomSide")
                      return { ...u._1.head, y: te(i._1.shape)(l)(Dr)(u._1.head.x) };
                    if (d._1 === "LeftSide")
                      return { ...u._1.head, x: te(i._1.shape)(l)(Qr)(u._1.head.y) };
                    if (d._1 === "RightSide")
                      return { ...u._1.head, x: te(i._1.shape)(l)(Hr)(u._1.head.y) };
                    f();
                  }
                  if (d.tag === "Nothing") {
                    const _ = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, g = U0(_)(u._1.head);
                    if (g === "TopSide")
                      return { ...u._1.head, y: te(i._1.shape)(_)(zr)(u._1.head.x) };
                    if (g === "BottomSide")
                      return { ...u._1.head, y: te(i._1.shape)(_)(Dr)(u._1.head.x) };
                    if (g === "LeftSide")
                      return { ...u._1.head, x: te(i._1.shape)(_)(Qr)(u._1.head.y) };
                    if (g === "RightSide")
                      return { ...u._1.head, x: te(i._1.shape)(_)(Hr)(u._1.head.y) };
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
          const u = ke(s);
          if (u.tag === "Nothing")
            return s;
          if (u.tag === "Just")
            return Pt(u._1.init)((() => {
              const c = ke(u._1.init), a = c.tag === "Just" ? N("Just", c._1.last) : v, l = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, d = (() => {
                if (a.tag === "Just") {
                  if ((a._1.x > u._1.last.x ? a._1.x - u._1.last.x < 0.5 : u._1.last.x - a._1.x < 0.5) && u._1.last.x >= l.x - 0.5 && u._1.last.x <= l.x + l.w + 0.5)
                    return a._1.y >= l.y + l.h ? N("Just", Dr) : a._1.y <= l.y ? N("Just", zr) : v;
                  if ((a._1.y > u._1.last.y ? a._1.y - u._1.last.y < 0.5 : u._1.last.y - a._1.y < 0.5) && u._1.last.y >= l.y - 0.5 && u._1.last.y <= l.y + l.h + 0.5) {
                    if (a._1.x >= l.x + l.w)
                      return N("Just", Hr);
                    if (a._1.x <= l.x)
                      return N("Just", Qr);
                  }
                  return v;
                }
                if (a.tag === "Nothing")
                  return v;
                f();
              })();
              if (d.tag === "Just") {
                if (d._1 === "TopSide")
                  return { ...u._1.last, y: te(o._1.shape)(l)(zr)(u._1.last.x) };
                if (d._1 === "BottomSide")
                  return { ...u._1.last, y: te(o._1.shape)(l)(Dr)(u._1.last.x) };
                if (d._1 === "LeftSide")
                  return { ...u._1.last, x: te(o._1.shape)(l)(Qr)(u._1.last.y) };
                if (d._1 === "RightSide")
                  return { ...u._1.last, x: te(o._1.shape)(l)(Hr)(u._1.last.y) };
                f();
              }
              if (d.tag === "Nothing") {
                const _ = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, g = U0(_)(u._1.last);
                if (g === "TopSide")
                  return { ...u._1.last, y: te(o._1.shape)(_)(zr)(u._1.last.x) };
                if (g === "BottomSide")
                  return { ...u._1.last, y: te(o._1.shape)(_)(Dr)(u._1.last.x) };
                if (g === "LeftSide")
                  return { ...u._1.last, x: te(o._1.shape)(_)(Qr)(u._1.last.y) };
                if (g === "RightSide")
                  return { ...u._1.last, x: te(o._1.shape)(_)(Hr)(u._1.last.y) };
              }
              f();
            })());
        }
      }
      f();
    })()
  ))(Yw(n.edges)))
}), oN = (t) => (n) => (e) => {
  const r = Mt((o) => o.id === e)(t.graph.edges);
  if (r.tag === "Just")
    return N("Just", r._1);
  if (r.tag === "Nothing")
    return rf(e)(n);
  f();
}, iN = (t) => (n) => (e) => (r) => ({
  x: r.position._1 * t,
  y: r.position._2 * t,
  w: r.size._1 * t,
  h: r.size._2 * t,
  label: (() => {
    const o = vi(r.node)(n);
    if (o.tag === "Just")
      return o._1;
    if (o.tag === "Nothing")
      return r.node;
    f();
  })(),
  shape: (() => {
    const o = vi(r.node)(e);
    if (o.tag === "Nothing")
      return or;
    if (o.tag === "Just")
      return o._1;
    f();
  })()
}), sN = (t) => ({ id: t, size: k(1, 1), ports: [], label: N("Just", t), shape: or }), uN = (t) => (n) => (e) => (r) => k(r.node, iN(t)(n)(e)(r)), ed = (t) => {
  const n = pu(`
`)(t);
  return n.length === 0 ? [""] : n;
}, rd = (t) => {
  const n = (e, r) => {
    if (e.tag === "Leaf")
      return r;
    if (e.tag === "Node")
      return n(e._5, jt("Cons", e._4, n(e._6, r)));
    f();
  };
  return Gt(tn.foldr, n(t.interiors, Zt));
}, cN = (t) => wi(yt((n) => N(
  "Just",
  k(n.edge, { id: n.edge, from: { node: n.from, port: v }, to: { node: n.to, port: v }, label: v })
))(xt(t.scenes)((n) => n.tag === "DataFlow" ? yt((e) => e.kind.tag === "SendToken" ? N("Just", e.kind._1) : v)(n._1.events) : []))), od = (t) => {
  const n = jp(t), e = at((o) => Uw(o.id)(n.nodes), t.graph.nodes), r = at((o) => Vw(o.id)(n.edges), t.graph.edges);
  return {
    nodes: [
      ...e,
      ...Q(sN)(Gt(
        ae.foldr,
        rr(G.compare, n.nodes, Kw(Q((o) => o.id)(e)))
      ))
    ],
    edges: [
      ...r,
      ...yt(oN(t)(cN(t)))(Gt(
        ae.foldr,
        rr(G.compare, n.edges, Mw(Q((o) => o.id)(r)))
      ))
    ],
    constraints: t.graph.constraints
  };
}, aN = (t) => {
  const n = Ju((e) => {
    const r = m1($1)((() => {
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
  })(od(t).nodes);
  return () => {
    const e = n();
    return Qs(e);
  };
}, id = (t) => {
  const n = aN(t);
  return () => {
    const e = n(), r = Ju(id)(rd(t))();
    return w(jw)(e)(r);
  };
}, fN = (t) => (n) => {
  const e = Bt((r) => v, (r) => (o) => N("Just", { head: r, tail: o }), n.segments);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ x: e._1.head.start._1 * t, y: e._1.head.start._2 * t }, ...Q((r) => ({ x: r.end._1 * t, y: r.end._2 * t }))([e._1.head, ...e._1.tail])];
  f();
}, lN = (t) => (n) => k(n.edge, fN(t)(n)), gN = (t) => (n) => (e) => (r) => ({
  nodes: Qs(Q(uN(M(4) * t)(n)(e))(r.nodes)),
  edges: wi(Q(lN(t))(r.edges)),
  chipExtras: I,
  edgeLabels: I
}), dN = (t) => (n) => ({
  ...rN(wi(Q((e) => k(e.id, k(e.from.node, e.to.node)))(n.edges)))(gN(8)(Qs(Q((e) => k(
    e.id,
    (() => {
      if (e.label.tag === "Just")
        return e.label._1;
      if (e.label.tag === "Nothing")
        return e.id;
      f();
    })()
  ))(n.nodes)))(Qs(Q((e) => k(e.id, e.shape))(n.nodes)))(Ow(Bw)(n).result)),
  edgeLabels: wi(yt((e) => e.label.tag === "Just" ? N("Just", k(e.id, e.label._1)) : v)(n.edges))
}), _N = (t) => w((n) => (e) => {
  if (e.tag === "Structural")
    return n;
  if (e.tag === "DataFlow")
    return w((r) => (o) => {
      if (o.kind.tag === "SendToken")
        return w((i) => (s) => K(G)(s)()(i))(r)(o.kind._1.labels);
      if (o.kind.tag === "FillNodeWithoutTransition")
        return w((i) => (s) => K(G)(s)()(i))(r)(o.kind._1.labels);
      f();
    })(n)(e._1.events);
  if (e.tag === "Hold" || e.tag === "EnterNode" || e.tag === "ExitNode")
    return n;
  f();
})(I)(t.scenes), hN = (t) => {
  const n = Ju((e) => {
    const r = m1($1)(e);
    return () => {
      const o = r();
      return k(e, { labelW: o, charCount: dr(Po(e)), lineCount: 1 });
    };
  })(Gt(
    ae.foldr,
    Zw(xt(Gt(ae.foldr, _N(t)))(ed))
  ));
  return () => {
    const e = n();
    return tN(e);
  };
}, sd = (t) => {
  const n = hN(t);
  return () => {
    const e = n(), r = Ju(sd)(rd(t))();
    return w(nN)(e)(r);
  };
}, pN = M(4) * 8, mN = (t) => xt(t.scenes)((n) => {
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
}), $N = (t) => (n) => (e) => {
  const r = (o) => {
    const i = yt((s) => {
      const u = eN(s)(t);
      return u.tag === "Just" ? N("Just", { w: u._1.labelW + 28, h: M(Vy(1)(u._1.lineCount)) * 13.2 + 12 }) : v;
    })(xt(o)(ed));
    return i.length === 0 ? v : N(
      "Just",
      { w: w(V0)(0)(Q((s) => s.w)(i)), h: w(V0)(0)(Q((s) => s.h)(i)) }
    );
  };
  return w((o) => (i) => {
    if (i.kind.tag === "SendToken") {
      const s = rf(i.kind._1.edge)(e.edges), u = r(i.kind._1.labels);
      if (u.tag === "Just" && s.tag === "Just") {
        const c = u._1;
        return Et(G)(gn)(i.kind._1.edge)(Q((a) => ({ x: a.x + 14 + c.w, y: a.y - 6 - 8 - c.h }))(s._1))(o);
      }
      return o;
    }
    if (i.kind.tag === "FillNodeWithoutTransition") {
      const s = vi(i.kind._1.node)(e.nodes), u = r(i.kind._1.labels);
      return u.tag === "Just" && s.tag === "Just" ? Et(G)(gn)("__fill__:" + i.kind._1.node)((() => {
        const c = s._1.y - u._1.h - 14, a = s._1.x + s._1.w / 2, l = a - u._1.w / 2, d = a + u._1.w / 2, _ = s._1.y - 14;
        return [{ x: l, y: c }, { x: d, y: c }, { x: l, y: _ }, { x: d, y: _ }];
      })())(o) : o;
    }
    f();
  })(I)(mN(n));
}, bu = (t) => (n) => (e) => ({
  layout: (() => {
    const r = dN()(e2(pN)(t)(n2(t2)(od(e))));
    return { ...r, chipExtras: $N(n)(e)(r) };
  })(),
  interiors: (() => {
    const r = bu(t)(n), o = (i) => {
      if (i.tag === "Leaf")
        return I;
      if (i.tag === "Node")
        return Yt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
      f();
    };
    return o(e.interiors);
  })()
}), K0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Hc = (t) => (n) => (e) => {
  const r = t < 0.05 ? t : 0.05, o = (s, u) => {
    if (u.tag === "Leaf")
      return s;
    if (u.tag === "Node")
      return o(
        (() => {
          const c = K0(u._3)(e), a = (() => {
            if (c.tag === "Just")
              return c._1;
            if (c.tag === "Nothing")
              return { x: u._4.x, y: u._4.y, vx: 0, vy: 0 };
            f();
          })(), l = a.vx + (180 * (u._4.x - a.x) - 22 * a.vx) * r, d = a.vy + (180 * (u._4.y - a.y) - 22 * a.vy) * r;
          return K(G)(u._3)({ x: a.x + l * r, y: a.y + d * r, vx: l, vy: d })(o(s, u._5));
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
              const a = s(u, c._5), l = K0(c._3)(i);
              if (l.tag === "Just")
                return K(G)(c._3)({ ...c._4, x: l._1.x, y: l._1.y })(a);
              if (l.tag === "Nothing")
                return K(G)(c._3)(c._4)(a);
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
var uo = (function() {
  var t = {}, n = "Pure", e = "Throw", r = "Catch", o = "Sync", i = "Async", s = "Bind", u = "Bracket", c = "Fork", a = "Sequential", l = "Map", d = "Apply", _ = "Alt", g = "Cons", p = "Resume", $ = "Release", h = "Finalizer", m = "Finalized", y = "Forked";
  function x(P, D, W, V) {
    this.tag = P, this._1 = D, this._2 = W, this._3 = V;
  }
  function J(P) {
    var D = function(W, V, U) {
      return new x(P, W, V, U);
    };
    return D.tag = P, D;
  }
  function T(P) {
    return new x(n, void 0);
  }
  function b(P) {
    try {
      P();
    } catch (D) {
      setTimeout(function() {
        throw D;
      }, 0);
    }
  }
  function L(P, D, W) {
    try {
      return D(W());
    } catch (V) {
      return P(V);
    }
  }
  function A(P, D, W) {
    try {
      return D(W)();
    } catch (V) {
      return W(P(V))(), T;
    }
  }
  var E = (function() {
    var P = 1024, D = 0, W = 0, V = new Array(P), U = !1;
    function X() {
      var et;
      for (U = !0; D !== 0; )
        D--, et = V[W], V[W] = void 0, W = (W + 1) % P, et();
      U = !1;
    }
    return {
      isDraining: function() {
        return U;
      },
      enqueue: function(et) {
        var nt;
        D === P && (nt = U, X(), U = nt), V[(W + D) % P] = et, D++, U || X();
      }
    };
  })();
  function O(P) {
    var D = {}, W = 0, V = 0;
    return {
      register: function(U) {
        var X = W++;
        U.onComplete({
          rethrow: !0,
          handler: function(et) {
            return function() {
              V--, delete D[X];
            };
          }
        })(), D[X] = U, V++;
      },
      isEmpty: function() {
        return V === 0;
      },
      killAll: function(U, X) {
        return function() {
          if (V === 0)
            return X();
          var et = 0, nt = {};
          function j(ct) {
            nt[ct] = D[ct].kill(U, function(dt) {
              return function() {
                delete nt[ct], et--, P.isLeft(dt) && P.fromLeft(dt) && setTimeout(function() {
                  throw P.fromLeft(dt);
                }, 0), et === 0 && X();
              };
            })();
          }
          for (var rt in D)
            D.hasOwnProperty(rt) && (et++, j(rt));
          return D = {}, W = 0, V = 0, function(ct) {
            return new x(o, function() {
              for (var dt in nt)
                nt.hasOwnProperty(dt) && nt[dt]();
            });
          };
        };
      }
    };
  }
  var H = 0, F = 1, B = 2, Z = 3, tt = 4, Y = 5, z = 6;
  function S(P, D, W) {
    var V = 0, U = H, X = W, et = null, nt = null, j = null, rt = null, ct = null, dt = 0, Ot = 0, bt = null, Dt = !0;
    function _t(lt) {
      for (var gt, st, ft; ; )
        switch (gt = null, st = null, ft = null, U) {
          case B:
            U = F;
            try {
              X = j(X), rt === null ? j = null : (j = rt._1, rt = rt._2);
            } catch (vt) {
              U = Y, et = P.left(vt), X = null;
            }
            break;
          case Z:
            P.isLeft(X) ? (U = Y, et = X, X = null) : j === null ? U = Y : (U = B, X = P.fromRight(X));
            break;
          case F:
            switch (X.tag) {
              case s:
                j && (rt = new x(g, j, rt)), j = X._2, U = F, X = X._1;
                break;
              case n:
                j === null ? (U = Y, X = P.right(X._1)) : (U = B, X = X._1);
                break;
              case o:
                U = Z, X = L(P.left, P.right, X._1);
                break;
              case i:
                U = tt, X = A(P.left, X._1, function(vt) {
                  return function() {
                    V === lt && (V++, E.enqueue(function() {
                      V === lt + 1 && (U = Z, X = vt, _t(V));
                    }));
                  };
                });
                return;
              case e:
                U = Y, et = P.left(X._1), X = null;
                break;
              // Enqueue the Catch so that we can call the error handler later on
              // in case of an exception.
              case r:
                j === null ? ct = new x(g, X, ct, nt) : ct = new x(g, X, new x(g, new x(p, j, rt), ct, nt), nt), j = null, rt = null, U = F, X = X._1;
                break;
              // Enqueue the Bracket so that we can call the appropriate handlers
              // after resource acquisition.
              case u:
                dt++, j === null ? ct = new x(g, X, ct, nt) : ct = new x(g, X, new x(g, new x(p, j, rt), ct, nt), nt), j = null, rt = null, U = F, X = X._1;
                break;
              case c:
                U = Z, gt = S(P, D, X._2), D && D.register(gt), X._1 && gt.run(), X = P.right(gt);
                break;
              case a:
                U = F, X = q(P, D, X._1);
                break;
            }
            break;
          case Y:
            if (j = null, rt = null, ct === null)
              U = z, X = nt || et || X;
            else
              switch (gt = ct._3, ft = ct._1, ct = ct._2, ft.tag) {
                // We cannot recover from an unmasked interrupt. Otherwise we should
                // continue stepping, or run the exception handler if an exception
                // was raised.
                case r:
                  nt && nt !== gt && dt === 0 ? U = Y : et && (U = F, X = ft._2(P.fromLeft(et)), et = null);
                  break;
                // We cannot resume from an unmasked interrupt or exception.
                case p:
                  nt && nt !== gt && dt === 0 || et ? U = Y : (j = ft._1, rt = ft._2, U = B, X = P.fromRight(X));
                  break;
                // If we have a bracket, we should enqueue the handlers,
                // and continue with the success branch only if the fiber has
                // not been interrupted. If the bracket acquisition failed, we
                // should not run either.
                case u:
                  dt--, et === null && (st = P.fromRight(X), ct = new x(g, new x($, ft._2, st), ct, gt), (nt === gt || dt > 0) && (U = F, X = ft._3(st)));
                  break;
                // Enqueue the appropriate handler. We increase the bracket count
                // because it should not be cancelled.
                case $:
                  ct = new x(g, new x(m, X, et), ct, nt), U = F, nt && nt !== gt && dt === 0 ? X = ft._1.killed(P.fromLeft(nt))(ft._2) : et ? X = ft._1.failed(P.fromLeft(et))(ft._2) : X = ft._1.completed(P.fromRight(X))(ft._2), et = null, dt++;
                  break;
                case h:
                  dt++, ct = new x(g, new x(m, X, et), ct, nt), U = F, X = ft._1;
                  break;
                case m:
                  dt--, U = Y, X = ft._1, et = ft._2;
                  break;
              }
            break;
          case z:
            for (var Nt in bt)
              bt.hasOwnProperty(Nt) && (Dt = Dt && bt[Nt].rethrow, b(bt[Nt].handler(X)));
            bt = null, nt && et ? setTimeout(function() {
              throw P.fromLeft(et);
            }, 0) : P.isLeft(X) && Dt && setTimeout(function() {
              if (Dt)
                throw P.fromLeft(X);
            }, 0);
            return;
          case H:
            U = F;
            break;
          case tt:
            return;
        }
    }
    function wt(lt) {
      return function() {
        if (U === z)
          return Dt = Dt && lt.rethrow, lt.handler(X)(), function() {
          };
        var gt = Ot++;
        return bt = bt || {}, bt[gt] = lt, function() {
          bt !== null && delete bt[gt];
        };
      };
    }
    function pt(lt, gt) {
      return function() {
        if (U === z)
          return gt(P.right(void 0))(), function() {
          };
        var st = wt({
          rethrow: !1,
          handler: function() {
            return gt(P.right(void 0));
          }
        })();
        switch (U) {
          case H:
            nt = P.left(lt), U = z, X = nt, _t(V);
            break;
          case tt:
            nt === null && (nt = P.left(lt)), dt === 0 && (U === tt && (ct = new x(g, new x(h, X(lt)), ct, nt)), U = Y, X = null, et = null, _t(++V));
            break;
          default:
            nt === null && (nt = P.left(lt)), dt === 0 && (U = Y, X = null, et = null);
        }
        return st;
      };
    }
    function $t(lt) {
      return function() {
        var gt = wt({
          rethrow: !1,
          handler: lt
        })();
        return U === H && _t(V), gt;
      };
    }
    return {
      kill: pt,
      join: $t,
      onComplete: wt,
      isSuspended: function() {
        return U === H;
      },
      run: function() {
        U === H && (E.isDraining() ? _t(V) : E.enqueue(function() {
          _t(V);
        }));
      }
    };
  }
  function C(P, D, W, V) {
    var U = 0, X = {}, et = 0, nt = {}, j = new Error("[ParAff] Early exit"), rt = null, ct = t;
    function dt(wt, pt, $t) {
      var lt = pt, gt = null, st = null, ft = 0, Nt = {}, vt, kt;
      t: for (; ; )
        switch (vt = null, lt.tag) {
          case y:
            if (lt._3 === t && (vt = X[lt._1], Nt[ft++] = vt.kill(wt, function(Qt) {
              return function() {
                ft--, ft === 0 && $t(Qt)();
              };
            })), gt === null)
              break t;
            lt = gt._2, st === null ? gt = null : (gt = st._1, st = st._2);
            break;
          case l:
            lt = lt._2;
            break;
          case d:
          case _:
            gt && (st = new x(g, gt, st)), gt = lt, lt = lt._1;
            break;
        }
      if (ft === 0)
        $t(P.right(void 0))();
      else
        for (kt = 0, vt = ft; kt < vt; kt++)
          Nt[kt] = Nt[kt]();
      return Nt;
    }
    function Ot(wt, pt, $t) {
      var lt, gt, st, ft, Nt, vt;
      for (P.isLeft(wt) ? (lt = wt, gt = null) : (gt = wt, lt = null); ; ) {
        if (st = null, ft = null, Nt = null, vt = null, rt !== null)
          return;
        if (pt === null) {
          V(lt || gt)();
          return;
        }
        if (pt._3 !== t)
          return;
        switch (pt.tag) {
          case l:
            lt === null ? (pt._3 = P.right(pt._1(P.fromRight(gt))), gt = pt._3) : pt._3 = lt;
            break;
          case d:
            if (st = pt._1._3, ft = pt._2._3, lt) {
              if (pt._3 = lt, Nt = !0, vt = et++, nt[vt] = dt(j, lt === st ? pt._2 : pt._1, function() {
                return function() {
                  delete nt[vt], Nt ? Nt = !1 : $t === null ? Ot(lt, null, null) : Ot(lt, $t._1, $t._2);
                };
              }), Nt) {
                Nt = !1;
                return;
              }
            } else {
              if (st === t || ft === t)
                return;
              gt = P.right(P.fromRight(st)(P.fromRight(ft))), pt._3 = gt;
            }
            break;
          case _:
            if (st = pt._1._3, ft = pt._2._3, st === t && P.isLeft(ft) || ft === t && P.isLeft(st))
              return;
            if (st !== t && P.isLeft(st) && ft !== t && P.isLeft(ft))
              lt = gt === st ? ft : st, gt = null, pt._3 = lt;
            else if (pt._3 = gt, Nt = !0, vt = et++, nt[vt] = dt(j, gt === st ? pt._2 : pt._1, function() {
              return function() {
                delete nt[vt], Nt ? Nt = !1 : $t === null ? Ot(gt, null, null) : Ot(gt, $t._1, $t._2);
              };
            }), Nt) {
              Nt = !1;
              return;
            }
            break;
        }
        $t === null ? pt = null : (pt = $t._1, $t = $t._2);
      }
    }
    function bt(wt) {
      return function(pt) {
        return function() {
          delete X[wt._1], wt._3 = pt, Ot(pt, wt._2._1, wt._2._2);
        };
      };
    }
    function Dt() {
      var wt = F, pt = W, $t = null, lt = null, gt, st;
      t: for (; ; )
        switch (gt = null, st = null, wt) {
          case F:
            switch (pt.tag) {
              case l:
                $t && (lt = new x(g, $t, lt)), $t = new x(l, pt._1, t, t), pt = pt._2;
                break;
              case d:
                $t && (lt = new x(g, $t, lt)), $t = new x(d, t, pt._2, t), pt = pt._1;
                break;
              case _:
                $t && (lt = new x(g, $t, lt)), $t = new x(_, t, pt._2, t), pt = pt._1;
                break;
              default:
                st = U++, wt = Y, gt = pt, pt = new x(y, st, new x(g, $t, lt), t), gt = S(P, D, gt), gt.onComplete({
                  rethrow: !1,
                  handler: bt(pt)
                })(), X[st] = gt, D && D.register(gt);
            }
            break;
          case Y:
            if ($t === null)
              break t;
            $t._1 === t ? ($t._1 = pt, wt = F, pt = $t._2, $t._2 = t) : ($t._2 = pt, pt = $t, lt === null ? $t = null : ($t = lt._1, lt = lt._2));
        }
      for (ct = pt, st = 0; st < U; st++)
        X[st].run();
    }
    function _t(wt, pt) {
      rt = P.left(wt);
      var $t;
      for (var lt in nt)
        if (nt.hasOwnProperty(lt)) {
          $t = nt[lt];
          for (lt in $t)
            $t.hasOwnProperty(lt) && $t[lt]();
        }
      nt = null;
      var gt = dt(wt, ct, pt);
      return function(st) {
        return new x(i, function(ft) {
          return function() {
            for (var Nt in gt)
              gt.hasOwnProperty(Nt) && gt[Nt]();
            return T;
          };
        });
      };
    }
    return Dt(), function(wt) {
      return new x(i, function(pt) {
        return function() {
          return _t(wt, pt);
        };
      });
    };
  }
  function q(P, D, W) {
    return new x(i, function(V) {
      return function() {
        return C(P, D, W, V);
      };
    });
  }
  return x.EMPTY = t, x.Pure = J(n), x.Throw = J(e), x.Catch = J(r), x.Sync = J(o), x.Async = J(i), x.Bind = J(s), x.Bracket = J(u), x.Fork = J(c), x.Seq = J(a), x.ParMap = J(l), x.ParApply = J(d), x.ParAlt = J(_), x.Fiber = S, x.Supervisor = O, x.Scheduler = E, x.nonCanceler = T, x;
})();
const yN = uo.Pure;
uo.Throw;
function Vr(t) {
  return function(n) {
    return uo.Bind(t, n);
  };
}
const Kr = uo.Sync, xN = uo.Async;
function of(t, n) {
  return function() {
    return uo.Fiber(t, null, n);
  };
}
uo.Seq;
const sf = {
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
      return Mf("unsafeFromLeft: Right");
    f();
  },
  fromRight: (t) => {
    if (t.tag === "Right")
      return t._1;
    if (t.tag === "Left")
      return Mf("unsafeFromRight: Left");
    f();
  },
  left: q_,
  right: ng
}, vN = /* @__PURE__ */ (() => {
  const t = yN();
  return (n) => t;
})();
let _c = null;
function wN() {
  return _c || (typeof document > "u" ? null : _c = document.createElement("canvas").getContext("2d"));
}
const hc = /* @__PURE__ */ new Map();
function ud(t, n, e, r, o, i) {
  const s = `${e} ${n}px ${t}`, u = s + "|" + r;
  if (hc.has(u)) return hc.get(u);
  const c = wN();
  if (!c) return i;
  c.font = s;
  const a = o(c.measureText(r)), l = typeof document < "u" ? document.fonts : null;
  if (!l || l.check(s)) hc.set(u, a);
  else if (l && l.load)
    try {
      l.load(s);
    } catch {
    }
  return a;
}
const NN = (t, n, e, r) => ud(t, n, e, r, (o) => o.width, -1), TN = (t, n, e, r) => ud(
  t,
  n,
  e,
  r,
  (o) => ({ ascent: o.actualBoundingBoxAscent, descent: o.actualBoundingBoxDescent }),
  { ascent: -1, descent: -1 }
), cd = (t) => (n) => {
  const e = NN(t.family, t.size, t.weight, Po(n));
  return e < 0 ? M(yu(n).length) * t.size * 0.62 : e;
}, ad = (t) => (n) => {
  const e = TN(t.family, t.size, t.weight, Po(n));
  return e.ascent < 0 ? { ascent: t.size * 0.72, descent: t.size * 0.2 } : e;
}, fd = (t) => t, ld = (t) => t, ku = (t) => t, gd = (t) => t, JN = (t) => t, dd = (t) => t, _d = (t) => t, bN = /* @__PURE__ */ _d("BaselineTop"), Cr = /* @__PURE__ */ _d("BaselineMiddle"), Wc = /* @__PURE__ */ dd("AlignLeft"), Do = /* @__PURE__ */ dd("AlignCenter"), Pn = /* @__PURE__ */ JN("RoundJoin"), Se = /* @__PURE__ */ gd("ButtCap"), Qe = /* @__PURE__ */ gd("RoundCap"), kN = /* @__PURE__ */ ku("LayerPolyOut"), LN = /* @__PURE__ */ ku("LayerPolyIn"), EN = /* @__PURE__ */ ku("LayerNodeMask"), SN = /* @__PURE__ */ ku("LayerOverlay"), Hs = /* @__PURE__ */ ld("NonZero"), CN = /* @__PURE__ */ ld("EvenOdd"), M0 = /* @__PURE__ */ fd("Normal"), ds = /* @__PURE__ */ fd("Difference"), ln = { r: 255, g: 255, b: 255, a: 255 }, je = { r: 26, g: 26, b: 26, a: 255 }, Oc = (t) => (n) => Math.imul(t, n), Qo = (t) => {
  const n = t + 1831565813 | 0, e = Oc(n ^ n >>> 15)(n | 1), r = e ^ (e + Oc(e ^ e >>> 7)(e | 61) | 0), o = r ^ r >>> 14;
  return { prng: o, value: o < 0 ? (M(o) + 4294967296) / 4294967296 : M(o) / 4294967296 };
}, Tn = (t) => (n) => (e) => {
  const r = Qo(e);
  return { prng: r.prng, value: t + r.value * (n - t) };
}, qc = (t) => (n) => w((e) => (r) => Oc(e ^ r)(-2048144789))(n)(Q(De)(Gr(t))), AN = (t) => t, hd = (t) => t, PN = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ye = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, pd = (t) => (n) => (e) => {
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
}, Xc = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, GN = (t) => (n) => (e) => {
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
}, FN = /* @__PURE__ */ hd("FlatLevel"), IN = /* @__PURE__ */ hd("NestedLevel"), md = /* @__PURE__ */ AN("GenieSilhouette"), RN = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, yLift: 0 };
  const o = Qo(t);
  return { prng: o.prng, yLift: o.value * e.yJitter * r };
}, BN = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, dx: 0 };
  const o = Qo(t);
  return { prng: o.prng, dx: (o.value * 2 - 1) * e.xJitter * r };
}, j0 = (t) => (n) => {
  const e = n.cy - t.cy, r = n.cx - t.cx, o = Bn(r * r + e * e), i = (t.r * t.r - n.r * n.r + o * o) / (2 * o), s = Bn(PN(0)(t.r * t.r - i * i)), u = t.cx + i * r / o, c = t.cy + i * e / o, a = { x: u - s * e / o, y: c + s * r / o }, l = { x: u + s * e / o, y: c - s * r / o };
  return o === 0 || o > t.r + n.r ? { x: (t.cx + n.cx) / 2, y: t.cy } : a.y < l.y ? a : l;
}, zN = (t) => (n) => {
  const e = ye(n)(ye(t.w / 2)(t.h / 2));
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
}, DN = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n)
    return { prng: t, r: o };
  if (e)
    return { prng: t, r: o * (1 + i.rJitter) };
  if (r)
    return { prng: t, r: o * i.smallScale };
  const s = Qo(t);
  return { prng: s.prng, r: o * (1 + s.value * i.rJitter) };
}, $d = (t) => {
  const n = ye(t.w)(t.h) / 2;
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
}, QN = (t) => (n) => (e) => {
  const r = Qo(t), o = n.length;
  return o === 0 ? { prng: t, idx: -1 } : {
    prng: r.prng,
    idx: (() => {
      const i = pd(0)(o - 1 | 0)(vn(Le(r.value * M(e))));
      return i >= 0 && i < n.length ? n[i] : -1;
    })()
  };
}, HN = (t) => (n) => {
  const e = Qo(t), r = n.length;
  return r === 0 ? { prng: t, idx: -1 } : {
    prng: e.prng,
    idx: (() => {
      const o = pd(0)(r - 1 | 0)(vn(Le(e.value * M(r))));
      return o >= 0 && o < n.length ? n[o] : -1;
    })()
  };
}, yd = (t) => {
  const n = ye(t.w * 0.18)(t.h * 0.6);
  return [1, t.x + n, t.y, 2, t.x + t.w, t.y, 2, t.x + t.w - n, t.y + t.h, 2, t.x, t.y + t.h, 5];
}, xd = (t) => [
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
], vd = { rBase: 1.2, stepRatio: 0.7, rJitter: 0.35, yJitter: 0.2, xJitter: 0.2, heroShift: 0.2, smallScale: 0.85, smallShift: 0.15, seed: 7, minN: 3 }, WN = (t) => {
  const n = ye(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.x + e;
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
}, wd = (t) => {
  const n = ye(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + t.h + 5, o = t.y + n, i = r - n, s = t.x + e;
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
}, Nd = (t) => (n) => {
  const e = n.y + n.h, r = Lh(t.rBase * n.h)(n.w / (2 * (1 + (M(t.minN) - 1) * t.stepRatio))), o = n.w - 2 * r, i = 2 * r * t.stepRatio, s = Xc(t.minN)(o <= 0 || i <= 0 ? t.minN : vn(er(o / i)) + 1 | 0), u = s >= 3 ? zt(1, s - 2 | 0) : [], c = u.length, a = Ne(c + 1 | 0, 2), l = a < 1 ? [] : Jt(0, a, u), d = HN(t.seed)((() => {
    const h = c - a | 0;
    return h < 1 ? u : Jt(h, u.length, u);
  })()), _ = d.idx, g = QN(d.prng)(at((h) => h !== _, l))(Xc(1)(l.length - (ie(bo)(_)(l) ? 1 : 0) | 0)), p = g.idx, $ = s >= 2 ? o / (M(s) - 1) : 0;
  return w((h) => (m) => {
    const y = m === p, x = m === _, J = m === 0 || m === (s - 1 | 0), T = DN(h.prng)(J)(x)(y)(r)(t), b = RN(T.prng)(J)(t)(n.h), L = BN(b.prng)(J)(t)($);
    return {
      prng: L.prng,
      circles: Pt(h.circles)({
        cx: n.x + GN(T.r)(n.w - T.r)((s >= 2 ? r + M(m) / (M(s) - 1) * o + L.dx : r + 0 * o + L.dx) + (x ? t.heroShift * $ : y ? -1 * t.smallShift * $ : 0)),
        cy: e - b.yLift,
        r: T.r
      })
    };
  })({ prng: g.prng, circles: [] })(zt(0, s - 1 | 0)).circles;
}, Td = (t) => (n) => {
  const e = t.length;
  return Rt((r) => (o) => ({
    c: o,
    p1: (() => {
      if (r === 0)
        return { x: o.cx - o.r, y: n };
      const i = r - 1 | 0;
      return i >= 0 && i < t.length ? j0(t[i])(o) : { x: o.cx - o.r, y: n };
    })(),
    p2: (() => {
      if (r === (e - 1 | 0))
        return { x: o.cx + o.r, y: n };
      const i = r + 1 | 0;
      return i >= 0 && i < t.length ? j0(o)(t[i]) : { x: o.cx + o.r, y: n };
    })()
  }))(t);
}, Jd = (t) => {
  const n = ye(t.h * 0.4)(t.w * 0.2);
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
}, ON = (t) => (n) => (e) => {
  const r = Xr(n.y - t.cy)(n.x - t.cx), o = Xr(e.y - t.cy)(e.x - t.cx), i = o > r ? o - r : o + 6.283185307179586 - r, s = Xc(1)(vn(iu(i / 1.5707963267948966))), u = i / M(s), c = 1.3333333333333333 * Eh(u / 4);
  return xt(zt(0, s - 1 | 0))((a) => {
    const l = r + M(a + 1 | 0) * u, d = t.cx + t.r * Vn(l), _ = t.cy + t.r * ee(l), g = r + M(a) * u;
    return [
      4,
      t.cx + t.r * Vn(g) - c * t.r * ee(g),
      t.cy + t.r * ee(g) + c * t.r * Vn(g),
      d + c * t.r * ee(l),
      _ - c * t.r * Vn(l),
      d,
      _
    ];
  });
}, bd = (t) => (n) => {
  const e = t.h * 0.38, r = Td(Nd(vd)({ x: t.x, y: t.y - e, w: t.w, h: e }))(t.y), o = ye(n)(ye(t.w / 2)(t.h / 2));
  return 0 < r.length ? [
    1,
    r[0].p1.x,
    r[0].p1.y,
    ...xt(r)((i) => ON(i.c)(i.p1)(i.p2)),
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
  ] : zN(t)(n);
}, uf = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n === "Rectangle")
    return t.drawRoundedRect(e)(r)(o)(i);
  if (n === "Cylinder") {
    const s = wd(e);
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
    const s = yd(e);
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
  if (n === "Ellipse") {
    const s = $d(e);
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
    const s = xd(e);
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
    const s = bd(e)(r);
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
}, qN = (t) => () => t.clip("evenodd"), XN = (t) => (n) => () => {
  t.filter = `blur(${n}px)`;
}, YN = (t) => (n) => () => {
  const e = Math.max(8, Math.ceil(8 / Math.max(n.tile, 1e-3))), r = Math.max(2, Math.round(n.tile * e)), o = document.createElement("canvas");
  o.width = r, o.height = r;
  const i = o.getContext("2d");
  i.scale(e, e), i.fillStyle = n.bgCss, i.fillRect(0, 0, n.tile, n.tile), i.fillStyle = n.dotCss, i.beginPath(), i.arc(n.tile / 2, n.tile / 2, n.dotR, 0, 2 * Math.PI), i.fill();
  const s = t.createPattern(o, "repeat");
  s && typeof s.setTransform == "function" && s.setTransform(new DOMMatrix().translateSelf(n.ox, n.oy).scaleSelf(1 / e, 1 / e)), t.save(), t.fillStyle = s, t.fillRect(n.vx, n.vy, n.vw, n.vh), t.restore();
}, Yc = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, cf = (t) => (n) => (e) => {
  const r = n.stroke;
  return () => {
    const o = r.value, i = Kh(t)(e);
    if (o !== e)
      return i(), n.stroke.value = e;
  };
}, UN = (t) => (n) => (e) => {
  const r = n.font;
  return () => {
    const o = r.value, i = uu(t)(e);
    if (o !== e)
      return i(), n.font.value = e;
  };
}, Pi = (t) => (n) => (e) => {
  const r = n.fill;
  return () => {
    const o = r.value, i = ga(t)(e);
    if (o !== e)
      return i(), n.fill.value = e;
  };
}, Lu = (t) => (n) => {
  const e = n.length, r = (i) => {
    if (i >= e)
      return () => {
      };
    const s = i >= 0 && i < n.length ? n[i] : 0;
    if (s === 1) {
      const u = vg(t)((() => {
        const a = i + 1 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })())((() => {
        const a = i + 2 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 2) {
      const u = Vo(t)((() => {
        const a = i + 1 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })())((() => {
        const a = i + 2 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 3) {
      const u = Ko(t)({
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
      const u = op(t)({
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
      const u = wg(t), c = r(i + 1 | 0);
      return () => (u(), c());
    }
    return () => {
    };
  }, o = xg(t);
  return () => (o(), r(0)());
}, VN = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Yc(i)(Yc(r / 2)(o / 2)), u = vg(t)(n + s)(e);
  return () => (u(), Vo(t)(n + r - s)(e)(), Ko(t)({ cpx: n + r, cpy: e, x: n + r, y: e + s })(), Vo(t)(n + r)(e + o - s)(), Ko(t)({ cpx: n + r, cpy: e + o, x: n + r - s, y: e + o })(), Vo(t)(n + s)(e + o)(), Ko(t)({ cpx: n, cpy: e + o, x: n, y: e + o - s })(), Vo(t)(n)(e + s)(), Ko(t)({ cpx: n, cpy: e, x: n + s, y: e })(), wg(t)());
}, KN = () => ({ font: { value: "" }, fill: { value: "" }, stroke: { value: "" } }), MN = (t) => (n) => {
  const e = ha(t)({ x: 0, y: 0, width: n.width, height: n.height });
  return () => {
    e();
    const r = KN();
    return { ctx: t, surface: n, styleCache: r, maskDepth: { value: 0 }, groupAlpha: { value: 1 }, alphaSaves: { value: [] } };
  };
}, jN = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, ZN = (t) => un(t.weight) + " " + Wr(t.size) + "px " + t.family, qe = (t) => {
  const n = Wr(M(t.a) / 255);
  return t.a >= 255 ? "rgb(" + un(t.r) + "," + un(t.g) + "," + un(t.b) + ")" : "rgba(" + un(t.r) + "," + un(t.g) + "," + un(t.b) + "," + n + ")";
}, tT = (t) => (n) => (e) => (r) => {
  const o = Pi(t)(e)(qe(r));
  return () => (o(), tp(t)({ x: 0, y: 0, width: n.width, height: n.height })());
}, nT = (t) => (n) => (e) => {
  const r = n.font;
  return () => (r.value = "", n.fill.value = "", n.stroke.value = "", YN(t)({
    vx: e.viewport.vx,
    vy: e.viewport.vy,
    vw: e.viewport.vw,
    vh: e.viewport.vh,
    bgCss: qe(e.bgColor),
    dotCss: qe(e.dotColor),
    tile: e.tile,
    dotR: e.dotRadius,
    ox: e.origin.x,
    oy: e.origin.y
  })());
}, eT = (t) => (n) => (e) => (r) => {
  const o = Pi(t)(n)(qe(r));
  return () => (o(), Lu(t)(e)(), _a(t)());
}, rT = (t) => (n) => (e) => (r) => (o) => {
  const i = Pi(t)(n)(qe(r));
  return () => (i(), cf(t)(n)(qe(o.color))(), la(t)(o.width)(), fu(t)((() => {
    if (o.lineJoin === "RoundJoin")
      return au;
    if (o.lineJoin === "BevelJoin")
      return wa;
    if (o.lineJoin === "MiterJoin")
      return Na;
    f();
  })())(), Ea(t)((() => {
    if (o.lineCap === "ButtCap")
      return ba;
    if (o.lineCap === "RoundCap")
      return Ta;
    if (o.lineCap === "SquareCap")
      return Ja;
    f();
  })())(), Lu(t)(e)(), _a(t)(), da(t)());
}, oT = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = xg(t);
  return () => {
    if (s(), VN(t)(e.x)(e.y)(e.w)(e.h)(r)(), o.tag === "Just" ? (Pi(t)(n)(qe(o._1.color))(), _a(t)()) : o.tag === "Nothing" || f(), i.tag === "Just")
      return cf(t)(n)(qe(i._1.color))(), la(t)(i._1.width)(), fu(t)((() => {
        if (i._1.lineJoin === "RoundJoin")
          return au;
        if (i._1.lineJoin === "BevelJoin")
          return wa;
        if (i._1.lineJoin === "MiterJoin")
          return Na;
        f();
      })())(), Ea(t)((() => {
        if (i._1.lineCap === "ButtCap")
          return ba;
        if (i._1.lineCap === "RoundCap")
          return Ta;
        if (i._1.lineCap === "SquareCap")
          return Ja;
        f();
      })())(), da(t)();
    i.tag !== "Nothing" && f();
  };
}, iT = (t) => (n) => (e) => (r) => {
  const o = cf(t)(n)(qe(r.color));
  return () => (o(), la(t)(r.width)(), fu(t)((() => {
    if (r.lineJoin === "RoundJoin")
      return au;
    if (r.lineJoin === "BevelJoin")
      return wa;
    if (r.lineJoin === "MiterJoin")
      return Na;
    f();
  })())(), Ea(t)((() => {
    if (r.lineCap === "ButtCap")
      return ba;
    if (r.lineCap === "RoundCap")
      return Ta;
    if (r.lineCap === "SquareCap")
      return Ja;
    f();
  })())(), Lu(t)(e)(), da(t)());
}, Z0 = (t) => (n) => (e) => {
  const r = Pi(t)(n)(qe(e.color));
  return () => (r(), UN(t)(n)(ZN(e.font))(), La(t)((() => {
    if (e.align === "AlignLeft")
      return cp;
    if (e.align === "AlignCenter")
      return va;
    if (e.align === "AlignRight")
      return ap;
    f();
  })())(), ka(t)((() => {
    if (e.baseline === "BaselineTop")
      return ip;
    if (e.baseline === "BaselineMiddle")
      return xa;
    if (e.baseline === "BaselineAlphabetic")
      return sp;
    if (e.baseline === "BaselineBottom")
      return up;
    f();
  })())(), pa(t)(e.content)(e.x)(e.y)());
}, kd = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => jN
}, sT = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => kd
}, uT = (t) => (n) => (e) => {
  const r = Yc(n.width / e.vw)(n.height / e.vh), o = Tc(t)({ translateX: (n.width - e.vw * r) / 2 - e.vx * r, translateY: (n.height - e.vh * r) / 2 - e.vy * r });
  return () => (o(), ms(t)({ scaleX: r, scaleY: r })(), fu(t)(au)());
}, cT = { pure: (t) => (n) => () => t, Apply0: () => kd }, aT = { Applicative0: () => cT, Bind1: () => sT }, Ld = {
  fillPath: (t) => (n) => (e) => {
    const r = eT(e.ctx)(e.styleCache)(t)(n.color), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = iT(e.ctx)(e.styleCache)(t)(n), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = rT(r.ctx)(r.styleCache)(t)(n.color)(e), i = r.maskDepth;
    return () => {
      if (i.value === 0)
        return o();
    };
  },
  drawRoundedRect: (t) => (n) => (e) => (r) => (o) => {
    const i = oT(o.ctx)(o.styleCache)(t)(n)(e)(r), s = o.maskDepth;
    return () => {
      if (s.value === 0)
        return i();
    };
  },
  drawText: (t) => (n) => {
    const e = Z0(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  drawTextAffine: (t) => (n) => (e) => {
    const r = xr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", np(e.ctx)(t)(), Z0(e.ctx)(e.styleCache)(n)(), vr(e.ctx)(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "";
    };
  },
  pushTransform: (t) => (n) => {
    const e = xr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", Tc(n.ctx)({ translateX: t.tx, translateY: t.ty })(), ms(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popTransform: (t) => {
    const n = vr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBakedTransform: (t) => (n) => {
    const e = xr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", Tc(n.ctx)({ translateX: t.tx, translateY: t.ty })(), ms(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popBakedTransform: (t) => {
    const n = vr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushClip: (t) => (n) => (e) => {
    const r = xr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0) {
        if (r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", Lu(e.ctx)(t)(), n === "NonZero")
          return Zh(e.ctx)();
        if (n === "EvenOdd")
          return qN(e.ctx)();
        f();
      }
    };
  },
  popClip: (t) => {
    const n = vr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBlend: (t) => (n) => {
    const e = xr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        if (e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", t === "Normal")
          return Yf(n.ctx)(fp)();
        if (t === "Difference")
          return Yf(n.ctx)(lp)();
        f();
      }
    };
  },
  popBlend: (t) => {
    const n = vr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushAlpha: (t) => (n) => {
    const e = xr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "";
        const i = n.groupAlpha.value, s = n.alphaSaves.value;
        n.alphaSaves.value = [...s, i];
        const u = i * t;
        return n.groupAlpha.value = u, jh(n.ctx)(u)();
      }
    };
  },
  popAlpha: (t) => {
    const n = vr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0) {
        n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
        const o = t.alphaSaves.value, i = ke(o);
        if (i.tag === "Just")
          return t.alphaSaves.value = i._1.init, t.groupAlpha.value = i._1.last;
        if (i.tag === "Nothing")
          return t.groupAlpha.value = 1;
        f();
      }
    };
  },
  pushBlur: (t) => (n) => {
    const e = xr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "";
        const i = XN(n.ctx)(t);
        if (t >= 0.01)
          return i();
      }
    };
  },
  popBlur: (t) => {
    const n = vr(t.ctx), e = t.maskDepth;
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
    const e = uT(n.ctx)(n.surface)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  clearBackground: (t) => (n) => {
    const e = tT(n.ctx)(n.surface)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  backgroundDots: (t) => (n) => {
    const e = nT(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = cd(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = ad(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => md,
  Monad0: () => aT
}, fT = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Fo = (t) => (n) => (e) => {
  const r = fT(0.05)(1 - t - n);
  return e < t ? 0 : e > 1 - n ? 1 : (e - t) / r;
}, tl = (t) => {
  const n = ot.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = ot.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, Eu = (t) => {
  if (t.tag === "Hidden")
    return { alpha: 0, scale: 0 };
  if (t.tag === "Visible")
    return { alpha: 1, scale: 1 };
  if (t.tag === "PloppingIn")
    return { alpha: t._1 > 0 ? 1 : 0, scale: fi(8)(0.6)(tl(t._1)) };
  if (t.tag === "PloppingOut")
    return { alpha: t._1 < 1 ? 1 : 0, scale: fi(8)(0.6)(tl(1 - t._1)) };
  f();
};
function lT(t, n) {
  const e = n.x - t.x, r = n.y - t.y;
  return Math.sqrt(e * e + r * r);
}
function gT(t) {
  const n = t.length, e = new Array(n);
  for (let r = 0; r < n; r++) {
    const o = t[r], i = t[(r + 1) % n];
    e[r] = { a: o, b: i, len: lT(o, i) };
  }
  return e;
}
function dT(t, n, e) {
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
function nl(t, n) {
  if (n.length === 0) return [];
  const e = gT(n);
  let r = 0;
  for (let i = 0; i < e.length; i++) r += e[i].len;
  const o = new Array(t);
  for (let i = 0; i < t; i++)
    o[i] = dT(e, n, i * r / t);
  return o;
}
function _T(t, n) {
  const e = n.length;
  if (e === 0) return n;
  const r = (t % e + e) % e | 0, o = new Array(e);
  for (let i = 0; i < e; i++) o[i] = n[(i + r) % e];
  return o;
}
function hT(t, n) {
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
  return _T(r, n);
}
const el = (t) => (n) => (e) => {
  const r = nl(t, n), o = nl(t, e), i = hT(r, o);
  return { from: r, to: i };
};
function rl(t) {
  const n = t.length;
  if (n === 0) return { x: 0, y: 0 };
  let e = 0, r = 0;
  for (let o = 0; o < n; o++)
    e += t[o].x, r += t[o].y;
  return { x: e / n, y: r / n };
}
function pT(t, n) {
  const e = n.x - t.x, r = n.y - t.y, o = Math.sqrt(e * e + r * r);
  return o <= 1e-4 ? { x: 1, y: 0 } : { x: e / o, y: r / o };
}
function mT(t, n) {
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
function $T(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
const ol = (t) => (n) => (e) => (r) => {
  const o = n.length;
  if (o === 0) return [];
  const i = rl(n), s = rl(e), u = pT(i, s), c = new Array(o);
  let a = 1 / 0, l = -1 / 0;
  for (let g = 0; g < o; g++) {
    const p = n[g], $ = (p.x - i.x) * u.x + (p.y - i.y) * u.y;
    c[g] = $, $ < a && (a = $), $ > l && (l = $);
  }
  const d = l - a;
  let _ = new Array(o);
  for (let g = 0; g < o; g++) {
    const p = n[g], $ = e[g];
    if ($ === void 0) {
      _[g] = p;
      continue;
    }
    const h = d <= 1e-4 ? 0 : r.maxDelay * (1 - (c[g] - a) / d), m = Math.max(1e-4, 1 - h), y = $T((t - h) / m), x = y * y * (3 - 2 * y);
    _[g] = {
      x: p.x + ($.x - p.x) * x,
      y: p.y + ($.y - p.y) * x
    };
  }
  for (let g = 0; g < r.smoothPasses; g++)
    _ = mT(0.5, _);
  return _;
}, Xe = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, il = /* @__PURE__ */ w(no)(0), sl = (t) => (n) => (e) => {
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
}, yT = /* @__PURE__ */ w((t) => (n) => t + n.len)(0), af = (t) => {
  const n = Bt((e) => v, (e) => (r) => N("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...xt(Jt(1, t.length, t))((e) => [2, e.x, e.y]), 5];
  f();
}, xT = (t) => (n) => {
  const e = Xe(n)(Xe(t.w / 2)(t.h / 2));
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
}, vT = (t) => {
  const n = Bt((e) => v, (e) => (r) => N("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...xt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, wT = (t) => {
  const n = { x: t.x, y: t.y, w: t.w, h: t.h };
  if (t.shape === "Cylinder")
    return wd(n);
  if (t.shape === "Parallelogram")
    return yd(n);
  if (t.shape === "Diamond")
    return Jd(n);
  if (t.shape === "Ellipse")
    return $d(n);
  if (t.shape === "Document")
    return xd(n);
  if (t.shape === "Cloud")
    return bd(n)(7);
  if (t.shape === "Rectangle")
    return xT(n)(7);
  f();
}, Jn = (t) => (n) => (e) => Q((r) => {
  const o = M(r) / M(e);
  return { x: t.x + (n.x - t.x) * o, y: t.y + (n.y - t.y) * o };
})(zt(0, e - 1 | 0)), NT = (t) => {
  const n = ye(t.w * 0.18)(t.h * 0.6);
  return [
    ...Jn({ x: t.x + n, y: t.y })({ x: t.x + t.w, y: t.y })(16),
    ...Jn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w - n, y: t.y + t.h })(16),
    ...Jn({ x: t.x + t.w - n, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(16),
    ...Jn({ x: t.x, y: t.y + t.h })({ x: t.x + n, y: t.y })(16)
  ];
}, Io = (t) => (n) => {
  const e = Xe(t)(Xe(n.w / 2)(n.h / 2));
  return { ...n, x: n.x + e, y: n.y + e, w: n.w - 2 * e, h: n.h - 2 * e };
}, Uc = (t) => (n) => {
  const e = n.y - t.y, r = n.x - t.x;
  return Bn(r * r + e * e);
}, TT = (t) => pn((n) => (e) => ({ a: n, b: e, len: Uc(n)(e) }), t, Jt(1, t.length, t)), JT = (t) => (n) => {
  const e = n.length - 1 | 0, r = e >= 0 && e < n.length ? N("Just", n[e]) : v, o = (() => {
    if (r.tag === "Just")
      return [r._1];
    if (r.tag === "Nothing")
      return [];
    f();
  })(), i = 0 < n.length ? N("Just", n[0]) : v, s = (() => {
    if (i.tag === "Just")
      return i._1;
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    f();
  })(), u = n.length;
  return u < 3 ? n : [
    s,
    ...xt(zt(1, u - 2 | 0))((c) => {
      const a = c + 1 | 0, l = a >= 0 && a < n.length ? N("Just", n[a]) : v, d = c >= 0 && c < n.length ? N("Just", n[c]) : v, _ = c - 1 | 0, g = _ >= 0 && _ < n.length ? N("Just", n[_]) : v;
      if (g.tag === "Just" && d.tag === "Just" && l.tag === "Just") {
        const p = d._1, $ = Uc(p)(l._1), h = Uc(g._1)(p), m = Xe(t)($ / 2), y = Xe(t)(h / 2), x = $ > 0 ? m / $ : 0, J = p.x + (l._1.x - p.x) * x, T = p.y + (l._1.y - p.y) * x, b = h > 0 ? y / h : 0, L = p.x + (g._1.x - p.x) * b, A = p.y + (g._1.y - p.y) * b;
        return Q((E) => {
          const O = M(E) / M(10), H = 1 - O;
          return { x: H * H * L + 2 * H * O * p.x + O * O * J, y: H * H * A + 2 * H * O * p.y + O * O * T };
        })(zt(0, 10));
      }
      return [];
    }),
    ...o
  ];
}, bT = (t) => (n) => (e) => (r) => (o) => Q((i) => {
  const s = M(i) / M(o), u = 1 - s, c = s * s * s, a = 3 * u * s * s, l = 3 * u * u * s, d = u * u * u;
  return { x: d * t.x + l * n.x + a * e.x + c * r.x, y: d * t.y + l * n.y + a * e.y + c * r.y };
})(zt(0, o - 1 | 0)), kT = (t) => [
  ...Jn({ x: t.x, y: t.y })({ x: t.x + t.w, y: t.y })(12),
  ...Jn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h * 0.85 })(12),
  ...bT({ x: t.x + t.w, y: t.y + t.h * 0.85 })({ x: t.x + t.w * 0.66, y: t.y + t.h * 1.05 })({ x: t.x + t.w * 0.34, y: t.y + t.h * 0.65 })({
    x: t.x,
    y: t.y + t.h * 0.85
  })(32),
  ...Jn({ x: t.x, y: t.y + t.h * 0.85 })({ x: t.x, y: t.y })(12)
], ul = (t) => (n) => Q((e) => {
  const r = 6.283185307179586 * M(e) / M(64);
  return { x: t.x + n * Vn(r), y: t.y + n * ee(r) };
})(zt(0, 63)), Su = (t) => (n) => {
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
}, LT = (t) => {
  const n = t.y + t.h / 2, e = ye(t.h * 0.4)(t.w * 0.2);
  return [
    ...Jn({ x: t.x + e, y: t.y })({ x: t.x + t.w - e, y: t.y })(10),
    ...Jn({ x: t.x + t.w - e, y: t.y })({ x: t.x + t.w, y: n })(8),
    ...Jn({ x: t.x + t.w, y: n })({ x: t.x + t.w - e, y: t.y + t.h })(8),
    ...Jn({ x: t.x + t.w - e, y: t.y + t.h })({ x: t.x + e, y: t.y + t.h })(10),
    ...Jn({ x: t.x + e, y: t.y + t.h })({ x: t.x, y: n })(8),
    ...Jn({ x: t.x, y: n })({ x: t.x + e, y: t.y })(8)
  ];
}, Ed = (t) => {
  const n = t.length;
  return n === 0 ? { x: 0, y: 0 } : { x: il(Q((e) => e.x)(t)) / M(n), y: il(Q((e) => e.y)(t)) / M(n) };
}, us = (t) => (n) => (e) => (r) => (o) => Q((i) => {
  const s = e + (r - e) * (M(i) / M(o));
  return { x: t.x + n * Vn(s), y: t.y + n * ee(s) };
})(zt(0, o - 1 | 0)), cl = (t) => (n) => {
  const e = Xe(t)(Xe(n.w / 2)(n.h / 2));
  return [
    ...Jn({ x: n.x + e, y: n.y })({ x: n.x + n.w - e, y: n.y })(6),
    ...us({ x: n.x + n.w - e, y: n.y + e })(e)(4.71238898038469)(6.283185307179586)(12),
    ...Jn({ x: n.x + n.w, y: n.y + e })({ x: n.x + n.w, y: n.y + n.h - e })(6),
    ...us({ x: n.x + n.w - e, y: n.y + n.h - e })(e)(0)(1.5707963267948966)(12),
    ...Jn({ x: n.x + n.w - e, y: n.y + n.h })({ x: n.x + e, y: n.y + n.h })(6),
    ...us({ x: n.x + e, y: n.y + n.h - e })(e)(1.5707963267948966)(3.141592653589793)(12),
    ...Jn({ x: n.x, y: n.y + n.h - e })({ x: n.x, y: n.y + e })(6),
    ...us({ x: n.x + e, y: n.y + e })(e)(3.141592653589793)(4.71238898038469)(12)
  ];
}, Ws = (t) => (n) => (e) => (r) => (o) => (i) => Q((s) => {
  const u = r + (o - r) * (M(s) / M(i));
  return { x: t.x + n * Vn(u), y: t.y + e * ee(u) };
})(zt(0, i - 1 | 0)), ET = (t) => {
  const n = t.h * 0.38;
  return [
    ...xt(Td(Nd(vd)({
      x: t.x,
      y: t.y - n,
      w: t.w,
      h: n
    }))(t.y))((e) => {
      const r = Xr(e.p2.y - e.c.cy)(e.p2.x - e.c.cx), o = Xr(e.p1.y - e.c.cy)(e.p1.x - e.c.cx);
      return Ws({ x: e.c.cx, y: e.c.cy })(e.c.r)(e.c.r)(o)(r > o ? r : r + 6.283185307179586)(16);
    }),
    ...Jn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h })(8),
    ...Jn({ x: t.x + t.w, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(12),
    ...Jn({ x: t.x, y: t.y + t.h })({ x: t.x, y: t.y })(8)
  ];
}, ST = (t) => {
  const n = Xe(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.y + t.h + 5 - n - 2, i = t.x + e;
  return [
    ...Ws({ x: i, y: r })(e)(n)(3.141592653589793)(6.283185307179586)(24),
    ...Jn({ x: t.x + t.w, y: r })({ x: t.x + t.w, y: o })(12),
    ...Ws({ x: i, y: o })(e)(n)(0)(3.141592653589793)(24),
    ...Jn({ x: t.x, y: o })({ x: t.x, y: r })(12)
  ];
}, ro = (t) => (n) => n.shape === "Cylinder" ? ST(n) : n.shape === "Parallelogram" ? NT(n) : n.shape === "Diamond" ? LT(n) : n.shape === "Ellipse" ? cl(ye(n.w)(n.h) / 2)(n) : n.shape === "Document" ? kT(n) : n.shape === "Cloud" ? ET(n) : cl(t)(n), CT = (t) => {
  const n = Xe(t.h * 0.075)(t.w * 0.075), e = t.w / 2;
  return Ws({ x: t.x + e, y: t.y + n })(e)(n)(0)(3.141592653589793)(24);
}, AT = (t) => (n) => (e) => w((r) => (o) => {
  const i = r.pos + o.len, s = e < i ? (e - r.pos) / o.len : 1, u = { x: o.a.x + (o.b.x - o.a.x) * s, y: o.a.y + (o.b.y - o.a.y) * s }, c = n > r.pos ? (n - r.pos) / o.len : 0, a = { x: o.a.x + (o.b.x - o.a.x) * c, y: o.a.y + (o.b.y - o.a.y) * c }, l = r.points.length - 1 | 0, d = l >= 0 && l < r.points.length ? (() => {
    const _ = r.points[l].x - a.x;
    return (_ < 0 ? -_ < 1e-4 : _ < 1e-4) && (() => {
      const g = r.points[l].y - a.y;
      return g < 0 ? -g < 1e-4 : g < 1e-4;
    })();
  })() ? Pt(r.points)(u) : [...r.points, a, u] : [a, u];
  return o.len <= 0 || i <= n || r.pos >= e ? { ...r, pos: i } : { pos: i, points: d };
})({ pos: 0, points: [] })(t).points, PT = (t) => (n) => (e) => {
  const r = Bt((o) => v, (o) => (i) => N("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just") {
    const o = TT(t), i = yT(o), s = sl(0)(i)(n * i), u = sl(0)(i)(e * i);
    return u <= s ? [] : AT(o)(s)(u);
  }
  f();
}, GT = (t) => (n) => (e) => (r) => {
  const o = r.x - e.x, i = r.y - e.y, s = n.x - t.x, u = n.y - t.y, c = e.x - t.x, a = e.y - t.y, l = s * i - u * o, d = (c * i - a * o) / l, _ = (c * u - a * s) / l;
  return (l < 0 ? -l < 1e-9 : l < 1e-9) ? v : d >= 0 && d <= 1 && _ >= 0 && _ <= 1 ? N("Just", d) : v;
}, FT = (t) => (n) => (e) => {
  const r = Ct((o) => (i) => ot.compare(o.t)(i.t))(yt((o) => {
    const i = GT(n)(e)(o._1)(o._2);
    return i.tag === "Just" ? N("Just", { t: i._1, p: { x: n.x + (e.x - n.x) * i._1, y: n.y + (e.y - n.y) * i._1 } }) : v;
  })(pn(In, t, [...Jt(1, t.length, t), ...Jt(0, 1, t)])));
  return 0 < r.length ? N("Just", r[0].p) : v;
}, al = (t) => (n) => {
  const e = ke(n);
  if (e.tag === "Nothing")
    return n;
  if (e.tag === "Just") {
    const r = e._1.init.length - 1 | 0;
    if (r >= 0 && r < e._1.init.length) {
      const o = FT(t)(e._1.init[r])(e._1.last);
      if (o.tag === "Just")
        return Pt(e._1.init)(o._1);
      if (o.tag === "Nothing")
        return n;
      f();
    }
    return n;
  }
  f();
}, Jr = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Vc = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, IT = (t) => (n) => (e) => {
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
}, RT = (t) => (n) => {
  const e = Jr(0)(t.y + 4 - n.y) + Jr(0)(n.y + n.h - (t.y + t.h - 4)), r = Jr(0)(t.x + 4 - n.x) + Jr(0)(n.x + n.w - (t.x + t.w - 4));
  return r * n.h + e * n.w + r * e;
}, BT = (t) => (n) => {
  const e = t.y + t.h - 6, r = t.y + 6, o = t.x + 14, i = t.x + t.w - 14, s = w(Jr)(0)(Q((u) => o - 10 < u.x + u.w + 12 && i + 10 > u.x - 12 && r - 10 < u.y + u.h + 12 && e + 10 > u.y - 12 ? Vc((u.x + u.w + 12 - (o - 10)) / 0.7071067811865476)((e + 10 - (u.y - 12)) / 0.7071067811865476) : 0)(n));
  return { ...t, x: t.x + s * 0.7071067811865476, y: t.y - s * 0.7071067811865476 };
}, zT = (t) => (n) => {
  const e = Vc(t.x + t.w)(n.x + n.w) - Jr(t.x)(n.x), r = Vc(t.y + t.h)(n.y + n.h) - Jr(t.y)(n.y);
  return t.x < n.x + n.w && t.x + t.w > n.x && t.y < n.y + n.h && t.y + t.h > n.y ? e * r : 0;
}, fl = (t) => (n) => (e) => (r) => {
  const o = t + 4, i = Jr(0)(n - 8), s = o + i - e;
  return e <= i ? IT(o)(s)(r) : t + (n - e) / 2;
}, ll = (t) => (n) => ({ ...n, x: fl(t.x)(t.w)(n.w)(n.x), y: fl(t.y)(t.h)(n.h)(n.y) }), DT = (t) => {
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
}, QT = (t) => (n) => (e) => (r) => (o) => {
  const i = o.y + o.h / 2 - e.token.y, s = o.y - r.y;
  return (() => {
    const u = o.x + o.w / 2 - e.token.x, c = o.x - r.x;
    return 1e6 * RT(t)(o) + 1e4 * w((a) => (l) => a + zT(o)(l))(0)(n) + 0.05 * (c * c + s * s) + 0.01 * (u * u + i * i);
  })() + (o.y > e.token.y ? 100 : 0);
}, HT = (t) => (n) => (e) => (r) => {
  const o = (s) => {
    const u = ll(t)(s);
    return { rect: u, score: QT(t)(n)(e)(r)(u) };
  }, i = Bt((s) => v, (s) => (u) => N("Just", { head: s, tail: u }), [r, e.rect, ...DT(e)]);
  if (i.tag === "Nothing")
    return ll(t)(r);
  if (i.tag === "Just")
    return w((s) => (u) => {
      const c = o(u);
      return c.score < s.score ? c : s;
    })(o(i._1.head))(i._1.tail).rect;
  f();
}, WT = (t) => (n) => (e) => w((r) => (o) => {
  const i = BT(o.rect)(r.obstacles), s = i.x >= t.x + 4 && i.y >= t.y + 4 && i.x + i.w <= t.x + t.w - 4 && i.y + i.h <= t.y + t.h - 4 ? i : HT(t)(r.obstacles)(o)(i);
  return { acc: K(G)(o.id)(s)(r.acc), obstacles: Pt(r.obstacles)(s) };
})({ acc: I, obstacles: n })(e).acc, ff = (t) => t, nr = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Mr = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, OT = /* @__PURE__ */ jl(sg)(qt), qT = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, XT = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, gl = /* @__PURE__ */ ff("SegMove"), YT = /* @__PURE__ */ ff("SegLine"), UT = /* @__PURE__ */ ff("SegQuad"), dl = { offset: 0.4, passes: 1, rMax: 1.5 }, Sd = (t) => vn(Le(t.x * 7919 + t.y * 3001 + t.w * 113 + t.h * 17 + 1)) * -1640531535 | 0, Os = (t) => (n) => (e) => () => {
  t.push(3), t.push(n.x), t.push(n.y), t.push(e.x), t.push(e.y);
}, Cu = (t) => (n) => () => {
  t.push(1), t.push(n.x), t.push(n.y);
}, sr = (t) => (n) => () => {
  t.push(2), t.push(n.x), t.push(n.y);
}, Ni = /* @__PURE__ */ (() => {
  const t = w((n) => (e) => ((n * 31 | 0) + vn(Le(e.x * 100)) | 0) + vn(Le(e.y * 100)) | 0)(1);
  return (n) => t(n) * -1640531535 | 0;
})(), VT = (t) => {
  const n = [];
  let e = 0, r = { x: 0, y: 0 };
  for (; e < t.length; ) {
    const o = e, i = r, s = o >= 0 && o < t.length ? N("Just", t[o]) : v;
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
        n.push({ kind: gl, m: i, c: i, p: u, len: 0 }), r = u, e = o + 3 | 0;
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
        n.push({ kind: YT, m: i, c: i, p: u, len: Bn(c * c + a * a) }), r = u, e = o + 3 | 0;
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
          kind: UT,
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
          len: Bn(c * c + a * a) * 1.05
        }), r = u, e = o + 5 | 0;
        continue;
      }
      if (s._1 === 5) {
        n.push({ kind: gl, m: i, c: i, p: i, len: 0 }), e = o + 1 | 0;
        continue;
      }
      e = t.length;
      continue;
    }
    f();
  }
  return n;
}, KT = (t) => (n) => {
  const e = n.length - 1 | 0, r = e < 1 ? [] : Jt(0, e, n), o = (() => {
    const s = r.length - 1 | 0;
    return s >= 0 && s < r.length ? N("Just", r[s]) : v;
  })(), i = n.length - 1 | 0;
  if (i >= 0 && i < n.length && o.tag === "Just") {
    const s = n[i].y - o._1.y, u = n[i].x - o._1.x, c = Bn(u * u + s * s);
    return c <= 1e-4 ? n : Pt((() => {
      const a = n.length - 1 | 0;
      return a < 1 ? [] : Jt(0, a, n);
    })())({ x: n[i].x + u / c * t, y: n[i].y + s / c * t });
  }
  return n;
}, MT = (t) => (n) => (e) => An(w((r) => (o) => {
  const i = Tn(0)(t)(r.prng), s = Tn(0)(6.283185307179586)(i.prng);
  return { prng: s.prng, out: [{ x: o.x + i.value * Vn(s.value), y: o.y + i.value * ee(s.value) }, ...r.out] };
})({ prng: n, out: [] })(e).out), jT = (t) => (n) => (e) => {
  if (n.kind === "SegMove")
    return Cu(t)(n.p);
  if (n.kind === "SegLine")
    return sr(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  if (n.kind === "SegQuad")
    return sr(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  f();
}, ZT = (t) => (n) => {
  if (n.kind === "SegMove")
    return Cu(t)(n.p);
  if (n.kind === "SegLine")
    return sr(t)(n.p);
  if (n.kind === "SegQuad")
    return Os(t)(n.c)(n.p);
  f();
}, Cd = (t) => (n) => {
  const e = VT(n), r = w((u) => (c) => u + c.len)(0)(e) * nr(0)(Mr(1)(t)), o = [];
  let i = 0, s = 0;
  for (; s < e.length; ) {
    const u = s, c = i;
    if (u >= 0 && u < e.length) {
      if (c + e[u].len <= r) {
        const a = e[u];
        ZT(o)(a)(), i = c + a.len, s = u + 1 | 0;
        continue;
      }
      if (c >= r) {
        s = e.length;
        continue;
      }
      jT(o)(e[u])((r - c) / nr(e[u].len)(1e-4))();
    }
    s = e.length;
  }
  return o;
}, _l = { offset: 1.5, passes: 2, rMax: 14, overshoot: 2.5 }, Ad = (t) => (n) => (e) => (r) => {
  const o = r.y - e.y, i = e.y - n.y, s = r.x - e.x, u = Bn(s * s + o * o), c = e.x - n.x, a = Bn(c * c + i * i), l = Mr(t.rMax * (kh(a > 0 && u > 0 ? nr(-1)(Mr(1)((c * s + i * o) / (a * u))) : 1) / 3.141592653589793))(0.4 * Mr(a)(u));
  return { inP: a > 0 ? { x: e.x - c / a * l, y: e.y - i / a * l } : e, curr: e, outP: u > 0 ? { x: e.x + s / u * l, y: e.y + o / u * l } : e };
}, Pd = (t) => (n) => {
  const e = n.length, r = [], o = 0 < n.length ? N("Just", n[0]) : v;
  if (o.tag === "Just" ? Cu(r)(o._1)() : o.tag === "Nothing" || f(), e >= 3) {
    let s = 1;
    for (; s <= (e - 2 | 0); ) {
      const u = s, c = u + 1 | 0;
      if (c >= 0 && c < n.length) {
        if (u >= 0 && u < n.length) {
          const a = u - 1 | 0;
          if (a >= 0 && a < n.length) {
            const l = Ad(t)(n[a])(n[u])(n[c]);
            sr(r)(l.inP)(), Os(r)(l.curr)(l.outP)();
          }
        }
        s = u + 1 | 0;
        continue;
      }
      s = u + 1 | 0;
    }
  }
  const i = n.length - 1 | 0;
  return i >= 0 && i < n.length && e >= 2 && sr(r)(n[i])(), r;
}, tJ = (t) => (n) => (e) => (r) => (o) => {
  if (o.length < 4)
    return Pd(t)(o);
  const i = 0 < o.length ? N("Just", o[0]) : v, s = (() => {
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = o.length - 1 | 0, c = ar(ar(n)(u) + u | 0)(u), a = (g) => {
    const p = ar(g + u | 0)(u);
    return p >= 0 && p < o.length ? o[p] : s;
  }, l = Q((g) => Ad(t)(a((c + g | 0) - 1 | 0))(a(c + g | 0))(a((c + g | 0) + 1 | 0)))(zt(
    0,
    u - 1 | 0
  )), d = [], _ = 0 < l.length ? N("Just", l[0]) : v;
  if (_.tag === "Just")
    if (Cu(d)(_._1.outP)(), OT((() => {
      const g = Bt((p) => v, (p) => ($) => N("Just", $), l);
      if (g.tag === "Nothing")
        return [];
      if (g.tag === "Just")
        return g._1;
      f();
    })())((g) => {
      const p = sr(d)(g.inP);
      return () => (p(), Os(d)(g.curr)(g.outP)());
    })(), e)
      sr(d)(_._1.inP)(), Os(d)(_._1.curr)(_._1.outP)(), d.push(5);
    else {
      const g = l.length - 1 | 0;
      g >= 0 && g < l.length ? sr(d)((() => {
        const p = 1 - r;
        return { x: l[g].outP.x + (_._1.inP.x - l[g].outP.x) * p, y: l[g].outP.y + (_._1.inP.y - l[g].outP.y) * p };
      })())() : sr(d)(_._1.inP)();
    }
  else _.tag === "Nothing" || f();
  return d;
}, wo = (t) => (n) => (e) => (r) => {
  const o = qT(1)(r.length - 1 | 0), i = Tn(0)(M(o))(qc("shape")(n)), s = XT(o - 1 | 0)(vn(Le(i.value))), u = i.prng;
  return Q((c) => {
    const a = Tn(0)(1)(qc(un(c))(u)), l = Tn(-0.18)(0.3)(a.prng), d = a.value < 0.7, _ = Tn(0.5)(0.85)(l.prng), g = MT(t.offset)(_.prng)(r);
    return { path: e ? tJ(t)(s)(d)(l.value)(g) : Pd(t)(g), alpha: _.value };
  })(zt(0, t.passes - 1 | 0));
}, nJ = (t) => (n) => (e) => wo(t)(n)(!0)([
  { x: e.x, y: e.y },
  { x: e.x + e.w, y: e.y },
  { x: e.x + e.w, y: e.y + e.h },
  { x: e.x, y: e.y + e.h },
  { x: e.x, y: e.y }
]), eJ = (t) => (n) => (e) => {
  const r = nr(0)(Mr(1)(e)), o = n.h / M(4), i = nr(6)(o * 1.4);
  return yt((s) => s)(Q((s) => {
    if (r < nr(0)(M(s) / M(4) - 0.05))
      return v;
    const u = qc(un(s))(t), c = nr(0)(M(s) / M(4) - 0.05), a = ar(s)(2) === 0, l = a ? n.x - 2 : n.x + n.w + 2, d = a ? n.x + n.w + 2 : n.x - 2, _ = n.y + (M(s) + 0.5) * o;
    return N(
      "Just",
      {
        path: Cd(nr(0)(Mr(1)((r - c) / nr(1e-4)(Mr(1)(M(s + 1 | 0) / M(4) + 0.05) - c))))((() => {
          const g = { rMax: 2, offset: 0.6, passes: 1 }, p = An(w((h) => (m) => {
            const y = Tn(-o * 0.08)(o * 0.08)(h.prng);
            return { prng: y.prng, out: [{ x: l + (d - l) * (M(m) / M(4)), y: _ + y.value }, ...h.out] };
          })({ prng: u, out: [] })(zt(0, 4)).out), $ = p.length < 2 ? [] : wo(g)(u)(!1)(p);
          return 0 < $.length ? $[0].path : [];
        })()),
        width: i,
        alpha: 1
      }
    );
  })(zt(0, 3)));
}, pc = (t, n, e) => ({ tag: t, _1: n, _2: e }), Gd = (t) => t, mc = (t, n, e) => ({ tag: t, _1: n, _2: e }), qs = (t) => (n) => (e) => {
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
}, hn = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Kn = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Ve);
  return (n) => t(ge("IterNode", n, Ue));
})(), Ye = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, rJ = qt.foldMap(Wh), Xs = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, oJ = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, _s = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Fd = /* @__PURE__ */ cn(G)(qt), Id = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, iJ = /* @__PURE__ */ pg(G), sJ = (t) => (e) => {
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
}, lf = /* @__PURE__ */ Gd("LabelsShown"), uJ = /* @__PURE__ */ Gd("LabelsHidden"), Rd = (t) => {
  const n = t.Monad0().Bind1(), e = t.popTransform, r = t.popAlpha;
  return (o) => (i) => (s) => (u) => (c) => n.bind(t.pushAlpha(o.fadeAlpha))(() => n.bind(t.pushTransform({
    tx: i * (1 - o.popScale),
    ty: s * (1 - o.popScale),
    sx: o.popScale,
    sy: o.popScale
  }))(() => n.bind(t.pushTransform({ tx: 0, ty: u.y * (1 - o.flipY), sx: 1, sy: o.flipY }))(() => n.bind(c)(() => n.bind(e)(() => n.bind(e)(() => r))))));
}, he = (t) => {
  const n = t.Apply0();
  return (e) => w((r) => (o) => n.apply(n.Functor0().map((i) => oa)(r))(e(o)))(t.pure());
}, Bd = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = Fo(o)(i)(r), a = 0 < t.length ? N("Just", t[0]) : v, l = (() => {
    if (a.tag === "Just")
      return a._1;
    if (a.tag === "Nothing")
      return u;
    f();
  })(), d = t.length - 1 | 0, _ = d >= 0 && d < t.length ? N("Just", t[d]) : v, g = (() => {
    if (_.tag === "Just")
      return _._1;
    if (_.tag === "Nothing")
      return s;
    f();
  })(), p = el(128)(ro(4)(Io(2)(n)))(ul(l)(6)), $ = l.x - u.x, h = 2 * (() => {
    const B = l.y - u.y;
    return ($ < 0 ? -$ : $) + (B < 0 ? -B : B);
  })(), m = g.x - s.x, y = 2 * (() => {
    const B = g.y - s.y;
    return (m < 0 ? -m : m) + (B < 0 ? -B : B);
  })(), x = h + gu(t) + y, J = x <= 1e-4 ? 1 : 1 - y / x, T = x <= 1e-4 ? 0 : h / x, b = J - T, L = el(128)(ul(g)(6))(ro(4)(Io(2)(e))), A = { maxDelay: 0.4, smoothPasses: 2 }, E = ai(t)(qs(0)(1)(b <= 1e-4 ? 0 : (c - T) / b)), O = (() => {
    if (E.tag === "Just")
      return E._1;
    if (E.tag === "Nothing")
      return l;
    f();
  })(), H = (() => {
    if (J >= 1)
      return 0;
    const B = (c - J) / (1 - J), Z = B < 0 ? 0 : B > 1 ? 1 : B;
    return Z * Z * (3 - 2 * Z);
  })(), F = (() => {
    if (T <= 1e-4)
      return 1;
    const B = c / T, Z = B < 0 ? 0 : B > 1 ? 1 : B;
    return Z * Z * (3 - 2 * Z);
  })();
  return c < T ? mc("PolyShape", ol(F)(p.from)(p.to)(A)) : c >= J ? mc("PolyShape", ol(H)(L.from)(L.to)(A)) : mc("CircleShape", O, 6);
}, gf = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Bd(t)(n)(e)(r)(o)(i);
  if (s.tag === "PolyShape")
    return Ed(s._1);
  if (s.tag === "CircleShape")
    return s._1;
  f();
}, df = /* @__PURE__ */ (() => {
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
        chipText: je,
        nodeFill: ln,
        nodeStroke: je,
        text: je,
        edge: je,
        arrowFill: je,
        tokenOutsideFill: je,
        tokenOutsideStroke: ln,
        tokenInside: ln,
        tokenInsideStroke: ln,
        tokenInsideBlend: ds,
        tokenInsideAlpha: 1,
        chipPillFill: je,
        chipPillText: ln,
        chipHairline: { r: 26, g: 26, b: 26, a: 90 },
        trailDot: je,
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
        nodeFill: je,
        nodeStroke: n,
        text: n,
        edge: n,
        arrowFill: n,
        tokenOutsideFill: ln,
        tokenOutsideStroke: ln,
        tokenInside: ln,
        tokenInsideStroke: ln,
        tokenInsideBlend: ds,
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
        shadowDot: ln,
        chip: ln,
        chipShadow: { r: 0, g: 0, b: 0, a: 120 },
        chipText: o,
        nodeFill: o,
        nodeStroke: ln,
        text: ln,
        edge: ln,
        arrowFill: ln,
        tokenOutsideFill: ln,
        tokenOutsideStroke: ln,
        tokenInside: ln,
        tokenInsideStroke: ln,
        tokenInsideBlend: M0,
        tokenInsideAlpha: 0.35,
        chipPillFill: ln,
        chipPillText: o,
        chipHairline: { r: 255, g: 255, b: 255, a: 120 },
        trailDot: ln,
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
        tokenInsideBlend: M0,
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
        tokenOutsideStroke: ln,
        tokenInside: ln,
        tokenInsideStroke: ln,
        tokenInsideBlend: ds,
        tokenInsideAlpha: 1,
        chipPillFill: s,
        chipPillText: ln,
        chipHairline: { r: 60, g: 66, b: 78, a: 90 },
        trailDot: s,
        wobble: !1,
        fontFamily: "Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    f();
  };
})(), Kc = (t) => (n) => xt(Kn(t.nodes))((e) => {
  const r = hn(e._1)(n.nodes);
  return r.tag === "Just" && Eu(r._1).alpha > 0 ? wT(e._2) : [];
}), cJ = (t) => (n) => (e) => [
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
  ...Kc(n)(e)
], aJ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = Pr.traverse(r);
  return (i) => (s) => {
    const u = Gr(s), c = 0.32 * i.size;
    return o((a) => e.bind(a === 0 ? r.pure(0) : t.measureText(i)(En(a)(s)))((l) => e.bind(t.measureText(i)(En(a + 1 | 0)(s)))((d) => e.bind(t.measureInk(i)(a >= 0 && a < u.length ? Li(u[a]) : " "))((_) => r.pure({ x: l, w: d - l, up: _.ascent - c, down: _.descent + c })))))(zt(
      0,
      u.length - 1 | 0
    ));
  };
}, fJ = (t) => (n) => {
  const e = (o) => (o.x - n.x) * (o.x - n.x) + (o.y - n.y) * (o.y - n.y), r = w((o) => (i) => e(i) < e(o) ? i : o)({ x: t.x, y: t.y })([{ x: t.x, y: t.y }, { x: t.x + t.w, y: t.y }, { x: t.x, y: t.y + t.h }, { x: t.x + t.w, y: t.y + t.h }]);
  return Q((o) => {
    const i = M(o) / 5;
    return { x: r.x + (n.x - r.x) * i, y: r.y + (n.y - r.y) * i };
  })([1, 2, 3, 4]);
}, _f = (t) => {
  const n = pu(`
`)(t);
  return n.length === 0 ? [""] : n;
}, lJ = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = Fo(o)(i)(r), a = 0 < t.length ? N("Just", t[0]) : v, l = (() => {
    if (a.tag === "Just")
      return a._1;
    if (a.tag === "Nothing")
      return u;
    f();
  })(), d = t.length - 1 | 0, _ = d >= 0 && d < t.length ? N("Just", t[d]) : v, g = (() => {
    if (_.tag === "Just")
      return _._1;
    if (_.tag === "Nothing")
      return s;
    f();
  })(), p = l.x - u.x, $ = 2 * (() => {
    const A = l.y - u.y;
    return (p < 0 ? -p : p) + (A < 0 ? -A : A);
  })(), h = g.x - s.x, m = 2 * (() => {
    const A = g.y - s.y;
    return (h < 0 ? -h : h) + (A < 0 ? -A : A);
  })(), y = $ + gu(t) + m, x = y <= 1e-4 ? 1 : 1 - m / y, J = y <= 1e-4 ? 0 : $ / y, T = x - J, b = ai(t)(qs(0)(1)(T <= 1e-4 ? 0 : (c - J) / T)), L = (() => {
    if (b.tag === "Just")
      return b._1;
    if (b.tag === "Nothing")
      return l;
    f();
  })();
  return c < J ? pc("InsideRect", Io(2)(n)) : c >= x ? pc("InsideRect", Io(2)(e)) : pc("InsideBall", L, 6);
}, gJ = { offset: 0.8, passes: 2, rMax: 5 }, dJ = (t) => {
  const n = t.Monad0().Applicative0(), e = he(n);
  return (r) => (o) => (i) => (s) => {
    const u = { color: s, width: 1, lineJoin: Pn, lineCap: Se }, c = { color: i, flat: !0 }, a = (l) => t.drawRoundedRect({ x: l.x, y: l.y, w: l.w, h: l.h })(4)(N("Just", c))(N("Just", u));
    return e((l) => {
      if (l._2.tag === "Travelling") {
        const d = Ye(l._2._1.edge)(r.edges), _ = hn(l._2._1.target)(r.nodes), g = hn(l._2._1.source)(r.nodes);
        if (g.tag === "Just" && _.tag === "Just" && d.tag === "Just") {
          const p = lJ((() => {
            if (l._2._1.direction === "Forward")
              return d._1;
            if (l._2._1.direction === "Backward")
              return An(d._1);
            f();
          })())(g._1)(_._1)(l._2._1.progress)(l._2._1.holdPre)(l._2._1.holdPost);
          if (p.tag === "InsideRect")
            return a(p._1);
          if (p.tag === "InsideBall")
            return t.fillStrokePath(Su(p._1)(p._2))(c)(u);
          f();
        }
        return n.pure();
      }
      if (l._2.tag === "Filling") {
        const d = hn(l._2._1.node)(r.nodes);
        if (d.tag === "Just")
          return a(Io(2)(d._1));
        if (d.tag === "Nothing")
          return n.pure();
        f();
      }
      return n.pure();
    })(Kn(o.tokens));
  };
}, hl = (t) => (n) => (e) => (r) => t.strokePath((() => {
  const o = Bt(
    (i) => v,
    (i) => (s) => N("Just", { head: i, tail: s }),
    Q((i) => i.pt)(vh(
      (i) => (s) => {
        const u = M(s) / M(72), c = Tn(-0.18)(0.18)(i.prng), a = Tn(-0.1)(0.1)(c.prng), l = Tn(-0.07)(0.07)(a.prng), d = e * (0.05 + 0.55 * u) * (1 + a.value), _ = u * 28.274333882308138 + c.value;
        return { prng: l.prng, pt: { x: n.x + Vn(_) * d + l.value * e, y: n.y + ee(_) * d + l.value * e } };
      },
      { prng: 137, pt: { x: n.x, y: n.y } },
      zt(0, 72)
    ))
  );
  if (o.tag === "Just")
    return [1, o._1.head.x, o._1.head.y, ...rJ((i) => [2, i.x, i.y])(o._1.tail)];
  if (o.tag === "Nothing")
    return [];
  f();
})())({ color: r, width: 5.5, lineJoin: Pn, lineCap: Qe }), _J = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = he(n.Applicative0());
  return (i) => (s) => (u) => o((c) => e.bind(t.pushAlpha(c.alpha))(() => e.bind(t.strokePath(c.path)({
    color: i.nodeFill,
    width: c.width,
    lineJoin: Pn,
    lineCap: Qe
  }))(() => r)))(eJ(Sd(s) + 7777 | 0)(s)(u));
}, zd = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = n.Applicative0(), i = he(o), s = t.popClip, u = he(o), c = Pr.traverse(o), a = aJ(t), l = _J(t), d = t.popTransform;
  return (_) => (g) => (p) => ($) => (h) => (m) => (y) => (x) => (J) => {
    const T = (C) => e.bind(t.pushAlpha(C.alpha))(() => e.bind(t.strokePath(C.path)({
      color: p.nodeStroke,
      width: 2,
      lineJoin: Pn,
      lineCap: Qe
    }))(() => r)), b = { family: p.fontFamily, size: p.wobble ? 15 : 11, weight: p.wobble ? 800 : 500 }, L = pu(`
`)(x.label === "" ? y : x.label), A = L.length === 0 ? [""] : L, E = b.size * 1.2, O = x.shape === "Cylinder" ? t.strokePath(WN({ x: x.x, y: x.y, w: x.w, h: x.h }))({
      color: p.nodeStroke,
      width: 1.25,
      lineJoin: Pn,
      lineCap: Se
    }) : o.pure(), H = (x.shape === "Cylinder" ? (x.y + (x.y + x.h + 5 - 2 * ye(x.h * 0.075)(x.w * 0.075))) / 2 : (x.y + x.y + x.h) / 2) - M(A.length) * E / 2 + E / 2, F = J.tag === "PloppingOut" && p.wobble ? J._1 : -1, B = F >= 0, Z = Eu(J), tt = B ? { alpha: 1, scale: 1 } : Z, Y = x.x + x.w / 2, z = x.y + x.h / 2, S = e.bind(t.pushAlpha(tt.alpha * $))(() => e.bind(t.pushTransform({
      tx: Y * (1 - tt.scale),
      ty: z * (1 - tt.scale),
      sx: tt.scale,
      sy: tt.scale
    }))(() => {
      const C = { x: x.x, y: x.y, w: x.w, h: x.h }, q = {
        color: p.nodeStroke,
        width: p.wobble ? 2 : 1.25 * g,
        lineJoin: Pn,
        lineCap: p.wobble ? Qe : Se
      };
      return e.bind((() => {
        if (p.wobble) {
          if (x.shape === "Rectangle")
            return i(T)(nJ(_l)(Sd(C))(C));
          const P = ro(7)(x);
          return e.bind(i(T)((() => {
            const D = Ni(P);
            return P.length < 4 ? [] : wo(dl)(D)(!0)(P);
          })()))(() => u((D) => i(T)((() => {
            const W = Ni(D);
            return D.length < 2 ? [] : wo(dl)(W)(!1)(D);
          })()))(x.shape === "Cylinder" ? [CT(x)] : []));
        }
        return e.bind(uf(t)(x.shape)(C)(7)(N("Just", { color: p.nodeFill, flat: !1 }))(N(
          "Just",
          q
        )))(() => O);
      })())(() => e.bind((() => {
        if (m.tag === "Just" && p.wobble && !B) {
          const P = m._1;
          return e.bind(c(a(b))(A))((D) => {
            const W = Ct((st) => (ft) => ot.compare(st.x)(ft.x)), V = vn(Le(x.x * 7919 + x.y * 3001)) * -1640531535 | 0, U = Tn(5)(7.5)(V), X = Tn(0)(U.value)(U.prng), et = -(1 + 2 * Tn(-1)(1)(X.prng).value * 3.141592653589793 / 180), nt = (st, ft, Nt, vt, kt) => W(yt((Qt) => Qt)([
              et * ft + st >= vt && et * ft + st <= kt ? N("Just", { x: ft, y: et * ft + st }) : v,
              et * Nt + st >= vt && et * Nt + st <= kt ? N("Just", { x: Nt, y: et * Nt + st }) : v,
              (() => {
                const Qt = (vt - st) / et;
                return Qt >= ft && Qt <= Nt ? N("Just", { x: Qt, y: vt }) : v;
              })(),
              (() => {
                const Qt = (kt - st) / et;
                return Qt >= ft && Qt <= Nt ? N("Just", { x: Qt, y: kt }) : v;
              })()
            ])), j = U.value, rt = ar(P.frameHash)(3), ct = rt === 0 ? { r: 200, g: 35, b: 30, a: 220 } : rt === 1 ? { r: 35, g: 150, b: 80, a: 220 } : { r: 30, g: 80, b: 200, a: 220 }, dt = x.x + x.w / 2, Ot = se(Rt((st) => (ft) => Rt((() => {
              const Nt = H + M(st) * E, vt = dt - w((kt) => (Qt) => kt + Qt.w)(0)(ft) / 2;
              return (kt) => (Qt) => {
                const fe = b.size * 0.1, On = kt - 1 | 0, zn = On >= 0 && On < ft.length && kt > 0 ? (ft[On].x + ft[On].w + Qt.x) / 2 : Qt.x - fe;
                return {
                  x: vt + zn - 1,
                  y: Nt - Qt.up - 1,
                  w: Xs(0)((() => {
                    const Ft = kt + 1 | 0;
                    return Ft >= 0 && Ft < ft.length && kt < (ft.length - 1 | 0) ? (Qt.x + Qt.w + ft[Ft].x) / 2 - zn : Qt.x + Qt.w + fe - zn;
                  })()) + 2,
                  h: Qt.up + Qt.down + 2
                };
              };
            })())(ft))(D)), bt = x.y + 4, Dt = x.x + x.w - 4, _t = x.x + 4, wt = bt - et * _t + X.value, pt = x.y + x.h - 4, $t = xt(xt(Rt((st) => (ft) => {
              const Nt = (ft.from.x + ft.to.x) / 2, vt = (ft.from.y + ft.to.y) / 2, kt = Tn(-1)(1)(V + (911 * (st + 1 | 0) | 0) | 0), Qt = Tn(-3)(5)(kt.prng), fe = kt.value * 3.141592653589793 / 180, On = Vn(fe), zn = ee(fe), Ft = (St) => ({ x: Nt + (St.x - Nt) * On - (St.y - vt) * zn, y: vt + (St.x - Nt) * zn + (St.y - vt) * On });
              return {
                from: (() => {
                  const St = Ft(ft.from), oe = St.y - vt, qn = St.x - Nt, Xn = Bn(qn * qn + oe * oe), Gn = Xn < 1e-4 ? 1 : (Xn + Qt.value) / Xn;
                  return { x: Nt + qn * Gn, y: vt + oe * Gn };
                })(),
                to: (() => {
                  const St = Ft(ft.to), oe = Tn(-3)(5)(Qt.prng).value, qn = St.y - vt, Xn = St.x - Nt, Gn = Bn(Xn * Xn + qn * qn), Ce = Gn < 1e-4 ? 1 : (Gn + oe) / Gn;
                  return { x: Nt + Xn * Ce, y: vt + qn * Ce };
                })()
              };
            })(yt((st) => {
              const ft = nt(wt + M(st) * j, _t, Dt, bt, pt);
              return ft.length === 2 ? N("Just", { from: ft[0], to: ft[1] }) : v;
            })(zt(0, _s(1)(vn(Le((pt - et * Dt - wt) / j)))))))((st) => at(
              (ft) => ft.to.x - ft.from.x > 1,
              w((ft) => (Nt) => xt(ft)((vt) => {
                const kt = nt(vt.from.y - et * vt.from.x, Nt.x, Nt.x + Nt.w, Nt.y, Nt.y + Nt.h);
                return kt.length === 2 ? kt[0].x > vt.from.x + 1e-3 && kt[1].x < vt.to.x - 1e-3 ? [{ from: vt.from, to: kt[0] }, { from: kt[1], to: vt.to }] : kt[0].x <= vt.from.x + 1e-3 && kt[1].x < vt.to.x - 1e-3 ? [{ from: kt[1], to: vt.to }] : kt[0].x > vt.from.x + 1e-3 && kt[1].x >= vt.to.x - 1e-3 ? [{ from: vt.from, to: kt[0] }] : [] : [vt];
              }))([st])(Ot)
            )))((st) => (() => {
              const ft = st.to.x - st.from.x;
              return Bn(2) * (ft >= 0 ? ft : -ft) <= 28;
            })() ? [st] : [
              { from: st.from, to: { x: st.from.x + (st.to.x - st.from.x) * 0.495, y: st.from.y + (st.to.y - st.from.y) * 0.495 } },
              { from: { x: st.from.x + (st.to.x - st.from.x) * 0.505, y: st.from.y + (st.to.y - st.from.y) * 0.505 }, to: st.to }
            ]), lt = $t.length, gt = (st) => Xs(0)(oJ(1)(P.t * M(lt) - M(st)));
            return e.bind(t.pushClip(af(ro(7)(x)))(Hs))(() => e.bind(i((st) => {
              const ft = st._1, Nt = Tn(1.4)(1.9)(V + (1303 * (ft + 1 | 0) | 0) | 0), vt = Tn(0.35)(0.8)(Nt.prng), kt = i((Qt) => e.bind(t.pushAlpha(Qt.alpha * vt.value))(() => e.bind(t.strokePath(Cd(gt(ft))(Qt.path))({
                color: ct,
                width: Nt.value,
                lineJoin: Pn,
                lineCap: Qe
              }))(() => r)))(wo({ ..._l, rMax: 0, offset: 0.5 })(V + (53 * (ft + 1 | 0) | 0) | 0)(!1)([st._2.from, st._2.to]));
              return gt(ft) > 0 ? kt : o.pure();
            })(Rt(In)($t)))(() => s));
          });
        }
        return o.pure();
      })())(() => e.bind((() => {
        if (_ === "LabelsShown") {
          const P = e.bind(t.pushAlpha(h))(() => e.bind(i((D) => t.drawText({
            x: x.x + x.w / 2,
            y: H + M(D._1) * E,
            content: D._2,
            font: b,
            color: p.text,
            align: Do,
            baseline: Cr
          }))(Rt(In)(A)))(() => r));
          return h > 0 ? P : o.pure();
        }
        if (_ === "LabelsHidden")
          return o.pure();
        f();
      })())(() => e.bind((() => {
        const P = l(p)(C)(F);
        return B ? P : o.pure();
      })())(() => e.bind(d)(() => r)))));
    }));
    return tt.alpha * $ > 0 ? S : o.pure();
  };
}, Dd = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = zd(t), i = t.popAlpha, s = he(e);
  return (u) => (c) => (a) => {
    const l = { ...u, nodeFill: u.text, text: u.nodeFill, nodeStroke: u.nodeFill };
    return s((d) => {
      const _ = hn(d._1)(a.nodes), g = hn(d._1)(c.nodes), p = (() => {
        if (g.tag === "Just" && _.tag === "Just") {
          const $ = _._1, h = g._1;
          return r.bind(t.pushAlpha(d._2))(() => r.bind(o(lf)(1)(l)(1)(1)(v)(d._1)(h)($))(() => i));
        }
        return e.pure();
      })();
      return d._2 > 0 ? p : e.pure();
    })(Kn(a.nodeInvert));
  };
}, hJ = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = he(e);
  return (i) => (s) => (u) => {
    const c = { family: i.fontFamily, size: 11, weight: 500 };
    return o((a) => {
      if (a._2 === "" || (() => {
        const _ = Ye(a._1)(u.edges);
        return _.tag === "Nothing" || !(_.tag === "Just" && _._1.tag === "Extended");
      })())
        return e.pure();
      const l = Ye(a._1)(s.edges), d = (() => {
        if (l.tag === "Just")
          return ai(l._1)(0.5);
        if (l.tag === "Nothing")
          return v;
        f();
      })();
      if (d.tag === "Nothing")
        return e.pure();
      if (d.tag === "Just") {
        const _ = d._1;
        return r.bind(t.measureText(c)(a._2))((g) => {
          const p = g + 12;
          return r.bind(t.drawRoundedRect({ x: _.x - p / 2, y: _.y - 8.5, w: p, h: 17 })(3)(N(
            "Just",
            { color: i.chipPillFill, flat: !0 }
          ))(v))(() => t.drawText({
            x: _.x,
            y: _.y,
            content: a._2,
            font: c,
            color: i.chipPillText,
            align: Do,
            baseline: Cr
          }));
        });
      }
      f();
    })(Kn(s.edgeLabels));
  };
}, pJ = (t) => {
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
    })(), $ = Bd(c)(a)(l)(d)(_)(g);
    if ($.tag === "CircleShape")
      return i ? hl(t)($._1)($._2)({ r: 200, g: 35, b: 30, a: 220 }) : t.fillStrokePath(Su($._1)($._2))({ color: s, flat: !0 })({
        color: u,
        width: 1,
        lineJoin: Pn,
        lineCap: Se
      });
    if ($.tag === "PolyShape" && i && $._1.length >= 3)
      return r.bind(t.pushAlpha(p))(() => r.bind(hl(t)(Ed($._1))(6)({
        r: 200,
        g: 35,
        b: 30,
        a: 220
      }))(() => o));
    if ($.tag === "PolyShape")
      return i ? e.pure() : $._1.length >= 3 ? t.fillStrokePath(af($._1))({ color: s, flat: !0 })({
        color: u,
        width: 1,
        lineJoin: Pn,
        lineCap: Se
      }) : e.pure();
    f();
  };
}, mJ = (t) => {
  const n = t.Monad0().Bind1(), e = t.popAlpha;
  return (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
    const l = Fo(c)(a)(u), d = { x: i.x + i.w / 2, y: i.y + i.h / 2 }, _ = { x: s.x + s.w / 2, y: s.y + s.h / 2 }, g = (p, $) => n.bind(t.pushAlpha($))(() => n.bind(t.fillStrokePath(Su(p)(6))({
      color: r,
      flat: !0
    })({ color: o, width: 1, lineJoin: Pn, lineCap: Se }))(() => e));
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
}, Ys = (t) => {
  const n = pJ(t), e = mJ(t), r = t.Monad0().Applicative0(), o = he(r);
  return (i) => (s) => (u) => (c) => (a) => o((l) => {
    if (l._2.tag === "Travelling") {
      const d = hn(l._2._1.target)(s.nodes), _ = hn(l._2._1.source)(s.nodes);
      if (_.tag === "Just" && d.tag === "Just") {
        const g = Ye(l._2._1.edge)(s.edges);
        if (g.tag === "Just")
          return n(i)(c)(a)((() => {
            if (l._2._1.direction === "Forward")
              return g._1;
            if (l._2._1.direction === "Backward")
              return An(g._1);
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
      const d = hn(l._2._1.node)(s.nodes);
      if (d.tag === "Just")
        return t.fillStrokePath(af(ro(4)(Io(2)(d._1))))({
          color: c,
          flat: !0
        })({ color: a, width: 1, lineJoin: Pn, lineCap: Se });
      if (d.tag === "Nothing")
        return r.pure();
      f();
    }
    return r.pure();
  })(Kn(u.tokens));
}, Qd = (t) => {
  const n = Ys(t), e = t.Monad0(), r = e.Bind1(), o = Ys(t), i = dJ(t), s = t.popClip, u = t.popBlend, c = t.popLayer, a = e.Applicative0(), l = he(a), d = t.popAlpha;
  return (_) => (g) => (p) => ($) => {
    const h = g.wobble ? n(!0)(p)($)(g.tokenInside)(g.tokenInsideStroke) : r.bind(t.insideTokenStyle(_))((m) => {
      if (m === "GenieSilhouette")
        return o(!1)(p)($)(g.tokenInside)(g.tokenInsideStroke);
      if (m === "ConvexAbsorb")
        return i(p)($)(g.tokenInside)(g.tokenInsideStroke);
      f();
    });
    if (g.tokenInsideBlend === "Difference")
      return r.bind(t.pushLayer(LN))(() => r.bind(t.pushBlend(ds))(() => r.bind(t.pushClip(Kc(p)($))(Hs))(() => r.bind(h)(() => r.bind(s)(() => r.bind(u)(() => r.bind(c)(() => r.bind(t.pushLayer(EN))(() => r.bind(l((m) => {
        const y = hn(m._1)($.nodes);
        return y.tag === "Just" && Eu(y._1).alpha > 0 ? uf(t)(m._2.shape)({ x: m._2.x, y: m._2.y, w: m._2.w, h: m._2.h })(7)(N(
          "Just",
          { color: ln, flat: !1 }
        ))(v) : a.pure();
      })(Kn(p.nodes)))(() => c)))))))));
    if (g.tokenInsideBlend === "Normal")
      return r.bind(t.pushClip(Kc(p)($))(Hs))(() => r.bind(t.pushAlpha(g.tokenInsideAlpha))(() => r.bind(h)(() => r.bind(d)(() => s))));
    f();
  };
}, Hd = (t) => {
  const n = t.Monad0().Bind1(), e = Ys(t), r = Ys(t), o = t.popClip, i = t.popLayer;
  return (s) => (u) => (c) => (a) => n.bind(t.pushLayer(kN))(() => n.bind(t.pushClip(cJ(u)(c)(a))(CN))(() => n.bind(s.wobble ? e(!0)(c)(a)(s.tokenOutsideFill)(s.tokenOutsideStroke) : r(!1)(c)(a)(s.tokenOutsideFill)(s.tokenOutsideStroke))(() => n.bind(o)(() => i))));
}, $J = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = he(r);
  return (i) => (s) => (u) => (c) => (a) => (l) => {
    const d = yu(l).length, _ = M(d + 1 | 0), g = (m) => {
      const y = (u * _ - M(m)) / 1.5, x = y < 0 ? 0 : y > 1 ? 1 : y;
      return x * x * (3 - 2 * x);
    }, $ = ((m) => {
      let y = m, x = !0, J;
      for (; x; ) {
        const T = y;
        if (T >= d) {
          x = !1, J = T;
          continue;
        }
        if (g(T) >= 1) {
          y = T + 1 | 0;
          continue;
        }
        x = !1, J = T;
      }
      return J;
    })(0), h = $ >= d ? [] : Or((m) => g(m) > 0)(zt($, d - 1 | 0)).init;
    return e.bind((() => {
      const m = t.drawText({
        x: c,
        y: a,
        content: En($)(l),
        font: i,
        color: s,
        align: Wc,
        baseline: Cr
      });
      return $ > 0 ? m : r.pure();
    })())(() => o((m) => e.bind(t.measureText(i)(En(m)(l)))((y) => {
      const x = g(m);
      return t.drawText({
        x: c + y,
        y: a - (1 - x) * 10,
        content: En(1)(ui(dr(En(m)(l)))(l)),
        font: i,
        color: { ...s, a: vn(Le(x * M(s.a))) },
        align: Wc,
        baseline: Cr
      });
    }))(h));
  };
}, Au = (t) => (n) => (e) => (r) => {
  const o = Q((p) => M(_s(1)(yu(p).length)))(r), i = Xs(1)(w(no)(0)(o)), s = Fo(n)(e)(t), u = s * i, c = _s(1)(r.length), l = ((p) => ($) => (h) => {
    let m = p, y = $, x = h, J = !0, T;
    for (; J; ) {
      const b = m, L = y, E = Bt((O) => v, (O) => (H) => N("Just", { head: O, tail: H }), x);
      if (E.tag === "Nothing") {
        J = !1, T = _s(0)(c - 1 | 0);
        continue;
      }
      if (E.tag === "Just") {
        if (L + E._1.head >= u) {
          J = !1, T = b;
          continue;
        }
        m = b + 1 | 0, y = L + E._1.head, x = E._1.tail;
        continue;
      }
      f();
    }
    return T;
  })(0)(0)(o), d = w(no)(0)(l < 1 ? [] : Jt(0, l, o)), _ = d / i;
  if (l >= 0 && l < o.length) {
    const p = (d + o[l]) / i;
    return {
      line: l >= 0 && l < r.length ? r[l] : "",
      phaseInLabel: (() => {
        if (p <= _)
          return 1;
        const $ = (s - _) / (p - _);
        return $ < 0 ? 0 : $ > 1 ? 1 : $;
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
}, Wd = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(Au(r)(0)(0)(Q(ug)(o)).line))((i) => {
    const s = i + 28;
    return n.Applicative0().pure({ x: e.x + e.w / 2 - s / 2, y: e.y - 25.2 - 14, w: s, h: 25.2 });
  });
}, yJ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Wd(t), o = n.Applicative0(), i = Pr.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => Fd(yt((a) => a)(c)))(i((c) => {
    if (c._2.tag === "Filling" && c._2._1.labels.length !== 0) {
      const a = hn(c._2._1.node)(s.nodes);
      if (a.tag === "Just")
        return e.bind(r(a._1)(c._2._1.progress)(c._2._1.labels))((l) => o.pure(N("Just", k(c._1, l))));
      if (a.tag === "Nothing")
        return o.pure(v);
      f();
    }
    return o.pure(v);
  })(Kn(u.tokens)));
}, xJ = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => (i) => (s) => (u) => (c) => {
    const a = gf(e)(r)(o)(i)(s)(u);
    return n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(Au(i)(s)(u)(xt(c)(_f)).line))((l) => n.Applicative0().pure({
      x: a.x + 14 + l / 2 - l / 2 - 14,
      y: a.y - 6 - 8 - 6.6 - 6,
      w: l + 28,
      h: 25.2
    }));
  };
}, vJ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = xJ(t), o = n.Applicative0(), i = Pr.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => Fd(yt((a) => a)(c)))(i((c) => {
    if (c._2.tag === "Travelling" && c._2._1.labels.length !== 0) {
      const a = hn(c._2._1.target)(s.nodes), l = hn(c._2._1.source)(s.nodes), d = Ye(c._2._1.edge)(s.edges);
      if (d.tag === "Just" && l.tag === "Just" && a.tag === "Just") {
        const _ = (() => {
          if (c._2._1.direction === "Forward")
            return d._1;
          if (c._2._1.direction === "Backward")
            return An(d._1);
          f();
        })(), g = gf(_)(l._1)(a._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost);
        return e.bind(r(_)(l._1)(a._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost)(c._2._1.labels))((p) => o.pure(N(
          "Just",
          k(c._1, { id: c._1, rect: p, token: g })
        )));
      }
    }
    return o.pure(v);
  })(Kn(u.tokens)));
}, hf = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = vJ(t), o = yJ(t);
  return (i) => (s) => (u) => e.bind(r(s)(u))((c) => e.bind(o(s)(u))((a) => n.Applicative0().pure(WT({
    x: i.vx,
    y: i.vy,
    w: i.vw,
    h: i.vh
  })([
    ...yt((l) => {
      const d = hn(l._1)(u.nodes);
      return d.tag === "Just" && Eu(d._1).alpha > 0 ? N("Just", { x: l._2.x, y: l._2.y, w: l._2.w, h: l._2.h }) : v;
    })(Kn(s.nodes)),
    ...(() => {
      const l = (d, _) => {
        if (d.tag === "Leaf")
          return _;
        if (d.tag === "Node")
          return l(d._5, jt("Cons", d._4, l(d._6, _)));
        f();
      };
      return Gt(tn.foldr, l(a, Zt));
    })()
  ])(yt((l) => Id(l)(c))((() => {
    const l = (d) => {
      if (d.tag === "Leaf")
        return I;
      if (d.tag === "Node")
        return Yt("Node", d._1, d._2, d._3, void 0, l(d._5), l(d._6));
      f();
    };
    return Ct(G.compare)(Gt(ae.foldr, l(c)));
  })())))));
}, Od = (t) => (n) => (e) => {
  const r = fi(6)(0.55)(qs(0)(1)((1 - t) / 0.06)), o = t > 0.94, i = o && e > 1e-4, s = fi(6)(0.55)(qs(0)(1)(t / 0.06)), u = t < 0.06, c = u && n > 1e-4, a = o && e <= 1e-4;
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
}, wJ = (t) => {
  const n = Rd(t), e = t.Monad0().Bind1();
  return (r) => (o) => (i) => (s) => (u) => {
    const c = Au(i)(0)(0)(xt(s)(_f)), a = { x: u.x + u.w / 2, y: u.y + u.h / 2 }, l = [1, a.x, u.y + u.h, 2, o.x + o.w / 2, o.y];
    return n(Od(i)(0)(0))(u.x)(u.y + u.h)(a)(e.bind(t.drawRoundedRect({
      x: u.x,
      y: u.y + 1.5,
      w: u.w,
      h: u.h
    })(6)(N("Just", { color: r.chipShadow, flat: !0 }))(v))(() => e.bind(t.drawRoundedRect({
      x: u.x,
      y: u.y,
      w: u.w,
      h: u.h
    })(6)(N("Just", { color: r.chip, flat: !0 }))(N(
      "Just",
      { color: r.chipHairline, width: 1, lineJoin: Pn, lineCap: Se }
    )))(() => e.bind(t.strokePath(l)({
      color: r.chipHairline,
      width: 1,
      lineJoin: Pn,
      lineCap: Se
    }))(() => t.drawText({
      x: a.x,
      y: a.y,
      content: c.line,
      font: { family: r.fontFamily, size: 11, weight: 500 },
      color: r.chipText,
      align: Do,
      baseline: Cr
    })))));
  };
}, NJ = (t) => {
  const n = Wd(t), e = wJ(t);
  return (r) => (o) => (i) => (s) => (u) => t.Monad0().Bind1().bind(n(i)(s)(u))((c) => e(r)(i)(s)(u)(c));
}, TJ = (t) => {
  const n = Rd(t), e = t.Monad0(), r = e.Bind1(), o = he(e.Applicative0()), i = $J(t);
  return (s) => (u) => (c) => (a) => (l) => (d) => (_) => (g) => (p) => {
    const $ = Au(l)(d)(_)(xt(g)(_f)), h = $.line, m = $.phaseInLabel / 0.45, y = m < 0 ? 0 : m > 1 ? 1 : m, x = p.w, J = p.y, T = p.x, b = T + 14, L = p.h, A = J + L / 2;
    return n(Od(l)(d)(_))(T)(J + L)({ x: T + x / 2, y: A })(r.bind(o((E) => t.fillPath(Su(E)(1.5))({
      color: s.trailDot,
      flat: !0
    }))(fJ(p)(gf(u)(c)(a)(l)(d)(_))))(() => r.bind(t.drawRoundedRect({ x: T, y: J, w: x, h: L })(3)(N(
      "Just",
      { color: s.chipPillFill, flat: !0 }
    ))(v))(() => i({ family: s.fontFamily, size: 11, weight: 500 })(s.chipPillText)(y)(b)(A)(h))));
  };
}, pf = (t) => {
  const n = TJ(t), e = t.Monad0(), r = e.Applicative0(), o = NJ(t), i = e.Bind1(), s = he(r), u = t.popLayer;
  return (c) => (a) => (l) => (d) => i.bind(t.pushLayer(SN))(() => i.bind(s((_) => {
    if (_._2.tag === "Travelling") {
      if (_._2._1.labels.length !== 0) {
        const g = hn(_._2._1.target)(a.nodes), p = hn(_._2._1.source)(a.nodes), $ = Ye(_._2._1.edge)(a.edges), h = Id(_._1)(d);
        if (h.tag === "Just" && $.tag === "Just" && p.tag === "Just" && g.tag === "Just")
          return n(c)((() => {
            if (_._2._1.direction === "Forward")
              return $._1;
            if (_._2._1.direction === "Backward")
              return An($._1);
            f();
          })())(p._1)(g._1)(_._2._1.progress)(_._2._1.holdPre)(_._2._1.holdPost)(_._2._1.labels)(h._1);
      }
      return r.pure();
    }
    if (_._2.tag === "Filling" && _._2._1.labels.length !== 0) {
      const g = hn(_._2._1.node)(a.nodes);
      if (g.tag === "Just")
        return o(c)(a)(g._1)(_._2._1.progress)(_._2._1.labels);
      if (g.tag === "Nothing")
        return r.pure();
      f();
    }
    return r.pure();
  })(Kn(l.tokens)))(() => u));
}, qd = (t) => {
  const n = hf(t), e = pf(t);
  return (r) => (o) => (i) => (s) => t.Monad0().Bind1().bind(n(o)(i)(s))((u) => e(r)(i)(s)(u));
}, JJ = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => {
    const i = o.length - 1 | 0, s = i < 1 ? [] : Jt(0, i, o), u = s.length - 1 | 0, c = u >= 0 && u < s.length ? N("Just", s[u]) : v, a = o.length - 1 | 0, l = a >= 0 && a < o.length ? N("Just", o[a]) : v;
    if (l.tag === "Just" && c.tag === "Just") {
      const d = Tn(0.78)(1.18)(Ni(o) + 19 | 0), _ = Tn(0.4)(0.62)(d.prng), g = r.wobble ? 8.75 * _.value : 4.375, p = Tn(0.4)(0.62)(_.prng), $ = r.wobble ? 8.75 * p.value : 4.375, h = l._1.y - c._1.y, m = l._1.x - c._1.x, y = Bn(m * m + h * h), x = h / y, J = -x, T = m / y, b = l._1.x + T * 0.875, L = l._1.y + x * 0.875, A = r.wobble ? 8.75 * d.value : 8.75, E = b - T * A, O = L - x * A, H = E + J * g, F = O + T * g, B = [1, b, L, 2, E + J * 4.375, O + T * 4.375, 2, E - J * 4.375, O - T * 4.375, 5], Z = E - J * $, tt = O - T * $, Y = { color: r.arrowFill, width: 2, lineJoin: Pn, lineCap: Qe };
      return y <= 1e-4 ? e.pure() : r.wobble ? n.Bind1().bind(t.strokePath([1, H, F, 2, b, L])(Y))(() => t.strokePath([1, Z, tt, 2, b, L])(Y)) : t.fillPath(B)({ color: r.arrowFill, flat: !0 });
    }
    return e.pure();
  };
}, bJ = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = he(e), i = t.popAlpha, s = JJ(t);
  return (u) => (c) => (a) => (l) => {
    const d = JT(8)(a);
    if (l.hi <= l.lo)
      return e.pure();
    const _ = PT(d)(l.lo)(l.hi);
    if (_.length === 0)
      return e.pure();
    const g = { color: u.edge, width: u.wobble ? 2 : 0.9375, lineJoin: Pn, lineCap: Qe }, p = u.wobble ? Tn(-10)(4)(Ni(_)).value : 0, $ = u.wobble ? KT(p)(_) : _;
    return r.bind(u.wobble ? o((h) => r.bind(t.pushAlpha(h.alpha))(() => r.bind(t.strokePath(h.path)(g))(() => i)))((() => {
      const h = Ni(_);
      return $.length < 2 ? [] : wo(gJ)(h)(!1)($);
    })()) : t.strokePath(vT(_))(g))(() => {
      const h = s(u)($);
      return l.hi >= 0.999 ? h : e.pure();
    });
  };
}, Xd = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = bJ(t), i = t.popAlpha, s = he(e);
  return (u) => (c) => (a) => {
    const l = (d) => {
      const _ = Mt((g) => d.x >= g._2.x - 1 && d.x <= g._2.x + g._2.w + 1 && d.y >= g._2.y - 1 && d.y <= g._2.y + g._2.h + 1)(Kn(c.nodes));
      return _.tag === "Just" ? N("Just", _._1._2) : v;
    };
    return s((d) => {
      const _ = Ye(d._1)(a.edges);
      if (_.tag === "Just") {
        const g = _._1, p = Ye(d._1)(a.edgeFadeAlpha), $ = (() => {
          if (p.tag === "Nothing")
            return 1;
          if (p.tag === "Just")
            return p._1;
          f();
        })(), h = r.bind(t.pushAlpha($))(() => r.bind(o(u)(d._1)((() => {
          const m = (() => {
            if (0 < d._2.length) {
              const x = l(d._2[0]);
              if (x.tag === "Just")
                return An(al(ro(7)(x._1))(An(d._2)));
            }
            return d._2;
          })(), y = m.length - 1 | 0;
          if (y >= 0 && y < m.length) {
            const x = l(m[y]);
            if (x.tag === "Just")
              return al(ro(7)(x._1))(m);
          }
          return m;
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
        return $ > 0 ? h : e.pure();
      }
      if (_.tag === "Nothing")
        return e.pure();
      f();
    })(Kn(c.edges));
  };
}, kJ = (t) => (n) => {
  const e = (i) => {
    const s = hn(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !ue(
        (c) => 0 < c._2.length && c._2[0].x >= u.x && c._2[0].x <= u.x + u.w && c._2[0].y >= u.y && c._2[0].y <= u.y + u.h,
        Kn(t.edges)
      );
    }
    f();
  }, r = w((i) => (s) => (i * 31 | 0) + De(s) | 0)(5381)(Gr(n.frameTitle)), o = (i) => {
    const s = hn(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !ue(
        (c) => {
          const a = c._2.length - 1 | 0;
          return a >= 0 && a < c._2.length && c._2[a].x >= u.x && c._2[a].x <= u.x + u.w && c._2[a].y >= u.y && c._2[a].y <= u.y + u.h;
        },
        Kn(t.edges)
      );
    }
    f();
  };
  return w((i) => (s) => {
    const u = s._2;
    return iJ((c) => {
      if (c.tag === "Nothing")
        return N("Just", u);
      if (c.tag === "Just")
        return N(
          "Just",
          { t: Xs(c._1.t)(u.t), angle: u.t >= c._1.t ? u.angle : c._1.angle, bigCircle: c._1.bigCircle || u.bigCircle, frameHash: c._1.frameHash }
        );
      f();
    })(s._1)(i);
  })(I)(xt(Kn(n.tokens))((i) => {
    if (i._2.tag === "Filling") {
      const s = i._2._1.node;
      return [
        k(
          s,
          {
            t: 1,
            angle: (() => {
              const u = yt((c) => (() => {
                const a = hn(s)(t.nodes), l = c._2.length - 1 | 0;
                return l >= 0 && l < c._2.length && a.tag === "Just" && c._2[l].x >= a._1.x && c._2[l].x <= a._1.x + a._1.w && c._2[l].y >= a._1.y && c._2[l].y <= a._1.y + a._1.h;
              })() ? N("Just", c._2) : v)(Kn(t.edges));
              if (0 < u.length) {
                const c = u[0].length - 1 | 0, a = c < 1 ? [] : Jt(0, c, u[0]), l = a.length - 1 | 0;
                if (l >= 0 && l < a.length) {
                  const d = u[0].length - 1 | 0;
                  return d >= 0 && d < u[0].length ? Xr(u[0][d].y - a[l].y)(u[0][d].x - a[l].x) : 0;
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
                const s = Ye(i._2._1.edge)(t.edges);
                if (s.tag === "Just") {
                  const u = s._1.length - 1 | 0, c = u < 1 ? [] : Jt(0, u, s._1), a = c.length - 1 | 0;
                  if (a >= 0 && a < c.length) {
                    const l = s._1.length - 1 | 0;
                    return l >= 0 && l < s._1.length ? Xr(s._1[l].y - c[a].y)(s._1[l].x - c[a].x) : 0;
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
                const s = Ye(i._2._1.edge)(t.edges);
                if (s.tag === "Just")
                  return 1 < s._1.length && 0 < s._1.length ? Xr(s._1[1].y - s._1[0].y)(s._1[1].x - s._1[0].x) : 0;
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
}, LJ = (t) => w((n) => (e) => (n * 31 | 0) + De(e) | 0)(5381)(Gr(t.frameTitle)), Yd = (t) => {
  const n = zd(t), e = t.Monad0().Applicative0(), r = he(e);
  return (o) => (i) => (s) => (u) => (c) => {
    const a = LJ(c), l = kJ(u)(c);
    return r((d) => {
      const _ = hn(d._1)(c.nodes);
      if (_.tag === "Just")
        return n(o)(i)(s)((() => {
          const g = hn(d._1)(c.nodeFadeAlpha);
          if (g.tag === "Nothing")
            return 1;
          if (g.tag === "Just")
            return g._1;
          f();
        })())((() => {
          const g = hn(d._1)(c.nodeLabelFadeAlpha);
          if (g.tag === "Nothing")
            return 1;
          if (g.tag === "Just")
            return g._1;
          f();
        })())((() => {
          const g = hn(d._1)(l);
          return g.tag === "Just" ? N("Just", g._1) : g.tag === "Nothing" && sJ(d._1)(c.visited) ? N("Just", { t: 1, angle: 0, bigCircle: !1, frameHash: a }) : v;
        })())(d._1)(d._2)(_._1);
      if (_.tag === "Nothing")
        return e.pure();
      f();
    })(Kn(u.nodes));
  };
}, EJ = (t) => (n) => (e) => {
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
}, pl = (t) => (n) => (e) => {
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
}, ml = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Mc = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, SJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, CJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, AJ = (t) => (n) => {
  const e = ee(t.angle), r = Vn(t.angle);
  return { a: r, b: e, c: 0, d: 1, e: -n * r, f: n * e - t.boxHeight / 2 };
}, PJ = (t) => [t.box.ground.a, t.box.ground.b, t.box.ground.c, t.box.ground.d, t.box.top.a, t.box.top.b, t.box.top.c, t.box.top.d], No = (t) => (n) => {
  const e = (r) => EJ(0)(255)(vn(er(M(r) * t)));
  return { r: e(n.r), g: e(n.g), b: e(n.b), a: n.a };
}, Qn = (t) => (n) => (e) => (r) => ({ x: (n - e) * Vn(t.angle), y: (n + e) * ee(t.angle) - r }), jr = (t) => {
  const n = Bt((e) => v, (e) => (r) => N("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...xt(n._1.tail)((e) => [2, e.x, e.y]), 5];
  f();
}, GJ = (t) => (n) => (e) => (r) => (o) => {
  const i = (() => {
    if (t === "Forward")
      return o;
    if (t === "Backward")
      return An(o);
    f();
  })();
  if (0 < i.length) {
    const u = ai(i)(pl(0)(1)(Fo(e)(r)(n)));
    if (u.tag === "Nothing")
      return i[0];
    if (u.tag === "Just")
      return u._1;
    f();
  }
  const s = ai(i)(pl(0)(1)(Fo(e)(r)(n)));
  if (s.tag === "Nothing")
    return { x: 0, y: 0 };
  if (s.tag === "Just")
    return s._1;
  f();
}, FJ = (t) => {
  const n = Bt((e) => v, (e) => (r) => N("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...xt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, IJ = (t) => {
  const n = Bt((e) => v, (e) => (r) => N("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { vx: 0, vy: 0, vw: 0, vh: 0 };
  if (n.tag === "Just") {
    const e = w((r) => (o) => ({ minX: ml(r.minX)(o.x), minY: ml(r.minY)(o.y), maxX: Mc(r.maxX)(o.x), maxY: Mc(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { vx: e.minX - 40, vy: e.minY - 40, vw: e.maxX - e.minX + 80, vh: e.maxY - e.minY + 80 };
  }
  f();
}, RJ = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => {
    const i = o.box, s = o.np, u = { color: r.nodeStroke, width: 1, lineJoin: Pn, lineCap: Se };
    return n.bind(t.fillStrokePath(jr([i.ground.d, i.ground.c, i.top.c, i.top.d]))({ color: No(0.66)(r.nodeFill), flat: !0 })(u))(() => n.bind(t.fillStrokePath(jr([
      i.ground.b,
      i.ground.c,
      i.top.c,
      i.top.b
    ]))({ color: No(0.82)(r.nodeFill), flat: !0 })(u))(() => n.bind(t.fillStrokePath(jr([i.top.a, i.top.b, i.top.c, i.top.d]))({
      color: No(1)(r.nodeFill),
      flat: !0
    })(u))(() => t.drawTextAffine(AJ(e)(s.y + s.h))({
      x: s.x + s.w / 2,
      y: 0,
      content: s.label,
      font: { family: r.fontFamily, size: 11, weight: 600 },
      color: r.text,
      align: Do,
      baseline: Cr
    }))));
  };
}, BJ = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => (i) => {
    const s = { color: r.tokenOutsideStroke, width: 1, lineJoin: Pn, lineCap: Se }, u = i.x - 5.5, c = i.x + 5.5, a = i.y - 5.5, l = i.y + 5.5, d = o + 11, _ = Qn(e)(u)(a)(d), g = Qn(e)(c)(a)(d), p = Qn(e)(c)(l)(d), $ = Qn(e)(u)(l)(d), h = Qn(e)(c)(l)(o), m = Qn(e)(c)(a)(o);
    return n.bind(t.fillStrokePath(jr([Qn(e)(u)(l)(o), h, p, $]))({ color: No(0.66)(r.tokenOutsideFill), flat: !0 })(s))(() => n.bind(t.fillStrokePath(jr([
      m,
      h,
      p,
      g
    ]))({ color: No(0.82)(r.tokenOutsideFill), flat: !0 })(s))(() => t.fillStrokePath(jr([_, g, p, $]))({
      color: No(1)(r.tokenOutsideFill),
      flat: !0
    })(s)));
  };
}, zJ = (t) => {
  const n = BJ(t);
  return (e) => (r) => (o) => (i) => {
    if (i.tag === "Travelling") {
      const s = SJ(i._1.edge)(o.edges);
      return s.tag === "Just" ? N(
        "Just",
        (() => {
          const u = GJ(i._1.direction)(i._1.progress)(i._1.holdPre)(i._1.holdPost)(s._1);
          return { depth: u.x + u.y, draw: n(e)(r)(0)(u) };
        })()
      ) : v;
    }
    if (i.tag === "Filling") {
      const s = CJ(i._1.node)(o.nodes);
      if (s.tag === "Just")
        return N(
          "Just",
          (() => {
            const u = { x: s._1.x + s._1.w / 2, y: s._1.y + s._1.h / 2 };
            return { depth: u.x + u.y, draw: n(e)(r)(e.boxHeight)(u) };
          })()
        );
    }
    return v;
  };
}, DJ = { angle: 0.5235987755982988, boxHeight: 26, transparentBg: !0 }, QJ = (t) => (n) => {
  const e = n.y + n.h, r = n.x + n.w;
  return {
    ground: { a: Qn(t)(n.x)(n.y)(0), b: Qn(t)(r)(n.y)(0), c: Qn(t)(r)(e)(0), d: Qn(t)(n.x)(e)(0) },
    top: { a: Qn(t)(n.x)(n.y)(t.boxHeight), b: Qn(t)(r)(n.y)(t.boxHeight), c: Qn(t)(r)(e)(t.boxHeight), d: Qn(t)(n.x)(e)(t.boxHeight) },
    depth: (n.x + r) / 2 + (n.y + e) / 2
  };
}, Ud = (t) => (n) => Q((e) => ({ np: e, box: QJ(t)(e) }))((() => {
  const e = (r, o) => {
    if (r.tag === "Leaf")
      return o;
    if (r.tag === "Node")
      return e(r._5, jt("Cons", r._4, e(r._6, o)));
    f();
  };
  return Gt(tn.foldr, e(n.nodes, Zt));
})()), HJ = (t) => (n) => [
  ...xt(Ud(t)(n))(PJ),
  ...(() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, jt("Cons", r._4, e(r._6, o)));
      f();
    };
    return xt(Gt(tn.foldr, e(n.edges, Zt)))(Q((r) => Qn(t)(r.x)(r.y)(0)));
  })()
], WJ = (t) => {
  const n = t.to.y - t.from.y, e = t.to.x - t.from.x, r = Mc(1e-4)(Bn(e * e + n * n)), o = n / r, i = e / r, s = t.to.y - o * 7, u = t.to.x - i * 7;
  return jr([t.to, { x: u - o * 3, y: s + i * 3 }, { x: u + o * 3, y: s - i * 3 }]);
}, OJ = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => (i) => (s) => (u) => {
    const c = Qn(r)(u.x)(u.y)(0), a = Qn(r)(s.x)(s.y)(0);
    return n.Bind1().bind(t.strokePath(FJ([a, c]))({
      color: o.edge,
      width: 1.5,
      lineJoin: Pn,
      lineCap: Qe
    }))(() => {
      const l = t.fillPath(WJ({ from: a, to: c }))({ color: o.arrowFill, flat: !0 });
      return i ? l : e.pure();
    });
  };
}, qJ = (t) => {
  const n = OJ(t);
  return (e) => (r) => (o) => {
    const i = pn(In, o, Jt(1, o.length, o)), s = i.length - 1 | 0;
    return Rt((u) => (c) => ({ depth: (c._1.x + c._1.y + c._2.x + c._2.y) / 2, draw: n(e)(r)(u === s)(c._1)(c._2) }))(i);
  };
}, XJ = (t) => {
  const n = RJ(t), e = zJ(t), r = qJ(t), o = t.Monad0(), i = bi(o.Applicative0())(qt);
  return (s) => (u) => (c) => (a) => {
    const l = df(u), d = [
      ...(() => {
        const _ = (g, p) => {
          if (g.tag === "Leaf")
            return p;
          if (g.tag === "Node")
            return _(g._5, jt("Cons", g._4, _(g._6, p)));
          f();
        };
        return xt(Gt(tn.foldr, _(c.edges, Zt)))(r(s)(l));
      })(),
      ...Q((_) => ({ depth: _.box.depth, draw: n(s)(l)(_) }))(Ud(s)(c)),
      ...yt(e(s)(l)(c))((() => {
        const _ = (g, p) => {
          if (g.tag === "Leaf")
            return p;
          if (g.tag === "Node")
            return _(g._5, jt("Cons", g._4, _(g._6, p)));
          f();
        };
        return Gt(tn.foldr, _(a.tokens, Zt));
      })())
    ];
    return o.Bind1().bind((() => {
      const _ = IJ(HJ(s)(c));
      return t.Monad0().Bind1().bind(t.clearBackground(s.transparentBg ? l.bgTransparent : l.bg))(() => t.setViewport(_));
    })())(() => i((_) => _.draw)(Ct((_) => (g) => ot.compare(_.depth)(g.depth))(d)));
  };
}, Vd = (t, n) => ({ tag: t, _1: n }), Us = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, YJ = (t) => (n) => (e) => {
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
}, mf = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, UJ = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, VJ = /* @__PURE__ */ Vd("ResolvedLabels"), KJ = (t) => {
  const n = Mt((e) => e.role === "FlyThrough")(t.levels);
  if (n.tag === "Just")
    return n._1;
  if (n.tag === "Nothing")
    return Es(t);
  f();
}, Gi = (t) => (n) => {
  const e = Us(1)(bn(n.rootLayout).w), r = Ai(n.rootLayout)(n.camera), o = !n.diving && n.levels.length === 1 ? 1 : YJ(0)(1)(r.w / e), i = Es(n).state.frameTitle === "" ? 0 * o : 40 * o, s = t.padding * o * o;
  return (() => {
    if (t.outputAspect.tag === "Nothing")
      return Zm;
    if (t.outputAspect.tag === "Just")
      return Xg(t.outputAspect._1);
    f();
  })()({ vx: r.x - s, vy: r.y - s - i, vw: r.w + 2 * s, vh: r.h + 2 * s + i });
}, MJ = (t) => (n) => {
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just") {
    const e = mf(n._1)(t.segment.layout.nodes);
    if (e.tag === "Nothing")
      return [];
    if (e.tag === "Just") {
      const r = e._1.x * t.segment.placement.scale + t.segment.placement.tx, o = e._1.y * t.segment.placement.scale + t.segment.placement.ty, i = e._1.w * t.segment.placement.scale, s = e._1.h * t.segment.placement.scale;
      return [1, r, o, 2, r + i, o, 2, r + i, o + s, 2, r, o + s, 5];
    }
  }
  f();
}, $f = (t) => (n) => {
  const e = Bp(n.segment.placement)({ x: t.vx, y: t.vy, w: t.vw, h: t.vh });
  return { vx: e.x, vy: e.y, vw: e.w, vh: e.h };
}, jJ = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => (o) => {
    if (r === "")
      return n.Applicative0().pure();
    const i = o.vh / 720, s = 56 * i;
    return e.bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 56, weight: 700 })(r))((u) => {
      const c = s + 16 * i * 2, a = u * i + 28 * i * 2, l = o.vy + o.vh / 2, d = o.vx + o.vw / 2;
      return e.bind(t.drawRoundedRect({ x: d - a / 2, y: l - c / 2, w: a, h: c })(16 * i)(N(
        "Just",
        { color: { r: 255, g: 255, b: 255, a: 235 }, flat: !0 }
      ))(N(
        "Just",
        { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1.5 * i, lineJoin: Pn, lineCap: Qe }
      )))(() => t.drawText({
        x: d,
        y: l,
        content: r,
        font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: s, weight: 700 },
        color: { r: 28, g: 30, b: 36, a: 255 },
        align: Do,
        baseline: Cr
      }));
    });
  };
}, ZJ = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => (o) => {
    if (r === "")
      return n.Applicative0().pure();
    const i = o.vh / 720, s = 15 * i;
    return e.bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 15, weight: 600 })(r))((u) => {
      const c = o.vy + 12 * i, a = s + 6 * i * 2, l = u * i + 11 * i * 2, d = o.vx + o.vw / 2;
      return e.bind(t.drawRoundedRect({ x: d - l / 2, y: c, w: l, h: a })(a / 2)(N(
        "Just",
        { color: { r: 255, g: 255, b: 255, a: 240 }, flat: !0 }
      ))(N(
        "Just",
        { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1 * i, lineJoin: Pn, lineCap: Qe }
      )))(() => t.drawText({
        x: d,
        y: c + a / 2,
        content: r,
        font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: s, weight: 600 },
        color: { r: 28, g: 30, b: 36, a: 255 },
        align: Do,
        baseline: Cr
      }));
    });
  };
}, tb = (t) => {
  const n = qd(t), e = pf(t), r = t.Monad0(), o = r.Bind1(), i = r.Applicative0(), s = Xd(t), u = Yd(t)(lf)(1), c = Dd(t), a = Hd(t), l = Qd(t), d = hJ(t), _ = t.popBlur, g = t.popAlpha, p = jJ(t), $ = ZJ(t);
  return (h) => (m) => (y) => (x) => (J) => (T) => (b) => (L) => {
    const A = df(h.theme), E = (() => {
      if (L.tag === "ResolvedLabels")
        return n(A)(J)(T)(b);
      if (L.tag === "SpringLabels")
        return e(A)(T)(b)(L._1);
      f();
    })();
    return o.bind(t.Monad0().Bind1().bind(t.clearBackground(h.transparentBg ? A.bgTransparent : A.bg))(() => t.setViewport(J)))(() => o.bind((() => {
      const O = o.bind((() => {
        const H = t.pushAlpha(y);
        return y < 1 ? H : i.pure();
      })())(() => o.bind((() => {
        const H = t.pushBlur(x);
        return x > 0 ? H : i.pure();
      })())(() => o.bind(s(A)(T)(b))(() => o.bind(u(A)(T)(b))(() => o.bind(c(A)(T)(b))(() => o.bind(a(A)(J)(T)(b))(() => o.bind(l(FN)(A)(T)(b))(() => o.bind(E)(() => o.bind((() => {
        const H = d(A)(T)(b);
        return b.staticKind !== "Animated" ? H : i.pure();
      })())(() => o.bind(x > 0 ? _ : i.pure())(() => y < 1 ? g : i.pure()))))))))));
      return y > 0 ? O : i.pure();
    })())(() => o.bind(h.watermark === "" ? t.Monad0().Applicative0().pure() : t.drawText({
      x: J.vx + 6,
      y: J.vy + 6,
      content: h.watermark,
      font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 9, weight: 600 },
      color: { r: 180, g: 180, b: 180, a: 255 },
      align: Wc,
      baseline: bN
    }))(() => b.staticKind === "TitleCard" ? p(b.frameTitle)(J) : $(b.frameTitle)(J))));
  };
}, Kd = (t) => {
  const n = t.Monad0().Applicative0(), e = jl(n)(qt);
  return (r) => (o) => (i) => (s) => e(s.minis)((u) => {
    const c = Md(t)(r)(o)(i)(I)(s)(u);
    return (() => {
      const a = u.segment.path.length - 1 | 0;
      return u.bgAlpha > 0 && a >= 0 && a < u.segment.path.length && (() => {
        const l = mf(u.segment.path[a])(s.state.nodes);
        if (l.tag === "Just")
          return l._1.tag === "Hidden" ? !1 : l._1.tag !== "PloppingOut";
        if (l.tag === "Nothing")
          return !1;
        f();
      })();
    })() ? c : n.pure();
  });
}, Md = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = t.popTransform, i = qd(t), s = pf(t), u = Xd(t), c = Yd(t), a = Dd(t), l = Hd(t), d = Qd(t), _ = t.popBakedTransform, g = t.popClip, p = t.popBlur, $ = t.popAlpha;
  return (h) => (m) => (y) => (x) => (J) => (T) => {
    const b = T.blur > 0, L = T.segment.placement, A = T.state, E = { tx: L.tx, ty: L.ty, sx: L.scale, sy: L.scale }, O = df(h.theme), H = T.segment.layout, F = bn(H), B = { vx: F.x - 1e3, vy: F.y - 1e3, vw: F.w + 2e3, vh: F.h + 2e3 }, Z = T.segment.path.length - 1 | 0, tt = Z >= 0 && Z < T.segment.path.length ? mf(T.segment.path[Z])(J.segment.layout.nodes) : v, Y = T.segment.placement.scale * y, z = UJ(8)(Us(1)(1 / (1.25 * Us(1e-6)(Y)))), S = 11 * Y >= 5 ? lf : uJ, C = (() => {
      if (tt.tag === "Nothing")
        return e.pure();
      if (tt.tag === "Just") {
        const D = tt._1;
        return r.bind(t.pushTransform({
          tx: J.segment.placement.tx,
          ty: J.segment.placement.ty,
          sx: J.segment.placement.scale,
          sy: J.segment.placement.scale
        }))(() => r.bind(uf(t)(D.shape)({ x: D.x + 1, y: D.y + 1, w: D.w - 2, h: D.h - 2 })(7)(N(
          "Just",
          { color: O.bg, flat: !0 }
        ))(v))(() => o));
      }
      f();
    })(), q = (() => {
      if (S === "LabelsHidden")
        return e.pure();
      if (S === "LabelsShown")
        return x.tag === "Leaf" ? i(O)($f(m.viewport)(T))(H)(A) : s(O)(H)(A)(x);
      f();
    })(), P = MJ(J)((() => {
      const D = T.segment.path.length - 1 | 0;
      return D >= 0 && D < T.segment.path.length ? N("Just", T.segment.path[D]) : v;
    })());
    return r.bind(t.pushAlpha(T.bgAlpha))(() => r.bind((() => {
      const D = t.pushBlur(T.blur * L.scale);
      return b ? D : e.pure();
    })())(() => r.bind(t.pushClip(P)(Hs))(() => r.bind(J.role === "Active" || J.role === "FlyThrough" ? C : e.pure())(() => r.bind(t.pushTransform(E))(() => r.bind(u(O)(H)(A))(() => r.bind(c(S)(z)(O)(H)(A))(() => r.bind(a(O)(H)(A))(() => r.bind(l(O)(B)(H)(A))(() => r.bind(o)(() => r.bind(t.pushBakedTransform(E))(() => r.bind(d(IN)(O)(H)(A))(() => r.bind(_)(() => r.bind(g)(() => r.bind(t.pushTransform(E))(() => r.bind(q)(() => r.bind(o)(() => r.bind(Kd(t)(h)(m)(y)(T))(() => r.bind(b ? p : e.pure())(() => $)))))))))))))))))));
  };
}, jd = (t) => {
  const n = XJ(t), e = t.Monad0(), r = e.Applicative0(), o = e.Bind1(), i = Md(t), s = tb(t), u = Kd(t);
  return (c) => (a) => (l) => {
    if (c.theme === "Isometric")
      return n({ ...DJ, transparentBg: c.transparentBg })(c.theme)(Es(l).segment.layout)(Es(l).state);
    const d = Gi(c)(l), _ = (h) => l.hasDives ? d.vw / Us(1)(bn(l.rootLayout).w) : 1, g = { tileScale: _(), viewport: d }, p = (h) => (m) => {
      if (m.length === 0)
        return r.pure();
      const y = Bt((x) => v, (x) => (J) => N("Just", { head: x, tail: J }), m);
      if (y.tag === "Nothing")
        return r.pure();
      if (y.tag === "Just") {
        const x = y._1.head, J = y._1.tail;
        return o.bind((() => {
          const T = i(c)(g)(l.camera.zoom)(x.role === "Active" ? a : I)(h)(x);
          return l.diving || x.role === "Active" ? T : r.pure();
        })())(() => p(x)(J));
      }
      f();
    }, $ = Bt((h) => v, (h) => (m) => N("Just", { head: h, tail: m }), l.levels);
    if ($.tag === "Nothing")
      return r.pure();
    if ($.tag === "Just") {
      const h = $._1.tail, m = $._1.head;
      return o.bind((() => {
        const y = h.length === 0;
        return s(c)(_())(m.role === "Active" || m.role === "FlyThrough" ? m.bgAlpha : 0)(m.blur)(d)(m.segment.layout)(KJ(l).state)(y && a.tag !== "Leaf" ? Vd("SpringLabels", a) : VJ);
      })())(() => o.bind((() => {
        const y = u(c)(g)(l.camera.zoom)(m);
        return m.role === "Active" || m.role === "FlyThrough" ? y : r.pure();
      })())(() => p(m)(h)));
    }
    f();
  };
}, nb = /* @__PURE__ */ hf(Ld), $l = /* @__PURE__ */ jd(Ld), eb = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
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
    outputAspect: r.width <= 0 || r.height <= 0 ? v : N("Just", r.width / r.height)
  }, c = MN(e)(r);
  return () => {
    const a = c(), l = o.levels.length - 1 | 0;
    if (l >= 0 && l < o.levels.length) {
      const _ = nb($f(Gi(u)(o))(o.levels[l]))(o.levels[l].segment.layout)(o.levels[l].state)(a)(), g = Hc(i)(_)(s);
      return $l(u)(g.applied)(o)(a)(), g.springs;
    }
    const d = Hc(i)(I)(s);
    return $l(u)(d.applied)(o)(a)(), d.springs;
  };
}, Zd = (t) => t, Fi = (t) => t, yl = /* @__PURE__ */ Fi("Light"), rb = /* @__PURE__ */ Fi("Dark"), ob = /* @__PURE__ */ Fi("Blueprint"), ib = /* @__PURE__ */ Fi("Whiteboard"), sb = /* @__PURE__ */ Fi("Isometric"), ub = /* @__PURE__ */ Zd("PaintBackground"), cb = /* @__PURE__ */ Zd("TransparentBackground"), Ar = (t) => "rgb(" + un(t.r) + "," + un(t.g) + "," + un(t.b) + ")", Be = /* @__PURE__ */ yg(/* @__PURE__ */ mg("Fixed", /* @__PURE__ */ $g(0)(20)(4))), ab = (t) => "translate(" + Be(t.tx) + "," + Be(t.ty) + ") scale(" + Be(t.sx) + "," + Be(t.sy) + ")", Lt = /* @__PURE__ */ yg(/* @__PURE__ */ mg("Fixed", /* @__PURE__ */ $g(0)(20)(2))), yf = (t) => {
  const n = [];
  let e = 0;
  for (; e < t.length; ) {
    const r = e, o = r >= 0 && r < t.length ? N("Just", t[r]) : v;
    if (o.tag === "Nothing") {
      e = t.length;
      continue;
    }
    if (o.tag === "Just") {
      if (o._1 === 1) {
        n.push("M"), n.push(Lt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Lt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 2) {
        n.push("L"), n.push(Lt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Lt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 3) {
        n.push("Q"), n.push(Lt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Lt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Lt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Lt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 5 | 0;
        continue;
      }
      if (o._1 === 4) {
        n.push("C"), n.push(Lt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Lt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Lt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Lt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Lt((() => {
          const i = r + 5 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Lt((() => {
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
  return mu(" ")(n);
}, fb = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, jc = /* @__PURE__ */ (() => {
  const t = Nr("&")("&amp;"), n = Nr("<")("&lt;"), e = (() => {
    const r = Nr(">")("&gt;"), o = (() => {
      const i = Nr('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), lb = (t) => {
  if (t.style === "RunText")
    return "<tspan>" + jc(t.text) + "</tspan>";
  if (t.style === "RunCode")
    return `<tspan font-family="'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="400">` + jc(t.text) + "</tspan>";
  f();
}, Fn = (t) => (n) => {
  const e = n.maskDepth;
  return () => {
    e.value === 0 && n.out.push(t);
  };
}, gb = (t) => (n) => {
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
    const i = r, s = i >= 0 && i < n.length ? N("Just", n[i]) : v;
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
}, cs = (t) => (n) => {
  const e = t.bake;
  return () => {
    const r = e.value;
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return gb(r._1)(n);
    f();
  };
}, t_ = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => fb
}, db = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => t_
}, _b = { pure: (t) => (n) => () => t, Apply0: () => t_ }, hb = { Applicative0: () => _b, Bind1: () => db }, pb = (t) => (n) => '<defs><pattern id="' + t + '" x="' + Lt(n.origin.x) + '" y="' + Lt(n.origin.y) + '" width="' + Lt(n.tile) + '" height="' + Lt(n.tile) + '" patternUnits="userSpaceOnUse">' + (n.bgColor.a === 0 ? "" : '<rect width="' + Lt(n.tile) + '" height="' + Lt(n.tile) + '" fill="' + Ar(n.bgColor) + '" fill-opacity="' + Lt(M(n.bgColor.a) / 255) + '"/>') + '<circle cx="' + Lt(n.tile / 2) + '" cy="' + Lt(n.tile / 2) + '" r="' + Lt(n.dotRadius) + '" fill="' + Ar(n.dotColor) + '"/></pattern></defs><rect x="' + Lt(n.viewport.vx) + '" y="' + Lt(n.viewport.vy) + '" width="' + Lt(n.viewport.vw) + '" height="' + Lt(n.viewport.vh) + '" fill="url(#' + t + ')"/>', xl = (t) => (n) => '<path d="' + yf(t) + '" fill="' + Ar(n) + '" fill-opacity="' + Lt(M(n.a) / 255) + '"/>', mb = (t) => (n) => (e) => (r) => '<rect x="' + Lt(t.x) + '" y="' + Lt(t.y) + '" width="' + Lt(t.w) + '" height="' + Lt(t.h) + '" rx="' + Lt(n) + '"' + (() => {
  if (e.tag === "Just")
    return ' fill="' + Ar(e._1.color) + '" fill-opacity="' + Lt(M(e._1.color.a) / 255) + '"';
  if (e.tag === "Nothing")
    return ' fill="none"';
  f();
})() + (() => {
  if (r.tag === "Just")
    return ' stroke="' + Ar(r._1.color) + '" stroke-opacity="' + Lt(M(r._1.color.a) / 255) + '" stroke-width="' + Lt(r._1.width) + '" stroke-linejoin="' + (() => {
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
})() + "/>", vl = (t) => (n) => '<path d="' + yf(t) + '" fill="none" stroke="' + Ar(n.color) + '" stroke-opacity="' + Lt(M(n.color.a) / 255) + '" stroke-width="' + Lt(n.width) + '" stroke-linejoin="' + (() => {
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
})() + '"/>', wl = (t) => {
  const n = p1(Po(t.content));
  return '<text x="' + Lt(t.x) + '" y="' + Lt(t.y) + '"' + (() => {
    if (t.baseline === "BaselineTop")
      return ' dy="0.8em"';
    if (t.baseline === "BaselineMiddle")
      return ' dy="0.32em"';
    if (t.baseline === "BaselineAlphabetic" || t.baseline === "BaselineBottom")
      return "";
    f();
  })() + ' fill="' + Ar(t.color) + '" fill-opacity="' + Lt(M(t.color.a) / 255) + '" font-size="' + Lt(t.font.size) + '" font-family="Ilisarniq, ui-sans-serif, system-ui, sans-serif" font-weight="' + un(t.font.weight) + '" text-anchor="' + (() => {
    if (t.align === "AlignLeft")
      return "start";
    if (t.align === "AlignCenter")
      return "middle";
    if (t.align === "AlignRight")
      return "end";
    f();
  })() + '">' + (n.length === 1 && n[0].style === "RunText" ? jc(n[0].text) : mu("")(Q(lb)(n))) + "</text>";
}, $b = (t) => "matrix(" + Be(t.a) + " " + Be(t.b) + " " + Be(t.c) + " " + Be(t.d) + " " + Be(t.e) + " " + Be(t.f) + ")", n_ = {
  fillPath: (t) => (n) => (e) => {
    const r = cs(e)(t);
    return () => {
      const o = r();
      return Fn(xl(o)(n.color))(e)();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = cs(e)(t);
    return () => {
      const o = r(), i = e.bake.value;
      return Fn(vl(o)((() => {
        if (i.tag === "Nothing")
          return n;
        if (i.tag === "Just")
          return { ...n, width: i._1.sx * n.width };
        f();
      })()))(e)();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = cs(r)(t);
    return () => {
      const i = o(), s = r.bake.value;
      return Fn(xl(i)(n.color) + vl(i)((() => {
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
      return Fn(mb((() => {
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
      })())(e)(r.tag === "Just" ? N(
        "Just",
        (() => {
          if (s.tag === "Nothing")
            return r._1;
          if (s.tag === "Just")
            return { ...r._1, width: s._1.sx * r._1.width };
          f();
        })()
      ) : v))(o)();
    };
  },
  drawText: (t) => (n) => {
    const e = n.bake;
    return () => {
      const r = e.value;
      return Fn(wl((() => {
        if (r.tag === "Nothing")
          return t;
        if (r.tag === "Just")
          return { ...t, x: r._1.sx * t.x + r._1.tx, y: r._1.sy * t.y + r._1.ty, font: { ...t.font, size: r._1.sx * t.font.size } };
        f();
      })()))(n)();
    };
  },
  drawTextAffine: (t) => (n) => Fn((() => {
    const e = 'transform="' + $b(t) + '"';
    return (e === "" ? "<g>" : "<g " + e + ">") + wl(n) + "</g>";
  })()),
  pushTransform: (t) => Fn((() => {
    const n = 'transform="' + ab(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popTransform: /* @__PURE__ */ Fn("</g>"),
  pushBakedTransform: (t) => (n) => {
    const e = n.bake;
    return () => {
      e.value = N("Just", t);
    };
  },
  popBakedTransform: (t) => {
    const n = t.bake;
    return () => {
      n.value = v;
    };
  },
  pushClip: (t) => (n) => (e) => {
    const r = e.clipCounter;
    return () => {
      const o = r.value;
      e.clipCounter.value = o + 1 | 0;
      const i = cs(e)(t)(), s = "clip" + un(o);
      return Fn((() => {
        const u = 'clip-path="url(#' + s + ')"';
        return '<defs><clipPath id="' + s + '"><path d="' + yf(i) + '"' + (() => {
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
    const n = 'opacity="' + Lt(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popAlpha: /* @__PURE__ */ Fn("</g>"),
  pushBlur: (t) => (n) => {
    if (t < 0.01)
      return Fn("<g>")(n);
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      n.patternCounter.value = r + 1 | 0;
      const o = "lvl-blur-" + un(r);
      return Fn((() => {
        const i = 'filter="url(#' + o + ')"';
        return '<defs><filter id="' + o + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="' + Lt(t) + '"/></filter></defs>' + (i === "" ? "<g>" : "<g " + i + ">");
      })())(n)();
    };
  },
  popBlur: /* @__PURE__ */ Fn("</g>"),
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
  clearBackground: (t) => (n) => Fn('<rect x="' + Lt(n.viewport.vx) + '" y="' + Lt(n.viewport.vy) + '" width="' + Lt(n.viewport.vw) + '" height="' + Lt(n.viewport.vh) + '" fill="' + Ar(t) + '" opacity="' + Lt(M(t.a) / 255) + '"/>')(n),
  backgroundDots: (t) => (n) => {
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      return n.patternCounter.value = r + 1 | 0, Fn(pb("bg-dots-" + un(r))(t))(n)();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = cd(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = ad(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => md,
  Monad0: () => hb
}, yb = /* @__PURE__ */ jd(n_), xb = /* @__PURE__ */ hf(n_), vb = (t) => (n) => (e) => (r) => (o) => {
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
  }, s = Gi(i)(o);
  return {
    viewBox: Lt(s.vx) + " " + Lt(s.vy) + " " + Lt(s.vw) + " " + Lt(s.vh),
    body: (() => {
      const u = [], c = { value: 0 }, a = { value: 0 }, l = { value: 0 }, d = { value: v };
      return yb(i)(n)(o)({ out: u, maskDepth: c, clipCounter: a, patternCounter: l, viewport: s, bake: d })(), mu("")(u);
    })(),
    vx: s.vx,
    vy: s.vy,
    vw: s.vw,
    vh: s.vh
  };
}, wb = (t) => (n) => (e) => (r) => (o) => (i) => {
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
  }, u = Hc(o)((() => {
    const c = [], a = { value: 0 }, l = { value: 0 }, d = { value: 0 }, _ = { value: v }, g = r.levels.length - 1 | 0;
    if (g >= 0 && g < r.levels.length) {
      const p = $f(Gi(s)(r))(r.levels[g]);
      return xb(p)(r.levels[g].segment.layout)(r.levels[g].state)({
        out: c,
        maskDepth: a,
        clipCounter: l,
        patternCounter: d,
        viewport: p,
        bake: _
      })();
    }
    return I;
  })())(i);
  return { parts: vb(t)(u.applied)(n)(e)(r), springs: u.springs };
}, Ii = (t) => ({ bind: (n) => (e) => (r) => t.Bind1().bind(n(r))((o) => e(o._1)(o._2)), Apply0: () => e_(t) }), e_ = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = { map: (r) => (o) => (i) => n.map((s) => k(r(s._1), s._2))(o(i)) };
  return {
    apply: (() => {
      const r = Ii(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => Ri(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, Ri = (t) => ({ pure: (n) => (e) => t.Applicative0().pure(k(n, e)), Apply0: () => e_(t) }), Nb = (t) => {
  const n = { Applicative0: () => Ri(t), Bind1: () => Ii(t) };
  return { state: (e) => (r) => t.Applicative0().pure(e(r)), Monad0: () => n };
}, xf = (t, n) => ({ tag: t, _1: n }), vf = (t) => t, hr = (t, n) => ({ tag: t, _1: n }), wf = (t) => t, kn = /* @__PURE__ */ Nb(gr), Wt = /* @__PURE__ */ Ii(gr), Un = kn.state((t) => k(t, t)), fn = /* @__PURE__ */ Ri(gr), ur = (t) => (e) => {
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
}, r_ = (t) => (e) => {
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
}, Pu = /* @__PURE__ */ bi(fn)(qt), cr = (t) => (e) => {
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
}, Tb = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Jb = /* @__PURE__ */ (() => {
  const t = me.unfoldr((n) => {
    if (n.tag === "Nil")
      return v;
    if (n.tag === "Cons")
      return N("Just", k(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, jt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Zt);
  })());
})(), bb = (t) => (e) => {
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
}, Gu = (t) => (n) => (e) => w((r) => (o) => t.Bind1().bind(r)((i) => n(i)(o)))(t.Applicative0().pure(e)), kb = /* @__PURE__ */ w((t) => (n) => K(G)(n)()(t))(I), Lb = /* @__PURE__ */ (() => {
  const n = ((e) => (r) => {
    let o = e, i = r, s = !0, u;
    for (; s; ) {
      const c = o, a = i;
      if (a.tag === "Nil") {
        s = !1, u = c;
        continue;
      }
      if (a.tag === "Cons") {
        o = K(G)(a._1)()(c), i = a._2;
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
        return r(o._5, jt("Cons", o._3, r(o._6, i)));
      f();
    };
    return r(e, Zt);
  })());
})(), Eb = /* @__PURE__ */ wf("RightArrow"), Sb = /* @__PURE__ */ wf("LeftArrow"), Cb = /* @__PURE__ */ wf("UndirectedArrow"), Ab = /* @__PURE__ */ hr("Exit"), Pb = /* @__PURE__ */ vf("AnimatedKeyframe"), Gb = /* @__PURE__ */ vf("Still"), Fb = /* @__PURE__ */ vf("Title"), Ib = (t) => xf("Par", t), o_ = (t) => xf("Seq", t), Rb = (t) => (n) => (e) => {
  const r = to(Xt, v, (o) => o._1 === t, e);
  if (r.tag === "Just") {
    const o = Er(Xt, v, r._1, k(t, n), e);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return o._1;
    f();
  }
  if (r.tag === "Nothing")
    return Pt(e)(k(t, n));
  f();
}, Bb = (t) => (n) => Q((e) => e._1 === t ? k(e._1, { ...e._2, label: N("Just", n) }) : k(e._1, e._2)), Ln = (t) => kn.state((n) => k(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return { ...n, error: N("Just", { msg: t, line: n.currentLine, column: n.currentColumn }) };
    f();
  })()
)), zb = (t) => Wt.bind(kn.state((n) => k(void 0, { ...n, currentLine: t.line, currentColumn: t.column })))(() => Wt.bind(Un)((n) => {
  if (n.error.tag === "Just")
    return fn.pure();
  if (n.error.tag === "Nothing") {
    if (t.op.tag === "Enter") {
      if (!ur(t.op._1.id)(n.currNodes))
        return Ln("cannot enter node " + t.op._1.id + ": does not exist");
      if (!r_(t.op._1.id)(n.interiorOf))
        return Ln("cannot enter node " + t.op._1.id + ": it has no `inside` block");
      if (ie(be)(t.op._1.id)(n.enterStack))
        return Ln("cannot enter node " + t.op._1.id + ": already entered");
      const e = t.op._1;
      return kn.state((r) => k(
        void 0,
        { ...r, enterStack: Pt(r.enterStack)(e.id), scenes: Pt(r.scenes)(Si("EnterNode", e.id)) }
      ));
    }
    if (t.op.tag === "Exit") {
      const e = ke(n.enterStack);
      if (e.tag === "Nothing")
        return Ln("`exit` without a matching `enter`");
      if (e.tag === "Just") {
        const r = e._1.init;
        return kn.state((o) => k(void 0, { ...o, enterStack: r, scenes: Pt(o.scenes)(Mp) }));
      }
      f();
    }
    return fn.pure();
  }
  f();
})), Db = (t) => Wt.bind(Un)((n) => {
  const e = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + un(n.kfCounter);
  if (ue((o) => o.id === e, n.keyframes))
    return Ln("duplicate frame name " + e);
  const r = {
    ...n,
    keyframes: Pt(n.keyframes)({ id: e, nodes: n.currNodes, edges: n.currEdges, kind: Ci }),
    kfCounter: n.kfCounter + 1 | 0,
    currentKf: N("Just", e)
  };
  return kn.state((o) => k(void 0, r));
}), Qb = /* @__PURE__ */ Pu((t) => Wt.bind(Un)((n) => {
  if (n.error.tag === "Just")
    return fn.pure();
  if (n.error.tag === "Nothing")
    return r_(t.node)(n.interiorOf) ? Ln("node " + t.node + " has more than one `inside` block") : kn.state((e) => k(void 0, { ...e, interiorOf: K(G)(t.node)(t.doc)(e.interiorOf) }));
  f();
})), Hb = (t) => (n) => {
  const e = n.from + "->" + n.to, r = n.newFrom + "->" + n.newTo, o = Tt("Left", "cannot repoint " + n.from + "→" + n.to + ": edge does not exist"), i = cr(e)(t.currEdges) ? Tt("Right", void 0) : o;
  return (() => {
    if (i.tag === "Left") {
      const s = i._1;
      return (u) => Tt("Left", s);
    }
    if (i.tag === "Right") {
      const s = i._1;
      return (u) => u(s);
    }
    f();
  })()(() => {
    const s = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newFrom;
    if (!ur(n.newFrom)(t.currNodes))
      return Tt("Left", s);
    const u = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newTo;
    if (!ur(n.newTo)(t.currNodes))
      return Tt("Left", u);
    const c = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": target edge already exists";
    return e !== r && cr(r)(t.currEdges) ? Tt("Left", c) : Tt(
      "Right",
      {
        nextCurrEdges: K(G)(r)()(si(G)(e)(t.currEdges)),
        newId: r,
        newEdge: { id: r, from: { node: n.newFrom, port: v }, to: { node: n.newTo, port: v }, label: v }
      }
    );
  });
}, Fu = {
  graphNodes: [],
  graphEdges: I,
  currNodes: I,
  currEdges: I,
  keyframes: [],
  scenes: [],
  kfCounter: 0,
  eventCounter: 0,
  currentKf: v,
  currentLine: 0,
  currentColumn: 0,
  error: v,
  enterStack: [],
  interiorOf: I
}, Wb = Wt.bind(Un)((t) => {
  if (t.error.tag === "Just")
    return fn.pure();
  if (t.error.tag === "Nothing") {
    if (t.currentKf.tag === "Just") {
      const n = t.currentKf._1;
      return kn.state((e) => k(void 0, { ...e, scenes: Pt(e.scenes)(Si("Hold", n)) }));
    }
    if (t.currentKf.tag === "Nothing")
      return fn.pure();
  }
  f();
}), Nl = (t) => (n) => Wt.bind(Un)((e) => {
  const r = "ev-" + un(e.eventCounter);
  return Wt.bind((() => {
    const o = { ...e, eventCounter: e.eventCounter + 1 | 0 };
    return kn.state((i) => k(void 0, o));
  })())(() => fn.pure({ events: [{ id: r, kind: n, when: t }], firstId: N("Just", r), lastId: N("Just", r) }));
}), Ob = (t) => (n) => {
  if (n.tag === "Token") {
    const e = n._1;
    return Wt.bind(Un)((r) => {
      const o = !ur(e.from)(r.currNodes), i = !ur(e.to)(r.currNodes);
      if (o || i)
        return Wt.bind(Ln(o ? i ? "token references unknown node: " + e.from + ", " + e.to : "token references unknown node: " + e.from : i ? "token references unknown node: " + e.to : "token references unknown node: "))(() => fn.pure({ events: [], firstId: v, lastId: v }));
      const s = e.to + "->" + e.from, u = e.from + "->" + e.to;
      return cr(u)(r.currEdges) ? Nl(t)(r0(
        "SendToken",
        { from: e.from, to: e.to, edge: u, direction: Vp, labels: e.labels }
      )) : cr(s)(r.currEdges) ? Nl(t)(r0(
        "SendToken",
        { from: e.from, to: e.to, edge: s, direction: Kp, labels: e.labels }
      )) : Wt.bind(Ln("token " + e.from + "→" + e.to + ": no edge between " + e.from + " and " + e.to))(() => fn.pure({
        events: [],
        firstId: v,
        lastId: v
      }));
    });
  }
  return fn.pure({ events: [], firstId: v, lastId: v });
}, qb = (t) => (n) => {
  if (0 < t.length) {
    const e = t[0];
    return Wt.bind(kn.state((r) => k(void 0, { ...r, currentLine: e.line, currentColumn: e.column })))(() => Ln(n));
  }
  return Ln(n);
}, Xb = (t) => yt((n) => Tb(n)(t.graphEdges))(Gt(Jo, Jb(t.currEdges))), Yb = (t) => (n) => {
  const e = at((o) => o.from.node === n.id || o.to.node === n.id, Xb(t)), r = Gu(rg)((o) => (i) => {
    const s = i.from + "->" + n.id, u = n.id + "->" + i.to, c = i.from + "->" + i.to, a = "via " + i.from + " " + i.to + ": no edge " + i.from + "→" + n.id;
    if (!cr(s)(t.currEdges))
      return Tt("Left", a);
    const l = "via " + i.from + " " + i.to + ": no edge " + n.id + "→" + i.to;
    if (!cr(u)(t.currEdges))
      return Tt("Left", l);
    const d = "via " + i.from + " " + i.to + ": would create " + i.from + "→" + i.to + " but it already exists";
    return cr(c)(t.currEdges) || bb(c)(o.synthesized) ? Tt("Left", d) : Tt(
      "Right",
      {
        consumed: K(G)(s)()(K(G)(u)()(o.consumed)),
        synthesized: K(G)(c)({
          id: c,
          from: { node: i.from, port: v },
          to: { node: i.to, port: v },
          label: v
        })(o.synthesized)
      }
    );
  })({ consumed: I, synthesized: I })(n.via);
  return (() => {
    if (r.tag === "Left") {
      const o = r._1;
      return (i) => Tt("Left", o);
    }
    if (r.tag === "Right") {
      const o = r._1;
      return (i) => i(o);
    }
    f();
  })()((o) => {
    const i = o.consumed, s = at((u) => !cr(u.id)(i), e);
    return s.length === 0 ? Tt(
      "Right",
      {
        nextCurrEdges: Wn(
          G.compare,
          Hn,
          rr(G.compare, t.currEdges, kb(Q((u) => u.id)(e))),
          Lb((() => {
            const u = (c) => {
              if (c.tag === "Leaf")
                return I;
              if (c.tag === "Node")
                return Yt("Node", c._1, c._2, c._3, void 0, u(c._5), u(c._6));
              f();
            };
            return u(o.synthesized);
          })())
        ),
        synthesized: o.synthesized
      }
    ) : Tt(
      "Left",
      "cannot delete node " + n.id + ": still connected (" + mu(", ")(Q((u) => u.from.node + "→" + u.to.node)(s)) + "). Use -edge to drop them or `via a b` to merge " + n.id + "'s endpoints."
    );
  });
}, Vs = (t) => {
  if (t.tag === "Leaf")
    return [t._1];
  if (t.tag === "Par" || t.tag === "Seq")
    return xt(t._1)(Vs);
  f();
}, Ub = Wt.bind(Un)((t) => {
  if (t.error.tag === "Just")
    return fn.pure();
  if (t.error.tag === "Nothing") {
    const n = t.enterStack.length - 1 | 0;
    return n >= 0 && n < t.enterStack.length ? Ln("entered node " + t.enterStack[n] + " was never exited") : fn.pure();
  }
  f();
}), Vb = (t) => ({
  nodes: Q(eu)(t.graphNodes),
  edges: (() => {
    const n = (e, r) => {
      if (e.tag === "Leaf")
        return r;
      if (e.tag === "Node")
        return n(e._5, jt("Cons", e._4, n(e._6, r)));
      f();
    };
    return Gt(tn.foldr, n(t.graphEdges, Zt));
  })(),
  constraints: []
}), Kb = (t) => {
  if (t.tag === "AddNode") {
    const n = t._1;
    return kn.state((e) => k(
      void 0,
      {
        ...e,
        graphNodes: Rb(n.id)({ id: n.id, size: k(1, 1), ports: [], label: N("Just", n.label), shape: n.shape })(e.graphNodes),
        currNodes: K(G)(n.id)()(e.currNodes)
      }
    ));
  }
  if (t.tag === "DelNode") {
    const n = t._1;
    return Wt.bind(Un)((e) => {
      if (!ur(n.id)(e.currNodes))
        return Ln("cannot delete node " + n.id + ": does not exist");
      const r = Yb(e)(n);
      if (r.tag === "Left")
        return Ln(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return kn.state((i) => k(
          void 0,
          {
            ...i,
            currNodes: si(G)(n.id)(i.currNodes),
            currEdges: o.nextCurrEdges,
            graphEdges: Wn(G.compare, Hn, o.synthesized, i.graphEdges)
          }
        ));
      }
      f();
    });
  }
  if (t.tag === "ModNode") {
    const n = t._1;
    return Wt.bind(Un)((e) => {
      if (!ur(n.id)(e.currNodes))
        return Ln("cannot modify node " + n.id + ": does not exist");
      if (n.label.tag === "Just") {
        const r = n.label._1;
        return kn.state((o) => k(void 0, { ...o, graphNodes: Bb(n.id)(r)(o.graphNodes) }));
      }
      if (n.label.tag === "Nothing")
        return fn.pure();
      f();
    });
  }
  if (t.tag === "AddEdge") {
    const n = t._1;
    return Wt.bind(Un)((e) => {
      const r = !ur(n.from)(e.currNodes), o = !ur(n.to)(e.currNodes);
      if (r || o)
        return Ln("cannot add edge " + n.from + "→" + n.to + ": unknown node " + (r ? o ? n.from + ", " + n.to : n.from : o ? n.to : ""));
      const i = n.from + "->" + n.to;
      return kn.state((s) => k(
        void 0,
        {
          ...s,
          graphEdges: K(G)(i)({
            id: i,
            from: { node: n.from, port: v },
            to: { node: n.to, port: v },
            label: n.label
          })(s.graphEdges),
          currEdges: K(G)(i)()(s.currEdges)
        }
      ));
    });
  }
  if (t.tag === "DelEdge") {
    const n = t._1;
    return Wt.bind(Un)((e) => {
      const r = n.from + "->" + n.to;
      return cr(r)(e.currEdges) ? kn.state((o) => k(void 0, { ...o, currEdges: si(G)(r)(o.currEdges) })) : Ln("cannot delete edge " + n.from + "→" + n.to + ": does not exist");
    });
  }
  if (t.tag === "RepointEdge") {
    const n = t._1;
    return Wt.bind(Un)((e) => {
      const r = Hb(e)(n);
      if (r.tag === "Left")
        return Ln(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return kn.state((i) => k(
          void 0,
          { ...i, currEdges: o.nextCurrEdges, graphEdges: K(G)(o.newId)(o.newEdge)(i.graphEdges) }
        ));
      }
      f();
    });
  }
  return fn.pure();
}, Mb = (t) => Wt.bind(kn.state((n) => k(void 0, { ...n, currentLine: t.line, currentColumn: t.column })))(() => Kb(t.op)), i_ = (t) => (n) => (e) => Wt.bind(Pu(Mb)(e))(() => Wt.bind(Un)((r) => {
  const o = n.tag === "Just" && n._1 !== "" ? n._1 : "kf-" + un(r.kfCounter);
  if (ue((s) => s.id === o, r.keyframes))
    return Ln("duplicate frame name " + o);
  const i = {
    ...r,
    keyframes: Pt(r.keyframes)({ id: o, nodes: r.currNodes, edges: r.currEdges, kind: t }),
    kfCounter: r.kfCounter + 1 | 0,
    currentKf: N("Just", o),
    scenes: (() => {
      if (r.currentKf.tag === "Nothing")
        return r.scenes;
      if (r.currentKf.tag === "Just")
        return Pt(r.scenes)(Si("Structural", { from: r.currentKf._1, to: o, focus: v }));
      f();
    })()
  };
  return kn.state((s) => k(void 0, i));
})), Tl = (t) => (n) => {
  const e = Vs(n.ops), r = at(
    (i) => i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge",
    e
  ), o = at(
    (i) => !(i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge"),
    e
  );
  if (0 < o.length) {
    const i = o[0];
    return Wt.bind(kn.state((s) => k(void 0, { ...s, currentLine: i.line, currentColumn: i.column })))(() => Ln("still/title blocks hold a static snapshot; they cannot contain tokens (a -> b, a <- b, or a -- b) or enter/exit"));
  }
  return t === "TitleCard" && r.length === 0 ? Ln(n.name.tag === "Just" && n.name._1 !== "" ? 'title "' + n.name._1 + '" has an empty body; give it nodes/edges to title, or use a still' : "title has an empty body; give it nodes/edges to title, or use a still") : Wt.bind(i_(t)(n.name)(r))(() => Wb);
}, jb = (t) => (n) => {
  const e = Bt((r) => v, (r) => (o) => N("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return fn.pure({ events: [], firstId: v, lastId: v });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Wt.bind(Ti(t)(e._1.head))((o) => Wt.bind(Gu({
      Applicative0: () => Ri(gr),
      Bind1: () => Ii(gr)
    })((i) => (s) => Wt.bind(Ti((() => {
      if (i.lastId.tag === "Just")
        return Ia("After", i.lastId._1);
      if (i.lastId.tag === "Nothing")
        return t;
      f();
    })())(s))((u) => fn.pure({
      events: [...i.events, ...u.events],
      firstId: (() => {
        if (i.firstId.tag === "Just")
          return N("Just", i.firstId._1);
        if (i.firstId.tag === "Nothing")
          return u.firstId;
        f();
      })(),
      lastId: (() => {
        if (u.lastId.tag === "Just")
          return N("Just", u.lastId._1);
        if (u.lastId.tag === "Nothing")
          return i.lastId;
        f();
      })()
    })))(o)(r))((i) => fn.pure(i)));
  }
  f();
}, Zb = (t) => (n) => {
  const e = Bt((r) => v, (r) => (o) => N("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return fn.pure({ events: [], firstId: v, lastId: v });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Wt.bind(Ti(t)(e._1.head))((o) => Wt.bind(t3((() => {
      if (o.firstId.tag === "Just")
        return Ia("With", o.firstId._1);
      if (o.firstId.tag === "Nothing")
        return t;
      f();
    })())(r))((i) => fn.pure({
      events: [...o.events, ...i.events],
      firstId: o.firstId,
      lastId: (() => {
        if (o.lastId.tag === "Just")
          return N("Just", o.lastId._1);
        if (o.lastId.tag === "Nothing")
          return i.lastId;
        f();
      })()
    })));
  }
  f();
}, Ti = (t) => (n) => {
  if (n.tag === "Leaf") {
    const e = n._1;
    return Wt.bind(kn.state((r) => k(void 0, { ...r, currentLine: e.line, currentColumn: e.column })))(() => Ob(t)(e.op));
  }
  if (n.tag === "Seq")
    return jb(t)(n._1);
  if (n.tag === "Par")
    return Zb(t)(n._1);
  f();
}, t3 = (t) => Gu({
  Applicative0: () => Ri(gr),
  Bind1: () => Ii(gr)
})((n) => (e) => Wt.bind(Ti(t)(e))((r) => fn.pure({
  events: [...n.events, ...r.events],
  firstId: (() => {
    if (n.firstId.tag === "Just")
      return N("Just", n.firstId._1);
    if (n.firstId.tag === "Nothing")
      return r.firstId;
    f();
  })(),
  lastId: (() => {
    if (r.lastId.tag === "Just")
      return N("Just", r.lastId._1);
    if (r.lastId.tag === "Nothing")
      return n.lastId;
    f();
  })()
})))({ events: [], firstId: v, lastId: v }), n3 = (t) => Wt.bind(Un)((n) => {
  if (n.currentKf.tag === "Nothing")
    return Ln("flow ops before any structural frame");
  if (n.currentKf.tag === "Just") {
    const e = n.currentKf._1;
    return Wt.bind(Ti(Up)(t))((r) => Wt.bind(Un)((o) => {
      const i = { ...o, scenes: Pt(o.scenes)(Si("DataFlow", { keyframe: e, events: r.events, focus: v })) };
      return kn.state((s) => k(void 0, i));
    }));
  }
  f();
}), e3 = (t) => {
  const n = Vs(t.ops), e = at(
    (i) => i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge",
    n
  ), r = at((i) => i.op.tag === "Enter" || i.op.tag === "Exit", n), o = at(
    (i) => !(i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge") && !(i.op.tag === "Enter" || i.op.tag === "Exit"),
    n
  );
  return r.length !== 0 && o.length !== 0 ? qb(r)("`enter`/`exit` cannot be mixed with flow tokens in the same frame") : Wt.bind((() => {
    const i = i_(Ci)(t.name)(e);
    return e.length !== 0 ? i : fn.pure();
  })())(() => Wt.bind((() => {
    const i = Db(t.name);
    return e.length === 0 && o.length !== 0 ? i : fn.pure();
  })())(() => Wt.bind((() => {
    const i = n3(t.ops);
    return o.length !== 0 ? i : fn.pure();
  })())(() => Pu(zb)(r))));
}, r3 = (t) => Wt.bind(Un)((n) => {
  if (n.error.tag === "Just")
    return fn.pure();
  if (n.error.tag === "Nothing") {
    if (t.kind === "AnimatedKeyframe")
      return e3(t);
    if (t.kind === "Still")
      return Tl(Xp)(t);
    if (t.kind === "Title")
      return Tl(Yp)(t);
  }
  f();
}), Iu = (t) => Wt.bind(Qb(t.interiors))(() => Wt.bind(Pu(r3)(t.frames))(() => Wt.bind(Ub)(() => Wt.bind(Un)((n) => {
  if (n.error.tag === "Just")
    return fn.pure(Tt("Left", n.error._1));
  if (n.error.tag === "Nothing") {
    const e = o3(t.interiors);
    if (e.tag === "Left")
      return fn.pure(Tt("Left", e._1));
    if (e.tag === "Right")
      return fn.pure(Tt("Right", { seed: t.seed, graph: Vb(n), keyframes: n.keyframes, scenes: n.scenes, interiors: e._1 }));
  }
  f();
})))), o3 = (t) => {
  const n = Gu(rg)((e) => (r) => {
    const o = Iu(r.doc)(Fu)._1;
    return (() => {
      if (o.tag === "Left") {
        const i = o._1;
        return (s) => Tt("Left", i);
      }
      if (o.tag === "Right") {
        const i = o._1;
        return (s) => s(i);
      }
      f();
    })()((i) => Tt("Right", K(G)(r.node)(i)(e)));
  })(I)(t);
  if (n.tag === "Left")
    return Tt("Left", n._1);
  if (n.tag === "Right")
    return Tt("Right", n._1);
  f();
}, To = (t, n) => ({ tag: "ParseError", _1: t, _2: n }), R = (t, n, e) => ({ tag: "ParseState", _1: t, _2: n, _3: e }), Ks = (t, n, e) => ({ tag: t, _1: n, _2: e }), i3 = (t) => Ks("More", t), s3 = (t) => Ks("Lift", t), u3 = {
  defer: (t) => {
    const n = xp(t);
    return (e, r, o, i, s) => vp(n)(e, r, o, i, s);
  }
}, s_ = { map: (t) => (n) => (e, r, o, i, s) => r((u) => n(e, r, o, i, (c, a) => r((l) => s(c, t(a))))) }, c3 = {
  alt: (t) => (n) => (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((a) => t(
      R(u, c, !1),
      r,
      o,
      (l, d) => {
        const _ = l._3;
        return r((g) => _ ? i(l, d) : n(e, r, o, i, s));
      },
      s
    ));
  },
  Functor0: () => s_
}, a3 = (t) => {
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
          u = !1, c = n.Bind1().Apply0().Functor0().map(ig)(l._1);
          continue;
        }
        if (l.tag === "Stop") {
          u = !1, c = n.Applicative0().pure(ni("Done", k(l._2, l._1)));
          continue;
        }
        f();
      }
      return c;
    };
    return t.tailRecM(o)((i) => r(
      e,
      i3,
      s3,
      (s, u) => Ks("Stop", s, Tt("Left", u)),
      (s, u) => Ks("Stop", s, Tt("Right", u))
    ));
  };
}, u_ = (t, n, e, r, o) => o(t, t._2), f3 = { index: 0, line: 1, column: 1 }, l3 = (t) => {
  const n = a3(t);
  return (e) => (r) => t.Monad0().Bind1().Apply0().Functor0().map(ru)(n(R(e, f3, !1))(r));
}, g3 = /* @__PURE__ */ l3(Z_), c_ = {
  apply: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, a) => r((l) => {
      const d = e._3 && !c._3 ? R(c._1, c._2, !0) : c;
      return n(d, r, o, i, (_, g) => r((p) => s(d._3 && !_._3 ? R(_._1, _._2, !0) : _, a(g))));
    })
  )),
  Functor0: () => s_
}, a_ = { pure: (t) => (n, e, r, o, i) => i(n, t), Apply0: () => c_ }, d3 = {
  bind: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, a) => r((l) => n(a)(e._3 && !c._3 ? R(c._1, c._2, !0) : c, r, o, i, s))
  )),
  Apply0: () => c_
}, _3 = { Applicative0: () => a_, Bind1: () => d3 }, Ru = (t) => (n, e, r, o, i) => e((s) => u_(
  n,
  e,
  r,
  o,
  (u, c) => e((a) => o(n._3 && !u._3 ? R(u._1, u._2, !0) : u, To(t, c)))
)), h3 = { empty: /* @__PURE__ */ Ru("No alternative"), Alt0: () => c3 }, p3 = { Applicative0: () => a_, Plus1: () => h3 }, m3 = {
  tailRecM: (t) => (n) => (e, r, o, i, s) => {
    const u = (c, a, l) => t(a)(
      c,
      r,
      o,
      i,
      (d, _) => {
        const g = c._3 && !d._3 ? R(d._1, d._2, !0) : d;
        if (_.tag === "Loop")
          return l === 0 ? r((p) => u(g, _._1, 30)) : u(g, _._1, l - 1 | 0);
        if (_.tag === "Done")
          return s(g, _._1);
        f();
      }
    );
    return u(e, n, 30);
  },
  Monad0: () => _3
}, $3 = (t) => (n) => {
  const e = n.Plus1().Alt0(), r = n.Applicative0();
  return (o) => t.tailRecM((i) => t.Monad0().Bind1().bind(e.alt(e.Functor0().map(ig)(o))(r.pure(ni(
    "Done",
    void 0
  ))))((s) => r.pure((() => {
    if (s.tag === "Loop")
      return ni("Loop", jt("Cons", s._1, i));
    if (s.tag === "Done")
      return ni(
        "Done",
        ((c) => (a) => {
          let l = c, d = a, _ = !0, g;
          for (; _; ) {
            const p = l, $ = d;
            if ($.tag === "Nil") {
              _ = !1, g = p;
              continue;
            }
            if ($.tag === "Cons") {
              l = jt("Cons", $._1, p), d = $._2;
              continue;
            }
            f();
          }
          return g;
        })(Zt)(i)
      );
    f();
  })())))(Zt);
}, xe = /* @__PURE__ */ $3(m3)(p3), At = (t) => (n) => {
  const e = Ru("Expected " + n);
  return (r, o, i, s, u) => {
    const c = r._1, a = r._2;
    return o((l) => t(
      R(c, a, !1),
      o,
      i,
      (d, _) => {
        const g = d._3;
        return o((p) => g ? s(d, _) : e(r, o, i, s, u));
      },
      u
    ));
  };
}, Bu = (t) => (n, e, r, o, i) => {
  const s = n._3, u = n._1, c = n._2;
  return e((a) => {
    const l = (d, _) => {
      const g = d._3;
      return e((p) => g ? o(R(d._1, d._2, s), _) : i(n, void 0));
    };
    return e((d) => e((_) => t(
      R(u, c, !1),
      e,
      r,
      (g, p) => l(R(g._1, g._2, !1), p),
      (g, p) => e(($) => e((h) => Ru("Negated parser succeeded")(
        g,
        e,
        r,
        l,
        (m, y) => e((x) => i(g._3 && !m._3 ? R(m._1, m._2, !0) : m, y))
      )))
    )));
  });
}, y3 = (t) => {
  const n = t.foldr((e) => (r) => {
    if (r.tag === "Nothing")
      return N("Just", e);
    if (r.tag === "Just")
      return N(
        "Just",
        (o, i, s, u, c) => {
          const a = o._1, l = o._2;
          return i((d) => e(
            R(a, l, !1),
            i,
            s,
            (_, g) => {
              const p = _._3;
              return i(($) => p ? u(_, g) : r._1(o, i, s, u, c));
            },
            c
          ));
        }
      );
    f();
  })(v);
  return (e) => {
    const r = n(e);
    if (r.tag === "Nothing")
      return Ru("No alternative");
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, x3 = (t) => (n) => (e) => (r, o, i, s, u) => o((c) => o((a) => o((l) => o((d) => t(
  r,
  o,
  i,
  s,
  (_, g) => o((p) => o(($) => {
    const h = r._3 && !_._3 ? R(_._1, _._2, !0) : _;
    return e(
      h,
      o,
      i,
      s,
      (m, y) => o((x) => {
        const J = h._3 && !m._3 ? R(m._1, m._2, !0) : m;
        return o((T) => o((b) => {
          const L = r._3 && !J._3 ? R(J._1, J._2, !0) : J;
          return n(
            L,
            o,
            i,
            s,
            (A, E) => o((O) => u(L._3 && !A._3 ? R(A._1, A._2, !0) : A, y))
          );
        }));
      })
    );
  }))
))))), Zc = (t) => (n) => (e) => {
  if (n === 10)
    return { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  if (n === 13) {
    const r = jm()(e);
    return r.tag === "Just" && r._1 === 10 ? { index: t.index + 1 | 0, line: t.line, column: t.column } : { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  }
  return n === 9 ? { index: t.index + 1 | 0, line: t.line, column: (t.column + 8 | 0) - ar(t.column - 1 | 0)(8) | 0 } : { index: t.index + 1 | 0, line: t.line, column: t.column + 1 | 0 };
}, v3 = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const c = r, a = o, l = i, d = $u(a);
    if (d.tag === "Nothing") {
      s = !1, u = c;
      continue;
    }
    if (d.tag === "Just") {
      r = d._1.tail === "" ? Zc(c)(d._1.head)(l) : Zc(c)(d._1.head)(d._1.tail), o = d._1.tail, i = l;
      continue;
    }
    f();
  }
  return u;
}, nn = (t) => (n, e, r, o, i) => {
  const s = $u(n._1);
  if (s.tag === "Nothing")
    return o(n, To("Unexpected EOF", n._2));
  if (s.tag === "Just") {
    if (s._1.head < 0 || s._1.head > 65535)
      return o(n, To("Expected Char", n._2));
    if (s._1.head >= 0 && s._1.head <= 65535) {
      const u = Da(s._1.head);
      return t(u) ? i(R(s._1.tail, Zc(n._2)(s._1.head)(s._1.tail), !0), u) : o(n, To("Predicate unsatisfied", n._2));
    }
  }
  f();
}, Nf = (t, n, e, r, o) => t._1 === "" ? o(R(t._1, t._2, !0), void 0) : r(t, To("Expected EOF", t._2)), w3 = (t) => (n, e, r, o, i) => {
  const s = t(n._1);
  if (s.tag === "Left")
    return o(n, To(s._1, n._2));
  if (s.tag === "Right")
    return i(R(s._1.remainder, v3(n._2)(s._1.consumed)(s._1.remainder), s._1.consumed !== ""), s._1.value);
  f();
}, Zr = (t) => w3((n) => {
  const e = mp(t)(n);
  return e.tag === "Just" ? Tt("Right", { value: t, consumed: t, remainder: e._1 }) : Tt("Left", "Expected " + Nc(t));
}), N3 = /* @__PURE__ */ nn((t) => !0), Jl = (t, n) => ({ tag: t, _1: n }), Tf = /* @__PURE__ */ y3(qt), T3 = /* @__PURE__ */ cn(G)(qt), J3 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, f_ = /* @__PURE__ */ (() => {
  const t = nn((n) => n === " " || n === "	" || n === `
` || n === "\r");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? R(u._1, u._2, !0) : u, void 0))
  ));
})(), Jf = (t, n, e, r, o) => n((i) => Zr("#")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = xe(nn((d) => d !== `
`)), l = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((d) => a(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => o(l._3 && !_._3 ? R(_._1, _._2, !0) : _, void 0))
    ));
  })
)), b3 = /* @__PURE__ */ At(/* @__PURE__ */ (() => {
  const t = At(nn((e) => e === "}"))("'}'"), n = nn((e) => e === `
` || e === "\r");
  return (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((a) => r((l) => t(
      R(u, c, !1),
      r,
      o,
      (d, _) => r((g) => {
        const p = e._1, $ = e._2;
        return r((h) => r((m) => Jf(
          R(p, $, !1),
          r,
          o,
          (y, x) => {
            const J = y._3;
            return r((T) => {
              if (J)
                return i(y, x);
              const b = e._1, L = e._2;
              return r((A) => r((E) => n(
                R(b, L, !1),
                r,
                o,
                (O, H) => {
                  const F = O._3;
                  return r((B) => F ? i(O, H) : Nf(e, r, o, i, s));
                },
                (O, H) => r((F) => s(O, void 0))
              )));
            });
          },
          (y, x) => r((J) => s(y, void 0))
        )));
      }),
      (d, _) => r((g) => s(R(u, c, !1), void 0))
    )));
  };
})())("newline or '}' (statements end at the end of the line)"), pe = /* @__PURE__ */ (() => {
  const t = xe((n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => f_(
      R(s, u, !1),
      e,
      r,
      (a, l) => {
        const d = a._3;
        return e((_) => d ? o(a, l) : Jf(n, e, r, o, i));
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
})(), Je = (t, n, e, r, o) => n((i) => {
  const s = (a, l) => n((d) => pe(t._3 && !a._3 ? R(a._1, a._2, !0) : a, n, e, r, o)), u = t._1, c = t._2;
  return n((a) => f_(
    R(u, c, !1),
    n,
    e,
    (l, d) => {
      const _ = l._3;
      return n((g) => _ ? r(l, d) : Jf(t, n, e, r, s));
    },
    s
  ));
}), l_ = /* @__PURE__ */ (() => {
  const t = At(nn((n) => n === "|"))("'|'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const l = xe(nn((_) => _ !== "|")), d = n._3 && !u._3 ? R(u._1, u._2, !0) : u;
      return e((_) => l(
        d,
        e,
        r,
        o,
        (g, p) => e(($) => {
          const h = At(At(nn((y) => y === "|"))("'|'"))("closing '|'"), m = d._3 && !g._3 ? R(g._1, g._2, !0) : g;
          return e((y) => h(
            m,
            e,
            r,
            o,
            (x, J) => e((T) => i(
              m._3 && !x._3 ? R(x._1, x._2, !0) : x,
              io(Gt(tn.foldr, p))
            ))
          ));
        })
      ));
    })
  ));
})(), k3 = /* @__PURE__ */ At(/* @__PURE__ */ Tf([
  (t, n, e, r, o) => n((i) => {
    const s = t._3;
    return Zr("->")(
      t,
      n,
      e,
      (u, c) => r(R(u._1, u._2, s), c),
      (u, c) => n((a) => o(u, Eb))
    );
  }),
  (t, n, e, r, o) => n((i) => {
    const s = t._3;
    return Zr("<-")(
      t,
      n,
      e,
      (u, c) => r(R(u._1, u._2, s), c),
      (u, c) => n((a) => o(u, Sb))
    );
  }),
  /* @__PURE__ */ (() => {
    const t = Bu(At(nn((n) => n === ">"))("'>'"));
    return (n, e, r, o, i) => e((s) => {
      const u = n._3;
      return e((c) => e((a) => Zr("--")(
        n,
        e,
        r,
        (l, d) => o(R(l._1, l._2, u), d),
        (l, d) => e((_) => e((g) => {
          const p = n._3 && !l._3 ? R(l._1, l._2, !0) : l;
          return t(
            p,
            e,
            r,
            ($, h) => o(R($._1, $._2, u), h),
            ($, h) => e((m) => {
              const y = p._3 && !$._3 ? R($._1, $._2, !0) : $;
              return e((x) => i(y, Cb));
            })
          );
        }))
      )));
    });
  })()
]))("'->', '<-', or '--'"), Ms = /* @__PURE__ */ nn((t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z"), re = /* @__PURE__ */ (() => {
  const t = xe(nn((n) => n === " " || n === "	"));
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? R(u._1, u._2, !0) : u, void 0))
  ));
})(), L3 = /* @__PURE__ */ (() => {
  const t = At(nn((n) => n === "\\"))("'\\\\'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const l = n._3 && !u._3 ? R(u._1, u._2, !0) : u;
      return e((d) => N3(
        l,
        e,
        r,
        o,
        (_, g) => e((p) => i(
          l._3 && !_._3 ? R(_._1, _._2, !0) : _,
          g === "n" ? `
` : g === "t" ? "	" : g === "r" ? "\r" : g
        ))
      ));
    })
  ));
})(), E3 = /* @__PURE__ */ (() => {
  const t = nn((n) => n !== '"' && n !== "\\" && n !== `
`);
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => L3(R(s, u, !1), e, r, (a, l) => e((d) => t(n, e, r, o, i)), i));
  };
})(), bf = /* @__PURE__ */ (() => {
  const t = At(nn((n) => n === '"'))(`'"'`);
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const l = xe(E3), d = n._3 && !u._3 ? R(u._1, u._2, !0) : u;
      return e((_) => l(
        d,
        e,
        r,
        o,
        (g, p) => e(($) => {
          const h = At(At(nn((y) => y === '"'))(`'"'`))(`closing '"' (unterminated string)`), m = d._3 && !g._3 ? R(g._1, g._2, !0) : g;
          return e((y) => h(
            m,
            e,
            r,
            o,
            (x, J) => e((T) => i(
              m._3 && !x._3 ? R(x._1, x._2, !0) : x,
              io(Gt(tn.foldr, p))
            ))
          ));
        })
      ));
    })
  ));
})(), S3 = /* @__PURE__ */ (() => {
  const t = At(nn((n) => n === ":"))("':'");
  return (n, e, r, o, i) => e((s) => re(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => At((l, d, _, g, p) => {
      const $ = l._1, h = l._2;
      return d((m) => {
        const y = (x, J) => {
          const T = x._3;
          return d((b) => {
            if (T)
              return g(x, J);
            const L = l._1, A = l._2;
            return d((E) => l_(
              R(L, A, !1),
              d,
              _,
              (O, H) => {
                const F = O._3;
                return d((B) => F ? g(O, H) : bf(l, d, _, g, p));
              },
              p
            ));
          });
        };
        return d((x) => t(
          R($, h, !1),
          d,
          _,
          y,
          (J, T) => d((b) => d((L) => re(
            J,
            d,
            _,
            y,
            (A, E) => d((O) => {
              const H = xe(nn((B) => B !== `
` && B !== "\r" && B !== "#" && B !== "}")), F = J._3 && !A._3 ? R(A._1, A._2, !0) : A;
              return d((B) => H(
                F,
                d,
                _,
                y,
                (Z, tt) => d((Y) => p(
                  F._3 && !Z._3 ? R(Z._1, Z._2, !0) : Z,
                  Bm(io(Gt(tn.foldr, tt)))
                ))
              ));
            })
          )))
        ));
      });
    })('label ("…", : rest-of-line, or |…|)')(n._3 && !u._3 ? R(u._1, u._2, !0) : u, e, r, o, i))
  ));
})(), g_ = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => l_(
    R(i, s, !1),
    n,
    e,
    (c, a) => {
      const l = c._3;
      return n((d) => l ? r(c, a) : bf(t, n, e, r, o));
    },
    o
  ));
}, Ji = /* @__PURE__ */ nn((t) => t >= "0" && t <= "9"), Rn = /* @__PURE__ */ (() => {
  const t = At(nn((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => e((s) => {
    const u = (l, d) => e((_) => {
      const g = xe((() => {
        const $ = At(nn((m) => m === "_"))("'_'"), h = At(nn((m) => m === "-"))("'-'");
        return (m, y, x, J, T) => {
          const b = m._1, L = m._2;
          return y((A) => Ms(
            R(b, L, !1),
            y,
            x,
            (E, O) => {
              const H = E._3;
              return y((F) => {
                if (H)
                  return J(E, O);
                const B = m._1, Z = m._2;
                return y((tt) => Ji(
                  R(B, Z, !1),
                  y,
                  x,
                  (Y, z) => {
                    const S = Y._3;
                    return y((C) => {
                      if (S)
                        return J(Y, z);
                      const q = m._1, P = m._2;
                      return y((D) => $(
                        R(q, P, !1),
                        y,
                        x,
                        (W, V) => {
                          const U = W._3;
                          return y((X) => U ? J(W, V) : h(m, y, x, J, T));
                        },
                        T
                      ));
                    });
                  },
                  T
                ));
              });
            },
            T
          ));
        };
      })()), p = n._3 && !l._3 ? R(l._1, l._2, !0) : l;
      return e(($) => g(
        p,
        e,
        r,
        o,
        (h, m) => e((y) => i(
          p._3 && !h._3 ? R(h._1, h._2, !0) : h,
          Li(d) + io(Gt(tn.foldr, m))
        ))
      ));
    }), c = n._1, a = n._2;
    return e((l) => Ms(
      R(c, a, !1),
      e,
      r,
      (d, _) => {
        const g = d._3;
        return e((p) => g ? o(d, _) : t(n, e, r, o, u));
      },
      u
    ));
  });
})(), C3 = /* @__PURE__ */ At((t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => bf(
    R(i, s, !1),
    n,
    e,
    (c, a) => {
      const l = c._3;
      return n((d) => l ? r(c, a) : Rn(t, n, e, r, o));
    },
    o
  ));
})("frame name (identifier or quoted string)"), bl = (t, n, e, r, o) => n((i) => re(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = At(Rn)("attribute key"), l = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((d) => a(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => {
        const $ = l._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n((h) => re(
          $,
          n,
          e,
          r,
          (m, y) => n((x) => {
            const J = At(At(nn((b) => b === ":"))("':'"))("':'"), T = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((b) => J(
              T,
              n,
              e,
              r,
              (L, A) => n((E) => {
                const O = T._3 && !L._3 ? R(L._1, L._2, !0) : L;
                return n((H) => re(
                  O,
                  n,
                  e,
                  r,
                  (F, B) => n((Z) => {
                    const tt = At(Rn)("attribute value"), Y = O._3 && !F._3 ? R(F._1, F._2, !0) : F;
                    return n((z) => tt(
                      Y,
                      n,
                      e,
                      r,
                      (S, C) => n((q) => {
                        const P = Y._3 && !S._3 ? R(S._1, S._2, !0) : S;
                        return n((D) => re(
                          P,
                          n,
                          e,
                          r,
                          (W, V) => n((U) => o(P._3 && !W._3 ? R(W._1, W._2, !0) : W, k(g, C)))
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
)), A3 = (t, n, e, r, o) => n((i) => Rn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((l) => re(
      a,
      n,
      e,
      r,
      (d, _) => n((g) => {
        const p = a._3 && !d._3 ? R(d._1, d._2, !0) : d;
        return n(($) => k3(
          p,
          n,
          e,
          r,
          (h, m) => n((y) => {
            const x = p._3 && !h._3 ? R(h._1, h._2, !0) : h;
            return n((J) => re(
              x,
              n,
              e,
              r,
              (T, b) => n((L) => {
                const A = At(Rn)("target node identifier"), E = x._3 && !T._3 ? R(T._1, T._2, !0) : T;
                return n((O) => A(
                  E,
                  n,
                  e,
                  r,
                  (H, F) => n((B) => {
                    const Z = xe((Y, z, S, C, q) => {
                      const P = Y._3;
                      return z((D) => z((W) => re(
                        Y,
                        z,
                        S,
                        (V, U) => C(R(V._1, V._2, P), U),
                        (V, U) => z((X) => z((et) => {
                          const nt = Y._3 && !V._3 ? R(V._1, V._2, !0) : V;
                          return g_(
                            nt,
                            z,
                            S,
                            (j, rt) => C(R(j._1, j._2, P), rt),
                            (j, rt) => z((ct) => q(nt._3 && !j._3 ? R(j._1, j._2, !0) : j, rt))
                          );
                        }))
                      )));
                    }), tt = E._3 && !H._3 ? R(H._1, H._2, !0) : H;
                    return n((Y) => Z(
                      tt,
                      n,
                      e,
                      r,
                      (z, S) => n((C) => (() => {
                        if (m === "LeftArrow") {
                          const P = hr(
                            "Token",
                            {
                              from: F,
                              to: u,
                              labels: Q(t0)(Gt(tn.foldr, S)),
                              arrow: m
                            }
                          );
                          return (D, W, V, U, X) => X(D, P);
                        }
                        const q = hr(
                          "Token",
                          {
                            from: u,
                            to: F,
                            labels: Q(t0)(Gt(tn.foldr, S)),
                            arrow: m
                          }
                        );
                        return (P, D, W, V, U) => U(P, q);
                      })()(tt._3 && !z._3 ? R(z._1, z._2, !0) : z, n, e, r, o))
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
)), P3 = (t, n, e, r, o) => n((i) => Ji(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = xe(Ji), l = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((d) => a(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => {
        const $ = Ph(Li(u) + io(Gt(
          tn.foldr,
          g
        )));
        return (() => {
          if ($.tag === "Just") {
            const h = $._1;
            return (m, y, x, J, T) => T(m, h);
          }
          if ($.tag === "Nothing")
            return (h, m, y, x, J) => J(h, 0);
          f();
        })()(l._3 && !_._3 ? R(_._1, _._2, !0) : _, n, e, r, o);
      })
    ));
  })
)), Bi = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Zr(t)(
    n,
    e,
    r,
    (c, a) => o(R(c._1, c._2, s), a),
    (c, a) => e((l) => {
      const d = Bu((() => {
        const g = At(nn(($) => $ === "_"))("'_'"), p = At(nn(($) => $ === "-"))("'-'");
        return ($, h, m, y, x) => {
          const J = $._1, T = $._2;
          return h((b) => Ms(
            R(J, T, !1),
            h,
            m,
            (L, A) => {
              const E = L._3;
              return h((O) => {
                if (E)
                  return y(L, A);
                const H = $._1, F = $._2;
                return h((B) => Ji(
                  R(H, F, !1),
                  h,
                  m,
                  (Z, tt) => {
                    const Y = Z._3;
                    return h((z) => {
                      if (Y)
                        return y(Z, tt);
                      const S = $._1, C = $._2;
                      return h((q) => g(
                        R(S, C, !1),
                        h,
                        m,
                        (P, D) => {
                          const W = P._3;
                          return h((V) => W ? y(P, D) : p($, h, m, y, x));
                        },
                        x
                      ));
                    });
                  },
                  x
                ));
              });
            },
            x
          ));
        };
      })()), _ = n._3 && !c._3 ? R(c._1, c._2, !0) : c;
      return e((g) => d(
        _,
        e,
        r,
        (p, $) => o(R(p._1, p._2, s), $),
        (p, $) => e((h) => {
          const m = _._3 && !p._3 ? R(p._1, p._2, !0) : p;
          return e((y) => pe(
            m,
            e,
            r,
            (x, J) => o(R(x._1, x._2, s), J),
            (x, J) => e((T) => i(m._3 && !x._3 ? R(x._1, x._2, !0) : x, t))
          ));
        })
      ));
    })
  ));
}, G3 = (t, n, e, r, o) => n((i) => Je(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((l) => Bi("via")(
      a,
      n,
      e,
      r,
      (d, _) => n((g) => {
        const p = a._3 && !d._3 ? R(d._1, d._2, !0) : d;
        return n(($) => Rn(
          p,
          n,
          e,
          r,
          (h, m) => n((y) => {
            const x = p._3 && !h._3 ? R(h._1, h._2, !0) : h;
            return n((J) => Je(
              x,
              n,
              e,
              r,
              (T, b) => n((L) => {
                const A = x._3 && !T._3 ? R(T._1, T._2, !0) : T;
                return n((E) => Rn(
                  A,
                  n,
                  e,
                  r,
                  (O, H) => n((F) => o(A._3 && !O._3 ? R(O._1, O._2, !0) : O, { from: m, to: H }))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), Fr = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Zr(t)(
    n,
    e,
    r,
    (c, a) => o(R(c._1, c._2, s), a),
    (c, a) => e((l) => {
      const d = Bu((() => {
        const g = At(nn(($) => $ === "_"))("'_'"), p = At(nn(($) => $ === "-"))("'-'");
        return ($, h, m, y, x) => {
          const J = $._1, T = $._2;
          return h((b) => Ms(
            R(J, T, !1),
            h,
            m,
            (L, A) => {
              const E = L._3;
              return h((O) => {
                if (E)
                  return y(L, A);
                const H = $._1, F = $._2;
                return h((B) => Ji(
                  R(H, F, !1),
                  h,
                  m,
                  (Z, tt) => {
                    const Y = Z._3;
                    return h((z) => {
                      if (Y)
                        return y(Z, tt);
                      const S = $._1, C = $._2;
                      return h((q) => g(
                        R(S, C, !1),
                        h,
                        m,
                        (P, D) => {
                          const W = P._3;
                          return h((V) => W ? y(P, D) : p($, h, m, y, x));
                        },
                        x
                      ));
                    });
                  },
                  x
                ));
              });
            },
            x
          ));
        };
      })()), _ = n._3 && !c._3 ? R(c._1, c._2, !0) : c;
      return e((g) => d(
        _,
        e,
        r,
        (p, $) => o(R(p._1, p._2, s), $),
        (p, $) => e((h) => i(_._3 && !p._3 ? R(p._1, p._2, !0) : p, void 0))
      ));
    })
  ));
}, F3 = (t, n, e, r, o) => n((i) => Fr("+edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((l) => Je(
      a,
      n,
      e,
      r,
      (d, _) => n((g) => {
        const p = At(Rn)("source node identifier"), $ = a._3 && !d._3 ? R(d._1, d._2, !0) : d;
        return n((h) => p(
          $,
          n,
          e,
          r,
          (m, y) => n((x) => {
            const J = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((T) => Je(
              J,
              n,
              e,
              r,
              (b, L) => n((A) => {
                const E = At(Rn)("target node identifier"), O = J._3 && !b._3 ? R(b._1, b._2, !0) : b;
                return n((H) => E(
                  O,
                  n,
                  e,
                  r,
                  (F, B) => n((Z) => {
                    const tt = O._3 && !F._3 ? R(F._1, F._2, !0) : F;
                    return n((Y) => {
                      const z = (q, P) => n((D) => o(
                        tt._3 && !q._3 ? R(q._1, q._2, !0) : q,
                        hr("AddEdge", { from: y, to: B, label: P.tag === "Just" ? N("Just", P._1) : v })
                      )), S = tt._1, C = tt._2;
                      return n((q) => n((P) => {
                        const D = (W, V) => {
                          const U = W._3;
                          return n((X) => U ? r(W, V) : z(tt, v));
                        };
                        return n((W) => n((V) => re(
                          R(S, C, !1),
                          n,
                          e,
                          (U, X) => D(R(U._1, U._2, !1), X),
                          (U, X) => n((et) => n((nt) => g_(
                            U,
                            n,
                            e,
                            (j, rt) => D(R(j._1, j._2, !1), rt),
                            (j, rt) => n((ct) => {
                              const dt = U._3 && !j._3 ? R(j._1, j._2, !0) : j;
                              return n((Ot) => z(dt, N("Just", rt)));
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
)), I3 = (t, n, e, r, o) => n((i) => Fr("-edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((l) => Je(
      a,
      n,
      e,
      r,
      (d, _) => n((g) => {
        const p = At(Rn)("source node identifier"), $ = a._3 && !d._3 ? R(d._1, d._2, !0) : d;
        return n((h) => p(
          $,
          n,
          e,
          r,
          (m, y) => n((x) => {
            const J = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((T) => Je(
              J,
              n,
              e,
              r,
              (b, L) => n((A) => {
                const E = At(Rn)("target node identifier"), O = J._3 && !b._3 ? R(b._1, b._2, !0) : b;
                return n((H) => E(
                  O,
                  n,
                  e,
                  r,
                  (F, B) => n((Z) => o(
                    O._3 && !F._3 ? R(F._1, F._2, !0) : F,
                    hr("DelEdge", { from: y, to: B })
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), R3 = (t, n, e, r, o) => n((i) => Fr("-node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((l) => Je(
      a,
      n,
      e,
      r,
      (d, _) => n((g) => {
        const p = At(Rn)("node identifier"), $ = a._3 && !d._3 ? R(d._1, d._2, !0) : d;
        return n((h) => p(
          $,
          n,
          e,
          r,
          (m, y) => n((x) => {
            const J = xe((b, L, A, E, O) => {
              const H = b._3;
              return G3(b, L, A, (F, B) => E(R(F._1, F._2, H), B), O);
            }), T = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((b) => J(
              T,
              n,
              e,
              r,
              (L, A) => n((E) => o(
                T._3 && !L._3 ? R(L._1, L._2, !0) : L,
                hr("DelNode", { id: y, via: Gt(tn.foldr, A) })
              ))
            ));
          })
        ));
      })
    ));
  })
)), B3 = (t, n, e, r, o) => n((i) => Fr("enter")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((l) => Je(
      a,
      n,
      e,
      r,
      (d, _) => n((g) => {
        const p = At(Rn)("node identifier"), $ = a._3 && !d._3 ? R(d._1, d._2, !0) : d;
        return n((h) => p(
          $,
          n,
          e,
          r,
          (m, y) => n((x) => o(
            $._3 && !m._3 ? R(m._1, m._2, !0) : m,
            hr("Enter", { id: y })
          ))
        ));
      })
    ));
  })
)), z3 = (t, n, e, r, o) => n((i) => Fr("exit")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => o(t._3 && !s._3 ? R(s._1, s._2, !0) : s, Ab))
)), D3 = (t, n, e, r, o) => n((i) => Fr("~edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((l) => Je(
      a,
      n,
      e,
      r,
      (d, _) => n((g) => {
        const p = At(Rn)("source node identifier"), $ = a._3 && !d._3 ? R(d._1, d._2, !0) : d;
        return n((h) => p(
          $,
          n,
          e,
          r,
          (m, y) => n((x) => {
            const J = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((T) => Je(
              J,
              n,
              e,
              r,
              (b, L) => n((A) => {
                const E = At(Rn)("target node identifier"), O = J._3 && !b._3 ? R(b._1, b._2, !0) : b;
                return n((H) => E(
                  O,
                  n,
                  e,
                  r,
                  (F, B) => n((Z) => {
                    const tt = O._3 && !F._3 ? R(F._1, F._2, !0) : F;
                    return n((Y) => pe(
                      tt,
                      n,
                      e,
                      r,
                      (z, S) => n((C) => {
                        const q = At(Zr("->"))("'->'"), P = tt._3 && !z._3 ? R(z._1, z._2, !0) : z;
                        return n((D) => q(
                          P,
                          n,
                          e,
                          r,
                          (W, V) => n((U) => {
                            const X = P._3 && !W._3 ? R(W._1, W._2, !0) : W;
                            return n((et) => pe(
                              X,
                              n,
                              e,
                              r,
                              (nt, j) => n((rt) => {
                                const ct = At(Rn)("new source node identifier"), dt = X._3 && !nt._3 ? R(nt._1, nt._2, !0) : nt;
                                return n((Ot) => ct(
                                  dt,
                                  n,
                                  e,
                                  r,
                                  (bt, Dt) => n((_t) => {
                                    const wt = dt._3 && !bt._3 ? R(bt._1, bt._2, !0) : bt;
                                    return n((pt) => Je(
                                      wt,
                                      n,
                                      e,
                                      r,
                                      ($t, lt) => n((gt) => {
                                        const st = At(Rn)("new target node identifier"), ft = wt._3 && !$t._3 ? R($t._1, $t._2, !0) : $t;
                                        return n((Nt) => st(
                                          ft,
                                          n,
                                          e,
                                          r,
                                          (vt, kt) => n((Qt) => o(
                                            ft._3 && !vt._3 ? R(vt._1, vt._2, !0) : vt,
                                            hr("RepointEdge", { from: y, to: B, newFrom: Dt, newTo: kt })
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
)), Q3 = (t, n, e, r, o) => n((i) => Fr("seed")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((l) => re(
      a,
      n,
      e,
      r,
      (d, _) => n((g) => {
        const p = At(P3)("integer (seed value)"), $ = a._3 && !d._3 ? R(d._1, d._2, !0) : d;
        return n((h) => p(
          $,
          n,
          e,
          r,
          (m, y) => n((x) => {
            const J = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((T) => pe(
              J,
              n,
              e,
              r,
              (b, L) => n((A) => o(J._3 && !b._3 ? R(b._1, b._2, !0) : b, y))
            ));
          })
        ));
      })
    ));
  })
)), zi = /* @__PURE__ */ x3(/* @__PURE__ */ (() => {
  const t = At(nn((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (c, a) => e((l) => e((d) => {
      const _ = n._3 && !c._3 ? R(c._1, c._2, !0) : c;
      return pe(_, e, r, o, (g, p) => e(($) => i(_._3 && !g._3 ? R(g._1, g._2, !0) : g, p)));
    }))
  )));
})())(/* @__PURE__ */ At(/* @__PURE__ */ (() => {
  const t = At(nn((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => pe(
    n,
    e,
    r,
    o,
    (c, a) => e((l) => e((d) => {
      const _ = n._3 && !c._3 ? R(c._1, c._2, !0) : c;
      return t(_, e, r, o, (g, p) => e(($) => i(_._3 && !g._3 ? R(g._1, g._2, !0) : g, p)));
    }))
  )));
})())("closing '}'")), H3 = /* @__PURE__ */ zi((t, n, e, r, o) => n((i) => {
  const s = (a, l) => n((d) => (() => {
    if (l.tag === "Nothing")
      return (_, g, p, $, h) => h(_, I);
    if (l.tag === "Just") {
      const _ = l._1, g = xe((() => {
        const p = At(nn(($) => $ === ","))("','");
        return ($, h, m, y, x) => {
          const J = $._3;
          return h((T) => h((b) => h((L) => h((A) => h((E) => h((O) => re(
            $,
            h,
            m,
            (H, F) => y(R(H._1, H._2, J), F),
            (H, F) => h((B) => h((Z) => {
              const tt = $._3 && !H._3 ? R(H._1, H._2, !0) : H;
              return p(
                tt,
                h,
                m,
                (Y, z) => y(R(Y._1, Y._2, J), z),
                (Y, z) => h((S) => {
                  const C = tt._3 && !Y._3 ? R(Y._1, Y._2, !0) : Y;
                  return h((q) => h((P) => {
                    const D = $._3 && !C._3 ? R(C._1, C._2, !0) : C;
                    return re(
                      D,
                      h,
                      m,
                      (W, V) => y(R(W._1, W._2, J), V),
                      (W, V) => h((U) => {
                        const X = D._3 && !W._3 ? R(W._1, W._2, !0) : W;
                        return h((et) => h((nt) => {
                          const j = $._3 && !X._3 ? R(X._1, X._2, !0) : X;
                          return bl(
                            j,
                            h,
                            m,
                            (rt, ct) => y(R(rt._1, rt._2, J), ct),
                            (rt, ct) => h((dt) => x(j._3 && !rt._3 ? R(rt._1, rt._2, !0) : rt, ct))
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
      return (p, $, h, m, y) => $((x) => g(
        p,
        $,
        h,
        m,
        (J, T) => $((b) => y(
          p._3 && !J._3 ? R(J._1, J._2, !0) : J,
          T3([_, ...Gt(tn.foldr, T)])
        ))
      ));
    }
    f();
  })()(t._3 && !a._3 ? R(a._1, a._2, !0) : a, n, e, r, o)), u = t._1, c = t._2;
  return n((a) => n((l) => bl(
    R(u, c, !1),
    n,
    e,
    (d, _) => n((g) => s(t, v)),
    (d, _) => n((g) => s(d, N("Just", _)))
  )));
})), W3 = (t, n, e, r, o) => n((i) => Fr("+node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((l) => Je(
      a,
      n,
      e,
      r,
      (d, _) => n((g) => {
        const p = At(Rn)("node identifier"), $ = a._3 && !d._3 ? R(d._1, d._2, !0) : d;
        return n((h) => p(
          $,
          n,
          e,
          r,
          (m, y) => n((x) => {
            const J = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((T) => n((b) => re(
              J,
              n,
              e,
              r,
              (L, A) => n((E) => {
                const O = nn((F) => F === `
` || F === "\r" || F === "#" || F === "}" || F === "{"), H = J._3 && !L._3 ? R(L._1, L._2, !0) : L;
                return n((F) => {
                  const B = (Y, z) => n((S) => (z ? ((C, q, P, D, W) => W(C, "")) : S3)(
                    H._3 && !Y._3 ? R(Y._1, Y._2, !0) : Y,
                    n,
                    e,
                    r,
                    (C, q) => n((P) => {
                      const D = J._3 && !C._3 ? R(C._1, C._2, !0) : C;
                      return n((W) => {
                        const V = (et, nt) => n((j) => o(
                          D._3 && !et._3 ? R(et._1, et._2, !0) : et,
                          hr(
                            "AddNode",
                            {
                              id: y,
                              label: q,
                              shape: (() => {
                                const rt = J3("shape")(nt);
                                if (rt.tag === "Just")
                                  return rt._1 === "rectangle" || rt._1 === "rect" ? or : rt._1 === "cylinder" || rt._1 === "cyl" ? jf : rt._1 === "parallelogram" ? Ap : rt._1 === "diamond" ? Pp : rt._1 === "ellipse" ? Gp : rt._1 === "document" || rt._1 === "doc" ? Zf : rt._1 === "cloud" ? Fp : or;
                                if (rt.tag === "Nothing")
                                  return or;
                                f();
                              })()
                            }
                          )
                        )), U = D._1, X = D._2;
                        return n((et) => {
                          const nt = (j, rt) => {
                            const ct = j._3;
                            return n((dt) => ct ? r(j, rt) : V(D, I));
                          };
                          return n((j) => n((rt) => re(
                            R(U, X, !1),
                            n,
                            e,
                            (ct, dt) => nt(R(ct._1, ct._2, !1), dt),
                            (ct, dt) => n((Ot) => n((bt) => H3(
                              ct,
                              n,
                              e,
                              (Dt, _t) => nt(R(Dt._1, Dt._2, !1), _t),
                              (Dt, _t) => n((wt) => V(ct._3 && !Dt._3 ? R(Dt._1, Dt._2, !0) : Dt, _t))
                            )))
                          )));
                        });
                      });
                    })
                  )), Z = H._1, tt = H._2;
                  return n((Y) => {
                    const z = (S, C) => {
                      const q = S._3;
                      return n((P) => q ? r(S, C) : B(H, !1));
                    };
                    return n((S) => n((C) => n((q) => Nf(
                      R(Z, tt, !1),
                      n,
                      e,
                      (P, D) => {
                        const W = P._3;
                        return n((V) => W ? z(R(Z, tt, !1), D) : n((U) => O(
                          R(Z, tt, !1),
                          n,
                          e,
                          (X, et) => z(R(Z, tt, !1), et),
                          (X, et) => n((nt) => n((j) => B(R(Z, tt, !1), !0)))
                        )));
                      },
                      (P, D) => n((W) => n((V) => B(R(Z, tt, !1), !0)))
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
)), O3 = (t, n, e, r, o) => n((i) => u_(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = At(Tf([W3, R3, D3, F3, I3, B3, z3, A3]))("statement (+node, -node, +edge, -edge, ~edge, enter, exit, or 'a -> b'/'a <- b'/'a -- b')"), l = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((d) => a(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => o(
        l._3 && !_._3 ? R(_._1, _._2, !0) : _,
        xf("Leaf", { op: g, line: u.line, column: u.column })
      ))
    ));
  })
)), q3 = (t, n, e, r, o) => n((i) => Bi("seq")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => zi(kf(o_))(
    t._3 && !s._3 ? R(s._1, s._2, !0) : s,
    n,
    e,
    r,
    o
  ))
)), X3 = (t, n, e, r, o) => n((i) => Bi("par")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => zi(kf(Ib))(
    t._3 && !s._3 ? R(s._1, s._2, !0) : s,
    n,
    e,
    r,
    o
  ))
)), kf = (t) => {
  const n = xe(Y3());
  return (e, r, o, i, s) => r((u) => n(
    e,
    r,
    o,
    i,
    (c, a) => r((l) => s(
      e._3 && !c._3 ? R(c._1, c._2, !0) : c,
      t(Gt(tn.foldr, a))
    ))
  ));
}, Y3 = /* @__PURE__ */ Vl(() => {
  const t = Bu(At(nn((n) => n === "}"))("'}'"));
  return (n, e, r, o, i) => e((s) => {
    const u = n._3;
    return e((c) => e((a) => pe(
      n,
      e,
      r,
      (l, d) => o(R(l._1, l._2, u), d),
      (l, d) => e((_) => e((g) => {
        const p = n._3 && !l._3 ? R(l._1, l._2, !0) : l;
        return t(
          p,
          e,
          r,
          ($, h) => o(R($._1, $._2, u), h),
          ($, h) => e((m) => {
            const y = p._3 && !$._3 ? R($._1, $._2, !0) : $;
            return e((x) => {
              const J = Tf([
                (b, L, A, E, O) => {
                  const H = b._3;
                  return X3(b, L, A, (F, B) => E(R(F._1, F._2, H), B), O);
                },
                (b, L, A, E, O) => {
                  const H = b._3;
                  return q3(b, L, A, (F, B) => E(R(F._1, F._2, H), B), O);
                },
                O3
              ]), T = n._3 && !y._3 ? R(y._1, y._2, !0) : y;
              return e((b) => J(
                T,
                e,
                r,
                o,
                (L, A) => e((E) => {
                  const O = T._3 && !L._3 ? R(L._1, L._2, !0) : L;
                  return e((H) => re(
                    O,
                    e,
                    r,
                    o,
                    (F, B) => e((Z) => {
                      const tt = O._3 && !F._3 ? R(F._1, F._2, !0) : F;
                      return e((Y) => b3(
                        tt,
                        e,
                        r,
                        o,
                        (z, S) => e((C) => i(tt._3 && !z._3 ? R(z._1, z._2, !0) : z, A))
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
}), $c = (t) => (n) => (e, r, o, i, s) => r((u) => Bi(t)(
  e,
  r,
  o,
  i,
  (c, a) => r((l) => {
    const d = e._3 && !c._3 ? R(c._1, c._2, !0) : c;
    return r((_) => C3(
      d,
      r,
      o,
      i,
      (g, p) => r(($) => {
        const h = d._3 && !g._3 ? R(g._1, g._2, !0) : g;
        return r((m) => pe(
          h,
          r,
          o,
          i,
          (y, x) => r((J) => {
            const T = zi(kf(o_)), b = h._3 && !y._3 ? R(y._1, y._2, !0) : y;
            return r((L) => T(
              b,
              r,
              o,
              i,
              (A, E) => r((O) => {
                const H = b._3 && !A._3 ? R(A._1, A._2, !0) : A;
                return r((F) => pe(
                  H,
                  r,
                  o,
                  i,
                  (B, Z) => r((tt) => s(
                    H._3 && !B._3 ? R(B._1, B._2, !0) : B,
                    { name: N("Just", p), ops: E, kind: n }
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), U3 = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => $c("keyframe")(Pb)(
    R(i, s, !1),
    n,
    e,
    (c, a) => {
      const l = c._3;
      return n((d) => {
        if (l)
          return r(c, a);
        const _ = t._1, g = t._2;
        return n((p) => $c("still")(Gb)(
          R(_, g, !1),
          n,
          e,
          ($, h) => {
            const m = $._3;
            return n((y) => m ? r($, h) : $c("title")(Fb)(t, n, e, r, o));
          },
          o
        ));
      });
    },
    o
  ));
}, V3 = (t, n, e, r, o) => n((i) => Bi("inside")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = At(Rn)("node identifier"), l = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((d) => a(
      l,
      n,
      e,
      r,
      (_, g) => n((p) => {
        const $ = l._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n((h) => pe(
          $,
          n,
          e,
          r,
          (m, y) => n((x) => {
            const J = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((T) => zi(d_)(
              J,
              n,
              e,
              r,
              (b, L) => n((A) => {
                const E = J._3 && !b._3 ? R(b._1, b._2, !0) : b;
                return n((O) => pe(
                  E,
                  n,
                  e,
                  r,
                  (H, F) => n((B) => o(E._3 && !H._3 ? R(H._1, H._2, !0) : H, { node: g, doc: L }))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), d_ = (t, n, e, r, o) => n((i) => {
  const s = (a, l) => n((d) => {
    const _ = xe(K3()), g = t._3 && !a._3 ? R(a._1, a._2, !0) : a;
    return n((p) => _(
      g,
      n,
      e,
      r,
      ($, h) => n((m) => {
        const y = Gt(tn.foldr, h);
        return o(
          g._3 && !$._3 ? R($._1, $._2, !0) : $,
          {
            seed: (() => {
              if (l.tag === "Nothing")
                return 0;
              if (l.tag === "Just")
                return l._1;
              f();
            })(),
            frames: yt((x) => {
              if (x.tag === "TopFrame")
                return N("Just", x._1);
              if (x.tag === "TopInside")
                return v;
              f();
            })(y),
            interiors: yt((x) => {
              if (x.tag === "TopInside")
                return N("Just", x._1);
              if (x.tag === "TopFrame")
                return v;
              f();
            })(y)
          }
        );
      })
    ));
  }), u = t._1, c = t._2;
  return n((a) => n((l) => Q3(
    R(u, c, !1),
    n,
    e,
    (d, _) => {
      const g = d._3;
      return n((p) => g ? r(d, _) : s(t, v));
    },
    (d, _) => n((g) => s(d, N("Just", _)))
  )));
}), K3 = /* @__PURE__ */ Vl(() => u3.defer((t) => (n, e, r, o, i) => {
  const s = n._1, u = n._2;
  return e((c) => e((a) => V3(
    R(s, u, !1),
    e,
    r,
    (l, d) => e((_) => e((g) => U3(n, e, r, o, (p, $) => e((h) => i(p, Jl("TopFrame", $)))))),
    (l, d) => e((_) => i(l, Jl("TopInside", d)))
  )));
})), M3 = /* @__PURE__ */ (() => {
  const t = At((n, e, r, o, i) => e((s) => e((u) => pe(
    n,
    e,
    r,
    o,
    (c, a) => e((l) => e((d) => {
      const _ = n._3 && !c._3 ? R(c._1, c._2, !0) : c;
      return Nf(
        _,
        e,
        r,
        o,
        (g, p) => e(($) => i(_._3 && !g._3 ? R(g._1, g._2, !0) : g, p))
      );
    }))
  ))))("'keyframe', 'still', 'title', 'inside', or end of input");
  return (n, e, r, o, i) => e((s) => e((u) => e((c) => e((a) => pe(
    n,
    e,
    r,
    o,
    (l, d) => e((_) => e((g) => {
      const p = n._3 && !l._3 ? R(l._1, l._2, !0) : l;
      return d_(
        p,
        e,
        r,
        o,
        ($, h) => e((m) => {
          const y = p._3 && !$._3 ? R($._1, $._2, !0) : $;
          return e((x) => e((J) => {
            const T = n._3 && !y._3 ? R(y._1, y._2, !0) : y;
            return t(
              T,
              e,
              r,
              o,
              (b, L) => e((A) => i(T._3 && !b._3 ? R(b._1, b._2, !0) : b, h))
            );
          }));
        })
      );
    }))
  )))));
})(), j3 = (t) => {
  const n = g3(t)(M3);
  if (n.tag === "Left")
    return Tt("Left", { msg: n._1._1, line: n._1._2.line, column: n._1._2.column });
  if (n.tag === "Right")
    return Tt("Right", n._1);
  f();
}, Lf = (t) => {
  const n = j3(t);
  if (n.tag === "Left")
    return Tt("Left", n._1.msg);
  if (n.tag === "Right")
    return Tt("Right", n._1);
  f();
};
function Z3(t, n, e, r) {
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
function ze(t) {
  return function(n) {
    return function(e) {
      return function() {
        e.setAttribute(t, n);
      };
    };
  };
}
function yc(t) {
  return function() {
    return function(n) {
      return t(n)();
    };
  };
}
function xc(t) {
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
function vc(t) {
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
const js = function() {
  return window;
};
function tk(t) {
  return function() {
    return t.document;
  };
}
function ta(t) {
  return function(n) {
    return function() {
      return n.requestAnimationFrame(t);
    };
  };
}
function nk(t) {
  return function(n) {
    return function() {
      return n.cancelAnimationFrame(t);
    };
  };
}
const ek = (t) => t, na = (t) => () => {
  const n = t.getBoundingClientRect?.(), e = n?.width || t.clientWidth || 0, r = n?.height || t.clientHeight || 0;
  return { width: e, height: r };
}, rk = (t) => (n) => () => {
  let e = 0;
  const r = () => {
    e || (e = requestAnimationFrame(() => {
      e = 0, n();
    }));
  }, o = typeof ResizeObserver > "u" ? null : new ResizeObserver(r);
  return o?.observe(t), window.addEventListener("resize", r), () => {
    e && cancelAnimationFrame(e), o?.disconnect(), window.removeEventListener("resize", r);
  };
}, ok = () => window.devicePixelRatio || 1, ik = (t) => (n) => (e) => (r) => (o) => () => {
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
}, sk = (t, n) => {
  n.innerHTML = t;
}, kl = (t, n, e) => {
  t.style.setProperty(n, e);
}, uk = (t) => (n) => t === n, __ = (t) => t, h_ = (t, n, e) => ({ tag: t, _1: n, _2: e }), ck = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, p_ = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ak = /* @__PURE__ */ h_("AutoSize"), Ll = /* @__PURE__ */ __("CanvasRenderer"), fk = /* @__PURE__ */ __("SvgRenderer"), lk = (t) => (n) => {
  const e = t - n * M(vn(Le(t / n)));
  return n <= 0 ? 0 : e < 0 ? e + n : e;
}, gk = (t) => w((n) => (e) => {
  const r = t(e);
  return () => (n(), r());
})(() => {
}), m_ = (t) => (n) => ({ ...n, state: { ...n.state, camera: t }, minis: Q((e) => m_(t)(e))(n.minis) }), dk = (t) => (n) => (e) => {
  const r = Ai(e.rootLayout)(e.camera), o = ze("data-mg-too-small")("0")(t);
  return () => (o(), ze("data-mg-camera-vw")(Wr(r.w))(t)(), ze("data-mg-camera-vh")(Wr(r.h))(t)(), ze("data-mg-camera-zoom")(Wr(e.camera.zoom))(t)(), ze("data-mg-viewport-css-width")(Wr(n.w))(t)(), ze("data-mg-viewport-css-height")(Wr(n.h))(t)());
}, $_ = () => Yh() / 1e3, _k = (t) => {
  const n = Lf(t);
  if (n.tag === "Left")
    return Tt("Left", n._1);
  if (n.tag === "Right") {
    const e = Iu(n._1)(Fu)._1;
    if (e.tag === "Left")
      return Tt("Left", e._1.msg);
    if (e.tag === "Right")
      return Tt("Right", e._1);
  }
  f();
}, wc = (t) => (n) => {
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
}, hk = (t) => (n) => (e) => {
  const r = id(e);
  return () => {
    const o = r(), i = sd(e)(), s = Ya(hu)(qa)(e)(bu(o)(i)(e));
    if (s.tag === "Left")
      return Tt("Left", "precompute failed");
    if (s.tag === "Right")
      return Tt("Right", { schedule: s._1 });
    f();
  };
}, pk = (t) => (n) => {
  if (n.tag === "FixedSize") {
    const e = n._1 <= 0 || n._2 <= 0 ? v : N("Just", n._1 / n._2);
    return () => e;
  }
  if (n.tag === "AutoSize") {
    const e = na(t);
    return () => {
      const r = e();
      return r.width <= 0 || r.height <= 0 ? v : N("Just", r.width / r.height);
    };
  }
  f();
}, as = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (l) => () => {
  const d = $_(), _ = a.value;
  a.value = d;
  const g = _ === 0 ? 0 : d - _, p = (() => {
    if (e.tag === "FixedSize")
      return { w: e._1, h: e._2 };
    if (e.tag === "AutoSize") {
      const T = na(t)();
      return { w: T.width <= 0 ? 480 : T.width, h: T.height <= 0 ? 320 : T.height };
    }
    f();
  })();
  if (p.w < 480 || p.h < 320)
    return ik(t)(p.w)(p.h)(480)(320)();
  const $ = u1({ widthPx: p.w, heightPx: p.h })(s), h = By($)(p_(l)($.totalDuration)), m = i ? h : { ...h, levels: Q((T) => ({ ...T, state: { ...T.state, frameTitle: "" } }))(h.levels) }, y = c.value, x = (() => {
    if (y.tag === "Nothing")
      return m.camera;
    if (y.tag === "Just")
      return Wg(s.cameraConfig.cameraDecay)(g)(y._1)(m.camera);
    f();
  })();
  c.value = N("Just", x);
  const J = { ...m, camera: x, levels: Q(m_(x))(m.levels) };
  if (dk(t)(p)(J)(), n === "CanvasRenderer") {
    const T = ek(t), b = Gi({ padding: 8, outputAspect: v })(J), L = (() => {
      if (e.tag === "FixedSize")
        return { w: e._1, h: e._2 };
      if (e.tag === "AutoSize") {
        const S = na(t)();
        return {
          w: S.width,
          h: S.height <= 0 ? b.vw <= 0 ? S.width : S.width * b.vh / b.vw : S.height
        };
      }
      f();
    })(), A = ok(), E = L.w * A, O = L.h * A, H = Uh(T)(), F = Vh(T)(), B = aa(T)(E);
    H !== E && B();
    const Z = fa(T)(O);
    F !== O && Z(), e.tag === "FixedSize" ? (kl(t, "width", un(vn(er(L.w))) + "px"), kl(t, "height", un(vn(er(L.h))) + "px")) : e.tag === "AutoSize" || f();
    const tt = su(T)();
    xr(tt)(), ms(tt)({ scaleX: A, scaleY: A })();
    const Y = u.value, z = eb(r)(o)(tt)({ width: L.w, height: L.h })(J)(g)(Y)();
    return u.value = z, vr(tt)();
  }
  if (n === "SvgRenderer") {
    const T = u.value, b = pk(t)(e)(), L = wb(b)(r)(o)(J)(g)(T);
    return u.value = L.springs, ze("viewBox")(L.parts.viewBox)(t)(), ze("preserveAspectRatio")("xMidYMid meet")(t)(), e.tag === "FixedSize" ? (ze("width")(un(vn(er(e._1))))(t)(), ze("height")(un(vn(er(e._2))))(t)()) : e.tag === "AutoSize" || f(), sk(L.parts.body, t);
  }
  f();
}, mk = (t) => (n) => (e) => (r) => (o) => (i) => (s) => () => {
  let u = 1, c = !0, a = !1, l = 0, d = 0;
  const _ = { value: I }, g = { value: v }, p = { value: 0 };
  let $ = !1, h = () => {
  }, m = [];
  as(t)(e)(r)(o)(i)(s)(n)(_)(g)(p)(0)();
  const y = (E) => () => {
    const O = m, H = c, F = { time: E, keyframe: wc(n)(E), playing: H };
    return gk((B) => B(F))(O)();
  }, x = () => (c = !1, y(l)()), J = () => {
    if (!$ && (a = !1, c)) {
      const H = $_(), F = d;
      d = H;
      const B = u, Z = l, tt = lk(F === 0 ? Z + 0 * B : Z + (H - F) * B)(n.totalDuration + 0.8);
      return tt < Z && (g.value = v), l = tt, as(t)(e)(r)(o)(i)(s)(n)(_)(g)(p)(tt)(), y(tt)(), T();
    }
  }, T = () => {
    if (!$ && !a) {
      a = !0;
      const H = js();
      ta(J)(H)();
    }
  }, b = () => (d = 0, c = !0, T()), L = () => (c || b(), y(l)());
  return h = rk(t)(() => {
    if (!$) {
      const O = l;
      return as(t)(e)(r)(o)(i)(s)(n)(_)(g)(p)(O)(), y(O)();
    }
  })(), b(), {
    play: L,
    pause: x,
    toggle: () => c ? x() : L(),
    seek: (E) => {
      const O = ck(0)(p_(n.totalDuration)(E));
      return () => (l = O, d = 0, g.value = v, as(t)(e)(r)(o)(i)(s)(n)(_)(g)(p)(O)(), y(O)());
    },
    setSpeed: (E) => () => u = E,
    currentTime: () => l,
    currentKeyframe: () => {
      const E = l;
      return wc(n)(E);
    },
    isPlaying: () => c,
    duration: n.totalDuration,
    subscribe: (E) => () => {
      m = Pt(m)(E);
      const H = l, F = c;
      E({ time: H, keyframe: wc(n)(H), playing: F })();
      const B = gg((Z) => !uk(Z)(E));
      return () => {
        m = B(m);
      };
    },
    destroy: () => ($ = !0, h())
  };
}, $k = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = _k(n);
  if (u.tag === "Left")
    return () => Tt("Left", u._1);
  if (u.tag === "Right") {
    const c = hk()(r)(u._1);
    return () => {
      const a = c();
      if (a.tag === "Left")
        return Tt("Left", a._1);
      if (a.tag === "Right") {
        const l = mk(t)(a._1.schedule)(e)(r)(o)(i)(s)();
        return Tt("Right", l);
      }
      f();
    };
  }
  f();
}, Ef = () => document.createElement("canvas"), yk = (t, n) => {
  t.letterSpacing = n;
}, xk = (t, n) => {
  t.fontKerning = n;
}, y_ = /* @__PURE__ */ Ei(yk), Sf = /* @__PURE__ */ Ei(xk), vk = { alpha: !0, premultipliedAlpha: !0, antialias: !0, depth: !1 }, wk = (t) => t.getContext("webgl", vk), Nk = (t, n, e) => {
  const r = (i, s) => {
    const u = t.createShader(i);
    return t.shaderSource(u, s), t.compileShader(u), t.getShaderParameter(u, t.COMPILE_STATUS) || console.error(t.getShaderInfoLog(u)), u;
  }, o = t.createProgram();
  return t.attachShader(o, r(t.VERTEX_SHADER, n)), t.attachShader(o, r(t.FRAGMENT_SHADER, e)), t.linkProgram(o), t.getProgramParameter(o, t.LINK_STATUS) || console.error(t.getProgramInfoLog(o)), t.useProgram(o), o;
}, Tk = (t, n) => {
  const e = t.createBuffer();
  t.bindBuffer(t.ARRAY_BUFFER, e), t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), t.STATIC_DRAW);
  const r = t.getAttribLocation(n, "position");
  t.enableVertexAttribArray(r), t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0);
}, Jk = (t, n) => t.getExtension(n), bk = (t, n, e) => t.getUniformLocation(n, e), kk = (t, n, e) => t.uniform1f(n, e), Lk = (t, n, e, r) => t.uniform2f(n, e, r), Ek = (t, n, e) => t.uniform1i(n, e), Sk = (t, n, e) => t.uniform4fv(n, new Float32Array(e)), Ck = (t, n, e) => t.uniform2fv(n, new Float32Array(e)), Ak = (t, n, e) => t.uniform1fv(n, new Float32Array(e)), Pk = (t) => t.createTexture(), Gk = (t, n, e, r) => {
  t.activeTexture(t.TEXTURE0 + r), t.bindTexture(t.TEXTURE_2D, n), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
}, Fk = (t, n, e, r) => {
  (n.width !== e || n.height !== r) && (n.width = e, n.height = r), t.viewport(0, 0, e, r);
}, Ik = (t) => {
  t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT);
}, Rk = (t) => t.drawArrays(t.TRIANGLE_STRIP, 0, 4), Bk = (t) => ({ width: t.clientWidth, height: t.clientHeight }), zk = () => window.devicePixelRatio, El = () => performance.now(), Zs = /* @__PURE__ */ Aa(Gk), Ut = /* @__PURE__ */ zo(bk), Dk = /* @__PURE__ */ zo(Sk), Yo = (t) => (n) => {
  const e = Dk(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, Qk = /* @__PURE__ */ zo(Ck), Uo = (t) => (n) => {
  const e = Qk(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, Hk = /* @__PURE__ */ Aa(Lk), $r = /* @__PURE__ */ zo(Ek), Wk = /* @__PURE__ */ zo(Ak), yr = (t) => (n) => {
  const e = Wk(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, Fe = /* @__PURE__ */ zo(kk), Ok = /* @__PURE__ */ Ei(Tk), qk = /* @__PURE__ */ Aa(Fk), Xk = /* @__PURE__ */ Ei(Jk), Yk = /* @__PURE__ */ Bo(wk), Uk = /* @__PURE__ */ Bo(Rk), Sl = /* @__PURE__ */ Bo(Pk), Vk = /* @__PURE__ */ Bo(Bk), Kk = /* @__PURE__ */ Bo(Ik), Mk = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Cl = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = N("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, jk = /* @__PURE__ */ ou(Ro), Zk = (t) => yt((n) => n)(Q((n) => {
  if (n.target.tag === "TokenWindow") {
    const e = Mk(n.target._2)(t.layout.edges);
    if (e.tag === "Just")
      return N(
        "Just",
        {
          points: Q((() => {
            const r = t.placement;
            return (o) => ({ x: o.x * r.scale + r.tx, y: o.y * r.scale + r.ty });
          })())([
            ...(() => {
              const r = Cl(n.target._4)(t.layout.nodes);
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
                return An(e._1);
              f();
            })(),
            ...(() => {
              const r = Cl(n.target._5)(t.layout.nodes);
              if (r.tag === "Nothing")
                return [];
              if (r.tag === "Just")
                return [{ x: r._1.x + r._1.w / 2, y: r._1.y + r._1.h / 2 }];
              f();
            })()
          ]),
          labels: Q(ug)(n.target._6),
          startT: n.startT,
          endT: n.endT,
          holdPre: n.target._7,
          holdPost: n.target._8
        }
      );
    if (e.tag === "Nothing")
      return v;
    f();
  }
  return v;
})(t.windows)), tL = (t) => t.msg + " (line " + un(t.line) + ", col " + un(t.column) + ")", nL = (t) => (n) => (e) => {
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
}, eL = (t) => Q(nL(t.path.length)(t.placement))((() => {
  const n = (e, r) => {
    if (e.tag === "Leaf")
      return r;
    if (e.tag === "Node")
      return n(e._5, jt("Cons", e._4, n(e._6, r)));
    f();
  };
  return Gt(tn.foldr, n(t.layout.nodes, Zt));
})()), rL = (t) => (n) => (e) => ({ points: Q((r) => ({ x: r.x * n.scale + n.tx, y: r.y * n.scale + n.ty }))(e), depth: t }), oL = (t) => Q(rL(t.path.length)(t.placement))((() => {
  const n = (e, r) => {
    if (e.tag === "Leaf")
      return r;
    if (e.tag === "Node")
      return n(e._5, jt("Cons", e._4, n(e._6, r)));
    f();
  };
  return Gt(tn.foldr, n(t.layout.edges, Zt));
})()), Al = (t) => (n) => {
  const e = Mt((r) => jk(r.path)(n))(t);
  if (e.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (e.tag === "Just") {
    const r = bn(e._1.layout), o = r.w * e._1.placement.scale, i = r.h * e._1.placement.scale;
    return { x: r.x * e._1.placement.scale + e._1.placement.tx + o / 2, y: r.y * e._1.placement.scale + e._1.placement.ty + i / 2, w: o, h: i };
  }
  f();
}, iL = (t) => (n) => ({
  startT: n.startT,
  endT: n.endT,
  dir: (() => {
    if (n.direction === "DiveIn")
      return 1;
    if (n.direction === "DiveOut")
      return 0;
    f();
  })(),
  parent: Al(t)(n.parentPath),
  child: Al(t)(n.childPath)
}), sL = (t) => {
  const n = Lf(t), e = (() => {
    if (n.tag === "Left") {
      const r = n._1;
      return (o) => Tt("Left", r);
    }
    if (n.tag === "Right") {
      const r = n._1;
      return (o) => o(r);
    }
    f();
  })()((r) => {
    const o = Iu(r)(Fu)._1;
    if (o.tag === "Left")
      return Tt("Left", tL(o._1));
    if (o.tag === "Right") {
      const i = Ya(hu)(qa)(o._1)(bu(I)(I)(o._1));
      if (i.tag === "Left")
        return Tt("Left", "schedule: " + un(i._1.length) + " error(s)");
      if (i.tag === "Right")
        return Tt(
          "Right",
          {
            ok: !0,
            error: "",
            duration: i._1.totalDuration,
            nodes: xt(i._1.segments)(eL),
            edges: xt(i._1.segments)(oL),
            tokens: xt(i._1.segments)(Zk),
            dives: Q(iL(i._1.segments))(i._1.dives)
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
}, br = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, uL = (t) => (n) => (e) => {
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
}, ea = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Pl = (t) => (n) => (e) => (r) => (o) => {
  const i = t + e + r, s = r * 2, u = br(0)(n - t - 2 * e), c = i + u - s;
  return s <= u ? uL(i)(c)(o) : t + (n - t) / 2;
}, Gl = (t) => (n) => ({ ...n, cx: Pl(t.minX)(t.maxX)(t.margin)(n.hw)(n.cx), cy: Pl(t.minY)(t.maxY)(t.margin)(n.hh)(n.cy) }), cL = (t) => (n) => {
  const e = br(0)(t.minY + t.margin - (n.cy - n.hh)) + br(0)(n.cy + n.hh - (t.maxY - t.margin)), r = br(0)(t.minX + t.margin - (n.cx - n.hw)) + br(0)(n.cx + n.hw - (t.maxX - t.margin));
  return r * n.hh * 2 + e * n.hw * 2 + r * e;
}, aL = (t) => (n) => (e) => {
  const r = w(br)(0)(Q((o) => n.cx - n.hw < o.cx + o.hw + t && n.cx + n.hw > o.cx - o.hw - t && n.cy - n.hh < o.cy + o.hh + t && n.cy + n.hh > o.cy - o.hh - t ? ea((o.cx + o.hw + t - (n.cx - n.hw)) / 0.7071067811865476)((o.cy + o.hh + t - (n.cy - n.hh)) / 0.7071067811865476) : 0)(e));
  return { ...n, cx: n.cx + r * 0.7071067811865476, cy: n.cy + r * 0.7071067811865476 };
}, fL = (t) => (n) => {
  const e = ea(t.cx + t.hw)(n.cx + n.hw) - br(t.cx - t.hw)(n.cx - n.hw), r = ea(t.cy + t.hh)(n.cy + n.hh) - br(t.cy - t.hh)(n.cy - n.hh);
  return t.cx - t.hw < n.cx + n.hw && t.cx + t.hw > n.cx - n.hw && t.cy - t.hh < n.cy + n.hh && t.cy + t.hh > n.cy - n.hh ? e * r : 0;
}, lL = (t) => (n) => (e) => (r) => (o) => {
  const i = o.cy - o.dotY, s = o.cy - r.cy;
  return (() => {
    const u = o.cx - o.dotX, c = o.cx - r.cx;
    return 1e6 * cL(t)(o) + 1e4 * w((a) => (l) => a + fL(o)(l))(0)(n) + 0.05 * (c * c + s * s) + 0.01 * (u * u + i * i);
  })() + (o.cy < e.dotY ? 100 : 0);
}, gL = (t) => (n) => (e) => (r) => {
  const o = (s) => {
    const u = Gl(t)(s);
    return { chip: u, score: lL(t)(n)(e)(r)(u) };
  }, i = Bt(
    (s) => v,
    (s) => (u) => N("Just", { head: s, tail: u }),
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
    return Gl(t)(r);
  if (i.tag === "Just")
    return w((s) => (u) => {
      const c = o(u);
      return c.score < s.score ? c : s;
    })(o(i._1.head))(i._1.tail).chip;
  f();
}, dL = (t) => (n) => (e) => (r) => w((o) => (i) => {
  const s = aL(n)(i.chip)(o.obstacles), u = s.cx - s.hw >= t.minX + t.margin && s.cx + s.hw <= t.maxX - t.margin && s.cy - s.hh >= t.minY + t.margin && s.cy + s.hh <= t.maxY - t.margin ? s : gL(t)(o.obstacles)(i.chip)(s), c = u.cx - i.chip.cx, a = u.cy - i.chip.cy;
  return {
    resolved: Pt(o.resolved)({ chip: u, glyphs: Q((l) => ({ ...l, cx: l.cx + c, cy: l.cy + a }))(i.glyphs) }),
    obstacles: Pt(o.obstacles)({ cx: u.cx, cy: u.cy, hw: u.hw, hh: u.hh })
  };
})({ resolved: [], obstacles: e })(r).resolved, x_ = (t) => t, Fl = /* @__PURE__ */ x_("Visible"), _L = /* @__PURE__ */ x_("Hidden");
function hL(t) {
  return t.readyState;
}
const pL = (t) => () => {
  const n = hL(t);
  return n === "visible" ? Fl : n === "hidden" ? _L : Fl;
}, mL = (t) => () => {
  const n = js(), e = tk(n)(), r = js();
  let o = !0;
  const i = () => {
    const d = o, _ = pL(e)();
    return t(d && _ === "Visible")();
  }, s = yc((d) => i)();
  xc("visibilitychange")(s)(!1)(e)();
  const u = yc((d) => () => (o = !1, i()))();
  xc("blur")(u)(!1)(r)();
  const c = vc("blur")(u)(!1)(r), a = yc((d) => () => (o = !0, i()))();
  xc("focus")(a)(!1)(r)();
  const l = vc("focus")(a)(!1)(r);
  return () => (vc("visibilitychange")(s)(!1)(e)(), c(), l());
};
function $L(t, n, e) {
  return e.then(t, n);
}
function Il(t) {
  return Promise.resolve(t);
}
function yL(t, n, e) {
  return e instanceof Error ? t(e) : n;
}
const Cf = (t) => (n) => xN((e) => () => ($L(
  (r) => {
    const i = e(Tt("Right", r))();
    return Il(i);
  },
  (r) => {
    const i = e(Tt("Left", t(r)))();
    return Il(i);
  },
  n
), vN)), Af = (t) => {
  const n = yL(Xt, v, t), e = yp(gr)("String")(t), r = (() => {
    const o = (() => {
      if (e.tag === "Left")
        return v;
      if (e.tag === "Right")
        return N("Just", Xf(e._1));
      f();
    })();
    return n.tag === "Nothing" ? o : n;
  })();
  if (r.tag === "Nothing")
    return Xf("Promise failed, couldn't extract JS Error or String");
  if (r.tag === "Just")
    return r._1;
  f();
}, Rl = Mn.createElement;
Mn.Fragment;
function Ir(t) {
  return (n) => Array.isArray(n.children) ? Rl.apply(null, [t, n].concat(n.children)) : Rl(t, n);
}
function xL(t) {
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
      const r = Mn.forwardRef(
        (o, i) => t(n)(e(o, i))
      );
      return r.displayName = n, r;
    };
  };
}
const Pf = /* @__PURE__ */ xL(Ir), v_ = /* @__PURE__ */ Pf("div")(), w_ = /* @__PURE__ */ Pf("canvas")(), vL = (t, n) => {
  const e = Mn.useRef(n);
  return e.current !== n && !t(e.current, n) && (e.current = n), e.current;
};
Mn.memo;
Mn.memo;
function Bl(t, n) {
  const [e, r] = Mn.useState(
    typeof n == "function" ? () => n : n
  );
  return r.hasOwnProperty("$$reactBasicHooks$$cachedSetState") || (r.$$reactBasicHooks$$cachedSetState = (o) => () => r(o)), t(e, r.$$reactBasicHooks$$cachedSetState);
}
function ii(t, n, e) {
  const r = vL(t, n);
  Mn.useEffect(e, [r]);
}
const Dn = Mn.useRef;
function wL(t) {
  return t.current;
}
function NL(t, n) {
  t.current = n;
}
Mn.useContext;
Mn.useDebugValue;
Mn.useId;
Mn.useDeferredValue;
Mn.useSyncExternalStore;
Mn.useSyncExternalStore;
function Gf(t, n) {
  return n.displayName = t, n.toString = () => t, n;
}
Mn.useEffectEvent || Mn.experimental_useEffectEvent;
const an = /* @__PURE__ */ Ei(NL), N_ = (t) => (n) => (e) => () => ii((r, o) => t.eq(r)(o), n, e), rn = /* @__PURE__ */ Bo(wL), TL = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, T_ = (t) => {
  const n = {
    apply: (e) => (r) => () => {
      const o = e(), i = r();
      return o(i);
    },
    Functor0: () => TL
  };
  return { pure: (e) => () => e, Apply0: () => n };
}, JL = () => typeof document < "u" && document.fonts ? document.fonts : null, Ff = (t) => {
  const n = JL();
  return n ? n.load(t).then(() => {
  }) : Promise.resolve();
}, bL = "attribute vec2 position; void main(){ gl_Position = vec4(position, 0.0, 1.0); }", kL = `
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
`, LL = (t, n, e, r, o) => {
  const i = (a) => {
    a.preventDefault(), n(a.deltaX)(a.deltaY)(a.ctrlKey ? 1 : 0)();
  }, s = (a) => {
    a.preventDefault(), e(a.clientX)(a.clientY)();
  }, u = (a) => r(a.clientX)(a.clientY)(a.buttons)(a.shiftKey ? 1 : 0)(), c = (a) => o(a.clientX)(a.clientY)();
  return t.addEventListener("wheel", i, { passive: !1 }), t.addEventListener("pointerdown", s), window.addEventListener("pointermove", u), window.addEventListener("pointerup", c), () => {
    t.removeEventListener("wheel", i), t.removeEventListener("pointerdown", s), window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", c);
  };
}, Kt = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, EL = (t) => (n) => (e) => {
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
}, J_ = /* @__PURE__ */ (() => {
  const t = Pr.traverse(oo);
  return (n) => (e) => t(e)(n);
})(), de = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, SL = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ra = /* @__PURE__ */ w(no)(0), CL = (t) => w((n) => (e) => {
  if (n.tag === "Nothing")
    return N("Just", e);
  if (n.tag === "Just")
    return N("Just", t(n._1)(e) === "LT" ? n._1 : e);
  f();
})(v), AL = /* @__PURE__ */ dp(oo)(Sa), PL = /* @__PURE__ */ bi(oo)(Zl), zl = (t) => (n) => (e) => {
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
}, GL = T_().pure, FL = /* @__PURE__ */ Ir(v_), IL = /* @__PURE__ */ Ir(w_), Dl = (t) => (n) => {
  const e = ke(t);
  if (e.tag === "Just") {
    const r = ke(e._1.init);
    if (r.tag === "Just")
      return N("Just", n(r._1.last)(e._1.last));
    if (r.tag === "Nothing")
      return v;
    f();
  }
  if (e.tag === "Nothing")
    return v;
  f();
}, Ql = (t) => (n) => (e) => ({ chip: { ...e.chip, cx: e.chip.cx + t, cy: e.chip.cy + n }, glyphs: Q((r) => ({ ...r, cx: r.cx + t, cy: r.cy + n }))(e.glyphs) }), RL = /* @__PURE__ */ wp(LL), BL = (t) => ({ cx: t.x, cy: t.y, hw: t.hw, hh: t.hh }), tu = (t) => (n) => (e) => ({ cx: t.cx + (n.cx - t.cx) * e, cy: t.cy + (n.cy - t.cy) * e, hw: t.hw * Eo(n.hw / Kt(1e-4)(t.hw))(e), hh: t.hh * Eo(n.hh / Kt(1e-4)(t.hh))(e) }), qr = (t) => (n) => Bn((n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y)), zL = (t) => (n) => {
  const e = (r) => Kt(0)(1 - qr(n)({ x: r.x, y: r.y }) / (Kt(r.hw)(r.hh) + t.ballRadius));
  return w((r) => (o) => e(o) > r.glow ? { glow: e(o), x: o.x, y: o.y } : r)({ glow: 0, x: 0, y: 0 })(t.worldNodes);
}, DL = (t) => (n) => (e) => (r) => (o) => {
  const i = Qa({ width: n, height: e })((() => {
    const c = Ai(r)(o);
    return { vx: c.x, vy: c.y, vw: c.w, vh: c.h };
  })()), s = (i.vx + i.vw / 2 - t.midX) * t.scaleFactor, u = -(i.vy + i.vh / 2 - t.midY) * t.scaleFactor;
  return {
    centerX: s,
    centerY: u,
    camZ: i.vh * t.scaleFactor,
    viewport: { cx: s, cy: u, hw: i.vw * t.scaleFactor / 2, hh: i.vh * t.scaleFactor / 2 }
  };
}, QL = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (t.cameraSchedule.tag === "Just") {
    const s = u1({ widthPx: e, heightPx: r })(t.cameraSchedule._1), u = za(s.cameraConfig)(s.layout)(s.cameraSpans)(i).camera, c = (() => {
      if (n.tag === "Nothing")
        return u;
      if (n.tag === "Just")
        return Wg(s.cameraConfig.cameraDecay)(o)(n._1)(u);
      f();
    })();
    return N("Just", { camera: c, world: DL(t)(e)(r)(s.layout)(c) });
  }
  if (t.cameraSchedule.tag === "Nothing")
    return v;
  f();
}, zu = "500 " + un(vn(er(144))) + "px Ilisarniq, ui-sans-serif, system-ui, sans-serif", If = /* @__PURE__ */ yt((t) => t)(/* @__PURE__ */ Q(Rm)(/* @__PURE__ */ zt(32, 126))), HL = Ne((If.length + 16 | 0) - 1 | 0, 16), WL = (t) => M(EL(0)(If.length - 1 | 0)(De(t) - 32 | 0)), Hl = M(16) * 76, Wl = M(HL) * 100, Ol = () => {
  const t = Ef();
  aa(t)(Hl)(), fa(t)(Wl)();
  const n = su(t)();
  ha(n)({ x: 0, y: 0, width: Hl, height: Wl })(), ga(n)("#fff")(), uu(n)("500 64px Ilisarniq, ui-sans-serif, system-ui, sans-serif")(), La(n)(va)(), ka(n)(xa)(), Sf(n)("normal")();
  const e = J_(Rt(In)(If))((r) => {
    const o = Li(r._2), i = pa(n)(o)(M(ar(r._1)(16)) * 76 + 38)(M(Ne(r._1, 16)) * 100 + 50);
    return () => (i(), Ng(n)(o)().width / 64);
  })();
  return { canvas: t, advances: e };
}, ql = (t) => (n) => 2.36 * Kt(t.hw / Kt(0.2)(n))(t.hh), OL = (t) => (n) => (e) => () => {
  const r = Ol();
  Zs(t)(n)(r.canvas)(1)(), an(e)(r.advances)(), of(
    sf,
    Vr(Vr(Kr(() => Ff("500 64px Ilisarniq, ui-sans-serif, system-ui, sans-serif")))(Cf(Af)))(() => Kr(() => {
      const i = Ol();
      return Zs(t)(n)(i.canvas)(1)(), an(e)(i.advances)();
    }))
  )().run();
}, qL = (t) => (n) => (e) => (r) => r < 0.31999999999999995 ? tu(n)(e.parent)((() => {
  const o = r / 0.31999999999999995;
  return o * o * (3 - 2 * o);
})()) : tu(e.parent)(t)((() => {
  const o = (r - 0.31999999999999995) / 0.68;
  return o * o * (3 - 2 * o);
})()), XL = (t) => (n) => (e) => e < 0.68 ? tu(t)(n.parent)((() => {
  const r = e / 0.68;
  return r * r * (3 - 2 * r);
})()) : tu(n.parent)(n.child)((() => {
  const r = (e - 0.68) / 0.31999999999999995;
  return r * r * (3 - 2 * r);
})()), YL = (t) => (n) => (e) => (r) => e.dir > 0.5 ? XL(n)(e)(r) : qL(t)(n)(e)(r), b_ = (t) => (n) => Kt(0)(de(1)((n - t.startT) / Kt(1e-4)(t.endT - t.startT))), UL = (t) => (n) => (e) => w((r) => (o) => e <= o.startT ? r : YL(t)(r)(o)(b_(o)(e)))(t)(n), VL = (t) => (n) => {
  if (t.dir > 0.5) {
    const r = Kt(0)(de(1)((n - 0.68) / 0.31999999999999995));
    return r * r * (3 - 2 * r);
  }
  const e = Kt(0)(de(1)(n / 0.31999999999999995));
  return e * e * (3 - 2 * e);
}, KL = (t) => (n) => w((e) => (r) => n <= r.startT ? e : n >= r.endT ? r.dir > 0.5 ? e + 1 : e + -1 : e + (r.dir > 0.5 ? 1 : -1) * VL(r)(b_(r)(n)))(0)(t), ML = (t) => (n) => {
  const e = 1 - t.holdPre - t.holdPost;
  return e <= 0 ? n < 0.5 ? 0 : 1 : Kt(0)(de(1)((n - t.holdPre) / e));
}, jL = (t) => (n) => (e) => {
  const r = Kt(0)(de(1)((t * M(n + 1 | 0) - M(e)) / 1.5));
  return r * r * (3 - 2 * r);
}, ZL = (t) => (n) => {
  const e = n.length === 0 ? [""] : n, r = Q((d) => M(SL(1)(dr(d))))(e), o = Kt(1)(ra(r)), i = t * o, u = ((d) => (_) => (g) => {
    let p = d, $ = _, h = g, m = !0, y;
    for (; m; ) {
      const x = p, J = $, b = Bt((L) => v, (L) => (A) => N("Just", { head: L, tail: A }), h);
      if (b.tag === "Nothing") {
        m = !1, y = e.length - 1 | 0;
        continue;
      }
      if (b.tag === "Just") {
        if (J + b._1.head >= i) {
          m = !1, y = x;
          continue;
        }
        p = x + 1 | 0, $ = J + b._1.head, h = b._1.tail;
        continue;
      }
      f();
    }
    return y;
  })(0)(0)(r), c = ra(u < 1 ? [] : Jt(0, u, r)), a = c / o;
  if (u >= 0 && u < r.length) {
    const d = (c + r[u]) / o;
    return { line: u >= 0 && u < e.length ? e[u] : "", phase: d <= a ? 1 : Kt(0)(de(1)((t - a) / (d - a))) };
  }
  const l = (c + 1) / o;
  return { line: u >= 0 && u < e.length ? e[u] : "", phase: l <= a ? 1 : Kt(0)(de(1)((t - a) / (l - a))) };
}, t5 = (t) => (n) => {
  const e = pn(In, t, Jt(1, t.length, t));
  return ((o) => (i) => {
    let s = o, u = i, c = !0, a;
    for (; c; ) {
      const l = s, _ = Bt((g) => v, (g) => (p) => N("Just", { head: g, tail: p }), u);
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
        if (_._1.tail.length === 0 || l <= qr(_._1.head._1)(_._1.head._2)) {
          const g = qr(_._1.head._1)(_._1.head._2), p = g <= 0 ? 0 : l / g;
          c = !1, a = { x: _._1.head._1.x + (_._1.head._2.x - _._1.head._1.x) * p, y: _._1.head._1.y + (_._1.head._2.y - _._1.head._1.y) * p };
          continue;
        }
        s = l - qr(_._1.head._1)(_._1.head._2), u = _._1.tail;
        continue;
      }
      f();
    }
    return a;
  })(Kt(0)(de(1)(n)) * w((o) => (i) => o + qr(i._1)(i._2))(0)(e))(e);
}, n5 = (t) => (n) => Q((e) => {
  const r = ML(e)((n - e.startT) / (e.endT - e.startT)), o = t5(e.path)(r), i = zL(t)(o);
  return { x: o.x, y: o.y, glow: i.glow, nx: i.x, ny: i.y, labels: e.labels, motionT: r, startT: e.startT, path: e.path };
})(Jt(0, 8, at((e) => n >= e.startT && n < e.endT, t.tokenFlows))), e5 = (t) => {
  const n = Lf(t);
  if (n.tag === "Left")
    return v;
  if (n.tag === "Right") {
    const e = Iu(n._1)(Fu)._1;
    if (e.tag === "Left")
      return v;
    if (e.tag === "Right") {
      const r = Ya(hu)(qa)(e._1)(bu(I)(I)(e._1));
      if (r.tag === "Left")
        return v;
      if (r.tag === "Right")
        return N("Just", r._1);
    }
  }
  f();
}, r5 = (t) => {
  const n = sL(t), e = e5(t), r = (() => {
    if (e.tag === "Nothing")
      return hu;
    if (e.tag === "Just")
      return e._1.cameraConfig;
    f();
  })(), o = w((h) => (m) => ({ minX: de(h.minX)(m.x - m.w / 2), maxX: Kt(h.maxX)(m.x + m.w / 2), minY: de(h.minY)(m.y - m.h / 2), maxY: Kt(h.maxY)(m.y + m.h / 2) }))({ minX: 1e9, maxX: -1e9, minY: 1e9, maxY: -1e9 })(n.nodes), i = (o.minX + o.maxX) / 2, s = (o.minY + o.maxY) / 2, u = 6.6 / Kt(o.maxX - o.minX)(o.maxY - o.minY), c = Q((h) => ({ pts: Q((m) => ({ x: (m.x - i) * u, y: -(m.y - s) * u }))(h.points), depth: M(h.depth) }))(n.edges), a = Q((h) => ({
    x: (h.x - i) * u,
    y: -(h.y - s) * u,
    hw: h.w / 2 * u,
    hh: h.h / 2 * u,
    shape: M(h.shape),
    depth: M(h.depth),
    labelH: r.labelBasePx * h.labelScale * u
  }))(n.nodes), l = (h) => {
    const m = CL(/* @__PURE__ */ (() => {
      const y = (x) => (h.x - x.x) * (h.x - x.x) + (h.y - x.y) * (h.y - x.y);
      return (x) => (J) => ot.compare(y(x))(y(J));
    })())(a);
    if (m.tag === "Just")
      return { x: m._1.x, y: m._1.y };
    if (m.tag === "Nothing")
      return h;
    f();
  }, d = a.length, _ = d === 0 ? 0.1 : w((h) => (m) => h + m.hh)(0)(a) / M(d), g = (h) => {
    const m = at((y) => y.depth === h, a);
    return m.length === 0 ? _ : w((y) => (x) => y + x.hh)(0)(m) / M(m.length);
  }, p = g(0), $ = xt(c)((h) => Q((m) => ({ seg: [m._1.x, m._1.y, m._2.x, m._2.y], depth: h.depth }))((() => {
    const m = Dl(h.pts)(In);
    if (m.tag === "Just") {
      const y = qr(m._1._1)(m._1._2);
      if (y > 1e-6) {
        const x = ke(h.pts), J = (() => {
          if (x.tag === "Just") {
            const T = de(_ * g(h.depth) / Kt(1e-4)(p) * 0.05 + _ * g(h.depth) / Kt(1e-4)(p) * 0.55)(y * 0.95);
            return Pt(x._1.init)({ x: m._1._2.x - (m._1._2.x - m._1._1.x) / y * T, y: m._1._2.y - (m._1._2.y - m._1._1.y) / y * T });
          }
          if (x.tag === "Nothing")
            return h.pts;
          f();
        })();
        return pn(In, J, Jt(1, J.length, J));
      }
      return pn(In, h.pts, Jt(1, h.pts.length, h.pts));
    }
    if (m.tag === "Nothing")
      return pn(In, h.pts, Jt(1, h.pts.length, h.pts));
    f();
  })()));
  return {
    nodeList: n.nodes,
    worldNodes: a,
    halfW: w((h) => (m) => Kt(h)(Kt(m.x + m.hw)(m.hw - m.x)))(0)(a) + _ * 0.6,
    halfH: w((h) => (m) => Kt(h)(Kt(m.y + m.hh)(m.hh - m.y)))(0)(a) + _ * 0.6,
    unitHalfH: _,
    ballRadius: _ * 0.3,
    scaleFactor: u,
    nodeRectFlat: xt(a)((h) => [h.x, h.y, h.hw * 2, h.hh * 2]),
    nodeShapeFlat: Q((h) => h.shape)(a),
    nodeLabelHeightFlat: Q((h) => h.labelH)(a),
    nodeDepthFlat: Q((h) => h.depth)(a),
    edgeSegFlat: xt($)((h) => h.seg),
    edgeSegDepth: Q((h) => h.depth)($),
    arrowData: yt((h) => {
      const m = Dl(h.pts)(In);
      if (m.tag === "Just") {
        const y = qr(m._1._1)(m._1._2);
        return y > 1e-6 ? N(
          "Just",
          (() => {
            const x = l(m._1._2);
            return {
              tipX: m._1._2.x - (m._1._2.x - m._1._1.x) / y * (_ * g(h.depth) / Kt(1e-4)(p)) * 0.05,
              tipY: m._1._2.y - (m._1._2.y - m._1._1.y) / y * (_ * g(h.depth) / Kt(1e-4)(p)) * 0.05,
              dirX: (m._1._2.x - m._1._1.x) / y,
              dirY: (m._1._2.y - m._1._1.y) / y,
              cx: x.x,
              cy: x.y,
              depth: h.depth,
              unit: _ * g(h.depth) / Kt(1e-4)(p)
            };
          })()
        ) : v;
      }
      if (m.tag === "Nothing")
        return v;
      f();
    })(c),
    tokenFlows: Q((h) => ({
      path: (() => {
        const m = Q((x) => ({ x: (x.x - i) * u, y: -(x.y - s) * u }))(h.points), y = Bt((x) => v, (x) => (J) => N("Just", { head: x, tail: J }), m);
        if (y.tag === "Just") {
          const x = ke(m);
          if (x.tag === "Just")
            return [l(y._1.head), ...Pt(m)(l(x._1.last))];
          if (x.tag === "Nothing")
            return m;
          f();
        }
        if (y.tag === "Nothing")
          return m;
        f();
      })(),
      labels: h.labels,
      startT: h.startT,
      endT: h.endT,
      holdPre: h.holdPre,
      holdPost: h.holdPost
    }))(n.tokens),
    dives: Q((h) => {
      const m = (y) => ({ cx: (y.x - i) * u, cy: -(y.y - s) * u, hw: y.w / 2 * u, hh: y.h / 2 * u });
      return { startT: h.startT, endT: h.endT, dir: M(h.dir), parent: m(h.parent), child: m(h.child) };
    })(n.dives),
    duration: n.duration,
    midX: i,
    midY: s,
    cameraSchedule: e
  };
}, Xl = (t) => () => {
  const n = Ef(), e = su(n)();
  Sf(e)("normal")(), y_(e)("1px")();
  const r = J_(t)((o) => {
    const i = uu(e)(zu);
    return () => (i(), [Ng(e)(o.label)().width / 2048, 0.9]);
  })();
  return se(r);
}, k_ = (t) => (n) => {
  const e = su(n);
  return () => {
    const r = e();
    return ha(r)({ x: 0, y: 0, width: 2048, height: M(t.length) * 160 })(), ga(r)("#fff")(), La(r)(va)(), ka(r)(xa)(), Sf(r)("normal")(), y_(r)("1px")(), AL(t)((o) => (i) => {
      const s = uu(r)(zu);
      return () => (s(), pa(r)(i.label)(1024)(M(o) * 160 + 80)());
    })();
  };
}, o5 = (t) => () => {
  const n = Ef();
  return aa(n)(2048)(), fa(n)(M(t.length) * 160)(), k_(t)(n)(), n;
}, i5 = (t) => (n) => (e) => {
  const r = o5(t);
  return () => {
    const o = r();
    Zs(n)(e)(o)(0)(), of(
      sf,
      Vr(Vr(Kr(() => Ff(zu)))(Cf(Af)))(() => Kr((() => {
        const s = k_(t)(o);
        return () => (s(), Zs(n)(e)(o)(0)());
      })()))
    )().run();
  };
}, s5 = (t) => (n) => {
  const e = (r) => w((o) => (i) => (() => {
    const s = i.nx - r.cx, u = i.ny - r.cy, c = r.unit * 0.6;
    return s * s + u * u < c * c;
  })() ? Kt(o)(i.glow) : o)(0)(n);
  return xt(t.arrowData)((r) => [r.tipX - r.dirX * r.unit * 0.2 * e(r), r.tipY - r.dirY * r.unit * 0.2 * e(r), r.dirX, r.dirY]);
}, u5 = (t) => (n) => (e) => (r) => {
  const o = de(0.05)(t);
  return Rt((i) => (s) => {
    if (i >= 0 && i < e.length) {
      const _ = e[i].startT, g = Mt((y) => y.id === _)(n), p = (() => {
        if (g.tag === "Nothing")
          return { id: _, x: s.chip.cx, y: s.chip.cy, vx: 0, vy: 0 };
        if (g.tag === "Just")
          return g._1;
        f();
      })(), $ = p.vx + (180 * (s.chip.cx - p.x) - 22 * p.vx) * o, h = p.vy + (180 * (s.chip.cy - p.y) - 22 * p.vy) * o, m = { id: _, x: p.x + $ * o, y: p.y + h * o, vx: $, vy: h };
      return k(Ql(m.x - s.chip.cx)(m.y - s.chip.cy)(s), m);
    }
    const u = Mt((_) => _.id === 0)(n), c = (() => {
      if (u.tag === "Nothing")
        return { id: 0, x: s.chip.cx, y: s.chip.cy, vx: 0, vy: 0 };
      if (u.tag === "Just")
        return u._1;
      f();
    })(), a = c.vx + (180 * (s.chip.cx - c.x) - 22 * c.vx) * o, l = c.vy + (180 * (s.chip.cy - c.y) - 22 * c.vy) * o, d = { id: 0, x: c.x + a * o, y: c.y + l * o, vx: a, vy: l };
    return k(Ql(d.x - s.chip.cx)(d.y - s.chip.cy)(s), d);
  })(r);
}, Yl = (t) => (n) => {
  const e = De(n) - 32 | 0;
  return e >= 0 && e < t.length ? t[e] : 0.5;
}, c5 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = n * 0.6 + n * 0.5454545454545454, u = n * 1.5625, c = u * 0.76, a = n * 0.7272727272727273, l = e.y + r + a + s, d = ZL(o)(i), _ = Gr(d.line), g = _.length, p = ra(Q((h) => n * Yl(t)(h))(_)), $ = e.x + r + a + p / 2;
  return {
    chip: { cx: $, cy: l, hw: p / 2 + n * 1.2727272727272727, hh: s, dotX: e.x, dotY: e.y },
    glyphs: w((h) => (m) => {
      const y = jL(d.phase)(g)(m._1), x = n * Yl(t)(m._2), J = { cx: h._1 + x / 2, cy: l + (1 - y) * n * 0.85, hw: c / 2, hh: u / 2, cell: WL(m._2), alpha: y };
      return k(h._1 + x, y > 0 ? Pt(h._2)(J) : h._2);
    })(k($ - p / 2, []))(Rt(In)(_))._2
  };
}, a5 = /* @__PURE__ */ Gf(
  "SdfDiagram",
  (t) => {
    const n = Dn(tg), e = Dn(0), r = Dn(0), o = Dn(v), i = Dn([]), s = Dn([]), u = Dn(v), c = Dn(8), a = Dn(1), l = Dn(0), d = Dn(0), _ = Dn(0), g = Dn(0), p = Dn(v), $ = Dn({ resW: 0, resH: 0 }), h = Dn(1), m = Dn(!0), y = an(h)(t.speed);
    ii(
      (T, b) => T === b,
      t.speed,
      () => (y(), () => {
      })
    );
    const x = an(m)(t.playing);
    ii(
      (T, b) => T === b,
      t.playing,
      () => (x(), () => {
      })
    );
    const J = rn(n);
    return ii(
      (T, b) => T === b,
      t.source,
      () => {
        const T = J(), b = we(T, v, Xt);
        if (b.tag === "Nothing")
          return () => {
          };
        if (b.tag === "Just") {
          const L = Yk(b._1)(), A = we(L, v, Xt);
          if (A.tag === "Nothing")
            return () => {
            };
          if (A.tag === "Just") {
            const E = A._1;
            an(u)(v)();
            const O = r5(t.source);
            Xk(E)("OES_standard_derivatives")();
            const H = Nk(E, bL, kL);
            Ok(E)(H)();
            const F = Ut(E)(H)("uRes")(), B = Ut(E)(H)("uTime")(), Z = Ut(E)(H)("uTilt")(), tt = Ut(E)(H)("uNodeCount")(), Y = Ut(E)(H)("uEdgeCount")(), z = Ut(E)(H)("uNodeRect")(), S = Ut(E)(H)("uNodeShape")(), C = Ut(E)(H)("uEdge")(), q = Ut(E)(H)("uArrow")(), P = Ut(E)(H)("uArrowCount")(), D = Ut(E)(H)("uLabel")(), W = Ut(E)(H)("uLabelAspect")(), V = Ut(E)(H)("uLabelFadeStart")(), U = Ut(E)(H)("uLabelDim")(), X = Ut(E)(H)("uLabelH")(), et = Ut(E)(H)("uUnit")(), nt = Ut(E)(H)("uTokCount")(), j = Ut(E)(H)("uTokPos")(), rt = Ut(E)(H)("uTokGlow")(), ct = Ut(E)(H)("uTokNode")(), dt = Ut(E)(H)("uGlyphAtlas")(), Ot = Ut(E)(H)("uChipCount")(), bt = Ut(E)(H)("uChipRect")(), Dt = Ut(E)(H)("uChipDot")(), _t = Ut(E)(H)("uGlyphCount")(), wt = Ut(E)(H)("uGlyphRect")(), pt = Ut(E)(H)("uGlyphCell")(), $t = Ut(E)(H)("uGlyphAlpha")(), lt = Ut(E)(H)("uCamZ")(), gt = Ut(E)(H)("uCamPanX")(), st = Ut(E)(H)("uCamPanY")(), ft = Ut(E)(H)("uRotY")(), Nt = Ut(E)(H)("uActiveDepth")(), vt = Ut(E)(H)("uNodeDepth")(), kt = Ut(E)(H)("uEdgeDepth")(), Qt = Ut(E)(H)("uArrowDepth")();
            $r(E)(D)(0)(), $r(E)(dt)(1)(), Fe(E)(W)(12.8)(), Fe(E)(V)(0.92)();
            const fe = Sl(E)(), On = Sl(E)();
            i5(O.nodeList)(E)(fe)(), OL(E)(On)(i)();
            const zn = Xl(O.nodeList)();
            Uo(E)(U)(zn)(), of(
              sf,
              Vr(Vr(Kr(() => Ff(zu)))(Cf(Af)))(() => Vr(Kr(Xl(O.nodeList)))((mn) => Kr(Uo(E)(U)(mn))))
            )().run(), $r(E)(tt)(O.nodeList.length)(), $r(E)(Y)(Ne(O.edgeSegFlat.length, 4))(), $r(E)(P)(O.arrowData.length)(), Yo(E)(z)(O.nodeRectFlat)(), yr(E)(S)(O.nodeShapeFlat)(), yr(E)(X)(O.nodeLabelHeightFlat)(), Yo(E)(C)(O.edgeSegFlat)(), yr(E)(vt)(O.nodeDepthFlat)(), yr(E)(kt)(O.edgeSegDepth)(), yr(E)(Qt)(Q((mn) => mn.depth)(O.arrowData))();
            const St = js(), oe = rn(o), qn = PL((mn) => {
              const jn = nk(mn)(St);
              return () => (jn(), an(o)(v)());
            }), Xn = () => {
              const mn = oe();
              return qn(mn)();
            }, Gn = () => {
              const mn = El(), jn = rn(r)();
              an(r)(mn)();
              const pr = rn(h)(), Di = rn(m)(), Rr = de(0.05)((mn - jn) / 1e3), Ae = Di ? Rr * pr : 0, Ke = rn(e)() + Ae;
              an(e)(Ke)();
              const Pe = Vk(b._1)(), Qi = zk(), Hi = Kt(1)(de(2)(Qi)), Du = rn(i)(), Qu = rn(s)(), Hu = rn(a)(), Rf = rn(l)(), Bf = rn(d)(), S_ = rn(u)(), Wi = rn(_)(), Oi = 0 + rn(g)(), qi = Pe.width * Hi, Wo = Pe.height * Hi, zf = { cx: 0, cy: 0, hw: O.halfW, hh: O.halfH }, C_ = (() => {
                const Xi = O.duration > 0 ? Ke - O.duration * Le(Ke / O.duration) : 0, Br = n5(O)(Xi), Oo = QL(O)(S_)(Pe.width)(Pe.height)(Rr)(Xi), qo = UL(zf)(O.dives)(Xi), P_ = { centerX: qo.cx, centerY: qo.cy, camZ: qo.hh * 2, viewport: qo }, Wu = (() => {
                  if (Oo.tag === "Nothing")
                    return P_;
                  if (Oo.tag === "Just")
                    return Oo._1.world;
                  f();
                })(), Yi = Wu.centerX + Rf, Ou = Wu.centerY + Bf, Xo = Wu.camZ * 1.18 * Hu, G_ = Yi * Vn(Wi), F_ = Ou * Vn(Oi) - Yi * ee(Wi) * ee(Oi), qu = qi / Wo, Xu = ql(qo)(qu) / ql(zf)(qu), I_ = O.ballRadius * Xu, R_ = 11 * O.scaleFactor * Xu, Df = O.unitHalfH * Xu, Qf = KL(O.dives)(Xi), Hf = u5(Ae)(Qu)(Br)(dL((() => {
                  const Ht = 0.5 * qu * Xo / Kt(0.3)(Vn(Wi)), Wf = 0.5 * Xo / Kt(0.3)(Vn(Oi));
                  return { minX: Yi - Ht, maxX: Yi + Ht, minY: Ou - Wf, maxY: Ou + Wf, margin: 4 * Xo / Kt(1)(Wo) };
                })())(Df * 0.25)(Q(BL)(at((Ht) => Ht.depth >= Qf - 0.5, O.worldNodes)))(Q((Ht) => c5(Du)(R_)({
                  x: Ht.x,
                  y: Ht.y
                })(I_)(Ht.motionT)(Ht.labels))(Br))), Ui = Q((Ht) => Ht._1)(Hf), Vi = Jt(0, 40, xt(Ui)((Ht) => Ht.glyphs)), B_ = Q((Ht) => Ht._2)(Hf), z_ = an($)({ resW: qi, resH: Wo });
                return () => (z_(), an(s)(B_)(), an(u)(Oo.tag === "Just" ? N("Just", Oo._1.camera) : v)(), an(l)(Rf)(), an(d)(Bf)(), an(c)(Xo)(), qk(E)(b._1)(vn(er(qi)))(vn(er(Wo)))(), Kk(E)(), Hk(E)(F)(qi)(Wo)(), Fe(E)(B)(Ke)(), Fe(E)(Z)(Oi)(), Fe(E)(lt)(Xo)(), Fe(E)(gt)(G_)(), Fe(E)(st)(F_)(), Fe(E)(ft)(Wi)(), Fe(E)(Nt)(Qf)(), Fe(E)(et)(Df)(), $r(E)(nt)(Br.length)(), Uo(E)(j)(xt(Br)((Ht) => [Ht.x, Ht.y]))(), yr(E)(rt)(Q((Ht) => Ht.glow)(Br))(), Uo(E)(ct)(xt(Br)((Ht) => [Ht.nx, Ht.ny]))(), Yo(E)(q)(s5(O)(Br))(), $r(E)(Ot)(Ui.length)(), Yo(E)(bt)(xt(Ui)((Ht) => [Ht.chip.cx, Ht.chip.cy, Ht.chip.hw, Ht.chip.hh]))(), Uo(E)(Dt)(xt(Ui)((Ht) => [Ht.chip.dotX, Ht.chip.dotY]))(), $r(E)(_t)(Vi.length)(), Yo(E)(wt)(xt(Vi)((Ht) => [Ht.cx, Ht.cy, Ht.hw, Ht.hh]))(), yr(E)(pt)(Q((Ht) => Ht.cell)(Vi))(), yr(E)($t)(Q((Ht) => Ht.alpha)(Vi))(), Uk(E)());
              })();
              Pe.width > 0 && C_();
              const A_ = ta(Gn)(St)();
              return an(o)(N("Just", A_))();
            }, Ce = an(r), Vt = () => {
              const mn = El();
              Ce(mn)();
              const jn = ta(Gn)(St)();
              return an(o)(N("Just", jn))();
            };
            Vt();
            const dn = mL((mn) => {
              const jn = rn(o);
              return () => {
                const pr = jn();
                if (mn)
                  return pr.tag === "Nothing" ? Vt() : void 0;
                if (!mn && pr.tag === "Just")
                  return Xn();
              };
            })(), E_ = RL(b._1)((mn) => (jn) => (pr) => {
              const Di = rn(c);
              return () => {
                const Rr = Di(), Ae = rn($)();
                if (pr > 0.5) {
                  const Pe = rn(a)();
                  return an(a)(zl(0.3)(2.6)(Pe * Eo(1.01)(jn)))();
                }
                const Ho = rn(l)(), Ke = rn(d)();
                return an(l)(Ho + mn * Rr / Ae.resH)(), an(d)(Ke - jn * Rr / Ae.resH)();
              };
            })((mn) => (jn) => an(p)(N("Just", { x: mn, y: jn })))((mn) => (jn) => (pr) => (Di) => {
              const Rr = rn(p);
              return () => {
                const Ae = Rr();
                if (Ae.tag !== "Nothing") {
                  if (Ae.tag === "Just") {
                    const Ho = jn - Ae._1.y, Ke = mn - Ae._1.x;
                    an(p)(N("Just", { x: mn, y: jn }))();
                    const Pe = rn(c)(), Qi = rn($)();
                    if (pr >= 1.5) {
                      const Qu = rn(l)(), Hu = rn(d)();
                      return an(l)(Qu - Ke * Pe / Qi.resH)(), an(d)(Hu + Ho * Pe / Qi.resH)();
                    }
                    const Hi = rn(_)(), Du = rn(g)();
                    return an(_)(Hi + Ke * 5e-3)(), an(g)(zl(-0.8)(0.8)(Du + Ho * 5e-3))();
                  }
                  f();
                }
              };
            })((mn) => (jn) => an(p)(v))();
            return () => (Xn(), dn(), E_());
          }
        }
        f();
      }
    ), GL(FL({
      style: { position: "absolute", inset: "0" },
      children: [IL({ ref: n, style: { position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" } })]
    }))();
  }
), f5 = /* @__PURE__ */ Ir(a5), l5 = /* @__PURE__ */ Ir(v_), g5 = /* @__PURE__ */ N_({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), d5 = /* @__PURE__ */ N_({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), fo = /* @__PURE__ */ bi(oo)(Zl), nu = T_().pure, _5 = /* @__PURE__ */ Ir(w_), h5 = {
  eq: (t) => (n) => (t.renderer === "CanvasRenderer" ? n.renderer === "CanvasRenderer" : t.renderer === "SvgRenderer" && n.renderer === "SvgRenderer") && (t.sizing.tag === "AutoSize" ? n.sizing.tag === "AutoSize" : t.sizing.tag === "FixedSize" && n.sizing.tag === "FixedSize" && t.sizing._1 === n.sizing._1 && t.sizing._2 === n.sizing._2) && t.source === n.source && (t.theme === "Light" ? n.theme === "Light" : t.theme === "Dark" ? n.theme === "Dark" : t.theme === "Blueprint" ? n.theme === "Blueprint" : t.theme === "Whiteboard" ? n.theme === "Whiteboard" : t.theme === "Isometric" && n.theme === "Isometric") && (t.transparency === "PaintBackground" ? n.transparency === "PaintBackground" : t.transparency === "TransparentBackground" && n.transparency === "TransparentBackground")
}, p5 = /* @__PURE__ */ Pf("svg")(), Ul = (t) => l5({
  className: "markgraf-player",
  style: { position: "relative", width: "100%", height: "100%" },
  children: [
    f5({
      source: t.src,
      speed: 1,
      playing: (() => {
        const n = we(t.paused, v, Xt);
        if (n.tag === "Nothing")
          return !0;
        if (n.tag === "Just")
          return !n._1;
        f();
      })()
    })
  ]
}), L_ = (t) => (n) => {
  const e = we(n.theme, v, Xt), r = (() => {
    if (e.tag === "Nothing")
      return "light";
    if (e.tag === "Just")
      return e._1;
    f();
  })(), o = we(n.renderer, v, Xt), i = (() => {
    if (o.tag === "Nothing")
      return "canvas";
    if (o.tag === "Just")
      return o._1;
    f();
  })(), s = we(n.paused, v, Xt), u = (() => {
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just")
      return s._1;
    f();
  })(), c = r === "light" ? N("Just", yl) : r === "dark" ? N("Just", rb) : r === "blueprint" ? N("Just", ob) : r === "whiteboard" ? N("Just", ib) : r === "isometric" ? N("Just", sb) : v, a = i === "svg" ? N("Just", fk) : i === "canvas" ? N("Just", Ll) : v, l = {
    source: t,
    renderer: (() => {
      if (a.tag === "Nothing")
        return Ll;
      if (a.tag === "Just")
        return a._1;
      f();
    })(),
    sizing: (() => {
      const d = we(n.width, v, Xt);
      if (d.tag === "Just") {
        const _ = we(n.height, v, Xt);
        if (_.tag === "Just")
          return h_("FixedSize", d._1, _._1);
      }
      return ak;
    })(),
    theme: (() => {
      if (c.tag === "Nothing")
        return yl;
      if (c.tag === "Just")
        return c._1;
      f();
    })(),
    transparency: (() => {
      const d = we(n.transparent, v, Xt);
      if (d.tag === "Nothing")
        return !1;
      if (d.tag === "Just")
        return d._1;
      f();
    })() ? cb : ub
  };
  return () => {
    const d = Dn(tg), _ = Bl((h, m) => k(h, m), v), g = _._1, p = Bl((h, m) => k(h, m), { time: 0, keyframe: "", playing: !1 });
    g5(k(i, r))((() => {
      const h = Of("[markgraf] unknown renderer " + Nc(i) + ", defaulting to canvas"), m = (() => {
        if (a.tag === "Nothing")
          return !0;
        if (a.tag === "Just")
          return !1;
        f();
      })() ? h : () => {
      };
      return () => {
        m();
        const y = Of("[markgraf] unknown theme " + Nc(r) + ", defaulting to light");
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
    const $ = rn(d);
    return ii(
      (h, m) => h5.eq(h)(m),
      l,
      () => {
        const h = $(), m = we(h, v, Xt), y = (() => {
          if (m.tag === "Just")
            return Z3(v, Xt, "Element", m._1);
          if (m.tag === "Nothing")
            return v;
          f();
        })();
        if (y.tag === "Nothing")
          return () => {
          };
        if (y.tag === "Just") {
          const x = $k(y._1)(l.source)(l.renderer)(l.sizing)(l.theme)(l.transparency)(!0)();
          if (x.tag === "Left")
            return O_("[markgraf] " + x._1)(), () => {
            };
          if (x.tag === "Right") {
            const J = x._1;
            _._2((b) => N("Just", J))();
            const T = J.subscribe((b) => p._2((L) => b))();
            return () => (T(), J.destroy(), _._2((b) => v)());
          }
        }
        f();
      }
    ), d5(k(
      u,
      (() => {
        if (g.tag === "Nothing")
          return !1;
        if (g.tag === "Just")
          return !0;
        f();
      })()
    ))((() => {
      const h = fo((m) => u ? m.pause : m.play)(g);
      return () => (h(), () => {
      });
    })())(), nu({
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
      play: fo((h) => h.play)(g),
      pause: fo((h) => h.pause)(g),
      toggle: fo((h) => h.toggle)(g),
      seek: (h) => fo((m) => m.seek(h))(g),
      setSpeed: (h) => fo((m) => m.setSpeed(h))(g)
    })();
  };
}, m5 = /* @__PURE__ */ Gf(
  "MarkgrafHeadlessPlayer",
  (t) => {
    const n = L_(t.src)({ renderer: t.renderer, width: t.width, height: t.height, theme: t.theme, transparent: t.transparent, paused: t.paused })(), e = we(t.renderer, v, Xt);
    return (() => {
      if (e.tag === "Nothing")
        return "canvas";
      if (e.tag === "Just")
        return e._1;
      f();
    })() === "svg" ? nu(Ir(p5)({ className: "markgraf-player", ref: n.elementRef }))() : nu(_5({ className: "markgraf-player", ref: n.elementRef }))();
  }
), $5 = /* @__PURE__ */ Gf(
  "MarkgrafPlayer",
  (t) => nu((() => {
    const n = we(t.renderer, v, Xt), e = (() => {
      if (n.tag === "Nothing")
        return "canvas";
      if (n.tag === "Just")
        return n._1;
      f();
    })();
    return e === "sdf" || e === "webgl" ? Ul(t) : Ir(m5)(t);
  })())()
), v5 = (t, n) => L_(t)(n ?? {}), w5 = $5;
export {
  w5 as MarkgrafPlayer,
  v5 as useMarkgraf
};
