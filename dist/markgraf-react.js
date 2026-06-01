import In from "react";
function df(t) {
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
function Pe(t, n) {
  return n > 0 ? Math.floor(t / n) : n < 0 ? -Math.floor(t / -n) : 0;
}
const Sn = (t) => (n) => t, z = function(t) {
  return function(n) {
    for (var e = n.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = t(n[o]);
    return r;
  };
}, Al = { map: z }, hf = (t) => t, Jt = typeof Array.prototype.flatMap == "function" ? function(t) {
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
}, un = function(t) {
  return t.toString();
}, pf = function(t) {
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
}, bu = (t) => t, yn = /* @__PURE__ */ bu("LT"), Nn = /* @__PURE__ */ bu("GT"), Gn = /* @__PURE__ */ bu("EQ"), T = (t, n) => ({ tag: t, _1: n }), x = /* @__PURE__ */ T("Nothing"), Ot = (t) => T("Just", t), $f = (t) => {
  if (t.tag === "Nothing")
    return !0;
  if (t.tag === "Just")
    return !1;
  f();
}, mf = (t) => {
  if (t.tag === "Nothing")
    return !1;
  if (t.tag === "Just")
    return !0;
  f();
}, Et = (t, n) => ({ tag: t, _1: n }), Fl = (t) => Et("Right", t), Rl = {
  map: (t) => (n) => {
    if (n.tag === "Left")
      return Et("Left", n._1);
    if (n.tag === "Right")
      return Et("Right", t(n._1));
    f();
  }
}, yf = {
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
  Functor0: () => Rl
}, Bl = {
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
  Apply0: () => yf
}, Ql = { pure: Fl, Apply0: () => yf }, Nf = { Applicative0: () => Ql, Bind1: () => Bl }, Wl = (t) => t, Dl = { map: (t) => (n) => t(n) }, xf = { apply: (t) => (n) => t(n), Functor0: () => Dl }, Hl = { bind: (t) => (n) => n(t), Apply0: () => xf }, Ol = { pure: Wl, Apply0: () => xf }, Ue = { Applicative0: () => Ol, Bind1: () => Hl }, zl = function(t) {
  return function() {
    return t;
  };
}, ql = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return Bo.pure(e(r))();
  },
  Functor0: () => Yl
}, Bo = { pure: zl, Apply0: () => ql }, Yl = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, io = (t, n) => ({ tag: t, _1: n }), Jf = (t) => io("Loop", t), Xl = {
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
  Monad0: () => Ue
}, Vl = function(t) {
  return function(n) {
    return function() {
      return t(n());
    };
  };
}, Ul = function(t) {
  return function() {
    return t;
  };
}, Kl = { map: Vl }, Ml = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return vf.pure(e(r))();
  },
  Functor0: () => Kl
}, vf = { pure: Ul, Apply0: () => Ml }, jl = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, Zl = function(t, n) {
  return n.push(t);
}, t_ = /* @__PURE__ */ jl(Zl), n_ = (t, n) => ({ tag: "Iterator", _1: t, _2: n }), e_ = (t) => (n) => (e) => () => {
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
}, r_ = (t) => (n) => () => {
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
}, po = function(t) {
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
}, Hi = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldr((o) => {
    const i = r(o);
    return (s) => n.apply(n.Functor0().map((u) => hf)(i))(s);
  })(t.pure());
}, o_ = (t) => {
  const n = Hi(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, i_ = {
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
}, Qt = {
  foldr: po,
  foldl: J,
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => Qt.foldr((r) => (o) => t.Semigroup0().append(e(r))(o))(n);
  }
}, b = (t, n) => ({ tag: "Tuple", _1: t, _2: n }), He = (t) => (n) => b(t, n), Oi = (t) => t._2, zi = (t) => t._1, Ft = function(t) {
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
const s_ = Lu, u_ = Lu, Qo = Lu, Eu = function(t) {
  return function(n) {
    return function(e) {
      if (n.length !== e.length) return !1;
      for (var r = 0; r < n.length; r++)
        if (!t(n[r])(e[r])) return !1;
      return !0;
    };
  };
}, ge = { eq: Qo }, c_ = { eq: u_ }, Ar = { eq: s_ };
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
const a_ = Su, f_ = Su, g_ = Su, P = { compare: /* @__PURE__ */ g_(yn)(Gn)(Nn), Eq0: () => ge }, ft = { compare: /* @__PURE__ */ f_(yn)(Gn)(Nn), Eq0: () => c_ }, st = { compare: /* @__PURE__ */ a_(yn)(Gn)(Nn), Eq0: () => Ar }, l_ = function(t) {
  return t;
}, __ = /* @__PURE__ */ (function() {
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
})(), d_ = (t) => t, nr = {
  traverse: (t) => {
    const n = t.Apply0();
    return __(n.apply)(n.Functor0().map)(t.pure);
  },
  sequence: (t) => nr.traverse(t)(d_),
  Functor0: () => Al,
  Foldable1: () => Qt
}, It = function(t, n) {
  for (var e = t > n ? -1 : 1, r = new Array(e * (n - t) + 1), o = t, i = 0; o !== n; )
    r[i++] = o, o += e;
  return r[i] = o, r;
};
var h_ = function(t, n) {
  if (t < 1)
    return [];
  var e = new Array(t);
  return e.fill(n);
}, p_ = function(t, n) {
  for (var e = [], r = 0, o = 0; o < t; o++)
    e[r++] = n;
  return e;
};
const $_ = typeof Array.prototype.fill == "function" ? h_ : p_, Lt = /* @__PURE__ */ (function() {
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
}, Tf = function(t, n, e, r) {
  for (var o = 0; o < r.length; o++) {
    var i = e(r[o]);
    if (n(i)) return i;
  }
  return t;
}, Ke = function(t, n, e, r) {
  for (var o = 0, i = r.length; o < i; o++)
    if (e(r[o])) return t(o);
  return n;
}, wf = function(t, n, e, r) {
  for (var o = r.length - 1; o >= 0; o--)
    if (e(r[o])) return t(o);
  return n;
}, kf = function(t, n, e, r, o) {
  if (e < 0 || e > o.length) return n;
  var i = o.slice();
  return i.splice(e, 0, r), t(i);
}, bf = function(t, n, e, r) {
  if (e < 0 || e >= r.length) return n;
  var o = r.slice();
  return o.splice(e, 1), t(o);
}, Me = function(t, n, e, r, o) {
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
}, m_ = function(t, n, e) {
  for (var r = e.length, o = n, i = new Array(r), s = 0; s < r; s++)
    o = t(o)(e[s]), i[s] = o;
  return i;
}, y_ = /* @__PURE__ */ (function() {
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
}, Lf = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (!t(n[r])) return !1;
  return !0;
}, kt = (t) => (n) => y_(
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
), N_ = (t) => (n) => kt((e) => (r) => t.compare(n(e))(n(r))), Rt = (t) => (n) => (() => {
  const e = t_(n);
  return () => {
    const r = [...t];
    return e(r)(), r;
  };
})()(), qi = (t) => {
  if (t.length === 0)
    return t.length - 1 | 0, x;
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? T("Just", { init: bt(0, t.length - 1 | 0, t), last: t[n] }) : x;
}, Ef = (t) => (n) => (e) => t >= 0 && t < e.length ? Me(Ot, x, t, n(e[t]), e) : x, ar = (t) => (n) => {
  const r = ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if (c >= 0 && c < n.length) {
        if (t(n[c])) {
          i = c + 1 | 0;
          continue;
        }
        s = !1, u = T("Just", c);
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
}, Fr = (t) => (n) => {
  const e = kt((r) => (o) => t(r._2)(o._2))(Ft(He)(n));
  return 0 < e.length ? z(Oi)(N_(st)(zi)((() => {
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
}, x_ = (t) => (n) => {
  const e = [], o = n_(
    (i) => i >= 0 && i < n.length ? T("Just", n[i]) : x,
    { value: 0 }
  );
  return r_(o)((i) => () => {
    const s = [];
    s.push(i), e_(t(i))(o)(s)(), e.push(s);
  })(), e;
}, Kt = (t) => (n) => {
  const e = Ke(Ot, x, t, n);
  return e.tag === "Just" ? T("Just", n[e._1]) : x;
}, Sf = (t) => (n) => lt(t, n), Hn = (t) => (n) => (e) => {
  const r = Ke(Ot, x, (o) => t.eq(o)(n), e);
  if (r.tag === "Nothing")
    return !1;
  if (r.tag === "Just")
    return !0;
  f();
}, Cf = (t) => (n) => Jt(n)(t), yt = (t) => Cf((n) => {
  const e = t(n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [e._1];
  f();
}), on = function(t) {
  return function(n) {
    return t + n | 0;
  };
}, Rr = function(t) {
  return function(n) {
    return t + n;
  };
}, Ye = function(t) {
  return function(n) {
    if (n === 0) return 0;
    var e = Math.abs(n);
    return (t % e + e) % e;
  };
}, J_ = function(t) {
  return function(n) {
    return t + n;
  };
}, rn = function(t) {
  return function(n) {
    return t.length === 0 ? n : n.length === 0 ? t : t.concat(n);
  };
}, v_ = { append: J_ }, T_ = { append: rn }, w_ = { mempty: "", Semigroup0: () => v_ }, k_ = { mempty: [], Semigroup0: () => T_ }, b_ = null;
function Se(t, n, e) {
  return t == null ? n : e(t);
}
const L_ = function(t) {
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
}, E_ = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, S_ = { unfoldr1: /* @__PURE__ */ L_($f)(E_)(zi)(Oi) }, C_ = function(t) {
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
}, P_ = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, Xn = {
  unfoldr: /* @__PURE__ */ C_($f)(P_)(zi)(Oi),
  Unfoldable10: () => S_
}, G_ = function(t) {
  return function() {
    console.log(t);
  };
}, kc = function(t) {
  return function() {
    console.warn(t);
  };
};
function I_(t) {
  return function(n) {
    var e = [];
    for (var r in n)
      hasOwnProperty.call(n, r) && e.push(t(r)(n[r]));
    return e;
  };
}
const A_ = (t) => {
  const n = I_(He);
  return (e) => {
    const r = n(e), o = r.length;
    return t.unfoldr((i) => i < o ? T("Just", b(r[i], i + 1 | 0)) : x)(0);
  };
}, F_ = isFinite, je = Math.abs, R_ = Math.acos, fr = function(t) {
  return function(n) {
    return Math.atan2(t, n);
  };
}, Yi = Math.ceil, re = Math.cos, Xi = Math.exp, Ne = Math.floor, bc = Math.log, B_ = function(t) {
  return function(n) {
    return Math.min(t, n);
  };
}, zs = function(t) {
  return function(n) {
    return Math.pow(t, n);
  };
}, cr = Math.round, Kn = Math.sin, En = Math.sqrt, Q_ = Math.tan, W_ = function(t) {
  return function(n) {
    return function(e) {
      return (e | 0) === e ? t(e) : n;
    };
  };
}, et = function(t) {
  return t;
}, D_ = function(t) {
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
}, H_ = /* @__PURE__ */ D_(Ot)(x), O_ = /* @__PURE__ */ H_(10), Pf = /* @__PURE__ */ W_(Ot)(x), $n = (t) => {
  if (!F_(t))
    return 0;
  if (t >= et(2147483647))
    return 2147483647;
  if (t <= et(-2147483648))
    return -2147483648;
  const n = Pf(t);
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
}, zt = (t, n, e, r, o, i, s) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s }), Mn = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), Uo = (t, n, e) => ({ tag: "Split", _1: t, _2: n, _3: e }), Lc = (t, n, e) => ({ tag: "SplitLast", _1: t, _2: n, _3: e }), A = /* @__PURE__ */ zt("Leaf"), we = /* @__PURE__ */ Mn("IterLeaf"), an = (t, n, e, r) => {
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
}, Yn = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r.tag === "Leaf" ? zt("Node", 1, 1, t, n, A, A) : r.tag === "Node" && r._1 > 1 ? r._5.tag === "Node" && (() => {
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
}, Br = (t, n, e) => {
  if (e.tag === "Leaf")
    return Uo(x, A, A);
  if (e.tag === "Node") {
    const r = t(n)(e._3);
    if (r === "LT") {
      const o = Br(t, n, e._5);
      return Uo(o._1, o._2, Yn(e._3, e._4, o._3, e._6));
    }
    if (r === "GT") {
      const o = Br(t, n, e._6);
      return Uo(o._1, Yn(e._3, e._4, e._5, o._2), o._3);
    }
    if (r === "EQ")
      return Uo(T("Just", e._4), e._5, e._6);
  }
  f();
}, Gf = (t, n, e, r) => {
  if (r.tag === "Leaf")
    return Lc(t, n, e);
  if (r.tag === "Node") {
    const o = Gf(r._3, r._4, r._5, r._6);
    return Lc(o._1, o._2, Yn(t, n, e, o._3));
  }
  f();
}, Wo = (t, n) => {
  if (t.tag === "Leaf")
    return n;
  if (t.tag === "Node") {
    const e = Gf(t._3, t._4, t._5, t._6);
    return Yn(e._1, e._2, e._3, n);
  }
  f();
}, Ge = (t, n, e) => {
  if (n.tag === "Leaf")
    return A;
  if (e.tag === "Leaf")
    return n;
  if (e.tag === "Node") {
    const r = Br(t, e._3, n);
    return Wo(Ge(t, r._2, e._5), Ge(t, r._3, e._6));
  }
  f();
}, _i = (t, n, e, r) => {
  if (e.tag === "Leaf" || r.tag === "Leaf")
    return A;
  if (r.tag === "Node") {
    const o = Br(t, r._3, e), i = _i(t, n, o._2, r._5), s = _i(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return Yn(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return Wo(i, s);
  }
  f();
}, Cn = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r;
  if (r.tag === "Leaf")
    return e;
  if (r.tag === "Node") {
    const o = Br(t, r._3, e), i = Cn(t, n, o._2, r._5), s = Cn(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return Yn(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return Yn(r._3, r._4, i, s);
  }
  f();
}, z_ = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return A;
    if (r.tag === "Node") {
      const o = n(r._3)(r._4);
      if (o.tag === "Just")
        return Yn(r._3, o._1, e(r._5), e(r._6));
      if (o.tag === "Nothing")
        return Wo(e(r._5), e(r._6));
    }
    f();
  };
  return e;
}, q_ = (t) => (n) => (r) => {
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
              _ = Mn("IterEmit", p._3, p._4, $), d = p._5;
              continue;
            }
            _ = Mn("IterEmit", p._3, p._4, Mn("IterNode", p._6, $)), d = p._5;
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
}, ke = /* @__PURE__ */ q_((t, n, e) => T("Just", b(b(t, n), e)))((t) => x), Tt = (t) => (n) => (e) => (r) => {
  const o = (i) => {
    if (i.tag === "Leaf")
      return zt("Node", 1, 1, e, r, A, A);
    if (i.tag === "Node") {
      const s = t.compare(e)(i._3);
      if (s === "LT")
        return Yn(i._3, i._4, o(i._5), i._6);
      if (s === "GT")
        return Yn(i._3, i._4, i._5, o(i._6));
      if (s === "EQ")
        return zt("Node", i._1, i._2, e, n(i._4)(r), i._5, i._6);
    }
    f();
  };
  return o;
}, K = (t) => (n) => (e) => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return zt("Node", 1, 1, n, e, A, A);
    if (o.tag === "Node") {
      const i = t.compare(n)(o._3);
      if (i === "LT")
        return Yn(o._3, o._4, r(o._5), o._6);
      if (i === "GT")
        return Yn(o._3, o._4, o._5, r(o._6));
      if (i === "EQ")
        return zt("Node", o._1, o._2, n, e, o._5, o._6);
    }
    f();
  };
  return r;
}, nn = (t) => (n) => n.foldl((e) => (r) => K(t)(r._1)(r._2)(e))(A), $o = (t) => (n) => {
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
        return Wo(r._5, r._6);
    }
    f();
  };
  return e;
}, If = (t) => {
  const n = t.compare;
  return (e) => (r) => (o) => {
    const i = Br(n, r, o), s = e(i._1);
    if (s.tag === "Nothing")
      return Wo(i._2, i._3);
    if (s.tag === "Just")
      return Yn(r, s._1, i._2, i._3);
    f();
  };
};
function Cu(t) {
  return function(n) {
    return function(e) {
      return t.apply(e, [n]);
    };
  };
}
const Y_ = Cu(Number.prototype.toPrecision), X_ = Cu(Number.prototype.toFixed), V_ = Cu(Number.prototype.toExponential), Af = (t, n) => ({ tag: t, _1: n }), Ff = (t) => (n) => (e) => {
  const r = st.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = st.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, Rf = (t) => {
  if (t.tag === "Precision")
    return Y_(t._1);
  if (t.tag === "Fixed")
    return X_(t._1);
  if (t.tag === "Exponential")
    return V_(t._1);
  f();
};
function U_() {
  return Date.now();
}
function K_(t) {
  return function() {
    return t.getContext("2d");
  };
}
function M_(t) {
  return function() {
    return t.width;
  };
}
function j_(t) {
  return function() {
    return t.height;
  };
}
function Z_(t) {
  return function(n) {
    return function() {
      t.width = n;
    };
  };
}
function t1(t) {
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
function n1(t) {
  return function(n) {
    return function() {
      t.fillStyle = n;
    };
  };
}
function e1(t) {
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
function r1(t) {
  return function(n) {
    return function() {
      t.globalCompositeOperation = n;
    };
  };
}
function o1(t) {
  return function(n) {
    return function() {
      t.globalAlpha = n;
    };
  };
}
function Bf(t) {
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
function i1(t) {
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
function Qf(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.moveTo(n, e);
      };
    };
  };
}
function Wf(t) {
  return function() {
    t.closePath();
  };
}
function s1(t) {
  return function(n) {
    return function() {
      t.fillRect(n.x, n.y, n.width, n.height);
    };
  };
}
function u1(t) {
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
function qs(t) {
  return function(n) {
    return function() {
      t.translate(n.translateX, n.translateY);
    };
  };
}
function c1(t) {
  return function(n) {
    return function() {
      t.transform(n.a, n.b, n.c, n.d, n.e, n.f);
    };
  };
}
function a1(t) {
  return function(n) {
    return function() {
      t.textAlign = n;
    };
  };
}
function f1(t) {
  return function(n) {
    return function() {
      t.textBaseline = n;
    };
  };
}
function g1(t) {
  return function(n) {
    return function() {
      t.font = n;
    };
  };
}
function l1(t) {
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
function sr(t) {
  return function() {
    t.save();
  };
}
function ur(t) {
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
function _1(t) {
  return function(n) {
    return function() {
      t.bezierCurveTo(n.cp1x, n.cp1y, n.cp2x, n.cp2y, n.x, n.y);
    };
  };
}
const Df = (t) => t, Au = (t) => t, Fu = (t) => t, Ru = (t) => t, Vi = (t) => t, d1 = /* @__PURE__ */ Vi("BaselineTop"), h1 = /* @__PURE__ */ Vi("BaselineMiddle"), p1 = /* @__PURE__ */ Vi("BaselineAlphabetic"), $1 = /* @__PURE__ */ Vi("BaselineBottom"), m1 = /* @__PURE__ */ Ru("AlignLeft"), y1 = /* @__PURE__ */ Ru("AlignRight"), N1 = /* @__PURE__ */ Ru("AlignCenter"), Bu = /* @__PURE__ */ Fu("BevelJoin"), Ui = /* @__PURE__ */ Fu("RoundJoin"), Qu = /* @__PURE__ */ Fu("MiterJoin"), Wu = /* @__PURE__ */ Au("Round"), Du = /* @__PURE__ */ Au("Square"), Hu = /* @__PURE__ */ Au("Butt"), x1 = /* @__PURE__ */ Df("SourceOver"), J1 = /* @__PURE__ */ Df("Difference"), v1 = (t) => (n) => f1(t)((() => {
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
})()), T1 = (t) => (n) => a1(t)((() => {
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
}, Ou = (t) => (n) => {
  if (n === "Round")
    return Ns(t)("round");
  if (n === "Square")
    return Ns(t)("square");
  if (n === "Butt")
    return Ns(t)("butt");
  f();
}, Ec = (t) => (n) => r1(t)((() => {
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
}, w1 = (t) => {
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
}, er = function(t) {
  return t.split("");
}, Mi = function(t) {
  return t;
}, Ze = function(t) {
  return t.length;
}, Sc = function(t) {
  return function(n) {
    return n.substr(0, t);
  };
}, mo = function(t) {
  return function(n) {
    return n.substring(t);
  };
}, k1 = function(t) {
  return function(n) {
    return { before: n.substring(0, t), after: n.substring(t) };
  };
}, b1 = (t) => (n) => {
  const e = k1(Ze(t))(n);
  return e.before === t ? T("Just", e.after) : x;
}, L1 = function(t) {
  var n = null;
  return function() {
    return t === void 0 || (n = t(), t = void 0), n;
  };
}, E1 = function(t) {
  return t();
}, S1 = function(n) {
  return function(e) {
    return function() {
      return n(e);
    };
  };
}, C1 = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, P1 = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, hr = (t) => BigInt(t), G1 = (t) => Number(t), ai = (t) => (n) => t + n, fi = (t) => (n) => t * n, Ys = (t) => (n) => t - n, Hf = 0n, hi = 1n, Of = (t) => (n) => t ^ n, yo = (t) => (n) => t & n, zu = (t) => (n) => t << n, Xs = (t) => (n) => t >> n, I1 = (t) => (n) => t == n, A1 = (t) => (n) => t === n ? 0 : t > n ? 1 : -1, F1 = { eq: I1 }, Cc = {
  compare: (t) => (n) => {
    const e = A1(t)(n);
    return e === 1 ? Nn : e === 0 ? Gn : yn;
  },
  Eq0: () => F1
}, R1 = /* @__PURE__ */ C1(Ot)(x), B1 = /* @__PURE__ */ P1(Ot)(x), zf = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = ft.compare(n._1)(e._1);
      return r === "LT" ? yn : r === "GT" ? Nn : ft.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), Q1 = (t) => (n) => je(t._1 - n._1) + je(t._2 - n._2), yr = (t) => t, ji = (t) => t, dn = /* @__PURE__ */ ji("North"), hn = /* @__PURE__ */ ji("South"), pe = /* @__PURE__ */ ji("East"), or = /* @__PURE__ */ ji("West"), Ie = /* @__PURE__ */ yr("Rectangle"), Pc = /* @__PURE__ */ yr("Cylinder"), W1 = /* @__PURE__ */ yr("Parallelogram"), D1 = /* @__PURE__ */ yr("Diamond"), H1 = /* @__PURE__ */ yr("Ellipse"), Gc = /* @__PURE__ */ yr("Document"), O1 = /* @__PURE__ */ yr("Cloud"), Ic = (t) => t, qf = /* @__PURE__ */ J(Rr)(0), z1 = (t) => (n) => (e) => {
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
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Qr = (t) => (n) => {
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
  ), r = qf(z((s) => s.len)(e)), o = z1(0)(r)(n * r), i = (s) => (u) => (c) => {
    let a = s, g = u, _ = c, d = !0, l;
    for (; d; ) {
      const h = a, $ = g, p = _, m = Bt((y) => x, (y) => (N) => T("Just", { head: y, tail: N }), h);
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
  return 0 < t.length ? T("Just", i(e)(o)(t[0])) : x;
}, q1 = (t) => (n) => {
  const e = ye(1)(t.w), r = ye(1)(t.h), o = ye(1)(n.w - 8), i = ye(1)(n.h - 8), s = No(o / e)(i / r);
  return { scale: s, tx: n.x + 4 + (o - e * s) / 2 - t.x * s, ty: n.y + 4 + (i - r * s) / 2 - t.y * s };
}, Do = (t) => qf(wn(
  (n) => (e) => {
    const r = e.y - n.y, o = e.x - n.x;
    return En(o * o + r * r);
  },
  t,
  bt(1, t.length, t)
)), Y1 = (t) => (n) => (e) => (r) => (o) => {
  const i = 0 < t.length ? T("Just", t[0]) : x, s = (() => {
    if (i.tag === "Nothing")
      return n;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = t.length - 1 | 0, c = u >= 0 && u < t.length ? T("Just", t[u]) : x, a = (() => {
    if (c.tag === "Nothing")
      return e;
    if (c.tag === "Just")
      return c._1;
    f();
  })(), g = ye(0.05)(1 - o.pre - o.post), _ = r < o.pre ? 0 : r > 1 - o.post ? 1 : (r - o.pre) / g, d = a.x - e.x, l = 2 * (() => {
    const v = a.y - e.y;
    return (d < 0 ? -d : d) + (v < 0 ? -v : v);
  })(), h = s.x - n.x, $ = 2 * (() => {
    const v = s.y - n.y;
    return (h < 0 ? -h : h) + (v < 0 ? -v : v);
  })(), p = $ + Do(t) + l, m = p <= 1e-4 ? 1 : 1 - l / p, y = p <= 1e-4 ? 0 : $ / p;
  if (_ <= y) {
    const v = y <= 1e-4 ? 1 : _ / y;
    return { x: n.x + (s.x - n.x) * v, y: n.y + (s.y - n.y) * v };
  }
  if (_ >= m) {
    const v = m >= 1 ? 0 : (_ - m) / (1 - m);
    return { x: a.x + (e.x - a.x) * v, y: a.y + (e.y - a.y) * v };
  }
  const N = Qr(t)((_ - y) / ye(1e-4)(m - y));
  if (N.tag === "Nothing")
    return s;
  if (N.tag === "Just")
    return N._1;
  f();
}, X1 = (t) => {
  const n = Bt(
    (e) => x,
    (e) => (r) => T("Just", { head: e, tail: r }),
    (() => {
      const e = (r, o) => {
        if (r.tag === "Leaf")
          return o;
        if (r.tag === "Node")
          return e(r._5, qt("Cons", r._4, e(r._6, o)));
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
    const e = J((r) => (o) => ({ minX: No(r.minX)(o.x), minY: No(r.minY)(o.y), maxX: ye(r.maxX)(o.x), maxY: ye(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, qu = { scale: 1, tx: 0, ty: 0 }, jn = (t) => {
  const n = Bt(
    (e) => x,
    (e) => (r) => T("Just", { head: e, tail: r }),
    [
      ...(() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, qt("Cons", r._4, e(r._6, o)));
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
            return e(r._5, qt("Cons", r._4, e(r._6, o)));
          f();
        };
        return Lt(Xt.foldr, e(t.edges, Yt));
      })()),
      ...zn((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, qt("Cons", r._4, e(r._6, o)));
          f();
        };
        return Lt(Xt.foldr, e(t.chipExtras, Yt));
      })())
    ]
  );
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: No(r.minX)(o.x), minY: No(r.minY)(o.y), maxX: ye(r.maxX)(o.x), maxY: ye(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, V1 = (t) => (n) => ((r) => (o) => (i) => {
  let s = r, u = o, c = i, a = !0, g;
  for (; a; ) {
    const _ = s, d = u, l = c, h = Bt(($) => x, ($) => (p) => T("Just", { head: $, tail: p }), d);
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
          const p = q1(jn($._1.layout))((() => {
            const m = Ac(h._1.head)(_.layout.nodes);
            if (m.tag === "Nothing")
              return { x: 0, y: 0, w: 1, h: 1, label: "", shape: Ie };
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
})(t)(n)(qu), Yf = (t) => t, Fc = (t, n) => ({ tag: t, _1: n }), Zi = (t, n) => ({ tag: t, _1: n }), Yu = (t, n) => ({ tag: t, _1: n }), U1 = /* @__PURE__ */ Yu("First"), K1 = /* @__PURE__ */ Yf("Forward"), M1 = /* @__PURE__ */ Yf("Backward"), j1 = /* @__PURE__ */ Zi("ExitNode"), Xf = /* @__PURE__ */ nn(P)(Qt), Z1 = (t) => po((n) => (e) => ({
  nodes: Cn(P.compare, Sn, n.nodes, e.nodes),
  edges: Cn(P.compare, Sn, n.edges, e.edges)
}))({ nodes: A, edges: A })(t.keyframes), td = (t) => (n) => ({
  entering: {
    nodes: Ge(P.compare, n.nodes, t.nodes),
    edges: Ge(P.compare, n.edges, t.edges)
  },
  leaving: {
    nodes: Ge(P.compare, t.nodes, n.nodes),
    edges: Ge(P.compare, t.edges, n.edges)
  },
  surviving: {
    nodes: _i(P.compare, Sn, t.nodes, n.nodes),
    edges: _i(P.compare, Sn, t.edges, n.edges)
  }
}), pi = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Wr = (t) => (n) => {
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
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
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
      const u = P.compare(t)(s._3);
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
}, nd = /* @__PURE__ */ J((t) => (n) => K(P)(n)()(t))(A), ed = /* @__PURE__ */ J((t) => (n) => K(P)(n)()(t))(A), rd = /* @__PURE__ */ (() => {
  const t = Xn.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), Vf = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Rc = /* @__PURE__ */ nn(P)(Qt), uo = (t) => {
  const n = Bt((e) => x, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: pi(r.minX)(o.x), minY: pi(r.minY)(o.y), maxX: Wr(r.maxX)(o.x), maxY: Wr(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, od = (t) => {
  const n = Bt((e) => x, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return x;
  if (n.tag === "Just")
    return T("Just", uo(t));
  f();
}, id = (t) => (n) => (e) => nd(Jt(Lt(On.foldr, e))((r) => {
  const o = xo(r)(t);
  if (o.tag === "Just")
    return lt((i) => !Vs(i)(n), [o._1.source, o._1.target]);
  if (o.tag === "Nothing")
    return [];
  f();
})), sd = (t) => t.kind.tag === "SendToken" ? T("Just", b(t.kind._1.edge, { source: t.kind._1.from, target: t.kind._1.to })) : x, ud = (t) => t.tag === "DataFlow" ? yt(sd)(t._1.events) : [], cd = (t) => (n) => ed(yt((e) => Vs(e._2.source)(n) || Vs(e._2.target)(n) ? T("Just", e._1) : x)(rd(t))), ad = (t) => {
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? 0 < t.length ? t[0].x === t[n].x && t[0].y === t[n].y ? T("Just", uo([t[0]])) : T("Just", uo([t[0], t[n]])) : x : 0 < t.length ? T("Just", uo([t[0]])) : x;
}, $i = (t) => {
  const n = Bt((e) => x, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: pi(r.minX)(o.x), minY: pi(r.minY)(o.y), maxX: Wr(r.maxX)(o.x + o.w), maxY: Wr(r.maxY)(o.y + o.h) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x + n._1.head.w,
      maxY: n._1.head.y + n._1.head.h
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, Uf = (t) => (n) => (e) => {
  if (e.tag === "Leaf")
    return jn(t);
  const r = cd(n)(e), o = [
    ...yt((i) => {
      const s = Vf(i)(t.nodes);
      return s.tag === "Just" ? T("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : x;
    })(Lt(
      On.foldr,
      Cn(P.compare, Sn, e, id(n)(e)(r))
    )),
    ...yt((i) => {
      const s = xo(i)(t.edges);
      return s.tag === "Just" ? T("Just", uo(s._1)) : x;
    })(Lt(On.foldr, r)),
    ...yt((i) => {
      const s = xo(i)(t.chipExtras);
      if (s.tag === "Just")
        return od(s._1);
      if (s.tag === "Nothing")
        return x;
      f();
    })(Lt(On.foldr, r))
  ];
  return o.length === 0 ? jn(t) : $i(o);
}, Zr = (t) => (n) => (e) => {
  const r = [
    ...yt((o) => o)([
      (() => {
        const o = xo(e)(t.chipExtras);
        if (o.tag === "Just")
          return ad(o._1);
        if (o.tag === "Nothing")
          return x;
        f();
      })()
    ]),
    ...(() => {
      const o = xo(e)(n);
      if (o.tag === "Just")
        return yt((i) => {
          const s = Vf(i)(t.nodes);
          return s.tag === "Just" ? T("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : x;
        })([o._1.source, o._1.target]);
      if (o.tag === "Nothing")
        return [];
      f();
    })()
  ];
  return r.length === 0 ? Uf(t)(n)(A) : $i(r);
}, Xu = (t) => (n) => {
  const e = jn(t), r = e.w / Wr(1e-4)(n.zoom), o = e.h / Wr(1e-4)(n.zoom);
  return { x: n.center.x - r / 2, y: n.center.y - o / 2, w: r, h: o };
}, fd = (t) => Cn(
  P.compare,
  Sn,
  Rc(z((n) => b(n.id, { source: n.from.node, target: n.to.node }))(t.graph.edges)),
  Rc(Jt(t.scenes)(ud))
), Vu = (t) => t, gd = (t) => t, pr = /* @__PURE__ */ Vu("Linear"), ld = /* @__PURE__ */ Vu("EaseInOutQuad"), _d = /* @__PURE__ */ Vu("SpringBouncy"), Jo = (t) => (n) => (e) => {
  const r = En(1 - n * n), o = t * r;
  return 1 - Xi(-n * t * e) * (re(o * e) + n / r * Kn(o * e));
}, dd = (t) => {
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
    return (e) => e >= 1 ? 1 : 1 - zs(2)(-10 * e);
  if (t === "Spring")
    return (e) => 1 - (1 + 6 * e) * Xi(-6 * e);
  if (t === "SpringBouncy")
    return Jo(6)(0.7);
  f();
})()(dd(n)), Kf = (t) => t, Ku = (t) => t, ts = (t) => (n) => (e) => {
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
}, vo = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Mf = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, hd = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, pd = /* @__PURE__ */ Ku("Hold"), $d = /* @__PURE__ */ Ku("Gap"), md = /* @__PURE__ */ Ku("Move"), co = /* @__PURE__ */ Kf("LinearLerp"), Bc = /* @__PURE__ */ Kf("LogLerp"), yd = (t) => (n) => (e) => {
  const r = e.center.y - n.center.y, o = e.center.x - n.center.x, i = En(o * o + r * r), s = e.zoom - n.zoom, u = s < 0 ? -s : s;
  return ts(t.minTransition)(t.maxTransition)(vo(t.panSpeed <= 0 ? t.minTransition : i / t.panSpeed)(t.zoomSpeed <= 0 ? t.minTransition : u / t.zoomSpeed));
}, Nd = /* @__PURE__ */ J((t) => (n) => {
  const e = t.length - 1 | 0;
  return e >= 0 && e < t.length && t[e] === n ? t : Rt(t)(n);
})([]), Qc = (t) => (n) => {
  const e = { x: 0, y: 0 }, r = 0 < t.length ? t[0].pos : e, o = wf(Ot, x, (i) => i.t <= n, t);
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
}, Us = (t) => (n) => ({ center: { x: n.center.x * t.scale + t.tx, y: n.center.y * t.scale + t.ty }, zoom: n.zoom / vo(1e-6)(t.scale) }), xd = (t) => (n) => (e) => ({
  center: { x: t.center.x + (n.center.x - t.center.x) * e, y: t.center.y + (n.center.y - t.center.y) * e },
  zoom: Xi((() => {
    const r = bc(vo(1e-6)(t.zoom));
    return r + (bc(vo(1e-6)(n.zoom)) - r) * e;
  })())
}), Jd = (t) => (n) => (e) => {
  const r = Uu(e.easing)(ts(0)(1)(e.endT <= e.startT ? 1 : (n - e.startT) / (e.endT - e.startT)));
  if (e.interp === "LinearLerp")
    return {
      center: { x: e.fromCam.center.x + (e.toCam.center.x - e.fromCam.center.x) * r, y: e.fromCam.center.y + (e.toCam.center.y - e.fromCam.center.y) * r },
      zoom: e.fromCam.zoom + (e.toCam.zoom - e.fromCam.zoom) * r
    };
  if (e.interp === "LogLerp")
    return xd(e.fromCam)(e.toCam)(r);
  f();
}, vd = (t) => (n) => (e) => (r) => {
  const o = (s, u) => Mf(yd(t)(s.toCam)(u.toCam))(s.endT - s.startT), i = J((s) => (u) => {
    if (s.pending.tag === "Nothing")
      return { acc: s.acc, pending: T("Just", u) };
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
      })() || o(s.pending._1, u) <= 0 ? { acc: Rt(s.acc)(s.pending._1), pending: T("Just", u) } : {
        acc: Rt(Rt(s.acc)({ ...s.pending._1, endT: u.startT - o(s.pending._1, u) }))({
          startT: u.startT - o(s.pending._1, u),
          endT: u.startT,
          fromCam: s.pending._1.toCam,
          toCam: u.toCam,
          easing: u.easing,
          interp: co
        }),
        pending: T("Just", u)
      };
    f();
  })({ acc: [], pending: x })(r);
  if (i.pending.tag === "Nothing")
    return i.acc;
  if (i.pending.tag === "Just")
    return Rt(i.acc)(i.pending._1);
  f();
}, Td = (t) => (n) => {
  const e = (r) => {
    const o = wf(Ot, x, (i) => i.kind === "Hold" || i.kind === "Move", r < 1 ? [] : bt(0, r, n));
    if (o.tag === "Just")
      return o._1 >= 0 && o._1 < n.length ? T("Just", n[o._1].toCam) : x;
    if (o.tag === "Nothing")
      return x;
    f();
  };
  return Ft((r) => (o) => {
    if (o.kind === "Hold")
      return { startT: o.startT, endT: o.endT, fromCam: o.fromCam, toCam: o.toCam, easing: o.easing, interp: co };
    if (o.kind === "Move")
      return { startT: o.startT, endT: o.endT, fromCam: o.fromCam, toCam: o.toCam, easing: pr, interp: co };
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
          })(), u = r + 1 | 0, c = Ke(
            Ot,
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
        interp: co
      };
    f();
  })(n);
}, wd = {
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
}, Mu = (t) => (n) => (e) => {
  const r = n.w + e * 2, o = n.h + e * 2, i = jn(t);
  return r <= 0 || o <= 0 || i.w <= 0 || i.h <= 0 ? 1 : Mf(i.w / r)(i.h / o);
}, kd = /* @__PURE__ */ J((t) => (n) => {
  const e = t.length - 1 | 0, r = e >= 0 && e < t.length ? T("Just", t[e]) : x;
  return r.tag === "Just" && r._1.fromCam.zoom === r._1.toCam.zoom && r._1.fromCam.center.x === r._1.toCam.center.x && r._1.fromCam.center.y === r._1.toCam.center.y && n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y && (() => {
    const o = r._1.toCam.center.x - n.toCam.center.x;
    return (o < 0 ? -o < 8 : o < 8) && (() => {
      const i = r._1.toCam.center.y - n.toCam.center.y;
      return (i < 0 ? -i < 8 : i < 8) && (() => {
        const s = r._1.toCam.zoom - n.toCam.zoom;
        return s < 0 ? -s < 0.08 : s < 0.08;
      })();
    })();
  })() ? Rt((() => {
    const o = t.length - 1 | 0;
    return o < 1 ? [] : bt(0, o, t);
  })())({ ...r._1, endT: n.endT }) : Rt(t)(n);
})([]), ao = (t) => (n) => (e) => (r) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: vo(r)(ts(t.minZoom)(t.maxZoom)(Mu(n)(e)(t.padding))) }), bd = (t) => (n) => (e) => (r) => {
  const o = kt((u) => (c) => st.compare(c.priority)(u.priority)), i = ao(t)(n)(jn(n))(0), s = lt(
    (u) => u >= 0 && u <= e,
    Nd(kt(ft.compare)([
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
  return vd(t)(n)(i)(kd(Td(i)(yt((u) => {
    const c = (u._1 + u._2) / 2;
    if (u._2 <= u._1)
      return x;
    const a = yt((_) => _.pathFollow)(o(lt((_) => _.startT <= c && c < _.endT, r)));
    if (0 < a.length)
      return T(
        "Just",
        {
          kind: md,
          startT: u._1,
          endT: u._2,
          fromCam: { center: Qc(a[0].samples)(u._1), zoom: a[0].zoom },
          toCam: { center: Qc(a[0].samples)(u._2), zoom: a[0].zoom },
          easing: pr
        }
      );
    const g = z((_) => _.bbox)(lt(
      (_) => _.priority === J(hd)(0)(z((d) => d.priority)(lt(
        (d) => d.startT <= c && c < d.endT,
        r
      ))),
      lt((_) => _.startT <= c && c < _.endT, r)
    ));
    return g.length === 0 ? T("Just", { kind: $d, startT: u._1, endT: u._2, fromCam: i, toCam: i, easing: t.easing }) : T(
      "Just",
      {
        kind: pd,
        startT: u._1,
        endT: u._2,
        fromCam: ao(t)(n)($i(g))(qn(
          (_) => _.priority >= 1,
          lt((_) => _.startT <= c && c < _.endT, r)
        ) ? t.tokenZoomFloor : 0),
        toCam: ao(t)(n)($i(g))(qn(
          (_) => _.priority >= 1,
          lt((_) => _.startT <= c && c < _.endT, r)
        ) ? t.tokenZoomFloor : 0),
        easing: t.easing
      }
    );
  })(wn(He, s, bt(1, s.length, s))))));
}, jf = (t) => (n) => (e) => (r) => {
  const o = Kt((i) => r >= i.startT && r < i.endT)(e);
  if (o.tag === "Just")
    return Jd()(r)(o._1);
  if (o.tag === "Nothing") {
    const i = e.length - 1 | 0;
    if (i >= 0 && i < e.length && r >= e[i].endT)
      return e[i].toCam;
    const s = ao(t)(n)(jn(n))(0);
    return 0 < e.length ? e[0].fromCam : s;
  }
  f();
}, Ko = (t) => (n) => {
  const e = Kt((r) => r.startT <= n && n < r.endT)(t.spans);
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
}, Ld = (t) => (n) => {
  if (n === "")
    return x;
  const e = Kt((r) => {
    if (r.scene.tag === "Structural")
      return r.scene._1.to === n;
    if (r.scene.tag === "DataFlow")
      return r.scene._1.keyframe === n;
    if (r.scene.tag === "EnterNode" || r.scene.tag === "ExitNode")
      return n === "";
    f();
  })(t.spans);
  if (e.tag === "Just")
    return T("Just", e._1.startT);
  if (e.tag === "Nothing")
    return x;
  f();
};
function Be(t) {
  return t.charCodeAt(0);
}
function Zf(t) {
  return String.fromCharCode(t);
}
const qe = function(t) {
  return function(n) {
    return function(e) {
      return e.replace(new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), n);
    };
  };
}, ns = function(t) {
  return function(n) {
    return n.split(t);
  };
}, Ed = function(t) {
  return t.trim();
}, es = function(t) {
  return function(n) {
    return n.join(t);
  };
};
var Sd = typeof Array.from == "function", Cd = typeof Symbol < "u" && Symbol != null && typeof Symbol.iterator < "u" && typeof String.prototype[Symbol.iterator] == "function", Pd = typeof String.prototype.fromCodePoint == "function", Gd = typeof String.prototype.codePointAt == "function";
const Id = function(t) {
  return Gd ? function(n) {
    return n.codePointAt(0);
  } : t;
}, Ad = function(t) {
  return Pd ? String.fromCodePoint : t;
}, Fd = function(t) {
  return function(n) {
    return Cd ? function(e) {
      for (var r = "", o = e[Symbol.iterator](), i = 0; i < n; ++i) {
        var s = o.next();
        if (s.done) return r;
        r += s.value;
      }
      return r;
    } : t(n);
  };
}, Rd = function(t) {
  return function(n) {
    return Sd ? function(e) {
      return Array.from(e, n);
    } : t;
  };
}, rs = (t) => {
  const n = Ze(t);
  if (n === 0)
    return x;
  if (n === 1)
    return T("Just", { head: Be(so(0)(t)), tail: "" });
  const e = Be(so(1)(t)), r = Be(so(0)(t));
  return 55296 <= r && r <= 56319 && 56320 <= e && e <= 57343 ? T("Just", { head: (((r - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0, tail: mo(2)(t) }) : T("Just", { head: r, tail: mo(1)(t) });
}, Bd = (t) => {
  const n = rs(t);
  return n.tag === "Just" ? T("Just", b(n._1.head, n._1.tail)) : x;
}, Qd = (t) => Xn.unfoldr(Bd)(t), Wd = (t) => {
  const n = Be(so(0)(t));
  if (55296 <= n && n <= 56319 && Ze(t) > 1) {
    const e = Be(so(1)(t));
    if (56320 <= e && e <= 57343)
      return (((n - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0;
  }
  return n;
}, t0 = /* @__PURE__ */ Id(Wd), os = /* @__PURE__ */ Rd(Qd)(t0), Js = (t) => Mi(t >= 0 && t <= 65535 ? Zf(t) : t < 0 ? "\0" : "\uffff"), Dd = (t) => t <= 65535 ? Js(t) : Js(Pe(t - 65536 | 0, 1024) + 55296 | 0) + Js(Ye(t - 65536 | 0)(1024) + 56320 | 0), Hd = /* @__PURE__ */ Ad(Dd), n0 = (t) => (n) => {
  if (t < 1)
    return "";
  const e = rs(n);
  return e.tag === "Just" ? Hd(e._1.head) + n0(t - 1 | 0)(e._1.tail) : n;
}, mn = /* @__PURE__ */ Fd(n0), Od = (t) => (n) => n === "" ? x : T("Just", t0(n)), Dr = (t, n, e) => ({ tag: t, _1: n, _2: e }), zd = () => ({ tag: "ExtendFromSource" }), Hr = (t, n) => ({ tag: t, _1: n }), ju = (t) => t, mi = (t, n) => ({ tag: t, _1: n }), vs = /* @__PURE__ */ mi("NotYet"), Wc = /* @__PURE__ */ mi("Consumed"), qd = /* @__PURE__ */ ju("FromSource"), Dc = /* @__PURE__ */ ju("FromTarget"), e0 = /* @__PURE__ */ ju("FromBoth"), fo = /* @__PURE__ */ Hr("Hidden"), Yd = /* @__PURE__ */ Hr("Visible"), Zu = /* @__PURE__ */ zd(), go = /* @__PURE__ */ Dr("Retracted"), Xd = /* @__PURE__ */ Dr("Extended"), r0 = (t) => t, Ks = (t, n) => ({ tag: t, _1: n }), ir = (t, n, e) => ({ tag: t, _1: n, _2: e }), o0 = (t) => t, gr = (t, n) => ({ tag: t, _1: n }), kr = (t, n, e, r, o, i, s, u, c) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s, _7: u, _8: c }), Ho = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
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
}, i0 = /* @__PURE__ */ nn(P)(Qt), Ms = /* @__PURE__ */ Eu(Qo), lo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, yi = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
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
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
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
      const u = P.compare(t)(s._3);
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
}, s0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, xr = /* @__PURE__ */ (() => {
  const t = Xn.unfoldr((n) => {
    if (n.tag === "Nil")
      return x;
    if (n.tag === "Cons")
      return T("Just", b(n._1, n._2));
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
})(), Vd = /* @__PURE__ */ J((t) => (n) => K(P)(n)()(t))(A), js = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
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
      const u = P.compare(t)(s._3);
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
}, Ud = /* @__PURE__ */ gr("NoKeyframes"), Kd = (t) => gr("DuplicateEventId", t), Md = (t) => gr("UnknownEvent", t), u0 = /* @__PURE__ */ o0("PlopIn"), jd = /* @__PURE__ */ o0("PlopOut"), Zd = /* @__PURE__ */ r0("DiveIn"), th = /* @__PURE__ */ r0("DiveOut"), nh = (t) => (n) => (e) => (r) => {
  const o = Ho(r.edge)(n.edges), i = (() => {
    if (o.tag === "Nothing")
      return 0;
    if (o.tag === "Just")
      return Do(o._1);
    f();
  })(), s = xe(t.minTokenDuration)(xe(et(J((u) => (c) => u + os(c).length | 0)(0)(r.labels)) * t.tokenReadSecPerChar)(t.tokenSpeed <= 0 ? 0 : i / t.tokenSpeed)) + e.pre + e.post;
  return { duration: s, holdPre: s <= 0 ? 0 : e.pre / s, holdPost: s <= 0 ? 0 : e.post / s };
}, eh = (t) => (n) => i0(yt((e) => {
  if (e.kind.tag === "SendToken")
    return T(
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
})(n)), rh = (t) => {
  if (t.event.kind.tag === "SendToken")
    return T(
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
    return T("Just", { startT: t.startT, endT: t.endT, target: kr("FillWindow", t.event.id, t.event.kind._1.node, t.event.kind._1.labels) });
  f();
}, oh = (t) => (n) => (e) => (r) => {
  const o = Kt((i) => Ms(i.path)(n) && (je(i.endT - e) < 1e-4 || je(i.startT - r) < 1e-4))(t.segments);
  if (o.tag === "Just")
    return T("Just", o._1);
  if (o.tag === "Nothing")
    return Kt((i) => Ms(i.path)(n))(t.segments);
  f();
}, ih = (t) => (n) => (e) => yt((r) => {
  const o = yt((i) => To(i)(t.nodes))(Lt(
    On.foldr,
    (() => {
      if (r.scene.tag === "Structural")
        return Cn(
          P.compare,
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
  return o.length === 0 ? x : T(
    "Just",
    {
      startT: r.startT,
      endT: r.endT,
      bbox: (() => {
        const i = J((s) => (u) => ({ minX: yi(s.minX)(u.x), minY: yi(s.minY)(u.y), maxX: xe(s.maxX)(u.x + u.w), maxY: xe(s.maxY)(u.y + u.h) }))(0 < o.length ? { minX: o[0].x, minY: o[0].y, maxX: o[0].x + o[0].w, maxY: o[0].y + o[0].h } : { minX: 0, minY: 0, maxX: 0, maxY: 0 })(bt(1, o.length, o));
        return { x: i.minX, y: i.minY, w: i.maxX - i.minX, h: i.maxY - i.minY };
      })(),
      priority: 0,
      pathFollow: x
    }
  );
}), sh = (t) => (n) => (e) => {
  const r = Ho(e)(t);
  if (r.tag === "Nothing")
    return Dc;
  if (r.tag === "Just") {
    const o = Hc(r._1.target)(n);
    return Hc(r._1.source)(n) ? o ? e0 : qd : Dc;
  }
  f();
}, uh = { pre: 0, post: 0 }, ch = (t) => (n) => (e) => (r) => (o) => {
  const i = s0(o.event.id)(e), s = (() => {
    if (i.tag === "Nothing")
      return uh;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = (() => {
    if (o.event.when.tag === "First")
      return 0;
    if (o.event.when.tag === "At")
      return o.event.when._1;
    if (o.event.when.tag === "After") {
      const a = o.event.when._1, g = Kt((_) => _.event.id === a)(r);
      if (g.tag === "Nothing")
        return 0;
      if (g.tag === "Just")
        return g._1.endT;
      f();
    }
    if (o.event.when.tag === "With") {
      const a = o.event.when._1, g = Kt((_) => _.event.id === a)(r);
      if (g.tag === "Nothing")
        return 0;
      if (g.tag === "Just")
        return g._1.startT;
    }
    f();
  })(), c = (() => {
    if (o.event.kind.tag === "SendToken")
      return nh(t)(n)(s)(o.event.kind._1);
    if (o.event.kind.tag === "FillNodeWithoutTransition")
      return { duration: t.plop, holdPre: 0, holdPost: 0 };
    f();
  })();
  return Rt(r)({ startT: u, endT: u + c.duration, event: o.event, holdPre: c.holdPre, holdPost: c.holdPost });
}, c0 = (t) => (n) => (e) => J(ch(t)(n)(eh(t)(e)))([])(Ft((r) => (o) => ({ event: o }))(e)), ah = (t) => (n) => {
  const e = To(n)(t.interiors);
  if (e.tag === "Nothing")
    return t;
  if (e.tag === "Just")
    return e._1;
  f();
}, fh = (t) => (n) => ({ ...n, fromCam: Us(t)(n.fromCam), toCam: Us(t)(n.toCam) }), gh = (t) => {
  if (t.when.tag === "First")
    return [];
  if (t.when.tag === "At")
    return [];
  if (t.when.tag === "After")
    return [t.when._1];
  if (t.when.tag === "With")
    return [t.when._1];
  f();
}, Oc = { id: "", nodes: A, edges: A }, lh = (t) => (n) => td((() => {
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
})()), _h = (t) => (n) => {
  const e = To(n)(t.interiors);
  if (e.tag === "Nothing")
    return { layout: t.layout, interiors: A };
  if (e.tag === "Just")
    return e._1;
  f();
}, ws = (t) => (n) => (e) => (r) => {
  const o = Ho(r)(e.edges);
  if (o.tag === "Just")
    return t <= 0 ? n : xe(n)(Do(o._1) / t);
  if (o.tag === "Nothing")
    return n;
  f();
}, a0 = (t) => (n) => (e) => (r) => (o) => {
  const i = t.plop, s = lh(e)(o), u = z((l) => ({
    startT: 0,
    endT: 0 + ws(t.edgeSpeed)(t.minEdgeDuration)(n)(l),
    target: kr("EdgeWindow", l, Ks("Extend", Zu))
  }))(xr(s.entering.edges)), c = z((l) => ({ startT: 0, endT: i, target: kr("NodeWindow", l, u0) }))(xr(s.entering.nodes)), a = J(xe)(0)(z((l) => ws(t.edgeSpeed)(t.minEdgeDuration)(n)(l))(xr(s.leaving.edges))), g = (l) => qn(
    (h) => {
      const $ = Ho(h)(r);
      if ($.tag === "Just")
        return $._1.source === l || $._1.target === l;
      if ($.tag === "Nothing")
        return !1;
      f();
    },
    xr(s.leaving.edges)
  ) ? a : 0, _ = z((l) => ({ startT: g(l), endT: g(l) + t.plop, target: kr("NodeWindow", l, jd) }))(xr(s.leaving.nodes)), d = z((l) => ({
    startT: 0,
    endT: ws(t.edgeSpeed)(t.minEdgeDuration)(n)(l),
    target: kr("EdgeWindow", l, Ks("Retract", sh(r)(s.leaving.nodes)(l)))
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
}, dh = (t) => (n) => (e) => (r) => (o) => (i) => z((() => {
  const s = o.startT;
  return (u) => ({ ...u, startT: u.startT + s, endT: u.endT + s });
})())(a0(t)(n)(e)(r)(i).windows), hh = (t) => yt((n) => Lt(po, n).length > 1 ? T(
  "Just",
  (() => {
    const e = Bt(
      (r) => x,
      (r) => (o) => T("Just", { head: r, tail: o }),
      Lt(po, n)
    );
    if (e.tag === "Just")
      return e._1.head;
    if (e.tag === "Nothing")
      return "";
    f();
  })()
) : x)(x_(Qo)(kt(P.compare)(t))), ph = (t) => {
  const n = z((r) => r.id)(t), e = Vd(n);
  return [
    ...z(Kd)(hh(n)),
    ...z(Md)(lt((r) => !js(r)(e), Jt(t)(gh)))
  ];
}, $h = (t) => (n) => (e) => {
  const r = xe(t.minZoom)(t.tokenZoomFloor);
  return yt((o) => {
    if (o.target.tag === "NodeWindow" || o.target.tag === "EdgeWindow")
      return x;
    if (o.target.tag === "TokenWindow")
      return T(
        "Just",
        (() => {
          const i = { pre: o.target._7, post: o.target._8 };
          if (t.tokenZoomFloor <= 0)
            return {
              startT: o.startT,
              endT: o.endT,
              bbox: Zr(n)(e)(o.target._2),
              priority: 1,
              pathFollow: x
            };
          const s = Ho(o.target._2)(n.edges);
          if (s.tag === "Just") {
            const u = To(o.target._4)(n.nodes);
            if (u.tag === "Just") {
              const c = To(o.target._5)(n.nodes);
              if (c.tag === "Just") {
                const a = c._1;
                return {
                  startT: o.startT,
                  endT: o.endT,
                  bbox: Zr(n)(e)(o.target._2),
                  priority: 1,
                  pathFollow: T(
                    "Just",
                    {
                      samples: (() => {
                        const g = o.startT + i.pre * (o.endT - o.startT), _ = xe(1e-4)(o.endT - i.post * (o.endT - o.startT) - g), d = o.endT - o.startT;
                        return z((l) => {
                          const h = g + et(l) / et(32) * _;
                          return {
                            t: h,
                            pos: Y1(s._1)({ x: u._1.x + u._1.w / 2, y: u._1.y + u._1.h / 2 })({
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
                  bbox: Zr(n)(e)(o.target._2),
                  priority: 1,
                  pathFollow: x
                };
              f();
            }
            if (u.tag === "Nothing")
              return {
                startT: o.startT,
                endT: o.endT,
                bbox: Zr(n)(e)(o.target._2),
                priority: 1,
                pathFollow: x
              };
            f();
          }
          if (s.tag === "Nothing")
            return {
              startT: o.startT,
              endT: o.endT,
              bbox: Zr(n)(e)(o.target._2),
              priority: 1,
              pathFollow: x
            };
          f();
        })()
      );
    if (o.target.tag === "FillWindow")
      return T(
        "Just",
        {
          startT: o.startT,
          endT: o.endT,
          bbox: Uf(n)(e)(zt(
            "Node",
            1,
            1,
            o.target._2,
            void 0,
            A,
            A
          )),
          priority: 1,
          pathFollow: x
        }
      );
    f();
  });
}, mh = (t) => (n) => (e) => (r) => (o) => bd(t)(o.layout)(r.endT)([
  ...ih(o.layout)(e)(n)(lt((i) => i.startT >= o.startT && i.endT <= o.endT, r.spans)),
  ...$h(t)(o.layout)(e)(o.windows)
]), yh = (t) => {
  const n = i0(z((r) => b(
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
      return [gr("ScheduleCycle", [...Lt(On.foldr, o), i])];
    if (js(i)(r))
      return [];
    const s = s0(i)(n);
    if (s.tag === "Nothing")
      return [];
    if (s.tag === "Just")
      return Jt(s._1)(e(K(P)(i)()(r))(K(P)(i)()(o)));
    f();
  };
  return Jt(t)((r) => e(A)(A)(r.id));
}, Nh = {
  plop: 0.5,
  gap: 0.5,
  edgeSpeed: 350,
  minEdgeDuration: 0.3,
  tokenSpeed: 250,
  minTokenDuration: 1.8,
  tokenHold: 0.5,
  hatchHold: 0.4,
  tokenReadSecPerChar: 0.06,
  nodeEasing: _d,
  edgeEasing: ld,
  tokenEasing: pr,
  diveDur: 1.2,
  retreatDur: 1.2
}, xh = (t) => (n) => (e) => (r) => z((() => {
  const o = e.startT;
  return (i) => ({ ...i, startT: i.startT + o, endT: i.endT + o });
})())(yt(rh)(c0(t)(n)(r.events))), Jh = (t) => (n) => (e) => (r) => (o) => {
  if (o.scene.tag === "Structural")
    return dh(t)(n)(e)(r)(o)(o.scene._1);
  if (o.scene.tag === "DataFlow")
    return xh(t)(n)(o)(o.scene._1);
  if (o.scene.tag === "EnterNode")
    return [];
  if (o.scene.tag === "ExitNode")
    return [];
  f();
}, vh = (t) => (n) => (e) => {
  const r = c0(t)(n)(e.events);
  return r.length === 0 ? t.gap : J(xe)(0)(z((o) => o.endT)(r)) + t.gap;
}, Th = (t) => (n) => (e) => (r) => (o) => {
  if (o.tag === "Structural")
    return a0(t)(n)(e)(r)(o._1).duration;
  if (o.tag === "DataFlow")
    return vh(t)(n)(o._1);
  if (o.tag === "EnterNode" || o.tag === "ExitNode")
    return 0;
  f();
}, f0 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = V1(n)(r), u = e.layout, c = Xf(z(($) => b($.id, $))(o.keyframes)), a = 0 < o.keyframes.length ? T("Just", o.keyframes[0]) : x, g = (() => {
    if (a.tag === "Just")
      return a._1.id;
    if (a.tag === "Nothing")
      return "";
    f();
  })(), _ = fd(o), d = ($) => ({
    segments: $.runSpans.length === 0 ? $.segments : Rt($.segments)({
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
      const v = d($), w = $.t + t.diveDur, k = Rt(r)(p._1), L = f0(t)(n)(_h(e)(p._1))(k)(ah(o)(p._1))(w), I = L.endT + t.retreatDur;
      return {
        ...$,
        t: I,
        runStart: I,
        runSpans: [],
        runWindows: [],
        segments: [...v.segments, ...L.segments],
        spans: [...v.spans, ...L.spans],
        windows: [...v.windows, ...L.windows],
        dives: [
          ...v.dives,
          { startT: $.t, endT: w, node: p._1, parentPath: r, childPath: k, direction: Zd },
          ...L.dives,
          { startT: L.endT, endT: I, node: p._1, parentPath: r, childPath: k, direction: th }
        ]
      };
    }
    if (p.tag === "ExitNode")
      return $;
    const m = $.t + Th(t)(u)(c)(_)(p), y = { startT: $.t, endT: m, scene: p }, N = Jh(t)(u)(c)(_)(y);
    return {
      ...$,
      t: m,
      runSpans: Rt($.runSpans)(y),
      runWindows: [...$.runWindows, ...N],
      spans: Rt($.spans)(y),
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
}, wh = (t) => (n) => (e) => e.endT <= t || e.startT >= n ? x : T("Just", { ...e, startT: xe(t)(e.startT), endT: yi(n)(e.endT) }), tc = (t) => (n) => (e) => {
  const r = jn(e.layout), o = {
    x: r.x * e.placement.scale + e.placement.tx,
    y: r.y * e.placement.scale + e.placement.ty,
    w: r.w * e.placement.scale,
    h: r.h * e.placement.scale
  };
  return {
    center: { x: o.x + o.w / 2, y: o.y + o.h / 2 },
    zoom: yi(Mu(n)(o)(t.padding * e.placement.scale))(40 / (11 * e.placement.scale))
  };
}, kh = (t) => (n) => (e) => e.placement.scale === 1 && e.placement.tx === 0 && e.placement.ty === 0 ? Us(e.placement)(ao(t)(e.layout)(jn(e.layout))(0)) : tc(t)(n)(e), bh = (t) => (n) => (e) => (r) => yt((o) => {
  const i = oh(r)(o.parentPath)(o.startT)(o.endT);
  if (i.tag === "Just") {
    const s = o.childPath, u = Kt((c) => Ms(c.path)(s))(r.segments);
    if (u.tag === "Just") {
      const c = kh(t)(n)(i._1), a = tc(t)(n)(u._1);
      if (o.direction === "DiveIn")
        return T(
          "Just",
          { startT: o.startT, endT: o.endT, fromCam: c, toCam: a, easing: pr, interp: Bc }
        );
      if (o.direction === "DiveOut")
        return T(
          "Just",
          { startT: o.startT, endT: o.endT, fromCam: a, toCam: c, easing: pr, interp: Bc }
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
})(r.dives), Lh = (t) => (n) => {
  if (n.tag === "Structural")
    return yt((e) => e)([
      Ts(n._1.from)(t) ? x : T("Just", gr("UnknownKeyframe", n._1.from)),
      Ts(n._1.to)(t) ? x : T("Just", gr("UnknownKeyframe", n._1.to))
    ]);
  if (n.tag === "DataFlow")
    return [
      ...yt((e) => e)([Ts(n._1.keyframe)(t) ? x : T("Just", gr("UnknownKeyframe", n._1.keyframe))]),
      ...ph(n._1.events),
      ...yh(n._1.events)
    ];
  if (n.tag === "EnterNode")
    return [];
  if (n.tag === "ExitNode")
    return [];
  f();
}, Eh = (t) => (n) => {
  const e = Jt(n)(Lh(t));
  return e.length === 0 ? Et("Right", void 0) : Et("Left", e);
}, Sh = (t) => (n) => (e) => (r) => kt((o) => (i) => ft.compare(o.startT)(i.startT))(Jt(r.segments)((o) => o.placement.scale === 1 && o.placement.tx === 0 && o.placement.ty === 0 ? yt(wh(o.startT)(o.endT))(z(fh(o.placement))(mh(t)(e)(o.edgeEndpoints)(r)(o))) : [
  (() => {
    const i = tc(t)(n)(o);
    return { startT: o.startT, endT: o.endT, fromCam: i, toCam: i, easing: pr, interp: co };
  })()
])), Ch = (t) => (n) => (e) => (r) => {
  if (0 < e.keyframes.length) {
    const o = e.keyframes[0], i = Xf(z((u) => b(u.id, u))(e.keyframes)), s = Eh(i)(e.scenes);
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
      const u = f0(n)(r)(r)([])(e)(0);
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
          cameraSpans: [...Sh(t)(r.layout)(i)(u), ...bh(t)(r.layout)(i)(u)],
          cameraConfig: t,
          levelTree: r,
          segments: u.segments,
          dives: u.dives,
          seed: e.seed
        }
      );
    });
  }
  return Et("Left", [Ud]);
}, Zs = (t) => (n) => Math.imul(t, n), Mr = (t) => {
  const n = t + 1831565813 | 0, e = Zs(n ^ n >>> 15)(n | 1), r = e ^ (e + Zs(e ^ e >>> 7)(e | 61) | 0), o = r ^ r >>> 14;
  return { prng: o, value: o < 0 ? (et(o) + 4294967296) / 4294967296 : et(o) / 4294967296 };
}, fn = (t) => (n) => (e) => {
  const r = Mr(e);
  return { prng: r.prng, value: t + r.value * (n - t) };
}, tu = (t) => (n) => J((e) => (r) => Zs(e ^ r)(-2048144789))(n)(z(Be)(er(t))), nc = (t) => t, oe = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ni = /* @__PURE__ */ Eu(Qo), Ph = /* @__PURE__ */ (() => {
  const t = Xn.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), g0 = /* @__PURE__ */ nn(P)(Qt), l0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, zc = Qt.foldMap(w1(P)), qc = (t) => (n) => (e) => {
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
}, Gh = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Or = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ih = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
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
}, Ah = /* @__PURE__ */ nn(P)(Qt), Fh = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
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
}, Rh = /* @__PURE__ */ nn(P)(Qt), Bh = /* @__PURE__ */ nc("Backdrop"), Yc = /* @__PURE__ */ nc("FlyThrough"), xi = /* @__PURE__ */ nc("Active"), Xc = (t) => (n) => (e) => {
  const r = (t + n) / 2, o = e - r, i = o < 0 ? -1 : 1, s = (n - t) / 2, u = s * 0.15, c = s - u, a = o < 0 ? -o : o;
  return n <= t ? (t + n) / 2 : a <= c ? e : r + i * (s - u * Xi(-(a - c) / u));
}, Qh = (t) => (n) => (e) => (r) => {
  const o = jn(t), i = o.w / oe(1e-4)(n.zoom) / 2, s = o.h / oe(1e-4)(n.zoom) / 2, u = e.y - n.center.y, c = e.x - n.center.x;
  return {
    ...n,
    center: {
      x: i <= 1e-4 ? n.center.x + 0 * r * 0.35 : c < 0 ? n.center.x + c / (1 + -c / i) * r * 0.35 : n.center.x + c / (1 + c / i) * r * 0.35,
      y: s <= 1e-4 ? n.center.y + 0 * r * 0.35 : u < 0 ? n.center.y + u / (1 + -u / s) * r * 0.35 : n.center.y + u / (1 + u / s) * r * 0.35
    }
  };
}, nu = (t) => (n) => (e) => {
  const r = Kt((o) => Ni(o.path)(n) && e >= o.startT && e < o.endT)(t.segments);
  if (r.tag === "Just")
    return T("Just", r._1);
  if (r.tag === "Nothing")
    return Kt((o) => Ni(o.path)(n))(t.segments);
  f();
}, Wh = (t) => ({
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
}), Dh = (t) => z((n) => n < 1 ? [] : bt(0, n, t))(It(0, t.length - 1 | 0)), Hh = (t) => J((n) => (e) => (n * 31 | 0) + Be(e) | 0)(7)(er(t)), _0 = (t) => (n) => (e) => ({
  ...e,
  state: {
    ...e.state,
    nodes: g0(z((r) => b(r._1, t(r._1)(r._2)))(Ph(e.state.nodes))),
    edges: (() => {
      const r = (o) => {
        if (o.tag === "Leaf")
          return A;
        if (o.tag === "Node")
          return zt("Node", o._1, o._2, o._3, n(o._4), r(o._5), r(o._6));
        f();
      };
      return r(e.state.edges);
    })()
  }
}), ks = (t) => (n) => {
  const e = l0(n)(t.keyframes);
  if (e.tag === "Nothing")
    return A;
  if (e.tag === "Just")
    return e._1.nodes;
  f();
}, bs = (t) => (n) => {
  const e = l0(n)(t.keyframes);
  if (e.tag === "Nothing")
    return A;
  if (e.tag === "Just")
    return e._1.edges;
  f();
}, ec = (t) => (n) => {
  if (n < t.startT)
    return ir("AtKeyframe", t.initialKeyframe);
  const e = Kt((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return ir("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return ir("AtKeyframe", e._1.scene._1.keyframe);
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode")
      return ir("AtKeyframe", t.initialKeyframe);
    f();
  }
  if (e.tag === "Nothing") {
    const r = t.spans.length - 1 | 0;
    return r >= 0 && r < t.spans.length ? ir(
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
    ) : ir("AtKeyframe", t.initialKeyframe);
  }
  f();
}, Oh = /* @__PURE__ */ J((t) => (n) => {
  const e = qi(t);
  return e.tag === "Just" && n.startT <= e._1.last.endT + 1e-6 ? Rt(e._1.init)({ ...e._1.last, endT: oe(e._1.last.endT)(n.endT), windows: Rt(e._1.last.windows)(n) }) : Rt(t)({ endT: n.endT, windows: [n] });
})([]), zh = (t) => (n) => (e) => zc((r) => zc((o) => o.target.tag === "FillWindow" ? o.startT <= e ? zt("Node", 1, 1, o.target._2, void 0, A, A) : A : o.target.tag === "TokenWindow" && o.startT + (o.endT - o.startT) * 0.25 <= e ? zt("Node", 1, 1, o.target._4, void 0, A, A) : A)(r.windows))(lt(
  (r) => e <= r.endT + t,
  Oh(kt((r) => (o) => ft.compare(r.startT)(o.startT))(lt(
    (r) => r.target.tag === "FillWindow" || r.target.tag === "TokenWindow",
    n
  )))
)), qh = (t) => (n) => (e) => qn(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), Yh = (t) => (n) => (e) => qn((r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e, t), Xh = (t) => (n) => (e) => qn((r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e, t), Vh = (t) => (n) => (e) => qn(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), Uh = (t) => (n) => {
  const e = ec(t)(n);
  if (e.tag === "AtKeyframe")
    return mn(3)(e._1) === "kf-" ? "" : e._1;
  if (e.tag === "InTransition")
    return mn(3)(e._2) === "kf-" ? "" : e._2;
  f();
}, d0 = (t) => (n) => (e) => Kt((r) => e(r) && n >= r.startT && n < r.endT)(t), Kh = (t) => {
  const n = qc(0)(1)(t / 0.2), e = qc(0)(1)((1 - t) / 0.2);
  return n * n * (3 - 2 * n) * e * e * (3 - 2 * e);
}, Mh = (t) => (n) => {
  if (n.tag === "Travelling") {
    const e = Gh(n._1.edge)(t.edges);
    if (e.tag === "Just") {
      const r = Qr(e._1)(n._1.progress);
      return r.tag === "Just" ? T("Just", { dot: r._1, weight: Kh(n._1.progress) }) : x;
    }
    if (e.tag === "Nothing")
      return x;
    f();
  }
  return x;
}, jh = {
  nodes: A,
  edges: A,
  tokens: A,
  camera: { center: { x: 0, y: 0 }, zoom: 1 },
  frameTitle: "",
  visited: A,
  nodeFadeAlpha: A,
  nodeInvert: A
}, Zh = { nodes: A, edges: A, chipExtras: A }, tp = {
  segment: {
    startT: 0,
    endT: 0,
    path: [],
    layout: Zh,
    placement: qu,
    windows: [],
    spans: [],
    keyframes: A,
    initialKeyframe: "",
    edgeEndpoints: A
  },
  state: jh,
  bgAlpha: 1,
  role: xi
}, Ji = (t) => {
  const n = t.levels.length - 1 | 0;
  return n >= 0 && n < t.levels.length ? t.levels[n] : tp;
}, np = (t) => (n) => {
  const e = ec(t)(n);
  if (e.tag === "AtKeyframe")
    return ks(t)(e._1);
  if (e.tag === "InTransition")
    return Cn(P.compare, Sn, ks(t)(e._1), ks(t)(e._2));
  f();
}, ep = (t) => (n) => {
  const e = ec(t)(n);
  if (e.tag === "AtKeyframe")
    return bs(t)(e._1);
  if (e.tag === "InTransition")
    return Cn(P.compare, Sn, bs(t)(e._1), bs(t)(e._2));
  f();
}, rp = (t) => (n) => {
  const e = t.w / oe(1e-4)(n.zoom), r = t.h / oe(1e-4)(n.zoom);
  return {
    ...n,
    center: {
      x: e >= t.w ? t.x + t.w / 2 : Xc(t.x + e / 2)(t.x + t.w - e / 2)(n.center.x),
      y: r >= t.h ? t.y + t.h / 2 : Xc(t.y + r / 2)(t.y + t.h - r / 2)(n.center.y)
    }
  };
}, op = (t) => rp((() => {
  const n = jn(t.layout), e = n.x * t.placement.scale + t.placement.tx, r = n.y * t.placement.scale + t.placement.ty;
  return { x: e, y: r, w: (n.x + n.w) * t.placement.scale + t.placement.tx - e, h: (n.y + n.h) * t.placement.scale + t.placement.ty - r };
})()), ip = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : oe(0)(Or(1)((n - t.startT) / e));
}, h0 = (t) => (n) => (e) => oe(0)(Or(1)((e - fn(0)(0.3)(t + Hh(n) | 0).value) / oe(1e-4)(0.7))), Vc = (t) => (n) => (e) => _0((r) => (o) => o.tag === "Hidden" ? fo : Hr("PloppingOut", r === n ? oe(0)(Or(1)((e - 0.45) / oe(1e-4)(0.55))) : h0(t)(r)(e)))((r) => r.tag === "Retracted" ? go : Dr("Retracting", e0, e)), Uc = (t) => (n) => _0((e) => (r) => r.tag === "Hidden" ? fo : Hr("PloppingIn", h0(t)(e)(n)))((e) => e.tag === "Retracted" ? go : Dr("Extending", Zu, n)), vi = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : oe(0)(Or(1)((n - t.startT) / e));
}, sp = (t) => (n) => (e) => (r) => (o) => {
  const i = d0(n)(e)((s) => s.target.tag === "EdgeWindow" && s.target._1 === o);
  if (i.tag === "Just") {
    const s = Uu(t.timing.edgeEasing)(vi(i._1)(e)), u = i._1.target.tag === "EdgeWindow" ? i._1.target._2 : Ks("Extend", Zu);
    if (u.tag === "Retract")
      return Dr("Retracting", u._1, s);
    if (u.tag === "Extend")
      return Dr("Extending", u._1, s);
    f();
  }
  if (i.tag === "Nothing")
    return Vh(n)(e)(o) || qh(n)(e)(o) ? go : Ih(o)(r) ? Xd : go;
  f();
}, up = (t) => (n) => (e) => {
  const r = ep(n)(e);
  return Ah(z((o) => b(o, sp(t)(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return A;
      if (i.tag === "Node")
        return zt("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return Lt(On.foldr, o(n.layout.edges));
  })()));
}, cp = (t) => (n) => (e) => (r) => {
  const o = d0(t)(n)((i) => i.target.tag === "NodeWindow" && i.target._1 === r);
  if (o.tag === "Just") {
    const i = vi(o._1)(n), s = o._1.target.tag === "NodeWindow" ? o._1.target._2 : u0;
    if (s === "PlopIn")
      return Hr("PloppingIn", i);
    if (s === "PlopOut")
      return Hr("PloppingOut", i);
    f();
  }
  if (o.tag === "Nothing")
    return Xh(t)(n)(r) || Yh(t)(n)(r) ? fo : Fh(r)(e) ? Yd : fo;
  f();
}, ap = (t) => (n) => (e) => {
  const r = np(n)(e);
  return g0(z((o) => b(o, cp(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return A;
      if (i.tag === "Node")
        return zt("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return Lt(On.foldr, o(n.layout.nodes));
  })()));
}, fp = (t) => (n) => (e) => n.target.tag === "TokenWindow" ? b(
  n.target._1,
  e < n.startT ? vs : e >= n.endT ? Wc : mi(
    "Travelling",
    {
      edge: n.target._2,
      direction: n.target._3,
      progress: Uu(t.timing.tokenEasing)(vi(n)(e)),
      labels: n.target._6,
      source: n.target._4,
      target: n.target._5,
      holdPre: n.target._7,
      holdPost: n.target._8
    }
  )
) : n.target.tag === "FillWindow" ? b(
  n.target._1,
  e < n.startT ? vs : e >= n.endT ? Wc : mi("Filling", { node: n.target._2, progress: vi(n)(e), labels: n.target._3 })
) : b("", vs), gp = (t) => (n) => (e) => Rh(z((r) => fp(t)(r)(e))(lt(
  (r) => r.target.tag === "TokenWindow" || r.target.tag === "FillWindow",
  n
))), br = (t) => (n) => (e) => ({
  nodes: ap()(n)(e),
  edges: up(t)(n)(e),
  tokens: gp(t)(n.windows)(e),
  camera: jf(t.cameraConfig)(n.layout)(t.cameraSpans)(e),
  frameTitle: Uh(n)(e),
  visited: zh(t.timing.hatchHold)(n.windows)(e),
  nodeFadeAlpha: A,
  nodeInvert: A
}), lp = (t) => (n) => (e) => Tf(
  x,
  mf,
  (r) => r.direction === "DiveIn" && Ni(r.parentPath)(n.path) && e >= r.startT - 0.7 && e < r.startT ? T("Just", { node: r.node, phase: (e - (r.startT - 0.7)) / 0.7 }) : x,
  t.dives
), _p = (t) => (n) => (e) => (r) => {
  const o = lp(t)(n)(e);
  if (o.tag === "Just") {
    const i = Kn(3.141592653589793 * o._1.phase * 3);
    return {
      ...r,
      state: { ...r.state, nodeInvert: zt("Node", 1, 1, o._1.node, 1 * i * i, A, A) }
    };
  }
  if (o.tag === "Nothing")
    return r;
  f();
}, p0 = (t) => (n) => yt((e) => {
  const r = Kt((o) => o.direction === "DiveIn" && Ni(o.childPath)((() => {
    const i = e.length + 1 | 0;
    return i < 1 ? [] : bt(0, i, n);
  })()))(t.dives);
  if (r.tag === "Just") {
    const o = nu(t)(e)(r._1.startT - 1e-4);
    if (o.tag === "Just")
      return T(
        "Just",
        {
          bgAlpha: 1,
          role: Bh,
          segment: o._1,
          state: {
            ...br(t)(o._1)(r._1.startT - 1e-4),
            nodeFadeAlpha: zt("Node", 1, 1, r._1.node, 0, A, A)
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
})(Dh(n)), $0 = (t) => (n) => {
  const e = lt((o) => n >= o.startT && n < o.endT, t.segments), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r] : Wh(t);
}, dp = (t) => (n) => (e) => {
  const r = ip(e)(n), o = nu(t)(e.parentPath)((() => {
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
  })()), s = oe(0)(Or(1)(r / 0.6)), u = oe(0)(Or(1)((r - 0.4) / 0.6)), c = (() => {
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
    ...p0(t)(e.parentPath),
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
              role: Yc
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
              role: Yc
            })
          ];
        f();
      }
      if (o.tag === "Nothing")
        return [
          (() => {
            const g = $0(t)(n);
            return { segment: g, state: br(t)(g)(n), bgAlpha: 1, role: xi };
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
    return Lt(Xt.foldr, r(n.tokens, Yt));
  })());
  return 0 < e.length ? T("Just", e[0]) : x;
}, pp = (t) => (n) => {
  const e = hp(t)(n);
  if (e.tag === "Nothing")
    return n.camera;
  if (e.tag === "Just")
    return Qh(t)(n.camera)(e._1.dot)(e._1.weight);
  f();
}, $p = (t) => (n) => t.placement.scale === 1 && t.placement.tx === 0 && t.placement.ty === 0 ? pp(t.layout)(n) : n.camera, mp = (t) => (n) => Kt((e) => n >= e.startT && n < e.endT)(t.dives), yp = (t) => (n) => {
  const e = $0(t)(n), r = br(t)(e)(n), o = t.dives.length !== 0, i = jf(t.cameraConfig)(t.layout)(t.cameraSpans)(n), s = op(e)($p(e)({ ...r, camera: i })), u = _p(t)(e)(n)({ bgAlpha: 1, role: xi, segment: e, state: { ...r, camera: s } }), c = p0(t)(e.path), a = mp(t)(n);
  if (a.tag === "Just")
    return { levels: dp(t)(n)(a._1), camera: i, rootLayout: t.layout, hasDives: o, diving: !0 };
  if (a.tag === "Nothing")
    return { levels: Rt(c)(u), camera: s, rootLayout: t.layout, hasDives: o, diving: !1 };
  f();
}, m0 = (t) => t, y0 = /* @__PURE__ */ m0("RunText"), Np = /* @__PURE__ */ m0("RunCode"), N0 = (t) => (n) => (e) => n.length === 0 ? e : Rt(e)({ style: t, text: mr(n) }), xp = (t) => ({
  style: (() => {
    if (t.style === "RunText")
      return Np;
    if (t.style === "RunCode")
      return y0;
    f();
  })(),
  buf: [],
  runs: N0(t.style)(t.buf)(t.runs)
}), Jp = (t) => (n) => 0 < n.length ? { ...t, buf: Rt(t.buf)(n[0]) } : { ...t, buf: Rt(t.buf)("\\") }, vp = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, c = Bt((a) => x, (a) => (g) => T("Just", { head: a, tail: g }), r);
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
      e = { ...s, buf: Rt(s.buf)(c._1.head) }, r = c._1.tail;
      continue;
    }
    f();
  }
  return i;
}, x0 = (t) => {
  const n = vp({ style: y0, buf: [], runs: [] })(er(t));
  return N0(n.style)(n.buf)(n.runs);
};
let Mo = null;
function Tp() {
  return Mo || (typeof document > "u" ? null : (Mo = document.createElement("canvas").getContext("2d"), Mo));
}
const Kc = /* @__PURE__ */ new Map(), wp = (t) => (n) => (e) => (r) => () => {
  const o = `${e} ${n}px ${t}|${r}`, i = Kc.get(o);
  if (i !== void 0) return i;
  const s = Tp();
  if (!s)
    return r.length * n * 0.62;
  s.font = `${e} ${n}px ${t}`;
  const u = s.measureText(r).width;
  return Kc.set(o, u), u;
}, kp = nr.traverse(Bo), bp = /* @__PURE__ */ J(Rr)(0), zr = /* @__PURE__ */ (() => {
  const t = qe(`\r
`)(" "), n = qe(`
`)(" "), e = (() => {
    const r = qe("\r")(" "), o = (() => {
      const i = qe("	")(" ");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), J0 = (t) => (n) => {
  const e = kp((r) => {
    const o = (() => {
      if (r.style === "RunText")
        return t.text;
      if (r.style === "RunCode")
        return t.code;
      f();
    })();
    return wp(o.family)(o.size)(o.weight)(zr(r.text));
  })(x0(zr(n)));
  return () => {
    const r = e();
    return bp(r);
  };
}, Lp = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: "500" }, Ep = { family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", size: 11, weight: "400" }, v0 = { text: Lp, code: Ep }, Sp = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Tr = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Cp = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Pp = (t) => (n) => {
  const e = ft.compare(t)(n);
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
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Mc = (t) => mr(Ln(ar((n) => n === " ")(Ln(ar((n) => n === " ")(er(t)).rest)).rest)), Ip = (t) => J((n) => (e) => e._1 > 0 && (e._2 === " " || e._2 === "-" || e._2 === "_" || e._2 === ".") ? T("Just", e._1) : n)(x)(Ft(He)(t)), eu = (t) => (n) => {
  if (t <= 0)
    return [n];
  if (Ze(n) <= t)
    return [n];
  const e = er(n), r = t < 1 ? [] : bt(0, t, e), o = Ip(r);
  if (o.tag === "Just") {
    const i = Mc(Sc(!(o._1 >= 0 && o._1 < r.length) || r[o._1] === " " ? o._1 : o._1 + 1 | 0)(n)), s = Mc(mo(o._1 + 1 | 0)(n));
    return s === "" ? [i] : [i, ...eu(t)(s)];
  }
  if (o.tag === "Nothing") {
    const i = Sc(t)(n), s = mo(t)(n);
    return s === "" ? [i] : [i, ...eu(t)(s)];
  }
  f();
}, Ap = { cellW: 7, cellH: 3, maxLineWidth: 20 }, Fp = (t) => (n) => {
  const e = z((i) => b(
    (() => {
      if (i.label.tag === "Just")
        return i.label._1;
      if (i.label.tag === "Nothing")
        return i.id;
      f();
    })(),
    i
  ))(n.nodes), r = Tr(1)(Pe(
    (Cp(t.maxLineWidth)(J((i) => (s) => Tr(i)(Ze(s._1)))(0)(e)) + 2 | 0) + t.cellW | 0,
    t.cellW
  )), o = (r * t.cellW | 0) - 1 | 0;
  return {
    ...n,
    nodes: z((i) => {
      if (!(i._2.size._1 === 1 && i._2.size._2 === 1))
        return i._2;
      const s = Jt(ns(`
`)(i._1))(eu(o)), u = J((a) => (g) => Tr(a)(Ze(g)))(0)(s), c = i._2.shape === "Cylinder" ? Tr(1)(Pe((u + 2 | 0) + t.cellW | 0, t.cellW)) : r;
      return {
        ...i._2,
        size: b(
          et(u > o ? Pe((u + 2 | 0) + t.cellW | 0, t.cellW) : c),
          et(Tr(1)(Pe(s.length + t.cellH | 0, t.cellH)) + (i._2.shape === "Cylinder" ? 1 : 0) | 0)
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
          Pp(r.size._1)(et(Tr(1)($n(Yi(r.shape === "Cylinder" ? (o._1 + 0) / t : (o._1 + 32) / t))))),
          r.size._2
        )
      };
    f();
  })(e.nodes)
}), Bp = (t) => (n) => {
  const e = ft.compare(t)(n);
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
                const v = t[a].position, w = t[a].size, k = t[y].position, L = t[y].size;
                return v._1 < k._1 + L._1 && k._1 < v._1 + w._1 && v._2 < k._2 + L._2 && k._2 < v._2 + w._2;
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
}, jc = (t) => J((n) => (e) => n + Q1(e.start)(e.end))(0)(t.segments), Wp = (t) => (n) => (e) => ({
  crossingCount: J((r) => (o) => r + o.jumps.length | 0)(0)(n),
  bendCount: J((r) => (o) => r + o.bends.length | 0)(0)(n),
  totalEdgeLength: J((r) => (o) => r + jc(o))(0)(n),
  maxEdgeLength: J((r) => (o) => Bp(r)(jc(o)))(0)(n),
  nodeOverlapCount: Qp(t),
  constraintViolations: e,
  jumpCount: J((r) => (o) => r + o.jumps.length | 0)(0)(n)
}), rc = (t) => t, Mt = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = st.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, oc = /* @__PURE__ */ rc("LEFT"), Dp = /* @__PURE__ */ rc("RIGHT"), T0 = /* @__PURE__ */ rc("UNDEFINED"), Hp = {
  eq: (t) => (n) => t === "LEFT" ? n === "LEFT" : t === "RIGHT" ? n === "RIGHT" : t === "UP" ? n === "UP" : t === "DOWN" ? n === "DOWN" : t === "UNDEFINED" && n === "UNDEFINED"
}, Op = {
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
  Eq0: () => Hp
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
  const r = Mt(t)(e.cNodes);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cNodes: K(st)(t)(n(r._1))(e.cNodes) };
  f();
}, _o = (t) => (n) => (e) => {
  const r = Mt(t)(e.cGroups);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cGroups: K(st)(t)(n(r._1))(e.cGroups) };
  f();
}, Yp = (t) => J((n) => (e) => Zn(e)((r) => ({ ...r, hitboxPreCompaction: r.hitbox }))(n))(t)(t.cNodeOrder), Xp = (t) => {
  const n = J((e) => (r) => {
    const o = Mt(r)(t.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return J((i) => (s) => Tt(st)(rn)(s)([r])(i))(e)(o._1.constraints);
    f();
  })(A)(t.cNodeOrder);
  return J((e) => (r) => Zn(r)((o) => ({
    ...o,
    constraints: (() => {
      const i = Mt(r)(n);
      if (i.tag === "Nothing")
        return [];
      if (i.tag === "Just")
        return i._1;
      f();
    })()
  }))(e))(t)(t.cNodeOrder);
}, Vp = (t) => (n) => Zn(t)((e) => ({ ...e, ignoreSpacing: { left: e.ignoreSpacing.left || n.left, right: e.ignoreSpacing.right || n.right, up: e.ignoreSpacing.up || n.up, down: e.ignoreSpacing.down || n.down } })), Up = (t) => {
  const n = J((e) => (r) => _o(r)((o) => ({ ...o, outDegree: o.outDegreeReal }))(e))(t)(t.cGroupOrder);
  return J((e) => (r) => Zn(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder);
}, ae = { left: !1, right: !1, up: !1, down: !1 }, Kp = { horizontalSpacing: (t) => (n) => 0, verticalSpacing: (t) => (n) => 0 }, ic = (t) => J((n) => (e) => {
  const r = Mt(e)(n.cGroups);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just") {
    const o = J((s) => (u) => {
      const c = Mt(u)(n.cNodes);
      if (c.tag === "Nothing")
        return s;
      if (c.tag === "Just") {
        if (s.tag === "Nothing")
          return T("Just", u);
        if (s.tag === "Just") {
          const a = Mt(s._1)(n.cNodes);
          if (a.tag === "Nothing")
            return T("Just", u);
          if (a.tag === "Just")
            return c._1.hitbox.x < a._1.hitbox.x ? T("Just", u) : T("Just", s._1);
        }
      }
      f();
    })(x)(r._1.cNodes), i = _o(e)((s) => ({ ...s, reference: o }))(n);
    if (o.tag === "Nothing")
      return i;
    if (o.tag === "Just") {
      const s = Mt(o._1)(i.cNodes);
      if (s.tag === "Nothing")
        return i;
      if (s.tag === "Just") {
        const u = s._1;
        return J((c) => (a) => Zn(a)((g) => ({ ...g, cGroupOffset: { x: g.hitbox.x - u.hitbox.x, y: g.hitbox.y - u.hitbox.y } }))(c))(i)(r._1.cNodes);
      }
    }
  }
  f();
})(t)(t.cGroupOrder), Un = (t) => ic({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return A;
      if (e.tag === "Node")
        return zt("Node", e._1, e._2, e._3, { ...e._4, hitbox: { ...e._4.hitbox, x: -e._4.hitbox.x - e._4.hitbox.width } }, n(e._5), n(e._6));
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
}), w0 = (t) => {
  const n = J((e) => (r) => _o(r)((o) => ({ ...o, outDegree: 0, outDegreeReal: 0, incomingConstraints: [] }))(e))(t)(t.cGroupOrder);
  return J((e) => (r) => {
    const o = Mt(r)(e.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just") {
      if (o._1.cGroup.tag === "Nothing")
        return e;
      if (o._1.cGroup.tag === "Just") {
        const i = o._1.cGroup._1;
        return J((s) => (u) => {
          const c = Mt(u)(s.cNodes);
          if (c.tag === "Nothing")
            return s;
          if (c.tag === "Just")
            return c._1.cGroup.tag === "Just" && c._1.cGroup._1 !== i ? _o(c._1.cGroup._1)((a) => ({ ...a, outDegree: a.outDegree + 1 | 0, outDegreeReal: a.outDegreeReal + 1 | 0 }))(_o(i)((a) => Hn(Ar)(u)(a.incomingConstraints) ? a : { ...a, incomingConstraints: [...a.incomingConstraints, u] })(s)) : s;
          f();
        })(e)(o._1.constraints);
      }
    }
    f();
  })(n)(n.cNodeOrder);
}, jo = (t) => {
  const n = Xp(t.cGraph);
  return { ...t, cGraph: w0(J((e) => (r) => Zn(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder)) };
}, Mp = (t) => (n) => J((e) => (r) => {
  if (t === "LEFT" || t === "UP") {
    const i = r._2;
    return Zn(r._1)((s) => ({ ...s, constraints: [...s.constraints, i] }))(e);
  }
  const o = r._1;
  return Zn(r._2)((i) => ({ ...i, constraints: [...i.constraints, o] }))(e);
})(n)(t === "LEFT" || t === "RIGHT" ? n.predefinedHorizontalConstraints : n.predefinedVerticalConstraints), ce = (t) => {
  const n = {
    ...t,
    cGraph: Mp(t.direction)({
      ...t.cGraph,
      cNodes: (() => {
        const e = (r) => {
          if (r.tag === "Leaf")
            return A;
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
    cGraph: w0((() => {
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
    return n === "LEFT" ? ce(r) : n === "RIGHT" ? ce({ ...r, cGraph: Un(r.cGraph) }) : n === "UP" ? ce({ ...r, cGraph: de(r.cGraph) }) : n === "DOWN" ? ce({ ...r, cGraph: Un(de(r.cGraph)) }) : r;
  if (t === "LEFT")
    return n === "RIGHT" ? jo({ ...r, cGraph: Un(r.cGraph) }) : n === "UP" ? ce({ ...r, cGraph: de(r.cGraph) }) : n === "DOWN" ? ce({ ...r, cGraph: Un(de(r.cGraph)) }) : r;
  if (t === "RIGHT")
    return n === "LEFT" ? jo({ ...r, cGraph: Un(r.cGraph) }) : n === "UP" ? ce({ ...r, cGraph: de(Un(r.cGraph)) }) : n === "DOWN" ? ce({ ...r, cGraph: Un(de(Un(r.cGraph))) }) : r;
  if (t === "UP")
    return n === "LEFT" ? ce({ ...r, cGraph: de(r.cGraph) }) : n === "RIGHT" ? ce({ ...r, cGraph: Un(de(r.cGraph)) }) : n === "DOWN" ? jo({ ...r, cGraph: Un(r.cGraph) }) : r;
  if (t === "DOWN")
    return n === "LEFT" ? ce({ ...r, cGraph: de(Un(r.cGraph)) }) : n === "RIGHT" ? ce({ ...r, cGraph: Un(de(Un(r.cGraph))) }) : n === "UP" ? jo({ ...r, cGraph: Un(r.cGraph) }) : r;
  f();
}, k0 = (t) => (n) => n.finished || !zp(t)(n.cGraph.supportedDirections) || (t === "LEFT" ? n.direction === "LEFT" : t === "RIGHT" ? n.direction === "RIGHT" : t === "UP" ? n.direction === "UP" : t === "DOWN" ? n.direction === "DOWN" : t === "UNDEFINED" && n.direction === "UNDEFINED") ? n : jp(n.direction)(t)(n), Zp = (t) => {
  if (t.finished)
    return t;
  const n = t.direction === "UNDEFINED" ? k0(oc)(t) : t, e = { ...n, cGraph: Up(n.cGraph) };
  if (e.compactionAlgorithm.tag === "Nothing")
    return e;
  if (e.compactionAlgorithm.tag === "Just")
    return e.compactionAlgorithm._1(e);
  f();
}, b0 = (t) => (n) => (e) => {
  const r = Mt(t)(e.cNodes), o = Mt(n)(e.cGroups);
  return r.tag === "Just" && o.tag === "Just" ? (() => {
    if (r._1.cGroup.tag === "Nothing")
      return !1;
    if (r._1.cGroup.tag === "Just")
      return !0;
    f();
  })() && (r._1.cGroup.tag === "Nothing" || !(r._1.cGroup.tag === "Just" && r._1.cGroup._1 === n)) ? e : {
    ...e,
    cNodes: K(st)(t)({ ...r._1, cGroup: T("Just", n) })(e.cNodes),
    cGroups: K(st)(n)({
      ...o._1,
      cNodes: Hn(Ar)(t)(o._1.cNodes) ? o._1.cNodes : [...o._1.cNodes, t],
      reference: (() => {
        if (o._1.reference.tag === "Nothing")
          return T("Just", t);
        if (o._1.reference.tag === "Just")
          return T("Just", o._1.reference._1);
        f();
      })()
    })(e.cGroups)
  } : e;
}, L0 = (t) => (n) => ({
  id: n.nextCNodeId,
  graph: {
    ...n,
    cNodes: K(st)(n.nextCNodeId)({
      id: n.nextCNodeId,
      origin: t.origin,
      kind: t.kind,
      cGroup: x,
      cGroupOffset: qp,
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
    graph: J((r) => (o) => b0(o)(e)(r))({
      ...n,
      cGroups: K(st)(e)({
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
  const r = Mt(e)(n.cNodes);
  return r.tag === "Just" && r._1.cGroup.tag === "Nothing" ? sc({ master: x, nodes: [e] })(n).graph : n;
})(t)(t.cNodeOrder), n$ = (t) => ({
  cGraph: Yp(t$(ic(t))),
  direction: T0,
  compactionAlgorithm: x,
  constraintAlgorithm: x,
  spacingsHandler: Kp,
  lockFun: x,
  finished: !1
}), E0 = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, e$ = (t) => (n) => {
  const e = ft.compare(t._1)(n._1);
  return e === "LT" ? yn : e === "GT" ? Nn : st.compare(t._2)(n._2);
}, r$ = /* @__PURE__ */ (() => {
  const t = Xn.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), Zc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = st.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ta = (t) => t.kind.tag === "Nothing" ? !1 : t.kind.tag === "Just" && t.kind._1 === "vs", na = (t) => t.kind.tag === "Nothing" || !(t.kind.tag === "Just" && t.kind._1 === "vs"), S0 = /* @__PURE__ */ et(4), ea = E0(0)(S0 / 2 - 0.5), o$ = E0(0)(S0 / 2 - 0.5), is = (t) => (n) => e$(b(t.hitbox.x + t.hitbox.width / 2, t.id))(b(n.hitbox.x + n.hitbox.width / 2, n.id)), i$ = (t) => (n) => {
  const e = Ke(Ot, x, (r) => is(t)(r) === "LT", n);
  if (e.tag === "Just") {
    const r = kf(Ot, x, e._1, t, n);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return Rt(n)(t);
  f();
}, C0 = (t) => (n) => {
  const e = lt((o) => is(o)(t) === "LT", n), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? T("Just", e[r]) : x;
}, s$ = (t) => (n) => {
  const e = i$(n)(t.intervals), r = Kt((i) => is(n)(i) === "LT")(e), o = K(st)(n.id)((() => {
    const i = C0(n)(e);
    return i.tag === "Just" ? T("Just", i._1.id) : x;
  })())(t.cand);
  return {
    ...t,
    intervals: e,
    cand: (() => {
      if (r.tag === "Just")
        return K(st)(r._1.id)(T("Just", n.id))(o);
      if (r.tag === "Nothing")
        return o;
      f();
    })()
  };
}, u$ = (t) => (n) => {
  const e = ft.compare(t.low ? t.node.hitbox.y : t.node.hitbox.y + t.node.hitbox.height)(n.low ? n.node.hitbox.y : n.node.hitbox.y + n.node.hitbox.height);
  return e === "EQ" ? t.low ? t.low && !n.low ? Nn : Gn : n.low ? yn : Gn : e;
}, c$ = (t) => J((n) => (e) => Zn(e.id)((r) => ({ ...r, constraints: [] }))(n))(t)(yt((n) => Mt(n)(t.cNodes))(t.cNodeOrder)), a$ = (t) => (n) => J((e) => (r) => {
  const o = Mt(r._1)(e.cNodes);
  if (o.tag === "Just")
    return Zn(r._1)((i) => ({ ...i, constraints: [...i.constraints, ...r._2] }))(e);
  if (o.tag === "Nothing")
    return e;
  f();
})(n)(r$(t)), P0 = (t) => (n) => n.kind.tag !== "Nothing" && n.kind.tag === "Just" && n.kind._1 === "vs" ? n.ignoreSpacing.up ? n.ignoreSpacing.down ? n : { ...n, hitbox: { ...n.hitbox, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t - 0.01, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t, height: n.hitbox.height + 2 * t } }, ra = (t) => (n) => (e) => J((r) => (o) => e(o) ? Zn(o.id)(P0(t))(r) : r)(n)(yt((r) => Mt(r)(n.cNodes))(n.cNodeOrder)), f$ = (t) => (n) => {
  const e = (r, o, i) => {
    const s = Zn(i)(P0(t))(r);
    return o.length <= 1 ? s : J((u) => (c) => c === i ? u : Zn(c)((a) => a.ignoreSpacing.up ? { ...a, hitbox: { ...a.hitbox, y: a.hitbox.y + t + 0.01, height: a.hitbox.height - t - 0.01 } } : a.ignoreSpacing.down ? { ...a, hitbox: { ...a.hitbox, height: a.hitbox.height - t - 0.01 } } : a)(u))(s)(o);
  };
  return J((r) => (o) => {
    if (o.master.tag === "Nothing")
      return 0 < o.cNodes.length ? e(r, o.cNodes, o.cNodes[0]) : r;
    if (o.master.tag === "Just")
      return e(r, o.cNodes, o.master._1);
    f();
  })(n)(yt((r) => Mt(r)(n.cGroups))(n.cGroupOrder));
}, g$ = (t) => (n) => {
  const e = C0(n)(t.intervals), r = Kt((i) => is(n)(i) === "LT")(t.intervals), o = e.tag === "Just" && (() => {
    const i = Zc(n.id)(t.cand);
    return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === e._1.id)) && e._1.cGroup.tag === "Just" && n.cGroup.tag === "Just" && e._1.cGroup._1 !== n.cGroup._1;
  })() ? Tt(st)(rn)(e._1.id)([n.id])(t.constraints) : t.constraints;
  return {
    ...t,
    constraints: r.tag === "Just" && (() => {
      const i = Zc(r._1.id)(t.cand);
      return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === n.id)) && n.cGroup.tag === "Just" && r._1.cGroup.tag === "Just" && n.cGroup._1 !== r._1.cGroup._1;
    })() ? Tt(st)(rn)(n.id)([r._1.id])(o) : o,
    intervals: lt((i) => i.id !== n.id, t.intervals)
  };
}, l$ = (t) => (n) => n.low ? s$(t)(n.node) : g$(t)(n.node), Ls = (t) => (n) => a$(J(l$)({ intervals: [], cand: A, constraints: A })(kt(u$)(Jt(lt(
  t,
  yt((e) => Mt(e)(n.cNodes))(n.cNodeOrder)
))((e) => [{ node: e, low: !0 }, { node: e, low: !1 }]))).constraints)(n), _$ = (t) => Ls((n) => !0)(f$(ea)(Ls(na)(ra(ea)(Ls(ta)(ra(o$)(t)(ta)))(na)))), d$ = (t) => _$(c$(t.cGraph)), Ti = (t) => (n) => {
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
  hitbox: { x: Ti(n._1)(e._1), y: Ti(n._2)(e._2), width: je(n._1 - e._1), height: je(n._2 - e._2) },
  ignoreSpacing: ae,
  potentialGroupParents: (() => {
    if (r.tag === "Nothing")
      return [];
    if (r.tag === "Just")
      return [r._1];
    f();
  })(),
  aPort: x
}), h$ = (t) => (n) => {
  const e = Ti(t.hitbox.x)(n.hitbox.x), r = Ti(t.hitbox.y)(n.hitbox.y);
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
}, p$ = (t) => (n) => je(t.hitbox.x - n.hitbox.x) <= 1e-4 && n.hitbox.y - (t.hitbox.y + t.hitbox.height) <= 1e-4 && t.hitbox.y - (n.hitbox.y + n.hitbox.height) <= 1e-4, $$ = (t) => (n) => je(t.hitbox.x - n.hitbox.x) <= 1e-4 ? ft.compare(t.hitbox.y)(n.hitbox.y) : t.hitbox.x < n.hitbox.x ? yn : Nn, G0 = (t, n) => ({ tag: t, _1: n }), cc = /* @__PURE__ */ nn(P)(Qt), ss = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ia = /* @__PURE__ */ (() => {
  const t = { eq: (e) => (r) => e._1 === r._1 && (e._2.tag === "Nothing" ? r._2.tag === "Nothing" : e._2.tag === "Just" && r._2.tag === "Just" && e._2._1 === r._2._1) }, n = {
    compare: (e) => (r) => {
      const o = P.compare(e._1)(r._1);
      if (o === "LT")
        return yn;
      if (o === "GT")
        return Nn;
      if (e._2.tag === "Nothing")
        return r._2.tag === "Nothing" ? Gn : yn;
      if (r._2.tag === "Nothing")
        return Nn;
      if (e._2.tag === "Just" && r._2.tag === "Just")
        return P.compare(e._2._1)(r._2._1);
      f();
    },
    Eq0: () => t
  };
  return J((e) => (r) => K(n)(r)()(e))(A);
})(), Qe = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, m$ = /* @__PURE__ */ J((t) => (n) => K(Op)(n)()(t))(A), Es = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = zf.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, y$ = (t) => (n) => {
  const e = cc(z((i) => b(i.id, i))(t)), r = yt((i) => ss(i)(e))(n), o = st.compare((() => {
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
}, N$ = (t) => yt((n) => {
  if (n.direction === "V")
    return T("Just", { start: n.start, end: n.end });
  if (n.direction === "H")
    return x;
  f();
})(t.segments), Zo = (t) => (n) => (e) => {
  if (e.tag === "Just") {
    const r = Qe(n)(t);
    if (r.tag === "Just") {
      const o = Kt((i) => i.id === e._1)(r._1);
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
}, x$ = (t) => (n) => (e) => {
  const r = L0({
    origin: T("Just", G0("SegmentOrigin", e)),
    kind: T("Just", "vs"),
    hitbox: e.hitbox
  })(n.cGraph), o = Vp(r.id)(e.ignoreSpacing)(r.graph);
  return {
    ...n,
    cGraph: (() => {
      if (0 < e.potentialGroupParents.length) {
        const i = Mt(e.potentialGroupParents[0])(o.cNodes);
        if (i.tag === "Just") {
          if (i._1.cGroup.tag === "Just")
            return b0(r.id)(i._1.cGroup._1)(o);
          if (i._1.cGroup.tag === "Nothing")
            return o;
          f();
        }
        if (i.tag === "Nothing")
          return o;
        f();
      }
      return sc({ master: T("Just", r.id), nodes: [r.id] })(o).graph;
    })(),
    edgeToCs: J((i) => (s) => Tt(P)(rn)(s)([r.id])(i))(n.edgeToCs)(e.representedEdges),
    lockMap: K(st)(r.id)(y$(t)(e.representedEdges))(n.lockMap)
  };
}, J$ = (t) => (n) => (e) => {
  const r = Bt(
    (o) => x,
    (o) => (i) => T("Just", { head: o, tail: i }),
    kt($$)(n)
  );
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just") {
    const o = J((i) => (s) => p$(i.survivor)(s) ? { ...i, survivor: h$(i.survivor)(s) } : { survivor: s, merged: [...i.merged, i.survivor] })({ survivor: r._1.head, merged: [] })(r._1.tail);
    return J(x$(t))(e)([...o.merged, o.survivor]);
  }
  f();
}, v$ = (t) => ({
  cGraph: {
    cNodes: A,
    cNodeOrder: [],
    cGroups: A,
    cGroupOrder: [],
    supportedDirections: m$([T0, oc, Dp]),
    predefinedHorizontalConstraints: [],
    predefinedVerticalConstraints: [],
    nextCNodeId: 0,
    nextCGroupId: 0
  },
  nodeToC: A,
  edgeToCs: A,
  lockMap: A
}), T$ = (t) => {
  const n = et(4);
  return { x: t.position._1 * n, y: t.position._2 * n, width: t.size._1 * n, height: t.size._2 * n };
}, w$ = (t) => (n) => (e) => J((r) => (o) => {
  const i = L0({ origin: T("Just", G0("NodeOrigin", o.node)), kind: x, hitbox: T$(o) })(r.cGraph), s = Qe(o.node)(t), u = (() => {
    if (s.tag === "Nothing")
      return b(0, 0);
    if (s.tag === "Just")
      return s._1;
    f();
  })();
  return {
    ...r,
    cGraph: sc({ master: T("Just", i.id), nodes: [i.id] })(i.graph).graph,
    nodeToC: K(P)(o.node)(i.id)(r.nodeToC),
    lockMap: K(st)(i.id)((() => {
      const c = u._1 - u._2 | 0;
      return c < 0 ? { ...ae, left: !0 } : c > 0 ? { ...ae, right: !0 } : ae;
    })())(r.lockMap)
  };
})(e)(n), k$ = (t) => J((n) => (e) => Tt(P)((r) => (o) => b(
  r._1 + o._1 | 0,
  r._2 + o._2 | 0
))(e.to.node)(b(1, 0))(Tt(P)((r) => (o) => b(r._1 + o._1 | 0, r._2 + o._2 | 0))(e.from.node)(b(
  0,
  1
))(n)))(A)(t), b$ = (t) => J((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? K(P)(e.origin._1._1)(e.hitbox.x)(n) : n)(A)(yt((n) => Mt(n)(t.cNodes))(t.cNodeOrder)), L$ = (t) => J((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? K(P)(e.origin._1._1)(e.hitbox.x - e.hitboxPreCompaction.x)(n) : n)(A)(yt((n) => Mt(n)(t.cNodes))(t.cNodeOrder)), E$ = (t) => J((n) => (e) => {
  if (e.origin.tag === "Just" && e.origin._1.tag === "SegmentOrigin") {
    const r = e.hitbox.x - e.hitboxPreCompaction.x;
    return J((o) => (i) => K(zf)(i)(r)(o))(n)(e.origin._1._1.affectedBends);
  }
  return n;
})(A)(yt((n) => Mt(n)(t.cNodes))(t.cNodeOrder)), I0 = (t) => {
  const n = cc(z((e) => b(e.id, e))(t.edges));
  return yt((e) => {
    const r = ss(e.edge)(n);
    if (r.tag === "Just")
      return e.reversed ? T(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.to.node,
          tgt: r._1.from.node,
          srcSide: Zo(t.ports)(r._1.to.node)(r._1.to.port),
          tgtSide: Zo(t.ports)(r._1.from.node)(r._1.from.port),
          path: e
        }
      ) : T(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.from.node,
          tgt: r._1.to.node,
          srcSide: Zo(t.ports)(r._1.from.node)(r._1.from.port),
          tgtSide: Zo(t.ports)(r._1.to.node)(r._1.to.port),
          path: e
        }
      );
    if (r.tag === "Nothing")
      return x;
    f();
  })(t.paths);
}, S$ = (t) => (n) => {
  const e = Jt(n)((r) => {
    if (r.src === r.tgt)
      return [];
    if ((r.srcSide === "North" || r.srcSide === "South") && (r.tgtSide === "North" || r.tgtSide === "South"))
      return [];
    const o = Qe(r.tgt)(t.nodeToC), i = (() => {
      if (o.tag === "Just")
        return Mt(o._1)(t.cGraph.cNodes);
      if (o.tag === "Nothing")
        return x;
      f();
    })(), s = Qe(r.src)(t.nodeToC), u = (() => {
      if (s.tag === "Just")
        return Mt(s._1)(t.cGraph.cNodes);
      if (s.tag === "Nothing")
        return x;
      f();
    })(), c = (() => {
      if (u.tag === "Just") {
        if (i.tag === "Just") {
          if (u._1.cGroup.tag === "Just") {
            if (i._1.cGroup.tag === "Just")
              return T("Just", { srcGroup: u._1.cGroup._1, tgtGroup: i._1.cGroup._1, delta: 0, weight: 100 });
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
            return l($.hitbox.x) && $.cGroup._1 !== u._1.cGroup._1 ? T("Just", h($.cGroup._1)(u._1.cGroup._1)) : x;
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
    }, g = yt((l) => Mt(l)(t.cGraph.cNodes))((() => {
      const l = ss(r.edgeId)(t.edgeToCs);
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
}, C$ = (t) => (n) => {
  const e = et(4), r = b$(t), o = L$(t), i = cc(z((u) => b(u.id, b(u.from.node, u.to.node)))(n.edges)), s = E$(t);
  return {
    nodes: z((u) => {
      const c = Qe(u.node)(r);
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
          const g = Qe(c._1._1)(o), _ = (() => {
            if (g.tag === "Nothing")
              return 0;
            if (g.tag === "Just")
              return g._1;
            f();
          })(), d = Qe(c._1._2)(o), l = (() => {
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
                  const v = Es(y.start)(s);
                  if (v.tag === "Nothing")
                    return 0;
                  if (v.tag === "Just")
                    return v._1;
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
                      const N = Es(y.start)(s);
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
                      const N = Es(y.end)(s);
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
}, P$ = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = uc(o.nextId)(i._2.start)(i._2.end)(x)(t.edgeId), u = (() => {
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
      ...uc(i.nextId)(r.start)(b(r.start._1, o.down ? e.y : e.y + e.height))(T(
        "Just",
        n
      ))(t.edgeId),
      aPort: T("Just", { node: t.src, side: o.side }),
      ignoreSpacing: o.down ? { ...ae, down: !0 } : { ...ae, up: !0 }
    }
  ]
}), ti = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...uc(i.nextId)(r.end)(b(r.end._1, o.down ? e.y : e.y + e.height))(T(
        "Just",
        n
      ))(t.edgeId),
      aPort: T("Just", { node: t.tgt, side: o.side }),
      ignoreSpacing: o.down ? { ...ae, down: !0 } : { ...ae, up: !0 }
    }
  ]
}), G$ = (t) => (n) => (e) => {
  const r = Qe(e.src)(t.nodeToC), o = Qe(e.tgt)(t.nodeToC), i = (() => {
    if (r.tag === "Just") {
      const g = Mt(r._1)(t.cGraph.cNodes);
      return g.tag === "Just" ? T("Just", g._1.hitbox) : x;
    }
    if (r.tag === "Nothing")
      return x;
    f();
  })(), s = (() => {
    if (o.tag === "Just") {
      const g = Mt(o._1)(t.cGraph.cNodes);
      return g.tag === "Just" ? T("Just", g._1.hitbox) : x;
    }
    if (o.tag === "Nothing")
      return x;
    f();
  })(), u = N$(e.path), c = J(P$(e)(i)(s)(u.length - 1 | 0))(n)(Ft((g) => (_) => b(
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
}, I$ = (t) => (n) => (e) => J$(t)(J(G$(e))({ nextId: 0, segments: [] })(n).segments)(e), A$ = (t) => I$(t.edges)(I0(t))(w$(k$(t.edges))(t.nodes)(v$())), We = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = st.compare(t)(s._3);
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
  const e = st.compare(t)(n);
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
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = st.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, F$ = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, R$ = (t) => {
  const n = t.Eq0();
  return (e) => (r) => {
    const o = (u) => {
      let c = u, a = !0, g;
      for (; a; ) {
        const _ = c, d = Bt((l) => x, (l) => (h) => T("Just", { head: l, tail: h }), _.queue);
        if (d.tag === "Nothing") {
          a = !1, g = _;
          continue;
        }
        if (d.tag === "Just") {
          const l = d._1.head;
          if (((p) => {
            let m = p, y = !0, N;
            for (; y; ) {
              const v = m;
              if (v.tag === "Leaf") {
                y = !1, N = !1;
                continue;
              }
              if (v.tag === "Node") {
                const w = t.compare(l)(v._3);
                if (w === "LT") {
                  m = v._5;
                  continue;
                }
                if (w === "GT") {
                  m = v._6;
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
          const h = Kt(($) => !We($.eid)(_.removedEdges) && (n.eq($.src)(l) || n.eq($.tgt)(l)))(r);
          if (h.tag === "Nothing") {
            c = { ..._, queue: d._1.tail };
            continue;
          }
          if (h.tag === "Just") {
            const $ = n.eq(h._1.src)(l) ? h._1.tgt : h._1.src, p = {
              ..._,
              degree: K(t)($)((() => {
                const y = ((N) => {
                  let v = N, w = !0, k;
                  for (; w; ) {
                    const L = v;
                    if (L.tag === "Leaf") {
                      w = !1, k = x;
                      continue;
                    }
                    if (L.tag === "Node") {
                      const I = t.compare($)(L._3);
                      if (I === "LT") {
                        v = L._5;
                        continue;
                      }
                      if (I === "GT") {
                        v = L._6;
                        continue;
                      }
                      if (I === "EQ") {
                        w = !1, k = T("Just", L._4);
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
              removedNodes: K(t)(l)()(_.removedNodes),
              removedEdges: K(st)(h._1.eid)()(_.removedEdges),
              record: [..._.record, { node: l, neighbour: $, viaSrc: n.eq(h._1.src)(l) }],
              queue: d._1.tail
            };
            if ((() => {
              const y = ((v) => {
                let w = v, k = !0, L;
                for (; k; ) {
                  const I = w;
                  if (I.tag === "Leaf") {
                    k = !1, L = x;
                    continue;
                  }
                  if (I.tag === "Node") {
                    const B = t.compare($)(I._3);
                    if (B === "LT") {
                      w = I._5;
                      continue;
                    }
                    if (B === "GT") {
                      w = I._6;
                      continue;
                    }
                    if (B === "EQ") {
                      k = !1, L = T("Just", I._4);
                      continue;
                    }
                  }
                  f();
                }
                return L;
              })(p.degree), N = (v) => {
                let w = v, k = !0, L;
                for (; k; ) {
                  const I = w;
                  if (I.tag === "Leaf") {
                    k = !1, L = !1;
                    continue;
                  }
                  if (I.tag === "Node") {
                    const B = t.compare($)(I._3);
                    if (B === "LT") {
                      w = I._5;
                      continue;
                    }
                    if (B === "GT") {
                      w = I._6;
                      continue;
                    }
                    if (B === "EQ") {
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
    }, i = J((u) => (c) => Tt(t)(on)(c.src)(1)(Tt(t)(on)(c.tgt)(1)(u)))(A)(r), s = o({
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
                  d = !1, l = T("Just", h._4);
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
      coreEdges: lt((u) => !We(u.eid)(s.removedEdges), r),
      removed: s.record
    };
  };
}, B$ = (t) => (n) => (e) => J((r) => (o) => {
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
            _ = !1, d = T("Just", l._4);
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
  return K(t)(o.node)(o.viaSrc ? s - 1 | 0 : s + 1 | 0)(r);
})(e)(Ln(n)), iu = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = { ...o, treeNode: K(t)(r)()(o.treeNode) };
    return J((s) => (u) => {
      if (We(u.eid)(s.st.edgeVisited))
        return s;
      const c = { ...s.st, edgeVisited: K(st)(u.eid)()(s.st.edgeVisited) }, a = n.eq(u.src)((() => {
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
      if (We(u.eid)(c.treeEdge)) {
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
            let y = m, N = !0, v;
            for (; N; ) {
              const w = y;
              if (w.tag === "Leaf") {
                N = !1, v = x;
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
                  N = !1, v = T("Just", w._4);
                  continue;
                }
              }
              f();
            }
            return v;
          })(c.layer), h = u.src, p = ((m) => {
            let y = m, N = !0, v;
            for (; N; ) {
              const w = y;
              if (w.tag === "Leaf") {
                N = !1, v = x;
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
                  N = !1, v = T("Just", w._4);
                  continue;
                }
              }
              f();
            }
            return v;
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
        const g = iu(t)(e)(a)({ ...c, treeEdge: K(st)(u.eid)()(c.treeEdge) });
        return { count: s.count + g.count | 0, st: g.st };
      }
      return { ...s, st: c };
    })({ count: 1, st: i })(lt((s) => (n.eq(s.src)(r) || n.eq(s.tgt)(r)) && !We(s.eid)(i.edgeVisited), e));
  };
}, wi = (t) => (n) => (e) => (r) => {
  const o = r.src, s = (($) => {
    let p = $, m = !0, y;
    for (; m; ) {
      const N = p;
      if (N.tag === "Leaf") {
        m = !1, y = x;
        continue;
      }
      if (N.tag === "Node") {
        const v = t.compare(o)(N._3);
        if (v === "LT") {
          p = N._5;
          continue;
        }
        if (v === "GT") {
          p = N._6;
          continue;
        }
        if (v === "EQ") {
          m = !1, y = T("Just", N._4);
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
        const v = t.compare(c)(N._3);
        if (v === "LT") {
          p = N._5;
          continue;
        }
        if (v === "GT") {
          p = N._6;
          continue;
        }
        if (v === "EQ") {
          m = !1, y = T("Just", N._4);
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
        const v = t.compare(e)(N._3);
        if (v === "LT") {
          p = N._5;
          continue;
        }
        if (v === "GT") {
          p = N._6;
          continue;
        }
        if (v === "EQ") {
          m = !1, y = T("Just", N._4);
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
      let N = y, v = !0, w;
      for (; v; ) {
        const k = N;
        if (k.tag === "Leaf") {
          v = !1, w = x;
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
            v = !1, w = T("Just", k._4);
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
        const v = ((w) => {
          let k = w, L = !0, I;
          for (; L; ) {
            const B = k;
            if (B.tag === "Leaf") {
              L = !1, I = x;
              continue;
            }
            if (B.tag === "Node") {
              const Y = t.compare(y)(B._3);
              if (Y === "LT") {
                k = B._5;
                continue;
              }
              if (Y === "GT") {
                k = B._6;
                continue;
              }
              if (Y === "EQ") {
                L = !1, I = T("Just", B._4);
                continue;
              }
            }
            f();
          }
          return I;
        })(n.lowestPoID);
        return (() => {
          if (v.tag === "Nothing")
            return 0 <= h;
          if (v.tag === "Just")
            return v._1 <= h;
          f();
        })() && h <= _;
      })();
    })();
  })() ? u >= _ : u < _;
}, Q$ = (t) => {
  const n = nn(t)(Qt);
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
}, W$ = (t) => (n) => (e) => J((r) => (o) => {
  if ((() => {
    const d = o.src, l = (p) => {
      let m = p, y = !0, N;
      for (; y; ) {
        const v = m;
        if (v.tag === "Leaf") {
          y = !1, N = !1;
          continue;
        }
        if (v.tag === "Node") {
          const w = t.compare(d)(v._3);
          if (w === "LT") {
            m = v._5;
            continue;
          }
          if (w === "GT") {
            m = v._6;
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
        const v = m;
        if (v.tag === "Leaf") {
          y = !1, N = !1;
          continue;
        }
        if (v.tag === "Node") {
          const w = t.compare(h)(v._3);
          if (w === "LT") {
            m = v._5;
            continue;
          }
          if (w === "GT") {
            m = v._6;
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
          h = !1, $ = T("Just", p._4);
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
          h = !1, $ = T("Just", p._4);
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
  return _ < r.slack ? { edge: T("Just", o), slack: _ } : r;
})({ edge: x, slack: 1e9 })(n).edge, D$ = (t) => {
  const n = nn(t)(Qt);
  return (e) => (r) => {
    const o = J((i) => (s) => ru(i)((() => {
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
              _ = !1, d = T("Just", l._4);
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
                g = !1, _ = T("Just", d._4);
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
}, A0 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = J((u) => (c) => {
      const a = A0(t)(e)(n.eq(c.src)(r) ? c.tgt : c.src)({ ...u.st, edgeVisited: K(st)(c.eid)()(u.st.edgeVisited) });
      return { lowest: ru(u.lowest)(a.lowest), st: a.st };
    })({ lowest: 1e9, st: o })(lt(
      (u) => We(u.eid)(o.treeEdge) && (n.eq(u.src)(r) || n.eq(u.tgt)(r)) && !We(u.eid)(o.edgeVisited),
      e
    )), s = ru(i.lowest)(i.st.postOrder);
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
}, F0 = (t) => {
  const n = A0(t);
  return (e) => (r) => (o) => 0 < e.length ? n(r)(e[0])({ ...o, edgeVisited: A, postOrder: 1, poID: A, lowestPoID: A }).st : o;
}, H$ = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => lt((i) => We(i.eid)(r.treeEdge) && (n.eq(i.src)(o) || n.eq(i.tgt)(o)), e);
}, O$ = (t) => (n) => Kt((e) => {
  const r = ou(e.eid)(n.cutvalue);
  return We(e.eid)(n.treeEdge) && (() => {
    if (r.tag === "Nothing")
      return !1;
    if (r.tag === "Just")
      return r._1 < -1e-10;
    f();
  })();
})(t), R0 = (t) => {
  const n = iu(t);
  return (e) => (r) => (o) => {
    const i = 0 < e.length ? T("Just", e[0]) : x;
    if (i.tag === "Nothing")
      return o;
    if (i.tag === "Just") {
      const s = n(r)(i._1)({ ...o, edgeVisited: A, treeNode: A, treeEdge: A });
      if (s.count >= e.length)
        return s.st;
      const u = W$(t)(r)(s.st);
      if (u.tag === "Nothing")
        return s.st;
      if (u.tag === "Just") {
        const c = u._1.tgt, g = ((p) => {
          let m = p, y = !0, N;
          for (; y; ) {
            const v = m;
            if (v.tag === "Leaf") {
              y = !1, N = x;
              continue;
            }
            if (v.tag === "Node") {
              const w = t.compare(c)(v._3);
              if (w === "LT") {
                m = v._5;
                continue;
              }
              if (w === "GT") {
                m = v._6;
                continue;
              }
              if (w === "EQ") {
                y = !1, N = T("Just", v._4);
                continue;
              }
            }
            f();
          }
          return N;
        })(s.st.layer), _ = u._1.src, l = ((p) => {
          let m = p, y = !0, N;
          for (; y; ) {
            const v = m;
            if (v.tag === "Leaf") {
              y = !1, N = x;
              continue;
            }
            if (v.tag === "Node") {
              const w = t.compare(_)(v._3);
              if (w === "LT") {
                m = v._5;
                continue;
              }
              if (w === "GT") {
                m = v._6;
                continue;
              }
              if (w === "EQ") {
                y = !1, N = T("Just", v._4);
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
            let N = y, v = !0, w;
            for (; v; ) {
              const k = N;
              if (k.tag === "Leaf") {
                v = !1, w = !1;
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
                  v = !1, w = !0;
                  continue;
                }
              }
              f();
            }
            return w;
          })(s.st.treeNode);
        })() ? -h : h;
        return R0(t)(e)(r)({
          ...s.st,
          layer: J((p) => (m) => ((N) => {
            let v = N, w = !0, k;
            for (; w; ) {
              const L = v;
              if (L.tag === "Leaf") {
                w = !1, k = !1;
                continue;
              }
              if (L.tag === "Node") {
                const I = t.compare(m)(L._3);
                if (I === "LT") {
                  v = L._5;
                  continue;
                }
                if (I === "GT") {
                  v = L._6;
                  continue;
                }
                if (I === "EQ") {
                  w = !1, k = !0;
                  continue;
                }
              }
              f();
            }
            return k;
          })(s.st.treeNode) ? K(t)(m)((() => {
            const N = ((v) => {
              let w = v, k = !0, L;
              for (; k; ) {
                const I = w;
                if (I.tag === "Leaf") {
                  k = !1, L = x;
                  continue;
                }
                if (I.tag === "Node") {
                  const B = t.compare(m)(I._3);
                  if (B === "LT") {
                    w = I._5;
                    continue;
                  }
                  if (B === "GT") {
                    w = I._6;
                    continue;
                  }
                  if (B === "EQ") {
                    k = !1, L = T("Just", I._4);
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
}, z$ = (t) => (n) => (e) => (r) => J((o) => (i) => {
  if (wi(t)(r)(i.src)(e) && !wi(t)(r)(i.tgt)(e)) {
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
            $ = !1, p = T("Just", m._4);
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
            $ = !1, p = T("Just", m._4);
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
      return { edge: T("Just", i), slack: d };
  }
  return o;
})({ edge: x, slack: 1e9 })(n).edge, q$ = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => (i) => {
    const s = i.tgt, u = i.src;
    return J((c) => (a) => {
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
}, Y$ = (t) => {
  const n = q$(t);
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
              h = !1, $ = T("Just", p._4);
              continue;
            }
          }
          f();
        }
        return $;
      })(a);
      if (_.tag === "Just")
        return K(t)(u)(lt((d) => d.eid !== c.eid, _._1))(a);
      if (_.tag === "Nothing")
        return a;
      f();
    };
    return ((u) => (c) => {
      let a = u, g = c, _ = !0, d;
      for (; _; ) {
        const l = a, h = g, p = ((y) => {
          let N = y, v = !0, w;
          for (; v; ) {
            const k = N;
            if (k.tag === "Leaf") {
              v = !1, w = x;
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
                v = !1, w = T("Just", k._4);
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
            cutvalue: K(st)(m[0].eid)(n(e)(l)(h)(m[0]))(l.cutvalue)
          }, g = y;
          continue;
        }
        _ = !1, d = l;
      }
      return d;
    })(r)(o);
  };
}, B0 = (t) => {
  const n = t.Eq0(), e = t.Eq0(), r = { eq: (a) => (g) => a.delta === g.delta && a.eid === g.eid && e.eq(a.src)(g.src) && n.eq(a.tgt)(g.tgt) && a.weight === g.weight }, o = {
    compare: (a) => (g) => {
      const _ = st.compare(a.delta)(g.delta);
      if (_ === "LT" || _ === "GT" || _ !== "EQ")
        return _;
      const d = st.compare(a.eid)(g.eid);
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
  }, i = J((a) => (g) => K(o)(g)()(a))(A), s = H$(t), u = nn(t)(Qt), c = Y$(t);
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
      cutvalue: J(c(g))(d)(lt(
        (l) => {
          const $ = ((p) => {
            let m = p, y = !0, N;
            for (; y; ) {
              const v = m;
              if (v.tag === "Leaf") {
                y = !1, N = x;
                continue;
              }
              if (v.tag === "Node") {
                const w = t.compare(l)(v._3);
                if (w === "LT") {
                  m = v._5;
                  continue;
                }
                if (w === "GT") {
                  m = v._6;
                  continue;
                }
                if (w === "EQ") {
                  y = !1, N = T("Just", v._4);
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
  const n = F0(t), e = B0(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const c = { ...u, treeEdge: K(st)(s.eid)()($o(st)(i.eid)(u.treeEdge)) }, a = s.tgt, _ = ((m) => {
      let y = m, N = !0, v;
      for (; N; ) {
        const w = y;
        if (w.tag === "Leaf") {
          N = !1, v = x;
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
            N = !1, v = T("Just", w._4);
            continue;
          }
        }
        f();
      }
      return v;
    })(c.layer), d = s.src, h = ((m) => {
      let y = m, N = !0, v;
      for (; N; ) {
        const w = y;
        if (w.tag === "Leaf") {
          N = !1, v = x;
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
            N = !1, v = T("Just", w._4);
            continue;
          }
        }
        f();
      }
      return v;
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
    })(), p = wi(t)(c)(s.tgt)(i) ? $ : -$;
    return e(r)(o)(n(r)(o)({
      ...c,
      layer: J((m) => (y) => wi(t)(c)(y)(i) ? m : K(t)(y)((() => {
        const v = ((w) => {
          let k = w, L = !0, I;
          for (; L; ) {
            const B = k;
            if (B.tag === "Leaf") {
              L = !1, I = x;
              continue;
            }
            if (B.tag === "Node") {
              const Y = t.compare(y)(B._3);
              if (Y === "LT") {
                k = B._5;
                continue;
              }
              if (Y === "GT") {
                k = B._6;
                continue;
              }
              if (Y === "EQ") {
                L = !1, I = T("Just", B._4);
                continue;
              }
            }
            f();
          }
          return I;
        })(c.layer);
        if (v.tag === "Nothing")
          return 0 + p | 0;
        if (v.tag === "Just")
          return v._1 + p | 0;
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
        const p = z$(t)(o)($._1)(h);
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
  const n = B0(t), e = F0(t), r = R0(t);
  return (o) => (i) => (s) => n(o)(i)(e(o)(i)(r(o)(i)(s)));
}, ua = (t) => (n) => J((e) => (r) => Tt(t)(rn)(n(r))([r])(e))(A), K$ = (t) => {
  const n = nn(t)(Qt);
  return (e) => (r) => (o) => {
    const i = (c) => (a) => (g) => (_) => {
      let d = c, l = a, h = g, $ = _, p = !0, m;
      for (; p; ) {
        const y = d, N = l, v = h, w = $, k = Bt((L) => x, (L) => (I) => T("Just", { head: L, tail: I }), v);
        if (k.tag === "Nothing") {
          p = !1, m = w;
          continue;
        }
        if (k.tag === "Just") {
          const L = k._1.head, B = ((C) => {
            let F = C, U = !0, tt;
            for (; U; ) {
              const q = F;
              if (q.tag === "Leaf") {
                U = !1, tt = x;
                continue;
              }
              if (q.tag === "Node") {
                const Q = t.compare(L)(q._3);
                if (Q === "LT") {
                  F = q._5;
                  continue;
                }
                if (Q === "GT") {
                  F = q._6;
                  continue;
                }
                if (Q === "EQ") {
                  U = !1, tt = T("Just", q._4);
                  continue;
                }
              }
              f();
            }
            return tt;
          })(w.layer), Y = (() => {
            if (B.tag === "Nothing")
              return 0;
            if (B.tag === "Just")
              return B._1;
            f();
          })(), X = J((C) => (F) => {
            const U = F.tgt, q = ((E) => {
              let S = E, O = !0, G;
              for (; O; ) {
                const D = S;
                if (D.tag === "Leaf") {
                  O = !1, G = x;
                  continue;
                }
                if (D.tag === "Node") {
                  const W = t.compare(U)(D._3);
                  if (W === "LT") {
                    S = D._5;
                    continue;
                  }
                  if (W === "GT") {
                    S = D._6;
                    continue;
                  }
                  if (W === "EQ") {
                    O = !1, G = T("Just", D._4);
                    continue;
                  }
                }
                f();
              }
              return G;
            })(C.incident), Q = (() => {
              if (q.tag === "Nothing")
                return -1;
              if (q.tag === "Just")
                return q._1 - 1 | 0;
              f();
            })();
            return {
              st: {
                ...C.st,
                layer: K(t)(F.tgt)(F$((() => {
                  const E = F.tgt, O = ((G) => {
                    let D = G, W = !0, j;
                    for (; W; ) {
                      const V = D;
                      if (V.tag === "Leaf") {
                        W = !1, j = x;
                        continue;
                      }
                      if (V.tag === "Node") {
                        const H = t.compare(E)(V._3);
                        if (H === "LT") {
                          D = V._5;
                          continue;
                        }
                        if (H === "GT") {
                          D = V._6;
                          continue;
                        }
                        if (H === "EQ") {
                          W = !1, j = T("Just", V._4);
                          continue;
                        }
                      }
                      f();
                    }
                    return j;
                  })(C.st.layer);
                  if (O.tag === "Nothing")
                    return 0;
                  if (O.tag === "Just")
                    return O._1;
                  f();
                })())(Y + F.delta | 0))(C.st.layer)
              },
              incident: K(t)(F.tgt)(Q)(C.incident),
              queue: Q === 0 ? [...C.queue, F.tgt] : C.queue
            };
          })({ st: w, incident: N, queue: k._1.tail })((() => {
            const F = ((U) => {
              let tt = U, q = !0, Q;
              for (; q; ) {
                const E = tt;
                if (E.tag === "Leaf") {
                  q = !1, Q = x;
                  continue;
                }
                if (E.tag === "Node") {
                  const S = t.compare(L)(E._3);
                  if (S === "LT") {
                    tt = E._5;
                    continue;
                  }
                  if (S === "GT") {
                    tt = E._6;
                    continue;
                  }
                  if (S === "EQ") {
                    q = !1, Q = T("Just", E._4);
                    continue;
                  }
                }
                f();
              }
              return Q;
            })(y);
            if (F.tag === "Nothing")
              return [];
            if (F.tag === "Just")
              return F._1;
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
                l = !1, h = T("Just", $._4);
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
                l = !1, h = T("Just", $._4);
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
  const n = D$(t), e = M$(t), r = R$(t);
  return (o) => (i) => {
    if (o.length === 0)
      return A;
    if (o.length < 40)
      return n(o)(e(o)(i));
    const s = r(o)(i);
    return n(o)(B$(t)(s.removed)(e(s.coreNodes)(s.coreEdges)));
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
      const u = st.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, su = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, j$ = /* @__PURE__ */ Q0(st), wo = (t) => (n) => ({ ...n, edges: [...n.edges, { src: t.src, tgt: t.tgt, delta: t.delta, weight: t.weight, eid: n.nextEid }], nextEid: n.nextEid + 1 | 0 }), Z$ = (t) => (n) => (e) => {
  if (e.cGroup.tag === "Nothing")
    return n;
  if (e.cGroup.tag === "Just") {
    const r = et((() => {
      const o = W0(e.cGroup._1)(t);
      if (o.tag === "Nothing")
        return 0;
      if (o.tag === "Just")
        return o._1;
      f();
    })());
    return Zn(e.id)((o) => ({ ...o, hitbox: { ...o.hitbox, x: r + o.cGroupOffset.x } }))(n);
  }
  f();
}, tm = (t) => (n) => ({
  ...n,
  cGraph: J(Z$(t))(n.cGraph)((() => {
    const e = n.cGraph;
    return yt((r) => Mt(r)(e.cNodes))(e.cNodeOrder);
  })())
}), nm = (t) => (n) => (e) => (r) => (o) => {
  const i = $n(Yi(n.cGroupOffset.x - t.cGroupOffset.x));
  return wo({ src: o.nextNodeId, tgt: r, delta: su(0)(-i), weight: 1 })(wo({ src: o.nextNodeId, tgt: e, delta: su(0)(i), weight: 1 })({
    ...o,
    nodes: [...o.nodes, o.nextNodeId],
    nextNodeId: o.nextNodeId + 1 | 0
  }));
}, em = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = su(0)($n(Yi(e.cGroupOffset.x + e.hitbox.width + (n.direction === "LEFT" || n.direction === "RIGHT" ? n.spacingsHandler.horizontalSpacing(e)(r) : n.spacingsHandler.verticalSpacing(e)(r)) - r.cGroupOffset.x)));
  return t.sameEdgeVerticalSegments(e)(r) ? nm(e)(r)(o)(i)(s) : wo({ src: o, tgt: i, delta: u, weight: t.vsLNodePair(e)(r) ? 2 : 1 })(s);
}, rm = (t) => (n) => (e) => (r) => (o) => {
  const i = Mt(o)(n.cGraph.cNodes);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just")
    return (e.cGroup.tag === "Nothing" ? i._1.cGroup.tag === "Nothing" : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" && e.cGroup._1 === i._1.cGroup._1) ? r : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" ? em(t)(n)(e)(i._1)(e.cGroup._1)(i._1.cGroup._1)(r) : r;
  f();
}, om = (t) => (n) => (e) => (r) => J(rm(t)(n)(r))(e)(r.constraints), im = (t) => (n) => wo({ src: n.srcGroup, tgt: n.tgtGroup, delta: n.delta, weight: n.weight })(t), sm = (t) => {
  const n = J((o) => (i) => Tt(st)(on)(i.tgt)(1)(o))(A)(t.edges), e = lt(
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
  return J((o) => (i) => wo({ src: r, tgt: i, delta: 1, weight: 0 })(o))({ ...t, nodes: [...t.nodes, r], nextNodeId: r + 1 | 0 })(e);
}, um = (t) => (n) => {
  const e = sm(J(im)(J(om(t)(n))({
    nodes: n.cGraph.cGroupOrder,
    edges: [],
    nextNodeId: n.cGraph.nextCGroupId,
    nextEid: 0
  })((() => {
    const r = n.cGraph;
    return yt((o) => Mt(o)(r.cNodes))(r.cNodeOrder);
  })()))(t.edgeLengthEdges(n.cGraph)));
  return { nodes: e.nodes, edges: e.edges };
}, cm = (t) => (n) => {
  const e = um(t)(n);
  return tm(j$(e.nodes)(e.edges))(n);
}, D0 = (t) => t, Zt = /* @__PURE__ */ D0("H"), tn = /* @__PURE__ */ D0("V"), am = (t) => b(t._2, t._1), H0 = (t) => ({ ...t, position: b(t.position._2, t.position._1), size: b(t.size._2, t.size._1) }), fm = (t) => ({
  start: b(t.start._2, t.start._1),
  end: b(t.end._2, t.end._1),
  direction: (() => {
    if (t.direction === "H")
      return tn;
    if (t.direction === "V")
      return Zt;
    f();
  })()
}), O0 = (t) => ({ ...t, segments: z(fm)(t.segments), bends: z(am)(t.bends) }), gm = (t) => ({ nodes: z(H0)(t.nodes), edges: t.edges, paths: z(O0)(t.paths), ports: t.ports }), lm = (t) => ({
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
}), _m = (t) => (n) => cm(n), dm = (t) => (n) => {
  const e = gm(n), r = A$(e), o = S$(r)(I0(e)), i = C$(k0(oc)(Zp({
    ...n$(r.cGraph),
    compactionAlgorithm: T("Just", _m()(o)),
    constraintAlgorithm: T("Just", d$),
    spacingsHandler: lm(o)
  })).cGraph)({ nodes: e.nodes, edges: e.edges, paths: e.paths });
  return { nodes: z(H0)(i.nodes), edges: z(O0)(i.edges) };
}, z0 = (t) => t, Jr = /* @__PURE__ */ nn(st)(Qt), Gt = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = st.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ca = (t) => (n) => {
  const e = st.compare(t)(n);
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
}, Lr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, hm = (t) => (n) => {
  const e = st.compare(t._1)(n._1);
  return e === "LT" ? yn : e === "GT" ? Nn : st.compare(t._2)(n._2);
}, wr = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, pm = /* @__PURE__ */ (() => {
  const t = Xn.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), $m = (t) => t, aa = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
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
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ni = /* @__PURE__ */ z0("Regular"), ei = /* @__PURE__ */ z0("Critical"), q0 = (t) => (n) => {
  const e = J((s) => (u) => K(P)(u.node)(u)(s))(A)(n), r = 1.25 * et(4), o = (s, u, c) => ((g) => (_) => (d) => {
    let l = g, h = _, $ = d, p = !0, m;
    for (; p; ) {
      const y = l, N = h, v = $;
      if (v.critical) {
        p = !1, m = v;
        continue;
      }
      const w = Bt((L) => x, (L) => (I) => T("Just", { head: L, tail: I }), y), k = Bt((L) => x, (L) => (I) => T("Just", { head: L, tail: I }), N);
      if (w.tag === "Just" && k.tag === "Just") {
        const L = w._1.head > k._1.head - s && w._1.head < k._1.head + s ? { ...v, critical: !0 } : w._1.head > k._1.head - r && w._1.head < k._1.head + r ? { ...v, conflicts: v.conflicts + 1 | 0 } : v;
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
      p = !1, m = v;
    }
    return m;
  })(u)(c)({ conflicts: 0, critical: !1 }), i = (s, u, c) => {
    if (pt(J(pt)(-1e18)(u.incoming))(J(pt)(-1e18)(u.outgoing)) - ht(J(ht)(1e18)(u.incoming))(J(ht)(1e18)(u.outgoing)) < 1e-3 || pt(J(pt)(-1e18)(c.incoming))(J(pt)(-1e18)(c.outgoing)) - ht(J(ht)(1e18)(c.incoming))(J(ht)(1e18)(c.outgoing)) < 1e-3)
      return [];
    const a = o(s, u.outgoing, c.incoming), g = o(s, c.outgoing, u.incoming);
    if (a.critical || g.critical)
      return [...a.critical ? [{ src: c.id, tgt: u.id, weight: 1, kind: ei }] : [], ...g.critical ? [{ src: u.id, tgt: c.id, weight: 1, kind: ei }] : []];
    const _ = ht(J(ht)(1e18)(u.incoming))(J(ht)(1e18)(u.outgoing)), d = pt(J(pt)(-1e18)(u.incoming))(J(pt)(-1e18)(u.outgoing)), l = ht(J(ht)(1e18)(c.incoming))(J(ht)(1e18)(c.outgoing)), h = pt(J(pt)(-1e18)(c.incoming))(J(pt)(-1e18)(c.outgoing)), $ = (1 * a.conflicts | 0) + (16 * (J((m) => (y) => y > h ? m : y >= l ? m + 1 | 0 : m)(0)(u.outgoing) + J((m) => (y) => y > d ? m : y >= _ ? m + 1 | 0 : m)(0)(c.incoming) | 0) | 0) | 0, p = (1 * g.conflicts | 0) + (16 * (J((m) => (y) => y > d ? m : y >= _ ? m + 1 | 0 : m)(0)(c.outgoing) + J((m) => (y) => y > h ? m : y >= l ? m + 1 | 0 : m)(0)(u.incoming) | 0) | 0) | 0;
    return $ < p ? [{ src: u.id, tgt: c.id, weight: p - $ | 0, kind: ni }] : $ > p ? [{ src: c.id, tgt: u.id, weight: $ - p | 0, kind: ni }] : $ > 0 ? [{ src: u.id, tgt: c.id, weight: 0, kind: ni }, { src: c.id, tgt: u.id, weight: 0, kind: ni }] : [];
  };
  return J((s) => (u) => J((c) => (a) => K(P)(a._1)(a._2)(c))(s)((() => {
    const c = J((C) => (F) => {
      const U = F.edge.from.node + "|" + (() => {
        if (F.edge.from.port.tag === "Just")
          return F.edge.from.port._1;
        if (F.edge.from.port.tag === "Nothing")
          return "_auto_" + F.edge.id;
        f();
      })(), tt = aa(U)(C.entries);
      if (tt.tag === "Nothing")
        return {
          ...C,
          entries: K(P)(U)({
            id: 0,
            members: [F.edge.id],
            incoming: [F.fromPos._1],
            outgoing: [F.toPos._1],
            slot: 0,
            mark: 0,
            splitBy: x,
            splitPartner: x
          })(C.entries),
          order: [...C.order, U]
        };
      if (tt.tag === "Just")
        return {
          ...C,
          entries: K(P)(U)({
            ...tt._1,
            members: [...tt._1.members, F.edge.id],
            incoming: [...ar((q) => q < F.fromPos._1)(tt._1.incoming).init, F.fromPos._1, ...ar((q) => q <= F.fromPos._1)(tt._1.incoming).rest],
            outgoing: [...ar((q) => q < F.toPos._1)(tt._1.outgoing).init, F.toPos._1, ...ar((q) => q <= F.toPos._1)(tt._1.outgoing).rest]
          })(C.entries)
        };
      f();
    })({ entries: A, order: [] })(u._2), a = Ft((C) => (F) => ({ ...F, id: C }))(yt((C) => aa(C)(c.entries))(c.order));
    if (a.length === 0)
      return [];
    const g = J((C) => (F) => C.prev.tag === "Just" && F - C.prev._1 < 1e-9 ? C : { prev: T("Just", F), out: [...C.out, F] })({ prev: x, out: [] })(kt(ft.compare)([
      ...Jt(a)((C) => C.incoming),
      ...Jt(a)((C) => C.outgoing)
    ])).out, _ = g.length < 2 ? 0.2 * r : 0.2 * J((C) => (F) => {
      if (C.prev.tag === "Nothing")
        return { prev: T("Just", F), mn: C.mn };
      if (C.prev.tag === "Just")
        return { prev: T("Just", F), mn: ht(C.mn)(F - C.prev._1) };
      f();
    })({ prev: x, mn: 1e18 })(g).mn, d = {
      segments: a,
      deps: (() => {
        const C = a.length;
        return Jt(Jt(It(0, C - 2 | 0))((F) => Jt(It(F + 1 | 0, C - 1 | 0))((U) => [
          b(F, U)
        ])))((F) => F._1 >= 0 && F._1 < a.length ? F._2 >= 0 && F._2 < a.length ? i(_, a[F._1], a[F._2]) : [] : []);
      })()
    }, l = lt(
      (C) => {
        if (C.kind === "Critical")
          return !0;
        if (C.kind === "Regular")
          return !1;
        f();
      },
      d.deps
    ), h = (() => {
      if (l.length < 2)
        return d;
      const C = Jr((() => {
        const Q = d.segments;
        return z((E) => b(E.id, E.mark))((() => {
          const E = Q.length, S = (D) => {
            let W = D, j = !0, V;
            for (; j; ) {
              const H = W, rt = Kt((Z) => {
                const it = Gt(Z)(H.inWeight);
                if (it.tag === "Nothing")
                  return !0;
                if (it.tag === "Just")
                  return it._1 === 0;
                f();
              })(H.remaining);
              if (rt.tag === "Nothing") {
                j = !1, V = H;
                continue;
              }
              if (rt.tag === "Just") {
                const Z = rt._1;
                W = {
                  ...H,
                  inWeight: J((it) => (nt) => Tt(st)(on)(nt.tgt)(-nt.weight)(it))(H.inWeight)((() => {
                    const it = Gt(Z)(H.depsBySrc);
                    if (it.tag === "Nothing")
                      return [];
                    if (it.tag === "Just")
                      return it._1;
                    f();
                  })()),
                  marks: K(st)(Z)(H.nextSource)(H.marks),
                  nextSource: H.nextSource + 1 | 0,
                  outWeight: J((it) => (nt) => Tt(st)(on)(nt.src)(-nt.weight)(it))(H.outWeight)((() => {
                    const it = Gt(Z)(H.depsByTgt);
                    if (it.tag === "Nothing")
                      return [];
                    if (it.tag === "Just")
                      return it._1;
                    f();
                  })()),
                  remaining: lt((it) => it !== Z, H.remaining)
                };
                continue;
              }
              f();
            }
            return V;
          }, O = (D) => {
            let W = D, j = !0, V;
            for (; j; ) {
              const H = W, rt = Kt((Z) => {
                const it = Gt(Z)(H.outWeight);
                if (it.tag === "Nothing")
                  return !0;
                if (it.tag === "Just")
                  return it._1 === 0;
                f();
              })(H.remaining);
              if (rt.tag === "Nothing") {
                j = !1, V = H;
                continue;
              }
              if (rt.tag === "Just") {
                const Z = rt._1;
                W = {
                  ...H,
                  inWeight: J((it) => (nt) => Tt(st)(on)(nt.tgt)(-nt.weight)(it))(H.inWeight)((() => {
                    const it = Gt(Z)(H.depsBySrc);
                    if (it.tag === "Nothing")
                      return [];
                    if (it.tag === "Just")
                      return it._1;
                    f();
                  })()),
                  marks: K(st)(Z)(H.nextSink)(H.marks),
                  nextSink: H.nextSink - 1 | 0,
                  outWeight: J((it) => (nt) => Tt(st)(on)(nt.src)(-nt.weight)(it))(H.outWeight)((() => {
                    const it = Gt(Z)(H.depsByTgt);
                    if (it.tag === "Nothing")
                      return [];
                    if (it.tag === "Just")
                      return it._1;
                    f();
                  })()),
                  remaining: lt((it) => it !== Z, H.remaining)
                };
                continue;
              }
              f();
            }
            return V;
          };
          return ((D) => {
            let W = D, j = !0, V;
            for (; j; ) {
              const rt = S(O(W));
              if (rt.remaining.length === 0) {
                j = !1, V = z((Z) => {
                  const it = Gt(Z.id)(rt.marks), nt = (() => {
                    if (it.tag === "Nothing")
                      return Z.id;
                    if (it.tag === "Just")
                      return it._1;
                    f();
                  })();
                  return { ...Z, mark: nt < E ? (nt + E | 0) + 1 | 0 : nt };
                })(Q);
                continue;
              }
              W = (() => {
                const Z = (nt) => {
                  const at = Gt(nt)(rt.outWeight), _t = Gt(nt)(rt.inWeight);
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
                }, it = kt((nt) => (at) => st.compare(Z(at))(Z(nt)))(rt.remaining);
                if (0 < it.length) {
                  const nt = it[0];
                  return {
                    ...rt,
                    inWeight: J((at) => (_t) => Tt(st)(on)(_t.tgt)(-_t.weight)(at))(rt.inWeight)((() => {
                      const at = Gt(nt)(rt.depsBySrc);
                      if (at.tag === "Nothing")
                        return [];
                      if (at.tag === "Just")
                        return at._1;
                      f();
                    })()),
                    marks: K(st)(nt)(rt.nextSource)(rt.marks),
                    nextSource: rt.nextSource + 1 | 0,
                    outWeight: J((at) => (_t) => Tt(st)(on)(_t.src)(-_t.weight)(at))(rt.outWeight)((() => {
                      const at = Gt(nt)(rt.depsByTgt);
                      if (at.tag === "Nothing")
                        return [];
                      if (at.tag === "Just")
                        return at._1;
                      f();
                    })()),
                    remaining: lt((at) => at !== nt, rt.remaining)
                  };
                }
                return rt;
              })();
            }
            return V;
          })({
            remaining: z((D) => D.id)(Q),
            marks: A,
            inWeight: J((D) => (W) => Tt(st)(on)(W.tgt)(W.weight)(D))(A)(l),
            outWeight: J((D) => (W) => Tt(st)(on)(W.src)(W.weight)(D))(A)(l),
            depsBySrc: J((D) => (W) => Tt(st)(rn)(W.src)([W])(D))(A)(l),
            depsByTgt: J((D) => (W) => Tt(st)(rn)(W.tgt)([W])(D))(A)(l),
            nextSink: E - 1 | 0,
            nextSource: E + 1 | 0
          });
        })());
      })()), F = lt(
        (Q) => {
          const E = Gt(Q.src)(C), S = Gt(Q.tgt)(C);
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
      if (F.length === 0)
        return d;
      const U = J((Q) => (E) => {
        if (Hn(Ar)(E.src)(Q.decisions) || Hn(Ar)(E.tgt)(Q.decisions))
          return Q;
        const S = Gt(E.src)(Q.segMap), O = Gt(E.tgt)(Q.segMap);
        if (S.tag === "Just" && O.tag === "Just") {
          const G = (S._1.incoming.length + S._1.outgoing.length | 0) > 2 && (O._1.incoming.length + O._1.outgoing.length | 0) <= 2, D = G ? O._1 : S._1;
          return {
            decisions: [...Q.decisions, D.id],
            segMap: K(st)(D.id)({ ...D, splitBy: T("Just", G ? S._1.id : O._1.id) })(Q.segMap)
          };
        }
        return Q;
      })({ decisions: [], segMap: Jr(z((Q) => b(Q.id, Q))(d.segments)) })(F), tt = U.segMap, q = J((Q) => (E) => {
        const S = ht(J(ht)(1e18)(E.incoming))(J(ht)(1e18)(E.outgoing)), O = pt(J(pt)(-1e18)(E.incoming))(J(pt)(-1e18)(E.outgoing)), G = lt(
          (H) => H.a.startPosition <= O && H.a.endPosition >= S,
          Ft((H) => (rt) => ({ i: H, a: rt }))(Q.freeAreas)
        );
        if (G.length === 0) {
          const H = {
            ...E,
            incoming: kt(ft.compare)(E.incoming),
            outgoing: kt(ft.compare)([(S + O) / 2]),
            splitPartner: T("Just", Q.nextId)
          }, rt = {
            id: Q.nextId,
            incoming: kt(ft.compare)([(S + O) / 2]),
            mark: 0,
            members: E.members,
            outgoing: kt(ft.compare)(E.outgoing),
            slot: 0,
            splitBy: x,
            splitPartner: T("Just", E.id)
          };
          return {
            segMap: K(st)(rt.id)(rt)(K(st)(H.id)(H)(Q.segMap)),
            freeAreas: Q.freeAreas,
            nextId: Q.nextId + 1 | 0
          };
        }
        const D = 0 < G.length ? T("Just", G[0]) : x, W = (() => {
          if (D.tag === "Nothing")
            return { i: 0, a: { startPosition: 0, endPosition: 0, size: 0 } };
          if (D.tag === "Just") {
            if (G.length === 1)
              return D._1;
            const H = z((rt) => ({
              c: rt,
              rating: (() => {
                const Z = (rt.a.startPosition + rt.a.endPosition) / 2, it = [Z], nt = [Z], at = J((() => {
                  const Dt = Q.segMap;
                  return (vt) => (Wt) => {
                    const $t = Gt(Wt.tgt)(Dt);
                    if ($t.tag === "Nothing")
                      return vt;
                    if ($t.tag === "Just") {
                      const xt = ht(J(ht)(1e18)($t._1.incoming))(J(ht)(1e18)($t._1.outgoing)), mt = pt(J(pt)(-1e18)($t._1.incoming))(J(pt)(-1e18)($t._1.outgoing)), ot = ht(J(ht)(1e18)(E.incoming))(J(ht)(1e18)(it)), M = (() => {
                        const St = pt(J(pt)(-1e18)(E.incoming))(J(pt)(-1e18)(it)), Pt = J((Ut) => (cn) => cn > mt ? Ut : cn >= xt ? Ut + 1 | 0 : Ut)(0)(it) + J((Ut) => (cn) => cn > St ? Ut : cn >= ot ? Ut + 1 | 0 : Ut)(0)($t._1.incoming) | 0, Vn = ht(J(ht)(1e18)(E.incoming))(J(ht)(1e18)(it)), _e = pt(J(pt)(-1e18)(E.incoming))(J(pt)(-1e18)(it)), Nr = ht(J(ht)(1e18)($t._1.incoming))(J(ht)(1e18)($t._1.outgoing)), be = pt(J(pt)(-1e18)($t._1.incoming))(J(pt)(-1e18)($t._1.outgoing)), jr = J((Ut) => (cn) => cn > _e ? Ut : cn >= Vn ? Ut + 1 | 0 : Ut)(0)($t._1.outgoing) + J((Ut) => (cn) => cn > be ? Ut : cn >= Nr ? Ut + 1 | 0 : Ut)(0)(E.incoming) | 0;
                        return Pt === jr ? Pt > 0 ? { ...vt, deps: vt.deps + 2 | 0, crossings: vt.crossings + Pt | 0 } : vt : { ...vt, deps: vt.deps + 1 | 0, crossings: vt.crossings + wr(Pt)(jr) | 0 };
                      })(), ut = ht(J(ht)(1e18)($t._1.incoming))(J(ht)(1e18)($t._1.outgoing)), gt = pt(J(pt)(-1e18)($t._1.incoming))(J(pt)(-1e18)($t._1.outgoing)), dt = ht(J(ht)(1e18)(nt))(J(ht)(1e18)(E.outgoing)), Nt = pt(J(pt)(-1e18)(nt))(J(pt)(-1e18)(E.outgoing)), At = J((St) => (Pt) => Pt > gt ? St : Pt >= ut ? St + 1 | 0 : St)(0)(E.outgoing) + J((St) => (Pt) => Pt > Nt ? St : Pt >= dt ? St + 1 | 0 : St)(0)($t._1.incoming) | 0, Vt = ht(J(ht)(1e18)(nt))(J(ht)(1e18)(E.outgoing)), Pn = pt(J(pt)(-1e18)(nt))(J(pt)(-1e18)(E.outgoing)), ne = ht(J(ht)(1e18)($t._1.incoming))(J(ht)(1e18)($t._1.outgoing)), kn = pt(J(pt)(-1e18)($t._1.incoming))(J(pt)(-1e18)($t._1.outgoing)), Qn = J((St) => (Pt) => Pt > Pn ? St : Pt >= Vt ? St + 1 | 0 : St)(0)($t._1.outgoing) + J((St) => (Pt) => Pt > kn ? St : Pt >= ne ? St + 1 | 0 : St)(0)(nt) | 0;
                      return At === Qn ? At > 0 ? { ...M, deps: M.deps + 2 | 0, crossings: M.crossings + At | 0 } : M : { ...M, deps: M.deps + 1 | 0, crossings: M.crossings + wr(At)(Qn) | 0 };
                    }
                    f();
                  };
                })())(J((() => {
                  const Dt = Q.segMap;
                  return (vt) => (Wt) => {
                    const $t = Gt(Wt.src)(Dt);
                    if ($t.tag === "Nothing")
                      return vt;
                    if ($t.tag === "Just") {
                      const xt = ht(J(ht)(1e18)($t._1.incoming))(J(ht)(1e18)($t._1.outgoing)), mt = pt(J(pt)(-1e18)($t._1.incoming))(J(pt)(-1e18)($t._1.outgoing)), ot = ht(J(ht)(1e18)(E.incoming))(J(ht)(1e18)(it)), M = (() => {
                        const St = pt(J(pt)(-1e18)(E.incoming))(J(pt)(-1e18)(it)), Pt = J((Ut) => (cn) => cn > mt ? Ut : cn >= xt ? Ut + 1 | 0 : Ut)(0)(it) + J((Ut) => (cn) => cn > St ? Ut : cn >= ot ? Ut + 1 | 0 : Ut)(0)($t._1.incoming) | 0, Vn = ht(J(ht)(1e18)(E.incoming))(J(ht)(1e18)(it)), _e = pt(J(pt)(-1e18)(E.incoming))(J(pt)(-1e18)(it)), Nr = ht(J(ht)(1e18)($t._1.incoming))(J(ht)(1e18)($t._1.outgoing)), be = pt(J(pt)(-1e18)($t._1.incoming))(J(pt)(-1e18)($t._1.outgoing)), jr = J((Ut) => (cn) => cn > _e ? Ut : cn >= Vn ? Ut + 1 | 0 : Ut)(0)($t._1.outgoing) + J((Ut) => (cn) => cn > be ? Ut : cn >= Nr ? Ut + 1 | 0 : Ut)(0)(E.incoming) | 0;
                        return Pt === jr ? Pt > 0 ? { ...vt, deps: vt.deps + 2 | 0, crossings: vt.crossings + Pt | 0 } : vt : { ...vt, deps: vt.deps + 1 | 0, crossings: vt.crossings + wr(Pt)(jr) | 0 };
                      })(), ut = ht(J(ht)(1e18)($t._1.incoming))(J(ht)(1e18)($t._1.outgoing)), gt = pt(J(pt)(-1e18)($t._1.incoming))(J(pt)(-1e18)($t._1.outgoing)), dt = ht(J(ht)(1e18)(nt))(J(ht)(1e18)(E.outgoing)), Nt = pt(J(pt)(-1e18)(nt))(J(pt)(-1e18)(E.outgoing)), At = J((St) => (Pt) => Pt > gt ? St : Pt >= ut ? St + 1 | 0 : St)(0)(E.outgoing) + J((St) => (Pt) => Pt > Nt ? St : Pt >= dt ? St + 1 | 0 : St)(0)($t._1.incoming) | 0, Vt = ht(J(ht)(1e18)(nt))(J(ht)(1e18)(E.outgoing)), Pn = pt(J(pt)(-1e18)(nt))(J(pt)(-1e18)(E.outgoing)), ne = ht(J(ht)(1e18)($t._1.incoming))(J(ht)(1e18)($t._1.outgoing)), kn = pt(J(pt)(-1e18)($t._1.incoming))(J(pt)(-1e18)($t._1.outgoing)), Qn = J((St) => (Pt) => Pt > Pn ? St : Pt >= Vt ? St + 1 | 0 : St)(0)($t._1.outgoing) + J((St) => (Pt) => Pt > kn ? St : Pt >= ne ? St + 1 | 0 : St)(0)(nt) | 0;
                      return At === Qn ? At > 0 ? { ...M, deps: M.deps + 2 | 0, crossings: M.crossings + At | 0 } : M : { ...M, deps: M.deps + 1 | 0, crossings: M.crossings + wr(At)(Qn) | 0 };
                    }
                    f();
                  };
                })())({ crossings: 0, deps: 0 })(lt((Dt) => Dt.tgt === E.id, d.deps)))(lt((Dt) => Dt.src === E.id, d.deps)), _t = (() => {
                  if (E.splitBy.tag === "Just")
                    return Gt(E.splitBy._1)(Q.segMap);
                  if (E.splitBy.tag === "Nothing")
                    return x;
                  f();
                })();
                if (_t.tag === "Just")
                  return {
                    ...at,
                    deps: at.deps + 2 | 0,
                    crossings: (() => {
                      const Dt = ht(J(ht)(1e18)(_t._1.incoming))(J(ht)(1e18)(_t._1.outgoing)), vt = ht(J(ht)(1e18)(nt))(J(ht)(1e18)(E.outgoing)), Wt = pt(J(pt)(-1e18)(_t._1.incoming))(J(pt)(-1e18)(_t._1.outgoing)), $t = pt(J(pt)(-1e18)(nt))(J(pt)(-1e18)(E.outgoing)), xt = ht(J(ht)(1e18)(E.incoming))(J(ht)(1e18)(it));
                      return at.crossings + (() => {
                        const mt = ht(J(ht)(1e18)(_t._1.incoming))(J(ht)(1e18)(_t._1.outgoing)), ot = pt(J(pt)(-1e18)(E.incoming))(J(pt)(-1e18)(it)), M = pt(J(pt)(-1e18)(_t._1.incoming))(J(pt)(-1e18)(_t._1.outgoing));
                        return ((J((ut) => (gt) => gt > Wt ? ut : gt >= Dt ? ut + 1 | 0 : ut)(0)(it) + J((ut) => (gt) => gt > ot ? ut : gt >= xt ? ut + 1 | 0 : ut)(0)(_t._1.incoming) | 0) + J((ut) => (gt) => gt > $t ? ut : gt >= vt ? ut + 1 | 0 : ut)(0)(_t._1.outgoing) | 0) + J((ut) => (gt) => gt > M ? ut : gt >= mt ? ut + 1 | 0 : ut)(0)(nt) | 0;
                      })() | 0;
                    })()
                  };
                if (_t.tag === "Nothing")
                  return at;
                f();
              })()
            }))(G);
            return J((rt) => (Z) => Z.rating.crossings < rt.rating.crossings || !(Z.rating.crossings > rt.rating.crossings) && (Z.rating.deps < rt.rating.deps || !(Z.rating.deps > rt.rating.deps) && Z.c.a.size > rt.c.a.size) ? Z : rt)(0 < H.length ? H[0] : { c: D._1, rating: { crossings: 1e6, deps: 1e6 } })(H).c;
          }
          f();
        })(), j = {
          ...E,
          incoming: kt(ft.compare)(E.incoming),
          outgoing: kt(ft.compare)([(W.a.startPosition + W.a.endPosition) / 2]),
          splitPartner: T("Just", Q.nextId)
        }, V = {
          id: Q.nextId,
          incoming: kt(ft.compare)([(W.a.startPosition + W.a.endPosition) / 2]),
          mark: 0,
          members: E.members,
          outgoing: kt(ft.compare)(E.outgoing),
          slot: 0,
          splitBy: x,
          splitPartner: T("Just", E.id)
        };
        return {
          segMap: K(st)(V.id)(V)(K(st)(j.id)(j)(Q.segMap)),
          freeAreas: (() => {
            if (W.i >= 0 && W.i < Q.freeAreas.length) {
              const H = bf(Ot, x, W.i, Q.freeAreas), rt = (() => {
                if (H.tag === "Nothing")
                  return Q.freeAreas;
                if (H.tag === "Just")
                  return H._1;
                f();
              })();
              if (Q.freeAreas[W.i].size / 2 < _)
                return rt;
              const Z = (Q.freeAreas[W.i].startPosition + Q.freeAreas[W.i].endPosition) / 2, it = Z - _, nt = Z + _;
              return [
                ...W.i < 1 ? [] : bt(0, W.i, rt),
                ...Q.freeAreas[W.i].startPosition <= it ? [{ startPosition: Q.freeAreas[W.i].startPosition, endPosition: it, size: it - Q.freeAreas[W.i].startPosition }] : [],
                ...nt <= Q.freeAreas[W.i].endPosition ? [{ startPosition: nt, endPosition: Q.freeAreas[W.i].endPosition, size: Q.freeAreas[W.i].endPosition - nt }] : [],
                ...W.i < 1 ? rt : bt(W.i, rt.length, rt)
              ];
            }
            return Q.freeAreas;
          })(),
          nextId: Q.nextId + 1 | 0
        };
      })({
        segMap: tt,
        freeAreas: (() => {
          const Q = kt(ft.compare)([
            ...Jt(d.segments)((E) => E.incoming),
            ...Jt(d.segments)((E) => E.outgoing)
          ]);
          return yt($m)(wn(
            (E) => (S) => S - E >= 2 * _ ? T("Just", { startPosition: E + _, endPosition: S - _, size: S - E - 2 * _ }) : x,
            Q,
            bt(1, Q.length, Q)
          ));
        })(),
        nextId: d.segments.length
      })(kt((Q) => (E) => ft.compare(pt(J(pt)(-1e18)(Q.incoming))(J(pt)(-1e18)(Q.outgoing)) - ht(J(ht)(1e18)(Q.incoming))(J(ht)(1e18)(Q.outgoing)))(pt(J(pt)(-1e18)(E.incoming))(J(pt)(-1e18)(E.outgoing)) - ht(J(ht)(1e18)(E.incoming))(J(ht)(1e18)(E.outgoing))))(yt((Q) => Gt(Q)(tt))(U.decisions)));
      return {
        segments: (() => {
          const Q = (E, S) => {
            if (E.tag === "Leaf")
              return S;
            if (E.tag === "Node")
              return Q(E._5, qt("Cons", E._4, Q(E._6, S)));
            f();
          };
          return Lt(Xt.foldr, Q(q.segMap, Yt));
        })(),
        deps: (() => {
          const Q = q.segMap, E = (G, D) => {
            if (G.tag === "Leaf")
              return D;
            if (G.tag === "Node")
              return E(G._5, qt("Cons", G._4, E(G._6, D)));
            f();
          }, S = Lt(Xt.foldr, E(Q, Yt)), O = S.length;
          return [
            ...Jt(Jt(It(0, O - 2 | 0))((G) => Jt(It(G + 1 | 0, O - 1 | 0))((D) => [
              b(G, D)
            ])))((G) => G._1 >= 0 && G._1 < S.length ? G._2 >= 0 && G._2 < S.length ? S[G._1].splitPartner.tag !== "Nothing" && S[G._1].splitPartner.tag === "Just" && S[G._1].splitPartner._1 === S[G._2].id || S[G._2].splitPartner.tag !== "Nothing" && S[G._2].splitPartner.tag === "Just" && S[G._2].splitPartner._1 === S[G._1].id ? [] : i(_, S[G._1], S[G._2]) : [] : []),
            ...Jt(S)((G) => G.splitBy.tag === "Just" && G.splitPartner.tag === "Just" && (() => {
              const D = Gt(G.splitPartner._1)(Q);
              if (D.tag === "Nothing")
                return !1;
              if (D.tag === "Just")
                return !0;
              f();
            })() && (() => {
              const D = Gt(G.splitBy._1)(Q);
              if (D.tag === "Nothing")
                return !1;
              if (D.tag === "Just")
                return !0;
              f();
            })() ? [{ src: G.id, tgt: G.splitBy._1, weight: 1, kind: ei }, { src: G.splitBy._1, tgt: G.splitPartner._1, weight: 1, kind: ei }] : [])
          ];
        })()
      };
    })(), $ = h.segments, p = $.length, m = (C) => {
      let F = C, U = !0, tt;
      for (; U; ) {
        const q = F, Q = Kt((E) => {
          const S = Gt(E)(q.inWeight);
          if (S.tag === "Nothing")
            return !0;
          if (S.tag === "Just")
            return S._1 === 0;
          f();
        })(q.remaining);
        if (Q.tag === "Nothing") {
          U = !1, tt = q;
          continue;
        }
        if (Q.tag === "Just") {
          const E = Q._1;
          F = {
            ...q,
            inWeight: J((S) => (O) => Tt(st)(on)(O.tgt)(-O.weight)(S))(q.inWeight)((() => {
              const S = Gt(E)(q.depsBySrc);
              if (S.tag === "Nothing")
                return [];
              if (S.tag === "Just")
                return S._1;
              f();
            })()),
            marks: K(st)(E)(q.nextSource)(q.marks),
            nextSource: q.nextSource + 1 | 0,
            outWeight: J((S) => (O) => Tt(st)(on)(O.src)(-O.weight)(S))(q.outWeight)((() => {
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
      return tt;
    }, y = (C) => {
      let F = C, U = !0, tt;
      for (; U; ) {
        const q = F, Q = Kt((E) => {
          const S = Gt(E)(q.outWeight);
          if (S.tag === "Nothing")
            return !0;
          if (S.tag === "Just")
            return S._1 === 0;
          f();
        })(q.remaining);
        if (Q.tag === "Nothing") {
          U = !1, tt = q;
          continue;
        }
        if (Q.tag === "Just") {
          const E = Q._1;
          F = {
            ...q,
            inWeight: J((S) => (O) => Tt(st)(on)(O.tgt)(-O.weight)(S))(q.inWeight)((() => {
              const S = Gt(E)(q.depsBySrc);
              if (S.tag === "Nothing")
                return [];
              if (S.tag === "Just")
                return S._1;
              f();
            })()),
            marks: K(st)(E)(q.nextSink)(q.marks),
            nextSink: q.nextSink - 1 | 0,
            outWeight: J((S) => (O) => Tt(st)(on)(O.src)(-O.weight)(S))(q.outWeight)((() => {
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
      return tt;
    }, v = ((C) => {
      let F = C, U = !0, tt;
      for (; U; ) {
        const Q = m(y(F));
        if (Q.remaining.length === 0) {
          U = !1, tt = z((E) => {
            const S = Gt(E.id)(Q.marks), O = (() => {
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
        F = (() => {
          const E = (O) => {
            const G = Gt(O)(Q.outWeight), D = Gt(O)(Q.inWeight);
            return (() => {
              if (G.tag === "Nothing")
                return 0;
              if (G.tag === "Just")
                return G._1;
              f();
            })() - (() => {
              if (D.tag === "Nothing")
                return 0;
              if (D.tag === "Just")
                return D._1;
              f();
            })() | 0;
          }, S = kt((O) => (G) => st.compare(E(G))(E(O)))(Q.remaining);
          if (0 < S.length) {
            const O = S[0];
            return {
              ...Q,
              inWeight: J((G) => (D) => Tt(st)(on)(D.tgt)(-D.weight)(G))(Q.inWeight)((() => {
                const G = Gt(O)(Q.depsBySrc);
                if (G.tag === "Nothing")
                  return [];
                if (G.tag === "Just")
                  return G._1;
                f();
              })()),
              marks: K(st)(O)(Q.nextSource)(Q.marks),
              nextSource: Q.nextSource + 1 | 0,
              outWeight: J((G) => (D) => Tt(st)(on)(D.src)(-D.weight)(G))(Q.outWeight)((() => {
                const G = Gt(O)(Q.depsByTgt);
                if (G.tag === "Nothing")
                  return [];
                if (G.tag === "Just")
                  return G._1;
                f();
              })()),
              remaining: lt((G) => G !== O, Q.remaining)
            };
          }
          return Q;
        })();
      }
      return tt;
    })({
      remaining: z((C) => C.id)($),
      marks: A,
      inWeight: J((C) => (F) => Tt(st)(on)(F.tgt)(F.weight)(C))(A)(h.deps),
      outWeight: J((C) => (F) => Tt(st)(on)(F.src)(F.weight)(C))(A)(h.deps),
      depsBySrc: J((C) => (F) => Tt(st)(rn)(F.src)([F])(C))(A)(h.deps),
      depsByTgt: J((C) => (F) => Tt(st)(rn)(F.tgt)([F])(C))(A)(h.deps),
      nextSink: p - 1 | 0,
      nextSource: p + 1 | 0
    }), w = (() => {
      const C = (() => {
        const q = Jr(z((Q) => b(Q.id, Q.mark))(v));
        return {
          segments: v,
          deps: yt((Q) => (() => {
            if (Q.kind === "Critical")
              return !0;
            if (Q.kind === "Regular")
              return !1;
            f();
          })() ? T("Just", Q) : (() => {
            const E = Gt(Q.src)(q), S = Gt(Q.tgt)(q);
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
          })() ? Q.weight === 0 ? x : T("Just", { src: Q.tgt, tgt: Q.src, weight: Q.weight, kind: Q.kind }) : T("Just", Q))(h.deps)
        };
      })(), F = J((q) => (Q) => Tt(st)(on)(Q.tgt)(1)(q))(A)(C.deps), tt = ((q) => {
        let Q = q, E = !0, S;
        for (; E; ) {
          const O = Q, G = Bt((D) => x, (D) => (W) => T("Just", { head: D, tail: W }), O.queue);
          if (G.tag === "Nothing") {
            E = !1, S = O;
            continue;
          }
          if (G.tag === "Just") {
            Q = J((() => {
              const D = Gt(G._1.head)(O.slots), W = (() => {
                if (D.tag === "Nothing")
                  return 0;
                if (D.tag === "Just")
                  return D._1;
                f();
              })();
              return (j) => (V) => {
                const H = Gt(V)(j.inDegree), rt = (() => {
                  if (H.tag === "Nothing")
                    return -1;
                  if (H.tag === "Just")
                    return H._1 - 1 | 0;
                  f();
                })();
                return {
                  ...j,
                  slots: K(st)(V)(ca((() => {
                    const Z = Gt(V)(j.slots);
                    if (Z.tag === "Nothing")
                      return 0;
                    if (Z.tag === "Just")
                      return Z._1;
                    f();
                  })())(W + 1 | 0))(j.slots),
                  inDegree: K(st)(V)(rt)(j.inDegree),
                  queue: rt === 0 ? [...j.queue, V] : j.queue
                };
              };
            })())({ ...O, queue: G._1.tail })((() => {
              const D = Gt(G._1.head)(O.adj);
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
        return S;
      })({
        slots: Jr(z((q) => b(q.id, 0))(C.segments)),
        inDegree: F,
        adj: J((q) => (Q) => Tt(st)(rn)(Q.src)([Q.tgt])(q))(A)(C.deps),
        queue: z((q) => q.id)(lt(
          (q) => {
            const Q = Gt(q.id)(F);
            if (Q.tag === "Nothing")
              return !0;
            if (Q.tag === "Just")
              return Q._1 === 0;
            f();
          },
          C.segments
        ))
      });
      return kt((q) => (Q) => st.compare(q.slot)(Q.slot))(z((q) => ({
        ...q,
        slot: (() => {
          const Q = Gt(q.id)(tt.slots);
          if (Q.tag === "Nothing")
            return 0;
          if (Q.tag === "Just")
            return Q._1;
          f();
        })()
      }))(C.segments));
    })(), k = 1 + J((C) => (F) => ca(C)(F.slot))(0)(w) | 0, L = Jt(w)((C) => C.members), I = lt((C) => Hn(ge)(C.edge.id)(L), t), B = J(pt)(-1e18)(z((C) => C.fromPos._2)(I)), Y = J(ht)(1e18)(z((C) => C.toPos._2)(I));
    if (B > Y) {
      const C = Jr(z((F) => b(F.id, F))(w));
      return zn(z((F) => z((U) => b(
        U,
        {
          slot: F.slot,
          slotCount: k,
          gapTop: Y,
          gapBottom: B,
          partner: (() => {
            if (F.splitPartner.tag === "Just") {
              const tt = Gt(F.splitPartner._1)(C);
              if (tt.tag === "Just")
                return T("Just", { slot: tt._1.slot, splitX: 0 < tt._1.incoming.length ? tt._1.incoming[0] : 0 });
              if (tt.tag === "Nothing")
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
            const U = Gt(F.splitPartner._1)(C);
            return !(U.tag === "Just" && (() => {
              if (U._1.splitBy.tag === "Nothing")
                return !1;
              if (U._1.splitBy.tag === "Just")
                return !0;
              f();
            })());
          }
          if (F.splitPartner.tag === "Nothing")
            return !0;
          f();
        },
        w
      )));
    }
    const X = Jr(z((C) => b(C.id, C))(w));
    return zn(z((C) => z((F) => b(
      F,
      {
        slot: C.slot,
        slotCount: k,
        gapTop: B,
        gapBottom: Y,
        partner: (() => {
          if (C.splitPartner.tag === "Just") {
            const U = Gt(C.splitPartner._1)(X);
            if (U.tag === "Just")
              return T("Just", { slot: U._1.slot, splitX: 0 < U._1.incoming.length ? U._1.incoming[0] : 0 });
            if (U.tag === "Nothing")
              return x;
            f();
          }
          if (C.splitPartner.tag === "Nothing")
            return x;
          f();
        })()
      }
    ))(C.members))(lt(
      (C) => {
        if (C.splitPartner.tag === "Just") {
          const F = Gt(C.splitPartner._1)(X);
          return !(F.tag === "Just" && (() => {
            if (F._1.splitBy.tag === "Nothing")
              return !1;
            if (F._1.splitBy.tag === "Just")
              return !0;
            f();
          })());
        }
        if (C.splitPartner.tag === "Nothing")
          return !0;
        f();
      },
      w
    )));
  })()))(A)(pm(J((s) => (u) => {
    const c = Lr(u.edge.from.node)(e);
    if (c.tag === "Just") {
      const a = Lr(u.edge.to.node)(e);
      return a.tag === "Just" && c._1.layer !== a._1.layer ? Tt(st)(rn)(wr(c._1.layer)(a._1.layer))([u])(s) : s;
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
    return kt((u) => (c) => hm(s(u))(s(c)))(t);
  })())));
}, ym = (t) => (n) => {
  const e = q0(t)(n), r = J((o) => (i) => K(P)(i.node)(i)(o))(A)(n);
  return J((o) => (i) => {
    const s = Lr(i.edge.from.node)(r);
    if (s.tag === "Just") {
      const u = Lr(i.edge.to.node)(r);
      if (u.tag === "Just" && s._1.layer !== u._1.layer) {
        const c = mm(i.edge.id)(e);
        if (c.tag === "Just")
          return K(st)(wr(s._1.layer)(u._1.layer))(c._1.slotCount)(o);
      }
      return o;
    }
    return o;
  })(A)(t);
}, Y0 = Qt.foldMap(/* @__PURE__ */ (() => {
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
}, eo = (t) => (n) => (e) => (r) => Y0((o) => e >= o.x && e < o.x + o.w && n > o.y && t < o.y + o.h)(r), ki = (t) => (n) => (e) => (r) => eo(gn(n)(e))(ln(n)(e))(r)(t), ri = /* @__PURE__ */ et(4), Nm = /* @__PURE__ */ Cf((t) => {
  if (t.direction === "H") {
    const n = gn(t.start._1)(t.end._1);
    return [{ x: n, y: t.start._2 - 1, w: ln(t.start._1)(t.end._1) - n, h: 2 }];
  }
  if (t.direction === "V") {
    const n = gn(t.start._2)(t.end._2);
    return [{ x: t.start._1 - 1, y: n, w: 2, h: ln(t.start._2)(t.end._2) - n }];
  }
  f();
}), ko = /* @__PURE__ */ Sf((t) => {
  const n = t.start._1 - t.end._1;
  return !((n < 0 ? -n < 1e-6 : n < 1e-6) && (() => {
    const e = t.start._2 - t.end._2;
    return e < 0 ? -e < 1e-6 : e < 1e-6;
  })());
}), xm = (t) => (n) => (e) => {
  const r = Bt((o) => x, (o) => (i) => T("Just", { head: o, tail: i }), n);
  if (r.tag === "Nothing")
    return [{ start: t.start, end: e.end, direction: t.direction }];
  if (r.tag === "Just") {
    const o = (r._1.head.direction === "H" ? t.direction === "H" : r._1.head.direction === "V" && t.direction === "V") ? [{ start: t.start, end: r._1.head.end, direction: t.direction }] : [t, r._1.head], i = qi(r._1.tail);
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
    const i = Bt((s) => x, (s) => (u) => T("Just", { head: s, tail: u }), o);
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
  }, e = Bt((r) => x, (r) => (o) => T("Just", { head: r, tail: o }), t);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return n(e._1.head)(e._1.tail);
  f();
}, ro = (t) => (n) => (e) => (r) => Y0((o) => e >= o.y && e < o.y + o.h && n > o.x && t < o.x + o.w)(r), ho = (t) => (n) => (e) => (r) => ro(gn(n)(e))(ln(n)(e))(r)(t), Jm = (t) => (n) => (e) => (r) => {
  const o = e + 2 | 0, i = o < 1 ? n : bt(o, n.length, n), s = e < 1 ? [] : bt(0, e, n), u = (e + 1 | 0) === (r - 1 | 0), c = e === 0, a = e >= 0 && e < n.length ? T("Just", n[e]) : x;
  if (a.tag === "Just") {
    const g = e + 1 | 0, _ = g >= 0 && g < n.length ? T("Just", n[g]) : x;
    if (_.tag === "Just") {
      const d = a._1.start._1 === _._1.end._1 && (!c || a._1.direction === "V") && (!u || _._1.direction === "V") && !ki(t)(gn(a._1.start._2)(_._1.end._2))(ln(a._1.start._2)(_._1.end._2))(a._1.start._1) ? T("Just", [...s, { start: a._1.start, end: _._1.end, direction: tn }, ...i]) : x, l = a._1.start._2 === _._1.end._2 && (!c || a._1.direction === "H") && (!u || _._1.direction === "H") && !ho(t)(gn(a._1.start._1)(_._1.end._1))(ln(a._1.start._1)(_._1.end._1))(a._1.start._2) ? T("Just", [...s, { start: a._1.start, end: _._1.end, direction: Zt }, ...i]) : x;
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
}, Tm = (t) => (n) => (e) => (r) => {
  const o = (d, l, h) => !ki(t)(gn(l)(h))(ln(l)(h))(d), i = e + 3 | 0, s = i < 1 ? n : bt(i, n.length, n), u = e < 1 ? [] : bt(0, e, n), c = (e + 2 | 0) === (r - 1 | 0), a = e === 0, g = (d, l, h) => !ho(t)(gn(l)(h))(ln(l)(h))(d), _ = e >= 0 && e < n.length ? T("Just", n[e]) : x;
  if (_.tag === "Just") {
    const d = e + 2 | 0, l = d >= 0 && d < n.length ? T("Just", n[d]) : x;
    if (l.tag === "Just") {
      const h = _._1.start._1 === l._1.end._1 && (!a || _._1.direction === "V") && (!c || l._1.direction === "V") && o(_._1.start._1, _._1.start._2, l._1.end._2) ? T("Just", [...u, { start: _._1.start, end: l._1.end, direction: tn }, ...s]) : _._1.start._2 === l._1.end._2 && (!a || _._1.direction === "H") && (!c || l._1.direction === "H") && g(_._1.start._2, _._1.start._1, l._1.end._1) ? T("Just", [...u, { start: _._1.start, end: l._1.end, direction: Zt }, ...s]) : x, $ = (!a || _._1.direction === "V") && (!c || l._1.direction === "H") && o(_._1.start._1, _._1.start._2, l._1.end._2) && g(
        l._1.end._2,
        _._1.start._1,
        l._1.end._1
      ) ? T(
        "Just",
        [
          ...u,
          { start: _._1.start, end: b(_._1.start._1, l._1.end._2), direction: tn },
          { start: b(_._1.start._1, l._1.end._2), end: l._1.end, direction: Zt },
          ...s
        ]
      ) : x, p = (!a || _._1.direction === "H") && (!c || l._1.direction === "V") && g(_._1.start._2, _._1.start._1, l._1.end._1) && o(
        l._1.end._1,
        _._1.start._2,
        l._1.end._2
      ) ? T(
        "Just",
        [
          ...u,
          { start: _._1.start, end: b(l._1.end._1, _._1.start._2), direction: Zt },
          { start: b(l._1.end._1, _._1.start._2), end: l._1.end, direction: tn },
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
}, km = (t) => {
  const n = (e) => {
    let r = e, o = !0, i;
    for (; o; ) {
      const s = r, u = bo(ko(vm(t)(wm(t)(s))));
      if (u.length < s.length) {
        r = u;
        continue;
      }
      o = !1, i = u;
    }
    return i;
  };
  return (e) => n(bo(ko(e)));
}, bm = (t) => (n) => (e) => (r) => {
  const o = gn(e)(r), i = ln(e)(r), s = lt((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = kt((a) => (g) => ft.compare(a.x)(g.x))(s);
    return 0 < c.length ? c[0].x - 1 : (e + r) / 2;
  }
  const u = kt((c) => (a) => ft.compare(a.x)(c.x))(z((c) => ({ ...c, x: c.x + c.w }))(s));
  return 0 < u.length ? u[0].x + 1 : (e + r) / 2;
}, Lm = (t) => (n) => (e) => (r) => {
  const o = gn(e)(r), i = ln(e)(r), s = lt((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = kt((a) => (g) => ft.compare(a.y)(g.y))(s);
    return 0 < c.length ? c[0].y - 1 : (e + r) / 2;
  }
  const u = kt((c) => (a) => ft.compare(a.y)(c.y))(z((c) => ({ ...c, y: c.y + c.h }))(s));
  return 0 < u.length ? u[0].y + 1 : (e + r) / 2;
}, Em = (t) => (n) => (e) => (r) => {
  const o = gn(e)(r), i = ln(e)(r), s = lt((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = kt((a) => (g) => ft.compare(g.x)(a.x))(z((a) => ({ ...a, x: a.x + a.w }))(s));
    return 0 < c.length ? c[0].x : (e + r) / 2;
  }
  const u = kt((c) => (a) => ft.compare(c.x)(a.x))(s);
  return 0 < u.length ? u[0].x - 1 : (e + r) / 2;
}, Sm = (t) => (n) => (e) => (r) => {
  const o = gn(e)(r), i = ln(e)(r), s = lt((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = kt((a) => (g) => ft.compare(g.y)(a.y))(z((a) => ({ ...a, y: a.y + a.h }))(s));
    return 0 < c.length ? c[0].y : (e + r) / 2;
  }
  const u = kt((c) => (a) => ft.compare(c.y)(a.y))(s);
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
}, fa = (t) => (n) => (e) => (r) => (o) => {
  const i = gn(n)(e), s = ln(n)(e);
  if (!eo(i)(s)(r)(t))
    return r;
  if (!eo(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return eo(i)(s)(u)(t) ? X0((c) => eo(i)(s)(c)(t))(u)(1) : u;
}, Cm = (t) => (n) => (e) => (r) => (o) => {
  const i = gn(n)(e), s = ln(n)(e);
  if (!ro(i)(s)(r)(t))
    return r;
  if (!ro(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return ro(i)(s)(u)(t) ? X0((c) => ro(i)(s)(c)(t))(u)(1) : u;
}, Pm = (t) => (n) => (e) => (r) => {
  const o = gn(n)(e), i = ln(n)(e), s = lt((a) => r >= a.x && r < a.x + a.w && a.y + a.h > o && a.y < i, t), u = J((a) => (g) => ln(a)(g.x + g.w + 4))(r + 4)(s), c = J((a) => (g) => gn(a)(g.x - 4))(r - 4)(s);
  return (() => {
    const a = u - r, g = c - r;
    return (a < 0 ? -a : a) <= (g < 0 ? -g : g);
  })() ? u : c;
}, Gm = (t) => (n) => (e) => (r) => {
  const o = gn(n)(e), i = ln(n)(e), s = lt((a) => r >= a.y && r < a.y + a.h && a.x + a.w > o && a.x < i, t), u = J((a) => (g) => ln(a)(g.y + g.h + 4))(r + 4)(s), c = J((a) => (g) => gn(a)(g.y - 4))(r - 4)(s);
  return (() => {
    const a = u - r, g = c - r;
    return (a < 0 ? -a : a) <= (g < 0 ? -g : g);
  })() ? u : c;
}, Im = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
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
  })(), a = (w, k, L) => !ki(n)(gn(k)(L))(ln(k)(L))(w), g = (w, k, L) => !ki(e)(gn(k)(L))(ln(k)(L))(w), _ = (w, k, L, I) => t.tag === "Just" && !ho(e)(gn(w)(k))(ln(w)(k))(t._1) ? t._1 : Cm(n)(w)(k)(L)(I), d = (w, k, L, I) => {
    if (w === L) {
      const Y = Pm(n)(k)(I)(w), X = Lm(n)(w)(k)(I), C = Sm(n)(w)(k)(I);
      return [
        { start: b(w, k), end: b(w, X), direction: tn },
        { start: b(w, X), end: b(Y, X), direction: Zt },
        { start: b(Y, X), end: b(Y, C), direction: tn },
        { start: b(Y, C), end: b(L, C), direction: Zt },
        { start: b(L, C), end: b(L, I), direction: tn }
      ];
    }
    const B = _(w, L, k, I);
    return [
      { start: b(w, k), end: b(w, B), direction: tn },
      { start: b(w, B), end: b(L, B), direction: Zt },
      { start: b(L, B), end: b(L, I), direction: tn }
    ];
  }, l = (w, k, L, I) => {
    if (k === I) {
      const Y = Gm(n)(w)(L)(k), X = bm(n)(k)(w)(L), C = Em(n)(k)(w)(L);
      return [
        { start: b(w, k), end: b(X, k), direction: Zt },
        { start: b(X, k), end: b(X, Y), direction: tn },
        { start: b(X, Y), end: b(C, Y), direction: Zt },
        { start: b(C, Y), end: b(C, I), direction: tn },
        { start: b(C, I), end: b(L, I), direction: Zt }
      ];
    }
    const B = fa(n)(k)(I)(w)(L);
    return [
      { start: b(w, k), end: b(B, k), direction: Zt },
      { start: b(B, k), end: b(B, I), direction: tn },
      { start: b(B, I), end: b(L, I), direction: Zt }
    ];
  }, h = (w, k, L) => !ho(n)(gn(k)(L))(ln(k)(L))(w), $ = (w, k, L) => !ho(e)(gn(k)(L))(ln(k)(L))(w), p = (w, k, L, I) => {
    if ($(k, w, L) && g(L, k, I))
      return [
        { start: b(w, k), end: b(L, k), direction: Zt },
        { start: b(L, k), end: b(L, I), direction: tn }
      ];
    const B = fa(n)(k)(I)(w)(L);
    return [
      { start: b(w, k), end: b(B, k), direction: Zt },
      { start: b(B, k), end: b(B, I), direction: tn },
      { start: b(B, I), end: b(L, I), direction: Zt }
    ];
  }, m = (w, k, L, I) => {
    if (g(w, k, I) && $(I, w, L))
      return [
        { start: b(w, k), end: b(w, I), direction: tn },
        { start: b(w, I), end: b(L, I), direction: Zt }
      ];
    const B = _(w, L, k, I);
    return [
      { start: b(w, k), end: b(w, B), direction: tn },
      { start: b(w, B), end: b(L, B), direction: Zt },
      { start: b(L, B), end: b(L, I), direction: tn }
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
  })(), v = {
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
  return u._1 === c._1 && u._2 === c._2 ? [{ start: b(o._1, o._2), end: b(s._1, s._2), direction: N }] : xm({ start: b(o._1, o._2), end: b(u._1, u._2), direction: N })(y)(v);
}, Am = /* @__PURE__ */ z((t) => ({ x: t.position._1 * ri - 2, y: t.position._2 * ri - 2, w: t.size._1 * ri + 4, h: t.size._2 * ri + 4 })), bi = /* @__PURE__ */ nn(P)(Qt), Le = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ss = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
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
      const u = P.compare(t._1)(s._3._1);
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
          o = !1, i = T("Just", s._4);
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
          o = !1, i = T("Just", s._4);
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
          o = !1, i = T("Just", s._4);
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
        o = !1, i = T("Just", s._4);
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
}, Cs = (t) => (n) => {
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
}, la = (t) => (n) => J((e) => (r) => Tt(t)(rn)(n(r))([r])(e))(A), _a = (t) => (n) => (e) => (r) => {
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
  return o === 0 ? A : bi(o === 1 ? z((i) => b(i, r))(n) : Ft((i) => (s) => b(s, t.lo + et(i + 1 | 0) * e / et(o + 1 | 0)))(n));
}, U0 = (t) => (n) => (e) => (r) => (o) => {
  const i = la(P)((l) => l.to.node)(t), s = la(P)((l) => l.from.node)(t), u = J((l) => (h) => K(P)(h.node)(h)(l))(A)(n), c = (l, h, $) => {
    const p = Le(l)(u);
    if (p.tag === "Nothing")
      return b(0, 0);
    if (p.tag === "Just") {
      const m = Le(l)(e);
      if (m.tag === "Nothing") {
        const y = et(4);
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
        const y = Kt((N) => N.id === h)(m._1);
        if (y.tag === "Nothing") {
          const N = et(4);
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
          const N = et(4);
          if (y._1.side === "North")
            return b(p._1.position._1 * N + et(y._1.offset) * N, p._1.position._2 * N);
          if (y._1.side === "South")
            return b(p._1.position._1 * N + et(y._1.offset) * N, (p._1.position._2 + p._1.size._2) * N);
          if (y._1.side === "East")
            return b((p._1.position._1 + p._1.size._1) * N, p._1.position._2 * N + et(y._1.offset) * N);
          if (y._1.side === "West")
            return b(p._1.position._1 * N, p._1.position._2 * N + et(y._1.offset) * N);
        }
      }
    }
    f();
  }, a = bi(Jt(r)((l) => {
    if (l.nodes.length <= 2)
      return [];
    const h = et(4);
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
      const p = h._1, m = $._1, y = kt((N) => (v) => st.compare(N.score)(v.score))(z((N) => {
        const v = N._1, w = N._2;
        return {
          from: v,
          to: w,
          score: (() => {
            const k = (Y, X, C, F, U) => {
              const tt = Cs(Y)(X), q = Cs(Y)(C);
              return tt.lo < q.hi && q.lo < tt.hi && (v === "South" ? w === "North" && U._2 > F._2 : v === "North" ? w === "South" && U._2 < F._2 : v === "East" ? w === "West" && U._1 > F._1 : v === "West" && w === "East" && U._1 < F._1) ? 0 : _a(v)(w)(F)(U);
            }, L = ga(v)(p), I = ga(w)(m), B = _a(v)(w)(L)(I);
            return (() => {
              if (B > 0) {
                if (v === "South")
                  return w === "North" ? k(hn, p, m, L, I) * 10 | 0 : B * 10 | 0;
                if (v === "North")
                  return w === "South" ? k(dn, p, m, L, I) * 10 | 0 : B * 10 | 0;
                if (v === "East")
                  return w === "West" ? k(pe, p, m, L, I) * 10 | 0 : B * 10 | 0;
                if (v === "West" && w === "East")
                  return k(or, p, m, L, I) * 10 | 0;
              }
              return B * 10 | 0;
            })() + (v === "South" ? w === "North" ? 0 : 15 : v === "North" ? w === "South" ? 0 : 15 : v === "East" ? w === "West" ? 5 : 15 : v === "West" && w === "East" ? 5 : 15) | 0;
          })()
        };
      })([
        b(hn, dn),
        b(pe, dn),
        b(or, dn),
        b(hn, pe),
        b(hn, or),
        b(dn, hn),
        b(dn, pe),
        b(dn, or),
        b(pe, hn),
        b(or, hn),
        b(pe, or),
        b(or, pe)
      ]));
      if (0 < y.length)
        return { from: y[0].from, to: y[0].to };
    }
    return { from: hn, to: dn };
  }, _ = bi(z((l) => b(l.id, g(l)))(t)), d = (l, h, $, p, m, y) => {
    const N = et(4), v = Le(h)(u);
    if (v.tag === "Nothing")
      return b(0, 0);
    if (v.tag === "Just") {
      const w = Fm(b($, l))(o);
      if (w.tag === "Just") {
        const k = v._1.position._1 * N + w._1, L = et(4);
        if (l === "South")
          return b(k, (v._1.position._2 + v._1.size._2) * L);
        if (l === "North")
          return b(k, v._1.position._2 * L);
        if (l === "East")
          return b((v._1.position._1 + v._1.size._1) * L, k);
        if (l === "West")
          return b(v._1.position._1 * L, k);
        f();
      }
      if (w.tag === "Nothing") {
        const k = Cs(l)(v._1), L = (k.lo + k.hi) / 2, I = Ss($)(V0(k)(z((X) => X.id)(kt((X) => (C) => ft.compare(m(l)(X))(m(l)(C)))(lt(
          (X) => {
            const C = Ss(X.id)(_);
            if (C.tag === "Just") {
              const F = y(C._1);
              return F === "North" ? l === "North" : F === "South" ? l === "South" : F === "East" ? l === "East" : F === "West" && l === "West";
            }
            if (C.tag === "Nothing")
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
        ))))), B = (() => {
          if (I.tag === "Nothing")
            return L;
          if (I.tag === "Just")
            return I._1;
          f();
        })(), Y = et(4);
        if (l === "South")
          return b(B, (v._1.position._2 + v._1.size._2) * Y);
        if (l === "North")
          return b(B, v._1.position._2 * Y);
        if (l === "East")
          return b((v._1.position._1 + v._1.size._1) * Y, B);
        if (l === "West")
          return b(v._1.position._1 * Y, B);
      }
    }
    f();
  };
  return z((l) => {
    const h = Ss(l.edge.id)(a);
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
            const y = et(4);
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
            const y = et(4);
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
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
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
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Rm = /* @__PURE__ */ (() => {
  const t = Xn.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), uu = (t) => (n) => t.gapTop + 1 * et(4) + et(n) * 2.5 * et(4), Bm = (t) => (n) => {
  const e = K0(n.edge.id)(t);
  if (e.tag === "Just") {
    if (e._1.partner.tag === "Just")
      return T("Just", { slot1Y: uu(e._1)(e._1.slot), splitX: e._1.partner._1.splitX, slot2Y: uu(e._1)(e._1.partner._1.slot) });
    if (e._1.partner.tag === "Nothing")
      return x;
    f();
  }
  if (e.tag === "Nothing")
    return x;
  f();
}, Qm = (t) => (n) => {
  const e = J((r) => (o) => K(P)(o.node)(o)(r))(A)(n);
  return zn(Ft((r) => (o) => {
    const i = Sr(o.node)(e);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just") {
      const s = i._1;
      return Ft((u) => (c) => {
        const a = o.edges.length, g = et(4), _ = s.position._1 * g, d = s.position._2 * g, l = s.size._2 * g, h = et((2 * a | 0) + 1 | 0), $ = d + l * et(a - u | 0) / h, p = d + l * et((a + 1 | 0) + u | 0) / h, m = _ - g * 2.5 * et(u + 1 | 0), y = [
          { start: b(_, $), end: b(m, $), direction: Zt },
          { start: b(m, $), end: b(m, p), direction: tn },
          { start: b(m, p), end: b(_, p), direction: Zt }
        ];
        return { edge: c.id, segments: y, bends: wn((N) => (v) => N.end, y, bt(1, 3, y)), bendType: [], jumps: [], reversed: !1 };
      })(o.edges);
    }
    f();
  })(z((r) => ({ node: r._1, edges: r._2 }))(Rm(J((r) => (o) => Tt(P)(rn)(o.from.node)([
    o
  ])(r))(A)(t)))));
}, Wm = (t) => (n) => {
  const e = J((i) => (s) => K(P)(s.node)(s)(i))(A)(n), r = (i) => {
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
  return kt((i) => (s) => {
    const u = st.compare(o(i.edge.from.node))(o(s.edge.from.node));
    if (u === "EQ") {
      const c = ft.compare(r(i.edge.from.node))(r(s.edge.from.node));
      return c === "EQ" ? ft.compare(r(i.edge.to.node))(r(s.edge.to.node)) : c;
    }
    return u;
  })(t);
}, An = (t) => {
  const n = et(4);
  return { x: t.position._1 * n - 2, y: t.position._2 * n - 2, w: t.size._1 * n + 4, h: t.size._2 * n + 4 };
}, Dm = (t) => t.from.node === t.to.node, Hm = (t) => (n) => (e) => (r) => {
  const o = km(e)(Im(t)(n)(e)(r.fromSide)(r.fromPos)(r.toSide)(r.toPos));
  return {
    edge: r.edge.id,
    segments: o,
    bends: wn((i) => (s) => i.end, o, bt(1, o.length, o)),
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
    bends: wn((i) => (s) => i.end, o, bt(1, 5, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, zm = (t) => (n) => (e) => {
  const r = Sr(t.edge.from.node)(e);
  if (r.tag === "Just") {
    const i = Sr(t.edge.to.node)(e);
    return i.tag === "Just" ? lt(
      (s) => !(s.h === An(r._1).h && s.w === An(r._1).w && s.x === An(r._1).x && s.y === An(r._1).y) && !(s.h === An(i._1).h && s.w === An(i._1).w && s.x === An(i._1).x && s.y === An(i._1).y),
      n
    ) : lt((s) => !(s.h === An(r._1).h && s.w === An(r._1).w && s.x === An(r._1).x && s.y === An(r._1).y), n);
  }
  const o = Sr(t.edge.to.node)(e);
  return o.tag === "Just" ? lt((i) => !(i.h === An(o._1).h && i.w === An(o._1).w && i.x === An(o._1).x && i.y === An(o._1).y), n) : lt((i) => !0, n);
}, qm = (t) => (n) => {
  const e = K0(n.edge.id)(t);
  if (e.tag === "Just")
    return T("Just", uu(e._1)(e._1.slot));
  if (e.tag === "Nothing")
    return x;
  f();
}, Ym = (t) => (n) => (e) => (r) => (o) => {
  const i = J((a) => (g) => K(P)(g.node)(g)(a))(A)(n), s = Am(n), u = U0(lt((a) => a.from.node !== a.to.node, t))(n)(e)(r)(o), c = q0(u)(n);
  return [
    ...Qm(lt(Dm, t))(n),
    ...J((a) => (g) => {
      const _ = zm(g)(s)(i), d = [..._, ...a.edgeObstacles], l = Bm(c)(g), h = (() => {
        if (l.tag === "Just")
          return Om(l._1)(_)(d)(g);
        if (l.tag === "Nothing")
          return Hm(qm(c)(g))(_)(d)(g);
        f();
      })();
      return { results: [...a.results, h], edgeObstacles: [...a.edgeObstacles, ...Nm(h.segments)] };
    })({ results: [], edgeObstacles: [] })(Wm(u)(n)).results
  ];
}, Xe = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ve = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Xm = (t) => (n) => (e) => {
  if (t.start._1 !== n.start._1)
    return x;
  const r = Ve(Xe(t.start._2)(t.end._2))(Xe(n.start._2)(n.end._2)), o = Xe(Ve(t.start._2)(t.end._2))(Ve(n.start._2)(n.end._2));
  return r < o ? T("Just", { position: b(t.start._1, (r + o) / 2), crossingEdge: e }) : x;
}, Vm = (t) => (n) => (e) => {
  if (t.start._2 !== n.start._2)
    return x;
  const r = Ve(Xe(t.start._1)(t.end._1))(Xe(n.start._1)(n.end._1)), o = Xe(Ve(t.start._1)(t.end._1))(Ve(n.start._1)(n.end._1));
  return r < o ? T("Just", { position: b((r + o) / 2, t.start._2), crossingEdge: e }) : x;
}, Um = (t) => (n) => (e) => {
  if (t.direction === "H")
    return Vm(t)(n)(e);
  if (t.direction === "V")
    return Xm(t)(n)(e);
  f();
}, Km = (t) => (n) => (e) => {
  const r = t + 1 | 0, o = r < 1 ? e : bt(r, e.length, e);
  return Jt(n.segments)((i) => Jt(o)((s) => yt((u) => Um(i)(u)(s.edge))(lt(
    (u) => u.direction === "H" ? i.direction === "H" : u.direction === "V" && i.direction === "V",
    s.segments
  ))));
}, Mm = (t) => (n) => (e) => n.start._1 > Xe(t.start._1)(t.end._1) && n.start._1 < Ve(t.start._1)(t.end._1) && t.start._2 > Xe(n.start._2)(n.end._2) && t.start._2 < Ve(n.start._2)(n.end._2) ? T("Just", { position: b(n.start._1, t.start._2), crossingEdge: e }) : x, jm = (t) => (n) => Jt(lt((e) => e.direction === "H", t.segments))((e) => Jt(n)((r) => yt((o) => Mm(e)(o)(r.edge))(lt(
  (o) => o.direction === "V",
  r.segments
)))), Zm = (t) => (n) => (e) => [
  ...jm(n)(lt((r) => r.edge !== n.edge, e)),
  ...Km(t)(n)(e)
], da = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, M0 = (t) => mn(3)(t) === "$d:", t2 = (t) => (n) => (e) => J((r) => (o) => {
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
    layers: J((d) => (l) => {
      const h = l._2, $ = Ef(s + l._1 | 0)((p) => [...p, h])(d);
      if ($.tag === "Nothing")
        return d;
      if ($.tag === "Just")
        return $._1;
      f();
    })(r.layers)(wn(He, It(1, c - 1 | 0), g)),
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
})({ layers: e, edges: [], chains: [] })(n), Li = /* @__PURE__ */ (() => {
  const t = {
    eq: (n) => (e) => n._1 === e._1 && (n._2 === "North" ? e._2 === "North" : n._2 === "South" ? e._2 === "South" : n._2 === "East" ? e._2 === "East" : n._2 === "West" && e._2 === "West")
  };
  return {
    compare: (n) => (e) => {
      const r = P.compare(n._1)(e._1);
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
})(), n2 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, e2 = /* @__PURE__ */ nn(P)(Qt), Ps = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, r2 = /* @__PURE__ */ nn(Li)(Qt), ha = /* @__PURE__ */ (() => {
  const t = Xn.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), Cr = (t) => (n) => (e) => (r) => {
  const o = n2(b(n, e))(t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just")
    return o._1;
  f();
}, j0 = (t) => (n) => (e) => {
  const r = e2(zn(z((s) => Ft((u) => (c) => b(c, u))(s))(t))), o = (s, u) => {
    if (s === "South") {
      const c = Ps(u.to.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    if (s === "North") {
      const c = Ps(u.from.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    return 0;
  }, i = (s) => J((u) => (c) => Cn(
    Li.compare,
    Sn,
    r2(z((a) => b(b(a._1, s), a._2))(ha(V0({
      lo: 0,
      hi: (() => {
        const a = Ps(c._1)(e);
        if (a.tag === "Just")
          return a._1._1;
        if (a.tag === "Nothing")
          return mn(3)(c._1) === "$d:" ? 0 : 1;
        f();
      })()
    })(z((a) => a.id)(kt((a) => (g) => st.compare(o(s, a))(o(s, g)))(c._2)))))),
    u
  ))(A)(ha(J((u) => (c) => c.from.node === c.to.node ? u : s === "South" ? Tt(P)(rn)(c.from.node)([c])(u) : s === "North" ? Tt(P)(rn)(c.to.node)([c])(u) : u)(A)(n)));
  return Cn(Li.compare, Sn, i(dn), i(hn));
}, Z0 = (t) => t, tg = (t) => t, ng = (t) => t, o2 = /* @__PURE__ */ J((t) => (n) => K(P)(n)()(t))(A), i2 = /* @__PURE__ */ (() => {
  const t = Xn.unfoldr((n) => {
    if (n.tag === "Nil")
      return x;
    if (n.tag === "Cons")
      return T("Just", b(n._1, n._2));
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
})(), ct = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
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
}, $e = /* @__PURE__ */ nn(P)(Qt), Gs = /* @__PURE__ */ If(P), cu = /* @__PURE__ */ (() => {
  const t = Xn.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), s2 = (t) => (n) => {
  const e = st.compare(t)(n);
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
      const u = st.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, pa = /* @__PURE__ */ ng("VDown"), $a = /* @__PURE__ */ ng("VUp"), c2 = /* @__PURE__ */ tg("ForwardPhase"), a2 = /* @__PURE__ */ tg("StackPhase"), ma = /* @__PURE__ */ Z0("HRight"), ya = /* @__PURE__ */ Z0("HLeft"), Na = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
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
  const r = J((u) => (c) => Tt(P)(on)(c.tgt)(1)(u))(A)(t), o = i2(o2([
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
      return Lt(Xt.foldr, u(n, Yt));
    })()
  ])), i = J((u) => (c) => Tt(P)(rn)(c.src)([{ target: c.tgt, sep: c.sep }])(u))(A)(t);
  return ((u) => (c) => (a) => {
    let g = u, _ = c, d = a, l = !0, h;
    for (; l; ) {
      const $ = g, p = _, m = d, y = Bt((N) => x, (N) => (v) => T("Just", { head: N, tail: v }), $);
      if (y.tag === "Nothing") {
        l = !1, h = m;
        continue;
      }
      if (y.tag === "Just") {
        const N = ct(y._1.head)(m), v = (() => {
          if (N.tag === "Nothing")
            return 0;
          if (N.tag === "Just")
            return N._1;
          f();
        })(), w = J((k) => (L) => {
          const I = ct(L.target)(k.result), B = v + L.sep, Y = ct(L.target)(k.indeg), X = (() => {
            if (Y.tag === "Nothing")
              return -1;
            if (Y.tag === "Just")
              return Y._1 - 1 | 0;
            f();
          })();
          return {
            newQueue: X === 0 ? [...k.newQueue, L.target] : k.newQueue,
            result: K(P)(L.target)((() => {
              if (I.tag === "Nothing")
                return B;
              if (I.tag === "Just") {
                if (e === "VDown")
                  return ee(I._1)(B);
                if (e === "VUp")
                  return Je(I._1)(B);
              }
              f();
            })())(k.result),
            indeg: K(P)(L.target)(X)(k.indeg)
          };
        })({ newQueue: [], result: m, indeg: p })((() => {
          const k = ct(y._1.head)(i);
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
      const c = ct(u)(r);
      if (c.tag === "Nothing")
        return !0;
      if (c.tag === "Just")
        return c._1 === 0;
      f();
    },
    o
  ))(r)(J((u) => (c) => K(P)(c)(0)(u))(A)(o));
}, g2 = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, qt("Cons", i._4, n(i._6, s)));
    f();
  }, e = Lt(Xt.foldr, n(t, Yt)), r = J(ee)(999999)(e);
  if (r === 0 || e.length === 0)
    return t;
  const o = (i) => {
    if (i.tag === "Leaf")
      return A;
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
      const _ = ct(a)(t.align);
      if (_.tag === "Nothing")
        return n;
      if (_.tag === "Just")
        return _._1;
      f();
    })(), s = [...g, a];
  }
  return c;
})((() => {
  const r = ct(n)(t.align);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just")
    return r._1;
  f();
})())([n]), l2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (g) => {
  const _ = (E, S, O) => {
    const G = E.from.node === S ? E.from.port : E.to.node === S ? E.to.port : x;
    if (G.tag === "Just") {
      const D = ct(S)(o);
      if (D.tag === "Just") {
        const W = Kt((j) => j.id === G._1)(D._1);
        if (W.tag === "Just") {
          const j = et(W._1.offset) * et(4);
          return O === "North" || O === "South" ? j : 0;
        }
        if (W.tag === "Nothing") {
          const j = ct(S)(r), V = Cr(s)(E.id)(O)((() => {
            if (j.tag === "Nothing")
              return 0.5;
            if (j.tag === "Just")
              return j._1._1 / 2;
            f();
          })());
          return O === "North" || O === "South" ? V : 0;
        }
        f();
      }
      if (D.tag === "Nothing") {
        const W = ct(S)(r), j = Cr(s)(E.id)(O)((() => {
          if (W.tag === "Nothing")
            return 0.5;
          if (W.tag === "Just")
            return W._1._1 / 2;
          f();
        })());
        return O === "North" || O === "South" ? j : 0;
      }
      f();
    }
    if (G.tag === "Nothing") {
      const D = ct(S)(r), W = Cr(s)(E.id)(O)((() => {
        if (D.tag === "Nothing")
          return 0.5;
        if (D.tag === "Just")
          return D._1._1 / 2;
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
  }, l = (E, S, O) => J((G) => (D) => K(P)(D)((() => {
    const W = ct(D)(G);
    if (W.tag === "Nothing")
      return 0 + S;
    if (W.tag === "Just")
      return W._1 + S;
    f();
  })())(G))(O)(oo(c)(E)), h = (() => {
    if (g === "HRight")
      return e;
    if (g === "HLeft")
      return Ln(e);
    f();
  })(), $ = (E) => {
    const S = ct(E)(r);
    if (S.tag === "Nothing")
      return 1;
    if (S.tag === "Just")
      return S._1._1;
    f();
  }, p = $e(zn(Ft((E) => (S) => z((O) => b(O, E))(S))(e))), m = (E, S) => mn(3)(E) === "$d:" && mn(3)(S) === "$d:" || mn(3)(E) === "$d:" || mn(3)(S) === "$d:" ? 10 : et(t.nodeGap), y = J((E) => (S) => Gs((O) => T(
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
  ))(S.to.node)(E))(A)(i), N = J((E) => (S) => Gs((O) => T(
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
  ))(S.from.node)(E))(A)(i), v = zn(e), w = J((E) => (S) => {
    const O = ct(S)(c.root), G = (() => {
      if (O.tag === "Nothing")
        return S;
      if (O.tag === "Just")
        return O._1;
      f();
    })();
    return S === G ? E : Gs((D) => T(
      "Just",
      (() => {
        if (D.tag === "Nothing")
          return !0;
        if (D.tag === "Just")
          return D._1;
        f();
      })() && mn(3)(S) === "$d:"
    ))(G)(E);
  })($e(z((E) => b(E, !0))(Fr(P.compare)((() => {
    const E = (S, O) => {
      if (S.tag === "Leaf")
        return O;
      if (S.tag === "Node")
        return E(S._5, qt("Cons", S._4, E(S._6, O)));
      f();
    };
    return Lt(Xt.foldr, E(c.root, Yt));
  })()))))(v), k = (E, S) => {
    const O = E.free, G = ct(O)(c.root), D = (() => {
      if (G.tag === "Nothing")
        return O;
      if (G.tag === "Just")
        return G._1;
      f();
    })(), W = ct(D)(w), j = (() => {
      if (W.tag === "Nothing")
        return !0;
      if (W.tag === "Just")
        return W._1;
      f();
    })();
    return J((V) => (H) => {
      if (V.edge.tag === "Just")
        return V;
      if (V.edge.tag === "Nothing") {
        if ((() => {
          const at = ct(D)(S.su);
          return !j && (() => {
            const _t = ct(H.from.node)(p);
            return H.from.node !== H.to.node && (() => {
              const Dt = ct(H.to.node)(p);
              return (() => {
                if (_t.tag === "Nothing")
                  return -1;
                if (_t.tag === "Just")
                  return _t._1;
                f();
              })() === (() => {
                if (Dt.tag === "Nothing")
                  return -1;
                if (Dt.tag === "Just")
                  return Dt._1;
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
        const rt = H.from.node === O ? H.to.node : H.from.node, Z = ct(rt)(c.root), it = (() => {
          if (Z.tag === "Nothing")
            return rt;
          if (Z.tag === "Just")
            return Z._1;
          f();
        })(), nt = it !== D;
        return nt && (() => {
          const at = ct(it)(S.blockFinished);
          if (at.tag === "Nothing")
            return !1;
          if (at.tag === "Just")
            return at._1;
          f();
        })() ? { ...V, edge: T("Just", H), hasEdges: !0 } : { ...V, hasEdges: V.hasEdges || nt };
      }
      f();
    })({ edge: x, hasEdges: !1 })((() => {
      if (E.isRoot) {
        if (g === "HRight") {
          const V = ct(O)(y);
          if (V.tag === "Nothing")
            return [];
          if (V.tag === "Just")
            return V._1;
          f();
        }
        if (g === "HLeft") {
          const V = ct(O)(N);
          if (V.tag === "Nothing")
            return [];
          if (V.tag === "Just")
            return V._1;
        }
        f();
      }
      if (g === "HRight") {
        const V = ct(O)(N);
        if (V.tag === "Nothing")
          return [];
        if (V.tag === "Just")
          return V._1;
        f();
      }
      if (g === "HLeft") {
        const V = ct(O)(y);
        if (V.tag === "Nothing")
          return [];
        if (V.tag === "Just")
          return V._1;
      }
      f();
    })());
  }, L = (E, S, O, G) => {
    const D = (() => {
      if (a === "VDown")
        return -1e18;
      if (a === "VUp")
        return 1e18;
      f();
    })(), W = { free: S, isRoot: O }, j = k(W, G);
    if (j.edge.tag === "Nothing")
      return j.hasEdges ? { thresh: D, state: { ...G, queue: [...G.queue, W] } } : { thresh: D, state: G };
    if (j.edge.tag === "Just") {
      const V = j.edge._1.from.node === S ? j.edge._1.to.node : j.edge._1.from.node;
      return {
        thresh: (() => {
          const H = ct((() => {
            const nt = ct(V)(c.root);
            if (nt.tag === "Nothing")
              return V;
            if (nt.tag === "Just")
              return nt._1;
            f();
          })())(G.x), rt = ct(V)(u), Z = ct(S)(u), it = (() => {
            if (H.tag === "Just")
              return H._1;
            if (H.tag === "Nothing")
              return x;
            f();
          })();
          return (() => {
            if (it.tag === "Nothing")
              return 0;
            if (it.tag === "Just")
              return it._1;
            f();
          })() + (() => {
            if (rt.tag === "Nothing")
              return 0;
            if (rt.tag === "Just")
              return rt._1;
            f();
          })() + _(
            j.edge._1,
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
            j.edge._1,
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
          ...G,
          su: K(P)((() => {
            const H = ct(j.edge._1.from.node)(c.root);
            if (H.tag === "Nothing")
              return j.edge._1.from.node;
            if (H.tag === "Just")
              return H._1;
            f();
          })())(!0)(K(P)((() => {
            const H = ct(j.edge._1.to.node)(c.root);
            if (H.tag === "Nothing")
              return j.edge._1.to.node;
            if (H.tag === "Just")
              return H._1;
            f();
          })())(!0)(G.su))
        }
      };
    }
    f();
  }, I = (E, S, O, G) => {
    const D = S === E, W = ct(S)(c.align), j = (() => {
      if (W.tag === "Nothing")
        return S === E;
      if (W.tag === "Just")
        return W._1 === E;
      f();
    })();
    if (!(D || j))
      return { thresh: O, state: G };
    const V = (() => {
      if (a === "VDown")
        return D && O <= -1e18;
      if (a === "VUp")
        return D && O >= 1e18;
      f();
    })() ? L(E, S, !0, G) : { thresh: O, state: G };
    return (() => {
      if (a === "VDown")
        return V.thresh <= -1e18 && j;
      if (a === "VUp")
        return V.thresh >= 1e18 && j;
      f();
    })() ? L(E, S, !1, V.state) : V;
  }, B = (E) => (S) => (O) => {
    const G = ct(O)(n.nodeIndex), D = (() => {
      if (G.tag === "Nothing")
        return 0;
      if (G.tag === "Just")
        return G._1;
      f();
    })(), W = Kt((Z) => Hn(ge)(O)(Z))(h), j = (() => {
      if (W.tag === "Nothing")
        return [];
      if (W.tag === "Just")
        return W._1;
      f();
    })(), V = j.length;
    if ((() => {
      if (a === "VDown")
        return D <= 0;
      if (a === "VUp")
        return D >= (V - 1 | 0);
      f();
    })()) {
      const Z = I(E, O, S.thresh, S.st);
      return { ...S, st: Z.state, thresh: Z.thresh };
    }
    const H = (() => {
      if (a === "VDown")
        return D - 1 | 0;
      if (a === "VUp")
        return D + 1 | 0;
      f();
    })(), rt = H >= 0 && H < j.length ? T("Just", j[H]) : x;
    if (rt.tag === "Nothing")
      return S;
    if (rt.tag === "Just") {
      const Z = ct(rt._1)(c.root), it = (() => {
        if (Z.tag === "Nothing")
          return rt._1;
        if (Z.tag === "Just")
          return Z._1;
        f();
      })(), nt = I(E, O, S.thresh, Y(it)(S.st)), at = (() => {
        const Vt = ct(E)(nt.state.sink);
        if (Vt.tag === "Nothing")
          return E === E;
        if (Vt.tag === "Just")
          return Vt._1 === E;
        f();
      })() ? {
        ...nt.state,
        sink: K(P)(E)((() => {
          const Vt = ct(it)(nt.state.sink);
          if (Vt.tag === "Nothing")
            return it;
          if (Vt.tag === "Just")
            return Vt._1;
          f();
        })())(nt.state.sink)
      } : nt.state, _t = ct(it)(at.sink), Dt = (() => {
        if (_t.tag === "Nothing")
          return it;
        if (_t.tag === "Just")
          return _t._1;
        f();
      })(), vt = ct(E)(at.sink), Wt = (() => {
        if (vt.tag === "Nothing")
          return E;
        if (vt.tag === "Just")
          return vt._1;
        f();
      })();
      if (Wt === Dt) {
        const Vt = ct(it)(at.x), Pn = (() => {
          if (Vt.tag === "Just")
            return Vt._1;
          if (Vt.tag === "Nothing")
            return x;
          f();
        })(), ne = (() => {
          if (Pn.tag === "Nothing")
            return 0;
          if (Pn.tag === "Just")
            return Pn._1;
          f();
        })(), kn = ct(E)(at.x), Qn = (() => {
          if (kn.tag === "Just")
            return kn._1;
          if (kn.tag === "Nothing")
            return x;
          f();
        })(), St = (() => {
          if (Qn.tag === "Nothing")
            return 0;
          if (Qn.tag === "Just")
            return Qn._1;
          f();
        })(), Pt = m(O, rt._1), Vn = ct(rt._1)(u), _e = ct(O)(u), Nr = (() => {
          if (Vn.tag === "Nothing")
            return 0;
          if (Vn.tag === "Just")
            return Vn._1;
          f();
        })() - (() => {
          if (_e.tag === "Nothing")
            return 0;
          if (_e.tag === "Just")
            return _e._1;
          f();
        })();
        if (a === "VDown") {
          const be = Je(ne + Nr + $(rt._1) + Pt)(nt.thresh);
          return {
            st: { ...at, x: K(P)(E)(T("Just", S.initial ? be : Je(St)(be)))(at.x) },
            initial: !1,
            thresh: nt.thresh
          };
        }
        if (a === "VUp") {
          const be = ee(ne + Nr - Pt - $(O))(nt.thresh);
          return {
            st: { ...at, x: K(P)(E)(T("Just", S.initial ? be : ee(St)(be)))(at.x) },
            initial: !1,
            thresh: nt.thresh
          };
        }
        f();
      }
      const $t = ct(it)(at.x), xt = (() => {
        if ($t.tag === "Just")
          return $t._1;
        if ($t.tag === "Nothing")
          return x;
        f();
      })(), mt = (() => {
        if (xt.tag === "Nothing")
          return 0;
        if (xt.tag === "Just")
          return xt._1;
        f();
      })(), ot = ct(E)(at.x), M = (() => {
        if (ot.tag === "Just")
          return ot._1;
        if (ot.tag === "Nothing")
          return x;
        f();
      })(), ut = (() => {
        if (M.tag === "Nothing")
          return 0;
        if (M.tag === "Just")
          return M._1;
        f();
      })(), gt = et(t.nodeGap), dt = ct(O)(u), Nt = ct(rt._1)(u), At = (() => {
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
              src: Wt,
              tgt: Dt,
              sep: (() => {
                if (a === "VDown")
                  return ut + At - mt - $(rt._1) - gt;
                if (a === "VUp")
                  return ut + At + $(O) + gt - mt;
                f();
              })()
            }
          ]
        },
        initial: S.initial,
        thresh: nt.thresh
      };
    }
    f();
  }, Y = (E) => (S) => {
    const O = ct(E)(S.x), G = (() => {
      if (O.tag === "Just")
        return O._1;
      if (O.tag === "Nothing")
        return x;
      f();
    })();
    if (G.tag === "Just")
      return S;
    if (G.tag === "Nothing") {
      const D = J(B(E))({
        st: { ...S, x: K(P)(E)(T("Just", 0))(S.x) },
        initial: !0,
        thresh: (() => {
          if (a === "VDown")
            return -1e18;
          if (a === "VUp")
            return 1e18;
          f();
        })()
      })(oo(c)(E));
      return { ...D.st, blockFinished: K(P)(E)(!0)(D.st.blockFinished) };
    }
    f();
  }, X = J((E) => (S) => J((O) => (G) => {
    const D = ct(G)(c.root), W = (() => {
      if (D.tag === "Nothing")
        return G;
      if (D.tag === "Just")
        return D._1;
      f();
    })();
    return W === G ? Y(W)(O) : O;
  })(E)((() => {
    if (a === "VDown")
      return S;
    if (a === "VUp")
      return Ln(S);
    f();
  })()))({
    x: $e(z((E) => b(E, x))(v)),
    sink: $e(z((E) => b(E, E))(v)),
    classEdges: [],
    su: A,
    blockFinished: A,
    queue: []
  })(h), C = f2(X.classEdges)(X.sink)(a), F = (E, S, O, G) => {
    const D = ct(S)(G), W = ct(S)(u);
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
    })() + _(E, S, O);
  }, U = $e(z((E) => b(E, !0))(Fr(P.compare)((() => {
    const E = (S, O) => {
      if (S.tag === "Leaf")
        return O;
      if (S.tag === "Node")
        return E(S._5, qt("Cons", S._4, E(S._6, O)));
      f();
    };
    return Lt(Xt.foldr, E(c.root, Yt));
  })()))), tt = (E) => (S) => (O) => {
    const G = k(O, { su: S.su, blockFinished: U }), D = {
      phase: E,
      ppFree: O.free,
      ppIsRoot: O.isRoot,
      edgeId: x,
      delta: 0,
      avail: 0,
      shift: 0,
      freeSu: (() => {
        const W = ct((() => {
          const j = ct(O.free)(c.root);
          if (j.tag === "Nothing")
            return O.free;
          if (j.tag === "Just")
            return j._1;
          f();
        })())(S.su);
        if (W.tag === "Nothing")
          return !1;
        if (W.tag === "Just")
          return W._1;
        f();
      })(),
      hasEdges: G.hasEdges,
      candCount: (() => {
        if (O.isRoot) {
          if (g === "HRight") {
            const W = ct(O.free)(y);
            if (W.tag === "Nothing")
              return 0;
            if (W.tag === "Just")
              return W._1.length;
            f();
          }
          if (g === "HLeft") {
            const W = ct(O.free)(N);
            if (W.tag === "Nothing")
              return 0;
            if (W.tag === "Just")
              return W._1.length;
          }
          f();
        }
        if (g === "HRight") {
          const W = ct(O.free)(N);
          if (W.tag === "Nothing")
            return 0;
          if (W.tag === "Just")
            return W._1.length;
          f();
        }
        if (g === "HLeft") {
          const W = ct(O.free)(y);
          if (W.tag === "Nothing")
            return 0;
          if (W.tag === "Just")
            return W._1.length;
        }
        f();
      })()
    };
    if (G.edge.tag === "Nothing")
      return { ...S, stack: [...S.stack, O], trace: [...S.trace, D], x: S.x };
    if (G.edge.tag === "Just") {
      const W = G.edge._1.from.node === O.free ? b(G.edge._1.from.node, G.edge._1.to.node) : b(G.edge._1.to.node, G.edge._1.from.node), j = F(G.edge._1, W._1, d(G.edge._1, W._1), S.x) - F(G.edge._1, W._2, d(G.edge._1, W._2), S.x), V = ct(W._1)(c.root), H = (() => {
        if (V.tag === "Nothing")
          return W._1;
        if (V.tag === "Just")
          return V._1;
        f();
      })(), rt = { ...D, edgeId: T("Just", G.edge._1.id), delta: j };
      if (j > 0 && j < 1e300) {
        const Z = J((at) => (_t) => {
          const Dt = ct(_t)(p), vt = (() => {
            if (Dt.tag === "Nothing")
              return -1;
            if (Dt.tag === "Just")
              return Dt._1;
            f();
          })();
          if (vt >= 0 && vt < e.length) {
            const xt = e[vt], mt = ct(_t)(n.nodeIndex), ot = (() => {
              if (mt.tag === "Nothing")
                return -2;
              if (mt.tag === "Just")
                return mt._1 - 1 | 0;
              f();
            })();
            return ot >= 0 && ot < xt.length ? ee(at)((() => {
              const M = ct(_t)(S.x), ut = ct(_t)(u), gt = ct(xt[ot])(S.x), dt = ct(xt[ot])(u);
              return (() => {
                if (M.tag === "Nothing")
                  return 0;
                if (M.tag === "Just")
                  return M._1;
                f();
              })() + (() => {
                if (ut.tag === "Nothing")
                  return 0;
                if (ut.tag === "Just")
                  return ut._1;
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
              })() + $(xt[ot]) + m(_t, xt[ot]));
            })()) : at;
          }
          const Wt = ct(_t)(n.nodeIndex), $t = (() => {
            if (Wt.tag === "Nothing")
              return -2;
            if (Wt.tag === "Just")
              return Wt._1 - 1 | 0;
            f();
          })();
          return $t >= 0 && $t < 0 ? ee(at)((() => {
            const xt = ct(_t)(S.x), mt = ct(_t)(u), ot = ct([][$t])(S.x), M = ct([][$t])(u);
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
              if (ot.tag === "Nothing")
                return 0;
              if (ot.tag === "Just")
                return ot._1;
              f();
            })() + (() => {
              if (M.tag === "Nothing")
                return 0;
              if (M.tag === "Just")
                return M._1;
              f();
            })() + $([][$t]) + m(_t, [][$t]));
          })()) : at;
        })(j)(oo(c)(H)), it = Z > 0 ? -Z : 0, nt = { ...S, x: Z > 0 ? l(H, it, S.x) : S.x, trace: [...S.trace, { ...rt, avail: Z, shift: it }] };
        return Z > 0 ? nt : { ...nt, stack: [...nt.stack, O] };
      }
      if (j < 0 && -j < 1e300) {
        const Z = J((at) => (_t) => {
          const Dt = ct(_t)(p), vt = (() => {
            if (Dt.tag === "Nothing")
              return -1;
            if (Dt.tag === "Just")
              return Dt._1;
            f();
          })();
          if (vt >= 0 && vt < e.length) {
            const xt = e[vt], mt = ct(_t)(n.nodeIndex), ot = (() => {
              if (mt.tag === "Nothing")
                return 0;
              if (mt.tag === "Just")
                return mt._1 + 1 | 0;
              f();
            })();
            return ot >= 0 && ot < xt.length ? ee(at)((() => {
              const M = ct(xt[ot])(S.x), ut = ct(xt[ot])(u), gt = ct(_t)(S.x), dt = ct(_t)(u);
              return (() => {
                if (M.tag === "Nothing")
                  return 0;
                if (M.tag === "Just")
                  return M._1;
                f();
              })() + (() => {
                if (ut.tag === "Nothing")
                  return 0;
                if (ut.tag === "Just")
                  return ut._1;
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
              })() + $(_t) + m(_t, xt[ot]));
            })()) : at;
          }
          const Wt = ct(_t)(n.nodeIndex), $t = (() => {
            if (Wt.tag === "Nothing")
              return 0;
            if (Wt.tag === "Just")
              return Wt._1 + 1 | 0;
            f();
          })();
          return $t >= 0 && $t < 0 ? ee(at)((() => {
            const xt = ct([][$t])(S.x), mt = ct([][$t])(u), ot = ct(_t)(S.x), M = ct(_t)(u);
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
              if (ot.tag === "Nothing")
                return 0;
              if (ot.tag === "Just")
                return ot._1;
              f();
            })() + (() => {
              if (M.tag === "Nothing")
                return 0;
              if (M.tag === "Just")
                return M._1;
              f();
            })() + $(_t) + m(_t, [][$t]));
          })()) : at;
        })(-j)(oo(c)(H)), it = Z > 0 ? Z : 0, nt = { ...S, x: Z > 0 ? l(H, it, S.x) : S.x, trace: [...S.trace, { ...rt, avail: Z, shift: it }] };
        return Z > 0 ? nt : { ...nt, stack: [...nt.stack, O] };
      }
      return { ...S, stack: [...S.stack, O], trace: [...S.trace, rt], x: S.x };
    }
    f();
  }, q = J(tt(c2))({
    x: $e(z((E) => b(
      E,
      (() => {
        const S = ct(E)(c.root), O = (() => {
          if (S.tag === "Nothing")
            return E;
          if (S.tag === "Just")
            return S._1;
          f();
        })(), G = ct(O)(X.x), D = ct((() => {
          const j = ct(O)(X.sink);
          if (j.tag === "Nothing")
            return O;
          if (j.tag === "Just")
            return j._1;
          f();
        })())(C), W = (() => {
          if (G.tag === "Just")
            return G._1;
          if (G.tag === "Nothing")
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
          if (D.tag === "Nothing")
            return 0;
          if (D.tag === "Just")
            return D._1;
          f();
        })();
      })()
    ))(v)),
    su: X.su,
    stack: [],
    trace: []
  })(X.queue), Q = J(tt(a2))({ ...q, stack: [] })(Ln(q.stack));
  return { x: Q.x, queue: X.queue, trace: Q.trace };
}, _2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (g) => l2(t)(n)(e)(r)(o)(i)(s)(u)(c)(a)(g).x, d2 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = (c, a, g) => {
    const _ = ct(a)(e), d = (() => {
      if (_.tag === "Nothing")
        return 0.5;
      if (_.tag === "Just")
        return _._1._1 / 2;
      f();
    })(), l = c.from.node === a ? c.from.port : c.to.node === a ? c.to.port : x;
    if (l.tag === "Just") {
      const h = ct(a)(n);
      if (h.tag === "Just") {
        const $ = Kt((p) => p.id === l._1)(h._1);
        if ($.tag === "Just") {
          const p = et($._1.offset) * et(4);
          return g === "North" || g === "South" ? p : 0;
        }
        if ($.tag === "Nothing") {
          const p = Cr(o)(c.id)(g)(d);
          return g === "North" || g === "South" ? p : 0;
        }
        f();
      }
      if (h.tag === "Nothing") {
        const $ = Cr(o)(c.id)(g)(d);
        return g === "North" || g === "South" ? $ : 0;
      }
      f();
    }
    if (l.tag === "Nothing") {
      const h = Cr(o)(c.id)(g)(d);
      return g === "North" || g === "South" ? h : 0;
    }
    f();
  }, u = (c) => (a) => (g) => (_) => {
    let d = c, l = a, h = g, $ = _, p = !0, m;
    for (; p; ) {
      const y = d, N = l, v = h, k = Bt((L) => x, (L) => (I) => T("Just", { head: L, tail: I }), $);
      if (k.tag === "Nothing") {
        p = !1, m = y;
        continue;
      }
      if (k.tag === "Just") {
        const L = k._1.head, I = Kt((Y) => Y.from.node === v && Y.to.node === L || Y.from.node === L && Y.to.node === v)(r), B = (() => {
          if (I.tag === "Nothing")
            return N + 0;
          if (I.tag === "Just")
            return N + (s(I._1, v, I._1.from.node === v ? hn : dn) - s(
              I._1,
              L,
              I._1.from.node === L ? hn : dn
            ));
          f();
        })();
        d = K(P)(L)(B)(y), l = B, h = L, $ = k._1.tail;
        continue;
      }
      f();
    }
    return m;
  };
  return J((c) => (a) => {
    const g = Bt((l) => x, (l) => (h) => T("Just", { head: l, tail: h }), oo(t)(a)), _ = (() => {
      if (g.tag === "Nothing")
        return K(P)(a)(0)(A);
      if (g.tag === "Just")
        return u(K(P)(g._1.head)(0)(A))(0)(g._1.head)(g._1.tail);
      f();
    })(), d = J((l) => (h) => Je(l)(-h._2))(0)(cu(_));
    return J((l) => (h) => K(P)(h._1)(h._2 + d)(l))(c)(cu(_));
  })(A)(Fr(P.compare)((() => {
    const c = (a, g) => {
      if (a.tag === "Leaf")
        return g;
      if (a.tag === "Node")
        return c(a._5, qt("Cons", a._4, c(a._6, g)));
      f();
    };
    return Lt(Xt.foldr, c(t.root, Yt));
  })()));
}, h2 = (t) => (n) => {
  const e = (o, i, s) => mn(3)(i) === "$d:" && Lf(
    M0,
    (() => {
      const u = ct(i)(t.preds);
      if (u.tag === "Nothing")
        return [];
      if (u.tag === "Just")
        return u._1;
      f();
    })()
  ), r = (o) => (i) => (s) => (u) => (c) => (a) => (g) => {
    let _ = o, d = i, l = u, h = a, $ = g, p = !0, m;
    for (; p; ) {
      const y = _, N = d, v = l, w = h, k = $, L = N.length;
      if (k >= L) {
        p = !1, m = y;
        continue;
      }
      const I = k >= 0 && k < N.length ? T("Just", N[k]) : x, B = (() => {
        if (I.tag === "Nothing")
          return "";
        if (I.tag === "Just")
          return I._1;
        f();
      })(), Y = e(t, B);
      if (k === (L - 1 | 0) || Y) {
        const X = (() => {
          if (Y) {
            const C = ct(B)(t.preds), F = (() => {
              if (C.tag === "Nothing")
                return [];
              if (C.tag === "Just")
                return C._1;
              f();
            })();
            if (0 < F.length) {
              const U = v - 1 | 0, tt = ct(F[0])(t.nodeIndex);
              if (tt.tag === "Nothing")
                return U;
              if (tt.tag === "Just")
                return tt._1;
              f();
            }
          }
          return v - 1 | 0;
        })();
        _ = J((C) => (F) => {
          if (F >= 0 && F < N.length) {
            const U = N[F];
            return e(t, U) ? C : J((tt) => (q) => {
              const Q = ct(q)(t.nodeIndex), E = (() => {
                if (Q.tag === "Nothing")
                  return 0;
                if (Q.tag === "Just")
                  return Q._1;
                f();
              })();
              return E < w || E > X ? K(P)(q + "→" + U)()(tt) : tt;
            })(C)((() => {
              const tt = ct(U)(t.preds);
              if (tt.tag === "Nothing")
                return [];
              if (tt.tag === "Just")
                return tt._1;
              f();
            })());
          }
          return e(t, "") ? C : J((U) => (tt) => {
            const q = ct(tt)(t.nodeIndex), Q = (() => {
              if (q.tag === "Nothing")
                return 0;
              if (q.tag === "Just")
                return q._1;
              f();
            })();
            return Q < w || Q > X ? K(P)(tt + "→")()(U) : U;
          })(C)((() => {
            const U = ct("")(t.preds);
            if (U.tag === "Nothing")
              return [];
            if (U.tag === "Just")
              return U._1;
            f();
          })());
        })(y)(It(0, k)), d = N, l = v, h = X, $ = k + 1 | 0;
        continue;
      }
      _ = y, d = N, l = v, h = w, $ = k + 1 | 0;
    }
    return m;
  };
  return n.length < 3 ? A : J((o) => (i) => {
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
}, p2 = (t) => (n) => (e) => (r) => (o) => {
  const i = zn(n), s = J((u) => (c) => {
    const a = J((g) => (_) => {
      const d = (() => {
        if (o === "HRight") {
          const p = ct(_)(t.preds);
          if (p.tag === "Nothing")
            return [];
          if (p.tag === "Just")
            return p._1;
          f();
        }
        if (o === "HLeft") {
          const p = ct(_)(t.succs);
          if (p.tag === "Nothing")
            return [];
          if (p.tag === "Just")
            return p._1;
        }
        f();
      })(), l = d.length;
      if (l === 0)
        return g;
      const h = Pe(l - 1 | 0, 2), $ = Pe(l, 2);
      return J((p) => (m) => {
        if ((() => {
          const y = ct(_)(p.align);
          if (y.tag === "Nothing")
            return _ !== _;
          if (y.tag === "Just")
            return y._1 !== _;
          f();
        })())
          return p;
        if (m >= 0 && m < d.length) {
          const y = ct(d[m])(t.nodeIndex), N = (() => {
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
            const v = ct(d[m])(p.root), w = (() => {
              if (v.tag === "Nothing")
                return d[m];
              if (v.tag === "Just")
                return v._1;
              f();
            })();
            return {
              root: K(P)(_)(w)(p.root),
              align: K(P)(d[m])(_)(K(P)(_)(w)(p.align)),
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
}, oi = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
  const g = p2(n)(e)(u)(c)(a), _ = d2(g)(o)(r)(i)(s)(a);
  return z_()((d) => (l) => T(
    "Just",
    (() => {
      const h = ct(d)(_);
      if (h.tag === "Nothing")
        return l + 0;
      if (h.tag === "Just")
        return l + h._1;
      f();
    })()
  ))(_2(t)(n)(e)(r)(o)(i)(s)(_)(g)(c)(a));
}, xa = (t) => (n) => Ft((e) => (r) => J((o) => (i) => i >= 0 && i < n.length ? i >= 0 && i < t.length ? o + n[i] + t[i] : o + n[i] + 0 : i >= 0 && i < t.length ? o + 1 + t[i] : o + 1)(0)((() => {
  const o = It(0, n.length - 1 | 0);
  return e < 1 ? [] : bt(0, e, o);
})()))(n), $2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = s2(0)(n.length - 1 | 0), c = et(t.layerGap), a = s($_(u, c)), g = ym(U0(o)(a)(r)(i)(A))(a);
  return z((_) => {
    const d = u2(_)(g);
    return d.tag === "Just" && d._1 > 0 ? Je(c)(2 + et(d._1 - 1 | 0) * 2.5) : c;
  })(It(0, u - 1 | 0));
}, rg = (t) => (n) => (e) => (r) => Lf(
  (o) => J((i) => (s) => {
    if (!i.ok)
      return i;
    const u = ct(s)(r), c = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      f();
    })(), a = ct(s)(e), g = (() => {
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
  const o = kt((i) => (s) => ft.compare(i.w)(s.w))(z((i) => ({ l: i, w: eg(i) }))(lt(
    rg()(n)(e),
    r
  )));
  return 0 < o.length ? T("Just", o[0].l) : x;
}, y2 = (t) => (n) => {
  const e = $e(zn(z(Ft((o) => (i) => b(i, o)))(t))), r = (o) => kt((i) => (s) => st.compare((() => {
    const u = ct(i)(e);
    if (u.tag === "Nothing")
      return 0;
    if (u.tag === "Just")
      return u._1;
    f();
  })())((() => {
    const u = ct(s)(e);
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
          return zt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(J((i) => (s) => Tt(P)(rn)(s.to.node)([s.from.node])(i))(A)(n));
    })(),
    succs: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return A;
        if (i.tag === "Node")
          return zt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(J((i) => (s) => Tt(P)(rn)(s.from.node)([s.to.node])(i))(A)(n));
    })(),
    nodeIndex: e
  };
}, N2 = (t) => (n) => {
  const e = kt((_) => (d) => ft.compare(_.w)(d.w))(Ft((_) => (d) => ({ i: _, l: d, w: eg(d) }))(n)), r = 0 < e.length ? T("Just", e[0]) : x, o = (() => {
    if (r.tag === "Just")
      return r._1.i;
    if (r.tag === "Nothing")
      return 0;
    f();
  })(), i = o >= 0 && o < n.length ? T("Just", n[o]) : x, s = (() => {
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
            return d(l._5, qt("Cons", l._4, d(l._6, h)));
          f();
        };
        return d(i._1, Yt);
      })());
    if (i.tag === "Nothing")
      return 0;
    f();
  })(), u = (_) => J((d) => (l) => Je(d)((() => {
    const h = ct(l._1)(t);
    if (h.tag === "Nothing")
      return l._2 + 1;
    if (h.tag === "Just")
      return l._2 + h._1._1;
    f();
  })()))(-999999)(cu(_)), c = o >= 0 && o < n.length ? T("Just", n[o]) : x, a = (() => {
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
          return zt("Node", h._1, h._2, h._3, h._4 + d, l(h._5), l(h._6));
        f();
      };
      return l(_);
    },
    n,
    Ft((_) => (d) => Ye(_)(2) === 0 ? s - ((h) => ($) => {
      let p = h, m = $, y = !0, N;
      for (; y; ) {
        const v = p, w = m;
        if (w.tag === "Nil") {
          y = !1, N = v;
          continue;
        }
        if (w.tag === "Cons") {
          p = ee(v)(w._1), m = w._2;
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
          return h($._5, qt("Cons", $._4, h($._6, p)));
        f();
      };
      return h(d, Yt);
    })()) : a - u(d))(n)
  );
  return g2(J((_) => (d) => {
    const l = kt(ft.compare)(yt(ct(d))(g));
    return K(P)(d)(l.length === 4 ? 1 < l.length && 2 < l.length ? (l[1] + l[2]) / 2 : 0 : 0 < l.length ? l[0] : 0)(_);
  })(A)(Fr(P.compare)(zn(z((_) => {
    const d = (l) => {
      if (l.tag === "Leaf")
        return A;
      if (l.tag === "Node")
        return zt("Node", l._1, l._2, l._3, void 0, d(l._5), d(l._6));
      f();
    };
    return Lt(On.foldr, d(_));
  })(g)))));
}, x2 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = y2(n)(o), u = h2(s)(n), c = { nodeGap: t.nodeGap * 4 | 0 }, a = Cn(
    P.compare,
    Sn,
    $e(z((l) => b(l, b(1, 1)))(lt(
      M0,
      zn(n)
    ))),
    (() => {
      const l = (h) => {
        if (h.tag === "Leaf")
          return A;
        if (h.tag === "Node")
          return zt("Node", h._1, h._2, h._3, b(h._4._1 * et(4), h._4._2), l(h._5), l(h._6));
        f();
      };
      return l(e);
    })()
  ), g = [
    oi(c)(s)(n)(a)(r)(o)(i)(u)(pa)(ma),
    oi(c)(s)(n)(a)(r)(o)(i)(u)($a)(ma),
    oi(c)(s)(n)(a)(r)(o)(i)(u)(pa)(ya),
    oi(c)(s)(n)(a)(r)(o)(i)(u)($a)(ya)
  ], _ = N2(a)(g);
  if (rg()(n)(a)(_))
    return _;
  const d = m2()(n)(a)(g);
  if (d.tag === "Just")
    return d._1;
  if (d.tag === "Nothing")
    return g[0];
  f();
}, J2 = (t) => (n) => (e) => (r) => {
  const o = Tf(
    x,
    mf,
    (i) => i.node === n ? T("Just", i.position) : x,
    t
  );
  if (o.tag === "Nothing")
    return t;
  if (o.tag === "Just") {
    const i = o._1;
    return z((s) => s.node === e ? { ...s, position: b(i._1 + r._1, i._2 + r._2) } : s)(t);
  }
  f();
}, v2 = (t) => (n) => (e) => (r) => {
  const o = lt((s) => Hn(ge)(s.node)(n), t), i = (() => {
    if (e === "Vertical") {
      if (r === "Start")
        return J((s) => (u) => ee(s)(u.position._1))(99999)(o);
      if (r === "End")
        return J((s) => (u) => Je(s)(u.position._1))(0)(o);
      if (r === "Center") {
        const s = J((u) => (c) => u + c.position._1)(0)(o);
        return o.length === 0 ? 0 : s / et(o.length);
      }
      f();
    }
    if (e === "Horizontal") {
      if (r === "Start")
        return J((s) => (u) => ee(s)(u.position._2))(99999)(o);
      if (r === "End")
        return J((s) => (u) => Je(s)(u.position._2))(0)(o);
      if (r === "Center") {
        const s = J((u) => (c) => u + c.position._2)(0)(o);
        return o.length === 0 ? 0 : s / et(o.length);
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
}, T2 = (t) => (n) => J((e) => (r) => r.tag === "AlignGroup" ? v2(e)(r._1.nodes)(r._1.axis)(r._1.alignment) : r.tag === "RelativePosition" ? J2(e)(r._1.anchor)(r._1.target)(r._1.offset) : e)(n)(t), w2 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const c = z((_) => J((d) => (l) => Je(d)((() => {
    const h = ct(l)(r);
    if (h.tag === "Nothing")
      return 1;
    if (h.tag === "Just")
      return h._1._2;
    f();
  })()))(1)(_))(e), a = x2(t)(e)(r)(o)(i)(u), g = xa($2(t)(e)(r)(o)(i)(s)((_) => {
    const d = xa(_)(c);
    return zn(Ft((l) => (h) => Ft(($) => (p) => ({
      node: p,
      position: b(
        (() => {
          const m = ct(p)(a);
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
        const m = mn(3)(p) === "$d:" ? b(0, 1) : b(1, 1), y = ct(p)(r);
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
  return T2(n)(zn(Ft((_) => (d) => Ft((l) => (h) => ({
    node: h,
    position: b(
      (() => {
        const $ = ct(h)(a);
        return (() => {
          if ($.tag === "Nothing")
            return 0;
          if ($.tag === "Just")
            return $._1;
          f();
        })() / et(4);
      })(),
      _ >= 0 && _ < g.length ? g[_] : 0
    ),
    size: (() => {
      const $ = mn(3)(h) === "$d:" ? b(0, 1) : b(1, 1), p = ct(h)(r);
      if (p.tag === "Nothing")
        return $;
      if (p.tag === "Just")
        return p._1;
      f();
    })(),
    layer: _,
    order: l
  }))(d))(e)));
}, Is = /* @__PURE__ */ zu(hi)(/* @__PURE__ */ hr(32)), Ja = /* @__PURE__ */ zu(hi)(/* @__PURE__ */ hr(31)), Lo = /* @__PURE__ */ (() => {
  const t = R1("25214903917");
  if (t.tag === "Nothing")
    return Hf;
  if (t.tag === "Just")
    return t._1;
  f();
})(), Eo = /* @__PURE__ */ Ys(/* @__PURE__ */ zu(hi)(/* @__PURE__ */ hr(48)))(hi), k2 = (t) => {
  const n = B1(t);
  return yo(Of((() => {
    if (n.tag === "Nothing")
      return Hf;
    if (n.tag === "Just")
      return n._1;
    f();
  })())(Lo))(Eo);
}, au = /* @__PURE__ */ hr(11), Ei = (t) => (n) => {
  const e = yo(ai(fi(n)(Lo))(au))(Eo);
  return b(
    (() => {
      const r = Pf(G1(Xs(e)(hr(48 - t | 0))));
      if (r.tag === "Nothing")
        return 0;
      if (r.tag === "Just")
        return r._1;
      f();
    })(),
    e
  );
}, b2 = (t) => {
  const n = Ei(26)(t), e = Ei(27)(n._2);
  return b((et(n._1) * zs(2)(27) + et(e._1)) / zs(2)(53), e._2);
}, L2 = (t) => (n) => {
  const e = J((r) => (o) => {
    const i = b2(r.finalR);
    return { rs: [...r.rs, i._1], finalR: i._2 };
  })({ rs: [], finalR: t })(n);
  return b(
    z((r) => r.x)(kt((r) => (o) => ft.compare(r.k)(o.k))(wn((r) => (o) => ({ x: r, k: o }), n, e.rs))),
    e.finalR
  );
}, E2 = (t) => {
  const n = yo(ai(fi(t)(Lo))(au))(Eo), e = yo(ai(fi(n)(Lo))(au))(Eo);
  return b(
    ai(fi((() => {
      const r = Xs(n)(hr(16));
      return Cc.compare(r)(Ja) !== "LT" ? Ys(r)(Is) : r;
    })())(Is))((() => {
      const r = Xs(e)(hr(16));
      return Cc.compare(r)(Ja) !== "LT" ? Ys(r)(Is) : r;
    })()),
    e
  );
}, So = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
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
      const u = P.compare(t)(s._3);
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
}, ac = /* @__PURE__ */ nn(P)(Qt), Er = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ci = /* @__PURE__ */ nn(P)(Qt), S2 = /* @__PURE__ */ Eu(Qo), C2 = /* @__PURE__ */ J(Rr)(0), P2 = (t) => (n) => {
  const e = st.compare(t)(n);
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
      const u = P.compare(t)(s._3);
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
      const o = Me(Ot, x, t, e[n], e);
      if (o.tag === "Just")
        return Me(Ot, x, n, r, o._1);
      if (o.tag === "Nothing")
        return x;
      f();
    }
  }
  return x;
}, I2 = (t) => (n) => (e) => (r) => (o) => ac(J((i) => (s) => {
  const u = kt((c) => (a) => st.compare((() => {
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
  })()))(lt((c) => Si(c.to.node)(e), lt((c) => c.from.node === s, r)));
  return {
    ranks: [...i.ranks, ...Ft((c) => (a) => b(a.id, et((i.rankSum + c | 0) + 1 | 0)))(u)],
    rankSum: i.rankSum + u.length | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), A2 = (t) => (n) => (e) => (r) => (o) => ac(J((i) => (s) => {
  const u = kt((a) => (g) => {
    const _ = st.compare((() => {
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
    return _ === "EQ" ? st.compare((() => {
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
  })(lt((a) => Si(a.from.node)(e), lt((a) => a.to.node === s, r))), c = u.length;
  return {
    ranks: [...i.ranks, ...Ft((a) => (g) => b(g.id, et((i.rankSum + c | 0) - a | 0)))(u)],
    rankSum: i.rankSum + c | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), fu = (t) => (n) => (e) => {
  const r = Ci(Ft((u) => (c) => b(c, u))(t)), o = Ci(Ft((u) => (c) => b(c, u))(n)), i = yt((u) => {
    const c = Er(u.from.node)(r), a = Er(u.to.node)(o);
    if (c.tag === "Just" && a.tag === "Just")
      return T("Just", b(c._1, a._1));
    const g = Er(u.from.node)(o), _ = Er(u.to.node)(r);
    return g.tag === "Just" && _.tag === "Just" ? T("Just", b(_._1, g._1)) : x;
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
          const $ = d[l], p = d[h];
          if (qn((v) => v.before === $ && v.after === p, r)) {
            c = d, a = l + 1 | 0;
            continue;
          }
          const m = Me(Ot, x, l, p, d), y = (() => {
            if (m.tag === "Just")
              return Me(Ot, x, l + 1 | 0, $, m._1);
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
      if (S2(_)(g)) {
        c = !1, a = g;
        continue;
      }
      u = _;
    }
    return a;
  })(t);
}, ii = (t) => (n) => J((e) => (r) => {
  if (r >= 0 && r < t.length) {
    const o = t[r], i = r + 1 | 0;
    if (i >= 0 && i < t.length)
      return e + fu(o)(t[i])(n) | 0;
  }
  return e;
})(0)(It(0, t.length - 2 | 0)), R2 = /* @__PURE__ */ (() => {
  const t = (n) => {
    if (n.length < 7) {
      const s = (u) => (c) => {
        let a = u, g = c, _ = !0, d;
        for (; _; ) {
          const l = a, h = g, $ = h - 1 | 0;
          if ($ >= 0 && $ < l.length) {
            if (h >= 0 && h < l.length && h > 0 && l[$].key > l[h].key) {
              const p = G2(h - 1 | 0)(h)(l);
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
      return J((u) => (c) => s(u)(c))(n)(It(1, n.length - 1 | 0));
    }
    const e = Pe(n.length, 2), r = t(bt(0, e, n)), o = t(bt(e, n.length, n));
    return ((s) => (u) => (c) => {
      let a = s, g = u, _ = c, d = !0, l;
      for (; d; ) {
        const h = a, $ = g, p = _;
        if ($ >= 0 && $ < r.length) {
          if (p >= 0 && p < o.length) {
            if (r[$].key > o[p].key) {
              a = Rt(h)(o[p]), g = $, _ = p + 1 | 0;
              continue;
            }
            a = Rt(h)(r[$]), g = $ + 1 | 0, _ = p;
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
})(), B2 = (t) => (n) => (e) => {
  const r = yt((a) => a.tag === "OrderConstraint" ? T("Just", { before: a._1.before, after: a._1.after }) : x)(t.constraints), o = (a) => J((g) => (_) => {
    const d = _.after, l = _.before, h = Ke(Ot, x, (p) => p === l, g), $ = Ke(Ot, x, (p) => p === d, g);
    if (h.tag === "Just" && $.tag === "Just" && h._1 > $._1) {
      const p = bf(Ot, x, h._1, g), m = (() => {
        if (p.tag === "Nothing")
          return g;
        if (p.tag === "Just")
          return p._1;
        f();
      })(), y = kf(Ot, x, $._1, l, m);
      if (y.tag === "Nothing")
        return m;
      if (y.tag === "Just")
        return y._1;
      f();
    }
    return g;
  })(a)(r), i = ac(Ft((a) => (g) => b(g.id, a))(e)), s = (a, g, _) => {
    const d = a.length;
    return J((l) => (h) => {
      const $ = g ? h - 1 | 0 : h + 1 | 0, p = $ >= 0 && $ < l._1.length ? T("Just", l._1[$]) : x;
      if (p.tag === "Just") {
        const m = h >= 0 && h < l._1.length ? T("Just", l._1[h]) : x;
        if (m.tag === "Just") {
          const y = Ci(Ft((L) => (I) => b(I, L))(p._1)), N = Ci(Ft((L) => (I) => b(I, L))(m._1)), v = g ? I2(p._1)(y)(N)(e)(i) : A2(p._1)(y)(N)(e)(i), w = J((L) => (I) => {
            const B = yt((X) => So(X.id)(v))(lt(g ? (X) => X.to.node === I._2 && Si(X.from.node)(y) : (X) => X.from.node === I._2 && Si(X.to.node)(y), e));
            if (B.length === 0)
              return { ...L, items: [...L.items, { n: I._2, key: x, origIdx: I._1 }] };
            const Y = Ei(24)(L.r);
            return {
              items: [
                ...L.items,
                {
                  n: I._2,
                  key: T("Just", (C2(B) + (et(Y._1) * 4172325152040912e-24 - 0.03500000014901161)) / et(B.length)),
                  origIdx: I._1
                }
              ],
              r: Y._2
            };
          })({ items: [], r: l._2 })(Ft(He)(m._1)), k = Me(
            Ot,
            x,
            h,
            F2(o(z((L) => L.n)(R2((() => {
              const L = w.items, I = (Y) => (X) => {
                let C = Y, F = X, U = !0, tt;
                for (; U; ) {
                  const q = C, Q = F;
                  if (q >= 0 && q < L.length) {
                    if (L[q].key.tag === "Just") {
                      U = !1, tt = L[q].key._1;
                      continue;
                    }
                    if (L[q].key.tag === "Nothing") {
                      C = q + 1 | 0, F = Q;
                      continue;
                    }
                    f();
                  }
                  U = !1, tt = Q;
                }
                return tt;
              };
              return ((Y) => (X) => (C) => {
                let F = Y, U = X, tt = C, q = !0, Q;
                for (; q; ) {
                  const E = F, S = U, O = tt;
                  if (E >= 0 && E < L.length) {
                    if (L[E].key.tag === "Just") {
                      F = E + 1 | 0, U = L[E].key._1, tt = [...O, { n: L[E].n, key: L[E].key._1, origIdx: L[E].origIdx }];
                      continue;
                    }
                    if (L[E].key.tag === "Nothing") {
                      const G = (S + I(E + 1 | 0)(S + 1)) / 2;
                      F = E + 1 | 0, U = G, tt = [...O, { n: L[E].n, key: G, origIdx: L[E].origIdx }];
                      continue;
                    }
                    f();
                  }
                  q = !1, Q = O;
                }
                return Q;
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
  }, u = J((a) => (g) => K(P)(g.from.node)()(K(P)(g.to.node)()(a)))(A)(e), c = J((a) => (g) => {
    if (a.result.crossings === 0)
      return a;
    const _ = (y) => (N) => (v) => (w) => {
      let k = y, L = N, I = v, B = w, Y = !0, X;
      for (; Y; ) {
        const C = k, F = L, U = I, tt = B;
        if (U === 0) {
          Y = !1, X = { layout: C, crossings: 0, random: tt };
          continue;
        }
        const q = s(C, F, tt), Q = ii(q._1)(e);
        if (Q < U) {
          k = q._1, L = !F, I = Q, B = q._2;
          continue;
        }
        Y = !1, X = { layout: C, crossings: U, random: q._2 };
      }
      return X;
    }, d = Ei(1)(a.result.random), l = d._1 !== 0, h = t.modelOrder.tag === "Leaf", $ = (a.firstTry || a.secondTry) && !h ? a.firstTry : l, p = (() => {
      if (!h) {
        const w = s(n, $, d._2);
        return _(w._1)(!$)(ii(w._1)(e))(w._2);
      }
      const y = $ ? 0 : P2(0)(n.length - 1 | 0), N = y >= 0 && y < n.length ? T("Just", n[y]) : x;
      if (N.tag === "Just" && N._1.length > 1) {
        const w = lt((k) => va(k)(u), N._1);
        if (w.length > 1) {
          const k = L2(d._2)(w), L = k._1, I = Me(
            Ot,
            x,
            y,
            o(J((B) => (Y) => va(Y)(u) ? B.idx >= 0 && B.idx < L.length ? { idx: B.idx + 1 | 0, result: [...B.result, L[B.idx]] } : { idx: B.idx, result: [...B.result, Y] } : { idx: B.idx, result: [...B.result, Y] })({ idx: 0, result: [] })(N._1).result),
            n
          );
          if (I.tag === "Just") {
            const B = s(I._1, $, k._2);
            return _(B._1)(!$)(ii(B._1)(e))(B._2);
          }
        }
      }
      const v = s(n, $, d._2);
      return _(v._1)(!$)(ii(v._1)(e))(v._2);
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
      random: yo(Of(E2(k2(1))._1)(Lo))(Eo)
    },
    firstTry: t.modelOrder.tag !== "Leaf",
    secondTry: !1
  })(It(1, t.iterations)).result;
  return n.length <= 0 || t.iterations <= 0 ? n : c.layout;
}, Q2 = (t) => t, Ta = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
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
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
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
      const u = P.compare(t)(s._3);
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
      const r = P.compare(n._1)(e._1);
      return r === "LT" ? yn : r === "GT" ? Nn : P.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), W2 = /* @__PURE__ */ nn(P)(Qt), D2 = (t) => (e) => {
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
}, H2 = /* @__PURE__ */ Q2("Greedy"), As = (t) => (n) => (e) => J((r) => (o) => {
  if (o.from.node === o.to.node)
    return r;
  if (o.from.node === n && !Ta(o.to.node)(r.marks)) {
    const i = Rn(o.to.node)(r.inDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = K(P)(o.to.node)(s)(r.inDeg);
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
  if (o.to.node === n && !Ta(o.from.node)(r.marks)) {
    const i = Rn(o.from.node)(r.outDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = K(P)(o.from.node)(s)(r.outDeg);
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
})({ ...e, remaining: lt((r) => r !== n, e.remaining) })(t), O2 = /* @__PURE__ */ J((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return K(P)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return K(P)(n._1.node)(0)(t);
    if (n._1.pin.tag === "LastLayer")
      return K(P)(n._1.node)(99999)(t);
  }
  return t;
})(A), og = (t) => (n) => (e) => {
  const r = Rn(n)(t), o = Rn(e)(t);
  return r.tag === "Just" && o.tag === "Just" && r._1 > o._1;
}, ig = (t) => (n) => (e) => (r) => {
  if (qr(e)(r.visited) || qr(e)(r.visiting))
    return r;
  const o = J(z2(t)(n)(e))({ ...r, visiting: K(P)(e)()(r.visiting) })((() => {
    const i = Rn(e)(n);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just")
      return i._1;
    f();
  })());
  return {
    ...o,
    visiting: $o(P)(e)(o.visiting),
    visited: K(P)(e)()(o.visited)
  };
}, z2 = (t) => (n) => (e) => (r) => (o) => og(t)(e)(o) ? { ...r, backEdges: K(Co)(b(e, o))()(r.backEdges) } : qr(o)(r.visiting) ? { ...r, backEdges: K(Co)(b(e, o))()(r.backEdges) } : qr(o)(r.visited) ? r : ig(t)(n)(o)(r), q2 = (t) => (n) => (e) => {
  const r = (d) => {
    let l = d, h = !0, $;
    for (; h; ) {
      const p = l, m = Bt((y) => x, (y) => (N) => T("Just", { head: y, tail: N }), p.sinks);
      if (m.tag === "Just") {
        l = As(e)(m._1.head)({
          ...p,
          sinks: m._1.tail,
          marks: K(P)(m._1.head)(p.nextRight)(p.marks),
          nextRight: p.nextRight - 1 | 0
        });
        continue;
      }
      if (m.tag === "Nothing") {
        const y = Bt((N) => x, (N) => (v) => T("Just", { head: N, tail: v }), p.sources);
        if (y.tag === "Just") {
          l = As(e)(y._1.head)({
            ...p,
            sources: y._1.tail,
            marks: K(P)(y._1.head)(p.nextLeft)(p.marks),
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
          }, v = kt((w) => (k) => {
            const L = st.compare(N(k))(N(w));
            return L === "EQ" ? st.compare((() => {
              const I = Rn(w)(n);
              if (I.tag === "Nothing")
                return 1e6;
              if (I.tag === "Just")
                return I._1;
              f();
            })())((() => {
              const I = Rn(k)(n);
              if (I.tag === "Nothing")
                return 1e6;
              if (I.tag === "Just")
                return I._1;
              f();
            })()) : L;
          })(p.remaining);
          if (0 < v.length) {
            const w = v[0];
            l = As(e)(w)({
              ...p,
              remaining: lt((k) => k !== w, p.remaining),
              marks: K(P)(w)(p.nextLeft)(p.marks),
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
  }, o = Fr(P.compare)([...z((d) => d.from.node)(e), ...z((d) => d.to.node)(e)]), i = lt((d) => d.from.node !== d.to.node, e), s = J((d) => (l) => Tt(P)(on)(l.to.node)(1)(d))(A)(i), u = J((d) => (l) => Tt(P)(on)(l.from.node)(1)(d))(A)(i), c = lt(
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
  ), g = o.length + 1 | 0, _ = J((d) => (l) => {
    const h = Rn(l)(d);
    return h.tag === "Just" && h._1 < 0 ? K(P)(l)(h._1 + g | 0)(d) : d;
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
  return J((d) => (l) => {
    if (l.from.node === l.to.node)
      return d;
    if (og(t)(l.from.node)(l.to.node))
      return K(Co)(b(l.from.node, l.to.node))()(d);
    const h = Rn(l.from.node)(_), $ = Rn(l.to.node)(_);
    return h.tag === "Just" && $.tag === "Just" && h._1 > $._1 ? K(Co)(b(l.from.node, l.to.node))()(d) : d;
  })(A)(e);
}, Y2 = /* @__PURE__ */ J((t) => (n) => Tt(P)(rn)(n.from.node)([n.to.node])(t))(A), X2 = (t) => (n) => {
  const e = Y2(n), r = Fr(P.compare)([...z((i) => i.from.node)(n), ...z((i) => i.to.node)(n)]), o = J((i) => (s) => K(P)(s.to.node)()(i))(A)(n);
  return J((i) => (s) => ig(t)(e)(s)(i))({
    visiting: A,
    visited: A,
    backEdges: A
  })([...lt((i) => !qr(i)(o), r), ...lt((i) => qr(i)(o), r)]).backEdges;
}, V2 = (t) => (n) => (e) => (r) => {
  const o = W2(Ft((u) => (c) => b(c, u))(n)), i = O2(e), s = (() => {
    if (t === "DepthFirst")
      return X2(i)(r);
    if (t === "Greedy")
      return q2(i)(o)(r);
    f();
  })();
  return {
    edges: z((u) => D2(b(u.from.node, u.to.node))(s) ? { ...u, from: u.to, to: u.from } : u)(r),
    reversedEdges: s
  };
}, sg = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, U2 = /* @__PURE__ */ J((t) => (n) => K(P)(n)()(t))(A), Pi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
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
}, K2 = /* @__PURE__ */ Q0(P), he = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, wa = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Fs = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = st.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, M2 = /* @__PURE__ */ nn(st)(Qt), j2 = (t) => (n) => Cn(P.compare, Sn, t, n), ug = /* @__PURE__ */ Ft((t) => (n) => ({ src: n.src, tgt: n.tgt, delta: 1, weight: 1, eid: t })), Z2 = (t) => J((n) => (e) => ({
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
          return A;
        if (o.tag === "Node")
          return zt("Node", o._1, o._2, o._3, o._4 + n.base | 0, r(o._5), r(o._6));
        f();
      };
      return r(e);
    })()
  ]
}))({ base: 0, result: [] })(t).result, ty = (t) => (n) => {
  const e = U2(t);
  return K2(t)(ug(lt((r) => Pi(r.src)(e) && Pi(r.tgt)(e), n)));
}, ny = (t) => (n) => {
  const e = J((o) => (i) => Tt(P)(rn)(i.tgt)([i.src])(Tt(P)(rn)(i.src)([
    i.tgt
  ])(o)))(A)(n), r = (o) => (i) => (s) => {
    let u = o, c = i, a = s, g = !0, _;
    for (; g; ) {
      const d = u, l = c, h = a, $ = Bt((p) => x, (p) => (m) => T("Just", { head: p, tail: m }), d);
      if ($.tag === "Nothing") {
        g = !1, _ = { nodes: h };
        continue;
      }
      if ($.tag === "Just") {
        if (Pi($._1.head)(l)) {
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
        ], c = K(P)($._1.head)()(l), a = [...h, $._1.head];
        continue;
      }
      f();
    }
    return _;
  };
  return J((o) => (i) => {
    if (Pi(i)(o.visited))
      return o;
    const s = r([i])(o.visited)([]);
    return {
      ...o,
      visited: J((u) => (c) => K(P)(c)()(u))(o.visited)(s.nodes),
      components: [...o.components, s.nodes]
    };
  })({ visited: A, components: [] })(t).components;
}, ey = (t) => (n) => (e) => {
  const r = J((i) => (s) => Tt(P)(on)(s.tgt)(1)(i))(A)(n), o = J((i) => (s) => Tt(P)(on)(s.src)(1)(i))(A)(n);
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
      mIn: wa(y.mIn)((() => {
        const v = he(s)(_), w = he(N.src)(_);
        return (() => {
          if (v.tag === "Nothing")
            return 0;
          if (v.tag === "Just")
            return v._1;
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
        const v = he(N.tgt)(_), w = he(s)(_);
        return (() => {
          if (v.tag === "Nothing")
            return 0;
          if (v.tag === "Just")
            return v._1;
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
      const v = Fs(N)(i.filling), w = (() => {
        if (v.tag === "Nothing")
          return 0;
        if (v.tag === "Just")
          return v._1;
        f();
      })();
      return w < y.bestFill ? { best: N, bestFill: w } : y;
    })({
      best: g,
      bestFill: (() => {
        const y = Fs(g)(i.filling);
        if (y.tag === "Nothing")
          return 0;
        if (y.tag === "Just")
          return y._1;
        f();
      })()
    })(It($, p));
    return m.best === g ? i : {
      layers: K(P)(s)(m.best)(i.layers),
      filling: K(st)(g)((() => {
        const y = Fs(g)(i.filling);
        if (y.tag === "Nothing")
          return -1;
        if (y.tag === "Just")
          return y._1 - 1 | 0;
        f();
      })())(K(st)(m.best)(m.bestFill + 1 | 0)(i.filling))
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
      J((i) => (s) => sg(i)((() => {
        const u = he(s)(e);
        if (u.tag === "Nothing")
          return 0;
        if (u.tag === "Just")
          return u._1;
        f();
      })()))(0)(t)
    )))
  })(t).layers;
}, ry = (t) => (n) => ey(t)(ug(n))(J(j2)(A)(Z2(z((e) => ty(e)(n))(ny(t)(n))))), oy = (t) => t, lr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Gi = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, cg = /* @__PURE__ */ (() => {
  const t = Xn.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), iy = /* @__PURE__ */ oy("NetworkSimplex"), sy = (t) => (n) => J((e) => (r) => {
  const o = J(Gi)(0)(yt((i) => lr(i)(e))(r));
  return J((i) => (s) => K(P)(s)(o)(i))(e)(r);
})(n)(t), uy = (t) => (n) => ({
  layers: z((e) => lt(
    (r) => {
      const o = lr(r)(n);
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
          return r(o._5, qt("Cons", o._4, r(o._6, i)));
        f();
      };
      return r(n, Yt);
    })())
  )),
  nodeLayer: n
}), cy = (t) => (n) => (e) => {
  const r = J((o) => (i) => K(P)(i)(!0)(o))(A)(n);
  return J((o) => (i) => K(P)(i._1)(i._2)(o))(ry(n)(yt((o) => o.from.node === o.to.node || (() => {
    const i = lr(o.from.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() || (() => {
    const i = lr(o.to.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() ? x : T("Just", { src: o.from.node, tgt: o.to.node }))(t)))(cg(e));
}, ay = (t) => (n) => (e) => (r) => {
  const o = (c) => (a) => {
    const g = lr(a)(c);
    if (g.tag === "Just")
      return c;
    if (g.tag === "Nothing") {
      const _ = lt(
        (l) => l !== a,
        (() => {
          const l = lr(a)(t);
          if (l.tag === "Nothing")
            return [];
          if (l.tag === "Just")
            return l._1;
          f();
        })()
      ), d = J(o)(c)(_);
      return K(P)(a)(1 + J(Gi)(0)(yt((l) => lr(l)(d))(_)) | 0)(d);
    }
    f();
  }, i = J(o)(A)(e), u = ((c) => (a) => {
    let g = c, _ = a, d = !0, l;
    for (; d; ) {
      const h = g, $ = _;
      if ($.tag === "Nil") {
        d = !1, l = h;
        continue;
      }
      if ($.tag === "Cons") {
        g = Gi(h)($._1), _ = $._2;
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
  return J((c) => (a) => K(P)(a._1)(a._2)(c))((() => {
    const c = (a) => {
      if (a.tag === "Leaf")
        return A;
      if (a.tag === "Node")
        return zt("Node", a._1, a._2, a._3, u - a._4 | 0, c(a._5), c(a._6));
      f();
    };
    return c(i);
  })())(cg(r));
}, fy = /* @__PURE__ */ J((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return K(P)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return K(P)(n._1.node)(0)(t);
  }
  return t;
})(A), gy = /* @__PURE__ */ J((t) => (n) => Tt(P)(rn)(n.to.node)([n.from.node])(t))(A), ly = /* @__PURE__ */ J((t) => (n) => Tt(P)(rn)(n.from.node)([n.to.node])(t))(A), _y = (t) => (n) => (e) => (r) => {
  const o = ly(e), i = gy(e), s = fy(n);
  return uy(r)(sy(yt((u) => u.tag === "SameLayer" ? T("Just", u._1.nodes) : x)(n))((() => {
    if (t === "LongestPath")
      return ay(o)(i)(r)(s);
    if (t === "NetworkSimplex")
      return cy(e)(r)(s);
    f();
  })()));
}, dy = /* @__PURE__ */ nn(P)(Qt), hy = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
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
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
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
}, Po = /* @__PURE__ */ nn(P)(Qt), py = /* @__PURE__ */ nn(P)(Qt), La = /* @__PURE__ */ (() => {
  const t = z((n) => ({ start: n.end, end: n.start, direction: n.direction }));
  return (n) => Ln(t(n));
})(), $y = (t) => (n) => (e) => (r) => {
  const o = dy(z((s) => b(s.edge, s))(r)), i = (s) => 0 < s.nodes.length && (() => {
    const u = hy(s.edgeId)(e);
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
}, my = { layers: [], edges: [], chains: [] }, yy = {
  nodeGap: 3,
  layerGap: 2,
  iterations: 8,
  layerer: iy,
  cycleBreaker: H2,
  compactPostRouting: !1
}, Ny = (t) => ({
  pos: b(0, 0),
  size: b(
    J((n) => (e) => ba(n)(e.position._1 + e.size._1))(0)(t),
    J((n) => (e) => ba(n)(e.position._2 + e.size._2))(0)(t)
  )
}), xy = (t) => (n) => (e) => {
  const r = Po(z((a) => b(a.id, a.ports))(n.nodes)), o = lt((a) => mn(3)(a.node) !== "$d:", e.placements), i = $y(e.withDummies.chains)(e.acyclic.reversedEdges)(py(z((a) => b(
    a.id,
    b(a.from.node, a.to.node)
  ))(n.edges)))(Ym(e.withDummies.edges)(e.placements)(r)(e.withDummies.chains)(j0(e.ordered)(lt(
    (a) => a.from.node !== a.to.node,
    e.withDummies.edges
  ))((() => {
    const a = (g) => {
      if (g.tag === "Leaf")
        return A;
      if (g.tag === "Node")
        return zt("Node", g._1, g._2, g._3, b(g._4._1 * 4, g._4._2), a(g._5), a(g._6));
      f();
    };
    return a(Po(z((g) => b(g.id, g.size))(n.nodes)));
  })()))), s = t.compactPostRouting ? dm()({
    nodes: o,
    edges: n.edges,
    paths: i,
    ports: r
  }) : { nodes: o, edges: i }, u = z((a) => {
    const g = bo(ko(a.segments));
    return { ...a, segments: g, bends: wn((_) => (d) => _.end, g, bt(1, g.length, g)) };
  })(s.edges), c = Ft((a) => (g) => ({ ...g, jumps: Zm(a)(g)(u) }))(u);
  return { nodes: s.nodes, edges: c, boundingBox: Ny(s.nodes), metrics: Wp(s.nodes)(c)(0) };
}, Jy = (t) => (n) => (e) => {
  const r = Po(z((i) => b(i.id, i.size))(n.nodes)), o = {
    ...e,
    placements: w2({ nodeGap: t.nodeGap, layerGap: t.layerGap })(n.constraints)(e.ordered)(r)(Po(z((i) => b(
      i.id,
      i.ports
    ))(n.nodes)))(e.withDummies.edges)(e.withDummies.chains)(j0(e.ordered)(e.withDummies.edges)((() => {
      const i = (s) => {
        if (s.tag === "Leaf")
          return A;
        if (s.tag === "Node")
          return zt("Node", s._1, s._2, s._3, b(s._4._1 * 4, s._4._2), i(s._5), i(s._6));
        f();
      };
      return i(r);
    })()))
  };
  return { pipeline: o, result: xy(t)(n)(o) };
}, vy = (t) => (n) => (e) => Jy(t)(n)({
  ...e,
  ordered: B2({
    iterations: t.iterations,
    constraints: n.constraints,
    modelOrder: Po(Ft((r) => (o) => b(o.id, r))(n.nodes))
  })(e.withDummies.layers)(e.withDummies.edges)
}), Ty = (t) => (n) => (e) => vy(t)(n)({
  ...e,
  withDummies: t2(e.layered.nodeLayer)(e.acyclic.edges)(e.layered.layers)
}), wy = (t) => (n) => {
  const e = z((o) => o.id)(n.nodes), r = V2(t.cycleBreaker)(e)(n.constraints)(n.edges);
  return Ty(t)(n)({
    acyclic: r,
    layered: _y(t.layerer)(n.constraints)(r.edges)(e),
    withDummies: my,
    ordered: [],
    placements: []
  });
}, us = (t) => t, ky = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, gu = /* @__PURE__ */ us("TopSide"), lu = /* @__PURE__ */ us("BottomSide"), _u = /* @__PURE__ */ us("LeftSide"), du = /* @__PURE__ */ us("RightSide"), by = (t) => {
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
  const r = ky(t.h * 0.12)(t.w * 0.2), o = t.w / 2;
  return (n < 0 ? t.y + r : t.y + t.h - r) + n * r * En(by((() => {
    const i = (e - (t.x + o)) / o;
    return 1 - i * i;
  })()));
}, ze = (t) => (n) => (e) => (r) => {
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
      o = Ie, i = _, s = d, u = l;
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
    o = Ie, i = _, s = d, u = l;
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
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
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
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ly = /* @__PURE__ */ (() => {
  const t = Xn.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), cs = /* @__PURE__ */ nn(P)(Qt), Ey = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
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
      const u = P.compare(t)(s._3);
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
}, Cy = /* @__PURE__ */ J((t) => (n) => K(P)(n)()(t))(A), Py = /* @__PURE__ */ J((t) => (n) => K(P)(n)()(t))(A), as = nr.traverse(Bo), Ii = /* @__PURE__ */ nn(P)(Qt), Gy = (t) => (n) => Cn(P.compare, Sn, t, n), Iy = /* @__PURE__ */ J((t) => (n) => K(P)(n)()(t))(A), Ay = /* @__PURE__ */ nn(P)(Qt), Fy = (t) => (n) => Cn(P.compare, Sn, t, n), Ry = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
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
}, By = (t) => (n) => ({
  ...n,
  edges: cs(z((e) => b(
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
            const u = Bt((c) => x, (c) => (a) => T("Just", { head: c, tail: a }), e._2);
            if (u.tag === "Nothing")
              return e._2;
            if (u.tag === "Just") {
              const c = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, a = Sa(c)(u._1.head);
              return [
                (() => {
                  if (a === "TopSide")
                    return { ...u._1.head, y: ze(i._1.shape)(c)(gu)(u._1.head.x) };
                  if (a === "BottomSide")
                    return { ...u._1.head, y: ze(i._1.shape)(c)(lu)(u._1.head.x) };
                  if (a === "LeftSide")
                    return { ...u._1.head, x: ze(i._1.shape)(c)(_u)(u._1.head.y) };
                  if (a === "RightSide")
                    return { ...u._1.head, x: ze(i._1.shape)(c)(du)(u._1.head.y) };
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
          const u = qi(s);
          if (u.tag === "Nothing")
            return s;
          if (u.tag === "Just")
            return Rt(u._1.init)((() => {
              const c = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, a = Sa(c)(u._1.last);
              if (a === "TopSide")
                return { ...u._1.last, y: ze(o._1.shape)(c)(gu)(u._1.last.x) };
              if (a === "BottomSide")
                return { ...u._1.last, y: ze(o._1.shape)(c)(lu)(u._1.last.x) };
              if (a === "LeftSide")
                return { ...u._1.last, x: ze(o._1.shape)(c)(_u)(u._1.last.y) };
              if (a === "RightSide")
                return { ...u._1.last, x: ze(o._1.shape)(c)(du)(u._1.last.y) };
              f();
            })());
        }
      }
      f();
    })()
  ))(Ly(n.edges)))
}), Qy = (t) => (n) => (e) => {
  const r = Kt((o) => o.id === e)(t.graph.edges);
  if (r.tag === "Just")
    return T("Just", r._1);
  if (r.tag === "Nothing")
    return fc(e)(n);
  f();
}, Wy = (t) => (n) => (e) => (r) => ({
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
      return Ie;
    if (o.tag === "Just")
      return o._1;
    f();
  })()
}), Dy = (t) => ({ id: t, size: b(1, 1), ports: [], label: T("Just", t), shape: Ie }), Hy = (t) => (n) => (e) => (r) => b(r.node, Wy(t)(n)(e)(r)), ag = (t) => {
  const n = ns(`
`)(t);
  return n.length === 0 ? [""] : n;
}, fg = (t) => {
  const n = (e, r) => {
    if (e.tag === "Leaf")
      return r;
    if (e.tag === "Node")
      return n(e._5, qt("Cons", e._4, n(e._6, r)));
    f();
  };
  return Lt(Xt.foldr, n(t.interiors, Yt));
}, Oy = (t) => cs(yt((n) => T(
  "Just",
  b(n.edge, { id: n.edge, from: { node: n.from, port: x }, to: { node: n.to, port: x } })
))(Jt(t.scenes)((n) => n.tag === "DataFlow" ? yt((e) => e.kind.tag === "SendToken" ? T("Just", e.kind._1) : x)(n._1.events) : []))), gg = (t) => {
  const n = Z1(t), e = lt((o) => Ey(o.id)(n.nodes), t.graph.nodes), r = lt((o) => Sy(o.id)(n.edges), t.graph.edges);
  return {
    nodes: [
      ...e,
      ...z(Dy)(Lt(
        On.foldr,
        Ge(P.compare, n.nodes, Cy(z((o) => o.id)(e)))
      ))
    ],
    edges: [
      ...r,
      ...yt(Qy(t)(Oy(t)))(Lt(
        On.foldr,
        Ge(P.compare, n.edges, Py(z((o) => o.id)(r)))
      ))
    ],
    constraints: t.graph.constraints
  };
}, zy = (t) => {
  const n = as((e) => {
    const r = J0(v0)((() => {
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
  })(gg(t).nodes);
  return () => {
    const e = n();
    return Ii(e);
  };
}, lg = (t) => {
  const n = zy(t);
  return () => {
    const e = n(), r = as(lg)(fg(t))();
    return J(Gy)(e)(r);
  };
}, qy = (t) => (n) => {
  const e = Bt((r) => x, (r) => (o) => T("Just", { head: r, tail: o }), n.segments);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ x: e._1.head.start._1 * t, y: e._1.head.start._2 * t }, ...z((r) => ({ x: r.end._1 * t, y: r.end._2 * t }))([e._1.head, ...e._1.tail])];
  f();
}, Yy = (t) => (n) => b(n.edge, qy(t)(n)), Xy = (t) => (n) => (e) => (r) => ({
  nodes: Ii(z(Hy(et(4) * t)(n)(e))(r.nodes)),
  edges: cs(z(Yy(t))(r.edges)),
  chipExtras: A
}), Vy = (t) => J((n) => (e) => {
  if (e.tag === "Structural")
    return n;
  if (e.tag === "DataFlow")
    return J((r) => (o) => {
      if (o.kind.tag === "SendToken")
        return J((i) => (s) => K(P)(s)()(i))(r)(o.kind._1.labels);
      if (o.kind.tag === "FillNodeWithoutTransition")
        return J((i) => (s) => K(P)(s)()(i))(r)(o.kind._1.labels);
      f();
    })(n)(e._1.events);
  if (e.tag === "EnterNode" || e.tag === "ExitNode")
    return n;
  f();
})(A)(t.scenes), Uy = (t) => {
  const n = as((e) => {
    const r = J0(v0)(e);
    return () => {
      const o = r();
      return b(e, { labelW: o, charCount: Ze(zr(e)), lineCount: 1 });
    };
  })(Lt(
    On.foldr,
    Iy(Jt(Lt(On.foldr, Vy(t)))(ag))
  ));
  return () => {
    const e = n();
    return Ay(e);
  };
}, _g = (t) => {
  const n = Uy(t);
  return () => {
    const e = n(), r = as(_g)(fg(t))();
    return J(Fy)(e)(r);
  };
}, Ky = et(4) * 8, My = (t) => (n) => {
  const e = Rp(Ky)(t)(Fp(Ap)(gg(n)));
  return By(cs(z((r) => b(r.id, b(r.from.node, r.to.node)))(e.edges)))(Xy(8)(Ii(z((r) => b(
    r.id,
    (() => {
      if (r.label.tag === "Just")
        return r.label._1;
      if (r.label.tag === "Nothing")
        return r.id;
      f();
    })()
  ))(e.nodes)))(Ii(z((r) => b(r.id, r.shape))(e.nodes)))(wy(yy)(e).result));
}, jy = (t) => Jt(t.scenes)((n) => {
  if (n.tag === "Structural")
    return [];
  if (n.tag === "DataFlow")
    return n._1.events;
  if (n.tag === "EnterNode")
    return [];
  if (n.tag === "ExitNode")
    return [];
  f();
}), Zy = (t) => (n) => (e) => {
  const r = (o) => {
    const i = yt((s) => {
      const u = Ry(s)(t);
      return u.tag === "Just" ? T("Just", { w: u._1.labelW + 28, h: et(Sp(1)(u._1.lineCount)) * 13.2 + 12 }) : x;
    })(Jt(o)(ag));
    return i.length === 0 ? x : T(
      "Just",
      { w: J(Ca)(0)(z((s) => s.w)(i)), h: J(Ca)(0)(z((s) => s.h)(i)) }
    );
  };
  return J((o) => (i) => {
    if (i.kind.tag === "SendToken") {
      const s = fc(i.kind._1.edge)(e.edges), u = r(i.kind._1.labels);
      if (u.tag === "Just" && s.tag === "Just") {
        const c = u._1;
        return Tt(P)(rn)(i.kind._1.edge)(z((a) => ({ x: a.x + 14 + c.w, y: a.y - 6 - 8 - c.h }))(s._1))(o);
      }
      return o;
    }
    if (i.kind.tag === "FillNodeWithoutTransition") {
      const s = Go(i.kind._1.node)(e.nodes), u = r(i.kind._1.labels);
      return u.tag === "Just" && s.tag === "Just" ? Tt(P)(rn)("__fill__:" + i.kind._1.node)((() => {
        const c = s._1.y - u._1.h - 14, a = s._1.x + s._1.w / 2, g = a - u._1.w / 2, _ = a + u._1.w / 2, d = s._1.y - 14;
        return [{ x: g, y: c }, { x: _, y: c }, { x: g, y: d }, { x: _, y: d }];
      })())(o) : o;
    }
    f();
  })(A)(jy(n));
}, dg = (t) => (n) => (e) => ({
  layout: (() => {
    const r = My(t)(e);
    return { ...r, chipExtras: Zy(n)(e)(r) };
  })(),
  interiors: (() => {
    const r = dg(t)(n), o = (i) => {
      if (i.tag === "Leaf")
        return A;
      if (i.tag === "Node")
        return zt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
      f();
    };
    return o(e.interiors);
  })()
}), Pa = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
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
          return K(P)(u._3)({ x: a.x + g * r, y: a.y + _ * r, vx: g, vy: _ })(o(s, u._5));
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
                return K(P)(c._3)({ ...c._4, x: g._1.x, y: g._1.y })(a);
              if (g.tag === "Nothing")
                return K(P)(c._3)(c._4)(a);
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
  function N(G, D, W, j) {
    this.tag = G, this._1 = D, this._2 = W, this._3 = j;
  }
  function v(G) {
    var D = function(W, j, V) {
      return new N(G, W, j, V);
    };
    return D.tag = G, D;
  }
  function w(G) {
    return new N(n, void 0);
  }
  function k(G) {
    try {
      G();
    } catch (D) {
      setTimeout(function() {
        throw D;
      }, 0);
    }
  }
  function L(G, D, W) {
    try {
      return D(W());
    } catch (j) {
      return G(j);
    }
  }
  function I(G, D, W) {
    try {
      return D(W)();
    } catch (j) {
      return W(G(j))(), w;
    }
  }
  var B = (function() {
    var G = 1024, D = 0, W = 0, j = new Array(G), V = !1;
    function H() {
      var rt;
      for (V = !0; D !== 0; )
        D--, rt = j[W], j[W] = void 0, W = (W + 1) % G, rt();
      V = !1;
    }
    return {
      isDraining: function() {
        return V;
      },
      enqueue: function(rt) {
        var Z;
        D === G && (Z = V, H(), V = Z), j[(W + D) % G] = rt, D++, V || H();
      }
    };
  })();
  function Y(G) {
    var D = {}, W = 0, j = 0;
    return {
      register: function(V) {
        var H = W++;
        V.onComplete({
          rethrow: !0,
          handler: function(rt) {
            return function() {
              j--, delete D[H];
            };
          }
        })(), D[H] = V, j++;
      },
      isEmpty: function() {
        return j === 0;
      },
      killAll: function(V, H) {
        return function() {
          if (j === 0)
            return H();
          var rt = 0, Z = {};
          function it(at) {
            Z[at] = D[at].kill(V, function(_t) {
              return function() {
                delete Z[at], rt--, G.isLeft(_t) && G.fromLeft(_t) && setTimeout(function() {
                  throw G.fromLeft(_t);
                }, 0), rt === 0 && H();
              };
            })();
          }
          for (var nt in D)
            D.hasOwnProperty(nt) && (rt++, it(nt));
          return D = {}, W = 0, j = 0, function(at) {
            return new N(o, function() {
              for (var _t in Z)
                Z.hasOwnProperty(_t) && Z[_t]();
            });
          };
        };
      }
    };
  }
  var X = 0, C = 1, F = 2, U = 3, tt = 4, q = 5, Q = 6;
  function E(G, D, W) {
    var j = 0, V = X, H = W, rt = null, Z = null, it = null, nt = null, at = null, _t = 0, Dt = 0, vt = null, Wt = !0;
    function $t(M) {
      for (var ut, gt, dt; ; )
        switch (ut = null, gt = null, dt = null, V) {
          case F:
            V = C;
            try {
              H = it(H), nt === null ? it = null : (it = nt._1, nt = nt._2);
            } catch (At) {
              V = q, rt = G.left(At), H = null;
            }
            break;
          case U:
            G.isLeft(H) ? (V = q, rt = H, H = null) : it === null ? V = q : (V = F, H = G.fromRight(H));
            break;
          case C:
            switch (H.tag) {
              case s:
                it && (nt = new N(l, it, nt)), it = H._2, V = C, H = H._1;
                break;
              case n:
                it === null ? (V = q, H = G.right(H._1)) : (V = F, H = H._1);
                break;
              case o:
                V = U, H = L(G.left, G.right, H._1);
                break;
              case i:
                V = tt, H = I(G.left, H._1, function(At) {
                  return function() {
                    j === M && (j++, B.enqueue(function() {
                      j === M + 1 && (V = U, H = At, $t(j));
                    }));
                  };
                });
                return;
              case e:
                V = q, rt = G.left(H._1), H = null;
                break;
              // Enqueue the Catch so that we can call the error handler later on
              // in case of an exception.
              case r:
                it === null ? at = new N(l, H, at, Z) : at = new N(l, H, new N(l, new N(h, it, nt), at, Z), Z), it = null, nt = null, V = C, H = H._1;
                break;
              // Enqueue the Bracket so that we can call the appropriate handlers
              // after resource acquisition.
              case u:
                _t++, it === null ? at = new N(l, H, at, Z) : at = new N(l, H, new N(l, new N(h, it, nt), at, Z), Z), it = null, nt = null, V = C, H = H._1;
                break;
              case c:
                V = U, ut = E(G, D, H._2), D && D.register(ut), H._1 && ut.run(), H = G.right(ut);
                break;
              case a:
                V = C, H = O(G, D, H._1);
                break;
            }
            break;
          case q:
            if (it = null, nt = null, at === null)
              V = Q, H = Z || rt || H;
            else
              switch (ut = at._3, dt = at._1, at = at._2, dt.tag) {
                // We cannot recover from an unmasked interrupt. Otherwise we should
                // continue stepping, or run the exception handler if an exception
                // was raised.
                case r:
                  Z && Z !== ut && _t === 0 ? V = q : rt && (V = C, H = dt._2(G.fromLeft(rt)), rt = null);
                  break;
                // We cannot resume from an unmasked interrupt or exception.
                case h:
                  Z && Z !== ut && _t === 0 || rt ? V = q : (it = dt._1, nt = dt._2, V = F, H = G.fromRight(H));
                  break;
                // If we have a bracket, we should enqueue the handlers,
                // and continue with the success branch only if the fiber has
                // not been interrupted. If the bracket acquisition failed, we
                // should not run either.
                case u:
                  _t--, rt === null && (gt = G.fromRight(H), at = new N(l, new N($, dt._2, gt), at, ut), (Z === ut || _t > 0) && (V = C, H = dt._3(gt)));
                  break;
                // Enqueue the appropriate handler. We increase the bracket count
                // because it should not be cancelled.
                case $:
                  at = new N(l, new N(m, H, rt), at, Z), V = C, Z && Z !== ut && _t === 0 ? H = dt._1.killed(G.fromLeft(Z))(dt._2) : rt ? H = dt._1.failed(G.fromLeft(rt))(dt._2) : H = dt._1.completed(G.fromRight(H))(dt._2), rt = null, _t++;
                  break;
                case p:
                  _t++, at = new N(l, new N(m, H, rt), at, Z), V = C, H = dt._1;
                  break;
                case m:
                  _t--, V = q, H = dt._1, rt = dt._2;
                  break;
              }
            break;
          case Q:
            for (var Nt in vt)
              vt.hasOwnProperty(Nt) && (Wt = Wt && vt[Nt].rethrow, k(vt[Nt].handler(H)));
            vt = null, Z && rt ? setTimeout(function() {
              throw G.fromLeft(rt);
            }, 0) : G.isLeft(H) && Wt && setTimeout(function() {
              if (Wt)
                throw G.fromLeft(H);
            }, 0);
            return;
          case X:
            V = C;
            break;
          case tt:
            return;
        }
    }
    function xt(M) {
      return function() {
        if (V === Q)
          return Wt = Wt && M.rethrow, M.handler(H)(), function() {
          };
        var ut = Dt++;
        return vt = vt || {}, vt[ut] = M, function() {
          vt !== null && delete vt[ut];
        };
      };
    }
    function mt(M, ut) {
      return function() {
        if (V === Q)
          return ut(G.right(void 0))(), function() {
          };
        var gt = xt({
          rethrow: !1,
          handler: function() {
            return ut(G.right(void 0));
          }
        })();
        switch (V) {
          case X:
            Z = G.left(M), V = Q, H = Z, $t(j);
            break;
          case tt:
            Z === null && (Z = G.left(M)), _t === 0 && (V === tt && (at = new N(l, new N(p, H(M)), at, Z)), V = q, H = null, rt = null, $t(++j));
            break;
          default:
            Z === null && (Z = G.left(M)), _t === 0 && (V = q, H = null, rt = null);
        }
        return gt;
      };
    }
    function ot(M) {
      return function() {
        var ut = xt({
          rethrow: !1,
          handler: M
        })();
        return V === X && $t(j), ut;
      };
    }
    return {
      kill: mt,
      join: ot,
      onComplete: xt,
      isSuspended: function() {
        return V === X;
      },
      run: function() {
        V === X && (B.isDraining() ? $t(j) : B.enqueue(function() {
          $t(j);
        }));
      }
    };
  }
  function S(G, D, W, j) {
    var V = 0, H = {}, rt = 0, Z = {}, it = new Error("[ParAff] Early exit"), nt = null, at = t;
    function _t(xt, mt, ot) {
      var M = mt, ut = null, gt = null, dt = 0, Nt = {}, At, Vt;
      t: for (; ; )
        switch (At = null, M.tag) {
          case y:
            if (M._3 === t && (At = H[M._1], Nt[dt++] = At.kill(xt, function(Pn) {
              return function() {
                dt--, dt === 0 && ot(Pn)();
              };
            })), ut === null)
              break t;
            M = ut._2, gt === null ? ut = null : (ut = gt._1, gt = gt._2);
            break;
          case g:
            M = M._2;
            break;
          case _:
          case d:
            ut && (gt = new N(l, ut, gt)), ut = M, M = M._1;
            break;
        }
      if (dt === 0)
        ot(G.right(void 0))();
      else
        for (Vt = 0, At = dt; Vt < At; Vt++)
          Nt[Vt] = Nt[Vt]();
      return Nt;
    }
    function Dt(xt, mt, ot) {
      var M, ut, gt, dt, Nt, At;
      for (G.isLeft(xt) ? (M = xt, ut = null) : (ut = xt, M = null); ; ) {
        if (gt = null, dt = null, Nt = null, At = null, nt !== null)
          return;
        if (mt === null) {
          j(M || ut)();
          return;
        }
        if (mt._3 !== t)
          return;
        switch (mt.tag) {
          case g:
            M === null ? (mt._3 = G.right(mt._1(G.fromRight(ut))), ut = mt._3) : mt._3 = M;
            break;
          case _:
            if (gt = mt._1._3, dt = mt._2._3, M) {
              if (mt._3 = M, Nt = !0, At = rt++, Z[At] = _t(it, M === gt ? mt._2 : mt._1, function() {
                return function() {
                  delete Z[At], Nt ? Nt = !1 : ot === null ? Dt(M, null, null) : Dt(M, ot._1, ot._2);
                };
              }), Nt) {
                Nt = !1;
                return;
              }
            } else {
              if (gt === t || dt === t)
                return;
              ut = G.right(G.fromRight(gt)(G.fromRight(dt))), mt._3 = ut;
            }
            break;
          case d:
            if (gt = mt._1._3, dt = mt._2._3, gt === t && G.isLeft(dt) || dt === t && G.isLeft(gt))
              return;
            if (gt !== t && G.isLeft(gt) && dt !== t && G.isLeft(dt))
              M = ut === gt ? dt : gt, ut = null, mt._3 = M;
            else if (mt._3 = ut, Nt = !0, At = rt++, Z[At] = _t(it, ut === gt ? mt._2 : mt._1, function() {
              return function() {
                delete Z[At], Nt ? Nt = !1 : ot === null ? Dt(ut, null, null) : Dt(ut, ot._1, ot._2);
              };
            }), Nt) {
              Nt = !1;
              return;
            }
            break;
        }
        ot === null ? mt = null : (mt = ot._1, ot = ot._2);
      }
    }
    function vt(xt) {
      return function(mt) {
        return function() {
          delete H[xt._1], xt._3 = mt, Dt(mt, xt._2._1, xt._2._2);
        };
      };
    }
    function Wt() {
      var xt = C, mt = W, ot = null, M = null, ut, gt;
      t: for (; ; )
        switch (ut = null, gt = null, xt) {
          case C:
            switch (mt.tag) {
              case g:
                ot && (M = new N(l, ot, M)), ot = new N(g, mt._1, t, t), mt = mt._2;
                break;
              case _:
                ot && (M = new N(l, ot, M)), ot = new N(_, t, mt._2, t), mt = mt._1;
                break;
              case d:
                ot && (M = new N(l, ot, M)), ot = new N(d, t, mt._2, t), mt = mt._1;
                break;
              default:
                gt = V++, xt = q, ut = mt, mt = new N(y, gt, new N(l, ot, M), t), ut = E(G, D, ut), ut.onComplete({
                  rethrow: !1,
                  handler: vt(mt)
                })(), H[gt] = ut, D && D.register(ut);
            }
            break;
          case q:
            if (ot === null)
              break t;
            ot._1 === t ? (ot._1 = mt, xt = C, mt = ot._2, ot._2 = t) : (ot._2 = mt, mt = ot, M === null ? ot = null : (ot = M._1, M = M._2));
        }
      for (at = mt, gt = 0; gt < V; gt++)
        H[gt].run();
    }
    function $t(xt, mt) {
      nt = G.left(xt);
      var ot;
      for (var M in Z)
        if (Z.hasOwnProperty(M)) {
          ot = Z[M];
          for (M in ot)
            ot.hasOwnProperty(M) && ot[M]();
        }
      Z = null;
      var ut = _t(xt, at, mt);
      return function(gt) {
        return new N(i, function(dt) {
          return function() {
            for (var Nt in ut)
              ut.hasOwnProperty(Nt) && ut[Nt]();
            return w;
          };
        });
      };
    }
    return Wt(), function(xt) {
      return new N(i, function(mt) {
        return function() {
          return $t(xt, mt);
        };
      });
    };
  }
  function O(G, D, W) {
    return new N(i, function(j) {
      return function() {
        return S(G, D, W, j);
      };
    });
  }
  return N.EMPTY = t, N.Pure = v(n), N.Throw = v(e), N.Catch = v(r), N.Sync = v(o), N.Async = v(i), N.Bind = v(s), N.Bracket = v(u), N.Fork = v(c), N.Seq = v(a), N.ParMap = v(g), N.ParApply = v(_), N.ParAlt = v(d), N.Fiber = E, N.Supervisor = Y, N.Scheduler = B, N.nonCanceler = w, N;
})();
let Rs = null;
function tN() {
  return Rs || (typeof document > "u" ? null : Rs = document.createElement("canvas").getContext("2d"));
}
const Bs = /* @__PURE__ */ new Map();
function hg(t, n, e, r, o, i) {
  const s = `${e} ${n}px ${t}`, u = s + "|" + r;
  if (Bs.has(u)) return Bs.get(u);
  const c = tN();
  if (!c) return i;
  c.font = s;
  const a = o(c.measureText(r)), g = typeof document < "u" ? document.fonts : null;
  if (!g || g.check(s)) Bs.set(u, a);
  else if (g && g.load)
    try {
      g.load(s);
    } catch {
    }
  return a;
}
const nN = (t, n, e, r) => hg(t, n, e, r, (o) => o.width, -1), eN = (t, n, e, r) => hg(
  t,
  n,
  e,
  r,
  (o) => ({ ascent: o.actualBoundingBoxAscent, descent: o.actualBoundingBoxDescent }),
  { ascent: -1, descent: -1 }
), pg = (t) => (n) => {
  const e = nN(t.family, t.size, t.weight, zr(n));
  return e < 0 ? et(os(n).length) * t.size * 0.62 : e;
}, $g = (t) => (n) => {
  const e = eN(t.family, t.size, t.weight, zr(n));
  return e.ascent < 0 ? { ascent: t.size * 0.72, descent: t.size * 0.2 } : e;
}, mg = (t) => t, yg = (t) => t, fs = (t) => t, Ng = (t) => t, rN = (t) => t, xg = (t) => t, Jg = (t) => t, oN = /* @__PURE__ */ Jg("BaselineTop"), Yr = /* @__PURE__ */ Jg("BaselineMiddle"), pu = /* @__PURE__ */ xg("AlignLeft"), gs = /* @__PURE__ */ xg("AlignCenter"), vn = /* @__PURE__ */ rN("RoundJoin"), le = /* @__PURE__ */ Ng("ButtCap"), De = /* @__PURE__ */ Ng("RoundCap"), iN = /* @__PURE__ */ fs("LayerPolyOut"), sN = /* @__PURE__ */ fs("LayerPolyIn"), uN = /* @__PURE__ */ fs("LayerNodeMask"), cN = /* @__PURE__ */ fs("LayerOverlay"), $u = /* @__PURE__ */ yg("NonZero"), aN = /* @__PURE__ */ yg("EvenOdd"), Ga = /* @__PURE__ */ mg("Normal"), gi = /* @__PURE__ */ mg("Difference"), en = { r: 255, g: 255, b: 255, a: 255 }, Ee = { r: 26, g: 26, b: 26, a: 255 }, fN = (t) => t, vg = (t) => t, gN = (t) => (n) => {
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
}, Tg = (t) => (n) => (e) => {
  const r = st.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = st.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, mu = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, lN = (t) => (n) => (e) => {
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
}, _N = /* @__PURE__ */ vg("FlatLevel"), dN = /* @__PURE__ */ vg("NestedLevel"), wg = /* @__PURE__ */ fN("GenieSilhouette"), hN = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, yLift: 0 };
  const o = Mr(t);
  return { prng: o.prng, yLift: o.value * e.yJitter * r };
}, pN = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, dx: 0 };
  const o = Mr(t);
  return { prng: o.prng, dx: (o.value * 2 - 1) * e.xJitter * r };
}, Ia = (t) => (n) => {
  const e = n.cy - t.cy, r = n.cx - t.cx, o = En(r * r + e * e), i = (t.r * t.r - n.r * n.r + o * o) / (2 * o), s = En(gN(0)(t.r * t.r - i * i)), u = t.cx + i * r / o, c = t.cy + i * e / o, a = { x: u - s * e / o, y: c + s * r / o }, g = { x: u + s * e / o, y: c - s * r / o };
  return o === 0 || o > t.r + n.r ? { x: (t.cx + n.cx) / 2, y: t.cy } : a.y < g.y ? a : g;
}, $N = (t) => (n) => {
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
}, mN = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n)
    return { prng: t, r: o };
  if (e)
    return { prng: t, r: o * (1 + i.rJitter) };
  if (r)
    return { prng: t, r: o * i.smallScale };
  const s = Mr(t);
  return { prng: s.prng, r: o * (1 + s.value * i.rJitter) };
}, kg = (t) => {
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
}, yN = (t) => (n) => (e) => {
  const r = Mr(t), o = n.length;
  return o === 0 ? { prng: t, idx: -1 } : {
    prng: r.prng,
    idx: (() => {
      const i = Tg(0)(o - 1 | 0)($n(Ne(r.value * et(e))));
      return i >= 0 && i < n.length ? n[i] : -1;
    })()
  };
}, NN = (t) => (n) => {
  const e = Mr(t), r = n.length;
  return r === 0 ? { prng: t, idx: -1 } : {
    prng: e.prng,
    idx: (() => {
      const o = Tg(0)(r - 1 | 0)($n(Ne(e.value * et(r))));
      return o >= 0 && o < n.length ? n[o] : -1;
    })()
  };
}, bg = (t) => {
  const n = ie(t.w * 0.18)(t.h * 0.6);
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
], Eg = { rBase: 1.2, stepRatio: 0.7, rJitter: 0.35, yJitter: 0.2, xJitter: 0.2, heroShift: 0.2, smallScale: 0.85, smallShift: 0.15, seed: 7, minN: 3 }, xN = (t) => {
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
}, Sg = (t) => {
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
}, Cg = (t) => (n) => {
  const e = n.y + n.h, r = B_(t.rBase * n.h)(n.w / (2 * (1 + (et(t.minN) - 1) * t.stepRatio))), o = n.w - 2 * r, i = 2 * r * t.stepRatio, s = mu(t.minN)(o <= 0 || i <= 0 ? t.minN : $n(cr(o / i)) + 1 | 0), u = s >= 3 ? It(1, s - 2 | 0) : [], c = u.length, a = Pe(c + 1 | 0, 2), g = a < 1 ? [] : bt(0, a, u), _ = NN(t.seed)((() => {
    const p = c - a | 0;
    return p < 1 ? u : bt(p, u.length, u);
  })()), d = _.idx, l = yN(_.prng)(lt((p) => p !== d, g))(mu(1)(g.length - (Hn(Ar)(d)(g) ? 1 : 0) | 0)), h = l.idx, $ = s >= 2 ? o / (et(s) - 1) : 0;
  return J((p) => (m) => {
    const y = m === h, N = m === d, v = m === 0 || m === (s - 1 | 0), w = mN(p.prng)(v)(N)(y)(r)(t), k = hN(w.prng)(v)(t)(n.h), L = pN(k.prng)(v)(t)($);
    return {
      prng: L.prng,
      circles: Rt(p.circles)({
        cx: n.x + lN(w.r)(n.w - w.r)((s >= 2 ? r + et(m) / (et(s) - 1) * o + L.dx : r + 0 * o + L.dx) + (N ? t.heroShift * $ : y ? -1 * t.smallShift * $ : 0)),
        cy: e - k.yLift,
        r: w.r
      })
    };
  })({ prng: l.prng, circles: [] })(It(0, s - 1 | 0)).circles;
}, Pg = (t) => (n) => {
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
}, Gg = (t) => {
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
}, JN = (t) => (n) => (e) => {
  const r = fr(n.y - t.cy)(n.x - t.cx), o = fr(e.y - t.cy)(e.x - t.cx), i = o > r ? o - r : o + 6.283185307179586 - r, s = mu(1)($n(Yi(i / 1.5707963267948966))), u = i / et(s), c = 1.3333333333333333 * Q_(u / 4);
  return Jt(It(0, s - 1 | 0))((a) => {
    const g = r + et(a + 1 | 0) * u, _ = t.cx + t.r * re(g), d = t.cy + t.r * Kn(g), l = r + et(a) * u;
    return [
      4,
      t.cx + t.r * re(l) - c * t.r * Kn(l),
      t.cy + t.r * Kn(l) + c * t.r * re(l),
      _ + c * t.r * Kn(g),
      d - c * t.r * re(g),
      _,
      d
    ];
  });
}, Ig = (t) => (n) => {
  const e = t.h * 0.38, r = Pg(Cg(Eg)({ x: t.x, y: t.y - e, w: t.w, h: e }))(t.y), o = ie(n)(ie(t.w / 2)(t.h / 2));
  return 0 < r.length ? [
    1,
    r[0].p1.x,
    r[0].p1.y,
    ...Jt(r)((i) => JN(i.c)(i.p1)(i.p2)),
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
}, Ag = (t) => (n) => (e) => (r) => (o) => (i) => {
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
  if (n === "Diamond") {
    const s = Gg(e);
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
    const s = Ig(e)(r);
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
}, vN = (t) => () => t.clip("evenodd"), TN = (t) => (n) => () => {
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
    const o = r.value, i = e1(t)(e);
    if (o !== e)
      return i(), n.stroke.value = e;
  };
}, wN = (t) => (n) => (e) => {
  const r = n.font;
  return () => {
    const o = r.value, i = g1(t)(e);
    if (o !== e)
      return i(), n.font.value = e;
  };
}, Oo = (t) => (n) => (e) => {
  const r = n.fill;
  return () => {
    const o = r.value, i = n1(t)(e);
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
      const u = Qf(t)((() => {
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
      const u = _1(t)({
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
      const u = Wf(t), c = r(i + 1 | 0);
      return () => (u(), c());
    }
    return () => {
    };
  }, o = Bf(t);
  return () => (o(), r(0)());
}, kN = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = yu(i)(yu(r / 2)(o / 2)), u = Qf(t)(n + s)(e);
  return () => (u(), to(t)(n + r - s)(e)(), no(t)({ cpx: n + r, cpy: e, x: n + r, y: e + s })(), to(t)(n + r)(e + o - s)(), no(t)({ cpx: n + r, cpy: e + o, x: n + r - s, y: e + o })(), to(t)(n + s)(e + o)(), no(t)({ cpx: n, cpy: e + o, x: n, y: e + o - s })(), to(t)(n)(e + s)(), no(t)({ cpx: n, cpy: e, x: n + s, y: e })(), Wf(t)());
}, bN = () => ({ font: { value: "" }, fill: { value: "" }, stroke: { value: "" } }), LN = (t) => (n) => {
  const e = u1(t)({ x: 0, y: 0, width: n.width, height: n.height });
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
}, SN = (t) => un(t.weight) + " " + pf(t.size) + "px " + t.family, ve = (t) => {
  const n = pf(et(t.a) / 255);
  return t.a >= 255 ? "rgb(" + un(t.r) + "," + un(t.g) + "," + un(t.b) + ")" : "rgba(" + un(t.r) + "," + un(t.g) + "," + un(t.b) + "," + n + ")";
}, CN = (t) => (n) => (e) => (r) => {
  const o = Oo(t)(e)(ve(r));
  return () => (o(), s1(t)({ x: 0, y: 0, width: n.width, height: n.height })());
}, PN = (t) => (n) => (e) => {
  const r = n.font;
  return () => (r.value = "", n.fill.value = "", n.stroke.value = "", TN(t)({
    vx: e.viewport.vx,
    vy: e.viewport.vy,
    vw: e.viewport.vw,
    vh: e.viewport.vh,
    bgCss: ve(e.bgColor),
    dotCss: ve(e.dotColor),
    tile: e.tile,
    dotR: e.dotRadius
  })());
}, GN = (t) => (n) => (e) => (r) => {
  const o = Oo(t)(n)(ve(r));
  return () => (o(), ls(t)(e)(), Iu(t)());
}, IN = (t) => (n) => (e) => (r) => (o) => {
  const i = Oo(t)(n)(ve(r));
  return () => (i(), gc(t)(n)(ve(o.color))(), Pu(t)(o.width)(), Ki(t)((() => {
    if (o.lineJoin === "RoundJoin")
      return Ui;
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
  })())(), ls(t)(e)(), Iu(t)(), Gu(t)());
}, AN = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Bf(t);
  return () => {
    if (s(), kN(t)(e.x)(e.y)(e.w)(e.h)(r)(), o.tag === "Just" ? (Oo(t)(n)(ve(o._1.color))(), Iu(t)()) : o.tag === "Nothing" || f(), i.tag === "Just")
      return gc(t)(n)(ve(i._1.color))(), Pu(t)(i._1.width)(), Ki(t)((() => {
        if (i._1.lineJoin === "RoundJoin")
          return Ui;
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
}, FN = (t) => (n) => (e) => (r) => {
  const o = gc(t)(n)(ve(r.color));
  return () => (o(), Pu(t)(r.width)(), Ki(t)((() => {
    if (r.lineJoin === "RoundJoin")
      return Ui;
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
  })())(), ls(t)(e)(), Gu(t)());
}, Aa = (t) => (n) => (e) => {
  const r = Oo(t)(n)(ve(e.color));
  return () => (r(), wN(t)(n)(SN(e.font))(), T1(t)((() => {
    if (e.align === "AlignLeft")
      return m1;
    if (e.align === "AlignCenter")
      return N1;
    if (e.align === "AlignRight")
      return y1;
    f();
  })())(), v1(t)((() => {
    if (e.baseline === "BaselineTop")
      return d1;
    if (e.baseline === "BaselineMiddle")
      return h1;
    if (e.baseline === "BaselineAlphabetic")
      return p1;
    if (e.baseline === "BaselineBottom")
      return $1;
    f();
  })())(), l1(t)(e.content)(e.x)(e.y)());
}, Fg = {
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
  Apply0: () => Fg
}, BN = (t) => (n) => (e) => {
  const r = yu(n.width / e.vw)(n.height / e.vh), o = qs(t)({ translateX: (n.width - e.vw * r) / 2 - e.vx * r, translateY: (n.height - e.vh * r) / 2 - e.vy * r });
  return () => (o(), di(t)({ scaleX: r, scaleY: r })(), Ki(t)(Ui)());
}, QN = { pure: (t) => (n) => () => t, Apply0: () => Fg }, WN = { Applicative0: () => QN, Bind1: () => RN }, Rg = {
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
    const o = IN(r.ctx)(r.styleCache)(t)(n.color)(e), i = r.maskDepth;
    return () => {
      if (i.value === 0)
        return o();
    };
  },
  drawRoundedRect: (t) => (n) => (e) => (r) => (o) => {
    const i = AN(o.ctx)(o.styleCache)(t)(n)(e)(r), s = o.maskDepth;
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
    const r = sr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", c1(e.ctx)(t)(), Aa(e.ctx)(e.styleCache)(n)(), ur(e.ctx)(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "";
    };
  },
  pushTransform: (t) => (n) => {
    const e = sr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", qs(n.ctx)({ translateX: t.tx, translateY: t.ty })(), di(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popTransform: (t) => {
    const n = ur(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBakedTransform: (t) => (n) => {
    const e = sr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", qs(n.ctx)({ translateX: t.tx, translateY: t.ty })(), di(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popBakedTransform: (t) => {
    const n = ur(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushClip: (t) => (n) => (e) => {
    const r = sr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0) {
        if (r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", ls(e.ctx)(t)(), n === "NonZero")
          return i1(e.ctx)();
        if (n === "EvenOdd")
          return vN(e.ctx)();
        f();
      }
    };
  },
  popClip: (t) => {
    const n = ur(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBlend: (t) => (n) => {
    const e = sr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        if (e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", t === "Normal")
          return Ec(n.ctx)(x1)();
        if (t === "Difference")
          return Ec(n.ctx)(J1)();
        f();
      }
    };
  },
  popBlend: (t) => {
    const n = ur(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushAlpha: (t) => (n) => {
    const e = sr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", o1(n.ctx)(t)();
    };
  },
  popAlpha: (t) => {
    const n = ur(t.ctx), e = t.maskDepth;
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
    const r = pg(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = $g(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => wg,
  Monad0: () => WN
}, DN = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Xr = (t) => (n) => (e) => {
  const r = DN(0.05)(1 - t - n);
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
}, _s = (t) => {
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
function HN(t, n) {
  const e = n.x - t.x, r = n.y - t.y;
  return Math.sqrt(e * e + r * r);
}
function ON(t) {
  const n = t.length, e = new Array(n);
  for (let r = 0; r < n; r++) {
    const o = t[r], i = t[(r + 1) % n];
    e[r] = { a: o, b: i, len: HN(o, i) };
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
function Ra(t, n) {
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
const Ba = (t) => (n) => (e) => {
  const r = Ra(t, n), o = Ra(t, e), i = YN(r, o);
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
const Wa = (t) => (n) => (e) => (r) => {
  const o = n.length;
  if (o === 0) return [];
  const i = Qa(n), s = Qa(e), u = XN(i, s), c = new Array(o);
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
    const p = _ <= 1e-4 ? 0 : r.maxDelay * (1 - (c[l] - a) / _), m = Math.max(1e-4, 1 - p), y = UN((t - p) / m), N = y * y * (3 - 2 * y);
    d[l] = {
      x: h.x + ($.x - h.x) * N,
      y: h.y + ($.y - h.y) * N
    };
  }
  for (let l = 0; l < r.smoothPasses; l++)
    d = VN(0.5, d);
  return d;
}, Te = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Da = /* @__PURE__ */ J(Rr)(0), Ha = (t) => (n) => (e) => {
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
}, KN = /* @__PURE__ */ J((t) => (n) => t + n.len)(0), Bg = (t) => {
  const n = Bt((e) => x, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Jt(bt(1, t.length, t))((e) => [2, e.x, e.y]), 5];
  f();
}, MN = (t) => (n) => {
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
}, jN = (t) => {
  const n = Bt((e) => x, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Jt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, ZN = (t) => {
  const n = { x: t.x, y: t.y, w: t.w, h: t.h };
  if (t.shape === "Cylinder")
    return Sg(n);
  if (t.shape === "Parallelogram")
    return bg(n);
  if (t.shape === "Diamond")
    return Gg(n);
  if (t.shape === "Ellipse")
    return kg(n);
  if (t.shape === "Document")
    return Lg(n);
  if (t.shape === "Cloud")
    return Ig(n)(7);
  if (t.shape === "Rectangle")
    return MN(n)(7);
  f();
}, pn = (t) => (n) => (e) => z((r) => {
  const o = et(r) / et(e);
  return { x: t.x + (n.x - t.x) * o, y: t.y + (n.y - t.y) * o };
})(It(0, e - 1 | 0)), tx = (t) => {
  const n = ie(t.w * 0.18)(t.h * 0.6);
  return [
    ...pn({ x: t.x + n, y: t.y })({ x: t.x + t.w, y: t.y })(16),
    ...pn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w - n, y: t.y + t.h })(16),
    ...pn({ x: t.x + t.w - n, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(16),
    ...pn({ x: t.x, y: t.y + t.h })({ x: t.x + n, y: t.y })(16)
  ];
}, Vr = (t) => (n) => {
  const e = Te(t)(Te(n.w / 2)(n.h / 2));
  return { ...n, x: n.x + e, y: n.y + e, w: n.w - 2 * e, h: n.h - 2 * e };
}, Nu = (t) => (n) => {
  const e = n.y - t.y, r = n.x - t.x;
  return En(r * r + e * e);
}, nx = (t) => wn((n) => (e) => ({ a: n, b: e, len: Nu(n)(e) }), t, bt(1, t.length, t)), ex = (t) => (n) => {
  const e = n.length - 1 | 0, r = e >= 0 && e < n.length ? T("Just", n[e]) : x, o = (() => {
    if (r.tag === "Just")
      return [r._1];
    if (r.tag === "Nothing")
      return [];
    f();
  })(), i = 0 < n.length ? T("Just", n[0]) : x, s = (() => {
    if (i.tag === "Just")
      return i._1;
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    f();
  })(), u = n.length;
  return u < 3 ? n : [
    s,
    ...Jt(It(1, u - 2 | 0))((c) => {
      const a = c + 1 | 0, g = a >= 0 && a < n.length ? T("Just", n[a]) : x, _ = c >= 0 && c < n.length ? T("Just", n[c]) : x, d = c - 1 | 0, l = d >= 0 && d < n.length ? T("Just", n[d]) : x;
      if (l.tag === "Just" && _.tag === "Just" && g.tag === "Just") {
        const h = _._1, $ = Nu(h)(g._1), p = Nu(l._1)(h), m = Te(t)($ / 2), y = Te(t)(p / 2), N = $ > 0 ? m / $ : 0, v = h.x + (g._1.x - h.x) * N, w = h.y + (g._1.y - h.y) * N, k = p > 0 ? y / p : 0, L = h.x + (l._1.x - h.x) * k, I = h.y + (l._1.y - h.y) * k;
        return z((B) => {
          const Y = et(B) / et(10), X = 1 - Y;
          return { x: X * X * L + 2 * X * Y * h.x + Y * Y * v, y: X * X * I + 2 * X * Y * h.y + Y * Y * w };
        })(It(0, 10));
      }
      return [];
    }),
    ...o
  ];
}, rx = (t) => (n) => (e) => (r) => (o) => z((i) => {
  const s = et(i) / et(o), u = 1 - s, c = s * s * s, a = 3 * u * s * s, g = 3 * u * u * s, _ = u * u * u;
  return { x: _ * t.x + g * n.x + a * e.x + c * r.x, y: _ * t.y + g * n.y + a * e.y + c * r.y };
})(It(0, o - 1 | 0)), ox = (t) => [
  ...pn({ x: t.x, y: t.y })({ x: t.x + t.w, y: t.y })(12),
  ...pn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h * 0.85 })(12),
  ...rx({ x: t.x + t.w, y: t.y + t.h * 0.85 })({ x: t.x + t.w * 0.66, y: t.y + t.h * 1.05 })({ x: t.x + t.w * 0.34, y: t.y + t.h * 0.65 })({
    x: t.x,
    y: t.y + t.h * 0.85
  })(32),
  ...pn({ x: t.x, y: t.y + t.h * 0.85 })({ x: t.x, y: t.y })(12)
], Oa = (t) => (n) => z((e) => {
  const r = 6.283185307179586 * et(e) / et(64);
  return { x: t.x + n * re(r), y: t.y + n * Kn(r) };
})(It(0, 63)), ds = (t) => (n) => {
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
  const n = t.y + t.h / 2, e = ie(t.h * 0.4)(t.w * 0.2);
  return [
    ...pn({ x: t.x + e, y: t.y })({ x: t.x + t.w - e, y: t.y })(10),
    ...pn({ x: t.x + t.w - e, y: t.y })({ x: t.x + t.w, y: n })(8),
    ...pn({ x: t.x + t.w, y: n })({ x: t.x + t.w - e, y: t.y + t.h })(8),
    ...pn({ x: t.x + t.w - e, y: t.y + t.h })({ x: t.x + e, y: t.y + t.h })(10),
    ...pn({ x: t.x + e, y: t.y + t.h })({ x: t.x, y: n })(8),
    ...pn({ x: t.x, y: n })({ x: t.x + e, y: t.y })(8)
  ];
}, Qg = (t) => {
  const n = t.length;
  return n === 0 ? { x: 0, y: 0 } : { x: Da(z((e) => e.x)(t)) / et(n), y: Da(z((e) => e.y)(t)) / et(n) };
}, si = (t) => (n) => (e) => (r) => (o) => z((i) => {
  const s = e + (r - e) * (et(i) / et(o));
  return { x: t.x + n * re(s), y: t.y + n * Kn(s) };
})(It(0, o - 1 | 0)), za = (t) => (n) => {
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
}, Ai = (t) => (n) => (e) => (r) => (o) => (i) => z((s) => {
  const u = r + (o - r) * (et(s) / et(i));
  return { x: t.x + n * re(u), y: t.y + e * Kn(u) };
})(It(0, i - 1 | 0)), sx = (t) => {
  const n = t.h * 0.38;
  return [
    ...Jt(Pg(Cg(Eg)({
      x: t.x,
      y: t.y - n,
      w: t.w,
      h: n
    }))(t.y))((e) => {
      const r = fr(e.p2.y - e.c.cy)(e.p2.x - e.c.cx), o = fr(e.p1.y - e.c.cy)(e.p1.x - e.c.cx);
      return Ai({ x: e.c.cx, y: e.c.cy })(e.c.r)(e.c.r)(o)(r > o ? r : r + 6.283185307179586)(16);
    }),
    ...pn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h })(8),
    ...pn({ x: t.x + t.w, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(12),
    ...pn({ x: t.x, y: t.y + t.h })({ x: t.x, y: t.y })(8)
  ];
}, ux = (t) => {
  const n = Te(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.y + t.h + 5 - n - 2, i = t.x + e;
  return [
    ...Ai({ x: i, y: r })(e)(n)(3.141592653589793)(6.283185307179586)(24),
    ...pn({ x: t.x + t.w, y: r })({ x: t.x + t.w, y: o })(12),
    ...Ai({ x: i, y: o })(e)(n)(0)(3.141592653589793)(24),
    ...pn({ x: t.x, y: o })({ x: t.x, y: r })(12)
  ];
}, Fi = (t) => (n) => n.shape === "Cylinder" ? ux(n) : n.shape === "Parallelogram" ? tx(n) : n.shape === "Diamond" ? ix(n) : n.shape === "Ellipse" ? za(ie(n.w)(n.h) / 2)(n) : n.shape === "Document" ? ox(n) : n.shape === "Cloud" ? sx(n) : za(t)(n), cx = (t) => {
  const n = Te(t.h * 0.075)(t.w * 0.075), e = t.w / 2;
  return Ai({ x: t.x + e, y: t.y + n })(e)(n)(0)(3.141592653589793)(24);
}, ax = (t) => (n) => (e) => J((r) => (o) => {
  const i = r.pos + o.len, s = e < i ? (e - r.pos) / o.len : 1, u = { x: o.a.x + (o.b.x - o.a.x) * s, y: o.a.y + (o.b.y - o.a.y) * s }, c = n > r.pos ? (n - r.pos) / o.len : 0, a = { x: o.a.x + (o.b.x - o.a.x) * c, y: o.a.y + (o.b.y - o.a.y) * c }, g = r.points.length - 1 | 0, _ = g >= 0 && g < r.points.length ? (() => {
    const d = r.points[g].x - a.x;
    return (d < 0 ? -d < 1e-4 : d < 1e-4) && (() => {
      const l = r.points[g].y - a.y;
      return l < 0 ? -l < 1e-4 : l < 1e-4;
    })();
  })() ? Rt(r.points)(u) : [...r.points, a, u] : [a, u];
  return o.len <= 0 || i <= n || r.pos >= e ? { ...r, pos: i } : { pos: i, points: _ };
})({ pos: 0, points: [] })(t).points, fx = (t) => (n) => (e) => {
  const r = Bt((o) => x, (o) => (i) => T("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just") {
    const o = nx(t), i = KN(o), s = Ha(0)(i)(n * i), u = Ha(0)(i)(e * i);
    return u <= s ? [] : ax(o)(s)(u);
  }
  f();
}, lc = (t) => t, Ce = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, _r = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, gx = /* @__PURE__ */ o_(vf)(Qt), lx = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, _x = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, qa = /* @__PURE__ */ lc("SegMove"), dx = /* @__PURE__ */ lc("SegLine"), hx = /* @__PURE__ */ lc("SegQuad"), Ya = { offset: 0.4, passes: 1, rMax: 1.5 }, Wg = (t) => $n(Ne(t.x * 7919 + t.y * 3001 + t.w * 113 + t.h * 17 + 1)) * -1640531535 | 0, Ri = (t) => (n) => (e) => () => {
  t.push(3), t.push(n.x), t.push(n.y), t.push(e.x), t.push(e.y);
}, hs = (t) => (n) => () => {
  t.push(1), t.push(n.x), t.push(n.y);
}, Ae = (t) => (n) => () => {
  t.push(2), t.push(n.x), t.push(n.y);
}, Io = /* @__PURE__ */ (() => {
  const t = J((n) => (e) => ((n * 31 | 0) + $n(Ne(e.x * 100)) | 0) + $n(Ne(e.y * 100)) | 0)(1);
  return (n) => t(n) * -1640531535 | 0;
})(), px = (t) => {
  const n = [];
  let e = 0, r = { x: 0, y: 0 };
  for (; e < t.length; ) {
    const o = e, i = r, s = o >= 0 && o < t.length ? T("Just", t[o]) : x;
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
        n.push({ kind: dx, m: i, c: i, p: u, len: En(c * c + a * a) }), r = u, e = o + 3 | 0;
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
          kind: hx,
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
}, $x = (t) => (n) => {
  const e = n.length - 1 | 0, r = e < 1 ? [] : bt(0, e, n), o = (() => {
    const s = r.length - 1 | 0;
    return s >= 0 && s < r.length ? T("Just", r[s]) : x;
  })(), i = n.length - 1 | 0;
  if (i >= 0 && i < n.length && o.tag === "Just") {
    const s = n[i].y - o._1.y, u = n[i].x - o._1.x, c = En(u * u + s * s);
    return c <= 1e-4 ? n : Rt((() => {
      const a = n.length - 1 | 0;
      return a < 1 ? [] : bt(0, a, n);
    })())({ x: n[i].x + u / c * t, y: n[i].y + s / c * t });
  }
  return n;
}, mx = (t) => (n) => (e) => Ln(J((r) => (o) => {
  const i = fn(0)(t)(r.prng), s = fn(0)(6.283185307179586)(i.prng);
  return { prng: s.prng, out: [{ x: o.x + i.value * re(s.value), y: o.y + i.value * Kn(s.value) }, ...r.out] };
})({ prng: n, out: [] })(e).out), yx = (t) => (n) => (e) => {
  if (n.kind === "SegMove")
    return hs(t)(n.p);
  if (n.kind === "SegLine")
    return Ae(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  if (n.kind === "SegQuad")
    return Ae(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  f();
}, Nx = (t) => (n) => {
  if (n.kind === "SegMove")
    return hs(t)(n.p);
  if (n.kind === "SegLine")
    return Ae(t)(n.p);
  if (n.kind === "SegQuad")
    return Ri(t)(n.c)(n.p);
  f();
}, Dg = (t) => (n) => {
  const e = px(n), r = J((u) => (c) => u + c.len)(0)(e) * Ce(0)(_r(1)(t)), o = [];
  let i = 0, s = 0;
  for (; s < e.length; ) {
    const u = s, c = i;
    if (u >= 0 && u < e.length) {
      if (c + e[u].len <= r) {
        const a = e[u];
        Nx(o)(a)(), i = c + a.len, s = u + 1 | 0;
        continue;
      }
      if (c >= r) {
        s = e.length;
        continue;
      }
      yx(o)(e[u])((r - c) / Ce(e[u].len)(1e-4))();
    }
    s = e.length;
  }
  return o;
}, Xa = { offset: 1.5, passes: 2, rMax: 14, overshoot: 2.5 }, Hg = (t) => (n) => (e) => (r) => {
  const o = r.y - e.y, i = e.y - n.y, s = r.x - e.x, u = En(s * s + o * o), c = e.x - n.x, a = En(c * c + i * i), g = _r(t.rMax * (R_(a > 0 && u > 0 ? Ce(-1)(_r(1)((c * s + i * o) / (a * u))) : 1) / 3.141592653589793))(0.4 * _r(a)(u));
  return { inP: a > 0 ? { x: e.x - c / a * g, y: e.y - i / a * g } : e, curr: e, outP: u > 0 ? { x: e.x + s / u * g, y: e.y + o / u * g } : e };
}, Og = (t) => (n) => {
  const e = n.length, r = [], o = 0 < n.length ? T("Just", n[0]) : x;
  if (o.tag === "Just" ? hs(r)(o._1)() : o.tag === "Nothing" || f(), e >= 3) {
    let s = 1;
    for (; s <= (e - 2 | 0); ) {
      const u = s, c = u + 1 | 0;
      if (c >= 0 && c < n.length) {
        if (u >= 0 && u < n.length) {
          const a = u - 1 | 0;
          if (a >= 0 && a < n.length) {
            const g = Hg(t)(n[a])(n[u])(n[c]);
            Ae(r)(g.inP)(), Ri(r)(g.curr)(g.outP)();
          }
        }
        s = u + 1 | 0;
        continue;
      }
      s = u + 1 | 0;
    }
  }
  const i = n.length - 1 | 0;
  return i >= 0 && i < n.length && e >= 2 && Ae(r)(n[i])(), r;
}, xx = (t) => (n) => (e) => (r) => (o) => {
  if (o.length < 4)
    return Og(t)(o);
  const i = 0 < o.length ? T("Just", o[0]) : x, s = (() => {
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = o.length - 1 | 0, c = Ye(Ye(n)(u) + u | 0)(u), a = (l) => {
    const h = Ye(l + u | 0)(u);
    return h >= 0 && h < o.length ? o[h] : s;
  }, g = z((l) => Hg(t)(a((c + l | 0) - 1 | 0))(a(c + l | 0))(a((c + l | 0) + 1 | 0)))(It(
    0,
    u - 1 | 0
  )), _ = [], d = 0 < g.length ? T("Just", g[0]) : x;
  if (d.tag === "Just")
    if (hs(_)(d._1.outP)(), gx((() => {
      const l = Bt((h) => x, (h) => ($) => T("Just", $), g);
      if (l.tag === "Nothing")
        return [];
      if (l.tag === "Just")
        return l._1;
      f();
    })())((l) => {
      const h = Ae(_)(l.inP);
      return () => (h(), Ri(_)(l.curr)(l.outP)());
    })(), e)
      Ae(_)(d._1.inP)(), Ri(_)(d._1.curr)(d._1.outP)(), _.push(5);
    else {
      const l = g.length - 1 | 0;
      l >= 0 && l < g.length ? Ae(_)((() => {
        const h = 1 - r;
        return { x: g[l].outP.x + (d._1.inP.x - g[l].outP.x) * h, y: g[l].outP.y + (d._1.inP.y - g[l].outP.y) * h };
      })())() : Ae(_)(d._1.inP)();
    }
  else d.tag === "Nothing" || f();
  return _;
}, Pr = (t) => (n) => (e) => (r) => {
  const o = lx(1)(r.length - 1 | 0), i = fn(0)(et(o))(tu("shape")(n)), s = _x(o - 1 | 0)($n(Ne(i.value))), u = i.prng;
  return z((c) => {
    const a = fn(0)(1)(tu(un(c))(u)), g = fn(-0.18)(0.3)(a.prng), _ = a.value < 0.7, d = fn(0.5)(0.85)(g.prng), l = mx(t.offset)(d.prng)(r);
    return { path: e ? xx(t)(s)(_)(g.value)(l) : Og(t)(l), alpha: d.value };
  })(It(0, t.passes - 1 | 0));
}, Jx = (t) => (n) => (e) => Pr(t)(n)(!0)([
  { x: e.x, y: e.y },
  { x: e.x + e.w, y: e.y },
  { x: e.x + e.w, y: e.y + e.h },
  { x: e.x, y: e.y + e.h },
  { x: e.x, y: e.y }
]), vx = (t) => (n) => (e) => {
  const r = Ce(0)(_r(1)(e)), o = n.h / et(4), i = Ce(6)(o * 1.4);
  return yt((s) => s)(z((s) => {
    if (r < Ce(0)(et(s) / et(4) - 0.05))
      return x;
    const u = tu(un(s))(t), c = Ce(0)(et(s) / et(4) - 0.05), a = Ye(s)(2) === 0, g = a ? n.x - 2 : n.x + n.w + 2, _ = a ? n.x + n.w + 2 : n.x - 2, d = n.y + (et(s) + 0.5) * o;
    return T(
      "Just",
      {
        path: Dg(Ce(0)(_r(1)((r - c) / Ce(1e-4)(_r(1)(et(s + 1 | 0) / et(4) + 0.05) - c))))((() => {
          const l = { rMax: 2, offset: 0.6, passes: 1 }, h = Ln(J((p) => (m) => {
            const y = fn(-o * 0.08)(o * 0.08)(p.prng);
            return { prng: y.prng, out: [{ x: g + (_ - g) * (et(m) / et(4)), y: d + y.value }, ...p.out] };
          })({ prng: u, out: [] })(It(0, 4)).out), $ = h.length < 2 ? [] : Pr(l)(u)(!1)(h);
          return 0 < $.length ? $[0].path : [];
        })()),
        width: i,
        alpha: 1
      }
    );
  })(It(0, 3)));
}, Qs = (t, n, e) => ({ tag: t, _1: n, _2: e }), zg = (t) => t, Ws = (t, n, e) => ({ tag: t, _1: n, _2: e }), Bi = (t) => (n) => (e) => {
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
}, qg = (t) => (n) => {
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
}, Yg = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
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
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Wn = /* @__PURE__ */ (() => {
  const t = Xn.unfoldr(ke);
  return (n) => t(Mn("IterNode", n, we));
})(), $r = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Tx = Qt.foldMap(k_), li = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Xg = /* @__PURE__ */ nn(P)(Qt), wx = /* @__PURE__ */ If(P), kx = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
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
}, _c = /* @__PURE__ */ zg("LabelsShown"), bx = /* @__PURE__ */ zg("LabelsHidden"), Vg = (t) => {
  const n = t.Monad0().Bind1(), e = t.popTransform, r = t.popAlpha;
  return (o) => (i) => (s) => (u) => (c) => n.bind(t.pushAlpha(o.fadeAlpha))(() => n.bind(t.pushTransform({
    tx: i * (1 - o.popScale),
    ty: s * (1 - o.popScale),
    sx: o.popScale,
    sy: o.popScale
  }))(() => n.bind(t.pushTransform({ tx: 0, ty: u.y * (1 - o.flipY), sx: 1, sy: o.flipY }))(() => n.bind(c)(() => n.bind(e)(() => n.bind(e)(() => r))))));
}, se = (t) => {
  const n = t.Apply0();
  return (e) => J((r) => (o) => n.apply(n.Functor0().map((i) => hf)(r))(e(o)))(t.pure());
}, Ug = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = Xr(o)(i)(r), a = 0 < t.length ? T("Just", t[0]) : x, g = (() => {
    if (a.tag === "Just")
      return a._1;
    if (a.tag === "Nothing")
      return u;
    f();
  })(), _ = t.length - 1 | 0, d = _ >= 0 && _ < t.length ? T("Just", t[_]) : x, l = (() => {
    if (d.tag === "Just")
      return d._1;
    if (d.tag === "Nothing")
      return s;
    f();
  })(), h = Ba(128)(Fi(4)(Vr(2)(n)))(Oa(g)(6)), $ = g.x - u.x, p = 2 * (() => {
    const F = g.y - u.y;
    return ($ < 0 ? -$ : $) + (F < 0 ? -F : F);
  })(), m = l.x - s.x, y = 2 * (() => {
    const F = l.y - s.y;
    return (m < 0 ? -m : m) + (F < 0 ? -F : F);
  })(), N = p + Do(t) + y, v = N <= 1e-4 ? 1 : 1 - y / N, w = N <= 1e-4 ? 0 : p / N, k = v - w, L = Ba(128)(Oa(l)(6))(Fi(4)(Vr(2)(e))), I = { maxDelay: 0.4, smoothPasses: 2 }, B = Qr(t)(Bi(0)(1)(k <= 1e-4 ? 0 : (c - w) / k)), Y = (() => {
    if (B.tag === "Just")
      return B._1;
    if (B.tag === "Nothing")
      return g;
    f();
  })(), X = (() => {
    if (v >= 1)
      return 0;
    const F = (c - v) / (1 - v), U = F < 0 ? 0 : F > 1 ? 1 : F;
    return U * U * (3 - 2 * U);
  })(), C = (() => {
    if (w <= 1e-4)
      return 1;
    const F = c / w, U = F < 0 ? 0 : F > 1 ? 1 : F;
    return U * U * (3 - 2 * U);
  })();
  return c < w ? Ws("PolyShape", Wa(C)(h.from)(h.to)(I)) : c >= v ? Ws("PolyShape", Wa(X)(L.from)(L.to)(I)) : Ws("CircleShape", Y, 6);
}, Kg = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Ug(t)(n)(e)(r)(o)(i);
  if (s.tag === "PolyShape")
    return Qg(s._1);
  if (s.tag === "CircleShape")
    return s._1;
  f();
}, Lx = (t) => (n) => {
  const e = t.y + t.h - 6, r = t.y + 6, o = t.x + 14, i = t.x + t.w - 14, s = J(Ao)(0)(z((u) => o - 10 < u.x + u.w + 12 && i + 10 > u.x - 12 && r - 10 < u.y + u.h + 12 && e + 10 > u.y - 12 ? qg((u.x + u.w + 12 - (o - 10)) / 0.7071067811865476)((e + 10 - (u.y - 12)) / 0.7071067811865476) : 0)(n));
  return { ...t, x: t.x + s * 0.7071067811865476, y: t.y - s * 0.7071067811865476 };
}, Ex = (t) => (n) => (e) => J((r) => (o) => {
  const i = Yg(o)(n);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just") {
    const s = Lx(i._1)(r.obstacles);
    return { acc: K(P)(o)(s)(r.acc), obstacles: Rt(r.obstacles)(s) };
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
})(), xu = (t) => (n) => Jt(Wn(t.nodes))((e) => {
  const r = _n(e._1)(n.nodes);
  return r.tag === "Just" && _s(r._1).alpha > 0 ? ZN(e._2) : [];
}), Sx = (t) => (n) => (e) => [
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
], Cx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = nr.traverse(r);
  return (i) => (s) => {
    const u = er(s), c = 0.32 * i.size;
    return o((a) => e.bind(a === 0 ? r.pure(0) : t.measureText(i)(mn(a)(s)))((g) => e.bind(t.measureText(i)(mn(a + 1 | 0)(s)))((_) => e.bind(t.measureInk(i)(a >= 0 && a < u.length ? Mi(u[a]) : " "))((d) => r.pure({ x: g, w: _ - g, up: d.ascent - c, down: d.descent + c })))))(It(
      0,
      u.length - 1 | 0
    ));
  };
}, Px = (t) => (n) => {
  const e = (o) => (o.x - n.x) * (o.x - n.x) + (o.y - n.y) * (o.y - n.y), r = J((o) => (i) => e(i) < e(o) ? i : o)({ x: t.x, y: t.y })([{ x: t.x, y: t.y }, { x: t.x + t.w, y: t.y }, { x: t.x, y: t.y + t.h }, { x: t.x + t.w, y: t.y + t.h }]);
  return z((o) => {
    const i = et(o) / 5;
    return { x: r.x + (n.x - r.x) * i, y: r.y + (n.y - r.y) * i };
  })([1, 2, 3, 4]);
}, hc = (t) => {
  const n = ns(`
`)(t);
  return n.length === 0 ? [""] : n;
}, Gx = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = Xr(o)(i)(r), a = 0 < t.length ? T("Just", t[0]) : x, g = (() => {
    if (a.tag === "Just")
      return a._1;
    if (a.tag === "Nothing")
      return u;
    f();
  })(), _ = t.length - 1 | 0, d = _ >= 0 && _ < t.length ? T("Just", t[_]) : x, l = (() => {
    if (d.tag === "Just")
      return d._1;
    if (d.tag === "Nothing")
      return s;
    f();
  })(), h = g.x - u.x, $ = 2 * (() => {
    const I = g.y - u.y;
    return (h < 0 ? -h : h) + (I < 0 ? -I : I);
  })(), p = l.x - s.x, m = 2 * (() => {
    const I = l.y - s.y;
    return (p < 0 ? -p : p) + (I < 0 ? -I : I);
  })(), y = $ + Do(t) + m, N = y <= 1e-4 ? 1 : 1 - m / y, v = y <= 1e-4 ? 0 : $ / y, w = N - v, k = Qr(t)(Bi(0)(1)(w <= 1e-4 ? 0 : (c - v) / w)), L = (() => {
    if (k.tag === "Just")
      return k._1;
    if (k.tag === "Nothing")
      return g;
    f();
  })();
  return c < v ? Qs("InsideRect", Vr(2)(n)) : c >= N ? Qs("InsideRect", Vr(2)(e)) : Qs("InsideBall", L, 6);
}, Ix = { offset: 0.8, passes: 2, rMax: 5 }, Ax = (t) => {
  const n = t.Monad0().Applicative0(), e = se(n);
  return (r) => (o) => (i) => (s) => {
    const u = { color: s, width: 1, lineJoin: vn, lineCap: le }, c = { color: i, flat: !0 }, a = (g) => t.drawRoundedRect({ x: g.x, y: g.y, w: g.w, h: g.h })(4)(T("Just", c))(T("Just", u));
    return e((g) => {
      if (g._2.tag === "Travelling") {
        const _ = $r(g._2._1.edge)(r.edges), d = _n(g._2._1.target)(r.nodes), l = _n(g._2._1.source)(r.nodes);
        if (l.tag === "Just" && d.tag === "Just" && _.tag === "Just") {
          const h = Gx((() => {
            if (g._2._1.direction === "Forward")
              return _._1;
            if (g._2._1.direction === "Backward")
              return Ln(_._1);
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
    })(Wn(o.tokens));
  };
}, Va = (t) => (n) => (e) => (r) => t.strokePath((() => {
  const o = Bt(
    (i) => x,
    (i) => (s) => T("Just", { head: i, tail: s }),
    z((i) => i.pt)(m_(
      (i) => (s) => {
        const u = et(s) / et(72), c = fn(-0.18)(0.18)(i.prng), a = fn(-0.1)(0.1)(c.prng), g = fn(-0.07)(0.07)(a.prng), _ = e * (0.05 + 0.55 * u) * (1 + a.value), d = u * 28.274333882308138 + c.value;
        return { prng: g.prng, pt: { x: n.x + re(d) * _ + g.value * e, y: n.y + Kn(d) * _ + g.value * e } };
      },
      { prng: 137, pt: { x: n.x, y: n.y } },
      It(0, 72)
    ))
  );
  if (o.tag === "Just")
    return [1, o._1.head.x, o._1.head.y, ...Tx((i) => [2, i.x, i.y])(o._1.tail)];
  if (o.tag === "Nothing")
    return [];
  f();
})())({ color: r, width: 5.5, lineJoin: vn, lineCap: De }), Fx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = se(n.Applicative0());
  return (i) => (s) => (u) => o((c) => e.bind(t.pushAlpha(c.alpha))(() => e.bind(t.strokePath(c.path)({
    color: i.nodeFill,
    width: c.width,
    lineJoin: vn,
    lineCap: De
  }))(() => r)))(vx(Wg(s) + 7777 | 0)(s)(u));
}, Mg = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = n.Applicative0(), i = se(o), s = se(o), u = nr.traverse(o), c = Cx(t), a = Fx(t), g = t.popTransform;
  return (_) => (d) => (l) => (h) => ($) => (p) => (m) => {
    const y = (q) => e.bind(t.pushAlpha(q.alpha))(() => e.bind(t.strokePath(q.path)({
      color: d.nodeStroke,
      width: 2,
      lineJoin: vn,
      lineCap: De
    }))(() => r)), N = { family: d.fontFamily, size: d.wobble ? 15 : 11, weight: d.wobble ? 800 : 500 }, v = ns(`
`)(p.label === "" ? $ : p.label), w = v.length === 0 ? [""] : v, k = N.size * 1.2, L = p.shape === "Cylinder" ? t.strokePath(xN({ x: p.x, y: p.y, w: p.w, h: p.h }))({
      color: d.nodeStroke,
      width: 1.25,
      lineJoin: vn,
      lineCap: le
    }) : o.pure(), I = (p.shape === "Cylinder" ? (p.y + (p.y + p.h + 5 - 2 * ie(p.h * 0.075)(p.w * 0.075))) / 2 : (p.y + p.y + p.h) / 2) - et(w.length) * k / 2 + k / 2, B = m.tag === "PloppingOut" && d.wobble ? m._1 : -1, Y = B >= 0, X = _s(m), C = Y ? { alpha: 1, scale: 1 } : X, F = p.x + p.w / 2, U = p.y + p.h / 2, tt = e.bind(t.pushAlpha(C.alpha * l))(() => e.bind(t.pushTransform({
      tx: F * (1 - C.scale),
      ty: U * (1 - C.scale),
      sx: C.scale,
      sy: C.scale
    }))(() => {
      const q = { x: p.x, y: p.y, w: p.w, h: p.h }, Q = {
        color: d.nodeStroke,
        width: d.wobble ? 2 : 1.25,
        lineJoin: vn,
        lineCap: d.wobble ? De : le
      };
      return e.bind((() => {
        if (d.wobble) {
          if (p.shape === "Rectangle")
            return i(y)(Jx(Xa)(Wg(q))(q));
          const E = Fi(7)(p);
          return e.bind(i(y)((() => {
            const S = Io(E);
            return E.length < 4 ? [] : Pr(Ya)(S)(!0)(E);
          })()))(() => s((S) => i(y)((() => {
            const O = Io(S);
            return S.length < 2 ? [] : Pr(Ya)(O)(!1)(S);
          })()))(p.shape === "Cylinder" ? [cx(p)] : []));
        }
        return e.bind(Ag(t)(p.shape)(q)(7)(T("Just", { color: d.nodeFill, flat: !1 }))(T(
          "Just",
          Q
        )))(() => L);
      })())(() => e.bind((() => {
        if (h.tag === "Just" && d.wobble && !Y) {
          const E = h._1;
          return e.bind(u(c(N))(w))((S) => {
            const O = kt((ot) => (M) => ft.compare(ot.x)(M.x)), G = $n(Ne(p.x * 7919 + p.y * 3001)) * -1640531535 | 0, D = fn(5)(7.5)(G), W = fn(0)(D.value)(D.prng), j = -(1 + 2 * fn(-1)(1)(W.prng).value * 3.141592653589793 / 180), V = (ot, M, ut, gt, dt) => O(yt((Nt) => Nt)([
              j * M + ot >= gt && j * M + ot <= dt ? T("Just", { x: M, y: j * M + ot }) : x,
              j * ut + ot >= gt && j * ut + ot <= dt ? T("Just", { x: ut, y: j * ut + ot }) : x,
              (() => {
                const Nt = (gt - ot) / j;
                return Nt >= M && Nt <= ut ? T("Just", { x: Nt, y: gt }) : x;
              })(),
              (() => {
                const Nt = (dt - ot) / j;
                return Nt >= M && Nt <= ut ? T("Just", { x: Nt, y: dt }) : x;
              })()
            ])), H = D.value, rt = Ye(E.frameHash)(3), Z = rt === 0 ? { r: 200, g: 35, b: 30, a: 220 } : rt === 1 ? { r: 35, g: 150, b: 80, a: 220 } : { r: 30, g: 80, b: 200, a: 220 }, it = p.x + p.w / 2, nt = zn(Ft((ot) => (M) => Ft((() => {
              const ut = I + et(ot) * k, gt = it - J((dt) => (Nt) => dt + Nt.w)(0)(M) / 2;
              return (dt) => (Nt) => {
                const At = N.size * 0.1, Vt = dt - 1 | 0, Pn = Vt >= 0 && Vt < M.length && dt > 0 ? (M[Vt].x + M[Vt].w + Nt.x) / 2 : Nt.x - At;
                return {
                  x: gt + Pn - 1,
                  y: ut - Nt.up - 1,
                  w: Ao(0)((() => {
                    const ne = dt + 1 | 0;
                    return ne >= 0 && ne < M.length && dt < (M.length - 1 | 0) ? (Nt.x + Nt.w + M[ne].x) / 2 - Pn : Nt.x + Nt.w + At - Pn;
                  })()) + 2,
                  h: Nt.up + Nt.down + 2
                };
              };
            })())(M))(S)), at = p.y + 4, _t = p.x + p.w - 4, Dt = p.x + 4, vt = at - j * Dt + W.value, Wt = p.y + p.h - 4, $t = Jt(Jt(Ft((ot) => (M) => {
              const ut = (M.from.x + M.to.x) / 2, gt = (M.from.y + M.to.y) / 2, dt = fn(-1)(1)(G + (911 * (ot + 1 | 0) | 0) | 0), Nt = fn(-3)(5)(dt.prng), At = dt.value * 3.141592653589793 / 180, Vt = re(At), Pn = Kn(At), ne = (kn) => ({ x: ut + (kn.x - ut) * Vt - (kn.y - gt) * Pn, y: gt + (kn.x - ut) * Pn + (kn.y - gt) * Vt });
              return {
                from: (() => {
                  const kn = ne(M.from), Qn = kn.y - gt, St = kn.x - ut, Pt = En(St * St + Qn * Qn), Vn = Pt < 1e-4 ? 1 : (Pt + Nt.value) / Pt;
                  return { x: ut + St * Vn, y: gt + Qn * Vn };
                })(),
                to: (() => {
                  const kn = ne(M.to), Qn = fn(-3)(5)(Nt.prng).value, St = kn.y - gt, Pt = kn.x - ut, Vn = En(Pt * Pt + St * St), _e = Vn < 1e-4 ? 1 : (Vn + Qn) / Vn;
                  return { x: ut + Pt * _e, y: gt + St * _e };
                })()
              };
            })(yt((ot) => {
              const M = V(vt + et(ot) * H, Dt, _t, at, Wt);
              return M.length === 2 ? T("Just", { from: M[0], to: M[1] }) : x;
            })(It(0, li(1)($n(Ne((Wt - j * _t - vt) / H)))))))((ot) => lt(
              (M) => M.to.x - M.from.x > 1,
              J((M) => (ut) => Jt(M)((gt) => {
                const dt = V(gt.from.y - j * gt.from.x, ut.x, ut.x + ut.w, ut.y, ut.y + ut.h);
                return dt.length === 2 ? dt[0].x > gt.from.x + 1e-3 && dt[1].x < gt.to.x - 1e-3 ? [{ from: gt.from, to: dt[0] }, { from: dt[1], to: gt.to }] : dt[0].x <= gt.from.x + 1e-3 && dt[1].x < gt.to.x - 1e-3 ? [{ from: dt[1], to: gt.to }] : dt[0].x > gt.from.x + 1e-3 && dt[1].x >= gt.to.x - 1e-3 ? [{ from: gt.from, to: dt[0] }] : [] : [gt];
              }))([ot])(nt)
            )))((ot) => (() => {
              const M = ot.to.x - ot.from.x;
              return En(2) * (M >= 0 ? M : -M) <= 28;
            })() ? [ot] : [
              { from: ot.from, to: { x: ot.from.x + (ot.to.x - ot.from.x) * 0.495, y: ot.from.y + (ot.to.y - ot.from.y) * 0.495 } },
              { from: { x: ot.from.x + (ot.to.x - ot.from.x) * 0.505, y: ot.from.y + (ot.to.y - ot.from.y) * 0.505 }, to: ot.to }
            ]), xt = $t.length, mt = (ot) => Ao(0)(qg(1)(E.t * et(xt) - et(ot)));
            return i((ot) => {
              const M = ot._1, ut = fn(1.4)(1.9)(G + (1303 * (M + 1 | 0) | 0) | 0), gt = fn(0.35)(0.8)(ut.prng), dt = i((Nt) => e.bind(t.pushAlpha(Nt.alpha * gt.value))(() => e.bind(t.strokePath(Dg(mt(M))(Nt.path))({
                color: Z,
                width: ut.value,
                lineJoin: vn,
                lineCap: De
              }))(() => r)))(Pr({ ...Xa, rMax: 0, offset: 0.5 })(G + (53 * (M + 1 | 0) | 0) | 0)(!1)([ot._2.from, ot._2.to]));
              return mt(M) > 0 ? dt : o.pure();
            })(Ft(He)($t));
          });
        }
        return o.pure();
      })())(() => e.bind((() => {
        if (_ === "LabelsShown")
          return i((E) => t.drawText({
            x: p.x + p.w / 2,
            y: I + et(E._1) * k,
            content: E._2,
            font: N,
            color: d.text,
            align: gs,
            baseline: Yr
          }))(Ft(He)(w));
        if (_ === "LabelsHidden")
          return o.pure();
        f();
      })())(() => e.bind((() => {
        const E = a(d)(q)(B);
        return Y ? E : o.pure();
      })())(() => e.bind(g)(() => r)))));
    }));
    return C.alpha * l > 0 ? tt : o.pure();
  };
}, Rx = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = Mg(t), i = t.popAlpha, s = se(e);
  return (u) => (c) => (a) => {
    const g = { ...u, nodeFill: u.text, text: u.nodeFill, nodeStroke: u.nodeFill };
    return s((_) => {
      const d = _n(_._1)(a.nodes), l = _n(_._1)(c.nodes), h = (() => {
        if (l.tag === "Just" && d.tag === "Just") {
          const $ = d._1, p = l._1;
          return r.bind(t.pushAlpha(_._2))(() => r.bind(o(_c)(g)(1)(x)(_._1)(p)($))(() => i));
        }
        return e.pure();
      })();
      return _._2 > 0 ? h : e.pure();
    })(Wn(a.nodeInvert));
  };
}, jg = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => (i) => r ? n.bind(t.clearBackground(e.bgTransparent))(() => t.setViewport(i)) : e.wobble ? n.bind(t.setViewport(i))(() => t.clearBackground(e.bg)) : n.bind(t.setViewport(i))(() => t.backgroundDots({
    viewport: i,
    bgColor: e.bg,
    dotColor: e.bgDot,
    tile: 12 * o,
    dotRadius: 0.7 * o
  }));
}, Bx = (t) => {
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
    })(), $ = Ug(c)(a)(g)(_)(d)(l);
    if ($.tag === "CircleShape")
      return i ? Va(t)($._1)($._2)({ r: 200, g: 35, b: 30, a: 220 }) : t.fillStrokePath(ds($._1)($._2))({ color: s, flat: !0 })({
        color: u,
        width: 1,
        lineJoin: vn,
        lineCap: le
      });
    if ($.tag === "PolyShape" && i && $._1.length >= 3)
      return r.bind(t.pushAlpha(h))(() => r.bind(Va(t)(Qg($._1))(6)({
        r: 200,
        g: 35,
        b: 30,
        a: 220
      }))(() => o));
    if ($.tag === "PolyShape")
      return i ? e.pure() : $._1.length >= 3 ? t.fillStrokePath(Bg($._1))({ color: s, flat: !0 })({
        color: u,
        width: 1,
        lineJoin: vn,
        lineCap: le
      }) : e.pure();
    f();
  };
}, Qx = (t) => {
  const n = t.Monad0().Bind1(), e = t.popAlpha;
  return (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
    const g = Xr(c)(a)(u), _ = { x: i.x + i.w / 2, y: i.y + i.h / 2 }, d = { x: s.x + s.w / 2, y: s.y + s.h / 2 }, l = (h, $) => n.bind(t.pushAlpha($))(() => n.bind(t.fillStrokePath(ds(h)(6))({
      color: r,
      flat: !0
    })({ color: o, width: 1, lineJoin: vn, lineCap: le }))(() => e));
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
  const n = Bx(t), e = Qx(t), r = t.Monad0().Applicative0(), o = se(r);
  return (i) => (s) => (u) => (c) => (a) => o((g) => {
    if (g._2.tag === "Travelling") {
      const _ = _n(g._2._1.target)(s.nodes), d = _n(g._2._1.source)(s.nodes);
      if (d.tag === "Just" && _.tag === "Just") {
        const l = $r(g._2._1.edge)(s.edges);
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
        return t.fillStrokePath(Bg(Fi(4)(Vr(2)(_._1))))({
          color: c,
          flat: !0
        })({ color: a, width: 1, lineJoin: vn, lineCap: le });
      if (_.tag === "Nothing")
        return r.pure();
      f();
    }
    return r.pure();
  })(Wn(u.tokens));
}, Zg = (t) => {
  const n = Qi(t), e = t.Monad0(), r = e.Bind1(), o = Qi(t), i = Ax(t), s = t.popClip, u = t.popBlend, c = t.popLayer, a = e.Applicative0(), g = se(a), _ = t.popAlpha;
  return (d) => (l) => (h) => ($) => {
    const p = l.wobble ? n(!0)(h)($)(l.tokenInside)(l.tokenInsideStroke) : r.bind(t.insideTokenStyle(d))((m) => {
      if (m === "GenieSilhouette")
        return o(!1)(h)($)(l.tokenInside)(l.tokenInsideStroke);
      if (m === "ConvexAbsorb")
        return i(h)($)(l.tokenInside)(l.tokenInsideStroke);
      f();
    });
    if (l.tokenInsideBlend === "Difference")
      return r.bind(t.pushLayer(sN))(() => r.bind(t.pushBlend(gi))(() => r.bind(t.pushClip(xu(h)($))($u))(() => r.bind(p)(() => r.bind(s)(() => r.bind(u)(() => r.bind(c)(() => r.bind(t.pushLayer(uN))(() => r.bind(g((m) => {
        const y = _n(m._1)($.nodes);
        return y.tag === "Just" && _s(y._1).alpha > 0 ? Ag(t)(m._2.shape)({ x: m._2.x, y: m._2.y, w: m._2.w, h: m._2.h })(7)(T(
          "Just",
          { color: en, flat: !1 }
        ))(x) : a.pure();
      })(Wn(h.nodes)))(() => c)))))))));
    if (l.tokenInsideBlend === "Normal")
      return r.bind(t.pushClip(xu(h)($))($u))(() => r.bind(t.pushAlpha(l.tokenInsideAlpha))(() => r.bind(p)(() => r.bind(_)(() => s))));
    f();
  };
}, tl = (t) => {
  const n = t.Monad0().Bind1(), e = Qi(t), r = Qi(t), o = t.popClip, i = t.popLayer;
  return (s) => (u) => (c) => (a) => n.bind(t.pushLayer(iN))(() => n.bind(t.pushClip(Sx(u)(c)(a))(aN))(() => n.bind(s.wobble ? e(!0)(c)(a)(s.tokenOutsideFill)(s.tokenOutsideStroke) : r(!1)(c)(a)(s.tokenOutsideFill)(s.tokenOutsideStroke))(() => n.bind(o)(() => i))));
}, Wx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = se(r);
  return (i) => (s) => (u) => (c) => (a) => (g) => {
    const _ = os(g).length, d = et(_ + 1 | 0), l = (m) => {
      const y = (u * d - et(m)) / 1.5, N = y < 0 ? 0 : y > 1 ? 1 : y;
      return N * N * (3 - 2 * N);
    }, $ = ((m) => {
      let y = m, N = !0, v;
      for (; N; ) {
        const w = y;
        if (w >= _) {
          N = !1, v = w;
          continue;
        }
        if (l(w) >= 1) {
          y = w + 1 | 0;
          continue;
        }
        N = !1, v = w;
      }
      return v;
    })(0), p = $ >= _ ? [] : ar((m) => l(m) > 0)(It($, _ - 1 | 0)).init;
    return e.bind((() => {
      const m = t.drawText({
        x: c,
        y: a,
        content: mn($)(g),
        font: i,
        color: s,
        align: pu,
        baseline: Yr
      });
      return $ > 0 ? m : r.pure();
    })())(() => o((m) => e.bind(t.measureText(i)(mn(m)(g)))((y) => {
      const N = l(m);
      return t.drawText({
        x: c + y,
        y: a - (1 - N) * 10,
        content: mn(1)(mo(Ze(mn(m)(g)))(g)),
        font: i,
        color: { ...s, a: $n(Ne(N * et(s.a))) },
        align: pu,
        baseline: Yr
      });
    }))(p));
  };
}, ps = (t) => (n) => (e) => (r) => {
  const o = z((h) => et(li(1)(os(h).length)))(r), i = Ao(1)(J(Rr)(0)(o)), s = Xr(n)(e)(t), u = s * i, c = li(1)(r.length), g = ((h) => ($) => (p) => {
    let m = h, y = $, N = p, v = !0, w;
    for (; v; ) {
      const k = m, L = y, B = Bt((Y) => x, (Y) => (X) => T("Just", { head: Y, tail: X }), N);
      if (B.tag === "Nothing") {
        v = !1, w = li(0)(c - 1 | 0);
        continue;
      }
      if (B.tag === "Just") {
        if (L + B._1.head >= u) {
          v = !1, w = k;
          continue;
        }
        m = k + 1 | 0, y = L + B._1.head, N = B._1.tail;
        continue;
      }
      f();
    }
    return w;
  })(0)(0)(o), _ = J(Rr)(0)(g < 1 ? [] : bt(0, g, o)), d = _ / i;
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
}, Dx = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(ps(r)(0)(0)(z(l_)(o)).line))((i) => {
    const s = i + 28;
    return n.Applicative0().pure({ x: e.x + e.w / 2 - s / 2, y: e.y - 25.2 - 14, w: s, h: 25.2 });
  });
}, Hx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Dx(t), o = n.Applicative0(), i = nr.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => Xg(yt((a) => a)(c)))(i((c) => {
    if (c._2.tag === "Filling" && c._2._1.labels.length !== 0) {
      const a = _n(c._2._1.node)(s.nodes);
      if (a.tag === "Just")
        return e.bind(r(a._1)(c._2._1.progress)(c._2._1.labels))((g) => o.pure(T("Just", b(c._1, g))));
      if (a.tag === "Nothing")
        return o.pure(x);
      f();
    }
    return o.pure(x);
  })(Wn(u.tokens)));
}, Ox = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => (i) => (s) => (u) => (c) => {
    const a = Kg(e)(r)(o)(i)(s)(u);
    return n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(ps(i)(s)(u)(Jt(c)(hc)).line))((g) => n.Applicative0().pure({
      x: a.x + 14 + g / 2 - g / 2 - 14,
      y: a.y - 6 - 8 - 6.6 - 6,
      w: g + 28,
      h: 25.2
    }));
  };
}, zx = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Ox(t), o = n.Applicative0(), i = nr.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => Xg(yt((a) => a)(c)))(i((c) => {
    if (c._2.tag === "Travelling" && c._2._1.labels.length !== 0) {
      const a = _n(c._2._1.target)(s.nodes), g = _n(c._2._1.source)(s.nodes), _ = $r(c._2._1.edge)(s.edges);
      if (_.tag === "Just" && g.tag === "Just" && a.tag === "Just")
        return e.bind(r((() => {
          if (c._2._1.direction === "Forward")
            return _._1;
          if (c._2._1.direction === "Backward")
            return Ln(_._1);
          f();
        })())(g._1)(a._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost)(c._2._1.labels))((d) => o.pure(T(
          "Just",
          b(c._1, d)
        )));
    }
    return o.pure(x);
  })(Wn(u.tokens)));
}, pc = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = zx(t), o = Hx(t);
  return (i) => (s) => e.bind(r(i)(s))((u) => e.bind(o(i)(s))((c) => n.Applicative0().pure(Ex((() => {
    const a = (g) => {
      if (g.tag === "Leaf")
        return A;
      if (g.tag === "Node")
        return zt("Node", g._1, g._2, g._3, void 0, a(g._5), a(g._6));
      f();
    };
    return kt(P.compare)(Lt(On.foldr, a(u)));
  })())(u)([
    ...yt((a) => {
      const g = _n(a._1)(s.nodes);
      return g.tag === "Just" && _s(g._1).alpha > 0 ? T("Just", { x: a._2.x, y: a._2.y, w: a._2.w, h: a._2.h }) : x;
    })(Wn(i.nodes)),
    ...(() => {
      const a = (g, _) => {
        if (g.tag === "Leaf")
          return _;
        if (g.tag === "Node")
          return a(g._5, qt("Cons", g._4, a(g._6, _)));
        f();
      };
      return Lt(Xt.foldr, a(c, Yt));
    })()
  ]))));
}, nl = (t) => (n) => (e) => {
  const r = Jo(6)(0.55)(Bi(0)(1)((1 - t) / 0.06)), o = t > 0.94, i = o && e > 1e-4, s = Jo(6)(0.55)(Bi(0)(1)(t / 0.06)), u = t < 0.06, c = u && n > 1e-4, a = o && e <= 1e-4;
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
}, qx = (t) => {
  const n = t.Monad0().Bind1(), e = Vg(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const c = nl(s)(0)(0), a = { family: r.fontFamily, size: 11, weight: 500 }, g = ps(s)(0)(0)(Jt(u)(hc));
    return n.bind(t.measureText(a)(g.line))((_) => {
      const d = i.x + i.w / 2, l = _ + 28, h = i.y - 25.2 - 14, $ = d - l / 2, p = [1, d, h + 25.2, 2, d, i.y], m = { x: d, y: h + 12.6 };
      return e(c)(d - l / 2)(h + 25.2)(m)(n.bind(t.drawRoundedRect({ x: d - l / 2, y: h + 1.5, w: l, h: 25.2 })(6)(T(
        "Just",
        { color: r.chipShadow, flat: !0 }
      ))(x))(() => n.bind(t.drawRoundedRect({ x: $, y: h, w: l, h: 25.2 })(6)(T("Just", { color: r.chip, flat: !0 }))(T(
        "Just",
        { color: r.chipHairline, width: 1, lineJoin: vn, lineCap: le }
      )))(() => n.bind(t.strokePath(p)({
        color: r.chipHairline,
        width: 1,
        lineJoin: vn,
        lineCap: le
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
}, Yx = (t) => {
  const n = Vg(t), e = t.Monad0(), r = e.Bind1(), o = se(e.Applicative0()), i = Wx(t);
  return (s) => (u) => (c) => (a) => (g) => (_) => (d) => (l) => (h) => {
    const $ = ps(g)(_)(d)(Jt(l)(hc)), p = $.line, m = $.phaseInLabel / 0.45, y = m < 0 ? 0 : m > 1 ? 1 : m, N = h.w, v = h.y, w = h.x, k = w + 14, L = h.h, I = v + L / 2;
    return n(nl(g)(_)(d))(w)(v + L)({ x: w + N / 2, y: I })(r.bind(o((B) => t.fillPath(ds(B)(1.5))({
      color: s.trailDot,
      flat: !0
    }))(Px(h)(Kg(u)(c)(a)(g)(_)(d))))(() => r.bind(t.drawRoundedRect({ x: w, y: v, w: N, h: L })(3)(T(
      "Just",
      { color: s.chipPillFill, flat: !0 }
    ))(x))(() => i({ family: s.fontFamily, size: 11, weight: 500 })(s.chipPillText)(y)(k)(I)(p))));
  };
}, $c = (t) => {
  const n = Yx(t), e = t.Monad0(), r = e.Applicative0(), o = qx(t), i = e.Bind1(), s = se(r), u = t.popLayer;
  return (c) => (a) => (g) => (_) => i.bind(t.pushLayer(cN))(() => i.bind(s((d) => {
    if (d._2.tag === "Travelling") {
      if (d._2._1.labels.length !== 0) {
        const l = _n(d._2._1.target)(a.nodes), h = _n(d._2._1.source)(a.nodes), $ = $r(d._2._1.edge)(a.edges), p = Yg(d._1)(_);
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
}, el = (t) => {
  const n = pc(t), e = $c(t);
  return (r) => (o) => (i) => t.Monad0().Bind1().bind(n(o)(i))((s) => e(r)(o)(i)(s));
}, Xx = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => {
    const i = o.length - 1 | 0, s = i < 1 ? [] : bt(0, i, o), u = s.length - 1 | 0, c = u >= 0 && u < s.length ? T("Just", s[u]) : x, a = o.length - 1 | 0, g = a >= 0 && a < o.length ? T("Just", o[a]) : x;
    if (g.tag === "Just" && c.tag === "Just") {
      const _ = fn(0.78)(1.18)(Io(o) + 19 | 0), d = fn(0.4)(0.62)(_.prng), l = r.wobble ? 8.75 * d.value : 4.375, h = fn(0.4)(0.62)(d.prng), $ = r.wobble ? 8.75 * h.value : 4.375, p = g._1.y - c._1.y, m = g._1.x - c._1.x, y = En(m * m + p * p), N = p / y, v = -N, w = m / y, k = g._1.x + w * 0.875, L = g._1.y + N * 0.875, I = r.wobble ? 8.75 * _.value : 8.75, B = k - w * I, Y = L - N * I, X = B + v * l, C = Y + w * l, F = [1, k, L, 2, B + v * 4.375, Y + w * 4.375, 2, B - v * 4.375, Y - w * 4.375, 5], U = B - v * $, tt = Y - w * $, q = { color: r.arrowFill, width: 2, lineJoin: vn, lineCap: De };
      return y <= 1e-4 ? e.pure() : r.wobble ? n.Bind1().bind(t.strokePath([1, X, C, 2, k, L])(q))(() => t.strokePath([1, U, tt, 2, k, L])(q)) : t.fillPath(F)({ color: r.arrowFill, flat: !0 });
    }
    return e.pure();
  };
}, Vx = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = se(e), i = t.popAlpha, s = Xx(t);
  return (u) => (c) => (a) => (g) => {
    const _ = ex(8)(a);
    if (g.hi <= g.lo)
      return e.pure();
    const d = fx(_)(g.lo)(g.hi);
    if (d.length === 0)
      return e.pure();
    const l = { color: u.edge, width: u.wobble ? 2 : 0.9375, lineJoin: vn, lineCap: De }, h = u.wobble ? fn(-10)(4)(Io(d)).value : 0, $ = u.wobble ? $x(h)(d) : d;
    return r.bind(u.wobble ? o((p) => r.bind(t.pushAlpha(p.alpha))(() => r.bind(t.strokePath(p.path)(l))(() => i)))((() => {
      const p = Io(d);
      return $.length < 2 ? [] : Pr(Ix)(p)(!1)($);
    })()) : t.strokePath(jN(d))(l))(() => {
      const p = s(u)($);
      return g.hi >= 0.999 ? p : e.pure();
    });
  };
}, rl = (t) => {
  const n = Vx(t), e = t.Monad0().Applicative0(), r = se(e);
  return (o) => (i) => (s) => r((u) => {
    const c = $r(u._1)(s.edges);
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
}, Ux = (t) => (n) => {
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
  }, r = J((i) => (s) => (i * 31 | 0) + Be(s) | 0)(5381)(er(n.frameTitle)), o = (i) => {
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
  return J((i) => (s) => {
    const u = s._2;
    return wx((c) => {
      if (c.tag === "Nothing")
        return T("Just", u);
      if (c.tag === "Just")
        return T(
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
              })() ? T("Just", c._2) : x)(Wn(t.edges));
              if (0 < u.length) {
                const c = u[0].length - 1 | 0, a = c < 1 ? [] : bt(0, c, u[0]), g = a.length - 1 | 0;
                if (g >= 0 && g < a.length) {
                  const _ = u[0].length - 1 | 0;
                  return _ >= 0 && _ < u[0].length ? fr(u[0][_].y - a[g].y)(u[0][_].x - a[g].x) : 0;
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
                const s = $r(i._2._1.edge)(t.edges);
                if (s.tag === "Just") {
                  const u = s._1.length - 1 | 0, c = u < 1 ? [] : bt(0, u, s._1), a = c.length - 1 | 0;
                  if (a >= 0 && a < c.length) {
                    const g = s._1.length - 1 | 0;
                    return g >= 0 && g < s._1.length ? fr(s._1[g].y - c[a].y)(s._1[g].x - c[a].x) : 0;
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
                const s = $r(i._2._1.edge)(t.edges);
                if (s.tag === "Just")
                  return 1 < s._1.length && 0 < s._1.length ? fr(s._1[1].y - s._1[0].y)(s._1[1].x - s._1[0].x) : 0;
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
}, Kx = (t) => J((n) => (e) => (n * 31 | 0) + Be(e) | 0)(5381)(er(t.frameTitle)), ol = (t) => {
  const n = Mg(t), e = t.Monad0().Applicative0(), r = se(e);
  return (o) => (i) => (s) => (u) => {
    const c = Kx(u), a = Ux(s)(u);
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
          return d.tag === "Just" ? T("Just", d._1) : d.tag === "Nothing" && kx(g._1)(u.visited) ? T("Just", { t: 1, angle: 0, bigCircle: !1, frameHash: c }) : x;
        })())(g._1)(g._2)(_._1);
      if (_.tag === "Nothing")
        return e.pure();
      f();
    })(Wn(s.nodes));
  };
}, il = (t) => t, sl = (t) => (n) => {
  const e = n.vw / n.vh, r = n.vh * t, o = { ...n, vx: n.vx - (r - n.vw) / 2, vw: r }, i = n.vw / t, s = { ...n, vy: n.vy - (i - n.vh) / 2, vh: i };
  return t <= 0 || n.vw <= 0 || n.vh <= 0 ? n : t > e ? o : t < e ? s : n;
}, Mx = (t) => (n) => (e) => {
  const r = st.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = st.compare(n)(o);
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
}, jx = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Zx = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, tJ = (t) => (n) => {
  const e = Kn(t.angle), r = re(t.angle);
  return { a: r, b: e, c: 0, d: 1, e: -n * r, f: n * e - t.boxHeight / 2 };
}, nJ = (t) => [t.box.ground.a, t.box.ground.b, t.box.ground.c, t.box.ground.d, t.box.top.a, t.box.top.b, t.box.top.c, t.box.top.d], Gr = (t) => (n) => {
  const e = (r) => Mx(0)(255)($n(cr(et(r) * t)));
  return { r: e(n.r), g: e(n.g), b: e(n.b), a: n.a };
}, bn = (t) => (n) => (e) => (r) => ({ x: (n - e) * re(t.angle), y: (n + e) * Kn(t.angle) - r }), dr = (t) => {
  const n = Bt((e) => x, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Jt(n._1.tail)((e) => [2, e.x, e.y]), 5];
  f();
}, eJ = (t) => (n) => (e) => (r) => (o) => {
  const i = (() => {
    if (t === "Forward")
      return o;
    if (t === "Backward")
      return Ln(o);
    f();
  })();
  if (0 < i.length) {
    const u = Qr(i)(Ua(0)(1)(Xr(e)(r)(n)));
    if (u.tag === "Nothing")
      return i[0];
    if (u.tag === "Just")
      return u._1;
    f();
  }
  const s = Qr(i)(Ua(0)(1)(Xr(e)(r)(n)));
  if (s.tag === "Nothing")
    return { x: 0, y: 0 };
  if (s.tag === "Just")
    return s._1;
  f();
}, rJ = (t) => {
  const n = Bt((e) => x, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...Jt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, oJ = (t) => {
  const n = Bt((e) => x, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { vx: 0, vy: 0, vw: 0, vh: 0 };
  if (n.tag === "Just") {
    const e = J((r) => (o) => ({ minX: Ka(r.minX)(o.x), minY: Ka(r.minY)(o.y), maxX: Ju(r.maxX)(o.x), maxY: Ju(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { vx: e.minX - 40, vy: e.minY - 40, vw: e.maxX - e.minX + 80, vh: e.maxY - e.minY + 80 };
  }
  f();
}, iJ = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => {
    const i = o.box, s = o.np, u = { color: r.nodeStroke, width: 1, lineJoin: vn, lineCap: le };
    return n.bind(t.fillStrokePath(dr([i.ground.d, i.ground.c, i.top.c, i.top.d]))({ color: Gr(0.66)(r.nodeFill), flat: !0 })(u))(() => n.bind(t.fillStrokePath(dr([
      i.ground.b,
      i.ground.c,
      i.top.c,
      i.top.b
    ]))({ color: Gr(0.82)(r.nodeFill), flat: !0 })(u))(() => n.bind(t.fillStrokePath(dr([i.top.a, i.top.b, i.top.c, i.top.d]))({
      color: Gr(1)(r.nodeFill),
      flat: !0
    })(u))(() => t.drawTextAffine(tJ(e)(s.y + s.h))({
      x: s.x + s.w / 2,
      y: 0,
      content: s.label,
      font: { family: r.fontFamily, size: 11, weight: 600 },
      color: r.text,
      align: gs,
      baseline: Yr
    }))));
  };
}, sJ = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => (i) => {
    const s = { color: r.tokenOutsideStroke, width: 1, lineJoin: vn, lineCap: le }, u = i.x - 5.5, c = i.x + 5.5, a = i.y - 5.5, g = i.y + 5.5, _ = o + 11, d = bn(e)(u)(a)(_), l = bn(e)(c)(a)(_), h = bn(e)(c)(g)(_), $ = bn(e)(u)(g)(_), p = bn(e)(c)(g)(o), m = bn(e)(c)(a)(o);
    return n.bind(t.fillStrokePath(dr([bn(e)(u)(g)(o), p, h, $]))({ color: Gr(0.66)(r.tokenOutsideFill), flat: !0 })(s))(() => n.bind(t.fillStrokePath(dr([
      m,
      p,
      h,
      l
    ]))({ color: Gr(0.82)(r.tokenOutsideFill), flat: !0 })(s))(() => t.fillStrokePath(dr([d, l, h, $]))({
      color: Gr(1)(r.tokenOutsideFill),
      flat: !0
    })(s)));
  };
}, uJ = (t) => {
  const n = sJ(t);
  return (e) => (r) => (o) => (i) => {
    if (i.tag === "Travelling") {
      const s = jx(i._1.edge)(o.edges);
      return s.tag === "Just" ? T(
        "Just",
        (() => {
          const u = eJ(i._1.direction)(i._1.progress)(i._1.holdPre)(i._1.holdPost)(s._1);
          return { depth: u.x + u.y, draw: n(e)(r)(0)(u) };
        })()
      ) : x;
    }
    if (i.tag === "Filling") {
      const s = Zx(i._1.node)(o.nodes);
      if (s.tag === "Just")
        return T(
          "Just",
          (() => {
            const u = { x: s._1.x + s._1.w / 2, y: s._1.y + s._1.h / 2 };
            return { depth: u.x + u.y, draw: n(e)(r)(e.boxHeight)(u) };
          })()
        );
    }
    return x;
  };
}, cJ = { angle: 0.5235987755982988, boxHeight: 26, transparentBg: !0 }, aJ = (t) => (n) => {
  const e = n.y + n.h, r = n.x + n.w;
  return {
    ground: { a: bn(t)(n.x)(n.y)(0), b: bn(t)(r)(n.y)(0), c: bn(t)(r)(e)(0), d: bn(t)(n.x)(e)(0) },
    top: { a: bn(t)(n.x)(n.y)(t.boxHeight), b: bn(t)(r)(n.y)(t.boxHeight), c: bn(t)(r)(e)(t.boxHeight), d: bn(t)(n.x)(e)(t.boxHeight) },
    depth: (n.x + r) / 2 + (n.y + e) / 2
  };
}, ul = (t) => (n) => z((e) => ({ np: e, box: aJ(t)(e) }))((() => {
  const e = (r, o) => {
    if (r.tag === "Leaf")
      return o;
    if (r.tag === "Node")
      return e(r._5, qt("Cons", r._4, e(r._6, o)));
    f();
  };
  return Lt(Xt.foldr, e(n.nodes, Yt));
})()), fJ = (t) => (n) => [
  ...Jt(ul(t)(n))(nJ),
  ...(() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, qt("Cons", r._4, e(r._6, o)));
      f();
    };
    return Jt(Lt(Xt.foldr, e(n.edges, Yt)))(z((r) => bn(t)(r.x)(r.y)(0)));
  })()
], gJ = (t) => {
  const n = t.to.y - t.from.y, e = t.to.x - t.from.x, r = Ju(1e-4)(En(e * e + n * n)), o = n / r, i = e / r, s = t.to.y - o * 7, u = t.to.x - i * 7;
  return dr([t.to, { x: u - o * 3, y: s + i * 3 }, { x: u + o * 3, y: s - i * 3 }]);
}, lJ = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => (i) => (s) => (u) => {
    const c = bn(r)(u.x)(u.y)(0), a = bn(r)(s.x)(s.y)(0);
    return n.Bind1().bind(t.strokePath(rJ([a, c]))({
      color: o.edge,
      width: 1.5,
      lineJoin: vn,
      lineCap: De
    }))(() => {
      const g = t.fillPath(gJ({ from: a, to: c }))({ color: o.arrowFill, flat: !0 });
      return i ? g : e.pure();
    });
  };
}, _J = (t) => {
  const n = lJ(t);
  return (e) => (r) => (o) => {
    const i = wn(He, o, bt(1, o.length, o)), s = i.length - 1 | 0;
    return Ft((u) => (c) => ({ depth: (c._1.x + c._1.y + c._2.x + c._2.y) / 2, draw: n(e)(r)(u === s)(c._1)(c._2) }))(i);
  };
}, dJ = (t) => {
  const n = iJ(t), e = uJ(t), r = _J(t), o = t.Monad0(), i = jg(t), s = Hi(o.Applicative0())(Qt);
  return (u) => (c) => (a) => (g) => {
    const _ = dc(c), d = [
      ...(() => {
        const l = (h, $) => {
          if (h.tag === "Leaf")
            return $;
          if (h.tag === "Node")
            return l(h._5, qt("Cons", h._4, l(h._6, $)));
          f();
        };
        return Jt(Lt(Xt.foldr, l(a.edges, Yt)))(r(u)(_));
      })(),
      ...z((l) => ({ depth: l.box.depth, draw: n(u)(_)(l) }))(ul(u)(a)),
      ...yt(e(u)(_)(a))((() => {
        const l = (h, $) => {
          if (h.tag === "Leaf")
            return $;
          if (h.tag === "Node")
            return l(h._5, qt("Cons", h._4, l(h._6, $)));
          f();
        };
        return Lt(Xt.foldr, l(g.tokens, Yt));
      })())
    ];
    return o.Bind1().bind(i(_)(u.transparentBg)(1)(oJ(fJ(u)(a))))(() => s((l) => l.draw)(kt((l) => (h) => ft.compare(l.depth)(h.depth))(d)));
  };
}, cl = (t, n) => ({ tag: t, _1: n }), hJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, pJ = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, $J = /* @__PURE__ */ cl("ResolvedLabels"), mJ = (t) => {
  const n = Kt((e) => e.role === "FlyThrough")(t.levels);
  if (n.tag === "Just")
    return n._1;
  if (n.tag === "Nothing")
    return Ji(t);
  f();
}, yJ = (t) => (n) => (e) => {
  const r = e.frameTitle === "" ? 0 : 40, o = Xu(n)(e.camera);
  return (() => {
    if (t.outputAspect.tag === "Nothing")
      return il;
    if (t.outputAspect.tag === "Just")
      return sl(t.outputAspect._1);
    f();
  })()({ vx: o.x - t.padding, vy: o.y - t.padding - r, vw: o.w + 2 * t.padding, vh: o.h + 2 * t.padding + r });
}, NJ = (t) => (n) => {
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just") {
    const e = hJ(n._1)(t.segment.layout.nodes);
    if (e.tag === "Nothing")
      return [];
    if (e.tag === "Just") {
      const r = e._1.x * t.segment.placement.scale + t.segment.placement.tx, o = e._1.y * t.segment.placement.scale + t.segment.placement.ty, i = e._1.w * t.segment.placement.scale, s = e._1.h * t.segment.placement.scale;
      return [1, r, o, 2, r + i, o, 2, r + i, o + s, 2, r, o + s, 5];
    }
  }
  f();
}, xJ = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => (o) => {
    if (r === "")
      return n.Applicative0().pure();
    const i = o.vh / 720, s = 15 * i, u = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: s, weight: 600 };
    return e.bind(t.measureText(u)(r))((c) => {
      const a = o.vy + 12 * i, g = s + 6 * i * 2, _ = c + 11 * i * 2, d = o.vx + o.vw / 2;
      return e.bind(t.drawRoundedRect({ x: d - _ / 2, y: a, w: _, h: g })(g / 2)(T(
        "Just",
        { color: { r: 255, g: 255, b: 255, a: 240 }, flat: !0 }
      ))(T(
        "Just",
        { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1 * i, lineJoin: vn, lineCap: De }
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
}, JJ = (t) => {
  const n = el(t), e = $c(t), r = t.Monad0(), o = r.Bind1(), i = jg(t), s = r.Applicative0(), u = rl(t), c = ol(t)(_c), a = Rx(t), g = tl(t), _ = Zg(t), d = xJ(t);
  return (l) => (h) => ($) => (p) => (m) => (y) => (N) => {
    const v = dc(l.theme), w = (() => {
      if (N.tag === "ResolvedLabels")
        return n(v)(m)(y);
      if (N.tag === "SpringLabels")
        return e(v)(m)(y)(N._1);
      f();
    })();
    return o.bind(i(v)(l.transparentBg)(h)(p))(() => o.bind((() => {
      const k = o.bind(u(v)(m)(y))(() => o.bind(c(v)(m)(y))(() => o.bind(a(v)(m)(y))(() => o.bind(g(v)(p)(m)(y))(() => o.bind(_(_N)(v)(m)(y))(() => w)))));
      return $ ? k : s.pure();
    })())(() => o.bind(l.watermark === "" ? t.Monad0().Applicative0().pure() : t.drawText({
      x: p.vx + 6,
      y: p.vy + 6,
      content: l.watermark,
      font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 9, weight: 600 },
      color: { r: 180, g: 180, b: 180, a: 255 },
      align: pu,
      baseline: oN
    }))(() => d(y.frameTitle)(p))));
  };
}, vJ = (t) => {
  const n = t.Monad0(), e = el(t), r = $c(t), o = n.Bind1(), i = rl(t), s = ol(t), u = tl(t), c = t.popTransform, a = Zg(t), g = t.popBakedTransform, _ = t.popClip, d = t.popAlpha;
  return (l) => (h) => ($) => (p) => (m) => {
    const y = m.state, N = { tx: m.segment.placement.tx, ty: m.segment.placement.ty, sx: m.segment.placement.scale, sy: m.segment.placement.scale }, v = dc(l.theme), w = m.segment.layout, k = jn(w), L = { vx: k.x - 1e3, vy: k.y - 1e3, vw: k.w + 2e3, vh: k.h + 2e3 }, I = 11 * m.segment.placement.scale * h >= 5 ? _c : bx, B = (() => {
      if (I === "LabelsHidden")
        return n.Applicative0().pure();
      if (I === "LabelsShown")
        return $.tag === "Leaf" ? e(v)(w)(y) : r(v)(w)(y)($);
      f();
    })(), Y = NJ(p)((() => {
      const X = m.segment.path.length - 1 | 0;
      return X >= 0 && X < m.segment.path.length ? T("Just", m.segment.path[X]) : x;
    })());
    return o.bind(t.pushAlpha(m.bgAlpha))(() => o.bind(t.pushClip(Y)($u))(() => o.bind(t.pushTransform(N))(() => o.bind(i(v)(w)(y))(() => o.bind(s(I)(v)(w)(y))(() => o.bind(u(v)(L)(w)(y))(() => o.bind(c)(() => o.bind(t.pushBakedTransform(N))(() => o.bind(a(dN)(v)(w)(y))(() => o.bind(g)(() => o.bind(t.pushTransform(N))(() => o.bind(B)(() => o.bind(c)(() => o.bind(_)(() => d))))))))))))));
  };
}, TJ = (t) => (n) => {
  const e = Xu(t)(n);
  return { vx: e.x, vy: e.y, vw: e.w, vh: e.h };
}, Ur = (t) => (n) => n.diving || n.levels.length > 1 ? (() => {
  if (t.outputAspect.tag === "Nothing")
    return il;
  if (t.outputAspect.tag === "Just")
    return sl(t.outputAspect._1);
  f();
})()(TJ(n.rootLayout)(n.camera)) : yJ(t)(n.rootLayout)({ ...Ji(n).state, camera: n.camera }), al = (t) => {
  const n = dJ(t), e = t.Monad0(), r = e.Applicative0(), o = e.Bind1(), i = vJ(t), s = JJ(t);
  return (u) => (c) => (a) => {
    if (u.theme === "Isometric")
      return n({ ...cJ, transparentBg: u.transparentBg })(u.theme)(Ji(a).segment.layout)(Ji(a).state);
    const g = Ur(u)(a), _ = (l) => (h) => {
      if (h.length === 0)
        return r.pure();
      const $ = Bt((p) => x, (p) => (m) => T("Just", { head: p, tail: m }), h);
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
    }, d = Bt((l) => x, (l) => (h) => T("Just", { head: l, tail: h }), a.levels);
    if (d.tag === "Nothing")
      return r.pure();
    if (d.tag === "Just") {
      const l = d._1.tail, h = d._1.head;
      return o.bind(s(u)(a.hasDives ? g.vw / pJ(1)(jn(a.rootLayout).w) : 1)(h.role === "Active" || h.role === "FlyThrough")(g)(h.segment.layout)(mJ(a).state)(l.length === 0 && c.tag !== "Leaf" ? cl("SpringLabels", c) : $J))(() => _(h)(l));
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
}, wJ = /* @__PURE__ */ pc(Rg), ja = /* @__PURE__ */ al(Rg), Za = (t) => {
  const n = t.vx + t.vw - 4, e = t.vy + t.vh - 4, r = t.vx + 4, o = t.vy + 4, i = (s) => {
    if (s.tag === "Leaf")
      return A;
    if (s.tag === "Node")
      return zt("Node", s._1, s._2, s._3, { ...s._4, x: Ma(r)(n - s._4.w)(s._4.x), y: Ma(o)(e - s._4.h)(s._4.y) }, i(s._5), i(s._6));
    f();
  };
  return i;
}, kJ = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
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
    outputAspect: r.width <= 0 || r.height <= 0 ? x : T("Just", r.width / r.height)
  }, c = LN(e)(r);
  return () => {
    const a = c(), g = o.levels.length - 1 | 0;
    if (g >= 0 && g < o.levels.length) {
      const d = wJ(o.levels[g].segment.layout)(o.levels[g].state)(a)(), l = hu(i)(Za(Ur(u)(o))(d))(s);
      return ja(u)(l.applied)(o)(a)(), l.springs;
    }
    const _ = hu(i)(Za(Ur(u)(o))(A))(s);
    return ja(u)(_.applied)(o)(a)(), _.springs;
  };
}, fl = (t) => t, zo = (t) => t, tf = /* @__PURE__ */ zo("Light"), bJ = /* @__PURE__ */ zo("Dark"), LJ = /* @__PURE__ */ zo("Blueprint"), EJ = /* @__PURE__ */ zo("Whiteboard"), SJ = /* @__PURE__ */ zo("Isometric"), CJ = /* @__PURE__ */ fl("PaintBackground"), PJ = /* @__PURE__ */ fl("TransparentBackground"), tr = (t) => "rgb(" + un(t.r) + "," + un(t.g) + "," + un(t.b) + ")", me = /* @__PURE__ */ Rf(/* @__PURE__ */ Af("Fixed", /* @__PURE__ */ Ff(0)(20)(4))), GJ = (t) => "translate(" + me(t.tx) + "," + me(t.ty) + ") scale(" + me(t.sx) + "," + me(t.sy) + ")", wt = /* @__PURE__ */ Rf(/* @__PURE__ */ Af("Fixed", /* @__PURE__ */ Ff(0)(20)(2))), mc = (t) => {
  const n = [];
  let e = 0;
  for (; e < t.length; ) {
    const r = e, o = r >= 0 && r < t.length ? T("Just", t[r]) : x;
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
  return es(" ")(n);
}, IJ = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, vu = /* @__PURE__ */ (() => {
  const t = qe("&")("&amp;"), n = qe("<")("&lt;"), e = (() => {
    const r = qe(">")("&gt;"), o = (() => {
      const i = qe('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), AJ = (t) => {
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
}, FJ = (t) => (n) => {
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
    const i = r, s = i >= 0 && i < n.length ? T("Just", n[i]) : x;
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
      return FJ(r._1)(n);
    f();
  };
}, gl = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => IJ
}, RJ = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => gl
}, BJ = { pure: (t) => (n) => () => t, Apply0: () => gl }, QJ = { Applicative0: () => BJ, Bind1: () => RJ }, WJ = (t) => (n) => '<defs><pattern id="' + t + '" x="0" y="0" width="' + wt(n.tile) + '" height="' + wt(n.tile) + '" patternUnits="userSpaceOnUse">' + (n.bgColor.a === 0 ? "" : '<rect width="' + wt(n.tile) + '" height="' + wt(n.tile) + '" fill="' + tr(n.bgColor) + '" fill-opacity="' + wt(et(n.bgColor.a) / 255) + '"/>') + '<circle cx="' + wt(n.tile / 2) + '" cy="' + wt(n.tile / 2) + '" r="' + wt(n.dotRadius) + '" fill="' + tr(n.dotColor) + '"/></pattern></defs><rect x="' + wt(n.viewport.vx) + '" y="' + wt(n.viewport.vy) + '" width="' + wt(n.viewport.vw) + '" height="' + wt(n.viewport.vh) + '" fill="url(#' + t + ')"/>', nf = (t) => (n) => '<path d="' + mc(t) + '" fill="' + tr(n) + '" fill-opacity="' + wt(et(n.a) / 255) + '"/>', DJ = (t) => (n) => (e) => (r) => '<rect x="' + wt(t.x) + '" y="' + wt(t.y) + '" width="' + wt(t.w) + '" height="' + wt(t.h) + '" rx="' + wt(n) + '"' + (() => {
  if (e.tag === "Just")
    return ' fill="' + tr(e._1.color) + '" fill-opacity="' + wt(et(e._1.color.a) / 255) + '"';
  if (e.tag === "Nothing")
    return ' fill="none"';
  f();
})() + (() => {
  if (r.tag === "Just")
    return ' stroke="' + tr(r._1.color) + '" stroke-opacity="' + wt(et(r._1.color.a) / 255) + '" stroke-width="' + wt(r._1.width) + '" stroke-linejoin="' + (() => {
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
})() + "/>", ef = (t) => (n) => '<path d="' + mc(t) + '" fill="none" stroke="' + tr(n.color) + '" stroke-opacity="' + wt(et(n.color.a) / 255) + '" stroke-width="' + wt(n.width) + '" stroke-linejoin="' + (() => {
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
  const n = x0(zr(t.content));
  return '<text x="' + wt(t.x) + '" y="' + wt(t.y) + '"' + (() => {
    if (t.baseline === "BaselineTop")
      return ' dy="0.8em"';
    if (t.baseline === "BaselineMiddle")
      return ' dy="0.32em"';
    if (t.baseline === "BaselineAlphabetic" || t.baseline === "BaselineBottom")
      return "";
    f();
  })() + ' fill="' + tr(t.color) + '" fill-opacity="' + wt(et(t.color.a) / 255) + '" font-size="' + wt(t.font.size) + '" font-family="Ilisarniq, ui-sans-serif, system-ui, sans-serif" font-weight="' + un(t.font.weight) + '" text-anchor="' + (() => {
    if (t.align === "AlignLeft")
      return "start";
    if (t.align === "AlignCenter")
      return "middle";
    if (t.align === "AlignRight")
      return "end";
    f();
  })() + '">' + (n.length === 1 && n[0].style === "RunText" ? vu(n[0].text) : es("")(z(AJ)(n))) + "</text>";
}, HJ = (t) => "matrix(" + me(t.a) + " " + me(t.b) + " " + me(t.c) + " " + me(t.d) + " " + me(t.e) + " " + me(t.f) + ")", ll = {
  fillPath: (t) => (n) => (e) => {
    const r = ui(e)(t);
    return () => {
      const o = r();
      return Fn(nf(o)(n.color))(e)();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = ui(e)(t);
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
    const o = ui(r)(t);
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
      return Fn(DJ((() => {
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
      })())(e)(r.tag === "Just" ? T(
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
    const e = 'transform="' + HJ(t) + '"';
    return (e === "" ? "<g>" : "<g " + e + ">") + rf(n) + "</g>";
  })()),
  pushTransform: (t) => Fn((() => {
    const n = 'transform="' + GJ(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popTransform: /* @__PURE__ */ Fn("</g>"),
  pushBakedTransform: (t) => (n) => {
    const e = n.bake;
    return () => {
      e.value = T("Just", t);
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
      const i = ui(e)(t)(), s = "clip" + un(o);
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
  clearBackground: (t) => (n) => Fn('<rect x="' + wt(n.viewport.vx) + '" y="' + wt(n.viewport.vy) + '" width="' + wt(n.viewport.vw) + '" height="' + wt(n.viewport.vh) + '" fill="' + tr(t) + '" opacity="' + wt(et(t.a) / 255) + '"/>')(n),
  backgroundDots: (t) => (n) => {
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      return n.patternCounter.value = r + 1 | 0, Fn(WJ("bg-dots-" + un(r))(t))(n)();
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
  Monad0: () => QJ
}, OJ = /* @__PURE__ */ al(ll), zJ = /* @__PURE__ */ pc(ll), qJ = (t) => (n) => (e) => (r) => (o) => {
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
    viewBox: wt(s.vx) + " " + wt(s.vy) + " " + wt(s.vw) + " " + wt(s.vh),
    body: (() => {
      const u = [], c = { value: 0 }, a = { value: 0 }, g = { value: 0 }, _ = { value: x };
      return OJ(i)(n)(o)({ out: u, maskDepth: c, clipCounter: a, patternCounter: g, viewport: s, bake: _ })(), es("")(u);
    })(),
    vx: s.vx,
    vy: s.vy,
    vw: s.vw,
    vh: s.vh
  };
}, YJ = (t) => (n) => (e) => (r) => (o) => (i) => {
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
    const c = [], a = { value: 0 }, g = { value: 0 }, _ = { value: 0 }, d = { value: x }, l = r.levels.length - 1 | 0;
    return l >= 0 && l < r.levels.length ? zJ(r.levels[l].segment.layout)(r.levels[l].state)({
      out: c,
      maskDepth: a,
      clipCounter: g,
      patternCounter: _,
      viewport: Ur(s)(r),
      bake: d
    })() : A;
  })())(i);
  return { parts: qJ(t)(u.applied)(n)(e)(r), springs: u.springs };
}, qo = (t) => ({ bind: (n) => (e) => (r) => t.Bind1().bind(n(r))((o) => e(o._1)(o._2)), Apply0: () => _l(t) }), _l = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = { map: (r) => (o) => (i) => n.map((s) => b(r(s._1), s._2))(o(i)) };
  return {
    apply: (() => {
      const r = qo(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => Yo(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, Yo = (t) => ({ pure: (n) => (e) => t.Applicative0().pure(b(n, e)), Apply0: () => _l(t) }), XJ = (t) => {
  const n = { Applicative0: () => Yo(t), Bind1: () => qo(t) };
  return { state: (e) => (r) => t.Applicative0().pure(e(r)), Monad0: () => n };
}, yc = (t, n) => ({ tag: t, _1: n }), Oe = (t, n) => ({ tag: t, _1: n }), xn = /* @__PURE__ */ XJ(Ue), Ht = /* @__PURE__ */ qo(Ue), Bn = xn.state((t) => b(t, t)), sn = /* @__PURE__ */ Yo(Ue), Fe = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
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
}, dl = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
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
}, $s = /* @__PURE__ */ Hi(sn)(Qt), Re = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
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
}, VJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, UJ = /* @__PURE__ */ (() => {
  const t = Xn.unfoldr((n) => {
    if (n.tag === "Nil")
      return x;
    if (n.tag === "Cons")
      return T("Just", b(n._1, n._2));
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
})(), KJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
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
}, ms = (t) => (n) => (e) => J((r) => (o) => t.Bind1().bind(r)((i) => n(i)(o)))(t.Applicative0().pure(e)), MJ = /* @__PURE__ */ J((t) => (n) => K(P)(n)()(t))(A), jJ = /* @__PURE__ */ (() => {
  const n = ((e) => (r) => {
    let o = e, i = r, s = !0, u;
    for (; s; ) {
      const c = o, a = i;
      if (a.tag === "Nil") {
        s = !1, u = c;
        continue;
      }
      if (a.tag === "Cons") {
        o = K(P)(a._1)()(c), i = a._2;
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
        return r(o._5, qt("Cons", o._3, r(o._6, i)));
      f();
    };
    return r(e, Yt);
  })());
})(), ZJ = /* @__PURE__ */ Oe("Exit"), tv = (t) => yc("Par", t), hl = (t) => yc("Seq", t), nv = (t) => (n) => (e) => {
  const r = Ke(Ot, x, (o) => o._1 === t, e);
  if (r.tag === "Just") {
    const o = Me(Ot, x, r._1, b(t, n), e);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return o._1;
    f();
  }
  if (r.tag === "Nothing")
    return Rt(e)(b(t, n));
  f();
}, ev = (t) => (n) => z((e) => e._1 === t ? b(e._1, { ...e._2, label: T("Just", n) }) : b(e._1, e._2)), Jn = (t) => xn.state((n) => b(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return { ...n, error: T("Just", { msg: t, line: n.currentLine, column: n.currentColumn }) };
    f();
  })()
)), rv = (t) => Ht.bind(xn.state((n) => b(void 0, { ...n, currentLine: t.line, currentColumn: t.column })))(() => Ht.bind(Bn)((n) => {
  if (n.error.tag === "Just")
    return sn.pure();
  if (n.error.tag === "Nothing") {
    if (t.op.tag === "Enter") {
      if (!Fe(t.op._1.id)(n.currNodes))
        return Jn("cannot enter node " + t.op._1.id + ": does not exist");
      if (!dl(t.op._1.id)(n.interiorOf))
        return Jn("cannot enter node " + t.op._1.id + ": it has no `inside` block");
      if (Hn(ge)(t.op._1.id)(n.enterStack))
        return Jn("cannot enter node " + t.op._1.id + ": already entered");
      const e = t.op._1;
      return xn.state((r) => b(
        void 0,
        { ...r, enterStack: Rt(r.enterStack)(e.id), scenes: Rt(r.scenes)(Zi("EnterNode", e.id)) }
      ));
    }
    if (t.op.tag === "Exit") {
      const e = qi(n.enterStack);
      if (e.tag === "Nothing")
        return Jn("`exit` without a matching `enter`");
      if (e.tag === "Just") {
        const r = e._1.init;
        return xn.state((o) => b(void 0, { ...o, enterStack: r, scenes: Rt(o.scenes)(j1) }));
      }
      f();
    }
    return sn.pure();
  }
  f();
})), ov = (t) => Ht.bind(Bn)((n) => {
  const e = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + un(n.kfCounter);
  if (qn((o) => o.id === e, n.keyframes))
    return Jn("duplicate frame name " + e);
  const r = {
    ...n,
    keyframes: Rt(n.keyframes)({ id: e, nodes: n.currNodes, edges: n.currEdges }),
    kfCounter: n.kfCounter + 1 | 0,
    currentKf: T("Just", e)
  };
  return xn.state((o) => b(void 0, r));
}), iv = /* @__PURE__ */ $s((t) => Ht.bind(Bn)((n) => {
  if (n.error.tag === "Just")
    return sn.pure();
  if (n.error.tag === "Nothing")
    return dl(t.node)(n.interiorOf) ? Jn("node " + t.node + " has more than one `inside` block") : xn.state((e) => b(void 0, { ...e, interiorOf: K(P)(t.node)(t.doc)(e.interiorOf) }));
  f();
})), sv = (t) => (n) => {
  const e = n.from + "->" + n.to, r = n.newFrom + "->" + n.newTo, o = Et("Left", "cannot repoint " + n.from + "→" + n.to + ": edge does not exist"), i = Re(e)(t.currEdges) ? Et("Right", void 0) : o;
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
    if (!Fe(n.newFrom)(t.currNodes))
      return Et("Left", s);
    const u = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newTo;
    if (!Fe(n.newTo)(t.currNodes))
      return Et("Left", u);
    const c = "cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": target edge already exists";
    return e !== r && Re(r)(t.currEdges) ? Et("Left", c) : Et(
      "Right",
      {
        nextCurrEdges: K(P)(r)()($o(P)(e)(t.currEdges)),
        newId: r,
        newEdge: { id: r, from: { node: n.newFrom, port: x }, to: { node: n.newTo, port: x } }
      }
    );
  });
}, pl = {
  graphNodes: [],
  graphEdges: A,
  currNodes: A,
  currEdges: A,
  keyframes: [],
  scenes: [],
  kfCounter: 0,
  eventCounter: 0,
  currentKf: x,
  currentLine: 0,
  currentColumn: 0,
  error: x,
  enterStack: [],
  interiorOf: A
}, of = (t) => (n) => Ht.bind(Bn)((e) => {
  const r = "ev-" + un(e.eventCounter);
  return Ht.bind((() => {
    const o = { ...e, eventCounter: e.eventCounter + 1 | 0 };
    return xn.state((i) => b(void 0, o));
  })())(() => sn.pure({ events: [{ id: r, kind: n, when: t }], firstId: T("Just", r), lastId: T("Just", r) }));
}), uv = (t) => (n) => {
  if (n.tag === "Token") {
    const e = n._1;
    return Ht.bind(Bn)((r) => {
      const o = !Fe(e.from)(r.currNodes), i = !Fe(e.to)(r.currNodes);
      if (o || i)
        return Ht.bind(Jn(o ? i ? "token references unknown node: " + e.from + ", " + e.to : "token references unknown node: " + e.from : i ? "token references unknown node: " + e.to : "token references unknown node: "))(() => sn.pure({ events: [], firstId: x, lastId: x }));
      const s = e.to + "->" + e.from, u = e.from + "->" + e.to;
      return Re(u)(r.currEdges) ? of(t)(Fc(
        "SendToken",
        { from: e.from, to: e.to, edge: u, direction: K1, labels: e.labels }
      )) : Re(s)(r.currEdges) ? of(t)(Fc(
        "SendToken",
        { from: e.from, to: e.to, edge: s, direction: M1, labels: e.labels }
      )) : Ht.bind(Jn("token " + e.from + "→" + e.to + ": no edge between " + e.from + " and " + e.to))(() => sn.pure({
        events: [],
        firstId: x,
        lastId: x
      }));
    });
  }
  return sn.pure({ events: [], firstId: x, lastId: x });
}, cv = (t) => (n) => {
  if (0 < t.length) {
    const e = t[0];
    return Ht.bind(xn.state((r) => b(void 0, { ...r, currentLine: e.line, currentColumn: e.column })))(() => Jn(n));
  }
  return Jn(n);
}, av = (t) => yt((n) => VJ(n)(t.graphEdges))(Lt(po, UJ(t.currEdges))), fv = (t) => (n) => {
  const e = lt((o) => o.from.node === n.id || o.to.node === n.id, av(t)), r = ms(Nf)((o) => (i) => {
    const s = i.from + "->" + n.id, u = n.id + "->" + i.to, c = i.from + "->" + i.to, a = "via " + i.from + " " + i.to + ": no edge " + i.from + "→" + n.id;
    if (!Re(s)(t.currEdges))
      return Et("Left", a);
    const g = "via " + i.from + " " + i.to + ": no edge " + n.id + "→" + i.to;
    if (!Re(u)(t.currEdges))
      return Et("Left", g);
    const _ = "via " + i.from + " " + i.to + ": would create " + i.from + "→" + i.to + " but it already exists";
    return Re(c)(t.currEdges) || KJ(c)(o.synthesized) ? Et("Left", _) : Et(
      "Right",
      {
        consumed: K(P)(s)()(K(P)(u)()(o.consumed)),
        synthesized: K(P)(c)({
          id: c,
          from: { node: i.from, port: x },
          to: { node: i.to, port: x }
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
    const i = o.consumed, s = lt((u) => !Re(u.id)(i), e);
    return s.length === 0 ? Et(
      "Right",
      {
        nextCurrEdges: Cn(
          P.compare,
          Sn,
          Ge(P.compare, t.currEdges, MJ(z((u) => u.id)(e))),
          jJ((() => {
            const u = (c) => {
              if (c.tag === "Leaf")
                return A;
              if (c.tag === "Node")
                return zt("Node", c._1, c._2, c._3, void 0, u(c._5), u(c._6));
              f();
            };
            return u(o.synthesized);
          })())
        ),
        synthesized: o.synthesized
      }
    ) : Et(
      "Left",
      "cannot delete node " + n.id + ": still connected (" + es(", ")(z((u) => u.from.node + "→" + u.to.node)(s)) + "). Use -edge to drop them or `via a b` to merge " + n.id + "'s endpoints."
    );
  });
}, Tu = (t) => {
  if (t.tag === "Leaf")
    return [t._1];
  if (t.tag === "Par" || t.tag === "Seq")
    return Jt(t._1)(Tu);
  f();
}, gv = Ht.bind(Bn)((t) => {
  if (t.error.tag === "Just")
    return sn.pure();
  if (t.error.tag === "Nothing") {
    const n = t.enterStack.length - 1 | 0;
    return n >= 0 && n < t.enterStack.length ? Jn("entered node " + t.enterStack[n] + " was never exited") : sn.pure();
  }
  f();
}), lv = (t) => ({
  nodes: z(Oi)(t.graphNodes),
  edges: (() => {
    const n = (e, r) => {
      if (e.tag === "Leaf")
        return r;
      if (e.tag === "Node")
        return n(e._5, qt("Cons", e._4, n(e._6, r)));
      f();
    };
    return Lt(Xt.foldr, n(t.graphEdges, Yt));
  })(),
  constraints: []
}), _v = (t) => {
  if (t.tag === "AddNode") {
    const n = t._1;
    return xn.state((e) => b(
      void 0,
      {
        ...e,
        graphNodes: nv(n.id)({ id: n.id, size: b(1, 1), ports: [], label: T("Just", n.label), shape: n.shape })(e.graphNodes),
        currNodes: K(P)(n.id)()(e.currNodes)
      }
    ));
  }
  if (t.tag === "DelNode") {
    const n = t._1;
    return Ht.bind(Bn)((e) => {
      if (!Fe(n.id)(e.currNodes))
        return Jn("cannot delete node " + n.id + ": does not exist");
      const r = fv(e)(n);
      if (r.tag === "Left")
        return Jn(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return xn.state((i) => b(
          void 0,
          {
            ...i,
            currNodes: $o(P)(n.id)(i.currNodes),
            currEdges: o.nextCurrEdges,
            graphEdges: Cn(P.compare, Sn, o.synthesized, i.graphEdges)
          }
        ));
      }
      f();
    });
  }
  if (t.tag === "ModNode") {
    const n = t._1;
    return Ht.bind(Bn)((e) => {
      if (!Fe(n.id)(e.currNodes))
        return Jn("cannot modify node " + n.id + ": does not exist");
      if (n.label.tag === "Just") {
        const r = n.label._1;
        return xn.state((o) => b(void 0, { ...o, graphNodes: ev(n.id)(r)(o.graphNodes) }));
      }
      if (n.label.tag === "Nothing")
        return sn.pure();
      f();
    });
  }
  if (t.tag === "AddEdge") {
    const n = t._1;
    return Ht.bind(Bn)((e) => {
      const r = !Fe(n.from)(e.currNodes), o = !Fe(n.to)(e.currNodes);
      if (r || o)
        return Jn("cannot add edge " + n.from + "→" + n.to + ": unknown node " + (r ? o ? n.from + ", " + n.to : n.from : o ? n.to : ""));
      const i = n.from + "->" + n.to;
      return xn.state((s) => b(
        void 0,
        {
          ...s,
          graphEdges: K(P)(i)({ id: i, from: { node: n.from, port: x }, to: { node: n.to, port: x } })(s.graphEdges),
          currEdges: K(P)(i)()(s.currEdges)
        }
      ));
    });
  }
  if (t.tag === "DelEdge") {
    const n = t._1;
    return Ht.bind(Bn)((e) => {
      const r = n.from + "->" + n.to;
      return Re(r)(e.currEdges) ? xn.state((o) => b(void 0, { ...o, currEdges: $o(P)(r)(o.currEdges) })) : Jn("cannot delete edge " + n.from + "→" + n.to + ": does not exist");
    });
  }
  if (t.tag === "RepointEdge") {
    const n = t._1;
    return Ht.bind(Bn)((e) => {
      const r = sv(e)(n);
      if (r.tag === "Left")
        return Jn(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return xn.state((i) => b(
          void 0,
          { ...i, currEdges: o.nextCurrEdges, graphEdges: K(P)(o.newId)(o.newEdge)(i.graphEdges) }
        ));
      }
      f();
    });
  }
  return sn.pure();
}, dv = (t) => Ht.bind(xn.state((n) => b(void 0, { ...n, currentLine: t.line, currentColumn: t.column })))(() => _v(t.op)), hv = (t) => (n) => Ht.bind($s(dv)(n))(() => Ht.bind(Bn)((e) => {
  const r = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + un(e.kfCounter);
  if (qn((i) => i.id === r, e.keyframes))
    return Jn("duplicate frame name " + r);
  const o = {
    ...e,
    keyframes: Rt(e.keyframes)({ id: r, nodes: e.currNodes, edges: e.currEdges }),
    kfCounter: e.kfCounter + 1 | 0,
    currentKf: T("Just", r),
    scenes: (() => {
      if (e.currentKf.tag === "Nothing")
        return e.scenes;
      if (e.currentKf.tag === "Just")
        return Rt(e.scenes)(Zi("Structural", { from: e.currentKf._1, to: r, focus: x }));
      f();
    })()
  };
  return xn.state((i) => b(void 0, o));
})), pv = (t) => (n) => {
  const e = Bt((r) => x, (r) => (o) => T("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return sn.pure({ events: [], firstId: x, lastId: x });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Ht.bind(Fo(t)(e._1.head))((o) => Ht.bind(ms({
      Applicative0: () => Yo(Ue),
      Bind1: () => qo(Ue)
    })((i) => (s) => Ht.bind(Fo((() => {
      if (i.lastId.tag === "Just")
        return Yu("After", i.lastId._1);
      if (i.lastId.tag === "Nothing")
        return t;
      f();
    })())(s))((u) => sn.pure({
      events: [...i.events, ...u.events],
      firstId: (() => {
        if (i.firstId.tag === "Just")
          return T("Just", i.firstId._1);
        if (i.firstId.tag === "Nothing")
          return u.firstId;
        f();
      })(),
      lastId: (() => {
        if (u.lastId.tag === "Just")
          return T("Just", u.lastId._1);
        if (u.lastId.tag === "Nothing")
          return i.lastId;
        f();
      })()
    })))(o)(r))((i) => sn.pure(i)));
  }
  f();
}, $v = (t) => (n) => {
  const e = Bt((r) => x, (r) => (o) => T("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return sn.pure({ events: [], firstId: x, lastId: x });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Ht.bind(Fo(t)(e._1.head))((o) => Ht.bind(mv((() => {
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
          return T("Just", o.lastId._1);
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
    return Ht.bind(xn.state((r) => b(void 0, { ...r, currentLine: e.line, currentColumn: e.column })))(() => uv(t)(e.op));
  }
  if (n.tag === "Seq")
    return pv(t)(n._1);
  if (n.tag === "Par")
    return $v(t)(n._1);
  f();
}, mv = (t) => ms({
  Applicative0: () => Yo(Ue),
  Bind1: () => qo(Ue)
})((n) => (e) => Ht.bind(Fo(t)(e))((r) => sn.pure({
  events: [...n.events, ...r.events],
  firstId: (() => {
    if (n.firstId.tag === "Just")
      return T("Just", n.firstId._1);
    if (n.firstId.tag === "Nothing")
      return r.firstId;
    f();
  })(),
  lastId: (() => {
    if (r.lastId.tag === "Just")
      return T("Just", r.lastId._1);
    if (r.lastId.tag === "Nothing")
      return n.lastId;
    f();
  })()
})))({ events: [], firstId: x, lastId: x }), yv = (t) => Ht.bind(Bn)((n) => {
  if (n.currentKf.tag === "Nothing")
    return Jn("flow ops before any structural frame");
  if (n.currentKf.tag === "Just") {
    const e = n.currentKf._1;
    return Ht.bind(Fo(U1)(t))((r) => Ht.bind(Bn)((o) => {
      const i = { ...o, scenes: Rt(o.scenes)(Zi("DataFlow", { keyframe: e, events: r.events, focus: x })) };
      return xn.state((s) => b(void 0, i));
    }));
  }
  f();
}), Nv = (t) => Ht.bind(Bn)((n) => {
  if (n.error.tag === "Just")
    return sn.pure();
  if (n.error.tag === "Nothing") {
    const e = Tu(t.ops), r = lt(
      (s) => s.op.tag === "AddNode" || s.op.tag === "DelNode" || s.op.tag === "ModNode" || s.op.tag === "AddEdge" || s.op.tag === "DelEdge" || s.op.tag === "RepointEdge",
      e
    ), o = lt((s) => s.op.tag === "Enter" || s.op.tag === "Exit", e), i = lt(
      (s) => !(s.op.tag === "AddNode" || s.op.tag === "DelNode" || s.op.tag === "ModNode" || s.op.tag === "AddEdge" || s.op.tag === "DelEdge" || s.op.tag === "RepointEdge") && !(s.op.tag === "Enter" || s.op.tag === "Exit"),
      e
    );
    return o.length !== 0 && i.length !== 0 ? cv(o)("`enter`/`exit` cannot be mixed with flow tokens in the same frame") : Ht.bind((() => {
      const s = hv(t.name)(r);
      return r.length !== 0 ? s : sn.pure();
    })())(() => Ht.bind((() => {
      const s = ov(t.name);
      return r.length === 0 && i.length !== 0 ? s : sn.pure();
    })())(() => Ht.bind((() => {
      const s = yv(t.ops);
      return i.length !== 0 ? s : sn.pure();
    })())(() => $s(rv)(o))));
  }
  f();
}), $l = (t) => Ht.bind(iv(t.interiors))(() => Ht.bind($s(Nv)(t.frames))(() => Ht.bind(gv)(() => Ht.bind(Bn)((n) => {
  if (n.error.tag === "Just")
    return sn.pure(Et("Left", n.error._1));
  if (n.error.tag === "Nothing") {
    const e = xv(t.interiors);
    if (e.tag === "Left")
      return sn.pure(Et("Left", e._1));
    if (e.tag === "Right")
      return sn.pure(Et("Right", { seed: t.seed, graph: lv(n), keyframes: n.keyframes, scenes: n.scenes, interiors: e._1 }));
  }
  f();
})))), xv = (t) => {
  const n = ms(Nf)((e) => (r) => {
    const o = $l(r.doc)(pl)._1;
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
    })()((i) => Et("Right", K(P)(r.node)(i)(e)));
  })(A)(t);
  if (n.tag === "Left")
    return Et("Left", n._1);
  if (n.tag === "Right")
    return Et("Right", n._1);
  f();
}, Ir = (t, n) => ({ tag: "ParseError", _1: t, _2: n }), R = (t, n, e) => ({ tag: "ParseState", _1: t, _2: n, _3: e }), Wi = (t, n, e) => ({ tag: t, _1: n, _2: e }), Jv = (t) => Wi("More", t), vv = (t) => Wi("Lift", t), Tv = {
  defer: (t) => {
    const n = L1(t);
    return (e, r, o, i, s) => E1(n)(e, r, o, i, s);
  }
}, ml = { map: (t) => (n) => (e, r, o, i, s) => r((u) => n(e, r, o, i, (c, a) => r((g) => s(c, t(a))))) }, wv = {
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
  Functor0: () => ml
}, kv = (t) => {
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
          u = !1, c = n.Bind1().Apply0().Functor0().map(Jf)(g._1);
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
      Jv,
      vv,
      (s, u) => Wi("Stop", s, Et("Left", u)),
      (s, u) => Wi("Stop", s, Et("Right", u))
    ));
  };
}, yl = (t, n, e, r, o) => o(t, t._2), bv = { index: 0, line: 1, column: 1 }, Lv = (t) => {
  const n = kv(t);
  return (e) => (r) => t.Monad0().Bind1().Apply0().Functor0().map(zi)(n(R(e, bv, !1))(r));
}, Ev = /* @__PURE__ */ Lv(Xl), Nl = {
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
  Functor0: () => ml
}, xl = { pure: (t) => (n, e, r, o, i) => i(n, t), Apply0: () => Nl }, Sv = {
  bind: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, a) => r((g) => n(a)(e._3 && !c._3 ? R(c._1, c._2, !0) : c, r, o, i, s))
  )),
  Apply0: () => Nl
}, Cv = { Applicative0: () => xl, Bind1: () => Sv }, ys = (t) => (n, e, r, o, i) => e((s) => yl(
  n,
  e,
  r,
  o,
  (u, c) => e((a) => o(n._3 && !u._3 ? R(u._1, u._2, !0) : u, Ir(t, c)))
)), Pv = { empty: /* @__PURE__ */ ys("No alternative"), Alt0: () => wv }, Gv = { Applicative0: () => xl, Plus1: () => Pv }, Iv = {
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
  Monad0: () => Cv
}, Av = (t) => (n) => {
  const e = n.Plus1().Alt0(), r = n.Applicative0();
  return (o) => t.tailRecM((i) => t.Monad0().Bind1().bind(e.alt(e.Functor0().map(Jf)(o))(r.pure(io(
    "Done",
    void 0
  ))))((s) => r.pure((() => {
    if (s.tag === "Loop")
      return io("Loop", qt("Cons", s._1, i));
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
              g = qt("Cons", $._1, h), _ = $._2;
              continue;
            }
            f();
          }
          return l;
        })(Yt)(i)
      );
    f();
  })())))(Yt);
}, ue = /* @__PURE__ */ Av(Iv)(Gv), Ct = (t) => (n) => {
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
}, Nc = (t) => (n, e, r, o, i) => {
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
      (l, h) => e(($) => e((p) => ys("Negated parser succeeded")(
        l,
        e,
        r,
        g,
        (m, y) => e((N) => i(l._3 && !m._3 ? R(m._1, m._2, !0) : m, y))
      )))
    )));
  });
}, Fv = (t) => {
  const n = t.foldr((e) => (r) => {
    if (r.tag === "Nothing")
      return T("Just", e);
    if (r.tag === "Just")
      return T(
        "Just",
        (o, i, s, u, c) => {
          const a = o._1, g = o._2;
          return i((_) => e(
            R(a, g, !1),
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
      return ys("No alternative");
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, Rv = (t) => (n) => (e) => (r, o, i, s, u) => o((c) => o((a) => o((g) => o((_) => t(
  r,
  o,
  i,
  s,
  (d, l) => o((h) => o(($) => {
    const p = r._3 && !d._3 ? R(d._1, d._2, !0) : d;
    return e(
      p,
      o,
      i,
      s,
      (m, y) => o((N) => {
        const v = p._3 && !m._3 ? R(m._1, m._2, !0) : m;
        return o((w) => o((k) => {
          const L = r._3 && !v._3 ? R(v._1, v._2, !0) : v;
          return n(
            L,
            o,
            i,
            s,
            (I, B) => o((Y) => u(L._3 && !I._3 ? R(I._1, I._2, !0) : I, y))
          );
        }));
      })
    );
  }))
))))), wu = (t) => (n) => (e) => {
  if (n === 10)
    return { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  if (n === 13) {
    const r = Od()(e);
    return r.tag === "Just" && r._1 === 10 ? { index: t.index + 1 | 0, line: t.line, column: t.column } : { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  }
  return n === 9 ? { index: t.index + 1 | 0, line: t.line, column: (t.column + 8 | 0) - Ye(t.column - 1 | 0)(8) | 0 } : { index: t.index + 1 | 0, line: t.line, column: t.column + 1 | 0 };
}, Bv = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const c = r, a = o, g = i, _ = rs(a);
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
}, jt = (t) => (n, e, r, o, i) => {
  const s = rs(n._1);
  if (s.tag === "Nothing")
    return o(n, Ir("Unexpected EOF", n._2));
  if (s.tag === "Just") {
    if (s._1.head < 0 || s._1.head > 65535)
      return o(n, Ir("Expected Char", n._2));
    if (s._1.head >= 0 && s._1.head <= 65535) {
      const u = Zf(s._1.head);
      return t(u) ? i(R(s._1.tail, wu(n._2)(s._1.head)(s._1.tail), !0), u) : o(n, Ir("Predicate unsatisfied", n._2));
    }
  }
  f();
}, xc = (t, n, e, r, o) => t._1 === "" ? o(R(t._1, t._2, !0), void 0) : r(t, Ir("Expected EOF", t._2)), Qv = (t) => (n, e, r, o, i) => {
  const s = t(n._1);
  if (s.tag === "Left")
    return o(n, Ir(s._1, n._2));
  if (s.tag === "Right")
    return i(R(s._1.remainder, Bv(n._2)(s._1.consumed)(s._1.remainder), s._1.consumed !== ""), s._1.value);
  f();
}, Kr = (t) => Qv((n) => {
  const e = b1(t)(n);
  return e.tag === "Just" ? Et("Right", { value: t, consumed: t, remainder: e._1 }) : Et("Left", "Expected " + Os(t));
}), Wv = /* @__PURE__ */ jt((t) => !0), sf = (t, n) => ({ tag: t, _1: n }), Dv = /* @__PURE__ */ nn(P)(Qt), Hv = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = P.compare(t)(s._3);
      if (u === "LT") {
        r = s._5;
        continue;
      }
      if (u === "GT") {
        r = s._6;
        continue;
      }
      if (u === "EQ") {
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Jl = /* @__PURE__ */ Fv(Qt), vl = /* @__PURE__ */ (() => {
  const t = jt((n) => n === " " || n === "	" || n === `
` || n === "\r");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? R(u._1, u._2, !0) : u, void 0))
  ));
})(), Jc = (t, n, e, r, o) => n((i) => Kr("#")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = ue(jt((_) => _ !== `
`)), g = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => o(g._3 && !d._3 ? R(d._1, d._2, !0) : d, void 0))
    ));
  })
)), Ov = /* @__PURE__ */ Ct(/* @__PURE__ */ (() => {
  const t = Ct(jt((e) => e === "}"))("'}'"), n = jt((e) => e === `
` || e === "\r");
  return (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((a) => r((g) => t(
      R(u, c, !1),
      r,
      o,
      (_, d) => r((l) => {
        const h = e._1, $ = e._2;
        return r((p) => r((m) => Jc(
          R(h, $, !1),
          r,
          o,
          (y, N) => {
            const v = y._3;
            return r((w) => {
              if (v)
                return i(y, N);
              const k = e._1, L = e._2;
              return r((I) => r((B) => n(
                R(k, L, !1),
                r,
                o,
                (Y, X) => {
                  const C = Y._3;
                  return r((F) => C ? i(Y, X) : xc(e, r, o, i, s));
                },
                (Y, X) => r((C) => s(Y, void 0))
              )));
            });
          },
          (y, N) => r((v) => s(y, void 0))
        )));
      }),
      (_, d) => r((l) => s(R(u, c, !1), void 0))
    )));
  };
})())("newline or '}' (statements end at the end of the line)"), te = /* @__PURE__ */ (() => {
  const t = ue((n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => vl(
      R(s, u, !1),
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
    (u, c) => e((a) => i(n._3 && !u._3 ? R(u._1, u._2, !0) : u, void 0))
  ));
})(), fe = (t, n, e, r, o) => n((i) => {
  const s = (a, g) => n((_) => te(t._3 && !a._3 ? R(a._1, a._2, !0) : a, n, e, r, o)), u = t._1, c = t._2;
  return n((a) => vl(
    R(u, c, !1),
    n,
    e,
    (g, _) => {
      const d = g._3;
      return n((l) => d ? r(g, _) : Jc(t, n, e, r, s));
    },
    s
  ));
}), Tl = /* @__PURE__ */ (() => {
  const t = Ct(jt((n) => n === "|"))("'|'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const g = ue(jt((d) => d !== "|")), _ = n._3 && !u._3 ? R(u._1, u._2, !0) : u;
      return e((d) => g(
        _,
        e,
        r,
        o,
        (l, h) => e(($) => {
          const p = Ct(Ct(jt((y) => y === "|"))("'|'"))("closing '|'"), m = _._3 && !l._3 ? R(l._1, l._2, !0) : l;
          return e((y) => p(
            m,
            e,
            r,
            o,
            (N, v) => e((w) => i(
              m._3 && !N._3 ? R(N._1, N._2, !0) : N,
              mr(Lt(Xt.foldr, h))
            ))
          ));
        })
      ));
    })
  ));
})(), Di = /* @__PURE__ */ jt((t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z"), Dn = /* @__PURE__ */ (() => {
  const t = ue(jt((n) => n === " " || n === "	"));
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? R(u._1, u._2, !0) : u, void 0))
  ));
})(), zv = /* @__PURE__ */ (() => {
  const t = Ct(jt((n) => n === "\\"))("'\\\\'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const g = n._3 && !u._3 ? R(u._1, u._2, !0) : u;
      return e((_) => Wv(
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
})(), qv = /* @__PURE__ */ (() => {
  const t = jt((n) => n !== '"' && n !== "\\" && n !== `
`);
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => zv(R(s, u, !1), e, r, (a, g) => e((_) => t(n, e, r, o, i)), i));
  };
})(), vc = /* @__PURE__ */ (() => {
  const t = Ct(jt((n) => n === '"'))(`'"'`);
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const g = ue(qv), _ = n._3 && !u._3 ? R(u._1, u._2, !0) : u;
      return e((d) => g(
        _,
        e,
        r,
        o,
        (l, h) => e(($) => {
          const p = Ct(Ct(jt((y) => y === '"'))(`'"'`))(`closing '"' (unterminated string)`), m = _._3 && !l._3 ? R(l._1, l._2, !0) : l;
          return e((y) => p(
            m,
            e,
            r,
            o,
            (N, v) => e((w) => i(
              m._3 && !N._3 ? R(N._1, N._2, !0) : N,
              mr(Lt(Xt.foldr, h))
            ))
          ));
        })
      ));
    })
  ));
})(), Yv = /* @__PURE__ */ (() => {
  const t = Ct(jt((n) => n === ":"))("':'");
  return (n, e, r, o, i) => e((s) => Dn(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => Ct((g, _, d, l, h) => {
      const $ = g._1, p = g._2;
      return _((m) => {
        const y = (N, v) => {
          const w = N._3;
          return _((k) => {
            if (w)
              return l(N, v);
            const L = g._1, I = g._2;
            return _((B) => Tl(
              R(L, I, !1),
              _,
              d,
              (Y, X) => {
                const C = Y._3;
                return _((F) => C ? l(Y, X) : vc(g, _, d, l, h));
              },
              h
            ));
          });
        };
        return _((N) => t(
          R($, p, !1),
          _,
          d,
          y,
          (v, w) => _((k) => _((L) => Dn(
            v,
            _,
            d,
            y,
            (I, B) => _((Y) => {
              const X = ue(jt((F) => F !== `
` && F !== "\r" && F !== "#" && F !== "}")), C = v._3 && !I._3 ? R(I._1, I._2, !0) : I;
              return _((F) => X(
                C,
                _,
                d,
                y,
                (U, tt) => _((q) => h(
                  C._3 && !U._3 ? R(U._1, U._2, !0) : U,
                  Ed(mr(Lt(Xt.foldr, tt)))
                ))
              ));
            })
          )))
        ));
      });
    })('label ("…", : rest-of-line, or |…|)')(n._3 && !u._3 ? R(u._1, u._2, !0) : u, e, r, o, i))
  ));
})(), Xv = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => Tl(
    R(i, s, !1),
    n,
    e,
    (c, a) => {
      const g = c._3;
      return n((_) => g ? r(c, a) : vc(t, n, e, r, o));
    },
    o
  ));
}, Ro = /* @__PURE__ */ jt((t) => t >= "0" && t <= "9"), Tn = /* @__PURE__ */ (() => {
  const t = Ct(jt((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => e((s) => {
    const u = (g, _) => e((d) => {
      const l = ue((() => {
        const $ = Ct(jt((m) => m === "_"))("'_'"), p = Ct(jt((m) => m === "-"))("'-'");
        return (m, y, N, v, w) => {
          const k = m._1, L = m._2;
          return y((I) => Di(
            R(k, L, !1),
            y,
            N,
            (B, Y) => {
              const X = B._3;
              return y((C) => {
                if (X)
                  return v(B, Y);
                const F = m._1, U = m._2;
                return y((tt) => Ro(
                  R(F, U, !1),
                  y,
                  N,
                  (q, Q) => {
                    const E = q._3;
                    return y((S) => {
                      if (E)
                        return v(q, Q);
                      const O = m._1, G = m._2;
                      return y((D) => $(
                        R(O, G, !1),
                        y,
                        N,
                        (W, j) => {
                          const V = W._3;
                          return y((H) => V ? v(W, j) : p(m, y, N, v, w));
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
      return e(($) => l(
        h,
        e,
        r,
        o,
        (p, m) => e((y) => i(
          h._3 && !p._3 ? R(p._1, p._2, !0) : p,
          Mi(_) + mr(Lt(Xt.foldr, m))
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
})(), Vv = /* @__PURE__ */ Ct((t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => vc(
    R(i, s, !1),
    n,
    e,
    (c, a) => {
      const g = c._3;
      return n((_) => g ? r(c, a) : Tn(t, n, e, r, o));
    },
    o
  ));
})("frame name (identifier or quoted string)"), uf = (t, n, e, r, o) => n((i) => Dn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Ct(Tn)("attribute key"), g = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => {
        const $ = g._3 && !d._3 ? R(d._1, d._2, !0) : d;
        return n((p) => Dn(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const v = Ct(Ct(jt((k) => k === ":"))("':'"))("':'"), w = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((k) => v(
              w,
              n,
              e,
              r,
              (L, I) => n((B) => {
                const Y = w._3 && !L._3 ? R(L._1, L._2, !0) : L;
                return n((X) => Dn(
                  Y,
                  n,
                  e,
                  r,
                  (C, F) => n((U) => {
                    const tt = Ct(Tn)("attribute value"), q = Y._3 && !C._3 ? R(C._1, C._2, !0) : C;
                    return n((Q) => tt(
                      q,
                      n,
                      e,
                      r,
                      (E, S) => n((O) => {
                        const G = q._3 && !E._3 ? R(E._1, E._2, !0) : E;
                        return n((D) => Dn(
                          G,
                          n,
                          e,
                          r,
                          (W, j) => n((V) => o(G._3 && !W._3 ? R(W._1, W._2, !0) : W, b(l, S)))
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
)), Uv = (t, n, e, r, o) => n((i) => Tn(
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
        const h = Ct((p, m, y, N, v) => {
          const w = p._1, k = p._2;
          return m((L) => Kr("->")(
            R(w, k, !1),
            m,
            y,
            (I, B) => {
              const Y = I._3;
              return m((X) => Y ? N(I, B) : Kr("<-")(p, m, y, N, v));
            },
            v
          ));
        })("'->' or '<-'"), $ = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const v = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((w) => Dn(
              v,
              n,
              e,
              r,
              (k, L) => n((I) => {
                const B = Ct(Tn)("target node identifier"), Y = v._3 && !k._3 ? R(k._1, k._2, !0) : k;
                return n((X) => B(
                  Y,
                  n,
                  e,
                  r,
                  (C, F) => n((U) => {
                    const tt = ue((Q, E, S, O, G) => {
                      const D = Q._3;
                      return E((W) => E((j) => Dn(
                        Q,
                        E,
                        S,
                        (V, H) => O(R(V._1, V._2, D), H),
                        (V, H) => E((rt) => E((Z) => {
                          const it = Q._3 && !V._3 ? R(V._1, V._2, !0) : V;
                          return Xv(
                            it,
                            E,
                            S,
                            (nt, at) => O(R(nt._1, nt._2, D), at),
                            (nt, at) => E((_t) => G(it._3 && !nt._3 ? R(nt._1, nt._2, !0) : nt, at))
                          );
                        }))
                      )));
                    }), q = Y._3 && !C._3 ? R(C._1, C._2, !0) : C;
                    return n((Q) => tt(
                      q,
                      n,
                      e,
                      r,
                      (E, S) => n((O) => (() => {
                        if (y === "<-") {
                          const D = Oe(
                            "Token",
                            { from: F, to: u, labels: z(Ic)(Lt(Xt.foldr, S)) }
                          );
                          return (W, j, V, H, rt) => rt(W, D);
                        }
                        const G = Oe(
                          "Token",
                          { from: u, to: F, labels: z(Ic)(Lt(Xt.foldr, S)) }
                        );
                        return (D, W, j, V, H) => H(D, G);
                      })()(q._3 && !E._3 ? R(E._1, E._2, !0) : E, n, e, r, o))
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
)), Kv = (t, n, e, r, o) => n((i) => Ro(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = ue(Ro), g = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => {
        const $ = O_(Mi(u) + mr(Lt(
          Xt.foldr,
          l
        )));
        return (() => {
          if ($.tag === "Just") {
            const p = $._1;
            return (m, y, N, v, w) => w(m, p);
          }
          if ($.tag === "Nothing")
            return (p, m, y, N, v) => v(p, 0);
          f();
        })()(g._3 && !d._3 ? R(d._1, d._2, !0) : d, n, e, r, o);
      })
    ));
  })
)), Xo = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Kr(t)(
    n,
    e,
    r,
    (c, a) => o(R(c._1, c._2, s), a),
    (c, a) => e((g) => {
      const _ = Nc((() => {
        const l = Ct(jt(($) => $ === "_"))("'_'"), h = Ct(jt(($) => $ === "-"))("'-'");
        return ($, p, m, y, N) => {
          const v = $._1, w = $._2;
          return p((k) => Di(
            R(v, w, !1),
            p,
            m,
            (L, I) => {
              const B = L._3;
              return p((Y) => {
                if (B)
                  return y(L, I);
                const X = $._1, C = $._2;
                return p((F) => Ro(
                  R(X, C, !1),
                  p,
                  m,
                  (U, tt) => {
                    const q = U._3;
                    return p((Q) => {
                      if (q)
                        return y(U, tt);
                      const E = $._1, S = $._2;
                      return p((O) => l(
                        R(E, S, !1),
                        p,
                        m,
                        (G, D) => {
                          const W = G._3;
                          return p((j) => W ? y(G, D) : h($, p, m, y, N));
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
        (h, $) => o(R(h._1, h._2, s), $),
        (h, $) => e((p) => {
          const m = d._3 && !h._3 ? R(h._1, h._2, !0) : h;
          return e((y) => te(
            m,
            e,
            r,
            (N, v) => o(R(N._1, N._2, s), v),
            (N, v) => e((w) => i(m._3 && !N._3 ? R(N._1, N._2, !0) : N, t))
          ));
        })
      ));
    })
  ));
}, Mv = (t, n, e, r, o) => n((i) => fe(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => Xo("via")(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n(($) => Tn(
          h,
          n,
          e,
          r,
          (p, m) => n((y) => {
            const N = h._3 && !p._3 ? R(p._1, p._2, !0) : p;
            return n((v) => fe(
              N,
              n,
              e,
              r,
              (w, k) => n((L) => {
                const I = N._3 && !w._3 ? R(w._1, w._2, !0) : w;
                return n((B) => Tn(
                  I,
                  n,
                  e,
                  r,
                  (Y, X) => n((C) => o(I._3 && !Y._3 ? R(Y._1, Y._2, !0) : Y, { from: m, to: X }))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), rr = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Kr(t)(
    n,
    e,
    r,
    (c, a) => o(R(c._1, c._2, s), a),
    (c, a) => e((g) => {
      const _ = Nc((() => {
        const l = Ct(jt(($) => $ === "_"))("'_'"), h = Ct(jt(($) => $ === "-"))("'-'");
        return ($, p, m, y, N) => {
          const v = $._1, w = $._2;
          return p((k) => Di(
            R(v, w, !1),
            p,
            m,
            (L, I) => {
              const B = L._3;
              return p((Y) => {
                if (B)
                  return y(L, I);
                const X = $._1, C = $._2;
                return p((F) => Ro(
                  R(X, C, !1),
                  p,
                  m,
                  (U, tt) => {
                    const q = U._3;
                    return p((Q) => {
                      if (q)
                        return y(U, tt);
                      const E = $._1, S = $._2;
                      return p((O) => l(
                        R(E, S, !1),
                        p,
                        m,
                        (G, D) => {
                          const W = G._3;
                          return p((j) => W ? y(G, D) : h($, p, m, y, N));
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
        (h, $) => o(R(h._1, h._2, s), $),
        (h, $) => e((p) => i(d._3 && !h._3 ? R(h._1, h._2, !0) : h, void 0))
      ));
    })
  ));
}, jv = (t, n, e, r, o) => n((i) => rr("+edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => fe(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(Tn)("source node identifier"), $ = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const v = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((w) => fe(
              v,
              n,
              e,
              r,
              (k, L) => n((I) => {
                const B = Ct(Tn)("target node identifier"), Y = v._3 && !k._3 ? R(k._1, k._2, !0) : k;
                return n((X) => B(
                  Y,
                  n,
                  e,
                  r,
                  (C, F) => n((U) => o(
                    Y._3 && !C._3 ? R(C._1, C._2, !0) : C,
                    Oe("AddEdge", { from: y, to: F })
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), Zv = (t, n, e, r, o) => n((i) => rr("-edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => fe(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(Tn)("source node identifier"), $ = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const v = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((w) => fe(
              v,
              n,
              e,
              r,
              (k, L) => n((I) => {
                const B = Ct(Tn)("target node identifier"), Y = v._3 && !k._3 ? R(k._1, k._2, !0) : k;
                return n((X) => B(
                  Y,
                  n,
                  e,
                  r,
                  (C, F) => n((U) => o(
                    Y._3 && !C._3 ? R(C._1, C._2, !0) : C,
                    Oe("DelEdge", { from: y, to: F })
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), tT = (t, n, e, r, o) => n((i) => rr("-node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => fe(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(Tn)("node identifier"), $ = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const v = ue((k, L, I, B, Y) => {
              const X = k._3;
              return Mv(k, L, I, (C, F) => B(R(C._1, C._2, X), F), Y);
            }), w = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((k) => v(
              w,
              n,
              e,
              r,
              (L, I) => n((B) => o(
                w._3 && !L._3 ? R(L._1, L._2, !0) : L,
                Oe("DelNode", { id: y, via: Lt(Xt.foldr, I) })
              ))
            ));
          })
        ));
      })
    ));
  })
)), nT = (t, n, e, r, o) => n((i) => rr("enter")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => fe(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(Tn)("node identifier"), $ = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => o(
            $._3 && !m._3 ? R(m._1, m._2, !0) : m,
            Oe("Enter", { id: y })
          ))
        ));
      })
    ));
  })
)), eT = (t, n, e, r, o) => n((i) => rr("exit")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => o(t._3 && !s._3 ? R(s._1, s._2, !0) : s, ZJ))
)), rT = (t, n, e, r, o) => n((i) => rr("~edge")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => fe(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(Tn)("source node identifier"), $ = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const v = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((w) => fe(
              v,
              n,
              e,
              r,
              (k, L) => n((I) => {
                const B = Ct(Tn)("target node identifier"), Y = v._3 && !k._3 ? R(k._1, k._2, !0) : k;
                return n((X) => B(
                  Y,
                  n,
                  e,
                  r,
                  (C, F) => n((U) => {
                    const tt = Y._3 && !C._3 ? R(C._1, C._2, !0) : C;
                    return n((q) => te(
                      tt,
                      n,
                      e,
                      r,
                      (Q, E) => n((S) => {
                        const O = Ct(Kr("->"))("'->'"), G = tt._3 && !Q._3 ? R(Q._1, Q._2, !0) : Q;
                        return n((D) => O(
                          G,
                          n,
                          e,
                          r,
                          (W, j) => n((V) => {
                            const H = G._3 && !W._3 ? R(W._1, W._2, !0) : W;
                            return n((rt) => te(
                              H,
                              n,
                              e,
                              r,
                              (Z, it) => n((nt) => {
                                const at = Ct(Tn)("new source node identifier"), _t = H._3 && !Z._3 ? R(Z._1, Z._2, !0) : Z;
                                return n((Dt) => at(
                                  _t,
                                  n,
                                  e,
                                  r,
                                  (vt, Wt) => n(($t) => {
                                    const xt = _t._3 && !vt._3 ? R(vt._1, vt._2, !0) : vt;
                                    return n((mt) => fe(
                                      xt,
                                      n,
                                      e,
                                      r,
                                      (ot, M) => n((ut) => {
                                        const gt = Ct(Tn)("new target node identifier"), dt = xt._3 && !ot._3 ? R(ot._1, ot._2, !0) : ot;
                                        return n((Nt) => gt(
                                          dt,
                                          n,
                                          e,
                                          r,
                                          (At, Vt) => n((Pn) => o(
                                            dt._3 && !At._3 ? R(At._1, At._2, !0) : At,
                                            Oe("RepointEdge", { from: y, to: F, newFrom: Wt, newTo: Vt })
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
)), oT = (t, n, e, r, o) => n((i) => rr("seed")(
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
        const h = Ct(Kv)("integer (seed value)"), $ = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const v = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((w) => te(
              v,
              n,
              e,
              r,
              (k, L) => n((I) => o(v._3 && !k._3 ? R(k._1, k._2, !0) : k, y))
            ));
          })
        ));
      })
    ));
  })
)), Vo = /* @__PURE__ */ Rv(/* @__PURE__ */ (() => {
  const t = Ct(jt((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (c, a) => e((g) => e((_) => {
      const d = n._3 && !c._3 ? R(c._1, c._2, !0) : c;
      return te(d, e, r, o, (l, h) => e(($) => i(d._3 && !l._3 ? R(l._1, l._2, !0) : l, h)));
    }))
  )));
})())(/* @__PURE__ */ Ct(/* @__PURE__ */ (() => {
  const t = Ct(jt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => te(
    n,
    e,
    r,
    o,
    (c, a) => e((g) => e((_) => {
      const d = n._3 && !c._3 ? R(c._1, c._2, !0) : c;
      return t(d, e, r, o, (l, h) => e(($) => i(d._3 && !l._3 ? R(l._1, l._2, !0) : l, h)));
    }))
  )));
})())("closing '}'")), iT = /* @__PURE__ */ Vo((t, n, e, r, o) => n((i) => {
  const s = (a, g) => n((_) => (() => {
    if (g.tag === "Nothing")
      return (d, l, h, $, p) => p(d, A);
    if (g.tag === "Just") {
      const d = g._1, l = ue((() => {
        const h = Ct(jt(($) => $ === ","))("','");
        return ($, p, m, y, N) => {
          const v = $._3;
          return p((w) => p((k) => p((L) => p((I) => p((B) => p((Y) => Dn(
            $,
            p,
            m,
            (X, C) => y(R(X._1, X._2, v), C),
            (X, C) => p((F) => p((U) => {
              const tt = $._3 && !X._3 ? R(X._1, X._2, !0) : X;
              return h(
                tt,
                p,
                m,
                (q, Q) => y(R(q._1, q._2, v), Q),
                (q, Q) => p((E) => {
                  const S = tt._3 && !q._3 ? R(q._1, q._2, !0) : q;
                  return p((O) => p((G) => {
                    const D = $._3 && !S._3 ? R(S._1, S._2, !0) : S;
                    return Dn(
                      D,
                      p,
                      m,
                      (W, j) => y(R(W._1, W._2, v), j),
                      (W, j) => p((V) => {
                        const H = D._3 && !W._3 ? R(W._1, W._2, !0) : W;
                        return p((rt) => p((Z) => {
                          const it = $._3 && !H._3 ? R(H._1, H._2, !0) : H;
                          return uf(
                            it,
                            p,
                            m,
                            (nt, at) => y(R(nt._1, nt._2, v), at),
                            (nt, at) => p((_t) => N(it._3 && !nt._3 ? R(nt._1, nt._2, !0) : nt, at))
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
        (v, w) => $((k) => y(
          h._3 && !v._3 ? R(v._1, v._2, !0) : v,
          Dv([d, ...Lt(Xt.foldr, w)])
        ))
      ));
    }
    f();
  })()(t._3 && !a._3 ? R(a._1, a._2, !0) : a, n, e, r, o)), u = t._1, c = t._2;
  return n((a) => n((g) => uf(
    R(u, c, !1),
    n,
    e,
    (_, d) => n((l) => s(t, x)),
    (_, d) => n((l) => s(_, T("Just", d)))
  )));
})), sT = (t, n, e, r, o) => n((i) => rr("+node")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => fe(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = Ct(Tn)("node identifier"), $ = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n((p) => h(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const v = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((w) => n((k) => Dn(
              v,
              n,
              e,
              r,
              (L, I) => n((B) => {
                const Y = jt((C) => C === `
` || C === "\r" || C === "#" || C === "}" || C === "{"), X = v._3 && !L._3 ? R(L._1, L._2, !0) : L;
                return n((C) => {
                  const F = (q, Q) => n((E) => (Q ? ((S, O, G, D, W) => W(S, "")) : Yv)(
                    X._3 && !q._3 ? R(q._1, q._2, !0) : q,
                    n,
                    e,
                    r,
                    (S, O) => n((G) => {
                      const D = v._3 && !S._3 ? R(S._1, S._2, !0) : S;
                      return n((W) => {
                        const j = (rt, Z) => n((it) => o(
                          D._3 && !rt._3 ? R(rt._1, rt._2, !0) : rt,
                          Oe(
                            "AddNode",
                            {
                              id: y,
                              label: O,
                              shape: (() => {
                                const nt = Hv("shape")(Z);
                                if (nt.tag === "Just")
                                  return nt._1 === "rectangle" || nt._1 === "rect" ? Ie : nt._1 === "cylinder" || nt._1 === "cyl" ? Pc : nt._1 === "parallelogram" ? W1 : nt._1 === "diamond" ? D1 : nt._1 === "ellipse" ? H1 : nt._1 === "document" || nt._1 === "doc" ? Gc : nt._1 === "cloud" ? O1 : Ie;
                                if (nt.tag === "Nothing")
                                  return Ie;
                                f();
                              })()
                            }
                          )
                        )), V = D._1, H = D._2;
                        return n((rt) => {
                          const Z = (it, nt) => {
                            const at = it._3;
                            return n((_t) => at ? r(it, nt) : j(D, A));
                          };
                          return n((it) => n((nt) => Dn(
                            R(V, H, !1),
                            n,
                            e,
                            (at, _t) => Z(R(at._1, at._2, !1), _t),
                            (at, _t) => n((Dt) => n((vt) => iT(
                              at,
                              n,
                              e,
                              (Wt, $t) => Z(R(Wt._1, Wt._2, !1), $t),
                              (Wt, $t) => n((xt) => j(at._3 && !Wt._3 ? R(Wt._1, Wt._2, !0) : Wt, $t))
                            )))
                          )));
                        });
                      });
                    })
                  )), U = X._1, tt = X._2;
                  return n((q) => {
                    const Q = (E, S) => {
                      const O = E._3;
                      return n((G) => O ? r(E, S) : F(X, !1));
                    };
                    return n((E) => n((S) => n((O) => xc(
                      R(U, tt, !1),
                      n,
                      e,
                      (G, D) => {
                        const W = G._3;
                        return n((j) => W ? Q(R(U, tt, !1), D) : n((V) => Y(
                          R(U, tt, !1),
                          n,
                          e,
                          (H, rt) => Q(R(U, tt, !1), rt),
                          (H, rt) => n((Z) => n((it) => F(R(U, tt, !1), !0)))
                        )));
                      },
                      (G, D) => n((W) => n((j) => F(R(U, tt, !1), !0)))
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
)), uT = (t, n, e, r, o) => n((i) => yl(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Ct(Jl([sT, tT, rT, jv, Zv, nT, eT, Uv]))("statement (+node, -node, +edge, -edge, ~edge, enter, exit, or 'a -> b')"), g = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => o(
        g._3 && !d._3 ? R(d._1, d._2, !0) : d,
        yc("Leaf", { op: l, line: u.line, column: u.column })
      ))
    ));
  })
)), cT = (t, n, e, r, o) => n((i) => Xo("seq")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => Vo(Tc(hl))(
    t._3 && !s._3 ? R(s._1, s._2, !0) : s,
    n,
    e,
    r,
    o
  ))
)), aT = (t, n, e, r, o) => n((i) => Xo("par")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => Vo(Tc(tv))(
    t._3 && !s._3 ? R(s._1, s._2, !0) : s,
    n,
    e,
    r,
    o
  ))
)), Tc = (t) => {
  const n = ue(fT());
  return (e, r, o, i, s) => r((u) => n(
    e,
    r,
    o,
    i,
    (c, a) => r((g) => s(
      e._3 && !c._3 ? R(c._1, c._2, !0) : c,
      t(Lt(Xt.foldr, a))
    ))
  ));
}, fT = /* @__PURE__ */ df(() => {
  const t = Nc(Ct(jt((n) => n === "}"))("'}'"));
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
          ($, p) => o(R($._1, $._2, u), p),
          ($, p) => e((m) => {
            const y = h._3 && !$._3 ? R($._1, $._2, !0) : $;
            return e((N) => {
              const v = Jl([
                (k, L, I, B, Y) => {
                  const X = k._3;
                  return aT(k, L, I, (C, F) => B(R(C._1, C._2, X), F), Y);
                },
                (k, L, I, B, Y) => {
                  const X = k._3;
                  return cT(k, L, I, (C, F) => B(R(C._1, C._2, X), F), Y);
                },
                uT
              ]), w = n._3 && !y._3 ? R(y._1, y._2, !0) : y;
              return e((k) => v(
                w,
                e,
                r,
                o,
                (L, I) => e((B) => {
                  const Y = w._3 && !L._3 ? R(L._1, L._2, !0) : L;
                  return e((X) => Dn(
                    Y,
                    e,
                    r,
                    o,
                    (C, F) => e((U) => {
                      const tt = Y._3 && !C._3 ? R(C._1, C._2, !0) : C;
                      return e((q) => Ov(
                        tt,
                        e,
                        r,
                        o,
                        (Q, E) => e((S) => i(tt._3 && !Q._3 ? R(Q._1, Q._2, !0) : Q, I))
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
}), gT = (t, n, e, r, o) => n((i) => Xo("frame")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((g) => Vv(
      a,
      n,
      e,
      r,
      (_, d) => n((l) => {
        const h = a._3 && !_._3 ? R(_._1, _._2, !0) : _;
        return n(($) => te(
          h,
          n,
          e,
          r,
          (p, m) => n((y) => {
            const N = Vo(Tc(hl)), v = h._3 && !p._3 ? R(p._1, p._2, !0) : p;
            return n((w) => N(
              v,
              n,
              e,
              r,
              (k, L) => n((I) => {
                const B = v._3 && !k._3 ? R(k._1, k._2, !0) : k;
                return n((Y) => te(
                  B,
                  n,
                  e,
                  r,
                  (X, C) => n((F) => o(
                    B._3 && !X._3 ? R(X._1, X._2, !0) : X,
                    { name: T("Just", d), ops: L }
                  ))
                ));
              })
            ));
          })
        ));
      })
    ));
  })
)), lT = (t, n, e, r, o) => n((i) => Xo("inside")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Ct(Tn)("node identifier"), g = t._3 && !s._3 ? R(s._1, s._2, !0) : s;
    return n((_) => a(
      g,
      n,
      e,
      r,
      (d, l) => n((h) => {
        const $ = g._3 && !d._3 ? R(d._1, d._2, !0) : d;
        return n((p) => te(
          $,
          n,
          e,
          r,
          (m, y) => n((N) => {
            const v = $._3 && !m._3 ? R(m._1, m._2, !0) : m;
            return n((w) => Vo(wl)(
              v,
              n,
              e,
              r,
              (k, L) => n((I) => {
                const B = v._3 && !k._3 ? R(k._1, k._2, !0) : k;
                return n((Y) => te(
                  B,
                  n,
                  e,
                  r,
                  (X, C) => n((F) => o(B._3 && !X._3 ? R(X._1, X._2, !0) : X, { node: l, doc: L }))
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
    const d = ue(_T()), l = t._3 && !a._3 ? R(a._1, a._2, !0) : a;
    return n((h) => d(
      l,
      n,
      e,
      r,
      ($, p) => n((m) => {
        const y = Lt(Xt.foldr, p);
        return o(
          l._3 && !$._3 ? R($._1, $._2, !0) : $,
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
                return T("Just", N._1);
              if (N.tag === "TopInside")
                return x;
              f();
            })(y),
            interiors: yt((N) => {
              if (N.tag === "TopInside")
                return T("Just", N._1);
              if (N.tag === "TopFrame")
                return x;
              f();
            })(y)
          }
        );
      })
    ));
  }), u = t._1, c = t._2;
  return n((a) => n((g) => oT(
    R(u, c, !1),
    n,
    e,
    (_, d) => {
      const l = _._3;
      return n((h) => l ? r(_, d) : s(t, x));
    },
    (_, d) => n((l) => s(_, T("Just", d)))
  )));
}), _T = /* @__PURE__ */ df(() => Tv.defer((t) => (n, e, r, o, i) => {
  const s = n._1, u = n._2;
  return e((c) => e((a) => lT(
    R(s, u, !1),
    e,
    r,
    (g, _) => e((d) => e((l) => gT(n, e, r, o, (h, $) => e((p) => i(h, sf("TopFrame", $)))))),
    (g, _) => e((d) => i(g, sf("TopInside", _)))
  )));
})), dT = /* @__PURE__ */ (() => {
  const t = Ct((n, e, r, o, i) => e((s) => e((u) => te(
    n,
    e,
    r,
    o,
    (c, a) => e((g) => e((_) => {
      const d = n._3 && !c._3 ? R(c._1, c._2, !0) : c;
      return xc(
        d,
        e,
        r,
        o,
        (l, h) => e(($) => i(d._3 && !l._3 ? R(l._1, l._2, !0) : l, h))
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
      return wl(
        h,
        e,
        r,
        o,
        ($, p) => e((m) => {
          const y = h._3 && !$._3 ? R($._1, $._2, !0) : $;
          return e((N) => e((v) => {
            const w = n._3 && !y._3 ? R(y._1, y._2, !0) : y;
            return t(
              w,
              e,
              r,
              o,
              (k, L) => e((I) => i(w._3 && !k._3 ? R(k._1, k._2, !0) : k, p))
            );
          }));
        })
      );
    }))
  )))));
})(), hT = (t) => {
  const n = Ev(t)(dT);
  if (n.tag === "Left")
    return Et("Left", { msg: n._1._1, line: n._1._2.line, column: n._1._2.column });
  if (n.tag === "Right")
    return Et("Right", n._1);
  f();
}, pT = (t) => {
  const n = hT(t);
  if (n.tag === "Left")
    return Et("Left", n._1.msg);
  if (n.tag === "Right")
    return Et("Right", n._1);
  f();
};
function $T(t, n, e, r) {
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
const mT = function() {
  return window;
};
function yT(t) {
  return function(n) {
    return function() {
      return n.requestAnimationFrame(t);
    };
  };
}
const NT = (t) => t, xT = (t) => () => t.clientWidth || 0, JT = () => window.devicePixelRatio || 1, vT = (t, n) => {
  n.innerHTML = t;
}, Ds = (t, n, e) => {
  t.style.setProperty(n, e);
}, cf = (t) => (n) => t === n, kl = (t) => t, bl = (t, n, e) => ({ tag: t, _1: n, _2: e }), Ll = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, TT = (t) => (n) => {
  const e = ft.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, wT = /* @__PURE__ */ bl("AutoSize"), af = /* @__PURE__ */ kl("CanvasRenderer"), kT = /* @__PURE__ */ kl("SvgRenderer"), bT = (t) => (n) => {
  const e = t - n * et($n(Ne(t / n)));
  return n <= 0 ? 0 : e < 0 ? e + n : e;
}, ff = (t) => J((n) => (e) => {
  const r = t(e);
  return () => (n(), r());
})(() => {
}), El = () => U_() / 1e3, Hs = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
  const g = jn(s.layout), _ = X1(s.layout), d = { center: { x: _.x + _.w / 2, y: g.y + g.h / 2 }, zoom: Mu(s.layout)(g)(0) }, l = Xu(s.layout)(d), h = () => {
    const N = El(), v = c.value;
    return c.value = N, v === 0 ? 0 : N - v;
  }, $ = yp(s)(Ll(a)(s.totalDuration)), p = i ? $ : { ...$, levels: z((N) => ({ ...N, state: { ...N.state, frameTitle: "" } }))($.levels) }, m = s.dives.length === 0 && (l.w + 48) * 1.0909090909090908 <= 1100 && (l.h + 48) * 1.0909090909090908 <= 1400, y = m ? { ...p, camera: d, levels: z((N) => ({ ...N, state: { ...N.state, camera: d } }))(p.levels) } : p;
  if (n === "CanvasRenderer")
    return () => {
      const N = h(), v = NT(t), w = Ur({ padding: 8, outputAspect: x })(y), k = (() => {
        if (e.tag === "FixedSize")
          return { w: e._1, h: e._2 };
        if (e.tag === "AutoSize") {
          if (m)
            return { w: w.vw * 1.0909090909090908, h: w.vh * 1.0909090909090908 };
          const Q = xT(t)();
          return { w: Q, h: w.vw <= 0 ? Q : Q * w.vh / w.vw };
        }
        f();
      })(), L = JT(), I = k.w * L, B = k.h * L, Y = M_(v)(), X = j_(v)(), C = Z_(v)(I);
      Y !== I && C();
      const F = t1(v)(B);
      if (X !== B && F(), Ds(t, "height", un($n(cr(k.h))) + "px"), e.tag === "FixedSize")
        Ds(t, "width", un($n(cr(k.w))) + "px");
      else if (e.tag === "AutoSize") {
        const Q = un($n(cr(k.w))) + "px";
        m && Ds(t, "width", Q);
      } else
        f();
      const U = K_(v)();
      sr(U)(), di(U)({ scaleX: L, scaleY: L })();
      const tt = u.value, q = kJ(r)(o)(U)({ width: k.w, height: k.h })(y)(N)(tt)();
      return u.value = q, ur(U)();
    };
  if (n === "SvgRenderer")
    return () => {
      const N = h(), v = u.value, w = YJ((() => {
        if (e.tag === "AutoSize")
          return x;
        if (e.tag === "FixedSize")
          return e._1 <= 0 || e._2 <= 0 ? x : T("Just", e._1 / e._2);
        f();
      })())(r)(o)(y)(N)(v);
      return u.value = w.springs, ci("viewBox")(w.parts.viewBox)(t)(), ci("preserveAspectRatio")("xMidYMid meet")(t)(), e.tag === "FixedSize" ? (ci("width")(un($n(cr(e._1))))(t)(), ci("height")(un($n(cr(e._2))))(t)()) : e.tag === "AutoSize" || f(), vT(w.parts.body, t);
    };
  f();
}, LT = (t) => {
  const n = pT(t);
  if (n.tag === "Left")
    return Et("Left", n._1);
  if (n.tag === "Right") {
    const e = $l(n._1)(pl)._1;
    if (e.tag === "Left")
      return Et("Left", e._1.msg);
    if (e.tag === "Right")
      return Et("Right", e._1);
  }
  f();
}, ET = { ...wd, tokenZoomFloor: 1, minZoom: 1.6, maxZoom: 3.2 }, ST = (t) => (n) => (e) => (r) => (o) => (i) => (s) => () => {
  let u = 1, c = !0, a = !1, g = 0, _ = 0;
  const d = { value: A }, l = { value: 0 };
  let h = !1, $ = [], p = [], m = "";
  Hs(t)(e)(r)(o)(i)(s)(n)(d)(l)(0)();
  const y = (B) => () => {
    const Y = $, X = c, C = Ko(n)(B);
    if (C !== "" && C !== m) {
      const U = p, tt = Kt((q) => q.label === C)(U);
      tt.tag === "Just" ? ff((q) => q)(tt._1.fns)() : tt.tag === "Nothing" || f(), m = C;
    }
    return ff((U) => U({ time: B, keyframe: C, playing: X }))(Y)();
  }, N = () => (c = !1, y(g)()), v = (B) => {
    const Y = TT(0)(Ll(n.totalDuration)(B));
    return () => (g = Y, _ = 0, Hs(t)(e)(r)(o)(i)(s)(n)(d)(l)(Y)(), y(Y)());
  }, w = () => {
    if (!h && (a = !1, c)) {
      const X = El(), C = _;
      _ = X;
      const F = u, U = g, tt = bT(C === 0 ? U + 0 * F : U + (X - C) * F)(n.totalDuration + 0.8);
      return g = tt, Hs(t)(e)(r)(o)(i)(s)(n)(d)(l)(tt)(), y(tt)(), k();
    }
  }, k = () => {
    if (!h && !a) {
      a = !0;
      const X = mT();
      yT(w)(X)();
    }
  }, L = () => (_ = 0, c = !0, k()), I = () => (c || L(), y(g)());
  return L(), {
    play: I,
    pause: N,
    toggle: () => c ? N() : I(),
    seek: (B) => v(B),
    setSpeed: (B) => () => u = B,
    currentTime: () => g,
    currentKeyframe: () => {
      const B = g;
      return Ko(n)(B);
    },
    isPlaying: () => c,
    duration: n.totalDuration,
    subscribe: (B) => () => {
      $ = Rt($)(B);
      const X = g, C = c;
      B({ time: X, keyframe: Ko(n)(X), playing: C })();
      const F = Sf((U) => !cf(U)(B));
      return () => {
        $ = F($);
      };
    },
    onFrame: (B) => (Y) => B === "" ? () => () => {
    } : () => {
      const X = p;
      p = (() => {
        const U = Ke(Ot, x, (tt) => tt.label === B, X);
        if (U.tag === "Just") {
          const tt = Ef(U._1)((q) => ({ ...q, fns: Rt(q.fns)(Y) }))(X);
          if (tt.tag === "Nothing")
            return X;
          if (tt.tag === "Just")
            return tt._1;
          f();
        }
        if (U.tag === "Nothing")
          return Rt(X)({ label: B, fns: [Y] });
        f();
      })();
      const C = g;
      Ko(n)(C) === B && Y();
      const F = yt((U) => {
        const tt = lt((q) => !cf(q)(Y), U.fns);
        return tt.length === 0 ? x : T("Just", { ...U, fns: tt });
      });
      return () => {
        p = F(p);
      };
    },
    seekFrame: (B) => {
      const Y = Ld(n)(B);
      if (Y.tag === "Just")
        return v(Y._1);
      if (Y.tag === "Nothing")
        return () => {
        };
      f();
    },
    destroy: () => h = !0
  };
}, CT = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = LT(n);
  if (u.tag === "Left")
    return () => Et("Left", u._1);
  if (u.tag === "Right") {
    const c = u._1, a = lg(c);
    return () => {
      const g = a(), _ = _g(c)(), d = Ch(ET)(Nh)(c)(dg(g)(_)(c));
      if (d.tag === "Left")
        return Et("Left", "precompute failed");
      if (d.tag === "Right") {
        const l = ST(t)(d._1)(e)(r)(o)(i)(s)();
        return Et("Right", l);
      }
      f();
    };
  }
  f();
}, gf = In.createElement;
In.Fragment;
function wc(t) {
  return (n) => Array.isArray(n.children) ? gf.apply(null, [t, n].concat(n.children)) : gf(t, n);
}
function PT(t) {
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
const Sl = /* @__PURE__ */ PT(wc), GT = /* @__PURE__ */ Sl("canvas")(), IT = (t, n) => {
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
function Cl(t, n, e) {
  const r = IT(t, n);
  In.useEffect(e, [r]);
}
const AT = In.useRef;
function FT(t) {
  return t.current;
}
In.useContext;
In.useDebugValue;
In.useId;
In.useDeferredValue;
In.useSyncExternalStore;
In.useSyncExternalStore;
function RT(t, n) {
  return n.displayName = t, n.toString = () => t, n;
}
In.useEffectEvent || In.experimental_useEffectEvent;
const Pl = (t) => (n) => (e) => () => Cl((r, o) => t.eq(r)(o), n, e), BT = /* @__PURE__ */ S1(FT), QT = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, WT = (t) => {
  const n = {
    apply: (e) => (r) => () => {
      const o = e(), i = r();
      return o(i);
    },
    Functor0: () => QT
  };
  return { pure: (e) => () => e, Apply0: () => n };
}, DT = /* @__PURE__ */ Pl({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), Gl = /* @__PURE__ */ Hi(Bo), vr = /* @__PURE__ */ Gl(i_), ku = WT().pure, HT = Qt.foldMap(w_), _f = (t) => t, OT = /* @__PURE__ */ Pl({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), zT = /* @__PURE__ */ A_(Xn), qT = nr.traverse(Bo), YT = /* @__PURE__ */ Gl(Qt), XT = /* @__PURE__ */ wc(GT), VT = {
  eq: (t) => (n) => (t.renderer === "CanvasRenderer" ? n.renderer === "CanvasRenderer" : t.renderer === "SvgRenderer" && n.renderer === "SvgRenderer") && (t.sizing.tag === "AutoSize" ? n.sizing.tag === "AutoSize" : t.sizing.tag === "FixedSize" && n.sizing.tag === "FixedSize" && t.sizing._1 === n.sizing._1 && t.sizing._2 === n.sizing._2) && t.source === n.source && (t.theme === "Light" ? n.theme === "Light" : t.theme === "Dark" ? n.theme === "Dark" : t.theme === "Blueprint" ? n.theme === "Blueprint" : t.theme === "Whiteboard" ? n.theme === "Whiteboard" : t.theme === "Isometric" && n.theme === "Isometric") && (t.transparency === "PaintBackground" ? n.transparency === "PaintBackground" : t.transparency === "TransparentBackground" && n.transparency === "TransparentBackground")
}, UT = /* @__PURE__ */ Sl("svg")(), Il = (t) => (n) => {
  const e = Se(n.theme, x, Ot), r = (() => {
    if (e.tag === "Nothing")
      return "light";
    if (e.tag === "Just")
      return e._1;
    f();
  })(), o = Se(n.renderer, x, Ot), i = (() => {
    if (o.tag === "Nothing")
      return "canvas";
    if (o.tag === "Just")
      return o._1;
    f();
  })(), s = r === "light" ? T("Just", tf) : r === "dark" ? T("Just", bJ) : r === "blueprint" ? T("Just", LJ) : r === "whiteboard" ? T("Just", EJ) : r === "isometric" ? T("Just", SJ) : x, u = i === "svg" ? T("Just", kT) : i === "canvas" ? T("Just", af) : x, c = {
    source: t,
    renderer: (() => {
      if (u.tag === "Nothing")
        return af;
      if (u.tag === "Just")
        return u._1;
      f();
    })(),
    sizing: (() => {
      const a = Se(n.width, x, Ot);
      if (a.tag === "Just") {
        const g = Se(n.height, x, Ot);
        if (g.tag === "Just")
          return bl("FixedSize", a._1, g._1);
      }
      return wT;
    })(),
    theme: (() => {
      if (s.tag === "Nothing")
        return tf;
      if (s.tag === "Just")
        return s._1;
      f();
    })(),
    transparency: (() => {
      const a = Se(n.transparent, x, Ot);
      if (a.tag === "Nothing")
        return !1;
      if (a.tag === "Just")
        return a._1;
      f();
    })() ? PJ : CJ
  };
  return () => {
    const a = AT(b_), g = lf((h, $) => b(h, $), x), _ = g._1, d = lf((h, $) => b(h, $), { time: 0, keyframe: "", playing: !1 });
    DT(b(i, r))((() => {
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
    const l = BT(a);
    return Cl(
      (h, $) => VT.eq(h)($),
      c,
      () => {
        const h = l(), $ = Se(h, x, Ot), p = (() => {
          if ($.tag === "Just")
            return $T(x, Ot, "Element", $._1);
          if ($.tag === "Nothing")
            return x;
          f();
        })();
        if (p.tag === "Nothing")
          return () => {
          };
        if (p.tag === "Just") {
          const m = CT(p._1)(c.source)(c.renderer)(c.sizing)(c.theme)(c.transparency)(!0)();
          if (m.tag === "Left")
            return G_("[markgraf] " + m._1)(), () => {
            };
          if (m.tag === "Right") {
            const y = m._1;
            g._2((v) => T("Just", y))();
            const N = y.subscribe((v) => d._2((w) => v))();
            return () => (N(), y.destroy(), g._2((v) => x)());
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
      play: vr((h) => h.play)(_),
      pause: vr((h) => h.pause)(_),
      toggle: vr((h) => h.toggle)(_),
      seek: (h) => vr(($) => $.seek(h))(_),
      setSpeed: (h) => vr(($) => $.setSpeed(h))(_),
      onFrameEnter: (h) => ($) => {
        if (_.tag === "Just")
          return _._1.onFrame(h)($);
        if (_.tag === "Nothing")
          return () => () => {
          };
        f();
      },
      seekFrame: (h) => vr(($) => $.seekFrame(h))(_)
    })();
  };
}, KT = /* @__PURE__ */ RT(
  "MarkgrafPlayer",
  (t) => {
    const n = Il(t.src)({ renderer: t.renderer, width: t.width, height: t.height, theme: t.theme, transparent: t.transparent })();
    OT(b(
      n.ready,
      (() => {
        const o = Se(t.onFrameEnter, x, Ot);
        return o.tag === "Just" ? HT(_f)(kt(P.compare)(Object.keys(o._1))) : "";
      })()
    ))((() => {
      const o = Se(t.onFrameEnter, x, Ot);
      if (n.ready && o.tag === "Just") {
        const i = qT((s) => n.onFrameEnter(s._1)(s._2))(zT(o._1));
        return () => {
          const s = i();
          return YT(_f)(s);
        };
      }
      return () => () => {
      };
    })())();
    const e = Se(t.renderer, x, Ot);
    return (() => {
      if (e.tag === "Nothing")
        return "canvas";
      if (e.tag === "Just")
        return e._1;
      f();
    })() === "svg" ? ku(wc(UT)({ className: "markgraf-player", ref: n.elementRef }))() : ku(XT({ className: "markgraf-player", ref: n.elementRef }))();
  }
), jT = (t, n) => Il(t)(n ?? {}), ZT = (t) => KT({ ...t, onFrameEnter: t.onFrameEnter ?? null });
export {
  ZT as MarkgrafPlayer,
  jT as useMarkgraf
};
