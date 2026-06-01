import In from "react";
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
function f() {
  throw new Error("Failed pattern match");
}
function Ce(t, n) {
  return n > 0 ? Math.floor(t / n) : n < 0 ? -Math.floor(t / -n) : 0;
}
const Sn = (t) => (n) => t, z = function(t) {
  return function(n) {
    for (var e = n.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = t(n[o]);
    return r;
  };
}, El = { map: z }, lf = (t) => t, un = function(t) {
  return t.toString();
}, _f = function(t) {
  var n = t.toString();
  return isNaN(n + ".0") ? n : n + ".0";
}, Os = function(t) {
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
}, bu = (t) => t, yn = /* @__PURE__ */ bu("LT"), Nn = /* @__PURE__ */ bu("GT"), Gn = /* @__PURE__ */ bu("EQ"), v = (t, n) => ({ tag: t, _1: n }), J = /* @__PURE__ */ v("Nothing"), qt = (t) => v("Just", t), df = (t) => {
  if (t.tag === "Nothing")
    return !0;
  if (t.tag === "Just")
    return !1;
  f();
}, hf = (t) => {
  if (t.tag === "Nothing")
    return !1;
  if (t.tag === "Just")
    return !0;
  f();
}, po = function(t) {
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
}, Wi = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldr((o) => {
    const i = r(o);
    return (s) => n.apply(n.Functor0().map((u) => lf)(i))(s);
  })(t.pure());
}, Sl = (t) => {
  const n = Wi(t);
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
  foldr: po,
  foldl: x,
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => Ht.foldr((r) => (o) => t.Semigroup0().append(e(r))(o))(n);
  }
}, Pl = null;
function rr(t, n, e) {
  return t == null ? n : e(t);
}
const b = (t, n) => ({ tag: "Tuple", _1: t, _2: n }), Xe = (t) => (n) => b(t, n), Di = (t) => t._2, Hi = (t) => t._1, Gl = function(t) {
  return function() {
    return t;
  };
}, Il = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return Oi.pure(e(r))();
  },
  Functor0: () => Al
}, Oi = { pure: Gl, Apply0: () => Il }, Al = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, Fl = function(t) {
  return function() {
    console.log(t);
  };
}, kc = function(t) {
  return function() {
    console.warn(t);
  };
}, Jt = typeof Array.prototype.flatMap == "function" ? function(t) {
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
}, Et = (t, n) => ({ tag: t, _1: n }), Rl = (t) => Et("Right", t), Bl = {
  map: (t) => (n) => {
    if (n.tag === "Left")
      return Et("Left", n._1);
    if (n.tag === "Right")
      return Et("Right", t(n._1));
    f();
  }
}, pf = {
  apply: (t) => (n) => {
    if (t.tag === "Left")
      return Et("Left", t._1);
    if (t.tag === "Right") {
      if (n.tag === "Left")
        return Et("Left", n._1);
      if (n.tag === "Right")
        return Et("Right", t._1(n._1));
    }
    f();
  },
  Functor0: () => Bl
}, Ql = {
  bind: (t) => {
    if (t.tag === "Left") {
      const n = t._1;
      return (e) => Et("Left", n);
    }
    if (t.tag === "Right") {
      const n = t._1;
      return (e) => e(n);
    }
    f();
  },
  Apply0: () => pf
}, Wl = { pure: Rl, Apply0: () => pf }, $f = { Applicative0: () => Wl, Bind1: () => Ql }, Dl = (t) => t, Hl = { map: (t) => (n) => t(n) }, mf = { apply: (t) => (n) => t(n), Functor0: () => Hl }, Ol = { bind: (t) => (n) => n(t), Apply0: () => mf }, zl = { pure: Dl, Apply0: () => mf }, Ve = { Applicative0: () => zl, Bind1: () => Ol }, io = (t, n) => ({ tag: t, _1: n }), yf = (t) => io("Loop", t), ql = {
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
  Monad0: () => Ve
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
    return Nf.pure(e(r))();
  },
  Functor0: () => Vl
}, Nf = { pure: Xl, Apply0: () => Ul }, Kl = function(n) {
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
var Lu = function(t) {
  return function(n) {
    return t === n;
  };
};
const e_ = Lu, r_ = Lu, Bo = Lu, Eu = function(t) {
  return function(n) {
    return function(e) {
      if (n.length !== e.length) return !1;
      for (var r = 0; r < n.length; r++)
        if (!t(n[r])(e[r])) return !1;
      return !0;
    };
  };
}, ge = { eq: Bo }, o_ = { eq: r_ }, Ir = { eq: e_ };
var Su = function(t) {
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
const i_ = Su, s_ = Su, u_ = Su, C = { compare: /* @__PURE__ */ u_(yn)(Gn)(Nn), Eq0: () => ge }, ft = { compare: /* @__PURE__ */ s_(yn)(Gn)(Nn), Eq0: () => o_ }, it = { compare: /* @__PURE__ */ i_(yn)(Gn)(Nn), Eq0: () => Ir }, c_ = function(t) {
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
})(), f_ = (t) => t, $r = {
  traverse: (t) => {
    const n = t.Apply0();
    return a_(n.apply)(n.Functor0().map)(t.pure);
  },
  sequence: (t) => $r.traverse(t)(f_),
  Functor0: () => El,
  Foldable1: () => Ht
}, It = function(t, n) {
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
const __ = typeof Array.prototype.fill == "function" ? g_ : l_, Lt = /* @__PURE__ */ (function() {
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
}, xf = function(t, n, e, r) {
  for (var o = 0; o < r.length; o++) {
    var i = e(r[o]);
    if (n(i)) return i;
  }
  return t;
}, _r = function(t, n, e, r) {
  for (var o = 0, i = r.length; o < i; o++)
    if (e(r[o])) return t(o);
  return n;
}, Jf = function(t, n, e, r) {
  for (var o = r.length - 1; o >= 0; o--)
    if (e(r[o])) return t(o);
  return n;
}, Tf = function(t, n, e, r, o) {
  if (e < 0 || e > o.length) return n;
  var i = o.slice();
  return i.splice(e, 0, r), t(i);
}, vf = function(t, n, e, r) {
  if (e < 0 || e >= r.length) return n;
  var o = r.slice();
  return o.splice(e, 1), t(o);
}, Ue = function(t, n, e, r, o) {
  if (e < 0 || e >= o.length) return n;
  var i = o.slice();
  return i[e] = r, t(i);
}, Ln = function(t) {
  return t.slice().reverse();
}, zn = function(t) {
  if (t.length <= 1e4)
    return Array.prototype.concat.apply([], t);
  for (var n = [], e = 0, r = t.length; e < r; e++)
    for (var o = t[e], i = 0, s = o.length; i < s; i++)
      n.push(o[i]);
  return n;
}, lt = function(t, n) {
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
}, wn = function(t, n, e) {
  for (var r = n.length < e.length ? n.length : e.length, o = new Array(r), i = 0; i < r; i++)
    o[i] = t(n[i])(e[i]);
  return o;
}, qn = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (t(n[r])) return !0;
  return !1;
}, wf = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (!t(n[r])) return !1;
  return !0;
}, kt = (t) => (n) => h_(
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
), p_ = (t) => (n) => kt((e) => (r) => t.compare(n(e))(n(r))), Dt = (t) => (n) => (() => {
  const e = jl(n);
  return () => {
    const r = [...t];
    return e(r)(), r;
  };
})()(), zi = (t) => {
  if (t.length === 0)
    return t.length - 1 | 0, J;
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? v("Just", { init: bt(0, t.length - 1 | 0, t), last: t[n] }) : J;
}, $_ = (t) => (n) => (e) => t >= 0 && t < e.length ? Ue(qt, J, t, n(e[t]), e) : J, ur = (t) => (n) => {
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
}, Ar = (t) => (n) => {
  const e = kt((r) => (o) => t(r._2)(o._2))(Ft(Xe)(n));
  return 0 < e.length ? z(Di)(p_(it)(Hi)((() => {
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
}, jt = (t) => (n) => {
  const e = _r(qt, J, t, n);
  return e.tag === "Just" ? v("Just", n[e._1]) : J;
}, kf = (t) => (n) => lt(t, n), Hn = (t) => (n) => (e) => {
  const r = _r(qt, J, (o) => t.eq(o)(n), e);
  if (r.tag === "Nothing")
    return !1;
  if (r.tag === "Just")
    return !0;
  f();
}, bf = (t) => (n) => Jt(n)(t), yt = (t) => bf((n) => {
  const e = t(n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [e._1];
  f();
}), y_ = isFinite, Ke = Math.abs, N_ = Math.acos, cr = function(t) {
  return function(n) {
    return Math.atan2(t, n);
  };
}, qi = Math.ceil, re = Math.cos, Yi = Math.exp, Ne = Math.floor, bc = Math.log, x_ = function(t) {
  return function(n) {
    return Math.min(t, n);
  };
}, zs = function(t) {
  return function(n) {
    return Math.pow(t, n);
  };
}, sr = Math.round, Un = Math.sin, En = Math.sqrt, J_ = Math.tan, T_ = function(t) {
  return function(n) {
    return function(e) {
      return (e | 0) === e ? t(e) : n;
    };
  };
}, nt = function(t) {
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
}, w_ = /* @__PURE__ */ v_(qt)(J), k_ = /* @__PURE__ */ w_(10), Lf = /* @__PURE__ */ T_(qt)(J), $n = (t) => {
  if (!y_(t))
    return 0;
  if (t >= nt(2147483647))
    return 2147483647;
  if (t <= nt(-2147483648))
    return -2147483648;
  const n = Lf(t);
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
}, E_ = { unfoldr1: /* @__PURE__ */ b_(df)(L_)(Hi)(Di) }, S_ = function(t) {
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
}, te = {
  unfoldr: /* @__PURE__ */ S_(df)(C_)(Hi)(Di),
  Unfoldable10: () => E_
}, Ot = (t, n, e, r, o, i, s) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s }), Kn = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), Vo = (t, n, e) => ({ tag: "Split", _1: t, _2: n, _3: e }), Lc = (t, n, e) => ({ tag: "SplitLast", _1: t, _2: n, _3: e }), A = /* @__PURE__ */ Ot("Leaf"), we = /* @__PURE__ */ Kn("IterLeaf"), an = (t, n, e, r) => {
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
}, Fr = (t, n, e) => {
  if (e.tag === "Leaf")
    return Vo(J, A, A);
  if (e.tag === "Node") {
    const r = t(n)(e._3);
    if (r === "LT") {
      const o = Fr(t, n, e._5);
      return Vo(o._1, o._2, Yn(e._3, e._4, o._3, e._6));
    }
    if (r === "GT") {
      const o = Fr(t, n, e._6);
      return Vo(o._1, Yn(e._3, e._4, e._5, o._2), o._3);
    }
    if (r === "EQ")
      return Vo(v("Just", e._4), e._5, e._6);
  }
  f();
}, Ef = (t, n, e, r) => {
  if (r.tag === "Leaf")
    return Lc(t, n, e);
  if (r.tag === "Node") {
    const o = Ef(r._3, r._4, r._5, r._6);
    return Lc(o._1, o._2, Yn(t, n, e, o._3));
  }
  f();
}, Qo = (t, n) => {
  if (t.tag === "Leaf")
    return n;
  if (t.tag === "Node") {
    const e = Ef(t._3, t._4, t._5, t._6);
    return Yn(e._1, e._2, e._3, n);
  }
  f();
}, Pe = (t, n, e) => {
  if (n.tag === "Leaf")
    return A;
  if (e.tag === "Leaf")
    return n;
  if (e.tag === "Node") {
    const r = Fr(t, e._3, n);
    return Qo(Pe(t, r._2, e._5), Pe(t, r._3, e._6));
  }
  f();
}, gi = (t, n, e, r) => {
  if (e.tag === "Leaf" || r.tag === "Leaf")
    return A;
  if (r.tag === "Node") {
    const o = Fr(t, r._3, e), i = gi(t, n, o._2, r._5), s = gi(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return Yn(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return Qo(i, s);
  }
  f();
}, Cn = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r;
  if (r.tag === "Leaf")
    return e;
  if (r.tag === "Node") {
    const o = Fr(t, r._3, e), i = Cn(t, n, o._2, r._5), s = Cn(t, n, o._3, r._6);
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
        return Qo(e(r._5), e(r._6));
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
          const $ = _, p = d;
          if (p.tag === "Leaf") {
            l = !1, h = $;
            continue;
          }
          if (p.tag === "Node") {
            if (p._6.tag === "Leaf") {
              _ = Kn("IterEmit", p._3, p._4, $), d = p._5;
              continue;
            }
            _ = Kn("IterEmit", p._3, p._4, Kn("IterNode", p._6, $)), d = p._5;
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
}, ke = /* @__PURE__ */ G_((t, n, e) => v("Just", b(b(t, n), e)))((t) => J), vt = (t) => (n) => (e) => (r) => {
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
}, nn = (t) => (n) => n.foldl((e) => (r) => U(t)(r._1)(r._2)(e))(A), $o = (t) => (n) => {
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
        return Qo(r._5, r._6);
    }
    f();
  };
  return e;
}, Sf = (t) => {
  const n = t.compare;
  return (e) => (r) => (o) => {
    const i = Fr(n, r, o), s = e(i._1);
    if (s.tag === "Nothing")
      return Qo(i._2, i._3);
    if (s.tag === "Just")
      return Yn(r, s._1, i._2, i._3);
    f();
  };
}, on = function(t) {
  return function(n) {
    return t + n | 0;
  };
}, Rr = function(t) {
  return function(n) {
    return t + n;
  };
}, ze = function(t) {
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
function Cu(t) {
  return function(n) {
    return function(e) {
      return t.apply(e, [n]);
    };
  };
}
const F_ = Cu(Number.prototype.toPrecision), R_ = Cu(Number.prototype.toFixed), B_ = Cu(Number.prototype.toExponential), Cf = (t, n) => ({ tag: t, _1: n }), Pf = (t) => (n) => (e) => {
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
}, Gf = (t) => {
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
function Pu(t) {
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
function ys(t) {
  return function(n) {
    return function() {
      t.lineCap = n;
    };
  };
}
function Ns(t) {
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
function If(t) {
  return function() {
    t.beginPath();
  };
}
function Gu(t) {
  return function() {
    t.stroke();
  };
}
function Iu(t) {
  return function() {
    t.fill();
  };
}
function U_(t) {
  return function() {
    t.clip();
  };
}
function to(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.lineTo(n, e);
      };
    };
  };
}
function Af(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.moveTo(n, e);
      };
    };
  };
}
function Ff(t) {
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
function li(t) {
  return function(n) {
    return function() {
      t.scale(n.scaleX, n.scaleY);
    };
  };
}
function qs(t) {
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
function or(t) {
  return function() {
    t.save();
  };
}
function ir(t) {
  return function() {
    t.restore();
  };
}
function no(t) {
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
const Rf = (t) => t, Au = (t) => t, Fu = (t) => t, Ru = (t) => t, Xi = (t) => t, o1 = /* @__PURE__ */ Xi("BaselineTop"), i1 = /* @__PURE__ */ Xi("BaselineMiddle"), s1 = /* @__PURE__ */ Xi("BaselineAlphabetic"), u1 = /* @__PURE__ */ Xi("BaselineBottom"), c1 = /* @__PURE__ */ Ru("AlignLeft"), a1 = /* @__PURE__ */ Ru("AlignRight"), f1 = /* @__PURE__ */ Ru("AlignCenter"), Bu = /* @__PURE__ */ Fu("BevelJoin"), Vi = /* @__PURE__ */ Fu("RoundJoin"), Qu = /* @__PURE__ */ Fu("MiterJoin"), Wu = /* @__PURE__ */ Au("Round"), Du = /* @__PURE__ */ Au("Square"), Hu = /* @__PURE__ */ Au("Butt"), g1 = /* @__PURE__ */ Rf("SourceOver"), l1 = /* @__PURE__ */ Rf("Difference"), _1 = (t) => (n) => t1(t)((() => {
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
})()), Ui = (t) => (n) => {
  if (n === "BevelJoin")
    return Ns(t)("bevel");
  if (n === "RoundJoin")
    return Ns(t)("round");
  if (n === "MiterJoin")
    return Ns(t)("miter");
  f();
}, Ou = (t) => (n) => {
  if (n === "Round")
    return ys(t)("round");
  if (n === "Square")
    return ys(t)("square");
  if (n === "Butt")
    return ys(t)("butt");
  f();
}, Ec = (t) => (n) => X_(t)((() => {
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
      return (r) => (o) => Cn(e, Sn, r, o);
    })()
  };
  return { mempty: A, Semigroup0: () => n };
}, so = function(t) {
  return function(n) {
    if (t >= 0 && t < n.length) return n.charAt(t);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
}, mr = function(t) {
  return t.join("");
}, Ze = function(t) {
  return t.split("");
}, Ki = function(t) {
  return t;
}, Me = function(t) {
  return t.length;
}, Sc = function(t) {
  return function(n) {
    return n.substr(0, t);
  };
}, mo = function(t) {
  return function(n) {
    return n.substring(t);
  };
}, p1 = function(t) {
  return function(n) {
    return { before: n.substring(0, t), after: n.substring(t) };
  };
}, $1 = (t) => (n) => {
  const e = p1(Me(t))(n);
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
}, dr = (t) => BigInt(t), T1 = (t) => Number(t), ui = (t) => (n) => t + n, ci = (t) => (n) => t * n, Ys = (t) => (n) => t - n, Bf = 0n, _i = 1n, Qf = (t) => (n) => t ^ n, yo = (t) => (n) => t & n, zu = (t) => (n) => t << n, Xs = (t) => (n) => t >> n, v1 = (t) => (n) => t == n, w1 = (t) => (n) => t === n ? 0 : t > n ? 1 : -1, k1 = { eq: v1 }, Cc = {
  compare: (t) => (n) => {
    const e = w1(t)(n);
    return e === 1 ? Nn : e === 0 ? Gn : yn;
  },
  Eq0: () => k1
}, b1 = /* @__PURE__ */ x1(qt)(J), L1 = /* @__PURE__ */ J1(qt)(J), Wf = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = ft.compare(n._1)(e._1);
      return r === "LT" ? yn : r === "GT" ? Nn : ft.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), E1 = (t) => (n) => Ke(t._1 - n._1) + Ke(t._2 - n._2), yr = (t) => t, Mi = (t) => t, dn = /* @__PURE__ */ Mi("North"), hn = /* @__PURE__ */ Mi("South"), pe = /* @__PURE__ */ Mi("East"), nr = /* @__PURE__ */ Mi("West"), Ge = /* @__PURE__ */ yr("Rectangle"), Pc = /* @__PURE__ */ yr("Cylinder"), S1 = /* @__PURE__ */ yr("Parallelogram"), C1 = /* @__PURE__ */ yr("Diamond"), P1 = /* @__PURE__ */ yr("Ellipse"), Gc = /* @__PURE__ */ yr("Document"), G1 = /* @__PURE__ */ yr("Cloud"), Ic = (t) => t, Df = /* @__PURE__ */ x(Rr)(0), I1 = (t) => (n) => (e) => {
  const r = ft.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ft.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, ye = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, No = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ac = (t) => (e) => {
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
}, Br = (t) => (n) => {
  const e = wn(
    (s) => (u) => ({
      a: s,
      b: u,
      len: (() => {
        const c = u.y - s.y, a = u.x - s.x;
        return En(a * a + c * c);
      })()
    }),
    t,
    bt(1, t.length, t)
  ), r = Df(z((s) => s.len)(e)), o = I1(0)(r)(n * r), i = (s) => (u) => (c) => {
    let a = s, g = u, _ = c, d = !0, l;
    for (; d; ) {
      const h = a, $ = g, p = _, m = Rt((y) => J, (y) => (N) => v("Just", { head: y, tail: N }), h);
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
  return 0 < t.length ? v("Just", i(e)(o)(t[0])) : J;
}, A1 = (t) => (n) => {
  const e = ye(1)(t.w), r = ye(1)(t.h), o = ye(1)(n.w - 8), i = ye(1)(n.h - 8), s = No(o / e)(i / r);
  return { scale: s, tx: n.x + 4 + (o - e * s) / 2 - t.x * s, ty: n.y + 4 + (i - r * s) / 2 - t.y * s };
}, Wo = (t) => Df(wn(
  (n) => (e) => {
    const r = e.y - n.y, o = e.x - n.x;
    return En(o * o + r * r);
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
  })(), g = ye(0.05)(1 - o.pre - o.post), _ = r < o.pre ? 0 : r > 1 - o.post ? 1 : (r - o.pre) / g, d = a.x - e.x, l = 2 * (() => {
    const T = a.y - e.y;
    return (d < 0 ? -d : d) + (T < 0 ? -T : T);
  })(), h = s.x - n.x, $ = 2 * (() => {
    const T = s.y - n.y;
    return (h < 0 ? -h : h) + (T < 0 ? -T : T);
  })(), p = $ + Wo(t) + l, m = p <= 1e-4 ? 1 : 1 - l / p, y = p <= 1e-4 ? 0 : $ / p;
  if (_ <= y) {
    const T = y <= 1e-4 ? 1 : _ / y;
    return { x: n.x + (s.x - n.x) * T, y: n.y + (s.y - n.y) * T };
  }
  if (_ >= m) {
    const T = m >= 1 ? 0 : (_ - m) / (1 - m);
    return { x: a.x + (e.x - a.x) * T, y: a.y + (e.y - a.y) * T };
  }
  const N = Br(t)((_ - y) / ye(1e-4)(m - y));
  if (N.tag === "Nothing")
    return s;
  if (N.tag === "Just")
    return N._1;
  f();
}, R1 = (t) => {
  const n = Rt(
    (e) => J,
    (e) => (r) => v("Just", { head: e, tail: r }),
    (() => {
      const e = (r, o) => {
        if (r.tag === "Leaf")
          return o;
        if (r.tag === "Node")
          return e(r._5, zt("Cons", r._4, e(r._6, o)));
        f();
      };
      return Jt(Lt(Xt.foldr, e(t.nodes, Yt)))((r) => [
        { x: r.x, y: r.y },
        { x: r.x + r.w, y: r.y + r.h }
      ]);
    })()
  );
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = x((r) => (o) => ({ minX: No(r.minX)(o.x), minY: No(r.minY)(o.y), maxX: ye(r.maxX)(o.x), maxY: ye(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, qu = { scale: 1, tx: 0, ty: 0 }, Mn = (t) => {
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
        return Jt(Lt(Xt.foldr, e(t.nodes, Yt)))((r) => [
          { x: r.x, y: r.y },
          { x: r.x + r.w, y: r.y + r.h }
        ]);
      })(),
      ...zn((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, zt("Cons", r._4, e(r._6, o)));
          f();
        };
        return Lt(Xt.foldr, e(t.edges, Yt));
      })()),
      ...zn((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, zt("Cons", r._4, e(r._6, o)));
          f();
        };
        return Lt(Xt.foldr, e(t.chipExtras, Yt));
      })())
    ]
  );
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = x((r) => (o) => ({ minX: No(r.minX)(o.x), minY: No(r.minY)(o.y), maxX: ye(r.maxX)(o.x), maxY: ye(r.maxY)(o.y) }))({
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
    const _ = s, d = u, l = c, h = Rt(($) => J, ($) => (p) => v("Just", { head: $, tail: p }), d);
    if (h.tag === "Nothing") {
      a = !1, g = l;
      continue;
    }
    if (h.tag === "Just") {
      const $ = Ac(h._1.head)(_.interiors);
      if ($.tag === "Nothing") {
        a = !1, g = l;
        continue;
      }
      if ($.tag === "Just") {
        s = $._1, u = h._1.tail, c = (() => {
          const p = A1(Mn($._1.layout))((() => {
            const m = Ac(h._1.head)(_.layout.nodes);
            if (m.tag === "Nothing")
              return { x: 0, y: 0, w: 1, h: 1, label: "", shape: Ge };
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
})(t)(n)(qu), Hf = (t) => t, Fc = (t, n) => ({ tag: t, _1: n }), ji = (t, n) => ({ tag: t, _1: n }), Yu = (t, n) => ({ tag: t, _1: n }), Q1 = /* @__PURE__ */ Yu("First"), W1 = /* @__PURE__ */ Hf("Forward"), D1 = /* @__PURE__ */ Hf("Backward"), H1 = /* @__PURE__ */ ji("ExitNode"), Of = /* @__PURE__ */ nn(C)(Ht), O1 = (t) => po((n) => (e) => ({
  nodes: Cn(C.compare, Sn, n.nodes, e.nodes),
  edges: Cn(C.compare, Sn, n.edges, e.edges)
}))({ nodes: A, edges: A })(t.keyframes), z1 = (t) => (n) => ({
  entering: {
    nodes: Pe(C.compare, n.nodes, t.nodes),
    edges: Pe(C.compare, n.edges, t.edges)
  },
  leaving: {
    nodes: Pe(C.compare, t.nodes, n.nodes),
    edges: Pe(C.compare, t.edges, n.edges)
  },
  surviving: {
    nodes: gi(C.compare, Sn, t.nodes, n.nodes),
    edges: gi(C.compare, Sn, t.edges, n.edges)
  }
}), di = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Qr = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, xo = (t) => (e) => {
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
}, Vs = (t) => (e) => {
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
  const t = te.unfoldr(ke);
  return (n) => t(Kn("IterNode", n, we));
})(), zf = (t) => (e) => {
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
}, Rc = /* @__PURE__ */ nn(C)(Ht), uo = (t) => {
  const n = Rt((e) => J, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = x((r) => (o) => ({ minX: di(r.minX)(o.x), minY: di(r.minY)(o.y), maxX: Qr(r.maxX)(o.x), maxY: Qr(r.maxY)(o.y) }))({
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
    return v("Just", uo(t));
  f();
}, U1 = (t) => (n) => (e) => q1(Jt(Lt(On.foldr, e))((r) => {
  const o = xo(r)(t);
  if (o.tag === "Just")
    return lt((i) => !Vs(i)(n), [o._1.source, o._1.target]);
  if (o.tag === "Nothing")
    return [];
  f();
})), K1 = (t) => t.kind.tag === "SendToken" ? v("Just", b(t.kind._1.edge, { source: t.kind._1.from, target: t.kind._1.to })) : J, M1 = (t) => t.tag === "DataFlow" ? yt(K1)(t._1.events) : [], j1 = (t) => (n) => Y1(yt((e) => Vs(e._2.source)(n) || Vs(e._2.target)(n) ? v("Just", e._1) : J)(X1(t))), Z1 = (t) => {
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? 0 < t.length ? t[0].x === t[n].x && t[0].y === t[n].y ? v("Just", uo([t[0]])) : v("Just", uo([t[0], t[n]])) : J : 0 < t.length ? v("Just", uo([t[0]])) : J;
}, hi = (t) => {
  const n = Rt((e) => J, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = x((r) => (o) => ({ minX: di(r.minX)(o.x), minY: di(r.minY)(o.y), maxX: Qr(r.maxX)(o.x + o.w), maxY: Qr(r.maxY)(o.y + o.h) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x + n._1.head.w,
      maxY: n._1.head.y + n._1.head.h
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, qf = (t) => (n) => (e) => {
  if (e.tag === "Leaf")
    return Mn(t);
  const r = j1(n)(e), o = [
    ...yt((i) => {
      const s = zf(i)(t.nodes);
      return s.tag === "Just" ? v("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : J;
    })(Lt(
      On.foldr,
      Cn(C.compare, Sn, e, U1(n)(e)(r))
    )),
    ...yt((i) => {
      const s = xo(i)(t.edges);
      return s.tag === "Just" ? v("Just", uo(s._1)) : J;
    })(Lt(On.foldr, r)),
    ...yt((i) => {
      const s = xo(i)(t.chipExtras);
      if (s.tag === "Just")
        return V1(s._1);
      if (s.tag === "Nothing")
        return J;
      f();
    })(Lt(On.foldr, r))
  ];
  return o.length === 0 ? Mn(t) : hi(o);
}, jr = (t) => (n) => (e) => {
  const r = [
    ...yt((o) => o)([
      (() => {
        const o = xo(e)(t.chipExtras);
        if (o.tag === "Just")
          return Z1(o._1);
        if (o.tag === "Nothing")
          return J;
        f();
      })()
    ]),
    ...(() => {
      const o = xo(e)(n);
      if (o.tag === "Just")
        return yt((i) => {
          const s = zf(i)(t.nodes);
          return s.tag === "Just" ? v("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : J;
        })([o._1.source, o._1.target]);
      if (o.tag === "Nothing")
        return [];
      f();
    })()
  ];
  return r.length === 0 ? qf(t)(n)(A) : hi(r);
}, Xu = (t) => (n) => {
  const e = Mn(t), r = e.w / Qr(1e-4)(n.zoom), o = e.h / Qr(1e-4)(n.zoom);
  return { x: n.center.x - r / 2, y: n.center.y - o / 2, w: r, h: o };
}, td = (t) => Cn(
  C.compare,
  Sn,
  Rc(z((n) => b(n.id, { source: n.from.node, target: n.to.node }))(t.graph.edges)),
  Rc(Jt(t.scenes)(M1))
), Vu = (t) => t, nd = (t) => t, hr = /* @__PURE__ */ Vu("Linear"), ed = /* @__PURE__ */ Vu("EaseInOutQuad"), rd = /* @__PURE__ */ Vu("SpringBouncy"), Jo = (t) => (n) => (e) => {
  const r = En(1 - n * n), o = t * r;
  return 1 - Yi(-n * t * e) * (re(o * e) + n / r * Un(o * e));
}, od = (t) => {
  const n = ft.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = ft.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, Uu = (t) => (n) => (() => {
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
    return (e) => e >= 1 ? 1 : 1 - zs(2)(-10 * e);
  if (t === "Spring")
    return (e) => 1 - (1 + 6 * e) * Yi(-6 * e);
  if (t === "SpringBouncy")
    return Jo(6)(0.7);
  f();
})()(od(n)), Yf = (t) => t, Ku = (t) => t, Zi = (t) => (n) => (e) => {
  const r = ft.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ft.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, To = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Xf = (t) => (n) => {
  const e = ft.compare(t)(n);
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
}, sd = /* @__PURE__ */ Ku("Hold"), ud = /* @__PURE__ */ Ku("Gap"), cd = /* @__PURE__ */ Ku("Move"), co = /* @__PURE__ */ Yf("LinearLerp"), Bc = /* @__PURE__ */ Yf("LogLerp"), ad = (t) => (n) => (e) => {
  const r = e.center.y - n.center.y, o = e.center.x - n.center.x, i = En(o * o + r * r), s = e.zoom - n.zoom, u = s < 0 ? -s : s;
  return Zi(t.minTransition)(t.maxTransition)(To(t.panSpeed <= 0 ? t.minTransition : i / t.panSpeed)(t.zoomSpeed <= 0 ? t.minTransition : u / t.zoomSpeed));
}, fd = /* @__PURE__ */ x((t) => (n) => {
  const e = t.length - 1 | 0;
  return e >= 0 && e < t.length && t[e] === n ? t : Dt(t)(n);
})([]), Qc = (t) => (n) => {
  const e = { x: 0, y: 0 }, r = 0 < t.length ? t[0].pos : e, o = Jf(qt, J, (i) => i.t <= n, t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just") {
    const i = o._1 + 1 | 0;
    if (i >= 0 && i < t.length) {
      if (o._1 >= 0 && o._1 < t.length) {
        const s = Zi(0)(1)(t[i].t <= t[o._1].t ? 0 : (n - t[o._1].t) / (t[i].t - t[o._1].t));
        return { x: t[o._1].pos.x + (t[i].pos.x - t[o._1].pos.x) * s, y: t[o._1].pos.y + (t[i].pos.y - t[o._1].pos.y) * s };
      }
      return e;
    }
    return o._1 >= 0 && o._1 < t.length ? t[o._1].pos : e;
  }
  f();
}, Us = (t) => (n) => ({ center: { x: n.center.x * t.scale + t.tx, y: n.center.y * t.scale + t.ty }, zoom: n.zoom / To(1e-6)(t.scale) }), gd = (t) => (n) => (e) => ({
  center: { x: t.center.x + (n.center.x - t.center.x) * e, y: t.center.y + (n.center.y - t.center.y) * e },
  zoom: Yi((() => {
    const r = bc(To(1e-6)(t.zoom));
    return r + (bc(To(1e-6)(n.zoom)) - r) * e;
  })())
}), ld = (t) => (n) => (e) => {
  const r = Uu(e.easing)(Zi(0)(1)(e.endT <= e.startT ? 1 : (n - e.startT) / (e.endT - e.startT)));
  if (e.interp === "LinearLerp")
    return {
      center: { x: e.fromCam.center.x + (e.toCam.center.x - e.fromCam.center.x) * r, y: e.fromCam.center.y + (e.toCam.center.y - e.fromCam.center.y) * r },
      zoom: e.fromCam.zoom + (e.toCam.zoom - e.fromCam.zoom) * r
    };
  if (e.interp === "LogLerp")
    return gd(e.fromCam)(e.toCam)(r);
  f();
}, _d = (t) => (n) => (e) => (r) => {
  const o = (s, u) => Xf(ad(t)(s.toCam)(u.toCam))(s.endT - s.startT), i = x((s) => (u) => {
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
      })() || o(s.pending._1, u) <= 0 ? { acc: Dt(s.acc)(s.pending._1), pending: v("Just", u) } : {
        acc: Dt(Dt(s.acc)({ ...s.pending._1, endT: u.startT - o(s.pending._1, u) }))({
          startT: u.startT - o(s.pending._1, u),
          endT: u.startT,
          fromCam: s.pending._1.toCam,
          toCam: u.toCam,
          easing: u.easing,
          interp: co
        }),
        pending: v("Just", u)
      };
    f();
  })({ acc: [], pending: J })(r);
  if (i.pending.tag === "Nothing")
    return i.acc;
  if (i.pending.tag === "Just")
    return Dt(i.acc)(i.pending._1);
  f();
}, dd = (t) => (n) => {
  const e = (r) => {
    const o = Jf(qt, J, (i) => i.kind === "Hold" || i.kind === "Move", r < 1 ? [] : bt(0, r, n));
    if (o.tag === "Just")
      return o._1 >= 0 && o._1 < n.length ? v("Just", n[o._1].toCam) : J;
    if (o.tag === "Nothing")
      return J;
    f();
  };
  return Ft((r) => (o) => {
    if (o.kind === "Hold")
      return { startT: o.startT, endT: o.endT, fromCam: o.fromCam, toCam: o.toCam, easing: o.easing, interp: co };
    if (o.kind === "Move")
      return { startT: o.startT, endT: o.endT, fromCam: o.fromCam, toCam: o.toCam, easing: hr, interp: co };
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
          })(), u = r + 1 | 0, c = _r(
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
        interp: co
      };
    f();
  })(n);
}, hd = {
  padding: 24,
  easing: hr,
  minZoom: 0.9,
  maxZoom: 2.5,
  tokenZoomFloor: 0,
  panSpeed: 1500,
  zoomSpeed: 4,
  minTransition: 0.15,
  maxTransition: 0.6,
  cameraDecay: 16
}, Mu = (t) => (n) => (e) => {
  const r = n.w + e * 2, o = n.h + e * 2, i = Mn(t);
  return r <= 0 || o <= 0 || i.w <= 0 || i.h <= 0 ? 1 : Xf(i.w / r)(i.h / o);
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
  })() ? Dt((() => {
    const o = t.length - 1 | 0;
    return o < 1 ? [] : bt(0, o, t);
  })())({ ...r._1, endT: n.endT }) : Dt(t)(n);
})([]), ao = (t) => (n) => (e) => (r) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: To(r)(Zi(t.minZoom)(t.maxZoom)(Mu(n)(e)(t.padding))) }), $d = (t) => (n) => (e) => (r) => {
  const o = kt((u) => (c) => it.compare(c.priority)(u.priority)), i = ao(t)(n)(Mn(n))(0), s = lt(
    (u) => u >= 0 && u <= e,
    fd(kt(ft.compare)([
      0,
      e,
      ...Jt(r)((u) => [u.startT, u.endT]),
      ...Jt(r)((u) => {
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
    const a = yt((_) => _.pathFollow)(o(lt((_) => _.startT <= c && c < _.endT, r)));
    if (0 < a.length)
      return v(
        "Just",
        {
          kind: cd,
          startT: u._1,
          endT: u._2,
          fromCam: { center: Qc(a[0].samples)(u._1), zoom: a[0].zoom },
          toCam: { center: Qc(a[0].samples)(u._2), zoom: a[0].zoom },
          easing: hr
        }
      );
    const g = z((_) => _.bbox)(lt(
      (_) => _.priority === x(id)(0)(z((d) => d.priority)(lt(
        (d) => d.startT <= c && c < d.endT,
        r
      ))),
      lt((_) => _.startT <= c && c < _.endT, r)
    ));
    return g.length === 0 ? v("Just", { kind: ud, startT: u._1, endT: u._2, fromCam: i, toCam: i, easing: t.easing }) : v(
      "Just",
      {
        kind: sd,
        startT: u._1,
        endT: u._2,
        fromCam: ao(t)(n)(hi(g))(qn(
          (_) => _.priority >= 1,
          lt((_) => _.startT <= c && c < _.endT, r)
        ) ? t.tokenZoomFloor : 0),
        toCam: ao(t)(n)(hi(g))(qn(
          (_) => _.priority >= 1,
          lt((_) => _.startT <= c && c < _.endT, r)
        ) ? t.tokenZoomFloor : 0),
        easing: t.easing
      }
    );
  })(wn(Xe, s, bt(1, s.length, s))))));
}, Vf = (t) => (n) => (e) => (r) => {
  const o = jt((i) => r >= i.startT && r < i.endT)(e);
  if (o.tag === "Just")
    return ld()(r)(o._1);
  if (o.tag === "Nothing") {
    const i = e.length - 1 | 0;
    if (i >= 0 && i < e.length && r >= e[i].endT)
      return e[i].toCam;
    const s = ao(t)(n)(Mn(n))(0);
    return 0 < e.length ? e[0].fromCam : s;
  }
  f();
};
function Re(t) {
  return t.charCodeAt(0);
}
function Uf(t) {
  return String.fromCharCode(t);
}
const Oe = function(t) {
  return function(n) {
    return function(e) {
      return e.replace(new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), n);
    };
  };
}, ts = function(t) {
  return function(n) {
    return n.split(t);
  };
}, md = function(t) {
  return t.trim();
}, ns = function(t) {
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
}, es = (t) => {
  const n = Me(t);
  if (n === 0)
    return J;
  if (n === 1)
    return v("Just", { head: Re(so(0)(t)), tail: "" });
  const e = Re(so(1)(t)), r = Re(so(0)(t));
  return 55296 <= r && r <= 56319 && 56320 <= e && e <= 57343 ? v("Just", { head: (((r - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0, tail: mo(2)(t) }) : v("Just", { head: r, tail: mo(1)(t) });
}, bd = (t) => {
  const n = es(t);
  return n.tag === "Just" ? v("Just", b(n._1.head, n._1.tail)) : J;
}, Ld = (t) => te.unfoldr(bd)(t), Ed = (t) => {
  const n = Re(so(0)(t));
  if (55296 <= n && n <= 56319 && Me(t) > 1) {
    const e = Re(so(1)(t));
    if (56320 <= e && e <= 57343)
      return (((n - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0;
  }
  return n;
}, Kf = /* @__PURE__ */ Td(Ed), rs = /* @__PURE__ */ kd(Ld)(Kf), xs = (t) => Ki(t >= 0 && t <= 65535 ? Uf(t) : t < 0 ? "\0" : "\uffff"), Sd = (t) => t <= 65535 ? xs(t) : xs(Ce(t - 65536 | 0, 1024) + 55296 | 0) + xs(ze(t - 65536 | 0)(1024) + 56320 | 0), Cd = /* @__PURE__ */ vd(Sd), Mf = (t) => (n) => {
  if (t < 1)
    return "";
  const e = es(n);
  return e.tag === "Just" ? Cd(e._1.head) + Mf(t - 1 | 0)(e._1.tail) : n;
}, mn = /* @__PURE__ */ wd(Mf), Pd = (t) => (n) => n === "" ? J : v("Just", Kf(n)), Wr = (t, n, e) => ({ tag: t, _1: n, _2: e }), Gd = () => ({ tag: "ExtendFromSource" }), Dr = (t, n) => ({ tag: t, _1: n }), ju = (t) => t, pi = (t, n) => ({ tag: t, _1: n }), Js = /* @__PURE__ */ pi("NotYet"), Wc = /* @__PURE__ */ pi("Consumed"), Id = /* @__PURE__ */ ju("FromSource"), Dc = /* @__PURE__ */ ju("FromTarget"), jf = /* @__PURE__ */ ju("FromBoth"), fo = /* @__PURE__ */ Dr("Hidden"), Ad = /* @__PURE__ */ Dr("Visible"), Zu = /* @__PURE__ */ Gd(), go = /* @__PURE__ */ Wr("Retracted"), Fd = /* @__PURE__ */ Wr("Extended"), Zf = (t) => t, Ks = (t, n) => ({ tag: t, _1: n }), er = (t, n, e) => ({ tag: t, _1: n, _2: e }), t0 = (t) => t, ar = (t, n) => ({ tag: t, _1: n }), wr = (t, n, e, r, o, i, s, u, c) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s, _7: u, _8: c }), Do = (t) => (e) => {
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
}, xe = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, n0 = /* @__PURE__ */ nn(C)(Ht), Ms = /* @__PURE__ */ Eu(Bo), lo = (t) => (e) => {
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
}, $i = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, vo = (t) => (e) => {
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
}, Hc = (t) => (e) => {
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
}, e0 = (t) => (e) => {
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
}, xr = /* @__PURE__ */ (() => {
  const t = te.unfoldr((n) => {
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
})(), Rd = /* @__PURE__ */ x((t) => (n) => U(C)(n)()(t))(A), js = (t) => (e) => {
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
}, Ts = (t) => (e) => {
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
}, Bd = /* @__PURE__ */ ar("NoKeyframes"), Qd = (t) => ar("DuplicateEventId", t), Wd = (t) => ar("UnknownEvent", t), r0 = /* @__PURE__ */ t0("PlopIn"), Dd = /* @__PURE__ */ t0("PlopOut"), Hd = /* @__PURE__ */ Zf("DiveIn"), Od = /* @__PURE__ */ Zf("DiveOut"), zd = (t) => (n) => (e) => (r) => {
  const o = Do(r.edge)(n.edges), i = (() => {
    if (o.tag === "Nothing")
      return 0;
    if (o.tag === "Just")
      return Wo(o._1);
    f();
  })(), s = xe(t.minTokenDuration)(xe(nt(x((u) => (c) => u + rs(c).length | 0)(0)(r.labels)) * t.tokenReadSecPerChar)(t.tokenSpeed <= 0 ? 0 : i / t.tokenSpeed)) + e.pre + e.post;
  return { duration: s, holdPre: s <= 0 ? 0 : e.pre / s, holdPost: s <= 0 ? 0 : e.post / s };
}, qd = (t) => (n) => n0(yt((e) => {
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
        target: wr(
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
    return v("Just", { startT: t.startT, endT: t.endT, target: wr("FillWindow", t.event.id, t.event.kind._1.node, t.event.kind._1.labels) });
  f();
}, Xd = (t) => (n) => (e) => (r) => {
  const o = jt((i) => Ms(i.path)(n) && (Ke(i.endT - e) < 1e-4 || Ke(i.startT - r) < 1e-4))(t.segments);
  if (o.tag === "Just")
    return v("Just", o._1);
  if (o.tag === "Nothing")
    return jt((i) => Ms(i.path)(n))(t.segments);
  f();
}, Vd = (t) => (n) => (e) => yt((r) => {
  const o = yt((i) => vo(i)(t.nodes))(Lt(
    On.foldr,
    (() => {
      if (r.scene.tag === "Structural")
        return Cn(
          C.compare,
          Sn,
          (() => {
            const i = lo(r.scene._1.from)(e);
            if (i.tag === "Nothing")
              return A;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })(),
          (() => {
            const i = lo(r.scene._1.to)(e);
            if (i.tag === "Nothing")
              return A;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })()
        );
      if (r.scene.tag === "DataFlow") {
        const i = lo(r.scene._1.keyframe)(e);
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
        const i = x((s) => (u) => ({ minX: $i(s.minX)(u.x), minY: $i(s.minY)(u.y), maxX: xe(s.maxX)(u.x + u.w), maxY: xe(s.maxY)(u.y + u.h) }))(0 < o.length ? { minX: o[0].x, minY: o[0].y, maxX: o[0].x + o[0].w, maxY: o[0].y + o[0].h } : { minX: 0, minY: 0, maxX: 0, maxY: 0 })(bt(1, o.length, o));
        return { x: i.minX, y: i.minY, w: i.maxX - i.minX, h: i.maxY - i.minY };
      })(),
      priority: 0,
      pathFollow: J
    }
  );
}), Ud = (t) => (n) => (e) => {
  const r = Do(e)(t);
  if (r.tag === "Nothing")
    return Dc;
  if (r.tag === "Just") {
    const o = Hc(r._1.target)(n);
    return Hc(r._1.source)(n) ? o ? jf : Id : Dc;
  }
  f();
}, Kd = { pre: 0, post: 0 }, Md = (t) => (n) => (e) => (r) => (o) => {
  const i = e0(o.event.id)(e), s = (() => {
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
      const a = o.event.when._1, g = jt((_) => _.event.id === a)(r);
      if (g.tag === "Nothing")
        return 0;
      if (g.tag === "Just")
        return g._1.endT;
      f();
    }
    if (o.event.when.tag === "With") {
      const a = o.event.when._1, g = jt((_) => _.event.id === a)(r);
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
  return Dt(r)({ startT: u, endT: u + c.duration, event: o.event, holdPre: c.holdPre, holdPost: c.holdPost });
}, o0 = (t) => (n) => (e) => x(Md(t)(n)(qd(t)(e)))([])(Ft((r) => (o) => ({ event: o }))(e)), jd = (t) => (n) => {
  const e = vo(n)(t.interiors);
  if (e.tag === "Nothing")
    return t;
  if (e.tag === "Just")
    return e._1;
  f();
}, Zd = (t) => (n) => ({ ...n, fromCam: Us(t)(n.fromCam), toCam: Us(t)(n.toCam) }), th = (t) => {
  if (t.when.tag === "First")
    return [];
  if (t.when.tag === "At")
    return [];
  if (t.when.tag === "After")
    return [t.when._1];
  if (t.when.tag === "With")
    return [t.when._1];
  f();
}, Oc = { id: "", nodes: A, edges: A }, nh = (t) => (n) => z1((() => {
  const e = lo(n.from)(t);
  if (e.tag === "Nothing")
    return Oc;
  if (e.tag === "Just")
    return e._1;
  f();
})())((() => {
  const e = lo(n.to)(t);
  if (e.tag === "Nothing")
    return Oc;
  if (e.tag === "Just")
    return e._1;
  f();
})()), eh = (t) => (n) => {
  const e = vo(n)(t.interiors);
  if (e.tag === "Nothing")
    return { layout: t.layout, interiors: A };
  if (e.tag === "Just")
    return e._1;
  f();
}, vs = (t) => (n) => (e) => (r) => {
  const o = Do(r)(e.edges);
  if (o.tag === "Just")
    return t <= 0 ? n : xe(n)(Wo(o._1) / t);
  if (o.tag === "Nothing")
    return n;
  f();
}, i0 = (t) => (n) => (e) => (r) => (o) => {
  const i = t.plop, s = nh(e)(o), u = z((l) => ({
    startT: 0,
    endT: 0 + vs(t.edgeSpeed)(t.minEdgeDuration)(n)(l),
    target: wr("EdgeWindow", l, Ks("Extend", Zu))
  }))(xr(s.entering.edges)), c = z((l) => ({ startT: 0, endT: i, target: wr("NodeWindow", l, r0) }))(xr(s.entering.nodes)), a = x(xe)(0)(z((l) => vs(t.edgeSpeed)(t.minEdgeDuration)(n)(l))(xr(s.leaving.edges))), g = (l) => qn(
    (h) => {
      const $ = Do(h)(r);
      if ($.tag === "Just")
        return $._1.source === l || $._1.target === l;
      if ($.tag === "Nothing")
        return !1;
      f();
    },
    xr(s.leaving.edges)
  ) ? a : 0, _ = z((l) => ({ startT: g(l), endT: g(l) + t.plop, target: wr("NodeWindow", l, Dd) }))(xr(s.leaving.nodes)), d = z((l) => ({
    startT: 0,
    endT: vs(t.edgeSpeed)(t.minEdgeDuration)(n)(l),
    target: wr("EdgeWindow", l, Ks("Retract", Ud(r)(s.leaving.nodes)(l)))
  }))(xr(s.leaving.edges));
  return {
    duration: (() => {
      const l = kt(ft.compare)([
        ...z(($) => $.endT)(d),
        ...z(($) => $.endT)(_),
        ...z(($) => $.endT)(c),
        ...z(($) => $.endT)(u)
      ]), h = l.length - 1 | 0;
      return h >= 0 && h < l.length ? l[h] + t.gap : t.gap;
    })(),
    windows: [...d, ..._, ...c, ...u]
  };
}, rh = (t) => (n) => (e) => (r) => (o) => (i) => z((() => {
  const s = o.startT;
  return (u) => ({ ...u, startT: u.startT + s, endT: u.endT + s });
})())(i0(t)(n)(e)(r)(i).windows), oh = (t) => yt((n) => Lt(po, n).length > 1 ? v(
  "Just",
  (() => {
    const e = Rt(
      (r) => J,
      (r) => (o) => v("Just", { head: r, tail: o }),
      Lt(po, n)
    );
    if (e.tag === "Just")
      return e._1.head;
    if (e.tag === "Nothing")
      return "";
    f();
  })()
) : J)(m_(Bo)(kt(C.compare)(t))), ih = (t) => {
  const n = z((r) => r.id)(t), e = Rd(n);
  return [
    ...z(Qd)(oh(n)),
    ...z(Wd)(lt((r) => !js(r)(e), Jt(t)(th)))
  ];
}, sh = (t) => (n) => (e) => {
  const r = xe(t.minZoom)(t.tokenZoomFloor);
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
              bbox: jr(n)(e)(o.target._2),
              priority: 1,
              pathFollow: J
            };
          const s = Do(o.target._2)(n.edges);
          if (s.tag === "Just") {
            const u = vo(o.target._4)(n.nodes);
            if (u.tag === "Just") {
              const c = vo(o.target._5)(n.nodes);
              if (c.tag === "Just") {
                const a = c._1;
                return {
                  startT: o.startT,
                  endT: o.endT,
                  bbox: jr(n)(e)(o.target._2),
                  priority: 1,
                  pathFollow: v(
                    "Just",
                    {
                      samples: (() => {
                        const g = o.startT + i.pre * (o.endT - o.startT), _ = xe(1e-4)(o.endT - i.post * (o.endT - o.startT) - g), d = o.endT - o.startT;
                        return z((l) => {
                          const h = g + nt(l) / nt(32) * _;
                          return {
                            t: h,
                            pos: F1(s._1)({ x: u._1.x + u._1.w / 2, y: u._1.y + u._1.h / 2 })({
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
                  bbox: jr(n)(e)(o.target._2),
                  priority: 1,
                  pathFollow: J
                };
              f();
            }
            if (u.tag === "Nothing")
              return {
                startT: o.startT,
                endT: o.endT,
                bbox: jr(n)(e)(o.target._2),
                priority: 1,
                pathFollow: J
              };
            f();
          }
          if (s.tag === "Nothing")
            return {
              startT: o.startT,
              endT: o.endT,
              bbox: jr(n)(e)(o.target._2),
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
          bbox: qf(n)(e)(Ot(
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
  ...Vd(o.layout)(e)(n)(lt((i) => i.startT >= o.startT && i.endT <= o.endT, r.spans)),
  ...sh(t)(o.layout)(e)(o.windows)
]), ch = (t) => {
  const n = n0(z((r) => b(
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
    if (js(i)(o))
      return [ar("ScheduleCycle", [...Lt(On.foldr, o), i])];
    if (js(i)(r))
      return [];
    const s = e0(i)(n);
    if (s.tag === "Nothing")
      return [];
    if (s.tag === "Just")
      return Jt(s._1)(e(U(C)(i)()(r))(U(C)(i)()(o)));
    f();
  };
  return Jt(t)((r) => e(A)(A)(r.id));
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
  tokenEasing: hr,
  diveDur: 1.2,
  retreatDur: 1.2
}, fh = (t) => (n) => (e) => (r) => z((() => {
  const o = e.startT;
  return (i) => ({ ...i, startT: i.startT + o, endT: i.endT + o });
})())(yt(Yd)(o0(t)(n)(r.events))), gh = (t) => (n) => (e) => (r) => (o) => {
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
  const r = o0(t)(n)(e.events);
  return r.length === 0 ? t.gap : x(xe)(0)(z((o) => o.endT)(r)) + t.gap;
}, _h = (t) => (n) => (e) => (r) => (o) => {
  if (o.tag === "Structural")
    return i0(t)(n)(e)(r)(o._1).duration;
  if (o.tag === "DataFlow")
    return lh(t)(n)(o._1);
  if (o.tag === "EnterNode" || o.tag === "ExitNode")
    return 0;
  f();
}, s0 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = B1(n)(r), u = e.layout, c = Of(z(($) => b($.id, $))(o.keyframes)), a = 0 < o.keyframes.length ? v("Just", o.keyframes[0]) : J, g = (() => {
    if (a.tag === "Just")
      return a._1.id;
    if (a.tag === "Nothing")
      return "";
    f();
  })(), _ = td(o), d = ($) => ({
    segments: $.runSpans.length === 0 ? $.segments : Dt($.segments)({
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
  }), l = x(($) => (p) => {
    if (p.tag === "EnterNode") {
      const T = d($), w = $.t + t.diveDur, k = Dt(r)(p._1), L = s0(t)(n)(eh(e)(p._1))(k)(jd(o)(p._1))(w), G = L.endT + t.retreatDur;
      return {
        ...$,
        t: G,
        runStart: G,
        runSpans: [],
        runWindows: [],
        segments: [...T.segments, ...L.segments],
        spans: [...T.spans, ...L.spans],
        windows: [...T.windows, ...L.windows],
        dives: [
          ...T.dives,
          { startT: $.t, endT: w, node: p._1, parentPath: r, childPath: k, direction: Hd },
          ...L.dives,
          { startT: L.endT, endT: G, node: p._1, parentPath: r, childPath: k, direction: Od }
        ]
      };
    }
    if (p.tag === "ExitNode")
      return $;
    const m = $.t + _h(t)(u)(c)(_)(p), y = { startT: $.t, endT: m, scene: p }, N = gh(t)(u)(c)(_)(y);
    return {
      ...$,
      t: m,
      runSpans: Dt($.runSpans)(y),
      runWindows: [...$.runWindows, ...N],
      spans: Dt($.spans)(y),
      windows: [...$.windows, ...N]
    };
  })({ t: i, runStart: i, runSpans: [], runWindows: [], segments: [], spans: [], windows: [], dives: [] })(o.scenes), h = d(l);
  return {
    endT: l.t,
    spans: h.spans,
    windows: kt(($) => (p) => ft.compare($.startT)(p.startT))(h.windows),
    segments: h.segments,
    dives: h.dives
  };
}, dh = (t) => (n) => (e) => e.endT <= t || e.startT >= n ? J : v("Just", { ...e, startT: xe(t)(e.startT), endT: $i(n)(e.endT) }), tc = (t) => (n) => (e) => {
  const r = Mn(e.layout), o = {
    x: r.x * e.placement.scale + e.placement.tx,
    y: r.y * e.placement.scale + e.placement.ty,
    w: r.w * e.placement.scale,
    h: r.h * e.placement.scale
  };
  return {
    center: { x: o.x + o.w / 2, y: o.y + o.h / 2 },
    zoom: $i(Mu(n)(o)(t.padding * e.placement.scale))(40 / (11 * e.placement.scale))
  };
}, hh = (t) => (n) => (e) => e.placement.scale === 1 && e.placement.tx === 0 && e.placement.ty === 0 ? Us(e.placement)(ao(t)(e.layout)(Mn(e.layout))(0)) : tc(t)(n)(e), ph = (t) => (n) => (e) => (r) => yt((o) => {
  const i = Xd(r)(o.parentPath)(o.startT)(o.endT);
  if (i.tag === "Just") {
    const s = o.childPath, u = jt((c) => Ms(c.path)(s))(r.segments);
    if (u.tag === "Just") {
      const c = hh(t)(n)(i._1), a = tc(t)(n)(u._1);
      if (o.direction === "DiveIn")
        return v(
          "Just",
          { startT: o.startT, endT: o.endT, fromCam: c, toCam: a, easing: hr, interp: Bc }
        );
      if (o.direction === "DiveOut")
        return v(
          "Just",
          { startT: o.startT, endT: o.endT, fromCam: a, toCam: c, easing: hr, interp: Bc }
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
      Ts(n._1.from)(t) ? J : v("Just", ar("UnknownKeyframe", n._1.from)),
      Ts(n._1.to)(t) ? J : v("Just", ar("UnknownKeyframe", n._1.to))
    ]);
  if (n.tag === "DataFlow")
    return [
      ...yt((e) => e)([Ts(n._1.keyframe)(t) ? J : v("Just", ar("UnknownKeyframe", n._1.keyframe))]),
      ...ih(n._1.events),
      ...ch(n._1.events)
    ];
  if (n.tag === "EnterNode")
    return [];
  if (n.tag === "ExitNode")
    return [];
  f();
}, mh = (t) => (n) => {
  const e = Jt(n)($h(t));
  return e.length === 0 ? Et("Right", void 0) : Et("Left", e);
}, yh = (t) => (n) => (e) => (r) => kt((o) => (i) => ft.compare(o.startT)(i.startT))(Jt(r.segments)((o) => o.placement.scale === 1 && o.placement.tx === 0 && o.placement.ty === 0 ? yt(dh(o.startT)(o.endT))(z(Zd(o.placement))(uh(t)(e)(o.edgeEndpoints)(r)(o))) : [
  (() => {
    const i = tc(t)(n)(o);
    return { startT: o.startT, endT: o.endT, fromCam: i, toCam: i, easing: hr, interp: co };
  })()
])), Nh = (t) => (n) => (e) => (r) => {
  if (0 < e.keyframes.length) {
    const o = e.keyframes[0], i = Of(z((u) => b(u.id, u))(e.keyframes)), s = mh(i)(e.scenes);
    return (() => {
      if (s.tag === "Left") {
        const u = s._1;
        return (c) => Et("Left", u);
      }
      if (s.tag === "Right") {
        const u = s._1;
        return (c) => c(u);
      }
      f();
    })()(() => {
      const u = s0(n)(r)(r)([])(e)(0);
      return Et(
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
  return Et("Left", [Bd]);
}, Zs = (t) => (n) => Math.imul(t, n), Kr = (t) => {
  const n = t + 1831565813 | 0, e = Zs(n ^ n >>> 15)(n | 1), r = e ^ (e + Zs(e ^ e >>> 7)(e | 61) | 0), o = r ^ r >>> 14;
  return { prng: o, value: o < 0 ? (nt(o) + 4294967296) / 4294967296 : nt(o) / 4294967296 };
}, fn = (t) => (n) => (e) => {
  const r = Kr(e);
  return { prng: r.prng, value: t + r.value * (n - t) };
}, tu = (t) => (n) => x((e) => (r) => Zs(e ^ r)(-2048144789))(n)(z(Re)(Ze(t))), nc = (t) => t, oe = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, mi = /* @__PURE__ */ Eu(Bo), xh = /* @__PURE__ */ (() => {
  const t = te.unfoldr(ke);
  return (n) => t(Kn("IterNode", n, we));
})(), u0 = /* @__PURE__ */ nn(C)(Ht), c0 = (t) => (e) => {
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
}, zc = Ht.foldMap(h1(C)), qc = (t) => (n) => (e) => {
  const r = ft.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ft.compare(n)(o);
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
}, Hr = (t) => (n) => {
  const e = ft.compare(t)(n);
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
}, kh = /* @__PURE__ */ nn(C)(Ht), bh = /* @__PURE__ */ nc("Backdrop"), Yc = /* @__PURE__ */ nc("FlyThrough"), yi = /* @__PURE__ */ nc("Active"), Xc = (t) => (n) => (e) => {
  const r = (t + n) / 2, o = e - r, i = o < 0 ? -1 : 1, s = (n - t) / 2, u = s * 0.15, c = s - u, a = o < 0 ? -o : o;
  return n <= t ? (t + n) / 2 : a <= c ? e : r + i * (s - u * Yi(-(a - c) / u));
}, Lh = (t) => (n) => (e) => (r) => {
  const o = Mn(t), i = o.w / oe(1e-4)(n.zoom) / 2, s = o.h / oe(1e-4)(n.zoom) / 2, u = e.y - n.center.y, c = e.x - n.center.x;
  return {
    ...n,
    center: {
      x: i <= 1e-4 ? n.center.x + 0 * r * 0.35 : c < 0 ? n.center.x + c / (1 + -c / i) * r * 0.35 : n.center.x + c / (1 + c / i) * r * 0.35,
      y: s <= 1e-4 ? n.center.y + 0 * r * 0.35 : u < 0 ? n.center.y + u / (1 + -u / s) * r * 0.35 : n.center.y + u / (1 + u / s) * r * 0.35
    }
  };
}, nu = (t) => (n) => (e) => {
  const r = jt((o) => mi(o.path)(n) && e >= o.startT && e < o.endT)(t.segments);
  if (r.tag === "Just")
    return v("Just", r._1);
  if (r.tag === "Nothing")
    return jt((o) => mi(o.path)(n))(t.segments);
  f();
}, Eh = (t) => ({
  startT: 0,
  endT: t.totalDuration,
  path: [],
  layout: t.layout,
  placement: qu,
  windows: t.windows,
  spans: t.spans,
  keyframes: t.keyframes,
  initialKeyframe: t.initialKeyframe,
  edgeEndpoints: A
}), Sh = (t) => z((n) => n < 1 ? [] : bt(0, n, t))(It(0, t.length - 1 | 0)), Ch = (t) => x((n) => (e) => (n * 31 | 0) + Re(e) | 0)(7)(Ze(t)), a0 = (t) => (n) => (e) => ({
  ...e,
  state: {
    ...e.state,
    nodes: u0(z((r) => b(r._1, t(r._1)(r._2)))(xh(e.state.nodes))),
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
}), ws = (t) => (n) => {
  const e = c0(n)(t.keyframes);
  if (e.tag === "Nothing")
    return A;
  if (e.tag === "Just")
    return e._1.nodes;
  f();
}, ks = (t) => (n) => {
  const e = c0(n)(t.keyframes);
  if (e.tag === "Nothing")
    return A;
  if (e.tag === "Just")
    return e._1.edges;
  f();
}, ec = (t) => (n) => {
  if (n < t.startT)
    return er("AtKeyframe", t.initialKeyframe);
  const e = jt((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return er("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return er("AtKeyframe", e._1.scene._1.keyframe);
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode")
      return er("AtKeyframe", t.initialKeyframe);
    f();
  }
  if (e.tag === "Nothing") {
    const r = t.spans.length - 1 | 0;
    return r >= 0 && r < t.spans.length ? er(
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
    ) : er("AtKeyframe", t.initialKeyframe);
  }
  f();
}, Ph = /* @__PURE__ */ x((t) => (n) => {
  const e = zi(t);
  return e.tag === "Just" && n.startT <= e._1.last.endT + 1e-6 ? Dt(e._1.init)({ ...e._1.last, endT: oe(e._1.last.endT)(n.endT), windows: Dt(e._1.last.windows)(n) }) : Dt(t)({ endT: n.endT, windows: [n] });
})([]), Gh = (t) => (n) => (e) => zc((r) => zc((o) => o.target.tag === "FillWindow" ? o.startT <= e ? Ot("Node", 1, 1, o.target._2, void 0, A, A) : A : o.target.tag === "TokenWindow" && o.startT + (o.endT - o.startT) * 0.25 <= e ? Ot("Node", 1, 1, o.target._4, void 0, A, A) : A)(r.windows))(lt(
  (r) => e <= r.endT + t,
  Ph(kt((r) => (o) => ft.compare(r.startT)(o.startT))(lt(
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
  const e = ec(t)(n);
  if (e.tag === "AtKeyframe")
    return mn(3)(e._1) === "kf-" ? "" : e._1;
  if (e.tag === "InTransition")
    return mn(3)(e._2) === "kf-" ? "" : e._2;
  f();
}, f0 = (t) => (n) => (e) => jt((r) => e(r) && n >= r.startT && n < r.endT)(t), Qh = (t) => {
  const n = qc(0)(1)(t / 0.2), e = qc(0)(1)((1 - t) / 0.2);
  return n * n * (3 - 2 * n) * e * e * (3 - 2 * e);
}, Wh = (t) => (n) => {
  if (n.tag === "Travelling") {
    const e = Jh(n._1.edge)(t.edges);
    if (e.tag === "Just") {
      const r = Br(e._1)(n._1.progress);
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
    placement: qu,
    windows: [],
    spans: [],
    keyframes: A,
    initialKeyframe: "",
    edgeEndpoints: A
  },
  state: Dh,
  bgAlpha: 1,
  role: yi
}, Ni = (t) => {
  const n = t.levels.length - 1 | 0;
  return n >= 0 && n < t.levels.length ? t.levels[n] : Oh;
}, zh = (t) => (n) => {
  const e = ec(t)(n);
  if (e.tag === "AtKeyframe")
    return ws(t)(e._1);
  if (e.tag === "InTransition")
    return Cn(C.compare, Sn, ws(t)(e._1), ws(t)(e._2));
  f();
}, qh = (t) => (n) => {
  const e = ec(t)(n);
  if (e.tag === "AtKeyframe")
    return ks(t)(e._1);
  if (e.tag === "InTransition")
    return Cn(C.compare, Sn, ks(t)(e._1), ks(t)(e._2));
  f();
}, Yh = (t) => (n) => {
  const e = t.w / oe(1e-4)(n.zoom), r = t.h / oe(1e-4)(n.zoom);
  return {
    ...n,
    center: {
      x: e >= t.w ? t.x + t.w / 2 : Xc(t.x + e / 2)(t.x + t.w - e / 2)(n.center.x),
      y: r >= t.h ? t.y + t.h / 2 : Xc(t.y + r / 2)(t.y + t.h - r / 2)(n.center.y)
    }
  };
}, Xh = (t) => Yh((() => {
  const n = Mn(t.layout), e = n.x * t.placement.scale + t.placement.tx, r = n.y * t.placement.scale + t.placement.ty;
  return { x: e, y: r, w: (n.x + n.w) * t.placement.scale + t.placement.tx - e, h: (n.y + n.h) * t.placement.scale + t.placement.ty - r };
})()), Vh = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : oe(0)(Hr(1)((n - t.startT) / e));
}, g0 = (t) => (n) => (e) => oe(0)(Hr(1)((e - fn(0)(0.3)(t + Ch(n) | 0).value) / oe(1e-4)(0.7))), Vc = (t) => (n) => (e) => a0((r) => (o) => o.tag === "Hidden" ? fo : Dr("PloppingOut", r === n ? oe(0)(Hr(1)((e - 0.45) / oe(1e-4)(0.55))) : g0(t)(r)(e)))((r) => r.tag === "Retracted" ? go : Wr("Retracting", jf, e)), Uc = (t) => (n) => a0((e) => (r) => r.tag === "Hidden" ? fo : Dr("PloppingIn", g0(t)(e)(n)))((e) => e.tag === "Retracted" ? go : Wr("Extending", Zu, n)), xi = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : oe(0)(Hr(1)((n - t.startT) / e));
}, Uh = (t) => (n) => (e) => (r) => (o) => {
  const i = f0(n)(e)((s) => s.target.tag === "EdgeWindow" && s.target._1 === o);
  if (i.tag === "Just") {
    const s = Uu(t.timing.edgeEasing)(xi(i._1)(e)), u = i._1.target.tag === "EdgeWindow" ? i._1.target._2 : Ks("Extend", Zu);
    if (u.tag === "Retract")
      return Wr("Retracting", u._1, s);
    if (u.tag === "Extend")
      return Wr("Extending", u._1, s);
    f();
  }
  if (i.tag === "Nothing")
    return Rh(n)(e)(o) || Ih(n)(e)(o) ? go : Th(o)(r) ? Fd : go;
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
    return Lt(On.foldr, o(n.layout.edges));
  })()));
}, Mh = (t) => (n) => (e) => (r) => {
  const o = f0(t)(n)((i) => i.target.tag === "NodeWindow" && i.target._1 === r);
  if (o.tag === "Just") {
    const i = xi(o._1)(n), s = o._1.target.tag === "NodeWindow" ? o._1.target._2 : r0;
    if (s === "PlopIn")
      return Dr("PloppingIn", i);
    if (s === "PlopOut")
      return Dr("PloppingOut", i);
    f();
  }
  if (o.tag === "Nothing")
    return Fh(t)(n)(r) || Ah(t)(n)(r) ? fo : wh(r)(e) ? Ad : fo;
  f();
}, jh = (t) => (n) => (e) => {
  const r = zh(n)(e);
  return u0(z((o) => b(o, Mh(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return A;
      if (i.tag === "Node")
        return Ot("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return Lt(On.foldr, o(n.layout.nodes));
  })()));
}, Zh = (t) => (n) => (e) => n.target.tag === "TokenWindow" ? b(
  n.target._1,
  e < n.startT ? Js : e >= n.endT ? Wc : pi(
    "Travelling",
    {
      edge: n.target._2,
      direction: n.target._3,
      progress: Uu(t.timing.tokenEasing)(xi(n)(e)),
      labels: n.target._6,
      source: n.target._4,
      target: n.target._5,
      holdPre: n.target._7,
      holdPost: n.target._8
    }
  )
) : n.target.tag === "FillWindow" ? b(
  n.target._1,
  e < n.startT ? Js : e >= n.endT ? Wc : pi("Filling", { node: n.target._2, progress: xi(n)(e), labels: n.target._3 })
) : b("", Js), tp = (t) => (n) => (e) => kh(z((r) => Zh(t)(r)(e))(lt(
  (r) => r.target.tag === "TokenWindow" || r.target.tag === "FillWindow",
  n
))), kr = (t) => (n) => (e) => ({
  nodes: jh()(n)(e),
  edges: Kh(t)(n)(e),
  tokens: tp(t)(n.windows)(e),
  camera: Vf(t.cameraConfig)(n.layout)(t.cameraSpans)(e),
  frameTitle: Bh(n)(e),
  visited: Gh(t.timing.hatchHold)(n.windows)(e),
  nodeFadeAlpha: A,
  nodeInvert: A
}), np = (t) => (n) => (e) => xf(
  J,
  hf,
  (r) => r.direction === "DiveIn" && mi(r.parentPath)(n.path) && e >= r.startT - 0.7 && e < r.startT ? v("Just", { node: r.node, phase: (e - (r.startT - 0.7)) / 0.7 }) : J,
  t.dives
), ep = (t) => (n) => (e) => (r) => {
  const o = np(t)(n)(e);
  if (o.tag === "Just") {
    const i = Un(3.141592653589793 * o._1.phase * 3);
    return {
      ...r,
      state: { ...r.state, nodeInvert: Ot("Node", 1, 1, o._1.node, 1 * i * i, A, A) }
    };
  }
  if (o.tag === "Nothing")
    return r;
  f();
}, l0 = (t) => (n) => yt((e) => {
  const r = jt((o) => o.direction === "DiveIn" && mi(o.childPath)((() => {
    const i = e.length + 1 | 0;
    return i < 1 ? [] : bt(0, i, n);
  })()))(t.dives);
  if (r.tag === "Just") {
    const o = nu(t)(e)(r._1.startT - 1e-4);
    if (o.tag === "Just")
      return v(
        "Just",
        {
          bgAlpha: 1,
          role: bh,
          segment: o._1,
          state: {
            ...kr(t)(o._1)(r._1.startT - 1e-4),
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
})(Sh(n)), _0 = (t) => (n) => {
  const e = lt((o) => n >= o.startT && n < o.endT, t.segments), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r] : Eh(t);
}, rp = (t) => (n) => (e) => {
  const r = Vh(e)(n), o = nu(t)(e.parentPath)((() => {
    if (e.direction === "DiveIn")
      return e.startT - 1e-4;
    if (e.direction === "DiveOut")
      return e.endT - 1e-4;
    f();
  })()), i = nu(t)(e.childPath)((() => {
    if (e.direction === "DiveIn")
      return e.endT;
    if (e.direction === "DiveOut")
      return e.startT - 1e-4;
    f();
  })()), s = oe(0)(Hr(1)(r / 0.6)), u = oe(0)(Hr(1)((r - 0.4) / 0.6)), c = (() => {
    if (e.direction === "DiveIn")
      return Vc(t.seed)(e.node)(s);
    if (e.direction === "DiveOut")
      return Uc(t.seed)(u);
    f();
  })(), a = (() => {
    if (e.direction === "DiveIn")
      return Uc(t.seed)(u);
    if (e.direction === "DiveOut")
      return Vc(t.seed)(e.node)(s);
    f();
  })();
  return [
    ...l0(t)(e.parentPath),
    ...(() => {
      if (o.tag === "Just") {
        if (i.tag === "Just")
          return [
            c({
              segment: o._1,
              state: kr(t)(o._1)((() => {
                if (e.direction === "DiveIn")
                  return e.startT - 1e-4;
                if (e.direction === "DiveOut")
                  return e.endT - 1e-4;
                f();
              })()),
              bgAlpha: 1,
              role: Yc
            }),
            a({
              segment: i._1,
              state: kr(t)(i._1)((() => {
                if (e.direction === "DiveIn")
                  return e.endT;
                if (e.direction === "DiveOut")
                  return e.startT - 1e-4;
                f();
              })()),
              bgAlpha: 1,
              role: yi
            })
          ];
        if (i.tag === "Nothing")
          return [
            c({
              segment: o._1,
              state: kr(t)(o._1)((() => {
                if (e.direction === "DiveIn")
                  return e.startT - 1e-4;
                if (e.direction === "DiveOut")
                  return e.endT - 1e-4;
                f();
              })()),
              bgAlpha: 1,
              role: Yc
            })
          ];
        f();
      }
      if (o.tag === "Nothing")
        return [
          (() => {
            const g = _0(t)(n);
            return { segment: g, state: kr(t)(g)(n), bgAlpha: 1, role: yi };
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
    return Lt(Xt.foldr, r(n.tokens, Yt));
  })());
  return 0 < e.length ? v("Just", e[0]) : J;
}, ip = (t) => (n) => {
  const e = op(t)(n);
  if (e.tag === "Nothing")
    return n.camera;
  if (e.tag === "Just")
    return Lh(t)(n.camera)(e._1.dot)(e._1.weight);
  f();
}, sp = (t) => (n) => t.placement.scale === 1 && t.placement.tx === 0 && t.placement.ty === 0 ? ip(t.layout)(n) : n.camera, up = (t) => (n) => jt((e) => n >= e.startT && n < e.endT)(t.dives), cp = (t) => (n) => {
  const e = _0(t)(n), r = kr(t)(e)(n), o = t.dives.length !== 0, i = Vf(t.cameraConfig)(t.layout)(t.cameraSpans)(n), s = Xh(e)(sp(e)({ ...r, camera: i })), u = ep(t)(e)(n)({ bgAlpha: 1, role: yi, segment: e, state: { ...r, camera: s } }), c = l0(t)(e.path), a = up(t)(n);
  if (a.tag === "Just")
    return { levels: rp(t)(n)(a._1), camera: i, rootLayout: t.layout, hasDives: o, diving: !0 };
  if (a.tag === "Nothing")
    return { levels: Dt(c)(u), camera: s, rootLayout: t.layout, hasDives: o, diving: !1 };
  f();
}, d0 = (t) => t, h0 = /* @__PURE__ */ d0("RunText"), ap = /* @__PURE__ */ d0("RunCode"), p0 = (t) => (n) => (e) => n.length === 0 ? e : Dt(e)({ style: t, text: mr(n) }), fp = (t) => ({
  style: (() => {
    if (t.style === "RunText")
      return ap;
    if (t.style === "RunCode")
      return h0;
    f();
  })(),
  buf: [],
  runs: p0(t.style)(t.buf)(t.runs)
}), gp = (t) => (n) => 0 < n.length ? { ...t, buf: Dt(t.buf)(n[0]) } : { ...t, buf: Dt(t.buf)("\\") }, lp = (t) => (n) => {
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
      e = { ...s, buf: Dt(s.buf)(c._1.head) }, r = c._1.tail;
      continue;
    }
    f();
  }
  return i;
}, $0 = (t) => {
  const n = lp({ style: h0, buf: [], runs: [] })(Ze(t));
  return p0(n.style)(n.buf)(n.runs);
};
let Uo = null;
function _p() {
  return Uo || (typeof document > "u" ? null : (Uo = document.createElement("canvas").getContext("2d"), Uo));
}
const Kc = /* @__PURE__ */ new Map(), dp = (t) => (n) => (e) => (r) => () => {
  const o = `${e} ${n}px ${t}|${r}`, i = Kc.get(o);
  if (i !== void 0) return i;
  const s = _p();
  if (!s)
    return r.length * n * 0.62;
  s.font = `${e} ${n}px ${t}`;
  const u = s.measureText(r).width;
  return Kc.set(o, u), u;
}, hp = $r.traverse(Oi), pp = /* @__PURE__ */ x(Rr)(0), Or = /* @__PURE__ */ (() => {
  const t = Oe(`\r
`)(" "), n = Oe(`
`)(" "), e = (() => {
    const r = Oe("\r")(" "), o = (() => {
      const i = Oe("	")(" ");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), m0 = (t) => (n) => {
  const e = hp((r) => {
    const o = (() => {
      if (r.style === "RunText")
        return t.text;
      if (r.style === "RunCode")
        return t.code;
      f();
    })();
    return dp(o.family)(o.size)(o.weight)(Or(r.text));
  })($0(Or(n)));
  return () => {
    const r = e();
    return pp(r);
  };
}, $p = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: "500" }, mp = { family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", size: 11, weight: "400" }, y0 = { text: $p, code: mp }, yp = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Tr = (t) => (n) => {
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
  const e = ft.compare(t)(n);
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
}, Mc = (t) => mr(Ln(ur((n) => n === " ")(Ln(ur((n) => n === " ")(Ze(t)).rest)).rest)), Tp = (t) => x((n) => (e) => e._1 > 0 && (e._2 === " " || e._2 === "-" || e._2 === "_" || e._2 === ".") ? v("Just", e._1) : n)(J)(Ft(Xe)(t)), eu = (t) => (n) => {
  if (t <= 0)
    return [n];
  if (Me(n) <= t)
    return [n];
  const e = Ze(n), r = t < 1 ? [] : bt(0, t, e), o = Tp(r);
  if (o.tag === "Just") {
    const i = Mc(Sc(!(o._1 >= 0 && o._1 < r.length) || r[o._1] === " " ? o._1 : o._1 + 1 | 0)(n)), s = Mc(mo(o._1 + 1 | 0)(n));
    return s === "" ? [i] : [i, ...eu(t)(s)];
  }
  if (o.tag === "Nothing") {
    const i = Sc(t)(n), s = mo(t)(n);
    return s === "" ? [i] : [i, ...eu(t)(s)];
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
  ))(n.nodes), r = Tr(1)(Ce(
    (Np(t.maxLineWidth)(x((i) => (s) => Tr(i)(Me(s._1)))(0)(e)) + 2 | 0) + t.cellW | 0,
    t.cellW
  )), o = (r * t.cellW | 0) - 1 | 0;
  return {
    ...n,
    nodes: z((i) => {
      if (!(i._2.size._1 === 1 && i._2.size._2 === 1))
        return i._2;
      const s = Jt(ts(`
`)(i._1))(eu(o)), u = x((a) => (g) => Tr(a)(Me(g)))(0)(s), c = i._2.shape === "Cylinder" ? Tr(1)(Ce((u + 2 | 0) + t.cellW | 0, t.cellW)) : r;
      return {
        ...i._2,
        size: b(
          nt(u > o ? Ce((u + 2 | 0) + t.cellW | 0, t.cellW) : c),
          nt(Tr(1)(Ce(s.length + t.cellH | 0, t.cellH)) + (i._2.shape === "Cylinder" ? 1 : 0) | 0)
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
          xp(r.size._1)(nt(Tr(1)($n(qi(r.shape === "Cylinder" ? (o._1 + 0) / t : (o._1 + 32) / t))))),
          r.size._2
        )
      };
    f();
  })(e.nodes)
}), bp = (t) => (n) => {
  const e = ft.compare(t)(n);
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
                const T = t[a].position, w = t[a].size, k = t[y].position, L = t[y].size;
                return T._1 < k._1 + L._1 && k._1 < T._1 + w._1 && T._2 < k._2 + L._2 && k._2 < T._2 + w._2;
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
}, jc = (t) => x((n) => (e) => n + E1(e.start)(e.end))(0)(t.segments), Ep = (t) => (n) => (e) => ({
  crossingCount: x((r) => (o) => r + o.jumps.length | 0)(0)(n),
  bendCount: x((r) => (o) => r + o.bends.length | 0)(0)(n),
  totalEdgeLength: x((r) => (o) => r + jc(o))(0)(n),
  maxEdgeLength: x((r) => (o) => bp(r)(jc(o)))(0)(n),
  nodeOverlapCount: Lp(t),
  constraintViolations: e,
  jumpCount: x((r) => (o) => r + o.jumps.length | 0)(0)(n)
}), rc = (t) => t, Kt = (t) => (e) => {
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
}, oc = /* @__PURE__ */ rc("LEFT"), Sp = /* @__PURE__ */ rc("RIGHT"), N0 = /* @__PURE__ */ rc("UNDEFINED"), Cp = {
  eq: (t) => (n) => t === "LEFT" ? n === "LEFT" : t === "RIGHT" ? n === "RIGHT" : t === "UP" ? n === "UP" : t === "DOWN" ? n === "DOWN" : t === "UNDEFINED" && n === "UNDEFINED"
}, Pp = {
  compare: (t) => (n) => {
    if (t === "LEFT")
      return n === "LEFT" ? Gn : yn;
    if (n === "LEFT")
      return Nn;
    if (t === "RIGHT")
      return n === "RIGHT" ? Gn : yn;
    if (n === "RIGHT")
      return Nn;
    if (t === "UP")
      return n === "UP" ? Gn : yn;
    if (n === "UP")
      return Nn;
    if (t === "DOWN")
      return n === "DOWN" ? Gn : yn;
    if (n === "DOWN")
      return Nn;
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
}, Ip = { x: 0, y: 0 }, jn = (t) => (n) => (e) => {
  const r = Kt(t)(e.cNodes);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cNodes: U(it)(t)(n(r._1))(e.cNodes) };
  f();
}, _o = (t) => (n) => (e) => {
  const r = Kt(t)(e.cGroups);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cGroups: U(it)(t)(n(r._1))(e.cGroups) };
  f();
}, Ap = (t) => x((n) => (e) => jn(e)((r) => ({ ...r, hitboxPreCompaction: r.hitbox }))(n))(t)(t.cNodeOrder), Fp = (t) => {
  const n = x((e) => (r) => {
    const o = Kt(r)(t.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return x((i) => (s) => vt(it)(rn)(s)([r])(i))(e)(o._1.constraints);
    f();
  })(A)(t.cNodeOrder);
  return x((e) => (r) => jn(r)((o) => ({
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
}, Rp = (t) => (n) => jn(t)((e) => ({ ...e, ignoreSpacing: { left: e.ignoreSpacing.left || n.left, right: e.ignoreSpacing.right || n.right, up: e.ignoreSpacing.up || n.up, down: e.ignoreSpacing.down || n.down } })), Bp = (t) => {
  const n = x((e) => (r) => _o(r)((o) => ({ ...o, outDegree: o.outDegreeReal }))(e))(t)(t.cGroupOrder);
  return x((e) => (r) => jn(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder);
}, ae = { left: !1, right: !1, up: !1, down: !1 }, Qp = { horizontalSpacing: (t) => (n) => 0, verticalSpacing: (t) => (n) => 0 }, ic = (t) => x((n) => (e) => {
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
    })(J)(r._1.cNodes), i = _o(e)((s) => ({ ...s, reference: o }))(n);
    if (o.tag === "Nothing")
      return i;
    if (o.tag === "Just") {
      const s = Kt(o._1)(i.cNodes);
      if (s.tag === "Nothing")
        return i;
      if (s.tag === "Just") {
        const u = s._1;
        return x((c) => (a) => jn(a)((g) => ({ ...g, cGroupOffset: { x: g.hitbox.x - u.hitbox.x, y: g.hitbox.y - u.hitbox.y } }))(c))(i)(r._1.cNodes);
      }
    }
  }
  f();
})(t)(t.cGroupOrder), Vn = (t) => ic({
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
}), de = (t) => ic({
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
}), x0 = (t) => {
  const n = x((e) => (r) => _o(r)((o) => ({ ...o, outDegree: 0, outDegreeReal: 0, incomingConstraints: [] }))(e))(t)(t.cGroupOrder);
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
            return c._1.cGroup.tag === "Just" && c._1.cGroup._1 !== i ? _o(c._1.cGroup._1)((a) => ({ ...a, outDegree: a.outDegree + 1 | 0, outDegreeReal: a.outDegreeReal + 1 | 0 }))(_o(i)((a) => Hn(Ir)(u)(a.incomingConstraints) ? a : { ...a, incomingConstraints: [...a.incomingConstraints, u] })(s)) : s;
          f();
        })(e)(o._1.constraints);
      }
    }
    f();
  })(n)(n.cNodeOrder);
}, Ko = (t) => {
  const n = Fp(t.cGraph);
  return { ...t, cGraph: x0(x((e) => (r) => jn(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder)) };
}, Wp = (t) => (n) => x((e) => (r) => {
  if (t === "LEFT" || t === "UP") {
    const i = r._2;
    return jn(r._1)((s) => ({ ...s, constraints: [...s.constraints, i] }))(e);
  }
  const o = r._1;
  return jn(r._2)((i) => ({ ...i, constraints: [...i.constraints, o] }))(e);
})(n)(t === "LEFT" || t === "RIGHT" ? n.predefinedHorizontalConstraints : n.predefinedVerticalConstraints), ce = (t) => {
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
    cGraph: x0((() => {
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
    return n === "LEFT" ? ce(r) : n === "RIGHT" ? ce({ ...r, cGraph: Vn(r.cGraph) }) : n === "UP" ? ce({ ...r, cGraph: de(r.cGraph) }) : n === "DOWN" ? ce({ ...r, cGraph: Vn(de(r.cGraph)) }) : r;
  if (t === "LEFT")
    return n === "RIGHT" ? Ko({ ...r, cGraph: Vn(r.cGraph) }) : n === "UP" ? ce({ ...r, cGraph: de(r.cGraph) }) : n === "DOWN" ? ce({ ...r, cGraph: Vn(de(r.cGraph)) }) : r;
  if (t === "RIGHT")
    return n === "LEFT" ? Ko({ ...r, cGraph: Vn(r.cGraph) }) : n === "UP" ? ce({ ...r, cGraph: de(Vn(r.cGraph)) }) : n === "DOWN" ? ce({ ...r, cGraph: Vn(de(Vn(r.cGraph))) }) : r;
  if (t === "UP")
    return n === "LEFT" ? ce({ ...r, cGraph: de(r.cGraph) }) : n === "RIGHT" ? ce({ ...r, cGraph: Vn(de(r.cGraph)) }) : n === "DOWN" ? Ko({ ...r, cGraph: Vn(r.cGraph) }) : r;
  if (t === "DOWN")
    return n === "LEFT" ? ce({ ...r, cGraph: de(Vn(r.cGraph)) }) : n === "RIGHT" ? ce({ ...r, cGraph: Vn(de(Vn(r.cGraph))) }) : n === "UP" ? Ko({ ...r, cGraph: Vn(r.cGraph) }) : r;
  f();
}, J0 = (t) => (n) => n.finished || !Gp(t)(n.cGraph.supportedDirections) || (t === "LEFT" ? n.direction === "LEFT" : t === "RIGHT" ? n.direction === "RIGHT" : t === "UP" ? n.direction === "UP" : t === "DOWN" ? n.direction === "DOWN" : t === "UNDEFINED" && n.direction === "UNDEFINED") ? n : Dp(n.direction)(t)(n), Hp = (t) => {
  if (t.finished)
    return t;
  const n = t.direction === "UNDEFINED" ? J0(oc)(t) : t, e = { ...n, cGraph: Bp(n.cGraph) };
  if (e.compactionAlgorithm.tag === "Nothing")
    return e;
  if (e.compactionAlgorithm.tag === "Just")
    return e.compactionAlgorithm._1(e);
  f();
}, T0 = (t) => (n) => (e) => {
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
      cNodes: Hn(Ir)(t)(o._1.cNodes) ? o._1.cNodes : [...o._1.cNodes, t],
      reference: (() => {
        if (o._1.reference.tag === "Nothing")
          return v("Just", t);
        if (o._1.reference.tag === "Just")
          return v("Just", o._1.reference._1);
        f();
      })()
    })(e.cGroups)
  } : e;
}, v0 = (t) => (n) => ({
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
      ignoreSpacing: ae
    })(n.cNodes),
    cNodeOrder: [...n.cNodeOrder, n.nextCNodeId],
    nextCNodeId: n.nextCNodeId + 1 | 0
  }
}), sc = (t) => (n) => {
  const e = n.nextCGroupId;
  return {
    id: e,
    graph: x((r) => (o) => T0(o)(e)(r))({
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
  return r.tag === "Just" && r._1.cGroup.tag === "Nothing" ? sc({ master: J, nodes: [e] })(n).graph : n;
})(t)(t.cNodeOrder), zp = (t) => ({
  cGraph: Ap(Op(ic(t))),
  direction: N0,
  compactionAlgorithm: J,
  constraintAlgorithm: J,
  spacingsHandler: Qp,
  lockFun: J,
  finished: !1
}), w0 = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, qp = (t) => (n) => {
  const e = ft.compare(t._1)(n._1);
  return e === "LT" ? yn : e === "GT" ? Nn : it.compare(t._2)(n._2);
}, Yp = /* @__PURE__ */ (() => {
  const t = te.unfoldr(ke);
  return (n) => t(Kn("IterNode", n, we));
})(), Zc = (t) => (e) => {
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
}, ta = (t) => t.kind.tag === "Nothing" ? !1 : t.kind.tag === "Just" && t.kind._1 === "vs", na = (t) => t.kind.tag === "Nothing" || !(t.kind.tag === "Just" && t.kind._1 === "vs"), k0 = /* @__PURE__ */ nt(4), ea = w0(0)(k0 / 2 - 0.5), Xp = w0(0)(k0 / 2 - 0.5), os = (t) => (n) => qp(b(t.hitbox.x + t.hitbox.width / 2, t.id))(b(n.hitbox.x + n.hitbox.width / 2, n.id)), Vp = (t) => (n) => {
  const e = _r(qt, J, (r) => os(t)(r) === "LT", n);
  if (e.tag === "Just") {
    const r = Tf(qt, J, e._1, t, n);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return Dt(n)(t);
  f();
}, b0 = (t) => (n) => {
  const e = lt((o) => os(o)(t) === "LT", n), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? v("Just", e[r]) : J;
}, Up = (t) => (n) => {
  const e = Vp(n)(t.intervals), r = jt((i) => os(n)(i) === "LT")(e), o = U(it)(n.id)((() => {
    const i = b0(n)(e);
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
  const e = ft.compare(t.low ? t.node.hitbox.y : t.node.hitbox.y + t.node.hitbox.height)(n.low ? n.node.hitbox.y : n.node.hitbox.y + n.node.hitbox.height);
  return e === "EQ" ? t.low ? t.low && !n.low ? Nn : Gn : n.low ? yn : Gn : e;
}, Mp = (t) => x((n) => (e) => jn(e.id)((r) => ({ ...r, constraints: [] }))(n))(t)(yt((n) => Kt(n)(t.cNodes))(t.cNodeOrder)), jp = (t) => (n) => x((e) => (r) => {
  const o = Kt(r._1)(e.cNodes);
  if (o.tag === "Just")
    return jn(r._1)((i) => ({ ...i, constraints: [...i.constraints, ...r._2] }))(e);
  if (o.tag === "Nothing")
    return e;
  f();
})(n)(Yp(t)), L0 = (t) => (n) => n.kind.tag !== "Nothing" && n.kind.tag === "Just" && n.kind._1 === "vs" ? n.ignoreSpacing.up ? n.ignoreSpacing.down ? n : { ...n, hitbox: { ...n.hitbox, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t - 0.01, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t, height: n.hitbox.height + 2 * t } }, ra = (t) => (n) => (e) => x((r) => (o) => e(o) ? jn(o.id)(L0(t))(r) : r)(n)(yt((r) => Kt(r)(n.cNodes))(n.cNodeOrder)), Zp = (t) => (n) => {
  const e = (r, o, i) => {
    const s = jn(i)(L0(t))(r);
    return o.length <= 1 ? s : x((u) => (c) => c === i ? u : jn(c)((a) => a.ignoreSpacing.up ? { ...a, hitbox: { ...a.hitbox, y: a.hitbox.y + t + 0.01, height: a.hitbox.height - t - 0.01 } } : a.ignoreSpacing.down ? { ...a, hitbox: { ...a.hitbox, height: a.hitbox.height - t - 0.01 } } : a)(u))(s)(o);
  };
  return x((r) => (o) => {
    if (o.master.tag === "Nothing")
      return 0 < o.cNodes.length ? e(r, o.cNodes, o.cNodes[0]) : r;
    if (o.master.tag === "Just")
      return e(r, o.cNodes, o.master._1);
    f();
  })(n)(yt((r) => Kt(r)(n.cGroups))(n.cGroupOrder));
}, t$ = (t) => (n) => {
  const e = b0(n)(t.intervals), r = jt((i) => os(n)(i) === "LT")(t.intervals), o = e.tag === "Just" && (() => {
    const i = Zc(n.id)(t.cand);
    return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === e._1.id)) && e._1.cGroup.tag === "Just" && n.cGroup.tag === "Just" && e._1.cGroup._1 !== n.cGroup._1;
  })() ? vt(it)(rn)(e._1.id)([n.id])(t.constraints) : t.constraints;
  return {
    ...t,
    constraints: r.tag === "Just" && (() => {
      const i = Zc(r._1.id)(t.cand);
      return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === n.id)) && n.cGroup.tag === "Just" && r._1.cGroup.tag === "Just" && n.cGroup._1 !== r._1.cGroup._1;
    })() ? vt(it)(rn)(n.id)([r._1.id])(o) : o,
    intervals: lt((i) => i.id !== n.id, t.intervals)
  };
}, n$ = (t) => (n) => n.low ? Up(t)(n.node) : t$(t)(n.node), bs = (t) => (n) => jp(x(n$)({ intervals: [], cand: A, constraints: A })(kt(Kp)(Jt(lt(
  t,
  yt((e) => Kt(e)(n.cNodes))(n.cNodeOrder)
))((e) => [{ node: e, low: !0 }, { node: e, low: !1 }]))).constraints)(n), e$ = (t) => bs((n) => !0)(Zp(ea)(bs(na)(ra(ea)(bs(ta)(ra(Xp)(t)(ta)))(na)))), r$ = (t) => e$(Mp(t.cGraph)), Ji = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, oa = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, uc = (t) => (n) => (e) => (r) => (o) => ({
  id: t,
  representedEdges: [o],
  affectedBends: [n, e],
  hitbox: { x: Ji(n._1)(e._1), y: Ji(n._2)(e._2), width: Ke(n._1 - e._1), height: Ke(n._2 - e._2) },
  ignoreSpacing: ae,
  potentialGroupParents: (() => {
    if (r.tag === "Nothing")
      return [];
    if (r.tag === "Just")
      return [r._1];
    f();
  })(),
  aPort: J
}), o$ = (t) => (n) => {
  const e = Ji(t.hitbox.x)(n.hitbox.x), r = Ji(t.hitbox.y)(n.hitbox.y);
  return {
    ...t,
    representedEdges: [...t.representedEdges, ...n.representedEdges],
    affectedBends: [...t.affectedBends, ...n.affectedBends],
    potentialGroupParents: [...t.potentialGroupParents, ...n.potentialGroupParents],
    hitbox: {
      x: e,
      y: r,
      width: oa(t.hitbox.x + t.hitbox.width)(n.hitbox.x + n.hitbox.width) - e,
      height: oa(t.hitbox.y + t.hitbox.height)(n.hitbox.y + n.hitbox.height) - r
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
}, i$ = (t) => (n) => Ke(t.hitbox.x - n.hitbox.x) <= 1e-4 && n.hitbox.y - (t.hitbox.y + t.hitbox.height) <= 1e-4 && t.hitbox.y - (n.hitbox.y + n.hitbox.height) <= 1e-4, s$ = (t) => (n) => Ke(t.hitbox.x - n.hitbox.x) <= 1e-4 ? ft.compare(t.hitbox.y)(n.hitbox.y) : t.hitbox.x < n.hitbox.x ? yn : Nn, E0 = (t, n) => ({ tag: t, _1: n }), cc = /* @__PURE__ */ nn(C)(Ht), is = (t) => (e) => {
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
}, ia = /* @__PURE__ */ (() => {
  const t = { eq: (e) => (r) => e._1 === r._1 && (e._2.tag === "Nothing" ? r._2.tag === "Nothing" : e._2.tag === "Just" && r._2.tag === "Just" && e._2._1 === r._2._1) }, n = {
    compare: (e) => (r) => {
      const o = C.compare(e._1)(r._1);
      if (o === "LT")
        return yn;
      if (o === "GT")
        return Nn;
      if (e._2.tag === "Nothing")
        return r._2.tag === "Nothing" ? Gn : yn;
      if (r._2.tag === "Nothing")
        return Nn;
      if (e._2.tag === "Just" && r._2.tag === "Just")
        return C.compare(e._2._1)(r._2._1);
      f();
    },
    Eq0: () => t
  };
  return x((e) => (r) => U(n)(r)()(e))(A);
})(), Be = (t) => (e) => {
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
}, u$ = /* @__PURE__ */ x((t) => (n) => U(Pp)(n)()(t))(A), Ls = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = J;
      continue;
    }
    if (s.tag === "Node") {
      const u = Wf.compare(t)(s._3);
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
}, c$ = (t) => (n) => {
  const e = cc(z((i) => b(i.id, i))(t)), r = yt((i) => is(i)(e))(n), o = it.compare((() => {
    const i = ia(z((s) => b(s.from.node, s.from.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })())((() => {
    const i = ia(z((s) => b(s.to.node, s.to.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })());
  if (o === "LT")
    return { ...ae, left: !0, right: !1 };
  if (o === "GT")
    return { ...ae, left: !1, right: !0 };
  if (o === "EQ")
    return ae;
  f();
}, a$ = (t) => yt((n) => {
  if (n.direction === "V")
    return v("Just", { start: n.start, end: n.end });
  if (n.direction === "H")
    return J;
  f();
})(t.segments), Mo = (t) => (n) => (e) => {
  if (e.tag === "Just") {
    const r = Be(n)(t);
    if (r.tag === "Just") {
      const o = jt((i) => i.id === e._1)(r._1);
      if (o.tag === "Just")
        return o._1.side;
      if (o.tag === "Nothing")
        return pe;
      f();
    }
    if (r.tag === "Nothing")
      return pe;
    f();
  }
  if (e.tag === "Nothing")
    return pe;
  f();
}, f$ = (t) => (n) => (e) => {
  const r = v0({
    origin: v("Just", E0("SegmentOrigin", e)),
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
            return T0(r.id)(i._1.cGroup._1)(o);
          if (i._1.cGroup.tag === "Nothing")
            return o;
          f();
        }
        if (i.tag === "Nothing")
          return o;
        f();
      }
      return sc({ master: v("Just", r.id), nodes: [r.id] })(o).graph;
    })(),
    edgeToCs: x((i) => (s) => vt(C)(rn)(s)([r.id])(i))(n.edgeToCs)(e.representedEdges),
    lockMap: U(it)(r.id)(c$(t)(e.representedEdges))(n.lockMap)
  };
}, g$ = (t) => (n) => (e) => {
  const r = Rt(
    (o) => J,
    (o) => (i) => v("Just", { head: o, tail: i }),
    kt(s$)(n)
  );
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just") {
    const o = x((i) => (s) => i$(i.survivor)(s) ? { ...i, survivor: o$(i.survivor)(s) } : { survivor: s, merged: [...i.merged, i.survivor] })({ survivor: r._1.head, merged: [] })(r._1.tail);
    return x(f$(t))(e)([...o.merged, o.survivor]);
  }
  f();
}, l$ = (t) => ({
  cGraph: {
    cNodes: A,
    cNodeOrder: [],
    cGroups: A,
    cGroupOrder: [],
    supportedDirections: u$([N0, oc, Sp]),
    predefinedHorizontalConstraints: [],
    predefinedVerticalConstraints: [],
    nextCNodeId: 0,
    nextCGroupId: 0
  },
  nodeToC: A,
  edgeToCs: A,
  lockMap: A
}), _$ = (t) => {
  const n = nt(4);
  return { x: t.position._1 * n, y: t.position._2 * n, width: t.size._1 * n, height: t.size._2 * n };
}, d$ = (t) => (n) => (e) => x((r) => (o) => {
  const i = v0({ origin: v("Just", E0("NodeOrigin", o.node)), kind: J, hitbox: _$(o) })(r.cGraph), s = Be(o.node)(t), u = (() => {
    if (s.tag === "Nothing")
      return b(0, 0);
    if (s.tag === "Just")
      return s._1;
    f();
  })();
  return {
    ...r,
    cGraph: sc({ master: v("Just", i.id), nodes: [i.id] })(i.graph).graph,
    nodeToC: U(C)(o.node)(i.id)(r.nodeToC),
    lockMap: U(it)(i.id)((() => {
      const c = u._1 - u._2 | 0;
      return c < 0 ? { ...ae, left: !0 } : c > 0 ? { ...ae, right: !0 } : ae;
    })())(r.lockMap)
  };
})(e)(n), h$ = (t) => x((n) => (e) => vt(C)((r) => (o) => b(
  r._1 + o._1 | 0,
  r._2 + o._2 | 0
))(e.to.node)(b(1, 0))(vt(C)((r) => (o) => b(r._1 + o._1 | 0, r._2 + o._2 | 0))(e.from.node)(b(
  0,
  1
))(n)))(A)(t), p$ = (t) => x((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? U(C)(e.origin._1._1)(e.hitbox.x)(n) : n)(A)(yt((n) => Kt(n)(t.cNodes))(t.cNodeOrder)), $$ = (t) => x((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? U(C)(e.origin._1._1)(e.hitbox.x - e.hitboxPreCompaction.x)(n) : n)(A)(yt((n) => Kt(n)(t.cNodes))(t.cNodeOrder)), m$ = (t) => x((n) => (e) => {
  if (e.origin.tag === "Just" && e.origin._1.tag === "SegmentOrigin") {
    const r = e.hitbox.x - e.hitboxPreCompaction.x;
    return x((o) => (i) => U(Wf)(i)(r)(o))(n)(e.origin._1._1.affectedBends);
  }
  return n;
})(A)(yt((n) => Kt(n)(t.cNodes))(t.cNodeOrder)), S0 = (t) => {
  const n = cc(z((e) => b(e.id, e))(t.edges));
  return yt((e) => {
    const r = is(e.edge)(n);
    if (r.tag === "Just")
      return e.reversed ? v(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.to.node,
          tgt: r._1.from.node,
          srcSide: Mo(t.ports)(r._1.to.node)(r._1.to.port),
          tgtSide: Mo(t.ports)(r._1.from.node)(r._1.from.port),
          path: e
        }
      ) : v(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.from.node,
          tgt: r._1.to.node,
          srcSide: Mo(t.ports)(r._1.from.node)(r._1.from.port),
          tgtSide: Mo(t.ports)(r._1.to.node)(r._1.to.port),
          path: e
        }
      );
    if (r.tag === "Nothing")
      return J;
    f();
  })(t.paths);
}, y$ = (t) => (n) => {
  const e = Jt(n)((r) => {
    if (r.src === r.tgt)
      return [];
    if ((r.srcSide === "North" || r.srcSide === "South") && (r.tgtSide === "North" || r.tgtSide === "South"))
      return [];
    const o = Be(r.tgt)(t.nodeToC), i = (() => {
      if (o.tag === "Just")
        return Kt(o._1)(t.cGraph.cNodes);
      if (o.tag === "Nothing")
        return J;
      f();
    })(), s = Be(r.src)(t.nodeToC), u = (() => {
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
    })(), a = (l) => (h) => ($) => {
      if (u.tag === "Just") {
        if (u._1.cGroup.tag === "Just") {
          if ($.cGroup.tag === "Just")
            return l($.hitbox.x) && $.cGroup._1 !== u._1.cGroup._1 ? v("Just", h($.cGroup._1)(u._1.cGroup._1)) : J;
          if ($.cGroup.tag === "Nothing")
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
      const l = is(r.edgeId)(t.edgeToCs);
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
      return qn((s) => Hn(ge)(s)(i.representedEdges), r.origin._1._1.representedEdges);
    })(),
    vsLNodePair: (r) => (o) => r.origin.tag === "Just" && o.origin.tag === "Just" && (r.origin._1.tag === "SegmentOrigin" ? o.origin._1.tag === "NodeOrigin" : r.origin._1.tag === "NodeOrigin" && o.origin._1.tag === "SegmentOrigin"),
    edgeLengthEdges: (r) => e
  };
}, N$ = (t) => (n) => {
  const e = nt(4), r = p$(t), o = $$(t), i = cc(z((u) => b(u.id, b(u.from.node, u.to.node)))(n.edges)), s = m$(t);
  return {
    nodes: z((u) => {
      const c = Be(u.node)(r);
      if (c.tag === "Just")
        return { ...u, position: b(c._1 / e, u.position._2) };
      if (c.tag === "Nothing")
        return u;
      f();
    })(n.nodes),
    edges: z((u) => {
      const c = is(u.edge)(i), a = (() => {
        if (c.tag === "Nothing")
          return u.segments;
        if (c.tag === "Just") {
          const g = Be(c._1._1)(o), _ = (() => {
            if (g.tag === "Nothing")
              return 0;
            if (g.tag === "Just")
              return g._1;
            f();
          })(), d = Be(c._1._2)(o), l = (() => {
            if (d.tag === "Nothing")
              return 0;
            if (d.tag === "Just")
              return d._1;
            f();
          })();
          return Ft((() => {
            const h = u.reversed ? l : _, $ = u.reversed ? _ : l, p = u.segments.length;
            return (m) => (y) => {
              if (y.direction === "V") {
                const N = (() => {
                  if (m === 0)
                    return h;
                  if (m === (p - 1 | 0))
                    return $;
                  const T = Ls(y.start)(s);
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
                      const N = Ls(y.start)(s);
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
                      if (m === (p - 1 | 0))
                        return y.end._1 + $;
                      const N = Ls(y.end)(s);
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
      return { ...u, segments: a, bends: wn((g) => (_) => g.end, a, bt(1, a.length, a)) };
    })(n.paths)
  };
}, x$ = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = uc(o.nextId)(i._2.start)(i._2.end)(J)(t.edgeId), u = (() => {
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
}, sa = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...uc(i.nextId)(r.start)(b(r.start._1, o.down ? e.y : e.y + e.height))(v(
        "Just",
        n
      ))(t.edgeId),
      aPort: v("Just", { node: t.src, side: o.side }),
      ignoreSpacing: o.down ? { ...ae, down: !0 } : { ...ae, up: !0 }
    }
  ]
}), jo = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...uc(i.nextId)(r.end)(b(r.end._1, o.down ? e.y : e.y + e.height))(v(
        "Just",
        n
      ))(t.edgeId),
      aPort: v("Just", { node: t.tgt, side: o.side }),
      ignoreSpacing: o.down ? { ...ae, down: !0 } : { ...ae, up: !0 }
    }
  ]
}), J$ = (t) => (n) => (e) => {
  const r = Be(e.src)(t.nodeToC), o = Be(e.tgt)(t.nodeToC), i = (() => {
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
  })(), u = a$(e.path), c = x(x$(e)(i)(s)(u.length - 1 | 0))(n)(Ft((g) => (_) => b(
    g,
    _
  ))(u));
  if (0 < u.length) {
    const g = (() => {
      if (r.tag === "Just" && i.tag === "Just") {
        if (e.srcSide === "North")
          return sa(e)(r._1)(i._1)(u[0])({ side: dn, down: !0 })(c);
        if (e.srcSide === "South")
          return sa(e)(r._1)(i._1)(u[0])({ side: hn, down: !1 })(c);
      }
      return c;
    })(), _ = u.length - 1 | 0;
    if (_ >= 0 && _ < u.length && o.tag === "Just" && s.tag === "Just") {
      if (e.tgtSide === "North")
        return jo(e)(o._1)(s._1)(u[_])({ side: dn, down: !0 })(g);
      if (e.tgtSide === "South")
        return jo(e)(o._1)(s._1)(u[_])({ side: hn, down: !1 })(g);
    }
    return g;
  }
  const a = u.length - 1 | 0;
  if (a >= 0 && a < u.length && o.tag === "Just" && s.tag === "Just") {
    if (e.tgtSide === "North")
      return jo(e)(o._1)(s._1)(u[a])({ side: dn, down: !0 })(c);
    if (e.tgtSide === "South")
      return jo(e)(o._1)(s._1)(u[a])({ side: hn, down: !1 })(c);
  }
  return c;
}, T$ = (t) => (n) => (e) => g$(t)(x(J$(e))({ nextId: 0, segments: [] })(n).segments)(e), v$ = (t) => T$(t.edges)(S0(t))(d$(h$(t.edges))(t.nodes)(l$())), Qe = (t) => (e) => {
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
}, ru = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ou = (t) => (e) => {
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
}, w$ = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, k$ = (t) => {
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
          const h = jt(($) => !Qe($.eid)(_.removedEdges) && (n.eq($.src)(l) || n.eq($.tgt)(l)))(r);
          if (h.tag === "Nothing") {
            c = { ..._, queue: d._1.tail };
            continue;
          }
          if (h.tag === "Just") {
            const $ = n.eq(h._1.src)(l) ? h._1.tgt : h._1.src, p = {
              ..._,
              degree: U(t)($)((() => {
                const y = ((N) => {
                  let T = N, w = !0, k;
                  for (; w; ) {
                    const L = T;
                    if (L.tag === "Leaf") {
                      w = !1, k = J;
                      continue;
                    }
                    if (L.tag === "Node") {
                      const G = t.compare($)(L._3);
                      if (G === "LT") {
                        T = L._5;
                        continue;
                      }
                      if (G === "GT") {
                        T = L._6;
                        continue;
                      }
                      if (G === "EQ") {
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
              record: [..._.record, { node: l, neighbour: $, viaSrc: n.eq(h._1.src)(l) }],
              queue: d._1.tail
            };
            if ((() => {
              const y = ((T) => {
                let w = T, k = !0, L;
                for (; k; ) {
                  const G = w;
                  if (G.tag === "Leaf") {
                    k = !1, L = J;
                    continue;
                  }
                  if (G.tag === "Node") {
                    const D = t.compare($)(G._3);
                    if (D === "LT") {
                      w = G._5;
                      continue;
                    }
                    if (D === "GT") {
                      w = G._6;
                      continue;
                    }
                    if (D === "EQ") {
                      k = !1, L = v("Just", G._4);
                      continue;
                    }
                  }
                  f();
                }
                return L;
              })(p.degree), N = (T) => {
                let w = T, k = !0, L;
                for (; k; ) {
                  const G = w;
                  if (G.tag === "Leaf") {
                    k = !1, L = !1;
                    continue;
                  }
                  if (G.tag === "Node") {
                    const D = t.compare($)(G._3);
                    if (D === "LT") {
                      w = G._5;
                      continue;
                    }
                    if (D === "GT") {
                      w = G._6;
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
    }, i = x((u) => (c) => vt(t)(on)(c.src)(1)(vt(t)(on)(c.tgt)(1)(u)))(A)(r), s = o({
      degree: i,
      removedNodes: A,
      removedEdges: A,
      record: [],
      queue: lt(
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
      coreNodes: lt(
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
      coreEdges: lt((u) => !Qe(u.eid)(s.removedEdges), r),
      removed: s.record
    };
  };
}, b$ = (t) => (n) => (e) => x((r) => (o) => {
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
})(e)(Ln(n)), iu = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = { ...o, treeNode: U(t)(r)()(o.treeNode) };
    return x((s) => (u) => {
      if (Qe(u.eid)(s.st.edgeVisited))
        return s;
      const c = { ...s.st, edgeVisited: U(it)(u.eid)()(s.st.edgeVisited) }, a = n.eq(u.src)((() => {
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
      if (Qe(u.eid)(c.treeEdge)) {
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
        const g = iu(t)(e)(a)(c);
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
          })(c.layer), h = u.src, p = ((m) => {
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
        const g = iu(t)(e)(a)({ ...c, treeEdge: U(it)(u.eid)()(c.treeEdge) });
        return { count: s.count + g.count | 0, st: g.st };
      }
      return { ...s, st: c };
    })({ count: 1, st: i })(lt((s) => (n.eq(s.src)(r) || n.eq(s.tgt)(r)) && !Qe(s.eid)(i.edgeVisited), e));
  };
}, Ti = (t) => (n) => (e) => (r) => {
  const o = r.src, s = (($) => {
    let p = $, m = !0, y;
    for (; m; ) {
      const N = p;
      if (N.tag === "Leaf") {
        m = !1, y = J;
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
        m = !1, y = J;
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
        m = !1, y = J;
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
        const k = N;
        if (k.tag === "Leaf") {
          T = !1, w = J;
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
          let k = w, L = !0, G;
          for (; L; ) {
            const D = k;
            if (D.tag === "Leaf") {
              L = !1, G = J;
              continue;
            }
            if (D.tag === "Node") {
              const Y = t.compare(y)(D._3);
              if (Y === "LT") {
                k = D._5;
                continue;
              }
              if (Y === "GT") {
                k = D._6;
                continue;
              }
              if (Y === "EQ") {
                L = !1, G = v("Just", D._4);
                continue;
              }
            }
            f();
          }
          return G;
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
}, L$ = (t) => {
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
}, E$ = (t) => (n) => (e) => x((r) => (o) => {
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
        h = !1, $ = J;
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
        h = !1, $ = J;
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
})({ edge: J, slack: 1e9 })(n).edge, S$ = (t) => {
  const n = nn(t)(Ht);
  return (e) => (r) => {
    const o = x((i) => (s) => ru(i)((() => {
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
}, C0 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = x((u) => (c) => {
      const a = C0(t)(e)(n.eq(c.src)(r) ? c.tgt : c.src)({ ...u.st, edgeVisited: U(it)(c.eid)()(u.st.edgeVisited) });
      return { lowest: ru(u.lowest)(a.lowest), st: a.st };
    })({ lowest: 1e9, st: o })(lt(
      (u) => Qe(u.eid)(o.treeEdge) && (n.eq(u.src)(r) || n.eq(u.tgt)(r)) && !Qe(u.eid)(o.edgeVisited),
      e
    )), s = ru(i.lowest)(i.st.postOrder);
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
}, P0 = (t) => {
  const n = C0(t);
  return (e) => (r) => (o) => 0 < e.length ? n(r)(e[0])({ ...o, edgeVisited: A, postOrder: 1, poID: A, lowestPoID: A }).st : o;
}, C$ = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => lt((i) => Qe(i.eid)(r.treeEdge) && (n.eq(i.src)(o) || n.eq(i.tgt)(o)), e);
}, P$ = (t) => (n) => jt((e) => {
  const r = ou(e.eid)(n.cutvalue);
  return Qe(e.eid)(n.treeEdge) && (() => {
    if (r.tag === "Nothing")
      return !1;
    if (r.tag === "Just")
      return r._1 < -1e-10;
    f();
  })();
})(t), G0 = (t) => {
  const n = iu(t);
  return (e) => (r) => (o) => {
    const i = 0 < e.length ? v("Just", e[0]) : J;
    if (i.tag === "Nothing")
      return o;
    if (i.tag === "Just") {
      const s = n(r)(i._1)({ ...o, edgeVisited: A, treeNode: A, treeEdge: A });
      if (s.count >= e.length)
        return s.st;
      const u = E$(t)(r)(s.st);
      if (u.tag === "Nothing")
        return s.st;
      if (u.tag === "Just") {
        const c = u._1.tgt, g = ((p) => {
          let m = p, y = !0, N;
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
        })(s.st.layer), _ = u._1.src, l = ((p) => {
          let m = p, y = !0, N;
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
        })(), $ = (() => {
          const p = u._1.tgt;
          return ((y) => {
            let N = y, T = !0, w;
            for (; T; ) {
              const k = N;
              if (k.tag === "Leaf") {
                T = !1, w = !1;
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
                  T = !1, w = !0;
                  continue;
                }
              }
              f();
            }
            return w;
          })(s.st.treeNode);
        })() ? -h : h;
        return G0(t)(e)(r)({
          ...s.st,
          layer: x((p) => (m) => ((N) => {
            let T = N, w = !0, k;
            for (; w; ) {
              const L = T;
              if (L.tag === "Leaf") {
                w = !1, k = !1;
                continue;
              }
              if (L.tag === "Node") {
                const G = t.compare(m)(L._3);
                if (G === "LT") {
                  T = L._5;
                  continue;
                }
                if (G === "GT") {
                  T = L._6;
                  continue;
                }
                if (G === "EQ") {
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
                const G = w;
                if (G.tag === "Leaf") {
                  k = !1, L = J;
                  continue;
                }
                if (G.tag === "Node") {
                  const D = t.compare(m)(G._3);
                  if (D === "LT") {
                    w = G._5;
                    continue;
                  }
                  if (D === "GT") {
                    w = G._6;
                    continue;
                  }
                  if (D === "EQ") {
                    k = !1, L = v("Just", G._4);
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
}, G$ = (t) => (n) => (e) => (r) => x((o) => (i) => {
  if (Ti(t)(r)(i.src)(e) && !Ti(t)(r)(i.tgt)(e)) {
    const s = i.tgt, c = ((l) => {
      let h = l, $ = !0, p;
      for (; $; ) {
        const m = h;
        if (m.tag === "Leaf") {
          $ = !1, p = J;
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
          $ = !1, p = J;
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
})({ edge: J, slack: 1e9 })(n).edge, I$ = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => (i) => {
    const s = i.tgt, u = i.src;
    return x((c) => (a) => {
      if ((() => {
        const g = ou(a.eid)(r.cutvalue);
        if (g.tag === "Just")
          return !0;
        if (g.tag === "Nothing")
          return !1;
        f();
      })()) {
        const g = ou(a.eid)(r.cutvalue), _ = (() => {
          if (g.tag === "Nothing")
            return 0;
          if (g.tag === "Just")
            return g._1;
          f();
        })();
        return n.eq(u)(a.src) || n.eq(s)(a.tgt) ? c - (_ - a.weight) : c + (_ - a.weight);
      }
      return n.eq(o)(u) ? n.eq(a.src)(o) ? c + a.weight : c - a.weight : n.eq(a.src)(o) ? c - a.weight : c + a.weight;
    })(i.weight)(lt((c) => c.eid !== i.eid && (n.eq(c.src)(o) || n.eq(c.tgt)(o)), e));
  };
}, A$ = (t) => {
  const n = I$(t);
  return (e) => (r) => (o) => {
    const i = (u, c, a) => {
      const _ = ((d) => {
        let l = d, h = !0, $;
        for (; h; ) {
          const p = l;
          if (p.tag === "Leaf") {
            h = !1, $ = J;
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
        return U(t)(u)(lt((d) => d.eid !== c.eid, _._1))(a);
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
            cutvalue: U(it)(m[0].eid)(n(e)(l)(h)(m[0]))(l.cutvalue)
          }, g = y;
          continue;
        }
        _ = !1, d = l;
      }
      return d;
    })(r)(o);
  };
}, I0 = (t) => {
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
      const $ = ft.compare(a.weight)(g.weight);
      return $ === "LT" || $ === "GT" || $ !== "EQ" ? $ : Gn;
    },
    Eq0: () => r
  }, i = x((a) => (g) => U(o)(g)()(a))(A), s = C$(t), u = nn(t)(Ht), c = A$(t);
  return (a) => (g) => (_) => {
    const d = {
      unknown: u(z((l) => b(
        l,
        Lt(On.foldr, i(s(g)(_)(l)))
      ))(a)),
      cutvalue: A
    };
    return {
      ..._,
      cutvalue: x(c(g))(d)(lt(
        (l) => {
          const $ = ((p) => {
            let m = p, y = !0, N;
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
}, F$ = (t) => {
  const n = P0(t), e = I0(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const c = { ...u, treeEdge: U(it)(s.eid)()($o(it)(i.eid)(u.treeEdge)) }, a = s.tgt, _ = ((m) => {
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
    })(), p = Ti(t)(c)(s.tgt)(i) ? $ : -$;
    return e(r)(o)(n(r)(o)({
      ...c,
      layer: x((m) => (y) => Ti(t)(c)(y)(i) ? m : U(t)(y)((() => {
        const T = ((w) => {
          let k = w, L = !0, G;
          for (; L; ) {
            const D = k;
            if (D.tag === "Leaf") {
              L = !1, G = J;
              continue;
            }
            if (D.tag === "Node") {
              const Y = t.compare(y)(D._3);
              if (Y === "LT") {
                k = D._5;
                continue;
              }
              if (Y === "GT") {
                k = D._6;
                continue;
              }
              if (Y === "EQ") {
                L = !1, G = v("Just", D._4);
                continue;
              }
            }
            f();
          }
          return G;
        })(c.layer);
        if (T.tag === "Nothing")
          return 0 + p | 0;
        if (T.tag === "Just")
          return T._1 + p | 0;
        f();
      })())(m))(c.layer)(r)
    }));
  };
}, R$ = (t) => {
  const n = F$(t);
  return (e) => (r) => (o) => (i) => ((u) => (c) => {
    let a = u, g = c, _ = !0, d;
    for (; _; ) {
      const l = a, h = g;
      if (l === 0) {
        _ = !1, d = h;
        continue;
      }
      const $ = P$(o)(h);
      if ($.tag === "Nothing") {
        _ = !1, d = h;
        continue;
      }
      if ($.tag === "Just") {
        const p = G$(t)(o)($._1)(h);
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
}, B$ = (t) => {
  const n = I0(t), e = P0(t), r = G0(t);
  return (o) => (i) => (s) => n(o)(i)(e(o)(i)(r(o)(i)(s)));
}, ua = (t) => (n) => x((e) => (r) => vt(t)(rn)(n(r))([r])(e))(A), Q$ = (t) => {
  const n = nn(t)(Ht);
  return (e) => (r) => (o) => {
    const i = (c) => (a) => (g) => (_) => {
      let d = c, l = a, h = g, $ = _, p = !0, m;
      for (; p; ) {
        const y = d, N = l, T = h, w = $, k = Rt((L) => J, (L) => (G) => v("Just", { head: L, tail: G }), T);
        if (k.tag === "Nothing") {
          p = !1, m = w;
          continue;
        }
        if (k.tag === "Just") {
          const L = k._1.head, D = ((P) => {
            let B = P, tt = !0, ct;
            for (; tt; ) {
              const q = B;
              if (q.tag === "Leaf") {
                tt = !1, ct = J;
                continue;
              }
              if (q.tag === "Node") {
                const R = t.compare(L)(q._3);
                if (R === "LT") {
                  B = q._5;
                  continue;
                }
                if (R === "GT") {
                  B = q._6;
                  continue;
                }
                if (R === "EQ") {
                  tt = !1, ct = v("Just", q._4);
                  continue;
                }
              }
              f();
            }
            return ct;
          })(w.layer), Y = (() => {
            if (D.tag === "Nothing")
              return 0;
            if (D.tag === "Just")
              return D._1;
            f();
          })(), X = x((P) => (B) => {
            const tt = B.tgt, q = ((E) => {
              let S = E, O = !0, I;
              for (; O; ) {
                const W = S;
                if (W.tag === "Leaf") {
                  O = !1, I = J;
                  continue;
                }
                if (W.tag === "Node") {
                  const Q = t.compare(tt)(W._3);
                  if (Q === "LT") {
                    S = W._5;
                    continue;
                  }
                  if (Q === "GT") {
                    S = W._6;
                    continue;
                  }
                  if (Q === "EQ") {
                    O = !1, I = v("Just", W._4);
                    continue;
                  }
                }
                f();
              }
              return I;
            })(P.incident), R = (() => {
              if (q.tag === "Nothing")
                return -1;
              if (q.tag === "Just")
                return q._1 - 1 | 0;
              f();
            })();
            return {
              st: {
                ...P.st,
                layer: U(t)(B.tgt)(w$((() => {
                  const E = B.tgt, O = ((I) => {
                    let W = I, Q = !0, M;
                    for (; Q; ) {
                      const V = W;
                      if (V.tag === "Leaf") {
                        Q = !1, M = J;
                        continue;
                      }
                      if (V.tag === "Node") {
                        const H = t.compare(E)(V._3);
                        if (H === "LT") {
                          W = V._5;
                          continue;
                        }
                        if (H === "GT") {
                          W = V._6;
                          continue;
                        }
                        if (H === "EQ") {
                          Q = !1, M = v("Just", V._4);
                          continue;
                        }
                      }
                      f();
                    }
                    return M;
                  })(P.st.layer);
                  if (O.tag === "Nothing")
                    return 0;
                  if (O.tag === "Just")
                    return O._1;
                  f();
                })())(Y + B.delta | 0))(P.st.layer)
              },
              incident: U(t)(B.tgt)(R)(P.incident),
              queue: R === 0 ? [...P.queue, B.tgt] : P.queue
            };
          })({ st: w, incident: N, queue: k._1.tail })((() => {
            const B = ((tt) => {
              let ct = tt, q = !0, R;
              for (; q; ) {
                const E = ct;
                if (E.tag === "Leaf") {
                  q = !1, R = J;
                  continue;
                }
                if (E.tag === "Node") {
                  const S = t.compare(L)(E._3);
                  if (S === "LT") {
                    ct = E._5;
                    continue;
                  }
                  if (S === "GT") {
                    ct = E._6;
                    continue;
                  }
                  if (S === "EQ") {
                    q = !1, R = v("Just", E._4);
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
          d = y, l = X.incident, h = X.queue, $ = X.st;
          continue;
        }
        f();
      }
      return m;
    }, s = ua(t)((c) => c.tgt)(r), u = n(z((c) => b(
      c,
      (() => {
        const g = ((_) => {
          let d = _, l = !0, h;
          for (; l; ) {
            const $ = d;
            if ($.tag === "Leaf") {
              l = !1, h = J;
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
    return i(ua(t)((c) => c.src)(r))(u)(lt(
      (c) => {
        const g = ((_) => {
          let d = _, l = !0, h;
          for (; l; ) {
            const $ = d;
            if ($.tag === "Leaf") {
              l = !1, h = J;
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
}, W$ = (t) => {
  const n = L$(t), e = Q$(t), r = B$(t), o = R$(t);
  return (i) => (s) => {
    const u = e(i)(s)(n(i));
    return s.length === 0 ? u.layer : o(4 * i.length | 0)(i)(s)(r(i)(s)(u)).layer;
  };
}, A0 = (t) => {
  const n = S$(t), e = W$(t), r = k$(t);
  return (o) => (i) => {
    if (o.length === 0)
      return A;
    if (o.length < 40)
      return n(o)(e(o)(i));
    const s = r(o)(i);
    return n(o)(b$(t)(s.removed)(e(s.coreNodes)(s.coreEdges)));
  };
}, F0 = (t) => (e) => {
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
}, su = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, D$ = /* @__PURE__ */ A0(it), wo = (t) => (n) => ({ ...n, edges: [...n.edges, { src: t.src, tgt: t.tgt, delta: t.delta, weight: t.weight, eid: n.nextEid }], nextEid: n.nextEid + 1 | 0 }), H$ = (t) => (n) => (e) => {
  if (e.cGroup.tag === "Nothing")
    return n;
  if (e.cGroup.tag === "Just") {
    const r = nt((() => {
      const o = F0(e.cGroup._1)(t);
      if (o.tag === "Nothing")
        return 0;
      if (o.tag === "Just")
        return o._1;
      f();
    })());
    return jn(e.id)((o) => ({ ...o, hitbox: { ...o.hitbox, x: r + o.cGroupOffset.x } }))(n);
  }
  f();
}, O$ = (t) => (n) => ({
  ...n,
  cGraph: x(H$(t))(n.cGraph)((() => {
    const e = n.cGraph;
    return yt((r) => Kt(r)(e.cNodes))(e.cNodeOrder);
  })())
}), z$ = (t) => (n) => (e) => (r) => (o) => {
  const i = $n(qi(n.cGroupOffset.x - t.cGroupOffset.x));
  return wo({ src: o.nextNodeId, tgt: r, delta: su(0)(-i), weight: 1 })(wo({ src: o.nextNodeId, tgt: e, delta: su(0)(i), weight: 1 })({
    ...o,
    nodes: [...o.nodes, o.nextNodeId],
    nextNodeId: o.nextNodeId + 1 | 0
  }));
}, q$ = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = su(0)($n(qi(e.cGroupOffset.x + e.hitbox.width + (n.direction === "LEFT" || n.direction === "RIGHT" ? n.spacingsHandler.horizontalSpacing(e)(r) : n.spacingsHandler.verticalSpacing(e)(r)) - r.cGroupOffset.x)));
  return t.sameEdgeVerticalSegments(e)(r) ? z$(e)(r)(o)(i)(s) : wo({ src: o, tgt: i, delta: u, weight: t.vsLNodePair(e)(r) ? 2 : 1 })(s);
}, Y$ = (t) => (n) => (e) => (r) => (o) => {
  const i = Kt(o)(n.cGraph.cNodes);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just")
    return (e.cGroup.tag === "Nothing" ? i._1.cGroup.tag === "Nothing" : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" && e.cGroup._1 === i._1.cGroup._1) ? r : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" ? q$(t)(n)(e)(i._1)(e.cGroup._1)(i._1.cGroup._1)(r) : r;
  f();
}, X$ = (t) => (n) => (e) => (r) => x(Y$(t)(n)(r))(e)(r.constraints), V$ = (t) => (n) => wo({ src: n.srcGroup, tgt: n.tgtGroup, delta: n.delta, weight: n.weight })(t), U$ = (t) => {
  const n = x((o) => (i) => vt(it)(on)(i.tgt)(1)(o))(A)(t.edges), e = lt(
    (o) => {
      const i = F0(o)(n);
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
  return x((o) => (i) => wo({ src: r, tgt: i, delta: 1, weight: 0 })(o))({ ...t, nodes: [...t.nodes, r], nextNodeId: r + 1 | 0 })(e);
}, K$ = (t) => (n) => {
  const e = U$(x(V$)(x(X$(t)(n))({
    nodes: n.cGraph.cGroupOrder,
    edges: [],
    nextNodeId: n.cGraph.nextCGroupId,
    nextEid: 0
  })((() => {
    const r = n.cGraph;
    return yt((o) => Kt(o)(r.cNodes))(r.cNodeOrder);
  })()))(t.edgeLengthEdges(n.cGraph)));
  return { nodes: e.nodes, edges: e.edges };
}, M$ = (t) => (n) => {
  const e = K$(t)(n);
  return O$(D$(e.nodes)(e.edges))(n);
}, R0 = (t) => t, Zt = /* @__PURE__ */ R0("H"), tn = /* @__PURE__ */ R0("V"), j$ = (t) => b(t._2, t._1), B0 = (t) => ({ ...t, position: b(t.position._2, t.position._1), size: b(t.size._2, t.size._1) }), Z$ = (t) => ({
  start: b(t.start._2, t.start._1),
  end: b(t.end._2, t.end._1),
  direction: (() => {
    if (t.direction === "H")
      return tn;
    if (t.direction === "V")
      return Zt;
    f();
  })()
}), Q0 = (t) => ({ ...t, segments: z(Z$)(t.segments), bends: z(j$)(t.bends) }), tm = (t) => ({ nodes: z(B0)(t.nodes), edges: t.edges, paths: z(Q0)(t.paths), ports: t.ports }), nm = (t) => ({
  horizontalSpacing: (n) => (e) => {
    if (t.sameEdgeVerticalSegments(n)(e) || n.ignoreSpacing.right || e.ignoreSpacing.left)
      return 0;
    const r = e.kind.tag === "Nothing" ? !1 : e.kind.tag === "Just" && e.kind._1 === "vs";
    return n.kind.tag !== "Nothing" && n.kind.tag === "Just" && n.kind._1 === "vs" ? r ? 10 : 4 : r ? 4 : 8;
  },
  verticalSpacing: (n) => (e) => {
    if (t.sameEdgeVerticalSegments(n)(e))
      return 1;
    if (n.hitbox.y <= e.hitbox.y ? n.ignoreSpacing.down || e.ignoreSpacing.up : n.ignoreSpacing.up || e.ignoreSpacing.down)
      return 0;
    const r = e.kind.tag === "Nothing" ? !1 : e.kind.tag === "Just" && e.kind._1 === "vs";
    return n.kind.tag !== "Nothing" && n.kind.tag === "Just" && n.kind._1 === "vs" ? r ? 10 : 4 : r ? 4 : 8;
  }
}), em = (t) => (n) => M$(n), rm = (t) => (n) => {
  const e = tm(n), r = v$(e), o = y$(r)(S0(e)), i = N$(J0(oc)(Hp({
    ...zp(r.cGraph),
    compactionAlgorithm: v("Just", em()(o)),
    constraintAlgorithm: v("Just", r$),
    spacingsHandler: nm(o)
  })).cGraph)({ nodes: e.nodes, edges: e.edges, paths: e.paths });
  return { nodes: z(B0)(i.nodes), edges: z(Q0)(i.edges) };
}, W0 = (t) => t, Jr = /* @__PURE__ */ nn(it)(Ht), Gt = (t) => (e) => {
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
}, ca = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ht = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, pt = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, br = (t) => (e) => {
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
  return e === "LT" ? yn : e === "GT" ? Nn : it.compare(t._2)(n._2);
}, vr = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, im = /* @__PURE__ */ (() => {
  const t = te.unfoldr(ke);
  return (n) => t(Kn("IterNode", n, we));
})(), sm = (t) => t, aa = (t) => (e) => {
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
}, Zo = /* @__PURE__ */ W0("Regular"), ti = /* @__PURE__ */ W0("Critical"), D0 = (t) => (n) => {
  const e = x((s) => (u) => U(C)(u.node)(u)(s))(A)(n), r = 1.25 * nt(4), o = (s, u, c) => ((g) => (_) => (d) => {
    let l = g, h = _, $ = d, p = !0, m;
    for (; p; ) {
      const y = l, N = h, T = $;
      if (T.critical) {
        p = !1, m = T;
        continue;
      }
      const w = Rt((L) => J, (L) => (G) => v("Just", { head: L, tail: G }), y), k = Rt((L) => J, (L) => (G) => v("Just", { head: L, tail: G }), N);
      if (w.tag === "Just" && k.tag === "Just") {
        const L = w._1.head > k._1.head - s && w._1.head < k._1.head + s ? { ...T, critical: !0 } : w._1.head > k._1.head - r && w._1.head < k._1.head + r ? { ...T, conflicts: T.conflicts + 1 | 0 } : T;
        if (L.critical) {
          p = !1, m = L;
          continue;
        }
        if (w._1.head <= k._1.head) {
          l = w._1.tail, h = N, $ = L;
          continue;
        }
        l = y, h = k._1.tail, $ = L;
        continue;
      }
      p = !1, m = T;
    }
    return m;
  })(u)(c)({ conflicts: 0, critical: !1 }), i = (s, u, c) => {
    if (pt(x(pt)(-1e18)(u.incoming))(x(pt)(-1e18)(u.outgoing)) - ht(x(ht)(1e18)(u.incoming))(x(ht)(1e18)(u.outgoing)) < 1e-3 || pt(x(pt)(-1e18)(c.incoming))(x(pt)(-1e18)(c.outgoing)) - ht(x(ht)(1e18)(c.incoming))(x(ht)(1e18)(c.outgoing)) < 1e-3)
      return [];
    const a = o(s, u.outgoing, c.incoming), g = o(s, c.outgoing, u.incoming);
    if (a.critical || g.critical)
      return [...a.critical ? [{ src: c.id, tgt: u.id, weight: 1, kind: ti }] : [], ...g.critical ? [{ src: u.id, tgt: c.id, weight: 1, kind: ti }] : []];
    const _ = ht(x(ht)(1e18)(u.incoming))(x(ht)(1e18)(u.outgoing)), d = pt(x(pt)(-1e18)(u.incoming))(x(pt)(-1e18)(u.outgoing)), l = ht(x(ht)(1e18)(c.incoming))(x(ht)(1e18)(c.outgoing)), h = pt(x(pt)(-1e18)(c.incoming))(x(pt)(-1e18)(c.outgoing)), $ = (1 * a.conflicts | 0) + (16 * (x((m) => (y) => y > h ? m : y >= l ? m + 1 | 0 : m)(0)(u.outgoing) + x((m) => (y) => y > d ? m : y >= _ ? m + 1 | 0 : m)(0)(c.incoming) | 0) | 0) | 0, p = (1 * g.conflicts | 0) + (16 * (x((m) => (y) => y > d ? m : y >= _ ? m + 1 | 0 : m)(0)(c.outgoing) + x((m) => (y) => y > h ? m : y >= l ? m + 1 | 0 : m)(0)(u.incoming) | 0) | 0) | 0;
    return $ < p ? [{ src: u.id, tgt: c.id, weight: p - $ | 0, kind: Zo }] : $ > p ? [{ src: c.id, tgt: u.id, weight: $ - p | 0, kind: Zo }] : $ > 0 ? [{ src: u.id, tgt: c.id, weight: 0, kind: Zo }, { src: c.id, tgt: u.id, weight: 0, kind: Zo }] : [];
  };
  return x((s) => (u) => x((c) => (a) => U(C)(a._1)(a._2)(c))(s)((() => {
    const c = x((P) => (B) => {
      const tt = B.edge.from.node + "|" + (() => {
        if (B.edge.from.port.tag === "Just")
          return B.edge.from.port._1;
        if (B.edge.from.port.tag === "Nothing")
          return "_auto_" + B.edge.id;
        f();
      })(), ct = aa(tt)(P.entries);
      if (ct.tag === "Nothing")
        return {
          ...P,
          entries: U(C)(tt)({
            id: 0,
            members: [B.edge.id],
            incoming: [B.fromPos._1],
            outgoing: [B.toPos._1],
            slot: 0,
            mark: 0,
            splitBy: J,
            splitPartner: J
          })(P.entries),
          order: [...P.order, tt]
        };
      if (ct.tag === "Just")
        return {
          ...P,
          entries: U(C)(tt)({
            ...ct._1,
            members: [...ct._1.members, B.edge.id],
            incoming: [...ur((q) => q < B.fromPos._1)(ct._1.incoming).init, B.fromPos._1, ...ur((q) => q <= B.fromPos._1)(ct._1.incoming).rest],
            outgoing: [...ur((q) => q < B.toPos._1)(ct._1.outgoing).init, B.toPos._1, ...ur((q) => q <= B.toPos._1)(ct._1.outgoing).rest]
          })(P.entries)
        };
      f();
    })({ entries: A, order: [] })(u._2), a = Ft((P) => (B) => ({ ...B, id: P }))(yt((P) => aa(P)(c.entries))(c.order));
    if (a.length === 0)
      return [];
    const g = x((P) => (B) => P.prev.tag === "Just" && B - P.prev._1 < 1e-9 ? P : { prev: v("Just", B), out: [...P.out, B] })({ prev: J, out: [] })(kt(ft.compare)([
      ...Jt(a)((P) => P.incoming),
      ...Jt(a)((P) => P.outgoing)
    ])).out, _ = g.length < 2 ? 0.2 * r : 0.2 * x((P) => (B) => {
      if (P.prev.tag === "Nothing")
        return { prev: v("Just", B), mn: P.mn };
      if (P.prev.tag === "Just")
        return { prev: v("Just", B), mn: ht(P.mn)(B - P.prev._1) };
      f();
    })({ prev: J, mn: 1e18 })(g).mn, d = {
      segments: a,
      deps: (() => {
        const P = a.length;
        return Jt(Jt(It(0, P - 2 | 0))((B) => Jt(It(B + 1 | 0, P - 1 | 0))((tt) => [
          b(B, tt)
        ])))((B) => B._1 >= 0 && B._1 < a.length ? B._2 >= 0 && B._2 < a.length ? i(_, a[B._1], a[B._2]) : [] : []);
      })()
    }, l = lt(
      (P) => {
        if (P.kind === "Critical")
          return !0;
        if (P.kind === "Regular")
          return !1;
        f();
      },
      d.deps
    ), h = (() => {
      if (l.length < 2)
        return d;
      const P = Jr((() => {
        const R = d.segments;
        return z((E) => b(E.id, E.mark))((() => {
          const E = R.length, S = (W) => {
            let Q = W, M = !0, V;
            for (; M; ) {
              const H = Q, et = jt((j) => {
                const ot = Gt(j)(H.inWeight);
                if (ot.tag === "Nothing")
                  return !0;
                if (ot.tag === "Just")
                  return ot._1 === 0;
                f();
              })(H.remaining);
              if (et.tag === "Nothing") {
                M = !1, V = H;
                continue;
              }
              if (et.tag === "Just") {
                const j = et._1;
                Q = {
                  ...H,
                  inWeight: x((ot) => (Z) => vt(it)(on)(Z.tgt)(-Z.weight)(ot))(H.inWeight)((() => {
                    const ot = Gt(j)(H.depsBySrc);
                    if (ot.tag === "Nothing")
                      return [];
                    if (ot.tag === "Just")
                      return ot._1;
                    f();
                  })()),
                  marks: U(it)(j)(H.nextSource)(H.marks),
                  nextSource: H.nextSource + 1 | 0,
                  outWeight: x((ot) => (Z) => vt(it)(on)(Z.src)(-Z.weight)(ot))(H.outWeight)((() => {
                    const ot = Gt(j)(H.depsByTgt);
                    if (ot.tag === "Nothing")
                      return [];
                    if (ot.tag === "Just")
                      return ot._1;
                    f();
                  })()),
                  remaining: lt((ot) => ot !== j, H.remaining)
                };
                continue;
              }
              f();
            }
            return V;
          }, O = (W) => {
            let Q = W, M = !0, V;
            for (; M; ) {
              const H = Q, et = jt((j) => {
                const ot = Gt(j)(H.outWeight);
                if (ot.tag === "Nothing")
                  return !0;
                if (ot.tag === "Just")
                  return ot._1 === 0;
                f();
              })(H.remaining);
              if (et.tag === "Nothing") {
                M = !1, V = H;
                continue;
              }
              if (et.tag === "Just") {
                const j = et._1;
                Q = {
                  ...H,
                  inWeight: x((ot) => (Z) => vt(it)(on)(Z.tgt)(-Z.weight)(ot))(H.inWeight)((() => {
                    const ot = Gt(j)(H.depsBySrc);
                    if (ot.tag === "Nothing")
                      return [];
                    if (ot.tag === "Just")
                      return ot._1;
                    f();
                  })()),
                  marks: U(it)(j)(H.nextSink)(H.marks),
                  nextSink: H.nextSink - 1 | 0,
                  outWeight: x((ot) => (Z) => vt(it)(on)(Z.src)(-Z.weight)(ot))(H.outWeight)((() => {
                    const ot = Gt(j)(H.depsByTgt);
                    if (ot.tag === "Nothing")
                      return [];
                    if (ot.tag === "Just")
                      return ot._1;
                    f();
                  })()),
                  remaining: lt((ot) => ot !== j, H.remaining)
                };
                continue;
              }
              f();
            }
            return V;
          };
          return ((W) => {
            let Q = W, M = !0, V;
            for (; M; ) {
              const et = S(O(Q));
              if (et.remaining.length === 0) {
                M = !1, V = z((j) => {
                  const ot = Gt(j.id)(et.marks), Z = (() => {
                    if (ot.tag === "Nothing")
                      return j.id;
                    if (ot.tag === "Just")
                      return ot._1;
                    f();
                  })();
                  return { ...j, mark: Z < E ? (Z + E | 0) + 1 | 0 : Z };
                })(R);
                continue;
              }
              Q = (() => {
                const j = (Z) => {
                  const at = Gt(Z)(et.outWeight), _t = Gt(Z)(et.inWeight);
                  return (() => {
                    if (at.tag === "Nothing")
                      return 0;
                    if (at.tag === "Just")
                      return at._1;
                    f();
                  })() - (() => {
                    if (_t.tag === "Nothing")
                      return 0;
                    if (_t.tag === "Just")
                      return _t._1;
                    f();
                  })() | 0;
                }, ot = kt((Z) => (at) => it.compare(j(at))(j(Z)))(et.remaining);
                if (0 < ot.length) {
                  const Z = ot[0];
                  return {
                    ...et,
                    inWeight: x((at) => (_t) => vt(it)(on)(_t.tgt)(-_t.weight)(at))(et.inWeight)((() => {
                      const at = Gt(Z)(et.depsBySrc);
                      if (at.tag === "Nothing")
                        return [];
                      if (at.tag === "Just")
                        return at._1;
                      f();
                    })()),
                    marks: U(it)(Z)(et.nextSource)(et.marks),
                    nextSource: et.nextSource + 1 | 0,
                    outWeight: x((at) => (_t) => vt(it)(on)(_t.src)(-_t.weight)(at))(et.outWeight)((() => {
                      const at = Gt(Z)(et.depsByTgt);
                      if (at.tag === "Nothing")
                        return [];
                      if (at.tag === "Just")
                        return at._1;
                      f();
                    })()),
                    remaining: lt((at) => at !== Z, et.remaining)
                  };
                }
                return et;
              })();
            }
            return V;
          })({
            remaining: z((W) => W.id)(R),
            marks: A,
            inWeight: x((W) => (Q) => vt(it)(on)(Q.tgt)(Q.weight)(W))(A)(l),
            outWeight: x((W) => (Q) => vt(it)(on)(Q.src)(Q.weight)(W))(A)(l),
            depsBySrc: x((W) => (Q) => vt(it)(rn)(Q.src)([Q])(W))(A)(l),
            depsByTgt: x((W) => (Q) => vt(it)(rn)(Q.tgt)([Q])(W))(A)(l),
            nextSink: E - 1 | 0,
            nextSource: E + 1 | 0
          });
        })());
      })()), B = lt(
        (R) => {
          const E = Gt(R.src)(P), S = Gt(R.tgt)(P);
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
      const tt = x((R) => (E) => {
        if (Hn(Ir)(E.src)(R.decisions) || Hn(Ir)(E.tgt)(R.decisions))
          return R;
        const S = Gt(E.src)(R.segMap), O = Gt(E.tgt)(R.segMap);
        if (S.tag === "Just" && O.tag === "Just") {
          const I = (S._1.incoming.length + S._1.outgoing.length | 0) > 2 && (O._1.incoming.length + O._1.outgoing.length | 0) <= 2, W = I ? O._1 : S._1;
          return {
            decisions: [...R.decisions, W.id],
            segMap: U(it)(W.id)({ ...W, splitBy: v("Just", I ? S._1.id : O._1.id) })(R.segMap)
          };
        }
        return R;
      })({ decisions: [], segMap: Jr(z((R) => b(R.id, R))(d.segments)) })(B), ct = tt.segMap, q = x((R) => (E) => {
        const S = ht(x(ht)(1e18)(E.incoming))(x(ht)(1e18)(E.outgoing)), O = pt(x(pt)(-1e18)(E.incoming))(x(pt)(-1e18)(E.outgoing)), I = lt(
          (H) => H.a.startPosition <= O && H.a.endPosition >= S,
          Ft((H) => (et) => ({ i: H, a: et }))(R.freeAreas)
        );
        if (I.length === 0) {
          const H = {
            ...E,
            incoming: kt(ft.compare)(E.incoming),
            outgoing: kt(ft.compare)([(S + O) / 2]),
            splitPartner: v("Just", R.nextId)
          }, et = {
            id: R.nextId,
            incoming: kt(ft.compare)([(S + O) / 2]),
            mark: 0,
            members: E.members,
            outgoing: kt(ft.compare)(E.outgoing),
            slot: 0,
            splitBy: J,
            splitPartner: v("Just", E.id)
          };
          return {
            segMap: U(it)(et.id)(et)(U(it)(H.id)(H)(R.segMap)),
            freeAreas: R.freeAreas,
            nextId: R.nextId + 1 | 0
          };
        }
        const W = 0 < I.length ? v("Just", I[0]) : J, Q = (() => {
          if (W.tag === "Nothing")
            return { i: 0, a: { startPosition: 0, endPosition: 0, size: 0 } };
          if (W.tag === "Just") {
            if (I.length === 1)
              return W._1;
            const H = z((et) => ({
              c: et,
              rating: (() => {
                const j = (et.a.startPosition + et.a.endPosition) / 2, ot = [j], Z = [j], at = x((() => {
                  const Qt = R.segMap;
                  return (Tt) => (Bt) => {
                    const $t = Gt(Bt.tgt)(Qt);
                    if ($t.tag === "Nothing")
                      return Tt;
                    if ($t.tag === "Just") {
                      const xt = ht(x(ht)(1e18)($t._1.incoming))(x(ht)(1e18)($t._1.outgoing)), mt = pt(x(pt)(-1e18)($t._1.incoming))(x(pt)(-1e18)($t._1.outgoing)), rt = ht(x(ht)(1e18)(E.incoming))(x(ht)(1e18)(ot)), K = (() => {
                        const St = pt(x(pt)(-1e18)(E.incoming))(x(pt)(-1e18)(ot)), Pt = x((Ut) => (cn) => cn > mt ? Ut : cn >= xt ? Ut + 1 | 0 : Ut)(0)(ot) + x((Ut) => (cn) => cn > St ? Ut : cn >= rt ? Ut + 1 | 0 : Ut)(0)($t._1.incoming) | 0, Xn = ht(x(ht)(1e18)(E.incoming))(x(ht)(1e18)(ot)), _e = pt(x(pt)(-1e18)(E.incoming))(x(pt)(-1e18)(ot)), Nr = ht(x(ht)(1e18)($t._1.incoming))(x(ht)(1e18)($t._1.outgoing)), be = pt(x(pt)(-1e18)($t._1.incoming))(x(pt)(-1e18)($t._1.outgoing)), Mr = x((Ut) => (cn) => cn > _e ? Ut : cn >= Xn ? Ut + 1 | 0 : Ut)(0)($t._1.outgoing) + x((Ut) => (cn) => cn > be ? Ut : cn >= Nr ? Ut + 1 | 0 : Ut)(0)(E.incoming) | 0;
                        return Pt === Mr ? Pt > 0 ? { ...Tt, deps: Tt.deps + 2 | 0, crossings: Tt.crossings + Pt | 0 } : Tt : { ...Tt, deps: Tt.deps + 1 | 0, crossings: Tt.crossings + vr(Pt)(Mr) | 0 };
                      })(), st = ht(x(ht)(1e18)($t._1.incoming))(x(ht)(1e18)($t._1.outgoing)), gt = pt(x(pt)(-1e18)($t._1.incoming))(x(pt)(-1e18)($t._1.outgoing)), dt = ht(x(ht)(1e18)(Z))(x(ht)(1e18)(E.outgoing)), Nt = pt(x(pt)(-1e18)(Z))(x(pt)(-1e18)(E.outgoing)), At = x((St) => (Pt) => Pt > gt ? St : Pt >= st ? St + 1 | 0 : St)(0)(E.outgoing) + x((St) => (Pt) => Pt > Nt ? St : Pt >= dt ? St + 1 | 0 : St)(0)($t._1.incoming) | 0, Vt = ht(x(ht)(1e18)(Z))(x(ht)(1e18)(E.outgoing)), Pn = pt(x(pt)(-1e18)(Z))(x(pt)(-1e18)(E.outgoing)), ne = ht(x(ht)(1e18)($t._1.incoming))(x(ht)(1e18)($t._1.outgoing)), kn = pt(x(pt)(-1e18)($t._1.incoming))(x(pt)(-1e18)($t._1.outgoing)), Qn = x((St) => (Pt) => Pt > Pn ? St : Pt >= Vt ? St + 1 | 0 : St)(0)($t._1.outgoing) + x((St) => (Pt) => Pt > kn ? St : Pt >= ne ? St + 1 | 0 : St)(0)(Z) | 0;
                      return At === Qn ? At > 0 ? { ...K, deps: K.deps + 2 | 0, crossings: K.crossings + At | 0 } : K : { ...K, deps: K.deps + 1 | 0, crossings: K.crossings + vr(At)(Qn) | 0 };
                    }
                    f();
                  };
                })())(x((() => {
                  const Qt = R.segMap;
                  return (Tt) => (Bt) => {
                    const $t = Gt(Bt.src)(Qt);
                    if ($t.tag === "Nothing")
                      return Tt;
                    if ($t.tag === "Just") {
                      const xt = ht(x(ht)(1e18)($t._1.incoming))(x(ht)(1e18)($t._1.outgoing)), mt = pt(x(pt)(-1e18)($t._1.incoming))(x(pt)(-1e18)($t._1.outgoing)), rt = ht(x(ht)(1e18)(E.incoming))(x(ht)(1e18)(ot)), K = (() => {
                        const St = pt(x(pt)(-1e18)(E.incoming))(x(pt)(-1e18)(ot)), Pt = x((Ut) => (cn) => cn > mt ? Ut : cn >= xt ? Ut + 1 | 0 : Ut)(0)(ot) + x((Ut) => (cn) => cn > St ? Ut : cn >= rt ? Ut + 1 | 0 : Ut)(0)($t._1.incoming) | 0, Xn = ht(x(ht)(1e18)(E.incoming))(x(ht)(1e18)(ot)), _e = pt(x(pt)(-1e18)(E.incoming))(x(pt)(-1e18)(ot)), Nr = ht(x(ht)(1e18)($t._1.incoming))(x(ht)(1e18)($t._1.outgoing)), be = pt(x(pt)(-1e18)($t._1.incoming))(x(pt)(-1e18)($t._1.outgoing)), Mr = x((Ut) => (cn) => cn > _e ? Ut : cn >= Xn ? Ut + 1 | 0 : Ut)(0)($t._1.outgoing) + x((Ut) => (cn) => cn > be ? Ut : cn >= Nr ? Ut + 1 | 0 : Ut)(0)(E.incoming) | 0;
                        return Pt === Mr ? Pt > 0 ? { ...Tt, deps: Tt.deps + 2 | 0, crossings: Tt.crossings + Pt | 0 } : Tt : { ...Tt, deps: Tt.deps + 1 | 0, crossings: Tt.crossings + vr(Pt)(Mr) | 0 };
                      })(), st = ht(x(ht)(1e18)($t._1.incoming))(x(ht)(1e18)($t._1.outgoing)), gt = pt(x(pt)(-1e18)($t._1.incoming))(x(pt)(-1e18)($t._1.outgoing)), dt = ht(x(ht)(1e18)(Z))(x(ht)(1e18)(E.outgoing)), Nt = pt(x(pt)(-1e18)(Z))(x(pt)(-1e18)(E.outgoing)), At = x((St) => (Pt) => Pt > gt ? St : Pt >= st ? St + 1 | 0 : St)(0)(E.outgoing) + x((St) => (Pt) => Pt > Nt ? St : Pt >= dt ? St + 1 | 0 : St)(0)($t._1.incoming) | 0, Vt = ht(x(ht)(1e18)(Z))(x(ht)(1e18)(E.outgoing)), Pn = pt(x(pt)(-1e18)(Z))(x(pt)(-1e18)(E.outgoing)), ne = ht(x(ht)(1e18)($t._1.incoming))(x(ht)(1e18)($t._1.outgoing)), kn = pt(x(pt)(-1e18)($t._1.incoming))(x(pt)(-1e18)($t._1.outgoing)), Qn = x((St) => (Pt) => Pt > Pn ? St : Pt >= Vt ? St + 1 | 0 : St)(0)($t._1.outgoing) + x((St) => (Pt) => Pt > kn ? St : Pt >= ne ? St + 1 | 0 : St)(0)(Z) | 0;
                      return At === Qn ? At > 0 ? { ...K, deps: K.deps + 2 | 0, crossings: K.crossings + At | 0 } : K : { ...K, deps: K.deps + 1 | 0, crossings: K.crossings + vr(At)(Qn) | 0 };
                    }
                    f();
                  };
                })())({ crossings: 0, deps: 0 })(lt((Qt) => Qt.tgt === E.id, d.deps)))(lt((Qt) => Qt.src === E.id, d.deps)), _t = (() => {
                  if (E.splitBy.tag === "Just")
                    return Gt(E.splitBy._1)(R.segMap);
                  if (E.splitBy.tag === "Nothing")
                    return J;
                  f();
                })();
                if (_t.tag === "Just")
                  return {
                    ...at,
                    deps: at.deps + 2 | 0,
                    crossings: (() => {
                      const Qt = ht(x(ht)(1e18)(_t._1.incoming))(x(ht)(1e18)(_t._1.outgoing)), Tt = ht(x(ht)(1e18)(Z))(x(ht)(1e18)(E.outgoing)), Bt = pt(x(pt)(-1e18)(_t._1.incoming))(x(pt)(-1e18)(_t._1.outgoing)), $t = pt(x(pt)(-1e18)(Z))(x(pt)(-1e18)(E.outgoing)), xt = ht(x(ht)(1e18)(E.incoming))(x(ht)(1e18)(ot));
                      return at.crossings + (() => {
                        const mt = ht(x(ht)(1e18)(_t._1.incoming))(x(ht)(1e18)(_t._1.outgoing)), rt = pt(x(pt)(-1e18)(E.incoming))(x(pt)(-1e18)(ot)), K = pt(x(pt)(-1e18)(_t._1.incoming))(x(pt)(-1e18)(_t._1.outgoing));
                        return ((x((st) => (gt) => gt > Bt ? st : gt >= Qt ? st + 1 | 0 : st)(0)(ot) + x((st) => (gt) => gt > rt ? st : gt >= xt ? st + 1 | 0 : st)(0)(_t._1.incoming) | 0) + x((st) => (gt) => gt > $t ? st : gt >= Tt ? st + 1 | 0 : st)(0)(_t._1.outgoing) | 0) + x((st) => (gt) => gt > K ? st : gt >= mt ? st + 1 | 0 : st)(0)(Z) | 0;
                      })() | 0;
                    })()
                  };
                if (_t.tag === "Nothing")
                  return at;
                f();
              })()
            }))(I);
            return x((et) => (j) => j.rating.crossings < et.rating.crossings || !(j.rating.crossings > et.rating.crossings) && (j.rating.deps < et.rating.deps || !(j.rating.deps > et.rating.deps) && j.c.a.size > et.c.a.size) ? j : et)(0 < H.length ? H[0] : { c: W._1, rating: { crossings: 1e6, deps: 1e6 } })(H).c;
          }
          f();
        })(), M = {
          ...E,
          incoming: kt(ft.compare)(E.incoming),
          outgoing: kt(ft.compare)([(Q.a.startPosition + Q.a.endPosition) / 2]),
          splitPartner: v("Just", R.nextId)
        }, V = {
          id: R.nextId,
          incoming: kt(ft.compare)([(Q.a.startPosition + Q.a.endPosition) / 2]),
          mark: 0,
          members: E.members,
          outgoing: kt(ft.compare)(E.outgoing),
          slot: 0,
          splitBy: J,
          splitPartner: v("Just", E.id)
        };
        return {
          segMap: U(it)(V.id)(V)(U(it)(M.id)(M)(R.segMap)),
          freeAreas: (() => {
            if (Q.i >= 0 && Q.i < R.freeAreas.length) {
              const H = vf(qt, J, Q.i, R.freeAreas), et = (() => {
                if (H.tag === "Nothing")
                  return R.freeAreas;
                if (H.tag === "Just")
                  return H._1;
                f();
              })();
              if (R.freeAreas[Q.i].size / 2 < _)
                return et;
              const j = (R.freeAreas[Q.i].startPosition + R.freeAreas[Q.i].endPosition) / 2, ot = j - _, Z = j + _;
              return [
                ...Q.i < 1 ? [] : bt(0, Q.i, et),
                ...R.freeAreas[Q.i].startPosition <= ot ? [{ startPosition: R.freeAreas[Q.i].startPosition, endPosition: ot, size: ot - R.freeAreas[Q.i].startPosition }] : [],
                ...Z <= R.freeAreas[Q.i].endPosition ? [{ startPosition: Z, endPosition: R.freeAreas[Q.i].endPosition, size: R.freeAreas[Q.i].endPosition - Z }] : [],
                ...Q.i < 1 ? et : bt(Q.i, et.length, et)
              ];
            }
            return R.freeAreas;
          })(),
          nextId: R.nextId + 1 | 0
        };
      })({
        segMap: ct,
        freeAreas: (() => {
          const R = kt(ft.compare)([
            ...Jt(d.segments)((E) => E.incoming),
            ...Jt(d.segments)((E) => E.outgoing)
          ]);
          return yt(sm)(wn(
            (E) => (S) => S - E >= 2 * _ ? v("Just", { startPosition: E + _, endPosition: S - _, size: S - E - 2 * _ }) : J,
            R,
            bt(1, R.length, R)
          ));
        })(),
        nextId: d.segments.length
      })(kt((R) => (E) => ft.compare(pt(x(pt)(-1e18)(R.incoming))(x(pt)(-1e18)(R.outgoing)) - ht(x(ht)(1e18)(R.incoming))(x(ht)(1e18)(R.outgoing)))(pt(x(pt)(-1e18)(E.incoming))(x(pt)(-1e18)(E.outgoing)) - ht(x(ht)(1e18)(E.incoming))(x(ht)(1e18)(E.outgoing))))(yt((R) => Gt(R)(ct))(tt.decisions)));
      return {
        segments: (() => {
          const R = (E, S) => {
            if (E.tag === "Leaf")
              return S;
            if (E.tag === "Node")
              return R(E._5, zt("Cons", E._4, R(E._6, S)));
            f();
          };
          return Lt(Xt.foldr, R(q.segMap, Yt));
        })(),
        deps: (() => {
          const R = q.segMap, E = (I, W) => {
            if (I.tag === "Leaf")
              return W;
            if (I.tag === "Node")
              return E(I._5, zt("Cons", I._4, E(I._6, W)));
            f();
          }, S = Lt(Xt.foldr, E(R, Yt)), O = S.length;
          return [
            ...Jt(Jt(It(0, O - 2 | 0))((I) => Jt(It(I + 1 | 0, O - 1 | 0))((W) => [
              b(I, W)
            ])))((I) => I._1 >= 0 && I._1 < S.length ? I._2 >= 0 && I._2 < S.length ? S[I._1].splitPartner.tag !== "Nothing" && S[I._1].splitPartner.tag === "Just" && S[I._1].splitPartner._1 === S[I._2].id || S[I._2].splitPartner.tag !== "Nothing" && S[I._2].splitPartner.tag === "Just" && S[I._2].splitPartner._1 === S[I._1].id ? [] : i(_, S[I._1], S[I._2]) : [] : []),
            ...Jt(S)((I) => I.splitBy.tag === "Just" && I.splitPartner.tag === "Just" && (() => {
              const W = Gt(I.splitPartner._1)(R);
              if (W.tag === "Nothing")
                return !1;
              if (W.tag === "Just")
                return !0;
              f();
            })() && (() => {
              const W = Gt(I.splitBy._1)(R);
              if (W.tag === "Nothing")
                return !1;
              if (W.tag === "Just")
                return !0;
              f();
            })() ? [{ src: I.id, tgt: I.splitBy._1, weight: 1, kind: ti }, { src: I.splitBy._1, tgt: I.splitPartner._1, weight: 1, kind: ti }] : [])
          ];
        })()
      };
    })(), $ = h.segments, p = $.length, m = (P) => {
      let B = P, tt = !0, ct;
      for (; tt; ) {
        const q = B, R = jt((E) => {
          const S = Gt(E)(q.inWeight);
          if (S.tag === "Nothing")
            return !0;
          if (S.tag === "Just")
            return S._1 === 0;
          f();
        })(q.remaining);
        if (R.tag === "Nothing") {
          tt = !1, ct = q;
          continue;
        }
        if (R.tag === "Just") {
          const E = R._1;
          B = {
            ...q,
            inWeight: x((S) => (O) => vt(it)(on)(O.tgt)(-O.weight)(S))(q.inWeight)((() => {
              const S = Gt(E)(q.depsBySrc);
              if (S.tag === "Nothing")
                return [];
              if (S.tag === "Just")
                return S._1;
              f();
            })()),
            marks: U(it)(E)(q.nextSource)(q.marks),
            nextSource: q.nextSource + 1 | 0,
            outWeight: x((S) => (O) => vt(it)(on)(O.src)(-O.weight)(S))(q.outWeight)((() => {
              const S = Gt(E)(q.depsByTgt);
              if (S.tag === "Nothing")
                return [];
              if (S.tag === "Just")
                return S._1;
              f();
            })()),
            remaining: lt((S) => S !== E, q.remaining)
          };
          continue;
        }
        f();
      }
      return ct;
    }, y = (P) => {
      let B = P, tt = !0, ct;
      for (; tt; ) {
        const q = B, R = jt((E) => {
          const S = Gt(E)(q.outWeight);
          if (S.tag === "Nothing")
            return !0;
          if (S.tag === "Just")
            return S._1 === 0;
          f();
        })(q.remaining);
        if (R.tag === "Nothing") {
          tt = !1, ct = q;
          continue;
        }
        if (R.tag === "Just") {
          const E = R._1;
          B = {
            ...q,
            inWeight: x((S) => (O) => vt(it)(on)(O.tgt)(-O.weight)(S))(q.inWeight)((() => {
              const S = Gt(E)(q.depsBySrc);
              if (S.tag === "Nothing")
                return [];
              if (S.tag === "Just")
                return S._1;
              f();
            })()),
            marks: U(it)(E)(q.nextSink)(q.marks),
            nextSink: q.nextSink - 1 | 0,
            outWeight: x((S) => (O) => vt(it)(on)(O.src)(-O.weight)(S))(q.outWeight)((() => {
              const S = Gt(E)(q.depsByTgt);
              if (S.tag === "Nothing")
                return [];
              if (S.tag === "Just")
                return S._1;
              f();
            })()),
            remaining: lt((S) => S !== E, q.remaining)
          };
          continue;
        }
        f();
      }
      return ct;
    }, T = ((P) => {
      let B = P, tt = !0, ct;
      for (; tt; ) {
        const R = m(y(B));
        if (R.remaining.length === 0) {
          tt = !1, ct = z((E) => {
            const S = Gt(E.id)(R.marks), O = (() => {
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
        B = (() => {
          const E = (O) => {
            const I = Gt(O)(R.outWeight), W = Gt(O)(R.inWeight);
            return (() => {
              if (I.tag === "Nothing")
                return 0;
              if (I.tag === "Just")
                return I._1;
              f();
            })() - (() => {
              if (W.tag === "Nothing")
                return 0;
              if (W.tag === "Just")
                return W._1;
              f();
            })() | 0;
          }, S = kt((O) => (I) => it.compare(E(I))(E(O)))(R.remaining);
          if (0 < S.length) {
            const O = S[0];
            return {
              ...R,
              inWeight: x((I) => (W) => vt(it)(on)(W.tgt)(-W.weight)(I))(R.inWeight)((() => {
                const I = Gt(O)(R.depsBySrc);
                if (I.tag === "Nothing")
                  return [];
                if (I.tag === "Just")
                  return I._1;
                f();
              })()),
              marks: U(it)(O)(R.nextSource)(R.marks),
              nextSource: R.nextSource + 1 | 0,
              outWeight: x((I) => (W) => vt(it)(on)(W.src)(-W.weight)(I))(R.outWeight)((() => {
                const I = Gt(O)(R.depsByTgt);
                if (I.tag === "Nothing")
                  return [];
                if (I.tag === "Just")
                  return I._1;
                f();
              })()),
              remaining: lt((I) => I !== O, R.remaining)
            };
          }
          return R;
        })();
      }
      return ct;
    })({
      remaining: z((P) => P.id)($),
      marks: A,
      inWeight: x((P) => (B) => vt(it)(on)(B.tgt)(B.weight)(P))(A)(h.deps),
      outWeight: x((P) => (B) => vt(it)(on)(B.src)(B.weight)(P))(A)(h.deps),
      depsBySrc: x((P) => (B) => vt(it)(rn)(B.src)([B])(P))(A)(h.deps),
      depsByTgt: x((P) => (B) => vt(it)(rn)(B.tgt)([B])(P))(A)(h.deps),
      nextSink: p - 1 | 0,
      nextSource: p + 1 | 0
    }), w = (() => {
      const P = (() => {
        const q = Jr(z((R) => b(R.id, R.mark))(T));
        return {
          segments: T,
          deps: yt((R) => (() => {
            if (R.kind === "Critical")
              return !0;
            if (R.kind === "Regular")
              return !1;
            f();
          })() ? v("Just", R) : (() => {
            const E = Gt(R.src)(q), S = Gt(R.tgt)(q);
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
          })() ? R.weight === 0 ? J : v("Just", { src: R.tgt, tgt: R.src, weight: R.weight, kind: R.kind }) : v("Just", R))(h.deps)
        };
      })(), B = x((q) => (R) => vt(it)(on)(R.tgt)(1)(q))(A)(P.deps), ct = ((q) => {
        let R = q, E = !0, S;
        for (; E; ) {
          const O = R, I = Rt((W) => J, (W) => (Q) => v("Just", { head: W, tail: Q }), O.queue);
          if (I.tag === "Nothing") {
            E = !1, S = O;
            continue;
          }
          if (I.tag === "Just") {
            R = x((() => {
              const W = Gt(I._1.head)(O.slots), Q = (() => {
                if (W.tag === "Nothing")
                  return 0;
                if (W.tag === "Just")
                  return W._1;
                f();
              })();
              return (M) => (V) => {
                const H = Gt(V)(M.inDegree), et = (() => {
                  if (H.tag === "Nothing")
                    return -1;
                  if (H.tag === "Just")
                    return H._1 - 1 | 0;
                  f();
                })();
                return {
                  ...M,
                  slots: U(it)(V)(ca((() => {
                    const j = Gt(V)(M.slots);
                    if (j.tag === "Nothing")
                      return 0;
                    if (j.tag === "Just")
                      return j._1;
                    f();
                  })())(Q + 1 | 0))(M.slots),
                  inDegree: U(it)(V)(et)(M.inDegree),
                  queue: et === 0 ? [...M.queue, V] : M.queue
                };
              };
            })())({ ...O, queue: I._1.tail })((() => {
              const W = Gt(I._1.head)(O.adj);
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
        slots: Jr(z((q) => b(q.id, 0))(P.segments)),
        inDegree: B,
        adj: x((q) => (R) => vt(it)(rn)(R.src)([R.tgt])(q))(A)(P.deps),
        queue: z((q) => q.id)(lt(
          (q) => {
            const R = Gt(q.id)(B);
            if (R.tag === "Nothing")
              return !0;
            if (R.tag === "Just")
              return R._1 === 0;
            f();
          },
          P.segments
        ))
      });
      return kt((q) => (R) => it.compare(q.slot)(R.slot))(z((q) => ({
        ...q,
        slot: (() => {
          const R = Gt(q.id)(ct.slots);
          if (R.tag === "Nothing")
            return 0;
          if (R.tag === "Just")
            return R._1;
          f();
        })()
      }))(P.segments));
    })(), k = 1 + x((P) => (B) => ca(P)(B.slot))(0)(w) | 0, L = Jt(w)((P) => P.members), G = lt((P) => Hn(ge)(P.edge.id)(L), t), D = x(pt)(-1e18)(z((P) => P.fromPos._2)(G)), Y = x(ht)(1e18)(z((P) => P.toPos._2)(G));
    if (D > Y) {
      const P = Jr(z((B) => b(B.id, B))(w));
      return zn(z((B) => z((tt) => b(
        tt,
        {
          slot: B.slot,
          slotCount: k,
          gapTop: Y,
          gapBottom: D,
          partner: (() => {
            if (B.splitPartner.tag === "Just") {
              const ct = Gt(B.splitPartner._1)(P);
              if (ct.tag === "Just")
                return v("Just", { slot: ct._1.slot, splitX: 0 < ct._1.incoming.length ? ct._1.incoming[0] : 0 });
              if (ct.tag === "Nothing")
                return J;
              f();
            }
            if (B.splitPartner.tag === "Nothing")
              return J;
            f();
          })()
        }
      ))(B.members))(lt(
        (B) => {
          if (B.splitPartner.tag === "Just") {
            const tt = Gt(B.splitPartner._1)(P);
            return !(tt.tag === "Just" && (() => {
              if (tt._1.splitBy.tag === "Nothing")
                return !1;
              if (tt._1.splitBy.tag === "Just")
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
    const X = Jr(z((P) => b(P.id, P))(w));
    return zn(z((P) => z((B) => b(
      B,
      {
        slot: P.slot,
        slotCount: k,
        gapTop: D,
        gapBottom: Y,
        partner: (() => {
          if (P.splitPartner.tag === "Just") {
            const tt = Gt(P.splitPartner._1)(X);
            if (tt.tag === "Just")
              return v("Just", { slot: tt._1.slot, splitX: 0 < tt._1.incoming.length ? tt._1.incoming[0] : 0 });
            if (tt.tag === "Nothing")
              return J;
            f();
          }
          if (P.splitPartner.tag === "Nothing")
            return J;
          f();
        })()
      }
    ))(P.members))(lt(
      (P) => {
        if (P.splitPartner.tag === "Just") {
          const B = Gt(P.splitPartner._1)(X);
          return !(B.tag === "Just" && (() => {
            if (B._1.splitBy.tag === "Nothing")
              return !1;
            if (B._1.splitBy.tag === "Just")
              return !0;
            f();
          })());
        }
        if (P.splitPartner.tag === "Nothing")
          return !0;
        f();
      },
      w
    )));
  })()))(A)(im(x((s) => (u) => {
    const c = br(u.edge.from.node)(e);
    if (c.tag === "Just") {
      const a = br(u.edge.to.node)(e);
      return a.tag === "Just" && c._1.layer !== a._1.layer ? vt(it)(rn)(vr(c._1.layer)(a._1.layer))([u])(s) : s;
    }
    return s;
  })(A)((() => {
    const s = (u) => b(
      (() => {
        const c = br(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.layer : 1e6;
      })(),
      (() => {
        const c = br(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.order : 1e6;
      })()
    );
    return kt((u) => (c) => om(s(u))(s(c)))(t);
  })())));
}, cm = (t) => (n) => {
  const e = D0(t)(n), r = x((o) => (i) => U(C)(i.node)(i)(o))(A)(n);
  return x((o) => (i) => {
    const s = br(i.edge.from.node)(r);
    if (s.tag === "Just") {
      const u = br(i.edge.to.node)(r);
      if (u.tag === "Just" && s._1.layer !== u._1.layer) {
        const c = um(i.edge.id)(e);
        if (c.tag === "Just")
          return U(it)(vr(s._1.layer)(u._1.layer))(c._1.slotCount)(o);
      }
      return o;
    }
    return o;
  })(A)(t);
}, H0 = Ht.foldMap(/* @__PURE__ */ (() => {
  const t = { append: (n) => (e) => n || e };
  return { mempty: !1, Semigroup0: () => t };
})()), gn = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ln = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, eo = (t) => (n) => (e) => (r) => H0((o) => e >= o.x && e < o.x + o.w && n > o.y && t < o.y + o.h)(r), vi = (t) => (n) => (e) => (r) => eo(gn(n)(e))(ln(n)(e))(r)(t), ni = /* @__PURE__ */ nt(4), am = /* @__PURE__ */ bf((t) => {
  if (t.direction === "H") {
    const n = gn(t.start._1)(t.end._1);
    return [{ x: n, y: t.start._2 - 1, w: ln(t.start._1)(t.end._1) - n, h: 2 }];
  }
  if (t.direction === "V") {
    const n = gn(t.start._2)(t.end._2);
    return [{ x: t.start._1 - 1, y: n, w: 2, h: ln(t.start._2)(t.end._2) - n }];
  }
  f();
}), ko = /* @__PURE__ */ kf((t) => {
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
    const o = (r._1.head.direction === "H" ? t.direction === "H" : r._1.head.direction === "V" && t.direction === "V") ? [{ start: t.start, end: r._1.head.end, direction: t.direction }] : [t, r._1.head], i = zi(r._1.tail);
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
}, bo = (t) => {
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
}, ro = (t) => (n) => (e) => (r) => H0((o) => e >= o.y && e < o.y + o.h && n > o.x && t < o.x + o.w)(r), ho = (t) => (n) => (e) => (r) => ro(gn(n)(e))(ln(n)(e))(r)(t), gm = (t) => (n) => (e) => (r) => {
  const o = e + 2 | 0, i = o < 1 ? n : bt(o, n.length, n), s = e < 1 ? [] : bt(0, e, n), u = (e + 1 | 0) === (r - 1 | 0), c = e === 0, a = e >= 0 && e < n.length ? v("Just", n[e]) : J;
  if (a.tag === "Just") {
    const g = e + 1 | 0, _ = g >= 0 && g < n.length ? v("Just", n[g]) : J;
    if (_.tag === "Just") {
      const d = a._1.start._1 === _._1.end._1 && (!c || a._1.direction === "V") && (!u || _._1.direction === "V") && !vi(t)(gn(a._1.start._2)(_._1.end._2))(ln(a._1.start._2)(_._1.end._2))(a._1.start._1) ? v("Just", [...s, { start: a._1.start, end: _._1.end, direction: tn }, ...i]) : J, l = a._1.start._2 === _._1.end._2 && (!c || a._1.direction === "H") && (!u || _._1.direction === "H") && !ho(t)(gn(a._1.start._1)(_._1.end._1))(ln(a._1.start._1)(_._1.end._1))(a._1.start._2) ? v("Just", [...s, { start: a._1.start, end: _._1.end, direction: Zt }, ...i]) : J;
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
  const o = (d, l, h) => !vi(t)(gn(l)(h))(ln(l)(h))(d), i = e + 3 | 0, s = i < 1 ? n : bt(i, n.length, n), u = e < 1 ? [] : bt(0, e, n), c = (e + 2 | 0) === (r - 1 | 0), a = e === 0, g = (d, l, h) => !ho(t)(gn(l)(h))(ln(l)(h))(d), _ = e >= 0 && e < n.length ? v("Just", n[e]) : J;
  if (_.tag === "Just") {
    const d = e + 2 | 0, l = d >= 0 && d < n.length ? v("Just", n[d]) : J;
    if (l.tag === "Just") {
      const h = _._1.start._1 === l._1.end._1 && (!a || _._1.direction === "V") && (!c || l._1.direction === "V") && o(_._1.start._1, _._1.start._2, l._1.end._2) ? v("Just", [...u, { start: _._1.start, end: l._1.end, direction: tn }, ...s]) : _._1.start._2 === l._1.end._2 && (!a || _._1.direction === "H") && (!c || l._1.direction === "H") && g(_._1.start._2, _._1.start._1, l._1.end._1) ? v("Just", [...u, { start: _._1.start, end: l._1.end, direction: Zt }, ...s]) : J, $ = (!a || _._1.direction === "V") && (!c || l._1.direction === "H") && o(_._1.start._1, _._1.start._2, l._1.end._2) && g(
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
      ) : J, p = (!a || _._1.direction === "H") && (!c || l._1.direction === "V") && g(_._1.start._2, _._1.start._1, l._1.end._1) && o(
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
      ) : J, m = $.tag === "Nothing" ? p : $;
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
      const s = r, u = bo(ko(lm(t)(dm(t)(s))));
      if (u.length < s.length) {
        r = u;
        continue;
      }
      o = !1, i = u;
    }
    return i;
  };
  return (e) => n(bo(ko(e)));
}, pm = (t) => (n) => (e) => (r) => {
  const o = gn(e)(r), i = ln(e)(r), s = lt((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = kt((a) => (g) => ft.compare(a.x)(g.x))(s);
    return 0 < c.length ? c[0].x - 1 : (e + r) / 2;
  }
  const u = kt((c) => (a) => ft.compare(a.x)(c.x))(z((c) => ({ ...c, x: c.x + c.w }))(s));
  return 0 < u.length ? u[0].x + 1 : (e + r) / 2;
}, $m = (t) => (n) => (e) => (r) => {
  const o = gn(e)(r), i = ln(e)(r), s = lt((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = kt((a) => (g) => ft.compare(a.y)(g.y))(s);
    return 0 < c.length ? c[0].y - 1 : (e + r) / 2;
  }
  const u = kt((c) => (a) => ft.compare(a.y)(c.y))(z((c) => ({ ...c, y: c.y + c.h }))(s));
  return 0 < u.length ? u[0].y + 1 : (e + r) / 2;
}, mm = (t) => (n) => (e) => (r) => {
  const o = gn(e)(r), i = ln(e)(r), s = lt((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = kt((a) => (g) => ft.compare(g.x)(a.x))(z((a) => ({ ...a, x: a.x + a.w }))(s));
    return 0 < c.length ? c[0].x : (e + r) / 2;
  }
  const u = kt((c) => (a) => ft.compare(c.x)(a.x))(s);
  return 0 < u.length ? u[0].x - 1 : (e + r) / 2;
}, ym = (t) => (n) => (e) => (r) => {
  const o = gn(e)(r), i = ln(e)(r), s = lt((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = kt((a) => (g) => ft.compare(g.y)(a.y))(z((a) => ({ ...a, y: a.y + a.h }))(s));
    return 0 < c.length ? c[0].y : (e + r) / 2;
  }
  const u = kt((c) => (a) => ft.compare(c.y)(a.y))(s);
  return 0 < u.length ? u[0].y - 1 : (e + r) / 2;
}, O0 = (t) => (n) => (e) => {
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
}, fa = (t) => (n) => (e) => (r) => (o) => {
  const i = gn(n)(e), s = ln(n)(e);
  if (!eo(i)(s)(r)(t))
    return r;
  if (!eo(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return eo(i)(s)(u)(t) ? O0((c) => eo(i)(s)(c)(t))(u)(1) : u;
}, Nm = (t) => (n) => (e) => (r) => (o) => {
  const i = gn(n)(e), s = ln(n)(e);
  if (!ro(i)(s)(r)(t))
    return r;
  if (!ro(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return ro(i)(s)(u)(t) ? O0((c) => ro(i)(s)(c)(t))(u)(1) : u;
}, xm = (t) => (n) => (e) => (r) => {
  const o = gn(n)(e), i = ln(n)(e), s = lt((a) => r >= a.x && r < a.x + a.w && a.y + a.h > o && a.y < i, t), u = x((a) => (g) => ln(a)(g.x + g.w + 4))(r + 4)(s), c = x((a) => (g) => gn(a)(g.x - 4))(r - 4)(s);
  return (() => {
    const a = u - r, g = c - r;
    return (a < 0 ? -a : a) <= (g < 0 ? -g : g);
  })() ? u : c;
}, Jm = (t) => (n) => (e) => (r) => {
  const o = gn(n)(e), i = ln(n)(e), s = lt((a) => r >= a.y && r < a.y + a.h && a.x + a.w > o && a.x < i, t), u = x((a) => (g) => ln(a)(g.y + g.h + 4))(r + 4)(s), c = x((a) => (g) => gn(a)(g.y - 4))(r - 4)(s);
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
  })(), a = (w, k, L) => !vi(n)(gn(k)(L))(ln(k)(L))(w), g = (w, k, L) => !vi(e)(gn(k)(L))(ln(k)(L))(w), _ = (w, k, L, G) => t.tag === "Just" && !ho(e)(gn(w)(k))(ln(w)(k))(t._1) ? t._1 : Nm(n)(w)(k)(L)(G), d = (w, k, L, G) => {
    if (w === L) {
      const Y = xm(n)(k)(G)(w), X = $m(n)(w)(k)(G), P = ym(n)(w)(k)(G);
      return [
        { start: b(w, k), end: b(w, X), direction: tn },
        { start: b(w, X), end: b(Y, X), direction: Zt },
        { start: b(Y, X), end: b(Y, P), direction: tn },
        { start: b(Y, P), end: b(L, P), direction: Zt },
        { start: b(L, P), end: b(L, G), direction: tn }
      ];
    }
    const D = _(w, L, k, G);
    return [
      { start: b(w, k), end: b(w, D), direction: tn },
      { start: b(w, D), end: b(L, D), direction: Zt },
      { start: b(L, D), end: b(L, G), direction: tn }
    ];
  }, l = (w, k, L, G) => {
    if (k === G) {
      const Y = Jm(n)(w)(L)(k), X = pm(n)(k)(w)(L), P = mm(n)(k)(w)(L);
      return [
        { start: b(w, k), end: b(X, k), direction: Zt },
        { start: b(X, k), end: b(X, Y), direction: tn },
        { start: b(X, Y), end: b(P, Y), direction: Zt },
        { start: b(P, Y), end: b(P, G), direction: tn },
        { start: b(P, G), end: b(L, G), direction: Zt }
      ];
    }
    const D = fa(n)(k)(G)(w)(L);
    return [
      { start: b(w, k), end: b(D, k), direction: Zt },
      { start: b(D, k), end: b(D, G), direction: tn },
      { start: b(D, G), end: b(L, G), direction: Zt }
    ];
  }, h = (w, k, L) => !ho(n)(gn(k)(L))(ln(k)(L))(w), $ = (w, k, L) => !ho(e)(gn(k)(L))(ln(k)(L))(w), p = (w, k, L, G) => {
    if ($(k, w, L) && g(L, k, G))
      return [
        { start: b(w, k), end: b(L, k), direction: Zt },
        { start: b(L, k), end: b(L, G), direction: tn }
      ];
    const D = fa(n)(k)(G)(w)(L);
    return [
      { start: b(w, k), end: b(D, k), direction: Zt },
      { start: b(D, k), end: b(D, G), direction: tn },
      { start: b(D, G), end: b(L, G), direction: Zt }
    ];
  }, m = (w, k, L, G) => {
    if (g(w, k, G) && $(G, w, L))
      return [
        { start: b(w, k), end: b(w, G), direction: tn },
        { start: b(w, G), end: b(L, G), direction: Zt }
      ];
    const D = _(w, L, k, G);
    return [
      { start: b(w, k), end: b(w, D), direction: tn },
      { start: b(w, D), end: b(L, D), direction: Zt },
      { start: b(L, D), end: b(L, G), direction: tn }
    ];
  }, y = (() => {
    if (r === "South")
      return i === "North" ? u._1 === c._1 && a(u._1, u._2, c._2) ? [{ start: b(u._1, u._2), end: b(c._1, c._2), direction: tn }] : d(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? m(u._1, u._2, c._1, c._2) : d(u._1, u._2, c._1, c._2);
    if (r === "North")
      return i === "South" ? u._1 === c._1 && a(u._1, u._2, c._2) ? [{ start: b(u._1, u._2), end: b(c._1, c._2), direction: tn }] : d(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? m(u._1, u._2, c._1, c._2) : d(u._1, u._2, c._1, c._2);
    if (r === "East")
      return i === "West" ? u._2 === c._2 && h(u._2, u._1, c._1) ? [{ start: b(u._1, u._2), end: b(c._1, c._2), direction: Zt }] : l(u._1, u._2, c._1, c._2) : i === "North" || i === "South" ? p(u._1, u._2, c._1, c._2) : d(u._1, u._2, c._1, c._2);
    if (r === "West") {
      if (i === "East")
        return u._2 === c._2 && h(u._2, u._1, c._1) ? [{ start: b(u._1, u._2), end: b(c._1, c._2), direction: Zt }] : l(u._1, u._2, c._1, c._2);
      if (i === "North" || i === "South")
        return p(u._1, u._2, c._1, c._2);
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
}, vm = /* @__PURE__ */ z((t) => ({ x: t.position._1 * ni - 2, y: t.position._2 * ni - 2, w: t.size._1 * ni + 4, h: t.size._2 * ni + 4 })), wi = /* @__PURE__ */ nn(C)(Ht), Le = (t) => (e) => {
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
}, Es = (t) => (e) => {
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
}, ga = (t) => (n) => {
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
}, Ss = (t) => (n) => {
  const e = nt(4);
  if (t === "South")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "North")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "East")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  if (t === "West")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  f();
}, la = (t) => (n) => x((e) => (r) => vt(t)(rn)(n(r))([r])(e))(A), _a = (t) => (n) => (e) => (r) => {
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
}, z0 = (t) => (n) => {
  const e = t.hi - t.lo, r = (t.lo + t.hi) / 2, o = n.length;
  return o === 0 ? A : wi(o === 1 ? z((i) => b(i, r))(n) : Ft((i) => (s) => b(s, t.lo + nt(i + 1 | 0) * e / nt(o + 1 | 0)))(n));
}, q0 = (t) => (n) => (e) => (r) => (o) => {
  const i = la(C)((l) => l.to.node)(t), s = la(C)((l) => l.from.node)(t), u = x((l) => (h) => U(C)(h.node)(h)(l))(A)(n), c = (l, h, $) => {
    const p = Le(l)(u);
    if (p.tag === "Nothing")
      return b(0, 0);
    if (p.tag === "Just") {
      const m = Le(l)(e);
      if (m.tag === "Nothing") {
        const y = nt(4);
        if ($ === "South")
          return b(p._1.position._1 * y + p._1.size._1 * y / 2, (p._1.position._2 + p._1.size._2) * y);
        if ($ === "North")
          return b(p._1.position._1 * y + p._1.size._1 * y / 2, p._1.position._2 * y);
        if ($ === "East")
          return b((p._1.position._1 + p._1.size._1) * y, p._1.position._2 * y + p._1.size._2 * y / 2);
        if ($ === "West")
          return b(p._1.position._1 * y, p._1.position._2 * y + p._1.size._2 * y / 2);
        f();
      }
      if (m.tag === "Just") {
        const y = jt((N) => N.id === h)(m._1);
        if (y.tag === "Nothing") {
          const N = nt(4);
          if ($ === "South")
            return b(p._1.position._1 * N + p._1.size._1 * N / 2, (p._1.position._2 + p._1.size._2) * N);
          if ($ === "North")
            return b(p._1.position._1 * N + p._1.size._1 * N / 2, p._1.position._2 * N);
          if ($ === "East")
            return b((p._1.position._1 + p._1.size._1) * N, p._1.position._2 * N + p._1.size._2 * N / 2);
          if ($ === "West")
            return b(p._1.position._1 * N, p._1.position._2 * N + p._1.size._2 * N / 2);
          f();
        }
        if (y.tag === "Just") {
          const N = nt(4);
          if (y._1.side === "North")
            return b(p._1.position._1 * N + nt(y._1.offset) * N, p._1.position._2 * N);
          if (y._1.side === "South")
            return b(p._1.position._1 * N + nt(y._1.offset) * N, (p._1.position._2 + p._1.size._2) * N);
          if (y._1.side === "East")
            return b((p._1.position._1 + p._1.size._1) * N, p._1.position._2 * N + nt(y._1.offset) * N);
          if (y._1.side === "West")
            return b(p._1.position._1 * N, p._1.position._2 * N + nt(y._1.offset) * N);
        }
      }
    }
    f();
  }, a = wi(Jt(r)((l) => {
    if (l.nodes.length <= 2)
      return [];
    const h = nt(4);
    if (1 < l.nodes.length) {
      const $ = Le(l.nodes[1])(u);
      if ($.tag === "Nothing")
        return [];
      if ($.tag === "Just") {
        const p = $._1.position._1 * h + $._1.size._1 * h / 2;
        return z((m) => b(m, p))(wn(
          (m) => (y) => l.edgeId + ":" + m + "->" + y,
          l.nodes,
          bt(1, l.nodes.length, l.nodes)
        ));
      }
      f();
    }
    return [];
  })), g = (l) => {
    const h = Le(l.from.node)(u), $ = Le(l.to.node)(u);
    if (h.tag === "Just" && $.tag === "Just") {
      const p = h._1, m = $._1, y = kt((N) => (T) => it.compare(N.score)(T.score))(z((N) => {
        const T = N._1, w = N._2;
        return {
          from: T,
          to: w,
          score: (() => {
            const k = (Y, X, P, B, tt) => {
              const ct = Ss(Y)(X), q = Ss(Y)(P);
              return ct.lo < q.hi && q.lo < ct.hi && (T === "South" ? w === "North" && tt._2 > B._2 : T === "North" ? w === "South" && tt._2 < B._2 : T === "East" ? w === "West" && tt._1 > B._1 : T === "West" && w === "East" && tt._1 < B._1) ? 0 : _a(T)(w)(B)(tt);
            }, L = ga(T)(p), G = ga(w)(m), D = _a(T)(w)(L)(G);
            return (() => {
              if (D > 0) {
                if (T === "South")
                  return w === "North" ? k(hn, p, m, L, G) * 10 | 0 : D * 10 | 0;
                if (T === "North")
                  return w === "South" ? k(dn, p, m, L, G) * 10 | 0 : D * 10 | 0;
                if (T === "East")
                  return w === "West" ? k(pe, p, m, L, G) * 10 | 0 : D * 10 | 0;
                if (T === "West" && w === "East")
                  return k(nr, p, m, L, G) * 10 | 0;
              }
              return D * 10 | 0;
            })() + (T === "South" ? w === "North" ? 0 : 15 : T === "North" ? w === "South" ? 0 : 15 : T === "East" ? w === "West" ? 5 : 15 : T === "West" && w === "East" ? 5 : 15) | 0;
          })()
        };
      })([
        b(hn, dn),
        b(pe, dn),
        b(nr, dn),
        b(hn, pe),
        b(hn, nr),
        b(dn, hn),
        b(dn, pe),
        b(dn, nr),
        b(pe, hn),
        b(nr, hn),
        b(pe, nr),
        b(nr, pe)
      ]));
      if (0 < y.length)
        return { from: y[0].from, to: y[0].to };
    }
    return { from: hn, to: dn };
  }, _ = wi(z((l) => b(l.id, g(l)))(t)), d = (l, h, $, p, m, y) => {
    const N = nt(4), T = Le(h)(u);
    if (T.tag === "Nothing")
      return b(0, 0);
    if (T.tag === "Just") {
      const w = wm(b($, l))(o);
      if (w.tag === "Just") {
        const k = T._1.position._1 * N + w._1, L = nt(4);
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
        const k = Ss(l)(T._1), L = (k.lo + k.hi) / 2, G = Es($)(z0(k)(z((X) => X.id)(kt((X) => (P) => ft.compare(m(l)(X))(m(l)(P)))(lt(
          (X) => {
            const P = Es(X.id)(_);
            if (P.tag === "Just") {
              const B = y(P._1);
              return B === "North" ? l === "North" : B === "South" ? l === "South" : B === "East" ? l === "East" : B === "West" && l === "West";
            }
            if (P.tag === "Nothing")
              return !0;
            f();
          },
          (() => {
            const X = Le(h)(p);
            if (X.tag === "Nothing")
              return [];
            if (X.tag === "Just")
              return X._1;
            f();
          })()
        ))))), D = (() => {
          if (G.tag === "Nothing")
            return L;
          if (G.tag === "Just")
            return G._1;
          f();
        })(), Y = nt(4);
        if (l === "South")
          return b(D, (T._1.position._2 + T._1.size._2) * Y);
        if (l === "North")
          return b(D, T._1.position._2 * Y);
        if (l === "East")
          return b((T._1.position._1 + T._1.size._1) * Y, D);
        if (l === "West")
          return b(T._1.position._1 * Y, D);
      }
    }
    f();
  };
  return z((l) => {
    const h = Es(l.edge.id)(a);
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
        ($) => (p) => {
          const m = Le(p.to.node)(u);
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just") {
            const y = nt(4);
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
          const m = Le(p.from.node)(u);
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just") {
            const y = nt(4);
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
}, Y0 = (t) => (e) => {
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
}, Er = (t) => (e) => {
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
  const t = te.unfoldr(ke);
  return (n) => t(Kn("IterNode", n, we));
})(), uu = (t) => (n) => t.gapTop + 1 * nt(4) + nt(n) * 2.5 * nt(4), bm = (t) => (n) => {
  const e = Y0(n.edge.id)(t);
  if (e.tag === "Just") {
    if (e._1.partner.tag === "Just")
      return v("Just", { slot1Y: uu(e._1)(e._1.slot), splitX: e._1.partner._1.splitX, slot2Y: uu(e._1)(e._1.partner._1.slot) });
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
    const i = Er(o.node)(e);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just") {
      const s = i._1;
      return Ft((u) => (c) => {
        const a = o.edges.length, g = nt(4), _ = s.position._1 * g, d = s.position._2 * g, l = s.size._2 * g, h = nt((2 * a | 0) + 1 | 0), $ = d + l * nt(a - u | 0) / h, p = d + l * nt((a + 1 | 0) + u | 0) / h, m = _ - g * 2.5 * nt(u + 1 | 0), y = [
          { start: b(_, $), end: b(m, $), direction: Zt },
          { start: b(m, $), end: b(m, p), direction: tn },
          { start: b(m, p), end: b(_, p), direction: Zt }
        ];
        return { edge: c.id, segments: y, bends: wn((N) => (T) => N.end, y, bt(1, 3, y)), bendType: [], jumps: [], reversed: !1 };
      })(o.edges);
    }
    f();
  })(z((r) => ({ node: r._1, edges: r._2 }))(km(x((r) => (o) => vt(C)(rn)(o.from.node)([
    o
  ])(r))(A)(t)))));
}, Em = (t) => (n) => {
  const e = x((i) => (s) => U(C)(s.node)(s)(i))(A)(n), r = (i) => {
    const s = Er(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.position._1;
    f();
  }, o = (i) => {
    const s = Er(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.layer;
    f();
  };
  return kt((i) => (s) => {
    const u = it.compare(o(i.edge.from.node))(o(s.edge.from.node));
    if (u === "EQ") {
      const c = ft.compare(r(i.edge.from.node))(r(s.edge.from.node));
      return c === "EQ" ? ft.compare(r(i.edge.to.node))(r(s.edge.to.node)) : c;
    }
    return u;
  })(t);
}, An = (t) => {
  const n = nt(4);
  return { x: t.position._1 * n - 2, y: t.position._2 * n - 2, w: t.size._1 * n + 4, h: t.size._2 * n + 4 };
}, Sm = (t) => t.from.node === t.to.node, Cm = (t) => (n) => (e) => (r) => {
  const o = hm(e)(Tm(t)(n)(e)(r.fromSide)(r.fromPos)(r.toSide)(r.toPos));
  return {
    edge: r.edge.id,
    segments: o,
    bends: wn((i) => (s) => i.end, o, bt(1, o.length, o)),
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
    bends: wn((i) => (s) => i.end, o, bt(1, 5, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, Gm = (t) => (n) => (e) => {
  const r = Er(t.edge.from.node)(e);
  if (r.tag === "Just") {
    const i = Er(t.edge.to.node)(e);
    return i.tag === "Just" ? lt(
      (s) => !(s.h === An(r._1).h && s.w === An(r._1).w && s.x === An(r._1).x && s.y === An(r._1).y) && !(s.h === An(i._1).h && s.w === An(i._1).w && s.x === An(i._1).x && s.y === An(i._1).y),
      n
    ) : lt((s) => !(s.h === An(r._1).h && s.w === An(r._1).w && s.x === An(r._1).x && s.y === An(r._1).y), n);
  }
  const o = Er(t.edge.to.node)(e);
  return o.tag === "Just" ? lt((i) => !(i.h === An(o._1).h && i.w === An(o._1).w && i.x === An(o._1).x && i.y === An(o._1).y), n) : lt((i) => !0, n);
}, Im = (t) => (n) => {
  const e = Y0(n.edge.id)(t);
  if (e.tag === "Just")
    return v("Just", uu(e._1)(e._1.slot));
  if (e.tag === "Nothing")
    return J;
  f();
}, Am = (t) => (n) => (e) => (r) => (o) => {
  const i = x((a) => (g) => U(C)(g.node)(g)(a))(A)(n), s = vm(n), u = q0(lt((a) => a.from.node !== a.to.node, t))(n)(e)(r)(o), c = D0(u)(n);
  return [
    ...Lm(lt(Sm, t))(n),
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
}, qe = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ye = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Fm = (t) => (n) => (e) => {
  if (t.start._1 !== n.start._1)
    return J;
  const r = Ye(qe(t.start._2)(t.end._2))(qe(n.start._2)(n.end._2)), o = qe(Ye(t.start._2)(t.end._2))(Ye(n.start._2)(n.end._2));
  return r < o ? v("Just", { position: b(t.start._1, (r + o) / 2), crossingEdge: e }) : J;
}, Rm = (t) => (n) => (e) => {
  if (t.start._2 !== n.start._2)
    return J;
  const r = Ye(qe(t.start._1)(t.end._1))(qe(n.start._1)(n.end._1)), o = qe(Ye(t.start._1)(t.end._1))(Ye(n.start._1)(n.end._1));
  return r < o ? v("Just", { position: b((r + o) / 2, t.start._2), crossingEdge: e }) : J;
}, Bm = (t) => (n) => (e) => {
  if (t.direction === "H")
    return Rm(t)(n)(e);
  if (t.direction === "V")
    return Fm(t)(n)(e);
  f();
}, Qm = (t) => (n) => (e) => {
  const r = t + 1 | 0, o = r < 1 ? e : bt(r, e.length, e);
  return Jt(n.segments)((i) => Jt(o)((s) => yt((u) => Bm(i)(u)(s.edge))(lt(
    (u) => u.direction === "H" ? i.direction === "H" : u.direction === "V" && i.direction === "V",
    s.segments
  ))));
}, Wm = (t) => (n) => (e) => n.start._1 > qe(t.start._1)(t.end._1) && n.start._1 < Ye(t.start._1)(t.end._1) && t.start._2 > qe(n.start._2)(n.end._2) && t.start._2 < Ye(n.start._2)(n.end._2) ? v("Just", { position: b(n.start._1, t.start._2), crossingEdge: e }) : J, Dm = (t) => (n) => Jt(lt((e) => e.direction === "H", t.segments))((e) => Jt(n)((r) => yt((o) => Wm(e)(o)(r.edge))(lt(
  (o) => o.direction === "V",
  r.segments
)))), Hm = (t) => (n) => (e) => [
  ...Dm(n)(lt((r) => r.edge !== n.edge, e)),
  ...Qm(t)(n)(e)
], da = (t) => (e) => {
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
}, X0 = (t) => mn(3)(t) === "$d:", Om = (t) => (n) => (e) => x((r) => (o) => {
  const i = da(o.from.node)(t), s = (() => {
    if (i.tag === "Nothing")
      return 0;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = da(o.to.node)(t), c = (() => {
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
    layers: x((d) => (l) => {
      const h = l._2, $ = $_(s + l._1 | 0)((p) => [...p, h])(d);
      if ($.tag === "Nothing")
        return d;
      if ($.tag === "Just")
        return $._1;
      f();
    })(r.layers)(wn(Xe, It(1, c - 1 | 0), g)),
    edges: [
      ...r.edges,
      ...wn(
        (d) => (l) => ({ id: a + ":" + d + "->" + l, from: { node: d, port: o.from.port }, to: { node: l, port: o.to.port } }),
        _,
        bt(1, _.length, _)
      )
    ],
    chains: [...r.chains, { edgeId: o.id, nodes: _ }]
  };
})({ layers: e, edges: [], chains: [] })(n), ki = /* @__PURE__ */ (() => {
  const t = {
    eq: (n) => (e) => n._1 === e._1 && (n._2 === "North" ? e._2 === "North" : n._2 === "South" ? e._2 === "South" : n._2 === "East" ? e._2 === "East" : n._2 === "West" && e._2 === "West")
  };
  return {
    compare: (n) => (e) => {
      const r = C.compare(n._1)(e._1);
      if (r === "LT")
        return yn;
      if (r === "GT")
        return Nn;
      if (n._2 === "North")
        return e._2 === "North" ? Gn : yn;
      if (e._2 === "North")
        return Nn;
      if (n._2 === "South")
        return e._2 === "South" ? Gn : yn;
      if (e._2 === "South")
        return Nn;
      if (n._2 === "East")
        return e._2 === "East" ? Gn : yn;
      if (e._2 === "East")
        return Nn;
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
      const u = ki.compare(t)(s._3);
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
}, qm = /* @__PURE__ */ nn(C)(Ht), Cs = (t) => (e) => {
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
}, Ym = /* @__PURE__ */ nn(ki)(Ht), ha = /* @__PURE__ */ (() => {
  const t = te.unfoldr(ke);
  return (n) => t(Kn("IterNode", n, we));
})(), Sr = (t) => (n) => (e) => (r) => {
  const o = zm(b(n, e))(t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just")
    return o._1;
  f();
}, V0 = (t) => (n) => (e) => {
  const r = qm(zn(z((s) => Ft((u) => (c) => b(c, u))(s))(t))), o = (s, u) => {
    if (s === "South") {
      const c = Cs(u.to.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    if (s === "North") {
      const c = Cs(u.from.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    return 0;
  }, i = (s) => x((u) => (c) => Cn(
    ki.compare,
    Sn,
    Ym(z((a) => b(b(a._1, s), a._2))(ha(z0({
      lo: 0,
      hi: (() => {
        const a = Cs(c._1)(e);
        if (a.tag === "Just")
          return a._1._1;
        if (a.tag === "Nothing")
          return mn(3)(c._1) === "$d:" ? 0 : 1;
        f();
      })()
    })(z((a) => a.id)(kt((a) => (g) => it.compare(o(s, a))(o(s, g)))(c._2)))))),
    u
  ))(A)(ha(x((u) => (c) => c.from.node === c.to.node ? u : s === "South" ? vt(C)(rn)(c.from.node)([c])(u) : s === "North" ? vt(C)(rn)(c.to.node)([c])(u) : u)(A)(n)));
  return Cn(ki.compare, Sn, i(dn), i(hn));
}, U0 = (t) => t, K0 = (t) => t, M0 = (t) => t, Xm = /* @__PURE__ */ x((t) => (n) => U(C)(n)()(t))(A), Vm = /* @__PURE__ */ (() => {
  const t = te.unfoldr((n) => {
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
})(), ut = (t) => (e) => {
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
}, ee = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Je = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, $e = /* @__PURE__ */ nn(C)(Ht), Ps = /* @__PURE__ */ Sf(C), cu = /* @__PURE__ */ (() => {
  const t = te.unfoldr(ke);
  return (n) => t(Kn("IterNode", n, we));
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
}, pa = /* @__PURE__ */ M0("VDown"), $a = /* @__PURE__ */ M0("VUp"), Mm = /* @__PURE__ */ K0("ForwardPhase"), jm = /* @__PURE__ */ K0("StackPhase"), ma = /* @__PURE__ */ U0("HRight"), ya = /* @__PURE__ */ U0("HLeft"), Na = (t) => (e) => {
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
  const r = x((u) => (c) => vt(C)(on)(c.tgt)(1)(u))(A)(t), o = Vm(Xm([
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
      return Lt(Xt.foldr, u(n, Yt));
    })()
  ])), i = x((u) => (c) => vt(C)(rn)(c.src)([{ target: c.tgt, sep: c.sep }])(u))(A)(t);
  return ((u) => (c) => (a) => {
    let g = u, _ = c, d = a, l = !0, h;
    for (; l; ) {
      const $ = g, p = _, m = d, y = Rt((N) => J, (N) => (T) => v("Just", { head: N, tail: T }), $);
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
        })(), w = x((k) => (L) => {
          const G = ut(L.target)(k.result), D = T + L.sep, Y = ut(L.target)(k.indeg), X = (() => {
            if (Y.tag === "Nothing")
              return -1;
            if (Y.tag === "Just")
              return Y._1 - 1 | 0;
            f();
          })();
          return {
            newQueue: X === 0 ? [...k.newQueue, L.target] : k.newQueue,
            result: U(C)(L.target)((() => {
              if (G.tag === "Nothing")
                return D;
              if (G.tag === "Just") {
                if (e === "VDown")
                  return ee(G._1)(D);
                if (e === "VUp")
                  return Je(G._1)(D);
              }
              f();
            })())(k.result),
            indeg: U(C)(L.target)(X)(k.indeg)
          };
        })({ newQueue: [], result: m, indeg: p })((() => {
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
  ))(r)(x((u) => (c) => U(C)(c)(0)(u))(A)(o));
}, t2 = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, zt("Cons", i._4, n(i._6, s)));
    f();
  }, e = Lt(Xt.foldr, n(t, Yt)), r = x(ee)(999999)(e);
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
}, j0 = (t) => {
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
        u = ee(_)(d._1), c = d._2;
        continue;
      }
      f();
    }
    return g;
  };
  return r(-999999)(e) - o(999999)(e);
}, oo = (t) => (n) => ((r) => (o) => {
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
})())([n]), n2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (g) => {
  const _ = (E, S, O) => {
    const I = E.from.node === S ? E.from.port : E.to.node === S ? E.to.port : J;
    if (I.tag === "Just") {
      const W = ut(S)(o);
      if (W.tag === "Just") {
        const Q = jt((M) => M.id === I._1)(W._1);
        if (Q.tag === "Just") {
          const M = nt(Q._1.offset) * nt(4);
          return O === "North" || O === "South" ? M : 0;
        }
        if (Q.tag === "Nothing") {
          const M = ut(S)(r), V = Sr(s)(E.id)(O)((() => {
            if (M.tag === "Nothing")
              return 0.5;
            if (M.tag === "Just")
              return M._1._1 / 2;
            f();
          })());
          return O === "North" || O === "South" ? V : 0;
        }
        f();
      }
      if (W.tag === "Nothing") {
        const Q = ut(S)(r), M = Sr(s)(E.id)(O)((() => {
          if (Q.tag === "Nothing")
            return 0.5;
          if (Q.tag === "Just")
            return Q._1._1 / 2;
          f();
        })());
        return O === "North" || O === "South" ? M : 0;
      }
      f();
    }
    if (I.tag === "Nothing") {
      const W = ut(S)(r), Q = Sr(s)(E.id)(O)((() => {
        if (W.tag === "Nothing")
          return 0.5;
        if (W.tag === "Just")
          return W._1._1 / 2;
        f();
      })());
      return O === "North" || O === "South" ? Q : 0;
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
  }, l = (E, S, O) => x((I) => (W) => U(C)(W)((() => {
    const Q = ut(W)(I);
    if (Q.tag === "Nothing")
      return 0 + S;
    if (Q.tag === "Just")
      return Q._1 + S;
    f();
  })())(I))(O)(oo(c)(E)), h = (() => {
    if (g === "HRight")
      return e;
    if (g === "HLeft")
      return Ln(e);
    f();
  })(), $ = (E) => {
    const S = ut(E)(r);
    if (S.tag === "Nothing")
      return 1;
    if (S.tag === "Just")
      return S._1._1;
    f();
  }, p = $e(zn(Ft((E) => (S) => z((O) => b(O, E))(S))(e))), m = (E, S) => mn(3)(E) === "$d:" && mn(3)(S) === "$d:" || mn(3)(E) === "$d:" || mn(3)(S) === "$d:" ? 10 : nt(t.nodeGap), y = x((E) => (S) => Ps((O) => v(
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
  ))(S.to.node)(E))(A)(i), N = x((E) => (S) => Ps((O) => v(
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
  ))(S.from.node)(E))(A)(i), T = zn(e), w = x((E) => (S) => {
    const O = ut(S)(c.root), I = (() => {
      if (O.tag === "Nothing")
        return S;
      if (O.tag === "Just")
        return O._1;
      f();
    })();
    return S === I ? E : Ps((W) => v(
      "Just",
      (() => {
        if (W.tag === "Nothing")
          return !0;
        if (W.tag === "Just")
          return W._1;
        f();
      })() && mn(3)(S) === "$d:"
    ))(I)(E);
  })($e(z((E) => b(E, !0))(Ar(C.compare)((() => {
    const E = (S, O) => {
      if (S.tag === "Leaf")
        return O;
      if (S.tag === "Node")
        return E(S._5, zt("Cons", S._4, E(S._6, O)));
      f();
    };
    return Lt(Xt.foldr, E(c.root, Yt));
  })()))))(T), k = (E, S) => {
    const O = E.free, I = ut(O)(c.root), W = (() => {
      if (I.tag === "Nothing")
        return O;
      if (I.tag === "Just")
        return I._1;
      f();
    })(), Q = ut(W)(w), M = (() => {
      if (Q.tag === "Nothing")
        return !0;
      if (Q.tag === "Just")
        return Q._1;
      f();
    })();
    return x((V) => (H) => {
      if (V.edge.tag === "Just")
        return V;
      if (V.edge.tag === "Nothing") {
        if ((() => {
          const at = ut(W)(S.su);
          return !M && (() => {
            const _t = ut(H.from.node)(p);
            return H.from.node !== H.to.node && (() => {
              const Qt = ut(H.to.node)(p);
              return (() => {
                if (_t.tag === "Nothing")
                  return -1;
                if (_t.tag === "Just")
                  return _t._1;
                f();
              })() === (() => {
                if (Qt.tag === "Nothing")
                  return -1;
                if (Qt.tag === "Just")
                  return Qt._1;
                f();
              })();
            })();
          })() || (() => {
            if (at.tag === "Nothing")
              return !1;
            if (at.tag === "Just")
              return at._1;
            f();
          })();
        })())
          return V;
        const et = H.from.node === O ? H.to.node : H.from.node, j = ut(et)(c.root), ot = (() => {
          if (j.tag === "Nothing")
            return et;
          if (j.tag === "Just")
            return j._1;
          f();
        })(), Z = ot !== W;
        return Z && (() => {
          const at = ut(ot)(S.blockFinished);
          if (at.tag === "Nothing")
            return !1;
          if (at.tag === "Just")
            return at._1;
          f();
        })() ? { ...V, edge: v("Just", H), hasEdges: !0 } : { ...V, hasEdges: V.hasEdges || Z };
      }
      f();
    })({ edge: J, hasEdges: !1 })((() => {
      if (E.isRoot) {
        if (g === "HRight") {
          const V = ut(O)(y);
          if (V.tag === "Nothing")
            return [];
          if (V.tag === "Just")
            return V._1;
          f();
        }
        if (g === "HLeft") {
          const V = ut(O)(N);
          if (V.tag === "Nothing")
            return [];
          if (V.tag === "Just")
            return V._1;
        }
        f();
      }
      if (g === "HRight") {
        const V = ut(O)(N);
        if (V.tag === "Nothing")
          return [];
        if (V.tag === "Just")
          return V._1;
        f();
      }
      if (g === "HLeft") {
        const V = ut(O)(y);
        if (V.tag === "Nothing")
          return [];
        if (V.tag === "Just")
          return V._1;
      }
      f();
    })());
  }, L = (E, S, O, I) => {
    const W = (() => {
      if (a === "VDown")
        return -1e18;
      if (a === "VUp")
        return 1e18;
      f();
    })(), Q = { free: S, isRoot: O }, M = k(Q, I);
    if (M.edge.tag === "Nothing")
      return M.hasEdges ? { thresh: W, state: { ...I, queue: [...I.queue, Q] } } : { thresh: W, state: I };
    if (M.edge.tag === "Just") {
      const V = M.edge._1.from.node === S ? M.edge._1.to.node : M.edge._1.from.node;
      return {
        thresh: (() => {
          const H = ut((() => {
            const Z = ut(V)(c.root);
            if (Z.tag === "Nothing")
              return V;
            if (Z.tag === "Just")
              return Z._1;
            f();
          })())(I.x), et = ut(V)(u), j = ut(S)(u), ot = (() => {
            if (H.tag === "Just")
              return H._1;
            if (H.tag === "Nothing")
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
            if (et.tag === "Nothing")
              return 0;
            if (et.tag === "Just")
              return et._1;
            f();
          })() + _(
            M.edge._1,
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
            if (j.tag === "Nothing")
              return 0;
            if (j.tag === "Just")
              return j._1;
            f();
          })() - _(
            M.edge._1,
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
          ...I,
          su: U(C)((() => {
            const H = ut(M.edge._1.from.node)(c.root);
            if (H.tag === "Nothing")
              return M.edge._1.from.node;
            if (H.tag === "Just")
              return H._1;
            f();
          })())(!0)(U(C)((() => {
            const H = ut(M.edge._1.to.node)(c.root);
            if (H.tag === "Nothing")
              return M.edge._1.to.node;
            if (H.tag === "Just")
              return H._1;
            f();
          })())(!0)(I.su))
        }
      };
    }
    f();
  }, G = (E, S, O, I) => {
    const W = S === E, Q = ut(S)(c.align), M = (() => {
      if (Q.tag === "Nothing")
        return S === E;
      if (Q.tag === "Just")
        return Q._1 === E;
      f();
    })();
    if (!(W || M))
      return { thresh: O, state: I };
    const V = (() => {
      if (a === "VDown")
        return W && O <= -1e18;
      if (a === "VUp")
        return W && O >= 1e18;
      f();
    })() ? L(E, S, !0, I) : { thresh: O, state: I };
    return (() => {
      if (a === "VDown")
        return V.thresh <= -1e18 && M;
      if (a === "VUp")
        return V.thresh >= 1e18 && M;
      f();
    })() ? L(E, S, !1, V.state) : V;
  }, D = (E) => (S) => (O) => {
    const I = ut(O)(n.nodeIndex), W = (() => {
      if (I.tag === "Nothing")
        return 0;
      if (I.tag === "Just")
        return I._1;
      f();
    })(), Q = jt((j) => Hn(ge)(O)(j))(h), M = (() => {
      if (Q.tag === "Nothing")
        return [];
      if (Q.tag === "Just")
        return Q._1;
      f();
    })(), V = M.length;
    if ((() => {
      if (a === "VDown")
        return W <= 0;
      if (a === "VUp")
        return W >= (V - 1 | 0);
      f();
    })()) {
      const j = G(E, O, S.thresh, S.st);
      return { ...S, st: j.state, thresh: j.thresh };
    }
    const H = (() => {
      if (a === "VDown")
        return W - 1 | 0;
      if (a === "VUp")
        return W + 1 | 0;
      f();
    })(), et = H >= 0 && H < M.length ? v("Just", M[H]) : J;
    if (et.tag === "Nothing")
      return S;
    if (et.tag === "Just") {
      const j = ut(et._1)(c.root), ot = (() => {
        if (j.tag === "Nothing")
          return et._1;
        if (j.tag === "Just")
          return j._1;
        f();
      })(), Z = G(E, O, S.thresh, Y(ot)(S.st)), at = (() => {
        const Vt = ut(E)(Z.state.sink);
        if (Vt.tag === "Nothing")
          return E === E;
        if (Vt.tag === "Just")
          return Vt._1 === E;
        f();
      })() ? {
        ...Z.state,
        sink: U(C)(E)((() => {
          const Vt = ut(ot)(Z.state.sink);
          if (Vt.tag === "Nothing")
            return ot;
          if (Vt.tag === "Just")
            return Vt._1;
          f();
        })())(Z.state.sink)
      } : Z.state, _t = ut(ot)(at.sink), Qt = (() => {
        if (_t.tag === "Nothing")
          return ot;
        if (_t.tag === "Just")
          return _t._1;
        f();
      })(), Tt = ut(E)(at.sink), Bt = (() => {
        if (Tt.tag === "Nothing")
          return E;
        if (Tt.tag === "Just")
          return Tt._1;
        f();
      })();
      if (Bt === Qt) {
        const Vt = ut(ot)(at.x), Pn = (() => {
          if (Vt.tag === "Just")
            return Vt._1;
          if (Vt.tag === "Nothing")
            return J;
          f();
        })(), ne = (() => {
          if (Pn.tag === "Nothing")
            return 0;
          if (Pn.tag === "Just")
            return Pn._1;
          f();
        })(), kn = ut(E)(at.x), Qn = (() => {
          if (kn.tag === "Just")
            return kn._1;
          if (kn.tag === "Nothing")
            return J;
          f();
        })(), St = (() => {
          if (Qn.tag === "Nothing")
            return 0;
          if (Qn.tag === "Just")
            return Qn._1;
          f();
        })(), Pt = m(O, et._1), Xn = ut(et._1)(u), _e = ut(O)(u), Nr = (() => {
          if (Xn.tag === "Nothing")
            return 0;
          if (Xn.tag === "Just")
            return Xn._1;
          f();
        })() - (() => {
          if (_e.tag === "Nothing")
            return 0;
          if (_e.tag === "Just")
            return _e._1;
          f();
        })();
        if (a === "VDown") {
          const be = Je(ne + Nr + $(et._1) + Pt)(Z.thresh);
          return {
            st: { ...at, x: U(C)(E)(v("Just", S.initial ? be : Je(St)(be)))(at.x) },
            initial: !1,
            thresh: Z.thresh
          };
        }
        if (a === "VUp") {
          const be = ee(ne + Nr - Pt - $(O))(Z.thresh);
          return {
            st: { ...at, x: U(C)(E)(v("Just", S.initial ? be : ee(St)(be)))(at.x) },
            initial: !1,
            thresh: Z.thresh
          };
        }
        f();
      }
      const $t = ut(ot)(at.x), xt = (() => {
        if ($t.tag === "Just")
          return $t._1;
        if ($t.tag === "Nothing")
          return J;
        f();
      })(), mt = (() => {
        if (xt.tag === "Nothing")
          return 0;
        if (xt.tag === "Just")
          return xt._1;
        f();
      })(), rt = ut(E)(at.x), K = (() => {
        if (rt.tag === "Just")
          return rt._1;
        if (rt.tag === "Nothing")
          return J;
        f();
      })(), st = (() => {
        if (K.tag === "Nothing")
          return 0;
        if (K.tag === "Just")
          return K._1;
        f();
      })(), gt = nt(t.nodeGap), dt = ut(O)(u), Nt = ut(et._1)(u), At = (() => {
        if (dt.tag === "Nothing")
          return 0;
        if (dt.tag === "Just")
          return dt._1;
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
          ...at,
          classEdges: [
            ...at.classEdges,
            {
              src: Bt,
              tgt: Qt,
              sep: (() => {
                if (a === "VDown")
                  return st + At - mt - $(et._1) - gt;
                if (a === "VUp")
                  return st + At + $(O) + gt - mt;
                f();
              })()
            }
          ]
        },
        initial: S.initial,
        thresh: Z.thresh
      };
    }
    f();
  }, Y = (E) => (S) => {
    const O = ut(E)(S.x), I = (() => {
      if (O.tag === "Just")
        return O._1;
      if (O.tag === "Nothing")
        return J;
      f();
    })();
    if (I.tag === "Just")
      return S;
    if (I.tag === "Nothing") {
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
      })(oo(c)(E));
      return { ...W.st, blockFinished: U(C)(E)(!0)(W.st.blockFinished) };
    }
    f();
  }, X = x((E) => (S) => x((O) => (I) => {
    const W = ut(I)(c.root), Q = (() => {
      if (W.tag === "Nothing")
        return I;
      if (W.tag === "Just")
        return W._1;
      f();
    })();
    return Q === I ? Y(Q)(O) : O;
  })(E)((() => {
    if (a === "VDown")
      return S;
    if (a === "VUp")
      return Ln(S);
    f();
  })()))({
    x: $e(z((E) => b(E, J))(T)),
    sink: $e(z((E) => b(E, E))(T)),
    classEdges: [],
    su: A,
    blockFinished: A,
    queue: []
  })(h), P = Zm(X.classEdges)(X.sink)(a), B = (E, S, O, I) => {
    const W = ut(S)(I), Q = ut(S)(u);
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
    })() + _(E, S, O);
  }, tt = $e(z((E) => b(E, !0))(Ar(C.compare)((() => {
    const E = (S, O) => {
      if (S.tag === "Leaf")
        return O;
      if (S.tag === "Node")
        return E(S._5, zt("Cons", S._4, E(S._6, O)));
      f();
    };
    return Lt(Xt.foldr, E(c.root, Yt));
  })()))), ct = (E) => (S) => (O) => {
    const I = k(O, { su: S.su, blockFinished: tt }), W = {
      phase: E,
      ppFree: O.free,
      ppIsRoot: O.isRoot,
      edgeId: J,
      delta: 0,
      avail: 0,
      shift: 0,
      freeSu: (() => {
        const Q = ut((() => {
          const M = ut(O.free)(c.root);
          if (M.tag === "Nothing")
            return O.free;
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
      hasEdges: I.hasEdges,
      candCount: (() => {
        if (O.isRoot) {
          if (g === "HRight") {
            const Q = ut(O.free)(y);
            if (Q.tag === "Nothing")
              return 0;
            if (Q.tag === "Just")
              return Q._1.length;
            f();
          }
          if (g === "HLeft") {
            const Q = ut(O.free)(N);
            if (Q.tag === "Nothing")
              return 0;
            if (Q.tag === "Just")
              return Q._1.length;
          }
          f();
        }
        if (g === "HRight") {
          const Q = ut(O.free)(N);
          if (Q.tag === "Nothing")
            return 0;
          if (Q.tag === "Just")
            return Q._1.length;
          f();
        }
        if (g === "HLeft") {
          const Q = ut(O.free)(y);
          if (Q.tag === "Nothing")
            return 0;
          if (Q.tag === "Just")
            return Q._1.length;
        }
        f();
      })()
    };
    if (I.edge.tag === "Nothing")
      return { ...S, stack: [...S.stack, O], trace: [...S.trace, W], x: S.x };
    if (I.edge.tag === "Just") {
      const Q = I.edge._1.from.node === O.free ? b(I.edge._1.from.node, I.edge._1.to.node) : b(I.edge._1.to.node, I.edge._1.from.node), M = B(I.edge._1, Q._1, d(I.edge._1, Q._1), S.x) - B(I.edge._1, Q._2, d(I.edge._1, Q._2), S.x), V = ut(Q._1)(c.root), H = (() => {
        if (V.tag === "Nothing")
          return Q._1;
        if (V.tag === "Just")
          return V._1;
        f();
      })(), et = { ...W, edgeId: v("Just", I.edge._1.id), delta: M };
      if (M > 0 && M < 1e300) {
        const j = x((at) => (_t) => {
          const Qt = ut(_t)(p), Tt = (() => {
            if (Qt.tag === "Nothing")
              return -1;
            if (Qt.tag === "Just")
              return Qt._1;
            f();
          })();
          if (Tt >= 0 && Tt < e.length) {
            const xt = e[Tt], mt = ut(_t)(n.nodeIndex), rt = (() => {
              if (mt.tag === "Nothing")
                return -2;
              if (mt.tag === "Just")
                return mt._1 - 1 | 0;
              f();
            })();
            return rt >= 0 && rt < xt.length ? ee(at)((() => {
              const K = ut(_t)(S.x), st = ut(_t)(u), gt = ut(xt[rt])(S.x), dt = ut(xt[rt])(u);
              return (() => {
                if (K.tag === "Nothing")
                  return 0;
                if (K.tag === "Just")
                  return K._1;
                f();
              })() + (() => {
                if (st.tag === "Nothing")
                  return 0;
                if (st.tag === "Just")
                  return st._1;
                f();
              })() - ((() => {
                if (gt.tag === "Nothing")
                  return 0;
                if (gt.tag === "Just")
                  return gt._1;
                f();
              })() + (() => {
                if (dt.tag === "Nothing")
                  return 0;
                if (dt.tag === "Just")
                  return dt._1;
                f();
              })() + $(xt[rt]) + m(_t, xt[rt]));
            })()) : at;
          }
          const Bt = ut(_t)(n.nodeIndex), $t = (() => {
            if (Bt.tag === "Nothing")
              return -2;
            if (Bt.tag === "Just")
              return Bt._1 - 1 | 0;
            f();
          })();
          return $t >= 0 && $t < 0 ? ee(at)((() => {
            const xt = ut(_t)(S.x), mt = ut(_t)(u), rt = ut([][$t])(S.x), K = ut([][$t])(u);
            return (() => {
              if (xt.tag === "Nothing")
                return 0;
              if (xt.tag === "Just")
                return xt._1;
              f();
            })() + (() => {
              if (mt.tag === "Nothing")
                return 0;
              if (mt.tag === "Just")
                return mt._1;
              f();
            })() - ((() => {
              if (rt.tag === "Nothing")
                return 0;
              if (rt.tag === "Just")
                return rt._1;
              f();
            })() + (() => {
              if (K.tag === "Nothing")
                return 0;
              if (K.tag === "Just")
                return K._1;
              f();
            })() + $([][$t]) + m(_t, [][$t]));
          })()) : at;
        })(M)(oo(c)(H)), ot = j > 0 ? -j : 0, Z = { ...S, x: j > 0 ? l(H, ot, S.x) : S.x, trace: [...S.trace, { ...et, avail: j, shift: ot }] };
        return j > 0 ? Z : { ...Z, stack: [...Z.stack, O] };
      }
      if (M < 0 && -M < 1e300) {
        const j = x((at) => (_t) => {
          const Qt = ut(_t)(p), Tt = (() => {
            if (Qt.tag === "Nothing")
              return -1;
            if (Qt.tag === "Just")
              return Qt._1;
            f();
          })();
          if (Tt >= 0 && Tt < e.length) {
            const xt = e[Tt], mt = ut(_t)(n.nodeIndex), rt = (() => {
              if (mt.tag === "Nothing")
                return 0;
              if (mt.tag === "Just")
                return mt._1 + 1 | 0;
              f();
            })();
            return rt >= 0 && rt < xt.length ? ee(at)((() => {
              const K = ut(xt[rt])(S.x), st = ut(xt[rt])(u), gt = ut(_t)(S.x), dt = ut(_t)(u);
              return (() => {
                if (K.tag === "Nothing")
                  return 0;
                if (K.tag === "Just")
                  return K._1;
                f();
              })() + (() => {
                if (st.tag === "Nothing")
                  return 0;
                if (st.tag === "Just")
                  return st._1;
                f();
              })() - ((() => {
                if (gt.tag === "Nothing")
                  return 0;
                if (gt.tag === "Just")
                  return gt._1;
                f();
              })() + (() => {
                if (dt.tag === "Nothing")
                  return 0;
                if (dt.tag === "Just")
                  return dt._1;
                f();
              })() + $(_t) + m(_t, xt[rt]));
            })()) : at;
          }
          const Bt = ut(_t)(n.nodeIndex), $t = (() => {
            if (Bt.tag === "Nothing")
              return 0;
            if (Bt.tag === "Just")
              return Bt._1 + 1 | 0;
            f();
          })();
          return $t >= 0 && $t < 0 ? ee(at)((() => {
            const xt = ut([][$t])(S.x), mt = ut([][$t])(u), rt = ut(_t)(S.x), K = ut(_t)(u);
            return (() => {
              if (xt.tag === "Nothing")
                return 0;
              if (xt.tag === "Just")
                return xt._1;
              f();
            })() + (() => {
              if (mt.tag === "Nothing")
                return 0;
              if (mt.tag === "Just")
                return mt._1;
              f();
            })() - ((() => {
              if (rt.tag === "Nothing")
                return 0;
              if (rt.tag === "Just")
                return rt._1;
              f();
            })() + (() => {
              if (K.tag === "Nothing")
                return 0;
              if (K.tag === "Just")
                return K._1;
              f();
            })() + $(_t) + m(_t, [][$t]));
          })()) : at;
        })(-M)(oo(c)(H)), ot = j > 0 ? j : 0, Z = { ...S, x: j > 0 ? l(H, ot, S.x) : S.x, trace: [...S.trace, { ...et, avail: j, shift: ot }] };
        return j > 0 ? Z : { ...Z, stack: [...Z.stack, O] };
      }
      return { ...S, stack: [...S.stack, O], trace: [...S.trace, et], x: S.x };
    }
    f();
  }, q = x(ct(Mm))({
    x: $e(z((E) => b(
      E,
      (() => {
        const S = ut(E)(c.root), O = (() => {
          if (S.tag === "Nothing")
            return E;
          if (S.tag === "Just")
            return S._1;
          f();
        })(), I = ut(O)(X.x), W = ut((() => {
          const M = ut(O)(X.sink);
          if (M.tag === "Nothing")
            return O;
          if (M.tag === "Just")
            return M._1;
          f();
        })())(P), Q = (() => {
          if (I.tag === "Just")
            return I._1;
          if (I.tag === "Nothing")
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
  })(X.queue), R = x(ct(jm))({ ...q, stack: [] })(Ln(q.stack));
  return { x: R.x, queue: X.queue, trace: R.trace };
}, e2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (g) => n2(t)(n)(e)(r)(o)(i)(s)(u)(c)(a)(g).x, r2 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = (c, a, g) => {
    const _ = ut(a)(e), d = (() => {
      if (_.tag === "Nothing")
        return 0.5;
      if (_.tag === "Just")
        return _._1._1 / 2;
      f();
    })(), l = c.from.node === a ? c.from.port : c.to.node === a ? c.to.port : J;
    if (l.tag === "Just") {
      const h = ut(a)(n);
      if (h.tag === "Just") {
        const $ = jt((p) => p.id === l._1)(h._1);
        if ($.tag === "Just") {
          const p = nt($._1.offset) * nt(4);
          return g === "North" || g === "South" ? p : 0;
        }
        if ($.tag === "Nothing") {
          const p = Sr(o)(c.id)(g)(d);
          return g === "North" || g === "South" ? p : 0;
        }
        f();
      }
      if (h.tag === "Nothing") {
        const $ = Sr(o)(c.id)(g)(d);
        return g === "North" || g === "South" ? $ : 0;
      }
      f();
    }
    if (l.tag === "Nothing") {
      const h = Sr(o)(c.id)(g)(d);
      return g === "North" || g === "South" ? h : 0;
    }
    f();
  }, u = (c) => (a) => (g) => (_) => {
    let d = c, l = a, h = g, $ = _, p = !0, m;
    for (; p; ) {
      const y = d, N = l, T = h, k = Rt((L) => J, (L) => (G) => v("Just", { head: L, tail: G }), $);
      if (k.tag === "Nothing") {
        p = !1, m = y;
        continue;
      }
      if (k.tag === "Just") {
        const L = k._1.head, G = jt((Y) => Y.from.node === T && Y.to.node === L || Y.from.node === L && Y.to.node === T)(r), D = (() => {
          if (G.tag === "Nothing")
            return N + 0;
          if (G.tag === "Just")
            return N + (s(G._1, T, G._1.from.node === T ? hn : dn) - s(
              G._1,
              L,
              G._1.from.node === L ? hn : dn
            ));
          f();
        })();
        d = U(C)(L)(D)(y), l = D, h = L, $ = k._1.tail;
        continue;
      }
      f();
    }
    return m;
  };
  return x((c) => (a) => {
    const g = Rt((l) => J, (l) => (h) => v("Just", { head: l, tail: h }), oo(t)(a)), _ = (() => {
      if (g.tag === "Nothing")
        return U(C)(a)(0)(A);
      if (g.tag === "Just")
        return u(U(C)(g._1.head)(0)(A))(0)(g._1.head)(g._1.tail);
      f();
    })(), d = x((l) => (h) => Je(l)(-h._2))(0)(cu(_));
    return x((l) => (h) => U(C)(h._1)(h._2 + d)(l))(c)(cu(_));
  })(A)(Ar(C.compare)((() => {
    const c = (a, g) => {
      if (a.tag === "Leaf")
        return g;
      if (a.tag === "Node")
        return c(a._5, zt("Cons", a._4, c(a._6, g)));
      f();
    };
    return Lt(Xt.foldr, c(t.root, Yt));
  })()));
}, o2 = (t) => (n) => {
  const e = (o, i, s) => mn(3)(i) === "$d:" && wf(
    X0,
    (() => {
      const u = ut(i)(t.preds);
      if (u.tag === "Nothing")
        return [];
      if (u.tag === "Just")
        return u._1;
      f();
    })()
  ), r = (o) => (i) => (s) => (u) => (c) => (a) => (g) => {
    let _ = o, d = i, l = u, h = a, $ = g, p = !0, m;
    for (; p; ) {
      const y = _, N = d, T = l, w = h, k = $, L = N.length;
      if (k >= L) {
        p = !1, m = y;
        continue;
      }
      const G = k >= 0 && k < N.length ? v("Just", N[k]) : J, D = (() => {
        if (G.tag === "Nothing")
          return "";
        if (G.tag === "Just")
          return G._1;
        f();
      })(), Y = e(t, D);
      if (k === (L - 1 | 0) || Y) {
        const X = (() => {
          if (Y) {
            const P = ut(D)(t.preds), B = (() => {
              if (P.tag === "Nothing")
                return [];
              if (P.tag === "Just")
                return P._1;
              f();
            })();
            if (0 < B.length) {
              const tt = T - 1 | 0, ct = ut(B[0])(t.nodeIndex);
              if (ct.tag === "Nothing")
                return tt;
              if (ct.tag === "Just")
                return ct._1;
              f();
            }
          }
          return T - 1 | 0;
        })();
        _ = x((P) => (B) => {
          if (B >= 0 && B < N.length) {
            const tt = N[B];
            return e(t, tt) ? P : x((ct) => (q) => {
              const R = ut(q)(t.nodeIndex), E = (() => {
                if (R.tag === "Nothing")
                  return 0;
                if (R.tag === "Just")
                  return R._1;
                f();
              })();
              return E < w || E > X ? U(C)(q + "→" + tt)()(ct) : ct;
            })(P)((() => {
              const ct = ut(tt)(t.preds);
              if (ct.tag === "Nothing")
                return [];
              if (ct.tag === "Just")
                return ct._1;
              f();
            })());
          }
          return e(t, "") ? P : x((tt) => (ct) => {
            const q = ut(ct)(t.nodeIndex), R = (() => {
              if (q.tag === "Nothing")
                return 0;
              if (q.tag === "Just")
                return q._1;
              f();
            })();
            return R < w || R > X ? U(C)(ct + "→")()(tt) : tt;
          })(P)((() => {
            const tt = ut("")(t.preds);
            if (tt.tag === "Nothing")
              return [];
            if (tt.tag === "Just")
              return tt._1;
            f();
          })());
        })(y)(It(0, k)), d = N, l = T, h = X, $ = k + 1 | 0;
        continue;
      }
      _ = y, d = N, l = T, h = w, $ = k + 1 | 0;
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
  })(A)(It(1, n.length - 2 | 0));
}, i2 = (t) => (n) => (e) => (r) => (o) => {
  const i = zn(n), s = x((u) => (c) => {
    const a = x((g) => (_) => {
      const d = (() => {
        if (o === "HRight") {
          const p = ut(_)(t.preds);
          if (p.tag === "Nothing")
            return [];
          if (p.tag === "Just")
            return p._1;
          f();
        }
        if (o === "HLeft") {
          const p = ut(_)(t.succs);
          if (p.tag === "Nothing")
            return [];
          if (p.tag === "Just")
            return p._1;
        }
        f();
      })(), l = d.length;
      if (l === 0)
        return g;
      const h = Ce(l - 1 | 0, 2), $ = Ce(l, 2);
      return x((p) => (m) => {
        if ((() => {
          const y = ut(_)(p.align);
          if (y.tag === "Nothing")
            return _ !== _;
          if (y.tag === "Just")
            return y._1 !== _;
          f();
        })())
          return p;
        if (m >= 0 && m < d.length) {
          const y = ut(d[m])(t.nodeIndex), N = (() => {
            if (y.tag === "Nothing")
              return 0;
            if (y.tag === "Just")
              return y._1;
            f();
          })();
          if (!(Na(d[m] + "→" + _)(e) || Na(_ + "→" + d[m])(e)) && (() => {
            if (r === "VDown")
              return p.r < N;
            if (r === "VUp")
              return p.r > N;
            f();
          })()) {
            const T = ut(d[m])(p.root), w = (() => {
              if (T.tag === "Nothing")
                return d[m];
              if (T.tag === "Just")
                return T._1;
              f();
            })();
            return {
              root: U(C)(_)(w)(p.root),
              align: U(C)(d[m])(_)(U(C)(_)(w)(p.align)),
              r: N
            };
          }
        }
        return p;
      })(g)((() => {
        if (r === "VDown")
          return It(h, $);
        if (r === "VUp")
          return Ln(It(h, $));
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
        return Ln(c);
      f();
    })());
    return { root: a.root, align: a.align };
  })({ root: $e(z((u) => b(u, u))(i)), align: $e(z((u) => b(u, u))(i)) })((() => {
    if (o === "HRight")
      return n;
    if (o === "HLeft")
      return Ln(n);
    f();
  })());
  return { root: s.root, align: s.align };
}, ei = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
  const g = i2(n)(e)(u)(c)(a), _ = r2(g)(o)(r)(i)(s)(a);
  return P_()((d) => (l) => v(
    "Just",
    (() => {
      const h = ut(d)(_);
      if (h.tag === "Nothing")
        return l + 0;
      if (h.tag === "Just")
        return l + h._1;
      f();
    })()
  ))(e2(t)(n)(e)(r)(o)(i)(s)(_)(g)(c)(a));
}, xa = (t) => (n) => Ft((e) => (r) => x((o) => (i) => i >= 0 && i < n.length ? i >= 0 && i < t.length ? o + n[i] + t[i] : o + n[i] + 0 : i >= 0 && i < t.length ? o + 1 + t[i] : o + 1)(0)((() => {
  const o = It(0, n.length - 1 | 0);
  return e < 1 ? [] : bt(0, e, o);
})()))(n), s2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = Um(0)(n.length - 1 | 0), c = nt(t.layerGap), a = s(__(u, c)), g = cm(q0(o)(a)(r)(i)(A))(a);
  return z((_) => {
    const d = Km(_)(g);
    return d.tag === "Just" && d._1 > 0 ? Je(c)(2 + nt(d._1 - 1 | 0) * 2.5) : c;
  })(It(0, u - 1 | 0));
}, Z0 = (t) => (n) => (e) => (r) => wf(
  (o) => x((i) => (s) => {
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
), u2 = (t) => (n) => (e) => (r) => {
  const o = kt((i) => (s) => ft.compare(i.w)(s.w))(z((i) => ({ l: i, w: j0(i) }))(lt(
    Z0()(n)(e),
    r
  )));
  return 0 < o.length ? v("Just", o[0].l) : J;
}, c2 = (t) => (n) => {
  const e = $e(zn(z(Ft((o) => (i) => b(i, o)))(t))), r = (o) => kt((i) => (s) => it.compare((() => {
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
          return A;
        if (i.tag === "Node")
          return Ot("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(x((i) => (s) => vt(C)(rn)(s.to.node)([s.from.node])(i))(A)(n));
    })(),
    succs: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return A;
        if (i.tag === "Node")
          return Ot("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(x((i) => (s) => vt(C)(rn)(s.from.node)([s.to.node])(i))(A)(n));
    })(),
    nodeIndex: e
  };
}, a2 = (t) => (n) => {
  const e = kt((_) => (d) => ft.compare(_.w)(d.w))(Ft((_) => (d) => ({ i: _, l: d, w: j0(d) }))(n)), r = 0 < e.length ? v("Just", e[0]) : J, o = (() => {
    if (r.tag === "Just")
      return r._1.i;
    if (r.tag === "Nothing")
      return 0;
    f();
  })(), i = o >= 0 && o < n.length ? v("Just", n[o]) : J, s = (() => {
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
            h = ee(y)(N._1), $ = N._2;
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
  })(), u = (_) => x((d) => (l) => Je(d)((() => {
    const h = ut(l._1)(t);
    if (h.tag === "Nothing")
      return l._2 + 1;
    if (h.tag === "Just")
      return l._2 + h._1._1;
    f();
  })()))(-999999)(cu(_)), c = o >= 0 && o < n.length ? v("Just", n[o]) : J, a = (() => {
    if (c.tag === "Just")
      return u(c._1);
    if (c.tag === "Nothing")
      return 0;
    f();
  })(), g = wn(
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
    Ft((_) => (d) => ze(_)(2) === 0 ? s - ((h) => ($) => {
      let p = h, m = $, y = !0, N;
      for (; y; ) {
        const T = p, w = m;
        if (w.tag === "Nil") {
          y = !1, N = T;
          continue;
        }
        if (w.tag === "Cons") {
          p = ee(T)(w._1), m = w._2;
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
          return h($._5, zt("Cons", $._4, h($._6, p)));
        f();
      };
      return h(d, Yt);
    })()) : a - u(d))(n)
  );
  return t2(x((_) => (d) => {
    const l = kt(ft.compare)(yt(ut(d))(g));
    return U(C)(d)(l.length === 4 ? 1 < l.length && 2 < l.length ? (l[1] + l[2]) / 2 : 0 : 0 < l.length ? l[0] : 0)(_);
  })(A)(Ar(C.compare)(zn(z((_) => {
    const d = (l) => {
      if (l.tag === "Leaf")
        return A;
      if (l.tag === "Node")
        return Ot("Node", l._1, l._2, l._3, void 0, d(l._5), d(l._6));
      f();
    };
    return Lt(On.foldr, d(_));
  })(g)))));
}, f2 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = c2(n)(o), u = o2(s)(n), c = { nodeGap: t.nodeGap * 4 | 0 }, a = Cn(
    C.compare,
    Sn,
    $e(z((l) => b(l, b(1, 1)))(lt(
      X0,
      zn(n)
    ))),
    (() => {
      const l = (h) => {
        if (h.tag === "Leaf")
          return A;
        if (h.tag === "Node")
          return Ot("Node", h._1, h._2, h._3, b(h._4._1 * nt(4), h._4._2), l(h._5), l(h._6));
        f();
      };
      return l(e);
    })()
  ), g = [
    ei(c)(s)(n)(a)(r)(o)(i)(u)(pa)(ma),
    ei(c)(s)(n)(a)(r)(o)(i)(u)($a)(ma),
    ei(c)(s)(n)(a)(r)(o)(i)(u)(pa)(ya),
    ei(c)(s)(n)(a)(r)(o)(i)(u)($a)(ya)
  ], _ = a2(a)(g);
  if (Z0()(n)(a)(_))
    return _;
  const d = u2()(n)(a)(g);
  if (d.tag === "Just")
    return d._1;
  if (d.tag === "Nothing")
    return g[0];
  f();
}, g2 = (t) => (n) => (e) => (r) => {
  const o = xf(
    J,
    hf,
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
  const o = lt((s) => Hn(ge)(s.node)(n), t), i = (() => {
    if (e === "Vertical") {
      if (r === "Start")
        return x((s) => (u) => ee(s)(u.position._1))(99999)(o);
      if (r === "End")
        return x((s) => (u) => Je(s)(u.position._1))(0)(o);
      if (r === "Center") {
        const s = x((u) => (c) => u + c.position._1)(0)(o);
        return o.length === 0 ? 0 : s / nt(o.length);
      }
      f();
    }
    if (e === "Horizontal") {
      if (r === "Start")
        return x((s) => (u) => ee(s)(u.position._2))(99999)(o);
      if (r === "End")
        return x((s) => (u) => Je(s)(u.position._2))(0)(o);
      if (r === "Center") {
        const s = x((u) => (c) => u + c.position._2)(0)(o);
        return o.length === 0 ? 0 : s / nt(o.length);
      }
    }
    f();
  })();
  return z((s) => {
    if (Hn(ge)(s.node)(n)) {
      if (e === "Vertical")
        return { ...s, position: b(i, s.position._2) };
      if (e === "Horizontal")
        return { ...s, position: b(s.position._1, i) };
      f();
    }
    return s;
  })(t);
}, _2 = (t) => (n) => x((e) => (r) => r.tag === "AlignGroup" ? l2(e)(r._1.nodes)(r._1.axis)(r._1.alignment) : r.tag === "RelativePosition" ? g2(e)(r._1.anchor)(r._1.target)(r._1.offset) : e)(n)(t), d2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const c = z((_) => x((d) => (l) => Je(d)((() => {
    const h = ut(l)(r);
    if (h.tag === "Nothing")
      return 1;
    if (h.tag === "Just")
      return h._1._2;
    f();
  })()))(1)(_))(e), a = f2(t)(e)(r)(o)(i)(u), g = xa(s2(t)(e)(r)(o)(i)(s)((_) => {
    const d = xa(_)(c);
    return zn(Ft((l) => (h) => Ft(($) => (p) => ({
      node: p,
      position: b(
        (() => {
          const m = ut(p)(a);
          return (() => {
            if (m.tag === "Nothing")
              return 0;
            if (m.tag === "Just")
              return m._1;
            f();
          })() / nt(4);
        })(),
        l >= 0 && l < d.length ? d[l] : 0
      ),
      size: (() => {
        const m = mn(3)(p) === "$d:" ? b(0, 1) : b(1, 1), y = ut(p)(r);
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
  return _2(n)(zn(Ft((_) => (d) => Ft((l) => (h) => ({
    node: h,
    position: b(
      (() => {
        const $ = ut(h)(a);
        return (() => {
          if ($.tag === "Nothing")
            return 0;
          if ($.tag === "Just")
            return $._1;
          f();
        })() / nt(4);
      })(),
      _ >= 0 && _ < g.length ? g[_] : 0
    ),
    size: (() => {
      const $ = mn(3)(h) === "$d:" ? b(0, 1) : b(1, 1), p = ut(h)(r);
      if (p.tag === "Nothing")
        return $;
      if (p.tag === "Just")
        return p._1;
      f();
    })(),
    layer: _,
    order: l
  }))(d))(e)));
}, Gs = /* @__PURE__ */ zu(_i)(/* @__PURE__ */ dr(32)), Ja = /* @__PURE__ */ zu(_i)(/* @__PURE__ */ dr(31)), Lo = /* @__PURE__ */ (() => {
  const t = b1("25214903917");
  if (t.tag === "Nothing")
    return Bf;
  if (t.tag === "Just")
    return t._1;
  f();
})(), Eo = /* @__PURE__ */ Ys(/* @__PURE__ */ zu(_i)(/* @__PURE__ */ dr(48)))(_i), h2 = (t) => {
  const n = L1(t);
  return yo(Qf((() => {
    if (n.tag === "Nothing")
      return Bf;
    if (n.tag === "Just")
      return n._1;
    f();
  })())(Lo))(Eo);
}, au = /* @__PURE__ */ dr(11), bi = (t) => (n) => {
  const e = yo(ui(ci(n)(Lo))(au))(Eo);
  return b(
    (() => {
      const r = Lf(T1(Xs(e)(dr(48 - t | 0))));
      if (r.tag === "Nothing")
        return 0;
      if (r.tag === "Just")
        return r._1;
      f();
    })(),
    e
  );
}, p2 = (t) => {
  const n = bi(26)(t), e = bi(27)(n._2);
  return b((nt(n._1) * zs(2)(27) + nt(e._1)) / zs(2)(53), e._2);
}, $2 = (t) => (n) => {
  const e = x((r) => (o) => {
    const i = p2(r.finalR);
    return { rs: [...r.rs, i._1], finalR: i._2 };
  })({ rs: [], finalR: t })(n);
  return b(
    z((r) => r.x)(kt((r) => (o) => ft.compare(r.k)(o.k))(wn((r) => (o) => ({ x: r, k: o }), n, e.rs))),
    e.finalR
  );
}, m2 = (t) => {
  const n = yo(ui(ci(t)(Lo))(au))(Eo), e = yo(ui(ci(n)(Lo))(au))(Eo);
  return b(
    ui(ci((() => {
      const r = Xs(n)(dr(16));
      return Cc.compare(r)(Ja) !== "LT" ? Ys(r)(Gs) : r;
    })())(Gs))((() => {
      const r = Xs(e)(dr(16));
      return Cc.compare(r)(Ja) !== "LT" ? Ys(r)(Gs) : r;
    })()),
    e
  );
}, So = (t) => (e) => {
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
}, Li = (t) => (e) => {
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
}, ac = /* @__PURE__ */ nn(C)(Ht), Lr = (t) => (e) => {
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
}, Ei = /* @__PURE__ */ nn(C)(Ht), y2 = /* @__PURE__ */ Eu(Bo), N2 = /* @__PURE__ */ x(Rr)(0), x2 = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ta = (t) => (e) => {
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
      const o = Ue(qt, J, t, e[n], e);
      if (o.tag === "Just")
        return Ue(qt, J, n, r, o._1);
      if (o.tag === "Nothing")
        return J;
      f();
    }
  }
  return J;
}, T2 = (t) => (n) => (e) => (r) => (o) => ac(x((i) => (s) => {
  const u = kt((c) => (a) => it.compare((() => {
    const g = So(c.id)(o);
    if (g.tag === "Nothing")
      return 1e6;
    if (g.tag === "Just")
      return g._1;
    f();
  })())((() => {
    const g = So(a.id)(o);
    if (g.tag === "Nothing")
      return 1e6;
    if (g.tag === "Just")
      return g._1;
    f();
  })()))(lt((c) => Li(c.to.node)(e), lt((c) => c.from.node === s, r)));
  return {
    ranks: [...i.ranks, ...Ft((c) => (a) => b(a.id, nt((i.rankSum + c | 0) + 1 | 0)))(u)],
    rankSum: i.rankSum + u.length | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), v2 = (t) => (n) => (e) => (r) => (o) => ac(x((i) => (s) => {
  const u = kt((a) => (g) => {
    const _ = it.compare((() => {
      const d = Lr(g.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      f();
    })())((() => {
      const d = Lr(a.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      f();
    })());
    return _ === "EQ" ? it.compare((() => {
      const d = So(a.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      f();
    })())((() => {
      const d = So(g.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      f();
    })()) : _;
  })(lt((a) => Li(a.from.node)(e), lt((a) => a.to.node === s, r))), c = u.length;
  return {
    ranks: [...i.ranks, ...Ft((a) => (g) => b(g.id, nt((i.rankSum + c | 0) - a | 0)))(u)],
    rankSum: i.rankSum + c | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), fu = (t) => (n) => (e) => {
  const r = Ei(Ft((u) => (c) => b(c, u))(t)), o = Ei(Ft((u) => (c) => b(c, u))(n)), i = yt((u) => {
    const c = Lr(u.from.node)(r), a = Lr(u.to.node)(o);
    if (c.tag === "Just" && a.tag === "Just")
      return v("Just", b(c._1, a._1));
    const g = Lr(u.from.node)(o), _ = Lr(u.to.node)(r);
    return g.tag === "Just" && _.tag === "Just" ? v("Just", b(_._1, g._1)) : J;
  })(e), s = i.length;
  return x((u) => (c) => x((a) => (g) => c >= 0 && c < i.length && g >= 0 && g < i.length && ((i[c]._1 - i[g]._1 | 0) * (i[c]._2 - i[g]._2 | 0) | 0) < 0 ? a + 1 | 0 : a)(u)(It(c + 1 | 0, s - 1 | 0)))(0)(It(0, s - 2 | 0));
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
          const $ = d[l], p = d[h];
          if (qn((T) => T.before === $ && T.after === p, r)) {
            c = d, a = l + 1 | 0;
            continue;
          }
          const m = Ue(qt, J, l, p, d), y = (() => {
            if (m.tag === "Just")
              return Ue(qt, J, l + 1 | 0, $, m._1);
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
          if (fu(n)(N)(e) < fu(n)(d)(e)) {
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
}, ri = (t) => (n) => x((e) => (r) => {
  if (r >= 0 && r < t.length) {
    const o = t[r], i = r + 1 | 0;
    if (i >= 0 && i < t.length)
      return e + fu(o)(t[i])(n) | 0;
  }
  return e;
})(0)(It(0, t.length - 2 | 0)), k2 = /* @__PURE__ */ (() => {
  const t = (n) => {
    if (n.length < 7) {
      const s = (u) => (c) => {
        let a = u, g = c, _ = !0, d;
        for (; _; ) {
          const l = a, h = g, $ = h - 1 | 0;
          if ($ >= 0 && $ < l.length) {
            if (h >= 0 && h < l.length && h > 0 && l[$].key > l[h].key) {
              const p = J2(h - 1 | 0)(h)(l);
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
      return x((u) => (c) => s(u)(c))(n)(It(1, n.length - 1 | 0));
    }
    const e = Ce(n.length, 2), r = t(bt(0, e, n)), o = t(bt(e, n.length, n));
    return ((s) => (u) => (c) => {
      let a = s, g = u, _ = c, d = !0, l;
      for (; d; ) {
        const h = a, $ = g, p = _;
        if ($ >= 0 && $ < r.length) {
          if (p >= 0 && p < o.length) {
            if (r[$].key > o[p].key) {
              a = Dt(h)(o[p]), g = $, _ = p + 1 | 0;
              continue;
            }
            a = Dt(h)(r[$]), g = $ + 1 | 0, _ = p;
            continue;
          }
          d = !1, l = [...h, ...$ < 1 ? r : bt($, r.length, r)];
          continue;
        }
        d = !1, l = [...h, ...p < 1 ? o : bt(p, o.length, o)];
      }
      return l;
    })([])(0)(0);
  };
  return t;
})(), b2 = (t) => (n) => (e) => {
  const r = yt((a) => a.tag === "OrderConstraint" ? v("Just", { before: a._1.before, after: a._1.after }) : J)(t.constraints), o = (a) => x((g) => (_) => {
    const d = _.after, l = _.before, h = _r(qt, J, (p) => p === l, g), $ = _r(qt, J, (p) => p === d, g);
    if (h.tag === "Just" && $.tag === "Just" && h._1 > $._1) {
      const p = vf(qt, J, h._1, g), m = (() => {
        if (p.tag === "Nothing")
          return g;
        if (p.tag === "Just")
          return p._1;
        f();
      })(), y = Tf(qt, J, $._1, l, m);
      if (y.tag === "Nothing")
        return m;
      if (y.tag === "Just")
        return y._1;
      f();
    }
    return g;
  })(a)(r), i = ac(Ft((a) => (g) => b(g.id, a))(e)), s = (a, g, _) => {
    const d = a.length;
    return x((l) => (h) => {
      const $ = g ? h - 1 | 0 : h + 1 | 0, p = $ >= 0 && $ < l._1.length ? v("Just", l._1[$]) : J;
      if (p.tag === "Just") {
        const m = h >= 0 && h < l._1.length ? v("Just", l._1[h]) : J;
        if (m.tag === "Just") {
          const y = Ei(Ft((L) => (G) => b(G, L))(p._1)), N = Ei(Ft((L) => (G) => b(G, L))(m._1)), T = g ? T2(p._1)(y)(N)(e)(i) : v2(p._1)(y)(N)(e)(i), w = x((L) => (G) => {
            const D = yt((X) => So(X.id)(T))(lt(g ? (X) => X.to.node === G._2 && Li(X.from.node)(y) : (X) => X.from.node === G._2 && Li(X.to.node)(y), e));
            if (D.length === 0)
              return { ...L, items: [...L.items, { n: G._2, key: J, origIdx: G._1 }] };
            const Y = bi(24)(L.r);
            return {
              items: [
                ...L.items,
                {
                  n: G._2,
                  key: v("Just", (N2(D) + (nt(Y._1) * 4172325152040912e-24 - 0.03500000014901161)) / nt(D.length)),
                  origIdx: G._1
                }
              ],
              r: Y._2
            };
          })({ items: [], r: l._2 })(Ft(Xe)(m._1)), k = Ue(
            qt,
            J,
            h,
            w2(o(z((L) => L.n)(k2((() => {
              const L = w.items, G = (Y) => (X) => {
                let P = Y, B = X, tt = !0, ct;
                for (; tt; ) {
                  const q = P, R = B;
                  if (q >= 0 && q < L.length) {
                    if (L[q].key.tag === "Just") {
                      tt = !1, ct = L[q].key._1;
                      continue;
                    }
                    if (L[q].key.tag === "Nothing") {
                      P = q + 1 | 0, B = R;
                      continue;
                    }
                    f();
                  }
                  tt = !1, ct = R;
                }
                return ct;
              };
              return ((Y) => (X) => (P) => {
                let B = Y, tt = X, ct = P, q = !0, R;
                for (; q; ) {
                  const E = B, S = tt, O = ct;
                  if (E >= 0 && E < L.length) {
                    if (L[E].key.tag === "Just") {
                      B = E + 1 | 0, tt = L[E].key._1, ct = [...O, { n: L[E].n, key: L[E].key._1, origIdx: L[E].origIdx }];
                      continue;
                    }
                    if (L[E].key.tag === "Nothing") {
                      const I = (S + G(E + 1 | 0)(S + 1)) / 2;
                      B = E + 1 | 0, tt = I, ct = [...O, { n: L[E].n, key: I, origIdx: L[E].origIdx }];
                      continue;
                    }
                    f();
                  }
                  q = !1, R = O;
                }
                return R;
              })(0)(-1)([]);
            })()))))(p._1)(e)(r),
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
      if (p.tag === "Nothing")
        return b(l._1, l._2);
      f();
    })(b(a, _))(g ? It(1, d - 1 | 0) : Ln(It(0, d - 2 | 0)));
  }, u = x((a) => (g) => U(C)(g.from.node)()(U(C)(g.to.node)()(a)))(A)(e), c = x((a) => (g) => {
    if (a.result.crossings === 0)
      return a;
    const _ = (y) => (N) => (T) => (w) => {
      let k = y, L = N, G = T, D = w, Y = !0, X;
      for (; Y; ) {
        const P = k, B = L, tt = G, ct = D;
        if (tt === 0) {
          Y = !1, X = { layout: P, crossings: 0, random: ct };
          continue;
        }
        const q = s(P, B, ct), R = ri(q._1)(e);
        if (R < tt) {
          k = q._1, L = !B, G = R, D = q._2;
          continue;
        }
        Y = !1, X = { layout: P, crossings: tt, random: q._2 };
      }
      return X;
    }, d = bi(1)(a.result.random), l = d._1 !== 0, h = t.modelOrder.tag === "Leaf", $ = (a.firstTry || a.secondTry) && !h ? a.firstTry : l, p = (() => {
      if (!h) {
        const w = s(n, $, d._2);
        return _(w._1)(!$)(ri(w._1)(e))(w._2);
      }
      const y = $ ? 0 : x2(0)(n.length - 1 | 0), N = y >= 0 && y < n.length ? v("Just", n[y]) : J;
      if (N.tag === "Just" && N._1.length > 1) {
        const w = lt((k) => Ta(k)(u), N._1);
        if (w.length > 1) {
          const k = $2(d._2)(w), L = k._1, G = Ue(
            qt,
            J,
            y,
            o(x((D) => (Y) => Ta(Y)(u) ? D.idx >= 0 && D.idx < L.length ? { idx: D.idx + 1 | 0, result: [...D.result, L[D.idx]] } : { idx: D.idx, result: [...D.result, Y] } : { idx: D.idx, result: [...D.result, Y] })({ idx: 0, result: [] })(N._1).result),
            n
          );
          if (G.tag === "Just") {
            const D = s(G._1, $, k._2);
            return _(D._1)(!$)(ri(D._1)(e))(D._2);
          }
        }
      }
      const T = s(n, $, d._2);
      return _(T._1)(!$)(ri(T._1)(e))(T._2);
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
      random: yo(Qf(m2(h2(1))._1)(Lo))(Eo)
    },
    firstTry: t.modelOrder.tag !== "Leaf",
    secondTry: !1
  })(It(1, t.iterations)).result;
  return n.length <= 0 || t.iterations <= 0 ? n : c.layout;
}, L2 = (t) => t, va = (t) => (e) => {
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
}, zr = (t) => (e) => {
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
}, Co = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = C.compare(n._1)(e._1);
      return r === "LT" ? yn : r === "GT" ? Nn : C.compare(n._2)(e._2);
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
      const u = Co.compare(t)(s._3);
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
}, C2 = /* @__PURE__ */ L2("Greedy"), Is = (t) => (n) => (e) => x((r) => (o) => {
  if (o.from.node === o.to.node)
    return r;
  if (o.from.node === n && !va(o.to.node)(r.marks)) {
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
      })() && !Hn(ge)(o.to.node)(r.sources);
    })() ? { ...r, inDeg: u, sources: [...r.sources, o.to.node] } : { ...r, inDeg: u };
  }
  if (o.to.node === n && !va(o.from.node)(r.marks)) {
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
      })() && !Hn(ge)(o.from.node)(r.sinks);
    })() ? { ...r, outDeg: u, sinks: [...r.sinks, o.from.node] } : { ...r, outDeg: u };
  }
  return r;
})({ ...e, remaining: lt((r) => r !== n, e.remaining) })(t), P2 = /* @__PURE__ */ x((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return U(C)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return U(C)(n._1.node)(0)(t);
    if (n._1.pin.tag === "LastLayer")
      return U(C)(n._1.node)(99999)(t);
  }
  return t;
})(A), tg = (t) => (n) => (e) => {
  const r = Rn(n)(t), o = Rn(e)(t);
  return r.tag === "Just" && o.tag === "Just" && r._1 > o._1;
}, ng = (t) => (n) => (e) => (r) => {
  if (zr(e)(r.visited) || zr(e)(r.visiting))
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
    visiting: $o(C)(e)(o.visiting),
    visited: U(C)(e)()(o.visited)
  };
}, G2 = (t) => (n) => (e) => (r) => (o) => tg(t)(e)(o) ? { ...r, backEdges: U(Co)(b(e, o))()(r.backEdges) } : zr(o)(r.visiting) ? { ...r, backEdges: U(Co)(b(e, o))()(r.backEdges) } : zr(o)(r.visited) ? r : ng(t)(n)(o)(r), I2 = (t) => (n) => (e) => {
  const r = (d) => {
    let l = d, h = !0, $;
    for (; h; ) {
      const p = l, m = Rt((y) => J, (y) => (N) => v("Just", { head: y, tail: N }), p.sinks);
      if (m.tag === "Just") {
        l = Is(e)(m._1.head)({
          ...p,
          sinks: m._1.tail,
          marks: U(C)(m._1.head)(p.nextRight)(p.marks),
          nextRight: p.nextRight - 1 | 0
        });
        continue;
      }
      if (m.tag === "Nothing") {
        const y = Rt((N) => J, (N) => (T) => v("Just", { head: N, tail: T }), p.sources);
        if (y.tag === "Just") {
          l = Is(e)(y._1.head)({
            ...p,
            sources: y._1.tail,
            marks: U(C)(y._1.head)(p.nextLeft)(p.marks),
            nextLeft: p.nextLeft + 1 | 0
          });
          continue;
        }
        if (y.tag === "Nothing") {
          const N = (w) => {
            const k = Rn(w)(p.outDeg), L = Rn(w)(p.inDeg);
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
          }, T = kt((w) => (k) => {
            const L = it.compare(N(k))(N(w));
            return L === "EQ" ? it.compare((() => {
              const G = Rn(w)(n);
              if (G.tag === "Nothing")
                return 1e6;
              if (G.tag === "Just")
                return G._1;
              f();
            })())((() => {
              const G = Rn(k)(n);
              if (G.tag === "Nothing")
                return 1e6;
              if (G.tag === "Just")
                return G._1;
              f();
            })()) : L;
          })(p.remaining);
          if (0 < T.length) {
            const w = T[0];
            l = Is(e)(w)({
              ...p,
              remaining: lt((k) => k !== w, p.remaining),
              marks: U(C)(w)(p.nextLeft)(p.marks),
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
  }, o = Ar(C.compare)([...z((d) => d.from.node)(e), ...z((d) => d.to.node)(e)]), i = lt((d) => d.from.node !== d.to.node, e), s = x((d) => (l) => vt(C)(on)(l.to.node)(1)(d))(A)(i), u = x((d) => (l) => vt(C)(on)(l.from.node)(1)(d))(A)(i), c = lt(
    (d) => {
      const l = Rn(d)(s);
      if (l.tag === "Nothing")
        return !0;
      if (l.tag === "Just")
        return l._1 === 0;
      f();
    },
    o
  ), a = lt(
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
    remaining: lt((d) => !Hn(ge)(d)(c) && !Hn(ge)(d)(a), o),
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
    if (tg(t)(l.from.node)(l.to.node))
      return U(Co)(b(l.from.node, l.to.node))()(d);
    const h = Rn(l.from.node)(_), $ = Rn(l.to.node)(_);
    return h.tag === "Just" && $.tag === "Just" && h._1 > $._1 ? U(Co)(b(l.from.node, l.to.node))()(d) : d;
  })(A)(e);
}, A2 = /* @__PURE__ */ x((t) => (n) => vt(C)(rn)(n.from.node)([n.to.node])(t))(A), F2 = (t) => (n) => {
  const e = A2(n), r = Ar(C.compare)([...z((i) => i.from.node)(n), ...z((i) => i.to.node)(n)]), o = x((i) => (s) => U(C)(s.to.node)()(i))(A)(n);
  return x((i) => (s) => ng(t)(e)(s)(i))({
    visiting: A,
    visited: A,
    backEdges: A
  })([...lt((i) => !zr(i)(o), r), ...lt((i) => zr(i)(o), r)]).backEdges;
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
}, eg = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, B2 = /* @__PURE__ */ x((t) => (n) => U(C)(n)()(t))(A), Si = (t) => (e) => {
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
}, Q2 = /* @__PURE__ */ A0(C), he = (t) => (e) => {
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
}, wa = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, As = (t) => (e) => {
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
}, W2 = /* @__PURE__ */ nn(it)(Ht), D2 = (t) => (n) => Cn(C.compare, Sn, t, n), rg = /* @__PURE__ */ Ft((t) => (n) => ({ src: n.src, tgt: n.tgt, delta: 1, weight: 1, eid: t })), H2 = (t) => x((n) => (e) => ({
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
          s = eg(g)(_._1), u = _._2;
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
  return Q2(t)(rg(lt((r) => Si(r.src)(e) && Si(r.tgt)(e), n)));
}, z2 = (t) => (n) => {
  const e = x((o) => (i) => vt(C)(rn)(i.tgt)([i.src])(vt(C)(rn)(i.src)([
    i.tgt
  ])(o)))(A)(n), r = (o) => (i) => (s) => {
    let u = o, c = i, a = s, g = !0, _;
    for (; g; ) {
      const d = u, l = c, h = a, $ = Rt((p) => J, (p) => (m) => v("Just", { head: p, tail: m }), d);
      if ($.tag === "Nothing") {
        g = !1, _ = { nodes: h };
        continue;
      }
      if ($.tag === "Just") {
        if (Si($._1.head)(l)) {
          u = $._1.tail, c = l, a = h;
          continue;
        }
        u = [
          ...$._1.tail,
          ...(() => {
            const p = he($._1.head)(e);
            if (p.tag === "Nothing")
              return [];
            if (p.tag === "Just")
              return p._1;
            f();
          })()
        ], c = U(C)($._1.head)()(l), a = [...h, $._1.head];
        continue;
      }
      f();
    }
    return _;
  };
  return x((o) => (i) => {
    if (Si(i)(o.visited))
      return o;
    const s = r([i])(o.visited)([]);
    return {
      ...o,
      visited: x((u) => (c) => U(C)(c)()(u))(o.visited)(s.nodes),
      components: [...o.components, s.nodes]
    };
  })({ visited: A, components: [] })(t).components;
}, q2 = (t) => (n) => (e) => {
  const r = x((i) => (s) => vt(C)(on)(s.tgt)(1)(i))(A)(n), o = x((i) => (s) => vt(C)(on)(s.src)(1)(i))(A)(n);
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
      mIn: wa(y.mIn)((() => {
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
      mOut: wa(y.mOut)((() => {
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
    const $ = (g - l | 0) + 1 | 0, p = (g + h | 0) - 1 | 0;
    if (p < $)
      return i;
    const m = x((y) => (N) => {
      const T = As(N)(i.filling), w = (() => {
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
        const y = As(g)(i.filling);
        if (y.tag === "Nothing")
          return 0;
        if (y.tag === "Just")
          return y._1;
        f();
      })()
    })(It($, p));
    return m.best === g ? i : {
      layers: U(C)(s)(m.best)(i.layers),
      filling: U(it)(g)((() => {
        const y = As(g)(i.filling);
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
    ))(It(
      0,
      x((i) => (s) => eg(i)((() => {
        const u = he(s)(e);
        if (u.tag === "Nothing")
          return 0;
        if (u.tag === "Just")
          return u._1;
        f();
      })()))(0)(t)
    )))
  })(t).layers;
}, Y2 = (t) => (n) => q2(t)(rg(n))(x(D2)(A)(H2(z((e) => O2(e)(n))(z2(t)(n))))), X2 = (t) => t, fr = (t) => (e) => {
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
}, Ci = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, og = /* @__PURE__ */ (() => {
  const t = te.unfoldr(ke);
  return (n) => t(Kn("IterNode", n, we));
})(), V2 = /* @__PURE__ */ X2("NetworkSimplex"), U2 = (t) => (n) => x((e) => (r) => {
  const o = x(Ci)(0)(yt((i) => fr(i)(e))(r));
  return x((i) => (s) => U(C)(s)(o)(i))(e)(r);
})(n)(t), K2 = (t) => (n) => ({
  layers: z((e) => lt(
    (r) => {
      const o = fr(r)(n);
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
          i = Ci(a)(g._1), s = g._2;
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
    const i = fr(o.from.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() || (() => {
    const i = fr(o.to.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() ? J : v("Just", { src: o.from.node, tgt: o.to.node }))(t)))(og(e));
}, j2 = (t) => (n) => (e) => (r) => {
  const o = (c) => (a) => {
    const g = fr(a)(c);
    if (g.tag === "Just")
      return c;
    if (g.tag === "Nothing") {
      const _ = lt(
        (l) => l !== a,
        (() => {
          const l = fr(a)(t);
          if (l.tag === "Nothing")
            return [];
          if (l.tag === "Just")
            return l._1;
          f();
        })()
      ), d = x(o)(c)(_);
      return U(C)(a)(1 + x(Ci)(0)(yt((l) => fr(l)(d))(_)) | 0)(d);
    }
    f();
  }, i = x(o)(A)(e), u = ((c) => (a) => {
    let g = c, _ = a, d = !0, l;
    for (; d; ) {
      const h = g, $ = _;
      if ($.tag === "Nil") {
        d = !1, l = h;
        continue;
      }
      if ($.tag === "Cons") {
        g = Ci(h)($._1), _ = $._2;
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
  })())(og(r));
}, Z2 = /* @__PURE__ */ x((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return U(C)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return U(C)(n._1.node)(0)(t);
  }
  return t;
})(A), ty = /* @__PURE__ */ x((t) => (n) => vt(C)(rn)(n.to.node)([n.from.node])(t))(A), ny = /* @__PURE__ */ x((t) => (n) => vt(C)(rn)(n.from.node)([n.to.node])(t))(A), ey = (t) => (n) => (e) => (r) => {
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
}, ka = (t) => (e) => {
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
}, ba = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Po = /* @__PURE__ */ nn(C)(Ht), iy = /* @__PURE__ */ nn(C)(Ht), La = /* @__PURE__ */ (() => {
  const t = z((n) => ({ start: n.end, end: n.start, direction: n.direction }));
  return (n) => Ln(t(n));
})(), sy = (t) => (n) => (e) => (r) => {
  const o = ry(z((s) => b(s.edge, s))(r)), i = (s) => 0 < s.nodes.length && (() => {
    const u = oy(s.edgeId)(e);
    return u.tag === "Just" && s.nodes[0] !== u._1._1;
  })();
  return z((s) => {
    if (s.nodes.length <= 2) {
      const g = ka(s.edgeId)(o);
      if (g.tag === "Just") {
        const _ = i(s), d = bo(ko(_ ? La(g._1.segments) : g._1.segments));
        return { ...g._1, edge: s.edgeId, segments: d, bends: wn((l) => (h) => l.end, d, bt(1, d.length, d)), reversed: _ };
      }
      if (g.tag === "Nothing")
        return { edge: s.edgeId, segments: [], bends: [], bendType: [], jumps: [], reversed: !1 };
      f();
    }
    const u = Jt(yt((g) => ka(g)(o))(wn(
      (g) => (_) => s.edgeId + ":" + g + "->" + _,
      s.nodes,
      bt(1, s.nodes.length, s.nodes)
    )))((g) => g.segments), c = i(s), a = bo(ko(c ? La(u) : u));
    return {
      edge: s.edgeId,
      segments: a,
      bends: wn((g) => (_) => g.end, a, bt(1, a.length, a)),
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
  compactPostRouting: !1
}, ay = (t) => ({
  pos: b(0, 0),
  size: b(
    x((n) => (e) => ba(n)(e.position._1 + e.size._1))(0)(t),
    x((n) => (e) => ba(n)(e.position._2 + e.size._2))(0)(t)
  )
}), fy = (t) => (n) => (e) => {
  const r = Po(z((a) => b(a.id, a.ports))(n.nodes)), o = lt((a) => mn(3)(a.node) !== "$d:", e.placements), i = sy(e.withDummies.chains)(e.acyclic.reversedEdges)(iy(z((a) => b(
    a.id,
    b(a.from.node, a.to.node)
  ))(n.edges)))(Am(e.withDummies.edges)(e.placements)(r)(e.withDummies.chains)(V0(e.ordered)(lt(
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
    return a(Po(z((g) => b(g.id, g.size))(n.nodes)));
  })()))), s = t.compactPostRouting ? rm()({
    nodes: o,
    edges: n.edges,
    paths: i,
    ports: r
  }) : { nodes: o, edges: i }, u = z((a) => {
    const g = bo(ko(a.segments));
    return { ...a, segments: g, bends: wn((_) => (d) => _.end, g, bt(1, g.length, g)) };
  })(s.edges), c = Ft((a) => (g) => ({ ...g, jumps: Hm(a)(g)(u) }))(u);
  return { nodes: s.nodes, edges: c, boundingBox: ay(s.nodes), metrics: Ep(s.nodes)(c)(0) };
}, gy = (t) => (n) => (e) => {
  const r = Po(z((i) => b(i.id, i.size))(n.nodes)), o = {
    ...e,
    placements: d2({ nodeGap: t.nodeGap, layerGap: t.layerGap })(n.constraints)(e.ordered)(r)(Po(z((i) => b(
      i.id,
      i.ports
    ))(n.nodes)))(e.withDummies.edges)(e.withDummies.chains)(V0(e.ordered)(e.withDummies.edges)((() => {
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
    modelOrder: Po(Ft((r) => (o) => b(o.id, r))(n.nodes))
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
}, ss = (t) => t, hy = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, gu = /* @__PURE__ */ ss("TopSide"), lu = /* @__PURE__ */ ss("BottomSide"), _u = /* @__PURE__ */ ss("LeftSide"), du = /* @__PURE__ */ ss("RightSide"), py = (t) => {
  const n = ft.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = ft.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, Ea = (t) => (n) => (e) => {
  const r = hy(t.h * 0.12)(t.w * 0.2), o = t.w / 2;
  return (n < 0 ? t.y + r : t.y + t.h - r) + n * r * En(py((() => {
    const i = (e - (t.x + o)) / o;
    return 1 - i * i;
  })()));
}, He = (t) => (n) => (e) => (r) => {
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
      o = Ge, i = _, s = d, u = l;
      continue;
    }
    if (g === "Cylinder") {
      if (d === "TopSide") {
        c = !1, a = Ea(_)(-1)(l);
        continue;
      }
      if (d === "BottomSide") {
        c = !1, a = Ea(_)(1)(l);
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
    o = Ge, i = _, s = d, u = l;
  }
  return a;
}, Sa = (t) => (n) => {
  const e = n.y - t.y, r = e < 0 ? -e : e, o = n.x - (t.x + t.w), i = o < 0 ? -o : o, s = n.x - t.x, u = s < 0 ? -s : s, c = n.y - (t.y + t.h), a = c < 0 ? -c : c;
  return r <= a && r <= u && r <= i ? gu : a <= u && a <= i ? lu : u <= i ? _u : du;
}, fc = (t) => (e) => {
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
}, Go = (t) => (e) => {
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
  const t = te.unfoldr(ke);
  return (n) => t(Kn("IterNode", n, we));
})(), us = /* @__PURE__ */ nn(C)(Ht), my = (t) => (e) => {
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
}, Ny = /* @__PURE__ */ x((t) => (n) => U(C)(n)()(t))(A), xy = /* @__PURE__ */ x((t) => (n) => U(C)(n)()(t))(A), cs = $r.traverse(Oi), Pi = /* @__PURE__ */ nn(C)(Ht), Jy = (t) => (n) => Cn(C.compare, Sn, t, n), Ty = /* @__PURE__ */ x((t) => (n) => U(C)(n)()(t))(A), vy = /* @__PURE__ */ nn(C)(Ht), wy = (t) => (n) => Cn(C.compare, Sn, t, n), ky = (t) => (e) => {
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
}, Ca = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, by = (t) => (n) => ({
  ...n,
  edges: us(z((e) => b(
    e._1,
    (() => {
      const r = fc(e._1)(t);
      if (r.tag === "Nothing")
        return e._2;
      if (r.tag === "Just") {
        const o = Go(r._1._2)(n.nodes), i = Go(r._1._1)(n.nodes), s = (() => {
          if (i.tag === "Nothing")
            return e._2;
          if (i.tag === "Just") {
            const u = Rt((c) => J, (c) => (a) => v("Just", { head: c, tail: a }), e._2);
            if (u.tag === "Nothing")
              return e._2;
            if (u.tag === "Just") {
              const c = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, a = Sa(c)(u._1.head);
              return [
                (() => {
                  if (a === "TopSide")
                    return { ...u._1.head, y: He(i._1.shape)(c)(gu)(u._1.head.x) };
                  if (a === "BottomSide")
                    return { ...u._1.head, y: He(i._1.shape)(c)(lu)(u._1.head.x) };
                  if (a === "LeftSide")
                    return { ...u._1.head, x: He(i._1.shape)(c)(_u)(u._1.head.y) };
                  if (a === "RightSide")
                    return { ...u._1.head, x: He(i._1.shape)(c)(du)(u._1.head.y) };
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
          const u = zi(s);
          if (u.tag === "Nothing")
            return s;
          if (u.tag === "Just")
            return Dt(u._1.init)((() => {
              const c = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, a = Sa(c)(u._1.last);
              if (a === "TopSide")
                return { ...u._1.last, y: He(o._1.shape)(c)(gu)(u._1.last.x) };
              if (a === "BottomSide")
                return { ...u._1.last, y: He(o._1.shape)(c)(lu)(u._1.last.x) };
              if (a === "LeftSide")
                return { ...u._1.last, x: He(o._1.shape)(c)(_u)(u._1.last.y) };
              if (a === "RightSide")
                return { ...u._1.last, x: He(o._1.shape)(c)(du)(u._1.last.y) };
              f();
            })());
        }
      }
      f();
    })()
  ))($y(n.edges)))
}), Ly = (t) => (n) => (e) => {
  const r = jt((o) => o.id === e)(t.graph.edges);
  if (r.tag === "Just")
    return v("Just", r._1);
  if (r.tag === "Nothing")
    return fc(e)(n);
  f();
}, Ey = (t) => (n) => (e) => (r) => ({
  x: r.position._1 * t,
  y: r.position._2 * t,
  w: r.size._1 * t,
  h: r.size._2 * t,
  label: (() => {
    const o = Go(r.node)(n);
    if (o.tag === "Just")
      return o._1;
    if (o.tag === "Nothing")
      return r.node;
    f();
  })(),
  shape: (() => {
    const o = Go(r.node)(e);
    if (o.tag === "Nothing")
      return Ge;
    if (o.tag === "Just")
      return o._1;
    f();
  })()
}), Sy = (t) => ({ id: t, size: b(1, 1), ports: [], label: v("Just", t), shape: Ge }), Cy = (t) => (n) => (e) => (r) => b(r.node, Ey(t)(n)(e)(r)), ig = (t) => {
  const n = ts(`
`)(t);
  return n.length === 0 ? [""] : n;
}, sg = (t) => {
  const n = (e, r) => {
    if (e.tag === "Leaf")
      return r;
    if (e.tag === "Node")
      return n(e._5, zt("Cons", e._4, n(e._6, r)));
    f();
  };
  return Lt(Xt.foldr, n(t.interiors, Yt));
}, Py = (t) => us(yt((n) => v(
  "Just",
  b(n.edge, { id: n.edge, from: { node: n.from, port: J }, to: { node: n.to, port: J } })
))(Jt(t.scenes)((n) => n.tag === "DataFlow" ? yt((e) => e.kind.tag === "SendToken" ? v("Just", e.kind._1) : J)(n._1.events) : []))), ug = (t) => {
  const n = O1(t), e = lt((o) => my(o.id)(n.nodes), t.graph.nodes), r = lt((o) => yy(o.id)(n.edges), t.graph.edges);
  return {
    nodes: [
      ...e,
      ...z(Sy)(Lt(
        On.foldr,
        Pe(C.compare, n.nodes, Ny(z((o) => o.id)(e)))
      ))
    ],
    edges: [
      ...r,
      ...yt(Ly(t)(Py(t)))(Lt(
        On.foldr,
        Pe(C.compare, n.edges, xy(z((o) => o.id)(r)))
      ))
    ],
    constraints: t.graph.constraints
  };
}, Gy = (t) => {
  const n = cs((e) => {
    const r = m0(y0)((() => {
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
  })(ug(t).nodes);
  return () => {
    const e = n();
    return Pi(e);
  };
}, cg = (t) => {
  const n = Gy(t);
  return () => {
    const e = n(), r = cs(cg)(sg(t))();
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
  nodes: Pi(z(Cy(nt(4) * t)(n)(e))(r.nodes)),
  edges: us(z(Ay(t))(r.edges)),
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
  const n = cs((e) => {
    const r = m0(y0)(e);
    return () => {
      const o = r();
      return b(e, { labelW: o, charCount: Me(Or(e)), lineCount: 1 });
    };
  })(Lt(
    On.foldr,
    Ty(Jt(Lt(On.foldr, Ry(t)))(ig))
  ));
  return () => {
    const e = n();
    return vy(e);
  };
}, ag = (t) => {
  const n = By(t);
  return () => {
    const e = n(), r = cs(ag)(sg(t))();
    return x(wy)(e)(r);
  };
}, Qy = nt(4) * 8, Wy = (t) => (n) => {
  const e = kp(Qy)(t)(wp(vp)(ug(n)));
  return by(us(z((r) => b(r.id, b(r.from.node, r.to.node)))(e.edges)))(Fy(8)(Pi(z((r) => b(
    r.id,
    (() => {
      if (r.label.tag === "Just")
        return r.label._1;
      if (r.label.tag === "Nothing")
        return r.id;
      f();
    })()
  ))(e.nodes)))(Pi(z((r) => b(r.id, r.shape))(e.nodes)))(dy(cy)(e).result));
}, Dy = (t) => Jt(t.scenes)((n) => {
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
      return u.tag === "Just" ? v("Just", { w: u._1.labelW + 28, h: nt(yp(1)(u._1.lineCount)) * 13.2 + 12 }) : J;
    })(Jt(o)(ig));
    return i.length === 0 ? J : v(
      "Just",
      { w: x(Ca)(0)(z((s) => s.w)(i)), h: x(Ca)(0)(z((s) => s.h)(i)) }
    );
  };
  return x((o) => (i) => {
    if (i.kind.tag === "SendToken") {
      const s = fc(i.kind._1.edge)(e.edges), u = r(i.kind._1.labels);
      if (u.tag === "Just" && s.tag === "Just") {
        const c = u._1;
        return vt(C)(rn)(i.kind._1.edge)(z((a) => ({ x: a.x + 14 + c.w, y: a.y - 6 - 8 - c.h }))(s._1))(o);
      }
      return o;
    }
    if (i.kind.tag === "FillNodeWithoutTransition") {
      const s = Go(i.kind._1.node)(e.nodes), u = r(i.kind._1.labels);
      return u.tag === "Just" && s.tag === "Just" ? vt(C)(rn)("__fill__:" + i.kind._1.node)((() => {
        const c = s._1.y - u._1.h - 14, a = s._1.x + s._1.w / 2, g = a - u._1.w / 2, _ = a + u._1.w / 2, d = s._1.y - 14;
        return [{ x: g, y: c }, { x: _, y: c }, { x: g, y: d }, { x: _, y: d }];
      })())(o) : o;
    }
    f();
  })(A)(Dy(n));
}, fg = (t) => (n) => (e) => ({
  layout: (() => {
    const r = Wy(t)(e);
    return { ...r, chipExtras: Hy(n)(e)(r) };
  })(),
  interiors: (() => {
    const r = fg(t)(n), o = (i) => {
      if (i.tag === "Leaf")
        return A;
      if (i.tag === "Node")
        return Ot("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
      f();
    };
    return o(e.interiors);
  })()
}), Pa = (t) => (e) => {
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
}, hu = (t) => (n) => (e) => {
  const r = t < 0.05 ? t : 0.05, o = (s, u) => {
    if (u.tag === "Leaf")
      return s;
    if (u.tag === "Node")
      return o(
        (() => {
          const c = Pa(u._3)(e), a = (() => {
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
              const a = s(u, c._5), g = Pa(c._3)(i);
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
  var t = {}, n = "Pure", e = "Throw", r = "Catch", o = "Sync", i = "Async", s = "Bind", u = "Bracket", c = "Fork", a = "Sequential", g = "Map", _ = "Apply", d = "Alt", l = "Cons", h = "Resume", $ = "Release", p = "Finalizer", m = "Finalized", y = "Forked";
  function N(I, W, Q, M) {
    this.tag = I, this._1 = W, this._2 = Q, this._3 = M;
  }
  function T(I) {
    var W = function(Q, M, V) {
      return new N(I, Q, M, V);
    };
    return W.tag = I, W;
  }
  function w(I) {
    return new N(n, void 0);
  }
  function k(I) {
    try {
      I();
    } catch (W) {
      setTimeout(function() {
        throw W;
      }, 0);
    }
  }
  function L(I, W, Q) {
    try {
      return W(Q());
    } catch (M) {
      return I(M);
    }
  }
  function G(I, W, Q) {
    try {
      return W(Q)();
    } catch (M) {
      return Q(I(M))(), w;
    }
  }
  var D = (function() {
    var I = 1024, W = 0, Q = 0, M = new Array(I), V = !1;
    function H() {
      var et;
      for (V = !0; W !== 0; )
        W--, et = M[Q], M[Q] = void 0, Q = (Q + 1) % I, et();
      V = !1;
    }
    return {
      isDraining: function() {
        return V;
      },
      enqueue: function(et) {
        var j;
        W === I && (j = V, H(), V = j), M[(Q + W) % I] = et, W++, V || H();
      }
    };
  })();
  function Y(I) {
    var W = {}, Q = 0, M = 0;
    return {
      register: function(V) {
        var H = Q++;
        V.onComplete({
          rethrow: !0,
          handler: function(et) {
            return function() {
              M--, delete W[H];
            };
          }
        })(), W[H] = V, M++;
      },
      isEmpty: function() {
        return M === 0;
      },
      killAll: function(V, H) {
        return function() {
          if (M === 0)
            return H();
          var et = 0, j = {};
          function ot(at) {
            j[at] = W[at].kill(V, function(_t) {
              return function() {
                delete j[at], et--, I.isLeft(_t) && I.fromLeft(_t) && setTimeout(function() {
                  throw I.fromLeft(_t);
                }, 0), et === 0 && H();
              };
            })();
          }
          for (var Z in W)
            W.hasOwnProperty(Z) && (et++, ot(Z));
          return W = {}, Q = 0, M = 0, function(at) {
            return new N(o, function() {
              for (var _t in j)
                j.hasOwnProperty(_t) && j[_t]();
            });
          };
        };
      }
    };
  }
  var X = 0, P = 1, B = 2, tt = 3, ct = 4, q = 5, R = 6;
  function E(I, W, Q) {
    var M = 0, V = X, H = Q, et = null, j = null, ot = null, Z = null, at = null, _t = 0, Qt = 0, Tt = null, Bt = !0;
    function $t(K) {
      for (var st, gt, dt; ; )
        switch (st = null, gt = null, dt = null, V) {
          case B:
            V = P;
            try {
              H = ot(H), Z === null ? ot = null : (ot = Z._1, Z = Z._2);
            } catch (At) {
              V = q, et = I.left(At), H = null;
            }
            break;
          case tt:
            I.isLeft(H) ? (V = q, et = H, H = null) : ot === null ? V = q : (V = B, H = I.fromRight(H));
            break;
          case P:
            switch (H.tag) {
              case s:
                ot && (Z = new N(l, ot, Z)), ot = H._2, V = P, H = H._1;
                break;
              case n:
                ot === null ? (V = q, H = I.right(H._1)) : (V = B, H = H._1);
                break;
              case o:
                V = tt, H = L(I.left, I.right, H._1);
                break;
              case i:
                V = ct, H = G(I.left, H._1, function(At) {
                  return function() {
                    M === K && (M++, D.enqueue(function() {
                      M === K + 1 && (V = tt, H = At, $t(M));
                    }));
                  };
                });
                return;
              case e:
                V = q, et = I.left(H._1), H = null;
                break;
              // Enqueue the Catch so that we can call the error handler later on
              // in case of an exception.
              case r:
                ot === null ? at = new N(l, H, at, j) : at = new N(l, H, new N(l, new N(h, ot, Z), at, j), j), ot = null, Z = null, V = P, H = H._1;
                break;
              // Enqueue the Bracket so that we can call the appropriate handlers
              // after resource acquisition.
              case u:
                _t++, ot === null ? at = new N(l, H, at, j) : at = new N(l, H, new N(l, new N(h, ot, Z), at, j), j), ot = null, Z = null, V = P, H = H._1;
                break;
              case c:
                V = tt, st = E(I, W, H._2), W && W.register(st), H._1 && st.run(), H = I.right(st);
                break;
              case a:
                V = P, H = O(I, W, H._1);
                break;
            }
            break;
          case q:
            if (ot = null, Z = null, at === null)
              V = R, H = j || et || H;
            else
              switch (st = at._3, dt = at._1, at = at._2, dt.tag) {
                // We cannot recover from an unmasked interrupt. Otherwise we should
                // continue stepping, or run the exception handler if an exception
                // was raised.
                case r:
                  j && j !== st && _t === 0 ? V = q : et && (V = P, H = dt._2(I.fromLeft(et)), et = null);
                  break;
                // We cannot resume from an unmasked interrupt or exception.
                case h:
                  j && j !== st && _t === 0 || et ? V = q : (ot = dt._1, Z = dt._2, V = B, H = I.fromRight(H));
                  break;
                // If we have a bracket, we should enqueue the handlers,
                // and continue with the success branch only if the fiber has
                // not been interrupted. If the bracket acquisition failed, we
                // should not run either.
                case u:
                  _t--, et === null && (gt = I.fromRight(H), at = new N(l, new N($, dt._2, gt), at, st), (j === st || _t > 0) && (V = P, H = dt._3(gt)));
                  break;
                // Enqueue the appropriate handler. We increase the bracket count
                // because it should not be cancelled.
                case $:
                  at = new N(l, new N(m, H, et), at, j), V = P, j && j !== st && _t === 0 ? H = dt._1.killed(I.fromLeft(j))(dt._2) : et ? H = dt._1.failed(I.fromLeft(et))(dt._2) : H = dt._1.completed(I.fromRight(H))(dt._2), et = null, _t++;
                  break;
                case p:
                  _t++, at = new N(l, new N(m, H, et), at, j), V = P, H = dt._1;
                  break;
                case m:
                  _t--, V = q, H = dt._1, et = dt._2;
                  break;
              }
            break;
          case R:
            for (var Nt in Tt)
              Tt.hasOwnProperty(Nt) && (Bt = Bt && Tt[Nt].rethrow, k(Tt[Nt].handler(H)));
            Tt = null, j && et ? setTimeout(function() {
              throw I.fromLeft(et);
            }, 0) : I.isLeft(H) && Bt && setTimeout(function() {
              if (Bt)
                throw I.fromLeft(H);
            }, 0);
            return;
          case X:
            V = P;
            break;
          case ct:
            return;
        }
    }
    function xt(K) {
      return function() {
        if (V === R)
          return Bt = Bt && K.rethrow, K.handler(H)(), function() {
          };
        var st = Qt++;
        return Tt = Tt || {}, Tt[st] = K, function() {
          Tt !== null && delete Tt[st];
        };
      };
    }
    function mt(K, st) {
      return function() {
        if (V === R)
          return st(I.right(void 0))(), function() {
          };
        var gt = xt({
          rethrow: !1,
          handler: function() {
            return st(I.right(void 0));
          }
        })();
        switch (V) {
          case X:
            j = I.left(K), V = R, H = j, $t(M);
            break;
          case ct:
            j === null && (j = I.left(K)), _t === 0 && (V === ct && (at = new N(l, new N(p, H(K)), at, j)), V = q, H = null, et = null, $t(++M));
            break;
          default:
            j === null && (j = I.left(K)), _t === 0 && (V = q, H = null, et = null);
        }
        return gt;
      };
    }
    function rt(K) {
      return function() {
        var st = xt({
          rethrow: !1,
          handler: K
        })();
        return V === X && $t(M), st;
      };
    }
    return {
      kill: mt,
      join: rt,
      onComplete: xt,
      isSuspended: function() {
        return V === X;
      },
      run: function() {
        V === X && (D.isDraining() ? $t(M) : D.enqueue(function() {
          $t(M);
        }));
      }
    };
  }
  function S(I, W, Q, M) {
    var V = 0, H = {}, et = 0, j = {}, ot = new Error("[ParAff] Early exit"), Z = null, at = t;
    function _t(xt, mt, rt) {
      var K = mt, st = null, gt = null, dt = 0, Nt = {}, At, Vt;
      t: for (; ; )
        switch (At = null, K.tag) {
          case y:
            if (K._3 === t && (At = H[K._1], Nt[dt++] = At.kill(xt, function(Pn) {
              return function() {
                dt--, dt === 0 && rt(Pn)();
              };
            })), st === null)
              break t;
            K = st._2, gt === null ? st = null : (st = gt._1, gt = gt._2);
            break;
          case g:
            K = K._2;
            break;
          case _:
          case d:
            st && (gt = new N(l, st, gt)), st = K, K = K._1;
            break;
        }
      if (dt === 0)
        rt(I.right(void 0))();
      else
        for (Vt = 0, At = dt; Vt < At; Vt++)
          Nt[Vt] = Nt[Vt]();
      return Nt;
    }
    function Qt(xt, mt, rt) {
      var K, st, gt, dt, Nt, At;
      for (I.isLeft(xt) ? (K = xt, st = null) : (st = xt, K = null); ; ) {
        if (gt = null, dt = null, Nt = null, At = null, Z !== null)
          return;
        if (mt === null) {
          M(K || st)();
          return;
        }
        if (mt._3 !== t)
          return;
        switch (mt.tag) {
          case g:
            K === null ? (mt._3 = I.right(mt._1(I.fromRight(st))), st = mt._3) : mt._3 = K;
            break;
          case _:
            if (gt = mt._1._3, dt = mt._2._3, K) {
              if (mt._3 = K, Nt = !0, At = et++, j[At] = _t(ot, K === gt ? mt._2 : mt._1, function() {
                return function() {
                  delete j[At], Nt ? Nt = !1 : rt === null ? Qt(K, null, null) : Qt(K, rt._1, rt._2);
                };
              }), Nt) {
                Nt = !1;
                return;
              }
            } else {
              if (gt === t || dt === t)
                return;
              st = I.right(I.fromRight(gt)(I.fromRight(dt))), mt._3 = st;
            }
            break;
          case d:
            if (gt = mt._1._3, dt = mt._2._3, gt === t && I.isLeft(dt) || dt === t && I.isLeft(gt))
              return;
            if (gt !== t && I.isLeft(gt) && dt !== t && I.isLeft(dt))
              K = st === gt ? dt : gt, st = null, mt._3 = K;
            else if (mt._3 = st, Nt = !0, At = et++, j[At] = _t(ot, st === gt ? mt._2 : mt._1, function() {
              return function() {
                delete j[At], Nt ? Nt = !1 : rt === null ? Qt(st, null, null) : Qt(st, rt._1, rt._2);
              };
            }), Nt) {
              Nt = !1;
              return;
            }
            break;
        }
        rt === null ? mt = null : (mt = rt._1, rt = rt._2);
      }
    }
    function Tt(xt) {
      return function(mt) {
        return function() {
          delete H[xt._1], xt._3 = mt, Qt(mt, xt._2._1, xt._2._2);
        };
      };
    }
    function Bt() {
      var xt = P, mt = Q, rt = null, K = null, st, gt;
      t: for (; ; )
        switch (st = null, gt = null, xt) {
          case P:
            switch (mt.tag) {
              case g:
                rt && (K = new N(l, rt, K)), rt = new N(g, mt._1, t, t), mt = mt._2;
                break;
              case _:
                rt && (K = new N(l, rt, K)), rt = new N(_, t, mt._2, t), mt = mt._1;
                break;
              case d:
                rt && (K = new N(l, rt, K)), rt = new N(d, t, mt._2, t), mt = mt._1;
                break;
              default:
                gt = V++, xt = q, st = mt, mt = new N(y, gt, new N(l, rt, K), t), st = E(I, W, st), st.onComplete({
                  rethrow: !1,
                  handler: Tt(mt)
                })(), H[gt] = st, W && W.register(st);
            }
            break;
          case q:
            if (rt === null)
              break t;
            rt._1 === t ? (rt._1 = mt, xt = P, mt = rt._2, rt._2 = t) : (rt._2 = mt, mt = rt, K === null ? rt = null : (rt = K._1, K = K._2));
        }
      for (at = mt, gt = 0; gt < V; gt++)
        H[gt].run();
    }
    function $t(xt, mt) {
      Z = I.left(xt);
      var rt;
      for (var K in j)
        if (j.hasOwnProperty(K)) {
          rt = j[K];
          for (K in rt)
            rt.hasOwnProperty(K) && rt[K]();
        }
      j = null;
      var st = _t(xt, at, mt);
      return function(gt) {
        return new N(i, function(dt) {
          return function() {
            for (var Nt in st)
              st.hasOwnProperty(Nt) && st[Nt]();
            return w;
          };
        });
      };
    }
    return Bt(), function(xt) {
      return new N(i, function(mt) {
        return function() {
          return $t(xt, mt);
        };
      });
    };
  }
  function O(I, W, Q) {
    return new N(i, function(M) {
      return function() {
        return S(I, W, Q, M);
      };
    });
  }
  return N.EMPTY = t, N.Pure = T(n), N.Throw = T(e), N.Catch = T(r), N.Sync = T(o), N.Async = T(i), N.Bind = T(s), N.Bracket = T(u), N.Fork = T(c), N.Seq = T(a), N.ParMap = T(g), N.ParApply = T(_), N.ParAlt = T(d), N.Fiber = E, N.Supervisor = Y, N.Scheduler = D, N.nonCanceler = w, N;
})();
let Fs = null;
function Oy() {
  return Fs || (typeof document > "u" ? null : Fs = document.createElement("canvas").getContext("2d"));
}
const Rs = /* @__PURE__ */ new Map();
function gg(t, n, e, r, o, i) {
  const s = `${e} ${n}px ${t}`, u = s + "|" + r;
  if (Rs.has(u)) return Rs.get(u);
  const c = Oy();
  if (!c) return i;
  c.font = s;
  const a = o(c.measureText(r)), g = typeof document < "u" ? document.fonts : null;
  if (!g || g.check(s)) Rs.set(u, a);
  else if (g && g.load)
    try {
      g.load(s);
    } catch {
    }
  return a;
}
const zy = (t, n, e, r) => gg(t, n, e, r, (o) => o.width, -1), qy = (t, n, e, r) => gg(
  t,
  n,
  e,
  r,
  (o) => ({ ascent: o.actualBoundingBoxAscent, descent: o.actualBoundingBoxDescent }),
  { ascent: -1, descent: -1 }
), lg = (t) => (n) => {
  const e = zy(t.family, t.size, t.weight, Or(n));
  return e < 0 ? nt(rs(n).length) * t.size * 0.62 : e;
}, _g = (t) => (n) => {
  const e = qy(t.family, t.size, t.weight, Or(n));
  return e.ascent < 0 ? { ascent: t.size * 0.72, descent: t.size * 0.2 } : e;
}, dg = (t) => t, hg = (t) => t, as = (t) => t, pg = (t) => t, Yy = (t) => t, $g = (t) => t, mg = (t) => t, Xy = /* @__PURE__ */ mg("BaselineTop"), qr = /* @__PURE__ */ mg("BaselineMiddle"), pu = /* @__PURE__ */ $g("AlignLeft"), fs = /* @__PURE__ */ $g("AlignCenter"), Tn = /* @__PURE__ */ Yy("RoundJoin"), le = /* @__PURE__ */ pg("ButtCap"), We = /* @__PURE__ */ pg("RoundCap"), Vy = /* @__PURE__ */ as("LayerPolyOut"), Uy = /* @__PURE__ */ as("LayerPolyIn"), Ky = /* @__PURE__ */ as("LayerNodeMask"), My = /* @__PURE__ */ as("LayerOverlay"), $u = /* @__PURE__ */ hg("NonZero"), jy = /* @__PURE__ */ hg("EvenOdd"), Ga = /* @__PURE__ */ dg("Normal"), ai = /* @__PURE__ */ dg("Difference"), en = { r: 255, g: 255, b: 255, a: 255 }, Ee = { r: 26, g: 26, b: 26, a: 255 }, Zy = (t) => t, yg = (t) => t, tN = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ie = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ng = (t) => (n) => (e) => {
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
}, mu = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, nN = (t) => (n) => (e) => {
  const r = ft.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ft.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, eN = /* @__PURE__ */ yg("FlatLevel"), rN = /* @__PURE__ */ yg("NestedLevel"), xg = /* @__PURE__ */ Zy("GenieSilhouette"), oN = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, yLift: 0 };
  const o = Kr(t);
  return { prng: o.prng, yLift: o.value * e.yJitter * r };
}, iN = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, dx: 0 };
  const o = Kr(t);
  return { prng: o.prng, dx: (o.value * 2 - 1) * e.xJitter * r };
}, Ia = (t) => (n) => {
  const e = n.cy - t.cy, r = n.cx - t.cx, o = En(r * r + e * e), i = (t.r * t.r - n.r * n.r + o * o) / (2 * o), s = En(tN(0)(t.r * t.r - i * i)), u = t.cx + i * r / o, c = t.cy + i * e / o, a = { x: u - s * e / o, y: c + s * r / o }, g = { x: u + s * e / o, y: c - s * r / o };
  return o === 0 || o > t.r + n.r ? { x: (t.cx + n.cx) / 2, y: t.cy } : a.y < g.y ? a : g;
}, sN = (t) => (n) => {
  const e = ie(n)(ie(t.w / 2)(t.h / 2));
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
  const s = Kr(t);
  return { prng: s.prng, r: o * (1 + s.value * i.rJitter) };
}, Jg = (t) => {
  const n = ie(t.w)(t.h) / 2;
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
  const r = Kr(t), o = n.length;
  return o === 0 ? { prng: t, idx: -1 } : {
    prng: r.prng,
    idx: (() => {
      const i = Ng(0)(o - 1 | 0)($n(Ne(r.value * nt(e))));
      return i >= 0 && i < n.length ? n[i] : -1;
    })()
  };
}, aN = (t) => (n) => {
  const e = Kr(t), r = n.length;
  return r === 0 ? { prng: t, idx: -1 } : {
    prng: e.prng,
    idx: (() => {
      const o = Ng(0)(r - 1 | 0)($n(Ne(e.value * nt(r))));
      return o >= 0 && o < n.length ? n[o] : -1;
    })()
  };
}, Tg = (t) => {
  const n = ie(t.w * 0.18)(t.h * 0.6);
  return [1, t.x + n, t.y, 2, t.x + t.w, t.y, 2, t.x + t.w - n, t.y + t.h, 2, t.x, t.y + t.h, 5];
}, vg = (t) => [
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
], wg = { rBase: 1.2, stepRatio: 0.7, rJitter: 0.35, yJitter: 0.2, xJitter: 0.2, heroShift: 0.2, smallScale: 0.85, smallShift: 0.15, seed: 7, minN: 3 }, fN = (t) => {
  const n = ie(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.x + e;
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
}, kg = (t) => {
  const n = ie(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + t.h + 5, o = t.y + n, i = r - n, s = t.x + e;
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
}, bg = (t) => (n) => {
  const e = n.y + n.h, r = x_(t.rBase * n.h)(n.w / (2 * (1 + (nt(t.minN) - 1) * t.stepRatio))), o = n.w - 2 * r, i = 2 * r * t.stepRatio, s = mu(t.minN)(o <= 0 || i <= 0 ? t.minN : $n(sr(o / i)) + 1 | 0), u = s >= 3 ? It(1, s - 2 | 0) : [], c = u.length, a = Ce(c + 1 | 0, 2), g = a < 1 ? [] : bt(0, a, u), _ = aN(t.seed)((() => {
    const p = c - a | 0;
    return p < 1 ? u : bt(p, u.length, u);
  })()), d = _.idx, l = cN(_.prng)(lt((p) => p !== d, g))(mu(1)(g.length - (Hn(Ir)(d)(g) ? 1 : 0) | 0)), h = l.idx, $ = s >= 2 ? o / (nt(s) - 1) : 0;
  return x((p) => (m) => {
    const y = m === h, N = m === d, T = m === 0 || m === (s - 1 | 0), w = uN(p.prng)(T)(N)(y)(r)(t), k = oN(w.prng)(T)(t)(n.h), L = iN(k.prng)(T)(t)($);
    return {
      prng: L.prng,
      circles: Dt(p.circles)({
        cx: n.x + nN(w.r)(n.w - w.r)((s >= 2 ? r + nt(m) / (nt(s) - 1) * o + L.dx : r + 0 * o + L.dx) + (N ? t.heroShift * $ : y ? -1 * t.smallShift * $ : 0)),
        cy: e - k.yLift,
        r: w.r
      })
    };
  })({ prng: l.prng, circles: [] })(It(0, s - 1 | 0)).circles;
}, Lg = (t) => (n) => {
  const e = t.length;
  return Ft((r) => (o) => ({
    c: o,
    p1: (() => {
      if (r === 0)
        return { x: o.cx - o.r, y: n };
      const i = r - 1 | 0;
      return i >= 0 && i < t.length ? Ia(t[i])(o) : { x: o.cx - o.r, y: n };
    })(),
    p2: (() => {
      if (r === (e - 1 | 0))
        return { x: o.cx + o.r, y: n };
      const i = r + 1 | 0;
      return i >= 0 && i < t.length ? Ia(o)(t[i]) : { x: o.cx + o.r, y: n };
    })()
  }))(t);
}, Eg = (t) => {
  const n = ie(t.h * 0.4)(t.w * 0.2);
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
  const r = cr(n.y - t.cy)(n.x - t.cx), o = cr(e.y - t.cy)(e.x - t.cx), i = o > r ? o - r : o + 6.283185307179586 - r, s = mu(1)($n(qi(i / 1.5707963267948966))), u = i / nt(s), c = 1.3333333333333333 * J_(u / 4);
  return Jt(It(0, s - 1 | 0))((a) => {
    const g = r + nt(a + 1 | 0) * u, _ = t.cx + t.r * re(g), d = t.cy + t.r * Un(g), l = r + nt(a) * u;
    return [
      4,
      t.cx + t.r * re(l) - c * t.r * Un(l),
      t.cy + t.r * Un(l) + c * t.r * re(l),
      _ + c * t.r * Un(g),
      d - c * t.r * re(g),
      _,
      d
    ];
  });
}, Sg = (t) => (n) => {
  const e = t.h * 0.38, r = Lg(bg(wg)({ x: t.x, y: t.y - e, w: t.w, h: e }))(t.y), o = ie(n)(ie(t.w / 2)(t.h / 2));
  return 0 < r.length ? [
    1,
    r[0].p1.x,
    r[0].p1.y,
    ...Jt(r)((i) => gN(i.c)(i.p1)(i.p2)),
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
}, Cg = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n === "Rectangle")
    return t.drawRoundedRect(e)(r)(o)(i);
  if (n === "Cylinder") {
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
  if (n === "Parallelogram") {
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
  if (n === "Diamond") {
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
  if (n === "Ellipse") {
    const s = Jg(e);
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
  if (n === "Cloud") {
    const s = Sg(e)(r);
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
}, yu = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, gc = (t) => (n) => (e) => {
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
}, Ho = (t) => (n) => (e) => {
  const r = n.fill;
  return () => {
    const o = r.value, i = q_(t)(e);
    if (o !== e)
      return i(), n.fill.value = e;
  };
}, gs = (t) => (n) => {
  const e = n.length, r = (i) => {
    if (i >= e)
      return () => {
      };
    const s = i >= 0 && i < n.length ? n[i] : 0;
    if (s === 1) {
      const u = Af(t)((() => {
        const a = i + 1 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })())((() => {
        const a = i + 2 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 2) {
      const u = to(t)((() => {
        const a = i + 1 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })())((() => {
        const a = i + 2 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 3) {
      const u = no(t)({
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
      const u = Ff(t), c = r(i + 1 | 0);
      return () => (u(), c());
    }
    return () => {
    };
  }, o = If(t);
  return () => (o(), r(0)());
}, hN = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = yu(i)(yu(r / 2)(o / 2)), u = Af(t)(n + s)(e);
  return () => (u(), to(t)(n + r - s)(e)(), no(t)({ cpx: n + r, cpy: e, x: n + r, y: e + s })(), to(t)(n + r)(e + o - s)(), no(t)({ cpx: n + r, cpy: e + o, x: n + r - s, y: e + o })(), to(t)(n + s)(e + o)(), no(t)({ cpx: n, cpy: e + o, x: n, y: e + o - s })(), to(t)(n)(e + s)(), no(t)({ cpx: n, cpy: e, x: n + s, y: e })(), Ff(t)());
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
}, yN = (t) => un(t.weight) + " " + _f(t.size) + "px " + t.family, Te = (t) => {
  const n = _f(nt(t.a) / 255);
  return t.a >= 255 ? "rgb(" + un(t.r) + "," + un(t.g) + "," + un(t.b) + ")" : "rgba(" + un(t.r) + "," + un(t.g) + "," + un(t.b) + "," + n + ")";
}, NN = (t) => (n) => (e) => (r) => {
  const o = Ho(t)(e)(Te(r));
  return () => (o(), K_(t)({ x: 0, y: 0, width: n.width, height: n.height })());
}, xN = (t) => (n) => (e) => {
  const r = n.font;
  return () => (r.value = "", n.fill.value = "", n.stroke.value = "", _N(t)({
    vx: e.viewport.vx,
    vy: e.viewport.vy,
    vw: e.viewport.vw,
    vh: e.viewport.vh,
    bgCss: Te(e.bgColor),
    dotCss: Te(e.dotColor),
    tile: e.tile,
    dotR: e.dotRadius
  })());
}, JN = (t) => (n) => (e) => (r) => {
  const o = Ho(t)(n)(Te(r));
  return () => (o(), gs(t)(e)(), Iu(t)());
}, TN = (t) => (n) => (e) => (r) => (o) => {
  const i = Ho(t)(n)(Te(r));
  return () => (i(), gc(t)(n)(Te(o.color))(), Pu(t)(o.width)(), Ui(t)((() => {
    if (o.lineJoin === "RoundJoin")
      return Vi;
    if (o.lineJoin === "BevelJoin")
      return Bu;
    if (o.lineJoin === "MiterJoin")
      return Qu;
    f();
  })())(), Ou(t)((() => {
    if (o.lineCap === "ButtCap")
      return Hu;
    if (o.lineCap === "RoundCap")
      return Wu;
    if (o.lineCap === "SquareCap")
      return Du;
    f();
  })())(), gs(t)(e)(), Iu(t)(), Gu(t)());
}, vN = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = If(t);
  return () => {
    if (s(), hN(t)(e.x)(e.y)(e.w)(e.h)(r)(), o.tag === "Just" ? (Ho(t)(n)(Te(o._1.color))(), Iu(t)()) : o.tag === "Nothing" || f(), i.tag === "Just")
      return gc(t)(n)(Te(i._1.color))(), Pu(t)(i._1.width)(), Ui(t)((() => {
        if (i._1.lineJoin === "RoundJoin")
          return Vi;
        if (i._1.lineJoin === "BevelJoin")
          return Bu;
        if (i._1.lineJoin === "MiterJoin")
          return Qu;
        f();
      })())(), Ou(t)((() => {
        if (i._1.lineCap === "ButtCap")
          return Hu;
        if (i._1.lineCap === "RoundCap")
          return Wu;
        if (i._1.lineCap === "SquareCap")
          return Du;
        f();
      })())(), Gu(t)();
    i.tag !== "Nothing" && f();
  };
}, wN = (t) => (n) => (e) => (r) => {
  const o = gc(t)(n)(Te(r.color));
  return () => (o(), Pu(t)(r.width)(), Ui(t)((() => {
    if (r.lineJoin === "RoundJoin")
      return Vi;
    if (r.lineJoin === "BevelJoin")
      return Bu;
    if (r.lineJoin === "MiterJoin")
      return Qu;
    f();
  })())(), Ou(t)((() => {
    if (r.lineCap === "ButtCap")
      return Hu;
    if (r.lineCap === "RoundCap")
      return Wu;
    if (r.lineCap === "SquareCap")
      return Du;
    f();
  })())(), gs(t)(e)(), Gu(t)());
}, Aa = (t) => (n) => (e) => {
  const r = Ho(t)(n)(Te(e.color));
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
}, Pg = {
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
  Apply0: () => Pg
}, bN = (t) => (n) => (e) => {
  const r = yu(n.width / e.vw)(n.height / e.vh), o = qs(t)({ translateX: (n.width - e.vw * r) / 2 - e.vx * r, translateY: (n.height - e.vh * r) / 2 - e.vy * r });
  return () => (o(), li(t)({ scaleX: r, scaleY: r })(), Ui(t)(Vi)());
}, LN = { pure: (t) => (n) => () => t, Apply0: () => Pg }, EN = { Applicative0: () => LN, Bind1: () => kN }, Gg = {
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
    const e = Aa(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  drawTextAffine: (t) => (n) => (e) => {
    const r = or(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", j_(e.ctx)(t)(), Aa(e.ctx)(e.styleCache)(n)(), ir(e.ctx)(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "";
    };
  },
  pushTransform: (t) => (n) => {
    const e = or(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", qs(n.ctx)({ translateX: t.tx, translateY: t.ty })(), li(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popTransform: (t) => {
    const n = ir(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBakedTransform: (t) => (n) => {
    const e = or(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", qs(n.ctx)({ translateX: t.tx, translateY: t.ty })(), li(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popBakedTransform: (t) => {
    const n = ir(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushClip: (t) => (n) => (e) => {
    const r = or(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0) {
        if (r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", gs(e.ctx)(t)(), n === "NonZero")
          return U_(e.ctx)();
        if (n === "EvenOdd")
          return lN(e.ctx)();
        f();
      }
    };
  },
  popClip: (t) => {
    const n = ir(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBlend: (t) => (n) => {
    const e = or(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        if (e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", t === "Normal")
          return Ec(n.ctx)(g1)();
        if (t === "Difference")
          return Ec(n.ctx)(l1)();
        f();
      }
    };
  },
  popBlend: (t) => {
    const n = ir(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushAlpha: (t) => (n) => {
    const e = or(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", V_(n.ctx)(t)();
    };
  },
  popAlpha: (t) => {
    const n = ir(t.ctx), e = t.maskDepth;
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
    const r = lg(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = _g(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => xg,
  Monad0: () => EN
}, SN = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Yr = (t) => (n) => (e) => {
  const r = SN(0.05)(1 - t - n);
  return e < t ? 0 : e > 1 - n ? 1 : (e - t) / r;
}, Fa = (t) => {
  const n = ft.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = ft.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, ls = (t) => {
  if (t.tag === "Hidden")
    return { alpha: 0, scale: 0 };
  if (t.tag === "Visible")
    return { alpha: 1, scale: 1 };
  if (t.tag === "PloppingIn")
    return { alpha: t._1 > 0 ? 1 : 0, scale: Jo(8)(0.6)(Fa(t._1)) };
  if (t.tag === "PloppingOut")
    return { alpha: t._1 < 1 ? 1 : 0, scale: Jo(8)(0.6)(Fa(1 - t._1)) };
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
function Ra(t, n) {
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
const Ba = (t) => (n) => (e) => {
  const r = Ra(t, n), o = Ra(t, e), i = AN(r, o);
  return { from: r, to: i };
};
function Qa(t) {
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
const Wa = (t) => (n) => (e) => (r) => {
  const o = n.length;
  if (o === 0) return [];
  const i = Qa(n), s = Qa(e), u = FN(i, s), c = new Array(o);
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
    const p = _ <= 1e-4 ? 0 : r.maxDelay * (1 - (c[l] - a) / _), m = Math.max(1e-4, 1 - p), y = BN((t - p) / m), N = y * y * (3 - 2 * y);
    d[l] = {
      x: h.x + ($.x - h.x) * N,
      y: h.y + ($.y - h.y) * N
    };
  }
  for (let l = 0; l < r.smoothPasses; l++)
    d = RN(0.5, d);
  return d;
}, ve = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Da = /* @__PURE__ */ x(Rr)(0), Ha = (t) => (n) => (e) => {
  const r = ft.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ft.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, QN = /* @__PURE__ */ x((t) => (n) => t + n.len)(0), Ig = (t) => {
  const n = Rt((e) => J, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Jt(bt(1, t.length, t))((e) => [2, e.x, e.y]), 5];
  f();
}, WN = (t) => (n) => {
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
}, DN = (t) => {
  const n = Rt((e) => J, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Jt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, HN = (t) => {
  const n = { x: t.x, y: t.y, w: t.w, h: t.h };
  if (t.shape === "Cylinder")
    return kg(n);
  if (t.shape === "Parallelogram")
    return Tg(n);
  if (t.shape === "Diamond")
    return Eg(n);
  if (t.shape === "Ellipse")
    return Jg(n);
  if (t.shape === "Document")
    return vg(n);
  if (t.shape === "Cloud")
    return Sg(n)(7);
  if (t.shape === "Rectangle")
    return WN(n)(7);
  f();
}, pn = (t) => (n) => (e) => z((r) => {
  const o = nt(r) / nt(e);
  return { x: t.x + (n.x - t.x) * o, y: t.y + (n.y - t.y) * o };
})(It(0, e - 1 | 0)), ON = (t) => {
  const n = ie(t.w * 0.18)(t.h * 0.6);
  return [
    ...pn({ x: t.x + n, y: t.y })({ x: t.x + t.w, y: t.y })(16),
    ...pn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w - n, y: t.y + t.h })(16),
    ...pn({ x: t.x + t.w - n, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(16),
    ...pn({ x: t.x, y: t.y + t.h })({ x: t.x + n, y: t.y })(16)
  ];
}, Xr = (t) => (n) => {
  const e = ve(t)(ve(n.w / 2)(n.h / 2));
  return { ...n, x: n.x + e, y: n.y + e, w: n.w - 2 * e, h: n.h - 2 * e };
}, Nu = (t) => (n) => {
  const e = n.y - t.y, r = n.x - t.x;
  return En(r * r + e * e);
}, zN = (t) => wn((n) => (e) => ({ a: n, b: e, len: Nu(n)(e) }), t, bt(1, t.length, t)), qN = (t) => (n) => {
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
    ...Jt(It(1, u - 2 | 0))((c) => {
      const a = c + 1 | 0, g = a >= 0 && a < n.length ? v("Just", n[a]) : J, _ = c >= 0 && c < n.length ? v("Just", n[c]) : J, d = c - 1 | 0, l = d >= 0 && d < n.length ? v("Just", n[d]) : J;
      if (l.tag === "Just" && _.tag === "Just" && g.tag === "Just") {
        const h = _._1, $ = Nu(h)(g._1), p = Nu(l._1)(h), m = ve(t)($ / 2), y = ve(t)(p / 2), N = $ > 0 ? m / $ : 0, T = h.x + (g._1.x - h.x) * N, w = h.y + (g._1.y - h.y) * N, k = p > 0 ? y / p : 0, L = h.x + (l._1.x - h.x) * k, G = h.y + (l._1.y - h.y) * k;
        return z((D) => {
          const Y = nt(D) / nt(10), X = 1 - Y;
          return { x: X * X * L + 2 * X * Y * h.x + Y * Y * T, y: X * X * G + 2 * X * Y * h.y + Y * Y * w };
        })(It(0, 10));
      }
      return [];
    }),
    ...o
  ];
}, YN = (t) => (n) => (e) => (r) => (o) => z((i) => {
  const s = nt(i) / nt(o), u = 1 - s, c = s * s * s, a = 3 * u * s * s, g = 3 * u * u * s, _ = u * u * u;
  return { x: _ * t.x + g * n.x + a * e.x + c * r.x, y: _ * t.y + g * n.y + a * e.y + c * r.y };
})(It(0, o - 1 | 0)), XN = (t) => [
  ...pn({ x: t.x, y: t.y })({ x: t.x + t.w, y: t.y })(12),
  ...pn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h * 0.85 })(12),
  ...YN({ x: t.x + t.w, y: t.y + t.h * 0.85 })({ x: t.x + t.w * 0.66, y: t.y + t.h * 1.05 })({ x: t.x + t.w * 0.34, y: t.y + t.h * 0.65 })({
    x: t.x,
    y: t.y + t.h * 0.85
  })(32),
  ...pn({ x: t.x, y: t.y + t.h * 0.85 })({ x: t.x, y: t.y })(12)
], Oa = (t) => (n) => z((e) => {
  const r = 6.283185307179586 * nt(e) / nt(64);
  return { x: t.x + n * re(r), y: t.y + n * Un(r) };
})(It(0, 63)), _s = (t) => (n) => {
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
  const n = t.y + t.h / 2, e = ie(t.h * 0.4)(t.w * 0.2);
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
  return n === 0 ? { x: 0, y: 0 } : { x: Da(z((e) => e.x)(t)) / nt(n), y: Da(z((e) => e.y)(t)) / nt(n) };
}, oi = (t) => (n) => (e) => (r) => (o) => z((i) => {
  const s = e + (r - e) * (nt(i) / nt(o));
  return { x: t.x + n * re(s), y: t.y + n * Un(s) };
})(It(0, o - 1 | 0)), za = (t) => (n) => {
  const e = ve(t)(ve(n.w / 2)(n.h / 2));
  return [
    ...pn({ x: n.x + e, y: n.y })({ x: n.x + n.w - e, y: n.y })(6),
    ...oi({ x: n.x + n.w - e, y: n.y + e })(e)(4.71238898038469)(6.283185307179586)(12),
    ...pn({ x: n.x + n.w, y: n.y + e })({ x: n.x + n.w, y: n.y + n.h - e })(6),
    ...oi({ x: n.x + n.w - e, y: n.y + n.h - e })(e)(0)(1.5707963267948966)(12),
    ...pn({ x: n.x + n.w - e, y: n.y + n.h })({ x: n.x + e, y: n.y + n.h })(6),
    ...oi({ x: n.x + e, y: n.y + n.h - e })(e)(1.5707963267948966)(3.141592653589793)(12),
    ...pn({ x: n.x, y: n.y + n.h - e })({ x: n.x, y: n.y + e })(6),
    ...oi({ x: n.x + e, y: n.y + e })(e)(3.141592653589793)(4.71238898038469)(12)
  ];
}, Gi = (t) => (n) => (e) => (r) => (o) => (i) => z((s) => {
  const u = r + (o - r) * (nt(s) / nt(i));
  return { x: t.x + n * re(u), y: t.y + e * Un(u) };
})(It(0, i - 1 | 0)), UN = (t) => {
  const n = t.h * 0.38;
  return [
    ...Jt(Lg(bg(wg)({
      x: t.x,
      y: t.y - n,
      w: t.w,
      h: n
    }))(t.y))((e) => {
      const r = cr(e.p2.y - e.c.cy)(e.p2.x - e.c.cx), o = cr(e.p1.y - e.c.cy)(e.p1.x - e.c.cx);
      return Gi({ x: e.c.cx, y: e.c.cy })(e.c.r)(e.c.r)(o)(r > o ? r : r + 6.283185307179586)(16);
    }),
    ...pn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h })(8),
    ...pn({ x: t.x + t.w, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(12),
    ...pn({ x: t.x, y: t.y + t.h })({ x: t.x, y: t.y })(8)
  ];
}, KN = (t) => {
  const n = ve(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.y + t.h + 5 - n - 2, i = t.x + e;
  return [
    ...Gi({ x: i, y: r })(e)(n)(3.141592653589793)(6.283185307179586)(24),
    ...pn({ x: t.x + t.w, y: r })({ x: t.x + t.w, y: o })(12),
    ...Gi({ x: i, y: o })(e)(n)(0)(3.141592653589793)(24),
    ...pn({ x: t.x, y: o })({ x: t.x, y: r })(12)
  ];
}, Ii = (t) => (n) => n.shape === "Cylinder" ? KN(n) : n.shape === "Parallelogram" ? ON(n) : n.shape === "Diamond" ? VN(n) : n.shape === "Ellipse" ? za(ie(n.w)(n.h) / 2)(n) : n.shape === "Document" ? XN(n) : n.shape === "Cloud" ? UN(n) : za(t)(n), MN = (t) => {
  const n = ve(t.h * 0.075)(t.w * 0.075), e = t.w / 2;
  return Gi({ x: t.x + e, y: t.y + n })(e)(n)(0)(3.141592653589793)(24);
}, jN = (t) => (n) => (e) => x((r) => (o) => {
  const i = r.pos + o.len, s = e < i ? (e - r.pos) / o.len : 1, u = { x: o.a.x + (o.b.x - o.a.x) * s, y: o.a.y + (o.b.y - o.a.y) * s }, c = n > r.pos ? (n - r.pos) / o.len : 0, a = { x: o.a.x + (o.b.x - o.a.x) * c, y: o.a.y + (o.b.y - o.a.y) * c }, g = r.points.length - 1 | 0, _ = g >= 0 && g < r.points.length ? (() => {
    const d = r.points[g].x - a.x;
    return (d < 0 ? -d < 1e-4 : d < 1e-4) && (() => {
      const l = r.points[g].y - a.y;
      return l < 0 ? -l < 1e-4 : l < 1e-4;
    })();
  })() ? Dt(r.points)(u) : [...r.points, a, u] : [a, u];
  return o.len <= 0 || i <= n || r.pos >= e ? { ...r, pos: i } : { pos: i, points: _ };
})({ pos: 0, points: [] })(t).points, ZN = (t) => (n) => (e) => {
  const r = Rt((o) => J, (o) => (i) => v("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just") {
    const o = zN(t), i = QN(o), s = Ha(0)(i)(n * i), u = Ha(0)(i)(e * i);
    return u <= s ? [] : jN(o)(s)(u);
  }
  f();
}, lc = (t) => t, Se = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, gr = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, tx = /* @__PURE__ */ Sl(Nf)(Ht), nx = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ex = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, qa = /* @__PURE__ */ lc("SegMove"), rx = /* @__PURE__ */ lc("SegLine"), ox = /* @__PURE__ */ lc("SegQuad"), Ya = { offset: 0.4, passes: 1, rMax: 1.5 }, Fg = (t) => $n(Ne(t.x * 7919 + t.y * 3001 + t.w * 113 + t.h * 17 + 1)) * -1640531535 | 0, Ai = (t) => (n) => (e) => () => {
  t.push(3), t.push(n.x), t.push(n.y), t.push(e.x), t.push(e.y);
}, ds = (t) => (n) => () => {
  t.push(1), t.push(n.x), t.push(n.y);
}, Ie = (t) => (n) => () => {
  t.push(2), t.push(n.x), t.push(n.y);
}, Io = /* @__PURE__ */ (() => {
  const t = x((n) => (e) => ((n * 31 | 0) + $n(Ne(e.x * 100)) | 0) + $n(Ne(e.y * 100)) | 0)(1);
  return (n) => t(n) * -1640531535 | 0;
})(), ix = (t) => {
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
        n.push({ kind: qa, m: i, c: i, p: u, len: 0 }), r = u, e = o + 3 | 0;
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
        n.push({ kind: rx, m: i, c: i, p: u, len: En(c * c + a * a) }), r = u, e = o + 3 | 0;
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
          kind: ox,
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
          len: En(c * c + a * a) * 1.05
        }), r = u, e = o + 5 | 0;
        continue;
      }
      if (s._1 === 5) {
        n.push({ kind: qa, m: i, c: i, p: i, len: 0 }), e = o + 1 | 0;
        continue;
      }
      e = t.length;
      continue;
    }
    f();
  }
  return n;
}, sx = (t) => (n) => {
  const e = n.length - 1 | 0, r = e < 1 ? [] : bt(0, e, n), o = (() => {
    const s = r.length - 1 | 0;
    return s >= 0 && s < r.length ? v("Just", r[s]) : J;
  })(), i = n.length - 1 | 0;
  if (i >= 0 && i < n.length && o.tag === "Just") {
    const s = n[i].y - o._1.y, u = n[i].x - o._1.x, c = En(u * u + s * s);
    return c <= 1e-4 ? n : Dt((() => {
      const a = n.length - 1 | 0;
      return a < 1 ? [] : bt(0, a, n);
    })())({ x: n[i].x + u / c * t, y: n[i].y + s / c * t });
  }
  return n;
}, ux = (t) => (n) => (e) => Ln(x((r) => (o) => {
  const i = fn(0)(t)(r.prng), s = fn(0)(6.283185307179586)(i.prng);
  return { prng: s.prng, out: [{ x: o.x + i.value * re(s.value), y: o.y + i.value * Un(s.value) }, ...r.out] };
})({ prng: n, out: [] })(e).out), cx = (t) => (n) => (e) => {
  if (n.kind === "SegMove")
    return ds(t)(n.p);
  if (n.kind === "SegLine")
    return Ie(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  if (n.kind === "SegQuad")
    return Ie(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  f();
}, ax = (t) => (n) => {
  if (n.kind === "SegMove")
    return ds(t)(n.p);
  if (n.kind === "SegLine")
    return Ie(t)(n.p);
  if (n.kind === "SegQuad")
    return Ai(t)(n.c)(n.p);
  f();
}, Rg = (t) => (n) => {
  const e = ix(n), r = x((u) => (c) => u + c.len)(0)(e) * Se(0)(gr(1)(t)), o = [];
  let i = 0, s = 0;
  for (; s < e.length; ) {
    const u = s, c = i;
    if (u >= 0 && u < e.length) {
      if (c + e[u].len <= r) {
        const a = e[u];
        ax(o)(a)(), i = c + a.len, s = u + 1 | 0;
        continue;
      }
      if (c >= r) {
        s = e.length;
        continue;
      }
      cx(o)(e[u])((r - c) / Se(e[u].len)(1e-4))();
    }
    s = e.length;
  }
  return o;
}, Xa = { offset: 1.5, passes: 2, rMax: 14, overshoot: 2.5 }, Bg = (t) => (n) => (e) => (r) => {
  const o = r.y - e.y, i = e.y - n.y, s = r.x - e.x, u = En(s * s + o * o), c = e.x - n.x, a = En(c * c + i * i), g = gr(t.rMax * (N_(a > 0 && u > 0 ? Se(-1)(gr(1)((c * s + i * o) / (a * u))) : 1) / 3.141592653589793))(0.4 * gr(a)(u));
  return { inP: a > 0 ? { x: e.x - c / a * g, y: e.y - i / a * g } : e, curr: e, outP: u > 0 ? { x: e.x + s / u * g, y: e.y + o / u * g } : e };
}, Qg = (t) => (n) => {
  const e = n.length, r = [], o = 0 < n.length ? v("Just", n[0]) : J;
  if (o.tag === "Just" ? ds(r)(o._1)() : o.tag === "Nothing" || f(), e >= 3) {
    let s = 1;
    for (; s <= (e - 2 | 0); ) {
      const u = s, c = u + 1 | 0;
      if (c >= 0 && c < n.length) {
        if (u >= 0 && u < n.length) {
          const a = u - 1 | 0;
          if (a >= 0 && a < n.length) {
            const g = Bg(t)(n[a])(n[u])(n[c]);
            Ie(r)(g.inP)(), Ai(r)(g.curr)(g.outP)();
          }
        }
        s = u + 1 | 0;
        continue;
      }
      s = u + 1 | 0;
    }
  }
  const i = n.length - 1 | 0;
  return i >= 0 && i < n.length && e >= 2 && Ie(r)(n[i])(), r;
}, fx = (t) => (n) => (e) => (r) => (o) => {
  if (o.length < 4)
    return Qg(t)(o);
  const i = 0 < o.length ? v("Just", o[0]) : J, s = (() => {
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = o.length - 1 | 0, c = ze(ze(n)(u) + u | 0)(u), a = (l) => {
    const h = ze(l + u | 0)(u);
    return h >= 0 && h < o.length ? o[h] : s;
  }, g = z((l) => Bg(t)(a((c + l | 0) - 1 | 0))(a(c + l | 0))(a((c + l | 0) + 1 | 0)))(It(
    0,
    u - 1 | 0
  )), _ = [], d = 0 < g.length ? v("Just", g[0]) : J;
  if (d.tag === "Just")
    if (ds(_)(d._1.outP)(), tx((() => {
      const l = Rt((h) => J, (h) => ($) => v("Just", $), g);
      if (l.tag === "Nothing")
        return [];
      if (l.tag === "Just")
        return l._1;
      f();
    })())((l) => {
      const h = Ie(_)(l.inP);
      return () => (h(), Ai(_)(l.curr)(l.outP)());
    })(), e)
      Ie(_)(d._1.inP)(), Ai(_)(d._1.curr)(d._1.outP)(), _.push(5);
    else {
      const l = g.length - 1 | 0;
      l >= 0 && l < g.length ? Ie(_)((() => {
        const h = 1 - r;
        return { x: g[l].outP.x + (d._1.inP.x - g[l].outP.x) * h, y: g[l].outP.y + (d._1.inP.y - g[l].outP.y) * h };
      })())() : Ie(_)(d._1.inP)();
    }
  else d.tag === "Nothing" || f();
  return _;
}, Cr = (t) => (n) => (e) => (r) => {
  const o = nx(1)(r.length - 1 | 0), i = fn(0)(nt(o))(tu("shape")(n)), s = ex(o - 1 | 0)($n(Ne(i.value))), u = i.prng;
  return z((c) => {
    const a = fn(0)(1)(tu(un(c))(u)), g = fn(-0.18)(0.3)(a.prng), _ = a.value < 0.7, d = fn(0.5)(0.85)(g.prng), l = ux(t.offset)(d.prng)(r);
    return { path: e ? fx(t)(s)(_)(g.value)(l) : Qg(t)(l), alpha: d.value };
  })(It(0, t.passes - 1 | 0));
}, gx = (t) => (n) => (e) => Cr(t)(n)(!0)([
  { x: e.x, y: e.y },
  { x: e.x + e.w, y: e.y },
  { x: e.x + e.w, y: e.y + e.h },
  { x: e.x, y: e.y + e.h },
  { x: e.x, y: e.y }
]), lx = (t) => (n) => (e) => {
  const r = Se(0)(gr(1)(e)), o = n.h / nt(4), i = Se(6)(o * 1.4);
  return yt((s) => s)(z((s) => {
    if (r < Se(0)(nt(s) / nt(4) - 0.05))
      return J;
    const u = tu(un(s))(t), c = Se(0)(nt(s) / nt(4) - 0.05), a = ze(s)(2) === 0, g = a ? n.x - 2 : n.x + n.w + 2, _ = a ? n.x + n.w + 2 : n.x - 2, d = n.y + (nt(s) + 0.5) * o;
    return v(
      "Just",
      {
        path: Rg(Se(0)(gr(1)((r - c) / Se(1e-4)(gr(1)(nt(s + 1 | 0) / nt(4) + 0.05) - c))))((() => {
          const l = { rMax: 2, offset: 0.6, passes: 1 }, h = Ln(x((p) => (m) => {
            const y = fn(-o * 0.08)(o * 0.08)(p.prng);
            return { prng: y.prng, out: [{ x: g + (_ - g) * (nt(m) / nt(4)), y: d + y.value }, ...p.out] };
          })({ prng: u, out: [] })(It(0, 4)).out), $ = h.length < 2 ? [] : Cr(l)(u)(!1)(h);
          return 0 < $.length ? $[0].path : [];
        })()),
        width: i,
        alpha: 1
      }
    );
  })(It(0, 3)));
}, Bs = (t, n, e) => ({ tag: t, _1: n, _2: e }), Wg = (t) => t, Qs = (t, n, e) => ({ tag: t, _1: n, _2: e }), Fi = (t) => (n) => (e) => {
  const r = ft.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ft.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, Dg = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ao = (t) => (n) => {
  const e = ft.compare(t)(n);
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
}, Wn = /* @__PURE__ */ (() => {
  const t = te.unfoldr(ke);
  return (n) => t(Kn("IterNode", n, we));
})(), pr = (t) => (e) => {
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
}, _x = Ht.foldMap(A_), fi = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Og = /* @__PURE__ */ nn(C)(Ht), dx = /* @__PURE__ */ Sf(C), hx = (t) => (e) => {
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
}, _c = /* @__PURE__ */ Wg("LabelsShown"), px = /* @__PURE__ */ Wg("LabelsHidden"), zg = (t) => {
  const n = t.Monad0().Bind1(), e = t.popTransform, r = t.popAlpha;
  return (o) => (i) => (s) => (u) => (c) => n.bind(t.pushAlpha(o.fadeAlpha))(() => n.bind(t.pushTransform({
    tx: i * (1 - o.popScale),
    ty: s * (1 - o.popScale),
    sx: o.popScale,
    sy: o.popScale
  }))(() => n.bind(t.pushTransform({ tx: 0, ty: u.y * (1 - o.flipY), sx: 1, sy: o.flipY }))(() => n.bind(c)(() => n.bind(e)(() => n.bind(e)(() => r))))));
}, se = (t) => {
  const n = t.Apply0();
  return (e) => x((r) => (o) => n.apply(n.Functor0().map((i) => lf)(r))(e(o)))(t.pure());
}, qg = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = Yr(o)(i)(r), a = 0 < t.length ? v("Just", t[0]) : J, g = (() => {
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
  })(), h = Ba(128)(Ii(4)(Xr(2)(n)))(Oa(g)(6)), $ = g.x - u.x, p = 2 * (() => {
    const B = g.y - u.y;
    return ($ < 0 ? -$ : $) + (B < 0 ? -B : B);
  })(), m = l.x - s.x, y = 2 * (() => {
    const B = l.y - s.y;
    return (m < 0 ? -m : m) + (B < 0 ? -B : B);
  })(), N = p + Wo(t) + y, T = N <= 1e-4 ? 1 : 1 - y / N, w = N <= 1e-4 ? 0 : p / N, k = T - w, L = Ba(128)(Oa(l)(6))(Ii(4)(Xr(2)(e))), G = { maxDelay: 0.4, smoothPasses: 2 }, D = Br(t)(Fi(0)(1)(k <= 1e-4 ? 0 : (c - w) / k)), Y = (() => {
    if (D.tag === "Just")
      return D._1;
    if (D.tag === "Nothing")
      return g;
    f();
  })(), X = (() => {
    if (T >= 1)
      return 0;
    const B = (c - T) / (1 - T), tt = B < 0 ? 0 : B > 1 ? 1 : B;
    return tt * tt * (3 - 2 * tt);
  })(), P = (() => {
    if (w <= 1e-4)
      return 1;
    const B = c / w, tt = B < 0 ? 0 : B > 1 ? 1 : B;
    return tt * tt * (3 - 2 * tt);
  })();
  return c < w ? Qs("PolyShape", Wa(P)(h.from)(h.to)(G)) : c >= T ? Qs("PolyShape", Wa(X)(L.from)(L.to)(G)) : Qs("CircleShape", Y, 6);
}, Yg = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = qg(t)(n)(e)(r)(o)(i);
  if (s.tag === "PolyShape")
    return Ag(s._1);
  if (s.tag === "CircleShape")
    return s._1;
  f();
}, $x = (t) => (n) => {
  const e = t.y + t.h - 6, r = t.y + 6, o = t.x + 14, i = t.x + t.w - 14, s = x(Ao)(0)(z((u) => o - 10 < u.x + u.w + 12 && i + 10 > u.x - 12 && r - 10 < u.y + u.h + 12 && e + 10 > u.y - 12 ? Dg((u.x + u.w + 12 - (o - 10)) / 0.7071067811865476)((e + 10 - (u.y - 12)) / 0.7071067811865476) : 0)(n));
  return { ...t, x: t.x + s * 0.7071067811865476, y: t.y - s * 0.7071067811865476 };
}, mx = (t) => (n) => (e) => x((r) => (o) => {
  const i = Hg(o)(n);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just") {
    const s = $x(i._1)(r.obstacles);
    return { acc: U(C)(o)(s)(r.acc), obstacles: Dt(r.obstacles)(s) };
  }
  f();
})({ acc: A, obstacles: e })(t).acc, dc = /* @__PURE__ */ (() => {
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
        tokenInsideBlend: ai,
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
        tokenInsideBlend: ai,
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
        tokenInsideBlend: Ga,
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
        tokenInsideBlend: Ga,
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
        tokenInsideBlend: ai,
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
})(), xu = (t) => (n) => Jt(Wn(t.nodes))((e) => {
  const r = _n(e._1)(n.nodes);
  return r.tag === "Just" && ls(r._1).alpha > 0 ? HN(e._2) : [];
}), yx = (t) => (n) => (e) => [
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
  ...xu(n)(e)
], Nx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = $r.traverse(r);
  return (i) => (s) => {
    const u = Ze(s), c = 0.32 * i.size;
    return o((a) => e.bind(a === 0 ? r.pure(0) : t.measureText(i)(mn(a)(s)))((g) => e.bind(t.measureText(i)(mn(a + 1 | 0)(s)))((_) => e.bind(t.measureInk(i)(a >= 0 && a < u.length ? Ki(u[a]) : " "))((d) => r.pure({ x: g, w: _ - g, up: d.ascent - c, down: d.descent + c })))))(It(
      0,
      u.length - 1 | 0
    ));
  };
}, xx = (t) => (n) => {
  const e = (o) => (o.x - n.x) * (o.x - n.x) + (o.y - n.y) * (o.y - n.y), r = x((o) => (i) => e(i) < e(o) ? i : o)({ x: t.x, y: t.y })([{ x: t.x, y: t.y }, { x: t.x + t.w, y: t.y }, { x: t.x, y: t.y + t.h }, { x: t.x + t.w, y: t.y + t.h }]);
  return z((o) => {
    const i = nt(o) / 5;
    return { x: r.x + (n.x - r.x) * i, y: r.y + (n.y - r.y) * i };
  })([1, 2, 3, 4]);
}, hc = (t) => {
  const n = ts(`
`)(t);
  return n.length === 0 ? [""] : n;
}, Jx = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = Yr(o)(i)(r), a = 0 < t.length ? v("Just", t[0]) : J, g = (() => {
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
  })(), h = g.x - u.x, $ = 2 * (() => {
    const G = g.y - u.y;
    return (h < 0 ? -h : h) + (G < 0 ? -G : G);
  })(), p = l.x - s.x, m = 2 * (() => {
    const G = l.y - s.y;
    return (p < 0 ? -p : p) + (G < 0 ? -G : G);
  })(), y = $ + Wo(t) + m, N = y <= 1e-4 ? 1 : 1 - m / y, T = y <= 1e-4 ? 0 : $ / y, w = N - T, k = Br(t)(Fi(0)(1)(w <= 1e-4 ? 0 : (c - T) / w)), L = (() => {
    if (k.tag === "Just")
      return k._1;
    if (k.tag === "Nothing")
      return g;
    f();
  })();
  return c < T ? Bs("InsideRect", Xr(2)(n)) : c >= N ? Bs("InsideRect", Xr(2)(e)) : Bs("InsideBall", L, 6);
}, Tx = { offset: 0.8, passes: 2, rMax: 5 }, vx = (t) => {
  const n = t.Monad0().Applicative0(), e = se(n);
  return (r) => (o) => (i) => (s) => {
    const u = { color: s, width: 1, lineJoin: Tn, lineCap: le }, c = { color: i, flat: !0 }, a = (g) => t.drawRoundedRect({ x: g.x, y: g.y, w: g.w, h: g.h })(4)(v("Just", c))(v("Just", u));
    return e((g) => {
      if (g._2.tag === "Travelling") {
        const _ = pr(g._2._1.edge)(r.edges), d = _n(g._2._1.target)(r.nodes), l = _n(g._2._1.source)(r.nodes);
        if (l.tag === "Just" && d.tag === "Just" && _.tag === "Just") {
          const h = Jx((() => {
            if (g._2._1.direction === "Forward")
              return _._1;
            if (g._2._1.direction === "Backward")
              return Ln(_._1);
            f();
          })())(l._1)(d._1)(g._2._1.progress)(g._2._1.holdPre)(g._2._1.holdPost);
          if (h.tag === "InsideRect")
            return a(h._1);
          if (h.tag === "InsideBall")
            return t.fillStrokePath(_s(h._1)(h._2))(c)(u);
          f();
        }
        return n.pure();
      }
      if (g._2.tag === "Filling") {
        const _ = _n(g._2._1.node)(r.nodes);
        if (_.tag === "Just")
          return a(Xr(2)(_._1));
        if (_.tag === "Nothing")
          return n.pure();
        f();
      }
      return n.pure();
    })(Wn(o.tokens));
  };
}, Va = (t) => (n) => (e) => (r) => t.strokePath((() => {
  const o = Rt(
    (i) => J,
    (i) => (s) => v("Just", { head: i, tail: s }),
    z((i) => i.pt)(d_(
      (i) => (s) => {
        const u = nt(s) / nt(72), c = fn(-0.18)(0.18)(i.prng), a = fn(-0.1)(0.1)(c.prng), g = fn(-0.07)(0.07)(a.prng), _ = e * (0.05 + 0.55 * u) * (1 + a.value), d = u * 28.274333882308138 + c.value;
        return { prng: g.prng, pt: { x: n.x + re(d) * _ + g.value * e, y: n.y + Un(d) * _ + g.value * e } };
      },
      { prng: 137, pt: { x: n.x, y: n.y } },
      It(0, 72)
    ))
  );
  if (o.tag === "Just")
    return [1, o._1.head.x, o._1.head.y, ..._x((i) => [2, i.x, i.y])(o._1.tail)];
  if (o.tag === "Nothing")
    return [];
  f();
})())({ color: r, width: 5.5, lineJoin: Tn, lineCap: We }), wx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = se(n.Applicative0());
  return (i) => (s) => (u) => o((c) => e.bind(t.pushAlpha(c.alpha))(() => e.bind(t.strokePath(c.path)({
    color: i.nodeFill,
    width: c.width,
    lineJoin: Tn,
    lineCap: We
  }))(() => r)))(lx(Fg(s) + 7777 | 0)(s)(u));
}, Xg = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = n.Applicative0(), i = se(o), s = se(o), u = $r.traverse(o), c = Nx(t), a = wx(t), g = t.popTransform;
  return (_) => (d) => (l) => (h) => ($) => (p) => (m) => {
    const y = (q) => e.bind(t.pushAlpha(q.alpha))(() => e.bind(t.strokePath(q.path)({
      color: d.nodeStroke,
      width: 2,
      lineJoin: Tn,
      lineCap: We
    }))(() => r)), N = { family: d.fontFamily, size: d.wobble ? 15 : 11, weight: d.wobble ? 800 : 500 }, T = ts(`
`)(p.label === "" ? $ : p.label), w = T.length === 0 ? [""] : T, k = N.size * 1.2, L = p.shape === "Cylinder" ? t.strokePath(fN({ x: p.x, y: p.y, w: p.w, h: p.h }))({
      color: d.nodeStroke,
      width: 1.25,
      lineJoin: Tn,
      lineCap: le
    }) : o.pure(), G = (p.shape === "Cylinder" ? (p.y + (p.y + p.h + 5 - 2 * ie(p.h * 0.075)(p.w * 0.075))) / 2 : (p.y + p.y + p.h) / 2) - nt(w.length) * k / 2 + k / 2, D = m.tag === "PloppingOut" && d.wobble ? m._1 : -1, Y = D >= 0, X = ls(m), P = Y ? { alpha: 1, scale: 1 } : X, B = p.x + p.w / 2, tt = p.y + p.h / 2, ct = e.bind(t.pushAlpha(P.alpha * l))(() => e.bind(t.pushTransform({
      tx: B * (1 - P.scale),
      ty: tt * (1 - P.scale),
      sx: P.scale,
      sy: P.scale
    }))(() => {
      const q = { x: p.x, y: p.y, w: p.w, h: p.h }, R = {
        color: d.nodeStroke,
        width: d.wobble ? 2 : 1.25,
        lineJoin: Tn,
        lineCap: d.wobble ? We : le
      };
      return e.bind((() => {
        if (d.wobble) {
          if (p.shape === "Rectangle")
            return i(y)(gx(Xa)(Fg(q))(q));
          const E = Ii(7)(p);
          return e.bind(i(y)((() => {
            const S = Io(E);
            return E.length < 4 ? [] : Cr(Ya)(S)(!0)(E);
          })()))(() => s((S) => i(y)((() => {
            const O = Io(S);
            return S.length < 2 ? [] : Cr(Ya)(O)(!1)(S);
          })()))(p.shape === "Cylinder" ? [MN(p)] : []));
        }
        return e.bind(Cg(t)(p.shape)(q)(7)(v("Just", { color: d.nodeFill, flat: !1 }))(v(
          "Just",
          R
        )))(() => L);
      })())(() => e.bind((() => {
        if (h.tag === "Just" && d.wobble && !Y) {
          const E = h._1;
          return e.bind(u(c(N))(w))((S) => {
            const O = kt((rt) => (K) => ft.compare(rt.x)(K.x)), I = $n(Ne(p.x * 7919 + p.y * 3001)) * -1640531535 | 0, W = fn(5)(7.5)(I), Q = fn(0)(W.value)(W.prng), M = -(1 + 2 * fn(-1)(1)(Q.prng).value * 3.141592653589793 / 180), V = (rt, K, st, gt, dt) => O(yt((Nt) => Nt)([
              M * K + rt >= gt && M * K + rt <= dt ? v("Just", { x: K, y: M * K + rt }) : J,
              M * st + rt >= gt && M * st + rt <= dt ? v("Just", { x: st, y: M * st + rt }) : J,
              (() => {
                const Nt = (gt - rt) / M;
                return Nt >= K && Nt <= st ? v("Just", { x: Nt, y: gt }) : J;
              })(),
              (() => {
                const Nt = (dt - rt) / M;
                return Nt >= K && Nt <= st ? v("Just", { x: Nt, y: dt }) : J;
              })()
            ])), H = W.value, et = ze(E.frameHash)(3), j = et === 0 ? { r: 200, g: 35, b: 30, a: 220 } : et === 1 ? { r: 35, g: 150, b: 80, a: 220 } : { r: 30, g: 80, b: 200, a: 220 }, ot = p.x + p.w / 2, Z = zn(Ft((rt) => (K) => Ft((() => {
              const st = G + nt(rt) * k, gt = ot - x((dt) => (Nt) => dt + Nt.w)(0)(K) / 2;
              return (dt) => (Nt) => {
                const At = N.size * 0.1, Vt = dt - 1 | 0, Pn = Vt >= 0 && Vt < K.length && dt > 0 ? (K[Vt].x + K[Vt].w + Nt.x) / 2 : Nt.x - At;
                return {
                  x: gt + Pn - 1,
                  y: st - Nt.up - 1,
                  w: Ao(0)((() => {
                    const ne = dt + 1 | 0;
                    return ne >= 0 && ne < K.length && dt < (K.length - 1 | 0) ? (Nt.x + Nt.w + K[ne].x) / 2 - Pn : Nt.x + Nt.w + At - Pn;
                  })()) + 2,
                  h: Nt.up + Nt.down + 2
                };
              };
            })())(K))(S)), at = p.y + 4, _t = p.x + p.w - 4, Qt = p.x + 4, Tt = at - M * Qt + Q.value, Bt = p.y + p.h - 4, $t = Jt(Jt(Ft((rt) => (K) => {
              const st = (K.from.x + K.to.x) / 2, gt = (K.from.y + K.to.y) / 2, dt = fn(-1)(1)(I + (911 * (rt + 1 | 0) | 0) | 0), Nt = fn(-3)(5)(dt.prng), At = dt.value * 3.141592653589793 / 180, Vt = re(At), Pn = Un(At), ne = (kn) => ({ x: st + (kn.x - st) * Vt - (kn.y - gt) * Pn, y: gt + (kn.x - st) * Pn + (kn.y - gt) * Vt });
              return {
                from: (() => {
                  const kn = ne(K.from), Qn = kn.y - gt, St = kn.x - st, Pt = En(St * St + Qn * Qn), Xn = Pt < 1e-4 ? 1 : (Pt + Nt.value) / Pt;
                  return { x: st + St * Xn, y: gt + Qn * Xn };
                })(),
                to: (() => {
                  const kn = ne(K.to), Qn = fn(-3)(5)(Nt.prng).value, St = kn.y - gt, Pt = kn.x - st, Xn = En(Pt * Pt + St * St), _e = Xn < 1e-4 ? 1 : (Xn + Qn) / Xn;
                  return { x: st + Pt * _e, y: gt + St * _e };
                })()
              };
            })(yt((rt) => {
              const K = V(Tt + nt(rt) * H, Qt, _t, at, Bt);
              return K.length === 2 ? v("Just", { from: K[0], to: K[1] }) : J;
            })(It(0, fi(1)($n(Ne((Bt - M * _t - Tt) / H)))))))((rt) => lt(
              (K) => K.to.x - K.from.x > 1,
              x((K) => (st) => Jt(K)((gt) => {
                const dt = V(gt.from.y - M * gt.from.x, st.x, st.x + st.w, st.y, st.y + st.h);
                return dt.length === 2 ? dt[0].x > gt.from.x + 1e-3 && dt[1].x < gt.to.x - 1e-3 ? [{ from: gt.from, to: dt[0] }, { from: dt[1], to: gt.to }] : dt[0].x <= gt.from.x + 1e-3 && dt[1].x < gt.to.x - 1e-3 ? [{ from: dt[1], to: gt.to }] : dt[0].x > gt.from.x + 1e-3 && dt[1].x >= gt.to.x - 1e-3 ? [{ from: gt.from, to: dt[0] }] : [] : [gt];
              }))([rt])(Z)
            )))((rt) => (() => {
              const K = rt.to.x - rt.from.x;
              return En(2) * (K >= 0 ? K : -K) <= 28;
            })() ? [rt] : [
              { from: rt.from, to: { x: rt.from.x + (rt.to.x - rt.from.x) * 0.495, y: rt.from.y + (rt.to.y - rt.from.y) * 0.495 } },
              { from: { x: rt.from.x + (rt.to.x - rt.from.x) * 0.505, y: rt.from.y + (rt.to.y - rt.from.y) * 0.505 }, to: rt.to }
            ]), xt = $t.length, mt = (rt) => Ao(0)(Dg(1)(E.t * nt(xt) - nt(rt)));
            return i((rt) => {
              const K = rt._1, st = fn(1.4)(1.9)(I + (1303 * (K + 1 | 0) | 0) | 0), gt = fn(0.35)(0.8)(st.prng), dt = i((Nt) => e.bind(t.pushAlpha(Nt.alpha * gt.value))(() => e.bind(t.strokePath(Rg(mt(K))(Nt.path))({
                color: j,
                width: st.value,
                lineJoin: Tn,
                lineCap: We
              }))(() => r)))(Cr({ ...Xa, rMax: 0, offset: 0.5 })(I + (53 * (K + 1 | 0) | 0) | 0)(!1)([rt._2.from, rt._2.to]));
              return mt(K) > 0 ? dt : o.pure();
            })(Ft(Xe)($t));
          });
        }
        return o.pure();
      })())(() => e.bind((() => {
        if (_ === "LabelsShown")
          return i((E) => t.drawText({
            x: p.x + p.w / 2,
            y: G + nt(E._1) * k,
            content: E._2,
            font: N,
            color: d.text,
            align: fs,
            baseline: qr
          }))(Ft(Xe)(w));
        if (_ === "LabelsHidden")
          return o.pure();
        f();
      })())(() => e.bind((() => {
        const E = a(d)(q)(D);
        return Y ? E : o.pure();
      })())(() => e.bind(g)(() => r)))));
    }));
    return P.alpha * l > 0 ? ct : o.pure();
  };
}, kx = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = Xg(t), i = t.popAlpha, s = se(e);
  return (u) => (c) => (a) => {
    const g = { ...u, nodeFill: u.text, text: u.nodeFill, nodeStroke: u.nodeFill };
    return s((_) => {
      const d = _n(_._1)(a.nodes), l = _n(_._1)(c.nodes), h = (() => {
        if (l.tag === "Just" && d.tag === "Just") {
          const $ = d._1, p = l._1;
          return r.bind(t.pushAlpha(_._2))(() => r.bind(o(_c)(g)(1)(J)(_._1)(p)($))(() => i));
        }
        return e.pure();
      })();
      return _._2 > 0 ? h : e.pure();
    })(Wn(a.nodeInvert));
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
}, bx = (t) => {
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
    })(), $ = qg(c)(a)(g)(_)(d)(l);
    if ($.tag === "CircleShape")
      return i ? Va(t)($._1)($._2)({ r: 200, g: 35, b: 30, a: 220 }) : t.fillStrokePath(_s($._1)($._2))({ color: s, flat: !0 })({
        color: u,
        width: 1,
        lineJoin: Tn,
        lineCap: le
      });
    if ($.tag === "PolyShape" && i && $._1.length >= 3)
      return r.bind(t.pushAlpha(h))(() => r.bind(Va(t)(Ag($._1))(6)({
        r: 200,
        g: 35,
        b: 30,
        a: 220
      }))(() => o));
    if ($.tag === "PolyShape")
      return i ? e.pure() : $._1.length >= 3 ? t.fillStrokePath(Ig($._1))({ color: s, flat: !0 })({
        color: u,
        width: 1,
        lineJoin: Tn,
        lineCap: le
      }) : e.pure();
    f();
  };
}, Lx = (t) => {
  const n = t.Monad0().Bind1(), e = t.popAlpha;
  return (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
    const g = Yr(c)(a)(u), _ = { x: i.x + i.w / 2, y: i.y + i.h / 2 }, d = { x: s.x + s.w / 2, y: s.y + s.h / 2 }, l = (h, $) => n.bind(t.pushAlpha($))(() => n.bind(t.fillStrokePath(_s(h)(6))({
      color: r,
      flat: !0
    })({ color: o, width: 1, lineJoin: Tn, lineCap: le }))(() => e));
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
}, Ri = (t) => {
  const n = bx(t), e = Lx(t), r = t.Monad0().Applicative0(), o = se(r);
  return (i) => (s) => (u) => (c) => (a) => o((g) => {
    if (g._2.tag === "Travelling") {
      const _ = _n(g._2._1.target)(s.nodes), d = _n(g._2._1.source)(s.nodes);
      if (d.tag === "Just" && _.tag === "Just") {
        const l = pr(g._2._1.edge)(s.edges);
        if (l.tag === "Just")
          return n(i)(c)(a)((() => {
            if (g._2._1.direction === "Forward")
              return l._1;
            if (g._2._1.direction === "Backward")
              return Ln(l._1);
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
        return t.fillStrokePath(Ig(Ii(4)(Xr(2)(_._1))))({
          color: c,
          flat: !0
        })({ color: a, width: 1, lineJoin: Tn, lineCap: le });
      if (_.tag === "Nothing")
        return r.pure();
      f();
    }
    return r.pure();
  })(Wn(u.tokens));
}, Ug = (t) => {
  const n = Ri(t), e = t.Monad0(), r = e.Bind1(), o = Ri(t), i = vx(t), s = t.popClip, u = t.popBlend, c = t.popLayer, a = e.Applicative0(), g = se(a), _ = t.popAlpha;
  return (d) => (l) => (h) => ($) => {
    const p = l.wobble ? n(!0)(h)($)(l.tokenInside)(l.tokenInsideStroke) : r.bind(t.insideTokenStyle(d))((m) => {
      if (m === "GenieSilhouette")
        return o(!1)(h)($)(l.tokenInside)(l.tokenInsideStroke);
      if (m === "ConvexAbsorb")
        return i(h)($)(l.tokenInside)(l.tokenInsideStroke);
      f();
    });
    if (l.tokenInsideBlend === "Difference")
      return r.bind(t.pushLayer(Uy))(() => r.bind(t.pushBlend(ai))(() => r.bind(t.pushClip(xu(h)($))($u))(() => r.bind(p)(() => r.bind(s)(() => r.bind(u)(() => r.bind(c)(() => r.bind(t.pushLayer(Ky))(() => r.bind(g((m) => {
        const y = _n(m._1)($.nodes);
        return y.tag === "Just" && ls(y._1).alpha > 0 ? Cg(t)(m._2.shape)({ x: m._2.x, y: m._2.y, w: m._2.w, h: m._2.h })(7)(v(
          "Just",
          { color: en, flat: !1 }
        ))(J) : a.pure();
      })(Wn(h.nodes)))(() => c)))))))));
    if (l.tokenInsideBlend === "Normal")
      return r.bind(t.pushClip(xu(h)($))($u))(() => r.bind(t.pushAlpha(l.tokenInsideAlpha))(() => r.bind(p)(() => r.bind(_)(() => s))));
    f();
  };
}, Kg = (t) => {
  const n = t.Monad0().Bind1(), e = Ri(t), r = Ri(t), o = t.popClip, i = t.popLayer;
  return (s) => (u) => (c) => (a) => n.bind(t.pushLayer(Vy))(() => n.bind(t.pushClip(yx(u)(c)(a))(jy))(() => n.bind(s.wobble ? e(!0)(c)(a)(s.tokenOutsideFill)(s.tokenOutsideStroke) : r(!1)(c)(a)(s.tokenOutsideFill)(s.tokenOutsideStroke))(() => n.bind(o)(() => i))));
}, Ex = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = se(r);
  return (i) => (s) => (u) => (c) => (a) => (g) => {
    const _ = rs(g).length, d = nt(_ + 1 | 0), l = (m) => {
      const y = (u * d - nt(m)) / 1.5, N = y < 0 ? 0 : y > 1 ? 1 : y;
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
    })(0), p = $ >= _ ? [] : ur((m) => l(m) > 0)(It($, _ - 1 | 0)).init;
    return e.bind((() => {
      const m = t.drawText({
        x: c,
        y: a,
        content: mn($)(g),
        font: i,
        color: s,
        align: pu,
        baseline: qr
      });
      return $ > 0 ? m : r.pure();
    })())(() => o((m) => e.bind(t.measureText(i)(mn(m)(g)))((y) => {
      const N = l(m);
      return t.drawText({
        x: c + y,
        y: a - (1 - N) * 10,
        content: mn(1)(mo(Me(mn(m)(g)))(g)),
        font: i,
        color: { ...s, a: $n(Ne(N * nt(s.a))) },
        align: pu,
        baseline: qr
      });
    }))(p));
  };
}, hs = (t) => (n) => (e) => (r) => {
  const o = z((h) => nt(fi(1)(rs(h).length)))(r), i = Ao(1)(x(Rr)(0)(o)), s = Yr(n)(e)(t), u = s * i, c = fi(1)(r.length), g = ((h) => ($) => (p) => {
    let m = h, y = $, N = p, T = !0, w;
    for (; T; ) {
      const k = m, L = y, D = Rt((Y) => J, (Y) => (X) => v("Just", { head: Y, tail: X }), N);
      if (D.tag === "Nothing") {
        T = !1, w = fi(0)(c - 1 | 0);
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
  })(0)(0)(o), _ = x(Rr)(0)(g < 1 ? [] : bt(0, g, o)), d = _ / i;
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
}, Sx = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(hs(r)(0)(0)(z(c_)(o)).line))((i) => {
    const s = i + 28;
    return n.Applicative0().pure({ x: e.x + e.w / 2 - s / 2, y: e.y - 25.2 - 14, w: s, h: 25.2 });
  });
}, Cx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Sx(t), o = n.Applicative0(), i = $r.traverse(o);
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
  })(Wn(u.tokens)));
}, Px = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => (i) => (s) => (u) => (c) => {
    const a = Yg(e)(r)(o)(i)(s)(u);
    return n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(hs(i)(s)(u)(Jt(c)(hc)).line))((g) => n.Applicative0().pure({
      x: a.x + 14 + g / 2 - g / 2 - 14,
      y: a.y - 6 - 8 - 6.6 - 6,
      w: g + 28,
      h: 25.2
    }));
  };
}, Gx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Px(t), o = n.Applicative0(), i = $r.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => Og(yt((a) => a)(c)))(i((c) => {
    if (c._2.tag === "Travelling" && c._2._1.labels.length !== 0) {
      const a = _n(c._2._1.target)(s.nodes), g = _n(c._2._1.source)(s.nodes), _ = pr(c._2._1.edge)(s.edges);
      if (_.tag === "Just" && g.tag === "Just" && a.tag === "Just")
        return e.bind(r((() => {
          if (c._2._1.direction === "Forward")
            return _._1;
          if (c._2._1.direction === "Backward")
            return Ln(_._1);
          f();
        })())(g._1)(a._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost)(c._2._1.labels))((d) => o.pure(v(
          "Just",
          b(c._1, d)
        )));
    }
    return o.pure(J);
  })(Wn(u.tokens)));
}, pc = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Gx(t), o = Cx(t);
  return (i) => (s) => e.bind(r(i)(s))((u) => e.bind(o(i)(s))((c) => n.Applicative0().pure(mx((() => {
    const a = (g) => {
      if (g.tag === "Leaf")
        return A;
      if (g.tag === "Node")
        return Ot("Node", g._1, g._2, g._3, void 0, a(g._5), a(g._6));
      f();
    };
    return kt(C.compare)(Lt(On.foldr, a(u)));
  })())(u)([
    ...yt((a) => {
      const g = _n(a._1)(s.nodes);
      return g.tag === "Just" && ls(g._1).alpha > 0 ? v("Just", { x: a._2.x, y: a._2.y, w: a._2.w, h: a._2.h }) : J;
    })(Wn(i.nodes)),
    ...(() => {
      const a = (g, _) => {
        if (g.tag === "Leaf")
          return _;
        if (g.tag === "Node")
          return a(g._5, zt("Cons", g._4, a(g._6, _)));
        f();
      };
      return Lt(Xt.foldr, a(c, Yt));
    })()
  ]))));
}, Mg = (t) => (n) => (e) => {
  const r = Jo(6)(0.55)(Fi(0)(1)((1 - t) / 0.06)), o = t > 0.94, i = o && e > 1e-4, s = Jo(6)(0.55)(Fi(0)(1)(t / 0.06)), u = t < 0.06, c = u && n > 1e-4, a = o && e <= 1e-4;
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
}, Ix = (t) => {
  const n = t.Monad0().Bind1(), e = zg(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const c = Mg(s)(0)(0), a = { family: r.fontFamily, size: 11, weight: 500 }, g = hs(s)(0)(0)(Jt(u)(hc));
    return n.bind(t.measureText(a)(g.line))((_) => {
      const d = i.x + i.w / 2, l = _ + 28, h = i.y - 25.2 - 14, $ = d - l / 2, p = [1, d, h + 25.2, 2, d, i.y], m = { x: d, y: h + 12.6 };
      return e(c)(d - l / 2)(h + 25.2)(m)(n.bind(t.drawRoundedRect({ x: d - l / 2, y: h + 1.5, w: l, h: 25.2 })(6)(v(
        "Just",
        { color: r.chipShadow, flat: !0 }
      ))(J))(() => n.bind(t.drawRoundedRect({ x: $, y: h, w: l, h: 25.2 })(6)(v("Just", { color: r.chip, flat: !0 }))(v(
        "Just",
        { color: r.chipHairline, width: 1, lineJoin: Tn, lineCap: le }
      )))(() => n.bind(t.strokePath(p)({
        color: r.chipHairline,
        width: 1,
        lineJoin: Tn,
        lineCap: le
      }))(() => t.drawText({
        x: d,
        y: m.y,
        content: g.line,
        font: a,
        color: r.chipText,
        align: fs,
        baseline: qr
      })))));
    });
  };
}, Ax = (t) => {
  const n = zg(t), e = t.Monad0(), r = e.Bind1(), o = se(e.Applicative0()), i = Ex(t);
  return (s) => (u) => (c) => (a) => (g) => (_) => (d) => (l) => (h) => {
    const $ = hs(g)(_)(d)(Jt(l)(hc)), p = $.line, m = $.phaseInLabel / 0.45, y = m < 0 ? 0 : m > 1 ? 1 : m, N = h.w, T = h.y, w = h.x, k = w + 14, L = h.h, G = T + L / 2;
    return n(Mg(g)(_)(d))(w)(T + L)({ x: w + N / 2, y: G })(r.bind(o((D) => t.fillPath(_s(D)(1.5))({
      color: s.trailDot,
      flat: !0
    }))(xx(h)(Yg(u)(c)(a)(g)(_)(d))))(() => r.bind(t.drawRoundedRect({ x: w, y: T, w: N, h: L })(3)(v(
      "Just",
      { color: s.chipPillFill, flat: !0 }
    ))(J))(() => i({ family: s.fontFamily, size: 11, weight: 500 })(s.chipPillText)(y)(k)(G)(p))));
  };
}, $c = (t) => {
  const n = Ax(t), e = t.Monad0(), r = e.Applicative0(), o = Ix(t), i = e.Bind1(), s = se(r), u = t.popLayer;
  return (c) => (a) => (g) => (_) => i.bind(t.pushLayer(My))(() => i.bind(s((d) => {
    if (d._2.tag === "Travelling") {
      if (d._2._1.labels.length !== 0) {
        const l = _n(d._2._1.target)(a.nodes), h = _n(d._2._1.source)(a.nodes), $ = pr(d._2._1.edge)(a.edges), p = Hg(d._1)(_);
        if (p.tag === "Just" && $.tag === "Just" && h.tag === "Just" && l.tag === "Just")
          return n(c)((() => {
            if (d._2._1.direction === "Forward")
              return $._1;
            if (d._2._1.direction === "Backward")
              return Ln($._1);
            f();
          })())(h._1)(l._1)(d._2._1.progress)(d._2._1.holdPre)(d._2._1.holdPost)(d._2._1.labels)(p._1);
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
  })(Wn(g.tokens)))(() => u));
}, jg = (t) => {
  const n = pc(t), e = $c(t);
  return (r) => (o) => (i) => t.Monad0().Bind1().bind(n(o)(i))((s) => e(r)(o)(i)(s));
}, Fx = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => {
    const i = o.length - 1 | 0, s = i < 1 ? [] : bt(0, i, o), u = s.length - 1 | 0, c = u >= 0 && u < s.length ? v("Just", s[u]) : J, a = o.length - 1 | 0, g = a >= 0 && a < o.length ? v("Just", o[a]) : J;
    if (g.tag === "Just" && c.tag === "Just") {
      const _ = fn(0.78)(1.18)(Io(o) + 19 | 0), d = fn(0.4)(0.62)(_.prng), l = r.wobble ? 8.75 * d.value : 4.375, h = fn(0.4)(0.62)(d.prng), $ = r.wobble ? 8.75 * h.value : 4.375, p = g._1.y - c._1.y, m = g._1.x - c._1.x, y = En(m * m + p * p), N = p / y, T = -N, w = m / y, k = g._1.x + w * 0.875, L = g._1.y + N * 0.875, G = r.wobble ? 8.75 * _.value : 8.75, D = k - w * G, Y = L - N * G, X = D + T * l, P = Y + w * l, B = [1, k, L, 2, D + T * 4.375, Y + w * 4.375, 2, D - T * 4.375, Y - w * 4.375, 5], tt = D - T * $, ct = Y - w * $, q = { color: r.arrowFill, width: 2, lineJoin: Tn, lineCap: We };
      return y <= 1e-4 ? e.pure() : r.wobble ? n.Bind1().bind(t.strokePath([1, X, P, 2, k, L])(q))(() => t.strokePath([1, tt, ct, 2, k, L])(q)) : t.fillPath(B)({ color: r.arrowFill, flat: !0 });
    }
    return e.pure();
  };
}, Rx = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = se(e), i = t.popAlpha, s = Fx(t);
  return (u) => (c) => (a) => (g) => {
    const _ = qN(8)(a);
    if (g.hi <= g.lo)
      return e.pure();
    const d = ZN(_)(g.lo)(g.hi);
    if (d.length === 0)
      return e.pure();
    const l = { color: u.edge, width: u.wobble ? 2 : 0.9375, lineJoin: Tn, lineCap: We }, h = u.wobble ? fn(-10)(4)(Io(d)).value : 0, $ = u.wobble ? sx(h)(d) : d;
    return r.bind(u.wobble ? o((p) => r.bind(t.pushAlpha(p.alpha))(() => r.bind(t.strokePath(p.path)(l))(() => i)))((() => {
      const p = Io(d);
      return $.length < 2 ? [] : Cr(Tx)(p)(!1)($);
    })()) : t.strokePath(DN(d))(l))(() => {
      const p = s(u)($);
      return g.hi >= 0.999 ? p : e.pure();
    });
  };
}, Zg = (t) => {
  const n = Rx(t), e = t.Monad0().Applicative0(), r = se(e);
  return (o) => (i) => (s) => r((u) => {
    const c = pr(u._1)(s.edges);
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
  })(Wn(i.edges));
}, Bx = (t) => (n) => {
  const e = (i) => {
    const s = _n(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !qn(
        (c) => 0 < c._2.length && c._2[0].x >= u.x && c._2[0].x <= u.x + u.w && c._2[0].y >= u.y && c._2[0].y <= u.y + u.h,
        Wn(t.edges)
      );
    }
    f();
  }, r = x((i) => (s) => (i * 31 | 0) + Re(s) | 0)(5381)(Ze(n.frameTitle)), o = (i) => {
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
        Wn(t.edges)
      );
    }
    f();
  };
  return x((i) => (s) => {
    const u = s._2;
    return dx((c) => {
      if (c.tag === "Nothing")
        return v("Just", u);
      if (c.tag === "Just")
        return v(
          "Just",
          { t: Ao(c._1.t)(u.t), angle: u.t >= c._1.t ? u.angle : c._1.angle, bigCircle: c._1.bigCircle || u.bigCircle, frameHash: c._1.frameHash }
        );
      f();
    })(s._1)(i);
  })(A)(Jt(Wn(n.tokens))((i) => {
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
              })() ? v("Just", c._2) : J)(Wn(t.edges));
              if (0 < u.length) {
                const c = u[0].length - 1 | 0, a = c < 1 ? [] : bt(0, c, u[0]), g = a.length - 1 | 0;
                if (g >= 0 && g < a.length) {
                  const _ = u[0].length - 1 | 0;
                  return _ >= 0 && _ < u[0].length ? cr(u[0][_].y - a[g].y)(u[0][_].x - a[g].x) : 0;
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
                const s = pr(i._2._1.edge)(t.edges);
                if (s.tag === "Just") {
                  const u = s._1.length - 1 | 0, c = u < 1 ? [] : bt(0, u, s._1), a = c.length - 1 | 0;
                  if (a >= 0 && a < c.length) {
                    const g = s._1.length - 1 | 0;
                    return g >= 0 && g < s._1.length ? cr(s._1[g].y - c[a].y)(s._1[g].x - c[a].x) : 0;
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
                const s = pr(i._2._1.edge)(t.edges);
                if (s.tag === "Just")
                  return 1 < s._1.length && 0 < s._1.length ? cr(s._1[1].y - s._1[0].y)(s._1[1].x - s._1[0].x) : 0;
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
}, Qx = (t) => x((n) => (e) => (n * 31 | 0) + Re(e) | 0)(5381)(Ze(t.frameTitle)), tl = (t) => {
  const n = Xg(t), e = t.Monad0().Applicative0(), r = se(e);
  return (o) => (i) => (s) => (u) => {
    const c = Qx(u), a = Bx(s)(u);
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
          return d.tag === "Just" ? v("Just", d._1) : d.tag === "Nothing" && hx(g._1)(u.visited) ? v("Just", { t: 1, angle: 0, bigCircle: !1, frameHash: c }) : J;
        })())(g._1)(g._2)(_._1);
      if (_.tag === "Nothing")
        return e.pure();
      f();
    })(Wn(s.nodes));
  };
}, nl = (t) => t, el = (t) => (n) => {
  const e = n.vw / n.vh, r = n.vh * t, o = { ...n, vx: n.vx - (r - n.vw) / 2, vw: r }, i = n.vw / t, s = { ...n, vy: n.vy - (i - n.vh) / 2, vh: i };
  return t <= 0 || n.vw <= 0 || n.vh <= 0 ? n : t > e ? o : t < e ? s : n;
}, Wx = (t) => (n) => (e) => {
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
}, Ua = (t) => (n) => (e) => {
  const r = ft.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ft.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, Ka = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ju = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Dx = (t) => (e) => {
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
}, Hx = (t) => (e) => {
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
}, Ox = (t) => (n) => {
  const e = Un(t.angle), r = re(t.angle);
  return { a: r, b: e, c: 0, d: 1, e: -n * r, f: n * e - t.boxHeight / 2 };
}, zx = (t) => [t.box.ground.a, t.box.ground.b, t.box.ground.c, t.box.ground.d, t.box.top.a, t.box.top.b, t.box.top.c, t.box.top.d], Pr = (t) => (n) => {
  const e = (r) => Wx(0)(255)($n(sr(nt(r) * t)));
  return { r: e(n.r), g: e(n.g), b: e(n.b), a: n.a };
}, bn = (t) => (n) => (e) => (r) => ({ x: (n - e) * re(t.angle), y: (n + e) * Un(t.angle) - r }), lr = (t) => {
  const n = Rt((e) => J, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Jt(n._1.tail)((e) => [2, e.x, e.y]), 5];
  f();
}, qx = (t) => (n) => (e) => (r) => (o) => {
  const i = (() => {
    if (t === "Forward")
      return o;
    if (t === "Backward")
      return Ln(o);
    f();
  })();
  if (0 < i.length) {
    const u = Br(i)(Ua(0)(1)(Yr(e)(r)(n)));
    if (u.tag === "Nothing")
      return i[0];
    if (u.tag === "Just")
      return u._1;
    f();
  }
  const s = Br(i)(Ua(0)(1)(Yr(e)(r)(n)));
  if (s.tag === "Nothing")
    return { x: 0, y: 0 };
  if (s.tag === "Just")
    return s._1;
  f();
}, Yx = (t) => {
  const n = Rt((e) => J, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Jt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, Xx = (t) => {
  const n = Rt((e) => J, (e) => (r) => v("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { vx: 0, vy: 0, vw: 0, vh: 0 };
  if (n.tag === "Just") {
    const e = x((r) => (o) => ({ minX: Ka(r.minX)(o.x), minY: Ka(r.minY)(o.y), maxX: Ju(r.maxX)(o.x), maxY: Ju(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { vx: e.minX - 40, vy: e.minY - 40, vw: e.maxX - e.minX + 80, vh: e.maxY - e.minY + 80 };
  }
  f();
}, Vx = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => {
    const i = o.box, s = o.np, u = { color: r.nodeStroke, width: 1, lineJoin: Tn, lineCap: le };
    return n.bind(t.fillStrokePath(lr([i.ground.d, i.ground.c, i.top.c, i.top.d]))({ color: Pr(0.66)(r.nodeFill), flat: !0 })(u))(() => n.bind(t.fillStrokePath(lr([
      i.ground.b,
      i.ground.c,
      i.top.c,
      i.top.b
    ]))({ color: Pr(0.82)(r.nodeFill), flat: !0 })(u))(() => n.bind(t.fillStrokePath(lr([i.top.a, i.top.b, i.top.c, i.top.d]))({
      color: Pr(1)(r.nodeFill),
      flat: !0
    })(u))(() => t.drawTextAffine(Ox(e)(s.y + s.h))({
      x: s.x + s.w / 2,
      y: 0,
      content: s.label,
      font: { family: r.fontFamily, size: 11, weight: 600 },
      color: r.text,
      align: fs,
      baseline: qr
    }))));
  };
}, Ux = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => (i) => {
    const s = { color: r.tokenOutsideStroke, width: 1, lineJoin: Tn, lineCap: le }, u = i.x - 5.5, c = i.x + 5.5, a = i.y - 5.5, g = i.y + 5.5, _ = o + 11, d = bn(e)(u)(a)(_), l = bn(e)(c)(a)(_), h = bn(e)(c)(g)(_), $ = bn(e)(u)(g)(_), p = bn(e)(c)(g)(o), m = bn(e)(c)(a)(o);
    return n.bind(t.fillStrokePath(lr([bn(e)(u)(g)(o), p, h, $]))({ color: Pr(0.66)(r.tokenOutsideFill), flat: !0 })(s))(() => n.bind(t.fillStrokePath(lr([
      m,
      p,
      h,
      l
    ]))({ color: Pr(0.82)(r.tokenOutsideFill), flat: !0 })(s))(() => t.fillStrokePath(lr([d, l, h, $]))({
      color: Pr(1)(r.tokenOutsideFill),
      flat: !0
    })(s)));
  };
}, Kx = (t) => {
  const n = Ux(t);
  return (e) => (r) => (o) => (i) => {
    if (i.tag === "Travelling") {
      const s = Dx(i._1.edge)(o.edges);
      return s.tag === "Just" ? v(
        "Just",
        (() => {
          const u = qx(i._1.direction)(i._1.progress)(i._1.holdPre)(i._1.holdPost)(s._1);
          return { depth: u.x + u.y, draw: n(e)(r)(0)(u) };
        })()
      ) : J;
    }
    if (i.tag === "Filling") {
      const s = Hx(i._1.node)(o.nodes);
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
}, Mx = { angle: 0.5235987755982988, boxHeight: 26, transparentBg: !0 }, jx = (t) => (n) => {
  const e = n.y + n.h, r = n.x + n.w;
  return {
    ground: { a: bn(t)(n.x)(n.y)(0), b: bn(t)(r)(n.y)(0), c: bn(t)(r)(e)(0), d: bn(t)(n.x)(e)(0) },
    top: { a: bn(t)(n.x)(n.y)(t.boxHeight), b: bn(t)(r)(n.y)(t.boxHeight), c: bn(t)(r)(e)(t.boxHeight), d: bn(t)(n.x)(e)(t.boxHeight) },
    depth: (n.x + r) / 2 + (n.y + e) / 2
  };
}, rl = (t) => (n) => z((e) => ({ np: e, box: jx(t)(e) }))((() => {
  const e = (r, o) => {
    if (r.tag === "Leaf")
      return o;
    if (r.tag === "Node")
      return e(r._5, zt("Cons", r._4, e(r._6, o)));
    f();
  };
  return Lt(Xt.foldr, e(n.nodes, Yt));
})()), Zx = (t) => (n) => [
  ...Jt(rl(t)(n))(zx),
  ...(() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, zt("Cons", r._4, e(r._6, o)));
      f();
    };
    return Jt(Lt(Xt.foldr, e(n.edges, Yt)))(z((r) => bn(t)(r.x)(r.y)(0)));
  })()
], tJ = (t) => {
  const n = t.to.y - t.from.y, e = t.to.x - t.from.x, r = Ju(1e-4)(En(e * e + n * n)), o = n / r, i = e / r, s = t.to.y - o * 7, u = t.to.x - i * 7;
  return lr([t.to, { x: u - o * 3, y: s + i * 3 }, { x: u + o * 3, y: s - i * 3 }]);
}, nJ = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => (i) => (s) => (u) => {
    const c = bn(r)(u.x)(u.y)(0), a = bn(r)(s.x)(s.y)(0);
    return n.Bind1().bind(t.strokePath(Yx([a, c]))({
      color: o.edge,
      width: 1.5,
      lineJoin: Tn,
      lineCap: We
    }))(() => {
      const g = t.fillPath(tJ({ from: a, to: c }))({ color: o.arrowFill, flat: !0 });
      return i ? g : e.pure();
    });
  };
}, eJ = (t) => {
  const n = nJ(t);
  return (e) => (r) => (o) => {
    const i = wn(Xe, o, bt(1, o.length, o)), s = i.length - 1 | 0;
    return Ft((u) => (c) => ({ depth: (c._1.x + c._1.y + c._2.x + c._2.y) / 2, draw: n(e)(r)(u === s)(c._1)(c._2) }))(i);
  };
}, rJ = (t) => {
  const n = Vx(t), e = Kx(t), r = eJ(t), o = t.Monad0(), i = Vg(t), s = Wi(o.Applicative0())(Ht);
  return (u) => (c) => (a) => (g) => {
    const _ = dc(c), d = [
      ...(() => {
        const l = (h, $) => {
          if (h.tag === "Leaf")
            return $;
          if (h.tag === "Node")
            return l(h._5, zt("Cons", h._4, l(h._6, $)));
          f();
        };
        return Jt(Lt(Xt.foldr, l(a.edges, Yt)))(r(u)(_));
      })(),
      ...z((l) => ({ depth: l.box.depth, draw: n(u)(_)(l) }))(rl(u)(a)),
      ...yt(e(u)(_)(a))((() => {
        const l = (h, $) => {
          if (h.tag === "Leaf")
            return $;
          if (h.tag === "Node")
            return l(h._5, zt("Cons", h._4, l(h._6, $)));
          f();
        };
        return Lt(Xt.foldr, l(g.tokens, Yt));
      })())
    ];
    return o.Bind1().bind(i(_)(u.transparentBg)(1)(Xx(Zx(u)(a))))(() => s((l) => l.draw)(kt((l) => (h) => ft.compare(l.depth)(h.depth))(d)));
  };
}, ol = (t, n) => ({ tag: t, _1: n }), oJ = (t) => (e) => {
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
}, iJ = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, sJ = /* @__PURE__ */ ol("ResolvedLabels"), uJ = (t) => {
  const n = jt((e) => e.role === "FlyThrough")(t.levels);
  if (n.tag === "Just")
    return n._1;
  if (n.tag === "Nothing")
    return Ni(t);
  f();
}, cJ = (t) => (n) => (e) => {
  const r = e.frameTitle === "" ? 0 : 40, o = Xu(n)(e.camera);
  return (() => {
    if (t.outputAspect.tag === "Nothing")
      return nl;
    if (t.outputAspect.tag === "Just")
      return el(t.outputAspect._1);
    f();
  })()({ vx: o.x - t.padding, vy: o.y - t.padding - r, vw: o.w + 2 * t.padding, vh: o.h + 2 * t.padding + r });
}, aJ = (t) => (n) => {
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just") {
    const e = oJ(n._1)(t.segment.layout.nodes);
    if (e.tag === "Nothing")
      return [];
    if (e.tag === "Just") {
      const r = e._1.x * t.segment.placement.scale + t.segment.placement.tx, o = e._1.y * t.segment.placement.scale + t.segment.placement.ty, i = e._1.w * t.segment.placement.scale, s = e._1.h * t.segment.placement.scale;
      return [1, r, o, 2, r + i, o, 2, r + i, o + s, 2, r, o + s, 5];
    }
  }
  f();
}, fJ = (t) => {
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
        { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1 * i, lineJoin: Tn, lineCap: We }
      )))(() => t.drawText({
        x: d,
        y: a + g / 2,
        content: r,
        font: u,
        color: { r: 28, g: 30, b: 36, a: 255 },
        align: fs,
        baseline: qr
      }));
    });
  };
}, gJ = (t) => {
  const n = jg(t), e = $c(t), r = t.Monad0(), o = r.Bind1(), i = Vg(t), s = r.Applicative0(), u = Zg(t), c = tl(t)(_c), a = kx(t), g = Kg(t), _ = Ug(t), d = fJ(t);
  return (l) => (h) => ($) => (p) => (m) => (y) => (N) => {
    const T = dc(l.theme), w = (() => {
      if (N.tag === "ResolvedLabels")
        return n(T)(m)(y);
      if (N.tag === "SpringLabels")
        return e(T)(m)(y)(N._1);
      f();
    })();
    return o.bind(i(T)(l.transparentBg)(h)(p))(() => o.bind((() => {
      const k = o.bind(u(T)(m)(y))(() => o.bind(c(T)(m)(y))(() => o.bind(a(T)(m)(y))(() => o.bind(g(T)(p)(m)(y))(() => o.bind(_(eN)(T)(m)(y))(() => w)))));
      return $ ? k : s.pure();
    })())(() => o.bind(l.watermark === "" ? t.Monad0().Applicative0().pure() : t.drawText({
      x: p.vx + 6,
      y: p.vy + 6,
      content: l.watermark,
      font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 9, weight: 600 },
      color: { r: 180, g: 180, b: 180, a: 255 },
      align: pu,
      baseline: Xy
    }))(() => d(y.frameTitle)(p))));
  };
}, lJ = (t) => {
  const n = t.Monad0(), e = jg(t), r = $c(t), o = n.Bind1(), i = Zg(t), s = tl(t), u = Kg(t), c = t.popTransform, a = Ug(t), g = t.popBakedTransform, _ = t.popClip, d = t.popAlpha;
  return (l) => (h) => ($) => (p) => (m) => {
    const y = m.state, N = { tx: m.segment.placement.tx, ty: m.segment.placement.ty, sx: m.segment.placement.scale, sy: m.segment.placement.scale }, T = dc(l.theme), w = m.segment.layout, k = Mn(w), L = { vx: k.x - 1e3, vy: k.y - 1e3, vw: k.w + 2e3, vh: k.h + 2e3 }, G = 11 * m.segment.placement.scale * h >= 5 ? _c : px, D = (() => {
      if (G === "LabelsHidden")
        return n.Applicative0().pure();
      if (G === "LabelsShown")
        return $.tag === "Leaf" ? e(T)(w)(y) : r(T)(w)(y)($);
      f();
    })(), Y = aJ(p)((() => {
      const X = m.segment.path.length - 1 | 0;
      return X >= 0 && X < m.segment.path.length ? v("Just", m.segment.path[X]) : J;
    })());
    return o.bind(t.pushAlpha(m.bgAlpha))(() => o.bind(t.pushClip(Y)($u))(() => o.bind(t.pushTransform(N))(() => o.bind(i(T)(w)(y))(() => o.bind(s(G)(T)(w)(y))(() => o.bind(u(T)(L)(w)(y))(() => o.bind(c)(() => o.bind(t.pushBakedTransform(N))(() => o.bind(a(rN)(T)(w)(y))(() => o.bind(g)(() => o.bind(t.pushTransform(N))(() => o.bind(D)(() => o.bind(c)(() => o.bind(_)(() => d))))))))))))));
  };
}, _J = (t) => (n) => {
  const e = Xu(t)(n);
  return { vx: e.x, vy: e.y, vw: e.w, vh: e.h };
}, Vr = (t) => (n) => n.diving || n.levels.length > 1 ? (() => {
  if (t.outputAspect.tag === "Nothing")
    return nl;
  if (t.outputAspect.tag === "Just")
    return el(t.outputAspect._1);
  f();
})()(_J(n.rootLayout)(n.camera)) : cJ(t)(n.rootLayout)({ ...Ni(n).state, camera: n.camera }), il = (t) => {
  const n = rJ(t), e = t.Monad0(), r = e.Applicative0(), o = e.Bind1(), i = lJ(t), s = gJ(t);
  return (u) => (c) => (a) => {
    if (u.theme === "Isometric")
      return n({ ...Mx, transparentBg: u.transparentBg })(u.theme)(Ni(a).segment.layout)(Ni(a).state);
    const g = Vr(u)(a), _ = (l) => (h) => {
      if (h.length === 0)
        return r.pure();
      const $ = Rt((p) => J, (p) => (m) => v("Just", { head: p, tail: m }), h);
      if ($.tag === "Nothing")
        return r.pure();
      if ($.tag === "Just") {
        const p = $._1.head, m = $._1.tail;
        return o.bind((() => {
          const y = i(u)(a.camera.zoom)(p.role === "Active" ? c : A)(l)(p);
          return a.diving || p.role === "Active" ? y : r.pure();
        })())(() => _(p)(m));
      }
      f();
    }, d = Rt((l) => J, (l) => (h) => v("Just", { head: l, tail: h }), a.levels);
    if (d.tag === "Nothing")
      return r.pure();
    if (d.tag === "Just") {
      const l = d._1.tail, h = d._1.head;
      return o.bind(s(u)(a.hasDives ? g.vw / iJ(1)(Mn(a.rootLayout).w) : 1)(h.role === "Active" || h.role === "FlyThrough")(g)(h.segment.layout)(uJ(a).state)(l.length === 0 && c.tag !== "Leaf" ? ol("SpringLabels", c) : sJ))(() => _(h)(l));
    }
    f();
  };
}, Ma = (t) => (n) => (e) => {
  const r = ft.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = ft.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, dJ = /* @__PURE__ */ pc(Gg), ja = /* @__PURE__ */ il(Gg), Za = (t) => {
  const n = t.vx + t.vw - 4, e = t.vy + t.vh - 4, r = t.vx + 4, o = t.vy + 4, i = (s) => {
    if (s.tag === "Leaf")
      return A;
    if (s.tag === "Node")
      return Ot("Node", s._1, s._2, s._3, { ...s._4, x: Ma(r)(n - s._4.w)(s._4.x), y: Ma(o)(e - s._4.h)(s._4.y) }, i(s._5), i(s._6));
    f();
  };
  return i;
}, hJ = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
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
      const d = dJ(o.levels[g].segment.layout)(o.levels[g].state)(a)(), l = hu(i)(Za(Vr(u)(o))(d))(s);
      return ja(u)(l.applied)(o)(a)(), l.springs;
    }
    const _ = hu(i)(Za(Vr(u)(o))(A))(s);
    return ja(u)(_.applied)(o)(a)(), _.springs;
  };
}, sl = (t) => t, Oo = (t) => t, tf = /* @__PURE__ */ Oo("Light"), pJ = /* @__PURE__ */ Oo("Dark"), $J = /* @__PURE__ */ Oo("Blueprint"), mJ = /* @__PURE__ */ Oo("Whiteboard"), yJ = /* @__PURE__ */ Oo("Isometric"), NJ = /* @__PURE__ */ sl("PaintBackground"), xJ = /* @__PURE__ */ sl("TransparentBackground"), je = (t) => "rgb(" + un(t.r) + "," + un(t.g) + "," + un(t.b) + ")", me = /* @__PURE__ */ Gf(/* @__PURE__ */ Cf("Fixed", /* @__PURE__ */ Pf(0)(20)(4))), JJ = (t) => "translate(" + me(t.tx) + "," + me(t.ty) + ") scale(" + me(t.sx) + "," + me(t.sy) + ")", wt = /* @__PURE__ */ Gf(/* @__PURE__ */ Cf("Fixed", /* @__PURE__ */ Pf(0)(20)(2))), mc = (t) => {
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
        n.push("M"), n.push(wt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(wt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 2) {
        n.push("L"), n.push(wt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(wt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 3) {
        n.push("Q"), n.push(wt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(wt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(wt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(wt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 5 | 0;
        continue;
      }
      if (o._1 === 4) {
        n.push("C"), n.push(wt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(wt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(wt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(wt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(wt((() => {
          const i = r + 5 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(wt((() => {
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
  return ns(" ")(n);
}, TJ = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, Tu = /* @__PURE__ */ (() => {
  const t = Oe("&")("&amp;"), n = Oe("<")("&lt;"), e = (() => {
    const r = Oe(">")("&gt;"), o = (() => {
      const i = Oe('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), vJ = (t) => {
  if (t.style === "RunText")
    return "<tspan>" + Tu(t.text) + "</tspan>";
  if (t.style === "RunCode")
    return `<tspan font-family="'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="400">` + Tu(t.text) + "</tspan>";
  f();
}, Fn = (t) => (n) => {
  const e = n.maskDepth;
  return () => {
    e.value === 0 && n.out.push(t);
  };
}, wJ = (t) => (n) => {
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
}, ii = (t) => (n) => {
  const e = t.bake;
  return () => {
    const r = e.value;
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return wJ(r._1)(n);
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
  Functor0: () => TJ
}, kJ = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => ul
}, bJ = { pure: (t) => (n) => () => t, Apply0: () => ul }, LJ = { Applicative0: () => bJ, Bind1: () => kJ }, EJ = (t) => (n) => '<defs><pattern id="' + t + '" x="0" y="0" width="' + wt(n.tile) + '" height="' + wt(n.tile) + '" patternUnits="userSpaceOnUse">' + (n.bgColor.a === 0 ? "" : '<rect width="' + wt(n.tile) + '" height="' + wt(n.tile) + '" fill="' + je(n.bgColor) + '" fill-opacity="' + wt(nt(n.bgColor.a) / 255) + '"/>') + '<circle cx="' + wt(n.tile / 2) + '" cy="' + wt(n.tile / 2) + '" r="' + wt(n.dotRadius) + '" fill="' + je(n.dotColor) + '"/></pattern></defs><rect x="' + wt(n.viewport.vx) + '" y="' + wt(n.viewport.vy) + '" width="' + wt(n.viewport.vw) + '" height="' + wt(n.viewport.vh) + '" fill="url(#' + t + ')"/>', nf = (t) => (n) => '<path d="' + mc(t) + '" fill="' + je(n) + '" fill-opacity="' + wt(nt(n.a) / 255) + '"/>', SJ = (t) => (n) => (e) => (r) => '<rect x="' + wt(t.x) + '" y="' + wt(t.y) + '" width="' + wt(t.w) + '" height="' + wt(t.h) + '" rx="' + wt(n) + '"' + (() => {
  if (e.tag === "Just")
    return ' fill="' + je(e._1.color) + '" fill-opacity="' + wt(nt(e._1.color.a) / 255) + '"';
  if (e.tag === "Nothing")
    return ' fill="none"';
  f();
})() + (() => {
  if (r.tag === "Just")
    return ' stroke="' + je(r._1.color) + '" stroke-opacity="' + wt(nt(r._1.color.a) / 255) + '" stroke-width="' + wt(r._1.width) + '" stroke-linejoin="' + (() => {
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
})() + "/>", ef = (t) => (n) => '<path d="' + mc(t) + '" fill="none" stroke="' + je(n.color) + '" stroke-opacity="' + wt(nt(n.color.a) / 255) + '" stroke-width="' + wt(n.width) + '" stroke-linejoin="' + (() => {
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
})() + '"/>', rf = (t) => {
  const n = $0(Or(t.content));
  return '<text x="' + wt(t.x) + '" y="' + wt(t.y) + '"' + (() => {
    if (t.baseline === "BaselineTop")
      return ' dy="0.8em"';
    if (t.baseline === "BaselineMiddle")
      return ' dy="0.32em"';
    if (t.baseline === "BaselineAlphabetic" || t.baseline === "BaselineBottom")
      return "";
    f();
  })() + ' fill="' + je(t.color) + '" fill-opacity="' + wt(nt(t.color.a) / 255) + '" font-size="' + wt(t.font.size) + '" font-family="Ilisarniq, ui-sans-serif, system-ui, sans-serif" font-weight="' + un(t.font.weight) + '" text-anchor="' + (() => {
    if (t.align === "AlignLeft")
      return "start";
    if (t.align === "AlignCenter")
      return "middle";
    if (t.align === "AlignRight")
      return "end";
    f();
  })() + '">' + (n.length === 1 && n[0].style === "RunText" ? Tu(n[0].text) : ns("")(z(vJ)(n))) + "</text>";
}, CJ = (t) => "matrix(" + me(t.a) + " " + me(t.b) + " " + me(t.c) + " " + me(t.d) + " " + me(t.e) + " " + me(t.f) + ")", cl = {
  fillPath: (t) => (n) => (e) => {
    const r = ii(e)(t);
    return () => {
      const o = r();
      return Fn(nf(o)(n.color))(e)();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = ii(e)(t);
    return () => {
      const o = r(), i = e.bake.value;
      return Fn(ef(o)((() => {
        if (i.tag === "Nothing")
          return n;
        if (i.tag === "Just")
          return { ...n, width: i._1.sx * n.width };
        f();
      })()))(e)();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = ii(r)(t);
    return () => {
      const i = o(), s = r.bake.value;
      return Fn(nf(i)(n.color) + ef(i)((() => {
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
      return Fn(SJ((() => {
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
      return Fn(rf((() => {
        if (r.tag === "Nothing")
          return t;
        if (r.tag === "Just")
          return { ...t, x: r._1.sx * t.x + r._1.tx, y: r._1.sy * t.y + r._1.ty, font: { ...t.font, size: r._1.sx * t.font.size } };
        f();
      })()))(n)();
    };
  },
  drawTextAffine: (t) => (n) => Fn((() => {
    const e = 'transform="' + CJ(t) + '"';
    return (e === "" ? "<g>" : "<g " + e + ">") + rf(n) + "</g>";
  })()),
  pushTransform: (t) => Fn((() => {
    const n = 'transform="' + JJ(t) + '"';
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
      const i = ii(e)(t)(), s = "clip" + un(o);
      return Fn((() => {
        const u = 'clip-path="url(#' + s + ')"';
        return '<defs><clipPath id="' + s + '"><path d="' + mc(i) + '"' + (() => {
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
    const n = 'opacity="' + wt(t) + '"';
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
  clearBackground: (t) => (n) => Fn('<rect x="' + wt(n.viewport.vx) + '" y="' + wt(n.viewport.vy) + '" width="' + wt(n.viewport.vw) + '" height="' + wt(n.viewport.vh) + '" fill="' + je(t) + '" opacity="' + wt(nt(t.a) / 255) + '"/>')(n),
  backgroundDots: (t) => (n) => {
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      return n.patternCounter.value = r + 1 | 0, Fn(EJ("bg-dots-" + un(r))(t))(n)();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = lg(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = _g(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => xg,
  Monad0: () => LJ
}, PJ = /* @__PURE__ */ il(cl), GJ = /* @__PURE__ */ pc(cl), IJ = (t) => (n) => (e) => (r) => (o) => {
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
  }, s = Vr(i)(o);
  return {
    viewBox: wt(s.vx) + " " + wt(s.vy) + " " + wt(s.vw) + " " + wt(s.vh),
    body: (() => {
      const u = [], c = { value: 0 }, a = { value: 0 }, g = { value: 0 }, _ = { value: J };
      return PJ(i)(n)(o)({ out: u, maskDepth: c, clipCounter: a, patternCounter: g, viewport: s, bake: _ })(), ns("")(u);
    })(),
    vx: s.vx,
    vy: s.vy,
    vw: s.vw,
    vh: s.vh
  };
}, AJ = (t) => (n) => (e) => (r) => (o) => (i) => {
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
  }, u = hu(o)((() => {
    const c = [], a = { value: 0 }, g = { value: 0 }, _ = { value: 0 }, d = { value: J }, l = r.levels.length - 1 | 0;
    return l >= 0 && l < r.levels.length ? GJ(r.levels[l].segment.layout)(r.levels[l].state)({
      out: c,
      maskDepth: a,
      clipCounter: g,
      patternCounter: _,
      viewport: Vr(s)(r),
      bake: d
    })() : A;
  })())(i);
  return { parts: IJ(t)(u.applied)(n)(e)(r), springs: u.springs };
}, zo = (t) => ({ bind: (n) => (e) => (r) => t.Bind1().bind(n(r))((o) => e(o._1)(o._2)), Apply0: () => al(t) }), al = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = { map: (r) => (o) => (i) => n.map((s) => b(r(s._1), s._2))(o(i)) };
  return {
    apply: (() => {
      const r = zo(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => qo(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, qo = (t) => ({ pure: (n) => (e) => t.Applicative0().pure(b(n, e)), Apply0: () => al(t) }), FJ = (t) => {
  const n = { Applicative0: () => qo(t), Bind1: () => zo(t) };
  return { state: (e) => (r) => t.Applicative0().pure(e(r)), Monad0: () => n };
}, yc = (t, n) => ({ tag: t, _1: n }), De = (t, n) => ({ tag: t, _1: n }), xn = /* @__PURE__ */ FJ(Ve), Wt = /* @__PURE__ */ zo(Ve), Bn = xn.state((t) => b(t, t)), sn = /* @__PURE__ */ qo(Ve), Ae = (t) => (e) => {
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
}, ps = /* @__PURE__ */ Wi(sn)(Ht), Fe = (t) => (e) => {
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
}, RJ = (t) => (e) => {
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
}, BJ = /* @__PURE__ */ (() => {
  const t = te.unfoldr((n) => {
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
})(), QJ = (t) => (e) => {
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
}, $s = (t) => (n) => (e) => x((r) => (o) => t.Bind1().bind(r)((i) => n(i)(o)))(t.Applicative0().pure(e)), WJ = /* @__PURE__ */ x((t) => (n) => U(C)(n)()(t))(A), DJ = /* @__PURE__ */ (() => {
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
})(), HJ = /* @__PURE__ */ De("Exit"), OJ = (t) => yc("Par", t), gl = (t) => yc("Seq", t), zJ = (t) => (n) => (e) => {
  const r = _r(qt, J, (o) => o._1 === t, e);
  if (r.tag === "Just") {
    const o = Ue(qt, J, r._1, b(t, n), e);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return o._1;
    f();
  }
  if (r.tag === "Nothing")
    return Dt(e)(b(t, n));
  f();
}, qJ = (t) => (n) => z((e) => e._1 === t ? b(e._1, { ...e._2, label: v("Just", n) }) : b(e._1, e._2)), Jn = (t) => xn.state((n) => b(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return { ...n, error: v("Just", { msg: t, line: n.currentLine, column: n.currentColumn }) };
    f();
  })()
)), YJ = (t) => Wt.bind(xn.state((n) => b(void 0, { ...n, currentLine: t.line, currentColumn: t.column })))(() => Wt.bind(Bn)((n) => {
  if (n.error.tag === "Just")
    return sn.pure();
  if (n.error.tag === "Nothing") {
    if (t.op.tag === "Enter") {
      if (!Ae(t.op._1.id)(n.currNodes))
        return Jn("cannot enter node " + t.op._1.id + ": does not exist");
      if (!fl(t.op._1.id)(n.interiorOf))
        return Jn("cannot enter node " + t.op._1.id + ": it has no `inside` block");
      if (Hn(ge)(t.op._1.id)(n.enterStack))
        return Jn("cannot enter node " + t.op._1.id + ": already entered");
      const e = t.op._1;
      return xn.state((r) => b(
        void 0,
        { ...r, enterStack: Dt(r.enterStack)(e.id), scenes: Dt(r.scenes)(ji("EnterNode", e.id)) }
      ));
    }
    if (t.op.tag === "Exit") {
      const e = zi(n.enterStack);
      if (e.tag === "Nothing")
        return Jn("`exit` without a matching `enter`");
      if (e.tag === "Just") {
        const r = e._1.init;
        return xn.state((o) => b(void 0, { ...o, enterStack: r, scenes: Dt(o.scenes)(H1) }));
      }
      f();
    }
    return sn.pure();
  }
  f();
})), XJ = (t) => Wt.bind(Bn)((n) => {
  const e = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + un(n.kfCounter);
  if (qn((o) => o.id === e, n.keyframes))
    return Jn("duplicate frame name " + e);
  const r = {
    ...n,
    keyframes: Dt(n.keyframes)({ id: e, nodes: n.currNodes, edges: n.currEdges }),
    kfCounter: n.kfCounter + 1 | 0,
    currentKf: v("Just", e)
  };
  return xn.state((o) => b(void 0, r));
}), VJ = /* @__PURE__ */ ps((t) => Wt.bind(Bn)((n) => {
  if (n.error.tag === "Just")
    return sn.pure();
  if (n.error.tag === "Nothing")
    return fl(t.node)(n.interiorOf) ? Jn("node " + t.node + " has more than one `inside` block") : xn.state((e) => b(void 0, { ...e, interiorOf: U(C)(t.node)(t.doc)(e.interiorOf) }));
  f();
})), UJ = (t) => (n) => {
  const e = n.from + "->" + n.to, r = n.newFrom + "->" + n.newTo, o = Et("Left", "cannot repoint " + n.from + "→" + n.to + ": edge does not exist"), i = Fe(e)(t.currEdges) ? Et("Right", void 0) : o;
  return (() => {
    if (i.tag === "Left") {
      const s = i._1;
      return (u) => Et("Left", s);
    }
    if (i.tag === "Right") {
      const s = i._1;
      return (u) => u(s);
    }
    f();
  })()(() => {
    const s = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newFrom;
    if (!Ae(n.newFrom)(t.currNodes))
      return Et("Left", s);
    const u = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newTo;
    if (!Ae(n.newTo)(t.currNodes))
      return Et("Left", u);
    const c = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": target edge already exists";
    return e !== r && Fe(r)(t.currEdges) ? Et("Left", c) : Et(
      "Right",
      {
        nextCurrEdges: U(C)(r)()($o(C)(e)(t.currEdges)),
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
}, of = (t) => (n) => Wt.bind(Bn)((e) => {
  const r = "ev-" + un(e.eventCounter);
  return Wt.bind((() => {
    const o = { ...e, eventCounter: e.eventCounter + 1 | 0 };
    return xn.state((i) => b(void 0, o));
  })())(() => sn.pure({ events: [{ id: r, kind: n, when: t }], firstId: v("Just", r), lastId: v("Just", r) }));
}), KJ = (t) => (n) => {
  if (n.tag === "Token") {
    const e = n._1;
    return Wt.bind(Bn)((r) => {
      const o = !Ae(e.from)(r.currNodes), i = !Ae(e.to)(r.currNodes);
      if (o || i)
        return Wt.bind(Jn(o ? i ? "token references unknown node: " + e.from + ", " + e.to : "token references unknown node: " + e.from : i ? "token references unknown node: " + e.to : "token references unknown node: "))(() => sn.pure({ events: [], firstId: J, lastId: J }));
      const s = e.to + "->" + e.from, u = e.from + "->" + e.to;
      return Fe(u)(r.currEdges) ? of(t)(Fc(
        "SendToken",
        { from: e.from, to: e.to, edge: u, direction: W1, labels: e.labels }
      )) : Fe(s)(r.currEdges) ? of(t)(Fc(
        "SendToken",
        { from: e.from, to: e.to, edge: s, direction: D1, labels: e.labels }
      )) : Wt.bind(Jn("token " + e.from + "→" + e.to + ": no edge between " + e.from + " and " + e.to))(() => sn.pure({
        events: [],
        firstId: J,
        lastId: J
      }));
    });
  }
  return sn.pure({ events: [], firstId: J, lastId: J });
}, MJ = (t) => (n) => {
  if (0 < t.length) {
    const e = t[0];
    return Wt.bind(xn.state((r) => b(void 0, { ...r, currentLine: e.line, currentColumn: e.column })))(() => Jn(n));
  }
  return Jn(n);
}, jJ = (t) => yt((n) => RJ(n)(t.graphEdges))(Lt(po, BJ(t.currEdges))), ZJ = (t) => (n) => {
  const e = lt((o) => o.from.node === n.id || o.to.node === n.id, jJ(t)), r = $s($f)((o) => (i) => {
    const s = i.from + "->" + n.id, u = n.id + "->" + i.to, c = i.from + "->" + i.to, a = "via " + i.from + " " + i.to + ": no edge " + i.from + "→" + n.id;
    if (!Fe(s)(t.currEdges))
      return Et("Left", a);
    const g = "via " + i.from + " " + i.to + ": no edge " + n.id + "→" + i.to;
    if (!Fe(u)(t.currEdges))
      return Et("Left", g);
    const _ = "via " + i.from + " " + i.to + ": would create " + i.from + "→" + i.to + " but it already exists";
    return Fe(c)(t.currEdges) || QJ(c)(o.synthesized) ? Et("Left", _) : Et(
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
      return (i) => Et("Left", o);
    }
    if (r.tag === "Right") {
      const o = r._1;
      return (i) => i(o);
    }
    f();
  })()((o) => {
    const i = o.consumed, s = lt((u) => !Fe(u.id)(i), e);
    return s.length === 0 ? Et(
      "Right",
      {
        nextCurrEdges: Cn(
          C.compare,
          Sn,
          Pe(C.compare, t.currEdges, WJ(z((u) => u.id)(e))),
          DJ((() => {
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
    ) : Et(
      "Left",
      "cannot delete node " + n.id + ": still connected (" + ns(", ")(z((u) => u.from.node + "→" + u.to.node)(s)) + "). Use -edge to drop them or `via a b` to merge " + n.id + "'s endpoints."
    );
  });
}, vu = (t) => {
  if (t.tag === "Leaf")
    return [t._1];
  if (t.tag === "Par" || t.tag === "Seq")
    return Jt(t._1)(vu);
  f();
}, tT = Wt.bind(Bn)((t) => {
  if (t.error.tag === "Just")
    return sn.pure();
  if (t.error.tag === "Nothing") {
    const n = t.enterStack.length - 1 | 0;
    return n >= 0 && n < t.enterStack.length ? Jn("entered node " + t.enterStack[n] + " was never exited") : sn.pure();
  }
  f();
}), nT = (t) => ({
  nodes: z(Di)(t.graphNodes),
  edges: (() => {
    const n = (e, r) => {
      if (e.tag === "Leaf")
        return r;
      if (e.tag === "Node")
        return n(e._5, zt("Cons", e._4, n(e._6, r)));
      f();
    };
    return Lt(Xt.foldr, n(t.graphEdges, Yt));
  })(),
  constraints: []
}), eT = (t) => {
  if (t.tag === "AddNode") {
    const n = t._1;
    return xn.state((e) => b(
      void 0,
      {
        ...e,
        graphNodes: zJ(n.id)({ id: n.id, size: b(1, 1), ports: [], label: v("Just", n.label), shape: n.shape })(e.graphNodes),
        currNodes: U(C)(n.id)()(e.currNodes)
      }
    ));
  }
  if (t.tag === "DelNode") {
    const n = t._1;
    return Wt.bind(Bn)((e) => {
      if (!Ae(n.id)(e.currNodes))
        return Jn("cannot delete node " + n.id + ": does not exist");
      const r = ZJ(e)(n);
      if (r.tag === "Left")
        return Jn(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return xn.state((i) => b(
          void 0,
          {
            ...i,
            currNodes: $o(C)(n.id)(i.currNodes),
            currEdges: o.nextCurrEdges,
            graphEdges: Cn(C.compare, Sn, o.synthesized, i.graphEdges)
          }
        ));
      }
      f();
    });
  }
  if (t.tag === "ModNode") {
    const n = t._1;
    return Wt.bind(Bn)((e) => {
      if (!Ae(n.id)(e.currNodes))
        return Jn("cannot modify node " + n.id + ": does not exist");
      if (n.label.tag === "Just") {
        const r = n.label._1;
        return xn.state((o) => b(void 0, { ...o, graphNodes: qJ(n.id)(r)(o.graphNodes) }));
      }
      if (n.label.tag === "Nothing")
        return sn.pure();
      f();
    });
  }
  if (t.tag === "AddEdge") {
    const n = t._1;
    return Wt.bind(Bn)((e) => {
      const r = !Ae(n.from)(e.currNodes), o = !Ae(n.to)(e.currNodes);
      if (r || o)
        return Jn("cannot add edge " + n.from + "→" + n.to + ": unknown node " + (r ? o ? n.from + ", " + n.to : n.from : o ? n.to : ""));
      const i = n.from + "->" + n.to;
      return xn.state((s) => b(
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
    return Wt.bind(Bn)((e) => {
      const r = n.from + "->" + n.to;
      return Fe(r)(e.currEdges) ? xn.state((o) => b(void 0, { ...o, currEdges: $o(C)(r)(o.currEdges) })) : Jn("cannot delete edge " + n.from + "→" + n.to + ": does not exist");
    });
  }
  if (t.tag === "RepointEdge") {
    const n = t._1;
    return Wt.bind(Bn)((e) => {
      const r = UJ(e)(n);
      if (r.tag === "Left")
        return Jn(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return xn.state((i) => b(
          void 0,
          { ...i, currEdges: o.nextCurrEdges, graphEdges: U(C)(o.newId)(o.newEdge)(i.graphEdges) }
        ));
      }
      f();
    });
  }
  return sn.pure();
}, rT = (t) => Wt.bind(xn.state((n) => b(void 0, { ...n, currentLine: t.line, currentColumn: t.column })))(() => eT(t.op)), oT = (t) => (n) => Wt.bind(ps(rT)(n))(() => Wt.bind(Bn)((e) => {
  const r = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + un(e.kfCounter);
  if (qn((i) => i.id === r, e.keyframes))
    return Jn("duplicate frame name " + r);
  const o = {
    ...e,
    keyframes: Dt(e.keyframes)({ id: r, nodes: e.currNodes, edges: e.currEdges }),
    kfCounter: e.kfCounter + 1 | 0,
    currentKf: v("Just", r),
    scenes: (() => {
      if (e.currentKf.tag === "Nothing")
        return e.scenes;
      if (e.currentKf.tag === "Just")
        return Dt(e.scenes)(ji("Structural", { from: e.currentKf._1, to: r, focus: J }));
      f();
    })()
  };
  return xn.state((i) => b(void 0, o));
})), iT = (t) => (n) => {
  const e = Rt((r) => J, (r) => (o) => v("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return sn.pure({ events: [], firstId: J, lastId: J });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Wt.bind(Fo(t)(e._1.head))((o) => Wt.bind($s({
      Applicative0: () => qo(Ve),
      Bind1: () => zo(Ve)
    })((i) => (s) => Wt.bind(Fo((() => {
      if (i.lastId.tag === "Just")
        return Yu("After", i.lastId._1);
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
}, sT = (t) => (n) => {
  const e = Rt((r) => J, (r) => (o) => v("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return sn.pure({ events: [], firstId: J, lastId: J });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Wt.bind(Fo(t)(e._1.head))((o) => Wt.bind(uT((() => {
      if (o.firstId.tag === "Just")
        return Yu("With", o.firstId._1);
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
}, Fo = (t) => (n) => {
  if (n.tag === "Leaf") {
    const e = n._1;
    return Wt.bind(xn.state((r) => b(void 0, { ...r, currentLine: e.line, currentColumn: e.column })))(() => KJ(t)(e.op));
  }
  if (n.tag === "Seq")
    return iT(t)(n._1);
  if (n.tag === "Par")
    return sT(t)(n._1);
  f();
}, uT = (t) => $s({
  Applicative0: () => qo(Ve),
  Bind1: () => zo(Ve)
})((n) => (e) => Wt.bind(Fo(t)(e))((r) => sn.pure({
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
})))({ events: [], firstId: J, lastId: J }), cT = (t) => Wt.bind(Bn)((n) => {
  if (n.currentKf.tag === "Nothing")
    return Jn("flow ops before any structural frame");
  if (n.currentKf.tag === "Just") {
    const e = n.currentKf._1;
    return Wt.bind(Fo(Q1)(t))((r) => Wt.bind(Bn)((o) => {
      const i = { ...o, scenes: Dt(o.scenes)(ji("DataFlow", { keyframe: e, events: r.events, focus: J })) };
      return xn.state((s) => b(void 0, i));
    }));
  }
  f();
}), aT = (t) => Wt.bind(Bn)((n) => {
  if (n.error.tag === "Just")
    return sn.pure();
  if (n.error.tag === "Nothing") {
    const e = vu(t.ops), r = lt(
      (s) => s.op.tag === "AddNode" || s.op.tag === "DelNode" || s.op.tag === "ModNode" || s.op.tag === "AddEdge" || s.op.tag === "DelEdge" || s.op.tag === "RepointEdge",
      e
    ), o = lt((s) => s.op.tag === "Enter" || s.op.tag === "Exit", e), i = lt(
      (s) => !(s.op.tag === "AddNode" || s.op.tag === "DelNode" || s.op.tag === "ModNode" || s.op.tag === "AddEdge" || s.op.tag === "DelEdge" || s.op.tag === "RepointEdge") && !(s.op.tag === "Enter" || s.op.tag === "Exit"),
      e
    );
    return o.length !== 0 && i.length !== 0 ? MJ(o)("`enter`/`exit` cannot be mixed with flow tokens in the same frame") : Wt.bind((() => {
      const s = oT(t.name)(r);
      return r.length !== 0 ? s : sn.pure();
    })())(() => Wt.bind((() => {
      const s = XJ(t.name);
      return r.length === 0 && i.length !== 0 ? s : sn.pure();
    })())(() => Wt.bind((() => {
      const s = cT(t.ops);
      return i.length !== 0 ? s : sn.pure();
    })())(() => ps(YJ)(o))));
  }
  f();
}), _l = (t) => Wt.bind(VJ(t.interiors))(() => Wt.bind(ps(aT)(t.frames))(() => Wt.bind(tT)(() => Wt.bind(Bn)((n) => {
  if (n.error.tag === "Just")
    return sn.pure(Et("Left", n.error._1));
  if (n.error.tag === "Nothing") {
    const e = fT(t.interiors);
    if (e.tag === "Left")
      return sn.pure(Et("Left", e._1));
    if (e.tag === "Right")
      return sn.pure(Et("Right", { seed: t.seed, graph: nT(n), keyframes: n.keyframes, scenes: n.scenes, interiors: e._1 }));
  }
  f();
})))), fT = (t) => {
  const n = $s($f)((e) => (r) => {
    const o = _l(r.doc)(ll)._1;
    return (() => {
      if (o.tag === "Left") {
        const i = o._1;
        return (s) => Et("Left", i);
      }
      if (o.tag === "Right") {
        const i = o._1;
        return (s) => s(i);
      }
      f();
    })()((i) => Et("Right", U(C)(r.node)(i)(e)));
  })(A)(t);
  if (n.tag === "Left")
    return Et("Left", n._1);
  if (n.tag === "Right")
    return Et("Right", n._1);
  f();
}, Gr = (t, n) => ({ tag: "ParseError", _1: t, _2: n }), F = (t, n, e) => ({ tag: "ParseState", _1: t, _2: n, _3: e }), Bi = (t, n, e) => ({ tag: t, _1: n, _2: e }), gT = (t) => Bi("More", t), lT = (t) => Bi("Lift", t), _T = {
  defer: (t) => {
    const n = m1(t);
    return (e, r, o, i, s) => y1(n)(e, r, o, i, s);
  }
}, dl = { map: (t) => (n) => (e, r, o, i, s) => r((u) => n(e, r, o, i, (c, a) => r((g) => s(c, t(a))))) }, dT = {
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
  Functor0: () => dl
}, hT = (t) => {
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
          u = !1, c = n.Bind1().Apply0().Functor0().map(yf)(g._1);
          continue;
        }
        if (g.tag === "Stop") {
          u = !1, c = n.Applicative0().pure(io("Done", b(g._2, g._1)));
          continue;
        }
        f();
      }
      return c;
    };
    return t.tailRecM(o)((i) => r(
      e,
      gT,
      lT,
      (s, u) => Bi("Stop", s, Et("Left", u)),
      (s, u) => Bi("Stop", s, Et("Right", u))
    ));
  };
}, hl = (t, n, e, r, o) => o(t, t._2), pT = { index: 0, line: 1, column: 1 }, $T = (t) => {
  const n = hT(t);
  return (e) => (r) => t.Monad0().Bind1().Apply0().Functor0().map(Hi)(n(F(e, pT, !1))(r));
}, mT = /* @__PURE__ */ $T(ql), pl = {
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
  Functor0: () => dl
}, $l = { pure: (t) => (n, e, r, o, i) => i(n, t), Apply0: () => pl }, yT = {
  bind: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, a) => r((g) => n(a)(e._3 && !c._3 ? F(c._1, c._2, !0) : c, r, o, i, s))
  )),
  Apply0: () => pl
}, NT = { Applicative0: () => $l, Bind1: () => yT }, ms = (t) => (n, e, r, o, i) => e((s) => hl(
  n,
  e,
  r,
  o,
  (u, c) => e((a) => o(n._3 && !u._3 ? F(u._1, u._2, !0) : u, Gr(t, c)))
)), xT = { empty: /* @__PURE__ */ ms("No alternative"), Alt0: () => dT }, JT = { Applicative0: () => $l, Plus1: () => xT }, TT = {
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
  Monad0: () => NT
}, vT = (t) => (n) => {
  const e = n.Plus1().Alt0(), r = n.Applicative0();
  return (o) => t.tailRecM((i) => t.Monad0().Bind1().bind(e.alt(e.Functor0().map(yf)(o))(r.pure(io(
    "Done",
    void 0
  ))))((s) => r.pure((() => {
    if (s.tag === "Loop")
      return io("Loop", zt("Cons", s._1, i));
    if (s.tag === "Done")
      return io(
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
              g = zt("Cons", $._1, h), _ = $._2;
              continue;
            }
            f();
          }
          return l;
        })(Yt)(i)
      );
    f();
  })())))(Yt);
}, ue = /* @__PURE__ */ vT(TT)(JT), Ct = (t) => (n) => {
  const e = ms("Expected " + n);
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
}, Nc = (t) => (n, e, r, o, i) => {
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
      (l, h) => e(($) => e((p) => ms("Negated parser succeeded")(
        l,
        e,
        r,
        g,
        (m, y) => e((N) => i(l._3 && !m._3 ? F(m._1, m._2, !0) : m, y))
      )))
    )));
  });
}, wT = (t) => {
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
  })(J);
  return (e) => {
    const r = n(e);
    if (r.tag === "Nothing")
      return ms("No alternative");
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, kT = (t) => (n) => (e) => (r, o, i, s, u) => o((c) => o((a) => o((g) => o((_) => t(
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
        return o((w) => o((k) => {
          const L = r._3 && !T._3 ? F(T._1, T._2, !0) : T;
          return n(
            L,
            o,
            i,
            s,
            (G, D) => o((Y) => u(L._3 && !G._3 ? F(G._1, G._2, !0) : G, y))
          );
        }));
      })
    );
  }))
))))), wu = (t) => (n) => (e) => {
  if (n === 10)
    return { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  if (n === 13) {
    const r = Pd()(e);
    return r.tag === "Just" && r._1 === 10 ? { index: t.index + 1 | 0, line: t.line, column: t.column } : { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  }
  return n === 9 ? { index: t.index + 1 | 0, line: t.line, column: (t.column + 8 | 0) - ze(t.column - 1 | 0)(8) | 0 } : { index: t.index + 1 | 0, line: t.line, column: t.column + 1 | 0 };
}, bT = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const c = r, a = o, g = i, _ = es(a);
    if (_.tag === "Nothing") {
      s = !1, u = c;
      continue;
    }
    if (_.tag === "Just") {
      r = _._1.tail === "" ? wu(c)(_._1.head)(g) : wu(c)(_._1.head)(_._1.tail), o = _._1.tail, i = g;
      continue;
    }
    f();
  }
  return u;
}, Mt = (t) => (n, e, r, o, i) => {
  const s = es(n._1);
  if (s.tag === "Nothing")
    return o(n, Gr("Unexpected EOF", n._2));
  if (s.tag === "Just") {
    if (s._1.head < 0 || s._1.head > 65535)
      return o(n, Gr("Expected Char", n._2));
    if (s._1.head >= 0 && s._1.head <= 65535) {
      const u = Uf(s._1.head);
      return t(u) ? i(F(s._1.tail, wu(n._2)(s._1.head)(s._1.tail), !0), u) : o(n, Gr("Predicate unsatisfied", n._2));
    }
  }
  f();
}, xc = (t, n, e, r, o) => t._1 === "" ? o(F(t._1, t._2, !0), void 0) : r(t, Gr("Expected EOF", t._2)), LT = (t) => (n, e, r, o, i) => {
  const s = t(n._1);
  if (s.tag === "Left")
    return o(n, Gr(s._1, n._2));
  if (s.tag === "Right")
    return i(F(s._1.remainder, bT(n._2)(s._1.consumed)(s._1.remainder), s._1.consumed !== ""), s._1.value);
  f();
}, Ur = (t) => LT((n) => {
  const e = $1(t)(n);
  return e.tag === "Just" ? Et("Right", { value: t, consumed: t, remainder: e._1 }) : Et("Left", "Expected " + Os(t));
}), ET = /* @__PURE__ */ Mt((t) => !0), sf = (t, n) => ({ tag: t, _1: n }), ST = /* @__PURE__ */ nn(C)(Ht), CT = (t) => (e) => {
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
}, ml = /* @__PURE__ */ wT(Ht), yl = /* @__PURE__ */ (() => {
  const t = Mt((n) => n === " " || n === "	" || n === `
` || n === "\r");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? F(u._1, u._2, !0) : u, void 0))
  ));
})(), Jc = (t, n, e, r, o) => n((i) => Ur("#")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = ue(Mt((_) => _ !== `
`)), g = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => o(g._3 && !d._3 ? F(d._1, d._2, !0) : d, void 0))
    ));
  })
)), PT = /* @__PURE__ */ Ct(/* @__PURE__ */ (() => {
  const t = Ct(Mt((e) => e === "}"))("'}'"), n = Mt((e) => e === `
` || e === "\r");
  return (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((a) => r((g) => t(
      F(u, c, !1),
      r,
      o,
      (_, d) => r((l) => {
        const h = e._1, $ = e._2;
        return r((p) => r((m) => Jc(
          F(h, $, !1),
          r,
          o,
          (y, N) => {
            const T = y._3;
            return r((w) => {
              if (T)
                return i(y, N);
              const k = e._1, L = e._2;
              return r((G) => r((D) => n(
                F(k, L, !1),
                r,
                o,
                (Y, X) => {
                  const P = Y._3;
                  return r((B) => P ? i(Y, X) : xc(e, r, o, i, s));
                },
                (Y, X) => r((P) => s(Y, void 0))
              )));
            });
          },
          (y, N) => r((T) => s(y, void 0))
        )));
      }),
      (_, d) => r((l) => s(F(u, c, !1), void 0))
    )));
  };
})())("newline or '}' (statements end at the end of the line)"), Zn = /* @__PURE__ */ (() => {
  const t = ue((n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => yl(
      F(s, u, !1),
      e,
      r,
      (a, g) => {
        const _ = a._3;
        return e((d) => _ ? o(a, g) : Jc(n, e, r, o, i));
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
})(), fe = (t, n, e, r, o) => n((i) => {
  const s = (a, g) => n((_) => Zn(t._3 && !a._3 ? F(a._1, a._2, !0) : a, n, e, r, o)), u = t._1, c = t._2;
  return n((a) => yl(
    F(u, c, !1),
    n,
    e,
    (g, _) => {
      const d = g._3;
      return n((l) => d ? r(g, _) : Jc(t, n, e, r, s));
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
      const g = ue(Mt((d) => d !== "|")), _ = n._3 && !u._3 ? F(u._1, u._2, !0) : u;
      return e((d) => g(
        _,
        e,
        r,
        o,
        (l, h) => e(($) => {
          const p = Ct(Ct(Mt((y) => y === "|"))("'|'"))("closing '|'"), m = _._3 && !l._3 ? F(l._1, l._2, !0) : l;
          return e((y) => p(
            m,
            e,
            r,
            o,
            (N, T) => e((w) => i(
              m._3 && !N._3 ? F(N._1, N._2, !0) : N,
              mr(Lt(Xt.foldr, h))
            ))
          ));
        })
      ));
    })
  ));
})(), Qi = /* @__PURE__ */ Mt((t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z"), Dn = /* @__PURE__ */ (() => {
  const t = ue(Mt((n) => n === " " || n === "	"));
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? F(u._1, u._2, !0) : u, void 0))
  ));
})(), GT = /* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === "\\"))("'\\\\'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const g = n._3 && !u._3 ? F(u._1, u._2, !0) : u;
      return e((_) => ET(
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
})(), IT = /* @__PURE__ */ (() => {
  const t = Mt((n) => n !== '"' && n !== "\\" && n !== `
`);
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => GT(F(s, u, !1), e, r, (a, g) => e((_) => t(n, e, r, o, i)), i));
  };
})(), Tc = /* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === '"'))(`'"'`);
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const g = ue(IT), _ = n._3 && !u._3 ? F(u._1, u._2, !0) : u;
      return e((d) => g(
        _,
        e,
        r,
        o,
        (l, h) => e(($) => {
          const p = Ct(Ct(Mt((y) => y === '"'))(`'"'`))(`closing '"' (unterminated string)`), m = _._3 && !l._3 ? F(l._1, l._2, !0) : l;
          return e((y) => p(
            m,
            e,
            r,
            o,
            (N, T) => e((w) => i(
              m._3 && !N._3 ? F(N._1, N._2, !0) : N,
              mr(Lt(Xt.foldr, h))
            ))
          ));
        })
      ));
    })
  ));
})(), AT = /* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === ":"))("':'");
  return (n, e, r, o, i) => e((s) => Dn(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => Ct((g, _, d, l, h) => {
      const $ = g._1, p = g._2;
      return _((m) => {
        const y = (N, T) => {
          const w = N._3;
          return _((k) => {
            if (w)
              return l(N, T);
            const L = g._1, G = g._2;
            return _((D) => Nl(
              F(L, G, !1),
              _,
              d,
              (Y, X) => {
                const P = Y._3;
                return _((B) => P ? l(Y, X) : Tc(g, _, d, l, h));
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
          (T, w) => _((k) => _((L) => Dn(
            T,
            _,
            d,
            y,
            (G, D) => _((Y) => {
              const X = ue(Mt((B) => B !== `
` && B !== "\r" && B !== "#" && B !== "}")), P = T._3 && !G._3 ? F(G._1, G._2, !0) : G;
              return _((B) => X(
                P,
                _,
                d,
                y,
                (tt, ct) => _((q) => h(
                  P._3 && !tt._3 ? F(tt._1, tt._2, !0) : tt,
                  md(mr(Lt(Xt.foldr, ct)))
                ))
              ));
            })
          )))
        ));
      });
    })('label ("…", : rest-of-line, or |…|)')(n._3 && !u._3 ? F(u._1, u._2, !0) : u, e, r, o, i))
  ));
})(), FT = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => Nl(
    F(i, s, !1),
    n,
    e,
    (c, a) => {
      const g = c._3;
      return n((_) => g ? r(c, a) : Tc(t, n, e, r, o));
    },
    o
  ));
}, Ro = /* @__PURE__ */ Mt((t) => t >= "0" && t <= "9"), vn = /* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => e((s) => {
    const u = (g, _) => e((d) => {
      const l = ue((() => {
        const $ = Ct(Mt((m) => m === "_"))("'_'"), p = Ct(Mt((m) => m === "-"))("'-'");
        return (m, y, N, T, w) => {
          const k = m._1, L = m._2;
          return y((G) => Qi(
            F(k, L, !1),
            y,
            N,
            (D, Y) => {
              const X = D._3;
              return y((P) => {
                if (X)
                  return T(D, Y);
                const B = m._1, tt = m._2;
                return y((ct) => Ro(
                  F(B, tt, !1),
                  y,
                  N,
                  (q, R) => {
                    const E = q._3;
                    return y((S) => {
                      if (E)
                        return T(q, R);
                      const O = m._1, I = m._2;
                      return y((W) => $(
                        F(O, I, !1),
                        y,
                        N,
                        (Q, M) => {
                          const V = Q._3;
                          return y((H) => V ? T(Q, M) : p(m, y, N, T, w));
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
          Ki(_) + mr(Lt(Xt.foldr, m))
        ))
      ));
    }), c = n._1, a = n._2;
    return e((g) => Qi(
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
})(), RT = /* @__PURE__ */ Ct((t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => Tc(
    F(i, s, !1),
    n,
    e,
    (c, a) => {
      const g = c._3;
      return n((_) => g ? r(c, a) : vn(t, n, e, r, o));
    },
    o
  ));
})("frame name (identifier or quoted string)"), uf = (t, n, e, r, o) => n((i) => Dn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Ct(vn)("attribute key"), g = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
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
            const T = Ct(Ct(Mt((k) => k === ":"))("':'"))("':'"), w = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((k) => T(
              w,
              n,
              e,
              r,
              (L, G) => n((D) => {
                const Y = w._3 && !L._3 ? F(L._1, L._2, !0) : L;
                return n((X) => Dn(
                  Y,
                  n,
                  e,
                  r,
                  (P, B) => n((tt) => {
                    const ct = Ct(vn)("attribute value"), q = Y._3 && !P._3 ? F(P._1, P._2, !0) : P;
                    return n((R) => ct(
                      q,
                      n,
                      e,
                      r,
                      (E, S) => n((O) => {
                        const I = q._3 && !E._3 ? F(E._1, E._2, !0) : E;
                        return n((W) => Dn(
                          I,
                          n,
                          e,
                          r,
                          (Q, M) => n((V) => o(I._3 && !Q._3 ? F(Q._1, Q._2, !0) : Q, b(l, S)))
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
)), BT = (t, n, e, r, o) => n((i) => vn(
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
        const h = Ct((p, m, y, N, T) => {
          const w = p._1, k = p._2;
          return m((L) => Ur("->")(
            F(w, k, !1),
            m,
            y,
            (G, D) => {
              const Y = G._3;
              return m((X) => Y ? N(G, D) : Ur("<-")(p, m, y, N, T));
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
              (k, L) => n((G) => {
                const D = Ct(vn)("target node identifier"), Y = T._3 && !k._3 ? F(k._1, k._2, !0) : k;
                return n((X) => D(
                  Y,
                  n,
                  e,
                  r,
                  (P, B) => n((tt) => {
                    const ct = ue((R, E, S, O, I) => {
                      const W = R._3;
                      return E((Q) => E((M) => Dn(
                        R,
                        E,
                        S,
                        (V, H) => O(F(V._1, V._2, W), H),
                        (V, H) => E((et) => E((j) => {
                          const ot = R._3 && !V._3 ? F(V._1, V._2, !0) : V;
                          return FT(
                            ot,
                            E,
                            S,
                            (Z, at) => O(F(Z._1, Z._2, W), at),
                            (Z, at) => E((_t) => I(ot._3 && !Z._3 ? F(Z._1, Z._2, !0) : Z, at))
                          );
                        }))
                      )));
                    }), q = Y._3 && !P._3 ? F(P._1, P._2, !0) : P;
                    return n((R) => ct(
                      q,
                      n,
                      e,
                      r,
                      (E, S) => n((O) => (() => {
                        if (y === "<-") {
                          const W = De(
                            "Token",
                            { from: B, to: u, labels: z(Ic)(Lt(Xt.foldr, S)) }
                          );
                          return (Q, M, V, H, et) => et(Q, W);
                        }
                        const I = De(
                          "Token",
                          { from: u, to: B, labels: z(Ic)(Lt(Xt.foldr, S)) }
                        );
                        return (W, Q, M, V, H) => H(W, I);
                      })()(q._3 && !E._3 ? F(E._1, E._2, !0) : E, n, e, r, o))
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
)), QT = (t, n, e, r, o) => n((i) => Ro(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = ue(Ro), g = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => {
        const $ = k_(Ki(u) + mr(Lt(
          Xt.foldr,
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
)), Yo = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Ur(t)(
    n,
    e,
    r,
    (c, a) => o(F(c._1, c._2, s), a),
    (c, a) => e((g) => {
      const _ = Nc((() => {
        const l = Ct(Mt(($) => $ === "_"))("'_'"), h = Ct(Mt(($) => $ === "-"))("'-'");
        return ($, p, m, y, N) => {
          const T = $._1, w = $._2;
          return p((k) => Qi(
            F(T, w, !1),
            p,
            m,
            (L, G) => {
              const D = L._3;
              return p((Y) => {
                if (D)
                  return y(L, G);
                const X = $._1, P = $._2;
                return p((B) => Ro(
                  F(X, P, !1),
                  p,
                  m,
                  (tt, ct) => {
                    const q = tt._3;
                    return p((R) => {
                      if (q)
                        return y(tt, ct);
                      const E = $._1, S = $._2;
                      return p((O) => l(
                        F(E, S, !1),
                        p,
                        m,
                        (I, W) => {
                          const Q = I._3;
                          return p((M) => Q ? y(I, W) : h($, p, m, y, N));
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
          return e((y) => Zn(
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
}, WT = (t, n, e, r, o) => n((i) => fe(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => Yo("via")(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n(($) => vn(
          h,
          n,
          e,
          r,
          (p, m) => n((y) => {
            const N = h._3 && !p._3 ? F(p._1, p._2, !0) : p;
            return n((T) => fe(
              N,
              n,
              e,
              r,
              (w, k) => n((L) => {
                const G = N._3 && !w._3 ? F(w._1, w._2, !0) : w;
                return n((D) => vn(
                  G,
                  n,
                  e,
                  r,
                  (Y, X) => n((P) => o(G._3 && !Y._3 ? F(Y._1, Y._2, !0) : Y, { from: m, to: X }))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), tr = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Ur(t)(
    n,
    e,
    r,
    (c, a) => o(F(c._1, c._2, s), a),
    (c, a) => e((g) => {
      const _ = Nc((() => {
        const l = Ct(Mt(($) => $ === "_"))("'_'"), h = Ct(Mt(($) => $ === "-"))("'-'");
        return ($, p, m, y, N) => {
          const T = $._1, w = $._2;
          return p((k) => Qi(
            F(T, w, !1),
            p,
            m,
            (L, G) => {
              const D = L._3;
              return p((Y) => {
                if (D)
                  return y(L, G);
                const X = $._1, P = $._2;
                return p((B) => Ro(
                  F(X, P, !1),
                  p,
                  m,
                  (tt, ct) => {
                    const q = tt._3;
                    return p((R) => {
                      if (q)
                        return y(tt, ct);
                      const E = $._1, S = $._2;
                      return p((O) => l(
                        F(E, S, !1),
                        p,
                        m,
                        (I, W) => {
                          const Q = I._3;
                          return p((M) => Q ? y(I, W) : h($, p, m, y, N));
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
}, DT = (t, n, e, r, o) => n((i) => tr("+edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => fe(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(vn)("source node identifier"), $ = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => fe(
              T,
              n,
              e,
              r,
              (k, L) => n((G) => {
                const D = Ct(vn)("target node identifier"), Y = T._3 && !k._3 ? F(k._1, k._2, !0) : k;
                return n((X) => D(
                  Y,
                  n,
                  e,
                  r,
                  (P, B) => n((tt) => o(
                    Y._3 && !P._3 ? F(P._1, P._2, !0) : P,
                    De("AddEdge", { from: y, to: B })
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), HT = (t, n, e, r, o) => n((i) => tr("-edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => fe(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(vn)("source node identifier"), $ = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => fe(
              T,
              n,
              e,
              r,
              (k, L) => n((G) => {
                const D = Ct(vn)("target node identifier"), Y = T._3 && !k._3 ? F(k._1, k._2, !0) : k;
                return n((X) => D(
                  Y,
                  n,
                  e,
                  r,
                  (P, B) => n((tt) => o(
                    Y._3 && !P._3 ? F(P._1, P._2, !0) : P,
                    De("DelEdge", { from: y, to: B })
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), OT = (t, n, e, r, o) => n((i) => tr("-node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => fe(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(vn)("node identifier"), $ = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = ue((k, L, G, D, Y) => {
              const X = k._3;
              return WT(k, L, G, (P, B) => D(F(P._1, P._2, X), B), Y);
            }), w = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((k) => T(
              w,
              n,
              e,
              r,
              (L, G) => n((D) => o(
                w._3 && !L._3 ? F(L._1, L._2, !0) : L,
                De("DelNode", { id: y, via: Lt(Xt.foldr, G) })
              ))
            ));
          })
        ));
      })
    ));
  })
)), zT = (t, n, e, r, o) => n((i) => tr("enter")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => fe(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(vn)("node identifier"), $ = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => o(
            $._3 && !m._3 ? F(m._1, m._2, !0) : m,
            De("Enter", { id: y })
          ))
        ));
      })
    ));
  })
)), qT = (t, n, e, r, o) => n((i) => tr("exit")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => o(t._3 && !s._3 ? F(s._1, s._2, !0) : s, HJ))
)), YT = (t, n, e, r, o) => n((i) => tr("~edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => fe(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(vn)("source node identifier"), $ = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => fe(
              T,
              n,
              e,
              r,
              (k, L) => n((G) => {
                const D = Ct(vn)("target node identifier"), Y = T._3 && !k._3 ? F(k._1, k._2, !0) : k;
                return n((X) => D(
                  Y,
                  n,
                  e,
                  r,
                  (P, B) => n((tt) => {
                    const ct = Y._3 && !P._3 ? F(P._1, P._2, !0) : P;
                    return n((q) => Zn(
                      ct,
                      n,
                      e,
                      r,
                      (R, E) => n((S) => {
                        const O = Ct(Ur("->"))("'->'"), I = ct._3 && !R._3 ? F(R._1, R._2, !0) : R;
                        return n((W) => O(
                          I,
                          n,
                          e,
                          r,
                          (Q, M) => n((V) => {
                            const H = I._3 && !Q._3 ? F(Q._1, Q._2, !0) : Q;
                            return n((et) => Zn(
                              H,
                              n,
                              e,
                              r,
                              (j, ot) => n((Z) => {
                                const at = Ct(vn)("new source node identifier"), _t = H._3 && !j._3 ? F(j._1, j._2, !0) : j;
                                return n((Qt) => at(
                                  _t,
                                  n,
                                  e,
                                  r,
                                  (Tt, Bt) => n(($t) => {
                                    const xt = _t._3 && !Tt._3 ? F(Tt._1, Tt._2, !0) : Tt;
                                    return n((mt) => fe(
                                      xt,
                                      n,
                                      e,
                                      r,
                                      (rt, K) => n((st) => {
                                        const gt = Ct(vn)("new target node identifier"), dt = xt._3 && !rt._3 ? F(rt._1, rt._2, !0) : rt;
                                        return n((Nt) => gt(
                                          dt,
                                          n,
                                          e,
                                          r,
                                          (At, Vt) => n((Pn) => o(
                                            dt._3 && !At._3 ? F(At._1, At._2, !0) : At,
                                            De("RepointEdge", { from: y, to: B, newFrom: Bt, newTo: Vt })
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
)), XT = (t, n, e, r, o) => n((i) => tr("seed")(
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
        const h = Ct(QT)("integer (seed value)"), $ = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => Zn(
              T,
              n,
              e,
              r,
              (k, L) => n((G) => o(T._3 && !k._3 ? F(k._1, k._2, !0) : k, y))
            ));
          })
        ));
      })
    ));
  })
)), Xo = /* @__PURE__ */ kT(/* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (c, a) => e((g) => e((_) => {
      const d = n._3 && !c._3 ? F(c._1, c._2, !0) : c;
      return Zn(d, e, r, o, (l, h) => e(($) => i(d._3 && !l._3 ? F(l._1, l._2, !0) : l, h)));
    }))
  )));
})())(/* @__PURE__ */ Ct(/* @__PURE__ */ (() => {
  const t = Ct(Mt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => Zn(
    n,
    e,
    r,
    o,
    (c, a) => e((g) => e((_) => {
      const d = n._3 && !c._3 ? F(c._1, c._2, !0) : c;
      return t(d, e, r, o, (l, h) => e(($) => i(d._3 && !l._3 ? F(l._1, l._2, !0) : l, h)));
    }))
  )));
})())("closing '}'")), VT = /* @__PURE__ */ Xo((t, n, e, r, o) => n((i) => {
  const s = (a, g) => n((_) => (() => {
    if (g.tag === "Nothing")
      return (d, l, h, $, p) => p(d, A);
    if (g.tag === "Just") {
      const d = g._1, l = ue((() => {
        const h = Ct(Mt(($) => $ === ","))("','");
        return ($, p, m, y, N) => {
          const T = $._3;
          return p((w) => p((k) => p((L) => p((G) => p((D) => p((Y) => Dn(
            $,
            p,
            m,
            (X, P) => y(F(X._1, X._2, T), P),
            (X, P) => p((B) => p((tt) => {
              const ct = $._3 && !X._3 ? F(X._1, X._2, !0) : X;
              return h(
                ct,
                p,
                m,
                (q, R) => y(F(q._1, q._2, T), R),
                (q, R) => p((E) => {
                  const S = ct._3 && !q._3 ? F(q._1, q._2, !0) : q;
                  return p((O) => p((I) => {
                    const W = $._3 && !S._3 ? F(S._1, S._2, !0) : S;
                    return Dn(
                      W,
                      p,
                      m,
                      (Q, M) => y(F(Q._1, Q._2, T), M),
                      (Q, M) => p((V) => {
                        const H = W._3 && !Q._3 ? F(Q._1, Q._2, !0) : Q;
                        return p((et) => p((j) => {
                          const ot = $._3 && !H._3 ? F(H._1, H._2, !0) : H;
                          return uf(
                            ot,
                            p,
                            m,
                            (Z, at) => y(F(Z._1, Z._2, T), at),
                            (Z, at) => p((_t) => N(ot._3 && !Z._3 ? F(Z._1, Z._2, !0) : Z, at))
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
        (T, w) => $((k) => y(
          h._3 && !T._3 ? F(T._1, T._2, !0) : T,
          ST([d, ...Lt(Xt.foldr, w)])
        ))
      ));
    }
    f();
  })()(t._3 && !a._3 ? F(a._1, a._2, !0) : a, n, e, r, o)), u = t._1, c = t._2;
  return n((a) => n((g) => uf(
    F(u, c, !1),
    n,
    e,
    (_, d) => n((l) => s(t, J)),
    (_, d) => n((l) => s(_, v("Just", d)))
  )));
})), UT = (t, n, e, r, o) => n((i) => tr("+node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => fe(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(vn)("node identifier"), $ = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => n((k) => Dn(
              T,
              n,
              e,
              r,
              (L, G) => n((D) => {
                const Y = Mt((P) => P === `
` || P === "\r" || P === "#" || P === "}" || P === "{"), X = T._3 && !L._3 ? F(L._1, L._2, !0) : L;
                return n((P) => {
                  const B = (q, R) => n((E) => (R ? ((S, O, I, W, Q) => Q(S, "")) : AT)(
                    X._3 && !q._3 ? F(q._1, q._2, !0) : q,
                    n,
                    e,
                    r,
                    (S, O) => n((I) => {
                      const W = T._3 && !S._3 ? F(S._1, S._2, !0) : S;
                      return n((Q) => {
                        const M = (et, j) => n((ot) => o(
                          W._3 && !et._3 ? F(et._1, et._2, !0) : et,
                          De(
                            "AddNode",
                            {
                              id: y,
                              label: O,
                              shape: (() => {
                                const Z = CT("shape")(j);
                                if (Z.tag === "Just")
                                  return Z._1 === "rectangle" || Z._1 === "rect" ? Ge : Z._1 === "cylinder" || Z._1 === "cyl" ? Pc : Z._1 === "parallelogram" ? S1 : Z._1 === "diamond" ? C1 : Z._1 === "ellipse" ? P1 : Z._1 === "document" || Z._1 === "doc" ? Gc : Z._1 === "cloud" ? G1 : Ge;
                                if (Z.tag === "Nothing")
                                  return Ge;
                                f();
                              })()
                            }
                          )
                        )), V = W._1, H = W._2;
                        return n((et) => {
                          const j = (ot, Z) => {
                            const at = ot._3;
                            return n((_t) => at ? r(ot, Z) : M(W, A));
                          };
                          return n((ot) => n((Z) => Dn(
                            F(V, H, !1),
                            n,
                            e,
                            (at, _t) => j(F(at._1, at._2, !1), _t),
                            (at, _t) => n((Qt) => n((Tt) => VT(
                              at,
                              n,
                              e,
                              (Bt, $t) => j(F(Bt._1, Bt._2, !1), $t),
                              (Bt, $t) => n((xt) => M(at._3 && !Bt._3 ? F(Bt._1, Bt._2, !0) : Bt, $t))
                            )))
                          )));
                        });
                      });
                    })
                  )), tt = X._1, ct = X._2;
                  return n((q) => {
                    const R = (E, S) => {
                      const O = E._3;
                      return n((I) => O ? r(E, S) : B(X, !1));
                    };
                    return n((E) => n((S) => n((O) => xc(
                      F(tt, ct, !1),
                      n,
                      e,
                      (I, W) => {
                        const Q = I._3;
                        return n((M) => Q ? R(F(tt, ct, !1), W) : n((V) => Y(
                          F(tt, ct, !1),
                          n,
                          e,
                          (H, et) => R(F(tt, ct, !1), et),
                          (H, et) => n((j) => n((ot) => B(F(tt, ct, !1), !0)))
                        )));
                      },
                      (I, W) => n((Q) => n((M) => B(F(tt, ct, !1), !0)))
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
)), KT = (t, n, e, r, o) => n((i) => hl(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Ct(ml([UT, OT, YT, DT, HT, zT, qT, BT]))("statement (+node, -node, +edge, -edge, ~edge, enter, exit, or 'a -> b')"), g = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => o(
        g._3 && !d._3 ? F(d._1, d._2, !0) : d,
        yc("Leaf", { op: l, line: u.line, column: u.column })
      ))
    ));
  })
)), MT = (t, n, e, r, o) => n((i) => Yo("seq")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => Xo(vc(gl))(
    t._3 && !s._3 ? F(s._1, s._2, !0) : s,
    n,
    e,
    r,
    o
  ))
)), jT = (t, n, e, r, o) => n((i) => Yo("par")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => Xo(vc(OJ))(
    t._3 && !s._3 ? F(s._1, s._2, !0) : s,
    n,
    e,
    r,
    o
  ))
)), vc = (t) => {
  const n = ue(ZT());
  return (e, r, o, i, s) => r((u) => n(
    e,
    r,
    o,
    i,
    (c, a) => r((g) => s(
      e._3 && !c._3 ? F(c._1, c._2, !0) : c,
      t(Lt(Xt.foldr, a))
    ))
  ));
}, ZT = /* @__PURE__ */ gf(() => {
  const t = Nc(Ct(Mt((n) => n === "}"))("'}'"));
  return (n, e, r, o, i) => e((s) => {
    const u = n._3;
    return e((c) => e((a) => Zn(
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
              const T = ml([
                (k, L, G, D, Y) => {
                  const X = k._3;
                  return jT(k, L, G, (P, B) => D(F(P._1, P._2, X), B), Y);
                },
                (k, L, G, D, Y) => {
                  const X = k._3;
                  return MT(k, L, G, (P, B) => D(F(P._1, P._2, X), B), Y);
                },
                KT
              ]), w = n._3 && !y._3 ? F(y._1, y._2, !0) : y;
              return e((k) => T(
                w,
                e,
                r,
                o,
                (L, G) => e((D) => {
                  const Y = w._3 && !L._3 ? F(L._1, L._2, !0) : L;
                  return e((X) => Dn(
                    Y,
                    e,
                    r,
                    o,
                    (P, B) => e((tt) => {
                      const ct = Y._3 && !P._3 ? F(P._1, P._2, !0) : P;
                      return e((q) => PT(
                        ct,
                        e,
                        r,
                        o,
                        (R, E) => e((S) => i(ct._3 && !R._3 ? F(R._1, R._2, !0) : R, G))
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
}), tv = (t, n, e, r, o) => n((i) => Yo("frame")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((g) => RT(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = a._3 && !_._3 ? F(_._1, _._2, !0) : _;
        return n(($) => Zn(
          h,
          n,
          e,
          r,
          (p, m) => n((y) => {
            const N = Xo(vc(gl)), T = h._3 && !p._3 ? F(p._1, p._2, !0) : p;
            return n((w) => N(
              T,
              n,
              e,
              r,
              (k, L) => n((G) => {
                const D = T._3 && !k._3 ? F(k._1, k._2, !0) : k;
                return n((Y) => Zn(
                  D,
                  n,
                  e,
                  r,
                  (X, P) => n((B) => o(
                    D._3 && !X._3 ? F(X._1, X._2, !0) : X,
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
)), nv = (t, n, e, r, o) => n((i) => Yo("inside")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Ct(vn)("node identifier"), g = t._3 && !s._3 ? F(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => {
        const $ = g._3 && !d._3 ? F(d._1, d._2, !0) : d;
        return n((p) => Zn(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const T = $._3 && !m._3 ? F(m._1, m._2, !0) : m;
            return n((w) => Xo(xl)(
              T,
              n,
              e,
              r,
              (k, L) => n((G) => {
                const D = T._3 && !k._3 ? F(k._1, k._2, !0) : k;
                return n((Y) => Zn(
                  D,
                  n,
                  e,
                  r,
                  (X, P) => n((B) => o(D._3 && !X._3 ? F(X._1, X._2, !0) : X, { node: l, doc: L }))
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
    const d = ue(ev()), l = t._3 && !a._3 ? F(a._1, a._2, !0) : a;
    return n((h) => d(
      l,
      n,
      e,
      r,
      ($, p) => n((m) => {
        const y = Lt(Xt.foldr, p);
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
  return n((a) => n((g) => XT(
    F(u, c, !1),
    n,
    e,
    (_, d) => {
      const l = _._3;
      return n((h) => l ? r(_, d) : s(t, J));
    },
    (_, d) => n((l) => s(_, v("Just", d)))
  )));
}), ev = /* @__PURE__ */ gf(() => _T.defer((t) => (n, e, r, o, i) => {
  const s = n._1, u = n._2;
  return e((c) => e((a) => nv(
    F(s, u, !1),
    e,
    r,
    (g, _) => e((d) => e((l) => tv(n, e, r, o, (h, $) => e((p) => i(h, sf("TopFrame", $)))))),
    (g, _) => e((d) => i(g, sf("TopInside", _)))
  )));
})), rv = /* @__PURE__ */ (() => {
  const t = Ct((n, e, r, o, i) => e((s) => e((u) => Zn(
    n,
    e,
    r,
    o,
    (c, a) => e((g) => e((_) => {
      const d = n._3 && !c._3 ? F(c._1, c._2, !0) : c;
      return xc(
        d,
        e,
        r,
        o,
        (l, h) => e(($) => i(d._3 && !l._3 ? F(l._1, l._2, !0) : l, h))
      );
    }))
  ))))("'frame', 'inside', or end of input");
  return (n, e, r, o, i) => e((s) => e((u) => e((c) => e((a) => Zn(
    n,
    e,
    r,
    o,
    (g, _) => e((d) => e((l) => {
      const h = n._3 && !g._3 ? F(g._1, g._2, !0) : g;
      return xl(
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
              (k, L) => e((G) => i(w._3 && !k._3 ? F(k._1, k._2, !0) : k, p))
            );
          }));
        })
      );
    }))
  )))));
})(), ov = (t) => {
  const n = mT(t)(rv);
  if (n.tag === "Left")
    return Et("Left", { msg: n._1._1, line: n._1._2.line, column: n._1._2.column });
  if (n.tag === "Right")
    return Et("Right", n._1);
  f();
}, iv = (t) => {
  const n = ov(t);
  if (n.tag === "Left")
    return Et("Left", n._1.msg);
  if (n.tag === "Right")
    return Et("Right", n._1);
  f();
};
function sv(t, n, e, r) {
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
function si(t) {
  return function(n) {
    return function(e) {
      return function() {
        e.setAttribute(t, n);
      };
    };
  };
}
const uv = function() {
  return window;
};
function cv(t) {
  return function(n) {
    return function() {
      return n.requestAnimationFrame(t);
    };
  };
}
const av = (t) => t, fv = (t) => () => t.clientWidth || 0, gv = () => window.devicePixelRatio || 1, lv = (t, n) => {
  n.innerHTML = t;
}, Ws = (t, n, e) => {
  t.style.setProperty(n, e);
}, _v = (t) => (n) => t === n, Jl = (t) => t, Tl = (t, n, e) => ({ tag: t, _1: n, _2: e }), vl = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, dv = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, hv = /* @__PURE__ */ Tl("AutoSize"), cf = /* @__PURE__ */ Jl("CanvasRenderer"), pv = /* @__PURE__ */ Jl("SvgRenderer"), $v = (t) => (n) => {
  const e = t - n * nt($n(Ne(t / n)));
  return n <= 0 ? 0 : e < 0 ? e + n : e;
}, mv = (t) => x((n) => (e) => {
  const r = t(e);
  return () => (n(), r());
})(() => {
}), wl = () => Q_() / 1e3, Ds = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
  const g = Mn(s.layout), _ = R1(s.layout), d = { center: { x: _.x + _.w / 2, y: g.y + g.h / 2 }, zoom: Mu(s.layout)(g)(0) }, l = Xu(s.layout)(d), h = () => {
    const N = wl(), T = c.value;
    return c.value = N, T === 0 ? 0 : N - T;
  }, $ = cp(s)(vl(a)(s.totalDuration)), p = i ? $ : { ...$, levels: z((N) => ({ ...N, state: { ...N.state, frameTitle: "" } }))($.levels) }, m = s.dives.length === 0 && (l.w + 48) * 1.0909090909090908 <= 1100 && (l.h + 48) * 1.0909090909090908 <= 1400, y = m ? { ...p, camera: d, levels: z((N) => ({ ...N, state: { ...N.state, camera: d } }))(p.levels) } : p;
  if (n === "CanvasRenderer")
    return () => {
      const N = h(), T = av(t), w = Vr({ padding: 8, outputAspect: J })(y), k = (() => {
        if (e.tag === "FixedSize")
          return { w: e._1, h: e._2 };
        if (e.tag === "AutoSize") {
          if (m)
            return { w: w.vw * 1.0909090909090908, h: w.vh * 1.0909090909090908 };
          const R = fv(t)();
          return { w: R, h: w.vw <= 0 ? R : R * w.vh / w.vw };
        }
        f();
      })(), L = gv(), G = k.w * L, D = k.h * L, Y = D_(T)(), X = H_(T)(), P = O_(T)(G);
      Y !== G && P();
      const B = z_(T)(D);
      if (X !== D && B(), Ws(t, "height", un($n(sr(k.h))) + "px"), e.tag === "FixedSize")
        Ws(t, "width", un($n(sr(k.w))) + "px");
      else if (e.tag === "AutoSize") {
        const R = un($n(sr(k.w))) + "px";
        m && Ws(t, "width", R);
      } else
        f();
      const tt = W_(T)();
      or(tt)(), li(tt)({ scaleX: L, scaleY: L })();
      const ct = u.value, q = hJ(r)(o)(tt)({ width: k.w, height: k.h })(y)(N)(ct)();
      return u.value = q, ir(tt)();
    };
  if (n === "SvgRenderer")
    return () => {
      const N = h(), T = u.value, w = AJ((() => {
        if (e.tag === "AutoSize")
          return J;
        if (e.tag === "FixedSize")
          return e._1 <= 0 || e._2 <= 0 ? J : v("Just", e._1 / e._2);
        f();
      })())(r)(o)(y)(N)(T);
      return u.value = w.springs, si("viewBox")(w.parts.viewBox)(t)(), si("preserveAspectRatio")("xMidYMid meet")(t)(), e.tag === "FixedSize" ? (si("width")(un($n(sr(e._1))))(t)(), si("height")(un($n(sr(e._2))))(t)()) : e.tag === "AutoSize" || f(), lv(w.parts.body, t);
    };
  f();
}, yv = (t) => {
  const n = iv(t);
  if (n.tag === "Left")
    return Et("Left", n._1);
  if (n.tag === "Right") {
    const e = _l(n._1)(ll)._1;
    if (e.tag === "Left")
      return Et("Left", e._1.msg);
    if (e.tag === "Right")
      return Et("Right", e._1);
  }
  f();
}, Hs = (t) => (n) => {
  const e = jt((r) => r.startT <= n && n < r.endT)(t.spans);
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
}, Nv = { ...hd, tokenZoomFloor: 1, minZoom: 1.6, maxZoom: 3.2 }, xv = (t) => (n) => (e) => (r) => (o) => (i) => (s) => () => {
  let u = 1, c = !0, a = !1, g = 0, _ = 0;
  const d = { value: A }, l = { value: 0 };
  let h = !1, $ = [];
  Ds(t)(e)(r)(o)(i)(s)(n)(d)(l)(0)();
  const p = (k) => () => {
    const L = $, G = c, D = { time: k, keyframe: Hs(n)(k), playing: G };
    return mv((Y) => Y(D))(L)();
  }, m = () => (c = !1, p(g)()), y = () => {
    if (!h && (a = !1, c)) {
      const G = wl(), D = _;
      _ = G;
      const Y = u, X = g, P = $v(D === 0 ? X + 0 * Y : X + (G - D) * Y)(n.totalDuration + 0.8);
      return g = P, Ds(t)(e)(r)(o)(i)(s)(n)(d)(l)(P)(), p(P)(), N();
    }
  }, N = () => {
    if (!h && !a) {
      a = !0;
      const G = uv();
      cv(y)(G)();
    }
  }, T = () => (_ = 0, c = !0, N()), w = () => (c || T(), p(g)());
  return T(), {
    play: w,
    pause: m,
    toggle: () => c ? m() : w(),
    seek: (k) => {
      const L = dv(0)(vl(n.totalDuration)(k));
      return () => (g = L, _ = 0, Ds(t)(e)(r)(o)(i)(s)(n)(d)(l)(L)(), p(L)());
    },
    setSpeed: (k) => () => u = k,
    currentTime: () => g,
    currentKeyframe: () => {
      const k = g;
      return Hs(n)(k);
    },
    isPlaying: () => c,
    duration: n.totalDuration,
    subscribe: (k) => () => {
      $ = Dt($)(k);
      const G = g, D = c;
      k({ time: G, keyframe: Hs(n)(G), playing: D })();
      const Y = kf((X) => !_v(X)(k));
      return () => {
        $ = Y($);
      };
    },
    destroy: () => h = !0
  };
}, Jv = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = yv(n);
  if (u.tag === "Left")
    return () => Et("Left", u._1);
  if (u.tag === "Right") {
    const c = u._1, a = cg(c);
    return () => {
      const g = a(), _ = ag(c)(), d = Nh(Nv)(ah)(c)(fg(g)(_)(c));
      if (d.tag === "Left")
        return Et("Left", "precompute failed");
      if (d.tag === "Right") {
        const l = xv(t)(d._1)(e)(r)(o)(i)(s)();
        return Et("Right", l);
      }
      f();
    };
  }
  f();
}, af = In.createElement;
In.Fragment;
function wc(t) {
  return (n) => Array.isArray(n.children) ? af.apply(null, [t, n].concat(n.children)) : af(t, n);
}
function Tv(t) {
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
const kl = /* @__PURE__ */ Tv(wc), vv = /* @__PURE__ */ kl("canvas")(), wv = (t, n) => {
  const e = In.useRef(n);
  return e.current !== n && !t(e.current, n) && (e.current = n), e.current;
};
In.memo;
In.memo;
function ff(t, n) {
  const [e, r] = In.useState(
    typeof n == "function" ? () => n : n
  );
  return r.hasOwnProperty("$$reactBasicHooks$$cachedSetState") || (r.$$reactBasicHooks$$cachedSetState = (o) => () => r(o)), t(e, r.$$reactBasicHooks$$cachedSetState);
}
function bl(t, n, e) {
  const r = wv(t, n);
  In.useEffect(e, [r]);
}
const kv = In.useRef;
function bv(t) {
  return t.current;
}
In.useContext;
In.useDebugValue;
In.useId;
In.useDeferredValue;
In.useSyncExternalStore;
In.useSyncExternalStore;
function Lv(t, n) {
  return n.displayName = t, n.toString = () => t, n;
}
In.useEffectEvent || In.experimental_useEffectEvent;
const Ev = (t) => (n) => (e) => () => bl((r, o) => t.eq(r)(o), n, e), Sv = /* @__PURE__ */ N1(bv), Cv = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, Pv = (t) => {
  const n = {
    apply: (e) => (r) => () => {
      const o = e(), i = r();
      return o(i);
    },
    Functor0: () => Cv
  };
  return { pure: (e) => () => e, Apply0: () => n };
}, Gv = /* @__PURE__ */ Ev({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), Zr = /* @__PURE__ */ Wi(Oi)(Cl), ku = Pv().pure, Iv = /* @__PURE__ */ wc(vv), Av = {
  eq: (t) => (n) => (t.renderer === "CanvasRenderer" ? n.renderer === "CanvasRenderer" : t.renderer === "SvgRenderer" && n.renderer === "SvgRenderer") && (t.sizing.tag === "AutoSize" ? n.sizing.tag === "AutoSize" : t.sizing.tag === "FixedSize" && n.sizing.tag === "FixedSize" && t.sizing._1 === n.sizing._1 && t.sizing._2 === n.sizing._2) && t.source === n.source && (t.theme === "Light" ? n.theme === "Light" : t.theme === "Dark" ? n.theme === "Dark" : t.theme === "Blueprint" ? n.theme === "Blueprint" : t.theme === "Whiteboard" ? n.theme === "Whiteboard" : t.theme === "Isometric" && n.theme === "Isometric") && (t.transparency === "PaintBackground" ? n.transparency === "PaintBackground" : t.transparency === "TransparentBackground" && n.transparency === "TransparentBackground")
}, Fv = /* @__PURE__ */ kl("svg")(), Ll = (t) => (n) => {
  const e = rr(n.theme, J, qt), r = (() => {
    if (e.tag === "Nothing")
      return "light";
    if (e.tag === "Just")
      return e._1;
    f();
  })(), o = rr(n.renderer, J, qt), i = (() => {
    if (o.tag === "Nothing")
      return "canvas";
    if (o.tag === "Just")
      return o._1;
    f();
  })(), s = r === "light" ? v("Just", tf) : r === "dark" ? v("Just", pJ) : r === "blueprint" ? v("Just", $J) : r === "whiteboard" ? v("Just", mJ) : r === "isometric" ? v("Just", yJ) : J, u = i === "svg" ? v("Just", pv) : i === "canvas" ? v("Just", cf) : J, c = {
    source: t,
    renderer: (() => {
      if (u.tag === "Nothing")
        return cf;
      if (u.tag === "Just")
        return u._1;
      f();
    })(),
    sizing: (() => {
      const a = rr(n.width, J, qt);
      if (a.tag === "Just") {
        const g = rr(n.height, J, qt);
        if (g.tag === "Just")
          return Tl("FixedSize", a._1, g._1);
      }
      return hv;
    })(),
    theme: (() => {
      if (s.tag === "Nothing")
        return tf;
      if (s.tag === "Just")
        return s._1;
      f();
    })(),
    transparency: (() => {
      const a = rr(n.transparent, J, qt);
      if (a.tag === "Nothing")
        return !1;
      if (a.tag === "Just")
        return a._1;
      f();
    })() ? xJ : NJ
  };
  return () => {
    const a = kv(Pl), g = ff((h, $) => b(h, $), J), _ = g._1, d = ff((h, $) => b(h, $), { time: 0, keyframe: "", playing: !1 });
    Gv(b(i, r))((() => {
      const h = kc("[markgraf] unknown renderer " + Os(i) + ", defaulting to canvas"), $ = (() => {
        if (u.tag === "Nothing")
          return !0;
        if (u.tag === "Just")
          return !1;
        f();
      })() ? h : () => {
      };
      return () => {
        $();
        const p = kc("[markgraf] unknown theme " + Os(r) + ", defaulting to light");
        return (() => {
          if (s.tag === "Nothing")
            return !0;
          if (s.tag === "Just")
            return !1;
          f();
        })() && p(), () => {
        };
      };
    })())();
    const l = Sv(a);
    return bl(
      (h, $) => Av.eq(h)($),
      c,
      () => {
        const h = l(), $ = rr(h, J, qt), p = (() => {
          if ($.tag === "Just")
            return sv(J, qt, "Element", $._1);
          if ($.tag === "Nothing")
            return J;
          f();
        })();
        if (p.tag === "Nothing")
          return () => {
          };
        if (p.tag === "Just") {
          const m = Jv(p._1)(c.source)(c.renderer)(c.sizing)(c.theme)(c.transparency)(!0)();
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
    ), ku({
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
      play: Zr((h) => h.play)(_),
      pause: Zr((h) => h.pause)(_),
      toggle: Zr((h) => h.toggle)(_),
      seek: (h) => Zr(($) => $.seek(h))(_),
      setSpeed: (h) => Zr(($) => $.setSpeed(h))(_)
    })();
  };
}, Rv = /* @__PURE__ */ Lv(
  "MarkgrafPlayer",
  (t) => {
    const n = Ll(t.src)({ renderer: t.renderer, width: t.width, height: t.height, theme: t.theme, transparent: t.transparent })(), e = rr(t.renderer, J, qt);
    return (() => {
      if (e.tag === "Nothing")
        return "canvas";
      if (e.tag === "Just")
        return e._1;
      f();
    })() === "svg" ? ku(wc(Fv)({ className: "markgraf-player", ref: n.elementRef }))() : ku(Iv({ className: "markgraf-player", ref: n.elementRef }))();
  }
), Qv = (t, n) => Ll(t)(n ?? {}), Wv = Rv;
export {
  Wv as MarkgrafPlayer,
  Qv as useMarkgraf
};
