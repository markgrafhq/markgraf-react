import _e from "react";
function S$(t) {
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
function nr(t, n) {
  return n > 0 ? Math.floor(t / n) : n < 0 ? -Math.floor(t / -n) : 0;
}
const Xn = (t) => (n) => t, B = function(t) {
  return function(n) {
    for (var e = n.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = t(n[o]);
    return r;
  };
}, L$ = { map: B }, s0 = (t) => t, E$ = function(t) {
  return function(n) {
    return {}.hasOwnProperty.call(n, t);
  };
}, P$ = function(t) {
  return function(n) {
    return n[t];
  };
}, an = function(t) {
  return t.toString();
}, zo = function(t) {
  var n = t.toString();
  return isNaN(n + ".0") ? n : n + ".0";
}, hf = function(t) {
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
}, u0 = (t) => t, Wn = /* @__PURE__ */ u0("LT"), qn = /* @__PURE__ */ u0("GT"), ce = /* @__PURE__ */ u0("EQ"), T = (t, n) => ({ tag: t, _1: n }), v = /* @__PURE__ */ T("Nothing"), qt = (t) => T("Just", t), B1 = (t) => {
  if (t.tag === "Nothing")
    return !0;
  if (t.tag === "Just")
    return !1;
  f();
}, D1 = (t) => {
  if (t.tag === "Nothing")
    return !1;
  if (t.tag === "Just")
    return !0;
  f();
}, Ii = function(t) {
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
}, Gr = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldr((o) => {
    const i = r(o);
    return (s) => n.apply(n.Functor0().map((u) => s0)(i))(s);
  })(t.pure());
}, Zi = (t) => {
  const n = Gr(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, Ga = {
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
}, Yt = {
  foldr: Ii,
  foldl: w,
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => Yt.foldr((r) => (o) => t.Semigroup0().append(e(r))(o))(n);
  }
}, wi = null;
function kn(t, n, e) {
  return t == null ? n : e(t);
}
const b = (t, n) => ({ tag: "Tuple", _1: t, _2: n }), Vn = (t) => (n) => b(t, n), Ia = (t) => t._2, Ba = (t) => t._1, A$ = function(t) {
  return function() {
    return t;
  };
}, R$ = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return ii.pure(e(r))();
  },
  Functor0: () => F$
}, ii = { pure: A$, Apply0: () => R$ }, F$ = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, G$ = function(t) {
  return function() {
    console.log(t);
  };
}, sg = function(t) {
  return function() {
    console.warn(t);
  };
}, wt = typeof Array.prototype.flatMap == "function" ? function(t) {
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
}, Et = (t, n) => ({ tag: t, _1: n }), I$ = (t) => Et("Left", t), z1 = (t) => Et("Right", t), B$ = {
  map: (t) => (n) => {
    if (n.tag === "Left")
      return Et("Left", n._1);
    if (n.tag === "Right")
      return Et("Right", t(n._1));
    f();
  }
}, H1 = {
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
  Functor0: () => B$
}, D$ = {
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
  Apply0: () => H1
}, z$ = { pure: z1, Apply0: () => H1 }, Q1 = { Applicative0: () => z$, Bind1: () => D$ }, H$ = (t) => t, Q$ = { map: (t) => (n) => t(n) }, O1 = { apply: (t) => (n) => t(n), Functor0: () => Q$ }, O$ = { bind: (t) => (n) => n(t), Apply0: () => O1 }, W$ = { pure: H$, Apply0: () => O1 }, Fe = { Applicative0: () => W$, Bind1: () => O$ }, Li = (t, n) => ({ tag: t, _1: n }), a0 = (t) => Li("Loop", t), q$ = (t) => Li("Done", t), X$ = {
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
  Monad0: () => Fe
}, Y$ = function(t) {
  return function(n) {
    return function() {
      return t(n());
    };
  };
}, M$ = function(t) {
  return function() {
    return t;
  };
}, U$ = function(t) {
  return function(n) {
    return function() {
      return n(t())();
    };
  };
}, K$ = { map: Y$ }, V$ = { Applicative0: () => c0, Bind1: () => j$ }, j$ = { bind: U$, Apply0: () => W1 }, W1 = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return c0.pure(e(r))();
  },
  Functor0: () => K$
}, c0 = { pure: M$, Apply0: () => W1 }, Z$ = {
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
  Monad0: () => V$
}, t2 = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, n2 = function(t, n, e, r) {
  return e >= 0 && e < r.length ? t(r[e]) : n;
}, f0 = function(t) {
  return t.length;
}, e2 = function(t, n, e) {
  return e.length > 0 ? t(e.pop()) : n;
}, r2 = function(t, n) {
  return n.push(t);
}, o2 = /* @__PURE__ */ t2(r2), i2 = (t, n) => ({ tag: "Iterator", _1: t, _2: n }), s2 = (t) => (n) => (e) => () => {
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
}, u2 = (t) => (n) => () => {
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
}, Xt = function(t) {
  return function(n) {
    for (var e = n.length, r = Array(e), o = 0; o < e; o++)
      r[o] = t(o)(n[o]);
    return r;
  };
};
var l0 = function(t) {
  return function(n) {
    return t === n;
  };
};
const a2 = l0, c2 = l0, si = l0, Ks = function(t) {
  return function(n) {
    return function(e) {
      if (n.length !== e.length) return !1;
      for (var r = 0; r < n.length; r++)
        if (!t(n[r])(e[r])) return !1;
      return !0;
    };
  };
}, Pr = { eq: si }, f2 = { eq: c2 }, po = { eq: a2 };
var g0 = function(t) {
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
const l2 = g0, g2 = g0, _2 = g0, F = { compare: /* @__PURE__ */ _2(Wn)(ce)(qn), Eq0: () => Pr }, it = { compare: /* @__PURE__ */ g2(Wn)(ce)(qn), Eq0: () => f2 }, st = { compare: /* @__PURE__ */ l2(Wn)(ce)(qn), Eq0: () => po }, ro = function(t) {
  return t;
}, d2 = /* @__PURE__ */ (function() {
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
          return function(a) {
            function c(l, _) {
              switch (_ - l) {
                case 0:
                  return s([]);
                case 1:
                  return i(t)(u(a[l]));
                case 2:
                  return o(i(n)(u(a[l])))(u(a[l + 1]));
                case 3:
                  return o(o(i(e)(u(a[l])))(u(a[l + 1])))(u(a[l + 2]));
                default:
                  var d = l + Math.floor((_ - l) / 4) * 2;
                  return o(i(r)(c(l, d)))(c(d, _));
              }
            }
            return c(0, a.length);
          };
        };
      };
    };
  };
})(), h2 = (t) => t, vo = {
  traverse: (t) => {
    const n = t.Apply0();
    return d2(n.apply)(n.Functor0().map)(t.pure);
  },
  sequence: (t) => vo.traverse(t)(h2),
  Functor0: () => L$,
  Foldable1: () => Yt
}, Vt = function(t, n) {
  for (var e = t > n ? -1 : 1, r = new Array(e * (n - t) + 1), o = t, i = 0; o !== n; )
    r[i++] = o, o += e;
  return r[i] = o, r;
};
var p2 = function(t, n) {
  if (t < 1)
    return [];
  var e = new Array(t);
  return e.fill(n);
}, m2 = function(t, n) {
  for (var e = [], r = 0, o = 0; o < t; o++)
    e[r++] = n;
  return e;
};
const $2 = typeof Array.prototype.fill == "function" ? p2 : m2, jt = /* @__PURE__ */ (function() {
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
})(), Ht = function(t, n, e) {
  return e.length === 0 ? t({}) : n(e[0])(e.slice(1));
}, q1 = function(t, n, e, r) {
  for (var o = 0; o < r.length; o++) {
    var i = e(r[o]);
    if (n(i)) return i;
  }
  return t;
}, Ko = function(t, n, e, r) {
  for (var o = 0, i = r.length; o < i; o++)
    if (e(r[o])) return t(o);
  return n;
}, X1 = function(t, n, e, r, o) {
  if (e < 0 || e > o.length) return n;
  var i = o.slice();
  return i.splice(e, 0, r), t(i);
}, Y1 = function(t, n, e, r) {
  if (e < 0 || e >= r.length) return n;
  var o = r.slice();
  return o.splice(e, 1), t(o);
}, mo = function(t, n, e, r, o) {
  if (e < 0 || e >= o.length) return n;
  var i = o.slice();
  return i[e] = r, t(i);
}, fn = function(t) {
  return t.slice().reverse();
}, Ee = function(t) {
  if (t.length <= 1e4)
    return Array.prototype.concat.apply([], t);
  for (var n = [], e = 0, r = t.length; e < r; e++)
    for (var o = t[e], i = 0, s = o.length; i < s; i++)
      n.push(o[i]);
  return n;
}, ht = function(t, n) {
  return n.filter(t);
}, y2 = function(t, n, e) {
  for (var r = e.length, o = n, i = new Array(r), s = 0; s < r; s++)
    o = t(o)(e[s]), i[s] = o;
  return i;
}, x2 = /* @__PURE__ */ (function() {
  function t(n, e, r, o, i, s) {
    var u, a, c, l, _, d, g;
    for (u = i + (s - i >> 1), u - i > 1 && t(n, e, o, r, i, u), s - u > 1 && t(n, e, o, r, u, s), a = i, c = u, l = i; a < u && c < s; )
      _ = o[a], d = o[c], g = e(n(_)(d)), g > 0 ? (r[l++] = d, ++c) : (r[l++] = _, ++a);
    for (; a < u; )
      r[l++] = o[a++];
    for (; c < s; )
      r[l++] = o[c++];
  }
  return function(n, e, r) {
    var o;
    return r.length < 2 ? r : (o = r.slice(0), t(n, e, o, r.slice(0), 0, r.length), o);
  };
})(), At = function(t, n, e) {
  return e.slice(t, n);
}, Ln = function(t, n, e) {
  for (var r = n.length < e.length ? n.length : e.length, o = new Array(r), i = 0; i < r; i++)
    o[i] = t(n[i])(e[i]);
  return o;
}, En = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (t(n[r])) return !0;
  return !1;
}, M1 = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (!t(n[r])) return !1;
  return !0;
}, It = (t) => (n) => x2(
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
), v2 = (t) => (n) => It((e) => (r) => t.compare(n(e))(n(r))), St = (t) => (n) => (() => {
  const e = o2(n);
  return () => {
    const r = [...t];
    return e(r)(), r;
  };
})()(), qe = (t) => {
  if (t.length === 0)
    return t.length - 1 | 0, v;
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? T("Just", { init: At(0, t.length - 1 | 0, t), last: t[n] }) : v;
}, T2 = (t) => (n) => (e) => t >= 0 && t < e.length ? mo(qt, v, t, n(e[t]), e) : v, kr = (t) => (n) => {
  const r = ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const a = i;
      if (a >= 0 && a < n.length) {
        if (t(n[a])) {
          i = a + 1 | 0;
          continue;
        }
        s = !1, u = T("Just", a);
        continue;
      }
      s = !1, u = v;
    }
    return u;
  })(0);
  if (r.tag === "Just")
    return r._1 === 0 ? { init: [], rest: n } : { init: At(0, r._1, n), rest: At(r._1, n.length, n) };
  if (r.tag === "Nothing")
    return { init: n, rest: [] };
  f();
}, Bi = (t) => (n) => {
  const e = It((r) => (o) => t(r._2)(o._2))(Xt(Vn)(n));
  return 0 < e.length ? B(Ia)(v2(st)(Ba)((() => {
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
}, w2 = (t) => (n) => {
  const e = [], o = i2(
    (i) => i >= 0 && i < n.length ? T("Just", n[i]) : v,
    { value: 0 }
  );
  return u2(o)((i) => () => {
    const s = [];
    s.push(i), s2(t(i))(o)(s)(), e.push(s);
  })(), e;
}, en = (t) => (n) => {
  const e = Ko(qt, v, t, n);
  return e.tag === "Just" ? T("Just", n[e._1]) : v;
}, ws = (t) => (n) => ht(t, n), Ne = (t) => (n) => (e) => {
  const r = Ko(qt, v, (o) => t.eq(o)(n), e);
  if (r.tag === "Nothing")
    return !1;
  if (r.tag === "Just")
    return !0;
  f();
}, Da = (t) => (n) => wt(n)(t), bt = (t) => Da((n) => {
  const e = t(n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [e._1];
  f();
}), N2 = isFinite, sr = Math.abs, J2 = Math.acos, Wo = function(t) {
  return function(n) {
    return Math.atan2(t, n);
  };
}, za = Math.ceil, fe = Math.cos, Di = Math.exp, Xe = Math.floor, qu = Math.log, C2 = function(t) {
  return function(n) {
    return Math.min(t, n);
  };
}, zi = function(t) {
  return function(n) {
    return Math.pow(t, n);
  };
}, We = Math.round, we = Math.sin, ne = Math.sqrt, b2 = Math.tan, k2 = function(t) {
  return function(n) {
    return function(e) {
      return (e | 0) === e ? t(e) : n;
    };
  };
}, V = function(t) {
  return t;
}, S2 = function(t) {
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
}, L2 = /* @__PURE__ */ S2(qt)(v), E2 = /* @__PURE__ */ L2(10), U1 = /* @__PURE__ */ k2(qt)(v), dn = (t) => {
  if (!N2(t))
    return 0;
  if (t >= V(2147483647))
    return 2147483647;
  if (t <= V(-2147483648))
    return -2147483648;
  const n = U1(t);
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return n._1;
  f();
}, P2 = (t, n) => ({ tag: "NonEmpty", _1: t, _2: n }), kt = (t, n, e) => ({ tag: t, _1: n, _2: e }), Y = /* @__PURE__ */ kt("Nil"), Jn = {
  foldr: (t) => (n) => {
    const e = Jn.foldl((i) => (s) => t(s)(i))(n), o = ((i) => (s) => {
      let u = i, a = s, c = !0, l;
      for (; c; ) {
        const _ = u, d = a;
        if (d.tag === "Nil") {
          c = !1, l = _;
          continue;
        }
        if (d.tag === "Cons") {
          u = kt("Cons", d._1, _), a = d._2;
          continue;
        }
        f();
      }
      return l;
    })(Y);
    return (i) => e(o(i));
  },
  foldl: (t) => (e) => (r) => {
    let o = e, i = r, s = !0, u;
    for (; s; ) {
      const a = o, c = i;
      if (c.tag === "Nil") {
        s = !1, u = a;
        continue;
      }
      if (c.tag === "Cons") {
        o = t(a)(c._1), i = c._2;
        continue;
      }
      f();
    }
    return u;
  },
  foldMap: (t) => {
    const n = t.mempty;
    return (e) => Jn.foldl((r) => {
      const o = t.Semigroup0().append(r);
      return (i) => o(e(i));
    })(n);
  }
}, A2 = function(t) {
  return function(n) {
    return function(e) {
      return function(r) {
        return function(o) {
          return function(i) {
            for (var s = [], u = i; ; ) {
              var a = o(u);
              s.push(e(a));
              var c = r(a);
              if (t(c)) return s;
              u = n(c);
            }
          };
        };
      };
    };
  };
}, R2 = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, F2 = { unfoldr1: /* @__PURE__ */ A2(B1)(R2)(Ba)(Ia) }, G2 = function(t) {
  return function(n) {
    return function(e) {
      return function(r) {
        return function(o) {
          return function(i) {
            for (var s = [], u = i; ; ) {
              var a = o(u);
              if (t(a)) return s;
              var c = n(a);
              s.push(e(c)), u = r(c);
            }
          };
        };
      };
    };
  };
}, I2 = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, he = {
  unfoldr: /* @__PURE__ */ G2(B1)(I2)(Ba)(Ia),
  Unfoldable10: () => F2
}, Zt = (t, n, e, r, o, i, s) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s }), ge = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), $u = (t, n, e) => ({ tag: "Split", _1: t, _2: n, _3: e }), ug = (t, n, e) => ({ tag: "SplitLast", _1: t, _2: n, _3: e }), G = /* @__PURE__ */ Zt("Leaf"), Ue = /* @__PURE__ */ ge("IterLeaf"), Pn = (t, n, e, r) => {
  if (e.tag === "Leaf") {
    if (r.tag === "Leaf")
      return Zt("Node", 1, 1, t, n, e, r);
    if (r.tag === "Node")
      return Zt("Node", 1 + r._1 | 0, 1 + r._2 | 0, t, n, e, r);
    f();
  }
  if (e.tag === "Node") {
    if (r.tag === "Leaf")
      return Zt("Node", 1 + e._1 | 0, 1 + e._2 | 0, t, n, e, r);
    if (r.tag === "Node")
      return Zt("Node", e._1 > r._1 ? 1 + e._1 | 0 : 1 + r._1 | 0, (1 + e._2 | 0) + r._2 | 0, t, n, e, r);
  }
  f();
}, de = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r.tag === "Leaf" ? Zt("Node", 1, 1, t, n, G, G) : r.tag === "Node" && r._1 > 1 ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      f();
    })() ? Pn(r._5._3, r._5._4, Pn(t, n, e, r._5._5), Pn(r._3, r._4, r._5._6, r._6)) : Pn(r._3, r._4, Pn(t, n, e, r._5), r._6) : Pn(t, n, e, r);
  if (e.tag === "Node")
    return r.tag === "Node" ? r._1 > (e._1 + 1 | 0) ? r._5.tag === "Node" && (() => {
      if (r._6.tag === "Leaf")
        return r._5._1 > 0;
      if (r._6.tag === "Node")
        return r._5._1 > r._6._1;
      f();
    })() ? Pn(r._5._3, r._5._4, Pn(t, n, e, r._5._5), Pn(r._3, r._4, r._5._6, r._6)) : Pn(r._3, r._4, Pn(t, n, e, r._5), r._6) : e._1 > (r._1 + 1 | 0) ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      f();
    })() ? Pn(e._6._3, e._6._4, Pn(e._3, e._4, e._5, e._6._5), Pn(t, n, e._6._6, r)) : Pn(e._3, e._4, e._5, Pn(t, n, e._6, r)) : Pn(t, n, e, r) : r.tag === "Leaf" && e._1 > 1 ? e._6.tag === "Node" && (() => {
      if (e._5.tag === "Leaf")
        return 0 <= e._6._1;
      if (e._5.tag === "Node")
        return e._5._1 <= e._6._1;
      f();
    })() ? Pn(e._6._3, e._6._4, Pn(e._3, e._4, e._5, e._6._5), Pn(t, n, e._6._6, r)) : Pn(e._3, e._4, e._5, Pn(t, n, e._6, r)) : Pn(t, n, e, r);
  f();
}, Hi = (t, n, e) => {
  if (e.tag === "Leaf")
    return $u(v, G, G);
  if (e.tag === "Node") {
    const r = t(n)(e._3);
    if (r === "LT") {
      const o = Hi(t, n, e._5);
      return $u(o._1, o._2, de(e._3, e._4, o._3, e._6));
    }
    if (r === "GT") {
      const o = Hi(t, n, e._6);
      return $u(o._1, de(e._3, e._4, e._5, o._2), o._3);
    }
    if (r === "EQ")
      return $u(T("Just", e._4), e._5, e._6);
  }
  f();
}, K1 = (t, n, e, r) => {
  if (r.tag === "Leaf")
    return ug(t, n, e);
  if (r.tag === "Node") {
    const o = K1(r._3, r._4, r._5, r._6);
    return ug(o._1, o._2, de(t, n, e, o._3));
  }
  f();
}, ts = (t, n) => {
  if (t.tag === "Leaf")
    return n;
  if (t.tag === "Node") {
    const e = K1(t._3, t._4, t._5, t._6);
    return de(e._1, e._2, e._3, n);
  }
  f();
}, lr = (t, n, e) => {
  if (n.tag === "Leaf")
    return G;
  if (e.tag === "Leaf")
    return n;
  if (e.tag === "Node") {
    const r = Hi(t, e._3, n);
    return ts(lr(t, r._2, e._5), lr(t, r._3, e._6));
  }
  f();
}, Xu = (t, n, e, r) => {
  if (e.tag === "Leaf" || r.tag === "Leaf")
    return G;
  if (r.tag === "Node") {
    const o = Hi(t, r._3, e), i = Xu(t, n, o._2, r._5), s = Xu(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return de(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return ts(i, s);
  }
  f();
}, Yn = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r;
  if (r.tag === "Leaf")
    return e;
  if (r.tag === "Node") {
    const o = Hi(t, r._3, e), i = Yn(t, n, o._2, r._5), s = Yn(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return de(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return de(r._3, r._4, i, s);
  }
  f();
}, V1 = (t) => (n) => (e) => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return G;
    if (o.tag === "Node") {
      const i = t.compare(e)(o._3);
      if (i === "LT")
        return de(o._3, o._4, r(o._5), o._6);
      if (i === "GT")
        return de(o._3, o._4, o._5, r(o._6));
      if (i === "EQ") {
        const s = n(o._4);
        if (s.tag === "Nothing")
          return ts(o._5, o._6);
        if (s.tag === "Just")
          return Zt("Node", o._1, o._2, o._3, s._1, o._5, o._6);
      }
    }
    f();
  };
  return r;
}, B2 = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return G;
    if (r.tag === "Node") {
      const o = n(r._3)(r._4);
      if (o.tag === "Just")
        return de(r._3, o._1, e(r._5), e(r._6));
      if (o.tag === "Nothing")
        return ts(e(r._5), e(r._6));
    }
    f();
  };
  return e;
}, D2 = (t) => (n) => (r) => {
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
      o = ((c) => (l) => {
        let _ = c, d = l, g = !0, p;
        for (; g; ) {
          const m = _, h = d;
          if (h.tag === "Leaf") {
            g = !1, p = m;
            continue;
          }
          if (h.tag === "Node") {
            if (h._6.tag === "Leaf") {
              _ = ge("IterEmit", h._3, h._4, m), d = h._5;
              continue;
            }
            _ = ge("IterEmit", h._3, h._4, ge("IterNode", h._6, m)), d = h._5;
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
}, Ke = /* @__PURE__ */ D2((t, n, e) => T("Just", b(b(t, n), e)))((t) => v), Wt = (t) => (n) => (e) => (r) => {
  const o = (i) => {
    if (i.tag === "Leaf")
      return Zt("Node", 1, 1, e, r, G, G);
    if (i.tag === "Node") {
      const s = t.compare(e)(i._3);
      if (s === "LT")
        return de(i._3, i._4, o(i._5), i._6);
      if (s === "GT")
        return de(i._3, i._4, i._5, o(i._6));
      if (s === "EQ")
        return Zt("Node", i._1, i._2, e, n(i._4)(r), i._5, i._6);
    }
    f();
  };
  return o;
}, tt = (t) => (n) => (e) => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return Zt("Node", 1, 1, n, e, G, G);
    if (o.tag === "Node") {
      const i = t.compare(n)(o._3);
      if (i === "LT")
        return de(o._3, o._4, r(o._5), o._6);
      if (i === "GT")
        return de(o._3, o._4, o._5, r(o._6));
      if (i === "EQ")
        return Zt("Node", o._1, o._2, n, e, o._5, o._6);
    }
    f();
  };
  return r;
}, pn = (t) => (n) => n.foldl((e) => (r) => tt(t)(r._1)(r._2)(e))(G), Qi = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return G;
    if (r.tag === "Node") {
      const o = t.compare(n)(r._3);
      if (o === "LT")
        return de(r._3, r._4, e(r._5), r._6);
      if (o === "GT")
        return de(r._3, r._4, r._5, e(r._6));
      if (o === "EQ")
        return ts(r._5, r._6);
    }
    f();
  };
  return e;
}, j1 = (t) => {
  const n = t.compare;
  return (e) => (r) => (o) => {
    const i = Hi(n, r, o), s = e(i._1);
    if (s.tag === "Nothing")
      return ts(i._2, i._3);
    if (s.tag === "Just")
      return de(r, s._1, i._2, i._3);
    f();
  };
}, bn = function(t) {
  return function(n) {
    return t + n | 0;
  };
}, gr = function(t) {
  return function(n) {
    return t + n;
  };
}, jr = function(t) {
  return function(n) {
    if (n === 0) return 0;
    var e = Math.abs(n);
    return (t % e + e) % e;
  };
}, Nn = function(t) {
  return function(n) {
    return t.length === 0 ? n : n.length === 0 ? t : t.concat(n);
  };
}, z2 = { append: Nn }, H2 = { mempty: [], Semigroup0: () => z2 };
function _0(t) {
  return function(n) {
    return function(e) {
      return t.apply(e, [n]);
    };
  };
}
const Q2 = _0(Number.prototype.toPrecision), O2 = _0(Number.prototype.toFixed), W2 = _0(Number.prototype.toExponential), d0 = (t, n) => ({ tag: t, _1: n }), h0 = (t) => (n) => (e) => {
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
}, p0 = (t) => {
  if (t.tag === "Precision")
    return Q2(t._1);
  if (t.tag === "Fixed")
    return O2(t._1);
  if (t.tag === "Exponential")
    return W2(t._1);
  f();
};
function q2() {
  return Date.now();
}
function ag(t) {
  return new Error(t);
}
function Vs(t) {
  return function() {
    return t.getContext("2d");
  };
}
function Z1(t) {
  return function() {
    return t.width;
  };
}
function td(t) {
  return function() {
    return t.height;
  };
}
function Ha(t) {
  return function(n) {
    return function() {
      t.width = n;
    };
  };
}
function Qa(t) {
  return function(n) {
    return function() {
      t.height = n;
    };
  };
}
function m0(t) {
  return function(n) {
    return function() {
      t.lineWidth = n;
    };
  };
}
function $0(t) {
  return function(n) {
    return function() {
      t.fillStyle = n;
    };
  };
}
function X2(t) {
  return function(n) {
    return function() {
      t.strokeStyle = n;
    };
  };
}
function Lc(t) {
  return function(n) {
    return function() {
      t.lineCap = n;
    };
  };
}
function Ec(t) {
  return function(n) {
    return function() {
      t.lineJoin = n;
    };
  };
}
function Y2(t) {
  return function(n) {
    return function() {
      t.globalCompositeOperation = n;
    };
  };
}
function M2(t) {
  return function(n) {
    return function() {
      t.globalAlpha = n;
    };
  };
}
function nd(t) {
  return function() {
    t.beginPath();
  };
}
function y0(t) {
  return function() {
    t.stroke();
  };
}
function x0(t) {
  return function() {
    t.fill();
  };
}
function U2(t) {
  return function() {
    t.clip();
  };
}
function $s(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.lineTo(n, e);
      };
    };
  };
}
function ed(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.moveTo(n, e);
      };
    };
  };
}
function rd(t) {
  return function() {
    t.closePath();
  };
}
function K2(t) {
  return function(n) {
    return function() {
      t.fillRect(n.x, n.y, n.width, n.height);
    };
  };
}
function v0(t) {
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
function pf(t) {
  return function(n) {
    return function() {
      t.translate(n.translateX, n.translateY);
    };
  };
}
function V2(t) {
  return function(n) {
    return function() {
      t.transform(n.a, n.b, n.c, n.d, n.e, n.f);
    };
  };
}
function j2(t) {
  return function(n) {
    return function() {
      t.textAlign = n;
    };
  };
}
function Z2(t) {
  return function(n) {
    return function() {
      t.textBaseline = n;
    };
  };
}
function Oa(t) {
  return function(n) {
    return function() {
      t.font = n;
    };
  };
}
function T0(t) {
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
function od(t) {
  return function(n) {
    return function() {
      return t.measureText(n);
    };
  };
}
function Qr(t) {
  return function() {
    t.save();
  };
}
function Or(t) {
  return function() {
    t.restore();
  };
}
function ys(t) {
  return function(n) {
    return function() {
      t.quadraticCurveTo(n.cpx, n.cpy, n.x, n.y);
    };
  };
}
function ty(t) {
  return function(n) {
    return function() {
      t.bezierCurveTo(n.cp1x, n.cp1y, n.cp2x, n.cp2y, n.x, n.y);
    };
  };
}
const id = (t) => t, w0 = (t) => t, N0 = (t) => t, J0 = (t) => t, Wa = (t) => t, ny = /* @__PURE__ */ Wa("BaselineTop"), C0 = /* @__PURE__ */ Wa("BaselineMiddle"), ey = /* @__PURE__ */ Wa("BaselineAlphabetic"), ry = /* @__PURE__ */ Wa("BaselineBottom"), oy = /* @__PURE__ */ J0("AlignLeft"), iy = /* @__PURE__ */ J0("AlignRight"), b0 = /* @__PURE__ */ J0("AlignCenter"), k0 = /* @__PURE__ */ N0("BevelJoin"), qa = /* @__PURE__ */ N0("RoundJoin"), S0 = /* @__PURE__ */ N0("MiterJoin"), L0 = /* @__PURE__ */ w0("Round"), E0 = /* @__PURE__ */ w0("Square"), P0 = /* @__PURE__ */ w0("Butt"), sy = /* @__PURE__ */ id("SourceOver"), uy = /* @__PURE__ */ id("Difference"), A0 = (t) => (n) => Z2(t)((() => {
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
})()), R0 = (t) => (n) => j2(t)((() => {
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
})()), Xa = (t) => (n) => {
  if (n === "BevelJoin")
    return Ec(t)("bevel");
  if (n === "RoundJoin")
    return Ec(t)("round");
  if (n === "MiterJoin")
    return Ec(t)("miter");
  f();
}, F0 = (t) => (n) => {
  if (n === "Round")
    return Lc(t)("round");
  if (n === "Square")
    return Lc(t)("square");
  if (n === "Butt")
    return Lc(t)("butt");
  f();
}, cg = (t) => (n) => Y2(t)((() => {
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
})()), ay = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldrWithIndex((o) => {
    const i = r(o);
    return (s) => {
      const u = i(s);
      return (a) => n.apply(n.Functor0().map((c) => s0)(u))(a);
    };
  })(t.pure());
}, cy = (t) => {
  const n = ay(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, G0 = {
  foldrWithIndex: (t) => (n) => {
    const e = Ii((o) => {
      const i = o._1, s = o._2;
      return (u) => t(i)(s)(u);
    })(n), r = Xt(Vn);
    return (o) => e(r(o));
  },
  foldlWithIndex: (t) => (n) => {
    const e = w((o) => (i) => t(i._1)(o)(i._2))(n), r = Xt(Vn);
    return (o) => e(r(o));
  },
  foldMapWithIndex: (t) => {
    const n = t.mempty;
    return (e) => G0.foldrWithIndex((r) => (o) => (i) => t.Semigroup0().append(e(r)(o))(i))(n);
  },
  Foldable0: () => Yt
}, be = {
  foldr: (t) => (n) => {
    const e = Jn.foldr(t)(n);
    return (r) => e((() => {
      const o = (i, s) => {
        if (i.tag === "Leaf")
          return s;
        if (i.tag === "Node")
          return o(i._5, kt("Cons", i._3, o(i._6, s)));
        f();
      };
      return o(r, Y);
    })());
  }
}, fy = (t) => {
  const n = {
    append: (() => {
      const e = t.compare;
      return (r) => (o) => Yn(e, Xn, r, o);
    })()
  };
  return { mempty: G, Semigroup0: () => n };
}, Ns = function(t) {
  return function(n) {
    if (t >= 0 && t < n.length) return n.charAt(t);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
}, To = function(t) {
  return t.join("");
}, Ir = function(t) {
  return t.split("");
}, ns = function(t) {
  return t;
}, mr = function(t) {
  return t.length;
}, fg = function(t) {
  return function(n) {
    return n.substr(0, t);
  };
}, Oi = function(t) {
  return function(n) {
    return n.substring(t);
  };
}, sd = function(t) {
  return function(n) {
    return { before: n.substring(0, t), after: n.substring(t) };
  };
}, ly = (t) => (n) => {
  const e = sd(mr(n) - mr(t) | 0)(n);
  return e.after === t ? T("Just", e.before) : v;
}, wo = (t) => (n) => {
  const e = sd(mr(t))(n);
  return e.before === t ? T("Just", e.after) : v;
}, ud = (t) => ({
  bind: (n) => (e) => t.Bind1().bind(n)((r) => {
    if (r.tag === "Left")
      return t.Applicative0().pure(Et("Left", r._1));
    if (r.tag === "Right")
      return e(r._1);
    f();
  }),
  Apply0: () => ad(t)
}), ad = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = {
    map: (r) => n.map((o) => {
      if (o.tag === "Left")
        return Et("Left", o._1);
      if (o.tag === "Right")
        return Et("Right", r(o._1));
      f();
    })
  };
  return {
    apply: (() => {
      const r = ud(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => I0(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, I0 = (t) => ({ pure: (n) => t.Applicative0().pure(Et("Right", n)), Apply0: () => ad(t) }), gy = (t) => {
  const n = { Applicative0: () => I0(t), Bind1: () => ud(t) };
  return { throwError: (e) => t.Applicative0().pure(Et("Left", e)), Monad0: () => n };
};
function lg(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
const _y = (t, n, e) => ({ tag: t, _1: n, _2: e }), dy = (t) => (n) => (e) => lg(e) === n ? I0(t).pure(e) : gy(t).throwError(P2(_y("TypeMismatch", n, lg(e)), Y)), hy = function(t) {
  var n = null;
  return function() {
    return t === void 0 || (n = t(), t = void 0), n;
  };
}, py = function(t) {
  return t();
}, es = function(n) {
  return function(e) {
    return function() {
      return n(e);
    };
  };
}, js = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, rs = function(n) {
  return function(e) {
    return function(r) {
      return function(o) {
        return function() {
          return n(e, r, o);
        };
      };
    };
  };
}, B0 = function(n) {
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
}, my = function(n) {
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
}, $y = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, yy = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, Vo = (t) => BigInt(t), xy = (t) => Number(t), Fu = (t) => (n) => t + n, Gu = (t) => (n) => t * n, mf = (t) => (n) => t - n, cd = 0n, Yu = 1n, fd = (t) => (n) => t ^ n, Es = (t) => (n) => t & n, D0 = (t) => (n) => t << n, $f = (t) => (n) => t >> n, vy = (t) => (n) => t == n, Ty = (t) => (n) => t === n ? 0 : t > n ? 1 : -1, wy = { eq: vy }, gg = {
  compare: (t) => (n) => {
    const e = Ty(t)(n);
    return e === 1 ? qn : e === 0 ? ce : Wn;
  },
  Eq0: () => wy
}, Ny = /* @__PURE__ */ $y(qt)(v), Jy = /* @__PURE__ */ yy(qt)(v), Mu = function(t) {
  throw new Error(t);
}, ld = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = it.compare(n._1)(e._1);
      return r === "LT" ? Wn : r === "GT" ? qn : it.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), Cy = (t) => (n) => sr(t._1 - n._1) + sr(t._2 - n._2), ui = (t) => t, Ya = (t) => t, In = /* @__PURE__ */ Ya("North"), Bn = /* @__PURE__ */ Ya("South"), Wr = /* @__PURE__ */ Ya("East"), qr = /* @__PURE__ */ Ya("West"), Yr = /* @__PURE__ */ ui("Rectangle"), _g = /* @__PURE__ */ ui("Cylinder"), by = /* @__PURE__ */ ui("Parallelogram"), ky = /* @__PURE__ */ ui("Diamond"), Sy = /* @__PURE__ */ ui("Ellipse"), dg = /* @__PURE__ */ ui("Document"), Ly = /* @__PURE__ */ ui("Cloud"), gd = /* @__PURE__ */ w(gr)(0), Ey = (t) => (n) => (e) => {
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
}, co = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Uu = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, hg = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Py = (t) => {
  const n = { top: 0, bottom: 0, left: 0, right: 0 }, e = t.shape === "Cloud" ? { ...n, top: t.h * 0.38 } : t.shape === "Cylinder" ? { ...n, bottom: 5 } : t.shape === "Document" ? { ...n, bottom: t.h * 0.05 } : n;
  return [{ x: t.x - e.left, y: t.y - e.top }, { x: t.x + t.w + e.right, y: t.y + t.h + e.bottom }];
}, jo = (t) => (n) => {
  const e = Ln(
    (s) => (u) => ({
      a: s,
      b: u,
      len: (() => {
        const a = u.y - s.y, c = u.x - s.x;
        return ne(c * c + a * a);
      })()
    }),
    t,
    At(1, t.length, t)
  ), r = gd(B((s) => s.len)(e)), o = Ey(0)(r)(n * r), i = (s) => (u) => (a) => {
    let c = s, l = u, _ = a, d = !0, g;
    for (; d; ) {
      const p = c, m = l, h = _, $ = Ht((x) => v, (x) => (y) => T("Just", { head: x, tail: y }), p);
      if ($.tag === "Nothing") {
        const x = t.length - 1 | 0;
        if (x >= 0 && x < t.length) {
          d = !1, g = t[x];
          continue;
        }
        d = !1, g = h;
        continue;
      }
      if ($.tag === "Just") {
        if (m <= $._1.head.len) {
          const x = $._1.head.len <= 0 ? 0 : m / $._1.head.len;
          d = !1, g = { x: $._1.head.a.x + ($._1.head.b.x - $._1.head.a.x) * x, y: $._1.head.a.y + ($._1.head.b.y - $._1.head.a.y) * x };
          continue;
        }
        c = $._1.tail, l = m - $._1.head.len, _ = h;
        continue;
      }
      f();
    }
    return g;
  };
  return 0 < t.length ? T("Just", i(e)(o)(t[0])) : v;
}, Ay = (t) => (n) => {
  const e = co(1e-6)(t.scale);
  return { x: (n.x - t.tx) / e, y: (n.y - t.ty) / e, w: n.w / e, h: n.h / e };
}, Ma = (t) => gd(Ln(
  (n) => (e) => {
    const r = e.y - n.y, o = e.x - n.x;
    return ne(o * o + r * r);
  },
  t,
  At(1, t.length, t)
)), Ry = (t) => (n) => {
  const e = co(4)(0.15 * Uu(n.w)(n.h)), r = co(1)(t.w), o = co(1)(t.h), i = co(1)(n.w - 2 * e), s = co(1)(n.h - 2 * e), u = Uu(i / r)(s / o);
  return { scale: u, tx: n.x + e + (i - r * u) / 2 - t.x * u, ty: n.y + e + (s - o * u) / 2 - t.y * u };
}, z0 = { scale: 1, tx: 0, ty: 0 }, hn = (t) => {
  const n = Ht(
    (e) => v,
    (e) => (r) => T("Just", { head: e, tail: r }),
    [
      ...(() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, kt("Cons", r._4, e(r._6, o)));
          f();
        };
        return wt(jt(Jn.foldr, e(t.nodes, Y)))(Py);
      })(),
      ...Ee((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, kt("Cons", r._4, e(r._6, o)));
          f();
        };
        return jt(Jn.foldr, e(t.edges, Y));
      })())
    ]
  );
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = w((r) => (o) => ({ minX: Uu(r.minX)(o.x), minY: Uu(r.minY)(o.y), maxX: co(r.maxX)(o.x), maxY: co(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, Fy = (t) => (n) => ((r) => (o) => (i) => {
  let s = r, u = o, a = i, c = !0, l;
  for (; c; ) {
    const _ = s, d = u, g = a, p = Ht((m) => v, (m) => (h) => T("Just", { head: m, tail: h }), d);
    if (p.tag === "Nothing") {
      c = !1, l = g;
      continue;
    }
    if (p.tag === "Just") {
      const m = hg(p._1.head)(_.interiors);
      if (m.tag === "Nothing") {
        c = !1, l = g;
        continue;
      }
      if (m.tag === "Just") {
        s = m._1, u = p._1.tail, a = (() => {
          const h = Ry(hn(m._1.layout))((() => {
            const $ = hg(p._1.head)(_.layout.nodes);
            if ($.tag === "Nothing")
              return { x: 0, y: 0, w: 1, h: 1, label: "", shape: Yr };
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
})(t)(n)(z0), Gy = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Iy = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Iu = (t) => (n) => (e) => {
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
}, By = (t) => (n) => (e) => (r) => {
  const o = hn(n);
  return e <= 0 || r <= 0 || o.w <= 0 || o.h <= 0 ? 1 : t ? Gy(o.w / e)(o.h / r) : Iy(o.w / e)(o.h / r);
}, _d = (t) => (n) => (e) => {
  const r = t.widthPx / t.heightPx, o = e.w / e.h;
  if (t.widthPx <= 0 || t.heightPx <= 0) {
    const s = 1 / Iu(0.05)(1)(n);
    return { w: e.w * s, h: e.h * s };
  }
  if (r > o) {
    const s = 1 / Iu(0.05)(1)(n);
    return { w: e.h * r * s, h: e.h * s };
  }
  const i = 1 / Iu(0.05)(1)(n);
  return { w: e.w * i, h: e.w / r * i };
}, pg = (t) => (n) => (e) => (r) => (o) => {
  const i = t + o / 2, s = t + n - o / 2, u = t + n / 2, a = e + r / 2;
  return o >= n ? u : Iu(i)(s)(a);
}, dd = (t) => (n) => (e) => (r) => {
  const o = hn(t);
  return { x: pg(o.x)(o.w)(n.x)(n.w)(e), y: pg(o.y)(o.h)(n.y)(n.h)(r) };
}, hd = (t) => (n) => (e) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: By(t)(n)(e.w)(e.h) }), Dy = (t) => (n) => (e) => (r) => {
  const o = { x: r.x - t.padding, y: r.y - t.padding, w: r.w + t.padding * 2, h: r.h + t.padding * 2 }, i = _d(n)(0.65)(o), s = dd(e)(o)(i.w)(i.h), u = { x: s.x - i.w / 2, y: s.y - i.h / 2, w: i.w, h: i.h };
  return { focus: r, paddedFocus: o, viewport: u, camera: hd(n.widthPx > 0 && n.heightPx > 0)(e)(u) };
}, zy = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = hn(r), u = { x: s.x * o.scale + o.tx, y: s.y * o.scale + o.ty, w: s.w * o.scale, h: s.h * o.scale }, a = t.padding * o.scale, c = { x: u.x - a, y: u.y - a, w: u.w + a * 2, h: u.h + a * 2 }, l = _d(n)(0.7)(c), _ = dd(e)(c)(l.w)(l.h), d = { x: _.x - l.w / 2, y: _.y - l.h / 2, w: l.w, h: l.h };
  return { footprint: u, viewport: d, camera: hd(n.widthPx > 0 && n.heightPx > 0)(e)(d) };
}, pd = (t) => t, Hy = (t, n) => ({ tag: t, _1: n }), H0 = (t) => t, os = (t, n) => ({ tag: t, _1: n }), Q0 = (t, n) => ({ tag: t, _1: n }), Zs = /* @__PURE__ */ H0("Animated"), Qy = /* @__PURE__ */ H0("StaticStill"), Oy = /* @__PURE__ */ H0("TitleCard"), Wy = /* @__PURE__ */ Q0("First"), mg = /* @__PURE__ */ pd("Forward"), $g = /* @__PURE__ */ pd("Backward"), qy = /* @__PURE__ */ os("ExitNode"), md = /* @__PURE__ */ pn(F)(Yt), Xy = (t) => Ii((n) => (e) => ({
  nodes: Yn(F.compare, Xn, n.nodes, e.nodes),
  edges: Yn(F.compare, Xn, n.edges, e.edges)
}))({ nodes: G, edges: G })(t.keyframes), Yy = (t) => (n) => ({
  entering: {
    nodes: lr(F.compare, n.nodes, t.nodes),
    edges: lr(F.compare, n.edges, t.edges)
  },
  leaving: {
    nodes: lr(F.compare, t.nodes, n.nodes),
    edges: lr(F.compare, t.edges, n.edges)
  },
  surviving: {
    nodes: Xu(F.compare, Xn, t.nodes, n.nodes),
    edges: Xu(F.compare, Xn, t.edges, n.edges)
  }
}), Ku = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Wi = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Vu = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, yf = (t) => (e) => {
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
}, My = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(G), Uy = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(G), Ky = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ke);
  return (n) => t(ge("IterNode", n, Ue));
})(), $d = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, yg = /* @__PURE__ */ pn(F)(Yt), Ua = (t) => {
  const n = Ht((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = w((r) => (o) => ({ minX: Ku(r.minX)(o.x), minY: Ku(r.minY)(o.y), maxX: Wi(r.maxX)(o.x), maxY: Wi(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, Vy = (t) => (n) => (e) => My(wt(jt(be.foldr, e))((r) => {
  const o = Vu(r)(t);
  if (o.tag === "Just")
    return ht((i) => !yf(i)(n), [o._1.source, o._1.target]);
  if (o.tag === "Nothing")
    return [];
  f();
})), jy = (t) => t.kind.tag === "SendToken" ? T("Just", b(t.kind._1.edge, { source: t.kind._1.from, target: t.kind._1.to })) : v, Zy = (t) => t.tag === "DataFlow" ? bt(jy)(t._1.events) : [], tx = (t) => (n) => Uy(bt((e) => yf(e._2.source)(n) || yf(e._2.target)(n) ? T("Just", e._1) : v)(Ky(t))), Zr = (t) => {
  const n = Ht((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = w((r) => (o) => ({ minX: Ku(r.minX)(o.x), minY: Ku(r.minY)(o.y), maxX: Wi(r.maxX)(o.x + o.w), maxY: Wi(r.maxY)(o.y + o.h) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x + n._1.head.w,
      maxY: n._1.head.y + n._1.head.h
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, O0 = (t) => (n) => (e) => {
  if (e.tag === "Leaf")
    return hn(t);
  const r = tx(n)(e), o = [
    ...bt((i) => {
      const s = $d(i)(t.nodes);
      return s.tag === "Just" ? T("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : v;
    })(jt(
      be.foldr,
      Yn(F.compare, Xn, e, Vy(n)(e)(r))
    )),
    ...bt((i) => {
      const s = Vu(i)(t.edges);
      return s.tag === "Just" ? T("Just", Ua(s._1)) : v;
    })(jt(be.foldr, r))
  ];
  return o.length === 0 ? hn(t) : Zr(o);
}, yd = (t) => (n) => (e) => {
  const r = [
    ...bt((o) => o)([
      (() => {
        const o = Vu(e)(t.edges);
        return o.tag === "Just" ? T("Just", Ua(o._1)) : v;
      })()
    ]),
    ...(() => {
      const o = Vu(e)(n);
      if (o.tag === "Just")
        return bt((i) => {
          const s = $d(i)(t.nodes);
          return s.tag === "Just" ? T("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : v;
        })([o._1.source, o._1.target]);
      if (o.tag === "Nothing")
        return [];
      f();
    })()
  ];
  return r.length === 0 ? O0(t)(n)(G) : Zr(r);
}, No = (t) => (n) => {
  const e = hn(t), r = e.w / Wi(1e-4)(n.zoom), o = e.h / Wi(1e-4)(n.zoom);
  return { x: n.center.x - r / 2, y: n.center.y - o / 2, w: r, h: o };
}, nx = (t) => Yn(
  F.compare,
  Xn,
  yg(B((n) => b(n.id, { source: n.from.node, target: n.to.node }))(t.graph.edges)),
  yg(wt(t.scenes)(Zy))
), W0 = (t) => t, ex = (t) => t, q0 = /* @__PURE__ */ W0("Linear"), Zo = /* @__PURE__ */ W0("EaseInOutQuad"), rx = /* @__PURE__ */ W0("SpringBouncy"), Ps = (t) => (n) => (e) => {
  const r = ne(1 - n * n), o = t * r;
  return 1 - Di(-n * t * e) * (fe(o * e) + n / r * we(o * e));
}, ox = (t) => {
  const n = it.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = it.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, $o = (t) => (n) => (() => {
  if (t === "Linear")
    return ex;
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
    return (e) => e >= 1 ? 1 : 1 - zi(2)(-10 * e);
  if (t === "Spring")
    return (e) => 1 - (1 + 6 * e) * Di(-6 * e);
  if (t === "SpringBouncy")
    return Ps(6)(0.7);
  f();
})()(ox(n)), Ka = (t) => t, xd = (t) => t, vd = (t) => t, ur = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, tu = (t) => (n) => (e) => {
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
}, X0 = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ix = (t) => (n) => {
  const e = st.compare(t._1)(n._1);
  return e === "LT" ? Wn : e === "GT" ? qn : it.compare(t._2)(n._2);
}, sx = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ux = /* @__PURE__ */ vd("Hold"), ax = /* @__PURE__ */ vd("Gap"), yo = /* @__PURE__ */ xd("LinearLerp"), xg = /* @__PURE__ */ xd("StagedLogLerp"), xf = /* @__PURE__ */ Ka("Overview"), Td = /* @__PURE__ */ Ka("DiveHome"), vg = /* @__PURE__ */ Ka("DiveTransition"), Va = /* @__PURE__ */ Ka("ActionFocus"), cx = (t) => (n) => {
  const e = hn(t), r = e.h / ur(1e-6)(n.zoom), o = e.w / ur(1e-6)(n.zoom);
  return { x: n.center.x - o / 2, y: n.center.y - r / 2, w: o, h: r };
}, fx = (t) => (n) => (e) => {
  const r = e.center.y - n.center.y, o = e.center.x - n.center.x, i = ne(o * o + r * r), s = e.zoom - n.zoom, u = s < 0 ? -s : s;
  return tu(t.minTransition)(t.maxTransition)(ur(t.panSpeed <= 0 ? t.minTransition : i / t.panSpeed)(t.zoomSpeed <= 0 ? t.minTransition : u / t.zoomSpeed));
}, lx = (t) => ({ startT: t.startT, endT: t.endT, fromCam: t.fromCam, toCam: t.toCam, easing: t.easing, interp: t.interp, intent: t.intent }), wd = (t) => (n) => $o(Zo)(tu(0)(1)((n - t) / ur(1e-4)(1 - t))), Nd = (t) => (n) => $o(Zo)(tu(0)(1)(n / ur(1e-4)(t))), gx = /* @__PURE__ */ w((t) => (n) => {
  const e = t.length - 1 | 0;
  return e >= 0 && e < t.length && t[e] === n ? t : St(t)(n);
})([]), _x = (t) => (n) => {
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
}, dx = (t) => (n) => t.tag === "Just" ? n.tag === "Just" && _x(t._1)(n._1) : t.tag === "Nothing" && n.tag === "Nothing", Tg = (t) => (n) => (e) => (r) => ({
  center: { x: r.center.x * e.scale + e.tx, y: r.center.y * e.scale + e.ty },
  zoom: r.zoom * hn(t).w / ur(1e-6)(e.scale * hn(n).w)
}), Jd = (t) => (n) => (e) => (r) => ({
  center: { x: t.center.x + (n.center.x - t.center.x) * e, y: t.center.y + (n.center.y - t.center.y) * e },
  zoom: Di((() => {
    const o = qu(ur(1e-6)(t.zoom));
    return o + (qu(ur(1e-6)(n.zoom)) - o) * r;
  })())
}), hx = /* @__PURE__ */ w((t) => (n) => {
  if (t.tag === "Nothing")
    return T("Just", n);
  if (t.tag === "Just")
    return n.endT > t._1.endT ? T("Just", n) : T("Just", t._1);
  f();
})(v), Cd = (t) => (n) => (e) => (r) => {
  const o = Di(-t * n);
  return {
    center: { x: r.center.x + (e.center.x - r.center.x) * o, y: r.center.y + (e.center.y - r.center.y) * o },
    zoom: Di((() => {
      const i = qu(ur(1e-6)(r.zoom));
      return i + (qu(ur(1e-6)(e.zoom)) - i) * o;
    })())
  };
}, px = (t) => (n) => (e) => n.zoom >= t.zoom ? wd(0.18000000000000005)(e) : Nd(0.82)(e), mx = (t) => (n) => (e) => n.zoom >= t.zoom ? Nd(0.28)(e) : wd(0.72)(e), $x = (t) => (n) => (e) => Jd(t)(n)(mx(t)(n)(e))(px(t)(n)(e)), yx = (t) => (n) => (e) => {
  const r = e.endT <= e.startT ? 1 : (n - e.startT) / (e.endT - e.startT), o = $o(e.easing)(tu(0)(1)(r));
  if (e.interp === "LinearLerp")
    return {
      center: { x: e.fromCam.center.x + (e.toCam.center.x - e.fromCam.center.x) * o, y: e.fromCam.center.y + (e.toCam.center.y - e.fromCam.center.y) * o },
      zoom: e.fromCam.zoom + (e.toCam.zoom - e.fromCam.zoom) * o
    };
  if (e.interp === "LogLerp")
    return Jd(e.fromCam)(e.toCam)(o)(o);
  if (e.interp === "StagedLogLerp")
    return $x(e.fromCam)(e.toCam)(r);
  f();
}, xx = { widthPx: 0, heightPx: 0 }, ja = {
  padding: 24,
  easing: q0,
  minimumReadableLabelPx: 11,
  minimumVisibleLabelPx: 5,
  labelBasePx: 11,
  panSpeed: 1500,
  zoomSpeed: 4,
  minTransition: 0.15,
  maxTransition: 0.6,
  cameraDecay: 6
}, $i = (t) => (n) => (e) => (r) => (o) => {
  const i = cx(e)(r), s = o.x - t.padding, u = o.y - t.padding;
  return s >= i.x && u >= i.y && s + o.w + t.padding * 2 <= i.x + i.w && u + o.h + t.padding * 2 <= i.y + i.h;
}, vx = (t) => (n) => (e) => (r) => (o) => G0.foldlWithIndex((i) => (s) => (u) => {
  const a = (() => {
    if (u.kind === "Hold") {
      const c = (() => {
        if (u.focus.tag === "Just") {
          if (u.intent === "ActionFocus")
            return $i(t)(n)(e)(s.prev)(u.focus._1) ? s.prev : $i(t)(n)(e)({ center: s.prev.center, zoom: u.toCam.zoom })(u.focus._1) ? { ...u.toCam, center: s.prev.center } : {
              ...u.toCam,
              center: {
                ...u.toCam.center,
                x: (() => {
                  const l = hn(e).w / ur(1e-6)(u.toCam.zoom);
                  if (l <= 0)
                    return u.toCam.center.x;
                  const _ = u.focus._1.x + u.focus._1.w / 2, d = n.widthPx <= 0 ? 0 : X0(l / 4)(6 * l / n.widthPx), g = s.prev.center.x + l / 2 - d, p = _ < s.prev.center.x - l / 2 + d ? _ - d + l / 2 : _ > g ? _ + d - l / 2 : s.prev.center.x, m = hn(e);
                  return l >= m.w ? m.x + m.w / 2 : tu(m.x + l / 2)(m.x + m.w - l / 2)(p);
                })()
              }
            };
          if ($i(t)(n)(e)(s.prev)(u.focus._1))
            return s.prev;
          if ($i(t)(n)(e)({ center: s.prev.center, zoom: u.toCam.zoom })(u.focus._1))
            return { ...u.toCam, center: s.prev.center };
        }
        return u.toCam;
      })();
      return { startT: u.startT, endT: u.endT, fromCam: c, toCam: c, easing: u.easing, interp: yo, focus: u.focus, intent: u.intent };
    }
    if (u.kind === "Gap")
      return {
        startT: u.startT,
        endT: u.endT,
        fromCam: s.prev,
        toCam: (() => {
          const c = i + 1 | 0, l = Ko(qt, v, (_) => _.kind === "Hold", c < 1 ? o : At(c, o.length, o));
          if (l.tag === "Just") {
            const _ = (i + 1 | 0) + l._1 | 0;
            return _ >= 0 && _ < o.length ? (() => {
              if (o[_].focus.tag === "Just")
                return $i(t)(n)(e)(s.prev)(o[_].focus._1);
              if (o[_].focus.tag === "Nothing")
                return !1;
              f();
            })() ? s.prev : o[_].fromCam : s.prev;
          }
          if (l.tag === "Nothing")
            return s.prev;
          f();
        })(),
        easing: u.easing,
        interp: yo,
        focus: v,
        intent: u.intent
      };
    f();
  })();
  return { acc: St(s.acc)(a), prev: a.toCam };
})({ acc: [], prev: r })(o).acc, Tx = (t) => (n) => (e) => (r) => (o) => {
  const i = (u, a) => X0(fx(t)(u.toCam)(a.toCam))(u.endT - u.startT), s = w((u) => (a) => {
    if (u.pending.tag === "Nothing")
      return { acc: u.acc, pending: T("Just", a) };
    if (u.pending.tag === "Just")
      return !(a.fromCam.zoom === a.toCam.zoom && a.fromCam.center.x === a.toCam.center.x && a.fromCam.center.y === a.toCam.center.y) || (() => {
        if (a.focus.tag === "Just")
          return $i(t)(n)(e)(u.pending._1.toCam)(a.focus._1);
        if (a.focus.tag === "Nothing")
          return !1;
        f();
      })() || (() => {
        const c = u.pending._1.toCam.center.x - a.toCam.center.x;
        return (c < 0 ? -c < 8 : c < 8) && (() => {
          const l = u.pending._1.toCam.center.y - a.toCam.center.y;
          return (l < 0 ? -l < 8 : l < 8) && (() => {
            const _ = u.pending._1.toCam.zoom - a.toCam.zoom;
            return _ < 0 ? -_ < 0.08 : _ < 0.08;
          })();
        })();
      })() || i(u.pending._1, a) <= 0 ? { acc: St(u.acc)(u.pending._1), pending: T("Just", a) } : {
        acc: St(St(u.acc)({ ...u.pending._1, endT: a.startT - i(u.pending._1, a) }))({
          startT: a.startT - i(u.pending._1, a),
          endT: a.startT,
          fromCam: u.pending._1.toCam,
          toCam: a.toCam,
          easing: a.easing,
          interp: yo,
          focus: a.focus,
          intent: a.intent
        }),
        pending: T("Just", a)
      };
    f();
  })({ acc: [], pending: v })(o);
  if (s.pending.tag === "Nothing")
    return s.acc;
  if (s.pending.tag === "Just")
    return St(s.acc)(s.pending._1);
  f();
}, wx = (t) => (n) => (e) => {
  const r = n.w + e * 2, o = n.h + e * 2, i = hn(t);
  return r <= 0 || o <= 0 || i.w <= 0 || i.h <= 0 ? 1 : X0(i.w / r)(i.h / o);
}, Nx = (t) => (n) => {
  if (t.tag === "Just") {
    if (n.tag === "Just")
      return T("Just", Zr([t._1, n._1]));
    if (n.tag === "Nothing")
      return T("Just", t._1);
    f();
  }
  if (t.tag === "Nothing") {
    if (n.tag === "Just")
      return T("Just", n._1);
    if (n.tag === "Nothing")
      return v;
  }
  f();
}, Jx = /* @__PURE__ */ w((t) => (n) => {
  const e = t.length - 1 | 0, r = e >= 0 && e < t.length ? T("Just", t[e]) : v;
  return r.tag === "Just" && r._1.fromCam.zoom === r._1.toCam.zoom && r._1.fromCam.center.x === r._1.toCam.center.x && r._1.fromCam.center.y === r._1.toCam.center.y && n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y && (!(r._1.intent === "ActionFocus" || n.intent === "ActionFocus") || (r._1.intent === "Overview" ? n.intent === "Overview" : r._1.intent === "DiveHome" ? n.intent === "DiveHome" : r._1.intent === "DiveTransition" ? n.intent === "DiveTransition" : r._1.intent === "ActionFocus" && n.intent === "ActionFocus") && dx(r._1.focus)(n.focus)) && (() => {
    const o = r._1.toCam.center.x - n.toCam.center.x;
    return (o < 0 ? -o < 8 : o < 8) && (() => {
      const i = r._1.toCam.center.y - n.toCam.center.y;
      return (i < 0 ? -i < 8 : i < 8) && (() => {
        const s = r._1.toCam.zoom - n.toCam.zoom;
        return s < 0 ? -s < 0.08 : s < 0.08;
      })();
    })();
  })() ? St((() => {
    const o = t.length - 1 | 0;
    return o < 1 ? [] : At(0, o, t);
  })())({ ...r._1, endT: n.endT, focus: Nx(r._1.focus)(n.focus) }) : St(t)(n);
})([]), Cx = (t) => {
  const n = It((e) => (r) => ix(b(
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
  ))(b(
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
  return 0 < n.length ? T("Just", n[0]) : v;
}, vf = (t) => (n) => (e) => (r) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: ur(r)(wx(n)(e)(t.padding)) }), bx = (t) => (n) => (e) => (r) => (o) => {
  const i = vf(t)(e)(hn(e))(0), s = ht(
    (a) => a >= 0 && a <= r,
    gx(It(it.compare)([0, r, ...wt(o)((a) => [a.startT, a.endT])]))
  ), u = (a, c) => En((l) => l.priority >= 1, ht((l) => l.startT <= c && c < l.endT, o)) ? Dy(t)(n)(e)(Zr(a)).camera : vf(t)(e)(Zr(a))(0);
  return B(lx)(Tx(t)(n)(e)(i)(Jx(vx(t)(n)(e)(i)(bt((a) => {
    const c = (a._1 + a._2) / 2;
    if (a._2 <= a._1)
      return v;
    const l = B((_) => _.bbox)(ht(
      (_) => _.priority === w(sx)(0)(B((d) => d.priority)(ht(
        (d) => d.startT <= c && c < d.endT,
        o
      ))),
      ht((_) => _.startT <= c && c < _.endT, o)
    ));
    return l.length === 0 ? T(
      "Just",
      { kind: ax, startT: a._1, endT: a._2, fromCam: i, toCam: i, easing: t.easing, focus: v, intent: xf }
    ) : T(
      "Just",
      {
        kind: ux,
        startT: a._1,
        endT: a._2,
        fromCam: u(l, c),
        toCam: u(l, c),
        easing: t.easing,
        focus: T("Just", Zr(l)),
        intent: En((_) => _.priority >= 1, ht((_) => _.startT <= c && c < _.endT, o)) ? Va : xf
      }
    );
  })(Ln(Vn, s, At(1, s.length, s)))))));
}, qi = (t) => (n) => (e) => (r) => {
  const o = Cx(ht((i) => r >= i.startT && r < i.endT, e));
  if (o.tag === "Just")
    return { camera: yx()(r)(o._1), intent: o._1.intent };
  if (o.tag === "Nothing") {
    const i = hx(e);
    return i.tag === "Just" && r >= i._1.endT ? { camera: i._1.toCam, intent: i._1.intent } : {
      camera: (() => {
        const s = vf(t)(n)(hn(n))(0);
        return 0 < e.length ? e[0].fromCam : s;
      })(),
      intent: 0 < e.length ? e[0].intent : xf
    };
  }
  f();
};
function Sr(t) {
  return t.charCodeAt(0);
}
function Y0(t) {
  return String.fromCharCode(t);
}
const kx = (t) => t >= 0 && t <= 65535 ? T("Just", Y0(t)) : v, er = function(t) {
  return function(n) {
    return function(e) {
      return e.replace(new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), n);
    };
  };
}, Jo = function(t) {
  return function(n) {
    return n.split(t);
  };
}, Za = function(t) {
  return t.trim();
}, Br = function(t) {
  return function(n) {
    return n.join(t);
  };
};
var Sx = typeof Array.from == "function", Lx = typeof Symbol < "u" && Symbol != null && typeof Symbol.iterator < "u" && typeof String.prototype[Symbol.iterator] == "function", Ex = typeof String.prototype.fromCodePoint == "function", Px = typeof String.prototype.codePointAt == "function";
const Ax = function(t) {
  return Px ? function(n) {
    return n.codePointAt(0);
  } : t;
}, Rx = function(t) {
  return Ex ? String.fromCodePoint : t;
}, Fx = function(t) {
  return function(n) {
    return Lx ? function(e) {
      for (var r = "", o = e[Symbol.iterator](), i = 0; i < n; ++i) {
        var s = o.next();
        if (s.done) return r;
        r += s.value;
      }
      return r;
    } : t(n);
  };
}, Gx = function(t) {
  return function(n) {
    return Sx ? function(e) {
      return Array.from(e, n);
    } : t;
  };
}, tc = (t) => {
  const n = mr(t);
  if (n === 0)
    return v;
  if (n === 1)
    return T("Just", { head: Sr(Ns(0)(t)), tail: "" });
  const e = Sr(Ns(1)(t)), r = Sr(Ns(0)(t));
  return 55296 <= r && r <= 56319 && 56320 <= e && e <= 57343 ? T("Just", { head: (((r - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0, tail: Oi(2)(t) }) : T("Just", { head: r, tail: Oi(1)(t) });
}, Ix = (t) => {
  const n = tc(t);
  return n.tag === "Just" ? T("Just", b(n._1.head, n._1.tail)) : v;
}, Bx = (t) => he.unfoldr(Ix)(t), Dx = (t) => {
  const n = Sr(Ns(0)(t));
  if (55296 <= n && n <= 56319 && mr(t) > 1) {
    const e = Sr(Ns(1)(t));
    if (56320 <= e && e <= 57343)
      return (((n - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0;
  }
  return n;
}, bd = /* @__PURE__ */ Ax(Dx), is = /* @__PURE__ */ Gx(Bx)(bd), zx = (t) => is(t).length, Pc = (t) => ns(t >= 0 && t <= 65535 ? Y0(t) : t < 0 ? "\0" : "\uffff"), Hx = (t) => t <= 65535 ? Pc(t) : Pc(nr(t - 65536 | 0, 1024) + 55296 | 0) + Pc(jr(t - 65536 | 0)(1024) + 56320 | 0), Qx = /* @__PURE__ */ Rx(Hx), kd = (t) => (n) => {
  if (t < 1)
    return "";
  const e = tc(n);
  return e.tag === "Just" ? Qx(e._1.head) + kd(t - 1 | 0)(e._1.tail) : n;
}, On = /* @__PURE__ */ Fx(kd), Ox = (t) => (n) => n === "" ? v : T("Just", bd(n)), Sd = (t) => t, ju = (t, n) => ({ tag: t, _1: n }), ve = (t, n, e) => ({ tag: t, _1: n, _2: e }), Ld = (t) => t, Ni = (t, n, e, r, o, i, s, u, a) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s, _7: u, _8: a }), Tf = /* @__PURE__ */ Ld("PlopIn"), Wx = /* @__PURE__ */ Ld("PlopOut"), qx = /* @__PURE__ */ Sd("DiveIn"), Xx = /* @__PURE__ */ Sd("DiveOut"), Ji = (t, n, e) => ({ tag: t, _1: n, _2: e }), Yx = (t) => t, Ci = (t, n) => ({ tag: t, _1: n }), M0 = (t) => t, Zu = (t, n) => ({ tag: t, _1: n }), Ac = /* @__PURE__ */ Zu("NotYet"), wg = /* @__PURE__ */ Zu("Consumed"), Mx = /* @__PURE__ */ M0("FromSource"), Ng = /* @__PURE__ */ M0("FromTarget"), Ux = /* @__PURE__ */ M0("FromBoth"), Rc = /* @__PURE__ */ Ci("Hidden"), Kx = /* @__PURE__ */ Ci("Visible"), wf = /* @__PURE__ */ Yx("ExtendFromSource"), Fc = /* @__PURE__ */ Ji("Retracted"), Ed = /* @__PURE__ */ Ji("Extended"), Vx = {
  eq: (t) => (n) => t.tag === "Retracted" ? n.tag === "Retracted" : t.tag === "Extending" ? n.tag === "Extending" && (t._1 === "ExtendFromSource" ? n._1 === "ExtendFromSource" : t._1 === "ExtendFromTarget" && n._1 === "ExtendFromTarget") && t._2 === n._2 : t.tag === "Extended" ? n.tag === "Extended" : t.tag === "Retracting" && n.tag === "Retracting" && (t._1 === "FromSource" ? n._1 === "FromSource" : t._1 === "FromTarget" ? n._1 === "FromTarget" : t._1 === "FromBoth" && n._1 === "FromBoth") && t._2 === n._2
}, U0 = (t) => t, Pd = /* @__PURE__ */ pn(F)(Yt), As = { eq: /* @__PURE__ */ Ks(si) }, K0 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ad = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, jx = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Nf = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ke);
  return (n) => t(ge("IterNode", n, Ue));
})(), _r = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ho = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Jg = Yt.foldMap(fy(F)), Rd = (t) => (n) => (e) => {
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
}, Zx = (t) => (e) => {
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
}, tv = (t) => (e) => {
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
}, nv = /* @__PURE__ */ pn(F)(Yt), ev = /* @__PURE__ */ pn(F)(Yt), Fd = /* @__PURE__ */ U0("Backdrop"), rv = /* @__PURE__ */ U0("FlyThrough"), Se = /* @__PURE__ */ U0("Active"), ov = (t) => (n) => (e) => ({ ...e, state: { ...e.state, edgeFadeAlpha: Pd(B((r) => b(r, n))(t)) } }), Cg = (t) => (n) => (e) => {
  const r = (t + n) / 2, o = e - r, i = o < 0 ? -1 : 1, s = (n - t) / 2, u = s * 0.15, a = s - u, c = o < 0 ? -o : o;
  return n <= t ? (t + n) / 2 : c <= a ? e : r + i * (s - u * Di(-(c - a) / u));
}, ta = (t) => (n) => (e) => {
  const r = en((o) => As.eq(o.path)(n) && e >= o.startT && e < o.endT)(t.segments);
  if (r.tag === "Just")
    return T("Just", r._1);
  if (r.tag === "Nothing")
    return en((o) => As.eq(o.path)(n))(t.segments);
  f();
}, iv = (t) => (n) => {
  if (n.scene.tag === "Structural")
    return n.scene._1.to;
  if (n.scene.tag === "DataFlow")
    return n.scene._1.keyframe;
  if (n.scene.tag === "Hold")
    return n.scene._1;
  if (n.scene.tag === "EnterNode" || n.scene.tag === "ExitNode" || n.scene.tag === "StepScene")
    return t;
  f();
}, sv = (t) => ({
  startT: 0,
  endT: t.totalDuration,
  path: [],
  layout: t.layout,
  placement: z0,
  windows: t.windows,
  spans: t.spans,
  keyframes: t.keyframes,
  initialKeyframe: t.initialKeyframe,
  edgeEndpoints: G
}), uv = (t) => B((n) => n < 1 ? [] : At(0, n, t))(Vt(0, t.length - 1 | 0)), Gc = (t) => (n) => {
  const e = K0(n)(t.keyframes);
  if (e.tag === "Nothing")
    return G;
  if (e.tag === "Just")
    return e._1.nodes;
  f();
}, Ic = (t) => (n) => {
  const e = K0(n)(t.keyframes);
  if (e.tag === "Nothing")
    return G;
  if (e.tag === "Just")
    return e._1.edges;
  f();
}, av = (t) => (n) => {
  const e = [
    ...bt((r) => {
      if (r._2.tag === "Hidden")
        return v;
      const o = Ad(r._1)(t.layout.nodes);
      return o.tag === "Just" ? T(
        "Just",
        (() => {
          const i = o._1.x * t.placement.scale + t.placement.tx, s = o._1.y * t.placement.scale + t.placement.ty;
          return { x: i, y: s, w: (o._1.x + o._1.w) * t.placement.scale + t.placement.tx - i, h: (o._1.y + o._1.h) * t.placement.scale + t.placement.ty - s };
        })()
      ) : v;
    })(Nf(n.nodes)),
    ...bt((r) => {
      if (r._2.tag === "Retracted")
        return v;
      const o = jx(r._1)(t.layout.edges);
      return o.tag === "Just" ? T(
        "Just",
        (() => {
          const i = Ua(o._1), s = i.x * t.placement.scale + t.placement.tx, u = i.y * t.placement.scale + t.placement.ty;
          return { x: s, y: u, w: (i.x + i.w) * t.placement.scale + t.placement.tx - s, h: (i.y + i.h) * t.placement.scale + t.placement.ty - u };
        })()
      ) : v;
    })(Nf(n.edges))
  ];
  return e.length === 0 ? v : T("Just", Zr(e));
}, cv = /* @__PURE__ */ w((t) => (n) => {
  const e = qe(t);
  return e.tag === "Just" && n.startT <= e._1.last.endT + 1e-6 ? St(e._1.init)({ ...e._1.last, endT: _r(e._1.last.endT)(n.endT), windows: St(e._1.last.windows)(n) }) : St(t)({ endT: n.endT, windows: [n] });
})([]), fv = (t) => (n) => {
  const e = _r(t.lo)(n.lo), r = Ho(t.hi)(n.hi);
  return e <= r ? { lo: e, hi: r } : t;
}, lv = (t) => (n) => (e) => Jg((r) => Jg((o) => o.target.tag === "FillWindow" ? o.startT <= e ? Zt("Node", 1, 1, o.target._2, void 0, G, G) : G : o.target.tag === "TokenWindow" && o.startT + (o.endT - o.startT) * 0.25 <= e ? Zt("Node", 1, 1, o.target._4, void 0, G, G) : G)(r.windows))(ht(
  (r) => e <= r.endT + t,
  cv(It((r) => (o) => it.compare(r.startT)(o.startT))(ht(
    (r) => r.target.tag === "FillWindow" || r.target.tag === "TokenWindow",
    n
  )))
)), gv = (t) => (n) => (e) => En(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), _v = (t) => (n) => (e) => En((r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e, t), dv = (t) => (n) => (e) => En((r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e, t), hv = (t) => (n) => (e) => En(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), na = (t) => (n) => (e) => en((r) => e(r) && n >= r.startT && n < r.endT)(t), nc = (t) => (n) => {
  if (n < t.startT)
    return ve("AtKeyframe", t.initialKeyframe);
  const e = en((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return ve("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return ve("AtKeyframe", e._1.scene._1.keyframe);
    if (e._1.scene.tag === "Hold")
      return ve("AtKeyframe", e._1.scene._1);
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode" || e._1.scene.tag === "StepScene")
      return ve("AtKeyframe", t.initialKeyframe);
    f();
  }
  if (e.tag === "Nothing")
    return ve("AtKeyframe", w(iv)(t.initialKeyframe)(t.spans));
  f();
}, pv = (t) => (n) => {
  const e = nc(t)(n), r = K0((() => {
    if (e.tag === "AtKeyframe")
      return e._1;
    if (e.tag === "InTransition")
      return e._2;
    f();
  })())(t.keyframes);
  if (r.tag === "Just")
    return r._1.kind;
  if (r.tag === "Nothing")
    return Zs;
  f();
}, mv = (t) => (n) => {
  const e = nc(t)(n);
  if (e.tag === "AtKeyframe")
    return On(3)(e._1) === "kf-" ? "" : e._1;
  if (e.tag === "InTransition")
    return On(3)(e._2) === "kf-" ? "" : e._2;
  f();
}, $v = {
  nodes: G,
  edges: G,
  tokens: G,
  camera: { center: { x: 0, y: 0 }, zoom: 1 },
  frameTitle: "",
  staticKind: Zs,
  visited: G,
  nodeFadeAlpha: G,
  nodeLabelFadeAlpha: G,
  edgeFadeAlpha: G,
  nodeInvert: G
}, yv = { nodes: G, edges: G, chipExtras: G, edgeLabels: G }, xv = {
  segment: {
    startT: 0,
    endT: 0,
    path: [],
    layout: yv,
    placement: z0,
    windows: [],
    spans: [],
    keyframes: G,
    initialKeyframe: "",
    edgeEndpoints: G
  },
  state: $v,
  bgAlpha: 1,
  blur: 0,
  minis: [],
  role: Se
}, ea = (t) => {
  const n = t.levels.length - 1 | 0;
  return n >= 0 && n < t.levels.length ? t.levels[n] : xv;
}, vv = (t) => (n) => {
  const e = Ad(n)(t.nodes);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just") {
    const r = e._1, o = (i) => i.x >= r.x - 1 && i.x <= r.x + r.w + 1 && i.y >= r.y - 1 && i.y <= r.y + r.h + 1;
    return bt((i) => (() => {
      if (0 < i._2.length) {
        const u = i._2.length - 1 | 0;
        return o(i._2[0]) || u >= 0 && u < i._2.length && o(i._2[u]);
      }
      const s = i._2.length - 1 | 0;
      return s >= 0 && s < i._2.length && o(i._2[s]);
    })() ? T("Just", i._1) : v)(Nf(t.edges));
  }
  f();
}, Tv = (t) => (n) => {
  const e = nc(t)(n);
  if (e.tag === "AtKeyframe")
    return Gc(t)(e._1);
  if (e.tag === "InTransition")
    return Yn(F.compare, Xn, Gc(t)(e._1), Gc(t)(e._2));
  f();
}, wv = (t) => (n) => {
  const e = nc(t)(n);
  if (e.tag === "AtKeyframe")
    return Ic(t)(e._1);
  if (e.tag === "InTransition")
    return Yn(F.compare, Xn, Ic(t)(e._1), Ic(t)(e._2));
  f();
}, Nv = (t) => (n) => (e) => (r) => {
  const o = hn(t).w / _r(1e-4)(r.zoom), i = hn(n.layout), s = i.x * n.placement.scale + n.placement.tx, u = (() => {
    const c = (() => {
      const l = i.y * n.placement.scale + n.placement.ty;
      return { x: s, y: l, w: (i.x + i.w) * n.placement.scale + n.placement.tx - s, h: (i.y + i.h) * n.placement.scale + n.placement.ty - l };
    })();
    return o >= c.w ? { lo: c.x + c.w - o / 2, hi: c.x + o / 2 } : { lo: c.x + o / 2, hi: c.x + c.w - o / 2 };
  })(), a = av(n)(e);
  if (a.tag === "Nothing")
    return r;
  if (a.tag === "Just") {
    if (o >= a._1.w) {
      const c = fv(u)(o >= a._1.w ? { lo: a._1.x + a._1.w - o / 2, hi: a._1.x + o / 2 } : { lo: a._1.x + o / 2, hi: a._1.x + a._1.w - o / 2 });
      return { ...r, center: { ...r.center, x: Rd(c.lo)(c.hi)(r.center.x) } };
    }
    return r;
  }
  f();
}, Jv = (t) => (n) => (e) => {
  const r = hn(t), o = r.h / _r(1e-4)(e.zoom), i = r.w / _r(1e-4)(e.zoom);
  return {
    ...e,
    center: {
      x: i >= n.w ? n.x + n.w / 2 : Cg(n.x + i / 2)(n.x + n.w - i / 2)(e.center.x),
      y: o >= n.h ? n.y + n.h / 2 : Cg(n.y + o / 2)(n.y + n.h - o / 2)(e.center.y)
    }
  };
}, Cv = (t) => (n) => (e) => Jv(t)((() => {
  const r = n * e.placement.scale, o = hn(e.layout), i = (() => {
    const s = o.x * e.placement.scale + e.placement.tx, u = o.y * e.placement.scale + e.placement.ty;
    return { x: s, y: u, w: (o.x + o.w) * e.placement.scale + e.placement.tx - s, h: (o.y + o.h) * e.placement.scale + e.placement.ty - u };
  })();
  return { x: i.x - r, y: i.y - r, w: i.w + r * 2, h: i.h + r * 2 };
})()), bv = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : _r(0)(Ho(1)((n - t.startT) / e));
}, Xi = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : _r(0)(Ho(1)((n - t.startT) / e));
}, kv = (t) => (n) => (e) => (r) => (o) => {
  const i = na(n)(e)((s) => s.target.tag === "EdgeWindow" && s.target._2.tag === "Retract" && s.target._1 === o);
  if (i.tag === "Just") {
    const s = $o(t.timing.edgeEasing)(Xi(i._1)(e)), u = i._1.target.tag === "EdgeWindow" ? i._1.target._2 : ju("Extend", wf);
    if (u.tag === "Retract")
      return Ji("Retracting", u._1, s);
    if (u.tag === "Extend")
      return Ji("Extending", u._1, s);
    f();
  }
  if (i.tag === "Nothing") {
    if (gv(n)(e)(o))
      return Fc;
    const s = na(n)(e)((u) => u.target.tag === "EdgeWindow" && u.target._1 === o);
    if (s.tag === "Just") {
      const u = $o(t.timing.edgeEasing)(Xi(s._1)(e)), a = s._1.target.tag === "EdgeWindow" ? s._1.target._2 : ju("Extend", wf);
      if (a.tag === "Retract")
        return Ji("Retracting", a._1, u);
      if (a.tag === "Extend")
        return Ji("Extending", a._1, u);
      f();
    }
    if (s.tag === "Nothing")
      return hv(n)(e)(o) ? Fc : Zx(o)(r) ? Ed : Fc;
  }
  f();
}, Sv = (t) => (n) => (e) => {
  const r = wv(n)(e);
  return Pd(B((o) => b(o, kv(t)(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return G;
      if (i.tag === "Node")
        return Zt("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return jt(be.foldr, o(n.layout.edges));
  })()));
}, Lv = (t) => (n) => (e) => (r) => {
  const o = na(t)(n)((i) => i.target.tag === "NodeWindow" && i.target._1 === r && i.target._2 === "PlopOut");
  if (o.tag === "Just") {
    const i = Xi(o._1)(n), s = o._1.target.tag === "NodeWindow" ? o._1.target._2 : Tf;
    if (s === "PlopIn")
      return Ci("PloppingIn", i);
    if (s === "PlopOut")
      return Ci("PloppingOut", i);
    f();
  }
  if (o.tag === "Nothing") {
    if (_v(t)(n)(r))
      return Rc;
    const i = na(t)(n)((s) => s.target.tag === "NodeWindow" && s.target._1 === r);
    if (i.tag === "Just") {
      const s = Xi(i._1)(n), u = i._1.target.tag === "NodeWindow" ? i._1.target._2 : Tf;
      if (u === "PlopIn")
        return Ci("PloppingIn", s);
      if (u === "PlopOut")
        return Ci("PloppingOut", s);
      f();
    }
    if (i.tag === "Nothing")
      return dv(t)(n)(r) ? Rc : tv(r)(e) ? Kx : Rc;
  }
  f();
}, Ev = (t) => (n) => {
  const e = Tv(t)(n);
  return nv(B((r) => b(r, Lv(t.windows)(n)(e)(r)))((() => {
    const r = (o) => {
      if (o.tag === "Leaf")
        return G;
      if (o.tag === "Node")
        return Zt("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
      f();
    };
    return jt(be.foldr, r(t.layout.nodes));
  })()));
}, Pv = (t) => (n) => (e) => n.target.tag === "TokenWindow" ? b(
  n.target._1,
  e < n.startT ? Ac : e >= n.endT ? wg : Zu(
    "Travelling",
    {
      edge: n.target._2,
      direction: n.target._3,
      progress: $o(t.timing.tokenEasing)(Xi(n)(e)),
      labels: n.target._6,
      source: n.target._4,
      target: n.target._5,
      holdPre: n.target._7,
      holdPost: n.target._8
    }
  )
) : n.target.tag === "FillWindow" ? b(
  n.target._1,
  e < n.startT ? Ac : e >= n.endT ? wg : Zu("Filling", { node: n.target._2, progress: Xi(n)(e), labels: n.target._3 })
) : b("", Ac), Av = (t) => (n) => (e) => ev(B((r) => Pv(t)(r)(e))(ht(
  (r) => r.target.tag === "TokenWindow" || r.target.tag === "FillWindow",
  n
))), Rv = (t) => (n) => (e) => ({
  nodes: Ev(n)(e),
  edges: Sv(t)(n)(e),
  tokens: Av(t)(n.windows)(e),
  camera: qi(t.cameraConfig)(n.layout)(t.cameraSpans)(e).camera,
  frameTitle: mv(n)(e),
  staticKind: pv(n)(e),
  visited: lv(t.timing.hatchHold)(n.windows)(e),
  nodeFadeAlpha: G,
  nodeLabelFadeAlpha: G,
  edgeFadeAlpha: G,
  nodeInvert: G
}), Ei = (t) => (n) => (e) => (r) => ({ segment: e, state: Rv(t)(e)(n), bgAlpha: 1, blur: 0, minis: Fv(t)(n)(e), role: r }), Fv = (t) => (n) => (e) => bt((r) => {
  const o = ta(t)(St(e.path)(r))(n);
  if (o.tag === "Just")
    return T("Just", { ...Ei(t)(Rd(o._1.startT)(o._1.endT - 1e-4)(n))(o._1)(Fd), bgAlpha: 0 });
  if (o.tag === "Nothing")
    return v;
  f();
})((() => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return G;
    if (o.tag === "Node")
      return Zt("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
    f();
  };
  return jt(be.foldr, r(e.layout.nodes));
})()), Gv = (t) => (n) => (e) => q1(
  v,
  D1,
  (r) => r.direction === "DiveIn" && As.eq(r.parentPath)(n.path) && e >= r.startT - 0.7 && e < r.startT ? T("Just", { node: r.node, phase: (e - (r.startT - 0.7)) / 0.7 }) : v,
  t.dives
), Iv = (t) => (n) => (e) => (r) => {
  const o = Gv(t)(n)(e);
  if (o.tag === "Just") {
    const i = we(3.141592653589793 * o._1.phase * 3);
    return {
      ...r,
      state: { ...r.state, nodeInvert: Zt("Node", 1, 1, o._1.node, 1 * i * i, G, G) }
    };
  }
  if (o.tag === "Nothing")
    return r;
  f();
}, Gd = (t) => (n) => bt((e) => {
  const r = en((o) => o.direction === "DiveIn" && As.eq(o.childPath)((() => {
    const i = e.length + 1 | 0;
    return i < 1 ? [] : At(0, i, n);
  })()))(t.dives);
  if (r.tag === "Just") {
    const o = ta(t)(e)(r._1.startT - 1e-4);
    if (o.tag === "Just")
      return T(
        "Just",
        (() => {
          const i = Ei(t)(r._1.startT - 1e-4)(o._1)(Fd);
          return { ...i, state: { ...i.state, nodeFadeAlpha: Zt("Node", 1, 1, r._1.node, 0, G, G) } };
        })()
      );
    if (o.tag === "Nothing")
      return v;
    f();
  }
  if (r.tag === "Nothing")
    return v;
  f();
})(uv(n)), Id = (t) => (n) => {
  const e = ht((o) => n >= o.startT && n < o.endT, t.segments), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r] : sv(t);
}, Bv = (t) => (n) => (e) => {
  const r = bv(e)(n), o = ta(t)(e.parentPath)((() => {
    if (e.direction === "DiveIn")
      return e.startT - 1e-4;
    if (e.direction === "DiveOut")
      return e.endT - 1e-4;
    f();
  })()), i = ta(t)(e.childPath)((() => {
    if (e.direction === "DiveIn")
      return e.endT;
    if (e.direction === "DiveOut")
      return e.startT - 1e-4;
    f();
  })()), s = (() => {
    if (e.direction === "DiveIn")
      return $o(Zo)(r);
    if (e.direction === "DiveOut")
      return 1 - $o(Zo)(r);
    f();
  })(), u = 1 - _r(0)(Ho(1)((s - 0.1) / 0.25)), a = 1 - _r(0)(Ho(1)((s - 0.1) / 0.25)), c = 1 - _r(0)(Ho(1)((s - 0.8) / 0.2)), l = (d) => {
    const g = Ei(t)((() => {
      if (e.direction === "DiveIn")
        return e.startT - 1e-4;
      if (e.direction === "DiveOut")
        return e.endT - 1e-4;
      f();
    })())(d)(rv);
    return {
      ...ov(vv(d.layout)(e.node))(a)({
        ...g,
        state: {
          ...g.state,
          nodeFadeAlpha: Zt("Node", 1, 1, e.node, u, G, G),
          nodeLabelFadeAlpha: Zt("Node", 1, 1, e.node, a, G, G)
        }
      }),
      minis: ht((p) => !As.eq(p.segment.path)(e.childPath), g.minis),
      bgAlpha: c
    };
  }, _ = 0 + 1 * _r(0)(Ho(1)((s - 0.1) / 0.5));
  return [
    ...Gd(t)(e.parentPath),
    ...(() => {
      if (o.tag === "Just") {
        if (i.tag === "Just")
          return [
            l(o._1),
            {
              ...Ei(t)((() => {
                if (e.direction === "DiveIn")
                  return e.endT;
                if (e.direction === "DiveOut")
                  return e.startT - 1e-4;
                f();
              })())(i._1)(Se),
              bgAlpha: _
            }
          ];
        if (i.tag === "Nothing")
          return [l(o._1)];
        f();
      }
      if (o.tag === "Nothing")
        return [Ei(t)(n)(Id(t)(n))(Se)];
      f();
    })()
  ];
}, Dv = (t) => (n) => en((e) => n >= e.startT && n < e.endT)(t.dives), Bd = (t) => (n) => {
  const e = Id(t)(n), r = Ei(t)(n)(e)(Se), o = t.dives.length !== 0, i = qi(t.cameraConfig)(t.layout)(t.cameraSpans)(n).camera, s = Nv(t.layout)(e)(r.state)(Cv(t.layout)(t.cameraConfig.padding)(e)(i)), u = Iv(t)(e)(n)({ ...r, state: { ...r.state, camera: s } }), a = Gd(t)(e.path), c = Dv(t)(n);
  if (c.tag === "Just")
    return { levels: Bv(t)(n)(c._1), camera: i, rootLayout: t.layout, hasDives: o, diving: !0 };
  if (c.tag === "Nothing")
    return { levels: St(a)(u), camera: s, rootLayout: t.layout, hasDives: o, diving: !1 };
  f();
}, zv = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Hv = (t) => {
  const n = t.length;
  return ((r) => (o) => {
    let i = r, s = o, u = !0, a;
    for (; u; ) {
      const c = i, l = s;
      if (c >= n) {
        u = !1, a = l;
        continue;
      }
      const _ = (d) => (g) => {
        let p = d, m = g, h = !0, $;
        for (; h; ) {
          const x = p, y = m;
          if (x >= n) {
            h = !1, $ = y;
            continue;
          }
          if (c >= 0 && c < t.length) {
            if (x >= 0 && x < t.length) {
              p = x + 1 | 0, m = (() => {
                const J = t[c].position, N = t[c].size, C = t[x].position, S = t[x].size;
                return J._1 < C._1 + S._1 && C._1 < J._1 + N._1 && J._2 < C._2 + S._2 && C._2 < J._2 + N._2;
              })() ? y + 1 | 0 : y;
              continue;
            }
            p = x + 1 | 0, m = y;
            continue;
          }
          h = !1, $ = y;
        }
        return $;
      };
      i = c + 1 | 0, s = _(c + 1 | 0)(l);
    }
    return a;
  })(0)(0);
}, bg = (t) => w((n) => (e) => n + Cy(e.start)(e.end))(0)(t.segments), Qv = (t) => (n) => (e) => ({
  crossingCount: w((r) => (o) => r + o.jumps.length | 0)(0)(n),
  bendCount: w((r) => (o) => r + o.bends.length | 0)(0)(n),
  totalEdgeLength: w((r) => (o) => r + bg(o))(0)(n),
  maxEdgeLength: w((r) => (o) => zv(r)(bg(o)))(0)(n),
  nodeOverlapCount: Hv(t),
  constraintViolations: e,
  jumpCount: w((r) => (o) => r + o.jumps.length | 0)(0)(n)
}), V0 = (t) => t, gn = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
}, j0 = /* @__PURE__ */ V0("LEFT"), Ov = /* @__PURE__ */ V0("RIGHT"), Dd = /* @__PURE__ */ V0("UNDEFINED"), Wv = {
  eq: (t) => (n) => t === "LEFT" ? n === "LEFT" : t === "RIGHT" ? n === "RIGHT" : t === "UP" ? n === "UP" : t === "DOWN" ? n === "DOWN" : t === "UNDEFINED" && n === "UNDEFINED"
}, qv = {
  compare: (t) => (n) => {
    if (t === "LEFT")
      return n === "LEFT" ? ce : Wn;
    if (n === "LEFT")
      return qn;
    if (t === "RIGHT")
      return n === "RIGHT" ? ce : Wn;
    if (n === "RIGHT")
      return qn;
    if (t === "UP")
      return n === "UP" ? ce : Wn;
    if (n === "UP")
      return qn;
    if (t === "DOWN")
      return n === "DOWN" ? ce : Wn;
    if (n === "DOWN")
      return qn;
    if (t === "UNDEFINED" && n === "UNDEFINED")
      return ce;
    f();
  },
  Eq0: () => Wv
}, Xv = (t) => (e) => {
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
}, Yv = { x: 0, y: 0 }, Ge = (t) => (n) => (e) => {
  const r = gn(t)(e.cNodes);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cNodes: tt(st)(t)(n(r._1))(e.cNodes) };
  f();
}, Js = (t) => (n) => (e) => {
  const r = gn(t)(e.cGroups);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cGroups: tt(st)(t)(n(r._1))(e.cGroups) };
  f();
}, Mv = (t) => w((n) => (e) => Ge(e)((r) => ({ ...r, hitboxPreCompaction: r.hitbox }))(n))(t)(t.cNodeOrder), Uv = (t) => {
  const n = w((e) => (r) => {
    const o = gn(r)(t.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return w((i) => (s) => Wt(st)(Nn)(s)([r])(i))(e)(o._1.constraints);
    f();
  })(G)(t.cNodeOrder);
  return w((e) => (r) => Ge(r)((o) => ({
    ...o,
    constraints: (() => {
      const i = gn(r)(n);
      if (i.tag === "Nothing")
        return [];
      if (i.tag === "Just")
        return i._1;
      f();
    })()
  }))(e))(t)(t.cNodeOrder);
}, Kv = (t) => (n) => Ge(t)((e) => ({ ...e, ignoreSpacing: { left: e.ignoreSpacing.left || n.left, right: e.ignoreSpacing.right || n.right, up: e.ignoreSpacing.up || n.up, down: e.ignoreSpacing.down || n.down } })), Vv = (t) => {
  const n = w((e) => (r) => Js(r)((o) => ({ ...o, outDegree: o.outDegreeReal }))(e))(t)(t.cGroupOrder);
  return w((e) => (r) => Ge(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder);
}, rr = { left: !1, right: !1, up: !1, down: !1 }, jv = { horizontalSpacing: (t) => (n) => 0, verticalSpacing: (t) => (n) => 0 }, Z0 = (t) => w((n) => (e) => {
  const r = gn(e)(n.cGroups);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just") {
    const o = w((s) => (u) => {
      const a = gn(u)(n.cNodes);
      if (a.tag === "Nothing")
        return s;
      if (a.tag === "Just") {
        if (s.tag === "Nothing")
          return T("Just", u);
        if (s.tag === "Just") {
          const c = gn(s._1)(n.cNodes);
          if (c.tag === "Nothing")
            return T("Just", u);
          if (c.tag === "Just")
            return a._1.hitbox.x < c._1.hitbox.x ? T("Just", u) : T("Just", s._1);
        }
      }
      f();
    })(v)(r._1.cNodes), i = Js(e)((s) => ({ ...s, reference: o }))(n);
    if (o.tag === "Nothing")
      return i;
    if (o.tag === "Just") {
      const s = gn(o._1)(i.cNodes);
      if (s.tag === "Nothing")
        return i;
      if (s.tag === "Just") {
        const u = s._1;
        return w((a) => (c) => Ge(c)((l) => ({ ...l, cGroupOffset: { x: l.hitbox.x - u.hitbox.x, y: l.hitbox.y - u.hitbox.y } }))(a))(i)(r._1.cNodes);
      }
    }
  }
  f();
})(t)(t.cGroupOrder), Pe = (t) => Z0({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return G;
      if (e.tag === "Node")
        return Zt("Node", e._1, e._2, e._3, { ...e._4, hitbox: { ...e._4.hitbox, x: -e._4.hitbox.x - e._4.hitbox.width } }, n(e._5), n(e._6));
      f();
    };
    return n(t.cNodes);
  })()
}), vr = (t) => Z0({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return G;
      if (e.tag === "Node")
        return Zt(
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
}), zd = (t) => {
  const n = w((e) => (r) => Js(r)((o) => ({ ...o, outDegree: 0, outDegreeReal: 0, incomingConstraints: [] }))(e))(t)(t.cGroupOrder);
  return w((e) => (r) => {
    const o = gn(r)(e.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just") {
      if (o._1.cGroup.tag === "Nothing")
        return e;
      if (o._1.cGroup.tag === "Just") {
        const i = o._1.cGroup._1;
        return w((s) => (u) => {
          const a = gn(u)(s.cNodes);
          if (a.tag === "Nothing")
            return s;
          if (a.tag === "Just")
            return a._1.cGroup.tag === "Just" && a._1.cGroup._1 !== i ? Js(a._1.cGroup._1)((c) => ({ ...c, outDegree: c.outDegree + 1 | 0, outDegreeReal: c.outDegreeReal + 1 | 0 }))(Js(i)((c) => Ne(po)(u)(c.incomingConstraints) ? c : { ...c, incomingConstraints: [...c.incomingConstraints, u] })(s)) : s;
          f();
        })(e)(o._1.constraints);
      }
    }
    f();
  })(n)(n.cNodeOrder);
}, yu = (t) => {
  const n = Uv(t.cGraph);
  return { ...t, cGraph: zd(w((e) => (r) => Ge(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder)) };
}, Zv = (t) => (n) => w((e) => (r) => {
  if (t === "LEFT" || t === "UP") {
    const i = r._2;
    return Ge(r._1)((s) => ({ ...s, constraints: [...s.constraints, i] }))(e);
  }
  const o = r._1;
  return Ge(r._2)((i) => ({ ...i, constraints: [...i.constraints, o] }))(e);
})(n)(t === "LEFT" || t === "RIGHT" ? n.predefinedHorizontalConstraints : n.predefinedVerticalConstraints), Ze = (t) => {
  const n = {
    ...t,
    cGraph: Zv(t.direction)({
      ...t.cGraph,
      cNodes: (() => {
        const e = (r) => {
          if (r.tag === "Leaf")
            return G;
          if (r.tag === "Node")
            return Zt("Node", r._1, r._2, r._3, { ...r._4, constraints: [] }, e(r._5), e(r._6));
          f();
        };
        return e(t.cGraph.cNodes);
      })()
    })
  };
  return {
    ...n,
    cGraph: zd((() => {
      if (n.constraintAlgorithm.tag === "Nothing")
        return n.cGraph;
      if (n.constraintAlgorithm.tag === "Just")
        return n.constraintAlgorithm._1(n);
      f();
    })())
  };
}, tT = (t) => (n) => (e) => {
  const r = { ...e, direction: n };
  if (t === "UNDEFINED")
    return n === "LEFT" ? Ze(r) : n === "RIGHT" ? Ze({ ...r, cGraph: Pe(r.cGraph) }) : n === "UP" ? Ze({ ...r, cGraph: vr(r.cGraph) }) : n === "DOWN" ? Ze({ ...r, cGraph: Pe(vr(r.cGraph)) }) : r;
  if (t === "LEFT")
    return n === "RIGHT" ? yu({ ...r, cGraph: Pe(r.cGraph) }) : n === "UP" ? Ze({ ...r, cGraph: vr(r.cGraph) }) : n === "DOWN" ? Ze({ ...r, cGraph: Pe(vr(r.cGraph)) }) : r;
  if (t === "RIGHT")
    return n === "LEFT" ? yu({ ...r, cGraph: Pe(r.cGraph) }) : n === "UP" ? Ze({ ...r, cGraph: vr(Pe(r.cGraph)) }) : n === "DOWN" ? Ze({ ...r, cGraph: Pe(vr(Pe(r.cGraph))) }) : r;
  if (t === "UP")
    return n === "LEFT" ? Ze({ ...r, cGraph: vr(r.cGraph) }) : n === "RIGHT" ? Ze({ ...r, cGraph: Pe(vr(r.cGraph)) }) : n === "DOWN" ? yu({ ...r, cGraph: Pe(r.cGraph) }) : r;
  if (t === "DOWN")
    return n === "LEFT" ? Ze({ ...r, cGraph: vr(Pe(r.cGraph)) }) : n === "RIGHT" ? Ze({ ...r, cGraph: Pe(vr(Pe(r.cGraph))) }) : n === "UP" ? yu({ ...r, cGraph: Pe(r.cGraph) }) : r;
  f();
}, Hd = (t) => (n) => n.finished || !Xv(t)(n.cGraph.supportedDirections) || (t === "LEFT" ? n.direction === "LEFT" : t === "RIGHT" ? n.direction === "RIGHT" : t === "UP" ? n.direction === "UP" : t === "DOWN" ? n.direction === "DOWN" : t === "UNDEFINED" && n.direction === "UNDEFINED") ? n : tT(n.direction)(t)(n), nT = (t) => {
  if (t.finished)
    return t;
  const n = t.direction === "UNDEFINED" ? Hd(j0)(t) : t, e = { ...n, cGraph: Vv(n.cGraph) };
  if (e.compactionAlgorithm.tag === "Nothing")
    return e;
  if (e.compactionAlgorithm.tag === "Just")
    return e.compactionAlgorithm._1(e);
  f();
}, Qd = (t) => (n) => (e) => {
  const r = gn(t)(e.cNodes), o = gn(n)(e.cGroups);
  return r.tag === "Just" && o.tag === "Just" ? (() => {
    if (r._1.cGroup.tag === "Nothing")
      return !1;
    if (r._1.cGroup.tag === "Just")
      return !0;
    f();
  })() && (r._1.cGroup.tag === "Nothing" || !(r._1.cGroup.tag === "Just" && r._1.cGroup._1 === n)) ? e : {
    ...e,
    cNodes: tt(st)(t)({ ...r._1, cGroup: T("Just", n) })(e.cNodes),
    cGroups: tt(st)(n)({
      ...o._1,
      cNodes: Ne(po)(t)(o._1.cNodes) ? o._1.cNodes : [...o._1.cNodes, t],
      reference: (() => {
        if (o._1.reference.tag === "Nothing")
          return T("Just", t);
        if (o._1.reference.tag === "Just")
          return T("Just", o._1.reference._1);
        f();
      })()
    })(e.cGroups)
  } : e;
}, Od = (t) => (n) => ({
  id: n.nextCNodeId,
  graph: {
    ...n,
    cNodes: tt(st)(n.nextCNodeId)({
      id: n.nextCNodeId,
      origin: t.origin,
      kind: t.kind,
      cGroup: v,
      cGroupOffset: Yv,
      hitbox: t.hitbox,
      hitboxPreCompaction: t.hitbox,
      constraints: [],
      startPos: -1e308,
      ignoreSpacing: rr
    })(n.cNodes),
    cNodeOrder: [...n.cNodeOrder, n.nextCNodeId],
    nextCNodeId: n.nextCNodeId + 1 | 0
  }
}), tl = (t) => (n) => {
  const e = n.nextCGroupId;
  return {
    id: e,
    graph: w((r) => (o) => Qd(o)(e)(r))({
      ...n,
      cGroups: tt(st)(e)({
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
}, eT = (t) => w((n) => (e) => {
  const r = gn(e)(n.cNodes);
  return r.tag === "Just" && r._1.cGroup.tag === "Nothing" ? tl({ master: v, nodes: [e] })(n).graph : n;
})(t)(t.cNodeOrder), rT = (t) => ({
  cGraph: Mv(eT(Z0(t))),
  direction: Dd,
  compactionAlgorithm: v,
  constraintAlgorithm: v,
  spacingsHandler: jv,
  lockFun: v,
  finished: !1
}), oT = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, iT = (t) => (n) => {
  const e = it.compare(t._1)(n._1);
  return e === "LT" ? Wn : e === "GT" ? qn : st.compare(t._2)(n._2);
}, sT = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ke);
  return (n) => t(ge("IterNode", n, Ue));
})(), kg = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
}, Sg = (t) => t.kind.tag === "Nothing" ? !1 : t.kind.tag === "Just" && t.kind._1 === "vs", Lg = (t) => t.kind.tag === "Nothing" || !(t.kind.tag === "Just" && t.kind._1 === "vs"), ec = (t) => (n) => iT(b(t.hitbox.x + t.hitbox.width / 2, t.id))(b(n.hitbox.x + n.hitbox.width / 2, n.id)), uT = (t) => (n) => {
  const e = Ko(qt, v, (r) => ec(t)(r) === "LT", n);
  if (e.tag === "Just") {
    const r = X1(qt, v, e._1, t, n);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return St(n)(t);
  f();
}, Wd = (t) => (n) => {
  const e = ht((o) => ec(o)(t) === "LT", n), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? T("Just", e[r]) : v;
}, aT = (t) => (n) => {
  const e = uT(n)(t.intervals), r = en((i) => ec(n)(i) === "LT")(e), o = tt(st)(n.id)((() => {
    const i = Wd(n)(e);
    return i.tag === "Just" ? T("Just", i._1.id) : v;
  })())(t.cand);
  return {
    ...t,
    intervals: e,
    cand: (() => {
      if (r.tag === "Just")
        return tt(st)(r._1.id)(T("Just", n.id))(o);
      if (r.tag === "Nothing")
        return o;
      f();
    })()
  };
}, cT = (t) => (n) => {
  const e = it.compare(t.low ? t.node.hitbox.y : t.node.hitbox.y + t.node.hitbox.height)(n.low ? n.node.hitbox.y : n.node.hitbox.y + n.node.hitbox.height);
  return e === "EQ" ? t.low ? t.low && !n.low ? qn : ce : n.low ? Wn : ce : e;
}, fT = (t) => w((n) => (e) => Ge(e.id)((r) => ({ ...r, constraints: [] }))(n))(t)(bt((n) => gn(n)(t.cNodes))(t.cNodeOrder)), Bc = (t) => (n) => w((e) => (r) => {
  const o = gn(r._1)(e.cNodes);
  if (o.tag === "Just")
    return Ge(r._1)((i) => ({ ...i, constraints: [...i.constraints, ...r._2] }))(e);
  if (o.tag === "Nothing")
    return e;
  f();
})(n)(sT(t)), qd = (t) => (n) => n.kind.tag !== "Nothing" && n.kind.tag === "Just" && n.kind._1 === "vs" ? n.ignoreSpacing.up ? n.ignoreSpacing.down ? n : { ...n, hitbox: { ...n.hitbox, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t - 0.01, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t, height: n.hitbox.height + 2 * t } }, Eg = (t) => (n) => (e) => w((r) => (o) => e(o) ? Ge(o.id)(qd(t))(r) : r)(n)(bt((r) => gn(r)(n.cNodes))(n.cNodeOrder)), lT = (t) => (n) => {
  const e = (r, o, i) => {
    const s = Ge(i)(qd(t))(r);
    return o.length <= 1 ? s : w((u) => (a) => a === i ? u : Ge(a)((c) => c.ignoreSpacing.up ? { ...c, hitbox: { ...c.hitbox, y: c.hitbox.y + t + 0.01, height: c.hitbox.height - t - 0.01 } } : c.ignoreSpacing.down ? { ...c, hitbox: { ...c.hitbox, height: c.hitbox.height - t - 0.01 } } : c)(u))(s)(o);
  };
  return w((r) => (o) => {
    if (o.master.tag === "Nothing")
      return 0 < o.cNodes.length ? e(r, o.cNodes, o.cNodes[0]) : r;
    if (o.master.tag === "Just")
      return e(r, o.cNodes, o.master._1);
    f();
  })(n)(bt((r) => gn(r)(n.cGroups))(n.cGroupOrder));
}, gT = (t) => (n) => {
  const e = Wd(n)(t.intervals), r = en((i) => ec(n)(i) === "LT")(t.intervals), o = e.tag === "Just" && (() => {
    const i = kg(n.id)(t.cand);
    return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === e._1.id)) && e._1.cGroup.tag === "Just" && n.cGroup.tag === "Just" && e._1.cGroup._1 !== n.cGroup._1;
  })() ? Wt(st)(Nn)(e._1.id)([n.id])(t.constraints) : t.constraints;
  return {
    ...t,
    constraints: r.tag === "Just" && (() => {
      const i = kg(r._1.id)(t.cand);
      return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === n.id)) && n.cGroup.tag === "Just" && r._1.cGroup.tag === "Just" && n.cGroup._1 !== r._1.cGroup._1;
    })() ? Wt(st)(Nn)(n.id)([r._1.id])(o) : o,
    intervals: ht((i) => i.id !== n.id, t.intervals)
  };
}, _T = (t) => (n) => n.low ? aT(t)(n.node) : gT(t)(n.node), Dc = (t) => (n) => w(_T)({ intervals: [], cand: G, constraints: G })(It(cT)(wt(ht(
  t,
  bt((e) => gn(e)(n.cNodes))(n.cNodeOrder)
))((e) => [{ node: e, low: !0 }, { node: e, low: !1 }]))).constraints, dT = (t) => (n) => {
  const e = oT(0)(t / 2 - 0.5), r = Bc(Dc(Sg)(Eg(e)(n)(Sg)))(n), o = Bc(Dc(Lg)(Eg(e)(r)(Lg)))(r);
  return Bc(Dc((i) => !0)(lT(e)(o)))(o);
}, hT = (t) => (n) => dT(t)(fT(n.cGraph)), ra = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Pg = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, nl = (t) => (n) => (e) => (r) => (o) => ({
  id: t,
  representedEdges: [o],
  affectedBends: [n, e],
  hitbox: { x: ra(n._1)(e._1), y: ra(n._2)(e._2), width: sr(n._1 - e._1), height: sr(n._2 - e._2) },
  ignoreSpacing: rr,
  potentialGroupParents: (() => {
    if (r.tag === "Nothing")
      return [];
    if (r.tag === "Just")
      return [r._1];
    f();
  })(),
  aPort: v
}), pT = (t) => (n) => {
  const e = ra(t.hitbox.x)(n.hitbox.x), r = ra(t.hitbox.y)(n.hitbox.y);
  return {
    ...t,
    representedEdges: [...t.representedEdges, ...n.representedEdges],
    affectedBends: [...t.affectedBends, ...n.affectedBends],
    potentialGroupParents: [...t.potentialGroupParents, ...n.potentialGroupParents],
    hitbox: {
      x: e,
      y: r,
      width: Pg(t.hitbox.x + t.hitbox.width)(n.hitbox.x + n.hitbox.width) - e,
      height: Pg(t.hitbox.y + t.hitbox.height)(n.hitbox.y + n.hitbox.height) - r
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
}, mT = (t) => (n) => sr(t.hitbox.x - n.hitbox.x) <= 1e-4 && n.hitbox.y - (t.hitbox.y + t.hitbox.height) <= 1e-4 && t.hitbox.y - (n.hitbox.y + n.hitbox.height) <= 1e-4, $T = (t) => (n) => sr(t.hitbox.x - n.hitbox.x) <= 1e-4 ? it.compare(t.hitbox.y)(n.hitbox.y) : t.hitbox.x < n.hitbox.x ? Wn : qn, Xd = (t, n) => ({ tag: t, _1: n }), el = /* @__PURE__ */ pn(F)(Yt), rc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ag = /* @__PURE__ */ (() => {
  const t = { eq: (e) => (r) => e._1 === r._1 && (e._2.tag === "Nothing" ? r._2.tag === "Nothing" : e._2.tag === "Just" && r._2.tag === "Just" && e._2._1 === r._2._1) }, n = {
    compare: (e) => (r) => {
      const o = F.compare(e._1)(r._1);
      if (o === "LT")
        return Wn;
      if (o === "GT")
        return qn;
      if (e._2.tag === "Nothing")
        return r._2.tag === "Nothing" ? ce : Wn;
      if (r._2.tag === "Nothing")
        return qn;
      if (e._2.tag === "Just" && r._2.tag === "Just")
        return F.compare(e._2._1)(r._2._1);
      f();
    },
    Eq0: () => t
  };
  return w((e) => (r) => tt(n)(r)()(e))(G);
})(), to = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, yT = /* @__PURE__ */ w((t) => (n) => tt(qv)(n)()(t))(G), zc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = ld.compare(t)(s._3);
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
}, xT = (t) => (n) => {
  const e = el(B((i) => b(i.id, i))(t)), r = bt((i) => rc(i)(e))(n), o = st.compare((() => {
    const i = Ag(B((s) => b(s.from.node, s.from.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })())((() => {
    const i = Ag(B((s) => b(s.to.node, s.to.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })());
  if (o === "LT")
    return { ...rr, left: !0, right: !1 };
  if (o === "GT")
    return { ...rr, left: !1, right: !0 };
  if (o === "EQ")
    return rr;
  f();
}, vT = (t) => bt((n) => {
  if (n.direction === "V")
    return T("Just", { start: n.start, end: n.end });
  if (n.direction === "H")
    return v;
  f();
})(t.segments), xu = (t) => (n) => (e) => (r) => {
  if (r.tag === "Just") {
    const o = to(e)(n);
    if (o.tag === "Just") {
      const i = en((s) => s.id === r._1)(o._1);
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
}, TT = (t) => (n) => (e) => {
  const r = Od({
    origin: T("Just", Xd("SegmentOrigin", e)),
    kind: T("Just", "vs"),
    hitbox: e.hitbox
  })(n.cGraph), o = Kv(r.id)(e.ignoreSpacing)(r.graph);
  return {
    ...n,
    cGraph: (() => {
      if (0 < e.potentialGroupParents.length) {
        const i = gn(e.potentialGroupParents[0])(o.cNodes);
        if (i.tag === "Just") {
          if (i._1.cGroup.tag === "Just")
            return Qd(r.id)(i._1.cGroup._1)(o);
          if (i._1.cGroup.tag === "Nothing")
            return o;
          f();
        }
        if (i.tag === "Nothing")
          return o;
        f();
      }
      return tl({ master: T("Just", r.id), nodes: [r.id] })(o).graph;
    })(),
    edgeToCs: w((i) => (s) => Wt(F)(Nn)(s)([r.id])(i))(n.edgeToCs)(e.representedEdges),
    lockMap: tt(st)(r.id)(xT(t)(e.representedEdges))(n.lockMap)
  };
}, wT = (t) => (n) => (e) => {
  const r = Ht(
    (o) => v,
    (o) => (i) => T("Just", { head: o, tail: i }),
    It($T)(n)
  );
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just") {
    const o = w((i) => (s) => mT(i.survivor)(s) ? { ...i, survivor: pT(i.survivor)(s) } : { survivor: s, merged: [...i.merged, i.survivor] })({ survivor: r._1.head, merged: [] })(r._1.tail);
    return w(TT(t))(e)([...o.merged, o.survivor]);
  }
  f();
}, NT = (t) => ({
  cGraph: {
    cNodes: G,
    cNodeOrder: [],
    cGroups: G,
    cGroupOrder: [],
    supportedDirections: yT([Dd, j0, Ov]),
    predefinedHorizontalConstraints: [],
    predefinedVerticalConstraints: [],
    nextCNodeId: 0,
    nextCGroupId: 0
  },
  nodeToC: G,
  edgeToCs: G,
  lockMap: G
}), JT = (t) => {
  const n = V(4);
  return { x: t.position._1 * n, y: t.position._2 * n, width: t.size._1 * n, height: t.size._2 * n };
}, CT = (t) => (n) => (e) => w((r) => (o) => {
  const i = Od({ origin: T("Just", Xd("NodeOrigin", o.node)), kind: v, hitbox: JT(o) })(r.cGraph), s = to(o.node)(t), u = (() => {
    if (s.tag === "Nothing")
      return b(0, 0);
    if (s.tag === "Just")
      return s._1;
    f();
  })();
  return {
    ...r,
    cGraph: tl({ master: T("Just", i.id), nodes: [i.id] })(i.graph).graph,
    nodeToC: tt(F)(o.node)(i.id)(r.nodeToC),
    lockMap: tt(st)(i.id)((() => {
      const a = u._1 - u._2 | 0;
      return a < 0 ? { ...rr, left: !0 } : a > 0 ? { ...rr, right: !0 } : rr;
    })())(r.lockMap)
  };
})(e)(n), bT = (t) => w((n) => (e) => Wt(F)((r) => (o) => b(
  r._1 + o._1 | 0,
  r._2 + o._2 | 0
))(e.to.node)(b(1, 0))(Wt(F)((r) => (o) => b(r._1 + o._1 | 0, r._2 + o._2 | 0))(e.from.node)(b(
  0,
  1
))(n)))(G)(t), kT = (t) => w((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? tt(F)(e.origin._1._1)(e.hitbox.x)(n) : n)(G)(bt((n) => gn(n)(t.cNodes))(t.cNodeOrder)), ST = (t) => w((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? tt(F)(e.origin._1._1)(e.hitbox.x - e.hitboxPreCompaction.x)(n) : n)(G)(bt((n) => gn(n)(t.cNodes))(t.cNodeOrder)), LT = (t) => w((n) => (e) => {
  if (e.origin.tag === "Just" && e.origin._1.tag === "SegmentOrigin") {
    const r = e.hitbox.x - e.hitboxPreCompaction.x;
    return w((o) => (i) => tt(ld)(i)(r)(o))(n)(e.origin._1._1.affectedBends);
  }
  return n;
})(G)(bt((n) => gn(n)(t.cNodes))(t.cNodeOrder)), Yd = (t) => {
  const n = el(B((e) => b(e.id, e))(t.edges));
  return bt((e) => {
    const r = rc(e.edge)(n);
    if (r.tag === "Just")
      return e.reversed ? T(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.to.node,
          tgt: r._1.from.node,
          srcSide: xu(Wr)(t.ports)(r._1.to.node)(r._1.to.port),
          tgtSide: xu(qr)(t.ports)(r._1.from.node)(r._1.from.port),
          path: e
        }
      ) : T(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.from.node,
          tgt: r._1.to.node,
          srcSide: xu(Wr)(t.ports)(r._1.from.node)(r._1.from.port),
          tgtSide: xu(qr)(t.ports)(r._1.to.node)(r._1.to.port),
          path: e
        }
      );
    if (r.tag === "Nothing")
      return v;
    f();
  })(t.paths);
}, ET = (t) => (n) => {
  const e = wt(n)((r) => {
    if (r.src === r.tgt)
      return [];
    if ((r.srcSide === "North" || r.srcSide === "South") && (r.tgtSide === "North" || r.tgtSide === "South"))
      return [];
    const o = to(r.tgt)(t.nodeToC), i = (() => {
      if (o.tag === "Just")
        return gn(o._1)(t.cGraph.cNodes);
      if (o.tag === "Nothing")
        return v;
      f();
    })(), s = to(r.src)(t.nodeToC), u = (() => {
      if (s.tag === "Just")
        return gn(s._1)(t.cGraph.cNodes);
      if (s.tag === "Nothing")
        return v;
      f();
    })(), a = (() => {
      if (u.tag === "Just") {
        if (i.tag === "Just") {
          if (u._1.cGroup.tag === "Just") {
            if (i._1.cGroup.tag === "Just")
              return T("Just", { srcGroup: u._1.cGroup._1, tgtGroup: i._1.cGroup._1, delta: 0, weight: 100 });
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
    })(), c = (g) => (p) => (m) => {
      if (u.tag === "Just") {
        if (u._1.cGroup.tag === "Just") {
          if (m.cGroup.tag === "Just")
            return g(m.hitbox.x) && m.cGroup._1 !== u._1.cGroup._1 ? T("Just", p(m.cGroup._1)(u._1.cGroup._1)) : v;
          if (m.cGroup.tag === "Nothing")
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
    }, l = bt((g) => gn(g)(t.cGraph.cNodes))((() => {
      const g = rc(r.edgeId)(t.edgeToCs);
      if (g.tag === "Nothing")
        return [];
      if (g.tag === "Just")
        return g._1;
      f();
    })()), _ = (() => {
      if (u.tag === "Just" && r.srcSide === "West") {
        const g = u._1;
        return bt(c((p) => p < g.hitbox.x)((p) => (m) => ({ srcGroup: p, tgtGroup: m, delta: 1, weight: 100 })))(l);
      }
      return [];
    })(), d = (() => {
      if (u.tag === "Just" && r.tgtSide === "East") {
        const g = u._1;
        return bt(c((p) => p > g.hitbox.x)((p) => (m) => ({ srcGroup: m, tgtGroup: p, delta: 1, weight: 100 })))(l);
      }
      return [];
    })();
    if (a.tag === "Nothing")
      return [];
    if (a.tag === "Just")
      return [a._1, ..._, ...d];
    f();
  });
  return {
    sameEdgeVerticalSegments: (r) => (o) => r.origin.tag === "Just" && r.origin._1.tag === "SegmentOrigin" && o.origin.tag === "Just" && o.origin._1.tag === "SegmentOrigin" && (() => {
      const i = o.origin._1._1;
      return En((s) => Ne(Pr)(s)(i.representedEdges), r.origin._1._1.representedEdges);
    })(),
    vsLNodePair: (r) => (o) => r.origin.tag === "Just" && o.origin.tag === "Just" && (r.origin._1.tag === "SegmentOrigin" ? o.origin._1.tag === "NodeOrigin" : r.origin._1.tag === "NodeOrigin" && o.origin._1.tag === "SegmentOrigin"),
    edgeLengthEdges: (r) => e
  };
}, PT = (t) => (n) => {
  const e = V(4), r = kT(t), o = ST(t), i = el(B((u) => b(u.id, b(u.from.node, u.to.node)))(n.edges)), s = LT(t);
  return {
    nodes: B((u) => {
      const a = to(u.node)(r);
      if (a.tag === "Just")
        return { ...u, position: b(a._1 / e, u.position._2) };
      if (a.tag === "Nothing")
        return u;
      f();
    })(n.nodes),
    edges: B((u) => {
      const a = rc(u.edge)(i), c = (() => {
        if (a.tag === "Nothing")
          return u.segments;
        if (a.tag === "Just") {
          const l = to(a._1._1)(o), _ = (() => {
            if (l.tag === "Nothing")
              return 0;
            if (l.tag === "Just")
              return l._1;
            f();
          })(), d = to(a._1._2)(o), g = (() => {
            if (d.tag === "Nothing")
              return 0;
            if (d.tag === "Just")
              return d._1;
            f();
          })();
          return Xt((() => {
            const p = u.reversed ? g : _, m = u.reversed ? _ : g, h = u.segments.length;
            return ($) => (x) => {
              if (x.direction === "V") {
                const y = (() => {
                  if ($ === 0)
                    return p;
                  if ($ === (h - 1 | 0))
                    return m;
                  const J = zc(x.start)(s);
                  if (J.tag === "Nothing")
                    return 0;
                  if (J.tag === "Just")
                    return J._1;
                  f();
                })();
                return { ...x, start: b(x.start._1 + y, x.start._2), end: b(x.end._1 + y, x.end._2) };
              }
              if (x.direction === "H")
                return {
                  ...x,
                  start: b(
                    (() => {
                      if ($ === 0)
                        return x.start._1 + p;
                      const y = zc(x.start)(s);
                      if (y.tag === "Nothing")
                        return x.start._1 + 0;
                      if (y.tag === "Just")
                        return x.start._1 + y._1;
                      f();
                    })(),
                    x.start._2
                  ),
                  end: b(
                    (() => {
                      if ($ === (h - 1 | 0))
                        return x.end._1 + m;
                      const y = zc(x.end)(s);
                      if (y.tag === "Nothing")
                        return x.end._1 + 0;
                      if (y.tag === "Just")
                        return x.end._1 + y._1;
                      f();
                    })(),
                    x.end._2
                  )
                };
              f();
            };
          })())(u.segments);
        }
        f();
      })();
      return { ...u, segments: c, bends: Ln((l) => (_) => l.end, c, At(1, c.length, c)) };
    })(n.paths)
  };
}, AT = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = nl(o.nextId)(i._2.start)(i._2.end)(v)(t.edgeId), u = (() => {
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
}, Rg = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...nl(i.nextId)(r.start)(b(r.start._1, o.down ? e.y : e.y + e.height))(T(
        "Just",
        n
      ))(t.edgeId),
      aPort: T("Just", { node: t.src, side: o.side }),
      ignoreSpacing: o.down ? { ...rr, down: !0 } : { ...rr, up: !0 }
    }
  ]
}), vu = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...nl(i.nextId)(r.end)(b(r.end._1, o.down ? e.y : e.y + e.height))(T(
        "Just",
        n
      ))(t.edgeId),
      aPort: T("Just", { node: t.tgt, side: o.side }),
      ignoreSpacing: o.down ? { ...rr, down: !0 } : { ...rr, up: !0 }
    }
  ]
}), RT = (t) => (n) => (e) => {
  if (e.src === e.tgt)
    return n;
  const r = to(e.src)(t.nodeToC), o = to(e.tgt)(t.nodeToC), i = (() => {
    if (r.tag === "Just") {
      const l = gn(r._1)(t.cGraph.cNodes);
      return l.tag === "Just" ? T("Just", l._1.hitbox) : v;
    }
    if (r.tag === "Nothing")
      return v;
    f();
  })(), s = (() => {
    if (o.tag === "Just") {
      const l = gn(o._1)(t.cGraph.cNodes);
      return l.tag === "Just" ? T("Just", l._1.hitbox) : v;
    }
    if (o.tag === "Nothing")
      return v;
    f();
  })(), u = vT(e.path), a = w(AT(e)(i)(s)(u.length - 1 | 0))(n)(Xt((l) => (_) => b(
    l,
    _
  ))(u));
  if (0 < u.length) {
    const l = (() => {
      if (r.tag === "Just" && i.tag === "Just") {
        if (e.srcSide === "North")
          return Rg(e)(r._1)(i._1)(u[0])({ side: In, down: !0 })(a);
        if (e.srcSide === "South")
          return Rg(e)(r._1)(i._1)(u[0])({ side: Bn, down: !1 })(a);
      }
      return a;
    })(), _ = u.length - 1 | 0;
    if (_ >= 0 && _ < u.length && o.tag === "Just" && s.tag === "Just") {
      if (e.tgtSide === "North")
        return vu(e)(o._1)(s._1)(u[_])({ side: In, down: !0 })(l);
      if (e.tgtSide === "South")
        return vu(e)(o._1)(s._1)(u[_])({ side: Bn, down: !1 })(l);
    }
    return l;
  }
  const c = u.length - 1 | 0;
  if (c >= 0 && c < u.length && o.tag === "Just" && s.tag === "Just") {
    if (e.tgtSide === "North")
      return vu(e)(o._1)(s._1)(u[c])({ side: In, down: !0 })(a);
    if (e.tgtSide === "South")
      return vu(e)(o._1)(s._1)(u[c])({ side: Bn, down: !1 })(a);
  }
  return a;
}, FT = (t) => (n) => (e) => wT(t)(w(RT(e))({ nextId: 0, segments: [] })(n).segments)(e), GT = (t) => FT(t.edges)(Yd(t))(CT(bT(t.edges))(t.nodes)(NT())), no = (t) => (e) => {
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
}, Jf = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Cf = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
}, IT = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, BT = (t) => {
  const n = t.Eq0();
  return (e) => (r) => {
    const o = (u) => {
      let a = u, c = !0, l;
      for (; c; ) {
        const _ = a, d = Ht((g) => v, (g) => (p) => T("Just", { head: g, tail: p }), _.queue);
        if (d.tag === "Nothing") {
          c = !1, l = _;
          continue;
        }
        if (d.tag === "Just") {
          const g = d._1.head;
          if (((h) => {
            let $ = h, x = !0, y;
            for (; x; ) {
              const J = $;
              if (J.tag === "Leaf") {
                x = !1, y = !1;
                continue;
              }
              if (J.tag === "Node") {
                const N = t.compare(g)(J._3);
                if (N === "LT") {
                  $ = J._5;
                  continue;
                }
                if (N === "GT") {
                  $ = J._6;
                  continue;
                }
                if (N === "EQ") {
                  x = !1, y = !0;
                  continue;
                }
              }
              f();
            }
            return y;
          })(_.removedNodes)) {
            a = { ..._, queue: d._1.tail };
            continue;
          }
          const p = en((m) => !no(m.eid)(_.removedEdges) && (n.eq(m.src)(g) || n.eq(m.tgt)(g)))(r);
          if (p.tag === "Nothing") {
            a = { ..._, queue: d._1.tail };
            continue;
          }
          if (p.tag === "Just") {
            const m = n.eq(p._1.src)(g) ? p._1.tgt : p._1.src, h = {
              ..._,
              degree: tt(t)(m)((() => {
                const x = ((y) => {
                  let J = y, N = !0, C;
                  for (; N; ) {
                    const S = J;
                    if (S.tag === "Leaf") {
                      N = !1, C = v;
                      continue;
                    }
                    if (S.tag === "Node") {
                      const P = t.compare(m)(S._3);
                      if (P === "LT") {
                        J = S._5;
                        continue;
                      }
                      if (P === "GT") {
                        J = S._6;
                        continue;
                      }
                      if (P === "EQ") {
                        N = !1, C = T("Just", S._4);
                        continue;
                      }
                    }
                    f();
                  }
                  return C;
                })(_.degree);
                if (x.tag === "Nothing")
                  return -1;
                if (x.tag === "Just")
                  return x._1 - 1 | 0;
                f();
              })())(_.degree),
              removedNodes: tt(t)(g)()(_.removedNodes),
              removedEdges: tt(st)(p._1.eid)()(_.removedEdges),
              record: [..._.record, { node: g, neighbour: m, viaSrc: n.eq(p._1.src)(g) }],
              queue: d._1.tail
            };
            if ((() => {
              const x = ((J) => {
                let N = J, C = !0, S;
                for (; C; ) {
                  const P = N;
                  if (P.tag === "Leaf") {
                    C = !1, S = v;
                    continue;
                  }
                  if (P.tag === "Node") {
                    const E = t.compare(m)(P._3);
                    if (E === "LT") {
                      N = P._5;
                      continue;
                    }
                    if (E === "GT") {
                      N = P._6;
                      continue;
                    }
                    if (E === "EQ") {
                      C = !1, S = T("Just", P._4);
                      continue;
                    }
                  }
                  f();
                }
                return S;
              })(h.degree), y = (J) => {
                let N = J, C = !0, S;
                for (; C; ) {
                  const P = N;
                  if (P.tag === "Leaf") {
                    C = !1, S = !1;
                    continue;
                  }
                  if (P.tag === "Node") {
                    const E = t.compare(m)(P._3);
                    if (E === "LT") {
                      N = P._5;
                      continue;
                    }
                    if (E === "GT") {
                      N = P._6;
                      continue;
                    }
                    if (E === "EQ") {
                      C = !1, S = !0;
                      continue;
                    }
                  }
                  f();
                }
                return S;
              };
              return (() => {
                if (x.tag === "Nothing")
                  return !1;
                if (x.tag === "Just")
                  return x._1 === 1;
                f();
              })() && !y(h.removedNodes);
            })()) {
              a = { ...h, queue: [...h.queue, m] };
              continue;
            }
            a = h;
            continue;
          }
        }
        f();
      }
      return l;
    }, i = w((u) => (a) => Wt(t)(bn)(a.src)(1)(Wt(t)(bn)(a.tgt)(1)(u)))(G)(r), s = o({
      degree: i,
      removedNodes: G,
      removedEdges: G,
      record: [],
      queue: ht(
        (u) => {
          const c = ((l) => {
            let _ = l, d = !0, g;
            for (; d; ) {
              const p = _;
              if (p.tag === "Leaf") {
                d = !1, g = v;
                continue;
              }
              if (p.tag === "Node") {
                const m = t.compare(u)(p._3);
                if (m === "LT") {
                  _ = p._5;
                  continue;
                }
                if (m === "GT") {
                  _ = p._6;
                  continue;
                }
                if (m === "EQ") {
                  d = !1, g = T("Just", p._4);
                  continue;
                }
              }
              f();
            }
            return g;
          })(i);
          if (c.tag === "Nothing")
            return !1;
          if (c.tag === "Just")
            return c._1 === 1;
          f();
        },
        e
      )
    });
    return {
      coreNodes: ht(
        (u) => !((c) => {
          let l = c, _ = !0, d;
          for (; _; ) {
            const g = l;
            if (g.tag === "Leaf") {
              _ = !1, d = !1;
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
      coreEdges: ht((u) => !no(u.eid)(s.removedEdges), r),
      removed: s.record
    };
  };
}, DT = (t) => (n) => (e) => w((r) => (o) => {
  const i = o.neighbour, s = (() => {
    const u = ((c) => {
      let l = c, _ = !0, d;
      for (; _; ) {
        const g = l;
        if (g.tag === "Leaf") {
          _ = !1, d = v;
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
            _ = !1, d = T("Just", g._4);
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
  return tt(t)(o.node)(o.viaSrc ? s - 1 | 0 : s + 1 | 0)(r);
})(e)(fn(n)), bf = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = { ...o, treeNode: tt(t)(r)()(o.treeNode) };
    return w((s) => (u) => {
      if (no(u.eid)(s.st.edgeVisited))
        return s;
      const a = { ...s.st, edgeVisited: tt(st)(u.eid)()(s.st.edgeVisited) }, c = n.eq(u.src)((() => {
        const l = u.src, _ = (g) => {
          let p = g, m = !0, h;
          for (; m; ) {
            const $ = p;
            if ($.tag === "Leaf") {
              m = !1, h = !1;
              continue;
            }
            if ($.tag === "Node") {
              const x = t.compare(l)($._3);
              if (x === "LT") {
                p = $._5;
                continue;
              }
              if (x === "GT") {
                p = $._6;
                continue;
              }
              if (x === "EQ") {
                m = !1, h = !0;
                continue;
              }
            }
            f();
          }
          return h;
        }, d = u.tgt;
        return _(a.treeNode) && !((p) => {
          let m = p, h = !0, $;
          for (; h; ) {
            const x = m;
            if (x.tag === "Leaf") {
              h = !1, $ = !1;
              continue;
            }
            if (x.tag === "Node") {
              const y = t.compare(d)(x._3);
              if (y === "LT") {
                m = x._5;
                continue;
              }
              if (y === "GT") {
                m = x._6;
                continue;
              }
              if (y === "EQ") {
                h = !1, $ = !0;
                continue;
              }
            }
            f();
          }
          return $;
        })(a.treeNode);
      })() ? u.src : (() => {
        const l = u.tgt, _ = (g) => {
          let p = g, m = !0, h;
          for (; m; ) {
            const $ = p;
            if ($.tag === "Leaf") {
              m = !1, h = !1;
              continue;
            }
            if ($.tag === "Node") {
              const x = t.compare(l)($._3);
              if (x === "LT") {
                p = $._5;
                continue;
              }
              if (x === "GT") {
                p = $._6;
                continue;
              }
              if (x === "EQ") {
                m = !1, h = !0;
                continue;
              }
            }
            f();
          }
          return h;
        }, d = u.src;
        return _(a.treeNode) && !((p) => {
          let m = p, h = !0, $;
          for (; h; ) {
            const x = m;
            if (x.tag === "Leaf") {
              h = !1, $ = !1;
              continue;
            }
            if (x.tag === "Node") {
              const y = t.compare(d)(x._3);
              if (y === "LT") {
                m = x._5;
                continue;
              }
              if (y === "GT") {
                m = x._6;
                continue;
              }
              if (y === "EQ") {
                h = !1, $ = !0;
                continue;
              }
            }
            f();
          }
          return $;
        })(a.treeNode);
      })() ? u.tgt : u.src) ? u.tgt : u.src;
      if (no(u.eid)(a.treeEdge)) {
        if (((d) => {
          let g = d, p = !0, m;
          for (; p; ) {
            const h = g;
            if (h.tag === "Leaf") {
              p = !1, m = !1;
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
                p = !1, m = !0;
                continue;
              }
            }
            f();
          }
          return m;
        })(a.treeNode))
          return { ...s, st: a };
        const l = bf(t)(e)(c)(a);
        return { count: s.count + l.count | 0, st: l.st };
      }
      if ((() => {
        const l = (d) => {
          let g = d, p = !0, m;
          for (; p; ) {
            const h = g;
            if (h.tag === "Leaf") {
              p = !1, m = !1;
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
                p = !1, m = !0;
                continue;
              }
            }
            f();
          }
          return m;
        }, _ = u.tgt;
        return !l(a.treeNode) && (() => {
          const g = (($) => {
            let x = $, y = !0, J;
            for (; y; ) {
              const N = x;
              if (N.tag === "Leaf") {
                y = !1, J = v;
                continue;
              }
              if (N.tag === "Node") {
                const C = t.compare(_)(N._3);
                if (C === "LT") {
                  x = N._5;
                  continue;
                }
                if (C === "GT") {
                  x = N._6;
                  continue;
                }
                if (C === "EQ") {
                  y = !1, J = T("Just", N._4);
                  continue;
                }
              }
              f();
            }
            return J;
          })(a.layer), p = u.src, h = (($) => {
            let x = $, y = !0, J;
            for (; y; ) {
              const N = x;
              if (N.tag === "Leaf") {
                y = !1, J = v;
                continue;
              }
              if (N.tag === "Node") {
                const C = t.compare(p)(N._3);
                if (C === "LT") {
                  x = N._5;
                  continue;
                }
                if (C === "GT") {
                  x = N._6;
                  continue;
                }
                if (C === "EQ") {
                  y = !1, J = T("Just", N._4);
                  continue;
                }
              }
              f();
            }
            return J;
          })(a.layer);
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
        const l = bf(t)(e)(c)({ ...a, treeEdge: tt(st)(u.eid)()(a.treeEdge) });
        return { count: s.count + l.count | 0, st: l.st };
      }
      return { ...s, st: a };
    })({ count: 1, st: i })(ht((s) => (n.eq(s.src)(r) || n.eq(s.tgt)(r)) && !no(s.eid)(i.edgeVisited), e));
  };
}, oa = (t) => (n) => (e) => (r) => {
  const o = r.src, s = ((m) => {
    let h = m, $ = !0, x;
    for (; $; ) {
      const y = h;
      if (y.tag === "Leaf") {
        $ = !1, x = v;
        continue;
      }
      if (y.tag === "Node") {
        const J = t.compare(o)(y._3);
        if (J === "LT") {
          h = y._5;
          continue;
        }
        if (J === "GT") {
          h = y._6;
          continue;
        }
        if (J === "EQ") {
          $ = !1, x = T("Just", y._4);
          continue;
        }
      }
      f();
    }
    return x;
  })(n.poID), u = (() => {
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1;
    f();
  })(), a = r.tgt, l = ((m) => {
    let h = m, $ = !0, x;
    for (; $; ) {
      const y = h;
      if (y.tag === "Leaf") {
        $ = !1, x = v;
        continue;
      }
      if (y.tag === "Node") {
        const J = t.compare(a)(y._3);
        if (J === "LT") {
          h = y._5;
          continue;
        }
        if (J === "GT") {
          h = y._6;
          continue;
        }
        if (J === "EQ") {
          $ = !1, x = T("Just", y._4);
          continue;
        }
      }
      f();
    }
    return x;
  })(n.poID), _ = (() => {
    if (l.tag === "Nothing")
      return 0;
    if (l.tag === "Just")
      return l._1;
    f();
  })(), g = ((m) => {
    let h = m, $ = !0, x;
    for (; $; ) {
      const y = h;
      if (y.tag === "Leaf") {
        $ = !1, x = v;
        continue;
      }
      if (y.tag === "Node") {
        const J = t.compare(e)(y._3);
        if (J === "LT") {
          h = y._5;
          continue;
        }
        if (J === "GT") {
          h = y._6;
          continue;
        }
        if (J === "EQ") {
          $ = !1, x = T("Just", y._4);
          continue;
        }
      }
      f();
    }
    return x;
  })(n.poID), p = (() => {
    if (g.tag === "Nothing")
      return 0;
    if (g.tag === "Just")
      return g._1;
    f();
  })();
  return (() => {
    const m = r.src, $ = ((x) => {
      let y = x, J = !0, N;
      for (; J; ) {
        const C = y;
        if (C.tag === "Leaf") {
          J = !1, N = v;
          continue;
        }
        if (C.tag === "Node") {
          const S = t.compare(m)(C._3);
          if (S === "LT") {
            y = C._5;
            continue;
          }
          if (S === "GT") {
            y = C._6;
            continue;
          }
          if (S === "EQ") {
            J = !1, N = T("Just", C._4);
            continue;
          }
        }
        f();
      }
      return N;
    })(n.lowestPoID);
    return (() => {
      if ($.tag === "Nothing")
        return 0 <= p;
      if ($.tag === "Just")
        return $._1 <= p;
      f();
    })() && (() => {
      const x = r.tgt;
      return p <= u && (() => {
        const J = ((N) => {
          let C = N, S = !0, P;
          for (; S; ) {
            const E = C;
            if (E.tag === "Leaf") {
              S = !1, P = v;
              continue;
            }
            if (E.tag === "Node") {
              const Q = t.compare(x)(E._3);
              if (Q === "LT") {
                C = E._5;
                continue;
              }
              if (Q === "GT") {
                C = E._6;
                continue;
              }
              if (Q === "EQ") {
                S = !1, P = T("Just", E._4);
                continue;
              }
            }
            f();
          }
          return P;
        })(n.lowestPoID);
        return (() => {
          if (J.tag === "Nothing")
            return 0 <= p;
          if (J.tag === "Just")
            return J._1 <= p;
          f();
        })() && p <= _;
      })();
    })();
  })() ? u >= _ : u < _;
}, zT = (t) => {
  const n = pn(t)(Yt);
  return (e) => ({
    layer: n(B((r) => b(r, 0))(e)),
    treeNode: G,
    treeEdge: G,
    poID: G,
    lowestPoID: G,
    cutvalue: G,
    postOrder: 1,
    edgeVisited: G
  });
}, HT = (t) => (n) => (e) => w((r) => (o) => {
  if ((() => {
    const d = o.src, g = (h) => {
      let $ = h, x = !0, y;
      for (; x; ) {
        const J = $;
        if (J.tag === "Leaf") {
          x = !1, y = !1;
          continue;
        }
        if (J.tag === "Node") {
          const N = t.compare(d)(J._3);
          if (N === "LT") {
            $ = J._5;
            continue;
          }
          if (N === "GT") {
            $ = J._6;
            continue;
          }
          if (N === "EQ") {
            x = !1, y = !0;
            continue;
          }
        }
        f();
      }
      return y;
    }, p = o.tgt, m = (h) => {
      let $ = h, x = !0, y;
      for (; x; ) {
        const J = $;
        if (J.tag === "Leaf") {
          x = !1, y = !1;
          continue;
        }
        if (J.tag === "Node") {
          const N = t.compare(p)(J._3);
          if (N === "LT") {
            $ = J._5;
            continue;
          }
          if (N === "GT") {
            $ = J._6;
            continue;
          }
          if (N === "EQ") {
            x = !1, y = !0;
            continue;
          }
        }
        f();
      }
      return y;
    };
    return g(e.treeNode) === m(e.treeNode);
  })())
    return r;
  const i = o.tgt, u = ((d) => {
    let g = d, p = !0, m;
    for (; p; ) {
      const h = g;
      if (h.tag === "Leaf") {
        p = !1, m = v;
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
          p = !1, m = T("Just", h._4);
          continue;
        }
      }
      f();
    }
    return m;
  })(e.layer), a = o.src, l = ((d) => {
    let g = d, p = !0, m;
    for (; p; ) {
      const h = g;
      if (h.tag === "Leaf") {
        p = !1, m = v;
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
          p = !1, m = T("Just", h._4);
          continue;
        }
      }
      f();
    }
    return m;
  })(e.layer), _ = (() => {
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
  return _ < r.slack ? { edge: T("Just", o), slack: _ } : r;
})({ edge: v, slack: 1e9 })(n).edge, QT = (t) => {
  const n = pn(t)(Yt);
  return (e) => (r) => {
    const o = w((i) => (s) => Jf(i)((() => {
      const a = ((c) => {
        let l = c, _ = !0, d;
        for (; _; ) {
          const g = l;
          if (g.tag === "Leaf") {
            _ = !1, d = v;
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
              _ = !1, d = T("Just", g._4);
              continue;
            }
          }
          f();
        }
        return d;
      })(r);
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      f();
    })()))(1e9)(e);
    return n(B((i) => b(
      i,
      (() => {
        const u = ((a) => {
          let c = a, l = !0, _;
          for (; l; ) {
            const d = c;
            if (d.tag === "Leaf") {
              l = !1, _ = v;
              continue;
            }
            if (d.tag === "Node") {
              const g = t.compare(i)(d._3);
              if (g === "LT") {
                c = d._5;
                continue;
              }
              if (g === "GT") {
                c = d._6;
                continue;
              }
              if (g === "EQ") {
                l = !1, _ = T("Just", d._4);
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
}, Md = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = w((u) => (a) => {
      const c = Md(t)(e)(n.eq(a.src)(r) ? a.tgt : a.src)({ ...u.st, edgeVisited: tt(st)(a.eid)()(u.st.edgeVisited) });
      return { lowest: Jf(u.lowest)(c.lowest), st: c.st };
    })({ lowest: 1e9, st: o })(ht(
      (u) => no(u.eid)(o.treeEdge) && (n.eq(u.src)(r) || n.eq(u.tgt)(r)) && !no(u.eid)(o.edgeVisited),
      e
    )), s = Jf(i.lowest)(i.st.postOrder);
    return {
      lowest: s,
      st: {
        ...i.st,
        poID: tt(t)(r)(i.st.postOrder)(i.st.poID),
        lowestPoID: tt(t)(r)(s)(i.st.lowestPoID),
        postOrder: i.st.postOrder + 1 | 0
      }
    };
  };
}, Ud = (t) => {
  const n = Md(t);
  return (e) => (r) => (o) => 0 < e.length ? n(r)(e[0])({ ...o, edgeVisited: G, postOrder: 1, poID: G, lowestPoID: G }).st : o;
}, OT = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => ht((i) => no(i.eid)(r.treeEdge) && (n.eq(i.src)(o) || n.eq(i.tgt)(o)), e);
}, WT = (t) => (n) => en((e) => {
  const r = Cf(e.eid)(n.cutvalue);
  return no(e.eid)(n.treeEdge) && (() => {
    if (r.tag === "Nothing")
      return !1;
    if (r.tag === "Just")
      return r._1 < -1e-10;
    f();
  })();
})(t), Kd = (t) => {
  const n = bf(t);
  return (e) => (r) => (o) => {
    const i = 0 < e.length ? T("Just", e[0]) : v;
    if (i.tag === "Nothing")
      return o;
    if (i.tag === "Just") {
      const s = n(r)(i._1)({ ...o, edgeVisited: G, treeNode: G, treeEdge: G });
      if (s.count >= e.length)
        return s.st;
      const u = HT(t)(r)(s.st);
      if (u.tag === "Nothing")
        return s.st;
      if (u.tag === "Just") {
        const a = u._1.tgt, l = ((h) => {
          let $ = h, x = !0, y;
          for (; x; ) {
            const J = $;
            if (J.tag === "Leaf") {
              x = !1, y = v;
              continue;
            }
            if (J.tag === "Node") {
              const N = t.compare(a)(J._3);
              if (N === "LT") {
                $ = J._5;
                continue;
              }
              if (N === "GT") {
                $ = J._6;
                continue;
              }
              if (N === "EQ") {
                x = !1, y = T("Just", J._4);
                continue;
              }
            }
            f();
          }
          return y;
        })(s.st.layer), _ = u._1.src, g = ((h) => {
          let $ = h, x = !0, y;
          for (; x; ) {
            const J = $;
            if (J.tag === "Leaf") {
              x = !1, y = v;
              continue;
            }
            if (J.tag === "Node") {
              const N = t.compare(_)(J._3);
              if (N === "LT") {
                $ = J._5;
                continue;
              }
              if (N === "GT") {
                $ = J._6;
                continue;
              }
              if (N === "EQ") {
                x = !1, y = T("Just", J._4);
                continue;
              }
            }
            f();
          }
          return y;
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
          return ((x) => {
            let y = x, J = !0, N;
            for (; J; ) {
              const C = y;
              if (C.tag === "Leaf") {
                J = !1, N = !1;
                continue;
              }
              if (C.tag === "Node") {
                const S = t.compare(h)(C._3);
                if (S === "LT") {
                  y = C._5;
                  continue;
                }
                if (S === "GT") {
                  y = C._6;
                  continue;
                }
                if (S === "EQ") {
                  J = !1, N = !0;
                  continue;
                }
              }
              f();
            }
            return N;
          })(s.st.treeNode);
        })() ? -p : p;
        return Kd(t)(e)(r)({
          ...s.st,
          layer: w((h) => ($) => ((y) => {
            let J = y, N = !0, C;
            for (; N; ) {
              const S = J;
              if (S.tag === "Leaf") {
                N = !1, C = !1;
                continue;
              }
              if (S.tag === "Node") {
                const P = t.compare($)(S._3);
                if (P === "LT") {
                  J = S._5;
                  continue;
                }
                if (P === "GT") {
                  J = S._6;
                  continue;
                }
                if (P === "EQ") {
                  N = !1, C = !0;
                  continue;
                }
              }
              f();
            }
            return C;
          })(s.st.treeNode) ? tt(t)($)((() => {
            const y = ((J) => {
              let N = J, C = !0, S;
              for (; C; ) {
                const P = N;
                if (P.tag === "Leaf") {
                  C = !1, S = v;
                  continue;
                }
                if (P.tag === "Node") {
                  const E = t.compare($)(P._3);
                  if (E === "LT") {
                    N = P._5;
                    continue;
                  }
                  if (E === "GT") {
                    N = P._6;
                    continue;
                  }
                  if (E === "EQ") {
                    C = !1, S = T("Just", P._4);
                    continue;
                  }
                }
                f();
              }
              return S;
            })(s.st.layer);
            if (y.tag === "Nothing")
              return 0 + m | 0;
            if (y.tag === "Just")
              return y._1 + m | 0;
            f();
          })())(h) : h)(s.st.layer)(e)
        });
      }
    }
    f();
  };
}, qT = (t) => (n) => (e) => (r) => w((o) => (i) => {
  if (oa(t)(r)(i.src)(e) && !oa(t)(r)(i.tgt)(e)) {
    const s = i.tgt, a = ((g) => {
      let p = g, m = !0, h;
      for (; m; ) {
        const $ = p;
        if ($.tag === "Leaf") {
          m = !1, h = v;
          continue;
        }
        if ($.tag === "Node") {
          const x = t.compare(s)($._3);
          if (x === "LT") {
            p = $._5;
            continue;
          }
          if (x === "GT") {
            p = $._6;
            continue;
          }
          if (x === "EQ") {
            m = !1, h = T("Just", $._4);
            continue;
          }
        }
        f();
      }
      return h;
    })(r.layer), c = i.src, _ = ((g) => {
      let p = g, m = !0, h;
      for (; m; ) {
        const $ = p;
        if ($.tag === "Leaf") {
          m = !1, h = v;
          continue;
        }
        if ($.tag === "Node") {
          const x = t.compare(c)($._3);
          if (x === "LT") {
            p = $._5;
            continue;
          }
          if (x === "GT") {
            p = $._6;
            continue;
          }
          if (x === "EQ") {
            m = !1, h = T("Just", $._4);
            continue;
          }
        }
        f();
      }
      return h;
    })(r.layer), d = (() => {
      if (a.tag === "Nothing") {
        if (_.tag === "Nothing")
          return -i.delta;
        if (_.tag === "Just")
          return -_._1 - i.delta | 0;
        f();
      }
      if (a.tag === "Just") {
        if (_.tag === "Nothing")
          return (a._1 - 0 | 0) - i.delta | 0;
        if (_.tag === "Just")
          return (a._1 - _._1 | 0) - i.delta | 0;
      }
      f();
    })();
    if (d < o.slack)
      return { edge: T("Just", i), slack: d };
  }
  return o;
})({ edge: v, slack: 1e9 })(n).edge, XT = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => (i) => {
    const s = i.tgt, u = i.src;
    return w((a) => (c) => {
      if ((() => {
        const l = Cf(c.eid)(r.cutvalue);
        if (l.tag === "Just")
          return !0;
        if (l.tag === "Nothing")
          return !1;
        f();
      })()) {
        const l = Cf(c.eid)(r.cutvalue), _ = (() => {
          if (l.tag === "Nothing")
            return 0;
          if (l.tag === "Just")
            return l._1;
          f();
        })();
        return n.eq(u)(c.src) || n.eq(s)(c.tgt) ? a - (_ - c.weight) : a + (_ - c.weight);
      }
      return n.eq(o)(u) ? n.eq(c.src)(o) ? a + c.weight : a - c.weight : n.eq(c.src)(o) ? a - c.weight : a + c.weight;
    })(i.weight)(ht((a) => a.eid !== i.eid && (n.eq(a.src)(o) || n.eq(a.tgt)(o)), e));
  };
}, YT = (t) => {
  const n = XT(t);
  return (e) => (r) => (o) => {
    const i = (u, a, c) => {
      const _ = ((d) => {
        let g = d, p = !0, m;
        for (; p; ) {
          const h = g;
          if (h.tag === "Leaf") {
            p = !1, m = v;
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
              p = !1, m = T("Just", h._4);
              continue;
            }
          }
          f();
        }
        return m;
      })(c);
      if (_.tag === "Just")
        return tt(t)(u)(ht((d) => d.eid !== a.eid, _._1))(c);
      if (_.tag === "Nothing")
        return c;
      f();
    };
    return ((u) => (a) => {
      let c = u, l = a, _ = !0, d;
      for (; _; ) {
        const g = c, p = l, h = ((x) => {
          let y = x, J = !0, N;
          for (; J; ) {
            const C = y;
            if (C.tag === "Leaf") {
              J = !1, N = v;
              continue;
            }
            if (C.tag === "Node") {
              const S = t.compare(p)(C._3);
              if (S === "LT") {
                y = C._5;
                continue;
              }
              if (S === "GT") {
                y = C._6;
                continue;
              }
              if (S === "EQ") {
                J = !1, N = T("Just", C._4);
                continue;
              }
            }
            f();
          }
          return N;
        })(g.unknown), $ = (() => {
          if (h.tag === "Nothing")
            return [];
          if (h.tag === "Just")
            return h._1;
          f();
        })();
        if ($.length === 1) {
          const x = t.Eq0().eq($[0].src)(p) ? $[0].tgt : $[0].src;
          c = {
            unknown: i(p, $[0], i(x, $[0], g.unknown)),
            cutvalue: tt(st)($[0].eid)(n(e)(g)(p)($[0]))(g.cutvalue)
          }, l = x;
          continue;
        }
        _ = !1, d = g;
      }
      return d;
    })(r)(o);
  };
}, Vd = (t) => {
  const n = t.Eq0(), e = t.Eq0(), r = { eq: (c) => (l) => c.delta === l.delta && c.eid === l.eid && e.eq(c.src)(l.src) && n.eq(c.tgt)(l.tgt) && c.weight === l.weight }, o = {
    compare: (c) => (l) => {
      const _ = st.compare(c.delta)(l.delta);
      if (_ === "LT" || _ === "GT" || _ !== "EQ")
        return _;
      const d = st.compare(c.eid)(l.eid);
      if (d === "LT" || d === "GT" || d !== "EQ")
        return d;
      const g = t.compare(c.src)(l.src);
      if (g === "LT" || g === "GT" || g !== "EQ")
        return g;
      const p = t.compare(c.tgt)(l.tgt);
      if (p === "LT" || p === "GT" || p !== "EQ")
        return p;
      const m = it.compare(c.weight)(l.weight);
      return m === "LT" || m === "GT" || m !== "EQ" ? m : ce;
    },
    Eq0: () => r
  }, i = w((c) => (l) => tt(o)(l)()(c))(G), s = OT(t), u = pn(t)(Yt), a = YT(t);
  return (c) => (l) => (_) => {
    const d = {
      unknown: u(B((g) => b(
        g,
        jt(be.foldr, i(s(l)(_)(g)))
      ))(c)),
      cutvalue: G
    };
    return {
      ..._,
      cutvalue: w(a(l))(d)(ht(
        (g) => {
          const m = ((h) => {
            let $ = h, x = !0, y;
            for (; x; ) {
              const J = $;
              if (J.tag === "Leaf") {
                x = !1, y = v;
                continue;
              }
              if (J.tag === "Node") {
                const N = t.compare(g)(J._3);
                if (N === "LT") {
                  $ = J._5;
                  continue;
                }
                if (N === "GT") {
                  $ = J._6;
                  continue;
                }
                if (N === "EQ") {
                  x = !1, y = T("Just", J._4);
                  continue;
                }
              }
              f();
            }
            return y;
          })(d.unknown);
          if (m.tag === "Nothing")
            return !1;
          if (m.tag === "Just")
            return m._1.length === 1;
          f();
        },
        c
      )).cutvalue
    };
  };
}, MT = (t) => {
  const n = Ud(t), e = Vd(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const a = { ...u, treeEdge: tt(st)(s.eid)()(Qi(st)(i.eid)(u.treeEdge)) }, c = s.tgt, _ = (($) => {
      let x = $, y = !0, J;
      for (; y; ) {
        const N = x;
        if (N.tag === "Leaf") {
          y = !1, J = v;
          continue;
        }
        if (N.tag === "Node") {
          const C = t.compare(c)(N._3);
          if (C === "LT") {
            x = N._5;
            continue;
          }
          if (C === "GT") {
            x = N._6;
            continue;
          }
          if (C === "EQ") {
            y = !1, J = T("Just", N._4);
            continue;
          }
        }
        f();
      }
      return J;
    })(a.layer), d = s.src, p = (($) => {
      let x = $, y = !0, J;
      for (; y; ) {
        const N = x;
        if (N.tag === "Leaf") {
          y = !1, J = v;
          continue;
        }
        if (N.tag === "Node") {
          const C = t.compare(d)(N._3);
          if (C === "LT") {
            x = N._5;
            continue;
          }
          if (C === "GT") {
            x = N._6;
            continue;
          }
          if (C === "EQ") {
            y = !1, J = T("Just", N._4);
            continue;
          }
        }
        f();
      }
      return J;
    })(a.layer), m = (() => {
      if (_.tag === "Nothing") {
        if (p.tag === "Nothing")
          return -s.delta;
        if (p.tag === "Just")
          return -p._1 - s.delta | 0;
        f();
      }
      if (_.tag === "Just") {
        if (p.tag === "Nothing")
          return (_._1 - 0 | 0) - s.delta | 0;
        if (p.tag === "Just")
          return (_._1 - p._1 | 0) - s.delta | 0;
      }
      f();
    })(), h = oa(t)(a)(s.tgt)(i) ? m : -m;
    return e(r)(o)(n(r)(o)({
      ...a,
      layer: w(($) => (x) => oa(t)(a)(x)(i) ? $ : tt(t)(x)((() => {
        const J = ((N) => {
          let C = N, S = !0, P;
          for (; S; ) {
            const E = C;
            if (E.tag === "Leaf") {
              S = !1, P = v;
              continue;
            }
            if (E.tag === "Node") {
              const Q = t.compare(x)(E._3);
              if (Q === "LT") {
                C = E._5;
                continue;
              }
              if (Q === "GT") {
                C = E._6;
                continue;
              }
              if (Q === "EQ") {
                S = !1, P = T("Just", E._4);
                continue;
              }
            }
            f();
          }
          return P;
        })(a.layer);
        if (J.tag === "Nothing")
          return 0 + h | 0;
        if (J.tag === "Just")
          return J._1 + h | 0;
        f();
      })())($))(a.layer)(r)
    }));
  };
}, UT = (t) => {
  const n = MT(t);
  return (e) => (r) => (o) => (i) => ((u) => (a) => {
    let c = u, l = a, _ = !0, d;
    for (; _; ) {
      const g = c, p = l;
      if (g === 0) {
        _ = !1, d = p;
        continue;
      }
      const m = WT(o)(p);
      if (m.tag === "Nothing") {
        _ = !1, d = p;
        continue;
      }
      if (m.tag === "Just") {
        const h = qT(t)(o)(m._1)(p);
        if (h.tag === "Nothing") {
          _ = !1, d = p;
          continue;
        }
        if (h.tag === "Just") {
          c = g - 1 | 0, l = n(r)(o)(m._1)(h._1)(p);
          continue;
        }
      }
      f();
    }
    return d;
  })(e)(i);
}, KT = (t) => {
  const n = Vd(t), e = Ud(t), r = Kd(t);
  return (o) => (i) => (s) => n(o)(i)(e(o)(i)(r(o)(i)(s)));
}, Fg = (t) => (n) => w((e) => (r) => Wt(t)(Nn)(n(r))([r])(e))(G), VT = (t) => {
  const n = pn(t)(Yt);
  return (e) => (r) => (o) => {
    const i = (a) => (c) => (l) => (_) => {
      let d = a, g = c, p = l, m = _, h = !0, $;
      for (; h; ) {
        const x = d, y = g, J = p, N = m, C = Ht((S) => v, (S) => (P) => T("Just", { head: S, tail: P }), J);
        if (C.tag === "Nothing") {
          h = !1, $ = N;
          continue;
        }
        if (C.tag === "Just") {
          const S = C._1.head, E = ((D) => {
            let H = D, rt = !0, ot;
            for (; rt; ) {
              const M = H;
              if (M.tag === "Leaf") {
                rt = !1, ot = v;
                continue;
              }
              if (M.tag === "Node") {
                const q = t.compare(S)(M._3);
                if (q === "LT") {
                  H = M._5;
                  continue;
                }
                if (q === "GT") {
                  H = M._6;
                  continue;
                }
                if (q === "EQ") {
                  rt = !1, ot = T("Just", M._4);
                  continue;
                }
              }
              f();
            }
            return ot;
          })(N.layer), Q = (() => {
            if (E.tag === "Nothing")
              return 0;
            if (E.tag === "Just")
              return E._1;
            f();
          })(), W = w((D) => (H) => {
            const rt = H.tgt, M = ((A) => {
              let R = A, X = !0, L;
              for (; X; ) {
                const I = R;
                if (I.tag === "Leaf") {
                  X = !1, L = v;
                  continue;
                }
                if (I.tag === "Node") {
                  const z = t.compare(rt)(I._3);
                  if (z === "LT") {
                    R = I._5;
                    continue;
                  }
                  if (z === "GT") {
                    R = I._6;
                    continue;
                  }
                  if (z === "EQ") {
                    X = !1, L = T("Just", I._4);
                    continue;
                  }
                }
                f();
              }
              return L;
            })(D.incident), q = (() => {
              if (M.tag === "Nothing")
                return -1;
              if (M.tag === "Just")
                return M._1 - 1 | 0;
              f();
            })();
            return {
              st: {
                ...D.st,
                layer: tt(t)(H.tgt)(IT((() => {
                  const A = H.tgt, X = ((L) => {
                    let I = L, z = !0, U;
                    for (; z; ) {
                      const K = I;
                      if (K.tag === "Leaf") {
                        z = !1, U = v;
                        continue;
                      }
                      if (K.tag === "Node") {
                        const O = t.compare(A)(K._3);
                        if (O === "LT") {
                          I = K._5;
                          continue;
                        }
                        if (O === "GT") {
                          I = K._6;
                          continue;
                        }
                        if (O === "EQ") {
                          z = !1, U = T("Just", K._4);
                          continue;
                        }
                      }
                      f();
                    }
                    return U;
                  })(D.st.layer);
                  if (X.tag === "Nothing")
                    return 0;
                  if (X.tag === "Just")
                    return X._1;
                  f();
                })())(Q + H.delta | 0))(D.st.layer)
              },
              incident: tt(t)(H.tgt)(q)(D.incident),
              queue: q === 0 ? [...D.queue, H.tgt] : D.queue
            };
          })({ st: N, incident: y, queue: C._1.tail })((() => {
            const H = ((rt) => {
              let ot = rt, M = !0, q;
              for (; M; ) {
                const A = ot;
                if (A.tag === "Leaf") {
                  M = !1, q = v;
                  continue;
                }
                if (A.tag === "Node") {
                  const R = t.compare(S)(A._3);
                  if (R === "LT") {
                    ot = A._5;
                    continue;
                  }
                  if (R === "GT") {
                    ot = A._6;
                    continue;
                  }
                  if (R === "EQ") {
                    M = !1, q = T("Just", A._4);
                    continue;
                  }
                }
                f();
              }
              return q;
            })(x);
            if (H.tag === "Nothing")
              return [];
            if (H.tag === "Just")
              return H._1;
            f();
          })());
          d = x, g = W.incident, p = W.queue, m = W.st;
          continue;
        }
        f();
      }
      return $;
    }, s = Fg(t)((a) => a.tgt)(r), u = n(B((a) => b(
      a,
      (() => {
        const l = ((_) => {
          let d = _, g = !0, p;
          for (; g; ) {
            const m = d;
            if (m.tag === "Leaf") {
              g = !1, p = v;
              continue;
            }
            if (m.tag === "Node") {
              const h = t.compare(a)(m._3);
              if (h === "LT") {
                d = m._5;
                continue;
              }
              if (h === "GT") {
                d = m._6;
                continue;
              }
              if (h === "EQ") {
                g = !1, p = T("Just", m._4);
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
    return i(Fg(t)((a) => a.src)(r))(u)(ht(
      (a) => {
        const l = ((_) => {
          let d = _, g = !0, p;
          for (; g; ) {
            const m = d;
            if (m.tag === "Leaf") {
              g = !1, p = v;
              continue;
            }
            if (m.tag === "Node") {
              const h = t.compare(a)(m._3);
              if (h === "LT") {
                d = m._5;
                continue;
              }
              if (h === "GT") {
                d = m._6;
                continue;
              }
              if (h === "EQ") {
                g = !1, p = T("Just", m._4);
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
}, jT = (t) => {
  const n = zT(t), e = VT(t), r = KT(t), o = UT(t);
  return (i) => (s) => {
    const u = e(i)(s)(n(i));
    return s.length === 0 ? u.layer : o(4 * i.length | 0)(i)(s)(r(i)(s)(u)).layer;
  };
}, jd = (t) => {
  const n = QT(t), e = jT(t), r = BT(t);
  return (o) => (i) => {
    if (o.length === 0)
      return G;
    if (o.length < 40)
      return n(o)(e(o)(i));
    const s = r(o)(i);
    return n(o)(DT(t)(s.removed)(e(s.coreNodes)(s.coreEdges)));
  };
}, Zd = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
}, kf = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ZT = /* @__PURE__ */ jd(st), Rs = (t) => (n) => ({ ...n, edges: [...n.edges, { src: t.src, tgt: t.tgt, delta: t.delta, weight: t.weight, eid: n.nextEid }], nextEid: n.nextEid + 1 | 0 }), tw = (t) => (n) => (e) => {
  if (e.cGroup.tag === "Nothing")
    return n;
  if (e.cGroup.tag === "Just") {
    const r = V((() => {
      const o = Zd(e.cGroup._1)(t);
      if (o.tag === "Nothing")
        return 0;
      if (o.tag === "Just")
        return o._1;
      f();
    })());
    return Ge(e.id)((o) => ({ ...o, hitbox: { ...o.hitbox, x: r + o.cGroupOffset.x } }))(n);
  }
  f();
}, nw = (t) => (n) => ({
  ...n,
  cGraph: w(tw(t))(n.cGraph)((() => {
    const e = n.cGraph;
    return bt((r) => gn(r)(e.cNodes))(e.cNodeOrder);
  })())
}), ew = (t) => (n) => (e) => (r) => (o) => {
  const i = dn(za(n.cGroupOffset.x - t.cGroupOffset.x));
  return Rs({ src: o.nextNodeId, tgt: r, delta: kf(0)(-i), weight: 1 })(Rs({ src: o.nextNodeId, tgt: e, delta: kf(0)(i), weight: 1 })({
    ...o,
    nodes: [...o.nodes, o.nextNodeId],
    nextNodeId: o.nextNodeId + 1 | 0
  }));
}, rw = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = kf(0)(dn(za(e.cGroupOffset.x + e.hitbox.width + (n.direction === "LEFT" || n.direction === "RIGHT" ? n.spacingsHandler.horizontalSpacing(e)(r) : n.spacingsHandler.verticalSpacing(e)(r)) - r.cGroupOffset.x)));
  return t.sameEdgeVerticalSegments(e)(r) ? ew(e)(r)(o)(i)(s) : Rs({ src: o, tgt: i, delta: u, weight: t.vsLNodePair(e)(r) ? 2 : 1 })(s);
}, ow = (t) => (n) => (e) => (r) => (o) => {
  const i = gn(o)(n.cGraph.cNodes);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just")
    return (e.cGroup.tag === "Nothing" ? i._1.cGroup.tag === "Nothing" : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" && e.cGroup._1 === i._1.cGroup._1) ? r : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" ? rw(t)(n)(e)(i._1)(e.cGroup._1)(i._1.cGroup._1)(r) : r;
  f();
}, iw = (t) => (n) => (e) => (r) => w(ow(t)(n)(r))(e)(r.constraints), sw = (t) => (n) => Rs({ src: n.srcGroup, tgt: n.tgtGroup, delta: n.delta, weight: n.weight })(t), uw = (t) => {
  const n = w((o) => (i) => Wt(st)(bn)(i.tgt)(1)(o))(G)(t.edges), e = ht(
    (o) => {
      const i = Zd(o)(n);
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
  return w((o) => (i) => Rs({ src: r, tgt: i, delta: 1, weight: 0 })(o))({ ...t, nodes: [...t.nodes, r], nextNodeId: r + 1 | 0 })(e);
}, aw = (t) => (n) => {
  const e = uw(w(sw)(w(iw(t)(n))({
    nodes: n.cGraph.cGroupOrder,
    edges: [],
    nextNodeId: n.cGraph.nextCGroupId,
    nextEid: 0
  })((() => {
    const r = n.cGraph;
    return bt((o) => gn(o)(r.cNodes))(r.cNodeOrder);
  })()))(t.edgeLengthEdges(n.cGraph)));
  return { nodes: e.nodes, edges: e.edges };
}, cw = (t) => (n) => {
  const e = aw(t)(n);
  return nw(ZT(e.nodes)(e.edges))(n);
}, th = (t) => t, yn = /* @__PURE__ */ th("H"), xn = /* @__PURE__ */ th("V"), fw = (t) => b(t._2, t._1), nh = (t) => ({ ...t, position: b(t.position._2, t.position._1), size: b(t.size._2, t.size._1) }), lw = (t) => ({
  start: b(t.start._2, t.start._1),
  end: b(t.end._2, t.end._1),
  direction: (() => {
    if (t.direction === "H")
      return xn;
    if (t.direction === "V")
      return yn;
    f();
  })()
}), eh = (t) => ({ ...t, segments: B(lw)(t.segments), bends: B(fw)(t.bends) }), gw = (t) => ({ nodes: B(nh)(t.nodes), edges: t.edges, paths: B(eh)(t.paths), ports: t.ports }), _w = { nodeNode: 8, edgeNode: 4, edgeEdge: 10 }, dw = (t) => (n) => ({
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
}), hw = (t) => (n) => cw(n), pw = (t) => (n) => (e) => {
  const r = gw(e), o = GT(r), i = ET(o)(Yd(r)), s = PT(Hd(j0)(nT({
    ...rT(o.cGraph),
    compactionAlgorithm: T("Just", hw()(i)),
    constraintAlgorithm: T("Just", hT(n.edgeEdge)),
    spacingsHandler: dw(n)(i)
  })).cGraph)({ nodes: r.nodes, edges: r.edges, paths: r.paths });
  return { nodes: B(nh)(s.nodes), edges: B(eh)(s.edges) };
}, Gg = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, rh = (t) => On(3)(t) === "$d:", mw = (t) => (n) => (e) => w((r) => (o) => {
  const i = Gg(o.from.node)(t), s = (() => {
    if (i.tag === "Nothing")
      return 0;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = Gg(o.to.node)(t), a = (() => {
    if (u.tag === "Nothing")
      return -s;
    if (u.tag === "Just")
      return u._1 - s | 0;
    f();
  })();
  if (a <= 1)
    return { ...r, edges: [...r.edges, o], chains: [...r.chains, { edgeId: o.id, nodes: [o.from.node, o.to.node] }] };
  const c = o.id, l = B((d) => "$d:" + c + ":" + an(d))(Vt(1, a - 1 | 0)), _ = [o.from.node, ...l, o.to.node];
  return {
    ...r,
    layers: w((d) => (g) => {
      const p = g._2, m = T2(s + g._1 | 0)((h) => [...h, p])(d);
      if (m.tag === "Nothing")
        return d;
      if (m.tag === "Just")
        return m._1;
      f();
    })(r.layers)(Ln(Vn, Vt(1, a - 1 | 0), l)),
    edges: [
      ...r.edges,
      ...Ln(
        (d) => (g) => ({ id: c + ":" + d + "->" + g, from: { node: d, port: o.from.port }, to: { node: g, port: o.to.port }, label: v }),
        _,
        At(1, _.length, _)
      )
    ],
    chains: [...r.chains, { edgeId: o.id, nodes: _ }]
  };
})({ layers: e, edges: [], chains: [] })(n), oh = (t) => t, hi = /* @__PURE__ */ pn(st)(Yt), Kt = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
}, Ig = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Nt = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ct = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, bi = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, $w = (t) => (n) => {
  const e = st.compare(t._1)(n._1);
  return e === "LT" ? Wn : e === "GT" ? qn : st.compare(t._2)(n._2);
}, yi = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, yw = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ke);
  return (n) => t(ge("IterNode", n, Ue));
})(), xw = (t) => t, Bg = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, vw = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Tu = /* @__PURE__ */ oh("Regular"), wu = /* @__PURE__ */ oh("Critical"), ih = (t) => (n) => {
  const e = w((s) => (u) => tt(F)(u.node)(u)(s))(G)(n), r = 1.25 * V(4), o = (s, u, a) => ((l) => (_) => (d) => {
    let g = l, p = _, m = d, h = !0, $;
    for (; h; ) {
      const x = g, y = p, J = m;
      if (J.critical) {
        h = !1, $ = J;
        continue;
      }
      const N = Ht((S) => v, (S) => (P) => T("Just", { head: S, tail: P }), x), C = Ht((S) => v, (S) => (P) => T("Just", { head: S, tail: P }), y);
      if (N.tag === "Just" && C.tag === "Just") {
        const S = N._1.head > C._1.head - s && N._1.head < C._1.head + s ? { ...J, critical: !0 } : N._1.head > C._1.head - r && N._1.head < C._1.head + r ? { ...J, conflicts: J.conflicts + 1 | 0 } : J;
        if (S.critical) {
          h = !1, $ = S;
          continue;
        }
        if (N._1.head <= C._1.head) {
          g = N._1.tail, p = y, m = S;
          continue;
        }
        g = x, p = C._1.tail, m = S;
        continue;
      }
      h = !1, $ = J;
    }
    return $;
  })(u)(a)({ conflicts: 0, critical: !1 }), i = (s, u, a) => {
    if (Ct(w(Ct)(-1e18)(u.incoming))(w(Ct)(-1e18)(u.outgoing)) - Nt(w(Nt)(1e18)(u.incoming))(w(Nt)(1e18)(u.outgoing)) < 1e-3 || Ct(w(Ct)(-1e18)(a.incoming))(w(Ct)(-1e18)(a.outgoing)) - Nt(w(Nt)(1e18)(a.incoming))(w(Nt)(1e18)(a.outgoing)) < 1e-3)
      return [];
    const c = o(s, u.outgoing, a.incoming), l = o(s, a.outgoing, u.incoming);
    if (c.critical || l.critical)
      return [...c.critical ? [{ src: a.id, tgt: u.id, weight: 1, kind: wu }] : [], ...l.critical ? [{ src: u.id, tgt: a.id, weight: 1, kind: wu }] : []];
    const _ = Nt(w(Nt)(1e18)(u.incoming))(w(Nt)(1e18)(u.outgoing)), d = Ct(w(Ct)(-1e18)(u.incoming))(w(Ct)(-1e18)(u.outgoing)), g = Nt(w(Nt)(1e18)(a.incoming))(w(Nt)(1e18)(a.outgoing)), p = Ct(w(Ct)(-1e18)(a.incoming))(w(Ct)(-1e18)(a.outgoing)), m = (1 * c.conflicts | 0) + (16 * (w(($) => (x) => x > p ? $ : x >= g ? $ + 1 | 0 : $)(0)(u.outgoing) + w(($) => (x) => x > d ? $ : x >= _ ? $ + 1 | 0 : $)(0)(a.incoming) | 0) | 0) | 0, h = (1 * l.conflicts | 0) + (16 * (w(($) => (x) => x > d ? $ : x >= _ ? $ + 1 | 0 : $)(0)(a.outgoing) + w(($) => (x) => x > p ? $ : x >= g ? $ + 1 | 0 : $)(0)(u.incoming) | 0) | 0) | 0;
    return m < h ? [{ src: u.id, tgt: a.id, weight: h - m | 0, kind: Tu }] : m > h ? [{ src: a.id, tgt: u.id, weight: m - h | 0, kind: Tu }] : m > 0 ? [{ src: u.id, tgt: a.id, weight: 0, kind: Tu }, { src: a.id, tgt: u.id, weight: 0, kind: Tu }] : [];
  };
  return w((s) => (u) => w((a) => (c) => tt(F)(c._1)(c._2)(a))(s)((() => {
    const a = w((D) => (H) => {
      const rt = H.edge.from.node + "|" + (() => {
        if (H.edge.from.port.tag === "Just")
          return H.edge.from.port._1;
        if (H.edge.from.port.tag === "Nothing")
          return "_auto_" + H.edge.id;
        f();
      })(), ot = Bg(rt)(D.entries);
      if (ot.tag === "Nothing")
        return {
          ...D,
          entries: tt(F)(rt)({
            id: 0,
            members: [H.edge.id],
            incoming: [H.fromPos._1],
            outgoing: [H.toPos._1],
            slot: 0,
            mark: 0,
            splitBy: v,
            splitPartner: v
          })(D.entries),
          order: [...D.order, rt]
        };
      if (ot.tag === "Just")
        return {
          ...D,
          entries: tt(F)(rt)({
            ...ot._1,
            members: [...ot._1.members, H.edge.id],
            incoming: [...kr((M) => M < H.fromPos._1)(ot._1.incoming).init, H.fromPos._1, ...kr((M) => M <= H.fromPos._1)(ot._1.incoming).rest],
            outgoing: [...kr((M) => M < H.toPos._1)(ot._1.outgoing).init, H.toPos._1, ...kr((M) => M <= H.toPos._1)(ot._1.outgoing).rest]
          })(D.entries)
        };
      f();
    })({ entries: G, order: [] })(u._2), c = Xt((D) => (H) => ({ ...H, id: D }))(bt((D) => Bg(D)(a.entries))(a.order));
    if (c.length === 0)
      return [];
    const l = w((D) => (H) => D.prev.tag === "Just" && H - D.prev._1 < 1e-9 ? D : { prev: T("Just", H), out: [...D.out, H] })({ prev: v, out: [] })(It(it.compare)([
      ...wt(c)((D) => D.incoming),
      ...wt(c)((D) => D.outgoing)
    ])).out, _ = l.length < 2 ? 0.2 * r : 0.2 * w((D) => (H) => {
      if (D.prev.tag === "Nothing")
        return { prev: T("Just", H), mn: D.mn };
      if (D.prev.tag === "Just")
        return { prev: T("Just", H), mn: Nt(D.mn)(H - D.prev._1) };
      f();
    })({ prev: v, mn: 1e18 })(l).mn, d = {
      segments: c,
      deps: (() => {
        const D = c.length;
        return wt(wt(Vt(0, D - 2 | 0))((H) => wt(Vt(H + 1 | 0, D - 1 | 0))((rt) => [
          b(H, rt)
        ])))((H) => H._1 >= 0 && H._1 < c.length ? H._2 >= 0 && H._2 < c.length ? i(_, c[H._1], c[H._2]) : [] : []);
      })()
    }, g = ht(
      (D) => {
        if (D.kind === "Critical")
          return !0;
        if (D.kind === "Regular")
          return !1;
        f();
      },
      d.deps
    ), p = (() => {
      if (g.length < 2)
        return d;
      const D = hi((() => {
        const q = d.segments;
        return B((A) => b(A.id, A.mark))((() => {
          const A = q.length, R = (I) => {
            let z = I, U = !0, K;
            for (; U; ) {
              const O = z, Z = en((et) => {
                const nt = Kt(et)(O.inWeight);
                if (nt.tag === "Nothing")
                  return !0;
                if (nt.tag === "Just")
                  return nt._1 === 0;
                f();
              })(O.remaining);
              if (Z.tag === "Nothing") {
                U = !1, K = O;
                continue;
              }
              if (Z.tag === "Just") {
                const et = Z._1;
                z = {
                  ...O,
                  inWeight: w((nt) => (gt) => Wt(st)(bn)(gt.tgt)(-gt.weight)(nt))(O.inWeight)((() => {
                    const nt = Kt(et)(O.depsBySrc);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })()),
                  marks: tt(st)(et)(O.nextSource)(O.marks),
                  nextSource: O.nextSource + 1 | 0,
                  outWeight: w((nt) => (gt) => Wt(st)(bn)(gt.src)(-gt.weight)(nt))(O.outWeight)((() => {
                    const nt = Kt(et)(O.depsByTgt);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })()),
                  remaining: ht((nt) => nt !== et, O.remaining)
                };
                continue;
              }
              f();
            }
            return K;
          }, X = (I) => {
            let z = I, U = !0, K;
            for (; U; ) {
              const O = z, Z = en((et) => {
                const nt = Kt(et)(O.outWeight);
                if (nt.tag === "Nothing")
                  return !0;
                if (nt.tag === "Just")
                  return nt._1 === 0;
                f();
              })(O.remaining);
              if (Z.tag === "Nothing") {
                U = !1, K = O;
                continue;
              }
              if (Z.tag === "Just") {
                const et = Z._1;
                z = {
                  ...O,
                  inWeight: w((nt) => (gt) => Wt(st)(bn)(gt.tgt)(-gt.weight)(nt))(O.inWeight)((() => {
                    const nt = Kt(et)(O.depsBySrc);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })()),
                  marks: tt(st)(et)(O.nextSink)(O.marks),
                  nextSink: O.nextSink - 1 | 0,
                  outWeight: w((nt) => (gt) => Wt(st)(bn)(gt.src)(-gt.weight)(nt))(O.outWeight)((() => {
                    const nt = Kt(et)(O.depsByTgt);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })()),
                  remaining: ht((nt) => nt !== et, O.remaining)
                };
                continue;
              }
              f();
            }
            return K;
          };
          return ((I) => {
            let z = I, U = !0, K;
            for (; U; ) {
              const Z = R(X(z));
              if (Z.remaining.length === 0) {
                U = !1, K = B((et) => {
                  const nt = Kt(et.id)(Z.marks), gt = (() => {
                    if (nt.tag === "Nothing")
                      return et.id;
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })();
                  return { ...et, mark: gt < A ? (gt + A | 0) + 1 | 0 : gt };
                })(q);
                continue;
              }
              z = (() => {
                const et = (gt) => {
                  const ct = Kt(gt)(Z.outWeight), $t = Kt(gt)(Z.inWeight);
                  return (() => {
                    if (ct.tag === "Nothing")
                      return 0;
                    if (ct.tag === "Just")
                      return ct._1;
                    f();
                  })() - (() => {
                    if ($t.tag === "Nothing")
                      return 0;
                    if ($t.tag === "Just")
                      return $t._1;
                    f();
                  })() | 0;
                }, nt = It((gt) => (ct) => st.compare(et(ct))(et(gt)))(Z.remaining);
                if (0 < nt.length) {
                  const gt = nt[0];
                  return {
                    ...Z,
                    inWeight: w((ct) => ($t) => Wt(st)(bn)($t.tgt)(-$t.weight)(ct))(Z.inWeight)((() => {
                      const ct = Kt(gt)(Z.depsBySrc);
                      if (ct.tag === "Nothing")
                        return [];
                      if (ct.tag === "Just")
                        return ct._1;
                      f();
                    })()),
                    marks: tt(st)(gt)(Z.nextSource)(Z.marks),
                    nextSource: Z.nextSource + 1 | 0,
                    outWeight: w((ct) => ($t) => Wt(st)(bn)($t.src)(-$t.weight)(ct))(Z.outWeight)((() => {
                      const ct = Kt(gt)(Z.depsByTgt);
                      if (ct.tag === "Nothing")
                        return [];
                      if (ct.tag === "Just")
                        return ct._1;
                      f();
                    })()),
                    remaining: ht((ct) => ct !== gt, Z.remaining)
                  };
                }
                return Z;
              })();
            }
            return K;
          })({
            remaining: B((I) => I.id)(q),
            marks: G,
            inWeight: w((I) => (z) => Wt(st)(bn)(z.tgt)(z.weight)(I))(G)(g),
            outWeight: w((I) => (z) => Wt(st)(bn)(z.src)(z.weight)(I))(G)(g),
            depsBySrc: w((I) => (z) => Wt(st)(Nn)(z.src)([z])(I))(G)(g),
            depsByTgt: w((I) => (z) => Wt(st)(Nn)(z.tgt)([z])(I))(G)(g),
            nextSink: A - 1 | 0,
            nextSource: A + 1 | 0
          });
        })());
      })()), H = ht(
        (q) => {
          const A = Kt(q.src)(D), R = Kt(q.tgt)(D);
          return (() => {
            if (A.tag === "Nothing")
              return 0;
            if (A.tag === "Just")
              return A._1;
            f();
          })() > (() => {
            if (R.tag === "Nothing")
              return 0;
            if (R.tag === "Just")
              return R._1;
            f();
          })();
        },
        g
      );
      if (H.length === 0)
        return d;
      const rt = w((q) => (A) => {
        if (Ne(po)(A.src)(q.decisions) || Ne(po)(A.tgt)(q.decisions))
          return q;
        const R = Kt(A.src)(q.segMap), X = Kt(A.tgt)(q.segMap);
        if (R.tag === "Just" && X.tag === "Just") {
          const L = (R._1.incoming.length + R._1.outgoing.length | 0) > 2 && (X._1.incoming.length + X._1.outgoing.length | 0) <= 2, I = L ? X._1 : R._1;
          return {
            decisions: [...q.decisions, I.id],
            segMap: tt(st)(I.id)({ ...I, splitBy: T("Just", L ? R._1.id : X._1.id) })(q.segMap)
          };
        }
        return q;
      })({ decisions: [], segMap: hi(B((q) => b(q.id, q))(d.segments)) })(H), ot = rt.segMap, M = w((q) => (A) => {
        const R = Nt(w(Nt)(1e18)(A.incoming))(w(Nt)(1e18)(A.outgoing)), X = Ct(w(Ct)(-1e18)(A.incoming))(w(Ct)(-1e18)(A.outgoing)), L = ht(
          (O) => O.a.startPosition <= X && O.a.endPosition >= R,
          Xt((O) => (Z) => ({ i: O, a: Z }))(q.freeAreas)
        );
        if (L.length === 0) {
          const O = {
            ...A,
            incoming: It(it.compare)(A.incoming),
            outgoing: It(it.compare)([(R + X) / 2]),
            splitPartner: T("Just", q.nextId)
          }, Z = {
            id: q.nextId,
            incoming: It(it.compare)([(R + X) / 2]),
            mark: 0,
            members: A.members,
            outgoing: It(it.compare)(A.outgoing),
            slot: 0,
            splitBy: v,
            splitPartner: T("Just", A.id)
          };
          return {
            segMap: tt(st)(Z.id)(Z)(tt(st)(O.id)(O)(q.segMap)),
            freeAreas: q.freeAreas,
            nextId: q.nextId + 1 | 0
          };
        }
        const I = 0 < L.length ? T("Just", L[0]) : v, z = (() => {
          if (I.tag === "Nothing")
            return { i: 0, a: { startPosition: 0, endPosition: 0, size: 0 } };
          if (I.tag === "Just") {
            if (L.length === 1)
              return I._1;
            const O = B((Z) => ({
              c: Z,
              rating: (() => {
                const et = (Z.a.startPosition + Z.a.endPosition) / 2, nt = [et], gt = [et], ct = w((() => {
                  const Pt = q.segMap;
                  return (Rt) => (rn) => {
                    const xt = Kt(rn.tgt)(Pt);
                    if (xt.tag === "Nothing")
                      return Rt;
                    if (xt.tag === "Just") {
                      const Gt = Nt(w(Nt)(1e18)(xt._1.incoming))(w(Nt)(1e18)(xt._1.outgoing)), vt = Ct(w(Ct)(-1e18)(xt._1.incoming))(w(Ct)(-1e18)(xt._1.outgoing)), Jt = Nt(w(Nt)(1e18)(A.incoming))(w(Nt)(1e18)(nt)), _t = (() => {
                        const Qt = Ct(w(Ct)(-1e18)(A.incoming))(w(Ct)(-1e18)(nt)), Ot = w((on) => (vn) => vn > vt ? on : vn >= Gt ? on + 1 | 0 : on)(0)(nt) + w((on) => (vn) => vn > Qt ? on : vn >= Jt ? on + 1 | 0 : on)(0)(xt._1.incoming) | 0, me = Nt(w(Nt)(1e18)(A.incoming))(w(Nt)(1e18)(nt)), ee = Ct(w(Ct)(-1e18)(A.incoming))(w(Ct)(-1e18)(nt)), Un = Nt(w(Nt)(1e18)(xt._1.incoming))(w(Nt)(1e18)(xt._1.outgoing)), Qn = Ct(w(Ct)(-1e18)(xt._1.incoming))(w(Ct)(-1e18)(xt._1.outgoing)), ar = w((on) => (vn) => vn > ee ? on : vn >= me ? on + 1 | 0 : on)(0)(xt._1.outgoing) + w((on) => (vn) => vn > Qn ? on : vn >= Un ? on + 1 | 0 : on)(0)(A.incoming) | 0;
                        return Ot === ar ? Ot > 0 ? { ...Rt, deps: Rt.deps + 2 | 0, crossings: Rt.crossings + Ot | 0 } : Rt : { ...Rt, deps: Rt.deps + 1 | 0, crossings: Rt.crossings + yi(Ot)(ar) | 0 };
                      })(), yt = Nt(w(Nt)(1e18)(xt._1.incoming))(w(Nt)(1e18)(xt._1.outgoing)), ft = Ct(w(Ct)(-1e18)(xt._1.incoming))(w(Ct)(-1e18)(xt._1.outgoing)), mt = Nt(w(Nt)(1e18)(gt))(w(Nt)(1e18)(A.outgoing)), Ft = Ct(w(Ct)(-1e18)(gt))(w(Ct)(-1e18)(A.outgoing)), Lt = w((Qt) => (Ot) => Ot > ft ? Qt : Ot >= yt ? Qt + 1 | 0 : Qt)(0)(A.outgoing) + w((Qt) => (Ot) => Ot > Ft ? Qt : Ot >= mt ? Qt + 1 | 0 : Qt)(0)(xt._1.incoming) | 0, zt = Nt(w(Nt)(1e18)(gt))(w(Nt)(1e18)(A.outgoing)), tn = Ct(w(Ct)(-1e18)(gt))(w(Ct)(-1e18)(A.outgoing)), pe = Nt(w(Nt)(1e18)(xt._1.incoming))(w(Nt)(1e18)(xt._1.outgoing)), Mn = Ct(w(Ct)(-1e18)(xt._1.incoming))(w(Ct)(-1e18)(xt._1.outgoing)), jn = w((Qt) => (Ot) => Ot > tn ? Qt : Ot >= zt ? Qt + 1 | 0 : Qt)(0)(xt._1.outgoing) + w((Qt) => (Ot) => Ot > Mn ? Qt : Ot >= pe ? Qt + 1 | 0 : Qt)(0)(gt) | 0;
                      return Lt === jn ? Lt > 0 ? { ..._t, deps: _t.deps + 2 | 0, crossings: _t.crossings + Lt | 0 } : _t : { ..._t, deps: _t.deps + 1 | 0, crossings: _t.crossings + yi(Lt)(jn) | 0 };
                    }
                    f();
                  };
                })())(w((() => {
                  const Pt = q.segMap;
                  return (Rt) => (rn) => {
                    const xt = Kt(rn.src)(Pt);
                    if (xt.tag === "Nothing")
                      return Rt;
                    if (xt.tag === "Just") {
                      const Gt = Nt(w(Nt)(1e18)(xt._1.incoming))(w(Nt)(1e18)(xt._1.outgoing)), vt = Ct(w(Ct)(-1e18)(xt._1.incoming))(w(Ct)(-1e18)(xt._1.outgoing)), Jt = Nt(w(Nt)(1e18)(A.incoming))(w(Nt)(1e18)(nt)), _t = (() => {
                        const Qt = Ct(w(Ct)(-1e18)(A.incoming))(w(Ct)(-1e18)(nt)), Ot = w((on) => (vn) => vn > vt ? on : vn >= Gt ? on + 1 | 0 : on)(0)(nt) + w((on) => (vn) => vn > Qt ? on : vn >= Jt ? on + 1 | 0 : on)(0)(xt._1.incoming) | 0, me = Nt(w(Nt)(1e18)(A.incoming))(w(Nt)(1e18)(nt)), ee = Ct(w(Ct)(-1e18)(A.incoming))(w(Ct)(-1e18)(nt)), Un = Nt(w(Nt)(1e18)(xt._1.incoming))(w(Nt)(1e18)(xt._1.outgoing)), Qn = Ct(w(Ct)(-1e18)(xt._1.incoming))(w(Ct)(-1e18)(xt._1.outgoing)), ar = w((on) => (vn) => vn > ee ? on : vn >= me ? on + 1 | 0 : on)(0)(xt._1.outgoing) + w((on) => (vn) => vn > Qn ? on : vn >= Un ? on + 1 | 0 : on)(0)(A.incoming) | 0;
                        return Ot === ar ? Ot > 0 ? { ...Rt, deps: Rt.deps + 2 | 0, crossings: Rt.crossings + Ot | 0 } : Rt : { ...Rt, deps: Rt.deps + 1 | 0, crossings: Rt.crossings + yi(Ot)(ar) | 0 };
                      })(), yt = Nt(w(Nt)(1e18)(xt._1.incoming))(w(Nt)(1e18)(xt._1.outgoing)), ft = Ct(w(Ct)(-1e18)(xt._1.incoming))(w(Ct)(-1e18)(xt._1.outgoing)), mt = Nt(w(Nt)(1e18)(gt))(w(Nt)(1e18)(A.outgoing)), Ft = Ct(w(Ct)(-1e18)(gt))(w(Ct)(-1e18)(A.outgoing)), Lt = w((Qt) => (Ot) => Ot > ft ? Qt : Ot >= yt ? Qt + 1 | 0 : Qt)(0)(A.outgoing) + w((Qt) => (Ot) => Ot > Ft ? Qt : Ot >= mt ? Qt + 1 | 0 : Qt)(0)(xt._1.incoming) | 0, zt = Nt(w(Nt)(1e18)(gt))(w(Nt)(1e18)(A.outgoing)), tn = Ct(w(Ct)(-1e18)(gt))(w(Ct)(-1e18)(A.outgoing)), pe = Nt(w(Nt)(1e18)(xt._1.incoming))(w(Nt)(1e18)(xt._1.outgoing)), Mn = Ct(w(Ct)(-1e18)(xt._1.incoming))(w(Ct)(-1e18)(xt._1.outgoing)), jn = w((Qt) => (Ot) => Ot > tn ? Qt : Ot >= zt ? Qt + 1 | 0 : Qt)(0)(xt._1.outgoing) + w((Qt) => (Ot) => Ot > Mn ? Qt : Ot >= pe ? Qt + 1 | 0 : Qt)(0)(gt) | 0;
                      return Lt === jn ? Lt > 0 ? { ..._t, deps: _t.deps + 2 | 0, crossings: _t.crossings + Lt | 0 } : _t : { ..._t, deps: _t.deps + 1 | 0, crossings: _t.crossings + yi(Lt)(jn) | 0 };
                    }
                    f();
                  };
                })())({ crossings: 0, deps: 0 })(ht((Pt) => Pt.tgt === A.id, d.deps)))(ht((Pt) => Pt.src === A.id, d.deps)), $t = (() => {
                  if (A.splitBy.tag === "Just")
                    return Kt(A.splitBy._1)(q.segMap);
                  if (A.splitBy.tag === "Nothing")
                    return v;
                  f();
                })();
                if ($t.tag === "Just")
                  return {
                    ...ct,
                    deps: ct.deps + 2 | 0,
                    crossings: (() => {
                      const Pt = Nt(w(Nt)(1e18)($t._1.incoming))(w(Nt)(1e18)($t._1.outgoing)), Rt = Nt(w(Nt)(1e18)(gt))(w(Nt)(1e18)(A.outgoing)), rn = Ct(w(Ct)(-1e18)($t._1.incoming))(w(Ct)(-1e18)($t._1.outgoing)), xt = Ct(w(Ct)(-1e18)(gt))(w(Ct)(-1e18)(A.outgoing)), Gt = Nt(w(Nt)(1e18)(A.incoming))(w(Nt)(1e18)(nt));
                      return ct.crossings + (() => {
                        const vt = Nt(w(Nt)(1e18)($t._1.incoming))(w(Nt)(1e18)($t._1.outgoing)), Jt = Ct(w(Ct)(-1e18)(A.incoming))(w(Ct)(-1e18)(nt)), _t = Ct(w(Ct)(-1e18)($t._1.incoming))(w(Ct)(-1e18)($t._1.outgoing));
                        return ((w((yt) => (ft) => ft > rn ? yt : ft >= Pt ? yt + 1 | 0 : yt)(0)(nt) + w((yt) => (ft) => ft > Jt ? yt : ft >= Gt ? yt + 1 | 0 : yt)(0)($t._1.incoming) | 0) + w((yt) => (ft) => ft > xt ? yt : ft >= Rt ? yt + 1 | 0 : yt)(0)($t._1.outgoing) | 0) + w((yt) => (ft) => ft > _t ? yt : ft >= vt ? yt + 1 | 0 : yt)(0)(gt) | 0;
                      })() | 0;
                    })()
                  };
                if ($t.tag === "Nothing")
                  return ct;
                f();
              })()
            }))(L);
            return w((Z) => (et) => et.rating.crossings < Z.rating.crossings || !(et.rating.crossings > Z.rating.crossings) && (et.rating.deps < Z.rating.deps || !(et.rating.deps > Z.rating.deps) && et.c.a.size > Z.c.a.size) ? et : Z)(0 < O.length ? O[0] : { c: I._1, rating: { crossings: 1e6, deps: 1e6 } })(O).c;
          }
          f();
        })(), U = {
          ...A,
          incoming: It(it.compare)(A.incoming),
          outgoing: It(it.compare)([(z.a.startPosition + z.a.endPosition) / 2]),
          splitPartner: T("Just", q.nextId)
        }, K = {
          id: q.nextId,
          incoming: It(it.compare)([(z.a.startPosition + z.a.endPosition) / 2]),
          mark: 0,
          members: A.members,
          outgoing: It(it.compare)(A.outgoing),
          slot: 0,
          splitBy: v,
          splitPartner: T("Just", A.id)
        };
        return {
          segMap: tt(st)(K.id)(K)(tt(st)(U.id)(U)(q.segMap)),
          freeAreas: (() => {
            if (z.i >= 0 && z.i < q.freeAreas.length) {
              const O = Y1(qt, v, z.i, q.freeAreas), Z = (() => {
                if (O.tag === "Nothing")
                  return q.freeAreas;
                if (O.tag === "Just")
                  return O._1;
                f();
              })();
              if (q.freeAreas[z.i].size / 2 < _)
                return Z;
              const et = (q.freeAreas[z.i].startPosition + q.freeAreas[z.i].endPosition) / 2, nt = et - _, gt = et + _;
              return [
                ...z.i < 1 ? [] : At(0, z.i, Z),
                ...q.freeAreas[z.i].startPosition <= nt ? [{ startPosition: q.freeAreas[z.i].startPosition, endPosition: nt, size: nt - q.freeAreas[z.i].startPosition }] : [],
                ...gt <= q.freeAreas[z.i].endPosition ? [{ startPosition: gt, endPosition: q.freeAreas[z.i].endPosition, size: q.freeAreas[z.i].endPosition - gt }] : [],
                ...z.i < 1 ? Z : At(z.i, Z.length, Z)
              ];
            }
            return q.freeAreas;
          })(),
          nextId: q.nextId + 1 | 0
        };
      })({
        segMap: ot,
        freeAreas: (() => {
          const q = It(it.compare)([
            ...wt(d.segments)((A) => A.incoming),
            ...wt(d.segments)((A) => A.outgoing)
          ]);
          return bt(xw)(Ln(
            (A) => (R) => R - A >= 2 * _ ? T("Just", { startPosition: A + _, endPosition: R - _, size: R - A - 2 * _ }) : v,
            q,
            At(1, q.length, q)
          ));
        })(),
        nextId: d.segments.length
      })(It((q) => (A) => it.compare(Ct(w(Ct)(-1e18)(q.incoming))(w(Ct)(-1e18)(q.outgoing)) - Nt(w(Nt)(1e18)(q.incoming))(w(Nt)(1e18)(q.outgoing)))(Ct(w(Ct)(-1e18)(A.incoming))(w(Ct)(-1e18)(A.outgoing)) - Nt(w(Nt)(1e18)(A.incoming))(w(Nt)(1e18)(A.outgoing))))(bt((q) => Kt(q)(ot))(rt.decisions)));
      return {
        segments: (() => {
          const q = (A, R) => {
            if (A.tag === "Leaf")
              return R;
            if (A.tag === "Node")
              return q(A._5, kt("Cons", A._4, q(A._6, R)));
            f();
          };
          return jt(Jn.foldr, q(M.segMap, Y));
        })(),
        deps: (() => {
          const q = M.segMap, A = (L, I) => {
            if (L.tag === "Leaf")
              return I;
            if (L.tag === "Node")
              return A(L._5, kt("Cons", L._4, A(L._6, I)));
            f();
          }, R = jt(Jn.foldr, A(q, Y)), X = R.length;
          return [
            ...wt(wt(Vt(0, X - 2 | 0))((L) => wt(Vt(L + 1 | 0, X - 1 | 0))((I) => [
              b(L, I)
            ])))((L) => L._1 >= 0 && L._1 < R.length ? L._2 >= 0 && L._2 < R.length ? R[L._1].splitPartner.tag !== "Nothing" && R[L._1].splitPartner.tag === "Just" && R[L._1].splitPartner._1 === R[L._2].id || R[L._2].splitPartner.tag !== "Nothing" && R[L._2].splitPartner.tag === "Just" && R[L._2].splitPartner._1 === R[L._1].id ? [] : i(_, R[L._1], R[L._2]) : [] : []),
            ...wt(R)((L) => L.splitBy.tag === "Just" && L.splitPartner.tag === "Just" && (() => {
              const I = Kt(L.splitPartner._1)(q);
              if (I.tag === "Nothing")
                return !1;
              if (I.tag === "Just")
                return !0;
              f();
            })() && (() => {
              const I = Kt(L.splitBy._1)(q);
              if (I.tag === "Nothing")
                return !1;
              if (I.tag === "Just")
                return !0;
              f();
            })() ? [{ src: L.id, tgt: L.splitBy._1, weight: 1, kind: wu }, { src: L.splitBy._1, tgt: L.splitPartner._1, weight: 1, kind: wu }] : [])
          ];
        })()
      };
    })(), m = p.segments, h = m.length, $ = (D) => {
      let H = D, rt = !0, ot;
      for (; rt; ) {
        const M = H, q = en((A) => {
          const R = Kt(A)(M.inWeight);
          if (R.tag === "Nothing")
            return !0;
          if (R.tag === "Just")
            return R._1 === 0;
          f();
        })(M.remaining);
        if (q.tag === "Nothing") {
          rt = !1, ot = M;
          continue;
        }
        if (q.tag === "Just") {
          const A = q._1;
          H = {
            ...M,
            inWeight: w((R) => (X) => Wt(st)(bn)(X.tgt)(-X.weight)(R))(M.inWeight)((() => {
              const R = Kt(A)(M.depsBySrc);
              if (R.tag === "Nothing")
                return [];
              if (R.tag === "Just")
                return R._1;
              f();
            })()),
            marks: tt(st)(A)(M.nextSource)(M.marks),
            nextSource: M.nextSource + 1 | 0,
            outWeight: w((R) => (X) => Wt(st)(bn)(X.src)(-X.weight)(R))(M.outWeight)((() => {
              const R = Kt(A)(M.depsByTgt);
              if (R.tag === "Nothing")
                return [];
              if (R.tag === "Just")
                return R._1;
              f();
            })()),
            remaining: ht((R) => R !== A, M.remaining)
          };
          continue;
        }
        f();
      }
      return ot;
    }, x = (D) => {
      let H = D, rt = !0, ot;
      for (; rt; ) {
        const M = H, q = en((A) => {
          const R = Kt(A)(M.outWeight);
          if (R.tag === "Nothing")
            return !0;
          if (R.tag === "Just")
            return R._1 === 0;
          f();
        })(M.remaining);
        if (q.tag === "Nothing") {
          rt = !1, ot = M;
          continue;
        }
        if (q.tag === "Just") {
          const A = q._1;
          H = {
            ...M,
            inWeight: w((R) => (X) => Wt(st)(bn)(X.tgt)(-X.weight)(R))(M.inWeight)((() => {
              const R = Kt(A)(M.depsBySrc);
              if (R.tag === "Nothing")
                return [];
              if (R.tag === "Just")
                return R._1;
              f();
            })()),
            marks: tt(st)(A)(M.nextSink)(M.marks),
            nextSink: M.nextSink - 1 | 0,
            outWeight: w((R) => (X) => Wt(st)(bn)(X.src)(-X.weight)(R))(M.outWeight)((() => {
              const R = Kt(A)(M.depsByTgt);
              if (R.tag === "Nothing")
                return [];
              if (R.tag === "Just")
                return R._1;
              f();
            })()),
            remaining: ht((R) => R !== A, M.remaining)
          };
          continue;
        }
        f();
      }
      return ot;
    }, J = ((D) => {
      let H = D, rt = !0, ot;
      for (; rt; ) {
        const q = $(x(H));
        if (q.remaining.length === 0) {
          rt = !1, ot = B((A) => {
            const R = Kt(A.id)(q.marks), X = (() => {
              if (R.tag === "Nothing")
                return A.id;
              if (R.tag === "Just")
                return R._1;
              f();
            })();
            return { ...A, mark: X < h ? (X + h | 0) + 1 | 0 : X };
          })(m);
          continue;
        }
        H = (() => {
          const A = (X) => {
            const L = Kt(X)(q.outWeight), I = Kt(X)(q.inWeight);
            return (() => {
              if (L.tag === "Nothing")
                return 0;
              if (L.tag === "Just")
                return L._1;
              f();
            })() - (() => {
              if (I.tag === "Nothing")
                return 0;
              if (I.tag === "Just")
                return I._1;
              f();
            })() | 0;
          }, R = It((X) => (L) => st.compare(A(L))(A(X)))(q.remaining);
          if (0 < R.length) {
            const X = R[0];
            return {
              ...q,
              inWeight: w((L) => (I) => Wt(st)(bn)(I.tgt)(-I.weight)(L))(q.inWeight)((() => {
                const L = Kt(X)(q.depsBySrc);
                if (L.tag === "Nothing")
                  return [];
                if (L.tag === "Just")
                  return L._1;
                f();
              })()),
              marks: tt(st)(X)(q.nextSource)(q.marks),
              nextSource: q.nextSource + 1 | 0,
              outWeight: w((L) => (I) => Wt(st)(bn)(I.src)(-I.weight)(L))(q.outWeight)((() => {
                const L = Kt(X)(q.depsByTgt);
                if (L.tag === "Nothing")
                  return [];
                if (L.tag === "Just")
                  return L._1;
                f();
              })()),
              remaining: ht((L) => L !== X, q.remaining)
            };
          }
          return q;
        })();
      }
      return ot;
    })({
      remaining: B((D) => D.id)(m),
      marks: G,
      inWeight: w((D) => (H) => Wt(st)(bn)(H.tgt)(H.weight)(D))(G)(p.deps),
      outWeight: w((D) => (H) => Wt(st)(bn)(H.src)(H.weight)(D))(G)(p.deps),
      depsBySrc: w((D) => (H) => Wt(st)(Nn)(H.src)([H])(D))(G)(p.deps),
      depsByTgt: w((D) => (H) => Wt(st)(Nn)(H.tgt)([H])(D))(G)(p.deps),
      nextSink: h - 1 | 0,
      nextSource: h + 1 | 0
    }), N = (() => {
      const D = (() => {
        const M = hi(B((q) => b(q.id, q.mark))(J));
        return {
          segments: J,
          deps: bt((q) => (() => {
            if (q.kind === "Critical")
              return !0;
            if (q.kind === "Regular")
              return !1;
            f();
          })() ? T("Just", q) : (() => {
            const A = Kt(q.src)(M), R = Kt(q.tgt)(M);
            return (() => {
              if (A.tag === "Nothing")
                return 0;
              if (A.tag === "Just")
                return A._1;
              f();
            })() > (() => {
              if (R.tag === "Nothing")
                return 0;
              if (R.tag === "Just")
                return R._1;
              f();
            })();
          })() ? q.weight === 0 ? v : T("Just", { src: q.tgt, tgt: q.src, weight: q.weight, kind: q.kind }) : T("Just", q))(p.deps)
        };
      })(), H = w((M) => (q) => Wt(st)(bn)(q.tgt)(1)(M))(G)(D.deps), ot = ((M) => {
        let q = M, A = !0, R;
        for (; A; ) {
          const X = q, L = Ht((I) => v, (I) => (z) => T("Just", { head: I, tail: z }), X.queue);
          if (L.tag === "Nothing") {
            A = !1, R = X;
            continue;
          }
          if (L.tag === "Just") {
            q = w((() => {
              const I = Kt(L._1.head)(X.slots), z = (() => {
                if (I.tag === "Nothing")
                  return 0;
                if (I.tag === "Just")
                  return I._1;
                f();
              })();
              return (U) => (K) => {
                const O = Kt(K)(U.inDegree), Z = (() => {
                  if (O.tag === "Nothing")
                    return -1;
                  if (O.tag === "Just")
                    return O._1 - 1 | 0;
                  f();
                })();
                return {
                  ...U,
                  slots: tt(st)(K)(Ig((() => {
                    const et = Kt(K)(U.slots);
                    if (et.tag === "Nothing")
                      return 0;
                    if (et.tag === "Just")
                      return et._1;
                    f();
                  })())(z + 1 | 0))(U.slots),
                  inDegree: tt(st)(K)(Z)(U.inDegree),
                  queue: Z === 0 ? [...U.queue, K] : U.queue
                };
              };
            })())({ ...X, queue: L._1.tail })((() => {
              const I = Kt(L._1.head)(X.adj);
              if (I.tag === "Nothing")
                return [];
              if (I.tag === "Just")
                return I._1;
              f();
            })());
            continue;
          }
          f();
        }
        return R;
      })({
        slots: hi(B((M) => b(M.id, 0))(D.segments)),
        inDegree: H,
        adj: w((M) => (q) => Wt(st)(Nn)(q.src)([q.tgt])(M))(G)(D.deps),
        queue: B((M) => M.id)(ht(
          (M) => {
            const q = Kt(M.id)(H);
            if (q.tag === "Nothing")
              return !0;
            if (q.tag === "Just")
              return q._1 === 0;
            f();
          },
          D.segments
        ))
      });
      return It((M) => (q) => st.compare(M.slot)(q.slot))(B((M) => ({
        ...M,
        slot: (() => {
          const q = Kt(M.id)(ot.slots);
          if (q.tag === "Nothing")
            return 0;
          if (q.tag === "Just")
            return q._1;
          f();
        })()
      }))(D.segments));
    })(), C = 1 + w((D) => (H) => Ig(D)(H.slot))(0)(N) | 0, S = wt(N)((D) => D.members), P = ht((D) => Ne(Pr)(D.edge.id)(S), t), E = w(Ct)(-1e18)(B((D) => D.fromPos._2)(P)), Q = w(Nt)(1e18)(B((D) => D.toPos._2)(P));
    if (E > Q) {
      const D = hi(B((H) => b(H.id, H))(N));
      return Ee(B((H) => B((rt) => b(
        rt,
        {
          slot: H.slot,
          slotCount: C,
          gapTop: Q,
          gapBottom: E,
          partner: (() => {
            if (H.splitPartner.tag === "Just") {
              const ot = Kt(H.splitPartner._1)(D);
              if (ot.tag === "Just")
                return T("Just", { slot: ot._1.slot, splitX: 0 < ot._1.incoming.length ? ot._1.incoming[0] : 0 });
              if (ot.tag === "Nothing")
                return v;
              f();
            }
            if (H.splitPartner.tag === "Nothing")
              return v;
            f();
          })()
        }
      ))(H.members))(ht(
        (H) => {
          if (H.splitPartner.tag === "Just") {
            const rt = Kt(H.splitPartner._1)(D);
            return !(rt.tag === "Just" && (() => {
              if (rt._1.splitBy.tag === "Nothing")
                return !1;
              if (rt._1.splitBy.tag === "Just")
                return !0;
              f();
            })());
          }
          if (H.splitPartner.tag === "Nothing")
            return !0;
          f();
        },
        N
      )));
    }
    const W = hi(B((D) => b(D.id, D))(N));
    return Ee(B((D) => B((H) => b(
      H,
      {
        slot: D.slot,
        slotCount: C,
        gapTop: E,
        gapBottom: Q,
        partner: (() => {
          if (D.splitPartner.tag === "Just") {
            const rt = Kt(D.splitPartner._1)(W);
            if (rt.tag === "Just")
              return T("Just", { slot: rt._1.slot, splitX: 0 < rt._1.incoming.length ? rt._1.incoming[0] : 0 });
            if (rt.tag === "Nothing")
              return v;
            f();
          }
          if (D.splitPartner.tag === "Nothing")
            return v;
          f();
        })()
      }
    ))(D.members))(ht(
      (D) => {
        if (D.splitPartner.tag === "Just") {
          const H = Kt(D.splitPartner._1)(W);
          return !(H.tag === "Just" && (() => {
            if (H._1.splitBy.tag === "Nothing")
              return !1;
            if (H._1.splitBy.tag === "Just")
              return !0;
            f();
          })());
        }
        if (D.splitPartner.tag === "Nothing")
          return !0;
        f();
      },
      N
    )));
  })()))(G)(yw(w((s) => (u) => {
    const a = bi(u.edge.from.node)(e);
    if (a.tag === "Just") {
      const c = bi(u.edge.to.node)(e);
      return c.tag === "Just" && a._1.layer !== c._1.layer ? Wt(st)(Nn)(yi(a._1.layer)(c._1.layer))([u])(s) : s;
    }
    return s;
  })(G)((() => {
    const s = (u) => b(
      (() => {
        const a = bi(u.edge.from.node)(e);
        return a.tag === "Just" ? a._1.layer : 1e6;
      })(),
      (() => {
        const a = bi(u.edge.from.node)(e);
        return a.tag === "Just" ? a._1.order : 1e6;
      })()
    );
    return It((u) => (a) => $w(s(u))(s(a)))(t);
  })())));
}, Tw = (t) => (n) => {
  const e = ih(t)(n), r = w((o) => (i) => tt(F)(i.node)(i)(o))(G)(n);
  return w((o) => (i) => {
    const s = bi(i.edge.from.node)(r);
    if (s.tag === "Just") {
      const u = bi(i.edge.to.node)(r);
      if (u.tag === "Just" && s._1.layer !== u._1.layer) {
        const a = vw(i.edge.id)(e);
        if (a.tag === "Just")
          return tt(st)(yi(s._1.layer)(u._1.layer))(a._1.slotCount)(o);
      }
      return o;
    }
    return o;
  })(G)(t);
}, ia = /* @__PURE__ */ pn(F)(Yt), zr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ww = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
}, Dg = (t) => (n) => {
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
}, Qc = (t) => (n) => {
  const e = V(4);
  if (t === "South")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "North")
    return { lo: n.position._1 * e, hi: (n.position._1 + n.size._1) * e };
  if (t === "East")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  if (t === "West")
    return { lo: n.position._2 * e, hi: (n.position._2 + n.size._2) * e };
  f();
}, zg = (t) => (n) => w((e) => (r) => Wt(t)(Nn)(n(r))([r])(e))(G), Hg = (t) => (n) => (e) => (r) => {
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
}, sh = (t) => (n) => {
  const e = t.hi - t.lo, r = (t.lo + t.hi) / 2, o = n.length;
  return o === 0 ? G : ia(o === 1 ? B((i) => b(i, r))(n) : Xt((i) => (s) => b(s, t.lo + V(i + 1 | 0) * e / V(o + 1 | 0)))(n));
}, uh = (t) => (n) => (e) => (r) => (o) => {
  const i = zg(F)((g) => g.to.node)(t), s = zg(F)((g) => g.from.node)(t), u = w((g) => (p) => tt(F)(p.node)(p)(g))(G)(n), a = (g, p, m) => {
    const h = zr(g)(u);
    if (h.tag === "Nothing")
      return b(0, 0);
    if (h.tag === "Just") {
      const $ = zr(g)(e);
      if ($.tag === "Nothing") {
        const x = V(4);
        if (m === "South")
          return b(h._1.position._1 * x + h._1.size._1 * x / 2, (h._1.position._2 + h._1.size._2) * x);
        if (m === "North")
          return b(h._1.position._1 * x + h._1.size._1 * x / 2, h._1.position._2 * x);
        if (m === "East")
          return b((h._1.position._1 + h._1.size._1) * x, h._1.position._2 * x + h._1.size._2 * x / 2);
        if (m === "West")
          return b(h._1.position._1 * x, h._1.position._2 * x + h._1.size._2 * x / 2);
        f();
      }
      if ($.tag === "Just") {
        const x = en((y) => y.id === p)($._1);
        if (x.tag === "Nothing") {
          const y = V(4);
          if (m === "South")
            return b(h._1.position._1 * y + h._1.size._1 * y / 2, (h._1.position._2 + h._1.size._2) * y);
          if (m === "North")
            return b(h._1.position._1 * y + h._1.size._1 * y / 2, h._1.position._2 * y);
          if (m === "East")
            return b((h._1.position._1 + h._1.size._1) * y, h._1.position._2 * y + h._1.size._2 * y / 2);
          if (m === "West")
            return b(h._1.position._1 * y, h._1.position._2 * y + h._1.size._2 * y / 2);
          f();
        }
        if (x.tag === "Just") {
          const y = V(4);
          if (x._1.side === "North")
            return b(h._1.position._1 * y + V(x._1.offset) * y, h._1.position._2 * y);
          if (x._1.side === "South")
            return b(h._1.position._1 * y + V(x._1.offset) * y, (h._1.position._2 + h._1.size._2) * y);
          if (x._1.side === "East")
            return b((h._1.position._1 + h._1.size._1) * y, h._1.position._2 * y + V(x._1.offset) * y);
          if (x._1.side === "West")
            return b(h._1.position._1 * y, h._1.position._2 * y + V(x._1.offset) * y);
        }
      }
    }
    f();
  }, c = ia(wt(r)((g) => {
    if (g.nodes.length <= 2)
      return [];
    const p = V(4);
    if (1 < g.nodes.length) {
      const m = zr(g.nodes[1])(u);
      if (m.tag === "Nothing")
        return [];
      if (m.tag === "Just") {
        const h = m._1.position._1 * p + m._1.size._1 * p / 2;
        return B(($) => b($, h))(Ln(
          ($) => (x) => g.edgeId + ":" + $ + "->" + x,
          g.nodes,
          At(1, g.nodes.length, g.nodes)
        ));
      }
      f();
    }
    return [];
  })), l = (g) => {
    const p = zr(g.from.node)(u), m = zr(g.to.node)(u);
    if (p.tag === "Just" && m.tag === "Just") {
      const h = p._1, $ = m._1, x = It((y) => (J) => st.compare(y.score)(J.score))(B((y) => {
        const J = y._1, N = y._2;
        return {
          from: J,
          to: N,
          score: (() => {
            const C = (Q, W, D, H, rt) => {
              const ot = Qc(Q)(W), M = Qc(Q)(D);
              return ot.lo < M.hi && M.lo < ot.hi && (J === "South" ? N === "North" && rt._2 > H._2 : J === "North" ? N === "South" && rt._2 < H._2 : J === "East" ? N === "West" && rt._1 > H._1 : J === "West" && N === "East" && rt._1 < H._1) ? 0 : Hg(J)(N)(H)(rt);
            }, S = Dg(J)(h), P = Dg(N)($), E = Hg(J)(N)(S)(P);
            return (() => {
              if (E > 0) {
                if (J === "South")
                  return N === "North" ? C(Bn, h, $, S, P) * 10 | 0 : E * 10 | 0;
                if (J === "North")
                  return N === "South" ? C(In, h, $, S, P) * 10 | 0 : E * 10 | 0;
                if (J === "East")
                  return N === "West" ? C(Wr, h, $, S, P) * 10 | 0 : E * 10 | 0;
                if (J === "West" && N === "East")
                  return C(qr, h, $, S, P) * 10 | 0;
              }
              return E * 10 | 0;
            })() + (J === "South" ? N === "North" ? $.layer >= h.layer ? 0 : 20 : 15 : J === "North" ? N === "South" ? $.layer <= h.layer ? 0 : 20 : 15 : J === "East" ? N === "West" ? 5 : 15 : J === "West" && N === "East" ? 5 : 15) | 0;
          })()
        };
      })([
        b(Bn, In),
        b(Wr, In),
        b(qr, In),
        b(Bn, Wr),
        b(Bn, qr),
        b(In, Bn),
        b(In, Wr),
        b(In, qr),
        b(Wr, Bn),
        b(qr, Bn),
        b(Wr, qr),
        b(qr, Wr)
      ]));
      if (0 < x.length)
        return { from: x[0].from, to: x[0].to };
    }
    return { from: Bn, to: In };
  }, _ = ia(B((g) => b(g.id, l(g)))(t)), d = (g, p, m, h, $, x) => {
    const y = V(4), J = zr(p)(u);
    if (J.tag === "Nothing")
      return b(0, 0);
    if (J.tag === "Just") {
      const N = ww(b(m, g))(o);
      if (N.tag === "Just") {
        const C = J._1.position._1 * y + N._1, S = V(4);
        if (g === "South")
          return b(C, (J._1.position._2 + J._1.size._2) * S);
        if (g === "North")
          return b(C, J._1.position._2 * S);
        if (g === "East")
          return b((J._1.position._1 + J._1.size._1) * S, C);
        if (g === "West")
          return b(J._1.position._1 * S, C);
        f();
      }
      if (N.tag === "Nothing") {
        const C = Qc(g)(J._1), S = (C.lo + C.hi) / 2, P = Hc(m)(sh(C)(B((W) => W.id)(It((W) => (D) => it.compare($(g)(W))($(g)(D)))(ht(
          (W) => {
            const D = Hc(W.id)(_);
            if (D.tag === "Just") {
              const H = x(D._1);
              return H === "North" ? g === "North" : H === "South" ? g === "South" : H === "East" ? g === "East" : H === "West" && g === "West";
            }
            if (D.tag === "Nothing")
              return !0;
            f();
          },
          (() => {
            const W = zr(p)(h);
            if (W.tag === "Nothing")
              return [];
            if (W.tag === "Just")
              return W._1;
            f();
          })()
        ))))), E = (() => {
          if (P.tag === "Nothing")
            return S;
          if (P.tag === "Just")
            return P._1;
          f();
        })(), Q = V(4);
        if (g === "South")
          return b(E, (J._1.position._2 + J._1.size._2) * Q);
        if (g === "North")
          return b(E, J._1.position._2 * Q);
        if (g === "East")
          return b((J._1.position._1 + J._1.size._1) * Q, E);
        if (g === "West")
          return b(J._1.position._1 * Q, E);
      }
    }
    f();
  };
  return B((g) => {
    const p = Hc(g.edge.id)(c);
    if (p.tag === "Nothing")
      return g;
    if (p.tag === "Just")
      return {
        ...g,
        fromPos: On(3)(g.edge.from.node) === "$d:" ? b(p._1, g.fromPos._2) : g.fromPos,
        toPos: On(3)(g.edge.to.node) === "$d:" ? b(p._1, g.toPos._2) : g.toPos
      };
    f();
  })(B((g) => {
    if (g.from.port.tag === "Just" && g.to.port.tag === "Just")
      return {
        edge: g,
        fromPos: a(g.from.node, g.from.port._1, Bn),
        toPos: a(g.to.node, g.to.port._1, In),
        fromSide: Bn,
        toSide: In
      };
    const p = l(g);
    return {
      edge: g,
      fromPos: d(
        p.from,
        g.from.node,
        g.id,
        s,
        (m) => (h) => {
          const $ = zr(h.to.node)(u);
          if ($.tag === "Nothing")
            return 0;
          if ($.tag === "Just") {
            const x = V(4);
            if (m === "South" || m === "North")
              return $._1.position._1 * x + $._1.size._1 * x / 2;
            if (m === "East" || m === "West")
              return $._1.position._2 * x + $._1.size._2 * x / 2;
          }
          f();
        },
        (m) => m.from
      ),
      toPos: d(
        p.to,
        g.to.node,
        g.id,
        i,
        (m) => (h) => {
          const $ = zr(h.from.node)(u);
          if ($.tag === "Nothing")
            return 0;
          if ($.tag === "Just") {
            const x = V(4);
            if (m === "South" || m === "North")
              return $._1.position._1 * x + $._1.size._1 * x / 2;
            if (m === "East" || m === "West")
              return $._1.position._2 * x + $._1.size._2 * x / 2;
          }
          f();
        },
        (m) => m.to
      ),
      fromSide: p.from,
      toSide: p.to
    };
  })(t));
}, sa = /* @__PURE__ */ (() => {
  const t = {
    eq: (n) => (e) => n._1 === e._1 && (n._2 === "North" ? e._2 === "North" : n._2 === "South" ? e._2 === "South" : n._2 === "East" ? e._2 === "East" : n._2 === "West" && e._2 === "West")
  };
  return {
    compare: (n) => (e) => {
      const r = F.compare(n._1)(e._1);
      if (r === "LT")
        return Wn;
      if (r === "GT")
        return qn;
      if (n._2 === "North")
        return e._2 === "North" ? ce : Wn;
      if (e._2 === "North")
        return qn;
      if (n._2 === "South")
        return e._2 === "South" ? ce : Wn;
      if (e._2 === "South")
        return qn;
      if (n._2 === "East")
        return e._2 === "East" ? ce : Wn;
      if (e._2 === "East")
        return qn;
      if (n._2 === "West" && e._2 === "West")
        return ce;
      f();
    },
    Eq0: () => t
  };
})(), Nw = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = sa.compare(t)(s._3);
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
}, Jw = /* @__PURE__ */ pn(F)(Yt), Oc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Cw = /* @__PURE__ */ pn(sa)(Yt), Qg = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ke);
  return (n) => t(ge("IterNode", n, Ue));
})(), Pi = (t) => (n) => (e) => (r) => {
  const o = Nw(b(n, e))(t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just")
    return o._1;
  f();
}, ah = (t) => (n) => (e) => {
  const r = Jw(Ee(B((s) => Xt((u) => (a) => b(a, u))(s))(t))), o = (s, u) => {
    if (s === "South") {
      const a = Oc(u.to.node)(r);
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      f();
    }
    if (s === "North") {
      const a = Oc(u.from.node)(r);
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      f();
    }
    return 0;
  }, i = (s) => w((u) => (a) => Yn(
    sa.compare,
    Xn,
    Cw(B((c) => b(b(c._1, s), c._2))(Qg(sh({
      lo: 0,
      hi: (() => {
        const c = Oc(a._1)(e);
        if (c.tag === "Just")
          return c._1._1;
        if (c.tag === "Nothing")
          return On(3)(a._1) === "$d:" ? 0 : 1;
        f();
      })()
    })(B((c) => c.id)(It((c) => (l) => st.compare(o(s, c))(o(s, l)))(a._2)))))),
    u
  ))(G)(Qg(w((u) => (a) => a.from.node === a.to.node ? u : s === "South" ? Wt(F)(Nn)(a.from.node)([a])(u) : s === "North" ? Wt(F)(Nn)(a.to.node)([a])(u) : u)(G)(n)));
  return Yn(sa.compare, Xn, i(In), i(Bn));
}, ch = (t) => t, fh = (t) => t, lh = (t) => t, bw = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(G), kw = /* @__PURE__ */ (() => {
  const t = he.unfoldr((n) => {
    if (n.tag === "Nil")
      return v;
    if (n.tag === "Cons")
      return T("Just", b(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, kt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Y);
  })());
})(), pt = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Qe = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ar = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Nr = /* @__PURE__ */ pn(F)(Yt), Wc = /* @__PURE__ */ j1(F), Sf = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ke);
  return (n) => t(ge("IterNode", n, Ue));
})(), Sw = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Lw = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
}, Og = /* @__PURE__ */ lh("VDown"), Wg = /* @__PURE__ */ lh("VUp"), Ew = /* @__PURE__ */ fh("ForwardPhase"), Pw = /* @__PURE__ */ fh("StackPhase"), qg = /* @__PURE__ */ ch("HRight"), Xg = /* @__PURE__ */ ch("HLeft"), Yg = (t) => (e) => {
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
}, Aw = (t) => (n) => (e) => {
  const r = w((u) => (a) => Wt(F)(bn)(a.tgt)(1)(u))(G)(t), o = kw(bw([
    ...B((u) => u.src)(t),
    ...B((u) => u.tgt)(t),
    ...(() => {
      const u = (a, c) => {
        if (a.tag === "Leaf")
          return c;
        if (a.tag === "Node")
          return u(a._5, kt("Cons", a._4, u(a._6, c)));
        f();
      };
      return jt(Jn.foldr, u(n, Y));
    })()
  ])), i = w((u) => (a) => Wt(F)(Nn)(a.src)([{ target: a.tgt, sep: a.sep }])(u))(G)(t);
  return ((u) => (a) => (c) => {
    let l = u, _ = a, d = c, g = !0, p;
    for (; g; ) {
      const m = l, h = _, $ = d, x = Ht((y) => v, (y) => (J) => T("Just", { head: y, tail: J }), m);
      if (x.tag === "Nothing") {
        g = !1, p = $;
        continue;
      }
      if (x.tag === "Just") {
        const y = pt(x._1.head)($), J = (() => {
          if (y.tag === "Nothing")
            return 0;
          if (y.tag === "Just")
            return y._1;
          f();
        })(), N = w((C) => (S) => {
          const P = pt(S.target)(C.result), E = J + S.sep, Q = pt(S.target)(C.indeg), W = (() => {
            if (Q.tag === "Nothing")
              return -1;
            if (Q.tag === "Just")
              return Q._1 - 1 | 0;
            f();
          })();
          return {
            newQueue: W === 0 ? [...C.newQueue, S.target] : C.newQueue,
            result: tt(F)(S.target)((() => {
              if (P.tag === "Nothing")
                return E;
              if (P.tag === "Just") {
                if (e === "VDown")
                  return Qe(P._1)(E);
                if (e === "VUp")
                  return Ar(P._1)(E);
              }
              f();
            })())(C.result),
            indeg: tt(F)(S.target)(W)(C.indeg)
          };
        })({ newQueue: [], result: $, indeg: h })((() => {
          const C = pt(x._1.head)(i);
          if (C.tag === "Nothing")
            return [];
          if (C.tag === "Just")
            return C._1;
          f();
        })());
        l = [...x._1.tail, ...N.newQueue], _ = N.indeg, d = N.result;
        continue;
      }
      f();
    }
    return p;
  })(ht(
    (u) => {
      const a = pt(u)(r);
      if (a.tag === "Nothing")
        return !0;
      if (a.tag === "Just")
        return a._1 === 0;
      f();
    },
    o
  ))(r)(w((u) => (a) => tt(F)(a)(0)(u))(G)(o));
}, Rw = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, kt("Cons", i._4, n(i._6, s)));
    f();
  }, e = jt(Jn.foldr, n(t, Y)), r = w(Qe)(999999)(e);
  if (r === 0 || e.length === 0)
    return t;
  const o = (i) => {
    if (i.tag === "Leaf")
      return G;
    if (i.tag === "Node")
      return Zt("Node", i._1, i._2, i._3, i._4 - r, o(i._5), o(i._6));
    f();
  };
  return o(t);
}, gh = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, kt("Cons", i._4, n(i._6, s)));
    f();
  }, e = n(t, Y), r = (i) => (s) => {
    let u = i, a = s, c = !0, l;
    for (; c; ) {
      const _ = u, d = a;
      if (d.tag === "Nil") {
        c = !1, l = _;
        continue;
      }
      if (d.tag === "Cons") {
        u = Ar(_)(d._1), a = d._2;
        continue;
      }
      f();
    }
    return l;
  }, o = (i) => (s) => {
    let u = i, a = s, c = !0, l;
    for (; c; ) {
      const _ = u, d = a;
      if (d.tag === "Nil") {
        c = !1, l = _;
        continue;
      }
      if (d.tag === "Cons") {
        u = Qe(_)(d._1), a = d._2;
        continue;
      }
      f();
    }
    return l;
  };
  return r(-999999)(e) - o(999999)(e);
}, xs = (t) => (n) => ((r) => (o) => {
  let i = r, s = o, u = !0, a;
  for (; u; ) {
    const c = i, l = s;
    if (c === n) {
      u = !1, a = l;
      continue;
    }
    i = (() => {
      const _ = pt(c)(t.align);
      if (_.tag === "Nothing")
        return n;
      if (_.tag === "Just")
        return _._1;
      f();
    })(), s = [...l, c];
  }
  return a;
})((() => {
  const r = pt(n)(t.align);
  if (r.tag === "Nothing")
    return n;
  if (r.tag === "Just")
    return r._1;
  f();
})())([n]), Fw = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => (l) => {
  const _ = (A, R, X) => {
    const L = A.from.node === R ? A.from.port : A.to.node === R ? A.to.port : v;
    if (L.tag === "Just") {
      const I = pt(R)(o);
      if (I.tag === "Just") {
        const z = en((U) => U.id === L._1)(I._1);
        if (z.tag === "Just") {
          const U = V(z._1.offset) * V(4);
          return X === "North" || X === "South" ? U : 0;
        }
        if (z.tag === "Nothing") {
          const U = pt(R)(r), K = Pi(s)(A.id)(X)((() => {
            if (U.tag === "Nothing")
              return 0.5;
            if (U.tag === "Just")
              return U._1._1 / 2;
            f();
          })());
          return X === "North" || X === "South" ? K : 0;
        }
        f();
      }
      if (I.tag === "Nothing") {
        const z = pt(R)(r), U = Pi(s)(A.id)(X)((() => {
          if (z.tag === "Nothing")
            return 0.5;
          if (z.tag === "Just")
            return z._1._1 / 2;
          f();
        })());
        return X === "North" || X === "South" ? U : 0;
      }
      f();
    }
    if (L.tag === "Nothing") {
      const I = pt(R)(r), z = Pi(s)(A.id)(X)((() => {
        if (I.tag === "Nothing")
          return 0.5;
        if (I.tag === "Just")
          return I._1._1 / 2;
        f();
      })());
      return X === "North" || X === "South" ? z : 0;
    }
    f();
  }, d = (A, R) => {
    if (A.from.node === R) {
      if (l === "HRight")
        return Bn;
      if (l === "HLeft")
        return In;
      f();
    }
    if (l === "HRight")
      return In;
    if (l === "HLeft")
      return Bn;
    f();
  }, g = (A, R, X) => w((L) => (I) => tt(F)(I)((() => {
    const z = pt(I)(L);
    if (z.tag === "Nothing")
      return 0 + R;
    if (z.tag === "Just")
      return z._1 + R;
    f();
  })())(L))(X)(xs(a)(A)), p = (() => {
    if (l === "HRight")
      return e;
    if (l === "HLeft")
      return fn(e);
    f();
  })(), m = (A) => {
    const R = pt(A)(r);
    if (R.tag === "Nothing")
      return 1;
    if (R.tag === "Just")
      return R._1._1;
    f();
  }, h = Nr(Ee(Xt((A) => (R) => B((X) => b(X, A))(R))(e))), $ = (A, R) => On(3)(A) === "$d:" && On(3)(R) === "$d:" || On(3)(A) === "$d:" || On(3)(R) === "$d:" ? 10 : V(t.nodeGap), x = w((A) => (R) => Wc((X) => T(
    "Just",
    [
      ...(() => {
        if (X.tag === "Nothing")
          return [];
        if (X.tag === "Just")
          return X._1;
        f();
      })(),
      R
    ]
  ))(R.to.node)(A))(G)(i), y = w((A) => (R) => Wc((X) => T(
    "Just",
    [
      ...(() => {
        if (X.tag === "Nothing")
          return [];
        if (X.tag === "Just")
          return X._1;
        f();
      })(),
      R
    ]
  ))(R.from.node)(A))(G)(i), J = Ee(e), N = w((A) => (R) => {
    const X = pt(R)(a.root), L = (() => {
      if (X.tag === "Nothing")
        return R;
      if (X.tag === "Just")
        return X._1;
      f();
    })();
    return R === L ? A : Wc((I) => T(
      "Just",
      (() => {
        if (I.tag === "Nothing")
          return !0;
        if (I.tag === "Just")
          return I._1;
        f();
      })() && On(3)(R) === "$d:"
    ))(L)(A);
  })(Nr(B((A) => b(A, !0))(Bi(F.compare)((() => {
    const A = (R, X) => {
      if (R.tag === "Leaf")
        return X;
      if (R.tag === "Node")
        return A(R._5, kt("Cons", R._4, A(R._6, X)));
      f();
    };
    return jt(Jn.foldr, A(a.root, Y));
  })()))))(J), C = (A, R) => {
    const X = A.free, L = pt(X)(a.root), I = (() => {
      if (L.tag === "Nothing")
        return X;
      if (L.tag === "Just")
        return L._1;
      f();
    })(), z = pt(I)(N), U = (() => {
      if (z.tag === "Nothing")
        return !0;
      if (z.tag === "Just")
        return z._1;
      f();
    })();
    return w((K) => (O) => {
      if (K.edge.tag === "Just")
        return K;
      if (K.edge.tag === "Nothing") {
        if ((() => {
          const ct = pt(I)(R.su);
          return !U && (() => {
            const $t = pt(O.from.node)(h);
            return O.from.node !== O.to.node && (() => {
              const Pt = pt(O.to.node)(h);
              return (() => {
                if ($t.tag === "Nothing")
                  return -1;
                if ($t.tag === "Just")
                  return $t._1;
                f();
              })() === (() => {
                if (Pt.tag === "Nothing")
                  return -1;
                if (Pt.tag === "Just")
                  return Pt._1;
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
          return K;
        const Z = O.from.node === X ? O.to.node : O.from.node, et = pt(Z)(a.root), nt = (() => {
          if (et.tag === "Nothing")
            return Z;
          if (et.tag === "Just")
            return et._1;
          f();
        })(), gt = nt !== I;
        return gt && (() => {
          const ct = pt(nt)(R.blockFinished);
          if (ct.tag === "Nothing")
            return !1;
          if (ct.tag === "Just")
            return ct._1;
          f();
        })() ? { ...K, edge: T("Just", O), hasEdges: !0 } : { ...K, hasEdges: K.hasEdges || gt };
      }
      f();
    })({ edge: v, hasEdges: !1 })((() => {
      if (A.isRoot) {
        if (l === "HRight") {
          const K = pt(X)(x);
          if (K.tag === "Nothing")
            return [];
          if (K.tag === "Just")
            return K._1;
          f();
        }
        if (l === "HLeft") {
          const K = pt(X)(y);
          if (K.tag === "Nothing")
            return [];
          if (K.tag === "Just")
            return K._1;
        }
        f();
      }
      if (l === "HRight") {
        const K = pt(X)(y);
        if (K.tag === "Nothing")
          return [];
        if (K.tag === "Just")
          return K._1;
        f();
      }
      if (l === "HLeft") {
        const K = pt(X)(x);
        if (K.tag === "Nothing")
          return [];
        if (K.tag === "Just")
          return K._1;
      }
      f();
    })());
  }, S = (A, R, X, L) => {
    const I = (() => {
      if (c === "VDown")
        return -1e18;
      if (c === "VUp")
        return 1e18;
      f();
    })(), z = { free: R, isRoot: X }, U = C(z, L);
    if (U.edge.tag === "Nothing")
      return U.hasEdges ? { thresh: I, state: { ...L, queue: [...L.queue, z] } } : { thresh: I, state: L };
    if (U.edge.tag === "Just") {
      const K = U.edge._1.from.node === R ? U.edge._1.to.node : U.edge._1.from.node;
      return {
        thresh: (() => {
          const O = pt((() => {
            const gt = pt(K)(a.root);
            if (gt.tag === "Nothing")
              return K;
            if (gt.tag === "Just")
              return gt._1;
            f();
          })())(L.x), Z = pt(K)(u), et = pt(R)(u), nt = (() => {
            if (O.tag === "Just")
              return O._1;
            if (O.tag === "Nothing")
              return v;
            f();
          })();
          return (() => {
            if (nt.tag === "Nothing")
              return 0;
            if (nt.tag === "Just")
              return nt._1;
            f();
          })() + (() => {
            if (Z.tag === "Nothing")
              return 0;
            if (Z.tag === "Just")
              return Z._1;
            f();
          })() + _(
            U.edge._1,
            K,
            (() => {
              if (X) {
                if (l === "HRight")
                  return Bn;
                if (l === "HLeft")
                  return In;
                f();
              }
              if (l === "HRight")
                return In;
              if (l === "HLeft")
                return Bn;
              f();
            })()
          ) - (() => {
            if (et.tag === "Nothing")
              return 0;
            if (et.tag === "Just")
              return et._1;
            f();
          })() - _(
            U.edge._1,
            R,
            (() => {
              if (X) {
                if (l === "HRight")
                  return In;
                if (l === "HLeft")
                  return Bn;
                f();
              }
              if (l === "HRight")
                return Bn;
              if (l === "HLeft")
                return In;
              f();
            })()
          );
        })(),
        state: {
          ...L,
          su: tt(F)((() => {
            const O = pt(U.edge._1.from.node)(a.root);
            if (O.tag === "Nothing")
              return U.edge._1.from.node;
            if (O.tag === "Just")
              return O._1;
            f();
          })())(!0)(tt(F)((() => {
            const O = pt(U.edge._1.to.node)(a.root);
            if (O.tag === "Nothing")
              return U.edge._1.to.node;
            if (O.tag === "Just")
              return O._1;
            f();
          })())(!0)(L.su))
        }
      };
    }
    f();
  }, P = (A, R, X, L) => {
    const I = R === A, z = pt(R)(a.align), U = (() => {
      if (z.tag === "Nothing")
        return R === A;
      if (z.tag === "Just")
        return z._1 === A;
      f();
    })();
    if (!(I || U))
      return { thresh: X, state: L };
    const K = (() => {
      if (c === "VDown")
        return I && X <= -1e18;
      if (c === "VUp")
        return I && X >= 1e18;
      f();
    })() ? S(A, R, !0, L) : { thresh: X, state: L };
    return (() => {
      if (c === "VDown")
        return K.thresh <= -1e18 && U;
      if (c === "VUp")
        return K.thresh >= 1e18 && U;
      f();
    })() ? S(A, R, !1, K.state) : K;
  }, E = (A) => (R) => (X) => {
    const L = pt(X)(n.nodeIndex), I = (() => {
      if (L.tag === "Nothing")
        return 0;
      if (L.tag === "Just")
        return L._1;
      f();
    })(), z = en((et) => Ne(Pr)(X)(et))(p), U = (() => {
      if (z.tag === "Nothing")
        return [];
      if (z.tag === "Just")
        return z._1;
      f();
    })(), K = U.length;
    if ((() => {
      if (c === "VDown")
        return I <= 0;
      if (c === "VUp")
        return I >= (K - 1 | 0);
      f();
    })()) {
      const et = P(A, X, R.thresh, R.st);
      return { ...R, st: et.state, thresh: et.thresh };
    }
    const O = (() => {
      if (c === "VDown")
        return I - 1 | 0;
      if (c === "VUp")
        return I + 1 | 0;
      f();
    })(), Z = O >= 0 && O < U.length ? T("Just", U[O]) : v;
    if (Z.tag === "Nothing")
      return R;
    if (Z.tag === "Just") {
      const et = pt(Z._1)(a.root), nt = (() => {
        if (et.tag === "Nothing")
          return Z._1;
        if (et.tag === "Just")
          return et._1;
        f();
      })(), gt = P(A, X, R.thresh, Q(nt)(R.st)), ct = (() => {
        const zt = pt(A)(gt.state.sink);
        if (zt.tag === "Nothing")
          return A === A;
        if (zt.tag === "Just")
          return zt._1 === A;
        f();
      })() ? {
        ...gt.state,
        sink: tt(F)(A)((() => {
          const zt = pt(nt)(gt.state.sink);
          if (zt.tag === "Nothing")
            return nt;
          if (zt.tag === "Just")
            return zt._1;
          f();
        })())(gt.state.sink)
      } : gt.state, $t = pt(nt)(ct.sink), Pt = (() => {
        if ($t.tag === "Nothing")
          return nt;
        if ($t.tag === "Just")
          return $t._1;
        f();
      })(), Rt = pt(A)(ct.sink), rn = (() => {
        if (Rt.tag === "Nothing")
          return A;
        if (Rt.tag === "Just")
          return Rt._1;
        f();
      })();
      if (rn === Pt) {
        const zt = pt(nt)(ct.x), tn = (() => {
          if (zt.tag === "Just")
            return zt._1;
          if (zt.tag === "Nothing")
            return v;
          f();
        })(), pe = (() => {
          if (tn.tag === "Nothing")
            return 0;
          if (tn.tag === "Just")
            return tn._1;
          f();
        })(), Mn = pt(A)(ct.x), jn = (() => {
          if (Mn.tag === "Just")
            return Mn._1;
          if (Mn.tag === "Nothing")
            return v;
          f();
        })(), Qt = (() => {
          if (jn.tag === "Nothing")
            return 0;
          if (jn.tag === "Just")
            return jn._1;
          f();
        })(), Ot = $(X, Z._1), me = pt(Z._1)(u), ee = pt(X)(u), Un = (() => {
          if (me.tag === "Nothing")
            return 0;
          if (me.tag === "Just")
            return me._1;
          f();
        })() - (() => {
          if (ee.tag === "Nothing")
            return 0;
          if (ee.tag === "Just")
            return ee._1;
          f();
        })();
        if (c === "VDown") {
          const Qn = Ar(pe + Un + m(Z._1) + Ot)(gt.thresh);
          return {
            st: { ...ct, x: tt(F)(A)(T("Just", R.initial ? Qn : Ar(Qt)(Qn)))(ct.x) },
            initial: !1,
            thresh: gt.thresh
          };
        }
        if (c === "VUp") {
          const Qn = Qe(pe + Un - Ot - m(X))(gt.thresh);
          return {
            st: { ...ct, x: tt(F)(A)(T("Just", R.initial ? Qn : Qe(Qt)(Qn)))(ct.x) },
            initial: !1,
            thresh: gt.thresh
          };
        }
        f();
      }
      const xt = pt(nt)(ct.x), Gt = (() => {
        if (xt.tag === "Just")
          return xt._1;
        if (xt.tag === "Nothing")
          return v;
        f();
      })(), vt = (() => {
        if (Gt.tag === "Nothing")
          return 0;
        if (Gt.tag === "Just")
          return Gt._1;
        f();
      })(), Jt = pt(A)(ct.x), _t = (() => {
        if (Jt.tag === "Just")
          return Jt._1;
        if (Jt.tag === "Nothing")
          return v;
        f();
      })(), yt = (() => {
        if (_t.tag === "Nothing")
          return 0;
        if (_t.tag === "Just")
          return _t._1;
        f();
      })(), ft = V(t.nodeGap), mt = pt(X)(u), Ft = pt(Z._1)(u), Lt = (() => {
        if (mt.tag === "Nothing")
          return 0;
        if (mt.tag === "Just")
          return mt._1;
        f();
      })() - (() => {
        if (Ft.tag === "Nothing")
          return 0;
        if (Ft.tag === "Just")
          return Ft._1;
        f();
      })();
      return {
        st: {
          ...ct,
          classEdges: [
            ...ct.classEdges,
            {
              src: rn,
              tgt: Pt,
              sep: (() => {
                if (c === "VDown")
                  return yt + Lt - vt - m(Z._1) - ft;
                if (c === "VUp")
                  return yt + Lt + m(X) + ft - vt;
                f();
              })()
            }
          ]
        },
        initial: R.initial,
        thresh: gt.thresh
      };
    }
    f();
  }, Q = (A) => (R) => {
    const X = pt(A)(R.x), L = (() => {
      if (X.tag === "Just")
        return X._1;
      if (X.tag === "Nothing")
        return v;
      f();
    })();
    if (L.tag === "Just")
      return R;
    if (L.tag === "Nothing") {
      const I = w(E(A))({
        st: { ...R, x: tt(F)(A)(T("Just", 0))(R.x) },
        initial: !0,
        thresh: (() => {
          if (c === "VDown")
            return -1e18;
          if (c === "VUp")
            return 1e18;
          f();
        })()
      })(xs(a)(A));
      return { ...I.st, blockFinished: tt(F)(A)(!0)(I.st.blockFinished) };
    }
    f();
  }, W = w((A) => (R) => w((X) => (L) => {
    const I = pt(L)(a.root), z = (() => {
      if (I.tag === "Nothing")
        return L;
      if (I.tag === "Just")
        return I._1;
      f();
    })();
    return z === L ? Q(z)(X) : X;
  })(A)((() => {
    if (c === "VDown")
      return R;
    if (c === "VUp")
      return fn(R);
    f();
  })()))({
    x: Nr(B((A) => b(A, v))(J)),
    sink: Nr(B((A) => b(A, A))(J)),
    classEdges: [],
    su: G,
    blockFinished: G,
    queue: []
  })(p), D = Aw(W.classEdges)(W.sink)(c), H = (A, R, X, L) => {
    const I = pt(R)(L), z = pt(R)(u);
    return (() => {
      if (I.tag === "Nothing")
        return 0;
      if (I.tag === "Just")
        return I._1;
      f();
    })() + (() => {
      if (z.tag === "Nothing")
        return 0;
      if (z.tag === "Just")
        return z._1;
      f();
    })() + _(A, R, X);
  }, rt = Nr(B((A) => b(A, !0))(Bi(F.compare)((() => {
    const A = (R, X) => {
      if (R.tag === "Leaf")
        return X;
      if (R.tag === "Node")
        return A(R._5, kt("Cons", R._4, A(R._6, X)));
      f();
    };
    return jt(Jn.foldr, A(a.root, Y));
  })()))), ot = (A) => (R) => (X) => {
    const L = C(X, { su: R.su, blockFinished: rt }), I = {
      phase: A,
      ppFree: X.free,
      ppIsRoot: X.isRoot,
      edgeId: v,
      delta: 0,
      avail: 0,
      shift: 0,
      freeSu: (() => {
        const z = pt((() => {
          const U = pt(X.free)(a.root);
          if (U.tag === "Nothing")
            return X.free;
          if (U.tag === "Just")
            return U._1;
          f();
        })())(R.su);
        if (z.tag === "Nothing")
          return !1;
        if (z.tag === "Just")
          return z._1;
        f();
      })(),
      hasEdges: L.hasEdges,
      candCount: (() => {
        if (X.isRoot) {
          if (l === "HRight") {
            const z = pt(X.free)(x);
            if (z.tag === "Nothing")
              return 0;
            if (z.tag === "Just")
              return z._1.length;
            f();
          }
          if (l === "HLeft") {
            const z = pt(X.free)(y);
            if (z.tag === "Nothing")
              return 0;
            if (z.tag === "Just")
              return z._1.length;
          }
          f();
        }
        if (l === "HRight") {
          const z = pt(X.free)(y);
          if (z.tag === "Nothing")
            return 0;
          if (z.tag === "Just")
            return z._1.length;
          f();
        }
        if (l === "HLeft") {
          const z = pt(X.free)(x);
          if (z.tag === "Nothing")
            return 0;
          if (z.tag === "Just")
            return z._1.length;
        }
        f();
      })()
    };
    if (L.edge.tag === "Nothing")
      return { ...R, stack: [...R.stack, X], trace: [...R.trace, I], x: R.x };
    if (L.edge.tag === "Just") {
      const z = L.edge._1.from.node === X.free ? b(L.edge._1.from.node, L.edge._1.to.node) : b(L.edge._1.to.node, L.edge._1.from.node), U = H(L.edge._1, z._1, d(L.edge._1, z._1), R.x) - H(L.edge._1, z._2, d(L.edge._1, z._2), R.x), K = pt(z._1)(a.root), O = (() => {
        if (K.tag === "Nothing")
          return z._1;
        if (K.tag === "Just")
          return K._1;
        f();
      })(), Z = { ...I, edgeId: T("Just", L.edge._1.id), delta: U };
      if (U > 0 && U < 1e300) {
        const et = w((ct) => ($t) => {
          const Pt = pt($t)(h), Rt = (() => {
            if (Pt.tag === "Nothing")
              return -1;
            if (Pt.tag === "Just")
              return Pt._1;
            f();
          })();
          if (Rt >= 0 && Rt < e.length) {
            const Gt = e[Rt], vt = pt($t)(n.nodeIndex), Jt = (() => {
              if (vt.tag === "Nothing")
                return -2;
              if (vt.tag === "Just")
                return vt._1 - 1 | 0;
              f();
            })();
            return Jt >= 0 && Jt < Gt.length ? Qe(ct)((() => {
              const _t = pt($t)(R.x), yt = pt($t)(u), ft = pt(Gt[Jt])(R.x), mt = pt(Gt[Jt])(u);
              return (() => {
                if (_t.tag === "Nothing")
                  return 0;
                if (_t.tag === "Just")
                  return _t._1;
                f();
              })() + (() => {
                if (yt.tag === "Nothing")
                  return 0;
                if (yt.tag === "Just")
                  return yt._1;
                f();
              })() - ((() => {
                if (ft.tag === "Nothing")
                  return 0;
                if (ft.tag === "Just")
                  return ft._1;
                f();
              })() + (() => {
                if (mt.tag === "Nothing")
                  return 0;
                if (mt.tag === "Just")
                  return mt._1;
                f();
              })() + m(Gt[Jt]) + $($t, Gt[Jt]));
            })()) : ct;
          }
          const rn = pt($t)(n.nodeIndex), xt = (() => {
            if (rn.tag === "Nothing")
              return -2;
            if (rn.tag === "Just")
              return rn._1 - 1 | 0;
            f();
          })();
          return xt >= 0 && xt < 0 ? Qe(ct)((() => {
            const Gt = pt($t)(R.x), vt = pt($t)(u), Jt = pt([][xt])(R.x), _t = pt([][xt])(u);
            return (() => {
              if (Gt.tag === "Nothing")
                return 0;
              if (Gt.tag === "Just")
                return Gt._1;
              f();
            })() + (() => {
              if (vt.tag === "Nothing")
                return 0;
              if (vt.tag === "Just")
                return vt._1;
              f();
            })() - ((() => {
              if (Jt.tag === "Nothing")
                return 0;
              if (Jt.tag === "Just")
                return Jt._1;
              f();
            })() + (() => {
              if (_t.tag === "Nothing")
                return 0;
              if (_t.tag === "Just")
                return _t._1;
              f();
            })() + m([][xt]) + $($t, [][xt]));
          })()) : ct;
        })(U)(xs(a)(O)), nt = et > 0 ? -et : 0, gt = { ...R, x: et > 0 ? g(O, nt, R.x) : R.x, trace: [...R.trace, { ...Z, avail: et, shift: nt }] };
        return et > 0 ? gt : { ...gt, stack: [...gt.stack, X] };
      }
      if (U < 0 && -U < 1e300) {
        const et = w((ct) => ($t) => {
          const Pt = pt($t)(h), Rt = (() => {
            if (Pt.tag === "Nothing")
              return -1;
            if (Pt.tag === "Just")
              return Pt._1;
            f();
          })();
          if (Rt >= 0 && Rt < e.length) {
            const Gt = e[Rt], vt = pt($t)(n.nodeIndex), Jt = (() => {
              if (vt.tag === "Nothing")
                return 0;
              if (vt.tag === "Just")
                return vt._1 + 1 | 0;
              f();
            })();
            return Jt >= 0 && Jt < Gt.length ? Qe(ct)((() => {
              const _t = pt(Gt[Jt])(R.x), yt = pt(Gt[Jt])(u), ft = pt($t)(R.x), mt = pt($t)(u);
              return (() => {
                if (_t.tag === "Nothing")
                  return 0;
                if (_t.tag === "Just")
                  return _t._1;
                f();
              })() + (() => {
                if (yt.tag === "Nothing")
                  return 0;
                if (yt.tag === "Just")
                  return yt._1;
                f();
              })() - ((() => {
                if (ft.tag === "Nothing")
                  return 0;
                if (ft.tag === "Just")
                  return ft._1;
                f();
              })() + (() => {
                if (mt.tag === "Nothing")
                  return 0;
                if (mt.tag === "Just")
                  return mt._1;
                f();
              })() + m($t) + $($t, Gt[Jt]));
            })()) : ct;
          }
          const rn = pt($t)(n.nodeIndex), xt = (() => {
            if (rn.tag === "Nothing")
              return 0;
            if (rn.tag === "Just")
              return rn._1 + 1 | 0;
            f();
          })();
          return xt >= 0 && xt < 0 ? Qe(ct)((() => {
            const Gt = pt([][xt])(R.x), vt = pt([][xt])(u), Jt = pt($t)(R.x), _t = pt($t)(u);
            return (() => {
              if (Gt.tag === "Nothing")
                return 0;
              if (Gt.tag === "Just")
                return Gt._1;
              f();
            })() + (() => {
              if (vt.tag === "Nothing")
                return 0;
              if (vt.tag === "Just")
                return vt._1;
              f();
            })() - ((() => {
              if (Jt.tag === "Nothing")
                return 0;
              if (Jt.tag === "Just")
                return Jt._1;
              f();
            })() + (() => {
              if (_t.tag === "Nothing")
                return 0;
              if (_t.tag === "Just")
                return _t._1;
              f();
            })() + m($t) + $($t, [][xt]));
          })()) : ct;
        })(-U)(xs(a)(O)), nt = et > 0 ? et : 0, gt = { ...R, x: et > 0 ? g(O, nt, R.x) : R.x, trace: [...R.trace, { ...Z, avail: et, shift: nt }] };
        return et > 0 ? gt : { ...gt, stack: [...gt.stack, X] };
      }
      return { ...R, stack: [...R.stack, X], trace: [...R.trace, Z], x: R.x };
    }
    f();
  }, M = w(ot(Ew))({
    x: Nr(B((A) => b(
      A,
      (() => {
        const R = pt(A)(a.root), X = (() => {
          if (R.tag === "Nothing")
            return A;
          if (R.tag === "Just")
            return R._1;
          f();
        })(), L = pt(X)(W.x), I = pt((() => {
          const U = pt(X)(W.sink);
          if (U.tag === "Nothing")
            return X;
          if (U.tag === "Just")
            return U._1;
          f();
        })())(D), z = (() => {
          if (L.tag === "Just")
            return L._1;
          if (L.tag === "Nothing")
            return v;
          f();
        })();
        return (() => {
          if (z.tag === "Nothing")
            return 0;
          if (z.tag === "Just")
            return z._1;
          f();
        })() + (() => {
          if (I.tag === "Nothing")
            return 0;
          if (I.tag === "Just")
            return I._1;
          f();
        })();
      })()
    ))(J)),
    su: W.su,
    stack: [],
    trace: []
  })(W.queue), q = w(ot(Pw))({ ...M, stack: [] })(fn(M.stack));
  return { x: q.x, queue: W.queue, trace: q.trace };
}, Gw = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => (l) => Fw(t)(n)(e)(r)(o)(i)(s)(u)(a)(c)(l).x, Iw = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = (a, c, l) => {
    const _ = pt(c)(e), d = (() => {
      if (_.tag === "Nothing")
        return 0.5;
      if (_.tag === "Just")
        return _._1._1 / 2;
      f();
    })(), g = a.from.node === c ? a.from.port : a.to.node === c ? a.to.port : v;
    if (g.tag === "Just") {
      const p = pt(c)(n);
      if (p.tag === "Just") {
        const m = en((h) => h.id === g._1)(p._1);
        if (m.tag === "Just") {
          const h = V(m._1.offset) * V(4);
          return l === "North" || l === "South" ? h : 0;
        }
        if (m.tag === "Nothing") {
          const h = Pi(o)(a.id)(l)(d);
          return l === "North" || l === "South" ? h : 0;
        }
        f();
      }
      if (p.tag === "Nothing") {
        const m = Pi(o)(a.id)(l)(d);
        return l === "North" || l === "South" ? m : 0;
      }
      f();
    }
    if (g.tag === "Nothing") {
      const p = Pi(o)(a.id)(l)(d);
      return l === "North" || l === "South" ? p : 0;
    }
    f();
  }, u = (a) => (c) => (l) => (_) => {
    let d = a, g = c, p = l, m = _, h = !0, $;
    for (; h; ) {
      const x = d, y = g, J = p, C = Ht((S) => v, (S) => (P) => T("Just", { head: S, tail: P }), m);
      if (C.tag === "Nothing") {
        h = !1, $ = x;
        continue;
      }
      if (C.tag === "Just") {
        const S = C._1.head, P = en((Q) => Q.from.node === J && Q.to.node === S || Q.from.node === S && Q.to.node === J)(r), E = (() => {
          if (P.tag === "Nothing")
            return y + 0;
          if (P.tag === "Just")
            return y + (s(P._1, J, P._1.from.node === J ? Bn : In) - s(
              P._1,
              S,
              P._1.from.node === S ? Bn : In
            ));
          f();
        })();
        d = tt(F)(S)(E)(x), g = E, p = S, m = C._1.tail;
        continue;
      }
      f();
    }
    return $;
  };
  return w((a) => (c) => {
    const l = Ht((g) => v, (g) => (p) => T("Just", { head: g, tail: p }), xs(t)(c)), _ = (() => {
      if (l.tag === "Nothing")
        return tt(F)(c)(0)(G);
      if (l.tag === "Just")
        return u(tt(F)(l._1.head)(0)(G))(0)(l._1.head)(l._1.tail);
      f();
    })(), d = w((g) => (p) => Ar(g)(-p._2))(0)(Sf(_));
    return w((g) => (p) => tt(F)(p._1)(p._2 + d)(g))(a)(Sf(_));
  })(G)(Bi(F.compare)((() => {
    const a = (c, l) => {
      if (c.tag === "Leaf")
        return l;
      if (c.tag === "Node")
        return a(c._5, kt("Cons", c._4, a(c._6, l)));
      f();
    };
    return jt(Jn.foldr, a(t.root, Y));
  })()));
}, Bw = (t) => (n) => {
  const e = (o, i, s) => On(3)(i) === "$d:" && M1(
    rh,
    (() => {
      const u = pt(i)(t.preds);
      if (u.tag === "Nothing")
        return [];
      if (u.tag === "Just")
        return u._1;
      f();
    })()
  ), r = (o) => (i) => (s) => (u) => (a) => (c) => (l) => {
    let _ = o, d = i, g = u, p = c, m = l, h = !0, $;
    for (; h; ) {
      const x = _, y = d, J = g, N = p, C = m, S = y.length;
      if (C >= S) {
        h = !1, $ = x;
        continue;
      }
      const P = C >= 0 && C < y.length ? T("Just", y[C]) : v, E = (() => {
        if (P.tag === "Nothing")
          return "";
        if (P.tag === "Just")
          return P._1;
        f();
      })(), Q = e(t, E);
      if (C === (S - 1 | 0) || Q) {
        const W = (() => {
          if (Q) {
            const D = pt(E)(t.preds), H = (() => {
              if (D.tag === "Nothing")
                return [];
              if (D.tag === "Just")
                return D._1;
              f();
            })();
            if (0 < H.length) {
              const rt = J - 1 | 0, ot = pt(H[0])(t.nodeIndex);
              if (ot.tag === "Nothing")
                return rt;
              if (ot.tag === "Just")
                return ot._1;
              f();
            }
          }
          return J - 1 | 0;
        })();
        _ = w((D) => (H) => {
          if (H >= 0 && H < y.length) {
            const rt = y[H];
            return e(t, rt) ? D : w((ot) => (M) => {
              const q = pt(M)(t.nodeIndex), A = (() => {
                if (q.tag === "Nothing")
                  return 0;
                if (q.tag === "Just")
                  return q._1;
                f();
              })();
              return A < N || A > W ? tt(F)(M + "→" + rt)()(ot) : ot;
            })(D)((() => {
              const ot = pt(rt)(t.preds);
              if (ot.tag === "Nothing")
                return [];
              if (ot.tag === "Just")
                return ot._1;
              f();
            })());
          }
          return e(t, "") ? D : w((rt) => (ot) => {
            const M = pt(ot)(t.nodeIndex), q = (() => {
              if (M.tag === "Nothing")
                return 0;
              if (M.tag === "Just")
                return M._1;
              f();
            })();
            return q < N || q > W ? tt(F)(ot + "→")()(rt) : rt;
          })(D)((() => {
            const rt = pt("")(t.preds);
            if (rt.tag === "Nothing")
              return [];
            if (rt.tag === "Just")
              return rt._1;
            f();
          })());
        })(x)(Vt(0, C)), d = y, g = J, p = W, m = C + 1 | 0;
        continue;
      }
      _ = x, d = y, g = J, p = N, m = C + 1 | 0;
    }
    return $;
  };
  return n.length < 3 ? G : w((o) => (i) => {
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
  })(G)(Vt(1, n.length - 2 | 0));
}, Dw = (t) => (n) => (e) => (r) => (o) => {
  const i = Ee(n), s = w((u) => (a) => {
    const c = w((l) => (_) => {
      const d = (() => {
        if (o === "HRight") {
          const h = pt(_)(t.preds);
          if (h.tag === "Nothing")
            return [];
          if (h.tag === "Just")
            return h._1;
          f();
        }
        if (o === "HLeft") {
          const h = pt(_)(t.succs);
          if (h.tag === "Nothing")
            return [];
          if (h.tag === "Just")
            return h._1;
        }
        f();
      })(), g = d.length;
      if (g === 0)
        return l;
      const p = nr(g - 1 | 0, 2), m = nr(g, 2);
      return w((h) => ($) => {
        if ((() => {
          const x = pt(_)(h.align);
          if (x.tag === "Nothing")
            return _ !== _;
          if (x.tag === "Just")
            return x._1 !== _;
          f();
        })())
          return h;
        if ($ >= 0 && $ < d.length) {
          const x = pt(d[$])(t.nodeIndex), y = (() => {
            if (x.tag === "Nothing")
              return 0;
            if (x.tag === "Just")
              return x._1;
            f();
          })();
          if (!(Yg(d[$] + "→" + _)(e) || Yg(_ + "→" + d[$])(e)) && (() => {
            if (r === "VDown")
              return h.r < y;
            if (r === "VUp")
              return h.r > y;
            f();
          })()) {
            const J = pt(d[$])(h.root), N = (() => {
              if (J.tag === "Nothing")
                return d[$];
              if (J.tag === "Just")
                return J._1;
              f();
            })();
            return {
              root: tt(F)(_)(N)(h.root),
              align: tt(F)(d[$])(_)(tt(F)(_)(N)(h.align)),
              r: y
            };
          }
        }
        return h;
      })(l)((() => {
        if (r === "VDown")
          return Vt(p, m);
        if (r === "VUp")
          return fn(Vt(p, m));
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
        return a;
      if (r === "VUp")
        return fn(a);
      f();
    })());
    return { root: c.root, align: c.align };
  })({ root: Nr(B((u) => b(u, u))(i)), align: Nr(B((u) => b(u, u))(i)) })((() => {
    if (o === "HRight")
      return n;
    if (o === "HLeft")
      return fn(n);
    f();
  })());
  return { root: s.root, align: s.align };
}, Nu = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => {
  const l = Dw(n)(e)(u)(a)(c), _ = Iw(l)(o)(r)(i)(s)(c);
  return B2()((d) => (g) => T(
    "Just",
    (() => {
      const p = pt(d)(_);
      if (p.tag === "Nothing")
        return g + 0;
      if (p.tag === "Just")
        return g + p._1;
      f();
    })()
  ))(Gw(t)(n)(e)(r)(o)(i)(s)(_)(l)(a)(c));
}, Mg = (t) => (n) => Xt((e) => (r) => w((o) => (i) => i >= 0 && i < n.length ? i >= 0 && i < t.length ? o + n[i] + t[i] : o + n[i] + 0 : i >= 0 && i < t.length ? o + 1 + t[i] : o + 1)(0)((() => {
  const o = Vt(0, n.length - 1 | 0);
  return e < 1 ? [] : At(0, e, o);
})()))(n), zw = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = Sw(0)(n.length - 1 | 0), a = V(t.layerGap), c = s($2(u, a)), l = Tw(uh(o)(c)(r)(i)(G))(c);
  return B((_) => {
    const d = Lw(_)(l);
    return d.tag === "Just" && d._1 > 0 ? Ar(a)(2 + V(d._1 - 1 | 0) * 2.5) : a;
  })(Vt(0, u - 1 | 0));
}, _h = (t) => (n) => (e) => (r) => M1(
  (o) => w((i) => (s) => {
    if (!i.ok)
      return i;
    const u = pt(s)(r), a = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      f();
    })(), c = pt(s)(e), l = (() => {
      if (c.tag === "Nothing")
        return a + 1;
      if (c.tag === "Just")
        return a + c._1._1;
      f();
    })();
    return a + 1e-4 > i.pos && l + 1e-4 > i.pos ? { ok: !0, pos: l } : { ok: !1, pos: i.pos };
  })({ ok: !0, pos: -1e18 })(o).ok,
  n
), Hw = (t) => (n) => (e) => (r) => {
  const o = It((i) => (s) => it.compare(i.w)(s.w))(B((i) => ({ l: i, w: gh(i) }))(ht(
    _h()(n)(e),
    r
  )));
  return 0 < o.length ? T("Just", o[0].l) : v;
}, Qw = (t) => (n) => {
  const e = Nr(Ee(B(Xt((o) => (i) => b(i, o)))(t))), r = (o) => It((i) => (s) => st.compare((() => {
    const u = pt(i)(e);
    if (u.tag === "Nothing")
      return 0;
    if (u.tag === "Just")
      return u._1;
    f();
  })())((() => {
    const u = pt(s)(e);
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
          return G;
        if (i.tag === "Node")
          return Zt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(w((i) => (s) => Wt(F)(Nn)(s.to.node)([s.from.node])(i))(G)(n));
    })(),
    succs: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return G;
        if (i.tag === "Node")
          return Zt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(w((i) => (s) => Wt(F)(Nn)(s.from.node)([s.to.node])(i))(G)(n));
    })(),
    nodeIndex: e
  };
}, Ow = (t) => (n) => {
  const e = It((_) => (d) => it.compare(_.w)(d.w))(Xt((_) => (d) => ({ i: _, l: d, w: gh(d) }))(n)), r = 0 < e.length ? T("Just", e[0]) : v, o = (() => {
    if (r.tag === "Just")
      return r._1.i;
    if (r.tag === "Nothing")
      return 0;
    f();
  })(), i = o >= 0 && o < n.length ? T("Just", n[o]) : v, s = (() => {
    if (i.tag === "Just")
      return ((d) => (g) => {
        let p = d, m = g, h = !0, $;
        for (; h; ) {
          const x = p, y = m;
          if (y.tag === "Nil") {
            h = !1, $ = x;
            continue;
          }
          if (y.tag === "Cons") {
            p = Qe(x)(y._1), m = y._2;
            continue;
          }
          f();
        }
        return $;
      })(999999)((() => {
        const d = (g, p) => {
          if (g.tag === "Leaf")
            return p;
          if (g.tag === "Node")
            return d(g._5, kt("Cons", g._4, d(g._6, p)));
          f();
        };
        return d(i._1, Y);
      })());
    if (i.tag === "Nothing")
      return 0;
    f();
  })(), u = (_) => w((d) => (g) => Ar(d)((() => {
    const p = pt(g._1)(t);
    if (p.tag === "Nothing")
      return g._2 + 1;
    if (p.tag === "Just")
      return g._2 + p._1._1;
    f();
  })()))(-999999)(Sf(_)), a = o >= 0 && o < n.length ? T("Just", n[o]) : v, c = (() => {
    if (a.tag === "Just")
      return u(a._1);
    if (a.tag === "Nothing")
      return 0;
    f();
  })(), l = Ln(
    (_) => (d) => {
      const g = (p) => {
        if (p.tag === "Leaf")
          return G;
        if (p.tag === "Node")
          return Zt("Node", p._1, p._2, p._3, p._4 + d, g(p._5), g(p._6));
        f();
      };
      return g(_);
    },
    n,
    Xt((_) => (d) => jr(_)(2) === 0 ? s - ((p) => (m) => {
      let h = p, $ = m, x = !0, y;
      for (; x; ) {
        const J = h, N = $;
        if (N.tag === "Nil") {
          x = !1, y = J;
          continue;
        }
        if (N.tag === "Cons") {
          h = Qe(J)(N._1), $ = N._2;
          continue;
        }
        f();
      }
      return y;
    })(999999)((() => {
      const p = (m, h) => {
        if (m.tag === "Leaf")
          return h;
        if (m.tag === "Node")
          return p(m._5, kt("Cons", m._4, p(m._6, h)));
        f();
      };
      return p(d, Y);
    })()) : c - u(d))(n)
  );
  return Rw(w((_) => (d) => {
    const g = It(it.compare)(bt(pt(d))(l));
    return tt(F)(d)(g.length === 4 ? 1 < g.length && 2 < g.length ? (g[1] + g[2]) / 2 : 0 : 0 < g.length ? g[0] : 0)(_);
  })(G)(Bi(F.compare)(Ee(B((_) => {
    const d = (g) => {
      if (g.tag === "Leaf")
        return G;
      if (g.tag === "Node")
        return Zt("Node", g._1, g._2, g._3, void 0, d(g._5), d(g._6));
      f();
    };
    return jt(be.foldr, d(_));
  })(l)))));
}, Ww = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Qw(n)(o), u = Bw(s)(n), a = { nodeGap: t.nodeGap * 4 | 0 }, c = Yn(
    F.compare,
    Xn,
    Nr(B((g) => b(g, b(1, 1)))(ht(
      rh,
      Ee(n)
    ))),
    (() => {
      const g = (p) => {
        if (p.tag === "Leaf")
          return G;
        if (p.tag === "Node")
          return Zt("Node", p._1, p._2, p._3, b(p._4._1 * V(4), p._4._2), g(p._5), g(p._6));
        f();
      };
      return g(e);
    })()
  ), l = [
    Nu(a)(s)(n)(c)(r)(o)(i)(u)(Og)(qg),
    Nu(a)(s)(n)(c)(r)(o)(i)(u)(Wg)(qg),
    Nu(a)(s)(n)(c)(r)(o)(i)(u)(Og)(Xg),
    Nu(a)(s)(n)(c)(r)(o)(i)(u)(Wg)(Xg)
  ], _ = Ow(c)(l);
  if (_h()(n)(c)(_))
    return _;
  const d = Hw()(n)(c)(l);
  if (d.tag === "Just")
    return d._1;
  if (d.tag === "Nothing")
    return l[0];
  f();
}, qw = (t) => (n) => (e) => (r) => {
  const o = q1(
    v,
    D1,
    (i) => i.node === n ? T("Just", i.position) : v,
    t
  );
  if (o.tag === "Nothing")
    return t;
  if (o.tag === "Just") {
    const i = o._1;
    return B((s) => s.node === e ? { ...s, position: b(i._1 + r._1, i._2 + r._2) } : s)(t);
  }
  f();
}, Xw = (t) => (n) => (e) => (r) => {
  const o = ht((s) => Ne(Pr)(s.node)(n), t), i = (() => {
    if (e === "Vertical") {
      if (r === "Start")
        return w((s) => (u) => Qe(s)(u.position._1))(99999)(o);
      if (r === "End")
        return w((s) => (u) => Ar(s)(u.position._1))(0)(o);
      if (r === "Center") {
        const s = w((u) => (a) => u + a.position._1)(0)(o);
        return o.length === 0 ? 0 : s / V(o.length);
      }
      f();
    }
    if (e === "Horizontal") {
      if (r === "Start")
        return w((s) => (u) => Qe(s)(u.position._2))(99999)(o);
      if (r === "End")
        return w((s) => (u) => Ar(s)(u.position._2))(0)(o);
      if (r === "Center") {
        const s = w((u) => (a) => u + a.position._2)(0)(o);
        return o.length === 0 ? 0 : s / V(o.length);
      }
    }
    f();
  })();
  return B((s) => {
    if (Ne(Pr)(s.node)(n)) {
      if (e === "Vertical")
        return { ...s, position: b(i, s.position._2) };
      if (e === "Horizontal")
        return { ...s, position: b(s.position._1, i) };
      f();
    }
    return s;
  })(t);
}, Yw = (t) => (n) => w((e) => (r) => r.tag === "AlignGroup" ? Xw(e)(r._1.nodes)(r._1.axis)(r._1.alignment) : r.tag === "RelativePosition" ? qw(e)(r._1.anchor)(r._1.target)(r._1.offset) : e)(n)(t), Mw = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const a = B((_) => w((d) => (g) => Ar(d)((() => {
    const p = pt(g)(r);
    if (p.tag === "Nothing")
      return 1;
    if (p.tag === "Just")
      return p._1._2;
    f();
  })()))(1)(_))(e), c = Ww(t)(e)(r)(o)(i)(u), l = Mg(zw(t)(e)(r)(o)(i)(s)((_) => {
    const d = Mg(_)(a);
    return Ee(Xt((g) => (p) => Xt((m) => (h) => ({
      node: h,
      position: b(
        (() => {
          const $ = pt(h)(c);
          return (() => {
            if ($.tag === "Nothing")
              return 0;
            if ($.tag === "Just")
              return $._1;
            f();
          })() / V(4);
        })(),
        g >= 0 && g < d.length ? d[g] : 0
      ),
      size: (() => {
        const $ = On(3)(h) === "$d:" ? b(0, 1) : b(1, 1), x = pt(h)(r);
        if (x.tag === "Nothing")
          return $;
        if (x.tag === "Just")
          return x._1;
        f();
      })(),
      layer: g,
      order: m
    }))(p))(e));
  }))(a);
  return Yw(n)(Ee(Xt((_) => (d) => Xt((g) => (p) => ({
    node: p,
    position: b(
      (() => {
        const m = pt(p)(c);
        return (() => {
          if (m.tag === "Nothing")
            return 0;
          if (m.tag === "Just")
            return m._1;
          f();
        })() / V(4);
      })(),
      _ >= 0 && _ < l.length ? l[_] : 0
    ),
    size: (() => {
      const m = On(3)(p) === "$d:" ? b(0, 1) : b(1, 1), h = pt(p)(r);
      if (h.tag === "Nothing")
        return m;
      if (h.tag === "Just")
        return h._1;
      f();
    })(),
    layer: _,
    order: g
  }))(d))(e)));
}, qc = /* @__PURE__ */ D0(Yu)(/* @__PURE__ */ Vo(32)), Ug = /* @__PURE__ */ D0(Yu)(/* @__PURE__ */ Vo(31)), Fs = /* @__PURE__ */ (() => {
  const t = Ny("25214903917");
  if (t.tag === "Nothing")
    return cd;
  if (t.tag === "Just")
    return t._1;
  f();
})(), Gs = /* @__PURE__ */ mf(/* @__PURE__ */ D0(Yu)(/* @__PURE__ */ Vo(48)))(Yu), Uw = (t) => {
  const n = Jy(t);
  return Es(fd((() => {
    if (n.tag === "Nothing")
      return cd;
    if (n.tag === "Just")
      return n._1;
    f();
  })())(Fs))(Gs);
}, Lf = /* @__PURE__ */ Vo(11), ua = (t) => (n) => {
  const e = Es(Fu(Gu(n)(Fs))(Lf))(Gs);
  return b(
    (() => {
      const r = U1(xy($f(e)(Vo(48 - t | 0))));
      if (r.tag === "Nothing")
        return 0;
      if (r.tag === "Just")
        return r._1;
      f();
    })(),
    e
  );
}, Kw = (t) => {
  const n = ua(26)(t), e = ua(27)(n._2);
  return b((V(n._1) * zi(2)(27) + V(e._1)) / zi(2)(53), e._2);
}, Vw = (t) => (n) => {
  const e = w((r) => (o) => {
    const i = Kw(r.finalR);
    return { rs: [...r.rs, i._1], finalR: i._2 };
  })({ rs: [], finalR: t })(n);
  return b(
    B((r) => r.x)(It((r) => (o) => it.compare(r.k)(o.k))(Ln((r) => (o) => ({ x: r, k: o }), n, e.rs))),
    e.finalR
  );
}, jw = (t) => {
  const n = Es(Fu(Gu(t)(Fs))(Lf))(Gs), e = Es(Fu(Gu(n)(Fs))(Lf))(Gs);
  return b(
    Fu(Gu((() => {
      const r = $f(n)(Vo(16));
      return gg.compare(r)(Ug) !== "LT" ? mf(r)(qc) : r;
    })())(qc))((() => {
      const r = $f(e)(Vo(16));
      return gg.compare(r)(Ug) !== "LT" ? mf(r)(qc) : r;
    })()),
    e
  );
}, Is = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, aa = (t) => (e) => {
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
}, rl = /* @__PURE__ */ pn(F)(Yt), ki = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ca = /* @__PURE__ */ pn(F)(Yt), Zw = /* @__PURE__ */ Ks(si), tN = /* @__PURE__ */ w(gr)(0), nN = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Kg = (t) => (e) => {
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
}, eN = (t) => (n) => (e) => {
  if (t >= 0 && t < e.length) {
    const r = e[t];
    if (n >= 0 && n < e.length) {
      const o = mo(qt, v, t, e[n], e);
      if (o.tag === "Just")
        return mo(qt, v, n, r, o._1);
      if (o.tag === "Nothing")
        return v;
      f();
    }
  }
  return v;
}, rN = (t) => (n) => (e) => (r) => (o) => rl(w((i) => (s) => {
  const u = It((a) => (c) => st.compare((() => {
    const l = Is(a.id)(o);
    if (l.tag === "Nothing")
      return 1e6;
    if (l.tag === "Just")
      return l._1;
    f();
  })())((() => {
    const l = Is(c.id)(o);
    if (l.tag === "Nothing")
      return 1e6;
    if (l.tag === "Just")
      return l._1;
    f();
  })()))(ht((a) => aa(a.to.node)(e), ht((a) => a.from.node === s, r)));
  return {
    ranks: [...i.ranks, ...Xt((a) => (c) => b(c.id, V((i.rankSum + a | 0) + 1 | 0)))(u)],
    rankSum: i.rankSum + u.length | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), oN = (t) => (n) => (e) => (r) => (o) => rl(w((i) => (s) => {
  const u = It((c) => (l) => {
    const _ = st.compare((() => {
      const d = ki(l.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      f();
    })())((() => {
      const d = ki(c.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      f();
    })());
    return _ === "EQ" ? st.compare((() => {
      const d = Is(c.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      f();
    })())((() => {
      const d = Is(l.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      f();
    })()) : _;
  })(ht((c) => aa(c.from.node)(e), ht((c) => c.to.node === s, r))), a = u.length;
  return {
    ranks: [...i.ranks, ...Xt((c) => (l) => b(l.id, V((i.rankSum + a | 0) - c | 0)))(u)],
    rankSum: i.rankSum + a | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), Ef = (t) => (n) => (e) => {
  const r = ca(Xt((u) => (a) => b(a, u))(t)), o = ca(Xt((u) => (a) => b(a, u))(n)), i = bt((u) => {
    const a = ki(u.from.node)(r), c = ki(u.to.node)(o);
    if (a.tag === "Just" && c.tag === "Just")
      return T("Just", b(a._1, c._1));
    const l = ki(u.from.node)(o), _ = ki(u.to.node)(r);
    return l.tag === "Just" && _.tag === "Just" ? T("Just", b(_._1, l._1)) : v;
  })(e), s = i.length;
  return w((u) => (a) => w((c) => (l) => a >= 0 && a < i.length && l >= 0 && l < i.length && ((i[a]._1 - i[l]._1 | 0) * (i[a]._2 - i[l]._2 | 0) | 0) < 0 ? c + 1 | 0 : c)(u)(Vt(a + 1 | 0, s - 1 | 0)))(0)(Vt(0, s - 2 | 0));
}, iN = (t) => (n) => (e) => (r) => {
  const o = (s) => (u) => {
    let a = s, c = u, l = !0, _;
    for (; l; ) {
      const d = a, g = c;
      if (g >= (d.length - 1 | 0)) {
        l = !1, _ = d;
        continue;
      }
      if (g >= 0 && g < d.length) {
        const p = g + 1 | 0;
        if (p >= 0 && p < d.length) {
          const m = d[g], h = d[p];
          if (En((J) => J.before === m && J.after === h, r)) {
            a = d, c = g + 1 | 0;
            continue;
          }
          const $ = mo(qt, v, g, h, d), x = (() => {
            if ($.tag === "Just")
              return mo(qt, v, g + 1 | 0, m, $._1);
            if ($.tag === "Nothing")
              return v;
            f();
          })(), y = (() => {
            if (x.tag === "Nothing")
              return d;
            if (x.tag === "Just")
              return x._1;
            f();
          })();
          if (Ef(n)(y)(e) < Ef(n)(d)(e)) {
            a = y, c = g + 1 | 0;
            continue;
          }
          a = d, c = g + 1 | 0;
          continue;
        }
        l = !1, _ = d;
        continue;
      }
      l = !1, _ = d;
    }
    return _;
  };
  return ((s) => {
    let u = s, a = !0, c;
    for (; a; ) {
      const l = u, _ = o(l)(0);
      if (Zw(_)(l)) {
        a = !1, c = l;
        continue;
      }
      u = _;
    }
    return c;
  })(t);
}, Ju = (t) => (n) => w((e) => (r) => {
  if (r >= 0 && r < t.length) {
    const o = t[r], i = r + 1 | 0;
    if (i >= 0 && i < t.length)
      return e + Ef(o)(t[i])(n) | 0;
  }
  return e;
})(0)(Vt(0, t.length - 2 | 0)), sN = /* @__PURE__ */ (() => {
  const t = (n) => {
    if (n.length < 7) {
      const s = (u) => (a) => {
        let c = u, l = a, _ = !0, d;
        for (; _; ) {
          const g = c, p = l, m = p - 1 | 0;
          if (m >= 0 && m < g.length) {
            if (p >= 0 && p < g.length && p > 0 && g[m].key > g[p].key) {
              const h = eN(p - 1 | 0)(p)(g);
              if (h.tag === "Just") {
                c = h._1, l = p - 1 | 0;
                continue;
              }
              if (h.tag === "Nothing") {
                _ = !1, d = g;
                continue;
              }
              f();
            }
            _ = !1, d = g;
            continue;
          }
          _ = !1, d = g;
        }
        return d;
      };
      return w((u) => (a) => s(u)(a))(n)(Vt(1, n.length - 1 | 0));
    }
    const e = nr(n.length, 2), r = t(At(0, e, n)), o = t(At(e, n.length, n));
    return ((s) => (u) => (a) => {
      let c = s, l = u, _ = a, d = !0, g;
      for (; d; ) {
        const p = c, m = l, h = _;
        if (m >= 0 && m < r.length) {
          if (h >= 0 && h < o.length) {
            if (r[m].key > o[h].key) {
              c = St(p)(o[h]), l = m, _ = h + 1 | 0;
              continue;
            }
            c = St(p)(r[m]), l = m + 1 | 0, _ = h;
            continue;
          }
          d = !1, g = [...p, ...m < 1 ? r : At(m, r.length, r)];
          continue;
        }
        d = !1, g = [...p, ...h < 1 ? o : At(h, o.length, o)];
      }
      return g;
    })([])(0)(0);
  };
  return t;
})(), uN = (t) => (n) => (e) => {
  const r = bt((c) => c.tag === "OrderConstraint" ? T("Just", { before: c._1.before, after: c._1.after }) : v)(t.constraints), o = (c) => w((l) => (_) => {
    const d = _.after, g = _.before, p = Ko(qt, v, (h) => h === g, l), m = Ko(qt, v, (h) => h === d, l);
    if (p.tag === "Just" && m.tag === "Just" && p._1 > m._1) {
      const h = Y1(qt, v, p._1, l), $ = (() => {
        if (h.tag === "Nothing")
          return l;
        if (h.tag === "Just")
          return h._1;
        f();
      })(), x = X1(qt, v, m._1, g, $);
      if (x.tag === "Nothing")
        return $;
      if (x.tag === "Just")
        return x._1;
      f();
    }
    return l;
  })(c)(r), i = rl(Xt((c) => (l) => b(l.id, c))(e)), s = (c, l, _) => {
    const d = c.length;
    return w((g) => (p) => {
      const m = l ? p - 1 | 0 : p + 1 | 0, h = m >= 0 && m < g._1.length ? T("Just", g._1[m]) : v;
      if (h.tag === "Just") {
        const $ = p >= 0 && p < g._1.length ? T("Just", g._1[p]) : v;
        if ($.tag === "Just") {
          const x = ca(Xt((S) => (P) => b(P, S))(h._1)), y = ca(Xt((S) => (P) => b(P, S))($._1)), J = l ? rN(h._1)(x)(y)(e)(i) : oN(h._1)(x)(y)(e)(i), N = w((S) => (P) => {
            const E = bt((W) => Is(W.id)(J))(ht(l ? (W) => W.to.node === P._2 && aa(W.from.node)(x) : (W) => W.from.node === P._2 && aa(W.to.node)(x), e));
            if (E.length === 0)
              return { ...S, items: [...S.items, { n: P._2, key: v, origIdx: P._1 }] };
            const Q = ua(24)(S.r);
            return {
              items: [
                ...S.items,
                {
                  n: P._2,
                  key: T("Just", (tN(E) + (V(Q._1) * 4172325152040912e-24 - 0.03500000014901161)) / V(E.length)),
                  origIdx: P._1
                }
              ],
              r: Q._2
            };
          })({ items: [], r: g._2 })(Xt(Vn)($._1)), C = mo(
            qt,
            v,
            p,
            iN(o(B((S) => S.n)(sN((() => {
              const S = N.items, P = (Q) => (W) => {
                let D = Q, H = W, rt = !0, ot;
                for (; rt; ) {
                  const M = D, q = H;
                  if (M >= 0 && M < S.length) {
                    if (S[M].key.tag === "Just") {
                      rt = !1, ot = S[M].key._1;
                      continue;
                    }
                    if (S[M].key.tag === "Nothing") {
                      D = M + 1 | 0, H = q;
                      continue;
                    }
                    f();
                  }
                  rt = !1, ot = q;
                }
                return ot;
              };
              return ((Q) => (W) => (D) => {
                let H = Q, rt = W, ot = D, M = !0, q;
                for (; M; ) {
                  const A = H, R = rt, X = ot;
                  if (A >= 0 && A < S.length) {
                    if (S[A].key.tag === "Just") {
                      H = A + 1 | 0, rt = S[A].key._1, ot = [...X, { n: S[A].n, key: S[A].key._1, origIdx: S[A].origIdx }];
                      continue;
                    }
                    if (S[A].key.tag === "Nothing") {
                      const L = (R + P(A + 1 | 0)(R + 1)) / 2;
                      H = A + 1 | 0, rt = L, ot = [...X, { n: S[A].n, key: L, origIdx: S[A].origIdx }];
                      continue;
                    }
                    f();
                  }
                  M = !1, q = X;
                }
                return q;
              })(0)(-1)([]);
            })()))))(h._1)(e)(r),
            g._1
          );
          if (C.tag === "Just")
            return b(C._1, N.r);
          if (C.tag === "Nothing")
            return b(g._1, g._2);
          f();
        }
        if ($.tag === "Nothing")
          return b(g._1, g._2);
        f();
      }
      if (h.tag === "Nothing")
        return b(g._1, g._2);
      f();
    })(b(c, _))(l ? Vt(1, d - 1 | 0) : fn(Vt(0, d - 2 | 0)));
  }, u = w((c) => (l) => tt(F)(l.from.node)()(tt(F)(l.to.node)()(c)))(G)(e), a = w((c) => (l) => {
    if (c.result.crossings === 0)
      return c;
    const _ = (x) => (y) => (J) => (N) => {
      let C = x, S = y, P = J, E = N, Q = !0, W;
      for (; Q; ) {
        const D = C, H = S, rt = P, ot = E;
        if (rt === 0) {
          Q = !1, W = { layout: D, crossings: 0, random: ot };
          continue;
        }
        const M = s(D, H, ot), q = Ju(M._1)(e);
        if (q < rt) {
          C = M._1, S = !H, P = q, E = M._2;
          continue;
        }
        Q = !1, W = { layout: D, crossings: rt, random: M._2 };
      }
      return W;
    }, d = ua(1)(c.result.random), g = d._1 !== 0, p = t.modelOrder.tag === "Leaf", m = (c.firstTry || c.secondTry) && !p ? c.firstTry : g, h = (() => {
      if (!p) {
        const N = s(n, m, d._2);
        return _(N._1)(!m)(Ju(N._1)(e))(N._2);
      }
      const x = m ? 0 : nN(0)(n.length - 1 | 0), y = x >= 0 && x < n.length ? T("Just", n[x]) : v;
      if (y.tag === "Just" && y._1.length > 1) {
        const N = ht((C) => Kg(C)(u), y._1);
        if (N.length > 1) {
          const C = Vw(d._2)(N), S = C._1, P = mo(
            qt,
            v,
            x,
            o(w((E) => (Q) => Kg(Q)(u) ? E.idx >= 0 && E.idx < S.length ? { idx: E.idx + 1 | 0, result: [...E.result, S[E.idx]] } : { idx: E.idx, result: [...E.result, Q] } : { idx: E.idx, result: [...E.result, Q] })({ idx: 0, result: [] })(y._1).result),
            n
          );
          if (P.tag === "Just") {
            const E = s(P._1, m, C._2);
            return _(E._1)(!m)(Ju(E._1)(e))(E._2);
          }
        }
      }
      const J = s(n, m, d._2);
      return _(J._1)(!m)(Ju(J._1)(e))(J._2);
    })(), $ = c.secondTry ? !1 : c.secondTry;
    return c.firstTry ? {
      result: h.crossings < c.result.crossings ? { layout: h.layout, crossings: h.crossings, random: h.random } : { ...c.result, random: h.random },
      firstTry: !1,
      secondTry: !0
    } : {
      result: h.crossings < c.result.crossings ? { layout: h.layout, crossings: h.crossings, random: h.random } : { ...c.result, random: h.random },
      firstTry: c.firstTry,
      secondTry: $
    };
  })({
    result: {
      layout: n,
      crossings: 1e9,
      random: Es(fd(jw(Uw(1))._1)(Fs))(Gs)
    },
    firstTry: t.modelOrder.tag !== "Leaf",
    secondTry: !1
  })(Vt(1, t.iterations)).result;
  return n.length <= 0 || t.iterations <= 0 ? n : a.layout;
}, aN = (t) => t, Vg = (t) => (e) => {
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
}, xe = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Yi = (t) => (e) => {
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
}, Bs = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = F.compare(n._1)(e._1);
      return r === "LT" ? Wn : r === "GT" ? qn : F.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), cN = /* @__PURE__ */ pn(F)(Yt), fN = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = Bs.compare(t)(s._3);
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
}, lN = /* @__PURE__ */ aN("Greedy"), Xc = (t) => (n) => (e) => w((r) => (o) => {
  if (o.from.node === o.to.node)
    return r;
  if (o.from.node === n && !Vg(o.to.node)(r.marks)) {
    const i = xe(o.to.node)(r.inDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = tt(F)(o.to.node)(s)(r.inDeg);
    return (() => {
      const a = xe(o.to.node)(r.outDeg);
      return s <= 0 && (() => {
        if (a.tag === "Nothing")
          return !1;
        if (a.tag === "Just")
          return a._1 > 0;
        f();
      })() && !Ne(Pr)(o.to.node)(r.sources);
    })() ? { ...r, inDeg: u, sources: [...r.sources, o.to.node] } : { ...r, inDeg: u };
  }
  if (o.to.node === n && !Vg(o.from.node)(r.marks)) {
    const i = xe(o.from.node)(r.outDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = tt(F)(o.from.node)(s)(r.outDeg);
    return (() => {
      const a = xe(o.from.node)(r.inDeg);
      return s <= 0 && (() => {
        if (a.tag === "Nothing")
          return !1;
        if (a.tag === "Just")
          return a._1 > 0;
        f();
      })() && !Ne(Pr)(o.from.node)(r.sinks);
    })() ? { ...r, outDeg: u, sinks: [...r.sinks, o.from.node] } : { ...r, outDeg: u };
  }
  return r;
})({ ...e, remaining: ht((r) => r !== n, e.remaining) })(t), gN = /* @__PURE__ */ w((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return tt(F)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return tt(F)(n._1.node)(0)(t);
    if (n._1.pin.tag === "LastLayer")
      return tt(F)(n._1.node)(99999)(t);
  }
  return t;
})(G), dh = (t) => (n) => (e) => {
  const r = xe(n)(t), o = xe(e)(t);
  return r.tag === "Just" && o.tag === "Just" && r._1 > o._1;
}, hh = (t) => (n) => (e) => (r) => {
  if (Yi(e)(r.visited) || Yi(e)(r.visiting))
    return r;
  const o = w(_N(t)(n)(e))({ ...r, visiting: tt(F)(e)()(r.visiting) })((() => {
    const i = xe(e)(n);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just")
      return i._1;
    f();
  })());
  return {
    ...o,
    visiting: Qi(F)(e)(o.visiting),
    visited: tt(F)(e)()(o.visited)
  };
}, _N = (t) => (n) => (e) => (r) => (o) => dh(t)(e)(o) ? { ...r, backEdges: tt(Bs)(b(e, o))()(r.backEdges) } : Yi(o)(r.visiting) ? { ...r, backEdges: tt(Bs)(b(e, o))()(r.backEdges) } : Yi(o)(r.visited) ? r : hh(t)(n)(o)(r), dN = (t) => (n) => (e) => {
  const r = (d) => {
    let g = d, p = !0, m;
    for (; p; ) {
      const h = g, $ = Ht((x) => v, (x) => (y) => T("Just", { head: x, tail: y }), h.sinks);
      if ($.tag === "Just") {
        g = Xc(e)($._1.head)({
          ...h,
          sinks: $._1.tail,
          marks: tt(F)($._1.head)(h.nextRight)(h.marks),
          nextRight: h.nextRight - 1 | 0
        });
        continue;
      }
      if ($.tag === "Nothing") {
        const x = Ht((y) => v, (y) => (J) => T("Just", { head: y, tail: J }), h.sources);
        if (x.tag === "Just") {
          g = Xc(e)(x._1.head)({
            ...h,
            sources: x._1.tail,
            marks: tt(F)(x._1.head)(h.nextLeft)(h.marks),
            nextLeft: h.nextLeft + 1 | 0
          });
          continue;
        }
        if (x.tag === "Nothing") {
          const y = (N) => {
            const C = xe(N)(h.outDeg), S = xe(N)(h.inDeg);
            return (() => {
              if (C.tag === "Nothing")
                return 0;
              if (C.tag === "Just")
                return C._1;
              f();
            })() - (() => {
              if (S.tag === "Nothing")
                return 0;
              if (S.tag === "Just")
                return S._1;
              f();
            })() | 0;
          }, J = It((N) => (C) => {
            const S = st.compare(y(C))(y(N));
            return S === "EQ" ? st.compare((() => {
              const P = xe(N)(n);
              if (P.tag === "Nothing")
                return 1e6;
              if (P.tag === "Just")
                return P._1;
              f();
            })())((() => {
              const P = xe(C)(n);
              if (P.tag === "Nothing")
                return 1e6;
              if (P.tag === "Just")
                return P._1;
              f();
            })()) : S;
          })(h.remaining);
          if (0 < J.length) {
            const N = J[0];
            g = Xc(e)(N)({
              ...h,
              remaining: ht((C) => C !== N, h.remaining),
              marks: tt(F)(N)(h.nextLeft)(h.marks),
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
  }, o = Bi(F.compare)([...B((d) => d.from.node)(e), ...B((d) => d.to.node)(e)]), i = ht((d) => d.from.node !== d.to.node, e), s = w((d) => (g) => Wt(F)(bn)(g.to.node)(1)(d))(G)(i), u = w((d) => (g) => Wt(F)(bn)(g.from.node)(1)(d))(G)(i), a = ht(
    (d) => {
      const g = xe(d)(s);
      if (g.tag === "Nothing")
        return !0;
      if (g.tag === "Just")
        return g._1 === 0;
      f();
    },
    o
  ), c = ht(
    (d) => {
      const g = xe(d)(u);
      if (g.tag === "Nothing")
        return !0;
      if (g.tag === "Just")
        return g._1 === 0;
      f();
    },
    o
  ), l = o.length + 1 | 0, _ = w((d) => (g) => {
    const p = xe(g)(d);
    return p.tag === "Just" && p._1 < 0 ? tt(F)(g)(p._1 + l | 0)(d) : d;
  })(r({
    remaining: ht((d) => !Ne(Pr)(d)(a) && !Ne(Pr)(d)(c), o),
    marks: G,
    inDeg: s,
    outDeg: u,
    sources: a,
    sinks: c,
    nextLeft: 1,
    nextRight: -1
  }).marks)(o);
  return w((d) => (g) => {
    if (g.from.node === g.to.node)
      return d;
    if (dh(t)(g.from.node)(g.to.node))
      return tt(Bs)(b(g.from.node, g.to.node))()(d);
    const p = xe(g.from.node)(_), m = xe(g.to.node)(_);
    return p.tag === "Just" && m.tag === "Just" && p._1 > m._1 ? tt(Bs)(b(g.from.node, g.to.node))()(d) : d;
  })(G)(e);
}, hN = /* @__PURE__ */ w((t) => (n) => Wt(F)(Nn)(n.from.node)([n.to.node])(t))(G), pN = (t) => (n) => {
  const e = hN(n), r = Bi(F.compare)([...B((i) => i.from.node)(n), ...B((i) => i.to.node)(n)]), o = w((i) => (s) => tt(F)(s.to.node)()(i))(G)(n);
  return w((i) => (s) => hh(t)(e)(s)(i))({
    visiting: G,
    visited: G,
    backEdges: G
  })([...ht((i) => !Yi(i)(o), r), ...ht((i) => Yi(i)(o), r)]).backEdges;
}, mN = (t) => (n) => (e) => (r) => {
  const o = cN(Xt((u) => (a) => b(a, u))(n)), i = gN(e), s = (() => {
    if (t === "DepthFirst")
      return pN(i)(r);
    if (t === "Greedy")
      return dN(i)(o)(r);
    f();
  })();
  return {
    edges: B((u) => fN(b(u.from.node, u.to.node))(s) ? { ...u, from: u.to, to: u.from } : u)(r),
    reversedEdges: s
  };
}, ph = Yt.foldMap(/* @__PURE__ */ (() => {
  const t = { append: (n) => (e) => n || e };
  return { mempty: !1, Semigroup0: () => t };
})()), Fn = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Gn = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, vs = (t) => (n) => (e) => (r) => ph((o) => e >= o.x && e < o.x + o.w && n > o.y && t < o.y + o.h)(r), fa = (t) => (n) => (e) => (r) => vs(Fn(n)(e))(Gn(n)(e))(r)(t), Cu = /* @__PURE__ */ V(4), $N = /* @__PURE__ */ Da((t) => {
  if (t.direction === "H") {
    const n = Fn(t.start._1)(t.end._1);
    return [{ x: n, y: t.start._2 - 1, w: Gn(t.start._1)(t.end._1) - n, h: 2 }];
  }
  if (t.direction === "V") {
    const n = Fn(t.start._2)(t.end._2);
    return [{ x: t.start._1 - 1, y: n, w: 2, h: Gn(t.start._2)(t.end._2) - n }];
  }
  f();
}), Ds = /* @__PURE__ */ ws((t) => {
  const n = t.start._1 - t.end._1;
  return !((n < 0 ? -n < 1e-6 : n < 1e-6) && (() => {
    const e = t.start._2 - t.end._2;
    return e < 0 ? -e < 1e-6 : e < 1e-6;
  })());
}), yN = (t) => (n) => (e) => {
  const r = Ht((o) => v, (o) => (i) => T("Just", { head: o, tail: i }), n);
  if (r.tag === "Nothing")
    return [{ start: t.start, end: e.end, direction: t.direction }];
  if (r.tag === "Just") {
    const o = (r._1.head.direction === "H" ? t.direction === "H" : r._1.head.direction === "V" && t.direction === "V") ? [{ start: t.start, end: r._1.head.end, direction: t.direction }] : [t, r._1.head], i = qe(r._1.tail);
    if (i.tag === "Nothing") {
      const s = o.length - 1 | 0;
      return s >= 0 && s < o.length && (o[s].direction === "H" ? e.direction === "H" : o[s].direction === "V" && e.direction === "V") ? [
        ...(() => {
          const u = o.length - 1 | 0;
          return u < 1 ? [] : At(0, u, o);
        })(),
        { start: o[s].start, end: e.end, direction: e.direction }
      ] : [...o, e];
    }
    if (i.tag === "Just")
      return (i._1.last.direction === "H" ? e.direction === "H" : i._1.last.direction === "V" && e.direction === "V") ? [...o, ...i._1.init, { start: i._1.last.start, end: e.end, direction: e.direction }] : [...o, ...r._1.tail, e];
  }
  f();
}, zs = (t) => {
  const n = (r) => (o) => {
    const i = Ht((s) => v, (s) => (u) => T("Just", { head: s, tail: u }), o);
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
  }, e = Ht((r) => v, (r) => (o) => T("Just", { head: r, tail: o }), t);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return n(e._1.head)(e._1.tail);
  f();
}, Ts = (t) => (n) => (e) => (r) => ph((o) => e >= o.y && e < o.y + o.h && n > o.x && t < o.x + o.w)(r), Cs = (t) => (n) => (e) => (r) => Ts(Fn(n)(e))(Gn(n)(e))(r)(t), xN = (t) => (n) => (e) => (r) => {
  const o = e + 2 | 0, i = o < 1 ? n : At(o, n.length, n), s = e < 1 ? [] : At(0, e, n), u = (e + 1 | 0) === (r - 1 | 0), a = e === 0, c = e >= 0 && e < n.length ? T("Just", n[e]) : v;
  if (c.tag === "Just") {
    const l = e + 1 | 0, _ = l >= 0 && l < n.length ? T("Just", n[l]) : v;
    if (_.tag === "Just") {
      const d = c._1.start._1 === _._1.end._1 && (!a || c._1.direction === "V") && (!u || _._1.direction === "V") && !fa(t)(Fn(c._1.start._2)(_._1.end._2))(Gn(c._1.start._2)(_._1.end._2))(c._1.start._1) ? T("Just", [...s, { start: c._1.start, end: _._1.end, direction: xn }, ...i]) : v, g = c._1.start._2 === _._1.end._2 && (!a || c._1.direction === "H") && (!u || _._1.direction === "H") && !Cs(t)(Fn(c._1.start._1)(_._1.end._1))(Gn(c._1.start._1)(_._1.end._1))(c._1.start._2) ? T("Just", [...s, { start: c._1.start, end: _._1.end, direction: yn }, ...i]) : v;
      return d.tag === "Nothing" ? g : d;
    }
    if (_.tag === "Nothing")
      return v;
    f();
  }
  if (c.tag === "Nothing")
    return v;
  f();
}, vN = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const a = i;
      if ((a + 1 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const c = xN(t)(n)(a)(e);
      if (c.tag === "Just") {
        s = !1, u = c._1;
        continue;
      }
      if (c.tag === "Nothing") {
        i = a + 1 | 0;
        continue;
      }
      f();
    }
    return u;
  })(0);
}, TN = (t) => (n) => (e) => (r) => {
  const o = (d, g, p) => !fa(t)(Fn(g)(p))(Gn(g)(p))(d), i = e + 3 | 0, s = i < 1 ? n : At(i, n.length, n), u = e < 1 ? [] : At(0, e, n), a = (e + 2 | 0) === (r - 1 | 0), c = e === 0, l = (d, g, p) => !Cs(t)(Fn(g)(p))(Gn(g)(p))(d), _ = e >= 0 && e < n.length ? T("Just", n[e]) : v;
  if (_.tag === "Just") {
    const d = e + 2 | 0, g = d >= 0 && d < n.length ? T("Just", n[d]) : v;
    if (g.tag === "Just") {
      const p = _._1.start._1 === g._1.end._1 && (!c || _._1.direction === "V") && (!a || g._1.direction === "V") && o(_._1.start._1, _._1.start._2, g._1.end._2) ? T("Just", [...u, { start: _._1.start, end: g._1.end, direction: xn }, ...s]) : _._1.start._2 === g._1.end._2 && (!c || _._1.direction === "H") && (!a || g._1.direction === "H") && l(_._1.start._2, _._1.start._1, g._1.end._1) ? T("Just", [...u, { start: _._1.start, end: g._1.end, direction: yn }, ...s]) : v, m = (!c || _._1.direction === "V") && (!a || g._1.direction === "H") && o(_._1.start._1, _._1.start._2, g._1.end._2) && l(
        g._1.end._2,
        _._1.start._1,
        g._1.end._1
      ) ? T(
        "Just",
        [
          ...u,
          { start: _._1.start, end: b(_._1.start._1, g._1.end._2), direction: xn },
          { start: b(_._1.start._1, g._1.end._2), end: g._1.end, direction: yn },
          ...s
        ]
      ) : v, h = (!c || _._1.direction === "H") && (!a || g._1.direction === "V") && l(_._1.start._2, _._1.start._1, g._1.end._1) && o(
        g._1.end._1,
        _._1.start._2,
        g._1.end._2
      ) ? T(
        "Just",
        [
          ...u,
          { start: _._1.start, end: b(g._1.end._1, _._1.start._2), direction: yn },
          { start: b(g._1.end._1, _._1.start._2), end: g._1.end, direction: xn },
          ...s
        ]
      ) : v, $ = m.tag === "Nothing" ? h : m;
      return p.tag === "Nothing" ? $ : p;
    }
    if (g.tag === "Nothing")
      return v;
    f();
  }
  if (_.tag === "Nothing")
    return v;
  f();
}, wN = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const a = i;
      if ((a + 2 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const c = TN(t)(n)(a)(e);
      if (c.tag === "Just") {
        s = !1, u = c._1;
        continue;
      }
      if (c.tag === "Nothing") {
        i = a + 1 | 0;
        continue;
      }
      f();
    }
    return u;
  })(0);
}, NN = (t) => {
  const n = (e) => {
    let r = e, o = !0, i;
    for (; o; ) {
      const s = r, u = zs(Ds(vN(t)(wN(t)(s))));
      if (u.length < s.length) {
        r = u;
        continue;
      }
      o = !1, i = u;
    }
    return i;
  };
  return (e) => n(zs(Ds(e)));
}, JN = (t) => (n) => (e) => (r) => {
  const o = Fn(e)(r), i = Gn(e)(r), s = ht((a) => n >= a.y && n < a.y + a.h && a.x + a.w > o && a.x < i, t);
  if (r > e) {
    const a = It((c) => (l) => it.compare(c.x)(l.x))(s);
    return 0 < a.length ? a[0].x - 1 : (e + r) / 2;
  }
  const u = It((a) => (c) => it.compare(c.x)(a.x))(B((a) => ({ ...a, x: a.x + a.w }))(s));
  return 0 < u.length ? u[0].x + 1 : (e + r) / 2;
}, CN = (t) => (n) => (e) => (r) => {
  const o = Fn(e)(r), i = Gn(e)(r), s = ht((a) => n >= a.x && n < a.x + a.w && a.y + a.h > o && a.y < i, t);
  if (r > e) {
    const a = It((c) => (l) => it.compare(c.y)(l.y))(s);
    return 0 < a.length ? a[0].y - 1 : (e + r) / 2;
  }
  const u = It((a) => (c) => it.compare(c.y)(a.y))(B((a) => ({ ...a, y: a.y + a.h }))(s));
  return 0 < u.length ? u[0].y + 1 : (e + r) / 2;
}, bN = (t) => (n) => (e) => (r) => {
  const o = Fn(e)(r), i = Gn(e)(r), s = ht((a) => n >= a.y && n < a.y + a.h && a.x + a.w > o && a.x < i, t);
  if (r > e) {
    const a = It((c) => (l) => it.compare(l.x)(c.x))(B((c) => ({ ...c, x: c.x + c.w }))(s));
    return 0 < a.length ? a[0].x : (e + r) / 2;
  }
  const u = It((a) => (c) => it.compare(a.x)(c.x))(s);
  return 0 < u.length ? u[0].x - 1 : (e + r) / 2;
}, kN = (t) => (n) => (e) => (r) => {
  const o = Fn(e)(r), i = Gn(e)(r), s = ht((a) => n >= a.x && n < a.x + a.w && a.y + a.h > o && a.y < i, t);
  if (r > e) {
    const a = It((c) => (l) => it.compare(l.y)(c.y))(B((c) => ({ ...c, y: c.y + c.h }))(s));
    return 0 < a.length ? a[0].y : (e + r) / 2;
  }
  const u = It((a) => (c) => it.compare(a.y)(c.y))(s);
  return 0 < u.length ? u[0].y - 1 : (e + r) / 2;
}, mh = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const a = r, c = o, l = i;
    if (l > 100) {
      s = !1, u = c;
      continue;
    }
    if (!a(c + l)) {
      s = !1, u = c + l;
      continue;
    }
    if (!a(c - l)) {
      s = !1, u = c - l;
      continue;
    }
    r = a, o = c, i = l + 1;
  }
  return u;
}, jg = (t) => (n) => (e) => (r) => (o) => {
  const i = Fn(n)(e), s = Gn(n)(e);
  if (!vs(i)(s)(r)(t))
    return r;
  if (!vs(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return vs(i)(s)(u)(t) ? mh((a) => vs(i)(s)(a)(t))(u)(1) : u;
}, SN = (t) => (n) => (e) => (r) => (o) => {
  const i = Fn(n)(e), s = Gn(n)(e);
  if (!Ts(i)(s)(r)(t))
    return r;
  if (!Ts(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return Ts(i)(s)(u)(t) ? mh((a) => Ts(i)(s)(a)(t))(u)(1) : u;
}, LN = (t) => (n) => (e) => (r) => {
  const o = Fn(n)(e), i = Gn(n)(e), s = ht((c) => r >= c.x && r < c.x + c.w && c.y + c.h > o && c.y < i, t), u = w((c) => (l) => Gn(c)(l.x + l.w + 4))(r + 4)(s), a = w((c) => (l) => Fn(c)(l.x - 4))(r - 4)(s);
  return (() => {
    const c = u - r, l = a - r;
    return (c < 0 ? -c : c) <= (l < 0 ? -l : l);
  })() ? u : a;
}, EN = (t) => (n) => (e) => (r) => {
  const o = Fn(n)(e), i = Gn(n)(e), s = ht((c) => r >= c.y && r < c.y + c.h && c.x + c.w > o && c.x < i, t), u = w((c) => (l) => Gn(c)(l.y + l.h + 4))(r + 4)(s), a = w((c) => (l) => Fn(c)(l.y - 4))(r - 4)(s);
  return (() => {
    const c = u - r, l = a - r;
    return (c < 0 ? -c : c) <= (l < 0 ? -l : l);
  })() ? u : a;
}, PN = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
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
  })(), a = (() => {
    if (i === "South")
      return b(s._1, s._2 + 4);
    if (i === "North")
      return b(s._1, s._2 - 4);
    if (i === "East")
      return b(s._1 + 4, s._2);
    if (i === "West")
      return b(s._1 - 4, s._2);
    f();
  })(), c = (N, C, S) => !fa(n)(Fn(C)(S))(Gn(C)(S))(N), l = (N, C, S) => !fa(e)(Fn(C)(S))(Gn(C)(S))(N), _ = (N, C, S, P) => t.tag === "Just" && !Cs(e)(Fn(N)(C))(Gn(N)(C))(t._1) ? t._1 : SN(n)(N)(C)(S)(P), d = (N, C, S, P) => {
    if (N === S) {
      const Q = LN(n)(C)(P)(N), W = CN(n)(N)(C)(P), D = kN(n)(N)(C)(P);
      return [
        { start: b(N, C), end: b(N, W), direction: xn },
        { start: b(N, W), end: b(Q, W), direction: yn },
        { start: b(Q, W), end: b(Q, D), direction: xn },
        { start: b(Q, D), end: b(S, D), direction: yn },
        { start: b(S, D), end: b(S, P), direction: xn }
      ];
    }
    const E = _(N, S, C, P);
    return [
      { start: b(N, C), end: b(N, E), direction: xn },
      { start: b(N, E), end: b(S, E), direction: yn },
      { start: b(S, E), end: b(S, P), direction: xn }
    ];
  }, g = (N, C, S, P) => {
    if (C === P) {
      const Q = EN(n)(N)(S)(C), W = JN(n)(C)(N)(S), D = bN(n)(C)(N)(S);
      return [
        { start: b(N, C), end: b(W, C), direction: yn },
        { start: b(W, C), end: b(W, Q), direction: xn },
        { start: b(W, Q), end: b(D, Q), direction: yn },
        { start: b(D, Q), end: b(D, P), direction: xn },
        { start: b(D, P), end: b(S, P), direction: yn }
      ];
    }
    const E = jg(n)(C)(P)(N)(S);
    return [
      { start: b(N, C), end: b(E, C), direction: yn },
      { start: b(E, C), end: b(E, P), direction: xn },
      { start: b(E, P), end: b(S, P), direction: yn }
    ];
  }, p = (N, C, S) => !Cs(n)(Fn(C)(S))(Gn(C)(S))(N), m = (N, C, S) => !Cs(e)(Fn(C)(S))(Gn(C)(S))(N), h = (N, C, S, P) => {
    if (m(C, N, S) && l(S, C, P))
      return [
        { start: b(N, C), end: b(S, C), direction: yn },
        { start: b(S, C), end: b(S, P), direction: xn }
      ];
    const E = jg(n)(C)(P)(N)(S);
    return [
      { start: b(N, C), end: b(E, C), direction: yn },
      { start: b(E, C), end: b(E, P), direction: xn },
      { start: b(E, P), end: b(S, P), direction: yn }
    ];
  }, $ = (N, C, S, P) => {
    if (l(N, C, P) && m(P, N, S))
      return [
        { start: b(N, C), end: b(N, P), direction: xn },
        { start: b(N, P), end: b(S, P), direction: yn }
      ];
    const E = _(N, S, C, P);
    return [
      { start: b(N, C), end: b(N, E), direction: xn },
      { start: b(N, E), end: b(S, E), direction: yn },
      { start: b(S, E), end: b(S, P), direction: xn }
    ];
  }, x = (() => {
    if (r === "South")
      return i === "North" ? u._1 === a._1 && c(u._1, u._2, a._2) ? [{ start: b(u._1, u._2), end: b(a._1, a._2), direction: xn }] : d(u._1, u._2, a._1, a._2) : i === "East" || i === "West" ? $(u._1, u._2, a._1, a._2) : d(u._1, u._2, a._1, a._2);
    if (r === "North")
      return i === "South" ? u._1 === a._1 && c(u._1, u._2, a._2) ? [{ start: b(u._1, u._2), end: b(a._1, a._2), direction: xn }] : d(u._1, u._2, a._1, a._2) : i === "East" || i === "West" ? $(u._1, u._2, a._1, a._2) : d(u._1, u._2, a._1, a._2);
    if (r === "East")
      return i === "West" ? u._2 === a._2 && p(u._2, u._1, a._1) ? [{ start: b(u._1, u._2), end: b(a._1, a._2), direction: yn }] : g(u._1, u._2, a._1, a._2) : i === "North" || i === "South" ? h(u._1, u._2, a._1, a._2) : d(u._1, u._2, a._1, a._2);
    if (r === "West") {
      if (i === "East")
        return u._2 === a._2 && p(u._2, u._1, a._1) ? [{ start: b(u._1, u._2), end: b(a._1, a._2), direction: yn }] : g(u._1, u._2, a._1, a._2);
      if (i === "North" || i === "South")
        return h(u._1, u._2, a._1, a._2);
    }
    return d(u._1, u._2, a._1, a._2);
  })(), y = (() => {
    if (r === "South" || r === "North")
      return xn;
    if (r === "East" || r === "West")
      return yn;
    f();
  })(), J = {
    start: b(a._1, a._2),
    end: b(s._1, s._2),
    direction: (() => {
      if (i === "South" || i === "North")
        return xn;
      if (i === "East" || i === "West")
        return yn;
      f();
    })()
  };
  return u._1 === a._1 && u._2 === a._2 ? [{ start: b(o._1, o._2), end: b(s._1, s._2), direction: y }] : yN({ start: b(o._1, o._2), end: b(u._1, u._2), direction: y })(x)(J);
}, AN = /* @__PURE__ */ B((t) => ({ x: t.position._1 * Cu - 2, y: t.position._2 * Cu - 2, w: t.size._1 * Cu + 4, h: t.size._2 * Cu + 4 })), $h = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ai = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, RN = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ke);
  return (n) => t(ge("IterNode", n, Ue));
})(), Pf = (t) => (n) => t.gapTop + 1 * V(4) + V(n) * 2.5 * V(4), FN = (t) => (n) => {
  const e = $h(n.edge.id)(t);
  if (e.tag === "Just") {
    if (e._1.partner.tag === "Just")
      return T("Just", { slot1Y: Pf(e._1)(e._1.slot), splitX: e._1.partner._1.splitX, slot2Y: Pf(e._1)(e._1.partner._1.slot) });
    if (e._1.partner.tag === "Nothing")
      return v;
    f();
  }
  if (e.tag === "Nothing")
    return v;
  f();
}, GN = (t) => (n) => {
  const e = w((r) => (o) => tt(F)(o.node)(o)(r))(G)(n);
  return Ee(Xt((r) => (o) => {
    const i = Ai(o.node)(e);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just") {
      const s = i._1;
      return Xt((u) => (a) => {
        const c = o.edges.length, l = V(4), _ = s.position._1 * l, d = s.position._2 * l, g = s.size._2 * l, p = V((2 * c | 0) + 1 | 0), m = d + g * V(c - u | 0) / p, h = d + g * V((c + 1 | 0) + u | 0) / p, $ = _ - l * 2.5 * V(u + 1 | 0), x = [
          { start: b(_, m), end: b($, m), direction: yn },
          { start: b($, m), end: b($, h), direction: xn },
          { start: b($, h), end: b(_, h), direction: yn }
        ];
        return { edge: a.id, segments: x, bends: Ln((y) => (J) => y.end, x, At(1, 3, x)), bendType: [], jumps: [], reversed: !1 };
      })(o.edges);
    }
    f();
  })(B((r) => ({ node: r._1, edges: r._2 }))(RN(w((r) => (o) => Wt(F)(Nn)(o.from.node)([
    o
  ])(r))(G)(t)))));
}, IN = (t) => (n) => {
  const e = w((i) => (s) => tt(F)(s.node)(s)(i))(G)(n), r = (i) => {
    const s = Ai(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.position._1;
    f();
  }, o = (i) => {
    const s = Ai(i)(e);
    if (s.tag === "Nothing")
      return 0;
    if (s.tag === "Just")
      return s._1.layer;
    f();
  };
  return It((i) => (s) => {
    const u = st.compare(o(i.edge.from.node))(o(s.edge.from.node));
    if (u === "EQ") {
      const a = it.compare(r(i.edge.from.node))(r(s.edge.from.node));
      return a === "EQ" ? it.compare(r(i.edge.to.node))(r(s.edge.to.node)) : a;
    }
    return u;
  })(t);
}, $e = (t) => {
  const n = V(4);
  return { x: t.position._1 * n - 2, y: t.position._2 * n - 2, w: t.size._1 * n + 4, h: t.size._2 * n + 4 };
}, BN = (t) => t.from.node === t.to.node, DN = (t) => (n) => (e) => (r) => {
  const o = NN(e)(PN(t)(n)(e)(r.fromSide)(r.fromPos)(r.toSide)(r.toPos));
  return {
    edge: r.edge.id,
    segments: o,
    bends: Ln((i) => (s) => i.end, o, At(1, o.length, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, zN = (t) => (n) => (e) => (r) => {
  const o = [
    { start: b(r.fromPos._1, r.fromPos._2), end: b(r.fromPos._1, t.slot1Y), direction: xn },
    { start: b(r.fromPos._1, t.slot1Y), end: b(t.splitX, t.slot1Y), direction: yn },
    { start: b(t.splitX, t.slot1Y), end: b(t.splitX, t.slot2Y), direction: xn },
    { start: b(t.splitX, t.slot2Y), end: b(r.toPos._1, t.slot2Y), direction: yn },
    { start: b(r.toPos._1, t.slot2Y), end: b(r.toPos._1, r.toPos._2), direction: xn }
  ];
  return {
    edge: r.edge.id,
    segments: o,
    bends: Ln((i) => (s) => i.end, o, At(1, 5, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, HN = (t) => (n) => (e) => {
  const r = Ai(t.edge.from.node)(e);
  if (r.tag === "Just") {
    const i = Ai(t.edge.to.node)(e);
    return i.tag === "Just" ? ht(
      (s) => !(s.h === $e(r._1).h && s.w === $e(r._1).w && s.x === $e(r._1).x && s.y === $e(r._1).y) && !(s.h === $e(i._1).h && s.w === $e(i._1).w && s.x === $e(i._1).x && s.y === $e(i._1).y),
      n
    ) : ht((s) => !(s.h === $e(r._1).h && s.w === $e(r._1).w && s.x === $e(r._1).x && s.y === $e(r._1).y), n);
  }
  const o = Ai(t.edge.to.node)(e);
  return o.tag === "Just" ? ht((i) => !(i.h === $e(o._1).h && i.w === $e(o._1).w && i.x === $e(o._1).x && i.y === $e(o._1).y), n) : ht((i) => !0, n);
}, QN = (t) => (n) => {
  const e = $h(n.edge.id)(t);
  if (e.tag === "Just")
    return T("Just", Pf(e._1)(e._1.slot));
  if (e.tag === "Nothing")
    return v;
  f();
}, ON = (t) => (n) => (e) => (r) => (o) => {
  const i = w((c) => (l) => tt(F)(l.node)(l)(c))(G)(n), s = AN(n), u = uh(ht((c) => c.from.node !== c.to.node, t))(n)(e)(r)(o), a = ih(u)(n);
  return [
    ...GN(ht(BN, t))(n),
    ...w((c) => (l) => {
      const _ = HN(l)(s)(i), d = [..._, ...c.edgeObstacles], g = FN(a)(l), p = (() => {
        if (g.tag === "Just")
          return zN(g._1)(_)(d)(l);
        if (g.tag === "Nothing")
          return DN(QN(a)(l))(_)(d)(l);
        f();
      })();
      return { results: [...c.results, p], edgeObstacles: [...c.edgeObstacles, ...$N(p.segments)] };
    })({ results: [], edgeObstacles: [] })(IN(u)(n)).results
  ];
}, _o = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ho = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, WN = (t) => (n) => (e) => {
  if (t.start._1 !== n.start._1)
    return v;
  const r = ho(_o(t.start._2)(t.end._2))(_o(n.start._2)(n.end._2)), o = _o(ho(t.start._2)(t.end._2))(ho(n.start._2)(n.end._2));
  return r < o ? T("Just", { position: b(t.start._1, (r + o) / 2), crossingEdge: e }) : v;
}, qN = (t) => (n) => (e) => {
  if (t.start._2 !== n.start._2)
    return v;
  const r = ho(_o(t.start._1)(t.end._1))(_o(n.start._1)(n.end._1)), o = _o(ho(t.start._1)(t.end._1))(ho(n.start._1)(n.end._1));
  return r < o ? T("Just", { position: b((r + o) / 2, t.start._2), crossingEdge: e }) : v;
}, XN = (t) => (n) => (e) => {
  if (t.direction === "H")
    return qN(t)(n)(e);
  if (t.direction === "V")
    return WN(t)(n)(e);
  f();
}, YN = (t) => (n) => (e) => {
  const r = t + 1 | 0, o = r < 1 ? e : At(r, e.length, e);
  return wt(n.segments)((i) => wt(o)((s) => bt((u) => XN(i)(u)(s.edge))(ht(
    (u) => u.direction === "H" ? i.direction === "H" : u.direction === "V" && i.direction === "V",
    s.segments
  ))));
}, MN = (t) => (n) => (e) => n.start._1 > _o(t.start._1)(t.end._1) && n.start._1 < ho(t.start._1)(t.end._1) && t.start._2 > _o(n.start._2)(n.end._2) && t.start._2 < ho(n.start._2)(n.end._2) ? T("Just", { position: b(n.start._1, t.start._2), crossingEdge: e }) : v, UN = (t) => (n) => wt(ht((e) => e.direction === "H", t.segments))((e) => wt(n)((r) => bt((o) => MN(e)(o)(r.edge))(ht(
  (o) => o.direction === "V",
  r.segments
)))), KN = (t) => (n) => (e) => [
  ...UN(n)(ht((r) => r.edge !== n.edge, e)),
  ...YN(t)(n)(e)
], yh = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, VN = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(G), la = (t) => (e) => {
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
}, jN = /* @__PURE__ */ jd(F), wr = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Zg = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Yc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
}, ZN = /* @__PURE__ */ pn(st)(Yt), tJ = (t) => (n) => Yn(F.compare, Xn, t, n), xh = /* @__PURE__ */ Xt((t) => (n) => ({ src: n.src, tgt: n.tgt, delta: 1, weight: 1, eid: t })), nJ = (t) => w((n) => (e) => ({
  base: (() => {
    const r = (o) => (i) => {
      let s = o, u = i, a = !0, c;
      for (; a; ) {
        const l = s, _ = u;
        if (_.tag === "Nil") {
          a = !1, c = l;
          continue;
        }
        if (_.tag === "Cons") {
          s = yh(l)(_._1), u = _._2;
          continue;
        }
        f();
      }
      return c;
    };
    return (n.base + r(0)((() => {
      const o = (i, s) => {
        if (i.tag === "Leaf")
          return s;
        if (i.tag === "Node")
          return o(i._5, kt("Cons", i._4, o(i._6, s)));
        f();
      };
      return o(e, Y);
    })()) | 0) + 1 | 0;
  })(),
  result: [
    ...n.result,
    (() => {
      if (n.base === 0)
        return e;
      const r = (o) => {
        if (o.tag === "Leaf")
          return G;
        if (o.tag === "Node")
          return Zt("Node", o._1, o._2, o._3, o._4 + n.base | 0, r(o._5), r(o._6));
        f();
      };
      return r(e);
    })()
  ]
}))({ base: 0, result: [] })(t).result, eJ = (t) => (n) => {
  const e = VN(t);
  return jN(t)(xh(ht((r) => la(r.src)(e) && la(r.tgt)(e), n)));
}, rJ = (t) => (n) => {
  const e = w((o) => (i) => Wt(F)(Nn)(i.tgt)([i.src])(Wt(F)(Nn)(i.src)([
    i.tgt
  ])(o)))(G)(n), r = (o) => (i) => (s) => {
    let u = o, a = i, c = s, l = !0, _;
    for (; l; ) {
      const d = u, g = a, p = c, m = Ht((h) => v, (h) => ($) => T("Just", { head: h, tail: $ }), d);
      if (m.tag === "Nothing") {
        l = !1, _ = { nodes: p };
        continue;
      }
      if (m.tag === "Just") {
        if (la(m._1.head)(g)) {
          u = m._1.tail, a = g, c = p;
          continue;
        }
        u = [
          ...m._1.tail,
          ...(() => {
            const h = wr(m._1.head)(e);
            if (h.tag === "Nothing")
              return [];
            if (h.tag === "Just")
              return h._1;
            f();
          })()
        ], a = tt(F)(m._1.head)()(g), c = [...p, m._1.head];
        continue;
      }
      f();
    }
    return _;
  };
  return w((o) => (i) => {
    if (la(i)(o.visited))
      return o;
    const s = r([i])(o.visited)([]);
    return {
      ...o,
      visited: w((u) => (a) => tt(F)(a)()(u))(o.visited)(s.nodes),
      components: [...o.components, s.nodes]
    };
  })({ visited: G, components: [] })(t).components;
}, oJ = (t) => (n) => (e) => {
  const r = w((i) => (s) => Wt(F)(bn)(s.tgt)(1)(i))(G)(n), o = w((i) => (s) => Wt(F)(bn)(s.src)(1)(i))(G)(n);
  return w((i) => (s) => {
    const u = wr(s)(r), a = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      f();
    })();
    if ((() => {
      const x = wr(s)(o);
      return (() => {
        if (x.tag === "Nothing")
          return a !== 0;
        if (x.tag === "Just")
          return a !== x._1;
        f();
      })() || a === 0;
    })())
      return i;
    const c = wr(s)(i.layers), l = (() => {
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    })(), _ = i.layers, d = w((x) => (y) => y.tgt === s ? {
      ...x,
      mIn: Zg(x.mIn)((() => {
        const J = wr(s)(_), N = wr(y.src)(_);
        return (() => {
          if (J.tag === "Nothing")
            return 0;
          if (J.tag === "Just")
            return J._1;
          f();
        })() - (() => {
          if (N.tag === "Nothing")
            return 0;
          if (N.tag === "Just")
            return N._1;
          f();
        })() | 0;
      })())
    } : y.src === s ? {
      ...x,
      mOut: Zg(x.mOut)((() => {
        const J = wr(y.tgt)(_), N = wr(s)(_);
        return (() => {
          if (J.tag === "Nothing")
            return 0;
          if (J.tag === "Just")
            return J._1;
          f();
        })() - (() => {
          if (N.tag === "Nothing")
            return 0;
          if (N.tag === "Just")
            return N._1;
          f();
        })() | 0;
      })())
    } : x)({ mIn: 1e9, mOut: 1e9 })(n), g = d.mIn === 1e9 ? -1 : d.mIn, p = d.mOut === 1e9 ? -1 : d.mOut;
    if (g < 0 || p < 0)
      return i;
    const m = (l - g | 0) + 1 | 0, h = (l + p | 0) - 1 | 0;
    if (h < m)
      return i;
    const $ = w((x) => (y) => {
      const J = Yc(y)(i.filling), N = (() => {
        if (J.tag === "Nothing")
          return 0;
        if (J.tag === "Just")
          return J._1;
        f();
      })();
      return N < x.bestFill ? { best: y, bestFill: N } : x;
    })({
      best: l,
      bestFill: (() => {
        const x = Yc(l)(i.filling);
        if (x.tag === "Nothing")
          return 0;
        if (x.tag === "Just")
          return x._1;
        f();
      })()
    })(Vt(m, h));
    return $.best === l ? i : {
      layers: tt(F)(s)($.best)(i.layers),
      filling: tt(st)(l)((() => {
        const x = Yc(l)(i.filling);
        if (x.tag === "Nothing")
          return -1;
        if (x.tag === "Just")
          return x._1 - 1 | 0;
        f();
      })())(tt(st)($.best)($.bestFill + 1 | 0)(i.filling))
    };
  })({
    layers: e,
    filling: ZN(B((i) => b(
      i,
      w((s) => (u) => (() => {
        const a = wr(u)(e);
        return a.tag === "Nothing" ? !1 : a.tag === "Just" && a._1 === i;
      })() ? s + 1 | 0 : s)(0)(t)
    ))(Vt(
      0,
      w((i) => (s) => yh(i)((() => {
        const u = wr(s)(e);
        if (u.tag === "Nothing")
          return 0;
        if (u.tag === "Just")
          return u._1;
        f();
      })()))(0)(t)
    )))
  })(t).layers;
}, iJ = (t) => (n) => oJ(t)(xh(n))(w(tJ)(G)(nJ(B((e) => eJ(e)(n))(rJ(t)(n))))), sJ = (t) => t, qo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, ga = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, vh = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ke);
  return (n) => t(ge("IterNode", n, Ue));
})(), uJ = /* @__PURE__ */ sJ("NetworkSimplex"), aJ = (t) => (n) => w((e) => (r) => {
  const o = w(ga)(0)(bt((i) => qo(i)(e))(r));
  return w((i) => (s) => tt(F)(s)(o)(i))(e)(r);
})(n)(t), cJ = (t) => (n) => ({
  layers: B((e) => ht(
    (r) => {
      const o = qo(r)(n);
      return o.tag === "Nothing" ? !1 : o.tag === "Just" && o._1 === e;
    },
    t
  ))(Vt(
    0,
    ((r) => (o) => {
      let i = r, s = o, u = !0, a;
      for (; u; ) {
        const c = i, l = s;
        if (l.tag === "Nil") {
          u = !1, a = c;
          continue;
        }
        if (l.tag === "Cons") {
          i = ga(c)(l._1), s = l._2;
          continue;
        }
        f();
      }
      return a;
    })(0)((() => {
      const r = (o, i) => {
        if (o.tag === "Leaf")
          return i;
        if (o.tag === "Node")
          return r(o._5, kt("Cons", o._4, r(o._6, i)));
        f();
      };
      return r(n, Y);
    })())
  )),
  nodeLayer: n
}), fJ = (t) => (n) => (e) => {
  const r = w((o) => (i) => tt(F)(i)(!0)(o))(G)(n);
  return w((o) => (i) => tt(F)(i._1)(i._2)(o))(iJ(n)(bt((o) => o.from.node === o.to.node || (() => {
    const i = qo(o.from.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() || (() => {
    const i = qo(o.to.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() ? v : T("Just", { src: o.from.node, tgt: o.to.node }))(t)))(vh(e));
}, lJ = (t) => (n) => (e) => (r) => {
  const o = (a) => (c) => {
    const l = qo(c)(a);
    if (l.tag === "Just")
      return a;
    if (l.tag === "Nothing") {
      const _ = ht(
        (g) => g !== c,
        (() => {
          const g = qo(c)(t);
          if (g.tag === "Nothing")
            return [];
          if (g.tag === "Just")
            return g._1;
          f();
        })()
      ), d = w(o)(a)(_);
      return tt(F)(c)(1 + w(ga)(0)(bt((g) => qo(g)(d))(_)) | 0)(d);
    }
    f();
  }, i = w(o)(G)(e), u = ((a) => (c) => {
    let l = a, _ = c, d = !0, g;
    for (; d; ) {
      const p = l, m = _;
      if (m.tag === "Nil") {
        d = !1, g = p;
        continue;
      }
      if (m.tag === "Cons") {
        l = ga(p)(m._1), _ = m._2;
        continue;
      }
      f();
    }
    return g;
  })(1)((() => {
    const a = (c, l) => {
      if (c.tag === "Leaf")
        return l;
      if (c.tag === "Node")
        return a(c._5, kt("Cons", c._4, a(c._6, l)));
      f();
    };
    return a(i, Y);
  })());
  return w((a) => (c) => tt(F)(c._1)(c._2)(a))((() => {
    const a = (c) => {
      if (c.tag === "Leaf")
        return G;
      if (c.tag === "Node")
        return Zt("Node", c._1, c._2, c._3, u - c._4 | 0, a(c._5), a(c._6));
      f();
    };
    return a(i);
  })())(vh(r));
}, gJ = /* @__PURE__ */ w((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return tt(F)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return tt(F)(n._1.node)(0)(t);
  }
  return t;
})(G), _J = /* @__PURE__ */ w((t) => (n) => Wt(F)(Nn)(n.to.node)([n.from.node])(t))(G), dJ = /* @__PURE__ */ w((t) => (n) => Wt(F)(Nn)(n.from.node)([n.to.node])(t))(G), hJ = (t) => (n) => (e) => (r) => {
  const o = dJ(e), i = _J(e), s = gJ(n);
  return cJ(r)(aJ(bt((u) => u.tag === "SameLayer" ? T("Just", u._1.nodes) : v)(n))((() => {
    if (t === "LongestPath")
      return lJ(o)(i)(r)(s);
    if (t === "NetworkSimplex")
      return fJ(e)(r)(s);
    f();
  })()));
}, pJ = /* @__PURE__ */ pn(F)(Yt), mJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, t_ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, n_ = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Hs = /* @__PURE__ */ pn(F)(Yt), $J = /* @__PURE__ */ pn(F)(Yt), e_ = /* @__PURE__ */ (() => {
  const t = B((n) => ({ start: n.end, end: n.start, direction: n.direction }));
  return (n) => fn(t(n));
})(), yJ = (t) => (n) => (e) => (r) => {
  const o = pJ(B((s) => b(s.edge, s))(r)), i = (s) => 0 < s.nodes.length && (() => {
    const u = mJ(s.edgeId)(e);
    return u.tag === "Just" && s.nodes[0] !== u._1._1;
  })();
  return B((s) => {
    if (s.nodes.length <= 2) {
      const l = t_(s.edgeId)(o);
      if (l.tag === "Just") {
        const _ = i(s), d = zs(Ds(_ ? e_(l._1.segments) : l._1.segments));
        return { ...l._1, edge: s.edgeId, segments: d, bends: Ln((g) => (p) => g.end, d, At(1, d.length, d)), reversed: _ };
      }
      if (l.tag === "Nothing")
        return { edge: s.edgeId, segments: [], bends: [], bendType: [], jumps: [], reversed: !1 };
      f();
    }
    const u = wt(bt((l) => t_(l)(o))(Ln(
      (l) => (_) => s.edgeId + ":" + l + "->" + _,
      s.nodes,
      At(1, s.nodes.length, s.nodes)
    )))((l) => l.segments), a = i(s), c = zs(Ds(a ? e_(u) : u));
    return {
      edge: s.edgeId,
      segments: c,
      bends: Ln((l) => (_) => l.end, c, At(1, c.length, c)),
      bendType: [],
      jumps: [],
      reversed: a
    };
  })(t);
}, xJ = { layers: [], edges: [], chains: [] }, vJ = {
  nodeGap: 3,
  layerGap: 2,
  iterations: 8,
  layerer: uJ,
  cycleBreaker: lN,
  compactPostRouting: !0,
  compactionSpacings: _w
}, TJ = (t) => ({
  pos: b(0, 0),
  size: b(
    w((n) => (e) => n_(n)(e.position._1 + e.size._1))(0)(t),
    w((n) => (e) => n_(n)(e.position._2 + e.size._2))(0)(t)
  )
}), wJ = (t) => (n) => (e) => {
  const r = Hs(B((c) => b(c.id, c.ports))(n.nodes)), o = ht((c) => On(3)(c.node) !== "$d:", e.placements), i = yJ(e.withDummies.chains)(e.acyclic.reversedEdges)($J(B((c) => b(
    c.id,
    b(c.from.node, c.to.node)
  ))(n.edges)))(ON(e.withDummies.edges)(e.placements)(r)(e.withDummies.chains)(ah(e.ordered)(ht(
    (c) => c.from.node !== c.to.node,
    e.withDummies.edges
  ))((() => {
    const c = (l) => {
      if (l.tag === "Leaf")
        return G;
      if (l.tag === "Node")
        return Zt("Node", l._1, l._2, l._3, b(l._4._1 * 4, l._4._2), c(l._5), c(l._6));
      f();
    };
    return c(Hs(B((l) => b(l.id, l.size))(n.nodes)));
  })()))), s = t.compactPostRouting ? pw()(t.compactionSpacings)({
    nodes: o,
    edges: n.edges,
    paths: i,
    ports: r
  }) : { nodes: o, edges: i }, u = B((c) => {
    const l = zs(Ds(c.segments));
    return { ...c, segments: l, bends: Ln((_) => (d) => _.end, l, At(1, l.length, l)) };
  })(s.edges), a = Xt((c) => (l) => ({ ...l, jumps: KN(c)(l)(u) }))(u);
  return { nodes: s.nodes, edges: a, boundingBox: TJ(s.nodes), metrics: Qv(s.nodes)(a)(0) };
}, NJ = (t) => (n) => (e) => {
  const r = Hs(B((i) => b(i.id, i.size))(n.nodes)), o = {
    ...e,
    placements: Mw({ nodeGap: t.nodeGap, layerGap: t.layerGap })(n.constraints)(e.ordered)(r)(Hs(B((i) => b(
      i.id,
      i.ports
    ))(n.nodes)))(e.withDummies.edges)(e.withDummies.chains)(ah(e.ordered)(e.withDummies.edges)((() => {
      const i = (s) => {
        if (s.tag === "Leaf")
          return G;
        if (s.tag === "Node")
          return Zt("Node", s._1, s._2, s._3, b(s._4._1 * 4, s._4._2), i(s._5), i(s._6));
        f();
      };
      return i(r);
    })()))
  };
  return { pipeline: o, result: wJ(t)(n)(o) };
}, JJ = (t) => (n) => (e) => NJ(t)(n)({
  ...e,
  ordered: uN({
    iterations: t.iterations,
    constraints: n.constraints,
    modelOrder: Hs(Xt((r) => (o) => b(o.id, r))(n.nodes))
  })(e.withDummies.layers)(e.withDummies.edges)
}), CJ = (t) => (n) => (e) => JJ(t)(n)({
  ...e,
  withDummies: mw(e.layered.nodeLayer)(e.acyclic.edges)(e.layered.layers)
}), bJ = (t) => (n) => {
  const e = B((o) => o.id)(n.nodes), r = mN(t.cycleBreaker)(e)(n.constraints)(n.edges);
  return CJ(t)(n)({
    acyclic: r,
    layered: hJ(t.layerer)(n.constraints)(r.edges)(e),
    withDummies: xJ,
    ordered: [],
    placements: []
  });
}, Th = (t) => t, wh = /* @__PURE__ */ Th("RunText"), kJ = /* @__PURE__ */ Th("RunCode"), Nh = (t) => (n) => (e) => n.length === 0 ? e : St(e)({ style: t, text: To(n) }), SJ = (t) => ({
  style: (() => {
    if (t.style === "RunText")
      return kJ;
    if (t.style === "RunCode")
      return wh;
    f();
  })(),
  buf: [],
  runs: Nh(t.style)(t.buf)(t.runs)
}), LJ = (t) => (n) => 0 < n.length ? { ...t, buf: St(t.buf)(n[0]) } : { ...t, buf: St(t.buf)("\\") }, EJ = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, a = Ht((c) => v, (c) => (l) => T("Just", { head: c, tail: l }), r);
    if (a.tag === "Nothing") {
      o = !1, i = s;
      continue;
    }
    if (a.tag === "Just") {
      if (a._1.head === "\\") {
        e = LJ(s)(a._1.tail), r = At(1, a._1.tail.length, a._1.tail);
        continue;
      }
      if (a._1.head === "`") {
        e = SJ(s), r = a._1.tail;
        continue;
      }
      e = { ...s, buf: St(s.buf)(a._1.head) }, r = a._1.tail;
      continue;
    }
    f();
  }
  return i;
}, Jh = (t) => {
  const n = EJ({ style: wh, buf: [], runs: [] })(Ir(t));
  return Nh(n.style)(n.buf)(n.runs);
};
let bu = null;
function PJ() {
  return bu || (typeof document > "u" ? null : (bu = document.createElement("canvas").getContext("2d"), bu));
}
const r_ = /* @__PURE__ */ new Map(), AJ = (t) => (n) => (e) => (r) => () => {
  const o = `${e} ${n}px ${t}|${r}`, i = r_.get(o);
  if (i !== void 0) return i;
  const s = PJ();
  if (!s)
    return r.length * n * 0.62;
  s.font = `${e} ${n}px ${t}`;
  const u = s.measureText(r).width;
  return r_.set(o, u), u;
}, RJ = vo.traverse(ii), FJ = /* @__PURE__ */ w(gr)(0), ti = /* @__PURE__ */ (() => {
  const t = er(`\r
`)(" "), n = er(`
`)(" "), e = (() => {
    const r = er("\r")(" "), o = (() => {
      const i = er("	")(" ");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), Ch = (t) => (n) => {
  const e = RJ((r) => {
    const o = (() => {
      if (r.style === "RunText")
        return t.text;
      if (r.style === "RunCode")
        return t.code;
      f();
    })();
    return AJ(o.family)(o.size)(o.weight)(ti(r.text));
  })(Jh(ti(n)));
  return () => {
    const r = e();
    return FJ(r);
  };
}, GJ = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: "500" }, IJ = { family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", size: 11, weight: "400" }, bh = { text: GJ, code: IJ }, BJ = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, xi = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, DJ = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, zJ = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, HJ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, o_ = (t) => To(fn(kr((n) => n === " ")(fn(kr((n) => n === " ")(Ir(t)).rest)).rest)), QJ = (t) => w((n) => (e) => e._1 > 0 && (e._2 === " " || e._2 === "-" || e._2 === "_" || e._2 === ".") ? T("Just", e._1) : n)(v)(Xt(Vn)(t)), Af = (t) => (n) => {
  if (t <= 0)
    return [n];
  if (mr(n) <= t)
    return [n];
  const e = Ir(n), r = t < 1 ? [] : At(0, t, e), o = QJ(r);
  if (o.tag === "Just") {
    const i = o_(fg(!(o._1 >= 0 && o._1 < r.length) || r[o._1] === " " ? o._1 : o._1 + 1 | 0)(n)), s = o_(Oi(o._1 + 1 | 0)(n));
    return s === "" ? [i] : [i, ...Af(t)(s)];
  }
  if (o.tag === "Nothing") {
    const i = fg(t)(n), s = Oi(t)(n);
    return s === "" ? [i] : [i, ...Af(t)(s)];
  }
  f();
}, OJ = { cellW: 7, cellH: 3, maxLineWidth: 20 }, WJ = (t) => (n) => {
  const e = B((i) => b(
    (() => {
      if (i.label.tag === "Just")
        return i.label._1;
      if (i.label.tag === "Nothing")
        return i.id;
      f();
    })(),
    i
  ))(n.nodes), r = xi(1)(nr(
    (DJ(t.maxLineWidth)(w((i) => (s) => xi(i)(mr(s._1)))(0)(e)) + 2 | 0) + t.cellW | 0,
    t.cellW
  )), o = (r * t.cellW | 0) - 1 | 0;
  return {
    ...n,
    nodes: B((i) => {
      if (!(i._2.size._1 === 1 && i._2.size._2 === 1))
        return i._2;
      const s = wt(Jo(`
`)(i._1))(Af(o)), u = w((c) => (l) => xi(c)(mr(l)))(0)(s), a = i._2.shape === "Cylinder" ? xi(1)(nr((u + 2 | 0) + t.cellW | 0, t.cellW)) : r;
      return {
        ...i._2,
        size: b(
          V(u > o ? nr((u + 2 | 0) + t.cellW | 0, t.cellW) : a),
          V(xi(1)(nr(s.length + t.cellH | 0, t.cellH)) + (i._2.shape === "Cylinder" || i._2.shape === "Document" ? 1 : 0) | 0)
        )
      };
    })(e)
  };
}, qJ = (t) => (n) => (e) => ({
  ...e,
  nodes: B((r) => {
    const o = HJ(r.id)(n);
    if (o.tag === "Nothing")
      return r;
    if (o.tag === "Just")
      return {
        ...r,
        size: b(
          zJ(r.size._1)(V(xi(1)(dn(za(r.shape === "Cylinder" ? (o._1 + 0) / t : (o._1 + 32) / t))))),
          r.size._2
        )
      };
    f();
  })(e.nodes)
}), oc = (t) => t, XJ = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Po = /* @__PURE__ */ oc("TopSide"), Ao = /* @__PURE__ */ oc("BottomSide"), Ro = /* @__PURE__ */ oc("LeftSide"), Fo = /* @__PURE__ */ oc("RightSide"), YJ = (t) => {
  const n = it.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = it.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, i_ = (t) => (n) => (e) => {
  const r = XJ(t.h * 0.12)(t.w * 0.2), o = t.w / 2;
  return (n < 0 ? t.y + r : t.y + t.h - r) + n * r * ne(YJ((() => {
    const i = (e - (t.x + o)) / o;
    return 1 - i * i;
  })()));
}, ye = (t) => (n) => (e) => (r) => {
  let o = t, i = n, s = e, u = r, a = !0, c;
  for (; a; ) {
    const l = o, _ = i, d = s, g = u;
    if (l === "Rectangle") {
      if (d === "TopSide") {
        a = !1, c = _.y;
        continue;
      }
      if (d === "BottomSide") {
        a = !1, c = _.y + _.h;
        continue;
      }
      if (d === "LeftSide") {
        a = !1, c = _.x;
        continue;
      }
      if (d === "RightSide") {
        a = !1, c = _.x + _.w;
        continue;
      }
      o = Yr, i = _, s = d, u = g;
      continue;
    }
    if (l === "Cylinder") {
      if (d === "TopSide") {
        a = !1, c = i_(_)(-1)(g);
        continue;
      }
      if (d === "BottomSide") {
        a = !1, c = i_(_)(1)(g);
        continue;
      }
      if (d === "LeftSide") {
        a = !1, c = _.x;
        continue;
      }
      if (d === "RightSide") {
        a = !1, c = _.x + _.w;
        continue;
      }
    }
    o = Yr, i = _, s = d, u = g;
  }
  return c;
}, s_ = (t) => (n) => {
  const e = n.y - t.y, r = e < 0 ? -e : e, o = n.x - (t.x + t.w), i = o < 0 ? -o : o, s = n.x - t.x, u = s < 0 ? -s : s, a = n.y - (t.y + t.h), c = a < 0 ? -a : a;
  return r <= c && r <= u && r <= i ? Po : c <= u && c <= i ? Ao : u <= i ? Ro : Fo;
}, MJ = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ke);
  return (n) => t(ge("IterNode", n, Ue));
})(), ol = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Qs = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Os = /* @__PURE__ */ pn(F)(Yt), UJ = (t) => (e) => {
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
}, KJ = (t) => (e) => {
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
}, VJ = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(G), jJ = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(G), ic = vo.traverse(ii), _a = /* @__PURE__ */ pn(F)(Yt), ZJ = (t) => (n) => Yn(F.compare, Xn, t, n), tC = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(G), nC = /* @__PURE__ */ pn(F)(Yt), eC = (t) => (n) => Yn(F.compare, Xn, t, n), rC = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, u_ = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, oC = (t) => (n) => ({
  ...n,
  edges: Os(B((e) => b(
    e._1,
    (() => {
      const r = ol(e._1)(t);
      if (r.tag === "Nothing")
        return e._2;
      if (r.tag === "Just") {
        const o = Qs(r._1._2)(n.nodes), i = Qs(r._1._1)(n.nodes), s = (() => {
          if (i.tag === "Nothing")
            return e._2;
          if (i.tag === "Just") {
            const u = Ht((a) => v, (a) => (c) => T("Just", { head: a, tail: c }), e._2);
            if (u.tag === "Nothing")
              return e._2;
            if (u.tag === "Just")
              return [
                (() => {
                  const a = Ht((d) => v, (d) => (g) => T("Just", { head: d, tail: g }), u._1.tail), c = a.tag === "Just" ? T("Just", a._1.head) : v, l = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, _ = (() => {
                    if (c.tag === "Just") {
                      if ((c._1.x > u._1.head.x ? c._1.x - u._1.head.x < 0.5 : u._1.head.x - c._1.x < 0.5) && u._1.head.x >= l.x - 0.5 && u._1.head.x <= l.x + l.w + 0.5)
                        return c._1.y >= l.y + l.h ? T("Just", Ao) : c._1.y <= l.y ? T("Just", Po) : v;
                      if ((c._1.y > u._1.head.y ? c._1.y - u._1.head.y < 0.5 : u._1.head.y - c._1.y < 0.5) && u._1.head.y >= l.y - 0.5 && u._1.head.y <= l.y + l.h + 0.5) {
                        if (c._1.x >= l.x + l.w)
                          return T("Just", Fo);
                        if (c._1.x <= l.x)
                          return T("Just", Ro);
                      }
                      return v;
                    }
                    if (c.tag === "Nothing")
                      return v;
                    f();
                  })();
                  if (_.tag === "Just") {
                    if (_._1 === "TopSide")
                      return { ...u._1.head, y: ye(i._1.shape)(l)(Po)(u._1.head.x) };
                    if (_._1 === "BottomSide")
                      return { ...u._1.head, y: ye(i._1.shape)(l)(Ao)(u._1.head.x) };
                    if (_._1 === "LeftSide")
                      return { ...u._1.head, x: ye(i._1.shape)(l)(Ro)(u._1.head.y) };
                    if (_._1 === "RightSide")
                      return { ...u._1.head, x: ye(i._1.shape)(l)(Fo)(u._1.head.y) };
                    f();
                  }
                  if (_.tag === "Nothing") {
                    const d = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, g = s_(d)(u._1.head);
                    if (g === "TopSide")
                      return { ...u._1.head, y: ye(i._1.shape)(d)(Po)(u._1.head.x) };
                    if (g === "BottomSide")
                      return { ...u._1.head, y: ye(i._1.shape)(d)(Ao)(u._1.head.x) };
                    if (g === "LeftSide")
                      return { ...u._1.head, x: ye(i._1.shape)(d)(Ro)(u._1.head.y) };
                    if (g === "RightSide")
                      return { ...u._1.head, x: ye(i._1.shape)(d)(Fo)(u._1.head.y) };
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
          const u = qe(s);
          if (u.tag === "Nothing")
            return s;
          if (u.tag === "Just")
            return St(u._1.init)((() => {
              const a = qe(u._1.init), c = a.tag === "Just" ? T("Just", a._1.last) : v, l = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, _ = (() => {
                if (c.tag === "Just") {
                  if ((c._1.x > u._1.last.x ? c._1.x - u._1.last.x < 0.5 : u._1.last.x - c._1.x < 0.5) && u._1.last.x >= l.x - 0.5 && u._1.last.x <= l.x + l.w + 0.5)
                    return c._1.y >= l.y + l.h ? T("Just", Ao) : c._1.y <= l.y ? T("Just", Po) : v;
                  if ((c._1.y > u._1.last.y ? c._1.y - u._1.last.y < 0.5 : u._1.last.y - c._1.y < 0.5) && u._1.last.y >= l.y - 0.5 && u._1.last.y <= l.y + l.h + 0.5) {
                    if (c._1.x >= l.x + l.w)
                      return T("Just", Fo);
                    if (c._1.x <= l.x)
                      return T("Just", Ro);
                  }
                  return v;
                }
                if (c.tag === "Nothing")
                  return v;
                f();
              })();
              if (_.tag === "Just") {
                if (_._1 === "TopSide")
                  return { ...u._1.last, y: ye(o._1.shape)(l)(Po)(u._1.last.x) };
                if (_._1 === "BottomSide")
                  return { ...u._1.last, y: ye(o._1.shape)(l)(Ao)(u._1.last.x) };
                if (_._1 === "LeftSide")
                  return { ...u._1.last, x: ye(o._1.shape)(l)(Ro)(u._1.last.y) };
                if (_._1 === "RightSide")
                  return { ...u._1.last, x: ye(o._1.shape)(l)(Fo)(u._1.last.y) };
                f();
              }
              if (_.tag === "Nothing") {
                const d = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, g = s_(d)(u._1.last);
                if (g === "TopSide")
                  return { ...u._1.last, y: ye(o._1.shape)(d)(Po)(u._1.last.x) };
                if (g === "BottomSide")
                  return { ...u._1.last, y: ye(o._1.shape)(d)(Ao)(u._1.last.x) };
                if (g === "LeftSide")
                  return { ...u._1.last, x: ye(o._1.shape)(d)(Ro)(u._1.last.y) };
                if (g === "RightSide")
                  return { ...u._1.last, x: ye(o._1.shape)(d)(Fo)(u._1.last.y) };
              }
              f();
            })());
        }
      }
      f();
    })()
  ))(MJ(n.edges)))
}), iC = (t) => (n) => (e) => {
  const r = en((o) => o.id === e)(t.graph.edges);
  if (r.tag === "Just")
    return T("Just", r._1);
  if (r.tag === "Nothing")
    return ol(e)(n);
  f();
}, sC = (t) => (n) => (e) => (r) => ({
  x: r.position._1 * t,
  y: r.position._2 * t,
  w: r.size._1 * t,
  h: r.size._2 * t,
  label: (() => {
    const o = Qs(r.node)(n);
    if (o.tag === "Just")
      return o._1;
    if (o.tag === "Nothing")
      return r.node;
    f();
  })(),
  shape: (() => {
    const o = Qs(r.node)(e);
    if (o.tag === "Nothing")
      return Yr;
    if (o.tag === "Just")
      return o._1;
    f();
  })()
}), uC = (t) => ({ id: t, size: b(1, 1), ports: [], label: T("Just", t), shape: Yr }), aC = (t) => (n) => (e) => (r) => b(r.node, sC(t)(n)(e)(r)), kh = (t) => {
  const n = Jo(`
`)(t);
  return n.length === 0 ? [""] : n;
}, Sh = (t) => {
  const n = (e, r) => {
    if (e.tag === "Leaf")
      return r;
    if (e.tag === "Node")
      return n(e._5, kt("Cons", e._4, n(e._6, r)));
    f();
  };
  return jt(Jn.foldr, n(t.interiors, Y));
}, cC = (t) => Os(bt((n) => T(
  "Just",
  b(n.edge, { id: n.edge, from: { node: n.from, port: v }, to: { node: n.to, port: v }, label: v })
))(wt(t.scenes)((n) => n.tag === "DataFlow" ? bt((e) => e.kind.tag === "SendToken" ? T("Just", e.kind._1) : v)(n._1.events) : []))), Lh = (t) => {
  const n = Xy(t), e = ht((o) => UJ(o.id)(n.nodes), t.graph.nodes), r = ht((o) => KJ(o.id)(n.edges), t.graph.edges);
  return {
    nodes: [
      ...e,
      ...B(uC)(jt(
        be.foldr,
        lr(F.compare, n.nodes, VJ(B((o) => o.id)(e)))
      ))
    ],
    edges: [
      ...r,
      ...bt(iC(t)(cC(t)))(jt(
        be.foldr,
        lr(F.compare, n.edges, jJ(B((o) => o.id)(r)))
      ))
    ],
    constraints: t.graph.constraints
  };
}, fC = (t) => {
  const n = ic((e) => {
    const r = Ch(bh)((() => {
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
  })(Lh(t).nodes);
  return () => {
    const e = n();
    return _a(e);
  };
}, Eh = (t) => {
  const n = fC(t);
  return () => {
    const e = n(), r = ic(Eh)(Sh(t))();
    return w(ZJ)(e)(r);
  };
}, lC = (t) => (n) => {
  const e = Ht((r) => v, (r) => (o) => T("Just", { head: r, tail: o }), n.segments);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ x: e._1.head.start._1 * t, y: e._1.head.start._2 * t }, ...B((r) => ({ x: r.end._1 * t, y: r.end._2 * t }))([e._1.head, ...e._1.tail])];
  f();
}, gC = (t) => (n) => b(n.edge, lC(t)(n)), _C = (t) => (n) => (e) => (r) => ({
  nodes: _a(B(aC(V(4) * t)(n)(e))(r.nodes)),
  edges: Os(B(gC(t))(r.edges)),
  chipExtras: G,
  edgeLabels: G
}), dC = (t) => (n) => ({
  ...oC(Os(B((e) => b(e.id, b(e.from.node, e.to.node)))(n.edges)))(_C(8)(_a(B((e) => b(
    e.id,
    (() => {
      if (e.label.tag === "Just")
        return e.label._1;
      if (e.label.tag === "Nothing")
        return e.id;
      f();
    })()
  ))(n.nodes)))(_a(B((e) => b(e.id, e.shape))(n.nodes)))(bJ(vJ)(n).result)),
  edgeLabels: Os(bt((e) => e.label.tag === "Just" ? T("Just", b(e.id, e.label._1)) : v)(n.edges))
}), hC = (t) => w((n) => (e) => {
  if (e.tag === "Structural")
    return n;
  if (e.tag === "DataFlow")
    return w((r) => (o) => {
      if (o.kind.tag === "SendToken")
        return w((i) => (s) => tt(F)(s)()(i))(r)(o.kind._1.labels);
      if (o.kind.tag === "FillNodeWithoutTransition")
        return w((i) => (s) => tt(F)(s)()(i))(r)(o.kind._1.labels);
      f();
    })(n)(e._1.events);
  if (e.tag === "Hold" || e.tag === "EnterNode" || e.tag === "ExitNode" || e.tag === "StepScene")
    return n;
  f();
})(G)(t.scenes), pC = (t) => {
  const n = ic((e) => {
    const r = Ch(bh)(e);
    return () => {
      const o = r();
      return b(e, { labelW: o, charCount: mr(ti(e)), lineCount: 1 });
    };
  })(jt(
    be.foldr,
    tC(wt(jt(be.foldr, hC(t)))(kh))
  ));
  return () => {
    const e = n();
    return nC(e);
  };
}, Ph = (t) => {
  const n = pC(t);
  return () => {
    const e = n(), r = ic(Ph)(Sh(t))();
    return w(eC)(e)(r);
  };
}, mC = V(4) * 8, $C = (t) => wt(t.scenes)((n) => {
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
  if (n.tag === "StepScene")
    return [];
  f();
}), yC = (t) => (n) => (e) => {
  const r = (o) => {
    const i = bt((s) => {
      const u = rC(s)(t);
      return u.tag === "Just" ? T("Just", { w: u._1.labelW + 28, h: V(BJ(1)(u._1.lineCount)) * 13.2 + 12 }) : v;
    })(wt(o)(kh));
    return i.length === 0 ? v : T(
      "Just",
      { w: w(u_)(0)(B((s) => s.w)(i)), h: w(u_)(0)(B((s) => s.h)(i)) }
    );
  };
  return w((o) => (i) => {
    if (i.kind.tag === "SendToken") {
      const s = ol(i.kind._1.edge)(e.edges), u = r(i.kind._1.labels);
      if (u.tag === "Just" && s.tag === "Just") {
        const a = u._1;
        return Wt(F)(Nn)(i.kind._1.edge)(B((c) => ({ x: c.x + 14 + a.w, y: c.y - 6 - 8 - a.h }))(s._1))(o);
      }
      return o;
    }
    if (i.kind.tag === "FillNodeWithoutTransition") {
      const s = Qs(i.kind._1.node)(e.nodes), u = r(i.kind._1.labels);
      return u.tag === "Just" && s.tag === "Just" ? Wt(F)(Nn)("__fill__:" + i.kind._1.node)((() => {
        const a = s._1.y - u._1.h - 14, c = s._1.x + s._1.w / 2, l = c - u._1.w / 2, _ = c + u._1.w / 2, d = s._1.y - 14;
        return [{ x: l, y: a }, { x: _, y: a }, { x: l, y: d }, { x: _, y: d }];
      })())(o) : o;
    }
    f();
  })(G)($C(n));
}, sc = (t) => (n) => (e) => ({
  layout: (() => {
    const r = dC()(qJ(mC)(t)(WJ(OJ)(Lh(e))));
    return { ...r, chipExtras: yC(n)(e)(r) };
  })(),
  interiors: (() => {
    const r = sc(t)(n), o = (i) => {
      if (i.tag === "Leaf")
        return G;
      if (i.tag === "Node")
        return Zt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
      f();
    };
    return o(e.interiors);
  })()
}), a_ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Rf = (t) => (n) => (e) => {
  const r = t < 0.05 ? t : 0.05, o = (s, u) => {
    if (u.tag === "Leaf")
      return s;
    if (u.tag === "Node")
      return o(
        (() => {
          const a = a_(u._3)(e), c = (() => {
            if (a.tag === "Just")
              return a._1;
            if (a.tag === "Nothing")
              return { x: u._4.x, y: u._4.y, vx: 0, vy: 0 };
            f();
          })(), l = c.vx + (180 * (u._4.x - c.x) - 22 * c.vx) * r, _ = c.vy + (180 * (u._4.y - c.y) - 22 * c.vy) * r;
          return tt(F)(u._3)({ x: c.x + l * r, y: c.y + _ * r, vx: l, vy: _ })(o(s, u._5));
        })(),
        u._6
      );
    f();
  }, i = o(G, n);
  return {
    springs: i,
    applied: (() => {
      const s = (u, a) => {
        if (a.tag === "Leaf")
          return u;
        if (a.tag === "Node")
          return s(
            (() => {
              const c = s(u, a._5), l = a_(a._3)(i);
              if (l.tag === "Just")
                return tt(F)(a._3)({ ...a._4, x: l._1.x, y: l._1.y })(c);
              if (l.tag === "Nothing")
                return tt(F)(a._3)(a._4)(c);
              f();
            })(),
            a._6
          );
        f();
      };
      return s(G, n);
    })()
  };
}, ut = (t, n) => ({ tag: "CatQueue", _1: t, _2: n }), xC = (t) => {
  let n = t, e = !0, r;
  for (; e; ) {
    const o = n;
    if (o._1.tag === "Nil") {
      if (o._2.tag === "Nil") {
        e = !1, r = v;
        continue;
      }
      n = ut(
        ((s) => (u) => {
          let a = s, c = u, l = !0, _;
          for (; l; ) {
            const d = a, g = c;
            if (g.tag === "Nil") {
              l = !1, _ = d;
              continue;
            }
            if (g.tag === "Cons") {
              a = kt("Cons", g._1, d), c = g._2;
              continue;
            }
            f();
          }
          return _;
        })(Y)(o._2),
        Y
      );
      continue;
    }
    if (o._1.tag === "Cons") {
      e = !1, r = T("Just", b(o._1._1, ut(o._1._2, o._2)));
      continue;
    }
    f();
  }
  return r;
}, at = (t, n, e) => ({ tag: t, _1: n, _2: e }), dt = /* @__PURE__ */ at("CatNil"), vC = (t) => (n) => {
  if (t.tag === "CatNil")
    return n;
  if (n.tag === "CatNil")
    return t;
  if (t.tag === "CatCons")
    return at("CatCons", t._1, ut(t._2._1, kt("Cons", n, t._2._2)));
  f();
}, TC = (t) => (n) => (e) => {
  const r = (i) => (s) => (u) => {
    let a = i, c = s, l = u, _ = !0, d;
    for (; _; ) {
      const g = a, p = c, m = l;
      if (m.tag === "Nil") {
        _ = !1, d = p;
        continue;
      }
      if (m.tag === "Cons") {
        a = g, c = g(p)(m._1), l = m._2;
        continue;
      }
      f();
    }
    return d;
  };
  return ((i) => (s) => {
    let u = i, a = s, c = !0, l;
    for (; c; ) {
      const _ = u, d = a, g = xC(_);
      if (g.tag === "Nothing") {
        c = !1, l = r((p) => (m) => m(p))(n)(d);
        continue;
      }
      if (g.tag === "Just") {
        u = g._1._2, a = kt("Cons", t(g._1._1), d);
        continue;
      }
      f();
    }
    return l;
  })(e)(Y);
}, wC = (t) => {
  if (t.tag === "CatNil")
    return v;
  if (t.tag === "CatCons")
    return T("Just", b(t._1, t._2._1.tag === "Nil" && t._2._2.tag === "Nil" ? dt : TC(vC)(dt)(t._2)));
  f();
}, j = (t, n) => ({ tag: "Free", _1: t, _2: n }), lt = (t, n, e) => ({ tag: t, _1: n, _2: e }), Ah = (t) => {
  let n = t, e = !0, r;
  for (; e; ) {
    const o = n;
    if (o._1.tag === "Return") {
      const i = wC(o._2);
      if (i.tag === "Nothing") {
        e = !1, r = lt("Return", o._1._1);
        continue;
      }
      if (i.tag === "Just") {
        n = (() => {
          const s = i._1._1(o._1._1);
          return j(
            s._1,
            (() => {
              if (s._2.tag === "CatNil")
                return i._1._2;
              if (i._1._2.tag === "CatNil")
                return s._2;
              if (s._2.tag === "CatCons")
                return at("CatCons", s._2._1, ut(s._2._2._1, kt("Cons", i._1._2, s._2._2._2)));
              f();
            })()
          );
        })();
        continue;
      }
      f();
    }
    if (o._1.tag === "Bind") {
      e = !1, r = lt(
        "Bind",
        o._1._1,
        (i) => {
          const s = o._1._2(i);
          return j(
            s._1,
            (() => {
              if (s._2.tag === "CatNil")
                return o._2;
              if (o._2.tag === "CatNil")
                return s._2;
              if (s._2.tag === "CatCons")
                return at("CatCons", s._2._1, ut(s._2._2._1, kt("Cons", o._2, s._2._2._2)));
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
}, NC = (t) => (n) => {
  const e = n.Monad0(), r = e.Bind1().Apply0().Functor0();
  return (o) => n.tailRecM((i) => {
    const s = Ah(i);
    if (s.tag === "Return")
      return r.map(q$)(e.Applicative0().pure(s._1));
    if (s.tag === "Bind")
      return r.map(a0)(o(t.map(s._2)(s._1)));
    f();
  });
}, JC = (t) => (n) => (e) => {
  const r = Ah(e);
  if (r.tag === "Return")
    return n(r._1);
  if (r.tag === "Bind")
    return t(r._1)(r._2);
  f();
}, il = { Applicative0: () => ni, Bind1: () => Rh }, CC = { map: (t) => (n) => Rh.bind(n)((e) => ni.pure(t(e))) }, Rh = {
  bind: (t) => (n) => j(
    t._1,
    (() => {
      if (t._2.tag === "CatNil")
        return at("CatCons", n, ut(Y, Y));
      if (t._2.tag === "CatCons")
        return at(
          "CatCons",
          t._2._1,
          ut(
            t._2._2._1,
            kt("Cons", at("CatCons", n, ut(Y, Y)), t._2._2._2)
          )
        );
      f();
    })()
  ),
  Apply0: () => Fh
}, Fh = {
  apply: (t) => (n) => {
    const e = (r) => j(
      n._1,
      (() => {
        if (n._2.tag === "CatNil")
          return at("CatCons", (o) => ni.pure(r(o)), ut(Y, Y));
        if (n._2.tag === "CatCons")
          return at(
            "CatCons",
            n._2._1,
            ut(
              n._2._2._1,
              kt(
                "Cons",
                at("CatCons", (o) => ni.pure(r(o)), ut(Y, Y)),
                n._2._2._2
              )
            )
          );
        f();
      })()
    );
    return j(
      t._1,
      (() => {
        if (t._2.tag === "CatNil")
          return at("CatCons", e, ut(Y, Y));
        if (t._2.tag === "CatCons")
          return at(
            "CatCons",
            t._2._1,
            ut(
              t._2._2._1,
              kt("Cons", at("CatCons", e, ut(Y, Y)), t._2._2._2)
            )
          );
        f();
      })()
    );
  },
  Functor0: () => CC
}, ni = { pure: (t) => j(lt("Return", t), dt), Apply0: () => Fh }, bC = () => () => () => (t) => (n) => (e) => E$(e.type)(t) ? P$(e.type)(t)(e.value) : n(e), kC = { map: (t) => (n) => ({ type: n.type, value: n.map(t)(n.value), map: n.map }) }, SC = (t) => Mu("Data.Functor.Variant: pattern match failure [" + t.type + "]"), LC = () => () => () => (t) => bC()()()(t)(SC);
var ai = (function() {
  var t = {}, n = "Pure", e = "Throw", r = "Catch", o = "Sync", i = "Async", s = "Bind", u = "Bracket", a = "Fork", c = "Sequential", l = "Map", _ = "Apply", d = "Alt", g = "Cons", p = "Resume", m = "Release", h = "Finalizer", $ = "Finalized", x = "Forked";
  function y(L, I, z, U) {
    this.tag = L, this._1 = I, this._2 = z, this._3 = U;
  }
  function J(L) {
    var I = function(z, U, K) {
      return new y(L, z, U, K);
    };
    return I.tag = L, I;
  }
  function N(L) {
    return new y(n, void 0);
  }
  function C(L) {
    try {
      L();
    } catch (I) {
      setTimeout(function() {
        throw I;
      }, 0);
    }
  }
  function S(L, I, z) {
    try {
      return I(z());
    } catch (U) {
      return L(U);
    }
  }
  function P(L, I, z) {
    try {
      return I(z)();
    } catch (U) {
      return z(L(U))(), N;
    }
  }
  var E = (function() {
    var L = 1024, I = 0, z = 0, U = new Array(L), K = !1;
    function O() {
      var Z;
      for (K = !0; I !== 0; )
        I--, Z = U[z], U[z] = void 0, z = (z + 1) % L, Z();
      K = !1;
    }
    return {
      isDraining: function() {
        return K;
      },
      enqueue: function(Z) {
        var et;
        I === L && (et = K, O(), K = et), U[(z + I) % L] = Z, I++, K || O();
      }
    };
  })();
  function Q(L) {
    var I = {}, z = 0, U = 0;
    return {
      register: function(K) {
        var O = z++;
        K.onComplete({
          rethrow: !0,
          handler: function(Z) {
            return function() {
              U--, delete I[O];
            };
          }
        })(), I[O] = K, U++;
      },
      isEmpty: function() {
        return U === 0;
      },
      killAll: function(K, O) {
        return function() {
          if (U === 0)
            return O();
          var Z = 0, et = {};
          function nt(ct) {
            et[ct] = I[ct].kill(K, function($t) {
              return function() {
                delete et[ct], Z--, L.isLeft($t) && L.fromLeft($t) && setTimeout(function() {
                  throw L.fromLeft($t);
                }, 0), Z === 0 && O();
              };
            })();
          }
          for (var gt in I)
            I.hasOwnProperty(gt) && (Z++, nt(gt));
          return I = {}, z = 0, U = 0, function(ct) {
            return new y(o, function() {
              for (var $t in et)
                et.hasOwnProperty($t) && et[$t]();
            });
          };
        };
      }
    };
  }
  var W = 0, D = 1, H = 2, rt = 3, ot = 4, M = 5, q = 6;
  function A(L, I, z) {
    var U = 0, K = W, O = z, Z = null, et = null, nt = null, gt = null, ct = null, $t = 0, Pt = 0, Rt = null, rn = !0;
    function xt(_t) {
      for (var yt, ft, mt; ; )
        switch (yt = null, ft = null, mt = null, K) {
          case H:
            K = D;
            try {
              O = nt(O), gt === null ? nt = null : (nt = gt._1, gt = gt._2);
            } catch (Lt) {
              K = M, Z = L.left(Lt), O = null;
            }
            break;
          case rt:
            L.isLeft(O) ? (K = M, Z = O, O = null) : nt === null ? K = M : (K = H, O = L.fromRight(O));
            break;
          case D:
            switch (O.tag) {
              case s:
                nt && (gt = new y(g, nt, gt)), nt = O._2, K = D, O = O._1;
                break;
              case n:
                nt === null ? (K = M, O = L.right(O._1)) : (K = H, O = O._1);
                break;
              case o:
                K = rt, O = S(L.left, L.right, O._1);
                break;
              case i:
                K = ot, O = P(L.left, O._1, function(Lt) {
                  return function() {
                    U === _t && (U++, E.enqueue(function() {
                      U === _t + 1 && (K = rt, O = Lt, xt(U));
                    }));
                  };
                });
                return;
              case e:
                K = M, Z = L.left(O._1), O = null;
                break;
              // Enqueue the Catch so that we can call the error handler later on
              // in case of an exception.
              case r:
                nt === null ? ct = new y(g, O, ct, et) : ct = new y(g, O, new y(g, new y(p, nt, gt), ct, et), et), nt = null, gt = null, K = D, O = O._1;
                break;
              // Enqueue the Bracket so that we can call the appropriate handlers
              // after resource acquisition.
              case u:
                $t++, nt === null ? ct = new y(g, O, ct, et) : ct = new y(g, O, new y(g, new y(p, nt, gt), ct, et), et), nt = null, gt = null, K = D, O = O._1;
                break;
              case a:
                K = rt, yt = A(L, I, O._2), I && I.register(yt), O._1 && yt.run(), O = L.right(yt);
                break;
              case c:
                K = D, O = X(L, I, O._1);
                break;
            }
            break;
          case M:
            if (nt = null, gt = null, ct === null)
              K = q, O = et || Z || O;
            else
              switch (yt = ct._3, mt = ct._1, ct = ct._2, mt.tag) {
                // We cannot recover from an unmasked interrupt. Otherwise we should
                // continue stepping, or run the exception handler if an exception
                // was raised.
                case r:
                  et && et !== yt && $t === 0 ? K = M : Z && (K = D, O = mt._2(L.fromLeft(Z)), Z = null);
                  break;
                // We cannot resume from an unmasked interrupt or exception.
                case p:
                  et && et !== yt && $t === 0 || Z ? K = M : (nt = mt._1, gt = mt._2, K = H, O = L.fromRight(O));
                  break;
                // If we have a bracket, we should enqueue the handlers,
                // and continue with the success branch only if the fiber has
                // not been interrupted. If the bracket acquisition failed, we
                // should not run either.
                case u:
                  $t--, Z === null && (ft = L.fromRight(O), ct = new y(g, new y(m, mt._2, ft), ct, yt), (et === yt || $t > 0) && (K = D, O = mt._3(ft)));
                  break;
                // Enqueue the appropriate handler. We increase the bracket count
                // because it should not be cancelled.
                case m:
                  ct = new y(g, new y($, O, Z), ct, et), K = D, et && et !== yt && $t === 0 ? O = mt._1.killed(L.fromLeft(et))(mt._2) : Z ? O = mt._1.failed(L.fromLeft(Z))(mt._2) : O = mt._1.completed(L.fromRight(O))(mt._2), Z = null, $t++;
                  break;
                case h:
                  $t++, ct = new y(g, new y($, O, Z), ct, et), K = D, O = mt._1;
                  break;
                case $:
                  $t--, K = M, O = mt._1, Z = mt._2;
                  break;
              }
            break;
          case q:
            for (var Ft in Rt)
              Rt.hasOwnProperty(Ft) && (rn = rn && Rt[Ft].rethrow, C(Rt[Ft].handler(O)));
            Rt = null, et && Z ? setTimeout(function() {
              throw L.fromLeft(Z);
            }, 0) : L.isLeft(O) && rn && setTimeout(function() {
              if (rn)
                throw L.fromLeft(O);
            }, 0);
            return;
          case W:
            K = D;
            break;
          case ot:
            return;
        }
    }
    function Gt(_t) {
      return function() {
        if (K === q)
          return rn = rn && _t.rethrow, _t.handler(O)(), function() {
          };
        var yt = Pt++;
        return Rt = Rt || {}, Rt[yt] = _t, function() {
          Rt !== null && delete Rt[yt];
        };
      };
    }
    function vt(_t, yt) {
      return function() {
        if (K === q)
          return yt(L.right(void 0))(), function() {
          };
        var ft = Gt({
          rethrow: !1,
          handler: function() {
            return yt(L.right(void 0));
          }
        })();
        switch (K) {
          case W:
            et = L.left(_t), K = q, O = et, xt(U);
            break;
          case ot:
            et === null && (et = L.left(_t)), $t === 0 && (K === ot && (ct = new y(g, new y(h, O(_t)), ct, et)), K = M, O = null, Z = null, xt(++U));
            break;
          default:
            et === null && (et = L.left(_t)), $t === 0 && (K = M, O = null, Z = null);
        }
        return ft;
      };
    }
    function Jt(_t) {
      return function() {
        var yt = Gt({
          rethrow: !1,
          handler: _t
        })();
        return K === W && xt(U), yt;
      };
    }
    return {
      kill: vt,
      join: Jt,
      onComplete: Gt,
      isSuspended: function() {
        return K === W;
      },
      run: function() {
        K === W && (E.isDraining() ? xt(U) : E.enqueue(function() {
          xt(U);
        }));
      }
    };
  }
  function R(L, I, z, U) {
    var K = 0, O = {}, Z = 0, et = {}, nt = new Error("[ParAff] Early exit"), gt = null, ct = t;
    function $t(Gt, vt, Jt) {
      var _t = vt, yt = null, ft = null, mt = 0, Ft = {}, Lt, zt;
      t: for (; ; )
        switch (Lt = null, _t.tag) {
          case x:
            if (_t._3 === t && (Lt = O[_t._1], Ft[mt++] = Lt.kill(Gt, function(tn) {
              return function() {
                mt--, mt === 0 && Jt(tn)();
              };
            })), yt === null)
              break t;
            _t = yt._2, ft === null ? yt = null : (yt = ft._1, ft = ft._2);
            break;
          case l:
            _t = _t._2;
            break;
          case _:
          case d:
            yt && (ft = new y(g, yt, ft)), yt = _t, _t = _t._1;
            break;
        }
      if (mt === 0)
        Jt(L.right(void 0))();
      else
        for (zt = 0, Lt = mt; zt < Lt; zt++)
          Ft[zt] = Ft[zt]();
      return Ft;
    }
    function Pt(Gt, vt, Jt) {
      var _t, yt, ft, mt, Ft, Lt;
      for (L.isLeft(Gt) ? (_t = Gt, yt = null) : (yt = Gt, _t = null); ; ) {
        if (ft = null, mt = null, Ft = null, Lt = null, gt !== null)
          return;
        if (vt === null) {
          U(_t || yt)();
          return;
        }
        if (vt._3 !== t)
          return;
        switch (vt.tag) {
          case l:
            _t === null ? (vt._3 = L.right(vt._1(L.fromRight(yt))), yt = vt._3) : vt._3 = _t;
            break;
          case _:
            if (ft = vt._1._3, mt = vt._2._3, _t) {
              if (vt._3 = _t, Ft = !0, Lt = Z++, et[Lt] = $t(nt, _t === ft ? vt._2 : vt._1, function() {
                return function() {
                  delete et[Lt], Ft ? Ft = !1 : Jt === null ? Pt(_t, null, null) : Pt(_t, Jt._1, Jt._2);
                };
              }), Ft) {
                Ft = !1;
                return;
              }
            } else {
              if (ft === t || mt === t)
                return;
              yt = L.right(L.fromRight(ft)(L.fromRight(mt))), vt._3 = yt;
            }
            break;
          case d:
            if (ft = vt._1._3, mt = vt._2._3, ft === t && L.isLeft(mt) || mt === t && L.isLeft(ft))
              return;
            if (ft !== t && L.isLeft(ft) && mt !== t && L.isLeft(mt))
              _t = yt === ft ? mt : ft, yt = null, vt._3 = _t;
            else if (vt._3 = yt, Ft = !0, Lt = Z++, et[Lt] = $t(nt, yt === ft ? vt._2 : vt._1, function() {
              return function() {
                delete et[Lt], Ft ? Ft = !1 : Jt === null ? Pt(yt, null, null) : Pt(yt, Jt._1, Jt._2);
              };
            }), Ft) {
              Ft = !1;
              return;
            }
            break;
        }
        Jt === null ? vt = null : (vt = Jt._1, Jt = Jt._2);
      }
    }
    function Rt(Gt) {
      return function(vt) {
        return function() {
          delete O[Gt._1], Gt._3 = vt, Pt(vt, Gt._2._1, Gt._2._2);
        };
      };
    }
    function rn() {
      var Gt = D, vt = z, Jt = null, _t = null, yt, ft;
      t: for (; ; )
        switch (yt = null, ft = null, Gt) {
          case D:
            switch (vt.tag) {
              case l:
                Jt && (_t = new y(g, Jt, _t)), Jt = new y(l, vt._1, t, t), vt = vt._2;
                break;
              case _:
                Jt && (_t = new y(g, Jt, _t)), Jt = new y(_, t, vt._2, t), vt = vt._1;
                break;
              case d:
                Jt && (_t = new y(g, Jt, _t)), Jt = new y(d, t, vt._2, t), vt = vt._1;
                break;
              default:
                ft = K++, Gt = M, yt = vt, vt = new y(x, ft, new y(g, Jt, _t), t), yt = A(L, I, yt), yt.onComplete({
                  rethrow: !1,
                  handler: Rt(vt)
                })(), O[ft] = yt, I && I.register(yt);
            }
            break;
          case M:
            if (Jt === null)
              break t;
            Jt._1 === t ? (Jt._1 = vt, Gt = D, vt = Jt._2, Jt._2 = t) : (Jt._2 = vt, vt = Jt, _t === null ? Jt = null : (Jt = _t._1, _t = _t._2));
        }
      for (ct = vt, ft = 0; ft < K; ft++)
        O[ft].run();
    }
    function xt(Gt, vt) {
      gt = L.left(Gt);
      var Jt;
      for (var _t in et)
        if (et.hasOwnProperty(_t)) {
          Jt = et[_t];
          for (_t in Jt)
            Jt.hasOwnProperty(_t) && Jt[_t]();
        }
      et = null;
      var yt = $t(Gt, ct, vt);
      return function(ft) {
        return new y(i, function(mt) {
          return function() {
            for (var Ft in yt)
              yt.hasOwnProperty(Ft) && yt[Ft]();
            return N;
          };
        });
      };
    }
    return rn(), function(Gt) {
      return new y(i, function(vt) {
        return function() {
          return xt(Gt, vt);
        };
      });
    };
  }
  function X(L, I, z) {
    return new y(i, function(U) {
      return function() {
        return R(L, I, z, U);
      };
    });
  }
  return y.EMPTY = t, y.Pure = J(n), y.Throw = J(e), y.Catch = J(r), y.Sync = J(o), y.Async = J(i), y.Bind = J(s), y.Bracket = J(u), y.Fork = J(a), y.Seq = J(c), y.ParMap = J(l), y.ParApply = J(_), y.ParAlt = J(d), y.Fiber = A, y.Supervisor = Q, y.Scheduler = E, y.nonCanceler = N, y;
})();
const EC = ai.Pure;
ai.Throw;
function Xo(t) {
  return function(n) {
    return ai.Bind(t, n);
  };
}
const Yo = ai.Sync, PC = ai.Async;
function sl(t, n) {
  return function() {
    return ai.Fiber(t, null, n);
  };
}
ai.Seq;
const ul = {
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
      return Mu("unsafeFromLeft: Right");
    f();
  },
  fromRight: (t) => {
    if (t.tag === "Right")
      return t._1;
    if (t.tag === "Left")
      return Mu("unsafeFromRight: Left");
    f();
  },
  left: I$,
  right: z1
}, AC = /* @__PURE__ */ (() => {
  const t = EC();
  return (n) => t;
})(), RC = (t) => (n) => JC((e) => (r) => t({ type: e.type, value: e.map((o) => r(o))(e.value), map: e.map }))(n), FC = (t) => {
  const n = t.Bind1(), e = t.Applicative0().pure;
  return (r) => {
    const o = S$(() => RC((s) => n.bind(r(s))(o()))(e));
    return o();
  };
};
let Mc = null;
function GC() {
  return Mc || (typeof document > "u" ? null : Mc = document.createElement("canvas").getContext("2d"));
}
const Uc = /* @__PURE__ */ new Map();
function Gh(t, n, e, r, o, i) {
  const s = `${e} ${n}px ${t}`, u = s + "|" + r;
  if (Uc.has(u)) return Uc.get(u);
  const a = GC();
  if (!a) return i;
  a.font = s;
  const c = o(a.measureText(r)), l = typeof document < "u" ? document.fonts : null;
  if (!l || l.check(s)) Uc.set(u, c);
  else if (l && l.load)
    try {
      l.load(s);
    } catch {
    }
  return c;
}
const IC = (t, n, e, r) => Gh(t, n, e, r, (o) => o.width, -1), BC = (t, n, e, r) => Gh(
  t,
  n,
  e,
  r,
  (o) => ({ ascent: o.actualBoundingBoxAscent, descent: o.actualBoundingBoxDescent }),
  { ascent: -1, descent: -1 }
), da = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), Ih = (t) => t, Bh = {
  map: (t) => (n) => {
    if (n.tag === "MeasureText")
      return da("MeasureText", n._1, n._2, (e) => t(n._3(e)));
    if (n.tag === "MeasureInk")
      return da("MeasureInk", n._1, n._2, (e) => t(n._3(e)));
    f();
  }
}, al = (t) => (n) => {
  const e = IC(t.family, t.size, t.weight, ti(n));
  return e < 0 ? V(is(n).length) * t.size * 0.62 : e;
}, cl = (t) => (n) => {
  const e = BC(t.family, t.size, t.weight, ti(n));
  return e.ascent < 0 ? { ascent: t.size * 0.72, descent: t.size * 0.2 } : e;
}, DC = (t) => (n) => j(
  lt(
    "Bind",
    { type: "metrics", value: da("MeasureInk", t, n, Ih), map: Bh.map },
    (e) => j(lt("Return", e), dt)
  ),
  dt
), nu = (t) => (n) => j(
  lt(
    "Bind",
    { type: "metrics", value: da("MeasureText", t, n, Ih), map: Bh.map },
    (e) => j(lt("Return", e), dt)
  ),
  dt
), Dh = (t) => t, zh = (t) => t, uc = (t) => t, Hh = (t) => t, Qh = (t) => t, Mt = (t, n, e, r, o) => ({ tag: t, _1: n, _2: e, _3: r, _4: o }), Oh = (t) => t, fl = (t) => t, zC = /* @__PURE__ */ fl("BaselineTop"), Ye = /* @__PURE__ */ fl("BaselineMiddle"), HC = /* @__PURE__ */ fl("BaselineBottom"), Mi = /* @__PURE__ */ Oh("AlignLeft"), oo = /* @__PURE__ */ Oh("AlignCenter"), ie = /* @__PURE__ */ Qh("RoundJoin"), eu = /* @__PURE__ */ Qh("MiterJoin"), Me = /* @__PURE__ */ Hh("ButtCap"), hr = /* @__PURE__ */ Hh("RoundCap"), QC = /* @__PURE__ */ uc("LayerPolyOut"), OC = /* @__PURE__ */ uc("LayerPolyIn"), WC = /* @__PURE__ */ uc("LayerNodeMask"), qC = /* @__PURE__ */ uc("LayerOverlay"), Ws = /* @__PURE__ */ zh("NonZero"), XC = /* @__PURE__ */ zh("EvenOdd"), c_ = /* @__PURE__ */ Dh("Normal"), Bu = /* @__PURE__ */ Dh("Difference"), wn = { r: 255, g: 255, b: 255, a: 255 }, qs = [5], Cn = {
  map: (t) => (n) => {
    if (n.tag === "FillPath")
      return Mt("FillPath", n._1, n._2, t(n._3));
    if (n.tag === "StrokePath")
      return Mt("StrokePath", n._1, n._2, t(n._3));
    if (n.tag === "FillStrokePath")
      return Mt("FillStrokePath", n._1, n._2, n._3, t(n._4));
    if (n.tag === "DrawText")
      return Mt("DrawText", n._1, t(n._2));
    if (n.tag === "DrawTextAffine")
      return Mt("DrawTextAffine", n._1, n._2, t(n._3));
    if (n.tag === "PushTransform")
      return Mt("PushTransform", n._1, t(n._2));
    if (n.tag === "PopTransform")
      return Mt("PopTransform", t(n._1));
    if (n.tag === "PushClip")
      return Mt("PushClip", n._1, n._2, t(n._3));
    if (n.tag === "PopClip")
      return Mt("PopClip", t(n._1));
    if (n.tag === "PushBlend")
      return Mt("PushBlend", n._1, t(n._2));
    if (n.tag === "PopBlend")
      return Mt("PopBlend", t(n._1));
    if (n.tag === "PushAlpha")
      return Mt("PushAlpha", n._1, t(n._2));
    if (n.tag === "PopAlpha")
      return Mt("PopAlpha", t(n._1));
    if (n.tag === "PushBlur")
      return Mt("PushBlur", n._1, t(n._2));
    if (n.tag === "PopBlur")
      return Mt("PopBlur", t(n._1));
    if (n.tag === "PushLayer")
      return Mt("PushLayer", n._1, t(n._2));
    if (n.tag === "PopLayer")
      return Mt("PopLayer", t(n._1));
    if (n.tag === "SetViewport")
      return Mt("SetViewport", n._1, t(n._2));
    if (n.tag === "ClearBackground")
      return Mt("ClearBackground", n._1, t(n._2));
    if (n.tag === "BackgroundDots")
      return Mt("BackgroundDots", n._1, t(n._2));
    f();
  }
}, Hr = { r: 26, g: 26, b: 26, a: 255 }, Ff = (t) => (n) => Math.imul(t, n), ss = (t) => {
  const n = t + 1831565813 | 0, e = Ff(n ^ n >>> 15)(n | 1), r = e ^ (e + Ff(e ^ e >>> 7)(e | 61) | 0), o = r ^ r >>> 14;
  return { prng: o, value: o < 0 ? (V(o) + 4294967296) / 4294967296 : V(o) / 4294967296 };
}, Dn = (t) => (n) => (e) => {
  const r = ss(e);
  return { prng: r.prng, value: t + r.value * (n - t) };
}, Gf = (t) => (n) => w((e) => (r) => Ff(e ^ r)(-2048144789))(n)(B(Sr)(Ir(t))), YC = (t) => t, Wh = (t) => t, MC = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ie = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, qh = (t) => (n) => (e) => {
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
}, If = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, UC = (t) => (n) => (e) => {
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
}, KC = /* @__PURE__ */ Wh("FlatLevel"), VC = /* @__PURE__ */ Wh("NestedLevel"), ll = /* @__PURE__ */ YC("GenieSilhouette"), jC = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, yLift: 0 };
  const o = ss(t);
  return { prng: o.prng, yLift: o.value * e.yJitter * r };
}, ZC = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, dx: 0 };
  const o = ss(t);
  return { prng: o.prng, dx: (o.value * 2 - 1) * e.xJitter * r };
}, f_ = (t) => (n) => {
  const e = n.cy - t.cy, r = n.cx - t.cx, o = ne(r * r + e * e), i = (t.r * t.r - n.r * n.r + o * o) / (2 * o), s = ne(MC(0)(t.r * t.r - i * i)), u = t.cx + i * r / o, a = t.cy + i * e / o, c = { x: u - s * e / o, y: a + s * r / o }, l = { x: u + s * e / o, y: a - s * r / o };
  return o === 0 || o > t.r + n.r ? { x: (t.cx + n.cx) / 2, y: t.cy } : c.y < l.y ? c : l;
}, Ri = (t) => (n) => {
  const e = Ie(n)(Ie(t.w / 2)(t.h / 2));
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
}, t3 = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n)
    return { prng: t, r: o };
  if (e)
    return { prng: t, r: o * (1 + i.rJitter) };
  if (r)
    return { prng: t, r: o * i.smallScale };
  const s = ss(t);
  return { prng: s.prng, r: o * (1 + s.value * i.rJitter) };
}, Xh = (t) => {
  const n = Ie(t.w)(t.h) / 2;
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
}, n3 = (t) => (n) => (e) => {
  const r = ss(t), o = n.length;
  return o === 0 ? { prng: t, idx: -1 } : {
    prng: r.prng,
    idx: (() => {
      const i = qh(0)(o - 1 | 0)(dn(Xe(r.value * V(e))));
      return i >= 0 && i < n.length ? n[i] : -1;
    })()
  };
}, e3 = (t) => (n) => {
  const e = ss(t), r = n.length;
  return r === 0 ? { prng: t, idx: -1 } : {
    prng: e.prng,
    idx: (() => {
      const o = qh(0)(r - 1 | 0)(dn(Xe(e.value * V(r))));
      return o >= 0 && o < n.length ? n[o] : -1;
    })()
  };
}, Yh = (t) => {
  const n = Ie(t.w * 0.18)(t.h * 0.6);
  return [1, t.x + n, t.y, 2, t.x + t.w, t.y, 2, t.x + t.w - n, t.y + t.h, 2, t.x, t.y + t.h, 5];
}, Mh = (t) => [
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
], Uh = { rBase: 1.2, stepRatio: 0.7, rJitter: 0.35, yJitter: 0.2, xJitter: 0.2, heroShift: 0.2, smallScale: 0.85, smallShift: 0.15, seed: 7, minN: 3 }, r3 = (t) => {
  const n = Ie(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.x + e;
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
}, Kh = (t) => {
  const n = Ie(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + t.h + 5, o = t.y + n, i = r - n, s = t.x + e;
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
}, Vh = (t) => (n) => {
  const e = n.y + n.h, r = C2(t.rBase * n.h)(n.w / (2 * (1 + (V(t.minN) - 1) * t.stepRatio))), o = n.w - 2 * r, i = 2 * r * t.stepRatio, s = If(t.minN)(o <= 0 || i <= 0 ? t.minN : dn(We(o / i)) + 1 | 0), u = s >= 3 ? Vt(1, s - 2 | 0) : [], a = u.length, c = nr(a + 1 | 0, 2), l = c < 1 ? [] : At(0, c, u), _ = e3(t.seed)((() => {
    const h = a - c | 0;
    return h < 1 ? u : At(h, u.length, u);
  })()), d = _.idx, g = n3(_.prng)(ht((h) => h !== d, l))(If(1)(l.length - (Ne(po)(d)(l) ? 1 : 0) | 0)), p = g.idx, m = s >= 2 ? o / (V(s) - 1) : 0;
  return w((h) => ($) => {
    const x = $ === p, y = $ === d, J = $ === 0 || $ === (s - 1 | 0), N = t3(h.prng)(J)(y)(x)(r)(t), C = jC(N.prng)(J)(t)(n.h), S = ZC(C.prng)(J)(t)(m);
    return {
      prng: S.prng,
      circles: St(h.circles)({
        cx: n.x + UC(N.r)(n.w - N.r)((s >= 2 ? r + V($) / (V(s) - 1) * o + S.dx : r + 0 * o + S.dx) + (y ? t.heroShift * m : x ? -1 * t.smallShift * m : 0)),
        cy: e - C.yLift,
        r: N.r
      })
    };
  })({ prng: g.prng, circles: [] })(Vt(0, s - 1 | 0)).circles;
}, jh = (t) => (n) => {
  const e = t.length;
  return Xt((r) => (o) => ({
    c: o,
    p1: (() => {
      if (r === 0)
        return { x: o.cx - o.r, y: n };
      const i = r - 1 | 0;
      return i >= 0 && i < t.length ? f_(t[i])(o) : { x: o.cx - o.r, y: n };
    })(),
    p2: (() => {
      if (r === (e - 1 | 0))
        return { x: o.cx + o.r, y: n };
      const i = r + 1 | 0;
      return i >= 0 && i < t.length ? f_(o)(t[i]) : { x: o.cx + o.r, y: n };
    })()
  }))(t);
}, Zh = (t) => {
  const n = Ie(t.h * 0.4)(t.w * 0.2);
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
}, o3 = (t) => (n) => (e) => {
  const r = Wo(n.y - t.cy)(n.x - t.cx), o = Wo(e.y - t.cy)(e.x - t.cx), i = o > r ? o - r : o + 6.283185307179586 - r, s = If(1)(dn(za(i / 1.5707963267948966))), u = i / V(s), a = 1.3333333333333333 * b2(u / 4);
  return wt(Vt(0, s - 1 | 0))((c) => {
    const l = r + V(c + 1 | 0) * u, _ = t.cx + t.r * fe(l), d = t.cy + t.r * we(l), g = r + V(c) * u;
    return [
      4,
      t.cx + t.r * fe(g) - a * t.r * we(g),
      t.cy + t.r * we(g) + a * t.r * fe(g),
      _ + a * t.r * we(l),
      d - a * t.r * fe(l),
      _,
      d
    ];
  });
}, tp = (t) => (n) => {
  const e = t.h * 0.38, r = jh(Vh(Uh)({ x: t.x, y: t.y - e, w: t.w, h: e }))(t.y), o = Ie(n)(Ie(t.w / 2)(t.h / 2));
  return 0 < r.length ? [
    1,
    r[0].p1.x,
    r[0].p1.y,
    ...wt(r)((i) => o3(i.c)(i.p1)(i.p2)),
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
  ] : Ri(t)(n);
}, i3 = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n === "Rectangle")
    return t.drawRoundedRect(e)(r)(o)(i);
  if (n === "Cylinder") {
    const s = Kh(e);
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
    const s = Yh(e);
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
    const s = Zh(e);
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
    const s = Xh(e);
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
    const s = Mh(e);
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
    const s = tp(e)(r);
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
}, s3 = {
  fillPath: (t) => (n) => j(
    lt(
      "Bind",
      { type: "render", value: Mt("FillPath", t, n, void 0), map: Cn.map },
      (e) => j(lt("Return", e), dt)
    ),
    dt
  ),
  strokePath: (t) => (n) => j(
    lt(
      "Bind",
      { type: "render", value: Mt("StrokePath", t, n, void 0), map: Cn.map },
      (e) => j(lt("Return", e), dt)
    ),
    dt
  ),
  fillStrokePath: (t) => (n) => (e) => j(
    lt(
      "Bind",
      { type: "render", value: Mt("FillStrokePath", t, n, e, void 0), map: Cn.map },
      (r) => j(lt("Return", r), dt)
    ),
    dt
  ),
  drawRoundedRect: (t) => (n) => (e) => (r) => {
    if (e.tag === "Just") {
      if (r.tag === "Just")
        return j(
          lt(
            "Bind",
            {
              type: "render",
              value: Mt("FillStrokePath", Ri(t)(n), e._1, r._1, void 0),
              map: Cn.map
            },
            (o) => j(lt("Return", o), dt)
          ),
          dt
        );
      if (r.tag === "Nothing")
        return j(
          lt(
            "Bind",
            {
              type: "render",
              value: Mt("FillPath", Ri(t)(n), e._1, void 0),
              map: Cn.map
            },
            (o) => j(lt("Return", o), dt)
          ),
          dt
        );
      f();
    }
    if (e.tag === "Nothing") {
      if (r.tag === "Just")
        return j(
          lt(
            "Bind",
            {
              type: "render",
              value: Mt("StrokePath", Ri(t)(n), r._1, void 0),
              map: Cn.map
            },
            (o) => j(lt("Return", o), dt)
          ),
          dt
        );
      if (r.tag === "Nothing")
        return j(lt("Return", void 0), dt);
    }
    f();
  },
  drawText: (t) => j(
    lt(
      "Bind",
      { type: "render", value: Mt("DrawText", t, void 0), map: Cn.map },
      (n) => j(lt("Return", n), dt)
    ),
    dt
  ),
  drawTextAffine: (t) => (n) => j(
    lt(
      "Bind",
      { type: "render", value: Mt("DrawTextAffine", t, n, void 0), map: Cn.map },
      (e) => j(lt("Return", e), dt)
    ),
    dt
  ),
  pushTransform: (t) => j(
    lt(
      "Bind",
      { type: "render", value: Mt("PushTransform", t, void 0), map: Cn.map },
      (n) => j(lt("Return", n), dt)
    ),
    dt
  ),
  popTransform: j(
    lt(
      "Bind",
      { type: "render", value: Mt("PopTransform", void 0), map: Cn.map },
      (t) => j(lt("Return", t), dt)
    ),
    dt
  ),
  pushBakedTransform: (t) => j(
    lt(
      "Bind",
      { type: "render", value: Mt("PushTransform", t, void 0), map: Cn.map },
      (n) => j(lt("Return", n), dt)
    ),
    dt
  ),
  popBakedTransform: j(
    lt(
      "Bind",
      { type: "render", value: Mt("PopTransform", void 0), map: Cn.map },
      (t) => j(lt("Return", t), dt)
    ),
    dt
  ),
  pushClip: (t) => (n) => j(
    lt(
      "Bind",
      { type: "render", value: Mt("PushClip", t, n, void 0), map: Cn.map },
      (e) => j(lt("Return", e), dt)
    ),
    dt
  ),
  popClip: j(
    lt(
      "Bind",
      { type: "render", value: Mt("PopClip", void 0), map: Cn.map },
      (t) => j(lt("Return", t), dt)
    ),
    dt
  ),
  pushBlend: (t) => j(
    lt(
      "Bind",
      { type: "render", value: Mt("PushBlend", t, void 0), map: Cn.map },
      (n) => j(lt("Return", n), dt)
    ),
    dt
  ),
  popBlend: j(
    lt(
      "Bind",
      { type: "render", value: Mt("PopBlend", void 0), map: Cn.map },
      (t) => j(lt("Return", t), dt)
    ),
    dt
  ),
  pushAlpha: (t) => j(
    lt(
      "Bind",
      { type: "render", value: Mt("PushAlpha", t, void 0), map: Cn.map },
      (n) => j(lt("Return", n), dt)
    ),
    dt
  ),
  popAlpha: j(
    lt(
      "Bind",
      { type: "render", value: Mt("PopAlpha", void 0), map: Cn.map },
      (t) => j(lt("Return", t), dt)
    ),
    dt
  ),
  pushBlur: (t) => j(
    lt(
      "Bind",
      { type: "render", value: Mt("PushBlur", t, void 0), map: Cn.map },
      (n) => j(lt("Return", n), dt)
    ),
    dt
  ),
  popBlur: j(
    lt(
      "Bind",
      { type: "render", value: Mt("PopBlur", void 0), map: Cn.map },
      (t) => j(lt("Return", t), dt)
    ),
    dt
  ),
  pushLayer: (t) => j(
    lt(
      "Bind",
      { type: "render", value: Mt("PushLayer", t, void 0), map: Cn.map },
      (n) => j(lt("Return", n), dt)
    ),
    dt
  ),
  popLayer: j(
    lt(
      "Bind",
      { type: "render", value: Mt("PopLayer", void 0), map: Cn.map },
      (t) => j(lt("Return", t), dt)
    ),
    dt
  ),
  setViewport: (t) => j(
    lt(
      "Bind",
      { type: "render", value: Mt("SetViewport", t, void 0), map: Cn.map },
      (n) => j(lt("Return", n), dt)
    ),
    dt
  ),
  clearBackground: (t) => j(
    lt(
      "Bind",
      { type: "render", value: Mt("ClearBackground", t, void 0), map: Cn.map },
      (n) => j(lt("Return", n), dt)
    ),
    dt
  ),
  backgroundDots: (t) => j(
    lt(
      "Bind",
      { type: "render", value: Mt("BackgroundDots", t, void 0), map: Cn.map },
      (n) => j(lt("Return", n), dt)
    ),
    dt
  ),
  measureText: (t) => (n) => nu(t)(n),
  measureInk: (t) => (n) => DC(t)(n),
  insideTokenStyle: (t) => j(lt("Return", ll), dt),
  Monad0: () => il
}, u3 = (t) => () => t.clip("evenodd"), a3 = (t) => (n) => () => {
  t.filter = `blur(${n}px)`;
}, c3 = (t) => (n) => () => {
  const e = Math.max(8, Math.ceil(8 / Math.max(n.tile, 1e-3))), r = Math.max(2, Math.round(n.tile * e)), o = document.createElement("canvas");
  o.width = r, o.height = r;
  const i = o.getContext("2d");
  i.scale(e, e), i.fillStyle = n.bgCss, i.fillRect(0, 0, n.tile, n.tile), i.fillStyle = n.dotCss, i.beginPath(), i.arc(n.tile / 2, n.tile / 2, n.dotR, 0, 2 * Math.PI), i.fill();
  const s = t.createPattern(o, "repeat");
  s && typeof s.setTransform == "function" && s.setTransform(new DOMMatrix().translateSelf(n.ox, n.oy).scaleSelf(1 / e, 1 / e)), t.save(), t.fillStyle = s, t.fillRect(n.vx, n.vy, n.vw, n.vh), t.restore();
}, Bf = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, gl = (t) => (n) => (e) => {
  const r = n.stroke;
  return () => {
    const o = r.value, i = X2(t)(e);
    if (o !== e)
      return i(), n.stroke.value = e;
  };
}, f3 = (t) => (n) => (e) => {
  const r = n.font;
  return () => {
    const o = r.value, i = Oa(t)(e);
    if (o !== e)
      return i(), n.font.value = e;
  };
}, ru = (t) => (n) => (e) => {
  const r = n.fill;
  return () => {
    const o = r.value, i = $0(t)(e);
    if (o !== e)
      return i(), n.fill.value = e;
  };
}, ac = (t) => (n) => {
  const e = n.length, r = (i) => {
    if (i >= e)
      return () => {
      };
    const s = i >= 0 && i < n.length ? n[i] : 0;
    if (s === 1) {
      const u = ed(t)((() => {
        const c = i + 1 | 0;
        return c >= 0 && c < n.length ? n[c] : 0;
      })())((() => {
        const c = i + 2 | 0;
        return c >= 0 && c < n.length ? n[c] : 0;
      })()), a = r(i + 3 | 0);
      return () => (u(), a());
    }
    if (s === 2) {
      const u = $s(t)((() => {
        const c = i + 1 | 0;
        return c >= 0 && c < n.length ? n[c] : 0;
      })())((() => {
        const c = i + 2 | 0;
        return c >= 0 && c < n.length ? n[c] : 0;
      })()), a = r(i + 3 | 0);
      return () => (u(), a());
    }
    if (s === 3) {
      const u = ys(t)({
        cpx: (() => {
          const c = i + 1 | 0;
          return c >= 0 && c < n.length ? n[c] : 0;
        })(),
        cpy: (() => {
          const c = i + 2 | 0;
          return c >= 0 && c < n.length ? n[c] : 0;
        })(),
        x: (() => {
          const c = i + 3 | 0;
          return c >= 0 && c < n.length ? n[c] : 0;
        })(),
        y: (() => {
          const c = i + 4 | 0;
          return c >= 0 && c < n.length ? n[c] : 0;
        })()
      }), a = r(i + 5 | 0);
      return () => (u(), a());
    }
    if (s === 4) {
      const u = ty(t)({
        cp1x: (() => {
          const c = i + 1 | 0;
          return c >= 0 && c < n.length ? n[c] : 0;
        })(),
        cp1y: (() => {
          const c = i + 2 | 0;
          return c >= 0 && c < n.length ? n[c] : 0;
        })(),
        cp2x: (() => {
          const c = i + 3 | 0;
          return c >= 0 && c < n.length ? n[c] : 0;
        })(),
        cp2y: (() => {
          const c = i + 4 | 0;
          return c >= 0 && c < n.length ? n[c] : 0;
        })(),
        x: (() => {
          const c = i + 5 | 0;
          return c >= 0 && c < n.length ? n[c] : 0;
        })(),
        y: (() => {
          const c = i + 6 | 0;
          return c >= 0 && c < n.length ? n[c] : 0;
        })()
      }), a = r(i + 7 | 0);
      return () => (u(), a());
    }
    if (s === 5) {
      const u = rd(t), a = r(i + 1 | 0);
      return () => (u(), a());
    }
    return () => {
    };
  }, o = nd(t);
  return () => (o(), r(0)());
}, l3 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Bf(i)(Bf(r / 2)(o / 2)), u = ed(t)(n + s)(e);
  return () => (u(), $s(t)(n + r - s)(e)(), ys(t)({ cpx: n + r, cpy: e, x: n + r, y: e + s })(), $s(t)(n + r)(e + o - s)(), ys(t)({ cpx: n + r, cpy: e + o, x: n + r - s, y: e + o })(), $s(t)(n + s)(e + o)(), ys(t)({ cpx: n, cpy: e + o, x: n, y: e + o - s })(), $s(t)(n)(e + s)(), ys(t)({ cpx: n, cpy: e, x: n + s, y: e })(), rd(t)());
}, g3 = () => ({ font: { value: "" }, fill: { value: "" }, stroke: { value: "" } }), np = (t) => (n) => {
  const e = v0(t)({ x: 0, y: 0, width: n.width, height: n.height });
  return () => {
    e();
    const r = g3();
    return { ctx: t, surface: n, styleCache: r, maskDepth: { value: 0 }, groupAlpha: { value: 1 }, alphaSaves: { value: [] } };
  };
}, _3 = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, d3 = (t) => an(t.weight) + " " + zo(t.size) + "px " + t.family, Rr = (t) => {
  const n = zo(V(t.a) / 255);
  return t.a >= 255 ? "rgb(" + an(t.r) + "," + an(t.g) + "," + an(t.b) + ")" : "rgba(" + an(t.r) + "," + an(t.g) + "," + an(t.b) + "," + n + ")";
}, h3 = (t) => (n) => (e) => (r) => {
  const o = ru(t)(e)(Rr(r));
  return () => (o(), K2(t)({ x: 0, y: 0, width: n.width, height: n.height })());
}, p3 = (t) => (n) => (e) => {
  const r = n.font;
  return () => (r.value = "", n.fill.value = "", n.stroke.value = "", c3(t)({
    vx: e.viewport.vx,
    vy: e.viewport.vy,
    vw: e.viewport.vw,
    vh: e.viewport.vh,
    bgCss: Rr(e.bgColor),
    dotCss: Rr(e.dotColor),
    tile: e.tile,
    dotR: e.dotRadius,
    ox: e.origin.x,
    oy: e.origin.y
  })());
}, m3 = (t) => (n) => (e) => (r) => {
  const o = ru(t)(n)(Rr(r));
  return () => (o(), ac(t)(e)(), x0(t)());
}, $3 = (t) => (n) => (e) => (r) => (o) => {
  const i = ru(t)(n)(Rr(r));
  return () => (i(), gl(t)(n)(Rr(o.color))(), m0(t)(o.width)(), Xa(t)((() => {
    if (o.lineJoin === "RoundJoin")
      return qa;
    if (o.lineJoin === "BevelJoin")
      return k0;
    if (o.lineJoin === "MiterJoin")
      return S0;
    f();
  })())(), F0(t)((() => {
    if (o.lineCap === "ButtCap")
      return P0;
    if (o.lineCap === "RoundCap")
      return L0;
    if (o.lineCap === "SquareCap")
      return E0;
    f();
  })())(), ac(t)(e)(), x0(t)(), y0(t)());
}, y3 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = nd(t);
  return () => {
    if (s(), l3(t)(e.x)(e.y)(e.w)(e.h)(r)(), o.tag === "Just" ? (ru(t)(n)(Rr(o._1.color))(), x0(t)()) : o.tag === "Nothing" || f(), i.tag === "Just")
      return gl(t)(n)(Rr(i._1.color))(), m0(t)(i._1.width)(), Xa(t)((() => {
        if (i._1.lineJoin === "RoundJoin")
          return qa;
        if (i._1.lineJoin === "BevelJoin")
          return k0;
        if (i._1.lineJoin === "MiterJoin")
          return S0;
        f();
      })())(), F0(t)((() => {
        if (i._1.lineCap === "ButtCap")
          return P0;
        if (i._1.lineCap === "RoundCap")
          return L0;
        if (i._1.lineCap === "SquareCap")
          return E0;
        f();
      })())(), y0(t)();
    i.tag !== "Nothing" && f();
  };
}, x3 = (t) => (n) => (e) => (r) => {
  const o = gl(t)(n)(Rr(r.color));
  return () => (o(), m0(t)(r.width)(), Xa(t)((() => {
    if (r.lineJoin === "RoundJoin")
      return qa;
    if (r.lineJoin === "BevelJoin")
      return k0;
    if (r.lineJoin === "MiterJoin")
      return S0;
    f();
  })())(), F0(t)((() => {
    if (r.lineCap === "ButtCap")
      return P0;
    if (r.lineCap === "RoundCap")
      return L0;
    if (r.lineCap === "SquareCap")
      return E0;
    f();
  })())(), ac(t)(e)(), y0(t)());
}, l_ = (t) => (n) => (e) => {
  const r = ru(t)(n)(Rr(e.color));
  return () => (r(), f3(t)(n)(d3(e.font))(), R0(t)((() => {
    if (e.align === "AlignLeft")
      return oy;
    if (e.align === "AlignCenter")
      return b0;
    if (e.align === "AlignRight")
      return iy;
    f();
  })())(), A0(t)((() => {
    if (e.baseline === "BaselineTop")
      return ny;
    if (e.baseline === "BaselineMiddle")
      return C0;
    if (e.baseline === "BaselineAlphabetic")
      return ey;
    if (e.baseline === "BaselineBottom")
      return ry;
    f();
  })())(), T0(t)(e.content)(e.x)(e.y)());
}, ep = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => _3
}, v3 = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => ep
}, T3 = (t) => (n) => (e) => {
  const r = Bf(n.width / e.vw)(n.height / e.vh), o = pf(t)({ translateX: (n.width - e.vw * r) / 2 - e.vx * r, translateY: (n.height - e.vh * r) / 2 - e.vy * r });
  return () => (o(), Ls(t)({ scaleX: r, scaleY: r })(), Xa(t)(qa)());
}, w3 = { pure: (t) => (n) => () => t, Apply0: () => ep }, rp = { Applicative0: () => w3, Bind1: () => v3 }, _l = {
  fillPath: (t) => (n) => (e) => {
    const r = m3(e.ctx)(e.styleCache)(t)(n.color), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = x3(e.ctx)(e.styleCache)(t)(n), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = $3(r.ctx)(r.styleCache)(t)(n.color)(e), i = r.maskDepth;
    return () => {
      if (i.value === 0)
        return o();
    };
  },
  drawRoundedRect: (t) => (n) => (e) => (r) => (o) => {
    const i = y3(o.ctx)(o.styleCache)(t)(n)(e)(r), s = o.maskDepth;
    return () => {
      if (s.value === 0)
        return i();
    };
  },
  drawText: (t) => (n) => {
    const e = l_(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  drawTextAffine: (t) => (n) => (e) => {
    const r = Qr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", V2(e.ctx)(t)(), l_(e.ctx)(e.styleCache)(n)(), Or(e.ctx)(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "";
    };
  },
  pushTransform: (t) => (n) => {
    const e = Qr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", pf(n.ctx)({ translateX: t.tx, translateY: t.ty })(), Ls(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popTransform: (t) => {
    const n = Or(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBakedTransform: (t) => (n) => {
    const e = Qr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", pf(n.ctx)({ translateX: t.tx, translateY: t.ty })(), Ls(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popBakedTransform: (t) => {
    const n = Or(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushClip: (t) => (n) => (e) => {
    const r = Qr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0) {
        if (r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", ac(e.ctx)(t)(), n === "NonZero")
          return U2(e.ctx)();
        if (n === "EvenOdd")
          return u3(e.ctx)();
        f();
      }
    };
  },
  popClip: (t) => {
    const n = Or(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBlend: (t) => (n) => {
    const e = Qr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        if (e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", t === "Normal")
          return cg(n.ctx)(sy)();
        if (t === "Difference")
          return cg(n.ctx)(uy)();
        f();
      }
    };
  },
  popBlend: (t) => {
    const n = Or(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushAlpha: (t) => (n) => {
    const e = Qr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "";
        const i = n.groupAlpha.value, s = n.alphaSaves.value;
        n.alphaSaves.value = [...s, i];
        const u = i * t;
        return n.groupAlpha.value = u, M2(n.ctx)(u)();
      }
    };
  },
  popAlpha: (t) => {
    const n = Or(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0) {
        n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
        const o = t.alphaSaves.value, i = qe(o);
        if (i.tag === "Just")
          return t.alphaSaves.value = i._1.init, t.groupAlpha.value = i._1.last;
        if (i.tag === "Nothing")
          return t.groupAlpha.value = 1;
        f();
      }
    };
  },
  pushBlur: (t) => (n) => {
    const e = Qr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "";
        const i = a3(n.ctx)(t);
        if (t >= 0.01)
          return i();
      }
    };
  },
  popBlur: (t) => {
    const n = Or(t.ctx), e = t.maskDepth;
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
    const e = T3(n.ctx)(n.surface)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  clearBackground: (t) => (n) => {
    const e = h3(n.ctx)(n.surface)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  backgroundDots: (t) => (n) => {
    const e = p3(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = al(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = cl(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => ll,
  Monad0: () => rp
}, N3 = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ui = (t) => (n) => (e) => {
  const r = N3(0.05)(1 - t - n);
  return e < t ? 0 : e > 1 - n ? 1 : (e - t) / r;
}, op = (t) => {
  if (t.tag === "Retracted")
    return { lo: 0, hi: 0 };
  if (t.tag === "Extended")
    return { lo: 0, hi: 1 };
  if (t.tag === "Extending") {
    if (t._1 === "ExtendFromSource")
      return { lo: 0, hi: t._2 };
    if (t._1 === "ExtendFromTarget")
      return { lo: 1 - t._2, hi: 1 };
    f();
  }
  if (t.tag === "Retracting") {
    if (t._1 === "FromSource")
      return { lo: t._2, hi: 1 };
    if (t._1 === "FromTarget")
      return { lo: 0, hi: 1 - t._2 };
    if (t._1 === "FromBoth")
      return { lo: t._2 / 2, hi: 1 - t._2 / 2 };
  }
  f();
}, g_ = (t) => {
  const n = it.compare(0)(t), e = (() => {
    if (n === "LT")
      return t;
    if (n === "EQ" || n === "GT")
      return 0;
    f();
  })(), r = it.compare(1)(e);
  if (r === "LT" || r === "EQ")
    return 1;
  if (r === "GT")
    return e;
  f();
}, ci = (t) => {
  if (t.tag === "Hidden")
    return { alpha: 0, scale: 0 };
  if (t.tag === "Visible")
    return { alpha: 1, scale: 1 };
  if (t.tag === "PloppingIn")
    return { alpha: t._1 > 0 ? 1 : 0, scale: Ps(8)(0.6)(g_(t._1)) };
  if (t.tag === "PloppingOut")
    return { alpha: t._1 < 1 ? 1 : 0, scale: Ps(8)(0.6)(g_(1 - t._1)) };
  f();
};
function J3(t, n) {
  const e = n.x - t.x, r = n.y - t.y;
  return Math.sqrt(e * e + r * r);
}
function C3(t) {
  const n = t.length, e = new Array(n);
  for (let r = 0; r < n; r++) {
    const o = t[r], i = t[(r + 1) % n];
    e[r] = { a: o, b: i, len: J3(o, i) };
  }
  return e;
}
function b3(t, n, e) {
  let r = 0;
  for (let o = 0; o < t.length; o++) {
    const i = t[o], s = r, u = s + i.len;
    if (e <= u) {
      const a = i.len > 1e-6 ? (e - s) / i.len : 0;
      return {
        x: i.a.x + (i.b.x - i.a.x) * a,
        y: i.a.y + (i.b.y - i.a.y) * a
      };
    }
    r = u;
  }
  return n.length > 0 ? n[n.length - 1] : { x: 0, y: 0 };
}
function __(t, n) {
  if (n.length === 0) return [];
  const e = C3(n);
  let r = 0;
  for (let i = 0; i < e.length; i++) r += e[i].len;
  const o = new Array(t);
  for (let i = 0; i < t; i++)
    o[i] = b3(e, n, i * r / t);
  return o;
}
function k3(t, n) {
  const e = n.length;
  if (e === 0) return n;
  const r = (t % e + e) % e | 0, o = new Array(e);
  for (let i = 0; i < e; i++) o[i] = n[(i + r) % e];
  return o;
}
function S3(t, n) {
  const e = n.length;
  if (e === 0) return n;
  let r = 0, o = 1 / 0;
  for (let i = 0; i < e; i++) {
    let s = 0;
    for (let u = 0; u < e; u++) {
      const a = t[u] || { x: 0, y: 0 }, c = n[(u + i) % e] || { x: 0, y: 0 }, l = a.x - c.x, _ = a.y - c.y;
      s += l * l + _ * _;
    }
    s < o && (o = s, r = i);
  }
  return k3(r, n);
}
const d_ = (t) => (n) => (e) => {
  const r = __(t, n), o = __(t, e), i = S3(r, o);
  return { from: r, to: i };
};
function h_(t) {
  const n = t.length;
  if (n === 0) return { x: 0, y: 0 };
  let e = 0, r = 0;
  for (let o = 0; o < n; o++)
    e += t[o].x, r += t[o].y;
  return { x: e / n, y: r / n };
}
function L3(t, n) {
  const e = n.x - t.x, r = n.y - t.y, o = Math.sqrt(e * e + r * r);
  return o <= 1e-4 ? { x: 1, y: 0 } : { x: e / o, y: r / o };
}
function E3(t, n) {
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
function P3(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
const p_ = (t) => (n) => (e) => (r) => {
  const o = n.length;
  if (o === 0) return [];
  const i = h_(n), s = h_(e), u = L3(i, s), a = new Array(o);
  let c = 1 / 0, l = -1 / 0;
  for (let g = 0; g < o; g++) {
    const p = n[g], m = (p.x - i.x) * u.x + (p.y - i.y) * u.y;
    a[g] = m, m < c && (c = m), m > l && (l = m);
  }
  const _ = l - c;
  let d = new Array(o);
  for (let g = 0; g < o; g++) {
    const p = n[g], m = e[g];
    if (m === void 0) {
      d[g] = p;
      continue;
    }
    const h = _ <= 1e-4 ? 0 : r.maxDelay * (1 - (a[g] - c) / _), $ = Math.max(1e-4, 1 - h), x = P3((t - h) / $), y = x * x * (3 - 2 * x);
    d[g] = {
      x: p.x + (m.x - p.x) * y,
      y: p.y + (m.y - p.y) * y
    };
  }
  for (let g = 0; g < r.smoothPasses; g++)
    d = E3(0.5, d);
  return d;
}, ip = (t, n) => ({ tag: t, _1: n }), sp = (t, n) => ({ tag: t, _1: n }), Rn = (t, n, e) => ({ tag: t, _1: n, _2: e }), up = (t) => t, dl = (t, n) => ({ tag: t, _1: n }), hl = (t, n) => ({ tag: t, _1: n }), pl = (t) => t, cc = (t, n) => ({ tag: t, _1: n }), An = (t, n, e) => ({ tag: t, _1: n, _2: e }), fi = (t, n) => ({ tag: t, _1: n }), ou = (t, n) => ({ tag: t, _1: n }), ap = (t, n) => ({ tag: t, _1: n }), cp = (t) => t, fp = (t, n) => ({ tag: t, _1: n }), Qo = (t, n, e) => ({ tag: t, _1: n, _2: e }), lp = (t) => t, A3 = (t) => t, Fi = /* @__PURE__ */ lp("NormalTransform"), R3 = /* @__PURE__ */ lp("BakedTransform"), gp = /* @__PURE__ */ cp("TokenOutside"), m_ = /* @__PURE__ */ cp("TokenInside"), fc = /* @__PURE__ */ ou("PlainText"), _p = /* @__PURE__ */ fi("FrameTitle"), F3 = /* @__PURE__ */ fi("Watermark"), G3 = /* @__PURE__ */ pl("NodeShadow"), dp = /* @__PURE__ */ pl("NodeBody"), I3 = /* @__PURE__ */ pl("NodeInversion"), ml = /* @__PURE__ */ up("LabelsShown"), ha = /* @__PURE__ */ up("LabelsHidden"), or = {
  map: (t) => (n) => {
    if (n.tag === "BeginFrame")
      return An("BeginFrame", n._1, t(n._2));
    if (n.tag === "EndFrame")
      return An("EndFrame", t(n._1));
    if (n.tag === "BeginGroup")
      return An("BeginGroup", n._1, t(n._2));
    if (n.tag === "EndGroup")
      return An("EndGroup", n._1, t(n._2));
    if (n.tag === "Background")
      return An("Background", n._1, t(n._2));
    if (n.tag === "Overlay")
      return An("Overlay", n._1, t(n._2));
    if (n.tag === "Node")
      return An("Node", n._1, t(n._2));
    if (n.tag === "Edge")
      return An("Edge", n._1, t(n._2));
    if (n.tag === "Text")
      return An("Text", n._1, t(n._2));
    if (n.tag === "Token")
      return An("Token", n._1, t(n._2));
    if (n.tag === "AskInsideTokenStyle")
      return An("AskInsideTokenStyle", n._1, (e) => t(n._2(e)));
    f();
  }
}, hp = (t) => (n) => nu(t)(n), B3 = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = FC(t);
  return (r) => (o) => e(LC()()()({
    scene: (i) => {
      if (i.tag === "BeginFrame") {
        const s = i._2;
        return n.map((u) => s)(r.beginFrame(i._1));
      }
      if (i.tag === "EndFrame") {
        const s = i._1;
        return n.map((u) => s)(r.endFrame);
      }
      if (i.tag === "BeginGroup") {
        const s = i._2;
        return n.map((u) => s)(r.beginGroup(i._1));
      }
      if (i.tag === "EndGroup") {
        const s = i._2;
        return n.map((u) => s)(r.endGroup(i._1));
      }
      if (i.tag === "Background") {
        const s = i._2;
        return n.map((u) => s)(r.background(i._1));
      }
      if (i.tag === "Overlay") {
        const s = i._2;
        return n.map((u) => s)(r.overlay(i._1));
      }
      if (i.tag === "Node") {
        const s = i._2;
        return n.map((u) => s)(r.node(i._1));
      }
      if (i.tag === "Edge") {
        const s = i._2;
        return n.map((u) => s)(r.edge(i._1));
      }
      if (i.tag === "Text") {
        const s = i._2;
        return n.map((u) => s)(r.text(i._1));
      }
      if (i.tag === "Token") {
        const s = i._2;
        return n.map((u) => s)(r.token(i._1));
      }
      if (i.tag === "AskInsideTokenStyle")
        return n.map(i._2)(r.insideTokenStyle(i._1));
      f();
    },
    metrics: (i) => {
      if (i.tag === "MeasureText")
        return n.map(i._3)(r.measureText(i._1)(i._2));
      if (i.tag === "MeasureInk")
        return n.map(i._3)(r.measureInk(i._1)(i._2));
      f();
    }
  }))(o);
}, D3 = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("AskInsideTokenStyle", t, A3), map: or.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), pp = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Background", t, void 0), map: or.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), mp = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Edge", t, void 0), map: or.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), $l = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Node", t, void 0), map: or.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), lc = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Overlay", t, void 0), map: or.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), iu = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Text", t, void 0), map: or.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), $p = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Token", t, void 0), map: or.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), z3 = (t) => (n) => j(
  lt(
    "Bind",
    { type: "scene", value: An("BeginFrame", t, void 0), map: or.map },
    (e) => j(lt("Return", e), dt)
  ),
  at(
    "CatCons",
    () => j(
      n._1,
      (() => {
        if (n._2.tag === "CatNil")
          return at(
            "CatCons",
            () => j(
              lt(
                "Bind",
                { type: "scene", value: An("EndFrame", void 0), map: or.map },
                (e) => j(lt("Return", e), dt)
              ),
              dt
            ),
            ut(Y, Y)
          );
        if (n._2.tag === "CatCons")
          return at(
            "CatCons",
            n._2._1,
            ut(
              n._2._2._1,
              kt(
                "Cons",
                at(
                  "CatCons",
                  () => j(
                    lt(
                      "Bind",
                      { type: "scene", value: An("EndFrame", void 0), map: or.map },
                      (e) => j(lt("Return", e), dt)
                    ),
                    dt
                  ),
                  ut(Y, Y)
                ),
                n._2._2._2
              )
            )
          );
        f();
      })()
    ),
    ut(Y, Y)
  )
), ae = (t) => (n) => j(
  lt(
    "Bind",
    { type: "scene", value: An("BeginGroup", t, void 0), map: or.map },
    (e) => j(lt("Return", e), dt)
  ),
  at(
    "CatCons",
    () => {
      const e = () => j(
        lt(
          "Bind",
          { type: "scene", value: An("EndGroup", t, void 0), map: or.map },
          (r) => j(lt("Return", r), dt)
        ),
        dt
      );
      return j(
        n._1,
        (() => {
          if (n._2.tag === "CatNil")
            return at("CatCons", e, ut(Y, Y));
          if (n._2.tag === "CatCons")
            return at(
              "CatCons",
              n._2._1,
              ut(
                n._2._2._1,
                kt("Cons", at("CatCons", e, ut(Y, Y)), n._2._2._2)
              )
            );
          f();
        })()
      );
    },
    ut(Y, Y)
  )
), Fr = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, $_ = /* @__PURE__ */ w(gr)(0), y_ = (t) => (n) => (e) => {
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
}, H3 = /* @__PURE__ */ w((t) => (n) => t + n.len)(0), yp = (t) => {
  const n = Ht((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...wt(At(1, t.length, t))((e) => [2, e.x, e.y]), 5];
  f();
}, xp = (t) => (n) => {
  const e = Fr(n)(Fr(t.w / 2)(t.h / 2));
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
}, Q3 = (t) => {
  const n = Ht((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...wt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, yl = (t) => {
  const n = { x: t.x, y: t.y, w: t.w, h: t.h };
  if (t.shape === "Cylinder")
    return Kh(n);
  if (t.shape === "Parallelogram")
    return Yh(n);
  if (t.shape === "Diamond")
    return Zh(n);
  if (t.shape === "Ellipse")
    return Xh(n);
  if (t.shape === "Document")
    return Mh(n);
  if (t.shape === "Cloud")
    return tp(n)(7);
  if (t.shape === "Rectangle")
    return xp(n)(7);
  f();
}, zn = (t) => (n) => (e) => B((r) => {
  const o = V(r) / V(e);
  return { x: t.x + (n.x - t.x) * o, y: t.y + (n.y - t.y) * o };
})(Vt(0, e - 1 | 0)), O3 = (t) => {
  const n = Ie(t.w * 0.18)(t.h * 0.6);
  return [
    ...zn({ x: t.x + n, y: t.y })({ x: t.x + t.w, y: t.y })(16),
    ...zn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w - n, y: t.y + t.h })(16),
    ...zn({ x: t.x + t.w - n, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(16),
    ...zn({ x: t.x, y: t.y + t.h })({ x: t.x + n, y: t.y })(16)
  ];
}, Xs = (t) => (n) => {
  const e = Fr(t)(Fr(n.w / 2)(n.h / 2));
  return { ...n, x: n.x + e, y: n.y + e, w: n.w - 2 * e, h: n.h - 2 * e };
}, Df = (t) => (n) => {
  const e = n.y - t.y, r = n.x - t.x;
  return ne(r * r + e * e);
}, W3 = (t) => Ln((n) => (e) => ({ a: n, b: e, len: Df(n)(e) }), t, At(1, t.length, t)), q3 = (t) => (n) => {
  const e = n.length - 1 | 0, r = e >= 0 && e < n.length ? T("Just", n[e]) : v, o = (() => {
    if (r.tag === "Just")
      return [r._1];
    if (r.tag === "Nothing")
      return [];
    f();
  })(), i = 0 < n.length ? T("Just", n[0]) : v, s = (() => {
    if (i.tag === "Just")
      return i._1;
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    f();
  })(), u = n.length;
  return u < 3 ? n : [
    s,
    ...wt(Vt(1, u - 2 | 0))((a) => {
      const c = a + 1 | 0, l = c >= 0 && c < n.length ? T("Just", n[c]) : v, _ = a >= 0 && a < n.length ? T("Just", n[a]) : v, d = a - 1 | 0, g = d >= 0 && d < n.length ? T("Just", n[d]) : v;
      if (g.tag === "Just" && _.tag === "Just" && l.tag === "Just") {
        const p = _._1, m = Df(p)(l._1), h = Df(g._1)(p), $ = Fr(t)(m / 2), x = Fr(t)(h / 2), y = m > 0 ? $ / m : 0, J = p.x + (l._1.x - p.x) * y, N = p.y + (l._1.y - p.y) * y, C = h > 0 ? x / h : 0, S = p.x + (g._1.x - p.x) * C, P = p.y + (g._1.y - p.y) * C;
        return B((E) => {
          const Q = V(E) / V(10), W = 1 - Q;
          return { x: W * W * S + 2 * W * Q * p.x + Q * Q * J, y: W * W * P + 2 * W * Q * p.y + Q * Q * N };
        })(Vt(0, 10));
      }
      return [];
    }),
    ...o
  ];
}, X3 = (t) => (n) => (e) => (r) => (o) => B((i) => {
  const s = V(i) / V(o), u = 1 - s, a = s * s * s, c = 3 * u * s * s, l = 3 * u * u * s, _ = u * u * u;
  return { x: _ * t.x + l * n.x + c * e.x + a * r.x, y: _ * t.y + l * n.y + c * e.y + a * r.y };
})(Vt(0, o - 1 | 0)), Y3 = (t) => [
  ...zn({ x: t.x, y: t.y })({ x: t.x + t.w, y: t.y })(12),
  ...zn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h * 0.85 })(12),
  ...X3({ x: t.x + t.w, y: t.y + t.h * 0.85 })({ x: t.x + t.w * 0.66, y: t.y + t.h * 1.05 })({ x: t.x + t.w * 0.34, y: t.y + t.h * 0.65 })({
    x: t.x,
    y: t.y + t.h * 0.85
  })(32),
  ...zn({ x: t.x, y: t.y + t.h * 0.85 })({ x: t.x, y: t.y })(12)
], x_ = (t) => (n) => B((e) => {
  const r = 6.283185307179586 * V(e) / V(64);
  return { x: t.x + n * fe(r), y: t.y + n * we(r) };
})(Vt(0, 63)), vp = (t) => (n) => {
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
}, M3 = (t) => {
  const n = t.y + t.h / 2, e = Ie(t.h * 0.4)(t.w * 0.2);
  return [
    ...zn({ x: t.x + e, y: t.y })({ x: t.x + t.w - e, y: t.y })(10),
    ...zn({ x: t.x + t.w - e, y: t.y })({ x: t.x + t.w, y: n })(8),
    ...zn({ x: t.x + t.w, y: n })({ x: t.x + t.w - e, y: t.y + t.h })(8),
    ...zn({ x: t.x + t.w - e, y: t.y + t.h })({ x: t.x + e, y: t.y + t.h })(10),
    ...zn({ x: t.x + e, y: t.y + t.h })({ x: t.x, y: n })(8),
    ...zn({ x: t.x, y: n })({ x: t.x + e, y: t.y })(8)
  ];
}, xl = (t) => {
  const n = t.length;
  return n === 0 ? { x: 0, y: 0 } : { x: $_(B((e) => e.x)(t)) / V(n), y: $_(B((e) => e.y)(t)) / V(n) };
}, ku = (t) => (n) => (e) => (r) => (o) => B((i) => {
  const s = e + (r - e) * (V(i) / V(o));
  return { x: t.x + n * fe(s), y: t.y + n * we(s) };
})(Vt(0, o - 1 | 0)), zf = (t) => (n) => {
  const e = Fr(t)(Fr(n.w / 2)(n.h / 2));
  return [
    ...zn({ x: n.x + e, y: n.y })({ x: n.x + n.w - e, y: n.y })(6),
    ...ku({ x: n.x + n.w - e, y: n.y + e })(e)(4.71238898038469)(6.283185307179586)(12),
    ...zn({ x: n.x + n.w, y: n.y + e })({ x: n.x + n.w, y: n.y + n.h - e })(6),
    ...ku({ x: n.x + n.w - e, y: n.y + n.h - e })(e)(0)(1.5707963267948966)(12),
    ...zn({ x: n.x + n.w - e, y: n.y + n.h })({ x: n.x + e, y: n.y + n.h })(6),
    ...ku({ x: n.x + e, y: n.y + n.h - e })(e)(1.5707963267948966)(3.141592653589793)(12),
    ...zn({ x: n.x, y: n.y + n.h - e })({ x: n.x, y: n.y + e })(6),
    ...ku({ x: n.x + e, y: n.y + e })(e)(3.141592653589793)(4.71238898038469)(12)
  ];
}, pa = (t) => (n) => (e) => (r) => (o) => (i) => B((s) => {
  const u = r + (o - r) * (V(s) / V(i));
  return { x: t.x + n * fe(u), y: t.y + e * we(u) };
})(Vt(0, i - 1 | 0)), U3 = (t) => {
  const n = t.h * 0.38;
  return [
    ...wt(jh(Vh(Uh)({
      x: t.x,
      y: t.y - n,
      w: t.w,
      h: n
    }))(t.y))((e) => {
      const r = Wo(e.p2.y - e.c.cy)(e.p2.x - e.c.cx), o = Wo(e.p1.y - e.c.cy)(e.p1.x - e.c.cx);
      return pa({ x: e.c.cx, y: e.c.cy })(e.c.r)(e.c.r)(o)(r > o ? r : r + 6.283185307179586)(16);
    }),
    ...zn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h })(8),
    ...zn({ x: t.x + t.w, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(12),
    ...zn({ x: t.x, y: t.y + t.h })({ x: t.x, y: t.y })(8)
  ];
}, K3 = (t) => {
  const n = Fr(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.y + t.h + 5 - n - 2, i = t.x + e;
  return [
    ...pa({ x: i, y: r })(e)(n)(3.141592653589793)(6.283185307179586)(24),
    ...zn({ x: t.x + t.w, y: r })({ x: t.x + t.w, y: o })(12),
    ...pa({ x: i, y: o })(e)(n)(0)(3.141592653589793)(24),
    ...zn({ x: t.x, y: o })({ x: t.x, y: r })(12)
  ];
}, ei = (t) => (n) => n.shape === "Cylinder" ? K3(n) : n.shape === "Parallelogram" ? O3(n) : n.shape === "Diamond" ? M3(n) : n.shape === "Ellipse" ? zf(Ie(n.w)(n.h) / 2)(n) : n.shape === "Document" ? Y3(n) : n.shape === "Cloud" ? U3(n) : zf(t)(n), V3 = (t) => {
  const n = Fr(t.h * 0.075)(t.w * 0.075), e = t.w / 2;
  return pa({ x: t.x + e, y: t.y + n })(e)(n)(0)(3.141592653589793)(24);
}, j3 = (t) => (n) => (e) => w((r) => (o) => {
  const i = r.pos + o.len, s = e < i ? (e - r.pos) / o.len : 1, u = { x: o.a.x + (o.b.x - o.a.x) * s, y: o.a.y + (o.b.y - o.a.y) * s }, a = n > r.pos ? (n - r.pos) / o.len : 0, c = { x: o.a.x + (o.b.x - o.a.x) * a, y: o.a.y + (o.b.y - o.a.y) * a }, l = r.points.length - 1 | 0, _ = l >= 0 && l < r.points.length ? (() => {
    const d = r.points[l].x - c.x;
    return (d < 0 ? -d < 1e-4 : d < 1e-4) && (() => {
      const g = r.points[l].y - c.y;
      return g < 0 ? -g < 1e-4 : g < 1e-4;
    })();
  })() ? St(r.points)(u) : [...r.points, c, u] : [c, u];
  return o.len <= 0 || i <= n || r.pos >= e ? { ...r, pos: i } : { pos: i, points: _ };
})({ pos: 0, points: [] })(t).points, Z3 = (t) => (n) => (e) => {
  const r = Ht((o) => v, (o) => (i) => T("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just") {
    const o = W3(t), i = H3(o), s = y_(0)(i)(n * i), u = y_(0)(i)(e * i);
    return u <= s ? [] : j3(o)(s)(u);
  }
  f();
}, tb = (t) => (n) => (e) => (r) => {
  const o = r.x - e.x, i = r.y - e.y, s = n.x - t.x, u = n.y - t.y, a = e.x - t.x, c = e.y - t.y, l = s * i - u * o, _ = (a * i - c * o) / l, d = (a * u - c * s) / l;
  return (l < 0 ? -l < 1e-9 : l < 1e-9) ? v : _ >= 0 && _ <= 1 && d >= 0 && d <= 1 ? T("Just", _) : v;
}, nb = (t) => (n) => (e) => {
  const r = It((o) => (i) => it.compare(o.t)(i.t))(bt((o) => {
    const i = tb(n)(e)(o._1)(o._2);
    return i.tag === "Just" ? T("Just", { t: i._1, p: { x: n.x + (e.x - n.x) * i._1, y: n.y + (e.y - n.y) * i._1 } }) : v;
  })(Ln(Vn, t, [...At(1, t.length, t), ...At(0, 1, t)])));
  return 0 < r.length ? T("Just", r[0].p) : v;
}, v_ = (t) => (n) => {
  const e = qe(n);
  if (e.tag === "Nothing")
    return n;
  if (e.tag === "Just") {
    const r = e._1.init.length - 1 | 0;
    if (r >= 0 && r < e._1.init.length) {
      const o = nb(t)(e._1.init[r])(e._1.last);
      if (o.tag === "Just")
        return St(e._1.init)(o._1);
      if (o.tag === "Nothing")
        return n;
      f();
    }
    return n;
  }
  f();
}, fo = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Hf = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, eb = (t) => (n) => (e) => {
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
}, rb = (t) => (n) => {
  const e = fo(0)(t.y + 4 - n.y) + fo(0)(n.y + n.h - (t.y + t.h - 4)), r = fo(0)(t.x + 4 - n.x) + fo(0)(n.x + n.w - (t.x + t.w - 4));
  return r * n.h + e * n.w + r * e;
}, ob = (t) => (n) => {
  const e = t.y + t.h - 6, r = t.y + 6, o = t.x + 14, i = t.x + t.w - 14, s = w(fo)(0)(B((u) => o - 10 < u.x + u.w + 12 && i + 10 > u.x - 12 && r - 10 < u.y + u.h + 12 && e + 10 > u.y - 12 ? Hf((u.x + u.w + 12 - (o - 10)) / 0.7071067811865476)((e + 10 - (u.y - 12)) / 0.7071067811865476) : 0)(n));
  return { ...t, x: t.x + s * 0.7071067811865476, y: t.y - s * 0.7071067811865476 };
}, ib = (t) => (n) => {
  const e = Hf(t.x + t.w)(n.x + n.w) - fo(t.x)(n.x), r = Hf(t.y + t.h)(n.y + n.h) - fo(t.y)(n.y);
  return t.x < n.x + n.w && t.x + t.w > n.x && t.y < n.y + n.h && t.y + t.h > n.y ? e * r : 0;
}, T_ = (t) => (n) => (e) => (r) => {
  const o = t + 4, i = fo(0)(n - 8), s = o + i - e;
  return e <= i ? eb(o)(s)(r) : t + (n - e) / 2;
}, Qf = (t) => (n) => ({ ...n, x: T_(t.x)(t.w)(n.w)(n.x), y: T_(t.y)(t.h)(n.h)(n.y) }), sb = (t) => {
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
}, ub = (t) => (n) => (e) => (r) => (o) => {
  const i = o.y + o.h / 2 - e.token.y, s = o.y - r.y;
  return (() => {
    const u = o.x + o.w / 2 - e.token.x, a = o.x - r.x;
    return 1e6 * rb(t)(o) + 1e4 * w((c) => (l) => c + ib(o)(l))(0)(n) + 0.05 * (a * a + s * s) + 0.01 * (u * u + i * i);
  })() + (o.y > e.token.y ? 100 : 0);
}, ab = (t) => (n) => (e) => (r) => {
  const o = (s) => {
    const u = Qf(t)(s);
    return { rect: u, score: ub(t)(n)(e)(r)(u) };
  }, i = Ht((s) => v, (s) => (u) => T("Just", { head: s, tail: u }), [r, e.rect, ...sb(e)]);
  if (i.tag === "Nothing")
    return Qf(t)(r);
  if (i.tag === "Just")
    return w((s) => (u) => {
      const a = o(u);
      return a.score < s.score ? a : s;
    })(o(i._1.head))(i._1.tail).rect;
  f();
}, cb = (t) => (n) => (e) => w((r) => (o) => {
  const i = ob(o.rect)(r.obstacles), s = i.x >= t.x + 4 && i.y >= t.y + 4 && i.x + i.w <= t.x + t.w - 4 && i.y + i.h <= t.y + t.h - 4 ? i : ab(t)(r.obstacles)(o)(i);
  return { acc: tt(F)(o.id)(s)(r.acc), obstacles: St(r.obstacles)(s) };
})({ acc: G, obstacles: n })(e).acc, vl = (t) => t, Xr = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Mo = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, fb = /* @__PURE__ */ Zi(c0)(Yt), lb = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, gb = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, w_ = /* @__PURE__ */ vl("SegMove"), _b = /* @__PURE__ */ vl("SegLine"), db = /* @__PURE__ */ vl("SegQuad"), N_ = { offset: 0.4, passes: 1, rMax: 1.5 }, Tp = (t) => dn(Xe(t.x * 7919 + t.y * 3001 + t.w * 113 + t.h * 17 + 1)) * -1640531535 | 0, ma = (t) => (n) => (e) => () => {
  t.push(3), t.push(n.x), t.push(n.y), t.push(e.x), t.push(e.y);
}, gc = (t) => (n) => () => {
  t.push(1), t.push(n.x), t.push(n.y);
}, Mr = (t) => (n) => () => {
  t.push(2), t.push(n.x), t.push(n.y);
}, Ys = /* @__PURE__ */ (() => {
  const t = w((n) => (e) => ((n * 31 | 0) + dn(Xe(e.x * 100)) | 0) + dn(Xe(e.y * 100)) | 0)(1);
  return (n) => t(n) * -1640531535 | 0;
})(), hb = (t) => {
  const n = [];
  let e = 0, r = { x: 0, y: 0 };
  for (; e < t.length; ) {
    const o = e, i = r, s = o >= 0 && o < t.length ? T("Just", t[o]) : v;
    if (s.tag === "Nothing") {
      e = t.length;
      continue;
    }
    if (s.tag === "Just") {
      if (s._1 === 1) {
        const u = {
          x: (() => {
            const a = o + 1 | 0;
            return a >= 0 && a < t.length ? t[a] : 0;
          })(),
          y: (() => {
            const a = o + 2 | 0;
            return a >= 0 && a < t.length ? t[a] : 0;
          })()
        };
        n.push({ kind: w_, m: i, c: i, p: u, len: 0 }), r = u, e = o + 3 | 0;
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
        }, a = u.x - i.x, c = u.y - i.y;
        n.push({ kind: _b, m: i, c: i, p: u, len: ne(a * a + c * c) }), r = u, e = o + 3 | 0;
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
        }, a = u.x - i.x, c = u.y - i.y;
        n.push({
          kind: db,
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
          len: ne(a * a + c * c) * 1.05
        }), r = u, e = o + 5 | 0;
        continue;
      }
      if (s._1 === 5) {
        n.push({ kind: w_, m: i, c: i, p: i, len: 0 }), e = o + 1 | 0;
        continue;
      }
      e = t.length;
      continue;
    }
    f();
  }
  return n;
}, pb = (t) => (n) => {
  const e = n.length - 1 | 0, r = e < 1 ? [] : At(0, e, n), o = (() => {
    const s = r.length - 1 | 0;
    return s >= 0 && s < r.length ? T("Just", r[s]) : v;
  })(), i = n.length - 1 | 0;
  if (i >= 0 && i < n.length && o.tag === "Just") {
    const s = n[i].y - o._1.y, u = n[i].x - o._1.x, a = ne(u * u + s * s);
    return a <= 1e-4 ? n : St((() => {
      const c = n.length - 1 | 0;
      return c < 1 ? [] : At(0, c, n);
    })())({ x: n[i].x + u / a * t, y: n[i].y + s / a * t });
  }
  return n;
}, mb = (t) => (n) => (e) => fn(w((r) => (o) => {
  const i = Dn(0)(t)(r.prng), s = Dn(0)(6.283185307179586)(i.prng);
  return { prng: s.prng, out: [{ x: o.x + i.value * fe(s.value), y: o.y + i.value * we(s.value) }, ...r.out] };
})({ prng: n, out: [] })(e).out), $b = (t) => (n) => (e) => {
  if (n.kind === "SegMove")
    return gc(t)(n.p);
  if (n.kind === "SegLine")
    return Mr(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  if (n.kind === "SegQuad")
    return Mr(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  f();
}, yb = (t) => (n) => {
  if (n.kind === "SegMove")
    return gc(t)(n.p);
  if (n.kind === "SegLine")
    return Mr(t)(n.p);
  if (n.kind === "SegQuad")
    return ma(t)(n.c)(n.p);
  f();
}, wp = (t) => (n) => {
  const e = hb(n), r = w((u) => (a) => u + a.len)(0)(e) * Xr(0)(Mo(1)(t)), o = [];
  let i = 0, s = 0;
  for (; s < e.length; ) {
    const u = s, a = i;
    if (u >= 0 && u < e.length) {
      if (a + e[u].len <= r) {
        const c = e[u];
        yb(o)(c)(), i = a + c.len, s = u + 1 | 0;
        continue;
      }
      if (a >= r) {
        s = e.length;
        continue;
      }
      $b(o)(e[u])((r - a) / Xr(e[u].len)(1e-4))();
    }
    s = e.length;
  }
  return o;
}, J_ = { offset: 1.5, passes: 2, rMax: 14, overshoot: 2.5 }, Np = (t) => (n) => (e) => (r) => {
  const o = r.y - e.y, i = e.y - n.y, s = r.x - e.x, u = ne(s * s + o * o), a = e.x - n.x, c = ne(a * a + i * i), l = Mo(t.rMax * (J2(c > 0 && u > 0 ? Xr(-1)(Mo(1)((a * s + i * o) / (c * u))) : 1) / 3.141592653589793))(0.4 * Mo(c)(u));
  return { inP: c > 0 ? { x: e.x - a / c * l, y: e.y - i / c * l } : e, curr: e, outP: u > 0 ? { x: e.x + s / u * l, y: e.y + o / u * l } : e };
}, Jp = (t) => (n) => {
  const e = n.length, r = [], o = 0 < n.length ? T("Just", n[0]) : v;
  if (o.tag === "Just" ? gc(r)(o._1)() : o.tag === "Nothing" || f(), e >= 3) {
    let s = 1;
    for (; s <= (e - 2 | 0); ) {
      const u = s, a = u + 1 | 0;
      if (a >= 0 && a < n.length) {
        if (u >= 0 && u < n.length) {
          const c = u - 1 | 0;
          if (c >= 0 && c < n.length) {
            const l = Np(t)(n[c])(n[u])(n[a]);
            Mr(r)(l.inP)(), ma(r)(l.curr)(l.outP)();
          }
        }
        s = u + 1 | 0;
        continue;
      }
      s = u + 1 | 0;
    }
  }
  const i = n.length - 1 | 0;
  return i >= 0 && i < n.length && e >= 2 && Mr(r)(n[i])(), r;
}, xb = (t) => (n) => (e) => (r) => (o) => {
  if (o.length < 4)
    return Jp(t)(o);
  const i = 0 < o.length ? T("Just", o[0]) : v, s = (() => {
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = o.length - 1 | 0, a = jr(jr(n)(u) + u | 0)(u), c = (g) => {
    const p = jr(g + u | 0)(u);
    return p >= 0 && p < o.length ? o[p] : s;
  }, l = B((g) => Np(t)(c((a + g | 0) - 1 | 0))(c(a + g | 0))(c((a + g | 0) + 1 | 0)))(Vt(
    0,
    u - 1 | 0
  )), _ = [], d = 0 < l.length ? T("Just", l[0]) : v;
  if (d.tag === "Just")
    if (gc(_)(d._1.outP)(), fb((() => {
      const g = Ht((p) => v, (p) => (m) => T("Just", m), l);
      if (g.tag === "Nothing")
        return [];
      if (g.tag === "Just")
        return g._1;
      f();
    })())((g) => {
      const p = Mr(_)(g.inP);
      return () => (p(), ma(_)(g.curr)(g.outP)());
    })(), e)
      Mr(_)(d._1.inP)(), ma(_)(d._1.curr)(d._1.outP)(), _.push(5);
    else {
      const g = l.length - 1 | 0;
      g >= 0 && g < l.length ? Mr(_)((() => {
        const p = 1 - r;
        return { x: l[g].outP.x + (d._1.inP.x - l[g].outP.x) * p, y: l[g].outP.y + (d._1.inP.y - l[g].outP.y) * p };
      })())() : Mr(_)(d._1.inP)();
    }
  else d.tag === "Nothing" || f();
  return _;
}, Gi = (t) => (n) => (e) => (r) => {
  const o = lb(1)(r.length - 1 | 0), i = Dn(0)(V(o))(Gf("shape")(n)), s = gb(o - 1 | 0)(dn(Xe(i.value))), u = i.prng;
  return B((a) => {
    const c = Dn(0)(1)(Gf(an(a))(u)), l = Dn(-0.18)(0.3)(c.prng), _ = c.value < 0.7, d = Dn(0.5)(0.85)(l.prng), g = mb(t.offset)(d.prng)(r);
    return { path: e ? xb(t)(s)(_)(l.value)(g) : Jp(t)(g), alpha: d.value };
  })(Vt(0, t.passes - 1 | 0));
}, vb = (t) => (n) => (e) => Gi(t)(n)(!0)([
  { x: e.x, y: e.y },
  { x: e.x + e.w, y: e.y },
  { x: e.x + e.w, y: e.y + e.h },
  { x: e.x, y: e.y + e.h },
  { x: e.x, y: e.y }
]), Tb = (t) => (n) => (e) => {
  const r = Xr(0)(Mo(1)(e)), o = n.h / V(4), i = Xr(6)(o * 1.4);
  return bt((s) => s)(B((s) => {
    if (r < Xr(0)(V(s) / V(4) - 0.05))
      return v;
    const u = Gf(an(s))(t), a = Xr(0)(V(s) / V(4) - 0.05), c = jr(s)(2) === 0, l = c ? n.x - 2 : n.x + n.w + 2, _ = c ? n.x + n.w + 2 : n.x - 2, d = n.y + (V(s) + 0.5) * o;
    return T(
      "Just",
      {
        path: wp(Xr(0)(Mo(1)((r - a) / Xr(1e-4)(Mo(1)(V(s + 1 | 0) / V(4) + 0.05) - a))))((() => {
          const g = { rMax: 2, offset: 0.6, passes: 1 }, p = fn(w((h) => ($) => {
            const x = Dn(-o * 0.08)(o * 0.08)(h.prng);
            return { prng: x.prng, out: [{ x: l + (_ - l) * (V($) / V(4)), y: d + x.value }, ...h.out] };
          })({ prng: u, out: [] })(Vt(0, 4)).out), m = p.length < 2 ? [] : Gi(g)(u)(!1)(p);
          return 0 < m.length ? m[0].path : [];
        })()),
        width: i,
        alpha: 1
      }
    );
  })(Vt(0, 3)));
}, Kc = (t, n, e) => ({ tag: t, _1: n, _2: e }), $a = (t) => (n) => (e) => {
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
}, Hn = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, le = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ke);
  return (n) => t(ge("IterNode", n, Ue));
})(), Jr = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Go = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, eo = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, wb = Yt.foldMap(H2), Du = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Cp = /* @__PURE__ */ pn(F)(Yt), bp = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Nb = /* @__PURE__ */ j1(F), Jb = (t) => (e) => {
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
}, ri = (t) => {
  const n = t.Apply0();
  return (e) => w((r) => (o) => n.apply(n.Functor0().map((i) => s0)(r))(e(o)))(t.pure());
}, io = /* @__PURE__ */ ri(ni), kp = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, a = Ui(o)(i)(r), c = 0 < t.length ? T("Just", t[0]) : v, l = (() => {
    if (c.tag === "Just")
      return c._1;
    if (c.tag === "Nothing")
      return u;
    f();
  })(), _ = t.length - 1 | 0, d = _ >= 0 && _ < t.length ? T("Just", t[_]) : v, g = (() => {
    if (d.tag === "Just")
      return d._1;
    if (d.tag === "Nothing")
      return s;
    f();
  })(), p = d_(128)(ei(4)(Xs(2)(n)))(x_(l)(6)), m = l.x - u.x, h = 2 * (() => {
    const H = l.y - u.y;
    return (m < 0 ? -m : m) + (H < 0 ? -H : H);
  })(), $ = g.x - s.x, x = 2 * (() => {
    const H = g.y - s.y;
    return ($ < 0 ? -$ : $) + (H < 0 ? -H : H);
  })(), y = h + Ma(t) + x, J = y <= 1e-4 ? 1 : 1 - x / y, N = y <= 1e-4 ? 0 : h / y, C = J - N, S = d_(128)(x_(g)(6))(ei(4)(Xs(2)(e))), P = { maxDelay: 0.4, smoothPasses: 2 }, E = jo(t)($a(0)(1)(C <= 1e-4 ? 0 : (a - N) / C)), Q = (() => {
    if (E.tag === "Just")
      return E._1;
    if (E.tag === "Nothing")
      return l;
    f();
  })(), W = (() => {
    if (J >= 1)
      return 0;
    const H = (a - J) / (1 - J), rt = H < 0 ? 0 : H > 1 ? 1 : H;
    return rt * rt * (3 - 2 * rt);
  })(), D = (() => {
    if (N <= 1e-4)
      return 1;
    const H = a / N, rt = H < 0 ? 0 : H > 1 ? 1 : H;
    return rt * rt * (3 - 2 * rt);
  })();
  return a < N ? Qo("PolyShape", p_(D)(p.from)(p.to)(P)) : a >= J ? Qo("PolyShape", p_(W)(S.from)(S.to)(P)) : Qo("CircleShape", Q, 6);
}, Tl = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = kp(t)(n)(e)(r)(o)(i);
  if (s.tag === "PolyShape")
    return xl(s._1);
  if (s.tag === "CircleShape")
    return s._1;
  f();
}, wl = /* @__PURE__ */ (() => {
  const t = { r: 24, g: 24, b: 27, a: 255 }, n = { r: 244, g: 244, b: 245, a: 255 }, e = { r: 248, g: 249, b: 246, a: 255 }, r = { r: 26, g: 26, b: 26, a: 255 }, o = { r: 28, g: 101, b: 192, a: 255 }, i = { r: 247, g: 248, b: 250, a: 255 }, s = { r: 42, g: 48, b: 60, a: 255 }, u = { r: 120, g: 130, b: 146, a: 255 };
  return (a) => {
    if (a === "Light")
      return {
        bg: { r: 255, g: 255, b: 255, a: 255 },
        bgTransparent: { r: 0, g: 0, b: 0, a: 0 },
        bgDot: { r: 214, g: 211, b: 209, a: 255 },
        shadowFill: { r: 255, g: 255, b: 255, a: 255 },
        shadowDot: { r: 26, g: 26, b: 26, a: 255 },
        chip: { r: 255, g: 235, b: 130, a: 255 },
        chipShadow: { r: 214, g: 211, b: 209, a: 255 },
        chipText: Hr,
        nodeFill: wn,
        nodeStroke: Hr,
        text: Hr,
        edge: Hr,
        arrowFill: Hr,
        tokenOutsideFill: Hr,
        tokenOutsideStroke: wn,
        tokenInside: wn,
        tokenInsideStroke: wn,
        tokenInsideBlend: Bu,
        tokenInsideAlpha: 1,
        chipPillFill: Hr,
        chipPillText: wn,
        chipHairline: { r: 26, g: 26, b: 26, a: 90 },
        trailDot: Hr,
        wobble: !1,
        fontFamily: "Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    if (a === "Dark")
      return {
        bg: t,
        bgTransparent: { r: 0, g: 0, b: 0, a: 0 },
        bgDot: { r: 63, g: 63, b: 70, a: 255 },
        shadowFill: t,
        shadowDot: n,
        chip: { r: 234, g: 179, b: 8, a: 255 },
        chipShadow: { r: 0, g: 0, b: 0, a: 120 },
        chipText: t,
        nodeFill: Hr,
        nodeStroke: n,
        text: n,
        edge: n,
        arrowFill: n,
        tokenOutsideFill: wn,
        tokenOutsideStroke: wn,
        tokenInside: wn,
        tokenInsideStroke: wn,
        tokenInsideBlend: Bu,
        tokenInsideAlpha: 1,
        chipPillFill: n,
        chipPillText: t,
        chipHairline: { r: 244, g: 244, b: 245, a: 120 },
        trailDot: n,
        wobble: !1,
        fontFamily: "Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    if (a === "Blueprint")
      return {
        bg: o,
        bgTransparent: { r: 0, g: 0, b: 0, a: 0 },
        bgDot: { r: 90, g: 160, b: 230, a: 255 },
        shadowFill: o,
        shadowDot: wn,
        chip: wn,
        chipShadow: { r: 0, g: 0, b: 0, a: 120 },
        chipText: o,
        nodeFill: o,
        nodeStroke: wn,
        text: wn,
        edge: wn,
        arrowFill: wn,
        tokenOutsideFill: wn,
        tokenOutsideStroke: wn,
        tokenInside: wn,
        tokenInsideStroke: wn,
        tokenInsideBlend: c_,
        tokenInsideAlpha: 0.35,
        chipPillFill: wn,
        chipPillText: o,
        chipHairline: { r: 255, g: 255, b: 255, a: 120 },
        trailDot: wn,
        wobble: !1,
        fontFamily: "Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    if (a === "Whiteboard")
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
        tokenInsideBlend: c_,
        tokenInsideAlpha: 1,
        chipPillFill: r,
        chipPillText: e,
        chipHairline: { r: 26, g: 26, b: 26, a: 90 },
        trailDot: r,
        wobble: !0,
        fontFamily: "Supermarker, Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    if (a === "Isometric")
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
        tokenOutsideStroke: wn,
        tokenInside: wn,
        tokenInsideStroke: wn,
        tokenInsideBlend: Bu,
        tokenInsideAlpha: 1,
        chipPillFill: s,
        chipPillText: wn,
        chipHairline: { r: 60, g: 66, b: 78, a: 90 },
        trailDot: s,
        wobble: !1,
        fontFamily: "Ilisarniq, ui-sans-serif, system-ui, sans-serif"
      };
    f();
  };
})(), Of = (t) => (n) => wt(le(t.nodes))((e) => {
  const r = Hn(e._1)(n.nodes);
  return r.tag === "Just" && ci(r._1).alpha > 0 ? yl(e._2) : [];
}), Cb = (t) => (n) => (e) => [
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
  ...Of(n)(e)
], bb = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = vo.traverse(r);
  return (i) => (s) => {
    const u = Ir(s), a = 0.32 * i.size;
    return o((c) => e.bind(c === 0 ? r.pure(0) : t.measureText(i)(On(c)(s)))((l) => e.bind(t.measureText(i)(On(c + 1 | 0)(s)))((_) => e.bind(t.measureInk(i)(c >= 0 && c < u.length ? ns(u[c]) : " "))((d) => r.pure({ x: l, w: _ - l, up: d.ascent - a, down: d.descent + a })))))(Vt(
      0,
      u.length - 1 | 0
    ));
  };
}, kb = (t) => (n) => {
  const e = (o) => (o.x - n.x) * (o.x - n.x) + (o.y - n.y) * (o.y - n.y), r = w((o) => (i) => e(i) < e(o) ? i : o)({ x: t.x, y: t.y })([{ x: t.x, y: t.y }, { x: t.x + t.w, y: t.y }, { x: t.x, y: t.y + t.h }, { x: t.x + t.w, y: t.y + t.h }]);
  return B((o) => {
    const i = V(o) / 5;
    return { x: r.x + (n.x - r.x) * i, y: r.y + (n.y - r.y) * i };
  })([1, 2, 3, 4]);
}, Wf = (t) => {
  const n = Jo(`
`)(t);
  return n.length === 0 ? [""] : n;
}, Sb = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = { x: e.x + e.w / 2, y: e.y + e.h / 2 }, u = { x: n.x + n.w / 2, y: n.y + n.h / 2 }, a = Ui(o)(i)(r), c = 0 < t.length ? T("Just", t[0]) : v, l = (() => {
    if (c.tag === "Just")
      return c._1;
    if (c.tag === "Nothing")
      return u;
    f();
  })(), _ = t.length - 1 | 0, d = _ >= 0 && _ < t.length ? T("Just", t[_]) : v, g = (() => {
    if (d.tag === "Just")
      return d._1;
    if (d.tag === "Nothing")
      return s;
    f();
  })(), p = l.x - u.x, m = 2 * (() => {
    const P = l.y - u.y;
    return (p < 0 ? -p : p) + (P < 0 ? -P : P);
  })(), h = g.x - s.x, $ = 2 * (() => {
    const P = g.y - s.y;
    return (h < 0 ? -h : h) + (P < 0 ? -P : P);
  })(), x = m + Ma(t) + $, y = x <= 1e-4 ? 1 : 1 - $ / x, J = x <= 1e-4 ? 0 : m / x, N = y - J, C = jo(t)($a(0)(1)(N <= 1e-4 ? 0 : (a - J) / N)), S = (() => {
    if (C.tag === "Just")
      return C._1;
    if (C.tag === "Nothing")
      return l;
    f();
  })();
  return a < J ? Kc("InsideRect", Xs(2)(n)) : a >= y ? Kc("InsideRect", Xs(2)(e)) : Kc("InsideBall", S, 6);
}, qf = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = (a, c) => $p({
    id: a,
    pass: t,
    geometry: ap("FlatToken", c),
    position: (() => {
      if (c.tag === "CircleShape")
        return c._1;
      if (c.tag === "PolyShape")
        return xl(c._1);
      f();
    })(),
    plan: fp("FlatTokenPlan", { wobble: e, fill: i, stroke: s })
  });
  return io((a) => {
    if (a._2.tag === "Travelling") {
      const c = Hn(a._2._1.target)(r.nodes), l = Hn(a._2._1.source)(r.nodes);
      if (l.tag === "Just" && c.tag === "Just") {
        const _ = eo(a._2._1.edge)(r.edges);
        if (_.tag === "Just") {
          const d = (() => {
            if (a._2._1.direction === "Forward")
              return _._1;
            if (a._2._1.direction === "Backward")
              return fn(_._1);
            f();
          })();
          return u(
            a._1,
            (() => {
              if (n) {
                const g = Sb(d)(l._1)(c._1)(a._2._1.progress)(a._2._1.holdPre)(a._2._1.holdPost);
                if (g.tag === "InsideRect")
                  return Qo("PolyShape", zf(4)(g._1));
                if (g.tag === "InsideBall")
                  return Qo("CircleShape", g._1, g._2);
                f();
              }
              return kp(d)(l._1)(c._1)(a._2._1.progress)(a._2._1.holdPre)(a._2._1.holdPost);
            })()
          );
        }
        if (_.tag === "Nothing") {
          const d = Ui(a._2._1.holdPre)(a._2._1.holdPost)(a._2._1.progress), g = { x: l._1.x + l._1.w / 2, y: l._1.y + l._1.h / 2 }, p = { x: c._1.x + c._1.w / 2, y: c._1.y + c._1.h / 2 };
          return ae({
            path: [],
            role: Se,
            layer: v,
            effects: [
              Rn(
                "GroupAlpha",
                (() => {
                  if (d < 0.5) {
                    const h = d * 2;
                    return 1 - Jr(0)(Go(1)(h)) * Jr(0)(Go(1)(h)) * (3 - 2 * Jr(0)(Go(1)(h)));
                  }
                  const m = (d - 0.5) * 2;
                  return Jr(0)(Go(1)(m)) * Jr(0)(Go(1)(m)) * (3 - 2 * Jr(0)(Go(1)(m)));
                })()
              )
            ]
          })(u(a._1, Qo("CircleShape", d < 0.5 ? g : p, 6)));
        }
        f();
      }
      return j(lt("Return", void 0), dt);
    }
    if (a._2.tag === "Filling") {
      if (e)
        return j(lt("Return", void 0), dt);
      const c = Hn(a._2._1.node)(r.nodes);
      if (c.tag === "Just")
        return u(
          a._1,
          Qo(
            "PolyShape",
            ei(4)(Xs(2)(c._1))
          )
        );
      if (c.tag === "Nothing")
        return j(lt("Return", void 0), dt);
      f();
    }
    return j(lt("Return", void 0), dt);
  })(le(o.tokens));
}, Lb = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0();
  return (o) => e.bind((() => {
    const i = r.pure();
    if (o.clear.tag === "Nothing")
      return i;
    if (o.clear.tag === "Just")
      return t.clearBackground(o.clear._1);
    f();
  })())(() => e.bind(t.setViewport(o.viewport))(() => {
    const i = r.pure();
    if (o.dots.tag === "Nothing")
      return i;
    if (o.dots.tag === "Just")
      return t.backgroundDots(o.dots._1);
    f();
  }));
}, Sp = (t) => (n) => (e) => (r) => ae({
  path: [],
  role: Se,
  layer: v,
  effects: [
    Rn("GroupAlpha", e.fadeAlpha),
    Rn(
      "GroupTransform",
      Fi,
      { tx: t.x * (1 - e.popScale), ty: (t.y + t.h) * (1 - e.popScale), sx: e.popScale, sy: e.popScale }
    ),
    Rn(
      "GroupTransform",
      Fi,
      { tx: 0, ty: n.y * (1 - e.flipY), sx: 1, sy: e.flipY }
    )
  ]
})(iu(r)), Lp = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => {
  const l = ci(c), _ = c.tag === "PloppingOut" && r.wobble ? { alpha: 1, scale: 1 } : l, d = Jo(`
`)(a.label === "" ? u : a.label), g = d.length === 0 ? [""] : d, p = { family: r.fontFamily, size: r.wobble ? 15 : 11, weight: r.wobble ? 800 : 500 }, m = p.size * 1.2, h = { tx: (a.x + a.w / 2) * (1 - _.scale), ty: (a.y + a.h / 2) * (1 - _.scale), sx: _.scale, sy: _.scale }, $ = (a.shape === "Cylinder" ? (a.y + (a.y + a.h + 5 - 2 * Ie(a.h * 0.075)(a.w * 0.075))) / 2 : (a.y + a.y + a.h) / 2) - V(g.length) * m / 2 + m / 2, x = $l({
    id: u,
    role: t,
    geometry: dl("FlatNode", { shape: a.shape, bounds: { x: a.x, y: a.y, w: a.w, h: a.h } }),
    alpha: o,
    plan: hl(
      "FlatNodePlan",
      { palette: r, label: a.label, labelVisibility: n, inkBoost: e, labelAlpha: i, arrival: s, animState: c }
    )
  }), y = () => {
    if (n === "LabelsHidden")
      return j(lt("Return", void 0), dt);
    if (n === "LabelsShown") {
      const J = ae({
        path: [],
        role: Se,
        layer: v,
        effects: [
          Rn("GroupAlpha", _.alpha * o),
          Rn("GroupTransform", Fi, h),
          Rn("GroupAlpha", i)
        ]
      })(io((N) => iu({
        owner: fi("NodeText", u),
        text: N._2,
        spec: {
          x: a.x + a.w / 2,
          y: $ + V(N._1) * m,
          content: N._2,
          font: p,
          color: r.text,
          align: oo,
          baseline: Ye
        },
        bounds: v,
        plan: fc
      }))(Xt(Vn)(g)));
      return i > 0 && _.alpha * o > 0 ? J : j(lt("Return", void 0), dt);
    }
    f();
  };
  return j(
    x._1,
    (() => {
      if (x._2.tag === "CatNil")
        return at("CatCons", y, ut(Y, Y));
      if (x._2.tag === "CatCons")
        return at(
          "CatCons",
          x._2._1,
          ut(
            x._2._2._1,
            kt("Cons", at("CatCons", y, ut(Y, Y)), x._2._2._2)
          )
        );
      f();
    })()
  );
}, Eb = (t) => (n) => (e) => (r) => (o) => (i) => (s) => Sp(o)(i)(s)({
  owner: fi("TokenText", t),
  text: e,
  spec: {
    x: i.x,
    y: i.y,
    content: e,
    font: { family: n.fontFamily, size: 11, weight: 500 },
    color: n.chipText,
    align: oo,
    baseline: Ye
  },
  bounds: T("Just", o),
  plan: ou(
    "TokenFillingText",
    {
      shadow: { ...o, y: o.y + 1.5 },
      shadowFill: { color: n.chipShadow, flat: !0 },
      radius: 6,
      fill: { color: n.chip, flat: !0 },
      stroke: { color: n.chipHairline, width: 1, lineJoin: ie, lineCap: Me },
      leader: [1, i.x, o.y + o.h, 2, r.x + r.w / 2, r.y]
    }
  )
}), Pb = { offset: 0.8, passes: 2, rMax: 5 }, Xf = (t) => (n) => (e) => (r) => ae({
  path: [],
  role: Se,
  layer: T("Just", QC),
  effects: [Rn("GroupClip", Cb(n)(e)(r), XC)]
})(qf(gp)(!1)(t.wobble)(e)(r)(t.tokenOutsideFill)(t.tokenOutsideStroke)), Ep = (t) => (n) => (e) => (r) => {
  if (n.tokenInsideBlend === "Difference") {
    const o = D3(t), i = (s) => {
      const u = ae({
        path: [],
        role: Se,
        layer: T("Just", OC),
        effects: [
          Rn("GroupBlend", Bu),
          Rn("GroupClip", Of(e)(r), Ws)
        ]
      })(qf(m_)(s === "ConvexAbsorb")(n.wobble)(e)(r)(n.tokenInside)(n.tokenInsideStroke)), a = () => ae({
        path: [],
        role: Se,
        layer: T("Just", WC),
        effects: []
      })(io((c) => {
        const l = Hn(c._1)(r.nodes);
        return l.tag === "Just" && ci(l._1).alpha > 0 ? lc(cc(
          "FloorOverlay",
          {
            path: yl(c._2),
            fill: T("Just", { color: wn, flat: !1 }),
            stroke: v
          }
        )) : j(lt("Return", void 0), dt);
      })(le(e.nodes)));
      return j(
        u._1,
        (() => {
          if (u._2.tag === "CatNil")
            return at("CatCons", a, ut(Y, Y));
          if (u._2.tag === "CatCons")
            return at(
              "CatCons",
              u._2._1,
              ut(
                u._2._2._1,
                kt("Cons", at("CatCons", a, ut(Y, Y)), u._2._2._2)
              )
            );
          f();
        })()
      );
    };
    return j(
      o._1,
      (() => {
        if (o._2.tag === "CatNil")
          return at("CatCons", i, ut(Y, Y));
        if (o._2.tag === "CatCons")
          return at(
            "CatCons",
            o._2._1,
            ut(
              o._2._2._1,
              kt("Cons", at("CatCons", i, ut(Y, Y)), o._2._2._2)
            )
          );
        f();
      })()
    );
  }
  if (n.tokenInsideBlend === "Normal")
    return ae({
      path: [],
      role: Se,
      layer: v,
      effects: [
        Rn("GroupClip", Of(e)(r), Ws),
        Rn("GroupAlpha", n.tokenInsideAlpha)
      ]
    })(qf(m_)(!1)(n.wobble)(e)(r)(n.tokenInside)(n.tokenInsideStroke));
  f();
}, C_ = (t) => (n) => (e) => (r) => t.strokePath((() => {
  const o = Ht(
    (i) => v,
    (i) => (s) => T("Just", { head: i, tail: s }),
    B((i) => i.pt)(y2(
      (i) => (s) => {
        const u = V(s) / V(72), a = Dn(-0.18)(0.18)(i.prng), c = Dn(-0.1)(0.1)(a.prng), l = Dn(-0.07)(0.07)(c.prng), _ = e * (0.05 + 0.55 * u) * (1 + c.value), d = u * 28.274333882308138 + a.value;
        return { prng: l.prng, pt: { x: n.x + fe(d) * _ + l.value * e, y: n.y + we(d) * _ + l.value * e } };
      },
      { prng: 137, pt: { x: n.x, y: n.y } },
      Vt(0, 72)
    ))
  );
  if (o.tag === "Just")
    return [1, o._1.head.x, o._1.head.y, ...wb((i) => [2, i.x, i.y])(o._1.tail)];
  if (o.tag === "Nothing")
    return [];
  f();
})())({ color: r, width: 5.5, lineJoin: ie, lineCap: hr }), Ab = (t) => {
  const n = t.Monad0().Applicative0();
  return (e) => {
    if (e.geometry.tag === "FlatToken" && e.plan.tag === "FlatTokenPlan") {
      if (e.geometry._1.tag === "CircleShape")
        return e.plan._1.wobble ? C_(t)(e.geometry._1._1)(e.geometry._1._2)({ r: 200, g: 35, b: 30, a: 220 }) : t.fillStrokePath(vp(e.geometry._1._1)(e.geometry._1._2))({
          color: e.plan._1.fill,
          flat: !0
        })({ color: e.plan._1.stroke, width: 1, lineJoin: ie, lineCap: Me });
      if (e.geometry._1.tag === "PolyShape")
        return e.plan._1.wobble && e.geometry._1._1.length >= 3 ? C_(t)(xl(e.geometry._1._1))(6)({ r: 200, g: 35, b: 30, a: 220 }) : e.geometry._1._1.length >= 3 ? t.fillStrokePath(yp(e.geometry._1._1))({ color: e.plan._1.fill, flat: !0 })({
          color: e.plan._1.stroke,
          width: 1,
          lineJoin: ie,
          lineCap: Me
        }) : n.pure();
      f();
    }
    return n.pure();
  };
}, Rb = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = t.popClip, i = t.popTransform, s = t.popAlpha;
  return (u) => (a) => (c) => (l) => {
    const _ = ci(l), d = { ...c, y: c.y + 5 }, g = d.x + d.w / 2, p = d.y + d.h / 2, m = r.bind(t.pushAlpha(_.alpha))(() => r.bind(t.pushTransform({
      tx: g * (1 - _.scale),
      ty: p * (1 - _.scale),
      sx: _.scale,
      sy: _.scale
    }))(() => r.bind(t.drawRoundedRect({ x: d.x, y: d.y, w: d.w, h: d.h })(7)(T("Just", { color: u.shadowFill, flat: !0 }))(v))(() => r.bind((() => {
      const h = r.bind(t.pushClip(xp(d)(7))(Ws))(() => r.bind(t.backgroundDots({
        viewport: { vx: d.x, vy: d.y, vw: d.w, vh: d.h },
        bgColor: u.bgTransparent,
        dotColor: u.shadowDot,
        tile: 1.6,
        dotRadius: 0.25,
        origin: { x: 0, y: 0 }
      }))(() => o));
      return a && !u.wobble ? h : e.pure();
    })())(() => r.bind(t.drawRoundedRect({ x: d.x, y: d.y, w: d.w, h: d.h })(7)(v)(T(
      "Just",
      { color: u.nodeStroke, width: 1.25, lineJoin: ie, lineCap: Me }
    )))(() => r.bind(i)(() => s))))));
    return _.alpha > 0 && !u.wobble ? m : e.pure();
  };
}, Pp = (t) => (n) => (e) => (r) => io((o) => {
  const i = Hn(o._1)(r.nodes);
  if (i.tag === "Just")
    return $l({
      id: o._1,
      role: G3,
      geometry: dl("FlatNode", { shape: o._2.shape, bounds: { x: o._2.x, y: o._2.y, w: o._2.w, h: o._2.h } }),
      alpha: 1,
      plan: hl(
        "FlatNodePlan",
        {
          palette: t,
          label: o._2.label,
          labelVisibility: ha,
          inkBoost: n ? 1 : 0,
          labelAlpha: 0,
          arrival: v,
          animState: i._1
        }
      )
    });
  if (i.tag === "Nothing")
    return j(lt("Return", void 0), dt);
  f();
})(le(e.nodes)), Ap = (t) => (n) => (e) => {
  const r = { ...t, nodeFill: t.text, text: t.nodeFill, nodeStroke: t.nodeFill };
  return io((o) => {
    const i = Hn(o._1)(e.nodes), s = Hn(o._1)(n.nodes), u = s.tag === "Just" && i.tag === "Just" ? ae({
      path: [],
      role: Se,
      layer: v,
      effects: [Rn("GroupAlpha", o._2)]
    })(Lp(I3)(ml)(1)(r)(1)(1)(v)(o._1)(s._1)(i._1)) : j(lt("Return", void 0), dt);
    return o._2 > 0 ? u : j(lt("Return", void 0), dt);
  })(le(e.nodeInvert));
}, Fb = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = ri(n.Applicative0());
  return (i) => (s) => (u) => o((a) => e.bind(t.pushAlpha(a.alpha))(() => e.bind(t.strokePath(a.path)({
    color: i.nodeFill,
    width: a.width,
    lineJoin: ie,
    lineCap: hr
  }))(() => r)))(Tb(Tp(s) + 7777 | 0)(s)(u));
}, Gb = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = n.Applicative0(), i = ri(o), s = t.popClip, u = ri(o), a = vo.traverse(o), c = bb(t), l = Fb(t), _ = t.popTransform;
  return (d) => (g) => (p) => (m) => (h) => ($) => (x) => (y) => (J) => {
    const N = (R) => e.bind(t.pushAlpha(R.alpha))(() => e.bind(t.strokePath(R.path)({
      color: p.nodeStroke,
      width: 2,
      lineJoin: ie,
      lineCap: hr
    }))(() => r)), C = { family: p.fontFamily, size: p.wobble ? 15 : 11, weight: p.wobble ? 800 : 500 }, S = Jo(`
`)(y.label === "" ? x : y.label), P = S.length === 0 ? [""] : S, E = C.size * 1.2, Q = y.shape === "Cylinder" ? t.strokePath(r3({ x: y.x, y: y.y, w: y.w, h: y.h }))({
      color: p.nodeStroke,
      width: 1.25,
      lineJoin: ie,
      lineCap: Me
    }) : o.pure(), W = (y.shape === "Cylinder" ? (y.y + (y.y + y.h + 5 - 2 * Ie(y.h * 0.075)(y.w * 0.075))) / 2 : (y.y + y.y + y.h) / 2) - V(P.length) * E / 2 + E / 2, D = J.tag === "PloppingOut" && p.wobble ? J._1 : -1, H = D >= 0, rt = ci(J), ot = H ? { alpha: 1, scale: 1 } : rt, M = y.x + y.w / 2, q = y.y + y.h / 2, A = e.bind(t.pushAlpha(ot.alpha * m))(() => e.bind(t.pushTransform({
      tx: M * (1 - ot.scale),
      ty: q * (1 - ot.scale),
      sx: ot.scale,
      sy: ot.scale
    }))(() => {
      const R = { x: y.x, y: y.y, w: y.w, h: y.h }, X = {
        color: p.nodeStroke,
        width: p.wobble ? 2 : 1.25 * g,
        lineJoin: ie,
        lineCap: p.wobble ? hr : Me
      };
      return e.bind((() => {
        if (p.wobble) {
          if (y.shape === "Rectangle")
            return i(N)(vb(J_)(Tp(R))(R));
          const L = ei(7)(y);
          return e.bind(i(N)((() => {
            const I = Ys(L);
            return L.length < 4 ? [] : Gi(N_)(I)(!0)(L);
          })()))(() => u((I) => i(N)((() => {
            const z = Ys(I);
            return I.length < 2 ? [] : Gi(N_)(z)(!1)(I);
          })()))(y.shape === "Cylinder" ? [V3(y)] : []));
        }
        return e.bind(i3(t)(y.shape)(R)(7)(T("Just", { color: p.nodeFill, flat: !1 }))(T(
          "Just",
          X
        )))(() => Q);
      })())(() => e.bind((() => {
        if ($.tag === "Just" && p.wobble && !H) {
          const L = $._1;
          return e.bind(a(c(C))(P))((I) => {
            const z = It((ft) => (mt) => it.compare(ft.x)(mt.x)), U = dn(Xe(y.x * 7919 + y.y * 3001)) * -1640531535 | 0, K = Dn(5)(7.5)(U), O = Dn(0)(K.value)(K.prng), Z = -(1 + 2 * Dn(-1)(1)(O.prng).value * 3.141592653589793 / 180), et = (ft, mt, Ft, Lt, zt) => z(bt((tn) => tn)([
              Z * mt + ft >= Lt && Z * mt + ft <= zt ? T("Just", { x: mt, y: Z * mt + ft }) : v,
              Z * Ft + ft >= Lt && Z * Ft + ft <= zt ? T("Just", { x: Ft, y: Z * Ft + ft }) : v,
              (() => {
                const tn = (Lt - ft) / Z;
                return tn >= mt && tn <= Ft ? T("Just", { x: tn, y: Lt }) : v;
              })(),
              (() => {
                const tn = (zt - ft) / Z;
                return tn >= mt && tn <= Ft ? T("Just", { x: tn, y: zt }) : v;
              })()
            ])), nt = K.value, gt = jr(L.frameHash)(3), ct = gt === 0 ? { r: 200, g: 35, b: 30, a: 220 } : gt === 1 ? { r: 35, g: 150, b: 80, a: 220 } : { r: 30, g: 80, b: 200, a: 220 }, $t = y.x + y.w / 2, Pt = Ee(Xt((ft) => (mt) => Xt((() => {
              const Ft = W + V(ft) * E, Lt = $t - w((zt) => (tn) => zt + tn.w)(0)(mt) / 2;
              return (zt) => (tn) => {
                const pe = C.size * 0.1, Mn = zt - 1 | 0, jn = Mn >= 0 && Mn < mt.length && zt > 0 ? (mt[Mn].x + mt[Mn].w + tn.x) / 2 : tn.x - pe;
                return {
                  x: Lt + jn - 1,
                  y: Ft - tn.up - 1,
                  w: Jr(0)((() => {
                    const Qt = zt + 1 | 0;
                    return Qt >= 0 && Qt < mt.length && zt < (mt.length - 1 | 0) ? (tn.x + tn.w + mt[Qt].x) / 2 - jn : tn.x + tn.w + pe - jn;
                  })()) + 2,
                  h: tn.up + tn.down + 2
                };
              };
            })())(mt))(I)), Rt = y.y + 4, rn = y.x + y.w - 4, xt = y.x + 4, Gt = Rt - Z * xt + O.value, vt = y.y + y.h - 4, Jt = wt(wt(Xt((ft) => (mt) => {
              const Ft = (mt.from.x + mt.to.x) / 2, Lt = (mt.from.y + mt.to.y) / 2, zt = Dn(-1)(1)(U + (911 * (ft + 1 | 0) | 0) | 0), tn = Dn(-3)(5)(zt.prng), pe = zt.value * 3.141592653589793 / 180, Mn = fe(pe), jn = we(pe), Qt = (Ot) => ({ x: Ft + (Ot.x - Ft) * Mn - (Ot.y - Lt) * jn, y: Lt + (Ot.x - Ft) * jn + (Ot.y - Lt) * Mn });
              return {
                from: (() => {
                  const Ot = Qt(mt.from), me = Ot.y - Lt, ee = Ot.x - Ft, Un = ne(ee * ee + me * me), Qn = Un < 1e-4 ? 1 : (Un + tn.value) / Un;
                  return { x: Ft + ee * Qn, y: Lt + me * Qn };
                })(),
                to: (() => {
                  const Ot = Qt(mt.to), me = Dn(-3)(5)(tn.prng).value, ee = Ot.y - Lt, Un = Ot.x - Ft, Qn = ne(Un * Un + ee * ee), ar = Qn < 1e-4 ? 1 : (Qn + me) / Qn;
                  return { x: Ft + Un * ar, y: Lt + ee * ar };
                })()
              };
            })(bt((ft) => {
              const mt = et(Gt + V(ft) * nt, xt, rn, Rt, vt);
              return mt.length === 2 ? T("Just", { from: mt[0], to: mt[1] }) : v;
            })(Vt(0, Du(1)(dn(Xe((vt - Z * rn - Gt) / nt)))))))((ft) => ht(
              (mt) => mt.to.x - mt.from.x > 1,
              w((mt) => (Ft) => wt(mt)((Lt) => {
                const zt = et(Lt.from.y - Z * Lt.from.x, Ft.x, Ft.x + Ft.w, Ft.y, Ft.y + Ft.h);
                return zt.length === 2 ? zt[0].x > Lt.from.x + 1e-3 && zt[1].x < Lt.to.x - 1e-3 ? [{ from: Lt.from, to: zt[0] }, { from: zt[1], to: Lt.to }] : zt[0].x <= Lt.from.x + 1e-3 && zt[1].x < Lt.to.x - 1e-3 ? [{ from: zt[1], to: Lt.to }] : zt[0].x > Lt.from.x + 1e-3 && zt[1].x >= Lt.to.x - 1e-3 ? [{ from: Lt.from, to: zt[0] }] : [] : [Lt];
              }))([ft])(Pt)
            )))((ft) => (() => {
              const mt = ft.to.x - ft.from.x;
              return ne(2) * (mt >= 0 ? mt : -mt) <= 28;
            })() ? [ft] : [
              { from: ft.from, to: { x: ft.from.x + (ft.to.x - ft.from.x) * 0.495, y: ft.from.y + (ft.to.y - ft.from.y) * 0.495 } },
              { from: { x: ft.from.x + (ft.to.x - ft.from.x) * 0.505, y: ft.from.y + (ft.to.y - ft.from.y) * 0.505 }, to: ft.to }
            ]), _t = Jt.length, yt = (ft) => Jr(0)(Go(1)(L.t * V(_t) - V(ft)));
            return e.bind(t.pushClip(yp(ei(7)(y)))(Ws))(() => e.bind(i((ft) => {
              const mt = ft._1, Ft = Dn(1.4)(1.9)(U + (1303 * (mt + 1 | 0) | 0) | 0), Lt = Dn(0.35)(0.8)(Ft.prng), zt = i((tn) => e.bind(t.pushAlpha(tn.alpha * Lt.value))(() => e.bind(t.strokePath(wp(yt(mt))(tn.path))({
                color: ct,
                width: Ft.value,
                lineJoin: ie,
                lineCap: hr
              }))(() => r)))(Gi({ ...J_, rMax: 0, offset: 0.5 })(U + (53 * (mt + 1 | 0) | 0) | 0)(!1)([ft._2.from, ft._2.to]));
              return yt(mt) > 0 ? zt : o.pure();
            })(Xt(Vn)(Jt)))(() => s));
          });
        }
        return o.pure();
      })())(() => e.bind((() => {
        if (d === "LabelsShown") {
          const L = e.bind(t.pushAlpha(h))(() => e.bind(i((I) => t.drawText({
            x: y.x + y.w / 2,
            y: W + V(I._1) * E,
            content: I._2,
            font: C,
            color: p.text,
            align: oo,
            baseline: Ye
          }))(Xt(Vn)(P)))(() => r));
          return h > 0 ? L : o.pure();
        }
        if (d === "LabelsHidden")
          return o.pure();
        f();
      })())(() => e.bind((() => {
        const L = l(p)(R)(D);
        return H ? L : o.pure();
      })())(() => e.bind(_)(() => r)))));
    }));
    return ot.alpha * m > 0 ? A : o.pure();
  };
}, Ib = (t) => {
  const n = Rb(t), e = Gb(t);
  return (r) => {
    if (r.geometry.tag === "FlatNode" && r.plan.tag === "FlatNodePlan") {
      const o = {
        x: r.geometry._1.bounds.x,
        y: r.geometry._1.bounds.y,
        w: r.geometry._1.bounds.w,
        h: r.geometry._1.bounds.h,
        label: r.plan._1.label,
        shape: r.geometry._1.shape
      };
      if (r.role === "NodeShadow")
        return n(r.plan._1.palette)(r.plan._1.inkBoost > 0)(o)(r.plan._1.animState);
      if (r.role === "NodeBody" || r.role === "NodeInversion")
        return e(ha)(r.plan._1.inkBoost)(r.plan._1.palette)(r.alpha)(0)(r.plan._1.arrival)(r.id)(o)(r.plan._1.animState);
      f();
    }
    return t.Monad0().Applicative0().pure();
  };
}, Rp = (t) => (n) => (e) => {
  const r = (o) => {
    const i = en((s) => o.x >= s._2.x - 1 && o.x <= s._2.x + s._2.w + 1 && o.y >= s._2.y - 1 && o.y <= s._2.y + s._2.h + 1)(le(n.nodes));
    return i.tag === "Just" ? T("Just", i._1._2) : v;
  };
  return io((o) => {
    const i = eo(o._1)(e.edges);
    if (i.tag === "Just") {
      const s = eo(o._1)(e.edgeFadeAlpha), u = (() => {
        if (s.tag === "Nothing")
          return 1;
        if (s.tag === "Just")
          return s._1;
        f();
      })(), a = mp({
        id: o._1,
        geometry: ip(
          "FlatRoute",
          (() => {
            const c = (() => {
              if (0 < o._2.length) {
                const _ = r(o._2[0]);
                if (_.tag === "Just")
                  return fn(v_(ei(7)(_._1))(fn(o._2)));
              }
              return o._2;
            })(), l = c.length - 1 | 0;
            if (l >= 0 && l < c.length) {
              const _ = r(c[l]);
              if (_.tag === "Just")
                return v_(ei(7)(_._1))(c);
            }
            return c;
          })()
        ),
        visible: op(i._1),
        arrow: (() => {
          const c = wo("conn:")(o._1);
          if (c.tag === "Just")
            return !1;
          if (c.tag === "Nothing")
            return !0;
          f();
        })(),
        plan: sp("FlatEdgePlan", t)
      });
      return u === 1 ? a : ae({
        path: [],
        role: Se,
        layer: v,
        effects: [Rn("GroupAlpha", u)]
      })(a);
    }
    if (i.tag === "Nothing")
      return j(lt("Return", void 0), dt);
    f();
  })(le(n.edges));
}, Bb = (t) => (n) => (e) => {
  const r = { family: t.fontFamily, size: 11, weight: 500 };
  return io((o) => {
    if (o._2 === "" || (() => {
      const u = eo(o._1)(e.edges);
      return u.tag === "Nothing" || !(u.tag === "Just" && Vx.eq(u._1)(Ed));
    })())
      return j(lt("Return", void 0), dt);
    const i = eo(o._1)(n.edges), s = (() => {
      if (i.tag === "Just")
        return jo(i._1)(0.5);
      if (i.tag === "Nothing")
        return v;
      f();
    })();
    if (s.tag === "Nothing")
      return j(lt("Return", void 0), dt);
    if (s.tag === "Just") {
      const u = s._1, a = nu(r)(o._2), c = (l) => {
        const _ = l + 12;
        return iu({
          owner: fi("EdgeText", o._1),
          text: o._2,
          spec: {
            x: u.x,
            y: u.y,
            content: o._2,
            font: r,
            color: t.chipPillText,
            align: oo,
            baseline: Ye
          },
          bounds: T("Just", { x: u.x - _ / 2, y: u.y - 8.5, w: _, h: 17 }),
          plan: ou(
            "RoundedText",
            { radius: 3, fill: T("Just", { color: t.chipPillFill, flat: !0 }), stroke: v }
          )
        });
      };
      return j(
        a._1,
        (() => {
          if (a._2.tag === "CatNil")
            return at("CatCons", c, ut(Y, Y));
          if (a._2.tag === "CatCons")
            return at(
              "CatCons",
              a._2._1,
              ut(
                a._2._2._1,
                kt("Cons", at("CatCons", c, ut(Y, Y)), a._2._2._2)
              )
            );
          f();
        })()
      );
    }
    f();
  })(le(n.edgeLabels));
}, Fp = (t) => {
  const n = (e) => {
    if (e.tag === "Leaf")
      return G;
    if (e.tag === "Node")
      return Zt(
        "Node",
        e._1,
        e._2,
        e._3,
        Qf({ x: t.vx, y: t.vy, w: t.vw, h: t.vh })(e._4),
        n(e._5),
        n(e._6)
      );
    f();
  };
  return n;
}, Db = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = ri(r);
  return (i) => (s) => (u) => (a) => (c) => (l) => {
    const _ = is(l).length, d = V(_ + 1 | 0), g = ($) => {
      const x = (u * d - V($)) / 1.5, y = x < 0 ? 0 : x > 1 ? 1 : x;
      return y * y * (3 - 2 * y);
    }, m = (($) => {
      let x = $, y = !0, J;
      for (; y; ) {
        const N = x;
        if (N >= _) {
          y = !1, J = N;
          continue;
        }
        if (g(N) >= 1) {
          x = N + 1 | 0;
          continue;
        }
        y = !1, J = N;
      }
      return J;
    })(0), h = m >= _ ? [] : kr(($) => g($) > 0)(Vt(m, _ - 1 | 0)).init;
    return e.bind((() => {
      const $ = t.drawText({
        x: a,
        y: c,
        content: On(m)(l),
        font: i,
        color: s,
        align: Mi,
        baseline: Ye
      });
      return m > 0 ? $ : r.pure();
    })())(() => o(($) => e.bind(t.measureText(i)(On($)(l)))((x) => {
      const y = g($);
      return t.drawText({
        x: a + x,
        y: c - (1 - y) * 10,
        content: On(1)(Oi(mr(On($)(l)))(l)),
        font: i,
        color: { ...s, a: dn(Xe(y * V(s.a))) },
        align: Mi,
        baseline: Ye
      });
    }))(h));
  };
}, Gp = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = ri(r), i = Db(t);
  return (s) => {
    if (s.plan.tag === "PlainText")
      return t.drawText(s.spec);
    if (s.plan.tag === "RoundedText")
      return e.bind((() => {
        const u = r.pure();
        if (s.bounds.tag === "Nothing")
          return u;
        if (s.bounds.tag === "Just")
          return t.drawRoundedRect(s.bounds._1)(s.plan._1.radius)(s.plan._1.fill)(s.plan._1.stroke);
        f();
      })())(() => t.drawText(s.spec));
    if (s.plan.tag === "TokenTravelText") {
      const u = s.plan._1;
      return e.bind(o((a) => t.fillPath(vp(a)(1.5))(u.trailFill))(u.trail))(() => e.bind((() => {
        const a = r.pure();
        if (s.bounds.tag === "Nothing")
          return a;
        if (s.bounds.tag === "Just")
          return t.drawRoundedRect(s.bounds._1)(u.radius)(T("Just", u.fill))(v);
        f();
      })())(() => i(s.spec.font)(s.spec.color)(u.reveal)(u.textLeft)(s.spec.y)(s.text)));
    }
    if (s.plan.tag === "TokenFillingText") {
      const u = s.plan._1;
      return e.bind(t.drawRoundedRect(u.shadow)(u.radius)(T("Just", u.shadowFill))(v))(() => e.bind((() => {
        const a = r.pure();
        if (s.bounds.tag === "Nothing")
          return a;
        if (s.bounds.tag === "Just")
          return t.drawRoundedRect(s.bounds._1)(u.radius)(T("Just", u.fill))(T("Just", u.stroke));
        f();
      })())(() => e.bind(t.strokePath(u.leader)(u.stroke))(() => t.drawText(s.spec))));
    }
    if (s.plan.tag === "AffineText")
      return t.drawTextAffine(s.plan._1)(s.spec);
    f();
  };
}, zb = (t) => (n) => (e) => (r) => (o) => (i) => (s) => Sp(r)(o)(i)({
  owner: fi("TokenText", t),
  text: e.line,
  spec: {
    x: o.x,
    y: o.y,
    content: e.line,
    font: { family: n.fontFamily, size: 11, weight: 500 },
    color: n.chipPillText,
    align: Mi,
    baseline: Ye
  },
  bounds: T("Just", r),
  plan: ou(
    "TokenTravelText",
    {
      trail: kb(r)(s),
      trailFill: { color: n.trailDot, flat: !0 },
      radius: 3,
      fill: { color: n.chipPillFill, flat: !0 },
      textLeft: r.x + 14,
      reveal: (() => {
        const u = e.phaseInLabel / 0.45;
        return u < 0 ? 0 : u > 1 ? 1 : u;
      })()
    }
  )
}), ya = (t) => (n) => (e) => (r) => {
  const o = B((p) => V(Du(1)(is(p).length)))(r), i = Jr(1)(w(gr)(0)(o)), s = Ui(n)(e)(t), u = s * i, a = Du(1)(r.length), l = ((p) => (m) => (h) => {
    let $ = p, x = m, y = h, J = !0, N;
    for (; J; ) {
      const C = $, S = x, E = Ht((Q) => v, (Q) => (W) => T("Just", { head: Q, tail: W }), y);
      if (E.tag === "Nothing") {
        J = !1, N = Du(0)(a - 1 | 0);
        continue;
      }
      if (E.tag === "Just") {
        if (S + E._1.head >= u) {
          J = !1, N = C;
          continue;
        }
        $ = C + 1 | 0, x = S + E._1.head, y = E._1.tail;
        continue;
      }
      f();
    }
    return N;
  })(0)(0)(o), _ = w(gr)(0)(l < 1 ? [] : At(0, l, o)), d = _ / i;
  if (l >= 0 && l < o.length) {
    const p = (_ + o[l]) / i;
    return {
      line: l >= 0 && l < r.length ? r[l] : "",
      phaseInLabel: (() => {
        if (p <= d)
          return 1;
        const m = (s - d) / (p - d);
        return m < 0 ? 0 : m > 1 ? 1 : m;
      })()
    };
  }
  const g = (_ + 1) / i;
  return {
    line: l >= 0 && l < r.length ? r[l] : "",
    phaseInLabel: (() => {
      if (g <= d)
        return 1;
      const p = (s - d) / (g - d);
      return p < 0 ? 0 : p > 1 ? 1 : p;
    })()
  };
}, Ip = (t) => (n) => (e) => (r) => (o) => t.Bind1().bind(n({
  family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif",
  size: 11,
  weight: 500
})(ya(r)(0)(0)(B(ro)(o)).line))((i) => {
  const s = i + 28;
  return t.Applicative0().pure({ x: e.x + e.w / 2 - s / 2, y: e.y - 25.2 - 14, w: s, h: 25.2 });
}), Hb = (t) => {
  const n = t.Bind1(), e = t.Applicative0(), r = vo.traverse(e);
  return (o) => (i) => (s) => n.Apply0().Functor0().map((u) => Cp(bt((a) => a)(u)))(r((u) => {
    if (u._2.tag === "Filling" && u._2._1.labels.length !== 0) {
      const a = Hn(u._2._1.node)(i.nodes);
      if (a.tag === "Just")
        return n.bind(Ip(t)(o)(a._1)(u._2._1.progress)(u._2._1.labels))((c) => e.pure(T(
          "Just",
          b(u._1, c)
        )));
      if (a.tag === "Nothing")
        return e.pure(v);
      f();
    }
    return e.pure(v);
  })(le(s.tokens)));
}, Qb = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => {
  const c = Tl(e)(r)(o)(i)(s)(u);
  return t.Bind1().bind(n({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(ya(i)(s)(u)(wt(a)(Wf)).line))((l) => t.Applicative0().pure({
    x: c.x + 14 + l / 2 - l / 2 - 14,
    y: c.y - 6 - 8 - 6.6 - 6,
    w: l + 28,
    h: 25.2
  }));
}, Ob = (t) => {
  const n = t.Bind1(), e = t.Applicative0(), r = vo.traverse(e);
  return (o) => (i) => (s) => n.Apply0().Functor0().map((u) => Cp(bt((a) => a)(u)))(r((u) => {
    if (u._2.tag === "Travelling" && u._2._1.labels.length !== 0) {
      const a = Hn(u._2._1.target)(i.nodes), c = Hn(u._2._1.source)(i.nodes), l = eo(u._2._1.edge)(i.edges);
      if (l.tag === "Just" && c.tag === "Just" && a.tag === "Just") {
        const _ = (() => {
          if (u._2._1.direction === "Forward")
            return l._1;
          if (u._2._1.direction === "Backward")
            return fn(l._1);
          f();
        })(), d = Tl(_)(c._1)(a._1)(u._2._1.progress)(u._2._1.holdPre)(u._2._1.holdPost);
        return n.bind(Qb(t)(o)(_)(c._1)(a._1)(u._2._1.progress)(u._2._1.holdPre)(u._2._1.holdPost)(u._2._1.labels))((g) => e.pure(T(
          "Just",
          b(u._1, { id: u._1, rect: g, token: d })
        )));
      }
    }
    return e.pure(v);
  })(le(s.tokens)));
}, Nl = (t) => {
  const n = t.Bind1(), e = Ob(t), r = Hb(t);
  return (o) => (i) => (s) => (u) => n.bind(e(o)(s)(u))((a) => n.bind(r(o)(s)(u))((c) => t.Applicative0().pure(cb({
    x: i.vx,
    y: i.vy,
    w: i.vw,
    h: i.vh
  })([
    ...bt((l) => {
      const _ = Hn(l._1)(u.nodes);
      return _.tag === "Just" && ci(_._1).alpha > 0 ? T("Just", { x: l._2.x, y: l._2.y, w: l._2.w, h: l._2.h }) : v;
    })(le(s.nodes)),
    ...(() => {
      const l = (_, d) => {
        if (_.tag === "Leaf")
          return d;
        if (_.tag === "Node")
          return l(_._5, kt("Cons", _._4, l(_._6, d)));
        f();
      };
      return jt(Jn.foldr, l(c, Y));
    })()
  ])(bt((l) => bp(l)(a))((() => {
    const l = (_) => {
      if (_.tag === "Leaf")
        return G;
      if (_.tag === "Node")
        return Zt("Node", _._1, _._2, _._3, void 0, l(_._5), l(_._6));
      f();
    };
    return It(F.compare)(jt(be.foldr, l(a)));
  })())))));
}, Wb = /* @__PURE__ */ Nl(il), b_ = (t) => (n) => (e) => {
  const r = Ps(6)(0.55)($a(0)(1)((1 - t) / 0.06)), o = t > 0.94, i = o && e > 1e-4, s = Ps(6)(0.55)($a(0)(1)(t / 0.06)), u = t < 0.06, a = u && n > 1e-4, c = o && e <= 1e-4;
  return {
    popScale: a ? s : i ? r : 1,
    flipY: u && n <= 1e-4 ? s : c ? r : 1,
    fadeAlpha: (() => {
      if (a) {
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
}, xa = (t) => (n) => (e) => (r) => ae({
  path: [],
  role: Se,
  layer: T("Just", qC),
  effects: []
})(io((o) => {
  if (o._2.tag === "Travelling") {
    if (o._2._1.labels.length !== 0) {
      const i = Hn(o._2._1.target)(n.nodes), s = Hn(o._2._1.source)(n.nodes), u = eo(o._2._1.edge)(n.edges), a = bp(o._1)(r);
      if (a.tag === "Just" && u.tag === "Just" && s.tag === "Just" && i.tag === "Just")
        return zb(o._1)(t)(ya(o._2._1.progress)(o._2._1.holdPre)(o._2._1.holdPost)(wt(o._2._1.labels)(Wf)))(a._1)({
          x: a._1.x + a._1.w / 2,
          y: a._1.y + a._1.h / 2
        })(b_(o._2._1.progress)(o._2._1.holdPre)(o._2._1.holdPost))(Tl((() => {
          if (o._2._1.direction === "Forward")
            return u._1;
          if (o._2._1.direction === "Backward")
            return fn(u._1);
          f();
        })())(s._1)(i._1)(o._2._1.progress)(o._2._1.holdPre)(o._2._1.holdPost));
    }
    return j(lt("Return", void 0), dt);
  }
  if (o._2.tag === "Filling" && o._2._1.labels.length !== 0) {
    const i = Hn(o._2._1.node)(n.nodes);
    if (i.tag === "Just") {
      const s = i._1, u = Ip(il)(hp)(s)(o._2._1.progress)(o._2._1.labels), a = (c) => Eb(o._1)(t)(ya(o._2._1.progress)(0)(0)(wt(o._2._1.labels)(Wf)).line)(s)(c)({
        x: c.x + c.w / 2,
        y: c.y + c.h / 2
      })(b_(o._2._1.progress)(0)(0));
      return j(
        u._1,
        (() => {
          if (u._2.tag === "CatNil")
            return at("CatCons", a, ut(Y, Y));
          if (u._2.tag === "CatCons")
            return at(
              "CatCons",
              u._2._1,
              ut(
                u._2._2._1,
                kt("Cons", at("CatCons", a, ut(Y, Y)), u._2._2._2)
              )
            );
          f();
        })()
      );
    }
    if (i.tag === "Nothing")
      return j(lt("Return", void 0), dt);
    f();
  }
  return j(lt("Return", void 0), dt);
})(le(e.tokens))), Bp = (t) => (n) => (e) => (r) => {
  const o = Wb(hp)(n)(e)(r);
  return j(
    o._1,
    (() => {
      if (o._2.tag === "CatNil")
        return at("CatCons", (i) => xa(t)(e)(r)(i), ut(Y, Y));
      if (o._2.tag === "CatCons")
        return at(
          "CatCons",
          o._2._1,
          ut(
            o._2._2._1,
            kt(
              "Cons",
              at("CatCons", (i) => xa(t)(e)(r)(i), ut(Y, Y)),
              o._2._2._2
            )
          )
        );
      f();
    })()
  );
}, qb = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => {
    const i = o.length - 1 | 0, s = i < 1 ? [] : At(0, i, o), u = s.length - 1 | 0, a = u >= 0 && u < s.length ? T("Just", s[u]) : v, c = o.length - 1 | 0, l = c >= 0 && c < o.length ? T("Just", o[c]) : v;
    if (l.tag === "Just" && a.tag === "Just") {
      const _ = Dn(0.78)(1.18)(Ys(o) + 19 | 0), d = Dn(0.4)(0.62)(_.prng), g = r.wobble ? 8.75 * d.value : 4.375, p = Dn(0.4)(0.62)(d.prng), m = r.wobble ? 8.75 * p.value : 4.375, h = l._1.y - a._1.y, $ = l._1.x - a._1.x, x = ne($ * $ + h * h), y = h / x, J = -y, N = $ / x, C = l._1.x + N * 0.875, S = l._1.y + y * 0.875, P = r.wobble ? 8.75 * _.value : 8.75, E = C - N * P, Q = S - y * P, W = E + J * g, D = Q + N * g, H = [1, C, S, 2, E + J * 4.375, Q + N * 4.375, 2, E - J * 4.375, Q - N * 4.375, 5], rt = E - J * m, ot = Q - N * m, M = { color: r.arrowFill, width: 2, lineJoin: ie, lineCap: hr };
      return x <= 1e-4 ? e.pure() : r.wobble ? n.Bind1().bind(t.strokePath([1, W, D, 2, C, S])(M))(() => t.strokePath([1, rt, ot, 2, C, S])(M)) : t.fillPath(H)({ color: r.arrowFill, flat: !0 });
    }
    return e.pure();
  };
}, Xb = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = ri(e), i = t.popAlpha, s = qb(t);
  return (u) => (a) => (c) => (l) => {
    const _ = q3(8)(c);
    if (l.hi <= l.lo)
      return e.pure();
    const d = Z3(_)(l.lo)(l.hi);
    if (d.length === 0)
      return e.pure();
    const g = { color: u.edge, width: u.wobble ? 2 : 0.9375, lineJoin: ie, lineCap: hr }, p = u.wobble ? Dn(-10)(4)(Ys(d)).value : 0, m = u.wobble ? pb(p)(d) : d;
    return r.bind(u.wobble ? o((h) => r.bind(t.pushAlpha(h.alpha))(() => r.bind(t.strokePath(h.path)(g))(() => i)))((() => {
      const h = Ys(d);
      return m.length < 2 ? [] : Gi(Pb)(h)(!1)(m);
    })()) : t.strokePath(Q3(d))(g))(() => {
      const h = s(u)(m);
      return a && l.hi >= 0.999 ? h : e.pure();
    });
  };
}, Yb = (t) => {
  const n = Xb(t);
  return (e) => e.geometry.tag === "FlatRoute" && e.plan.tag === "FlatEdgePlan" ? n(e.plan._1)(e.arrow)(e.geometry._1)(e.visible) : t.Monad0().Applicative0().pure();
}, Mb = (t) => (n) => {
  const e = (i) => {
    const s = Hn(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !En(
        (a) => 0 < a._2.length && a._2[0].x >= u.x && a._2[0].x <= u.x + u.w && a._2[0].y >= u.y && a._2[0].y <= u.y + u.h,
        le(t.edges)
      );
    }
    f();
  }, r = w((i) => (s) => (i * 31 | 0) + Sr(s) | 0)(5381)(Ir(n.frameTitle)), o = (i) => {
    const s = Hn(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !En(
        (a) => {
          const c = a._2.length - 1 | 0;
          return c >= 0 && c < a._2.length && a._2[c].x >= u.x && a._2[c].x <= u.x + u.w && a._2[c].y >= u.y && a._2[c].y <= u.y + u.h;
        },
        le(t.edges)
      );
    }
    f();
  };
  return w((i) => (s) => {
    const u = s._2;
    return Nb((a) => {
      if (a.tag === "Nothing")
        return T("Just", u);
      if (a.tag === "Just")
        return T(
          "Just",
          { t: Jr(a._1.t)(u.t), angle: u.t >= a._1.t ? u.angle : a._1.angle, bigCircle: a._1.bigCircle || u.bigCircle, frameHash: a._1.frameHash }
        );
      f();
    })(s._1)(i);
  })(G)(wt(le(n.tokens))((i) => {
    if (i._2.tag === "Filling") {
      const s = i._2._1.node;
      return [
        b(
          s,
          {
            t: 1,
            angle: (() => {
              const u = bt((a) => (() => {
                const c = Hn(s)(t.nodes), l = a._2.length - 1 | 0;
                return l >= 0 && l < a._2.length && c.tag === "Just" && a._2[l].x >= c._1.x && a._2[l].x <= c._1.x + c._1.w && a._2[l].y >= c._1.y && a._2[l].y <= c._1.y + c._1.h;
              })() ? T("Just", a._2) : v)(le(t.edges));
              if (0 < u.length) {
                const a = u[0].length - 1 | 0, c = a < 1 ? [] : At(0, a, u[0]), l = c.length - 1 | 0;
                if (l >= 0 && l < c.length) {
                  const _ = u[0].length - 1 | 0;
                  return _ >= 0 && _ < u[0].length ? Wo(u[0][_].y - c[l].y)(u[0][_].x - c[l].x) : 0;
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
                const s = eo(i._2._1.edge)(t.edges);
                if (s.tag === "Just") {
                  const u = s._1.length - 1 | 0, a = u < 1 ? [] : At(0, u, s._1), c = a.length - 1 | 0;
                  if (c >= 0 && c < a.length) {
                    const l = s._1.length - 1 | 0;
                    return l >= 0 && l < s._1.length ? Wo(s._1[l].y - a[c].y)(s._1[l].x - a[c].x) : 0;
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
                const s = eo(i._2._1.edge)(t.edges);
                if (s.tag === "Just")
                  return 1 < s._1.length && 0 < s._1.length ? Wo(s._1[1].y - s._1[0].y)(s._1[1].x - s._1[0].x) : 0;
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
}, Ub = (t) => w((n) => (e) => (n * 31 | 0) + Sr(e) | 0)(5381)(Ir(t.frameTitle)), Dp = (t) => (n) => (e) => (r) => (o) => {
  const i = Ub(o), s = Mb(r)(o);
  return io((u) => {
    const a = Hn(u._1)(o.nodes);
    if (a.tag === "Just")
      return Lp(dp)(t)(n)(e)((() => {
        const c = Hn(u._1)(o.nodeFadeAlpha);
        if (c.tag === "Nothing")
          return 1;
        if (c.tag === "Just")
          return c._1;
        f();
      })())((() => {
        const c = Hn(u._1)(o.nodeLabelFadeAlpha);
        if (c.tag === "Nothing")
          return 1;
        if (c.tag === "Just")
          return c._1;
        f();
      })())((() => {
        const c = Hn(u._1)(s);
        return c.tag === "Just" ? T("Just", c._1) : c.tag === "Nothing" && Jb(u._1)(o.visited) ? T("Just", { t: 1, angle: 0, bigCircle: !1, frameHash: i }) : v;
      })())(u._1)(u._2)(a._1);
    if (a.tag === "Nothing")
      return j(lt("Return", void 0), dt);
    f();
  })(le(r.nodes));
}, Kb = (t) => t, zp = (t) => (n) => {
  const e = n.vw / n.vh, r = n.vh * t, o = { ...n, vx: n.vx - (r - n.vw) / 2, vw: r }, i = n.vw / t, s = { ...n, vy: n.vy - (i - n.vh) / 2, vh: i };
  return t <= 0 || n.vw <= 0 || n.vh <= 0 ? n : t > e ? o : t < e ? s : n;
}, Jl = (t) => (n) => t.width <= 0 || t.height <= 0 ? n : zp(t.width / t.height)(n), Vb = (t) => (n) => (e) => {
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
}, k_ = (t) => (n) => (e) => {
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
}, S_ = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Yf = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, jb = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Zb = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Mf = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ke);
  return (n) => t(ge("IterNode", n, Ue));
})(), tk = /* @__PURE__ */ Gr(ni)(Yt), nk = (t) => (n) => {
  const e = we(t.angle), r = fe(t.angle);
  return { a: r, b: e, c: 0, d: 1, e: -n * r, f: n * e - t.boxHeight / 2 };
}, ek = (t) => [t.box.ground.a, t.box.ground.b, t.box.ground.c, t.box.ground.d, t.box.top.a, t.box.top.b, t.box.top.c, t.box.top.d], Uf = (t) => (n) => {
  const e = (r) => Vb(0)(255)(dn(We(V(r) * t)));
  return { r: e(n.r), g: e(n.g), b: e(n.b), a: n.a };
}, oe = (t) => (n) => (e) => (r) => ({ x: (n - e) * fe(t.angle), y: (n + e) * we(t.angle) - r }), Cl = (t) => {
  const n = Ht((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...wt(n._1.tail)((e) => [2, e.x, e.y]), 5];
  f();
}, rk = (t) => (n) => (e) => {
  const r = e.id, o = e.np, i = $l({
    id: r,
    role: dp,
    geometry: dl(
      "IsoSlab",
      {
        south: [e.box.ground.d, e.box.ground.c, e.box.top.c, e.box.top.d],
        east: [e.box.ground.b, e.box.ground.c, e.box.top.c, e.box.top.b],
        top: [e.box.top.a, e.box.top.b, e.box.top.c, e.box.top.d]
      }
    ),
    alpha: 1,
    plan: hl("IsoNodePlan", { config: t, palette: n })
  }), s = () => iu({
    owner: fi("NodeText", r),
    text: o.label,
    spec: {
      x: o.x + o.w / 2,
      y: 0,
      content: o.label,
      font: { family: n.fontFamily, size: 11, weight: 600 },
      color: n.text,
      align: oo,
      baseline: Ye
    },
    bounds: v,
    plan: ou("AffineText", nk(t)(o.y + o.h))
  });
  return j(
    i._1,
    (() => {
      if (i._2.tag === "CatNil")
        return at("CatCons", s, ut(Y, Y));
      if (i._2.tag === "CatCons")
        return at(
          "CatCons",
          i._2._1,
          ut(
            i._2._2._1,
            kt("Cons", at("CatCons", s, ut(Y, Y)), i._2._2._2)
          )
        );
      f();
    })()
  );
}, ok = (t) => (n) => (e) => (r) => (o) => {
  const i = Ln(Vn, o, At(1, o.length, o)), s = i.length - 1 | 0;
  return Xt((u) => (a) => ({
    depth: (a._1.x + a._1.y + a._2.x + a._2.y) / 2,
    draw: mp({
      id: e,
      geometry: ip("IsoSegments", [[oe(t)(a._1.x)(a._1.y)(0), oe(t)(a._2.x)(a._2.y)(0)]]),
      visible: { lo: 0, hi: 1 },
      arrow: r && u === s,
      plan: sp("IsoEdgePlan", { config: t, palette: n })
    })
  }))(i);
}, ik = (t) => (n) => (e) => (r) => (o) => {
  const i = (() => {
    if (t === "Forward")
      return o;
    if (t === "Backward")
      return fn(o);
    f();
  })();
  if (0 < i.length) {
    const u = jo(i)(k_(0)(1)(Ui(e)(r)(n)));
    if (u.tag === "Nothing")
      return i[0];
    if (u.tag === "Just")
      return u._1;
    f();
  }
  const s = jo(i)(k_(0)(1)(Ui(e)(r)(n)));
  if (s.tag === "Nothing")
    return { x: 0, y: 0 };
  if (s.tag === "Just")
    return s._1;
  f();
}, sk = (t) => {
  const n = Ht((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...wt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, uk = (t) => {
  const n = Ht((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { vx: 0, vy: 0, vw: 0, vh: 0 };
  if (n.tag === "Just") {
    const e = w((r) => (o) => ({ minX: S_(r.minX)(o.x), minY: S_(r.minY)(o.y), maxX: Yf(r.maxX)(o.x), maxY: Yf(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { vx: e.minX - 40, vy: e.minY - 40, vw: e.maxX - e.minX + 80, vh: e.maxY - e.minY + 80 };
  }
  f();
}, ak = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => {
    if (r.geometry.tag === "IsoSlab" && r.plan.tag === "IsoNodePlan") {
      const o = r.geometry._1, i = r.plan._1.palette, s = (u, a) => t.fillStrokePath(Cl(u))({ color: a, flat: !0 })({
        color: i.nodeStroke,
        width: 1,
        lineJoin: ie,
        lineCap: Me
      });
      return e.bind(s(o.south, Uf(0.66)(i.nodeFill)))(() => e.bind(s(o.east, Uf(0.82)(i.nodeFill)))(() => s(o.top, i.nodeFill)));
    }
    return n.Applicative0().pure();
  };
}, ck = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => {
    if (r.geometry.tag === "IsoCube" && r.plan.tag === "IsoTokenPlan") {
      const o = r.geometry._1, i = r.plan._1.palette, s = (u, a) => t.fillStrokePath(Cl(u))({ color: Uf(a)(i.tokenOutsideFill), flat: !0 })({
        color: i.tokenOutsideStroke,
        width: 1,
        lineJoin: ie,
        lineCap: Me
      });
      return e.bind(s(o.south, 0.66))(() => e.bind(s(o.east, 0.82))(() => s(o.top, 1)));
    }
    return n.Applicative0().pure();
  };
}, fk = { angle: 0.5235987755982988, boxHeight: 26, transparentBg: !0 }, lk = (t) => (n) => (e) => {
  const r = e.x - 5.5, o = e.x + 5.5, i = e.y - 5.5, s = e.y + 5.5, u = n + 11, a = oe(t)(o)(i)(u), c = oe(t)(o)(s)(u), l = oe(t)(r)(s)(u), _ = oe(t)(o)(s)(n);
  return { south: [oe(t)(r)(s)(n), _, c, l], east: [oe(t)(o)(i)(n), _, c, a], top: [oe(t)(r)(i)(u), a, c, l] };
}, gk = (t) => (n) => (e) => (r) => {
  const o = r._1, i = (s, u) => ({
    depth: u.x + u.y,
    draw: $p({
      id: o,
      pass: gp,
      geometry: ap("IsoCube", lk(t)(s)(u)),
      position: u,
      plan: fp("IsoTokenPlan", { config: t, palette: n, baseZ: s })
    })
  });
  if (r._2.tag === "Travelling") {
    const s = jb(r._2._1.edge)(e.edges);
    return s.tag === "Just" ? T("Just", i(0, ik(r._2._1.direction)(r._2._1.progress)(r._2._1.holdPre)(r._2._1.holdPost)(s._1))) : v;
  }
  if (r._2.tag === "Filling") {
    const s = Zb(r._2._1.node)(e.nodes);
    if (s.tag === "Just")
      return T("Just", i(t.boxHeight, { x: s._1.x + s._1.w / 2, y: s._1.y + s._1.h / 2 }));
  }
  return v;
}, _k = (t) => (n) => {
  const e = n.y + n.h, r = n.x + n.w;
  return {
    ground: { a: oe(t)(n.x)(n.y)(0), b: oe(t)(r)(n.y)(0), c: oe(t)(r)(e)(0), d: oe(t)(n.x)(e)(0) },
    top: { a: oe(t)(n.x)(n.y)(t.boxHeight), b: oe(t)(r)(n.y)(t.boxHeight), c: oe(t)(r)(e)(t.boxHeight), d: oe(t)(n.x)(e)(t.boxHeight) },
    depth: (n.x + r) / 2 + (n.y + e) / 2
  };
}, Hp = (t) => (n) => B((e) => ({ id: e._1, np: e._2, box: _k(t)(e._2) }))(Mf(n.nodes)), dk = (t) => (n) => [
  ...wt(Hp(t)(n))(ek),
  ...(() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, kt("Cons", r._4, e(r._6, o)));
      f();
    };
    return wt(jt(Jn.foldr, e(n.edges, Y)))(B((r) => oe(t)(r.x)(r.y)(0)));
  })()
], hk = (t) => (n) => (e) => (r) => {
  const o = wl(n), i = [
    ...wt(Mf(e.edges))((a) => ok(t)(o)(a._1)((() => {
      const c = wo("conn:")(a._1);
      if (c.tag === "Just")
        return !1;
      if (c.tag === "Nothing")
        return !0;
      f();
    })())(a._2)),
    ...B((a) => ({ depth: a.box.depth, draw: rk(t)(o)(a) }))(Hp(t)(e)),
    ...bt(gk(t)(o)(e))(Mf(r.tokens))
  ], s = pp({
    viewport: uk(dk(t)(e)),
    clear: T("Just", t.transparentBg ? o.bgTransparent : o.bg),
    dots: v
  }), u = () => tk((a) => a.draw)(It((a) => (c) => it.compare(a.depth)(c.depth))(i));
  return j(
    s._1,
    (() => {
      if (s._2.tag === "CatNil")
        return at("CatCons", u, ut(Y, Y));
      if (s._2.tag === "CatCons")
        return at(
          "CatCons",
          s._2._1,
          ut(
            s._2._2._1,
            kt("Cons", at("CatCons", u, ut(Y, Y)), s._2._2._2)
          )
        );
      f();
    })()
  );
}, pk = (t) => {
  const n = t.to.y - t.from.y, e = t.to.x - t.from.x, r = Yf(1e-4)(ne(e * e + n * n)), o = n / r, i = e / r, s = t.to.y - o * 7, u = t.to.x - i * 7;
  return Cl([t.to, { x: u - o * 3, y: s + i * 3 }, { x: u + o * 3, y: s - i * 3 }]);
}, mk = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = Gr(e)(Yt);
  return (o) => {
    if (o.geometry.tag === "IsoSegments" && o.plan.tag === "IsoEdgePlan") {
      const i = o.plan._1.palette, s = o.geometry._1;
      return n.Bind1().bind(r((u) => t.strokePath(sk(u))({
        color: i.edge,
        width: 1.5,
        lineJoin: ie,
        lineCap: hr
      }))(s))(() => {
        const u = s.length - 1 | 0;
        if (u >= 0 && u < s.length) {
          const c = s[u], l = c.length - 1 | 0, _ = l < 1 ? [] : At(0, l, c), d = _.length - 1 | 0;
          if (d >= 0 && d < _.length) {
            const p = s.length - 1 | 0, m = (() => {
              if (p >= 0 && p < s.length) {
                const h = s[p], $ = h.length - 1 | 0;
                if ($ >= 0 && $ < h.length)
                  return t.fillPath(pk({ from: _[d], to: h[$] }))({ color: i.arrowFill, flat: !0 });
              }
              return e.pure();
            })();
            return o.arrow ? m : e.pure();
          }
          s.length - 1 | 0;
          const g = e.pure();
          return o.arrow ? g : e.pure();
        }
        s.length - 1 | 0;
        const a = e.pure();
        return o.arrow ? a : e.pure();
      });
    }
    return e.pure();
  };
}, Qp = (t, n) => ({ tag: t, _1: n }), va = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, $k = (t) => (n) => (e) => {
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
}, bl = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, yk = /* @__PURE__ */ Zi(ni)(Yt), xk = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, vk = /* @__PURE__ */ Qp("ResolvedLabels"), Tk = (t) => {
  const n = en((e) => e.role === "FlyThrough")(t.levels);
  if (n.tag === "Just")
    return n._1;
  if (n.tag === "Nothing")
    return ea(t);
  f();
}, us = (t) => (n) => {
  const e = va(1)(hn(n.rootLayout).w), r = No(n.rootLayout)(n.camera), o = !n.diving && n.levels.length === 1 ? 1 : $k(0)(1)(r.w / e), i = ea(n).state.frameTitle === "" ? 0 * o : 40 * o, s = t.padding * o * o;
  return (() => {
    if (t.outputAspect.tag === "Nothing")
      return Kb;
    if (t.outputAspect.tag === "Just")
      return zp(t.outputAspect._1);
    f();
  })()({ vx: r.x - s, vy: r.y - s - i, vw: r.w + 2 * s, vh: r.h + 2 * s + i });
}, wk = (t) => (n) => {
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just") {
    const e = bl(n._1)(t.segment.layout.nodes);
    if (e.tag === "Nothing")
      return [];
    if (e.tag === "Just") {
      const r = e._1.x * t.segment.placement.scale + t.segment.placement.tx, o = e._1.y * t.segment.placement.scale + t.segment.placement.ty, i = e._1.w * t.segment.placement.scale, s = e._1.h * t.segment.placement.scale;
      return [1, r, o, 2, r + i, o, 2, r + i, o + s, 2, r, o + s, 5];
    }
  }
  f();
}, kl = (t) => (n) => {
  const e = Ay(n.segment.placement)({ x: t.vx, y: t.vy, w: t.vw, h: t.vh });
  return { vx: e.x, vy: e.y, vw: e.w, vh: e.h };
}, L_ = (t) => (n) => t === "" ? j(lt("Return", void 0), dt) : iu({
  owner: F3,
  text: t,
  spec: {
    x: n.vx + 6,
    y: n.vy + 6,
    content: t,
    font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 9, weight: 600 },
    color: { r: 180, g: 180, b: 180, a: 255 },
    align: Mi,
    baseline: zC
  },
  bounds: v,
  plan: fc
}), E_ = (t) => (n) => {
  if (t === "")
    return j(lt("Return", void 0), dt);
  const e = n.vh / 720, r = 56 * e, o = nu({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 56, weight: 700 })(t), i = (s) => {
    const u = r + 16 * e * 2, a = s * e + 28 * e * 2, c = n.vy + n.vh / 2, l = n.vx + n.vw / 2, _ = { x: l - a / 2, y: c - u / 2, w: a, h: u };
    return lc(cc(
      "TitleCardOverlay",
      {
        backing: {
          path: Ri(_)(16 * e),
          fill: T("Just", { color: { r: 255, g: 255, b: 255, a: 235 }, flat: !0 }),
          stroke: T(
            "Just",
            { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1.5 * e, lineJoin: ie, lineCap: hr }
          )
        },
        text: {
          owner: _p,
          text: t,
          spec: {
            x: l,
            y: c,
            content: t,
            font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: r, weight: 700 },
            color: { r: 28, g: 30, b: 36, a: 255 },
            align: oo,
            baseline: Ye
          },
          bounds: T("Just", _),
          plan: fc
        }
      }
    ));
  };
  return j(
    o._1,
    (() => {
      if (o._2.tag === "CatNil")
        return at("CatCons", i, ut(Y, Y));
      if (o._2.tag === "CatCons")
        return at(
          "CatCons",
          o._2._1,
          ut(
            o._2._2._1,
            kt("Cons", at("CatCons", i, ut(Y, Y)), o._2._2._2)
          )
        );
      f();
    })()
  );
}, P_ = (t) => (n) => {
  if (t === "")
    return j(lt("Return", void 0), dt);
  const e = n.vh / 720, r = 15 * e, o = nu({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 15, weight: 600 })(t), i = (s) => {
    const u = n.vy + 12 * e, a = r + 6 * e * 2, c = s * e + 11 * e * 2, l = n.vx + n.vw / 2, _ = { x: l - c / 2, y: u, w: c, h: a };
    return lc(cc(
      "FrameTitleOverlay",
      {
        backing: T(
          "Just",
          {
            path: Ri(_)(a / 2),
            fill: T("Just", { color: { r: 255, g: 255, b: 255, a: 240 }, flat: !0 }),
            stroke: T(
              "Just",
              { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1 * e, lineJoin: ie, lineCap: hr }
            )
          }
        ),
        text: {
          owner: _p,
          text: t,
          spec: {
            x: l,
            y: u + a / 2,
            content: t,
            font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: r, weight: 600 },
            color: { r: 28, g: 30, b: 36, a: 255 },
            align: oo,
            baseline: Ye
          },
          bounds: T("Just", _),
          plan: fc
        }
      }
    ));
  };
  return j(
    o._1,
    (() => {
      if (o._2.tag === "CatNil")
        return at("CatCons", i, ut(Y, Y));
      if (o._2.tag === "CatCons")
        return at(
          "CatCons",
          o._2._1,
          ut(
            o._2._2._1,
            kt("Cons", at("CatCons", i, ut(Y, Y)), o._2._2._2)
          )
        );
      f();
    })()
  );
}, Nk = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const a = wl(t.theme), c = (() => {
    if (u.tag === "ResolvedLabels")
      return Bp(a)(o)(i)(s);
    if (u.tag === "SpringLabels")
      return xa(a)(i)(s)(Fp(o)(u._1));
    f();
  })(), l = pp({ viewport: o, clear: T("Just", t.transparentBg ? a.bgTransparent : a.bg), dots: v }), _ = () => {
    const d = ae({
      path: [],
      role: Se,
      layer: v,
      effects: [
        ...e < 1 ? [Rn("GroupAlpha", e)] : [],
        ...r > 0 ? [Rn("GroupBlur", r)] : []
      ]
    })((() => {
      const g = Rp(a)(i)(s), p = () => {
        const m = Pp(a)(t.halftoneShadows)(i)(s), h = () => {
          const $ = Dp(ml)(1)(a)(i)(s), x = () => {
            const y = Ap(a)(i)(s), J = () => {
              const N = Xf(a)(o)(i)(s), C = () => {
                const S = Ep(KC)(a)(i)(s), P = () => {
                  const E = () => {
                    const Q = Bb(a)(i)(s);
                    return s.staticKind !== "Animated" ? Q : j(lt("Return", void 0), dt);
                  };
                  return j(
                    c._1,
                    (() => {
                      if (c._2.tag === "CatNil")
                        return at("CatCons", E, ut(Y, Y));
                      if (c._2.tag === "CatCons")
                        return at(
                          "CatCons",
                          c._2._1,
                          ut(
                            c._2._2._1,
                            kt(
                              "Cons",
                              at("CatCons", E, ut(Y, Y)),
                              c._2._2._2
                            )
                          )
                        );
                      f();
                    })()
                  );
                };
                return j(
                  S._1,
                  (() => {
                    if (S._2.tag === "CatNil")
                      return at("CatCons", P, ut(Y, Y));
                    if (S._2.tag === "CatCons")
                      return at(
                        "CatCons",
                        S._2._1,
                        ut(
                          S._2._2._1,
                          kt(
                            "Cons",
                            at("CatCons", P, ut(Y, Y)),
                            S._2._2._2
                          )
                        )
                      );
                    f();
                  })()
                );
              };
              return j(
                N._1,
                (() => {
                  if (N._2.tag === "CatNil")
                    return at("CatCons", C, ut(Y, Y));
                  if (N._2.tag === "CatCons")
                    return at(
                      "CatCons",
                      N._2._1,
                      ut(
                        N._2._2._1,
                        kt("Cons", at("CatCons", C, ut(Y, Y)), N._2._2._2)
                      )
                    );
                  f();
                })()
              );
            };
            return j(
              y._1,
              (() => {
                if (y._2.tag === "CatNil")
                  return at("CatCons", J, ut(Y, Y));
                if (y._2.tag === "CatCons")
                  return at(
                    "CatCons",
                    y._2._1,
                    ut(
                      y._2._2._1,
                      kt("Cons", at("CatCons", J, ut(Y, Y)), y._2._2._2)
                    )
                  );
                f();
              })()
            );
          };
          return j(
            $._1,
            (() => {
              if ($._2.tag === "CatNil")
                return at("CatCons", x, ut(Y, Y));
              if ($._2.tag === "CatCons")
                return at(
                  "CatCons",
                  $._2._1,
                  ut(
                    $._2._2._1,
                    kt("Cons", at("CatCons", x, ut(Y, Y)), $._2._2._2)
                  )
                );
              f();
            })()
          );
        };
        return j(
          m._1,
          (() => {
            if (m._2.tag === "CatNil")
              return at("CatCons", h, ut(Y, Y));
            if (m._2.tag === "CatCons")
              return at(
                "CatCons",
                m._2._1,
                ut(
                  m._2._2._1,
                  kt("Cons", at("CatCons", h, ut(Y, Y)), m._2._2._2)
                )
              );
            f();
          })()
        );
      };
      return j(
        g._1,
        (() => {
          if (g._2.tag === "CatNil")
            return at("CatCons", p, ut(Y, Y));
          if (g._2.tag === "CatCons")
            return at(
              "CatCons",
              g._2._1,
              ut(
                g._2._2._1,
                kt("Cons", at("CatCons", p, ut(Y, Y)), g._2._2._2)
              )
            );
          f();
        })()
      );
    })());
    if (e > 0) {
      const g = () => {
        const p = L_(t.watermark)(o), m = () => s.staticKind === "TitleCard" ? E_(s.frameTitle)(o) : P_(s.frameTitle)(o);
        return j(
          p._1,
          (() => {
            if (p._2.tag === "CatNil")
              return at("CatCons", m, ut(Y, Y));
            if (p._2.tag === "CatCons")
              return at(
                "CatCons",
                p._2._1,
                ut(
                  p._2._2._1,
                  kt("Cons", at("CatCons", m, ut(Y, Y)), p._2._2._2)
                )
              );
            f();
          })()
        );
      };
      return j(
        d._1,
        (() => {
          if (d._2.tag === "CatNil")
            return at("CatCons", g, ut(Y, Y));
          if (d._2.tag === "CatCons")
            return at(
              "CatCons",
              d._2._1,
              ut(
                d._2._2._1,
                kt("Cons", at("CatCons", g, ut(Y, Y)), d._2._2._2)
              )
            );
          f();
        })()
      );
    }
    return j(
      lt("Return", void 0),
      at(
        "CatCons",
        () => {
          const g = L_(t.watermark)(o), p = () => s.staticKind === "TitleCard" ? E_(s.frameTitle)(o) : P_(s.frameTitle)(o);
          return j(
            g._1,
            (() => {
              if (g._2.tag === "CatNil")
                return at("CatCons", p, ut(Y, Y));
              if (g._2.tag === "CatCons")
                return at(
                  "CatCons",
                  g._2._1,
                  ut(
                    g._2._2._1,
                    kt("Cons", at("CatCons", p, ut(Y, Y)), g._2._2._2)
                  )
                );
              f();
            })()
          );
        },
        ut(Y, Y)
      )
    );
  };
  return j(
    l._1,
    (() => {
      if (l._2.tag === "CatNil")
        return at("CatCons", _, ut(Y, Y));
      if (l._2.tag === "CatCons")
        return at(
          "CatCons",
          l._2._1,
          ut(
            l._2._2._1,
            kt("Cons", at("CatCons", _, ut(Y, Y)), l._2._2._2)
          )
        );
      f();
    })()
  );
}, Kf = (t) => (n) => (e) => (r) => yk(r.minis)((o) => {
  const i = Op(t)(n)(e)(G)(r)(o);
  return (() => {
    const s = o.segment.path.length - 1 | 0;
    return o.bgAlpha > 0 && s >= 0 && s < o.segment.path.length && (() => {
      const u = bl(o.segment.path[s])(r.state.nodes);
      if (u.tag === "Just")
        return u._1.tag === "Hidden" ? !1 : u._1.tag !== "PloppingOut";
      if (u.tag === "Nothing")
        return !1;
      f();
    })();
  })() ? i : j(lt("Return", void 0), dt);
}), Op = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = i.state, u = { tx: i.segment.placement.tx, ty: i.segment.placement.ty, sx: i.segment.placement.scale, sy: i.segment.placement.scale }, a = wl(t.theme), c = i.segment.layout, l = hn(c), _ = { vx: l.x - 1e3, vy: l.y - 1e3, vw: l.w + 2e3, vh: l.h + 2e3 }, d = i.segment.path.length - 1 | 0, g = d >= 0 && d < i.segment.path.length ? bl(i.segment.path[d])(o.segment.layout.nodes) : v, p = i.segment.placement.scale * e, m = xk(8)(va(1)(1 / (1.25 * va(1e-6)(p)))), h = 11 * p >= 5 ? ml : ha, $ = kl(n.viewport)(i), x = (() => {
    if (h === "LabelsHidden")
      return j(lt("Return", void 0), dt);
    if (h === "LabelsShown")
      return r.tag === "Leaf" ? Bp(a)($)(c)(s) : xa(a)(c)(s)(Fp($)(r));
    f();
  })();
  return ae({
    path: i.segment.path,
    role: i.role,
    layer: v,
    effects: [
      Rn("GroupAlpha", i.bgAlpha),
      ...i.blur > 0 ? [Rn("GroupBlur", i.blur * i.segment.placement.scale)] : []
    ]
  })((() => {
    const y = ae({
      path: i.segment.path,
      role: i.role,
      layer: v,
      effects: [
        Rn(
          "GroupClip",
          wk(o)((() => {
            const N = i.segment.path.length - 1 | 0;
            return N >= 0 && N < i.segment.path.length ? T("Just", i.segment.path[N]) : v;
          })()),
          Ws
        )
      ]
    })((() => {
      const N = (() => {
        if (g.tag === "Just")
          return ae({
            path: o.segment.path,
            role: o.role,
            layer: v,
            effects: [
              Rn(
                "GroupTransform",
                Fi,
                { tx: o.segment.placement.tx, ty: o.segment.placement.ty, sx: o.segment.placement.scale, sy: o.segment.placement.scale }
              )
            ]
          })(lc(cc(
            "FloorOverlay",
            {
              path: yl({
                ...g._1,
                x: g._1.x + 1,
                y: g._1.y + 1,
                w: g._1.w - 2,
                h: g._1.h - 2
              }),
              fill: T("Just", { color: a.bg, flat: !0 }),
              stroke: v
            }
          )));
        if (g.tag === "Nothing")
          return j(lt("Return", void 0), dt);
        f();
      })(), C = o.role === "Active" || o.role === "FlyThrough" ? N : j(lt("Return", void 0), dt), S = () => {
        const P = ae({
          path: i.segment.path,
          role: i.role,
          layer: v,
          effects: [Rn("GroupTransform", Fi, u)]
        })((() => {
          const Q = Rp(a)(c)(s), W = () => {
            const D = Pp(a)(t.halftoneShadows)(c)(s), H = () => {
              const rt = Dp(h)(m)(a)(c)(s), ot = () => {
                const M = Ap(a)(c)(s);
                return j(
                  M._1,
                  (() => {
                    if (M._2.tag === "CatNil")
                      return at(
                        "CatCons",
                        () => Xf(a)(_)(c)(s),
                        ut(Y, Y)
                      );
                    if (M._2.tag === "CatCons")
                      return at(
                        "CatCons",
                        M._2._1,
                        ut(
                          M._2._2._1,
                          kt(
                            "Cons",
                            at(
                              "CatCons",
                              () => Xf(a)(_)(c)(s),
                              ut(Y, Y)
                            ),
                            M._2._2._2
                          )
                        )
                      );
                    f();
                  })()
                );
              };
              return j(
                rt._1,
                (() => {
                  if (rt._2.tag === "CatNil")
                    return at("CatCons", ot, ut(Y, Y));
                  if (rt._2.tag === "CatCons")
                    return at(
                      "CatCons",
                      rt._2._1,
                      ut(
                        rt._2._2._1,
                        kt("Cons", at("CatCons", ot, ut(Y, Y)), rt._2._2._2)
                      )
                    );
                  f();
                })()
              );
            };
            return j(
              D._1,
              (() => {
                if (D._2.tag === "CatNil")
                  return at("CatCons", H, ut(Y, Y));
                if (D._2.tag === "CatCons")
                  return at(
                    "CatCons",
                    D._2._1,
                    ut(
                      D._2._2._1,
                      kt("Cons", at("CatCons", H, ut(Y, Y)), D._2._2._2)
                    )
                  );
                f();
              })()
            );
          };
          return j(
            Q._1,
            (() => {
              if (Q._2.tag === "CatNil")
                return at("CatCons", W, ut(Y, Y));
              if (Q._2.tag === "CatCons")
                return at(
                  "CatCons",
                  Q._2._1,
                  ut(
                    Q._2._2._1,
                    kt("Cons", at("CatCons", W, ut(Y, Y)), Q._2._2._2)
                  )
                );
              f();
            })()
          );
        })()), E = () => ae({
          path: i.segment.path,
          role: i.role,
          layer: v,
          effects: [Rn("GroupTransform", R3, u)]
        })(Ep(VC)(a)(c)(s));
        return j(
          P._1,
          (() => {
            if (P._2.tag === "CatNil")
              return at("CatCons", E, ut(Y, Y));
            if (P._2.tag === "CatCons")
              return at(
                "CatCons",
                P._2._1,
                ut(
                  P._2._2._1,
                  kt("Cons", at("CatCons", E, ut(Y, Y)), P._2._2._2)
                )
              );
            f();
          })()
        );
      };
      return j(
        C._1,
        (() => {
          if (C._2.tag === "CatNil")
            return at("CatCons", S, ut(Y, Y));
          if (C._2.tag === "CatCons")
            return at(
              "CatCons",
              C._2._1,
              ut(
                C._2._2._1,
                kt("Cons", at("CatCons", S, ut(Y, Y)), C._2._2._2)
              )
            );
          f();
        })()
      );
    })()), J = () => {
      const N = ae({
        path: i.segment.path,
        role: i.role,
        layer: v,
        effects: [Rn("GroupTransform", Fi, u)]
      })(x);
      return j(
        N._1,
        (() => {
          if (N._2.tag === "CatNil")
            return at("CatCons", () => Kf(t)(n)(e)(i), ut(Y, Y));
          if (N._2.tag === "CatCons")
            return at(
              "CatCons",
              N._2._1,
              ut(
                N._2._2._1,
                kt(
                  "Cons",
                  at("CatCons", () => Kf(t)(n)(e)(i), ut(Y, Y)),
                  N._2._2._2
                )
              )
            );
          f();
        })()
      );
    };
    return j(
      y._1,
      (() => {
        if (y._2.tag === "CatNil")
          return at("CatCons", J, ut(Y, Y));
        if (y._2.tag === "CatCons")
          return at(
            "CatCons",
            y._2._1,
            ut(
              y._2._2._1,
              kt("Cons", at("CatCons", J, ut(Y, Y)), y._2._2._2)
            )
          );
        f();
      })()
    );
  })());
}, Jk = (t) => (n) => (e) => {
  if (t.theme === "Isometric")
    return hk({ ...fk, transparentBg: t.transparentBg })(t.theme)(ea(e).segment.layout)(ea(e).state);
  const r = us(t)(e), o = (a) => e.hasDives ? r.vw / va(1)(hn(e.rootLayout).w) : 1, i = { tileScale: o(), viewport: r }, s = (a) => (c) => {
    if (c.length === 0)
      return j(lt("Return", void 0), dt);
    const l = Ht((_) => v, (_) => (d) => T("Just", { head: _, tail: d }), c);
    if (l.tag === "Nothing")
      return j(lt("Return", void 0), dt);
    if (l.tag === "Just") {
      const _ = Op(t)(i)(e.camera.zoom)(l._1.head.role === "Active" ? n : G)(a)(l._1.head);
      return e.diving || l._1.head.role === "Active" ? j(
        _._1,
        (() => {
          if (_._2.tag === "CatNil")
            return at("CatCons", () => s(l._1.head)(l._1.tail), ut(Y, Y));
          if (_._2.tag === "CatCons")
            return at(
              "CatCons",
              _._2._1,
              ut(
                _._2._2._1,
                kt(
                  "Cons",
                  at("CatCons", () => s(l._1.head)(l._1.tail), ut(Y, Y)),
                  _._2._2._2
                )
              )
            );
          f();
        })()
      ) : j(
        lt("Return", void 0),
        at("CatCons", () => s(l._1.head)(l._1.tail), ut(Y, Y))
      );
    }
    f();
  }, u = Ht((a) => v, (a) => (c) => T("Just", { head: a, tail: c }), e.levels);
  if (u.tag === "Nothing")
    return j(lt("Return", void 0), dt);
  if (u.tag === "Just") {
    const a = u._1.tail, c = u._1.head, l = a.length === 0, _ = Nk(t)(o())(c.role === "Active" || c.role === "FlyThrough" ? c.bgAlpha : 0)(c.blur)(r)(c.segment.layout)(Tk(e).state)(l && n.tag !== "Leaf" ? Qp("SpringLabels", n) : vk), d = () => {
      const g = Kf(t)(i)(e.camera.zoom)(c);
      return c.role === "Active" || c.role === "FlyThrough" ? j(
        g._1,
        (() => {
          if (g._2.tag === "CatNil")
            return at("CatCons", () => s(c)(a), ut(Y, Y));
          if (g._2.tag === "CatCons")
            return at(
              "CatCons",
              g._2._1,
              ut(
                g._2._2._1,
                kt(
                  "Cons",
                  at("CatCons", () => s(c)(a), ut(Y, Y)),
                  g._2._2._2
                )
              )
            );
          f();
        })()
      ) : j(
        lt("Return", void 0),
        at("CatCons", () => s(c)(a), ut(Y, Y))
      );
    };
    return j(
      _._1,
      (() => {
        if (_._2.tag === "CatNil")
          return at("CatCons", d, ut(Y, Y));
        if (_._2.tag === "CatCons")
          return at(
            "CatCons",
            _._2._1,
            ut(
              _._2._2._1,
              kt("Cons", at("CatCons", d, ut(Y, Y)), _._2._2._2)
            )
          );
        f();
      })()
    );
  }
  f();
}, Vf = (t) => (n) => (e) => z3({ viewport: us(t)(e), camera: e.camera })(Jk(t)(n)(e)), Vc = (t) => (n) => {
  if (n.fill.tag === "Just") {
    if (n.stroke.tag === "Just")
      return t.fillStrokePath(n.path)(n.fill._1)(n.stroke._1);
    if (n.stroke.tag === "Nothing")
      return t.fillPath(n.path)(n.fill._1);
    f();
  }
  if (n.fill.tag === "Nothing") {
    if (n.stroke.tag === "Just")
      return t.strokePath(n.path)(n.stroke._1);
    if (n.stroke.tag === "Nothing")
      return t.Monad0().Applicative0().pure();
  }
  f();
}, Ck = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Gr(n.Applicative0())(Ga), o = Gp(t);
  return (i) => {
    if (i.tag === "FrameTitleOverlay") {
      const s = i._1;
      return e.bind(r(Vc(t))(s.backing))(() => o(s.text));
    }
    if (i.tag === "TitleCardOverlay") {
      const s = i._1;
      return e.bind(Vc(t)(s.backing))(() => o(s.text));
    }
    if (i.tag === "FloorOverlay")
      return Vc(t)(i._1);
    f();
  };
}, bk = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = Gr(e)(Yt), o = t.popTransform, i = t.popBakedTransform, s = (() => {
    const a = t.popClip, c = t.popAlpha, l = t.popBlend, _ = t.popBlur;
    return (d) => {
      if (d.tag === "GroupTransform") {
        if (d._1 === "NormalTransform")
          return o;
        if (d._1 === "BakedTransform")
          return i;
        f();
      }
      if (d.tag === "GroupClip")
        return a;
      if (d.tag === "GroupAlpha")
        return c;
      if (d.tag === "GroupBlend")
        return l;
      if (d.tag === "GroupBlur")
        return _;
      f();
    };
  })(), u = t.popLayer;
  return (a) => n.Bind1().bind(r(s)(fn(a.effects)))(() => {
    if (a.layer.tag === "Just")
      return u;
    if (a.layer.tag === "Nothing")
      return e.pure();
    f();
  });
}, kk = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = Gr(e)(Yt);
  return (o) => n.Bind1().bind((() => {
    if (o.layer.tag === "Just")
      return t.pushLayer(o.layer._1);
    if (o.layer.tag === "Nothing")
      return e.pure();
    f();
  })())(() => r((i) => {
    if (i.tag === "GroupTransform") {
      if (i._1 === "NormalTransform")
        return t.pushTransform(i._2);
      if (i._1 === "BakedTransform")
        return t.pushBakedTransform(i._2);
      f();
    }
    if (i.tag === "GroupClip")
      return t.pushClip(i._1)(i._2);
    if (i.tag === "GroupAlpha")
      return t.pushAlpha(i._1);
    if (i.tag === "GroupBlend")
      return t.pushBlend(i._1);
    if (i.tag === "GroupBlur")
      return t.pushBlur(i._1);
    f();
  })(o.effects));
}, Wp = (t) => {
  const n = t.Monad0(), e = Ib(t), r = ak(t), o = Yb(t), i = mk(t), s = Ab(t), u = ck(t);
  return B3(n)({
    beginFrame: (a) => t.setViewport(a.viewport),
    endFrame: n.Applicative0().pure(),
    beginGroup: kk(t),
    endGroup: bk(t),
    background: Lb(t),
    overlay: Ck(t),
    node: (a) => {
      if (a.geometry.tag === "FlatNode")
        return e(a);
      if (a.geometry.tag === "IsoSlab")
        return r(a);
      f();
    },
    edge: (a) => {
      if (a.geometry.tag === "FlatRoute")
        return o(a);
      if (a.geometry.tag === "IsoSegments")
        return i(a);
      f();
    },
    text: Gp(t),
    token: (a) => {
      if (a.geometry.tag === "FlatToken")
        return s(a);
      if (a.geometry.tag === "IsoCube")
        return u(a);
      f();
    },
    insideTokenStyle: t.insideTokenStyle,
    measureText: t.measureText,
    measureInk: t.measureInk
  });
}, Sk = Nl(rp)(_l.measureText), A_ = /* @__PURE__ */ Wp(_l), Lk = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = {
    padding: 24,
    transparentBg: (() => {
      if (n === "TransparentBackground")
        return !0;
      if (n === "PaintBackground")
        return !1;
      f();
    })(),
    halftoneShadows: !1,
    watermark: "",
    theme: t,
    outputAspect: r.width <= 0 || r.height <= 0 ? v : T("Just", r.width / r.height)
  }, a = np(e)(r);
  return () => {
    const c = a(), l = o.levels.length - 1 | 0;
    if (l >= 0 && l < o.levels.length) {
      const d = Sk(kl(us(u)(o))(o.levels[l]))(o.levels[l].segment.layout)(o.levels[l].state)(c)(), g = Rf(i)(d)(s);
      return A_(Vf(u)(g.applied)(o))(c)(), g.springs;
    }
    const _ = Rf(i)(G)(s);
    return A_(Vf(u)(_.applied)(o))(c)(), _.springs;
  };
}, su = (t) => "rgb(" + an(t.r) + "," + an(t.g) + "," + an(t.b) + ")", Io = (t) => t === 1 ? 7 : t === 2 ? 10 : t === 3 ? 14 : t === 4 ? 13 : t === 5 ? 5 : t === 6 ? 1 : t === 7 ? 4 : t === 8 ? 1 : t === 9 ? 2 : t === 10 ? 1 : t === 11 ? 2 : t === 12 ? 1 : t === 18 ? 2 : t === 19 ? 1 : t === 13 ? 2 : t === 14 ? 1 : t === 15 || t === 16 ? 5 : 1, ln = /* @__PURE__ */ p0(/* @__PURE__ */ d0("Fixed", /* @__PURE__ */ h0(0)(20)(2))), Sl = (t) => {
  const n = (e) => {
    const r = e >= 0 && e < t.length ? T("Just", t[e]) : v;
    if (r.tag === "Just")
      return r._1 === 1 ? [
        "M",
        ln((() => {
          const o = e + 1 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ln((() => {
          const o = e + 2 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ...n(e + 3 | 0)
      ] : r._1 === 2 ? [
        "L",
        ln((() => {
          const o = e + 1 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ln((() => {
          const o = e + 2 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ...n(e + 3 | 0)
      ] : r._1 === 3 ? [
        "Q",
        ln((() => {
          const o = e + 1 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ln((() => {
          const o = e + 2 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ln((() => {
          const o = e + 3 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ln((() => {
          const o = e + 4 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ...n(e + 5 | 0)
      ] : r._1 === 4 ? [
        "C",
        ln((() => {
          const o = e + 1 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ln((() => {
          const o = e + 2 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ln((() => {
          const o = e + 3 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ln((() => {
          const o = e + 4 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ln((() => {
          const o = e + 5 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ln((() => {
          const o = e + 6 | 0;
          return o >= 0 && o < t.length ? t[o] : 0;
        })()),
        ...n(e + 7 | 0)
      ] : r._1 === 5 ? ["Z", ...n(e + 1 | 0)] : [];
    if (r.tag === "Nothing")
      return [];
    f();
  };
  return Br(" ")(n(0));
}, Ek = (t) => ln(t.vx) + " " + ln(t.vy) + " " + ln(t.vw) + " " + ln(t.vh), Oe = (t) => (n) => dn(Xe(n >= 0 && n < t.length ? t[n] : 0)), jc = (t) => (n) => {
  const e = Oe(t.ops)(n + 1 | 0);
  return At(e, e + Oe(t.ops)(n + 2 | 0) | 0, t.paths);
}, R_ = /* @__PURE__ */ (() => {
  const t = er("&")("&amp;"), n = er("<")("&lt;"), e = (() => {
    const r = er(">")("&gt;"), o = (() => {
      const i = er('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), Pk = { vx: 0, vy: 0, vw: 1, vh: 1 }, Ak = (t) => ((e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s >= 0 && s < t.length) {
      if (t[s] === 15) {
        const u = s + 1 | 0;
        o = !1, i = {
          vx: u >= 0 && u < t.length ? t[u] : 0,
          vy: (() => {
            const a = u + 1 | 0;
            return a >= 0 && a < t.length ? t[a] : 0;
          })(),
          vw: (() => {
            const a = u + 2 | 0;
            return a >= 0 && a < t.length ? t[a] : 0;
          })(),
          vh: (() => {
            const a = u + 3 | 0;
            return a >= 0 && a < t.length ? t[a] : 0;
          })()
        };
        continue;
      }
      r = s + Io(t[s]) | 0;
      continue;
    }
    o = !1, i = Pk;
  }
  return i;
})(0), bs = (t) => (n) => ({ r: Oe(t)(n), g: Oe(t)(n + 1 | 0), b: Oe(t)(n + 2 | 0), a: Oe(t)(n + 3 | 0) }), F_ = (t) => (n) => ({
  color: bs(t)(n),
  width: (() => {
    const e = n + 4 | 0;
    return e >= 0 && e < t.length ? t[e] : 0;
  })(),
  join: Oe(t)(n + 5 | 0),
  cap: Oe(t)(n + 6 | 0)
}), Rk = (t) => (n) => '<rect x="' + ln(t.vx) + '" y="' + ln(t.vy) + '" width="' + ln(t.vw) + '" height="' + ln(t.vh) + '" fill="' + su(n) + '" opacity="' + ln(V(n.a) / 255) + '"/>', Fk = (t) => (n) => '<path d="' + Sl(t) + '" fill="' + su(n) + '" fill-opacity="' + ln(V(n.a) / 255) + '"/>', qp = (t) => ' stroke="' + su(t.color) + '" stroke-opacity="' + ln(V(t.color.a) / 255) + '" stroke-width="' + ln(t.width) + '" stroke-linejoin="' + (t.join === 0 ? "round" : t.join === 1 ? "bevel" : "miter") + '" stroke-linecap="' + (t.cap === 0 ? "butt" : t.cap === 1 ? "round" : "square") + '"', Gk = (t) => (n) => (e) => '<path d="' + Sl(t) + '" fill="' + su(n) + '" fill-opacity="' + ln(V(n.a) / 255) + '"' + qp(e) + "/>", Ik = (t) => (n) => '<path d="' + Sl(t) + '" fill="none"' + qp(n) + "/>", Bk = (t) => (n) => {
  const e = bs(t.ops)(n + 7 | 0), r = Oe(t.ops)(n + 12 | 0), o = Oe(t.ops)(n + 11 | 0);
  return '<text x="' + ln((() => {
    const i = n + 1 | 0;
    return i >= 0 && i < t.ops.length ? t.ops[i] : 0;
  })()) + '" y="' + ln((() => {
    const i = n + 2 | 0;
    return i >= 0 && i < t.ops.length ? t.ops[i] : 0;
  })()) + '"' + (r === 0 ? ' dy="0.8em"' : r === 1 ? ' dy="0.32em"' : "") + ' fill="' + su(e) + '" fill-opacity="' + ln(V(e.a) / 255) + '" font-size="' + ln((() => {
    const i = n + 5 | 0;
    return i >= 0 && i < t.ops.length ? t.ops[i] : 0;
  })()) + '" font-family="' + R_((() => {
    const i = Oe(t.ops)(n + 4 | 0);
    return i >= 0 && i < t.strs.length ? t.strs[i] + ", ui-sans-serif, system-ui, sans-serif" : ", ui-sans-serif, system-ui, sans-serif";
  })()) + '" font-weight="' + an(Oe(t.ops)(n + 6 | 0)) + '" text-anchor="' + (o === 0 ? "start" : o === 1 ? "middle" : "end") + '">' + R_((() => {
    const i = Oe(t.ops)(n + 3 | 0);
    return i >= 0 && i < t.strs.length ? t.strs[i] : "";
  })()) + "</text>";
}, Bo = (t) => (n) => (e) => {
  const r = e >= 0 && e < n.ops.length ? T("Just", n.ops[e]) : v;
  if (r.tag === "Just")
    return r._1 === 1 ? Fk(jc(n)(e))(bs(n.ops)(e + 3 | 0)) + Bo(t)(n)(e + Io(r._1) | 0) : r._1 === 2 ? Ik(jc(n)(e))(F_(n.ops)(e + 3 | 0)) + Bo(t)(n)(e + Io(r._1) | 0) : r._1 === 3 ? Gk(jc(n)(e))(bs(n.ops)(e + 3 | 0))(F_(n.ops)(e + 7 | 0)) + Bo(t)(n)(e + Io(r._1) | 0) : r._1 === 4 ? Bk(n)(e) + Bo(t)(n)(e + Io(r._1) | 0) : r._1 === 16 ? Rk(t)(bs(n.ops)(e + 1 | 0)) + Bo(t)(n)(e + Io(r._1) | 0) : Bo(t)(n)(e + Io(r._1) | 0);
  if (r.tag === "Nothing")
    return "";
  f();
}, Dk = (t) => {
  const n = Ak(t.ops);
  return { viewBox: Ek(n), body: Bo(n)(t)(0), vx: n.vx, vy: n.vy, vw: n.vw, vh: n.vh };
}, zk = /* @__PURE__ */ NC(kC)(Z$), G_ = (t) => (n) => {
  const e = t.strs;
  return () => {
    const r = f0(e);
    return t.strs.push(n), r;
  };
}, Su = (t) => (n) => {
  const e = t.paths;
  return () => {
    const r = f0(e);
    return t.paths.push(...n), { offset: r, len: n.length };
  };
}, Hk = (t) => (n) => {
  const e = n.tx, r = t.ops;
  return () => {
    r.push(e), t.ops.push(n.ty), t.ops.push(n.sx), t.ops.push(n.sy);
  };
}, I_ = (t) => (n) => {
  const e = n.vx, r = t.ops;
  return () => {
    r.push(e), t.ops.push(n.vy), t.ops.push(n.vw), t.ops.push(n.vh);
  };
}, Ur = (t) => (n) => {
  const e = V(n), r = t.ops;
  return () => {
    r.push(e);
  };
}, Lu = (t) => (n) => {
  const e = n.len, r = Ur(t)(n.offset);
  return () => (r(), Ur(t)(e)());
}, Qk = () => {
  const t = [], n = [], e = [], r = [];
  return r.push(1), { ops: t, paths: n, strs: e, alphaStack: r };
}, Ok = (t) => {
  if (t.tag === "MeasureText") {
    const n = t._3(al(t._1)(t._2));
    return () => n;
  }
  if (t.tag === "MeasureInk") {
    const n = t._3(cl(t._1)(t._2));
    return () => n;
  }
  f();
}, Xp = (t) => {
  const n = t.alphaStack;
  return () => {
    const e = f0(n);
    if (e === 0)
      return 1;
    const r = n2(qt, v, e - 1 | 0, t.alphaStack);
    if (r.tag === "Nothing")
      return 1;
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, Do = (t) => (n) => {
  const e = Xp(t);
  return () => {
    const r = e();
    return Ur(t)(n.r)(), Ur(t)(n.g)(), Ur(t)(n.b)(), Ur(t)(dn(Xe(V(n.a) * r + 0.5)))();
  };
}, B_ = (t) => (n) => {
  const e = Do(t)(n.color);
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
}, Wk = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r;
    if (u.tag === "FillPath") {
      const a = u._3, c = u._2, l = Su(s)(u._1);
      o = !1, i = () => {
        const _ = l();
        return s.ops.push(1), Lu(s)(_)(), Do(s)(c.color)(), a;
      };
      continue;
    }
    if (u.tag === "StrokePath") {
      const a = u._3, c = u._2, l = Su(s)(u._1);
      o = !1, i = () => {
        const _ = l();
        return s.ops.push(2), Lu(s)(_)(), B_(s)(c)(), a;
      };
      continue;
    }
    if (u.tag === "FillStrokePath") {
      const a = u._2, c = u._4, l = u._3, _ = Su(s)(u._1);
      o = !1, i = () => {
        const d = _();
        return s.ops.push(3), Lu(s)(d)(), Do(s)(a.color)(), B_(s)(l)(), c;
      };
      continue;
    }
    if (u.tag === "DrawText") {
      const a = u._2, c = u._1, l = G_(s)(ti(c.content));
      o = !1, i = () => {
        const _ = l(), d = G_(s)(c.font.family)();
        return s.ops.push(4), s.ops.push(c.x), s.ops.push(c.y), Ur(s)(_)(), Ur(s)(d)(), s.ops.push(c.font.size), Ur(s)(c.font.weight)(), Do(s)(c.color)(), s.ops.push((() => {
          if (c.align === "AlignLeft")
            return 0;
          if (c.align === "AlignCenter")
            return 1;
          if (c.align === "AlignRight")
            return 2;
          f();
        })()), s.ops.push((() => {
          if (c.baseline === "BaselineTop")
            return 0;
          if (c.baseline === "BaselineMiddle")
            return 1;
          if (c.baseline === "BaselineAlphabetic")
            return 2;
          if (c.baseline === "BaselineBottom")
            return 3;
          f();
        })()), a;
      };
      continue;
    }
    if (u.tag === "DrawTextAffine") {
      e = s, r = Mt(
        "DrawText",
        { ...u._2, x: u._1.a * u._2.x + u._1.c * u._2.y + u._1.e, y: u._1.b * u._2.x + u._1.d * u._2.y + u._1.f },
        u._3
      );
      continue;
    }
    if (u.tag === "PushTransform") {
      const a = u._2, c = u._1, l = s.ops;
      o = !1, i = () => (l.push(5), Hk(s)(c)(), a);
      continue;
    }
    if (u.tag === "PopTransform") {
      const a = u._1, c = s.ops;
      o = !1, i = () => (c.push(6), a);
      continue;
    }
    if (u.tag === "PushClip") {
      const a = u._3, c = u._2, l = Su(s)(u._1);
      o = !1, i = () => {
        const _ = l();
        return s.ops.push(7), Lu(s)(_)(), s.ops.push((() => {
          if (c === "NonZero")
            return 0;
          if (c === "EvenOdd")
            return 1;
          f();
        })()), a;
      };
      continue;
    }
    if (u.tag === "PopClip") {
      const a = u._1, c = s.ops;
      o = !1, i = () => (c.push(8), a);
      continue;
    }
    if (u.tag === "PushBlend") {
      const a = u._1, c = u._2, l = s.ops;
      o = !1, i = () => (l.push(9), s.ops.push((() => {
        if (a === "Normal")
          return 0;
        if (a === "Difference")
          return 1;
        f();
      })()), c);
      continue;
    }
    if (u.tag === "PopBlend") {
      const a = u._1, c = s.ops;
      o = !1, i = () => (c.push(10), a);
      continue;
    }
    if (u.tag === "PushAlpha") {
      const a = u._1, c = u._2, l = Xp(s);
      o = !1, i = () => {
        const _ = l();
        return s.alphaStack.push(_ * a), s.ops.push(11), s.ops.push(a), c;
      };
      continue;
    }
    if (u.tag === "PopAlpha") {
      const a = u._1, c = s.alphaStack;
      o = !1, i = () => (e2(qt, v, c), s.ops.push(12), a);
      continue;
    }
    if (u.tag === "PushBlur") {
      const a = u._2, c = u._1, l = s.ops;
      o = !1, i = () => (l.push(18), s.ops.push(c), a);
      continue;
    }
    if (u.tag === "PopBlur") {
      const a = u._1, c = s.ops;
      o = !1, i = () => (c.push(19), a);
      continue;
    }
    if (u.tag === "PushLayer") {
      const a = u._1, c = u._2, l = s.ops;
      o = !1, i = () => (l.push(13), s.ops.push((() => {
        if (a === "LayerBase")
          return 0;
        if (a === "LayerPolyOut")
          return 1;
        if (a === "LayerPolyIn")
          return 2;
        if (a === "LayerNodeMask")
          return 3;
        if (a === "LayerOverlay")
          return 4;
        f();
      })()), c);
      continue;
    }
    if (u.tag === "PopLayer") {
      const a = u._1, c = s.ops;
      o = !1, i = () => (c.push(14), a);
      continue;
    }
    if (u.tag === "SetViewport") {
      const a = u._2, c = u._1, l = s.ops;
      o = !1, i = () => (l.push(15), I_(s)(c)(), a);
      continue;
    }
    if (u.tag === "ClearBackground") {
      const a = u._1, c = u._2, l = s.ops;
      o = !1, i = () => (l.push(16), Do(s)(a)(), c);
      continue;
    }
    if (u.tag === "BackgroundDots") {
      const a = u._2, c = u._1, l = s.ops;
      o = !1, i = () => (l.push(17), I_(s)(c.viewport)(), Do(s)(c.bgColor)(), Do(s)(c.dotColor)(), s.ops.push(c.tile), s.ops.push(c.dotRadius), s.ops.push(c.origin.x), s.ops.push(c.origin.y), a);
      continue;
    }
    f();
  }
  return i;
}, qk = (t) => (n) => n.type === "metrics" ? Ok(n.value) : n.type === "render" ? Wk(t)(n.value) : Mu("Data.Functor.Variant: pattern match failure [" + n.type + "]"), Xk = (t) => {
  const n = Qk();
  return zk(qk(n))(t)(), { ops: n.ops, paths: n.paths, strs: n.strs };
}, Yp = (t) => t, uu = (t) => t, D_ = /* @__PURE__ */ uu("Light"), Yk = /* @__PURE__ */ uu("Dark"), Mk = /* @__PURE__ */ uu("Blueprint"), Uk = /* @__PURE__ */ uu("Whiteboard"), Kk = /* @__PURE__ */ uu("Isometric"), Vk = /* @__PURE__ */ Yp("PaintBackground"), jk = /* @__PURE__ */ Yp("TransparentBackground"), xo = (t) => "rgb(" + an(t.r) + "," + an(t.g) + "," + an(t.b) + ")", Cr = /* @__PURE__ */ p0(/* @__PURE__ */ d0("Fixed", /* @__PURE__ */ h0(0)(20)(4))), Zk = (t) => "translate(" + Cr(t.tx) + "," + Cr(t.ty) + ") scale(" + Cr(t.sx) + "," + Cr(t.sy) + ")", Dt = /* @__PURE__ */ p0(/* @__PURE__ */ d0("Fixed", /* @__PURE__ */ h0(0)(20)(2))), Ll = (t) => {
  const n = [];
  let e = 0;
  for (; e < t.length; ) {
    const r = e, o = r >= 0 && r < t.length ? T("Just", t[r]) : v;
    if (o.tag === "Nothing") {
      e = t.length;
      continue;
    }
    if (o.tag === "Just") {
      if (o._1 === 1) {
        n.push("M"), n.push(Dt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Dt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 2) {
        n.push("L"), n.push(Dt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Dt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 3) {
        n.push("Q"), n.push(Dt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Dt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Dt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Dt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 5 | 0;
        continue;
      }
      if (o._1 === 4) {
        n.push("C"), n.push(Dt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Dt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Dt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Dt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Dt((() => {
          const i = r + 5 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(Dt((() => {
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
  return Br(" ")(n);
}, tS = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, jf = /* @__PURE__ */ (() => {
  const t = er("&")("&amp;"), n = er("<")("&lt;"), e = (() => {
    const r = er(">")("&gt;"), o = (() => {
      const i = er('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), nS = (t) => {
  if (t.style === "RunText")
    return "<tspan>" + jf(t.text) + "</tspan>";
  if (t.style === "RunCode")
    return `<tspan font-family="'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="400">` + jf(t.text) + "</tspan>";
  f();
}, Zn = (t) => (n) => {
  const e = n.maskDepth;
  return () => {
    e.value === 0 && n.out.push(t);
  };
}, eS = (t) => (n) => {
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
    const i = r, s = i >= 0 && i < n.length ? T("Just", n[i]) : v;
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
}, Eu = (t) => (n) => {
  const e = t.bake;
  return () => {
    const r = e.value;
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return eS(r._1)(n);
    f();
  };
}, Mp = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => tS
}, rS = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => Mp
}, oS = { pure: (t) => (n) => () => t, Apply0: () => Mp }, Up = { Applicative0: () => oS, Bind1: () => rS }, iS = (t) => (n) => '<defs><pattern id="' + t + '" x="' + Dt(n.origin.x) + '" y="' + Dt(n.origin.y) + '" width="' + Dt(n.tile) + '" height="' + Dt(n.tile) + '" patternUnits="userSpaceOnUse">' + (n.bgColor.a === 0 ? "" : '<rect width="' + Dt(n.tile) + '" height="' + Dt(n.tile) + '" fill="' + xo(n.bgColor) + '" fill-opacity="' + Dt(V(n.bgColor.a) / 255) + '"/>') + '<circle cx="' + Dt(n.tile / 2) + '" cy="' + Dt(n.tile / 2) + '" r="' + Dt(n.dotRadius) + '" fill="' + xo(n.dotColor) + '"/></pattern></defs><rect x="' + Dt(n.viewport.vx) + '" y="' + Dt(n.viewport.vy) + '" width="' + Dt(n.viewport.vw) + '" height="' + Dt(n.viewport.vh) + '" fill="url(#' + t + ')"/>', z_ = (t) => (n) => '<path d="' + Ll(t) + '" fill="' + xo(n) + '" fill-opacity="' + Dt(V(n.a) / 255) + '"/>', sS = (t) => (n) => (e) => (r) => '<rect x="' + Dt(t.x) + '" y="' + Dt(t.y) + '" width="' + Dt(t.w) + '" height="' + Dt(t.h) + '" rx="' + Dt(n) + '"' + (() => {
  if (e.tag === "Just")
    return ' fill="' + xo(e._1.color) + '" fill-opacity="' + Dt(V(e._1.color.a) / 255) + '"';
  if (e.tag === "Nothing")
    return ' fill="none"';
  f();
})() + (() => {
  if (r.tag === "Just")
    return ' stroke="' + xo(r._1.color) + '" stroke-opacity="' + Dt(V(r._1.color.a) / 255) + '" stroke-width="' + Dt(r._1.width) + '" stroke-linejoin="' + (() => {
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
})() + "/>", H_ = (t) => (n) => '<path d="' + Ll(t) + '" fill="none" stroke="' + xo(n.color) + '" stroke-opacity="' + Dt(V(n.color.a) / 255) + '" stroke-width="' + Dt(n.width) + '" stroke-linejoin="' + (() => {
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
})() + '"/>', Q_ = (t) => {
  const n = Jh(ti(t.content));
  return '<text x="' + Dt(t.x) + '" y="' + Dt(t.y) + '"' + (() => {
    if (t.baseline === "BaselineTop")
      return ' dy="0.8em"';
    if (t.baseline === "BaselineMiddle")
      return ' dy="0.32em"';
    if (t.baseline === "BaselineAlphabetic" || t.baseline === "BaselineBottom")
      return "";
    f();
  })() + ' fill="' + xo(t.color) + '" fill-opacity="' + Dt(V(t.color.a) / 255) + '" font-size="' + Dt(t.font.size) + '" font-family="Ilisarniq, ui-sans-serif, system-ui, sans-serif" font-weight="' + an(t.font.weight) + '" text-anchor="' + (() => {
    if (t.align === "AlignLeft")
      return "start";
    if (t.align === "AlignCenter")
      return "middle";
    if (t.align === "AlignRight")
      return "end";
    f();
  })() + '">' + (n.length === 1 && n[0].style === "RunText" ? jf(n[0].text) : Br("")(B(nS)(n))) + "</text>";
}, uS = (t) => "matrix(" + Cr(t.a) + " " + Cr(t.b) + " " + Cr(t.c) + " " + Cr(t.d) + " " + Cr(t.e) + " " + Cr(t.f) + ")", Kp = {
  fillPath: (t) => (n) => (e) => {
    const r = Eu(e)(t);
    return () => {
      const o = r();
      return Zn(z_(o)(n.color))(e)();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = Eu(e)(t);
    return () => {
      const o = r(), i = e.bake.value;
      return Zn(H_(o)((() => {
        if (i.tag === "Nothing")
          return n;
        if (i.tag === "Just")
          return { ...n, width: i._1.sx * n.width };
        f();
      })()))(e)();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = Eu(r)(t);
    return () => {
      const i = o(), s = r.bake.value;
      return Zn(z_(i)(n.color) + H_(i)((() => {
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
      return Zn(sS((() => {
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
      ) : v))(o)();
    };
  },
  drawText: (t) => (n) => {
    const e = n.bake;
    return () => {
      const r = e.value;
      return Zn(Q_((() => {
        if (r.tag === "Nothing")
          return t;
        if (r.tag === "Just")
          return { ...t, x: r._1.sx * t.x + r._1.tx, y: r._1.sy * t.y + r._1.ty, font: { ...t.font, size: r._1.sx * t.font.size } };
        f();
      })()))(n)();
    };
  },
  drawTextAffine: (t) => (n) => Zn((() => {
    const e = 'transform="' + uS(t) + '"';
    return (e === "" ? "<g>" : "<g " + e + ">") + Q_(n) + "</g>";
  })()),
  pushTransform: (t) => Zn((() => {
    const n = 'transform="' + Zk(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popTransform: /* @__PURE__ */ Zn("</g>"),
  pushBakedTransform: (t) => (n) => {
    const e = n.bake;
    return () => {
      e.value = T("Just", t);
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
      const i = Eu(e)(t)(), s = "clip" + an(o);
      return Zn((() => {
        const u = 'clip-path="url(#' + s + ')"';
        return '<defs><clipPath id="' + s + '"><path d="' + Ll(i) + '"' + (() => {
          if (n === "EvenOdd")
            return ' clip-rule="evenodd"';
          if (n === "NonZero")
            return "";
          f();
        })() + "/></clipPath></defs>" + (u === "" ? "<g>" : "<g " + u + ">");
      })())(e)();
    };
  },
  popClip: /* @__PURE__ */ Zn("</g>"),
  pushBlend: (t) => Zn((() => {
    const n = (() => {
      if (t === "Normal")
        return 'style="mix-blend-mode: normal"';
      if (t === "Difference")
        return 'style="mix-blend-mode: difference"';
      f();
    })();
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popBlend: /* @__PURE__ */ Zn("</g>"),
  pushAlpha: (t) => Zn((() => {
    const n = 'opacity="' + Dt(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popAlpha: /* @__PURE__ */ Zn("</g>"),
  pushBlur: (t) => (n) => {
    if (t < 0.01)
      return Zn("<g>")(n);
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      n.patternCounter.value = r + 1 | 0;
      const o = "lvl-blur-" + an(r);
      return Zn((() => {
        const i = 'filter="url(#' + o + ')"';
        return '<defs><filter id="' + o + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="' + Dt(t) + '"/></filter></defs>' + (i === "" ? "<g>" : "<g " + i + ">");
      })())(n)();
    };
  },
  popBlur: /* @__PURE__ */ Zn("</g>"),
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
  clearBackground: (t) => (n) => Zn('<rect x="' + Dt(n.viewport.vx) + '" y="' + Dt(n.viewport.vy) + '" width="' + Dt(n.viewport.vw) + '" height="' + Dt(n.viewport.vh) + '" fill="' + xo(t) + '" opacity="' + Dt(V(t.a) / 255) + '"/>')(n),
  backgroundDots: (t) => (n) => {
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      return n.patternCounter.value = r + 1 | 0, Zn(iS("bg-dots-" + an(r))(t))(n)();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = al(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = cl(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => ll,
  Monad0: () => Up
}, aS = /* @__PURE__ */ Wp(Kp), cS = Nl(Up)(Kp.measureText), fS = (t) => (n) => (e) => (r) => (o) => {
  const i = {
    padding: 24,
    transparentBg: (() => {
      if (r === "TransparentBackground")
        return !0;
      if (r === "PaintBackground")
        return !1;
      f();
    })(),
    halftoneShadows: !1,
    watermark: "",
    theme: e,
    outputAspect: t
  }, s = us(i)(o);
  return {
    viewBox: Dt(s.vx) + " " + Dt(s.vy) + " " + Dt(s.vw) + " " + Dt(s.vh),
    body: (() => {
      const u = [], a = { value: 0 }, c = { value: 0 }, l = { value: 0 }, _ = { value: v };
      return aS(Vf(i)(n)(o))({ out: u, maskDepth: a, clipCounter: c, patternCounter: l, viewport: s, bake: _ })(), Br("")(u);
    })(),
    vx: s.vx,
    vy: s.vy,
    vw: s.vw,
    vh: s.vh
  };
}, lS = (t) => (n) => (e) => (r) => (o) => (i) => {
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
  }, u = Rf(o)((() => {
    const a = [], c = { value: 0 }, l = { value: 0 }, _ = { value: 0 }, d = { value: v }, g = r.levels.length - 1 | 0;
    if (g >= 0 && g < r.levels.length) {
      const p = kl(us(s)(r))(r.levels[g]);
      return cS(p)(r.levels[g].segment.layout)(r.levels[g].state)({
        out: a,
        maskDepth: c,
        clipCounter: l,
        patternCounter: _,
        viewport: p,
        bake: d
      })();
    }
    return G;
  })())(i);
  return { parts: fS(t)(u.applied)(n)(e)(r), springs: u.springs };
}, gS = (t) => (n) => {
  if (n.scene.tag === "Structural")
    return n.scene._1.to;
  if (n.scene.tag === "DataFlow")
    return n.scene._1.keyframe;
  if (n.scene.tag === "Hold")
    return n.scene._1;
  if (n.scene.tag === "EnterNode" || n.scene.tag === "ExitNode" || n.scene.tag === "StepScene")
    return t;
  f();
}, se = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ir = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, _S = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Si = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ta = /* @__PURE__ */ Ks(si), dS = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Vp = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, hS = (t) => (e) => {
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
}, pS = (t) => (e) => {
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
}, O_ = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ke);
  return (n) => t(ge("IterNode", n, Ue));
})(), vi = (t) => (n) => (e) => {
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
}, mS = (t) => t, jp = (t) => (n) => (e) => e < t ? 0 : e > 1 - n ? 1 : (e - t) / se(0.05)(1 - t - n), $S = (t) => (n) => t.labelBasePx * 0.62 * V(w(_S)(0)(B(zx)(wt(n)((e) => Jo(`
`)(e))))), W_ = /* @__PURE__ */ (() => {
  const t = w((n) => (e) => {
    const r = n.previous.tag === "Just" && sr(n.previous._1.endT - e.startT) < 1e-4 ? { ...e, fromCam: n.previous._1.toCam } : e;
    return { previous: T("Just", r), spans: St(n.spans)(r) };
  })({ previous: v, spans: [] });
  return (n) => t(n).spans;
})(), Zc = (t) => (n) => {
  const e = Si(n)(t.keyframes);
  if (e.tag === "Nothing")
    return G;
  if (e.tag === "Just")
    return e._1.nodes;
  f();
}, Zp = (t) => (n) => {
  if (n < t.startT)
    return ve("AtKeyframe", t.initialKeyframe);
  const e = en((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return ve("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return ve("AtKeyframe", e._1.scene._1.keyframe);
    if (e._1.scene.tag === "Hold")
      return ve("AtKeyframe", e._1.scene._1);
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode" || e._1.scene.tag === "StepScene")
      return ve("AtKeyframe", t.initialKeyframe);
    f();
  }
  if (e.tag === "Nothing")
    return ve(
      "AtKeyframe",
      w(gS)(t.initialKeyframe)(t.spans)
    );
  f();
}, yS = (t) => (n) => (e) => (r) => {
  const o = en((i) => Ta(i.path)(n) && (sr(i.endT - e) < 1e-4 || sr(i.startT - r) < 1e-4))(t.segments);
  if (o.tag === "Just")
    return T("Just", o._1);
  if (o.tag === "Nothing")
    return en((i) => Ta(i.path)(n))(t.segments);
  f();
}, tf = (t) => (n) => {
  const e = Si(n)(t.keyframes);
  if (e.tag === "Nothing")
    return G;
  if (e.tag === "Just")
    return e._1.edges;
  f();
}, xS = (t) => (n) => (e) => bt((r) => {
  const o = bt((i) => dS(i)(t.nodes))(jt(
    be.foldr,
    (() => {
      if (r.scene.tag === "Structural")
        return Yn(
          F.compare,
          Xn,
          (() => {
            const i = Si(r.scene._1.from)(e);
            if (i.tag === "Nothing")
              return G;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })(),
          (() => {
            const i = Si(r.scene._1.to)(e);
            if (i.tag === "Nothing")
              return G;
            if (i.tag === "Just")
              return i._1.nodes;
            f();
          })()
        );
      if (r.scene.tag === "DataFlow") {
        const i = Si(r.scene._1.keyframe)(e);
        if (i.tag === "Nothing")
          return G;
        if (i.tag === "Just")
          return i._1.nodes;
        f();
      }
      if (r.scene.tag === "Hold") {
        const i = Si(r.scene._1)(e);
        if (i.tag === "Nothing")
          return G;
        if (i.tag === "Just")
          return i._1.nodes;
        f();
      }
      if (r.scene.tag === "EnterNode" || r.scene.tag === "ExitNode" || r.scene.tag === "StepScene")
        return G;
      f();
    })()
  ));
  return o.length === 0 ? v : T(
    "Just",
    {
      startT: r.startT,
      endT: r.endT,
      bbox: (() => {
        const i = w((s) => (u) => ({ minX: ir(s.minX)(u.x), minY: ir(s.minY)(u.y), maxX: se(s.maxX)(u.x + u.w), maxY: se(s.maxY)(u.y + u.h) }))(0 < o.length ? { minX: o[0].x, minY: o[0].y, maxX: o[0].x + o[0].w, maxY: o[0].y + o[0].h } : { minX: 0, minY: 0, maxX: 0, maxY: 0 })(At(1, o.length, o));
        return { x: i.minX, y: i.minY, w: i.maxX - i.minX, h: i.maxY - i.minY };
      })(),
      priority: 0
    }
  );
}), vS = (t) => (n) => {
  const e = hn(n), r = Jl({ width: t.widthPx, height: t.heightPx })({
    vx: e.x,
    vy: e.y,
    vw: e.w,
    vh: e.h
  });
  return { w: r.vw, h: r.vh };
}, TS = (t) => (n) => (e) => (r) => {
  const o = se(e.center.x - r.x)(r.x + r.w - e.center.x), i = se(e.center.y - r.y)(r.y + r.h - e.center.y), s = vS(t)(n);
  return ir(o <= 0 ? e.zoom : s.w / (o * 2))(i <= 0 ? e.zoom : s.h / (i * 2));
}, tm = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, a = qe(u);
    if (a.tag === "Just" && a._1.last.intent === "Overview") {
      e = [a._1.last, ...s], r = a._1.init;
      continue;
    }
    o = !1, i = { prefix: u, overview: s };
  }
  return i;
}, wS = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, a = Ht((c) => v, (c) => (l) => T("Just", { head: c, tail: l }), u);
    if (a.tag === "Just" && a._1.head.intent === "Overview") {
      e = St(s)(a._1.head), r = a._1.tail;
      continue;
    }
    o = !1, i = { overview: s, rest: u };
  }
  return i;
}, Ki = (t) => (n) => (e) => (r) => (o) => {
  const i = { width: n.widthPx, height: n.heightPx }, s = Jl(i)((() => {
    const u = No(e)(o);
    return { vx: u.x, vy: u.y, vw: u.w, vh: u.h };
  })());
  return t.labelBasePx * r.placement.scale * (i.width <= 0 || s.vw <= 0 ? 0 : i.width / s.vw);
}, NS = (t) => (n) => (e) => (r) => (o) => {
  const i = Ki(t)(n)(e)(r)(o);
  return i <= t.minimumReadableLabelPx ? o : { ...o, zoom: o.zoom * t.minimumReadableLabelPx / i };
}, JS = (t) => (n) => (e) => (r) => ({
  ...r,
  fromCam: Tg(t)(n)(e)(r.fromCam),
  toCam: Tg(t)(n)(e)(r.toCam)
}), CS = (t) => (n) => t.widthPx <= 0 ? 0 : ir(n / 4)(6 * n / t.widthPx), bS = (t) => (n) => (e) => (r) => (o) => {
  const i = CS(n)(e), s = r + e / 2 - i;
  return o < r - e / 2 + i ? o - i + e / 2 : o > s ? o + i - e / 2 : r;
}, kS = (t) => (n) => (e) => En(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), SS = (t) => (n) => (e) => En(
  (r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e,
  t
), LS = (t) => (n) => (e) => En(
  (r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e,
  t
), ES = (t) => (n) => (e) => En(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), wa = (t) => (n) => (e) => En((r) => e(r) && n >= r.startT && n < r.endT, t), nf = (t) => (n) => (e) => {
  if (n.length === 0)
    return e;
  const r = ir(160)($S(t)(n) + 31), o = ir(40)(t.labelBasePx * 1.2 + 23);
  return { x: e.x - r, y: e.y - o, w: e.w + r * 2, h: e.h + o * 2 };
}, PS = (t) => (n) => (e) => {
  const r = t.padding * 0.75, o = V(8);
  return Da((i) => {
    if (i.target.tag === "NodeWindow")
      return [];
    if (i.target.tag === "EdgeWindow")
      return [];
    if (i.target.tag === "TokenWindow") {
      const s = Vp(i.target._2)(n.edges);
      if (s.tag === "Just") {
        const u = (() => {
          if (i.target._3 === "Forward")
            return s._1;
          if (i.target._3 === "Backward")
            return fn(s._1);
          f();
        })();
        return wt(Vt(0, 7))((a) => {
          const c = i.startT + (i.endT - i.startT) * (V(a) / o), l = (() => {
            const _ = i.startT + (i.endT - i.startT) * (V(a + 1 | 0) / o);
            return {
              startT: c,
              endT: _,
              box: (() => {
                const d = jo(u)(jp(i.target._7)(i.target._8)(((c + _) / 2 - i.startT) / se(1e-4)(i.endT - i.startT)));
                if (d.tag === "Just")
                  return { x: d._1.x - r, y: d._1.y - r, w: 0 + r * 2, h: 0 + r * 2 };
                if (d.tag === "Nothing")
                  return { x: 0, y: 0, w: 0, h: 0 };
                f();
              })()
            };
          })();
          return [{ startT: l.startT, endT: l.endT, bbox: nf(t)(i.target._6)(l.box), priority: 1 }];
        });
      }
      if (s.tag === "Nothing")
        return [
          {
            startT: i.startT,
            endT: i.endT,
            bbox: nf(t)(i.target._6)(yd(n)(e)(i.target._2)),
            priority: 1
          }
        ];
      f();
    }
    if (i.target.tag === "FillWindow")
      return [
        {
          startT: i.startT,
          endT: i.endT,
          bbox: nf(t)(i.target._3)(O0(n)(e)(Zt(
            "Node",
            1,
            1,
            i.target._2,
            void 0,
            G,
            G
          ))),
          priority: 1
        }
      ];
    f();
  });
}, AS = (t) => (n) => (e) => (r) => (o) => [
  ...xS(o.layout)(e)(n)(ht((i) => i.startT >= o.startT && i.endT <= o.endT, r.spans)),
  ...PS(t)(o.layout)(e)(o.windows)
], RS = (t) => (n) => (e) => (r) => (o) => (i) => bx(t)(n)(i.layout)(o.endT)(AS(t)(e)(r)(o)(i)), FS = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (o.tag === "Nothing")
    return i.zoom;
  if (o.tag === "Just")
    return se(0)(TS(n)(e)(i)((() => {
      const s = t.padding * r.placement.scale;
      return { x: o._1.x - s, y: o._1.y - s, w: o._1.w + s * 2, h: o._1.h + s * 2 };
    })()));
  f();
}, GS = (t) => (n) => {
  const e = Zp(t)(n);
  if (e.tag === "AtKeyframe")
    return Zc(t)(e._1);
  if (e.tag === "InTransition")
    return Yn(F.compare, Xn, Zc(t)(e._1), Zc(t)(e._2));
  f();
}, IS = (t) => (n) => (e) => wa(t.windows)(n)((r) => r.target.tag === "NodeWindow" && r.target._1 === e && r.target._2 === "PlopOut") ? !0 : SS(t.windows)(n)(e) ? !1 : wa(t.windows)(n)((r) => r.target.tag === "NodeWindow" && r.target._1 === e) ? !0 : LS(t.windows)(n)(e) ? !1 : hS(e)(GS(t)(n)), BS = (t) => (n) => {
  const e = Zp(t)(n);
  if (e.tag === "AtKeyframe")
    return tf(t)(e._1);
  if (e.tag === "InTransition")
    return Yn(F.compare, Xn, tf(t)(e._1), tf(t)(e._2));
  f();
}, DS = (t) => (n) => (e) => wa(t.windows)(n)((r) => r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e) ? !0 : kS(t.windows)(n)(e) ? !1 : wa(t.windows)(n)((r) => r.target.tag === "EdgeWindow" && r.target._1 === e) ? !0 : ES(t.windows)(n)(e) ? !1 : pS(e)(BS(t)(n)), zS = (t) => (n) => {
  const e = [
    ...bt((r) => IS(t)(n)(r._1) ? T("Just", { x: r._2.x, y: r._2.y, w: r._2.w, h: r._2.h }) : v)(O_(t.layout.nodes)),
    ...bt((r) => DS(t)(n)(r._1) ? T("Just", Ua(r._2)) : v)(O_(t.layout.edges))
  ];
  return e.length === 0 ? v : T("Just", Zr(e));
}, HS = (t) => (n) => (e) => {
  const r = No(t)(e);
  return n.x >= r.x && n.x + n.w <= r.x + r.w;
}, nm = (t) => (n) => (e) => {
  const r = t.x + t.w / 2, o = e >= t.w ? { lo: r, hi: r } : { lo: t.x + e / 2, hi: t.x + t.w - e / 2 };
  if (e >= n.w) {
    const a = se(o.lo)(n.x + n.w - e / 2), c = ir(o.hi)(n.x + e / 2);
    return a <= c ? { lo: a, hi: c } : o;
  }
  const i = n.x + n.w / 2;
  if (e >= n.w) {
    const a = se(o.lo)(i), c = ir(o.hi)(i);
    return a <= c ? { lo: a, hi: c } : o;
  }
  const s = se(o.lo)(n.x + e / 2), u = ir(o.hi)(n.x + n.w - e / 2);
  return s <= u ? { lo: s, hi: u } : o;
}, QS = (t) => (n) => (e) => e.endT <= t || e.startT >= n ? v : T("Just", { ...e, startT: se(t)(e.startT), endT: ir(n)(e.endT) }), em = (t) => (n) => (e) => (r) => (o) => (i) => bt(QS(i.startT)(i.endT))(B(JS(e)(i.layout)(i.placement))(RS(t)(n)(r)(i.edgeEndpoints)(o)(i))), rm = (t) => (n) => (e) => (r) => {
  const o = hn(t), i = ir(r.zoom)(o.w / se(1e-4)(n.w));
  return {
    ...r,
    center: {
      ...r.center,
      x: (() => {
        const s = nm(o)(n)(o.w / se(1e-4)(i));
        return vi(s.lo)(s.hi)(e.center.x);
      })()
    },
    zoom: i
  };
}, OS = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const a = hn(e), c = (() => {
    if (o.tag === "Nothing")
      return s.center.x;
    if (o.tag === "Just")
      return bS()(n)(u)(i.center.x)(o._1.x + o._1.w / 2);
    f();
  })();
  if (r.tag === "Nothing") {
    const l = a.x + a.w / 2;
    return u >= a.w ? vi(l)(l)(c) : vi(a.x + u / 2)(a.x + a.w - u / 2)(c);
  }
  if (r.tag === "Just") {
    if (u < r._1.w) {
      const _ = a.x + a.w / 2;
      return u >= a.w ? vi(_)(_)(c) : vi(a.x + u / 2)(a.x + a.w - u / 2)(c);
    }
    const l = nm(a)(r._1)(u);
    return vi(l.lo)(l.hi)(c);
  }
  f();
}, WS = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = No(e)(s);
  return u.w <= 0 ? s : { ...s, center: { ...s.center, x: OS()(n)(e)(r)(o)(i)(s)(u.w) } };
}, om = (t) => (n) => (e) => (r) => zy(t)(n)(e)(r.layout)(r.placement)((() => {
  if (r.layout.nodes.tag === "Leaf")
    return 0;
  if (r.layout.nodes.tag === "Node")
    return r.layout.nodes._2;
  f();
})()).camera, im = (t) => (n) => (e) => (r) => (o) => {
  const i = No(e)(o);
  return (() => {
    const s = hn(r.layout), u = s.x * r.placement.scale + r.placement.tx, a = s.y * r.placement.scale + r.placement.ty;
    return u >= i.x && a >= i.y && u + s.w * r.placement.scale <= i.x + i.w && a + s.h * r.placement.scale <= i.y + i.h;
  })() && Ki(t)(n)(e)(r)(o) >= t.minimumReadableLabelPx;
}, ef = (t) => (n) => (e) => (r) => (o) => (i) => im(t)(n)(e)(r)(o) ? o : NS(t)(n)(e)(r)(i), qS = (t) => (n) => (e) => {
  const r = wS([])(e), o = Ht((s) => v, (s) => (u) => T("Just", { head: s, tail: u }), r.rest), i = r.overview.length - 1 | 0;
  return i >= 0 && i < r.overview.length && 0 < r.overview.length && o.tag === "Just" && sr(r.overview[0].startT - n.startT) < 1e-4 && o._1.head.intent === "ActionFocus" ? [
    {
      startT: r.overview[0].startT,
      endT: r.overview[i].endT,
      fromCam: t,
      toCam: t,
      easing: r.overview[0].easing,
      interp: yo,
      intent: Td
    },
    { ...o._1.head, fromCam: t },
    ...o._1.tail
  ] : e;
}, XS = (t) => (n) => {
  const e = Ht((r) => v, (r) => (o) => T("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ ...e._1.head, fromCam: t }, ...e._1.tail];
  f();
}, YS = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = hn(r.layout), u = {
    x: s.x * r.placement.scale + r.placement.tx,
    y: s.y * r.placement.scale + r.placement.ty,
    w: s.w * r.placement.scale,
    h: s.h * r.placement.scale
  }, a = rm(e)(u)(o)(i);
  return u.w / se(1e-4)(u.h) >= 0.33 && i.zoom / se(1e-4)(a.zoom) <= 1.25 && No(e)(a).w >= u.w - 1e-3 && Ki(t)(n)(e)(r)(a) >= t.minimumReadableLabelPx * 0.85 ? a : i;
}, MS = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = hn(r.layout), a = u.w * r.placement.scale, c = a / se(1e-4)(u.h * r.placement.scale);
  if (o.tag === "Nothing")
    return s;
  if (o.tag === "Just") {
    if (HS(e)(o._1)(s))
      return s;
    const l = rm(e)(o._1)(i)(s);
    return s.zoom / se(1e-4)(l.zoom) <= 1.25 && (Ki(t)(n)(e)(r)(l) >= t.minimumReadableLabelPx - 1e-3 || o._1.w >= a - 1e-3 && c >= 0.33 && Ki(t)(n)(e)(r)(l) >= t.minimumReadableLabelPx * 0.85) ? l : s;
  }
  f();
}, US = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = {
    ...s,
    center: (() => {
      if (i.tag === "Nothing")
        return s.center;
      if (i.tag === "Just")
        return { x: i._1.x + i._1.w / 2, y: i._1.y + i._1.h / 2 };
      f();
    })()
  }, a = Ki(t)(n)(e)(r)(u);
  return WS()(n)(e)(o)(i)(s)(MS(t)(n)(e)(r)(o)(s)(YS(t)(n)(e)(r)(s)(a <= 0 ? u : { ...u, zoom: ir(u.zoom * t.minimumReadableLabelPx / a)(FS(t)(n)(e)(r)(i)(u)) })));
}, rf = (t) => (n) => (e) => (r) => (o) => (i) => (s) => im(t)(n)(e)(r)(s) ? s : US(t)(n)(e)(r)(o)(i)(s), q_ = (t) => {
  const n = (r) => (o) => {
    let i = r, s = o, u = !0, a;
    for (; u; ) {
      const c = i, l = s, _ = Ht((d) => v, (d) => (g) => T("Just", { head: d, tail: g }), l);
      if (_.tag === "Just" && _._1.head.intent === "Overview") {
        i = St(c)(_._1.head), s = _._1.tail;
        continue;
      }
      u = !1, a = { overview: c, rest: l };
    }
    return a;
  };
  return ((r) => (o) => {
    let i = r, s = o, u = !0, a;
    for (; u; ) {
      const c = i, _ = Ht((d) => v, (d) => (g) => T("Just", { head: d, tail: g }), s);
      if (_.tag === "Nothing") {
        u = !1, a = c;
        continue;
      }
      if (_.tag === "Just") {
        if (_._1.head.intent === "Overview") {
          const d = n([_._1.head])(_._1.tail), g = Ht((h) => v, (h) => ($) => T("Just", { head: h, tail: $ }), d.rest), p = c.length - 1 | 0, m = p >= 0 && p < c.length ? T("Just", c[p]) : v;
          if (m.tag === "Just" && g.tag === "Just" && m._1.intent === "ActionFocus" && (() => {
            const h = d.overview.length - 1 | 0;
            return g._1.head.intent === "ActionFocus" && (h >= 0 && h < d.overview.length && 0 < d.overview.length ? d.overview[h].endT - d.overview[0].startT <= 1.0001 : !0);
          })() && 0 < d.overview.length) {
            const h = d.overview.length - 1 | 0;
            if (h >= 0 && h < d.overview.length) {
              i = St(c)({
                startT: d.overview[0].startT,
                endT: d.overview[h].endT,
                fromCam: m._1.toCam,
                toCam: m._1.toCam,
                easing: d.overview[0].easing,
                interp: yo,
                intent: Va
              }), s = [{ ...g._1.head, fromCam: m._1.toCam }, ...g._1.tail];
              continue;
            }
          }
          i = [...c, ...d.overview], s = d.rest;
          continue;
        }
        i = St(c)(_._1.head), s = _._1.tail;
        continue;
      }
      f();
    }
    return a;
  })([])(t);
}, KS = (t) => (n) => (e) => {
  const r = tm([])(e), o = r.overview.length - 1 | 0;
  if (o >= 0 && o < r.overview.length) {
    if (0 < r.overview.length) {
      const i = r.prefix.length - 1 | 0;
      if (i >= 0 && i < r.prefix.length && r.prefix[i].intent === "ActionFocus" && sr(r.overview[o].endT - n.endT) < 1e-4)
        return [
          ...r.prefix,
          {
            startT: r.overview[0].startT,
            endT: r.overview[o].endT,
            fromCam: r.prefix[i].toCam,
            toCam: r.prefix[i].toCam,
            easing: r.overview[0].easing,
            interp: yo,
            intent: Va
          }
        ];
    }
    return e;
  }
  return 0 < r.overview.length && r.prefix.length - 1 | 0, e;
}, X_ = (t) => (n) => (e) => {
  const r = tm([])(e), o = r.overview.length - 1 | 0;
  if (o >= 0 && o < r.overview.length) {
    if (0 < r.overview.length) {
      const i = r.prefix.length - 1 | 0;
      if (i >= 0 && i < r.prefix.length && (() => {
        const s = r.overview[o].endT;
        return r.prefix[i].intent === "ActionFocus" && (() => {
          const u = r.overview.length - 1 | 0;
          return En((a) => a.direction === "DiveIn" && Ta(a.parentPath)(t.path) && sr(a.startT - s) < 1e-4, n) && (u >= 0 && u < r.overview.length && 0 < r.overview.length ? r.overview[u].endT - r.overview[0].startT <= 1.0001 : !0);
        })();
      })())
        return [
          ...r.prefix,
          {
            startT: r.overview[0].startT,
            endT: r.overview[o].endT,
            fromCam: r.prefix[i].toCam,
            toCam: r.prefix[i].toCam,
            easing: r.overview[0].easing,
            interp: yo,
            intent: Va
          }
        ];
    }
    return e;
  }
  return e;
}, VS = (t) => (n) => {
  const e = n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y ? (n.startT + n.endT) / 2 : n.endT + 1e-4, r = bt((o) => o.target.tag === "TokenWindow" ? T(
    "Just",
    (() => {
      const i = Vp(o.target._2)(t.layout.edges), s = jp(o.target._7)(o.target._8)((e - o.startT) / se(1e-4)(o.endT - o.startT)), u = (() => {
        if (i.tag === "Just")
          return jo((() => {
            if (o.target._3 === "Forward")
              return i._1;
            if (o.target._3 === "Backward")
              return fn(i._1);
            f();
          })())(s);
        if (i.tag === "Nothing")
          return v;
        f();
      })();
      if (u.tag === "Just")
        return { x: u._1.x, y: u._1.y, w: 0, h: 0 };
      if (u.tag === "Nothing")
        return yd(t.layout)(t.edgeEndpoints)(o.target._2);
      f();
    })()
  ) : o.target.tag === "FillWindow" ? T(
    "Just",
    O0(t.layout)(t.edgeEndpoints)(Zt(
      "Node",
      1,
      1,
      o.target._2,
      void 0,
      G,
      G
    ))
  ) : v)(ht((o) => o.startT <= e && e < o.endT, t.windows));
  return r.length === 0 ? v : T(
    "Just",
    (() => {
      const o = Zr(r);
      return { x: o.x * t.placement.scale + t.placement.tx, y: o.y * t.placement.scale + t.placement.ty, w: o.w * t.placement.scale, h: o.h * t.placement.scale };
    })()
  );
}, jS = (t) => (n) => {
  const e = zS(t)(n.endT + 1e-4);
  return e.tag === "Just" ? T(
    "Just",
    { x: e._1.x * t.placement.scale + t.placement.tx, y: e._1.y * t.placement.scale + t.placement.ty, w: e._1.w * t.placement.scale, h: e._1.h * t.placement.scale }
  ) : v;
}, sm = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = o(i.fromCam), u = o(i.toCam), a = VS(r)(i), c = jS(r)(i);
  return s.zoom === u.zoom && s.center.x === u.center.x && s.center.y === u.center.y ? {
    ...i,
    fromCam: rf(t)(n)(e)(r)(c)(a)(s),
    toCam: rf(t)(n)(e)(r)(c)(a)(u)
  } : { ...i, fromCam: s, toCam: rf(t)(n)(e)(r)(c)(a)(u) };
}, um = (t) => (n) => (e) => (r) => (o) => (i) => i.intent === "ActionFocus" ? sm(t)(n)(e)(r)(ef(t)(n)(e)(r)(o))(i) : {
  ...i,
  fromCam: ef(t)(n)(e)(r)(o)(i.fromCam),
  toCam: ef(t)(n)(e)(r)(o)(i.toCam)
}, am = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = en((u) => u.intent === "ActionFocus" && u.startT >= r.startT - 1e-4)(i);
  if (s.tag === "Just") {
    const u = um(t)(n)(e)(r)(o)(s._1).toCam;
    return { ...o, center: u.center, zoom: u.zoom < o.zoom ? u.zoom : o.zoom };
  }
  if (s.tag === "Nothing")
    return o;
  f();
}, ZS = (t) => (n) => (e) => (r) => (o) => am(t)(n)(e)(r)(om(t)(n)(e)(r))(o), t5 = (t) => (n) => (e) => (r) => (o) => o.intent === "ActionFocus" ? sm(t)(n)(e)(r)(mS)(o) : o, Na = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = em(t)(n)(e)(r)(o)(i);
  if (i.placement.scale === 1 && i.placement.tx === 0 && i.placement.ty === 0)
    return X_(i)(o.dives)(q_(W_(B(t5(t)(n)(e)(i))(s))));
  const u = om(t)(n)(e)(i), a = am(t)(n)(e)(i)(u)(s);
  return s.length === 0 ? [
    {
      startT: i.startT,
      endT: i.endT,
      fromCam: a,
      toCam: a,
      easing: q0,
      interp: yo,
      intent: Td
    }
  ] : KS()(i)(qS(a)(i)(X_(i)(o.dives)(q_(W_(XS(a)(B(um(t)(n)(e)(i)(u))(s)))))));
}, n5 = (t) => (n) => (e) => (r) => (o) => It((i) => (s) => it.compare(i.startT)(s.startT))(wt(o.segments)(Na(t)(n)(e)(r)(o))), e5 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  if (i.direction === "DiveIn")
    return qi(t)(e)(Na(t)(n)(e)(r)(o)(s))(i.startT - 1e-4).camera;
  if (i.direction === "DiveOut")
    return qi(t)(e)(Na(t)(n)(e)(r)(o)(s))(i.endT + 1e-4).camera;
  f();
}, r5 = (t) => (n) => (e) => (r) => (o) => bt((i) => {
  const s = yS(o)(i.parentPath)(i.startT)(i.endT);
  if (s.tag === "Just") {
    const u = i.childPath, a = en((c) => Ta(c.path)(u))(o.segments);
    if (a.tag === "Just") {
      const c = Na(t)(n)(e)(r)(o)(a._1), l = ZS(t)(n)(e)(a._1)(em(t)(n)(e)(r)(o)(a._1)), _ = e5(t)(n)(e)(r)(o)(i)(s._1), d = (() => {
        if (i.direction === "DiveIn")
          return l;
        if (i.direction === "DiveOut")
          return qi(t)(e)(c)(i.startT - 1e-4).camera;
        f();
      })();
      if (i.direction === "DiveIn")
        return T(
          "Just",
          {
            startT: i.startT,
            endT: i.endT,
            fromCam: _,
            toCam: d,
            easing: Zo,
            interp: xg,
            intent: vg
          }
        );
      if (i.direction === "DiveOut")
        return T(
          "Just",
          {
            startT: i.startT,
            endT: i.endT,
            fromCam: d,
            toCam: _,
            easing: Zo,
            interp: xg,
            intent: vg
          }
        );
      f();
    }
    if (a.tag === "Nothing")
      return v;
    f();
  }
  if (s.tag === "Nothing")
    return v;
  f();
})(o.dives), cm = (t) => (n) => (e) => (r) => (o) => [
  ...r5(t)(n)(e)(r)(o),
  ...n5(t)(n)(e)(r)(o)
], lo = (t, n) => ({ tag: t, _1: n }), _c = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Be = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, fm = /* @__PURE__ */ pn(F)(Yt), Y_ = (t) => (e) => {
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
}, lm = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, gm = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, M_ = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, pi = /* @__PURE__ */ (() => {
  const t = he.unfoldr((n) => {
    if (n.tag === "Nil")
      return v;
    if (n.tag === "Cons")
      return T("Just", b(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, kt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Y);
  })());
})(), o5 = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(G), Zf = (t) => (e) => {
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
}, _m = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, i5 = (t) => (n) => {
  const e = st.compare(t)(n);
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
}, s5 = /* @__PURE__ */ lo("NoKeyframes"), u5 = (t) => lo("DuplicateEventId", t), a5 = (t) => lo("UnknownEvent", t), dm = (t) => (n) => ({
  ...n,
  cameraSpans: cm(n.cameraConfig)(t)(n.layout)(n.keyframes)({
    endT: n.totalDuration,
    spans: n.spans,
    windows: n.windows,
    segments: n.segments,
    dives: n.dives
  })
}), c5 = (t) => (n) => (e) => (r) => {
  const o = _c(r.edge)(n.edges), i = (() => {
    if (o.tag === "Nothing")
      return 0;
    if (o.tag === "Just")
      return Ma(o._1);
    f();
  })(), s = Be(t.minTokenDuration)(Be(V(w((u) => (a) => u + is(a).length | 0)(0)(r.labels)) * t.tokenReadSecPerChar)(t.tokenSpeed <= 0 ? 0 : i / t.tokenSpeed)) + e.pre + e.post;
  return { duration: s, holdPre: s <= 0 ? 0 : e.pre / s, holdPost: s <= 0 ? 0 : e.post / s };
}, f5 = /* @__PURE__ */ Da((t) => {
  const n = Jo(`
`)(t);
  return n.length === 0 ? [""] : n;
}), l5 = (t) => (n) => fm(bt((e) => {
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
              return En(
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
              return En(
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
})(n)), g5 = (t) => {
  if (t.event.kind.tag === "SendToken")
    return T(
      "Just",
      {
        startT: t.startT,
        endT: t.endT,
        target: Ni(
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
    return T(
      "Just",
      { startT: t.startT, endT: t.endT, target: Ni("FillWindow", t.event.id, t.event.kind._1.node, t.event.kind._1.labels) }
    );
  f();
}, _5 = (t) => bt((() => {
  const n = t.path;
  return (e) => e.target.tag === "TokenWindow" ? T(
    "Just",
    { path: n, eventId: e.target._1, window: e, from: e.target._4, to: e.target._5, labels: e.target._6, holdPre: e.target._7, holdPost: e.target._8 }
  ) : v;
})())(t.windows), d5 = (t) => (n) => (e) => {
  const r = _c(e)(t);
  if (r.tag === "Nothing")
    return Ng;
  if (r.tag === "Just") {
    const o = Y_(r._1.target)(n);
    return Y_(r._1.source)(n) ? o ? Ux : Mx : Ng;
  }
  f();
}, hm = /* @__PURE__ */ B(ro), h5 = { pre: 0, post: 0 }, p5 = (t) => (n) => (e) => (r) => (o) => {
  const i = lm(o.event.id)(e), s = (() => {
    if (i.tag === "Nothing")
      return h5;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = (() => {
    if (o.event.when.tag === "First")
      return 0;
    if (o.event.when.tag === "At")
      return o.event.when._1;
    if (o.event.when.tag === "After") {
      const c = o.event.when._1, l = en((_) => _.event.id === c)(r);
      if (l.tag === "Nothing")
        return 0;
      if (l.tag === "Just")
        return l._1.endT;
      f();
    }
    if (o.event.when.tag === "With") {
      const c = o.event.when._1, l = en((_) => _.event.id === c)(r);
      if (l.tag === "Nothing")
        return 0;
      if (l.tag === "Just")
        return l._1.startT;
    }
    f();
  })(), a = (() => {
    if (o.event.kind.tag === "SendToken")
      return c5(t)(n)(s)(o.event.kind._1);
    if (o.event.kind.tag === "FillNodeWithoutTransition")
      return { duration: t.plop, holdPre: 0, holdPost: 0 };
    f();
  })();
  return St(r)({ startT: u, endT: u + a.duration, event: o.event, holdPre: a.holdPre, holdPost: a.holdPost });
}, pm = (t) => (n) => (e) => w(p5(t)(n)(l5(t)(e)))([])(Xt((r) => (o) => ({ event: o }))(e)), m5 = (t) => (n) => {
  const e = gm(n)(t.interiors);
  if (e.tag === "Nothing")
    return t;
  if (e.tag === "Just")
    return e._1;
  f();
}, $5 = (t) => w((n) => (e) => {
  const r = qe(n);
  if (r.tag === "Nothing")
    return [e];
  if (r.tag === "Just")
    return e.startT <= r._1.last.endT + 1e-4 ? St(r._1.init)({ ...r._1.last, endT: Be(r._1.last.endT)(e.endT) }) : St(n)(e);
  f();
})([])(It((n) => (e) => it.compare(n.startT)(e.startT))(t)), U_ = (t) => (n) => (e) => {
  if (n.tag === "Just" && n._1 > e.endT + 1e-4) {
    const r = Be(0)(e.endT - e.startT), o = Be(t.startT)(n._1 - r);
    return { ...e, startT: o, endT: o + r };
  }
  return e;
}, y5 = (t) => (n) => {
  const e = It(it.compare)(bt((r) => r.target.tag === "TokenWindow" ? r.target._4 === n || r.target._5 === n ? T("Just", r.startT) : v : r.target.tag === "FillWindow" && r.target._2 === n ? T("Just", r.startT) : v)(t));
  return 0 < e.length ? T("Just", e[0]) : v;
}, x5 = (t) => (n) => {
  const e = It(it.compare)(bt((r) => r.target.tag === "TokenWindow" && r.target._2 === n ? T("Just", r.startT) : v)(t));
  return 0 < e.length ? T("Just", e[0]) : v;
}, v5 = (t) => (n) => n.target.tag === "NodeWindow" ? n.target._2 === "PlopIn" ? U_(t)(y5(t.windows)(n.target._1))(n) : n : n.target.tag === "EdgeWindow" && n.target._2.tag === "Extend" ? U_(t)(x5(t.windows)(n.target._1))(n) : n, T5 = (t) => ({ ...t, windows: It((n) => (e) => it.compare(n.startT)(e.startT))(B(v5(t))(t.windows)) }), w5 = (t) => {
  if (t.when.tag === "First")
    return [];
  if (t.when.tag === "At")
    return [];
  if (t.when.tag === "After")
    return [t.when._1];
  if (t.when.tag === "With")
    return [t.when._1];
  f();
}, K_ = { id: "", nodes: G, edges: G, kind: Zs }, N5 = (t) => (n) => Yy((() => {
  const e = M_(n.from)(t);
  if (e.tag === "Nothing")
    return K_;
  if (e.tag === "Just")
    return e._1;
  f();
})())((() => {
  const e = M_(n.to)(t);
  if (e.tag === "Nothing")
    return K_;
  if (e.tag === "Just")
    return e._1;
  f();
})()), J5 = (t) => (n) => {
  const e = gm(n)(t.interiors);
  if (e.tag === "Nothing")
    return { layout: t.layout, interiors: G };
  if (e.tag === "Just")
    return e._1;
  f();
}, mm = { id: "", index: -1, kind: "", name: "", time: 0, endTime: 0, path: [], tokenIndex: -1, lineIndex: -1, text: "", from: "", to: "" }, C5 = (t) => (n) => n.scene.tag === "StepScene" ? T(
  "Just",
  { ...mm, id: "step:" + n.scene._1, kind: "step", name: n.scene._1, time: n.startT, endTime: n.startT, path: hm(t) }
) : v, b5 = (t) => bt(C5(t.path))(t.spans), of = (t) => (n) => (e) => (r) => {
  const o = _c(r)(e.edges);
  if (o.tag === "Just")
    return t <= 0 ? n : Be(n)(Ma(o._1) / t);
  if (o.tag === "Nothing")
    return n;
  f();
}, $m = (t) => (n) => (e) => (r) => (o) => {
  const i = t.plop, s = N5(e)(o), u = B((g) => ({
    startT: 0,
    endT: 0 + of(t.edgeSpeed)(t.minEdgeDuration)(n)(g),
    target: Ni(
      "EdgeWindow",
      g,
      ju("Extend", wf)
    )
  }))(pi(s.entering.edges)), a = B((g) => ({ startT: 0, endT: i, target: Ni("NodeWindow", g, Tf) }))(pi(s.entering.nodes)), c = w(Be)(0)(B((g) => of(t.edgeSpeed)(t.minEdgeDuration)(n)(g))(pi(s.leaving.edges))), l = (g) => En(
    (p) => {
      const m = _c(p)(r);
      if (m.tag === "Just")
        return m._1.source === g || m._1.target === g;
      if (m.tag === "Nothing")
        return !1;
      f();
    },
    pi(s.leaving.edges)
  ) ? c : 0, _ = B((g) => ({
    startT: l(g),
    endT: l(g) + t.plop,
    target: Ni("NodeWindow", g, Wx)
  }))(pi(s.leaving.nodes)), d = B((g) => ({
    startT: 0,
    endT: of(t.edgeSpeed)(t.minEdgeDuration)(n)(g),
    target: Ni(
      "EdgeWindow",
      g,
      ju("Retract", d5(r)(s.leaving.nodes)(g))
    )
  }))(pi(s.leaving.edges));
  return {
    duration: (() => {
      const g = It(it.compare)([
        ...B((m) => m.endT)(d),
        ...B((m) => m.endT)(_),
        ...B((m) => m.endT)(a),
        ...B((m) => m.endT)(u)
      ]), p = g.length - 1 | 0;
      return p >= 0 && p < g.length ? g[p] + t.gap : t.gap;
    })(),
    windows: [...d, ..._, ...a, ...u]
  };
}, k5 = (t) => (n) => (e) => (r) => (o) => (i) => B((() => {
  const s = o.startT;
  return (u) => ({ ...u, startT: u.startT + s, endT: u.endT + s });
})())($m(t)(n)(e)(r)(i).windows), S5 = (t) => bt((n) => jt(Ii, n).length > 1 ? T(
  "Just",
  (() => {
    const e = Ht(
      (r) => v,
      (r) => (o) => T("Just", { head: r, tail: o }),
      jt(Ii, n)
    );
    if (e.tag === "Just")
      return e._1.head;
    if (e.tag === "Nothing")
      return "";
    f();
  })()
) : v)(w2(si)(It(F.compare)(t))), L5 = (t) => {
  const n = B((r) => r.id)(t), e = o5(n);
  return [
    ...B(u5)(S5(n)),
    ...B(a5)(ht((r) => !Zf(r)(e), wt(t)(w5)))
  ];
}, E5 = (t) => {
  const n = fm(B((r) => b(
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
    if (Zf(i)(o))
      return [lo("ScheduleCycle", [...jt(be.foldr, o), i])];
    if (Zf(i)(r))
      return [];
    const s = lm(i)(n);
    if (s.tag === "Nothing")
      return [];
    if (s.tag === "Just")
      return wt(s._1)(e(tt(F)(i)()(r))(tt(F)(i)()(o)));
    f();
  };
  return wt(t)((r) => e(G)(G)(r.id));
}, El = {
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
  nodeEasing: rx,
  edgeEasing: Zo,
  tokenEasing: q0,
  diveDur: 1.2,
  retreatDur: 1.2
}, P5 = (t) => (n) => (e) => (r) => B((() => {
  const o = e.startT;
  return (i) => ({ ...i, startT: i.startT + o, endT: i.endT + o });
})())(bt(g5)(pm(t)(n)(r.events))), A5 = (t) => (n) => (e) => (r) => (o) => {
  if (o.scene.tag === "Structural")
    return k5(t)(n)(e)(r)(o)(o.scene._1);
  if (o.scene.tag === "Hold")
    return [];
  if (o.scene.tag === "DataFlow")
    return P5(t)(n)(o)(o.scene._1);
  if (o.scene.tag === "EnterNode")
    return [];
  if (o.scene.tag === "ExitNode")
    return [];
  if (o.scene.tag === "StepScene")
    return [];
  f();
}, R5 = (t) => (n) => (e) => {
  const r = pm(t)(n)(e.events);
  return r.length === 0 ? t.gap : w(Be)(0)(B((o) => o.endT)(r)) + t.gap;
}, F5 = (t) => (n) => (e) => (r) => (o) => {
  if (o.tag === "Structural")
    return $m(t)(n)(e)(r)(o._1).duration;
  if (o.tag === "Hold")
    return t.stillHold;
  if (o.tag === "DataFlow")
    return R5(t)(n)(o._1);
  if (o.tag === "EnterNode" || o.tag === "ExitNode" || o.tag === "StepScene")
    return 0;
  f();
}, ym = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Fy(n)(r), u = e.layout, a = md(B((m) => b(m.id, m))(o.keyframes)), c = 0 < o.keyframes.length ? T("Just", o.keyframes[0]) : v, l = (() => {
    if (c.tag === "Just")
      return c._1.id;
    if (c.tag === "Nothing")
      return "";
    f();
  })(), _ = nx(o), d = (m) => ({
    segments: m.runSpans.length === 0 ? m.segments : St(m.segments)({
      startT: m.runStart,
      endT: m.t,
      path: r,
      layout: u,
      placement: s,
      windows: m.runWindows,
      spans: m.runSpans,
      keyframes: a,
      initialKeyframe: l,
      edgeEndpoints: _
    }),
    spans: m.spans,
    windows: m.windows,
    dives: m.dives
  }), g = w((m) => (h) => {
    if (h.tag === "EnterNode") {
      const J = d(m), N = m.t + t.diveDur, C = St(r)(h._1), S = ym(t)(n)(J5(e)(h._1))(C)(m5(o)(h._1))(N), P = S.endT + t.retreatDur;
      return {
        ...m,
        t: P,
        runStart: P,
        runSpans: [],
        runWindows: [],
        segments: [...J.segments, ...S.segments],
        spans: [...J.spans, ...S.spans],
        windows: [...J.windows, ...S.windows],
        dives: [
          ...J.dives,
          { startT: m.t, endT: N, node: h._1, parentPath: r, childPath: C, direction: qx },
          ...S.dives,
          { startT: S.endT, endT: P, node: h._1, parentPath: r, childPath: C, direction: Xx }
        ]
      };
    }
    if (h.tag === "ExitNode")
      return m;
    const $ = m.t + F5(t)(u)(a)(_)(h), x = { startT: m.t, endT: $, scene: h }, y = A5(t)(u)(a)(_)(x);
    return {
      ...m,
      t: $,
      runSpans: St(m.runSpans)(x),
      runWindows: [...m.runWindows, ...y],
      spans: St(m.spans)(x),
      windows: [...m.windows, ...y]
    };
  })({ t: i, runStart: i, runSpans: [], runWindows: [], segments: [], spans: [], windows: [], dives: [] })(o.scenes), p = d(g);
  return {
    endT: g.t,
    spans: p.spans,
    windows: It((m) => (h) => it.compare(m.startT)(h.startT))(p.windows),
    segments: p.segments,
    dives: p.dives
  };
}, G5 = (t) => (n) => {
  const e = it.compare(t.time)(n.time);
  return e === "EQ" ? F.compare(t.id)(n.id) : e;
}, ze = (t) => (n) => n - w((e) => (r) => e + Be(0)(_m(n)(r.endT) - r.startT))(0)(t), I5 = (t) => (n) => {
  const e = Be(t.startT)(n.startT), r = _m(t.endT)(n.endT);
  return r > e + 1e-4 ? T("Just", { startT: e, endT: r }) : v;
}, B5 = (t) => (n) => {
  if (n.scene.tag === "Structural") {
    const e = w((r) => (o) => ({ cursor: Be(r.cursor)(o.endT), cuts: o.startT > r.cursor + 1e-4 ? St(r.cuts)({ startT: r.cursor, endT: o.startT }) : r.cuts }))({ cursor: n.startT, cuts: [] })(It((r) => (o) => it.compare(r.startT)(o.startT))(bt(I5(n))(t)));
    return n.endT > e.cursor + 1e-4 ? St(e.cuts)({ startT: e.cursor, endT: n.endT }) : e.cuts;
  }
  return [];
}, D5 = (t) => {
  const n = $5(wt(t.spans)(B5(t.windows)));
  return n.length === 0 ? t : {
    ...t,
    endT: ze(n)(t.endT),
    spans: B((e) => ({ ...e, startT: ze(n)(e.startT), endT: ze(n)(e.endT) }))(t.spans),
    windows: It((e) => (r) => it.compare(e.startT)(r.startT))(B((e) => ({ ...e, startT: ze(n)(e.startT), endT: ze(n)(e.endT) }))(t.windows)),
    segments: B((e) => ({
      ...e,
      startT: ze(n)(e.startT),
      endT: ze(n)(e.endT),
      spans: B((r) => ({ ...r, startT: ze(n)(r.startT), endT: ze(n)(r.endT) }))(e.spans),
      windows: It((r) => (o) => it.compare(r.startT)(o.startT))(B((r) => ({ ...r, startT: ze(n)(r.startT), endT: ze(n)(r.endT) }))(e.windows))
    }))(t.segments),
    dives: B((e) => ({ ...e, startT: ze(n)(e.startT), endT: ze(n)(e.endT) }))(t.dives)
  };
}, z5 = (t) => {
  const n = B(T5)(t.segments);
  return D5({
    ...t,
    segments: n,
    windows: It((e) => (r) => it.compare(e.startT)(r.startT))(wt(n)((e) => e.windows))
  });
}, H5 = (t) => (n) => (e) => {
  const r = Be(0.05)(1 - t - n), o = (a) => {
    if (a <= 0)
      return 0;
    if (a >= 1)
      return 1;
    const c = t + a * r;
    return c < 0 ? 0 : c > 1 ? 1 : c;
  }, i = f5(e), s = B((a) => V(i5(1)(is(a).length)))(i), u = Be(1)(w(gr)(0)(s));
  return Xt((a) => (c) => ({
    lineIndex: a,
    text: c,
    start: o(w(gr)(0)(a < 1 ? [] : At(0, a, s)) / u),
    end: o(a >= 0 && a < s.length ? (w(gr)(0)(a < 1 ? [] : At(0, a, s)) + s[a]) / u : (w(gr)(0)(a < 1 ? [] : At(0, a, s)) + 1) / u)
  }))(i);
}, Q5 = (t) => {
  const n = Be(0)(t.window.endT - t.window.startT);
  return B((e) => ({
    ...mm,
    id: "token:" + t.eventId + ":line:" + an(e.lineIndex),
    kind: "tokenLine",
    time: t.window.startT + e.start * n,
    endTime: t.window.startT + e.end * n,
    path: hm(t.path),
    tokenIndex: t.tokenIndex,
    lineIndex: e.lineIndex,
    text: e.text,
    from: t.from,
    to: t.to
  }))(H5(t.holdPre)(t.holdPost)(t.labels));
}, O5 = (t) => wt(Xt((n) => (e) => ({ path: e.path, eventId: e.eventId, window: e.window, from: e.from, to: e.to, labels: e.labels, holdPre: e.holdPre, holdPost: e.holdPost, tokenIndex: n }))(wt(t)(_5)))(Q5), W5 = (t) => Xt((n) => (e) => ({ ...e, index: n }))(It(G5)([
  ...wt(t.segments)(b5),
  ...O5(t.segments)
])), q5 = (t) => (n) => {
  if (n.tag === "Structural")
    return bt((e) => e)([
      Pu(n._1.from)(t) ? v : T("Just", lo("UnknownKeyframe", n._1.from)),
      Pu(n._1.to)(t) ? v : T("Just", lo("UnknownKeyframe", n._1.to))
    ]);
  if (n.tag === "Hold")
    return bt((e) => e)([Pu(n._1)(t) ? v : T("Just", lo("UnknownKeyframe", n._1))]);
  if (n.tag === "DataFlow")
    return [
      ...bt((e) => e)([Pu(n._1.keyframe)(t) ? v : T("Just", lo("UnknownKeyframe", n._1.keyframe))]),
      ...L5(n._1.events),
      ...E5(n._1.events)
    ];
  if (n.tag === "EnterNode")
    return [];
  if (n.tag === "ExitNode")
    return [];
  if (n.tag === "StepScene")
    return [];
  f();
}, X5 = (t) => (n) => {
  const e = wt(n)(q5(t));
  return e.length === 0 ? Et("Right", void 0) : Et("Left", e);
}, Pl = (t) => (n) => (e) => (r) => {
  if (0 < e.keyframes.length) {
    const o = e.keyframes[0], i = md(B((u) => b(u.id, u))(e.keyframes)), s = X5(i)(e.scenes);
    return (() => {
      if (s.tag === "Left") {
        const u = s._1;
        return (a) => Et("Left", u);
      }
      if (s.tag === "Right") {
        const u = s._1;
        return (a) => a(u);
      }
      f();
    })()(() => {
      const u = z5(ym(n)(r)(r)([])(e)(0));
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
          cameraSpans: cm(t)(xx)(r.layout)(i)(u),
          cameraConfig: t,
          levelTree: r,
          segments: u.segments,
          dives: u.dives,
          cues: W5(u),
          seed: e.seed
        }
      );
    });
  }
  return Et("Left", [s5]);
}, li = (t) => ({ bind: (n) => (e) => (r) => t.Bind1().bind(n(r))((o) => e(o._1)(o._2)), Apply0: () => xm(t) }), xm = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = { map: (r) => (o) => (i) => n.map((s) => b(r(s._1), s._2))(o(i)) };
  return {
    apply: (() => {
      const r = li(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => gi(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, gi = (t) => ({ pure: (n) => (e) => t.Applicative0().pure(b(n, e)), Apply0: () => xm(t) }), vm = (t) => {
  const n = { Applicative0: () => gi(t), Bind1: () => li(t) };
  return { state: (e) => (r) => t.Applicative0().pure(e(r)), Monad0: () => n };
}, Uo = (t, n) => ({ tag: t, _1: n }), Lr = (t, n) => ({ tag: t, _1: n }), dc = (t) => t, $r = (t, n) => ({ tag: t, _1: n }), Al = (t) => t, Sn = /* @__PURE__ */ vm(Fe), Y5 = (t) => (e) => {
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
}, M5 = /* @__PURE__ */ pn(F)(Yt), Rl = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, U5 = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(G), Ut = /* @__PURE__ */ li(Fe), te = Sn.state((t) => b(t, t)), _n = /* @__PURE__ */ gi(Fe), Tm = (t) => (e) => {
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
}, wm = /* @__PURE__ */ Gr(_n), Fl = /* @__PURE__ */ wm(Yt), K5 = (t) => (e) => {
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
}, br = (t) => (e) => {
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
}, V5 = /* @__PURE__ */ (() => {
  const t = he.unfoldr((n) => {
    if (n.tag === "Nil")
      return v;
    if (n.tag === "Cons")
      return T("Just", b(n._1, n._2));
    f();
  });
  return (n) => t((() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, kt("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Y);
  })());
})(), dr = (t) => (e) => {
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
}, j5 = (t) => (e) => {
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
}, hc = (t) => (n) => (e) => w((r) => (o) => t.Bind1().bind(r)((i) => n(i)(o)))(t.Applicative0().pure(e)), Z5 = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(G), tL = /* @__PURE__ */ (() => {
  const n = ((e) => (r) => {
    let o = e, i = r, s = !0, u;
    for (; s; ) {
      const a = o, c = i;
      if (c.tag === "Nil") {
        s = !1, u = a;
        continue;
      }
      if (c.tag === "Cons") {
        o = tt(F)(c._1)()(a), i = c._2;
        continue;
      }
      f();
    }
    return u;
  })(G);
  return (e) => n((() => {
    const r = (o, i) => {
      if (o.tag === "Leaf")
        return i;
      if (o.tag === "Node")
        return r(o._5, kt("Cons", o._3, r(o._6, i)));
      f();
    };
    return r(e, Y);
  })());
})(), nL = /* @__PURE__ */ wm(Ga), eL = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(G), rL = /* @__PURE__ */ Al("AnimatedSurface"), oL = /* @__PURE__ */ Al("StillSurface"), iL = /* @__PURE__ */ Al("SequenceSurface"), sL = /* @__PURE__ */ $r("Exit"), Ja = /* @__PURE__ */ dc("AnimatedKeyframe"), Gl = /* @__PURE__ */ dc("Still"), uL = /* @__PURE__ */ dc("Title"), Nm = /* @__PURE__ */ dc("StepMarker"), aL = (t) => Lr("Par", t), cL = (t) => Lr("Seq", t), fL = (t) => Lr("GroupSeq", t), Jm = (t) => Uo("StepDive", t), lL = { line: 0, column: 0, endLine: 0, endColumn: 0 }, gL = (t) => (n) => (e) => {
  const r = Ko(qt, v, (o) => o._1 === t, e);
  if (r.tag === "Just") {
    const o = mo(qt, v, r._1, b(t, n), e);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return o._1;
    f();
  }
  if (r.tag === "Nothing")
    return St(e)(b(t, n));
  f();
}, _L = (t) => (n) => B((e) => e._1 === t ? b(e._1, { ...e._2, label: T("Just", n) }) : b(e._1, e._2)), Cm = (t) => {
  const n = t.compare;
  return (e) => w((r) => (o) => Yn(n, Xn, r, e(o)))(G);
}, t0 = /* @__PURE__ */ Cm(F), n0 = /* @__PURE__ */ Cm(F), dL = (t) => {
  const n = t.span;
  return Sn.state((e) => b(void 0, { ...e, currentSpan: n }));
}, sf = (t) => (n) => ({ structural: [...t.structural, ...n.structural], flow: t.flow || n.flow, dives: [...t.dives, ...n.dives] }), hL = (t) => (n) => n.kind === "Animated" || Y5(n.id)(t), pc = {
  graphNodes: [],
  graphEdges: G,
  currNodes: G,
  currEdges: G,
  keyframes: [],
  scenes: [],
  kfCounter: 0,
  eventCounter: 0,
  currentKf: v,
  currentSpan: lL,
  error: v,
  enterStack: [],
  interiorOf: G,
  stepNames: G
}, V_ = (t) => (n) => (e) => {
  const r = jt(be.foldr, e);
  return Br(", ")(B(n)(At(0, 6, r))) + (r.length > 6 ? ", …" : "");
}, pL = (t) => (n) => {
  const e = Rl(n)(M5(B((r) => b(r.id, r))(t.graph.edges)));
  if (e.tag === "Just")
    return (() => {
      const r = wo("conn:")(e._1.id);
      if (r.tag === "Just")
        return !1;
      if (r.tag === "Nothing")
        return !0;
      f();
    })() ? e._1.from.node + " -> " + e._1.to.node : e._1.from.node + " -- " + e._1.to.node;
  if (e.tag === "Nothing")
    return n;
  f();
}, mL = (t) => (n) => (e) => {
  const r = V_()(ro)(n), o = V_()(pL(t))(e);
  return (r === "" ? "animated flow contains unused topology: every animated node or edge must be visited by a token or fill." : "animated flow contains unused topology: every animated node or edge must be visited by a token or fill. Unused nodes: " + r + ".") + (o === "" ? "" : " Unused edges: " + o + ".") + " Move context-only topology into a `still`/`title`, remove it, or add token/fill events.";
}, $L = (t) => {
  if (t.kind.tag === "SendToken")
    return U5([t.kind._1.from, t.kind._1.to]);
  if (t.kind.tag === "FillNodeWithoutTransition")
    return Zt("Node", 1, 1, t.kind._1.node, void 0, G, G);
  f();
}, yL = (t) => t0($L)(t.events), xL = (t) => {
  if (t.kind.tag === "SendToken")
    return Zt("Node", 1, 1, t.kind._1.edge, void 0, G, G);
  if (t.kind.tag === "FillNodeWithoutTransition")
    return G;
  f();
}, vL = (t) => n0(xL)(t.events), pr = (t) => Sn.state((n) => b(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return {
        ...n,
        error: T("Just", { msg: t, line: n.currentSpan.line, column: n.currentSpan.column, endLine: n.currentSpan.endLine, endColumn: n.currentSpan.endColumn })
      };
    f();
  })()
)), TL = /* @__PURE__ */ Fl((t) => Ut.bind(te)((n) => {
  if (n.error.tag === "Just")
    return _n.pure();
  if (n.error.tag === "Nothing")
    return Tm(t.node)(n.interiorOf) ? pr("node " + t.node + " has more than one `inside` block") : Sn.state((e) => b(void 0, { ...e, interiorOf: tt(F)(t.node)(t.doc)(e.interiorOf) }));
  f();
})), wL = (t) => Ut.bind(te)((n) => {
  const e = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + an(n.kfCounter);
  if (En((o) => o.id === e, n.keyframes))
    return pr("duplicate frame name " + e);
  const r = {
    ...n,
    keyframes: St(n.keyframes)({ id: e, nodes: n.currNodes, edges: n.currEdges, kind: Zs }),
    kfCounter: n.kfCounter + 1 | 0,
    currentKf: T("Just", e)
  };
  return Sn.state((o) => b(void 0, r));
}), Te = (t) => (n) => Ut.bind(Sn.state((e) => b(void 0, { ...e, currentSpan: t })))(() => pr(n)), j_ = (t) => (n) => Ut.bind(te)((e) => K5(n)(e.stepNames) ? Te(t)("duplicate step name " + n) : Sn.state((r) => b(
  void 0,
  {
    ...r,
    scenes: St(r.scenes)(os("StepScene", n)),
    stepNames: tt(F)(n)()(r.stepNames)
  }
))), NL = (t) => {
  if (t.ops.tag === "Leaf") {
    const n = t.ops._1;
    return Ut.bind((() => {
      const e = n.span;
      return Sn.state((r) => b(void 0, { ...r, currentSpan: e }));
    })())(() => n.op.tag === "Step" ? j_(n.span)(n.op._1.name) : pr("step marker frame did not contain a step"));
  }
  if (t.ops.tag === "Seq" && t.ops._1.length === 1 && t.ops._1[0].tag === "Leaf") {
    const n = t.ops._1[0]._1;
    return Ut.bind((() => {
      const e = n.span;
      return Sn.state((r) => b(void 0, { ...r, currentSpan: e }));
    })())(() => n.op.tag === "Step" ? j_(n.span)(n.op._1.name) : pr("step marker frame did not contain a step"));
  }
  return pr("step marker frame did not contain a step");
}, JL = (t) => Ut.bind((() => {
  const n = t.span;
  return Sn.state((e) => b(void 0, { ...e, currentSpan: n }));
})())(() => Ut.bind(te)((n) => {
  if (n.error.tag === "Just")
    return _n.pure();
  if (n.error.tag === "Nothing") {
    if (t.op.tag === "Enter") {
      if (!br(t.op._1.id)(n.currNodes))
        return Te(0 < t.operands.length ? t.operands[0] : t.span)("cannot dive into node " + t.op._1.id + ": does not exist");
      if (!Tm(t.op._1.id)(n.interiorOf))
        return Te(0 < t.operands.length ? t.operands[0] : t.span)("cannot enter node " + t.op._1.id + ": it has no `inside` block. Add the block at the document level, alongside the animated statements:\n\ninside " + t.op._1.id + ` {
  + detail: Detail
}`);
      const e = t.op._1;
      return Sn.state((r) => b(
        void 0,
        { ...r, enterStack: St(r.enterStack)(e.id), scenes: St(r.scenes)(os("EnterNode", e.id)) }
      ));
    }
    if (t.op.tag === "Exit") {
      const e = qe(n.enterStack);
      if (e.tag === "Nothing")
        return pr("`out` without a matching `into`");
      if (e.tag === "Just") {
        const r = e._1.init;
        return Sn.state((o) => b(void 0, { ...o, enterStack: r, scenes: St(o.scenes)(qy) }));
      }
      f();
    }
    return _n.pure();
  }
  f();
})), mi = { structural: [], flow: !1, dives: [] }, CL = Ut.bind(te)((t) => {
  if (t.error.tag === "Just")
    return _n.pure();
  if (t.error.tag === "Nothing") {
    if (t.currentKf.tag === "Just") {
      const n = t.currentKf._1;
      return Sn.state((e) => b(void 0, { ...e, scenes: St(e.scenes)(os("Hold", n)) }));
    }
    if (t.currentKf.tag === "Nothing")
      return _n.pure();
  }
  f();
}), bL = (t) => (n) => Ut.bind(te)((e) => {
  const r = "ev-" + an(e.eventCounter);
  return Ut.bind((() => {
    const o = { ...e, eventCounter: e.eventCounter + 1 | 0 };
    return Sn.state((i) => b(void 0, o));
  })())(() => _n.pure({ events: [{ id: r, kind: n, when: t }], firstId: T("Just", r), lastId: T("Just", r) }));
}), kL = (t) => t.tag === "DataFlow" ? T("Just", t._1) : v, SL = (t) => bt((n) => Rl(n)(t.graphEdges))(jt(Ii, V5(t.currEdges))), LL = (t) => (n) => {
  const e = ht((o) => o.from.node === n.id || o.to.node === n.id, SL(t)), r = hc(Q1)((o) => (i) => {
    const s = i.from + "->" + n.id, u = n.id + "->" + i.to, a = i.from + "->" + i.to, c = "via " + i.from + " " + i.to + ": no edge " + i.from + "→" + n.id;
    if (!dr(s)(t.currEdges))
      return Et("Left", c);
    const l = "via " + i.from + " " + i.to + ": no edge " + n.id + "→" + i.to;
    if (!dr(u)(t.currEdges))
      return Et("Left", l);
    const _ = "via " + i.from + " " + i.to + ": would create " + i.from + "→" + i.to + " but it already exists";
    return dr(a)(t.currEdges) || j5(a)(o.synthesized) ? Et("Left", _) : Et(
      "Right",
      {
        consumed: tt(F)(s)()(tt(F)(u)()(o.consumed)),
        synthesized: tt(F)(a)({
          id: a,
          from: { node: i.from, port: v },
          to: { node: i.to, port: v },
          label: v
        })(o.synthesized)
      }
    );
  })({ consumed: G, synthesized: G })(n.via);
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
    const i = o.consumed, s = ht((u) => !dr(u.id)(i), e);
    return s.length === 0 ? Et(
      "Right",
      {
        nextCurrEdges: Yn(
          F.compare,
          Xn,
          lr(F.compare, t.currEdges, Z5(B((u) => u.id)(e))),
          tL((() => {
            const u = (a) => {
              if (a.tag === "Leaf")
                return G;
              if (a.tag === "Node")
                return Zt("Node", a._1, a._2, a._3, void 0, u(a._5), u(a._6));
              f();
            };
            return u(o.synthesized);
          })())
        ),
        synthesized: o.synthesized
      }
    ) : Et(
      "Left",
      "cannot delete node " + n.id + ": still connected (" + Br(", ")(B((u) => (() => {
        const a = wo("conn:")(u.id);
        if (a.tag === "Just")
          return !1;
        if (a.tag === "Nothing")
          return !0;
        f();
      })() ? u.from.node + "→" + u.to.node : u.from.node + "--" + u.to.node)(s)) + "). Use `- a -> b` or `- a -- b` to drop them, or `via a b` to merge " + n.id + "'s endpoints."
    );
  });
}, bm = (t) => (n) => (e) => {
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
}, zu = (t) => {
  if (t.tag === "Leaf")
    return [t._1];
  if (t.tag === "Par" || t.tag === "Seq" || t.tag === "GroupSeq")
    return wt(t._1)(zu);
  f();
}, EL = (t) => ({
  nodes: B(Ia)(t.graphNodes),
  edges: (() => {
    const n = (e, r) => {
      if (e.tag === "Leaf")
        return r;
      if (e.tag === "Node")
        return n(e._5, kt("Cons", e._4, n(e._6, r)));
      f();
    };
    return jt(Jn.foldr, n(t.graphEdges, Y));
  })(),
  constraints: []
}), ks = (t) => {
  if (t.tag === "Leaf")
    return t._1.op.tag === "AddNode" || t._1.op.tag === "DelNode" || t._1.op.tag === "ModNode" || t._1.op.tag === "AddEdge" || t._1.op.tag === "DelEdge" || t._1.op.tag === "RepointEdge" ? { ...mi, structural: [t._1] } : t._1.op.tag === "Enter" || t._1.op.tag === "Exit" ? { ...mi, dives: [t._1] } : { ...mi, flow: !0 };
  if (t.tag === "Seq" || t.tag === "GroupSeq" || t.tag === "Par")
    return w(sf)(mi)(B(ks)(t._1));
  f();
}, mc = (t) => {
  if (t.tag === "Leaf")
    return t._1.op.tag === "AddNode" || t._1.op.tag === "DelNode" || t._1.op.tag === "ModNode" || t._1.op.tag === "AddEdge" || t._1.op.tag === "DelEdge" || t._1.op.tag === "RepointEdge" ? [Uo("StepStructural", [t._1])] : t._1.op.tag === "Enter" || t._1.op.tag === "Exit" ? [Uo("StepDive", t._1)] : [Uo("StepFlow", t)];
  if (t.tag === "Seq")
    return wt(t._1)(mc);
  if (t.tag === "GroupSeq")
    return AL(t)(t._1);
  if (t.tag === "Par")
    return PL(t)(t._1);
  f();
}, PL = (t) => (n) => {
  const e = ks(t);
  return e.structural.length !== 0 && !e.flow && e.dives.length === 0 ? [Uo("StepStructural", e.structural)] : e.structural.length === 0 && e.flow && e.dives.length === 0 ? [Uo("StepFlow", t)] : e.structural.length === 0 && !e.flow && e.dives.length !== 0 ? B(Jm)(e.dives) : wt(n)(mc);
}, AL = (t) => (n) => {
  const e = ks(t);
  return e.structural.length === 0 && e.flow && e.dives.length === 0 ? [Uo("StepFlow", t)] : e.structural.length === 0 && !e.flow && e.dives.length !== 0 ? B(Jm)(e.dives) : wt(n)(mc);
}, RL = (t) => (n) => Ut.bind(te)((e) => {
  const r = n.from + "->" + n.to, o = n.newFrom + "->" + n.newTo;
  return dr(r)(e.currEdges) ? br(n.newFrom)(e.currNodes) ? br(n.newTo)(e.currNodes) ? r !== o && dr(o)(e.currEdges) ? Te((() => {
    const i = 2 < t.operands.length ? t.operands[2] : t.span, s = 3 < t.operands.length ? t.operands[3] : t.span;
    return { line: i.line, column: i.column, endLine: s.endLine, endColumn: s.endColumn };
  })())("cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": target edge already exists") : Sn.state((i) => b(
    void 0,
    {
      ...i,
      currEdges: tt(F)(o)()(Qi(F)(r)(i.currEdges)),
      graphEdges: tt(F)(o)({
        id: o,
        from: { node: n.newFrom, port: v },
        to: { node: n.newTo, port: v },
        label: v
      })(i.graphEdges)
    }
  )) : Te(3 < t.operands.length ? t.operands[3] : t.span)("cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newTo) : Te(2 < t.operands.length ? t.operands[2] : t.span)("cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newFrom) : Te((() => {
    const i = 0 < t.operands.length ? t.operands[0] : t.span, s = 1 < t.operands.length ? t.operands[1] : t.span;
    return { line: i.line, column: i.column, endLine: s.endLine, endColumn: s.endColumn };
  })())("cannot repoint " + n.from + "→" + n.to + ": edge does not exist");
}), FL = (t) => {
  if (t.op.tag === "AddNode") {
    const n = t.op._1;
    return Ut.bind(te)((e) => br(n.id)(e.currNodes) ? Te(0 < t.operands.length ? t.operands[0] : t.span)("cannot add node " + n.id + ": already exists") : Sn.state((r) => b(
      void 0,
      {
        ...r,
        graphNodes: gL(n.id)({ id: n.id, size: b(1, 1), ports: [], label: T("Just", n.label), shape: n.shape })(r.graphNodes),
        currNodes: tt(F)(n.id)()(r.currNodes)
      }
    )));
  }
  if (t.op.tag === "DelNode") {
    const n = t.op._1;
    return Ut.bind(te)((e) => {
      if (!br(n.id)(e.currNodes))
        return Te(0 < t.operands.length ? t.operands[0] : t.span)("cannot delete node " + n.id + ": does not exist");
      const r = LL(e)(n);
      if (r.tag === "Left")
        return Te(0 < t.operands.length ? t.operands[0] : t.span)(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return Sn.state((i) => b(
          void 0,
          {
            ...i,
            currNodes: Qi(F)(n.id)(i.currNodes),
            currEdges: o.nextCurrEdges,
            graphEdges: Yn(F.compare, Xn, o.synthesized, i.graphEdges)
          }
        ));
      }
      f();
    });
  }
  if (t.op.tag === "ModNode") {
    const n = t.op._1;
    return Ut.bind(te)((e) => {
      if (!br(n.id)(e.currNodes))
        return Te(0 < t.operands.length ? t.operands[0] : t.span)("cannot modify node " + n.id + ": does not exist");
      if (n.label.tag === "Just") {
        const r = n.label._1;
        return Sn.state((o) => b(void 0, { ...o, graphNodes: _L(n.id)(r)(o.graphNodes) }));
      }
      if (n.label.tag === "Nothing")
        return _n.pure();
      f();
    });
  }
  if (t.op.tag === "AddEdge") {
    const n = t.op._1;
    return Ut.bind(te)((e) => {
      const r = !br(n.from)(e.currNodes), o = !br(n.to)(e.currNodes);
      if (r || o)
        return Te(bm(r)(o)(t))((n.directed ? "cannot add edge " : "cannot add connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": unknown node " + (r ? o ? n.from + ", " + n.to : n.from : o ? n.to : ""));
      const i = n.directed ? n.from + "->" + n.to : n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
      return dr(i)(e.currEdges) ? Te((() => {
        const s = 0 < t.operands.length ? t.operands[0] : t.span, u = 1 < t.operands.length ? t.operands[1] : t.span;
        return { line: s.line, column: s.column, endLine: u.endLine, endColumn: u.endColumn };
      })())((n.directed ? "cannot add edge " : "cannot add connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": already exists") : Sn.state((s) => b(
        void 0,
        {
          ...s,
          graphEdges: tt(F)(i)({
            id: i,
            from: { node: n.from, port: v },
            to: { node: n.to, port: v },
            label: n.label
          })(s.graphEdges),
          currEdges: tt(F)(i)()(s.currEdges)
        }
      ));
    });
  }
  if (t.op.tag === "DelEdge") {
    const n = t.op._1;
    return Ut.bind(te)((e) => {
      const r = n.directed ? n.from + "->" + n.to : n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
      return dr(r)(e.currEdges) ? Sn.state((o) => b(void 0, { ...o, currEdges: Qi(F)(r)(o.currEdges) })) : Te((() => {
        const o = 0 < t.operands.length ? t.operands[0] : t.span, i = 1 < t.operands.length ? t.operands[1] : t.span;
        return { line: o.line, column: o.column, endLine: i.endLine, endColumn: i.endColumn };
      })())((n.directed ? "cannot delete edge " : "cannot delete connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": does not exist");
    });
  }
  return t.op.tag === "RepointEdge" ? RL(t)(t.op._1) : _n.pure();
}, GL = (t) => Ut.bind((() => {
  const n = t.span;
  return Sn.state((e) => b(void 0, { ...e, currentSpan: n }));
})())(() => FL(t)), km = (t) => (n) => (e) => Ut.bind(Fl(GL)(e))(() => Ut.bind(te)((r) => {
  const o = n.tag === "Just" && n._1 !== "" ? n._1 : "kf-" + an(r.kfCounter);
  if (En((s) => s.id === o, r.keyframes))
    return Ut.bind(nL(dL)(0 < e.length ? T("Just", e[0]) : v))(() => pr("duplicate frame name " + o));
  const i = {
    ...r,
    keyframes: St(r.keyframes)({ id: o, nodes: r.currNodes, edges: r.currEdges, kind: t }),
    kfCounter: r.kfCounter + 1 | 0,
    currentKf: T("Just", o),
    scenes: (() => {
      if (r.currentKf.tag === "Nothing")
        return r.scenes;
      if (r.currentKf.tag === "Just")
        return St(r.scenes)(os("Structural", { from: r.currentKf._1, to: o, focus: v }));
      f();
    })()
  };
  return Sn.state((s) => b(void 0, i));
})), Z_ = (t) => (n) => {
  const e = zu(n.ops), r = ht(
    (i) => i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge",
    e
  ), o = ht(
    (i) => !(i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge"),
    e
  );
  return 0 < o.length ? Ut.bind((() => {
    const i = o[0].span;
    return Sn.state((s) => b(void 0, { ...s, currentSpan: i }));
  })())(() => pr("still/title blocks hold a still snapshot; they cannot contain movement tokens (`api ~> db`) or dive commands (`into`/`out`)")) : t === "TitleCard" && r.length === 0 ? pr(n.name.tag === "Just" && n.name._1 !== "" ? 'title "' + n.name._1 + '" has an empty body; give it nodes/edges to title, or use a still' : "title has an empty body; give it nodes/edges to title, or use a still") : Ut.bind(km(t)(n.name)(r))(() => CL);
}, IL = (t) => (n) => {
  const e = bt(kL)(n.scenes), r = ht(hL(eL(B((s) => s.keyframe)(e))), n.keyframes), o = lr(F.compare, t0((s) => s.nodes)(r), t0(yL)(e)), i = lr(F.compare, n0((s) => s.edges)(r), n0(vL)(e));
  return t !== "AnimatedSurface" || e.length === 0 || o.tag === "Leaf" && i.tag === "Leaf" ? v : T("Just", mL(n)(o)(i));
}, BL = (t) => (n) => {
  const e = n.to + "->" + n.from, r = n.from + "->" + n.to, o = n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
  if (dr(r)(t.currEdges))
    return T("Just", { id: r, direction: mg });
  if (dr(e)(t.currEdges))
    return T("Just", { id: e, direction: $g });
  const i = Rl(o)(t.graphEdges);
  if (i.tag === "Just")
    return dr(o)(t.currEdges) ? T(
      "Just",
      { id: o, direction: i._1.from.node === n.from && i._1.to.node === n.to ? mg : $g }
    ) : v;
  if (i.tag === "Nothing")
    return v;
  f();
}, DL = (t) => (n) => {
  if (n.op.tag === "Token") {
    const e = n.op._1;
    return Ut.bind(te)((r) => {
      const o = !br(e.from)(r.currNodes), i = !br(e.to)(r.currNodes);
      if (o || i)
        return Ut.bind(Te(bm(o)(i)(n))(o ? i ? "token references unknown node: " + e.from + ", " + e.to : "token references unknown node: " + e.from : i ? "token references unknown node: " + e.to : "token references unknown node: "))(() => _n.pure({ events: [], firstId: v, lastId: v }));
      const s = BL(r)(e);
      if (s.tag === "Just")
        return bL(t)(Hy("SendToken", { from: e.from, to: e.to, edge: s._1.id, direction: s._1.direction, labels: e.labels }));
      if (s.tag === "Nothing")
        return Ut.bind(Te((() => {
          const u = 0 < n.operands.length ? n.operands[0] : n.span, a = 1 < n.operands.length ? n.operands[1] : n.span;
          return { line: u.line, column: u.column, endLine: a.endLine, endColumn: a.endColumn };
        })())("token " + e.from + "→" + e.to + ": no edge between " + e.from + " and " + e.to))(() => _n.pure({
          events: [],
          firstId: v,
          lastId: v
        }));
      f();
    });
  }
  return _n.pure({ events: [], firstId: v, lastId: v });
}, t1 = (t) => (n) => {
  const e = Ht((r) => v, (r) => (o) => T("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return _n.pure({ events: [], firstId: v, lastId: v });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Ut.bind(Ms(t)(e._1.head))((o) => Ut.bind(hc({
      Applicative0: () => gi(Fe),
      Bind1: () => li(Fe)
    })((i) => (s) => Ut.bind(Ms((() => {
      if (i.lastId.tag === "Just")
        return Q0("After", i.lastId._1);
      if (i.lastId.tag === "Nothing")
        return t;
      f();
    })())(s))((u) => _n.pure({
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
    })))(o)(r))((i) => _n.pure(i)));
  }
  f();
}, zL = (t) => (n) => {
  const e = Ht((r) => v, (r) => (o) => T("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return _n.pure({ events: [], firstId: v, lastId: v });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Ut.bind(Ms(t)(e._1.head))((o) => Ut.bind(HL((() => {
      if (o.firstId.tag === "Just")
        return Q0("With", o.firstId._1);
      if (o.firstId.tag === "Nothing")
        return t;
      f();
    })())(r))((i) => _n.pure({
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
}, Ms = (t) => (n) => {
  if (n.tag === "Leaf") {
    const e = n._1;
    return Ut.bind((() => {
      const r = e.span;
      return Sn.state((o) => b(void 0, { ...o, currentSpan: r }));
    })())(() => DL(t)(e));
  }
  if (n.tag === "Seq" || n.tag === "GroupSeq")
    return t1(t)(n._1);
  if (n.tag === "Par")
    return zL(t)(n._1);
  f();
}, HL = (t) => hc({
  Applicative0: () => gi(Fe),
  Bind1: () => li(Fe)
})((n) => (e) => Ut.bind(Ms(t)(e))((r) => _n.pure({
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
})))({ events: [], firstId: v, lastId: v }), QL = (t) => Ut.bind(te)((n) => {
  if (n.currentKf.tag === "Nothing")
    return pr("flow ops before any structural frame");
  if (n.currentKf.tag === "Just") {
    const e = n.currentKf._1;
    return Ut.bind(Ms(Wy)(t))((r) => Ut.bind(te)((o) => {
      const i = { ...o, scenes: St(o.scenes)(os("DataFlow", { keyframe: e, events: r.events, focus: v })) };
      return Sn.state((s) => b(void 0, i));
    }));
  }
  f();
}), OL = (t) => (n) => (e) => {
  if (e.tag === "StepStructural")
    return Ut.bind((() => {
      const r = km(Zs)(n ? v : t)(e._1);
      return e._1.length !== 0 ? r : _n.pure();
    })())(() => _n.pure(!0));
  if (e.tag === "StepFlow") {
    const r = e._1, o = !n && (() => {
      if (t.tag === "Just")
        return t._1 !== "";
      if (t.tag === "Nothing")
        return !1;
      f();
    })();
    return Ut.bind((() => {
      const i = wL(t);
      return o ? i : _n.pure();
    })())(() => Ut.bind(QL(r))(() => _n.pure(n || o)));
  }
  if (e.tag === "StepDive")
    return Ut.bind(JL(e._1))(() => _n.pure(n));
  f();
}, Sm = (t) => (n) => (e) => {
  const r = Ht((o) => v, (o) => (i) => T("Just", { head: o, tail: i }), e);
  if (r.tag === "Nothing")
    return _n.pure();
  if (r.tag === "Just") {
    const o = r._1.head, i = r._1.tail;
    return Ut.bind(te)((s) => {
      if (s.error.tag === "Just")
        return _n.pure();
      if (s.error.tag === "Nothing")
        return Ut.bind(OL(t)(n)(o))((u) => Sm(t)(u)(i));
      f();
    });
  }
  f();
}, WL = (t) => Ut.bind(te)((n) => {
  if (n.error.tag === "Just")
    return _n.pure();
  if (n.error.tag === "Nothing") {
    if (t.kind === "AnimatedKeyframe")
      return Sm(t.name)(!1)(mc(t.ops));
    if (t.kind === "Still")
      return Z_(Qy)(t);
    if (t.kind === "Title")
      return Z_(Oy)(t);
    if (t.kind === "StepMarker")
      return NL(t);
  }
  f();
}), $c = (t) => Ut.bind(TL(t.interiors))(() => Ut.bind(Fl(WL)(t.frames))(() => Ut.bind(te)((n) => {
  if (n.error.tag === "Just")
    return _n.pure(Et("Left", n.error._1));
  if (n.error.tag === "Nothing") {
    const e = qL(t.interiors);
    if (e.tag === "Left")
      return _n.pure(Et("Left", e._1));
    if (e.tag === "Right") {
      const r = { seed: t.seed, graph: EL(n), keyframes: n.keyframes, scenes: n.scenes, interiors: e._1 };
      return _n.pure((() => {
        const o = IL(t.mode)(r);
        if (o.tag === "Just")
          return Et("Left", { msg: o._1, line: 0, column: 0, endLine: 0, endColumn: 0 });
        if (o.tag === "Nothing")
          return Et("Right", r);
        f();
      })());
    }
  }
  f();
}))), qL = (t) => {
  const n = hc(Q1)((e) => (r) => {
    const o = $c(r.doc)(pc)._1;
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
    })()((i) => Et("Right", tt(F)(r.node)(i)(e)));
  })(G)(t);
  if (n.tag === "Left")
    return Et("Left", n._1);
  if (n.tag === "Right")
    return Et("Right", n._1);
  f();
}, Er = (t, n) => ({ tag: "ParseError", _1: t, _2: n }), k = (t, n, e) => ({ tag: "ParseState", _1: t, _2: n, _3: e }), Ca = (t, n, e) => ({ tag: t, _1: n, _2: e }), XL = (t) => Ca("More", t), YL = (t) => Ca("Lift", t), ML = {
  defer: (t) => {
    const n = hy(t);
    return (e, r, o, i, s) => py(n)(e, r, o, i, s);
  }
}, Lm = { map: (t) => (n) => (e, r, o, i, s) => r((u) => n(e, r, o, i, (a, c) => r((l) => s(a, t(c))))) }, UL = {
  alt: (t) => (n) => (e, r, o, i, s) => {
    const u = e._1, a = e._2;
    return r((c) => t(
      k(u, a, !1),
      r,
      o,
      (l, _) => {
        const d = l._3;
        return r((g) => d ? i(l, _) : n(e, r, o, i, s));
      },
      s
    ));
  },
  Functor0: () => Lm
}, KL = (t) => {
  const n = t.Monad0();
  return (e) => (r) => {
    const o = (i) => {
      let s = i, u = !0, a;
      for (; u; ) {
        const l = s();
        if (l.tag === "More") {
          s = l._1;
          continue;
        }
        if (l.tag === "Lift") {
          u = !1, a = n.Bind1().Apply0().Functor0().map(a0)(l._1);
          continue;
        }
        if (l.tag === "Stop") {
          u = !1, a = n.Applicative0().pure(Li("Done", b(l._2, l._1)));
          continue;
        }
        f();
      }
      return a;
    };
    return t.tailRecM(o)((i) => r(
      e,
      XL,
      YL,
      (s, u) => Ca("Stop", s, Et("Left", u)),
      (s, u) => Ca("Stop", s, Et("Right", u))
    ));
  };
}, yr = (t, n, e, r, o) => o(t, t._2), VL = { index: 0, line: 1, column: 1 }, jL = (t) => {
  const n = KL(t);
  return (e) => (r) => t.Monad0().Bind1().Apply0().Functor0().map(Ba)(n(k(e, VL, !1))(r));
}, ZL = /* @__PURE__ */ jL(X$), yc = (t, n, e, r, o) => o(k(t._1, t._2, !0), void 0), Em = {
  apply: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (a, c) => r((l) => {
      const _ = e._3 && !a._3 ? k(a._1, a._2, !0) : a;
      return n(_, r, o, i, (d, g) => r((p) => s(_._3 && !d._3 ? k(d._1, d._2, !0) : d, c(g))));
    })
  )),
  Functor0: () => Lm
}, Pm = { pure: (t) => (n, e, r, o, i) => i(n, t), Apply0: () => Em }, tE = {
  bind: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (a, c) => r((l) => n(c)(e._3 && !a._3 ? k(a._1, a._2, !0) : a, r, o, i, s))
  )),
  Apply0: () => Em
}, nE = { Applicative0: () => Pm, Bind1: () => tE }, xc = (t) => (n, e, r, o, i) => e((s) => yr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => o(n._3 && !u._3 ? k(u._1, u._2, !0) : u, Er(t, a)))
)), eE = { empty: /* @__PURE__ */ xc("No alternative"), Alt0: () => UL }, rE = { Applicative0: () => Pm, Plus1: () => eE }, oE = {
  tailRecM: (t) => (n) => (e, r, o, i, s) => {
    const u = (a, c, l) => t(c)(
      a,
      r,
      o,
      i,
      (_, d) => {
        const g = a._3 && !_._3 ? k(_._1, _._2, !0) : _;
        if (d.tag === "Loop")
          return l === 0 ? r((p) => u(g, d._1, 30)) : u(g, d._1, l - 1 | 0);
        if (d.tag === "Done")
          return s(g, d._1);
        f();
      }
    );
    return u(e, n, 30);
  },
  Monad0: () => nE
}, iE = (t) => (n) => {
  const e = n.Plus1().Alt0(), r = n.Applicative0();
  return (o) => t.tailRecM((i) => t.Monad0().Bind1().bind(e.alt(e.Functor0().map(a0)(o))(r.pure(Li(
    "Done",
    void 0
  ))))((s) => r.pure((() => {
    if (s.tag === "Loop")
      return Li("Loop", kt("Cons", s._1, i));
    if (s.tag === "Done")
      return Li(
        "Done",
        ((a) => (c) => {
          let l = a, _ = c, d = !0, g;
          for (; d; ) {
            const p = l, m = _;
            if (m.tag === "Nil") {
              d = !1, g = p;
              continue;
            }
            if (m.tag === "Cons") {
              l = kt("Cons", m._1, p), _ = m._2;
              continue;
            }
            f();
          }
          return g;
        })(Y)(i)
      );
    f();
  })())))(Y);
}, Ve = /* @__PURE__ */ iE(oE)(rE), Tt = (t) => (n) => {
  const e = xc("Expected " + n);
  return (r, o, i, s, u) => {
    const a = r._1, c = r._2;
    return o((l) => t(
      k(a, c, !1),
      o,
      i,
      (_, d) => {
        const g = _._3;
        return o((p) => g ? s(_, d) : e(r, o, i, s, u));
      },
      u
    ));
  };
}, Vi = (t) => (n, e, r, o, i) => {
  const s = n._3, u = n._1, a = n._2;
  return e((c) => {
    const l = (_, d) => {
      const g = _._3;
      return e((p) => g ? o(k(_._1, _._2, s), d) : i(n, void 0));
    };
    return e((_) => e((d) => t(
      k(u, a, !1),
      e,
      r,
      (g, p) => l(k(g._1, g._2, !1), p),
      (g, p) => e((m) => e((h) => xc("Negated parser succeeded")(
        g,
        e,
        r,
        l,
        ($, x) => e((y) => i(g._3 && !$._3 ? k($._1, $._2, !0) : $, x))
      )))
    )));
  });
}, sE = (t) => {
  const n = t.foldr((e) => (r) => {
    if (r.tag === "Nothing")
      return T("Just", e);
    if (r.tag === "Just")
      return T(
        "Just",
        (o, i, s, u, a) => {
          const c = o._1, l = o._2;
          return i((_) => e(
            k(c, l, !1),
            i,
            s,
            (d, g) => {
              const p = d._3;
              return i((m) => p ? u(d, g) : r._1(o, i, s, u, a));
            },
            a
          ));
        }
      );
    f();
  })(v);
  return (e) => {
    const r = n(e);
    if (r.tag === "Nothing")
      return xc("No alternative");
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, Am = (t) => (n) => (e) => (r, o, i, s, u) => o((a) => o((c) => o((l) => o((_) => t(
  r,
  o,
  i,
  s,
  (d, g) => o((p) => o((m) => {
    const h = r._3 && !d._3 ? k(d._1, d._2, !0) : d;
    return e(
      h,
      o,
      i,
      s,
      ($, x) => o((y) => {
        const J = h._3 && !$._3 ? k($._1, $._2, !0) : $;
        return o((N) => o((C) => {
          const S = r._3 && !J._3 ? k(J._1, J._2, !0) : J;
          return n(
            S,
            o,
            i,
            s,
            (P, E) => o((Q) => u(S._3 && !P._3 ? k(P._1, P._2, !0) : P, x))
          );
        }));
      })
    );
  }))
))))), e0 = (t) => (n) => (e) => {
  if (n === 10)
    return { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  if (n === 13) {
    const r = Ox()(e);
    return r.tag === "Just" && r._1 === 10 ? { index: t.index + 1 | 0, line: t.line, column: t.column } : { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  }
  return n === 9 ? { index: t.index + 1 | 0, line: t.line, column: (t.column + 8 | 0) - jr(t.column - 1 | 0)(8) | 0 } : { index: t.index + 1 | 0, line: t.line, column: t.column + 1 | 0 };
}, uE = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const a = r, c = o, l = i, _ = tc(c);
    if (_.tag === "Nothing") {
      s = !1, u = a;
      continue;
    }
    if (_.tag === "Just") {
      r = _._1.tail === "" ? e0(a)(_._1.head)(l) : e0(a)(_._1.head)(_._1.tail), o = _._1.tail, i = l;
      continue;
    }
    f();
  }
  return u;
}, Bt = (t) => (n, e, r, o, i) => {
  const s = tc(n._1);
  if (s.tag === "Nothing")
    return o(n, Er("Unexpected EOF", n._2));
  if (s.tag === "Just") {
    if (s._1.head < 0 || s._1.head > 65535)
      return o(n, Er("Expected Char", n._2));
    if (s._1.head >= 0 && s._1.head <= 65535) {
      const u = Y0(s._1.head);
      return t(u) ? i(k(s._1.tail, e0(n._2)(s._1.head)(s._1.tail), !0), u) : o(n, Er("Predicate unsatisfied", n._2));
    }
  }
  f();
}, au = (t, n, e, r, o) => t._1 === "" ? o(k(t._1, t._2, !0), void 0) : r(t, Er("Expected EOF", t._2)), aE = (t) => (n, e, r, o, i) => {
  const s = t(n._1);
  if (s.tag === "Left")
    return o(n, Er(s._1, n._2));
  if (s.tag === "Right")
    return i(k(s._1.remainder, uE(n._2)(s._1.consumed)(s._1.remainder), s._1.consumed !== ""), s._1.value);
  f();
}, Je = (t) => aE((n) => {
  const e = wo(t)(n);
  return e.tag === "Just" ? Et("Right", { value: t, consumed: t, remainder: e._1 }) : Et("Left", "Expected " + hf(t));
}), cE = /* @__PURE__ */ Bt((t) => !0), Au = (t, n) => ({ tag: t, _1: n }), Il = /* @__PURE__ */ sE(Yt), fE = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, lE = /* @__PURE__ */ pn(F)(Yt), gE = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Bl = /* @__PURE__ */ (() => {
  const t = Tt(Bt((r) => r === "}"))("'}'"), n = Tt(Bt((r) => r === "#"))("'#'"), e = Bt((r) => r === `
` || r === "\r");
  return (r, o, i, s, u) => {
    const a = r._1, c = r._2;
    return o((l) => o((_) => t(
      k(a, c, !1),
      o,
      i,
      (d, g) => o((p) => {
        const m = r._1, h = r._2;
        return o(($) => o((x) => n(
          k(m, h, !1),
          o,
          i,
          (y, J) => o((N) => {
            const C = r._1, S = r._2;
            return o((P) => o((E) => e(
              k(C, S, !1),
              o,
              i,
              (Q, W) => o((D) => au(r, o, i, s, u)),
              (Q, W) => o((D) => u(k(C, S, !1), void 0))
            )));
          }),
          (y, J) => o((N) => u(k(m, h, !1), void 0))
        )));
      }),
      (d, g) => o((p) => u(k(a, c, !1), void 0))
    )));
  };
})(), Re = (t) => (n, e, r, o, i) => e((s) => yr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
    return e((_) => t(
      l,
      e,
      r,
      o,
      (d, g) => e((p) => {
        const m = l._3 && !d._3 ? k(d._1, d._2, !0) : d;
        return e((h) => yr(
          m,
          e,
          r,
          o,
          ($, x) => e((y) => i(
            m._3 && !$._3 ? k($._1, $._2, !0) : $,
            b(g, { line: a.line, column: a.column, endLine: x.line, endColumn: x.column })
          ))
        ));
      })
    ));
  })
)), _E = /* @__PURE__ */ (() => {
  const t = Bt((n) => n === " " || n === "	" || n === `
` || n === "\r");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => i(n._3 && !u._3 ? k(u._1, u._2, !0) : u, void 0))
  ));
})(), Rm = (t, n, e, r, o) => n((i) => Je("#")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = Ve(Bt((_) => _ !== `
`)), l = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((_) => c(
      l,
      n,
      e,
      r,
      (d, g) => n((p) => o(l._3 && !d._3 ? k(d._1, d._2, !0) : d, void 0))
    ));
  })
)), Fm = /* @__PURE__ */ Tt(/* @__PURE__ */ (() => {
  const t = Tt(Bt((e) => e === "}"))("'}'"), n = Bt((e) => e === `
` || e === "\r");
  return (e, r, o, i, s) => {
    const u = e._1, a = e._2;
    return r((c) => r((l) => t(
      k(u, a, !1),
      r,
      o,
      (_, d) => r((g) => {
        const p = e._1, m = e._2;
        return r((h) => r(($) => Rm(
          k(p, m, !1),
          r,
          o,
          (x, y) => {
            const J = x._3;
            return r((N) => {
              if (J)
                return i(x, y);
              const C = e._1, S = e._2;
              return r((P) => r((E) => n(
                k(C, S, !1),
                r,
                o,
                (Q, W) => {
                  const D = Q._3;
                  return r((H) => D ? i(Q, W) : au(e, r, o, i, s));
                },
                (Q, W) => r((D) => s(Q, void 0))
              )));
            });
          },
          (x, y) => r((J) => s(x, void 0))
        )));
      }),
      (_, d) => r((g) => s(k(u, a, !1), void 0))
    )));
  };
})())("newline or '}' (statements end at the end of the line)"), Le = /* @__PURE__ */ (() => {
  const t = Ve((n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => _E(
      k(s, u, !1),
      e,
      r,
      (c, l) => {
        const _ = c._3;
        return e((d) => _ ? o(c, l) : Rm(n, e, r, o, i));
      },
      i
    ));
  });
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => i(n._3 && !u._3 ? k(u._1, u._2, !0) : u, void 0))
  ));
})(), dE = /* @__PURE__ */ (() => {
  const t = Bt((n) => n !== "|");
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => e((c) => Je("\\|")(
      k(s, u, !1),
      e,
      r,
      (l, _) => e((d) => e((g) => t(n, e, r, o, (p, m) => e((h) => i(p, ns(m)))))),
      (l, _) => e((d) => i(l, "|"))
    )));
  };
})(), hE = /* @__PURE__ */ Tt(/* @__PURE__ */ Il([
  (t, n, e, r, o) => n((i) => {
    const s = t._3;
    return Je("->")(t, n, e, (u, a) => r(k(u._1, u._2, s), a), (u, a) => n((c) => o(u, !0)));
  }),
  (t, n, e, r, o) => n((i) => {
    const s = t._3;
    return Je("--")(t, n, e, (u, a) => r(k(u._1, u._2, s), a), (u, a) => n((c) => o(u, !1)));
  })
]))("edge arrow '->' or '--'"), pE = (t) => t !== `
` && t !== "\r" && t !== "#" && t !== "}" && t !== "{", vc = /* @__PURE__ */ Bt((t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z"), mE = (t) => t === " " || t === "	" || t === "\r", $E = (t) => To(fn(kr(mE)(fn(Ir(t))).rest)), Dl = (t) => t === `
` || t === "\r" || t === "#" || t === "}", yE = (t) => t === `
` || t === "\r" || t === "#" || t === "}" || t === "{", xE = (t) => t !== "{" && t !== `
` && t !== "\r", n1 = (t) => Za(t) === "", vE = (t) => fn(kr(n1)(fn(kr(n1)(t).rest)).rest), TE = (t) => ((e) => (r) => {
  let o = e, i = r, s = !0, u;
  for (; s; ) {
    const a = o, l = Ht((_) => v, (_) => (d) => T("Just", { head: _, tail: d }), i);
    if (l.tag === "Just" && (l._1.head === " " || l._1.head === "	")) {
      o = a + 1 | 0, i = l._1.tail;
      continue;
    }
    s = !1, u = a;
  }
  return u;
})(0)(Ir(t)), wE = (t) => {
  const n = Ht(
    (e) => v,
    (e) => (r) => T("Just", { head: e, tail: r }),
    B(TE)(ht((e) => Za(e) !== "", t))
  );
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return w(fE)(n._1.head)(n._1.tail);
  f();
}, NE = /* @__PURE__ */ (() => {
  const t = Tt(Bt((n) => n === "-"))("'-'");
  return (n, e, r, o, i) => {
    const s = n._3;
    return e((u) => t(
      n,
      e,
      r,
      (a, c) => o(k(a._1, a._2, s), c),
      (a, c) => e((l) => {
        const _ = Vi((() => {
          const g = Tt(Bt((m) => m === ">"))("'>'"), p = Tt(Bt((m) => m === "-"))("'-'");
          return (m, h, $, x, y) => {
            const J = m._1, N = m._2;
            return h((C) => g(
              k(J, N, !1),
              h,
              $,
              (S, P) => {
                const E = S._3;
                return h((Q) => E ? x(S, P) : p(m, h, $, x, y));
              },
              y
            ));
          };
        })()), d = n._3 && !a._3 ? k(a._1, a._2, !0) : a;
        return e((g) => _(
          d,
          e,
          r,
          (p, m) => o(k(p._1, p._2, s), m),
          (p, m) => e((h) => i(d._3 && !p._3 ? k(p._1, p._2, !0) : p, "-"))
        ));
      })
    ));
  };
})(), un = /* @__PURE__ */ (() => {
  const t = Ve(Bt((n) => n === " " || n === "	"));
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => i(n._3 && !u._3 ? k(u._1, u._2, !0) : u, void 0))
  ));
})(), Co = /* @__PURE__ */ (() => {
  const t = Bt((n) => n === " " || n === "	");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => un(n._3 && !u._3 ? k(u._1, u._2, !0) : u, e, r, o, i))
  ));
})(), Gm = (t, n, e, r, o) => n((i) => n((s) => un(
  t,
  n,
  e,
  r,
  (u, a) => n((c) => n((l) => {
    const _ = t._3 && !u._3 ? k(u._1, u._2, !0) : u;
    return Bl(
      _,
      n,
      e,
      r,
      (d, g) => n((p) => o(_._3 && !d._3 ? k(d._1, d._2, !0) : d, g))
    );
  }))
))), Im = (t, n, e, r, o) => n((i) => un(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = Tt(Bt((_) => _ === "-"))("'-'"), l = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((_) => {
      const d = (m, h) => n(($) => (() => {
        if (h.tag === "Just")
          return (x, y, J, N, C) => y((S) => hE(
            x,
            y,
            J,
            N,
            (P, E) => y((Q) => C(P, T("Just", E)))
          ));
        if (h.tag === "Nothing")
          return (x, y, J, N, C) => C(x, v);
        f();
      })()(l._3 && !m._3 ? k(m._1, m._2, !0) : m, n, e, r, o)), g = l._1, p = l._2;
      return n((m) => n((h) => c(
        k(g, p, !1),
        n,
        e,
        ($, x) => n((y) => d(l, v)),
        ($, x) => n((y) => d(k(g, p, !1), T("Just", x)))
      )));
    });
  })
)), JE = (t) => {
  const n = wo("Expected ")(t), e = (() => {
    if (n.tag === "Nothing")
      return t;
    if (n.tag === "Just")
      return n._1;
    f();
  })();
  return e === "'{'" ? "Open the block with `{`." : e === "integer (seed value)" ? "Put an integer after `seed`." : e === "closing '}'" ? "Close this block with `}`." : e === `closing '"' (unterminated string)` ? 'This string is unterminated; close it with `"`.' : e === "closing '|'" ? "Close this pipe label with `|`." : e === "space after '+'" ? "Put a space after `+`: `+ api: API`." : e === "node identifier after '+'" ? "Put a node id after `+`: `+ api: API`." : e === "space after '-'" ? "Put a space after `-`: `- api`." : e === "node identifier after '-'" ? "Put a node id after `-`: `- api`." : e === "space after '~'" ? "Put a space after `~`: `~ api -> db => api -> cache`." : e === "node identifier" ? "Put a node identifier here." : e === "space after 'inside'" ? "Put a space after `inside`: `inside api { ... }`." : e === "node identifier after 'inside'" ? "Tell `inside` which node owns this interior: `inside api { ... }`." : e === "source node identifier after 'via'" ? "Put the source node after `via`: `via a b`." : e === "target node identifier after 'via'" ? "Put the second endpoint after `via`: `via a b`." : e === "source node identifier" ? "Put a source node identifier here." : e === "new source node identifier" ? "Put the new source node identifier after `=>`." : e === "new target node identifier" ? "Put the new target node identifier after the replacement arrow." : e === "edge arrow '->' or '--'" ? "Use `->` for a directed edge or `--` for an undirected edge." : e === "source edge arrow '->'" ? "Use `->` in the edge you are changing: `~ api -> db => api -> cache`." : e === "replacement edge arrow '->'" ? "Use `->` in the replacement edge: `~ api -> db => api -> cache`." : e === "repoint separator '=>'" ? "Use `=>` before the replacement edge: `~ api -> db => api -> cache`." : e === "target node identifier" ? "Put a target node after the arrow." : e === "'~>'" ? "Use `~>` for movement from left to right." : e === "'<~'" ? "Use `<~` for movement from right to left." : e === "'->' or '<-'" ? "Use `~>` / `<~` for movement tokens." : e === 'label ("…", : rest-of-line, or |…|)' ? 'label must use `: text`, `"text"`, or `|multi-line|`.' : e === "attribute key" ? "Start each attribute with a name, like `shape`." : e === "':'" ? "Put `:` between the attribute name and value: `{shape: cylinder}`." : e === "attribute value" ? "Put an attribute value after `:`." : e === "closing '}' for attributes" ? "Close the attribute block with `}`." : e === "space after 'into'" ? "Put a space after `into`: `into api`." : e === "node identifier after 'into'" ? "Tell `into` which node to dive into." : e === "space after 'step'" ? "Put a space after `step`: `step request`." : e === "step name" ? "Name the step: `step request`." : e === "newline or '}' (statements end at the end of the line)" ? "This statement has extra text. Put the next statement on a new line or close the block with `}`." : e === "statement (+ node, - node, + edge, - edge, into, out, or 'a ~> b'/'a <~ b')" ? "I don't recognize this statement. Start with `+`, `-`, `~`, `into`, `out`, `par`, `seq`, or movement like `api ~> db`." : e === "'scene', 'still', 'title', 'step', 'inside', a statement, or end of input" ? "Start with a statement like `+ api: API`, a marker like `step request`, or a block with `scene`, `still`, `title`, or `inside`." : e;
}, CE = (t) => {
  const n = Za(t), e = wo('"')(n), r = (() => {
    if (e.tag === "Just")
      return ly('"')(e._1);
    if (e.tag === "Nothing")
      return v;
    f();
  })(), o = (() => {
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  })();
  return o === "" ? v : T("Just", o);
}, Bm = (t) => (n) => t !== "AnimatedSurface" && n.statements.length !== 0 ? {
  ...n,
  frames: St(n.frames)((() => {
    if (t === "StillSurface")
      return { name: v, ops: Lr("Seq", n.statements), kind: Gl };
    if (t === "SequenceSurface")
      return { name: v, ops: Lr("Seq", n.statements), kind: Ja };
    if (t === "AnimatedSurface")
      return { name: v, ops: Lr("Seq", n.statements), kind: Ja };
    f();
  })()),
  statements: []
} : n, bE = /* @__PURE__ */ (() => {
  const t = Tt(Bt((n) => n === "\\"))("'\\\\'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
      return e((_) => cE(
        l,
        e,
        r,
        o,
        (d, g) => e((p) => i(
          l._3 && !d._3 ? k(d._1, d._2, !0) : d,
          g === "n" ? `
` : g === "t" ? "	" : g === "r" ? "\r" : g
        ))
      ));
    })
  ));
})(), kE = /* @__PURE__ */ (() => {
  const t = Bt((n) => n !== '"' && n !== "\\" && n !== `
`);
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => bE(k(s, u, !1), e, r, (c, l) => e((_) => t(n, e, r, o, i)), i));
  };
})(), SE = /* @__PURE__ */ (() => {
  const t = Tt(Bt((n) => n === '"'))(`'"'`);
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = Ve(kE), _ = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
      return e((d) => l(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = Tt(Tt(Bt((x) => x === '"'))(`'"'`))(`closing '"' (unterminated string)`), $ = _._3 && !g._3 ? k(g._1, g._2, !0) : g;
          return e((x) => h(
            $,
            e,
            r,
            o,
            (y, J) => e((N) => i(
              $._3 && !y._3 ? k(y._1, y._2, !0) : y,
              To(jt(Jn.foldr, p))
            ))
          ));
        })
      ));
    })
  ));
})(), LE = { frames: [], statements: [] }, EE = (t) => {
  const n = vE(Jo(`
`)(t));
  return Br(`
`)(B($E)(B(Oi(wE(n)))(n)));
}, PE = /* @__PURE__ */ (() => {
  const t = Tt(Bt((n) => n === "|"))("'|'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = Ve(dE), _ = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
      return e((d) => l(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = Tt(Tt(Bt((x) => x === "|"))("'|'"))("closing '|'"), $ = _._3 && !g._3 ? k(g._1, g._2, !0) : g;
          return e((x) => h(
            $,
            e,
            r,
            o,
            (y, J) => e((N) => i(
              $._3 && !y._3 ? k(y._1, y._2, !0) : y,
              EE(Br("")(jt(Jn.foldr, p)))
            ))
          ));
        })
      ));
    })
  ));
})(), Us = /* @__PURE__ */ Bt((t) => t >= "0" && t <= "9"), AE = /* @__PURE__ */ (() => {
  const t = Tt(Bt((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => vc(
      k(s, u, !1),
      e,
      r,
      (c, l) => {
        const _ = c._3;
        return e((d) => {
          if (_)
            return o(c, l);
          const g = n._1, p = n._2;
          return e((m) => Us(
            k(g, p, !1),
            e,
            r,
            (h, $) => {
              const x = h._3;
              return e((y) => {
                if (x)
                  return o(h, $);
                const J = n._1, N = n._2;
                return e((C) => t(
                  k(J, N, !1),
                  e,
                  r,
                  (S, P) => {
                    const E = S._3;
                    return e((Q) => E ? o(S, P) : NE(n, e, r, o, i));
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
})(), Kn = /* @__PURE__ */ (() => {
  const t = Tt(Bt((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => e((s) => {
    const u = (l, _) => e((d) => {
      const g = Ve(AE), p = n._3 && !l._3 ? k(l._1, l._2, !0) : l;
      return e((m) => g(
        p,
        e,
        r,
        o,
        (h, $) => e((x) => i(
          p._3 && !h._3 ? k(h._1, h._2, !0) : h,
          ns(_) + To(jt(Jn.foldr, $))
        ))
      ));
    }), a = n._1, c = n._2;
    return e((l) => vc(
      k(a, c, !1),
      e,
      r,
      (_, d) => {
        const g = _._3;
        return e((p) => g ? o(_, d) : t(n, e, r, o, u));
      },
      u
    ));
  });
})(), e1 = (t, n, e, r, o) => n((i) => un(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = Tt(Kn)("attribute key"), l = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((_) => c(
      l,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = l._3 && !d._3 ? k(d._1, d._2, !0) : d;
        return n((h) => un(
          m,
          n,
          e,
          r,
          ($, x) => n((y) => {
            const J = Tt(Tt(Bt((C) => C === ":"))("':'"))("':'"), N = m._3 && !$._3 ? k($._1, $._2, !0) : $;
            return n((C) => J(
              N,
              n,
              e,
              r,
              (S, P) => n((E) => {
                const Q = N._3 && !S._3 ? k(S._1, S._2, !0) : S;
                return n((W) => un(
                  Q,
                  n,
                  e,
                  r,
                  (D, H) => n((rt) => {
                    const ot = Tt(Kn)("attribute value"), M = Q._3 && !D._3 ? k(D._1, D._2, !0) : D;
                    return n((q) => ot(
                      M,
                      n,
                      e,
                      r,
                      (A, R) => n((X) => {
                        const L = M._3 && !A._3 ? k(A._1, A._2, !0) : A;
                        return n((I) => un(
                          L,
                          n,
                          e,
                          r,
                          (z, U) => n((K) => o(L._3 && !z._3 ? k(z._1, z._2, !0) : z, b(g, R)))
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
)), RE = /* @__PURE__ */ Am(/* @__PURE__ */ (() => {
  const t = Tt(Bt((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (a, c) => e((l) => e((_) => {
      const d = n._3 && !a._3 ? k(a._1, a._2, !0) : a;
      return un(d, e, r, o, (g, p) => e((m) => i(d._3 && !g._3 ? k(g._1, g._2, !0) : g, p)));
    }))
  )));
})())(/* @__PURE__ */ Tt(/* @__PURE__ */ (() => {
  const t = Tt(Bt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => un(
    n,
    e,
    r,
    o,
    (a, c) => e((l) => e((_) => {
      const d = n._3 && !a._3 ? k(a._1, a._2, !0) : a;
      return t(d, e, r, o, (g, p) => e((m) => i(d._3 && !g._3 ? k(g._1, g._2, !0) : g, p)));
    }))
  )));
})())("closing '}' for attributes"))(/* @__PURE__ */ (() => {
  const t = Tt(Bt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => {
    const u = (l, _) => e((d) => (() => {
      if (_.tag === "Just")
        return (g, p, m, h, $) => $(g, G);
      if (_.tag === "Nothing")
        return (g, p, m, h, $) => p((x) => e1(
          g,
          p,
          m,
          h,
          (y, J) => p((N) => {
            const C = Ve((() => {
              const P = Tt(Bt((E) => E === ","))("','");
              return (E, Q, W, D, H) => {
                const rt = E._3;
                return Q((ot) => Q((M) => Q((q) => Q((A) => Q((R) => Q((X) => un(
                  E,
                  Q,
                  W,
                  (L, I) => D(k(L._1, L._2, rt), I),
                  (L, I) => Q((z) => Q((U) => {
                    const K = E._3 && !L._3 ? k(L._1, L._2, !0) : L;
                    return P(
                      K,
                      Q,
                      W,
                      (O, Z) => D(k(O._1, O._2, rt), Z),
                      (O, Z) => Q((et) => {
                        const nt = K._3 && !O._3 ? k(O._1, O._2, !0) : O;
                        return Q((gt) => Q((ct) => {
                          const $t = E._3 && !nt._3 ? k(nt._1, nt._2, !0) : nt;
                          return un(
                            $t,
                            Q,
                            W,
                            (Pt, Rt) => D(k(Pt._1, Pt._2, rt), Rt),
                            (Pt, Rt) => Q((rn) => {
                              const xt = $t._3 && !Pt._3 ? k(Pt._1, Pt._2, !0) : Pt;
                              return Q((Gt) => Q((vt) => {
                                const Jt = E._3 && !xt._3 ? k(xt._1, xt._2, !0) : xt;
                                return e1(
                                  Jt,
                                  Q,
                                  W,
                                  (_t, yt) => D(k(_t._1, _t._2, rt), yt),
                                  (_t, yt) => Q((ft) => H(Jt._3 && !_t._3 ? k(_t._1, _t._2, !0) : _t, yt))
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
            })()), S = g._3 && !y._3 ? k(y._1, y._2, !0) : y;
            return p((P) => C(
              S,
              p,
              m,
              h,
              (E, Q) => p((W) => $(
                S._3 && !E._3 ? k(E._1, E._2, !0) : E,
                lE([J, ...jt(Jn.foldr, Q)])
              ))
            ));
          })
        ));
      f();
    })()(n._3 && !l._3 ? k(l._1, l._2, !0) : l, e, r, o, i)), a = n._1, c = n._2;
    return e((l) => e((_) => t(
      k(a, c, !1),
      e,
      r,
      (d, g) => e((p) => u(n, v)),
      (d, g) => e((p) => u(k(a, c, !1), T("Just", g)))
    )));
  });
})()), FE = (t, n, e, r, o) => n((i) => un(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = Tt(Bt((_) => _ === "{"))("'{'"), l = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((_) => {
      const d = (m, h) => n(($) => (() => {
        if (h.tag === "Just")
          return RE;
        if (h.tag === "Nothing")
          return (x, y, J, N, C) => C(x, G);
        f();
      })()(l._3 && !m._3 ? k(m._1, m._2, !0) : m, n, e, r, o)), g = l._1, p = l._2;
      return n((m) => n((h) => c(
        k(g, p, !1),
        n,
        e,
        ($, x) => n((y) => d(l, v)),
        ($, x) => n((y) => d(k(g, p, !1), T("Just", x)))
      )));
    });
  })
)), GE = (t) => (n) => (e) => (r, o, i, s, u) => o((a) => un(
  r,
  o,
  i,
  s,
  (c, l) => o((_) => {
    const d = Re(Tt(Kn)("target node identifier")), g = r._3 && !c._3 ? k(c._1, c._2, !0) : c;
    return o((p) => d(
      g,
      o,
      i,
      s,
      (m, h) => o(($) => u(
        g._3 && !m._3 ? k(m._1, m._2, !0) : m,
        { op: $r("DelEdge", { from: t, to: h._1, directed: e }), operands: [n, h._2] }
      ))
    ));
  })
)), IE = (t, n, e, r, o) => n((i) => yr(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((l) => {
      const _ = c._3;
      return n((d) => Kn(
        c,
        n,
        e,
        (g, p) => r(k(g._1, g._2, _), p),
        (g, p) => n((m) => {
          const h = c._3 && !g._3 ? k(g._1, g._2, !0) : g;
          return n(($) => un(
            h,
            n,
            e,
            (x, y) => r(k(x._1, x._2, _), y),
            (x, y) => n((J) => {
              const N = h._3 && !x._3 ? k(x._1, x._2, !0) : x;
              return n((C) => {
                const S = (Q, W) => n((D) => {
                  const H = N._3 && !Q._3 ? k(Q._1, Q._2, !0) : Q;
                  return n((rt) => r(c._3 && !H._3 ? k(H._1, H._2, !0) : H, Er("Use `~>` / `<~` for movement tokens.", u)));
                }), P = N._1, E = N._2;
                return n((Q) => Je("->")(
                  k(P, E, !1),
                  n,
                  e,
                  (W, D) => {
                    const H = W._3;
                    return n((rt) => H ? r(k(W._1, W._2, _), D) : Je("<-")(N, n, e, (ot, M) => r(k(ot._1, ot._2, _), M), S));
                  },
                  S
                ));
              });
            })
          ));
        })
      ));
    });
  })
)), BE = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => Re(Kn)(
    t,
    n,
    e,
    (a, c) => r(k(a._1, a._2, s), c),
    (a, c) => n((l) => {
      const _ = t._3 && !a._3 ? k(a._1, a._2, !0) : a;
      return n((d) => un(
        _,
        n,
        e,
        (g, p) => r(k(g._1, g._2, s), p),
        (g, p) => n((m) => {
          const h = Tt(Bt((x) => x === "~"))("'~'"), $ = _._3 && !g._3 ? k(g._1, g._2, !0) : g;
          return n((x) => {
            const y = (C, S) => n((P) => {
              const E = $._3 && !C._3 ? k(C._1, C._2, !0) : C;
              return n((Q) => {
                const W = c._1, D = c._2, H = t._3 && !E._3 ? k(E._1, E._2, !0) : E;
                return n((rt) => un(
                  H,
                  n,
                  e,
                  r,
                  (ot, M) => n((q) => {
                    const A = Tt(Bt((L) => L === "~"))("'~'"), R = Tt(Bt((L) => L === "<"))("'<'"), X = H._3 && !ot._3 ? k(ot._1, ot._2, !0) : ot;
                    return n((L) => {
                      const I = (K, O) => n((Z) => {
                        const et = O === "~" ? Tt(Je("~>"))("'~>'") : Tt(Je("<~"))("'<~'"), nt = X._3 && !K._3 ? k(K._1, K._2, !0) : K;
                        return n((gt) => et(
                          nt,
                          n,
                          e,
                          r,
                          (ct, $t) => n((Pt) => o(
                            nt._3 && !ct._3 ? k(ct._1, ct._2, !0) : ct,
                            b(W, b(D, $t))
                          ))
                        ));
                      }), z = X._1, U = X._2;
                      return n((K) => A(
                        k(z, U, !1),
                        n,
                        e,
                        (O, Z) => {
                          const et = O._3;
                          return n((nt) => et ? r(X, Z) : R(X, n, e, (gt, ct) => r(X, ct), (gt, ct) => I(X, ct)));
                        },
                        (O, Z) => I(X, Z)
                      ));
                    });
                  })
                ));
              });
            }), J = $._1, N = $._2;
            return n((C) => h(
              k(J, N, !1),
              n,
              e,
              (S, P) => {
                const E = S._3;
                return n((Q) => E ? r(k($._1, $._2, s), P) : n((W) => Je("<~")(
                  $,
                  n,
                  e,
                  (D, H) => r(k($._1, $._2, s), H),
                  (D, H) => n((rt) => y($))
                )));
              },
              (S, P) => y($)
            ));
          });
        })
      ));
    })
  ));
}), DE = /* @__PURE__ */ (() => {
  const t = Tt(Bt((n) => n === "~"))("'~'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = Tt(Co)("space after '~'"), _ = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
      return e((d) => l(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = Re(Tt(Kn)("source node identifier")), $ = _._3 && !g._3 ? k(g._1, g._2, !0) : g;
          return e((x) => h(
            $,
            e,
            r,
            o,
            (y, J) => e((N) => {
              const C = J._1, S = J._2, P = $._3 && !y._3 ? k(y._1, y._2, !0) : y;
              return e((E) => un(
                P,
                e,
                r,
                o,
                (Q, W) => e((D) => {
                  const H = Tt(Je("->"))("source edge arrow '->'"), rt = P._3 && !Q._3 ? k(Q._1, Q._2, !0) : Q;
                  return e((ot) => H(
                    rt,
                    e,
                    r,
                    o,
                    (M, q) => e((A) => {
                      const R = rt._3 && !M._3 ? k(M._1, M._2, !0) : M;
                      return e((X) => un(
                        R,
                        e,
                        r,
                        o,
                        (L, I) => e((z) => {
                          const U = Re(Tt(Kn)("target node identifier")), K = R._3 && !L._3 ? k(L._1, L._2, !0) : L;
                          return e((O) => U(
                            K,
                            e,
                            r,
                            o,
                            (Z, et) => e((nt) => {
                              const gt = et._1, ct = et._2, $t = K._3 && !Z._3 ? k(Z._1, Z._2, !0) : Z;
                              return e((Pt) => un(
                                $t,
                                e,
                                r,
                                o,
                                (Rt, rn) => e((xt) => {
                                  const Gt = Tt(Je("=>"))("repoint separator '=>'"), vt = $t._3 && !Rt._3 ? k(Rt._1, Rt._2, !0) : Rt;
                                  return e((Jt) => Gt(
                                    vt,
                                    e,
                                    r,
                                    o,
                                    (_t, yt) => e((ft) => {
                                      const mt = vt._3 && !_t._3 ? k(_t._1, _t._2, !0) : _t;
                                      return e((Ft) => un(
                                        mt,
                                        e,
                                        r,
                                        o,
                                        (Lt, zt) => e((tn) => {
                                          const pe = Re(Tt(Kn)("new source node identifier")), Mn = mt._3 && !Lt._3 ? k(Lt._1, Lt._2, !0) : Lt;
                                          return e((jn) => pe(
                                            Mn,
                                            e,
                                            r,
                                            o,
                                            (Qt, Ot) => e((me) => {
                                              const ee = Ot._1, Un = Ot._2, Qn = Mn._3 && !Qt._3 ? k(Qt._1, Qt._2, !0) : Qt;
                                              return e((ar) => un(
                                                Qn,
                                                e,
                                                r,
                                                o,
                                                (on, vn) => e((Vl) => {
                                                  const cu = Tt(Je("->"))("replacement edge arrow '->'"), fu = Qn._3 && !on._3 ? k(on._1, on._2, !0) : on;
                                                  return e((jl) => cu(
                                                    fu,
                                                    e,
                                                    r,
                                                    o,
                                                    (mn, ue) => e((Dr) => {
                                                      const So = fu._3 && !mn._3 ? k(mn._1, mn._2, !0) : mn;
                                                      return e((so) => un(
                                                        So,
                                                        e,
                                                        r,
                                                        o,
                                                        (ke, _i) => e((xr) => {
                                                          const je = Re(Tt(Kn)("new target node identifier")), Lo = So._3 && !ke._3 ? k(ke._1, ke._2, !0) : ke;
                                                          return e((as) => je(
                                                            Lo,
                                                            e,
                                                            r,
                                                            o,
                                                            (uo, di) => e((lu) => i(
                                                              Lo._3 && !uo._3 ? k(uo._1, uo._2, !0) : uo,
                                                              {
                                                                op: $r("RepointEdge", { from: C, to: gt, newFrom: ee, newTo: di._1 }),
                                                                operands: [S, ct, Un, di._2]
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
})(), zE = (t, n, e, r, o) => n((i) => Us(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = Ve(Us), l = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((_) => c(
      l,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = E2(ns(u) + To(jt(
          Jn.foldr,
          g
        )));
        return (() => {
          if (m.tag === "Just") {
            const h = m._1;
            return ($, x, y, J, N) => N($, h);
          }
          if (m.tag === "Nothing")
            return (h, $, x, y, J) => J(h, 0);
          f();
        })()(l._3 && !d._3 ? k(d._1, d._2, !0) : d, n, e, r, o);
      })
    ));
  })
)), HE = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Je(t)(
    n,
    e,
    r,
    (a, c) => o(k(a._1, a._2, s), c),
    (a, c) => e((l) => {
      const _ = Vi((() => {
        const g = Tt(Bt((m) => m === "_"))("'_'"), p = Tt(Bt((m) => m === "-"))("'-'");
        return (m, h, $, x, y) => {
          const J = m._1, N = m._2;
          return h((C) => vc(
            k(J, N, !1),
            h,
            $,
            (S, P) => {
              const E = S._3;
              return h((Q) => {
                if (E)
                  return x(S, P);
                const W = m._1, D = m._2;
                return h((H) => Us(
                  k(W, D, !1),
                  h,
                  $,
                  (rt, ot) => {
                    const M = rt._3;
                    return h((q) => {
                      if (M)
                        return x(rt, ot);
                      const A = m._1, R = m._2;
                      return h((X) => g(
                        k(A, R, !1),
                        h,
                        $,
                        (L, I) => {
                          const z = L._3;
                          return h((U) => z ? x(L, I) : p(m, h, $, x, y));
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
      })()), d = n._3 && !a._3 ? k(a._1, a._2, !0) : a;
      return e((g) => _(
        d,
        e,
        r,
        (p, m) => o(k(p._1, p._2, s), m),
        (p, m) => e((h) => {
          const $ = d._3 && !p._3 ? k(p._1, p._2, !0) : p;
          return e((x) => Le(
            $,
            e,
            r,
            (y, J) => o(k(y._1, y._2, s), J),
            (y, J) => e((N) => i($._3 && !y._3 ? k(y._1, y._2, !0) : y, t))
          ));
        })
      ));
    })
  ));
}, De = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Je(t)(
    n,
    e,
    r,
    (a, c) => o(k(a._1, a._2, s), c),
    (a, c) => e((l) => {
      const _ = Vi((() => {
        const g = Tt(Bt((m) => m === "_"))("'_'"), p = Tt(Bt((m) => m === "-"))("'-'");
        return (m, h, $, x, y) => {
          const J = m._1, N = m._2;
          return h((C) => vc(
            k(J, N, !1),
            h,
            $,
            (S, P) => {
              const E = S._3;
              return h((Q) => {
                if (E)
                  return x(S, P);
                const W = m._1, D = m._2;
                return h((H) => Us(
                  k(W, D, !1),
                  h,
                  $,
                  (rt, ot) => {
                    const M = rt._3;
                    return h((q) => {
                      if (M)
                        return x(rt, ot);
                      const A = m._1, R = m._2;
                      return h((X) => g(
                        k(A, R, !1),
                        h,
                        $,
                        (L, I) => {
                          const z = L._3;
                          return h((U) => z ? x(L, I) : p(m, h, $, x, y));
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
      })()), d = n._3 && !a._3 ? k(a._1, a._2, !0) : a;
      return e((g) => _(
        d,
        e,
        r,
        (p, m) => o(k(p._1, p._2, s), m),
        (p, m) => e((h) => i(d._3 && !p._3 ? k(p._1, p._2, !0) : p, void 0))
      ));
    })
  ));
}, QE = (t, n, e, r, o) => n((i) => De("into")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = Tt(Co)("space after 'into'"), l = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((_) => c(
      l,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = Re(Tt(Kn)("node identifier after 'into'")), h = l._3 && !d._3 ? k(d._1, d._2, !0) : d;
        return n(($) => m(
          h,
          n,
          e,
          r,
          (x, y) => n((J) => o(
            h._3 && !x._3 ? k(x._1, x._2, !0) : x,
            { op: $r("Enter", { id: y._1 }), operands: [y._2] }
          ))
        ));
      })
    ));
  })
)), OE = (t, n, e, r, o) => n((i) => De("out")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => o(t._3 && !s._3 ? k(s._1, s._2, !0) : s, { op: sL, operands: [] }))
)), WE = (t, n, e, r, o) => n((i) => De("seed")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((l) => un(
      c,
      n,
      e,
      r,
      (_, d) => n((g) => {
        const p = Tt(zE)("integer (seed value)"), m = c._3 && !_._3 ? k(_._1, _._2, !0) : _;
        return n((h) => p(
          m,
          n,
          e,
          r,
          ($, x) => n((y) => {
            const J = m._3 && !$._3 ? k($._1, $._2, !0) : $;
            return n((N) => Le(
              J,
              n,
              e,
              r,
              (C, S) => n((P) => o(J._3 && !C._3 ? k(C._1, C._2, !0) : C, x))
            ));
          })
        ));
      })
    ));
  })
)), Dm = (t, n, e, r, o) => {
  const i = t._3;
  return n((s) => De("diagram")(
    t,
    n,
    e,
    (u, a) => r(k(u._1, u._2, i), a),
    (u, a) => n((c) => {
      const l = Tt(Co)("space after 'diagram'"), _ = t._3 && !u._3 ? k(u._1, u._2, !0) : u;
      return n((d) => l(
        _,
        n,
        e,
        (g, p) => r(k(g._1, g._2, i), p),
        (g, p) => n((m) => {
          const h = Tt(De("sequence"))("diagram mode"), $ = _._3 && !g._3 ? k(g._1, g._2, !0) : g;
          return n((x) => h(
            $,
            n,
            e,
            (y, J) => r(k(y._1, y._2, i), J),
            (y, J) => n((N) => {
              const C = $._3 && !y._3 ? k(y._1, y._2, !0) : y;
              return n((S) => Gm(
                C,
                n,
                e,
                (P, E) => r(k(P._1, P._2, i), E),
                (P, E) => n((Q) => o(
                  C._3 && !P._3 ? k(P._1, P._2, !0) : P,
                  iL
                ))
              ));
            })
          ));
        })
      ));
    })
  ));
}, zm = (t, n, e, r, o) => {
  const i = t._3;
  return n((s) => De("still")(
    t,
    n,
    e,
    (u, a) => r(k(u._1, u._2, i), a),
    (u, a) => n((c) => {
      const l = t._3 && !u._3 ? k(u._1, u._2, !0) : u;
      return n((_) => Gm(
        l,
        n,
        e,
        (d, g) => r(k(d._1, d._2, i), g),
        (d, g) => n((p) => o(l._3 && !d._3 ? k(d._1, d._2, !0) : d, oL))
      ));
    })
  ));
}, Hm = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => zm(
    k(i, s, !1),
    n,
    e,
    (a, c) => {
      const l = a._3;
      return n((_) => l ? r(a, c) : Dm(t, n, e, r, o));
    },
    o
  ));
}, qE = (t) => (n, e, r, o, i) => e((s) => yr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
    return e((_) => {
      const d = l._3;
      return Hm(
        l,
        e,
        r,
        (g, p) => o(k(g._1, g._2, d), p),
        (g, p) => e((m) => o(
          l._3 && !g._3 ? k(g._1, g._2, !0) : g,
          Er(
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
            a
          )
        ))
      );
    });
  })
)), XE = (t) => (n, e, r, o, i) => e((s) => yr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
    return e((_) => {
      const d = (m, h) => e(($) => (() => {
        if (h.tag === "Just") {
          const x = (() => {
            if (t === "AnimatedSurface")
              return "This document already declares `animation`; choose one diagram mode.";
            if (t === "StillSurface")
              return "This document already declares `still`; choose one diagram mode.";
            if (t === "SequenceSurface")
              return "This document already declares `diagram sequence`; choose one diagram mode.";
            f();
          })();
          return (y, J, N, C, S) => C(y, Er(x, a));
        }
        if (h.tag === "Nothing")
          return (x, y, J, N, C) => C(x, void 0);
        f();
      })()(l._3 && !m._3 ? k(m._1, m._2, !0) : m, e, r, o, i)), g = l._1, p = l._2;
      return e((m) => e((h) => Hm(
        k(g, p, !1),
        e,
        r,
        ($, x) => {
          const y = $._3;
          return e((J) => y ? o($, x) : d(l, v));
        },
        ($, x) => e((y) => d($, T("Just", x)))
      )));
    });
  })
)), YE = (t, n, e, r, o) => n((i) => {
  const s = (c, l) => n((_) => {
    const d = t._3 && !c._3 ? k(c._1, c._2, !0) : c;
    return n((g) => Le(
      d,
      n,
      e,
      r,
      (p, m) => n((h) => {
        const $ = d._3 && !p._3 ? k(p._1, p._2, !0) : p;
        return n((x) => XE(l)(
          $,
          n,
          e,
          r,
          (y, J) => n((N) => o($._3 && !y._3 ? k(y._1, y._2, !0) : y, l))
        ));
      })
    ));
  }), u = t._1, a = t._2;
  return n((c) => zm(
    k(u, a, !1),
    n,
    e,
    (l, _) => {
      const d = l._3;
      return n((g) => d ? r(l, _) : Dm(t, n, e, r, s));
    },
    s
  ));
}), ME = (t, n, e, r, o) => n((i) => {
  const s = (c, l) => n((_) => o(
    c,
    (() => {
      if (l.tag === "Nothing")
        return rL;
      if (l.tag === "Just")
        return l._1;
      f();
    })()
  )), u = t._1, a = t._2;
  return n((c) => n((l) => YE(
    k(u, a, !1),
    n,
    e,
    (_, d) => {
      const g = _._3;
      return n((p) => g ? r(_, d) : s(t, v));
    },
    (_, d) => n((g) => s(_, T("Just", d)))
  )));
}), UE = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => un(
    t,
    n,
    e,
    (a, c) => r(k(a._1, a._2, s), c),
    (a, c) => n((l) => De("via")(
      t._3 && !a._3 ? k(a._1, a._2, !0) : a,
      n,
      e,
      (_, d) => r(k(_._1, _._2, s), d),
      (_, d) => n((g) => {
        const p = t._3 && !_._3 ? k(_._1, _._2, !0) : _;
        return n((m) => yc(
          p,
          n,
          e,
          r,
          (h, $) => n((x) => {
            const y = p._3 && !h._3 ? k(h._1, h._2, !0) : h;
            return n((J) => Co(
              y,
              n,
              e,
              r,
              (N, C) => n((S) => {
                const P = Tt(Kn)("source node identifier after 'via'"), E = y._3 && !N._3 ? k(N._1, N._2, !0) : N;
                return n((Q) => P(
                  E,
                  n,
                  e,
                  r,
                  (W, D) => n((H) => {
                    const rt = E._3 && !W._3 ? k(W._1, W._2, !0) : W;
                    return n((ot) => un(
                      rt,
                      n,
                      e,
                      r,
                      (M, q) => n((A) => {
                        const R = Tt(Kn)("target node identifier after 'via'"), X = rt._3 && !M._3 ? k(M._1, M._2, !0) : M;
                        return n((L) => R(
                          X,
                          n,
                          e,
                          r,
                          (I, z) => n((U) => o(X._3 && !I._3 ? k(I._1, I._2, !0) : I, { from: D, to: z }))
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
}), KE = (t) => (n) => {
  const e = Ve(UE);
  return (r, o, i, s, u) => o((a) => e(
    r,
    o,
    i,
    s,
    (c, l) => o((_) => u(
      r._3 && !c._3 ? k(c._1, c._2, !0) : c,
      { op: $r("DelNode", { id: t, via: jt(Jn.foldr, l) }), operands: [n] }
    ))
  ));
}, VE = /* @__PURE__ */ (() => {
  const t = Tt(Bt((n) => n === "-"))("'-'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = Tt(Co)("space after '-'"), _ = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
      return e((d) => l(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = Re(Tt(Kn)("node identifier after '-'")), $ = _._3 && !g._3 ? k(g._1, g._2, !0) : g;
          return e((x) => h(
            $,
            e,
            r,
            o,
            (y, J) => e((N) => {
              const C = J._1, S = J._2, P = $._3 && !y._3 ? k(y._1, y._2, !0) : y;
              return e((E) => Im(
                P,
                e,
                r,
                o,
                (Q, W) => e((D) => (() => {
                  if (W.tag === "Just")
                    return GE(C)(S)(W._1);
                  if (W.tag === "Nothing")
                    return KE(C)(S);
                  f();
                })()(P._3 && !Q._3 ? k(Q._1, Q._2, !0) : Q, e, r, o, i))
              ));
            })
          ));
        })
      ));
    })
  ));
})(), fr = (t) => (n) => (e, r, o, i, s) => r((u) => yr(
  e,
  r,
  o,
  i,
  (a, c) => r((l) => {
    const _ = e._3 && !a._3 ? k(a._1, a._2, !0) : a;
    return r((d) => De(t)(
      _,
      r,
      o,
      i,
      (g, p) => r((m) => i(_._3 && !g._3 ? k(g._1, g._2, !0) : g, Er(n, c)))
    ));
  })
)), jE = (t) => t === "AnimatedSurface" ? (n, e, r, o, i) => e((s) => yr(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
    return e((_) => De("step")(
      l,
      e,
      r,
      o,
      (d, g) => e((p) => {
        const m = Tt(Co)("space after 'step'"), h = l._3 && !d._3 ? k(d._1, d._2, !0) : d;
        return e(($) => m(
          h,
          e,
          r,
          o,
          (x, y) => e((J) => {
            const N = Re(Tt(Kn)("step name")), C = h._3 && !x._3 ? k(x._1, x._2, !0) : x;
            return e((S) => N(
              C,
              e,
              r,
              o,
              (P, E) => e((Q) => {
                const W = E._1, D = E._2, H = C._3 && !P._3 ? k(P._1, P._2, !0) : P;
                return e((rt) => yr(
                  H,
                  e,
                  r,
                  o,
                  (ot, M) => e((q) => {
                    const A = H._3 && !ot._3 ? k(ot._1, ot._2, !0) : ot;
                    return e((R) => un(
                      A,
                      e,
                      r,
                      o,
                      (X, L) => e((I) => {
                        const z = A._3 && !X._3 ? k(X._1, X._2, !0) : X;
                        return e((U) => Fm(
                          z,
                          e,
                          r,
                          o,
                          (K, O) => e((Z) => {
                            const et = z._3 && !K._3 ? k(K._1, K._2, !0) : K;
                            return e((nt) => Le(
                              et,
                              e,
                              r,
                              o,
                              (gt, ct) => e(($t) => {
                                const Pt = { line: a.line, column: a.column, endLine: M.line, endColumn: M.column };
                                return i(
                                  et._3 && !gt._3 ? k(gt._1, gt._2, !0) : gt,
                                  {
                                    name: T("Just", W),
                                    ops: Lr(
                                      "Leaf",
                                      {
                                        op: $r("Step", { name: W }),
                                        line: Pt.line,
                                        column: Pt.column,
                                        endLine: Pt.endLine,
                                        endColumn: Pt.endColumn,
                                        span: Pt,
                                        operands: [D]
                                      }
                                    ),
                                    kind: Nm
                                  }
                                );
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
)) : fr("step")("`step` markers are only supported in animated diagrams."), ZE = /* @__PURE__ */ (() => {
  const t = Tt(Bt((n) => n === ":"))("':'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
      return e((_) => un(
        l,
        e,
        r,
        o,
        (d, g) => e((p) => {
          const m = Ve(Bt(pE)), h = l._3 && !d._3 ? k(d._1, d._2, !0) : d;
          return e(($) => m(
            h,
            e,
            r,
            o,
            (x, y) => e((J) => i(
              h._3 && !x._3 ? k(x._1, x._2, !0) : x,
              Za(To(jt(Jn.foldr, y)))
            ))
          ));
        })
      ));
    })
  ));
})(), tP = (t, n, e, r, o) => n((i) => un(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => Tt((c, l, _, d, g) => {
    const p = c._1, m = c._2;
    return l((h) => ZE(
      k(p, m, !1),
      l,
      _,
      ($, x) => {
        const y = $._3;
        return l((J) => {
          if (y)
            return d($, x);
          const N = c._1, C = c._2;
          return l((S) => PE(
            k(N, C, !1),
            l,
            _,
            (P, E) => {
              const Q = P._3;
              return l((W) => Q ? d(P, E) : SE(c, l, _, d, g));
            },
            g
          ));
        });
      },
      g
    ));
  })('label ("…", : rest-of-line, or |…|)')(t._3 && !s._3 ? k(s._1, s._2, !0) : s, n, e, r, o))
)), Tc = (t) => (n, e, r, o, i) => e((s) => un(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
    return e((_) => {
      const d = (m, h) => e(($) => (h ? ((x, y, J, N, C) => C(x, v)) : (x, y, J, N, C) => y((S) => tP(
        x,
        y,
        J,
        N,
        (P, E) => y((Q) => C(P, T("Just", E)))
      )))(l._3 && !m._3 ? k(m._1, m._2, !0) : m, e, r, o, i)), g = l._1, p = l._2;
      return e((m) => {
        const h = ($, x) => {
          const y = $._3;
          return e((J) => y ? o($, x) : d(l, !1));
        };
        return e(($) => e((x) => e((y) => au(
          k(g, p, !1),
          e,
          r,
          (J, N) => {
            const C = J._3;
            return e((S) => C ? h(k(g, p, !1), N) : e((P) => Bt(t)(
              k(g, p, !1),
              e,
              r,
              (E, Q) => h(k(g, p, !1), Q),
              (E, Q) => e((W) => e((D) => d(k(g, p, !1), !0)))
            )));
          },
          (J, N) => e((C) => e((S) => d(k(g, p, !1), !0)))
        ))));
      });
    });
  })
)), nP = (t) => (n) => (e) => (r, o, i, s, u) => o((a) => un(
  r,
  o,
  i,
  s,
  (c, l) => o((_) => {
    const d = Re(Tt(Kn)("target node identifier")), g = r._3 && !c._3 ? k(c._1, c._2, !0) : c;
    return o((p) => d(
      g,
      o,
      i,
      s,
      (m, h) => o(($) => {
        const x = h._1, y = h._2, J = g._3 && !m._3 ? k(m._1, m._2, !0) : m;
        return o((N) => Tc(Dl)(
          J,
          o,
          i,
          s,
          (C, S) => o((P) => u(
            J._3 && !C._3 ? k(C._1, C._2, !0) : C,
            {
              op: $r("AddEdge", { from: t, to: x, label: S.tag === "Just" ? T("Just", S._1) : v, directed: e }),
              operands: [n, y]
            }
          ))
        ));
      })
    ));
  })
)), eP = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => Re(Kn)(
    t,
    n,
    e,
    (a, c) => r(k(a._1, a._2, s), c),
    (a, c) => n((l) => {
      const _ = t._3 && !a._3 ? k(a._1, a._2, !0) : a;
      return n((d) => un(
        _,
        n,
        e,
        (g, p) => r(k(g._1, g._2, s), p),
        (g, p) => n((m) => {
          const h = Tt(Bt((x) => x === "<"))("'<'"), $ = _._3 && !g._3 ? k(g._1, g._2, !0) : g;
          return n((x) => h(
            $,
            n,
            e,
            (y, J) => r(k($._1, $._2, s), J),
            (y, J) => n((N) => {
              const C = Vi((P, E, Q, W, D) => {
                const H = P._3;
                return Je("<-")(P, E, Q, (rt, ot) => W(k(rt._1, rt._2, H), ot), D);
              }), S = $._3 && !$._3 ? k($._1, $._2, !0) : $;
              return n((P) => C(
                S,
                n,
                e,
                (E, Q) => r(k(E._1, E._2, s), Q),
                (E, Q) => n((W) => {
                  const D = S._3 && !E._3 ? k(E._1, E._2, !0) : E;
                  return n((H) => {
                    const rt = c._1, ot = c._2, M = t._3 && !D._3 ? k(D._1, D._2, !0) : D;
                    return n((q) => un(
                      M,
                      n,
                      e,
                      r,
                      (A, R) => n((X) => {
                        const L = Tt(Je("<~"))("'<~'"), I = M._3 && !A._3 ? k(A._1, A._2, !0) : A;
                        return n((z) => L(
                          I,
                          n,
                          e,
                          r,
                          (U, K) => n((O) => {
                            const Z = I._3 && !U._3 ? k(U._1, U._2, !0) : U;
                            return n((et) => un(
                              Z,
                              n,
                              e,
                              r,
                              (nt, gt) => n((ct) => {
                                const $t = Re(Tt(Kn)("target node identifier")), Pt = Z._3 && !nt._3 ? k(nt._1, nt._2, !0) : nt;
                                return n((Rt) => $t(
                                  Pt,
                                  n,
                                  e,
                                  r,
                                  (rn, xt) => n((Gt) => {
                                    const vt = xt._1, Jt = xt._2, _t = Pt._3 && !rn._3 ? k(rn._1, rn._2, !0) : rn;
                                    return n((yt) => Tc(Dl)(
                                      _t,
                                      n,
                                      e,
                                      r,
                                      (ft, mt) => n((Ft) => o(
                                        _t._3 && !ft._3 ? k(ft._1, ft._2, !0) : ft,
                                        {
                                          op: $r(
                                            "Token",
                                            {
                                              from: vt,
                                              to: rt,
                                              labels: (() => {
                                                if (mt.tag === "Nothing")
                                                  return [];
                                                if (mt.tag === "Just")
                                                  return [mt._1];
                                                f();
                                              })()
                                            }
                                          ),
                                          operands: [Jt, ot]
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
}), rP = (t, n, e, r, o) => n((i) => BE(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = u._2._2, l = u._1, _ = u._2._1, d = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((g) => un(
      d,
      n,
      e,
      r,
      (p, m) => n((h) => {
        const $ = Re(Tt(Kn)("target node identifier")), x = d._3 && !p._3 ? k(p._1, p._2, !0) : p;
        return n((y) => $(
          x,
          n,
          e,
          r,
          (J, N) => n((C) => {
            const S = N._1, P = N._2, E = x._3 && !J._3 ? k(J._1, J._2, !0) : J;
            return n((Q) => Tc(Dl)(
              E,
              n,
              e,
              r,
              (W, D) => n((H) => (c === "<~" ? ((rt, ot, M, q, A) => A(
                rt,
                {
                  op: $r(
                    "Token",
                    {
                      from: S,
                      to: l,
                      labels: (() => {
                        if (D.tag === "Nothing")
                          return [];
                        if (D.tag === "Just")
                          return [D._1];
                        f();
                      })()
                    }
                  ),
                  operands: c === "<~" ? [P, _] : [_, P]
                }
              )) : (rt, ot, M, q, A) => A(
                rt,
                {
                  op: $r(
                    "Token",
                    {
                      from: l,
                      to: S,
                      labels: (() => {
                        if (D.tag === "Nothing")
                          return [];
                        if (D.tag === "Just")
                          return [D._1];
                        f();
                      })()
                    }
                  ),
                  operands: c === "<~" ? [P, _] : [_, P]
                }
              ))(E._3 && !W._3 ? k(W._1, W._2, !0) : W, n, e, r, o))
            ));
          })
        ));
      })
    ));
  })
)), oP = (t, n, e, r, o) => n((i) => Tc(yE)(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => o(
    s,
    (() => {
      if (u.tag === "Nothing")
        return "";
      if (u.tag === "Just")
        return u._1;
      f();
    })()
  ))
)), iP = (t) => (n) => (e, r, o, i, s) => r((u) => oP(
  e,
  r,
  o,
  i,
  (a, c) => r((l) => {
    const _ = e._3 && !a._3 ? k(a._1, a._2, !0) : a;
    return r((d) => FE(
      _,
      r,
      o,
      i,
      (g, p) => r((m) => s(
        _._3 && !g._3 ? k(g._1, g._2, !0) : g,
        {
          op: $r(
            "AddNode",
            {
              id: t,
              label: c,
              shape: (() => {
                const h = gE("shape")(p);
                if (h.tag === "Just")
                  return h._1 === "rectangle" || h._1 === "rect" ? Yr : h._1 === "cylinder" || h._1 === "cyl" ? _g : h._1 === "parallelogram" ? by : h._1 === "diamond" ? ky : h._1 === "ellipse" ? Sy : h._1 === "document" || h._1 === "doc" ? dg : h._1 === "cloud" ? Ly : Yr;
                if (h.tag === "Nothing")
                  return Yr;
                f();
              })()
            }
          ),
          operands: [n]
        }
      ))
    ));
  })
)), sP = /* @__PURE__ */ (() => {
  const t = Tt(Bt((n) => n === "+"))("'+'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = Tt(Co)("space after '+'"), _ = n._3 && !u._3 ? k(u._1, u._2, !0) : u;
      return e((d) => l(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = Re(Tt(Kn)("node identifier after '+'")), $ = _._3 && !g._3 ? k(g._1, g._2, !0) : g;
          return e((x) => h(
            $,
            e,
            r,
            o,
            (y, J) => e((N) => {
              const C = J._1, S = J._2, P = $._3 && !y._3 ? k(y._1, y._2, !0) : y;
              return e((E) => Im(
                P,
                e,
                r,
                o,
                (Q, W) => e((D) => (() => {
                  if (W.tag === "Just")
                    return nP(C)(S)(W._1);
                  if (W.tag === "Nothing")
                    return iP(C)(S);
                  f();
                })()(P._3 && !Q._3 ? k(Q._1, Q._2, !0) : Q, e, r, o, i))
              ));
            })
          ));
        })
      ));
    })
  ));
})(), uP = (t, n, e, r, o) => n((i) => yr(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = Tt(Il([
      fr("+node")("Node additions use `+ api: API`."),
      fr("+edge")("Graph edges use `+ api -> db`."),
      fr("+conn")("Undirected graph edges use `+ api -- db`."),
      fr("-node")("Node removals use `- api`."),
      fr("-edge")("Graph edge removals use `- api -> db`."),
      fr("-conn")("Undirected graph edge removals use `- api -- db`."),
      fr("~edge")("Graph edge repoints use `~ api -> db => api -> cache`."),
      fr("enter")("Dive commands use `into api`."),
      fr("exit")("Return from a dive with `out`."),
      IE,
      sP,
      VE,
      DE,
      rP,
      eP,
      QE,
      OE
    ]))("statement (+ node, - node, + edge, - edge, into, out, or 'a ~> b'/'a <~ b')"), l = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((_) => c(
      l,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = l._3 && !d._3 ? k(d._1, d._2, !0) : d;
        return n((h) => yr(
          m,
          n,
          e,
          r,
          ($, x) => n((y) => {
            const J = { line: u.line, column: u.column, endLine: x.line, endColumn: x.column };
            return o(
              m._3 && !$._3 ? k($._1, $._2, !0) : $,
              Lr(
                "Leaf",
                { op: g.op, line: J.line, column: J.column, endLine: J.endLine, endColumn: J.endColumn, span: J, operands: g.operands }
              )
            );
          })
        ));
      })
    ));
  })
)), zl = /* @__PURE__ */ Am(/* @__PURE__ */ (() => {
  const t = Tt(Bt((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (a, c) => e((l) => e((_) => {
      const d = n._3 && !a._3 ? k(a._1, a._2, !0) : a;
      return Le(d, e, r, o, (g, p) => e((m) => i(d._3 && !g._3 ? k(g._1, g._2, !0) : g, p)));
    }))
  )));
})())(/* @__PURE__ */ Tt(/* @__PURE__ */ (() => {
  const t = Tt(Bt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => Le(
    n,
    e,
    r,
    o,
    (a, c) => e((l) => e((_) => {
      const d = n._3 && !a._3 ? k(a._1, a._2, !0) : a;
      return t(d, e, r, o, (g, p) => e((m) => i(d._3 && !g._3 ? k(g._1, g._2, !0) : g, p)));
    }))
  )));
})())("closing '}'")), Qm = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => Le(
    t,
    n,
    e,
    (a, c) => r(k(a._1, a._2, s), c),
    (a, c) => n((l) => {
      const _ = Vi(Tt(Bt((g) => g === "}"))("'}'")), d = t._3 && !a._3 ? k(a._1, a._2, !0) : a;
      return n((g) => _(
        d,
        n,
        e,
        (p, m) => r(k(p._1, p._2, s), m),
        (p, m) => n((h) => Vi(au)(
          d._3 && !p._3 ? k(p._1, p._2, !0) : p,
          n,
          e,
          ($, x) => r(k($._1, $._2, s), x),
          ($, x) => n((y) => {
            const J = t._3 && !$._3 ? k($._1, $._2, !0) : $;
            return n((N) => yc(
              J,
              n,
              e,
              r,
              (C, S) => n((P) => {
                const E = Il([cP, aP, uP]), Q = J._3 && !C._3 ? k(C._1, C._2, !0) : C;
                return n((W) => E(
                  Q,
                  n,
                  e,
                  r,
                  (D, H) => n((rt) => {
                    const ot = Q._3 && !D._3 ? k(D._1, D._2, !0) : D;
                    return n((M) => un(
                      ot,
                      n,
                      e,
                      r,
                      (q, A) => n((R) => {
                        const X = ot._3 && !q._3 ? k(q._1, q._2, !0) : q;
                        return n((L) => Fm(
                          X,
                          n,
                          e,
                          r,
                          (I, z) => n((U) => {
                            const K = X._3 && !I._3 ? k(I._1, I._2, !0) : I;
                            return n((O) => Le(
                              K,
                              n,
                              e,
                              r,
                              (Z, et) => n((nt) => o(K._3 && !Z._3 ? k(Z._1, Z._2, !0) : Z, H))
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
}), aP = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => {
    const a = (c, l) => {
      const _ = c._3;
      return n((d) => _ ? r(c, l) : n((g) => {
        const p = t._3;
        return n((m) => De("seq")(
          t,
          n,
          e,
          (h, $) => r(k(h._1, h._2, p), $),
          (h, $) => n((x) => {
            const y = t._3 && !h._3 ? k(h._1, h._2, !0) : h;
            return n((J) => un(
              y,
              n,
              e,
              (N, C) => r(k(N._1, N._2, p), C),
              (N, C) => n((S) => Bl(
                y._3 && !N._3 ? k(N._1, N._2, !0) : N,
                n,
                e,
                (P, E) => r(k(P._1, P._2, p), E),
                (P, E) => n((Q) => {
                  const W = t._3 && !P._3 ? k(P._1, P._2, !0) : P;
                  return n((D) => yc(
                    W,
                    n,
                    e,
                    r,
                    (H, rt) => n((ot) => {
                      const M = Tt(Tt(Bt((A) => A === "{"))("'{'"))("'{'"), q = W._3 && !H._3 ? k(H._1, H._2, !0) : H;
                      return n((A) => M(
                        q,
                        n,
                        e,
                        r,
                        (R, X) => n((L) => o(
                          q._3 && !R._3 ? k(R._1, R._2, !0) : R,
                          Lr("GroupSeq", [])
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
    return n((c) => n((l) => De("seq")(
      k(i, s, !1),
      n,
      e,
      (_, d) => a(k(_._1, _._2, !1), d),
      (_, d) => n((g) => n((p) => un(
        _,
        n,
        e,
        (m, h) => a(k(m._1, m._2, !1), h),
        (m, h) => n(($) => {
          const x = _._3 && !m._3 ? k(m._1, m._2, !0) : m;
          return Tt(Bt((y) => y === "{"))("'{'")(
            x,
            n,
            e,
            (y, J) => a(k(x._1, x._2, !1), J),
            (y, J) => n((N) => zl(Hl(fL))(x, n, e, a, o))
          );
        })
      )))
    )));
  });
}, cP = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => {
    const a = (c, l) => {
      const _ = c._3;
      return n((d) => _ ? r(c, l) : n((g) => {
        const p = t._3;
        return n((m) => De("par")(
          t,
          n,
          e,
          (h, $) => r(k(h._1, h._2, p), $),
          (h, $) => n((x) => {
            const y = t._3 && !h._3 ? k(h._1, h._2, !0) : h;
            return n((J) => un(
              y,
              n,
              e,
              (N, C) => r(k(N._1, N._2, p), C),
              (N, C) => n((S) => Bl(
                y._3 && !N._3 ? k(N._1, N._2, !0) : N,
                n,
                e,
                (P, E) => r(k(P._1, P._2, p), E),
                (P, E) => n((Q) => {
                  const W = t._3 && !P._3 ? k(P._1, P._2, !0) : P;
                  return n((D) => yc(
                    W,
                    n,
                    e,
                    r,
                    (H, rt) => n((ot) => {
                      const M = Tt(Tt(Bt((A) => A === "{"))("'{'"))("'{'"), q = W._3 && !H._3 ? k(H._1, H._2, !0) : H;
                      return n((A) => M(
                        q,
                        n,
                        e,
                        r,
                        (R, X) => n((L) => o(
                          q._3 && !R._3 ? k(R._1, R._2, !0) : R,
                          Lr("Par", [])
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
    return n((c) => n((l) => De("par")(
      k(i, s, !1),
      n,
      e,
      (_, d) => a(k(_._1, _._2, !1), d),
      (_, d) => n((g) => n((p) => un(
        _,
        n,
        e,
        (m, h) => a(k(m._1, m._2, !1), h),
        (m, h) => n(($) => {
          const x = _._3 && !m._3 ? k(m._1, m._2, !0) : m;
          return Tt(Bt((y) => y === "{"))("'{'")(
            x,
            n,
            e,
            (y, J) => a(k(x._1, x._2, !1), J),
            (y, J) => n((N) => zl(Hl(aL))(x, n, e, a, o))
          );
        })
      )))
    )));
  });
}, Hl = (t) => {
  const n = Ve(Qm);
  return (e, r, o, i, s) => r((u) => n(
    e,
    r,
    o,
    i,
    (a, c) => r((l) => s(
      e._3 && !a._3 ? k(a._1, a._2, !0) : a,
      t(jt(Jn.foldr, c))
    ))
  ));
}, uf = (t) => (n) => (e, r, o, i, s) => r((u) => HE(t)(
  e,
  r,
  o,
  i,
  (a, c) => r((l) => {
    const _ = Ve(Bt(xE)), d = e._3 && !a._3 ? k(a._1, a._2, !0) : a;
    return r((g) => _(
      d,
      r,
      o,
      i,
      (p, m) => r((h) => {
        const $ = Tt(Tt(Bt((y) => y === "{"))("'{'"))("'{'"), x = d._3 && !p._3 ? k(p._1, p._2, !0) : p;
        return r((y) => $(
          x,
          r,
          o,
          i,
          (J, N) => r((C) => {
            const S = x._3 && !J._3 ? k(J._1, J._2, !0) : J;
            return r((P) => Le(
              S,
              r,
              o,
              i,
              (E, Q) => r((W) => {
                const D = Hl(cL), H = S._3 && !E._3 ? k(E._1, E._2, !0) : E;
                return r((rt) => D(
                  H,
                  r,
                  o,
                  i,
                  (ot, M) => r((q) => {
                    const A = H._3 && !ot._3 ? k(ot._1, ot._2, !0) : ot;
                    return r((R) => Le(
                      A,
                      r,
                      o,
                      i,
                      (X, L) => r((I) => {
                        const z = Tt(Tt(Bt((K) => K === "}"))("'}'"))("closing '}'"), U = A._3 && !X._3 ? k(X._1, X._2, !0) : X;
                        return r((K) => z(
                          U,
                          r,
                          o,
                          i,
                          (O, Z) => r((et) => {
                            const nt = U._3 && !O._3 ? k(O._1, O._2, !0) : O;
                            return r((gt) => Le(
                              nt,
                              r,
                              o,
                              i,
                              (ct, $t) => r((Pt) => s(
                                nt._3 && !ct._3 ? k(ct._1, ct._2, !0) : ct,
                                { name: CE(To(jt(Jn.foldr, m))), ops: M, kind: n }
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
)), fP = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => fr("keyframe")("Drop the `keyframe` wrapper; Markgraf animates statements in order.")(
    k(i, s, !1),
    n,
    e,
    (a, c) => {
      const l = a._3;
      return n((_) => {
        if (l)
          return r(a, c);
        const d = t._1, g = t._2;
        return n((p) => uf("scene")(Ja)(
          k(d, g, !1),
          n,
          e,
          (m, h) => {
            const $ = m._3;
            return n((x) => {
              if ($)
                return r(m, h);
              const y = t._1, J = t._2;
              return n((N) => uf("still")(Gl)(
                k(y, J, !1),
                n,
                e,
                (C, S) => {
                  const P = C._3;
                  return n((E) => P ? r(C, S) : uf("title")(uL)(t, n, e, r, o));
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
}, lP = (t) => (n) => (e) => {
  if (t === "AnimatedSurface")
    return { ...n, frames: St(n.frames)({ name: v, ops: e, kind: Ja }) };
  if (t === "StillSurface")
    return { ...n, statements: St(n.statements)(e) };
  if (t === "SequenceSurface")
    return { ...n, statements: St(n.statements)(e) };
  f();
}, gP = (t) => (n) => (e) => {
  if (e.tag === "TopFrame") {
    const r = Bm(t)(n);
    return {
      ...r,
      frames: St(r.frames)((() => {
        if (t === "AnimatedSurface")
          return e._1;
        if (t === "StillSurface")
          return {
            ...e._1,
            kind: e._1.kind === "AnimatedKeyframe" ? Gl : e._1.kind === "StepMarker" ? Nm : e._1.kind
          };
        if (t === "SequenceSurface")
          return e._1;
        f();
      })())
    };
  }
  if (e.tag === "TopStatement")
    return lP(t)(n)(e._1);
  if (e.tag === "TopInside")
    return n;
  f();
}, _P = (t) => {
  const n = w(gP(t))(LE);
  return (e) => Bm(t)(n(e)).frames;
}, dP = (t) => ML.defer((n) => {
  const e = jE(t);
  return (r, o, i, s, u) => {
    const a = r._1, c = r._2;
    return o((l) => qE(t)(
      k(a, c, !1),
      o,
      i,
      (_, d) => {
        const g = _._3;
        return o((p) => {
          if (g)
            return s(_, d);
          const m = r._1, h = r._2;
          return o(($) => o((x) => hP(
            k(m, h, !1),
            o,
            i,
            (y, J) => {
              const N = y._3;
              return o((C) => {
                if (N)
                  return s(y, J);
                const S = r._1, P = r._2;
                return o((E) => o((Q) => e(
                  k(S, P, !1),
                  o,
                  i,
                  (W, D) => {
                    const H = W._3;
                    return o((rt) => {
                      if (H)
                        return s(W, D);
                      const ot = r._1, M = r._2;
                      return o((q) => o((A) => fP(
                        k(ot, M, !1),
                        o,
                        i,
                        (R, X) => {
                          const L = R._3;
                          return o((I) => L ? s(R, X) : o((z) => Qm(r, o, i, s, (U, K) => o((O) => u(U, Au("TopStatement", K))))));
                        },
                        (R, X) => o((L) => u(R, Au("TopFrame", X)))
                      )));
                    });
                  },
                  (W, D) => o((H) => u(W, Au("TopFrame", D)))
                )));
              });
            },
            (y, J) => o((N) => u(y, Au("TopInside", J)))
          )));
        });
      },
      u
    ));
  };
}), hP = (t, n, e, r, o) => n((i) => De("inside")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = Tt(Co)("space after 'inside'"), l = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((_) => c(
      l,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = Tt(Kn)("node identifier after 'inside'"), h = l._3 && !d._3 ? k(d._1, d._2, !0) : d;
        return n(($) => m(
          h,
          n,
          e,
          r,
          (x, y) => n((J) => {
            const N = h._3 && !x._3 ? k(x._1, x._2, !0) : x;
            return n((C) => Le(
              N,
              n,
              e,
              r,
              (S, P) => n((E) => {
                const Q = N._3 && !S._3 ? k(S._1, S._2, !0) : S;
                return n((W) => zl(Om)(
                  Q,
                  n,
                  e,
                  r,
                  (D, H) => n((rt) => {
                    const ot = Q._3 && !D._3 ? k(D._1, D._2, !0) : D;
                    return n((M) => Le(
                      ot,
                      n,
                      e,
                      r,
                      (q, A) => n((R) => o(ot._3 && !q._3 ? k(q._1, q._2, !0) : q, { node: y, doc: H }))
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
)), Om = (t, n, e, r, o) => n((i) => ME(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = t._3 && !s._3 ? k(s._1, s._2, !0) : s;
    return n((l) => {
      const _ = (p, m) => n((h) => {
        const $ = Ve(dP(u)), x = c._3 && !p._3 ? k(p._1, p._2, !0) : p;
        return n((y) => $(
          x,
          n,
          e,
          r,
          (J, N) => n((C) => {
            const S = jt(Jn.foldr, N);
            return o(
              x._3 && !J._3 ? k(J._1, J._2, !0) : J,
              {
                seed: (() => {
                  if (m.tag === "Nothing")
                    return 0;
                  if (m.tag === "Just")
                    return m._1;
                  f();
                })(),
                mode: u,
                frames: _P(u)(S),
                interiors: bt((P) => {
                  if (P.tag === "TopInside")
                    return T("Just", P._1);
                  if (P.tag === "TopFrame" || P.tag === "TopStatement")
                    return v;
                  f();
                })(S)
              }
            );
          })
        ));
      }), d = c._1, g = c._2;
      return n((p) => n((m) => WE(
        k(d, g, !1),
        n,
        e,
        (h, $) => {
          const x = h._3;
          return n((y) => x ? r(h, $) : _(c, v));
        },
        (h, $) => n((x) => _(h, T("Just", $)))
      )));
    });
  })
)), pP = /* @__PURE__ */ (() => {
  const t = Tt((n, e, r, o, i) => e((s) => e((u) => Le(
    n,
    e,
    r,
    o,
    (a, c) => e((l) => e((_) => {
      const d = n._3 && !a._3 ? k(a._1, a._2, !0) : a;
      return au(
        d,
        e,
        r,
        o,
        (g, p) => e((m) => i(d._3 && !g._3 ? k(g._1, g._2, !0) : g, p))
      );
    }))
  ))))("'scene', 'still', 'title', 'step', 'inside', a statement, or end of input");
  return (n, e, r, o, i) => e((s) => e((u) => e((a) => e((c) => Le(
    n,
    e,
    r,
    o,
    (l, _) => e((d) => e((g) => {
      const p = n._3 && !l._3 ? k(l._1, l._2, !0) : l;
      return Om(
        p,
        e,
        r,
        o,
        (m, h) => e(($) => {
          const x = p._3 && !m._3 ? k(m._1, m._2, !0) : m;
          return e((y) => e((J) => {
            const N = n._3 && !x._3 ? k(x._1, x._2, !0) : x;
            return t(
              N,
              e,
              r,
              o,
              (C, S) => e((P) => i(N._3 && !C._3 ? k(C._1, C._2, !0) : C, h))
            );
          }));
        })
      );
    }))
  )))));
})(), mP = (t) => {
  const n = ZL(t)(pP);
  if (n.tag === "Left")
    return Et("Left", { msg: JE(n._1._1), line: n._1._2.line, column: n._1._2.column, endLine: n._1._2.line, endColumn: n._1._2.column + 1 | 0 });
  if (n.tag === "Right")
    return Et("Right", n._1);
  f();
}, Ql = (t) => {
  const n = mP(t);
  if (n.tag === "Left")
    return Et("Left", n._1.msg);
  if (n.tag === "Right")
    return Et("Right", n._1);
  f();
}, $P = () => ({ tag: "ParFrag" }), Wm = (t) => t, yP = /* @__PURE__ */ Wm("Sync"), xP = /* @__PURE__ */ Wm("SelfMsg"), vP = /* @__PURE__ */ $P(), bo = /* @__PURE__ */ vm(Fe), ji = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, tr = /* @__PURE__ */ li(Fe), Kr = bo.state((t) => b(t, t)), r1 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Hu = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, oi = /* @__PURE__ */ gi(Fe), TP = (t) => (n) => w((e) => (r) => li(Fe).bind(e)((o) => t(o)(r)))(gi(Fe).pure(n)), r0 = /* @__PURE__ */ Gr(oi)(Yt), wP = (t) => bo.state((n) => b(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return { ...n, error: T("Just", t) };
    f();
  })()
)), NP = (t) => (n) => bo.state((e) => b(
  void 0,
  { ...e, lifelines: V1(F)((r) => T("Just", { ...r, label: n }))(t)(e.lifelines) }
)), JP = (t) => (n) => (e) => {
  const r = ji(e)(t.lifelines);
  return ji(n)(t.lifelines).tag === "Nothing" ? r.tag === "Nothing" ? n + ", " + e : n : r.tag === "Nothing" ? e : "";
}, CP = { lifelines: G, lifelineOrder: [], messages: [], fragments: [], frameEndRows: [], row: 0, error: v }, bP = (t) => (n) => (e) => tr.bind(Kr)((r) => {
  const o = ji(t)(r.lifelines), i = ji(n)(r.lifelines);
  if (o.tag === "Just" && i.tag === "Just") {
    const s = {
      ...r,
      messages: [
        { fromCol: o._1.column, toCol: i._1.column, labels: e, row: r.row, kind: t === n ? xP : yP },
        ...r.messages
      ],
      row: r.row + 1 | 0
    };
    return bo.state((u) => b(void 0, s));
  }
  return wP("token references unknown node: " + JP(r)(t)(n));
}), kP = (t) => bo.state((n) => b(
  void 0,
  { ...n, lifelines: V1(F)((e) => T("Just", { ...e, destroyedAt: T("Just", n.row) }))(t)(n.lifelines) }
)), SP = (t) => (n) => {
  const e = n.lifelineOrder.length, r = Ht((o) => v, (o) => (i) => T("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return { fromCol: 0, toCol: Hu(0)(n.lifelineOrder.length - 1 | 0) };
  if (r.tag === "Just")
    return w((o) => (i) => ({ fromCol: r1(o.fromCol)(r1(i.fromCol)(i.toCol)), toCol: Hu(o.toCol)(Hu(i.fromCol)(i.toCol)) }))({ fromCol: e, toCol: 0 })(t);
  f();
}, LP = (t) => ({
  lifelines: bt((n) => ji(n)(t.lifelines))(t.lifelineOrder),
  messages: fn(t.messages),
  fragments: fn(t.fragments),
  frameEndRows: t.frameEndRows,
  totalRows: t.row
}), EP = (t) => (n) => tr.bind(Kr)((e) => {
  const r = ji(t)(e.lifelines);
  if (r.tag === "Just")
    return oi.pure();
  if (r.tag === "Nothing") {
    const o = {
      ...e,
      lifelines: tt(F)(t)({ id: t, label: n, column: e.lifelineOrder.length, createdAt: e.row, destroyedAt: v })(e.lifelines),
      lifelineOrder: St(e.lifelineOrder)(t),
      row: e.row > 0 || e.messages.length !== 0 ? e.row + 1 | 0 : e.row
    };
    return bo.state((i) => b(void 0, o));
  }
  f();
}), PP = (t) => {
  if (t.tag === "AddNode")
    return EP(t._1.id)(t._1.label);
  if (t.tag === "DelNode")
    return kP(t._1.id);
  if (t.tag === "ModNode") {
    if (t._1.label.tag === "Just")
      return NP(t._1.id)(t._1.label._1);
    if (t._1.label.tag === "Nothing")
      return oi.pure();
    f();
  }
  return t.tag === "Token" ? bP(t._1.from)(t._1.to)(t._1.labels) : oi.pure();
}, AP = (t) => tr.bind(Kr)((n) => {
  const e = n.row;
  return tr.bind(TP((r) => (o) => tr.bind(Kr)((i) => {
    const s = r.childMessages.length === 0 ? r.dividers : [i.row, ...r.dividers], u = i.messages;
    return tr.bind(ba(o))(() => tr.bind(Kr)((a) => oi.pure({
      dividers: s,
      childMessages: [
        ...r.childMessages,
        ...(() => {
          const c = a.messages.length - u.length | 0;
          return c < 1 ? [] : At(0, c, a.messages);
        })()
      ]
    })));
  }))({ dividers: [], childMessages: [] })(t))((r) => tr.bind(Kr)((o) => {
    const i = SP(r.childMessages)(o), s = {
      kind: vP,
      label: "par",
      fromRow: e,
      toRow: Hu(o.row)(e + 1 | 0),
      fromCol: i.fromCol,
      toCol: i.toCol,
      regionDividers: fn(r.dividers)
    }, u = bo.state((a) => b(void 0, { ...a, fragments: [s, ...a.fragments] }));
    return r.childMessages.length >= 2 ? u : oi.pure();
  }));
}), ba = (t) => {
  if (t.tag === "Leaf")
    return PP(t._1.op);
  if (t.tag === "Seq" || t.tag === "GroupSeq")
    return r0(ba)(t._1);
  if (t.tag === "Par")
    return AP(t._1);
  f();
}, RP = (t) => {
  const n = tr.bind(r0((e) => tr.bind(Kr)((r) => tr.bind(ba(e.ops))(() => tr.bind(Kr)((o) => {
    const i = bo.state((s) => b(void 0, { ...s, frameEndRows: St(s.frameEndRows)(s.row - 1 | 0) }));
    return (o.messages.length - r.messages.length | 0) > 0 ? i : oi.pure();
  }))))(t.frames))(() => Kr)(CP)._1;
  if (n.error.tag === "Just")
    return Et("Left", n.error._1);
  if (n.error.tag === "Nothing")
    return Et("Right", LP(n));
  f();
}, FP = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, GP = { padding: 24, headerHeight: 36, headerWidth: 120, columnSpacing: 160, rowHeight: 36, topGap: 24, bottomGap: 24 }, IP = (t) => {
  const n = 84 + V(FP(1)(t.totalRows)) * 36, e = Xt((r) => (o) => ({ lifeline: o, x: 84 + V(r) * 160 }))(t.lifelines);
  return {
    metrics: GP,
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
}, BP = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
}, qm = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Xm = (t) => (e) => {
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
}, Ym = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, DP = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, zP = /* @__PURE__ */ w((t) => (n) => tt(st)(n)()(t))(G), HP = { r: 255, g: 255, b: 255, a: 255 }, wc = { r: 26, g: 26, b: 26, a: 255 }, QP = { color: { r: 232, g: 232, b: 232, a: 255 }, flat: !0 }, OP = { r: 232, g: 232, b: 232, a: 255 }, ka = (t) => (n) => (e) => (r) => (o) => [
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
  ...qs
], o1 = (t) => (n) => (e) => ({ ...e, stack: St(e.stack)(t), openedAt: tt(st)(t)(n)(e.openedAt) }), Nc = (t) => (n) => {
  const e = n.stack.length - 1 | 0;
  if (e >= 0 && e < n.stack.length) {
    const r = BP(n.stack[e])(n.openedAt), o = (() => {
      if (r.tag === "Nothing")
        return t;
      if (r.tag === "Just")
        return r._1;
      f();
    })();
    return {
      ...n,
      stack: n.stack.length === 0 ? [] : At(0, n.stack.length - 1 | 0, n.stack),
      openedAt: Qi(st)(n.stack[e])(n.openedAt),
      spans: St(n.spans)({ col: n.stack[e], fromRow: o, toRow: qm(o)(t) })
    };
  }
  return n;
}, i1 = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const a = r, c = o, l = i, _ = l.stack.length - 1 | 0;
    if (_ >= 0 && _ < l.stack.length) {
      if (a(l.stack[_])) {
        s = !1, u = l;
        continue;
      }
      r = a, o = c, i = Nc(c)(l);
      continue;
    }
    s = !1, u = l;
  }
  return u;
}, Mm = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, a = u.stack.length - 1 | 0;
    if (a >= 0 && a < u.stack.length) {
      e = s, r = Nc(s)(u);
      continue;
    }
    o = !1, i = u;
  }
  return i;
}, WP = (t) => (n) => {
  const e = Ne(po)(n.fromCol)(t.stack) ? i1((() => {
    const r = n.fromCol;
    return (o) => r === o;
  })())(n.row - 1 | 0)(t) : o1(n.fromCol)(n.row)(Mm(n.row - 1 | 0)(t));
  if (Ne(po)(n.toCol)(e.stack)) {
    const r = i1((() => {
      const o = n.toCol;
      return (i) => o === i;
    })())(n.row - 1 | 0)(Nc(n.row)(e));
    return { ...r, returnRows: tt(st)(n.row)()(r.returnRows) };
  }
  return o1(n.toCol)(n.row)(e);
}, qP = (t) => (n) => (e) => {
  const r = WP(n)(e);
  return Xm(e.row)(t) ? Mm(e.row)(r) : r;
}, Qu = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.5, lineJoin: eu, lineCap: hr }, Um = { r: 26, g: 26, b: 26, a: 255 }, XP = { color: { r: 130, g: 130, b: 130, a: 255 }, width: 1, lineJoin: eu, lineCap: Me }, s1 = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.5, lineJoin: eu, lineCap: Me }, YP = { color: { r: 244, g: 244, b: 244, a: 255 }, flat: !0 }, u1 = (t) => (n) => (e) => En((r) => r.col === n && r.fromRow <= e && e <= r.toRow, t), a1 = { color: { r: 90, g: 90, b: 90, a: 255 }, width: 1, lineJoin: eu, lineCap: Me }, MP = { stack: [], openedAt: G, spans: [], returnRows: G }, UP = { color: { r: 150, g: 150, b: 150, a: 255 }, width: 1, lineJoin: eu, lineCap: Me }, KP = (t) => (n) => (e) => (r) => (o) => {
  const i = n.bodyTop + (V(o) + 0.5) * n.metrics.rowHeight - n.metrics.rowHeight / 2;
  return t.strokePath([1, e, i, 2, r, i])(UP);
}, VP = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Zi(n.Applicative0())(Yt);
  return (o) => (i) => {
    const s = o.bodyTop + (V(i.fromRow) + 0.5) * o.metrics.rowHeight - o.metrics.rowHeight / 2 - 6, u = i.fromCol >= 0 && i.fromCol < o.columns.length ? o.columns[i.fromCol].x - 16 : o.metrics.padding - 16, a = [1, u, s, 2, u + 38, s, 2, u + 32, s + 14, 2, u, s + 14, ...qs], c = i.toCol >= 0 && i.toCol < o.columns.length ? o.columns[i.toCol].x + 16 : o.metrics.padding + 16, l = o.bodyTop + (V(qm(i.toRow)(i.fromRow + 1 | 0) - 1 | 0) + 0.5) * o.metrics.rowHeight + o.metrics.rowHeight / 2 + 6;
    return e.bind(t.strokePath([1, u, s, 2, c, s, 2, c, l, 2, u, l, ...qs])(a1))(() => e.bind(t.fillStrokePath(a)(QP)(a1))(() => e.bind(t.drawText({
      x: u + 6,
      y: s + 7,
      content: "par",
      font: { family: "Inter", size: 11, weight: 700 },
      color: wc,
      align: Mi,
      baseline: Ye
    }))(() => r(i.regionDividers)(KP(t)(o)(u)(c)))));
  };
}, Km = (t) => (n) => t >= n ? [] : [b(t, Ym(n)(t + 6)), ...Km(t + 10)(n)], jP = (t) => (n) => {
  if (n <= t)
    return [];
  const e = (r) => r >= n ? [] : [b(r, Ym(n)(r + 6)), ...e(r + 10)];
  return e(t);
}, ZP = (t) => {
  const n = Zi(t.Monad0().Applicative0())(Yt);
  return (e) => (r) => n(jP(e.headerTop + e.metrics.headerHeight + V(r.lifeline.createdAt) * e.metrics.rowHeight + 4)((() => {
    if (r.lifeline.destroyedAt.tag === "Just")
      return e.bodyTop + (V(r.lifeline.destroyedAt._1) + 0.5) * e.metrics.rowHeight;
    if (r.lifeline.destroyedAt.tag === "Nothing")
      return e.bodyBottom;
    f();
  })()))((o) => t.strokePath([1, r.x, o._1, 2, r.x, o._2])(XP));
}, Vm = (t) => (n) => t <= n ? [] : [b(t, DP(n)(t - 6)), ...Vm(t - 6 - 4)(n)], tA = (t) => (n) => t === n ? [] : t < n ? Km(t)(n) : Vm(t)(n), nA = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => {
    const o = e.headerTop + V(r.lifeline.createdAt) * e.metrics.rowHeight, i = e.metrics.headerWidth / 2, s = o + e.metrics.headerHeight, u = ka(r.x - i)(o)(r.x + i)(s)(6);
    return n.bind(t.fillStrokePath(ka(r.x - i)(o + 5)(r.x + i)(s + 5)(6))({ color: OP, flat: !0 })(s1))(() => n.bind(t.fillStrokePath(u)(YP)(s1))(() => t.drawText({
      x: r.x,
      y: o + e.metrics.headerHeight / 2,
      content: r.lifeline.label,
      font: { family: "Inter", size: 14, weight: 600 },
      color: wc,
      align: oo,
      baseline: Ye
    })));
  };
}, eA = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, a = u.stack.length - 1 | 0;
    if (a >= 0 && a < u.stack.length) {
      e = s, r = Nc(s)(u);
      continue;
    }
    o = !1, i = u;
  }
  return i;
}, rA = (t) => eA((() => {
  const n = t.diagram.messages.length - 1 | 0;
  return n >= 0 && n < t.diagram.messages.length ? t.diagram.messages[n].row : 0;
})())(w(qP(zP(t.diagram.frameEndRows)))(MP)(ht(
  (n) => n.kind === "Sync" || n.kind !== "SelfMsg",
  t.diagram.messages
))), oA = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => {
    const o = e.bodyTop + (V(r.row) + 0.5) * e.metrics.rowHeight, i = r.fromCol >= 0 && r.fromCol < e.columns.length ? e.columns[r.fromCol].x : e.metrics.padding, s = o - e.metrics.rowHeight * 0.3, u = i + 36, a = o + e.metrics.rowHeight * 0.3, c = i + 10, l = [1, i, a, 2, c, a - 5, 2, c, a + 5, ...qs];
    return n.bind(t.strokePath([1, i, s, 2, u, s, 2, u, a, 2, i, a])(Qu))(() => n.bind(t.fillPath(l)({
      color: Um,
      flat: !0
    }))(() => t.drawText({
      x: i + 42,
      y: o,
      content: Br(" ")(B(ro)(r.labels)),
      font: { family: "Inter", size: 12, weight: 400 },
      color: wc,
      align: Mi,
      baseline: Ye
    })));
  };
}, iA = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Zi(n.Applicative0())(Yt);
  return (o) => (i) => (s) => (u) => {
    const a = s ? o.bodyTop + (V(u.row) + 0.5) * o.metrics.rowHeight + o.metrics.rowHeight * 0.5 : o.bodyTop + (V(u.row) + 0.5) * o.metrics.rowHeight, c = u.toCol >= u.fromCol ? 1 : -1, l = (u.fromCol >= 0 && u.fromCol < o.columns.length ? o.columns[u.fromCol].x : o.metrics.padding) + (u1(i)(u.fromCol)(u.row) ? c * 6 : c * 0), _ = (u.toCol >= 0 && u.toCol < o.columns.length ? o.columns[u.toCol].x : o.metrics.padding) - (u1(i)(u.toCol)(u.row) ? c * 6 : c * 0), d = _ - c * 10, g = s ? t.strokePath([1, d, a - 5, 2, _, a, 2, d, a + 5])(Qu) : t.fillPath([1, _, a, 2, d, a - 5, 2, d, a + 5, ...qs])({ color: Um, flat: !0 });
    return e.bind(s ? r(tA(l)(_))((p) => t.strokePath([1, p._1, a, 2, p._2, a])(Qu)) : t.strokePath([1, l, a, 2, _, a])(Qu))(() => e.bind(g)(() => t.drawText({
      x: (l + _) / 2,
      y: a - 6,
      content: Br(" ")(B(ro)(u.labels)),
      font: { family: "Inter", size: 12, weight: 400 },
      color: wc,
      align: oo,
      baseline: HC
    })));
  };
}, sA = (t) => {
  const n = oA(t), e = iA(t);
  return (r) => (o) => (i) => (s) => {
    if (s.kind === "SelfMsg")
      return n(r)(s);
    if (s.kind === "Sync")
      return e(r)(o)(Xm(s.row)(i))(s);
    f();
  };
}, c1 = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.25, lineJoin: ie, lineCap: Me }, uA = { color: { r: 232, g: 232, b: 232, a: 255 }, flat: !0 }, aA = { color: { r: 252, g: 252, b: 252, a: 255 }, flat: !0 }, cA = (t) => (n) => (e) => {
  const r = e.col >= 0 && e.col < n.columns.length ? n.columns[e.col].x : n.metrics.padding, o = n.bodyTop + (V(e.fromRow) + 0.5) * n.metrics.rowHeight, i = n.bodyTop + (V(e.toRow) + 0.5) * n.metrics.rowHeight + n.metrics.rowHeight * 0.5, s = ka(r - 6)(o)(r + 6)(i)(3);
  return t.Monad0().Bind1().bind(t.fillStrokePath(ka(r - 6)(o + 5)(r + 6)(i + 5)(3))(uA)(c1))(() => t.fillStrokePath(s)(aA)(c1));
}, jm = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = Zi(n.Applicative0())(Yt), o = nA(t), i = ZP(t), s = VP(t), u = sA(t);
  return (a) => {
    const c = rA(a);
    return e.bind(t.setViewport({ vx: 0, vy: 0, vw: a.width, vh: a.height }))(() => e.bind(t.clearBackground(HP))(() => e.bind(r(a.columns)(o(a)))(() => e.bind(r(a.columns)(i(a)))(() => e.bind(r(c.spans)(cA(t)(a)))(() => e.bind(r(a.diagram.fragments)(s(a)))(() => r(a.diagram.messages)(u(a)(c.spans)(c.returnRows))))))));
  };
}, fA = /* @__PURE__ */ jm(s3);
function lA(t, n, e, r) {
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
function Ae(t) {
  return function(n) {
    return function(e) {
      return function() {
        e.setAttribute(t, n);
      };
    };
  };
}
function af(t) {
  return function() {
    return function(n) {
      return t(n)();
    };
  };
}
function cf(t) {
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
function ff(t) {
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
const Sa = function() {
  return window;
};
function gA(t) {
  return function() {
    return t.document;
  };
}
function o0(t) {
  return function(n) {
    return function() {
      return n.requestAnimationFrame(t);
    };
  };
}
function _A(t) {
  return function(n) {
    return function() {
      return n.cancelAnimationFrame(t);
    };
  };
}
const Zm = (t) => t, La = (t) => () => {
  const n = t.getBoundingClientRect?.(), e = n?.width || t.clientWidth || 0, r = n?.height || t.clientHeight || 0;
  return { width: e, height: r };
}, t$ = (t) => (n) => () => {
  let e = 0;
  const r = () => {
    e || (e = requestAnimationFrame(() => {
      e = 0, n();
    }));
  }, o = typeof ResizeObserver > "u" ? null : new ResizeObserver(r);
  return o?.observe(t), window.addEventListener("resize", r), () => {
    e && cancelAnimationFrame(e), o?.disconnect(), window.removeEventListener("resize", r);
  };
}, n$ = () => window.devicePixelRatio || 1, dA = (t) => (n) => (e) => (r) => (o) => () => {
  const i = Math.max(1, n || t.clientWidth || r), s = Math.max(1, e || t.clientHeight || o), u = "Markgraf needs more room", a = `Resize to at least ${Math.round(r)} × ${Math.round(o)} px`;
  if (t.setAttribute("data-mg-too-small", "1"), t.setAttribute("data-mg-viewport-css-width", String(n || 0)), t.setAttribute("data-mg-viewport-css-height", String(e || 0)), t.setAttribute("data-mg-camera-vw", "0"), t.setAttribute("data-mg-camera-vh", "0"), t.setAttribute("data-mg-camera-zoom", "0"), t instanceof SVGElement) {
    t.setAttribute("viewBox", `0 0 ${i} ${s}`), t.setAttribute("preserveAspectRatio", "xMidYMid meet"), t.innerHTML = `
      <rect x="0" y="0" width="${i}" height="${s}" rx="16" fill="#111827"/>
      <text x="${i / 2}" y="${s / 2 - 10}" text-anchor="middle" dominant-baseline="middle" fill="#f9fafb" font-family="system-ui, sans-serif" font-size="18" font-weight="700">${u}</text>
      <text x="${i / 2}" y="${s / 2 + 18}" text-anchor="middle" dominant-baseline="middle" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="13">${a}</text>
    `;
    return;
  }
  if (t instanceof HTMLCanvasElement) {
    const c = window.devicePixelRatio || 1;
    t.width = Math.max(1, Math.round(i * c)), t.height = Math.max(1, Math.round(s * c));
    const l = t.getContext("2d");
    if (!l) return;
    l.save(), l.scale(c, c), l.clearRect(0, 0, i, s), l.fillStyle = "#111827", l.fillRect(0, 0, i, s), l.textAlign = "center", l.textBaseline = "middle", l.fillStyle = "#f9fafb", l.font = "700 18px system-ui, sans-serif", l.fillText(u, i / 2, s / 2 - 10), l.fillStyle = "#cbd5e1", l.font = "13px system-ui, sans-serif", l.fillText(a, i / 2, s / 2 + 18), l.restore();
    return;
  }
  t.textContent = `${u}. ${a}.`;
}, e$ = (t, n) => {
  n.innerHTML = t;
}, Ea = (t, n, e) => {
  t.style.setProperty(n, e);
}, Ou = (t) => (n) => t === n, f1 = (t, n) => ({ tag: t, _1: n }), r$ = (t) => t, o$ = (t, n, e) => ({ tag: t, _1: n, _2: e }), Oo = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, hA = /* @__PURE__ */ jm(_l), Wu = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, pA = /* @__PURE__ */ o$("AutoSize"), l1 = /* @__PURE__ */ r$("CanvasRenderer"), mA = /* @__PURE__ */ r$("SvgRenderer"), $A = (t) => (n) => {
  const e = t - n * V(dn(Xe(t / n)));
  return n <= 0 ? 0 : e < 0 ? e + n : e;
}, Ti = (t) => w((n) => (e) => {
  const r = t(e);
  return () => (n(), r());
})(() => {
}), g1 = (t) => (n) => {
  const e = kn(t, v, qt);
  if (e.tag === "Just") {
    const r = kn(e._1.stopAt, v, qt);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return n;
  f();
}, i$ = (t) => (n) => ({ ...n, state: { ...n.state, camera: t }, minis: B((e) => i$(t)(e))(n.minis) }), yA = (t) => (n) => (e) => {
  const r = No(e.rootLayout)(e.camera), o = Ae("data-mg-too-small")("0")(t);
  return () => (o(), Ae("data-mg-camera-vw")(zo(r.w))(t)(), Ae("data-mg-camera-vh")(zo(r.h))(t)(), Ae("data-mg-camera-zoom")(zo(e.camera.zoom))(t)(), Ae("data-mg-viewport-css-width")(zo(n.w))(t)(), Ae("data-mg-viewport-css-height")(zo(n.h))(t)());
}, xA = (t) => {
  const n = RP(t);
  if (n.tag === "Left")
    return Et("Left", n._1);
  if (n.tag === "Right")
    return Et("Right", IP(n._1));
  f();
}, vA = (t) => (n) => (e) => {
  if (n.tag === "FixedSize")
    return () => ({ w: n._1, h: n._2 });
  if (n.tag === "AutoSize") {
    const r = La(t);
    return () => {
      const o = r(), i = o.width <= 0 ? e.width : o.width;
      return { w: i, h: o.height <= 0 ? i * e.height / Oo(1)(e.width) : o.height };
    };
  }
  f();
}, TA = (t) => (n) => (e) => {
  const r = Dk(Xk(fA(e))), o = Ae("viewBox")(r.viewBox)(t);
  return () => (o(), Ae("preserveAspectRatio")("xMidYMid meet")(t)(), n.tag === "FixedSize" ? (Ae("width")(an(dn(We(n._1))))(t)(), Ae("height")(an(dn(We(n._2))))(t)()) : n.tag === "AutoSize" || f(), e$(r.body, t));
}, wA = (t) => (n) => (e) => {
  const r = Zm(t), o = vA(t)(n)(e);
  return () => {
    const i = o(), s = n$(), u = i.w * s, a = i.h * s, c = Z1(r)(), l = td(r)(), _ = Ha(r)(u);
    c !== u && _();
    const d = Qa(r)(a);
    l !== a && d(), n.tag === "FixedSize" ? (Ea(t, "width", an(dn(We(i.w))) + "px"), Ea(t, "height", an(dn(We(i.h))) + "px")) : n.tag === "AutoSize" || f();
    const g = Vs(r)();
    Qr(g)(), Ls(g)({ scaleX: s, scaleY: s })();
    const p = np(g)({ width: i.w, height: i.h })();
    return hA(e)(p)(), Or(g)();
  };
}, NA = (t) => (n) => (e) => (r) => {
  if (n === "CanvasRenderer")
    return wA(t)(e)(r);
  if (n === "SvgRenderer")
    return TA(t)(e)(r);
  f();
}, JA = (t) => (n) => (e) => (r) => () => {
  let o = !1, i = () => {
  }, s = [];
  const u = () => {
    const l = o, _ = NA(t)(n)(e)(r);
    if (!l)
      return _();
  }, a = { time: 0, keyframe: "sequence", playing: !1 };
  return u(), i = t$(t)(() => {
    u();
    const l = s;
    return Ti((_) => _(a))(l)();
  })(), {
    play: () => {
    },
    playWith: (l) => () => {
    },
    pause: () => {
    },
    toggle: () => {
    },
    seek: (l) => () => {
    },
    seekCue: (l) => () => {
    },
    seekStep: (l) => () => {
    },
    playToCue: (l) => (_) => () => {
    },
    playToStep: (l) => (_) => () => {
    },
    playNext: (l) => () => {
    },
    playPrevious: (l) => () => {
    },
    setSpeed: (l) => () => {
    },
    currentTime: (() => {
      const l = a.time;
      return () => l;
    })(),
    currentKeyframe: (() => {
      const l = a.keyframe;
      return () => l;
    })(),
    isPlaying: () => !1,
    duration: 0,
    cues: [],
    steps: [],
    subscribe: (l) => () => {
      s = St(s)(l), l(a)();
      const d = ws((g) => !Ou(g)(l));
      return () => {
        s = d(s);
      };
    },
    subscribeCue: (l) => () => () => {
    },
    subscribeComplete: (l) => () => () => {
    },
    destroy: () => (o = !0, i())
  };
}, s$ = () => q2() / 1e3, CA = (t) => (n) => {
  const e = kn(t, v, qt);
  if (e.tag === "Just") {
    const r = kn(e._1.loop, v, qt);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return n;
  f();
}, lf = (t) => (n) => {
  const e = en((r) => r.startT <= n && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return e._1.scene._1.to;
    if (e._1.scene.tag === "DataFlow")
      return e._1.scene._1.keyframe;
    if (e._1.scene.tag === "Hold")
      return e._1.scene._1;
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode")
      return "";
    if (e._1.scene.tag === "StepScene")
      return e._1.scene._1;
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
      if (t.spans[r].scene.tag === "StepScene")
        return t.spans[r].scene._1;
      f();
    }
    return "";
  }
  f();
}, bA = (t) => (n) => (e) => {
  const r = Eh(e);
  return () => {
    const o = r(), i = Ph(e)(), s = Pl(ja)(El)(e)(sc(o)(i)(e));
    if (s.tag === "Left")
      return Et("Left", "precompute failed");
    if (s.tag === "Right")
      return Et("Right", { schedule: s._1 });
    f();
  };
}, kA = (t) => (n) => (() => {
  const e = kn(t, v, qt);
  if (e.tag === "Just")
    return { ...e._1, direction: n < 0 ? "backward" : "forward" };
  if (e.tag === "Nothing")
    return {
      direction: n < 0 ? "backward" : "forward",
      speed: wi,
      duration: wi,
      loop: wi,
      stopAt: wi
    };
  f();
})(), _1 = (t) => (n) => {
  const e = kn(t, v, qt);
  if (e.tag === "Just") {
    const r = kn(e._1.direction, v, qt);
    if (r.tag === "Just") {
      if (r._1 === "backward" || r._1 === "reverse")
        return -1;
      if (r._1 === "forward")
        return 1;
    }
    return n;
  }
  if (e.tag === "Nothing")
    return n;
  f();
}, SA = (t) => (n) => {
  const e = ht((o) => o.time <= n + 1e-4, t), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r].index : -1;
}, LA = (t) => (n) => {
  if (n.tag === "FixedSize") {
    const e = n._1 <= 0 || n._2 <= 0 ? v : T("Just", n._1 / n._2);
    return () => e;
  }
  if (n.tag === "AutoSize") {
    const e = La(t);
    return () => {
      const r = e();
      return r.width <= 0 || r.height <= 0 ? v : T("Just", r.width / r.height);
    };
  }
  f();
}, Ru = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => (l) => () => {
  const _ = s$(), d = c.value;
  c.value = _;
  const g = d === 0 ? 0 : _ - d, p = (() => {
    if (e.tag === "FixedSize")
      return { w: e._1, h: e._2 };
    if (e.tag === "AutoSize") {
      const N = La(t)();
      return { w: N.width <= 0 ? 200 : N.width, h: N.height <= 0 ? 180 : N.height };
    }
    f();
  })();
  if (p.w < 200 || p.h < 180)
    return dA(t)(p.w)(p.h)(200)(180)();
  const m = dm({ widthPx: p.w, heightPx: p.h })(s), h = Bd(m)(Wu(l)(m.totalDuration)), $ = i ? h : { ...h, levels: B((N) => ({ ...N, state: { ...N.state, frameTitle: "" } }))(h.levels) }, x = a.value, y = (() => {
    if (x.tag === "Nothing")
      return $.camera;
    if (x.tag === "Just")
      return Cd(s.cameraConfig.cameraDecay)(g)(x._1)($.camera);
    f();
  })();
  a.value = T("Just", y);
  const J = { ...$, camera: y, levels: B(i$(y))($.levels) };
  if (yA(t)(p)(J)(), n === "CanvasRenderer") {
    const N = Zm(t), C = us({ padding: 8, outputAspect: v })(J), S = (() => {
      if (e.tag === "FixedSize")
        return { w: e._1, h: e._2 };
      if (e.tag === "AutoSize") {
        const A = La(t)();
        return {
          w: A.width,
          h: A.height <= 0 ? C.vw <= 0 ? A.width : A.width * C.vh / C.vw : A.height
        };
      }
      f();
    })(), P = n$(), E = S.w * P, Q = S.h * P, W = Z1(N)(), D = td(N)(), H = Ha(N)(E);
    W !== E && H();
    const rt = Qa(N)(Q);
    D !== Q && rt(), e.tag === "FixedSize" ? (Ea(t, "width", an(dn(We(S.w))) + "px"), Ea(t, "height", an(dn(We(S.h))) + "px")) : e.tag === "AutoSize" || f();
    const ot = Vs(N)();
    Qr(ot)(), Ls(ot)({ scaleX: P, scaleY: P })();
    const M = u.value, q = Lk(r)(o)(ot)({ width: S.w, height: S.h })(J)(g)(M)();
    return u.value = q, Or(ot)();
  }
  if (n === "SvgRenderer") {
    const N = u.value, C = LA(t)(e)(), S = lS(C)(r)(o)(J)(g)(N);
    return u.value = S.springs, Ae("viewBox")(S.parts.viewBox)(t)(), Ae("preserveAspectRatio")("xMidYMid meet")(t)(), e.tag === "FixedSize" ? (Ae("width")(an(dn(We(e._1))))(t)(), Ae("height")(an(dn(We(e._2))))(t)()) : e.tag === "AutoSize" || f(), e$(S.parts.body, t);
  }
  f();
}, EA = (t) => {
  const n = $c(t)(pc)._1;
  if (n.tag === "Left")
    return Et("Left", n._1.msg);
  if (n.tag === "Right")
    return Et("Right", n._1);
  f();
}, PA = (t) => {
  const n = Ql(t);
  if (n.tag === "Left")
    return Et("Left", n._1);
  if (n.tag === "Right") {
    if (n._1.mode === "SequenceSurface") {
      const r = xA(n._1);
      if (r.tag === "Left")
        return Et("Left", r._1);
      if (r.tag === "Right")
        return Et("Right", f1("LoadedSequence", r._1));
      f();
    }
    const e = EA(n._1);
    if (e.tag === "Left")
      return Et("Left", e._1);
    if (e.tag === "Right")
      return Et("Right", f1("LoadedAnimation", e._1));
  }
  f();
}, d1 = (t) => (n) => (e) => (r) => {
  const o = e + 1e-4 >= n ? ht((s) => s.time > n + 1e-4 && s.time <= e + 1e-4, t) : [...ht((s) => s.time > n + 1e-4, t), ...ht((s) => s.time <= e + 1e-4, t)], i = e <= n + 1e-4 ? fn(ht((s) => s.time < n - 1e-4 && s.time >= e - 1e-4, t)) : [...fn(ht((s) => s.time < n - 1e-4, t)), ...fn(ht((s) => s.time >= e - 1e-4, t))];
  return (() => {
    const s = e - n;
    return s < 0 ? -s <= 1e-4 : s <= 1e-4;
  })() ? [] : r >= 0 ? o : i;
}, AA = (t) => (n) => (e) => (r) => en((o) => En((i) => i === o.kind, n) && (o.time > e + 1e-4 || (() => {
  const i = o.time - e;
  return (i < 0 ? -i <= 1e-4 : i <= 1e-4) && o.index > r;
})()))(t), RA = (t) => (n) => (e) => (r) => {
  const o = ht(
    (s) => En((u) => u === s.kind, n) && (s.time < e - 1e-4 || (() => {
      const u = s.time - e;
      return (u < 0 ? -u <= 1e-4 : u <= 1e-4) && s.index < r;
    })()),
    t
  ), i = o.length - 1 | 0;
  return i >= 0 && i < o.length ? T("Just", o[i]) : v;
}, gf = (t) => (n) => (e) => {
  const r = kn(n, v, qt);
  if (r.tag === "Just") {
    const o = kn(r._1.speed, v, qt);
    if (o.tag === "Just") {
      const i = Oo(1e-4)(o._1 < 0 ? -o._1 : o._1);
      return () => t.value = i;
    }
    if (o.tag === "Nothing") {
      const i = kn(r._1.duration, v, qt);
      if (i.tag === "Just" && e.tag === "Just") {
        const s = e._1 / i._1, u = Oo(1e-4)(s < 0 ? -s : s);
        if (i._1 > 0)
          return () => t.value = u;
      }
      return () => {
      };
    }
    f();
  }
  if (r.tag === "Nothing")
    return () => {
    };
  f();
}, FA = (t) => (n) => (e) => (r) => {
  const o = r.time - n, i = o < 0 ? -o <= 1e-4 : o <= 1e-4, s = r.time < n - 1e-4 || i && r.index < e, u = s ? -1 : 1, a = r.time > n + 1e-4 || i && r.index > e, c = kn(t, v, qt);
  if (c.tag === "Just") {
    const l = kn(c._1.direction, v, qt);
    if (l.tag === "Just") {
      if (l._1 === "forward")
        return i || a ? T("Just", 1) : v;
      if (l._1 === "backward" || l._1 === "reverse")
        return i || s ? T("Just", -1) : v;
    }
    return T("Just", u);
  }
  if (c.tag === "Nothing")
    return T("Just", u);
  f();
}, GA = (t) => (n) => (e) => (r) => (o) => (i) => (s) => () => {
  const u = { value: 1 };
  let a = 1, c = !0, l = v, _ = -1, d = !0, g = !1, p = 0, m = 0;
  const h = { value: G }, $ = { value: v }, x = { value: 0 };
  let y = !1, J = () => {
  }, N = [], C = [], S = [];
  Ru(t)(e)(r)(o)(i)(s)(n)(h)($)(x)(0)();
  const P = (L) => {
    const I = L.index;
    return () => {
      _ = I;
      const z = C;
      return Ti((U) => U(L))(z)();
    };
  }, E = (L) => () => {
    const I = N, z = d, U = { time: L, keyframe: lf(n)(L), playing: z };
    return Ti((K) => K(U))(I)();
  }, Q = () => (d = !1, l = v, E(p)()), W = (L) => () => (p = L, Ru(t)(e)(r)(o)(i)(s)(n)(h)($)(x)(L)(), E(L)()), D = (L) => {
    const I = Oo(0)(Wu(n.totalDuration)(L));
    return () => (p = I, _ = SA(n.cues)(I), m = 0, l = v, $.value = v, Ru(t)(e)(r)(o)(i)(s)(n)(h)($)(x)(I)(), E(I)());
  }, H = (L, I, z, U, K) => () => {
    d = !1, l = v;
    const O = p;
    E(O)();
    const Z = { reason: L, direction: I < 0 ? "backward" : "forward", targetId: z, targetStep: U, reached: K, time: O }, et = S;
    return Ti((nt) => nt(Z))(et)();
  }, rt = () => {
    if (!y && (g = !1, d)) {
      const z = s$(), U = m;
      m = z;
      const K = u.value, O = a, Z = c, et = l, nt = p, gt = U === 0 ? nt + 0 * K * O : nt + (z - U) * K * O;
      if (et.tag === "Just") {
        const ct = O >= 0 ? et._1.cue.time >= nt - 1e-4 && et._1.cue.time <= gt + 1e-4 : et._1.cue.time <= nt + 1e-4 && et._1.cue.time >= gt - 1e-4, $t = ct ? et._1.cue.time : Oo(0)(Wu(n.totalDuration)(gt));
        (O >= 0 ? $t + 1e-4 < nt : $t > nt + 1e-4) && ($.value = v), W($t)(), Ti((Rt) => P(Rt))(d1(n.cues)(nt)($t)(O))();
        const Pt = H("target", O, et._1.targetId, et._1.targetStep, !0);
        return ct && Pt(), ct ? void 0 : ot();
      }
      if (et.tag === "Nothing") {
        const ct = O >= 0 ? n.totalDuration : 0, $t = !Z && (O >= 0 ? ct >= nt - 1e-4 && ct <= gt + 1e-4 : ct <= nt + 1e-4 && ct >= gt - 1e-4), Pt = Z ? $A(gt)(n.totalDuration + 0.8) : Oo(0)(Wu(n.totalDuration)(gt));
        (O >= 0 ? Pt + 1e-4 < nt : Pt > nt + 1e-4) && ($.value = v), W(Pt)(), Ti((rn) => P(rn))(d1(n.cues)(nt)(Pt)(O))();
        const Rt = H("boundary", O, "", "", !0);
        return $t && Rt(), $t ? void 0 : ot();
      }
      f();
    }
  }, ot = () => {
    if (!y && !g) {
      g = !0;
      const z = Sa();
      o0(rt)(z)();
    }
  }, M = () => (m = 0, d = !0, ot()), q = () => (a = 1, c = !0, l = v, M(), E(p)()), A = (L, I) => () => {
    const z = p;
    return a = L, c = !1, l = v, gf(u)(I)(T("Just", L >= 0 ? n.totalDuration - z : z))(), M();
  }, R = (L, I) => () => {
    const z = p, U = _, K = FA(I)(z)(U)(L);
    if (K.tag === "Nothing")
      return A(_1(I)(1), I)();
    if (K.tag === "Just") {
      const O = L.time - z, Z = O < 0 ? -O : O;
      return a = K._1, c = !1, l = T("Just", { cue: L, direction: K._1, targetId: L.id, targetStep: L.name }), gf(u)(I)(T("Just", Z))(), Z <= 1e-4 ? (D(L.time)(), P(L)(), H("target", K._1, L.id, L.name, !0)()) : M();
    }
    f();
  };
  return J = t$(t)(() => {
    if (!y) {
      const I = p;
      return Ru(t)(e)(r)(o)(i)(s)(n)(h)($)(x)(I)(), E(I)();
    }
  })(), M(), {
    play: q,
    playWith: (L) => {
      const I = _1(L)(1);
      return () => (a = I, c = CA(L)(!1), l = v, gf(u)(L)(v)(), M(), E(p)());
    },
    pause: Q,
    toggle: () => d ? Q() : q(),
    seek: (L) => D(L),
    seekCue: (L) => {
      const I = en((z) => z.id === L)(n.cues);
      if (I.tag === "Nothing")
        return () => {
        };
      if (I.tag === "Just") {
        const z = I._1, U = D(z.time);
        return () => (U(), P(z)());
      }
      f();
    },
    seekStep: (L) => {
      const I = en((z) => z.kind === "step" && z.name === L)(n.cues);
      if (I.tag === "Nothing")
        return () => {
        };
      if (I.tag === "Just") {
        const z = I._1, U = D(z.time);
        return () => (U(), P(z)());
      }
      f();
    },
    playToCue: (L) => (I) => {
      const z = en((U) => U.id === L)(n.cues);
      if (z.tag === "Nothing")
        return () => {
        };
      if (z.tag === "Just")
        return R(z._1, I);
      f();
    },
    playToStep: (L) => (I) => {
      const z = en((U) => U.kind === "step" && U.name === L)(n.cues);
      if (z.tag === "Nothing")
        return () => {
        };
      if (z.tag === "Just")
        return R(z._1, I);
      f();
    },
    playNext: (L) => () => {
      const I = p, z = _, U = AA(n.cues)(g1(L)(["step"]))(I)(z);
      if (U.tag === "Nothing")
        return A(1, L)();
      if (U.tag === "Just")
        return R(U._1, L)();
      f();
    },
    playPrevious: (L) => () => {
      const I = p, z = _, U = RA(n.cues)(g1(L)(["step"]))(I)(z);
      if (U.tag === "Nothing")
        return A(-1, L)();
      if (U.tag === "Just")
        return R(U._1, kA(L)(-1))();
      f();
    },
    setSpeed: (L) => {
      const I = Oo(1e-4)(L < 0 ? -L : L);
      return () => u.value = I;
    },
    currentTime: () => p,
    currentKeyframe: () => {
      const L = p;
      return lf(n)(L);
    },
    isPlaying: () => d,
    duration: n.totalDuration,
    cues: n.cues,
    steps: ht((L) => L.kind === "step", n.cues),
    subscribe: (L) => () => {
      N = St(N)(L);
      const z = p, U = d;
      L({ time: z, keyframe: lf(n)(z), playing: U })();
      const K = ws((O) => !Ou(O)(L));
      return () => {
        N = K(N);
      };
    },
    subscribeCue: (L) => () => {
      C = St(C)(L);
      const z = ws((U) => !Ou(U)(L));
      return () => {
        C = z(C);
      };
    },
    subscribeComplete: (L) => () => {
      S = St(S)(L);
      const z = ws((U) => !Ou(U)(L));
      return () => {
        S = z(S);
      };
    },
    destroy: () => (y = !0, J())
  };
}, IA = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = PA(n);
  if (u.tag === "Left")
    return () => Et("Left", u._1);
  if (u.tag === "Right") {
    if (u._1.tag === "LoadedAnimation") {
      const a = bA()(r)(u._1._1);
      return () => {
        const c = a();
        if (c.tag === "Left")
          return Et("Left", c._1);
        if (c.tag === "Right") {
          const l = GA(t)(c._1.schedule)(e)(r)(o)(i)(s)();
          return Et("Right", l);
        }
        f();
      };
    }
    if (u._1.tag === "LoadedSequence") {
      const a = JA(t)(e)(r)(u._1._1);
      return () => {
        const c = a();
        return Et("Right", c);
      };
    }
  }
  f();
}, Ol = () => document.createElement("canvas"), BA = (t, n) => {
  t.letterSpacing = n;
}, DA = (t, n) => {
  t.fontKerning = n;
}, u$ = /* @__PURE__ */ js(BA), Wl = /* @__PURE__ */ js(DA), zA = { alpha: !0, premultipliedAlpha: !0, antialias: !0, depth: !1 }, HA = (t) => t.getContext("webgl", zA), QA = (t, n, e) => {
  const r = (i, s) => {
    const u = t.createShader(i);
    return t.shaderSource(u, s), t.compileShader(u), t.getShaderParameter(u, t.COMPILE_STATUS) || console.error(t.getShaderInfoLog(u)), u;
  }, o = t.createProgram();
  return t.attachShader(o, r(t.VERTEX_SHADER, n)), t.attachShader(o, r(t.FRAGMENT_SHADER, e)), t.linkProgram(o), t.getProgramParameter(o, t.LINK_STATUS) || console.error(t.getProgramInfoLog(o)), t.useProgram(o), o;
}, OA = (t, n) => {
  const e = t.createBuffer();
  t.bindBuffer(t.ARRAY_BUFFER, e), t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), t.STATIC_DRAW);
  const r = t.getAttribLocation(n, "position");
  t.enableVertexAttribArray(r), t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0);
}, WA = (t, n) => t.getExtension(n), qA = (t, n, e) => t.getUniformLocation(n, e), XA = (t, n, e) => t.uniform1f(n, e), YA = (t, n, e, r) => t.uniform2f(n, e, r), MA = (t, n, e) => t.uniform1i(n, e), UA = (t, n, e) => t.uniform4fv(n, new Float32Array(e)), KA = (t, n, e) => t.uniform2fv(n, new Float32Array(e)), VA = (t, n, e) => t.uniform1fv(n, new Float32Array(e)), jA = (t) => t.createTexture(), ZA = (t, n, e, r) => {
  t.activeTexture(t.TEXTURE0 + r), t.bindTexture(t.TEXTURE_2D, n), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
}, tR = (t, n, e, r) => {
  (n.width !== e || n.height !== r) && (n.width = e, n.height = r), t.viewport(0, 0, e, r);
}, nR = (t) => {
  t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT);
}, eR = (t) => t.drawArrays(t.TRIANGLE_STRIP, 0, 4), rR = (t) => ({ width: t.clientWidth, height: t.clientHeight }), oR = () => window.devicePixelRatio, h1 = () => performance.now(), Pa = /* @__PURE__ */ B0(ZA), sn = /* @__PURE__ */ rs(qA), iR = /* @__PURE__ */ rs(UA), hs = (t) => (n) => {
  const e = iR(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, sR = /* @__PURE__ */ rs(KA), ps = (t) => (n) => {
  const e = sR(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, uR = /* @__PURE__ */ B0(YA), ao = /* @__PURE__ */ rs(MA), aR = /* @__PURE__ */ rs(VA), cr = (t) => (n) => {
  const e = aR(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, Tr = /* @__PURE__ */ rs(XA), cR = /* @__PURE__ */ js(OA), fR = /* @__PURE__ */ B0(tR), lR = /* @__PURE__ */ js(WA), gR = /* @__PURE__ */ es(HA), _R = /* @__PURE__ */ es(eR), p1 = /* @__PURE__ */ es(jA), dR = /* @__PURE__ */ es(rR), hR = /* @__PURE__ */ es(nR), pR = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, m1 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, a$ = /* @__PURE__ */ (() => {
  const t = he.unfoldr(Ke);
  return (n) => t(ge("IterNode", n, Ue));
})(), mR = /* @__PURE__ */ Ks(si), $R = (t) => bt((n) => n)(B((n) => {
  if (n.target.tag === "TokenWindow") {
    const e = pR(n.target._2)(t.layout.edges);
    if (e.tag === "Just")
      return T(
        "Just",
        {
          points: B((() => {
            const r = t.placement;
            return (o) => ({ x: o.x * r.scale + r.tx, y: o.y * r.scale + r.ty });
          })())([
            ...(() => {
              const r = m1(n.target._4)(t.layout.nodes);
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
                return fn(e._1);
              f();
            })(),
            ...(() => {
              const r = m1(n.target._5)(t.layout.nodes);
              if (r.tag === "Nothing")
                return [];
              if (r.tag === "Just")
                return [{ x: r._1.x + r._1.w / 2, y: r._1.y + r._1.h / 2 }];
              f();
            })()
          ]),
          labels: B(ro)(n.target._6),
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
})(t.windows)), yR = (t) => t.msg + " (line " + an(t.line) + ", cols " + an(t.column) + "-" + an(t.endColumn) + ")", xR = (t) => (n) => (e) => (r) => {
  const o = r._2.w * e.scale, i = r._2.h * e.scale;
  return {
    id: r._1,
    path: B(ro)(n),
    x: r._2.x * e.scale + e.tx + o / 2,
    y: r._2.y * e.scale + e.ty + i / 2,
    w: o,
    h: i,
    label: r._2.label,
    shape: (() => {
      if (r._2.shape === "Rectangle")
        return 0;
      if (r._2.shape === "Cylinder")
        return 1;
      if (r._2.shape === "Parallelogram")
        return 2;
      if (r._2.shape === "Diamond")
        return 3;
      if (r._2.shape === "Ellipse")
        return 4;
      if (r._2.shape === "Document")
        return 5;
      if (r._2.shape === "Cloud")
        return 6;
      f();
    })(),
    depth: t,
    labelScale: e.scale
  };
}, vR = (t) => (n) => (e) => (r) => ({
  id: r._1,
  path: B(ro)(n),
  points: B((o) => ({ x: o.x * e.scale + e.tx, y: o.y * e.scale + e.ty }))(r._2),
  depth: t,
  arrowhead: (() => {
    const o = wo("conn:")(r._1);
    if (o.tag === "Just")
      return !1;
    if (o.tag === "Nothing")
      return !0;
    f();
  })()
}), TR = (t) => B(xR(t.path.length)(t.path)(t.placement))(a$(t.layout.nodes)), $1 = (t) => (n) => {
  const e = en((r) => mR(r.path)(n))(t);
  if (e.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (e.tag === "Just") {
    const r = hn(e._1.layout), o = r.w * e._1.placement.scale, i = r.h * e._1.placement.scale;
    return { x: r.x * e._1.placement.scale + e._1.placement.tx + o / 2, y: r.y * e._1.placement.scale + e._1.placement.ty + i / 2, w: o, h: i };
  }
  f();
}, wR = (t) => B(vR(t.path.length)(t.path)(t.placement))(a$(t.layout.edges)), NR = (t) => (n) => ({
  startT: n.startT,
  endT: n.endT,
  dir: (() => {
    if (n.direction === "DiveIn")
      return 1;
    if (n.direction === "DiveOut")
      return 0;
    f();
  })(),
  parent: $1(t)(n.parentPath),
  child: $1(t)(n.childPath)
}), JR = (t) => {
  const n = Ql(t), e = (() => {
    if (n.tag === "Left") {
      const r = n._1;
      return (o) => Et("Left", r);
    }
    if (n.tag === "Right") {
      const r = n._1;
      return (o) => o(r);
    }
    f();
  })()((r) => {
    const o = $c(r)(pc)._1;
    if (o.tag === "Left")
      return Et("Left", yR(o._1));
    if (o.tag === "Right") {
      const i = Pl(ja)(El)(o._1)(sc(G)(G)(o._1));
      if (i.tag === "Left")
        return Et("Left", "schedule: " + an(i._1.length) + " error(s)");
      if (i.tag === "Right")
        return Et(
          "Right",
          {
            ok: !0,
            error: "",
            duration: i._1.totalDuration,
            nodes: wt(i._1.segments)(TR),
            edges: wt(i._1.segments)(wR),
            tokens: wt(i._1.segments)($R),
            dives: B(NR(i._1.segments))(i._1.dives)
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
}, go = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, CR = (t) => (n) => (e) => {
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
}, i0 = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, y1 = (t) => (n) => (e) => (r) => (o) => {
  const i = t + e + r, s = r * 2, u = go(0)(n - t - 2 * e), a = i + u - s;
  return s <= u ? CR(i)(a)(o) : t + (n - t) / 2;
}, x1 = (t) => (n) => ({ ...n, cx: y1(t.minX)(t.maxX)(t.margin)(n.hw)(n.cx), cy: y1(t.minY)(t.maxY)(t.margin)(n.hh)(n.cy) }), bR = (t) => (n) => {
  const e = go(0)(t.minY + t.margin - (n.cy - n.hh)) + go(0)(n.cy + n.hh - (t.maxY - t.margin)), r = go(0)(t.minX + t.margin - (n.cx - n.hw)) + go(0)(n.cx + n.hw - (t.maxX - t.margin));
  return r * n.hh * 2 + e * n.hw * 2 + r * e;
}, kR = (t) => (n) => (e) => {
  const r = w(go)(0)(B((o) => n.cx - n.hw < o.cx + o.hw + t && n.cx + n.hw > o.cx - o.hw - t && n.cy - n.hh < o.cy + o.hh + t && n.cy + n.hh > o.cy - o.hh - t ? i0((o.cx + o.hw + t - (n.cx - n.hw)) / 0.7071067811865476)((o.cy + o.hh + t - (n.cy - n.hh)) / 0.7071067811865476) : 0)(e));
  return { ...n, cx: n.cx + r * 0.7071067811865476, cy: n.cy + r * 0.7071067811865476 };
}, SR = (t) => (n) => {
  const e = i0(t.cx + t.hw)(n.cx + n.hw) - go(t.cx - t.hw)(n.cx - n.hw), r = i0(t.cy + t.hh)(n.cy + n.hh) - go(t.cy - t.hh)(n.cy - n.hh);
  return t.cx - t.hw < n.cx + n.hw && t.cx + t.hw > n.cx - n.hw && t.cy - t.hh < n.cy + n.hh && t.cy + t.hh > n.cy - n.hh ? e * r : 0;
}, LR = (t) => (n) => (e) => (r) => (o) => {
  const i = o.cy - o.dotY, s = o.cy - r.cy;
  return (() => {
    const u = o.cx - o.dotX, a = o.cx - r.cx;
    return 1e6 * bR(t)(o) + 1e4 * w((c) => (l) => c + SR(o)(l))(0)(n) + 0.05 * (a * a + s * s) + 0.01 * (u * u + i * i);
  })() + (o.cy < e.dotY ? 100 : 0);
}, ER = (t) => (n) => (e) => (r) => {
  const o = (s) => {
    const u = x1(t)(s);
    return { chip: u, score: LR(t)(n)(e)(r)(u) };
  }, i = Ht(
    (s) => v,
    (s) => (u) => T("Just", { head: s, tail: u }),
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
    return x1(t)(r);
  if (i.tag === "Just")
    return w((s) => (u) => {
      const a = o(u);
      return a.score < s.score ? a : s;
    })(o(i._1.head))(i._1.tail).chip;
  f();
}, PR = (t) => (n) => (e) => (r) => w((o) => (i) => {
  const s = kR(n)(i.chip)(o.obstacles), u = s.cx - s.hw >= t.minX + t.margin && s.cx + s.hw <= t.maxX - t.margin && s.cy - s.hh >= t.minY + t.margin && s.cy + s.hh <= t.maxY - t.margin ? s : ER(t)(o.obstacles)(i.chip)(s), a = u.cx - i.chip.cx, c = u.cy - i.chip.cy;
  return {
    resolved: St(o.resolved)({ chip: u, glyphs: B((l) => ({ ...l, cx: l.cx + a, cy: l.cy + c }))(i.glyphs) }),
    obstacles: St(o.obstacles)({ cx: u.cx, cy: u.cy, hw: u.hw, hh: u.hh })
  };
})({ resolved: [], obstacles: e })(r).resolved, c$ = (t) => t, v1 = /* @__PURE__ */ c$("Visible"), AR = /* @__PURE__ */ c$("Hidden");
function RR(t) {
  return t.readyState;
}
const FR = (t) => () => {
  const n = RR(t);
  return n === "visible" ? v1 : n === "hidden" ? AR : v1;
}, GR = (t) => () => {
  const n = Sa(), e = gA(n)(), r = Sa();
  let o = !0;
  const i = () => {
    const _ = o, d = FR(e)();
    return t(_ && d === "Visible")();
  }, s = af((_) => i)();
  cf("visibilitychange")(s)(!1)(e)();
  const u = af((_) => () => (o = !1, i()))();
  cf("blur")(u)(!1)(r)();
  const a = ff("blur")(u)(!1)(r), c = af((_) => () => (o = !0, i()))();
  cf("focus")(c)(!1)(r)();
  const l = ff("focus")(c)(!1)(r);
  return () => (ff("visibilitychange")(s)(!1)(e)(), a(), l());
};
function IR(t, n, e) {
  return e.then(t, n);
}
function T1(t) {
  return Promise.resolve(t);
}
function BR(t, n, e) {
  return e instanceof Error ? t(e) : n;
}
const ql = (t) => (n) => PC((e) => () => (IR(
  (r) => {
    const i = e(Et("Right", r))();
    return T1(i);
  },
  (r) => {
    const i = e(Et("Left", t(r)))();
    return T1(i);
  },
  n
), AC)), Xl = (t) => {
  const n = BR(qt, v, t), e = dy(Fe)("String")(t), r = (() => {
    const o = (() => {
      if (e.tag === "Left")
        return v;
      if (e.tag === "Right")
        return T("Just", ag(e._1));
      f();
    })();
    return n.tag === "Nothing" ? o : n;
  })();
  if (r.tag === "Nothing")
    return ag("Promise failed, couldn't extract JS Error or String");
  if (r.tag === "Just")
    return r._1;
  f();
}, w1 = _e.createElement;
_e.Fragment;
function ko(t) {
  return (n) => Array.isArray(n.children) ? w1.apply(null, [t, n].concat(n.children)) : w1(t, n);
}
function DR(t) {
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
      const r = _e.forwardRef(
        (o, i) => t(n)(e(o, i))
      );
      return r.displayName = n, r;
    };
  };
}
const Yl = /* @__PURE__ */ DR(ko), f$ = /* @__PURE__ */ Yl("div")(), l$ = /* @__PURE__ */ Yl("canvas")(), zR = (t, n) => {
  const e = _e.useRef(n);
  return e.current !== n && !t(e.current, n) && (e.current = n), e.current;
};
_e.memo;
_e.memo;
function N1(t, n) {
  const [e, r] = _e.useState(
    typeof n == "function" ? () => n : n
  );
  return r.hasOwnProperty("$$reactBasicHooks$$cachedSetState") || (r.$$reactBasicHooks$$cachedSetState = (o) => () => r(o)), t(e, r.$$reactBasicHooks$$cachedSetState);
}
function Ss(t, n, e) {
  const r = zR(t, n);
  _e.useEffect(e, [r]);
}
const re = _e.useRef;
function HR(t) {
  return t.current;
}
function QR(t, n) {
  t.current = n;
}
_e.useContext;
_e.useDebugValue;
_e.useId;
_e.useDeferredValue;
_e.useSyncExternalStore;
_e.useSyncExternalStore;
function Ml(t, n) {
  return n.displayName = t, n.toString = () => t, n;
}
_e.useEffectEvent || _e.experimental_useEffectEvent;
const Tn = /* @__PURE__ */ js(QR), g$ = (t) => (n) => (e) => () => Ss((r, o) => t.eq(r)(o), n, e), $n = /* @__PURE__ */ es(HR), OR = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, _$ = (t) => {
  const n = {
    apply: (e) => (r) => () => {
      const o = e(), i = r();
      return o(i);
    },
    Functor0: () => OR
  };
  return { pure: (e) => () => e, Apply0: () => n };
}, WR = () => typeof document < "u" && document.fonts ? document.fonts : null, Ul = (t) => {
  const n = WR();
  return n ? n.load(t).then(() => {
  }) : Promise.resolve();
}, qR = "attribute vec2 position; void main(){ gl_Position = vec4(position, 0.0, 1.0); }", XR = `
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
  uniform float uNodeAlpha[24]; // semantic node pop/fade alpha for this frame
  uniform vec4 uEdge[48];       // (x1, y1, x2, y2) orthogonal route segments
  uniform float uEdgeAlpha[48]; // semantic edge fade alpha for this frame
  uniform vec4 uArrow[32];      // (tipX, tipY, dirX, dirY) one per edge
  uniform float uArrowAlpha[32]; // edge fade/arrival alpha for each arrowhead
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
      float vis = visForDepth(uNodeDepth[i]) * uNodeAlpha[i];
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
      float vis = visForDepth(uEdgeDepth[i]) * uEdgeAlpha[i];
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
      float vis = visForDepth(uArrowDepth[i]) * uArrowAlpha[i];
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
`, YR = (t, n, e, r, o) => {
  const i = (c) => {
    c.preventDefault(), n(c.deltaX)(c.deltaY)(c.ctrlKey ? 1 : 0)();
  }, s = (c) => {
    c.preventDefault(), e(c.clientX)(c.clientY)();
  }, u = (c) => r(c.clientX)(c.clientY)(c.buttons)(c.shiftKey ? 1 : 0)(), a = (c) => o(c.clientX)(c.clientY)();
  return t.addEventListener("wheel", i, { passive: !1 }), t.addEventListener("pointerdown", s), window.addEventListener("pointermove", u), window.addEventListener("pointerup", a), () => {
    t.removeEventListener("wheel", i), t.removeEventListener("pointerdown", s), window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", a);
  };
}, MR = /* @__PURE__ */ Ks(si), J1 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, cn = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Aa = /* @__PURE__ */ w(gr)(0), UR = (t) => (n) => (e) => {
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
}, d$ = /* @__PURE__ */ (() => {
  const t = vo.traverse(ii);
  return (n) => (e) => t(e)(n);
})(), C1 = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
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
        o = !1, i = T("Just", s._4);
        continue;
      }
    }
    f();
  }
  return i;
}, Ce = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, KR = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, VR = (t) => w((n) => (e) => {
  if (n.tag === "Nothing")
    return T("Just", e);
  if (n.tag === "Just")
    return T("Just", t(n._1)(e) === "LT" ? n._1 : e);
  f();
})(v), jR = /* @__PURE__ */ cy(ii)(G0), ZR = /* @__PURE__ */ Gr(ii)(Ga), b1 = (t) => (n) => (e) => {
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
}, t6 = _$().pure, n6 = /* @__PURE__ */ ko(f$), e6 = /* @__PURE__ */ ko(l$), k1 = (t) => (n) => {
  const e = qe(t);
  if (e.tag === "Just") {
    const r = qe(e._1.init);
    if (r.tag === "Just")
      return T("Just", n(r._1.last)(e._1.last));
    if (r.tag === "Nothing")
      return v;
    f();
  }
  if (e.tag === "Nothing")
    return v;
  f();
}, S1 = (t) => (n) => (e) => ({ chip: { ...e.chip, cx: e.chip.cx + t, cy: e.chip.cy + n }, glyphs: B((r) => ({ ...r, cx: r.cx + t, cy: r.cy + n }))(e.glyphs) }), r6 = /* @__PURE__ */ my(YR), o6 = (t) => ({ cx: t.x, cy: t.y, hw: t.hw, hh: t.hh }), h$ = (t) => (n) => {
  const e = (r) => [r, ...wt(r.minis)((o) => e(o))];
  return en((r) => MR(B(ro)(r.segment.path))(t))(wt(n.levels)(e));
}, i6 = (t) => (n) => {
  if (t.tag === "Nothing")
    return { alpha: 1, scale: 1 };
  if (t.tag === "Just") {
    const e = h$(n.path)(t._1);
    if (e.tag === "Just") {
      const r = J1(n.id)(e._1.state.nodes);
      if (r.tag === "Just") {
        const o = ci(r._1);
        return {
          alpha: (() => {
            const i = J1(n.id)(e._1.state.nodeFadeAlpha);
            if (i.tag === "Nothing")
              return o.alpha * 1;
            if (i.tag === "Just")
              return o.alpha * i._1;
            f();
          })(),
          scale: o.scale
        };
      }
      if (r.tag === "Nothing")
        return { alpha: 0, scale: 1 };
      f();
    }
    if (e.tag === "Nothing")
      return { alpha: 0, scale: 1 };
  }
  f();
}, Ra = (t) => (n) => (e) => ({ cx: t.cx + (n.cx - t.cx) * e, cy: t.cy + (n.cy - t.cy) * e, hw: t.hw * zi(n.hw / cn(1e-4)(t.hw))(e), hh: t.hh * zi(n.hh / cn(1e-4)(t.hh))(e) }), Vr = (t) => (n) => ne((n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y)), s6 = (t) => (n) => {
  const e = (r) => cn(0)(1 - Vr(n)({ x: r.x, y: r.y }) / (cn(r.hw)(r.hh) + t.ballRadius));
  return w((r) => (o) => e(o) > r.glow ? { glow: e(o), x: o.x, y: o.y } : r)({ glow: 0, x: 0, y: 0 })(t.worldNodes);
}, u6 = (t) => {
  const n = Ln(Vn, t, At(1, t.length, t)), e = Aa(B((r) => Vr(r._1)(r._2))(n));
  return e <= 1e-9 ? [] : w((r) => (o) => {
    const i = r.distance + Vr(o._1)(o._2);
    return { distance: i, segments: St(r.segments)({ from: o._1, to: o._2, lo: r.distance / e, hi: i / e }) };
  })({ distance: 0, segments: [] })(n).segments;
}, a6 = (t) => (n) => (e) => (r) => (o) => {
  const i = Jl({ width: n, height: e })((() => {
    const a = No(r)(o);
    return { vx: a.x, vy: a.y, vw: a.w, vh: a.h };
  })()), s = (i.vx + i.vw / 2 - t.midX) * t.scaleFactor, u = -(i.vy + i.vh / 2 - t.midY) * t.scaleFactor;
  return {
    centerX: s,
    centerY: u,
    camZ: i.vh * t.scaleFactor,
    viewport: { cx: s, cy: u, hw: i.vw * t.scaleFactor / 2, hh: i.vh * t.scaleFactor / 2 }
  };
}, c6 = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (t.cameraSchedule.tag === "Just") {
    const s = dm({ widthPx: e, heightPx: r })(t.cameraSchedule._1), u = qi(s.cameraConfig)(s.layout)(s.cameraSpans)(i).camera, a = (() => {
      if (n.tag === "Nothing")
        return u;
      if (n.tag === "Just")
        return Cd(s.cameraConfig.cameraDecay)(o)(n._1)(u);
      f();
    })();
    return T("Just", { camera: a, world: a6(t)(e)(r)(s.layout)(a) });
  }
  if (t.cameraSchedule.tag === "Nothing")
    return v;
  f();
}, Jc = "500 " + an(dn(We(144))) + "px Ilisarniq, ui-sans-serif, system-ui, sans-serif", Kl = /* @__PURE__ */ bt((t) => t)(/* @__PURE__ */ B(kx)(/* @__PURE__ */ Vt(32, 126))), f6 = nr((Kl.length + 16 | 0) - 1 | 0, 16), l6 = (t) => V(UR(0)(Kl.length - 1 | 0)(Sr(t) - 32 | 0)), L1 = V(16) * 76, E1 = V(f6) * 100, P1 = () => {
  const t = Ol();
  Ha(t)(L1)(), Qa(t)(E1)();
  const n = Vs(t)();
  v0(n)({ x: 0, y: 0, width: L1, height: E1 })(), $0(n)("#fff")(), Oa(n)("500 64px Ilisarniq, ui-sans-serif, system-ui, sans-serif")(), R0(n)(b0)(), A0(n)(C0)(), Wl(n)("normal")();
  const e = d$(Xt(Vn)(Kl))((r) => {
    const o = ns(r._2), i = T0(n)(o)(V(jr(r._1)(16)) * 76 + 38)(V(nr(r._1, 16)) * 100 + 50);
    return () => (i(), od(n)(o)().width / 64);
  })();
  return { canvas: t, advances: e };
}, A1 = (t) => (n) => 2.36 * cn(t.hw / cn(0.2)(n))(t.hh), g6 = (t) => (n) => (e) => () => {
  const r = P1();
  Pa(t)(n)(r.canvas)(1)(), Tn(e)(r.advances)(), sl(
    ul,
    Xo(Xo(Yo(() => Ul("500 64px Ilisarniq, ui-sans-serif, system-ui, sans-serif")))(ql(Xl)))(() => Yo(() => {
      const i = P1();
      return Pa(t)(n)(i.canvas)(1)(), Tn(e)(i.advances)();
    }))
  )().run();
}, R1 = (t) => (n) => {
  if (t.tag === "Nothing")
    return { lo: 0, hi: 1, alpha: 1 };
  if (t.tag === "Just") {
    const e = h$(n.path)(t._1);
    if (e.tag === "Just") {
      const r = C1(n.id)(e._1.state.edges);
      if (r.tag === "Just") {
        const o = op(r._1);
        return {
          lo: o.lo,
          hi: o.hi,
          alpha: (() => {
            const i = C1(n.id)(e._1.state.edgeFadeAlpha);
            if (i.tag === "Nothing")
              return 1;
            if (i.tag === "Just")
              return i._1;
            f();
          })()
        };
      }
      if (r.tag === "Nothing")
        return { lo: 0, hi: 0, alpha: 0 };
      f();
    }
    if (e.tag === "Nothing")
      return { lo: 0, hi: 0, alpha: 0 };
  }
  f();
}, _6 = (t) => (n) => (e) => (r) => r < 0.31999999999999995 ? Ra(n)(e.parent)((() => {
  const o = r / 0.31999999999999995;
  return o * o * (3 - 2 * o);
})()) : Ra(e.parent)(t)((() => {
  const o = (r - 0.31999999999999995) / 0.68;
  return o * o * (3 - 2 * o);
})()), d6 = (t) => (n) => (e) => e < 0.68 ? Ra(t)(n.parent)((() => {
  const r = e / 0.68;
  return r * r * (3 - 2 * r);
})()) : Ra(n.parent)(n.child)((() => {
  const r = (e - 0.68) / 0.31999999999999995;
  return r * r * (3 - 2 * r);
})()), h6 = (t) => (n) => (e) => (r) => e.dir > 0.5 ? d6(n)(e)(r) : _6(t)(n)(e)(r), p$ = (t) => (n) => cn(0)(Ce(1)((n - t.startT) / cn(1e-4)(t.endT - t.startT))), p6 = (t) => (n) => (e) => w((r) => (o) => e <= o.startT ? r : h6(t)(r)(o)(p$(o)(e)))(t)(n), m6 = (t) => (n) => {
  if (t.dir > 0.5) {
    const r = cn(0)(Ce(1)((n - 0.68) / 0.31999999999999995));
    return r * r * (3 - 2 * r);
  }
  const e = cn(0)(Ce(1)(n / 0.31999999999999995));
  return e * e * (3 - 2 * e);
}, $6 = (t) => (n) => w((e) => (r) => n <= r.startT ? e : n >= r.endT ? r.dir > 0.5 ? e + 1 : e + -1 : e + (r.dir > 0.5 ? 1 : -1) * m6(r)(p$(r)(n)))(0)(t), y6 = (t) => (n) => {
  const e = 1 - t.holdPre - t.holdPost;
  return e <= 0 ? n < 0.5 ? 0 : 1 : cn(0)(Ce(1)((n - t.holdPre) / e));
}, x6 = (t) => (n) => (e) => {
  const r = cn(0)(Ce(1)((t * V(n + 1 | 0) - V(e)) / 1.5));
  return r * r * (3 - 2 * r);
}, v6 = (t) => (n) => {
  const e = n.length === 0 ? [""] : n, r = B((_) => V(KR(1)(mr(_))))(e), o = cn(1)(Aa(r)), i = t * o, u = ((_) => (d) => (g) => {
    let p = _, m = d, h = g, $ = !0, x;
    for (; $; ) {
      const y = p, J = m, C = Ht((S) => v, (S) => (P) => T("Just", { head: S, tail: P }), h);
      if (C.tag === "Nothing") {
        $ = !1, x = e.length - 1 | 0;
        continue;
      }
      if (C.tag === "Just") {
        if (J + C._1.head >= i) {
          $ = !1, x = y;
          continue;
        }
        p = y + 1 | 0, m = J + C._1.head, h = C._1.tail;
        continue;
      }
      f();
    }
    return x;
  })(0)(0)(r), a = Aa(u < 1 ? [] : At(0, u, r)), c = a / o;
  if (u >= 0 && u < r.length) {
    const _ = (a + r[u]) / o;
    return { line: u >= 0 && u < e.length ? e[u] : "", phase: _ <= c ? 1 : cn(0)(Ce(1)((t - c) / (_ - c))) };
  }
  const l = (a + 1) / o;
  return { line: u >= 0 && u < e.length ? e[u] : "", phase: l <= c ? 1 : cn(0)(Ce(1)((t - c) / (l - c))) };
}, T6 = (t) => (n) => {
  const e = Ln(Vn, t, At(1, t.length, t));
  return ((o) => (i) => {
    let s = o, u = i, a = !0, c;
    for (; a; ) {
      const l = s, d = Ht((g) => v, (g) => (p) => T("Just", { head: g, tail: p }), u);
      if (d.tag === "Nothing") {
        const g = t.length - 1 | 0;
        if (g >= 0 && g < t.length) {
          a = !1, c = t[g];
          continue;
        }
        a = !1, c = { x: 0, y: 0 };
        continue;
      }
      if (d.tag === "Just") {
        if (d._1.tail.length === 0 || l <= Vr(d._1.head._1)(d._1.head._2)) {
          const g = Vr(d._1.head._1)(d._1.head._2), p = g <= 0 ? 0 : l / g;
          a = !1, c = { x: d._1.head._1.x + (d._1.head._2.x - d._1.head._1.x) * p, y: d._1.head._1.y + (d._1.head._2.y - d._1.head._1.y) * p };
          continue;
        }
        s = l - Vr(d._1.head._1)(d._1.head._2), u = d._1.tail;
        continue;
      }
      f();
    }
    return c;
  })(cn(0)(Ce(1)(n)) * w((o) => (i) => o + Vr(i._1)(i._2))(0)(e))(e);
}, w6 = (t) => (n) => B((e) => {
  const r = y6(e)((n - e.startT) / (e.endT - e.startT)), o = T6(e.path)(r), i = s6(t)(o);
  return { x: o.x, y: o.y, glow: i.glow, nx: i.x, ny: i.y, labels: e.labels, motionT: r, startT: e.startT, path: e.path };
})(At(0, 8, ht((e) => n >= e.startT && n < e.endT, t.tokenFlows))), N6 = (t) => (n) => {
  const e = t.cameraSchedule.tag === "Just" ? T("Just", Bd(t.cameraSchedule._1)(n)) : v, r = B(i6(e))(t.nodeList), o = B((i) => {
    const s = cn(1e-9)(i._1.hi - i._1.lo), u = cn(0)(Ce(1)((i._2.lo - i._1.lo) / s)), a = cn(0)(Ce(1)((i._2.hi - i._1.lo) / s));
    return {
      flat: [
        i._1.from.x + (i._1.to.x - i._1.from.x) * u,
        i._1.from.y + (i._1.to.y - i._1.from.y) * u,
        i._1.from.x + (i._1.to.x - i._1.from.x) * a,
        i._1.from.y + (i._1.to.y - i._1.from.y) * a
      ],
      alpha: i._2.alpha > 0 && a > u + 1e-9 ? i._2.alpha : 0
    };
  })(Ln(Vn, t.edgeSegments, B((i) => R1(e)(i.key))(t.edgeSegments)));
  return {
    nodeRect: wt(Ln(Vn, t.worldNodes, r))((i) => [
      i._1.x,
      i._1.y,
      i._1.hw * 2 * i._2.scale,
      i._1.hh * 2 * i._2.scale
    ]),
    nodeAlpha: B((i) => i.alpha)(r),
    edge: wt(o)((i) => i.flat),
    edgeAlpha: B((i) => i.alpha)(o),
    arrowAlpha: B((i) => {
      const s = R1(e)(i.key);
      return s.alpha > 0 && s.hi >= 0.999999 ? s.alpha : 0;
    })(t.arrowData)
  };
}, J6 = (t) => {
  const n = Ql(t);
  if (n.tag === "Left")
    return v;
  if (n.tag === "Right") {
    const e = $c(n._1)(pc)._1;
    if (e.tag === "Left")
      return v;
    if (e.tag === "Right") {
      const r = Pl(ja)(El)(e._1)(sc(G)(G)(e._1));
      if (r.tag === "Left")
        return v;
      if (r.tag === "Right")
        return T("Just", r._1);
    }
  }
  f();
}, C6 = (t) => {
  const n = JR(t), e = J6(t), r = (() => {
    if (e.tag === "Nothing")
      return ja;
    if (e.tag === "Just")
      return e._1.cameraConfig;
    f();
  })(), o = w((h) => ($) => ({ minX: Ce(h.minX)($.x - $.w / 2), maxX: cn(h.maxX)($.x + $.w / 2), minY: Ce(h.minY)($.y - $.h / 2), maxY: cn(h.maxY)($.y + $.h / 2) }))({ minX: 1e9, maxX: -1e9, minY: 1e9, maxY: -1e9 })(n.nodes), i = (o.minX + o.maxX) / 2, s = (o.minY + o.maxY) / 2, u = 6.6 / cn(o.maxX - o.minX)(o.maxY - o.minY), a = B((h) => ({
    key: { id: h.id, path: h.path },
    pts: B(($) => ({ x: ($.x - i) * u, y: -($.y - s) * u }))(h.points),
    depth: V(h.depth),
    arrowhead: h.arrowhead
  }))(n.edges), c = B((h) => ({
    x: (h.x - i) * u,
    y: -(h.y - s) * u,
    hw: h.w / 2 * u,
    hh: h.h / 2 * u,
    shape: V(h.shape),
    depth: V(h.depth),
    labelH: r.labelBasePx * h.labelScale * u
  }))(n.nodes), l = (h) => {
    const $ = VR(/* @__PURE__ */ (() => {
      const x = (y) => (h.x - y.x) * (h.x - y.x) + (h.y - y.y) * (h.y - y.y);
      return (y) => (J) => it.compare(x(y))(x(J));
    })())(c);
    if ($.tag === "Just")
      return { x: $._1.x, y: $._1.y };
    if ($.tag === "Nothing")
      return h;
    f();
  }, _ = c.length, d = _ === 0 ? 0.1 : w((h) => ($) => h + $.hh)(0)(c) / V(_), g = (h) => {
    const $ = ht((x) => x.depth === h, c);
    return $.length === 0 ? d : w((x) => (y) => x + y.hh)(0)($) / V($.length);
  }, p = g(0), m = wt(a)((h) => B(($) => ({ key: h.key, from: $.from, to: $.to, lo: $.lo, hi: $.hi, depth: h.depth }))(u6((() => {
    if (h.arrowhead) {
      const $ = k1(h.pts)(Vn);
      if ($.tag === "Just") {
        const x = Vr($._1._1)($._1._2);
        if (x > 1e-6) {
          const y = qe(h.pts);
          if (y.tag === "Just") {
            const J = Ce(d * g(h.depth) / cn(1e-4)(p) * 0.05 + d * g(h.depth) / cn(1e-4)(p) * 0.55)(x * 0.95);
            return St(y._1.init)({ x: $._1._2.x - ($._1._2.x - $._1._1.x) / x * J, y: $._1._2.y - ($._1._2.y - $._1._1.y) / x * J });
          }
          if (y.tag === "Nothing")
            return h.pts;
          f();
        }
        return h.pts;
      }
      if ($.tag === "Nothing")
        return h.pts;
      f();
    }
    return h.pts;
  })())));
  return {
    nodeList: n.nodes,
    worldNodes: c,
    halfW: w((h) => ($) => cn(h)(cn($.x + $.hw)($.hw - $.x)))(0)(c) + d * 0.6,
    halfH: w((h) => ($) => cn(h)(cn($.y + $.hh)($.hh - $.y)))(0)(c) + d * 0.6,
    unitHalfH: d,
    ballRadius: d * 0.3,
    scaleFactor: u,
    nodeRectFlat: wt(c)((h) => [h.x, h.y, h.hw * 2, h.hh * 2]),
    nodeShapeFlat: B((h) => h.shape)(c),
    nodeLabelHeightFlat: B((h) => h.labelH)(c),
    nodeDepthFlat: B((h) => h.depth)(c),
    edgeSegFlat: wt(m)((h) => [h.from.x, h.from.y, h.to.x, h.to.y]),
    edgeSegDepth: B((h) => h.depth)(m),
    edgeSegments: m,
    arrowData: bt((h) => {
      if (h.arrowhead) {
        const $ = k1(h.pts)(Vn);
        if ($.tag === "Just") {
          const x = Vr($._1._1)($._1._2);
          return x > 1e-6 ? T(
            "Just",
            (() => {
              const y = l($._1._2);
              return {
                key: h.key,
                tipX: $._1._2.x - ($._1._2.x - $._1._1.x) / x * (d * g(h.depth) / cn(1e-4)(p)) * 0.05,
                tipY: $._1._2.y - ($._1._2.y - $._1._1.y) / x * (d * g(h.depth) / cn(1e-4)(p)) * 0.05,
                dirX: ($._1._2.x - $._1._1.x) / x,
                dirY: ($._1._2.y - $._1._1.y) / x,
                cx: y.x,
                cy: y.y,
                depth: h.depth,
                unit: d * g(h.depth) / cn(1e-4)(p)
              };
            })()
          ) : v;
        }
        if ($.tag === "Nothing")
          return v;
        f();
      }
      return v;
    })(a),
    tokenFlows: B((h) => ({
      path: (() => {
        const $ = B((y) => ({ x: (y.x - i) * u, y: -(y.y - s) * u }))(h.points), x = Ht((y) => v, (y) => (J) => T("Just", { head: y, tail: J }), $);
        if (x.tag === "Just") {
          const y = qe($);
          if (y.tag === "Just")
            return [l(x._1.head), ...St($)(l(y._1.last))];
          if (y.tag === "Nothing")
            return $;
          f();
        }
        if (x.tag === "Nothing")
          return $;
        f();
      })(),
      labels: h.labels,
      startT: h.startT,
      endT: h.endT,
      holdPre: h.holdPre,
      holdPost: h.holdPost
    }))(n.tokens),
    dives: B((h) => {
      const $ = (x) => ({ cx: (x.x - i) * u, cy: -(x.y - s) * u, hw: x.w / 2 * u, hh: x.h / 2 * u });
      return { startT: h.startT, endT: h.endT, dir: V(h.dir), parent: $(h.parent), child: $(h.child) };
    })(n.dives),
    duration: n.duration,
    midX: i,
    midY: s,
    cameraSchedule: e
  };
}, F1 = (t) => () => {
  const n = Ol(), e = Vs(n)();
  Wl(e)("normal")(), u$(e)("1px")();
  const r = d$(t)((o) => {
    const i = Oa(e)(Jc);
    return () => (i(), [od(e)(o.label)().width / 2048, 0.9]);
  })();
  return Ee(r);
}, m$ = (t) => (n) => {
  const e = Vs(n);
  return () => {
    const r = e();
    return v0(r)({ x: 0, y: 0, width: 2048, height: V(t.length) * 160 })(), $0(r)("#fff")(), R0(r)(b0)(), A0(r)(C0)(), Wl(r)("normal")(), u$(r)("1px")(), jR(t)((o) => (i) => {
      const s = Oa(r)(Jc);
      return () => (s(), T0(r)(i.label)(1024)(V(o) * 160 + 80)());
    })();
  };
}, b6 = (t) => () => {
  const n = Ol();
  return Ha(n)(2048)(), Qa(n)(V(t.length) * 160)(), m$(t)(n)(), n;
}, k6 = (t) => (n) => (e) => {
  const r = b6(t);
  return () => {
    const o = r();
    Pa(n)(e)(o)(0)(), sl(
      ul,
      Xo(Xo(Yo(() => Ul(Jc)))(ql(Xl)))(() => Yo((() => {
        const s = m$(t)(o);
        return () => (s(), Pa(n)(e)(o)(0)());
      })()))
    )().run();
  };
}, S6 = (t) => (n) => {
  const e = (r) => w((o) => (i) => (() => {
    const s = i.nx - r.cx, u = i.ny - r.cy, a = r.unit * 0.6;
    return s * s + u * u < a * a;
  })() ? cn(o)(i.glow) : o)(0)(n);
  return wt(t.arrowData)((r) => [r.tipX - r.dirX * r.unit * 0.2 * e(r), r.tipY - r.dirY * r.unit * 0.2 * e(r), r.dirX, r.dirY]);
}, L6 = (t) => (n) => (e) => (r) => {
  const o = Ce(0.05)(t);
  return Xt((i) => (s) => {
    if (i >= 0 && i < e.length) {
      const d = e[i].startT, g = en((x) => x.id === d)(n), p = (() => {
        if (g.tag === "Nothing")
          return { id: d, x: s.chip.cx, y: s.chip.cy, vx: 0, vy: 0 };
        if (g.tag === "Just")
          return g._1;
        f();
      })(), m = p.vx + (180 * (s.chip.cx - p.x) - 22 * p.vx) * o, h = p.vy + (180 * (s.chip.cy - p.y) - 22 * p.vy) * o, $ = { id: d, x: p.x + m * o, y: p.y + h * o, vx: m, vy: h };
      return b(S1($.x - s.chip.cx)($.y - s.chip.cy)(s), $);
    }
    const u = en((d) => d.id === 0)(n), a = (() => {
      if (u.tag === "Nothing")
        return { id: 0, x: s.chip.cx, y: s.chip.cy, vx: 0, vy: 0 };
      if (u.tag === "Just")
        return u._1;
      f();
    })(), c = a.vx + (180 * (s.chip.cx - a.x) - 22 * a.vx) * o, l = a.vy + (180 * (s.chip.cy - a.y) - 22 * a.vy) * o, _ = { id: 0, x: a.x + c * o, y: a.y + l * o, vx: c, vy: l };
    return b(S1(_.x - s.chip.cx)(_.y - s.chip.cy)(s), _);
  })(r);
}, G1 = (t) => (n) => {
  const e = Sr(n) - 32 | 0;
  return e >= 0 && e < t.length ? t[e] : 0.5;
}, E6 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = n * 0.6 + n * 0.5454545454545454, u = n * 1.5625, a = u * 0.76, c = n * 0.7272727272727273, l = e.y + r + c + s, _ = v6(o)(i), d = Ir(_.line), g = d.length, p = Aa(B((h) => n * G1(t)(h))(d)), m = e.x + r + c + p / 2;
  return {
    chip: { cx: m, cy: l, hw: p / 2 + n * 1.2727272727272727, hh: s, dotX: e.x, dotY: e.y },
    glyphs: w((h) => ($) => {
      const x = x6(_.phase)(g)($._1), y = n * G1(t)($._2), J = { cx: h._1 + y / 2, cy: l + (1 - x) * n * 0.85, hw: a / 2, hh: u / 2, cell: l6($._2), alpha: x };
      return b(h._1 + y, x > 0 ? St(h._2)(J) : h._2);
    })(b(m - p / 2, []))(Xt(Vn)(d))._2
  };
}, P6 = /* @__PURE__ */ Ml(
  "SdfDiagram",
  (t) => {
    const n = re(wi), e = re(0), r = re(0), o = re(v), i = re([]), s = re([]), u = re(v), a = re(8), c = re(1), l = re(0), _ = re(0), d = re(0), g = re(0), p = re(v), m = re({ resW: 0, resH: 0 }), h = re(1), $ = re(!0), x = Tn(h)(t.speed);
    Ss(
      (N, C) => N === C,
      t.speed,
      () => (x(), () => {
      })
    );
    const y = Tn($)(t.playing);
    Ss(
      (N, C) => N === C,
      t.playing,
      () => (y(), () => {
      })
    );
    const J = $n(n);
    return Ss(
      (N, C) => N === C,
      t.source,
      () => {
        const N = J(), C = kn(N, v, qt);
        if (C.tag === "Nothing")
          return () => {
          };
        if (C.tag === "Just") {
          const S = gR(C._1)(), P = kn(S, v, qt);
          if (P.tag === "Nothing")
            return () => {
            };
          if (P.tag === "Just") {
            const E = P._1;
            Tn(u)(v)();
            const Q = C6(t.source);
            lR(E)("OES_standard_derivatives")();
            const W = QA(E, qR, XR);
            cR(E)(W)();
            const D = sn(E)(W)("uRes")(), H = sn(E)(W)("uTime")(), rt = sn(E)(W)("uTilt")(), ot = sn(E)(W)("uNodeCount")(), M = sn(E)(W)("uEdgeCount")(), q = sn(E)(W)("uNodeRect")(), A = sn(E)(W)("uNodeAlpha")(), R = sn(E)(W)("uNodeShape")(), X = sn(E)(W)("uEdge")(), L = sn(E)(W)("uEdgeAlpha")(), I = sn(E)(W)("uArrow")(), z = sn(E)(W)("uArrowCount")(), U = sn(E)(W)("uArrowAlpha")(), K = sn(E)(W)("uLabel")(), O = sn(E)(W)("uLabelAspect")(), Z = sn(E)(W)("uLabelFadeStart")(), et = sn(E)(W)("uLabelDim")(), nt = sn(E)(W)("uLabelH")(), gt = sn(E)(W)("uUnit")(), ct = sn(E)(W)("uTokCount")(), $t = sn(E)(W)("uTokPos")(), Pt = sn(E)(W)("uTokGlow")(), Rt = sn(E)(W)("uTokNode")(), rn = sn(E)(W)("uGlyphAtlas")(), xt = sn(E)(W)("uChipCount")(), Gt = sn(E)(W)("uChipRect")(), vt = sn(E)(W)("uChipDot")(), Jt = sn(E)(W)("uGlyphCount")(), _t = sn(E)(W)("uGlyphRect")(), yt = sn(E)(W)("uGlyphCell")(), ft = sn(E)(W)("uGlyphAlpha")(), mt = sn(E)(W)("uCamZ")(), Ft = sn(E)(W)("uCamPanX")(), Lt = sn(E)(W)("uCamPanY")(), zt = sn(E)(W)("uRotY")(), tn = sn(E)(W)("uActiveDepth")(), pe = sn(E)(W)("uNodeDepth")(), Mn = sn(E)(W)("uEdgeDepth")(), jn = sn(E)(W)("uArrowDepth")();
            ao(E)(K)(0)(), ao(E)(rn)(1)(), Tr(E)(O)(12.8)(), Tr(E)(Z)(0.92)();
            const Qt = p1(E)(), Ot = p1(E)();
            k6(Q.nodeList)(E)(Qt)(), g6(E)(Ot)(i)();
            const me = F1(Q.nodeList)();
            ps(E)(et)(me)(), sl(
              ul,
              Xo(Xo(Yo(() => Ul(Jc)))(ql(Xl)))(() => Xo(Yo(F1(Q.nodeList)))((mn) => Yo(ps(E)(et)(mn))))
            )().run(), ao(E)(ot)(Q.nodeList.length)(), ao(E)(M)(nr(Q.edgeSegFlat.length, 4))(), ao(E)(z)(Q.arrowData.length)(), cr(E)(R)(Q.nodeShapeFlat)(), cr(E)(nt)(Q.nodeLabelHeightFlat)(), cr(E)(pe)(Q.nodeDepthFlat)(), cr(E)(Mn)(Q.edgeSegDepth)(), cr(E)(jn)(B((mn) => mn.depth)(Q.arrowData))();
            const Un = Sa(), Qn = $n(o), ar = ZR((mn) => {
              const ue = _A(mn)(Un);
              return () => (ue(), Tn(o)(v)());
            }), on = () => {
              const mn = Qn();
              return ar(mn)();
            }, vn = () => {
              const mn = h1(), ue = $n(r)();
              Tn(r)(mn)();
              const Dr = $n(h)(), So = $n($)(), so = Ce(0.05)((mn - ue) / 1e3), ke = So ? so * Dr : 0, xr = $n(e)() + ke;
              Tn(e)(xr)();
              const je = dR(C._1)(), Lo = oR(), as = cn(1)(Ce(2)(Lo)), uo = $n(i)(), di = $n(s)(), lu = $n(c)(), Zl = $n(l)(), tg = $n(_)(), y$ = $n(u)(), gu = $n(d)(), _u = 0 + $n(g)(), du = je.width * as, cs = je.height * as, ng = { cx: 0, cy: 0, hw: Q.halfW, hh: Q.halfH }, x$ = (() => {
                const fs = Q.duration > 0 ? xr - Q.duration * Xe(xr / Q.duration) : 0, Eo = w6(Q)(fs), ls = c6(Q)(y$)(je.width)(je.height)(so)(fs), gs = N6(Q)(fs), _s = p6(ng)(Q.dives)(fs), T$ = { centerX: _s.cx, centerY: _s.cy, camZ: _s.hh * 2, viewport: _s }, Cc = (() => {
                  if (ls.tag === "Nothing")
                    return T$;
                  if (ls.tag === "Just")
                    return ls._1.world;
                  f();
                })(), hu = Cc.centerX + Zl, bc = Cc.centerY + tg, ds = Cc.camZ * 1.18 * lu, w$ = hu * fe(gu), N$ = bc * fe(_u) - hu * we(gu) * we(_u), kc = du / cs, Sc = A1(_s)(kc) / A1(ng)(kc), J$ = Q.ballRadius * Sc, C$ = 11 * Q.scaleFactor * Sc, eg = Q.unitHalfH * Sc, rg = $6(Q.dives)(fs), og = L6(ke)(di)(Eo)(PR((() => {
                  const nn = 0.5 * kc * ds / cn(0.3)(fe(gu)), ig = 0.5 * ds / cn(0.3)(fe(_u));
                  return { minX: hu - nn, maxX: hu + nn, minY: bc - ig, maxY: bc + ig, margin: 4 * ds / cn(1)(cs) };
                })())(eg * 0.25)(B(o6)(ht((nn) => nn.depth >= rg - 0.5, Q.worldNodes)))(B((nn) => E6(uo)(C$)({
                  x: nn.x,
                  y: nn.y
                })(J$)(nn.motionT)(nn.labels))(Eo))), pu = B((nn) => nn._1)(og), mu = At(0, 40, wt(pu)((nn) => nn.glyphs)), b$ = B((nn) => nn._2)(og), k$ = Tn(m)({ resW: du, resH: cs });
                return () => (k$(), Tn(s)(b$)(), Tn(u)(ls.tag === "Just" ? T("Just", ls._1.camera) : v)(), Tn(l)(Zl)(), Tn(_)(tg)(), Tn(a)(ds)(), fR(E)(C._1)(dn(We(du)))(dn(We(cs)))(), hR(E)(), uR(E)(D)(du)(cs)(), Tr(E)(H)(xr)(), Tr(E)(rt)(_u)(), Tr(E)(mt)(ds)(), Tr(E)(Ft)(w$)(), Tr(E)(Lt)(N$)(), Tr(E)(zt)(gu)(), Tr(E)(tn)(rg)(), hs(E)(q)(gs.nodeRect)(), cr(E)(A)(gs.nodeAlpha)(), hs(E)(X)(gs.edge)(), cr(E)(L)(gs.edgeAlpha)(), cr(E)(U)(gs.arrowAlpha)(), Tr(E)(gt)(eg)(), ao(E)(ct)(Eo.length)(), ps(E)($t)(wt(Eo)((nn) => [nn.x, nn.y]))(), cr(E)(Pt)(B((nn) => nn.glow)(Eo))(), ps(E)(Rt)(wt(Eo)((nn) => [nn.nx, nn.ny]))(), hs(E)(I)(S6(Q)(Eo))(), ao(E)(xt)(pu.length)(), hs(E)(Gt)(wt(pu)((nn) => [nn.chip.cx, nn.chip.cy, nn.chip.hw, nn.chip.hh]))(), ps(E)(vt)(wt(pu)((nn) => [nn.chip.dotX, nn.chip.dotY]))(), ao(E)(Jt)(mu.length)(), hs(E)(_t)(wt(mu)((nn) => [nn.cx, nn.cy, nn.hw, nn.hh]))(), cr(E)(yt)(B((nn) => nn.cell)(mu))(), cr(E)(ft)(B((nn) => nn.alpha)(mu))(), _R(E)());
              })();
              je.width > 0 && x$();
              const v$ = o0(vn)(Un)();
              return Tn(o)(T("Just", v$))();
            }, Vl = Tn(r), cu = () => {
              const mn = h1();
              Vl(mn)();
              const ue = o0(vn)(Un)();
              return Tn(o)(T("Just", ue))();
            };
            cu();
            const fu = GR((mn) => {
              const ue = $n(o);
              return () => {
                const Dr = ue();
                if (mn)
                  return Dr.tag === "Nothing" ? cu() : void 0;
                if (!mn && Dr.tag === "Just")
                  return on();
              };
            })(), jl = r6(C._1)((mn) => (ue) => (Dr) => {
              const So = $n(a);
              return () => {
                const so = So(), ke = $n(m)();
                if (Dr > 0.5) {
                  const je = $n(c)();
                  return Tn(c)(b1(0.3)(2.6)(je * zi(1.01)(ue)))();
                }
                const _i = $n(l)(), xr = $n(_)();
                return Tn(l)(_i + mn * so / ke.resH)(), Tn(_)(xr - ue * so / ke.resH)();
              };
            })((mn) => (ue) => Tn(p)(T("Just", { x: mn, y: ue })))((mn) => (ue) => (Dr) => (So) => {
              const so = $n(p);
              return () => {
                const ke = so();
                if (ke.tag !== "Nothing") {
                  if (ke.tag === "Just") {
                    const _i = ue - ke._1.y, xr = mn - ke._1.x;
                    Tn(p)(T("Just", { x: mn, y: ue }))();
                    const je = $n(a)(), Lo = $n(m)();
                    if (Dr >= 1.5) {
                      const di = $n(l)(), lu = $n(_)();
                      return Tn(l)(di - xr * je / Lo.resH)(), Tn(_)(lu + _i * je / Lo.resH)();
                    }
                    const as = $n(d)(), uo = $n(g)();
                    return Tn(d)(as + xr * 5e-3)(), Tn(g)(b1(-0.8)(0.8)(uo + _i * 5e-3))();
                  }
                  f();
                }
              };
            })((mn) => (ue) => Tn(p)(v))();
            return () => (on(), fu(), jl());
          }
        }
        f();
      }
    ), t6(n6({
      style: { position: "absolute", inset: "0" },
      children: [e6({ ref: n, style: { position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" } })]
    }))();
  }
), A6 = /* @__PURE__ */ ko(P6), R6 = /* @__PURE__ */ ko(f$), F6 = /* @__PURE__ */ g$({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), G6 = /* @__PURE__ */ g$({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), He = /* @__PURE__ */ Gr(ii)(Ga), Fa = _$().pure, I6 = /* @__PURE__ */ ko(l$), B6 = {
  eq: (t) => (n) => (t.renderer === "CanvasRenderer" ? n.renderer === "CanvasRenderer" : t.renderer === "SvgRenderer" && n.renderer === "SvgRenderer") && t.showTitle === n.showTitle && (t.sizing.tag === "AutoSize" ? n.sizing.tag === "AutoSize" : t.sizing.tag === "FixedSize" && n.sizing.tag === "FixedSize" && t.sizing._1 === n.sizing._1 && t.sizing._2 === n.sizing._2) && t.source === n.source && (t.theme === "Light" ? n.theme === "Light" : t.theme === "Dark" ? n.theme === "Dark" : t.theme === "Blueprint" ? n.theme === "Blueprint" : t.theme === "Whiteboard" ? n.theme === "Whiteboard" : t.theme === "Isometric" && n.theme === "Isometric") && (t.transparency === "PaintBackground" ? n.transparency === "PaintBackground" : t.transparency === "TransparentBackground" && n.transparency === "TransparentBackground")
}, D6 = /* @__PURE__ */ Yl("svg")(), I1 = (t) => R6({
  className: "markgraf-player",
  style: { position: "relative", width: "100%", height: "100%" },
  children: [
    A6({
      source: t.src,
      speed: 1,
      playing: (() => {
        const n = kn(t.paused, v, qt);
        if (n.tag === "Nothing")
          return !0;
        if (n.tag === "Just")
          return !n._1;
        f();
      })()
    })
  ]
}), $$ = (t) => (n) => {
  const e = kn(n.theme, v, qt), r = (() => {
    if (e.tag === "Nothing")
      return "light";
    if (e.tag === "Just")
      return e._1;
    f();
  })(), o = kn(n.renderer, v, qt), i = (() => {
    if (o.tag === "Nothing")
      return "canvas";
    if (o.tag === "Just")
      return o._1;
    f();
  })(), s = kn(n.paused, v, qt), u = (() => {
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just")
      return s._1;
    f();
  })(), a = r === "light" ? T("Just", D_) : r === "dark" ? T("Just", Yk) : r === "blueprint" ? T("Just", Mk) : r === "whiteboard" ? T("Just", Uk) : r === "isometric" ? T("Just", Kk) : v, c = i === "svg" ? T("Just", mA) : i === "canvas" ? T("Just", l1) : v, l = {
    source: t,
    renderer: (() => {
      if (c.tag === "Nothing")
        return l1;
      if (c.tag === "Just")
        return c._1;
      f();
    })(),
    sizing: (() => {
      const _ = kn(n.width, v, qt);
      if (_.tag === "Just") {
        const d = kn(n.height, v, qt);
        if (d.tag === "Just")
          return o$("FixedSize", _._1, d._1);
      }
      return pA;
    })(),
    theme: (() => {
      if (a.tag === "Nothing")
        return D_;
      if (a.tag === "Just")
        return a._1;
      f();
    })(),
    transparency: (() => {
      const _ = kn(n.transparent, v, qt);
      if (_.tag === "Nothing")
        return !1;
      if (_.tag === "Just")
        return _._1;
      f();
    })() ? jk : Vk,
    showTitle: (() => {
      const _ = kn(n.showTitle, v, qt);
      if (_.tag === "Nothing")
        return !0;
      if (_.tag === "Just")
        return _._1;
      f();
    })()
  };
  return () => {
    const _ = re(wi), d = N1((h, $) => b(h, $), v), g = d._1, p = N1((h, $) => b(h, $), { time: 0, keyframe: "", playing: !1 });
    F6(b(i, r))((() => {
      const h = sg("[markgraf] unknown renderer " + hf(i) + ", defaulting to canvas"), $ = (() => {
        if (c.tag === "Nothing")
          return !0;
        if (c.tag === "Just")
          return !1;
        f();
      })() ? h : () => {
      };
      return () => {
        $();
        const x = sg("[markgraf] unknown theme " + hf(r) + ", defaulting to light");
        return (() => {
          if (a.tag === "Nothing")
            return !0;
          if (a.tag === "Just")
            return !1;
          f();
        })() && x(), () => {
        };
      };
    })())();
    const m = $n(_);
    return Ss(
      (h, $) => B6.eq(h)($),
      l,
      () => {
        const h = m(), $ = kn(h, v, qt), x = (() => {
          if ($.tag === "Just")
            return lA(v, qt, "Element", $._1);
          if ($.tag === "Nothing")
            return v;
          f();
        })();
        if (x.tag === "Nothing")
          return () => {
          };
        if (x.tag === "Just") {
          const y = IA(x._1)(l.source)(l.renderer)(l.sizing)(l.theme)(l.transparency)(l.showTitle)();
          if (y.tag === "Left")
            return G$("[markgraf] " + y._1)(), () => {
            };
          if (y.tag === "Right") {
            const J = y._1;
            d._2((C) => T("Just", J))();
            const N = J.subscribe((C) => p._2((S) => C))();
            return () => (N(), J.destroy(), d._2((C) => v)());
          }
        }
        f();
      }
    ), G6(b(
      u,
      (() => {
        if (g.tag === "Nothing")
          return !1;
        if (g.tag === "Just")
          return !0;
        f();
      })()
    ))((() => {
      const h = He(($) => u ? $.pause : $.play)(g);
      return () => (h(), () => {
      });
    })())(), Fa({
      elementRef: _,
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
      play: He((h) => h.play)(g),
      playWith: (h) => He(($) => $.playWith(h))(g),
      pause: He((h) => h.pause)(g),
      toggle: He((h) => h.toggle)(g),
      seek: (h) => He(($) => $.seek(h))(g),
      seekCue: (h) => He(($) => $.seekCue(h))(g),
      seekStep: (h) => He(($) => $.seekStep(h))(g),
      playToCue: (h) => ($) => He((x) => x.playToCue(h)($))(g),
      playToStep: (h) => ($) => He((x) => x.playToStep(h)($))(g),
      playNext: (h) => He(($) => $.playNext(h))(g),
      playPrevious: (h) => He(($) => $.playPrevious(h))(g),
      setSpeed: (h) => He(($) => $.setSpeed(h))(g),
      cues: g.tag === "Just" ? g._1.cues : [],
      steps: g.tag === "Just" ? g._1.steps : [],
      onCueEnter: (h) => {
        if (g.tag === "Just")
          return g._1.subscribeCue(h);
        if (g.tag === "Nothing")
          return () => () => {
          };
        f();
      },
      onStepEnter: (h) => ($) => {
        if (g.tag === "Just")
          return g._1.subscribeCue((x) => {
            const y = $(x);
            return x.kind === "step" && x.name === h ? y : () => {
            };
          });
        if (g.tag === "Nothing")
          return () => () => {
          };
        f();
      },
      onComplete: (h) => {
        if (g.tag === "Just")
          return g._1.subscribeComplete(h);
        if (g.tag === "Nothing")
          return () => () => {
          };
        f();
      }
    })();
  };
}, z6 = /* @__PURE__ */ Ml(
  "MarkgrafHeadlessPlayer",
  (t) => {
    const n = $$(t.src)({
      renderer: t.renderer,
      width: t.width,
      height: t.height,
      theme: t.theme,
      transparent: t.transparent,
      showTitle: t.showTitle,
      paused: t.paused
    })(), e = kn(t.renderer, v, qt);
    return (() => {
      if (e.tag === "Nothing")
        return "canvas";
      if (e.tag === "Just")
        return e._1;
      f();
    })() === "svg" ? Fa(ko(D6)({ className: "markgraf-player", ref: n.elementRef }))() : Fa(I6({ className: "markgraf-player", ref: n.elementRef }))();
  }
), H6 = /* @__PURE__ */ Ml(
  "MarkgrafPlayer",
  (t) => Fa((() => {
    const n = kn(t.renderer, v, qt), e = (() => {
      if (n.tag === "Nothing")
        return "canvas";
      if (n.tag === "Just")
        return n._1;
      f();
    })();
    return e === "sdf" || e === "webgl" ? I1(t) : ko(z6)(t);
  })())()
), ms = (t) => t ?? null, Q6 = (t) => {
  if (Object.prototype.toString.call(t) !== "[object Object]") return !1;
  const n = Object.getPrototypeOf(t);
  return n === Object.prototype || n === null;
}, O6 = (t) => t != null && (Q6(t) || "direction" in t || "speed" in t || "duration" in t || "loop" in t || "stopAt" in t), _f = (t) => () => t(), df = (t) => (n) => () => t(n), W6 = (t) => ({
  ...t,
  play: (n) => O6(n) ? t.playWith(n)() : t.play(),
  playWith: (n) => t.playWith(ms(n))(),
  pause: () => t.pause(),
  toggle: () => t.toggle(),
  seek: (n) => t.seek(n)(),
  seekCue: (n) => t.seekCue(n)(),
  seekStep: (n) => t.seekStep(n)(),
  playToCue: (n, e) => t.playToCue(n)(ms(e))(),
  playToStep: (n, e) => t.playToStep(n)(ms(e))(),
  playNext: (n) => t.playNext(ms(n))(),
  playPrevious: (n) => t.playPrevious(ms(n))(),
  setSpeed: (n) => t.setSpeed(n)(),
  onCueEnter: (n) => _f(t.onCueEnter(df(n))()),
  onStepEnter: (n, e) => _f(t.onStepEnter(n)(df(e))()),
  onComplete: (n) => _f(t.onComplete(df(n))())
}), Y6 = (t, n) => W6($$(t)(n ?? {})()), M6 = H6;
export {
  M6 as MarkgrafPlayer,
  Y6 as useMarkgraf
};
