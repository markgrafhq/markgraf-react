import oe from "react";
function f() {
  throw new Error("Failed pattern match");
}
function Qe(t, n) {
  return n > 0 ? Math.floor(t / n) : n < 0 ? -Math.floor(t / -n) : 0;
}
const jn = (t) => (n) => t, D = function(t) {
  return function(n) {
    for (var e = n.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = t(n[o]);
    return r;
  };
}, Fp = { map: D }, cf = (t) => t, rn = function(t) {
  return t.toString();
}, vo = function(t) {
  var n = t.toString();
  return isNaN(n + ".0") ? n : n + ".0";
}, ba = function(t) {
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
}, af = (t) => t, Bn = /* @__PURE__ */ af("LT"), Hn = /* @__PURE__ */ af("GT"), te = /* @__PURE__ */ af("EQ"), J = (t, n) => ({ tag: t, _1: n }), x = /* @__PURE__ */ J("Nothing"), jt = (t) => J("Just", t), wd = (t) => {
  if (t.tag === "Nothing")
    return !0;
  if (t.tag === "Just")
    return !1;
  f();
}, Nd = (t) => {
  if (t.tag === "Nothing")
    return !1;
  if (t.tag === "Just")
    return !0;
  f();
}, ui = function(t) {
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
}, xi = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldr((o) => {
    const i = r(o);
    return (s) => n.apply(n.Functor0().map((u) => cf)(i))(s);
  })(t.pure());
}, wi = (t) => {
  const n = xi(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, ff = {
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
  foldr: ui,
  foldl: w,
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => Xt.foldr((r) => (o) => t.Semigroup0().append(e(r))(o))(n);
  }
}, Td = null;
function De(t, n, e) {
  return t == null ? n : e(t);
}
const k = (t, n) => ({ tag: "Tuple", _1: t, _2: n }), re = (t) => (n) => k(t, n), tc = (t) => t._2, nc = (t) => t._1, Gp = function(t) {
  return function() {
    return t;
  };
}, Ip = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return Go.pure(e(r))();
  },
  Functor0: () => Bp
}, Go = { pure: Gp, Apply0: () => Ip }, Bp = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, Hp = function(t) {
  return function() {
    console.log(t);
  };
}, sl = function(t) {
  return function() {
    console.warn(t);
  };
}, vt = typeof Array.prototype.flatMap == "function" ? function(t) {
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
}, Nt = (t, n) => ({ tag: t, _1: n }), Dp = (t) => Nt("Left", t), Jd = (t) => Nt("Right", t), zp = {
  map: (t) => (n) => {
    if (n.tag === "Left")
      return Nt("Left", n._1);
    if (n.tag === "Right")
      return Nt("Right", t(n._1));
    f();
  }
}, bd = {
  apply: (t) => (n) => {
    if (t.tag === "Left")
      return Nt("Left", t._1);
    if (t.tag === "Right") {
      if (n.tag === "Left")
        return Nt("Left", n._1);
      if (n.tag === "Right")
        return Nt("Right", t._1(n._1));
    }
    f();
  },
  Functor0: () => zp
}, Qp = {
  bind: (t) => {
    if (t.tag === "Left") {
      const n = t._1;
      return (e) => Nt("Left", n);
    }
    if (t.tag === "Right") {
      const n = t._1;
      return (e) => e(n);
    }
    f();
  },
  Apply0: () => bd
}, qp = { pure: Jd, Apply0: () => bd }, kd = { Applicative0: () => qp, Bind1: () => Qp }, Wp = (t) => t, Op = { map: (t) => (n) => t(n) }, Ld = { apply: (t) => (n) => t(n), Functor0: () => Op }, Xp = { bind: (t) => (n) => n(t), Apply0: () => Ld }, Yp = { pure: Wp, Apply0: () => Ld }, ke = { Applicative0: () => Yp, Bind1: () => Xp }, ni = (t, n) => ({ tag: t, _1: n }), lf = (t) => ni("Loop", t), Up = (t) => ni("Done", t), Vp = {
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
  Monad0: () => ke
}, Mp = function(t) {
  return function(n) {
    return function() {
      return t(n());
    };
  };
}, Kp = function(t) {
  return function() {
    return t;
  };
}, jp = function(t) {
  return function(n) {
    return function() {
      return n(t())();
    };
  };
}, Zp = { map: Mp }, tm = { Applicative0: () => gf, Bind1: () => nm }, nm = { bind: jp, Apply0: () => Sd }, Sd = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return gf.pure(e(r))();
  },
  Functor0: () => Zp
}, gf = { pure: Kp, Apply0: () => Sd }, em = {
  tailRecM: (t) => (n) => {
    const e = t(n);
    return () => {
      let o = e();
      for (; o.tag === "Loop"; ) {
        const s = o;
        if (s.tag === "Loop") {
          o = t(s._1)();
          continue;
        }
        s.tag !== "Done" && f();
      }
      const i = o;
      if (i.tag === "Done")
        return i._1;
      f();
    };
  },
  Monad0: () => tm
}, rm = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, om = function(t, n, e, r) {
  return e >= 0 && e < r.length ? t(r[e]) : n;
}, df = function(t) {
  return t.length;
}, im = function(t, n, e) {
  return e.length > 0 ? t(e.pop()) : n;
}, sm = function(t, n) {
  return n.push(t);
}, um = /* @__PURE__ */ rm(sm), cm = (t, n) => ({ tag: "Iterator", _1: t, _2: n }), am = (t) => (n) => (e) => () => {
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
}, fm = (t) => (n) => () => {
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
}, qt = function(t) {
  return function(n) {
    for (var e = n.length, r = Array(e), o = 0; o < e; o++)
      r[o] = t(o)(n[o]);
    return r;
  };
};
var _f = function(t) {
  return function(n) {
    return t === n;
  };
};
const lm = _f, gm = _f, Ni = _f, ec = function(t) {
  return function(n) {
    return function(e) {
      if (n.length !== e.length) return !1;
      for (var r = 0; r < n.length; r++)
        if (!t(n[r])(e[r])) return !1;
      return !0;
    };
  };
}, gr = { eq: Ni }, dm = { eq: gm }, to = { eq: lm };
var hf = function(t) {
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
const _m = hf, hm = hf, pm = hf, F = { compare: /* @__PURE__ */ pm(Bn)(te)(Hn), Eq0: () => gr }, ot = { compare: /* @__PURE__ */ hm(Bn)(te)(Hn), Eq0: () => dm }, nt = { compare: /* @__PURE__ */ _m(Bn)(te)(Hn), Eq0: () => to }, rc = function(t) {
  return t;
}, mm = /* @__PURE__ */ (function() {
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
})(), $m = (t) => t, io = {
  traverse: (t) => {
    const n = t.Apply0();
    return mm(n.apply)(n.Functor0().map)(t.pure);
  },
  sequence: (t) => io.traverse(t)($m),
  Functor0: () => Fp,
  Foldable1: () => Xt
}, Ut = function(t, n) {
  for (var e = t > n ? -1 : 1, r = new Array(e * (n - t) + 1), o = t, i = 0; o !== n; )
    r[i++] = o, o += e;
  return r[i] = o, r;
};
var ym = function(t, n) {
  if (t < 1)
    return [];
  var e = new Array(t);
  return e.fill(n);
}, vm = function(t, n) {
  for (var e = [], r = 0, o = 0; o < t; o++)
    e[r++] = n;
  return e;
};
const xm = typeof Array.prototype.fill == "function" ? ym : vm, Ot = /* @__PURE__ */ (function() {
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
})(), Dt = function(t, n, e) {
  return e.length === 0 ? t({}) : n(e[0])(e.slice(1));
}, Cd = function(t, n, e, r) {
  for (var o = 0; o < r.length; o++) {
    var i = e(r[o]);
    if (n(i)) return i;
  }
  return t;
}, Co = function(t, n, e, r) {
  for (var o = 0, i = r.length; o < i; o++)
    if (e(r[o])) return t(o);
  return n;
}, Ed = function(t, n, e, r, o) {
  if (e < 0 || e > o.length) return n;
  var i = o.slice();
  return i.splice(e, 0, r), t(i);
}, Ad = function(t, n, e, r) {
  if (e < 0 || e >= r.length) return n;
  var o = r.slice();
  return o.splice(e, 1), t(o);
}, no = function(t, n, e, r, o) {
  if (e < 0 || e >= o.length) return n;
  var i = o.slice();
  return i[e] = r, t(i);
}, pn = function(t) {
  return t.slice().reverse();
}, ve = function(t) {
  if (t.length <= 1e4)
    return Array.prototype.concat.apply([], t);
  for (var n = [], e = 0, r = t.length; e < r; e++)
    for (var o = t[e], i = 0, s = o.length; i < s; i++)
      n.push(o[i]);
  return n;
}, lt = function(t, n) {
  return n.filter(t);
}, wm = function(t, n, e) {
  for (var r = e.length, o = n, i = new Array(r), s = 0; s < r; s++)
    o = t(o)(e[s]), i[s] = o;
  return i;
}, Nm = /* @__PURE__ */ (function() {
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
})(), Ct = function(t, n, e) {
  return e.slice(t, n);
}, Fn = function(t, n, e) {
  for (var r = n.length < e.length ? n.length : e.length, o = new Array(r), i = 0; i < r; i++)
    o[i] = t(n[i])(e[i]);
  return o;
}, he = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (t(n[r])) return !0;
  return !1;
}, Pd = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (!t(n[r])) return !1;
  return !0;
}, Ht = (t) => (n) => Nm(
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
), Tm = (t) => (n) => Ht((e) => (r) => t.compare(n(e))(n(r))), Et = (t) => (n) => (() => {
  const e = um(n);
  return () => {
    const r = [...t];
    return e(r)(), r;
  };
})()(), Ke = (t) => {
  if (t.length === 0)
    return t.length - 1 | 0, x;
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? J("Just", { init: Ct(0, t.length - 1 | 0, t), last: t[n] }) : x;
}, Jm = (t) => (n) => (e) => t >= 0 && t < e.length ? no(jt, x, t, n(e[t]), e) : x, ar = (t) => (n) => {
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
    return r._1 === 0 ? { init: [], rest: n } : { init: Ct(0, r._1, n), rest: Ct(r._1, n.length, n) };
  if (r.tag === "Nothing")
    return { init: n, rest: [] };
  f();
}, ci = (t) => (n) => {
  const e = Ht((r) => (o) => t(r._2)(o._2))(qt(re)(n));
  return 0 < e.length ? D(tc)(Tm(nt)(nc)((() => {
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
}, bm = (t) => (n) => {
  const e = [], o = cm(
    (i) => i >= 0 && i < n.length ? J("Just", n[i]) : x,
    { value: 0 }
  );
  return fm(o)((i) => () => {
    const s = [];
    s.push(i), am(t(i))(o)(s)(), e.push(s);
  })(), e;
}, un = (t) => (n) => {
  const e = Co(jt, x, t, n);
  return e.tag === "Just" ? J("Just", n[e._1]) : x;
}, pf = (t) => (n) => lt(t, n), ge = (t) => (n) => (e) => {
  const r = Co(jt, x, (o) => t.eq(o)(n), e);
  if (r.tag === "Nothing")
    return !1;
  if (r.tag === "Just")
    return !0;
  f();
}, Rd = (t) => (n) => vt(n)(t), xt = (t) => Rd((n) => {
  const e = t(n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [e._1];
  f();
}), km = isFinite, dr = Math.abs, Lm = Math.acos, wo = function(t) {
  return function(n) {
    return Math.atan2(t, n);
  };
}, oc = Math.ceil, ne = Math.cos, ai = Math.exp, Fe = Math.floor, au = Math.log, Sm = function(t) {
  return function(n) {
    return Math.min(t, n);
  };
}, fi = function(t) {
  return function(n) {
    return Math.pow(t, n);
  };
}, Pe = Math.round, le = Math.sin, Un = Math.sqrt, Cm = Math.tan, Em = function(t) {
  return function(n) {
    return function(e) {
      return (e | 0) === e ? t(e) : n;
    };
  };
}, U = function(t) {
  return t;
}, Am = function(t) {
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
}, Pm = /* @__PURE__ */ Am(jt)(x), Rm = /* @__PURE__ */ Pm(10), Fd = /* @__PURE__ */ Em(jt)(x), ln = (t) => {
  if (!km(t))
    return 0;
  if (t >= U(2147483647))
    return 2147483647;
  if (t <= U(-2147483648))
    return -2147483648;
  const n = Fd(t);
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return n._1;
  f();
}, Fm = (t, n) => ({ tag: "NonEmpty", _1: t, _2: n }), Zt = (t, n, e) => ({ tag: t, _1: n, _2: e }), Qt = /* @__PURE__ */ Zt("Nil"), gn = {
  foldr: (t) => (n) => {
    const e = gn.foldl((i) => (s) => t(s)(i))(n), o = ((i) => (s) => {
      let u = i, c = s, a = !0, l;
      for (; a; ) {
        const d = u, _ = c;
        if (_.tag === "Nil") {
          a = !1, l = d;
          continue;
        }
        if (_.tag === "Cons") {
          u = Zt("Cons", _._1, d), c = _._2;
          continue;
        }
        f();
      }
      return l;
    })(Qt);
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
    return (e) => gn.foldl((r) => {
      const o = t.Semigroup0().append(r);
      return (i) => o(e(i));
    })(n);
  }
}, Gm = function(t) {
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
}, Im = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, Bm = { unfoldr1: /* @__PURE__ */ Gm(wd)(Im)(nc)(tc) }, Hm = function(t) {
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
}, Dm = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, me = {
  unfoldr: /* @__PURE__ */ Hm(wd)(Dm)(nc)(tc),
  Unfoldable10: () => Bm
}, nn = (t, n, e, r, o, i, s) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s }), de = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), Bs = (t, n, e) => ({ tag: "Split", _1: t, _2: n, _3: e }), ul = (t, n, e) => ({ tag: "SplitLast", _1: t, _2: n, _3: e }), B = /* @__PURE__ */ nn("Leaf"), Oe = /* @__PURE__ */ de("IterLeaf"), bn = (t, n, e, r) => {
  if (e.tag === "Leaf") {
    if (r.tag === "Leaf")
      return nn("Node", 1, 1, t, n, e, r);
    if (r.tag === "Node")
      return nn("Node", 1 + r._1 | 0, 1 + r._2 | 0, t, n, e, r);
    f();
  }
  if (e.tag === "Node") {
    if (r.tag === "Leaf")
      return nn("Node", 1 + e._1 | 0, 1 + e._2 | 0, t, n, e, r);
    if (r.tag === "Node")
      return nn("Node", e._1 > r._1 ? 1 + e._1 | 0 : 1 + r._1 | 0, (1 + e._2 | 0) + r._2 | 0, t, n, e, r);
  }
  f();
}, ie = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r.tag === "Leaf" ? nn("Node", 1, 1, t, n, B, B) : r.tag === "Node" && r._1 > 1 ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      f();
    })() ? bn(r._5._3, r._5._4, bn(t, n, e, r._5._5), bn(r._3, r._4, r._5._6, r._6)) : bn(r._3, r._4, bn(t, n, e, r._5), r._6) : bn(t, n, e, r);
  if (e.tag === "Node")
    return r.tag === "Node" ? r._1 > (e._1 + 1 | 0) ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      f();
    })() ? bn(r._5._3, r._5._4, bn(t, n, e, r._5._5), bn(r._3, r._4, r._5._6, r._6)) : bn(r._3, r._4, bn(t, n, e, r._5), r._6) : e._1 > (r._1 + 1 | 0) ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      f();
    })() ? bn(e._6._3, e._6._4, bn(e._3, e._4, e._5, e._6._5), bn(t, n, e._6._6, r)) : bn(e._3, e._4, e._5, bn(t, n, e._6, r)) : bn(t, n, e, r) : r.tag === "Leaf" && e._1 > 1 ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      f();
    })() ? bn(e._6._3, e._6._4, bn(e._3, e._4, e._5, e._6._5), bn(t, n, e._6._6, r)) : bn(e._3, e._4, e._5, bn(t, n, e._6, r)) : bn(t, n, e, r);
  f();
}, li = (t, n, e) => {
  if (e.tag === "Leaf")
    return Bs(x, B, B);
  if (e.tag === "Node") {
    const r = t(n)(e._3);
    if (r === "LT") {
      const o = li(t, n, e._5);
      return Bs(o._1, o._2, ie(e._3, e._4, o._3, e._6));
    }
    if (r === "GT") {
      const o = li(t, n, e._6);
      return Bs(o._1, ie(e._3, e._4, e._5, o._2), o._3);
    }
    if (r === "EQ")
      return Bs(J("Just", e._4), e._5, e._6);
  }
  f();
}, Gd = (t, n, e, r) => {
  if (r.tag === "Leaf")
    return ul(t, n, e);
  if (r.tag === "Node") {
    const o = Gd(r._3, r._4, r._5, r._6);
    return ul(o._1, o._2, ie(t, n, e, o._3));
  }
  f();
}, Ti = (t, n) => {
  if (t.tag === "Leaf")
    return n;
  if (t.tag === "Node") {
    const e = Gd(t._3, t._4, t._5, t._6);
    return ie(e._1, e._2, e._3, n);
  }
  f();
}, Cr = (t, n, e) => {
  if (n.tag === "Leaf")
    return B;
  if (e.tag === "Leaf")
    return n;
  if (e.tag === "Node") {
    const r = li(t, e._3, n);
    return Ti(Cr(t, r._2, e._5), Cr(t, r._3, e._6));
  }
  f();
}, fu = (t, n, e, r) => {
  if (e.tag === "Leaf" || r.tag === "Leaf")
    return B;
  if (r.tag === "Node") {
    const o = li(t, r._3, e), i = fu(t, n, o._2, r._5), s = fu(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return ie(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return Ti(i, s);
  }
  f();
}, Zn = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r;
  if (r.tag === "Leaf")
    return e;
  if (r.tag === "Node") {
    const o = li(t, r._3, e), i = Zn(t, n, o._2, r._5), s = Zn(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return ie(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return ie(r._3, r._4, i, s);
  }
  f();
}, Id = (t) => (n) => (e) => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return B;
    if (o.tag === "Node") {
      const i = t.compare(e)(o._3);
      if (i === "LT")
        return ie(o._3, o._4, r(o._5), o._6);
      if (i === "GT")
        return ie(o._3, o._4, o._5, r(o._6));
      if (i === "EQ") {
        const s = n(o._4);
        if (s.tag === "Nothing")
          return Ti(o._5, o._6);
        if (s.tag === "Just")
          return nn("Node", o._1, o._2, o._3, s._1, o._5, o._6);
      }
    }
    f();
  };
  return r;
}, zm = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return B;
    if (r.tag === "Node") {
      const o = n(r._3)(r._4);
      if (o.tag === "Just")
        return ie(r._3, o._1, e(r._5), e(r._6));
      if (o.tag === "Nothing")
        return Ti(e(r._5), e(r._6));
    }
    f();
  };
  return e;
}, Qm = (t) => (n) => (r) => {
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
        let d = a, _ = l, g = !0, h;
        for (; g; ) {
          const m = d, p = _;
          if (p.tag === "Leaf") {
            g = !1, h = m;
            continue;
          }
          if (p.tag === "Node") {
            if (p._6.tag === "Leaf") {
              d = de("IterEmit", p._3, p._4, m), _ = p._5;
              continue;
            }
            d = de("IterEmit", p._3, p._4, de("IterNode", p._6, m)), _ = p._5;
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
}, Xe = /* @__PURE__ */ Qm((t, n, e) => J("Just", k(k(t, n), e)))((t) => x), Gt = (t) => (n) => (e) => (r) => {
  const o = (i) => {
    if (i.tag === "Leaf")
      return nn("Node", 1, 1, e, r, B, B);
    if (i.tag === "Node") {
      const s = t.compare(e)(i._3);
      if (s === "LT")
        return ie(i._3, i._4, o(i._5), i._6);
      if (s === "GT")
        return ie(i._3, i._4, i._5, o(i._6));
      if (s === "EQ")
        return nn("Node", i._1, i._2, e, n(i._4)(r), i._5, i._6);
    }
    f();
  };
  return o;
}, K = (t) => (n) => (e) => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return nn("Node", 1, 1, n, e, B, B);
    if (o.tag === "Node") {
      const i = t.compare(n)(o._3);
      if (i === "LT")
        return ie(o._3, o._4, r(o._5), o._6);
      if (i === "GT")
        return ie(o._3, o._4, o._5, r(o._6));
      if (i === "EQ")
        return nn("Node", o._1, o._2, n, e, o._5, o._6);
    }
    f();
  };
  return r;
}, mn = (t) => (n) => n.foldl((e) => (r) => K(t)(r._1)(r._2)(e))(B), gi = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return B;
    if (r.tag === "Node") {
      const o = t.compare(n)(r._3);
      if (o === "LT")
        return ie(r._3, r._4, e(r._5), r._6);
      if (o === "GT")
        return ie(r._3, r._4, r._5, e(r._6));
      if (o === "EQ")
        return Ti(r._5, r._6);
    }
    f();
  };
  return e;
}, Bd = (t) => {
  const n = t.compare;
  return (e) => (r) => (o) => {
    const i = li(n, r, o), s = e(i._1);
    if (s.tag === "Nothing")
      return Ti(i._2, i._3);
    if (s.tag === "Just")
      return ie(r, s._1, i._2, i._3);
    f();
  };
}, Tn = function(t) {
  return function(n) {
    return t + n | 0;
  };
}, Eo = function(t) {
  return function(n) {
    return t + n;
  };
}, Gr = function(t) {
  return function(n) {
    if (n === 0) return 0;
    var e = Math.abs(n);
    return (t % e + e) % e;
  };
}, xn = function(t) {
  return function(n) {
    return t.length === 0 ? n : n.length === 0 ? t : t.concat(n);
  };
}, qm = { append: xn }, Wm = { mempty: [], Semigroup0: () => qm };
function mf(t) {
  return function(n) {
    return function(e) {
      return t.apply(e, [n]);
    };
  };
}
const Om = mf(Number.prototype.toPrecision), Xm = mf(Number.prototype.toFixed), Ym = mf(Number.prototype.toExponential), $f = (t, n) => ({ tag: t, _1: n }), yf = (t) => (n) => (e) => {
  const r = nt.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = nt.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, vf = (t) => {
  if (t.tag === "Precision")
    return Om(t._1);
  if (t.tag === "Fixed")
    return Xm(t._1);
  if (t.tag === "Exponential")
    return Ym(t._1);
  f();
};
function Um() {
  return Date.now();
}
function cl(t) {
  return new Error(t);
}
function $s(t) {
  return function() {
    return t.getContext("2d");
  };
}
function Hd(t) {
  return function() {
    return t.width;
  };
}
function Dd(t) {
  return function() {
    return t.height;
  };
}
function ic(t) {
  return function(n) {
    return function() {
      t.width = n;
    };
  };
}
function sc(t) {
  return function(n) {
    return function() {
      t.height = n;
    };
  };
}
function xf(t) {
  return function(n) {
    return function() {
      t.lineWidth = n;
    };
  };
}
function wf(t) {
  return function(n) {
    return function() {
      t.fillStyle = n;
    };
  };
}
function Vm(t) {
  return function(n) {
    return function() {
      t.strokeStyle = n;
    };
  };
}
function Yc(t) {
  return function(n) {
    return function() {
      t.lineCap = n;
    };
  };
}
function Uc(t) {
  return function(n) {
    return function() {
      t.lineJoin = n;
    };
  };
}
function Mm(t) {
  return function(n) {
    return function() {
      t.globalCompositeOperation = n;
    };
  };
}
function Km(t) {
  return function(n) {
    return function() {
      t.globalAlpha = n;
    };
  };
}
function zd(t) {
  return function() {
    t.beginPath();
  };
}
function Nf(t) {
  return function() {
    t.stroke();
  };
}
function Tf(t) {
  return function() {
    t.fill();
  };
}
function jm(t) {
  return function() {
    t.clip();
  };
}
function Hi(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.lineTo(n, e);
      };
    };
  };
}
function Qd(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.moveTo(n, e);
      };
    };
  };
}
function qd(t) {
  return function() {
    t.closePath();
  };
}
function Zm(t) {
  return function(n) {
    return function() {
      t.fillRect(n.x, n.y, n.width, n.height);
    };
  };
}
function Jf(t) {
  return function(n) {
    return function() {
      t.clearRect(n.x, n.y, n.width, n.height);
    };
  };
}
function Ki(t) {
  return function(n) {
    return function() {
      t.scale(n.scaleX, n.scaleY);
    };
  };
}
function ka(t) {
  return function(n) {
    return function() {
      t.translate(n.translateX, n.translateY);
    };
  };
}
function t$(t) {
  return function(n) {
    return function() {
      t.transform(n.a, n.b, n.c, n.d, n.e, n.f);
    };
  };
}
function n$(t) {
  return function(n) {
    return function() {
      t.textAlign = n;
    };
  };
}
function e$(t) {
  return function(n) {
    return function() {
      t.textBaseline = n;
    };
  };
}
function uc(t) {
  return function(n) {
    return function() {
      t.font = n;
    };
  };
}
function bf(t) {
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
function Wd(t) {
  return function(n) {
    return function() {
      return t.measureText(n);
    };
  };
}
function Jr(t) {
  return function() {
    t.save();
  };
}
function br(t) {
  return function() {
    t.restore();
  };
}
function Di(t) {
  return function(n) {
    return function() {
      t.quadraticCurveTo(n.cpx, n.cpy, n.x, n.y);
    };
  };
}
function r$(t) {
  return function(n) {
    return function() {
      t.bezierCurveTo(n.cp1x, n.cp1y, n.cp2x, n.cp2y, n.x, n.y);
    };
  };
}
const Od = (t) => t, kf = (t) => t, Lf = (t) => t, Sf = (t) => t, cc = (t) => t, o$ = /* @__PURE__ */ cc("BaselineTop"), Cf = /* @__PURE__ */ cc("BaselineMiddle"), i$ = /* @__PURE__ */ cc("BaselineAlphabetic"), s$ = /* @__PURE__ */ cc("BaselineBottom"), u$ = /* @__PURE__ */ Sf("AlignLeft"), c$ = /* @__PURE__ */ Sf("AlignRight"), Ef = /* @__PURE__ */ Sf("AlignCenter"), Af = /* @__PURE__ */ Lf("BevelJoin"), ac = /* @__PURE__ */ Lf("RoundJoin"), Pf = /* @__PURE__ */ Lf("MiterJoin"), Rf = /* @__PURE__ */ kf("Round"), Ff = /* @__PURE__ */ kf("Square"), Gf = /* @__PURE__ */ kf("Butt"), a$ = /* @__PURE__ */ Od("SourceOver"), f$ = /* @__PURE__ */ Od("Difference"), If = (t) => (n) => e$(t)((() => {
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
})()), Bf = (t) => (n) => n$(t)((() => {
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
})()), fc = (t) => (n) => {
  if (n === "BevelJoin")
    return Uc(t)("bevel");
  if (n === "RoundJoin")
    return Uc(t)("round");
  if (n === "MiterJoin")
    return Uc(t)("miter");
  f();
}, Hf = (t) => (n) => {
  if (n === "Round")
    return Yc(t)("round");
  if (n === "Square")
    return Yc(t)("square");
  if (n === "Butt")
    return Yc(t)("butt");
  f();
}, al = (t) => (n) => Mm(t)((() => {
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
})()), l$ = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldrWithIndex((o) => {
    const i = r(o);
    return (s) => {
      const u = i(s);
      return (c) => n.apply(n.Functor0().map((a) => cf)(u))(c);
    };
  })(t.pure());
}, g$ = (t) => {
  const n = l$(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, Df = {
  foldrWithIndex: (t) => (n) => {
    const e = ui((o) => {
      const i = o._1, s = o._2;
      return (u) => t(i)(s)(u);
    })(n), r = qt(re);
    return (o) => e(r(o));
  },
  foldlWithIndex: (t) => (n) => {
    const e = w((o) => (i) => t(i._1)(o)(i._2))(n), r = qt(re);
    return (o) => e(r(o));
  },
  foldMapWithIndex: (t) => {
    const n = t.mempty;
    return (e) => Df.foldrWithIndex((r) => (o) => (i) => t.Semigroup0().append(e(r)(o))(i))(n);
  },
  Foldable0: () => Xt
}, xe = {
  foldr: (t) => (n) => {
    const e = gn.foldr(t)(n);
    return (r) => e((() => {
      const o = (i, s) => {
        if (i.tag === "Leaf")
          return s;
        if (i.tag === "Node")
          return o(i._5, Zt("Cons", i._3, o(i._6, s)));
        f();
      };
      return o(r, Qt);
    })());
  }
}, d$ = (t) => {
  const n = {
    append: (() => {
      const e = t.compare;
      return (r) => (o) => Zn(e, jn, r, o);
    })()
  };
  return { mempty: B, Semigroup0: () => n };
}, Oi = function(t) {
  return function(n) {
    if (t >= 0 && t < n.length) return n.charAt(t);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
}, so = function(t) {
  return t.join("");
}, vr = function(t) {
  return t.split("");
}, Ji = function(t) {
  return t;
}, je = function(t) {
  return t.length;
}, fl = function(t) {
  return function(n) {
    return n.substr(0, t);
  };
}, di = function(t) {
  return function(n) {
    return n.substring(t);
  };
}, Xd = function(t) {
  return function(n) {
    return { before: n.substring(0, t), after: n.substring(t) };
  };
}, _$ = (t) => (n) => {
  const e = Xd(je(n) - je(t) | 0)(n);
  return e.after === t ? J("Just", e.before) : x;
}, Io = (t) => (n) => {
  const e = Xd(je(t))(n);
  return e.before === t ? J("Just", e.after) : x;
}, Yd = (t) => ({
  bind: (n) => (e) => t.Bind1().bind(n)((r) => {
    if (r.tag === "Left")
      return t.Applicative0().pure(Nt("Left", r._1));
    if (r.tag === "Right")
      return e(r._1);
    f();
  }),
  Apply0: () => Ud(t)
}), Ud = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = {
    map: (r) => n.map((o) => {
      if (o.tag === "Left")
        return Nt("Left", o._1);
      if (o.tag === "Right")
        return Nt("Right", r(o._1));
      f();
    })
  };
  return {
    apply: (() => {
      const r = Yd(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => zf(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, zf = (t) => ({ pure: (n) => t.Applicative0().pure(Nt("Right", n)), Apply0: () => Ud(t) }), h$ = (t) => {
  const n = { Applicative0: () => zf(t), Bind1: () => Yd(t) };
  return { throwError: (e) => t.Applicative0().pure(Nt("Left", e)), Monad0: () => n };
};
function ll(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
const p$ = (t, n, e) => ({ tag: t, _1: n, _2: e }), m$ = (t) => (n) => (e) => ll(e) === n ? zf(t).pure(e) : h$(t).throwError(Fm(p$("TypeMismatch", n, ll(e)), Qt)), $$ = function(t) {
  var n = null;
  return function() {
    return t === void 0 || (n = t(), t = void 0), n;
  };
}, y$ = function(t) {
  return t();
}, bi = function(n) {
  return function(e) {
    return function() {
      return n(e);
    };
  };
}, ys = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, ki = function(n) {
  return function(e) {
    return function(r) {
      return function(o) {
        return function() {
          return n(e, r, o);
        };
      };
    };
  };
}, Qf = function(n) {
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
}, v$ = function(n) {
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
}, x$ = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, w$ = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, Ao = (t) => BigInt(t), N$ = (t) => Number(t), tu = (t) => (n) => t + n, nu = (t) => (n) => t * n, La = (t) => (n) => t - n, Vd = 0n, lu = 1n, Md = (t) => (n) => t ^ n, ji = (t) => (n) => t & n, qf = (t) => (n) => t << n, Sa = (t) => (n) => t >> n, T$ = (t) => (n) => t == n, J$ = (t) => (n) => t === n ? 0 : t > n ? 1 : -1, b$ = { eq: T$ }, gl = {
  compare: (t) => (n) => {
    const e = J$(t)(n);
    return e === 1 ? Hn : e === 0 ? te : Bn;
  },
  Eq0: () => b$
}, k$ = /* @__PURE__ */ x$(jt)(x), L$ = /* @__PURE__ */ w$(jt)(x), Ca = function(t) {
  throw new Error(t);
}, Kd = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = ot.compare(n._1)(e._1);
      return r === "LT" ? Bn : r === "GT" ? Hn : ot.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), S$ = (t) => (n) => dr(t._1 - n._1) + dr(t._2 - n._2), Bo = (t) => t, lc = (t) => t, Cn = /* @__PURE__ */ lc("North"), En = /* @__PURE__ */ lc("South"), kr = /* @__PURE__ */ lc("East"), Lr = /* @__PURE__ */ lc("West"), Er = /* @__PURE__ */ Bo("Rectangle"), dl = /* @__PURE__ */ Bo("Cylinder"), C$ = /* @__PURE__ */ Bo("Parallelogram"), E$ = /* @__PURE__ */ Bo("Diamond"), A$ = /* @__PURE__ */ Bo("Ellipse"), _l = /* @__PURE__ */ Bo("Document"), P$ = /* @__PURE__ */ Bo("Cloud"), jd = /* @__PURE__ */ w(Eo)(0), R$ = (t) => (n) => (e) => {
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
}, Ur = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, gu = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, hl = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, F$ = (t) => {
  const n = { top: 0, bottom: 0, left: 0, right: 0 }, e = t.shape === "Cloud" ? { ...n, top: t.h * 0.38 } : t.shape === "Cylinder" ? { ...n, bottom: 5 } : t.shape === "Document" ? { ...n, bottom: t.h * 0.05 } : n;
  return [{ x: t.x - e.left, y: t.y - e.top }, { x: t.x + t.w + e.right, y: t.y + t.h + e.bottom }];
}, Zi = (t) => (n) => {
  const e = Fn(
    (s) => (u) => ({
      a: s,
      b: u,
      len: (() => {
        const c = u.y - s.y, a = u.x - s.x;
        return Un(a * a + c * c);
      })()
    }),
    t,
    Ct(1, t.length, t)
  ), r = jd(D((s) => s.len)(e)), o = R$(0)(r)(n * r), i = (s) => (u) => (c) => {
    let a = s, l = u, d = c, _ = !0, g;
    for (; _; ) {
      const h = a, m = l, p = d, $ = Dt((y) => x, (y) => (v) => J("Just", { head: y, tail: v }), h);
      if ($.tag === "Nothing") {
        const y = t.length - 1 | 0;
        if (y >= 0 && y < t.length) {
          _ = !1, g = t[y];
          continue;
        }
        _ = !1, g = p;
        continue;
      }
      if ($.tag === "Just") {
        if (m <= $._1.head.len) {
          const y = $._1.head.len <= 0 ? 0 : m / $._1.head.len;
          _ = !1, g = { x: $._1.head.a.x + ($._1.head.b.x - $._1.head.a.x) * y, y: $._1.head.a.y + ($._1.head.b.y - $._1.head.a.y) * y };
          continue;
        }
        a = $._1.tail, l = m - $._1.head.len, d = p;
        continue;
      }
      f();
    }
    return g;
  };
  return 0 < t.length ? J("Just", i(e)(o)(t[0])) : x;
}, G$ = (t) => (n) => {
  const e = Ur(1e-6)(t.scale);
  return { x: (n.x - t.tx) / e, y: (n.y - t.ty) / e, w: n.w / e, h: n.h / e };
}, gc = (t) => jd(Fn(
  (n) => (e) => {
    const r = e.y - n.y, o = e.x - n.x;
    return Un(o * o + r * r);
  },
  t,
  Ct(1, t.length, t)
)), I$ = (t) => (n) => {
  const e = Ur(4)(0.15 * gu(n.w)(n.h)), r = Ur(1)(t.w), o = Ur(1)(t.h), i = Ur(1)(n.w - 2 * e), s = Ur(1)(n.h - 2 * e), u = gu(i / r)(s / o);
  return { scale: u, tx: n.x + e + (i - r * u) / 2 - t.x * u, ty: n.y + e + (s - o * u) / 2 - t.y * u };
}, Wf = { scale: 1, tx: 0, ty: 0 }, Gn = (t) => {
  const n = Dt(
    (e) => x,
    (e) => (r) => J("Just", { head: e, tail: r }),
    [
      ...(() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, Zt("Cons", r._4, e(r._6, o)));
          f();
        };
        return vt(Ot(gn.foldr, e(t.nodes, Qt)))(F$);
      })(),
      ...ve((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, Zt("Cons", r._4, e(r._6, o)));
          f();
        };
        return Ot(gn.foldr, e(t.edges, Qt));
      })())
    ]
  );
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = w((r) => (o) => ({ minX: gu(r.minX)(o.x), minY: gu(r.minY)(o.y), maxX: Ur(r.maxX)(o.x), maxY: Ur(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, B$ = (t) => (n) => ((r) => (o) => (i) => {
  let s = r, u = o, c = i, a = !0, l;
  for (; a; ) {
    const d = s, _ = u, g = c, h = Dt((m) => x, (m) => (p) => J("Just", { head: m, tail: p }), _);
    if (h.tag === "Nothing") {
      a = !1, l = g;
      continue;
    }
    if (h.tag === "Just") {
      const m = hl(h._1.head)(d.interiors);
      if (m.tag === "Nothing") {
        a = !1, l = g;
        continue;
      }
      if (m.tag === "Just") {
        s = m._1, u = h._1.tail, c = (() => {
          const p = I$(Gn(m._1.layout))((() => {
            const $ = hl(h._1.head)(d.layout.nodes);
            if ($.tag === "Nothing")
              return { x: 0, y: 0, w: 1, h: 1, label: "", shape: Er };
            if ($.tag === "Just")
              return $._1;
            f();
          })());
          return { scale: g.scale * p.scale, tx: g.scale * p.tx + g.tx, ty: g.scale * p.ty + g.ty };
        })();
        continue;
      }
    }
    f();
  }
  return l;
})(t)(n)(Wf), H$ = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, D$ = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, eu = (t) => (n) => (e) => {
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
}, z$ = (t) => (n) => (e) => (r) => {
  const o = Gn(n);
  return e <= 0 || r <= 0 || o.w <= 0 || o.h <= 0 ? 1 : t ? H$(o.w / e)(o.h / r) : D$(o.w / e)(o.h / r);
}, Zd = (t) => (n) => (e) => {
  const r = t.widthPx / t.heightPx, o = e.w / e.h;
  if (t.widthPx <= 0 || t.heightPx <= 0) {
    const s = 1 / eu(0.05)(1)(n);
    return { w: e.w * s, h: e.h * s };
  }
  if (r > o) {
    const s = 1 / eu(0.05)(1)(n);
    return { w: e.h * r * s, h: e.h * s };
  }
  const i = 1 / eu(0.05)(1)(n);
  return { w: e.w * i, h: e.w / r * i };
}, pl = (t) => (n) => (e) => (r) => (o) => {
  const i = t + o / 2, s = t + n - o / 2, u = t + n / 2, c = e + r / 2;
  return o >= n ? u : eu(i)(s)(c);
}, t1 = (t) => (n) => (e) => (r) => {
  const o = Gn(t);
  return { x: pl(o.x)(o.w)(n.x)(n.w)(e), y: pl(o.y)(o.h)(n.y)(n.h)(r) };
}, n1 = (t) => (n) => (e) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: z$(t)(n)(e.w)(e.h) }), Q$ = (t) => (n) => (e) => (r) => {
  const o = { x: r.x - t.padding, y: r.y - t.padding, w: r.w + t.padding * 2, h: r.h + t.padding * 2 }, i = Zd(n)(0.65)(o), s = t1(e)(o)(i.w)(i.h), u = { x: s.x - i.w / 2, y: s.y - i.h / 2, w: i.w, h: i.h };
  return { focus: r, paddedFocus: o, viewport: u, camera: n1(n.widthPx > 0 && n.heightPx > 0)(e)(u) };
}, q$ = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Gn(r), u = { x: s.x * o.scale + o.tx, y: s.y * o.scale + o.ty, w: s.w * o.scale, h: s.h * o.scale }, c = t.padding * o.scale, a = { x: u.x - c, y: u.y - c, w: u.w + c * 2, h: u.h + c * 2 }, l = Zd(n)(0.7)(a), d = t1(e)(a)(l.w)(l.h), _ = { x: d.x - l.w / 2, y: d.y - l.h / 2, w: l.w, h: l.h };
  return { footprint: u, viewport: _, camera: n1(n.widthPx > 0 && n.heightPx > 0)(e)(_) };
}, e1 = (t) => t, W$ = (t, n) => ({ tag: t, _1: n }), Of = (t) => t, vs = (t, n) => ({ tag: t, _1: n }), Xf = (t, n) => ({ tag: t, _1: n }), xs = /* @__PURE__ */ Of("Animated"), O$ = /* @__PURE__ */ Of("StaticStill"), X$ = /* @__PURE__ */ Of("TitleCard"), Y$ = /* @__PURE__ */ Xf("First"), ml = /* @__PURE__ */ e1("Forward"), $l = /* @__PURE__ */ e1("Backward"), U$ = /* @__PURE__ */ vs("ExitNode"), r1 = /* @__PURE__ */ mn(F)(Xt), V$ = (t) => ui((n) => (e) => ({
  nodes: Zn(F.compare, jn, n.nodes, e.nodes),
  edges: Zn(F.compare, jn, n.edges, e.edges)
}))({ nodes: B, edges: B })(t.keyframes), M$ = (t) => (n) => ({
  entering: {
    nodes: Cr(F.compare, n.nodes, t.nodes),
    edges: Cr(F.compare, n.edges, t.edges)
  },
  leaving: {
    nodes: Cr(F.compare, t.nodes, n.nodes),
    edges: Cr(F.compare, t.edges, n.edges)
  },
  surviving: {
    nodes: fu(F.compare, jn, t.nodes, n.nodes),
    edges: fu(F.compare, jn, t.edges, n.edges)
  }
}), du = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, _i = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, _u = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Ea = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, K$ = /* @__PURE__ */ w((t) => (n) => K(F)(n)()(t))(B), j$ = /* @__PURE__ */ w((t) => (n) => K(F)(n)()(t))(B), Z$ = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Xe);
  return (n) => t(de("IterNode", n, Oe));
})(), o1 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, yl = /* @__PURE__ */ mn(F)(Xt), i1 = (t) => {
  const n = Dt((e) => x, (e) => (r) => J("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = w((r) => (o) => ({ minX: du(r.minX)(o.x), minY: du(r.minY)(o.y), maxX: _i(r.maxX)(o.x), maxY: _i(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, t2 = (t) => (n) => (e) => K$(vt(Ot(xe.foldr, e))((r) => {
  const o = _u(r)(t);
  if (o.tag === "Just")
    return lt((i) => !Ea(i)(n), [o._1.source, o._1.target]);
  if (o.tag === "Nothing")
    return [];
  f();
})), n2 = (t) => t.kind.tag === "SendToken" ? J("Just", k(t.kind._1.edge, { source: t.kind._1.from, target: t.kind._1.to })) : x, e2 = (t) => t.tag === "DataFlow" ? xt(n2)(t._1.events) : [], r2 = (t) => (n) => j$(xt((e) => Ea(e._2.source)(n) || Ea(e._2.target)(n) ? J("Just", e._1) : x)(Z$(t))), No = (t) => {
  const n = Dt((e) => x, (e) => (r) => J("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = w((r) => (o) => ({ minX: du(r.minX)(o.x), minY: du(r.minY)(o.y), maxX: _i(r.maxX)(o.x + o.w), maxY: _i(r.maxY)(o.y + o.h) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x + n._1.head.w,
      maxY: n._1.head.y + n._1.head.h
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, Yf = (t) => (n) => (e) => {
  if (e.tag === "Leaf")
    return Gn(t);
  const r = r2(n)(e), o = [
    ...xt((i) => {
      const s = o1(i)(t.nodes);
      return s.tag === "Just" ? J("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : x;
    })(Ot(
      xe.foldr,
      Zn(F.compare, jn, e, t2(n)(e)(r))
    )),
    ...xt((i) => {
      const s = _u(i)(t.edges);
      return s.tag === "Just" ? J("Just", i1(s._1)) : x;
    })(Ot(xe.foldr, r))
  ];
  return o.length === 0 ? Gn(t) : No(o);
}, s1 = (t) => (n) => (e) => {
  const r = [
    ...xt((o) => o)([
      (() => {
        const o = _u(e)(t.edges);
        return o.tag === "Just" ? J("Just", i1(o._1)) : x;
      })()
    ]),
    ...(() => {
      const o = _u(e)(n);
      if (o.tag === "Just")
        return xt((i) => {
          const s = o1(i)(t.nodes);
          return s.tag === "Just" ? J("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : x;
        })([o._1.source, o._1.target]);
      if (o.tag === "Nothing")
        return [];
      f();
    })()
  ];
  return r.length === 0 ? Yf(t)(n)(B) : No(r);
}, ws = (t) => (n) => {
  const e = Gn(t), r = e.w / _i(1e-4)(n.zoom), o = e.h / _i(1e-4)(n.zoom);
  return { x: n.center.x - r / 2, y: n.center.y - o / 2, w: r, h: o };
}, o2 = (t) => Zn(
  F.compare,
  jn,
  yl(D((n) => k(n.id, { source: n.from.node, target: n.to.node }))(t.graph.edges)),
  yl(vt(t.scenes)(e2))
), dc = (t) => t, i2 = (t) => t, Uf = /* @__PURE__ */ dc("Linear"), s2 = /* @__PURE__ */ dc("EaseInOutQuad"), eo = /* @__PURE__ */ dc("EaseInOutCubic"), u2 = /* @__PURE__ */ dc("SpringBouncy"), ts = (t) => (n) => (e) => {
  const r = Un(1 - n * n), o = t * r;
  return 1 - ai(-n * t * e) * (ne(o * e) + n / r * le(o * e));
}, c2 = (t) => {
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
}, Dr = (t) => (n) => (() => {
  if (t === "Linear")
    return i2;
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
    return (e) => 1 - (1 + 6 * e) * ai(-6 * e);
  if (t === "SpringBouncy")
    return ts(6)(0.7);
  f();
})()(c2(n)), _c = (t) => t, u1 = (t) => t, c1 = (t) => t, _r = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, hi = (t) => (n) => (e) => {
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
}, a1 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, a2 = (t) => (n) => {
  const e = nt.compare(t._1)(n._1);
  return e === "LT" ? Bn : e === "GT" ? Hn : ot.compare(t._2)(n._2);
}, f2 = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, l2 = /* @__PURE__ */ c1("Hold"), g2 = /* @__PURE__ */ c1("Gap"), hu = /* @__PURE__ */ u1("LinearLerp"), vl = /* @__PURE__ */ u1("StagedLogLerp"), Aa = /* @__PURE__ */ _c("Overview"), d2 = /* @__PURE__ */ _c("DiveHome"), xl = /* @__PURE__ */ _c("DiveTransition"), _2 = /* @__PURE__ */ _c("ActionFocus"), h2 = (t) => (n) => {
  const e = Gn(t), r = e.h / _r(1e-6)(n.zoom), o = e.w / _r(1e-6)(n.zoom);
  return { x: n.center.x - o / 2, y: n.center.y - r / 2, w: o, h: r };
}, p2 = (t) => (n) => (e) => {
  const r = e.center.y - n.center.y, o = e.center.x - n.center.x, i = Un(o * o + r * r), s = e.zoom - n.zoom, u = s < 0 ? -s : s;
  return hi(t.minTransition)(t.maxTransition)(_r(t.panSpeed <= 0 ? t.minTransition : i / t.panSpeed)(t.zoomSpeed <= 0 ? t.minTransition : u / t.zoomSpeed));
}, m2 = (t) => ({ startT: t.startT, endT: t.endT, fromCam: t.fromCam, toCam: t.toCam, easing: t.easing, interp: t.interp, intent: t.intent }), $2 = /* @__PURE__ */ w((t) => (n) => {
  const e = t.length - 1 | 0;
  return e >= 0 && e < t.length && t[e] === n ? t : Et(t)(n);
})([]), y2 = (t) => (n) => {
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
}, v2 = (t) => (n) => t.tag === "Just" ? n.tag === "Just" && y2(t._1)(n._1) : t.tag === "Nothing" && n.tag === "Nothing", wl = (t) => (n) => (e) => (r) => ({
  center: { x: r.center.x * e.scale + e.tx, y: r.center.y * e.scale + e.ty },
  zoom: r.zoom * Gn(t).w / _r(1e-6)(e.scale * Gn(n).w)
}), x2 = (t) => (n) => ({ center: { x: n.center.x * t.scale + t.tx, y: n.center.y * t.scale + t.ty }, zoom: n.zoom / _r(1e-6)(t.scale) }), f1 = (t) => (n) => (e) => (r) => ({
  center: { x: t.center.x + (n.center.x - t.center.x) * e, y: t.center.y + (n.center.y - t.center.y) * e },
  zoom: ai((() => {
    const o = au(_r(1e-6)(t.zoom));
    return o + (au(_r(1e-6)(n.zoom)) - o) * r;
  })())
}), l1 = (t) => (n) => (e) => (r) => {
  const o = ai(-t * n);
  return {
    center: { x: r.center.x + (e.center.x - r.center.x) * o, y: r.center.y + (e.center.y - r.center.y) * o },
    zoom: ai((() => {
      const i = au(_r(1e-6)(r.zoom));
      return i + (au(_r(1e-6)(e.zoom)) - i) * o;
    })())
  };
}, w2 = (t) => (n) => (e) => n.zoom >= t.zoom ? Dr(eo)(hi(0)(1)((e - 0.28) / 0.72)) : Dr(eo)(hi(0)(1)(e / 0.28)), N2 = (t) => (n) => (e) => n.zoom >= t.zoom ? Dr(eo)(hi(0)(1)(e / 0.28)) : Dr(eo)(hi(0)(1)((e - 0.28) / 0.72)), T2 = (t) => (n) => (e) => f1(t)(n)(N2(t)(n)(e))(w2(t)(n)(e)), J2 = (t) => (n) => (e) => {
  const r = e.endT <= e.startT ? 1 : (n - e.startT) / (e.endT - e.startT), o = Dr(e.easing)(hi(0)(1)(r));
  if (e.interp === "LinearLerp")
    return {
      center: { x: e.fromCam.center.x + (e.toCam.center.x - e.fromCam.center.x) * o, y: e.fromCam.center.y + (e.toCam.center.y - e.fromCam.center.y) * o },
      zoom: e.fromCam.zoom + (e.toCam.zoom - e.fromCam.zoom) * o
    };
  if (e.interp === "LogLerp")
    return f1(e.fromCam)(e.toCam)(o)(o);
  if (e.interp === "StagedLogLerp")
    return T2(e.fromCam)(e.toCam)(r);
  f();
}, b2 = { widthPx: 0, heightPx: 0 }, hc = {
  padding: 24,
  easing: Uf,
  minimumReadableLabelPx: 24,
  minimumVisibleLabelPx: 5,
  labelBasePx: 11,
  panSpeed: 1500,
  zoomSpeed: 4,
  minTransition: 0.15,
  maxTransition: 0.6,
  cameraDecay: 6
}, zi = (t) => (n) => (e) => (r) => (o) => {
  const i = h2(e)(r), s = o.x - t.padding, u = o.y - t.padding;
  return s >= i.x && u >= i.y && s + o.w + t.padding * 2 <= i.x + i.w && u + o.h + t.padding * 2 <= i.y + i.h;
}, k2 = (t) => (n) => (e) => (r) => (o) => Df.foldlWithIndex((i) => (s) => (u) => {
  const c = (() => {
    if (u.kind === "Hold") {
      const a = (() => {
        if (u.focus.tag === "Just") {
          if (u.intent === "ActionFocus" && zi(t)(n)(e)({ center: s.prev.center, zoom: u.toCam.zoom })(u.focus._1))
            return { ...u.toCam, center: s.prev.center };
          if (u.intent === "ActionFocus")
            return u.toCam;
          if (zi(t)(n)(e)(s.prev)(u.focus._1))
            return s.prev;
          if (zi(t)(n)(e)({ center: s.prev.center, zoom: u.toCam.zoom })(u.focus._1))
            return { ...u.toCam, center: s.prev.center };
        }
        return u.toCam;
      })();
      return { startT: u.startT, endT: u.endT, fromCam: a, toCam: a, easing: u.easing, interp: hu, focus: u.focus, intent: u.intent };
    }
    if (u.kind === "Gap")
      return {
        startT: u.startT,
        endT: u.endT,
        fromCam: s.prev,
        toCam: (() => {
          const a = i + 1 | 0, l = Co(jt, x, (d) => d.kind === "Hold", a < 1 ? o : Ct(a, o.length, o));
          if (l.tag === "Just") {
            const d = (i + 1 | 0) + l._1 | 0;
            return d >= 0 && d < o.length ? (() => {
              if (o[d].focus.tag === "Just")
                return zi(t)(n)(e)(s.prev)(o[d].focus._1);
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
        interp: hu,
        focus: x,
        intent: u.intent
      };
    f();
  })();
  return { acc: Et(s.acc)(c), prev: c.toCam };
})({ acc: [], prev: r })(o).acc, L2 = (t) => (n) => (e) => (r) => (o) => {
  const i = (u, c) => a1(p2(t)(u.toCam)(c.toCam))(u.endT - u.startT), s = w((u) => (c) => {
    if (u.pending.tag === "Nothing")
      return { acc: u.acc, pending: J("Just", c) };
    if (u.pending.tag === "Just")
      return !(c.fromCam.zoom === c.toCam.zoom && c.fromCam.center.x === c.toCam.center.x && c.fromCam.center.y === c.toCam.center.y) || (() => {
        if (c.focus.tag === "Just")
          return zi(t)(n)(e)(u.pending._1.toCam)(c.focus._1);
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
      })() || i(u.pending._1, c) <= 0 ? { acc: Et(u.acc)(u.pending._1), pending: J("Just", c) } : {
        acc: Et(Et(u.acc)({ ...u.pending._1, endT: c.startT - i(u.pending._1, c) }))({
          startT: c.startT - i(u.pending._1, c),
          endT: c.startT,
          fromCam: u.pending._1.toCam,
          toCam: c.toCam,
          easing: c.easing,
          interp: hu,
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
    return Et(s.acc)(s.pending._1);
  f();
}, S2 = (t) => (n) => (e) => {
  const r = n.w + e * 2, o = n.h + e * 2, i = Gn(t);
  return r <= 0 || o <= 0 || i.w <= 0 || i.h <= 0 ? 1 : a1(i.w / r)(i.h / o);
}, C2 = (t) => (n) => {
  if (t.tag === "Just") {
    if (n.tag === "Just")
      return J("Just", No([t._1, n._1]));
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
}, E2 = /* @__PURE__ */ w((t) => (n) => {
  const e = t.length - 1 | 0, r = e >= 0 && e < t.length ? J("Just", t[e]) : x;
  return r.tag === "Just" && r._1.fromCam.zoom === r._1.toCam.zoom && r._1.fromCam.center.x === r._1.toCam.center.x && r._1.fromCam.center.y === r._1.toCam.center.y && n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y && (!(r._1.intent === "ActionFocus" || n.intent === "ActionFocus") || (r._1.intent === "Overview" ? n.intent === "Overview" : r._1.intent === "DiveHome" ? n.intent === "DiveHome" : r._1.intent === "DiveTransition" ? n.intent === "DiveTransition" : r._1.intent === "ActionFocus" && n.intent === "ActionFocus") && v2(r._1.focus)(n.focus)) && (() => {
    const o = r._1.toCam.center.x - n.toCam.center.x;
    return (o < 0 ? -o < 8 : o < 8) && (() => {
      const i = r._1.toCam.center.y - n.toCam.center.y;
      return (i < 0 ? -i < 8 : i < 8) && (() => {
        const s = r._1.toCam.zoom - n.toCam.zoom;
        return s < 0 ? -s < 0.08 : s < 0.08;
      })();
    })();
  })() ? Et((() => {
    const o = t.length - 1 | 0;
    return o < 1 ? [] : Ct(0, o, t);
  })())({ ...r._1, endT: n.endT, focus: C2(r._1.focus)(n.focus) }) : Et(t)(n);
})([]), A2 = (t) => {
  const n = Ht((e) => (r) => a2(k(
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
}, pu = (t) => (n) => (e) => (r) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: _r(r)(S2(n)(e)(t.padding)) }), P2 = (t) => (n) => (e) => (r) => (o) => {
  const i = pu(t)(e)(Gn(e))(0), s = lt(
    (c) => c >= 0 && c <= r,
    $2(Ht(ot.compare)([0, r, ...vt(o)((c) => [c.startT, c.endT])]))
  ), u = (c, a) => he((l) => l.priority >= 1, lt((l) => l.startT <= a && a < l.endT, o)) ? Q$(t)(n)(e)(No(c)).camera : pu(t)(e)(No(c))(0);
  return D(m2)(L2(t)(n)(e)(i)(E2(k2(t)(n)(e)(i)(xt((c) => {
    const a = (c._1 + c._2) / 2;
    if (c._2 <= c._1)
      return x;
    const l = D((d) => d.bbox)(lt(
      (d) => d.priority === w(f2)(0)(D((_) => _.priority)(lt(
        (_) => _.startT <= a && a < _.endT,
        o
      ))),
      lt((d) => d.startT <= a && a < d.endT, o)
    ));
    return l.length === 0 ? J(
      "Just",
      { kind: g2, startT: c._1, endT: c._2, fromCam: i, toCam: i, easing: t.easing, focus: x, intent: Aa }
    ) : J(
      "Just",
      {
        kind: l2,
        startT: c._1,
        endT: c._2,
        fromCam: u(l, a),
        toCam: u(l, a),
        easing: t.easing,
        focus: J("Just", No(l)),
        intent: he((d) => d.priority >= 1, lt((d) => d.startT <= a && a < d.endT, o)) ? _2 : Aa
      }
    );
  })(Fn(re, s, Ct(1, s.length, s)))))));
}, Vf = (t) => (n) => (e) => (r) => {
  const o = A2(lt((i) => r >= i.startT && r < i.endT, e));
  if (o.tag === "Just")
    return { camera: J2()(r)(o._1), intent: o._1.intent };
  if (o.tag === "Nothing") {
    const i = e.length - 1 | 0;
    return i >= 0 && i < e.length && r >= e[i].endT ? { camera: e[i].toCam, intent: e[i].intent } : {
      camera: (() => {
        const s = pu(t)(n)(Gn(n))(0);
        return 0 < e.length ? e[0].fromCam : s;
      })(),
      intent: 0 < e.length ? e[0].intent : Aa
    };
  }
  f();
};
function fr(t) {
  return t.charCodeAt(0);
}
function Mf(t) {
  return String.fromCharCode(t);
}
const R2 = (t) => t >= 0 && t <= 65535 ? J("Just", Mf(t)) : x, qe = function(t) {
  return function(n) {
    return function(e) {
      return e.replace(new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), n);
    };
  };
}, Ns = function(t) {
  return function(n) {
    return n.split(t);
  };
}, pc = function(t) {
  return t.trim();
}, Qr = function(t) {
  return function(n) {
    return n.join(t);
  };
};
var F2 = typeof Array.from == "function", G2 = typeof Symbol < "u" && Symbol != null && typeof Symbol.iterator < "u" && typeof String.prototype[Symbol.iterator] == "function", I2 = typeof String.prototype.fromCodePoint == "function", B2 = typeof String.prototype.codePointAt == "function";
const H2 = function(t) {
  return B2 ? function(n) {
    return n.codePointAt(0);
  } : t;
}, D2 = function(t) {
  return I2 ? String.fromCodePoint : t;
}, z2 = function(t) {
  return function(n) {
    return G2 ? function(e) {
      for (var r = "", o = e[Symbol.iterator](), i = 0; i < n; ++i) {
        var s = o.next();
        if (s.done) return r;
        r += s.value;
      }
      return r;
    } : t(n);
  };
}, Q2 = function(t) {
  return function(n) {
    return F2 ? function(e) {
      return Array.from(e, n);
    } : t;
  };
}, mc = (t) => {
  const n = je(t);
  if (n === 0)
    return x;
  if (n === 1)
    return J("Just", { head: fr(Oi(0)(t)), tail: "" });
  const e = fr(Oi(1)(t)), r = fr(Oi(0)(t));
  return 55296 <= r && r <= 56319 && 56320 <= e && e <= 57343 ? J("Just", { head: (((r - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0, tail: di(2)(t) }) : J("Just", { head: r, tail: di(1)(t) });
}, q2 = (t) => {
  const n = mc(t);
  return n.tag === "Just" ? J("Just", k(n._1.head, n._1.tail)) : x;
}, W2 = (t) => me.unfoldr(q2)(t), O2 = (t) => {
  const n = fr(Oi(0)(t));
  if (55296 <= n && n <= 56319 && je(t) > 1) {
    const e = fr(Oi(1)(t));
    if (56320 <= e && e <= 57343)
      return (((n - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0;
  }
  return n;
}, g1 = /* @__PURE__ */ H2(O2), $c = /* @__PURE__ */ Q2(W2)(g1), Vc = (t) => Ji(t >= 0 && t <= 65535 ? Mf(t) : t < 0 ? "\0" : "\uffff"), X2 = (t) => t <= 65535 ? Vc(t) : Vc(Qe(t - 65536 | 0, 1024) + 55296 | 0) + Vc(Gr(t - 65536 | 0)(1024) + 56320 | 0), Y2 = /* @__PURE__ */ D2(X2), d1 = (t) => (n) => {
  if (t < 1)
    return "";
  const e = mc(n);
  return e.tag === "Just" ? Y2(e._1.head) + d1(t - 1 | 0)(e._1.tail) : n;
}, In = /* @__PURE__ */ z2(d1), U2 = (t) => (n) => n === "" ? x : J("Just", g1(n)), V2 = (t) => t, _1 = (t) => (n) => {
  const e = n.vw / n.vh, r = n.vh * t, o = { ...n, vx: n.vx - (r - n.vw) / 2, vw: r }, i = n.vw / t, s = { ...n, vy: n.vy - (i - n.vh) / 2, vh: i };
  return t <= 0 || n.vw <= 0 || n.vh <= 0 ? n : t > e ? o : t < e ? s : n;
}, Kf = (t) => (n) => t.width <= 0 || t.height <= 0 ? n : _1(t.width / t.height)(n), mu = (t, n, e) => ({ tag: t, _1: n, _2: e }), M2 = () => ({ tag: "ExtendFromSource" }), $u = (t, n) => ({ tag: t, _1: n }), jf = (t) => t, yu = (t, n) => ({ tag: t, _1: n }), Mc = /* @__PURE__ */ yu("NotYet"), Nl = /* @__PURE__ */ yu("Consumed"), K2 = /* @__PURE__ */ jf("FromSource"), Tl = /* @__PURE__ */ jf("FromTarget"), j2 = /* @__PURE__ */ jf("FromBoth"), Kc = /* @__PURE__ */ $u("Hidden"), Z2 = /* @__PURE__ */ $u("Visible"), h1 = /* @__PURE__ */ M2(), jc = /* @__PURE__ */ mu("Retracted"), ty = /* @__PURE__ */ mu("Extended"), p1 = (t) => t, Pa = (t, n) => ({ tag: t, _1: n }), Or = (t, n, e) => ({ tag: t, _1: n, _2: e }), m1 = (t) => t, Vr = (t, n) => ({ tag: t, _1: n }), Mo = (t, n, e, r, o, i, s, u, c) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s, _7: u, _8: c }), yc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Ze = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, $1 = /* @__PURE__ */ mn(F)(Xt), Ra = /* @__PURE__ */ ec(Ni), Ko = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, ns = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Zf = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Jl = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, y1 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Wo = /* @__PURE__ */ (() => {
  const t = me.unfoldr((n) => {
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
        return e(r._5, Zt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Qt);
  })());
})(), ny = /* @__PURE__ */ w((t) => (n) => K(F)(n)()(t))(B), Fa = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Hs = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, ey = (t) => t, ry = /* @__PURE__ */ Vr("NoKeyframes"), oy = (t) => Vr("DuplicateEventId", t), iy = (t) => Vr("UnknownEvent", t), v1 = /* @__PURE__ */ m1("PlopIn"), sy = /* @__PURE__ */ m1("PlopOut"), uy = /* @__PURE__ */ p1("DiveIn"), cy = /* @__PURE__ */ p1("DiveOut"), ay = (t) => (n) => (e) => xt((r) => {
  if (r.target.tag === "NodeWindow" || r.target.tag === "EdgeWindow")
    return x;
  if (r.target.tag === "TokenWindow")
    return J("Just", { startT: r.startT, endT: r.endT, bbox: s1(n)(e)(r.target._2), priority: 1 });
  if (r.target.tag === "FillWindow")
    return J(
      "Just",
      {
        startT: r.startT,
        endT: r.endT,
        bbox: Yf(n)(e)(nn(
          "Node",
          1,
          1,
          r.target._2,
          void 0,
          B,
          B
        )),
        priority: 1
      }
    );
  f();
}), fy = (t) => (n) => (e) => (r) => {
  const o = yc(r.edge)(n.edges), i = (() => {
    if (o.tag === "Nothing")
      return 0;
    if (o.tag === "Just")
      return gc(o._1);
    f();
  })(), s = Ze(t.minTokenDuration)(Ze(U(w((u) => (c) => u + $c(c).length | 0)(0)(r.labels)) * t.tokenReadSecPerChar)(t.tokenSpeed <= 0 ? 0 : i / t.tokenSpeed)) + e.pre + e.post;
  return { duration: s, holdPre: s <= 0 ? 0 : e.pre / s, holdPost: s <= 0 ? 0 : e.post / s };
}, ly = (t) => (n) => $1(xt((e) => {
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
              return he(
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
              return he(
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
})(n)), gy = (t) => {
  if (t.event.kind.tag === "SendToken")
    return J(
      "Just",
      {
        startT: t.startT,
        endT: t.endT,
        target: Mo(
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
    return J("Just", { startT: t.startT, endT: t.endT, target: Mo("FillWindow", t.event.id, t.event.kind._1.node, t.event.kind._1.labels) });
  f();
}, dy = (t) => (n) => (e) => (r) => {
  const o = un((i) => Ra(i.path)(n) && (dr(i.endT - e) < 1e-4 || dr(i.startT - r) < 1e-4))(t.segments);
  if (o.tag === "Just")
    return J("Just", o._1);
  if (o.tag === "Nothing")
    return un((i) => Ra(i.path)(n))(t.segments);
  f();
}, _y = (t) => (n) => (e) => xt((r) => {
  const o = xt((i) => Zf(i)(t.nodes))(Ot(
    xe.foldr,
    (() => {
      if (r.scene.tag === "Structural")
        return Zn(
          F.compare,
          jn,
          (() => {
            const i = Ko(r.scene._1.from)(e);
            if (i.tag === "Nothing")
              return B;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })(),
          (() => {
            const i = Ko(r.scene._1.to)(e);
            if (i.tag === "Nothing")
              return B;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })()
        );
      if (r.scene.tag === "DataFlow") {
        const i = Ko(r.scene._1.keyframe)(e);
        if (i.tag === "Nothing")
          return B;
        if (i.tag === "Just")
          return i._1.nodes;
        f();
      }
      if (r.scene.tag === "Hold") {
        const i = Ko(r.scene._1)(e);
        if (i.tag === "Nothing")
          return B;
        if (i.tag === "Just")
          return i._1.nodes;
        f();
      }
      if (r.scene.tag === "EnterNode" || r.scene.tag === "ExitNode")
        return B;
      f();
    })()
  ));
  return o.length === 0 ? x : J(
    "Just",
    {
      startT: r.startT,
      endT: r.endT,
      bbox: (() => {
        const i = w((s) => (u) => ({ minX: ns(s.minX)(u.x), minY: ns(s.minY)(u.y), maxX: Ze(s.maxX)(u.x + u.w), maxY: Ze(s.maxY)(u.y + u.h) }))(0 < o.length ? { minX: o[0].x, minY: o[0].y, maxX: o[0].x + o[0].w, maxY: o[0].y + o[0].h } : { minX: 0, minY: 0, maxX: 0, maxY: 0 })(Ct(1, o.length, o));
        return { x: i.minX, y: i.minY, w: i.maxX - i.minX, h: i.maxY - i.minY };
      })(),
      priority: 0
    }
  );
}), hy = (t) => (n) => (e) => (r) => (o) => [
  ..._y(o.layout)(e)(n)(lt((i) => i.startT >= o.startT && i.endT <= o.endT, r.spans)),
  ...ay()(o.layout)(e)(o.windows)
], py = (t) => (n) => (e) => (r) => (o) => (i) => P2(t)(n)(i.layout)(o.endT)(hy()(e)(r)(o)(i)), bl = /* @__PURE__ */ (() => {
  const t = w((n) => (e) => {
    const r = n.previous.tag === "Just" && dr(n.previous._1.endT - e.startT) < 1e-4 && !(e.fromCam.zoom === e.toCam.zoom && e.fromCam.center.x === e.toCam.center.x && e.fromCam.center.y === e.toCam.center.y) ? { ...e, fromCam: n.previous._1.toCam } : e;
    return { previous: J("Just", r), spans: Et(n.spans)(r) };
  })({ previous: x, spans: [] });
  return (n) => t(n).spans;
})(), my = (t) => (n) => (e) => {
  const r = yc(e)(t);
  if (r.tag === "Nothing")
    return Tl;
  if (r.tag === "Just") {
    const o = Jl(r._1.target)(n);
    return Jl(r._1.source)(n) ? o ? j2 : K2 : Tl;
  }
  f();
}, $y = (t) => (n) => {
  const e = Gn(n), r = Kf({ width: t.widthPx, height: t.heightPx })({
    vx: e.x,
    vy: e.y,
    vw: e.w,
    vh: e.h
  });
  return { w: r.vw, h: r.vh };
}, yy = (t) => (n) => (e) => (r) => {
  const o = Ze(e.center.x - r.x)(r.x + r.w - e.center.x), i = Ze(e.center.y - r.y)(r.y + r.h - e.center.y), s = $y(t)(n);
  return ns(o <= 0 ? e.zoom : s.w / (o * 2))(i <= 0 ? e.zoom : s.h / (i * 2));
}, vy = { pre: 0, post: 0 }, xy = (t) => (n) => (e) => (r) => (o) => {
  const i = y1(o.event.id)(e), s = (() => {
    if (i.tag === "Nothing")
      return vy;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = (() => {
    if (o.event.when.tag === "First")
      return 0;
    if (o.event.when.tag === "At")
      return o.event.when._1;
    if (o.event.when.tag === "After") {
      const a = o.event.when._1, l = un((d) => d.event.id === a)(r);
      if (l.tag === "Nothing")
        return 0;
      if (l.tag === "Just")
        return l._1.endT;
      f();
    }
    if (o.event.when.tag === "With") {
      const a = o.event.when._1, l = un((d) => d.event.id === a)(r);
      if (l.tag === "Nothing")
        return 0;
      if (l.tag === "Just")
        return l._1.startT;
    }
    f();
  })(), c = (() => {
    if (o.event.kind.tag === "SendToken")
      return fy(t)(n)(s)(o.event.kind._1);
    if (o.event.kind.tag === "FillNodeWithoutTransition")
      return { duration: t.plop, holdPre: 0, holdPost: 0 };
    f();
  })();
  return Et(r)({ startT: u, endT: u + c.duration, event: o.event, holdPre: c.holdPre, holdPost: c.holdPost });
}, x1 = (t) => (n) => (e) => w(xy(t)(n)(ly(t)(e)))([])(qt((r) => (o) => ({ event: o }))(e)), t0 = (t) => (n) => (e) => (r) => (o) => {
  const i = { width: n.widthPx, height: n.heightPx }, s = Kf(i)((() => {
    const u = ws(e)(o);
    return { vx: u.x, vy: u.y, vw: u.w, vh: u.h };
  })());
  return t.labelBasePx * r.placement.scale * (i.width <= 0 || s.vw <= 0 ? 0 : i.width / s.vw);
}, wy = (t) => (n) => (e) => (r) => (o) => {
  const i = t0(t)(n)(e)(r)(o);
  return i <= t.minimumReadableLabelPx ? o : { ...o, zoom: o.zoom * t.minimumReadableLabelPx / i };
}, Ny = (t) => (n) => {
  const e = Zf(n)(t.interiors);
  if (e.tag === "Nothing")
    return t;
  if (e.tag === "Just")
    return e._1;
  f();
}, Ty = (t) => (n) => (e) => (r) => ({
  ...r,
  fromCam: wl(t)(n)(e)(r.fromCam),
  toCam: wl(t)(n)(e)(r.toCam)
}), Jy = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (o.tag === "Nothing")
    return i.zoom;
  if (o.tag === "Just")
    return Ze(0)(yy(n)(e)(i)((() => {
      const s = t.padding * r.placement.scale;
      return { x: o._1.x - s, y: o._1.y - s, w: o._1.w + s * 2, h: o._1.h + s * 2 };
    })()));
  f();
}, by = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = t0(t)(n)(e)(r)(i);
  return s <= 0 ? i : { ...i, zoom: ns(i.zoom * t.minimumReadableLabelPx / s)(Jy(t)(n)(e)(r)(o)(i)) };
}, ky = (t) => {
  if (t.when.tag === "First")
    return [];
  if (t.when.tag === "At")
    return [];
  if (t.when.tag === "After")
    return [t.when._1];
  if (t.when.tag === "With")
    return [t.when._1];
  f();
}, kl = { id: "", nodes: B, edges: B, kind: xs }, Ly = (t) => (n) => M$((() => {
  const e = Ko(n.from)(t);
  if (e.tag === "Nothing")
    return kl;
  if (e.tag === "Just")
    return e._1;
  f();
})())((() => {
  const e = Ko(n.to)(t);
  if (e.tag === "Nothing")
    return kl;
  if (e.tag === "Just")
    return e._1;
  f();
})()), Sy = (t) => (n) => {
  const e = Zf(n)(t.interiors);
  if (e.tag === "Nothing")
    return { layout: t.layout, interiors: B };
  if (e.tag === "Just")
    return e._1;
  f();
}, Zc = (t) => (n) => (e) => (r) => {
  const o = yc(r)(e.edges);
  if (o.tag === "Just")
    return t <= 0 ? n : Ze(n)(gc(o._1) / t);
  if (o.tag === "Nothing")
    return n;
  f();
}, w1 = (t) => (n) => (e) => (r) => (o) => {
  const i = t.plop, s = Ly(e)(o), u = D((g) => ({
    startT: 0,
    endT: 0 + Zc(t.edgeSpeed)(t.minEdgeDuration)(n)(g),
    target: Mo("EdgeWindow", g, Pa("Extend", h1))
  }))(Wo(s.entering.edges)), c = D((g) => ({ startT: 0, endT: i, target: Mo("NodeWindow", g, v1) }))(Wo(s.entering.nodes)), a = w(Ze)(0)(D((g) => Zc(t.edgeSpeed)(t.minEdgeDuration)(n)(g))(Wo(s.leaving.edges))), l = (g) => he(
    (h) => {
      const m = yc(h)(r);
      if (m.tag === "Just")
        return m._1.source === g || m._1.target === g;
      if (m.tag === "Nothing")
        return !1;
      f();
    },
    Wo(s.leaving.edges)
  ) ? a : 0, d = D((g) => ({ startT: l(g), endT: l(g) + t.plop, target: Mo("NodeWindow", g, sy) }))(Wo(s.leaving.nodes)), _ = D((g) => ({
    startT: 0,
    endT: Zc(t.edgeSpeed)(t.minEdgeDuration)(n)(g),
    target: Mo("EdgeWindow", g, Pa("Retract", my(r)(s.leaving.nodes)(g)))
  }))(Wo(s.leaving.edges));
  return {
    duration: (() => {
      const g = Ht(ot.compare)([
        ...D((m) => m.endT)(_),
        ...D((m) => m.endT)(d),
        ...D((m) => m.endT)(c),
        ...D((m) => m.endT)(u)
      ]), h = g.length - 1 | 0;
      return h >= 0 && h < g.length ? g[h] + t.gap : t.gap;
    })(),
    windows: [..._, ...d, ...c, ...u]
  };
}, Cy = (t) => (n) => (e) => (r) => (o) => (i) => D((() => {
  const s = o.startT;
  return (u) => ({ ...u, startT: u.startT + s, endT: u.endT + s });
})())(w1(t)(n)(e)(r)(i).windows), Ey = (t) => xt((n) => Ot(ui, n).length > 1 ? J(
  "Just",
  (() => {
    const e = Dt(
      (r) => x,
      (r) => (o) => J("Just", { head: r, tail: o }),
      Ot(ui, n)
    );
    if (e.tag === "Just")
      return e._1.head;
    if (e.tag === "Nothing")
      return "";
    f();
  })()
) : x)(bm(Ni)(Ht(F.compare)(t))), Ay = (t) => {
  const n = D((r) => r.id)(t), e = ny(n);
  return [
    ...D(oy)(Ey(n)),
    ...D(iy)(lt((r) => !Fa(r)(e), vt(t)(ky)))
  ];
}, Py = (t) => {
  const n = $1(D((r) => k(
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
    if (Fa(i)(o))
      return [Vr("ScheduleCycle", [...Ot(xe.foldr, o), i])];
    if (Fa(i)(r))
      return [];
    const s = y1(i)(n);
    if (s.tag === "Nothing")
      return [];
    if (s.tag === "Just")
      return vt(s._1)(e(K(F)(i)()(r))(K(F)(i)()(o)));
    f();
  };
  return vt(t)((r) => e(B)(B)(r.id));
}, n0 = {
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
  nodeEasing: u2,
  edgeEasing: s2,
  tokenEasing: Uf,
  diveDur: 1.2,
  retreatDur: 1.2
}, Ry = (t) => (n) => (e) => (r) => D((() => {
  const o = e.startT;
  return (i) => ({ ...i, startT: i.startT + o, endT: i.endT + o });
})())(xt(gy)(x1(t)(n)(r.events))), Fy = (t) => (n) => (e) => (r) => (o) => {
  if (o.scene.tag === "Structural")
    return Cy(t)(n)(e)(r)(o)(o.scene._1);
  if (o.scene.tag === "Hold")
    return [];
  if (o.scene.tag === "DataFlow")
    return Ry(t)(n)(o)(o.scene._1);
  if (o.scene.tag === "EnterNode")
    return [];
  if (o.scene.tag === "ExitNode")
    return [];
  f();
}, Gy = (t) => (n) => (e) => {
  const r = x1(t)(n)(e.events);
  return r.length === 0 ? t.gap : w(Ze)(0)(D((o) => o.endT)(r)) + t.gap;
}, Iy = (t) => (n) => (e) => (r) => (o) => {
  if (o.tag === "Structural")
    return w1(t)(n)(e)(r)(o._1).duration;
  if (o.tag === "Hold")
    return t.stillHold;
  if (o.tag === "DataFlow")
    return Gy(t)(n)(o._1);
  if (o.tag === "EnterNode" || o.tag === "ExitNode")
    return 0;
  f();
}, N1 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = B$(n)(r), u = e.layout, c = r1(D((m) => k(m.id, m))(o.keyframes)), a = 0 < o.keyframes.length ? J("Just", o.keyframes[0]) : x, l = (() => {
    if (a.tag === "Just")
      return a._1.id;
    if (a.tag === "Nothing")
      return "";
    f();
  })(), d = o2(o), _ = (m) => ({
    segments: m.runSpans.length === 0 ? m.segments : Et(m.segments)({
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
  }), g = w((m) => (p) => {
    if (p.tag === "EnterNode") {
      const N = _(m), T = m.t + t.diveDur, b = Et(r)(p._1), L = N1(t)(n)(Sy(e)(p._1))(b)(Ny(o)(p._1))(T), E = L.endT + t.retreatDur;
      return {
        ...m,
        t: E,
        runStart: E,
        runSpans: [],
        runWindows: [],
        segments: [...N.segments, ...L.segments],
        spans: [...N.spans, ...L.spans],
        windows: [...N.windows, ...L.windows],
        dives: [
          ...N.dives,
          { startT: m.t, endT: T, node: p._1, parentPath: r, childPath: b, direction: uy },
          ...L.dives,
          { startT: L.endT, endT: E, node: p._1, parentPath: r, childPath: b, direction: cy }
        ]
      };
    }
    if (p.tag === "ExitNode")
      return m;
    const $ = m.t + Iy(t)(u)(c)(d)(p), y = { startT: m.t, endT: $, scene: p }, v = Fy(t)(u)(c)(d)(y);
    return {
      ...m,
      t: $,
      runSpans: Et(m.runSpans)(y),
      runWindows: [...m.runWindows, ...v],
      spans: Et(m.spans)(y),
      windows: [...m.windows, ...v]
    };
  })({ t: i, runStart: i, runSpans: [], runWindows: [], segments: [], spans: [], windows: [], dives: [] })(o.scenes), h = _(g);
  return {
    endT: g.t,
    spans: h.spans,
    windows: Ht((m) => (p) => ot.compare(m.startT)(p.startT))(h.windows),
    segments: h.segments,
    dives: h.dives
  };
}, By = (t) => (n) => (e) => e.endT <= t || e.startT >= n ? x : J("Just", { ...e, startT: Ze(t)(e.startT), endT: ns(n)(e.endT) }), Ga = (t) => (n) => (e) => (r) => (o) => (i) => xt(By(i.startT)(i.endT))(D(Ty(e)(i.layout)(i.placement))(py(t)(n)(r)(i.edgeEndpoints)(o)(i))), e0 = (t) => (n) => (e) => (r) => q$(t)(n)(e)(r.layout)(r.placement)((() => {
  if (r.layout.nodes.tag === "Leaf")
    return 0;
  if (r.layout.nodes.tag === "Node")
    return r.layout.nodes._2;
  f();
})()).camera, Hy = (t) => (n) => (e) => (r) => r.placement.scale === 1 && r.placement.tx === 0 && r.placement.ty === 0 ? x2(r.placement)(pu(t)(r.layout)(Gn(r.layout))(0)) : e0(t)(n)(e)(r), T1 = (t) => (n) => (e) => (r) => (o) => {
  const i = ws(e)(o);
  return (() => {
    const s = Gn(r.layout), u = s.x * r.placement.scale + r.placement.tx, c = s.y * r.placement.scale + r.placement.ty;
    return u >= i.x && c >= i.y && u + s.w * r.placement.scale <= i.x + i.w && c + s.h * r.placement.scale <= i.y + i.h;
  })() && t0(t)(n)(e)(r)(o) >= t.minimumReadableLabelPx;
}, ta = (t) => (n) => (e) => (r) => (o) => (i) => T1(t)(n)(e)(r)(i) ? i : by(t)(n)(e)(r)(o)(i), Dy = (t) => (n) => {
  if (n.tag === "Structural")
    return xt((e) => e)([
      Hs(n._1.from)(t) ? x : J("Just", Vr("UnknownKeyframe", n._1.from)),
      Hs(n._1.to)(t) ? x : J("Just", Vr("UnknownKeyframe", n._1.to))
    ]);
  if (n.tag === "Hold")
    return xt((e) => e)([Hs(n._1)(t) ? x : J("Just", Vr("UnknownKeyframe", n._1))]);
  if (n.tag === "DataFlow")
    return [
      ...xt((e) => e)([Hs(n._1.keyframe)(t) ? x : J("Just", Vr("UnknownKeyframe", n._1.keyframe))]),
      ...Ay(n._1.events),
      ...Py(n._1.events)
    ];
  if (n.tag === "EnterNode")
    return [];
  if (n.tag === "ExitNode")
    return [];
  f();
}, zy = (t) => (n) => {
  const e = vt(n)(Dy(t));
  return e.length === 0 ? Nt("Right", void 0) : Nt("Left", e);
}, na = (t) => (n) => (e) => (r) => (o) => (i) => T1(t)(n)(e)(r)(o) ? o : wy(t)(n)(e)(r)(i), Qy = (t) => (n) => {
  const e = Dt((r) => x, (r) => (o) => J("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ ...e._1.head, fromCam: t }, ...e._1.tail];
  f();
}, qy = (t) => (n) => {
  const e = n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y ? (n.startT + n.endT) / 2 : n.endT + 1e-4, r = xt((o) => o.target.tag === "TokenWindow" ? J("Just", s1(t.layout)(t.edgeEndpoints)(o.target._2)) : o.target.tag === "FillWindow" ? J(
    "Just",
    Yf(t.layout)(t.edgeEndpoints)(nn(
      "Node",
      1,
      1,
      o.target._2,
      void 0,
      B,
      B
    ))
  ) : x)(lt((o) => o.startT <= e && e < o.endT, t.windows));
  return r.length === 0 ? x : J(
    "Just",
    (() => {
      const o = No(r);
      return { x: o.x * t.placement.scale + t.placement.tx, y: o.y * t.placement.scale + t.placement.ty, w: o.w * t.placement.scale, h: o.h * t.placement.scale };
    })()
  );
}, J1 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = o(i.fromCam), u = o(i.toCam), c = qy(r)(i);
  return s.zoom === u.zoom && s.center.x === u.center.x && s.center.y === u.center.y ? {
    ...i,
    fromCam: ta(t)(n)(e)(r)(c)(s),
    toCam: ta(t)(n)(e)(r)(c)(u)
  } : { ...i, fromCam: s, toCam: ta(t)(n)(e)(r)(c)(u) };
}, b1 = (t) => (n) => (e) => (r) => (o) => (i) => i.intent === "ActionFocus" ? J1(t)(n)(e)(r)(na(t)(n)(e)(r)(o))(i) : {
  ...i,
  fromCam: na(t)(n)(e)(r)(o)(i.fromCam),
  toCam: na(t)(n)(e)(r)(o)(i.toCam)
}, k1 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = un((u) => u.intent === "ActionFocus" && dr(u.startT - r.startT) < 1e-4)(i);
  if (s.tag === "Just") {
    const u = b1(t)(n)(e)(r)(o)(s._1).toCam;
    return u.zoom < o.zoom ? { ...o, zoom: u.zoom } : o;
  }
  if (s.tag === "Nothing")
    return o;
  f();
}, Wy = (t) => (n) => (e) => (r) => (o) => k1(t)(n)(e)(r)(e0(t)(n)(e)(r))(o), Oy = (t) => (n) => (e) => (r) => (o) => xt((i) => {
  const s = dy(o)(i.parentPath)(i.startT)(i.endT);
  if (s.tag === "Just") {
    const u = i.childPath, c = un((a) => Ra(a.path)(u))(o.segments);
    if (c.tag === "Just") {
      const a = Hy(t)(n)(e)(s._1), l = Wy(t)(n)(e)(c._1)(Ga(t)(n)(e)(r)(o)(c._1));
      if (i.direction === "DiveIn")
        return J(
          "Just",
          {
            startT: i.startT,
            endT: i.endT,
            fromCam: a,
            toCam: l,
            easing: eo,
            interp: vl,
            intent: xl
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
            easing: eo,
            interp: vl,
            intent: xl
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
})(o.dives), Xy = (t) => (n) => (e) => (r) => (o) => o.intent === "ActionFocus" ? J1(t)(n)(e)(r)(ey)(o) : o, Yy = (t) => (n) => (e) => (r) => (o) => Ht((i) => (s) => ot.compare(i.startT)(s.startT))(vt(o.segments)((i) => {
  if (i.placement.scale === 1 && i.placement.tx === 0 && i.placement.ty === 0)
    return bl(D(Xy(t)(n)(e)(i))(Ga(t)(n)(e)(r)(o)(i)));
  const s = Ga(t)(n)(e)(r)(o)(i), u = e0(t)(n)(e)(i), c = k1(t)(n)(e)(i)(u)(s);
  return s.length === 0 ? [
    {
      startT: i.startT,
      endT: i.endT,
      fromCam: c,
      toCam: c,
      easing: Uf,
      interp: hu,
      intent: d2
    }
  ] : bl(Qy(c)(D(b1(t)(n)(e)(i)(u))(s)));
})), L1 = (t) => (n) => (e) => (r) => (o) => [
  ...Oy(t)(n)(e)(r)(o),
  ...Yy(t)(n)(e)(r)(o)
], r0 = (t) => (n) => (e) => (r) => {
  if (0 < e.keyframes.length) {
    const o = e.keyframes[0], i = r1(D((u) => k(u.id, u))(e.keyframes)), s = zy(i)(e.scenes);
    return (() => {
      if (s.tag === "Left") {
        const u = s._1;
        return (c) => Nt("Left", u);
      }
      if (s.tag === "Right") {
        const u = s._1;
        return (c) => c(u);
      }
      f();
    })()(() => {
      const u = N1(n)(r)(r)([])(e)(0);
      return Nt(
        "Right",
        {
          totalDuration: u.endT,
          windows: u.windows,
          spans: u.spans,
          keyframes: i,
          initialKeyframe: o.id,
          timing: n,
          layout: r.layout,
          cameraSpans: L1(t)(b2)(r.layout)(i)(u),
          cameraConfig: t,
          levelTree: r,
          segments: u.segments,
          dives: u.dives,
          seed: e.seed
        }
      );
    });
  }
  return Nt("Left", [ry]);
}, S1 = (t) => (n) => ({
  ...n,
  cameraSpans: L1(n.cameraConfig)(t)(n.layout)(n.keyframes)({
    endT: n.totalDuration,
    spans: n.spans,
    windows: n.windows,
    segments: n.segments,
    dives: n.dives
  })
}), o0 = (t) => t, C1 = /* @__PURE__ */ mn(F)(Xt), es = { eq: /* @__PURE__ */ ec(Ni) }, i0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Ar = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ll = Xt.foldMap(d$(F)), Uy = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Vy = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Xe);
  return (n) => t(de("IterNode", n, Oe));
})(), jo = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, My = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Ky = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, jy = /* @__PURE__ */ mn(F)(Xt), Zy = /* @__PURE__ */ mn(F)(Xt), tv = (t) => (n) => (e) => {
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
}, E1 = /* @__PURE__ */ o0("Backdrop"), nv = /* @__PURE__ */ o0("FlyThrough"), vu = /* @__PURE__ */ o0("Active"), ev = (t) => (n) => (e) => ({ ...e, state: { ...e.state, edgeFadeAlpha: C1(D((r) => k(r, n))(t)) } }), Sl = (t) => (n) => (e) => {
  const r = (t + n) / 2, o = e - r, i = o < 0 ? -1 : 1, s = (n - t) / 2, u = s * 0.15, c = s - u, a = o < 0 ? -o : o;
  return n <= t ? (t + n) / 2 : a <= c ? e : r + i * (s - u * ai(-(a - c) / u));
}, xu = (t) => (n) => (e) => {
  const r = un((o) => es.eq(o.path)(n) && e >= o.startT && e < o.endT)(t.segments);
  if (r.tag === "Just")
    return J("Just", r._1);
  if (r.tag === "Nothing")
    return un((o) => es.eq(o.path)(n))(t.segments);
  f();
}, rv = (t) => ({
  startT: 0,
  endT: t.totalDuration,
  path: [],
  layout: t.layout,
  placement: Wf,
  windows: t.windows,
  spans: t.spans,
  keyframes: t.keyframes,
  initialKeyframe: t.initialKeyframe,
  edgeEndpoints: B
}), ov = (t) => D((n) => n < 1 ? [] : Ct(0, n, t))(Ut(0, t.length - 1 | 0)), ea = (t) => (n) => {
  const e = i0(n)(t.keyframes);
  if (e.tag === "Nothing")
    return B;
  if (e.tag === "Just")
    return e._1.nodes;
  f();
}, ra = (t) => (n) => {
  const e = i0(n)(t.keyframes);
  if (e.tag === "Nothing")
    return B;
  if (e.tag === "Just")
    return e._1.edges;
  f();
}, vc = (t) => (n) => {
  if (n < t.startT)
    return Or("AtKeyframe", t.initialKeyframe);
  const e = un((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return Or("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return Or("AtKeyframe", e._1.scene._1.keyframe);
    if (e._1.scene.tag === "Hold")
      return Or("AtKeyframe", e._1.scene._1);
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode")
      return Or("AtKeyframe", t.initialKeyframe);
    f();
  }
  if (e.tag === "Nothing") {
    const r = t.spans.length - 1 | 0;
    return r >= 0 && r < t.spans.length ? Or(
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
    ) : Or("AtKeyframe", t.initialKeyframe);
  }
  f();
}, iv = /* @__PURE__ */ w((t) => (n) => {
  const e = Ke(t);
  return e.tag === "Just" && n.startT <= e._1.last.endT + 1e-6 ? Et(e._1.init)({ ...e._1.last, endT: Ar(e._1.last.endT)(n.endT), windows: Et(e._1.last.windows)(n) }) : Et(t)({ endT: n.endT, windows: [n] });
})([]), sv = (t) => (n) => (e) => Ll((r) => Ll((o) => o.target.tag === "FillWindow" ? o.startT <= e ? nn("Node", 1, 1, o.target._2, void 0, B, B) : B : o.target.tag === "TokenWindow" && o.startT + (o.endT - o.startT) * 0.25 <= e ? nn("Node", 1, 1, o.target._4, void 0, B, B) : B)(r.windows))(lt(
  (r) => e <= r.endT + t,
  iv(Ht((r) => (o) => ot.compare(r.startT)(o.startT))(lt(
    (r) => r.target.tag === "FillWindow" || r.target.tag === "TokenWindow",
    n
  )))
)), uv = (t) => (n) => (e) => he(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), cv = (t) => (n) => (e) => he((r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e, t), av = (t) => (n) => (e) => he((r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e, t), fv = (t) => (n) => (e) => he(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), lv = (t) => (n) => {
  const e = vc(t)(n);
  if (e.tag === "AtKeyframe")
    return In(3)(e._1) === "kf-" ? "" : e._1;
  if (e.tag === "InTransition")
    return In(3)(e._2) === "kf-" ? "" : e._2;
  f();
}, gv = (t) => (n) => {
  const e = vc(t)(n), r = i0((() => {
    if (e.tag === "AtKeyframe")
      return e._1;
    if (e.tag === "InTransition")
      return e._2;
    f();
  })())(t.keyframes);
  if (r.tag === "Just")
    return r._1.kind;
  if (r.tag === "Nothing")
    return xs;
  f();
}, A1 = (t) => (n) => (e) => un((r) => e(r) && n >= r.startT && n < r.endT)(t), dv = {
  nodes: B,
  edges: B,
  tokens: B,
  camera: { center: { x: 0, y: 0 }, zoom: 1 },
  frameTitle: "",
  staticKind: xs,
  visited: B,
  nodeFadeAlpha: B,
  nodeLabelFadeAlpha: B,
  edgeFadeAlpha: B,
  nodeInvert: B
}, _v = { nodes: B, edges: B, chipExtras: B, edgeLabels: B }, hv = {
  segment: {
    startT: 0,
    endT: 0,
    path: [],
    layout: _v,
    placement: Wf,
    windows: [],
    spans: [],
    keyframes: B,
    initialKeyframe: "",
    edgeEndpoints: B
  },
  state: dv,
  bgAlpha: 1,
  blur: 0,
  minis: [],
  role: vu
}, wu = (t) => {
  const n = t.levels.length - 1 | 0;
  return n >= 0 && n < t.levels.length ? t.levels[n] : hv;
}, pv = (t) => (n) => {
  const e = Uy(n)(t.nodes);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just") {
    const r = e._1, o = (i) => i.x >= r.x - 1 && i.x <= r.x + r.w + 1 && i.y >= r.y - 1 && i.y <= r.y + r.h + 1;
    return xt((i) => (() => {
      if (0 < i._2.length) {
        const u = i._2.length - 1 | 0;
        return o(i._2[0]) || u >= 0 && u < i._2.length && o(i._2[u]);
      }
      const s = i._2.length - 1 | 0;
      return s >= 0 && s < i._2.length && o(i._2[s]);
    })() ? J("Just", i._1) : x)(Vy(t.edges));
  }
  f();
}, mv = (t) => (n) => {
  const e = vc(t)(n);
  if (e.tag === "AtKeyframe")
    return ea(t)(e._1);
  if (e.tag === "InTransition")
    return Zn(F.compare, jn, ea(t)(e._1), ea(t)(e._2));
  f();
}, $v = (t) => (n) => {
  const e = vc(t)(n);
  if (e.tag === "AtKeyframe")
    return ra(t)(e._1);
  if (e.tag === "InTransition")
    return Zn(F.compare, jn, ra(t)(e._1), ra(t)(e._2));
  f();
}, yv = (t) => (n) => (e) => {
  const r = Gn(t), o = r.h / Ar(1e-4)(e.zoom), i = r.w / Ar(1e-4)(e.zoom);
  return {
    ...e,
    center: {
      x: i >= n.w ? n.x + n.w / 2 : Sl(n.x + i / 2)(n.x + n.w - i / 2)(e.center.x),
      y: o >= n.h ? n.y + n.h / 2 : Sl(n.y + o / 2)(n.y + n.h - o / 2)(e.center.y)
    }
  };
}, vv = (t) => (n) => (e) => yv(t)((() => {
  const r = n * e.placement.scale, o = Gn(e.layout), i = (() => {
    const s = o.x * e.placement.scale + e.placement.tx, u = o.y * e.placement.scale + e.placement.ty;
    return { x: s, y: u, w: (o.x + o.w) * e.placement.scale + e.placement.tx - s, h: (o.y + o.h) * e.placement.scale + e.placement.ty - u };
  })();
  return { x: i.x - r, y: i.y - r, w: i.w + r * 2, h: i.h + r * 2 };
})()), xv = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : Ar(0)(jo(1)((n - t.startT) / e));
}, Nu = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : Ar(0)(jo(1)((n - t.startT) / e));
}, wv = (t) => (n) => (e) => (r) => (o) => {
  const i = A1(n)(e)((s) => s.target.tag === "EdgeWindow" && s.target._1 === o);
  if (i.tag === "Just") {
    const s = Dr(t.timing.edgeEasing)(Nu(i._1)(e)), u = i._1.target.tag === "EdgeWindow" ? i._1.target._2 : Pa("Extend", h1);
    if (u.tag === "Retract")
      return mu("Retracting", u._1, s);
    if (u.tag === "Extend")
      return mu("Extending", u._1, s);
    f();
  }
  if (i.tag === "Nothing")
    return fv(n)(e)(o) || uv(n)(e)(o) ? jc : My(o)(r) ? ty : jc;
  f();
}, Nv = (t) => (n) => (e) => {
  const r = $v(n)(e);
  return C1(D((o) => k(o, wv(t)(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return B;
      if (i.tag === "Node")
        return nn("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return Ot(xe.foldr, o(n.layout.edges));
  })()));
}, Tv = (t) => (n) => (e) => (r) => {
  const o = A1(t)(n)((i) => i.target.tag === "NodeWindow" && i.target._1 === r);
  if (o.tag === "Just") {
    const i = Nu(o._1)(n), s = o._1.target.tag === "NodeWindow" ? o._1.target._2 : v1;
    if (s === "PlopIn")
      return $u("PloppingIn", i);
    if (s === "PlopOut")
      return $u("PloppingOut", i);
    f();
  }
  if (o.tag === "Nothing")
    return av(t)(n)(r) || cv(t)(n)(r) ? Kc : Ky(r)(e) ? Z2 : Kc;
  f();
}, Jv = (t) => (n) => (e) => {
  const r = mv(n)(e);
  return jy(D((o) => k(o, Tv(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return B;
      if (i.tag === "Node")
        return nn("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return Ot(xe.foldr, o(n.layout.nodes));
  })()));
}, bv = (t) => (n) => (e) => n.target.tag === "TokenWindow" ? k(
  n.target._1,
  e < n.startT ? Mc : e >= n.endT ? Nl : yu(
    "Travelling",
    {
      edge: n.target._2,
      direction: n.target._3,
      progress: Dr(t.timing.tokenEasing)(Nu(n)(e)),
      labels: n.target._6,
      source: n.target._4,
      target: n.target._5,
      holdPre: n.target._7,
      holdPost: n.target._8
    }
  )
) : n.target.tag === "FillWindow" ? k(
  n.target._1,
  e < n.startT ? Mc : e >= n.endT ? Nl : yu("Filling", { node: n.target._2, progress: Nu(n)(e), labels: n.target._3 })
) : k("", Mc), kv = (t) => (n) => (e) => Zy(D((r) => bv(t)(r)(e))(lt(
  (r) => r.target.tag === "TokenWindow" || r.target.tag === "FillWindow",
  n
))), Lv = (t) => (n) => (e) => ({
  nodes: Jv()(n)(e),
  edges: Nv(t)(n)(e),
  tokens: kv(t)(n.windows)(e),
  camera: Vf(t.cameraConfig)(n.layout)(t.cameraSpans)(e).camera,
  frameTitle: lv(n)(e),
  staticKind: gv(n)(e),
  visited: sv(t.timing.hatchHold)(n.windows)(e),
  nodeFadeAlpha: B,
  nodeLabelFadeAlpha: B,
  edgeFadeAlpha: B,
  nodeInvert: B
}), ei = (t) => (n) => (e) => (r) => ({ segment: e, state: Lv(t)(e)(n), bgAlpha: 1, blur: 0, minis: Sv(t)(n)(e), role: r }), Sv = (t) => (n) => (e) => xt((r) => {
  const o = xu(t)(Et(e.path)(r))(n);
  if (o.tag === "Just")
    return J("Just", { ...ei(t)(tv(o._1.startT)(o._1.endT - 1e-4)(n))(o._1)(E1), bgAlpha: 0 });
  if (o.tag === "Nothing")
    return x;
  f();
})((() => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return B;
    if (o.tag === "Node")
      return nn("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
    f();
  };
  return Ot(xe.foldr, r(e.layout.nodes));
})()), Cv = (t) => (n) => (e) => Cd(
  x,
  Nd,
  (r) => r.direction === "DiveIn" && es.eq(r.parentPath)(n.path) && e >= r.startT - 0.7 && e < r.startT ? J("Just", { node: r.node, phase: (e - (r.startT - 0.7)) / 0.7 }) : x,
  t.dives
), Ev = (t) => (n) => (e) => (r) => {
  const o = Cv(t)(n)(e);
  if (o.tag === "Just") {
    const i = le(3.141592653589793 * o._1.phase * 3);
    return {
      ...r,
      state: { ...r.state, nodeInvert: nn("Node", 1, 1, o._1.node, 1 * i * i, B, B) }
    };
  }
  if (o.tag === "Nothing")
    return r;
  f();
}, P1 = (t) => (n) => xt((e) => {
  const r = un((o) => o.direction === "DiveIn" && es.eq(o.childPath)((() => {
    const i = e.length + 1 | 0;
    return i < 1 ? [] : Ct(0, i, n);
  })()))(t.dives);
  if (r.tag === "Just") {
    const o = xu(t)(e)(r._1.startT - 1e-4);
    if (o.tag === "Just")
      return J(
        "Just",
        (() => {
          const i = ei(t)(r._1.startT - 1e-4)(o._1)(E1);
          return { ...i, state: { ...i.state, nodeFadeAlpha: nn("Node", 1, 1, r._1.node, 0, B, B) } };
        })()
      );
    if (o.tag === "Nothing")
      return x;
    f();
  }
  if (r.tag === "Nothing")
    return x;
  f();
})(ov(n)), R1 = (t) => (n) => {
  const e = lt((o) => n >= o.startT && n < o.endT, t.segments), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r] : rv(t);
}, Av = (t) => (n) => (e) => {
  const r = xv(e)(n), o = xu(t)(e.parentPath)((() => {
    if (e.direction === "DiveIn")
      return e.startT - 1e-4;
    if (e.direction === "DiveOut")
      return e.endT - 1e-4;
    f();
  })()), i = xu(t)(e.childPath)((() => {
    if (e.direction === "DiveIn")
      return e.endT;
    if (e.direction === "DiveOut")
      return e.startT - 1e-4;
    f();
  })()), s = (() => {
    if (e.direction === "DiveIn")
      return Dr(eo)(r);
    if (e.direction === "DiveOut")
      return 1 - Dr(eo)(r);
    f();
  })(), u = 1 - Ar(0)(jo(1)((s - 0.1) / 0.25)), c = 1 - Ar(0)(jo(1)((s - 0.1) / 0.25)), a = 1 - Ar(0)(jo(1)((s - 0.8) / 0.2)), l = (_) => {
    const g = ei(t)((() => {
      if (e.direction === "DiveIn")
        return e.startT - 1e-4;
      if (e.direction === "DiveOut")
        return e.endT - 1e-4;
      f();
    })())(_)(nv);
    return {
      ...ev(pv(_.layout)(e.node))(c)({
        ...g,
        state: {
          ...g.state,
          nodeFadeAlpha: nn("Node", 1, 1, e.node, u, B, B),
          nodeLabelFadeAlpha: nn("Node", 1, 1, e.node, c, B, B)
        }
      }),
      minis: lt((h) => !es.eq(h.segment.path)(e.childPath), g.minis),
      bgAlpha: a
    };
  }, d = 0 + 1 * Ar(0)(jo(1)((s - 0.1) / 0.5));
  return [
    ...P1(t)(e.parentPath),
    ...(() => {
      if (o.tag === "Just") {
        if (i.tag === "Just")
          return [
            l(o._1),
            {
              ...ei(t)((() => {
                if (e.direction === "DiveIn")
                  return e.endT;
                if (e.direction === "DiveOut")
                  return e.startT - 1e-4;
                f();
              })())(i._1)(vu),
              bgAlpha: d
            }
          ];
        if (i.tag === "Nothing")
          return [l(o._1)];
        f();
      }
      if (o.tag === "Nothing")
        return [ei(t)(n)(R1(t)(n))(vu)];
      f();
    })()
  ];
}, Pv = (t) => (n) => un((e) => n >= e.startT && n < e.endT)(t.dives), Rv = (t) => (n) => {
  const e = R1(t)(n), r = ei(t)(n)(e)(vu), o = t.dives.length !== 0, i = Vf(t.cameraConfig)(t.layout)(t.cameraSpans)(n).camera, s = vv(t.layout)(t.cameraConfig.padding)(e)(i), u = Ev(t)(e)(n)({ ...r, state: { ...r.state, camera: s } }), c = P1(t)(e.path), a = Pv(t)(n);
  if (a.tag === "Just")
    return { levels: Av(t)(n)(a._1), camera: i, rootLayout: t.layout, hasDives: o, diving: !0 };
  if (a.tag === "Nothing")
    return { levels: Et(c)(u), camera: s, rootLayout: t.layout, hasDives: o, diving: !1 };
  f();
}, F1 = (t) => t, G1 = /* @__PURE__ */ F1("RunText"), Fv = /* @__PURE__ */ F1("RunCode"), I1 = (t) => (n) => (e) => n.length === 0 ? e : Et(e)({ style: t, text: so(n) }), Gv = (t) => ({
  style: (() => {
    if (t.style === "RunText")
      return Fv;
    if (t.style === "RunCode")
      return G1;
    f();
  })(),
  buf: [],
  runs: I1(t.style)(t.buf)(t.runs)
}), Iv = (t) => (n) => 0 < n.length ? { ...t, buf: Et(t.buf)(n[0]) } : { ...t, buf: Et(t.buf)("\\") }, Bv = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, c = Dt((a) => x, (a) => (l) => J("Just", { head: a, tail: l }), r);
    if (c.tag === "Nothing") {
      o = !1, i = s;
      continue;
    }
    if (c.tag === "Just") {
      if (c._1.head === "\\") {
        e = Iv(s)(c._1.tail), r = Ct(1, c._1.tail.length, c._1.tail);
        continue;
      }
      if (c._1.head === "`") {
        e = Gv(s), r = c._1.tail;
        continue;
      }
      e = { ...s, buf: Et(s.buf)(c._1.head) }, r = c._1.tail;
      continue;
    }
    f();
  }
  return i;
}, B1 = (t) => {
  const n = Bv({ style: G1, buf: [], runs: [] })(vr(t));
  return I1(n.style)(n.buf)(n.runs);
};
let Ds = null;
function Hv() {
  return Ds || (typeof document > "u" ? null : (Ds = document.createElement("canvas").getContext("2d"), Ds));
}
const Cl = /* @__PURE__ */ new Map(), Dv = (t) => (n) => (e) => (r) => () => {
  const o = `${e} ${n}px ${t}|${r}`, i = Cl.get(o);
  if (i !== void 0) return i;
  const s = Hv();
  if (!s)
    return r.length * n * 0.62;
  s.font = `${e} ${n}px ${t}`;
  const u = s.measureText(r).width;
  return Cl.set(o, u), u;
}, zv = io.traverse(Go), Qv = /* @__PURE__ */ w(Eo)(0), Po = /* @__PURE__ */ (() => {
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
})(), H1 = (t) => (n) => {
  const e = zv((r) => {
    const o = (() => {
      if (r.style === "RunText")
        return t.text;
      if (r.style === "RunCode")
        return t.code;
      f();
    })();
    return Dv(o.family)(o.size)(o.weight)(Po(r.text));
  })(B1(Po(n)));
  return () => {
    const r = e();
    return Qv(r);
  };
}, qv = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: "500" }, Wv = { family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", size: 11, weight: "400" }, D1 = { text: qv, code: Wv }, Ov = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Uo = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Xv = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Yv = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Uv = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, El = (t) => so(pn(ar((n) => n === " ")(pn(ar((n) => n === " ")(vr(t)).rest)).rest)), Vv = (t) => w((n) => (e) => e._1 > 0 && (e._2 === " " || e._2 === "-" || e._2 === "_" || e._2 === ".") ? J("Just", e._1) : n)(x)(qt(re)(t)), Ia = (t) => (n) => {
  if (t <= 0)
    return [n];
  if (je(n) <= t)
    return [n];
  const e = vr(n), r = t < 1 ? [] : Ct(0, t, e), o = Vv(r);
  if (o.tag === "Just") {
    const i = El(fl(!(o._1 >= 0 && o._1 < r.length) || r[o._1] === " " ? o._1 : o._1 + 1 | 0)(n)), s = El(di(o._1 + 1 | 0)(n));
    return s === "" ? [i] : [i, ...Ia(t)(s)];
  }
  if (o.tag === "Nothing") {
    const i = fl(t)(n), s = di(t)(n);
    return s === "" ? [i] : [i, ...Ia(t)(s)];
  }
  f();
}, Mv = { cellW: 7, cellH: 3, maxLineWidth: 20 }, Kv = (t) => (n) => {
  const e = D((i) => k(
    (() => {
      if (i.label.tag === "Just")
        return i.label._1;
      if (i.label.tag === "Nothing")
        return i.id;
      f();
    })(),
    i
  ))(n.nodes), r = Uo(1)(Qe(
    (Xv(t.maxLineWidth)(w((i) => (s) => Uo(i)(je(s._1)))(0)(e)) + 2 | 0) + t.cellW | 0,
    t.cellW
  )), o = (r * t.cellW | 0) - 1 | 0;
  return {
    ...n,
    nodes: D((i) => {
      if (!(i._2.size._1 === 1 && i._2.size._2 === 1))
        return i._2;
      const s = vt(Ns(`
`)(i._1))(Ia(o)), u = w((a) => (l) => Uo(a)(je(l)))(0)(s), c = i._2.shape === "Cylinder" ? Uo(1)(Qe((u + 2 | 0) + t.cellW | 0, t.cellW)) : r;
      return {
        ...i._2,
        size: k(
          U(u > o ? Qe((u + 2 | 0) + t.cellW | 0, t.cellW) : c),
          U(Uo(1)(Qe(s.length + t.cellH | 0, t.cellH)) + (i._2.shape === "Cylinder" || i._2.shape === "Document" ? 1 : 0) | 0)
        )
      };
    })(e)
  };
}, jv = (t) => (n) => (e) => ({
  ...e,
  nodes: D((r) => {
    const o = Uv(r.id)(n);
    if (o.tag === "Nothing")
      return r;
    if (o.tag === "Just")
      return {
        ...r,
        size: k(
          Yv(r.size._1)(U(Uo(1)(ln(oc(r.shape === "Cylinder" ? (o._1 + 0) / t : (o._1 + 32) / t))))),
          r.size._2
        )
      };
    f();
  })(e.nodes)
}), Zv = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, tx = (t) => {
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
        let h = _, m = g, p = !0, $;
        for (; p; ) {
          const y = h, v = m;
          if (y >= n) {
            p = !1, $ = v;
            continue;
          }
          if (a >= 0 && a < t.length) {
            if (y >= 0 && y < t.length) {
              h = y + 1 | 0, m = (() => {
                const N = t[a].position, T = t[a].size, b = t[y].position, L = t[y].size;
                return N._1 < b._1 + L._1 && b._1 < N._1 + T._1 && N._2 < b._2 + L._2 && b._2 < N._2 + T._2;
              })() ? v + 1 | 0 : v;
              continue;
            }
            h = y + 1 | 0, m = v;
            continue;
          }
          p = !1, $ = v;
        }
        return $;
      };
      i = a + 1 | 0, s = d(a + 1 | 0)(l);
    }
    return c;
  })(0)(0);
}, Al = (t) => w((n) => (e) => n + S$(e.start)(e.end))(0)(t.segments), nx = (t) => (n) => (e) => ({
  crossingCount: w((r) => (o) => r + o.jumps.length | 0)(0)(n),
  bendCount: w((r) => (o) => r + o.bends.length | 0)(0)(n),
  totalEdgeLength: w((r) => (o) => r + Al(o))(0)(n),
  maxEdgeLength: w((r) => (o) => Zv(r)(Al(o)))(0)(n),
  nodeOverlapCount: tx(t),
  constraintViolations: e,
  jumpCount: w((r) => (o) => r + o.jumps.length | 0)(0)(n)
}), s0 = (t) => t, an = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = nt.compare(t)(s._3);
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
}, u0 = /* @__PURE__ */ s0("LEFT"), ex = /* @__PURE__ */ s0("RIGHT"), z1 = /* @__PURE__ */ s0("UNDEFINED"), rx = {
  eq: (t) => (n) => t === "LEFT" ? n === "LEFT" : t === "RIGHT" ? n === "RIGHT" : t === "UP" ? n === "UP" : t === "DOWN" ? n === "DOWN" : t === "UNDEFINED" && n === "UNDEFINED"
}, ox = {
  compare: (t) => (n) => {
    if (t === "LEFT")
      return n === "LEFT" ? te : Bn;
    if (n === "LEFT")
      return Hn;
    if (t === "RIGHT")
      return n === "RIGHT" ? te : Bn;
    if (n === "RIGHT")
      return Hn;
    if (t === "UP")
      return n === "UP" ? te : Bn;
    if (n === "UP")
      return Hn;
    if (t === "DOWN")
      return n === "DOWN" ? te : Bn;
    if (n === "DOWN")
      return Hn;
    if (t === "UNDEFINED" && n === "UNDEFINED")
      return te;
    f();
  },
  Eq0: () => rx
}, ix = (t) => (e) => {
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
}, sx = { x: 0, y: 0 }, Le = (t) => (n) => (e) => {
  const r = an(t)(e.cNodes);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cNodes: K(nt)(t)(n(r._1))(e.cNodes) };
  f();
}, Xi = (t) => (n) => (e) => {
  const r = an(t)(e.cGroups);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cGroups: K(nt)(t)(n(r._1))(e.cGroups) };
  f();
}, ux = (t) => w((n) => (e) => Le(e)((r) => ({ ...r, hitboxPreCompaction: r.hitbox }))(n))(t)(t.cNodeOrder), cx = (t) => {
  const n = w((e) => (r) => {
    const o = an(r)(t.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return w((i) => (s) => Gt(nt)(xn)(s)([r])(i))(e)(o._1.constraints);
    f();
  })(B)(t.cNodeOrder);
  return w((e) => (r) => Le(r)((o) => ({
    ...o,
    constraints: (() => {
      const i = an(r)(n);
      if (i.tag === "Nothing")
        return [];
      if (i.tag === "Just")
        return i._1;
      f();
    })()
  }))(e))(t)(t.cNodeOrder);
}, ax = (t) => (n) => Le(t)((e) => ({ ...e, ignoreSpacing: { left: e.ignoreSpacing.left || n.left, right: e.ignoreSpacing.right || n.right, up: e.ignoreSpacing.up || n.up, down: e.ignoreSpacing.down || n.down } })), fx = (t) => {
  const n = w((e) => (r) => Xi(r)((o) => ({ ...o, outDegree: o.outDegreeReal }))(e))(t)(t.cGroupOrder);
  return w((e) => (r) => Le(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder);
}, We = { left: !1, right: !1, up: !1, down: !1 }, lx = { horizontalSpacing: (t) => (n) => 0, verticalSpacing: (t) => (n) => 0 }, c0 = (t) => w((n) => (e) => {
  const r = an(e)(n.cGroups);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just") {
    const o = w((s) => (u) => {
      const c = an(u)(n.cNodes);
      if (c.tag === "Nothing")
        return s;
      if (c.tag === "Just") {
        if (s.tag === "Nothing")
          return J("Just", u);
        if (s.tag === "Just") {
          const a = an(s._1)(n.cNodes);
          if (a.tag === "Nothing")
            return J("Just", u);
          if (a.tag === "Just")
            return c._1.hitbox.x < a._1.hitbox.x ? J("Just", u) : J("Just", s._1);
        }
      }
      f();
    })(x)(r._1.cNodes), i = Xi(e)((s) => ({ ...s, reference: o }))(n);
    if (o.tag === "Nothing")
      return i;
    if (o.tag === "Just") {
      const s = an(o._1)(i.cNodes);
      if (s.tag === "Nothing")
        return i;
      if (s.tag === "Just") {
        const u = s._1;
        return w((c) => (a) => Le(a)((l) => ({ ...l, cGroupOffset: { x: l.hitbox.x - u.hitbox.x, y: l.hitbox.y - u.hitbox.y } }))(c))(i)(r._1.cNodes);
      }
    }
  }
  f();
})(t)(t.cGroupOrder), we = (t) => c0({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return B;
      if (e.tag === "Node")
        return nn("Node", e._1, e._2, e._3, { ...e._4, hitbox: { ...e._4.hitbox, x: -e._4.hitbox.x - e._4.hitbox.width } }, n(e._5), n(e._6));
      f();
    };
    return n(t.cNodes);
  })()
}), er = (t) => c0({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return B;
      if (e.tag === "Node")
        return nn(
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
}), Q1 = (t) => {
  const n = w((e) => (r) => Xi(r)((o) => ({ ...o, outDegree: 0, outDegreeReal: 0, incomingConstraints: [] }))(e))(t)(t.cGroupOrder);
  return w((e) => (r) => {
    const o = an(r)(e.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just") {
      if (o._1.cGroup.tag === "Nothing")
        return e;
      if (o._1.cGroup.tag === "Just") {
        const i = o._1.cGroup._1;
        return w((s) => (u) => {
          const c = an(u)(s.cNodes);
          if (c.tag === "Nothing")
            return s;
          if (c.tag === "Just")
            return c._1.cGroup.tag === "Just" && c._1.cGroup._1 !== i ? Xi(c._1.cGroup._1)((a) => ({ ...a, outDegree: a.outDegree + 1 | 0, outDegreeReal: a.outDegreeReal + 1 | 0 }))(Xi(i)((a) => ge(to)(u)(a.incomingConstraints) ? a : { ...a, incomingConstraints: [...a.incomingConstraints, u] })(s)) : s;
          f();
        })(e)(o._1.constraints);
      }
    }
    f();
  })(n)(n.cNodeOrder);
}, zs = (t) => {
  const n = cx(t.cGraph);
  return { ...t, cGraph: Q1(w((e) => (r) => Le(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder)) };
}, gx = (t) => (n) => w((e) => (r) => {
  if (t === "LEFT" || t === "UP") {
    const i = r._2;
    return Le(r._1)((s) => ({ ...s, constraints: [...s.constraints, i] }))(e);
  }
  const o = r._1;
  return Le(r._2)((i) => ({ ...i, constraints: [...i.constraints, o] }))(e);
})(n)(t === "LEFT" || t === "RIGHT" ? n.predefinedHorizontalConstraints : n.predefinedVerticalConstraints), He = (t) => {
  const n = {
    ...t,
    cGraph: gx(t.direction)({
      ...t.cGraph,
      cNodes: (() => {
        const e = (r) => {
          if (r.tag === "Leaf")
            return B;
          if (r.tag === "Node")
            return nn("Node", r._1, r._2, r._3, { ...r._4, constraints: [] }, e(r._5), e(r._6));
          f();
        };
        return e(t.cGraph.cNodes);
      })()
    })
  };
  return {
    ...n,
    cGraph: Q1((() => {
      if (n.constraintAlgorithm.tag === "Nothing")
        return n.cGraph;
      if (n.constraintAlgorithm.tag === "Just")
        return n.constraintAlgorithm._1(n);
      f();
    })())
  };
}, dx = (t) => (n) => (e) => {
  const r = { ...e, direction: n };
  if (t === "UNDEFINED")
    return n === "LEFT" ? He(r) : n === "RIGHT" ? He({ ...r, cGraph: we(r.cGraph) }) : n === "UP" ? He({ ...r, cGraph: er(r.cGraph) }) : n === "DOWN" ? He({ ...r, cGraph: we(er(r.cGraph)) }) : r;
  if (t === "LEFT")
    return n === "RIGHT" ? zs({ ...r, cGraph: we(r.cGraph) }) : n === "UP" ? He({ ...r, cGraph: er(r.cGraph) }) : n === "DOWN" ? He({ ...r, cGraph: we(er(r.cGraph)) }) : r;
  if (t === "RIGHT")
    return n === "LEFT" ? zs({ ...r, cGraph: we(r.cGraph) }) : n === "UP" ? He({ ...r, cGraph: er(we(r.cGraph)) }) : n === "DOWN" ? He({ ...r, cGraph: we(er(we(r.cGraph))) }) : r;
  if (t === "UP")
    return n === "LEFT" ? He({ ...r, cGraph: er(r.cGraph) }) : n === "RIGHT" ? He({ ...r, cGraph: we(er(r.cGraph)) }) : n === "DOWN" ? zs({ ...r, cGraph: we(r.cGraph) }) : r;
  if (t === "DOWN")
    return n === "LEFT" ? He({ ...r, cGraph: er(we(r.cGraph)) }) : n === "RIGHT" ? He({ ...r, cGraph: we(er(we(r.cGraph))) }) : n === "UP" ? zs({ ...r, cGraph: we(r.cGraph) }) : r;
  f();
}, q1 = (t) => (n) => n.finished || !ix(t)(n.cGraph.supportedDirections) || (t === "LEFT" ? n.direction === "LEFT" : t === "RIGHT" ? n.direction === "RIGHT" : t === "UP" ? n.direction === "UP" : t === "DOWN" ? n.direction === "DOWN" : t === "UNDEFINED" && n.direction === "UNDEFINED") ? n : dx(n.direction)(t)(n), _x = (t) => {
  if (t.finished)
    return t;
  const n = t.direction === "UNDEFINED" ? q1(u0)(t) : t, e = { ...n, cGraph: fx(n.cGraph) };
  if (e.compactionAlgorithm.tag === "Nothing")
    return e;
  if (e.compactionAlgorithm.tag === "Just")
    return e.compactionAlgorithm._1(e);
  f();
}, W1 = (t) => (n) => (e) => {
  const r = an(t)(e.cNodes), o = an(n)(e.cGroups);
  return r.tag === "Just" && o.tag === "Just" ? (() => {
    if (r._1.cGroup.tag === "Nothing")
      return !1;
    if (r._1.cGroup.tag === "Just")
      return !0;
    f();
  })() && (r._1.cGroup.tag === "Nothing" || !(r._1.cGroup.tag === "Just" && r._1.cGroup._1 === n)) ? e : {
    ...e,
    cNodes: K(nt)(t)({ ...r._1, cGroup: J("Just", n) })(e.cNodes),
    cGroups: K(nt)(n)({
      ...o._1,
      cNodes: ge(to)(t)(o._1.cNodes) ? o._1.cNodes : [...o._1.cNodes, t],
      reference: (() => {
        if (o._1.reference.tag === "Nothing")
          return J("Just", t);
        if (o._1.reference.tag === "Just")
          return J("Just", o._1.reference._1);
        f();
      })()
    })(e.cGroups)
  } : e;
}, O1 = (t) => (n) => ({
  id: n.nextCNodeId,
  graph: {
    ...n,
    cNodes: K(nt)(n.nextCNodeId)({
      id: n.nextCNodeId,
      origin: t.origin,
      kind: t.kind,
      cGroup: x,
      cGroupOffset: sx,
      hitbox: t.hitbox,
      hitboxPreCompaction: t.hitbox,
      constraints: [],
      startPos: -1e308,
      ignoreSpacing: We
    })(n.cNodes),
    cNodeOrder: [...n.cNodeOrder, n.nextCNodeId],
    nextCNodeId: n.nextCNodeId + 1 | 0
  }
}), a0 = (t) => (n) => {
  const e = n.nextCGroupId;
  return {
    id: e,
    graph: w((r) => (o) => W1(o)(e)(r))({
      ...n,
      cGroups: K(nt)(e)({
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
}, hx = (t) => w((n) => (e) => {
  const r = an(e)(n.cNodes);
  return r.tag === "Just" && r._1.cGroup.tag === "Nothing" ? a0({ master: x, nodes: [e] })(n).graph : n;
})(t)(t.cNodeOrder), px = (t) => ({
  cGraph: ux(hx(c0(t))),
  direction: z1,
  compactionAlgorithm: x,
  constraintAlgorithm: x,
  spacingsHandler: lx,
  lockFun: x,
  finished: !1
}), mx = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, $x = (t) => (n) => {
  const e = ot.compare(t._1)(n._1);
  return e === "LT" ? Bn : e === "GT" ? Hn : nt.compare(t._2)(n._2);
}, yx = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Xe);
  return (n) => t(de("IterNode", n, Oe));
})(), Pl = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = nt.compare(t)(s._3);
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
}, Rl = (t) => t.kind.tag === "Nothing" ? !1 : t.kind.tag === "Just" && t.kind._1 === "vs", Fl = (t) => t.kind.tag === "Nothing" || !(t.kind.tag === "Just" && t.kind._1 === "vs"), xc = (t) => (n) => $x(k(t.hitbox.x + t.hitbox.width / 2, t.id))(k(n.hitbox.x + n.hitbox.width / 2, n.id)), vx = (t) => (n) => {
  const e = Co(jt, x, (r) => xc(t)(r) === "LT", n);
  if (e.tag === "Just") {
    const r = Ed(jt, x, e._1, t, n);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return Et(n)(t);
  f();
}, X1 = (t) => (n) => {
  const e = lt((o) => xc(o)(t) === "LT", n), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? J("Just", e[r]) : x;
}, xx = (t) => (n) => {
  const e = vx(n)(t.intervals), r = un((i) => xc(n)(i) === "LT")(e), o = K(nt)(n.id)((() => {
    const i = X1(n)(e);
    return i.tag === "Just" ? J("Just", i._1.id) : x;
  })())(t.cand);
  return {
    ...t,
    intervals: e,
    cand: (() => {
      if (r.tag === "Just")
        return K(nt)(r._1.id)(J("Just", n.id))(o);
      if (r.tag === "Nothing")
        return o;
      f();
    })()
  };
}, wx = (t) => (n) => {
  const e = ot.compare(t.low ? t.node.hitbox.y : t.node.hitbox.y + t.node.hitbox.height)(n.low ? n.node.hitbox.y : n.node.hitbox.y + n.node.hitbox.height);
  return e === "EQ" ? t.low ? t.low && !n.low ? Hn : te : n.low ? Bn : te : e;
}, Nx = (t) => w((n) => (e) => Le(e.id)((r) => ({ ...r, constraints: [] }))(n))(t)(xt((n) => an(n)(t.cNodes))(t.cNodeOrder)), oa = (t) => (n) => w((e) => (r) => {
  const o = an(r._1)(e.cNodes);
  if (o.tag === "Just")
    return Le(r._1)((i) => ({ ...i, constraints: [...i.constraints, ...r._2] }))(e);
  if (o.tag === "Nothing")
    return e;
  f();
})(n)(yx(t)), Y1 = (t) => (n) => n.kind.tag !== "Nothing" && n.kind.tag === "Just" && n.kind._1 === "vs" ? n.ignoreSpacing.up ? n.ignoreSpacing.down ? n : { ...n, hitbox: { ...n.hitbox, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t - 0.01, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t, height: n.hitbox.height + 2 * t } }, Gl = (t) => (n) => (e) => w((r) => (o) => e(o) ? Le(o.id)(Y1(t))(r) : r)(n)(xt((r) => an(r)(n.cNodes))(n.cNodeOrder)), Tx = (t) => (n) => {
  const e = (r, o, i) => {
    const s = Le(i)(Y1(t))(r);
    return o.length <= 1 ? s : w((u) => (c) => c === i ? u : Le(c)((a) => a.ignoreSpacing.up ? { ...a, hitbox: { ...a.hitbox, y: a.hitbox.y + t + 0.01, height: a.hitbox.height - t - 0.01 } } : a.ignoreSpacing.down ? { ...a, hitbox: { ...a.hitbox, height: a.hitbox.height - t - 0.01 } } : a)(u))(s)(o);
  };
  return w((r) => (o) => {
    if (o.master.tag === "Nothing")
      return 0 < o.cNodes.length ? e(r, o.cNodes, o.cNodes[0]) : r;
    if (o.master.tag === "Just")
      return e(r, o.cNodes, o.master._1);
    f();
  })(n)(xt((r) => an(r)(n.cGroups))(n.cGroupOrder));
}, Jx = (t) => (n) => {
  const e = X1(n)(t.intervals), r = un((i) => xc(n)(i) === "LT")(t.intervals), o = e.tag === "Just" && (() => {
    const i = Pl(n.id)(t.cand);
    return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === e._1.id)) && e._1.cGroup.tag === "Just" && n.cGroup.tag === "Just" && e._1.cGroup._1 !== n.cGroup._1;
  })() ? Gt(nt)(xn)(e._1.id)([n.id])(t.constraints) : t.constraints;
  return {
    ...t,
    constraints: r.tag === "Just" && (() => {
      const i = Pl(r._1.id)(t.cand);
      return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === n.id)) && n.cGroup.tag === "Just" && r._1.cGroup.tag === "Just" && n.cGroup._1 !== r._1.cGroup._1;
    })() ? Gt(nt)(xn)(n.id)([r._1.id])(o) : o,
    intervals: lt((i) => i.id !== n.id, t.intervals)
  };
}, bx = (t) => (n) => n.low ? xx(t)(n.node) : Jx(t)(n.node), ia = (t) => (n) => w(bx)({ intervals: [], cand: B, constraints: B })(Ht(wx)(vt(lt(
  t,
  xt((e) => an(e)(n.cNodes))(n.cNodeOrder)
))((e) => [{ node: e, low: !0 }, { node: e, low: !1 }]))).constraints, kx = (t) => (n) => {
  const e = mx(0)(t / 2 - 0.5), r = oa(ia(Rl)(Gl(e)(n)(Rl)))(n), o = oa(ia(Fl)(Gl(e)(r)(Fl)))(r);
  return oa(ia((i) => !0)(Tx(e)(o)))(o);
}, Lx = (t) => (n) => kx(t)(Nx(n.cGraph)), Tu = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Il = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, f0 = (t) => (n) => (e) => (r) => (o) => ({
  id: t,
  representedEdges: [o],
  affectedBends: [n, e],
  hitbox: { x: Tu(n._1)(e._1), y: Tu(n._2)(e._2), width: dr(n._1 - e._1), height: dr(n._2 - e._2) },
  ignoreSpacing: We,
  potentialGroupParents: (() => {
    if (r.tag === "Nothing")
      return [];
    if (r.tag === "Just")
      return [r._1];
    f();
  })(),
  aPort: x
}), Sx = (t) => (n) => {
  const e = Tu(t.hitbox.x)(n.hitbox.x), r = Tu(t.hitbox.y)(n.hitbox.y);
  return {
    ...t,
    representedEdges: [...t.representedEdges, ...n.representedEdges],
    affectedBends: [...t.affectedBends, ...n.affectedBends],
    potentialGroupParents: [...t.potentialGroupParents, ...n.potentialGroupParents],
    hitbox: {
      x: e,
      y: r,
      width: Il(t.hitbox.x + t.hitbox.width)(n.hitbox.x + n.hitbox.width) - e,
      height: Il(t.hitbox.y + t.hitbox.height)(n.hitbox.y + n.hitbox.height) - r
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
}, Cx = (t) => (n) => dr(t.hitbox.x - n.hitbox.x) <= 1e-4 && n.hitbox.y - (t.hitbox.y + t.hitbox.height) <= 1e-4 && t.hitbox.y - (n.hitbox.y + n.hitbox.height) <= 1e-4, Ex = (t) => (n) => dr(t.hitbox.x - n.hitbox.x) <= 1e-4 ? ot.compare(t.hitbox.y)(n.hitbox.y) : t.hitbox.x < n.hitbox.x ? Bn : Hn, U1 = (t, n) => ({ tag: t, _1: n }), l0 = /* @__PURE__ */ mn(F)(Xt), wc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Bl = /* @__PURE__ */ (() => {
  const t = { eq: (e) => (r) => e._1 === r._1 && (e._2.tag === "Nothing" ? r._2.tag === "Nothing" : e._2.tag === "Just" && r._2.tag === "Just" && e._2._1 === r._2._1) }, n = {
    compare: (e) => (r) => {
      const o = F.compare(e._1)(r._1);
      if (o === "LT")
        return Bn;
      if (o === "GT")
        return Hn;
      if (e._2.tag === "Nothing")
        return r._2.tag === "Nothing" ? te : Bn;
      if (r._2.tag === "Nothing")
        return Hn;
      if (e._2.tag === "Just" && r._2.tag === "Just")
        return F.compare(e._2._1)(r._2._1);
      f();
    },
    Eq0: () => t
  };
  return w((e) => (r) => K(n)(r)()(e))(B);
})(), Ir = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Ax = /* @__PURE__ */ w((t) => (n) => K(ox)(n)()(t))(B), sa = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = Kd.compare(t)(s._3);
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
}, Px = (t) => (n) => {
  const e = l0(D((i) => k(i.id, i))(t)), r = xt((i) => wc(i)(e))(n), o = nt.compare((() => {
    const i = Bl(D((s) => k(s.from.node, s.from.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })())((() => {
    const i = Bl(D((s) => k(s.to.node, s.to.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })());
  if (o === "LT")
    return { ...We, left: !0, right: !1 };
  if (o === "GT")
    return { ...We, left: !1, right: !0 };
  if (o === "EQ")
    return We;
  f();
}, Rx = (t) => xt((n) => {
  if (n.direction === "V")
    return J("Just", { start: n.start, end: n.end });
  if (n.direction === "H")
    return x;
  f();
})(t.segments), Qs = (t) => (n) => (e) => (r) => {
  if (r.tag === "Just") {
    const o = Ir(e)(n);
    if (o.tag === "Just") {
      const i = un((s) => s.id === r._1)(o._1);
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
}, Fx = (t) => (n) => (e) => {
  const r = O1({
    origin: J("Just", U1("SegmentOrigin", e)),
    kind: J("Just", "vs"),
    hitbox: e.hitbox
  })(n.cGraph), o = ax(r.id)(e.ignoreSpacing)(r.graph);
  return {
    ...n,
    cGraph: (() => {
      if (0 < e.potentialGroupParents.length) {
        const i = an(e.potentialGroupParents[0])(o.cNodes);
        if (i.tag === "Just") {
          if (i._1.cGroup.tag === "Just")
            return W1(r.id)(i._1.cGroup._1)(o);
          if (i._1.cGroup.tag === "Nothing")
            return o;
          f();
        }
        if (i.tag === "Nothing")
          return o;
        f();
      }
      return a0({ master: J("Just", r.id), nodes: [r.id] })(o).graph;
    })(),
    edgeToCs: w((i) => (s) => Gt(F)(xn)(s)([r.id])(i))(n.edgeToCs)(e.representedEdges),
    lockMap: K(nt)(r.id)(Px(t)(e.representedEdges))(n.lockMap)
  };
}, Gx = (t) => (n) => (e) => {
  const r = Dt(
    (o) => x,
    (o) => (i) => J("Just", { head: o, tail: i }),
    Ht(Ex)(n)
  );
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just") {
    const o = w((i) => (s) => Cx(i.survivor)(s) ? { ...i, survivor: Sx(i.survivor)(s) } : { survivor: s, merged: [...i.merged, i.survivor] })({ survivor: r._1.head, merged: [] })(r._1.tail);
    return w(Fx(t))(e)([...o.merged, o.survivor]);
  }
  f();
}, Ix = (t) => ({
  cGraph: {
    cNodes: B,
    cNodeOrder: [],
    cGroups: B,
    cGroupOrder: [],
    supportedDirections: Ax([z1, u0, ex]),
    predefinedHorizontalConstraints: [],
    predefinedVerticalConstraints: [],
    nextCNodeId: 0,
    nextCGroupId: 0
  },
  nodeToC: B,
  edgeToCs: B,
  lockMap: B
}), Bx = (t) => {
  const n = U(4);
  return { x: t.position._1 * n, y: t.position._2 * n, width: t.size._1 * n, height: t.size._2 * n };
}, Hx = (t) => (n) => (e) => w((r) => (o) => {
  const i = O1({ origin: J("Just", U1("NodeOrigin", o.node)), kind: x, hitbox: Bx(o) })(r.cGraph), s = Ir(o.node)(t), u = (() => {
    if (s.tag === "Nothing")
      return k(0, 0);
    if (s.tag === "Just")
      return s._1;
    f();
  })();
  return {
    ...r,
    cGraph: a0({ master: J("Just", i.id), nodes: [i.id] })(i.graph).graph,
    nodeToC: K(F)(o.node)(i.id)(r.nodeToC),
    lockMap: K(nt)(i.id)((() => {
      const c = u._1 - u._2 | 0;
      return c < 0 ? { ...We, left: !0 } : c > 0 ? { ...We, right: !0 } : We;
    })())(r.lockMap)
  };
})(e)(n), Dx = (t) => w((n) => (e) => Gt(F)((r) => (o) => k(
  r._1 + o._1 | 0,
  r._2 + o._2 | 0
))(e.to.node)(k(1, 0))(Gt(F)((r) => (o) => k(r._1 + o._1 | 0, r._2 + o._2 | 0))(e.from.node)(k(
  0,
  1
))(n)))(B)(t), zx = (t) => w((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? K(F)(e.origin._1._1)(e.hitbox.x)(n) : n)(B)(xt((n) => an(n)(t.cNodes))(t.cNodeOrder)), Qx = (t) => w((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? K(F)(e.origin._1._1)(e.hitbox.x - e.hitboxPreCompaction.x)(n) : n)(B)(xt((n) => an(n)(t.cNodes))(t.cNodeOrder)), qx = (t) => w((n) => (e) => {
  if (e.origin.tag === "Just" && e.origin._1.tag === "SegmentOrigin") {
    const r = e.hitbox.x - e.hitboxPreCompaction.x;
    return w((o) => (i) => K(Kd)(i)(r)(o))(n)(e.origin._1._1.affectedBends);
  }
  return n;
})(B)(xt((n) => an(n)(t.cNodes))(t.cNodeOrder)), V1 = (t) => {
  const n = l0(D((e) => k(e.id, e))(t.edges));
  return xt((e) => {
    const r = wc(e.edge)(n);
    if (r.tag === "Just")
      return e.reversed ? J(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.to.node,
          tgt: r._1.from.node,
          srcSide: Qs(kr)(t.ports)(r._1.to.node)(r._1.to.port),
          tgtSide: Qs(Lr)(t.ports)(r._1.from.node)(r._1.from.port),
          path: e
        }
      ) : J(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.from.node,
          tgt: r._1.to.node,
          srcSide: Qs(kr)(t.ports)(r._1.from.node)(r._1.from.port),
          tgtSide: Qs(Lr)(t.ports)(r._1.to.node)(r._1.to.port),
          path: e
        }
      );
    if (r.tag === "Nothing")
      return x;
    f();
  })(t.paths);
}, Wx = (t) => (n) => {
  const e = vt(n)((r) => {
    if (r.src === r.tgt)
      return [];
    if ((r.srcSide === "North" || r.srcSide === "South") && (r.tgtSide === "North" || r.tgtSide === "South"))
      return [];
    const o = Ir(r.tgt)(t.nodeToC), i = (() => {
      if (o.tag === "Just")
        return an(o._1)(t.cGraph.cNodes);
      if (o.tag === "Nothing")
        return x;
      f();
    })(), s = Ir(r.src)(t.nodeToC), u = (() => {
      if (s.tag === "Just")
        return an(s._1)(t.cGraph.cNodes);
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
    })(), a = (g) => (h) => (m) => {
      if (u.tag === "Just") {
        if (u._1.cGroup.tag === "Just") {
          if (m.cGroup.tag === "Just")
            return g(m.hitbox.x) && m.cGroup._1 !== u._1.cGroup._1 ? J("Just", h(m.cGroup._1)(u._1.cGroup._1)) : x;
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
    }, l = xt((g) => an(g)(t.cGraph.cNodes))((() => {
      const g = wc(r.edgeId)(t.edgeToCs);
      if (g.tag === "Nothing")
        return [];
      if (g.tag === "Just")
        return g._1;
      f();
    })()), d = (() => {
      if (u.tag === "Just" && r.srcSide === "West") {
        const g = u._1;
        return xt(a((h) => h < g.hitbox.x)((h) => (m) => ({ srcGroup: h, tgtGroup: m, delta: 1, weight: 100 })))(l);
      }
      return [];
    })(), _ = (() => {
      if (u.tag === "Just" && r.tgtSide === "East") {
        const g = u._1;
        return xt(a((h) => h > g.hitbox.x)((h) => (m) => ({ srcGroup: m, tgtGroup: h, delta: 1, weight: 100 })))(l);
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
      return he((s) => ge(gr)(s)(i.representedEdges), r.origin._1._1.representedEdges);
    })(),
    vsLNodePair: (r) => (o) => r.origin.tag === "Just" && o.origin.tag === "Just" && (r.origin._1.tag === "SegmentOrigin" ? o.origin._1.tag === "NodeOrigin" : r.origin._1.tag === "NodeOrigin" && o.origin._1.tag === "SegmentOrigin"),
    edgeLengthEdges: (r) => e
  };
}, Ox = (t) => (n) => {
  const e = U(4), r = zx(t), o = Qx(t), i = l0(D((u) => k(u.id, k(u.from.node, u.to.node)))(n.edges)), s = qx(t);
  return {
    nodes: D((u) => {
      const c = Ir(u.node)(r);
      if (c.tag === "Just")
        return { ...u, position: k(c._1 / e, u.position._2) };
      if (c.tag === "Nothing")
        return u;
      f();
    })(n.nodes),
    edges: D((u) => {
      const c = wc(u.edge)(i), a = (() => {
        if (c.tag === "Nothing")
          return u.segments;
        if (c.tag === "Just") {
          const l = Ir(c._1._1)(o), d = (() => {
            if (l.tag === "Nothing")
              return 0;
            if (l.tag === "Just")
              return l._1;
            f();
          })(), _ = Ir(c._1._2)(o), g = (() => {
            if (_.tag === "Nothing")
              return 0;
            if (_.tag === "Just")
              return _._1;
            f();
          })();
          return qt((() => {
            const h = u.reversed ? g : d, m = u.reversed ? d : g, p = u.segments.length;
            return ($) => (y) => {
              if (y.direction === "V") {
                const v = (() => {
                  if ($ === 0)
                    return h;
                  if ($ === (p - 1 | 0))
                    return m;
                  const N = sa(y.start)(s);
                  if (N.tag === "Nothing")
                    return 0;
                  if (N.tag === "Just")
                    return N._1;
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
                        return y.start._1 + h;
                      const v = sa(y.start)(s);
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
                      if ($ === (p - 1 | 0))
                        return y.end._1 + m;
                      const v = sa(y.end)(s);
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
      return { ...u, segments: a, bends: Fn((l) => (d) => l.end, a, Ct(1, a.length, a)) };
    })(n.paths)
  };
}, Xx = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = f0(o.nextId)(i._2.start)(i._2.end)(x)(t.edgeId), u = (() => {
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
}, Hl = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...f0(i.nextId)(r.start)(k(r.start._1, o.down ? e.y : e.y + e.height))(J(
        "Just",
        n
      ))(t.edgeId),
      aPort: J("Just", { node: t.src, side: o.side }),
      ignoreSpacing: o.down ? { ...We, down: !0 } : { ...We, up: !0 }
    }
  ]
}), qs = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...f0(i.nextId)(r.end)(k(r.end._1, o.down ? e.y : e.y + e.height))(J(
        "Just",
        n
      ))(t.edgeId),
      aPort: J("Just", { node: t.tgt, side: o.side }),
      ignoreSpacing: o.down ? { ...We, down: !0 } : { ...We, up: !0 }
    }
  ]
}), Yx = (t) => (n) => (e) => {
  if (e.src === e.tgt)
    return n;
  const r = Ir(e.src)(t.nodeToC), o = Ir(e.tgt)(t.nodeToC), i = (() => {
    if (r.tag === "Just") {
      const l = an(r._1)(t.cGraph.cNodes);
      return l.tag === "Just" ? J("Just", l._1.hitbox) : x;
    }
    if (r.tag === "Nothing")
      return x;
    f();
  })(), s = (() => {
    if (o.tag === "Just") {
      const l = an(o._1)(t.cGraph.cNodes);
      return l.tag === "Just" ? J("Just", l._1.hitbox) : x;
    }
    if (o.tag === "Nothing")
      return x;
    f();
  })(), u = Rx(e.path), c = w(Xx(e)(i)(s)(u.length - 1 | 0))(n)(qt((l) => (d) => k(
    l,
    d
  ))(u));
  if (0 < u.length) {
    const l = (() => {
      if (r.tag === "Just" && i.tag === "Just") {
        if (e.srcSide === "North")
          return Hl(e)(r._1)(i._1)(u[0])({ side: Cn, down: !0 })(c);
        if (e.srcSide === "South")
          return Hl(e)(r._1)(i._1)(u[0])({ side: En, down: !1 })(c);
      }
      return c;
    })(), d = u.length - 1 | 0;
    if (d >= 0 && d < u.length && o.tag === "Just" && s.tag === "Just") {
      if (e.tgtSide === "North")
        return qs(e)(o._1)(s._1)(u[d])({ side: Cn, down: !0 })(l);
      if (e.tgtSide === "South")
        return qs(e)(o._1)(s._1)(u[d])({ side: En, down: !1 })(l);
    }
    return l;
  }
  const a = u.length - 1 | 0;
  if (a >= 0 && a < u.length && o.tag === "Just" && s.tag === "Just") {
    if (e.tgtSide === "North")
      return qs(e)(o._1)(s._1)(u[a])({ side: Cn, down: !0 })(c);
    if (e.tgtSide === "South")
      return qs(e)(o._1)(s._1)(u[a])({ side: En, down: !1 })(c);
  }
  return c;
}, Ux = (t) => (n) => (e) => Gx(t)(w(Yx(e))({ nextId: 0, segments: [] })(n).segments)(e), Vx = (t) => Ux(t.edges)(V1(t))(Hx(Dx(t.edges))(t.nodes)(Ix())), Br = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = nt.compare(t)(s._3);
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
}, Ba = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ha = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = nt.compare(t)(s._3);
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
}, Mx = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Kx = (t) => {
  const n = t.Eq0();
  return (e) => (r) => {
    const o = (u) => {
      let c = u, a = !0, l;
      for (; a; ) {
        const d = c, _ = Dt((g) => x, (g) => (h) => J("Just", { head: g, tail: h }), d.queue);
        if (_.tag === "Nothing") {
          a = !1, l = d;
          continue;
        }
        if (_.tag === "Just") {
          const g = _._1.head;
          if (((p) => {
            let $ = p, y = !0, v;
            for (; y; ) {
              const N = $;
              if (N.tag === "Leaf") {
                y = !1, v = !1;
                continue;
              }
              if (N.tag === "Node") {
                const T = t.compare(g)(N._3);
                if (T === "LT") {
                  $ = N._5;
                  continue;
                }
                if (T === "GT") {
                  $ = N._6;
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
          const h = un((m) => !Br(m.eid)(d.removedEdges) && (n.eq(m.src)(g) || n.eq(m.tgt)(g)))(r);
          if (h.tag === "Nothing") {
            c = { ...d, queue: _._1.tail };
            continue;
          }
          if (h.tag === "Just") {
            const m = n.eq(h._1.src)(g) ? h._1.tgt : h._1.src, p = {
              ...d,
              degree: K(t)(m)((() => {
                const y = ((v) => {
                  let N = v, T = !0, b;
                  for (; T; ) {
                    const L = N;
                    if (L.tag === "Leaf") {
                      T = !1, b = x;
                      continue;
                    }
                    if (L.tag === "Node") {
                      const E = t.compare(m)(L._3);
                      if (E === "LT") {
                        N = L._5;
                        continue;
                      }
                      if (E === "GT") {
                        N = L._6;
                        continue;
                      }
                      if (E === "EQ") {
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
              removedEdges: K(nt)(h._1.eid)()(d.removedEdges),
              record: [...d.record, { node: g, neighbour: m, viaSrc: n.eq(h._1.src)(g) }],
              queue: _._1.tail
            };
            if ((() => {
              const y = ((N) => {
                let T = N, b = !0, L;
                for (; b; ) {
                  const E = T;
                  if (E.tag === "Leaf") {
                    b = !1, L = x;
                    continue;
                  }
                  if (E.tag === "Node") {
                    const C = t.compare(m)(E._3);
                    if (C === "LT") {
                      T = E._5;
                      continue;
                    }
                    if (C === "GT") {
                      T = E._6;
                      continue;
                    }
                    if (C === "EQ") {
                      b = !1, L = J("Just", E._4);
                      continue;
                    }
                  }
                  f();
                }
                return L;
              })(p.degree), v = (N) => {
                let T = N, b = !0, L;
                for (; b; ) {
                  const E = T;
                  if (E.tag === "Leaf") {
                    b = !1, L = !1;
                    continue;
                  }
                  if (E.tag === "Node") {
                    const C = t.compare(m)(E._3);
                    if (C === "LT") {
                      T = E._5;
                      continue;
                    }
                    if (C === "GT") {
                      T = E._6;
                      continue;
                    }
                    if (C === "EQ") {
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
              })() && !v(p.removedNodes);
            })()) {
              c = { ...p, queue: [...p.queue, m] };
              continue;
            }
            c = p;
            continue;
          }
        }
        f();
      }
      return l;
    }, i = w((u) => (c) => Gt(t)(Tn)(c.src)(1)(Gt(t)(Tn)(c.tgt)(1)(u)))(B)(r), s = o({
      degree: i,
      removedNodes: B,
      removedEdges: B,
      record: [],
      queue: lt(
        (u) => {
          const a = ((l) => {
            let d = l, _ = !0, g;
            for (; _; ) {
              const h = d;
              if (h.tag === "Leaf") {
                _ = !1, g = x;
                continue;
              }
              if (h.tag === "Node") {
                const m = t.compare(u)(h._3);
                if (m === "LT") {
                  d = h._5;
                  continue;
                }
                if (m === "GT") {
                  d = h._6;
                  continue;
                }
                if (m === "EQ") {
                  _ = !1, g = J("Just", h._4);
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
              const h = t.compare(u)(g._3);
              if (h === "LT") {
                l = g._5;
                continue;
              }
              if (h === "GT") {
                l = g._6;
                continue;
              }
              if (h === "EQ") {
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
      coreEdges: lt((u) => !Br(u.eid)(s.removedEdges), r),
      removed: s.record
    };
  };
}, jx = (t) => (n) => (e) => w((r) => (o) => {
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
          const h = t.compare(i)(g._3);
          if (h === "LT") {
            l = g._5;
            continue;
          }
          if (h === "GT") {
            l = g._6;
            continue;
          }
          if (h === "EQ") {
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
})(e)(pn(n)), Da = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = { ...o, treeNode: K(t)(r)()(o.treeNode) };
    return w((s) => (u) => {
      if (Br(u.eid)(s.st.edgeVisited))
        return s;
      const c = { ...s.st, edgeVisited: K(nt)(u.eid)()(s.st.edgeVisited) }, a = n.eq(u.src)((() => {
        const l = u.src, d = (g) => {
          let h = g, m = !0, p;
          for (; m; ) {
            const $ = h;
            if ($.tag === "Leaf") {
              m = !1, p = !1;
              continue;
            }
            if ($.tag === "Node") {
              const y = t.compare(l)($._3);
              if (y === "LT") {
                h = $._5;
                continue;
              }
              if (y === "GT") {
                h = $._6;
                continue;
              }
              if (y === "EQ") {
                m = !1, p = !0;
                continue;
              }
            }
            f();
          }
          return p;
        }, _ = u.tgt;
        return d(c.treeNode) && !((h) => {
          let m = h, p = !0, $;
          for (; p; ) {
            const y = m;
            if (y.tag === "Leaf") {
              p = !1, $ = !1;
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
                p = !1, $ = !0;
                continue;
              }
            }
            f();
          }
          return $;
        })(c.treeNode);
      })() ? u.src : (() => {
        const l = u.tgt, d = (g) => {
          let h = g, m = !0, p;
          for (; m; ) {
            const $ = h;
            if ($.tag === "Leaf") {
              m = !1, p = !1;
              continue;
            }
            if ($.tag === "Node") {
              const y = t.compare(l)($._3);
              if (y === "LT") {
                h = $._5;
                continue;
              }
              if (y === "GT") {
                h = $._6;
                continue;
              }
              if (y === "EQ") {
                m = !1, p = !0;
                continue;
              }
            }
            f();
          }
          return p;
        }, _ = u.src;
        return d(c.treeNode) && !((h) => {
          let m = h, p = !0, $;
          for (; p; ) {
            const y = m;
            if (y.tag === "Leaf") {
              p = !1, $ = !1;
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
                p = !1, $ = !0;
                continue;
              }
            }
            f();
          }
          return $;
        })(c.treeNode);
      })() ? u.tgt : u.src) ? u.tgt : u.src;
      if (Br(u.eid)(c.treeEdge)) {
        if (((_) => {
          let g = _, h = !0, m;
          for (; h; ) {
            const p = g;
            if (p.tag === "Leaf") {
              h = !1, m = !1;
              continue;
            }
            if (p.tag === "Node") {
              const $ = t.compare(a)(p._3);
              if ($ === "LT") {
                g = p._5;
                continue;
              }
              if ($ === "GT") {
                g = p._6;
                continue;
              }
              if ($ === "EQ") {
                h = !1, m = !0;
                continue;
              }
            }
            f();
          }
          return m;
        })(c.treeNode))
          return { ...s, st: c };
        const l = Da(t)(e)(a)(c);
        return { count: s.count + l.count | 0, st: l.st };
      }
      if ((() => {
        const l = (_) => {
          let g = _, h = !0, m;
          for (; h; ) {
            const p = g;
            if (p.tag === "Leaf") {
              h = !1, m = !1;
              continue;
            }
            if (p.tag === "Node") {
              const $ = t.compare(a)(p._3);
              if ($ === "LT") {
                g = p._5;
                continue;
              }
              if ($ === "GT") {
                g = p._6;
                continue;
              }
              if ($ === "EQ") {
                h = !1, m = !0;
                continue;
              }
            }
            f();
          }
          return m;
        }, d = u.tgt;
        return !l(c.treeNode) && (() => {
          const g = (($) => {
            let y = $, v = !0, N;
            for (; v; ) {
              const T = y;
              if (T.tag === "Leaf") {
                v = !1, N = x;
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
                  v = !1, N = J("Just", T._4);
                  continue;
                }
              }
              f();
            }
            return N;
          })(c.layer), h = u.src, p = (($) => {
            let y = $, v = !0, N;
            for (; v; ) {
              const T = y;
              if (T.tag === "Leaf") {
                v = !1, N = x;
                continue;
              }
              if (T.tag === "Node") {
                const b = t.compare(h)(T._3);
                if (b === "LT") {
                  y = T._5;
                  continue;
                }
                if (b === "GT") {
                  y = T._6;
                  continue;
                }
                if (b === "EQ") {
                  v = !1, N = J("Just", T._4);
                  continue;
                }
              }
              f();
            }
            return N;
          })(c.layer);
          if (g.tag === "Nothing") {
            if (p.tag === "Nothing")
              return u.delta === 0;
            if (p.tag === "Just")
              return u.delta === -p._1;
            f();
          }
          if (g.tag === "Just") {
            if (p.tag === "Nothing")
              return u.delta === (g._1 - 0 | 0);
            if (p.tag === "Just")
              return u.delta === (g._1 - p._1 | 0);
          }
          f();
        })();
      })()) {
        const l = Da(t)(e)(a)({ ...c, treeEdge: K(nt)(u.eid)()(c.treeEdge) });
        return { count: s.count + l.count | 0, st: l.st };
      }
      return { ...s, st: c };
    })({ count: 1, st: i })(lt((s) => (n.eq(s.src)(r) || n.eq(s.tgt)(r)) && !Br(s.eid)(i.edgeVisited), e));
  };
}, Ju = (t) => (n) => (e) => (r) => {
  const o = r.src, s = ((m) => {
    let p = m, $ = !0, y;
    for (; $; ) {
      const v = p;
      if (v.tag === "Leaf") {
        $ = !1, y = x;
        continue;
      }
      if (v.tag === "Node") {
        const N = t.compare(o)(v._3);
        if (N === "LT") {
          p = v._5;
          continue;
        }
        if (N === "GT") {
          p = v._6;
          continue;
        }
        if (N === "EQ") {
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
    let p = m, $ = !0, y;
    for (; $; ) {
      const v = p;
      if (v.tag === "Leaf") {
        $ = !1, y = x;
        continue;
      }
      if (v.tag === "Node") {
        const N = t.compare(c)(v._3);
        if (N === "LT") {
          p = v._5;
          continue;
        }
        if (N === "GT") {
          p = v._6;
          continue;
        }
        if (N === "EQ") {
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
    let p = m, $ = !0, y;
    for (; $; ) {
      const v = p;
      if (v.tag === "Leaf") {
        $ = !1, y = x;
        continue;
      }
      if (v.tag === "Node") {
        const N = t.compare(e)(v._3);
        if (N === "LT") {
          p = v._5;
          continue;
        }
        if (N === "GT") {
          p = v._6;
          continue;
        }
        if (N === "EQ") {
          $ = !1, y = J("Just", v._4);
          continue;
        }
      }
      f();
    }
    return y;
  })(n.poID), h = (() => {
    if (g.tag === "Nothing")
      return 0;
    if (g.tag === "Just")
      return g._1;
    f();
  })();
  return (() => {
    const m = r.src, $ = ((y) => {
      let v = y, N = !0, T;
      for (; N; ) {
        const b = v;
        if (b.tag === "Leaf") {
          N = !1, T = x;
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
            N = !1, T = J("Just", b._4);
            continue;
          }
        }
        f();
      }
      return T;
    })(n.lowestPoID);
    return (() => {
      if ($.tag === "Nothing")
        return 0 <= h;
      if ($.tag === "Just")
        return $._1 <= h;
      f();
    })() && (() => {
      const y = r.tgt;
      return h <= u && (() => {
        const N = ((T) => {
          let b = T, L = !0, E;
          for (; L; ) {
            const C = b;
            if (C.tag === "Leaf") {
              L = !1, E = x;
              continue;
            }
            if (C.tag === "Node") {
              const I = t.compare(y)(C._3);
              if (I === "LT") {
                b = C._5;
                continue;
              }
              if (I === "GT") {
                b = C._6;
                continue;
              }
              if (I === "EQ") {
                L = !1, E = J("Just", C._4);
                continue;
              }
            }
            f();
          }
          return E;
        })(n.lowestPoID);
        return (() => {
          if (N.tag === "Nothing")
            return 0 <= h;
          if (N.tag === "Just")
            return N._1 <= h;
          f();
        })() && h <= d;
      })();
    })();
  })() ? u >= d : u < d;
}, Zx = (t) => {
  const n = mn(t)(Xt);
  return (e) => ({
    layer: n(D((r) => k(r, 0))(e)),
    treeNode: B,
    treeEdge: B,
    poID: B,
    lowestPoID: B,
    cutvalue: B,
    postOrder: 1,
    edgeVisited: B
  });
}, tw = (t) => (n) => (e) => w((r) => (o) => {
  if ((() => {
    const _ = o.src, g = (p) => {
      let $ = p, y = !0, v;
      for (; y; ) {
        const N = $;
        if (N.tag === "Leaf") {
          y = !1, v = !1;
          continue;
        }
        if (N.tag === "Node") {
          const T = t.compare(_)(N._3);
          if (T === "LT") {
            $ = N._5;
            continue;
          }
          if (T === "GT") {
            $ = N._6;
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
    }, h = o.tgt, m = (p) => {
      let $ = p, y = !0, v;
      for (; y; ) {
        const N = $;
        if (N.tag === "Leaf") {
          y = !1, v = !1;
          continue;
        }
        if (N.tag === "Node") {
          const T = t.compare(h)(N._3);
          if (T === "LT") {
            $ = N._5;
            continue;
          }
          if (T === "GT") {
            $ = N._6;
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
    let g = _, h = !0, m;
    for (; h; ) {
      const p = g;
      if (p.tag === "Leaf") {
        h = !1, m = x;
        continue;
      }
      if (p.tag === "Node") {
        const $ = t.compare(i)(p._3);
        if ($ === "LT") {
          g = p._5;
          continue;
        }
        if ($ === "GT") {
          g = p._6;
          continue;
        }
        if ($ === "EQ") {
          h = !1, m = J("Just", p._4);
          continue;
        }
      }
      f();
    }
    return m;
  })(e.layer), c = o.src, l = ((_) => {
    let g = _, h = !0, m;
    for (; h; ) {
      const p = g;
      if (p.tag === "Leaf") {
        h = !1, m = x;
        continue;
      }
      if (p.tag === "Node") {
        const $ = t.compare(c)(p._3);
        if ($ === "LT") {
          g = p._5;
          continue;
        }
        if ($ === "GT") {
          g = p._6;
          continue;
        }
        if ($ === "EQ") {
          h = !1, m = J("Just", p._4);
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
})({ edge: x, slack: 1e9 })(n).edge, nw = (t) => {
  const n = mn(t)(Xt);
  return (e) => (r) => {
    const o = w((i) => (s) => Ba(i)((() => {
      const c = ((a) => {
        let l = a, d = !0, _;
        for (; d; ) {
          const g = l;
          if (g.tag === "Leaf") {
            d = !1, _ = x;
            continue;
          }
          if (g.tag === "Node") {
            const h = t.compare(s)(g._3);
            if (h === "LT") {
              l = g._5;
              continue;
            }
            if (h === "GT") {
              l = g._6;
              continue;
            }
            if (h === "EQ") {
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
    return n(D((i) => k(
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
}, M1 = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = w((u) => (c) => {
      const a = M1(t)(e)(n.eq(c.src)(r) ? c.tgt : c.src)({ ...u.st, edgeVisited: K(nt)(c.eid)()(u.st.edgeVisited) });
      return { lowest: Ba(u.lowest)(a.lowest), st: a.st };
    })({ lowest: 1e9, st: o })(lt(
      (u) => Br(u.eid)(o.treeEdge) && (n.eq(u.src)(r) || n.eq(u.tgt)(r)) && !Br(u.eid)(o.edgeVisited),
      e
    )), s = Ba(i.lowest)(i.st.postOrder);
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
}, K1 = (t) => {
  const n = M1(t);
  return (e) => (r) => (o) => 0 < e.length ? n(r)(e[0])({ ...o, edgeVisited: B, postOrder: 1, poID: B, lowestPoID: B }).st : o;
}, ew = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => lt((i) => Br(i.eid)(r.treeEdge) && (n.eq(i.src)(o) || n.eq(i.tgt)(o)), e);
}, rw = (t) => (n) => un((e) => {
  const r = Ha(e.eid)(n.cutvalue);
  return Br(e.eid)(n.treeEdge) && (() => {
    if (r.tag === "Nothing")
      return !1;
    if (r.tag === "Just")
      return r._1 < -1e-10;
    f();
  })();
})(t), j1 = (t) => {
  const n = Da(t);
  return (e) => (r) => (o) => {
    const i = 0 < e.length ? J("Just", e[0]) : x;
    if (i.tag === "Nothing")
      return o;
    if (i.tag === "Just") {
      const s = n(r)(i._1)({ ...o, edgeVisited: B, treeNode: B, treeEdge: B });
      if (s.count >= e.length)
        return s.st;
      const u = tw(t)(r)(s.st);
      if (u.tag === "Nothing")
        return s.st;
      if (u.tag === "Just") {
        const c = u._1.tgt, l = ((p) => {
          let $ = p, y = !0, v;
          for (; y; ) {
            const N = $;
            if (N.tag === "Leaf") {
              y = !1, v = x;
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
                y = !1, v = J("Just", N._4);
                continue;
              }
            }
            f();
          }
          return v;
        })(s.st.layer), d = u._1.src, g = ((p) => {
          let $ = p, y = !0, v;
          for (; y; ) {
            const N = $;
            if (N.tag === "Leaf") {
              y = !1, v = x;
              continue;
            }
            if (N.tag === "Node") {
              const T = t.compare(d)(N._3);
              if (T === "LT") {
                $ = N._5;
                continue;
              }
              if (T === "GT") {
                $ = N._6;
                continue;
              }
              if (T === "EQ") {
                y = !1, v = J("Just", N._4);
                continue;
              }
            }
            f();
          }
          return v;
        })(s.st.layer), h = (() => {
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
          const p = u._1.tgt;
          return ((y) => {
            let v = y, N = !0, T;
            for (; N; ) {
              const b = v;
              if (b.tag === "Leaf") {
                N = !1, T = !1;
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
                  N = !1, T = !0;
                  continue;
                }
              }
              f();
            }
            return T;
          })(s.st.treeNode);
        })() ? -h : h;
        return j1(t)(e)(r)({
          ...s.st,
          layer: w((p) => ($) => ((v) => {
            let N = v, T = !0, b;
            for (; T; ) {
              const L = N;
              if (L.tag === "Leaf") {
                T = !1, b = !1;
                continue;
              }
              if (L.tag === "Node") {
                const E = t.compare($)(L._3);
                if (E === "LT") {
                  N = L._5;
                  continue;
                }
                if (E === "GT") {
                  N = L._6;
                  continue;
                }
                if (E === "EQ") {
                  T = !1, b = !0;
                  continue;
                }
              }
              f();
            }
            return b;
          })(s.st.treeNode) ? K(t)($)((() => {
            const v = ((N) => {
              let T = N, b = !0, L;
              for (; b; ) {
                const E = T;
                if (E.tag === "Leaf") {
                  b = !1, L = x;
                  continue;
                }
                if (E.tag === "Node") {
                  const C = t.compare($)(E._3);
                  if (C === "LT") {
                    T = E._5;
                    continue;
                  }
                  if (C === "GT") {
                    T = E._6;
                    continue;
                  }
                  if (C === "EQ") {
                    b = !1, L = J("Just", E._4);
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
          })())(p) : p)(s.st.layer)(e)
        });
      }
    }
    f();
  };
}, ow = (t) => (n) => (e) => (r) => w((o) => (i) => {
  if (Ju(t)(r)(i.src)(e) && !Ju(t)(r)(i.tgt)(e)) {
    const s = i.tgt, c = ((g) => {
      let h = g, m = !0, p;
      for (; m; ) {
        const $ = h;
        if ($.tag === "Leaf") {
          m = !1, p = x;
          continue;
        }
        if ($.tag === "Node") {
          const y = t.compare(s)($._3);
          if (y === "LT") {
            h = $._5;
            continue;
          }
          if (y === "GT") {
            h = $._6;
            continue;
          }
          if (y === "EQ") {
            m = !1, p = J("Just", $._4);
            continue;
          }
        }
        f();
      }
      return p;
    })(r.layer), a = i.src, d = ((g) => {
      let h = g, m = !0, p;
      for (; m; ) {
        const $ = h;
        if ($.tag === "Leaf") {
          m = !1, p = x;
          continue;
        }
        if ($.tag === "Node") {
          const y = t.compare(a)($._3);
          if (y === "LT") {
            h = $._5;
            continue;
          }
          if (y === "GT") {
            h = $._6;
            continue;
          }
          if (y === "EQ") {
            m = !1, p = J("Just", $._4);
            continue;
          }
        }
        f();
      }
      return p;
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
})({ edge: x, slack: 1e9 })(n).edge, iw = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => (i) => {
    const s = i.tgt, u = i.src;
    return w((c) => (a) => {
      if ((() => {
        const l = Ha(a.eid)(r.cutvalue);
        if (l.tag === "Just")
          return !0;
        if (l.tag === "Nothing")
          return !1;
        f();
      })()) {
        const l = Ha(a.eid)(r.cutvalue), d = (() => {
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
}, sw = (t) => {
  const n = iw(t);
  return (e) => (r) => (o) => {
    const i = (u, c, a) => {
      const d = ((_) => {
        let g = _, h = !0, m;
        for (; h; ) {
          const p = g;
          if (p.tag === "Leaf") {
            h = !1, m = x;
            continue;
          }
          if (p.tag === "Node") {
            const $ = t.compare(u)(p._3);
            if ($ === "LT") {
              g = p._5;
              continue;
            }
            if ($ === "GT") {
              g = p._6;
              continue;
            }
            if ($ === "EQ") {
              h = !1, m = J("Just", p._4);
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
        const g = a, h = l, p = ((y) => {
          let v = y, N = !0, T;
          for (; N; ) {
            const b = v;
            if (b.tag === "Leaf") {
              N = !1, T = x;
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
                N = !1, T = J("Just", b._4);
                continue;
              }
            }
            f();
          }
          return T;
        })(g.unknown), $ = (() => {
          if (p.tag === "Nothing")
            return [];
          if (p.tag === "Just")
            return p._1;
          f();
        })();
        if ($.length === 1) {
          const y = t.Eq0().eq($[0].src)(h) ? $[0].tgt : $[0].src;
          a = {
            unknown: i(h, $[0], i(y, $[0], g.unknown)),
            cutvalue: K(nt)($[0].eid)(n(e)(g)(h)($[0]))(g.cutvalue)
          }, l = y;
          continue;
        }
        d = !1, _ = g;
      }
      return _;
    })(r)(o);
  };
}, Z1 = (t) => {
  const n = t.Eq0(), e = t.Eq0(), r = { eq: (a) => (l) => a.delta === l.delta && a.eid === l.eid && e.eq(a.src)(l.src) && n.eq(a.tgt)(l.tgt) && a.weight === l.weight }, o = {
    compare: (a) => (l) => {
      const d = nt.compare(a.delta)(l.delta);
      if (d === "LT" || d === "GT" || d !== "EQ")
        return d;
      const _ = nt.compare(a.eid)(l.eid);
      if (_ === "LT" || _ === "GT" || _ !== "EQ")
        return _;
      const g = t.compare(a.src)(l.src);
      if (g === "LT" || g === "GT" || g !== "EQ")
        return g;
      const h = t.compare(a.tgt)(l.tgt);
      if (h === "LT" || h === "GT" || h !== "EQ")
        return h;
      const m = ot.compare(a.weight)(l.weight);
      return m === "LT" || m === "GT" || m !== "EQ" ? m : te;
    },
    Eq0: () => r
  }, i = w((a) => (l) => K(o)(l)()(a))(B), s = ew(t), u = mn(t)(Xt), c = sw(t);
  return (a) => (l) => (d) => {
    const _ = {
      unknown: u(D((g) => k(
        g,
        Ot(xe.foldr, i(s(l)(d)(g)))
      ))(a)),
      cutvalue: B
    };
    return {
      ...d,
      cutvalue: w(c(l))(_)(lt(
        (g) => {
          const m = ((p) => {
            let $ = p, y = !0, v;
            for (; y; ) {
              const N = $;
              if (N.tag === "Leaf") {
                y = !1, v = x;
                continue;
              }
              if (N.tag === "Node") {
                const T = t.compare(g)(N._3);
                if (T === "LT") {
                  $ = N._5;
                  continue;
                }
                if (T === "GT") {
                  $ = N._6;
                  continue;
                }
                if (T === "EQ") {
                  y = !1, v = J("Just", N._4);
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
}, uw = (t) => {
  const n = K1(t), e = Z1(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const c = { ...u, treeEdge: K(nt)(s.eid)()(gi(nt)(i.eid)(u.treeEdge)) }, a = s.tgt, d = (($) => {
      let y = $, v = !0, N;
      for (; v; ) {
        const T = y;
        if (T.tag === "Leaf") {
          v = !1, N = x;
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
            v = !1, N = J("Just", T._4);
            continue;
          }
        }
        f();
      }
      return N;
    })(c.layer), _ = s.src, h = (($) => {
      let y = $, v = !0, N;
      for (; v; ) {
        const T = y;
        if (T.tag === "Leaf") {
          v = !1, N = x;
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
            v = !1, N = J("Just", T._4);
            continue;
          }
        }
        f();
      }
      return N;
    })(c.layer), m = (() => {
      if (d.tag === "Nothing") {
        if (h.tag === "Nothing")
          return -s.delta;
        if (h.tag === "Just")
          return -h._1 - s.delta | 0;
        f();
      }
      if (d.tag === "Just") {
        if (h.tag === "Nothing")
          return (d._1 - 0 | 0) - s.delta | 0;
        if (h.tag === "Just")
          return (d._1 - h._1 | 0) - s.delta | 0;
      }
      f();
    })(), p = Ju(t)(c)(s.tgt)(i) ? m : -m;
    return e(r)(o)(n(r)(o)({
      ...c,
      layer: w(($) => (y) => Ju(t)(c)(y)(i) ? $ : K(t)(y)((() => {
        const N = ((T) => {
          let b = T, L = !0, E;
          for (; L; ) {
            const C = b;
            if (C.tag === "Leaf") {
              L = !1, E = x;
              continue;
            }
            if (C.tag === "Node") {
              const I = t.compare(y)(C._3);
              if (I === "LT") {
                b = C._5;
                continue;
              }
              if (I === "GT") {
                b = C._6;
                continue;
              }
              if (I === "EQ") {
                L = !1, E = J("Just", C._4);
                continue;
              }
            }
            f();
          }
          return E;
        })(c.layer);
        if (N.tag === "Nothing")
          return 0 + p | 0;
        if (N.tag === "Just")
          return N._1 + p | 0;
        f();
      })())($))(c.layer)(r)
    }));
  };
}, cw = (t) => {
  const n = uw(t);
  return (e) => (r) => (o) => (i) => ((u) => (c) => {
    let a = u, l = c, d = !0, _;
    for (; d; ) {
      const g = a, h = l;
      if (g === 0) {
        d = !1, _ = h;
        continue;
      }
      const m = rw(o)(h);
      if (m.tag === "Nothing") {
        d = !1, _ = h;
        continue;
      }
      if (m.tag === "Just") {
        const p = ow(t)(o)(m._1)(h);
        if (p.tag === "Nothing") {
          d = !1, _ = h;
          continue;
        }
        if (p.tag === "Just") {
          a = g - 1 | 0, l = n(r)(o)(m._1)(p._1)(h);
          continue;
        }
      }
      f();
    }
    return _;
  })(e)(i);
}, aw = (t) => {
  const n = Z1(t), e = K1(t), r = j1(t);
  return (o) => (i) => (s) => n(o)(i)(e(o)(i)(r(o)(i)(s)));
}, Dl = (t) => (n) => w((e) => (r) => Gt(t)(xn)(n(r))([r])(e))(B), fw = (t) => {
  const n = mn(t)(Xt);
  return (e) => (r) => (o) => {
    const i = (c) => (a) => (l) => (d) => {
      let _ = c, g = a, h = l, m = d, p = !0, $;
      for (; p; ) {
        const y = _, v = g, N = h, T = m, b = Dt((L) => x, (L) => (E) => J("Just", { head: L, tail: E }), N);
        if (b.tag === "Nothing") {
          p = !1, $ = T;
          continue;
        }
        if (b.tag === "Just") {
          const L = b._1.head, C = ((G) => {
            let H = G, M = !0, Z;
            for (; M; ) {
              const Y = H;
              if (Y.tag === "Leaf") {
                M = !1, Z = x;
                continue;
              }
              if (Y.tag === "Node") {
                const q = t.compare(L)(Y._3);
                if (q === "LT") {
                  H = Y._5;
                  continue;
                }
                if (q === "GT") {
                  H = Y._6;
                  continue;
                }
                if (q === "EQ") {
                  M = !1, Z = J("Just", Y._4);
                  continue;
                }
              }
              f();
            }
            return Z;
          })(T.layer), I = (() => {
            if (C.tag === "Nothing")
              return 0;
            if (C.tag === "Just")
              return C._1;
            f();
          })(), z = w((G) => (H) => {
            const M = H.tgt, Y = ((A) => {
              let P = A, W = !0, R;
              for (; W; ) {
                const Q = P;
                if (Q.tag === "Leaf") {
                  W = !1, R = x;
                  continue;
                }
                if (Q.tag === "Node") {
                  const X = t.compare(M)(Q._3);
                  if (X === "LT") {
                    P = Q._5;
                    continue;
                  }
                  if (X === "GT") {
                    P = Q._6;
                    continue;
                  }
                  if (X === "EQ") {
                    W = !1, R = J("Just", Q._4);
                    continue;
                  }
                }
                f();
              }
              return R;
            })(G.incident), q = (() => {
              if (Y.tag === "Nothing")
                return -1;
              if (Y.tag === "Just")
                return Y._1 - 1 | 0;
              f();
            })();
            return {
              st: {
                ...G.st,
                layer: K(t)(H.tgt)(Mx((() => {
                  const A = H.tgt, W = ((R) => {
                    let Q = R, X = !0, tt;
                    for (; X; ) {
                      const V = Q;
                      if (V.tag === "Leaf") {
                        X = !1, tt = x;
                        continue;
                      }
                      if (V.tag === "Node") {
                        const O = t.compare(A)(V._3);
                        if (O === "LT") {
                          Q = V._5;
                          continue;
                        }
                        if (O === "GT") {
                          Q = V._6;
                          continue;
                        }
                        if (O === "EQ") {
                          X = !1, tt = J("Just", V._4);
                          continue;
                        }
                      }
                      f();
                    }
                    return tt;
                  })(G.st.layer);
                  if (W.tag === "Nothing")
                    return 0;
                  if (W.tag === "Just")
                    return W._1;
                  f();
                })())(I + H.delta | 0))(G.st.layer)
              },
              incident: K(t)(H.tgt)(q)(G.incident),
              queue: q === 0 ? [...G.queue, H.tgt] : G.queue
            };
          })({ st: T, incident: v, queue: b._1.tail })((() => {
            const H = ((M) => {
              let Z = M, Y = !0, q;
              for (; Y; ) {
                const A = Z;
                if (A.tag === "Leaf") {
                  Y = !1, q = x;
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
                    Y = !1, q = J("Just", A._4);
                    continue;
                  }
                }
                f();
              }
              return q;
            })(y);
            if (H.tag === "Nothing")
              return [];
            if (H.tag === "Just")
              return H._1;
            f();
          })());
          _ = y, g = z.incident, h = z.queue, m = z.st;
          continue;
        }
        f();
      }
      return $;
    }, s = Dl(t)((c) => c.tgt)(r), u = n(D((c) => k(
      c,
      (() => {
        const l = ((d) => {
          let _ = d, g = !0, h;
          for (; g; ) {
            const m = _;
            if (m.tag === "Leaf") {
              g = !1, h = x;
              continue;
            }
            if (m.tag === "Node") {
              const p = t.compare(c)(m._3);
              if (p === "LT") {
                _ = m._5;
                continue;
              }
              if (p === "GT") {
                _ = m._6;
                continue;
              }
              if (p === "EQ") {
                g = !1, h = J("Just", m._4);
                continue;
              }
            }
            f();
          }
          return h;
        })(s);
        if (l.tag === "Nothing")
          return 0;
        if (l.tag === "Just")
          return l._1.length;
        f();
      })()
    ))(e));
    return i(Dl(t)((c) => c.src)(r))(u)(lt(
      (c) => {
        const l = ((d) => {
          let _ = d, g = !0, h;
          for (; g; ) {
            const m = _;
            if (m.tag === "Leaf") {
              g = !1, h = x;
              continue;
            }
            if (m.tag === "Node") {
              const p = t.compare(c)(m._3);
              if (p === "LT") {
                _ = m._5;
                continue;
              }
              if (p === "GT") {
                _ = m._6;
                continue;
              }
              if (p === "EQ") {
                g = !1, h = J("Just", m._4);
                continue;
              }
            }
            f();
          }
          return h;
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
}, lw = (t) => {
  const n = Zx(t), e = fw(t), r = aw(t), o = cw(t);
  return (i) => (s) => {
    const u = e(i)(s)(n(i));
    return s.length === 0 ? u.layer : o(4 * i.length | 0)(i)(s)(r(i)(s)(u)).layer;
  };
}, t_ = (t) => {
  const n = nw(t), e = lw(t), r = Kx(t);
  return (o) => (i) => {
    if (o.length === 0)
      return B;
    if (o.length < 40)
      return n(o)(e(o)(i));
    const s = r(o)(i);
    return n(o)(jx(t)(s.removed)(e(s.coreNodes)(s.coreEdges)));
  };
}, n_ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = nt.compare(t)(s._3);
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
}, za = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, gw = /* @__PURE__ */ t_(nt), rs = (t) => (n) => ({ ...n, edges: [...n.edges, { src: t.src, tgt: t.tgt, delta: t.delta, weight: t.weight, eid: n.nextEid }], nextEid: n.nextEid + 1 | 0 }), dw = (t) => (n) => (e) => {
  if (e.cGroup.tag === "Nothing")
    return n;
  if (e.cGroup.tag === "Just") {
    const r = U((() => {
      const o = n_(e.cGroup._1)(t);
      if (o.tag === "Nothing")
        return 0;
      if (o.tag === "Just")
        return o._1;
      f();
    })());
    return Le(e.id)((o) => ({ ...o, hitbox: { ...o.hitbox, x: r + o.cGroupOffset.x } }))(n);
  }
  f();
}, _w = (t) => (n) => ({
  ...n,
  cGraph: w(dw(t))(n.cGraph)((() => {
    const e = n.cGraph;
    return xt((r) => an(r)(e.cNodes))(e.cNodeOrder);
  })())
}), hw = (t) => (n) => (e) => (r) => (o) => {
  const i = ln(oc(n.cGroupOffset.x - t.cGroupOffset.x));
  return rs({ src: o.nextNodeId, tgt: r, delta: za(0)(-i), weight: 1 })(rs({ src: o.nextNodeId, tgt: e, delta: za(0)(i), weight: 1 })({
    ...o,
    nodes: [...o.nodes, o.nextNodeId],
    nextNodeId: o.nextNodeId + 1 | 0
  }));
}, pw = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = za(0)(ln(oc(e.cGroupOffset.x + e.hitbox.width + (n.direction === "LEFT" || n.direction === "RIGHT" ? n.spacingsHandler.horizontalSpacing(e)(r) : n.spacingsHandler.verticalSpacing(e)(r)) - r.cGroupOffset.x)));
  return t.sameEdgeVerticalSegments(e)(r) ? hw(e)(r)(o)(i)(s) : rs({ src: o, tgt: i, delta: u, weight: t.vsLNodePair(e)(r) ? 2 : 1 })(s);
}, mw = (t) => (n) => (e) => (r) => (o) => {
  const i = an(o)(n.cGraph.cNodes);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just")
    return (e.cGroup.tag === "Nothing" ? i._1.cGroup.tag === "Nothing" : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" && e.cGroup._1 === i._1.cGroup._1) ? r : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" ? pw(t)(n)(e)(i._1)(e.cGroup._1)(i._1.cGroup._1)(r) : r;
  f();
}, $w = (t) => (n) => (e) => (r) => w(mw(t)(n)(r))(e)(r.constraints), yw = (t) => (n) => rs({ src: n.srcGroup, tgt: n.tgtGroup, delta: n.delta, weight: n.weight })(t), vw = (t) => {
  const n = w((o) => (i) => Gt(nt)(Tn)(i.tgt)(1)(o))(B)(t.edges), e = lt(
    (o) => {
      const i = n_(o)(n);
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
  return w((o) => (i) => rs({ src: r, tgt: i, delta: 1, weight: 0 })(o))({ ...t, nodes: [...t.nodes, r], nextNodeId: r + 1 | 0 })(e);
}, xw = (t) => (n) => {
  const e = vw(w(yw)(w($w(t)(n))({
    nodes: n.cGraph.cGroupOrder,
    edges: [],
    nextNodeId: n.cGraph.nextCGroupId,
    nextEid: 0
  })((() => {
    const r = n.cGraph;
    return xt((o) => an(o)(r.cNodes))(r.cNodeOrder);
  })()))(t.edgeLengthEdges(n.cGraph)));
  return { nodes: e.nodes, edges: e.edges };
}, ww = (t) => (n) => {
  const e = xw(t)(n);
  return _w(gw(e.nodes)(e.edges))(n);
}, e_ = (t) => t, _n = /* @__PURE__ */ e_("H"), hn = /* @__PURE__ */ e_("V"), Nw = (t) => k(t._2, t._1), r_ = (t) => ({ ...t, position: k(t.position._2, t.position._1), size: k(t.size._2, t.size._1) }), Tw = (t) => ({
  start: k(t.start._2, t.start._1),
  end: k(t.end._2, t.end._1),
  direction: (() => {
    if (t.direction === "H")
      return hn;
    if (t.direction === "V")
      return _n;
    f();
  })()
}), o_ = (t) => ({ ...t, segments: D(Tw)(t.segments), bends: D(Nw)(t.bends) }), Jw = (t) => ({ nodes: D(r_)(t.nodes), edges: t.edges, paths: D(o_)(t.paths), ports: t.ports }), bw = { nodeNode: 8, edgeNode: 4, edgeEdge: 10 }, kw = (t) => (n) => ({
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
}), Lw = (t) => (n) => ww(n), Sw = (t) => (n) => (e) => {
  const r = Jw(e), o = Vx(r), i = Wx(o)(V1(r)), s = Ox(q1(u0)(_x({
    ...px(o.cGraph),
    compactionAlgorithm: J("Just", Lw()(i)),
    constraintAlgorithm: J("Just", Lx(n.edgeEdge)),
    spacingsHandler: kw(n)(i)
  })).cGraph)({ nodes: r.nodes, edges: r.edges, paths: r.paths });
  return { nodes: D(r_)(s.nodes), edges: D(o_)(s.edges) };
}, i_ = (t) => t, Oo = /* @__PURE__ */ mn(nt)(Xt), Wt = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = nt.compare(t)(s._3);
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
}, zl = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, mt = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, yt = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Zo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Cw = (t) => (n) => {
  const e = nt.compare(t._1)(n._1);
  return e === "LT" ? Bn : e === "GT" ? Hn : nt.compare(t._2)(n._2);
}, Vo = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ew = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Xe);
  return (n) => t(de("IterNode", n, Oe));
})(), Aw = (t) => t, Ql = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Pw = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Ws = /* @__PURE__ */ i_("Regular"), Os = /* @__PURE__ */ i_("Critical"), s_ = (t) => (n) => {
  const e = w((s) => (u) => K(F)(u.node)(u)(s))(B)(n), r = 1.25 * U(4), o = (s, u, c) => ((l) => (d) => (_) => {
    let g = l, h = d, m = _, p = !0, $;
    for (; p; ) {
      const y = g, v = h, N = m;
      if (N.critical) {
        p = !1, $ = N;
        continue;
      }
      const T = Dt((L) => x, (L) => (E) => J("Just", { head: L, tail: E }), y), b = Dt((L) => x, (L) => (E) => J("Just", { head: L, tail: E }), v);
      if (T.tag === "Just" && b.tag === "Just") {
        const L = T._1.head > b._1.head - s && T._1.head < b._1.head + s ? { ...N, critical: !0 } : T._1.head > b._1.head - r && T._1.head < b._1.head + r ? { ...N, conflicts: N.conflicts + 1 | 0 } : N;
        if (L.critical) {
          p = !1, $ = L;
          continue;
        }
        if (T._1.head <= b._1.head) {
          g = T._1.tail, h = v, m = L;
          continue;
        }
        g = y, h = b._1.tail, m = L;
        continue;
      }
      p = !1, $ = N;
    }
    return $;
  })(u)(c)({ conflicts: 0, critical: !1 }), i = (s, u, c) => {
    if (yt(w(yt)(-1e18)(u.incoming))(w(yt)(-1e18)(u.outgoing)) - mt(w(mt)(1e18)(u.incoming))(w(mt)(1e18)(u.outgoing)) < 1e-3 || yt(w(yt)(-1e18)(c.incoming))(w(yt)(-1e18)(c.outgoing)) - mt(w(mt)(1e18)(c.incoming))(w(mt)(1e18)(c.outgoing)) < 1e-3)
      return [];
    const a = o(s, u.outgoing, c.incoming), l = o(s, c.outgoing, u.incoming);
    if (a.critical || l.critical)
      return [...a.critical ? [{ src: c.id, tgt: u.id, weight: 1, kind: Os }] : [], ...l.critical ? [{ src: u.id, tgt: c.id, weight: 1, kind: Os }] : []];
    const d = mt(w(mt)(1e18)(u.incoming))(w(mt)(1e18)(u.outgoing)), _ = yt(w(yt)(-1e18)(u.incoming))(w(yt)(-1e18)(u.outgoing)), g = mt(w(mt)(1e18)(c.incoming))(w(mt)(1e18)(c.outgoing)), h = yt(w(yt)(-1e18)(c.incoming))(w(yt)(-1e18)(c.outgoing)), m = (1 * a.conflicts | 0) + (16 * (w(($) => (y) => y > h ? $ : y >= g ? $ + 1 | 0 : $)(0)(u.outgoing) + w(($) => (y) => y > _ ? $ : y >= d ? $ + 1 | 0 : $)(0)(c.incoming) | 0) | 0) | 0, p = (1 * l.conflicts | 0) + (16 * (w(($) => (y) => y > _ ? $ : y >= d ? $ + 1 | 0 : $)(0)(c.outgoing) + w(($) => (y) => y > h ? $ : y >= g ? $ + 1 | 0 : $)(0)(u.incoming) | 0) | 0) | 0;
    return m < p ? [{ src: u.id, tgt: c.id, weight: p - m | 0, kind: Ws }] : m > p ? [{ src: c.id, tgt: u.id, weight: m - p | 0, kind: Ws }] : m > 0 ? [{ src: u.id, tgt: c.id, weight: 0, kind: Ws }, { src: c.id, tgt: u.id, weight: 0, kind: Ws }] : [];
  };
  return w((s) => (u) => w((c) => (a) => K(F)(a._1)(a._2)(c))(s)((() => {
    const c = w((G) => (H) => {
      const M = H.edge.from.node + "|" + (() => {
        if (H.edge.from.port.tag === "Just")
          return H.edge.from.port._1;
        if (H.edge.from.port.tag === "Nothing")
          return "_auto_" + H.edge.id;
        f();
      })(), Z = Ql(M)(G.entries);
      if (Z.tag === "Nothing")
        return {
          ...G,
          entries: K(F)(M)({
            id: 0,
            members: [H.edge.id],
            incoming: [H.fromPos._1],
            outgoing: [H.toPos._1],
            slot: 0,
            mark: 0,
            splitBy: x,
            splitPartner: x
          })(G.entries),
          order: [...G.order, M]
        };
      if (Z.tag === "Just")
        return {
          ...G,
          entries: K(F)(M)({
            ...Z._1,
            members: [...Z._1.members, H.edge.id],
            incoming: [...ar((Y) => Y < H.fromPos._1)(Z._1.incoming).init, H.fromPos._1, ...ar((Y) => Y <= H.fromPos._1)(Z._1.incoming).rest],
            outgoing: [...ar((Y) => Y < H.toPos._1)(Z._1.outgoing).init, H.toPos._1, ...ar((Y) => Y <= H.toPos._1)(Z._1.outgoing).rest]
          })(G.entries)
        };
      f();
    })({ entries: B, order: [] })(u._2), a = qt((G) => (H) => ({ ...H, id: G }))(xt((G) => Ql(G)(c.entries))(c.order));
    if (a.length === 0)
      return [];
    const l = w((G) => (H) => G.prev.tag === "Just" && H - G.prev._1 < 1e-9 ? G : { prev: J("Just", H), out: [...G.out, H] })({ prev: x, out: [] })(Ht(ot.compare)([
      ...vt(a)((G) => G.incoming),
      ...vt(a)((G) => G.outgoing)
    ])).out, d = l.length < 2 ? 0.2 * r : 0.2 * w((G) => (H) => {
      if (G.prev.tag === "Nothing")
        return { prev: J("Just", H), mn: G.mn };
      if (G.prev.tag === "Just")
        return { prev: J("Just", H), mn: mt(G.mn)(H - G.prev._1) };
      f();
    })({ prev: x, mn: 1e18 })(l).mn, _ = {
      segments: a,
      deps: (() => {
        const G = a.length;
        return vt(vt(Ut(0, G - 2 | 0))((H) => vt(Ut(H + 1 | 0, G - 1 | 0))((M) => [
          k(H, M)
        ])))((H) => H._1 >= 0 && H._1 < a.length ? H._2 >= 0 && H._2 < a.length ? i(d, a[H._1], a[H._2]) : [] : []);
      })()
    }, g = lt(
      (G) => {
        if (G.kind === "Critical")
          return !0;
        if (G.kind === "Regular")
          return !1;
        f();
      },
      _.deps
    ), h = (() => {
      if (g.length < 2)
        return _;
      const G = Oo((() => {
        const q = _.segments;
        return D((A) => k(A.id, A.mark))((() => {
          const A = q.length, P = (Q) => {
            let X = Q, tt = !0, V;
            for (; tt; ) {
              const O = X, j = un((rt) => {
                const et = Wt(rt)(O.inWeight);
                if (et.tag === "Nothing")
                  return !0;
                if (et.tag === "Just")
                  return et._1 === 0;
                f();
              })(O.remaining);
              if (j.tag === "Nothing") {
                tt = !1, V = O;
                continue;
              }
              if (j.tag === "Just") {
                const rt = j._1;
                X = {
                  ...O,
                  inWeight: w((et) => (ft) => Gt(nt)(Tn)(ft.tgt)(-ft.weight)(et))(O.inWeight)((() => {
                    const et = Wt(rt)(O.depsBySrc);
                    if (et.tag === "Nothing")
                      return [];
                    if (et.tag === "Just")
                      return et._1;
                    f();
                  })()),
                  marks: K(nt)(rt)(O.nextSource)(O.marks),
                  nextSource: O.nextSource + 1 | 0,
                  outWeight: w((et) => (ft) => Gt(nt)(Tn)(ft.src)(-ft.weight)(et))(O.outWeight)((() => {
                    const et = Wt(rt)(O.depsByTgt);
                    if (et.tag === "Nothing")
                      return [];
                    if (et.tag === "Just")
                      return et._1;
                    f();
                  })()),
                  remaining: lt((et) => et !== rt, O.remaining)
                };
                continue;
              }
              f();
            }
            return V;
          }, W = (Q) => {
            let X = Q, tt = !0, V;
            for (; tt; ) {
              const O = X, j = un((rt) => {
                const et = Wt(rt)(O.outWeight);
                if (et.tag === "Nothing")
                  return !0;
                if (et.tag === "Just")
                  return et._1 === 0;
                f();
              })(O.remaining);
              if (j.tag === "Nothing") {
                tt = !1, V = O;
                continue;
              }
              if (j.tag === "Just") {
                const rt = j._1;
                X = {
                  ...O,
                  inWeight: w((et) => (ft) => Gt(nt)(Tn)(ft.tgt)(-ft.weight)(et))(O.inWeight)((() => {
                    const et = Wt(rt)(O.depsBySrc);
                    if (et.tag === "Nothing")
                      return [];
                    if (et.tag === "Just")
                      return et._1;
                    f();
                  })()),
                  marks: K(nt)(rt)(O.nextSink)(O.marks),
                  nextSink: O.nextSink - 1 | 0,
                  outWeight: w((et) => (ft) => Gt(nt)(Tn)(ft.src)(-ft.weight)(et))(O.outWeight)((() => {
                    const et = Wt(rt)(O.depsByTgt);
                    if (et.tag === "Nothing")
                      return [];
                    if (et.tag === "Just")
                      return et._1;
                    f();
                  })()),
                  remaining: lt((et) => et !== rt, O.remaining)
                };
                continue;
              }
              f();
            }
            return V;
          };
          return ((Q) => {
            let X = Q, tt = !0, V;
            for (; tt; ) {
              const j = P(W(X));
              if (j.remaining.length === 0) {
                tt = !1, V = D((rt) => {
                  const et = Wt(rt.id)(j.marks), ft = (() => {
                    if (et.tag === "Nothing")
                      return rt.id;
                    if (et.tag === "Just")
                      return et._1;
                    f();
                  })();
                  return { ...rt, mark: ft < A ? (ft + A | 0) + 1 | 0 : ft };
                })(q);
                continue;
              }
              X = (() => {
                const rt = (ft) => {
                  const ct = Wt(ft)(j.outWeight), dt = Wt(ft)(j.inWeight);
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
                }, et = Ht((ft) => (ct) => nt.compare(rt(ct))(rt(ft)))(j.remaining);
                if (0 < et.length) {
                  const ft = et[0];
                  return {
                    ...j,
                    inWeight: w((ct) => (dt) => Gt(nt)(Tn)(dt.tgt)(-dt.weight)(ct))(j.inWeight)((() => {
                      const ct = Wt(ft)(j.depsBySrc);
                      if (ct.tag === "Nothing")
                        return [];
                      if (ct.tag === "Just")
                        return ct._1;
                      f();
                    })()),
                    marks: K(nt)(ft)(j.nextSource)(j.marks),
                    nextSource: j.nextSource + 1 | 0,
                    outWeight: w((ct) => (dt) => Gt(nt)(Tn)(dt.src)(-dt.weight)(ct))(j.outWeight)((() => {
                      const ct = Wt(ft)(j.depsByTgt);
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
            return V;
          })({
            remaining: D((Q) => Q.id)(q),
            marks: B,
            inWeight: w((Q) => (X) => Gt(nt)(Tn)(X.tgt)(X.weight)(Q))(B)(g),
            outWeight: w((Q) => (X) => Gt(nt)(Tn)(X.src)(X.weight)(Q))(B)(g),
            depsBySrc: w((Q) => (X) => Gt(nt)(xn)(X.src)([X])(Q))(B)(g),
            depsByTgt: w((Q) => (X) => Gt(nt)(xn)(X.tgt)([X])(Q))(B)(g),
            nextSink: A - 1 | 0,
            nextSource: A + 1 | 0
          });
        })());
      })()), H = lt(
        (q) => {
          const A = Wt(q.src)(G), P = Wt(q.tgt)(G);
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
      if (H.length === 0)
        return _;
      const M = w((q) => (A) => {
        if (ge(to)(A.src)(q.decisions) || ge(to)(A.tgt)(q.decisions))
          return q;
        const P = Wt(A.src)(q.segMap), W = Wt(A.tgt)(q.segMap);
        if (P.tag === "Just" && W.tag === "Just") {
          const R = (P._1.incoming.length + P._1.outgoing.length | 0) > 2 && (W._1.incoming.length + W._1.outgoing.length | 0) <= 2, Q = R ? W._1 : P._1;
          return {
            decisions: [...q.decisions, Q.id],
            segMap: K(nt)(Q.id)({ ...Q, splitBy: J("Just", R ? P._1.id : W._1.id) })(q.segMap)
          };
        }
        return q;
      })({ decisions: [], segMap: Oo(D((q) => k(q.id, q))(_.segments)) })(H), Z = M.segMap, Y = w((q) => (A) => {
        const P = mt(w(mt)(1e18)(A.incoming))(w(mt)(1e18)(A.outgoing)), W = yt(w(yt)(-1e18)(A.incoming))(w(yt)(-1e18)(A.outgoing)), R = lt(
          (O) => O.a.startPosition <= W && O.a.endPosition >= P,
          qt((O) => (j) => ({ i: O, a: j }))(q.freeAreas)
        );
        if (R.length === 0) {
          const O = {
            ...A,
            incoming: Ht(ot.compare)(A.incoming),
            outgoing: Ht(ot.compare)([(P + W) / 2]),
            splitPartner: J("Just", q.nextId)
          }, j = {
            id: q.nextId,
            incoming: Ht(ot.compare)([(P + W) / 2]),
            mark: 0,
            members: A.members,
            outgoing: Ht(ot.compare)(A.outgoing),
            slot: 0,
            splitBy: x,
            splitPartner: J("Just", A.id)
          };
          return {
            segMap: K(nt)(j.id)(j)(K(nt)(O.id)(O)(q.segMap)),
            freeAreas: q.freeAreas,
            nextId: q.nextId + 1 | 0
          };
        }
        const Q = 0 < R.length ? J("Just", R[0]) : x, X = (() => {
          if (Q.tag === "Nothing")
            return { i: 0, a: { startPosition: 0, endPosition: 0, size: 0 } };
          if (Q.tag === "Just") {
            if (R.length === 1)
              return Q._1;
            const O = D((j) => ({
              c: j,
              rating: (() => {
                const rt = (j.a.startPosition + j.a.endPosition) / 2, et = [rt], ft = [rt], ct = w((() => {
                  const Bt = q.segMap;
                  return (St) => (en) => {
                    const _t = Wt(en.tgt)(Bt);
                    if (_t.tag === "Nothing")
                      return St;
                    if (_t.tag === "Just") {
                      const bt = mt(w(mt)(1e18)(_t._1.incoming))(w(mt)(1e18)(_t._1.outgoing)), ht = yt(w(yt)(-1e18)(_t._1.incoming))(w(yt)(-1e18)(_t._1.outgoing)), $t = mt(w(mt)(1e18)(A.incoming))(w(mt)(1e18)(et)), st = (() => {
                        const It = yt(w(yt)(-1e18)(A.incoming))(w(yt)(-1e18)(et)), Pt = w((Kt) => (yn) => yn > ht ? Kt : yn >= bt ? Kt + 1 | 0 : Kt)(0)(et) + w((Kt) => (yn) => yn > It ? Kt : yn >= $t ? Kt + 1 | 0 : Kt)(0)(_t._1.incoming) | 0, ue = mt(w(mt)(1e18)(A.incoming))(w(mt)(1e18)(et)), qn = yt(w(yt)(-1e18)(A.incoming))(w(yt)(-1e18)(et)), Wn = mt(w(mt)(1e18)(_t._1.incoming))(w(mt)(1e18)(_t._1.outgoing)), Sn = yt(w(yt)(-1e18)(_t._1.incoming))(w(yt)(-1e18)(_t._1.outgoing)), Ye = w((Kt) => (yn) => yn > qn ? Kt : yn >= ue ? Kt + 1 | 0 : Kt)(0)(_t._1.outgoing) + w((Kt) => (yn) => yn > Sn ? Kt : yn >= Wn ? Kt + 1 | 0 : Kt)(0)(A.incoming) | 0;
                        return Pt === Ye ? Pt > 0 ? { ...St, deps: St.deps + 2 | 0, crossings: St.crossings + Pt | 0 } : St : { ...St, deps: St.deps + 1 | 0, crossings: St.crossings + Vo(Pt)(Ye) | 0 };
                      })(), gt = mt(w(mt)(1e18)(_t._1.incoming))(w(mt)(1e18)(_t._1.outgoing)), it = yt(w(yt)(-1e18)(_t._1.incoming))(w(yt)(-1e18)(_t._1.outgoing)), at = mt(w(mt)(1e18)(ft))(w(mt)(1e18)(A.outgoing)), Tt = yt(w(yt)(-1e18)(ft))(w(yt)(-1e18)(A.outgoing)), wt = w((It) => (Pt) => Pt > it ? It : Pt >= gt ? It + 1 | 0 : It)(0)(A.outgoing) + w((It) => (Pt) => Pt > Tt ? It : Pt >= at ? It + 1 | 0 : It)(0)(_t._1.incoming) | 0, Ft = mt(w(mt)(1e18)(ft))(w(mt)(1e18)(A.outgoing)), Vt = yt(w(yt)(-1e18)(ft))(w(yt)(-1e18)(A.outgoing)), se = mt(w(mt)(1e18)(_t._1.incoming))(w(mt)(1e18)(_t._1.outgoing)), zn = yt(w(yt)(-1e18)(_t._1.incoming))(w(yt)(-1e18)(_t._1.outgoing)), Qn = w((It) => (Pt) => Pt > Vt ? It : Pt >= Ft ? It + 1 | 0 : It)(0)(_t._1.outgoing) + w((It) => (Pt) => Pt > zn ? It : Pt >= se ? It + 1 | 0 : It)(0)(ft) | 0;
                      return wt === Qn ? wt > 0 ? { ...st, deps: st.deps + 2 | 0, crossings: st.crossings + wt | 0 } : st : { ...st, deps: st.deps + 1 | 0, crossings: st.crossings + Vo(wt)(Qn) | 0 };
                    }
                    f();
                  };
                })())(w((() => {
                  const Bt = q.segMap;
                  return (St) => (en) => {
                    const _t = Wt(en.src)(Bt);
                    if (_t.tag === "Nothing")
                      return St;
                    if (_t.tag === "Just") {
                      const bt = mt(w(mt)(1e18)(_t._1.incoming))(w(mt)(1e18)(_t._1.outgoing)), ht = yt(w(yt)(-1e18)(_t._1.incoming))(w(yt)(-1e18)(_t._1.outgoing)), $t = mt(w(mt)(1e18)(A.incoming))(w(mt)(1e18)(et)), st = (() => {
                        const It = yt(w(yt)(-1e18)(A.incoming))(w(yt)(-1e18)(et)), Pt = w((Kt) => (yn) => yn > ht ? Kt : yn >= bt ? Kt + 1 | 0 : Kt)(0)(et) + w((Kt) => (yn) => yn > It ? Kt : yn >= $t ? Kt + 1 | 0 : Kt)(0)(_t._1.incoming) | 0, ue = mt(w(mt)(1e18)(A.incoming))(w(mt)(1e18)(et)), qn = yt(w(yt)(-1e18)(A.incoming))(w(yt)(-1e18)(et)), Wn = mt(w(mt)(1e18)(_t._1.incoming))(w(mt)(1e18)(_t._1.outgoing)), Sn = yt(w(yt)(-1e18)(_t._1.incoming))(w(yt)(-1e18)(_t._1.outgoing)), Ye = w((Kt) => (yn) => yn > qn ? Kt : yn >= ue ? Kt + 1 | 0 : Kt)(0)(_t._1.outgoing) + w((Kt) => (yn) => yn > Sn ? Kt : yn >= Wn ? Kt + 1 | 0 : Kt)(0)(A.incoming) | 0;
                        return Pt === Ye ? Pt > 0 ? { ...St, deps: St.deps + 2 | 0, crossings: St.crossings + Pt | 0 } : St : { ...St, deps: St.deps + 1 | 0, crossings: St.crossings + Vo(Pt)(Ye) | 0 };
                      })(), gt = mt(w(mt)(1e18)(_t._1.incoming))(w(mt)(1e18)(_t._1.outgoing)), it = yt(w(yt)(-1e18)(_t._1.incoming))(w(yt)(-1e18)(_t._1.outgoing)), at = mt(w(mt)(1e18)(ft))(w(mt)(1e18)(A.outgoing)), Tt = yt(w(yt)(-1e18)(ft))(w(yt)(-1e18)(A.outgoing)), wt = w((It) => (Pt) => Pt > it ? It : Pt >= gt ? It + 1 | 0 : It)(0)(A.outgoing) + w((It) => (Pt) => Pt > Tt ? It : Pt >= at ? It + 1 | 0 : It)(0)(_t._1.incoming) | 0, Ft = mt(w(mt)(1e18)(ft))(w(mt)(1e18)(A.outgoing)), Vt = yt(w(yt)(-1e18)(ft))(w(yt)(-1e18)(A.outgoing)), se = mt(w(mt)(1e18)(_t._1.incoming))(w(mt)(1e18)(_t._1.outgoing)), zn = yt(w(yt)(-1e18)(_t._1.incoming))(w(yt)(-1e18)(_t._1.outgoing)), Qn = w((It) => (Pt) => Pt > Vt ? It : Pt >= Ft ? It + 1 | 0 : It)(0)(_t._1.outgoing) + w((It) => (Pt) => Pt > zn ? It : Pt >= se ? It + 1 | 0 : It)(0)(ft) | 0;
                      return wt === Qn ? wt > 0 ? { ...st, deps: st.deps + 2 | 0, crossings: st.crossings + wt | 0 } : st : { ...st, deps: st.deps + 1 | 0, crossings: st.crossings + Vo(wt)(Qn) | 0 };
                    }
                    f();
                  };
                })())({ crossings: 0, deps: 0 })(lt((Bt) => Bt.tgt === A.id, _.deps)))(lt((Bt) => Bt.src === A.id, _.deps)), dt = (() => {
                  if (A.splitBy.tag === "Just")
                    return Wt(A.splitBy._1)(q.segMap);
                  if (A.splitBy.tag === "Nothing")
                    return x;
                  f();
                })();
                if (dt.tag === "Just")
                  return {
                    ...ct,
                    deps: ct.deps + 2 | 0,
                    crossings: (() => {
                      const Bt = mt(w(mt)(1e18)(dt._1.incoming))(w(mt)(1e18)(dt._1.outgoing)), St = mt(w(mt)(1e18)(ft))(w(mt)(1e18)(A.outgoing)), en = yt(w(yt)(-1e18)(dt._1.incoming))(w(yt)(-1e18)(dt._1.outgoing)), _t = yt(w(yt)(-1e18)(ft))(w(yt)(-1e18)(A.outgoing)), bt = mt(w(mt)(1e18)(A.incoming))(w(mt)(1e18)(et));
                      return ct.crossings + (() => {
                        const ht = mt(w(mt)(1e18)(dt._1.incoming))(w(mt)(1e18)(dt._1.outgoing)), $t = yt(w(yt)(-1e18)(A.incoming))(w(yt)(-1e18)(et)), st = yt(w(yt)(-1e18)(dt._1.incoming))(w(yt)(-1e18)(dt._1.outgoing));
                        return ((w((gt) => (it) => it > en ? gt : it >= Bt ? gt + 1 | 0 : gt)(0)(et) + w((gt) => (it) => it > $t ? gt : it >= bt ? gt + 1 | 0 : gt)(0)(dt._1.incoming) | 0) + w((gt) => (it) => it > _t ? gt : it >= St ? gt + 1 | 0 : gt)(0)(dt._1.outgoing) | 0) + w((gt) => (it) => it > st ? gt : it >= ht ? gt + 1 | 0 : gt)(0)(ft) | 0;
                      })() | 0;
                    })()
                  };
                if (dt.tag === "Nothing")
                  return ct;
                f();
              })()
            }))(R);
            return w((j) => (rt) => rt.rating.crossings < j.rating.crossings || !(rt.rating.crossings > j.rating.crossings) && (rt.rating.deps < j.rating.deps || !(rt.rating.deps > j.rating.deps) && rt.c.a.size > j.c.a.size) ? rt : j)(0 < O.length ? O[0] : { c: Q._1, rating: { crossings: 1e6, deps: 1e6 } })(O).c;
          }
          f();
        })(), tt = {
          ...A,
          incoming: Ht(ot.compare)(A.incoming),
          outgoing: Ht(ot.compare)([(X.a.startPosition + X.a.endPosition) / 2]),
          splitPartner: J("Just", q.nextId)
        }, V = {
          id: q.nextId,
          incoming: Ht(ot.compare)([(X.a.startPosition + X.a.endPosition) / 2]),
          mark: 0,
          members: A.members,
          outgoing: Ht(ot.compare)(A.outgoing),
          slot: 0,
          splitBy: x,
          splitPartner: J("Just", A.id)
        };
        return {
          segMap: K(nt)(V.id)(V)(K(nt)(tt.id)(tt)(q.segMap)),
          freeAreas: (() => {
            if (X.i >= 0 && X.i < q.freeAreas.length) {
              const O = Ad(jt, x, X.i, q.freeAreas), j = (() => {
                if (O.tag === "Nothing")
                  return q.freeAreas;
                if (O.tag === "Just")
                  return O._1;
                f();
              })();
              if (q.freeAreas[X.i].size / 2 < d)
                return j;
              const rt = (q.freeAreas[X.i].startPosition + q.freeAreas[X.i].endPosition) / 2, et = rt - d, ft = rt + d;
              return [
                ...X.i < 1 ? [] : Ct(0, X.i, j),
                ...q.freeAreas[X.i].startPosition <= et ? [{ startPosition: q.freeAreas[X.i].startPosition, endPosition: et, size: et - q.freeAreas[X.i].startPosition }] : [],
                ...ft <= q.freeAreas[X.i].endPosition ? [{ startPosition: ft, endPosition: q.freeAreas[X.i].endPosition, size: q.freeAreas[X.i].endPosition - ft }] : [],
                ...X.i < 1 ? j : Ct(X.i, j.length, j)
              ];
            }
            return q.freeAreas;
          })(),
          nextId: q.nextId + 1 | 0
        };
      })({
        segMap: Z,
        freeAreas: (() => {
          const q = Ht(ot.compare)([
            ...vt(_.segments)((A) => A.incoming),
            ...vt(_.segments)((A) => A.outgoing)
          ]);
          return xt(Aw)(Fn(
            (A) => (P) => P - A >= 2 * d ? J("Just", { startPosition: A + d, endPosition: P - d, size: P - A - 2 * d }) : x,
            q,
            Ct(1, q.length, q)
          ));
        })(),
        nextId: _.segments.length
      })(Ht((q) => (A) => ot.compare(yt(w(yt)(-1e18)(q.incoming))(w(yt)(-1e18)(q.outgoing)) - mt(w(mt)(1e18)(q.incoming))(w(mt)(1e18)(q.outgoing)))(yt(w(yt)(-1e18)(A.incoming))(w(yt)(-1e18)(A.outgoing)) - mt(w(mt)(1e18)(A.incoming))(w(mt)(1e18)(A.outgoing))))(xt((q) => Wt(q)(Z))(M.decisions)));
      return {
        segments: (() => {
          const q = (A, P) => {
            if (A.tag === "Leaf")
              return P;
            if (A.tag === "Node")
              return q(A._5, Zt("Cons", A._4, q(A._6, P)));
            f();
          };
          return Ot(gn.foldr, q(Y.segMap, Qt));
        })(),
        deps: (() => {
          const q = Y.segMap, A = (R, Q) => {
            if (R.tag === "Leaf")
              return Q;
            if (R.tag === "Node")
              return A(R._5, Zt("Cons", R._4, A(R._6, Q)));
            f();
          }, P = Ot(gn.foldr, A(q, Qt)), W = P.length;
          return [
            ...vt(vt(Ut(0, W - 2 | 0))((R) => vt(Ut(R + 1 | 0, W - 1 | 0))((Q) => [
              k(R, Q)
            ])))((R) => R._1 >= 0 && R._1 < P.length ? R._2 >= 0 && R._2 < P.length ? P[R._1].splitPartner.tag !== "Nothing" && P[R._1].splitPartner.tag === "Just" && P[R._1].splitPartner._1 === P[R._2].id || P[R._2].splitPartner.tag !== "Nothing" && P[R._2].splitPartner.tag === "Just" && P[R._2].splitPartner._1 === P[R._1].id ? [] : i(d, P[R._1], P[R._2]) : [] : []),
            ...vt(P)((R) => R.splitBy.tag === "Just" && R.splitPartner.tag === "Just" && (() => {
              const Q = Wt(R.splitPartner._1)(q);
              if (Q.tag === "Nothing")
                return !1;
              if (Q.tag === "Just")
                return !0;
              f();
            })() && (() => {
              const Q = Wt(R.splitBy._1)(q);
              if (Q.tag === "Nothing")
                return !1;
              if (Q.tag === "Just")
                return !0;
              f();
            })() ? [{ src: R.id, tgt: R.splitBy._1, weight: 1, kind: Os }, { src: R.splitBy._1, tgt: R.splitPartner._1, weight: 1, kind: Os }] : [])
          ];
        })()
      };
    })(), m = h.segments, p = m.length, $ = (G) => {
      let H = G, M = !0, Z;
      for (; M; ) {
        const Y = H, q = un((A) => {
          const P = Wt(A)(Y.inWeight);
          if (P.tag === "Nothing")
            return !0;
          if (P.tag === "Just")
            return P._1 === 0;
          f();
        })(Y.remaining);
        if (q.tag === "Nothing") {
          M = !1, Z = Y;
          continue;
        }
        if (q.tag === "Just") {
          const A = q._1;
          H = {
            ...Y,
            inWeight: w((P) => (W) => Gt(nt)(Tn)(W.tgt)(-W.weight)(P))(Y.inWeight)((() => {
              const P = Wt(A)(Y.depsBySrc);
              if (P.tag === "Nothing")
                return [];
              if (P.tag === "Just")
                return P._1;
              f();
            })()),
            marks: K(nt)(A)(Y.nextSource)(Y.marks),
            nextSource: Y.nextSource + 1 | 0,
            outWeight: w((P) => (W) => Gt(nt)(Tn)(W.src)(-W.weight)(P))(Y.outWeight)((() => {
              const P = Wt(A)(Y.depsByTgt);
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
    }, y = (G) => {
      let H = G, M = !0, Z;
      for (; M; ) {
        const Y = H, q = un((A) => {
          const P = Wt(A)(Y.outWeight);
          if (P.tag === "Nothing")
            return !0;
          if (P.tag === "Just")
            return P._1 === 0;
          f();
        })(Y.remaining);
        if (q.tag === "Nothing") {
          M = !1, Z = Y;
          continue;
        }
        if (q.tag === "Just") {
          const A = q._1;
          H = {
            ...Y,
            inWeight: w((P) => (W) => Gt(nt)(Tn)(W.tgt)(-W.weight)(P))(Y.inWeight)((() => {
              const P = Wt(A)(Y.depsBySrc);
              if (P.tag === "Nothing")
                return [];
              if (P.tag === "Just")
                return P._1;
              f();
            })()),
            marks: K(nt)(A)(Y.nextSink)(Y.marks),
            nextSink: Y.nextSink - 1 | 0,
            outWeight: w((P) => (W) => Gt(nt)(Tn)(W.src)(-W.weight)(P))(Y.outWeight)((() => {
              const P = Wt(A)(Y.depsByTgt);
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
    }, N = ((G) => {
      let H = G, M = !0, Z;
      for (; M; ) {
        const q = $(y(H));
        if (q.remaining.length === 0) {
          M = !1, Z = D((A) => {
            const P = Wt(A.id)(q.marks), W = (() => {
              if (P.tag === "Nothing")
                return A.id;
              if (P.tag === "Just")
                return P._1;
              f();
            })();
            return { ...A, mark: W < p ? (W + p | 0) + 1 | 0 : W };
          })(m);
          continue;
        }
        H = (() => {
          const A = (W) => {
            const R = Wt(W)(q.outWeight), Q = Wt(W)(q.inWeight);
            return (() => {
              if (R.tag === "Nothing")
                return 0;
              if (R.tag === "Just")
                return R._1;
              f();
            })() - (() => {
              if (Q.tag === "Nothing")
                return 0;
              if (Q.tag === "Just")
                return Q._1;
              f();
            })() | 0;
          }, P = Ht((W) => (R) => nt.compare(A(R))(A(W)))(q.remaining);
          if (0 < P.length) {
            const W = P[0];
            return {
              ...q,
              inWeight: w((R) => (Q) => Gt(nt)(Tn)(Q.tgt)(-Q.weight)(R))(q.inWeight)((() => {
                const R = Wt(W)(q.depsBySrc);
                if (R.tag === "Nothing")
                  return [];
                if (R.tag === "Just")
                  return R._1;
                f();
              })()),
              marks: K(nt)(W)(q.nextSource)(q.marks),
              nextSource: q.nextSource + 1 | 0,
              outWeight: w((R) => (Q) => Gt(nt)(Tn)(Q.src)(-Q.weight)(R))(q.outWeight)((() => {
                const R = Wt(W)(q.depsByTgt);
                if (R.tag === "Nothing")
                  return [];
                if (R.tag === "Just")
                  return R._1;
                f();
              })()),
              remaining: lt((R) => R !== W, q.remaining)
            };
          }
          return q;
        })();
      }
      return Z;
    })({
      remaining: D((G) => G.id)(m),
      marks: B,
      inWeight: w((G) => (H) => Gt(nt)(Tn)(H.tgt)(H.weight)(G))(B)(h.deps),
      outWeight: w((G) => (H) => Gt(nt)(Tn)(H.src)(H.weight)(G))(B)(h.deps),
      depsBySrc: w((G) => (H) => Gt(nt)(xn)(H.src)([H])(G))(B)(h.deps),
      depsByTgt: w((G) => (H) => Gt(nt)(xn)(H.tgt)([H])(G))(B)(h.deps),
      nextSink: p - 1 | 0,
      nextSource: p + 1 | 0
    }), T = (() => {
      const G = (() => {
        const Y = Oo(D((q) => k(q.id, q.mark))(N));
        return {
          segments: N,
          deps: xt((q) => (() => {
            if (q.kind === "Critical")
              return !0;
            if (q.kind === "Regular")
              return !1;
            f();
          })() ? J("Just", q) : (() => {
            const A = Wt(q.src)(Y), P = Wt(q.tgt)(Y);
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
          })() ? q.weight === 0 ? x : J("Just", { src: q.tgt, tgt: q.src, weight: q.weight, kind: q.kind }) : J("Just", q))(h.deps)
        };
      })(), H = w((Y) => (q) => Gt(nt)(Tn)(q.tgt)(1)(Y))(B)(G.deps), Z = ((Y) => {
        let q = Y, A = !0, P;
        for (; A; ) {
          const W = q, R = Dt((Q) => x, (Q) => (X) => J("Just", { head: Q, tail: X }), W.queue);
          if (R.tag === "Nothing") {
            A = !1, P = W;
            continue;
          }
          if (R.tag === "Just") {
            q = w((() => {
              const Q = Wt(R._1.head)(W.slots), X = (() => {
                if (Q.tag === "Nothing")
                  return 0;
                if (Q.tag === "Just")
                  return Q._1;
                f();
              })();
              return (tt) => (V) => {
                const O = Wt(V)(tt.inDegree), j = (() => {
                  if (O.tag === "Nothing")
                    return -1;
                  if (O.tag === "Just")
                    return O._1 - 1 | 0;
                  f();
                })();
                return {
                  ...tt,
                  slots: K(nt)(V)(zl((() => {
                    const rt = Wt(V)(tt.slots);
                    if (rt.tag === "Nothing")
                      return 0;
                    if (rt.tag === "Just")
                      return rt._1;
                    f();
                  })())(X + 1 | 0))(tt.slots),
                  inDegree: K(nt)(V)(j)(tt.inDegree),
                  queue: j === 0 ? [...tt.queue, V] : tt.queue
                };
              };
            })())({ ...W, queue: R._1.tail })((() => {
              const Q = Wt(R._1.head)(W.adj);
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
        slots: Oo(D((Y) => k(Y.id, 0))(G.segments)),
        inDegree: H,
        adj: w((Y) => (q) => Gt(nt)(xn)(q.src)([q.tgt])(Y))(B)(G.deps),
        queue: D((Y) => Y.id)(lt(
          (Y) => {
            const q = Wt(Y.id)(H);
            if (q.tag === "Nothing")
              return !0;
            if (q.tag === "Just")
              return q._1 === 0;
            f();
          },
          G.segments
        ))
      });
      return Ht((Y) => (q) => nt.compare(Y.slot)(q.slot))(D((Y) => ({
        ...Y,
        slot: (() => {
          const q = Wt(Y.id)(Z.slots);
          if (q.tag === "Nothing")
            return 0;
          if (q.tag === "Just")
            return q._1;
          f();
        })()
      }))(G.segments));
    })(), b = 1 + w((G) => (H) => zl(G)(H.slot))(0)(T) | 0, L = vt(T)((G) => G.members), E = lt((G) => ge(gr)(G.edge.id)(L), t), C = w(yt)(-1e18)(D((G) => G.fromPos._2)(E)), I = w(mt)(1e18)(D((G) => G.toPos._2)(E));
    if (C > I) {
      const G = Oo(D((H) => k(H.id, H))(T));
      return ve(D((H) => D((M) => k(
        M,
        {
          slot: H.slot,
          slotCount: b,
          gapTop: I,
          gapBottom: C,
          partner: (() => {
            if (H.splitPartner.tag === "Just") {
              const Z = Wt(H.splitPartner._1)(G);
              if (Z.tag === "Just")
                return J("Just", { slot: Z._1.slot, splitX: 0 < Z._1.incoming.length ? Z._1.incoming[0] : 0 });
              if (Z.tag === "Nothing")
                return x;
              f();
            }
            if (H.splitPartner.tag === "Nothing")
              return x;
            f();
          })()
        }
      ))(H.members))(lt(
        (H) => {
          if (H.splitPartner.tag === "Just") {
            const M = Wt(H.splitPartner._1)(G);
            return !(M.tag === "Just" && (() => {
              if (M._1.splitBy.tag === "Nothing")
                return !1;
              if (M._1.splitBy.tag === "Just")
                return !0;
              f();
            })());
          }
          if (H.splitPartner.tag === "Nothing")
            return !0;
          f();
        },
        T
      )));
    }
    const z = Oo(D((G) => k(G.id, G))(T));
    return ve(D((G) => D((H) => k(
      H,
      {
        slot: G.slot,
        slotCount: b,
        gapTop: C,
        gapBottom: I,
        partner: (() => {
          if (G.splitPartner.tag === "Just") {
            const M = Wt(G.splitPartner._1)(z);
            if (M.tag === "Just")
              return J("Just", { slot: M._1.slot, splitX: 0 < M._1.incoming.length ? M._1.incoming[0] : 0 });
            if (M.tag === "Nothing")
              return x;
            f();
          }
          if (G.splitPartner.tag === "Nothing")
            return x;
          f();
        })()
      }
    ))(G.members))(lt(
      (G) => {
        if (G.splitPartner.tag === "Just") {
          const H = Wt(G.splitPartner._1)(z);
          return !(H.tag === "Just" && (() => {
            if (H._1.splitBy.tag === "Nothing")
              return !1;
            if (H._1.splitBy.tag === "Just")
              return !0;
            f();
          })());
        }
        if (G.splitPartner.tag === "Nothing")
          return !0;
        f();
      },
      T
    )));
  })()))(B)(Ew(w((s) => (u) => {
    const c = Zo(u.edge.from.node)(e);
    if (c.tag === "Just") {
      const a = Zo(u.edge.to.node)(e);
      return a.tag === "Just" && c._1.layer !== a._1.layer ? Gt(nt)(xn)(Vo(c._1.layer)(a._1.layer))([u])(s) : s;
    }
    return s;
  })(B)((() => {
    const s = (u) => k(
      (() => {
        const c = Zo(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.layer : 1e6;
      })(),
      (() => {
        const c = Zo(u.edge.from.node)(e);
        return c.tag === "Just" ? c._1.order : 1e6;
      })()
    );
    return Ht((u) => (c) => Cw(s(u))(s(c)))(t);
  })())));
}, Rw = (t) => (n) => {
  const e = s_(t)(n), r = w((o) => (i) => K(F)(i.node)(i)(o))(B)(n);
  return w((o) => (i) => {
    const s = Zo(i.edge.from.node)(r);
    if (s.tag === "Just") {
      const u = Zo(i.edge.to.node)(r);
      if (u.tag === "Just" && s._1.layer !== u._1.layer) {
        const c = Pw(i.edge.id)(e);
        if (c.tag === "Just")
          return K(nt)(Vo(s._1.layer)(u._1.layer))(c._1.slotCount)(o);
      }
      return o;
    }
    return o;
  })(B)(t);
}, u_ = Xt.foldMap(/* @__PURE__ */ (() => {
  const t = { append: (n) => (e) => n || e };
  return { mempty: !1, Semigroup0: () => t };
})()), kn = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ln = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Qi = (t) => (n) => (e) => (r) => u_((o) => e >= o.x && e < o.x + o.w && n > o.y && t < o.y + o.h)(r), bu = (t) => (n) => (e) => (r) => Qi(kn(n)(e))(Ln(n)(e))(r)(t), Xs = /* @__PURE__ */ U(4), Fw = /* @__PURE__ */ Rd((t) => {
  if (t.direction === "H") {
    const n = kn(t.start._1)(t.end._1);
    return [{ x: n, y: t.start._2 - 1, w: Ln(t.start._1)(t.end._1) - n, h: 2 }];
  }
  if (t.direction === "V") {
    const n = kn(t.start._2)(t.end._2);
    return [{ x: t.start._1 - 1, y: n, w: 2, h: Ln(t.start._2)(t.end._2) - n }];
  }
  f();
}), os = /* @__PURE__ */ pf((t) => {
  const n = t.start._1 - t.end._1;
  return !((n < 0 ? -n < 1e-6 : n < 1e-6) && (() => {
    const e = t.start._2 - t.end._2;
    return e < 0 ? -e < 1e-6 : e < 1e-6;
  })());
}), Gw = (t) => (n) => (e) => {
  const r = Dt((o) => x, (o) => (i) => J("Just", { head: o, tail: i }), n);
  if (r.tag === "Nothing")
    return [{ start: t.start, end: e.end, direction: t.direction }];
  if (r.tag === "Just") {
    const o = (r._1.head.direction === "H" ? t.direction === "H" : r._1.head.direction === "V" && t.direction === "V") ? [{ start: t.start, end: r._1.head.end, direction: t.direction }] : [t, r._1.head], i = Ke(r._1.tail);
    if (i.tag === "Nothing") {
      const s = o.length - 1 | 0;
      return s >= 0 && s < o.length && (o[s].direction === "H" ? e.direction === "H" : o[s].direction === "V" && e.direction === "V") ? [
        ...(() => {
          const u = o.length - 1 | 0;
          return u < 1 ? [] : Ct(0, u, o);
        })(),
        { start: o[s].start, end: e.end, direction: e.direction }
      ] : [...o, e];
    }
    if (i.tag === "Just")
      return (i._1.last.direction === "H" ? e.direction === "H" : i._1.last.direction === "V" && e.direction === "V") ? [...o, ...i._1.init, { start: i._1.last.start, end: e.end, direction: e.direction }] : [...o, ...r._1.tail, e];
  }
  f();
}, is = (t) => {
  const n = (r) => (o) => {
    const i = Dt((s) => x, (s) => (u) => J("Just", { head: s, tail: u }), o);
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
  }, e = Dt((r) => x, (r) => (o) => J("Just", { head: r, tail: o }), t);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return n(e._1.head)(e._1.tail);
  f();
}, qi = (t) => (n) => (e) => (r) => u_((o) => e >= o.y && e < o.y + o.h && n > o.x && t < o.x + o.w)(r), Yi = (t) => (n) => (e) => (r) => qi(kn(n)(e))(Ln(n)(e))(r)(t), Iw = (t) => (n) => (e) => (r) => {
  const o = e + 2 | 0, i = o < 1 ? n : Ct(o, n.length, n), s = e < 1 ? [] : Ct(0, e, n), u = (e + 1 | 0) === (r - 1 | 0), c = e === 0, a = e >= 0 && e < n.length ? J("Just", n[e]) : x;
  if (a.tag === "Just") {
    const l = e + 1 | 0, d = l >= 0 && l < n.length ? J("Just", n[l]) : x;
    if (d.tag === "Just") {
      const _ = a._1.start._1 === d._1.end._1 && (!c || a._1.direction === "V") && (!u || d._1.direction === "V") && !bu(t)(kn(a._1.start._2)(d._1.end._2))(Ln(a._1.start._2)(d._1.end._2))(a._1.start._1) ? J("Just", [...s, { start: a._1.start, end: d._1.end, direction: hn }, ...i]) : x, g = a._1.start._2 === d._1.end._2 && (!c || a._1.direction === "H") && (!u || d._1.direction === "H") && !Yi(t)(kn(a._1.start._1)(d._1.end._1))(Ln(a._1.start._1)(d._1.end._1))(a._1.start._2) ? J("Just", [...s, { start: a._1.start, end: d._1.end, direction: _n }, ...i]) : x;
      return _.tag === "Nothing" ? g : _;
    }
    if (d.tag === "Nothing")
      return x;
    f();
  }
  if (a.tag === "Nothing")
    return x;
  f();
}, Bw = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if ((c + 1 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const a = Iw(t)(n)(c)(e);
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
}, Hw = (t) => (n) => (e) => (r) => {
  const o = (_, g, h) => !bu(t)(kn(g)(h))(Ln(g)(h))(_), i = e + 3 | 0, s = i < 1 ? n : Ct(i, n.length, n), u = e < 1 ? [] : Ct(0, e, n), c = (e + 2 | 0) === (r - 1 | 0), a = e === 0, l = (_, g, h) => !Yi(t)(kn(g)(h))(Ln(g)(h))(_), d = e >= 0 && e < n.length ? J("Just", n[e]) : x;
  if (d.tag === "Just") {
    const _ = e + 2 | 0, g = _ >= 0 && _ < n.length ? J("Just", n[_]) : x;
    if (g.tag === "Just") {
      const h = d._1.start._1 === g._1.end._1 && (!a || d._1.direction === "V") && (!c || g._1.direction === "V") && o(d._1.start._1, d._1.start._2, g._1.end._2) ? J("Just", [...u, { start: d._1.start, end: g._1.end, direction: hn }, ...s]) : d._1.start._2 === g._1.end._2 && (!a || d._1.direction === "H") && (!c || g._1.direction === "H") && l(d._1.start._2, d._1.start._1, g._1.end._1) ? J("Just", [...u, { start: d._1.start, end: g._1.end, direction: _n }, ...s]) : x, m = (!a || d._1.direction === "V") && (!c || g._1.direction === "H") && o(d._1.start._1, d._1.start._2, g._1.end._2) && l(
        g._1.end._2,
        d._1.start._1,
        g._1.end._1
      ) ? J(
        "Just",
        [
          ...u,
          { start: d._1.start, end: k(d._1.start._1, g._1.end._2), direction: hn },
          { start: k(d._1.start._1, g._1.end._2), end: g._1.end, direction: _n },
          ...s
        ]
      ) : x, p = (!a || d._1.direction === "H") && (!c || g._1.direction === "V") && l(d._1.start._2, d._1.start._1, g._1.end._1) && o(
        g._1.end._1,
        d._1.start._2,
        g._1.end._2
      ) ? J(
        "Just",
        [
          ...u,
          { start: d._1.start, end: k(g._1.end._1, d._1.start._2), direction: _n },
          { start: k(g._1.end._1, d._1.start._2), end: g._1.end, direction: hn },
          ...s
        ]
      ) : x, $ = m.tag === "Nothing" ? p : m;
      return h.tag === "Nothing" ? $ : h;
    }
    if (g.tag === "Nothing")
      return x;
    f();
  }
  if (d.tag === "Nothing")
    return x;
  f();
}, Dw = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const c = i;
      if ((c + 2 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const a = Hw(t)(n)(c)(e);
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
}, zw = (t) => {
  const n = (e) => {
    let r = e, o = !0, i;
    for (; o; ) {
      const s = r, u = is(os(Bw(t)(Dw(t)(s))));
      if (u.length < s.length) {
        r = u;
        continue;
      }
      o = !1, i = u;
    }
    return i;
  };
  return (e) => n(is(os(e)));
}, Qw = (t) => (n) => (e) => (r) => {
  const o = kn(e)(r), i = Ln(e)(r), s = lt((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = Ht((a) => (l) => ot.compare(a.x)(l.x))(s);
    return 0 < c.length ? c[0].x - 1 : (e + r) / 2;
  }
  const u = Ht((c) => (a) => ot.compare(a.x)(c.x))(D((c) => ({ ...c, x: c.x + c.w }))(s));
  return 0 < u.length ? u[0].x + 1 : (e + r) / 2;
}, qw = (t) => (n) => (e) => (r) => {
  const o = kn(e)(r), i = Ln(e)(r), s = lt((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = Ht((a) => (l) => ot.compare(a.y)(l.y))(s);
    return 0 < c.length ? c[0].y - 1 : (e + r) / 2;
  }
  const u = Ht((c) => (a) => ot.compare(a.y)(c.y))(D((c) => ({ ...c, y: c.y + c.h }))(s));
  return 0 < u.length ? u[0].y + 1 : (e + r) / 2;
}, Ww = (t) => (n) => (e) => (r) => {
  const o = kn(e)(r), i = Ln(e)(r), s = lt((c) => n >= c.y && n < c.y + c.h && c.x + c.w > o && c.x < i, t);
  if (r > e) {
    const c = Ht((a) => (l) => ot.compare(l.x)(a.x))(D((a) => ({ ...a, x: a.x + a.w }))(s));
    return 0 < c.length ? c[0].x : (e + r) / 2;
  }
  const u = Ht((c) => (a) => ot.compare(c.x)(a.x))(s);
  return 0 < u.length ? u[0].x - 1 : (e + r) / 2;
}, Ow = (t) => (n) => (e) => (r) => {
  const o = kn(e)(r), i = Ln(e)(r), s = lt((c) => n >= c.x && n < c.x + c.w && c.y + c.h > o && c.y < i, t);
  if (r > e) {
    const c = Ht((a) => (l) => ot.compare(l.y)(a.y))(D((a) => ({ ...a, y: a.y + a.h }))(s));
    return 0 < c.length ? c[0].y : (e + r) / 2;
  }
  const u = Ht((c) => (a) => ot.compare(c.y)(a.y))(s);
  return 0 < u.length ? u[0].y - 1 : (e + r) / 2;
}, c_ = (t) => (n) => (e) => {
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
}, ql = (t) => (n) => (e) => (r) => (o) => {
  const i = kn(n)(e), s = Ln(n)(e);
  if (!Qi(i)(s)(r)(t))
    return r;
  if (!Qi(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return Qi(i)(s)(u)(t) ? c_((c) => Qi(i)(s)(c)(t))(u)(1) : u;
}, Xw = (t) => (n) => (e) => (r) => (o) => {
  const i = kn(n)(e), s = Ln(n)(e);
  if (!qi(i)(s)(r)(t))
    return r;
  if (!qi(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return qi(i)(s)(u)(t) ? c_((c) => qi(i)(s)(c)(t))(u)(1) : u;
}, Yw = (t) => (n) => (e) => (r) => {
  const o = kn(n)(e), i = Ln(n)(e), s = lt((a) => r >= a.x && r < a.x + a.w && a.y + a.h > o && a.y < i, t), u = w((a) => (l) => Ln(a)(l.x + l.w + 4))(r + 4)(s), c = w((a) => (l) => kn(a)(l.x - 4))(r - 4)(s);
  return (() => {
    const a = u - r, l = c - r;
    return (a < 0 ? -a : a) <= (l < 0 ? -l : l);
  })() ? u : c;
}, Uw = (t) => (n) => (e) => (r) => {
  const o = kn(n)(e), i = Ln(n)(e), s = lt((a) => r >= a.y && r < a.y + a.h && a.x + a.w > o && a.x < i, t), u = w((a) => (l) => Ln(a)(l.y + l.h + 4))(r + 4)(s), c = w((a) => (l) => kn(a)(l.y - 4))(r - 4)(s);
  return (() => {
    const a = u - r, l = c - r;
    return (a < 0 ? -a : a) <= (l < 0 ? -l : l);
  })() ? u : c;
}, Vw = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
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
  })(), a = (T, b, L) => !bu(n)(kn(b)(L))(Ln(b)(L))(T), l = (T, b, L) => !bu(e)(kn(b)(L))(Ln(b)(L))(T), d = (T, b, L, E) => t.tag === "Just" && !Yi(e)(kn(T)(b))(Ln(T)(b))(t._1) ? t._1 : Xw(n)(T)(b)(L)(E), _ = (T, b, L, E) => {
    if (T === L) {
      const I = Yw(n)(b)(E)(T), z = qw(n)(T)(b)(E), G = Ow(n)(T)(b)(E);
      return [
        { start: k(T, b), end: k(T, z), direction: hn },
        { start: k(T, z), end: k(I, z), direction: _n },
        { start: k(I, z), end: k(I, G), direction: hn },
        { start: k(I, G), end: k(L, G), direction: _n },
        { start: k(L, G), end: k(L, E), direction: hn }
      ];
    }
    const C = d(T, L, b, E);
    return [
      { start: k(T, b), end: k(T, C), direction: hn },
      { start: k(T, C), end: k(L, C), direction: _n },
      { start: k(L, C), end: k(L, E), direction: hn }
    ];
  }, g = (T, b, L, E) => {
    if (b === E) {
      const I = Uw(n)(T)(L)(b), z = Qw(n)(b)(T)(L), G = Ww(n)(b)(T)(L);
      return [
        { start: k(T, b), end: k(z, b), direction: _n },
        { start: k(z, b), end: k(z, I), direction: hn },
        { start: k(z, I), end: k(G, I), direction: _n },
        { start: k(G, I), end: k(G, E), direction: hn },
        { start: k(G, E), end: k(L, E), direction: _n }
      ];
    }
    const C = ql(n)(b)(E)(T)(L);
    return [
      { start: k(T, b), end: k(C, b), direction: _n },
      { start: k(C, b), end: k(C, E), direction: hn },
      { start: k(C, E), end: k(L, E), direction: _n }
    ];
  }, h = (T, b, L) => !Yi(n)(kn(b)(L))(Ln(b)(L))(T), m = (T, b, L) => !Yi(e)(kn(b)(L))(Ln(b)(L))(T), p = (T, b, L, E) => {
    if (m(b, T, L) && l(L, b, E))
      return [
        { start: k(T, b), end: k(L, b), direction: _n },
        { start: k(L, b), end: k(L, E), direction: hn }
      ];
    const C = ql(n)(b)(E)(T)(L);
    return [
      { start: k(T, b), end: k(C, b), direction: _n },
      { start: k(C, b), end: k(C, E), direction: hn },
      { start: k(C, E), end: k(L, E), direction: _n }
    ];
  }, $ = (T, b, L, E) => {
    if (l(T, b, E) && m(E, T, L))
      return [
        { start: k(T, b), end: k(T, E), direction: hn },
        { start: k(T, E), end: k(L, E), direction: _n }
      ];
    const C = d(T, L, b, E);
    return [
      { start: k(T, b), end: k(T, C), direction: hn },
      { start: k(T, C), end: k(L, C), direction: _n },
      { start: k(L, C), end: k(L, E), direction: hn }
    ];
  }, y = (() => {
    if (r === "South")
      return i === "North" ? u._1 === c._1 && a(u._1, u._2, c._2) ? [{ start: k(u._1, u._2), end: k(c._1, c._2), direction: hn }] : _(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? $(u._1, u._2, c._1, c._2) : _(u._1, u._2, c._1, c._2);
    if (r === "North")
      return i === "South" ? u._1 === c._1 && a(u._1, u._2, c._2) ? [{ start: k(u._1, u._2), end: k(c._1, c._2), direction: hn }] : _(u._1, u._2, c._1, c._2) : i === "East" || i === "West" ? $(u._1, u._2, c._1, c._2) : _(u._1, u._2, c._1, c._2);
    if (r === "East")
      return i === "West" ? u._2 === c._2 && h(u._2, u._1, c._1) ? [{ start: k(u._1, u._2), end: k(c._1, c._2), direction: _n }] : g(u._1, u._2, c._1, c._2) : i === "North" || i === "South" ? p(u._1, u._2, c._1, c._2) : _(u._1, u._2, c._1, c._2);
    if (r === "West") {
      if (i === "East")
        return u._2 === c._2 && h(u._2, u._1, c._1) ? [{ start: k(u._1, u._2), end: k(c._1, c._2), direction: _n }] : g(u._1, u._2, c._1, c._2);
      if (i === "North" || i === "South")
        return p(u._1, u._2, c._1, c._2);
    }
    return _(u._1, u._2, c._1, c._2);
  })(), v = (() => {
    if (r === "South" || r === "North")
      return hn;
    if (r === "East" || r === "West")
      return _n;
    f();
  })(), N = {
    start: k(c._1, c._2),
    end: k(s._1, s._2),
    direction: (() => {
      if (i === "South" || i === "North")
        return hn;
      if (i === "East" || i === "West")
        return _n;
      f();
    })()
  };
  return u._1 === c._1 && u._2 === c._2 ? [{ start: k(o._1, o._2), end: k(s._1, s._2), direction: v }] : Gw({ start: k(o._1, o._2), end: k(u._1, u._2), direction: v })(y)(N);
}, Mw = /* @__PURE__ */ D((t) => ({ x: t.position._1 * Xs - 2, y: t.position._2 * Xs - 2, w: t.size._1 * Xs + 4, h: t.size._2 * Xs + 4 })), ku = /* @__PURE__ */ mn(F)(Xt), Nr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, ua = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Kw = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t._1)(s._3._1);
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
}, Wl = (t) => (n) => {
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
}, ca = (t) => (n) => {
  const e = U(4);
  if (t === "South")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "North")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "East")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  if (t === "West")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  f();
}, Ol = (t) => (n) => w((e) => (r) => Gt(t)(xn)(n(r))([r])(e))(B), Xl = (t) => (n) => (e) => (r) => {
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
}, a_ = (t) => (n) => {
  const e = t.hi - t.lo, r = (t.lo + t.hi) / 2, o = n.length;
  return o === 0 ? B : ku(o === 1 ? D((i) => k(i, r))(n) : qt((i) => (s) => k(s, t.lo + U(i + 1 | 0) * e / U(o + 1 | 0)))(n));
}, f_ = (t) => (n) => (e) => (r) => (o) => {
  const i = Ol(F)((g) => g.to.node)(t), s = Ol(F)((g) => g.from.node)(t), u = w((g) => (h) => K(F)(h.node)(h)(g))(B)(n), c = (g, h, m) => {
    const p = Nr(g)(u);
    if (p.tag === "Nothing")
      return k(0, 0);
    if (p.tag === "Just") {
      const $ = Nr(g)(e);
      if ($.tag === "Nothing") {
        const y = U(4);
        if (m === "South")
          return k(p._1.position._1 * y + p._1.size._1 * y / 2, (p._1.position._2 + p._1.size._2) * y);
        if (m === "North")
          return k(p._1.position._1 * y + p._1.size._1 * y / 2, p._1.position._2 * y);
        if (m === "East")
          return k((p._1.position._1 + p._1.size._1) * y, p._1.position._2 * y + p._1.size._2 * y / 2);
        if (m === "West")
          return k(p._1.position._1 * y, p._1.position._2 * y + p._1.size._2 * y / 2);
        f();
      }
      if ($.tag === "Just") {
        const y = un((v) => v.id === h)($._1);
        if (y.tag === "Nothing") {
          const v = U(4);
          if (m === "South")
            return k(p._1.position._1 * v + p._1.size._1 * v / 2, (p._1.position._2 + p._1.size._2) * v);
          if (m === "North")
            return k(p._1.position._1 * v + p._1.size._1 * v / 2, p._1.position._2 * v);
          if (m === "East")
            return k((p._1.position._1 + p._1.size._1) * v, p._1.position._2 * v + p._1.size._2 * v / 2);
          if (m === "West")
            return k(p._1.position._1 * v, p._1.position._2 * v + p._1.size._2 * v / 2);
          f();
        }
        if (y.tag === "Just") {
          const v = U(4);
          if (y._1.side === "North")
            return k(p._1.position._1 * v + U(y._1.offset) * v, p._1.position._2 * v);
          if (y._1.side === "South")
            return k(p._1.position._1 * v + U(y._1.offset) * v, (p._1.position._2 + p._1.size._2) * v);
          if (y._1.side === "East")
            return k((p._1.position._1 + p._1.size._1) * v, p._1.position._2 * v + U(y._1.offset) * v);
          if (y._1.side === "West")
            return k(p._1.position._1 * v, p._1.position._2 * v + U(y._1.offset) * v);
        }
      }
    }
    f();
  }, a = ku(vt(r)((g) => {
    if (g.nodes.length <= 2)
      return [];
    const h = U(4);
    if (1 < g.nodes.length) {
      const m = Nr(g.nodes[1])(u);
      if (m.tag === "Nothing")
        return [];
      if (m.tag === "Just") {
        const p = m._1.position._1 * h + m._1.size._1 * h / 2;
        return D(($) => k($, p))(Fn(
          ($) => (y) => g.edgeId + ":" + $ + "->" + y,
          g.nodes,
          Ct(1, g.nodes.length, g.nodes)
        ));
      }
      f();
    }
    return [];
  })), l = (g) => {
    const h = Nr(g.from.node)(u), m = Nr(g.to.node)(u);
    if (h.tag === "Just" && m.tag === "Just") {
      const p = h._1, $ = m._1, y = Ht((v) => (N) => nt.compare(v.score)(N.score))(D((v) => {
        const N = v._1, T = v._2;
        return {
          from: N,
          to: T,
          score: (() => {
            const b = (I, z, G, H, M) => {
              const Z = ca(I)(z), Y = ca(I)(G);
              return Z.lo < Y.hi && Y.lo < Z.hi && (N === "South" ? T === "North" && M._2 > H._2 : N === "North" ? T === "South" && M._2 < H._2 : N === "East" ? T === "West" && M._1 > H._1 : N === "West" && T === "East" && M._1 < H._1) ? 0 : Xl(N)(T)(H)(M);
            }, L = Wl(N)(p), E = Wl(T)($), C = Xl(N)(T)(L)(E);
            return (() => {
              if (C > 0) {
                if (N === "South")
                  return T === "North" ? b(En, p, $, L, E) * 10 | 0 : C * 10 | 0;
                if (N === "North")
                  return T === "South" ? b(Cn, p, $, L, E) * 10 | 0 : C * 10 | 0;
                if (N === "East")
                  return T === "West" ? b(kr, p, $, L, E) * 10 | 0 : C * 10 | 0;
                if (N === "West" && T === "East")
                  return b(Lr, p, $, L, E) * 10 | 0;
              }
              return C * 10 | 0;
            })() + (N === "South" ? T === "North" ? 0 : 15 : N === "North" ? T === "South" ? 0 : 15 : N === "East" ? T === "West" ? 5 : 15 : N === "West" && T === "East" ? 5 : 15) | 0;
          })()
        };
      })([
        k(En, Cn),
        k(kr, Cn),
        k(Lr, Cn),
        k(En, kr),
        k(En, Lr),
        k(Cn, En),
        k(Cn, kr),
        k(Cn, Lr),
        k(kr, En),
        k(Lr, En),
        k(kr, Lr),
        k(Lr, kr)
      ]));
      if (0 < y.length)
        return { from: y[0].from, to: y[0].to };
    }
    return { from: En, to: Cn };
  }, d = ku(D((g) => k(g.id, l(g)))(t)), _ = (g, h, m, p, $, y) => {
    const v = U(4), N = Nr(h)(u);
    if (N.tag === "Nothing")
      return k(0, 0);
    if (N.tag === "Just") {
      const T = Kw(k(m, g))(o);
      if (T.tag === "Just") {
        const b = N._1.position._1 * v + T._1, L = U(4);
        if (g === "South")
          return k(b, (N._1.position._2 + N._1.size._2) * L);
        if (g === "North")
          return k(b, N._1.position._2 * L);
        if (g === "East")
          return k((N._1.position._1 + N._1.size._1) * L, b);
        if (g === "West")
          return k(N._1.position._1 * L, b);
        f();
      }
      if (T.tag === "Nothing") {
        const b = ca(g)(N._1), L = (b.lo + b.hi) / 2, E = ua(m)(a_(b)(D((z) => z.id)(Ht((z) => (G) => ot.compare($(g)(z))($(g)(G)))(lt(
          (z) => {
            const G = ua(z.id)(d);
            if (G.tag === "Just") {
              const H = y(G._1);
              return H === "North" ? g === "North" : H === "South" ? g === "South" : H === "East" ? g === "East" : H === "West" && g === "West";
            }
            if (G.tag === "Nothing")
              return !0;
            f();
          },
          (() => {
            const z = Nr(h)(p);
            if (z.tag === "Nothing")
              return [];
            if (z.tag === "Just")
              return z._1;
            f();
          })()
        ))))), C = (() => {
          if (E.tag === "Nothing")
            return L;
          if (E.tag === "Just")
            return E._1;
          f();
        })(), I = U(4);
        if (g === "South")
          return k(C, (N._1.position._2 + N._1.size._2) * I);
        if (g === "North")
          return k(C, N._1.position._2 * I);
        if (g === "East")
          return k((N._1.position._1 + N._1.size._1) * I, C);
        if (g === "West")
          return k(N._1.position._1 * I, C);
      }
    }
    f();
  };
  return D((g) => {
    const h = ua(g.edge.id)(a);
    if (h.tag === "Nothing")
      return g;
    if (h.tag === "Just")
      return {
        ...g,
        fromPos: In(3)(g.edge.from.node) === "$d:" ? k(h._1, g.fromPos._2) : g.fromPos,
        toPos: In(3)(g.edge.to.node) === "$d:" ? k(h._1, g.toPos._2) : g.toPos
      };
    f();
  })(D((g) => {
    if (g.from.port.tag === "Just" && g.to.port.tag === "Just")
      return {
        edge: g,
        fromPos: c(g.from.node, g.from.port._1, En),
        toPos: c(g.to.node, g.to.port._1, Cn),
        fromSide: En,
        toSide: Cn
      };
    const h = l(g);
    return {
      edge: g,
      fromPos: _(
        h.from,
        g.from.node,
        g.id,
        s,
        (m) => (p) => {
          const $ = Nr(p.to.node)(u);
          if ($.tag === "Nothing")
            return 0;
          if ($.tag === "Just") {
            const y = U(4);
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
        h.to,
        g.to.node,
        g.id,
        i,
        (m) => (p) => {
          const $ = Nr(p.from.node)(u);
          if ($.tag === "Nothing")
            return 0;
          if ($.tag === "Just") {
            const y = U(4);
            if (m === "South" || m === "North")
              return $._1.position._1 * y + $._1.size._1 * y / 2;
            if (m === "East" || m === "West")
              return $._1.position._2 * y + $._1.size._2 * y / 2;
          }
          f();
        },
        (m) => m.to
      ),
      fromSide: h.from,
      toSide: h.to
    };
  })(t));
}, l_ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, ri = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, jw = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Xe);
  return (n) => t(de("IterNode", n, Oe));
})(), Qa = (t) => (n) => t.gapTop + 1 * U(4) + U(n) * 2.5 * U(4), Zw = (t) => (n) => {
  const e = l_(n.edge.id)(t);
  if (e.tag === "Just") {
    if (e._1.partner.tag === "Just")
      return J("Just", { slot1Y: Qa(e._1)(e._1.slot), splitX: e._1.partner._1.splitX, slot2Y: Qa(e._1)(e._1.partner._1.slot) });
    if (e._1.partner.tag === "Nothing")
      return x;
    f();
  }
  if (e.tag === "Nothing")
    return x;
  f();
}, tN = (t) => (n) => {
  const e = w((r) => (o) => K(F)(o.node)(o)(r))(B)(n);
  return ve(qt((r) => (o) => {
    const i = ri(o.node)(e);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just") {
      const s = i._1;
      return qt((u) => (c) => {
        const a = o.edges.length, l = U(4), d = s.position._1 * l, _ = s.position._2 * l, g = s.size._2 * l, h = U((2 * a | 0) + 1 | 0), m = _ + g * U(a - u | 0) / h, p = _ + g * U((a + 1 | 0) + u | 0) / h, $ = d - l * 2.5 * U(u + 1 | 0), y = [
          { start: k(d, m), end: k($, m), direction: _n },
          { start: k($, m), end: k($, p), direction: hn },
          { start: k($, p), end: k(d, p), direction: _n }
        ];
        return { edge: c.id, segments: y, bends: Fn((v) => (N) => v.end, y, Ct(1, 3, y)), bendType: [], jumps: [], reversed: !1 };
      })(o.edges);
    }
    f();
  })(D((r) => ({ node: r._1, edges: r._2 }))(jw(w((r) => (o) => Gt(F)(xn)(o.from.node)([
    o
  ])(r))(B)(t)))));
}, nN = (t) => (n) => {
  const e = w((i) => (s) => K(F)(s.node)(s)(i))(B)(n), r = (i) => {
    const s = ri(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.position._1;
    f();
  }, o = (i) => {
    const s = ri(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.layer;
    f();
  };
  return Ht((i) => (s) => {
    const u = nt.compare(o(i.edge.from.node))(o(s.edge.from.node));
    if (u === "EQ") {
      const c = ot.compare(r(i.edge.from.node))(r(s.edge.from.node));
      return c === "EQ" ? ot.compare(r(i.edge.to.node))(r(s.edge.to.node)) : c;
    }
    return u;
  })(t);
}, ce = (t) => {
  const n = U(4);
  return { x: t.position._1 * n - 2, y: t.position._2 * n - 2, w: t.size._1 * n + 4, h: t.size._2 * n + 4 };
}, eN = (t) => t.from.node === t.to.node, rN = (t) => (n) => (e) => (r) => {
  const o = zw(e)(Vw(t)(n)(e)(r.fromSide)(r.fromPos)(r.toSide)(r.toPos));
  return {
    edge: r.edge.id,
    segments: o,
    bends: Fn((i) => (s) => i.end, o, Ct(1, o.length, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, oN = (t) => (n) => (e) => (r) => {
  const o = [
    { start: k(r.fromPos._1, r.fromPos._2), end: k(r.fromPos._1, t.slot1Y), direction: hn },
    { start: k(r.fromPos._1, t.slot1Y), end: k(t.splitX, t.slot1Y), direction: _n },
    { start: k(t.splitX, t.slot1Y), end: k(t.splitX, t.slot2Y), direction: hn },
    { start: k(t.splitX, t.slot2Y), end: k(r.toPos._1, t.slot2Y), direction: _n },
    { start: k(r.toPos._1, t.slot2Y), end: k(r.toPos._1, r.toPos._2), direction: hn }
  ];
  return {
    edge: r.edge.id,
    segments: o,
    bends: Fn((i) => (s) => i.end, o, Ct(1, 5, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, iN = (t) => (n) => (e) => {
  const r = ri(t.edge.from.node)(e);
  if (r.tag === "Just") {
    const i = ri(t.edge.to.node)(e);
    return i.tag === "Just" ? lt(
      (s) => !(s.h === ce(r._1).h && s.w === ce(r._1).w && s.x === ce(r._1).x && s.y === ce(r._1).y) && !(s.h === ce(i._1).h && s.w === ce(i._1).w && s.x === ce(i._1).x && s.y === ce(i._1).y),
      n
    ) : lt((s) => !(s.h === ce(r._1).h && s.w === ce(r._1).w && s.x === ce(r._1).x && s.y === ce(r._1).y), n);
  }
  const o = ri(t.edge.to.node)(e);
  return o.tag === "Just" ? lt((i) => !(i.h === ce(o._1).h && i.w === ce(o._1).w && i.x === ce(o._1).x && i.y === ce(o._1).y), n) : lt((i) => !0, n);
}, sN = (t) => (n) => {
  const e = l_(n.edge.id)(t);
  if (e.tag === "Just")
    return J("Just", Qa(e._1)(e._1.slot));
  if (e.tag === "Nothing")
    return x;
  f();
}, uN = (t) => (n) => (e) => (r) => (o) => {
  const i = w((a) => (l) => K(F)(l.node)(l)(a))(B)(n), s = Mw(n), u = f_(lt((a) => a.from.node !== a.to.node, t))(n)(e)(r)(o), c = s_(u)(n);
  return [
    ...tN(lt(eN, t))(n),
    ...w((a) => (l) => {
      const d = iN(l)(s)(i), _ = [...d, ...a.edgeObstacles], g = Zw(c)(l), h = (() => {
        if (g.tag === "Just")
          return oN(g._1)(d)(_)(l);
        if (g.tag === "Nothing")
          return rN(sN(c)(l))(d)(_)(l);
        f();
      })();
      return { results: [...a.results, h], edgeObstacles: [...a.edgeObstacles, ...Fw(h.segments)] };
    })({ results: [], edgeObstacles: [] })(nN(u)(n)).results
  ];
}, jr = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Zr = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, cN = (t) => (n) => (e) => {
  if (t.start._1 !== n.start._1)
    return x;
  const r = Zr(jr(t.start._2)(t.end._2))(jr(n.start._2)(n.end._2)), o = jr(Zr(t.start._2)(t.end._2))(Zr(n.start._2)(n.end._2));
  return r < o ? J("Just", { position: k(t.start._1, (r + o) / 2), crossingEdge: e }) : x;
}, aN = (t) => (n) => (e) => {
  if (t.start._2 !== n.start._2)
    return x;
  const r = Zr(jr(t.start._1)(t.end._1))(jr(n.start._1)(n.end._1)), o = jr(Zr(t.start._1)(t.end._1))(Zr(n.start._1)(n.end._1));
  return r < o ? J("Just", { position: k((r + o) / 2, t.start._2), crossingEdge: e }) : x;
}, fN = (t) => (n) => (e) => {
  if (t.direction === "H")
    return aN(t)(n)(e);
  if (t.direction === "V")
    return cN(t)(n)(e);
  f();
}, lN = (t) => (n) => (e) => {
  const r = t + 1 | 0, o = r < 1 ? e : Ct(r, e.length, e);
  return vt(n.segments)((i) => vt(o)((s) => xt((u) => fN(i)(u)(s.edge))(lt(
    (u) => u.direction === "H" ? i.direction === "H" : u.direction === "V" && i.direction === "V",
    s.segments
  ))));
}, gN = (t) => (n) => (e) => n.start._1 > jr(t.start._1)(t.end._1) && n.start._1 < Zr(t.start._1)(t.end._1) && t.start._2 > jr(n.start._2)(n.end._2) && t.start._2 < Zr(n.start._2)(n.end._2) ? J("Just", { position: k(n.start._1, t.start._2), crossingEdge: e }) : x, dN = (t) => (n) => vt(lt((e) => e.direction === "H", t.segments))((e) => vt(n)((r) => xt((o) => gN(e)(o)(r.edge))(lt(
  (o) => o.direction === "V",
  r.segments
)))), _N = (t) => (n) => (e) => [
  ...dN(n)(lt((r) => r.edge !== n.edge, e)),
  ...lN(t)(n)(e)
], Yl = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, g_ = (t) => In(3)(t) === "$d:", hN = (t) => (n) => (e) => w((r) => (o) => {
  const i = Yl(o.from.node)(t), s = (() => {
    if (i.tag === "Nothing")
      return 0;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = Yl(o.to.node)(t), c = (() => {
    if (u.tag === "Nothing")
      return -s;
    if (u.tag === "Just")
      return u._1 - s | 0;
    f();
  })();
  if (c <= 1)
    return { ...r, edges: [...r.edges, o], chains: [...r.chains, { edgeId: o.id, nodes: [o.from.node, o.to.node] }] };
  const a = o.id, l = D((_) => "$d:" + a + ":" + rn(_))(Ut(1, c - 1 | 0)), d = [o.from.node, ...l, o.to.node];
  return {
    ...r,
    layers: w((_) => (g) => {
      const h = g._2, m = Jm(s + g._1 | 0)((p) => [...p, h])(_);
      if (m.tag === "Nothing")
        return _;
      if (m.tag === "Just")
        return m._1;
      f();
    })(r.layers)(Fn(re, Ut(1, c - 1 | 0), l)),
    edges: [
      ...r.edges,
      ...Fn(
        (_) => (g) => ({ id: a + ":" + _ + "->" + g, from: { node: _, port: o.from.port }, to: { node: g, port: o.to.port }, label: x }),
        d,
        Ct(1, d.length, d)
      )
    ],
    chains: [...r.chains, { edgeId: o.id, nodes: d }]
  };
})({ layers: e, edges: [], chains: [] })(n), Lu = /* @__PURE__ */ (() => {
  const t = {
    eq: (n) => (e) => n._1 === e._1 && (n._2 === "North" ? e._2 === "North" : n._2 === "South" ? e._2 === "South" : n._2 === "East" ? e._2 === "East" : n._2 === "West" && e._2 === "West")
  };
  return {
    compare: (n) => (e) => {
      const r = F.compare(n._1)(e._1);
      if (r === "LT")
        return Bn;
      if (r === "GT")
        return Hn;
      if (n._2 === "North")
        return e._2 === "North" ? te : Bn;
      if (e._2 === "North")
        return Hn;
      if (n._2 === "South")
        return e._2 === "South" ? te : Bn;
      if (e._2 === "South")
        return Hn;
      if (n._2 === "East")
        return e._2 === "East" ? te : Bn;
      if (e._2 === "East")
        return Hn;
      if (n._2 === "West" && e._2 === "West")
        return te;
      f();
    },
    Eq0: () => t
  };
})(), pN = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = Lu.compare(t)(s._3);
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
}, mN = /* @__PURE__ */ mn(F)(Xt), aa = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, $N = /* @__PURE__ */ mn(Lu)(Xt), Ul = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Xe);
  return (n) => t(de("IterNode", n, Oe));
})(), oi = (t) => (n) => (e) => (r) => {
  const o = pN(k(n, e))(t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just")
    return o._1;
  f();
}, d_ = (t) => (n) => (e) => {
  const r = mN(ve(D((s) => qt((u) => (c) => k(c, u))(s))(t))), o = (s, u) => {
    if (s === "South") {
      const c = aa(u.to.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    if (s === "North") {
      const c = aa(u.from.node)(r);
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    }
    return 0;
  }, i = (s) => w((u) => (c) => Zn(
    Lu.compare,
    jn,
    $N(D((a) => k(k(a._1, s), a._2))(Ul(a_({
      lo: 0,
      hi: (() => {
        const a = aa(c._1)(e);
        if (a.tag === "Just")
          return a._1._1;
        if (a.tag === "Nothing")
          return In(3)(c._1) === "$d:" ? 0 : 1;
        f();
      })()
    })(D((a) => a.id)(Ht((a) => (l) => nt.compare(o(s, a))(o(s, l)))(c._2)))))),
    u
  ))(B)(Ul(w((u) => (c) => c.from.node === c.to.node ? u : s === "South" ? Gt(F)(xn)(c.from.node)([c])(u) : s === "North" ? Gt(F)(xn)(c.to.node)([c])(u) : u)(B)(n)));
  return Zn(Lu.compare, jn, i(Cn), i(En));
}, __ = (t) => t, h_ = (t) => t, p_ = (t) => t, yN = /* @__PURE__ */ w((t) => (n) => K(F)(n)()(t))(B), vN = /* @__PURE__ */ (() => {
  const t = me.unfoldr((n) => {
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
        return e(r._5, Zt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Qt);
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
      const u = F.compare(t)(s._3);
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
}, Ce = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, hr = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, sr = /* @__PURE__ */ mn(F)(Xt), fa = /* @__PURE__ */ Bd(F), qa = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Xe);
  return (n) => t(de("IterNode", n, Oe));
})(), xN = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, wN = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = nt.compare(t)(s._3);
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
}, Vl = /* @__PURE__ */ p_("VDown"), Ml = /* @__PURE__ */ p_("VUp"), NN = /* @__PURE__ */ h_("ForwardPhase"), TN = /* @__PURE__ */ h_("StackPhase"), Kl = /* @__PURE__ */ __("HRight"), jl = /* @__PURE__ */ __("HLeft"), Zl = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, JN = (t) => (n) => (e) => {
  const r = w((u) => (c) => Gt(F)(Tn)(c.tgt)(1)(u))(B)(t), o = vN(yN([
    ...D((u) => u.src)(t),
    ...D((u) => u.tgt)(t),
    ...(() => {
      const u = (c, a) => {
        if (c.tag === "Leaf")
          return a;
        if (c.tag === "Node")
          return u(c._5, Zt("Cons", c._4, u(c._6, a)));
        f();
      };
      return Ot(gn.foldr, u(n, Qt));
    })()
  ])), i = w((u) => (c) => Gt(F)(xn)(c.src)([{ target: c.tgt, sep: c.sep }])(u))(B)(t);
  return ((u) => (c) => (a) => {
    let l = u, d = c, _ = a, g = !0, h;
    for (; g; ) {
      const m = l, p = d, $ = _, y = Dt((v) => x, (v) => (N) => J("Just", { head: v, tail: N }), m);
      if (y.tag === "Nothing") {
        g = !1, h = $;
        continue;
      }
      if (y.tag === "Just") {
        const v = ut(y._1.head)($), N = (() => {
          if (v.tag === "Nothing")
            return 0;
          if (v.tag === "Just")
            return v._1;
          f();
        })(), T = w((b) => (L) => {
          const E = ut(L.target)(b.result), C = N + L.sep, I = ut(L.target)(b.indeg), z = (() => {
            if (I.tag === "Nothing")
              return -1;
            if (I.tag === "Just")
              return I._1 - 1 | 0;
            f();
          })();
          return {
            newQueue: z === 0 ? [...b.newQueue, L.target] : b.newQueue,
            result: K(F)(L.target)((() => {
              if (E.tag === "Nothing")
                return C;
              if (E.tag === "Just") {
                if (e === "VDown")
                  return Ce(E._1)(C);
                if (e === "VUp")
                  return hr(E._1)(C);
              }
              f();
            })())(b.result),
            indeg: K(F)(L.target)(z)(b.indeg)
          };
        })({ newQueue: [], result: $, indeg: p })((() => {
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
  ))(r)(w((u) => (c) => K(F)(c)(0)(u))(B)(o));
}, bN = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, Zt("Cons", i._4, n(i._6, s)));
    f();
  }, e = Ot(gn.foldr, n(t, Qt)), r = w(Ce)(999999)(e);
  if (r === 0 || e.length === 0)
    return t;
  const o = (i) => {
    if (i.tag === "Leaf")
      return B;
    if (i.tag === "Node")
      return nn("Node", i._1, i._2, i._3, i._4 - r, o(i._5), o(i._6));
    f();
  };
  return o(t);
}, m_ = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, Zt("Cons", i._4, n(i._6, s)));
    f();
  }, e = n(t, Qt), r = (i) => (s) => {
    let u = i, c = s, a = !0, l;
    for (; a; ) {
      const d = u, _ = c;
      if (_.tag === "Nil") {
        a = !1, l = d;
        continue;
      }
      if (_.tag === "Cons") {
        u = hr(d)(_._1), c = _._2;
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
        u = Ce(d)(_._1), c = _._2;
        continue;
      }
      f();
    }
    return l;
  };
  return r(-999999)(e) - o(999999)(e);
}, Wi = (t) => (n) => ((r) => (o) => {
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
})())([n]), kN = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (l) => {
  const d = (A, P, W) => {
    const R = A.from.node === P ? A.from.port : A.to.node === P ? A.to.port : x;
    if (R.tag === "Just") {
      const Q = ut(P)(o);
      if (Q.tag === "Just") {
        const X = un((tt) => tt.id === R._1)(Q._1);
        if (X.tag === "Just") {
          const tt = U(X._1.offset) * U(4);
          return W === "North" || W === "South" ? tt : 0;
        }
        if (X.tag === "Nothing") {
          const tt = ut(P)(r), V = oi(s)(A.id)(W)((() => {
            if (tt.tag === "Nothing")
              return 0.5;
            if (tt.tag === "Just")
              return tt._1._1 / 2;
            f();
          })());
          return W === "North" || W === "South" ? V : 0;
        }
        f();
      }
      if (Q.tag === "Nothing") {
        const X = ut(P)(r), tt = oi(s)(A.id)(W)((() => {
          if (X.tag === "Nothing")
            return 0.5;
          if (X.tag === "Just")
            return X._1._1 / 2;
          f();
        })());
        return W === "North" || W === "South" ? tt : 0;
      }
      f();
    }
    if (R.tag === "Nothing") {
      const Q = ut(P)(r), X = oi(s)(A.id)(W)((() => {
        if (Q.tag === "Nothing")
          return 0.5;
        if (Q.tag === "Just")
          return Q._1._1 / 2;
        f();
      })());
      return W === "North" || W === "South" ? X : 0;
    }
    f();
  }, _ = (A, P) => {
    if (A.from.node === P) {
      if (l === "HRight")
        return En;
      if (l === "HLeft")
        return Cn;
      f();
    }
    if (l === "HRight")
      return Cn;
    if (l === "HLeft")
      return En;
    f();
  }, g = (A, P, W) => w((R) => (Q) => K(F)(Q)((() => {
    const X = ut(Q)(R);
    if (X.tag === "Nothing")
      return 0 + P;
    if (X.tag === "Just")
      return X._1 + P;
    f();
  })())(R))(W)(Wi(c)(A)), h = (() => {
    if (l === "HRight")
      return e;
    if (l === "HLeft")
      return pn(e);
    f();
  })(), m = (A) => {
    const P = ut(A)(r);
    if (P.tag === "Nothing")
      return 1;
    if (P.tag === "Just")
      return P._1._1;
    f();
  }, p = sr(ve(qt((A) => (P) => D((W) => k(W, A))(P))(e))), $ = (A, P) => In(3)(A) === "$d:" && In(3)(P) === "$d:" || In(3)(A) === "$d:" || In(3)(P) === "$d:" ? 10 : U(t.nodeGap), y = w((A) => (P) => fa((W) => J(
    "Just",
    [
      ...(() => {
        if (W.tag === "Nothing")
          return [];
        if (W.tag === "Just")
          return W._1;
        f();
      })(),
      P
    ]
  ))(P.to.node)(A))(B)(i), v = w((A) => (P) => fa((W) => J(
    "Just",
    [
      ...(() => {
        if (W.tag === "Nothing")
          return [];
        if (W.tag === "Just")
          return W._1;
        f();
      })(),
      P
    ]
  ))(P.from.node)(A))(B)(i), N = ve(e), T = w((A) => (P) => {
    const W = ut(P)(c.root), R = (() => {
      if (W.tag === "Nothing")
        return P;
      if (W.tag === "Just")
        return W._1;
      f();
    })();
    return P === R ? A : fa((Q) => J(
      "Just",
      (() => {
        if (Q.tag === "Nothing")
          return !0;
        if (Q.tag === "Just")
          return Q._1;
        f();
      })() && In(3)(P) === "$d:"
    ))(R)(A);
  })(sr(D((A) => k(A, !0))(ci(F.compare)((() => {
    const A = (P, W) => {
      if (P.tag === "Leaf")
        return W;
      if (P.tag === "Node")
        return A(P._5, Zt("Cons", P._4, A(P._6, W)));
      f();
    };
    return Ot(gn.foldr, A(c.root, Qt));
  })()))))(N), b = (A, P) => {
    const W = A.free, R = ut(W)(c.root), Q = (() => {
      if (R.tag === "Nothing")
        return W;
      if (R.tag === "Just")
        return R._1;
      f();
    })(), X = ut(Q)(T), tt = (() => {
      if (X.tag === "Nothing")
        return !0;
      if (X.tag === "Just")
        return X._1;
      f();
    })();
    return w((V) => (O) => {
      if (V.edge.tag === "Just")
        return V;
      if (V.edge.tag === "Nothing") {
        if ((() => {
          const ct = ut(Q)(P.su);
          return !tt && (() => {
            const dt = ut(O.from.node)(p);
            return O.from.node !== O.to.node && (() => {
              const Bt = ut(O.to.node)(p);
              return (() => {
                if (dt.tag === "Nothing")
                  return -1;
                if (dt.tag === "Just")
                  return dt._1;
                f();
              })() === (() => {
                if (Bt.tag === "Nothing")
                  return -1;
                if (Bt.tag === "Just")
                  return Bt._1;
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
          return V;
        const j = O.from.node === W ? O.to.node : O.from.node, rt = ut(j)(c.root), et = (() => {
          if (rt.tag === "Nothing")
            return j;
          if (rt.tag === "Just")
            return rt._1;
          f();
        })(), ft = et !== Q;
        return ft && (() => {
          const ct = ut(et)(P.blockFinished);
          if (ct.tag === "Nothing")
            return !1;
          if (ct.tag === "Just")
            return ct._1;
          f();
        })() ? { ...V, edge: J("Just", O), hasEdges: !0 } : { ...V, hasEdges: V.hasEdges || ft };
      }
      f();
    })({ edge: x, hasEdges: !1 })((() => {
      if (A.isRoot) {
        if (l === "HRight") {
          const V = ut(W)(y);
          if (V.tag === "Nothing")
            return [];
          if (V.tag === "Just")
            return V._1;
          f();
        }
        if (l === "HLeft") {
          const V = ut(W)(v);
          if (V.tag === "Nothing")
            return [];
          if (V.tag === "Just")
            return V._1;
        }
        f();
      }
      if (l === "HRight") {
        const V = ut(W)(v);
        if (V.tag === "Nothing")
          return [];
        if (V.tag === "Just")
          return V._1;
        f();
      }
      if (l === "HLeft") {
        const V = ut(W)(y);
        if (V.tag === "Nothing")
          return [];
        if (V.tag === "Just")
          return V._1;
      }
      f();
    })());
  }, L = (A, P, W, R) => {
    const Q = (() => {
      if (a === "VDown")
        return -1e18;
      if (a === "VUp")
        return 1e18;
      f();
    })(), X = { free: P, isRoot: W }, tt = b(X, R);
    if (tt.edge.tag === "Nothing")
      return tt.hasEdges ? { thresh: Q, state: { ...R, queue: [...R.queue, X] } } : { thresh: Q, state: R };
    if (tt.edge.tag === "Just") {
      const V = tt.edge._1.from.node === P ? tt.edge._1.to.node : tt.edge._1.from.node;
      return {
        thresh: (() => {
          const O = ut((() => {
            const ft = ut(V)(c.root);
            if (ft.tag === "Nothing")
              return V;
            if (ft.tag === "Just")
              return ft._1;
            f();
          })())(R.x), j = ut(V)(u), rt = ut(P)(u), et = (() => {
            if (O.tag === "Just")
              return O._1;
            if (O.tag === "Nothing")
              return x;
            f();
          })();
          return (() => {
            if (et.tag === "Nothing")
              return 0;
            if (et.tag === "Just")
              return et._1;
            f();
          })() + (() => {
            if (j.tag === "Nothing")
              return 0;
            if (j.tag === "Just")
              return j._1;
            f();
          })() + d(
            tt.edge._1,
            V,
            (() => {
              if (W) {
                if (l === "HRight")
                  return En;
                if (l === "HLeft")
                  return Cn;
                f();
              }
              if (l === "HRight")
                return Cn;
              if (l === "HLeft")
                return En;
              f();
            })()
          ) - (() => {
            if (rt.tag === "Nothing")
              return 0;
            if (rt.tag === "Just")
              return rt._1;
            f();
          })() - d(
            tt.edge._1,
            P,
            (() => {
              if (W) {
                if (l === "HRight")
                  return Cn;
                if (l === "HLeft")
                  return En;
                f();
              }
              if (l === "HRight")
                return En;
              if (l === "HLeft")
                return Cn;
              f();
            })()
          );
        })(),
        state: {
          ...R,
          su: K(F)((() => {
            const O = ut(tt.edge._1.from.node)(c.root);
            if (O.tag === "Nothing")
              return tt.edge._1.from.node;
            if (O.tag === "Just")
              return O._1;
            f();
          })())(!0)(K(F)((() => {
            const O = ut(tt.edge._1.to.node)(c.root);
            if (O.tag === "Nothing")
              return tt.edge._1.to.node;
            if (O.tag === "Just")
              return O._1;
            f();
          })())(!0)(R.su))
        }
      };
    }
    f();
  }, E = (A, P, W, R) => {
    const Q = P === A, X = ut(P)(c.align), tt = (() => {
      if (X.tag === "Nothing")
        return P === A;
      if (X.tag === "Just")
        return X._1 === A;
      f();
    })();
    if (!(Q || tt))
      return { thresh: W, state: R };
    const V = (() => {
      if (a === "VDown")
        return Q && W <= -1e18;
      if (a === "VUp")
        return Q && W >= 1e18;
      f();
    })() ? L(A, P, !0, R) : { thresh: W, state: R };
    return (() => {
      if (a === "VDown")
        return V.thresh <= -1e18 && tt;
      if (a === "VUp")
        return V.thresh >= 1e18 && tt;
      f();
    })() ? L(A, P, !1, V.state) : V;
  }, C = (A) => (P) => (W) => {
    const R = ut(W)(n.nodeIndex), Q = (() => {
      if (R.tag === "Nothing")
        return 0;
      if (R.tag === "Just")
        return R._1;
      f();
    })(), X = un((rt) => ge(gr)(W)(rt))(h), tt = (() => {
      if (X.tag === "Nothing")
        return [];
      if (X.tag === "Just")
        return X._1;
      f();
    })(), V = tt.length;
    if ((() => {
      if (a === "VDown")
        return Q <= 0;
      if (a === "VUp")
        return Q >= (V - 1 | 0);
      f();
    })()) {
      const rt = E(A, W, P.thresh, P.st);
      return { ...P, st: rt.state, thresh: rt.thresh };
    }
    const O = (() => {
      if (a === "VDown")
        return Q - 1 | 0;
      if (a === "VUp")
        return Q + 1 | 0;
      f();
    })(), j = O >= 0 && O < tt.length ? J("Just", tt[O]) : x;
    if (j.tag === "Nothing")
      return P;
    if (j.tag === "Just") {
      const rt = ut(j._1)(c.root), et = (() => {
        if (rt.tag === "Nothing")
          return j._1;
        if (rt.tag === "Just")
          return rt._1;
        f();
      })(), ft = E(A, W, P.thresh, I(et)(P.st)), ct = (() => {
        const Ft = ut(A)(ft.state.sink);
        if (Ft.tag === "Nothing")
          return A === A;
        if (Ft.tag === "Just")
          return Ft._1 === A;
        f();
      })() ? {
        ...ft.state,
        sink: K(F)(A)((() => {
          const Ft = ut(et)(ft.state.sink);
          if (Ft.tag === "Nothing")
            return et;
          if (Ft.tag === "Just")
            return Ft._1;
          f();
        })())(ft.state.sink)
      } : ft.state, dt = ut(et)(ct.sink), Bt = (() => {
        if (dt.tag === "Nothing")
          return et;
        if (dt.tag === "Just")
          return dt._1;
        f();
      })(), St = ut(A)(ct.sink), en = (() => {
        if (St.tag === "Nothing")
          return A;
        if (St.tag === "Just")
          return St._1;
        f();
      })();
      if (en === Bt) {
        const Ft = ut(et)(ct.x), Vt = (() => {
          if (Ft.tag === "Just")
            return Ft._1;
          if (Ft.tag === "Nothing")
            return x;
          f();
        })(), se = (() => {
          if (Vt.tag === "Nothing")
            return 0;
          if (Vt.tag === "Just")
            return Vt._1;
          f();
        })(), zn = ut(A)(ct.x), Qn = (() => {
          if (zn.tag === "Just")
            return zn._1;
          if (zn.tag === "Nothing")
            return x;
          f();
        })(), It = (() => {
          if (Qn.tag === "Nothing")
            return 0;
          if (Qn.tag === "Just")
            return Qn._1;
          f();
        })(), Pt = $(W, j._1), ue = ut(j._1)(u), qn = ut(W)(u), Wn = (() => {
          if (ue.tag === "Nothing")
            return 0;
          if (ue.tag === "Just")
            return ue._1;
          f();
        })() - (() => {
          if (qn.tag === "Nothing")
            return 0;
          if (qn.tag === "Just")
            return qn._1;
          f();
        })();
        if (a === "VDown") {
          const Sn = hr(se + Wn + m(j._1) + Pt)(ft.thresh);
          return {
            st: { ...ct, x: K(F)(A)(J("Just", P.initial ? Sn : hr(It)(Sn)))(ct.x) },
            initial: !1,
            thresh: ft.thresh
          };
        }
        if (a === "VUp") {
          const Sn = Ce(se + Wn - Pt - m(W))(ft.thresh);
          return {
            st: { ...ct, x: K(F)(A)(J("Just", P.initial ? Sn : Ce(It)(Sn)))(ct.x) },
            initial: !1,
            thresh: ft.thresh
          };
        }
        f();
      }
      const _t = ut(et)(ct.x), bt = (() => {
        if (_t.tag === "Just")
          return _t._1;
        if (_t.tag === "Nothing")
          return x;
        f();
      })(), ht = (() => {
        if (bt.tag === "Nothing")
          return 0;
        if (bt.tag === "Just")
          return bt._1;
        f();
      })(), $t = ut(A)(ct.x), st = (() => {
        if ($t.tag === "Just")
          return $t._1;
        if ($t.tag === "Nothing")
          return x;
        f();
      })(), gt = (() => {
        if (st.tag === "Nothing")
          return 0;
        if (st.tag === "Just")
          return st._1;
        f();
      })(), it = U(t.nodeGap), at = ut(W)(u), Tt = ut(j._1)(u), wt = (() => {
        if (at.tag === "Nothing")
          return 0;
        if (at.tag === "Just")
          return at._1;
        f();
      })() - (() => {
        if (Tt.tag === "Nothing")
          return 0;
        if (Tt.tag === "Just")
          return Tt._1;
        f();
      })();
      return {
        st: {
          ...ct,
          classEdges: [
            ...ct.classEdges,
            {
              src: en,
              tgt: Bt,
              sep: (() => {
                if (a === "VDown")
                  return gt + wt - ht - m(j._1) - it;
                if (a === "VUp")
                  return gt + wt + m(W) + it - ht;
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
  }, I = (A) => (P) => {
    const W = ut(A)(P.x), R = (() => {
      if (W.tag === "Just")
        return W._1;
      if (W.tag === "Nothing")
        return x;
      f();
    })();
    if (R.tag === "Just")
      return P;
    if (R.tag === "Nothing") {
      const Q = w(C(A))({
        st: { ...P, x: K(F)(A)(J("Just", 0))(P.x) },
        initial: !0,
        thresh: (() => {
          if (a === "VDown")
            return -1e18;
          if (a === "VUp")
            return 1e18;
          f();
        })()
      })(Wi(c)(A));
      return { ...Q.st, blockFinished: K(F)(A)(!0)(Q.st.blockFinished) };
    }
    f();
  }, z = w((A) => (P) => w((W) => (R) => {
    const Q = ut(R)(c.root), X = (() => {
      if (Q.tag === "Nothing")
        return R;
      if (Q.tag === "Just")
        return Q._1;
      f();
    })();
    return X === R ? I(X)(W) : W;
  })(A)((() => {
    if (a === "VDown")
      return P;
    if (a === "VUp")
      return pn(P);
    f();
  })()))({
    x: sr(D((A) => k(A, x))(N)),
    sink: sr(D((A) => k(A, A))(N)),
    classEdges: [],
    su: B,
    blockFinished: B,
    queue: []
  })(h), G = JN(z.classEdges)(z.sink)(a), H = (A, P, W, R) => {
    const Q = ut(P)(R), X = ut(P)(u);
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
    })() + d(A, P, W);
  }, M = sr(D((A) => k(A, !0))(ci(F.compare)((() => {
    const A = (P, W) => {
      if (P.tag === "Leaf")
        return W;
      if (P.tag === "Node")
        return A(P._5, Zt("Cons", P._4, A(P._6, W)));
      f();
    };
    return Ot(gn.foldr, A(c.root, Qt));
  })()))), Z = (A) => (P) => (W) => {
    const R = b(W, { su: P.su, blockFinished: M }), Q = {
      phase: A,
      ppFree: W.free,
      ppIsRoot: W.isRoot,
      edgeId: x,
      delta: 0,
      avail: 0,
      shift: 0,
      freeSu: (() => {
        const X = ut((() => {
          const tt = ut(W.free)(c.root);
          if (tt.tag === "Nothing")
            return W.free;
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
      hasEdges: R.hasEdges,
      candCount: (() => {
        if (W.isRoot) {
          if (l === "HRight") {
            const X = ut(W.free)(y);
            if (X.tag === "Nothing")
              return 0;
            if (X.tag === "Just")
              return X._1.length;
            f();
          }
          if (l === "HLeft") {
            const X = ut(W.free)(v);
            if (X.tag === "Nothing")
              return 0;
            if (X.tag === "Just")
              return X._1.length;
          }
          f();
        }
        if (l === "HRight") {
          const X = ut(W.free)(v);
          if (X.tag === "Nothing")
            return 0;
          if (X.tag === "Just")
            return X._1.length;
          f();
        }
        if (l === "HLeft") {
          const X = ut(W.free)(y);
          if (X.tag === "Nothing")
            return 0;
          if (X.tag === "Just")
            return X._1.length;
        }
        f();
      })()
    };
    if (R.edge.tag === "Nothing")
      return { ...P, stack: [...P.stack, W], trace: [...P.trace, Q], x: P.x };
    if (R.edge.tag === "Just") {
      const X = R.edge._1.from.node === W.free ? k(R.edge._1.from.node, R.edge._1.to.node) : k(R.edge._1.to.node, R.edge._1.from.node), tt = H(R.edge._1, X._1, _(R.edge._1, X._1), P.x) - H(R.edge._1, X._2, _(R.edge._1, X._2), P.x), V = ut(X._1)(c.root), O = (() => {
        if (V.tag === "Nothing")
          return X._1;
        if (V.tag === "Just")
          return V._1;
        f();
      })(), j = { ...Q, edgeId: J("Just", R.edge._1.id), delta: tt };
      if (tt > 0 && tt < 1e300) {
        const rt = w((ct) => (dt) => {
          const Bt = ut(dt)(p), St = (() => {
            if (Bt.tag === "Nothing")
              return -1;
            if (Bt.tag === "Just")
              return Bt._1;
            f();
          })();
          if (St >= 0 && St < e.length) {
            const bt = e[St], ht = ut(dt)(n.nodeIndex), $t = (() => {
              if (ht.tag === "Nothing")
                return -2;
              if (ht.tag === "Just")
                return ht._1 - 1 | 0;
              f();
            })();
            return $t >= 0 && $t < bt.length ? Ce(ct)((() => {
              const st = ut(dt)(P.x), gt = ut(dt)(u), it = ut(bt[$t])(P.x), at = ut(bt[$t])(u);
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
              })() + m(bt[$t]) + $(dt, bt[$t]));
            })()) : ct;
          }
          const en = ut(dt)(n.nodeIndex), _t = (() => {
            if (en.tag === "Nothing")
              return -2;
            if (en.tag === "Just")
              return en._1 - 1 | 0;
            f();
          })();
          return _t >= 0 && _t < 0 ? Ce(ct)((() => {
            const bt = ut(dt)(P.x), ht = ut(dt)(u), $t = ut([][_t])(P.x), st = ut([][_t])(u);
            return (() => {
              if (bt.tag === "Nothing")
                return 0;
              if (bt.tag === "Just")
                return bt._1;
              f();
            })() + (() => {
              if (ht.tag === "Nothing")
                return 0;
              if (ht.tag === "Just")
                return ht._1;
              f();
            })() - ((() => {
              if ($t.tag === "Nothing")
                return 0;
              if ($t.tag === "Just")
                return $t._1;
              f();
            })() + (() => {
              if (st.tag === "Nothing")
                return 0;
              if (st.tag === "Just")
                return st._1;
              f();
            })() + m([][_t]) + $(dt, [][_t]));
          })()) : ct;
        })(tt)(Wi(c)(O)), et = rt > 0 ? -rt : 0, ft = { ...P, x: rt > 0 ? g(O, et, P.x) : P.x, trace: [...P.trace, { ...j, avail: rt, shift: et }] };
        return rt > 0 ? ft : { ...ft, stack: [...ft.stack, W] };
      }
      if (tt < 0 && -tt < 1e300) {
        const rt = w((ct) => (dt) => {
          const Bt = ut(dt)(p), St = (() => {
            if (Bt.tag === "Nothing")
              return -1;
            if (Bt.tag === "Just")
              return Bt._1;
            f();
          })();
          if (St >= 0 && St < e.length) {
            const bt = e[St], ht = ut(dt)(n.nodeIndex), $t = (() => {
              if (ht.tag === "Nothing")
                return 0;
              if (ht.tag === "Just")
                return ht._1 + 1 | 0;
              f();
            })();
            return $t >= 0 && $t < bt.length ? Ce(ct)((() => {
              const st = ut(bt[$t])(P.x), gt = ut(bt[$t])(u), it = ut(dt)(P.x), at = ut(dt)(u);
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
              })() + m(dt) + $(dt, bt[$t]));
            })()) : ct;
          }
          const en = ut(dt)(n.nodeIndex), _t = (() => {
            if (en.tag === "Nothing")
              return 0;
            if (en.tag === "Just")
              return en._1 + 1 | 0;
            f();
          })();
          return _t >= 0 && _t < 0 ? Ce(ct)((() => {
            const bt = ut([][_t])(P.x), ht = ut([][_t])(u), $t = ut(dt)(P.x), st = ut(dt)(u);
            return (() => {
              if (bt.tag === "Nothing")
                return 0;
              if (bt.tag === "Just")
                return bt._1;
              f();
            })() + (() => {
              if (ht.tag === "Nothing")
                return 0;
              if (ht.tag === "Just")
                return ht._1;
              f();
            })() - ((() => {
              if ($t.tag === "Nothing")
                return 0;
              if ($t.tag === "Just")
                return $t._1;
              f();
            })() + (() => {
              if (st.tag === "Nothing")
                return 0;
              if (st.tag === "Just")
                return st._1;
              f();
            })() + m(dt) + $(dt, [][_t]));
          })()) : ct;
        })(-tt)(Wi(c)(O)), et = rt > 0 ? rt : 0, ft = { ...P, x: rt > 0 ? g(O, et, P.x) : P.x, trace: [...P.trace, { ...j, avail: rt, shift: et }] };
        return rt > 0 ? ft : { ...ft, stack: [...ft.stack, W] };
      }
      return { ...P, stack: [...P.stack, W], trace: [...P.trace, j], x: P.x };
    }
    f();
  }, Y = w(Z(NN))({
    x: sr(D((A) => k(
      A,
      (() => {
        const P = ut(A)(c.root), W = (() => {
          if (P.tag === "Nothing")
            return A;
          if (P.tag === "Just")
            return P._1;
          f();
        })(), R = ut(W)(z.x), Q = ut((() => {
          const tt = ut(W)(z.sink);
          if (tt.tag === "Nothing")
            return W;
          if (tt.tag === "Just")
            return tt._1;
          f();
        })())(G), X = (() => {
          if (R.tag === "Just")
            return R._1;
          if (R.tag === "Nothing")
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
    ))(N)),
    su: z.su,
    stack: [],
    trace: []
  })(z.queue), q = w(Z(TN))({ ...Y, stack: [] })(pn(Y.stack));
  return { x: q.x, queue: z.queue, trace: q.trace };
}, LN = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (l) => kN(t)(n)(e)(r)(o)(i)(s)(u)(c)(a)(l).x, SN = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = (c, a, l) => {
    const d = ut(a)(e), _ = (() => {
      if (d.tag === "Nothing")
        return 0.5;
      if (d.tag === "Just")
        return d._1._1 / 2;
      f();
    })(), g = c.from.node === a ? c.from.port : c.to.node === a ? c.to.port : x;
    if (g.tag === "Just") {
      const h = ut(a)(n);
      if (h.tag === "Just") {
        const m = un((p) => p.id === g._1)(h._1);
        if (m.tag === "Just") {
          const p = U(m._1.offset) * U(4);
          return l === "North" || l === "South" ? p : 0;
        }
        if (m.tag === "Nothing") {
          const p = oi(o)(c.id)(l)(_);
          return l === "North" || l === "South" ? p : 0;
        }
        f();
      }
      if (h.tag === "Nothing") {
        const m = oi(o)(c.id)(l)(_);
        return l === "North" || l === "South" ? m : 0;
      }
      f();
    }
    if (g.tag === "Nothing") {
      const h = oi(o)(c.id)(l)(_);
      return l === "North" || l === "South" ? h : 0;
    }
    f();
  }, u = (c) => (a) => (l) => (d) => {
    let _ = c, g = a, h = l, m = d, p = !0, $;
    for (; p; ) {
      const y = _, v = g, N = h, b = Dt((L) => x, (L) => (E) => J("Just", { head: L, tail: E }), m);
      if (b.tag === "Nothing") {
        p = !1, $ = y;
        continue;
      }
      if (b.tag === "Just") {
        const L = b._1.head, E = un((I) => I.from.node === N && I.to.node === L || I.from.node === L && I.to.node === N)(r), C = (() => {
          if (E.tag === "Nothing")
            return v + 0;
          if (E.tag === "Just")
            return v + (s(E._1, N, E._1.from.node === N ? En : Cn) - s(
              E._1,
              L,
              E._1.from.node === L ? En : Cn
            ));
          f();
        })();
        _ = K(F)(L)(C)(y), g = C, h = L, m = b._1.tail;
        continue;
      }
      f();
    }
    return $;
  };
  return w((c) => (a) => {
    const l = Dt((g) => x, (g) => (h) => J("Just", { head: g, tail: h }), Wi(t)(a)), d = (() => {
      if (l.tag === "Nothing")
        return K(F)(a)(0)(B);
      if (l.tag === "Just")
        return u(K(F)(l._1.head)(0)(B))(0)(l._1.head)(l._1.tail);
      f();
    })(), _ = w((g) => (h) => hr(g)(-h._2))(0)(qa(d));
    return w((g) => (h) => K(F)(h._1)(h._2 + _)(g))(c)(qa(d));
  })(B)(ci(F.compare)((() => {
    const c = (a, l) => {
      if (a.tag === "Leaf")
        return l;
      if (a.tag === "Node")
        return c(a._5, Zt("Cons", a._4, c(a._6, l)));
      f();
    };
    return Ot(gn.foldr, c(t.root, Qt));
  })()));
}, CN = (t) => (n) => {
  const e = (o, i, s) => In(3)(i) === "$d:" && Pd(
    g_,
    (() => {
      const u = ut(i)(t.preds);
      if (u.tag === "Nothing")
        return [];
      if (u.tag === "Just")
        return u._1;
      f();
    })()
  ), r = (o) => (i) => (s) => (u) => (c) => (a) => (l) => {
    let d = o, _ = i, g = u, h = a, m = l, p = !0, $;
    for (; p; ) {
      const y = d, v = _, N = g, T = h, b = m, L = v.length;
      if (b >= L) {
        p = !1, $ = y;
        continue;
      }
      const E = b >= 0 && b < v.length ? J("Just", v[b]) : x, C = (() => {
        if (E.tag === "Nothing")
          return "";
        if (E.tag === "Just")
          return E._1;
        f();
      })(), I = e(t, C);
      if (b === (L - 1 | 0) || I) {
        const z = (() => {
          if (I) {
            const G = ut(C)(t.preds), H = (() => {
              if (G.tag === "Nothing")
                return [];
              if (G.tag === "Just")
                return G._1;
              f();
            })();
            if (0 < H.length) {
              const M = N - 1 | 0, Z = ut(H[0])(t.nodeIndex);
              if (Z.tag === "Nothing")
                return M;
              if (Z.tag === "Just")
                return Z._1;
              f();
            }
          }
          return N - 1 | 0;
        })();
        d = w((G) => (H) => {
          if (H >= 0 && H < v.length) {
            const M = v[H];
            return e(t, M) ? G : w((Z) => (Y) => {
              const q = ut(Y)(t.nodeIndex), A = (() => {
                if (q.tag === "Nothing")
                  return 0;
                if (q.tag === "Just")
                  return q._1;
                f();
              })();
              return A < T || A > z ? K(F)(Y + "→" + M)()(Z) : Z;
            })(G)((() => {
              const Z = ut(M)(t.preds);
              if (Z.tag === "Nothing")
                return [];
              if (Z.tag === "Just")
                return Z._1;
              f();
            })());
          }
          return e(t, "") ? G : w((M) => (Z) => {
            const Y = ut(Z)(t.nodeIndex), q = (() => {
              if (Y.tag === "Nothing")
                return 0;
              if (Y.tag === "Just")
                return Y._1;
              f();
            })();
            return q < T || q > z ? K(F)(Z + "→")()(M) : M;
          })(G)((() => {
            const M = ut("")(t.preds);
            if (M.tag === "Nothing")
              return [];
            if (M.tag === "Just")
              return M._1;
            f();
          })());
        })(y)(Ut(0, b)), _ = v, g = N, h = z, m = b + 1 | 0;
        continue;
      }
      d = y, _ = v, g = N, h = T, m = b + 1 | 0;
    }
    return $;
  };
  return n.length < 3 ? B : w((o) => (i) => {
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
  })(B)(Ut(1, n.length - 2 | 0));
}, EN = (t) => (n) => (e) => (r) => (o) => {
  const i = ve(n), s = w((u) => (c) => {
    const a = w((l) => (d) => {
      const _ = (() => {
        if (o === "HRight") {
          const p = ut(d)(t.preds);
          if (p.tag === "Nothing")
            return [];
          if (p.tag === "Just")
            return p._1;
          f();
        }
        if (o === "HLeft") {
          const p = ut(d)(t.succs);
          if (p.tag === "Nothing")
            return [];
          if (p.tag === "Just")
            return p._1;
        }
        f();
      })(), g = _.length;
      if (g === 0)
        return l;
      const h = Qe(g - 1 | 0, 2), m = Qe(g, 2);
      return w((p) => ($) => {
        if ((() => {
          const y = ut(d)(p.align);
          if (y.tag === "Nothing")
            return d !== d;
          if (y.tag === "Just")
            return y._1 !== d;
          f();
        })())
          return p;
        if ($ >= 0 && $ < _.length) {
          const y = ut(_[$])(t.nodeIndex), v = (() => {
            if (y.tag === "Nothing")
              return 0;
            if (y.tag === "Just")
              return y._1;
            f();
          })();
          if (!(Zl(_[$] + "→" + d)(e) || Zl(d + "→" + _[$])(e)) && (() => {
            if (r === "VDown")
              return p.r < v;
            if (r === "VUp")
              return p.r > v;
            f();
          })()) {
            const N = ut(_[$])(p.root), T = (() => {
              if (N.tag === "Nothing")
                return _[$];
              if (N.tag === "Just")
                return N._1;
              f();
            })();
            return {
              root: K(F)(d)(T)(p.root),
              align: K(F)(_[$])(d)(K(F)(d)(T)(p.align)),
              r: v
            };
          }
        }
        return p;
      })(l)((() => {
        if (r === "VDown")
          return Ut(h, m);
        if (r === "VUp")
          return pn(Ut(h, m));
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
        return pn(c);
      f();
    })());
    return { root: a.root, align: a.align };
  })({ root: sr(D((u) => k(u, u))(i)), align: sr(D((u) => k(u, u))(i)) })((() => {
    if (o === "HRight")
      return n;
    if (o === "HLeft")
      return pn(n);
    f();
  })());
  return { root: s.root, align: s.align };
}, Ys = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
  const l = EN(n)(e)(u)(c)(a), d = SN(l)(o)(r)(i)(s)(a);
  return zm()((_) => (g) => J(
    "Just",
    (() => {
      const h = ut(_)(d);
      if (h.tag === "Nothing")
        return g + 0;
      if (h.tag === "Just")
        return g + h._1;
      f();
    })()
  ))(LN(t)(n)(e)(r)(o)(i)(s)(d)(l)(c)(a));
}, tg = (t) => (n) => qt((e) => (r) => w((o) => (i) => i >= 0 && i < n.length ? i >= 0 && i < t.length ? o + n[i] + t[i] : o + n[i] + 0 : i >= 0 && i < t.length ? o + 1 + t[i] : o + 1)(0)((() => {
  const o = Ut(0, n.length - 1 | 0);
  return e < 1 ? [] : Ct(0, e, o);
})()))(n), AN = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = xN(0)(n.length - 1 | 0), c = U(t.layerGap), a = s(xm(u, c)), l = Rw(f_(o)(a)(r)(i)(B))(a);
  return D((d) => {
    const _ = wN(d)(l);
    return _.tag === "Just" && _._1 > 0 ? hr(c)(2 + U(_._1 - 1 | 0) * 2.5) : c;
  })(Ut(0, u - 1 | 0));
}, $_ = (t) => (n) => (e) => (r) => Pd(
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
), PN = (t) => (n) => (e) => (r) => {
  const o = Ht((i) => (s) => ot.compare(i.w)(s.w))(D((i) => ({ l: i, w: m_(i) }))(lt(
    $_()(n)(e),
    r
  )));
  return 0 < o.length ? J("Just", o[0].l) : x;
}, RN = (t) => (n) => {
  const e = sr(ve(D(qt((o) => (i) => k(i, o)))(t))), r = (o) => Ht((i) => (s) => nt.compare((() => {
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
          return B;
        if (i.tag === "Node")
          return nn("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(w((i) => (s) => Gt(F)(xn)(s.to.node)([s.from.node])(i))(B)(n));
    })(),
    succs: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return B;
        if (i.tag === "Node")
          return nn("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(w((i) => (s) => Gt(F)(xn)(s.from.node)([s.to.node])(i))(B)(n));
    })(),
    nodeIndex: e
  };
}, FN = (t) => (n) => {
  const e = Ht((d) => (_) => ot.compare(d.w)(_.w))(qt((d) => (_) => ({ i: d, l: _, w: m_(_) }))(n)), r = 0 < e.length ? J("Just", e[0]) : x, o = (() => {
    if (r.tag === "Just")
      return r._1.i;
    if (r.tag === "Nothing")
      return 0;
    f();
  })(), i = o >= 0 && o < n.length ? J("Just", n[o]) : x, s = (() => {
    if (i.tag === "Just")
      return ((_) => (g) => {
        let h = _, m = g, p = !0, $;
        for (; p; ) {
          const y = h, v = m;
          if (v.tag === "Nil") {
            p = !1, $ = y;
            continue;
          }
          if (v.tag === "Cons") {
            h = Ce(y)(v._1), m = v._2;
            continue;
          }
          f();
        }
        return $;
      })(999999)((() => {
        const _ = (g, h) => {
          if (g.tag === "Leaf")
            return h;
          if (g.tag === "Node")
            return _(g._5, Zt("Cons", g._4, _(g._6, h)));
          f();
        };
        return _(i._1, Qt);
      })());
    if (i.tag === "Nothing")
      return 0;
    f();
  })(), u = (d) => w((_) => (g) => hr(_)((() => {
    const h = ut(g._1)(t);
    if (h.tag === "Nothing")
      return g._2 + 1;
    if (h.tag === "Just")
      return g._2 + h._1._1;
    f();
  })()))(-999999)(qa(d)), c = o >= 0 && o < n.length ? J("Just", n[o]) : x, a = (() => {
    if (c.tag === "Just")
      return u(c._1);
    if (c.tag === "Nothing")
      return 0;
    f();
  })(), l = Fn(
    (d) => (_) => {
      const g = (h) => {
        if (h.tag === "Leaf")
          return B;
        if (h.tag === "Node")
          return nn("Node", h._1, h._2, h._3, h._4 + _, g(h._5), g(h._6));
        f();
      };
      return g(d);
    },
    n,
    qt((d) => (_) => Gr(d)(2) === 0 ? s - ((h) => (m) => {
      let p = h, $ = m, y = !0, v;
      for (; y; ) {
        const N = p, T = $;
        if (T.tag === "Nil") {
          y = !1, v = N;
          continue;
        }
        if (T.tag === "Cons") {
          p = Ce(N)(T._1), $ = T._2;
          continue;
        }
        f();
      }
      return v;
    })(999999)((() => {
      const h = (m, p) => {
        if (m.tag === "Leaf")
          return p;
        if (m.tag === "Node")
          return h(m._5, Zt("Cons", m._4, h(m._6, p)));
        f();
      };
      return h(_, Qt);
    })()) : a - u(_))(n)
  );
  return bN(w((d) => (_) => {
    const g = Ht(ot.compare)(xt(ut(_))(l));
    return K(F)(_)(g.length === 4 ? 1 < g.length && 2 < g.length ? (g[1] + g[2]) / 2 : 0 : 0 < g.length ? g[0] : 0)(d);
  })(B)(ci(F.compare)(ve(D((d) => {
    const _ = (g) => {
      if (g.tag === "Leaf")
        return B;
      if (g.tag === "Node")
        return nn("Node", g._1, g._2, g._3, void 0, _(g._5), _(g._6));
      f();
    };
    return Ot(xe.foldr, _(d));
  })(l)))));
}, GN = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = RN(n)(o), u = CN(s)(n), c = { nodeGap: t.nodeGap * 4 | 0 }, a = Zn(
    F.compare,
    jn,
    sr(D((g) => k(g, k(1, 1)))(lt(
      g_,
      ve(n)
    ))),
    (() => {
      const g = (h) => {
        if (h.tag === "Leaf")
          return B;
        if (h.tag === "Node")
          return nn("Node", h._1, h._2, h._3, k(h._4._1 * U(4), h._4._2), g(h._5), g(h._6));
        f();
      };
      return g(e);
    })()
  ), l = [
    Ys(c)(s)(n)(a)(r)(o)(i)(u)(Vl)(Kl),
    Ys(c)(s)(n)(a)(r)(o)(i)(u)(Ml)(Kl),
    Ys(c)(s)(n)(a)(r)(o)(i)(u)(Vl)(jl),
    Ys(c)(s)(n)(a)(r)(o)(i)(u)(Ml)(jl)
  ], d = FN(a)(l);
  if ($_()(n)(a)(d))
    return d;
  const _ = PN()(n)(a)(l);
  if (_.tag === "Just")
    return _._1;
  if (_.tag === "Nothing")
    return l[0];
  f();
}, IN = (t) => (n) => (e) => (r) => {
  const o = Cd(
    x,
    Nd,
    (i) => i.node === n ? J("Just", i.position) : x,
    t
  );
  if (o.tag === "Nothing")
    return t;
  if (o.tag === "Just") {
    const i = o._1;
    return D((s) => s.node === e ? { ...s, position: k(i._1 + r._1, i._2 + r._2) } : s)(t);
  }
  f();
}, BN = (t) => (n) => (e) => (r) => {
  const o = lt((s) => ge(gr)(s.node)(n), t), i = (() => {
    if (e === "Vertical") {
      if (r === "Start")
        return w((s) => (u) => Ce(s)(u.position._1))(99999)(o);
      if (r === "End")
        return w((s) => (u) => hr(s)(u.position._1))(0)(o);
      if (r === "Center") {
        const s = w((u) => (c) => u + c.position._1)(0)(o);
        return o.length === 0 ? 0 : s / U(o.length);
      }
      f();
    }
    if (e === "Horizontal") {
      if (r === "Start")
        return w((s) => (u) => Ce(s)(u.position._2))(99999)(o);
      if (r === "End")
        return w((s) => (u) => hr(s)(u.position._2))(0)(o);
      if (r === "Center") {
        const s = w((u) => (c) => u + c.position._2)(0)(o);
        return o.length === 0 ? 0 : s / U(o.length);
      }
    }
    f();
  })();
  return D((s) => {
    if (ge(gr)(s.node)(n)) {
      if (e === "Vertical")
        return { ...s, position: k(i, s.position._2) };
      if (e === "Horizontal")
        return { ...s, position: k(s.position._1, i) };
      f();
    }
    return s;
  })(t);
}, HN = (t) => (n) => w((e) => (r) => r.tag === "AlignGroup" ? BN(e)(r._1.nodes)(r._1.axis)(r._1.alignment) : r.tag === "RelativePosition" ? IN(e)(r._1.anchor)(r._1.target)(r._1.offset) : e)(n)(t), DN = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const c = D((d) => w((_) => (g) => hr(_)((() => {
    const h = ut(g)(r);
    if (h.tag === "Nothing")
      return 1;
    if (h.tag === "Just")
      return h._1._2;
    f();
  })()))(1)(d))(e), a = GN(t)(e)(r)(o)(i)(u), l = tg(AN(t)(e)(r)(o)(i)(s)((d) => {
    const _ = tg(d)(c);
    return ve(qt((g) => (h) => qt((m) => (p) => ({
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
          })() / U(4);
        })(),
        g >= 0 && g < _.length ? _[g] : 0
      ),
      size: (() => {
        const $ = In(3)(p) === "$d:" ? k(0, 1) : k(1, 1), y = ut(p)(r);
        if (y.tag === "Nothing")
          return $;
        if (y.tag === "Just")
          return y._1;
        f();
      })(),
      layer: g,
      order: m
    }))(h))(e));
  }))(c);
  return HN(n)(ve(qt((d) => (_) => qt((g) => (h) => ({
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
        })() / U(4);
      })(),
      d >= 0 && d < l.length ? l[d] : 0
    ),
    size: (() => {
      const m = In(3)(h) === "$d:" ? k(0, 1) : k(1, 1), p = ut(h)(r);
      if (p.tag === "Nothing")
        return m;
      if (p.tag === "Just")
        return p._1;
      f();
    })(),
    layer: d,
    order: g
  }))(_))(e)));
}, la = /* @__PURE__ */ qf(lu)(/* @__PURE__ */ Ao(32)), ng = /* @__PURE__ */ qf(lu)(/* @__PURE__ */ Ao(31)), ss = /* @__PURE__ */ (() => {
  const t = k$("25214903917");
  if (t.tag === "Nothing")
    return Vd;
  if (t.tag === "Just")
    return t._1;
  f();
})(), us = /* @__PURE__ */ La(/* @__PURE__ */ qf(lu)(/* @__PURE__ */ Ao(48)))(lu), zN = (t) => {
  const n = L$(t);
  return ji(Md((() => {
    if (n.tag === "Nothing")
      return Vd;
    if (n.tag === "Just")
      return n._1;
    f();
  })())(ss))(us);
}, Wa = /* @__PURE__ */ Ao(11), Su = (t) => (n) => {
  const e = ji(tu(nu(n)(ss))(Wa))(us);
  return k(
    (() => {
      const r = Fd(N$(Sa(e)(Ao(48 - t | 0))));
      if (r.tag === "Nothing")
        return 0;
      if (r.tag === "Just")
        return r._1;
      f();
    })(),
    e
  );
}, QN = (t) => {
  const n = Su(26)(t), e = Su(27)(n._2);
  return k((U(n._1) * fi(2)(27) + U(e._1)) / fi(2)(53), e._2);
}, qN = (t) => (n) => {
  const e = w((r) => (o) => {
    const i = QN(r.finalR);
    return { rs: [...r.rs, i._1], finalR: i._2 };
  })({ rs: [], finalR: t })(n);
  return k(
    D((r) => r.x)(Ht((r) => (o) => ot.compare(r.k)(o.k))(Fn((r) => (o) => ({ x: r, k: o }), n, e.rs))),
    e.finalR
  );
}, WN = (t) => {
  const n = ji(tu(nu(t)(ss))(Wa))(us), e = ji(tu(nu(n)(ss))(Wa))(us);
  return k(
    tu(nu((() => {
      const r = Sa(n)(Ao(16));
      return gl.compare(r)(ng) !== "LT" ? La(r)(la) : r;
    })())(la))((() => {
      const r = Sa(e)(Ao(16));
      return gl.compare(r)(ng) !== "LT" ? La(r)(la) : r;
    })()),
    e
  );
}, cs = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Cu = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, g0 = /* @__PURE__ */ mn(F)(Xt), ti = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Eu = /* @__PURE__ */ mn(F)(Xt), ON = /* @__PURE__ */ ec(Ni), XN = /* @__PURE__ */ w(Eo)(0), YN = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, eg = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, UN = (t) => (n) => (e) => {
  if (t >= 0 && t < e.length) {
    const r = e[t];
    if (n >= 0 && n < e.length) {
      const o = no(jt, x, t, e[n], e);
      if (o.tag === "Just")
        return no(jt, x, n, r, o._1);
      if (o.tag === "Nothing")
        return x;
      f();
    }
  }
  return x;
}, VN = (t) => (n) => (e) => (r) => (o) => g0(w((i) => (s) => {
  const u = Ht((c) => (a) => nt.compare((() => {
    const l = cs(c.id)(o);
    if (l.tag === "Nothing")
      return 1e6;
    if (l.tag === "Just")
      return l._1;
    f();
  })())((() => {
    const l = cs(a.id)(o);
    if (l.tag === "Nothing")
      return 1e6;
    if (l.tag === "Just")
      return l._1;
    f();
  })()))(lt((c) => Cu(c.to.node)(e), lt((c) => c.from.node === s, r)));
  return {
    ranks: [...i.ranks, ...qt((c) => (a) => k(a.id, U((i.rankSum + c | 0) + 1 | 0)))(u)],
    rankSum: i.rankSum + u.length | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), MN = (t) => (n) => (e) => (r) => (o) => g0(w((i) => (s) => {
  const u = Ht((a) => (l) => {
    const d = nt.compare((() => {
      const _ = ti(l.from.node)(e);
      if (_.tag === "Nothing")
        return -1;
      if (_.tag === "Just")
        return _._1;
      f();
    })())((() => {
      const _ = ti(a.from.node)(e);
      if (_.tag === "Nothing")
        return -1;
      if (_.tag === "Just")
        return _._1;
      f();
    })());
    return d === "EQ" ? nt.compare((() => {
      const _ = cs(a.id)(o);
      if (_.tag === "Nothing")
        return 1e6;
      if (_.tag === "Just")
        return _._1;
      f();
    })())((() => {
      const _ = cs(l.id)(o);
      if (_.tag === "Nothing")
        return 1e6;
      if (_.tag === "Just")
        return _._1;
      f();
    })()) : d;
  })(lt((a) => Cu(a.from.node)(e), lt((a) => a.to.node === s, r))), c = u.length;
  return {
    ranks: [...i.ranks, ...qt((a) => (l) => k(l.id, U((i.rankSum + c | 0) - a | 0)))(u)],
    rankSum: i.rankSum + c | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), Oa = (t) => (n) => (e) => {
  const r = Eu(qt((u) => (c) => k(c, u))(t)), o = Eu(qt((u) => (c) => k(c, u))(n)), i = xt((u) => {
    const c = ti(u.from.node)(r), a = ti(u.to.node)(o);
    if (c.tag === "Just" && a.tag === "Just")
      return J("Just", k(c._1, a._1));
    const l = ti(u.from.node)(o), d = ti(u.to.node)(r);
    return l.tag === "Just" && d.tag === "Just" ? J("Just", k(d._1, l._1)) : x;
  })(e), s = i.length;
  return w((u) => (c) => w((a) => (l) => c >= 0 && c < i.length && l >= 0 && l < i.length && ((i[c]._1 - i[l]._1 | 0) * (i[c]._2 - i[l]._2 | 0) | 0) < 0 ? a + 1 | 0 : a)(u)(Ut(c + 1 | 0, s - 1 | 0)))(0)(Ut(0, s - 2 | 0));
}, KN = (t) => (n) => (e) => (r) => {
  const o = (s) => (u) => {
    let c = s, a = u, l = !0, d;
    for (; l; ) {
      const _ = c, g = a;
      if (g >= (_.length - 1 | 0)) {
        l = !1, d = _;
        continue;
      }
      if (g >= 0 && g < _.length) {
        const h = g + 1 | 0;
        if (h >= 0 && h < _.length) {
          const m = _[g], p = _[h];
          if (he((N) => N.before === m && N.after === p, r)) {
            c = _, a = g + 1 | 0;
            continue;
          }
          const $ = no(jt, x, g, p, _), y = (() => {
            if ($.tag === "Just")
              return no(jt, x, g + 1 | 0, m, $._1);
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
          if (Oa(n)(v)(e) < Oa(n)(_)(e)) {
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
      if (ON(d)(l)) {
        c = !1, a = l;
        continue;
      }
      u = d;
    }
    return a;
  })(t);
}, Us = (t) => (n) => w((e) => (r) => {
  if (r >= 0 && r < t.length) {
    const o = t[r], i = r + 1 | 0;
    if (i >= 0 && i < t.length)
      return e + Oa(o)(t[i])(n) | 0;
  }
  return e;
})(0)(Ut(0, t.length - 2 | 0)), jN = /* @__PURE__ */ (() => {
  const t = (n) => {
    if (n.length < 7) {
      const s = (u) => (c) => {
        let a = u, l = c, d = !0, _;
        for (; d; ) {
          const g = a, h = l, m = h - 1 | 0;
          if (m >= 0 && m < g.length) {
            if (h >= 0 && h < g.length && h > 0 && g[m].key > g[h].key) {
              const p = UN(h - 1 | 0)(h)(g);
              if (p.tag === "Just") {
                a = p._1, l = h - 1 | 0;
                continue;
              }
              if (p.tag === "Nothing") {
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
      return w((u) => (c) => s(u)(c))(n)(Ut(1, n.length - 1 | 0));
    }
    const e = Qe(n.length, 2), r = t(Ct(0, e, n)), o = t(Ct(e, n.length, n));
    return ((s) => (u) => (c) => {
      let a = s, l = u, d = c, _ = !0, g;
      for (; _; ) {
        const h = a, m = l, p = d;
        if (m >= 0 && m < r.length) {
          if (p >= 0 && p < o.length) {
            if (r[m].key > o[p].key) {
              a = Et(h)(o[p]), l = m, d = p + 1 | 0;
              continue;
            }
            a = Et(h)(r[m]), l = m + 1 | 0, d = p;
            continue;
          }
          _ = !1, g = [...h, ...m < 1 ? r : Ct(m, r.length, r)];
          continue;
        }
        _ = !1, g = [...h, ...p < 1 ? o : Ct(p, o.length, o)];
      }
      return g;
    })([])(0)(0);
  };
  return t;
})(), ZN = (t) => (n) => (e) => {
  const r = xt((a) => a.tag === "OrderConstraint" ? J("Just", { before: a._1.before, after: a._1.after }) : x)(t.constraints), o = (a) => w((l) => (d) => {
    const _ = d.after, g = d.before, h = Co(jt, x, (p) => p === g, l), m = Co(jt, x, (p) => p === _, l);
    if (h.tag === "Just" && m.tag === "Just" && h._1 > m._1) {
      const p = Ad(jt, x, h._1, l), $ = (() => {
        if (p.tag === "Nothing")
          return l;
        if (p.tag === "Just")
          return p._1;
        f();
      })(), y = Ed(jt, x, m._1, g, $);
      if (y.tag === "Nothing")
        return $;
      if (y.tag === "Just")
        return y._1;
      f();
    }
    return l;
  })(a)(r), i = g0(qt((a) => (l) => k(l.id, a))(e)), s = (a, l, d) => {
    const _ = a.length;
    return w((g) => (h) => {
      const m = l ? h - 1 | 0 : h + 1 | 0, p = m >= 0 && m < g._1.length ? J("Just", g._1[m]) : x;
      if (p.tag === "Just") {
        const $ = h >= 0 && h < g._1.length ? J("Just", g._1[h]) : x;
        if ($.tag === "Just") {
          const y = Eu(qt((L) => (E) => k(E, L))(p._1)), v = Eu(qt((L) => (E) => k(E, L))($._1)), N = l ? VN(p._1)(y)(v)(e)(i) : MN(p._1)(y)(v)(e)(i), T = w((L) => (E) => {
            const C = xt((z) => cs(z.id)(N))(lt(l ? (z) => z.to.node === E._2 && Cu(z.from.node)(y) : (z) => z.from.node === E._2 && Cu(z.to.node)(y), e));
            if (C.length === 0)
              return { ...L, items: [...L.items, { n: E._2, key: x, origIdx: E._1 }] };
            const I = Su(24)(L.r);
            return {
              items: [
                ...L.items,
                {
                  n: E._2,
                  key: J("Just", (XN(C) + (U(I._1) * 4172325152040912e-24 - 0.03500000014901161)) / U(C.length)),
                  origIdx: E._1
                }
              ],
              r: I._2
            };
          })({ items: [], r: g._2 })(qt(re)($._1)), b = no(
            jt,
            x,
            h,
            KN(o(D((L) => L.n)(jN((() => {
              const L = T.items, E = (I) => (z) => {
                let G = I, H = z, M = !0, Z;
                for (; M; ) {
                  const Y = G, q = H;
                  if (Y >= 0 && Y < L.length) {
                    if (L[Y].key.tag === "Just") {
                      M = !1, Z = L[Y].key._1;
                      continue;
                    }
                    if (L[Y].key.tag === "Nothing") {
                      G = Y + 1 | 0, H = q;
                      continue;
                    }
                    f();
                  }
                  M = !1, Z = q;
                }
                return Z;
              };
              return ((I) => (z) => (G) => {
                let H = I, M = z, Z = G, Y = !0, q;
                for (; Y; ) {
                  const A = H, P = M, W = Z;
                  if (A >= 0 && A < L.length) {
                    if (L[A].key.tag === "Just") {
                      H = A + 1 | 0, M = L[A].key._1, Z = [...W, { n: L[A].n, key: L[A].key._1, origIdx: L[A].origIdx }];
                      continue;
                    }
                    if (L[A].key.tag === "Nothing") {
                      const R = (P + E(A + 1 | 0)(P + 1)) / 2;
                      H = A + 1 | 0, M = R, Z = [...W, { n: L[A].n, key: R, origIdx: L[A].origIdx }];
                      continue;
                    }
                    f();
                  }
                  Y = !1, q = W;
                }
                return q;
              })(0)(-1)([]);
            })()))))(p._1)(e)(r),
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
      if (p.tag === "Nothing")
        return k(g._1, g._2);
      f();
    })(k(a, d))(l ? Ut(1, _ - 1 | 0) : pn(Ut(0, _ - 2 | 0)));
  }, u = w((a) => (l) => K(F)(l.from.node)()(K(F)(l.to.node)()(a)))(B)(e), c = w((a) => (l) => {
    if (a.result.crossings === 0)
      return a;
    const d = (y) => (v) => (N) => (T) => {
      let b = y, L = v, E = N, C = T, I = !0, z;
      for (; I; ) {
        const G = b, H = L, M = E, Z = C;
        if (M === 0) {
          I = !1, z = { layout: G, crossings: 0, random: Z };
          continue;
        }
        const Y = s(G, H, Z), q = Us(Y._1)(e);
        if (q < M) {
          b = Y._1, L = !H, E = q, C = Y._2;
          continue;
        }
        I = !1, z = { layout: G, crossings: M, random: Y._2 };
      }
      return z;
    }, _ = Su(1)(a.result.random), g = _._1 !== 0, h = t.modelOrder.tag === "Leaf", m = (a.firstTry || a.secondTry) && !h ? a.firstTry : g, p = (() => {
      if (!h) {
        const T = s(n, m, _._2);
        return d(T._1)(!m)(Us(T._1)(e))(T._2);
      }
      const y = m ? 0 : YN(0)(n.length - 1 | 0), v = y >= 0 && y < n.length ? J("Just", n[y]) : x;
      if (v.tag === "Just" && v._1.length > 1) {
        const T = lt((b) => eg(b)(u), v._1);
        if (T.length > 1) {
          const b = qN(_._2)(T), L = b._1, E = no(
            jt,
            x,
            y,
            o(w((C) => (I) => eg(I)(u) ? C.idx >= 0 && C.idx < L.length ? { idx: C.idx + 1 | 0, result: [...C.result, L[C.idx]] } : { idx: C.idx, result: [...C.result, I] } : { idx: C.idx, result: [...C.result, I] })({ idx: 0, result: [] })(v._1).result),
            n
          );
          if (E.tag === "Just") {
            const C = s(E._1, m, b._2);
            return d(C._1)(!m)(Us(C._1)(e))(C._2);
          }
        }
      }
      const N = s(n, m, _._2);
      return d(N._1)(!m)(Us(N._1)(e))(N._2);
    })(), $ = a.secondTry ? !1 : a.secondTry;
    return a.firstTry ? {
      result: p.crossings < a.result.crossings ? { layout: p.layout, crossings: p.crossings, random: p.random } : { ...a.result, random: p.random },
      firstTry: !1,
      secondTry: !0
    } : {
      result: p.crossings < a.result.crossings ? { layout: p.layout, crossings: p.crossings, random: p.random } : { ...a.result, random: p.random },
      firstTry: a.firstTry,
      secondTry: $
    };
  })({
    result: {
      layout: n,
      crossings: 1e9,
      random: ji(Md(WN(zN(1))._1)(ss))(us)
    },
    firstTry: t.modelOrder.tag !== "Leaf",
    secondTry: !1
  })(Ut(1, t.iterations)).result;
  return n.length <= 0 || t.iterations <= 0 ? n : c.layout;
}, tT = (t) => t, rg = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, fe = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, pi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, as = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = F.compare(n._1)(e._1);
      return r === "LT" ? Bn : r === "GT" ? Hn : F.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), nT = /* @__PURE__ */ mn(F)(Xt), eT = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = as.compare(t)(s._3);
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
}, rT = /* @__PURE__ */ tT("Greedy"), ga = (t) => (n) => (e) => w((r) => (o) => {
  if (o.from.node === o.to.node)
    return r;
  if (o.from.node === n && !rg(o.to.node)(r.marks)) {
    const i = fe(o.to.node)(r.inDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = K(F)(o.to.node)(s)(r.inDeg);
    return (() => {
      const c = fe(o.to.node)(r.outDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        f();
      })() && !ge(gr)(o.to.node)(r.sources);
    })() ? { ...r, inDeg: u, sources: [...r.sources, o.to.node] } : { ...r, inDeg: u };
  }
  if (o.to.node === n && !rg(o.from.node)(r.marks)) {
    const i = fe(o.from.node)(r.outDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = K(F)(o.from.node)(s)(r.outDeg);
    return (() => {
      const c = fe(o.from.node)(r.inDeg);
      return s <= 0 && (() => {
        if (c.tag === "Nothing")
          return !1;
        if (c.tag === "Just")
          return c._1 > 0;
        f();
      })() && !ge(gr)(o.from.node)(r.sinks);
    })() ? { ...r, outDeg: u, sinks: [...r.sinks, o.from.node] } : { ...r, outDeg: u };
  }
  return r;
})({ ...e, remaining: lt((r) => r !== n, e.remaining) })(t), oT = /* @__PURE__ */ w((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return K(F)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return K(F)(n._1.node)(0)(t);
    if (n._1.pin.tag === "LastLayer")
      return K(F)(n._1.node)(99999)(t);
  }
  return t;
})(B), y_ = (t) => (n) => (e) => {
  const r = fe(n)(t), o = fe(e)(t);
  return r.tag === "Just" && o.tag === "Just" && r._1 > o._1;
}, v_ = (t) => (n) => (e) => (r) => {
  if (pi(e)(r.visited) || pi(e)(r.visiting))
    return r;
  const o = w(iT(t)(n)(e))({ ...r, visiting: K(F)(e)()(r.visiting) })((() => {
    const i = fe(e)(n);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just")
      return i._1;
    f();
  })());
  return {
    ...o,
    visiting: gi(F)(e)(o.visiting),
    visited: K(F)(e)()(o.visited)
  };
}, iT = (t) => (n) => (e) => (r) => (o) => y_(t)(e)(o) ? { ...r, backEdges: K(as)(k(e, o))()(r.backEdges) } : pi(o)(r.visiting) ? { ...r, backEdges: K(as)(k(e, o))()(r.backEdges) } : pi(o)(r.visited) ? r : v_(t)(n)(o)(r), sT = (t) => (n) => (e) => {
  const r = (_) => {
    let g = _, h = !0, m;
    for (; h; ) {
      const p = g, $ = Dt((y) => x, (y) => (v) => J("Just", { head: y, tail: v }), p.sinks);
      if ($.tag === "Just") {
        g = ga(e)($._1.head)({
          ...p,
          sinks: $._1.tail,
          marks: K(F)($._1.head)(p.nextRight)(p.marks),
          nextRight: p.nextRight - 1 | 0
        });
        continue;
      }
      if ($.tag === "Nothing") {
        const y = Dt((v) => x, (v) => (N) => J("Just", { head: v, tail: N }), p.sources);
        if (y.tag === "Just") {
          g = ga(e)(y._1.head)({
            ...p,
            sources: y._1.tail,
            marks: K(F)(y._1.head)(p.nextLeft)(p.marks),
            nextLeft: p.nextLeft + 1 | 0
          });
          continue;
        }
        if (y.tag === "Nothing") {
          const v = (T) => {
            const b = fe(T)(p.outDeg), L = fe(T)(p.inDeg);
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
          }, N = Ht((T) => (b) => {
            const L = nt.compare(v(b))(v(T));
            return L === "EQ" ? nt.compare((() => {
              const E = fe(T)(n);
              if (E.tag === "Nothing")
                return 1e6;
              if (E.tag === "Just")
                return E._1;
              f();
            })())((() => {
              const E = fe(b)(n);
              if (E.tag === "Nothing")
                return 1e6;
              if (E.tag === "Just")
                return E._1;
              f();
            })()) : L;
          })(p.remaining);
          if (0 < N.length) {
            const T = N[0];
            g = ga(e)(T)({
              ...p,
              remaining: lt((b) => b !== T, p.remaining),
              marks: K(F)(T)(p.nextLeft)(p.marks),
              nextLeft: p.nextLeft + 1 | 0
            });
            continue;
          }
          h = !1, m = p;
          continue;
        }
      }
      f();
    }
    return m;
  }, o = ci(F.compare)([...D((_) => _.from.node)(e), ...D((_) => _.to.node)(e)]), i = lt((_) => _.from.node !== _.to.node, e), s = w((_) => (g) => Gt(F)(Tn)(g.to.node)(1)(_))(B)(i), u = w((_) => (g) => Gt(F)(Tn)(g.from.node)(1)(_))(B)(i), c = lt(
    (_) => {
      const g = fe(_)(s);
      if (g.tag === "Nothing")
        return !0;
      if (g.tag === "Just")
        return g._1 === 0;
      f();
    },
    o
  ), a = lt(
    (_) => {
      const g = fe(_)(u);
      if (g.tag === "Nothing")
        return !0;
      if (g.tag === "Just")
        return g._1 === 0;
      f();
    },
    o
  ), l = o.length + 1 | 0, d = w((_) => (g) => {
    const h = fe(g)(_);
    return h.tag === "Just" && h._1 < 0 ? K(F)(g)(h._1 + l | 0)(_) : _;
  })(r({
    remaining: lt((_) => !ge(gr)(_)(c) && !ge(gr)(_)(a), o),
    marks: B,
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
    if (y_(t)(g.from.node)(g.to.node))
      return K(as)(k(g.from.node, g.to.node))()(_);
    const h = fe(g.from.node)(d), m = fe(g.to.node)(d);
    return h.tag === "Just" && m.tag === "Just" && h._1 > m._1 ? K(as)(k(g.from.node, g.to.node))()(_) : _;
  })(B)(e);
}, uT = /* @__PURE__ */ w((t) => (n) => Gt(F)(xn)(n.from.node)([n.to.node])(t))(B), cT = (t) => (n) => {
  const e = uT(n), r = ci(F.compare)([...D((i) => i.from.node)(n), ...D((i) => i.to.node)(n)]), o = w((i) => (s) => K(F)(s.to.node)()(i))(B)(n);
  return w((i) => (s) => v_(t)(e)(s)(i))({
    visiting: B,
    visited: B,
    backEdges: B
  })([...lt((i) => !pi(i)(o), r), ...lt((i) => pi(i)(o), r)]).backEdges;
}, aT = (t) => (n) => (e) => (r) => {
  const o = nT(qt((u) => (c) => k(c, u))(n)), i = oT(e), s = (() => {
    if (t === "DepthFirst")
      return cT(i)(r);
    if (t === "Greedy")
      return sT(i)(o)(r);
    f();
  })();
  return {
    edges: D((u) => eT(k(u.from.node, u.to.node))(s) ? { ...u, from: u.to, to: u.from } : u)(r),
    reversedEdges: s
  };
}, x_ = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, fT = /* @__PURE__ */ w((t) => (n) => K(F)(n)()(t))(B), Au = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, lT = /* @__PURE__ */ t_(F), or = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, og = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, da = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = nt.compare(t)(s._3);
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
}, gT = /* @__PURE__ */ mn(nt)(Xt), dT = (t) => (n) => Zn(F.compare, jn, t, n), w_ = /* @__PURE__ */ qt((t) => (n) => ({ src: n.src, tgt: n.tgt, delta: 1, weight: 1, eid: t })), _T = (t) => w((n) => (e) => ({
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
          s = x_(l)(d._1), u = d._2;
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
          return o(i._5, Zt("Cons", i._4, o(i._6, s)));
        f();
      };
      return o(e, Qt);
    })()) | 0) + 1 | 0;
  })(),
  result: [
    ...n.result,
    (() => {
      if (n.base === 0)
        return e;
      const r = (o) => {
        if (o.tag === "Leaf")
          return B;
        if (o.tag === "Node")
          return nn("Node", o._1, o._2, o._3, o._4 + n.base | 0, r(o._5), r(o._6));
        f();
      };
      return r(e);
    })()
  ]
}))({ base: 0, result: [] })(t).result, hT = (t) => (n) => {
  const e = fT(t);
  return lT(t)(w_(lt((r) => Au(r.src)(e) && Au(r.tgt)(e), n)));
}, pT = (t) => (n) => {
  const e = w((o) => (i) => Gt(F)(xn)(i.tgt)([i.src])(Gt(F)(xn)(i.src)([
    i.tgt
  ])(o)))(B)(n), r = (o) => (i) => (s) => {
    let u = o, c = i, a = s, l = !0, d;
    for (; l; ) {
      const _ = u, g = c, h = a, m = Dt((p) => x, (p) => ($) => J("Just", { head: p, tail: $ }), _);
      if (m.tag === "Nothing") {
        l = !1, d = { nodes: h };
        continue;
      }
      if (m.tag === "Just") {
        if (Au(m._1.head)(g)) {
          u = m._1.tail, c = g, a = h;
          continue;
        }
        u = [
          ...m._1.tail,
          ...(() => {
            const p = or(m._1.head)(e);
            if (p.tag === "Nothing")
              return [];
            if (p.tag === "Just")
              return p._1;
            f();
          })()
        ], c = K(F)(m._1.head)()(g), a = [...h, m._1.head];
        continue;
      }
      f();
    }
    return d;
  };
  return w((o) => (i) => {
    if (Au(i)(o.visited))
      return o;
    const s = r([i])(o.visited)([]);
    return {
      ...o,
      visited: w((u) => (c) => K(F)(c)()(u))(o.visited)(s.nodes),
      components: [...o.components, s.nodes]
    };
  })({ visited: B, components: [] })(t).components;
}, mT = (t) => (n) => (e) => {
  const r = w((i) => (s) => Gt(F)(Tn)(s.tgt)(1)(i))(B)(n), o = w((i) => (s) => Gt(F)(Tn)(s.src)(1)(i))(B)(n);
  return w((i) => (s) => {
    const u = or(s)(r), c = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      f();
    })();
    if ((() => {
      const y = or(s)(o);
      return (() => {
        if (y.tag === "Nothing")
          return c !== 0;
        if (y.tag === "Just")
          return c !== y._1;
        f();
      })() || c === 0;
    })())
      return i;
    const a = or(s)(i.layers), l = (() => {
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      f();
    })(), d = i.layers, _ = w((y) => (v) => v.tgt === s ? {
      ...y,
      mIn: og(y.mIn)((() => {
        const N = or(s)(d), T = or(v.src)(d);
        return (() => {
          if (N.tag === "Nothing")
            return 0;
          if (N.tag === "Just")
            return N._1;
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
      mOut: og(y.mOut)((() => {
        const N = or(v.tgt)(d), T = or(s)(d);
        return (() => {
          if (N.tag === "Nothing")
            return 0;
          if (N.tag === "Just")
            return N._1;
          f();
        })() - (() => {
          if (T.tag === "Nothing")
            return 0;
          if (T.tag === "Just")
            return T._1;
          f();
        })() | 0;
      })())
    } : y)({ mIn: 1e9, mOut: 1e9 })(n), g = _.mIn === 1e9 ? -1 : _.mIn, h = _.mOut === 1e9 ? -1 : _.mOut;
    if (g < 0 || h < 0)
      return i;
    const m = (l - g | 0) + 1 | 0, p = (l + h | 0) - 1 | 0;
    if (p < m)
      return i;
    const $ = w((y) => (v) => {
      const N = da(v)(i.filling), T = (() => {
        if (N.tag === "Nothing")
          return 0;
        if (N.tag === "Just")
          return N._1;
        f();
      })();
      return T < y.bestFill ? { best: v, bestFill: T } : y;
    })({
      best: l,
      bestFill: (() => {
        const y = da(l)(i.filling);
        if (y.tag === "Nothing")
          return 0;
        if (y.tag === "Just")
          return y._1;
        f();
      })()
    })(Ut(m, p));
    return $.best === l ? i : {
      layers: K(F)(s)($.best)(i.layers),
      filling: K(nt)(l)((() => {
        const y = da(l)(i.filling);
        if (y.tag === "Nothing")
          return -1;
        if (y.tag === "Just")
          return y._1 - 1 | 0;
        f();
      })())(K(nt)($.best)($.bestFill + 1 | 0)(i.filling))
    };
  })({
    layers: e,
    filling: gT(D((i) => k(
      i,
      w((s) => (u) => (() => {
        const c = or(u)(e);
        return c.tag === "Nothing" ? !1 : c.tag === "Just" && c._1 === i;
      })() ? s + 1 | 0 : s)(0)(t)
    ))(Ut(
      0,
      w((i) => (s) => x_(i)((() => {
        const u = or(s)(e);
        if (u.tag === "Nothing")
          return 0;
        if (u.tag === "Just")
          return u._1;
        f();
      })()))(0)(t)
    )))
  })(t).layers;
}, $T = (t) => (n) => mT(t)(w_(n))(w(dT)(B)(_T(D((e) => hT(e)(n))(pT(t)(n))))), yT = (t) => t, To = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Pu = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, N_ = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Xe);
  return (n) => t(de("IterNode", n, Oe));
})(), vT = /* @__PURE__ */ yT("NetworkSimplex"), xT = (t) => (n) => w((e) => (r) => {
  const o = w(Pu)(0)(xt((i) => To(i)(e))(r));
  return w((i) => (s) => K(F)(s)(o)(i))(e)(r);
})(n)(t), wT = (t) => (n) => ({
  layers: D((e) => lt(
    (r) => {
      const o = To(r)(n);
      return o.tag === "Nothing" ? !1 : o.tag === "Just" && o._1 === e;
    },
    t
  ))(Ut(
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
          i = Pu(a)(l._1), s = l._2;
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
          return r(o._5, Zt("Cons", o._4, r(o._6, i)));
        f();
      };
      return r(n, Qt);
    })())
  )),
  nodeLayer: n
}), NT = (t) => (n) => (e) => {
  const r = w((o) => (i) => K(F)(i)(!0)(o))(B)(n);
  return w((o) => (i) => K(F)(i._1)(i._2)(o))($T(n)(xt((o) => o.from.node === o.to.node || (() => {
    const i = To(o.from.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() || (() => {
    const i = To(o.to.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() ? x : J("Just", { src: o.from.node, tgt: o.to.node }))(t)))(N_(e));
}, TT = (t) => (n) => (e) => (r) => {
  const o = (c) => (a) => {
    const l = To(a)(c);
    if (l.tag === "Just")
      return c;
    if (l.tag === "Nothing") {
      const d = lt(
        (g) => g !== a,
        (() => {
          const g = To(a)(t);
          if (g.tag === "Nothing")
            return [];
          if (g.tag === "Just")
            return g._1;
          f();
        })()
      ), _ = w(o)(c)(d);
      return K(F)(a)(1 + w(Pu)(0)(xt((g) => To(g)(_))(d)) | 0)(_);
    }
    f();
  }, i = w(o)(B)(e), u = ((c) => (a) => {
    let l = c, d = a, _ = !0, g;
    for (; _; ) {
      const h = l, m = d;
      if (m.tag === "Nil") {
        _ = !1, g = h;
        continue;
      }
      if (m.tag === "Cons") {
        l = Pu(h)(m._1), d = m._2;
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
        return c(a._5, Zt("Cons", a._4, c(a._6, l)));
      f();
    };
    return c(i, Qt);
  })());
  return w((c) => (a) => K(F)(a._1)(a._2)(c))((() => {
    const c = (a) => {
      if (a.tag === "Leaf")
        return B;
      if (a.tag === "Node")
        return nn("Node", a._1, a._2, a._3, u - a._4 | 0, c(a._5), c(a._6));
      f();
    };
    return c(i);
  })())(N_(r));
}, JT = /* @__PURE__ */ w((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return K(F)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return K(F)(n._1.node)(0)(t);
  }
  return t;
})(B), bT = /* @__PURE__ */ w((t) => (n) => Gt(F)(xn)(n.to.node)([n.from.node])(t))(B), kT = /* @__PURE__ */ w((t) => (n) => Gt(F)(xn)(n.from.node)([n.to.node])(t))(B), LT = (t) => (n) => (e) => (r) => {
  const o = kT(e), i = bT(e), s = JT(n);
  return wT(r)(xT(xt((u) => u.tag === "SameLayer" ? J("Just", u._1.nodes) : x)(n))((() => {
    if (t === "LongestPath")
      return TT(o)(i)(r)(s);
    if (t === "NetworkSimplex")
      return NT(e)(r)(s);
    f();
  })()));
}, ST = /* @__PURE__ */ mn(F)(Xt), CT = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, ig = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, sg = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, fs = /* @__PURE__ */ mn(F)(Xt), ET = /* @__PURE__ */ mn(F)(Xt), ug = /* @__PURE__ */ (() => {
  const t = D((n) => ({ start: n.end, end: n.start, direction: n.direction }));
  return (n) => pn(t(n));
})(), AT = (t) => (n) => (e) => (r) => {
  const o = ST(D((s) => k(s.edge, s))(r)), i = (s) => 0 < s.nodes.length && (() => {
    const u = CT(s.edgeId)(e);
    return u.tag === "Just" && s.nodes[0] !== u._1._1;
  })();
  return D((s) => {
    if (s.nodes.length <= 2) {
      const l = ig(s.edgeId)(o);
      if (l.tag === "Just") {
        const d = i(s), _ = is(os(d ? ug(l._1.segments) : l._1.segments));
        return { ...l._1, edge: s.edgeId, segments: _, bends: Fn((g) => (h) => g.end, _, Ct(1, _.length, _)), reversed: d };
      }
      if (l.tag === "Nothing")
        return { edge: s.edgeId, segments: [], bends: [], bendType: [], jumps: [], reversed: !1 };
      f();
    }
    const u = vt(xt((l) => ig(l)(o))(Fn(
      (l) => (d) => s.edgeId + ":" + l + "->" + d,
      s.nodes,
      Ct(1, s.nodes.length, s.nodes)
    )))((l) => l.segments), c = i(s), a = is(os(c ? ug(u) : u));
    return {
      edge: s.edgeId,
      segments: a,
      bends: Fn((l) => (d) => l.end, a, Ct(1, a.length, a)),
      bendType: [],
      jumps: [],
      reversed: c
    };
  })(t);
}, PT = { layers: [], edges: [], chains: [] }, RT = {
  nodeGap: 3,
  layerGap: 2,
  iterations: 8,
  layerer: vT,
  cycleBreaker: rT,
  compactPostRouting: !0,
  compactionSpacings: bw
}, FT = (t) => ({
  pos: k(0, 0),
  size: k(
    w((n) => (e) => sg(n)(e.position._1 + e.size._1))(0)(t),
    w((n) => (e) => sg(n)(e.position._2 + e.size._2))(0)(t)
  )
}), GT = (t) => (n) => (e) => {
  const r = fs(D((a) => k(a.id, a.ports))(n.nodes)), o = lt((a) => In(3)(a.node) !== "$d:", e.placements), i = AT(e.withDummies.chains)(e.acyclic.reversedEdges)(ET(D((a) => k(
    a.id,
    k(a.from.node, a.to.node)
  ))(n.edges)))(uN(e.withDummies.edges)(e.placements)(r)(e.withDummies.chains)(d_(e.ordered)(lt(
    (a) => a.from.node !== a.to.node,
    e.withDummies.edges
  ))((() => {
    const a = (l) => {
      if (l.tag === "Leaf")
        return B;
      if (l.tag === "Node")
        return nn("Node", l._1, l._2, l._3, k(l._4._1 * 4, l._4._2), a(l._5), a(l._6));
      f();
    };
    return a(fs(D((l) => k(l.id, l.size))(n.nodes)));
  })()))), s = t.compactPostRouting ? Sw()(t.compactionSpacings)({
    nodes: o,
    edges: n.edges,
    paths: i,
    ports: r
  }) : { nodes: o, edges: i }, u = D((a) => {
    const l = is(os(a.segments));
    return { ...a, segments: l, bends: Fn((d) => (_) => d.end, l, Ct(1, l.length, l)) };
  })(s.edges), c = qt((a) => (l) => ({ ...l, jumps: _N(a)(l)(u) }))(u);
  return { nodes: s.nodes, edges: c, boundingBox: FT(s.nodes), metrics: nx(s.nodes)(c)(0) };
}, IT = (t) => (n) => (e) => {
  const r = fs(D((i) => k(i.id, i.size))(n.nodes)), o = {
    ...e,
    placements: DN({ nodeGap: t.nodeGap, layerGap: t.layerGap })(n.constraints)(e.ordered)(r)(fs(D((i) => k(
      i.id,
      i.ports
    ))(n.nodes)))(e.withDummies.edges)(e.withDummies.chains)(d_(e.ordered)(e.withDummies.edges)((() => {
      const i = (s) => {
        if (s.tag === "Leaf")
          return B;
        if (s.tag === "Node")
          return nn("Node", s._1, s._2, s._3, k(s._4._1 * 4, s._4._2), i(s._5), i(s._6));
        f();
      };
      return i(r);
    })()))
  };
  return { pipeline: o, result: GT(t)(n)(o) };
}, BT = (t) => (n) => (e) => IT(t)(n)({
  ...e,
  ordered: ZN({
    iterations: t.iterations,
    constraints: n.constraints,
    modelOrder: fs(qt((r) => (o) => k(o.id, r))(n.nodes))
  })(e.withDummies.layers)(e.withDummies.edges)
}), HT = (t) => (n) => (e) => BT(t)(n)({
  ...e,
  withDummies: hN(e.layered.nodeLayer)(e.acyclic.edges)(e.layered.layers)
}), DT = (t) => (n) => {
  const e = D((o) => o.id)(n.nodes), r = aT(t.cycleBreaker)(e)(n.constraints)(n.edges);
  return HT(t)(n)({
    acyclic: r,
    layered: LT(t.layerer)(n.constraints)(r.edges)(e),
    withDummies: PT,
    ordered: [],
    placements: []
  });
}, Nc = (t) => t, zT = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, go = /* @__PURE__ */ Nc("TopSide"), _o = /* @__PURE__ */ Nc("BottomSide"), ho = /* @__PURE__ */ Nc("LeftSide"), po = /* @__PURE__ */ Nc("RightSide"), QT = (t) => {
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
}, cg = (t) => (n) => (e) => {
  const r = zT(t.h * 0.12)(t.w * 0.2), o = t.w / 2;
  return (n < 0 ? t.y + r : t.y + t.h - r) + n * r * Un(QT((() => {
    const i = (e - (t.x + o)) / o;
    return 1 - i * i;
  })()));
}, ae = (t) => (n) => (e) => (r) => {
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
      o = Er, i = d, s = _, u = g;
      continue;
    }
    if (l === "Cylinder") {
      if (_ === "TopSide") {
        c = !1, a = cg(d)(-1)(g);
        continue;
      }
      if (_ === "BottomSide") {
        c = !1, a = cg(d)(1)(g);
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
    o = Er, i = d, s = _, u = g;
  }
  return a;
}, ag = (t) => (n) => {
  const e = n.y - t.y, r = e < 0 ? -e : e, o = n.x - (t.x + t.w), i = o < 0 ? -o : o, s = n.x - t.x, u = s < 0 ? -s : s, c = n.y - (t.y + t.h), a = c < 0 ? -c : c;
  return r <= a && r <= u && r <= i ? go : a <= u && a <= i ? _o : u <= i ? ho : po;
}, qT = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Xe);
  return (n) => t(de("IterNode", n, Oe));
})(), d0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, ls = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, gs = /* @__PURE__ */ mn(F)(Xt), WT = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, OT = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, XT = /* @__PURE__ */ w((t) => (n) => K(F)(n)()(t))(B), YT = /* @__PURE__ */ w((t) => (n) => K(F)(n)()(t))(B), Tc = io.traverse(Go), Ru = /* @__PURE__ */ mn(F)(Xt), UT = (t) => (n) => Zn(F.compare, jn, t, n), VT = /* @__PURE__ */ w((t) => (n) => K(F)(n)()(t))(B), MT = /* @__PURE__ */ mn(F)(Xt), KT = (t) => (n) => Zn(F.compare, jn, t, n), jT = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, fg = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ZT = (t) => (n) => ({
  ...n,
  edges: gs(D((e) => k(
    e._1,
    (() => {
      const r = d0(e._1)(t);
      if (r.tag === "Nothing")
        return e._2;
      if (r.tag === "Just") {
        const o = ls(r._1._2)(n.nodes), i = ls(r._1._1)(n.nodes), s = (() => {
          if (i.tag === "Nothing")
            return e._2;
          if (i.tag === "Just") {
            const u = Dt((c) => x, (c) => (a) => J("Just", { head: c, tail: a }), e._2);
            if (u.tag === "Nothing")
              return e._2;
            if (u.tag === "Just")
              return [
                (() => {
                  const c = Dt((_) => x, (_) => (g) => J("Just", { head: _, tail: g }), u._1.tail), a = c.tag === "Just" ? J("Just", c._1.head) : x, l = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, d = (() => {
                    if (a.tag === "Just") {
                      if ((a._1.x > u._1.head.x ? a._1.x - u._1.head.x < 0.5 : u._1.head.x - a._1.x < 0.5) && u._1.head.x >= l.x - 0.5 && u._1.head.x <= l.x + l.w + 0.5)
                        return a._1.y >= l.y + l.h ? J("Just", _o) : a._1.y <= l.y ? J("Just", go) : x;
                      if ((a._1.y > u._1.head.y ? a._1.y - u._1.head.y < 0.5 : u._1.head.y - a._1.y < 0.5) && u._1.head.y >= l.y - 0.5 && u._1.head.y <= l.y + l.h + 0.5) {
                        if (a._1.x >= l.x + l.w)
                          return J("Just", po);
                        if (a._1.x <= l.x)
                          return J("Just", ho);
                      }
                      return x;
                    }
                    if (a.tag === "Nothing")
                      return x;
                    f();
                  })();
                  if (d.tag === "Just") {
                    if (d._1 === "TopSide")
                      return { ...u._1.head, y: ae(i._1.shape)(l)(go)(u._1.head.x) };
                    if (d._1 === "BottomSide")
                      return { ...u._1.head, y: ae(i._1.shape)(l)(_o)(u._1.head.x) };
                    if (d._1 === "LeftSide")
                      return { ...u._1.head, x: ae(i._1.shape)(l)(ho)(u._1.head.y) };
                    if (d._1 === "RightSide")
                      return { ...u._1.head, x: ae(i._1.shape)(l)(po)(u._1.head.y) };
                    f();
                  }
                  if (d.tag === "Nothing") {
                    const _ = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, g = ag(_)(u._1.head);
                    if (g === "TopSide")
                      return { ...u._1.head, y: ae(i._1.shape)(_)(go)(u._1.head.x) };
                    if (g === "BottomSide")
                      return { ...u._1.head, y: ae(i._1.shape)(_)(_o)(u._1.head.x) };
                    if (g === "LeftSide")
                      return { ...u._1.head, x: ae(i._1.shape)(_)(ho)(u._1.head.y) };
                    if (g === "RightSide")
                      return { ...u._1.head, x: ae(i._1.shape)(_)(po)(u._1.head.y) };
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
          const u = Ke(s);
          if (u.tag === "Nothing")
            return s;
          if (u.tag === "Just")
            return Et(u._1.init)((() => {
              const c = Ke(u._1.init), a = c.tag === "Just" ? J("Just", c._1.last) : x, l = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, d = (() => {
                if (a.tag === "Just") {
                  if ((a._1.x > u._1.last.x ? a._1.x - u._1.last.x < 0.5 : u._1.last.x - a._1.x < 0.5) && u._1.last.x >= l.x - 0.5 && u._1.last.x <= l.x + l.w + 0.5)
                    return a._1.y >= l.y + l.h ? J("Just", _o) : a._1.y <= l.y ? J("Just", go) : x;
                  if ((a._1.y > u._1.last.y ? a._1.y - u._1.last.y < 0.5 : u._1.last.y - a._1.y < 0.5) && u._1.last.y >= l.y - 0.5 && u._1.last.y <= l.y + l.h + 0.5) {
                    if (a._1.x >= l.x + l.w)
                      return J("Just", po);
                    if (a._1.x <= l.x)
                      return J("Just", ho);
                  }
                  return x;
                }
                if (a.tag === "Nothing")
                  return x;
                f();
              })();
              if (d.tag === "Just") {
                if (d._1 === "TopSide")
                  return { ...u._1.last, y: ae(o._1.shape)(l)(go)(u._1.last.x) };
                if (d._1 === "BottomSide")
                  return { ...u._1.last, y: ae(o._1.shape)(l)(_o)(u._1.last.x) };
                if (d._1 === "LeftSide")
                  return { ...u._1.last, x: ae(o._1.shape)(l)(ho)(u._1.last.y) };
                if (d._1 === "RightSide")
                  return { ...u._1.last, x: ae(o._1.shape)(l)(po)(u._1.last.y) };
                f();
              }
              if (d.tag === "Nothing") {
                const _ = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, g = ag(_)(u._1.last);
                if (g === "TopSide")
                  return { ...u._1.last, y: ae(o._1.shape)(_)(go)(u._1.last.x) };
                if (g === "BottomSide")
                  return { ...u._1.last, y: ae(o._1.shape)(_)(_o)(u._1.last.x) };
                if (g === "LeftSide")
                  return { ...u._1.last, x: ae(o._1.shape)(_)(ho)(u._1.last.y) };
                if (g === "RightSide")
                  return { ...u._1.last, x: ae(o._1.shape)(_)(po)(u._1.last.y) };
              }
              f();
            })());
        }
      }
      f();
    })()
  ))(qT(n.edges)))
}), tJ = (t) => (n) => (e) => {
  const r = un((o) => o.id === e)(t.graph.edges);
  if (r.tag === "Just")
    return J("Just", r._1);
  if (r.tag === "Nothing")
    return d0(e)(n);
  f();
}, nJ = (t) => (n) => (e) => (r) => ({
  x: r.position._1 * t,
  y: r.position._2 * t,
  w: r.size._1 * t,
  h: r.size._2 * t,
  label: (() => {
    const o = ls(r.node)(n);
    if (o.tag === "Just")
      return o._1;
    if (o.tag === "Nothing")
      return r.node;
    f();
  })(),
  shape: (() => {
    const o = ls(r.node)(e);
    if (o.tag === "Nothing")
      return Er;
    if (o.tag === "Just")
      return o._1;
    f();
  })()
}), eJ = (t) => ({ id: t, size: k(1, 1), ports: [], label: J("Just", t), shape: Er }), rJ = (t) => (n) => (e) => (r) => k(r.node, nJ(t)(n)(e)(r)), T_ = (t) => {
  const n = Ns(`
`)(t);
  return n.length === 0 ? [""] : n;
}, J_ = (t) => {
  const n = (e, r) => {
    if (e.tag === "Leaf")
      return r;
    if (e.tag === "Node")
      return n(e._5, Zt("Cons", e._4, n(e._6, r)));
    f();
  };
  return Ot(gn.foldr, n(t.interiors, Qt));
}, oJ = (t) => gs(xt((n) => J(
  "Just",
  k(n.edge, { id: n.edge, from: { node: n.from, port: x }, to: { node: n.to, port: x }, label: x })
))(vt(t.scenes)((n) => n.tag === "DataFlow" ? xt((e) => e.kind.tag === "SendToken" ? J("Just", e.kind._1) : x)(n._1.events) : []))), b_ = (t) => {
  const n = V$(t), e = lt((o) => WT(o.id)(n.nodes), t.graph.nodes), r = lt((o) => OT(o.id)(n.edges), t.graph.edges);
  return {
    nodes: [
      ...e,
      ...D(eJ)(Ot(
        xe.foldr,
        Cr(F.compare, n.nodes, XT(D((o) => o.id)(e)))
      ))
    ],
    edges: [
      ...r,
      ...xt(tJ(t)(oJ(t)))(Ot(
        xe.foldr,
        Cr(F.compare, n.edges, YT(D((o) => o.id)(r)))
      ))
    ],
    constraints: t.graph.constraints
  };
}, iJ = (t) => {
  const n = Tc((e) => {
    const r = H1(D1)((() => {
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
  })(b_(t).nodes);
  return () => {
    const e = n();
    return Ru(e);
  };
}, k_ = (t) => {
  const n = iJ(t);
  return () => {
    const e = n(), r = Tc(k_)(J_(t))();
    return w(UT)(e)(r);
  };
}, sJ = (t) => (n) => {
  const e = Dt((r) => x, (r) => (o) => J("Just", { head: r, tail: o }), n.segments);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ x: e._1.head.start._1 * t, y: e._1.head.start._2 * t }, ...D((r) => ({ x: r.end._1 * t, y: r.end._2 * t }))([e._1.head, ...e._1.tail])];
  f();
}, uJ = (t) => (n) => k(n.edge, sJ(t)(n)), cJ = (t) => (n) => (e) => (r) => ({
  nodes: Ru(D(rJ(U(4) * t)(n)(e))(r.nodes)),
  edges: gs(D(uJ(t))(r.edges)),
  chipExtras: B,
  edgeLabels: B
}), aJ = (t) => (n) => ({
  ...ZT(gs(D((e) => k(e.id, k(e.from.node, e.to.node)))(n.edges)))(cJ(8)(Ru(D((e) => k(
    e.id,
    (() => {
      if (e.label.tag === "Just")
        return e.label._1;
      if (e.label.tag === "Nothing")
        return e.id;
      f();
    })()
  ))(n.nodes)))(Ru(D((e) => k(e.id, e.shape))(n.nodes)))(DT(RT)(n).result)),
  edgeLabels: gs(xt((e) => e.label.tag === "Just" ? J("Just", k(e.id, e.label._1)) : x)(n.edges))
}), fJ = (t) => w((n) => (e) => {
  if (e.tag === "Structural")
    return n;
  if (e.tag === "DataFlow")
    return w((r) => (o) => {
      if (o.kind.tag === "SendToken")
        return w((i) => (s) => K(F)(s)()(i))(r)(o.kind._1.labels);
      if (o.kind.tag === "FillNodeWithoutTransition")
        return w((i) => (s) => K(F)(s)()(i))(r)(o.kind._1.labels);
      f();
    })(n)(e._1.events);
  if (e.tag === "Hold" || e.tag === "EnterNode" || e.tag === "ExitNode")
    return n;
  f();
})(B)(t.scenes), lJ = (t) => {
  const n = Tc((e) => {
    const r = H1(D1)(e);
    return () => {
      const o = r();
      return k(e, { labelW: o, charCount: je(Po(e)), lineCount: 1 });
    };
  })(Ot(
    xe.foldr,
    VT(vt(Ot(xe.foldr, fJ(t)))(T_))
  ));
  return () => {
    const e = n();
    return MT(e);
  };
}, L_ = (t) => {
  const n = lJ(t);
  return () => {
    const e = n(), r = Tc(L_)(J_(t))();
    return w(KT)(e)(r);
  };
}, gJ = U(4) * 8, dJ = (t) => vt(t.scenes)((n) => {
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
}), _J = (t) => (n) => (e) => {
  const r = (o) => {
    const i = xt((s) => {
      const u = jT(s)(t);
      return u.tag === "Just" ? J("Just", { w: u._1.labelW + 28, h: U(Ov(1)(u._1.lineCount)) * 13.2 + 12 }) : x;
    })(vt(o)(T_));
    return i.length === 0 ? x : J(
      "Just",
      { w: w(fg)(0)(D((s) => s.w)(i)), h: w(fg)(0)(D((s) => s.h)(i)) }
    );
  };
  return w((o) => (i) => {
    if (i.kind.tag === "SendToken") {
      const s = d0(i.kind._1.edge)(e.edges), u = r(i.kind._1.labels);
      if (u.tag === "Just" && s.tag === "Just") {
        const c = u._1;
        return Gt(F)(xn)(i.kind._1.edge)(D((a) => ({ x: a.x + 14 + c.w, y: a.y - 6 - 8 - c.h }))(s._1))(o);
      }
      return o;
    }
    if (i.kind.tag === "FillNodeWithoutTransition") {
      const s = ls(i.kind._1.node)(e.nodes), u = r(i.kind._1.labels);
      return u.tag === "Just" && s.tag === "Just" ? Gt(F)(xn)("__fill__:" + i.kind._1.node)((() => {
        const c = s._1.y - u._1.h - 14, a = s._1.x + s._1.w / 2, l = a - u._1.w / 2, d = a + u._1.w / 2, _ = s._1.y - 14;
        return [{ x: l, y: c }, { x: d, y: c }, { x: l, y: _ }, { x: d, y: _ }];
      })())(o) : o;
    }
    f();
  })(B)(dJ(n));
}, Jc = (t) => (n) => (e) => ({
  layout: (() => {
    const r = aJ()(jv(gJ)(t)(Kv(Mv)(b_(e))));
    return { ...r, chipExtras: _J(n)(e)(r) };
  })(),
  interiors: (() => {
    const r = Jc(t)(n), o = (i) => {
      if (i.tag === "Leaf")
        return B;
      if (i.tag === "Node")
        return nn("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
      f();
    };
    return o(e.interiors);
  })()
}), lg = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Xa = (t) => (n) => (e) => {
  const r = t < 0.05 ? t : 0.05, o = (s, u) => {
    if (u.tag === "Leaf")
      return s;
    if (u.tag === "Node")
      return o(
        (() => {
          const c = lg(u._3)(e), a = (() => {
            if (c.tag === "Just")
              return c._1;
            if (c.tag === "Nothing")
              return { x: u._4.x, y: u._4.y, vx: 0, vy: 0 };
            f();
          })(), l = a.vx + (180 * (u._4.x - a.x) - 22 * a.vx) * r, d = a.vy + (180 * (u._4.y - a.y) - 22 * a.vy) * r;
          return K(F)(u._3)({ x: a.x + l * r, y: a.y + d * r, vx: l, vy: d })(o(s, u._5));
        })(),
        u._6
      );
    f();
  }, i = o(B, n);
  return {
    springs: i,
    applied: (() => {
      const s = (u, c) => {
        if (c.tag === "Leaf")
          return u;
        if (c.tag === "Node")
          return s(
            (() => {
              const a = s(u, c._5), l = lg(c._3)(i);
              if (l.tag === "Just")
                return K(F)(c._3)({ ...c._4, x: l._1.x, y: l._1.y })(a);
              if (l.tag === "Nothing")
                return K(F)(c._3)(c._4)(a);
              f();
            })(),
            c._6
          );
        f();
      };
      return s(B, n);
    })()
  };
}, Ne = (t, n) => ({ tag: "CatQueue", _1: t, _2: n }), hJ = (t) => {
  let n = t, e = !0, r;
  for (; e; ) {
    const o = n;
    if (o._1.tag === "Nil") {
      if (o._2.tag === "Nil") {
        e = !1, r = x;
        continue;
      }
      n = Ne(
        ((s) => (u) => {
          let c = s, a = u, l = !0, d;
          for (; l; ) {
            const _ = c, g = a;
            if (g.tag === "Nil") {
              l = !1, d = _;
              continue;
            }
            if (g.tag === "Cons") {
              c = Zt("Cons", g._1, _), a = g._2;
              continue;
            }
            f();
          }
          return d;
        })(Qt)(o._2),
        Qt
      );
      continue;
    }
    if (o._1.tag === "Cons") {
      e = !1, r = J("Just", k(o._1._1, Ne(o._1._2, o._2)));
      continue;
    }
    f();
  }
  return r;
}, Ee = (t, n, e) => ({ tag: t, _1: n, _2: e }), kt = /* @__PURE__ */ Ee("CatNil"), pJ = (t) => (n) => {
  if (t.tag === "CatNil")
    return n;
  if (n.tag === "CatNil")
    return t;
  if (t.tag === "CatCons")
    return Ee("CatCons", t._1, Ne(t._2._1, Zt("Cons", n, t._2._2)));
  f();
}, mJ = (t) => (n) => (e) => {
  const r = (i) => (s) => (u) => {
    let c = i, a = s, l = u, d = !0, _;
    for (; d; ) {
      const g = c, h = a, m = l;
      if (m.tag === "Nil") {
        d = !1, _ = h;
        continue;
      }
      if (m.tag === "Cons") {
        c = g, a = g(h)(m._1), l = m._2;
        continue;
      }
      f();
    }
    return _;
  };
  return ((i) => (s) => {
    let u = i, c = s, a = !0, l;
    for (; a; ) {
      const d = u, _ = c, g = hJ(d);
      if (g.tag === "Nothing") {
        a = !1, l = r((h) => (m) => m(h))(n)(_);
        continue;
      }
      if (g.tag === "Just") {
        u = g._1._2, c = Zt("Cons", t(g._1._1), _);
        continue;
      }
      f();
    }
    return l;
  })(e)(Qt);
}, $J = (t) => {
  if (t.tag === "CatNil")
    return x;
  if (t.tag === "CatCons")
    return J("Just", k(t._1, t._2._1.tag === "Nil" && t._2._2.tag === "Nil" ? kt : mJ(pJ)(kt)(t._2)));
  f();
}, Jt = (t, n) => ({ tag: "Free", _1: t, _2: n }), Lt = (t, n, e) => ({ tag: t, _1: n, _2: e }), yJ = (t) => {
  let n = t, e = !0, r;
  for (; e; ) {
    const o = n;
    if (o._1.tag === "Return") {
      const i = $J(o._2);
      if (i.tag === "Nothing") {
        e = !1, r = Lt("Return", o._1._1);
        continue;
      }
      if (i.tag === "Just") {
        n = (() => {
          const s = i._1._1(o._1._1);
          return Jt(
            s._1,
            (() => {
              if (s._2.tag === "CatNil")
                return i._1._2;
              if (i._1._2.tag === "CatNil")
                return s._2;
              if (s._2.tag === "CatCons")
                return Ee("CatCons", s._2._1, Ne(s._2._2._1, Zt("Cons", i._1._2, s._2._2._2)));
              f();
            })()
          );
        })();
        continue;
      }
      f();
    }
    if (o._1.tag === "Bind") {
      e = !1, r = Lt(
        "Bind",
        o._1._1,
        (i) => {
          const s = o._1._2(i);
          return Jt(
            s._1,
            (() => {
              if (s._2.tag === "CatNil")
                return o._2;
              if (o._2.tag === "CatNil")
                return s._2;
              if (s._2.tag === "CatCons")
                return Ee("CatCons", s._2._1, Ne(s._2._2._1, Zt("Cons", o._2, s._2._2._2)));
              f();
            })()
          );
        }
      );
      continue;
    }
    f();
  }
  return r;
}, vJ = (t) => (n) => {
  const e = n.Monad0(), r = e.Bind1().Apply0().Functor0();
  return (o) => n.tailRecM((i) => {
    const s = yJ(i);
    if (s.tag === "Return")
      return r.map(Up)(e.Applicative0().pure(s._1));
    if (s.tag === "Bind")
      return r.map(lf)(o(t.map(s._2)(s._1)));
    f();
  });
}, xJ = { Applicative0: () => Fu, Bind1: () => S_ }, wJ = { map: (t) => (n) => S_.bind(n)((e) => Fu.pure(t(e))) }, S_ = {
  bind: (t) => (n) => Jt(
    t._1,
    (() => {
      if (t._2.tag === "CatNil")
        return Ee("CatCons", n, Ne(Qt, Qt));
      if (t._2.tag === "CatCons")
        return Ee(
          "CatCons",
          t._2._1,
          Ne(
            t._2._2._1,
            Zt("Cons", Ee("CatCons", n, Ne(Qt, Qt)), t._2._2._2)
          )
        );
      f();
    })()
  ),
  Apply0: () => C_
}, C_ = {
  apply: (t) => (n) => {
    const e = (r) => Jt(
      n._1,
      (() => {
        if (n._2.tag === "CatNil")
          return Ee("CatCons", (o) => Fu.pure(r(o)), Ne(Qt, Qt));
        if (n._2.tag === "CatCons")
          return Ee(
            "CatCons",
            n._2._1,
            Ne(
              n._2._2._1,
              Zt(
                "Cons",
                Ee("CatCons", (o) => Fu.pure(r(o)), Ne(Qt, Qt)),
                n._2._2._2
              )
            )
          );
        f();
      })()
    );
    return Jt(
      t._1,
      (() => {
        if (t._2.tag === "CatNil")
          return Ee("CatCons", e, Ne(Qt, Qt));
        if (t._2.tag === "CatCons")
          return Ee(
            "CatCons",
            t._2._1,
            Ne(
              t._2._2._1,
              Zt("Cons", Ee("CatCons", e, Ne(Qt, Qt)), t._2._2._2)
            )
          );
        f();
      })()
    );
  },
  Functor0: () => wJ
}, Fu = { pure: (t) => Jt(Lt("Return", t), kt), Apply0: () => C_ }, NJ = { map: (t) => (n) => ({ type: n.type, value: n.map(t)(n.value), map: n.map }) };
var Ho = (function() {
  var t = {}, n = "Pure", e = "Throw", r = "Catch", o = "Sync", i = "Async", s = "Bind", u = "Bracket", c = "Fork", a = "Sequential", l = "Map", d = "Apply", _ = "Alt", g = "Cons", h = "Resume", m = "Release", p = "Finalizer", $ = "Finalized", y = "Forked";
  function v(R, Q, X, tt) {
    this.tag = R, this._1 = Q, this._2 = X, this._3 = tt;
  }
  function N(R) {
    var Q = function(X, tt, V) {
      return new v(R, X, tt, V);
    };
    return Q.tag = R, Q;
  }
  function T(R) {
    return new v(n, void 0);
  }
  function b(R) {
    try {
      R();
    } catch (Q) {
      setTimeout(function() {
        throw Q;
      }, 0);
    }
  }
  function L(R, Q, X) {
    try {
      return Q(X());
    } catch (tt) {
      return R(tt);
    }
  }
  function E(R, Q, X) {
    try {
      return Q(X)();
    } catch (tt) {
      return X(R(tt))(), T;
    }
  }
  var C = (function() {
    var R = 1024, Q = 0, X = 0, tt = new Array(R), V = !1;
    function O() {
      var j;
      for (V = !0; Q !== 0; )
        Q--, j = tt[X], tt[X] = void 0, X = (X + 1) % R, j();
      V = !1;
    }
    return {
      isDraining: function() {
        return V;
      },
      enqueue: function(j) {
        var rt;
        Q === R && (rt = V, O(), V = rt), tt[(X + Q) % R] = j, Q++, V || O();
      }
    };
  })();
  function I(R) {
    var Q = {}, X = 0, tt = 0;
    return {
      register: function(V) {
        var O = X++;
        V.onComplete({
          rethrow: !0,
          handler: function(j) {
            return function() {
              tt--, delete Q[O];
            };
          }
        })(), Q[O] = V, tt++;
      },
      isEmpty: function() {
        return tt === 0;
      },
      killAll: function(V, O) {
        return function() {
          if (tt === 0)
            return O();
          var j = 0, rt = {};
          function et(ct) {
            rt[ct] = Q[ct].kill(V, function(dt) {
              return function() {
                delete rt[ct], j--, R.isLeft(dt) && R.fromLeft(dt) && setTimeout(function() {
                  throw R.fromLeft(dt);
                }, 0), j === 0 && O();
              };
            })();
          }
          for (var ft in Q)
            Q.hasOwnProperty(ft) && (j++, et(ft));
          return Q = {}, X = 0, tt = 0, function(ct) {
            return new v(o, function() {
              for (var dt in rt)
                rt.hasOwnProperty(dt) && rt[dt]();
            });
          };
        };
      }
    };
  }
  var z = 0, G = 1, H = 2, M = 3, Z = 4, Y = 5, q = 6;
  function A(R, Q, X) {
    var tt = 0, V = z, O = X, j = null, rt = null, et = null, ft = null, ct = null, dt = 0, Bt = 0, St = null, en = !0;
    function _t(st) {
      for (var gt, it, at; ; )
        switch (gt = null, it = null, at = null, V) {
          case H:
            V = G;
            try {
              O = et(O), ft === null ? et = null : (et = ft._1, ft = ft._2);
            } catch (wt) {
              V = Y, j = R.left(wt), O = null;
            }
            break;
          case M:
            R.isLeft(O) ? (V = Y, j = O, O = null) : et === null ? V = Y : (V = H, O = R.fromRight(O));
            break;
          case G:
            switch (O.tag) {
              case s:
                et && (ft = new v(g, et, ft)), et = O._2, V = G, O = O._1;
                break;
              case n:
                et === null ? (V = Y, O = R.right(O._1)) : (V = H, O = O._1);
                break;
              case o:
                V = M, O = L(R.left, R.right, O._1);
                break;
              case i:
                V = Z, O = E(R.left, O._1, function(wt) {
                  return function() {
                    tt === st && (tt++, C.enqueue(function() {
                      tt === st + 1 && (V = M, O = wt, _t(tt));
                    }));
                  };
                });
                return;
              case e:
                V = Y, j = R.left(O._1), O = null;
                break;
              // Enqueue the Catch so that we can call the error handler later on
              // in case of an exception.
              case r:
                et === null ? ct = new v(g, O, ct, rt) : ct = new v(g, O, new v(g, new v(h, et, ft), ct, rt), rt), et = null, ft = null, V = G, O = O._1;
                break;
              // Enqueue the Bracket so that we can call the appropriate handlers
              // after resource acquisition.
              case u:
                dt++, et === null ? ct = new v(g, O, ct, rt) : ct = new v(g, O, new v(g, new v(h, et, ft), ct, rt), rt), et = null, ft = null, V = G, O = O._1;
                break;
              case c:
                V = M, gt = A(R, Q, O._2), Q && Q.register(gt), O._1 && gt.run(), O = R.right(gt);
                break;
              case a:
                V = G, O = W(R, Q, O._1);
                break;
            }
            break;
          case Y:
            if (et = null, ft = null, ct === null)
              V = q, O = rt || j || O;
            else
              switch (gt = ct._3, at = ct._1, ct = ct._2, at.tag) {
                // We cannot recover from an unmasked interrupt. Otherwise we should
                // continue stepping, or run the exception handler if an exception
                // was raised.
                case r:
                  rt && rt !== gt && dt === 0 ? V = Y : j && (V = G, O = at._2(R.fromLeft(j)), j = null);
                  break;
                // We cannot resume from an unmasked interrupt or exception.
                case h:
                  rt && rt !== gt && dt === 0 || j ? V = Y : (et = at._1, ft = at._2, V = H, O = R.fromRight(O));
                  break;
                // If we have a bracket, we should enqueue the handlers,
                // and continue with the success branch only if the fiber has
                // not been interrupted. If the bracket acquisition failed, we
                // should not run either.
                case u:
                  dt--, j === null && (it = R.fromRight(O), ct = new v(g, new v(m, at._2, it), ct, gt), (rt === gt || dt > 0) && (V = G, O = at._3(it)));
                  break;
                // Enqueue the appropriate handler. We increase the bracket count
                // because it should not be cancelled.
                case m:
                  ct = new v(g, new v($, O, j), ct, rt), V = G, rt && rt !== gt && dt === 0 ? O = at._1.killed(R.fromLeft(rt))(at._2) : j ? O = at._1.failed(R.fromLeft(j))(at._2) : O = at._1.completed(R.fromRight(O))(at._2), j = null, dt++;
                  break;
                case p:
                  dt++, ct = new v(g, new v($, O, j), ct, rt), V = G, O = at._1;
                  break;
                case $:
                  dt--, V = Y, O = at._1, j = at._2;
                  break;
              }
            break;
          case q:
            for (var Tt in St)
              St.hasOwnProperty(Tt) && (en = en && St[Tt].rethrow, b(St[Tt].handler(O)));
            St = null, rt && j ? setTimeout(function() {
              throw R.fromLeft(j);
            }, 0) : R.isLeft(O) && en && setTimeout(function() {
              if (en)
                throw R.fromLeft(O);
            }, 0);
            return;
          case z:
            V = G;
            break;
          case Z:
            return;
        }
    }
    function bt(st) {
      return function() {
        if (V === q)
          return en = en && st.rethrow, st.handler(O)(), function() {
          };
        var gt = Bt++;
        return St = St || {}, St[gt] = st, function() {
          St !== null && delete St[gt];
        };
      };
    }
    function ht(st, gt) {
      return function() {
        if (V === q)
          return gt(R.right(void 0))(), function() {
          };
        var it = bt({
          rethrow: !1,
          handler: function() {
            return gt(R.right(void 0));
          }
        })();
        switch (V) {
          case z:
            rt = R.left(st), V = q, O = rt, _t(tt);
            break;
          case Z:
            rt === null && (rt = R.left(st)), dt === 0 && (V === Z && (ct = new v(g, new v(p, O(st)), ct, rt)), V = Y, O = null, j = null, _t(++tt));
            break;
          default:
            rt === null && (rt = R.left(st)), dt === 0 && (V = Y, O = null, j = null);
        }
        return it;
      };
    }
    function $t(st) {
      return function() {
        var gt = bt({
          rethrow: !1,
          handler: st
        })();
        return V === z && _t(tt), gt;
      };
    }
    return {
      kill: ht,
      join: $t,
      onComplete: bt,
      isSuspended: function() {
        return V === z;
      },
      run: function() {
        V === z && (C.isDraining() ? _t(tt) : C.enqueue(function() {
          _t(tt);
        }));
      }
    };
  }
  function P(R, Q, X, tt) {
    var V = 0, O = {}, j = 0, rt = {}, et = new Error("[ParAff] Early exit"), ft = null, ct = t;
    function dt(bt, ht, $t) {
      var st = ht, gt = null, it = null, at = 0, Tt = {}, wt, Ft;
      t: for (; ; )
        switch (wt = null, st.tag) {
          case y:
            if (st._3 === t && (wt = O[st._1], Tt[at++] = wt.kill(bt, function(Vt) {
              return function() {
                at--, at === 0 && $t(Vt)();
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
        $t(R.right(void 0))();
      else
        for (Ft = 0, wt = at; Ft < wt; Ft++)
          Tt[Ft] = Tt[Ft]();
      return Tt;
    }
    function Bt(bt, ht, $t) {
      var st, gt, it, at, Tt, wt;
      for (R.isLeft(bt) ? (st = bt, gt = null) : (gt = bt, st = null); ; ) {
        if (it = null, at = null, Tt = null, wt = null, ft !== null)
          return;
        if (ht === null) {
          tt(st || gt)();
          return;
        }
        if (ht._3 !== t)
          return;
        switch (ht.tag) {
          case l:
            st === null ? (ht._3 = R.right(ht._1(R.fromRight(gt))), gt = ht._3) : ht._3 = st;
            break;
          case d:
            if (it = ht._1._3, at = ht._2._3, st) {
              if (ht._3 = st, Tt = !0, wt = j++, rt[wt] = dt(et, st === it ? ht._2 : ht._1, function() {
                return function() {
                  delete rt[wt], Tt ? Tt = !1 : $t === null ? Bt(st, null, null) : Bt(st, $t._1, $t._2);
                };
              }), Tt) {
                Tt = !1;
                return;
              }
            } else {
              if (it === t || at === t)
                return;
              gt = R.right(R.fromRight(it)(R.fromRight(at))), ht._3 = gt;
            }
            break;
          case _:
            if (it = ht._1._3, at = ht._2._3, it === t && R.isLeft(at) || at === t && R.isLeft(it))
              return;
            if (it !== t && R.isLeft(it) && at !== t && R.isLeft(at))
              st = gt === it ? at : it, gt = null, ht._3 = st;
            else if (ht._3 = gt, Tt = !0, wt = j++, rt[wt] = dt(et, gt === it ? ht._2 : ht._1, function() {
              return function() {
                delete rt[wt], Tt ? Tt = !1 : $t === null ? Bt(gt, null, null) : Bt(gt, $t._1, $t._2);
              };
            }), Tt) {
              Tt = !1;
              return;
            }
            break;
        }
        $t === null ? ht = null : (ht = $t._1, $t = $t._2);
      }
    }
    function St(bt) {
      return function(ht) {
        return function() {
          delete O[bt._1], bt._3 = ht, Bt(ht, bt._2._1, bt._2._2);
        };
      };
    }
    function en() {
      var bt = G, ht = X, $t = null, st = null, gt, it;
      t: for (; ; )
        switch (gt = null, it = null, bt) {
          case G:
            switch (ht.tag) {
              case l:
                $t && (st = new v(g, $t, st)), $t = new v(l, ht._1, t, t), ht = ht._2;
                break;
              case d:
                $t && (st = new v(g, $t, st)), $t = new v(d, t, ht._2, t), ht = ht._1;
                break;
              case _:
                $t && (st = new v(g, $t, st)), $t = new v(_, t, ht._2, t), ht = ht._1;
                break;
              default:
                it = V++, bt = Y, gt = ht, ht = new v(y, it, new v(g, $t, st), t), gt = A(R, Q, gt), gt.onComplete({
                  rethrow: !1,
                  handler: St(ht)
                })(), O[it] = gt, Q && Q.register(gt);
            }
            break;
          case Y:
            if ($t === null)
              break t;
            $t._1 === t ? ($t._1 = ht, bt = G, ht = $t._2, $t._2 = t) : ($t._2 = ht, ht = $t, st === null ? $t = null : ($t = st._1, st = st._2));
        }
      for (ct = ht, it = 0; it < V; it++)
        O[it].run();
    }
    function _t(bt, ht) {
      ft = R.left(bt);
      var $t;
      for (var st in rt)
        if (rt.hasOwnProperty(st)) {
          $t = rt[st];
          for (st in $t)
            $t.hasOwnProperty(st) && $t[st]();
        }
      rt = null;
      var gt = dt(bt, ct, ht);
      return function(it) {
        return new v(i, function(at) {
          return function() {
            for (var Tt in gt)
              gt.hasOwnProperty(Tt) && gt[Tt]();
            return T;
          };
        });
      };
    }
    return en(), function(bt) {
      return new v(i, function(ht) {
        return function() {
          return _t(bt, ht);
        };
      });
    };
  }
  function W(R, Q, X) {
    return new v(i, function(tt) {
      return function() {
        return P(R, Q, X, tt);
      };
    });
  }
  return v.EMPTY = t, v.Pure = N(n), v.Throw = N(e), v.Catch = N(r), v.Sync = N(o), v.Async = N(i), v.Bind = N(s), v.Bracket = N(u), v.Fork = N(c), v.Seq = N(a), v.ParMap = N(l), v.ParApply = N(d), v.ParAlt = N(_), v.Fiber = A, v.Supervisor = I, v.Scheduler = C, v.nonCanceler = T, v;
})();
const TJ = Ho.Pure;
Ho.Throw;
function Jo(t) {
  return function(n) {
    return Ho.Bind(t, n);
  };
}
const bo = Ho.Sync, JJ = Ho.Async;
function _0(t, n) {
  return function() {
    return Ho.Fiber(t, null, n);
  };
}
Ho.Seq;
const h0 = {
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
      return Ca("unsafeFromLeft: Right");
    f();
  },
  fromRight: (t) => {
    if (t.tag === "Right")
      return t._1;
    if (t.tag === "Left")
      return Ca("unsafeFromRight: Left");
    f();
  },
  left: Dp,
  right: Jd
}, bJ = /* @__PURE__ */ (() => {
  const t = TJ();
  return (n) => t;
})();
let _a = null;
function kJ() {
  return _a || (typeof document > "u" ? null : _a = document.createElement("canvas").getContext("2d"));
}
const ha = /* @__PURE__ */ new Map();
function E_(t, n, e, r, o, i) {
  const s = `${e} ${n}px ${t}`, u = s + "|" + r;
  if (ha.has(u)) return ha.get(u);
  const c = kJ();
  if (!c) return i;
  c.font = s;
  const a = o(c.measureText(r)), l = typeof document < "u" ? document.fonts : null;
  if (!l || l.check(s)) ha.set(u, a);
  else if (l && l.load)
    try {
      l.load(s);
    } catch {
    }
  return a;
}
const LJ = (t, n, e, r) => E_(t, n, e, r, (o) => o.width, -1), SJ = (t, n, e, r) => E_(
  t,
  n,
  e,
  r,
  (o) => ({ ascent: o.actualBoundingBoxAscent, descent: o.actualBoundingBoxDescent }),
  { ascent: -1, descent: -1 }
), Gu = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), A_ = (t) => t, P_ = {
  map: (t) => (n) => {
    if (n.tag === "MeasureText")
      return Gu("MeasureText", n._1, n._2, (e) => t(n._3(e)));
    if (n.tag === "MeasureInk")
      return Gu("MeasureInk", n._1, n._2, (e) => t(n._3(e)));
    f();
  }
}, p0 = (t) => (n) => {
  const e = LJ(t.family, t.size, t.weight, Po(n));
  return e < 0 ? U($c(n).length) * t.size * 0.62 : e;
}, m0 = (t) => (n) => {
  const e = SJ(t.family, t.size, t.weight, Po(n));
  return e.ascent < 0 ? { ascent: t.size * 0.72, descent: t.size * 0.2 } : e;
}, CJ = (t) => (n) => Jt(
  Lt(
    "Bind",
    { type: "metrics", value: Gu("MeasureInk", t, n, A_), map: P_.map },
    (e) => Jt(Lt("Return", e), kt)
  ),
  kt
), EJ = (t) => (n) => Jt(
  Lt(
    "Bind",
    { type: "metrics", value: Gu("MeasureText", t, n, A_), map: P_.map },
    (e) => Jt(Lt("Return", e), kt)
  ),
  kt
), R_ = (t) => t, F_ = (t) => t, bc = (t) => t, G_ = (t) => t, I_ = (t) => t, zt = (t, n, e, r, o) => ({ tag: t, _1: n, _2: e, _3: r, _4: o }), B_ = (t) => t, $0 = (t) => t, AJ = /* @__PURE__ */ $0("BaselineTop"), tr = /* @__PURE__ */ $0("BaselineMiddle"), PJ = /* @__PURE__ */ $0("BaselineBottom"), ds = /* @__PURE__ */ B_("AlignLeft"), uo = /* @__PURE__ */ B_("AlignCenter"), Dn = /* @__PURE__ */ I_("RoundJoin"), Ts = /* @__PURE__ */ I_("MiterJoin"), pe = /* @__PURE__ */ G_("ButtCap"), Me = /* @__PURE__ */ G_("RoundCap"), RJ = /* @__PURE__ */ bc("LayerPolyOut"), FJ = /* @__PURE__ */ bc("LayerPolyIn"), GJ = /* @__PURE__ */ bc("LayerNodeMask"), IJ = /* @__PURE__ */ bc("LayerOverlay"), Iu = /* @__PURE__ */ F_("NonZero"), BJ = /* @__PURE__ */ F_("EvenOdd"), gg = /* @__PURE__ */ R_("Normal"), ru = /* @__PURE__ */ R_("Difference"), vn = { r: 255, g: 255, b: 255, a: 255 }, _s = [5], Nn = {
  map: (t) => (n) => {
    if (n.tag === "FillPath")
      return zt("FillPath", n._1, n._2, t(n._3));
    if (n.tag === "StrokePath")
      return zt("StrokePath", n._1, n._2, t(n._3));
    if (n.tag === "FillStrokePath")
      return zt("FillStrokePath", n._1, n._2, n._3, t(n._4));
    if (n.tag === "DrawText")
      return zt("DrawText", n._1, t(n._2));
    if (n.tag === "DrawTextAffine")
      return zt("DrawTextAffine", n._1, n._2, t(n._3));
    if (n.tag === "PushTransform")
      return zt("PushTransform", n._1, t(n._2));
    if (n.tag === "PopTransform")
      return zt("PopTransform", t(n._1));
    if (n.tag === "PushClip")
      return zt("PushClip", n._1, n._2, t(n._3));
    if (n.tag === "PopClip")
      return zt("PopClip", t(n._1));
    if (n.tag === "PushBlend")
      return zt("PushBlend", n._1, t(n._2));
    if (n.tag === "PopBlend")
      return zt("PopBlend", t(n._1));
    if (n.tag === "PushAlpha")
      return zt("PushAlpha", n._1, t(n._2));
    if (n.tag === "PopAlpha")
      return zt("PopAlpha", t(n._1));
    if (n.tag === "PushBlur")
      return zt("PushBlur", n._1, t(n._2));
    if (n.tag === "PopBlur")
      return zt("PopBlur", t(n._1));
    if (n.tag === "PushLayer")
      return zt("PushLayer", n._1, t(n._2));
    if (n.tag === "PopLayer")
      return zt("PopLayer", t(n._1));
    if (n.tag === "SetViewport")
      return zt("SetViewport", n._1, t(n._2));
    if (n.tag === "ClearBackground")
      return zt("ClearBackground", n._1, t(n._2));
    if (n.tag === "BackgroundDots")
      return zt("BackgroundDots", n._1, t(n._2));
    f();
  }
}, Tr = { r: 26, g: 26, b: 26, a: 255 }, Ya = (t) => (n) => Math.imul(t, n), Li = (t) => {
  const n = t + 1831565813 | 0, e = Ya(n ^ n >>> 15)(n | 1), r = e ^ (e + Ya(e ^ e >>> 7)(e | 61) | 0), o = r ^ r >>> 14;
  return { prng: o, value: o < 0 ? (U(o) + 4294967296) / 4294967296 : U(o) / 4294967296 };
}, An = (t) => (n) => (e) => {
  const r = Li(e);
  return { prng: r.prng, value: t + r.value * (n - t) };
}, Ua = (t) => (n) => w((e) => (r) => Ya(e ^ r)(-2048144789))(n)(D(fr)(vr(t))), HJ = (t) => t, H_ = (t) => t, DJ = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ge = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, D_ = (t) => (n) => (e) => {
  const r = nt.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = nt.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, Va = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, zJ = (t) => (n) => (e) => {
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
}, QJ = /* @__PURE__ */ H_("FlatLevel"), qJ = /* @__PURE__ */ H_("NestedLevel"), y0 = /* @__PURE__ */ HJ("GenieSilhouette"), WJ = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, yLift: 0 };
  const o = Li(t);
  return { prng: o.prng, yLift: o.value * e.yJitter * r };
}, OJ = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, dx: 0 };
  const o = Li(t);
  return { prng: o.prng, dx: (o.value * 2 - 1) * e.xJitter * r };
}, dg = (t) => (n) => {
  const e = n.cy - t.cy, r = n.cx - t.cx, o = Un(r * r + e * e), i = (t.r * t.r - n.r * n.r + o * o) / (2 * o), s = Un(DJ(0)(t.r * t.r - i * i)), u = t.cx + i * r / o, c = t.cy + i * e / o, a = { x: u - s * e / o, y: c + s * r / o }, l = { x: u + s * e / o, y: c - s * r / o };
  return o === 0 || o > t.r + n.r ? { x: (t.cx + n.cx) / 2, y: t.cy } : a.y < l.y ? a : l;
}, ou = (t) => (n) => {
  const e = Ge(n)(Ge(t.w / 2)(t.h / 2));
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
}, XJ = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n)
    return { prng: t, r: o };
  if (e)
    return { prng: t, r: o * (1 + i.rJitter) };
  if (r)
    return { prng: t, r: o * i.smallScale };
  const s = Li(t);
  return { prng: s.prng, r: o * (1 + s.value * i.rJitter) };
}, z_ = (t) => {
  const n = Ge(t.w)(t.h) / 2;
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
}, YJ = (t) => (n) => (e) => {
  const r = Li(t), o = n.length;
  return o === 0 ? { prng: t, idx: -1 } : {
    prng: r.prng,
    idx: (() => {
      const i = D_(0)(o - 1 | 0)(ln(Fe(r.value * U(e))));
      return i >= 0 && i < n.length ? n[i] : -1;
    })()
  };
}, UJ = (t) => (n) => {
  const e = Li(t), r = n.length;
  return r === 0 ? { prng: t, idx: -1 } : {
    prng: e.prng,
    idx: (() => {
      const o = D_(0)(r - 1 | 0)(ln(Fe(e.value * U(r))));
      return o >= 0 && o < n.length ? n[o] : -1;
    })()
  };
}, Q_ = (t) => {
  const n = Ge(t.w * 0.18)(t.h * 0.6);
  return [1, t.x + n, t.y, 2, t.x + t.w, t.y, 2, t.x + t.w - n, t.y + t.h, 2, t.x, t.y + t.h, 5];
}, q_ = (t) => [
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
], W_ = { rBase: 1.2, stepRatio: 0.7, rJitter: 0.35, yJitter: 0.2, xJitter: 0.2, heroShift: 0.2, smallScale: 0.85, smallShift: 0.15, seed: 7, minN: 3 }, VJ = (t) => {
  const n = Ge(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.x + e;
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
}, O_ = (t) => {
  const n = Ge(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + t.h + 5, o = t.y + n, i = r - n, s = t.x + e;
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
}, X_ = (t) => (n) => {
  const e = n.y + n.h, r = Sm(t.rBase * n.h)(n.w / (2 * (1 + (U(t.minN) - 1) * t.stepRatio))), o = n.w - 2 * r, i = 2 * r * t.stepRatio, s = Va(t.minN)(o <= 0 || i <= 0 ? t.minN : ln(Pe(o / i)) + 1 | 0), u = s >= 3 ? Ut(1, s - 2 | 0) : [], c = u.length, a = Qe(c + 1 | 0, 2), l = a < 1 ? [] : Ct(0, a, u), d = UJ(t.seed)((() => {
    const p = c - a | 0;
    return p < 1 ? u : Ct(p, u.length, u);
  })()), _ = d.idx, g = YJ(d.prng)(lt((p) => p !== _, l))(Va(1)(l.length - (ge(to)(_)(l) ? 1 : 0) | 0)), h = g.idx, m = s >= 2 ? o / (U(s) - 1) : 0;
  return w((p) => ($) => {
    const y = $ === h, v = $ === _, N = $ === 0 || $ === (s - 1 | 0), T = XJ(p.prng)(N)(v)(y)(r)(t), b = WJ(T.prng)(N)(t)(n.h), L = OJ(b.prng)(N)(t)(m);
    return {
      prng: L.prng,
      circles: Et(p.circles)({
        cx: n.x + zJ(T.r)(n.w - T.r)((s >= 2 ? r + U($) / (U(s) - 1) * o + L.dx : r + 0 * o + L.dx) + (v ? t.heroShift * m : y ? -1 * t.smallShift * m : 0)),
        cy: e - b.yLift,
        r: T.r
      })
    };
  })({ prng: g.prng, circles: [] })(Ut(0, s - 1 | 0)).circles;
}, Y_ = (t) => (n) => {
  const e = t.length;
  return qt((r) => (o) => ({
    c: o,
    p1: (() => {
      if (r === 0)
        return { x: o.cx - o.r, y: n };
      const i = r - 1 | 0;
      return i >= 0 && i < t.length ? dg(t[i])(o) : { x: o.cx - o.r, y: n };
    })(),
    p2: (() => {
      if (r === (e - 1 | 0))
        return { x: o.cx + o.r, y: n };
      const i = r + 1 | 0;
      return i >= 0 && i < t.length ? dg(o)(t[i]) : { x: o.cx + o.r, y: n };
    })()
  }))(t);
}, U_ = (t) => {
  const n = Ge(t.h * 0.4)(t.w * 0.2);
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
}, MJ = (t) => (n) => (e) => {
  const r = wo(n.y - t.cy)(n.x - t.cx), o = wo(e.y - t.cy)(e.x - t.cx), i = o > r ? o - r : o + 6.283185307179586 - r, s = Va(1)(ln(oc(i / 1.5707963267948966))), u = i / U(s), c = 1.3333333333333333 * Cm(u / 4);
  return vt(Ut(0, s - 1 | 0))((a) => {
    const l = r + U(a + 1 | 0) * u, d = t.cx + t.r * ne(l), _ = t.cy + t.r * le(l), g = r + U(a) * u;
    return [
      4,
      t.cx + t.r * ne(g) - c * t.r * le(g),
      t.cy + t.r * le(g) + c * t.r * ne(g),
      d + c * t.r * le(l),
      _ - c * t.r * ne(l),
      d,
      _
    ];
  });
}, V_ = (t) => (n) => {
  const e = t.h * 0.38, r = Y_(X_(W_)({ x: t.x, y: t.y - e, w: t.w, h: e }))(t.y), o = Ge(n)(Ge(t.w / 2)(t.h / 2));
  return 0 < r.length ? [
    1,
    r[0].p1.x,
    r[0].p1.y,
    ...vt(r)((i) => MJ(i.c)(i.p1)(i.p2)),
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
  ] : ou(t)(n);
}, v0 = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n === "Rectangle")
    return t.drawRoundedRect(e)(r)(o)(i);
  if (n === "Cylinder") {
    const s = O_(e);
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
    const s = Q_(e);
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
    const s = U_(e);
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
    const s = z_(e);
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
    const s = q_(e);
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
    const s = V_(e)(r);
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
}, KJ = {
  fillPath: (t) => (n) => Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("FillPath", t, n, void 0), map: Nn.map },
      (e) => Jt(Lt("Return", e), kt)
    ),
    kt
  ),
  strokePath: (t) => (n) => Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("StrokePath", t, n, void 0), map: Nn.map },
      (e) => Jt(Lt("Return", e), kt)
    ),
    kt
  ),
  fillStrokePath: (t) => (n) => (e) => Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("FillStrokePath", t, n, e, void 0), map: Nn.map },
      (r) => Jt(Lt("Return", r), kt)
    ),
    kt
  ),
  drawRoundedRect: (t) => (n) => (e) => (r) => {
    if (e.tag === "Just") {
      if (r.tag === "Just")
        return Jt(
          Lt(
            "Bind",
            {
              type: "render",
              value: zt("FillStrokePath", ou(t)(n), e._1, r._1, void 0),
              map: Nn.map
            },
            (o) => Jt(Lt("Return", o), kt)
          ),
          kt
        );
      if (r.tag === "Nothing")
        return Jt(
          Lt(
            "Bind",
            {
              type: "render",
              value: zt("FillPath", ou(t)(n), e._1, void 0),
              map: Nn.map
            },
            (o) => Jt(Lt("Return", o), kt)
          ),
          kt
        );
      f();
    }
    if (e.tag === "Nothing") {
      if (r.tag === "Just")
        return Jt(
          Lt(
            "Bind",
            {
              type: "render",
              value: zt("StrokePath", ou(t)(n), r._1, void 0),
              map: Nn.map
            },
            (o) => Jt(Lt("Return", o), kt)
          ),
          kt
        );
      if (r.tag === "Nothing")
        return Jt(Lt("Return", void 0), kt);
    }
    f();
  },
  drawText: (t) => Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("DrawText", t, void 0), map: Nn.map },
      (n) => Jt(Lt("Return", n), kt)
    ),
    kt
  ),
  drawTextAffine: (t) => (n) => Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("DrawTextAffine", t, n, void 0), map: Nn.map },
      (e) => Jt(Lt("Return", e), kt)
    ),
    kt
  ),
  pushTransform: (t) => Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("PushTransform", t, void 0), map: Nn.map },
      (n) => Jt(Lt("Return", n), kt)
    ),
    kt
  ),
  popTransform: Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("PopTransform", void 0), map: Nn.map },
      (t) => Jt(Lt("Return", t), kt)
    ),
    kt
  ),
  pushBakedTransform: (t) => Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("PushTransform", t, void 0), map: Nn.map },
      (n) => Jt(Lt("Return", n), kt)
    ),
    kt
  ),
  popBakedTransform: Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("PopTransform", void 0), map: Nn.map },
      (t) => Jt(Lt("Return", t), kt)
    ),
    kt
  ),
  pushClip: (t) => (n) => Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("PushClip", t, n, void 0), map: Nn.map },
      (e) => Jt(Lt("Return", e), kt)
    ),
    kt
  ),
  popClip: Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("PopClip", void 0), map: Nn.map },
      (t) => Jt(Lt("Return", t), kt)
    ),
    kt
  ),
  pushBlend: (t) => Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("PushBlend", t, void 0), map: Nn.map },
      (n) => Jt(Lt("Return", n), kt)
    ),
    kt
  ),
  popBlend: Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("PopBlend", void 0), map: Nn.map },
      (t) => Jt(Lt("Return", t), kt)
    ),
    kt
  ),
  pushAlpha: (t) => Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("PushAlpha", t, void 0), map: Nn.map },
      (n) => Jt(Lt("Return", n), kt)
    ),
    kt
  ),
  popAlpha: Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("PopAlpha", void 0), map: Nn.map },
      (t) => Jt(Lt("Return", t), kt)
    ),
    kt
  ),
  pushBlur: (t) => Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("PushBlur", t, void 0), map: Nn.map },
      (n) => Jt(Lt("Return", n), kt)
    ),
    kt
  ),
  popBlur: Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("PopBlur", void 0), map: Nn.map },
      (t) => Jt(Lt("Return", t), kt)
    ),
    kt
  ),
  pushLayer: (t) => Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("PushLayer", t, void 0), map: Nn.map },
      (n) => Jt(Lt("Return", n), kt)
    ),
    kt
  ),
  popLayer: Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("PopLayer", void 0), map: Nn.map },
      (t) => Jt(Lt("Return", t), kt)
    ),
    kt
  ),
  setViewport: (t) => Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("SetViewport", t, void 0), map: Nn.map },
      (n) => Jt(Lt("Return", n), kt)
    ),
    kt
  ),
  clearBackground: (t) => Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("ClearBackground", t, void 0), map: Nn.map },
      (n) => Jt(Lt("Return", n), kt)
    ),
    kt
  ),
  backgroundDots: (t) => Jt(
    Lt(
      "Bind",
      { type: "render", value: zt("BackgroundDots", t, void 0), map: Nn.map },
      (n) => Jt(Lt("Return", n), kt)
    ),
    kt
  ),
  measureText: (t) => (n) => EJ(t)(n),
  measureInk: (t) => (n) => CJ(t)(n),
  insideTokenStyle: (t) => Jt(Lt("Return", y0), kt),
  Monad0: () => xJ
}, jJ = (t) => () => t.clip("evenodd"), ZJ = (t) => (n) => () => {
  t.filter = `blur(${n}px)`;
}, t3 = (t) => (n) => () => {
  const e = Math.max(8, Math.ceil(8 / Math.max(n.tile, 1e-3))), r = Math.max(2, Math.round(n.tile * e)), o = document.createElement("canvas");
  o.width = r, o.height = r;
  const i = o.getContext("2d");
  i.scale(e, e), i.fillStyle = n.bgCss, i.fillRect(0, 0, n.tile, n.tile), i.fillStyle = n.dotCss, i.beginPath(), i.arc(n.tile / 2, n.tile / 2, n.dotR, 0, 2 * Math.PI), i.fill();
  const s = t.createPattern(o, "repeat");
  s && typeof s.setTransform == "function" && s.setTransform(new DOMMatrix().translateSelf(n.ox, n.oy).scaleSelf(1 / e, 1 / e)), t.save(), t.fillStyle = s, t.fillRect(n.vx, n.vy, n.vw, n.vh), t.restore();
}, Ma = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, x0 = (t) => (n) => (e) => {
  const r = n.stroke;
  return () => {
    const o = r.value, i = Vm(t)(e);
    if (o !== e)
      return i(), n.stroke.value = e;
  };
}, n3 = (t) => (n) => (e) => {
  const r = n.font;
  return () => {
    const o = r.value, i = uc(t)(e);
    if (o !== e)
      return i(), n.font.value = e;
  };
}, Js = (t) => (n) => (e) => {
  const r = n.fill;
  return () => {
    const o = r.value, i = wf(t)(e);
    if (o !== e)
      return i(), n.fill.value = e;
  };
}, kc = (t) => (n) => {
  const e = n.length, r = (i) => {
    if (i >= e)
      return () => {
      };
    const s = i >= 0 && i < n.length ? n[i] : 0;
    if (s === 1) {
      const u = Qd(t)((() => {
        const a = i + 1 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })())((() => {
        const a = i + 2 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 2) {
      const u = Hi(t)((() => {
        const a = i + 1 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })())((() => {
        const a = i + 2 | 0;
        return a >= 0 && a < n.length ? n[a] : 0;
      })()), c = r(i + 3 | 0);
      return () => (u(), c());
    }
    if (s === 3) {
      const u = Di(t)({
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
      const u = r$(t)({
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
      const u = qd(t), c = r(i + 1 | 0);
      return () => (u(), c());
    }
    return () => {
    };
  }, o = zd(t);
  return () => (o(), r(0)());
}, e3 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Ma(i)(Ma(r / 2)(o / 2)), u = Qd(t)(n + s)(e);
  return () => (u(), Hi(t)(n + r - s)(e)(), Di(t)({ cpx: n + r, cpy: e, x: n + r, y: e + s })(), Hi(t)(n + r)(e + o - s)(), Di(t)({ cpx: n + r, cpy: e + o, x: n + r - s, y: e + o })(), Hi(t)(n + s)(e + o)(), Di(t)({ cpx: n, cpy: e + o, x: n, y: e + o - s })(), Hi(t)(n)(e + s)(), Di(t)({ cpx: n, cpy: e, x: n + s, y: e })(), qd(t)());
}, r3 = () => ({ font: { value: "" }, fill: { value: "" }, stroke: { value: "" } }), M_ = (t) => (n) => {
  const e = Jf(t)({ x: 0, y: 0, width: n.width, height: n.height });
  return () => {
    e();
    const r = r3();
    return { ctx: t, surface: n, styleCache: r, maskDepth: { value: 0 }, groupAlpha: { value: 1 }, alphaSaves: { value: [] } };
  };
}, o3 = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, i3 = (t) => rn(t.weight) + " " + vo(t.size) + "px " + t.family, pr = (t) => {
  const n = vo(U(t.a) / 255);
  return t.a >= 255 ? "rgb(" + rn(t.r) + "," + rn(t.g) + "," + rn(t.b) + ")" : "rgba(" + rn(t.r) + "," + rn(t.g) + "," + rn(t.b) + "," + n + ")";
}, s3 = (t) => (n) => (e) => (r) => {
  const o = Js(t)(e)(pr(r));
  return () => (o(), Zm(t)({ x: 0, y: 0, width: n.width, height: n.height })());
}, u3 = (t) => (n) => (e) => {
  const r = n.font;
  return () => (r.value = "", n.fill.value = "", n.stroke.value = "", t3(t)({
    vx: e.viewport.vx,
    vy: e.viewport.vy,
    vw: e.viewport.vw,
    vh: e.viewport.vh,
    bgCss: pr(e.bgColor),
    dotCss: pr(e.dotColor),
    tile: e.tile,
    dotR: e.dotRadius,
    ox: e.origin.x,
    oy: e.origin.y
  })());
}, c3 = (t) => (n) => (e) => (r) => {
  const o = Js(t)(n)(pr(r));
  return () => (o(), kc(t)(e)(), Tf(t)());
}, a3 = (t) => (n) => (e) => (r) => (o) => {
  const i = Js(t)(n)(pr(r));
  return () => (i(), x0(t)(n)(pr(o.color))(), xf(t)(o.width)(), fc(t)((() => {
    if (o.lineJoin === "RoundJoin")
      return ac;
    if (o.lineJoin === "BevelJoin")
      return Af;
    if (o.lineJoin === "MiterJoin")
      return Pf;
    f();
  })())(), Hf(t)((() => {
    if (o.lineCap === "ButtCap")
      return Gf;
    if (o.lineCap === "RoundCap")
      return Rf;
    if (o.lineCap === "SquareCap")
      return Ff;
    f();
  })())(), kc(t)(e)(), Tf(t)(), Nf(t)());
}, f3 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = zd(t);
  return () => {
    if (s(), e3(t)(e.x)(e.y)(e.w)(e.h)(r)(), o.tag === "Just" ? (Js(t)(n)(pr(o._1.color))(), Tf(t)()) : o.tag === "Nothing" || f(), i.tag === "Just")
      return x0(t)(n)(pr(i._1.color))(), xf(t)(i._1.width)(), fc(t)((() => {
        if (i._1.lineJoin === "RoundJoin")
          return ac;
        if (i._1.lineJoin === "BevelJoin")
          return Af;
        if (i._1.lineJoin === "MiterJoin")
          return Pf;
        f();
      })())(), Hf(t)((() => {
        if (i._1.lineCap === "ButtCap")
          return Gf;
        if (i._1.lineCap === "RoundCap")
          return Rf;
        if (i._1.lineCap === "SquareCap")
          return Ff;
        f();
      })())(), Nf(t)();
    i.tag !== "Nothing" && f();
  };
}, l3 = (t) => (n) => (e) => (r) => {
  const o = x0(t)(n)(pr(r.color));
  return () => (o(), xf(t)(r.width)(), fc(t)((() => {
    if (r.lineJoin === "RoundJoin")
      return ac;
    if (r.lineJoin === "BevelJoin")
      return Af;
    if (r.lineJoin === "MiterJoin")
      return Pf;
    f();
  })())(), Hf(t)((() => {
    if (r.lineCap === "ButtCap")
      return Gf;
    if (r.lineCap === "RoundCap")
      return Rf;
    if (r.lineCap === "SquareCap")
      return Ff;
    f();
  })())(), kc(t)(e)(), Nf(t)());
}, _g = (t) => (n) => (e) => {
  const r = Js(t)(n)(pr(e.color));
  return () => (r(), n3(t)(n)(i3(e.font))(), Bf(t)((() => {
    if (e.align === "AlignLeft")
      return u$;
    if (e.align === "AlignCenter")
      return Ef;
    if (e.align === "AlignRight")
      return c$;
    f();
  })())(), If(t)((() => {
    if (e.baseline === "BaselineTop")
      return o$;
    if (e.baseline === "BaselineMiddle")
      return Cf;
    if (e.baseline === "BaselineAlphabetic")
      return i$;
    if (e.baseline === "BaselineBottom")
      return s$;
    f();
  })())(), bf(t)(e.content)(e.x)(e.y)());
}, K_ = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => o3
}, g3 = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => K_
}, d3 = (t) => (n) => (e) => {
  const r = Ma(n.width / e.vw)(n.height / e.vh), o = ka(t)({ translateX: (n.width - e.vw * r) / 2 - e.vx * r, translateY: (n.height - e.vh * r) / 2 - e.vy * r });
  return () => (o(), Ki(t)({ scaleX: r, scaleY: r })(), fc(t)(ac)());
}, _3 = { pure: (t) => (n) => () => t, Apply0: () => K_ }, h3 = { Applicative0: () => _3, Bind1: () => g3 }, w0 = {
  fillPath: (t) => (n) => (e) => {
    const r = c3(e.ctx)(e.styleCache)(t)(n.color), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = l3(e.ctx)(e.styleCache)(t)(n), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = a3(r.ctx)(r.styleCache)(t)(n.color)(e), i = r.maskDepth;
    return () => {
      if (i.value === 0)
        return o();
    };
  },
  drawRoundedRect: (t) => (n) => (e) => (r) => (o) => {
    const i = f3(o.ctx)(o.styleCache)(t)(n)(e)(r), s = o.maskDepth;
    return () => {
      if (s.value === 0)
        return i();
    };
  },
  drawText: (t) => (n) => {
    const e = _g(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  drawTextAffine: (t) => (n) => (e) => {
    const r = Jr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", t$(e.ctx)(t)(), _g(e.ctx)(e.styleCache)(n)(), br(e.ctx)(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "";
    };
  },
  pushTransform: (t) => (n) => {
    const e = Jr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", ka(n.ctx)({ translateX: t.tx, translateY: t.ty })(), Ki(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popTransform: (t) => {
    const n = br(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBakedTransform: (t) => (n) => {
    const e = Jr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", ka(n.ctx)({ translateX: t.tx, translateY: t.ty })(), Ki(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popBakedTransform: (t) => {
    const n = br(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushClip: (t) => (n) => (e) => {
    const r = Jr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0) {
        if (r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", kc(e.ctx)(t)(), n === "NonZero")
          return jm(e.ctx)();
        if (n === "EvenOdd")
          return jJ(e.ctx)();
        f();
      }
    };
  },
  popClip: (t) => {
    const n = br(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBlend: (t) => (n) => {
    const e = Jr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        if (e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", t === "Normal")
          return al(n.ctx)(a$)();
        if (t === "Difference")
          return al(n.ctx)(f$)();
        f();
      }
    };
  },
  popBlend: (t) => {
    const n = br(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushAlpha: (t) => (n) => {
    const e = Jr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "";
        const i = n.groupAlpha.value, s = n.alphaSaves.value;
        n.alphaSaves.value = [...s, i];
        const u = i * t;
        return n.groupAlpha.value = u, Km(n.ctx)(u)();
      }
    };
  },
  popAlpha: (t) => {
    const n = br(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0) {
        n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
        const o = t.alphaSaves.value, i = Ke(o);
        if (i.tag === "Just")
          return t.alphaSaves.value = i._1.init, t.groupAlpha.value = i._1.last;
        if (i.tag === "Nothing")
          return t.groupAlpha.value = 1;
        f();
      }
    };
  },
  pushBlur: (t) => (n) => {
    const e = Jr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "";
        const i = ZJ(n.ctx)(t);
        if (t >= 0.01)
          return i();
      }
    };
  },
  popBlur: (t) => {
    const n = br(t.ctx), e = t.maskDepth;
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
    const e = d3(n.ctx)(n.surface)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  clearBackground: (t) => (n) => {
    const e = s3(n.ctx)(n.surface)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  backgroundDots: (t) => (n) => {
    const e = u3(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = p0(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = m0(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => y0,
  Monad0: () => h3
}, p3 = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, mi = (t) => (n) => (e) => {
  const r = p3(0.05)(1 - t - n);
  return e < t ? 0 : e > 1 - n ? 1 : (e - t) / r;
}, hg = (t) => {
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
}, Lc = (t) => {
  if (t.tag === "Hidden")
    return { alpha: 0, scale: 0 };
  if (t.tag === "Visible")
    return { alpha: 1, scale: 1 };
  if (t.tag === "PloppingIn")
    return { alpha: t._1 > 0 ? 1 : 0, scale: ts(8)(0.6)(hg(t._1)) };
  if (t.tag === "PloppingOut")
    return { alpha: t._1 < 1 ? 1 : 0, scale: ts(8)(0.6)(hg(1 - t._1)) };
  f();
};
function m3(t, n) {
  const e = n.x - t.x, r = n.y - t.y;
  return Math.sqrt(e * e + r * r);
}
function $3(t) {
  const n = t.length, e = new Array(n);
  for (let r = 0; r < n; r++) {
    const o = t[r], i = t[(r + 1) % n];
    e[r] = { a: o, b: i, len: m3(o, i) };
  }
  return e;
}
function y3(t, n, e) {
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
function pg(t, n) {
  if (n.length === 0) return [];
  const e = $3(n);
  let r = 0;
  for (let i = 0; i < e.length; i++) r += e[i].len;
  const o = new Array(t);
  for (let i = 0; i < t; i++)
    o[i] = y3(e, n, i * r / t);
  return o;
}
function v3(t, n) {
  const e = n.length;
  if (e === 0) return n;
  const r = (t % e + e) % e | 0, o = new Array(e);
  for (let i = 0; i < e; i++) o[i] = n[(i + r) % e];
  return o;
}
function x3(t, n) {
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
  return v3(r, n);
}
const mg = (t) => (n) => (e) => {
  const r = pg(t, n), o = pg(t, e), i = x3(r, o);
  return { from: r, to: i };
};
function $g(t) {
  const n = t.length;
  if (n === 0) return { x: 0, y: 0 };
  let e = 0, r = 0;
  for (let o = 0; o < n; o++)
    e += t[o].x, r += t[o].y;
  return { x: e / n, y: r / n };
}
function w3(t, n) {
  const e = n.x - t.x, r = n.y - t.y, o = Math.sqrt(e * e + r * r);
  return o <= 1e-4 ? { x: 1, y: 0 } : { x: e / o, y: r / o };
}
function N3(t, n) {
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
function T3(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
const yg = (t) => (n) => (e) => (r) => {
  const o = n.length;
  if (o === 0) return [];
  const i = $g(n), s = $g(e), u = w3(i, s), c = new Array(o);
  let a = 1 / 0, l = -1 / 0;
  for (let g = 0; g < o; g++) {
    const h = n[g], m = (h.x - i.x) * u.x + (h.y - i.y) * u.y;
    c[g] = m, m < a && (a = m), m > l && (l = m);
  }
  const d = l - a;
  let _ = new Array(o);
  for (let g = 0; g < o; g++) {
    const h = n[g], m = e[g];
    if (m === void 0) {
      _[g] = h;
      continue;
    }
    const p = d <= 1e-4 ? 0 : r.maxDelay * (1 - (c[g] - a) / d), $ = Math.max(1e-4, 1 - p), y = T3((t - p) / $), v = y * y * (3 - 2 * y);
    _[g] = {
      x: h.x + (m.x - h.x) * v,
      y: h.y + (m.y - h.y) * v
    };
  }
  for (let g = 0; g < r.smoothPasses; g++)
    _ = N3(0.5, _);
  return _;
}, mr = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, vg = /* @__PURE__ */ w(Eo)(0), xg = (t) => (n) => (e) => {
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
}, J3 = /* @__PURE__ */ w((t) => (n) => t + n.len)(0), N0 = (t) => {
  const n = Dt((e) => x, (e) => (r) => J("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...vt(Ct(1, t.length, t))((e) => [2, e.x, e.y]), 5];
  f();
}, b3 = (t) => (n) => {
  const e = mr(n)(mr(t.w / 2)(t.h / 2));
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
}, k3 = (t) => {
  const n = Dt((e) => x, (e) => (r) => J("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...vt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, L3 = (t) => {
  const n = { x: t.x, y: t.y, w: t.w, h: t.h };
  if (t.shape === "Cylinder")
    return O_(n);
  if (t.shape === "Parallelogram")
    return Q_(n);
  if (t.shape === "Diamond")
    return U_(n);
  if (t.shape === "Ellipse")
    return z_(n);
  if (t.shape === "Document")
    return q_(n);
  if (t.shape === "Cloud")
    return V_(n)(7);
  if (t.shape === "Rectangle")
    return b3(n)(7);
  f();
}, Pn = (t) => (n) => (e) => D((r) => {
  const o = U(r) / U(e);
  return { x: t.x + (n.x - t.x) * o, y: t.y + (n.y - t.y) * o };
})(Ut(0, e - 1 | 0)), S3 = (t) => {
  const n = Ge(t.w * 0.18)(t.h * 0.6);
  return [
    ...Pn({ x: t.x + n, y: t.y })({ x: t.x + t.w, y: t.y })(16),
    ...Pn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w - n, y: t.y + t.h })(16),
    ...Pn({ x: t.x + t.w - n, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(16),
    ...Pn({ x: t.x, y: t.y + t.h })({ x: t.x + n, y: t.y })(16)
  ];
}, $i = (t) => (n) => {
  const e = mr(t)(mr(n.w / 2)(n.h / 2));
  return { ...n, x: n.x + e, y: n.y + e, w: n.w - 2 * e, h: n.h - 2 * e };
}, Ka = (t) => (n) => {
  const e = n.y - t.y, r = n.x - t.x;
  return Un(r * r + e * e);
}, C3 = (t) => Fn((n) => (e) => ({ a: n, b: e, len: Ka(n)(e) }), t, Ct(1, t.length, t)), E3 = (t) => (n) => {
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
    ...vt(Ut(1, u - 2 | 0))((c) => {
      const a = c + 1 | 0, l = a >= 0 && a < n.length ? J("Just", n[a]) : x, d = c >= 0 && c < n.length ? J("Just", n[c]) : x, _ = c - 1 | 0, g = _ >= 0 && _ < n.length ? J("Just", n[_]) : x;
      if (g.tag === "Just" && d.tag === "Just" && l.tag === "Just") {
        const h = d._1, m = Ka(h)(l._1), p = Ka(g._1)(h), $ = mr(t)(m / 2), y = mr(t)(p / 2), v = m > 0 ? $ / m : 0, N = h.x + (l._1.x - h.x) * v, T = h.y + (l._1.y - h.y) * v, b = p > 0 ? y / p : 0, L = h.x + (g._1.x - h.x) * b, E = h.y + (g._1.y - h.y) * b;
        return D((C) => {
          const I = U(C) / U(10), z = 1 - I;
          return { x: z * z * L + 2 * z * I * h.x + I * I * N, y: z * z * E + 2 * z * I * h.y + I * I * T };
        })(Ut(0, 10));
      }
      return [];
    }),
    ...o
  ];
}, A3 = (t) => (n) => (e) => (r) => (o) => D((i) => {
  const s = U(i) / U(o), u = 1 - s, c = s * s * s, a = 3 * u * s * s, l = 3 * u * u * s, d = u * u * u;
  return { x: d * t.x + l * n.x + a * e.x + c * r.x, y: d * t.y + l * n.y + a * e.y + c * r.y };
})(Ut(0, o - 1 | 0)), P3 = (t) => [
  ...Pn({ x: t.x, y: t.y })({ x: t.x + t.w, y: t.y })(12),
  ...Pn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h * 0.85 })(12),
  ...A3({ x: t.x + t.w, y: t.y + t.h * 0.85 })({ x: t.x + t.w * 0.66, y: t.y + t.h * 1.05 })({ x: t.x + t.w * 0.34, y: t.y + t.h * 0.65 })({
    x: t.x,
    y: t.y + t.h * 0.85
  })(32),
  ...Pn({ x: t.x, y: t.y + t.h * 0.85 })({ x: t.x, y: t.y })(12)
], wg = (t) => (n) => D((e) => {
  const r = 6.283185307179586 * U(e) / U(64);
  return { x: t.x + n * ne(r), y: t.y + n * le(r) };
})(Ut(0, 63)), Sc = (t) => (n) => {
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
}, R3 = (t) => {
  const n = t.y + t.h / 2, e = Ge(t.h * 0.4)(t.w * 0.2);
  return [
    ...Pn({ x: t.x + e, y: t.y })({ x: t.x + t.w - e, y: t.y })(10),
    ...Pn({ x: t.x + t.w - e, y: t.y })({ x: t.x + t.w, y: n })(8),
    ...Pn({ x: t.x + t.w, y: n })({ x: t.x + t.w - e, y: t.y + t.h })(8),
    ...Pn({ x: t.x + t.w - e, y: t.y + t.h })({ x: t.x + e, y: t.y + t.h })(10),
    ...Pn({ x: t.x + e, y: t.y + t.h })({ x: t.x, y: n })(8),
    ...Pn({ x: t.x, y: n })({ x: t.x + e, y: t.y })(8)
  ];
}, j_ = (t) => {
  const n = t.length;
  return n === 0 ? { x: 0, y: 0 } : { x: vg(D((e) => e.x)(t)) / U(n), y: vg(D((e) => e.y)(t)) / U(n) };
}, Vs = (t) => (n) => (e) => (r) => (o) => D((i) => {
  const s = e + (r - e) * (U(i) / U(o));
  return { x: t.x + n * ne(s), y: t.y + n * le(s) };
})(Ut(0, o - 1 | 0)), Ng = (t) => (n) => {
  const e = mr(t)(mr(n.w / 2)(n.h / 2));
  return [
    ...Pn({ x: n.x + e, y: n.y })({ x: n.x + n.w - e, y: n.y })(6),
    ...Vs({ x: n.x + n.w - e, y: n.y + e })(e)(4.71238898038469)(6.283185307179586)(12),
    ...Pn({ x: n.x + n.w, y: n.y + e })({ x: n.x + n.w, y: n.y + n.h - e })(6),
    ...Vs({ x: n.x + n.w - e, y: n.y + n.h - e })(e)(0)(1.5707963267948966)(12),
    ...Pn({ x: n.x + n.w - e, y: n.y + n.h })({ x: n.x + e, y: n.y + n.h })(6),
    ...Vs({ x: n.x + e, y: n.y + n.h - e })(e)(1.5707963267948966)(3.141592653589793)(12),
    ...Pn({ x: n.x, y: n.y + n.h - e })({ x: n.x, y: n.y + e })(6),
    ...Vs({ x: n.x + e, y: n.y + e })(e)(3.141592653589793)(4.71238898038469)(12)
  ];
}, Bu = (t) => (n) => (e) => (r) => (o) => (i) => D((s) => {
  const u = r + (o - r) * (U(s) / U(i));
  return { x: t.x + n * ne(u), y: t.y + e * le(u) };
})(Ut(0, i - 1 | 0)), F3 = (t) => {
  const n = t.h * 0.38;
  return [
    ...vt(Y_(X_(W_)({
      x: t.x,
      y: t.y - n,
      w: t.w,
      h: n
    }))(t.y))((e) => {
      const r = wo(e.p2.y - e.c.cy)(e.p2.x - e.c.cx), o = wo(e.p1.y - e.c.cy)(e.p1.x - e.c.cx);
      return Bu({ x: e.c.cx, y: e.c.cy })(e.c.r)(e.c.r)(o)(r > o ? r : r + 6.283185307179586)(16);
    }),
    ...Pn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h })(8),
    ...Pn({ x: t.x + t.w, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(12),
    ...Pn({ x: t.x, y: t.y + t.h })({ x: t.x, y: t.y })(8)
  ];
}, G3 = (t) => {
  const n = mr(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.y + t.h + 5 - n - 2, i = t.x + e;
  return [
    ...Bu({ x: i, y: r })(e)(n)(3.141592653589793)(6.283185307179586)(24),
    ...Pn({ x: t.x + t.w, y: r })({ x: t.x + t.w, y: o })(12),
    ...Bu({ x: i, y: o })(e)(n)(0)(3.141592653589793)(24),
    ...Pn({ x: t.x, y: o })({ x: t.x, y: r })(12)
  ];
}, Ro = (t) => (n) => n.shape === "Cylinder" ? G3(n) : n.shape === "Parallelogram" ? S3(n) : n.shape === "Diamond" ? R3(n) : n.shape === "Ellipse" ? Ng(Ge(n.w)(n.h) / 2)(n) : n.shape === "Document" ? P3(n) : n.shape === "Cloud" ? F3(n) : Ng(t)(n), I3 = (t) => {
  const n = mr(t.h * 0.075)(t.w * 0.075), e = t.w / 2;
  return Bu({ x: t.x + e, y: t.y + n })(e)(n)(0)(3.141592653589793)(24);
}, B3 = (t) => (n) => (e) => w((r) => (o) => {
  const i = r.pos + o.len, s = e < i ? (e - r.pos) / o.len : 1, u = { x: o.a.x + (o.b.x - o.a.x) * s, y: o.a.y + (o.b.y - o.a.y) * s }, c = n > r.pos ? (n - r.pos) / o.len : 0, a = { x: o.a.x + (o.b.x - o.a.x) * c, y: o.a.y + (o.b.y - o.a.y) * c }, l = r.points.length - 1 | 0, d = l >= 0 && l < r.points.length ? (() => {
    const _ = r.points[l].x - a.x;
    return (_ < 0 ? -_ < 1e-4 : _ < 1e-4) && (() => {
      const g = r.points[l].y - a.y;
      return g < 0 ? -g < 1e-4 : g < 1e-4;
    })();
  })() ? Et(r.points)(u) : [...r.points, a, u] : [a, u];
  return o.len <= 0 || i <= n || r.pos >= e ? { ...r, pos: i } : { pos: i, points: d };
})({ pos: 0, points: [] })(t).points, H3 = (t) => (n) => (e) => {
  const r = Dt((o) => x, (o) => (i) => J("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just") {
    const o = C3(t), i = J3(o), s = xg(0)(i)(n * i), u = xg(0)(i)(e * i);
    return u <= s ? [] : B3(o)(s)(u);
  }
  f();
}, D3 = (t) => (n) => (e) => (r) => {
  const o = r.x - e.x, i = r.y - e.y, s = n.x - t.x, u = n.y - t.y, c = e.x - t.x, a = e.y - t.y, l = s * i - u * o, d = (c * i - a * o) / l, _ = (c * u - a * s) / l;
  return (l < 0 ? -l < 1e-9 : l < 1e-9) ? x : d >= 0 && d <= 1 && _ >= 0 && _ <= 1 ? J("Just", d) : x;
}, z3 = (t) => (n) => (e) => {
  const r = Ht((o) => (i) => ot.compare(o.t)(i.t))(xt((o) => {
    const i = D3(n)(e)(o._1)(o._2);
    return i.tag === "Just" ? J("Just", { t: i._1, p: { x: n.x + (e.x - n.x) * i._1, y: n.y + (e.y - n.y) * i._1 } }) : x;
  })(Fn(re, t, [...Ct(1, t.length, t), ...Ct(0, 1, t)])));
  return 0 < r.length ? J("Just", r[0].p) : x;
}, Tg = (t) => (n) => {
  const e = Ke(n);
  if (e.tag === "Nothing")
    return n;
  if (e.tag === "Just") {
    const r = e._1.init.length - 1 | 0;
    if (r >= 0 && r < e._1.init.length) {
      const o = z3(t)(e._1.init[r])(e._1.last);
      if (o.tag === "Just")
        return Et(e._1.init)(o._1);
      if (o.tag === "Nothing")
        return n;
      f();
    }
    return n;
  }
  f();
}, Mr = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ja = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Q3 = (t) => (n) => (e) => {
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
}, q3 = (t) => (n) => {
  const e = Mr(0)(t.y + 4 - n.y) + Mr(0)(n.y + n.h - (t.y + t.h - 4)), r = Mr(0)(t.x + 4 - n.x) + Mr(0)(n.x + n.w - (t.x + t.w - 4));
  return r * n.h + e * n.w + r * e;
}, W3 = (t) => (n) => {
  const e = t.y + t.h - 6, r = t.y + 6, o = t.x + 14, i = t.x + t.w - 14, s = w(Mr)(0)(D((u) => o - 10 < u.x + u.w + 12 && i + 10 > u.x - 12 && r - 10 < u.y + u.h + 12 && e + 10 > u.y - 12 ? ja((u.x + u.w + 12 - (o - 10)) / 0.7071067811865476)((e + 10 - (u.y - 12)) / 0.7071067811865476) : 0)(n));
  return { ...t, x: t.x + s * 0.7071067811865476, y: t.y - s * 0.7071067811865476 };
}, O3 = (t) => (n) => {
  const e = ja(t.x + t.w)(n.x + n.w) - Mr(t.x)(n.x), r = ja(t.y + t.h)(n.y + n.h) - Mr(t.y)(n.y);
  return t.x < n.x + n.w && t.x + t.w > n.x && t.y < n.y + n.h && t.y + t.h > n.y ? e * r : 0;
}, Jg = (t) => (n) => (e) => (r) => {
  const o = t + 4, i = Mr(0)(n - 8), s = o + i - e;
  return e <= i ? Q3(o)(s)(r) : t + (n - e) / 2;
}, bg = (t) => (n) => ({ ...n, x: Jg(t.x)(t.w)(n.w)(n.x), y: Jg(t.y)(t.h)(n.h)(n.y) }), X3 = (t) => {
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
}, Y3 = (t) => (n) => (e) => (r) => (o) => {
  const i = o.y + o.h / 2 - e.token.y, s = o.y - r.y;
  return (() => {
    const u = o.x + o.w / 2 - e.token.x, c = o.x - r.x;
    return 1e6 * q3(t)(o) + 1e4 * w((a) => (l) => a + O3(o)(l))(0)(n) + 0.05 * (c * c + s * s) + 0.01 * (u * u + i * i);
  })() + (o.y > e.token.y ? 100 : 0);
}, U3 = (t) => (n) => (e) => (r) => {
  const o = (s) => {
    const u = bg(t)(s);
    return { rect: u, score: Y3(t)(n)(e)(r)(u) };
  }, i = Dt((s) => x, (s) => (u) => J("Just", { head: s, tail: u }), [r, e.rect, ...X3(e)]);
  if (i.tag === "Nothing")
    return bg(t)(r);
  if (i.tag === "Just")
    return w((s) => (u) => {
      const c = o(u);
      return c.score < s.score ? c : s;
    })(o(i._1.head))(i._1.tail).rect;
  f();
}, V3 = (t) => (n) => (e) => w((r) => (o) => {
  const i = W3(o.rect)(r.obstacles), s = i.x >= t.x + 4 && i.y >= t.y + 4 && i.x + i.w <= t.x + t.w - 4 && i.y + i.h <= t.y + t.h - 4 ? i : U3(t)(r.obstacles)(o)(i);
  return { acc: K(F)(o.id)(s)(r.acc), obstacles: Et(r.obstacles)(s) };
})({ acc: B, obstacles: n })(e).acc, T0 = (t) => t, Sr = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ko = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, M3 = /* @__PURE__ */ wi(gf)(Xt), K3 = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, j3 = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, kg = /* @__PURE__ */ T0("SegMove"), Z3 = /* @__PURE__ */ T0("SegLine"), tb = /* @__PURE__ */ T0("SegQuad"), Lg = { offset: 0.4, passes: 1, rMax: 1.5 }, Z_ = (t) => ln(Fe(t.x * 7919 + t.y * 3001 + t.w * 113 + t.h * 17 + 1)) * -1640531535 | 0, Hu = (t) => (n) => (e) => () => {
  t.push(3), t.push(n.x), t.push(n.y), t.push(e.x), t.push(e.y);
}, Cc = (t) => (n) => () => {
  t.push(1), t.push(n.x), t.push(n.y);
}, Pr = (t) => (n) => () => {
  t.push(2), t.push(n.x), t.push(n.y);
}, hs = /* @__PURE__ */ (() => {
  const t = w((n) => (e) => ((n * 31 | 0) + ln(Fe(e.x * 100)) | 0) + ln(Fe(e.y * 100)) | 0)(1);
  return (n) => t(n) * -1640531535 | 0;
})(), nb = (t) => {
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
        n.push({ kind: kg, m: i, c: i, p: u, len: 0 }), r = u, e = o + 3 | 0;
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
        n.push({ kind: Z3, m: i, c: i, p: u, len: Un(c * c + a * a) }), r = u, e = o + 3 | 0;
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
          kind: tb,
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
          len: Un(c * c + a * a) * 1.05
        }), r = u, e = o + 5 | 0;
        continue;
      }
      if (s._1 === 5) {
        n.push({ kind: kg, m: i, c: i, p: i, len: 0 }), e = o + 1 | 0;
        continue;
      }
      e = t.length;
      continue;
    }
    f();
  }
  return n;
}, eb = (t) => (n) => {
  const e = n.length - 1 | 0, r = e < 1 ? [] : Ct(0, e, n), o = (() => {
    const s = r.length - 1 | 0;
    return s >= 0 && s < r.length ? J("Just", r[s]) : x;
  })(), i = n.length - 1 | 0;
  if (i >= 0 && i < n.length && o.tag === "Just") {
    const s = n[i].y - o._1.y, u = n[i].x - o._1.x, c = Un(u * u + s * s);
    return c <= 1e-4 ? n : Et((() => {
      const a = n.length - 1 | 0;
      return a < 1 ? [] : Ct(0, a, n);
    })())({ x: n[i].x + u / c * t, y: n[i].y + s / c * t });
  }
  return n;
}, rb = (t) => (n) => (e) => pn(w((r) => (o) => {
  const i = An(0)(t)(r.prng), s = An(0)(6.283185307179586)(i.prng);
  return { prng: s.prng, out: [{ x: o.x + i.value * ne(s.value), y: o.y + i.value * le(s.value) }, ...r.out] };
})({ prng: n, out: [] })(e).out), ob = (t) => (n) => (e) => {
  if (n.kind === "SegMove")
    return Cc(t)(n.p);
  if (n.kind === "SegLine")
    return Pr(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  if (n.kind === "SegQuad")
    return Pr(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  f();
}, ib = (t) => (n) => {
  if (n.kind === "SegMove")
    return Cc(t)(n.p);
  if (n.kind === "SegLine")
    return Pr(t)(n.p);
  if (n.kind === "SegQuad")
    return Hu(t)(n.c)(n.p);
  f();
}, th = (t) => (n) => {
  const e = nb(n), r = w((u) => (c) => u + c.len)(0)(e) * Sr(0)(ko(1)(t)), o = [];
  let i = 0, s = 0;
  for (; s < e.length; ) {
    const u = s, c = i;
    if (u >= 0 && u < e.length) {
      if (c + e[u].len <= r) {
        const a = e[u];
        ib(o)(a)(), i = c + a.len, s = u + 1 | 0;
        continue;
      }
      if (c >= r) {
        s = e.length;
        continue;
      }
      ob(o)(e[u])((r - c) / Sr(e[u].len)(1e-4))();
    }
    s = e.length;
  }
  return o;
}, Sg = { offset: 1.5, passes: 2, rMax: 14, overshoot: 2.5 }, nh = (t) => (n) => (e) => (r) => {
  const o = r.y - e.y, i = e.y - n.y, s = r.x - e.x, u = Un(s * s + o * o), c = e.x - n.x, a = Un(c * c + i * i), l = ko(t.rMax * (Lm(a > 0 && u > 0 ? Sr(-1)(ko(1)((c * s + i * o) / (a * u))) : 1) / 3.141592653589793))(0.4 * ko(a)(u));
  return { inP: a > 0 ? { x: e.x - c / a * l, y: e.y - i / a * l } : e, curr: e, outP: u > 0 ? { x: e.x + s / u * l, y: e.y + o / u * l } : e };
}, eh = (t) => (n) => {
  const e = n.length, r = [], o = 0 < n.length ? J("Just", n[0]) : x;
  if (o.tag === "Just" ? Cc(r)(o._1)() : o.tag === "Nothing" || f(), e >= 3) {
    let s = 1;
    for (; s <= (e - 2 | 0); ) {
      const u = s, c = u + 1 | 0;
      if (c >= 0 && c < n.length) {
        if (u >= 0 && u < n.length) {
          const a = u - 1 | 0;
          if (a >= 0 && a < n.length) {
            const l = nh(t)(n[a])(n[u])(n[c]);
            Pr(r)(l.inP)(), Hu(r)(l.curr)(l.outP)();
          }
        }
        s = u + 1 | 0;
        continue;
      }
      s = u + 1 | 0;
    }
  }
  const i = n.length - 1 | 0;
  return i >= 0 && i < n.length && e >= 2 && Pr(r)(n[i])(), r;
}, sb = (t) => (n) => (e) => (r) => (o) => {
  if (o.length < 4)
    return eh(t)(o);
  const i = 0 < o.length ? J("Just", o[0]) : x, s = (() => {
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = o.length - 1 | 0, c = Gr(Gr(n)(u) + u | 0)(u), a = (g) => {
    const h = Gr(g + u | 0)(u);
    return h >= 0 && h < o.length ? o[h] : s;
  }, l = D((g) => nh(t)(a((c + g | 0) - 1 | 0))(a(c + g | 0))(a((c + g | 0) + 1 | 0)))(Ut(
    0,
    u - 1 | 0
  )), d = [], _ = 0 < l.length ? J("Just", l[0]) : x;
  if (_.tag === "Just")
    if (Cc(d)(_._1.outP)(), M3((() => {
      const g = Dt((h) => x, (h) => (m) => J("Just", m), l);
      if (g.tag === "Nothing")
        return [];
      if (g.tag === "Just")
        return g._1;
      f();
    })())((g) => {
      const h = Pr(d)(g.inP);
      return () => (h(), Hu(d)(g.curr)(g.outP)());
    })(), e)
      Pr(d)(_._1.inP)(), Hu(d)(_._1.curr)(_._1.outP)(), d.push(5);
    else {
      const g = l.length - 1 | 0;
      g >= 0 && g < l.length ? Pr(d)((() => {
        const h = 1 - r;
        return { x: l[g].outP.x + (_._1.inP.x - l[g].outP.x) * h, y: l[g].outP.y + (_._1.inP.y - l[g].outP.y) * h };
      })())() : Pr(d)(_._1.inP)();
    }
  else _.tag === "Nothing" || f();
  return d;
}, ii = (t) => (n) => (e) => (r) => {
  const o = K3(1)(r.length - 1 | 0), i = An(0)(U(o))(Ua("shape")(n)), s = j3(o - 1 | 0)(ln(Fe(i.value))), u = i.prng;
  return D((c) => {
    const a = An(0)(1)(Ua(rn(c))(u)), l = An(-0.18)(0.3)(a.prng), d = a.value < 0.7, _ = An(0.5)(0.85)(l.prng), g = rb(t.offset)(_.prng)(r);
    return { path: e ? sb(t)(s)(d)(l.value)(g) : eh(t)(g), alpha: _.value };
  })(Ut(0, t.passes - 1 | 0));
}, ub = (t) => (n) => (e) => ii(t)(n)(!0)([
  { x: e.x, y: e.y },
  { x: e.x + e.w, y: e.y },
  { x: e.x + e.w, y: e.y + e.h },
  { x: e.x, y: e.y + e.h },
  { x: e.x, y: e.y }
]), cb = (t) => (n) => (e) => {
  const r = Sr(0)(ko(1)(e)), o = n.h / U(4), i = Sr(6)(o * 1.4);
  return xt((s) => s)(D((s) => {
    if (r < Sr(0)(U(s) / U(4) - 0.05))
      return x;
    const u = Ua(rn(s))(t), c = Sr(0)(U(s) / U(4) - 0.05), a = Gr(s)(2) === 0, l = a ? n.x - 2 : n.x + n.w + 2, d = a ? n.x + n.w + 2 : n.x - 2, _ = n.y + (U(s) + 0.5) * o;
    return J(
      "Just",
      {
        path: th(Sr(0)(ko(1)((r - c) / Sr(1e-4)(ko(1)(U(s + 1 | 0) / U(4) + 0.05) - c))))((() => {
          const g = { rMax: 2, offset: 0.6, passes: 1 }, h = pn(w((p) => ($) => {
            const y = An(-o * 0.08)(o * 0.08)(p.prng);
            return { prng: y.prng, out: [{ x: l + (d - l) * (U($) / U(4)), y: _ + y.value }, ...p.out] };
          })({ prng: u, out: [] })(Ut(0, 4)).out), m = h.length < 2 ? [] : ii(g)(u)(!1)(h);
          return 0 < m.length ? m[0].path : [];
        })()),
        width: i,
        alpha: 1
      }
    );
  })(Ut(0, 3)));
}, pa = (t, n, e) => ({ tag: t, _1: n, _2: e }), rh = (t) => t, ma = (t, n, e) => ({ tag: t, _1: n, _2: e }), Du = (t) => (n) => (e) => {
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
}, Jn = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, ee = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Xe);
  return (n) => t(de("IterNode", n, Oe));
})(), $r = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, ab = Xt.foldMap(Wm), zu = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, fb = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, iu = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, oh = /* @__PURE__ */ mn(F)(Xt), ih = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, lb = /* @__PURE__ */ Bd(F), gb = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, J0 = /* @__PURE__ */ rh("LabelsShown"), db = /* @__PURE__ */ rh("LabelsHidden"), sh = (t) => {
  const n = t.Monad0().Bind1(), e = t.popTransform, r = t.popAlpha;
  return (o) => (i) => (s) => (u) => (c) => n.bind(t.pushAlpha(o.fadeAlpha))(() => n.bind(t.pushTransform({
    tx: i * (1 - o.popScale),
    ty: s * (1 - o.popScale),
    sx: o.popScale,
    sy: o.popScale
  }))(() => n.bind(t.pushTransform({ tx: 0, ty: u.y * (1 - o.flipY), sx: 1, sy: o.flipY }))(() => n.bind(c)(() => n.bind(e)(() => n.bind(e)(() => r))))));
}, Se = (t) => {
  const n = t.Apply0();
  return (e) => w((r) => (o) => n.apply(n.Functor0().map((i) => cf)(r))(e(o)))(t.pure());
}, uh = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = mi(o)(i)(r), a = 0 < t.length ? J("Just", t[0]) : x, l = (() => {
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
  })(), h = mg(128)(Ro(4)($i(2)(n)))(wg(l)(6)), m = l.x - u.x, p = 2 * (() => {
    const H = l.y - u.y;
    return (m < 0 ? -m : m) + (H < 0 ? -H : H);
  })(), $ = g.x - s.x, y = 2 * (() => {
    const H = g.y - s.y;
    return ($ < 0 ? -$ : $) + (H < 0 ? -H : H);
  })(), v = p + gc(t) + y, N = v <= 1e-4 ? 1 : 1 - y / v, T = v <= 1e-4 ? 0 : p / v, b = N - T, L = mg(128)(wg(g)(6))(Ro(4)($i(2)(e))), E = { maxDelay: 0.4, smoothPasses: 2 }, C = Zi(t)(Du(0)(1)(b <= 1e-4 ? 0 : (c - T) / b)), I = (() => {
    if (C.tag === "Just")
      return C._1;
    if (C.tag === "Nothing")
      return l;
    f();
  })(), z = (() => {
    if (N >= 1)
      return 0;
    const H = (c - N) / (1 - N), M = H < 0 ? 0 : H > 1 ? 1 : H;
    return M * M * (3 - 2 * M);
  })(), G = (() => {
    if (T <= 1e-4)
      return 1;
    const H = c / T, M = H < 0 ? 0 : H > 1 ? 1 : H;
    return M * M * (3 - 2 * M);
  })();
  return c < T ? ma("PolyShape", yg(G)(h.from)(h.to)(E)) : c >= N ? ma("PolyShape", yg(z)(L.from)(L.to)(E)) : ma("CircleShape", I, 6);
}, b0 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = uh(t)(n)(e)(r)(o)(i);
  if (s.tag === "PolyShape")
    return j_(s._1);
  if (s.tag === "CircleShape")
    return s._1;
  f();
}, k0 = /* @__PURE__ */ (() => {
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
        chipText: Tr,
        nodeFill: vn,
        nodeStroke: Tr,
        text: Tr,
        edge: Tr,
        arrowFill: Tr,
        tokenOutsideFill: Tr,
        tokenOutsideStroke: vn,
        tokenInside: vn,
        tokenInsideStroke: vn,
        tokenInsideBlend: ru,
        tokenInsideAlpha: 1,
        chipPillFill: Tr,
        chipPillText: vn,
        chipHairline: { r: 26, g: 26, b: 26, a: 90 },
        trailDot: Tr,
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
        nodeFill: Tr,
        nodeStroke: n,
        text: n,
        edge: n,
        arrowFill: n,
        tokenOutsideFill: vn,
        tokenOutsideStroke: vn,
        tokenInside: vn,
        tokenInsideStroke: vn,
        tokenInsideBlend: ru,
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
        shadowDot: vn,
        chip: vn,
        chipShadow: { r: 0, g: 0, b: 0, a: 120 },
        chipText: o,
        nodeFill: o,
        nodeStroke: vn,
        text: vn,
        edge: vn,
        arrowFill: vn,
        tokenOutsideFill: vn,
        tokenOutsideStroke: vn,
        tokenInside: vn,
        tokenInsideStroke: vn,
        tokenInsideBlend: gg,
        tokenInsideAlpha: 0.35,
        chipPillFill: vn,
        chipPillText: o,
        chipHairline: { r: 255, g: 255, b: 255, a: 120 },
        trailDot: vn,
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
        tokenInsideBlend: gg,
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
        tokenOutsideStroke: vn,
        tokenInside: vn,
        tokenInsideStroke: vn,
        tokenInsideBlend: ru,
        tokenInsideAlpha: 1,
        chipPillFill: s,
        chipPillText: vn,
        chipHairline: { r: 60, g: 66, b: 78, a: 90 },
        trailDot: s,
        wobble: !1,
        fontFamily: "Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    f();
  };
})(), Za = (t) => (n) => vt(ee(t.nodes))((e) => {
  const r = Jn(e._1)(n.nodes);
  return r.tag === "Just" && Lc(r._1).alpha > 0 ? L3(e._2) : [];
}), _b = (t) => (n) => (e) => [
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
  ...Za(n)(e)
], hb = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = io.traverse(r);
  return (i) => (s) => {
    const u = vr(s), c = 0.32 * i.size;
    return o((a) => e.bind(a === 0 ? r.pure(0) : t.measureText(i)(In(a)(s)))((l) => e.bind(t.measureText(i)(In(a + 1 | 0)(s)))((d) => e.bind(t.measureInk(i)(a >= 0 && a < u.length ? Ji(u[a]) : " "))((_) => r.pure({ x: l, w: d - l, up: _.ascent - c, down: _.descent + c })))))(Ut(
      0,
      u.length - 1 | 0
    ));
  };
}, pb = (t) => (n) => {
  const e = (o) => (o.x - n.x) * (o.x - n.x) + (o.y - n.y) * (o.y - n.y), r = w((o) => (i) => e(i) < e(o) ? i : o)({ x: t.x, y: t.y })([{ x: t.x, y: t.y }, { x: t.x + t.w, y: t.y }, { x: t.x, y: t.y + t.h }, { x: t.x + t.w, y: t.y + t.h }]);
  return D((o) => {
    const i = U(o) / 5;
    return { x: r.x + (n.x - r.x) * i, y: r.y + (n.y - r.y) * i };
  })([1, 2, 3, 4]);
}, L0 = (t) => {
  const n = Ns(`
`)(t);
  return n.length === 0 ? [""] : n;
}, mb = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, c = mi(o)(i)(r), a = 0 < t.length ? J("Just", t[0]) : x, l = (() => {
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
  })(), h = l.x - u.x, m = 2 * (() => {
    const E = l.y - u.y;
    return (h < 0 ? -h : h) + (E < 0 ? -E : E);
  })(), p = g.x - s.x, $ = 2 * (() => {
    const E = g.y - s.y;
    return (p < 0 ? -p : p) + (E < 0 ? -E : E);
  })(), y = m + gc(t) + $, v = y <= 1e-4 ? 1 : 1 - $ / y, N = y <= 1e-4 ? 0 : m / y, T = v - N, b = Zi(t)(Du(0)(1)(T <= 1e-4 ? 0 : (c - N) / T)), L = (() => {
    if (b.tag === "Just")
      return b._1;
    if (b.tag === "Nothing")
      return l;
    f();
  })();
  return c < N ? pa("InsideRect", $i(2)(n)) : c >= v ? pa("InsideRect", $i(2)(e)) : pa("InsideBall", L, 6);
}, $b = { offset: 0.8, passes: 2, rMax: 5 }, yb = (t) => {
  const n = t.Monad0().Applicative0(), e = Se(n);
  return (r) => (o) => (i) => (s) => {
    const u = { color: s, width: 1, lineJoin: Dn, lineCap: pe }, c = { color: i, flat: !0 }, a = (l) => t.drawRoundedRect({ x: l.x, y: l.y, w: l.w, h: l.h })(4)(J("Just", c))(J("Just", u));
    return e((l) => {
      if (l._2.tag === "Travelling") {
        const d = $r(l._2._1.edge)(r.edges), _ = Jn(l._2._1.target)(r.nodes), g = Jn(l._2._1.source)(r.nodes);
        if (g.tag === "Just" && _.tag === "Just" && d.tag === "Just") {
          const h = mb((() => {
            if (l._2._1.direction === "Forward")
              return d._1;
            if (l._2._1.direction === "Backward")
              return pn(d._1);
            f();
          })())(g._1)(_._1)(l._2._1.progress)(l._2._1.holdPre)(l._2._1.holdPost);
          if (h.tag === "InsideRect")
            return a(h._1);
          if (h.tag === "InsideBall")
            return t.fillStrokePath(Sc(h._1)(h._2))(c)(u);
          f();
        }
        return n.pure();
      }
      if (l._2.tag === "Filling") {
        const d = Jn(l._2._1.node)(r.nodes);
        if (d.tag === "Just")
          return a($i(2)(d._1));
        if (d.tag === "Nothing")
          return n.pure();
        f();
      }
      return n.pure();
    })(ee(o.tokens));
  };
}, Cg = (t) => (n) => (e) => (r) => t.strokePath((() => {
  const o = Dt(
    (i) => x,
    (i) => (s) => J("Just", { head: i, tail: s }),
    D((i) => i.pt)(wm(
      (i) => (s) => {
        const u = U(s) / U(72), c = An(-0.18)(0.18)(i.prng), a = An(-0.1)(0.1)(c.prng), l = An(-0.07)(0.07)(a.prng), d = e * (0.05 + 0.55 * u) * (1 + a.value), _ = u * 28.274333882308138 + c.value;
        return { prng: l.prng, pt: { x: n.x + ne(_) * d + l.value * e, y: n.y + le(_) * d + l.value * e } };
      },
      { prng: 137, pt: { x: n.x, y: n.y } },
      Ut(0, 72)
    ))
  );
  if (o.tag === "Just")
    return [1, o._1.head.x, o._1.head.y, ...ab((i) => [2, i.x, i.y])(o._1.tail)];
  if (o.tag === "Nothing")
    return [];
  f();
})())({ color: r, width: 5.5, lineJoin: Dn, lineCap: Me }), vb = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = Se(n.Applicative0());
  return (i) => (s) => (u) => o((c) => e.bind(t.pushAlpha(c.alpha))(() => e.bind(t.strokePath(c.path)({
    color: i.nodeFill,
    width: c.width,
    lineJoin: Dn,
    lineCap: Me
  }))(() => r)))(cb(Z_(s) + 7777 | 0)(s)(u));
}, ch = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = n.Applicative0(), i = Se(o), s = t.popClip, u = Se(o), c = io.traverse(o), a = hb(t), l = vb(t), d = t.popTransform;
  return (_) => (g) => (h) => (m) => (p) => ($) => (y) => (v) => (N) => {
    const T = (P) => e.bind(t.pushAlpha(P.alpha))(() => e.bind(t.strokePath(P.path)({
      color: h.nodeStroke,
      width: 2,
      lineJoin: Dn,
      lineCap: Me
    }))(() => r)), b = { family: h.fontFamily, size: h.wobble ? 15 : 11, weight: h.wobble ? 800 : 500 }, L = Ns(`
`)(v.label === "" ? y : v.label), E = L.length === 0 ? [""] : L, C = b.size * 1.2, I = v.shape === "Cylinder" ? t.strokePath(VJ({ x: v.x, y: v.y, w: v.w, h: v.h }))({
      color: h.nodeStroke,
      width: 1.25,
      lineJoin: Dn,
      lineCap: pe
    }) : o.pure(), z = (v.shape === "Cylinder" ? (v.y + (v.y + v.h + 5 - 2 * Ge(v.h * 0.075)(v.w * 0.075))) / 2 : (v.y + v.y + v.h) / 2) - U(E.length) * C / 2 + C / 2, G = N.tag === "PloppingOut" && h.wobble ? N._1 : -1, H = G >= 0, M = Lc(N), Z = H ? { alpha: 1, scale: 1 } : M, Y = v.x + v.w / 2, q = v.y + v.h / 2, A = e.bind(t.pushAlpha(Z.alpha * m))(() => e.bind(t.pushTransform({
      tx: Y * (1 - Z.scale),
      ty: q * (1 - Z.scale),
      sx: Z.scale,
      sy: Z.scale
    }))(() => {
      const P = { x: v.x, y: v.y, w: v.w, h: v.h }, W = {
        color: h.nodeStroke,
        width: h.wobble ? 2 : 1.25 * g,
        lineJoin: Dn,
        lineCap: h.wobble ? Me : pe
      };
      return e.bind((() => {
        if (h.wobble) {
          if (v.shape === "Rectangle")
            return i(T)(ub(Sg)(Z_(P))(P));
          const R = Ro(7)(v);
          return e.bind(i(T)((() => {
            const Q = hs(R);
            return R.length < 4 ? [] : ii(Lg)(Q)(!0)(R);
          })()))(() => u((Q) => i(T)((() => {
            const X = hs(Q);
            return Q.length < 2 ? [] : ii(Lg)(X)(!1)(Q);
          })()))(v.shape === "Cylinder" ? [I3(v)] : []));
        }
        return e.bind(v0(t)(v.shape)(P)(7)(J("Just", { color: h.nodeFill, flat: !1 }))(J(
          "Just",
          W
        )))(() => I);
      })())(() => e.bind((() => {
        if ($.tag === "Just" && h.wobble && !H) {
          const R = $._1;
          return e.bind(c(a(b))(E))((Q) => {
            const X = Ht((it) => (at) => ot.compare(it.x)(at.x)), tt = ln(Fe(v.x * 7919 + v.y * 3001)) * -1640531535 | 0, V = An(5)(7.5)(tt), O = An(0)(V.value)(V.prng), j = -(1 + 2 * An(-1)(1)(O.prng).value * 3.141592653589793 / 180), rt = (it, at, Tt, wt, Ft) => X(xt((Vt) => Vt)([
              j * at + it >= wt && j * at + it <= Ft ? J("Just", { x: at, y: j * at + it }) : x,
              j * Tt + it >= wt && j * Tt + it <= Ft ? J("Just", { x: Tt, y: j * Tt + it }) : x,
              (() => {
                const Vt = (wt - it) / j;
                return Vt >= at && Vt <= Tt ? J("Just", { x: Vt, y: wt }) : x;
              })(),
              (() => {
                const Vt = (Ft - it) / j;
                return Vt >= at && Vt <= Tt ? J("Just", { x: Vt, y: Ft }) : x;
              })()
            ])), et = V.value, ft = Gr(R.frameHash)(3), ct = ft === 0 ? { r: 200, g: 35, b: 30, a: 220 } : ft === 1 ? { r: 35, g: 150, b: 80, a: 220 } : { r: 30, g: 80, b: 200, a: 220 }, dt = v.x + v.w / 2, Bt = ve(qt((it) => (at) => qt((() => {
              const Tt = z + U(it) * C, wt = dt - w((Ft) => (Vt) => Ft + Vt.w)(0)(at) / 2;
              return (Ft) => (Vt) => {
                const se = b.size * 0.1, zn = Ft - 1 | 0, Qn = zn >= 0 && zn < at.length && Ft > 0 ? (at[zn].x + at[zn].w + Vt.x) / 2 : Vt.x - se;
                return {
                  x: wt + Qn - 1,
                  y: Tt - Vt.up - 1,
                  w: zu(0)((() => {
                    const It = Ft + 1 | 0;
                    return It >= 0 && It < at.length && Ft < (at.length - 1 | 0) ? (Vt.x + Vt.w + at[It].x) / 2 - Qn : Vt.x + Vt.w + se - Qn;
                  })()) + 2,
                  h: Vt.up + Vt.down + 2
                };
              };
            })())(at))(Q)), St = v.y + 4, en = v.x + v.w - 4, _t = v.x + 4, bt = St - j * _t + O.value, ht = v.y + v.h - 4, $t = vt(vt(qt((it) => (at) => {
              const Tt = (at.from.x + at.to.x) / 2, wt = (at.from.y + at.to.y) / 2, Ft = An(-1)(1)(tt + (911 * (it + 1 | 0) | 0) | 0), Vt = An(-3)(5)(Ft.prng), se = Ft.value * 3.141592653589793 / 180, zn = ne(se), Qn = le(se), It = (Pt) => ({ x: Tt + (Pt.x - Tt) * zn - (Pt.y - wt) * Qn, y: wt + (Pt.x - Tt) * Qn + (Pt.y - wt) * zn });
              return {
                from: (() => {
                  const Pt = It(at.from), ue = Pt.y - wt, qn = Pt.x - Tt, Wn = Un(qn * qn + ue * ue), Sn = Wn < 1e-4 ? 1 : (Wn + Vt.value) / Wn;
                  return { x: Tt + qn * Sn, y: wt + ue * Sn };
                })(),
                to: (() => {
                  const Pt = It(at.to), ue = An(-3)(5)(Vt.prng).value, qn = Pt.y - wt, Wn = Pt.x - Tt, Sn = Un(Wn * Wn + qn * qn), Ye = Sn < 1e-4 ? 1 : (Sn + ue) / Sn;
                  return { x: Tt + Wn * Ye, y: wt + qn * Ye };
                })()
              };
            })(xt((it) => {
              const at = rt(bt + U(it) * et, _t, en, St, ht);
              return at.length === 2 ? J("Just", { from: at[0], to: at[1] }) : x;
            })(Ut(0, iu(1)(ln(Fe((ht - j * en - bt) / et)))))))((it) => lt(
              (at) => at.to.x - at.from.x > 1,
              w((at) => (Tt) => vt(at)((wt) => {
                const Ft = rt(wt.from.y - j * wt.from.x, Tt.x, Tt.x + Tt.w, Tt.y, Tt.y + Tt.h);
                return Ft.length === 2 ? Ft[0].x > wt.from.x + 1e-3 && Ft[1].x < wt.to.x - 1e-3 ? [{ from: wt.from, to: Ft[0] }, { from: Ft[1], to: wt.to }] : Ft[0].x <= wt.from.x + 1e-3 && Ft[1].x < wt.to.x - 1e-3 ? [{ from: Ft[1], to: wt.to }] : Ft[0].x > wt.from.x + 1e-3 && Ft[1].x >= wt.to.x - 1e-3 ? [{ from: wt.from, to: Ft[0] }] : [] : [wt];
              }))([it])(Bt)
            )))((it) => (() => {
              const at = it.to.x - it.from.x;
              return Un(2) * (at >= 0 ? at : -at) <= 28;
            })() ? [it] : [
              { from: it.from, to: { x: it.from.x + (it.to.x - it.from.x) * 0.495, y: it.from.y + (it.to.y - it.from.y) * 0.495 } },
              { from: { x: it.from.x + (it.to.x - it.from.x) * 0.505, y: it.from.y + (it.to.y - it.from.y) * 0.505 }, to: it.to }
            ]), st = $t.length, gt = (it) => zu(0)(fb(1)(R.t * U(st) - U(it)));
            return e.bind(t.pushClip(N0(Ro(7)(v)))(Iu))(() => e.bind(i((it) => {
              const at = it._1, Tt = An(1.4)(1.9)(tt + (1303 * (at + 1 | 0) | 0) | 0), wt = An(0.35)(0.8)(Tt.prng), Ft = i((Vt) => e.bind(t.pushAlpha(Vt.alpha * wt.value))(() => e.bind(t.strokePath(th(gt(at))(Vt.path))({
                color: ct,
                width: Tt.value,
                lineJoin: Dn,
                lineCap: Me
              }))(() => r)))(ii({ ...Sg, rMax: 0, offset: 0.5 })(tt + (53 * (at + 1 | 0) | 0) | 0)(!1)([it._2.from, it._2.to]));
              return gt(at) > 0 ? Ft : o.pure();
            })(qt(re)($t)))(() => s));
          });
        }
        return o.pure();
      })())(() => e.bind((() => {
        if (_ === "LabelsShown") {
          const R = e.bind(t.pushAlpha(p))(() => e.bind(i((Q) => t.drawText({
            x: v.x + v.w / 2,
            y: z + U(Q._1) * C,
            content: Q._2,
            font: b,
            color: h.text,
            align: uo,
            baseline: tr
          }))(qt(re)(E)))(() => r));
          return p > 0 ? R : o.pure();
        }
        if (_ === "LabelsHidden")
          return o.pure();
        f();
      })())(() => e.bind((() => {
        const R = l(h)(P)(G);
        return H ? R : o.pure();
      })())(() => e.bind(d)(() => r)))));
    }));
    return Z.alpha * m > 0 ? A : o.pure();
  };
}, ah = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = ch(t), i = t.popAlpha, s = Se(e);
  return (u) => (c) => (a) => {
    const l = { ...u, nodeFill: u.text, text: u.nodeFill, nodeStroke: u.nodeFill };
    return s((d) => {
      const _ = Jn(d._1)(a.nodes), g = Jn(d._1)(c.nodes), h = (() => {
        if (g.tag === "Just" && _.tag === "Just") {
          const m = _._1, p = g._1;
          return r.bind(t.pushAlpha(d._2))(() => r.bind(o(J0)(1)(l)(1)(1)(x)(d._1)(p)(m))(() => i));
        }
        return e.pure();
      })();
      return d._2 > 0 ? h : e.pure();
    })(ee(a.nodeInvert));
  };
}, xb = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = Se(e);
  return (i) => (s) => (u) => {
    const c = { family: i.fontFamily, size: 11, weight: 500 };
    return o((a) => {
      if (a._2 === "" || (() => {
        const _ = $r(a._1)(u.edges);
        return _.tag === "Nothing" || !(_.tag === "Just" && _._1.tag === "Extended");
      })())
        return e.pure();
      const l = $r(a._1)(s.edges), d = (() => {
        if (l.tag === "Just")
          return Zi(l._1)(0.5);
        if (l.tag === "Nothing")
          return x;
        f();
      })();
      if (d.tag === "Nothing")
        return e.pure();
      if (d.tag === "Just") {
        const _ = d._1;
        return r.bind(t.measureText(c)(a._2))((g) => {
          const h = g + 12;
          return r.bind(t.drawRoundedRect({ x: _.x - h / 2, y: _.y - 8.5, w: h, h: 17 })(3)(J(
            "Just",
            { color: i.chipPillFill, flat: !0 }
          ))(x))(() => t.drawText({
            x: _.x,
            y: _.y,
            content: a._2,
            font: c,
            color: i.chipPillText,
            align: uo,
            baseline: tr
          }));
        });
      }
      f();
    })(ee(s.edgeLabels));
  };
}, wb = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = t.popAlpha;
  return (i) => (s) => (u) => (c) => (a) => (l) => (d) => (_) => (g) => {
    const h = (() => {
      if (g > 1e-4 && d > 1 - g) {
        const p = (1 - d) / g;
        return p < 0 ? 0 : p > 1 ? 1 : p;
      }
      if (_ > 1e-4 && d < _) {
        const p = d / _;
        return p < 0 ? 0 : p > 1 ? 1 : p;
      }
      return 1;
    })(), m = uh(c)(a)(l)(d)(_)(g);
    if (m.tag === "CircleShape")
      return i ? Cg(t)(m._1)(m._2)({ r: 200, g: 35, b: 30, a: 220 }) : t.fillStrokePath(Sc(m._1)(m._2))({ color: s, flat: !0 })({
        color: u,
        width: 1,
        lineJoin: Dn,
        lineCap: pe
      });
    if (m.tag === "PolyShape" && i && m._1.length >= 3)
      return r.bind(t.pushAlpha(h))(() => r.bind(Cg(t)(j_(m._1))(6)({
        r: 200,
        g: 35,
        b: 30,
        a: 220
      }))(() => o));
    if (m.tag === "PolyShape")
      return i ? e.pure() : m._1.length >= 3 ? t.fillStrokePath(N0(m._1))({ color: s, flat: !0 })({
        color: u,
        width: 1,
        lineJoin: Dn,
        lineCap: pe
      }) : e.pure();
    f();
  };
}, Nb = (t) => {
  const n = t.Monad0().Bind1(), e = t.popAlpha;
  return (r) => (o) => (i) => (s) => (u) => (c) => (a) => {
    const l = mi(c)(a)(u), d = { x: i.x + i.w / 2, y: i.y + i.h / 2 }, _ = { x: s.x + s.w / 2, y: s.y + s.h / 2 }, g = (h, m) => n.bind(t.pushAlpha(m))(() => n.bind(t.fillStrokePath(Sc(h)(6))({
      color: r,
      flat: !0
    })({ color: o, width: 1, lineJoin: Dn, lineCap: pe }))(() => e));
    return l < 0.5 ? g(
      d,
      (() => {
        const h = l * 2;
        return 1 - (h < 0 ? 0 : h > 1 ? 1 : h) * (h < 0 ? 0 : h > 1 ? 1 : h) * (h < 0 ? 3 : h > 1 ? 1 : 3 - 2 * h);
      })()
    ) : g(
      _,
      (() => {
        const h = (l - 0.5) * 2;
        return (h < 0 ? 0 : h > 1 ? 1 : h) * (h < 0 ? 0 : h > 1 ? 1 : h) * (h < 0 ? 3 : h > 1 ? 1 : 3 - 2 * h);
      })()
    );
  };
}, Qu = (t) => {
  const n = wb(t), e = Nb(t), r = t.Monad0().Applicative0(), o = Se(r);
  return (i) => (s) => (u) => (c) => (a) => o((l) => {
    if (l._2.tag === "Travelling") {
      const d = Jn(l._2._1.target)(s.nodes), _ = Jn(l._2._1.source)(s.nodes);
      if (_.tag === "Just" && d.tag === "Just") {
        const g = $r(l._2._1.edge)(s.edges);
        if (g.tag === "Just")
          return n(i)(c)(a)((() => {
            if (l._2._1.direction === "Forward")
              return g._1;
            if (l._2._1.direction === "Backward")
              return pn(g._1);
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
      const d = Jn(l._2._1.node)(s.nodes);
      if (d.tag === "Just")
        return t.fillStrokePath(N0(Ro(4)($i(2)(d._1))))({
          color: c,
          flat: !0
        })({ color: a, width: 1, lineJoin: Dn, lineCap: pe });
      if (d.tag === "Nothing")
        return r.pure();
      f();
    }
    return r.pure();
  })(ee(u.tokens));
}, fh = (t) => {
  const n = Qu(t), e = t.Monad0(), r = e.Bind1(), o = Qu(t), i = yb(t), s = t.popClip, u = t.popBlend, c = t.popLayer, a = e.Applicative0(), l = Se(a), d = t.popAlpha;
  return (_) => (g) => (h) => (m) => {
    const p = g.wobble ? n(!0)(h)(m)(g.tokenInside)(g.tokenInsideStroke) : r.bind(t.insideTokenStyle(_))(($) => {
      if ($ === "GenieSilhouette")
        return o(!1)(h)(m)(g.tokenInside)(g.tokenInsideStroke);
      if ($ === "ConvexAbsorb")
        return i(h)(m)(g.tokenInside)(g.tokenInsideStroke);
      f();
    });
    if (g.tokenInsideBlend === "Difference")
      return r.bind(t.pushLayer(FJ))(() => r.bind(t.pushBlend(ru))(() => r.bind(t.pushClip(Za(h)(m))(Iu))(() => r.bind(p)(() => r.bind(s)(() => r.bind(u)(() => r.bind(c)(() => r.bind(t.pushLayer(GJ))(() => r.bind(l(($) => {
        const y = Jn($._1)(m.nodes);
        return y.tag === "Just" && Lc(y._1).alpha > 0 ? v0(t)($._2.shape)({ x: $._2.x, y: $._2.y, w: $._2.w, h: $._2.h })(7)(J(
          "Just",
          { color: vn, flat: !1 }
        ))(x) : a.pure();
      })(ee(h.nodes)))(() => c)))))))));
    if (g.tokenInsideBlend === "Normal")
      return r.bind(t.pushClip(Za(h)(m))(Iu))(() => r.bind(t.pushAlpha(g.tokenInsideAlpha))(() => r.bind(p)(() => r.bind(d)(() => s))));
    f();
  };
}, lh = (t) => {
  const n = t.Monad0().Bind1(), e = Qu(t), r = Qu(t), o = t.popClip, i = t.popLayer;
  return (s) => (u) => (c) => (a) => n.bind(t.pushLayer(RJ))(() => n.bind(t.pushClip(_b(u)(c)(a))(BJ))(() => n.bind(s.wobble ? e(!0)(c)(a)(s.tokenOutsideFill)(s.tokenOutsideStroke) : r(!1)(c)(a)(s.tokenOutsideFill)(s.tokenOutsideStroke))(() => n.bind(o)(() => i))));
}, Tb = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = Se(r);
  return (i) => (s) => (u) => (c) => (a) => (l) => {
    const d = $c(l).length, _ = U(d + 1 | 0), g = ($) => {
      const y = (u * _ - U($)) / 1.5, v = y < 0 ? 0 : y > 1 ? 1 : y;
      return v * v * (3 - 2 * v);
    }, m = (($) => {
      let y = $, v = !0, N;
      for (; v; ) {
        const T = y;
        if (T >= d) {
          v = !1, N = T;
          continue;
        }
        if (g(T) >= 1) {
          y = T + 1 | 0;
          continue;
        }
        v = !1, N = T;
      }
      return N;
    })(0), p = m >= d ? [] : ar(($) => g($) > 0)(Ut(m, d - 1 | 0)).init;
    return e.bind((() => {
      const $ = t.drawText({
        x: c,
        y: a,
        content: In(m)(l),
        font: i,
        color: s,
        align: ds,
        baseline: tr
      });
      return m > 0 ? $ : r.pure();
    })())(() => o(($) => e.bind(t.measureText(i)(In($)(l)))((y) => {
      const v = g($);
      return t.drawText({
        x: c + y,
        y: a - (1 - v) * 10,
        content: In(1)(di(je(In($)(l)))(l)),
        font: i,
        color: { ...s, a: ln(Fe(v * U(s.a))) },
        align: ds,
        baseline: tr
      });
    }))(p));
  };
}, Ec = (t) => (n) => (e) => (r) => {
  const o = D((h) => U(iu(1)($c(h).length)))(r), i = zu(1)(w(Eo)(0)(o)), s = mi(n)(e)(t), u = s * i, c = iu(1)(r.length), l = ((h) => (m) => (p) => {
    let $ = h, y = m, v = p, N = !0, T;
    for (; N; ) {
      const b = $, L = y, C = Dt((I) => x, (I) => (z) => J("Just", { head: I, tail: z }), v);
      if (C.tag === "Nothing") {
        N = !1, T = iu(0)(c - 1 | 0);
        continue;
      }
      if (C.tag === "Just") {
        if (L + C._1.head >= u) {
          N = !1, T = b;
          continue;
        }
        $ = b + 1 | 0, y = L + C._1.head, v = C._1.tail;
        continue;
      }
      f();
    }
    return T;
  })(0)(0)(o), d = w(Eo)(0)(l < 1 ? [] : Ct(0, l, o)), _ = d / i;
  if (l >= 0 && l < o.length) {
    const h = (d + o[l]) / i;
    return {
      line: l >= 0 && l < r.length ? r[l] : "",
      phaseInLabel: (() => {
        if (h <= _)
          return 1;
        const m = (s - _) / (h - _);
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
      const h = (s - _) / (g - _);
      return h < 0 ? 0 : h > 1 ? 1 : h;
    })()
  };
}, gh = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(Ec(r)(0)(0)(D(rc)(o)).line))((i) => {
    const s = i + 28;
    return n.Applicative0().pure({ x: e.x + e.w / 2 - s / 2, y: e.y - 25.2 - 14, w: s, h: 25.2 });
  });
}, Jb = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = gh(t), o = n.Applicative0(), i = io.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => oh(xt((a) => a)(c)))(i((c) => {
    if (c._2.tag === "Filling" && c._2._1.labels.length !== 0) {
      const a = Jn(c._2._1.node)(s.nodes);
      if (a.tag === "Just")
        return e.bind(r(a._1)(c._2._1.progress)(c._2._1.labels))((l) => o.pure(J("Just", k(c._1, l))));
      if (a.tag === "Nothing")
        return o.pure(x);
      f();
    }
    return o.pure(x);
  })(ee(u.tokens)));
}, bb = (t) => {
  const n = t.Monad0();
  return (e) => (r) => (o) => (i) => (s) => (u) => (c) => {
    const a = b0(e)(r)(o)(i)(s)(u);
    return n.Bind1().bind(t.measureText({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(Ec(i)(s)(u)(vt(c)(L0)).line))((l) => n.Applicative0().pure({
      x: a.x + 14 + l / 2 - l / 2 - 14,
      y: a.y - 6 - 8 - 6.6 - 6,
      w: l + 28,
      h: 25.2
    }));
  };
}, kb = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = bb(t), o = n.Applicative0(), i = io.traverse(o);
  return (s) => (u) => e.Apply0().Functor0().map((c) => oh(xt((a) => a)(c)))(i((c) => {
    if (c._2.tag === "Travelling" && c._2._1.labels.length !== 0) {
      const a = Jn(c._2._1.target)(s.nodes), l = Jn(c._2._1.source)(s.nodes), d = $r(c._2._1.edge)(s.edges);
      if (d.tag === "Just" && l.tag === "Just" && a.tag === "Just") {
        const _ = (() => {
          if (c._2._1.direction === "Forward")
            return d._1;
          if (c._2._1.direction === "Backward")
            return pn(d._1);
          f();
        })(), g = b0(_)(l._1)(a._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost);
        return e.bind(r(_)(l._1)(a._1)(c._2._1.progress)(c._2._1.holdPre)(c._2._1.holdPost)(c._2._1.labels))((h) => o.pure(J(
          "Just",
          k(c._1, { id: c._1, rect: h, token: g })
        )));
      }
    }
    return o.pure(x);
  })(ee(u.tokens)));
}, S0 = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = kb(t), o = Jb(t);
  return (i) => (s) => (u) => e.bind(r(s)(u))((c) => e.bind(o(s)(u))((a) => n.Applicative0().pure(V3({
    x: i.vx,
    y: i.vy,
    w: i.vw,
    h: i.vh
  })([
    ...xt((l) => {
      const d = Jn(l._1)(u.nodes);
      return d.tag === "Just" && Lc(d._1).alpha > 0 ? J("Just", { x: l._2.x, y: l._2.y, w: l._2.w, h: l._2.h }) : x;
    })(ee(s.nodes)),
    ...(() => {
      const l = (d, _) => {
        if (d.tag === "Leaf")
          return _;
        if (d.tag === "Node")
          return l(d._5, Zt("Cons", d._4, l(d._6, _)));
        f();
      };
      return Ot(gn.foldr, l(a, Qt));
    })()
  ])(xt((l) => ih(l)(c))((() => {
    const l = (d) => {
      if (d.tag === "Leaf")
        return B;
      if (d.tag === "Node")
        return nn("Node", d._1, d._2, d._3, void 0, l(d._5), l(d._6));
      f();
    };
    return Ht(F.compare)(Ot(xe.foldr, l(c)));
  })())))));
}, dh = (t) => (n) => (e) => {
  const r = ts(6)(0.55)(Du(0)(1)((1 - t) / 0.06)), o = t > 0.94, i = o && e > 1e-4, s = ts(6)(0.55)(Du(0)(1)(t / 0.06)), u = t < 0.06, c = u && n > 1e-4, a = o && e <= 1e-4;
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
}, Lb = (t) => {
  const n = sh(t), e = t.Monad0().Bind1();
  return (r) => (o) => (i) => (s) => (u) => {
    const c = Ec(i)(0)(0)(vt(s)(L0)), a = { x: u.x + u.w / 2, y: u.y + u.h / 2 }, l = [1, a.x, u.y + u.h, 2, o.x + o.w / 2, o.y];
    return n(dh(i)(0)(0))(u.x)(u.y + u.h)(a)(e.bind(t.drawRoundedRect({
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
      { color: r.chipHairline, width: 1, lineJoin: Dn, lineCap: pe }
    )))(() => e.bind(t.strokePath(l)({
      color: r.chipHairline,
      width: 1,
      lineJoin: Dn,
      lineCap: pe
    }))(() => t.drawText({
      x: a.x,
      y: a.y,
      content: c.line,
      font: { family: r.fontFamily, size: 11, weight: 500 },
      color: r.chipText,
      align: uo,
      baseline: tr
    })))));
  };
}, Sb = (t) => {
  const n = gh(t), e = Lb(t);
  return (r) => (o) => (i) => (s) => (u) => t.Monad0().Bind1().bind(n(i)(s)(u))((c) => e(r)(i)(s)(u)(c));
}, Cb = (t) => {
  const n = sh(t), e = t.Monad0(), r = e.Bind1(), o = Se(e.Applicative0()), i = Tb(t);
  return (s) => (u) => (c) => (a) => (l) => (d) => (_) => (g) => (h) => {
    const m = Ec(l)(d)(_)(vt(g)(L0)), p = m.line, $ = m.phaseInLabel / 0.45, y = $ < 0 ? 0 : $ > 1 ? 1 : $, v = h.w, N = h.y, T = h.x, b = T + 14, L = h.h, E = N + L / 2;
    return n(dh(l)(d)(_))(T)(N + L)({ x: T + v / 2, y: E })(r.bind(o((C) => t.fillPath(Sc(C)(1.5))({
      color: s.trailDot,
      flat: !0
    }))(pb(h)(b0(u)(c)(a)(l)(d)(_))))(() => r.bind(t.drawRoundedRect({ x: T, y: N, w: v, h: L })(3)(J(
      "Just",
      { color: s.chipPillFill, flat: !0 }
    ))(x))(() => i({ family: s.fontFamily, size: 11, weight: 500 })(s.chipPillText)(y)(b)(E)(p))));
  };
}, C0 = (t) => {
  const n = Cb(t), e = t.Monad0(), r = e.Applicative0(), o = Sb(t), i = e.Bind1(), s = Se(r), u = t.popLayer;
  return (c) => (a) => (l) => (d) => i.bind(t.pushLayer(IJ))(() => i.bind(s((_) => {
    if (_._2.tag === "Travelling") {
      if (_._2._1.labels.length !== 0) {
        const g = Jn(_._2._1.target)(a.nodes), h = Jn(_._2._1.source)(a.nodes), m = $r(_._2._1.edge)(a.edges), p = ih(_._1)(d);
        if (p.tag === "Just" && m.tag === "Just" && h.tag === "Just" && g.tag === "Just")
          return n(c)((() => {
            if (_._2._1.direction === "Forward")
              return m._1;
            if (_._2._1.direction === "Backward")
              return pn(m._1);
            f();
          })())(h._1)(g._1)(_._2._1.progress)(_._2._1.holdPre)(_._2._1.holdPost)(_._2._1.labels)(p._1);
      }
      return r.pure();
    }
    if (_._2.tag === "Filling" && _._2._1.labels.length !== 0) {
      const g = Jn(_._2._1.node)(a.nodes);
      if (g.tag === "Just")
        return o(c)(a)(g._1)(_._2._1.progress)(_._2._1.labels);
      if (g.tag === "Nothing")
        return r.pure();
      f();
    }
    return r.pure();
  })(ee(l.tokens)))(() => u));
}, _h = (t) => {
  const n = S0(t), e = C0(t);
  return (r) => (o) => (i) => (s) => t.Monad0().Bind1().bind(n(o)(i)(s))((u) => e(r)(i)(s)(u));
}, Eb = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => {
    const i = o.length - 1 | 0, s = i < 1 ? [] : Ct(0, i, o), u = s.length - 1 | 0, c = u >= 0 && u < s.length ? J("Just", s[u]) : x, a = o.length - 1 | 0, l = a >= 0 && a < o.length ? J("Just", o[a]) : x;
    if (l.tag === "Just" && c.tag === "Just") {
      const d = An(0.78)(1.18)(hs(o) + 19 | 0), _ = An(0.4)(0.62)(d.prng), g = r.wobble ? 8.75 * _.value : 4.375, h = An(0.4)(0.62)(_.prng), m = r.wobble ? 8.75 * h.value : 4.375, p = l._1.y - c._1.y, $ = l._1.x - c._1.x, y = Un($ * $ + p * p), v = p / y, N = -v, T = $ / y, b = l._1.x + T * 0.875, L = l._1.y + v * 0.875, E = r.wobble ? 8.75 * d.value : 8.75, C = b - T * E, I = L - v * E, z = C + N * g, G = I + T * g, H = [1, b, L, 2, C + N * 4.375, I + T * 4.375, 2, C - N * 4.375, I - T * 4.375, 5], M = C - N * m, Z = I - T * m, Y = { color: r.arrowFill, width: 2, lineJoin: Dn, lineCap: Me };
      return y <= 1e-4 ? e.pure() : r.wobble ? n.Bind1().bind(t.strokePath([1, z, G, 2, b, L])(Y))(() => t.strokePath([1, M, Z, 2, b, L])(Y)) : t.fillPath(H)({ color: r.arrowFill, flat: !0 });
    }
    return e.pure();
  };
}, Ab = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = Se(e), i = t.popAlpha, s = Eb(t);
  return (u) => (c) => (a) => (l) => {
    const d = E3(8)(a);
    if (l.hi <= l.lo)
      return e.pure();
    const _ = H3(d)(l.lo)(l.hi);
    if (_.length === 0)
      return e.pure();
    const g = { color: u.edge, width: u.wobble ? 2 : 0.9375, lineJoin: Dn, lineCap: Me }, h = u.wobble ? An(-10)(4)(hs(_)).value : 0, m = u.wobble ? eb(h)(_) : _;
    return r.bind(u.wobble ? o((p) => r.bind(t.pushAlpha(p.alpha))(() => r.bind(t.strokePath(p.path)(g))(() => i)))((() => {
      const p = hs(_);
      return m.length < 2 ? [] : ii($b)(p)(!1)(m);
    })()) : t.strokePath(k3(_))(g))(() => {
      const p = s(u)(m);
      return c && l.hi >= 0.999 ? p : e.pure();
    });
  };
}, hh = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = Ab(t), i = t.popAlpha, s = Se(e);
  return (u) => (c) => (a) => {
    const l = (d) => {
      const _ = un((g) => d.x >= g._2.x - 1 && d.x <= g._2.x + g._2.w + 1 && d.y >= g._2.y - 1 && d.y <= g._2.y + g._2.h + 1)(ee(c.nodes));
      return _.tag === "Just" ? J("Just", _._1._2) : x;
    };
    return s((d) => {
      const _ = $r(d._1)(a.edges);
      if (_.tag === "Just") {
        const g = _._1, h = $r(d._1)(a.edgeFadeAlpha), m = (() => {
          if (h.tag === "Nothing")
            return 1;
          if (h.tag === "Just")
            return h._1;
          f();
        })(), p = r.bind(t.pushAlpha(m))(() => r.bind(o(u)((() => {
          const $ = Io("conn:")(d._1);
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
                return pn(Tg(Ro(7)(v._1))(pn(d._2)));
            }
            return d._2;
          })(), y = $.length - 1 | 0;
          if (y >= 0 && y < $.length) {
            const v = l($[y]);
            if (v.tag === "Just")
              return Tg(Ro(7)(v._1))($);
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
        return m > 0 ? p : e.pure();
      }
      if (_.tag === "Nothing")
        return e.pure();
      f();
    })(ee(c.edges));
  };
}, Pb = (t) => (n) => {
  const e = (i) => {
    const s = Jn(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !he(
        (c) => 0 < c._2.length && c._2[0].x >= u.x && c._2[0].x <= u.x + u.w && c._2[0].y >= u.y && c._2[0].y <= u.y + u.h,
        ee(t.edges)
      );
    }
    f();
  }, r = w((i) => (s) => (i * 31 | 0) + fr(s) | 0)(5381)(vr(n.frameTitle)), o = (i) => {
    const s = Jn(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !he(
        (c) => {
          const a = c._2.length - 1 | 0;
          return a >= 0 && a < c._2.length && c._2[a].x >= u.x && c._2[a].x <= u.x + u.w && c._2[a].y >= u.y && c._2[a].y <= u.y + u.h;
        },
        ee(t.edges)
      );
    }
    f();
  };
  return w((i) => (s) => {
    const u = s._2;
    return lb((c) => {
      if (c.tag === "Nothing")
        return J("Just", u);
      if (c.tag === "Just")
        return J(
          "Just",
          { t: zu(c._1.t)(u.t), angle: u.t >= c._1.t ? u.angle : c._1.angle, bigCircle: c._1.bigCircle || u.bigCircle, frameHash: c._1.frameHash }
        );
      f();
    })(s._1)(i);
  })(B)(vt(ee(n.tokens))((i) => {
    if (i._2.tag === "Filling") {
      const s = i._2._1.node;
      return [
        k(
          s,
          {
            t: 1,
            angle: (() => {
              const u = xt((c) => (() => {
                const a = Jn(s)(t.nodes), l = c._2.length - 1 | 0;
                return l >= 0 && l < c._2.length && a.tag === "Just" && c._2[l].x >= a._1.x && c._2[l].x <= a._1.x + a._1.w && c._2[l].y >= a._1.y && c._2[l].y <= a._1.y + a._1.h;
              })() ? J("Just", c._2) : x)(ee(t.edges));
              if (0 < u.length) {
                const c = u[0].length - 1 | 0, a = c < 1 ? [] : Ct(0, c, u[0]), l = a.length - 1 | 0;
                if (l >= 0 && l < a.length) {
                  const d = u[0].length - 1 | 0;
                  return d >= 0 && d < u[0].length ? wo(u[0][d].y - a[l].y)(u[0][d].x - a[l].x) : 0;
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
                const s = $r(i._2._1.edge)(t.edges);
                if (s.tag === "Just") {
                  const u = s._1.length - 1 | 0, c = u < 1 ? [] : Ct(0, u, s._1), a = c.length - 1 | 0;
                  if (a >= 0 && a < c.length) {
                    const l = s._1.length - 1 | 0;
                    return l >= 0 && l < s._1.length ? wo(s._1[l].y - c[a].y)(s._1[l].x - c[a].x) : 0;
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
                const s = $r(i._2._1.edge)(t.edges);
                if (s.tag === "Just")
                  return 1 < s._1.length && 0 < s._1.length ? wo(s._1[1].y - s._1[0].y)(s._1[1].x - s._1[0].x) : 0;
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
}, Rb = (t) => w((n) => (e) => (n * 31 | 0) + fr(e) | 0)(5381)(vr(t.frameTitle)), ph = (t) => {
  const n = ch(t), e = t.Monad0().Applicative0(), r = Se(e);
  return (o) => (i) => (s) => (u) => (c) => {
    const a = Rb(c), l = Pb(u)(c);
    return r((d) => {
      const _ = Jn(d._1)(c.nodes);
      if (_.tag === "Just")
        return n(o)(i)(s)((() => {
          const g = Jn(d._1)(c.nodeFadeAlpha);
          if (g.tag === "Nothing")
            return 1;
          if (g.tag === "Just")
            return g._1;
          f();
        })())((() => {
          const g = Jn(d._1)(c.nodeLabelFadeAlpha);
          if (g.tag === "Nothing")
            return 1;
          if (g.tag === "Just")
            return g._1;
          f();
        })())((() => {
          const g = Jn(d._1)(l);
          return g.tag === "Just" ? J("Just", g._1) : g.tag === "Nothing" && gb(d._1)(c.visited) ? J("Just", { t: 1, angle: 0, bigCircle: !1, frameHash: a }) : x;
        })())(d._1)(d._2)(_._1);
      if (_.tag === "Nothing")
        return e.pure();
      f();
    })(ee(u.nodes));
  };
}, Fb = (t) => (n) => (e) => {
  const r = nt.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = nt.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, Eg = (t) => (n) => (e) => {
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
}, Ag = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, tf = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Gb = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Ib = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Bb = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Xe);
  return (n) => t(de("IterNode", n, Oe));
})(), Hb = (t) => (n) => {
  const e = le(t.angle), r = ne(t.angle);
  return { a: r, b: e, c: 0, d: 1, e: -n * r, f: n * e - t.boxHeight / 2 };
}, Db = (t) => [t.box.ground.a, t.box.ground.b, t.box.ground.c, t.box.ground.d, t.box.top.a, t.box.top.b, t.box.top.c, t.box.top.d], si = (t) => (n) => {
  const e = (r) => Fb(0)(255)(ln(Pe(U(r) * t)));
  return { r: e(n.r), g: e(n.g), b: e(n.b), a: n.a };
}, Mn = (t) => (n) => (e) => (r) => ({ x: (n - e) * ne(t.angle), y: (n + e) * le(t.angle) - r }), Lo = (t) => {
  const n = Dt((e) => x, (e) => (r) => J("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...vt(n._1.tail)((e) => [2, e.x, e.y]), 5];
  f();
}, zb = (t) => (n) => (e) => (r) => (o) => {
  const i = (() => {
    if (t === "Forward")
      return o;
    if (t === "Backward")
      return pn(o);
    f();
  })();
  if (0 < i.length) {
    const u = Zi(i)(Eg(0)(1)(mi(e)(r)(n)));
    if (u.tag === "Nothing")
      return i[0];
    if (u.tag === "Just")
      return u._1;
    f();
  }
  const s = Zi(i)(Eg(0)(1)(mi(e)(r)(n)));
  if (s.tag === "Nothing")
    return { x: 0, y: 0 };
  if (s.tag === "Just")
    return s._1;
  f();
}, Qb = (t) => {
  const n = Dt((e) => x, (e) => (r) => J("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...vt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, qb = (t) => {
  const n = Dt((e) => x, (e) => (r) => J("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { vx: 0, vy: 0, vw: 0, vh: 0 };
  if (n.tag === "Just") {
    const e = w((r) => (o) => ({ minX: Ag(r.minX)(o.x), minY: Ag(r.minY)(o.y), maxX: tf(r.maxX)(o.x), maxY: tf(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { vx: e.minX - 40, vy: e.minY - 40, vw: e.maxX - e.minX + 80, vh: e.maxY - e.minY + 80 };
  }
  f();
}, Wb = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => {
    const i = o.box, s = o.np, u = { color: r.nodeStroke, width: 1, lineJoin: Dn, lineCap: pe };
    return n.bind(t.fillStrokePath(Lo([i.ground.d, i.ground.c, i.top.c, i.top.d]))({ color: si(0.66)(r.nodeFill), flat: !0 })(u))(() => n.bind(t.fillStrokePath(Lo([
      i.ground.b,
      i.ground.c,
      i.top.c,
      i.top.b
    ]))({ color: si(0.82)(r.nodeFill), flat: !0 })(u))(() => n.bind(t.fillStrokePath(Lo([i.top.a, i.top.b, i.top.c, i.top.d]))({
      color: si(1)(r.nodeFill),
      flat: !0
    })(u))(() => t.drawTextAffine(Hb(e)(s.y + s.h))({
      x: s.x + s.w / 2,
      y: 0,
      content: s.label,
      font: { family: r.fontFamily, size: 11, weight: 600 },
      color: r.text,
      align: uo,
      baseline: tr
    }))));
  };
}, Ob = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => (o) => (i) => {
    const s = { color: r.tokenOutsideStroke, width: 1, lineJoin: Dn, lineCap: pe }, u = i.x - 5.5, c = i.x + 5.5, a = i.y - 5.5, l = i.y + 5.5, d = o + 11, _ = Mn(e)(u)(a)(d), g = Mn(e)(c)(a)(d), h = Mn(e)(c)(l)(d), m = Mn(e)(u)(l)(d), p = Mn(e)(c)(l)(o), $ = Mn(e)(c)(a)(o);
    return n.bind(t.fillStrokePath(Lo([Mn(e)(u)(l)(o), p, h, m]))({ color: si(0.66)(r.tokenOutsideFill), flat: !0 })(s))(() => n.bind(t.fillStrokePath(Lo([
      $,
      p,
      h,
      g
    ]))({ color: si(0.82)(r.tokenOutsideFill), flat: !0 })(s))(() => t.fillStrokePath(Lo([_, g, h, m]))({
      color: si(1)(r.tokenOutsideFill),
      flat: !0
    })(s)));
  };
}, Xb = (t) => {
  const n = Ob(t);
  return (e) => (r) => (o) => (i) => {
    if (i.tag === "Travelling") {
      const s = Gb(i._1.edge)(o.edges);
      return s.tag === "Just" ? J(
        "Just",
        (() => {
          const u = zb(i._1.direction)(i._1.progress)(i._1.holdPre)(i._1.holdPost)(s._1);
          return { depth: u.x + u.y, draw: n(e)(r)(0)(u) };
        })()
      ) : x;
    }
    if (i.tag === "Filling") {
      const s = Ib(i._1.node)(o.nodes);
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
}, Yb = { angle: 0.5235987755982988, boxHeight: 26, transparentBg: !0 }, Ub = (t) => (n) => {
  const e = n.y + n.h, r = n.x + n.w;
  return {
    ground: { a: Mn(t)(n.x)(n.y)(0), b: Mn(t)(r)(n.y)(0), c: Mn(t)(r)(e)(0), d: Mn(t)(n.x)(e)(0) },
    top: { a: Mn(t)(n.x)(n.y)(t.boxHeight), b: Mn(t)(r)(n.y)(t.boxHeight), c: Mn(t)(r)(e)(t.boxHeight), d: Mn(t)(n.x)(e)(t.boxHeight) },
    depth: (n.x + r) / 2 + (n.y + e) / 2
  };
}, mh = (t) => (n) => D((e) => ({ np: e, box: Ub(t)(e) }))((() => {
  const e = (r, o) => {
    if (r.tag === "Leaf")
      return o;
    if (r.tag === "Node")
      return e(r._5, Zt("Cons", r._4, e(r._6, o)));
    f();
  };
  return Ot(gn.foldr, e(n.nodes, Qt));
})()), Vb = (t) => (n) => [
  ...vt(mh(t)(n))(Db),
  ...(() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, Zt("Cons", r._4, e(r._6, o)));
      f();
    };
    return vt(Ot(gn.foldr, e(n.edges, Qt)))(D((r) => Mn(t)(r.x)(r.y)(0)));
  })()
], Mb = (t) => {
  const n = t.to.y - t.from.y, e = t.to.x - t.from.x, r = tf(1e-4)(Un(e * e + n * n)), o = n / r, i = e / r, s = t.to.y - o * 7, u = t.to.x - i * 7;
  return Lo([t.to, { x: u - o * 3, y: s + i * 3 }, { x: u + o * 3, y: s - i * 3 }]);
}, Kb = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => (i) => (s) => (u) => {
    const c = Mn(r)(u.x)(u.y)(0), a = Mn(r)(s.x)(s.y)(0);
    return n.Bind1().bind(t.strokePath(Qb([a, c]))({
      color: o.edge,
      width: 1.5,
      lineJoin: Dn,
      lineCap: Me
    }))(() => {
      const l = t.fillPath(Mb({ from: a, to: c }))({ color: o.arrowFill, flat: !0 });
      return i ? l : e.pure();
    });
  };
}, jb = (t) => {
  const n = Kb(t);
  return (e) => (r) => (o) => (i) => {
    const s = Fn(re, i, Ct(1, i.length, i)), u = s.length - 1 | 0;
    return qt((c) => (a) => ({ depth: (a._1.x + a._1.y + a._2.x + a._2.y) / 2, draw: n(e)(r)(o && c === u)(a._1)(a._2) }))(s);
  };
}, Zb = (t) => {
  const n = Wb(t), e = Xb(t), r = jb(t), o = t.Monad0(), i = xi(o.Applicative0())(Xt);
  return (s) => (u) => (c) => (a) => {
    const l = k0(u), d = [
      ...vt(Bb(c.edges))((_) => r(s)(l)((() => {
        const g = Io("conn:")(_._1);
        if (g.tag === "Just")
          return !1;
        if (g.tag === "Nothing")
          return !0;
        f();
      })())(_._2)),
      ...D((_) => ({ depth: _.box.depth, draw: n(s)(l)(_) }))(mh(s)(c)),
      ...xt(e(s)(l)(c))((() => {
        const _ = (g, h) => {
          if (g.tag === "Leaf")
            return h;
          if (g.tag === "Node")
            return _(g._5, Zt("Cons", g._4, _(g._6, h)));
          f();
        };
        return Ot(gn.foldr, _(a.tokens, Qt));
      })())
    ];
    return o.Bind1().bind((() => {
      const _ = qb(Vb(s)(c));
      return t.Monad0().Bind1().bind(t.clearBackground(s.transparentBg ? l.bgTransparent : l.bg))(() => t.setViewport(_));
    })())(() => i((_) => _.draw)(Ht((_) => (g) => ot.compare(_.depth)(g.depth))(d)));
  };
}, $h = (t, n) => ({ tag: t, _1: n }), qu = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, tk = (t) => (n) => (e) => {
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
}, E0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, nk = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ek = /* @__PURE__ */ $h("ResolvedLabels"), rk = (t) => {
  const n = un((e) => e.role === "FlyThrough")(t.levels);
  if (n.tag === "Just")
    return n._1;
  if (n.tag === "Nothing")
    return wu(t);
  f();
}, bs = (t) => (n) => {
  const e = qu(1)(Gn(n.rootLayout).w), r = ws(n.rootLayout)(n.camera), o = !n.diving && n.levels.length === 1 ? 1 : tk(0)(1)(r.w / e), i = wu(n).state.frameTitle === "" ? 0 * o : 40 * o, s = t.padding * o * o;
  return (() => {
    if (t.outputAspect.tag === "Nothing")
      return V2;
    if (t.outputAspect.tag === "Just")
      return _1(t.outputAspect._1);
    f();
  })()({ vx: r.x - s, vy: r.y - s - i, vw: r.w + 2 * s, vh: r.h + 2 * s + i });
}, ok = (t) => (n) => {
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just") {
    const e = E0(n._1)(t.segment.layout.nodes);
    if (e.tag === "Nothing")
      return [];
    if (e.tag === "Just") {
      const r = e._1.x * t.segment.placement.scale + t.segment.placement.tx, o = e._1.y * t.segment.placement.scale + t.segment.placement.ty, i = e._1.w * t.segment.placement.scale, s = e._1.h * t.segment.placement.scale;
      return [1, r, o, 2, r + i, o, 2, r + i, o + s, 2, r, o + s, 5];
    }
  }
  f();
}, A0 = (t) => (n) => {
  const e = G$(n.segment.placement)({ x: t.vx, y: t.vy, w: t.vw, h: t.vh });
  return { vx: e.x, vy: e.y, vw: e.w, vh: e.h };
}, ik = (t) => {
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
        { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1.5 * i, lineJoin: Dn, lineCap: Me }
      )))(() => t.drawText({
        x: d,
        y: l,
        content: r,
        font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: s, weight: 700 },
        color: { r: 28, g: 30, b: 36, a: 255 },
        align: uo,
        baseline: tr
      }));
    });
  };
}, sk = (t) => {
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
        { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1 * i, lineJoin: Dn, lineCap: Me }
      )))(() => t.drawText({
        x: d,
        y: c + a / 2,
        content: r,
        font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: s, weight: 600 },
        color: { r: 28, g: 30, b: 36, a: 255 },
        align: uo,
        baseline: tr
      }));
    });
  };
}, uk = (t) => {
  const n = _h(t), e = C0(t), r = t.Monad0(), o = r.Bind1(), i = r.Applicative0(), s = hh(t), u = ph(t)(J0)(1), c = ah(t), a = lh(t), l = fh(t), d = xb(t), _ = t.popBlur, g = t.popAlpha, h = ik(t), m = sk(t);
  return (p) => ($) => (y) => (v) => (N) => (T) => (b) => (L) => {
    const E = k0(p.theme), C = (() => {
      if (L.tag === "ResolvedLabels")
        return n(E)(N)(T)(b);
      if (L.tag === "SpringLabels")
        return e(E)(T)(b)(L._1);
      f();
    })();
    return o.bind(t.Monad0().Bind1().bind(t.clearBackground(p.transparentBg ? E.bgTransparent : E.bg))(() => t.setViewport(N)))(() => o.bind((() => {
      const I = o.bind((() => {
        const z = t.pushAlpha(y);
        return y < 1 ? z : i.pure();
      })())(() => o.bind((() => {
        const z = t.pushBlur(v);
        return v > 0 ? z : i.pure();
      })())(() => o.bind(s(E)(T)(b))(() => o.bind(u(E)(T)(b))(() => o.bind(c(E)(T)(b))(() => o.bind(a(E)(N)(T)(b))(() => o.bind(l(QJ)(E)(T)(b))(() => o.bind(C)(() => o.bind((() => {
        const z = d(E)(T)(b);
        return b.staticKind !== "Animated" ? z : i.pure();
      })())(() => o.bind(v > 0 ? _ : i.pure())(() => y < 1 ? g : i.pure()))))))))));
      return y > 0 ? I : i.pure();
    })())(() => o.bind(p.watermark === "" ? t.Monad0().Applicative0().pure() : t.drawText({
      x: N.vx + 6,
      y: N.vy + 6,
      content: p.watermark,
      font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 9, weight: 600 },
      color: { r: 180, g: 180, b: 180, a: 255 },
      align: ds,
      baseline: AJ
    }))(() => b.staticKind === "TitleCard" ? h(b.frameTitle)(N) : m(b.frameTitle)(N))));
  };
}, yh = (t) => {
  const n = t.Monad0().Applicative0(), e = wi(n)(Xt);
  return (r) => (o) => (i) => (s) => e(s.minis)((u) => {
    const c = vh(t)(r)(o)(i)(B)(s)(u);
    return (() => {
      const a = u.segment.path.length - 1 | 0;
      return u.bgAlpha > 0 && a >= 0 && a < u.segment.path.length && (() => {
        const l = E0(u.segment.path[a])(s.state.nodes);
        if (l.tag === "Just")
          return l._1.tag === "Hidden" ? !1 : l._1.tag !== "PloppingOut";
        if (l.tag === "Nothing")
          return !1;
        f();
      })();
    })() ? c : n.pure();
  });
}, vh = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = t.popTransform, i = _h(t), s = C0(t), u = hh(t), c = ph(t), a = ah(t), l = lh(t), d = fh(t), _ = t.popBakedTransform, g = t.popClip, h = t.popBlur, m = t.popAlpha;
  return (p) => ($) => (y) => (v) => (N) => (T) => {
    const b = T.blur > 0, L = T.segment.placement, E = T.state, C = { tx: L.tx, ty: L.ty, sx: L.scale, sy: L.scale }, I = k0(p.theme), z = T.segment.layout, G = Gn(z), H = { vx: G.x - 1e3, vy: G.y - 1e3, vw: G.w + 2e3, vh: G.h + 2e3 }, M = T.segment.path.length - 1 | 0, Z = M >= 0 && M < T.segment.path.length ? E0(T.segment.path[M])(N.segment.layout.nodes) : x, Y = T.segment.placement.scale * y, q = nk(8)(qu(1)(1 / (1.25 * qu(1e-6)(Y)))), A = 11 * Y >= 5 ? J0 : db, P = (() => {
      if (Z.tag === "Nothing")
        return e.pure();
      if (Z.tag === "Just") {
        const Q = Z._1;
        return r.bind(t.pushTransform({
          tx: N.segment.placement.tx,
          ty: N.segment.placement.ty,
          sx: N.segment.placement.scale,
          sy: N.segment.placement.scale
        }))(() => r.bind(v0(t)(Q.shape)({ x: Q.x + 1, y: Q.y + 1, w: Q.w - 2, h: Q.h - 2 })(7)(J(
          "Just",
          { color: I.bg, flat: !0 }
        ))(x))(() => o));
      }
      f();
    })(), W = (() => {
      if (A === "LabelsHidden")
        return e.pure();
      if (A === "LabelsShown")
        return v.tag === "Leaf" ? i(I)(A0($.viewport)(T))(z)(E) : s(I)(z)(E)(v);
      f();
    })(), R = ok(N)((() => {
      const Q = T.segment.path.length - 1 | 0;
      return Q >= 0 && Q < T.segment.path.length ? J("Just", T.segment.path[Q]) : x;
    })());
    return r.bind(t.pushAlpha(T.bgAlpha))(() => r.bind((() => {
      const Q = t.pushBlur(T.blur * L.scale);
      return b ? Q : e.pure();
    })())(() => r.bind(t.pushClip(R)(Iu))(() => r.bind(N.role === "Active" || N.role === "FlyThrough" ? P : e.pure())(() => r.bind(t.pushTransform(C))(() => r.bind(u(I)(z)(E))(() => r.bind(c(A)(q)(I)(z)(E))(() => r.bind(a(I)(z)(E))(() => r.bind(l(I)(H)(z)(E))(() => r.bind(o)(() => r.bind(t.pushBakedTransform(C))(() => r.bind(d(qJ)(I)(z)(E))(() => r.bind(_)(() => r.bind(g)(() => r.bind(t.pushTransform(C))(() => r.bind(W)(() => r.bind(o)(() => r.bind(yh(t)(p)($)(y)(T))(() => r.bind(b ? h : e.pure())(() => m)))))))))))))))))));
  };
}, xh = (t) => {
  const n = Zb(t), e = t.Monad0(), r = e.Applicative0(), o = e.Bind1(), i = vh(t), s = uk(t), u = yh(t);
  return (c) => (a) => (l) => {
    if (c.theme === "Isometric")
      return n({ ...Yb, transparentBg: c.transparentBg })(c.theme)(wu(l).segment.layout)(wu(l).state);
    const d = bs(c)(l), _ = (p) => l.hasDives ? d.vw / qu(1)(Gn(l.rootLayout).w) : 1, g = { tileScale: _(), viewport: d }, h = (p) => ($) => {
      if ($.length === 0)
        return r.pure();
      const y = Dt((v) => x, (v) => (N) => J("Just", { head: v, tail: N }), $);
      if (y.tag === "Nothing")
        return r.pure();
      if (y.tag === "Just") {
        const v = y._1.head, N = y._1.tail;
        return o.bind((() => {
          const T = i(c)(g)(l.camera.zoom)(v.role === "Active" ? a : B)(p)(v);
          return l.diving || v.role === "Active" ? T : r.pure();
        })())(() => h(v)(N));
      }
      f();
    }, m = Dt((p) => x, (p) => ($) => J("Just", { head: p, tail: $ }), l.levels);
    if (m.tag === "Nothing")
      return r.pure();
    if (m.tag === "Just") {
      const p = m._1.tail, $ = m._1.head;
      return o.bind((() => {
        const y = p.length === 0;
        return s(c)(_())($.role === "Active" || $.role === "FlyThrough" ? $.bgAlpha : 0)($.blur)(d)($.segment.layout)(rk(l).state)(y && a.tag !== "Leaf" ? $h("SpringLabels", a) : ek);
      })())(() => o.bind((() => {
        const y = u(c)(g)(l.camera.zoom)($);
        return $.role === "Active" || $.role === "FlyThrough" ? y : r.pure();
      })())(() => h($)(p)));
    }
    f();
  };
}, ck = /* @__PURE__ */ S0(w0), Pg = /* @__PURE__ */ xh(w0), ak = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
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
  }, c = M_(e)(r);
  return () => {
    const a = c(), l = o.levels.length - 1 | 0;
    if (l >= 0 && l < o.levels.length) {
      const _ = ck(A0(bs(u)(o))(o.levels[l]))(o.levels[l].segment.layout)(o.levels[l].state)(a)(), g = Xa(i)(_)(s);
      return Pg(u)(g.applied)(o)(a)(), g.springs;
    }
    const d = Xa(i)(B)(s);
    return Pg(u)(d.applied)(o)(a)(), d.springs;
  };
}, ks = (t) => "rgb(" + rn(t.r) + "," + rn(t.g) + "," + rn(t.b) + ")", mo = (t) => t === 1 ? 7 : t === 2 ? 10 : t === 3 ? 14 : t === 4 ? 13 : t === 5 ? 5 : t === 6 ? 1 : t === 7 ? 4 : t === 8 ? 1 : t === 9 ? 2 : t === 10 ? 1 : t === 11 ? 2 : t === 12 ? 1 : t === 18 ? 2 : t === 19 ? 1 : t === 13 ? 2 : t === 14 ? 1 : t === 15 || t === 16 ? 5 : 1, cn = /* @__PURE__ */ vf(/* @__PURE__ */ $f("Fixed", /* @__PURE__ */ yf(0)(20)(2))), P0 = (t) => {
  const n = (e) => {
    const r = e >= 0 && e < t.length ? J("Just", t[e]) : x;
    if (r.tag === "Just")
      return r._1 === 1 ? [
        "M",
        cn((() => {
          const o = e + 1 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        cn((() => {
          const o = e + 2 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ...n(e + 3 | 0)
      ] : r._1 === 2 ? [
        "L",
        cn((() => {
          const o = e + 1 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        cn((() => {
          const o = e + 2 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ...n(e + 3 | 0)
      ] : r._1 === 3 ? [
        "Q",
        cn((() => {
          const o = e + 1 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        cn((() => {
          const o = e + 2 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        cn((() => {
          const o = e + 3 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        cn((() => {
          const o = e + 4 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ...n(e + 5 | 0)
      ] : r._1 === 4 ? [
        "C",
        cn((() => {
          const o = e + 1 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        cn((() => {
          const o = e + 2 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        cn((() => {
          const o = e + 3 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        cn((() => {
          const o = e + 4 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        cn((() => {
          const o = e + 5 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        cn((() => {
          const o = e + 6 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ...n(e + 7 | 0)
      ] : r._1 === 5 ? ["Z", ...n(e + 1 | 0)] : [];
    if (r.tag === "Nothing")
      return [];
    f();
  };
  return Qr(" ")(n(0));
}, fk = (t) => cn(t.vx) + " " + cn(t.vy) + " " + cn(t.vw) + " " + cn(t.vh), Ae = (t) => (n) => ln(Fe(n >= 0 && n < t.length ? t[n] : 0)), $a = (t) => (n) => {
  const e = Ae(t.ops)(n + 1 | 0);
  return Ct(e, e + Ae(t.ops)(n + 2 | 0) | 0, t.paths);
}, Rg = /* @__PURE__ */ (() => {
  const t = qe("&")("&amp;"), n = qe("<")("&lt;"), e = (() => {
    const r = qe(">")("&gt;"), o = (() => {
      const i = qe('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), lk = { vx: 0, vy: 0, vw: 1, vh: 1 }, gk = (t) => ((e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s >= 0 && s < t.length) {
      if (t[s] === 15) {
        const u = s + 1 | 0;
        o = !1, i = {
          vx: u >= 0 && u < t.length ? t[u] : 0,
          vy: (() => {
            const c = u + 1 | 0;
            return c >= 0 && c < t.length ? t[c] : 0;
          })(),
          vw: (() => {
            const c = u + 2 | 0;
            return c >= 0 && c < t.length ? t[c] : 0;
          })(),
          vh: (() => {
            const c = u + 3 | 0;
            return c >= 0 && c < t.length ? t[c] : 0;
          })()
        };
        continue;
      }
      r = s + mo(t[s]) | 0;
      continue;
    }
    o = !1, i = lk;
  }
  return i;
})(0), Ui = (t) => (n) => ({ r: Ae(t)(n), g: Ae(t)(n + 1 | 0), b: Ae(t)(n + 2 | 0), a: Ae(t)(n + 3 | 0) }), Fg = (t) => (n) => ({
  color: Ui(t)(n),
  width: (() => {
    const e = n + 4 | 0;
    return e >= 0 && e < t.length ? t[e] : 0;
  })(),
  join: Ae(t)(n + 5 | 0),
  cap: Ae(t)(n + 6 | 0)
}), dk = (t) => (n) => '<rect x="' + cn(t.vx) + '" y="' + cn(t.vy) + '" width="' + cn(t.vw) + '" height="' + cn(t.vh) + '" fill="' + ks(n) + '" opacity="' + cn(U(n.a) / 255) + '"/>', _k = (t) => (n) => '<path d="' + P0(t) + '" fill="' + ks(n) + '" fill-opacity="' + cn(U(n.a) / 255) + '"/>', wh = (t) => ' stroke="' + ks(t.color) + '" stroke-opacity="' + cn(U(t.color.a) / 255) + '" stroke-width="' + cn(t.width) + '" stroke-linejoin="' + (t.join === 0 ? "round" : t.join === 1 ? "bevel" : "miter") + '" stroke-linecap="' + (t.cap === 0 ? "butt" : t.cap === 1 ? "round" : "square") + '"', hk = (t) => (n) => (e) => '<path d="' + P0(t) + '" fill="' + ks(n) + '" fill-opacity="' + cn(U(n.a) / 255) + '"' + wh(e) + "/>", pk = (t) => (n) => '<path d="' + P0(t) + '" fill="none"' + wh(n) + "/>", mk = (t) => (n) => {
  const e = Ui(t.ops)(n + 7 | 0), r = Ae(t.ops)(n + 12 | 0), o = Ae(t.ops)(n + 11 | 0);
  return '<text x="' + cn((() => {
    const i = n + 1 | 0;
    return i >= 0 && i < t.ops.length ? t.ops[i] : 0;
  })()) + '" y="' + cn((() => {
    const i = n + 2 | 0;
    return i >= 0 && i < t.ops.length ? t.ops[i] : 0;
  })()) + '"' + (r === 0 ? ' dy="0.8em"' : r === 1 ? ' dy="0.32em"' : "") + ' fill="' + ks(e) + '" fill-opacity="' + cn(U(e.a) / 255) + '" font-size="' + cn((() => {
    const i = n + 5 | 0;
    return i >= 0 && i < t.ops.length ? t.ops[i] : 0;
  })()) + '" font-family="' + Rg((() => {
    const i = Ae(t.ops)(n + 4 | 0);
    return i >= 0 && i < t.strs.length ? t.strs[i] + ", ui-sans-serif, system-ui, sans-serif" : ", ui-sans-serif, system-ui, sans-serif";
  })()) + '" font-weight="' + rn(Ae(t.ops)(n + 6 | 0)) + '" text-anchor="' + (o === 0 ? "start" : o === 1 ? "middle" : "end") + '">' + Rg((() => {
    const i = Ae(t.ops)(n + 3 | 0);
    return i >= 0 && i < t.strs.length ? t.strs[i] : "";
  })()) + "</text>";
}, $o = (t) => (n) => (e) => {
  const r = e >= 0 && e < n.ops.length ? J("Just", n.ops[e]) : x;
  if (r.tag === "Just")
    return r._1 === 1 ? _k($a(n)(e))(Ui(n.ops)(e + 3 | 0)) + $o(t)(n)(e + mo(r._1) | 0) : r._1 === 2 ? pk($a(n)(e))(Fg(n.ops)(e + 3 | 0)) + $o(t)(n)(e + mo(r._1) | 0) : r._1 === 3 ? hk($a(n)(e))(Ui(n.ops)(e + 3 | 0))(Fg(n.ops)(e + 7 | 0)) + $o(t)(n)(e + mo(r._1) | 0) : r._1 === 4 ? mk(n)(e) + $o(t)(n)(e + mo(r._1) | 0) : r._1 === 16 ? dk(t)(Ui(n.ops)(e + 1 | 0)) + $o(t)(n)(e + mo(r._1) | 0) : $o(t)(n)(e + mo(r._1) | 0);
  if (r.tag === "Nothing")
    return "";
  f();
}, $k = (t) => {
  const n = gk(t.ops);
  return { viewBox: fk(n), body: $o(n)(t)(0), vx: n.vx, vy: n.vy, vw: n.vw, vh: n.vh };
}, yk = /* @__PURE__ */ vJ(NJ)(em), Gg = (t) => (n) => {
  const e = t.strs;
  return () => {
    const r = df(e);
    return t.strs.push(n), r;
  };
}, Ms = (t) => (n) => {
  const e = t.paths;
  return () => {
    const r = df(e);
    return t.paths.push(...n), { offset: r, len: n.length };
  };
}, vk = (t) => (n) => {
  const e = n.tx, r = t.ops;
  return () => {
    r.push(e), t.ops.push(n.ty), t.ops.push(n.sx), t.ops.push(n.sy);
  };
}, Ig = (t) => (n) => {
  const e = n.vx, r = t.ops;
  return () => {
    r.push(e), t.ops.push(n.vy), t.ops.push(n.vw), t.ops.push(n.vh);
  };
}, Rr = (t) => (n) => {
  const e = U(n), r = t.ops;
  return () => {
    r.push(e);
  };
}, Ks = (t) => (n) => {
  const e = n.len, r = Rr(t)(n.offset);
  return () => (r(), Rr(t)(e)());
}, xk = () => {
  const t = [], n = [], e = [], r = [];
  return r.push(1), { ops: t, paths: n, strs: e, alphaStack: r };
}, wk = (t) => {
  if (t.tag === "MeasureText") {
    const n = t._3(p0(t._1)(t._2));
    return () => n;
  }
  if (t.tag === "MeasureInk") {
    const n = t._3(m0(t._1)(t._2));
    return () => n;
  }
  f();
}, Nh = (t) => {
  const n = t.alphaStack;
  return () => {
    const e = df(n);
    if (e === 0)
      return 1;
    const r = om(jt, x, e - 1 | 0, t.alphaStack);
    if (r.tag === "Nothing")
      return 1;
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, yo = (t) => (n) => {
  const e = Nh(t);
  return () => {
    const r = e();
    return Rr(t)(n.r)(), Rr(t)(n.g)(), Rr(t)(n.b)(), Rr(t)(ln(Fe(U(n.a) * r + 0.5)))();
  };
}, Bg = (t) => (n) => {
  const e = yo(t)(n.color);
  return () => {
    e(), t.ops.push(n.width), t.ops.push((() => {
      if (n.lineJoin === "RoundJoin")
        return 0;
      if (n.lineJoin === "BevelJoin")
        return 1;
      if (n.lineJoin === "MiterJoin")
        return 2;
      f();
    })()), t.ops.push((() => {
      if (n.lineCap === "ButtCap")
        return 0;
      if (n.lineCap === "RoundCap")
        return 1;
      if (n.lineCap === "SquareCap")
        return 2;
      f();
    })());
  };
}, Nk = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r;
    if (u.tag === "FillPath") {
      const c = u._3, a = u._2, l = Ms(s)(u._1);
      o = !1, i = () => {
        const d = l();
        return s.ops.push(1), Ks(s)(d)(), yo(s)(a.color)(), c;
      };
      continue;
    }
    if (u.tag === "StrokePath") {
      const c = u._3, a = u._2, l = Ms(s)(u._1);
      o = !1, i = () => {
        const d = l();
        return s.ops.push(2), Ks(s)(d)(), Bg(s)(a)(), c;
      };
      continue;
    }
    if (u.tag === "FillStrokePath") {
      const c = u._2, a = u._4, l = u._3, d = Ms(s)(u._1);
      o = !1, i = () => {
        const _ = d();
        return s.ops.push(3), Ks(s)(_)(), yo(s)(c.color)(), Bg(s)(l)(), a;
      };
      continue;
    }
    if (u.tag === "DrawText") {
      const c = u._2, a = u._1, l = Gg(s)(Po(a.content));
      o = !1, i = () => {
        const d = l(), _ = Gg(s)(a.font.family)();
        return s.ops.push(4), s.ops.push(a.x), s.ops.push(a.y), Rr(s)(d)(), Rr(s)(_)(), s.ops.push(a.font.size), Rr(s)(a.font.weight)(), yo(s)(a.color)(), s.ops.push((() => {
          if (a.align === "AlignLeft")
            return 0;
          if (a.align === "AlignCenter")
            return 1;
          if (a.align === "AlignRight")
            return 2;
          f();
        })()), s.ops.push((() => {
          if (a.baseline === "BaselineTop")
            return 0;
          if (a.baseline === "BaselineMiddle")
            return 1;
          if (a.baseline === "BaselineAlphabetic")
            return 2;
          if (a.baseline === "BaselineBottom")
            return 3;
          f();
        })()), c;
      };
      continue;
    }
    if (u.tag === "DrawTextAffine") {
      e = s, r = zt(
        "DrawText",
        { ...u._2, x: u._1.a * u._2.x + u._1.c * u._2.y + u._1.e, y: u._1.b * u._2.x + u._1.d * u._2.y + u._1.f },
        u._3
      );
      continue;
    }
    if (u.tag === "PushTransform") {
      const c = u._2, a = u._1, l = s.ops;
      o = !1, i = () => (l.push(5), vk(s)(a)(), c);
      continue;
    }
    if (u.tag === "PopTransform") {
      const c = u._1, a = s.ops;
      o = !1, i = () => (a.push(6), c);
      continue;
    }
    if (u.tag === "PushClip") {
      const c = u._3, a = u._2, l = Ms(s)(u._1);
      o = !1, i = () => {
        const d = l();
        return s.ops.push(7), Ks(s)(d)(), s.ops.push((() => {
          if (a === "NonZero")
            return 0;
          if (a === "EvenOdd")
            return 1;
          f();
        })()), c;
      };
      continue;
    }
    if (u.tag === "PopClip") {
      const c = u._1, a = s.ops;
      o = !1, i = () => (a.push(8), c);
      continue;
    }
    if (u.tag === "PushBlend") {
      const c = u._1, a = u._2, l = s.ops;
      o = !1, i = () => (l.push(9), s.ops.push((() => {
        if (c === "Normal")
          return 0;
        if (c === "Difference")
          return 1;
        f();
      })()), a);
      continue;
    }
    if (u.tag === "PopBlend") {
      const c = u._1, a = s.ops;
      o = !1, i = () => (a.push(10), c);
      continue;
    }
    if (u.tag === "PushAlpha") {
      const c = u._1, a = u._2, l = Nh(s);
      o = !1, i = () => {
        const d = l();
        return s.alphaStack.push(d * c), s.ops.push(11), s.ops.push(c), a;
      };
      continue;
    }
    if (u.tag === "PopAlpha") {
      const c = u._1, a = s.alphaStack;
      o = !1, i = () => (im(jt, x, a), s.ops.push(12), c);
      continue;
    }
    if (u.tag === "PushBlur") {
      const c = u._2, a = u._1, l = s.ops;
      o = !1, i = () => (l.push(18), s.ops.push(a), c);
      continue;
    }
    if (u.tag === "PopBlur") {
      const c = u._1, a = s.ops;
      o = !1, i = () => (a.push(19), c);
      continue;
    }
    if (u.tag === "PushLayer") {
      const c = u._1, a = u._2, l = s.ops;
      o = !1, i = () => (l.push(13), s.ops.push((() => {
        if (c === "LayerBase")
          return 0;
        if (c === "LayerPolyOut")
          return 1;
        if (c === "LayerPolyIn")
          return 2;
        if (c === "LayerNodeMask")
          return 3;
        if (c === "LayerOverlay")
          return 4;
        f();
      })()), a);
      continue;
    }
    if (u.tag === "PopLayer") {
      const c = u._1, a = s.ops;
      o = !1, i = () => (a.push(14), c);
      continue;
    }
    if (u.tag === "SetViewport") {
      const c = u._2, a = u._1, l = s.ops;
      o = !1, i = () => (l.push(15), Ig(s)(a)(), c);
      continue;
    }
    if (u.tag === "ClearBackground") {
      const c = u._1, a = u._2, l = s.ops;
      o = !1, i = () => (l.push(16), yo(s)(c)(), a);
      continue;
    }
    if (u.tag === "BackgroundDots") {
      const c = u._2, a = u._1, l = s.ops;
      o = !1, i = () => (l.push(17), Ig(s)(a.viewport)(), yo(s)(a.bgColor)(), yo(s)(a.dotColor)(), s.ops.push(a.tile), s.ops.push(a.dotRadius), s.ops.push(a.origin.x), s.ops.push(a.origin.y), c);
      continue;
    }
    f();
  }
  return i;
}, Tk = (t) => (n) => n.type === "metrics" ? wk(n.value) : n.type === "render" ? Nk(t)(n.value) : Ca("Data.Functor.Variant: pattern match failure [" + n.type + "]"), Jk = (t) => {
  const n = xk();
  return yk(Tk(n))(t)(), { ops: n.ops, paths: n.paths, strs: n.strs };
}, Th = (t) => t, Ls = (t) => t, Hg = /* @__PURE__ */ Ls("Light"), bk = /* @__PURE__ */ Ls("Dark"), kk = /* @__PURE__ */ Ls("Blueprint"), Lk = /* @__PURE__ */ Ls("Whiteboard"), Sk = /* @__PURE__ */ Ls("Isometric"), Ck = /* @__PURE__ */ Th("PaintBackground"), Ek = /* @__PURE__ */ Th("TransparentBackground"), ro = (t) => "rgb(" + rn(t.r) + "," + rn(t.g) + "," + rn(t.b) + ")", ur = /* @__PURE__ */ vf(/* @__PURE__ */ $f("Fixed", /* @__PURE__ */ yf(0)(20)(4))), Ak = (t) => "translate(" + ur(t.tx) + "," + ur(t.ty) + ") scale(" + ur(t.sx) + "," + ur(t.sy) + ")", Rt = /* @__PURE__ */ vf(/* @__PURE__ */ $f("Fixed", /* @__PURE__ */ yf(0)(20)(2))), R0 = (t) => {
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
        n.push("M"), n.push(Rt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Rt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 2) {
        n.push("L"), n.push(Rt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Rt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 3) {
        n.push("Q"), n.push(Rt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Rt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Rt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Rt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 5 | 0;
        continue;
      }
      if (o._1 === 4) {
        n.push("C"), n.push(Rt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Rt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Rt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Rt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Rt((() => {
          const i = r + 5 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Rt((() => {
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
  return Qr(" ")(n);
}, Pk = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, nf = /* @__PURE__ */ (() => {
  const t = qe("&")("&amp;"), n = qe("<")("&lt;"), e = (() => {
    const r = qe(">")("&gt;"), o = (() => {
      const i = qe('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), Rk = (t) => {
  if (t.style === "RunText")
    return "<tspan>" + nf(t.text) + "</tspan>";
  if (t.style === "RunCode")
    return `<tspan font-family="'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="400">` + nf(t.text) + "</tspan>";
  f();
}, Xn = (t) => (n) => {
  const e = n.maskDepth;
  return () => {
    e.value === 0 && n.out.push(t);
  };
}, Fk = (t) => (n) => {
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
}, js = (t) => (n) => {
  const e = t.bake;
  return () => {
    const r = e.value;
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return Fk(r._1)(n);
    f();
  };
}, Jh = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => Pk
}, Gk = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => Jh
}, Ik = { pure: (t) => (n) => () => t, Apply0: () => Jh }, Bk = { Applicative0: () => Ik, Bind1: () => Gk }, Hk = (t) => (n) => '<defs><pattern id="' + t + '" x="' + Rt(n.origin.x) + '" y="' + Rt(n.origin.y) + '" width="' + Rt(n.tile) + '" height="' + Rt(n.tile) + '" patternUnits="userSpaceOnUse">' + (n.bgColor.a === 0 ? "" : '<rect width="' + Rt(n.tile) + '" height="' + Rt(n.tile) + '" fill="' + ro(n.bgColor) + '" fill-opacity="' + Rt(U(n.bgColor.a) / 255) + '"/>') + '<circle cx="' + Rt(n.tile / 2) + '" cy="' + Rt(n.tile / 2) + '" r="' + Rt(n.dotRadius) + '" fill="' + ro(n.dotColor) + '"/></pattern></defs><rect x="' + Rt(n.viewport.vx) + '" y="' + Rt(n.viewport.vy) + '" width="' + Rt(n.viewport.vw) + '" height="' + Rt(n.viewport.vh) + '" fill="url(#' + t + ')"/>', Dg = (t) => (n) => '<path d="' + R0(t) + '" fill="' + ro(n) + '" fill-opacity="' + Rt(U(n.a) / 255) + '"/>', Dk = (t) => (n) => (e) => (r) => '<rect x="' + Rt(t.x) + '" y="' + Rt(t.y) + '" width="' + Rt(t.w) + '" height="' + Rt(t.h) + '" rx="' + Rt(n) + '"' + (() => {
  if (e.tag === "Just")
    return ' fill="' + ro(e._1.color) + '" fill-opacity="' + Rt(U(e._1.color.a) / 255) + '"';
  if (e.tag === "Nothing")
    return ' fill="none"';
  f();
})() + (() => {
  if (r.tag === "Just")
    return ' stroke="' + ro(r._1.color) + '" stroke-opacity="' + Rt(U(r._1.color.a) / 255) + '" stroke-width="' + Rt(r._1.width) + '" stroke-linejoin="' + (() => {
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
})() + "/>", zg = (t) => (n) => '<path d="' + R0(t) + '" fill="none" stroke="' + ro(n.color) + '" stroke-opacity="' + Rt(U(n.color.a) / 255) + '" stroke-width="' + Rt(n.width) + '" stroke-linejoin="' + (() => {
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
})() + '"/>', Qg = (t) => {
  const n = B1(Po(t.content));
  return '<text x="' + Rt(t.x) + '" y="' + Rt(t.y) + '"' + (() => {
    if (t.baseline === "BaselineTop")
      return ' dy="0.8em"';
    if (t.baseline === "BaselineMiddle")
      return ' dy="0.32em"';
    if (t.baseline === "BaselineAlphabetic" || t.baseline === "BaselineBottom")
      return "";
    f();
  })() + ' fill="' + ro(t.color) + '" fill-opacity="' + Rt(U(t.color.a) / 255) + '" font-size="' + Rt(t.font.size) + '" font-family="Ilisarniq, ui-sans-serif, system-ui, sans-serif" font-weight="' + rn(t.font.weight) + '" text-anchor="' + (() => {
    if (t.align === "AlignLeft")
      return "start";
    if (t.align === "AlignCenter")
      return "middle";
    if (t.align === "AlignRight")
      return "end";
    f();
  })() + '">' + (n.length === 1 && n[0].style === "RunText" ? nf(n[0].text) : Qr("")(D(Rk)(n))) + "</text>";
}, zk = (t) => "matrix(" + ur(t.a) + " " + ur(t.b) + " " + ur(t.c) + " " + ur(t.d) + " " + ur(t.e) + " " + ur(t.f) + ")", bh = {
  fillPath: (t) => (n) => (e) => {
    const r = js(e)(t);
    return () => {
      const o = r();
      return Xn(Dg(o)(n.color))(e)();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = js(e)(t);
    return () => {
      const o = r(), i = e.bake.value;
      return Xn(zg(o)((() => {
        if (i.tag === "Nothing")
          return n;
        if (i.tag === "Just")
          return { ...n, width: i._1.sx * n.width };
        f();
      })()))(e)();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = js(r)(t);
    return () => {
      const i = o(), s = r.bake.value;
      return Xn(Dg(i)(n.color) + zg(i)((() => {
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
      return Xn(Dk((() => {
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
      return Xn(Qg((() => {
        if (r.tag === "Nothing")
          return t;
        if (r.tag === "Just")
          return { ...t, x: r._1.sx * t.x + r._1.tx, y: r._1.sy * t.y + r._1.ty, font: { ...t.font, size: r._1.sx * t.font.size } };
        f();
      })()))(n)();
    };
  },
  drawTextAffine: (t) => (n) => Xn((() => {
    const e = 'transform="' + zk(t) + '"';
    return (e === "" ? "<g>" : "<g " + e + ">") + Qg(n) + "</g>";
  })()),
  pushTransform: (t) => Xn((() => {
    const n = 'transform="' + Ak(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popTransform: /* @__PURE__ */ Xn("</g>"),
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
      const i = js(e)(t)(), s = "clip" + rn(o);
      return Xn((() => {
        const u = 'clip-path="url(#' + s + ')"';
        return '<defs><clipPath id="' + s + '"><path d="' + R0(i) + '"' + (() => {
          if (n === "EvenOdd")
            return ' clip-rule="evenodd"';
          if (n === "NonZero")
            return "";
          f();
        })() + "/></clipPath></defs>" + (u === "" ? "<g>" : "<g " + u + ">");
      })())(e)();
    };
  },
  popClip: /* @__PURE__ */ Xn("</g>"),
  pushBlend: (t) => Xn((() => {
    const n = (() => {
      if (t === "Normal")
        return 'style="mix-blend-mode: normal"';
      if (t === "Difference")
        return 'style="mix-blend-mode: difference"';
      f();
    })();
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popBlend: /* @__PURE__ */ Xn("</g>"),
  pushAlpha: (t) => Xn((() => {
    const n = 'opacity="' + Rt(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popAlpha: /* @__PURE__ */ Xn("</g>"),
  pushBlur: (t) => (n) => {
    if (t < 0.01)
      return Xn("<g>")(n);
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      n.patternCounter.value = r + 1 | 0;
      const o = "lvl-blur-" + rn(r);
      return Xn((() => {
        const i = 'filter="url(#' + o + ')"';
        return '<defs><filter id="' + o + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="' + Rt(t) + '"/></filter></defs>' + (i === "" ? "<g>" : "<g " + i + ">");
      })())(n)();
    };
  },
  popBlur: /* @__PURE__ */ Xn("</g>"),
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
  clearBackground: (t) => (n) => Xn('<rect x="' + Rt(n.viewport.vx) + '" y="' + Rt(n.viewport.vy) + '" width="' + Rt(n.viewport.vw) + '" height="' + Rt(n.viewport.vh) + '" fill="' + ro(t) + '" opacity="' + Rt(U(t.a) / 255) + '"/>')(n),
  backgroundDots: (t) => (n) => {
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      return n.patternCounter.value = r + 1 | 0, Xn(Hk("bg-dots-" + rn(r))(t))(n)();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = p0(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = m0(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => y0,
  Monad0: () => Bk
}, Qk = /* @__PURE__ */ xh(bh), qk = /* @__PURE__ */ S0(bh), Wk = (t) => (n) => (e) => (r) => (o) => {
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
  }, s = bs(i)(o);
  return {
    viewBox: Rt(s.vx) + " " + Rt(s.vy) + " " + Rt(s.vw) + " " + Rt(s.vh),
    body: (() => {
      const u = [], c = { value: 0 }, a = { value: 0 }, l = { value: 0 }, d = { value: x };
      return Qk(i)(n)(o)({ out: u, maskDepth: c, clipCounter: a, patternCounter: l, viewport: s, bake: d })(), Qr("")(u);
    })(),
    vx: s.vx,
    vy: s.vy,
    vw: s.vw,
    vh: s.vh
  };
}, Ok = (t) => (n) => (e) => (r) => (o) => (i) => {
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
  }, u = Xa(o)((() => {
    const c = [], a = { value: 0 }, l = { value: 0 }, d = { value: 0 }, _ = { value: x }, g = r.levels.length - 1 | 0;
    if (g >= 0 && g < r.levels.length) {
      const h = A0(bs(s)(r))(r.levels[g]);
      return qk(h)(r.levels[g].segment.layout)(r.levels[g].state)({
        out: c,
        maskDepth: a,
        clipCounter: l,
        patternCounter: d,
        viewport: h,
        bake: _
      })();
    }
    return B;
  })())(i);
  return { parts: Wk(t)(u.applied)(n)(e)(r), springs: u.springs };
}, Do = (t) => ({ bind: (n) => (e) => (r) => t.Bind1().bind(n(r))((o) => e(o._1)(o._2)), Apply0: () => kh(t) }), kh = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = { map: (r) => (o) => (i) => n.map((s) => k(r(s._1), s._2))(o(i)) };
  return {
    apply: (() => {
      const r = Do(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => zo(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, zo = (t) => ({ pure: (n) => (e) => t.Applicative0().pure(k(n, e)), Apply0: () => kh(t) }), Lh = (t) => {
  const n = { Applicative0: () => zo(t), Bind1: () => Do(t) };
  return { state: (e) => (r) => t.Applicative0().pure(e(r)), Monad0: () => n };
}, So = (t, n) => ({ tag: t, _1: n }), Hr = (t, n) => ({ tag: t, _1: n }), F0 = (t) => t, yr = (t, n) => ({ tag: t, _1: n }), G0 = (t) => t, Rn = /* @__PURE__ */ Lh(ke), Yt = /* @__PURE__ */ Do(ke), Kn = Rn.state((t) => k(t, t)), fn = /* @__PURE__ */ zo(ke), Sh = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Ch = /* @__PURE__ */ xi(fn), I0 = /* @__PURE__ */ Ch(Xt), cr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Eh = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Xk = /* @__PURE__ */ (() => {
  const t = me.unfoldr((n) => {
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
        return e(r._5, Zt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Qt);
  })());
})(), Ve = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Yk = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, Ac = (t) => (n) => (e) => w((r) => (o) => t.Bind1().bind(r)((i) => n(i)(o)))(t.Applicative0().pure(e)), Uk = /* @__PURE__ */ w((t) => (n) => K(F)(n)()(t))(B), Vk = /* @__PURE__ */ (() => {
  const n = ((e) => (r) => {
    let o = e, i = r, s = !0, u;
    for (; s; ) {
      const c = o, a = i;
      if (a.tag === "Nil") {
        s = !1, u = c;
        continue;
      }
      if (a.tag === "Cons") {
        o = K(F)(a._1)()(c), i = a._2;
        continue;
      }
      f();
    }
    return u;
  })(B);
  return (e) => n((() => {
    const r = (o, i) => {
      if (o.tag === "Leaf")
        return i;
      if (o.tag === "Node")
        return r(o._5, Zt("Cons", o._3, r(o._6, i)));
      f();
    };
    return r(e, Qt);
  })());
})(), Mk = /* @__PURE__ */ Ch(ff), Kk = /* @__PURE__ */ G0("AnimatedSurface"), jk = /* @__PURE__ */ G0("StillSurface"), Zk = /* @__PURE__ */ G0("SequenceSurface"), t5 = /* @__PURE__ */ yr("Exit"), Wu = /* @__PURE__ */ F0("AnimatedKeyframe"), B0 = /* @__PURE__ */ F0("Still"), n5 = /* @__PURE__ */ F0("Title"), e5 = (t) => Hr("Par", t), r5 = (t) => Hr("Seq", t), o5 = (t) => Hr("GroupSeq", t), Ah = (t) => So("StepDive", t), i5 = { line: 0, column: 0, endLine: 0, endColumn: 0 }, s5 = (t) => (n) => (e) => {
  const r = Co(jt, x, (o) => o._1 === t, e);
  if (r.tag === "Just") {
    const o = no(jt, x, r._1, k(t, n), e);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return o._1;
    f();
  }
  if (r.tag === "Nothing")
    return Et(e)(k(t, n));
  f();
}, u5 = (t) => (n) => D((e) => e._1 === t ? k(e._1, { ...e._2, label: J("Just", n) }) : k(e._1, e._2)), c5 = (t) => {
  const n = t.span;
  return Rn.state((e) => k(void 0, { ...e, currentSpan: n }));
}, ya = (t) => (n) => ({ structural: [...t.structural, ...n.structural], flow: t.flow || n.flow, dives: [...t.dives, ...n.dives] }), Pc = {
  graphNodes: [],
  graphEdges: B,
  currNodes: B,
  currEdges: B,
  keyframes: [],
  scenes: [],
  kfCounter: 0,
  eventCounter: 0,
  currentKf: x,
  currentSpan: i5,
  error: x,
  enterStack: [],
  interiorOf: B
}, oo = (t) => Rn.state((n) => k(
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
)), a5 = /* @__PURE__ */ I0((t) => Yt.bind(Kn)((n) => {
  if (n.error.tag === "Just")
    return fn.pure();
  if (n.error.tag === "Nothing")
    return Sh(t.node)(n.interiorOf) ? oo("node " + t.node + " has more than one `inside` block") : Rn.state((e) => k(void 0, { ...e, interiorOf: K(F)(t.node)(t.doc)(e.interiorOf) }));
  f();
})), f5 = (t) => Yt.bind(Kn)((n) => {
  const e = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + rn(n.kfCounter);
  if (he((o) => o.id === e, n.keyframes))
    return oo("duplicate frame name " + e);
  const r = {
    ...n,
    keyframes: Et(n.keyframes)({ id: e, nodes: n.currNodes, edges: n.currEdges, kind: xs }),
    kfCounter: n.kfCounter + 1 | 0,
    currentKf: J("Just", e)
  };
  return Rn.state((o) => k(void 0, r));
}), ye = (t) => (n) => Yt.bind(Rn.state((e) => k(void 0, { ...e, currentSpan: t })))(() => oo(n)), l5 = (t) => Yt.bind((() => {
  const n = t.span;
  return Rn.state((e) => k(void 0, { ...e, currentSpan: n }));
})())(() => Yt.bind(Kn)((n) => {
  if (n.error.tag === "Just")
    return fn.pure();
  if (n.error.tag === "Nothing") {
    if (t.op.tag === "Enter") {
      if (!cr(t.op._1.id)(n.currNodes))
        return ye(0 < t.operands.length ? t.operands[0] : t.span)("cannot dive into node " + t.op._1.id + ": does not exist");
      if (!Sh(t.op._1.id)(n.interiorOf))
        return ye(0 < t.operands.length ? t.operands[0] : t.span)("cannot enter node " + t.op._1.id + ": it has no `inside` block. Add the block at the document level, alongside the animated statements:\n\ninside " + t.op._1.id + ` {
  + detail: Detail
}`);
      const e = t.op._1;
      return Rn.state((r) => k(
        void 0,
        { ...r, enterStack: Et(r.enterStack)(e.id), scenes: Et(r.scenes)(vs("EnterNode", e.id)) }
      ));
    }
    if (t.op.tag === "Exit") {
      const e = Ke(n.enterStack);
      if (e.tag === "Nothing")
        return oo("`out` without a matching `into`");
      if (e.tag === "Just") {
        const r = e._1.init;
        return Rn.state((o) => k(void 0, { ...o, enterStack: r, scenes: Et(o.scenes)(U$) }));
      }
      f();
    }
    return fn.pure();
  }
  f();
})), Xo = { structural: [], flow: !1, dives: [] }, g5 = Yt.bind(Kn)((t) => {
  if (t.error.tag === "Just")
    return fn.pure();
  if (t.error.tag === "Nothing") {
    if (t.currentKf.tag === "Just") {
      const n = t.currentKf._1;
      return Rn.state((e) => k(void 0, { ...e, scenes: Et(e.scenes)(vs("Hold", n)) }));
    }
    if (t.currentKf.tag === "Nothing")
      return fn.pure();
  }
  f();
}), d5 = (t) => (n) => Yt.bind(Kn)((e) => {
  const r = "ev-" + rn(e.eventCounter);
  return Yt.bind((() => {
    const o = { ...e, eventCounter: e.eventCounter + 1 | 0 };
    return Rn.state((i) => k(void 0, o));
  })())(() => fn.pure({ events: [{ id: r, kind: n, when: t }], firstId: J("Just", r), lastId: J("Just", r) }));
}), _5 = (t) => xt((n) => Eh(n)(t.graphEdges))(Ot(ui, Xk(t.currEdges))), h5 = (t) => (n) => {
  const e = lt((o) => o.from.node === n.id || o.to.node === n.id, _5(t)), r = Ac(kd)((o) => (i) => {
    const s = i.from + "->" + n.id, u = n.id + "->" + i.to, c = i.from + "->" + i.to, a = "via " + i.from + " " + i.to + ": no edge " + i.from + "→" + n.id;
    if (!Ve(s)(t.currEdges))
      return Nt("Left", a);
    const l = "via " + i.from + " " + i.to + ": no edge " + n.id + "→" + i.to;
    if (!Ve(u)(t.currEdges))
      return Nt("Left", l);
    const d = "via " + i.from + " " + i.to + ": would create " + i.from + "→" + i.to + " but it already exists";
    return Ve(c)(t.currEdges) || Yk(c)(o.synthesized) ? Nt("Left", d) : Nt(
      "Right",
      {
        consumed: K(F)(s)()(K(F)(u)()(o.consumed)),
        synthesized: K(F)(c)({
          id: c,
          from: { node: i.from, port: x },
          to: { node: i.to, port: x },
          label: x
        })(o.synthesized)
      }
    );
  })({ consumed: B, synthesized: B })(n.via);
  return (() => {
    if (r.tag === "Left") {
      const o = r._1;
      return (i) => Nt("Left", o);
    }
    if (r.tag === "Right") {
      const o = r._1;
      return (i) => i(o);
    }
    f();
  })()((o) => {
    const i = o.consumed, s = lt((u) => !Ve(u.id)(i), e);
    return s.length === 0 ? Nt(
      "Right",
      {
        nextCurrEdges: Zn(
          F.compare,
          jn,
          Cr(F.compare, t.currEdges, Uk(D((u) => u.id)(e))),
          Vk((() => {
            const u = (c) => {
              if (c.tag === "Leaf")
                return B;
              if (c.tag === "Node")
                return nn("Node", c._1, c._2, c._3, void 0, u(c._5), u(c._6));
              f();
            };
            return u(o.synthesized);
          })())
        ),
        synthesized: o.synthesized
      }
    ) : Nt(
      "Left",
      "cannot delete node " + n.id + ": still connected (" + Qr(", ")(D((u) => (() => {
        const c = Io("conn:")(u.id);
        if (c.tag === "Just")
          return !1;
        if (c.tag === "Nothing")
          return !0;
        f();
      })() ? u.from.node + "→" + u.to.node : u.from.node + "--" + u.to.node)(s)) + "). Use `- a -> b` or `- a -- b` to drop them, or `via a b` to merge " + n.id + "'s endpoints."
    );
  });
}, Ph = (t) => (n) => (e) => {
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
  if (t.tag === "Par" || t.tag === "Seq" || t.tag === "GroupSeq")
    return vt(t._1)(su);
  f();
}, p5 = (t) => ({
  nodes: D(tc)(t.graphNodes),
  edges: (() => {
    const n = (e, r) => {
      if (e.tag === "Leaf")
        return r;
      if (e.tag === "Node")
        return n(e._5, Zt("Cons", e._4, n(e._6, r)));
      f();
    };
    return Ot(gn.foldr, n(t.graphEdges, Qt));
  })(),
  constraints: []
}), Vi = (t) => {
  if (t.tag === "Leaf")
    return t._1.op.tag === "AddNode" || t._1.op.tag === "DelNode" || t._1.op.tag === "ModNode" || t._1.op.tag === "AddEdge" || t._1.op.tag === "DelEdge" || t._1.op.tag === "RepointEdge" ? { ...Xo, structural: [t._1] } : t._1.op.tag === "Enter" || t._1.op.tag === "Exit" ? { ...Xo, dives: [t._1] } : { ...Xo, flow: !0 };
  if (t.tag === "Seq" || t.tag === "GroupSeq" || t.tag === "Par")
    return w(ya)(Xo)(D(Vi)(t._1));
  f();
}, Rc = (t) => {
  if (t.tag === "Leaf")
    return t._1.op.tag === "AddNode" || t._1.op.tag === "DelNode" || t._1.op.tag === "ModNode" || t._1.op.tag === "AddEdge" || t._1.op.tag === "DelEdge" || t._1.op.tag === "RepointEdge" ? [So("StepStructural", [t._1])] : t._1.op.tag === "Enter" || t._1.op.tag === "Exit" ? [So("StepDive", t._1)] : [So("StepFlow", t)];
  if (t.tag === "Seq")
    return vt(t._1)(Rc);
  if (t.tag === "GroupSeq")
    return $5(t)(t._1);
  if (t.tag === "Par")
    return m5(t)(t._1);
  f();
}, m5 = (t) => (n) => {
  const e = Vi(t);
  return e.structural.length !== 0 && !e.flow && e.dives.length === 0 ? [So("StepStructural", e.structural)] : e.structural.length === 0 && e.flow && e.dives.length === 0 ? [So("StepFlow", t)] : e.structural.length === 0 && !e.flow && e.dives.length !== 0 ? D(Ah)(e.dives) : vt(n)(Rc);
}, $5 = (t) => (n) => {
  const e = Vi(t);
  return e.structural.length === 0 && e.flow && e.dives.length === 0 ? [So("StepFlow", t)] : e.structural.length === 0 && !e.flow && e.dives.length !== 0 ? D(Ah)(e.dives) : vt(n)(Rc);
}, y5 = (t) => (n) => Yt.bind(Kn)((e) => {
  const r = n.from + "->" + n.to, o = n.newFrom + "->" + n.newTo;
  return Ve(r)(e.currEdges) ? cr(n.newFrom)(e.currNodes) ? cr(n.newTo)(e.currNodes) ? r !== o && Ve(o)(e.currEdges) ? ye((() => {
    const i = 2 < t.operands.length ? t.operands[2] : t.span, s = 3 < t.operands.length ? t.operands[3] : t.span;
    return { line: i.line, column: i.column, endLine: s.endLine, endColumn: s.endColumn };
  })())("cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": target edge already exists") : Rn.state((i) => k(
    void 0,
    {
      ...i,
      currEdges: K(F)(o)()(gi(F)(r)(i.currEdges)),
      graphEdges: K(F)(o)({
        id: o,
        from: { node: n.newFrom, port: x },
        to: { node: n.newTo, port: x },
        label: x
      })(i.graphEdges)
    }
  )) : ye(3 < t.operands.length ? t.operands[3] : t.span)("cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newTo) : ye(2 < t.operands.length ? t.operands[2] : t.span)("cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newFrom) : ye((() => {
    const i = 0 < t.operands.length ? t.operands[0] : t.span, s = 1 < t.operands.length ? t.operands[1] : t.span;
    return { line: i.line, column: i.column, endLine: s.endLine, endColumn: s.endColumn };
  })())("cannot repoint " + n.from + "→" + n.to + ": edge does not exist");
}), v5 = (t) => {
  if (t.op.tag === "AddNode") {
    const n = t.op._1;
    return Yt.bind(Kn)((e) => cr(n.id)(e.currNodes) ? ye(0 < t.operands.length ? t.operands[0] : t.span)("cannot add node " + n.id + ": already exists") : Rn.state((r) => k(
      void 0,
      {
        ...r,
        graphNodes: s5(n.id)({ id: n.id, size: k(1, 1), ports: [], label: J("Just", n.label), shape: n.shape })(r.graphNodes),
        currNodes: K(F)(n.id)()(r.currNodes)
      }
    )));
  }
  if (t.op.tag === "DelNode") {
    const n = t.op._1;
    return Yt.bind(Kn)((e) => {
      if (!cr(n.id)(e.currNodes))
        return ye(0 < t.operands.length ? t.operands[0] : t.span)("cannot delete node " + n.id + ": does not exist");
      const r = h5(e)(n);
      if (r.tag === "Left")
        return ye(0 < t.operands.length ? t.operands[0] : t.span)(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return Rn.state((i) => k(
          void 0,
          {
            ...i,
            currNodes: gi(F)(n.id)(i.currNodes),
            currEdges: o.nextCurrEdges,
            graphEdges: Zn(F.compare, jn, o.synthesized, i.graphEdges)
          }
        ));
      }
      f();
    });
  }
  if (t.op.tag === "ModNode") {
    const n = t.op._1;
    return Yt.bind(Kn)((e) => {
      if (!cr(n.id)(e.currNodes))
        return ye(0 < t.operands.length ? t.operands[0] : t.span)("cannot modify node " + n.id + ": does not exist");
      if (n.label.tag === "Just") {
        const r = n.label._1;
        return Rn.state((o) => k(void 0, { ...o, graphNodes: u5(n.id)(r)(o.graphNodes) }));
      }
      if (n.label.tag === "Nothing")
        return fn.pure();
      f();
    });
  }
  if (t.op.tag === "AddEdge") {
    const n = t.op._1;
    return Yt.bind(Kn)((e) => {
      const r = !cr(n.from)(e.currNodes), o = !cr(n.to)(e.currNodes);
      if (r || o)
        return ye(Ph(r)(o)(t))((n.directed ? "cannot add edge " : "cannot add connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": unknown node " + (r ? o ? n.from + ", " + n.to : n.from : o ? n.to : ""));
      const i = n.directed ? n.from + "->" + n.to : n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
      return Ve(i)(e.currEdges) ? ye((() => {
        const s = 0 < t.operands.length ? t.operands[0] : t.span, u = 1 < t.operands.length ? t.operands[1] : t.span;
        return { line: s.line, column: s.column, endLine: u.endLine, endColumn: u.endColumn };
      })())((n.directed ? "cannot add edge " : "cannot add connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": already exists") : Rn.state((s) => k(
        void 0,
        {
          ...s,
          graphEdges: K(F)(i)({
            id: i,
            from: { node: n.from, port: x },
            to: { node: n.to, port: x },
            label: n.label
          })(s.graphEdges),
          currEdges: K(F)(i)()(s.currEdges)
        }
      ));
    });
  }
  if (t.op.tag === "DelEdge") {
    const n = t.op._1;
    return Yt.bind(Kn)((e) => {
      const r = n.directed ? n.from + "->" + n.to : n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
      return Ve(r)(e.currEdges) ? Rn.state((o) => k(void 0, { ...o, currEdges: gi(F)(r)(o.currEdges) })) : ye((() => {
        const o = 0 < t.operands.length ? t.operands[0] : t.span, i = 1 < t.operands.length ? t.operands[1] : t.span;
        return { line: o.line, column: o.column, endLine: i.endLine, endColumn: i.endColumn };
      })())((n.directed ? "cannot delete edge " : "cannot delete connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": does not exist");
    });
  }
  return t.op.tag === "RepointEdge" ? y5(t)(t.op._1) : fn.pure();
}, x5 = (t) => Yt.bind((() => {
  const n = t.span;
  return Rn.state((e) => k(void 0, { ...e, currentSpan: n }));
})())(() => v5(t)), Rh = (t) => (n) => (e) => Yt.bind(I0(x5)(e))(() => Yt.bind(Kn)((r) => {
  const o = n.tag === "Just" && n._1 !== "" ? n._1 : "kf-" + rn(r.kfCounter);
  if (he((s) => s.id === o, r.keyframes))
    return Yt.bind(Mk(c5)(0 < e.length ? J("Just", e[0]) : x))(() => oo("duplicate frame name " + o));
  const i = {
    ...r,
    keyframes: Et(r.keyframes)({ id: o, nodes: r.currNodes, edges: r.currEdges, kind: t }),
    kfCounter: r.kfCounter + 1 | 0,
    currentKf: J("Just", o),
    scenes: (() => {
      if (r.currentKf.tag === "Nothing")
        return r.scenes;
      if (r.currentKf.tag === "Just")
        return Et(r.scenes)(vs("Structural", { from: r.currentKf._1, to: o, focus: x }));
      f();
    })()
  };
  return Rn.state((s) => k(void 0, i));
})), qg = (t) => (n) => {
  const e = su(n.ops), r = lt(
    (i) => i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge",
    e
  ), o = lt(
    (i) => !(i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge"),
    e
  );
  return 0 < o.length ? Yt.bind((() => {
    const i = o[0].span;
    return Rn.state((s) => k(void 0, { ...s, currentSpan: i }));
  })())(() => oo("still/title blocks hold a still snapshot; they cannot contain movement tokens (`api ~> db`) or dive commands (`into`/`out`)")) : t === "TitleCard" && r.length === 0 ? oo(n.name.tag === "Just" && n.name._1 !== "" ? 'title "' + n.name._1 + '" has an empty body; give it nodes/edges to title, or use a still' : "title has an empty body; give it nodes/edges to title, or use a still") : Yt.bind(Rh(t)(n.name)(r))(() => g5);
}, w5 = (t) => (n) => {
  const e = n.to + "->" + n.from, r = n.from + "->" + n.to, o = n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
  if (Ve(r)(t.currEdges))
    return J("Just", { id: r, direction: ml });
  if (Ve(e)(t.currEdges))
    return J("Just", { id: e, direction: $l });
  const i = Eh(o)(t.graphEdges);
  if (i.tag === "Just")
    return Ve(o)(t.currEdges) ? J(
      "Just",
      { id: o, direction: i._1.from.node === n.from && i._1.to.node === n.to ? ml : $l }
    ) : x;
  if (i.tag === "Nothing")
    return x;
  f();
}, N5 = (t) => (n) => {
  if (n.op.tag === "Token") {
    const e = n.op._1;
    return Yt.bind(Kn)((r) => {
      const o = !cr(e.from)(r.currNodes), i = !cr(e.to)(r.currNodes);
      if (o || i)
        return Yt.bind(ye(Ph(o)(i)(n))(o ? i ? "token references unknown node: " + e.from + ", " + e.to : "token references unknown node: " + e.from : i ? "token references unknown node: " + e.to : "token references unknown node: "))(() => fn.pure({ events: [], firstId: x, lastId: x }));
      const s = w5(r)(e);
      if (s.tag === "Just")
        return d5(t)(W$("SendToken", { from: e.from, to: e.to, edge: s._1.id, direction: s._1.direction, labels: e.labels }));
      if (s.tag === "Nothing")
        return Yt.bind(ye((() => {
          const u = 0 < n.operands.length ? n.operands[0] : n.span, c = 1 < n.operands.length ? n.operands[1] : n.span;
          return { line: u.line, column: u.column, endLine: c.endLine, endColumn: c.endColumn };
        })())("token " + e.from + "→" + e.to + ": no edge between " + e.from + " and " + e.to))(() => fn.pure({
          events: [],
          firstId: x,
          lastId: x
        }));
      f();
    });
  }
  return fn.pure({ events: [], firstId: x, lastId: x });
}, Wg = (t) => (n) => {
  const e = Dt((r) => x, (r) => (o) => J("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return fn.pure({ events: [], firstId: x, lastId: x });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Yt.bind(ps(t)(e._1.head))((o) => Yt.bind(Ac({
      Applicative0: () => zo(ke),
      Bind1: () => Do(ke)
    })((i) => (s) => Yt.bind(ps((() => {
      if (i.lastId.tag === "Just")
        return Xf("After", i.lastId._1);
      if (i.lastId.tag === "Nothing")
        return t;
      f();
    })())(s))((u) => fn.pure({
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
    })))(o)(r))((i) => fn.pure(i)));
  }
  f();
}, T5 = (t) => (n) => {
  const e = Dt((r) => x, (r) => (o) => J("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return fn.pure({ events: [], firstId: x, lastId: x });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Yt.bind(ps(t)(e._1.head))((o) => Yt.bind(J5((() => {
      if (o.firstId.tag === "Just")
        return Xf("With", o.firstId._1);
      if (o.firstId.tag === "Nothing")
        return t;
      f();
    })())(r))((i) => fn.pure({
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
}, ps = (t) => (n) => {
  if (n.tag === "Leaf") {
    const e = n._1;
    return Yt.bind((() => {
      const r = e.span;
      return Rn.state((o) => k(void 0, { ...o, currentSpan: r }));
    })())(() => N5(t)(e));
  }
  if (n.tag === "Seq" || n.tag === "GroupSeq")
    return Wg(t)(n._1);
  if (n.tag === "Par")
    return T5(t)(n._1);
  f();
}, J5 = (t) => Ac({
  Applicative0: () => zo(ke),
  Bind1: () => Do(ke)
})((n) => (e) => Yt.bind(ps(t)(e))((r) => fn.pure({
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
})))({ events: [], firstId: x, lastId: x }), b5 = (t) => Yt.bind(Kn)((n) => {
  if (n.currentKf.tag === "Nothing")
    return oo("flow ops before any structural frame");
  if (n.currentKf.tag === "Just") {
    const e = n.currentKf._1;
    return Yt.bind(ps(Y$)(t))((r) => Yt.bind(Kn)((o) => {
      const i = { ...o, scenes: Et(o.scenes)(vs("DataFlow", { keyframe: e, events: r.events, focus: x })) };
      return Rn.state((s) => k(void 0, i));
    }));
  }
  f();
}), k5 = (t) => (n) => (e) => {
  if (e.tag === "StepStructural")
    return Yt.bind((() => {
      const r = Rh(xs)(n ? x : t)(e._1);
      return e._1.length !== 0 ? r : fn.pure();
    })())(() => fn.pure(!0));
  if (e.tag === "StepFlow") {
    const r = e._1, o = !n && (() => {
      if (t.tag === "Just")
        return t._1 !== "";
      if (t.tag === "Nothing")
        return !1;
      f();
    })();
    return Yt.bind((() => {
      const i = f5(t);
      return o ? i : fn.pure();
    })())(() => Yt.bind(b5(r))(() => fn.pure(n || o)));
  }
  if (e.tag === "StepDive")
    return Yt.bind(l5(e._1))(() => fn.pure(n));
  f();
}, Fh = (t) => (n) => (e) => {
  const r = Dt((o) => x, (o) => (i) => J("Just", { head: o, tail: i }), e);
  if (r.tag === "Nothing")
    return fn.pure();
  if (r.tag === "Just") {
    const o = r._1.head, i = r._1.tail;
    return Yt.bind(Kn)((s) => {
      if (s.error.tag === "Just")
        return fn.pure();
      if (s.error.tag === "Nothing")
        return Yt.bind(k5(t)(n)(o))((u) => Fh(t)(u)(i));
      f();
    });
  }
  f();
}, L5 = (t) => Yt.bind(Kn)((n) => {
  if (n.error.tag === "Just")
    return fn.pure();
  if (n.error.tag === "Nothing") {
    if (t.kind === "AnimatedKeyframe")
      return Fh(t.name)(!1)(Rc(t.ops));
    if (t.kind === "Still")
      return qg(O$)(t);
    if (t.kind === "Title")
      return qg(X$)(t);
  }
  f();
}), Fc = (t) => Yt.bind(a5(t.interiors))(() => Yt.bind(I0(L5)(t.frames))(() => Yt.bind(Kn)((n) => {
  if (n.error.tag === "Just")
    return fn.pure(Nt("Left", n.error._1));
  if (n.error.tag === "Nothing") {
    const e = S5(t.interiors);
    if (e.tag === "Left")
      return fn.pure(Nt("Left", e._1));
    if (e.tag === "Right")
      return fn.pure(Nt("Right", { seed: t.seed, graph: p5(n), keyframes: n.keyframes, scenes: n.scenes, interiors: e._1 }));
  }
  f();
}))), S5 = (t) => {
  const n = Ac(kd)((e) => (r) => {
    const o = Fc(r.doc)(Pc)._1;
    return (() => {
      if (o.tag === "Left") {
        const i = o._1;
        return (s) => Nt("Left", i);
      }
      if (o.tag === "Right") {
        const i = o._1;
        return (s) => s(i);
      }
      f();
    })()((i) => Nt("Right", K(F)(r.node)(i)(e)));
  })(B)(t);
  if (n.tag === "Left")
    return Nt("Left", n._1);
  if (n.tag === "Right")
    return Nt("Right", n._1);
  f();
}, lr = (t, n) => ({ tag: "ParseError", _1: t, _2: n }), S = (t, n, e) => ({ tag: "ParseState", _1: t, _2: n, _3: e }), Ou = (t, n, e) => ({ tag: t, _1: n, _2: e }), C5 = (t) => Ou("More", t), E5 = (t) => Ou("Lift", t), A5 = {
  defer: (t) => {
    const n = $$(t);
    return (e, r, o, i, s) => y$(n)(e, r, o, i, s);
  }
}, Gh = { map: (t) => (n) => (e, r, o, i, s) => r((u) => n(e, r, o, i, (c, a) => r((l) => s(c, t(a))))) }, P5 = {
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
  Functor0: () => Gh
}, R5 = (t) => {
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
          u = !1, c = n.Bind1().Apply0().Functor0().map(lf)(l._1);
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
      C5,
      E5,
      (s, u) => Ou("Stop", s, Nt("Left", u)),
      (s, u) => Ou("Stop", s, Nt("Right", u))
    ));
  };
}, zr = (t, n, e, r, o) => o(t, t._2), F5 = { index: 0, line: 1, column: 1 }, G5 = (t) => {
  const n = R5(t);
  return (e) => (r) => t.Monad0().Bind1().Apply0().Functor0().map(nc)(n(S(e, F5, !1))(r));
}, I5 = /* @__PURE__ */ G5(Vp), Gc = (t, n, e, r, o) => o(S(t._1, t._2, !0), void 0), Ih = {
  apply: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, a) => r((l) => {
      const d = e._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return n(d, r, o, i, (_, g) => r((h) => s(d._3 && !_._3 ? S(_._1, _._2, !0) : _, a(g))));
    })
  )),
  Functor0: () => Gh
}, Bh = { pure: (t) => (n, e, r, o, i) => i(n, t), Apply0: () => Ih }, B5 = {
  bind: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (c, a) => r((l) => n(a)(e._3 && !c._3 ? S(c._1, c._2, !0) : c, r, o, i, s))
  )),
  Apply0: () => Ih
}, H5 = { Applicative0: () => Bh, Bind1: () => B5 }, Ic = (t) => (n, e, r, o, i) => e((s) => zr(
  n,
  e,
  r,
  o,
  (u, c) => e((a) => o(n._3 && !u._3 ? S(u._1, u._2, !0) : u, lr(t, c)))
)), D5 = { empty: /* @__PURE__ */ Ic("No alternative"), Alt0: () => P5 }, z5 = { Applicative0: () => Bh, Plus1: () => D5 }, Q5 = {
  tailRecM: (t) => (n) => (e, r, o, i, s) => {
    const u = (c, a, l) => t(a)(
      c,
      r,
      o,
      i,
      (d, _) => {
        const g = c._3 && !d._3 ? S(d._1, d._2, !0) : d;
        if (_.tag === "Loop")
          return l === 0 ? r((h) => u(g, _._1, 30)) : u(g, _._1, l - 1 | 0);
        if (_.tag === "Done")
          return s(g, _._1);
        f();
      }
    );
    return u(e, n, 30);
  },
  Monad0: () => H5
}, q5 = (t) => (n) => {
  const e = n.Plus1().Alt0(), r = n.Applicative0();
  return (o) => t.tailRecM((i) => t.Monad0().Bind1().bind(e.alt(e.Functor0().map(lf)(o))(r.pure(ni(
    "Done",
    void 0
  ))))((s) => r.pure((() => {
    if (s.tag === "Loop")
      return ni("Loop", Zt("Cons", s._1, i));
    if (s.tag === "Done")
      return ni(
        "Done",
        ((c) => (a) => {
          let l = c, d = a, _ = !0, g;
          for (; _; ) {
            const h = l, m = d;
            if (m.tag === "Nil") {
              _ = !1, g = h;
              continue;
            }
            if (m.tag === "Cons") {
              l = Zt("Cons", m._1, h), d = m._2;
              continue;
            }
            f();
          }
          return g;
        })(Qt)(i)
      );
    f();
  })())))(Qt);
}, Be = /* @__PURE__ */ q5(Q5)(z5), pt = (t) => (n) => {
  const e = Ic("Expected " + n);
  return (r, o, i, s, u) => {
    const c = r._1, a = r._2;
    return o((l) => t(
      S(c, a, !1),
      o,
      i,
      (d, _) => {
        const g = d._3;
        return o((h) => g ? s(d, _) : e(r, o, i, s, u));
      },
      u
    ));
  };
}, yi = (t) => (n, e, r, o, i) => {
  const s = n._3, u = n._1, c = n._2;
  return e((a) => {
    const l = (d, _) => {
      const g = d._3;
      return e((h) => g ? o(S(d._1, d._2, s), _) : i(n, void 0));
    };
    return e((d) => e((_) => t(
      S(u, c, !1),
      e,
      r,
      (g, h) => l(S(g._1, g._2, !1), h),
      (g, h) => e((m) => e((p) => Ic("Negated parser succeeded")(
        g,
        e,
        r,
        l,
        ($, y) => e((v) => i(g._3 && !$._3 ? S($._1, $._2, !0) : $, y))
      )))
    )));
  });
}, W5 = (t) => {
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
              const h = _._3;
              return i((m) => h ? u(_, g) : r._1(o, i, s, u, c));
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
      return Ic("No alternative");
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, Hh = (t) => (n) => (e) => (r, o, i, s, u) => o((c) => o((a) => o((l) => o((d) => t(
  r,
  o,
  i,
  s,
  (_, g) => o((h) => o((m) => {
    const p = r._3 && !_._3 ? S(_._1, _._2, !0) : _;
    return e(
      p,
      o,
      i,
      s,
      ($, y) => o((v) => {
        const N = p._3 && !$._3 ? S($._1, $._2, !0) : $;
        return o((T) => o((b) => {
          const L = r._3 && !N._3 ? S(N._1, N._2, !0) : N;
          return n(
            L,
            o,
            i,
            s,
            (E, C) => o((I) => u(L._3 && !E._3 ? S(E._1, E._2, !0) : E, y))
          );
        }));
      })
    );
  }))
))))), ef = (t) => (n) => (e) => {
  if (n === 10)
    return { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  if (n === 13) {
    const r = U2()(e);
    return r.tag === "Just" && r._1 === 10 ? { index: t.index + 1 | 0, line: t.line, column: t.column } : { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  }
  return n === 9 ? { index: t.index + 1 | 0, line: t.line, column: (t.column + 8 | 0) - Gr(t.column - 1 | 0)(8) | 0 } : { index: t.index + 1 | 0, line: t.line, column: t.column + 1 | 0 };
}, O5 = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const c = r, a = o, l = i, d = mc(a);
    if (d.tag === "Nothing") {
      s = !1, u = c;
      continue;
    }
    if (d.tag === "Just") {
      r = d._1.tail === "" ? ef(c)(d._1.head)(l) : ef(c)(d._1.head)(d._1.tail), o = d._1.tail, i = l;
      continue;
    }
    f();
  }
  return u;
}, At = (t) => (n, e, r, o, i) => {
  const s = mc(n._1);
  if (s.tag === "Nothing")
    return o(n, lr("Unexpected EOF", n._2));
  if (s.tag === "Just") {
    if (s._1.head < 0 || s._1.head > 65535)
      return o(n, lr("Expected Char", n._2));
    if (s._1.head >= 0 && s._1.head <= 65535) {
      const u = Mf(s._1.head);
      return t(u) ? i(S(s._1.tail, ef(n._2)(s._1.head)(s._1.tail), !0), u) : o(n, lr("Predicate unsatisfied", n._2));
    }
  }
  f();
}, Ss = (t, n, e, r, o) => t._1 === "" ? o(S(t._1, t._2, !0), void 0) : r(t, lr("Expected EOF", t._2)), X5 = (t) => (n, e, r, o, i) => {
  const s = t(n._1);
  if (s.tag === "Left")
    return o(n, lr(s._1, n._2));
  if (s.tag === "Right")
    return i(S(s._1.remainder, O5(n._2)(s._1.consumed)(s._1.remainder), s._1.consumed !== ""), s._1.value);
  f();
}, _e = (t) => X5((n) => {
  const e = Io(t)(n);
  return e.tag === "Just" ? Nt("Right", { value: t, consumed: t, remainder: e._1 }) : Nt("Left", "Expected " + ba(t));
}), Y5 = /* @__PURE__ */ At((t) => !0), va = (t, n) => ({ tag: t, _1: n }), H0 = /* @__PURE__ */ W5(Xt), U5 = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, V5 = /* @__PURE__ */ mn(F)(Xt), M5 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, D0 = /* @__PURE__ */ (() => {
  const t = pt(At((r) => r === "}"))("'}'"), n = pt(At((r) => r === "#"))("'#'"), e = At((r) => r === `
` || r === "\r");
  return (r, o, i, s, u) => {
    const c = r._1, a = r._2;
    return o((l) => o((d) => t(
      S(c, a, !1),
      o,
      i,
      (_, g) => o((h) => {
        const m = r._1, p = r._2;
        return o(($) => o((y) => n(
          S(m, p, !1),
          o,
          i,
          (v, N) => o((T) => {
            const b = r._1, L = r._2;
            return o((E) => o((C) => e(
              S(b, L, !1),
              o,
              i,
              (I, z) => o((G) => Ss(r, o, i, s, u)),
              (I, z) => o((G) => u(S(b, L, !1), void 0))
            )));
          }),
          (v, N) => o((T) => u(S(m, p, !1), void 0))
        )));
      }),
      (_, g) => o((h) => u(S(c, a, !1), void 0))
    )));
  };
})(), Re = (t) => (n, e, r, o, i) => e((s) => zr(
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
      (_, g) => e((h) => {
        const m = l._3 && !_._3 ? S(_._1, _._2, !0) : _;
        return e((p) => zr(
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
)), K5 = /* @__PURE__ */ (() => {
  const t = At((n) => n === " " || n === "	" || n === `
` || n === "\r");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? S(u._1, u._2, !0) : u, void 0))
  ));
})(), Dh = (t, n, e, r, o) => n((i) => _e("#")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Be(At((d) => d !== `
`)), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((d) => a(
      l,
      n,
      e,
      r,
      (_, g) => n((h) => o(l._3 && !_._3 ? S(_._1, _._2, !0) : _, void 0))
    ));
  })
)), j5 = /* @__PURE__ */ pt(/* @__PURE__ */ (() => {
  const t = pt(At((e) => e === "}"))("'}'"), n = At((e) => e === `
` || e === "\r");
  return (e, r, o, i, s) => {
    const u = e._1, c = e._2;
    return r((a) => r((l) => t(
      S(u, c, !1),
      r,
      o,
      (d, _) => r((g) => {
        const h = e._1, m = e._2;
        return r((p) => r(($) => Dh(
          S(h, m, !1),
          r,
          o,
          (y, v) => {
            const N = y._3;
            return r((T) => {
              if (N)
                return i(y, v);
              const b = e._1, L = e._2;
              return r((E) => r((C) => n(
                S(b, L, !1),
                r,
                o,
                (I, z) => {
                  const G = I._3;
                  return r((H) => G ? i(I, z) : Ss(e, r, o, i, s));
                },
                (I, z) => r((G) => s(I, void 0))
              )));
            });
          },
          (y, v) => r((N) => s(y, void 0))
        )));
      }),
      (d, _) => r((g) => s(S(u, c, !1), void 0))
    )));
  };
})())("newline or '}' (statements end at the end of the line)"), Je = /* @__PURE__ */ (() => {
  const t = Be((n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => K5(
      S(s, u, !1),
      e,
      r,
      (a, l) => {
        const d = a._3;
        return e((_) => d ? o(a, l) : Dh(n, e, r, o, i));
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
})(), Z5 = /* @__PURE__ */ (() => {
  const t = At((n) => n !== "|");
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => e((a) => _e("\\|")(
      S(s, u, !1),
      e,
      r,
      (l, d) => e((_) => e((g) => t(n, e, r, o, (h, m) => e((p) => i(h, Ji(m)))))),
      (l, d) => e((_) => i(l, "|"))
    )));
  };
})(), tL = /* @__PURE__ */ pt(/* @__PURE__ */ H0([
  (t, n, e, r, o) => n((i) => {
    const s = t._3;
    return _e("->")(t, n, e, (u, c) => r(S(u._1, u._2, s), c), (u, c) => n((a) => o(u, !0)));
  }),
  (t, n, e, r, o) => n((i) => {
    const s = t._3;
    return _e("--")(t, n, e, (u, c) => r(S(u._1, u._2, s), c), (u, c) => n((a) => o(u, !1)));
  })
]))("edge arrow '->' or '--'"), nL = (t) => t !== `
` && t !== "\r" && t !== "#" && t !== "}" && t !== "{", Bc = /* @__PURE__ */ At((t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z"), eL = (t) => t === " " || t === "	" || t === "\r", rL = (t) => so(pn(ar(eL)(pn(vr(t))).rest)), z0 = (t) => t === `
` || t === "\r" || t === "#" || t === "}", oL = (t) => t === `
` || t === "\r" || t === "#" || t === "}" || t === "{", iL = (t) => t !== "{" && t !== `
` && t !== "\r", Og = (t) => pc(t) === "", sL = (t) => pn(ar(Og)(pn(ar(Og)(t).rest)).rest), uL = (t) => ((e) => (r) => {
  let o = e, i = r, s = !0, u;
  for (; s; ) {
    const c = o, l = Dt((d) => x, (d) => (_) => J("Just", { head: d, tail: _ }), i);
    if (l.tag === "Just" && (l._1.head === " " || l._1.head === "	")) {
      o = c + 1 | 0, i = l._1.tail;
      continue;
    }
    s = !1, u = c;
  }
  return u;
})(0)(vr(t)), cL = (t) => {
  const n = Dt(
    (e) => x,
    (e) => (r) => J("Just", { head: e, tail: r }),
    D(uL)(lt((e) => pc(e) !== "", t))
  );
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return w(U5)(n._1.head)(n._1.tail);
  f();
}, aL = /* @__PURE__ */ (() => {
  const t = pt(At((n) => n === "-"))("'-'");
  return (n, e, r, o, i) => {
    const s = n._3;
    return e((u) => t(
      n,
      e,
      r,
      (c, a) => o(S(c._1, c._2, s), a),
      (c, a) => e((l) => {
        const d = yi((() => {
          const g = pt(At((m) => m === ">"))("'>'"), h = pt(At((m) => m === "-"))("'-'");
          return (m, p, $, y, v) => {
            const N = m._1, T = m._2;
            return p((b) => g(
              S(N, T, !1),
              p,
              $,
              (L, E) => {
                const C = L._3;
                return p((I) => C ? y(L, E) : h(m, p, $, y, v));
              },
              v
            ));
          };
        })()), _ = n._3 && !c._3 ? S(c._1, c._2, !0) : c;
        return e((g) => d(
          _,
          e,
          r,
          (h, m) => o(S(h._1, h._2, s), m),
          (h, m) => e((p) => i(_._3 && !h._3 ? S(h._1, h._2, !0) : h, "-"))
        ));
      })
    ));
  };
})(), tn = /* @__PURE__ */ (() => {
  const t = Be(At((n) => n === " " || n === "	"));
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => i(n._3 && !u._3 ? S(u._1, u._2, !0) : u, void 0))
  ));
})(), Qo = /* @__PURE__ */ (() => {
  const t = At((n) => n === " " || n === "	");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => tn(n._3 && !u._3 ? S(u._1, u._2, !0) : u, e, r, o, i))
  ));
})(), zh = (t, n, e, r, o) => n((i) => n((s) => tn(
  t,
  n,
  e,
  r,
  (u, c) => n((a) => n((l) => {
    const d = t._3 && !u._3 ? S(u._1, u._2, !0) : u;
    return D0(
      d,
      n,
      e,
      r,
      (_, g) => n((h) => o(d._3 && !_._3 ? S(_._1, _._2, !0) : _, g))
    );
  }))
))), Qh = (t, n, e, r, o) => n((i) => tn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = pt(At((d) => d === "-"))("'-'"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((d) => {
      const _ = (m, p) => n(($) => (() => {
        if (p.tag === "Just")
          return (y, v, N, T, b) => v((L) => tL(
            y,
            v,
            N,
            T,
            (E, C) => v((I) => b(E, J("Just", C)))
          ));
        if (p.tag === "Nothing")
          return (y, v, N, T, b) => b(y, x);
        f();
      })()(l._3 && !m._3 ? S(m._1, m._2, !0) : m, n, e, r, o)), g = l._1, h = l._2;
      return n((m) => n((p) => a(
        S(g, h, !1),
        n,
        e,
        ($, y) => n((v) => _(l, x)),
        ($, y) => n((v) => _(S(g, h, !1), J("Just", y)))
      )));
    });
  })
)), fL = (t) => {
  const n = Io("Expected ")(t), e = (() => {
    if (n.tag === "Nothing")
      return t;
    if (n.tag === "Just")
      return n._1;
    f();
  })();
  return e === "'{'" ? "Open the block with `{`." : e === "integer (seed value)" ? "Put an integer after `seed`." : e === "closing '}'" ? "Close this block with `}`." : e === `closing '"' (unterminated string)` ? 'This string is unterminated; close it with `"`.' : e === "closing '|'" ? "Close this pipe label with `|`." : e === "space after '+'" ? "Put a space after `+`: `+ api: API`." : e === "node identifier after '+'" ? "Put a node id after `+`: `+ api: API`." : e === "space after '-'" ? "Put a space after `-`: `- api`." : e === "node identifier after '-'" ? "Put a node id after `-`: `- api`." : e === "space after '~'" ? "Put a space after `~`: `~ api -> db => api -> cache`." : e === "node identifier" ? "Put a node identifier here." : e === "space after 'inside'" ? "Put a space after `inside`: `inside api { ... }`." : e === "node identifier after 'inside'" ? "Tell `inside` which node owns this interior: `inside api { ... }`." : e === "source node identifier after 'via'" ? "Put the source node after `via`: `via a b`." : e === "target node identifier after 'via'" ? "Put the second endpoint after `via`: `via a b`." : e === "source node identifier" ? "Put a source node identifier here." : e === "new source node identifier" ? "Put the new source node identifier after `=>`." : e === "new target node identifier" ? "Put the new target node identifier after the replacement arrow." : e === "edge arrow '->' or '--'" ? "Use `->` for a directed edge or `--` for an undirected edge." : e === "source edge arrow '->'" ? "Use `->` in the edge you are changing: `~ api -> db => api -> cache`." : e === "replacement edge arrow '->'" ? "Use `->` in the replacement edge: `~ api -> db => api -> cache`." : e === "repoint separator '=>'" ? "Use `=>` before the replacement edge: `~ api -> db => api -> cache`." : e === "target node identifier" ? "Put a target node after the arrow." : e === "'~>'" ? "Use `~>` for movement from left to right." : e === "'<~'" ? "Use `<~` for movement from right to left." : e === "'->' or '<-'" ? "Use `~>` / `<~` for movement tokens." : e === 'label ("…", : rest-of-line, or |…|)' ? 'label must use `: text`, `"text"`, or `|multi-line|`.' : e === "attribute key" ? "Start each attribute with a name, like `shape`." : e === "':'" ? "Put `:` between the attribute name and value: `{shape: cylinder}`." : e === "attribute value" ? "Put an attribute value after `:`." : e === "closing '}' for attributes" ? "Close the attribute block with `}`." : e === "space after 'into'" ? "Put a space after `into`: `into api`." : e === "node identifier after 'into'" ? "Tell `into` which node to dive into." : e === "newline or '}' (statements end at the end of the line)" ? "This statement has extra text. Put the next statement on a new line or close the block with `}`." : e === "statement (+ node, - node, + edge, - edge, into, out, or 'a ~> b'/'a <~ b')" ? "I don't recognize this statement. Start with `+`, `-`, `~`, `into`, `out`, `par`, `seq`, or movement like `api ~> db`." : e === "'scene', 'still', 'title', 'inside', a statement, or end of input" ? "Start with a statement like `+ api: API`, or a block with `scene`, `still`, `title`, or `inside`." : e;
}, lL = (t) => {
  const n = pc(t), e = Io('"')(n), r = (() => {
    if (e.tag === "Just")
      return _$('"')(e._1);
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
}, qh = (t) => (n) => t !== "AnimatedSurface" && n.statements.length !== 0 ? {
  ...n,
  frames: Et(n.frames)((() => {
    if (t === "StillSurface")
      return { name: x, ops: Hr("Seq", n.statements), kind: B0 };
    if (t === "SequenceSurface")
      return { name: x, ops: Hr("Seq", n.statements), kind: Wu };
    if (t === "AnimatedSurface")
      return { name: x, ops: Hr("Seq", n.statements), kind: Wu };
    f();
  })()),
  statements: []
} : n, gL = /* @__PURE__ */ (() => {
  const t = pt(At((n) => n === "\\"))("'\\\\'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const l = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((d) => Y5(
        l,
        e,
        r,
        o,
        (_, g) => e((h) => i(
          l._3 && !_._3 ? S(_._1, _._2, !0) : _,
          g === "n" ? `
` : g === "t" ? "	" : g === "r" ? "\r" : g
        ))
      ));
    })
  ));
})(), dL = /* @__PURE__ */ (() => {
  const t = At((n) => n !== '"' && n !== "\\" && n !== `
`);
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => gL(S(s, u, !1), e, r, (a, l) => e((d) => t(n, e, r, o, i)), i));
  };
})(), _L = /* @__PURE__ */ (() => {
  const t = pt(At((n) => n === '"'))(`'"'`);
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const l = Be(dL), d = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((_) => l(
        d,
        e,
        r,
        o,
        (g, h) => e((m) => {
          const p = pt(pt(At((y) => y === '"'))(`'"'`))(`closing '"' (unterminated string)`), $ = d._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return e((y) => p(
            $,
            e,
            r,
            o,
            (v, N) => e((T) => i(
              $._3 && !v._3 ? S(v._1, v._2, !0) : v,
              so(Ot(gn.foldr, h))
            ))
          ));
        })
      ));
    })
  ));
})(), hL = { frames: [], statements: [] }, pL = (t) => {
  const n = sL(Ns(`
`)(t));
  return Qr(`
`)(D(rL)(D(di(cL(n)))(n)));
}, mL = /* @__PURE__ */ (() => {
  const t = pt(At((n) => n === "|"))("'|'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const l = Be(Z5), d = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((_) => l(
        d,
        e,
        r,
        o,
        (g, h) => e((m) => {
          const p = pt(pt(At((y) => y === "|"))("'|'"))("closing '|'"), $ = d._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return e((y) => p(
            $,
            e,
            r,
            o,
            (v, N) => e((T) => i(
              $._3 && !v._3 ? S(v._1, v._2, !0) : v,
              pL(Qr("")(Ot(gn.foldr, h)))
            ))
          ));
        })
      ));
    })
  ));
})(), ms = /* @__PURE__ */ At((t) => t >= "0" && t <= "9"), $L = /* @__PURE__ */ (() => {
  const t = pt(At((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((c) => Bc(
      S(s, u, !1),
      e,
      r,
      (a, l) => {
        const d = a._3;
        return e((_) => {
          if (d)
            return o(a, l);
          const g = n._1, h = n._2;
          return e((m) => ms(
            S(g, h, !1),
            e,
            r,
            (p, $) => {
              const y = p._3;
              return e((v) => {
                if (y)
                  return o(p, $);
                const N = n._1, T = n._2;
                return e((b) => t(
                  S(N, T, !1),
                  e,
                  r,
                  (L, E) => {
                    const C = L._3;
                    return e((I) => C ? o(L, E) : aL(n, e, r, o, i));
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
})(), Yn = /* @__PURE__ */ (() => {
  const t = pt(At((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => e((s) => {
    const u = (l, d) => e((_) => {
      const g = Be($L), h = n._3 && !l._3 ? S(l._1, l._2, !0) : l;
      return e((m) => g(
        h,
        e,
        r,
        o,
        (p, $) => e((y) => i(
          h._3 && !p._3 ? S(p._1, p._2, !0) : p,
          Ji(d) + so(Ot(gn.foldr, $))
        ))
      ));
    }), c = n._1, a = n._2;
    return e((l) => Bc(
      S(c, a, !1),
      e,
      r,
      (d, _) => {
        const g = d._3;
        return e((h) => g ? o(d, _) : t(n, e, r, o, u));
      },
      u
    ));
  });
})(), Xg = (t, n, e, r, o) => n((i) => tn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = pt(Yn)("attribute key"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((d) => a(
      l,
      n,
      e,
      r,
      (_, g) => n((h) => {
        const m = l._3 && !_._3 ? S(_._1, _._2, !0) : _;
        return n((p) => tn(
          m,
          n,
          e,
          r,
          ($, y) => n((v) => {
            const N = pt(pt(At((b) => b === ":"))("':'"))("':'"), T = m._3 && !$._3 ? S($._1, $._2, !0) : $;
            return n((b) => N(
              T,
              n,
              e,
              r,
              (L, E) => n((C) => {
                const I = T._3 && !L._3 ? S(L._1, L._2, !0) : L;
                return n((z) => tn(
                  I,
                  n,
                  e,
                  r,
                  (G, H) => n((M) => {
                    const Z = pt(Yn)("attribute value"), Y = I._3 && !G._3 ? S(G._1, G._2, !0) : G;
                    return n((q) => Z(
                      Y,
                      n,
                      e,
                      r,
                      (A, P) => n((W) => {
                        const R = Y._3 && !A._3 ? S(A._1, A._2, !0) : A;
                        return n((Q) => tn(
                          R,
                          n,
                          e,
                          r,
                          (X, tt) => n((V) => o(R._3 && !X._3 ? S(X._1, X._2, !0) : X, k(g, P)))
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
)), yL = /* @__PURE__ */ Hh(/* @__PURE__ */ (() => {
  const t = pt(At((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (c, a) => e((l) => e((d) => {
      const _ = n._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return tn(_, e, r, o, (g, h) => e((m) => i(_._3 && !g._3 ? S(g._1, g._2, !0) : g, h)));
    }))
  )));
})())(/* @__PURE__ */ pt(/* @__PURE__ */ (() => {
  const t = pt(At((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => tn(
    n,
    e,
    r,
    o,
    (c, a) => e((l) => e((d) => {
      const _ = n._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return t(_, e, r, o, (g, h) => e((m) => i(_._3 && !g._3 ? S(g._1, g._2, !0) : g, h)));
    }))
  )));
})())("closing '}' for attributes"))(/* @__PURE__ */ (() => {
  const t = pt(At((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => {
    const u = (l, d) => e((_) => (() => {
      if (d.tag === "Just")
        return (g, h, m, p, $) => $(g, B);
      if (d.tag === "Nothing")
        return (g, h, m, p, $) => h((y) => Xg(
          g,
          h,
          m,
          p,
          (v, N) => h((T) => {
            const b = Be((() => {
              const E = pt(At((C) => C === ","))("','");
              return (C, I, z, G, H) => {
                const M = C._3;
                return I((Z) => I((Y) => I((q) => I((A) => I((P) => I((W) => tn(
                  C,
                  I,
                  z,
                  (R, Q) => G(S(R._1, R._2, M), Q),
                  (R, Q) => I((X) => I((tt) => {
                    const V = C._3 && !R._3 ? S(R._1, R._2, !0) : R;
                    return E(
                      V,
                      I,
                      z,
                      (O, j) => G(S(O._1, O._2, M), j),
                      (O, j) => I((rt) => {
                        const et = V._3 && !O._3 ? S(O._1, O._2, !0) : O;
                        return I((ft) => I((ct) => {
                          const dt = C._3 && !et._3 ? S(et._1, et._2, !0) : et;
                          return tn(
                            dt,
                            I,
                            z,
                            (Bt, St) => G(S(Bt._1, Bt._2, M), St),
                            (Bt, St) => I((en) => {
                              const _t = dt._3 && !Bt._3 ? S(Bt._1, Bt._2, !0) : Bt;
                              return I((bt) => I((ht) => {
                                const $t = C._3 && !_t._3 ? S(_t._1, _t._2, !0) : _t;
                                return Xg(
                                  $t,
                                  I,
                                  z,
                                  (st, gt) => G(S(st._1, st._2, M), gt),
                                  (st, gt) => I((it) => H($t._3 && !st._3 ? S(st._1, st._2, !0) : st, gt))
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
            return h((E) => b(
              L,
              h,
              m,
              p,
              (C, I) => h((z) => $(
                L._3 && !C._3 ? S(C._1, C._2, !0) : C,
                V5([N, ...Ot(gn.foldr, I)])
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
      (_, g) => e((h) => u(n, x)),
      (_, g) => e((h) => u(S(c, a, !1), J("Just", g)))
    )));
  });
})()), vL = (t, n, e, r, o) => n((i) => tn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = pt(At((d) => d === "{"))("'{'"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((d) => {
      const _ = (m, p) => n(($) => (() => {
        if (p.tag === "Just")
          return yL;
        if (p.tag === "Nothing")
          return (y, v, N, T, b) => b(y, B);
        f();
      })()(l._3 && !m._3 ? S(m._1, m._2, !0) : m, n, e, r, o)), g = l._1, h = l._2;
      return n((m) => n((p) => a(
        S(g, h, !1),
        n,
        e,
        ($, y) => n((v) => _(l, x)),
        ($, y) => n((v) => _(S(g, h, !1), J("Just", y)))
      )));
    });
  })
)), xL = (t) => (n) => (e) => (r, o, i, s, u) => o((c) => tn(
  r,
  o,
  i,
  s,
  (a, l) => o((d) => {
    const _ = Re(pt(Yn)("target node identifier")), g = r._3 && !a._3 ? S(a._1, a._2, !0) : a;
    return o((h) => _(
      g,
      o,
      i,
      s,
      (m, p) => o(($) => u(
        g._3 && !m._3 ? S(m._1, m._2, !0) : m,
        { op: yr("DelEdge", { from: t, to: p._1, directed: e }), operands: [n, p._2] }
      ))
    ));
  })
)), wL = (t, n, e, r, o) => n((i) => zr(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((l) => {
      const d = a._3;
      return n((_) => Yn(
        a,
        n,
        e,
        (g, h) => r(S(g._1, g._2, d), h),
        (g, h) => n((m) => {
          const p = a._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return n(($) => tn(
            p,
            n,
            e,
            (y, v) => r(S(y._1, y._2, d), v),
            (y, v) => n((N) => {
              const T = p._3 && !y._3 ? S(y._1, y._2, !0) : y;
              return n((b) => {
                const L = (I, z) => n((G) => {
                  const H = T._3 && !I._3 ? S(I._1, I._2, !0) : I;
                  return n((M) => r(a._3 && !H._3 ? S(H._1, H._2, !0) : H, lr("Use `~>` / `<~` for movement tokens.", u)));
                }), E = T._1, C = T._2;
                return n((I) => _e("->")(
                  S(E, C, !1),
                  n,
                  e,
                  (z, G) => {
                    const H = z._3;
                    return n((M) => H ? r(S(z._1, z._2, d), G) : _e("<-")(T, n, e, (Z, Y) => r(S(Z._1, Z._2, d), Y), L));
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
)), NL = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => Re(Yn)(
    t,
    n,
    e,
    (c, a) => r(S(c._1, c._2, s), a),
    (c, a) => n((l) => {
      const d = t._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return n((_) => tn(
        d,
        n,
        e,
        (g, h) => r(S(g._1, g._2, s), h),
        (g, h) => n((m) => {
          const p = pt(At((y) => y === "~"))("'~'"), $ = d._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return n((y) => {
            const v = (b, L) => n((E) => {
              const C = $._3 && !b._3 ? S(b._1, b._2, !0) : b;
              return n((I) => {
                const z = a._1, G = a._2, H = t._3 && !C._3 ? S(C._1, C._2, !0) : C;
                return n((M) => tn(
                  H,
                  n,
                  e,
                  r,
                  (Z, Y) => n((q) => {
                    const A = pt(At((R) => R === "~"))("'~'"), P = pt(At((R) => R === "<"))("'<'"), W = H._3 && !Z._3 ? S(Z._1, Z._2, !0) : Z;
                    return n((R) => {
                      const Q = (V, O) => n((j) => {
                        const rt = O === "~" ? pt(_e("~>"))("'~>'") : pt(_e("<~"))("'<~'"), et = W._3 && !V._3 ? S(V._1, V._2, !0) : V;
                        return n((ft) => rt(
                          et,
                          n,
                          e,
                          r,
                          (ct, dt) => n((Bt) => o(
                            et._3 && !ct._3 ? S(ct._1, ct._2, !0) : ct,
                            k(z, k(G, dt))
                          ))
                        ));
                      }), X = W._1, tt = W._2;
                      return n((V) => A(
                        S(X, tt, !1),
                        n,
                        e,
                        (O, j) => {
                          const rt = O._3;
                          return n((et) => rt ? r(W, j) : P(W, n, e, (ft, ct) => r(W, ct), (ft, ct) => Q(W, ct)));
                        },
                        (O, j) => Q(W, j)
                      ));
                    });
                  })
                ));
              });
            }), N = $._1, T = $._2;
            return n((b) => p(
              S(N, T, !1),
              n,
              e,
              (L, E) => {
                const C = L._3;
                return n((I) => C ? r(S($._1, $._2, s), E) : n((z) => _e("<~")(
                  $,
                  n,
                  e,
                  (G, H) => r(S($._1, $._2, s), H),
                  (G, H) => n((M) => v($))
                )));
              },
              (L, E) => v($)
            ));
          });
        })
      ));
    })
  ));
}), TL = /* @__PURE__ */ (() => {
  const t = pt(At((n) => n === "~"))("'~'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const l = pt(Qo)("space after '~'"), d = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((_) => l(
        d,
        e,
        r,
        o,
        (g, h) => e((m) => {
          const p = Re(pt(Yn)("source node identifier")), $ = d._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return e((y) => p(
            $,
            e,
            r,
            o,
            (v, N) => e((T) => {
              const b = N._1, L = N._2, E = $._3 && !v._3 ? S(v._1, v._2, !0) : v;
              return e((C) => tn(
                E,
                e,
                r,
                o,
                (I, z) => e((G) => {
                  const H = pt(_e("->"))("source edge arrow '->'"), M = E._3 && !I._3 ? S(I._1, I._2, !0) : I;
                  return e((Z) => H(
                    M,
                    e,
                    r,
                    o,
                    (Y, q) => e((A) => {
                      const P = M._3 && !Y._3 ? S(Y._1, Y._2, !0) : Y;
                      return e((W) => tn(
                        P,
                        e,
                        r,
                        o,
                        (R, Q) => e((X) => {
                          const tt = Re(pt(Yn)("target node identifier")), V = P._3 && !R._3 ? S(R._1, R._2, !0) : R;
                          return e((O) => tt(
                            V,
                            e,
                            r,
                            o,
                            (j, rt) => e((et) => {
                              const ft = rt._1, ct = rt._2, dt = V._3 && !j._3 ? S(j._1, j._2, !0) : j;
                              return e((Bt) => tn(
                                dt,
                                e,
                                r,
                                o,
                                (St, en) => e((_t) => {
                                  const bt = pt(_e("=>"))("repoint separator '=>'"), ht = dt._3 && !St._3 ? S(St._1, St._2, !0) : St;
                                  return e(($t) => bt(
                                    ht,
                                    e,
                                    r,
                                    o,
                                    (st, gt) => e((it) => {
                                      const at = ht._3 && !st._3 ? S(st._1, st._2, !0) : st;
                                      return e((Tt) => tn(
                                        at,
                                        e,
                                        r,
                                        o,
                                        (wt, Ft) => e((Vt) => {
                                          const se = Re(pt(Yn)("new source node identifier")), zn = at._3 && !wt._3 ? S(wt._1, wt._2, !0) : wt;
                                          return e((Qn) => se(
                                            zn,
                                            e,
                                            r,
                                            o,
                                            (It, Pt) => e((ue) => {
                                              const qn = Pt._1, Wn = Pt._2, Sn = zn._3 && !It._3 ? S(It._1, It._2, !0) : It;
                                              return e((Ye) => tn(
                                                Sn,
                                                e,
                                                r,
                                                o,
                                                (Kt, yn) => e((Z0) => {
                                                  const wn = pt(_e("->"))("replacement edge arrow '->'"), On = Sn._3 && !Kt._3 ? S(Kt._1, Kt._2, !0) : Kt;
                                                  return e((xr) => wn(
                                                    On,
                                                    e,
                                                    r,
                                                    o,
                                                    (wr, qr) => e((Ue) => {
                                                      const Wr = On._3 && !wr._3 ? S(wr._1, wr._2, !0) : wr;
                                                      return e((nr) => tn(
                                                        Wr,
                                                        e,
                                                        r,
                                                        o,
                                                        ($e, Si) => e((Ci) => {
                                                          const Ei = Re(pt(Yn)("new target node identifier")), qo = Wr._3 && !$e._3 ? S($e._1, $e._2, !0) : $e;
                                                          return e((Cs) => Ei(
                                                            qo,
                                                            e,
                                                            r,
                                                            o,
                                                            (fo, Ai) => e((tl) => i(
                                                              qo._3 && !fo._3 ? S(fo._1, fo._2, !0) : fo,
                                                              {
                                                                op: yr("RepointEdge", { from: b, to: ft, newFrom: qn, newTo: Ai._1 }),
                                                                operands: [L, ct, Wn, Ai._2]
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
})(), JL = (t, n, e, r, o) => n((i) => ms(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = Be(ms), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((d) => a(
      l,
      n,
      e,
      r,
      (_, g) => n((h) => {
        const m = Rm(Ji(u) + so(Ot(
          gn.foldr,
          g
        )));
        return (() => {
          if (m.tag === "Just") {
            const p = m._1;
            return ($, y, v, N, T) => T($, p);
          }
          if (m.tag === "Nothing")
            return (p, $, y, v, N) => N(p, 0);
          f();
        })()(l._3 && !_._3 ? S(_._1, _._2, !0) : _, n, e, r, o);
      })
    ));
  })
)), bL = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => _e(t)(
    n,
    e,
    r,
    (c, a) => o(S(c._1, c._2, s), a),
    (c, a) => e((l) => {
      const d = yi((() => {
        const g = pt(At((m) => m === "_"))("'_'"), h = pt(At((m) => m === "-"))("'-'");
        return (m, p, $, y, v) => {
          const N = m._1, T = m._2;
          return p((b) => Bc(
            S(N, T, !1),
            p,
            $,
            (L, E) => {
              const C = L._3;
              return p((I) => {
                if (C)
                  return y(L, E);
                const z = m._1, G = m._2;
                return p((H) => ms(
                  S(z, G, !1),
                  p,
                  $,
                  (M, Z) => {
                    const Y = M._3;
                    return p((q) => {
                      if (Y)
                        return y(M, Z);
                      const A = m._1, P = m._2;
                      return p((W) => g(
                        S(A, P, !1),
                        p,
                        $,
                        (R, Q) => {
                          const X = R._3;
                          return p((tt) => X ? y(R, Q) : h(m, p, $, y, v));
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
        (h, m) => o(S(h._1, h._2, s), m),
        (h, m) => e((p) => {
          const $ = _._3 && !h._3 ? S(h._1, h._2, !0) : h;
          return e((y) => Je(
            $,
            e,
            r,
            (v, N) => o(S(v._1, v._2, s), N),
            (v, N) => e((T) => i($._3 && !v._3 ? S(v._1, v._2, !0) : v, t))
          ));
        })
      ));
    })
  ));
}, Ie = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => _e(t)(
    n,
    e,
    r,
    (c, a) => o(S(c._1, c._2, s), a),
    (c, a) => e((l) => {
      const d = yi((() => {
        const g = pt(At((m) => m === "_"))("'_'"), h = pt(At((m) => m === "-"))("'-'");
        return (m, p, $, y, v) => {
          const N = m._1, T = m._2;
          return p((b) => Bc(
            S(N, T, !1),
            p,
            $,
            (L, E) => {
              const C = L._3;
              return p((I) => {
                if (C)
                  return y(L, E);
                const z = m._1, G = m._2;
                return p((H) => ms(
                  S(z, G, !1),
                  p,
                  $,
                  (M, Z) => {
                    const Y = M._3;
                    return p((q) => {
                      if (Y)
                        return y(M, Z);
                      const A = m._1, P = m._2;
                      return p((W) => g(
                        S(A, P, !1),
                        p,
                        $,
                        (R, Q) => {
                          const X = R._3;
                          return p((tt) => X ? y(R, Q) : h(m, p, $, y, v));
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
        (h, m) => o(S(h._1, h._2, s), m),
        (h, m) => e((p) => i(_._3 && !h._3 ? S(h._1, h._2, !0) : h, void 0))
      ));
    })
  ));
}, kL = (t, n, e, r, o) => n((i) => Ie("into")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = pt(Qo)("space after 'into'"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((d) => a(
      l,
      n,
      e,
      r,
      (_, g) => n((h) => {
        const m = Re(pt(Yn)("node identifier after 'into'")), p = l._3 && !_._3 ? S(_._1, _._2, !0) : _;
        return n(($) => m(
          p,
          n,
          e,
          r,
          (y, v) => n((N) => o(
            p._3 && !y._3 ? S(y._1, y._2, !0) : y,
            { op: yr("Enter", { id: v._1 }), operands: [v._2] }
          ))
        ));
      })
    ));
  })
)), LL = (t, n, e, r, o) => n((i) => Ie("out")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => o(t._3 && !s._3 ? S(s._1, s._2, !0) : s, { op: t5, operands: [] }))
)), SL = (t, n, e, r, o) => n((i) => Ie("seed")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((l) => tn(
      a,
      n,
      e,
      r,
      (d, _) => n((g) => {
        const h = pt(JL)("integer (seed value)"), m = a._3 && !d._3 ? S(d._1, d._2, !0) : d;
        return n((p) => h(
          m,
          n,
          e,
          r,
          ($, y) => n((v) => {
            const N = m._3 && !$._3 ? S($._1, $._2, !0) : $;
            return n((T) => Je(
              N,
              n,
              e,
              r,
              (b, L) => n((E) => o(N._3 && !b._3 ? S(b._1, b._2, !0) : b, y))
            ));
          })
        ));
      })
    ));
  })
)), Wh = (t, n, e, r, o) => {
  const i = t._3;
  return n((s) => Ie("diagram")(
    t,
    n,
    e,
    (u, c) => r(S(u._1, u._2, i), c),
    (u, c) => n((a) => {
      const l = pt(Qo)("space after 'diagram'"), d = t._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return n((_) => l(
        d,
        n,
        e,
        (g, h) => r(S(g._1, g._2, i), h),
        (g, h) => n((m) => {
          const p = pt(Ie("sequence"))("diagram mode"), $ = d._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return n((y) => p(
            $,
            n,
            e,
            (v, N) => r(S(v._1, v._2, i), N),
            (v, N) => n((T) => {
              const b = $._3 && !v._3 ? S(v._1, v._2, !0) : v;
              return n((L) => zh(
                b,
                n,
                e,
                (E, C) => r(S(E._1, E._2, i), C),
                (E, C) => n((I) => o(
                  b._3 && !E._3 ? S(E._1, E._2, !0) : E,
                  Zk
                ))
              ));
            })
          ));
        })
      ));
    })
  ));
}, Oh = (t, n, e, r, o) => {
  const i = t._3;
  return n((s) => Ie("still")(
    t,
    n,
    e,
    (u, c) => r(S(u._1, u._2, i), c),
    (u, c) => n((a) => {
      const l = t._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return n((d) => zh(
        l,
        n,
        e,
        (_, g) => r(S(_._1, _._2, i), g),
        (_, g) => n((h) => o(l._3 && !_._3 ? S(_._1, _._2, !0) : _, jk))
      ));
    })
  ));
}, Xh = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => Oh(
    S(i, s, !1),
    n,
    e,
    (c, a) => {
      const l = c._3;
      return n((d) => l ? r(c, a) : Wh(t, n, e, r, o));
    },
    o
  ));
}, CL = (t) => (n, e, r, o, i) => e((s) => zr(
  n,
  e,
  r,
  o,
  (u, c) => e((a) => {
    const l = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
    return e((d) => {
      const _ = l._3;
      return Xh(
        l,
        e,
        r,
        (g, h) => o(S(g._1, g._2, _), h),
        (g, h) => e((m) => o(
          l._3 && !g._3 ? S(g._1, g._2, !0) : g,
          lr(
            (() => {
              if (t === "AnimatedSurface")
                return "Put diagram mode headers at the top of the document.";
              if (t === "AnimatedSurface")
                return "This document already declares `animation`; choose one diagram mode.";
              if (t === "StillSurface")
                return "This document already declares `still`; choose one diagram mode.";
              if (t === "SequenceSurface")
                return "This document already declares `diagram sequence`; choose one diagram mode.";
              f();
            })(),
            c
          )
        ))
      );
    });
  })
)), EL = (t) => (n, e, r, o, i) => e((s) => zr(
  n,
  e,
  r,
  o,
  (u, c) => e((a) => {
    const l = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
    return e((d) => {
      const _ = (m, p) => e(($) => (() => {
        if (p.tag === "Just") {
          const y = (() => {
            if (t === "AnimatedSurface")
              return "This document already declares `animation`; choose one diagram mode.";
            if (t === "StillSurface")
              return "This document already declares `still`; choose one diagram mode.";
            if (t === "SequenceSurface")
              return "This document already declares `diagram sequence`; choose one diagram mode.";
            f();
          })();
          return (v, N, T, b, L) => b(v, lr(y, c));
        }
        if (p.tag === "Nothing")
          return (y, v, N, T, b) => b(y, void 0);
        f();
      })()(l._3 && !m._3 ? S(m._1, m._2, !0) : m, e, r, o, i)), g = l._1, h = l._2;
      return e((m) => e((p) => Xh(
        S(g, h, !1),
        e,
        r,
        ($, y) => {
          const v = $._3;
          return e((N) => v ? o($, y) : _(l, x));
        },
        ($, y) => e((v) => _($, J("Just", y)))
      )));
    });
  })
)), AL = (t, n, e, r, o) => n((i) => {
  const s = (a, l) => n((d) => {
    const _ = t._3 && !a._3 ? S(a._1, a._2, !0) : a;
    return n((g) => Je(
      _,
      n,
      e,
      r,
      (h, m) => n((p) => {
        const $ = _._3 && !h._3 ? S(h._1, h._2, !0) : h;
        return n((y) => EL(l)(
          $,
          n,
          e,
          r,
          (v, N) => n((T) => o($._3 && !v._3 ? S(v._1, v._2, !0) : v, l))
        ));
      })
    ));
  }), u = t._1, c = t._2;
  return n((a) => Oh(
    S(u, c, !1),
    n,
    e,
    (l, d) => {
      const _ = l._3;
      return n((g) => _ ? r(l, d) : Wh(t, n, e, r, s));
    },
    s
  ));
}), PL = (t, n, e, r, o) => n((i) => {
  const s = (a, l) => n((d) => o(
    a,
    (() => {
      if (l.tag === "Nothing")
        return Kk;
      if (l.tag === "Just")
        return l._1;
      f();
    })()
  )), u = t._1, c = t._2;
  return n((a) => n((l) => AL(
    S(u, c, !1),
    n,
    e,
    (d, _) => {
      const g = d._3;
      return n((h) => g ? r(d, _) : s(t, x));
    },
    (d, _) => n((g) => s(d, J("Just", _)))
  )));
}), RL = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => tn(
    t,
    n,
    e,
    (c, a) => r(S(c._1, c._2, s), a),
    (c, a) => n((l) => Ie("via")(
      t._3 && !c._3 ? S(c._1, c._2, !0) : c,
      n,
      e,
      (d, _) => r(S(d._1, d._2, s), _),
      (d, _) => n((g) => {
        const h = t._3 && !d._3 ? S(d._1, d._2, !0) : d;
        return n((m) => Gc(
          h,
          n,
          e,
          r,
          (p, $) => n((y) => {
            const v = h._3 && !p._3 ? S(p._1, p._2, !0) : p;
            return n((N) => Qo(
              v,
              n,
              e,
              r,
              (T, b) => n((L) => {
                const E = pt(Yn)("source node identifier after 'via'"), C = v._3 && !T._3 ? S(T._1, T._2, !0) : T;
                return n((I) => E(
                  C,
                  n,
                  e,
                  r,
                  (z, G) => n((H) => {
                    const M = C._3 && !z._3 ? S(z._1, z._2, !0) : z;
                    return n((Z) => tn(
                      M,
                      n,
                      e,
                      r,
                      (Y, q) => n((A) => {
                        const P = pt(Yn)("target node identifier after 'via'"), W = M._3 && !Y._3 ? S(Y._1, Y._2, !0) : Y;
                        return n((R) => P(
                          W,
                          n,
                          e,
                          r,
                          (Q, X) => n((tt) => o(W._3 && !Q._3 ? S(Q._1, Q._2, !0) : Q, { from: G, to: X }))
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
}), FL = (t) => (n) => {
  const e = Be(RL);
  return (r, o, i, s, u) => o((c) => e(
    r,
    o,
    i,
    s,
    (a, l) => o((d) => u(
      r._3 && !a._3 ? S(a._1, a._2, !0) : a,
      { op: yr("DelNode", { id: t, via: Ot(gn.foldr, l) }), operands: [n] }
    ))
  ));
}, GL = /* @__PURE__ */ (() => {
  const t = pt(At((n) => n === "-"))("'-'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const l = pt(Qo)("space after '-'"), d = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((_) => l(
        d,
        e,
        r,
        o,
        (g, h) => e((m) => {
          const p = Re(pt(Yn)("node identifier after '-'")), $ = d._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return e((y) => p(
            $,
            e,
            r,
            o,
            (v, N) => e((T) => {
              const b = N._1, L = N._2, E = $._3 && !v._3 ? S(v._1, v._2, !0) : v;
              return e((C) => Qh(
                E,
                e,
                r,
                o,
                (I, z) => e((G) => (() => {
                  if (z.tag === "Just")
                    return xL(b)(L)(z._1);
                  if (z.tag === "Nothing")
                    return FL(b)(L);
                  f();
                })()(E._3 && !I._3 ? S(I._1, I._2, !0) : I, e, r, o, i))
              ));
            })
          ));
        })
      ));
    })
  ));
})(), ir = (t) => (n) => (e, r, o, i, s) => r((u) => zr(
  e,
  r,
  o,
  i,
  (c, a) => r((l) => {
    const d = e._3 && !c._3 ? S(c._1, c._2, !0) : c;
    return r((_) => Ie(t)(
      d,
      r,
      o,
      i,
      (g, h) => r((m) => i(d._3 && !g._3 ? S(g._1, g._2, !0) : g, lr(n, a)))
    ));
  })
)), IL = /* @__PURE__ */ (() => {
  const t = pt(At((n) => n === ":"))("':'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const l = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((d) => tn(
        l,
        e,
        r,
        o,
        (_, g) => e((h) => {
          const m = Be(At(nL)), p = l._3 && !_._3 ? S(_._1, _._2, !0) : _;
          return e(($) => m(
            p,
            e,
            r,
            o,
            (y, v) => e((N) => i(
              p._3 && !y._3 ? S(y._1, y._2, !0) : y,
              pc(so(Ot(gn.foldr, v)))
            ))
          ));
        })
      ));
    })
  ));
})(), BL = (t, n, e, r, o) => n((i) => tn(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => pt((a, l, d, _, g) => {
    const h = a._1, m = a._2;
    return l((p) => IL(
      S(h, m, !1),
      l,
      d,
      ($, y) => {
        const v = $._3;
        return l((N) => {
          if (v)
            return _($, y);
          const T = a._1, b = a._2;
          return l((L) => mL(
            S(T, b, !1),
            l,
            d,
            (E, C) => {
              const I = E._3;
              return l((z) => I ? _(E, C) : _L(a, l, d, _, g));
            },
            g
          ));
        });
      },
      g
    ));
  })('label ("…", : rest-of-line, or |…|)')(t._3 && !s._3 ? S(s._1, s._2, !0) : s, n, e, r, o))
)), Hc = (t) => (n, e, r, o, i) => e((s) => tn(
  n,
  e,
  r,
  o,
  (u, c) => e((a) => {
    const l = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
    return e((d) => {
      const _ = (m, p) => e(($) => (p ? ((y, v, N, T, b) => b(y, x)) : (y, v, N, T, b) => v((L) => BL(
        y,
        v,
        N,
        T,
        (E, C) => v((I) => b(E, J("Just", C)))
      )))(l._3 && !m._3 ? S(m._1, m._2, !0) : m, e, r, o, i)), g = l._1, h = l._2;
      return e((m) => {
        const p = ($, y) => {
          const v = $._3;
          return e((N) => v ? o($, y) : _(l, !1));
        };
        return e(($) => e((y) => e((v) => Ss(
          S(g, h, !1),
          e,
          r,
          (N, T) => {
            const b = N._3;
            return e((L) => b ? p(S(g, h, !1), T) : e((E) => At(t)(
              S(g, h, !1),
              e,
              r,
              (C, I) => p(S(g, h, !1), I),
              (C, I) => e((z) => e((G) => _(S(g, h, !1), !0)))
            )));
          },
          (N, T) => e((b) => e((L) => _(S(g, h, !1), !0)))
        ))));
      });
    });
  })
)), HL = (t) => (n) => (e) => (r, o, i, s, u) => o((c) => tn(
  r,
  o,
  i,
  s,
  (a, l) => o((d) => {
    const _ = Re(pt(Yn)("target node identifier")), g = r._3 && !a._3 ? S(a._1, a._2, !0) : a;
    return o((h) => _(
      g,
      o,
      i,
      s,
      (m, p) => o(($) => {
        const y = p._1, v = p._2, N = g._3 && !m._3 ? S(m._1, m._2, !0) : m;
        return o((T) => Hc(z0)(
          N,
          o,
          i,
          s,
          (b, L) => o((E) => u(
            N._3 && !b._3 ? S(b._1, b._2, !0) : b,
            {
              op: yr("AddEdge", { from: t, to: y, label: L.tag === "Just" ? J("Just", L._1) : x, directed: e }),
              operands: [n, v]
            }
          ))
        ));
      })
    ));
  })
)), DL = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => Re(Yn)(
    t,
    n,
    e,
    (c, a) => r(S(c._1, c._2, s), a),
    (c, a) => n((l) => {
      const d = t._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return n((_) => tn(
        d,
        n,
        e,
        (g, h) => r(S(g._1, g._2, s), h),
        (g, h) => n((m) => {
          const p = pt(At((y) => y === "<"))("'<'"), $ = d._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return n((y) => p(
            $,
            n,
            e,
            (v, N) => r(S($._1, $._2, s), N),
            (v, N) => n((T) => {
              const b = yi((E, C, I, z, G) => {
                const H = E._3;
                return _e("<-")(E, C, I, (M, Z) => z(S(M._1, M._2, H), Z), G);
              }), L = $._3 && !$._3 ? S($._1, $._2, !0) : $;
              return n((E) => b(
                L,
                n,
                e,
                (C, I) => r(S(C._1, C._2, s), I),
                (C, I) => n((z) => {
                  const G = L._3 && !C._3 ? S(C._1, C._2, !0) : C;
                  return n((H) => {
                    const M = a._1, Z = a._2, Y = t._3 && !G._3 ? S(G._1, G._2, !0) : G;
                    return n((q) => tn(
                      Y,
                      n,
                      e,
                      r,
                      (A, P) => n((W) => {
                        const R = pt(_e("<~"))("'<~'"), Q = Y._3 && !A._3 ? S(A._1, A._2, !0) : A;
                        return n((X) => R(
                          Q,
                          n,
                          e,
                          r,
                          (tt, V) => n((O) => {
                            const j = Q._3 && !tt._3 ? S(tt._1, tt._2, !0) : tt;
                            return n((rt) => tn(
                              j,
                              n,
                              e,
                              r,
                              (et, ft) => n((ct) => {
                                const dt = Re(pt(Yn)("target node identifier")), Bt = j._3 && !et._3 ? S(et._1, et._2, !0) : et;
                                return n((St) => dt(
                                  Bt,
                                  n,
                                  e,
                                  r,
                                  (en, _t) => n((bt) => {
                                    const ht = _t._1, $t = _t._2, st = Bt._3 && !en._3 ? S(en._1, en._2, !0) : en;
                                    return n((gt) => Hc(z0)(
                                      st,
                                      n,
                                      e,
                                      r,
                                      (it, at) => n((Tt) => o(
                                        st._3 && !it._3 ? S(it._1, it._2, !0) : it,
                                        {
                                          op: yr(
                                            "Token",
                                            {
                                              from: ht,
                                              to: M,
                                              labels: (() => {
                                                if (at.tag === "Nothing")
                                                  return [];
                                                if (at.tag === "Just")
                                                  return [at._1];
                                                f();
                                              })()
                                            }
                                          ),
                                          operands: [$t, Z]
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
}), zL = (t, n, e, r, o) => n((i) => NL(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = u._2._2, l = u._1, d = u._2._1, _ = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((g) => tn(
      _,
      n,
      e,
      r,
      (h, m) => n((p) => {
        const $ = Re(pt(Yn)("target node identifier")), y = _._3 && !h._3 ? S(h._1, h._2, !0) : h;
        return n((v) => $(
          y,
          n,
          e,
          r,
          (N, T) => n((b) => {
            const L = T._1, E = T._2, C = y._3 && !N._3 ? S(N._1, N._2, !0) : N;
            return n((I) => Hc(z0)(
              C,
              n,
              e,
              r,
              (z, G) => n((H) => (a === "<~" ? ((M, Z, Y, q, A) => A(
                M,
                {
                  op: yr(
                    "Token",
                    {
                      from: L,
                      to: l,
                      labels: (() => {
                        if (G.tag === "Nothing")
                          return [];
                        if (G.tag === "Just")
                          return [G._1];
                        f();
                      })()
                    }
                  ),
                  operands: a === "<~" ? [E, d] : [d, E]
                }
              )) : (M, Z, Y, q, A) => A(
                M,
                {
                  op: yr(
                    "Token",
                    {
                      from: l,
                      to: L,
                      labels: (() => {
                        if (G.tag === "Nothing")
                          return [];
                        if (G.tag === "Just")
                          return [G._1];
                        f();
                      })()
                    }
                  ),
                  operands: a === "<~" ? [E, d] : [d, E]
                }
              ))(C._3 && !z._3 ? S(z._1, z._2, !0) : z, n, e, r, o))
            ));
          })
        ));
      })
    ));
  })
)), QL = (t, n, e, r, o) => n((i) => Hc(oL)(
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
)), qL = (t) => (n) => (e, r, o, i, s) => r((u) => QL(
  e,
  r,
  o,
  i,
  (c, a) => r((l) => {
    const d = e._3 && !c._3 ? S(c._1, c._2, !0) : c;
    return r((_) => vL(
      d,
      r,
      o,
      i,
      (g, h) => r((m) => s(
        d._3 && !g._3 ? S(g._1, g._2, !0) : g,
        {
          op: yr(
            "AddNode",
            {
              id: t,
              label: a,
              shape: (() => {
                const p = M5("shape")(h);
                if (p.tag === "Just")
                  return p._1 === "rectangle" || p._1 === "rect" ? Er : p._1 === "cylinder" || p._1 === "cyl" ? dl : p._1 === "parallelogram" ? C$ : p._1 === "diamond" ? E$ : p._1 === "ellipse" ? A$ : p._1 === "document" || p._1 === "doc" ? _l : p._1 === "cloud" ? P$ : Er;
                if (p.tag === "Nothing")
                  return Er;
                f();
              })()
            }
          ),
          operands: [n]
        }
      ))
    ));
  })
)), WL = /* @__PURE__ */ (() => {
  const t = pt(At((n) => n === "+"))("'+'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, c) => e((a) => {
      const l = pt(Qo)("space after '+'"), d = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((_) => l(
        d,
        e,
        r,
        o,
        (g, h) => e((m) => {
          const p = Re(pt(Yn)("node identifier after '+'")), $ = d._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return e((y) => p(
            $,
            e,
            r,
            o,
            (v, N) => e((T) => {
              const b = N._1, L = N._2, E = $._3 && !v._3 ? S(v._1, v._2, !0) : v;
              return e((C) => Qh(
                E,
                e,
                r,
                o,
                (I, z) => e((G) => (() => {
                  if (z.tag === "Just")
                    return HL(b)(L)(z._1);
                  if (z.tag === "Nothing")
                    return qL(b)(L);
                  f();
                })()(E._3 && !I._3 ? S(I._1, I._2, !0) : I, e, r, o, i))
              ));
            })
          ));
        })
      ));
    })
  ));
})(), OL = (t, n, e, r, o) => n((i) => zr(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = pt(H0([
      ir("+node")("Node additions use `+ api: API`."),
      ir("+edge")("Graph edges use `+ api -> db`."),
      ir("+conn")("Undirected graph edges use `+ api -- db`."),
      ir("-node")("Node removals use `- api`."),
      ir("-edge")("Graph edge removals use `- api -> db`."),
      ir("-conn")("Undirected graph edge removals use `- api -- db`."),
      ir("~edge")("Graph edge repoints use `~ api -> db => api -> cache`."),
      ir("enter")("Dive commands use `into api`."),
      ir("exit")("Return from a dive with `out`."),
      wL,
      WL,
      GL,
      TL,
      zL,
      DL,
      kL,
      LL
    ]))("statement (+ node, - node, + edge, - edge, into, out, or 'a ~> b'/'a <~ b')"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((d) => a(
      l,
      n,
      e,
      r,
      (_, g) => n((h) => {
        const m = l._3 && !_._3 ? S(_._1, _._2, !0) : _;
        return n((p) => zr(
          m,
          n,
          e,
          r,
          ($, y) => n((v) => {
            const N = { line: u.line, column: u.column, endLine: y.line, endColumn: y.column };
            return o(
              m._3 && !$._3 ? S($._1, $._2, !0) : $,
              Hr(
                "Leaf",
                { op: g.op, line: N.line, column: N.column, endLine: N.endLine, endColumn: N.endColumn, span: N, operands: g.operands }
              )
            );
          })
        ));
      })
    ));
  })
)), Q0 = /* @__PURE__ */ Hh(/* @__PURE__ */ (() => {
  const t = pt(At((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (c, a) => e((l) => e((d) => {
      const _ = n._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return Je(_, e, r, o, (g, h) => e((m) => i(_._3 && !g._3 ? S(g._1, g._2, !0) : g, h)));
    }))
  )));
})())(/* @__PURE__ */ pt(/* @__PURE__ */ (() => {
  const t = pt(At((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => Je(
    n,
    e,
    r,
    o,
    (c, a) => e((l) => e((d) => {
      const _ = n._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return t(_, e, r, o, (g, h) => e((m) => i(_._3 && !g._3 ? S(g._1, g._2, !0) : g, h)));
    }))
  )));
})())("closing '}'")), Yh = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => Je(
    t,
    n,
    e,
    (c, a) => r(S(c._1, c._2, s), a),
    (c, a) => n((l) => {
      const d = yi(pt(At((g) => g === "}"))("'}'")), _ = t._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return n((g) => d(
        _,
        n,
        e,
        (h, m) => r(S(h._1, h._2, s), m),
        (h, m) => n((p) => yi(Ss)(
          _._3 && !h._3 ? S(h._1, h._2, !0) : h,
          n,
          e,
          ($, y) => r(S($._1, $._2, s), y),
          ($, y) => n((v) => {
            const N = t._3 && !$._3 ? S($._1, $._2, !0) : $;
            return n((T) => Gc(
              N,
              n,
              e,
              r,
              (b, L) => n((E) => {
                const C = H0([YL, XL, OL]), I = N._3 && !b._3 ? S(b._1, b._2, !0) : b;
                return n((z) => C(
                  I,
                  n,
                  e,
                  r,
                  (G, H) => n((M) => {
                    const Z = I._3 && !G._3 ? S(G._1, G._2, !0) : G;
                    return n((Y) => tn(
                      Z,
                      n,
                      e,
                      r,
                      (q, A) => n((P) => {
                        const W = Z._3 && !q._3 ? S(q._1, q._2, !0) : q;
                        return n((R) => j5(
                          W,
                          n,
                          e,
                          r,
                          (Q, X) => n((tt) => {
                            const V = W._3 && !Q._3 ? S(Q._1, Q._2, !0) : Q;
                            return n((O) => Je(
                              V,
                              n,
                              e,
                              r,
                              (j, rt) => n((et) => o(V._3 && !j._3 ? S(j._1, j._2, !0) : j, H))
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
    })
  ));
}), XL = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => {
    const c = (a, l) => {
      const d = a._3;
      return n((_) => d ? r(a, l) : n((g) => {
        const h = t._3;
        return n((m) => Ie("seq")(
          t,
          n,
          e,
          (p, $) => r(S(p._1, p._2, h), $),
          (p, $) => n((y) => {
            const v = t._3 && !p._3 ? S(p._1, p._2, !0) : p;
            return n((N) => tn(
              v,
              n,
              e,
              (T, b) => r(S(T._1, T._2, h), b),
              (T, b) => n((L) => D0(
                v._3 && !T._3 ? S(T._1, T._2, !0) : T,
                n,
                e,
                (E, C) => r(S(E._1, E._2, h), C),
                (E, C) => n((I) => {
                  const z = t._3 && !E._3 ? S(E._1, E._2, !0) : E;
                  return n((G) => Gc(
                    z,
                    n,
                    e,
                    r,
                    (H, M) => n((Z) => {
                      const Y = pt(pt(At((A) => A === "{"))("'{'"))("'{'"), q = z._3 && !H._3 ? S(H._1, H._2, !0) : H;
                      return n((A) => Y(
                        q,
                        n,
                        e,
                        r,
                        (P, W) => n((R) => o(
                          q._3 && !P._3 ? S(P._1, P._2, !0) : P,
                          Hr("GroupSeq", [])
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
    return n((a) => n((l) => Ie("seq")(
      S(i, s, !1),
      n,
      e,
      (d, _) => c(S(d._1, d._2, !1), _),
      (d, _) => n((g) => n((h) => tn(
        d,
        n,
        e,
        (m, p) => c(S(m._1, m._2, !1), p),
        (m, p) => n(($) => {
          const y = d._3 && !m._3 ? S(m._1, m._2, !0) : m;
          return pt(At((v) => v === "{"))("'{'")(
            y,
            n,
            e,
            (v, N) => c(S(y._1, y._2, !1), N),
            (v, N) => n((T) => Q0(q0(o5))(y, n, e, c, o))
          );
        })
      )))
    )));
  });
}, YL = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => {
    const c = (a, l) => {
      const d = a._3;
      return n((_) => d ? r(a, l) : n((g) => {
        const h = t._3;
        return n((m) => Ie("par")(
          t,
          n,
          e,
          (p, $) => r(S(p._1, p._2, h), $),
          (p, $) => n((y) => {
            const v = t._3 && !p._3 ? S(p._1, p._2, !0) : p;
            return n((N) => tn(
              v,
              n,
              e,
              (T, b) => r(S(T._1, T._2, h), b),
              (T, b) => n((L) => D0(
                v._3 && !T._3 ? S(T._1, T._2, !0) : T,
                n,
                e,
                (E, C) => r(S(E._1, E._2, h), C),
                (E, C) => n((I) => {
                  const z = t._3 && !E._3 ? S(E._1, E._2, !0) : E;
                  return n((G) => Gc(
                    z,
                    n,
                    e,
                    r,
                    (H, M) => n((Z) => {
                      const Y = pt(pt(At((A) => A === "{"))("'{'"))("'{'"), q = z._3 && !H._3 ? S(H._1, H._2, !0) : H;
                      return n((A) => Y(
                        q,
                        n,
                        e,
                        r,
                        (P, W) => n((R) => o(
                          q._3 && !P._3 ? S(P._1, P._2, !0) : P,
                          Hr("Par", [])
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
    return n((a) => n((l) => Ie("par")(
      S(i, s, !1),
      n,
      e,
      (d, _) => c(S(d._1, d._2, !1), _),
      (d, _) => n((g) => n((h) => tn(
        d,
        n,
        e,
        (m, p) => c(S(m._1, m._2, !1), p),
        (m, p) => n(($) => {
          const y = d._3 && !m._3 ? S(m._1, m._2, !0) : m;
          return pt(At((v) => v === "{"))("'{'")(
            y,
            n,
            e,
            (v, N) => c(S(y._1, y._2, !1), N),
            (v, N) => n((T) => Q0(q0(e5))(y, n, e, c, o))
          );
        })
      )))
    )));
  });
}, q0 = (t) => {
  const n = Be(Yh);
  return (e, r, o, i, s) => r((u) => n(
    e,
    r,
    o,
    i,
    (c, a) => r((l) => s(
      e._3 && !c._3 ? S(c._1, c._2, !0) : c,
      t(Ot(gn.foldr, a))
    ))
  ));
}, xa = (t) => (n) => (e, r, o, i, s) => r((u) => bL(t)(
  e,
  r,
  o,
  i,
  (c, a) => r((l) => {
    const d = Be(At(iL)), _ = e._3 && !c._3 ? S(c._1, c._2, !0) : c;
    return r((g) => d(
      _,
      r,
      o,
      i,
      (h, m) => r((p) => {
        const $ = pt(pt(At((v) => v === "{"))("'{'"))("'{'"), y = _._3 && !h._3 ? S(h._1, h._2, !0) : h;
        return r((v) => $(
          y,
          r,
          o,
          i,
          (N, T) => r((b) => {
            const L = y._3 && !N._3 ? S(N._1, N._2, !0) : N;
            return r((E) => Je(
              L,
              r,
              o,
              i,
              (C, I) => r((z) => {
                const G = q0(r5), H = L._3 && !C._3 ? S(C._1, C._2, !0) : C;
                return r((M) => G(
                  H,
                  r,
                  o,
                  i,
                  (Z, Y) => r((q) => {
                    const A = H._3 && !Z._3 ? S(Z._1, Z._2, !0) : Z;
                    return r((P) => Je(
                      A,
                      r,
                      o,
                      i,
                      (W, R) => r((Q) => {
                        const X = pt(pt(At((V) => V === "}"))("'}'"))("closing '}'"), tt = A._3 && !W._3 ? S(W._1, W._2, !0) : W;
                        return r((V) => X(
                          tt,
                          r,
                          o,
                          i,
                          (O, j) => r((rt) => {
                            const et = tt._3 && !O._3 ? S(O._1, O._2, !0) : O;
                            return r((ft) => Je(
                              et,
                              r,
                              o,
                              i,
                              (ct, dt) => r((Bt) => s(
                                et._3 && !ct._3 ? S(ct._1, ct._2, !0) : ct,
                                { name: lL(so(Ot(gn.foldr, m))), ops: Y, kind: n }
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
)), UL = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => ir("keyframe")("Drop the `keyframe` wrapper; Markgraf animates statements in order.")(
    S(i, s, !1),
    n,
    e,
    (c, a) => {
      const l = c._3;
      return n((d) => {
        if (l)
          return r(c, a);
        const _ = t._1, g = t._2;
        return n((h) => xa("scene")(Wu)(
          S(_, g, !1),
          n,
          e,
          (m, p) => {
            const $ = m._3;
            return n((y) => {
              if ($)
                return r(m, p);
              const v = t._1, N = t._2;
              return n((T) => xa("still")(B0)(
                S(v, N, !1),
                n,
                e,
                (b, L) => {
                  const E = b._3;
                  return n((C) => E ? r(b, L) : xa("title")(n5)(t, n, e, r, o));
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
}, VL = (t) => (n) => (e) => {
  if (t === "AnimatedSurface")
    return { ...n, frames: Et(n.frames)({ name: x, ops: e, kind: Wu }) };
  if (t === "StillSurface")
    return { ...n, statements: Et(n.statements)(e) };
  if (t === "SequenceSurface")
    return { ...n, statements: Et(n.statements)(e) };
  f();
}, ML = (t) => (n) => (e) => {
  if (e.tag === "TopFrame") {
    const r = qh(t)(n);
    return {
      ...r,
      frames: Et(r.frames)((() => {
        if (t === "AnimatedSurface")
          return e._1;
        if (t === "StillSurface")
          return { ...e._1, kind: e._1.kind === "AnimatedKeyframe" ? B0 : e._1.kind };
        if (t === "SequenceSurface")
          return e._1;
        f();
      })())
    };
  }
  if (e.tag === "TopStatement")
    return VL(t)(n)(e._1);
  if (e.tag === "TopInside")
    return n;
  f();
}, KL = (t) => {
  const n = w(ML(t))(hL);
  return (e) => qh(t)(n(e)).frames;
}, jL = (t) => A5.defer((n) => (e, r, o, i, s) => {
  const u = e._1, c = e._2;
  return r((a) => CL(t)(
    S(u, c, !1),
    r,
    o,
    (l, d) => {
      const _ = l._3;
      return r((g) => {
        if (_)
          return i(l, d);
        const h = e._1, m = e._2;
        return r((p) => r(($) => ZL(
          S(h, m, !1),
          r,
          o,
          (y, v) => {
            const N = y._3;
            return r((T) => {
              if (N)
                return i(y, v);
              const b = e._1, L = e._2;
              return r((E) => r((C) => UL(
                S(b, L, !1),
                r,
                o,
                (I, z) => {
                  const G = I._3;
                  return r((H) => G ? i(I, z) : r((M) => Yh(e, r, o, i, (Z, Y) => r((q) => s(Z, va("TopStatement", Y))))));
                },
                (I, z) => r((G) => s(I, va("TopFrame", z)))
              )));
            });
          },
          (y, v) => r((N) => s(y, va("TopInside", v)))
        )));
      });
    },
    s
  ));
}), ZL = (t, n, e, r, o) => n((i) => Ie("inside")(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = pt(Qo)("space after 'inside'"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((d) => a(
      l,
      n,
      e,
      r,
      (_, g) => n((h) => {
        const m = pt(Yn)("node identifier after 'inside'"), p = l._3 && !_._3 ? S(_._1, _._2, !0) : _;
        return n(($) => m(
          p,
          n,
          e,
          r,
          (y, v) => n((N) => {
            const T = p._3 && !y._3 ? S(y._1, y._2, !0) : y;
            return n((b) => Je(
              T,
              n,
              e,
              r,
              (L, E) => n((C) => {
                const I = T._3 && !L._3 ? S(L._1, L._2, !0) : L;
                return n((z) => Q0(Uh)(
                  I,
                  n,
                  e,
                  r,
                  (G, H) => n((M) => {
                    const Z = I._3 && !G._3 ? S(G._1, G._2, !0) : G;
                    return n((Y) => Je(
                      Z,
                      n,
                      e,
                      r,
                      (q, A) => n((P) => o(Z._3 && !q._3 ? S(q._1, q._2, !0) : q, { node: v, doc: H }))
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
)), Uh = (t, n, e, r, o) => n((i) => PL(
  t,
  n,
  e,
  r,
  (s, u) => n((c) => {
    const a = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((l) => {
      const d = (h, m) => n((p) => {
        const $ = Be(jL(u)), y = a._3 && !h._3 ? S(h._1, h._2, !0) : h;
        return n((v) => $(
          y,
          n,
          e,
          r,
          (N, T) => n((b) => {
            const L = Ot(gn.foldr, T);
            return o(
              y._3 && !N._3 ? S(N._1, N._2, !0) : N,
              {
                seed: (() => {
                  if (m.tag === "Nothing")
                    return 0;
                  if (m.tag === "Just")
                    return m._1;
                  f();
                })(),
                mode: u,
                frames: KL(u)(L),
                interiors: xt((E) => {
                  if (E.tag === "TopInside")
                    return J("Just", E._1);
                  if (E.tag === "TopFrame" || E.tag === "TopStatement")
                    return x;
                  f();
                })(L)
              }
            );
          })
        ));
      }), _ = a._1, g = a._2;
      return n((h) => n((m) => SL(
        S(_, g, !1),
        n,
        e,
        (p, $) => {
          const y = p._3;
          return n((v) => y ? r(p, $) : d(a, x));
        },
        (p, $) => n((y) => d(p, J("Just", $)))
      )));
    });
  })
)), tS = /* @__PURE__ */ (() => {
  const t = pt((n, e, r, o, i) => e((s) => e((u) => Je(
    n,
    e,
    r,
    o,
    (c, a) => e((l) => e((d) => {
      const _ = n._3 && !c._3 ? S(c._1, c._2, !0) : c;
      return Ss(
        _,
        e,
        r,
        o,
        (g, h) => e((m) => i(_._3 && !g._3 ? S(g._1, g._2, !0) : g, h))
      );
    }))
  ))))("'scene', 'still', 'title', 'inside', a statement, or end of input");
  return (n, e, r, o, i) => e((s) => e((u) => e((c) => e((a) => Je(
    n,
    e,
    r,
    o,
    (l, d) => e((_) => e((g) => {
      const h = n._3 && !l._3 ? S(l._1, l._2, !0) : l;
      return Uh(
        h,
        e,
        r,
        o,
        (m, p) => e(($) => {
          const y = h._3 && !m._3 ? S(m._1, m._2, !0) : m;
          return e((v) => e((N) => {
            const T = n._3 && !y._3 ? S(y._1, y._2, !0) : y;
            return t(
              T,
              e,
              r,
              o,
              (b, L) => e((E) => i(T._3 && !b._3 ? S(b._1, b._2, !0) : b, p))
            );
          }));
        })
      );
    }))
  )))));
})(), nS = (t) => {
  const n = I5(t)(tS);
  if (n.tag === "Left")
    return Nt("Left", { msg: fL(n._1._1), line: n._1._2.line, column: n._1._2.column, endLine: n._1._2.line, endColumn: n._1._2.column + 1 | 0 });
  if (n.tag === "Right")
    return Nt("Right", n._1);
  f();
}, W0 = (t) => {
  const n = nS(t);
  if (n.tag === "Left")
    return Nt("Left", n._1.msg);
  if (n.tag === "Right")
    return Nt("Right", n._1);
  f();
}, eS = () => ({ tag: "ParFrag" }), Vh = (t) => t, rS = /* @__PURE__ */ Vh("Sync"), oS = /* @__PURE__ */ Vh("SelfMsg"), iS = /* @__PURE__ */ eS(), co = /* @__PURE__ */ Lh(ke), vi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, ze = /* @__PURE__ */ Do(ke), Fr = co.state((t) => k(t, t)), Yg = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, uu = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Fo = /* @__PURE__ */ zo(ke), sS = (t) => (n) => w((e) => (r) => Do(ke).bind(e)((o) => t(o)(r)))(zo(ke).pure(n)), rf = /* @__PURE__ */ xi(Fo)(Xt), uS = (t) => co.state((n) => k(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return { ...n, error: J("Just", t) };
    f();
  })()
)), cS = (t) => (n) => co.state((e) => k(
  void 0,
  { ...e, lifelines: Id(F)((r) => J("Just", { ...r, label: n }))(t)(e.lifelines) }
)), aS = (t) => (n) => (e) => {
  const r = vi(e)(t.lifelines);
  return vi(n)(t.lifelines).tag === "Nothing" ? r.tag === "Nothing" ? n + ", " + e : n : r.tag === "Nothing" ? e : "";
}, fS = { lifelines: B, lifelineOrder: [], messages: [], fragments: [], frameEndRows: [], row: 0, error: x }, lS = (t) => (n) => (e) => ze.bind(Fr)((r) => {
  const o = vi(t)(r.lifelines), i = vi(n)(r.lifelines);
  if (o.tag === "Just" && i.tag === "Just") {
    const s = {
      ...r,
      messages: [
        { fromCol: o._1.column, toCol: i._1.column, labels: e, row: r.row, kind: t === n ? oS : rS },
        ...r.messages
      ],
      row: r.row + 1 | 0
    };
    return co.state((u) => k(void 0, s));
  }
  return uS("token references unknown node: " + aS(r)(t)(n));
}), gS = (t) => co.state((n) => k(
  void 0,
  { ...n, lifelines: Id(F)((e) => J("Just", { ...e, destroyedAt: J("Just", n.row) }))(t)(n.lifelines) }
)), dS = (t) => (n) => {
  const e = n.lifelineOrder.length, r = Dt((o) => x, (o) => (i) => J("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return { fromCol: 0, toCol: uu(0)(n.lifelineOrder.length - 1 | 0) };
  if (r.tag === "Just")
    return w((o) => (i) => ({ fromCol: Yg(o.fromCol)(Yg(i.fromCol)(i.toCol)), toCol: uu(o.toCol)(uu(i.fromCol)(i.toCol)) }))({ fromCol: e, toCol: 0 })(t);
  f();
}, _S = (t) => ({
  lifelines: xt((n) => vi(n)(t.lifelines))(t.lifelineOrder),
  messages: pn(t.messages),
  fragments: pn(t.fragments),
  frameEndRows: t.frameEndRows,
  totalRows: t.row
}), hS = (t) => (n) => ze.bind(Fr)((e) => {
  const r = vi(t)(e.lifelines);
  if (r.tag === "Just")
    return Fo.pure();
  if (r.tag === "Nothing") {
    const o = {
      ...e,
      lifelines: K(F)(t)({ id: t, label: n, column: e.lifelineOrder.length, createdAt: e.row, destroyedAt: x })(e.lifelines),
      lifelineOrder: Et(e.lifelineOrder)(t),
      row: e.row > 0 || e.messages.length !== 0 ? e.row + 1 | 0 : e.row
    };
    return co.state((i) => k(void 0, o));
  }
  f();
}), pS = (t) => {
  if (t.tag === "AddNode")
    return hS(t._1.id)(t._1.label);
  if (t.tag === "DelNode")
    return gS(t._1.id);
  if (t.tag === "ModNode") {
    if (t._1.label.tag === "Just")
      return cS(t._1.id)(t._1.label._1);
    if (t._1.label.tag === "Nothing")
      return Fo.pure();
    f();
  }
  return t.tag === "Token" ? lS(t._1.from)(t._1.to)(t._1.labels) : Fo.pure();
}, mS = (t) => ze.bind(Fr)((n) => {
  const e = n.row;
  return ze.bind(sS((r) => (o) => ze.bind(Fr)((i) => {
    const s = r.childMessages.length === 0 ? r.dividers : [i.row, ...r.dividers], u = i.messages;
    return ze.bind(Xu(o))(() => ze.bind(Fr)((c) => Fo.pure({
      dividers: s,
      childMessages: [
        ...r.childMessages,
        ...(() => {
          const a = c.messages.length - u.length | 0;
          return a < 1 ? [] : Ct(0, a, c.messages);
        })()
      ]
    })));
  }))({ dividers: [], childMessages: [] })(t))((r) => ze.bind(Fr)((o) => {
    const i = dS(r.childMessages)(o), s = {
      kind: iS,
      label: "par",
      fromRow: e,
      toRow: uu(o.row)(e + 1 | 0),
      fromCol: i.fromCol,
      toCol: i.toCol,
      regionDividers: pn(r.dividers)
    }, u = co.state((c) => k(void 0, { ...c, fragments: [s, ...c.fragments] }));
    return r.childMessages.length >= 2 ? u : Fo.pure();
  }));
}), Xu = (t) => {
  if (t.tag === "Leaf")
    return pS(t._1.op);
  if (t.tag === "Seq" || t.tag === "GroupSeq")
    return rf(Xu)(t._1);
  if (t.tag === "Par")
    return mS(t._1);
  f();
}, $S = (t) => {
  const n = ze.bind(rf((e) => ze.bind(Fr)((r) => ze.bind(Xu(e.ops))(() => ze.bind(Fr)((o) => {
    const i = co.state((s) => k(void 0, { ...s, frameEndRows: Et(s.frameEndRows)(s.row - 1 | 0) }));
    return (o.messages.length - r.messages.length | 0) > 0 ? i : Fo.pure();
  }))))(t.frames))(() => Fr)(fS)._1;
  if (n.error.tag === "Just")
    return Nt("Left", n.error._1);
  if (n.error.tag === "Nothing")
    return Nt("Right", _S(n));
  f();
}, yS = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, vS = { padding: 24, headerHeight: 36, headerWidth: 120, columnSpacing: 160, rowHeight: 36, topGap: 24, bottomGap: 24 }, xS = (t) => {
  const n = 84 + U(yS(1)(t.totalRows)) * 36, e = qt((r) => (o) => ({ lifeline: o, x: 84 + U(r) * 160 }))(t.lifelines);
  return {
    metrics: vS,
    columns: e,
    width: (() => {
      const r = e.length - 1 | 0;
      return r >= 0 && r < e.length ? e[r].x + 84 : 48;
    })(),
    height: n + 48,
    headerTop: 24,
    headerBottom: 60,
    bodyTop: 84,
    bodyBottom: n,
    diagram: t
  };
}, wS = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = nt.compare(t)(s._3);
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
}, Mh = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Kh = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = nt.compare(t)(s._3);
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
}, jh = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, NS = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, TS = /* @__PURE__ */ w((t) => (n) => K(nt)(n)()(t))(B), JS = { r: 255, g: 255, b: 255, a: 255 }, Dc = { r: 26, g: 26, b: 26, a: 255 }, bS = { color: { r: 232, g: 232, b: 232, a: 255 }, flat: !0 }, kS = { r: 232, g: 232, b: 232, a: 255 }, Yu = (t) => (n) => (e) => (r) => (o) => [
  1,
  t + o,
  n,
  2,
  e - o,
  n,
  3,
  e,
  n,
  e,
  n + o,
  2,
  e,
  r - o,
  3,
  e,
  r,
  e - o,
  r,
  2,
  t + o,
  r,
  3,
  t,
  r,
  t,
  r - o,
  2,
  t,
  n + o,
  3,
  t,
  n,
  t + o,
  n,
  ..._s
], Ug = (t) => (n) => (e) => ({ ...e, stack: Et(e.stack)(t), openedAt: K(nt)(t)(n)(e.openedAt) }), zc = (t) => (n) => {
  const e = n.stack.length - 1 | 0;
  if (e >= 0 && e < n.stack.length) {
    const r = wS(n.stack[e])(n.openedAt), o = (() => {
      if (r.tag === "Nothing")
        return t;
      if (r.tag === "Just")
        return r._1;
      f();
    })();
    return {
      ...n,
      stack: n.stack.length === 0 ? [] : Ct(0, n.stack.length - 1 | 0, n.stack),
      openedAt: gi(nt)(n.stack[e])(n.openedAt),
      spans: Et(n.spans)({ col: n.stack[e], fromRow: o, toRow: Mh(o)(t) })
    };
  }
  return n;
}, Vg = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const c = r, a = o, l = i, d = l.stack.length - 1 | 0;
    if (d >= 0 && d < l.stack.length) {
      if (c(l.stack[d])) {
        s = !1, u = l;
        continue;
      }
      r = c, o = a, i = zc(a)(l);
      continue;
    }
    s = !1, u = l;
  }
  return u;
}, Zh = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, c = u.stack.length - 1 | 0;
    if (c >= 0 && c < u.stack.length) {
      e = s, r = zc(s)(u);
      continue;
    }
    o = !1, i = u;
  }
  return i;
}, LS = (t) => (n) => {
  const e = ge(to)(n.fromCol)(t.stack) ? Vg((() => {
    const r = n.fromCol;
    return (o) => r === o;
  })())(n.row - 1 | 0)(t) : Ug(n.fromCol)(n.row)(Zh(n.row - 1 | 0)(t));
  if (ge(to)(n.toCol)(e.stack)) {
    const r = Vg((() => {
      const o = n.toCol;
      return (i) => o === i;
    })())(n.row - 1 | 0)(zc(n.row)(e));
    return { ...r, returnRows: K(nt)(n.row)()(r.returnRows) };
  }
  return Ug(n.toCol)(n.row)(e);
}, SS = (t) => (n) => (e) => {
  const r = LS(n)(e);
  return Kh(e.row)(t) ? Zh(e.row)(r) : r;
}, cu = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.5, lineJoin: Ts, lineCap: Me }, tp = { r: 26, g: 26, b: 26, a: 255 }, CS = { color: { r: 130, g: 130, b: 130, a: 255 }, width: 1, lineJoin: Ts, lineCap: pe }, Mg = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.5, lineJoin: Ts, lineCap: pe }, ES = { color: { r: 244, g: 244, b: 244, a: 255 }, flat: !0 }, Kg = (t) => (n) => (e) => he((r) => r.col === n && r.fromRow <= e && e <= r.toRow, t), jg = { color: { r: 90, g: 90, b: 90, a: 255 }, width: 1, lineJoin: Ts, lineCap: pe }, AS = { stack: [], openedAt: B, spans: [], returnRows: B }, PS = { color: { r: 150, g: 150, b: 150, a: 255 }, width: 1, lineJoin: Ts, lineCap: pe }, RS = (t) => (n) => (e) => (r) => (o) => {
  const i = n.bodyTop + (U(o) + 0.5) * n.metrics.rowHeight - n.metrics.rowHeight / 2;
  return t.strokePath([1, e, i, 2, r, i])(PS);
}, FS = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = wi(n.Applicative0())(Xt);
  return (o) => (i) => {
    const s = o.bodyTop + (U(i.fromRow) + 0.5) * o.metrics.rowHeight - o.metrics.rowHeight / 2 - 6, u = i.fromCol >= 0 && i.fromCol < o.columns.length ? o.columns[i.fromCol].x - 16 : o.metrics.padding - 16, c = [1, u, s, 2, u + 38, s, 2, u + 32, s + 14, 2, u, s + 14, ..._s], a = i.toCol >= 0 && i.toCol < o.columns.length ? o.columns[i.toCol].x + 16 : o.metrics.padding + 16, l = o.bodyTop + (U(Mh(i.toRow)(i.fromRow + 1 | 0) - 1 | 0) + 0.5) * o.metrics.rowHeight + o.metrics.rowHeight / 2 + 6;
    return e.bind(t.strokePath([1, u, s, 2, a, s, 2, a, l, 2, u, l, ..._s])(jg))(() => e.bind(t.fillStrokePath(c)(bS)(jg))(() => e.bind(t.drawText({
      x: u + 6,
      y: s + 7,
      content: "par",
      font: { family: "Inter", size: 11, weight: 700 },
      color: Dc,
      align: ds,
      baseline: tr
    }))(() => r(i.regionDividers)(RS(t)(o)(u)(a)))));
  };
}, np = (t) => (n) => t >= n ? [] : [k(t, jh(n)(t + 6)), ...np(t + 10)(n)], GS = (t) => (n) => {
  if (n <= t)
    return [];
  const e = (r) => r >= n ? [] : [k(r, jh(n)(r + 6)), ...e(r + 10)];
  return e(t);
}, IS = (t) => {
  const n = wi(t.Monad0().Applicative0())(Xt);
  return (e) => (r) => n(GS(e.headerTop + e.metrics.headerHeight + U(r.lifeline.createdAt) * e.metrics.rowHeight + 4)((() => {
    if (r.lifeline.destroyedAt.tag === "Just")
      return e.bodyTop + (U(r.lifeline.destroyedAt._1) + 0.5) * e.metrics.rowHeight;
    if (r.lifeline.destroyedAt.tag === "Nothing")
      return e.bodyBottom;
    f();
  })()))((o) => t.strokePath([1, r.x, o._1, 2, r.x, o._2])(CS));
}, ep = (t) => (n) => t <= n ? [] : [k(t, NS(n)(t - 6)), ...ep(t - 6 - 4)(n)], BS = (t) => (n) => t === n ? [] : t < n ? np(t)(n) : ep(t)(n), HS = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => {
    const o = e.headerTop + U(r.lifeline.createdAt) * e.metrics.rowHeight, i = e.metrics.headerWidth / 2, s = o + e.metrics.headerHeight, u = Yu(r.x - i)(o)(r.x + i)(s)(6);
    return n.bind(t.fillStrokePath(Yu(r.x - i)(o + 5)(r.x + i)(s + 5)(6))({ color: kS, flat: !0 })(Mg))(() => n.bind(t.fillStrokePath(u)(ES)(Mg))(() => t.drawText({
      x: r.x,
      y: o + e.metrics.headerHeight / 2,
      content: r.lifeline.label,
      font: { family: "Inter", size: 14, weight: 600 },
      color: Dc,
      align: uo,
      baseline: tr
    })));
  };
}, DS = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, c = u.stack.length - 1 | 0;
    if (c >= 0 && c < u.stack.length) {
      e = s, r = zc(s)(u);
      continue;
    }
    o = !1, i = u;
  }
  return i;
}, zS = (t) => DS((() => {
  const n = t.diagram.messages.length - 1 | 0;
  return n >= 0 && n < t.diagram.messages.length ? t.diagram.messages[n].row : 0;
})())(w(SS(TS(t.diagram.frameEndRows)))(AS)(lt(
  (n) => n.kind === "Sync" || n.kind !== "SelfMsg",
  t.diagram.messages
))), QS = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => {
    const o = e.bodyTop + (U(r.row) + 0.5) * e.metrics.rowHeight, i = r.fromCol >= 0 && r.fromCol < e.columns.length ? e.columns[r.fromCol].x : e.metrics.padding, s = o - e.metrics.rowHeight * 0.3, u = i + 36, c = o + e.metrics.rowHeight * 0.3, a = i + 10, l = [1, i, c, 2, a, c - 5, 2, a, c + 5, ..._s];
    return n.bind(t.strokePath([1, i, s, 2, u, s, 2, u, c, 2, i, c])(cu))(() => n.bind(t.fillPath(l)({
      color: tp,
      flat: !0
    }))(() => t.drawText({
      x: i + 42,
      y: o,
      content: Qr(" ")(D(rc)(r.labels)),
      font: { family: "Inter", size: 12, weight: 400 },
      color: Dc,
      align: ds,
      baseline: tr
    })));
  };
}, qS = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = wi(n.Applicative0())(Xt);
  return (o) => (i) => (s) => (u) => {
    const c = s ? o.bodyTop + (U(u.row) + 0.5) * o.metrics.rowHeight + o.metrics.rowHeight * 0.5 : o.bodyTop + (U(u.row) + 0.5) * o.metrics.rowHeight, a = u.toCol >= u.fromCol ? 1 : -1, l = (u.fromCol >= 0 && u.fromCol < o.columns.length ? o.columns[u.fromCol].x : o.metrics.padding) + (Kg(i)(u.fromCol)(u.row) ? a * 6 : a * 0), d = (u.toCol >= 0 && u.toCol < o.columns.length ? o.columns[u.toCol].x : o.metrics.padding) - (Kg(i)(u.toCol)(u.row) ? a * 6 : a * 0), _ = d - a * 10, g = s ? t.strokePath([1, _, c - 5, 2, d, c, 2, _, c + 5])(cu) : t.fillPath([1, d, c, 2, _, c - 5, 2, _, c + 5, ..._s])({ color: tp, flat: !0 });
    return e.bind(s ? r(BS(l)(d))((h) => t.strokePath([1, h._1, c, 2, h._2, c])(cu)) : t.strokePath([1, l, c, 2, d, c])(cu))(() => e.bind(g)(() => t.drawText({
      x: (l + d) / 2,
      y: c - 6,
      content: Qr(" ")(D(rc)(u.labels)),
      font: { family: "Inter", size: 12, weight: 400 },
      color: Dc,
      align: uo,
      baseline: PJ
    })));
  };
}, WS = (t) => {
  const n = QS(t), e = qS(t);
  return (r) => (o) => (i) => (s) => {
    if (s.kind === "SelfMsg")
      return n(r)(s);
    if (s.kind === "Sync")
      return e(r)(o)(Kh(s.row)(i))(s);
    f();
  };
}, Zg = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.25, lineJoin: Dn, lineCap: pe }, OS = { color: { r: 232, g: 232, b: 232, a: 255 }, flat: !0 }, XS = { color: { r: 252, g: 252, b: 252, a: 255 }, flat: !0 }, YS = (t) => (n) => (e) => {
  const r = e.col >= 0 && e.col < n.columns.length ? n.columns[e.col].x : n.metrics.padding, o = n.bodyTop + (U(e.fromRow) + 0.5) * n.metrics.rowHeight, i = n.bodyTop + (U(e.toRow) + 0.5) * n.metrics.rowHeight + n.metrics.rowHeight * 0.5, s = Yu(r - 6)(o)(r + 6)(i)(3);
  return t.Monad0().Bind1().bind(t.fillStrokePath(Yu(r - 6)(o + 5)(r + 6)(i + 5)(3))(OS)(Zg))(() => t.fillStrokePath(s)(XS)(Zg));
}, rp = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = wi(n.Applicative0())(Xt), o = HS(t), i = IS(t), s = FS(t), u = WS(t);
  return (c) => {
    const a = zS(c);
    return e.bind(t.setViewport({ vx: 0, vy: 0, vw: c.width, vh: c.height }))(() => e.bind(t.clearBackground(JS))(() => e.bind(r(c.columns)(o(c)))(() => e.bind(r(c.columns)(i(c)))(() => e.bind(r(a.spans)(YS(t)(c)))(() => e.bind(r(c.diagram.fragments)(s(c)))(() => r(c.diagram.messages)(u(c)(a.spans)(a.returnRows))))))));
  };
}, US = /* @__PURE__ */ rp(KJ);
function VS(t, n, e, r) {
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
function Te(t) {
  return function(n) {
    return function(e) {
      return function() {
        e.setAttribute(t, n);
      };
    };
  };
}
function wa(t) {
  return function() {
    return function(n) {
      return t(n)();
    };
  };
}
function Na(t) {
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
function Ta(t) {
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
const Uu = function() {
  return window;
};
function MS(t) {
  return function() {
    return t.document;
  };
}
function of(t) {
  return function(n) {
    return function() {
      return n.requestAnimationFrame(t);
    };
  };
}
function KS(t) {
  return function(n) {
    return function() {
      return n.cancelAnimationFrame(t);
    };
  };
}
const op = (t) => t, Vu = (t) => () => {
  const n = t.getBoundingClientRect?.(), e = n?.width || t.clientWidth || 0, r = n?.height || t.clientHeight || 0;
  return { width: e, height: r };
}, ip = (t) => (n) => () => {
  let e = 0;
  const r = () => {
    e || (e = requestAnimationFrame(() => {
      e = 0, n();
    }));
  }, o = typeof ResizeObserver > "u" ? null : new ResizeObserver(r);
  return o?.observe(t), window.addEventListener("resize", r), () => {
    e && cancelAnimationFrame(e), o?.disconnect(), window.removeEventListener("resize", r);
  };
}, sp = () => window.devicePixelRatio || 1, jS = (t) => (n) => (e) => (r) => (o) => () => {
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
}, up = (t, n) => {
  n.innerHTML = t;
}, Mu = (t, n, e) => {
  t.style.setProperty(n, e);
}, cp = (t) => (n) => t === n, td = (t, n) => ({ tag: t, _1: n }), ap = (t) => t, fp = (t, n, e) => ({ tag: t, _1: n, _2: e }), lp = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ZS = /* @__PURE__ */ rp(w0), gp = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, tC = /* @__PURE__ */ fp("AutoSize"), nd = /* @__PURE__ */ ap("CanvasRenderer"), nC = /* @__PURE__ */ ap("SvgRenderer"), eC = (t) => (n) => {
  const e = t - n * U(ln(Fe(t / n)));
  return n <= 0 ? 0 : e < 0 ? e + n : e;
}, dp = (t) => w((n) => (e) => {
  const r = t(e);
  return () => (n(), r());
})(() => {
}), _p = (t) => (n) => ({ ...n, state: { ...n.state, camera: t }, minis: D((e) => _p(t)(e))(n.minis) }), rC = (t) => (n) => (e) => {
  const r = ws(e.rootLayout)(e.camera), o = Te("data-mg-too-small")("0")(t);
  return () => (o(), Te("data-mg-camera-vw")(vo(r.w))(t)(), Te("data-mg-camera-vh")(vo(r.h))(t)(), Te("data-mg-camera-zoom")(vo(e.camera.zoom))(t)(), Te("data-mg-viewport-css-width")(vo(n.w))(t)(), Te("data-mg-viewport-css-height")(vo(n.h))(t)());
}, oC = (t) => {
  const n = $S(t);
  if (n.tag === "Left")
    return Nt("Left", n._1);
  if (n.tag === "Right")
    return Nt("Right", xS(n._1));
  f();
}, iC = (t) => (n) => (e) => {
  if (n.tag === "FixedSize")
    return () => ({ w: n._1, h: n._2 });
  if (n.tag === "AutoSize") {
    const r = Vu(t);
    return () => {
      const o = r(), i = o.width <= 0 ? e.width : o.width;
      return { w: i, h: o.height <= 0 ? i * e.height / lp(1)(e.width) : o.height };
    };
  }
  f();
}, sC = (t) => (n) => (e) => {
  const r = $k(Jk(US(e))), o = Te("viewBox")(r.viewBox)(t);
  return () => (o(), Te("preserveAspectRatio")("xMidYMid meet")(t)(), n.tag === "FixedSize" ? (Te("width")(rn(ln(Pe(n._1))))(t)(), Te("height")(rn(ln(Pe(n._2))))(t)()) : n.tag === "AutoSize" || f(), up(r.body, t));
}, uC = (t) => (n) => (e) => {
  const r = op(t), o = iC(t)(n)(e);
  return () => {
    const i = o(), s = sp(), u = i.w * s, c = i.h * s, a = Hd(r)(), l = Dd(r)(), d = ic(r)(u);
    a !== u && d();
    const _ = sc(r)(c);
    l !== c && _(), n.tag === "FixedSize" ? (Mu(t, "width", rn(ln(Pe(i.w))) + "px"), Mu(t, "height", rn(ln(Pe(i.h))) + "px")) : n.tag === "AutoSize" || f();
    const g = $s(r)();
    Jr(g)(), Ki(g)({ scaleX: s, scaleY: s })();
    const h = M_(g)({ width: i.w, height: i.h })();
    return ZS(e)(h)(), br(g)();
  };
}, cC = (t) => (n) => (e) => (r) => {
  if (n === "CanvasRenderer")
    return uC(t)(e)(r);
  if (n === "SvgRenderer")
    return sC(t)(e)(r);
  f();
}, aC = (t) => (n) => (e) => (r) => () => {
  let o = !1, i = () => {
  }, s = [];
  const u = () => {
    const l = o, d = cC(t)(n)(e)(r);
    if (!l)
      return d();
  }, c = { time: 0, keyframe: "sequence", playing: !1 };
  return u(), i = ip(t)(() => {
    u();
    const l = s;
    return dp((d) => d(c))(l)();
  })(), {
    play: () => {
    },
    pause: () => {
    },
    toggle: () => {
    },
    seek: (l) => () => {
    },
    setSpeed: (l) => () => {
    },
    currentTime: (() => {
      const l = c.time;
      return () => l;
    })(),
    currentKeyframe: (() => {
      const l = c.keyframe;
      return () => l;
    })(),
    isPlaying: () => !1,
    duration: 0,
    subscribe: (l) => () => {
      s = Et(s)(l), l(c)();
      const _ = pf((g) => !cp(g)(l));
      return () => {
        s = _(s);
      };
    },
    destroy: () => (o = !0, i())
  };
}, hp = () => Um() / 1e3, Ja = (t) => (n) => {
  const e = un((r) => r.startT <= n && n < r.endT)(t.spans);
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
}, fC = (t) => (n) => (e) => {
  const r = k_(e);
  return () => {
    const o = r(), i = L_(e)(), s = r0(hc)(n0)(e)(Jc(o)(i)(e));
    if (s.tag === "Left")
      return Nt("Left", "precompute failed");
    if (s.tag === "Right")
      return Nt("Right", { schedule: s._1 });
    f();
  };
}, lC = (t) => (n) => {
  if (n.tag === "FixedSize") {
    const e = n._1 <= 0 || n._2 <= 0 ? x : J("Just", n._1 / n._2);
    return () => e;
  }
  if (n.tag === "AutoSize") {
    const e = Vu(t);
    return () => {
      const r = e();
      return r.width <= 0 || r.height <= 0 ? x : J("Just", r.width / r.height);
    };
  }
  f();
}, Zs = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (c) => (a) => (l) => () => {
  const d = hp(), _ = a.value;
  a.value = d;
  const g = _ === 0 ? 0 : d - _, h = (() => {
    if (e.tag === "FixedSize")
      return { w: e._1, h: e._2 };
    if (e.tag === "AutoSize") {
      const T = Vu(t)();
      return { w: T.width <= 0 ? 200 : T.width, h: T.height <= 0 ? 180 : T.height };
    }
    f();
  })();
  if (h.w < 200 || h.h < 180)
    return jS(t)(h.w)(h.h)(200)(180)();
  const m = S1({ widthPx: h.w, heightPx: h.h })(s), p = Rv(m)(gp(l)(m.totalDuration)), $ = i ? p : { ...p, levels: D((T) => ({ ...T, state: { ...T.state, frameTitle: "" } }))(p.levels) }, y = c.value, v = (() => {
    if (y.tag === "Nothing")
      return $.camera;
    if (y.tag === "Just")
      return l1(s.cameraConfig.cameraDecay)(g)(y._1)($.camera);
    f();
  })();
  c.value = J("Just", v);
  const N = { ...$, camera: v, levels: D(_p(v))($.levels) };
  if (rC(t)(h)(N)(), n === "CanvasRenderer") {
    const T = op(t), b = bs({ padding: 8, outputAspect: x })(N), L = (() => {
      if (e.tag === "FixedSize")
        return { w: e._1, h: e._2 };
      if (e.tag === "AutoSize") {
        const A = Vu(t)();
        return {
          w: A.width,
          h: A.height <= 0 ? b.vw <= 0 ? A.width : A.width * b.vh / b.vw : A.height
        };
      }
      f();
    })(), E = sp(), C = L.w * E, I = L.h * E, z = Hd(T)(), G = Dd(T)(), H = ic(T)(C);
    z !== C && H();
    const M = sc(T)(I);
    G !== I && M(), e.tag === "FixedSize" ? (Mu(t, "width", rn(ln(Pe(L.w))) + "px"), Mu(t, "height", rn(ln(Pe(L.h))) + "px")) : e.tag === "AutoSize" || f();
    const Z = $s(T)();
    Jr(Z)(), Ki(Z)({ scaleX: E, scaleY: E })();
    const Y = u.value, q = ak(r)(o)(Z)({ width: L.w, height: L.h })(N)(g)(Y)();
    return u.value = q, br(Z)();
  }
  if (n === "SvgRenderer") {
    const T = u.value, b = lC(t)(e)(), L = Ok(b)(r)(o)(N)(g)(T);
    return u.value = L.springs, Te("viewBox")(L.parts.viewBox)(t)(), Te("preserveAspectRatio")("xMidYMid meet")(t)(), e.tag === "FixedSize" ? (Te("width")(rn(ln(Pe(e._1))))(t)(), Te("height")(rn(ln(Pe(e._2))))(t)()) : e.tag === "AutoSize" || f(), up(L.parts.body, t);
  }
  f();
}, gC = (t) => (n) => (e) => (r) => (o) => (i) => (s) => () => {
  let u = 1, c = !0, a = !1, l = 0, d = 0;
  const _ = { value: B }, g = { value: x }, h = { value: 0 };
  let m = !1, p = () => {
  }, $ = [];
  Zs(t)(e)(r)(o)(i)(s)(n)(_)(g)(h)(0)();
  const y = (C) => () => {
    const I = $, z = c, G = { time: C, keyframe: Ja(n)(C), playing: z };
    return dp((H) => H(G))(I)();
  }, v = () => (c = !1, y(l)()), N = () => {
    if (!m && (a = !1, c)) {
      const z = hp(), G = d;
      d = z;
      const H = u, M = l, Z = eC(G === 0 ? M + 0 * H : M + (z - G) * H)(n.totalDuration + 0.8);
      return Z < M && (g.value = x), l = Z, Zs(t)(e)(r)(o)(i)(s)(n)(_)(g)(h)(Z)(), y(Z)(), T();
    }
  }, T = () => {
    if (!m && !a) {
      a = !0;
      const z = Uu();
      of(N)(z)();
    }
  }, b = () => (d = 0, c = !0, T()), L = () => (c || b(), y(l)());
  return p = ip(t)(() => {
    if (!m) {
      const I = l;
      return Zs(t)(e)(r)(o)(i)(s)(n)(_)(g)(h)(I)(), y(I)();
    }
  })(), b(), {
    play: L,
    pause: v,
    toggle: () => c ? v() : L(),
    seek: (C) => {
      const I = lp(0)(gp(n.totalDuration)(C));
      return () => (l = I, d = 0, g.value = x, Zs(t)(e)(r)(o)(i)(s)(n)(_)(g)(h)(I)(), y(I)());
    },
    setSpeed: (C) => () => u = C,
    currentTime: () => l,
    currentKeyframe: () => {
      const C = l;
      return Ja(n)(C);
    },
    isPlaying: () => c,
    duration: n.totalDuration,
    subscribe: (C) => () => {
      $ = Et($)(C);
      const z = l, G = c;
      C({ time: z, keyframe: Ja(n)(z), playing: G })();
      const H = pf((M) => !cp(M)(C));
      return () => {
        $ = H($);
      };
    },
    destroy: () => (m = !0, p())
  };
}, dC = (t) => {
  const n = Fc(t)(Pc)._1;
  if (n.tag === "Left")
    return Nt("Left", n._1.msg);
  if (n.tag === "Right")
    return Nt("Right", n._1);
  f();
}, _C = (t) => {
  const n = W0(t);
  if (n.tag === "Left")
    return Nt("Left", n._1);
  if (n.tag === "Right") {
    if (n._1.mode === "SequenceSurface") {
      const r = oC(n._1);
      if (r.tag === "Left")
        return Nt("Left", r._1);
      if (r.tag === "Right")
        return Nt("Right", td("LoadedSequence", r._1));
      f();
    }
    const e = dC(n._1);
    if (e.tag === "Left")
      return Nt("Left", e._1);
    if (e.tag === "Right")
      return Nt("Right", td("LoadedAnimation", e._1));
  }
  f();
}, hC = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = _C(n);
  if (u.tag === "Left")
    return () => Nt("Left", u._1);
  if (u.tag === "Right") {
    if (u._1.tag === "LoadedAnimation") {
      const c = fC()(r)(u._1._1);
      return () => {
        const a = c();
        if (a.tag === "Left")
          return Nt("Left", a._1);
        if (a.tag === "Right") {
          const l = gC(t)(a._1.schedule)(e)(r)(o)(i)(s)();
          return Nt("Right", l);
        }
        f();
      };
    }
    if (u._1.tag === "LoadedSequence") {
      const c = aC(t)(e)(r)(u._1._1);
      return () => {
        const a = c();
        return Nt("Right", a);
      };
    }
  }
  f();
}, O0 = () => document.createElement("canvas"), pC = (t, n) => {
  t.letterSpacing = n;
}, mC = (t, n) => {
  t.fontKerning = n;
}, pp = /* @__PURE__ */ ys(pC), X0 = /* @__PURE__ */ ys(mC), $C = { alpha: !0, premultipliedAlpha: !0, antialias: !0, depth: !1 }, yC = (t) => t.getContext("webgl", $C), vC = (t, n, e) => {
  const r = (i, s) => {
    const u = t.createShader(i);
    return t.shaderSource(u, s), t.compileShader(u), t.getShaderParameter(u, t.COMPILE_STATUS) || console.error(t.getShaderInfoLog(u)), u;
  }, o = t.createProgram();
  return t.attachShader(o, r(t.VERTEX_SHADER, n)), t.attachShader(o, r(t.FRAGMENT_SHADER, e)), t.linkProgram(o), t.getProgramParameter(o, t.LINK_STATUS) || console.error(t.getProgramInfoLog(o)), t.useProgram(o), o;
}, xC = (t, n) => {
  const e = t.createBuffer();
  t.bindBuffer(t.ARRAY_BUFFER, e), t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), t.STATIC_DRAW);
  const r = t.getAttribLocation(n, "position");
  t.enableVertexAttribArray(r), t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0);
}, wC = (t, n) => t.getExtension(n), NC = (t, n, e) => t.getUniformLocation(n, e), TC = (t, n, e) => t.uniform1f(n, e), JC = (t, n, e, r) => t.uniform2f(n, e, r), bC = (t, n, e) => t.uniform1i(n, e), kC = (t, n, e) => t.uniform4fv(n, new Float32Array(e)), LC = (t, n, e) => t.uniform2fv(n, new Float32Array(e)), SC = (t, n, e) => t.uniform1fv(n, new Float32Array(e)), CC = (t) => t.createTexture(), EC = (t, n, e, r) => {
  t.activeTexture(t.TEXTURE0 + r), t.bindTexture(t.TEXTURE_2D, n), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
}, AC = (t, n, e, r) => {
  (n.width !== e || n.height !== r) && (n.width = e, n.height = r), t.viewport(0, 0, e, r);
}, PC = (t) => {
  t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT);
}, RC = (t) => t.drawArrays(t.TRIANGLE_STRIP, 0, 4), FC = (t) => ({ width: t.clientWidth, height: t.clientHeight }), GC = () => window.devicePixelRatio, ed = () => performance.now(), Ku = /* @__PURE__ */ Qf(EC), on = /* @__PURE__ */ ki(NC), IC = /* @__PURE__ */ ki(kC), Ii = (t) => (n) => {
  const e = IC(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, BC = /* @__PURE__ */ ki(LC), Bi = (t) => (n) => {
  const e = BC(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, HC = /* @__PURE__ */ Qf(JC), Xr = /* @__PURE__ */ ki(bC), DC = /* @__PURE__ */ ki(SC), Yr = (t) => (n) => {
  const e = DC(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, rr = /* @__PURE__ */ ki(TC), zC = /* @__PURE__ */ ys(xC), QC = /* @__PURE__ */ Qf(AC), qC = /* @__PURE__ */ ys(wC), WC = /* @__PURE__ */ bi(yC), OC = /* @__PURE__ */ bi(RC), rd = /* @__PURE__ */ bi(CC), XC = /* @__PURE__ */ bi(FC), YC = /* @__PURE__ */ bi(PC), UC = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, od = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = x;
      continue;
    }
    if (s.tag === "Node") {
      const u = F.compare(t)(s._3);
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
}, VC = /* @__PURE__ */ ec(Ni), MC = /* @__PURE__ */ (() => {
  const t = me.unfoldr(Xe);
  return (n) => t(de("IterNode", n, Oe));
})(), KC = (t) => xt((n) => n)(D((n) => {
  if (n.target.tag === "TokenWindow") {
    const e = UC(n.target._2)(t.layout.edges);
    if (e.tag === "Just")
      return J(
        "Just",
        {
          points: D((() => {
            const r = t.placement;
            return (o) => ({ x: o.x * r.scale + r.tx, y: o.y * r.scale + r.ty });
          })())([
            ...(() => {
              const r = od(n.target._4)(t.layout.nodes);
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
                return pn(e._1);
              f();
            })(),
            ...(() => {
              const r = od(n.target._5)(t.layout.nodes);
              if (r.tag === "Nothing")
                return [];
              if (r.tag === "Just")
                return [{ x: r._1.x + r._1.w / 2, y: r._1.y + r._1.h / 2 }];
              f();
            })()
          ]),
          labels: D(rc)(n.target._6),
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
})(t.windows)), jC = (t) => t.msg + " (line " + rn(t.line) + ", cols " + rn(t.column) + "-" + rn(t.endColumn) + ")", ZC = (t) => (n) => (e) => {
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
}, tE = (t) => D(ZC(t.path.length)(t.placement))((() => {
  const n = (e, r) => {
    if (e.tag === "Leaf")
      return r;
    if (e.tag === "Node")
      return n(e._5, Zt("Cons", e._4, n(e._6, r)));
    f();
  };
  return Ot(gn.foldr, n(t.layout.nodes, Qt));
})()), nE = (t) => (n) => (e) => ({
  points: D((r) => ({ x: r.x * n.scale + n.tx, y: r.y * n.scale + n.ty }))(e._2),
  depth: t,
  arrowhead: (() => {
    const r = Io("conn:")(e._1);
    if (r.tag === "Just")
      return !1;
    if (r.tag === "Nothing")
      return !0;
    f();
  })()
}), id = (t) => (n) => {
  const e = un((r) => VC(r.path)(n))(t);
  if (e.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (e.tag === "Just") {
    const r = Gn(e._1.layout), o = r.w * e._1.placement.scale, i = r.h * e._1.placement.scale;
    return { x: r.x * e._1.placement.scale + e._1.placement.tx + o / 2, y: r.y * e._1.placement.scale + e._1.placement.ty + i / 2, w: o, h: i };
  }
  f();
}, eE = (t) => D(nE(t.path.length)(t.placement))(MC(t.layout.edges)), rE = (t) => (n) => ({
  startT: n.startT,
  endT: n.endT,
  dir: (() => {
    if (n.direction === "DiveIn")
      return 1;
    if (n.direction === "DiveOut")
      return 0;
    f();
  })(),
  parent: id(t)(n.parentPath),
  child: id(t)(n.childPath)
}), oE = (t) => {
  const n = W0(t), e = (() => {
    if (n.tag === "Left") {
      const r = n._1;
      return (o) => Nt("Left", r);
    }
    if (n.tag === "Right") {
      const r = n._1;
      return (o) => o(r);
    }
    f();
  })()((r) => {
    const o = Fc(r)(Pc)._1;
    if (o.tag === "Left")
      return Nt("Left", jC(o._1));
    if (o.tag === "Right") {
      const i = r0(hc)(n0)(o._1)(Jc(B)(B)(o._1));
      if (i.tag === "Left")
        return Nt("Left", "schedule: " + rn(i._1.length) + " error(s)");
      if (i.tag === "Right")
        return Nt(
          "Right",
          {
            ok: !0,
            error: "",
            duration: i._1.totalDuration,
            nodes: vt(i._1.segments)(tE),
            edges: vt(i._1.segments)(eE),
            tokens: vt(i._1.segments)(KC),
            dives: D(rE(i._1.segments))(i._1.dives)
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
}, Kr = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, iE = (t) => (n) => (e) => {
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
}, sf = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, sd = (t) => (n) => (e) => (r) => (o) => {
  const i = t + e + r, s = r * 2, u = Kr(0)(n - t - 2 * e), c = i + u - s;
  return s <= u ? iE(i)(c)(o) : t + (n - t) / 2;
}, ud = (t) => (n) => ({ ...n, cx: sd(t.minX)(t.maxX)(t.margin)(n.hw)(n.cx), cy: sd(t.minY)(t.maxY)(t.margin)(n.hh)(n.cy) }), sE = (t) => (n) => {
  const e = Kr(0)(t.minY + t.margin - (n.cy - n.hh)) + Kr(0)(n.cy + n.hh - (t.maxY - t.margin)), r = Kr(0)(t.minX + t.margin - (n.cx - n.hw)) + Kr(0)(n.cx + n.hw - (t.maxX - t.margin));
  return r * n.hh * 2 + e * n.hw * 2 + r * e;
}, uE = (t) => (n) => (e) => {
  const r = w(Kr)(0)(D((o) => n.cx - n.hw < o.cx + o.hw + t && n.cx + n.hw > o.cx - o.hw - t && n.cy - n.hh < o.cy + o.hh + t && n.cy + n.hh > o.cy - o.hh - t ? sf((o.cx + o.hw + t - (n.cx - n.hw)) / 0.7071067811865476)((o.cy + o.hh + t - (n.cy - n.hh)) / 0.7071067811865476) : 0)(e));
  return { ...n, cx: n.cx + r * 0.7071067811865476, cy: n.cy + r * 0.7071067811865476 };
}, cE = (t) => (n) => {
  const e = sf(t.cx + t.hw)(n.cx + n.hw) - Kr(t.cx - t.hw)(n.cx - n.hw), r = sf(t.cy + t.hh)(n.cy + n.hh) - Kr(t.cy - t.hh)(n.cy - n.hh);
  return t.cx - t.hw < n.cx + n.hw && t.cx + t.hw > n.cx - n.hw && t.cy - t.hh < n.cy + n.hh && t.cy + t.hh > n.cy - n.hh ? e * r : 0;
}, aE = (t) => (n) => (e) => (r) => (o) => {
  const i = o.cy - o.dotY, s = o.cy - r.cy;
  return (() => {
    const u = o.cx - o.dotX, c = o.cx - r.cx;
    return 1e6 * sE(t)(o) + 1e4 * w((a) => (l) => a + cE(o)(l))(0)(n) + 0.05 * (c * c + s * s) + 0.01 * (u * u + i * i);
  })() + (o.cy < e.dotY ? 100 : 0);
}, fE = (t) => (n) => (e) => (r) => {
  const o = (s) => {
    const u = ud(t)(s);
    return { chip: u, score: aE(t)(n)(e)(r)(u) };
  }, i = Dt(
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
    return ud(t)(r);
  if (i.tag === "Just")
    return w((s) => (u) => {
      const c = o(u);
      return c.score < s.score ? c : s;
    })(o(i._1.head))(i._1.tail).chip;
  f();
}, lE = (t) => (n) => (e) => (r) => w((o) => (i) => {
  const s = uE(n)(i.chip)(o.obstacles), u = s.cx - s.hw >= t.minX + t.margin && s.cx + s.hw <= t.maxX - t.margin && s.cy - s.hh >= t.minY + t.margin && s.cy + s.hh <= t.maxY - t.margin ? s : fE(t)(o.obstacles)(i.chip)(s), c = u.cx - i.chip.cx, a = u.cy - i.chip.cy;
  return {
    resolved: Et(o.resolved)({ chip: u, glyphs: D((l) => ({ ...l, cx: l.cx + c, cy: l.cy + a }))(i.glyphs) }),
    obstacles: Et(o.obstacles)({ cx: u.cx, cy: u.cy, hw: u.hw, hh: u.hh })
  };
})({ resolved: [], obstacles: e })(r).resolved, mp = (t) => t, cd = /* @__PURE__ */ mp("Visible"), gE = /* @__PURE__ */ mp("Hidden");
function dE(t) {
  return t.readyState;
}
const _E = (t) => () => {
  const n = dE(t);
  return n === "visible" ? cd : n === "hidden" ? gE : cd;
}, hE = (t) => () => {
  const n = Uu(), e = MS(n)(), r = Uu();
  let o = !0;
  const i = () => {
    const d = o, _ = _E(e)();
    return t(d && _ === "Visible")();
  }, s = wa((d) => i)();
  Na("visibilitychange")(s)(!1)(e)();
  const u = wa((d) => () => (o = !1, i()))();
  Na("blur")(u)(!1)(r)();
  const c = Ta("blur")(u)(!1)(r), a = wa((d) => () => (o = !0, i()))();
  Na("focus")(a)(!1)(r)();
  const l = Ta("focus")(a)(!1)(r);
  return () => (Ta("visibilitychange")(s)(!1)(e)(), c(), l());
};
function pE(t, n, e) {
  return e.then(t, n);
}
function ad(t) {
  return Promise.resolve(t);
}
function mE(t, n, e) {
  return e instanceof Error ? t(e) : n;
}
const Y0 = (t) => (n) => JJ((e) => () => (pE(
  (r) => {
    const i = e(Nt("Right", r))();
    return ad(i);
  },
  (r) => {
    const i = e(Nt("Left", t(r)))();
    return ad(i);
  },
  n
), bJ)), U0 = (t) => {
  const n = mE(jt, x, t), e = m$(ke)("String")(t), r = (() => {
    const o = (() => {
      if (e.tag === "Left")
        return x;
      if (e.tag === "Right")
        return J("Just", cl(e._1));
      f();
    })();
    return n.tag === "Nothing" ? o : n;
  })();
  if (r.tag === "Nothing")
    return cl("Promise failed, couldn't extract JS Error or String");
  if (r.tag === "Just")
    return r._1;
  f();
}, fd = oe.createElement;
oe.Fragment;
function ao(t) {
  return (n) => Array.isArray(n.children) ? fd.apply(null, [t, n].concat(n.children)) : fd(t, n);
}
function $E(t) {
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
      const r = oe.forwardRef(
        (o, i) => t(n)(e(o, i))
      );
      return r.displayName = n, r;
    };
  };
}
const V0 = /* @__PURE__ */ $E(ao), $p = /* @__PURE__ */ V0("div")(), yp = /* @__PURE__ */ V0("canvas")(), yE = (t, n) => {
  const e = oe.useRef(n);
  return e.current !== n && !t(e.current, n) && (e.current = n), e.current;
};
oe.memo;
oe.memo;
function ld(t, n) {
  const [e, r] = oe.useState(
    typeof n == "function" ? () => n : n
  );
  return r.hasOwnProperty("$$reactBasicHooks$$cachedSetState") || (r.$$reactBasicHooks$$cachedSetState = (o) => () => r(o)), t(e, r.$$reactBasicHooks$$cachedSetState);
}
function Mi(t, n, e) {
  const r = yE(t, n);
  oe.useEffect(e, [r]);
}
const Vn = oe.useRef;
function vE(t) {
  return t.current;
}
function xE(t, n) {
  t.current = n;
}
oe.useContext;
oe.useDebugValue;
oe.useId;
oe.useDeferredValue;
oe.useSyncExternalStore;
oe.useSyncExternalStore;
function M0(t, n) {
  return n.displayName = t, n.toString = () => t, n;
}
oe.useEffectEvent || oe.experimental_useEffectEvent;
const $n = /* @__PURE__ */ ys(xE), vp = (t) => (n) => (e) => () => Mi((r, o) => t.eq(r)(o), n, e), dn = /* @__PURE__ */ bi(vE), wE = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, xp = (t) => {
  const n = {
    apply: (e) => (r) => () => {
      const o = e(), i = r();
      return o(i);
    },
    Functor0: () => wE
  };
  return { pure: (e) => () => e, Apply0: () => n };
}, NE = () => typeof document < "u" && document.fonts ? document.fonts : null, K0 = (t) => {
  const n = NE();
  return n ? n.load(t).then(() => {
  }) : Promise.resolve();
}, TE = "attribute vec2 position; void main(){ gl_Position = vec4(position, 0.0, 1.0); }", JE = `
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
`, bE = (t, n, e, r, o) => {
  const i = (a) => {
    a.preventDefault(), n(a.deltaX)(a.deltaY)(a.ctrlKey ? 1 : 0)();
  }, s = (a) => {
    a.preventDefault(), e(a.clientX)(a.clientY)();
  }, u = (a) => r(a.clientX)(a.clientY)(a.buttons)(a.shiftKey ? 1 : 0)(), c = (a) => o(a.clientX)(a.clientY)();
  return t.addEventListener("wheel", i, { passive: !1 }), t.addEventListener("pointerdown", s), window.addEventListener("pointermove", u), window.addEventListener("pointerup", c), () => {
    t.removeEventListener("wheel", i), t.removeEventListener("pointerdown", s), window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", c);
  };
}, sn = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, kE = (t) => (n) => (e) => {
  const r = nt.compare(t)(e), o = (() => {
    if (r === "LT")
      return e;
    if (r === "EQ" || r === "GT")
      return t;
    f();
  })(), i = nt.compare(n)(o);
  if (i === "LT" || i === "EQ")
    return n;
  if (i === "GT")
    return o;
  f();
}, wp = /* @__PURE__ */ (() => {
  const t = io.traverse(Go);
  return (n) => (e) => t(e)(n);
})(), be = (t) => (n) => {
  const e = ot.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, LE = (t) => (n) => {
  const e = nt.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, uf = /* @__PURE__ */ w(Eo)(0), SE = (t) => w((n) => (e) => {
  if (n.tag === "Nothing")
    return J("Just", e);
  if (n.tag === "Just")
    return J("Just", t(n._1)(e) === "LT" ? n._1 : e);
  f();
})(x), CE = /* @__PURE__ */ g$(Go)(Df), EE = /* @__PURE__ */ xi(Go)(ff), gd = (t) => (n) => (e) => {
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
}, AE = xp().pure, PE = /* @__PURE__ */ ao($p), RE = /* @__PURE__ */ ao(yp), dd = (t) => (n) => {
  const e = Ke(t);
  if (e.tag === "Just") {
    const r = Ke(e._1.init);
    if (r.tag === "Just")
      return J("Just", n(r._1.last)(e._1.last));
    if (r.tag === "Nothing")
      return x;
    f();
  }
  if (e.tag === "Nothing")
    return x;
  f();
}, _d = (t) => (n) => (e) => ({ chip: { ...e.chip, cx: e.chip.cx + t, cy: e.chip.cy + n }, glyphs: D((r) => ({ ...r, cx: r.cx + t, cy: r.cy + n }))(e.glyphs) }), FE = /* @__PURE__ */ v$(bE), GE = (t) => ({ cx: t.x, cy: t.y, hw: t.hw, hh: t.hh }), ju = (t) => (n) => (e) => ({ cx: t.cx + (n.cx - t.cx) * e, cy: t.cy + (n.cy - t.cy) * e, hw: t.hw * fi(n.hw / sn(1e-4)(t.hw))(e), hh: t.hh * fi(n.hh / sn(1e-4)(t.hh))(e) }), xo = (t) => (n) => Un((n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y)), IE = (t) => (n) => {
  const e = (r) => sn(0)(1 - xo(n)({ x: r.x, y: r.y }) / (sn(r.hw)(r.hh) + t.ballRadius));
  return w((r) => (o) => e(o) > r.glow ? { glow: e(o), x: o.x, y: o.y } : r)({ glow: 0, x: 0, y: 0 })(t.worldNodes);
}, BE = (t) => (n) => (e) => (r) => (o) => {
  const i = Kf({ width: n, height: e })((() => {
    const c = ws(r)(o);
    return { vx: c.x, vy: c.y, vw: c.w, vh: c.h };
  })()), s = (i.vx + i.vw / 2 - t.midX) * t.scaleFactor, u = -(i.vy + i.vh / 2 - t.midY) * t.scaleFactor;
  return {
    centerX: s,
    centerY: u,
    camZ: i.vh * t.scaleFactor,
    viewport: { cx: s, cy: u, hw: i.vw * t.scaleFactor / 2, hh: i.vh * t.scaleFactor / 2 }
  };
}, HE = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (t.cameraSchedule.tag === "Just") {
    const s = S1({ widthPx: e, heightPx: r })(t.cameraSchedule._1), u = Vf(s.cameraConfig)(s.layout)(s.cameraSpans)(i).camera, c = (() => {
      if (n.tag === "Nothing")
        return u;
      if (n.tag === "Just")
        return l1(s.cameraConfig.cameraDecay)(o)(n._1)(u);
      f();
    })();
    return J("Just", { camera: c, world: BE(t)(e)(r)(s.layout)(c) });
  }
  if (t.cameraSchedule.tag === "Nothing")
    return x;
  f();
}, Qc = "500 " + rn(ln(Pe(144))) + "px Ilisarniq, ui-sans-serif, system-ui, sans-serif", j0 = /* @__PURE__ */ xt((t) => t)(/* @__PURE__ */ D(R2)(/* @__PURE__ */ Ut(32, 126))), DE = Qe((j0.length + 16 | 0) - 1 | 0, 16), zE = (t) => U(kE(0)(j0.length - 1 | 0)(fr(t) - 32 | 0)), hd = U(16) * 76, pd = U(DE) * 100, md = () => {
  const t = O0();
  ic(t)(hd)(), sc(t)(pd)();
  const n = $s(t)();
  Jf(n)({ x: 0, y: 0, width: hd, height: pd })(), wf(n)("#fff")(), uc(n)("500 64px Ilisarniq, ui-sans-serif, system-ui, sans-serif")(), Bf(n)(Ef)(), If(n)(Cf)(), X0(n)("normal")();
  const e = wp(qt(re)(j0))((r) => {
    const o = Ji(r._2), i = bf(n)(o)(U(Gr(r._1)(16)) * 76 + 38)(U(Qe(r._1, 16)) * 100 + 50);
    return () => (i(), Wd(n)(o)().width / 64);
  })();
  return { canvas: t, advances: e };
}, $d = (t) => (n) => 2.36 * sn(t.hw / sn(0.2)(n))(t.hh), QE = (t) => (n) => (e) => () => {
  const r = md();
  Ku(t)(n)(r.canvas)(1)(), $n(e)(r.advances)(), _0(
    h0,
    Jo(Jo(bo(() => K0("500 64px Ilisarniq, ui-sans-serif, system-ui, sans-serif")))(Y0(U0)))(() => bo(() => {
      const i = md();
      return Ku(t)(n)(i.canvas)(1)(), $n(e)(i.advances)();
    }))
  )().run();
}, qE = (t) => (n) => (e) => (r) => r < 0.31999999999999995 ? ju(n)(e.parent)((() => {
  const o = r / 0.31999999999999995;
  return o * o * (3 - 2 * o);
})()) : ju(e.parent)(t)((() => {
  const o = (r - 0.31999999999999995) / 0.68;
  return o * o * (3 - 2 * o);
})()), WE = (t) => (n) => (e) => e < 0.68 ? ju(t)(n.parent)((() => {
  const r = e / 0.68;
  return r * r * (3 - 2 * r);
})()) : ju(n.parent)(n.child)((() => {
  const r = (e - 0.68) / 0.31999999999999995;
  return r * r * (3 - 2 * r);
})()), OE = (t) => (n) => (e) => (r) => e.dir > 0.5 ? WE(n)(e)(r) : qE(t)(n)(e)(r), Np = (t) => (n) => sn(0)(be(1)((n - t.startT) / sn(1e-4)(t.endT - t.startT))), XE = (t) => (n) => (e) => w((r) => (o) => e <= o.startT ? r : OE(t)(r)(o)(Np(o)(e)))(t)(n), YE = (t) => (n) => {
  if (t.dir > 0.5) {
    const r = sn(0)(be(1)((n - 0.68) / 0.31999999999999995));
    return r * r * (3 - 2 * r);
  }
  const e = sn(0)(be(1)(n / 0.31999999999999995));
  return e * e * (3 - 2 * e);
}, UE = (t) => (n) => w((e) => (r) => n <= r.startT ? e : n >= r.endT ? r.dir > 0.5 ? e + 1 : e + -1 : e + (r.dir > 0.5 ? 1 : -1) * YE(r)(Np(r)(n)))(0)(t), VE = (t) => (n) => {
  const e = 1 - t.holdPre - t.holdPost;
  return e <= 0 ? n < 0.5 ? 0 : 1 : sn(0)(be(1)((n - t.holdPre) / e));
}, ME = (t) => (n) => (e) => {
  const r = sn(0)(be(1)((t * U(n + 1 | 0) - U(e)) / 1.5));
  return r * r * (3 - 2 * r);
}, KE = (t) => (n) => {
  const e = n.length === 0 ? [""] : n, r = D((d) => U(LE(1)(je(d))))(e), o = sn(1)(uf(r)), i = t * o, u = ((d) => (_) => (g) => {
    let h = d, m = _, p = g, $ = !0, y;
    for (; $; ) {
      const v = h, N = m, b = Dt((L) => x, (L) => (E) => J("Just", { head: L, tail: E }), p);
      if (b.tag === "Nothing") {
        $ = !1, y = e.length - 1 | 0;
        continue;
      }
      if (b.tag === "Just") {
        if (N + b._1.head >= i) {
          $ = !1, y = v;
          continue;
        }
        h = v + 1 | 0, m = N + b._1.head, p = b._1.tail;
        continue;
      }
      f();
    }
    return y;
  })(0)(0)(r), c = uf(u < 1 ? [] : Ct(0, u, r)), a = c / o;
  if (u >= 0 && u < r.length) {
    const d = (c + r[u]) / o;
    return { line: u >= 0 && u < e.length ? e[u] : "", phase: d <= a ? 1 : sn(0)(be(1)((t - a) / (d - a))) };
  }
  const l = (c + 1) / o;
  return { line: u >= 0 && u < e.length ? e[u] : "", phase: l <= a ? 1 : sn(0)(be(1)((t - a) / (l - a))) };
}, jE = (t) => (n) => {
  const e = Fn(re, t, Ct(1, t.length, t));
  return ((o) => (i) => {
    let s = o, u = i, c = !0, a;
    for (; c; ) {
      const l = s, _ = Dt((g) => x, (g) => (h) => J("Just", { head: g, tail: h }), u);
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
        if (_._1.tail.length === 0 || l <= xo(_._1.head._1)(_._1.head._2)) {
          const g = xo(_._1.head._1)(_._1.head._2), h = g <= 0 ? 0 : l / g;
          c = !1, a = { x: _._1.head._1.x + (_._1.head._2.x - _._1.head._1.x) * h, y: _._1.head._1.y + (_._1.head._2.y - _._1.head._1.y) * h };
          continue;
        }
        s = l - xo(_._1.head._1)(_._1.head._2), u = _._1.tail;
        continue;
      }
      f();
    }
    return a;
  })(sn(0)(be(1)(n)) * w((o) => (i) => o + xo(i._1)(i._2))(0)(e))(e);
}, ZE = (t) => (n) => D((e) => {
  const r = VE(e)((n - e.startT) / (e.endT - e.startT)), o = jE(e.path)(r), i = IE(t)(o);
  return { x: o.x, y: o.y, glow: i.glow, nx: i.x, ny: i.y, labels: e.labels, motionT: r, startT: e.startT, path: e.path };
})(Ct(0, 8, lt((e) => n >= e.startT && n < e.endT, t.tokenFlows))), tA = (t) => {
  const n = W0(t);
  if (n.tag === "Left")
    return x;
  if (n.tag === "Right") {
    const e = Fc(n._1)(Pc)._1;
    if (e.tag === "Left")
      return x;
    if (e.tag === "Right") {
      const r = r0(hc)(n0)(e._1)(Jc(B)(B)(e._1));
      if (r.tag === "Left")
        return x;
      if (r.tag === "Right")
        return J("Just", r._1);
    }
  }
  f();
}, nA = (t) => {
  const n = oE(t), e = tA(t), r = (() => {
    if (e.tag === "Nothing")
      return hc;
    if (e.tag === "Just")
      return e._1.cameraConfig;
    f();
  })(), o = w((p) => ($) => ({ minX: be(p.minX)($.x - $.w / 2), maxX: sn(p.maxX)($.x + $.w / 2), minY: be(p.minY)($.y - $.h / 2), maxY: sn(p.maxY)($.y + $.h / 2) }))({ minX: 1e9, maxX: -1e9, minY: 1e9, maxY: -1e9 })(n.nodes), i = (o.minX + o.maxX) / 2, s = (o.minY + o.maxY) / 2, u = 6.6 / sn(o.maxX - o.minX)(o.maxY - o.minY), c = D((p) => ({ pts: D(($) => ({ x: ($.x - i) * u, y: -($.y - s) * u }))(p.points), depth: U(p.depth), arrowhead: p.arrowhead }))(n.edges), a = D((p) => ({
    x: (p.x - i) * u,
    y: -(p.y - s) * u,
    hw: p.w / 2 * u,
    hh: p.h / 2 * u,
    shape: U(p.shape),
    depth: U(p.depth),
    labelH: r.labelBasePx * p.labelScale * u
  }))(n.nodes), l = (p) => {
    const $ = SE(/* @__PURE__ */ (() => {
      const y = (v) => (p.x - v.x) * (p.x - v.x) + (p.y - v.y) * (p.y - v.y);
      return (v) => (N) => ot.compare(y(v))(y(N));
    })())(a);
    if ($.tag === "Just")
      return { x: $._1.x, y: $._1.y };
    if ($.tag === "Nothing")
      return p;
    f();
  }, d = a.length, _ = d === 0 ? 0.1 : w((p) => ($) => p + $.hh)(0)(a) / U(d), g = (p) => {
    const $ = lt((y) => y.depth === p, a);
    return $.length === 0 ? _ : w((y) => (v) => y + v.hh)(0)($) / U($.length);
  }, h = g(0), m = vt(c)((p) => D(($) => ({ seg: [$._1.x, $._1.y, $._2.x, $._2.y], depth: p.depth }))((() => {
    const $ = (() => {
      if (p.arrowhead) {
        const y = dd(p.pts)(re);
        if (y.tag === "Just") {
          const v = xo(y._1._1)(y._1._2);
          if (v > 1e-6) {
            const N = Ke(p.pts);
            if (N.tag === "Just") {
              const T = be(_ * g(p.depth) / sn(1e-4)(h) * 0.05 + _ * g(p.depth) / sn(1e-4)(h) * 0.55)(v * 0.95);
              return Et(N._1.init)({ x: y._1._2.x - (y._1._2.x - y._1._1.x) / v * T, y: y._1._2.y - (y._1._2.y - y._1._1.y) / v * T });
            }
            if (N.tag === "Nothing")
              return p.pts;
            f();
          }
          return p.pts;
        }
        if (y.tag === "Nothing")
          return p.pts;
        f();
      }
      return p.pts;
    })();
    return Fn(re, $, Ct(1, $.length, $));
  })()));
  return {
    nodeList: n.nodes,
    worldNodes: a,
    halfW: w((p) => ($) => sn(p)(sn($.x + $.hw)($.hw - $.x)))(0)(a) + _ * 0.6,
    halfH: w((p) => ($) => sn(p)(sn($.y + $.hh)($.hh - $.y)))(0)(a) + _ * 0.6,
    unitHalfH: _,
    ballRadius: _ * 0.3,
    scaleFactor: u,
    nodeRectFlat: vt(a)((p) => [p.x, p.y, p.hw * 2, p.hh * 2]),
    nodeShapeFlat: D((p) => p.shape)(a),
    nodeLabelHeightFlat: D((p) => p.labelH)(a),
    nodeDepthFlat: D((p) => p.depth)(a),
    edgeSegFlat: vt(m)((p) => p.seg),
    edgeSegDepth: D((p) => p.depth)(m),
    arrowData: xt((p) => {
      if (p.arrowhead) {
        const $ = dd(p.pts)(re);
        if ($.tag === "Just") {
          const y = xo($._1._1)($._1._2);
          return y > 1e-6 ? J(
            "Just",
            (() => {
              const v = l($._1._2);
              return {
                tipX: $._1._2.x - ($._1._2.x - $._1._1.x) / y * (_ * g(p.depth) / sn(1e-4)(h)) * 0.05,
                tipY: $._1._2.y - ($._1._2.y - $._1._1.y) / y * (_ * g(p.depth) / sn(1e-4)(h)) * 0.05,
                dirX: ($._1._2.x - $._1._1.x) / y,
                dirY: ($._1._2.y - $._1._1.y) / y,
                cx: v.x,
                cy: v.y,
                depth: p.depth,
                unit: _ * g(p.depth) / sn(1e-4)(h)
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
    tokenFlows: D((p) => ({
      path: (() => {
        const $ = D((v) => ({ x: (v.x - i) * u, y: -(v.y - s) * u }))(p.points), y = Dt((v) => x, (v) => (N) => J("Just", { head: v, tail: N }), $);
        if (y.tag === "Just") {
          const v = Ke($);
          if (v.tag === "Just")
            return [l(y._1.head), ...Et($)(l(v._1.last))];
          if (v.tag === "Nothing")
            return $;
          f();
        }
        if (y.tag === "Nothing")
          return $;
        f();
      })(),
      labels: p.labels,
      startT: p.startT,
      endT: p.endT,
      holdPre: p.holdPre,
      holdPost: p.holdPost
    }))(n.tokens),
    dives: D((p) => {
      const $ = (y) => ({ cx: (y.x - i) * u, cy: -(y.y - s) * u, hw: y.w / 2 * u, hh: y.h / 2 * u });
      return { startT: p.startT, endT: p.endT, dir: U(p.dir), parent: $(p.parent), child: $(p.child) };
    })(n.dives),
    duration: n.duration,
    midX: i,
    midY: s,
    cameraSchedule: e
  };
}, yd = (t) => () => {
  const n = O0(), e = $s(n)();
  X0(e)("normal")(), pp(e)("1px")();
  const r = wp(t)((o) => {
    const i = uc(e)(Qc);
    return () => (i(), [Wd(e)(o.label)().width / 2048, 0.9]);
  })();
  return ve(r);
}, Tp = (t) => (n) => {
  const e = $s(n);
  return () => {
    const r = e();
    return Jf(r)({ x: 0, y: 0, width: 2048, height: U(t.length) * 160 })(), wf(r)("#fff")(), Bf(r)(Ef)(), If(r)(Cf)(), X0(r)("normal")(), pp(r)("1px")(), CE(t)((o) => (i) => {
      const s = uc(r)(Qc);
      return () => (s(), bf(r)(i.label)(1024)(U(o) * 160 + 80)());
    })();
  };
}, eA = (t) => () => {
  const n = O0();
  return ic(n)(2048)(), sc(n)(U(t.length) * 160)(), Tp(t)(n)(), n;
}, rA = (t) => (n) => (e) => {
  const r = eA(t);
  return () => {
    const o = r();
    Ku(n)(e)(o)(0)(), _0(
      h0,
      Jo(Jo(bo(() => K0(Qc)))(Y0(U0)))(() => bo((() => {
        const s = Tp(t)(o);
        return () => (s(), Ku(n)(e)(o)(0)());
      })()))
    )().run();
  };
}, oA = (t) => (n) => {
  const e = (r) => w((o) => (i) => (() => {
    const s = i.nx - r.cx, u = i.ny - r.cy, c = r.unit * 0.6;
    return s * s + u * u < c * c;
  })() ? sn(o)(i.glow) : o)(0)(n);
  return vt(t.arrowData)((r) => [r.tipX - r.dirX * r.unit * 0.2 * e(r), r.tipY - r.dirY * r.unit * 0.2 * e(r), r.dirX, r.dirY]);
}, iA = (t) => (n) => (e) => (r) => {
  const o = be(0.05)(t);
  return qt((i) => (s) => {
    if (i >= 0 && i < e.length) {
      const _ = e[i].startT, g = un((y) => y.id === _)(n), h = (() => {
        if (g.tag === "Nothing")
          return { id: _, x: s.chip.cx, y: s.chip.cy, vx: 0, vy: 0 };
        if (g.tag === "Just")
          return g._1;
        f();
      })(), m = h.vx + (180 * (s.chip.cx - h.x) - 22 * h.vx) * o, p = h.vy + (180 * (s.chip.cy - h.y) - 22 * h.vy) * o, $ = { id: _, x: h.x + m * o, y: h.y + p * o, vx: m, vy: p };
      return k(_d($.x - s.chip.cx)($.y - s.chip.cy)(s), $);
    }
    const u = un((_) => _.id === 0)(n), c = (() => {
      if (u.tag === "Nothing")
        return { id: 0, x: s.chip.cx, y: s.chip.cy, vx: 0, vy: 0 };
      if (u.tag === "Just")
        return u._1;
      f();
    })(), a = c.vx + (180 * (s.chip.cx - c.x) - 22 * c.vx) * o, l = c.vy + (180 * (s.chip.cy - c.y) - 22 * c.vy) * o, d = { id: 0, x: c.x + a * o, y: c.y + l * o, vx: a, vy: l };
    return k(_d(d.x - s.chip.cx)(d.y - s.chip.cy)(s), d);
  })(r);
}, vd = (t) => (n) => {
  const e = fr(n) - 32 | 0;
  return e >= 0 && e < t.length ? t[e] : 0.5;
}, sA = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = n * 0.6 + n * 0.5454545454545454, u = n * 1.5625, c = u * 0.76, a = n * 0.7272727272727273, l = e.y + r + a + s, d = KE(o)(i), _ = vr(d.line), g = _.length, h = uf(D((p) => n * vd(t)(p))(_)), m = e.x + r + a + h / 2;
  return {
    chip: { cx: m, cy: l, hw: h / 2 + n * 1.2727272727272727, hh: s, dotX: e.x, dotY: e.y },
    glyphs: w((p) => ($) => {
      const y = ME(d.phase)(g)($._1), v = n * vd(t)($._2), N = { cx: p._1 + v / 2, cy: l + (1 - y) * n * 0.85, hw: c / 2, hh: u / 2, cell: zE($._2), alpha: y };
      return k(p._1 + v, y > 0 ? Et(p._2)(N) : p._2);
    })(k(m - h / 2, []))(qt(re)(_))._2
  };
}, uA = /* @__PURE__ */ M0(
  "SdfDiagram",
  (t) => {
    const n = Vn(Td), e = Vn(0), r = Vn(0), o = Vn(x), i = Vn([]), s = Vn([]), u = Vn(x), c = Vn(8), a = Vn(1), l = Vn(0), d = Vn(0), _ = Vn(0), g = Vn(0), h = Vn(x), m = Vn({ resW: 0, resH: 0 }), p = Vn(1), $ = Vn(!0), y = $n(p)(t.speed);
    Mi(
      (T, b) => T === b,
      t.speed,
      () => (y(), () => {
      })
    );
    const v = $n($)(t.playing);
    Mi(
      (T, b) => T === b,
      t.playing,
      () => (v(), () => {
      })
    );
    const N = dn(n);
    return Mi(
      (T, b) => T === b,
      t.source,
      () => {
        const T = N(), b = De(T, x, jt);
        if (b.tag === "Nothing")
          return () => {
          };
        if (b.tag === "Just") {
          const L = WC(b._1)(), E = De(L, x, jt);
          if (E.tag === "Nothing")
            return () => {
            };
          if (E.tag === "Just") {
            const C = E._1;
            $n(u)(x)();
            const I = nA(t.source);
            qC(C)("OES_standard_derivatives")();
            const z = vC(C, TE, JE);
            zC(C)(z)();
            const G = on(C)(z)("uRes")(), H = on(C)(z)("uTime")(), M = on(C)(z)("uTilt")(), Z = on(C)(z)("uNodeCount")(), Y = on(C)(z)("uEdgeCount")(), q = on(C)(z)("uNodeRect")(), A = on(C)(z)("uNodeShape")(), P = on(C)(z)("uEdge")(), W = on(C)(z)("uArrow")(), R = on(C)(z)("uArrowCount")(), Q = on(C)(z)("uLabel")(), X = on(C)(z)("uLabelAspect")(), tt = on(C)(z)("uLabelFadeStart")(), V = on(C)(z)("uLabelDim")(), O = on(C)(z)("uLabelH")(), j = on(C)(z)("uUnit")(), rt = on(C)(z)("uTokCount")(), et = on(C)(z)("uTokPos")(), ft = on(C)(z)("uTokGlow")(), ct = on(C)(z)("uTokNode")(), dt = on(C)(z)("uGlyphAtlas")(), Bt = on(C)(z)("uChipCount")(), St = on(C)(z)("uChipRect")(), en = on(C)(z)("uChipDot")(), _t = on(C)(z)("uGlyphCount")(), bt = on(C)(z)("uGlyphRect")(), ht = on(C)(z)("uGlyphCell")(), $t = on(C)(z)("uGlyphAlpha")(), st = on(C)(z)("uCamZ")(), gt = on(C)(z)("uCamPanX")(), it = on(C)(z)("uCamPanY")(), at = on(C)(z)("uRotY")(), Tt = on(C)(z)("uActiveDepth")(), wt = on(C)(z)("uNodeDepth")(), Ft = on(C)(z)("uEdgeDepth")(), Vt = on(C)(z)("uArrowDepth")();
            Xr(C)(Q)(0)(), Xr(C)(dt)(1)(), rr(C)(X)(12.8)(), rr(C)(tt)(0.92)();
            const se = rd(C)(), zn = rd(C)();
            rA(I.nodeList)(C)(se)(), QE(C)(zn)(i)();
            const Qn = yd(I.nodeList)();
            Bi(C)(V)(Qn)(), _0(
              h0,
              Jo(Jo(bo(() => K0(Qc)))(Y0(U0)))(() => Jo(bo(yd(I.nodeList)))((wn) => bo(Bi(C)(V)(wn))))
            )().run(), Xr(C)(Z)(I.nodeList.length)(), Xr(C)(Y)(Qe(I.edgeSegFlat.length, 4))(), Xr(C)(R)(I.arrowData.length)(), Ii(C)(q)(I.nodeRectFlat)(), Yr(C)(A)(I.nodeShapeFlat)(), Yr(C)(O)(I.nodeLabelHeightFlat)(), Ii(C)(P)(I.edgeSegFlat)(), Yr(C)(wt)(I.nodeDepthFlat)(), Yr(C)(Ft)(I.edgeSegDepth)(), Yr(C)(Vt)(D((wn) => wn.depth)(I.arrowData))();
            const Pt = Uu(), ue = dn(o), qn = EE((wn) => {
              const On = KS(wn)(Pt);
              return () => (On(), $n(o)(x)());
            }), Wn = () => {
              const wn = ue();
              return qn(wn)();
            }, Sn = () => {
              const wn = ed(), On = dn(r)();
              $n(r)(wn)();
              const xr = dn(p)(), wr = dn($)(), qr = be(0.05)((wn - On) / 1e3), Ue = wr ? qr * xr : 0, nr = dn(e)() + Ue;
              $n(e)(nr)();
              const $e = XC(b._1)(), Si = GC(), Ci = sn(1)(be(2)(Si)), Ei = dn(i)(), qo = dn(s)(), Cs = dn(a)(), fo = dn(l)(), Ai = dn(d)(), tl = dn(u)(), Es = dn(_)(), As = 0 + dn(g)(), Ps = $e.width * Ci, Pi = $e.height * Ci, nl = { cx: 0, cy: 0, hw: I.halfW, hh: I.halfH }, bp = (() => {
                const Rs = I.duration > 0 ? nr - I.duration * Fe(nr / I.duration) : 0, lo = ZE(I)(Rs), Ri = HE(I)(tl)($e.width)($e.height)(qr)(Rs), Fi = XE(nl)(I.dives)(Rs), Lp = { centerX: Fi.cx, centerY: Fi.cy, camZ: Fi.hh * 2, viewport: Fi }, qc = (() => {
                  if (Ri.tag === "Nothing")
                    return Lp;
                  if (Ri.tag === "Just")
                    return Ri._1.world;
                  f();
                })(), Fs = qc.centerX + fo, Wc = qc.centerY + Ai, Gi = qc.camZ * 1.18 * Cs, Sp = Fs * ne(Es), Cp = Wc * ne(As) - Fs * le(Es) * le(As), Oc = Ps / Pi, Xc = $d(Fi)(Oc) / $d(nl)(Oc), Ep = I.ballRadius * Xc, Ap = 11 * I.scaleFactor * Xc, el = I.unitHalfH * Xc, rl = UE(I.dives)(Rs), ol = iA(Ue)(qo)(lo)(lE((() => {
                  const Mt = 0.5 * Oc * Gi / sn(0.3)(ne(Es)), il = 0.5 * Gi / sn(0.3)(ne(As));
                  return { minX: Fs - Mt, maxX: Fs + Mt, minY: Wc - il, maxY: Wc + il, margin: 4 * Gi / sn(1)(Pi) };
                })())(el * 0.25)(D(GE)(lt((Mt) => Mt.depth >= rl - 0.5, I.worldNodes)))(D((Mt) => sA(Ei)(Ap)({
                  x: Mt.x,
                  y: Mt.y
                })(Ep)(Mt.motionT)(Mt.labels))(lo))), Gs = D((Mt) => Mt._1)(ol), Is = Ct(0, 40, vt(Gs)((Mt) => Mt.glyphs)), Pp = D((Mt) => Mt._2)(ol), Rp = $n(m)({ resW: Ps, resH: Pi });
                return () => (Rp(), $n(s)(Pp)(), $n(u)(Ri.tag === "Just" ? J("Just", Ri._1.camera) : x)(), $n(l)(fo)(), $n(d)(Ai)(), $n(c)(Gi)(), QC(C)(b._1)(ln(Pe(Ps)))(ln(Pe(Pi)))(), YC(C)(), HC(C)(G)(Ps)(Pi)(), rr(C)(H)(nr)(), rr(C)(M)(As)(), rr(C)(st)(Gi)(), rr(C)(gt)(Sp)(), rr(C)(it)(Cp)(), rr(C)(at)(Es)(), rr(C)(Tt)(rl)(), rr(C)(j)(el)(), Xr(C)(rt)(lo.length)(), Bi(C)(et)(vt(lo)((Mt) => [Mt.x, Mt.y]))(), Yr(C)(ft)(D((Mt) => Mt.glow)(lo))(), Bi(C)(ct)(vt(lo)((Mt) => [Mt.nx, Mt.ny]))(), Ii(C)(W)(oA(I)(lo))(), Xr(C)(Bt)(Gs.length)(), Ii(C)(St)(vt(Gs)((Mt) => [Mt.chip.cx, Mt.chip.cy, Mt.chip.hw, Mt.chip.hh]))(), Bi(C)(en)(vt(Gs)((Mt) => [Mt.chip.dotX, Mt.chip.dotY]))(), Xr(C)(_t)(Is.length)(), Ii(C)(bt)(vt(Is)((Mt) => [Mt.cx, Mt.cy, Mt.hw, Mt.hh]))(), Yr(C)(ht)(D((Mt) => Mt.cell)(Is))(), Yr(C)($t)(D((Mt) => Mt.alpha)(Is))(), OC(C)());
              })();
              $e.width > 0 && bp();
              const kp = of(Sn)(Pt)();
              return $n(o)(J("Just", kp))();
            }, Ye = $n(r), Kt = () => {
              const wn = ed();
              Ye(wn)();
              const On = of(Sn)(Pt)();
              return $n(o)(J("Just", On))();
            };
            Kt();
            const yn = hE((wn) => {
              const On = dn(o);
              return () => {
                const xr = On();
                if (wn)
                  return xr.tag === "Nothing" ? Kt() : void 0;
                if (!wn && xr.tag === "Just")
                  return Wn();
              };
            })(), Z0 = FE(b._1)((wn) => (On) => (xr) => {
              const wr = dn(c);
              return () => {
                const qr = wr(), Ue = dn(m)();
                if (xr > 0.5) {
                  const $e = dn(a)();
                  return $n(a)(gd(0.3)(2.6)($e * fi(1.01)(On)))();
                }
                const Wr = dn(l)(), nr = dn(d)();
                return $n(l)(Wr + wn * qr / Ue.resH)(), $n(d)(nr - On * qr / Ue.resH)();
              };
            })((wn) => (On) => $n(h)(J("Just", { x: wn, y: On })))((wn) => (On) => (xr) => (wr) => {
              const qr = dn(h);
              return () => {
                const Ue = qr();
                if (Ue.tag !== "Nothing") {
                  if (Ue.tag === "Just") {
                    const Wr = On - Ue._1.y, nr = wn - Ue._1.x;
                    $n(h)(J("Just", { x: wn, y: On }))();
                    const $e = dn(c)(), Si = dn(m)();
                    if (xr >= 1.5) {
                      const qo = dn(l)(), Cs = dn(d)();
                      return $n(l)(qo - nr * $e / Si.resH)(), $n(d)(Cs + Wr * $e / Si.resH)();
                    }
                    const Ci = dn(_)(), Ei = dn(g)();
                    return $n(_)(Ci + nr * 5e-3)(), $n(g)(gd(-0.8)(0.8)(Ei + Wr * 5e-3))();
                  }
                  f();
                }
              };
            })((wn) => (On) => $n(h)(x))();
            return () => (Wn(), yn(), Z0());
          }
        }
        f();
      }
    ), AE(PE({
      style: { position: "absolute", inset: "0" },
      children: [RE({ ref: n, style: { position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" } })]
    }))();
  }
), cA = /* @__PURE__ */ ao(uA), aA = /* @__PURE__ */ ao($p), fA = /* @__PURE__ */ vp({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), lA = /* @__PURE__ */ vp({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), Yo = /* @__PURE__ */ xi(Go)(ff), Zu = xp().pure, gA = /* @__PURE__ */ ao(yp), dA = {
  eq: (t) => (n) => (t.renderer === "CanvasRenderer" ? n.renderer === "CanvasRenderer" : t.renderer === "SvgRenderer" && n.renderer === "SvgRenderer") && (t.sizing.tag === "AutoSize" ? n.sizing.tag === "AutoSize" : t.sizing.tag === "FixedSize" && n.sizing.tag === "FixedSize" && t.sizing._1 === n.sizing._1 && t.sizing._2 === n.sizing._2) && t.source === n.source && (t.theme === "Light" ? n.theme === "Light" : t.theme === "Dark" ? n.theme === "Dark" : t.theme === "Blueprint" ? n.theme === "Blueprint" : t.theme === "Whiteboard" ? n.theme === "Whiteboard" : t.theme === "Isometric" && n.theme === "Isometric") && (t.transparency === "PaintBackground" ? n.transparency === "PaintBackground" : t.transparency === "TransparentBackground" && n.transparency === "TransparentBackground")
}, _A = /* @__PURE__ */ V0("svg")(), xd = (t) => aA({
  className: "markgraf-player",
  style: { position: "relative", width: "100%", height: "100%" },
  children: [
    cA({
      source: t.src,
      speed: 1,
      playing: (() => {
        const n = De(t.paused, x, jt);
        if (n.tag === "Nothing")
          return !0;
        if (n.tag === "Just")
          return !n._1;
        f();
      })()
    })
  ]
}), Jp = (t) => (n) => {
  const e = De(n.theme, x, jt), r = (() => {
    if (e.tag === "Nothing")
      return "light";
    if (e.tag === "Just")
      return e._1;
    f();
  })(), o = De(n.renderer, x, jt), i = (() => {
    if (o.tag === "Nothing")
      return "canvas";
    if (o.tag === "Just")
      return o._1;
    f();
  })(), s = De(n.paused, x, jt), u = (() => {
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just")
      return s._1;
    f();
  })(), c = r === "light" ? J("Just", Hg) : r === "dark" ? J("Just", bk) : r === "blueprint" ? J("Just", kk) : r === "whiteboard" ? J("Just", Lk) : r === "isometric" ? J("Just", Sk) : x, a = i === "svg" ? J("Just", nC) : i === "canvas" ? J("Just", nd) : x, l = {
    source: t,
    renderer: (() => {
      if (a.tag === "Nothing")
        return nd;
      if (a.tag === "Just")
        return a._1;
      f();
    })(),
    sizing: (() => {
      const d = De(n.width, x, jt);
      if (d.tag === "Just") {
        const _ = De(n.height, x, jt);
        if (_.tag === "Just")
          return fp("FixedSize", d._1, _._1);
      }
      return tC;
    })(),
    theme: (() => {
      if (c.tag === "Nothing")
        return Hg;
      if (c.tag === "Just")
        return c._1;
      f();
    })(),
    transparency: (() => {
      const d = De(n.transparent, x, jt);
      if (d.tag === "Nothing")
        return !1;
      if (d.tag === "Just")
        return d._1;
      f();
    })() ? Ek : Ck
  };
  return () => {
    const d = Vn(Td), _ = ld((p, $) => k(p, $), x), g = _._1, h = ld((p, $) => k(p, $), { time: 0, keyframe: "", playing: !1 });
    fA(k(i, r))((() => {
      const p = sl("[markgraf] unknown renderer " + ba(i) + ", defaulting to canvas"), $ = (() => {
        if (a.tag === "Nothing")
          return !0;
        if (a.tag === "Just")
          return !1;
        f();
      })() ? p : () => {
      };
      return () => {
        $();
        const y = sl("[markgraf] unknown theme " + ba(r) + ", defaulting to light");
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
    const m = dn(d);
    return Mi(
      (p, $) => dA.eq(p)($),
      l,
      () => {
        const p = m(), $ = De(p, x, jt), y = (() => {
          if ($.tag === "Just")
            return VS(x, jt, "Element", $._1);
          if ($.tag === "Nothing")
            return x;
          f();
        })();
        if (y.tag === "Nothing")
          return () => {
          };
        if (y.tag === "Just") {
          const v = hC(y._1)(l.source)(l.renderer)(l.sizing)(l.theme)(l.transparency)(!0)();
          if (v.tag === "Left")
            return Hp("[markgraf] " + v._1)(), () => {
            };
          if (v.tag === "Right") {
            const N = v._1;
            _._2((b) => J("Just", N))();
            const T = N.subscribe((b) => h._2((L) => b))();
            return () => (T(), N.destroy(), _._2((b) => x)());
          }
        }
        f();
      }
    ), lA(k(
      u,
      (() => {
        if (g.tag === "Nothing")
          return !1;
        if (g.tag === "Just")
          return !0;
        f();
      })()
    ))((() => {
      const p = Yo(($) => u ? $.pause : $.play)(g);
      return () => (p(), () => {
      });
    })())(), Zu({
      elementRef: d,
      time: h._1.time,
      keyframe: h._1.keyframe,
      playing: h._1.playing,
      duration: g.tag === "Just" ? g._1.duration : 0,
      ready: (() => {
        if (g.tag === "Nothing")
          return !1;
        if (g.tag === "Just")
          return !0;
        f();
      })(),
      play: Yo((p) => p.play)(g),
      pause: Yo((p) => p.pause)(g),
      toggle: Yo((p) => p.toggle)(g),
      seek: (p) => Yo(($) => $.seek(p))(g),
      setSpeed: (p) => Yo(($) => $.setSpeed(p))(g)
    })();
  };
}, hA = /* @__PURE__ */ M0(
  "MarkgrafHeadlessPlayer",
  (t) => {
    const n = Jp(t.src)({ renderer: t.renderer, width: t.width, height: t.height, theme: t.theme, transparent: t.transparent, paused: t.paused })(), e = De(t.renderer, x, jt);
    return (() => {
      if (e.tag === "Nothing")
        return "canvas";
      if (e.tag === "Just")
        return e._1;
      f();
    })() === "svg" ? Zu(ao(_A)({ className: "markgraf-player", ref: n.elementRef }))() : Zu(gA({ className: "markgraf-player", ref: n.elementRef }))();
  }
), pA = /* @__PURE__ */ M0(
  "MarkgrafPlayer",
  (t) => Zu((() => {
    const n = De(t.renderer, x, jt), e = (() => {
      if (n.tag === "Nothing")
        return "canvas";
      if (n.tag === "Just")
        return n._1;
      f();
    })();
    return e === "sdf" || e === "webgl" ? xd(t) : ao(hA)(t);
  })())()
), yA = (t, n) => Jp(t)(n ?? {}), vA = pA;
export {
  vA as MarkgrafPlayer,
  yA as useMarkgraf
};
