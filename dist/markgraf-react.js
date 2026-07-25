import de from "react";
function A$(t) {
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
function or(t, n) {
  return n > 0 ? Math.floor(t / n) : n < 0 ? -Math.floor(t / -n) : 0;
}
const Vn = (t) => (n) => t, I = function(t) {
  return function(n) {
    for (var e = n.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = t(n[o]);
    return r;
  };
}, R$ = { map: I }, o0 = (t) => t, F$ = function(t) {
  return function(n) {
    return {}.hasOwnProperty.call(n, t);
  };
}, G$ = function(t) {
  return function(n) {
    return n[t];
  };
}, an = function(t) {
  return t.toString();
}, Wo = function(t) {
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
}, i0 = (t) => t, Wn = /* @__PURE__ */ i0("LT"), qn = /* @__PURE__ */ i0("GT"), fe = /* @__PURE__ */ i0("EQ"), T = (t, n) => ({ tag: t, _1: n }), v = /* @__PURE__ */ T("Nothing"), Ht = (t) => T("Just", t), I1 = (t) => {
  if (t.tag === "Nothing")
    return !0;
  if (t.tag === "Just")
    return !1;
  f();
}, B1 = (t) => {
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
}, zr = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldr((o) => {
    const i = r(o);
    return (s) => n.apply(n.Functor0().map((u) => o0)(i))(s);
  })(t.pure());
}, ji = (t) => {
  const n = zr(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, Ba = {
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
const b = (t, n) => ({ tag: "Tuple", _1: t, _2: n }), jn = (t) => (n) => b(t, n), Da = (t) => t._2, za = (t) => t._1, I$ = function(t) {
  return function() {
    return t;
  };
}, B$ = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return si.pure(e(r))();
  },
  Functor0: () => D$
}, si = { pure: I$, Apply0: () => B$ }, D$ = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, z$ = function(t) {
  return function() {
    console.log(t);
  };
}, ig = function(t) {
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
}, Pt = (t, n) => ({ tag: t, _1: n }), H$ = (t) => Pt("Left", t), D1 = (t) => Pt("Right", t), Q$ = {
  map: (t) => (n) => {
    if (n.tag === "Left")
      return Pt("Left", n._1);
    if (n.tag === "Right")
      return Pt("Right", t(n._1));
    f();
  }
}, z1 = {
  apply: (t) => (n) => {
    if (t.tag === "Left")
      return Pt("Left", t._1);
    if (t.tag === "Right") {
      if (n.tag === "Left")
        return Pt("Left", n._1);
      if (n.tag === "Right")
        return Pt("Right", t._1(n._1));
    }
    f();
  },
  Functor0: () => Q$
}, O$ = {
  bind: (t) => {
    if (t.tag === "Left") {
      const n = t._1;
      return (e) => Pt("Left", n);
    }
    if (t.tag === "Right") {
      const n = t._1;
      return (e) => e(n);
    }
    f();
  },
  Apply0: () => z1
}, W$ = { pure: D1, Apply0: () => z1 }, H1 = { Applicative0: () => W$, Bind1: () => O$ }, q$ = (t) => t, X$ = { map: (t) => (n) => t(n) }, Q1 = { apply: (t) => (n) => t(n), Functor0: () => X$ }, Y$ = { bind: (t) => (n) => n(t), Apply0: () => Q1 }, M$ = { pure: q$, Apply0: () => Q1 }, Ie = { Applicative0: () => M$, Bind1: () => Y$ }, Li = (t, n) => ({ tag: t, _1: n }), s0 = (t) => Li("Loop", t), U$ = (t) => Li("Done", t), K$ = {
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
  Monad0: () => Ie
}, V$ = function(t) {
  return function(n) {
    return function() {
      return t(n());
    };
  };
}, j$ = function(t) {
  return function() {
    return t;
  };
}, Z$ = function(t) {
  return function(n) {
    return function() {
      return n(t())();
    };
  };
}, t2 = { map: V$ }, n2 = { Applicative0: () => u0, Bind1: () => e2 }, e2 = { bind: Z$, Apply0: () => O1 }, O1 = {
  apply: (t) => (n) => () => {
    const e = t(), r = n();
    return u0.pure(e(r))();
  },
  Functor0: () => t2
}, u0 = { pure: j$, Apply0: () => O1 }, r2 = {
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
  Monad0: () => n2
}, o2 = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, i2 = function(t, n, e, r) {
  return e >= 0 && e < r.length ? t(r[e]) : n;
}, a0 = function(t) {
  return t.length;
}, s2 = function(t, n, e) {
  return e.length > 0 ? t(e.pop()) : n;
}, u2 = function(t, n) {
  return n.push(t);
}, a2 = /* @__PURE__ */ o2(u2), c2 = (t, n) => ({ tag: "Iterator", _1: t, _2: n }), f2 = (t) => (n) => (e) => () => {
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
}, l2 = (t) => (n) => () => {
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
var c0 = function(t) {
  return function(n) {
    return t === n;
  };
};
const g2 = c0, _2 = c0, ui = c0, Ms = function(t) {
  return function(n) {
    return function(e) {
      if (n.length !== e.length) return !1;
      for (var r = 0; r < n.length; r++)
        if (!t(n[r])(e[r])) return !1;
      return !0;
    };
  };
}, Fr = { eq: ui }, d2 = { eq: _2 }, vo = { eq: g2 };
var f0 = function(t) {
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
const h2 = f0, p2 = f0, m2 = f0, F = { compare: /* @__PURE__ */ m2(Wn)(fe)(qn), Eq0: () => Fr }, it = { compare: /* @__PURE__ */ p2(Wn)(fe)(qn), Eq0: () => d2 }, st = { compare: /* @__PURE__ */ h2(Wn)(fe)(qn), Eq0: () => vo }, so = function(t) {
  return t;
}, $2 = /* @__PURE__ */ (function() {
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
})(), y2 = (t) => t, bo = {
  traverse: (t) => {
    const n = t.Apply0();
    return $2(n.apply)(n.Functor0().map)(t.pure);
  },
  sequence: (t) => bo.traverse(t)(y2),
  Functor0: () => R$,
  Foldable1: () => Yt
}, Vt = function(t, n) {
  for (var e = t > n ? -1 : 1, r = new Array(e * (n - t) + 1), o = t, i = 0; o !== n; )
    r[i++] = o, o += e;
  return r[i] = o, r;
};
var x2 = function(t, n) {
  if (t < 1)
    return [];
  var e = new Array(t);
  return e.fill(n);
}, v2 = function(t, n) {
  for (var e = [], r = 0, o = 0; o < t; o++)
    e[r++] = n;
  return e;
};
const T2 = typeof Array.prototype.fill == "function" ? x2 : v2, tn = /* @__PURE__ */ (function() {
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
}, W1 = function(t, n, e, r) {
  for (var o = 0; o < r.length; o++) {
    var i = e(r[o]);
    if (n(i)) return i;
  }
  return t;
}, oo = function(t, n, e, r) {
  for (var o = 0, i = r.length; o < i; o++)
    if (e(r[o])) return t(o);
  return n;
}, q1 = function(t, n, e, r, o) {
  if (e < 0 || e > o.length) return n;
  var i = o.slice();
  return i.splice(e, 0, r), t(i);
}, X1 = function(t, n, e, r) {
  if (e < 0 || e >= r.length) return n;
  var o = r.slice();
  return o.splice(e, 1), t(o);
}, To = function(t, n, e, r, o) {
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
}, w2 = function(t, n, e) {
  for (var r = e.length, o = n, i = new Array(r), s = 0; s < r; s++)
    o = t(o)(e[s]), i[s] = o;
  return i;
}, N2 = /* @__PURE__ */ (function() {
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
})(), Et = function(t, n, e) {
  return e.slice(t, n);
}, En = function(t, n, e) {
  for (var r = n.length < e.length ? n.length : e.length, o = new Array(r), i = 0; i < r; i++)
    o[i] = t(n[i])(e[i]);
  return o;
}, Ln = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (t(n[r])) return !0;
  return !1;
}, Y1 = function(t, n) {
  for (var e = n.length, r = 0; r < e; r++)
    if (!t(n[r])) return !1;
  return !0;
}, It = (t) => (n) => N2(
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
), J2 = (t) => (n) => It((e) => (r) => t.compare(n(e))(n(r))), kt = (t) => (n) => (() => {
  const e = a2(n);
  return () => {
    const r = [...t];
    return e(r)(), r;
  };
})()(), Me = (t) => {
  if (t.length === 0)
    return t.length - 1 | 0, v;
  const n = t.length - 1 | 0;
  return n >= 0 && n < t.length ? T("Just", { init: Et(0, t.length - 1 | 0, t), last: t[n] }) : v;
}, C2 = (t) => (n) => (e) => t >= 0 && t < e.length ? To(Ht, v, t, n(e[t]), e) : v, Lr = (t) => (n) => {
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
    return r._1 === 0 ? { init: [], rest: n } : { init: Et(0, r._1, n), rest: Et(r._1, n.length, n) };
  if (r.tag === "Nothing")
    return { init: n, rest: [] };
  f();
}, Bi = (t) => (n) => {
  const e = It((r) => (o) => t(r._2)(o._2))(Xt(jn)(n));
  return 0 < e.length ? I(Da)(J2(st)(za)((() => {
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
}, b2 = (t) => (n) => {
  const e = [], o = c2(
    (i) => i >= 0 && i < n.length ? T("Just", n[i]) : v,
    { value: 0 }
  );
  return l2(o)((i) => () => {
    const s = [];
    s.push(i), f2(t(i))(o)(s)(), e.push(s);
  })(), e;
}, jt = (t) => (n) => {
  const e = oo(Ht, v, t, n);
  return e.tag === "Just" ? T("Just", n[e._1]) : v;
}, Ts = (t) => (n) => ht(t, n), Je = (t) => (n) => (e) => {
  const r = oo(Ht, v, (o) => t.eq(o)(n), e);
  if (r.tag === "Nothing")
    return !1;
  if (r.tag === "Just")
    return !0;
  f();
}, Ha = (t) => (n) => wt(n)(t), Nt = (t) => Ha((n) => {
  const e = t(n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [e._1];
  f();
}), k2 = isFinite, Mn = Math.abs, S2 = Math.acos, Yo = function(t) {
  return function(n) {
    return Math.atan2(t, n);
  };
}, Qa = Math.ceil, le = Math.cos, Di = Math.exp, Ue = Math.floor, Wu = Math.log, L2 = function(t) {
  return function(n) {
    return Math.min(t, n);
  };
}, zi = function(t) {
  return function(n) {
    return Math.pow(t, n);
  };
}, Xe = Math.round, Ne = Math.sin, re = Math.sqrt, E2 = Math.tan, P2 = function(t) {
  return function(n) {
    return function(e) {
      return (e | 0) === e ? t(e) : n;
    };
  };
}, V = function(t) {
  return t;
}, A2 = function(t) {
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
}, R2 = /* @__PURE__ */ A2(Ht)(v), F2 = /* @__PURE__ */ R2(10), M1 = /* @__PURE__ */ P2(Ht)(v), dn = (t) => {
  if (!k2(t))
    return 0;
  if (t >= V(2147483647))
    return 2147483647;
  if (t <= V(-2147483648))
    return -2147483648;
  const n = M1(t);
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return n._1;
  f();
}, G2 = (t, n) => ({ tag: "NonEmpty", _1: t, _2: n }), St = (t, n, e) => ({ tag: t, _1: n, _2: e }), Y = /* @__PURE__ */ St("Nil"), Jn = {
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
          u = St("Cons", d._1, _), a = d._2;
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
}, I2 = function(t) {
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
}, B2 = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, D2 = { unfoldr1: /* @__PURE__ */ I2(I1)(B2)(za)(Da) }, z2 = function(t) {
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
}, H2 = (t) => {
  if (t.tag === "Just")
    return t._1;
  f();
}, pe = {
  unfoldr: /* @__PURE__ */ z2(I1)(H2)(za)(Da),
  Unfoldable10: () => D2
}, Zt = (t, n, e, r, o, i, s) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s }), _e = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), mu = (t, n, e) => ({ tag: "Split", _1: t, _2: n, _3: e }), sg = (t, n, e) => ({ tag: "SplitLast", _1: t, _2: n, _3: e }), D = /* @__PURE__ */ Zt("Leaf"), je = /* @__PURE__ */ _e("IterLeaf"), Pn = (t, n, e, r) => {
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
}, he = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r.tag === "Leaf" ? Zt("Node", 1, 1, t, n, D, D) : r.tag === "Node" && r._1 > 1 ? r._5.tag === "Node" && (() => {
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
    return mu(v, D, D);
  if (e.tag === "Node") {
    const r = t(n)(e._3);
    if (r === "LT") {
      const o = Hi(t, n, e._5);
      return mu(o._1, o._2, he(e._3, e._4, o._3, e._6));
    }
    if (r === "GT") {
      const o = Hi(t, n, e._6);
      return mu(o._1, he(e._3, e._4, e._5, o._2), o._3);
    }
    if (r === "EQ")
      return mu(T("Just", e._4), e._5, e._6);
  }
  f();
}, U1 = (t, n, e, r) => {
  if (r.tag === "Leaf")
    return sg(t, n, e);
  if (r.tag === "Node") {
    const o = U1(r._3, r._4, r._5, r._6);
    return sg(o._1, o._2, he(t, n, e, o._3));
  }
  f();
}, Zi = (t, n) => {
  if (t.tag === "Leaf")
    return n;
  if (t.tag === "Node") {
    const e = U1(t._3, t._4, t._5, t._6);
    return he(e._1, e._2, e._3, n);
  }
  f();
}, lr = (t, n, e) => {
  if (n.tag === "Leaf")
    return D;
  if (e.tag === "Leaf")
    return n;
  if (e.tag === "Node") {
    const r = Hi(t, e._3, n);
    return Zi(lr(t, r._2, e._5), lr(t, r._3, e._6));
  }
  f();
}, qu = (t, n, e, r) => {
  if (e.tag === "Leaf" || r.tag === "Leaf")
    return D;
  if (r.tag === "Node") {
    const o = Hi(t, r._3, e), i = qu(t, n, o._2, r._5), s = qu(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return he(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return Zi(i, s);
  }
  f();
}, Zn = (t, n, e, r) => {
  if (e.tag === "Leaf")
    return r;
  if (r.tag === "Leaf")
    return e;
  if (r.tag === "Node") {
    const o = Hi(t, r._3, e), i = Zn(t, n, o._2, r._5), s = Zn(t, n, o._3, r._6);
    if (o._1.tag === "Just")
      return he(r._3, n(o._1._1)(r._4), i, s);
    if (o._1.tag === "Nothing")
      return he(r._3, r._4, i, s);
  }
  f();
}, K1 = (t) => (n) => (e) => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return D;
    if (o.tag === "Node") {
      const i = t.compare(e)(o._3);
      if (i === "LT")
        return he(o._3, o._4, r(o._5), o._6);
      if (i === "GT")
        return he(o._3, o._4, o._5, r(o._6));
      if (i === "EQ") {
        const s = n(o._4);
        if (s.tag === "Nothing")
          return Zi(o._5, o._6);
        if (s.tag === "Just")
          return Zt("Node", o._1, o._2, o._3, s._1, o._5, o._6);
      }
    }
    f();
  };
  return r;
}, Q2 = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return D;
    if (r.tag === "Node") {
      const o = n(r._3)(r._4);
      if (o.tag === "Just")
        return he(r._3, o._1, e(r._5), e(r._6));
      if (o.tag === "Nothing")
        return Zi(e(r._5), e(r._6));
    }
    f();
  };
  return e;
}, O2 = (t) => (n) => (r) => {
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
              _ = _e("IterEmit", h._3, h._4, m), d = h._5;
              continue;
            }
            _ = _e("IterEmit", h._3, h._4, _e("IterNode", h._6, m)), d = h._5;
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
}, Ze = /* @__PURE__ */ O2((t, n, e) => T("Just", b(b(t, n), e)))((t) => v), qt = (t) => (n) => (e) => (r) => {
  const o = (i) => {
    if (i.tag === "Leaf")
      return Zt("Node", 1, 1, e, r, D, D);
    if (i.tag === "Node") {
      const s = t.compare(e)(i._3);
      if (s === "LT")
        return he(i._3, i._4, o(i._5), i._6);
      if (s === "GT")
        return he(i._3, i._4, i._5, o(i._6));
      if (s === "EQ")
        return Zt("Node", i._1, i._2, e, n(i._4)(r), i._5, i._6);
    }
    f();
  };
  return o;
}, tt = (t) => (n) => (e) => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return Zt("Node", 1, 1, n, e, D, D);
    if (o.tag === "Node") {
      const i = t.compare(n)(o._3);
      if (i === "LT")
        return he(o._3, o._4, r(o._5), o._6);
      if (i === "GT")
        return he(o._3, o._4, o._5, r(o._6));
      if (i === "EQ")
        return Zt("Node", o._1, o._2, n, e, o._5, o._6);
    }
    f();
  };
  return r;
}, hn = (t) => (n) => n.foldl((e) => (r) => tt(t)(r._1)(r._2)(e))(D), Qi = (t) => (n) => {
  const e = (r) => {
    if (r.tag === "Leaf")
      return D;
    if (r.tag === "Node") {
      const o = t.compare(n)(r._3);
      if (o === "LT")
        return he(r._3, r._4, e(r._5), r._6);
      if (o === "GT")
        return he(r._3, r._4, r._5, e(r._6));
      if (o === "EQ")
        return Zi(r._5, r._6);
    }
    f();
  };
  return e;
}, V1 = (t) => {
  const n = t.compare;
  return (e) => (r) => (o) => {
    const i = Hi(n, r, o), s = e(i._1);
    if (s.tag === "Nothing")
      return Zi(i._2, i._3);
    if (s.tag === "Just")
      return he(r, s._1, i._2, i._3);
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
}, no = function(t) {
  return function(n) {
    if (n === 0) return 0;
    var e = Math.abs(n);
    return (t % e + e) % e;
  };
}, Nn = function(t) {
  return function(n) {
    return t.length === 0 ? n : n.length === 0 ? t : t.concat(n);
  };
}, W2 = { append: Nn }, q2 = { mempty: [], Semigroup0: () => W2 };
function l0(t) {
  return function(n) {
    return function(e) {
      return t.apply(e, [n]);
    };
  };
}
const X2 = l0(Number.prototype.toPrecision), Y2 = l0(Number.prototype.toFixed), M2 = l0(Number.prototype.toExponential), g0 = (t, n) => ({ tag: t, _1: n }), _0 = (t) => (n) => (e) => {
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
}, d0 = (t) => {
  if (t.tag === "Precision")
    return X2(t._1);
  if (t.tag === "Fixed")
    return Y2(t._1);
  if (t.tag === "Exponential")
    return M2(t._1);
  f();
};
function U2() {
  return Date.now();
}
function ug(t) {
  return new Error(t);
}
function Us(t) {
  return function() {
    return t.getContext("2d");
  };
}
function j1(t) {
  return function() {
    return t.width;
  };
}
function Z1(t) {
  return function() {
    return t.height;
  };
}
function Oa(t) {
  return function(n) {
    return function() {
      t.width = n;
    };
  };
}
function Wa(t) {
  return function(n) {
    return function() {
      t.height = n;
    };
  };
}
function h0(t) {
  return function(n) {
    return function() {
      t.lineWidth = n;
    };
  };
}
function p0(t) {
  return function(n) {
    return function() {
      t.fillStyle = n;
    };
  };
}
function K2(t) {
  return function(n) {
    return function() {
      t.strokeStyle = n;
    };
  };
}
function kc(t) {
  return function(n) {
    return function() {
      t.lineCap = n;
    };
  };
}
function Sc(t) {
  return function(n) {
    return function() {
      t.lineJoin = n;
    };
  };
}
function V2(t) {
  return function(n) {
    return function() {
      t.globalCompositeOperation = n;
    };
  };
}
function j2(t) {
  return function(n) {
    return function() {
      t.globalAlpha = n;
    };
  };
}
function td(t) {
  return function() {
    t.beginPath();
  };
}
function m0(t) {
  return function() {
    t.stroke();
  };
}
function $0(t) {
  return function() {
    t.fill();
  };
}
function Z2(t) {
  return function() {
    t.clip();
  };
}
function ms(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.lineTo(n, e);
      };
    };
  };
}
function nd(t) {
  return function(n) {
    return function(e) {
      return function() {
        t.moveTo(n, e);
      };
    };
  };
}
function ed(t) {
  return function() {
    t.closePath();
  };
}
function ty(t) {
  return function(n) {
    return function() {
      t.fillRect(n.x, n.y, n.width, n.height);
    };
  };
}
function y0(t) {
  return function(n) {
    return function() {
      t.clearRect(n.x, n.y, n.width, n.height);
    };
  };
}
function Xu(t) {
  return function(n) {
    return function() {
      t.scale(n.scaleX, n.scaleY);
    };
  };
}
function ag(t) {
  return function(n) {
    return function() {
      t.translate(n.translateX, n.translateY);
    };
  };
}
function ny(t) {
  return function(n) {
    return function() {
      t.transform(n.a, n.b, n.c, n.d, n.e, n.f);
    };
  };
}
function ey(t) {
  return function(n) {
    return function() {
      t.textAlign = n;
    };
  };
}
function ry(t) {
  return function(n) {
    return function() {
      t.textBaseline = n;
    };
  };
}
function qa(t) {
  return function(n) {
    return function() {
      t.font = n;
    };
  };
}
function x0(t) {
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
function rd(t) {
  return function(n) {
    return function() {
      return t.measureText(n);
    };
  };
}
function wr(t) {
  return function() {
    t.save();
  };
}
function Nr(t) {
  return function() {
    t.restore();
  };
}
function $s(t) {
  return function(n) {
    return function() {
      t.quadraticCurveTo(n.cpx, n.cpy, n.x, n.y);
    };
  };
}
function oy(t) {
  return function(n) {
    return function() {
      t.bezierCurveTo(n.cp1x, n.cp1y, n.cp2x, n.cp2y, n.x, n.y);
    };
  };
}
const od = (t) => t, v0 = (t) => t, T0 = (t) => t, w0 = (t) => t, Xa = (t) => t, iy = /* @__PURE__ */ Xa("BaselineTop"), N0 = /* @__PURE__ */ Xa("BaselineMiddle"), sy = /* @__PURE__ */ Xa("BaselineAlphabetic"), uy = /* @__PURE__ */ Xa("BaselineBottom"), ay = /* @__PURE__ */ w0("AlignLeft"), cy = /* @__PURE__ */ w0("AlignRight"), J0 = /* @__PURE__ */ w0("AlignCenter"), C0 = /* @__PURE__ */ T0("BevelJoin"), b0 = /* @__PURE__ */ T0("RoundJoin"), k0 = /* @__PURE__ */ T0("MiterJoin"), S0 = /* @__PURE__ */ v0("Round"), L0 = /* @__PURE__ */ v0("Square"), E0 = /* @__PURE__ */ v0("Butt"), fy = /* @__PURE__ */ od("SourceOver"), ly = /* @__PURE__ */ od("Difference"), P0 = (t) => (n) => ry(t)((() => {
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
})()), A0 = (t) => (n) => ey(t)((() => {
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
})()), R0 = (t) => (n) => {
  if (n === "BevelJoin")
    return Sc(t)("bevel");
  if (n === "RoundJoin")
    return Sc(t)("round");
  if (n === "MiterJoin")
    return Sc(t)("miter");
  f();
}, F0 = (t) => (n) => {
  if (n === "Round")
    return kc(t)("round");
  if (n === "Square")
    return kc(t)("square");
  if (n === "Butt")
    return kc(t)("butt");
  f();
}, cg = (t) => (n) => V2(t)((() => {
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
})()), gy = (t) => {
  const n = t.Apply0();
  return (e) => (r) => e.foldrWithIndex((o) => {
    const i = r(o);
    return (s) => {
      const u = i(s);
      return (a) => n.apply(n.Functor0().map((c) => o0)(u))(a);
    };
  })(t.pure());
}, _y = (t) => {
  const n = gy(t);
  return (e) => {
    const r = n(e);
    return (o) => (i) => r(i)(o);
  };
}, G0 = {
  foldrWithIndex: (t) => (n) => {
    const e = Ii((o) => {
      const i = o._1, s = o._2;
      return (u) => t(i)(s)(u);
    })(n), r = Xt(jn);
    return (o) => e(r(o));
  },
  foldlWithIndex: (t) => (n) => {
    const e = w((o) => (i) => t(i._1)(o)(i._2))(n), r = Xt(jn);
    return (o) => e(r(o));
  },
  foldMapWithIndex: (t) => {
    const n = t.mempty;
    return (e) => G0.foldrWithIndex((r) => (o) => (i) => t.Semigroup0().append(e(r)(o))(i))(n);
  },
  Foldable0: () => Yt
}, Pe = {
  foldr: (t) => (n) => {
    const e = Jn.foldr(t)(n);
    return (r) => e((() => {
      const o = (i, s) => {
        if (i.tag === "Leaf")
          return s;
        if (i.tag === "Node")
          return o(i._5, St("Cons", i._3, o(i._6, s)));
        f();
      };
      return o(r, Y);
    })());
  }
}, dy = (t) => {
  const n = {
    append: (() => {
      const e = t.compare;
      return (r) => (o) => Zn(e, Vn, r, o);
    })()
  };
  return { mempty: D, Semigroup0: () => n };
}, ws = function(t) {
  return function(n) {
    if (t >= 0 && t < n.length) return n.charAt(t);
    throw new Error("Data.String.Unsafe.charAt: Invalid index.");
  };
}, ko = function(t) {
  return t.join("");
}, Hr = function(t) {
  return t.split("");
}, ts = function(t) {
  return t;
}, pr = function(t) {
  return t.length;
}, fg = function(t) {
  return function(n) {
    return n.substr(0, t);
  };
}, Oi = function(t) {
  return function(n) {
    return n.substring(t);
  };
}, id = function(t) {
  return function(n) {
    return { before: n.substring(0, t), after: n.substring(t) };
  };
}, hy = (t) => (n) => {
  const e = id(pr(n) - pr(t) | 0)(n);
  return e.after === t ? T("Just", e.before) : v;
}, So = (t) => (n) => {
  const e = id(pr(t))(n);
  return e.before === t ? T("Just", e.after) : v;
}, sd = (t) => ({
  bind: (n) => (e) => t.Bind1().bind(n)((r) => {
    if (r.tag === "Left")
      return t.Applicative0().pure(Pt("Left", r._1));
    if (r.tag === "Right")
      return e(r._1);
    f();
  }),
  Apply0: () => ud(t)
}), ud = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = {
    map: (r) => n.map((o) => {
      if (o.tag === "Left")
        return Pt("Left", o._1);
      if (o.tag === "Right")
        return Pt("Right", r(o._1));
      f();
    })
  };
  return {
    apply: (() => {
      const r = sd(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => I0(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, I0 = (t) => ({ pure: (n) => t.Applicative0().pure(Pt("Right", n)), Apply0: () => ud(t) }), py = (t) => {
  const n = { Applicative0: () => I0(t), Bind1: () => sd(t) };
  return { throwError: (e) => t.Applicative0().pure(Pt("Left", e)), Monad0: () => n };
};
function lg(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
const my = (t, n, e) => ({ tag: t, _1: n, _2: e }), $y = (t) => (n) => (e) => lg(e) === n ? I0(t).pure(e) : py(t).throwError(G2(my("TypeMismatch", n, lg(e)), Y)), yy = function(t) {
  var n = null;
  return function() {
    return t === void 0 || (n = t(), t = void 0), n;
  };
}, xy = function(t) {
  return t();
}, ns = function(n) {
  return function(e) {
    return function() {
      return n(e);
    };
  };
}, Ks = function(n) {
  return function(e) {
    return function(r) {
      return function() {
        return n(e, r);
      };
    };
  };
}, es = function(n) {
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
}, vy = function(n) {
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
}, Ty = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, wy = (t) => (n) => (e) => {
  try {
    var r = BigInt(e);
    return t(r);
  } catch {
    return n;
  }
}, Zo = (t) => BigInt(t), Ny = (t) => Number(t), Ru = (t) => (n) => t + n, Fu = (t) => (n) => t * n, df = (t) => (n) => t - n, ad = 0n, Yu = 1n, cd = (t) => (n) => t ^ n, Ss = (t) => (n) => t & n, D0 = (t) => (n) => t << n, hf = (t) => (n) => t >> n, Jy = (t) => (n) => t == n, Cy = (t) => (n) => t === n ? 0 : t > n ? 1 : -1, by = { eq: Jy }, gg = {
  compare: (t) => (n) => {
    const e = Cy(t)(n);
    return e === 1 ? qn : e === 0 ? fe : Wn;
  },
  Eq0: () => by
}, ky = /* @__PURE__ */ Ty(Ht)(v), Sy = /* @__PURE__ */ wy(Ht)(v), Mu = function(t) {
  throw new Error(t);
}, fd = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = it.compare(n._1)(e._1);
      return r === "LT" ? Wn : r === "GT" ? qn : it.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), Ly = (t) => (n) => Mn(t._1 - n._1) + Mn(t._2 - n._2), ai = (t) => t, Ya = (t) => t, In = /* @__PURE__ */ Ya("North"), Bn = /* @__PURE__ */ Ya("South"), Xr = /* @__PURE__ */ Ya("East"), Yr = /* @__PURE__ */ Ya("West"), Ur = /* @__PURE__ */ ai("Rectangle"), _g = /* @__PURE__ */ ai("Cylinder"), Ey = /* @__PURE__ */ ai("Parallelogram"), Py = /* @__PURE__ */ ai("Diamond"), Ay = /* @__PURE__ */ ai("Ellipse"), dg = /* @__PURE__ */ ai("Document"), Ry = /* @__PURE__ */ ai("Cloud"), ld = /* @__PURE__ */ w(gr)(0), Fy = (t) => (n) => (e) => {
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
}, ho = (t) => (n) => {
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
}, Gy = (t) => {
  const n = { top: 0, bottom: 0, left: 0, right: 0 }, e = t.shape === "Cloud" ? { ...n, top: t.h * 0.38 } : t.shape === "Cylinder" ? { ...n, bottom: 5 } : t.shape === "Document" ? { ...n, bottom: t.h * 0.05 } : n;
  return [{ x: t.x - e.left, y: t.y - e.top }, { x: t.x + t.w + e.right, y: t.y + t.h + e.bottom }];
}, ti = (t) => (n) => {
  const e = En(
    (s) => (u) => ({
      a: s,
      b: u,
      len: (() => {
        const a = u.y - s.y, c = u.x - s.x;
        return re(c * c + a * a);
      })()
    }),
    t,
    Et(1, t.length, t)
  ), r = ld(I((s) => s.len)(e)), o = Fy(0)(r)(n * r), i = (s) => (u) => (a) => {
    let c = s, l = u, _ = a, d = !0, g;
    for (; d; ) {
      const p = c, m = l, h = _, $ = Bt((y) => v, (y) => (x) => T("Just", { head: y, tail: x }), p);
      if ($.tag === "Nothing") {
        const y = t.length - 1 | 0;
        if (y >= 0 && y < t.length) {
          d = !1, g = t[y];
          continue;
        }
        d = !1, g = h;
        continue;
      }
      if ($.tag === "Just") {
        if (m <= $._1.head.len) {
          const y = $._1.head.len <= 0 ? 0 : m / $._1.head.len;
          d = !1, g = { x: $._1.head.a.x + ($._1.head.b.x - $._1.head.a.x) * y, y: $._1.head.a.y + ($._1.head.b.y - $._1.head.a.y) * y };
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
}, Iy = (t) => (n) => {
  const e = ho(1e-6)(t.scale);
  return { x: (n.x - t.tx) / e, y: (n.y - t.ty) / e, w: n.w / e, h: n.h / e };
}, Vs = (t) => ld(En(
  (n) => (e) => {
    const r = e.y - n.y, o = e.x - n.x;
    return re(o * o + r * r);
  },
  t,
  Et(1, t.length, t)
)), By = (t) => (n) => {
  const e = ho(4)(0.15 * Uu(n.w)(n.h)), r = ho(1)(t.w), o = ho(1)(t.h), i = ho(1)(n.w - 2 * e), s = ho(1)(n.h - 2 * e), u = Uu(i / r)(s / o);
  return { scale: u, tx: n.x + e + (i - r * u) / 2 - t.x * u, ty: n.y + e + (s - o * u) / 2 - t.y * u };
}, z0 = { scale: 1, tx: 0, ty: 0 }, Tn = (t) => {
  const n = Bt(
    (e) => v,
    (e) => (r) => T("Just", { head: e, tail: r }),
    [
      ...(() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, St("Cons", r._4, e(r._6, o)));
          f();
        };
        return wt(tn(Jn.foldr, e(t.nodes, Y)))(Gy);
      })(),
      ...Ee((() => {
        const e = (r, o) => {
          if (r.tag === "Leaf")
            return o;
          if (r.tag === "Node")
            return e(r._5, St("Cons", r._4, e(r._6, o)));
          f();
        };
        return tn(Jn.foldr, e(t.edges, Y));
      })())
    ]
  );
  if (n.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (n.tag === "Just") {
    const e = w((r) => (o) => ({ minX: Uu(r.minX)(o.x), minY: Uu(r.minY)(o.y), maxX: ho(r.maxX)(o.x), maxY: ho(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { x: e.minX, y: e.minY, w: e.maxX - e.minX, h: e.maxY - e.minY };
  }
  f();
}, Dy = (t) => (n) => ((r) => (o) => (i) => {
  let s = r, u = o, a = i, c = !0, l;
  for (; c; ) {
    const _ = s, d = u, g = a, p = Bt((m) => v, (m) => (h) => T("Just", { head: m, tail: h }), d);
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
          const h = By(Tn(m._1.layout))((() => {
            const $ = hg(p._1.head)(_.layout.nodes);
            if ($.tag === "Nothing")
              return { x: 0, y: 0, w: 1, h: 1, label: "", shape: Ur };
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
})(t)(n)(z0), zy = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Hy = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Gu = (t) => (n) => (e) => {
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
}, Qy = (t) => (n) => (e) => (r) => {
  const o = Tn(n);
  return e <= 0 || r <= 0 || o.w <= 0 || o.h <= 0 ? 1 : t ? zy(o.w / e)(o.h / r) : Hy(o.w / e)(o.h / r);
}, gd = (t) => (n) => (e) => {
  const r = t.widthPx / t.heightPx, o = e.w / e.h;
  if (t.widthPx <= 0 || t.heightPx <= 0) {
    const s = 1 / Gu(0.05)(1)(n);
    return { w: e.w * s, h: e.h * s };
  }
  if (r > o) {
    const s = 1 / Gu(0.05)(1)(n);
    return { w: e.h * r * s, h: e.h * s };
  }
  const i = 1 / Gu(0.05)(1)(n);
  return { w: e.w * i, h: e.w / r * i };
}, pg = (t) => (n) => (e) => (r) => (o) => {
  const i = t + o / 2, s = t + n - o / 2, u = t + n / 2, a = e + r / 2;
  return o >= n ? u : Gu(i)(s)(a);
}, _d = (t) => (n) => (e) => (r) => {
  const o = Tn(t);
  return { x: pg(o.x)(o.w)(n.x)(n.w)(e), y: pg(o.y)(o.h)(n.y)(n.h)(r) };
}, dd = (t) => (n) => (e) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: Qy(t)(n)(e.w)(e.h) }), Oy = (t) => (n) => (e) => (r) => {
  const o = { x: r.x - t.padding, y: r.y - t.padding, w: r.w + t.padding * 2, h: r.h + t.padding * 2 }, i = gd(n)(0.65)(o), s = _d(e)(o)(i.w)(i.h), u = { x: s.x - i.w / 2, y: s.y - i.h / 2, w: i.w, h: i.h };
  return { focus: r, paddedFocus: o, viewport: u, camera: dd(n.widthPx > 0 && n.heightPx > 0)(e)(u) };
}, Wy = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Tn(r), u = { x: s.x * o.scale + o.tx, y: s.y * o.scale + o.ty, w: s.w * o.scale, h: s.h * o.scale }, a = t.padding * o.scale, c = { x: u.x - a, y: u.y - a, w: u.w + a * 2, h: u.h + a * 2 }, l = gd(n)(0.7)(c), _ = _d(e)(c)(l.w)(l.h), d = { x: _.x - l.w / 2, y: _.y - l.h / 2, w: l.w, h: l.h };
  return { footprint: u, viewport: d, camera: dd(n.widthPx > 0 && n.heightPx > 0)(e)(d) };
}, hd = (t) => t, qy = (t, n) => ({ tag: t, _1: n }), H0 = (t) => t, rs = (t, n) => ({ tag: t, _1: n }), Q0 = (t, n) => ({ tag: t, _1: n }), js = /* @__PURE__ */ H0("Animated"), Xy = /* @__PURE__ */ H0("StaticStill"), Yy = /* @__PURE__ */ H0("TitleCard"), My = /* @__PURE__ */ Q0("First"), mg = /* @__PURE__ */ hd("Forward"), $g = /* @__PURE__ */ hd("Backward"), Uy = /* @__PURE__ */ rs("ExitNode"), pd = /* @__PURE__ */ hn(F)(Yt), Ky = (t) => Ii((n) => (e) => ({
  nodes: Zn(F.compare, Vn, n.nodes, e.nodes),
  edges: Zn(F.compare, Vn, n.edges, e.edges)
}))({ nodes: D, edges: D })(t.keyframes), Vy = (t) => (n) => ({
  entering: {
    nodes: lr(F.compare, n.nodes, t.nodes),
    edges: lr(F.compare, n.edges, t.edges)
  },
  leaving: {
    nodes: lr(F.compare, t.nodes, n.nodes),
    edges: lr(F.compare, t.edges, n.edges)
  },
  surviving: {
    nodes: qu(F.compare, Vn, t.nodes, n.nodes),
    edges: qu(F.compare, Vn, t.edges, n.edges)
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
}, pf = (t) => (e) => {
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
}, jy = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(D), Zy = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(D), tx = /* @__PURE__ */ (() => {
  const t = pe.unfoldr(Ze);
  return (n) => t(_e("IterNode", n, je));
})(), md = (t) => (e) => {
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
}, yg = /* @__PURE__ */ hn(F)(Yt), O0 = (t) => {
  const n = Bt((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
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
}, nx = (t) => (n) => (e) => jy(wt(tn(Pe.foldr, e))((r) => {
  const o = Vu(r)(t);
  if (o.tag === "Just")
    return ht((i) => !pf(i)(n), [o._1.source, o._1.target]);
  if (o.tag === "Nothing")
    return [];
  f();
})), ex = (t) => t.kind.tag === "SendToken" ? T("Just", b(t.kind._1.edge, { source: t.kind._1.from, target: t.kind._1.to })) : v, rx = (t) => t.tag === "DataFlow" ? Nt(ex)(t._1.events) : [], ox = (t) => (n) => Zy(Nt((e) => pf(e._2.source)(n) || pf(e._2.target)(n) ? T("Just", e._1) : v)(tx(t))), Er = (t) => {
  const n = Bt((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
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
}, W0 = (t) => (n) => (e) => {
  if (e.tag === "Leaf")
    return Tn(t);
  const r = ox(n)(e), o = [
    ...Nt((i) => {
      const s = md(i)(t.nodes);
      return s.tag === "Just" ? T("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : v;
    })(tn(
      Pe.foldr,
      Zn(F.compare, Vn, e, nx(n)(e)(r))
    )),
    ...Nt((i) => {
      const s = Vu(i)(t.edges);
      return s.tag === "Just" ? T("Just", O0(s._1)) : v;
    })(tn(Pe.foldr, r))
  ];
  return o.length === 0 ? Tn(t) : Er(o);
}, ju = (t) => (n) => (e) => {
  const r = [
    ...Nt((o) => o)([
      (() => {
        const o = Vu(e)(t.edges);
        return o.tag === "Just" ? T("Just", O0(o._1)) : v;
      })()
    ]),
    ...(() => {
      const o = Vu(e)(n);
      if (o.tag === "Just")
        return Nt((i) => {
          const s = md(i)(t.nodes);
          return s.tag === "Just" ? T("Just", { x: s._1.x, y: s._1.y, w: s._1.w, h: s._1.h }) : v;
        })([o._1.source, o._1.target]);
      if (o.tag === "Nothing")
        return [];
      f();
    })()
  ];
  return r.length === 0 ? W0(t)(n)(D) : Er(r);
}, uo = (t) => (n) => {
  const e = Tn(t), r = e.w / Wi(1e-4)(n.zoom), o = e.h / Wi(1e-4)(n.zoom);
  return { x: n.center.x - r / 2, y: n.center.y - o / 2, w: r, h: o };
}, ix = (t) => Zn(
  F.compare,
  Vn,
  yg(I((n) => b(n.id, { source: n.from.node, target: n.to.node }))(t.graph.edges)),
  yg(wt(t.scenes)(rx))
), q0 = (t) => t, sx = (t) => t, $d = /* @__PURE__ */ q0("Linear"), wo = /* @__PURE__ */ q0("EaseInOutQuad"), ux = /* @__PURE__ */ q0("SpringBouncy"), Ls = (t) => (n) => (e) => {
  const r = re(1 - n * n), o = t * r;
  return 1 - Di(-n * t * e) * (le(o * e) + n / r * Ne(o * e));
}, ax = (t) => {
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
}, No = (t) => (n) => (() => {
  if (t === "Linear")
    return sx;
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
    return Ls(6)(0.7);
  f();
})()(ax(n)), Ma = (t) => t, yd = (t) => t, xd = (t) => t, Fe = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Zs = (t) => (n) => (e) => {
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
}, Zu = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, cx = (t) => (n) => {
  const e = st.compare(t._1)(n._1);
  return e === "LT" ? Wn : e === "GT" ? qn : it.compare(t._2)(n._2);
}, fx = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, lx = /* @__PURE__ */ xd("Hold"), gx = /* @__PURE__ */ xd("Gap"), Gr = /* @__PURE__ */ yd("LinearLerp"), xg = /* @__PURE__ */ yd("StagedLogLerp"), mf = /* @__PURE__ */ Ma("Overview"), vd = /* @__PURE__ */ Ma("DiveHome"), vg = /* @__PURE__ */ Ma("DiveTransition"), Ua = /* @__PURE__ */ Ma("ActionFocus"), _x = (t) => (n) => (e) => {
  const r = t.widthPx > 0 && t.heightPx > 0, o = t.widthPx / Fe(1e-6)(t.heightPx), i = Tn(n), s = i.w / Fe(1e-6)(e.zoom), u = i.h / Fe(1e-6)(e.zoom), a = s / Fe(1e-6)(u), c = r && o < a ? s / o : u, l = r && o > a ? u * o : s;
  return { x: e.center.x - l / 2, y: e.center.y - c / 2, w: l, h: c };
}, $f = (t) => (n) => (e) => {
  const r = e.center.y - n.center.y, o = e.center.x - n.center.x, i = re(o * o + r * r), s = e.zoom - n.zoom, u = s < 0 ? -s : s;
  return Zs(t.minTransition)(t.maxTransition)(Fe(t.panSpeed <= 0 ? t.minTransition : i / t.panSpeed)(t.zoomSpeed <= 0 ? t.minTransition : u / t.zoomSpeed));
}, dx = (t) => ({ startT: t.startT, endT: t.endT, fromCam: t.fromCam, toCam: t.toCam, easing: t.easing, interp: t.interp, intent: t.intent }), Td = (t) => (n) => No(wo)(Zs(0)(1)((n - t) / Fe(1e-4)(1 - t))), wd = (t) => (n) => No(wo)(Zs(0)(1)(n / Fe(1e-4)(t))), hx = /* @__PURE__ */ w((t) => (n) => {
  const e = t.length - 1 | 0;
  return e >= 0 && e < t.length && t[e] === n ? t : kt(t)(n);
})([]), px = (t) => (n) => {
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
}, mx = (t) => (n) => t.tag === "Just" ? n.tag === "Just" && px(t._1)(n._1) : t.tag === "Nothing" && n.tag === "Nothing", Tg = (t) => (n) => (e) => (r) => ({
  center: { x: r.center.x * e.scale + e.tx, y: r.center.y * e.scale + e.ty },
  zoom: r.zoom * Tn(t).w / Fe(1e-6)(e.scale * Tn(n).w)
}), Nd = (t) => (n) => (e) => (r) => ({
  center: { x: t.center.x + (n.center.x - t.center.x) * e, y: t.center.y + (n.center.y - t.center.y) * e },
  zoom: Di((() => {
    const o = Wu(Fe(1e-6)(t.zoom));
    return o + (Wu(Fe(1e-6)(n.zoom)) - o) * r;
  })())
}), $x = /* @__PURE__ */ w((t) => (n) => {
  if (t.tag === "Nothing")
    return T("Just", n);
  if (t.tag === "Just")
    return n.endT > t._1.endT ? T("Just", n) : T("Just", t._1);
  f();
})(v), Jd = (t) => (n) => (e) => (r) => {
  if (t <= 0)
    return r;
  const o = Di(-t * n);
  return {
    center: { x: r.center.x + (e.center.x - r.center.x) * o, y: r.center.y + (e.center.y - r.center.y) * o },
    zoom: Di((() => {
      const i = Wu(Fe(1e-6)(r.zoom));
      return i + (Wu(Fe(1e-6)(e.zoom)) - i) * o;
    })())
  };
}, yx = (t) => (n) => (e) => n.zoom >= t.zoom ? Td(0.18000000000000005)(e) : wd(0.82)(e), xx = (t) => (n) => (e) => n.zoom >= t.zoom ? wd(0.28)(e) : Td(0.72)(e), vx = (t) => (n) => (e) => Nd(t)(n)(xx(t)(n)(e))(yx(t)(n)(e)), Tx = (t) => (n) => (e) => {
  const r = e.endT <= e.startT ? 1 : (n - e.startT) / (e.endT - e.startT), o = No(e.easing)(Zs(0)(1)(r));
  if (e.interp === "LinearLerp")
    return {
      center: { x: e.fromCam.center.x + (e.toCam.center.x - e.fromCam.center.x) * o, y: e.fromCam.center.y + (e.toCam.center.y - e.fromCam.center.y) * o },
      zoom: e.fromCam.zoom + (e.toCam.zoom - e.fromCam.zoom) * o
    };
  if (e.interp === "LogLerp")
    return Nd(e.fromCam)(e.toCam)(o)(o);
  if (e.interp === "StagedLogLerp")
    return vx(e.fromCam)(e.toCam)(r);
  f();
}, wx = { widthPx: 0, heightPx: 0 }, Ka = {
  padding: 24,
  easing: wo,
  minimumReadableLabelPx: 11,
  minimumVisibleLabelPx: 5,
  labelBasePx: 11,
  panSpeed: 1500,
  zoomSpeed: 4,
  minTransition: 0.15,
  maxTransition: 0.6,
  cameraDecay: 0
}, yi = (t) => (n) => (e) => (r) => (o) => {
  const i = _x(n)(e)(r), s = o.x - t.padding, u = o.y - t.padding;
  return s >= i.x && u >= i.y && s + o.w + t.padding * 2 <= i.x + i.w && u + o.h + t.padding * 2 <= i.y + i.h;
}, Nx = (t) => (n) => (e) => (r) => (o) => G0.foldlWithIndex((i) => (s) => (u) => {
  const a = (() => {
    if (u.kind === "Hold") {
      const c = (() => {
        if (i === 0)
          return u.toCam;
        if (u.focus.tag === "Just") {
          if (u.intent === "ActionFocus")
            return yi(t)(n)(e)(s.prev)(u.focus._1) ? s.prev : yi(t)(n)(e)({ center: s.prev.center, zoom: u.toCam.zoom })(u.focus._1) ? { ...u.toCam, center: s.prev.center } : {
              ...u.toCam,
              center: {
                ...u.toCam.center,
                x: (() => {
                  const l = Tn(e).w / Fe(1e-6)(u.toCam.zoom);
                  if (l <= 0)
                    return u.toCam.center.x;
                  const _ = u.focus._1.x + u.focus._1.w / 2, d = n.widthPx <= 0 ? 0 : Zu(l / 4)(6 * l / n.widthPx), g = s.prev.center.x + l / 2 - d, p = _ < s.prev.center.x - l / 2 + d ? _ - d + l / 2 : _ > g ? _ + d - l / 2 : s.prev.center.x, m = Tn(e);
                  return l >= m.w ? m.x + m.w / 2 : Zs(m.x + l / 2)(m.x + m.w - l / 2)(p);
                })()
              }
            };
          if (yi(t)(n)(e)(s.prev)(u.focus._1))
            return s.prev;
          if (yi(t)(n)(e)({ center: s.prev.center, zoom: u.toCam.zoom })(u.focus._1))
            return { ...u.toCam, center: s.prev.center };
        }
        return u.toCam;
      })();
      return { startT: u.startT, endT: u.endT, fromCam: c, toCam: c, easing: u.easing, interp: Gr, focus: u.focus, intent: u.intent };
    }
    if (u.kind === "Gap")
      return {
        startT: u.startT,
        endT: u.endT,
        fromCam: s.prev,
        toCam: (() => {
          const c = i + 1 | 0, l = oo(Ht, v, (_) => _.kind === "Hold", c < 1 ? o : Et(c, o.length, o));
          if (l.tag === "Just") {
            const _ = (i + 1 | 0) + l._1 | 0;
            return _ >= 0 && _ < o.length ? (() => {
              if (o[_].focus.tag === "Just")
                return yi(t)(n)(e)(s.prev)(o[_].focus._1);
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
        interp: Gr,
        focus: v,
        intent: u.intent
      };
    f();
  })();
  return { acc: kt(s.acc)(a), prev: a.toCam };
})({ acc: [], prev: r })(o).acc, Jx = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = (a, c) => Zu($f(t)(a.toCam)(c.toCam))(a.endT - a.startT), u = w((a) => (c) => {
    if (a.pending.tag === "Nothing")
      return { acc: a.acc, pending: T("Just", c) };
    if (a.pending.tag === "Just") {
      if (!(c.fromCam.zoom === c.toCam.zoom && c.fromCam.center.x === c.toCam.center.x && c.fromCam.center.y === c.toCam.center.y) || (() => {
        if (c.focus.tag === "Just")
          return yi(t)(n)(e)(a.pending._1.toCam)(c.focus._1);
        if (c.focus.tag === "Nothing")
          return !1;
        f();
      })() || (() => {
        const l = a.pending._1.toCam.center.x - c.toCam.center.x;
        return (l < 0 ? -l < 8 : l < 8) && (() => {
          const _ = a.pending._1.toCam.center.y - c.toCam.center.y;
          return (_ < 0 ? -_ < 8 : _ < 8) && (() => {
            const d = a.pending._1.toCam.zoom - c.toCam.zoom;
            return d < 0 ? -d < 0.08 : d < 0.08;
          })();
        })();
      })() || s(a.pending._1, c) <= 0)
        return { acc: kt(a.acc)(a.pending._1), pending: T("Just", c) };
      if ((() => {
        const l = c.startT;
        return Ln((_) => Mn(_ - l) < 1e-4, o);
      })()) {
        const l = {
          startT: c.startT,
          endT: c.startT + Zu($f(t)(a.pending._1.toCam)(c.toCam))(c.endT - c.startT),
          fromCam: a.pending._1.toCam,
          toCam: c.toCam,
          easing: c.easing,
          interp: Gr,
          focus: c.focus,
          intent: c.intent
        }, _ = { ...c, startT: l.endT, fromCam: c.toCam };
        return _.startT < _.endT ? { acc: kt(kt(a.acc)(a.pending._1))(l), pending: T("Just", _) } : { acc: kt(a.acc)(a.pending._1), pending: T("Just", l) };
      }
      return {
        acc: kt(kt(a.acc)({ ...a.pending._1, endT: c.startT - s(a.pending._1, c) }))({
          startT: c.startT - s(a.pending._1, c),
          endT: c.startT,
          fromCam: a.pending._1.toCam,
          toCam: c.toCam,
          easing: c.easing,
          interp: Gr,
          focus: c.focus,
          intent: c.intent
        }),
        pending: T("Just", c)
      };
    }
    f();
  })({ acc: [], pending: v })(i);
  if (u.pending.tag === "Nothing")
    return u.acc;
  if (u.pending.tag === "Just")
    return kt(u.acc)(u.pending._1);
  f();
}, Cx = (t) => (n) => (e) => {
  const r = n.w + e * 2, o = n.h + e * 2, i = Tn(t);
  return r <= 0 || o <= 0 || i.w <= 0 || i.h <= 0 ? 1 : Zu(i.w / r)(i.h / o);
}, bx = (t) => (n) => {
  if (t.tag === "Just") {
    if (n.tag === "Just")
      return T("Just", Er([t._1, n._1]));
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
}, kx = /* @__PURE__ */ w((t) => (n) => {
  const e = t.length - 1 | 0, r = e >= 0 && e < t.length ? T("Just", t[e]) : v;
  return r.tag === "Just" && r._1.fromCam.zoom === r._1.toCam.zoom && r._1.fromCam.center.x === r._1.toCam.center.x && r._1.fromCam.center.y === r._1.toCam.center.y && n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y && (!(r._1.intent === "ActionFocus" || n.intent === "ActionFocus") || (r._1.intent === "Overview" ? n.intent === "Overview" : r._1.intent === "DiveHome" ? n.intent === "DiveHome" : r._1.intent === "DiveTransition" ? n.intent === "DiveTransition" : r._1.intent === "ActionFocus" && n.intent === "ActionFocus") && mx(r._1.focus)(n.focus)) && (() => {
    const o = r._1.toCam.center.x - n.toCam.center.x;
    return (o < 0 ? -o < 8 : o < 8) && (() => {
      const i = r._1.toCam.center.y - n.toCam.center.y;
      return (i < 0 ? -i < 8 : i < 8) && (() => {
        const s = r._1.toCam.zoom - n.toCam.zoom;
        return s < 0 ? -s < 0.08 : s < 0.08;
      })();
    })();
  })() ? kt((() => {
    const o = t.length - 1 | 0;
    return o < 1 ? [] : Et(0, o, t);
  })())({ ...r._1, endT: n.endT, focus: bx(r._1.focus)(n.focus) }) : kt(t)(n);
})([]), Sx = (t) => {
  const n = It((e) => (r) => cx(b(
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
}, yf = (t) => (n) => (e) => (r) => ({ center: { x: e.x + e.w / 2, y: e.y + e.h / 2 }, zoom: Fe(r)(Cx(n)(e)(t.padding)) }), Lx = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = yf(t)(e)(Tn(e))(0), u = ht(
    (c) => c >= 0 && c <= r,
    hx(It(it.compare)([0, r, ...o, ...wt(i)((c) => [c.startT, c.endT])]))
  ), a = (c, l) => Ln((_) => _.priority >= 1, ht((_) => _.startT <= l && l < _.endT, i)) ? Oy(t)(n)(e)(Er(c)).camera : yf(t)(e)(Er(c))(0);
  return I(dx)(Jx(t)(n)(e)(s)(o)(kx(Nx(t)(n)(e)(s)(Nt((c) => {
    const l = (c._1 + c._2) / 2;
    if (c._2 <= c._1)
      return v;
    const _ = I((d) => d.bbox)(ht(
      (d) => d.priority === w(fx)(0)(I((g) => g.priority)(ht(
        (g) => g.startT <= l && l < g.endT,
        i
      ))),
      ht((d) => d.startT <= l && l < d.endT, i)
    ));
    return _.length === 0 ? T(
      "Just",
      { kind: gx, startT: c._1, endT: c._2, fromCam: s, toCam: s, easing: t.easing, focus: v, intent: mf }
    ) : T(
      "Just",
      {
        kind: lx,
        startT: c._1,
        endT: c._2,
        fromCam: a(_, l),
        toCam: a(_, l),
        easing: t.easing,
        focus: T("Just", Er(_)),
        intent: Ln((d) => d.priority >= 1, ht((d) => d.startT <= l && l < d.endT, i)) ? Ua : mf
      }
    );
  })(En(jn, u, Et(1, u.length, u)))))));
}, qi = (t) => (n) => (e) => (r) => {
  const o = Sx(ht((i) => r >= i.startT && r < i.endT, e));
  if (o.tag === "Just")
    return { camera: Tx()(r)(o._1), intent: o._1.intent };
  if (o.tag === "Nothing") {
    const i = $x(e);
    return i.tag === "Just" && r >= i._1.endT ? { camera: i._1.toCam, intent: i._1.intent } : {
      camera: (() => {
        const s = yf(t)(n)(Tn(n))(0);
        return 0 < e.length ? e[0].fromCam : s;
      })(),
      intent: 0 < e.length ? e[0].intent : mf
    };
  }
  f();
};
function Pr(t) {
  return t.charCodeAt(0);
}
function X0(t) {
  return String.fromCharCode(t);
}
const Ex = (t) => t >= 0 && t <= 65535 ? T("Just", X0(t)) : v, ir = function(t) {
  return function(n) {
    return function(e) {
      return e.replace(new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "g"), n);
    };
  };
}, ao = function(t) {
  return function(n) {
    return n.split(t);
  };
}, Va = function(t) {
  return t.trim();
}, Qr = function(t) {
  return function(n) {
    return n.join(t);
  };
};
var Px = typeof Array.from == "function", Ax = typeof Symbol < "u" && Symbol != null && typeof Symbol.iterator < "u" && typeof String.prototype[Symbol.iterator] == "function", Rx = typeof String.prototype.fromCodePoint == "function", Fx = typeof String.prototype.codePointAt == "function";
const Gx = function(t) {
  return Fx ? function(n) {
    return n.codePointAt(0);
  } : t;
}, Ix = function(t) {
  return Rx ? String.fromCodePoint : t;
}, Bx = function(t) {
  return function(n) {
    return Ax ? function(e) {
      for (var r = "", o = e[Symbol.iterator](), i = 0; i < n; ++i) {
        var s = o.next();
        if (s.done) return r;
        r += s.value;
      }
      return r;
    } : t(n);
  };
}, Dx = function(t) {
  return function(n) {
    return Px ? function(e) {
      return Array.from(e, n);
    } : t;
  };
}, ja = (t) => {
  const n = pr(t);
  if (n === 0)
    return v;
  if (n === 1)
    return T("Just", { head: Pr(ws(0)(t)), tail: "" });
  const e = Pr(ws(1)(t)), r = Pr(ws(0)(t));
  return 55296 <= r && r <= 56319 && 56320 <= e && e <= 57343 ? T("Just", { head: (((r - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0, tail: Oi(2)(t) }) : T("Just", { head: r, tail: Oi(1)(t) });
}, zx = (t) => {
  const n = ja(t);
  return n.tag === "Just" ? T("Just", b(n._1.head, n._1.tail)) : v;
}, Hx = (t) => pe.unfoldr(zx)(t), Qx = (t) => {
  const n = Pr(ws(0)(t));
  if (55296 <= n && n <= 56319 && pr(t) > 1) {
    const e = Pr(ws(1)(t));
    if (56320 <= e && e <= 57343)
      return (((n - 55296 | 0) * 1024 | 0) + (e - 56320 | 0) | 0) + 65536 | 0;
  }
  return n;
}, Cd = /* @__PURE__ */ Gx(Qx), os = /* @__PURE__ */ Dx(Hx)(Cd), bd = (t) => os(t).length, Lc = (t) => ts(t >= 0 && t <= 65535 ? X0(t) : t < 0 ? "\0" : "\uffff"), Ox = (t) => t <= 65535 ? Lc(t) : Lc(or(t - 65536 | 0, 1024) + 55296 | 0) + Lc(no(t - 65536 | 0)(1024) + 56320 | 0), Wx = /* @__PURE__ */ Ix(Ox), kd = (t) => (n) => {
  if (t < 1)
    return "";
  const e = ja(n);
  return e.tag === "Just" ? Wx(e._1.head) + kd(t - 1 | 0)(e._1.tail) : n;
}, On = /* @__PURE__ */ Bx(kd), qx = (t) => (n) => n === "" ? v : T("Just", Cd(n)), Sd = (t) => t, ta = (t, n) => ({ tag: t, _1: n }), Te = (t, n, e) => ({ tag: t, _1: n, _2: e }), Ld = (t) => t, Ni = (t, n, e, r, o, i, s, u, a) => ({ tag: t, _1: n, _2: e, _3: r, _4: o, _5: i, _6: s, _7: u, _8: a }), xf = /* @__PURE__ */ Ld("PlopIn"), Xx = /* @__PURE__ */ Ld("PlopOut"), Yx = /* @__PURE__ */ Sd("DiveIn"), Mx = /* @__PURE__ */ Sd("DiveOut"), Ji = (t, n, e) => ({ tag: t, _1: n, _2: e }), Ux = (t) => t, Ci = (t, n) => ({ tag: t, _1: n }), Y0 = (t) => t, na = (t, n) => ({ tag: t, _1: n }), Ec = /* @__PURE__ */ na("NotYet"), wg = /* @__PURE__ */ na("Consumed"), Kx = /* @__PURE__ */ Y0("FromSource"), Ng = /* @__PURE__ */ Y0("FromTarget"), Vx = /* @__PURE__ */ Y0("FromBoth"), Pc = /* @__PURE__ */ Ci("Hidden"), jx = /* @__PURE__ */ Ci("Visible"), vf = /* @__PURE__ */ Ux("ExtendFromSource"), Ac = /* @__PURE__ */ Ji("Retracted"), Ed = /* @__PURE__ */ Ji("Extended"), Zx = {
  eq: (t) => (n) => t.tag === "Retracted" ? n.tag === "Retracted" : t.tag === "Extending" ? n.tag === "Extending" && (t._1 === "ExtendFromSource" ? n._1 === "ExtendFromSource" : t._1 === "ExtendFromTarget" && n._1 === "ExtendFromTarget") && t._2 === n._2 : t.tag === "Extended" ? n.tag === "Extended" : t.tag === "Retracting" && n.tag === "Retracting" && (t._1 === "FromSource" ? n._1 === "FromSource" : t._1 === "FromTarget" ? n._1 === "FromTarget" : t._1 === "FromBoth" && n._1 === "FromBoth") && t._2 === n._2
}, M0 = (t) => t, Pd = /* @__PURE__ */ hn(F)(Yt), Es = { eq: /* @__PURE__ */ Ms(ui) }, U0 = (t) => (e) => {
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
}, Kr = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Jg = Yt.foldMap(dy(F)), tv = (t) => (e) => {
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
}, nv = /* @__PURE__ */ (() => {
  const t = pe.unfoldr(Ze);
  return (n) => t(_e("IterNode", n, je));
})(), bi = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ev = (t) => (e) => {
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
}, rv = (t) => (e) => {
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
}, ov = /* @__PURE__ */ hn(F)(Yt), iv = /* @__PURE__ */ hn(F)(Yt), sv = (t) => (n) => (e) => {
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
}, Ad = /* @__PURE__ */ M0("Backdrop"), uv = /* @__PURE__ */ M0("FlyThrough"), Se = /* @__PURE__ */ M0("Active"), av = (t) => (n) => (e) => ({ ...e, state: { ...e.state, edgeFadeAlpha: Pd(I((r) => b(r, n))(t)) } }), Cg = (t) => (n) => (e) => {
  const r = (t + n) / 2, o = e - r, i = o < 0 ? -1 : 1, s = (n - t) / 2, u = s * 0.15, a = s - u, c = o < 0 ? -o : o;
  return n <= t ? (t + n) / 2 : c <= a ? e : r + i * (s - u * Di(-(c - a) / u));
}, ea = (t) => (n) => (e) => {
  const r = jt((o) => Es.eq(o.path)(n) && e >= o.startT && e < o.endT)(t.segments);
  if (r.tag === "Just")
    return T("Just", r._1);
  if (r.tag === "Nothing")
    return jt((o) => Es.eq(o.path)(n))(t.segments);
  f();
}, cv = (t) => (n) => {
  if (n.scene.tag === "Structural")
    return n.scene._1.to;
  if (n.scene.tag === "DataFlow")
    return n.scene._1.keyframe;
  if (n.scene.tag === "Hold")
    return n.scene._1;
  if (n.scene.tag === "EnterNode" || n.scene.tag === "ExitNode" || n.scene.tag === "StepScene")
    return t;
  f();
}, fv = (t) => ({
  startT: 0,
  endT: t.totalDuration,
  path: [],
  layout: t.layout,
  placement: z0,
  windows: t.windows,
  spans: t.spans,
  keyframes: t.keyframes,
  initialKeyframe: t.initialKeyframe,
  edgeEndpoints: D
}), lv = (t) => I((n) => n < 1 ? [] : Et(0, n, t))(Vt(0, t.length - 1 | 0)), Rc = (t) => (n) => {
  const e = U0(n)(t.keyframes);
  if (e.tag === "Nothing")
    return D;
  if (e.tag === "Just")
    return e._1.nodes;
  f();
}, Fc = (t) => (n) => {
  const e = U0(n)(t.keyframes);
  if (e.tag === "Nothing")
    return D;
  if (e.tag === "Just")
    return e._1.edges;
  f();
}, gv = /* @__PURE__ */ w((t) => (n) => {
  const e = Me(t);
  return e.tag === "Just" && n.startT <= e._1.last.endT + 1e-6 ? kt(e._1.init)({ ...e._1.last, endT: Kr(e._1.last.endT)(n.endT), windows: kt(e._1.last.windows)(n) }) : kt(t)({ endT: n.endT, windows: [n] });
})([]), _v = (t) => (n) => (e) => Jg((r) => Jg((o) => o.target.tag === "FillWindow" ? o.startT <= e ? Zt("Node", 1, 1, o.target._2, void 0, D, D) : D : o.target.tag === "TokenWindow" && o.startT + (o.endT - o.startT) * 0.25 <= e ? Zt("Node", 1, 1, o.target._4, void 0, D, D) : D)(r.windows))(ht(
  (r) => e <= r.endT + t,
  gv(It((r) => (o) => it.compare(r.startT)(o.startT))(ht(
    (r) => r.target.tag === "FillWindow" || r.target.tag === "TokenWindow",
    n
  )))
)), dv = (t) => (n) => (e) => Ln(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), hv = (t) => (n) => (e) => Ln((r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e, t), pv = (t) => (n) => (e) => Ln((r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e, t), mv = (t) => (n) => (e) => Ln(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), ra = (t) => (n) => (e) => jt((r) => e(r) && n >= r.startT && n < r.endT)(t), Za = (t) => (n) => {
  if (n < t.startT)
    return Te("AtKeyframe", t.initialKeyframe);
  const e = jt((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return Te("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return Te("AtKeyframe", e._1.scene._1.keyframe);
    if (e._1.scene.tag === "Hold")
      return Te("AtKeyframe", e._1.scene._1);
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode" || e._1.scene.tag === "StepScene")
      return Te("AtKeyframe", t.initialKeyframe);
    f();
  }
  if (e.tag === "Nothing")
    return Te("AtKeyframe", w(cv)(t.initialKeyframe)(t.spans));
  f();
}, $v = (t) => (n) => {
  const e = Za(t)(n), r = U0((() => {
    if (e.tag === "AtKeyframe")
      return e._1;
    if (e.tag === "InTransition")
      return e._2;
    f();
  })())(t.keyframes);
  if (r.tag === "Just")
    return r._1.kind;
  if (r.tag === "Nothing")
    return js;
  f();
}, yv = (t) => (n) => {
  const e = Za(t)(n);
  if (e.tag === "AtKeyframe")
    return On(3)(e._1) === "kf-" ? "" : e._1;
  if (e.tag === "InTransition")
    return On(3)(e._2) === "kf-" ? "" : e._2;
  f();
}, xv = {
  nodes: D,
  edges: D,
  tokens: D,
  camera: { center: { x: 0, y: 0 }, zoom: 1 },
  frameTitle: "",
  staticKind: js,
  visited: D,
  nodeFadeAlpha: D,
  nodeLabelFadeAlpha: D,
  edgeFadeAlpha: D,
  nodeInvert: D
}, vv = { nodes: D, edges: D, chipExtras: D, edgeLabels: D }, Tv = {
  segment: {
    startT: 0,
    endT: 0,
    path: [],
    layout: vv,
    placement: z0,
    windows: [],
    spans: [],
    keyframes: D,
    initialKeyframe: "",
    edgeEndpoints: D
  },
  state: xv,
  bgAlpha: 1,
  blur: 0,
  minis: [],
  role: Se
}, oa = (t) => {
  const n = t.levels.length - 1 | 0;
  return n >= 0 && n < t.levels.length ? t.levels[n] : Tv;
}, wv = (t) => (n) => {
  const e = tv(n)(t.nodes);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just") {
    const r = e._1, o = (i) => i.x >= r.x - 1 && i.x <= r.x + r.w + 1 && i.y >= r.y - 1 && i.y <= r.y + r.h + 1;
    return Nt((i) => (() => {
      if (0 < i._2.length) {
        const u = i._2.length - 1 | 0;
        return o(i._2[0]) || u >= 0 && u < i._2.length && o(i._2[u]);
      }
      const s = i._2.length - 1 | 0;
      return s >= 0 && s < i._2.length && o(i._2[s]);
    })() ? T("Just", i._1) : v)(nv(t.edges));
  }
  f();
}, Nv = (t) => (n) => {
  const e = Za(t)(n);
  if (e.tag === "AtKeyframe")
    return Rc(t)(e._1);
  if (e.tag === "InTransition")
    return Zn(F.compare, Vn, Rc(t)(e._1), Rc(t)(e._2));
  f();
}, Jv = (t) => (n) => {
  const e = Za(t)(n);
  if (e.tag === "AtKeyframe")
    return Fc(t)(e._1);
  if (e.tag === "InTransition")
    return Zn(F.compare, Vn, Fc(t)(e._1), Fc(t)(e._2));
  f();
}, Cv = (t) => (n) => (e) => {
  const r = Tn(t), o = r.h / Kr(1e-4)(e.zoom), i = r.w / Kr(1e-4)(e.zoom);
  return {
    ...e,
    center: {
      x: i >= n.w ? n.x + n.w / 2 : Cg(n.x + i / 2)(n.x + n.w - i / 2)(e.center.x),
      y: o >= n.h ? n.y + n.h / 2 : Cg(n.y + o / 2)(n.y + n.h - o / 2)(e.center.y)
    }
  };
}, bv = (t) => (n) => (e) => Cv(t)((() => {
  const r = n * e.placement.scale, o = Tn(e.layout), i = (() => {
    const s = o.x * e.placement.scale + e.placement.tx, u = o.y * e.placement.scale + e.placement.ty;
    return { x: s, y: u, w: (o.x + o.w) * e.placement.scale + e.placement.tx - s, h: (o.y + o.h) * e.placement.scale + e.placement.ty - u };
  })();
  return { x: i.x - r, y: i.y - r, w: i.w + r * 2, h: i.h + r * 2 };
})()), kv = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : Kr(0)(bi(1)((n - t.startT) / e));
}, Xi = (t) => (n) => {
  const e = t.endT - t.startT;
  return e <= 0 ? 1 : Kr(0)(bi(1)((n - t.startT) / e));
}, Sv = (t) => (n) => (e) => (r) => (o) => {
  const i = ra(n)(e)((s) => s.target.tag === "EdgeWindow" && s.target._2.tag === "Retract" && s.target._1 === o);
  if (i.tag === "Just") {
    const s = No(t.timing.edgeEasing)(Xi(i._1)(e)), u = i._1.target.tag === "EdgeWindow" ? i._1.target._2 : ta("Extend", vf);
    if (u.tag === "Retract")
      return Ji("Retracting", u._1, s);
    if (u.tag === "Extend")
      return Ji("Extending", u._1, s);
    f();
  }
  if (i.tag === "Nothing") {
    if (dv(n)(e)(o))
      return Ac;
    const s = ra(n)(e)((u) => u.target.tag === "EdgeWindow" && u.target._1 === o);
    if (s.tag === "Just") {
      const u = No(t.timing.edgeEasing)(Xi(s._1)(e)), a = s._1.target.tag === "EdgeWindow" ? s._1.target._2 : ta("Extend", vf);
      if (a.tag === "Retract")
        return Ji("Retracting", a._1, u);
      if (a.tag === "Extend")
        return Ji("Extending", a._1, u);
      f();
    }
    if (s.tag === "Nothing")
      return mv(n)(e)(o) ? Ac : ev(o)(r) ? Ed : Ac;
  }
  f();
}, Lv = (t) => (n) => (e) => {
  const r = Jv(n)(e);
  return Pd(I((o) => b(o, Sv(t)(n.windows)(e)(r)(o)))((() => {
    const o = (i) => {
      if (i.tag === "Leaf")
        return D;
      if (i.tag === "Node")
        return Zt("Node", i._1, i._2, i._3, void 0, o(i._5), o(i._6));
      f();
    };
    return tn(Pe.foldr, o(n.layout.edges));
  })()));
}, Ev = (t) => (n) => (e) => (r) => {
  const o = ra(t)(n)((i) => i.target.tag === "NodeWindow" && i.target._1 === r && i.target._2 === "PlopOut");
  if (o.tag === "Just") {
    const i = Xi(o._1)(n), s = o._1.target.tag === "NodeWindow" ? o._1.target._2 : xf;
    if (s === "PlopIn")
      return Ci("PloppingIn", i);
    if (s === "PlopOut")
      return Ci("PloppingOut", i);
    f();
  }
  if (o.tag === "Nothing") {
    if (hv(t)(n)(r))
      return Pc;
    const i = ra(t)(n)((s) => s.target.tag === "NodeWindow" && s.target._1 === r);
    if (i.tag === "Just") {
      const s = Xi(i._1)(n), u = i._1.target.tag === "NodeWindow" ? i._1.target._2 : xf;
      if (u === "PlopIn")
        return Ci("PloppingIn", s);
      if (u === "PlopOut")
        return Ci("PloppingOut", s);
      f();
    }
    if (i.tag === "Nothing")
      return pv(t)(n)(r) ? Pc : rv(r)(e) ? jx : Pc;
  }
  f();
}, Pv = (t) => (n) => {
  const e = Nv(t)(n);
  return ov(I((r) => b(r, Ev(t.windows)(n)(e)(r)))((() => {
    const r = (o) => {
      if (o.tag === "Leaf")
        return D;
      if (o.tag === "Node")
        return Zt("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
      f();
    };
    return tn(Pe.foldr, r(t.layout.nodes));
  })()));
}, Av = (t) => (n) => (e) => n.target.tag === "TokenWindow" ? b(
  n.target._1,
  e < n.startT ? Ec : e >= n.endT ? wg : na(
    "Travelling",
    {
      edge: n.target._2,
      direction: n.target._3,
      progress: No(t.timing.tokenEasing)(Xi(n)(e)),
      labels: n.target._6,
      source: n.target._4,
      target: n.target._5,
      holdPre: n.target._7,
      holdPost: n.target._8
    }
  )
) : n.target.tag === "FillWindow" ? b(
  n.target._1,
  e < n.startT ? Ec : e >= n.endT ? wg : na("Filling", { node: n.target._2, progress: Xi(n)(e), labels: n.target._3 })
) : b("", Ec), Rv = (t) => (n) => (e) => iv(I((r) => Av(t)(r)(e))(ht(
  (r) => r.target.tag === "TokenWindow" || r.target.tag === "FillWindow",
  n
))), Fv = (t) => (n) => (e) => ({
  nodes: Pv(n)(e),
  edges: Lv(t)(n)(e),
  tokens: Rv(t)(n.windows)(e),
  camera: qi(t.cameraConfig)(n.layout)(t.cameraSpans)(e).camera,
  frameTitle: yv(n)(e),
  staticKind: $v(n)(e),
  visited: _v(t.timing.hatchHold)(n.windows)(e),
  nodeFadeAlpha: D,
  nodeLabelFadeAlpha: D,
  edgeFadeAlpha: D,
  nodeInvert: D
}), Ei = (t) => (n) => (e) => (r) => ({ segment: e, state: Fv(t)(e)(n), bgAlpha: 1, blur: 0, minis: Gv(t)(n)(e), role: r }), Gv = (t) => (n) => (e) => Nt((r) => {
  const o = ea(t)(kt(e.path)(r))(n);
  if (o.tag === "Just")
    return T("Just", { ...Ei(t)(sv(o._1.startT)(o._1.endT - 1e-4)(n))(o._1)(Ad), bgAlpha: 0 });
  if (o.tag === "Nothing")
    return v;
  f();
})((() => {
  const r = (o) => {
    if (o.tag === "Leaf")
      return D;
    if (o.tag === "Node")
      return Zt("Node", o._1, o._2, o._3, void 0, r(o._5), r(o._6));
    f();
  };
  return tn(Pe.foldr, r(e.layout.nodes));
})()), Iv = (t) => (n) => (e) => W1(
  v,
  B1,
  (r) => r.direction === "DiveIn" && Es.eq(r.parentPath)(n.path) && e >= r.startT - 0.7 && e < r.startT ? T("Just", { node: r.node, phase: (e - (r.startT - 0.7)) / 0.7 }) : v,
  t.dives
), Bv = (t) => (n) => (e) => (r) => {
  const o = Iv(t)(n)(e);
  if (o.tag === "Just") {
    const i = Ne(3.141592653589793 * o._1.phase * 3);
    return {
      ...r,
      state: { ...r.state, nodeInvert: Zt("Node", 1, 1, o._1.node, 1 * i * i, D, D) }
    };
  }
  if (o.tag === "Nothing")
    return r;
  f();
}, Rd = (t) => (n) => Nt((e) => {
  const r = jt((o) => o.direction === "DiveIn" && Es.eq(o.childPath)((() => {
    const i = e.length + 1 | 0;
    return i < 1 ? [] : Et(0, i, n);
  })()))(t.dives);
  if (r.tag === "Just") {
    const o = ea(t)(e)(r._1.startT - 1e-4);
    if (o.tag === "Just")
      return T(
        "Just",
        (() => {
          const i = Ei(t)(r._1.startT - 1e-4)(o._1)(Ad);
          return { ...i, state: { ...i.state, nodeFadeAlpha: Zt("Node", 1, 1, r._1.node, 0, D, D) } };
        })()
      );
    if (o.tag === "Nothing")
      return v;
    f();
  }
  if (r.tag === "Nothing")
    return v;
  f();
})(lv(n)), Fd = (t) => (n) => {
  const e = ht((o) => n >= o.startT && n < o.endT, t.segments), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r] : fv(t);
}, Dv = (t) => (n) => (e) => {
  const r = kv(e)(n), o = ea(t)(e.parentPath)((() => {
    if (e.direction === "DiveIn")
      return e.startT - 1e-4;
    if (e.direction === "DiveOut")
      return e.endT - 1e-4;
    f();
  })()), i = ea(t)(e.childPath)((() => {
    if (e.direction === "DiveIn")
      return e.endT;
    if (e.direction === "DiveOut")
      return e.startT - 1e-4;
    f();
  })()), s = (() => {
    if (e.direction === "DiveIn")
      return No(wo)(r);
    if (e.direction === "DiveOut")
      return 1 - No(wo)(r);
    f();
  })(), u = 1 - Kr(0)(bi(1)((s - 0.1) / 0.25)), a = 1 - Kr(0)(bi(1)((s - 0.1) / 0.25)), c = 1 - Kr(0)(bi(1)((s - 0.8) / 0.2)), l = (d) => {
    const g = Ei(t)((() => {
      if (e.direction === "DiveIn")
        return e.startT - 1e-4;
      if (e.direction === "DiveOut")
        return e.endT - 1e-4;
      f();
    })())(d)(uv);
    return {
      ...av(wv(d.layout)(e.node))(a)({
        ...g,
        state: {
          ...g.state,
          nodeFadeAlpha: Zt("Node", 1, 1, e.node, u, D, D),
          nodeLabelFadeAlpha: Zt("Node", 1, 1, e.node, a, D, D)
        }
      }),
      minis: ht((p) => !Es.eq(p.segment.path)(e.childPath), g.minis),
      bgAlpha: c
    };
  }, _ = 0 + 1 * Kr(0)(bi(1)((s - 0.1) / 0.5));
  return [
    ...Rd(t)(e.parentPath),
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
        return [Ei(t)(n)(Fd(t)(n))(Se)];
      f();
    })()
  ];
}, zv = (t) => (n) => jt((e) => n >= e.startT && n < e.endT)(t.dives), Gd = (t) => (n) => {
  const e = Fd(t)(n), r = Ei(t)(n)(e)(Se), o = t.dives.length !== 0, i = qi(t.cameraConfig)(t.layout)(t.cameraSpans)(n).camera, s = bv(t.layout)(t.cameraConfig.padding)(e)(i), u = Bv(t)(e)(n)({ ...r, state: { ...r.state, camera: s } }), a = Rd(t)(e.path), c = zv(t)(n);
  if (c.tag === "Just")
    return { levels: Dv(t)(n)(c._1), camera: i, rootLayout: t.layout, hasDives: o, diving: !0 };
  if (c.tag === "Nothing")
    return { levels: kt(a)(u), camera: s, rootLayout: t.layout, hasDives: o, diving: !1 };
  f();
}, Hv = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Qv = (t) => {
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
          const y = p, x = m;
          if (y >= n) {
            h = !1, $ = x;
            continue;
          }
          if (c >= 0 && c < t.length) {
            if (y >= 0 && y < t.length) {
              p = y + 1 | 0, m = (() => {
                const J = t[c].position, N = t[c].size, C = t[y].position, k = t[y].size;
                return J._1 < C._1 + k._1 && C._1 < J._1 + N._1 && J._2 < C._2 + k._2 && C._2 < J._2 + N._2;
              })() ? x + 1 | 0 : x;
              continue;
            }
            p = y + 1 | 0, m = x;
            continue;
          }
          h = !1, $ = x;
        }
        return $;
      };
      i = c + 1 | 0, s = _(c + 1 | 0)(l);
    }
    return a;
  })(0)(0);
}, bg = (t) => w((n) => (e) => n + Ly(e.start)(e.end))(0)(t.segments), Ov = (t) => (n) => (e) => ({
  crossingCount: w((r) => (o) => r + o.jumps.length | 0)(0)(n),
  bendCount: w((r) => (o) => r + o.bends.length | 0)(0)(n),
  totalEdgeLength: w((r) => (o) => r + bg(o))(0)(n),
  maxEdgeLength: w((r) => (o) => Hv(r)(bg(o)))(0)(n),
  nodeOverlapCount: Qv(t),
  constraintViolations: e,
  jumpCount: w((r) => (o) => r + o.jumps.length | 0)(0)(n)
}), K0 = (t) => t, gn = (t) => (e) => {
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
}, V0 = /* @__PURE__ */ K0("LEFT"), Wv = /* @__PURE__ */ K0("RIGHT"), Id = /* @__PURE__ */ K0("UNDEFINED"), qv = {
  eq: (t) => (n) => t === "LEFT" ? n === "LEFT" : t === "RIGHT" ? n === "RIGHT" : t === "UP" ? n === "UP" : t === "DOWN" ? n === "DOWN" : t === "UNDEFINED" && n === "UNDEFINED"
}, Xv = {
  compare: (t) => (n) => {
    if (t === "LEFT")
      return n === "LEFT" ? fe : Wn;
    if (n === "LEFT")
      return qn;
    if (t === "RIGHT")
      return n === "RIGHT" ? fe : Wn;
    if (n === "RIGHT")
      return qn;
    if (t === "UP")
      return n === "UP" ? fe : Wn;
    if (n === "UP")
      return qn;
    if (t === "DOWN")
      return n === "DOWN" ? fe : Wn;
    if (n === "DOWN")
      return qn;
    if (t === "UNDEFINED" && n === "UNDEFINED")
      return fe;
    f();
  },
  Eq0: () => qv
}, Yv = (t) => (e) => {
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
}, Mv = { x: 0, y: 0 }, Be = (t) => (n) => (e) => {
  const r = gn(t)(e.cNodes);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cNodes: tt(st)(t)(n(r._1))(e.cNodes) };
  f();
}, Ns = (t) => (n) => (e) => {
  const r = gn(t)(e.cGroups);
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just")
    return { ...e, cGroups: tt(st)(t)(n(r._1))(e.cGroups) };
  f();
}, Uv = (t) => w((n) => (e) => Be(e)((r) => ({ ...r, hitboxPreCompaction: r.hitbox }))(n))(t)(t.cNodeOrder), Kv = (t) => {
  const n = w((e) => (r) => {
    const o = gn(r)(t.cNodes);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return w((i) => (s) => qt(st)(Nn)(s)([r])(i))(e)(o._1.constraints);
    f();
  })(D)(t.cNodeOrder);
  return w((e) => (r) => Be(r)((o) => ({
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
}, Vv = (t) => (n) => Be(t)((e) => ({ ...e, ignoreSpacing: { left: e.ignoreSpacing.left || n.left, right: e.ignoreSpacing.right || n.right, up: e.ignoreSpacing.up || n.up, down: e.ignoreSpacing.down || n.down } })), jv = (t) => {
  const n = w((e) => (r) => Ns(r)((o) => ({ ...o, outDegree: o.outDegreeReal }))(e))(t)(t.cGroupOrder);
  return w((e) => (r) => Be(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder);
}, sr = { left: !1, right: !1, up: !1, down: !1 }, Zv = { horizontalSpacing: (t) => (n) => 0, verticalSpacing: (t) => (n) => 0 }, j0 = (t) => w((n) => (e) => {
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
    })(v)(r._1.cNodes), i = Ns(e)((s) => ({ ...s, reference: o }))(n);
    if (o.tag === "Nothing")
      return i;
    if (o.tag === "Just") {
      const s = gn(o._1)(i.cNodes);
      if (s.tag === "Nothing")
        return i;
      if (s.tag === "Just") {
        const u = s._1;
        return w((a) => (c) => Be(c)((l) => ({ ...l, cGroupOffset: { x: l.hitbox.x - u.hitbox.x, y: l.hitbox.y - u.hitbox.y } }))(a))(i)(r._1.cNodes);
      }
    }
  }
  f();
})(t)(t.cGroupOrder), Ae = (t) => j0({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return D;
      if (e.tag === "Node")
        return Zt("Node", e._1, e._2, e._3, { ...e._4, hitbox: { ...e._4.hitbox, x: -e._4.hitbox.x - e._4.hitbox.width } }, n(e._5), n(e._6));
      f();
    };
    return n(t.cNodes);
  })()
}), xr = (t) => j0({
  ...t,
  cNodes: (() => {
    const n = (e) => {
      if (e.tag === "Leaf")
        return D;
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
}), Bd = (t) => {
  const n = w((e) => (r) => Ns(r)((o) => ({ ...o, outDegree: 0, outDegreeReal: 0, incomingConstraints: [] }))(e))(t)(t.cGroupOrder);
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
            return a._1.cGroup.tag === "Just" && a._1.cGroup._1 !== i ? Ns(a._1.cGroup._1)((c) => ({ ...c, outDegree: c.outDegree + 1 | 0, outDegreeReal: c.outDegreeReal + 1 | 0 }))(Ns(i)((c) => Je(vo)(u)(c.incomingConstraints) ? c : { ...c, incomingConstraints: [...c.incomingConstraints, u] })(s)) : s;
          f();
        })(e)(o._1.constraints);
      }
    }
    f();
  })(n)(n.cNodeOrder);
}, $u = (t) => {
  const n = Kv(t.cGraph);
  return { ...t, cGraph: Bd(w((e) => (r) => Be(r)((o) => ({ ...o, startPos: -1e308 }))(e))(n)(n.cNodeOrder)) };
}, tT = (t) => (n) => w((e) => (r) => {
  if (t === "LEFT" || t === "UP") {
    const i = r._2;
    return Be(r._1)((s) => ({ ...s, constraints: [...s.constraints, i] }))(e);
  }
  const o = r._1;
  return Be(r._2)((i) => ({ ...i, constraints: [...i.constraints, o] }))(e);
})(n)(t === "LEFT" || t === "RIGHT" ? n.predefinedHorizontalConstraints : n.predefinedVerticalConstraints), er = (t) => {
  const n = {
    ...t,
    cGraph: tT(t.direction)({
      ...t.cGraph,
      cNodes: (() => {
        const e = (r) => {
          if (r.tag === "Leaf")
            return D;
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
    cGraph: Bd((() => {
      if (n.constraintAlgorithm.tag === "Nothing")
        return n.cGraph;
      if (n.constraintAlgorithm.tag === "Just")
        return n.constraintAlgorithm._1(n);
      f();
    })())
  };
}, nT = (t) => (n) => (e) => {
  const r = { ...e, direction: n };
  if (t === "UNDEFINED")
    return n === "LEFT" ? er(r) : n === "RIGHT" ? er({ ...r, cGraph: Ae(r.cGraph) }) : n === "UP" ? er({ ...r, cGraph: xr(r.cGraph) }) : n === "DOWN" ? er({ ...r, cGraph: Ae(xr(r.cGraph)) }) : r;
  if (t === "LEFT")
    return n === "RIGHT" ? $u({ ...r, cGraph: Ae(r.cGraph) }) : n === "UP" ? er({ ...r, cGraph: xr(r.cGraph) }) : n === "DOWN" ? er({ ...r, cGraph: Ae(xr(r.cGraph)) }) : r;
  if (t === "RIGHT")
    return n === "LEFT" ? $u({ ...r, cGraph: Ae(r.cGraph) }) : n === "UP" ? er({ ...r, cGraph: xr(Ae(r.cGraph)) }) : n === "DOWN" ? er({ ...r, cGraph: Ae(xr(Ae(r.cGraph))) }) : r;
  if (t === "UP")
    return n === "LEFT" ? er({ ...r, cGraph: xr(r.cGraph) }) : n === "RIGHT" ? er({ ...r, cGraph: Ae(xr(r.cGraph)) }) : n === "DOWN" ? $u({ ...r, cGraph: Ae(r.cGraph) }) : r;
  if (t === "DOWN")
    return n === "LEFT" ? er({ ...r, cGraph: xr(Ae(r.cGraph)) }) : n === "RIGHT" ? er({ ...r, cGraph: Ae(xr(Ae(r.cGraph))) }) : n === "UP" ? $u({ ...r, cGraph: Ae(r.cGraph) }) : r;
  f();
}, Dd = (t) => (n) => n.finished || !Yv(t)(n.cGraph.supportedDirections) || (t === "LEFT" ? n.direction === "LEFT" : t === "RIGHT" ? n.direction === "RIGHT" : t === "UP" ? n.direction === "UP" : t === "DOWN" ? n.direction === "DOWN" : t === "UNDEFINED" && n.direction === "UNDEFINED") ? n : nT(n.direction)(t)(n), eT = (t) => {
  if (t.finished)
    return t;
  const n = t.direction === "UNDEFINED" ? Dd(V0)(t) : t, e = { ...n, cGraph: jv(n.cGraph) };
  if (e.compactionAlgorithm.tag === "Nothing")
    return e;
  if (e.compactionAlgorithm.tag === "Just")
    return e.compactionAlgorithm._1(e);
  f();
}, zd = (t) => (n) => (e) => {
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
      cNodes: Je(vo)(t)(o._1.cNodes) ? o._1.cNodes : [...o._1.cNodes, t],
      reference: (() => {
        if (o._1.reference.tag === "Nothing")
          return T("Just", t);
        if (o._1.reference.tag === "Just")
          return T("Just", o._1.reference._1);
        f();
      })()
    })(e.cGroups)
  } : e;
}, Hd = (t) => (n) => ({
  id: n.nextCNodeId,
  graph: {
    ...n,
    cNodes: tt(st)(n.nextCNodeId)({
      id: n.nextCNodeId,
      origin: t.origin,
      kind: t.kind,
      cGroup: v,
      cGroupOffset: Mv,
      hitbox: t.hitbox,
      hitboxPreCompaction: t.hitbox,
      constraints: [],
      startPos: -1e308,
      ignoreSpacing: sr
    })(n.cNodes),
    cNodeOrder: [...n.cNodeOrder, n.nextCNodeId],
    nextCNodeId: n.nextCNodeId + 1 | 0
  }
}), Z0 = (t) => (n) => {
  const e = n.nextCGroupId;
  return {
    id: e,
    graph: w((r) => (o) => zd(o)(e)(r))({
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
}, rT = (t) => w((n) => (e) => {
  const r = gn(e)(n.cNodes);
  return r.tag === "Just" && r._1.cGroup.tag === "Nothing" ? Z0({ master: v, nodes: [e] })(n).graph : n;
})(t)(t.cNodeOrder), oT = (t) => ({
  cGraph: Uv(rT(j0(t))),
  direction: Id,
  compactionAlgorithm: v,
  constraintAlgorithm: v,
  spacingsHandler: Zv,
  lockFun: v,
  finished: !1
}), iT = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, sT = (t) => (n) => {
  const e = it.compare(t._1)(n._1);
  return e === "LT" ? Wn : e === "GT" ? qn : st.compare(t._2)(n._2);
}, uT = /* @__PURE__ */ (() => {
  const t = pe.unfoldr(Ze);
  return (n) => t(_e("IterNode", n, je));
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
}, Sg = (t) => t.kind.tag === "Nothing" ? !1 : t.kind.tag === "Just" && t.kind._1 === "vs", Lg = (t) => t.kind.tag === "Nothing" || !(t.kind.tag === "Just" && t.kind._1 === "vs"), tc = (t) => (n) => sT(b(t.hitbox.x + t.hitbox.width / 2, t.id))(b(n.hitbox.x + n.hitbox.width / 2, n.id)), aT = (t) => (n) => {
  const e = oo(Ht, v, (r) => tc(t)(r) === "LT", n);
  if (e.tag === "Just") {
    const r = q1(Ht, v, e._1, t, n);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return kt(n)(t);
  f();
}, Qd = (t) => (n) => {
  const e = ht((o) => tc(o)(t) === "LT", n), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? T("Just", e[r]) : v;
}, cT = (t) => (n) => {
  const e = aT(n)(t.intervals), r = jt((i) => tc(n)(i) === "LT")(e), o = tt(st)(n.id)((() => {
    const i = Qd(n)(e);
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
}, fT = (t) => (n) => {
  const e = it.compare(t.low ? t.node.hitbox.y : t.node.hitbox.y + t.node.hitbox.height)(n.low ? n.node.hitbox.y : n.node.hitbox.y + n.node.hitbox.height);
  return e === "EQ" ? t.low ? t.low && !n.low ? qn : fe : n.low ? Wn : fe : e;
}, lT = (t) => w((n) => (e) => Be(e.id)((r) => ({ ...r, constraints: [] }))(n))(t)(Nt((n) => gn(n)(t.cNodes))(t.cNodeOrder)), Gc = (t) => (n) => w((e) => (r) => {
  const o = gn(r._1)(e.cNodes);
  if (o.tag === "Just")
    return Be(r._1)((i) => ({ ...i, constraints: [...i.constraints, ...r._2] }))(e);
  if (o.tag === "Nothing")
    return e;
  f();
})(n)(uT(t)), Od = (t) => (n) => n.kind.tag !== "Nothing" && n.kind.tag === "Just" && n.kind._1 === "vs" ? n.ignoreSpacing.up ? n.ignoreSpacing.down ? n : { ...n, hitbox: { ...n.hitbox, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t - 0.01, height: n.hitbox.height + t + 0.01 } } : { ...n, hitbox: { ...n.hitbox, y: n.hitbox.y - t, height: n.hitbox.height + 2 * t } }, Eg = (t) => (n) => (e) => w((r) => (o) => e(o) ? Be(o.id)(Od(t))(r) : r)(n)(Nt((r) => gn(r)(n.cNodes))(n.cNodeOrder)), gT = (t) => (n) => {
  const e = (r, o, i) => {
    const s = Be(i)(Od(t))(r);
    return o.length <= 1 ? s : w((u) => (a) => a === i ? u : Be(a)((c) => c.ignoreSpacing.up ? { ...c, hitbox: { ...c.hitbox, y: c.hitbox.y + t + 0.01, height: c.hitbox.height - t - 0.01 } } : c.ignoreSpacing.down ? { ...c, hitbox: { ...c.hitbox, height: c.hitbox.height - t - 0.01 } } : c)(u))(s)(o);
  };
  return w((r) => (o) => {
    if (o.master.tag === "Nothing")
      return 0 < o.cNodes.length ? e(r, o.cNodes, o.cNodes[0]) : r;
    if (o.master.tag === "Just")
      return e(r, o.cNodes, o.master._1);
    f();
  })(n)(Nt((r) => gn(r)(n.cGroups))(n.cGroupOrder));
}, _T = (t) => (n) => {
  const e = Qd(n)(t.intervals), r = jt((i) => tc(n)(i) === "LT")(t.intervals), o = e.tag === "Just" && (() => {
    const i = kg(n.id)(t.cand);
    return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === e._1.id)) && e._1.cGroup.tag === "Just" && n.cGroup.tag === "Just" && e._1.cGroup._1 !== n.cGroup._1;
  })() ? qt(st)(Nn)(e._1.id)([n.id])(t.constraints) : t.constraints;
  return {
    ...t,
    constraints: r.tag === "Just" && (() => {
      const i = kg(r._1.id)(t.cand);
      return (i.tag === "Nothing" ? !1 : i.tag === "Just" && (i._1.tag === "Nothing" ? !1 : i._1.tag === "Just" && i._1._1 === n.id)) && n.cGroup.tag === "Just" && r._1.cGroup.tag === "Just" && n.cGroup._1 !== r._1.cGroup._1;
    })() ? qt(st)(Nn)(n.id)([r._1.id])(o) : o,
    intervals: ht((i) => i.id !== n.id, t.intervals)
  };
}, dT = (t) => (n) => n.low ? cT(t)(n.node) : _T(t)(n.node), Ic = (t) => (n) => w(dT)({ intervals: [], cand: D, constraints: D })(It(fT)(wt(ht(
  t,
  Nt((e) => gn(e)(n.cNodes))(n.cNodeOrder)
))((e) => [{ node: e, low: !0 }, { node: e, low: !1 }]))).constraints, hT = (t) => (n) => {
  const e = iT(0)(t / 2 - 0.5), r = Gc(Ic(Sg)(Eg(e)(n)(Sg)))(n), o = Gc(Ic(Lg)(Eg(e)(r)(Lg)))(r);
  return Gc(Ic((i) => !0)(gT(e)(o)))(o);
}, pT = (t) => (n) => hT(t)(lT(n.cGraph)), ia = (t) => (n) => {
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
}, tl = (t) => (n) => (e) => (r) => (o) => ({
  id: t,
  representedEdges: [o],
  affectedBends: [n, e],
  hitbox: { x: ia(n._1)(e._1), y: ia(n._2)(e._2), width: Mn(n._1 - e._1), height: Mn(n._2 - e._2) },
  ignoreSpacing: sr,
  potentialGroupParents: (() => {
    if (r.tag === "Nothing")
      return [];
    if (r.tag === "Just")
      return [r._1];
    f();
  })(),
  aPort: v
}), mT = (t) => (n) => {
  const e = ia(t.hitbox.x)(n.hitbox.x), r = ia(t.hitbox.y)(n.hitbox.y);
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
}, $T = (t) => (n) => Mn(t.hitbox.x - n.hitbox.x) <= 1e-4 && n.hitbox.y - (t.hitbox.y + t.hitbox.height) <= 1e-4 && t.hitbox.y - (n.hitbox.y + n.hitbox.height) <= 1e-4, yT = (t) => (n) => Mn(t.hitbox.x - n.hitbox.x) <= 1e-4 ? it.compare(t.hitbox.y)(n.hitbox.y) : t.hitbox.x < n.hitbox.x ? Wn : qn, Wd = (t, n) => ({ tag: t, _1: n }), nl = /* @__PURE__ */ hn(F)(Yt), nc = (t) => (e) => {
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
        return r._2.tag === "Nothing" ? fe : Wn;
      if (r._2.tag === "Nothing")
        return qn;
      if (e._2.tag === "Just" && r._2.tag === "Just")
        return F.compare(e._2._1)(r._2._1);
      f();
    },
    Eq0: () => t
  };
  return w((e) => (r) => tt(n)(r)()(e))(D);
})(), eo = (t) => (e) => {
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
}, xT = /* @__PURE__ */ w((t) => (n) => tt(Xv)(n)()(t))(D), Bc = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = fd.compare(t)(s._3);
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
}, vT = (t) => (n) => {
  const e = nl(I((i) => b(i.id, i))(t)), r = Nt((i) => nc(i)(e))(n), o = st.compare((() => {
    const i = Ag(I((s) => b(s.from.node, s.from.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })())((() => {
    const i = Ag(I((s) => b(s.to.node, s.to.port))(r));
    if (i.tag === "Leaf")
      return 0;
    if (i.tag === "Node")
      return i._2;
    f();
  })());
  if (o === "LT")
    return { ...sr, left: !0, right: !1 };
  if (o === "GT")
    return { ...sr, left: !1, right: !0 };
  if (o === "EQ")
    return sr;
  f();
}, TT = (t) => Nt((n) => {
  if (n.direction === "V")
    return T("Just", { start: n.start, end: n.end });
  if (n.direction === "H")
    return v;
  f();
})(t.segments), yu = (t) => (n) => (e) => (r) => {
  if (r.tag === "Just") {
    const o = eo(e)(n);
    if (o.tag === "Just") {
      const i = jt((s) => s.id === r._1)(o._1);
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
}, wT = (t) => (n) => (e) => {
  const r = Hd({
    origin: T("Just", Wd("SegmentOrigin", e)),
    kind: T("Just", "vs"),
    hitbox: e.hitbox
  })(n.cGraph), o = Vv(r.id)(e.ignoreSpacing)(r.graph);
  return {
    ...n,
    cGraph: (() => {
      if (0 < e.potentialGroupParents.length) {
        const i = gn(e.potentialGroupParents[0])(o.cNodes);
        if (i.tag === "Just") {
          if (i._1.cGroup.tag === "Just")
            return zd(r.id)(i._1.cGroup._1)(o);
          if (i._1.cGroup.tag === "Nothing")
            return o;
          f();
        }
        if (i.tag === "Nothing")
          return o;
        f();
      }
      return Z0({ master: T("Just", r.id), nodes: [r.id] })(o).graph;
    })(),
    edgeToCs: w((i) => (s) => qt(F)(Nn)(s)([r.id])(i))(n.edgeToCs)(e.representedEdges),
    lockMap: tt(st)(r.id)(vT(t)(e.representedEdges))(n.lockMap)
  };
}, NT = (t) => (n) => (e) => {
  const r = Bt(
    (o) => v,
    (o) => (i) => T("Just", { head: o, tail: i }),
    It(yT)(n)
  );
  if (r.tag === "Nothing")
    return e;
  if (r.tag === "Just") {
    const o = w((i) => (s) => $T(i.survivor)(s) ? { ...i, survivor: mT(i.survivor)(s) } : { survivor: s, merged: [...i.merged, i.survivor] })({ survivor: r._1.head, merged: [] })(r._1.tail);
    return w(wT(t))(e)([...o.merged, o.survivor]);
  }
  f();
}, JT = (t) => ({
  cGraph: {
    cNodes: D,
    cNodeOrder: [],
    cGroups: D,
    cGroupOrder: [],
    supportedDirections: xT([Id, V0, Wv]),
    predefinedHorizontalConstraints: [],
    predefinedVerticalConstraints: [],
    nextCNodeId: 0,
    nextCGroupId: 0
  },
  nodeToC: D,
  edgeToCs: D,
  lockMap: D
}), CT = (t) => {
  const n = V(4);
  return { x: t.position._1 * n, y: t.position._2 * n, width: t.size._1 * n, height: t.size._2 * n };
}, bT = (t) => (n) => (e) => w((r) => (o) => {
  const i = Hd({ origin: T("Just", Wd("NodeOrigin", o.node)), kind: v, hitbox: CT(o) })(r.cGraph), s = eo(o.node)(t), u = (() => {
    if (s.tag === "Nothing")
      return b(0, 0);
    if (s.tag === "Just")
      return s._1;
    f();
  })();
  return {
    ...r,
    cGraph: Z0({ master: T("Just", i.id), nodes: [i.id] })(i.graph).graph,
    nodeToC: tt(F)(o.node)(i.id)(r.nodeToC),
    lockMap: tt(st)(i.id)((() => {
      const a = u._1 - u._2 | 0;
      return a < 0 ? { ...sr, left: !0 } : a > 0 ? { ...sr, right: !0 } : sr;
    })())(r.lockMap)
  };
})(e)(n), kT = (t) => w((n) => (e) => qt(F)((r) => (o) => b(
  r._1 + o._1 | 0,
  r._2 + o._2 | 0
))(e.to.node)(b(1, 0))(qt(F)((r) => (o) => b(r._1 + o._1 | 0, r._2 + o._2 | 0))(e.from.node)(b(
  0,
  1
))(n)))(D)(t), ST = (t) => w((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? tt(F)(e.origin._1._1)(e.hitbox.x)(n) : n)(D)(Nt((n) => gn(n)(t.cNodes))(t.cNodeOrder)), LT = (t) => w((n) => (e) => e.origin.tag === "Just" && e.origin._1.tag === "NodeOrigin" ? tt(F)(e.origin._1._1)(e.hitbox.x - e.hitboxPreCompaction.x)(n) : n)(D)(Nt((n) => gn(n)(t.cNodes))(t.cNodeOrder)), ET = (t) => w((n) => (e) => {
  if (e.origin.tag === "Just" && e.origin._1.tag === "SegmentOrigin") {
    const r = e.hitbox.x - e.hitboxPreCompaction.x;
    return w((o) => (i) => tt(fd)(i)(r)(o))(n)(e.origin._1._1.affectedBends);
  }
  return n;
})(D)(Nt((n) => gn(n)(t.cNodes))(t.cNodeOrder)), qd = (t) => {
  const n = nl(I((e) => b(e.id, e))(t.edges));
  return Nt((e) => {
    const r = nc(e.edge)(n);
    if (r.tag === "Just")
      return e.reversed ? T(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.to.node,
          tgt: r._1.from.node,
          srcSide: yu(Xr)(t.ports)(r._1.to.node)(r._1.to.port),
          tgtSide: yu(Yr)(t.ports)(r._1.from.node)(r._1.from.port),
          path: e
        }
      ) : T(
        "Just",
        {
          edgeId: e.edge,
          src: r._1.from.node,
          tgt: r._1.to.node,
          srcSide: yu(Xr)(t.ports)(r._1.from.node)(r._1.from.port),
          tgtSide: yu(Yr)(t.ports)(r._1.to.node)(r._1.to.port),
          path: e
        }
      );
    if (r.tag === "Nothing")
      return v;
    f();
  })(t.paths);
}, PT = (t) => (n) => {
  const e = wt(n)((r) => {
    if (r.src === r.tgt)
      return [];
    if ((r.srcSide === "North" || r.srcSide === "South") && (r.tgtSide === "North" || r.tgtSide === "South"))
      return [];
    const o = eo(r.tgt)(t.nodeToC), i = (() => {
      if (o.tag === "Just")
        return gn(o._1)(t.cGraph.cNodes);
      if (o.tag === "Nothing")
        return v;
      f();
    })(), s = eo(r.src)(t.nodeToC), u = (() => {
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
    }, l = Nt((g) => gn(g)(t.cGraph.cNodes))((() => {
      const g = nc(r.edgeId)(t.edgeToCs);
      if (g.tag === "Nothing")
        return [];
      if (g.tag === "Just")
        return g._1;
      f();
    })()), _ = (() => {
      if (u.tag === "Just" && r.srcSide === "West") {
        const g = u._1;
        return Nt(c((p) => p < g.hitbox.x)((p) => (m) => ({ srcGroup: p, tgtGroup: m, delta: 1, weight: 100 })))(l);
      }
      return [];
    })(), d = (() => {
      if (u.tag === "Just" && r.tgtSide === "East") {
        const g = u._1;
        return Nt(c((p) => p > g.hitbox.x)((p) => (m) => ({ srcGroup: m, tgtGroup: p, delta: 1, weight: 100 })))(l);
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
      return Ln((s) => Je(Fr)(s)(i.representedEdges), r.origin._1._1.representedEdges);
    })(),
    vsLNodePair: (r) => (o) => r.origin.tag === "Just" && o.origin.tag === "Just" && (r.origin._1.tag === "SegmentOrigin" ? o.origin._1.tag === "NodeOrigin" : r.origin._1.tag === "NodeOrigin" && o.origin._1.tag === "SegmentOrigin"),
    edgeLengthEdges: (r) => e
  };
}, AT = (t) => (n) => {
  const e = V(4), r = ST(t), o = LT(t), i = nl(I((u) => b(u.id, b(u.from.node, u.to.node)))(n.edges)), s = ET(t);
  return {
    nodes: I((u) => {
      const a = eo(u.node)(r);
      if (a.tag === "Just")
        return { ...u, position: b(a._1 / e, u.position._2) };
      if (a.tag === "Nothing")
        return u;
      f();
    })(n.nodes),
    edges: I((u) => {
      const a = nc(u.edge)(i), c = (() => {
        if (a.tag === "Nothing")
          return u.segments;
        if (a.tag === "Just") {
          const l = eo(a._1._1)(o), _ = (() => {
            if (l.tag === "Nothing")
              return 0;
            if (l.tag === "Just")
              return l._1;
            f();
          })(), d = eo(a._1._2)(o), g = (() => {
            if (d.tag === "Nothing")
              return 0;
            if (d.tag === "Just")
              return d._1;
            f();
          })();
          return Xt((() => {
            const p = u.reversed ? g : _, m = u.reversed ? _ : g, h = u.segments.length;
            return ($) => (y) => {
              if (y.direction === "V") {
                const x = (() => {
                  if ($ === 0)
                    return p;
                  if ($ === (h - 1 | 0))
                    return m;
                  const J = Bc(y.start)(s);
                  if (J.tag === "Nothing")
                    return 0;
                  if (J.tag === "Just")
                    return J._1;
                  f();
                })();
                return { ...y, start: b(y.start._1 + x, y.start._2), end: b(y.end._1 + x, y.end._2) };
              }
              if (y.direction === "H")
                return {
                  ...y,
                  start: b(
                    (() => {
                      if ($ === 0)
                        return y.start._1 + p;
                      const x = Bc(y.start)(s);
                      if (x.tag === "Nothing")
                        return y.start._1 + 0;
                      if (x.tag === "Just")
                        return y.start._1 + x._1;
                      f();
                    })(),
                    y.start._2
                  ),
                  end: b(
                    (() => {
                      if ($ === (h - 1 | 0))
                        return y.end._1 + m;
                      const x = Bc(y.end)(s);
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
      return { ...u, segments: c, bends: En((l) => (_) => l.end, c, Et(1, c.length, c)) };
    })(n.paths)
  };
}, RT = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = tl(o.nextId)(i._2.start)(i._2.end)(v)(t.edgeId), u = (() => {
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
      ...tl(i.nextId)(r.start)(b(r.start._1, o.down ? e.y : e.y + e.height))(T(
        "Just",
        n
      ))(t.edgeId),
      aPort: T("Just", { node: t.src, side: o.side }),
      ignoreSpacing: o.down ? { ...sr, down: !0 } : { ...sr, up: !0 }
    }
  ]
}), xu = (t) => (n) => (e) => (r) => (o) => (i) => ({
  nextId: i.nextId + 1 | 0,
  segments: [
    ...i.segments,
    {
      ...tl(i.nextId)(r.end)(b(r.end._1, o.down ? e.y : e.y + e.height))(T(
        "Just",
        n
      ))(t.edgeId),
      aPort: T("Just", { node: t.tgt, side: o.side }),
      ignoreSpacing: o.down ? { ...sr, down: !0 } : { ...sr, up: !0 }
    }
  ]
}), FT = (t) => (n) => (e) => {
  if (e.src === e.tgt)
    return n;
  const r = eo(e.src)(t.nodeToC), o = eo(e.tgt)(t.nodeToC), i = (() => {
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
  })(), u = TT(e.path), a = w(RT(e)(i)(s)(u.length - 1 | 0))(n)(Xt((l) => (_) => b(
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
        return xu(e)(o._1)(s._1)(u[_])({ side: In, down: !0 })(l);
      if (e.tgtSide === "South")
        return xu(e)(o._1)(s._1)(u[_])({ side: Bn, down: !1 })(l);
    }
    return l;
  }
  const c = u.length - 1 | 0;
  if (c >= 0 && c < u.length && o.tag === "Just" && s.tag === "Just") {
    if (e.tgtSide === "North")
      return xu(e)(o._1)(s._1)(u[c])({ side: In, down: !0 })(a);
    if (e.tgtSide === "South")
      return xu(e)(o._1)(s._1)(u[c])({ side: Bn, down: !1 })(a);
  }
  return a;
}, GT = (t) => (n) => (e) => NT(t)(w(FT(e))({ nextId: 0, segments: [] })(n).segments)(e), IT = (t) => GT(t.edges)(qd(t))(bT(kT(t.edges))(t.nodes)(JT())), ro = (t) => (e) => {
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
}, Tf = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, wf = (t) => (e) => {
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
}, BT = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, DT = (t) => {
  const n = t.Eq0();
  return (e) => (r) => {
    const o = (u) => {
      let a = u, c = !0, l;
      for (; c; ) {
        const _ = a, d = Bt((g) => v, (g) => (p) => T("Just", { head: g, tail: p }), _.queue);
        if (d.tag === "Nothing") {
          c = !1, l = _;
          continue;
        }
        if (d.tag === "Just") {
          const g = d._1.head;
          if (((h) => {
            let $ = h, y = !0, x;
            for (; y; ) {
              const J = $;
              if (J.tag === "Leaf") {
                y = !1, x = !1;
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
                  y = !1, x = !0;
                  continue;
                }
              }
              f();
            }
            return x;
          })(_.removedNodes)) {
            a = { ..._, queue: d._1.tail };
            continue;
          }
          const p = jt((m) => !ro(m.eid)(_.removedEdges) && (n.eq(m.src)(g) || n.eq(m.tgt)(g)))(r);
          if (p.tag === "Nothing") {
            a = { ..._, queue: d._1.tail };
            continue;
          }
          if (p.tag === "Just") {
            const m = n.eq(p._1.src)(g) ? p._1.tgt : p._1.src, h = {
              ..._,
              degree: tt(t)(m)((() => {
                const y = ((x) => {
                  let J = x, N = !0, C;
                  for (; N; ) {
                    const k = J;
                    if (k.tag === "Leaf") {
                      N = !1, C = v;
                      continue;
                    }
                    if (k.tag === "Node") {
                      const P = t.compare(m)(k._3);
                      if (P === "LT") {
                        J = k._5;
                        continue;
                      }
                      if (P === "GT") {
                        J = k._6;
                        continue;
                      }
                      if (P === "EQ") {
                        N = !1, C = T("Just", k._4);
                        continue;
                      }
                    }
                    f();
                  }
                  return C;
                })(_.degree);
                if (y.tag === "Nothing")
                  return -1;
                if (y.tag === "Just")
                  return y._1 - 1 | 0;
                f();
              })())(_.degree),
              removedNodes: tt(t)(g)()(_.removedNodes),
              removedEdges: tt(st)(p._1.eid)()(_.removedEdges),
              record: [..._.record, { node: g, neighbour: m, viaSrc: n.eq(p._1.src)(g) }],
              queue: d._1.tail
            };
            if ((() => {
              const y = ((J) => {
                let N = J, C = !0, k;
                for (; C; ) {
                  const P = N;
                  if (P.tag === "Leaf") {
                    C = !1, k = v;
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
                      C = !1, k = T("Just", P._4);
                      continue;
                    }
                  }
                  f();
                }
                return k;
              })(h.degree), x = (J) => {
                let N = J, C = !0, k;
                for (; C; ) {
                  const P = N;
                  if (P.tag === "Leaf") {
                    C = !1, k = !1;
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
                      C = !1, k = !0;
                      continue;
                    }
                  }
                  f();
                }
                return k;
              };
              return (() => {
                if (y.tag === "Nothing")
                  return !1;
                if (y.tag === "Just")
                  return y._1 === 1;
                f();
              })() && !x(h.removedNodes);
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
    }, i = w((u) => (a) => qt(t)(bn)(a.src)(1)(qt(t)(bn)(a.tgt)(1)(u)))(D)(r), s = o({
      degree: i,
      removedNodes: D,
      removedEdges: D,
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
      coreEdges: ht((u) => !ro(u.eid)(s.removedEdges), r),
      removed: s.record
    };
  };
}, zT = (t) => (n) => (e) => w((r) => (o) => {
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
})(e)(fn(n)), Nf = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = { ...o, treeNode: tt(t)(r)()(o.treeNode) };
    return w((s) => (u) => {
      if (ro(u.eid)(s.st.edgeVisited))
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
        }, d = u.tgt;
        return _(a.treeNode) && !((p) => {
          let m = p, h = !0, $;
          for (; h; ) {
            const y = m;
            if (y.tag === "Leaf") {
              h = !1, $ = !1;
              continue;
            }
            if (y.tag === "Node") {
              const x = t.compare(d)(y._3);
              if (x === "LT") {
                m = y._5;
                continue;
              }
              if (x === "GT") {
                m = y._6;
                continue;
              }
              if (x === "EQ") {
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
        }, d = u.src;
        return _(a.treeNode) && !((p) => {
          let m = p, h = !0, $;
          for (; h; ) {
            const y = m;
            if (y.tag === "Leaf") {
              h = !1, $ = !1;
              continue;
            }
            if (y.tag === "Node") {
              const x = t.compare(d)(y._3);
              if (x === "LT") {
                m = y._5;
                continue;
              }
              if (x === "GT") {
                m = y._6;
                continue;
              }
              if (x === "EQ") {
                h = !1, $ = !0;
                continue;
              }
            }
            f();
          }
          return $;
        })(a.treeNode);
      })() ? u.tgt : u.src) ? u.tgt : u.src;
      if (ro(u.eid)(a.treeEdge)) {
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
        const l = Nf(t)(e)(c)(a);
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
            let y = $, x = !0, J;
            for (; x; ) {
              const N = y;
              if (N.tag === "Leaf") {
                x = !1, J = v;
                continue;
              }
              if (N.tag === "Node") {
                const C = t.compare(_)(N._3);
                if (C === "LT") {
                  y = N._5;
                  continue;
                }
                if (C === "GT") {
                  y = N._6;
                  continue;
                }
                if (C === "EQ") {
                  x = !1, J = T("Just", N._4);
                  continue;
                }
              }
              f();
            }
            return J;
          })(a.layer), p = u.src, h = (($) => {
            let y = $, x = !0, J;
            for (; x; ) {
              const N = y;
              if (N.tag === "Leaf") {
                x = !1, J = v;
                continue;
              }
              if (N.tag === "Node") {
                const C = t.compare(p)(N._3);
                if (C === "LT") {
                  y = N._5;
                  continue;
                }
                if (C === "GT") {
                  y = N._6;
                  continue;
                }
                if (C === "EQ") {
                  x = !1, J = T("Just", N._4);
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
        const l = Nf(t)(e)(c)({ ...a, treeEdge: tt(st)(u.eid)()(a.treeEdge) });
        return { count: s.count + l.count | 0, st: l.st };
      }
      return { ...s, st: a };
    })({ count: 1, st: i })(ht((s) => (n.eq(s.src)(r) || n.eq(s.tgt)(r)) && !ro(s.eid)(i.edgeVisited), e));
  };
}, sa = (t) => (n) => (e) => (r) => {
  const o = r.src, s = ((m) => {
    let h = m, $ = !0, y;
    for (; $; ) {
      const x = h;
      if (x.tag === "Leaf") {
        $ = !1, y = v;
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
          $ = !1, y = T("Just", x._4);
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
  })(), a = r.tgt, l = ((m) => {
    let h = m, $ = !0, y;
    for (; $; ) {
      const x = h;
      if (x.tag === "Leaf") {
        $ = !1, y = v;
        continue;
      }
      if (x.tag === "Node") {
        const J = t.compare(a)(x._3);
        if (J === "LT") {
          h = x._5;
          continue;
        }
        if (J === "GT") {
          h = x._6;
          continue;
        }
        if (J === "EQ") {
          $ = !1, y = T("Just", x._4);
          continue;
        }
      }
      f();
    }
    return y;
  })(n.poID), _ = (() => {
    if (l.tag === "Nothing")
      return 0;
    if (l.tag === "Just")
      return l._1;
    f();
  })(), g = ((m) => {
    let h = m, $ = !0, y;
    for (; $; ) {
      const x = h;
      if (x.tag === "Leaf") {
        $ = !1, y = v;
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
          $ = !1, y = T("Just", x._4);
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
      let x = y, J = !0, N;
      for (; J; ) {
        const C = x;
        if (C.tag === "Leaf") {
          J = !1, N = v;
          continue;
        }
        if (C.tag === "Node") {
          const k = t.compare(m)(C._3);
          if (k === "LT") {
            x = C._5;
            continue;
          }
          if (k === "GT") {
            x = C._6;
            continue;
          }
          if (k === "EQ") {
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
      const y = r.tgt;
      return p <= u && (() => {
        const J = ((N) => {
          let C = N, k = !0, P;
          for (; k; ) {
            const E = C;
            if (E.tag === "Leaf") {
              k = !1, P = v;
              continue;
            }
            if (E.tag === "Node") {
              const Q = t.compare(y)(E._3);
              if (Q === "LT") {
                C = E._5;
                continue;
              }
              if (Q === "GT") {
                C = E._6;
                continue;
              }
              if (Q === "EQ") {
                k = !1, P = T("Just", E._4);
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
}, HT = (t) => {
  const n = hn(t)(Yt);
  return (e) => ({
    layer: n(I((r) => b(r, 0))(e)),
    treeNode: D,
    treeEdge: D,
    poID: D,
    lowestPoID: D,
    cutvalue: D,
    postOrder: 1,
    edgeVisited: D
  });
}, QT = (t) => (n) => (e) => w((r) => (o) => {
  if ((() => {
    const d = o.src, g = (h) => {
      let $ = h, y = !0, x;
      for (; y; ) {
        const J = $;
        if (J.tag === "Leaf") {
          y = !1, x = !1;
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
            y = !1, x = !0;
            continue;
          }
        }
        f();
      }
      return x;
    }, p = o.tgt, m = (h) => {
      let $ = h, y = !0, x;
      for (; y; ) {
        const J = $;
        if (J.tag === "Leaf") {
          y = !1, x = !1;
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
            y = !1, x = !0;
            continue;
          }
        }
        f();
      }
      return x;
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
})({ edge: v, slack: 1e9 })(n).edge, OT = (t) => {
  const n = hn(t)(Yt);
  return (e) => (r) => {
    const o = w((i) => (s) => Tf(i)((() => {
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
    return n(I((i) => b(
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
}, Xd = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => {
    const i = w((u) => (a) => {
      const c = Xd(t)(e)(n.eq(a.src)(r) ? a.tgt : a.src)({ ...u.st, edgeVisited: tt(st)(a.eid)()(u.st.edgeVisited) });
      return { lowest: Tf(u.lowest)(c.lowest), st: c.st };
    })({ lowest: 1e9, st: o })(ht(
      (u) => ro(u.eid)(o.treeEdge) && (n.eq(u.src)(r) || n.eq(u.tgt)(r)) && !ro(u.eid)(o.edgeVisited),
      e
    )), s = Tf(i.lowest)(i.st.postOrder);
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
}, Yd = (t) => {
  const n = Xd(t);
  return (e) => (r) => (o) => 0 < e.length ? n(r)(e[0])({ ...o, edgeVisited: D, postOrder: 1, poID: D, lowestPoID: D }).st : o;
}, WT = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => ht((i) => ro(i.eid)(r.treeEdge) && (n.eq(i.src)(o) || n.eq(i.tgt)(o)), e);
}, qT = (t) => (n) => jt((e) => {
  const r = wf(e.eid)(n.cutvalue);
  return ro(e.eid)(n.treeEdge) && (() => {
    if (r.tag === "Nothing")
      return !1;
    if (r.tag === "Just")
      return r._1 < -1e-10;
    f();
  })();
})(t), Md = (t) => {
  const n = Nf(t);
  return (e) => (r) => (o) => {
    const i = 0 < e.length ? T("Just", e[0]) : v;
    if (i.tag === "Nothing")
      return o;
    if (i.tag === "Just") {
      const s = n(r)(i._1)({ ...o, edgeVisited: D, treeNode: D, treeEdge: D });
      if (s.count >= e.length)
        return s.st;
      const u = QT(t)(r)(s.st);
      if (u.tag === "Nothing")
        return s.st;
      if (u.tag === "Just") {
        const a = u._1.tgt, l = ((h) => {
          let $ = h, y = !0, x;
          for (; y; ) {
            const J = $;
            if (J.tag === "Leaf") {
              y = !1, x = v;
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
                y = !1, x = T("Just", J._4);
                continue;
              }
            }
            f();
          }
          return x;
        })(s.st.layer), _ = u._1.src, g = ((h) => {
          let $ = h, y = !0, x;
          for (; y; ) {
            const J = $;
            if (J.tag === "Leaf") {
              y = !1, x = v;
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
                y = !1, x = T("Just", J._4);
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
        })(), m = (() => {
          const h = u._1.tgt;
          return ((y) => {
            let x = y, J = !0, N;
            for (; J; ) {
              const C = x;
              if (C.tag === "Leaf") {
                J = !1, N = !1;
                continue;
              }
              if (C.tag === "Node") {
                const k = t.compare(h)(C._3);
                if (k === "LT") {
                  x = C._5;
                  continue;
                }
                if (k === "GT") {
                  x = C._6;
                  continue;
                }
                if (k === "EQ") {
                  J = !1, N = !0;
                  continue;
                }
              }
              f();
            }
            return N;
          })(s.st.treeNode);
        })() ? -p : p;
        return Md(t)(e)(r)({
          ...s.st,
          layer: w((h) => ($) => ((x) => {
            let J = x, N = !0, C;
            for (; N; ) {
              const k = J;
              if (k.tag === "Leaf") {
                N = !1, C = !1;
                continue;
              }
              if (k.tag === "Node") {
                const P = t.compare($)(k._3);
                if (P === "LT") {
                  J = k._5;
                  continue;
                }
                if (P === "GT") {
                  J = k._6;
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
            const x = ((J) => {
              let N = J, C = !0, k;
              for (; C; ) {
                const P = N;
                if (P.tag === "Leaf") {
                  C = !1, k = v;
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
                    C = !1, k = T("Just", P._4);
                    continue;
                  }
                }
                f();
              }
              return k;
            })(s.st.layer);
            if (x.tag === "Nothing")
              return 0 + m | 0;
            if (x.tag === "Just")
              return x._1 + m | 0;
            f();
          })())(h) : h)(s.st.layer)(e)
        });
      }
    }
    f();
  };
}, XT = (t) => (n) => (e) => (r) => w((o) => (i) => {
  if (sa(t)(r)(i.src)(e) && !sa(t)(r)(i.tgt)(e)) {
    const s = i.tgt, a = ((g) => {
      let p = g, m = !0, h;
      for (; m; ) {
        const $ = p;
        if ($.tag === "Leaf") {
          m = !1, h = v;
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
          const y = t.compare(c)($._3);
          if (y === "LT") {
            p = $._5;
            continue;
          }
          if (y === "GT") {
            p = $._6;
            continue;
          }
          if (y === "EQ") {
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
})({ edge: v, slack: 1e9 })(n).edge, YT = (t) => {
  const n = t.Eq0();
  return (e) => (r) => (o) => (i) => {
    const s = i.tgt, u = i.src;
    return w((a) => (c) => {
      if ((() => {
        const l = wf(c.eid)(r.cutvalue);
        if (l.tag === "Just")
          return !0;
        if (l.tag === "Nothing")
          return !1;
        f();
      })()) {
        const l = wf(c.eid)(r.cutvalue), _ = (() => {
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
}, MT = (t) => {
  const n = YT(t);
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
        const g = c, p = l, h = ((y) => {
          let x = y, J = !0, N;
          for (; J; ) {
            const C = x;
            if (C.tag === "Leaf") {
              J = !1, N = v;
              continue;
            }
            if (C.tag === "Node") {
              const k = t.compare(p)(C._3);
              if (k === "LT") {
                x = C._5;
                continue;
              }
              if (k === "GT") {
                x = C._6;
                continue;
              }
              if (k === "EQ") {
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
          const y = t.Eq0().eq($[0].src)(p) ? $[0].tgt : $[0].src;
          c = {
            unknown: i(p, $[0], i(y, $[0], g.unknown)),
            cutvalue: tt(st)($[0].eid)(n(e)(g)(p)($[0]))(g.cutvalue)
          }, l = y;
          continue;
        }
        _ = !1, d = g;
      }
      return d;
    })(r)(o);
  };
}, Ud = (t) => {
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
      return m === "LT" || m === "GT" || m !== "EQ" ? m : fe;
    },
    Eq0: () => r
  }, i = w((c) => (l) => tt(o)(l)()(c))(D), s = WT(t), u = hn(t)(Yt), a = MT(t);
  return (c) => (l) => (_) => {
    const d = {
      unknown: u(I((g) => b(
        g,
        tn(Pe.foldr, i(s(l)(_)(g)))
      ))(c)),
      cutvalue: D
    };
    return {
      ..._,
      cutvalue: w(a(l))(d)(ht(
        (g) => {
          const m = ((h) => {
            let $ = h, y = !0, x;
            for (; y; ) {
              const J = $;
              if (J.tag === "Leaf") {
                y = !1, x = v;
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
                  y = !1, x = T("Just", J._4);
                  continue;
                }
              }
              f();
            }
            return x;
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
}, UT = (t) => {
  const n = Yd(t), e = Ud(t);
  return (r) => (o) => (i) => (s) => (u) => {
    const a = { ...u, treeEdge: tt(st)(s.eid)()(Qi(st)(i.eid)(u.treeEdge)) }, c = s.tgt, _ = (($) => {
      let y = $, x = !0, J;
      for (; x; ) {
        const N = y;
        if (N.tag === "Leaf") {
          x = !1, J = v;
          continue;
        }
        if (N.tag === "Node") {
          const C = t.compare(c)(N._3);
          if (C === "LT") {
            y = N._5;
            continue;
          }
          if (C === "GT") {
            y = N._6;
            continue;
          }
          if (C === "EQ") {
            x = !1, J = T("Just", N._4);
            continue;
          }
        }
        f();
      }
      return J;
    })(a.layer), d = s.src, p = (($) => {
      let y = $, x = !0, J;
      for (; x; ) {
        const N = y;
        if (N.tag === "Leaf") {
          x = !1, J = v;
          continue;
        }
        if (N.tag === "Node") {
          const C = t.compare(d)(N._3);
          if (C === "LT") {
            y = N._5;
            continue;
          }
          if (C === "GT") {
            y = N._6;
            continue;
          }
          if (C === "EQ") {
            x = !1, J = T("Just", N._4);
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
    })(), h = sa(t)(a)(s.tgt)(i) ? m : -m;
    return e(r)(o)(n(r)(o)({
      ...a,
      layer: w(($) => (y) => sa(t)(a)(y)(i) ? $ : tt(t)(y)((() => {
        const J = ((N) => {
          let C = N, k = !0, P;
          for (; k; ) {
            const E = C;
            if (E.tag === "Leaf") {
              k = !1, P = v;
              continue;
            }
            if (E.tag === "Node") {
              const Q = t.compare(y)(E._3);
              if (Q === "LT") {
                C = E._5;
                continue;
              }
              if (Q === "GT") {
                C = E._6;
                continue;
              }
              if (Q === "EQ") {
                k = !1, P = T("Just", E._4);
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
}, KT = (t) => {
  const n = UT(t);
  return (e) => (r) => (o) => (i) => ((u) => (a) => {
    let c = u, l = a, _ = !0, d;
    for (; _; ) {
      const g = c, p = l;
      if (g === 0) {
        _ = !1, d = p;
        continue;
      }
      const m = qT(o)(p);
      if (m.tag === "Nothing") {
        _ = !1, d = p;
        continue;
      }
      if (m.tag === "Just") {
        const h = XT(t)(o)(m._1)(p);
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
}, VT = (t) => {
  const n = Ud(t), e = Yd(t), r = Md(t);
  return (o) => (i) => (s) => n(o)(i)(e(o)(i)(r(o)(i)(s)));
}, Fg = (t) => (n) => w((e) => (r) => qt(t)(Nn)(n(r))([r])(e))(D), jT = (t) => {
  const n = hn(t)(Yt);
  return (e) => (r) => (o) => {
    const i = (a) => (c) => (l) => (_) => {
      let d = a, g = c, p = l, m = _, h = !0, $;
      for (; h; ) {
        const y = d, x = g, J = p, N = m, C = Bt((k) => v, (k) => (P) => T("Just", { head: k, tail: P }), J);
        if (C.tag === "Nothing") {
          h = !1, $ = N;
          continue;
        }
        if (C.tag === "Just") {
          const k = C._1.head, E = ((B) => {
            let H = B, rt = !0, ot;
            for (; rt; ) {
              const M = H;
              if (M.tag === "Leaf") {
                rt = !1, ot = v;
                continue;
              }
              if (M.tag === "Node") {
                const q = t.compare(k)(M._3);
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
          })(), W = w((B) => (H) => {
            const rt = H.tgt, M = ((A) => {
              let R = A, X = !0, L;
              for (; X; ) {
                const G = R;
                if (G.tag === "Leaf") {
                  X = !1, L = v;
                  continue;
                }
                if (G.tag === "Node") {
                  const z = t.compare(rt)(G._3);
                  if (z === "LT") {
                    R = G._5;
                    continue;
                  }
                  if (z === "GT") {
                    R = G._6;
                    continue;
                  }
                  if (z === "EQ") {
                    X = !1, L = T("Just", G._4);
                    continue;
                  }
                }
                f();
              }
              return L;
            })(B.incident), q = (() => {
              if (M.tag === "Nothing")
                return -1;
              if (M.tag === "Just")
                return M._1 - 1 | 0;
              f();
            })();
            return {
              st: {
                ...B.st,
                layer: tt(t)(H.tgt)(BT((() => {
                  const A = H.tgt, X = ((L) => {
                    let G = L, z = !0, U;
                    for (; z; ) {
                      const K = G;
                      if (K.tag === "Leaf") {
                        z = !1, U = v;
                        continue;
                      }
                      if (K.tag === "Node") {
                        const O = t.compare(A)(K._3);
                        if (O === "LT") {
                          G = K._5;
                          continue;
                        }
                        if (O === "GT") {
                          G = K._6;
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
                  })(B.st.layer);
                  if (X.tag === "Nothing")
                    return 0;
                  if (X.tag === "Just")
                    return X._1;
                  f();
                })())(Q + H.delta | 0))(B.st.layer)
              },
              incident: tt(t)(H.tgt)(q)(B.incident),
              queue: q === 0 ? [...B.queue, H.tgt] : B.queue
            };
          })({ st: N, incident: x, queue: C._1.tail })((() => {
            const H = ((rt) => {
              let ot = rt, M = !0, q;
              for (; M; ) {
                const A = ot;
                if (A.tag === "Leaf") {
                  M = !1, q = v;
                  continue;
                }
                if (A.tag === "Node") {
                  const R = t.compare(k)(A._3);
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
            })(y);
            if (H.tag === "Nothing")
              return [];
            if (H.tag === "Just")
              return H._1;
            f();
          })());
          d = y, g = W.incident, p = W.queue, m = W.st;
          continue;
        }
        f();
      }
      return $;
    }, s = Fg(t)((a) => a.tgt)(r), u = n(I((a) => b(
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
}, ZT = (t) => {
  const n = HT(t), e = jT(t), r = VT(t), o = KT(t);
  return (i) => (s) => {
    const u = e(i)(s)(n(i));
    return s.length === 0 ? u.layer : o(4 * i.length | 0)(i)(s)(r(i)(s)(u)).layer;
  };
}, Kd = (t) => {
  const n = OT(t), e = ZT(t), r = DT(t);
  return (o) => (i) => {
    if (o.length === 0)
      return D;
    if (o.length < 40)
      return n(o)(e(o)(i));
    const s = r(o)(i);
    return n(o)(zT(t)(s.removed)(e(s.coreNodes)(s.coreEdges)));
  };
}, Vd = (t) => (e) => {
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
}, Jf = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, tw = /* @__PURE__ */ Kd(st), Ps = (t) => (n) => ({ ...n, edges: [...n.edges, { src: t.src, tgt: t.tgt, delta: t.delta, weight: t.weight, eid: n.nextEid }], nextEid: n.nextEid + 1 | 0 }), nw = (t) => (n) => (e) => {
  if (e.cGroup.tag === "Nothing")
    return n;
  if (e.cGroup.tag === "Just") {
    const r = V((() => {
      const o = Vd(e.cGroup._1)(t);
      if (o.tag === "Nothing")
        return 0;
      if (o.tag === "Just")
        return o._1;
      f();
    })());
    return Be(e.id)((o) => ({ ...o, hitbox: { ...o.hitbox, x: r + o.cGroupOffset.x } }))(n);
  }
  f();
}, ew = (t) => (n) => ({
  ...n,
  cGraph: w(nw(t))(n.cGraph)((() => {
    const e = n.cGraph;
    return Nt((r) => gn(r)(e.cNodes))(e.cNodeOrder);
  })())
}), rw = (t) => (n) => (e) => (r) => (o) => {
  const i = dn(Qa(n.cGroupOffset.x - t.cGroupOffset.x));
  return Ps({ src: o.nextNodeId, tgt: r, delta: Jf(0)(-i), weight: 1 })(Ps({ src: o.nextNodeId, tgt: e, delta: Jf(0)(i), weight: 1 })({
    ...o,
    nodes: [...o.nodes, o.nextNodeId],
    nextNodeId: o.nextNodeId + 1 | 0
  }));
}, ow = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = Jf(0)(dn(Qa(e.cGroupOffset.x + e.hitbox.width + (n.direction === "LEFT" || n.direction === "RIGHT" ? n.spacingsHandler.horizontalSpacing(e)(r) : n.spacingsHandler.verticalSpacing(e)(r)) - r.cGroupOffset.x)));
  return t.sameEdgeVerticalSegments(e)(r) ? rw(e)(r)(o)(i)(s) : Ps({ src: o, tgt: i, delta: u, weight: t.vsLNodePair(e)(r) ? 2 : 1 })(s);
}, iw = (t) => (n) => (e) => (r) => (o) => {
  const i = gn(o)(n.cGraph.cNodes);
  if (i.tag === "Nothing")
    return r;
  if (i.tag === "Just")
    return (e.cGroup.tag === "Nothing" ? i._1.cGroup.tag === "Nothing" : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" && e.cGroup._1 === i._1.cGroup._1) ? r : e.cGroup.tag === "Just" && i._1.cGroup.tag === "Just" ? ow(t)(n)(e)(i._1)(e.cGroup._1)(i._1.cGroup._1)(r) : r;
  f();
}, sw = (t) => (n) => (e) => (r) => w(iw(t)(n)(r))(e)(r.constraints), uw = (t) => (n) => Ps({ src: n.srcGroup, tgt: n.tgtGroup, delta: n.delta, weight: n.weight })(t), aw = (t) => {
  const n = w((o) => (i) => qt(st)(bn)(i.tgt)(1)(o))(D)(t.edges), e = ht(
    (o) => {
      const i = Vd(o)(n);
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
  return w((o) => (i) => Ps({ src: r, tgt: i, delta: 1, weight: 0 })(o))({ ...t, nodes: [...t.nodes, r], nextNodeId: r + 1 | 0 })(e);
}, cw = (t) => (n) => {
  const e = aw(w(uw)(w(sw(t)(n))({
    nodes: n.cGraph.cGroupOrder,
    edges: [],
    nextNodeId: n.cGraph.nextCGroupId,
    nextEid: 0
  })((() => {
    const r = n.cGraph;
    return Nt((o) => gn(o)(r.cNodes))(r.cNodeOrder);
  })()))(t.edgeLengthEdges(n.cGraph)));
  return { nodes: e.nodes, edges: e.edges };
}, fw = (t) => (n) => {
  const e = cw(t)(n);
  return ew(tw(e.nodes)(e.edges))(n);
}, jd = (t) => t, $n = /* @__PURE__ */ jd("H"), yn = /* @__PURE__ */ jd("V"), lw = (t) => b(t._2, t._1), Zd = (t) => ({ ...t, position: b(t.position._2, t.position._1), size: b(t.size._2, t.size._1) }), gw = (t) => ({
  start: b(t.start._2, t.start._1),
  end: b(t.end._2, t.end._1),
  direction: (() => {
    if (t.direction === "H")
      return yn;
    if (t.direction === "V")
      return $n;
    f();
  })()
}), th = (t) => ({ ...t, segments: I(gw)(t.segments), bends: I(lw)(t.bends) }), _w = (t) => ({ nodes: I(Zd)(t.nodes), edges: t.edges, paths: I(th)(t.paths), ports: t.ports }), dw = { nodeNode: 8, edgeNode: 4, edgeEdge: 10 }, hw = (t) => (n) => ({
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
}), pw = (t) => (n) => fw(n), mw = (t) => (n) => (e) => {
  const r = _w(e), o = IT(r), i = PT(o)(qd(r)), s = AT(Dd(V0)(eT({
    ...oT(o.cGraph),
    compactionAlgorithm: T("Just", pw()(i)),
    constraintAlgorithm: T("Just", pT(n.edgeEdge)),
    spacingsHandler: hw(n)(i)
  })).cGraph)({ nodes: r.nodes, edges: r.edges, paths: r.paths });
  return { nodes: I(Zd)(s.nodes), edges: I(th)(s.edges) };
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
}, nh = (t) => On(3)(t) === "$d:", $w = (t) => (n) => (e) => w((r) => (o) => {
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
  const c = o.id, l = I((d) => "$d:" + c + ":" + an(d))(Vt(1, a - 1 | 0)), _ = [o.from.node, ...l, o.to.node];
  return {
    ...r,
    layers: w((d) => (g) => {
      const p = g._2, m = C2(s + g._1 | 0)((h) => [...h, p])(d);
      if (m.tag === "Nothing")
        return d;
      if (m.tag === "Just")
        return m._1;
      f();
    })(r.layers)(En(jn, Vt(1, a - 1 | 0), l)),
    edges: [
      ...r.edges,
      ...En(
        (d) => (g) => ({ id: c + ":" + d + "->" + g, from: { node: d, port: o.from.port }, to: { node: g, port: o.to.port }, label: v }),
        _,
        Et(1, _.length, _)
      )
    ],
    chains: [...r.chains, { edgeId: o.id, nodes: _ }]
  };
})({ layers: e, edges: [], chains: [] })(n), eh = (t) => t, pi = /* @__PURE__ */ hn(st)(Yt), Kt = (t) => (e) => {
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
}, Jt = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, bt = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ki = (t) => (e) => {
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
}, yw = (t) => (n) => {
  const e = st.compare(t._1)(n._1);
  return e === "LT" ? Wn : e === "GT" ? qn : st.compare(t._2)(n._2);
}, xi = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, xw = /* @__PURE__ */ (() => {
  const t = pe.unfoldr(Ze);
  return (n) => t(_e("IterNode", n, je));
})(), vw = (t) => t, Bg = (t) => (e) => {
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
}, Tw = (t) => (e) => {
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
}, vu = /* @__PURE__ */ eh("Regular"), Tu = /* @__PURE__ */ eh("Critical"), rh = (t) => (n) => {
  const e = w((s) => (u) => tt(F)(u.node)(u)(s))(D)(n), r = 1.25 * V(4), o = (s, u, a) => ((l) => (_) => (d) => {
    let g = l, p = _, m = d, h = !0, $;
    for (; h; ) {
      const y = g, x = p, J = m;
      if (J.critical) {
        h = !1, $ = J;
        continue;
      }
      const N = Bt((k) => v, (k) => (P) => T("Just", { head: k, tail: P }), y), C = Bt((k) => v, (k) => (P) => T("Just", { head: k, tail: P }), x);
      if (N.tag === "Just" && C.tag === "Just") {
        const k = N._1.head > C._1.head - s && N._1.head < C._1.head + s ? { ...J, critical: !0 } : N._1.head > C._1.head - r && N._1.head < C._1.head + r ? { ...J, conflicts: J.conflicts + 1 | 0 } : J;
        if (k.critical) {
          h = !1, $ = k;
          continue;
        }
        if (N._1.head <= C._1.head) {
          g = N._1.tail, p = x, m = k;
          continue;
        }
        g = y, p = C._1.tail, m = k;
        continue;
      }
      h = !1, $ = J;
    }
    return $;
  })(u)(a)({ conflicts: 0, critical: !1 }), i = (s, u, a) => {
    if (bt(w(bt)(-1e18)(u.incoming))(w(bt)(-1e18)(u.outgoing)) - Jt(w(Jt)(1e18)(u.incoming))(w(Jt)(1e18)(u.outgoing)) < 1e-3 || bt(w(bt)(-1e18)(a.incoming))(w(bt)(-1e18)(a.outgoing)) - Jt(w(Jt)(1e18)(a.incoming))(w(Jt)(1e18)(a.outgoing)) < 1e-3)
      return [];
    const c = o(s, u.outgoing, a.incoming), l = o(s, a.outgoing, u.incoming);
    if (c.critical || l.critical)
      return [...c.critical ? [{ src: a.id, tgt: u.id, weight: 1, kind: Tu }] : [], ...l.critical ? [{ src: u.id, tgt: a.id, weight: 1, kind: Tu }] : []];
    const _ = Jt(w(Jt)(1e18)(u.incoming))(w(Jt)(1e18)(u.outgoing)), d = bt(w(bt)(-1e18)(u.incoming))(w(bt)(-1e18)(u.outgoing)), g = Jt(w(Jt)(1e18)(a.incoming))(w(Jt)(1e18)(a.outgoing)), p = bt(w(bt)(-1e18)(a.incoming))(w(bt)(-1e18)(a.outgoing)), m = (1 * c.conflicts | 0) + (16 * (w(($) => (y) => y > p ? $ : y >= g ? $ + 1 | 0 : $)(0)(u.outgoing) + w(($) => (y) => y > d ? $ : y >= _ ? $ + 1 | 0 : $)(0)(a.incoming) | 0) | 0) | 0, h = (1 * l.conflicts | 0) + (16 * (w(($) => (y) => y > d ? $ : y >= _ ? $ + 1 | 0 : $)(0)(a.outgoing) + w(($) => (y) => y > p ? $ : y >= g ? $ + 1 | 0 : $)(0)(u.incoming) | 0) | 0) | 0;
    return m < h ? [{ src: u.id, tgt: a.id, weight: h - m | 0, kind: vu }] : m > h ? [{ src: a.id, tgt: u.id, weight: m - h | 0, kind: vu }] : m > 0 ? [{ src: u.id, tgt: a.id, weight: 0, kind: vu }, { src: a.id, tgt: u.id, weight: 0, kind: vu }] : [];
  };
  return w((s) => (u) => w((a) => (c) => tt(F)(c._1)(c._2)(a))(s)((() => {
    const a = w((B) => (H) => {
      const rt = H.edge.from.node + "|" + (() => {
        if (H.edge.from.port.tag === "Just")
          return H.edge.from.port._1;
        if (H.edge.from.port.tag === "Nothing")
          return "_auto_" + H.edge.id;
        f();
      })(), ot = Bg(rt)(B.entries);
      if (ot.tag === "Nothing")
        return {
          ...B,
          entries: tt(F)(rt)({
            id: 0,
            members: [H.edge.id],
            incoming: [H.fromPos._1],
            outgoing: [H.toPos._1],
            slot: 0,
            mark: 0,
            splitBy: v,
            splitPartner: v
          })(B.entries),
          order: [...B.order, rt]
        };
      if (ot.tag === "Just")
        return {
          ...B,
          entries: tt(F)(rt)({
            ...ot._1,
            members: [...ot._1.members, H.edge.id],
            incoming: [...Lr((M) => M < H.fromPos._1)(ot._1.incoming).init, H.fromPos._1, ...Lr((M) => M <= H.fromPos._1)(ot._1.incoming).rest],
            outgoing: [...Lr((M) => M < H.toPos._1)(ot._1.outgoing).init, H.toPos._1, ...Lr((M) => M <= H.toPos._1)(ot._1.outgoing).rest]
          })(B.entries)
        };
      f();
    })({ entries: D, order: [] })(u._2), c = Xt((B) => (H) => ({ ...H, id: B }))(Nt((B) => Bg(B)(a.entries))(a.order));
    if (c.length === 0)
      return [];
    const l = w((B) => (H) => B.prev.tag === "Just" && H - B.prev._1 < 1e-9 ? B : { prev: T("Just", H), out: [...B.out, H] })({ prev: v, out: [] })(It(it.compare)([
      ...wt(c)((B) => B.incoming),
      ...wt(c)((B) => B.outgoing)
    ])).out, _ = l.length < 2 ? 0.2 * r : 0.2 * w((B) => (H) => {
      if (B.prev.tag === "Nothing")
        return { prev: T("Just", H), mn: B.mn };
      if (B.prev.tag === "Just")
        return { prev: T("Just", H), mn: Jt(B.mn)(H - B.prev._1) };
      f();
    })({ prev: v, mn: 1e18 })(l).mn, d = {
      segments: c,
      deps: (() => {
        const B = c.length;
        return wt(wt(Vt(0, B - 2 | 0))((H) => wt(Vt(H + 1 | 0, B - 1 | 0))((rt) => [
          b(H, rt)
        ])))((H) => H._1 >= 0 && H._1 < c.length ? H._2 >= 0 && H._2 < c.length ? i(_, c[H._1], c[H._2]) : [] : []);
      })()
    }, g = ht(
      (B) => {
        if (B.kind === "Critical")
          return !0;
        if (B.kind === "Regular")
          return !1;
        f();
      },
      d.deps
    ), p = (() => {
      if (g.length < 2)
        return d;
      const B = pi((() => {
        const q = d.segments;
        return I((A) => b(A.id, A.mark))((() => {
          const A = q.length, R = (G) => {
            let z = G, U = !0, K;
            for (; U; ) {
              const O = z, Z = jt((et) => {
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
                  inWeight: w((nt) => (gt) => qt(st)(bn)(gt.tgt)(-gt.weight)(nt))(O.inWeight)((() => {
                    const nt = Kt(et)(O.depsBySrc);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })()),
                  marks: tt(st)(et)(O.nextSource)(O.marks),
                  nextSource: O.nextSource + 1 | 0,
                  outWeight: w((nt) => (gt) => qt(st)(bn)(gt.src)(-gt.weight)(nt))(O.outWeight)((() => {
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
          }, X = (G) => {
            let z = G, U = !0, K;
            for (; U; ) {
              const O = z, Z = jt((et) => {
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
                  inWeight: w((nt) => (gt) => qt(st)(bn)(gt.tgt)(-gt.weight)(nt))(O.inWeight)((() => {
                    const nt = Kt(et)(O.depsBySrc);
                    if (nt.tag === "Nothing")
                      return [];
                    if (nt.tag === "Just")
                      return nt._1;
                    f();
                  })()),
                  marks: tt(st)(et)(O.nextSink)(O.marks),
                  nextSink: O.nextSink - 1 | 0,
                  outWeight: w((nt) => (gt) => qt(st)(bn)(gt.src)(-gt.weight)(nt))(O.outWeight)((() => {
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
          return ((G) => {
            let z = G, U = !0, K;
            for (; U; ) {
              const Z = R(X(z));
              if (Z.remaining.length === 0) {
                U = !1, K = I((et) => {
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
                    inWeight: w((ct) => ($t) => qt(st)(bn)($t.tgt)(-$t.weight)(ct))(Z.inWeight)((() => {
                      const ct = Kt(gt)(Z.depsBySrc);
                      if (ct.tag === "Nothing")
                        return [];
                      if (ct.tag === "Just")
                        return ct._1;
                      f();
                    })()),
                    marks: tt(st)(gt)(Z.nextSource)(Z.marks),
                    nextSource: Z.nextSource + 1 | 0,
                    outWeight: w((ct) => ($t) => qt(st)(bn)($t.src)(-$t.weight)(ct))(Z.outWeight)((() => {
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
            remaining: I((G) => G.id)(q),
            marks: D,
            inWeight: w((G) => (z) => qt(st)(bn)(z.tgt)(z.weight)(G))(D)(g),
            outWeight: w((G) => (z) => qt(st)(bn)(z.src)(z.weight)(G))(D)(g),
            depsBySrc: w((G) => (z) => qt(st)(Nn)(z.src)([z])(G))(D)(g),
            depsByTgt: w((G) => (z) => qt(st)(Nn)(z.tgt)([z])(G))(D)(g),
            nextSink: A - 1 | 0,
            nextSource: A + 1 | 0
          });
        })());
      })()), H = ht(
        (q) => {
          const A = Kt(q.src)(B), R = Kt(q.tgt)(B);
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
        if (Je(vo)(A.src)(q.decisions) || Je(vo)(A.tgt)(q.decisions))
          return q;
        const R = Kt(A.src)(q.segMap), X = Kt(A.tgt)(q.segMap);
        if (R.tag === "Just" && X.tag === "Just") {
          const L = (R._1.incoming.length + R._1.outgoing.length | 0) > 2 && (X._1.incoming.length + X._1.outgoing.length | 0) <= 2, G = L ? X._1 : R._1;
          return {
            decisions: [...q.decisions, G.id],
            segMap: tt(st)(G.id)({ ...G, splitBy: T("Just", L ? R._1.id : X._1.id) })(q.segMap)
          };
        }
        return q;
      })({ decisions: [], segMap: pi(I((q) => b(q.id, q))(d.segments)) })(H), ot = rt.segMap, M = w((q) => (A) => {
        const R = Jt(w(Jt)(1e18)(A.incoming))(w(Jt)(1e18)(A.outgoing)), X = bt(w(bt)(-1e18)(A.incoming))(w(bt)(-1e18)(A.outgoing)), L = ht(
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
        const G = 0 < L.length ? T("Just", L[0]) : v, z = (() => {
          if (G.tag === "Nothing")
            return { i: 0, a: { startPosition: 0, endPosition: 0, size: 0 } };
          if (G.tag === "Just") {
            if (L.length === 1)
              return G._1;
            const O = I((Z) => ({
              c: Z,
              rating: (() => {
                const et = (Z.a.startPosition + Z.a.endPosition) / 2, nt = [et], gt = [et], ct = w((() => {
                  const At = q.segMap;
                  return (Rt) => (rn) => {
                    const xt = Kt(rn.tgt)(At);
                    if (xt.tag === "Nothing")
                      return Rt;
                    if (xt.tag === "Just") {
                      const Gt = Jt(w(Jt)(1e18)(xt._1.incoming))(w(Jt)(1e18)(xt._1.outgoing)), vt = bt(w(bt)(-1e18)(xt._1.incoming))(w(bt)(-1e18)(xt._1.outgoing)), Ct = Jt(w(Jt)(1e18)(A.incoming))(w(Jt)(1e18)(nt)), _t = (() => {
                        const Ot = bt(w(bt)(-1e18)(A.incoming))(w(bt)(-1e18)(nt)), Wt = w((on) => (xn) => xn > vt ? on : xn >= Gt ? on + 1 | 0 : on)(0)(nt) + w((on) => (xn) => xn > Ot ? on : xn >= Ct ? on + 1 | 0 : on)(0)(xt._1.incoming) | 0, $e = Jt(w(Jt)(1e18)(A.incoming))(w(Jt)(1e18)(nt)), oe = bt(w(bt)(-1e18)(A.incoming))(w(bt)(-1e18)(nt)), Yn = Jt(w(Jt)(1e18)(xt._1.incoming))(w(Jt)(1e18)(xt._1.outgoing)), Qn = bt(w(bt)(-1e18)(xt._1.incoming))(w(bt)(-1e18)(xt._1.outgoing)), ar = w((on) => (xn) => xn > oe ? on : xn >= $e ? on + 1 | 0 : on)(0)(xt._1.outgoing) + w((on) => (xn) => xn > Qn ? on : xn >= Yn ? on + 1 | 0 : on)(0)(A.incoming) | 0;
                        return Wt === ar ? Wt > 0 ? { ...Rt, deps: Rt.deps + 2 | 0, crossings: Rt.crossings + Wt | 0 } : Rt : { ...Rt, deps: Rt.deps + 1 | 0, crossings: Rt.crossings + xi(Wt)(ar) | 0 };
                      })(), yt = Jt(w(Jt)(1e18)(xt._1.incoming))(w(Jt)(1e18)(xt._1.outgoing)), ft = bt(w(bt)(-1e18)(xt._1.incoming))(w(bt)(-1e18)(xt._1.outgoing)), mt = Jt(w(Jt)(1e18)(gt))(w(Jt)(1e18)(A.outgoing)), Ft = bt(w(bt)(-1e18)(gt))(w(bt)(-1e18)(A.outgoing)), Lt = w((Ot) => (Wt) => Wt > ft ? Ot : Wt >= yt ? Ot + 1 | 0 : Ot)(0)(A.outgoing) + w((Ot) => (Wt) => Wt > Ft ? Ot : Wt >= mt ? Ot + 1 | 0 : Ot)(0)(xt._1.incoming) | 0, Qt = Jt(w(Jt)(1e18)(gt))(w(Jt)(1e18)(A.outgoing)), nn = bt(w(bt)(-1e18)(gt))(w(bt)(-1e18)(A.outgoing)), me = Jt(w(Jt)(1e18)(xt._1.incoming))(w(Jt)(1e18)(xt._1.outgoing)), Xn = bt(w(bt)(-1e18)(xt._1.incoming))(w(bt)(-1e18)(xt._1.outgoing)), te = w((Ot) => (Wt) => Wt > nn ? Ot : Wt >= Qt ? Ot + 1 | 0 : Ot)(0)(xt._1.outgoing) + w((Ot) => (Wt) => Wt > Xn ? Ot : Wt >= me ? Ot + 1 | 0 : Ot)(0)(gt) | 0;
                      return Lt === te ? Lt > 0 ? { ..._t, deps: _t.deps + 2 | 0, crossings: _t.crossings + Lt | 0 } : _t : { ..._t, deps: _t.deps + 1 | 0, crossings: _t.crossings + xi(Lt)(te) | 0 };
                    }
                    f();
                  };
                })())(w((() => {
                  const At = q.segMap;
                  return (Rt) => (rn) => {
                    const xt = Kt(rn.src)(At);
                    if (xt.tag === "Nothing")
                      return Rt;
                    if (xt.tag === "Just") {
                      const Gt = Jt(w(Jt)(1e18)(xt._1.incoming))(w(Jt)(1e18)(xt._1.outgoing)), vt = bt(w(bt)(-1e18)(xt._1.incoming))(w(bt)(-1e18)(xt._1.outgoing)), Ct = Jt(w(Jt)(1e18)(A.incoming))(w(Jt)(1e18)(nt)), _t = (() => {
                        const Ot = bt(w(bt)(-1e18)(A.incoming))(w(bt)(-1e18)(nt)), Wt = w((on) => (xn) => xn > vt ? on : xn >= Gt ? on + 1 | 0 : on)(0)(nt) + w((on) => (xn) => xn > Ot ? on : xn >= Ct ? on + 1 | 0 : on)(0)(xt._1.incoming) | 0, $e = Jt(w(Jt)(1e18)(A.incoming))(w(Jt)(1e18)(nt)), oe = bt(w(bt)(-1e18)(A.incoming))(w(bt)(-1e18)(nt)), Yn = Jt(w(Jt)(1e18)(xt._1.incoming))(w(Jt)(1e18)(xt._1.outgoing)), Qn = bt(w(bt)(-1e18)(xt._1.incoming))(w(bt)(-1e18)(xt._1.outgoing)), ar = w((on) => (xn) => xn > oe ? on : xn >= $e ? on + 1 | 0 : on)(0)(xt._1.outgoing) + w((on) => (xn) => xn > Qn ? on : xn >= Yn ? on + 1 | 0 : on)(0)(A.incoming) | 0;
                        return Wt === ar ? Wt > 0 ? { ...Rt, deps: Rt.deps + 2 | 0, crossings: Rt.crossings + Wt | 0 } : Rt : { ...Rt, deps: Rt.deps + 1 | 0, crossings: Rt.crossings + xi(Wt)(ar) | 0 };
                      })(), yt = Jt(w(Jt)(1e18)(xt._1.incoming))(w(Jt)(1e18)(xt._1.outgoing)), ft = bt(w(bt)(-1e18)(xt._1.incoming))(w(bt)(-1e18)(xt._1.outgoing)), mt = Jt(w(Jt)(1e18)(gt))(w(Jt)(1e18)(A.outgoing)), Ft = bt(w(bt)(-1e18)(gt))(w(bt)(-1e18)(A.outgoing)), Lt = w((Ot) => (Wt) => Wt > ft ? Ot : Wt >= yt ? Ot + 1 | 0 : Ot)(0)(A.outgoing) + w((Ot) => (Wt) => Wt > Ft ? Ot : Wt >= mt ? Ot + 1 | 0 : Ot)(0)(xt._1.incoming) | 0, Qt = Jt(w(Jt)(1e18)(gt))(w(Jt)(1e18)(A.outgoing)), nn = bt(w(bt)(-1e18)(gt))(w(bt)(-1e18)(A.outgoing)), me = Jt(w(Jt)(1e18)(xt._1.incoming))(w(Jt)(1e18)(xt._1.outgoing)), Xn = bt(w(bt)(-1e18)(xt._1.incoming))(w(bt)(-1e18)(xt._1.outgoing)), te = w((Ot) => (Wt) => Wt > nn ? Ot : Wt >= Qt ? Ot + 1 | 0 : Ot)(0)(xt._1.outgoing) + w((Ot) => (Wt) => Wt > Xn ? Ot : Wt >= me ? Ot + 1 | 0 : Ot)(0)(gt) | 0;
                      return Lt === te ? Lt > 0 ? { ..._t, deps: _t.deps + 2 | 0, crossings: _t.crossings + Lt | 0 } : _t : { ..._t, deps: _t.deps + 1 | 0, crossings: _t.crossings + xi(Lt)(te) | 0 };
                    }
                    f();
                  };
                })())({ crossings: 0, deps: 0 })(ht((At) => At.tgt === A.id, d.deps)))(ht((At) => At.src === A.id, d.deps)), $t = (() => {
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
                      const At = Jt(w(Jt)(1e18)($t._1.incoming))(w(Jt)(1e18)($t._1.outgoing)), Rt = Jt(w(Jt)(1e18)(gt))(w(Jt)(1e18)(A.outgoing)), rn = bt(w(bt)(-1e18)($t._1.incoming))(w(bt)(-1e18)($t._1.outgoing)), xt = bt(w(bt)(-1e18)(gt))(w(bt)(-1e18)(A.outgoing)), Gt = Jt(w(Jt)(1e18)(A.incoming))(w(Jt)(1e18)(nt));
                      return ct.crossings + (() => {
                        const vt = Jt(w(Jt)(1e18)($t._1.incoming))(w(Jt)(1e18)($t._1.outgoing)), Ct = bt(w(bt)(-1e18)(A.incoming))(w(bt)(-1e18)(nt)), _t = bt(w(bt)(-1e18)($t._1.incoming))(w(bt)(-1e18)($t._1.outgoing));
                        return ((w((yt) => (ft) => ft > rn ? yt : ft >= At ? yt + 1 | 0 : yt)(0)(nt) + w((yt) => (ft) => ft > Ct ? yt : ft >= Gt ? yt + 1 | 0 : yt)(0)($t._1.incoming) | 0) + w((yt) => (ft) => ft > xt ? yt : ft >= Rt ? yt + 1 | 0 : yt)(0)($t._1.outgoing) | 0) + w((yt) => (ft) => ft > _t ? yt : ft >= vt ? yt + 1 | 0 : yt)(0)(gt) | 0;
                      })() | 0;
                    })()
                  };
                if ($t.tag === "Nothing")
                  return ct;
                f();
              })()
            }))(L);
            return w((Z) => (et) => et.rating.crossings < Z.rating.crossings || !(et.rating.crossings > Z.rating.crossings) && (et.rating.deps < Z.rating.deps || !(et.rating.deps > Z.rating.deps) && et.c.a.size > Z.c.a.size) ? et : Z)(0 < O.length ? O[0] : { c: G._1, rating: { crossings: 1e6, deps: 1e6 } })(O).c;
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
              const O = X1(Ht, v, z.i, q.freeAreas), Z = (() => {
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
                ...z.i < 1 ? [] : Et(0, z.i, Z),
                ...q.freeAreas[z.i].startPosition <= nt ? [{ startPosition: q.freeAreas[z.i].startPosition, endPosition: nt, size: nt - q.freeAreas[z.i].startPosition }] : [],
                ...gt <= q.freeAreas[z.i].endPosition ? [{ startPosition: gt, endPosition: q.freeAreas[z.i].endPosition, size: q.freeAreas[z.i].endPosition - gt }] : [],
                ...z.i < 1 ? Z : Et(z.i, Z.length, Z)
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
          return Nt(vw)(En(
            (A) => (R) => R - A >= 2 * _ ? T("Just", { startPosition: A + _, endPosition: R - _, size: R - A - 2 * _ }) : v,
            q,
            Et(1, q.length, q)
          ));
        })(),
        nextId: d.segments.length
      })(It((q) => (A) => it.compare(bt(w(bt)(-1e18)(q.incoming))(w(bt)(-1e18)(q.outgoing)) - Jt(w(Jt)(1e18)(q.incoming))(w(Jt)(1e18)(q.outgoing)))(bt(w(bt)(-1e18)(A.incoming))(w(bt)(-1e18)(A.outgoing)) - Jt(w(Jt)(1e18)(A.incoming))(w(Jt)(1e18)(A.outgoing))))(Nt((q) => Kt(q)(ot))(rt.decisions)));
      return {
        segments: (() => {
          const q = (A, R) => {
            if (A.tag === "Leaf")
              return R;
            if (A.tag === "Node")
              return q(A._5, St("Cons", A._4, q(A._6, R)));
            f();
          };
          return tn(Jn.foldr, q(M.segMap, Y));
        })(),
        deps: (() => {
          const q = M.segMap, A = (L, G) => {
            if (L.tag === "Leaf")
              return G;
            if (L.tag === "Node")
              return A(L._5, St("Cons", L._4, A(L._6, G)));
            f();
          }, R = tn(Jn.foldr, A(q, Y)), X = R.length;
          return [
            ...wt(wt(Vt(0, X - 2 | 0))((L) => wt(Vt(L + 1 | 0, X - 1 | 0))((G) => [
              b(L, G)
            ])))((L) => L._1 >= 0 && L._1 < R.length ? L._2 >= 0 && L._2 < R.length ? R[L._1].splitPartner.tag !== "Nothing" && R[L._1].splitPartner.tag === "Just" && R[L._1].splitPartner._1 === R[L._2].id || R[L._2].splitPartner.tag !== "Nothing" && R[L._2].splitPartner.tag === "Just" && R[L._2].splitPartner._1 === R[L._1].id ? [] : i(_, R[L._1], R[L._2]) : [] : []),
            ...wt(R)((L) => L.splitBy.tag === "Just" && L.splitPartner.tag === "Just" && (() => {
              const G = Kt(L.splitPartner._1)(q);
              if (G.tag === "Nothing")
                return !1;
              if (G.tag === "Just")
                return !0;
              f();
            })() && (() => {
              const G = Kt(L.splitBy._1)(q);
              if (G.tag === "Nothing")
                return !1;
              if (G.tag === "Just")
                return !0;
              f();
            })() ? [{ src: L.id, tgt: L.splitBy._1, weight: 1, kind: Tu }, { src: L.splitBy._1, tgt: L.splitPartner._1, weight: 1, kind: Tu }] : [])
          ];
        })()
      };
    })(), m = p.segments, h = m.length, $ = (B) => {
      let H = B, rt = !0, ot;
      for (; rt; ) {
        const M = H, q = jt((A) => {
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
            inWeight: w((R) => (X) => qt(st)(bn)(X.tgt)(-X.weight)(R))(M.inWeight)((() => {
              const R = Kt(A)(M.depsBySrc);
              if (R.tag === "Nothing")
                return [];
              if (R.tag === "Just")
                return R._1;
              f();
            })()),
            marks: tt(st)(A)(M.nextSource)(M.marks),
            nextSource: M.nextSource + 1 | 0,
            outWeight: w((R) => (X) => qt(st)(bn)(X.src)(-X.weight)(R))(M.outWeight)((() => {
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
    }, y = (B) => {
      let H = B, rt = !0, ot;
      for (; rt; ) {
        const M = H, q = jt((A) => {
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
            inWeight: w((R) => (X) => qt(st)(bn)(X.tgt)(-X.weight)(R))(M.inWeight)((() => {
              const R = Kt(A)(M.depsBySrc);
              if (R.tag === "Nothing")
                return [];
              if (R.tag === "Just")
                return R._1;
              f();
            })()),
            marks: tt(st)(A)(M.nextSink)(M.marks),
            nextSink: M.nextSink - 1 | 0,
            outWeight: w((R) => (X) => qt(st)(bn)(X.src)(-X.weight)(R))(M.outWeight)((() => {
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
    }, J = ((B) => {
      let H = B, rt = !0, ot;
      for (; rt; ) {
        const q = $(y(H));
        if (q.remaining.length === 0) {
          rt = !1, ot = I((A) => {
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
            const L = Kt(X)(q.outWeight), G = Kt(X)(q.inWeight);
            return (() => {
              if (L.tag === "Nothing")
                return 0;
              if (L.tag === "Just")
                return L._1;
              f();
            })() - (() => {
              if (G.tag === "Nothing")
                return 0;
              if (G.tag === "Just")
                return G._1;
              f();
            })() | 0;
          }, R = It((X) => (L) => st.compare(A(L))(A(X)))(q.remaining);
          if (0 < R.length) {
            const X = R[0];
            return {
              ...q,
              inWeight: w((L) => (G) => qt(st)(bn)(G.tgt)(-G.weight)(L))(q.inWeight)((() => {
                const L = Kt(X)(q.depsBySrc);
                if (L.tag === "Nothing")
                  return [];
                if (L.tag === "Just")
                  return L._1;
                f();
              })()),
              marks: tt(st)(X)(q.nextSource)(q.marks),
              nextSource: q.nextSource + 1 | 0,
              outWeight: w((L) => (G) => qt(st)(bn)(G.src)(-G.weight)(L))(q.outWeight)((() => {
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
      remaining: I((B) => B.id)(m),
      marks: D,
      inWeight: w((B) => (H) => qt(st)(bn)(H.tgt)(H.weight)(B))(D)(p.deps),
      outWeight: w((B) => (H) => qt(st)(bn)(H.src)(H.weight)(B))(D)(p.deps),
      depsBySrc: w((B) => (H) => qt(st)(Nn)(H.src)([H])(B))(D)(p.deps),
      depsByTgt: w((B) => (H) => qt(st)(Nn)(H.tgt)([H])(B))(D)(p.deps),
      nextSink: h - 1 | 0,
      nextSource: h + 1 | 0
    }), N = (() => {
      const B = (() => {
        const M = pi(I((q) => b(q.id, q.mark))(J));
        return {
          segments: J,
          deps: Nt((q) => (() => {
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
      })(), H = w((M) => (q) => qt(st)(bn)(q.tgt)(1)(M))(D)(B.deps), ot = ((M) => {
        let q = M, A = !0, R;
        for (; A; ) {
          const X = q, L = Bt((G) => v, (G) => (z) => T("Just", { head: G, tail: z }), X.queue);
          if (L.tag === "Nothing") {
            A = !1, R = X;
            continue;
          }
          if (L.tag === "Just") {
            q = w((() => {
              const G = Kt(L._1.head)(X.slots), z = (() => {
                if (G.tag === "Nothing")
                  return 0;
                if (G.tag === "Just")
                  return G._1;
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
              const G = Kt(L._1.head)(X.adj);
              if (G.tag === "Nothing")
                return [];
              if (G.tag === "Just")
                return G._1;
              f();
            })());
            continue;
          }
          f();
        }
        return R;
      })({
        slots: pi(I((M) => b(M.id, 0))(B.segments)),
        inDegree: H,
        adj: w((M) => (q) => qt(st)(Nn)(q.src)([q.tgt])(M))(D)(B.deps),
        queue: I((M) => M.id)(ht(
          (M) => {
            const q = Kt(M.id)(H);
            if (q.tag === "Nothing")
              return !0;
            if (q.tag === "Just")
              return q._1 === 0;
            f();
          },
          B.segments
        ))
      });
      return It((M) => (q) => st.compare(M.slot)(q.slot))(I((M) => ({
        ...M,
        slot: (() => {
          const q = Kt(M.id)(ot.slots);
          if (q.tag === "Nothing")
            return 0;
          if (q.tag === "Just")
            return q._1;
          f();
        })()
      }))(B.segments));
    })(), C = 1 + w((B) => (H) => Ig(B)(H.slot))(0)(N) | 0, k = wt(N)((B) => B.members), P = ht((B) => Je(Fr)(B.edge.id)(k), t), E = w(bt)(-1e18)(I((B) => B.fromPos._2)(P)), Q = w(Jt)(1e18)(I((B) => B.toPos._2)(P));
    if (E > Q) {
      const B = pi(I((H) => b(H.id, H))(N));
      return Ee(I((H) => I((rt) => b(
        rt,
        {
          slot: H.slot,
          slotCount: C,
          gapTop: Q,
          gapBottom: E,
          partner: (() => {
            if (H.splitPartner.tag === "Just") {
              const ot = Kt(H.splitPartner._1)(B);
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
            const rt = Kt(H.splitPartner._1)(B);
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
    const W = pi(I((B) => b(B.id, B))(N));
    return Ee(I((B) => I((H) => b(
      H,
      {
        slot: B.slot,
        slotCount: C,
        gapTop: E,
        gapBottom: Q,
        partner: (() => {
          if (B.splitPartner.tag === "Just") {
            const rt = Kt(B.splitPartner._1)(W);
            if (rt.tag === "Just")
              return T("Just", { slot: rt._1.slot, splitX: 0 < rt._1.incoming.length ? rt._1.incoming[0] : 0 });
            if (rt.tag === "Nothing")
              return v;
            f();
          }
          if (B.splitPartner.tag === "Nothing")
            return v;
          f();
        })()
      }
    ))(B.members))(ht(
      (B) => {
        if (B.splitPartner.tag === "Just") {
          const H = Kt(B.splitPartner._1)(W);
          return !(H.tag === "Just" && (() => {
            if (H._1.splitBy.tag === "Nothing")
              return !1;
            if (H._1.splitBy.tag === "Just")
              return !0;
            f();
          })());
        }
        if (B.splitPartner.tag === "Nothing")
          return !0;
        f();
      },
      N
    )));
  })()))(D)(xw(w((s) => (u) => {
    const a = ki(u.edge.from.node)(e);
    if (a.tag === "Just") {
      const c = ki(u.edge.to.node)(e);
      return c.tag === "Just" && a._1.layer !== c._1.layer ? qt(st)(Nn)(xi(a._1.layer)(c._1.layer))([u])(s) : s;
    }
    return s;
  })(D)((() => {
    const s = (u) => b(
      (() => {
        const a = ki(u.edge.from.node)(e);
        return a.tag === "Just" ? a._1.layer : 1e6;
      })(),
      (() => {
        const a = ki(u.edge.from.node)(e);
        return a.tag === "Just" ? a._1.order : 1e6;
      })()
    );
    return It((u) => (a) => yw(s(u))(s(a)))(t);
  })())));
}, ww = (t) => (n) => {
  const e = rh(t)(n), r = w((o) => (i) => tt(F)(i.node)(i)(o))(D)(n);
  return w((o) => (i) => {
    const s = ki(i.edge.from.node)(r);
    if (s.tag === "Just") {
      const u = ki(i.edge.to.node)(r);
      if (u.tag === "Just" && s._1.layer !== u._1.layer) {
        const a = Tw(i.edge.id)(e);
        if (a.tag === "Just")
          return tt(st)(xi(s._1.layer)(u._1.layer))(a._1.slotCount)(o);
      }
      return o;
    }
    return o;
  })(D)(t);
}, ua = /* @__PURE__ */ hn(F)(Yt), Wr = (t) => (e) => {
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
}, Dc = (t) => (e) => {
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
}, Nw = (t) => (e) => {
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
}, zc = (t) => (n) => {
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
}, zg = (t) => (n) => w((e) => (r) => qt(t)(Nn)(n(r))([r])(e))(D), Hg = (t) => (n) => (e) => (r) => {
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
}, oh = (t) => (n) => {
  const e = t.hi - t.lo, r = (t.lo + t.hi) / 2, o = n.length;
  return o === 0 ? D : ua(o === 1 ? I((i) => b(i, r))(n) : Xt((i) => (s) => b(s, t.lo + V(i + 1 | 0) * e / V(o + 1 | 0)))(n));
}, ih = (t) => (n) => (e) => (r) => (o) => {
  const i = zg(F)((g) => g.to.node)(t), s = zg(F)((g) => g.from.node)(t), u = w((g) => (p) => tt(F)(p.node)(p)(g))(D)(n), a = (g, p, m) => {
    const h = Wr(g)(u);
    if (h.tag === "Nothing")
      return b(0, 0);
    if (h.tag === "Just") {
      const $ = Wr(g)(e);
      if ($.tag === "Nothing") {
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
      if ($.tag === "Just") {
        const y = jt((x) => x.id === p)($._1);
        if (y.tag === "Nothing") {
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
        if (y.tag === "Just") {
          const x = V(4);
          if (y._1.side === "North")
            return b(h._1.position._1 * x + V(y._1.offset) * x, h._1.position._2 * x);
          if (y._1.side === "South")
            return b(h._1.position._1 * x + V(y._1.offset) * x, (h._1.position._2 + h._1.size._2) * x);
          if (y._1.side === "East")
            return b((h._1.position._1 + h._1.size._1) * x, h._1.position._2 * x + V(y._1.offset) * x);
          if (y._1.side === "West")
            return b(h._1.position._1 * x, h._1.position._2 * x + V(y._1.offset) * x);
        }
      }
    }
    f();
  }, c = ua(wt(r)((g) => {
    if (g.nodes.length <= 2)
      return [];
    const p = V(4);
    if (1 < g.nodes.length) {
      const m = Wr(g.nodes[1])(u);
      if (m.tag === "Nothing")
        return [];
      if (m.tag === "Just") {
        const h = m._1.position._1 * p + m._1.size._1 * p / 2;
        return I(($) => b($, h))(En(
          ($) => (y) => g.edgeId + ":" + $ + "->" + y,
          g.nodes,
          Et(1, g.nodes.length, g.nodes)
        ));
      }
      f();
    }
    return [];
  })), l = (g) => {
    const p = Wr(g.from.node)(u), m = Wr(g.to.node)(u);
    if (p.tag === "Just" && m.tag === "Just") {
      const h = p._1, $ = m._1, y = It((x) => (J) => st.compare(x.score)(J.score))(I((x) => {
        const J = x._1, N = x._2;
        return {
          from: J,
          to: N,
          score: (() => {
            const C = (Q, W, B, H, rt) => {
              const ot = zc(Q)(W), M = zc(Q)(B);
              return ot.lo < M.hi && M.lo < ot.hi && (J === "South" ? N === "North" && rt._2 > H._2 : J === "North" ? N === "South" && rt._2 < H._2 : J === "East" ? N === "West" && rt._1 > H._1 : J === "West" && N === "East" && rt._1 < H._1) ? 0 : Hg(J)(N)(H)(rt);
            }, k = Dg(J)(h), P = Dg(N)($), E = Hg(J)(N)(k)(P);
            return (() => {
              if (E > 0) {
                if (J === "South")
                  return N === "North" ? C(Bn, h, $, k, P) * 10 | 0 : E * 10 | 0;
                if (J === "North")
                  return N === "South" ? C(In, h, $, k, P) * 10 | 0 : E * 10 | 0;
                if (J === "East")
                  return N === "West" ? C(Xr, h, $, k, P) * 10 | 0 : E * 10 | 0;
                if (J === "West" && N === "East")
                  return C(Yr, h, $, k, P) * 10 | 0;
              }
              return E * 10 | 0;
            })() + (J === "South" ? N === "North" ? $.layer >= h.layer ? 0 : 20 : 15 : J === "North" ? N === "South" ? $.layer <= h.layer ? 0 : 20 : 15 : J === "East" ? N === "West" ? 5 : 15 : J === "West" && N === "East" ? 5 : 15) | 0;
          })()
        };
      })([
        b(Bn, In),
        b(Xr, In),
        b(Yr, In),
        b(Bn, Xr),
        b(Bn, Yr),
        b(In, Bn),
        b(In, Xr),
        b(In, Yr),
        b(Xr, Bn),
        b(Yr, Bn),
        b(Xr, Yr),
        b(Yr, Xr)
      ]));
      if (0 < y.length)
        return { from: y[0].from, to: y[0].to };
    }
    return { from: Bn, to: In };
  }, _ = ua(I((g) => b(g.id, l(g)))(t)), d = (g, p, m, h, $, y) => {
    const x = V(4), J = Wr(p)(u);
    if (J.tag === "Nothing")
      return b(0, 0);
    if (J.tag === "Just") {
      const N = Nw(b(m, g))(o);
      if (N.tag === "Just") {
        const C = J._1.position._1 * x + N._1, k = V(4);
        if (g === "South")
          return b(C, (J._1.position._2 + J._1.size._2) * k);
        if (g === "North")
          return b(C, J._1.position._2 * k);
        if (g === "East")
          return b((J._1.position._1 + J._1.size._1) * k, C);
        if (g === "West")
          return b(J._1.position._1 * k, C);
        f();
      }
      if (N.tag === "Nothing") {
        const C = zc(g)(J._1), k = (C.lo + C.hi) / 2, P = Dc(m)(oh(C)(I((W) => W.id)(It((W) => (B) => it.compare($(g)(W))($(g)(B)))(ht(
          (W) => {
            const B = Dc(W.id)(_);
            if (B.tag === "Just") {
              const H = y(B._1);
              return H === "North" ? g === "North" : H === "South" ? g === "South" : H === "East" ? g === "East" : H === "West" && g === "West";
            }
            if (B.tag === "Nothing")
              return !0;
            f();
          },
          (() => {
            const W = Wr(p)(h);
            if (W.tag === "Nothing")
              return [];
            if (W.tag === "Just")
              return W._1;
            f();
          })()
        ))))), E = (() => {
          if (P.tag === "Nothing")
            return k;
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
  return I((g) => {
    const p = Dc(g.edge.id)(c);
    if (p.tag === "Nothing")
      return g;
    if (p.tag === "Just")
      return {
        ...g,
        fromPos: On(3)(g.edge.from.node) === "$d:" ? b(p._1, g.fromPos._2) : g.fromPos,
        toPos: On(3)(g.edge.to.node) === "$d:" ? b(p._1, g.toPos._2) : g.toPos
      };
    f();
  })(I((g) => {
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
          const $ = Wr(h.to.node)(u);
          if ($.tag === "Nothing")
            return 0;
          if ($.tag === "Just") {
            const y = V(4);
            if (m === "South" || m === "North")
              return $._1.position._1 * y + $._1.size._1 * y / 2;
            if (m === "East" || m === "West")
              return $._1.position._2 * y + $._1.size._2 * y / 2;
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
          const $ = Wr(h.from.node)(u);
          if ($.tag === "Nothing")
            return 0;
          if ($.tag === "Just") {
            const y = V(4);
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
}, aa = /* @__PURE__ */ (() => {
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
        return e._2 === "North" ? fe : Wn;
      if (e._2 === "North")
        return qn;
      if (n._2 === "South")
        return e._2 === "South" ? fe : Wn;
      if (e._2 === "South")
        return qn;
      if (n._2 === "East")
        return e._2 === "East" ? fe : Wn;
      if (e._2 === "East")
        return qn;
      if (n._2 === "West" && e._2 === "West")
        return fe;
      f();
    },
    Eq0: () => t
  };
})(), Jw = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = v;
      continue;
    }
    if (s.tag === "Node") {
      const u = aa.compare(t)(s._3);
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
}, Cw = /* @__PURE__ */ hn(F)(Yt), Hc = (t) => (e) => {
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
}, bw = /* @__PURE__ */ hn(aa)(Yt), Qg = /* @__PURE__ */ (() => {
  const t = pe.unfoldr(Ze);
  return (n) => t(_e("IterNode", n, je));
})(), Pi = (t) => (n) => (e) => (r) => {
  const o = Jw(b(n, e))(t);
  if (o.tag === "Nothing")
    return r;
  if (o.tag === "Just")
    return o._1;
  f();
}, sh = (t) => (n) => (e) => {
  const r = Cw(Ee(I((s) => Xt((u) => (a) => b(a, u))(s))(t))), o = (s, u) => {
    if (s === "South") {
      const a = Hc(u.to.node)(r);
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      f();
    }
    if (s === "North") {
      const a = Hc(u.from.node)(r);
      if (a.tag === "Nothing")
        return 0;
      if (a.tag === "Just")
        return a._1;
      f();
    }
    return 0;
  }, i = (s) => w((u) => (a) => Zn(
    aa.compare,
    Vn,
    bw(I((c) => b(b(c._1, s), c._2))(Qg(oh({
      lo: 0,
      hi: (() => {
        const c = Hc(a._1)(e);
        if (c.tag === "Just")
          return c._1._1;
        if (c.tag === "Nothing")
          return On(3)(a._1) === "$d:" ? 0 : 1;
        f();
      })()
    })(I((c) => c.id)(It((c) => (l) => st.compare(o(s, c))(o(s, l)))(a._2)))))),
    u
  ))(D)(Qg(w((u) => (a) => a.from.node === a.to.node ? u : s === "South" ? qt(F)(Nn)(a.from.node)([a])(u) : s === "North" ? qt(F)(Nn)(a.to.node)([a])(u) : u)(D)(n)));
  return Zn(aa.compare, Vn, i(In), i(Bn));
}, uh = (t) => t, ah = (t) => t, ch = (t) => t, kw = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(D), Sw = /* @__PURE__ */ (() => {
  const t = pe.unfoldr((n) => {
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
        return e(r._5, St("Cons", r._3, e(r._6, o)));
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
}, We = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Ir = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Jr = /* @__PURE__ */ hn(F)(Yt), Qc = /* @__PURE__ */ V1(F), Cf = /* @__PURE__ */ (() => {
  const t = pe.unfoldr(Ze);
  return (n) => t(_e("IterNode", n, je));
})(), Lw = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ew = (t) => (e) => {
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
}, Og = /* @__PURE__ */ ch("VDown"), Wg = /* @__PURE__ */ ch("VUp"), Pw = /* @__PURE__ */ ah("ForwardPhase"), Aw = /* @__PURE__ */ ah("StackPhase"), qg = /* @__PURE__ */ uh("HRight"), Xg = /* @__PURE__ */ uh("HLeft"), Yg = (t) => (e) => {
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
}, Rw = (t) => (n) => (e) => {
  const r = w((u) => (a) => qt(F)(bn)(a.tgt)(1)(u))(D)(t), o = Sw(kw([
    ...I((u) => u.src)(t),
    ...I((u) => u.tgt)(t),
    ...(() => {
      const u = (a, c) => {
        if (a.tag === "Leaf")
          return c;
        if (a.tag === "Node")
          return u(a._5, St("Cons", a._4, u(a._6, c)));
        f();
      };
      return tn(Jn.foldr, u(n, Y));
    })()
  ])), i = w((u) => (a) => qt(F)(Nn)(a.src)([{ target: a.tgt, sep: a.sep }])(u))(D)(t);
  return ((u) => (a) => (c) => {
    let l = u, _ = a, d = c, g = !0, p;
    for (; g; ) {
      const m = l, h = _, $ = d, y = Bt((x) => v, (x) => (J) => T("Just", { head: x, tail: J }), m);
      if (y.tag === "Nothing") {
        g = !1, p = $;
        continue;
      }
      if (y.tag === "Just") {
        const x = pt(y._1.head)($), J = (() => {
          if (x.tag === "Nothing")
            return 0;
          if (x.tag === "Just")
            return x._1;
          f();
        })(), N = w((C) => (k) => {
          const P = pt(k.target)(C.result), E = J + k.sep, Q = pt(k.target)(C.indeg), W = (() => {
            if (Q.tag === "Nothing")
              return -1;
            if (Q.tag === "Just")
              return Q._1 - 1 | 0;
            f();
          })();
          return {
            newQueue: W === 0 ? [...C.newQueue, k.target] : C.newQueue,
            result: tt(F)(k.target)((() => {
              if (P.tag === "Nothing")
                return E;
              if (P.tag === "Just") {
                if (e === "VDown")
                  return We(P._1)(E);
                if (e === "VUp")
                  return Ir(P._1)(E);
              }
              f();
            })())(C.result),
            indeg: tt(F)(k.target)(W)(C.indeg)
          };
        })({ newQueue: [], result: $, indeg: h })((() => {
          const C = pt(y._1.head)(i);
          if (C.tag === "Nothing")
            return [];
          if (C.tag === "Just")
            return C._1;
          f();
        })());
        l = [...y._1.tail, ...N.newQueue], _ = N.indeg, d = N.result;
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
  ))(r)(w((u) => (a) => tt(F)(a)(0)(u))(D)(o));
}, Fw = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, St("Cons", i._4, n(i._6, s)));
    f();
  }, e = tn(Jn.foldr, n(t, Y)), r = w(We)(999999)(e);
  if (r === 0 || e.length === 0)
    return t;
  const o = (i) => {
    if (i.tag === "Leaf")
      return D;
    if (i.tag === "Node")
      return Zt("Node", i._1, i._2, i._3, i._4 - r, o(i._5), o(i._6));
    f();
  };
  return o(t);
}, fh = (t) => {
  const n = (i, s) => {
    if (i.tag === "Leaf")
      return s;
    if (i.tag === "Node")
      return n(i._5, St("Cons", i._4, n(i._6, s)));
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
        u = Ir(_)(d._1), a = d._2;
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
        u = We(_)(d._1), a = d._2;
        continue;
      }
      f();
    }
    return l;
  };
  return r(-999999)(e) - o(999999)(e);
}, ys = (t) => (n) => ((r) => (o) => {
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
})())([n]), Gw = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => (l) => {
  const _ = (A, R, X) => {
    const L = A.from.node === R ? A.from.port : A.to.node === R ? A.to.port : v;
    if (L.tag === "Just") {
      const G = pt(R)(o);
      if (G.tag === "Just") {
        const z = jt((U) => U.id === L._1)(G._1);
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
      if (G.tag === "Nothing") {
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
      const G = pt(R)(r), z = Pi(s)(A.id)(X)((() => {
        if (G.tag === "Nothing")
          return 0.5;
        if (G.tag === "Just")
          return G._1._1 / 2;
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
  }, g = (A, R, X) => w((L) => (G) => tt(F)(G)((() => {
    const z = pt(G)(L);
    if (z.tag === "Nothing")
      return 0 + R;
    if (z.tag === "Just")
      return z._1 + R;
    f();
  })())(L))(X)(ys(a)(A)), p = (() => {
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
  }, h = Jr(Ee(Xt((A) => (R) => I((X) => b(X, A))(R))(e))), $ = (A, R) => On(3)(A) === "$d:" && On(3)(R) === "$d:" || On(3)(A) === "$d:" || On(3)(R) === "$d:" ? 10 : V(t.nodeGap), y = w((A) => (R) => Qc((X) => T(
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
  ))(R.to.node)(A))(D)(i), x = w((A) => (R) => Qc((X) => T(
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
  ))(R.from.node)(A))(D)(i), J = Ee(e), N = w((A) => (R) => {
    const X = pt(R)(a.root), L = (() => {
      if (X.tag === "Nothing")
        return R;
      if (X.tag === "Just")
        return X._1;
      f();
    })();
    return R === L ? A : Qc((G) => T(
      "Just",
      (() => {
        if (G.tag === "Nothing")
          return !0;
        if (G.tag === "Just")
          return G._1;
        f();
      })() && On(3)(R) === "$d:"
    ))(L)(A);
  })(Jr(I((A) => b(A, !0))(Bi(F.compare)((() => {
    const A = (R, X) => {
      if (R.tag === "Leaf")
        return X;
      if (R.tag === "Node")
        return A(R._5, St("Cons", R._4, A(R._6, X)));
      f();
    };
    return tn(Jn.foldr, A(a.root, Y));
  })()))))(J), C = (A, R) => {
    const X = A.free, L = pt(X)(a.root), G = (() => {
      if (L.tag === "Nothing")
        return X;
      if (L.tag === "Just")
        return L._1;
      f();
    })(), z = pt(G)(N), U = (() => {
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
          const ct = pt(G)(R.su);
          return !U && (() => {
            const $t = pt(O.from.node)(h);
            return O.from.node !== O.to.node && (() => {
              const At = pt(O.to.node)(h);
              return (() => {
                if ($t.tag === "Nothing")
                  return -1;
                if ($t.tag === "Just")
                  return $t._1;
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
        })(), gt = nt !== G;
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
      }
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
    })());
  }, k = (A, R, X, L) => {
    const G = (() => {
      if (c === "VDown")
        return -1e18;
      if (c === "VUp")
        return 1e18;
      f();
    })(), z = { free: R, isRoot: X }, U = C(z, L);
    if (U.edge.tag === "Nothing")
      return U.hasEdges ? { thresh: G, state: { ...L, queue: [...L.queue, z] } } : { thresh: G, state: L };
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
    const G = R === A, z = pt(R)(a.align), U = (() => {
      if (z.tag === "Nothing")
        return R === A;
      if (z.tag === "Just")
        return z._1 === A;
      f();
    })();
    if (!(G || U))
      return { thresh: X, state: L };
    const K = (() => {
      if (c === "VDown")
        return G && X <= -1e18;
      if (c === "VUp")
        return G && X >= 1e18;
      f();
    })() ? k(A, R, !0, L) : { thresh: X, state: L };
    return (() => {
      if (c === "VDown")
        return K.thresh <= -1e18 && U;
      if (c === "VUp")
        return K.thresh >= 1e18 && U;
      f();
    })() ? k(A, R, !1, K.state) : K;
  }, E = (A) => (R) => (X) => {
    const L = pt(X)(n.nodeIndex), G = (() => {
      if (L.tag === "Nothing")
        return 0;
      if (L.tag === "Just")
        return L._1;
      f();
    })(), z = jt((et) => Je(Fr)(X)(et))(p), U = (() => {
      if (z.tag === "Nothing")
        return [];
      if (z.tag === "Just")
        return z._1;
      f();
    })(), K = U.length;
    if ((() => {
      if (c === "VDown")
        return G <= 0;
      if (c === "VUp")
        return G >= (K - 1 | 0);
      f();
    })()) {
      const et = P(A, X, R.thresh, R.st);
      return { ...R, st: et.state, thresh: et.thresh };
    }
    const O = (() => {
      if (c === "VDown")
        return G - 1 | 0;
      if (c === "VUp")
        return G + 1 | 0;
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
        const Qt = pt(A)(gt.state.sink);
        if (Qt.tag === "Nothing")
          return A === A;
        if (Qt.tag === "Just")
          return Qt._1 === A;
        f();
      })() ? {
        ...gt.state,
        sink: tt(F)(A)((() => {
          const Qt = pt(nt)(gt.state.sink);
          if (Qt.tag === "Nothing")
            return nt;
          if (Qt.tag === "Just")
            return Qt._1;
          f();
        })())(gt.state.sink)
      } : gt.state, $t = pt(nt)(ct.sink), At = (() => {
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
      if (rn === At) {
        const Qt = pt(nt)(ct.x), nn = (() => {
          if (Qt.tag === "Just")
            return Qt._1;
          if (Qt.tag === "Nothing")
            return v;
          f();
        })(), me = (() => {
          if (nn.tag === "Nothing")
            return 0;
          if (nn.tag === "Just")
            return nn._1;
          f();
        })(), Xn = pt(A)(ct.x), te = (() => {
          if (Xn.tag === "Just")
            return Xn._1;
          if (Xn.tag === "Nothing")
            return v;
          f();
        })(), Ot = (() => {
          if (te.tag === "Nothing")
            return 0;
          if (te.tag === "Just")
            return te._1;
          f();
        })(), Wt = $(X, Z._1), $e = pt(Z._1)(u), oe = pt(X)(u), Yn = (() => {
          if ($e.tag === "Nothing")
            return 0;
          if ($e.tag === "Just")
            return $e._1;
          f();
        })() - (() => {
          if (oe.tag === "Nothing")
            return 0;
          if (oe.tag === "Just")
            return oe._1;
          f();
        })();
        if (c === "VDown") {
          const Qn = Ir(me + Yn + m(Z._1) + Wt)(gt.thresh);
          return {
            st: { ...ct, x: tt(F)(A)(T("Just", R.initial ? Qn : Ir(Ot)(Qn)))(ct.x) },
            initial: !1,
            thresh: gt.thresh
          };
        }
        if (c === "VUp") {
          const Qn = We(me + Yn - Wt - m(X))(gt.thresh);
          return {
            st: { ...ct, x: tt(F)(A)(T("Just", R.initial ? Qn : We(Ot)(Qn)))(ct.x) },
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
      })(), Ct = pt(A)(ct.x), _t = (() => {
        if (Ct.tag === "Just")
          return Ct._1;
        if (Ct.tag === "Nothing")
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
              tgt: At,
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
      const G = w(E(A))({
        st: { ...R, x: tt(F)(A)(T("Just", 0))(R.x) },
        initial: !0,
        thresh: (() => {
          if (c === "VDown")
            return -1e18;
          if (c === "VUp")
            return 1e18;
          f();
        })()
      })(ys(a)(A));
      return { ...G.st, blockFinished: tt(F)(A)(!0)(G.st.blockFinished) };
    }
    f();
  }, W = w((A) => (R) => w((X) => (L) => {
    const G = pt(L)(a.root), z = (() => {
      if (G.tag === "Nothing")
        return L;
      if (G.tag === "Just")
        return G._1;
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
    x: Jr(I((A) => b(A, v))(J)),
    sink: Jr(I((A) => b(A, A))(J)),
    classEdges: [],
    su: D,
    blockFinished: D,
    queue: []
  })(p), B = Rw(W.classEdges)(W.sink)(c), H = (A, R, X, L) => {
    const G = pt(R)(L), z = pt(R)(u);
    return (() => {
      if (G.tag === "Nothing")
        return 0;
      if (G.tag === "Just")
        return G._1;
      f();
    })() + (() => {
      if (z.tag === "Nothing")
        return 0;
      if (z.tag === "Just")
        return z._1;
      f();
    })() + _(A, R, X);
  }, rt = Jr(I((A) => b(A, !0))(Bi(F.compare)((() => {
    const A = (R, X) => {
      if (R.tag === "Leaf")
        return X;
      if (R.tag === "Node")
        return A(R._5, St("Cons", R._4, A(R._6, X)));
      f();
    };
    return tn(Jn.foldr, A(a.root, Y));
  })()))), ot = (A) => (R) => (X) => {
    const L = C(X, { su: R.su, blockFinished: rt }), G = {
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
        }
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
      })()
    };
    if (L.edge.tag === "Nothing")
      return { ...R, stack: [...R.stack, X], trace: [...R.trace, G], x: R.x };
    if (L.edge.tag === "Just") {
      const z = L.edge._1.from.node === X.free ? b(L.edge._1.from.node, L.edge._1.to.node) : b(L.edge._1.to.node, L.edge._1.from.node), U = H(L.edge._1, z._1, d(L.edge._1, z._1), R.x) - H(L.edge._1, z._2, d(L.edge._1, z._2), R.x), K = pt(z._1)(a.root), O = (() => {
        if (K.tag === "Nothing")
          return z._1;
        if (K.tag === "Just")
          return K._1;
        f();
      })(), Z = { ...G, edgeId: T("Just", L.edge._1.id), delta: U };
      if (U > 0 && U < 1e300) {
        const et = w((ct) => ($t) => {
          const At = pt($t)(h), Rt = (() => {
            if (At.tag === "Nothing")
              return -1;
            if (At.tag === "Just")
              return At._1;
            f();
          })();
          if (Rt >= 0 && Rt < e.length) {
            const Gt = e[Rt], vt = pt($t)(n.nodeIndex), Ct = (() => {
              if (vt.tag === "Nothing")
                return -2;
              if (vt.tag === "Just")
                return vt._1 - 1 | 0;
              f();
            })();
            return Ct >= 0 && Ct < Gt.length ? We(ct)((() => {
              const _t = pt($t)(R.x), yt = pt($t)(u), ft = pt(Gt[Ct])(R.x), mt = pt(Gt[Ct])(u);
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
              })() + m(Gt[Ct]) + $($t, Gt[Ct]));
            })()) : ct;
          }
          const rn = pt($t)(n.nodeIndex), xt = (() => {
            if (rn.tag === "Nothing")
              return -2;
            if (rn.tag === "Just")
              return rn._1 - 1 | 0;
            f();
          })();
          return xt >= 0 && xt < 0 ? We(ct)((() => {
            const Gt = pt($t)(R.x), vt = pt($t)(u), Ct = pt([][xt])(R.x), _t = pt([][xt])(u);
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
              if (Ct.tag === "Nothing")
                return 0;
              if (Ct.tag === "Just")
                return Ct._1;
              f();
            })() + (() => {
              if (_t.tag === "Nothing")
                return 0;
              if (_t.tag === "Just")
                return _t._1;
              f();
            })() + m([][xt]) + $($t, [][xt]));
          })()) : ct;
        })(U)(ys(a)(O)), nt = et > 0 ? -et : 0, gt = { ...R, x: et > 0 ? g(O, nt, R.x) : R.x, trace: [...R.trace, { ...Z, avail: et, shift: nt }] };
        return et > 0 ? gt : { ...gt, stack: [...gt.stack, X] };
      }
      if (U < 0 && -U < 1e300) {
        const et = w((ct) => ($t) => {
          const At = pt($t)(h), Rt = (() => {
            if (At.tag === "Nothing")
              return -1;
            if (At.tag === "Just")
              return At._1;
            f();
          })();
          if (Rt >= 0 && Rt < e.length) {
            const Gt = e[Rt], vt = pt($t)(n.nodeIndex), Ct = (() => {
              if (vt.tag === "Nothing")
                return 0;
              if (vt.tag === "Just")
                return vt._1 + 1 | 0;
              f();
            })();
            return Ct >= 0 && Ct < Gt.length ? We(ct)((() => {
              const _t = pt(Gt[Ct])(R.x), yt = pt(Gt[Ct])(u), ft = pt($t)(R.x), mt = pt($t)(u);
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
              })() + m($t) + $($t, Gt[Ct]));
            })()) : ct;
          }
          const rn = pt($t)(n.nodeIndex), xt = (() => {
            if (rn.tag === "Nothing")
              return 0;
            if (rn.tag === "Just")
              return rn._1 + 1 | 0;
            f();
          })();
          return xt >= 0 && xt < 0 ? We(ct)((() => {
            const Gt = pt([][xt])(R.x), vt = pt([][xt])(u), Ct = pt($t)(R.x), _t = pt($t)(u);
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
              if (Ct.tag === "Nothing")
                return 0;
              if (Ct.tag === "Just")
                return Ct._1;
              f();
            })() + (() => {
              if (_t.tag === "Nothing")
                return 0;
              if (_t.tag === "Just")
                return _t._1;
              f();
            })() + m($t) + $($t, [][xt]));
          })()) : ct;
        })(-U)(ys(a)(O)), nt = et > 0 ? et : 0, gt = { ...R, x: et > 0 ? g(O, nt, R.x) : R.x, trace: [...R.trace, { ...Z, avail: et, shift: nt }] };
        return et > 0 ? gt : { ...gt, stack: [...gt.stack, X] };
      }
      return { ...R, stack: [...R.stack, X], trace: [...R.trace, Z], x: R.x };
    }
    f();
  }, M = w(ot(Pw))({
    x: Jr(I((A) => b(
      A,
      (() => {
        const R = pt(A)(a.root), X = (() => {
          if (R.tag === "Nothing")
            return A;
          if (R.tag === "Just")
            return R._1;
          f();
        })(), L = pt(X)(W.x), G = pt((() => {
          const U = pt(X)(W.sink);
          if (U.tag === "Nothing")
            return X;
          if (U.tag === "Just")
            return U._1;
          f();
        })())(B), z = (() => {
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
          if (G.tag === "Nothing")
            return 0;
          if (G.tag === "Just")
            return G._1;
          f();
        })();
      })()
    ))(J)),
    su: W.su,
    stack: [],
    trace: []
  })(W.queue), q = w(ot(Aw))({ ...M, stack: [] })(fn(M.stack));
  return { x: q.x, queue: W.queue, trace: q.trace };
}, Iw = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => (l) => Gw(t)(n)(e)(r)(o)(i)(s)(u)(a)(c)(l).x, Bw = (t) => (n) => (e) => (r) => (o) => (i) => {
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
        const m = jt((h) => h.id === g._1)(p._1);
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
      const y = d, x = g, J = p, C = Bt((k) => v, (k) => (P) => T("Just", { head: k, tail: P }), m);
      if (C.tag === "Nothing") {
        h = !1, $ = y;
        continue;
      }
      if (C.tag === "Just") {
        const k = C._1.head, P = jt((Q) => Q.from.node === J && Q.to.node === k || Q.from.node === k && Q.to.node === J)(r), E = (() => {
          if (P.tag === "Nothing")
            return x + 0;
          if (P.tag === "Just")
            return x + (s(P._1, J, P._1.from.node === J ? Bn : In) - s(
              P._1,
              k,
              P._1.from.node === k ? Bn : In
            ));
          f();
        })();
        d = tt(F)(k)(E)(y), g = E, p = k, m = C._1.tail;
        continue;
      }
      f();
    }
    return $;
  };
  return w((a) => (c) => {
    const l = Bt((g) => v, (g) => (p) => T("Just", { head: g, tail: p }), ys(t)(c)), _ = (() => {
      if (l.tag === "Nothing")
        return tt(F)(c)(0)(D);
      if (l.tag === "Just")
        return u(tt(F)(l._1.head)(0)(D))(0)(l._1.head)(l._1.tail);
      f();
    })(), d = w((g) => (p) => Ir(g)(-p._2))(0)(Cf(_));
    return w((g) => (p) => tt(F)(p._1)(p._2 + d)(g))(a)(Cf(_));
  })(D)(Bi(F.compare)((() => {
    const a = (c, l) => {
      if (c.tag === "Leaf")
        return l;
      if (c.tag === "Node")
        return a(c._5, St("Cons", c._4, a(c._6, l)));
      f();
    };
    return tn(Jn.foldr, a(t.root, Y));
  })()));
}, Dw = (t) => (n) => {
  const e = (o, i, s) => On(3)(i) === "$d:" && Y1(
    nh,
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
      const y = _, x = d, J = g, N = p, C = m, k = x.length;
      if (C >= k) {
        h = !1, $ = y;
        continue;
      }
      const P = C >= 0 && C < x.length ? T("Just", x[C]) : v, E = (() => {
        if (P.tag === "Nothing")
          return "";
        if (P.tag === "Just")
          return P._1;
        f();
      })(), Q = e(t, E);
      if (C === (k - 1 | 0) || Q) {
        const W = (() => {
          if (Q) {
            const B = pt(E)(t.preds), H = (() => {
              if (B.tag === "Nothing")
                return [];
              if (B.tag === "Just")
                return B._1;
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
        _ = w((B) => (H) => {
          if (H >= 0 && H < x.length) {
            const rt = x[H];
            return e(t, rt) ? B : w((ot) => (M) => {
              const q = pt(M)(t.nodeIndex), A = (() => {
                if (q.tag === "Nothing")
                  return 0;
                if (q.tag === "Just")
                  return q._1;
                f();
              })();
              return A < N || A > W ? tt(F)(M + "→" + rt)()(ot) : ot;
            })(B)((() => {
              const ot = pt(rt)(t.preds);
              if (ot.tag === "Nothing")
                return [];
              if (ot.tag === "Just")
                return ot._1;
              f();
            })());
          }
          return e(t, "") ? B : w((rt) => (ot) => {
            const M = pt(ot)(t.nodeIndex), q = (() => {
              if (M.tag === "Nothing")
                return 0;
              if (M.tag === "Just")
                return M._1;
              f();
            })();
            return q < N || q > W ? tt(F)(ot + "→")()(rt) : rt;
          })(B)((() => {
            const rt = pt("")(t.preds);
            if (rt.tag === "Nothing")
              return [];
            if (rt.tag === "Just")
              return rt._1;
            f();
          })());
        })(y)(Vt(0, C)), d = x, g = J, p = W, m = C + 1 | 0;
        continue;
      }
      _ = y, d = x, g = J, p = N, m = C + 1 | 0;
    }
    return $;
  };
  return n.length < 3 ? D : w((o) => (i) => {
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
  })(D)(Vt(1, n.length - 2 | 0));
}, zw = (t) => (n) => (e) => (r) => (o) => {
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
      const p = or(g - 1 | 0, 2), m = or(g, 2);
      return w((h) => ($) => {
        if ((() => {
          const y = pt(_)(h.align);
          if (y.tag === "Nothing")
            return _ !== _;
          if (y.tag === "Just")
            return y._1 !== _;
          f();
        })())
          return h;
        if ($ >= 0 && $ < d.length) {
          const y = pt(d[$])(t.nodeIndex), x = (() => {
            if (y.tag === "Nothing")
              return 0;
            if (y.tag === "Just")
              return y._1;
            f();
          })();
          if (!(Yg(d[$] + "→" + _)(e) || Yg(_ + "→" + d[$])(e)) && (() => {
            if (r === "VDown")
              return h.r < x;
            if (r === "VUp")
              return h.r > x;
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
              r: x
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
  })({ root: Jr(I((u) => b(u, u))(i)), align: Jr(I((u) => b(u, u))(i)) })((() => {
    if (o === "HRight")
      return n;
    if (o === "HLeft")
      return fn(n);
    f();
  })());
  return { root: s.root, align: s.align };
}, wu = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => {
  const l = zw(n)(e)(u)(a)(c), _ = Bw(l)(o)(r)(i)(s)(c);
  return Q2()((d) => (g) => T(
    "Just",
    (() => {
      const p = pt(d)(_);
      if (p.tag === "Nothing")
        return g + 0;
      if (p.tag === "Just")
        return g + p._1;
      f();
    })()
  ))(Iw(t)(n)(e)(r)(o)(i)(s)(_)(l)(a)(c));
}, Mg = (t) => (n) => Xt((e) => (r) => w((o) => (i) => i >= 0 && i < n.length ? i >= 0 && i < t.length ? o + n[i] + t[i] : o + n[i] + 0 : i >= 0 && i < t.length ? o + 1 + t[i] : o + 1)(0)((() => {
  const o = Vt(0, n.length - 1 | 0);
  return e < 1 ? [] : Et(0, e, o);
})()))(n), Hw = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = Lw(0)(n.length - 1 | 0), a = V(t.layerGap), c = s(T2(u, a)), l = ww(ih(o)(c)(r)(i)(D))(c);
  return I((_) => {
    const d = Ew(_)(l);
    return d.tag === "Just" && d._1 > 0 ? Ir(a)(2 + V(d._1 - 1 | 0) * 2.5) : a;
  })(Vt(0, u - 1 | 0));
}, lh = (t) => (n) => (e) => (r) => Y1(
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
), Qw = (t) => (n) => (e) => (r) => {
  const o = It((i) => (s) => it.compare(i.w)(s.w))(I((i) => ({ l: i, w: fh(i) }))(ht(
    lh()(n)(e),
    r
  )));
  return 0 < o.length ? T("Just", o[0].l) : v;
}, Ow = (t) => (n) => {
  const e = Jr(Ee(I(Xt((o) => (i) => b(i, o)))(t))), r = (o) => It((i) => (s) => st.compare((() => {
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
          return D;
        if (i.tag === "Node")
          return Zt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(w((i) => (s) => qt(F)(Nn)(s.to.node)([s.from.node])(i))(D)(n));
    })(),
    succs: (() => {
      const o = (i) => {
        if (i.tag === "Leaf")
          return D;
        if (i.tag === "Node")
          return Zt("Node", i._1, i._2, i._3, r(i._4), o(i._5), o(i._6));
        f();
      };
      return o(w((i) => (s) => qt(F)(Nn)(s.from.node)([s.to.node])(i))(D)(n));
    })(),
    nodeIndex: e
  };
}, Ww = (t) => (n) => {
  const e = It((_) => (d) => it.compare(_.w)(d.w))(Xt((_) => (d) => ({ i: _, l: d, w: fh(d) }))(n)), r = 0 < e.length ? T("Just", e[0]) : v, o = (() => {
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
          const y = p, x = m;
          if (x.tag === "Nil") {
            h = !1, $ = y;
            continue;
          }
          if (x.tag === "Cons") {
            p = We(y)(x._1), m = x._2;
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
            return d(g._5, St("Cons", g._4, d(g._6, p)));
          f();
        };
        return d(i._1, Y);
      })());
    if (i.tag === "Nothing")
      return 0;
    f();
  })(), u = (_) => w((d) => (g) => Ir(d)((() => {
    const p = pt(g._1)(t);
    if (p.tag === "Nothing")
      return g._2 + 1;
    if (p.tag === "Just")
      return g._2 + p._1._1;
    f();
  })()))(-999999)(Cf(_)), a = o >= 0 && o < n.length ? T("Just", n[o]) : v, c = (() => {
    if (a.tag === "Just")
      return u(a._1);
    if (a.tag === "Nothing")
      return 0;
    f();
  })(), l = En(
    (_) => (d) => {
      const g = (p) => {
        if (p.tag === "Leaf")
          return D;
        if (p.tag === "Node")
          return Zt("Node", p._1, p._2, p._3, p._4 + d, g(p._5), g(p._6));
        f();
      };
      return g(_);
    },
    n,
    Xt((_) => (d) => no(_)(2) === 0 ? s - ((p) => (m) => {
      let h = p, $ = m, y = !0, x;
      for (; y; ) {
        const J = h, N = $;
        if (N.tag === "Nil") {
          y = !1, x = J;
          continue;
        }
        if (N.tag === "Cons") {
          h = We(J)(N._1), $ = N._2;
          continue;
        }
        f();
      }
      return x;
    })(999999)((() => {
      const p = (m, h) => {
        if (m.tag === "Leaf")
          return h;
        if (m.tag === "Node")
          return p(m._5, St("Cons", m._4, p(m._6, h)));
        f();
      };
      return p(d, Y);
    })()) : c - u(d))(n)
  );
  return Fw(w((_) => (d) => {
    const g = It(it.compare)(Nt(pt(d))(l));
    return tt(F)(d)(g.length === 4 ? 1 < g.length && 2 < g.length ? (g[1] + g[2]) / 2 : 0 : 0 < g.length ? g[0] : 0)(_);
  })(D)(Bi(F.compare)(Ee(I((_) => {
    const d = (g) => {
      if (g.tag === "Leaf")
        return D;
      if (g.tag === "Node")
        return Zt("Node", g._1, g._2, g._3, void 0, d(g._5), d(g._6));
      f();
    };
    return tn(Pe.foldr, d(_));
  })(l)))));
}, qw = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Ow(n)(o), u = Dw(s)(n), a = { nodeGap: t.nodeGap * 4 | 0 }, c = Zn(
    F.compare,
    Vn,
    Jr(I((g) => b(g, b(1, 1)))(ht(
      nh,
      Ee(n)
    ))),
    (() => {
      const g = (p) => {
        if (p.tag === "Leaf")
          return D;
        if (p.tag === "Node")
          return Zt("Node", p._1, p._2, p._3, b(p._4._1 * V(4), p._4._2), g(p._5), g(p._6));
        f();
      };
      return g(e);
    })()
  ), l = [
    wu(a)(s)(n)(c)(r)(o)(i)(u)(Og)(qg),
    wu(a)(s)(n)(c)(r)(o)(i)(u)(Wg)(qg),
    wu(a)(s)(n)(c)(r)(o)(i)(u)(Og)(Xg),
    wu(a)(s)(n)(c)(r)(o)(i)(u)(Wg)(Xg)
  ], _ = Ww(c)(l);
  if (lh()(n)(c)(_))
    return _;
  const d = Qw()(n)(c)(l);
  if (d.tag === "Just")
    return d._1;
  if (d.tag === "Nothing")
    return l[0];
  f();
}, Xw = (t) => (n) => (e) => (r) => {
  const o = W1(
    v,
    B1,
    (i) => i.node === n ? T("Just", i.position) : v,
    t
  );
  if (o.tag === "Nothing")
    return t;
  if (o.tag === "Just") {
    const i = o._1;
    return I((s) => s.node === e ? { ...s, position: b(i._1 + r._1, i._2 + r._2) } : s)(t);
  }
  f();
}, Yw = (t) => (n) => (e) => (r) => {
  const o = ht((s) => Je(Fr)(s.node)(n), t), i = (() => {
    if (e === "Vertical") {
      if (r === "Start")
        return w((s) => (u) => We(s)(u.position._1))(99999)(o);
      if (r === "End")
        return w((s) => (u) => Ir(s)(u.position._1))(0)(o);
      if (r === "Center") {
        const s = w((u) => (a) => u + a.position._1)(0)(o);
        return o.length === 0 ? 0 : s / V(o.length);
      }
      f();
    }
    if (e === "Horizontal") {
      if (r === "Start")
        return w((s) => (u) => We(s)(u.position._2))(99999)(o);
      if (r === "End")
        return w((s) => (u) => Ir(s)(u.position._2))(0)(o);
      if (r === "Center") {
        const s = w((u) => (a) => u + a.position._2)(0)(o);
        return o.length === 0 ? 0 : s / V(o.length);
      }
    }
    f();
  })();
  return I((s) => {
    if (Je(Fr)(s.node)(n)) {
      if (e === "Vertical")
        return { ...s, position: b(i, s.position._2) };
      if (e === "Horizontal")
        return { ...s, position: b(s.position._1, i) };
      f();
    }
    return s;
  })(t);
}, Mw = (t) => (n) => w((e) => (r) => r.tag === "AlignGroup" ? Yw(e)(r._1.nodes)(r._1.axis)(r._1.alignment) : r.tag === "RelativePosition" ? Xw(e)(r._1.anchor)(r._1.target)(r._1.offset) : e)(n)(t), Uw = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const a = I((_) => w((d) => (g) => Ir(d)((() => {
    const p = pt(g)(r);
    if (p.tag === "Nothing")
      return 1;
    if (p.tag === "Just")
      return p._1._2;
    f();
  })()))(1)(_))(e), c = qw(t)(e)(r)(o)(i)(u), l = Mg(Hw(t)(e)(r)(o)(i)(s)((_) => {
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
        const $ = On(3)(h) === "$d:" ? b(0, 1) : b(1, 1), y = pt(h)(r);
        if (y.tag === "Nothing")
          return $;
        if (y.tag === "Just")
          return y._1;
        f();
      })(),
      layer: g,
      order: m
    }))(p))(e));
  }))(a);
  return Mw(n)(Ee(Xt((_) => (d) => Xt((g) => (p) => ({
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
}, Oc = /* @__PURE__ */ D0(Yu)(/* @__PURE__ */ Zo(32)), Ug = /* @__PURE__ */ D0(Yu)(/* @__PURE__ */ Zo(31)), As = /* @__PURE__ */ (() => {
  const t = ky("25214903917");
  if (t.tag === "Nothing")
    return ad;
  if (t.tag === "Just")
    return t._1;
  f();
})(), Rs = /* @__PURE__ */ df(/* @__PURE__ */ D0(Yu)(/* @__PURE__ */ Zo(48)))(Yu), Kw = (t) => {
  const n = Sy(t);
  return Ss(cd((() => {
    if (n.tag === "Nothing")
      return ad;
    if (n.tag === "Just")
      return n._1;
    f();
  })())(As))(Rs);
}, bf = /* @__PURE__ */ Zo(11), ca = (t) => (n) => {
  const e = Ss(Ru(Fu(n)(As))(bf))(Rs);
  return b(
    (() => {
      const r = M1(Ny(hf(e)(Zo(48 - t | 0))));
      if (r.tag === "Nothing")
        return 0;
      if (r.tag === "Just")
        return r._1;
      f();
    })(),
    e
  );
}, Vw = (t) => {
  const n = ca(26)(t), e = ca(27)(n._2);
  return b((V(n._1) * zi(2)(27) + V(e._1)) / zi(2)(53), e._2);
}, jw = (t) => (n) => {
  const e = w((r) => (o) => {
    const i = Vw(r.finalR);
    return { rs: [...r.rs, i._1], finalR: i._2 };
  })({ rs: [], finalR: t })(n);
  return b(
    I((r) => r.x)(It((r) => (o) => it.compare(r.k)(o.k))(En((r) => (o) => ({ x: r, k: o }), n, e.rs))),
    e.finalR
  );
}, Zw = (t) => {
  const n = Ss(Ru(Fu(t)(As))(bf))(Rs), e = Ss(Ru(Fu(n)(As))(bf))(Rs);
  return b(
    Ru(Fu((() => {
      const r = hf(n)(Zo(16));
      return gg.compare(r)(Ug) !== "LT" ? df(r)(Oc) : r;
    })())(Oc))((() => {
      const r = hf(e)(Zo(16));
      return gg.compare(r)(Ug) !== "LT" ? df(r)(Oc) : r;
    })()),
    e
  );
}, Fs = (t) => (e) => {
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
}, fa = (t) => (e) => {
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
}, el = /* @__PURE__ */ hn(F)(Yt), Si = (t) => (e) => {
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
}, la = /* @__PURE__ */ hn(F)(Yt), tN = /* @__PURE__ */ Ms(ui), nN = /* @__PURE__ */ w(gr)(0), eN = (t) => (n) => {
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
}, rN = (t) => (n) => (e) => {
  if (t >= 0 && t < e.length) {
    const r = e[t];
    if (n >= 0 && n < e.length) {
      const o = To(Ht, v, t, e[n], e);
      if (o.tag === "Just")
        return To(Ht, v, n, r, o._1);
      if (o.tag === "Nothing")
        return v;
      f();
    }
  }
  return v;
}, oN = (t) => (n) => (e) => (r) => (o) => el(w((i) => (s) => {
  const u = It((a) => (c) => st.compare((() => {
    const l = Fs(a.id)(o);
    if (l.tag === "Nothing")
      return 1e6;
    if (l.tag === "Just")
      return l._1;
    f();
  })())((() => {
    const l = Fs(c.id)(o);
    if (l.tag === "Nothing")
      return 1e6;
    if (l.tag === "Just")
      return l._1;
    f();
  })()))(ht((a) => fa(a.to.node)(e), ht((a) => a.from.node === s, r)));
  return {
    ranks: [...i.ranks, ...Xt((a) => (c) => b(c.id, V((i.rankSum + a | 0) + 1 | 0)))(u)],
    rankSum: i.rankSum + u.length | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), iN = (t) => (n) => (e) => (r) => (o) => el(w((i) => (s) => {
  const u = It((c) => (l) => {
    const _ = st.compare((() => {
      const d = Si(l.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      f();
    })())((() => {
      const d = Si(c.from.node)(e);
      if (d.tag === "Nothing")
        return -1;
      if (d.tag === "Just")
        return d._1;
      f();
    })());
    return _ === "EQ" ? st.compare((() => {
      const d = Fs(c.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      f();
    })())((() => {
      const d = Fs(l.id)(o);
      if (d.tag === "Nothing")
        return 1e6;
      if (d.tag === "Just")
        return d._1;
      f();
    })()) : _;
  })(ht((c) => fa(c.from.node)(e), ht((c) => c.to.node === s, r))), a = u.length;
  return {
    ranks: [...i.ranks, ...Xt((c) => (l) => b(l.id, V((i.rankSum + a | 0) - c | 0)))(u)],
    rankSum: i.rankSum + a | 0
  };
})({ ranks: [], rankSum: 0 })(t).ranks), kf = (t) => (n) => (e) => {
  const r = la(Xt((u) => (a) => b(a, u))(t)), o = la(Xt((u) => (a) => b(a, u))(n)), i = Nt((u) => {
    const a = Si(u.from.node)(r), c = Si(u.to.node)(o);
    if (a.tag === "Just" && c.tag === "Just")
      return T("Just", b(a._1, c._1));
    const l = Si(u.from.node)(o), _ = Si(u.to.node)(r);
    return l.tag === "Just" && _.tag === "Just" ? T("Just", b(_._1, l._1)) : v;
  })(e), s = i.length;
  return w((u) => (a) => w((c) => (l) => a >= 0 && a < i.length && l >= 0 && l < i.length && ((i[a]._1 - i[l]._1 | 0) * (i[a]._2 - i[l]._2 | 0) | 0) < 0 ? c + 1 | 0 : c)(u)(Vt(a + 1 | 0, s - 1 | 0)))(0)(Vt(0, s - 2 | 0));
}, sN = (t) => (n) => (e) => (r) => {
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
          if (Ln((J) => J.before === m && J.after === h, r)) {
            a = d, c = g + 1 | 0;
            continue;
          }
          const $ = To(Ht, v, g, h, d), y = (() => {
            if ($.tag === "Just")
              return To(Ht, v, g + 1 | 0, m, $._1);
            if ($.tag === "Nothing")
              return v;
            f();
          })(), x = (() => {
            if (y.tag === "Nothing")
              return d;
            if (y.tag === "Just")
              return y._1;
            f();
          })();
          if (kf(n)(x)(e) < kf(n)(d)(e)) {
            a = x, c = g + 1 | 0;
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
      if (tN(_)(l)) {
        a = !1, c = l;
        continue;
      }
      u = _;
    }
    return c;
  })(t);
}, Nu = (t) => (n) => w((e) => (r) => {
  if (r >= 0 && r < t.length) {
    const o = t[r], i = r + 1 | 0;
    if (i >= 0 && i < t.length)
      return e + kf(o)(t[i])(n) | 0;
  }
  return e;
})(0)(Vt(0, t.length - 2 | 0)), uN = /* @__PURE__ */ (() => {
  const t = (n) => {
    if (n.length < 7) {
      const s = (u) => (a) => {
        let c = u, l = a, _ = !0, d;
        for (; _; ) {
          const g = c, p = l, m = p - 1 | 0;
          if (m >= 0 && m < g.length) {
            if (p >= 0 && p < g.length && p > 0 && g[m].key > g[p].key) {
              const h = rN(p - 1 | 0)(p)(g);
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
    const e = or(n.length, 2), r = t(Et(0, e, n)), o = t(Et(e, n.length, n));
    return ((s) => (u) => (a) => {
      let c = s, l = u, _ = a, d = !0, g;
      for (; d; ) {
        const p = c, m = l, h = _;
        if (m >= 0 && m < r.length) {
          if (h >= 0 && h < o.length) {
            if (r[m].key > o[h].key) {
              c = kt(p)(o[h]), l = m, _ = h + 1 | 0;
              continue;
            }
            c = kt(p)(r[m]), l = m + 1 | 0, _ = h;
            continue;
          }
          d = !1, g = [...p, ...m < 1 ? r : Et(m, r.length, r)];
          continue;
        }
        d = !1, g = [...p, ...h < 1 ? o : Et(h, o.length, o)];
      }
      return g;
    })([])(0)(0);
  };
  return t;
})(), aN = (t) => (n) => (e) => {
  const r = Nt((c) => c.tag === "OrderConstraint" ? T("Just", { before: c._1.before, after: c._1.after }) : v)(t.constraints), o = (c) => w((l) => (_) => {
    const d = _.after, g = _.before, p = oo(Ht, v, (h) => h === g, l), m = oo(Ht, v, (h) => h === d, l);
    if (p.tag === "Just" && m.tag === "Just" && p._1 > m._1) {
      const h = X1(Ht, v, p._1, l), $ = (() => {
        if (h.tag === "Nothing")
          return l;
        if (h.tag === "Just")
          return h._1;
        f();
      })(), y = q1(Ht, v, m._1, g, $);
      if (y.tag === "Nothing")
        return $;
      if (y.tag === "Just")
        return y._1;
      f();
    }
    return l;
  })(c)(r), i = el(Xt((c) => (l) => b(l.id, c))(e)), s = (c, l, _) => {
    const d = c.length;
    return w((g) => (p) => {
      const m = l ? p - 1 | 0 : p + 1 | 0, h = m >= 0 && m < g._1.length ? T("Just", g._1[m]) : v;
      if (h.tag === "Just") {
        const $ = p >= 0 && p < g._1.length ? T("Just", g._1[p]) : v;
        if ($.tag === "Just") {
          const y = la(Xt((k) => (P) => b(P, k))(h._1)), x = la(Xt((k) => (P) => b(P, k))($._1)), J = l ? oN(h._1)(y)(x)(e)(i) : iN(h._1)(y)(x)(e)(i), N = w((k) => (P) => {
            const E = Nt((W) => Fs(W.id)(J))(ht(l ? (W) => W.to.node === P._2 && fa(W.from.node)(y) : (W) => W.from.node === P._2 && fa(W.to.node)(y), e));
            if (E.length === 0)
              return { ...k, items: [...k.items, { n: P._2, key: v, origIdx: P._1 }] };
            const Q = ca(24)(k.r);
            return {
              items: [
                ...k.items,
                {
                  n: P._2,
                  key: T("Just", (nN(E) + (V(Q._1) * 4172325152040912e-24 - 0.03500000014901161)) / V(E.length)),
                  origIdx: P._1
                }
              ],
              r: Q._2
            };
          })({ items: [], r: g._2 })(Xt(jn)($._1)), C = To(
            Ht,
            v,
            p,
            sN(o(I((k) => k.n)(uN((() => {
              const k = N.items, P = (Q) => (W) => {
                let B = Q, H = W, rt = !0, ot;
                for (; rt; ) {
                  const M = B, q = H;
                  if (M >= 0 && M < k.length) {
                    if (k[M].key.tag === "Just") {
                      rt = !1, ot = k[M].key._1;
                      continue;
                    }
                    if (k[M].key.tag === "Nothing") {
                      B = M + 1 | 0, H = q;
                      continue;
                    }
                    f();
                  }
                  rt = !1, ot = q;
                }
                return ot;
              };
              return ((Q) => (W) => (B) => {
                let H = Q, rt = W, ot = B, M = !0, q;
                for (; M; ) {
                  const A = H, R = rt, X = ot;
                  if (A >= 0 && A < k.length) {
                    if (k[A].key.tag === "Just") {
                      H = A + 1 | 0, rt = k[A].key._1, ot = [...X, { n: k[A].n, key: k[A].key._1, origIdx: k[A].origIdx }];
                      continue;
                    }
                    if (k[A].key.tag === "Nothing") {
                      const L = (R + P(A + 1 | 0)(R + 1)) / 2;
                      H = A + 1 | 0, rt = L, ot = [...X, { n: k[A].n, key: L, origIdx: k[A].origIdx }];
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
  }, u = w((c) => (l) => tt(F)(l.from.node)()(tt(F)(l.to.node)()(c)))(D)(e), a = w((c) => (l) => {
    if (c.result.crossings === 0)
      return c;
    const _ = (y) => (x) => (J) => (N) => {
      let C = y, k = x, P = J, E = N, Q = !0, W;
      for (; Q; ) {
        const B = C, H = k, rt = P, ot = E;
        if (rt === 0) {
          Q = !1, W = { layout: B, crossings: 0, random: ot };
          continue;
        }
        const M = s(B, H, ot), q = Nu(M._1)(e);
        if (q < rt) {
          C = M._1, k = !H, P = q, E = M._2;
          continue;
        }
        Q = !1, W = { layout: B, crossings: rt, random: M._2 };
      }
      return W;
    }, d = ca(1)(c.result.random), g = d._1 !== 0, p = t.modelOrder.tag === "Leaf", m = (c.firstTry || c.secondTry) && !p ? c.firstTry : g, h = (() => {
      if (!p) {
        const N = s(n, m, d._2);
        return _(N._1)(!m)(Nu(N._1)(e))(N._2);
      }
      const y = m ? 0 : eN(0)(n.length - 1 | 0), x = y >= 0 && y < n.length ? T("Just", n[y]) : v;
      if (x.tag === "Just" && x._1.length > 1) {
        const N = ht((C) => Kg(C)(u), x._1);
        if (N.length > 1) {
          const C = jw(d._2)(N), k = C._1, P = To(
            Ht,
            v,
            y,
            o(w((E) => (Q) => Kg(Q)(u) ? E.idx >= 0 && E.idx < k.length ? { idx: E.idx + 1 | 0, result: [...E.result, k[E.idx]] } : { idx: E.idx, result: [...E.result, Q] } : { idx: E.idx, result: [...E.result, Q] })({ idx: 0, result: [] })(x._1).result),
            n
          );
          if (P.tag === "Just") {
            const E = s(P._1, m, C._2);
            return _(E._1)(!m)(Nu(E._1)(e))(E._2);
          }
        }
      }
      const J = s(n, m, d._2);
      return _(J._1)(!m)(Nu(J._1)(e))(J._2);
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
      random: Ss(cd(Zw(Kw(1))._1)(As))(Rs)
    },
    firstTry: t.modelOrder.tag !== "Leaf",
    secondTry: !1
  })(Vt(1, t.iterations)).result;
  return n.length <= 0 || t.iterations <= 0 ? n : a.layout;
}, cN = (t) => t, Vg = (t) => (e) => {
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
}, ve = (t) => (e) => {
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
}, Gs = /* @__PURE__ */ (() => {
  const t = { eq: (n) => (e) => n._1 === e._1 && n._2 === e._2 };
  return {
    compare: (n) => (e) => {
      const r = F.compare(n._1)(e._1);
      return r === "LT" ? Wn : r === "GT" ? qn : F.compare(n._2)(e._2);
    },
    Eq0: () => t
  };
})(), fN = /* @__PURE__ */ hn(F)(Yt), lN = (t) => (e) => {
  let r = e, o = !0, i;
  for (; o; ) {
    const s = r;
    if (s.tag === "Leaf") {
      o = !1, i = !1;
      continue;
    }
    if (s.tag === "Node") {
      const u = Gs.compare(t)(s._3);
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
}, gN = /* @__PURE__ */ cN("Greedy"), Wc = (t) => (n) => (e) => w((r) => (o) => {
  if (o.from.node === o.to.node)
    return r;
  if (o.from.node === n && !Vg(o.to.node)(r.marks)) {
    const i = ve(o.to.node)(r.inDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = tt(F)(o.to.node)(s)(r.inDeg);
    return (() => {
      const a = ve(o.to.node)(r.outDeg);
      return s <= 0 && (() => {
        if (a.tag === "Nothing")
          return !1;
        if (a.tag === "Just")
          return a._1 > 0;
        f();
      })() && !Je(Fr)(o.to.node)(r.sources);
    })() ? { ...r, inDeg: u, sources: [...r.sources, o.to.node] } : { ...r, inDeg: u };
  }
  if (o.to.node === n && !Vg(o.from.node)(r.marks)) {
    const i = ve(o.from.node)(r.outDeg), s = (() => {
      if (i.tag === "Nothing")
        return -1;
      if (i.tag === "Just")
        return i._1 - 1 | 0;
      f();
    })(), u = tt(F)(o.from.node)(s)(r.outDeg);
    return (() => {
      const a = ve(o.from.node)(r.inDeg);
      return s <= 0 && (() => {
        if (a.tag === "Nothing")
          return !1;
        if (a.tag === "Just")
          return a._1 > 0;
        f();
      })() && !Je(Fr)(o.from.node)(r.sinks);
    })() ? { ...r, outDeg: u, sinks: [...r.sinks, o.from.node] } : { ...r, outDeg: u };
  }
  return r;
})({ ...e, remaining: ht((r) => r !== n, e.remaining) })(t), _N = /* @__PURE__ */ w((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return tt(F)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return tt(F)(n._1.node)(0)(t);
    if (n._1.pin.tag === "LastLayer")
      return tt(F)(n._1.node)(99999)(t);
  }
  return t;
})(D), gh = (t) => (n) => (e) => {
  const r = ve(n)(t), o = ve(e)(t);
  return r.tag === "Just" && o.tag === "Just" && r._1 > o._1;
}, _h = (t) => (n) => (e) => (r) => {
  if (Yi(e)(r.visited) || Yi(e)(r.visiting))
    return r;
  const o = w(dN(t)(n)(e))({ ...r, visiting: tt(F)(e)()(r.visiting) })((() => {
    const i = ve(e)(n);
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
}, dN = (t) => (n) => (e) => (r) => (o) => gh(t)(e)(o) ? { ...r, backEdges: tt(Gs)(b(e, o))()(r.backEdges) } : Yi(o)(r.visiting) ? { ...r, backEdges: tt(Gs)(b(e, o))()(r.backEdges) } : Yi(o)(r.visited) ? r : _h(t)(n)(o)(r), hN = (t) => (n) => (e) => {
  const r = (d) => {
    let g = d, p = !0, m;
    for (; p; ) {
      const h = g, $ = Bt((y) => v, (y) => (x) => T("Just", { head: y, tail: x }), h.sinks);
      if ($.tag === "Just") {
        g = Wc(e)($._1.head)({
          ...h,
          sinks: $._1.tail,
          marks: tt(F)($._1.head)(h.nextRight)(h.marks),
          nextRight: h.nextRight - 1 | 0
        });
        continue;
      }
      if ($.tag === "Nothing") {
        const y = Bt((x) => v, (x) => (J) => T("Just", { head: x, tail: J }), h.sources);
        if (y.tag === "Just") {
          g = Wc(e)(y._1.head)({
            ...h,
            sources: y._1.tail,
            marks: tt(F)(y._1.head)(h.nextLeft)(h.marks),
            nextLeft: h.nextLeft + 1 | 0
          });
          continue;
        }
        if (y.tag === "Nothing") {
          const x = (N) => {
            const C = ve(N)(h.outDeg), k = ve(N)(h.inDeg);
            return (() => {
              if (C.tag === "Nothing")
                return 0;
              if (C.tag === "Just")
                return C._1;
              f();
            })() - (() => {
              if (k.tag === "Nothing")
                return 0;
              if (k.tag === "Just")
                return k._1;
              f();
            })() | 0;
          }, J = It((N) => (C) => {
            const k = st.compare(x(C))(x(N));
            return k === "EQ" ? st.compare((() => {
              const P = ve(N)(n);
              if (P.tag === "Nothing")
                return 1e6;
              if (P.tag === "Just")
                return P._1;
              f();
            })())((() => {
              const P = ve(C)(n);
              if (P.tag === "Nothing")
                return 1e6;
              if (P.tag === "Just")
                return P._1;
              f();
            })()) : k;
          })(h.remaining);
          if (0 < J.length) {
            const N = J[0];
            g = Wc(e)(N)({
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
  }, o = Bi(F.compare)([...I((d) => d.from.node)(e), ...I((d) => d.to.node)(e)]), i = ht((d) => d.from.node !== d.to.node, e), s = w((d) => (g) => qt(F)(bn)(g.to.node)(1)(d))(D)(i), u = w((d) => (g) => qt(F)(bn)(g.from.node)(1)(d))(D)(i), a = ht(
    (d) => {
      const g = ve(d)(s);
      if (g.tag === "Nothing")
        return !0;
      if (g.tag === "Just")
        return g._1 === 0;
      f();
    },
    o
  ), c = ht(
    (d) => {
      const g = ve(d)(u);
      if (g.tag === "Nothing")
        return !0;
      if (g.tag === "Just")
        return g._1 === 0;
      f();
    },
    o
  ), l = o.length + 1 | 0, _ = w((d) => (g) => {
    const p = ve(g)(d);
    return p.tag === "Just" && p._1 < 0 ? tt(F)(g)(p._1 + l | 0)(d) : d;
  })(r({
    remaining: ht((d) => !Je(Fr)(d)(a) && !Je(Fr)(d)(c), o),
    marks: D,
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
    if (gh(t)(g.from.node)(g.to.node))
      return tt(Gs)(b(g.from.node, g.to.node))()(d);
    const p = ve(g.from.node)(_), m = ve(g.to.node)(_);
    return p.tag === "Just" && m.tag === "Just" && p._1 > m._1 ? tt(Gs)(b(g.from.node, g.to.node))()(d) : d;
  })(D)(e);
}, pN = /* @__PURE__ */ w((t) => (n) => qt(F)(Nn)(n.from.node)([n.to.node])(t))(D), mN = (t) => (n) => {
  const e = pN(n), r = Bi(F.compare)([...I((i) => i.from.node)(n), ...I((i) => i.to.node)(n)]), o = w((i) => (s) => tt(F)(s.to.node)()(i))(D)(n);
  return w((i) => (s) => _h(t)(e)(s)(i))({
    visiting: D,
    visited: D,
    backEdges: D
  })([...ht((i) => !Yi(i)(o), r), ...ht((i) => Yi(i)(o), r)]).backEdges;
}, $N = (t) => (n) => (e) => (r) => {
  const o = fN(Xt((u) => (a) => b(a, u))(n)), i = _N(e), s = (() => {
    if (t === "DepthFirst")
      return mN(i)(r);
    if (t === "Greedy")
      return hN(i)(o)(r);
    f();
  })();
  return {
    edges: I((u) => lN(b(u.from.node, u.to.node))(s) ? { ...u, from: u.to, to: u.from } : u)(r),
    reversedEdges: s
  };
}, dh = Yt.foldMap(/* @__PURE__ */ (() => {
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
}, xs = (t) => (n) => (e) => (r) => dh((o) => e >= o.x && e < o.x + o.w && n > o.y && t < o.y + o.h)(r), ga = (t) => (n) => (e) => (r) => xs(Fn(n)(e))(Gn(n)(e))(r)(t), Ju = /* @__PURE__ */ V(4), yN = /* @__PURE__ */ Ha((t) => {
  if (t.direction === "H") {
    const n = Fn(t.start._1)(t.end._1);
    return [{ x: n, y: t.start._2 - 1, w: Gn(t.start._1)(t.end._1) - n, h: 2 }];
  }
  if (t.direction === "V") {
    const n = Fn(t.start._2)(t.end._2);
    return [{ x: t.start._1 - 1, y: n, w: 2, h: Gn(t.start._2)(t.end._2) - n }];
  }
  f();
}), Is = /* @__PURE__ */ Ts((t) => {
  const n = t.start._1 - t.end._1;
  return !((n < 0 ? -n < 1e-6 : n < 1e-6) && (() => {
    const e = t.start._2 - t.end._2;
    return e < 0 ? -e < 1e-6 : e < 1e-6;
  })());
}), xN = (t) => (n) => (e) => {
  const r = Bt((o) => v, (o) => (i) => T("Just", { head: o, tail: i }), n);
  if (r.tag === "Nothing")
    return [{ start: t.start, end: e.end, direction: t.direction }];
  if (r.tag === "Just") {
    const o = (r._1.head.direction === "H" ? t.direction === "H" : r._1.head.direction === "V" && t.direction === "V") ? [{ start: t.start, end: r._1.head.end, direction: t.direction }] : [t, r._1.head], i = Me(r._1.tail);
    if (i.tag === "Nothing") {
      const s = o.length - 1 | 0;
      return s >= 0 && s < o.length && (o[s].direction === "H" ? e.direction === "H" : o[s].direction === "V" && e.direction === "V") ? [
        ...(() => {
          const u = o.length - 1 | 0;
          return u < 1 ? [] : Et(0, u, o);
        })(),
        { start: o[s].start, end: e.end, direction: e.direction }
      ] : [...o, e];
    }
    if (i.tag === "Just")
      return (i._1.last.direction === "H" ? e.direction === "H" : i._1.last.direction === "V" && e.direction === "V") ? [...o, ...i._1.init, { start: i._1.last.start, end: e.end, direction: e.direction }] : [...o, ...r._1.tail, e];
  }
  f();
}, Bs = (t) => {
  const n = (r) => (o) => {
    const i = Bt((s) => v, (s) => (u) => T("Just", { head: s, tail: u }), o);
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
  }, e = Bt((r) => v, (r) => (o) => T("Just", { head: r, tail: o }), t);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return n(e._1.head)(e._1.tail);
  f();
}, vs = (t) => (n) => (e) => (r) => dh((o) => e >= o.y && e < o.y + o.h && n > o.x && t < o.x + o.w)(r), Js = (t) => (n) => (e) => (r) => vs(Fn(n)(e))(Gn(n)(e))(r)(t), vN = (t) => (n) => (e) => (r) => {
  const o = e + 2 | 0, i = o < 1 ? n : Et(o, n.length, n), s = e < 1 ? [] : Et(0, e, n), u = (e + 1 | 0) === (r - 1 | 0), a = e === 0, c = e >= 0 && e < n.length ? T("Just", n[e]) : v;
  if (c.tag === "Just") {
    const l = e + 1 | 0, _ = l >= 0 && l < n.length ? T("Just", n[l]) : v;
    if (_.tag === "Just") {
      const d = c._1.start._1 === _._1.end._1 && (!a || c._1.direction === "V") && (!u || _._1.direction === "V") && !ga(t)(Fn(c._1.start._2)(_._1.end._2))(Gn(c._1.start._2)(_._1.end._2))(c._1.start._1) ? T("Just", [...s, { start: c._1.start, end: _._1.end, direction: yn }, ...i]) : v, g = c._1.start._2 === _._1.end._2 && (!a || c._1.direction === "H") && (!u || _._1.direction === "H") && !Js(t)(Fn(c._1.start._1)(_._1.end._1))(Gn(c._1.start._1)(_._1.end._1))(c._1.start._2) ? T("Just", [...s, { start: c._1.start, end: _._1.end, direction: $n }, ...i]) : v;
      return d.tag === "Nothing" ? g : d;
    }
    if (_.tag === "Nothing")
      return v;
    f();
  }
  if (c.tag === "Nothing")
    return v;
  f();
}, TN = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const a = i;
      if ((a + 1 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const c = vN(t)(n)(a)(e);
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
}, wN = (t) => (n) => (e) => (r) => {
  const o = (d, g, p) => !ga(t)(Fn(g)(p))(Gn(g)(p))(d), i = e + 3 | 0, s = i < 1 ? n : Et(i, n.length, n), u = e < 1 ? [] : Et(0, e, n), a = (e + 2 | 0) === (r - 1 | 0), c = e === 0, l = (d, g, p) => !Js(t)(Fn(g)(p))(Gn(g)(p))(d), _ = e >= 0 && e < n.length ? T("Just", n[e]) : v;
  if (_.tag === "Just") {
    const d = e + 2 | 0, g = d >= 0 && d < n.length ? T("Just", n[d]) : v;
    if (g.tag === "Just") {
      const p = _._1.start._1 === g._1.end._1 && (!c || _._1.direction === "V") && (!a || g._1.direction === "V") && o(_._1.start._1, _._1.start._2, g._1.end._2) ? T("Just", [...u, { start: _._1.start, end: g._1.end, direction: yn }, ...s]) : _._1.start._2 === g._1.end._2 && (!c || _._1.direction === "H") && (!a || g._1.direction === "H") && l(_._1.start._2, _._1.start._1, g._1.end._1) ? T("Just", [...u, { start: _._1.start, end: g._1.end, direction: $n }, ...s]) : v, m = (!c || _._1.direction === "V") && (!a || g._1.direction === "H") && o(_._1.start._1, _._1.start._2, g._1.end._2) && l(
        g._1.end._2,
        _._1.start._1,
        g._1.end._1
      ) ? T(
        "Just",
        [
          ...u,
          { start: _._1.start, end: b(_._1.start._1, g._1.end._2), direction: yn },
          { start: b(_._1.start._1, g._1.end._2), end: g._1.end, direction: $n },
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
          { start: _._1.start, end: b(g._1.end._1, _._1.start._2), direction: $n },
          { start: b(g._1.end._1, _._1.start._2), end: g._1.end, direction: yn },
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
}, NN = (t) => (n) => {
  const e = n.length;
  return ((o) => {
    let i = o, s = !0, u;
    for (; s; ) {
      const a = i;
      if ((a + 2 | 0) >= e) {
        s = !1, u = n;
        continue;
      }
      const c = wN(t)(n)(a)(e);
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
}, JN = (t) => {
  const n = (e) => {
    let r = e, o = !0, i;
    for (; o; ) {
      const s = r, u = Bs(Is(TN(t)(NN(t)(s))));
      if (u.length < s.length) {
        r = u;
        continue;
      }
      o = !1, i = u;
    }
    return i;
  };
  return (e) => n(Bs(Is(e)));
}, CN = (t) => (n) => (e) => (r) => {
  const o = Fn(e)(r), i = Gn(e)(r), s = ht((a) => n >= a.y && n < a.y + a.h && a.x + a.w > o && a.x < i, t);
  if (r > e) {
    const a = It((c) => (l) => it.compare(c.x)(l.x))(s);
    return 0 < a.length ? a[0].x - 1 : (e + r) / 2;
  }
  const u = It((a) => (c) => it.compare(c.x)(a.x))(I((a) => ({ ...a, x: a.x + a.w }))(s));
  return 0 < u.length ? u[0].x + 1 : (e + r) / 2;
}, bN = (t) => (n) => (e) => (r) => {
  const o = Fn(e)(r), i = Gn(e)(r), s = ht((a) => n >= a.x && n < a.x + a.w && a.y + a.h > o && a.y < i, t);
  if (r > e) {
    const a = It((c) => (l) => it.compare(c.y)(l.y))(s);
    return 0 < a.length ? a[0].y - 1 : (e + r) / 2;
  }
  const u = It((a) => (c) => it.compare(c.y)(a.y))(I((a) => ({ ...a, y: a.y + a.h }))(s));
  return 0 < u.length ? u[0].y + 1 : (e + r) / 2;
}, kN = (t) => (n) => (e) => (r) => {
  const o = Fn(e)(r), i = Gn(e)(r), s = ht((a) => n >= a.y && n < a.y + a.h && a.x + a.w > o && a.x < i, t);
  if (r > e) {
    const a = It((c) => (l) => it.compare(l.x)(c.x))(I((c) => ({ ...c, x: c.x + c.w }))(s));
    return 0 < a.length ? a[0].x : (e + r) / 2;
  }
  const u = It((a) => (c) => it.compare(a.x)(c.x))(s);
  return 0 < u.length ? u[0].x - 1 : (e + r) / 2;
}, SN = (t) => (n) => (e) => (r) => {
  const o = Fn(e)(r), i = Gn(e)(r), s = ht((a) => n >= a.x && n < a.x + a.w && a.y + a.h > o && a.y < i, t);
  if (r > e) {
    const a = It((c) => (l) => it.compare(l.y)(c.y))(I((c) => ({ ...c, y: c.y + c.h }))(s));
    return 0 < a.length ? a[0].y : (e + r) / 2;
  }
  const u = It((a) => (c) => it.compare(a.y)(c.y))(s);
  return 0 < u.length ? u[0].y - 1 : (e + r) / 2;
}, hh = (t) => (n) => (e) => {
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
  if (!xs(i)(s)(r)(t))
    return r;
  if (!xs(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return xs(i)(s)(u)(t) ? hh((a) => xs(i)(s)(a)(t))(u)(1) : u;
}, LN = (t) => (n) => (e) => (r) => (o) => {
  const i = Fn(n)(e), s = Gn(n)(e);
  if (!vs(i)(s)(r)(t))
    return r;
  if (!vs(i)(s)(o)(t))
    return o;
  const u = (r + o) / 2;
  return vs(i)(s)(u)(t) ? hh((a) => vs(i)(s)(a)(t))(u)(1) : u;
}, EN = (t) => (n) => (e) => (r) => {
  const o = Fn(n)(e), i = Gn(n)(e), s = ht((c) => r >= c.x && r < c.x + c.w && c.y + c.h > o && c.y < i, t), u = w((c) => (l) => Gn(c)(l.x + l.w + 4))(r + 4)(s), a = w((c) => (l) => Fn(c)(l.x - 4))(r - 4)(s);
  return (() => {
    const c = u - r, l = a - r;
    return (c < 0 ? -c : c) <= (l < 0 ? -l : l);
  })() ? u : a;
}, PN = (t) => (n) => (e) => (r) => {
  const o = Fn(n)(e), i = Gn(n)(e), s = ht((c) => r >= c.y && r < c.y + c.h && c.x + c.w > o && c.x < i, t), u = w((c) => (l) => Gn(c)(l.y + l.h + 4))(r + 4)(s), a = w((c) => (l) => Fn(c)(l.y - 4))(r - 4)(s);
  return (() => {
    const c = u - r, l = a - r;
    return (c < 0 ? -c : c) <= (l < 0 ? -l : l);
  })() ? u : a;
}, AN = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
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
  })(), c = (N, C, k) => !ga(n)(Fn(C)(k))(Gn(C)(k))(N), l = (N, C, k) => !ga(e)(Fn(C)(k))(Gn(C)(k))(N), _ = (N, C, k, P) => t.tag === "Just" && !Js(e)(Fn(N)(C))(Gn(N)(C))(t._1) ? t._1 : LN(n)(N)(C)(k)(P), d = (N, C, k, P) => {
    if (N === k) {
      const Q = EN(n)(C)(P)(N), W = bN(n)(N)(C)(P), B = SN(n)(N)(C)(P);
      return [
        { start: b(N, C), end: b(N, W), direction: yn },
        { start: b(N, W), end: b(Q, W), direction: $n },
        { start: b(Q, W), end: b(Q, B), direction: yn },
        { start: b(Q, B), end: b(k, B), direction: $n },
        { start: b(k, B), end: b(k, P), direction: yn }
      ];
    }
    const E = _(N, k, C, P);
    return [
      { start: b(N, C), end: b(N, E), direction: yn },
      { start: b(N, E), end: b(k, E), direction: $n },
      { start: b(k, E), end: b(k, P), direction: yn }
    ];
  }, g = (N, C, k, P) => {
    if (C === P) {
      const Q = PN(n)(N)(k)(C), W = CN(n)(C)(N)(k), B = kN(n)(C)(N)(k);
      return [
        { start: b(N, C), end: b(W, C), direction: $n },
        { start: b(W, C), end: b(W, Q), direction: yn },
        { start: b(W, Q), end: b(B, Q), direction: $n },
        { start: b(B, Q), end: b(B, P), direction: yn },
        { start: b(B, P), end: b(k, P), direction: $n }
      ];
    }
    const E = jg(n)(C)(P)(N)(k);
    return [
      { start: b(N, C), end: b(E, C), direction: $n },
      { start: b(E, C), end: b(E, P), direction: yn },
      { start: b(E, P), end: b(k, P), direction: $n }
    ];
  }, p = (N, C, k) => !Js(n)(Fn(C)(k))(Gn(C)(k))(N), m = (N, C, k) => !Js(e)(Fn(C)(k))(Gn(C)(k))(N), h = (N, C, k, P) => {
    if (m(C, N, k) && l(k, C, P))
      return [
        { start: b(N, C), end: b(k, C), direction: $n },
        { start: b(k, C), end: b(k, P), direction: yn }
      ];
    const E = jg(n)(C)(P)(N)(k);
    return [
      { start: b(N, C), end: b(E, C), direction: $n },
      { start: b(E, C), end: b(E, P), direction: yn },
      { start: b(E, P), end: b(k, P), direction: $n }
    ];
  }, $ = (N, C, k, P) => {
    if (l(N, C, P) && m(P, N, k))
      return [
        { start: b(N, C), end: b(N, P), direction: yn },
        { start: b(N, P), end: b(k, P), direction: $n }
      ];
    const E = _(N, k, C, P);
    return [
      { start: b(N, C), end: b(N, E), direction: yn },
      { start: b(N, E), end: b(k, E), direction: $n },
      { start: b(k, E), end: b(k, P), direction: yn }
    ];
  }, y = (() => {
    if (r === "South")
      return i === "North" ? u._1 === a._1 && c(u._1, u._2, a._2) ? [{ start: b(u._1, u._2), end: b(a._1, a._2), direction: yn }] : d(u._1, u._2, a._1, a._2) : i === "East" || i === "West" ? $(u._1, u._2, a._1, a._2) : d(u._1, u._2, a._1, a._2);
    if (r === "North")
      return i === "South" ? u._1 === a._1 && c(u._1, u._2, a._2) ? [{ start: b(u._1, u._2), end: b(a._1, a._2), direction: yn }] : d(u._1, u._2, a._1, a._2) : i === "East" || i === "West" ? $(u._1, u._2, a._1, a._2) : d(u._1, u._2, a._1, a._2);
    if (r === "East")
      return i === "West" ? u._2 === a._2 && p(u._2, u._1, a._1) ? [{ start: b(u._1, u._2), end: b(a._1, a._2), direction: $n }] : g(u._1, u._2, a._1, a._2) : i === "North" || i === "South" ? h(u._1, u._2, a._1, a._2) : d(u._1, u._2, a._1, a._2);
    if (r === "West") {
      if (i === "East")
        return u._2 === a._2 && p(u._2, u._1, a._1) ? [{ start: b(u._1, u._2), end: b(a._1, a._2), direction: $n }] : g(u._1, u._2, a._1, a._2);
      if (i === "North" || i === "South")
        return h(u._1, u._2, a._1, a._2);
    }
    return d(u._1, u._2, a._1, a._2);
  })(), x = (() => {
    if (r === "South" || r === "North")
      return yn;
    if (r === "East" || r === "West")
      return $n;
    f();
  })(), J = {
    start: b(a._1, a._2),
    end: b(s._1, s._2),
    direction: (() => {
      if (i === "South" || i === "North")
        return yn;
      if (i === "East" || i === "West")
        return $n;
      f();
    })()
  };
  return u._1 === a._1 && u._2 === a._2 ? [{ start: b(o._1, o._2), end: b(s._1, s._2), direction: x }] : xN({ start: b(o._1, o._2), end: b(u._1, u._2), direction: x })(y)(J);
}, RN = /* @__PURE__ */ I((t) => ({ x: t.position._1 * Ju - 2, y: t.position._2 * Ju - 2, w: t.size._1 * Ju + 4, h: t.size._2 * Ju + 4 })), ph = (t) => (e) => {
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
}, FN = /* @__PURE__ */ (() => {
  const t = pe.unfoldr(Ze);
  return (n) => t(_e("IterNode", n, je));
})(), Sf = (t) => (n) => t.gapTop + 1 * V(4) + V(n) * 2.5 * V(4), GN = (t) => (n) => {
  const e = ph(n.edge.id)(t);
  if (e.tag === "Just") {
    if (e._1.partner.tag === "Just")
      return T("Just", { slot1Y: Sf(e._1)(e._1.slot), splitX: e._1.partner._1.splitX, slot2Y: Sf(e._1)(e._1.partner._1.slot) });
    if (e._1.partner.tag === "Nothing")
      return v;
    f();
  }
  if (e.tag === "Nothing")
    return v;
  f();
}, IN = (t) => (n) => {
  const e = w((r) => (o) => tt(F)(o.node)(o)(r))(D)(n);
  return Ee(Xt((r) => (o) => {
    const i = Ai(o.node)(e);
    if (i.tag === "Nothing")
      return [];
    if (i.tag === "Just") {
      const s = i._1;
      return Xt((u) => (a) => {
        const c = o.edges.length, l = V(4), _ = s.position._1 * l, d = s.position._2 * l, g = s.size._2 * l, p = V((2 * c | 0) + 1 | 0), m = d + g * V(c - u | 0) / p, h = d + g * V((c + 1 | 0) + u | 0) / p, $ = _ - l * 2.5 * V(u + 1 | 0), y = [
          { start: b(_, m), end: b($, m), direction: $n },
          { start: b($, m), end: b($, h), direction: yn },
          { start: b($, h), end: b(_, h), direction: $n }
        ];
        return { edge: a.id, segments: y, bends: En((x) => (J) => x.end, y, Et(1, 3, y)), bendType: [], jumps: [], reversed: !1 };
      })(o.edges);
    }
    f();
  })(I((r) => ({ node: r._1, edges: r._2 }))(FN(w((r) => (o) => qt(F)(Nn)(o.from.node)([
    o
  ])(r))(D)(t)))));
}, BN = (t) => (n) => {
  const e = w((i) => (s) => tt(F)(s.node)(s)(i))(D)(n), r = (i) => {
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
}, ye = (t) => {
  const n = V(4);
  return { x: t.position._1 * n - 2, y: t.position._2 * n - 2, w: t.size._1 * n + 4, h: t.size._2 * n + 4 };
}, DN = (t) => t.from.node === t.to.node, zN = (t) => (n) => (e) => (r) => {
  const o = JN(e)(AN(t)(n)(e)(r.fromSide)(r.fromPos)(r.toSide)(r.toPos));
  return {
    edge: r.edge.id,
    segments: o,
    bends: En((i) => (s) => i.end, o, Et(1, o.length, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, HN = (t) => (n) => (e) => (r) => {
  const o = [
    { start: b(r.fromPos._1, r.fromPos._2), end: b(r.fromPos._1, t.slot1Y), direction: yn },
    { start: b(r.fromPos._1, t.slot1Y), end: b(t.splitX, t.slot1Y), direction: $n },
    { start: b(t.splitX, t.slot1Y), end: b(t.splitX, t.slot2Y), direction: yn },
    { start: b(t.splitX, t.slot2Y), end: b(r.toPos._1, t.slot2Y), direction: $n },
    { start: b(r.toPos._1, t.slot2Y), end: b(r.toPos._1, r.toPos._2), direction: yn }
  ];
  return {
    edge: r.edge.id,
    segments: o,
    bends: En((i) => (s) => i.end, o, Et(1, 5, o)),
    bendType: [],
    jumps: [],
    reversed: !1
  };
}, QN = (t) => (n) => (e) => {
  const r = Ai(t.edge.from.node)(e);
  if (r.tag === "Just") {
    const i = Ai(t.edge.to.node)(e);
    return i.tag === "Just" ? ht(
      (s) => !(s.h === ye(r._1).h && s.w === ye(r._1).w && s.x === ye(r._1).x && s.y === ye(r._1).y) && !(s.h === ye(i._1).h && s.w === ye(i._1).w && s.x === ye(i._1).x && s.y === ye(i._1).y),
      n
    ) : ht((s) => !(s.h === ye(r._1).h && s.w === ye(r._1).w && s.x === ye(r._1).x && s.y === ye(r._1).y), n);
  }
  const o = Ai(t.edge.to.node)(e);
  return o.tag === "Just" ? ht((i) => !(i.h === ye(o._1).h && i.w === ye(o._1).w && i.x === ye(o._1).x && i.y === ye(o._1).y), n) : ht((i) => !0, n);
}, ON = (t) => (n) => {
  const e = ph(n.edge.id)(t);
  if (e.tag === "Just")
    return T("Just", Sf(e._1)(e._1.slot));
  if (e.tag === "Nothing")
    return v;
  f();
}, WN = (t) => (n) => (e) => (r) => (o) => {
  const i = w((c) => (l) => tt(F)(l.node)(l)(c))(D)(n), s = RN(n), u = ih(ht((c) => c.from.node !== c.to.node, t))(n)(e)(r)(o), a = rh(u)(n);
  return [
    ...IN(ht(DN, t))(n),
    ...w((c) => (l) => {
      const _ = QN(l)(s)(i), d = [..._, ...c.edgeObstacles], g = GN(a)(l), p = (() => {
        if (g.tag === "Just")
          return HN(g._1)(_)(d)(l);
        if (g.tag === "Nothing")
          return zN(ON(a)(l))(_)(d)(l);
        f();
      })();
      return { results: [...c.results, p], edgeObstacles: [...c.edgeObstacles, ...yN(p.segments)] };
    })({ results: [], edgeObstacles: [] })(BN(u)(n)).results
  ];
}, yo = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, xo = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, qN = (t) => (n) => (e) => {
  if (t.start._1 !== n.start._1)
    return v;
  const r = xo(yo(t.start._2)(t.end._2))(yo(n.start._2)(n.end._2)), o = yo(xo(t.start._2)(t.end._2))(xo(n.start._2)(n.end._2));
  return r < o ? T("Just", { position: b(t.start._1, (r + o) / 2), crossingEdge: e }) : v;
}, XN = (t) => (n) => (e) => {
  if (t.start._2 !== n.start._2)
    return v;
  const r = xo(yo(t.start._1)(t.end._1))(yo(n.start._1)(n.end._1)), o = yo(xo(t.start._1)(t.end._1))(xo(n.start._1)(n.end._1));
  return r < o ? T("Just", { position: b((r + o) / 2, t.start._2), crossingEdge: e }) : v;
}, YN = (t) => (n) => (e) => {
  if (t.direction === "H")
    return XN(t)(n)(e);
  if (t.direction === "V")
    return qN(t)(n)(e);
  f();
}, MN = (t) => (n) => (e) => {
  const r = t + 1 | 0, o = r < 1 ? e : Et(r, e.length, e);
  return wt(n.segments)((i) => wt(o)((s) => Nt((u) => YN(i)(u)(s.edge))(ht(
    (u) => u.direction === "H" ? i.direction === "H" : u.direction === "V" && i.direction === "V",
    s.segments
  ))));
}, UN = (t) => (n) => (e) => n.start._1 > yo(t.start._1)(t.end._1) && n.start._1 < xo(t.start._1)(t.end._1) && t.start._2 > yo(n.start._2)(n.end._2) && t.start._2 < xo(n.start._2)(n.end._2) ? T("Just", { position: b(n.start._1, t.start._2), crossingEdge: e }) : v, KN = (t) => (n) => wt(ht((e) => e.direction === "H", t.segments))((e) => wt(n)((r) => Nt((o) => UN(e)(o)(r.edge))(ht(
  (o) => o.direction === "V",
  r.segments
)))), VN = (t) => (n) => (e) => [
  ...KN(n)(ht((r) => r.edge !== n.edge, e)),
  ...MN(t)(n)(e)
], mh = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, jN = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(D), _a = (t) => (e) => {
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
}, ZN = /* @__PURE__ */ Kd(F), Tr = (t) => (e) => {
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
}, qc = (t) => (e) => {
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
}, tJ = /* @__PURE__ */ hn(st)(Yt), nJ = (t) => (n) => Zn(F.compare, Vn, t, n), $h = /* @__PURE__ */ Xt((t) => (n) => ({ src: n.src, tgt: n.tgt, delta: 1, weight: 1, eid: t })), eJ = (t) => w((n) => (e) => ({
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
          s = mh(l)(_._1), u = _._2;
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
          return o(i._5, St("Cons", i._4, o(i._6, s)));
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
          return D;
        if (o.tag === "Node")
          return Zt("Node", o._1, o._2, o._3, o._4 + n.base | 0, r(o._5), r(o._6));
        f();
      };
      return r(e);
    })()
  ]
}))({ base: 0, result: [] })(t).result, rJ = (t) => (n) => {
  const e = jN(t);
  return ZN(t)($h(ht((r) => _a(r.src)(e) && _a(r.tgt)(e), n)));
}, oJ = (t) => (n) => {
  const e = w((o) => (i) => qt(F)(Nn)(i.tgt)([i.src])(qt(F)(Nn)(i.src)([
    i.tgt
  ])(o)))(D)(n), r = (o) => (i) => (s) => {
    let u = o, a = i, c = s, l = !0, _;
    for (; l; ) {
      const d = u, g = a, p = c, m = Bt((h) => v, (h) => ($) => T("Just", { head: h, tail: $ }), d);
      if (m.tag === "Nothing") {
        l = !1, _ = { nodes: p };
        continue;
      }
      if (m.tag === "Just") {
        if (_a(m._1.head)(g)) {
          u = m._1.tail, a = g, c = p;
          continue;
        }
        u = [
          ...m._1.tail,
          ...(() => {
            const h = Tr(m._1.head)(e);
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
    if (_a(i)(o.visited))
      return o;
    const s = r([i])(o.visited)([]);
    return {
      ...o,
      visited: w((u) => (a) => tt(F)(a)()(u))(o.visited)(s.nodes),
      components: [...o.components, s.nodes]
    };
  })({ visited: D, components: [] })(t).components;
}, iJ = (t) => (n) => (e) => {
  const r = w((i) => (s) => qt(F)(bn)(s.tgt)(1)(i))(D)(n), o = w((i) => (s) => qt(F)(bn)(s.src)(1)(i))(D)(n);
  return w((i) => (s) => {
    const u = Tr(s)(r), a = (() => {
      if (u.tag === "Nothing")
        return 0;
      if (u.tag === "Just")
        return u._1;
      f();
    })();
    if ((() => {
      const y = Tr(s)(o);
      return (() => {
        if (y.tag === "Nothing")
          return a !== 0;
        if (y.tag === "Just")
          return a !== y._1;
        f();
      })() || a === 0;
    })())
      return i;
    const c = Tr(s)(i.layers), l = (() => {
      if (c.tag === "Nothing")
        return 0;
      if (c.tag === "Just")
        return c._1;
      f();
    })(), _ = i.layers, d = w((y) => (x) => x.tgt === s ? {
      ...y,
      mIn: Zg(y.mIn)((() => {
        const J = Tr(s)(_), N = Tr(x.src)(_);
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
    } : x.src === s ? {
      ...y,
      mOut: Zg(y.mOut)((() => {
        const J = Tr(x.tgt)(_), N = Tr(s)(_);
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
    } : y)({ mIn: 1e9, mOut: 1e9 })(n), g = d.mIn === 1e9 ? -1 : d.mIn, p = d.mOut === 1e9 ? -1 : d.mOut;
    if (g < 0 || p < 0)
      return i;
    const m = (l - g | 0) + 1 | 0, h = (l + p | 0) - 1 | 0;
    if (h < m)
      return i;
    const $ = w((y) => (x) => {
      const J = qc(x)(i.filling), N = (() => {
        if (J.tag === "Nothing")
          return 0;
        if (J.tag === "Just")
          return J._1;
        f();
      })();
      return N < y.bestFill ? { best: x, bestFill: N } : y;
    })({
      best: l,
      bestFill: (() => {
        const y = qc(l)(i.filling);
        if (y.tag === "Nothing")
          return 0;
        if (y.tag === "Just")
          return y._1;
        f();
      })()
    })(Vt(m, h));
    return $.best === l ? i : {
      layers: tt(F)(s)($.best)(i.layers),
      filling: tt(st)(l)((() => {
        const y = qc(l)(i.filling);
        if (y.tag === "Nothing")
          return -1;
        if (y.tag === "Just")
          return y._1 - 1 | 0;
        f();
      })())(tt(st)($.best)($.bestFill + 1 | 0)(i.filling))
    };
  })({
    layers: e,
    filling: tJ(I((i) => b(
      i,
      w((s) => (u) => (() => {
        const a = Tr(u)(e);
        return a.tag === "Nothing" ? !1 : a.tag === "Just" && a._1 === i;
      })() ? s + 1 | 0 : s)(0)(t)
    ))(Vt(
      0,
      w((i) => (s) => mh(i)((() => {
        const u = Tr(s)(e);
        if (u.tag === "Nothing")
          return 0;
        if (u.tag === "Just")
          return u._1;
        f();
      })()))(0)(t)
    )))
  })(t).layers;
}, sJ = (t) => (n) => iJ(t)($h(n))(w(nJ)(D)(eJ(I((e) => rJ(e)(n))(oJ(t)(n))))), uJ = (t) => t, Mo = (t) => (e) => {
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
}, da = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, yh = /* @__PURE__ */ (() => {
  const t = pe.unfoldr(Ze);
  return (n) => t(_e("IterNode", n, je));
})(), aJ = /* @__PURE__ */ uJ("NetworkSimplex"), cJ = (t) => (n) => w((e) => (r) => {
  const o = w(da)(0)(Nt((i) => Mo(i)(e))(r));
  return w((i) => (s) => tt(F)(s)(o)(i))(e)(r);
})(n)(t), fJ = (t) => (n) => ({
  layers: I((e) => ht(
    (r) => {
      const o = Mo(r)(n);
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
          i = da(c)(l._1), s = l._2;
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
          return r(o._5, St("Cons", o._4, r(o._6, i)));
        f();
      };
      return r(n, Y);
    })())
  )),
  nodeLayer: n
}), lJ = (t) => (n) => (e) => {
  const r = w((o) => (i) => tt(F)(i)(!0)(o))(D)(n);
  return w((o) => (i) => tt(F)(i._1)(i._2)(o))(sJ(n)(Nt((o) => o.from.node === o.to.node || (() => {
    const i = Mo(o.from.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() || (() => {
    const i = Mo(o.to.node)(r);
    if (i.tag === "Nothing")
      return !0;
    if (i.tag === "Just")
      return !i._1;
    f();
  })() ? v : T("Just", { src: o.from.node, tgt: o.to.node }))(t)))(yh(e));
}, gJ = (t) => (n) => (e) => (r) => {
  const o = (a) => (c) => {
    const l = Mo(c)(a);
    if (l.tag === "Just")
      return a;
    if (l.tag === "Nothing") {
      const _ = ht(
        (g) => g !== c,
        (() => {
          const g = Mo(c)(t);
          if (g.tag === "Nothing")
            return [];
          if (g.tag === "Just")
            return g._1;
          f();
        })()
      ), d = w(o)(a)(_);
      return tt(F)(c)(1 + w(da)(0)(Nt((g) => Mo(g)(d))(_)) | 0)(d);
    }
    f();
  }, i = w(o)(D)(e), u = ((a) => (c) => {
    let l = a, _ = c, d = !0, g;
    for (; d; ) {
      const p = l, m = _;
      if (m.tag === "Nil") {
        d = !1, g = p;
        continue;
      }
      if (m.tag === "Cons") {
        l = da(p)(m._1), _ = m._2;
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
        return a(c._5, St("Cons", c._4, a(c._6, l)));
      f();
    };
    return a(i, Y);
  })());
  return w((a) => (c) => tt(F)(c._1)(c._2)(a))((() => {
    const a = (c) => {
      if (c.tag === "Leaf")
        return D;
      if (c.tag === "Node")
        return Zt("Node", c._1, c._2, c._3, u - c._4 | 0, a(c._5), a(c._6));
      f();
    };
    return a(i);
  })())(yh(r));
}, _J = /* @__PURE__ */ w((t) => (n) => {
  if (n.tag === "LayerConstraint") {
    if (n._1.pin.tag === "SpecificLayer")
      return tt(F)(n._1.node)(n._1.pin._1)(t);
    if (n._1.pin.tag === "FirstLayer")
      return tt(F)(n._1.node)(0)(t);
  }
  return t;
})(D), dJ = /* @__PURE__ */ w((t) => (n) => qt(F)(Nn)(n.to.node)([n.from.node])(t))(D), hJ = /* @__PURE__ */ w((t) => (n) => qt(F)(Nn)(n.from.node)([n.to.node])(t))(D), pJ = (t) => (n) => (e) => (r) => {
  const o = hJ(e), i = dJ(e), s = _J(n);
  return fJ(r)(cJ(Nt((u) => u.tag === "SameLayer" ? T("Just", u._1.nodes) : v)(n))((() => {
    if (t === "LongestPath")
      return gJ(o)(i)(r)(s);
    if (t === "NetworkSimplex")
      return lJ(e)(r)(s);
    f();
  })()));
}, mJ = /* @__PURE__ */ hn(F)(Yt), $J = (t) => (e) => {
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
}, Ds = /* @__PURE__ */ hn(F)(Yt), yJ = /* @__PURE__ */ hn(F)(Yt), e_ = /* @__PURE__ */ (() => {
  const t = I((n) => ({ start: n.end, end: n.start, direction: n.direction }));
  return (n) => fn(t(n));
})(), xJ = (t) => (n) => (e) => (r) => {
  const o = mJ(I((s) => b(s.edge, s))(r)), i = (s) => 0 < s.nodes.length && (() => {
    const u = $J(s.edgeId)(e);
    return u.tag === "Just" && s.nodes[0] !== u._1._1;
  })();
  return I((s) => {
    if (s.nodes.length <= 2) {
      const l = t_(s.edgeId)(o);
      if (l.tag === "Just") {
        const _ = i(s), d = Bs(Is(_ ? e_(l._1.segments) : l._1.segments));
        return { ...l._1, edge: s.edgeId, segments: d, bends: En((g) => (p) => g.end, d, Et(1, d.length, d)), reversed: _ };
      }
      if (l.tag === "Nothing")
        return { edge: s.edgeId, segments: [], bends: [], bendType: [], jumps: [], reversed: !1 };
      f();
    }
    const u = wt(Nt((l) => t_(l)(o))(En(
      (l) => (_) => s.edgeId + ":" + l + "->" + _,
      s.nodes,
      Et(1, s.nodes.length, s.nodes)
    )))((l) => l.segments), a = i(s), c = Bs(Is(a ? e_(u) : u));
    return {
      edge: s.edgeId,
      segments: c,
      bends: En((l) => (_) => l.end, c, Et(1, c.length, c)),
      bendType: [],
      jumps: [],
      reversed: a
    };
  })(t);
}, vJ = { layers: [], edges: [], chains: [] }, TJ = {
  nodeGap: 3,
  layerGap: 2,
  iterations: 8,
  layerer: aJ,
  cycleBreaker: gN,
  compactPostRouting: !0,
  compactionSpacings: dw
}, wJ = (t) => ({
  pos: b(0, 0),
  size: b(
    w((n) => (e) => n_(n)(e.position._1 + e.size._1))(0)(t),
    w((n) => (e) => n_(n)(e.position._2 + e.size._2))(0)(t)
  )
}), NJ = (t) => (n) => (e) => {
  const r = Ds(I((c) => b(c.id, c.ports))(n.nodes)), o = ht((c) => On(3)(c.node) !== "$d:", e.placements), i = xJ(e.withDummies.chains)(e.acyclic.reversedEdges)(yJ(I((c) => b(
    c.id,
    b(c.from.node, c.to.node)
  ))(n.edges)))(WN(e.withDummies.edges)(e.placements)(r)(e.withDummies.chains)(sh(e.ordered)(ht(
    (c) => c.from.node !== c.to.node,
    e.withDummies.edges
  ))((() => {
    const c = (l) => {
      if (l.tag === "Leaf")
        return D;
      if (l.tag === "Node")
        return Zt("Node", l._1, l._2, l._3, b(l._4._1 * 4, l._4._2), c(l._5), c(l._6));
      f();
    };
    return c(Ds(I((l) => b(l.id, l.size))(n.nodes)));
  })()))), s = t.compactPostRouting ? mw()(t.compactionSpacings)({
    nodes: o,
    edges: n.edges,
    paths: i,
    ports: r
  }) : { nodes: o, edges: i }, u = I((c) => {
    const l = Bs(Is(c.segments));
    return { ...c, segments: l, bends: En((_) => (d) => _.end, l, Et(1, l.length, l)) };
  })(s.edges), a = Xt((c) => (l) => ({ ...l, jumps: VN(c)(l)(u) }))(u);
  return { nodes: s.nodes, edges: a, boundingBox: wJ(s.nodes), metrics: Ov(s.nodes)(a)(0) };
}, JJ = (t) => (n) => (e) => {
  const r = Ds(I((i) => b(i.id, i.size))(n.nodes)), o = {
    ...e,
    placements: Uw({ nodeGap: t.nodeGap, layerGap: t.layerGap })(n.constraints)(e.ordered)(r)(Ds(I((i) => b(
      i.id,
      i.ports
    ))(n.nodes)))(e.withDummies.edges)(e.withDummies.chains)(sh(e.ordered)(e.withDummies.edges)((() => {
      const i = (s) => {
        if (s.tag === "Leaf")
          return D;
        if (s.tag === "Node")
          return Zt("Node", s._1, s._2, s._3, b(s._4._1 * 4, s._4._2), i(s._5), i(s._6));
        f();
      };
      return i(r);
    })()))
  };
  return { pipeline: o, result: NJ(t)(n)(o) };
}, CJ = (t) => (n) => (e) => JJ(t)(n)({
  ...e,
  ordered: aN({
    iterations: t.iterations,
    constraints: n.constraints,
    modelOrder: Ds(Xt((r) => (o) => b(o.id, r))(n.nodes))
  })(e.withDummies.layers)(e.withDummies.edges)
}), bJ = (t) => (n) => (e) => CJ(t)(n)({
  ...e,
  withDummies: $w(e.layered.nodeLayer)(e.acyclic.edges)(e.layered.layers)
}), kJ = (t) => (n) => {
  const e = I((o) => o.id)(n.nodes), r = $N(t.cycleBreaker)(e)(n.constraints)(n.edges);
  return bJ(t)(n)({
    acyclic: r,
    layered: pJ(t.layerer)(n.constraints)(r.edges)(e),
    withDummies: vJ,
    ordered: [],
    placements: []
  });
}, xh = (t) => t, vh = /* @__PURE__ */ xh("RunText"), SJ = /* @__PURE__ */ xh("RunCode"), Th = (t) => (n) => (e) => n.length === 0 ? e : kt(e)({ style: t, text: ko(n) }), LJ = (t) => ({
  style: (() => {
    if (t.style === "RunText")
      return SJ;
    if (t.style === "RunCode")
      return vh;
    f();
  })(),
  buf: [],
  runs: Th(t.style)(t.buf)(t.runs)
}), EJ = (t) => (n) => 0 < n.length ? { ...t, buf: kt(t.buf)(n[0]) } : { ...t, buf: kt(t.buf)("\\") }, PJ = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, a = Bt((c) => v, (c) => (l) => T("Just", { head: c, tail: l }), r);
    if (a.tag === "Nothing") {
      o = !1, i = s;
      continue;
    }
    if (a.tag === "Just") {
      if (a._1.head === "\\") {
        e = EJ(s)(a._1.tail), r = Et(1, a._1.tail.length, a._1.tail);
        continue;
      }
      if (a._1.head === "`") {
        e = LJ(s), r = a._1.tail;
        continue;
      }
      e = { ...s, buf: kt(s.buf)(a._1.head) }, r = a._1.tail;
      continue;
    }
    f();
  }
  return i;
}, wh = (t) => {
  const n = PJ({ style: vh, buf: [], runs: [] })(Hr(t));
  return Th(n.style)(n.buf)(n.runs);
};
let Cu = null;
function AJ() {
  return Cu || (typeof document > "u" ? null : (Cu = document.createElement("canvas").getContext("2d"), Cu));
}
const r_ = /* @__PURE__ */ new Map(), RJ = (t) => (n) => (e) => (r) => () => {
  const o = `${e} ${n}px ${t}|${r}`, i = r_.get(o);
  if (i !== void 0) return i;
  const s = AJ();
  if (!s)
    return r.length * n * 0.62;
  s.font = `${e} ${n}px ${t}`;
  const u = s.measureText(r).width;
  return r_.set(o, u), u;
}, FJ = bo.traverse(si), GJ = /* @__PURE__ */ w(gr)(0), ni = /* @__PURE__ */ (() => {
  const t = ir(`\r
`)(" "), n = ir(`
`)(" "), e = (() => {
    const r = ir("\r")(" "), o = (() => {
      const i = ir("	")(" ");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), Nh = (t) => (n) => {
  const e = FJ((r) => {
    const o = (() => {
      if (r.style === "RunText")
        return t.text;
      if (r.style === "RunCode")
        return t.code;
      f();
    })();
    return RJ(o.family)(o.size)(o.weight)(ni(r.text));
  })(wh(ni(n)));
  return () => {
    const r = e();
    return GJ(r);
  };
}, IJ = { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: "500" }, BJ = { family: "'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace", size: 11, weight: "400" }, Jh = { text: IJ, code: BJ }, DJ = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, vi = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, zJ = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, HJ = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, QJ = (t) => (e) => {
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
}, o_ = (t) => ko(fn(Lr((n) => n === " ")(fn(Lr((n) => n === " ")(Hr(t)).rest)).rest)), OJ = (t) => w((n) => (e) => e._1 > 0 && (e._2 === " " || e._2 === "-" || e._2 === "_" || e._2 === ".") ? T("Just", e._1) : n)(v)(Xt(jn)(t)), Lf = (t) => (n) => {
  if (t <= 0)
    return [n];
  if (pr(n) <= t)
    return [n];
  const e = Hr(n), r = t < 1 ? [] : Et(0, t, e), o = OJ(r);
  if (o.tag === "Just") {
    const i = o_(fg(!(o._1 >= 0 && o._1 < r.length) || r[o._1] === " " ? o._1 : o._1 + 1 | 0)(n)), s = o_(Oi(o._1 + 1 | 0)(n));
    return s === "" ? [i] : [i, ...Lf(t)(s)];
  }
  if (o.tag === "Nothing") {
    const i = fg(t)(n), s = Oi(t)(n);
    return s === "" ? [i] : [i, ...Lf(t)(s)];
  }
  f();
}, WJ = { cellW: 7, cellH: 3, maxLineWidth: 20 }, qJ = (t) => (n) => {
  const e = I((i) => b(
    (() => {
      if (i.label.tag === "Just")
        return i.label._1;
      if (i.label.tag === "Nothing")
        return i.id;
      f();
    })(),
    i
  ))(n.nodes), r = vi(1)(or(
    (zJ(t.maxLineWidth)(w((i) => (s) => vi(i)(pr(s._1)))(0)(e)) + 2 | 0) + t.cellW | 0,
    t.cellW
  )), o = (r * t.cellW | 0) - 1 | 0;
  return {
    ...n,
    nodes: I((i) => {
      if (!(i._2.size._1 === 1 && i._2.size._2 === 1))
        return i._2;
      const s = wt(ao(`
`)(i._1))(Lf(o)), u = w((c) => (l) => vi(c)(pr(l)))(0)(s), a = i._2.shape === "Cylinder" ? vi(1)(or((u + 2 | 0) + t.cellW | 0, t.cellW)) : r;
      return {
        ...i._2,
        size: b(
          V(u > o ? or((u + 2 | 0) + t.cellW | 0, t.cellW) : a),
          V(vi(1)(or(s.length + t.cellH | 0, t.cellH)) + (i._2.shape === "Cylinder" || i._2.shape === "Document" ? 1 : 0) | 0)
        )
      };
    })(e)
  };
}, XJ = (t) => (n) => (e) => ({
  ...e,
  nodes: I((r) => {
    const o = QJ(r.id)(n);
    if (o.tag === "Nothing")
      return r;
    if (o.tag === "Just")
      return {
        ...r,
        size: b(
          HJ(r.size._1)(V(vi(1)(dn(Qa(r.shape === "Cylinder" ? (o._1 + 0) / t : (o._1 + 32) / t))))),
          r.size._2
        )
      };
    f();
  })(e.nodes)
}), ec = (t) => t, YJ = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Go = /* @__PURE__ */ ec("TopSide"), Io = /* @__PURE__ */ ec("BottomSide"), Bo = /* @__PURE__ */ ec("LeftSide"), Do = /* @__PURE__ */ ec("RightSide"), MJ = (t) => {
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
  const r = YJ(t.h * 0.12)(t.w * 0.2), o = t.w / 2;
  return (n < 0 ? t.y + r : t.y + t.h - r) + n * r * re(MJ((() => {
    const i = (e - (t.x + o)) / o;
    return 1 - i * i;
  })()));
}, xe = (t) => (n) => (e) => (r) => {
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
      o = Ur, i = _, s = d, u = g;
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
    o = Ur, i = _, s = d, u = g;
  }
  return c;
}, s_ = (t) => (n) => {
  const e = n.y - t.y, r = e < 0 ? -e : e, o = n.x - (t.x + t.w), i = o < 0 ? -o : o, s = n.x - t.x, u = s < 0 ? -s : s, a = n.y - (t.y + t.h), c = a < 0 ? -a : a;
  return r <= c && r <= u && r <= i ? Go : c <= u && c <= i ? Io : u <= i ? Bo : Do;
}, UJ = /* @__PURE__ */ (() => {
  const t = pe.unfoldr(Ze);
  return (n) => t(_e("IterNode", n, je));
})(), rl = (t) => (e) => {
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
}, zs = (t) => (e) => {
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
}, Hs = /* @__PURE__ */ hn(F)(Yt), KJ = (t) => (e) => {
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
}, VJ = (t) => (e) => {
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
}, jJ = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(D), ZJ = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(D), rc = bo.traverse(si), ha = /* @__PURE__ */ hn(F)(Yt), tC = (t) => (n) => Zn(F.compare, Vn, t, n), nC = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(D), eC = /* @__PURE__ */ hn(F)(Yt), rC = (t) => (n) => Zn(F.compare, Vn, t, n), oC = (t) => (e) => {
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
}, iC = (t) => (n) => ({
  ...n,
  edges: Hs(I((e) => b(
    e._1,
    (() => {
      const r = rl(e._1)(t);
      if (r.tag === "Nothing")
        return e._2;
      if (r.tag === "Just") {
        const o = zs(r._1._2)(n.nodes), i = zs(r._1._1)(n.nodes), s = (() => {
          if (i.tag === "Nothing")
            return e._2;
          if (i.tag === "Just") {
            const u = Bt((a) => v, (a) => (c) => T("Just", { head: a, tail: c }), e._2);
            if (u.tag === "Nothing")
              return e._2;
            if (u.tag === "Just")
              return [
                (() => {
                  const a = Bt((d) => v, (d) => (g) => T("Just", { head: d, tail: g }), u._1.tail), c = a.tag === "Just" ? T("Just", a._1.head) : v, l = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, _ = (() => {
                    if (c.tag === "Just") {
                      if ((c._1.x > u._1.head.x ? c._1.x - u._1.head.x < 0.5 : u._1.head.x - c._1.x < 0.5) && u._1.head.x >= l.x - 0.5 && u._1.head.x <= l.x + l.w + 0.5)
                        return c._1.y >= l.y + l.h ? T("Just", Io) : c._1.y <= l.y ? T("Just", Go) : v;
                      if ((c._1.y > u._1.head.y ? c._1.y - u._1.head.y < 0.5 : u._1.head.y - c._1.y < 0.5) && u._1.head.y >= l.y - 0.5 && u._1.head.y <= l.y + l.h + 0.5) {
                        if (c._1.x >= l.x + l.w)
                          return T("Just", Do);
                        if (c._1.x <= l.x)
                          return T("Just", Bo);
                      }
                      return v;
                    }
                    if (c.tag === "Nothing")
                      return v;
                    f();
                  })();
                  if (_.tag === "Just") {
                    if (_._1 === "TopSide")
                      return { ...u._1.head, y: xe(i._1.shape)(l)(Go)(u._1.head.x) };
                    if (_._1 === "BottomSide")
                      return { ...u._1.head, y: xe(i._1.shape)(l)(Io)(u._1.head.x) };
                    if (_._1 === "LeftSide")
                      return { ...u._1.head, x: xe(i._1.shape)(l)(Bo)(u._1.head.y) };
                    if (_._1 === "RightSide")
                      return { ...u._1.head, x: xe(i._1.shape)(l)(Do)(u._1.head.y) };
                    f();
                  }
                  if (_.tag === "Nothing") {
                    const d = { x: i._1.x, y: i._1.y, w: i._1.w, h: i._1.h }, g = s_(d)(u._1.head);
                    if (g === "TopSide")
                      return { ...u._1.head, y: xe(i._1.shape)(d)(Go)(u._1.head.x) };
                    if (g === "BottomSide")
                      return { ...u._1.head, y: xe(i._1.shape)(d)(Io)(u._1.head.x) };
                    if (g === "LeftSide")
                      return { ...u._1.head, x: xe(i._1.shape)(d)(Bo)(u._1.head.y) };
                    if (g === "RightSide")
                      return { ...u._1.head, x: xe(i._1.shape)(d)(Do)(u._1.head.y) };
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
          const u = Me(s);
          if (u.tag === "Nothing")
            return s;
          if (u.tag === "Just")
            return kt(u._1.init)((() => {
              const a = Me(u._1.init), c = a.tag === "Just" ? T("Just", a._1.last) : v, l = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, _ = (() => {
                if (c.tag === "Just") {
                  if ((c._1.x > u._1.last.x ? c._1.x - u._1.last.x < 0.5 : u._1.last.x - c._1.x < 0.5) && u._1.last.x >= l.x - 0.5 && u._1.last.x <= l.x + l.w + 0.5)
                    return c._1.y >= l.y + l.h ? T("Just", Io) : c._1.y <= l.y ? T("Just", Go) : v;
                  if ((c._1.y > u._1.last.y ? c._1.y - u._1.last.y < 0.5 : u._1.last.y - c._1.y < 0.5) && u._1.last.y >= l.y - 0.5 && u._1.last.y <= l.y + l.h + 0.5) {
                    if (c._1.x >= l.x + l.w)
                      return T("Just", Do);
                    if (c._1.x <= l.x)
                      return T("Just", Bo);
                  }
                  return v;
                }
                if (c.tag === "Nothing")
                  return v;
                f();
              })();
              if (_.tag === "Just") {
                if (_._1 === "TopSide")
                  return { ...u._1.last, y: xe(o._1.shape)(l)(Go)(u._1.last.x) };
                if (_._1 === "BottomSide")
                  return { ...u._1.last, y: xe(o._1.shape)(l)(Io)(u._1.last.x) };
                if (_._1 === "LeftSide")
                  return { ...u._1.last, x: xe(o._1.shape)(l)(Bo)(u._1.last.y) };
                if (_._1 === "RightSide")
                  return { ...u._1.last, x: xe(o._1.shape)(l)(Do)(u._1.last.y) };
                f();
              }
              if (_.tag === "Nothing") {
                const d = { x: o._1.x, y: o._1.y, w: o._1.w, h: o._1.h }, g = s_(d)(u._1.last);
                if (g === "TopSide")
                  return { ...u._1.last, y: xe(o._1.shape)(d)(Go)(u._1.last.x) };
                if (g === "BottomSide")
                  return { ...u._1.last, y: xe(o._1.shape)(d)(Io)(u._1.last.x) };
                if (g === "LeftSide")
                  return { ...u._1.last, x: xe(o._1.shape)(d)(Bo)(u._1.last.y) };
                if (g === "RightSide")
                  return { ...u._1.last, x: xe(o._1.shape)(d)(Do)(u._1.last.y) };
              }
              f();
            })());
        }
      }
      f();
    })()
  ))(UJ(n.edges)))
}), sC = (t) => (n) => (e) => {
  const r = jt((o) => o.id === e)(t.graph.edges);
  if (r.tag === "Just")
    return T("Just", r._1);
  if (r.tag === "Nothing")
    return rl(e)(n);
  f();
}, uC = (t) => (n) => (e) => (r) => ({
  x: r.position._1 * t,
  y: r.position._2 * t,
  w: r.size._1 * t,
  h: r.size._2 * t,
  label: (() => {
    const o = zs(r.node)(n);
    if (o.tag === "Just")
      return o._1;
    if (o.tag === "Nothing")
      return r.node;
    f();
  })(),
  shape: (() => {
    const o = zs(r.node)(e);
    if (o.tag === "Nothing")
      return Ur;
    if (o.tag === "Just")
      return o._1;
    f();
  })()
}), aC = (t) => ({ id: t, size: b(1, 1), ports: [], label: T("Just", t), shape: Ur }), cC = (t) => (n) => (e) => (r) => b(r.node, uC(t)(n)(e)(r)), Ch = (t) => {
  const n = ao(`
`)(t);
  return n.length === 0 ? [""] : n;
}, bh = (t) => {
  const n = (e, r) => {
    if (e.tag === "Leaf")
      return r;
    if (e.tag === "Node")
      return n(e._5, St("Cons", e._4, n(e._6, r)));
    f();
  };
  return tn(Jn.foldr, n(t.interiors, Y));
}, fC = (t) => Hs(Nt((n) => T(
  "Just",
  b(n.edge, { id: n.edge, from: { node: n.from, port: v }, to: { node: n.to, port: v }, label: v })
))(wt(t.scenes)((n) => n.tag === "DataFlow" ? Nt((e) => e.kind.tag === "SendToken" ? T("Just", e.kind._1) : v)(n._1.events) : []))), kh = (t) => {
  const n = Ky(t), e = ht((o) => KJ(o.id)(n.nodes), t.graph.nodes), r = ht((o) => VJ(o.id)(n.edges), t.graph.edges);
  return {
    nodes: [
      ...e,
      ...I(aC)(tn(
        Pe.foldr,
        lr(F.compare, n.nodes, jJ(I((o) => o.id)(e)))
      ))
    ],
    edges: [
      ...r,
      ...Nt(sC(t)(fC(t)))(tn(
        Pe.foldr,
        lr(F.compare, n.edges, ZJ(I((o) => o.id)(r)))
      ))
    ],
    constraints: t.graph.constraints
  };
}, lC = (t) => {
  const n = rc((e) => {
    const r = Nh(Jh)((() => {
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
  })(kh(t).nodes);
  return () => {
    const e = n();
    return ha(e);
  };
}, Sh = (t) => {
  const n = lC(t);
  return () => {
    const e = n(), r = rc(Sh)(bh(t))();
    return w(tC)(e)(r);
  };
}, gC = (t) => (n) => {
  const e = Bt((r) => v, (r) => (o) => T("Just", { head: r, tail: o }), n.segments);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ x: e._1.head.start._1 * t, y: e._1.head.start._2 * t }, ...I((r) => ({ x: r.end._1 * t, y: r.end._2 * t }))([e._1.head, ...e._1.tail])];
  f();
}, _C = (t) => (n) => b(n.edge, gC(t)(n)), dC = (t) => (n) => (e) => (r) => ({
  nodes: ha(I(cC(V(4) * t)(n)(e))(r.nodes)),
  edges: Hs(I(_C(t))(r.edges)),
  chipExtras: D,
  edgeLabels: D
}), hC = (t) => (n) => ({
  ...iC(Hs(I((e) => b(e.id, b(e.from.node, e.to.node)))(n.edges)))(dC(8)(ha(I((e) => b(
    e.id,
    (() => {
      if (e.label.tag === "Just")
        return e.label._1;
      if (e.label.tag === "Nothing")
        return e.id;
      f();
    })()
  ))(n.nodes)))(ha(I((e) => b(e.id, e.shape))(n.nodes)))(kJ(TJ)(n).result)),
  edgeLabels: Hs(Nt((e) => e.label.tag === "Just" ? T("Just", b(e.id, e.label._1)) : v)(n.edges))
}), pC = (t) => w((n) => (e) => {
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
})(D)(t.scenes), mC = (t) => {
  const n = rc((e) => {
    const r = Nh(Jh)(e);
    return () => {
      const o = r();
      return b(e, { labelW: o, charCount: pr(ni(e)), lineCount: 1 });
    };
  })(tn(
    Pe.foldr,
    nC(wt(tn(Pe.foldr, pC(t)))(Ch))
  ));
  return () => {
    const e = n();
    return eC(e);
  };
}, Lh = (t) => {
  const n = mC(t);
  return () => {
    const e = n(), r = rc(Lh)(bh(t))();
    return w(rC)(e)(r);
  };
}, $C = V(4) * 8, yC = (t) => wt(t.scenes)((n) => {
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
}), xC = (t) => (n) => (e) => {
  const r = (o) => {
    const i = Nt((s) => {
      const u = oC(s)(t);
      return u.tag === "Just" ? T("Just", { w: u._1.labelW + 28, h: V(DJ(1)(u._1.lineCount)) * 13.2 + 12 }) : v;
    })(wt(o)(Ch));
    return i.length === 0 ? v : T(
      "Just",
      { w: w(u_)(0)(I((s) => s.w)(i)), h: w(u_)(0)(I((s) => s.h)(i)) }
    );
  };
  return w((o) => (i) => {
    if (i.kind.tag === "SendToken") {
      const s = rl(i.kind._1.edge)(e.edges), u = r(i.kind._1.labels);
      if (u.tag === "Just" && s.tag === "Just") {
        const a = u._1;
        return qt(F)(Nn)(i.kind._1.edge)(I((c) => ({ x: c.x + 14 + a.w, y: c.y - 6 - 8 - a.h }))(s._1))(o);
      }
      return o;
    }
    if (i.kind.tag === "FillNodeWithoutTransition") {
      const s = zs(i.kind._1.node)(e.nodes), u = r(i.kind._1.labels);
      return u.tag === "Just" && s.tag === "Just" ? qt(F)(Nn)("__fill__:" + i.kind._1.node)((() => {
        const a = s._1.y - u._1.h - 14, c = s._1.x + s._1.w / 2, l = c - u._1.w / 2, _ = c + u._1.w / 2, d = s._1.y - 14;
        return [{ x: l, y: a }, { x: _, y: a }, { x: l, y: d }, { x: _, y: d }];
      })())(o) : o;
    }
    f();
  })(D)(yC(n));
}, oc = (t) => (n) => (e) => ({
  layout: (() => {
    const r = hC()(XJ($C)(t)(qJ(WJ)(kh(e))));
    return { ...r, chipExtras: xC(n)(e)(r) };
  })(),
  interiors: (() => {
    const r = oc(t)(n), o = (i) => {
      if (i.tag === "Leaf")
        return D;
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
}, Ef = (t) => (n) => (e) => {
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
  }, i = o(D, n);
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
      return s(D, n);
    })()
  };
}, ut = (t, n) => ({ tag: "CatQueue", _1: t, _2: n }), vC = (t) => {
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
              a = St("Cons", g._1, d), c = g._2;
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
}, at = (t, n, e) => ({ tag: t, _1: n, _2: e }), dt = /* @__PURE__ */ at("CatNil"), TC = (t) => (n) => {
  if (t.tag === "CatNil")
    return n;
  if (n.tag === "CatNil")
    return t;
  if (t.tag === "CatCons")
    return at("CatCons", t._1, ut(t._2._1, St("Cons", n, t._2._2)));
  f();
}, wC = (t) => (n) => (e) => {
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
      const _ = u, d = a, g = vC(_);
      if (g.tag === "Nothing") {
        c = !1, l = r((p) => (m) => m(p))(n)(d);
        continue;
      }
      if (g.tag === "Just") {
        u = g._1._2, a = St("Cons", t(g._1._1), d);
        continue;
      }
      f();
    }
    return l;
  })(e)(Y);
}, NC = (t) => {
  if (t.tag === "CatNil")
    return v;
  if (t.tag === "CatCons")
    return T("Just", b(t._1, t._2._1.tag === "Nil" && t._2._2.tag === "Nil" ? dt : wC(TC)(dt)(t._2)));
  f();
}, j = (t, n) => ({ tag: "Free", _1: t, _2: n }), lt = (t, n, e) => ({ tag: t, _1: n, _2: e }), Eh = (t) => {
  let n = t, e = !0, r;
  for (; e; ) {
    const o = n;
    if (o._1.tag === "Return") {
      const i = NC(o._2);
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
                return at("CatCons", s._2._1, ut(s._2._2._1, St("Cons", i._1._2, s._2._2._2)));
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
                return at("CatCons", s._2._1, ut(s._2._2._1, St("Cons", o._2, s._2._2._2)));
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
}, JC = (t) => (n) => {
  const e = n.Monad0(), r = e.Bind1().Apply0().Functor0();
  return (o) => n.tailRecM((i) => {
    const s = Eh(i);
    if (s.tag === "Return")
      return r.map(U$)(e.Applicative0().pure(s._1));
    if (s.tag === "Bind")
      return r.map(s0)(o(t.map(s._2)(s._1)));
    f();
  });
}, CC = (t) => (n) => (e) => {
  const r = Eh(e);
  if (r.tag === "Return")
    return n(r._1);
  if (r.tag === "Bind")
    return t(r._1)(r._2);
  f();
}, ol = { Applicative0: () => ei, Bind1: () => Ph }, bC = { map: (t) => (n) => Ph.bind(n)((e) => ei.pure(t(e))) }, Ph = {
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
            St("Cons", at("CatCons", n, ut(Y, Y)), t._2._2._2)
          )
        );
      f();
    })()
  ),
  Apply0: () => Ah
}, Ah = {
  apply: (t) => (n) => {
    const e = (r) => j(
      n._1,
      (() => {
        if (n._2.tag === "CatNil")
          return at("CatCons", (o) => ei.pure(r(o)), ut(Y, Y));
        if (n._2.tag === "CatCons")
          return at(
            "CatCons",
            n._2._1,
            ut(
              n._2._2._1,
              St(
                "Cons",
                at("CatCons", (o) => ei.pure(r(o)), ut(Y, Y)),
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
              St("Cons", at("CatCons", e, ut(Y, Y)), t._2._2._2)
            )
          );
        f();
      })()
    );
  },
  Functor0: () => bC
}, ei = { pure: (t) => j(lt("Return", t), dt), Apply0: () => Ah }, kC = () => () => () => (t) => (n) => (e) => F$(e.type)(t) ? G$(e.type)(t)(e.value) : n(e), SC = { map: (t) => (n) => ({ type: n.type, value: n.map(t)(n.value), map: n.map }) }, LC = (t) => Mu("Data.Functor.Variant: pattern match failure [" + t.type + "]"), EC = () => () => () => (t) => kC()()()(t)(LC);
var ci = (function() {
  var t = {}, n = "Pure", e = "Throw", r = "Catch", o = "Sync", i = "Async", s = "Bind", u = "Bracket", a = "Fork", c = "Sequential", l = "Map", _ = "Apply", d = "Alt", g = "Cons", p = "Resume", m = "Release", h = "Finalizer", $ = "Finalized", y = "Forked";
  function x(L, G, z, U) {
    this.tag = L, this._1 = G, this._2 = z, this._3 = U;
  }
  function J(L) {
    var G = function(z, U, K) {
      return new x(L, z, U, K);
    };
    return G.tag = L, G;
  }
  function N(L) {
    return new x(n, void 0);
  }
  function C(L) {
    try {
      L();
    } catch (G) {
      setTimeout(function() {
        throw G;
      }, 0);
    }
  }
  function k(L, G, z) {
    try {
      return G(z());
    } catch (U) {
      return L(U);
    }
  }
  function P(L, G, z) {
    try {
      return G(z)();
    } catch (U) {
      return z(L(U))(), N;
    }
  }
  var E = (function() {
    var L = 1024, G = 0, z = 0, U = new Array(L), K = !1;
    function O() {
      var Z;
      for (K = !0; G !== 0; )
        G--, Z = U[z], U[z] = void 0, z = (z + 1) % L, Z();
      K = !1;
    }
    return {
      isDraining: function() {
        return K;
      },
      enqueue: function(Z) {
        var et;
        G === L && (et = K, O(), K = et), U[(z + G) % L] = Z, G++, K || O();
      }
    };
  })();
  function Q(L) {
    var G = {}, z = 0, U = 0;
    return {
      register: function(K) {
        var O = z++;
        K.onComplete({
          rethrow: !0,
          handler: function(Z) {
            return function() {
              U--, delete G[O];
            };
          }
        })(), G[O] = K, U++;
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
            et[ct] = G[ct].kill(K, function($t) {
              return function() {
                delete et[ct], Z--, L.isLeft($t) && L.fromLeft($t) && setTimeout(function() {
                  throw L.fromLeft($t);
                }, 0), Z === 0 && O();
              };
            })();
          }
          for (var gt in G)
            G.hasOwnProperty(gt) && (Z++, nt(gt));
          return G = {}, z = 0, U = 0, function(ct) {
            return new x(o, function() {
              for (var $t in et)
                et.hasOwnProperty($t) && et[$t]();
            });
          };
        };
      }
    };
  }
  var W = 0, B = 1, H = 2, rt = 3, ot = 4, M = 5, q = 6;
  function A(L, G, z) {
    var U = 0, K = W, O = z, Z = null, et = null, nt = null, gt = null, ct = null, $t = 0, At = 0, Rt = null, rn = !0;
    function xt(_t) {
      for (var yt, ft, mt; ; )
        switch (yt = null, ft = null, mt = null, K) {
          case H:
            K = B;
            try {
              O = nt(O), gt === null ? nt = null : (nt = gt._1, gt = gt._2);
            } catch (Lt) {
              K = M, Z = L.left(Lt), O = null;
            }
            break;
          case rt:
            L.isLeft(O) ? (K = M, Z = O, O = null) : nt === null ? K = M : (K = H, O = L.fromRight(O));
            break;
          case B:
            switch (O.tag) {
              case s:
                nt && (gt = new x(g, nt, gt)), nt = O._2, K = B, O = O._1;
                break;
              case n:
                nt === null ? (K = M, O = L.right(O._1)) : (K = H, O = O._1);
                break;
              case o:
                K = rt, O = k(L.left, L.right, O._1);
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
                nt === null ? ct = new x(g, O, ct, et) : ct = new x(g, O, new x(g, new x(p, nt, gt), ct, et), et), nt = null, gt = null, K = B, O = O._1;
                break;
              // Enqueue the Bracket so that we can call the appropriate handlers
              // after resource acquisition.
              case u:
                $t++, nt === null ? ct = new x(g, O, ct, et) : ct = new x(g, O, new x(g, new x(p, nt, gt), ct, et), et), nt = null, gt = null, K = B, O = O._1;
                break;
              case a:
                K = rt, yt = A(L, G, O._2), G && G.register(yt), O._1 && yt.run(), O = L.right(yt);
                break;
              case c:
                K = B, O = X(L, G, O._1);
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
                  et && et !== yt && $t === 0 ? K = M : Z && (K = B, O = mt._2(L.fromLeft(Z)), Z = null);
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
                  $t--, Z === null && (ft = L.fromRight(O), ct = new x(g, new x(m, mt._2, ft), ct, yt), (et === yt || $t > 0) && (K = B, O = mt._3(ft)));
                  break;
                // Enqueue the appropriate handler. We increase the bracket count
                // because it should not be cancelled.
                case m:
                  ct = new x(g, new x($, O, Z), ct, et), K = B, et && et !== yt && $t === 0 ? O = mt._1.killed(L.fromLeft(et))(mt._2) : Z ? O = mt._1.failed(L.fromLeft(Z))(mt._2) : O = mt._1.completed(L.fromRight(O))(mt._2), Z = null, $t++;
                  break;
                case h:
                  $t++, ct = new x(g, new x($, O, Z), ct, et), K = B, O = mt._1;
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
            K = B;
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
        var yt = At++;
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
            et === null && (et = L.left(_t)), $t === 0 && (K === ot && (ct = new x(g, new x(h, O(_t)), ct, et)), K = M, O = null, Z = null, xt(++U));
            break;
          default:
            et === null && (et = L.left(_t)), $t === 0 && (K = M, O = null, Z = null);
        }
        return ft;
      };
    }
    function Ct(_t) {
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
      join: Ct,
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
  function R(L, G, z, U) {
    var K = 0, O = {}, Z = 0, et = {}, nt = new Error("[ParAff] Early exit"), gt = null, ct = t;
    function $t(Gt, vt, Ct) {
      var _t = vt, yt = null, ft = null, mt = 0, Ft = {}, Lt, Qt;
      t: for (; ; )
        switch (Lt = null, _t.tag) {
          case y:
            if (_t._3 === t && (Lt = O[_t._1], Ft[mt++] = Lt.kill(Gt, function(nn) {
              return function() {
                mt--, mt === 0 && Ct(nn)();
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
            yt && (ft = new x(g, yt, ft)), yt = _t, _t = _t._1;
            break;
        }
      if (mt === 0)
        Ct(L.right(void 0))();
      else
        for (Qt = 0, Lt = mt; Qt < Lt; Qt++)
          Ft[Qt] = Ft[Qt]();
      return Ft;
    }
    function At(Gt, vt, Ct) {
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
                  delete et[Lt], Ft ? Ft = !1 : Ct === null ? At(_t, null, null) : At(_t, Ct._1, Ct._2);
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
                delete et[Lt], Ft ? Ft = !1 : Ct === null ? At(yt, null, null) : At(yt, Ct._1, Ct._2);
              };
            }), Ft) {
              Ft = !1;
              return;
            }
            break;
        }
        Ct === null ? vt = null : (vt = Ct._1, Ct = Ct._2);
      }
    }
    function Rt(Gt) {
      return function(vt) {
        return function() {
          delete O[Gt._1], Gt._3 = vt, At(vt, Gt._2._1, Gt._2._2);
        };
      };
    }
    function rn() {
      var Gt = B, vt = z, Ct = null, _t = null, yt, ft;
      t: for (; ; )
        switch (yt = null, ft = null, Gt) {
          case B:
            switch (vt.tag) {
              case l:
                Ct && (_t = new x(g, Ct, _t)), Ct = new x(l, vt._1, t, t), vt = vt._2;
                break;
              case _:
                Ct && (_t = new x(g, Ct, _t)), Ct = new x(_, t, vt._2, t), vt = vt._1;
                break;
              case d:
                Ct && (_t = new x(g, Ct, _t)), Ct = new x(d, t, vt._2, t), vt = vt._1;
                break;
              default:
                ft = K++, Gt = M, yt = vt, vt = new x(y, ft, new x(g, Ct, _t), t), yt = A(L, G, yt), yt.onComplete({
                  rethrow: !1,
                  handler: Rt(vt)
                })(), O[ft] = yt, G && G.register(yt);
            }
            break;
          case M:
            if (Ct === null)
              break t;
            Ct._1 === t ? (Ct._1 = vt, Gt = B, vt = Ct._2, Ct._2 = t) : (Ct._2 = vt, vt = Ct, _t === null ? Ct = null : (Ct = _t._1, _t = _t._2));
        }
      for (ct = vt, ft = 0; ft < K; ft++)
        O[ft].run();
    }
    function xt(Gt, vt) {
      gt = L.left(Gt);
      var Ct;
      for (var _t in et)
        if (et.hasOwnProperty(_t)) {
          Ct = et[_t];
          for (_t in Ct)
            Ct.hasOwnProperty(_t) && Ct[_t]();
        }
      et = null;
      var yt = $t(Gt, ct, vt);
      return function(ft) {
        return new x(i, function(mt) {
          return function() {
            for (var Ft in yt)
              yt.hasOwnProperty(Ft) && yt[Ft]();
            return N;
          };
        });
      };
    }
    return rn(), function(Gt) {
      return new x(i, function(vt) {
        return function() {
          return xt(Gt, vt);
        };
      });
    };
  }
  function X(L, G, z) {
    return new x(i, function(U) {
      return function() {
        return R(L, G, z, U);
      };
    });
  }
  return x.EMPTY = t, x.Pure = J(n), x.Throw = J(e), x.Catch = J(r), x.Sync = J(o), x.Async = J(i), x.Bind = J(s), x.Bracket = J(u), x.Fork = J(a), x.Seq = J(c), x.ParMap = J(l), x.ParApply = J(_), x.ParAlt = J(d), x.Fiber = A, x.Supervisor = Q, x.Scheduler = E, x.nonCanceler = N, x;
})();
const PC = ci.Pure;
ci.Throw;
function Uo(t) {
  return function(n) {
    return ci.Bind(t, n);
  };
}
const Ko = ci.Sync, AC = ci.Async;
function il(t, n) {
  return function() {
    return ci.Fiber(t, null, n);
  };
}
ci.Seq;
const sl = {
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
  left: H$,
  right: D1
}, RC = /* @__PURE__ */ (() => {
  const t = PC();
  return (n) => t;
})(), FC = (t) => (n) => CC((e) => (r) => t({ type: e.type, value: e.map((o) => r(o))(e.value), map: e.map }))(n), GC = (t) => {
  const n = t.Bind1(), e = t.Applicative0().pure;
  return (r) => {
    const o = A$(() => FC((s) => n.bind(r(s))(o()))(e));
    return o();
  };
};
let Xc = null;
function IC() {
  return Xc || (typeof document > "u" ? null : Xc = document.createElement("canvas").getContext("2d"));
}
const Yc = /* @__PURE__ */ new Map();
function Rh(t, n, e, r, o, i) {
  const s = `${e} ${n}px ${t}`, u = s + "|" + r;
  if (Yc.has(u)) return Yc.get(u);
  const a = IC();
  if (!a) return i;
  a.font = s;
  const c = o(a.measureText(r)), l = typeof document < "u" ? document.fonts : null;
  if (!l || l.check(s)) Yc.set(u, c);
  else if (l && l.load)
    try {
      l.load(s);
    } catch {
    }
  return c;
}
const BC = (t, n, e, r) => Rh(t, n, e, r, (o) => o.width, -1), DC = (t, n, e, r) => Rh(
  t,
  n,
  e,
  r,
  (o) => ({ ascent: o.actualBoundingBoxAscent, descent: o.actualBoundingBoxDescent }),
  { ascent: -1, descent: -1 }
), pa = (t, n, e, r) => ({ tag: t, _1: n, _2: e, _3: r }), Fh = (t) => t, Gh = {
  map: (t) => (n) => {
    if (n.tag === "MeasureText")
      return pa("MeasureText", n._1, n._2, (e) => t(n._3(e)));
    if (n.tag === "MeasureInk")
      return pa("MeasureInk", n._1, n._2, (e) => t(n._3(e)));
    f();
  }
}, ul = (t) => (n) => {
  const e = BC(t.family, t.size, t.weight, ni(n));
  return e < 0 ? V(os(n).length) * t.size * 0.62 : e;
}, al = (t) => (n) => {
  const e = DC(t.family, t.size, t.weight, ni(n));
  return e.ascent < 0 ? { ascent: t.size * 0.72, descent: t.size * 0.2 } : e;
}, zC = (t) => (n) => j(
  lt(
    "Bind",
    { type: "metrics", value: pa("MeasureInk", t, n, Fh), map: Gh.map },
    (e) => j(lt("Return", e), dt)
  ),
  dt
), tu = (t) => (n) => j(
  lt(
    "Bind",
    { type: "metrics", value: pa("MeasureText", t, n, Fh), map: Gh.map },
    (e) => j(lt("Return", e), dt)
  ),
  dt
), Ih = (t) => t, Bh = (t) => t, ic = (t) => t, Dh = (t) => t, zh = (t) => t, Mt = (t, n, e, r, o) => ({ tag: t, _1: n, _2: e, _3: r, _4: o }), Hh = (t) => t, cl = (t) => t, HC = /* @__PURE__ */ cl("BaselineTop"), Ke = /* @__PURE__ */ cl("BaselineMiddle"), QC = /* @__PURE__ */ cl("BaselineBottom"), Mi = /* @__PURE__ */ Hh("AlignLeft"), co = /* @__PURE__ */ Hh("AlignCenter"), ue = /* @__PURE__ */ zh("RoundJoin"), nu = /* @__PURE__ */ zh("MiterJoin"), Ve = /* @__PURE__ */ Dh("ButtCap"), dr = /* @__PURE__ */ Dh("RoundCap"), OC = /* @__PURE__ */ ic("LayerPolyOut"), WC = /* @__PURE__ */ ic("LayerPolyIn"), qC = /* @__PURE__ */ ic("LayerNodeMask"), XC = /* @__PURE__ */ ic("LayerOverlay"), Qs = /* @__PURE__ */ Bh("NonZero"), YC = /* @__PURE__ */ Bh("EvenOdd"), c_ = /* @__PURE__ */ Ih("Normal"), Iu = /* @__PURE__ */ Ih("Difference"), wn = { r: 255, g: 255, b: 255, a: 255 }, Os = [5], Cn = {
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
}, qr = { r: 26, g: 26, b: 26, a: 255 }, Pf = (t) => (n) => Math.imul(t, n), is = (t) => {
  const n = t + 1831565813 | 0, e = Pf(n ^ n >>> 15)(n | 1), r = e ^ (e + Pf(e ^ e >>> 7)(e | 61) | 0), o = r ^ r >>> 14;
  return { prng: o, value: o < 0 ? (V(o) + 4294967296) / 4294967296 : V(o) / 4294967296 };
}, Dn = (t) => (n) => (e) => {
  const r = is(e);
  return { prng: r.prng, value: t + r.value * (n - t) };
}, Af = (t) => (n) => w((e) => (r) => Pf(e ^ r)(-2048144789))(n)(I(Pr)(Hr(t))), MC = (t) => t, Qh = (t) => t, UC = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, De = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Oh = (t) => (n) => (e) => {
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
}, Rf = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, KC = (t) => (n) => (e) => {
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
}, VC = /* @__PURE__ */ Qh("FlatLevel"), jC = /* @__PURE__ */ Qh("NestedLevel"), fl = /* @__PURE__ */ MC("GenieSilhouette"), ZC = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, yLift: 0 };
  const o = is(t);
  return { prng: o.prng, yLift: o.value * e.yJitter * r };
}, t3 = (t) => (n) => (e) => (r) => {
  if (n)
    return { prng: t, dx: 0 };
  const o = is(t);
  return { prng: o.prng, dx: (o.value * 2 - 1) * e.xJitter * r };
}, f_ = (t) => (n) => {
  const e = n.cy - t.cy, r = n.cx - t.cx, o = re(r * r + e * e), i = (t.r * t.r - n.r * n.r + o * o) / (2 * o), s = re(UC(0)(t.r * t.r - i * i)), u = t.cx + i * r / o, a = t.cy + i * e / o, c = { x: u - s * e / o, y: a + s * r / o }, l = { x: u + s * e / o, y: a - s * r / o };
  return o === 0 || o > t.r + n.r ? { x: (t.cx + n.cx) / 2, y: t.cy } : c.y < l.y ? c : l;
}, Ri = (t) => (n) => {
  const e = De(n)(De(t.w / 2)(t.h / 2));
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
}, n3 = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n)
    return { prng: t, r: o };
  if (e)
    return { prng: t, r: o * (1 + i.rJitter) };
  if (r)
    return { prng: t, r: o * i.smallScale };
  const s = is(t);
  return { prng: s.prng, r: o * (1 + s.value * i.rJitter) };
}, Wh = (t) => {
  const n = De(t.w)(t.h) / 2;
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
}, e3 = (t) => (n) => (e) => {
  const r = is(t), o = n.length;
  return o === 0 ? { prng: t, idx: -1 } : {
    prng: r.prng,
    idx: (() => {
      const i = Oh(0)(o - 1 | 0)(dn(Ue(r.value * V(e))));
      return i >= 0 && i < n.length ? n[i] : -1;
    })()
  };
}, r3 = (t) => (n) => {
  const e = is(t), r = n.length;
  return r === 0 ? { prng: t, idx: -1 } : {
    prng: e.prng,
    idx: (() => {
      const o = Oh(0)(r - 1 | 0)(dn(Ue(e.value * V(r))));
      return o >= 0 && o < n.length ? n[o] : -1;
    })()
  };
}, qh = (t) => {
  const n = De(t.w * 0.18)(t.h * 0.6);
  return [1, t.x + n, t.y, 2, t.x + t.w, t.y, 2, t.x + t.w - n, t.y + t.h, 2, t.x, t.y + t.h, 5];
}, Xh = (t) => [
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
], Yh = { rBase: 1.2, stepRatio: 0.7, rJitter: 0.35, yJitter: 0.2, xJitter: 0.2, heroShift: 0.2, smallScale: 0.85, smallShift: 0.15, seed: 7, minN: 3 }, o3 = (t) => {
  const n = De(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.x + e;
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
}, Mh = (t) => {
  const n = De(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + t.h + 5, o = t.y + n, i = r - n, s = t.x + e;
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
}, Uh = (t) => (n) => {
  const e = n.y + n.h, r = L2(t.rBase * n.h)(n.w / (2 * (1 + (V(t.minN) - 1) * t.stepRatio))), o = n.w - 2 * r, i = 2 * r * t.stepRatio, s = Rf(t.minN)(o <= 0 || i <= 0 ? t.minN : dn(Xe(o / i)) + 1 | 0), u = s >= 3 ? Vt(1, s - 2 | 0) : [], a = u.length, c = or(a + 1 | 0, 2), l = c < 1 ? [] : Et(0, c, u), _ = r3(t.seed)((() => {
    const h = a - c | 0;
    return h < 1 ? u : Et(h, u.length, u);
  })()), d = _.idx, g = e3(_.prng)(ht((h) => h !== d, l))(Rf(1)(l.length - (Je(vo)(d)(l) ? 1 : 0) | 0)), p = g.idx, m = s >= 2 ? o / (V(s) - 1) : 0;
  return w((h) => ($) => {
    const y = $ === p, x = $ === d, J = $ === 0 || $ === (s - 1 | 0), N = n3(h.prng)(J)(x)(y)(r)(t), C = ZC(N.prng)(J)(t)(n.h), k = t3(C.prng)(J)(t)(m);
    return {
      prng: k.prng,
      circles: kt(h.circles)({
        cx: n.x + KC(N.r)(n.w - N.r)((s >= 2 ? r + V($) / (V(s) - 1) * o + k.dx : r + 0 * o + k.dx) + (x ? t.heroShift * m : y ? -1 * t.smallShift * m : 0)),
        cy: e - C.yLift,
        r: N.r
      })
    };
  })({ prng: g.prng, circles: [] })(Vt(0, s - 1 | 0)).circles;
}, Kh = (t) => (n) => {
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
}, Vh = (t) => {
  const n = De(t.h * 0.4)(t.w * 0.2);
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
}, i3 = (t) => (n) => (e) => {
  const r = Yo(n.y - t.cy)(n.x - t.cx), o = Yo(e.y - t.cy)(e.x - t.cx), i = o > r ? o - r : o + 6.283185307179586 - r, s = Rf(1)(dn(Qa(i / 1.5707963267948966))), u = i / V(s), a = 1.3333333333333333 * E2(u / 4);
  return wt(Vt(0, s - 1 | 0))((c) => {
    const l = r + V(c + 1 | 0) * u, _ = t.cx + t.r * le(l), d = t.cy + t.r * Ne(l), g = r + V(c) * u;
    return [
      4,
      t.cx + t.r * le(g) - a * t.r * Ne(g),
      t.cy + t.r * Ne(g) + a * t.r * le(g),
      _ + a * t.r * Ne(l),
      d - a * t.r * le(l),
      _,
      d
    ];
  });
}, jh = (t) => (n) => {
  const e = t.h * 0.38, r = Kh(Uh(Yh)({ x: t.x, y: t.y - e, w: t.w, h: e }))(t.y), o = De(n)(De(t.w / 2)(t.h / 2));
  return 0 < r.length ? [
    1,
    r[0].p1.x,
    r[0].p1.y,
    ...wt(r)((i) => i3(i.c)(i.p1)(i.p2)),
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
}, s3 = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (n === "Rectangle")
    return t.drawRoundedRect(e)(r)(o)(i);
  if (n === "Cylinder") {
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
  if (n === "Parallelogram") {
    const s = qh(e);
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
    const s = Vh(e);
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
    const s = Wh(e);
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
  if (n === "Cloud") {
    const s = jh(e)(r);
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
}, u3 = {
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
  measureText: (t) => (n) => tu(t)(n),
  measureInk: (t) => (n) => zC(t)(n),
  insideTokenStyle: (t) => j(lt("Return", fl), dt),
  Monad0: () => ol
}, a3 = (t) => () => t.clip("evenodd"), c3 = (t) => (n) => () => {
  t.filter = `blur(${n}px)`;
}, f3 = (t) => (n) => () => {
  const e = n > 0 ? t.canvas.width / n : 1;
  t.setTransform(e, 0, 0, e, 0, 0);
}, l3 = (t) => (n) => (e) => (r) => (o) => () => {
  const i = n > 0 ? t.canvas.width / n : 1;
  t.setTransform(
    i * e,
    0,
    0,
    i * e,
    i * r,
    i * o
  );
}, g3 = (t) => (n) => () => {
  const e = Math.max(8, Math.ceil(8 / Math.max(n.tile, 1e-3))), r = Math.max(2, Math.round(n.tile * e)), o = document.createElement("canvas");
  o.width = r, o.height = r;
  const i = o.getContext("2d");
  i.scale(e, e), i.fillStyle = n.bgCss, i.fillRect(0, 0, n.tile, n.tile), i.fillStyle = n.dotCss, i.beginPath(), i.arc(n.tile / 2, n.tile / 2, n.dotR, 0, 2 * Math.PI), i.fill();
  const s = t.createPattern(o, "repeat");
  s && typeof s.setTransform == "function" && s.setTransform(new DOMMatrix().translateSelf(n.ox, n.oy).scaleSelf(1 / e, 1 / e)), t.save(), t.fillStyle = s, t.fillRect(n.vx, n.vy, n.vw, n.vh), t.restore();
}, Ff = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ll = (t) => (n) => (e) => {
  const r = n.stroke;
  return () => {
    const o = r.value, i = K2(t)(e);
    if (o !== e)
      return i(), n.stroke.value = e;
  };
}, _3 = (t) => (n) => (e) => {
  const r = n.font;
  return () => {
    const o = r.value, i = qa(t)(e);
    if (o !== e)
      return i(), n.font.value = e;
  };
}, eu = (t) => (n) => (e) => {
  const r = n.fill;
  return () => {
    const o = r.value, i = p0(t)(e);
    if (o !== e)
      return i(), n.fill.value = e;
  };
}, sc = (t) => (n) => {
  const e = n.length, r = (i) => {
    if (i >= e)
      return () => {
      };
    const s = i >= 0 && i < n.length ? n[i] : 0;
    if (s === 1) {
      const u = nd(t)((() => {
        const c = i + 1 | 0;
        return c >= 0 && c < n.length ? n[c] : 0;
      })())((() => {
        const c = i + 2 | 0;
        return c >= 0 && c < n.length ? n[c] : 0;
      })()), a = r(i + 3 | 0);
      return () => (u(), a());
    }
    if (s === 2) {
      const u = ms(t)((() => {
        const c = i + 1 | 0;
        return c >= 0 && c < n.length ? n[c] : 0;
      })())((() => {
        const c = i + 2 | 0;
        return c >= 0 && c < n.length ? n[c] : 0;
      })()), a = r(i + 3 | 0);
      return () => (u(), a());
    }
    if (s === 3) {
      const u = $s(t)({
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
      const u = oy(t)({
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
      const u = ed(t), a = r(i + 1 | 0);
      return () => (u(), a());
    }
    return () => {
    };
  }, o = td(t);
  return () => (o(), r(0)());
}, d3 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Ff(i)(Ff(r / 2)(o / 2)), u = nd(t)(n + s)(e);
  return () => (u(), ms(t)(n + r - s)(e)(), $s(t)({ cpx: n + r, cpy: e, x: n + r, y: e + s })(), ms(t)(n + r)(e + o - s)(), $s(t)({ cpx: n + r, cpy: e + o, x: n + r - s, y: e + o })(), ms(t)(n + s)(e + o)(), $s(t)({ cpx: n, cpy: e + o, x: n, y: e + o - s })(), ms(t)(n)(e + s)(), $s(t)({ cpx: n, cpy: e, x: n + s, y: e })(), ed(t)());
}, h3 = () => ({ font: { value: "" }, fill: { value: "" }, stroke: { value: "" } }), Zh = (t) => (n) => {
  const e = y0(t)({ x: 0, y: 0, width: n.width, height: n.height });
  return () => {
    e();
    const r = h3();
    return { ctx: t, surface: n, styleCache: r, maskDepth: { value: 0 }, groupAlpha: { value: 1 }, alphaSaves: { value: [] } };
  };
}, p3 = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, m3 = (t) => an(t.weight) + " " + Wo(t.size) + "px " + t.family, Br = (t) => {
  const n = Wo(V(t.a) / 255);
  return t.a >= 255 ? "rgb(" + an(t.r) + "," + an(t.g) + "," + an(t.b) + ")" : "rgba(" + an(t.r) + "," + an(t.g) + "," + an(t.b) + "," + n + ")";
}, $3 = (t) => (n) => (e) => (r) => {
  const o = wr(t);
  return () => (o(), f3(t)(n.width)(), eu(t)(e)(Br(r))(), ty(t)({ x: 0, y: 0, width: n.width, height: n.height })(), Nr(t)(), e.font.value = "", e.fill.value = "", e.stroke.value = "");
}, y3 = (t) => (n) => (e) => {
  const r = n.font;
  return () => (r.value = "", n.fill.value = "", n.stroke.value = "", g3(t)({
    vx: e.viewport.vx,
    vy: e.viewport.vy,
    vw: e.viewport.vw,
    vh: e.viewport.vh,
    bgCss: Br(e.bgColor),
    dotCss: Br(e.dotColor),
    tile: e.tile,
    dotR: e.dotRadius,
    ox: e.origin.x,
    oy: e.origin.y
  })());
}, x3 = (t) => (n) => (e) => (r) => {
  const o = eu(t)(n)(Br(r));
  return () => (o(), sc(t)(e)(), $0(t)());
}, v3 = (t) => (n) => (e) => (r) => (o) => {
  const i = eu(t)(n)(Br(r));
  return () => (i(), ll(t)(n)(Br(o.color))(), h0(t)(o.width)(), R0(t)((() => {
    if (o.lineJoin === "RoundJoin")
      return b0;
    if (o.lineJoin === "BevelJoin")
      return C0;
    if (o.lineJoin === "MiterJoin")
      return k0;
    f();
  })())(), F0(t)((() => {
    if (o.lineCap === "ButtCap")
      return E0;
    if (o.lineCap === "RoundCap")
      return S0;
    if (o.lineCap === "SquareCap")
      return L0;
    f();
  })())(), sc(t)(e)(), $0(t)(), m0(t)());
}, T3 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = td(t);
  return () => {
    if (s(), d3(t)(e.x)(e.y)(e.w)(e.h)(r)(), o.tag === "Just" ? (eu(t)(n)(Br(o._1.color))(), $0(t)()) : o.tag === "Nothing" || f(), i.tag === "Just")
      return ll(t)(n)(Br(i._1.color))(), h0(t)(i._1.width)(), R0(t)((() => {
        if (i._1.lineJoin === "RoundJoin")
          return b0;
        if (i._1.lineJoin === "BevelJoin")
          return C0;
        if (i._1.lineJoin === "MiterJoin")
          return k0;
        f();
      })())(), F0(t)((() => {
        if (i._1.lineCap === "ButtCap")
          return E0;
        if (i._1.lineCap === "RoundCap")
          return S0;
        if (i._1.lineCap === "SquareCap")
          return L0;
        f();
      })())(), m0(t)();
    i.tag !== "Nothing" && f();
  };
}, w3 = (t) => (n) => (e) => (r) => {
  const o = ll(t)(n)(Br(r.color));
  return () => (o(), h0(t)(r.width)(), R0(t)((() => {
    if (r.lineJoin === "RoundJoin")
      return b0;
    if (r.lineJoin === "BevelJoin")
      return C0;
    if (r.lineJoin === "MiterJoin")
      return k0;
    f();
  })())(), F0(t)((() => {
    if (r.lineCap === "ButtCap")
      return E0;
    if (r.lineCap === "RoundCap")
      return S0;
    if (r.lineCap === "SquareCap")
      return L0;
    f();
  })())(), sc(t)(e)(), m0(t)());
}, l_ = (t) => (n) => (e) => {
  const r = eu(t)(n)(Br(e.color));
  return () => (r(), _3(t)(n)(m3(e.font))(), A0(t)((() => {
    if (e.align === "AlignLeft")
      return ay;
    if (e.align === "AlignCenter")
      return J0;
    if (e.align === "AlignRight")
      return cy;
    f();
  })())(), P0(t)((() => {
    if (e.baseline === "BaselineTop")
      return iy;
    if (e.baseline === "BaselineMiddle")
      return N0;
    if (e.baseline === "BaselineAlphabetic")
      return sy;
    if (e.baseline === "BaselineBottom")
      return uy;
    f();
  })())(), x0(t)(e.content)(e.x)(e.y)());
}, tp = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => p3
}, N3 = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => tp
}, J3 = (t) => (n) => (e) => {
  const r = Ff(n.width / e.vw)(n.height / e.vh);
  return l3(t)(n.width)(r)((n.width - e.vw * r) / 2 - e.vx * r)((n.height - e.vh * r) / 2 - e.vy * r);
}, C3 = { pure: (t) => (n) => () => t, Apply0: () => tp }, np = { Applicative0: () => C3, Bind1: () => N3 }, gl = {
  fillPath: (t) => (n) => (e) => {
    const r = x3(e.ctx)(e.styleCache)(t)(n.color), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = w3(e.ctx)(e.styleCache)(t)(n), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = v3(r.ctx)(r.styleCache)(t)(n.color)(e), i = r.maskDepth;
    return () => {
      if (i.value === 0)
        return o();
    };
  },
  drawRoundedRect: (t) => (n) => (e) => (r) => (o) => {
    const i = T3(o.ctx)(o.styleCache)(t)(n)(e)(r), s = o.maskDepth;
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
    const r = wr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0)
        return r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", ny(e.ctx)(t)(), l_(e.ctx)(e.styleCache)(n)(), Nr(e.ctx)(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "";
    };
  },
  pushTransform: (t) => (n) => {
    const e = wr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", ag(n.ctx)({ translateX: t.tx, translateY: t.ty })(), Xu(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popTransform: (t) => {
    const n = Nr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBakedTransform: (t) => (n) => {
    const e = wr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", ag(n.ctx)({ translateX: t.tx, translateY: t.ty })(), Xu(n.ctx)({ scaleX: t.sx, scaleY: t.sy })();
    };
  },
  popBakedTransform: (t) => {
    const n = Nr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushClip: (t) => (n) => (e) => {
    const r = wr(e.ctx), o = e.maskDepth;
    return () => {
      if (o.value === 0) {
        if (r(), e.styleCache.font.value = "", e.styleCache.fill.value = "", e.styleCache.stroke.value = "", sc(e.ctx)(t)(), n === "NonZero")
          return Z2(e.ctx)();
        if (n === "EvenOdd")
          return a3(e.ctx)();
        f();
      }
    };
  },
  popClip: (t) => {
    const n = Nr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushBlend: (t) => (n) => {
    const e = wr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        if (e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "", t === "Normal")
          return cg(n.ctx)(fy)();
        if (t === "Difference")
          return cg(n.ctx)(ly)();
        f();
      }
    };
  },
  popBlend: (t) => {
    const n = Nr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0)
        return n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
    };
  },
  pushAlpha: (t) => (n) => {
    const e = wr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "";
        const i = n.groupAlpha.value, s = n.alphaSaves.value;
        n.alphaSaves.value = [...s, i];
        const u = i * t;
        return n.groupAlpha.value = u, j2(n.ctx)(u)();
      }
    };
  },
  popAlpha: (t) => {
    const n = Nr(t.ctx), e = t.maskDepth;
    return () => {
      if (e.value === 0) {
        n(), t.styleCache.font.value = "", t.styleCache.fill.value = "", t.styleCache.stroke.value = "";
        const o = t.alphaSaves.value, i = Me(o);
        if (i.tag === "Just")
          return t.alphaSaves.value = i._1.init, t.groupAlpha.value = i._1.last;
        if (i.tag === "Nothing")
          return t.groupAlpha.value = 1;
        f();
      }
    };
  },
  pushBlur: (t) => (n) => {
    const e = wr(n.ctx), r = n.maskDepth;
    return () => {
      if (r.value === 0) {
        e(), n.styleCache.font.value = "", n.styleCache.fill.value = "", n.styleCache.stroke.value = "";
        const i = c3(n.ctx)(t);
        if (t >= 0.01)
          return i();
      }
    };
  },
  popBlur: (t) => {
    const n = Nr(t.ctx), e = t.maskDepth;
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
    const e = J3(n.ctx)(n.surface)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  clearBackground: (t) => (n) => {
    const e = $3(n.ctx)(n.surface)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  backgroundDots: (t) => (n) => {
    const e = y3(n.ctx)(n.styleCache)(t), r = n.maskDepth;
    return () => {
      if (r.value === 0)
        return e();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = ul(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = al(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => fl,
  Monad0: () => np
}, b3 = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ui = (t) => (n) => (e) => {
  const r = b3(0.05)(1 - t - n);
  return e < t ? 0 : e > 1 - n ? 1 : (e - t) / r;
}, Gf = (t) => {
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
}, ep = (t) => {
  if (t.tag === "Retracted")
    return { lo: 0, hi: 0 };
  if (t.tag === "Extended")
    return { lo: 0, hi: 1 };
  if (t.tag === "Extending") {
    if (t._1 === "ExtendFromSource")
      return { lo: 0, hi: Gf(t._2) };
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
}, fi = (t) => {
  if (t.tag === "Hidden")
    return { alpha: 0, scale: 0 };
  if (t.tag === "Visible")
    return { alpha: 1, scale: 1 };
  if (t.tag === "PloppingIn")
    return { alpha: t._1 > 0 ? 1 : 0, scale: Ls(8)(0.6)(Gf(t._1)) };
  if (t.tag === "PloppingOut")
    return { alpha: t._1 < 1 ? 1 : 0, scale: Ls(8)(0.6)(Gf(1 - t._1)) };
  f();
};
function k3(t, n) {
  const e = n.x - t.x, r = n.y - t.y;
  return Math.sqrt(e * e + r * r);
}
function S3(t) {
  const n = t.length, e = new Array(n);
  for (let r = 0; r < n; r++) {
    const o = t[r], i = t[(r + 1) % n];
    e[r] = { a: o, b: i, len: k3(o, i) };
  }
  return e;
}
function L3(t, n, e) {
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
function g_(t, n) {
  if (n.length === 0) return [];
  const e = S3(n);
  let r = 0;
  for (let i = 0; i < e.length; i++) r += e[i].len;
  const o = new Array(t);
  for (let i = 0; i < t; i++)
    o[i] = L3(e, n, i * r / t);
  return o;
}
function E3(t, n) {
  const e = n.length;
  if (e === 0) return n;
  const r = (t % e + e) % e | 0, o = new Array(e);
  for (let i = 0; i < e; i++) o[i] = n[(i + r) % e];
  return o;
}
function P3(t, n) {
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
  return E3(r, n);
}
const __ = (t) => (n) => (e) => {
  const r = g_(t, n), o = g_(t, e), i = P3(r, o);
  return { from: r, to: i };
};
function d_(t) {
  const n = t.length;
  if (n === 0) return { x: 0, y: 0 };
  let e = 0, r = 0;
  for (let o = 0; o < n; o++)
    e += t[o].x, r += t[o].y;
  return { x: e / n, y: r / n };
}
function A3(t, n) {
  const e = n.x - t.x, r = n.y - t.y, o = Math.sqrt(e * e + r * r);
  return o <= 1e-4 ? { x: 1, y: 0 } : { x: e / o, y: r / o };
}
function R3(t, n) {
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
function F3(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
const h_ = (t) => (n) => (e) => (r) => {
  const o = n.length;
  if (o === 0) return [];
  const i = d_(n), s = d_(e), u = A3(i, s), a = new Array(o);
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
    const h = _ <= 1e-4 ? 0 : r.maxDelay * (1 - (a[g] - c) / _), $ = Math.max(1e-4, 1 - h), y = F3((t - h) / $), x = y * y * (3 - 2 * y);
    d[g] = {
      x: p.x + (m.x - p.x) * x,
      y: p.y + (m.y - p.y) * x
    };
  }
  for (let g = 0; g < r.smoothPasses; g++)
    d = R3(0.5, d);
  return d;
}, rp = (t, n) => ({ tag: t, _1: n }), op = (t, n) => ({ tag: t, _1: n }), Rn = (t, n, e) => ({ tag: t, _1: n, _2: e }), ip = (t) => t, _l = (t, n) => ({ tag: t, _1: n }), dl = (t, n) => ({ tag: t, _1: n }), hl = (t) => t, uc = (t, n) => ({ tag: t, _1: n }), An = (t, n, e) => ({ tag: t, _1: n, _2: e }), li = (t, n) => ({ tag: t, _1: n }), ru = (t, n) => ({ tag: t, _1: n }), sp = (t, n) => ({ tag: t, _1: n }), up = (t) => t, ap = (t, n) => ({ tag: t, _1: n }), qo = (t, n, e) => ({ tag: t, _1: n, _2: e }), cp = (t) => t, G3 = (t) => t, Fi = /* @__PURE__ */ cp("NormalTransform"), I3 = /* @__PURE__ */ cp("BakedTransform"), fp = /* @__PURE__ */ up("TokenOutside"), p_ = /* @__PURE__ */ up("TokenInside"), ac = /* @__PURE__ */ ru("PlainText"), lp = /* @__PURE__ */ li("FrameTitle"), B3 = /* @__PURE__ */ li("Watermark"), D3 = /* @__PURE__ */ hl("NodeShadow"), gp = /* @__PURE__ */ hl("NodeBody"), z3 = /* @__PURE__ */ hl("NodeInversion"), pl = /* @__PURE__ */ ip("LabelsShown"), ma = /* @__PURE__ */ ip("LabelsHidden"), ur = {
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
}, _p = (t) => (n) => tu(t)(n), H3 = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = GC(t);
  return (r) => (o) => e(EC()()()({
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
}, Q3 = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("AskInsideTokenStyle", t, G3), map: ur.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), dp = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Background", t, void 0), map: ur.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), hp = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Edge", t, void 0), map: ur.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), ml = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Node", t, void 0), map: ur.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), cc = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Overlay", t, void 0), map: ur.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), ou = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Text", t, void 0), map: ur.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), pp = (t) => j(
  lt(
    "Bind",
    { type: "scene", value: An("Token", t, void 0), map: ur.map },
    (n) => j(lt("Return", n), dt)
  ),
  dt
), O3 = (t) => (n) => j(
  lt(
    "Bind",
    { type: "scene", value: An("BeginFrame", t, void 0), map: ur.map },
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
                { type: "scene", value: An("EndFrame", void 0), map: ur.map },
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
              St(
                "Cons",
                at(
                  "CatCons",
                  () => j(
                    lt(
                      "Bind",
                      { type: "scene", value: An("EndFrame", void 0), map: ur.map },
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
), ce = (t) => (n) => j(
  lt(
    "Bind",
    { type: "scene", value: An("BeginGroup", t, void 0), map: ur.map },
    (e) => j(lt("Return", e), dt)
  ),
  at(
    "CatCons",
    () => {
      const e = () => j(
        lt(
          "Bind",
          { type: "scene", value: An("EndGroup", t, void 0), map: ur.map },
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
                St("Cons", at("CatCons", e, ut(Y, Y)), n._2._2._2)
              )
            );
          f();
        })()
      );
    },
    ut(Y, Y)
  )
), Dr = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, m_ = /* @__PURE__ */ w(gr)(0), $_ = (t) => (n) => (e) => {
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
}, W3 = /* @__PURE__ */ w((t) => (n) => t + n.len)(0), mp = (t) => {
  const n = Bt((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...wt(Et(1, t.length, t))((e) => [2, e.x, e.y]), 5];
  f();
}, $p = (t) => (n) => {
  const e = Dr(n)(Dr(t.w / 2)(t.h / 2));
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
}, q3 = (t) => {
  const n = Bt((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...wt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, $l = (t) => {
  const n = { x: t.x, y: t.y, w: t.w, h: t.h };
  if (t.shape === "Cylinder")
    return Mh(n);
  if (t.shape === "Parallelogram")
    return qh(n);
  if (t.shape === "Diamond")
    return Vh(n);
  if (t.shape === "Ellipse")
    return Wh(n);
  if (t.shape === "Document")
    return Xh(n);
  if (t.shape === "Cloud")
    return jh(n)(7);
  if (t.shape === "Rectangle")
    return $p(n)(7);
  f();
}, zn = (t) => (n) => (e) => I((r) => {
  const o = V(r) / V(e);
  return { x: t.x + (n.x - t.x) * o, y: t.y + (n.y - t.y) * o };
})(Vt(0, e - 1 | 0)), X3 = (t) => {
  const n = De(t.w * 0.18)(t.h * 0.6);
  return [
    ...zn({ x: t.x + n, y: t.y })({ x: t.x + t.w, y: t.y })(16),
    ...zn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w - n, y: t.y + t.h })(16),
    ...zn({ x: t.x + t.w - n, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(16),
    ...zn({ x: t.x, y: t.y + t.h })({ x: t.x + n, y: t.y })(16)
  ];
}, Ws = (t) => (n) => {
  const e = Dr(t)(Dr(n.w / 2)(n.h / 2));
  return { ...n, x: n.x + e, y: n.y + e, w: n.w - 2 * e, h: n.h - 2 * e };
}, If = (t) => (n) => {
  const e = n.y - t.y, r = n.x - t.x;
  return re(r * r + e * e);
}, Y3 = (t) => En((n) => (e) => ({ a: n, b: e, len: If(n)(e) }), t, Et(1, t.length, t)), M3 = (t) => (n) => {
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
        const p = _._1, m = If(p)(l._1), h = If(g._1)(p), $ = Dr(t)(m / 2), y = Dr(t)(h / 2), x = m > 0 ? $ / m : 0, J = p.x + (l._1.x - p.x) * x, N = p.y + (l._1.y - p.y) * x, C = h > 0 ? y / h : 0, k = p.x + (g._1.x - p.x) * C, P = p.y + (g._1.y - p.y) * C;
        return I((E) => {
          const Q = V(E) / V(10), W = 1 - Q;
          return { x: W * W * k + 2 * W * Q * p.x + Q * Q * J, y: W * W * P + 2 * W * Q * p.y + Q * Q * N };
        })(Vt(0, 10));
      }
      return [];
    }),
    ...o
  ];
}, U3 = (t) => (n) => (e) => (r) => (o) => I((i) => {
  const s = V(i) / V(o), u = 1 - s, a = s * s * s, c = 3 * u * s * s, l = 3 * u * u * s, _ = u * u * u;
  return { x: _ * t.x + l * n.x + c * e.x + a * r.x, y: _ * t.y + l * n.y + c * e.y + a * r.y };
})(Vt(0, o - 1 | 0)), K3 = (t) => [
  ...zn({ x: t.x, y: t.y })({ x: t.x + t.w, y: t.y })(12),
  ...zn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h * 0.85 })(12),
  ...U3({ x: t.x + t.w, y: t.y + t.h * 0.85 })({ x: t.x + t.w * 0.66, y: t.y + t.h * 1.05 })({ x: t.x + t.w * 0.34, y: t.y + t.h * 0.65 })({
    x: t.x,
    y: t.y + t.h * 0.85
  })(32),
  ...zn({ x: t.x, y: t.y + t.h * 0.85 })({ x: t.x, y: t.y })(12)
], y_ = (t) => (n) => I((e) => {
  const r = 6.283185307179586 * V(e) / V(64);
  return { x: t.x + n * le(r), y: t.y + n * Ne(r) };
})(Vt(0, 63)), yp = (t) => (n) => {
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
}, V3 = (t) => {
  const n = t.y + t.h / 2, e = De(t.h * 0.4)(t.w * 0.2);
  return [
    ...zn({ x: t.x + e, y: t.y })({ x: t.x + t.w - e, y: t.y })(10),
    ...zn({ x: t.x + t.w - e, y: t.y })({ x: t.x + t.w, y: n })(8),
    ...zn({ x: t.x + t.w, y: n })({ x: t.x + t.w - e, y: t.y + t.h })(8),
    ...zn({ x: t.x + t.w - e, y: t.y + t.h })({ x: t.x + e, y: t.y + t.h })(10),
    ...zn({ x: t.x + e, y: t.y + t.h })({ x: t.x, y: n })(8),
    ...zn({ x: t.x, y: n })({ x: t.x + e, y: t.y })(8)
  ];
}, yl = (t) => {
  const n = t.length;
  return n === 0 ? { x: 0, y: 0 } : { x: m_(I((e) => e.x)(t)) / V(n), y: m_(I((e) => e.y)(t)) / V(n) };
}, bu = (t) => (n) => (e) => (r) => (o) => I((i) => {
  const s = e + (r - e) * (V(i) / V(o));
  return { x: t.x + n * le(s), y: t.y + n * Ne(s) };
})(Vt(0, o - 1 | 0)), Bf = (t) => (n) => {
  const e = Dr(t)(Dr(n.w / 2)(n.h / 2));
  return [
    ...zn({ x: n.x + e, y: n.y })({ x: n.x + n.w - e, y: n.y })(6),
    ...bu({ x: n.x + n.w - e, y: n.y + e })(e)(4.71238898038469)(6.283185307179586)(12),
    ...zn({ x: n.x + n.w, y: n.y + e })({ x: n.x + n.w, y: n.y + n.h - e })(6),
    ...bu({ x: n.x + n.w - e, y: n.y + n.h - e })(e)(0)(1.5707963267948966)(12),
    ...zn({ x: n.x + n.w - e, y: n.y + n.h })({ x: n.x + e, y: n.y + n.h })(6),
    ...bu({ x: n.x + e, y: n.y + n.h - e })(e)(1.5707963267948966)(3.141592653589793)(12),
    ...zn({ x: n.x, y: n.y + n.h - e })({ x: n.x, y: n.y + e })(6),
    ...bu({ x: n.x + e, y: n.y + e })(e)(3.141592653589793)(4.71238898038469)(12)
  ];
}, $a = (t) => (n) => (e) => (r) => (o) => (i) => I((s) => {
  const u = r + (o - r) * (V(s) / V(i));
  return { x: t.x + n * le(u), y: t.y + e * Ne(u) };
})(Vt(0, i - 1 | 0)), j3 = (t) => {
  const n = t.h * 0.38;
  return [
    ...wt(Kh(Uh(Yh)({
      x: t.x,
      y: t.y - n,
      w: t.w,
      h: n
    }))(t.y))((e) => {
      const r = Yo(e.p2.y - e.c.cy)(e.p2.x - e.c.cx), o = Yo(e.p1.y - e.c.cy)(e.p1.x - e.c.cx);
      return $a({ x: e.c.cx, y: e.c.cy })(e.c.r)(e.c.r)(o)(r > o ? r : r + 6.283185307179586)(16);
    }),
    ...zn({ x: t.x + t.w, y: t.y })({ x: t.x + t.w, y: t.y + t.h })(8),
    ...zn({ x: t.x + t.w, y: t.y + t.h })({ x: t.x, y: t.y + t.h })(12),
    ...zn({ x: t.x, y: t.y + t.h })({ x: t.x, y: t.y })(8)
  ];
}, Z3 = (t) => {
  const n = Dr(t.h * 0.075)(t.w * 0.075), e = t.w / 2, r = t.y + n, o = t.y + t.h + 5 - n - 2, i = t.x + e;
  return [
    ...$a({ x: i, y: r })(e)(n)(3.141592653589793)(6.283185307179586)(24),
    ...zn({ x: t.x + t.w, y: r })({ x: t.x + t.w, y: o })(12),
    ...$a({ x: i, y: o })(e)(n)(0)(3.141592653589793)(24),
    ...zn({ x: t.x, y: o })({ x: t.x, y: r })(12)
  ];
}, ri = (t) => (n) => n.shape === "Cylinder" ? Z3(n) : n.shape === "Parallelogram" ? X3(n) : n.shape === "Diamond" ? V3(n) : n.shape === "Ellipse" ? Bf(De(n.w)(n.h) / 2)(n) : n.shape === "Document" ? K3(n) : n.shape === "Cloud" ? j3(n) : Bf(t)(n), tb = (t) => {
  const n = Dr(t.h * 0.075)(t.w * 0.075), e = t.w / 2;
  return $a({ x: t.x + e, y: t.y + n })(e)(n)(0)(3.141592653589793)(24);
}, nb = (t) => (n) => (e) => w((r) => (o) => {
  const i = r.pos + o.len, s = e < i ? (e - r.pos) / o.len : 1, u = { x: o.a.x + (o.b.x - o.a.x) * s, y: o.a.y + (o.b.y - o.a.y) * s }, a = n > r.pos ? (n - r.pos) / o.len : 0, c = { x: o.a.x + (o.b.x - o.a.x) * a, y: o.a.y + (o.b.y - o.a.y) * a }, l = r.points.length - 1 | 0, _ = l >= 0 && l < r.points.length ? (() => {
    const d = r.points[l].x - c.x;
    return (d < 0 ? -d < 1e-4 : d < 1e-4) && (() => {
      const g = r.points[l].y - c.y;
      return g < 0 ? -g < 1e-4 : g < 1e-4;
    })();
  })() ? kt(r.points)(u) : [...r.points, c, u] : [c, u];
  return o.len <= 0 || i <= n || r.pos >= e ? { ...r, pos: i } : { pos: i, points: _ };
})({ pos: 0, points: [] })(t).points, eb = (t) => (n) => (e) => {
  const r = Bt((o) => v, (o) => (i) => T("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just") {
    const o = Y3(t), i = W3(o), s = $_(0)(i)(n * i), u = $_(0)(i)(e * i);
    return u <= s ? [] : nb(o)(s)(u);
  }
  f();
}, rb = (t) => (n) => (e) => (r) => {
  const o = r.x - e.x, i = r.y - e.y, s = n.x - t.x, u = n.y - t.y, a = e.x - t.x, c = e.y - t.y, l = s * i - u * o, _ = (a * i - c * o) / l, d = (a * u - c * s) / l;
  return (l < 0 ? -l < 1e-9 : l < 1e-9) ? v : _ >= 0 && _ <= 1 && d >= 0 && d <= 1 ? T("Just", _) : v;
}, ob = (t) => (n) => (e) => {
  const r = It((o) => (i) => it.compare(o.t)(i.t))(Nt((o) => {
    const i = rb(n)(e)(o._1)(o._2);
    return i.tag === "Just" ? T("Just", { t: i._1, p: { x: n.x + (e.x - n.x) * i._1, y: n.y + (e.y - n.y) * i._1 } }) : v;
  })(En(jn, t, [...Et(1, t.length, t), ...Et(0, 1, t)])));
  return 0 < r.length ? T("Just", r[0].p) : v;
}, x_ = (t) => (n) => {
  const e = Me(n);
  if (e.tag === "Nothing")
    return n;
  if (e.tag === "Just") {
    const r = e._1.init.length - 1 | 0;
    if (r >= 0 && r < e._1.init.length) {
      const o = ob(t)(e._1.init[r])(e._1.last);
      if (o.tag === "Just")
        return kt(e._1.init)(o._1);
      if (o.tag === "Nothing")
        return n;
      f();
    }
    return n;
  }
  f();
}, po = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Df = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, ib = (t) => (n) => (e) => {
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
}, sb = (t) => (n) => {
  const e = po(0)(t.y + 4 - n.y) + po(0)(n.y + n.h - (t.y + t.h - 4)), r = po(0)(t.x + 4 - n.x) + po(0)(n.x + n.w - (t.x + t.w - 4));
  return r * n.h + e * n.w + r * e;
}, ub = (t) => (n) => {
  const e = t.y + t.h - 6, r = t.y + 6, o = t.x + 14, i = t.x + t.w - 14, s = w(po)(0)(I((u) => o - 10 < u.x + u.w + 12 && i + 10 > u.x - 12 && r - 10 < u.y + u.h + 12 && e + 10 > u.y - 12 ? Df((u.x + u.w + 12 - (o - 10)) / 0.7071067811865476)((e + 10 - (u.y - 12)) / 0.7071067811865476) : 0)(n));
  return { ...t, x: t.x + s * 0.7071067811865476, y: t.y - s * 0.7071067811865476 };
}, ab = (t) => (n) => {
  const e = Df(t.x + t.w)(n.x + n.w) - po(t.x)(n.x), r = Df(t.y + t.h)(n.y + n.h) - po(t.y)(n.y);
  return t.x < n.x + n.w && t.x + t.w > n.x && t.y < n.y + n.h && t.y + t.h > n.y ? e * r : 0;
}, v_ = (t) => (n) => (e) => (r) => {
  const o = t + 4, i = po(0)(n - 8), s = o + i - e;
  return e <= i ? ib(o)(s)(r) : t + (n - e) / 2;
}, zf = (t) => (n) => ({ ...n, x: v_(t.x)(t.w)(n.w)(n.x), y: v_(t.y)(t.h)(n.h)(n.y) }), cb = (t) => {
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
}, fb = (t) => (n) => (e) => (r) => (o) => {
  const i = o.y + o.h / 2 - e.token.y, s = o.y - r.y;
  return (() => {
    const u = o.x + o.w / 2 - e.token.x, a = o.x - r.x;
    return 1e6 * sb(t)(o) + 1e4 * w((c) => (l) => c + ab(o)(l))(0)(n) + 0.05 * (a * a + s * s) + 0.01 * (u * u + i * i);
  })() + (o.y > e.token.y ? 100 : 0);
}, lb = (t) => (n) => (e) => (r) => {
  const o = (s) => {
    const u = zf(t)(s);
    return { rect: u, score: fb(t)(n)(e)(r)(u) };
  }, i = Bt((s) => v, (s) => (u) => T("Just", { head: s, tail: u }), [r, e.rect, ...cb(e)]);
  if (i.tag === "Nothing")
    return zf(t)(r);
  if (i.tag === "Just")
    return w((s) => (u) => {
      const a = o(u);
      return a.score < s.score ? a : s;
    })(o(i._1.head))(i._1.tail).rect;
  f();
}, gb = (t) => (n) => (e) => w((r) => (o) => {
  const i = ub(o.rect)(r.obstacles), s = i.x >= t.x + 4 && i.y >= t.y + 4 && i.x + i.w <= t.x + t.w - 4 && i.y + i.h <= t.y + t.h - 4 ? i : lb(t)(r.obstacles)(o)(i);
  return { acc: tt(F)(o.id)(s)(r.acc), obstacles: kt(r.obstacles)(s) };
})({ acc: D, obstacles: n })(e).acc, xl = (t) => t, Mr = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Vo = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, _b = /* @__PURE__ */ ji(u0)(Yt), db = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, hb = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, T_ = /* @__PURE__ */ xl("SegMove"), pb = /* @__PURE__ */ xl("SegLine"), mb = /* @__PURE__ */ xl("SegQuad"), w_ = { offset: 0.4, passes: 1, rMax: 1.5 }, xp = (t) => dn(Ue(t.x * 7919 + t.y * 3001 + t.w * 113 + t.h * 17 + 1)) * -1640531535 | 0, ya = (t) => (n) => (e) => () => {
  t.push(3), t.push(n.x), t.push(n.y), t.push(e.x), t.push(e.y);
}, fc = (t) => (n) => () => {
  t.push(1), t.push(n.x), t.push(n.y);
}, Vr = (t) => (n) => () => {
  t.push(2), t.push(n.x), t.push(n.y);
}, qs = /* @__PURE__ */ (() => {
  const t = w((n) => (e) => ((n * 31 | 0) + dn(Ue(e.x * 100)) | 0) + dn(Ue(e.y * 100)) | 0)(1);
  return (n) => t(n) * -1640531535 | 0;
})(), $b = (t) => {
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
        n.push({ kind: T_, m: i, c: i, p: u, len: 0 }), r = u, e = o + 3 | 0;
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
        n.push({ kind: pb, m: i, c: i, p: u, len: re(a * a + c * c) }), r = u, e = o + 3 | 0;
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
          kind: mb,
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
          len: re(a * a + c * c) * 1.05
        }), r = u, e = o + 5 | 0;
        continue;
      }
      if (s._1 === 5) {
        n.push({ kind: T_, m: i, c: i, p: i, len: 0 }), e = o + 1 | 0;
        continue;
      }
      e = t.length;
      continue;
    }
    f();
  }
  return n;
}, yb = (t) => (n) => {
  const e = n.length - 1 | 0, r = e < 1 ? [] : Et(0, e, n), o = (() => {
    const s = r.length - 1 | 0;
    return s >= 0 && s < r.length ? T("Just", r[s]) : v;
  })(), i = n.length - 1 | 0;
  if (i >= 0 && i < n.length && o.tag === "Just") {
    const s = n[i].y - o._1.y, u = n[i].x - o._1.x, a = re(u * u + s * s);
    return a <= 1e-4 ? n : kt((() => {
      const c = n.length - 1 | 0;
      return c < 1 ? [] : Et(0, c, n);
    })())({ x: n[i].x + u / a * t, y: n[i].y + s / a * t });
  }
  return n;
}, xb = (t) => (n) => (e) => fn(w((r) => (o) => {
  const i = Dn(0)(t)(r.prng), s = Dn(0)(6.283185307179586)(i.prng);
  return { prng: s.prng, out: [{ x: o.x + i.value * le(s.value), y: o.y + i.value * Ne(s.value) }, ...r.out] };
})({ prng: n, out: [] })(e).out), vb = (t) => (n) => (e) => {
  if (n.kind === "SegMove")
    return fc(t)(n.p);
  if (n.kind === "SegLine")
    return Vr(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  if (n.kind === "SegQuad")
    return Vr(t)({ x: n.m.x + (n.p.x - n.m.x) * e, y: n.m.y + (n.p.y - n.m.y) * e });
  f();
}, Tb = (t) => (n) => {
  if (n.kind === "SegMove")
    return fc(t)(n.p);
  if (n.kind === "SegLine")
    return Vr(t)(n.p);
  if (n.kind === "SegQuad")
    return ya(t)(n.c)(n.p);
  f();
}, vp = (t) => (n) => {
  const e = $b(n), r = w((u) => (a) => u + a.len)(0)(e) * Mr(0)(Vo(1)(t)), o = [];
  let i = 0, s = 0;
  for (; s < e.length; ) {
    const u = s, a = i;
    if (u >= 0 && u < e.length) {
      if (a + e[u].len <= r) {
        const c = e[u];
        Tb(o)(c)(), i = a + c.len, s = u + 1 | 0;
        continue;
      }
      if (a >= r) {
        s = e.length;
        continue;
      }
      vb(o)(e[u])((r - a) / Mr(e[u].len)(1e-4))();
    }
    s = e.length;
  }
  return o;
}, N_ = { offset: 1.5, passes: 2, rMax: 14, overshoot: 2.5 }, Tp = (t) => (n) => (e) => (r) => {
  const o = r.y - e.y, i = e.y - n.y, s = r.x - e.x, u = re(s * s + o * o), a = e.x - n.x, c = re(a * a + i * i), l = Vo(t.rMax * (S2(c > 0 && u > 0 ? Mr(-1)(Vo(1)((a * s + i * o) / (c * u))) : 1) / 3.141592653589793))(0.4 * Vo(c)(u));
  return { inP: c > 0 ? { x: e.x - a / c * l, y: e.y - i / c * l } : e, curr: e, outP: u > 0 ? { x: e.x + s / u * l, y: e.y + o / u * l } : e };
}, wp = (t) => (n) => {
  const e = n.length, r = [], o = 0 < n.length ? T("Just", n[0]) : v;
  if (o.tag === "Just" ? fc(r)(o._1)() : o.tag === "Nothing" || f(), e >= 3) {
    let s = 1;
    for (; s <= (e - 2 | 0); ) {
      const u = s, a = u + 1 | 0;
      if (a >= 0 && a < n.length) {
        if (u >= 0 && u < n.length) {
          const c = u - 1 | 0;
          if (c >= 0 && c < n.length) {
            const l = Tp(t)(n[c])(n[u])(n[a]);
            Vr(r)(l.inP)(), ya(r)(l.curr)(l.outP)();
          }
        }
        s = u + 1 | 0;
        continue;
      }
      s = u + 1 | 0;
    }
  }
  const i = n.length - 1 | 0;
  return i >= 0 && i < n.length && e >= 2 && Vr(r)(n[i])(), r;
}, wb = (t) => (n) => (e) => (r) => (o) => {
  if (o.length < 4)
    return wp(t)(o);
  const i = 0 < o.length ? T("Just", o[0]) : v, s = (() => {
    if (i.tag === "Nothing")
      return { x: 0, y: 0 };
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = o.length - 1 | 0, a = no(no(n)(u) + u | 0)(u), c = (g) => {
    const p = no(g + u | 0)(u);
    return p >= 0 && p < o.length ? o[p] : s;
  }, l = I((g) => Tp(t)(c((a + g | 0) - 1 | 0))(c(a + g | 0))(c((a + g | 0) + 1 | 0)))(Vt(
    0,
    u - 1 | 0
  )), _ = [], d = 0 < l.length ? T("Just", l[0]) : v;
  if (d.tag === "Just")
    if (fc(_)(d._1.outP)(), _b((() => {
      const g = Bt((p) => v, (p) => (m) => T("Just", m), l);
      if (g.tag === "Nothing")
        return [];
      if (g.tag === "Just")
        return g._1;
      f();
    })())((g) => {
      const p = Vr(_)(g.inP);
      return () => (p(), ya(_)(g.curr)(g.outP)());
    })(), e)
      Vr(_)(d._1.inP)(), ya(_)(d._1.curr)(d._1.outP)(), _.push(5);
    else {
      const g = l.length - 1 | 0;
      g >= 0 && g < l.length ? Vr(_)((() => {
        const p = 1 - r;
        return { x: l[g].outP.x + (d._1.inP.x - l[g].outP.x) * p, y: l[g].outP.y + (d._1.inP.y - l[g].outP.y) * p };
      })())() : Vr(_)(d._1.inP)();
    }
  else d.tag === "Nothing" || f();
  return _;
}, Gi = (t) => (n) => (e) => (r) => {
  const o = db(1)(r.length - 1 | 0), i = Dn(0)(V(o))(Af("shape")(n)), s = hb(o - 1 | 0)(dn(Ue(i.value))), u = i.prng;
  return I((a) => {
    const c = Dn(0)(1)(Af(an(a))(u)), l = Dn(-0.18)(0.3)(c.prng), _ = c.value < 0.7, d = Dn(0.5)(0.85)(l.prng), g = xb(t.offset)(d.prng)(r);
    return { path: e ? wb(t)(s)(_)(l.value)(g) : wp(t)(g), alpha: d.value };
  })(Vt(0, t.passes - 1 | 0));
}, Nb = (t) => (n) => (e) => Gi(t)(n)(!0)([
  { x: e.x, y: e.y },
  { x: e.x + e.w, y: e.y },
  { x: e.x + e.w, y: e.y + e.h },
  { x: e.x, y: e.y + e.h },
  { x: e.x, y: e.y }
]), Jb = (t) => (n) => (e) => {
  const r = Mr(0)(Vo(1)(e)), o = n.h / V(4), i = Mr(6)(o * 1.4);
  return Nt((s) => s)(I((s) => {
    if (r < Mr(0)(V(s) / V(4) - 0.05))
      return v;
    const u = Af(an(s))(t), a = Mr(0)(V(s) / V(4) - 0.05), c = no(s)(2) === 0, l = c ? n.x - 2 : n.x + n.w + 2, _ = c ? n.x + n.w + 2 : n.x - 2, d = n.y + (V(s) + 0.5) * o;
    return T(
      "Just",
      {
        path: vp(Mr(0)(Vo(1)((r - a) / Mr(1e-4)(Vo(1)(V(s + 1 | 0) / V(4) + 0.05) - a))))((() => {
          const g = { rMax: 2, offset: 0.6, passes: 1 }, p = fn(w((h) => ($) => {
            const y = Dn(-o * 0.08)(o * 0.08)(h.prng);
            return { prng: y.prng, out: [{ x: l + (_ - l) * (V($) / V(4)), y: d + y.value }, ...h.out] };
          })({ prng: u, out: [] })(Vt(0, 4)).out), m = p.length < 2 ? [] : Gi(g)(u)(!1)(p);
          return 0 < m.length ? m[0].path : [];
        })()),
        width: i,
        alpha: 1
      }
    );
  })(Vt(0, 3)));
}, Mc = (t, n, e) => ({ tag: t, _1: n, _2: e }), xa = (t) => (n) => (e) => {
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
}, ge = /* @__PURE__ */ (() => {
  const t = pe.unfoldr(Ze);
  return (n) => t(_e("IterNode", n, je));
})(), Cr = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, zo = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, io = (t) => (e) => {
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
}, Cb = Yt.foldMap(q2), Bu = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Np = /* @__PURE__ */ hn(F)(Yt), Jp = (t) => (e) => {
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
}, bb = /* @__PURE__ */ V1(F), kb = (t) => (e) => {
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
}, oi = (t) => {
  const n = t.Apply0();
  return (e) => w((r) => (o) => n.apply(n.Functor0().map((i) => o0)(r))(e(o)))(t.pure());
}, fo = /* @__PURE__ */ oi(ei), Cp = (t) => (n) => (e) => (r) => (o) => (i) => {
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
  })(), p = __(128)(ri(4)(Ws(2)(n)))(y_(l)(6)), m = l.x - u.x, h = 2 * (() => {
    const H = l.y - u.y;
    return (m < 0 ? -m : m) + (H < 0 ? -H : H);
  })(), $ = g.x - s.x, y = 2 * (() => {
    const H = g.y - s.y;
    return ($ < 0 ? -$ : $) + (H < 0 ? -H : H);
  })(), x = h + Vs(t) + y, J = x <= 1e-4 ? 1 : 1 - y / x, N = x <= 1e-4 ? 0 : h / x, C = J - N, k = __(128)(y_(g)(6))(ri(4)(Ws(2)(e))), P = { maxDelay: 0.4, smoothPasses: 2 }, E = ti(t)(xa(0)(1)(C <= 1e-4 ? 0 : (a - N) / C)), Q = (() => {
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
  })(), B = (() => {
    if (N <= 1e-4)
      return 1;
    const H = a / N, rt = H < 0 ? 0 : H > 1 ? 1 : H;
    return rt * rt * (3 - 2 * rt);
  })();
  return a < N ? qo("PolyShape", h_(B)(p.from)(p.to)(P)) : a >= J ? qo("PolyShape", h_(W)(k.from)(k.to)(P)) : qo("CircleShape", Q, 6);
}, vl = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Cp(t)(n)(e)(r)(o)(i);
  if (s.tag === "PolyShape")
    return yl(s._1);
  if (s.tag === "CircleShape")
    return s._1;
  f();
}, Tl = /* @__PURE__ */ (() => {
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
        chipText: qr,
        nodeFill: wn,
        nodeStroke: qr,
        text: qr,
        edge: qr,
        arrowFill: qr,
        tokenOutsideFill: qr,
        tokenOutsideStroke: wn,
        tokenInside: wn,
        tokenInsideStroke: wn,
        tokenInsideBlend: Iu,
        tokenInsideAlpha: 1,
        chipPillFill: qr,
        chipPillText: wn,
        chipHairline: { r: 26, g: 26, b: 26, a: 90 },
        trailDot: qr,
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
        nodeFill: qr,
        nodeStroke: n,
        text: n,
        edge: n,
        arrowFill: n,
        tokenOutsideFill: wn,
        tokenOutsideStroke: wn,
        tokenInside: wn,
        tokenInsideStroke: wn,
        tokenInsideBlend: Iu,
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
        tokenInsideBlend: Iu,
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
})(), Hf = (t) => (n) => wt(ge(t.nodes))((e) => {
  const r = Hn(e._1)(n.nodes);
  return r.tag === "Just" && fi(r._1).alpha > 0 ? $l(e._2) : [];
}), Sb = (t) => (n) => (e) => [
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
  ...Hf(n)(e)
], Lb = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = bo.traverse(r);
  return (i) => (s) => {
    const u = Hr(s), a = 0.32 * i.size;
    return o((c) => e.bind(c === 0 ? r.pure(0) : t.measureText(i)(On(c)(s)))((l) => e.bind(t.measureText(i)(On(c + 1 | 0)(s)))((_) => e.bind(t.measureInk(i)(c >= 0 && c < u.length ? ts(u[c]) : " "))((d) => r.pure({ x: l, w: _ - l, up: d.ascent - a, down: d.descent + a })))))(Vt(
      0,
      u.length - 1 | 0
    ));
  };
}, Eb = (t) => (n) => {
  const e = (o) => (o.x - n.x) * (o.x - n.x) + (o.y - n.y) * (o.y - n.y), r = w((o) => (i) => e(i) < e(o) ? i : o)({ x: t.x, y: t.y })([{ x: t.x, y: t.y }, { x: t.x + t.w, y: t.y }, { x: t.x, y: t.y + t.h }, { x: t.x + t.w, y: t.y + t.h }]);
  return I((o) => {
    const i = V(o) / 5;
    return { x: r.x + (n.x - r.x) * i, y: r.y + (n.y - r.y) * i };
  })([1, 2, 3, 4]);
}, Qf = (t) => {
  const n = ao(`
`)(t);
  return n.length === 0 ? [""] : n;
}, Pb = (t) => (n) => (e) => (r) => (o) => (i) => {
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
  })(), y = m + Vs(t) + $, x = y <= 1e-4 ? 1 : 1 - $ / y, J = y <= 1e-4 ? 0 : m / y, N = x - J, C = ti(t)(xa(0)(1)(N <= 1e-4 ? 0 : (a - J) / N)), k = (() => {
    if (C.tag === "Just")
      return C._1;
    if (C.tag === "Nothing")
      return l;
    f();
  })();
  return a < J ? Mc("InsideRect", Ws(2)(n)) : a >= x ? Mc("InsideRect", Ws(2)(e)) : Mc("InsideBall", k, 6);
}, Of = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = (a, c) => pp({
    id: a,
    pass: t,
    geometry: sp("FlatToken", c),
    position: (() => {
      if (c.tag === "CircleShape")
        return c._1;
      if (c.tag === "PolyShape")
        return yl(c._1);
      f();
    })(),
    plan: ap("FlatTokenPlan", { wobble: e, fill: i, stroke: s })
  });
  return fo((a) => {
    if (a._2.tag === "Travelling") {
      const c = Hn(a._2._1.target)(r.nodes), l = Hn(a._2._1.source)(r.nodes);
      if (l.tag === "Just" && c.tag === "Just") {
        const _ = io(a._2._1.edge)(r.edges);
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
                const g = Pb(d)(l._1)(c._1)(a._2._1.progress)(a._2._1.holdPre)(a._2._1.holdPost);
                if (g.tag === "InsideRect")
                  return qo("PolyShape", Bf(4)(g._1));
                if (g.tag === "InsideBall")
                  return qo("CircleShape", g._1, g._2);
                f();
              }
              return Cp(d)(l._1)(c._1)(a._2._1.progress)(a._2._1.holdPre)(a._2._1.holdPost);
            })()
          );
        }
        if (_.tag === "Nothing") {
          const d = Ui(a._2._1.holdPre)(a._2._1.holdPost)(a._2._1.progress), g = { x: l._1.x + l._1.w / 2, y: l._1.y + l._1.h / 2 }, p = { x: c._1.x + c._1.w / 2, y: c._1.y + c._1.h / 2 };
          return ce({
            path: [],
            role: Se,
            layer: v,
            effects: [
              Rn(
                "GroupAlpha",
                (() => {
                  if (d < 0.5) {
                    const h = d * 2;
                    return 1 - Cr(0)(zo(1)(h)) * Cr(0)(zo(1)(h)) * (3 - 2 * Cr(0)(zo(1)(h)));
                  }
                  const m = (d - 0.5) * 2;
                  return Cr(0)(zo(1)(m)) * Cr(0)(zo(1)(m)) * (3 - 2 * Cr(0)(zo(1)(m)));
                })()
              )
            ]
          })(u(a._1, qo("CircleShape", d < 0.5 ? g : p, 6)));
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
          qo(
            "PolyShape",
            ri(4)(Ws(2)(c._1))
          )
        );
      if (c.tag === "Nothing")
        return j(lt("Return", void 0), dt);
      f();
    }
    return j(lt("Return", void 0), dt);
  })(ge(o.tokens));
}, Ab = (t) => {
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
}, bp = (t) => (n) => (e) => (r) => ce({
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
})(ou(r)), kp = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => {
  const l = fi(c), _ = c.tag === "PloppingOut" && r.wobble ? { alpha: 1, scale: 1 } : l, d = ao(`
`)(a.label === "" ? u : a.label), g = d.length === 0 ? [""] : d, p = { family: r.fontFamily, size: r.wobble ? 15 : 11, weight: r.wobble ? 800 : 500 }, m = p.size * 1.2, h = { tx: (a.x + a.w / 2) * (1 - _.scale), ty: (a.y + a.h / 2) * (1 - _.scale), sx: _.scale, sy: _.scale }, $ = (a.shape === "Cylinder" ? (a.y + (a.y + a.h + 5 - 2 * De(a.h * 0.075)(a.w * 0.075))) / 2 : (a.y + a.y + a.h) / 2) - V(g.length) * m / 2 + m / 2, y = ml({
    id: u,
    role: t,
    geometry: _l("FlatNode", { shape: a.shape, bounds: { x: a.x, y: a.y, w: a.w, h: a.h } }),
    alpha: o,
    plan: dl(
      "FlatNodePlan",
      { palette: r, label: a.label, labelVisibility: n, inkBoost: e, labelAlpha: i, arrival: s, animState: c }
    )
  }), x = () => {
    if (n === "LabelsHidden")
      return j(lt("Return", void 0), dt);
    if (n === "LabelsShown") {
      const J = ce({
        path: [],
        role: Se,
        layer: v,
        effects: [
          Rn("GroupAlpha", _.alpha * o),
          Rn("GroupTransform", Fi, h),
          Rn("GroupAlpha", i)
        ]
      })(fo((N) => ou({
        owner: li("NodeText", u),
        text: N._2,
        spec: {
          x: a.x + a.w / 2,
          y: $ + V(N._1) * m,
          content: N._2,
          font: p,
          color: r.text,
          align: co,
          baseline: Ke
        },
        bounds: v,
        plan: ac
      }))(Xt(jn)(g)));
      return i > 0 && _.alpha * o > 0 ? J : j(lt("Return", void 0), dt);
    }
    f();
  };
  return j(
    y._1,
    (() => {
      if (y._2.tag === "CatNil")
        return at("CatCons", x, ut(Y, Y));
      if (y._2.tag === "CatCons")
        return at(
          "CatCons",
          y._2._1,
          ut(
            y._2._2._1,
            St("Cons", at("CatCons", x, ut(Y, Y)), y._2._2._2)
          )
        );
      f();
    })()
  );
}, Rb = (t) => (n) => (e) => (r) => (o) => (i) => (s) => bp(o)(i)(s)({
  owner: li("TokenText", t),
  text: e,
  spec: {
    x: i.x,
    y: i.y,
    content: e,
    font: { family: n.fontFamily, size: 11, weight: 500 },
    color: n.chipText,
    align: co,
    baseline: Ke
  },
  bounds: T("Just", o),
  plan: ru(
    "TokenFillingText",
    {
      shadow: { ...o, y: o.y + 1.5 },
      shadowFill: { color: n.chipShadow, flat: !0 },
      radius: 6,
      fill: { color: n.chip, flat: !0 },
      stroke: { color: n.chipHairline, width: 1, lineJoin: ue, lineCap: Ve },
      leader: [1, i.x, o.y + o.h, 2, r.x + r.w / 2, r.y]
    }
  )
}), Fb = { offset: 0.8, passes: 2, rMax: 5 }, Wf = (t) => (n) => (e) => (r) => ce({
  path: [],
  role: Se,
  layer: T("Just", OC),
  effects: [Rn("GroupClip", Sb(n)(e)(r), YC)]
})(Of(fp)(!1)(t.wobble)(e)(r)(t.tokenOutsideFill)(t.tokenOutsideStroke)), Sp = (t) => (n) => (e) => (r) => {
  if (n.tokenInsideBlend === "Difference") {
    const o = Q3(t), i = (s) => {
      const u = ce({
        path: [],
        role: Se,
        layer: T("Just", WC),
        effects: [
          Rn("GroupBlend", Iu),
          Rn("GroupClip", Hf(e)(r), Qs)
        ]
      })(Of(p_)(s === "ConvexAbsorb")(n.wobble)(e)(r)(n.tokenInside)(n.tokenInsideStroke)), a = () => ce({
        path: [],
        role: Se,
        layer: T("Just", qC),
        effects: []
      })(fo((c) => {
        const l = Hn(c._1)(r.nodes);
        return l.tag === "Just" && fi(l._1).alpha > 0 ? cc(uc(
          "FloorOverlay",
          {
            path: $l(c._2),
            fill: T("Just", { color: wn, flat: !1 }),
            stroke: v
          }
        )) : j(lt("Return", void 0), dt);
      })(ge(e.nodes)));
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
                St("Cons", at("CatCons", a, ut(Y, Y)), u._2._2._2)
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
              St("Cons", at("CatCons", i, ut(Y, Y)), o._2._2._2)
            )
          );
        f();
      })()
    );
  }
  if (n.tokenInsideBlend === "Normal")
    return ce({
      path: [],
      role: Se,
      layer: v,
      effects: [
        Rn("GroupClip", Hf(e)(r), Qs),
        Rn("GroupAlpha", n.tokenInsideAlpha)
      ]
    })(Of(p_)(!1)(n.wobble)(e)(r)(n.tokenInside)(n.tokenInsideStroke));
  f();
}, J_ = (t) => (n) => (e) => (r) => t.strokePath((() => {
  const o = Bt(
    (i) => v,
    (i) => (s) => T("Just", { head: i, tail: s }),
    I((i) => i.pt)(w2(
      (i) => (s) => {
        const u = V(s) / V(72), a = Dn(-0.18)(0.18)(i.prng), c = Dn(-0.1)(0.1)(a.prng), l = Dn(-0.07)(0.07)(c.prng), _ = e * (0.05 + 0.55 * u) * (1 + c.value), d = u * 28.274333882308138 + a.value;
        return { prng: l.prng, pt: { x: n.x + le(d) * _ + l.value * e, y: n.y + Ne(d) * _ + l.value * e } };
      },
      { prng: 137, pt: { x: n.x, y: n.y } },
      Vt(0, 72)
    ))
  );
  if (o.tag === "Just")
    return [1, o._1.head.x, o._1.head.y, ...Cb((i) => [2, i.x, i.y])(o._1.tail)];
  if (o.tag === "Nothing")
    return [];
  f();
})())({ color: r, width: 5.5, lineJoin: ue, lineCap: dr }), Gb = (t) => {
  const n = t.Monad0().Applicative0();
  return (e) => {
    if (e.geometry.tag === "FlatToken" && e.plan.tag === "FlatTokenPlan") {
      if (e.geometry._1.tag === "CircleShape")
        return e.plan._1.wobble ? J_(t)(e.geometry._1._1)(e.geometry._1._2)({ r: 200, g: 35, b: 30, a: 220 }) : t.fillStrokePath(yp(e.geometry._1._1)(e.geometry._1._2))({
          color: e.plan._1.fill,
          flat: !0
        })({ color: e.plan._1.stroke, width: 1, lineJoin: ue, lineCap: Ve });
      if (e.geometry._1.tag === "PolyShape")
        return e.plan._1.wobble && e.geometry._1._1.length >= 3 ? J_(t)(yl(e.geometry._1._1))(6)({ r: 200, g: 35, b: 30, a: 220 }) : e.geometry._1._1.length >= 3 ? t.fillStrokePath(mp(e.geometry._1._1))({ color: e.plan._1.fill, flat: !0 })({
          color: e.plan._1.stroke,
          width: 1,
          lineJoin: ue,
          lineCap: Ve
        }) : n.pure();
      f();
    }
    return n.pure();
  };
}, Ib = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = t.popClip, i = t.popTransform, s = t.popAlpha;
  return (u) => (a) => (c) => (l) => {
    const _ = fi(l), d = { ...c, y: c.y + 5 }, g = d.x + d.w / 2, p = d.y + d.h / 2, m = r.bind(t.pushAlpha(_.alpha))(() => r.bind(t.pushTransform({
      tx: g * (1 - _.scale),
      ty: p * (1 - _.scale),
      sx: _.scale,
      sy: _.scale
    }))(() => r.bind(t.drawRoundedRect({ x: d.x, y: d.y, w: d.w, h: d.h })(7)(T("Just", { color: u.shadowFill, flat: !0 }))(v))(() => r.bind((() => {
      const h = r.bind(t.pushClip($p(d)(7))(Qs))(() => r.bind(t.backgroundDots({
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
      { color: u.nodeStroke, width: 1.25, lineJoin: ue, lineCap: Ve }
    )))(() => r.bind(i)(() => s))))));
    return _.alpha > 0 && !u.wobble ? m : e.pure();
  };
}, Lp = (t) => (n) => (e) => (r) => fo((o) => {
  const i = Hn(o._1)(r.nodes);
  if (i.tag === "Just")
    return ml({
      id: o._1,
      role: D3,
      geometry: _l("FlatNode", { shape: o._2.shape, bounds: { x: o._2.x, y: o._2.y, w: o._2.w, h: o._2.h } }),
      alpha: 1,
      plan: dl(
        "FlatNodePlan",
        {
          palette: t,
          label: o._2.label,
          labelVisibility: ma,
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
})(ge(e.nodes)), Ep = (t) => (n) => (e) => {
  const r = { ...t, nodeFill: t.text, text: t.nodeFill, nodeStroke: t.nodeFill };
  return fo((o) => {
    const i = Hn(o._1)(e.nodes), s = Hn(o._1)(n.nodes), u = s.tag === "Just" && i.tag === "Just" ? ce({
      path: [],
      role: Se,
      layer: v,
      effects: [Rn("GroupAlpha", o._2)]
    })(kp(z3)(pl)(1)(r)(1)(1)(v)(o._1)(s._1)(i._1)) : j(lt("Return", void 0), dt);
    return o._2 > 0 ? u : j(lt("Return", void 0), dt);
  })(ge(e.nodeInvert));
}, Bb = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = oi(n.Applicative0());
  return (i) => (s) => (u) => o((a) => e.bind(t.pushAlpha(a.alpha))(() => e.bind(t.strokePath(a.path)({
    color: i.nodeFill,
    width: a.width,
    lineJoin: ue,
    lineCap: dr
  }))(() => r)))(Jb(xp(s) + 7777 | 0)(s)(u));
}, Db = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = t.popAlpha, o = n.Applicative0(), i = oi(o), s = t.popClip, u = oi(o), a = bo.traverse(o), c = Lb(t), l = Bb(t), _ = t.popTransform;
  return (d) => (g) => (p) => (m) => (h) => ($) => (y) => (x) => (J) => {
    const N = (R) => e.bind(t.pushAlpha(R.alpha))(() => e.bind(t.strokePath(R.path)({
      color: p.nodeStroke,
      width: 2,
      lineJoin: ue,
      lineCap: dr
    }))(() => r)), C = { family: p.fontFamily, size: p.wobble ? 15 : 11, weight: p.wobble ? 800 : 500 }, k = ao(`
`)(x.label === "" ? y : x.label), P = k.length === 0 ? [""] : k, E = C.size * 1.2, Q = x.shape === "Cylinder" ? t.strokePath(o3({ x: x.x, y: x.y, w: x.w, h: x.h }))({
      color: p.nodeStroke,
      width: 1.25,
      lineJoin: ue,
      lineCap: Ve
    }) : o.pure(), W = (x.shape === "Cylinder" ? (x.y + (x.y + x.h + 5 - 2 * De(x.h * 0.075)(x.w * 0.075))) / 2 : (x.y + x.y + x.h) / 2) - V(P.length) * E / 2 + E / 2, B = J.tag === "PloppingOut" && p.wobble ? J._1 : -1, H = B >= 0, rt = fi(J), ot = H ? { alpha: 1, scale: 1 } : rt, M = x.x + x.w / 2, q = x.y + x.h / 2, A = e.bind(t.pushAlpha(ot.alpha * m))(() => e.bind(t.pushTransform({
      tx: M * (1 - ot.scale),
      ty: q * (1 - ot.scale),
      sx: ot.scale,
      sy: ot.scale
    }))(() => {
      const R = { x: x.x, y: x.y, w: x.w, h: x.h }, X = {
        color: p.nodeStroke,
        width: p.wobble ? 2 : 1.25 * g,
        lineJoin: ue,
        lineCap: p.wobble ? dr : Ve
      };
      return e.bind((() => {
        if (p.wobble) {
          if (x.shape === "Rectangle")
            return i(N)(Nb(N_)(xp(R))(R));
          const L = ri(7)(x);
          return e.bind(i(N)((() => {
            const G = qs(L);
            return L.length < 4 ? [] : Gi(w_)(G)(!0)(L);
          })()))(() => u((G) => i(N)((() => {
            const z = qs(G);
            return G.length < 2 ? [] : Gi(w_)(z)(!1)(G);
          })()))(x.shape === "Cylinder" ? [tb(x)] : []));
        }
        return e.bind(s3(t)(x.shape)(R)(7)(T("Just", { color: p.nodeFill, flat: !1 }))(T(
          "Just",
          X
        )))(() => Q);
      })())(() => e.bind((() => {
        if ($.tag === "Just" && p.wobble && !H) {
          const L = $._1;
          return e.bind(a(c(C))(P))((G) => {
            const z = It((ft) => (mt) => it.compare(ft.x)(mt.x)), U = dn(Ue(x.x * 7919 + x.y * 3001)) * -1640531535 | 0, K = Dn(5)(7.5)(U), O = Dn(0)(K.value)(K.prng), Z = -(1 + 2 * Dn(-1)(1)(O.prng).value * 3.141592653589793 / 180), et = (ft, mt, Ft, Lt, Qt) => z(Nt((nn) => nn)([
              Z * mt + ft >= Lt && Z * mt + ft <= Qt ? T("Just", { x: mt, y: Z * mt + ft }) : v,
              Z * Ft + ft >= Lt && Z * Ft + ft <= Qt ? T("Just", { x: Ft, y: Z * Ft + ft }) : v,
              (() => {
                const nn = (Lt - ft) / Z;
                return nn >= mt && nn <= Ft ? T("Just", { x: nn, y: Lt }) : v;
              })(),
              (() => {
                const nn = (Qt - ft) / Z;
                return nn >= mt && nn <= Ft ? T("Just", { x: nn, y: Qt }) : v;
              })()
            ])), nt = K.value, gt = no(L.frameHash)(3), ct = gt === 0 ? { r: 200, g: 35, b: 30, a: 220 } : gt === 1 ? { r: 35, g: 150, b: 80, a: 220 } : { r: 30, g: 80, b: 200, a: 220 }, $t = x.x + x.w / 2, At = Ee(Xt((ft) => (mt) => Xt((() => {
              const Ft = W + V(ft) * E, Lt = $t - w((Qt) => (nn) => Qt + nn.w)(0)(mt) / 2;
              return (Qt) => (nn) => {
                const me = C.size * 0.1, Xn = Qt - 1 | 0, te = Xn >= 0 && Xn < mt.length && Qt > 0 ? (mt[Xn].x + mt[Xn].w + nn.x) / 2 : nn.x - me;
                return {
                  x: Lt + te - 1,
                  y: Ft - nn.up - 1,
                  w: Cr(0)((() => {
                    const Ot = Qt + 1 | 0;
                    return Ot >= 0 && Ot < mt.length && Qt < (mt.length - 1 | 0) ? (nn.x + nn.w + mt[Ot].x) / 2 - te : nn.x + nn.w + me - te;
                  })()) + 2,
                  h: nn.up + nn.down + 2
                };
              };
            })())(mt))(G)), Rt = x.y + 4, rn = x.x + x.w - 4, xt = x.x + 4, Gt = Rt - Z * xt + O.value, vt = x.y + x.h - 4, Ct = wt(wt(Xt((ft) => (mt) => {
              const Ft = (mt.from.x + mt.to.x) / 2, Lt = (mt.from.y + mt.to.y) / 2, Qt = Dn(-1)(1)(U + (911 * (ft + 1 | 0) | 0) | 0), nn = Dn(-3)(5)(Qt.prng), me = Qt.value * 3.141592653589793 / 180, Xn = le(me), te = Ne(me), Ot = (Wt) => ({ x: Ft + (Wt.x - Ft) * Xn - (Wt.y - Lt) * te, y: Lt + (Wt.x - Ft) * te + (Wt.y - Lt) * Xn });
              return {
                from: (() => {
                  const Wt = Ot(mt.from), $e = Wt.y - Lt, oe = Wt.x - Ft, Yn = re(oe * oe + $e * $e), Qn = Yn < 1e-4 ? 1 : (Yn + nn.value) / Yn;
                  return { x: Ft + oe * Qn, y: Lt + $e * Qn };
                })(),
                to: (() => {
                  const Wt = Ot(mt.to), $e = Dn(-3)(5)(nn.prng).value, oe = Wt.y - Lt, Yn = Wt.x - Ft, Qn = re(Yn * Yn + oe * oe), ar = Qn < 1e-4 ? 1 : (Qn + $e) / Qn;
                  return { x: Ft + Yn * ar, y: Lt + oe * ar };
                })()
              };
            })(Nt((ft) => {
              const mt = et(Gt + V(ft) * nt, xt, rn, Rt, vt);
              return mt.length === 2 ? T("Just", { from: mt[0], to: mt[1] }) : v;
            })(Vt(0, Bu(1)(dn(Ue((vt - Z * rn - Gt) / nt)))))))((ft) => ht(
              (mt) => mt.to.x - mt.from.x > 1,
              w((mt) => (Ft) => wt(mt)((Lt) => {
                const Qt = et(Lt.from.y - Z * Lt.from.x, Ft.x, Ft.x + Ft.w, Ft.y, Ft.y + Ft.h);
                return Qt.length === 2 ? Qt[0].x > Lt.from.x + 1e-3 && Qt[1].x < Lt.to.x - 1e-3 ? [{ from: Lt.from, to: Qt[0] }, { from: Qt[1], to: Lt.to }] : Qt[0].x <= Lt.from.x + 1e-3 && Qt[1].x < Lt.to.x - 1e-3 ? [{ from: Qt[1], to: Lt.to }] : Qt[0].x > Lt.from.x + 1e-3 && Qt[1].x >= Lt.to.x - 1e-3 ? [{ from: Lt.from, to: Qt[0] }] : [] : [Lt];
              }))([ft])(At)
            )))((ft) => (() => {
              const mt = ft.to.x - ft.from.x;
              return re(2) * (mt >= 0 ? mt : -mt) <= 28;
            })() ? [ft] : [
              { from: ft.from, to: { x: ft.from.x + (ft.to.x - ft.from.x) * 0.495, y: ft.from.y + (ft.to.y - ft.from.y) * 0.495 } },
              { from: { x: ft.from.x + (ft.to.x - ft.from.x) * 0.505, y: ft.from.y + (ft.to.y - ft.from.y) * 0.505 }, to: ft.to }
            ]), _t = Ct.length, yt = (ft) => Cr(0)(zo(1)(L.t * V(_t) - V(ft)));
            return e.bind(t.pushClip(mp(ri(7)(x)))(Qs))(() => e.bind(i((ft) => {
              const mt = ft._1, Ft = Dn(1.4)(1.9)(U + (1303 * (mt + 1 | 0) | 0) | 0), Lt = Dn(0.35)(0.8)(Ft.prng), Qt = i((nn) => e.bind(t.pushAlpha(nn.alpha * Lt.value))(() => e.bind(t.strokePath(vp(yt(mt))(nn.path))({
                color: ct,
                width: Ft.value,
                lineJoin: ue,
                lineCap: dr
              }))(() => r)))(Gi({ ...N_, rMax: 0, offset: 0.5 })(U + (53 * (mt + 1 | 0) | 0) | 0)(!1)([ft._2.from, ft._2.to]));
              return yt(mt) > 0 ? Qt : o.pure();
            })(Xt(jn)(Ct)))(() => s));
          });
        }
        return o.pure();
      })())(() => e.bind((() => {
        if (d === "LabelsShown") {
          const L = e.bind(t.pushAlpha(h))(() => e.bind(i((G) => t.drawText({
            x: x.x + x.w / 2,
            y: W + V(G._1) * E,
            content: G._2,
            font: C,
            color: p.text,
            align: co,
            baseline: Ke
          }))(Xt(jn)(P)))(() => r));
          return h > 0 ? L : o.pure();
        }
        if (d === "LabelsHidden")
          return o.pure();
        f();
      })())(() => e.bind((() => {
        const L = l(p)(R)(B);
        return H ? L : o.pure();
      })())(() => e.bind(_)(() => r)))));
    }));
    return ot.alpha * m > 0 ? A : o.pure();
  };
}, zb = (t) => {
  const n = Ib(t), e = Db(t);
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
        return e(ma)(r.plan._1.inkBoost)(r.plan._1.palette)(r.alpha)(0)(r.plan._1.arrival)(r.id)(o)(r.plan._1.animState);
      f();
    }
    return t.Monad0().Applicative0().pure();
  };
}, Pp = (t) => (n) => (e) => {
  const r = (o) => {
    const i = jt((s) => o.x >= s._2.x - 1 && o.x <= s._2.x + s._2.w + 1 && o.y >= s._2.y - 1 && o.y <= s._2.y + s._2.h + 1)(ge(n.nodes));
    return i.tag === "Just" ? T("Just", i._1._2) : v;
  };
  return fo((o) => {
    const i = io(o._1)(e.edges);
    if (i.tag === "Just") {
      const s = io(o._1)(e.edgeFadeAlpha), u = (() => {
        if (s.tag === "Nothing")
          return 1;
        if (s.tag === "Just")
          return s._1;
        f();
      })(), a = hp({
        id: o._1,
        geometry: rp(
          "FlatRoute",
          (() => {
            const c = (() => {
              if (0 < o._2.length) {
                const _ = r(o._2[0]);
                if (_.tag === "Just")
                  return fn(x_(ri(7)(_._1))(fn(o._2)));
              }
              return o._2;
            })(), l = c.length - 1 | 0;
            if (l >= 0 && l < c.length) {
              const _ = r(c[l]);
              if (_.tag === "Just")
                return x_(ri(7)(_._1))(c);
            }
            return c;
          })()
        ),
        visible: ep(i._1),
        arrow: (() => {
          const c = So("conn:")(o._1);
          if (c.tag === "Just")
            return !1;
          if (c.tag === "Nothing")
            return !0;
          f();
        })(),
        settlingAtTarget: i._1.tag === "Extending" && i._1._1 === "ExtendFromSource",
        plan: op("FlatEdgePlan", t)
      });
      return u === 1 ? a : ce({
        path: [],
        role: Se,
        layer: v,
        effects: [Rn("GroupAlpha", u)]
      })(a);
    }
    if (i.tag === "Nothing")
      return j(lt("Return", void 0), dt);
    f();
  })(ge(n.edges));
}, Hb = (t) => (n) => (e) => {
  const r = { family: t.fontFamily, size: 11, weight: 500 };
  return fo((o) => {
    if (o._2 === "" || (() => {
      const u = io(o._1)(e.edges);
      return u.tag === "Nothing" || !(u.tag === "Just" && Zx.eq(u._1)(Ed));
    })())
      return j(lt("Return", void 0), dt);
    const i = io(o._1)(n.edges), s = (() => {
      if (i.tag === "Just")
        return ti(i._1)(0.5);
      if (i.tag === "Nothing")
        return v;
      f();
    })();
    if (s.tag === "Nothing")
      return j(lt("Return", void 0), dt);
    if (s.tag === "Just") {
      const u = s._1, a = tu(r)(o._2), c = (l) => {
        const _ = l + 12;
        return ou({
          owner: li("EdgeText", o._1),
          text: o._2,
          spec: {
            x: u.x,
            y: u.y,
            content: o._2,
            font: r,
            color: t.chipPillText,
            align: co,
            baseline: Ke
          },
          bounds: T("Just", { x: u.x - _ / 2, y: u.y - 8.5, w: _, h: 17 }),
          plan: ru(
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
                St("Cons", at("CatCons", c, ut(Y, Y)), a._2._2._2)
              )
            );
          f();
        })()
      );
    }
    f();
  })(ge(n.edgeLabels));
}, Ap = (t) => {
  const n = (e) => {
    if (e.tag === "Leaf")
      return D;
    if (e.tag === "Node")
      return Zt(
        "Node",
        e._1,
        e._2,
        e._3,
        zf({ x: t.vx, y: t.vy, w: t.vw, h: t.vh })(e._4),
        n(e._5),
        n(e._6)
      );
    f();
  };
  return n;
}, Qb = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = oi(r);
  return (i) => (s) => (u) => (a) => (c) => (l) => {
    const _ = os(l).length, d = V(_ + 1 | 0), g = ($) => {
      const y = (u * d - V($)) / 1.5, x = y < 0 ? 0 : y > 1 ? 1 : y;
      return x * x * (3 - 2 * x);
    }, m = (($) => {
      let y = $, x = !0, J;
      for (; x; ) {
        const N = y;
        if (N >= _) {
          x = !1, J = N;
          continue;
        }
        if (g(N) >= 1) {
          y = N + 1 | 0;
          continue;
        }
        x = !1, J = N;
      }
      return J;
    })(0), h = m >= _ ? [] : Lr(($) => g($) > 0)(Vt(m, _ - 1 | 0)).init;
    return e.bind((() => {
      const $ = t.drawText({
        x: a,
        y: c,
        content: On(m)(l),
        font: i,
        color: s,
        align: Mi,
        baseline: Ke
      });
      return m > 0 ? $ : r.pure();
    })())(() => o(($) => e.bind(t.measureText(i)(On($)(l)))((y) => {
      const x = g($);
      return t.drawText({
        x: a + y,
        y: c - (1 - x) * 10,
        content: On(1)(Oi(pr(On($)(l)))(l)),
        font: i,
        color: { ...s, a: dn(Ue(x * V(s.a))) },
        align: Mi,
        baseline: Ke
      });
    }))(h));
  };
}, Rp = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = n.Applicative0(), o = oi(r), i = Qb(t);
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
      return e.bind(o((a) => t.fillPath(yp(a)(1.5))(u.trailFill))(u.trail))(() => e.bind((() => {
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
}, Ob = (t) => (n) => (e) => (r) => (o) => (i) => (s) => bp(r)(o)(i)({
  owner: li("TokenText", t),
  text: e.line,
  spec: {
    x: o.x,
    y: o.y,
    content: e.line,
    font: { family: n.fontFamily, size: 11, weight: 500 },
    color: n.chipPillText,
    align: Mi,
    baseline: Ke
  },
  bounds: T("Just", r),
  plan: ru(
    "TokenTravelText",
    {
      trail: Eb(r)(s),
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
}), va = (t) => (n) => (e) => (r) => {
  const o = I((p) => V(Bu(1)(os(p).length)))(r), i = Cr(1)(w(gr)(0)(o)), s = Ui(n)(e)(t), u = s * i, a = Bu(1)(r.length), l = ((p) => (m) => (h) => {
    let $ = p, y = m, x = h, J = !0, N;
    for (; J; ) {
      const C = $, k = y, E = Bt((Q) => v, (Q) => (W) => T("Just", { head: Q, tail: W }), x);
      if (E.tag === "Nothing") {
        J = !1, N = Bu(0)(a - 1 | 0);
        continue;
      }
      if (E.tag === "Just") {
        if (k + E._1.head >= u) {
          J = !1, N = C;
          continue;
        }
        $ = C + 1 | 0, y = k + E._1.head, x = E._1.tail;
        continue;
      }
      f();
    }
    return N;
  })(0)(0)(o), _ = w(gr)(0)(l < 1 ? [] : Et(0, l, o)), d = _ / i;
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
}, Fp = (t) => (n) => (e) => (r) => (o) => t.Bind1().bind(n({
  family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif",
  size: 11,
  weight: 500
})(va(r)(0)(0)(I(so)(o)).line))((i) => {
  const s = i + 28;
  return t.Applicative0().pure({ x: e.x + e.w / 2 - s / 2, y: e.y - 25.2 - 14, w: s, h: 25.2 });
}), Wb = (t) => {
  const n = t.Bind1(), e = t.Applicative0(), r = bo.traverse(e);
  return (o) => (i) => (s) => n.Apply0().Functor0().map((u) => Np(Nt((a) => a)(u)))(r((u) => {
    if (u._2.tag === "Filling" && u._2._1.labels.length !== 0) {
      const a = Hn(u._2._1.node)(i.nodes);
      if (a.tag === "Just")
        return n.bind(Fp(t)(o)(a._1)(u._2._1.progress)(u._2._1.labels))((c) => e.pure(T(
          "Just",
          b(u._1, c)
        )));
      if (a.tag === "Nothing")
        return e.pure(v);
      f();
    }
    return e.pure(v);
  })(ge(s.tokens)));
}, qb = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => {
  const c = vl(e)(r)(o)(i)(s)(u);
  return t.Bind1().bind(n({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 11, weight: 500 })(va(i)(s)(u)(wt(a)(Qf)).line))((l) => t.Applicative0().pure({
    x: c.x + 14 + l / 2 - l / 2 - 14,
    y: c.y - 6 - 8 - 6.6 - 6,
    w: l + 28,
    h: 25.2
  }));
}, Xb = (t) => {
  const n = t.Bind1(), e = t.Applicative0(), r = bo.traverse(e);
  return (o) => (i) => (s) => n.Apply0().Functor0().map((u) => Np(Nt((a) => a)(u)))(r((u) => {
    if (u._2.tag === "Travelling" && u._2._1.labels.length !== 0) {
      const a = Hn(u._2._1.target)(i.nodes), c = Hn(u._2._1.source)(i.nodes), l = io(u._2._1.edge)(i.edges);
      if (l.tag === "Just" && c.tag === "Just" && a.tag === "Just") {
        const _ = (() => {
          if (u._2._1.direction === "Forward")
            return l._1;
          if (u._2._1.direction === "Backward")
            return fn(l._1);
          f();
        })(), d = vl(_)(c._1)(a._1)(u._2._1.progress)(u._2._1.holdPre)(u._2._1.holdPost);
        return n.bind(qb(t)(o)(_)(c._1)(a._1)(u._2._1.progress)(u._2._1.holdPre)(u._2._1.holdPost)(u._2._1.labels))((g) => e.pure(T(
          "Just",
          b(u._1, { id: u._1, rect: g, token: d })
        )));
      }
    }
    return e.pure(v);
  })(ge(s.tokens)));
}, wl = (t) => {
  const n = t.Bind1(), e = Xb(t), r = Wb(t);
  return (o) => (i) => (s) => (u) => n.bind(e(o)(s)(u))((a) => n.bind(r(o)(s)(u))((c) => t.Applicative0().pure(gb({
    x: i.vx,
    y: i.vy,
    w: i.vw,
    h: i.vh
  })([
    ...Nt((l) => {
      const _ = Hn(l._1)(u.nodes);
      return _.tag === "Just" && fi(_._1).alpha > 0 ? T("Just", { x: l._2.x, y: l._2.y, w: l._2.w, h: l._2.h }) : v;
    })(ge(s.nodes)),
    ...(() => {
      const l = (_, d) => {
        if (_.tag === "Leaf")
          return d;
        if (_.tag === "Node")
          return l(_._5, St("Cons", _._4, l(_._6, d)));
        f();
      };
      return tn(Jn.foldr, l(c, Y));
    })()
  ])(Nt((l) => Jp(l)(a))((() => {
    const l = (_) => {
      if (_.tag === "Leaf")
        return D;
      if (_.tag === "Node")
        return Zt("Node", _._1, _._2, _._3, void 0, l(_._5), l(_._6));
      f();
    };
    return It(F.compare)(tn(Pe.foldr, l(a)));
  })())))));
}, Yb = /* @__PURE__ */ wl(ol), C_ = (t) => (n) => (e) => {
  const r = Ls(6)(0.55)(xa(0)(1)((1 - t) / 0.06)), o = t > 0.94, i = o && e > 1e-4, s = Ls(6)(0.55)(xa(0)(1)(t / 0.06)), u = t < 0.06, a = u && n > 1e-4, c = o && e <= 1e-4;
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
}, Ta = (t) => (n) => (e) => (r) => ce({
  path: [],
  role: Se,
  layer: T("Just", XC),
  effects: []
})(fo((o) => {
  if (o._2.tag === "Travelling") {
    if (o._2._1.labels.length !== 0) {
      const i = Hn(o._2._1.target)(n.nodes), s = Hn(o._2._1.source)(n.nodes), u = io(o._2._1.edge)(n.edges), a = Jp(o._1)(r);
      if (a.tag === "Just" && u.tag === "Just" && s.tag === "Just" && i.tag === "Just")
        return Ob(o._1)(t)(va(o._2._1.progress)(o._2._1.holdPre)(o._2._1.holdPost)(wt(o._2._1.labels)(Qf)))(a._1)({
          x: a._1.x + a._1.w / 2,
          y: a._1.y + a._1.h / 2
        })(C_(o._2._1.progress)(o._2._1.holdPre)(o._2._1.holdPost))(vl((() => {
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
      const s = i._1, u = Fp(ol)(_p)(s)(o._2._1.progress)(o._2._1.labels), a = (c) => Rb(o._1)(t)(va(o._2._1.progress)(0)(0)(wt(o._2._1.labels)(Qf)).line)(s)(c)({
        x: c.x + c.w / 2,
        y: c.y + c.h / 2
      })(C_(o._2._1.progress)(0)(0));
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
                St("Cons", at("CatCons", a, ut(Y, Y)), u._2._2._2)
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
})(ge(e.tokens))), Gp = (t) => (n) => (e) => (r) => {
  const o = Yb(_p)(n)(e)(r);
  return j(
    o._1,
    (() => {
      if (o._2.tag === "CatNil")
        return at("CatCons", (i) => Ta(t)(e)(r)(i), ut(Y, Y));
      if (o._2.tag === "CatCons")
        return at(
          "CatCons",
          o._2._1,
          ut(
            o._2._2._1,
            St(
              "Cons",
              at("CatCons", (i) => Ta(t)(e)(r)(i), ut(Y, Y)),
              o._2._2._2
            )
          )
        );
      f();
    })()
  );
}, Mb = (t) => {
  const n = t.Monad0(), e = n.Applicative0();
  return (r) => (o) => {
    const i = o.length - 1 | 0, s = i < 1 ? [] : Et(0, i, o), u = s.length - 1 | 0, a = u >= 0 && u < s.length ? T("Just", s[u]) : v, c = o.length - 1 | 0, l = c >= 0 && c < o.length ? T("Just", o[c]) : v;
    if (l.tag === "Just" && a.tag === "Just") {
      const _ = Dn(0.78)(1.18)(qs(o) + 19 | 0), d = Dn(0.4)(0.62)(_.prng), g = r.wobble ? 8.75 * d.value : 4.375, p = Dn(0.4)(0.62)(d.prng), m = r.wobble ? 8.75 * p.value : 4.375, h = l._1.y - a._1.y, $ = l._1.x - a._1.x, y = re($ * $ + h * h), x = h / y, J = -x, N = $ / y, C = l._1.x + N * 0.875, k = l._1.y + x * 0.875, P = r.wobble ? 8.75 * _.value : 8.75, E = C - N * P, Q = k - x * P, W = E + J * g, B = Q + N * g, H = [1, C, k, 2, E + J * 4.375, Q + N * 4.375, 2, E - J * 4.375, Q - N * 4.375, 5], rt = E - J * m, ot = Q - N * m, M = { color: r.arrowFill, width: 2, lineJoin: ue, lineCap: dr };
      return y <= 1e-4 ? e.pure() : r.wobble ? n.Bind1().bind(t.strokePath([1, W, B, 2, C, k])(M))(() => t.strokePath([1, rt, ot, 2, C, k])(M)) : t.fillPath(H)({ color: r.arrowFill, flat: !0 });
    }
    return e.pure();
  };
}, Ub = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = n.Bind1(), o = oi(e), i = t.popAlpha, s = Mb(t);
  return (u) => (a) => (c) => (l) => (_) => {
    const d = M3(8)(l), g = c && _.hi >= 0.9 && (1 - _.hi) * Vs(d) <= 8.75 ? 1 : _.hi;
    if (g <= _.lo)
      return e.pure();
    const p = eb(d)(_.lo)(g);
    if (p.length === 0)
      return e.pure();
    const m = { color: u.edge, width: u.wobble ? 2 : 0.9375, lineJoin: ue, lineCap: dr }, h = u.wobble ? Dn(-10)(4)(qs(p)).value : 0, $ = u.wobble ? yb(h)(p) : p;
    return r.bind(u.wobble ? o((y) => r.bind(t.pushAlpha(y.alpha))(() => r.bind(t.strokePath(y.path)(m))(() => i)))((() => {
      const y = qs(p);
      return $.length < 2 ? [] : Gi(Fb)(y)(!1)($);
    })()) : t.strokePath(q3(p))(m))(() => {
      const y = s(u)($);
      return a && g >= 0.999 ? y : e.pure();
    });
  };
}, Kb = (t) => {
  const n = Ub(t);
  return (e) => e.geometry.tag === "FlatRoute" && e.plan.tag === "FlatEdgePlan" ? n(e.plan._1)(e.arrow)(e.settlingAtTarget)(e.geometry._1)(e.visible) : t.Monad0().Applicative0().pure();
}, Vb = (t) => (n) => {
  const e = (i) => {
    const s = Hn(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !Ln(
        (a) => 0 < a._2.length && a._2[0].x >= u.x && a._2[0].x <= u.x + u.w && a._2[0].y >= u.y && a._2[0].y <= u.y + u.h,
        ge(t.edges)
      );
    }
    f();
  }, r = w((i) => (s) => (i * 31 | 0) + Pr(s) | 0)(5381)(Hr(n.frameTitle)), o = (i) => {
    const s = Hn(i)(t.nodes);
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just") {
      const u = s._1;
      return !Ln(
        (a) => {
          const c = a._2.length - 1 | 0;
          return c >= 0 && c < a._2.length && a._2[c].x >= u.x && a._2[c].x <= u.x + u.w && a._2[c].y >= u.y && a._2[c].y <= u.y + u.h;
        },
        ge(t.edges)
      );
    }
    f();
  };
  return w((i) => (s) => {
    const u = s._2;
    return bb((a) => {
      if (a.tag === "Nothing")
        return T("Just", u);
      if (a.tag === "Just")
        return T(
          "Just",
          { t: Cr(a._1.t)(u.t), angle: u.t >= a._1.t ? u.angle : a._1.angle, bigCircle: a._1.bigCircle || u.bigCircle, frameHash: a._1.frameHash }
        );
      f();
    })(s._1)(i);
  })(D)(wt(ge(n.tokens))((i) => {
    if (i._2.tag === "Filling") {
      const s = i._2._1.node;
      return [
        b(
          s,
          {
            t: 1,
            angle: (() => {
              const u = Nt((a) => (() => {
                const c = Hn(s)(t.nodes), l = a._2.length - 1 | 0;
                return l >= 0 && l < a._2.length && c.tag === "Just" && a._2[l].x >= c._1.x && a._2[l].x <= c._1.x + c._1.w && a._2[l].y >= c._1.y && a._2[l].y <= c._1.y + c._1.h;
              })() ? T("Just", a._2) : v)(ge(t.edges));
              if (0 < u.length) {
                const a = u[0].length - 1 | 0, c = a < 1 ? [] : Et(0, a, u[0]), l = c.length - 1 | 0;
                if (l >= 0 && l < c.length) {
                  const _ = u[0].length - 1 | 0;
                  return _ >= 0 && _ < u[0].length ? Yo(u[0][_].y - c[l].y)(u[0][_].x - c[l].x) : 0;
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
                const s = io(i._2._1.edge)(t.edges);
                if (s.tag === "Just") {
                  const u = s._1.length - 1 | 0, a = u < 1 ? [] : Et(0, u, s._1), c = a.length - 1 | 0;
                  if (c >= 0 && c < a.length) {
                    const l = s._1.length - 1 | 0;
                    return l >= 0 && l < s._1.length ? Yo(s._1[l].y - a[c].y)(s._1[l].x - a[c].x) : 0;
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
                const s = io(i._2._1.edge)(t.edges);
                if (s.tag === "Just")
                  return 1 < s._1.length && 0 < s._1.length ? Yo(s._1[1].y - s._1[0].y)(s._1[1].x - s._1[0].x) : 0;
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
}, jb = (t) => w((n) => (e) => (n * 31 | 0) + Pr(e) | 0)(5381)(Hr(t.frameTitle)), Ip = (t) => (n) => (e) => (r) => (o) => {
  const i = jb(o), s = Vb(r)(o);
  return fo((u) => {
    const a = Hn(u._1)(o.nodes);
    if (a.tag === "Just")
      return kp(gp)(t)(n)(e)((() => {
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
        return c.tag === "Just" ? T("Just", c._1) : c.tag === "Nothing" && kb(u._1)(o.visited) ? T("Just", { t: 1, angle: 0, bigCircle: !1, frameHash: i }) : v;
      })())(u._1)(u._2)(a._1);
    if (a.tag === "Nothing")
      return j(lt("Return", void 0), dt);
    f();
  })(ge(r.nodes));
}, Zb = (t) => t, Bp = (t) => (n) => {
  const e = n.vw / n.vh, r = n.vh * t, o = { ...n, vx: n.vx - (r - n.vw) / 2, vw: r }, i = n.vw / t, s = { ...n, vy: n.vy - (i - n.vh) / 2, vh: i };
  return t <= 0 || n.vw <= 0 || n.vh <= 0 ? n : t > e ? o : t < e ? s : n;
}, Nl = (t) => (n) => t.width <= 0 || t.height <= 0 ? n : Bp(t.width / t.height)(n), tk = (t) => (n) => (e) => {
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
}, b_ = (t) => (n) => (e) => {
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
}, k_ = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, qf = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, nk = (t) => (e) => {
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
}, ek = (t) => (e) => {
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
}, Xf = /* @__PURE__ */ (() => {
  const t = pe.unfoldr(Ze);
  return (n) => t(_e("IterNode", n, je));
})(), rk = /* @__PURE__ */ zr(ei)(Yt), ok = (t) => (n) => {
  const e = Ne(t.angle), r = le(t.angle);
  return { a: r, b: e, c: 0, d: 1, e: -n * r, f: n * e - t.boxHeight / 2 };
}, ik = (t) => [t.box.ground.a, t.box.ground.b, t.box.ground.c, t.box.ground.d, t.box.top.a, t.box.top.b, t.box.top.c, t.box.top.d], Yf = (t) => (n) => {
  const e = (r) => tk(0)(255)(dn(Xe(V(r) * t)));
  return { r: e(n.r), g: e(n.g), b: e(n.b), a: n.a };
}, se = (t) => (n) => (e) => (r) => ({ x: (n - e) * le(t.angle), y: (n + e) * Ne(t.angle) - r }), Jl = (t) => {
  const n = Bt((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...wt(n._1.tail)((e) => [2, e.x, e.y]), 5];
  f();
}, sk = (t) => (n) => (e) => {
  const r = e.id, o = e.np, i = ml({
    id: r,
    role: gp,
    geometry: _l(
      "IsoSlab",
      {
        south: [e.box.ground.d, e.box.ground.c, e.box.top.c, e.box.top.d],
        east: [e.box.ground.b, e.box.ground.c, e.box.top.c, e.box.top.b],
        top: [e.box.top.a, e.box.top.b, e.box.top.c, e.box.top.d]
      }
    ),
    alpha: 1,
    plan: dl("IsoNodePlan", { config: t, palette: n })
  }), s = () => ou({
    owner: li("NodeText", r),
    text: o.label,
    spec: {
      x: o.x + o.w / 2,
      y: 0,
      content: o.label,
      font: { family: n.fontFamily, size: 11, weight: 600 },
      color: n.text,
      align: co,
      baseline: Ke
    },
    bounds: v,
    plan: ru("AffineText", ok(t)(o.y + o.h))
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
            St("Cons", at("CatCons", s, ut(Y, Y)), i._2._2._2)
          )
        );
      f();
    })()
  );
}, uk = (t) => (n) => (e) => (r) => (o) => {
  const i = En(jn, o, Et(1, o.length, o)), s = i.length - 1 | 0;
  return Xt((u) => (a) => ({
    depth: (a._1.x + a._1.y + a._2.x + a._2.y) / 2,
    draw: hp({
      id: e,
      geometry: rp("IsoSegments", [[se(t)(a._1.x)(a._1.y)(0), se(t)(a._2.x)(a._2.y)(0)]]),
      visible: { lo: 0, hi: 1 },
      arrow: r && u === s,
      settlingAtTarget: !1,
      plan: op("IsoEdgePlan", { config: t, palette: n })
    })
  }))(i);
}, ak = (t) => (n) => (e) => (r) => (o) => {
  const i = (() => {
    if (t === "Forward")
      return o;
    if (t === "Backward")
      return fn(o);
    f();
  })();
  if (0 < i.length) {
    const u = ti(i)(b_(0)(1)(Ui(e)(r)(n)));
    if (u.tag === "Nothing")
      return i[0];
    if (u.tag === "Just")
      return u._1;
    f();
  }
  const s = ti(i)(b_(0)(1)(Ui(e)(r)(n)));
  if (s.tag === "Nothing")
    return { x: 0, y: 0 };
  if (s.tag === "Just")
    return s._1;
  f();
}, ck = (t) => {
  const n = Bt((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just")
    return [1, n._1.head.x, n._1.head.y, ...wt(n._1.tail)((e) => [2, e.x, e.y])];
  f();
}, fk = (t) => {
  const n = Bt((e) => v, (e) => (r) => T("Just", { head: e, tail: r }), t);
  if (n.tag === "Nothing")
    return { vx: 0, vy: 0, vw: 0, vh: 0 };
  if (n.tag === "Just") {
    const e = w((r) => (o) => ({ minX: k_(r.minX)(o.x), minY: k_(r.minY)(o.y), maxX: qf(r.maxX)(o.x), maxY: qf(r.maxY)(o.y) }))({
      minX: n._1.head.x,
      minY: n._1.head.y,
      maxX: n._1.head.x,
      maxY: n._1.head.y
    })(n._1.tail);
    return { vx: e.minX - 40, vy: e.minY - 40, vw: e.maxX - e.minX + 80, vh: e.maxY - e.minY + 80 };
  }
  f();
}, lk = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => {
    if (r.geometry.tag === "IsoSlab" && r.plan.tag === "IsoNodePlan") {
      const o = r.geometry._1, i = r.plan._1.palette, s = (u, a) => t.fillStrokePath(Jl(u))({ color: a, flat: !0 })({
        color: i.nodeStroke,
        width: 1,
        lineJoin: ue,
        lineCap: Ve
      });
      return e.bind(s(o.south, Yf(0.66)(i.nodeFill)))(() => e.bind(s(o.east, Yf(0.82)(i.nodeFill)))(() => s(o.top, i.nodeFill)));
    }
    return n.Applicative0().pure();
  };
}, gk = (t) => {
  const n = t.Monad0(), e = n.Bind1();
  return (r) => {
    if (r.geometry.tag === "IsoCube" && r.plan.tag === "IsoTokenPlan") {
      const o = r.geometry._1, i = r.plan._1.palette, s = (u, a) => t.fillStrokePath(Jl(u))({ color: Yf(a)(i.tokenOutsideFill), flat: !0 })({
        color: i.tokenOutsideStroke,
        width: 1,
        lineJoin: ue,
        lineCap: Ve
      });
      return e.bind(s(o.south, 0.66))(() => e.bind(s(o.east, 0.82))(() => s(o.top, 1)));
    }
    return n.Applicative0().pure();
  };
}, _k = { angle: 0.5235987755982988, boxHeight: 26, transparentBg: !0 }, dk = (t) => (n) => (e) => {
  const r = e.x - 5.5, o = e.x + 5.5, i = e.y - 5.5, s = e.y + 5.5, u = n + 11, a = se(t)(o)(i)(u), c = se(t)(o)(s)(u), l = se(t)(r)(s)(u), _ = se(t)(o)(s)(n);
  return { south: [se(t)(r)(s)(n), _, c, l], east: [se(t)(o)(i)(n), _, c, a], top: [se(t)(r)(i)(u), a, c, l] };
}, hk = (t) => (n) => (e) => (r) => {
  const o = r._1, i = (s, u) => ({
    depth: u.x + u.y,
    draw: pp({
      id: o,
      pass: fp,
      geometry: sp("IsoCube", dk(t)(s)(u)),
      position: u,
      plan: ap("IsoTokenPlan", { config: t, palette: n, baseZ: s })
    })
  });
  if (r._2.tag === "Travelling") {
    const s = nk(r._2._1.edge)(e.edges);
    return s.tag === "Just" ? T("Just", i(0, ak(r._2._1.direction)(r._2._1.progress)(r._2._1.holdPre)(r._2._1.holdPost)(s._1))) : v;
  }
  if (r._2.tag === "Filling") {
    const s = ek(r._2._1.node)(e.nodes);
    if (s.tag === "Just")
      return T("Just", i(t.boxHeight, { x: s._1.x + s._1.w / 2, y: s._1.y + s._1.h / 2 }));
  }
  return v;
}, pk = (t) => (n) => {
  const e = n.y + n.h, r = n.x + n.w;
  return {
    ground: { a: se(t)(n.x)(n.y)(0), b: se(t)(r)(n.y)(0), c: se(t)(r)(e)(0), d: se(t)(n.x)(e)(0) },
    top: { a: se(t)(n.x)(n.y)(t.boxHeight), b: se(t)(r)(n.y)(t.boxHeight), c: se(t)(r)(e)(t.boxHeight), d: se(t)(n.x)(e)(t.boxHeight) },
    depth: (n.x + r) / 2 + (n.y + e) / 2
  };
}, Dp = (t) => (n) => I((e) => ({ id: e._1, np: e._2, box: pk(t)(e._2) }))(Xf(n.nodes)), mk = (t) => (n) => [
  ...wt(Dp(t)(n))(ik),
  ...(() => {
    const e = (r, o) => {
      if (r.tag === "Leaf")
        return o;
      if (r.tag === "Node")
        return e(r._5, St("Cons", r._4, e(r._6, o)));
      f();
    };
    return wt(tn(Jn.foldr, e(n.edges, Y)))(I((r) => se(t)(r.x)(r.y)(0)));
  })()
], $k = (t) => (n) => (e) => (r) => {
  const o = Tl(n), i = [
    ...wt(Xf(e.edges))((a) => uk(t)(o)(a._1)((() => {
      const c = So("conn:")(a._1);
      if (c.tag === "Just")
        return !1;
      if (c.tag === "Nothing")
        return !0;
      f();
    })())(a._2)),
    ...I((a) => ({ depth: a.box.depth, draw: sk(t)(o)(a) }))(Dp(t)(e)),
    ...Nt(hk(t)(o)(e))(Xf(r.tokens))
  ], s = dp({
    viewport: fk(mk(t)(e)),
    clear: T("Just", t.transparentBg ? o.bgTransparent : o.bg),
    dots: v
  }), u = () => rk((a) => a.draw)(It((a) => (c) => it.compare(a.depth)(c.depth))(i));
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
            St("Cons", at("CatCons", u, ut(Y, Y)), s._2._2._2)
          )
        );
      f();
    })()
  );
}, yk = (t) => {
  const n = t.to.y - t.from.y, e = t.to.x - t.from.x, r = qf(1e-4)(re(e * e + n * n)), o = n / r, i = e / r, s = t.to.y - o * 7, u = t.to.x - i * 7;
  return Jl([t.to, { x: u - o * 3, y: s + i * 3 }, { x: u + o * 3, y: s - i * 3 }]);
}, xk = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = zr(e)(Yt);
  return (o) => {
    if (o.geometry.tag === "IsoSegments" && o.plan.tag === "IsoEdgePlan") {
      const i = o.plan._1.palette, s = o.geometry._1;
      return n.Bind1().bind(r((u) => t.strokePath(ck(u))({
        color: i.edge,
        width: 1.5,
        lineJoin: ue,
        lineCap: dr
      }))(s))(() => {
        const u = s.length - 1 | 0;
        if (u >= 0 && u < s.length) {
          const c = s[u], l = c.length - 1 | 0, _ = l < 1 ? [] : Et(0, l, c), d = _.length - 1 | 0;
          if (d >= 0 && d < _.length) {
            const p = s.length - 1 | 0, m = (() => {
              if (p >= 0 && p < s.length) {
                const h = s[p], $ = h.length - 1 | 0;
                if ($ >= 0 && $ < h.length)
                  return t.fillPath(yk({ from: _[d], to: h[$] }))({ color: i.arrowFill, flat: !0 });
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
}, zp = (t, n) => ({ tag: t, _1: n }), wa = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, vk = (t) => (n) => (e) => {
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
}, Cl = (t) => (e) => {
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
}, Tk = /* @__PURE__ */ ji(ei)(Yt), wk = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Nk = /* @__PURE__ */ zp("ResolvedLabels"), Jk = (t) => {
  const n = jt((e) => e.role === "FlyThrough")(t.levels);
  if (n.tag === "Just")
    return n._1;
  if (n.tag === "Nothing")
    return oa(t);
  f();
}, ss = (t) => (n) => {
  const e = wa(1)(Tn(n.rootLayout).w), r = uo(n.rootLayout)(n.camera), o = !n.diving && n.levels.length === 1 ? 1 : vk(0)(1)(r.w / e), i = oa(n).state.frameTitle === "" ? 0 * o : 40 * o, s = t.padding * o * o;
  return (() => {
    if (t.outputAspect.tag === "Nothing")
      return Zb;
    if (t.outputAspect.tag === "Just")
      return Bp(t.outputAspect._1);
    f();
  })()({ vx: r.x - s, vy: r.y - s - i, vw: r.w + 2 * s, vh: r.h + 2 * s + i });
}, Ck = (t) => (n) => {
  if (n.tag === "Nothing")
    return [];
  if (n.tag === "Just") {
    const e = Cl(n._1)(t.segment.layout.nodes);
    if (e.tag === "Nothing")
      return [];
    if (e.tag === "Just") {
      const r = e._1.x * t.segment.placement.scale + t.segment.placement.tx, o = e._1.y * t.segment.placement.scale + t.segment.placement.ty, i = e._1.w * t.segment.placement.scale, s = e._1.h * t.segment.placement.scale;
      return [1, r, o, 2, r + i, o, 2, r + i, o + s, 2, r, o + s, 5];
    }
  }
  f();
}, bl = (t) => (n) => {
  const e = Iy(n.segment.placement)({ x: t.vx, y: t.vy, w: t.vw, h: t.vh });
  return { vx: e.x, vy: e.y, vw: e.w, vh: e.h };
}, S_ = (t) => (n) => t === "" ? j(lt("Return", void 0), dt) : ou({
  owner: B3,
  text: t,
  spec: {
    x: n.vx + 6,
    y: n.vy + 6,
    content: t,
    font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 9, weight: 600 },
    color: { r: 180, g: 180, b: 180, a: 255 },
    align: Mi,
    baseline: HC
  },
  bounds: v,
  plan: ac
}), L_ = (t) => (n) => {
  if (t === "")
    return j(lt("Return", void 0), dt);
  const e = n.vh / 720, r = 56 * e, o = tu({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 56, weight: 700 })(t), i = (s) => {
    const u = r + 16 * e * 2, a = s * e + 28 * e * 2, c = n.vy + n.vh / 2, l = n.vx + n.vw / 2, _ = { x: l - a / 2, y: c - u / 2, w: a, h: u };
    return cc(uc(
      "TitleCardOverlay",
      {
        backing: {
          path: Ri(_)(16 * e),
          fill: T("Just", { color: { r: 255, g: 255, b: 255, a: 235 }, flat: !0 }),
          stroke: T(
            "Just",
            { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1.5 * e, lineJoin: ue, lineCap: dr }
          )
        },
        text: {
          owner: lp,
          text: t,
          spec: {
            x: l,
            y: c,
            content: t,
            font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: r, weight: 700 },
            color: { r: 28, g: 30, b: 36, a: 255 },
            align: co,
            baseline: Ke
          },
          bounds: T("Just", _),
          plan: ac
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
            St("Cons", at("CatCons", i, ut(Y, Y)), o._2._2._2)
          )
        );
      f();
    })()
  );
}, E_ = (t) => (n) => {
  if (t === "")
    return j(lt("Return", void 0), dt);
  const e = n.vh / 720, r = 15 * e, o = tu({ family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: 15, weight: 600 })(t), i = (s) => {
    const u = n.vy + 12 * e, a = r + 6 * e * 2, c = s * e + 11 * e * 2, l = n.vx + n.vw / 2, _ = { x: l - c / 2, y: u, w: c, h: a };
    return cc(uc(
      "FrameTitleOverlay",
      {
        backing: T(
          "Just",
          {
            path: Ri(_)(a / 2),
            fill: T("Just", { color: { r: 255, g: 255, b: 255, a: 240 }, flat: !0 }),
            stroke: T(
              "Just",
              { color: { r: 0, g: 0, b: 0, a: 255 }, width: 1 * e, lineJoin: ue, lineCap: dr }
            )
          }
        ),
        text: {
          owner: lp,
          text: t,
          spec: {
            x: l,
            y: u + a / 2,
            content: t,
            font: { family: "Ilisarniq, ui-sans-serif, system-ui, sans-serif", size: r, weight: 600 },
            color: { r: 28, g: 30, b: 36, a: 255 },
            align: co,
            baseline: Ke
          },
          bounds: T("Just", _),
          plan: ac
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
            St("Cons", at("CatCons", i, ut(Y, Y)), o._2._2._2)
          )
        );
      f();
    })()
  );
}, bk = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const a = Tl(t.theme), c = (() => {
    if (u.tag === "ResolvedLabels")
      return Gp(a)(o)(i)(s);
    if (u.tag === "SpringLabels")
      return Ta(a)(i)(s)(Ap(o)(u._1));
    f();
  })(), l = dp({ viewport: o, clear: T("Just", t.transparentBg ? a.bgTransparent : a.bg), dots: v }), _ = () => {
    const d = ce({
      path: [],
      role: Se,
      layer: v,
      effects: [
        ...e < 1 ? [Rn("GroupAlpha", e)] : [],
        ...r > 0 ? [Rn("GroupBlur", r)] : []
      ]
    })((() => {
      const g = Pp(a)(i)(s), p = () => {
        const m = Lp(a)(t.halftoneShadows)(i)(s), h = () => {
          const $ = Ip(pl)(1)(a)(i)(s), y = () => {
            const x = Ep(a)(i)(s), J = () => {
              const N = Wf(a)(o)(i)(s), C = () => {
                const k = Sp(VC)(a)(i)(s), P = () => {
                  const E = () => {
                    const Q = Hb(a)(i)(s);
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
                            St(
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
                  k._1,
                  (() => {
                    if (k._2.tag === "CatNil")
                      return at("CatCons", P, ut(Y, Y));
                    if (k._2.tag === "CatCons")
                      return at(
                        "CatCons",
                        k._2._1,
                        ut(
                          k._2._2._1,
                          St(
                            "Cons",
                            at("CatCons", P, ut(Y, Y)),
                            k._2._2._2
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
                        St("Cons", at("CatCons", C, ut(Y, Y)), N._2._2._2)
                      )
                    );
                  f();
                })()
              );
            };
            return j(
              x._1,
              (() => {
                if (x._2.tag === "CatNil")
                  return at("CatCons", J, ut(Y, Y));
                if (x._2.tag === "CatCons")
                  return at(
                    "CatCons",
                    x._2._1,
                    ut(
                      x._2._2._1,
                      St("Cons", at("CatCons", J, ut(Y, Y)), x._2._2._2)
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
                return at("CatCons", y, ut(Y, Y));
              if ($._2.tag === "CatCons")
                return at(
                  "CatCons",
                  $._2._1,
                  ut(
                    $._2._2._1,
                    St("Cons", at("CatCons", y, ut(Y, Y)), $._2._2._2)
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
                  St("Cons", at("CatCons", h, ut(Y, Y)), m._2._2._2)
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
                St("Cons", at("CatCons", p, ut(Y, Y)), g._2._2._2)
              )
            );
          f();
        })()
      );
    })());
    if (e > 0) {
      const g = () => {
        const p = S_(t.watermark)(o), m = () => s.staticKind === "TitleCard" ? L_(s.frameTitle)(o) : E_(s.frameTitle)(o);
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
                  St("Cons", at("CatCons", m, ut(Y, Y)), p._2._2._2)
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
                St("Cons", at("CatCons", g, ut(Y, Y)), d._2._2._2)
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
          const g = S_(t.watermark)(o), p = () => s.staticKind === "TitleCard" ? L_(s.frameTitle)(o) : E_(s.frameTitle)(o);
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
                    St("Cons", at("CatCons", p, ut(Y, Y)), g._2._2._2)
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
            St("Cons", at("CatCons", _, ut(Y, Y)), l._2._2._2)
          )
        );
      f();
    })()
  );
}, Mf = (t) => (n) => (e) => (r) => Tk(r.minis)((o) => {
  const i = Hp(t)(n)(e)(D)(r)(o);
  return (() => {
    const s = o.segment.path.length - 1 | 0;
    return o.bgAlpha > 0 && s >= 0 && s < o.segment.path.length && (() => {
      const u = Cl(o.segment.path[s])(r.state.nodes);
      if (u.tag === "Just")
        return u._1.tag === "Hidden" ? !1 : u._1.tag !== "PloppingOut";
      if (u.tag === "Nothing")
        return !1;
      f();
    })();
  })() ? i : j(lt("Return", void 0), dt);
}), Hp = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = i.state, u = { tx: i.segment.placement.tx, ty: i.segment.placement.ty, sx: i.segment.placement.scale, sy: i.segment.placement.scale }, a = Tl(t.theme), c = i.segment.layout, l = Tn(c), _ = { vx: l.x - 1e3, vy: l.y - 1e3, vw: l.w + 2e3, vh: l.h + 2e3 }, d = i.segment.path.length - 1 | 0, g = d >= 0 && d < i.segment.path.length ? Cl(i.segment.path[d])(o.segment.layout.nodes) : v, p = i.segment.placement.scale * e, m = wk(8)(wa(1)(1 / (1.25 * wa(1e-6)(p)))), h = 11 * p >= 5 ? pl : ma, $ = bl(n.viewport)(i), y = (() => {
    if (h === "LabelsHidden")
      return j(lt("Return", void 0), dt);
    if (h === "LabelsShown")
      return r.tag === "Leaf" ? Gp(a)($)(c)(s) : Ta(a)(c)(s)(Ap($)(r));
    f();
  })();
  return ce({
    path: i.segment.path,
    role: i.role,
    layer: v,
    effects: [
      Rn("GroupAlpha", i.bgAlpha),
      ...i.blur > 0 ? [Rn("GroupBlur", i.blur * i.segment.placement.scale)] : []
    ]
  })((() => {
    const x = ce({
      path: i.segment.path,
      role: i.role,
      layer: v,
      effects: [
        Rn(
          "GroupClip",
          Ck(o)((() => {
            const N = i.segment.path.length - 1 | 0;
            return N >= 0 && N < i.segment.path.length ? T("Just", i.segment.path[N]) : v;
          })()),
          Qs
        )
      ]
    })((() => {
      const N = (() => {
        if (g.tag === "Just")
          return ce({
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
          })(cc(uc(
            "FloorOverlay",
            {
              path: $l({
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
      })(), C = o.role === "Active" || o.role === "FlyThrough" ? N : j(lt("Return", void 0), dt), k = () => {
        const P = ce({
          path: i.segment.path,
          role: i.role,
          layer: v,
          effects: [Rn("GroupTransform", Fi, u)]
        })((() => {
          const Q = Pp(a)(c)(s), W = () => {
            const B = Lp(a)(t.halftoneShadows)(c)(s), H = () => {
              const rt = Ip(h)(m)(a)(c)(s), ot = () => {
                const M = Ep(a)(c)(s);
                return j(
                  M._1,
                  (() => {
                    if (M._2.tag === "CatNil")
                      return at(
                        "CatCons",
                        () => Wf(a)(_)(c)(s),
                        ut(Y, Y)
                      );
                    if (M._2.tag === "CatCons")
                      return at(
                        "CatCons",
                        M._2._1,
                        ut(
                          M._2._2._1,
                          St(
                            "Cons",
                            at(
                              "CatCons",
                              () => Wf(a)(_)(c)(s),
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
                        St("Cons", at("CatCons", ot, ut(Y, Y)), rt._2._2._2)
                      )
                    );
                  f();
                })()
              );
            };
            return j(
              B._1,
              (() => {
                if (B._2.tag === "CatNil")
                  return at("CatCons", H, ut(Y, Y));
                if (B._2.tag === "CatCons")
                  return at(
                    "CatCons",
                    B._2._1,
                    ut(
                      B._2._2._1,
                      St("Cons", at("CatCons", H, ut(Y, Y)), B._2._2._2)
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
                    St("Cons", at("CatCons", W, ut(Y, Y)), Q._2._2._2)
                  )
                );
              f();
            })()
          );
        })()), E = () => ce({
          path: i.segment.path,
          role: i.role,
          layer: v,
          effects: [Rn("GroupTransform", I3, u)]
        })(Sp(jC)(a)(c)(s));
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
                  St("Cons", at("CatCons", E, ut(Y, Y)), P._2._2._2)
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
            return at("CatCons", k, ut(Y, Y));
          if (C._2.tag === "CatCons")
            return at(
              "CatCons",
              C._2._1,
              ut(
                C._2._2._1,
                St("Cons", at("CatCons", k, ut(Y, Y)), C._2._2._2)
              )
            );
          f();
        })()
      );
    })()), J = () => {
      const N = ce({
        path: i.segment.path,
        role: i.role,
        layer: v,
        effects: [Rn("GroupTransform", Fi, u)]
      })(y);
      return j(
        N._1,
        (() => {
          if (N._2.tag === "CatNil")
            return at("CatCons", () => Mf(t)(n)(e)(i), ut(Y, Y));
          if (N._2.tag === "CatCons")
            return at(
              "CatCons",
              N._2._1,
              ut(
                N._2._2._1,
                St(
                  "Cons",
                  at("CatCons", () => Mf(t)(n)(e)(i), ut(Y, Y)),
                  N._2._2._2
                )
              )
            );
          f();
        })()
      );
    };
    return j(
      x._1,
      (() => {
        if (x._2.tag === "CatNil")
          return at("CatCons", J, ut(Y, Y));
        if (x._2.tag === "CatCons")
          return at(
            "CatCons",
            x._2._1,
            ut(
              x._2._2._1,
              St("Cons", at("CatCons", J, ut(Y, Y)), x._2._2._2)
            )
          );
        f();
      })()
    );
  })());
}, kk = (t) => (n) => (e) => {
  if (t.theme === "Isometric")
    return $k({ ..._k, transparentBg: t.transparentBg })(t.theme)(oa(e).segment.layout)(oa(e).state);
  const r = ss(t)(e), o = (a) => e.hasDives ? r.vw / wa(1)(Tn(e.rootLayout).w) : 1, i = { tileScale: o(), viewport: r }, s = (a) => (c) => {
    if (c.length === 0)
      return j(lt("Return", void 0), dt);
    const l = Bt((_) => v, (_) => (d) => T("Just", { head: _, tail: d }), c);
    if (l.tag === "Nothing")
      return j(lt("Return", void 0), dt);
    if (l.tag === "Just") {
      const _ = Hp(t)(i)(e.camera.zoom)(l._1.head.role === "Active" ? n : D)(a)(l._1.head);
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
                St(
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
  }, u = Bt((a) => v, (a) => (c) => T("Just", { head: a, tail: c }), e.levels);
  if (u.tag === "Nothing")
    return j(lt("Return", void 0), dt);
  if (u.tag === "Just") {
    const a = u._1.tail, c = u._1.head, l = a.length === 0, _ = bk(t)(o())(c.role === "Active" || c.role === "FlyThrough" ? c.bgAlpha : 0)(c.blur)(r)(c.segment.layout)(Jk(e).state)(l && n.tag !== "Leaf" ? zp("SpringLabels", n) : Nk), d = () => {
      const g = Mf(t)(i)(e.camera.zoom)(c);
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
                St(
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
              St("Cons", at("CatCons", d, ut(Y, Y)), _._2._2._2)
            )
          );
        f();
      })()
    );
  }
  f();
}, Uf = (t) => (n) => (e) => O3({ viewport: ss(t)(e), camera: e.camera })(kk(t)(n)(e)), Uc = (t) => (n) => {
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
}, Sk = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = zr(n.Applicative0())(Ba), o = Rp(t);
  return (i) => {
    if (i.tag === "FrameTitleOverlay") {
      const s = i._1;
      return e.bind(r(Uc(t))(s.backing))(() => o(s.text));
    }
    if (i.tag === "TitleCardOverlay") {
      const s = i._1;
      return e.bind(Uc(t)(s.backing))(() => o(s.text));
    }
    if (i.tag === "FloorOverlay")
      return Uc(t)(i._1);
    f();
  };
}, Lk = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = zr(e)(Yt), o = t.popTransform, i = t.popBakedTransform, s = (() => {
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
}, Ek = (t) => {
  const n = t.Monad0(), e = n.Applicative0(), r = zr(e)(Yt);
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
}, Qp = (t) => {
  const n = t.Monad0(), e = zb(t), r = lk(t), o = Kb(t), i = xk(t), s = Gb(t), u = gk(t);
  return H3(n)({
    beginFrame: (a) => t.setViewport(a.viewport),
    endFrame: n.Applicative0().pure(),
    beginGroup: Ek(t),
    endGroup: Lk(t),
    background: Ab(t),
    overlay: Sk(t),
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
    text: Rp(t),
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
}, Pk = wl(np)(gl.measureText), P_ = /* @__PURE__ */ Qp(gl), Ak = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
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
  }, a = Zh(e)(r);
  return () => {
    const c = a(), l = o.levels.length - 1 | 0;
    if (l >= 0 && l < o.levels.length) {
      const d = Pk(bl(ss(u)(o))(o.levels[l]))(o.levels[l].segment.layout)(o.levels[l].state)(c)(), g = Ef(i)(d)(s);
      return P_(Uf(u)(g.applied)(o))(c)(), g.springs;
    }
    const _ = Ef(i)(D)(s);
    return P_(Uf(u)(_.applied)(o))(c)(), _.springs;
  };
}, iu = (t) => "rgb(" + an(t.r) + "," + an(t.g) + "," + an(t.b) + ")", Ho = (t) => t === 1 ? 7 : t === 2 ? 10 : t === 3 ? 14 : t === 4 ? 13 : t === 5 ? 5 : t === 6 ? 1 : t === 7 ? 4 : t === 8 ? 1 : t === 9 ? 2 : t === 10 ? 1 : t === 11 ? 2 : t === 12 ? 1 : t === 18 ? 2 : t === 19 ? 1 : t === 13 ? 2 : t === 14 ? 1 : t === 15 || t === 16 ? 5 : 1, ln = /* @__PURE__ */ d0(/* @__PURE__ */ g0("Fixed", /* @__PURE__ */ _0(0)(20)(2))), kl = (t) => {
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
  return Qr(" ")(n(0));
}, Rk = (t) => ln(t.vx) + " " + ln(t.vy) + " " + ln(t.vw) + " " + ln(t.vh), qe = (t) => (n) => dn(Ue(n >= 0 && n < t.length ? t[n] : 0)), Kc = (t) => (n) => {
  const e = qe(t.ops)(n + 1 | 0);
  return Et(e, e + qe(t.ops)(n + 2 | 0) | 0, t.paths);
}, A_ = /* @__PURE__ */ (() => {
  const t = ir("&")("&amp;"), n = ir("<")("&lt;"), e = (() => {
    const r = ir(">")("&gt;"), o = (() => {
      const i = ir('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), Fk = { vx: 0, vy: 0, vw: 1, vh: 1 }, Gk = (t) => ((e) => {
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
      r = s + Ho(t[s]) | 0;
      continue;
    }
    o = !1, i = Fk;
  }
  return i;
})(0), Cs = (t) => (n) => ({ r: qe(t)(n), g: qe(t)(n + 1 | 0), b: qe(t)(n + 2 | 0), a: qe(t)(n + 3 | 0) }), R_ = (t) => (n) => ({
  color: Cs(t)(n),
  width: (() => {
    const e = n + 4 | 0;
    return e >= 0 && e < t.length ? t[e] : 0;
  })(),
  join: qe(t)(n + 5 | 0),
  cap: qe(t)(n + 6 | 0)
}), Ik = (t) => (n) => '<rect x="' + ln(t.vx) + '" y="' + ln(t.vy) + '" width="' + ln(t.vw) + '" height="' + ln(t.vh) + '" fill="' + iu(n) + '" opacity="' + ln(V(n.a) / 255) + '"/>', Bk = (t) => (n) => '<path d="' + kl(t) + '" fill="' + iu(n) + '" fill-opacity="' + ln(V(n.a) / 255) + '"/>', Op = (t) => ' stroke="' + iu(t.color) + '" stroke-opacity="' + ln(V(t.color.a) / 255) + '" stroke-width="' + ln(t.width) + '" stroke-linejoin="' + (t.join === 0 ? "round" : t.join === 1 ? "bevel" : "miter") + '" stroke-linecap="' + (t.cap === 0 ? "butt" : t.cap === 1 ? "round" : "square") + '"', Dk = (t) => (n) => (e) => '<path d="' + kl(t) + '" fill="' + iu(n) + '" fill-opacity="' + ln(V(n.a) / 255) + '"' + Op(e) + "/>", zk = (t) => (n) => '<path d="' + kl(t) + '" fill="none"' + Op(n) + "/>", Hk = (t) => (n) => {
  const e = Cs(t.ops)(n + 7 | 0), r = qe(t.ops)(n + 12 | 0), o = qe(t.ops)(n + 11 | 0);
  return '<text x="' + ln((() => {
    const i = n + 1 | 0;
    return i >= 0 && i < t.ops.length ? t.ops[i] : 0;
  })()) + '" y="' + ln((() => {
    const i = n + 2 | 0;
    return i >= 0 && i < t.ops.length ? t.ops[i] : 0;
  })()) + '"' + (r === 0 ? ' dy="0.8em"' : r === 1 ? ' dy="0.32em"' : "") + ' fill="' + iu(e) + '" fill-opacity="' + ln(V(e.a) / 255) + '" font-size="' + ln((() => {
    const i = n + 5 | 0;
    return i >= 0 && i < t.ops.length ? t.ops[i] : 0;
  })()) + '" font-family="' + A_((() => {
    const i = qe(t.ops)(n + 4 | 0);
    return i >= 0 && i < t.strs.length ? t.strs[i] + ", ui-sans-serif, system-ui, sans-serif" : ", ui-sans-serif, system-ui, sans-serif";
  })()) + '" font-weight="' + an(qe(t.ops)(n + 6 | 0)) + '" text-anchor="' + (o === 0 ? "start" : o === 1 ? "middle" : "end") + '">' + A_((() => {
    const i = qe(t.ops)(n + 3 | 0);
    return i >= 0 && i < t.strs.length ? t.strs[i] : "";
  })()) + "</text>";
}, Qo = (t) => (n) => (e) => {
  const r = e >= 0 && e < n.ops.length ? T("Just", n.ops[e]) : v;
  if (r.tag === "Just")
    return r._1 === 1 ? Bk(Kc(n)(e))(Cs(n.ops)(e + 3 | 0)) + Qo(t)(n)(e + Ho(r._1) | 0) : r._1 === 2 ? zk(Kc(n)(e))(R_(n.ops)(e + 3 | 0)) + Qo(t)(n)(e + Ho(r._1) | 0) : r._1 === 3 ? Dk(Kc(n)(e))(Cs(n.ops)(e + 3 | 0))(R_(n.ops)(e + 7 | 0)) + Qo(t)(n)(e + Ho(r._1) | 0) : r._1 === 4 ? Hk(n)(e) + Qo(t)(n)(e + Ho(r._1) | 0) : r._1 === 16 ? Ik(t)(Cs(n.ops)(e + 1 | 0)) + Qo(t)(n)(e + Ho(r._1) | 0) : Qo(t)(n)(e + Ho(r._1) | 0);
  if (r.tag === "Nothing")
    return "";
  f();
}, Qk = (t) => {
  const n = Gk(t.ops);
  return { viewBox: Rk(n), body: Qo(n)(t)(0), vx: n.vx, vy: n.vy, vw: n.vw, vh: n.vh };
}, Ok = /* @__PURE__ */ JC(SC)(r2), F_ = (t) => (n) => {
  const e = t.strs;
  return () => {
    const r = a0(e);
    return t.strs.push(n), r;
  };
}, ku = (t) => (n) => {
  const e = t.paths;
  return () => {
    const r = a0(e);
    return t.paths.push(...n), { offset: r, len: n.length };
  };
}, Wk = (t) => (n) => {
  const e = n.tx, r = t.ops;
  return () => {
    r.push(e), t.ops.push(n.ty), t.ops.push(n.sx), t.ops.push(n.sy);
  };
}, G_ = (t) => (n) => {
  const e = n.vx, r = t.ops;
  return () => {
    r.push(e), t.ops.push(n.vy), t.ops.push(n.vw), t.ops.push(n.vh);
  };
}, jr = (t) => (n) => {
  const e = V(n), r = t.ops;
  return () => {
    r.push(e);
  };
}, Su = (t) => (n) => {
  const e = n.len, r = jr(t)(n.offset);
  return () => (r(), jr(t)(e)());
}, qk = () => {
  const t = [], n = [], e = [], r = [];
  return r.push(1), { ops: t, paths: n, strs: e, alphaStack: r };
}, Xk = (t) => {
  if (t.tag === "MeasureText") {
    const n = t._3(ul(t._1)(t._2));
    return () => n;
  }
  if (t.tag === "MeasureInk") {
    const n = t._3(al(t._1)(t._2));
    return () => n;
  }
  f();
}, Wp = (t) => {
  const n = t.alphaStack;
  return () => {
    const e = a0(n);
    if (e === 0)
      return 1;
    const r = i2(Ht, v, e - 1 | 0, t.alphaStack);
    if (r.tag === "Nothing")
      return 1;
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, Oo = (t) => (n) => {
  const e = Wp(t);
  return () => {
    const r = e();
    return jr(t)(n.r)(), jr(t)(n.g)(), jr(t)(n.b)(), jr(t)(dn(Ue(V(n.a) * r + 0.5)))();
  };
}, I_ = (t) => (n) => {
  const e = Oo(t)(n.color);
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
}, Yk = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r;
    if (u.tag === "FillPath") {
      const a = u._3, c = u._2, l = ku(s)(u._1);
      o = !1, i = () => {
        const _ = l();
        return s.ops.push(1), Su(s)(_)(), Oo(s)(c.color)(), a;
      };
      continue;
    }
    if (u.tag === "StrokePath") {
      const a = u._3, c = u._2, l = ku(s)(u._1);
      o = !1, i = () => {
        const _ = l();
        return s.ops.push(2), Su(s)(_)(), I_(s)(c)(), a;
      };
      continue;
    }
    if (u.tag === "FillStrokePath") {
      const a = u._2, c = u._4, l = u._3, _ = ku(s)(u._1);
      o = !1, i = () => {
        const d = _();
        return s.ops.push(3), Su(s)(d)(), Oo(s)(a.color)(), I_(s)(l)(), c;
      };
      continue;
    }
    if (u.tag === "DrawText") {
      const a = u._2, c = u._1, l = F_(s)(ni(c.content));
      o = !1, i = () => {
        const _ = l(), d = F_(s)(c.font.family)();
        return s.ops.push(4), s.ops.push(c.x), s.ops.push(c.y), jr(s)(_)(), jr(s)(d)(), s.ops.push(c.font.size), jr(s)(c.font.weight)(), Oo(s)(c.color)(), s.ops.push((() => {
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
      o = !1, i = () => (l.push(5), Wk(s)(c)(), a);
      continue;
    }
    if (u.tag === "PopTransform") {
      const a = u._1, c = s.ops;
      o = !1, i = () => (c.push(6), a);
      continue;
    }
    if (u.tag === "PushClip") {
      const a = u._3, c = u._2, l = ku(s)(u._1);
      o = !1, i = () => {
        const _ = l();
        return s.ops.push(7), Su(s)(_)(), s.ops.push((() => {
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
      const a = u._1, c = u._2, l = Wp(s);
      o = !1, i = () => {
        const _ = l();
        return s.alphaStack.push(_ * a), s.ops.push(11), s.ops.push(a), c;
      };
      continue;
    }
    if (u.tag === "PopAlpha") {
      const a = u._1, c = s.alphaStack;
      o = !1, i = () => (s2(Ht, v, c), s.ops.push(12), a);
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
      o = !1, i = () => (l.push(15), G_(s)(c)(), a);
      continue;
    }
    if (u.tag === "ClearBackground") {
      const a = u._1, c = u._2, l = s.ops;
      o = !1, i = () => (l.push(16), Oo(s)(a)(), c);
      continue;
    }
    if (u.tag === "BackgroundDots") {
      const a = u._2, c = u._1, l = s.ops;
      o = !1, i = () => (l.push(17), G_(s)(c.viewport)(), Oo(s)(c.bgColor)(), Oo(s)(c.dotColor)(), s.ops.push(c.tile), s.ops.push(c.dotRadius), s.ops.push(c.origin.x), s.ops.push(c.origin.y), a);
      continue;
    }
    f();
  }
  return i;
}, Mk = (t) => (n) => n.type === "metrics" ? Xk(n.value) : n.type === "render" ? Yk(t)(n.value) : Mu("Data.Functor.Variant: pattern match failure [" + n.type + "]"), Uk = (t) => {
  const n = qk();
  return Ok(Mk(n))(t)(), { ops: n.ops, paths: n.paths, strs: n.strs };
}, qp = (t) => t, su = (t) => t, B_ = /* @__PURE__ */ su("Light"), Kk = /* @__PURE__ */ su("Dark"), Vk = /* @__PURE__ */ su("Blueprint"), jk = /* @__PURE__ */ su("Whiteboard"), Zk = /* @__PURE__ */ su("Isometric"), tS = /* @__PURE__ */ qp("PaintBackground"), nS = /* @__PURE__ */ qp("TransparentBackground"), Jo = (t) => "rgb(" + an(t.r) + "," + an(t.g) + "," + an(t.b) + ")", br = /* @__PURE__ */ d0(/* @__PURE__ */ g0("Fixed", /* @__PURE__ */ _0(0)(20)(4))), eS = (t) => "translate(" + br(t.tx) + "," + br(t.ty) + ") scale(" + br(t.sx) + "," + br(t.sy) + ")", zt = /* @__PURE__ */ d0(/* @__PURE__ */ g0("Fixed", /* @__PURE__ */ _0(0)(20)(2))), Sl = (t) => {
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
        n.push("M"), n.push(zt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(zt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 2) {
        n.push("L"), n.push(zt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(zt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 3 | 0;
        continue;
      }
      if (o._1 === 3) {
        n.push("Q"), n.push(zt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(zt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(zt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(zt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), e = r + 5 | 0;
        continue;
      }
      if (o._1 === 4) {
        n.push("C"), n.push(zt((() => {
          const i = r + 1 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(zt((() => {
          const i = r + 2 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(zt((() => {
          const i = r + 3 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(zt((() => {
          const i = r + 4 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(zt((() => {
          const i = r + 5 | 0;
          return i >= 0 && i < t.length ? t[i] : 0;
        })())), n.push(zt((() => {
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
}, rS = {
  map: (t) => (n) => (e) => {
    const r = n(e);
    return () => {
      const o = r();
      return t(o);
    };
  }
}, Kf = /* @__PURE__ */ (() => {
  const t = ir("&")("&amp;"), n = ir("<")("&lt;"), e = (() => {
    const r = ir(">")("&gt;"), o = (() => {
      const i = ir('"')("&quot;");
      return (s) => i(r(s));
    })();
    return (i) => o(n(i));
  })();
  return (r) => e(t(r));
})(), oS = (t) => {
  if (t.style === "RunText")
    return "<tspan>" + Kf(t.text) + "</tspan>";
  if (t.style === "RunCode")
    return `<tspan font-family="'CommitMono', ui-monospace, SFMono-Regular, Menlo, monospace" font-weight="400">` + Kf(t.text) + "</tspan>";
  f();
}, ne = (t) => (n) => {
  const e = n.maskDepth;
  return () => {
    e.value === 0 && n.out.push(t);
  };
}, iS = (t) => (n) => {
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
}, Lu = (t) => (n) => {
  const e = t.bake;
  return () => {
    const r = e.value;
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return iS(r._1)(n);
    f();
  };
}, Xp = {
  apply: (t) => (n) => (e) => {
    const r = t(e), o = n(e);
    return () => {
      const i = r(), s = o();
      return i(s);
    };
  },
  Functor0: () => rS
}, sS = {
  bind: (t) => (n) => (e) => {
    const r = t(e);
    return () => {
      const o = r();
      return n(o)(e)();
    };
  },
  Apply0: () => Xp
}, uS = { pure: (t) => (n) => () => t, Apply0: () => Xp }, Yp = { Applicative0: () => uS, Bind1: () => sS }, aS = (t) => (n) => '<defs><pattern id="' + t + '" x="' + zt(n.origin.x) + '" y="' + zt(n.origin.y) + '" width="' + zt(n.tile) + '" height="' + zt(n.tile) + '" patternUnits="userSpaceOnUse">' + (n.bgColor.a === 0 ? "" : '<rect width="' + zt(n.tile) + '" height="' + zt(n.tile) + '" fill="' + Jo(n.bgColor) + '" fill-opacity="' + zt(V(n.bgColor.a) / 255) + '"/>') + '<circle cx="' + zt(n.tile / 2) + '" cy="' + zt(n.tile / 2) + '" r="' + zt(n.dotRadius) + '" fill="' + Jo(n.dotColor) + '"/></pattern></defs><rect x="' + zt(n.viewport.vx) + '" y="' + zt(n.viewport.vy) + '" width="' + zt(n.viewport.vw) + '" height="' + zt(n.viewport.vh) + '" fill="url(#' + t + ')"/>', D_ = (t) => (n) => '<path d="' + Sl(t) + '" fill="' + Jo(n) + '" fill-opacity="' + zt(V(n.a) / 255) + '"/>', cS = (t) => (n) => (e) => (r) => '<rect x="' + zt(t.x) + '" y="' + zt(t.y) + '" width="' + zt(t.w) + '" height="' + zt(t.h) + '" rx="' + zt(n) + '"' + (() => {
  if (e.tag === "Just")
    return ' fill="' + Jo(e._1.color) + '" fill-opacity="' + zt(V(e._1.color.a) / 255) + '"';
  if (e.tag === "Nothing")
    return ' fill="none"';
  f();
})() + (() => {
  if (r.tag === "Just")
    return ' stroke="' + Jo(r._1.color) + '" stroke-opacity="' + zt(V(r._1.color.a) / 255) + '" stroke-width="' + zt(r._1.width) + '" stroke-linejoin="' + (() => {
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
})() + "/>", z_ = (t) => (n) => '<path d="' + Sl(t) + '" fill="none" stroke="' + Jo(n.color) + '" stroke-opacity="' + zt(V(n.color.a) / 255) + '" stroke-width="' + zt(n.width) + '" stroke-linejoin="' + (() => {
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
})() + '"/>', H_ = (t) => {
  const n = wh(ni(t.content));
  return '<text x="' + zt(t.x) + '" y="' + zt(t.y) + '"' + (() => {
    if (t.baseline === "BaselineTop")
      return ' dy="0.8em"';
    if (t.baseline === "BaselineMiddle")
      return ' dy="0.32em"';
    if (t.baseline === "BaselineAlphabetic" || t.baseline === "BaselineBottom")
      return "";
    f();
  })() + ' fill="' + Jo(t.color) + '" fill-opacity="' + zt(V(t.color.a) / 255) + '" font-size="' + zt(t.font.size) + '" font-family="Ilisarniq, ui-sans-serif, system-ui, sans-serif" font-weight="' + an(t.font.weight) + '" text-anchor="' + (() => {
    if (t.align === "AlignLeft")
      return "start";
    if (t.align === "AlignCenter")
      return "middle";
    if (t.align === "AlignRight")
      return "end";
    f();
  })() + '">' + (n.length === 1 && n[0].style === "RunText" ? Kf(n[0].text) : Qr("")(I(oS)(n))) + "</text>";
}, fS = (t) => "matrix(" + br(t.a) + " " + br(t.b) + " " + br(t.c) + " " + br(t.d) + " " + br(t.e) + " " + br(t.f) + ")", Mp = {
  fillPath: (t) => (n) => (e) => {
    const r = Lu(e)(t);
    return () => {
      const o = r();
      return ne(D_(o)(n.color))(e)();
    };
  },
  strokePath: (t) => (n) => (e) => {
    const r = Lu(e)(t);
    return () => {
      const o = r(), i = e.bake.value;
      return ne(z_(o)((() => {
        if (i.tag === "Nothing")
          return n;
        if (i.tag === "Just")
          return { ...n, width: i._1.sx * n.width };
        f();
      })()))(e)();
    };
  },
  fillStrokePath: (t) => (n) => (e) => (r) => {
    const o = Lu(r)(t);
    return () => {
      const i = o(), s = r.bake.value;
      return ne(D_(i)(n.color) + z_(i)((() => {
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
      return ne(cS((() => {
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
      return ne(H_((() => {
        if (r.tag === "Nothing")
          return t;
        if (r.tag === "Just")
          return { ...t, x: r._1.sx * t.x + r._1.tx, y: r._1.sy * t.y + r._1.ty, font: { ...t.font, size: r._1.sx * t.font.size } };
        f();
      })()))(n)();
    };
  },
  drawTextAffine: (t) => (n) => ne((() => {
    const e = 'transform="' + fS(t) + '"';
    return (e === "" ? "<g>" : "<g " + e + ">") + H_(n) + "</g>";
  })()),
  pushTransform: (t) => ne((() => {
    const n = 'transform="' + eS(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popTransform: /* @__PURE__ */ ne("</g>"),
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
      const i = Lu(e)(t)(), s = "clip" + an(o);
      return ne((() => {
        const u = 'clip-path="url(#' + s + ')"';
        return '<defs><clipPath id="' + s + '"><path d="' + Sl(i) + '"' + (() => {
          if (n === "EvenOdd")
            return ' clip-rule="evenodd"';
          if (n === "NonZero")
            return "";
          f();
        })() + "/></clipPath></defs>" + (u === "" ? "<g>" : "<g " + u + ">");
      })())(e)();
    };
  },
  popClip: /* @__PURE__ */ ne("</g>"),
  pushBlend: (t) => ne((() => {
    const n = (() => {
      if (t === "Normal")
        return 'style="mix-blend-mode: normal"';
      if (t === "Difference")
        return 'style="mix-blend-mode: difference"';
      f();
    })();
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popBlend: /* @__PURE__ */ ne("</g>"),
  pushAlpha: (t) => ne((() => {
    const n = 'opacity="' + zt(t) + '"';
    return n === "" ? "<g>" : "<g " + n + ">";
  })()),
  popAlpha: /* @__PURE__ */ ne("</g>"),
  pushBlur: (t) => (n) => {
    if (t < 0.01)
      return ne("<g>")(n);
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      n.patternCounter.value = r + 1 | 0;
      const o = "lvl-blur-" + an(r);
      return ne((() => {
        const i = 'filter="url(#' + o + ')"';
        return '<defs><filter id="' + o + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="' + zt(t) + '"/></filter></defs>' + (i === "" ? "<g>" : "<g " + i + ">");
      })())(n)();
    };
  },
  popBlur: /* @__PURE__ */ ne("</g>"),
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
  clearBackground: (t) => (n) => ne('<rect x="' + zt(n.viewport.vx) + '" y="' + zt(n.viewport.vy) + '" width="' + zt(n.viewport.vw) + '" height="' + zt(n.viewport.vh) + '" fill="' + Jo(t) + '" opacity="' + zt(V(t.a) / 255) + '"/>')(n),
  backgroundDots: (t) => (n) => {
    const e = n.patternCounter;
    return () => {
      const r = e.value;
      return n.patternCounter.value = r + 1 | 0, ne(aS("bg-dots-" + an(r))(t))(n)();
    };
  },
  measureText: (t) => (n) => (e) => {
    const r = ul(t)(n);
    return () => r;
  },
  measureInk: (t) => (n) => (e) => {
    const r = al(t)(n);
    return () => r;
  },
  insideTokenStyle: (t) => (n) => () => fl,
  Monad0: () => Yp
}, lS = /* @__PURE__ */ Qp(Mp), gS = wl(Yp)(Mp.measureText), _S = (t) => (n) => (e) => (r) => (o) => {
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
  }, s = ss(i)(o);
  return {
    viewBox: zt(s.vx) + " " + zt(s.vy) + " " + zt(s.vw) + " " + zt(s.vh),
    body: (() => {
      const u = [], a = { value: 0 }, c = { value: 0 }, l = { value: 0 }, _ = { value: v };
      return lS(Uf(i)(n)(o))({ out: u, maskDepth: a, clipCounter: c, patternCounter: l, viewport: s, bake: _ })(), Qr("")(u);
    })(),
    vx: s.vx,
    vy: s.vy,
    vw: s.vw,
    vh: s.vh
  };
}, dS = (t) => (n) => (e) => (r) => (o) => (i) => {
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
  }, u = Ef(o)((() => {
    const a = [], c = { value: 0 }, l = { value: 0 }, _ = { value: 0 }, d = { value: v }, g = r.levels.length - 1 | 0;
    if (g >= 0 && g < r.levels.length) {
      const p = bl(ss(s)(r))(r.levels[g]);
      return gS(p)(r.levels[g].segment.layout)(r.levels[g].state)({
        out: a,
        maskDepth: c,
        clipCounter: l,
        patternCounter: _,
        viewport: p,
        bake: d
      })();
    }
    return D;
  })())(i);
  return { parts: _S(t)(u.applied)(n)(e)(r), springs: u.springs };
}, hS = (t) => (n) => {
  if (n.scene.tag === "Structural")
    return n.scene._1.to;
  if (n.scene.tag === "DataFlow")
    return n.scene._1.keyframe;
  if (n.scene.tag === "Hold")
    return n.scene._1;
  if (n.scene.tag === "EnterNode" || n.scene.tag === "ExitNode" || n.scene.tag === "StepScene")
    return t;
  f();
}, Kn = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Ye = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, Up = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Kp = (t) => (e) => {
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
}, Na = /* @__PURE__ */ Ms(ui), Vp = (t) => (e) => {
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
}, jp = /* @__PURE__ */ (() => {
  const t = pe.unfoldr(Ze);
  return (n) => t(_e("IterNode", n, je));
})(), mS = (t) => (e) => {
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
}, kr = (t) => (n) => (e) => {
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
}, $S = (t) => (e) => {
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
}, yS = (t) => t, Zp = (t) => (n) => (e) => e < t ? 0 : e > 1 - n ? 1 : (e - t) / Kn(0.05)(1 - t - n), xS = (t) => (n) => t.labelBasePx * 0.62 * V(w(Up)(0)(I(bd)(wt(n)((e) => ao(`
`)(e))))), Q_ = (t) => (n) => {
  if (t.length === 0)
    return n;
  const e = 6.82 * V(w(Up)(0)(I(bd)(wt(t)((l) => ao(`
`)(l))))), r = e / 2 + 14, o = n.y + n.h / 2, i = o - 5 - 8, s = Kn(n.y + n.h)(i + 12.6) - Ye(n.y)(i - 12.6), u = n.x + n.w / 2, a = u + 13 + e / 2, c = Kn(n.x + n.w)(a + r) - Ye(n.x)(a - r);
  return { x: u - c / 2, y: o - s / 2, w: c, h: s };
}, Vc = /* @__PURE__ */ (() => {
  const t = w((n) => (e) => {
    const r = n.previous.tag === "Just" && Mn(n.previous._1.endT - e.startT) < 1e-4 ? { ...e, fromCam: n.previous._1.toCam } : e;
    return { previous: T("Just", r), spans: kt(n.spans)(r) };
  })({ previous: v, spans: [] });
  return (n) => t(n).spans;
})(), jc = (t) => (n) => {
  const e = Kp(n)(t.keyframes);
  if (e.tag === "Nothing")
    return D;
  if (e.tag === "Just")
    return e._1.nodes;
  f();
}, tm = (t) => (n) => {
  if (n < t.startT)
    return Te("AtKeyframe", t.initialKeyframe);
  const e = jt((r) => n >= r.startT && n < r.endT)(t.spans);
  if (e.tag === "Just") {
    if (e._1.scene.tag === "Structural")
      return Te("InTransition", e._1.scene._1.from, e._1.scene._1.to);
    if (e._1.scene.tag === "DataFlow")
      return Te("AtKeyframe", e._1.scene._1.keyframe);
    if (e._1.scene.tag === "Hold")
      return Te("AtKeyframe", e._1.scene._1);
    if (e._1.scene.tag === "EnterNode" || e._1.scene.tag === "ExitNode" || e._1.scene.tag === "StepScene")
      return Te("AtKeyframe", t.initialKeyframe);
    f();
  }
  if (e.tag === "Nothing")
    return Te(
      "AtKeyframe",
      w(hS)(t.initialKeyframe)(t.spans)
    );
  f();
}, vS = (t) => (n) => (e) => (r) => {
  const o = jt((i) => Na(i.path)(n) && (Mn(i.endT - e) < 1e-4 || Mn(i.startT - r) < 1e-4))(t.segments);
  if (o.tag === "Just")
    return T("Just", o._1);
  if (o.tag === "Nothing")
    return jt((i) => Na(i.path)(n))(t.segments);
  f();
}, Zc = (t) => (n) => {
  const e = Kp(n)(t.keyframes);
  if (e.tag === "Nothing")
    return D;
  if (e.tag === "Just")
    return e._1.edges;
  f();
}, O_ = /* @__PURE__ */ (() => {
  const t = (e, r, o, i, s) => {
    let u = e, a = r, c = o, l = i, _ = s, d = !0, g;
    for (; d; ) {
      if (u === 0) {
        const m = Bt((h) => v, (h) => ($) => T("Just", { head: h, tail: $ }), a);
        if (m.tag === "Nothing") {
          d = !1, g = [];
          continue;
        }
        if (m.tag === "Just") {
          u = 1, a = m._1.head, c = m._1.head, l = !1, _ = m._1.tail;
          continue;
        }
        f();
      }
      if (u === 1) {
        const p = a, m = c, h = l, $ = _, y = Bt((x) => v, (x) => (J) => T("Just", { head: x, tail: J }), $);
        if (y.tag === "Just" && m.intent === "Overview" && y._1.head.intent === "Overview" && !(m.fromCam.zoom === m.toCam.zoom && m.fromCam.center.x === m.toCam.center.x && m.fromCam.center.y === m.toCam.center.y) && !(y._1.head.fromCam.zoom === y._1.head.toCam.zoom && y._1.head.fromCam.center.x === y._1.head.toCam.center.x && y._1.head.fromCam.center.y === y._1.head.toCam.center.y) && Mn(m.toCam.center.x - y._1.head.fromCam.center.x) < 1e-4 && Mn(m.toCam.center.y - y._1.head.fromCam.center.y) < 1e-4 && Mn(m.toCam.zoom - y._1.head.fromCam.zoom) < 1e-4 && Mn(m.endT - y._1.head.startT) < 1e-4) {
          u = 1, a = p, c = y._1.head, l = !0, _ = y._1.tail;
          continue;
        }
        d = !1, g = [h ? { ...p, endT: m.endT, toCam: m.toCam, easing: m.easing, interp: Gr } : p, ...n($)];
      }
    }
    return g;
  }, n = (e) => t(0, e);
  return n;
})(), TS = (t) => (n) => {
  const e = Tn(n), r = Nl({ width: t.widthPx, height: t.heightPx })({
    vx: e.x,
    vy: e.y,
    vw: e.w,
    vh: e.h
  });
  return { w: r.vw, h: r.vh };
}, nm = (t) => (n) => (e) => (r) => {
  const o = Kn(e.center.x - r.x)(r.x + r.w - e.center.x), i = Kn(e.center.y - r.y)(r.y + r.h - e.center.y), s = TS(t)(n);
  return Ye(o <= 0 ? e.zoom : s.w / (o * 2))(i <= 0 ? e.zoom : s.h / (i * 2));
}, em = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, a = Me(u);
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
    const s = e, u = r, a = Bt((c) => v, (c) => (l) => T("Just", { head: c, tail: l }), u);
    if (a.tag === "Just" && a._1.head.intent === "Overview") {
      e = kt(s)(a._1.head), r = a._1.tail;
      continue;
    }
    o = !1, i = { overview: s, rest: u };
  }
  return i;
}, Co = (t) => (n) => (e) => (r) => (o) => {
  const i = { width: n.widthPx, height: n.heightPx }, s = Nl(i)((() => {
    const u = uo(e)(o);
    return { vx: u.x, vy: u.y, vw: u.w, vh: u.h };
  })());
  return t.labelBasePx * r.placement.scale * (i.width <= 0 || s.vw <= 0 ? 0 : i.width / s.vw);
}, NS = (t) => (n) => (e) => (r) => (o) => {
  const i = Co(t)(n)(e)(r)(o);
  return i <= t.minimumReadableLabelPx ? o : { ...o, zoom: o.zoom * t.minimumReadableLabelPx / i };
}, JS = (t) => (n) => (e) => {
  const r = Nt((o) => o.scene.tag === "StepScene" ? T("Just", o.startT) : v)(n.spans);
  return w((o) => (i) => {
    const s = oo(Ht, v, (u) => u.startT < i + 1e-4 && u.endT >= i - 1e-4, o);
    if (s.tag === "Nothing")
      return o;
    if (s.tag === "Just") {
      const u = s._1 >= 0 && s._1 < o.length ? T("Just", o[s._1]) : v;
      if (u.tag === "Nothing")
        return o;
      if (u.tag === "Just") {
        if (u._1.startT >= i - 1e-4)
          return o;
        const a = jt((m) => m > i + 1e-4)(r), c = (() => {
          if (a.tag === "Nothing")
            return n.endT;
          if (a.tag === "Just")
            return a._1;
          f();
        })(), l = It(it.compare)(Nt((m) => m.startT >= i - 1e-4 && m.startT < c - 1e-4 && (m.target.tag === "EdgeWindow" ? m.target._2.tag === "Extend" : m.target.tag === "TokenWindow" || m.target.tag === "FillWindow") ? T("Just", m.startT) : v)(n.windows)), _ = 0 < l.length ? l[0] : i, d = s._1 + 1 | 0, g = d < 1 ? o : Et(d, o.length, o), p = oo(
          Ht,
          v,
          (m) => m.intent === "ActionFocus" && m.startT >= _ - 1e-4 && m.startT < c - 1e-4,
          g
        );
        if (p.tag === "Nothing")
          return o;
        if (p.tag === "Just") {
          const m = p._1 >= 0 && p._1 < g.length ? T("Just", g[p._1]) : v;
          if (m.tag === "Nothing")
            return o;
          if (m.tag === "Just") {
            const h = (s._1 + p._1 | 0) + 2 | 0, $ = h < 1 ? o : Et(h, o.length, o), y = u._1.toCam.zoom === m._1.toCam.zoom && u._1.toCam.center.x === m._1.toCam.center.x && u._1.toCam.center.y === m._1.toCam.center.y ? u._1.fromCam : u._1.toCam, x = kt(s._1 < 1 ? [] : Et(0, s._1, o))({ ...u._1, endT: i, toCam: y }), J = m._1.startT - i;
            if (J <= 1e-4)
              return [...x, { ...m._1, fromCam: y }, ...$];
            const N = y.zoom === m._1.toCam.zoom && y.center.x === m._1.toCam.center.x && y.center.y === m._1.toCam.center.y, C = N ? i + 0 : i + Ye(J)($f(t)(y)(m._1.toCam)), k = { ...m._1, startT: C, endT: m._1.startT, fromCam: m._1.toCam, toCam: m._1.toCam }, P = { ...m._1, startT: i, endT: C, fromCam: y };
            return [...x, ...N ? [] : [P], ...k.endT > k.startT + 1e-4 ? [k] : [], { ...m._1, fromCam: m._1.toCam }, ...$];
          }
        }
      }
    }
    f();
  })(e)(r);
}, CS = (t) => (n) => (e) => (r) => ({
  ...r,
  fromCam: Tg(t)(n)(e)(r.fromCam),
  toCam: Tg(t)(n)(e)(r.toCam)
}), rm = (t) => (n) => t.widthPx <= 0 ? 0 : Ye(n / 4)(32 * n / t.widthPx), bS = (t) => (n) => (e) => (r) => (o) => {
  const i = rm(n)(e), s = r + e / 2 - i;
  return o.x < r - e / 2 + i ? o.x - i + e / 2 : o.x + o.w > s ? o.x + o.w + i - e / 2 : r;
}, kS = (t) => (n) => (e) => Ln(
  (r) => r.endT <= n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e,
  t
), SS = (t) => (n) => (e) => Ln(
  (r) => r.endT <= n && r.target.tag === "NodeWindow" && r.target._2 === "PlopOut" && r.target._1 === e,
  t
), LS = (t) => (n) => (e) => Ln(
  (r) => r.startT > n && r.target.tag === "NodeWindow" && r.target._2 === "PlopIn" && r.target._1 === e,
  t
), ES = (t) => (n) => (e) => Ln(
  (r) => r.startT > n && r.target.tag === "EdgeWindow" && r.target._2.tag === "Extend" && r.target._1 === e,
  t
), Ja = (t) => (n) => (e) => Ln((r) => e(r) && n >= r.startT && n < r.endT, t), PS = (t) => (n) => (e) => {
  if (n.length === 0)
    return e;
  const r = Ye(160)(xS(t)(n) + 31) / 2, o = Ye(40)(t.labelBasePx * 1.2 + 23);
  return { x: e.x - r, y: e.y - o, w: e.w + r * 2, h: e.h + o * 2 };
}, AS = (t) => (n) => (e) => {
  const r = t.padding * 0.75, o = V(8);
  return Ha((i) => {
    if (i.target.tag === "NodeWindow")
      return [];
    if (i.target.tag === "EdgeWindow") {
      if (i.target._2.tag === "Extend")
        return [{ startT: i.startT, endT: i.endT, bbox: ju(n)(e)(i.target._1), priority: 1 }];
      if (i.target._2.tag === "Retract")
        return [];
      f();
    }
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
                const d = ti(u)(Zp(i.target._7)(i.target._8)(((c + _) / 2 - i.startT) / Kn(1e-4)(i.endT - i.startT)));
                if (d.tag === "Just")
                  return { x: d._1.x - r, y: d._1.y - r, w: 0 + r * 2, h: 0 + r * 2 };
                if (d.tag === "Nothing")
                  return { x: 0, y: 0, w: 0, h: 0 };
                f();
              })()
            };
          })();
          return [{ startT: l.startT, endT: l.endT, bbox: Q_(i.target._6)(l.box), priority: 1 }];
        });
      }
      if (s.tag === "Nothing")
        return [
          {
            startT: i.startT,
            endT: i.endT,
            bbox: Q_(i.target._6)(ju(n)(e)(i.target._2)),
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
          bbox: PS(t)(i.target._3)(W0(n)(e)(Zt(
            "Node",
            1,
            1,
            i.target._2,
            void 0,
            D,
            D
          ))),
          priority: 1
        }
      ];
    f();
  });
}, RS = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (o.tag === "Nothing")
    return i.zoom;
  if (o.tag === "Just")
    return Kn(0)(nm(n)(e)(i)((() => {
      const s = t.padding * r.placement.scale;
      return { x: o._1.x - s, y: o._1.y - s, w: o._1.w + s * 2, h: o._1.h + s * 2 };
    })()));
  f();
}, FS = (t) => (n) => (e) => (r) => (o) => {
  const i = (s) => {
    const u = Co(t)(n)(e)(r)(s);
    return u <= 0 || u >= t.minimumReadableLabelPx ? s : { ...s, zoom: s.zoom * t.minimumReadableLabelPx / u };
  };
  return { ...o, fromCam: i(o.fromCam), toCam: i(o.toCam) };
}, GS = (t) => (n) => {
  const e = tm(t)(n);
  if (e.tag === "AtKeyframe")
    return jc(t)(e._1);
  if (e.tag === "InTransition")
    return Zn(F.compare, Vn, jc(t)(e._1), jc(t)(e._2));
  f();
}, IS = (t) => (n) => (e) => Ja(t.windows)(n)((r) => r.target.tag === "NodeWindow" && r.target._1 === e && r.target._2 === "PlopOut") ? !0 : SS(t.windows)(n)(e) ? !1 : Ja(t.windows)(n)((r) => r.target.tag === "NodeWindow" && r.target._1 === e) ? !0 : LS(t.windows)(n)(e) ? !1 : pS(e)(GS(t)(n)), om = (t) => (n) => Nt((e) => IS(t)(n)(e._1) ? T("Just", { x: e._2.x, y: e._2.y, w: e._2.w, h: e._2.h }) : v)(jp(t.layout.nodes)), BS = (t) => (n) => {
  const e = om(t)(n);
  return e.length === 0 ? v : T("Just", Er(e));
}, DS = (t) => Nt((n) => {
  const e = BS(t)(Kn(n.startT)(n.endT - 1e-4));
  if (e.tag === "Nothing")
    return v;
  if (e.tag === "Just")
    return T("Just", { startT: n.startT, endT: n.endT, bbox: e._1, priority: 0 });
  f();
}), zS = (t) => (n) => (e) => (r) => (o) => [
  ...DS(o)(ht((i) => i.startT >= o.startT && i.endT <= o.endT, r.spans)),
  ...AS(t)(o.layout)(e)(o.windows)
], HS = (t) => (n) => (e) => (r) => (o) => (i) => Lx(t)(n)(i.layout)(o.endT)(Nt((s) => s.scene.tag === "StepScene" ? T("Just", s.startT) : v)(i.spans))(zS(t)(e)(r)(o)(i)), QS = (t) => (n) => {
  const e = tm(t)(n);
  if (e.tag === "AtKeyframe")
    return Zc(t)(e._1);
  if (e.tag === "InTransition")
    return Zn(F.compare, Vn, Zc(t)(e._1), Zc(t)(e._2));
  f();
}, OS = (t) => (n) => (e) => Ja(t.windows)(n)((r) => r.target.tag === "EdgeWindow" && r.target._2.tag === "Retract" && r.target._1 === e) ? !0 : kS(t.windows)(n)(e) ? !1 : Ja(t.windows)(n)((r) => r.target.tag === "EdgeWindow" && r.target._1 === e) ? !0 : ES(t.windows)(n)(e) ? !1 : mS(e)(QS(t)(n)), WS = (t) => (n) => {
  const e = [
    ...om(t)(n),
    ...Nt((r) => OS(t)(n)(r._1) ? T("Just", O0(r._2)) : v)(jp(t.layout.edges))
  ];
  return e.length === 0 ? v : T("Just", Er(e));
}, qS = (t) => (n) => (e) => {
  const r = uo(t)(e);
  return n.x >= r.x && n.x + n.w <= r.x + r.w;
}, XS = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  if (o.tag === "Nothing")
    return s;
  if (o.tag === "Just") {
    const u = {
      x: o._1.x - t.padding,
      y: o._1.y - t.padding,
      w: o._1.w + t.padding * 2,
      h: o._1.h + t.padding * 2
    }, a = { x: u.x + u.w / 2, y: u.y + u.h / 2 }, c = { ...s, center: a }, l = { ...c, zoom: nm(n)(e)(c)(u) }, _ = Co(t)(n)(e)(r)(l), d = _ <= 0 || _ >= t.minimumReadableLabelPx ? l : { ...l, zoom: l.zoom * t.minimumReadableLabelPx / _ }, g = uo(e)(d);
    return i.tag === "Nothing" ? {
      ...d,
      center: {
        x: g.w >= o._1.w ? o._1.x + o._1.w / 2 : kr(o._1.x + g.w / 2)(o._1.x + o._1.w - g.w / 2)(a.x),
        y: g.h >= o._1.h ? o._1.y + o._1.h / 2 : kr(o._1.y + g.h / 2)(o._1.y + o._1.h - g.h / 2)(a.y)
      }
    } : i.tag === "Just" ? {
      ...d,
      center: {
        x: g.w >= o._1.w ? o._1.x + o._1.w / 2 : kr(o._1.x + g.w / 2)(o._1.x + o._1.w - g.w / 2)(i._1.x + i._1.w / 2),
        y: g.h >= o._1.h ? o._1.y + o._1.h / 2 : kr(o._1.y + g.h / 2)(o._1.y + o._1.h - g.h / 2)(i._1.y + i._1.h / 2)
      }
    } : {
      ...d,
      center: {
        x: (() => {
          if (g.w >= o._1.w)
            return o._1.x + o._1.w / 2;
          f();
        })(),
        y: (() => {
          if (g.h >= o._1.h)
            return o._1.y + o._1.h / 2;
          f();
        })()
      }
    };
  }
  f();
}, im = (t) => (n) => (e) => {
  const r = t.x + t.w / 2, o = e >= t.w ? { lo: r, hi: r } : { lo: t.x + e / 2, hi: t.x + t.w - e / 2 };
  if (e >= n.w) {
    const a = Kn(o.lo)(n.x + n.w - e / 2), c = Ye(o.hi)(n.x + e / 2);
    return a <= c ? { lo: a, hi: c } : o;
  }
  const i = n.x + n.w / 2;
  if (e >= n.w) {
    const a = Kn(o.lo)(i), c = Ye(o.hi)(i);
    return a <= c ? { lo: a, hi: c } : o;
  }
  const s = Kn(o.lo)(n.x + e / 2), u = Ye(o.hi)(n.x + n.w - e / 2);
  return s <= u ? { lo: s, hi: u } : o;
}, YS = (t) => (n) => (e) => e.endT <= t || e.startT >= n ? v : T("Just", { ...e, startT: Kn(t)(e.startT), endT: Ye(n)(e.endT) }), sm = (t) => (n) => (e) => (r) => (o) => (i) => Nt(YS(i.startT)(i.endT))(I(CS(e)(i.layout)(i.placement))(HS(t)(n)(r)(i.edgeEndpoints)(o)(i))), um = (t) => (n) => (e) => (r) => {
  const o = Tn(t), i = Ye(r.zoom)(o.w / Kn(1e-4)(n.w));
  return {
    ...r,
    center: {
      ...r.center,
      x: (() => {
        const s = im(o)(n)(o.w / Kn(1e-4)(i));
        return kr(s.lo)(s.hi)(e.center.x);
      })()
    },
    zoom: i
  };
}, MS = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => {
  const a = rm(n)(u), c = Tn(e), l = { x: c.x - a, y: c.y - a, w: c.w + a * 2, h: c.h + a * 2 }, _ = (() => {
    if (o.tag === "Nothing")
      return s.center.x;
    if (o.tag === "Just")
      return bS()(n)(u)(i.center.x)(o._1);
    f();
  })();
  if (r.tag === "Nothing") {
    const d = l.x + l.w / 2;
    return u >= l.w ? kr(d)(d)(_) : kr(l.x + u / 2)(l.x + l.w - u / 2)(_);
  }
  if (r.tag === "Just") {
    const d = { x: r._1.x - a, y: r._1.y - a, w: r._1.w + a * 2, h: r._1.h + a * 2 };
    if (u < d.w) {
      const p = l.x + l.w / 2;
      return u >= l.w ? kr(p)(p)(_) : kr(l.x + u / 2)(l.x + l.w - u / 2)(_);
    }
    const g = im(l)(d)(u);
    return kr(g.lo)(g.hi)(_);
  }
  f();
}, US = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = uo(e)(s);
  return u.w <= 0 ? s : { ...s, center: { ...s.center, x: MS()(n)(e)(r)(o)(i)(s)(u.w) } };
}, am = (t) => (n) => (e) => (r) => Wy(t)(n)(e)(r.layout)(r.placement)((() => {
  if (r.layout.nodes.tag === "Leaf")
    return 0;
  if (r.layout.nodes.tag === "Node")
    return r.layout.nodes._2;
  f();
})()).camera, cm = (t) => (n) => (e) => (r) => (o) => {
  const i = uo(e)(o);
  return (() => {
    const s = Tn(r.layout), u = s.x * r.placement.scale + r.placement.tx, a = s.y * r.placement.scale + r.placement.ty;
    return u >= i.x && a >= i.y && u + s.w * r.placement.scale <= i.x + i.w && a + s.h * r.placement.scale <= i.y + i.h;
  })() && Co(t)(n)(e)(r)(o) >= t.minimumReadableLabelPx;
}, tf = (t) => (n) => (e) => (r) => (o) => (i) => cm(t)(n)(e)(r)(o) ? o : NS(t)(n)(e)(r)(i), KS = (t) => (n) => (e) => {
  const r = wS([])(e), o = Bt((s) => v, (s) => (u) => T("Just", { head: s, tail: u }), r.rest), i = r.overview.length - 1 | 0;
  return i >= 0 && i < r.overview.length && 0 < r.overview.length && o.tag === "Just" && Mn(r.overview[0].startT - n.startT) < 1e-4 && o._1.head.intent === "ActionFocus" ? [
    {
      startT: r.overview[0].startT,
      endT: r.overview[i].endT,
      fromCam: t,
      toCam: t,
      easing: r.overview[0].easing,
      interp: Gr,
      intent: vd
    },
    { ...o._1.head, fromCam: t },
    ...o._1.tail
  ] : e;
}, VS = (t) => (n) => {
  const e = Bt((r) => v, (r) => (o) => T("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return [];
  if (e.tag === "Just")
    return [{ ...e._1.head, fromCam: t }, ...e._1.tail];
  f();
}, jS = (t) => (n) => {
  const e = (o) => (i) => (s) => {
    let u = o, a = i, c = s, l = !0, _;
    for (; l; ) {
      const d = u, g = a, m = Bt((h) => v, (h) => ($) => T("Just", { head: h, tail: $ }), c);
      if (m.tag === "Nothing") {
        l = !1, _ = kt(d)(g);
        continue;
      }
      if (m.tag === "Just") {
        if (g.intent === "Overview" && m._1.head.intent === "ActionFocus" && Mn(g.endT - m._1.head.startT) < 1e-4 && g.fromCam.zoom === g.toCam.zoom && g.fromCam.center.x === g.toCam.center.x && g.fromCam.center.y === g.toCam.center.y && (() => {
          const h = m._1.head.startT;
          return !(m._1.head.fromCam.zoom === m._1.head.toCam.zoom && m._1.head.fromCam.center.x === m._1.head.toCam.center.x && m._1.head.fromCam.center.y === m._1.head.toCam.center.y) && Ln(
            ($) => Mn($.startT - h) < 1e-4 && ($.target.tag === "EdgeWindow" ? $.target._2.tag === "Extend" : $.target.tag === "TokenWindow" || $.target.tag === "FillWindow"),
            t.windows
          );
        })()) {
          const h = m._1.head.startT, $ = It(it.compare)(Nt((N) => N.target.tag === "EdgeWindow" && N.target._2.tag === "Extend" && Mn(N.endT - h) < 1e-4 ? T("Just", N.startT) : v)(t.windows)), y = 0 < $.length ? $[0] : h, x = Kn(g.startT)(y - (m._1.head.endT - m._1.head.startT)), J = { ...g, endT: x };
          u = kt(J.endT > J.startT ? kt(d)(J) : d)({ ...m._1.head, startT: x, endT: y }), a = { ...m._1.head, startT: y, fromCam: m._1.head.toCam }, c = m._1.tail;
          continue;
        }
        u = kt(d)(g), a = m._1.head, c = m._1.tail;
        continue;
      }
      f();
    }
    return _;
  }, r = Bt((o) => v, (o) => (i) => T("Just", { head: o, tail: i }), n);
  if (r.tag === "Nothing")
    return [];
  if (r.tag === "Just")
    return e([])(r._1.head)(r._1.tail);
  f();
}, ZS = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Tn(r.layout), u = {
    x: s.x * r.placement.scale + r.placement.tx,
    y: s.y * r.placement.scale + r.placement.ty,
    w: s.w * r.placement.scale,
    h: s.h * r.placement.scale
  }, a = um(e)(u)(o)(i);
  return u.w / Kn(1e-4)(u.h) >= 0.33 && i.zoom / Kn(1e-4)(a.zoom) <= 1.25 && uo(e)(a).w >= u.w - 1e-3 && Co(t)(n)(e)(r)(a) >= t.minimumReadableLabelPx * 0.85 ? a : i;
}, t5 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = Tn(r.layout), a = u.w * r.placement.scale, c = a / Kn(1e-4)(u.h * r.placement.scale);
  if (o.tag === "Nothing")
    return s;
  if (o.tag === "Just") {
    if (qS(e)(o._1)(s))
      return s;
    const l = um(e)(o._1)(i)(s);
    return s.zoom / Kn(1e-4)(l.zoom) <= 1.25 && (Co(t)(n)(e)(r)(l) >= t.minimumReadableLabelPx - 1e-3 || o._1.w >= a - 1e-3 && c >= 0.33 && Co(t)(n)(e)(r)(l) >= t.minimumReadableLabelPx * 0.85) ? l : s;
  }
  f();
}, n5 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = {
    ...s,
    center: (() => {
      if (i.tag === "Nothing")
        return s.center;
      if (i.tag === "Just")
        return { x: i._1.x + i._1.w / 2, y: i._1.y + i._1.h / 2 };
      f();
    })()
  }, a = Co(t)(n)(e)(r)(u);
  return US()(n)(e)(o)(i)(s)(t5(t)(n)(e)(r)(o)(s)(ZS(t)(n)(e)(r)(s)(a <= 0 ? u : { ...u, zoom: Ye(u.zoom * t.minimumReadableLabelPx / a)(RS(t)(n)(e)(r)(i)(u)) })));
}, nf = (t) => (n) => (e) => (r) => (o) => (i) => (s) => r.placement.scale === 1 && r.placement.tx === 0 && r.placement.ty === 0 ? XS(t)(n)(e)(r)(o)(i)(s) : cm(t)(n)(e)(r)(s) ? s : n5(t)(n)(e)(r)(o)(i)(s), W_ = (t) => {
  const n = (r) => (o) => {
    let i = r, s = o, u = !0, a;
    for (; u; ) {
      const c = i, l = s, _ = Bt((d) => v, (d) => (g) => T("Just", { head: d, tail: g }), l);
      if (_.tag === "Just" && _._1.head.intent === "Overview") {
        i = kt(c)(_._1.head), s = _._1.tail;
        continue;
      }
      u = !1, a = { overview: c, rest: l };
    }
    return a;
  };
  return ((r) => (o) => {
    let i = r, s = o, u = !0, a;
    for (; u; ) {
      const c = i, _ = Bt((d) => v, (d) => (g) => T("Just", { head: d, tail: g }), s);
      if (_.tag === "Nothing") {
        u = !1, a = c;
        continue;
      }
      if (_.tag === "Just") {
        if (_._1.head.intent === "Overview") {
          const d = n([_._1.head])(_._1.tail), g = Bt((h) => v, (h) => ($) => T("Just", { head: h, tail: $ }), d.rest), p = c.length - 1 | 0, m = p >= 0 && p < c.length ? T("Just", c[p]) : v;
          if (m.tag === "Just" && g.tag === "Just" && m._1.intent === "ActionFocus" && (() => {
            const h = d.overview.length - 1 | 0;
            return g._1.head.intent === "ActionFocus" && (h >= 0 && h < d.overview.length && 0 < d.overview.length ? d.overview[h].endT - d.overview[0].startT <= 1.0001 : !0);
          })() && 0 < d.overview.length) {
            const h = d.overview.length - 1 | 0;
            if (h >= 0 && h < d.overview.length) {
              i = kt(c)({
                startT: d.overview[0].startT,
                endT: d.overview[h].endT,
                fromCam: m._1.toCam,
                toCam: m._1.toCam,
                easing: d.overview[0].easing,
                interp: Gr,
                intent: Ua
              }), s = [{ ...g._1.head, fromCam: m._1.toCam }, ...g._1.tail];
              continue;
            }
          }
          i = [...c, ...d.overview], s = d.rest;
          continue;
        }
        i = kt(c)(_._1.head), s = _._1.tail;
        continue;
      }
      f();
    }
    return a;
  })([])(t);
}, e5 = (t) => (n) => (e) => {
  const r = em([])(e), o = r.overview.length - 1 | 0;
  if (o >= 0 && o < r.overview.length) {
    if (0 < r.overview.length) {
      const i = r.prefix.length - 1 | 0;
      if (i >= 0 && i < r.prefix.length && r.prefix[i].intent === "ActionFocus" && Mn(r.overview[o].endT - n.endT) < 1e-4)
        return [
          ...r.prefix,
          {
            startT: r.overview[0].startT,
            endT: r.overview[o].endT,
            fromCam: r.prefix[i].toCam,
            toCam: r.prefix[i].toCam,
            easing: r.overview[0].easing,
            interp: Gr,
            intent: Ua
          }
        ];
    }
    return e;
  }
  return 0 < r.overview.length && r.prefix.length - 1 | 0, e;
}, q_ = (t) => (n) => (e) => {
  const r = em([])(e), o = r.overview.length - 1 | 0;
  if (o >= 0 && o < r.overview.length) {
    if (0 < r.overview.length) {
      const i = r.prefix.length - 1 | 0;
      if (i >= 0 && i < r.prefix.length && (() => {
        const s = r.overview[o].endT;
        return r.prefix[i].intent === "ActionFocus" && (() => {
          const u = r.overview.length - 1 | 0;
          return Ln((a) => a.direction === "DiveIn" && Na(a.parentPath)(t.path) && Mn(a.startT - s) < 1e-4, n) && (u >= 0 && u < r.overview.length && 0 < r.overview.length ? r.overview[u].endT - r.overview[0].startT <= 1.0001 : !0);
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
            interp: Gr,
            intent: Ua
          }
        ];
    }
    return e;
  }
  return e;
}, r5 = (t) => (n) => {
  const e = n.fromCam.zoom === n.toCam.zoom && n.fromCam.center.x === n.toCam.center.x && n.fromCam.center.y === n.toCam.center.y ? (n.startT + n.endT) / 2 : n.endT + 1e-4, r = Nt((o) => o.target.tag === "EdgeWindow" ? o.target._2.tag === "Extend" ? T("Just", ju(t.layout)(t.edgeEndpoints)(o.target._1)) : v : o.target.tag === "TokenWindow" ? T(
    "Just",
    (() => {
      const i = [
        ...Nt((s) => {
          const u = $S(s)(t.layout.nodes);
          return u.tag === "Just" ? T("Just", { x: u._1.x, y: u._1.y, w: u._1.w, h: u._1.h }) : v;
        })([o.target._4, o.target._5]),
        ...(() => {
          const s = Vp(o.target._2)(t.layout.edges), u = Zp(o.target._7)(o.target._8)((e - o.startT) / Kn(1e-4)(o.endT - o.startT)), a = (() => {
            if (s.tag === "Just")
              return ti((() => {
                if (o.target._3 === "Forward")
                  return s._1;
                if (o.target._3 === "Backward")
                  return fn(s._1);
                f();
              })())(u);
            if (s.tag === "Nothing")
              return v;
            f();
          })();
          return a.tag === "Just" ? [{ x: a._1.x, y: a._1.y, w: 0, h: 0 }] : [];
        })()
      ];
      return i.length === 0 ? ju(t.layout)(t.edgeEndpoints)(o.target._2) : Er(i);
    })()
  ) : o.target.tag === "FillWindow" ? T(
    "Just",
    W0(t.layout)(t.edgeEndpoints)(Zt(
      "Node",
      1,
      1,
      o.target._2,
      void 0,
      D,
      D
    ))
  ) : v)(ht((o) => o.startT <= e && e < o.endT, t.windows));
  return r.length === 0 ? v : T(
    "Just",
    (() => {
      const o = Er(r);
      return { x: o.x * t.placement.scale + t.placement.tx, y: o.y * t.placement.scale + t.placement.ty, w: o.w * t.placement.scale, h: o.h * t.placement.scale };
    })()
  );
}, o5 = (t) => (n) => {
  const e = WS(t)(n.endT + 1e-4);
  return e.tag === "Just" ? T(
    "Just",
    { x: e._1.x * t.placement.scale + t.placement.tx, y: e._1.y * t.placement.scale + t.placement.ty, w: e._1.w * t.placement.scale, h: e._1.h * t.placement.scale }
  ) : v;
}, fm = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = o(i.fromCam), u = o(i.toCam), a = r5(r)(i), c = o5(r)(i);
  return s.zoom === u.zoom && s.center.x === u.center.x && s.center.y === u.center.y ? {
    ...i,
    fromCam: nf(t)(n)(e)(r)(c)(a)(s),
    toCam: nf(t)(n)(e)(r)(c)(a)(u)
  } : { ...i, fromCam: s, toCam: nf(t)(n)(e)(r)(c)(a)(u) };
}, lm = (t) => (n) => (e) => (r) => (o) => (i) => i.intent === "ActionFocus" ? fm(t)(n)(e)(r)(tf(t)(n)(e)(r)(o))(i) : {
  ...i,
  fromCam: tf(t)(n)(e)(r)(o)(i.fromCam),
  toCam: tf(t)(n)(e)(r)(o)(i.toCam)
}, gm = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = jt((u) => u.intent === "ActionFocus" && u.startT >= r.startT - 1e-4)(i);
  if (s.tag === "Just") {
    const u = lm(t)(n)(e)(r)(o)(s._1).toCam;
    return { ...o, center: u.center, zoom: u.zoom < o.zoom ? u.zoom : o.zoom };
  }
  if (s.tag === "Nothing")
    return o;
  f();
}, i5 = (t) => (n) => (e) => (r) => (o) => gm(t)(n)(e)(r)(am(t)(n)(e)(r))(o), s5 = (t) => (n) => (e) => (r) => (o) => o.intent === "ActionFocus" ? fm(t)(n)(e)(r)(yS)(o) : o, Ca = (t) => (n) => (e) => (r) => (o) => (i) => Vc(I(FS(t)(n)(e)(i))(JS(t)(i)(jS(i)((() => {
  const s = sm(t)(n)(e)(r)(o)(i);
  if (i.placement.scale === 1 && i.placement.tx === 0 && i.placement.ty === 0)
    return q_(i)(o.dives)(W_(O_(Vc(I(s5(t)(n)(e)(i))(s)))));
  const u = am(t)(n)(e)(i), a = gm(t)(n)(e)(i)(u)(s);
  return s.length === 0 ? [
    {
      startT: i.startT,
      endT: i.endT,
      fromCam: a,
      toCam: a,
      easing: $d,
      interp: Gr,
      intent: vd
    }
  ] : e5()(i)(KS(a)(i)(q_(i)(o.dives)(W_(O_(Vc(VS(a)(I(lm(t)(n)(e)(i)(u))(s))))))));
})())))), u5 = (t) => (n) => (e) => (r) => (o) => It((i) => (s) => it.compare(i.startT)(s.startT))(wt(o.segments)(Ca(t)(n)(e)(r)(o))), a5 = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  if (i.direction === "DiveIn")
    return qi(t)(e)(Ca(t)(n)(e)(r)(o)(s))(i.startT - 1e-4).camera;
  if (i.direction === "DiveOut")
    return qi(t)(e)(Ca(t)(n)(e)(r)(o)(s))(i.endT + 1e-4).camera;
  f();
}, c5 = (t) => (n) => (e) => (r) => (o) => Nt((i) => {
  const s = vS(o)(i.parentPath)(i.startT)(i.endT);
  if (s.tag === "Just") {
    const u = i.childPath, a = jt((c) => Na(c.path)(u))(o.segments);
    if (a.tag === "Just") {
      const c = Ca(t)(n)(e)(r)(o)(a._1), l = i5(t)(n)(e)(a._1)(sm(t)(n)(e)(r)(o)(a._1)), _ = a5(t)(n)(e)(r)(o)(i)(s._1), d = (() => {
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
            easing: wo,
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
            easing: wo,
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
})(o.dives), _m = (t) => (n) => (e) => (r) => (o) => [
  ...c5(t)(n)(e)(r)(o),
  ...u5(t)(n)(e)(r)(o)
], mo = (t, n) => ({ tag: t, _1: n }), lc = (t) => (e) => {
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
}, ze = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, dm = /* @__PURE__ */ hn(F)(Yt), X_ = (t) => (e) => {
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
}, hm = (t) => (e) => {
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
}, pm = (t) => (e) => {
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
}, Y_ = (t) => (e) => {
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
}, mi = /* @__PURE__ */ (() => {
  const t = pe.unfoldr((n) => {
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
        return e(r._5, St("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Y);
  })());
})(), f5 = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(D), Vf = (t) => (e) => {
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
}, mm = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, l5 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, Eu = (t) => (e) => {
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
}, g5 = /* @__PURE__ */ mo("NoKeyframes"), _5 = (t) => mo("DuplicateEventId", t), d5 = (t) => mo("UnknownEvent", t), $m = (t) => (n) => ({
  ...n,
  cameraSpans: _m(n.cameraConfig)(t)(n.layout)(n.keyframes)({
    endT: n.totalDuration,
    spans: n.spans,
    windows: n.windows,
    segments: n.segments,
    dives: n.dives
  })
}), h5 = (t) => (n) => (e) => (r) => {
  const o = lc(r.edge)(n.edges), i = (() => {
    if (o.tag === "Nothing")
      return 0;
    if (o.tag === "Just")
      return Vs(o._1);
    f();
  })(), s = ze(t.minTokenDuration)(ze(V(w((u) => (a) => u + os(a).length | 0)(0)(r.labels)) * t.tokenReadSecPerChar)(t.tokenSpeed <= 0 ? 0 : i / t.tokenSpeed)) + e.post;
  return { duration: s, holdPre: 0, holdPost: s <= 0 ? 0 : e.post / s };
}, p5 = /* @__PURE__ */ Ha((t) => {
  const n = ao(`
`)(t);
  return n.length === 0 ? [""] : n;
}), m5 = (t) => (n) => dm(Nt((e) => {
  if (e.kind.tag === "SendToken")
    return T(
      "Just",
      b(
        e.id,
        {
          post: (() => {
            const r = e.id;
            return (() => {
              const o = e.kind._1.to;
              return Ln(
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
})(n)), $5 = (t) => {
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
}, y5 = (t) => Nt((() => {
  const n = t.path;
  return (e) => e.target.tag === "TokenWindow" ? T(
    "Just",
    { path: n, eventId: e.target._1, window: e, from: e.target._4, to: e.target._5, labels: e.target._6, holdPre: e.target._7, holdPost: e.target._8 }
  ) : v;
})())(t.windows), x5 = (t) => (n) => (e) => {
  const r = lc(e)(t);
  if (r.tag === "Nothing")
    return Ng;
  if (r.tag === "Just") {
    const o = X_(r._1.target)(n);
    return X_(r._1.source)(n) ? o ? Vx : Kx : Ng;
  }
  f();
}, M_ = (t) => (n) => {
  if (t.tag === "Just" && t._1 > n.endT + 1e-4) {
    const e = ze(0)(n.endT - n.startT), r = ze(n.startT)(t._1 - e);
    return { ...n, startT: r, endT: r + e };
  }
  return n;
}, ym = /* @__PURE__ */ I(so), v5 = { post: 0 }, T5 = (t) => (n) => (e) => (r) => (o) => {
  const i = hm(o.event.id)(e), s = (() => {
    if (i.tag === "Nothing")
      return v5;
    if (i.tag === "Just")
      return i._1;
    f();
  })(), u = (() => {
    if (o.event.when.tag === "First")
      return 0;
    if (o.event.when.tag === "At")
      return o.event.when._1;
    if (o.event.when.tag === "After") {
      const c = o.event.when._1, l = jt((_) => _.event.id === c)(r);
      if (l.tag === "Nothing")
        return 0;
      if (l.tag === "Just")
        return l._1.endT;
      f();
    }
    if (o.event.when.tag === "With") {
      const c = o.event.when._1, l = jt((_) => _.event.id === c)(r);
      if (l.tag === "Nothing")
        return 0;
      if (l.tag === "Just")
        return l._1.startT;
    }
    f();
  })(), a = (() => {
    if (o.event.kind.tag === "SendToken")
      return h5(t)(n)(s)(o.event.kind._1);
    if (o.event.kind.tag === "FillNodeWithoutTransition")
      return { duration: t.plop, holdPre: 0, holdPost: 0 };
    f();
  })();
  return kt(r)({ startT: u, endT: u + a.duration, event: o.event, holdPre: a.holdPre, holdPost: a.holdPost });
}, xm = (t) => (n) => (e) => w(T5(t)(n)(m5(t)(e)))([])(Xt((r) => (o) => ({ event: o }))(e)), w5 = (t) => w((n) => (e) => {
  const r = Me(n);
  if (r.tag === "Nothing")
    return [e];
  if (r.tag === "Just")
    return e.startT <= r._1.last.endT + 1e-4 ? kt(r._1.init)({ ...r._1.last, endT: ze(r._1.last.endT)(e.endT) }) : kt(n)(e);
  f();
})([])(It((n) => (e) => it.compare(n.startT)(e.startT))(t)), N5 = (t) => (n) => {
  const e = pm(n)(t.interiors);
  if (e.tag === "Nothing")
    return t;
  if (e.tag === "Just")
    return e._1;
  f();
}, J5 = (t) => (n) => {
  const e = It(it.compare)(Nt((r) => r.target.tag === "TokenWindow" ? r.target._4 === n || r.target._5 === n ? T("Just", r.startT) : v : r.target.tag === "FillWindow" && r.target._2 === n ? T("Just", r.startT) : v)(t));
  return 0 < e.length ? T("Just", e[0]) : v;
}, C5 = (t) => (n) => {
  const e = It(it.compare)(Nt((r) => r.target.tag === "TokenWindow" && r.target._2 === n ? T("Just", r.startT) : v)(t));
  return 0 < e.length ? T("Just", e[0]) : v;
}, b5 = (t) => (n) => n.target.tag === "NodeWindow" ? n.target._2 === "PlopIn" ? M_(J5(t.windows)(n.target._1))(n) : n : n.target.tag === "EdgeWindow" && n.target._2.tag === "Extend" ? M_(C5(t.windows)(n.target._1))(n) : n, k5 = (t) => ({ ...t, windows: It((n) => (e) => it.compare(n.startT)(e.startT))(I(b5(t))(t.windows)) }), S5 = (t) => {
  if (t.when.tag === "First")
    return [];
  if (t.when.tag === "At")
    return [];
  if (t.when.tag === "After")
    return [t.when._1];
  if (t.when.tag === "With")
    return [t.when._1];
  f();
}, U_ = { id: "", nodes: D, edges: D, kind: js }, L5 = (t) => (n) => Vy((() => {
  const e = Y_(n.from)(t);
  if (e.tag === "Nothing")
    return U_;
  if (e.tag === "Just")
    return e._1;
  f();
})())((() => {
  const e = Y_(n.to)(t);
  if (e.tag === "Nothing")
    return U_;
  if (e.tag === "Just")
    return e._1;
  f();
})()), E5 = (t) => (n) => {
  const e = pm(n)(t.interiors);
  if (e.tag === "Nothing")
    return { layout: t.layout, interiors: D };
  if (e.tag === "Just")
    return e._1;
  f();
}, vm = { id: "", index: -1, kind: "", name: "", time: 0, endTime: 0, path: [], tokenIndex: -1, lineIndex: -1, text: "", from: "", to: "" }, P5 = (t) => (n) => n.scene.tag === "StepScene" ? T(
  "Just",
  { ...vm, id: "step:" + n.scene._1, kind: "step", name: n.scene._1, time: n.startT, endTime: n.startT, path: ym(t) }
) : v, A5 = (t) => Nt(P5(t.path))(t.spans), ef = (t) => (n) => (e) => (r) => {
  const o = lc(r)(e.edges);
  if (o.tag === "Just")
    return t <= 0 ? n : ze(n)(Vs(o._1) / t);
  if (o.tag === "Nothing")
    return n;
  f();
}, Tm = (t) => (n) => (e) => (r) => (o) => {
  const i = t.plop, s = L5(e)(o), u = I((g) => ({
    startT: 0,
    endT: 0 + ef(t.edgeSpeed)(t.minEdgeDuration)(n)(g),
    target: Ni(
      "EdgeWindow",
      g,
      ta("Extend", vf)
    )
  }))(mi(s.entering.edges)), a = I((g) => ({ startT: 0, endT: i, target: Ni("NodeWindow", g, xf) }))(mi(s.entering.nodes)), c = w(ze)(0)(I((g) => ef(t.edgeSpeed)(t.minEdgeDuration)(n)(g))(mi(s.leaving.edges))), l = (g) => Ln(
    (p) => {
      const m = lc(p)(r);
      if (m.tag === "Just")
        return m._1.source === g || m._1.target === g;
      if (m.tag === "Nothing")
        return !1;
      f();
    },
    mi(s.leaving.edges)
  ) ? c : 0, _ = I((g) => ({
    startT: l(g),
    endT: l(g) + t.plop,
    target: Ni("NodeWindow", g, Xx)
  }))(mi(s.leaving.nodes)), d = I((g) => ({
    startT: 0,
    endT: ef(t.edgeSpeed)(t.minEdgeDuration)(n)(g),
    target: Ni(
      "EdgeWindow",
      g,
      ta("Retract", x5(r)(s.leaving.nodes)(g))
    )
  }))(mi(s.leaving.edges));
  return {
    duration: (() => {
      const g = It(it.compare)([
        ...I((m) => m.endT)(d),
        ...I((m) => m.endT)(_),
        ...I((m) => m.endT)(a),
        ...I((m) => m.endT)(u)
      ]), p = g.length - 1 | 0;
      return p >= 0 && p < g.length ? g[p] + t.gap : t.gap;
    })(),
    windows: [...d, ..._, ...a, ...u]
  };
}, R5 = (t) => (n) => (e) => (r) => (o) => (i) => I((() => {
  const s = o.startT;
  return (u) => ({ ...u, startT: u.startT + s, endT: u.endT + s });
})())(Tm(t)(n)(e)(r)(i).windows), F5 = (t) => Nt((n) => tn(Ii, n).length > 1 ? T(
  "Just",
  (() => {
    const e = Bt(
      (r) => v,
      (r) => (o) => T("Just", { head: r, tail: o }),
      tn(Ii, n)
    );
    if (e.tag === "Just")
      return e._1.head;
    if (e.tag === "Nothing")
      return "";
    f();
  })()
) : v)(b2(ui)(It(F.compare)(t))), G5 = (t) => {
  const n = I((r) => r.id)(t), e = f5(n);
  return [
    ...I(_5)(F5(n)),
    ...I(d5)(ht((r) => !Vf(r)(e), wt(t)(S5)))
  ];
}, I5 = (t) => {
  const n = dm(I((r) => b(
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
    if (Vf(i)(o))
      return [mo("ScheduleCycle", [...tn(Pe.foldr, o), i])];
    if (Vf(i)(r))
      return [];
    const s = hm(i)(n);
    if (s.tag === "Nothing")
      return [];
    if (s.tag === "Just")
      return wt(s._1)(e(tt(F)(i)()(r))(tt(F)(i)()(o)));
    f();
  };
  return wt(t)((r) => e(D)(D)(r.id));
}, Ll = {
  plop: 0.5,
  gap: 0,
  edgeSpeed: 350,
  minEdgeDuration: 0.3,
  tokenSpeed: 250,
  minTokenDuration: 1.8,
  tokenHold: 0,
  stillHold: 1.8,
  hatchHold: 0,
  tokenReadSecPerChar: 0.06,
  nodeEasing: ux,
  edgeEasing: wo,
  tokenEasing: $d,
  diveDur: 1.2,
  retreatDur: 1.2
}, B5 = (t) => (n) => (e) => (r) => I((() => {
  const o = e.startT;
  return (i) => ({ ...i, startT: i.startT + o, endT: i.endT + o });
})())(Nt($5)(xm(t)(n)(r.events))), D5 = (t) => (n) => (e) => (r) => (o) => {
  if (o.scene.tag === "Structural")
    return R5(t)(n)(e)(r)(o)(o.scene._1);
  if (o.scene.tag === "Hold")
    return [];
  if (o.scene.tag === "DataFlow")
    return B5(t)(n)(o)(o.scene._1);
  if (o.scene.tag === "EnterNode")
    return [];
  if (o.scene.tag === "ExitNode")
    return [];
  if (o.scene.tag === "StepScene")
    return [];
  f();
}, z5 = (t) => (n) => (e) => {
  const r = xm(t)(n)(e.events);
  return r.length === 0 ? t.gap : w(ze)(0)(I((o) => o.endT)(r)) + t.gap;
}, H5 = (t) => (n) => (e) => (r) => (o) => {
  if (o.tag === "Structural")
    return Tm(t)(n)(e)(r)(o._1).duration;
  if (o.tag === "Hold")
    return t.stillHold;
  if (o.tag === "DataFlow")
    return z5(t)(n)(o._1);
  if (o.tag === "EnterNode" || o.tag === "ExitNode" || o.tag === "StepScene")
    return 0;
  f();
}, wm = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = Dy(n)(r), u = e.layout, a = pd(I((m) => b(m.id, m))(o.keyframes)), c = 0 < o.keyframes.length ? T("Just", o.keyframes[0]) : v, l = (() => {
    if (c.tag === "Just")
      return c._1.id;
    if (c.tag === "Nothing")
      return "";
    f();
  })(), _ = ix(o), d = (m) => ({
    segments: m.runSpans.length === 0 ? m.segments : kt(m.segments)({
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
      const J = d(m), N = m.t + t.diveDur, C = kt(r)(h._1), k = wm(t)(n)(E5(e)(h._1))(C)(N5(o)(h._1))(N), P = k.endT + t.retreatDur;
      return {
        ...m,
        t: P,
        runStart: P,
        runSpans: [],
        runWindows: [],
        segments: [...J.segments, ...k.segments],
        spans: [...J.spans, ...k.spans],
        windows: [...J.windows, ...k.windows],
        dives: [
          ...J.dives,
          { startT: m.t, endT: N, node: h._1, parentPath: r, childPath: C, direction: Yx },
          ...k.dives,
          { startT: k.endT, endT: P, node: h._1, parentPath: r, childPath: C, direction: Mx }
        ]
      };
    }
    if (h.tag === "ExitNode")
      return m;
    const $ = m.t + H5(t)(u)(a)(_)(h), y = { startT: m.t, endT: $, scene: h }, x = D5(t)(u)(a)(_)(y);
    return {
      ...m,
      t: $,
      runSpans: kt(m.runSpans)(y),
      runWindows: [...m.runWindows, ...x],
      spans: kt(m.spans)(y),
      windows: [...m.windows, ...x]
    };
  })({ t: i, runStart: i, runSpans: [], runWindows: [], segments: [], spans: [], windows: [], dives: [] })(o.scenes), p = d(g);
  return {
    endT: g.t,
    spans: p.spans,
    windows: It((m) => (h) => it.compare(m.startT)(h.startT))(p.windows),
    segments: p.segments,
    dives: p.dives
  };
}, Q5 = (t) => (n) => {
  const e = it.compare(t.time)(n.time);
  return e === "EQ" ? F.compare(t.id)(n.id) : e;
}, Qe = (t) => (n) => n - w((e) => (r) => e + ze(0)(mm(n)(r.endT) - r.startT))(0)(t), O5 = (t) => (n) => {
  const e = ze(t.startT)(n.startT), r = mm(t.endT)(n.endT);
  return r > e + 1e-4 ? T("Just", { startT: e, endT: r }) : v;
}, W5 = (t) => (n) => {
  if (n.scene.tag === "Structural") {
    const e = w((r) => (o) => ({ cursor: ze(r.cursor)(o.endT), cuts: o.startT > r.cursor + 1e-4 ? kt(r.cuts)({ startT: r.cursor, endT: o.startT }) : r.cuts }))({ cursor: n.startT, cuts: [] })(It((r) => (o) => it.compare(r.startT)(o.startT))(Nt(O5(n))(t)));
    return n.endT > e.cursor + 1e-4 ? kt(e.cuts)({ startT: e.cursor, endT: n.endT }) : e.cuts;
  }
  return [];
}, q5 = (t) => {
  const n = w5(wt(t.spans)(W5(t.windows)));
  return n.length === 0 ? t : {
    ...t,
    endT: Qe(n)(t.endT),
    spans: I((e) => ({ ...e, startT: Qe(n)(e.startT), endT: Qe(n)(e.endT) }))(t.spans),
    windows: It((e) => (r) => it.compare(e.startT)(r.startT))(I((e) => ({ ...e, startT: Qe(n)(e.startT), endT: Qe(n)(e.endT) }))(t.windows)),
    segments: I((e) => ({
      ...e,
      startT: Qe(n)(e.startT),
      endT: Qe(n)(e.endT),
      spans: I((r) => ({ ...r, startT: Qe(n)(r.startT), endT: Qe(n)(r.endT) }))(e.spans),
      windows: It((r) => (o) => it.compare(r.startT)(o.startT))(I((r) => ({ ...r, startT: Qe(n)(r.startT), endT: Qe(n)(r.endT) }))(e.windows))
    }))(t.segments),
    dives: I((e) => ({ ...e, startT: Qe(n)(e.startT), endT: Qe(n)(e.endT) }))(t.dives)
  };
}, X5 = (t) => {
  const n = I(k5)(t.segments);
  return q5({
    ...t,
    segments: n,
    windows: It((e) => (r) => it.compare(e.startT)(r.startT))(wt(n)((e) => e.windows))
  });
}, Y5 = (t) => (n) => (e) => {
  const r = ze(0.05)(1 - t - n), o = (a) => {
    if (a <= 0)
      return 0;
    if (a >= 1)
      return 1;
    const c = t + a * r;
    return c < 0 ? 0 : c > 1 ? 1 : c;
  }, i = p5(e), s = I((a) => V(l5(1)(os(a).length)))(i), u = ze(1)(w(gr)(0)(s));
  return Xt((a) => (c) => ({
    lineIndex: a,
    text: c,
    start: o(w(gr)(0)(a < 1 ? [] : Et(0, a, s)) / u),
    end: o(a >= 0 && a < s.length ? (w(gr)(0)(a < 1 ? [] : Et(0, a, s)) + s[a]) / u : (w(gr)(0)(a < 1 ? [] : Et(0, a, s)) + 1) / u)
  }))(i);
}, M5 = (t) => {
  const n = ze(0)(t.window.endT - t.window.startT);
  return I((e) => ({
    ...vm,
    id: "token:" + t.eventId + ":line:" + an(e.lineIndex),
    kind: "tokenLine",
    time: t.window.startT + e.start * n,
    endTime: t.window.startT + e.end * n,
    path: ym(t.path),
    tokenIndex: t.tokenIndex,
    lineIndex: e.lineIndex,
    text: e.text,
    from: t.from,
    to: t.to
  }))(Y5(t.holdPre)(t.holdPost)(t.labels));
}, U5 = (t) => wt(Xt((n) => (e) => ({ path: e.path, eventId: e.eventId, window: e.window, from: e.from, to: e.to, labels: e.labels, holdPre: e.holdPre, holdPost: e.holdPost, tokenIndex: n }))(wt(t)(y5)))(M5), K5 = (t) => Xt((n) => (e) => ({ ...e, index: n }))(It(Q5)([
  ...wt(t.segments)(A5),
  ...U5(t.segments)
])), V5 = (t) => (n) => {
  if (n.tag === "Structural")
    return Nt((e) => e)([
      Eu(n._1.from)(t) ? v : T("Just", mo("UnknownKeyframe", n._1.from)),
      Eu(n._1.to)(t) ? v : T("Just", mo("UnknownKeyframe", n._1.to))
    ]);
  if (n.tag === "Hold")
    return Nt((e) => e)([Eu(n._1)(t) ? v : T("Just", mo("UnknownKeyframe", n._1))]);
  if (n.tag === "DataFlow")
    return [
      ...Nt((e) => e)([Eu(n._1.keyframe)(t) ? v : T("Just", mo("UnknownKeyframe", n._1.keyframe))]),
      ...G5(n._1.events),
      ...I5(n._1.events)
    ];
  if (n.tag === "EnterNode")
    return [];
  if (n.tag === "ExitNode")
    return [];
  if (n.tag === "StepScene")
    return [];
  f();
}, j5 = (t) => (n) => {
  const e = wt(n)(V5(t));
  return e.length === 0 ? Pt("Right", void 0) : Pt("Left", e);
}, El = (t) => (n) => (e) => (r) => {
  if (0 < e.keyframes.length) {
    const o = e.keyframes[0], i = pd(I((u) => b(u.id, u))(e.keyframes)), s = j5(i)(e.scenes);
    return (() => {
      if (s.tag === "Left") {
        const u = s._1;
        return (a) => Pt("Left", u);
      }
      if (s.tag === "Right") {
        const u = s._1;
        return (a) => a(u);
      }
      f();
    })()(() => {
      const u = X5(wm(n)(r)(r)([])(e)(0));
      return Pt(
        "Right",
        {
          totalDuration: u.endT,
          windows: u.windows,
          spans: u.spans,
          keyframes: i,
          initialKeyframe: o.id,
          timing: n,
          layout: r.layout,
          cameraSpans: _m(t)(wx)(r.layout)(i)(u),
          cameraConfig: t,
          levelTree: r,
          segments: u.segments,
          dives: u.dives,
          cues: K5(u),
          seed: e.seed
        }
      );
    });
  }
  return Pt("Left", [g5]);
}, gi = (t) => ({ bind: (n) => (e) => (r) => t.Bind1().bind(n(r))((o) => e(o._1)(o._2)), Apply0: () => Nm(t) }), Nm = (t) => {
  const n = t.Bind1().Apply0().Functor0(), e = { map: (r) => (o) => (i) => n.map((s) => b(r(s._1), s._2))(o(i)) };
  return {
    apply: (() => {
      const r = gi(t);
      return (o) => (i) => r.bind(o)((s) => r.bind(i)((u) => _i(t).pure(s(u))));
    })(),
    Functor0: () => e
  };
}, _i = (t) => ({ pure: (n) => (e) => t.Applicative0().pure(b(n, e)), Apply0: () => Nm(t) }), Jm = (t) => {
  const n = { Applicative0: () => _i(t), Bind1: () => gi(t) };
  return { state: (e) => (r) => t.Applicative0().pure(e(r)), Monad0: () => n };
}, jo = (t, n) => ({ tag: t, _1: n }), Ar = (t, n) => ({ tag: t, _1: n }), gc = (t) => t, mr = (t, n) => ({ tag: t, _1: n }), Pl = (t) => t, Sn = /* @__PURE__ */ Jm(Ie), Z5 = (t) => (e) => {
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
}, tL = /* @__PURE__ */ hn(F)(Yt), Al = (t) => (e) => {
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
}, nL = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(D), Ut = /* @__PURE__ */ gi(Ie), ee = Sn.state((t) => b(t, t)), _n = /* @__PURE__ */ _i(Ie), Cm = (t) => (e) => {
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
}, bm = /* @__PURE__ */ zr(_n), Rl = /* @__PURE__ */ bm(Yt), eL = (t) => (e) => {
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
}, Sr = (t) => (e) => {
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
}, rL = /* @__PURE__ */ (() => {
  const t = pe.unfoldr((n) => {
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
        return e(r._5, St("Cons", r._3, e(r._6, o)));
      f();
    };
    return e(n, Y);
  })());
})(), _r = (t) => (e) => {
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
}, oL = (t) => (e) => {
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
}, _c = (t) => (n) => (e) => w((r) => (o) => t.Bind1().bind(r)((i) => n(i)(o)))(t.Applicative0().pure(e)), iL = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(D), sL = /* @__PURE__ */ (() => {
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
  })(D);
  return (e) => n((() => {
    const r = (o, i) => {
      if (o.tag === "Leaf")
        return i;
      if (o.tag === "Node")
        return r(o._5, St("Cons", o._3, r(o._6, i)));
      f();
    };
    return r(e, Y);
  })());
})(), uL = /* @__PURE__ */ bm(Ba), aL = /* @__PURE__ */ w((t) => (n) => tt(F)(n)()(t))(D), cL = /* @__PURE__ */ Pl("AnimatedSurface"), fL = /* @__PURE__ */ Pl("StillSurface"), lL = /* @__PURE__ */ Pl("SequenceSurface"), gL = /* @__PURE__ */ mr("Exit"), ba = /* @__PURE__ */ gc("AnimatedKeyframe"), Fl = /* @__PURE__ */ gc("Still"), _L = /* @__PURE__ */ gc("Title"), km = /* @__PURE__ */ gc("StepMarker"), dL = (t) => Ar("Par", t), hL = (t) => Ar("Seq", t), pL = (t) => Ar("GroupSeq", t), Sm = (t) => jo("StepDive", t), mL = { line: 0, column: 0, endLine: 0, endColumn: 0 }, $L = (t) => (n) => (e) => {
  const r = oo(Ht, v, (o) => o._1 === t, e);
  if (r.tag === "Just") {
    const o = To(Ht, v, r._1, b(t, n), e);
    if (o.tag === "Nothing")
      return e;
    if (o.tag === "Just")
      return o._1;
    f();
  }
  if (r.tag === "Nothing")
    return kt(e)(b(t, n));
  f();
}, yL = (t) => (n) => I((e) => e._1 === t ? b(e._1, { ...e._2, label: T("Just", n) }) : b(e._1, e._2)), Lm = (t) => {
  const n = t.compare;
  return (e) => w((r) => (o) => Zn(n, Vn, r, e(o)))(D);
}, jf = /* @__PURE__ */ Lm(F), Zf = /* @__PURE__ */ Lm(F), xL = (t) => {
  const n = t.span;
  return Sn.state((e) => b(void 0, { ...e, currentSpan: n }));
}, rf = (t) => (n) => ({ structural: [...t.structural, ...n.structural], flow: t.flow || n.flow, dives: [...t.dives, ...n.dives] }), vL = (t) => (n) => n.kind === "Animated" || Z5(n.id)(t), dc = {
  graphNodes: [],
  graphEdges: D,
  currNodes: D,
  currEdges: D,
  keyframes: [],
  scenes: [],
  kfCounter: 0,
  eventCounter: 0,
  currentKf: v,
  currentSpan: mL,
  error: v,
  enterStack: [],
  interiorOf: D,
  stepNames: D
}, K_ = (t) => (n) => (e) => {
  const r = tn(Pe.foldr, e);
  return Qr(", ")(I(n)(Et(0, 6, r))) + (r.length > 6 ? ", …" : "");
}, TL = (t) => (n) => {
  const e = Al(n)(tL(I((r) => b(r.id, r))(t.graph.edges)));
  if (e.tag === "Just")
    return (() => {
      const r = So("conn:")(e._1.id);
      if (r.tag === "Just")
        return !1;
      if (r.tag === "Nothing")
        return !0;
      f();
    })() ? e._1.from.node + " -> " + e._1.to.node : e._1.from.node + " -- " + e._1.to.node;
  if (e.tag === "Nothing")
    return n;
  f();
}, wL = (t) => (n) => (e) => {
  const r = K_()(so)(n), o = K_()(TL(t))(e);
  return (r === "" ? "animated flow contains unused topology: every animated node or edge must be visited by a token or fill." : "animated flow contains unused topology: every animated node or edge must be visited by a token or fill. Unused nodes: " + r + ".") + (o === "" ? "" : " Unused edges: " + o + ".") + " Move context-only topology into a `still`/`title`, remove it, or add token/fill events.";
}, NL = (t) => {
  if (t.kind.tag === "SendToken")
    return nL([t.kind._1.from, t.kind._1.to]);
  if (t.kind.tag === "FillNodeWithoutTransition")
    return Zt("Node", 1, 1, t.kind._1.node, void 0, D, D);
  f();
}, JL = (t) => jf(NL)(t.events), CL = (t) => {
  if (t.kind.tag === "SendToken")
    return Zt("Node", 1, 1, t.kind._1.edge, void 0, D, D);
  if (t.kind.tag === "FillNodeWithoutTransition")
    return D;
  f();
}, bL = (t) => Zf(CL)(t.events), hr = (t) => Sn.state((n) => b(
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
)), kL = /* @__PURE__ */ Rl((t) => Ut.bind(ee)((n) => {
  if (n.error.tag === "Just")
    return _n.pure();
  if (n.error.tag === "Nothing")
    return Cm(t.node)(n.interiorOf) ? hr("node " + t.node + " has more than one `inside` block") : Sn.state((e) => b(void 0, { ...e, interiorOf: tt(F)(t.node)(t.doc)(e.interiorOf) }));
  f();
})), SL = (t) => Ut.bind(ee)((n) => {
  const e = t.tag === "Just" && t._1 !== "" ? t._1 : "kf-" + an(n.kfCounter);
  if (Ln((o) => o.id === e, n.keyframes))
    return hr("duplicate frame name " + e);
  const r = {
    ...n,
    keyframes: kt(n.keyframes)({ id: e, nodes: n.currNodes, edges: n.currEdges, kind: js }),
    kfCounter: n.kfCounter + 1 | 0,
    currentKf: T("Just", e)
  };
  return Sn.state((o) => b(void 0, r));
}), we = (t) => (n) => Ut.bind(Sn.state((e) => b(void 0, { ...e, currentSpan: t })))(() => hr(n)), V_ = (t) => (n) => Ut.bind(ee)((e) => eL(n)(e.stepNames) ? we(t)("duplicate step name " + n) : Sn.state((r) => b(
  void 0,
  {
    ...r,
    scenes: kt(r.scenes)(rs("StepScene", n)),
    stepNames: tt(F)(n)()(r.stepNames)
  }
))), LL = (t) => {
  if (t.ops.tag === "Leaf") {
    const n = t.ops._1;
    return Ut.bind((() => {
      const e = n.span;
      return Sn.state((r) => b(void 0, { ...r, currentSpan: e }));
    })())(() => n.op.tag === "Step" ? V_(n.span)(n.op._1.name) : hr("step marker frame did not contain a step"));
  }
  if (t.ops.tag === "Seq" && t.ops._1.length === 1 && t.ops._1[0].tag === "Leaf") {
    const n = t.ops._1[0]._1;
    return Ut.bind((() => {
      const e = n.span;
      return Sn.state((r) => b(void 0, { ...r, currentSpan: e }));
    })())(() => n.op.tag === "Step" ? V_(n.span)(n.op._1.name) : hr("step marker frame did not contain a step"));
  }
  return hr("step marker frame did not contain a step");
}, EL = (t) => Ut.bind((() => {
  const n = t.span;
  return Sn.state((e) => b(void 0, { ...e, currentSpan: n }));
})())(() => Ut.bind(ee)((n) => {
  if (n.error.tag === "Just")
    return _n.pure();
  if (n.error.tag === "Nothing") {
    if (t.op.tag === "Enter") {
      if (!Sr(t.op._1.id)(n.currNodes))
        return we(0 < t.operands.length ? t.operands[0] : t.span)("cannot dive into node " + t.op._1.id + ": does not exist");
      if (!Cm(t.op._1.id)(n.interiorOf))
        return we(0 < t.operands.length ? t.operands[0] : t.span)("cannot enter node " + t.op._1.id + ": it has no `inside` block. Add the block at the document level, alongside the animated statements:\n\ninside " + t.op._1.id + ` {
  + detail: Detail
}`);
      const e = t.op._1;
      return Sn.state((r) => b(
        void 0,
        { ...r, enterStack: kt(r.enterStack)(e.id), scenes: kt(r.scenes)(rs("EnterNode", e.id)) }
      ));
    }
    if (t.op.tag === "Exit") {
      const e = Me(n.enterStack);
      if (e.tag === "Nothing")
        return hr("`out` without a matching `into`");
      if (e.tag === "Just") {
        const r = e._1.init;
        return Sn.state((o) => b(void 0, { ...o, enterStack: r, scenes: kt(o.scenes)(Uy) }));
      }
      f();
    }
    return _n.pure();
  }
  f();
})), $i = { structural: [], flow: !1, dives: [] }, PL = Ut.bind(ee)((t) => {
  if (t.error.tag === "Just")
    return _n.pure();
  if (t.error.tag === "Nothing") {
    if (t.currentKf.tag === "Just") {
      const n = t.currentKf._1;
      return Sn.state((e) => b(void 0, { ...e, scenes: kt(e.scenes)(rs("Hold", n)) }));
    }
    if (t.currentKf.tag === "Nothing")
      return _n.pure();
  }
  f();
}), AL = (t) => (n) => Ut.bind(ee)((e) => {
  const r = "ev-" + an(e.eventCounter);
  return Ut.bind((() => {
    const o = { ...e, eventCounter: e.eventCounter + 1 | 0 };
    return Sn.state((i) => b(void 0, o));
  })())(() => _n.pure({ events: [{ id: r, kind: n, when: t }], firstId: T("Just", r), lastId: T("Just", r) }));
}), RL = (t) => t.tag === "DataFlow" ? T("Just", t._1) : v, FL = (t) => Nt((n) => Al(n)(t.graphEdges))(tn(Ii, rL(t.currEdges))), GL = (t) => (n) => {
  const e = ht((o) => o.from.node === n.id || o.to.node === n.id, FL(t)), r = _c(H1)((o) => (i) => {
    const s = i.from + "->" + n.id, u = n.id + "->" + i.to, a = i.from + "->" + i.to, c = "via " + i.from + " " + i.to + ": no edge " + i.from + "→" + n.id;
    if (!_r(s)(t.currEdges))
      return Pt("Left", c);
    const l = "via " + i.from + " " + i.to + ": no edge " + n.id + "→" + i.to;
    if (!_r(u)(t.currEdges))
      return Pt("Left", l);
    const _ = "via " + i.from + " " + i.to + ": would create " + i.from + "→" + i.to + " but it already exists";
    return _r(a)(t.currEdges) || oL(a)(o.synthesized) ? Pt("Left", _) : Pt(
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
  })({ consumed: D, synthesized: D })(n.via);
  return (() => {
    if (r.tag === "Left") {
      const o = r._1;
      return (i) => Pt("Left", o);
    }
    if (r.tag === "Right") {
      const o = r._1;
      return (i) => i(o);
    }
    f();
  })()((o) => {
    const i = o.consumed, s = ht((u) => !_r(u.id)(i), e);
    return s.length === 0 ? Pt(
      "Right",
      {
        nextCurrEdges: Zn(
          F.compare,
          Vn,
          lr(F.compare, t.currEdges, iL(I((u) => u.id)(e))),
          sL((() => {
            const u = (a) => {
              if (a.tag === "Leaf")
                return D;
              if (a.tag === "Node")
                return Zt("Node", a._1, a._2, a._3, void 0, u(a._5), u(a._6));
              f();
            };
            return u(o.synthesized);
          })())
        ),
        synthesized: o.synthesized
      }
    ) : Pt(
      "Left",
      "cannot delete node " + n.id + ": still connected (" + Qr(", ")(I((u) => (() => {
        const a = So("conn:")(u.id);
        if (a.tag === "Just")
          return !1;
        if (a.tag === "Nothing")
          return !0;
        f();
      })() ? u.from.node + "→" + u.to.node : u.from.node + "--" + u.to.node)(s)) + "). Use `- a -> b` or `- a -- b` to drop them, or `via a b` to merge " + n.id + "'s endpoints."
    );
  });
}, Em = (t) => (n) => (e) => {
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
}, Du = (t) => {
  if (t.tag === "Leaf")
    return [t._1];
  if (t.tag === "Par" || t.tag === "Seq" || t.tag === "GroupSeq")
    return wt(t._1)(Du);
  f();
}, IL = (t) => ({
  nodes: I(Da)(t.graphNodes),
  edges: (() => {
    const n = (e, r) => {
      if (e.tag === "Leaf")
        return r;
      if (e.tag === "Node")
        return n(e._5, St("Cons", e._4, n(e._6, r)));
      f();
    };
    return tn(Jn.foldr, n(t.graphEdges, Y));
  })(),
  constraints: []
}), bs = (t) => {
  if (t.tag === "Leaf")
    return t._1.op.tag === "AddNode" || t._1.op.tag === "DelNode" || t._1.op.tag === "ModNode" || t._1.op.tag === "AddEdge" || t._1.op.tag === "DelEdge" || t._1.op.tag === "RepointEdge" ? { ...$i, structural: [t._1] } : t._1.op.tag === "Enter" || t._1.op.tag === "Exit" ? { ...$i, dives: [t._1] } : { ...$i, flow: !0 };
  if (t.tag === "Seq" || t.tag === "GroupSeq" || t.tag === "Par")
    return w(rf)($i)(I(bs)(t._1));
  f();
}, hc = (t) => {
  if (t.tag === "Leaf")
    return t._1.op.tag === "AddNode" || t._1.op.tag === "DelNode" || t._1.op.tag === "ModNode" || t._1.op.tag === "AddEdge" || t._1.op.tag === "DelEdge" || t._1.op.tag === "RepointEdge" ? [jo("StepStructural", [t._1])] : t._1.op.tag === "Enter" || t._1.op.tag === "Exit" ? [jo("StepDive", t._1)] : [jo("StepFlow", t)];
  if (t.tag === "Seq")
    return wt(t._1)(hc);
  if (t.tag === "GroupSeq")
    return DL(t)(t._1);
  if (t.tag === "Par")
    return BL(t)(t._1);
  f();
}, BL = (t) => (n) => {
  const e = bs(t);
  return e.structural.length !== 0 && !e.flow && e.dives.length === 0 ? [jo("StepStructural", e.structural)] : e.structural.length === 0 && e.flow && e.dives.length === 0 ? [jo("StepFlow", t)] : e.structural.length === 0 && !e.flow && e.dives.length !== 0 ? I(Sm)(e.dives) : wt(n)(hc);
}, DL = (t) => (n) => {
  const e = bs(t);
  return e.structural.length === 0 && e.flow && e.dives.length === 0 ? [jo("StepFlow", t)] : e.structural.length === 0 && !e.flow && e.dives.length !== 0 ? I(Sm)(e.dives) : wt(n)(hc);
}, zL = (t) => (n) => Ut.bind(ee)((e) => {
  const r = n.from + "->" + n.to, o = n.newFrom + "->" + n.newTo;
  return _r(r)(e.currEdges) ? Sr(n.newFrom)(e.currNodes) ? Sr(n.newTo)(e.currNodes) ? r !== o && _r(o)(e.currEdges) ? we((() => {
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
  )) : we(3 < t.operands.length ? t.operands[3] : t.span)("cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newTo) : we(2 < t.operands.length ? t.operands[2] : t.span)("cannot repoint " + n.from + "→" + n.to + " to " + n.newFrom + "→" + n.newTo + ": unknown node " + n.newFrom) : we((() => {
    const i = 0 < t.operands.length ? t.operands[0] : t.span, s = 1 < t.operands.length ? t.operands[1] : t.span;
    return { line: i.line, column: i.column, endLine: s.endLine, endColumn: s.endColumn };
  })())("cannot repoint " + n.from + "→" + n.to + ": edge does not exist");
}), HL = (t) => {
  if (t.op.tag === "AddNode") {
    const n = t.op._1;
    return Ut.bind(ee)((e) => Sr(n.id)(e.currNodes) ? we(0 < t.operands.length ? t.operands[0] : t.span)("cannot add node " + n.id + ": already exists") : Sn.state((r) => b(
      void 0,
      {
        ...r,
        graphNodes: $L(n.id)({ id: n.id, size: b(1, 1), ports: [], label: T("Just", n.label), shape: n.shape })(r.graphNodes),
        currNodes: tt(F)(n.id)()(r.currNodes)
      }
    )));
  }
  if (t.op.tag === "DelNode") {
    const n = t.op._1;
    return Ut.bind(ee)((e) => {
      if (!Sr(n.id)(e.currNodes))
        return we(0 < t.operands.length ? t.operands[0] : t.span)("cannot delete node " + n.id + ": does not exist");
      const r = GL(e)(n);
      if (r.tag === "Left")
        return we(0 < t.operands.length ? t.operands[0] : t.span)(r._1);
      if (r.tag === "Right") {
        const o = r._1;
        return Sn.state((i) => b(
          void 0,
          {
            ...i,
            currNodes: Qi(F)(n.id)(i.currNodes),
            currEdges: o.nextCurrEdges,
            graphEdges: Zn(F.compare, Vn, o.synthesized, i.graphEdges)
          }
        ));
      }
      f();
    });
  }
  if (t.op.tag === "ModNode") {
    const n = t.op._1;
    return Ut.bind(ee)((e) => {
      if (!Sr(n.id)(e.currNodes))
        return we(0 < t.operands.length ? t.operands[0] : t.span)("cannot modify node " + n.id + ": does not exist");
      if (n.label.tag === "Just") {
        const r = n.label._1;
        return Sn.state((o) => b(void 0, { ...o, graphNodes: yL(n.id)(r)(o.graphNodes) }));
      }
      if (n.label.tag === "Nothing")
        return _n.pure();
      f();
    });
  }
  if (t.op.tag === "AddEdge") {
    const n = t.op._1;
    return Ut.bind(ee)((e) => {
      const r = !Sr(n.from)(e.currNodes), o = !Sr(n.to)(e.currNodes);
      if (r || o)
        return we(Em(r)(o)(t))((n.directed ? "cannot add edge " : "cannot add connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": unknown node " + (r ? o ? n.from + ", " + n.to : n.from : o ? n.to : ""));
      const i = n.directed ? n.from + "->" + n.to : n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
      return _r(i)(e.currEdges) ? we((() => {
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
    return Ut.bind(ee)((e) => {
      const r = n.directed ? n.from + "->" + n.to : n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
      return _r(r)(e.currEdges) ? Sn.state((o) => b(void 0, { ...o, currEdges: Qi(F)(r)(o.currEdges) })) : we((() => {
        const o = 0 < t.operands.length ? t.operands[0] : t.span, i = 1 < t.operands.length ? t.operands[1] : t.span;
        return { line: o.line, column: o.column, endLine: i.endLine, endColumn: i.endColumn };
      })())((n.directed ? "cannot delete edge " : "cannot delete connection ") + (n.directed ? n.from + "→" + n.to : n.from + "--" + n.to) + ": does not exist");
    });
  }
  return t.op.tag === "RepointEdge" ? zL(t)(t.op._1) : _n.pure();
}, QL = (t) => Ut.bind((() => {
  const n = t.span;
  return Sn.state((e) => b(void 0, { ...e, currentSpan: n }));
})())(() => HL(t)), Pm = (t) => (n) => (e) => Ut.bind(Rl(QL)(e))(() => Ut.bind(ee)((r) => {
  const o = n.tag === "Just" && n._1 !== "" ? n._1 : "kf-" + an(r.kfCounter);
  if (Ln((s) => s.id === o, r.keyframes))
    return Ut.bind(uL(xL)(0 < e.length ? T("Just", e[0]) : v))(() => hr("duplicate frame name " + o));
  const i = {
    ...r,
    keyframes: kt(r.keyframes)({ id: o, nodes: r.currNodes, edges: r.currEdges, kind: t }),
    kfCounter: r.kfCounter + 1 | 0,
    currentKf: T("Just", o),
    scenes: (() => {
      if (r.currentKf.tag === "Nothing")
        return r.scenes;
      if (r.currentKf.tag === "Just")
        return kt(r.scenes)(rs("Structural", { from: r.currentKf._1, to: o, focus: v }));
      f();
    })()
  };
  return Sn.state((s) => b(void 0, i));
})), j_ = (t) => (n) => {
  const e = Du(n.ops), r = ht(
    (i) => i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge",
    e
  ), o = ht(
    (i) => !(i.op.tag === "AddNode" || i.op.tag === "DelNode" || i.op.tag === "ModNode" || i.op.tag === "AddEdge" || i.op.tag === "DelEdge" || i.op.tag === "RepointEdge"),
    e
  );
  return 0 < o.length ? Ut.bind((() => {
    const i = o[0].span;
    return Sn.state((s) => b(void 0, { ...s, currentSpan: i }));
  })())(() => hr("still/title blocks hold a still snapshot; they cannot contain movement tokens (`api ~> db`) or dive commands (`into`/`out`)")) : t === "TitleCard" && r.length === 0 ? hr(n.name.tag === "Just" && n.name._1 !== "" ? 'title "' + n.name._1 + '" has an empty body; give it nodes/edges to title, or use a still' : "title has an empty body; give it nodes/edges to title, or use a still") : Ut.bind(Pm(t)(n.name)(r))(() => PL);
}, OL = (t) => (n) => {
  const e = Nt(RL)(n.scenes), r = ht(vL(aL(I((s) => s.keyframe)(e))), n.keyframes), o = lr(F.compare, jf((s) => s.nodes)(r), jf(JL)(e)), i = lr(F.compare, Zf((s) => s.edges)(r), Zf(bL)(e));
  return t !== "AnimatedSurface" || e.length === 0 || o.tag === "Leaf" && i.tag === "Leaf" ? v : T("Just", wL(n)(o)(i));
}, WL = (t) => (n) => {
  const e = n.to + "->" + n.from, r = n.from + "->" + n.to, o = n.from <= n.to ? "conn:" + n.from + "--" + n.to : "conn:" + n.to + "--" + n.from;
  if (_r(r)(t.currEdges))
    return T("Just", { id: r, direction: mg });
  if (_r(e)(t.currEdges))
    return T("Just", { id: e, direction: $g });
  const i = Al(o)(t.graphEdges);
  if (i.tag === "Just")
    return _r(o)(t.currEdges) ? T(
      "Just",
      { id: o, direction: i._1.from.node === n.from && i._1.to.node === n.to ? mg : $g }
    ) : v;
  if (i.tag === "Nothing")
    return v;
  f();
}, qL = (t) => (n) => {
  if (n.op.tag === "Token") {
    const e = n.op._1;
    return Ut.bind(ee)((r) => {
      const o = !Sr(e.from)(r.currNodes), i = !Sr(e.to)(r.currNodes);
      if (o || i)
        return Ut.bind(we(Em(o)(i)(n))(o ? i ? "token references unknown node: " + e.from + ", " + e.to : "token references unknown node: " + e.from : i ? "token references unknown node: " + e.to : "token references unknown node: "))(() => _n.pure({ events: [], firstId: v, lastId: v }));
      const s = WL(r)(e);
      if (s.tag === "Just")
        return AL(t)(qy("SendToken", { from: e.from, to: e.to, edge: s._1.id, direction: s._1.direction, labels: e.labels }));
      if (s.tag === "Nothing")
        return Ut.bind(we((() => {
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
}, Z_ = (t) => (n) => {
  const e = Bt((r) => v, (r) => (o) => T("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return _n.pure({ events: [], firstId: v, lastId: v });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Ut.bind(Xs(t)(e._1.head))((o) => Ut.bind(_c({
      Applicative0: () => _i(Ie),
      Bind1: () => gi(Ie)
    })((i) => (s) => Ut.bind(Xs((() => {
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
}, XL = (t) => (n) => {
  const e = Bt((r) => v, (r) => (o) => T("Just", { head: r, tail: o }), n);
  if (e.tag === "Nothing")
    return _n.pure({ events: [], firstId: v, lastId: v });
  if (e.tag === "Just") {
    const r = e._1.tail;
    return Ut.bind(Xs(t)(e._1.head))((o) => Ut.bind(YL((() => {
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
}, Xs = (t) => (n) => {
  if (n.tag === "Leaf") {
    const e = n._1;
    return Ut.bind((() => {
      const r = e.span;
      return Sn.state((o) => b(void 0, { ...o, currentSpan: r }));
    })())(() => qL(t)(e));
  }
  if (n.tag === "Seq" || n.tag === "GroupSeq")
    return Z_(t)(n._1);
  if (n.tag === "Par")
    return XL(t)(n._1);
  f();
}, YL = (t) => _c({
  Applicative0: () => _i(Ie),
  Bind1: () => gi(Ie)
})((n) => (e) => Ut.bind(Xs(t)(e))((r) => _n.pure({
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
})))({ events: [], firstId: v, lastId: v }), ML = (t) => Ut.bind(ee)((n) => {
  if (n.currentKf.tag === "Nothing")
    return hr("flow ops before any structural frame");
  if (n.currentKf.tag === "Just") {
    const e = n.currentKf._1;
    return Ut.bind(Xs(My)(t))((r) => Ut.bind(ee)((o) => {
      const i = { ...o, scenes: kt(o.scenes)(rs("DataFlow", { keyframe: e, events: r.events, focus: v })) };
      return Sn.state((s) => b(void 0, i));
    }));
  }
  f();
}), UL = (t) => (n) => (e) => {
  if (e.tag === "StepStructural")
    return Ut.bind((() => {
      const r = Pm(js)(n ? v : t)(e._1);
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
      const i = SL(t);
      return o ? i : _n.pure();
    })())(() => Ut.bind(ML(r))(() => _n.pure(n || o)));
  }
  if (e.tag === "StepDive")
    return Ut.bind(EL(e._1))(() => _n.pure(n));
  f();
}, Am = (t) => (n) => (e) => {
  const r = Bt((o) => v, (o) => (i) => T("Just", { head: o, tail: i }), e);
  if (r.tag === "Nothing")
    return _n.pure();
  if (r.tag === "Just") {
    const o = r._1.head, i = r._1.tail;
    return Ut.bind(ee)((s) => {
      if (s.error.tag === "Just")
        return _n.pure();
      if (s.error.tag === "Nothing")
        return Ut.bind(UL(t)(n)(o))((u) => Am(t)(u)(i));
      f();
    });
  }
  f();
}, KL = (t) => Ut.bind(ee)((n) => {
  if (n.error.tag === "Just")
    return _n.pure();
  if (n.error.tag === "Nothing") {
    if (t.kind === "AnimatedKeyframe")
      return Am(t.name)(!1)(hc(t.ops));
    if (t.kind === "Still")
      return j_(Xy)(t);
    if (t.kind === "Title")
      return j_(Yy)(t);
    if (t.kind === "StepMarker")
      return LL(t);
  }
  f();
}), pc = (t) => Ut.bind(kL(t.interiors))(() => Ut.bind(Rl(KL)(t.frames))(() => Ut.bind(ee)((n) => {
  if (n.error.tag === "Just")
    return _n.pure(Pt("Left", n.error._1));
  if (n.error.tag === "Nothing") {
    const e = VL(t.interiors);
    if (e.tag === "Left")
      return _n.pure(Pt("Left", e._1));
    if (e.tag === "Right") {
      const r = { seed: t.seed, graph: IL(n), keyframes: n.keyframes, scenes: n.scenes, interiors: e._1 };
      return _n.pure((() => {
        const o = OL(t.mode)(r);
        if (o.tag === "Just")
          return Pt("Left", { msg: o._1, line: 0, column: 0, endLine: 0, endColumn: 0 });
        if (o.tag === "Nothing")
          return Pt("Right", r);
        f();
      })());
    }
  }
  f();
}))), VL = (t) => {
  const n = _c(H1)((e) => (r) => {
    const o = pc(r.doc)(dc)._1;
    return (() => {
      if (o.tag === "Left") {
        const i = o._1;
        return (s) => Pt("Left", i);
      }
      if (o.tag === "Right") {
        const i = o._1;
        return (s) => s(i);
      }
      f();
    })()((i) => Pt("Right", tt(F)(r.node)(i)(e)));
  })(D)(t);
  if (n.tag === "Left")
    return Pt("Left", n._1);
  if (n.tag === "Right")
    return Pt("Right", n._1);
  f();
}, Rr = (t, n) => ({ tag: "ParseError", _1: t, _2: n }), S = (t, n, e) => ({ tag: "ParseState", _1: t, _2: n, _3: e }), ka = (t, n, e) => ({ tag: t, _1: n, _2: e }), jL = (t) => ka("More", t), ZL = (t) => ka("Lift", t), tE = {
  defer: (t) => {
    const n = yy(t);
    return (e, r, o, i, s) => xy(n)(e, r, o, i, s);
  }
}, Rm = { map: (t) => (n) => (e, r, o, i, s) => r((u) => n(e, r, o, i, (a, c) => r((l) => s(a, t(c))))) }, nE = {
  alt: (t) => (n) => (e, r, o, i, s) => {
    const u = e._1, a = e._2;
    return r((c) => t(
      S(u, a, !1),
      r,
      o,
      (l, _) => {
        const d = l._3;
        return r((g) => d ? i(l, _) : n(e, r, o, i, s));
      },
      s
    ));
  },
  Functor0: () => Rm
}, eE = (t) => {
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
          u = !1, a = n.Bind1().Apply0().Functor0().map(s0)(l._1);
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
      jL,
      ZL,
      (s, u) => ka("Stop", s, Pt("Left", u)),
      (s, u) => ka("Stop", s, Pt("Right", u))
    ));
  };
}, $r = (t, n, e, r, o) => o(t, t._2), rE = { index: 0, line: 1, column: 1 }, oE = (t) => {
  const n = eE(t);
  return (e) => (r) => t.Monad0().Bind1().Apply0().Functor0().map(za)(n(S(e, rE, !1))(r));
}, iE = /* @__PURE__ */ oE(K$), mc = (t, n, e, r, o) => o(S(t._1, t._2, !0), void 0), Fm = {
  apply: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (a, c) => r((l) => {
      const _ = e._3 && !a._3 ? S(a._1, a._2, !0) : a;
      return n(_, r, o, i, (d, g) => r((p) => s(_._3 && !d._3 ? S(d._1, d._2, !0) : d, c(g))));
    })
  )),
  Functor0: () => Rm
}, Gm = { pure: (t) => (n, e, r, o, i) => i(n, t), Apply0: () => Fm }, sE = {
  bind: (t) => (n) => (e, r, o, i, s) => r((u) => t(
    e,
    r,
    o,
    i,
    (a, c) => r((l) => n(c)(e._3 && !a._3 ? S(a._1, a._2, !0) : a, r, o, i, s))
  )),
  Apply0: () => Fm
}, uE = { Applicative0: () => Gm, Bind1: () => sE }, $c = (t) => (n, e, r, o, i) => e((s) => $r(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => o(n._3 && !u._3 ? S(u._1, u._2, !0) : u, Rr(t, a)))
)), aE = { empty: /* @__PURE__ */ $c("No alternative"), Alt0: () => nE }, cE = { Applicative0: () => Gm, Plus1: () => aE }, fE = {
  tailRecM: (t) => (n) => (e, r, o, i, s) => {
    const u = (a, c, l) => t(c)(
      a,
      r,
      o,
      i,
      (_, d) => {
        const g = a._3 && !_._3 ? S(_._1, _._2, !0) : _;
        if (d.tag === "Loop")
          return l === 0 ? r((p) => u(g, d._1, 30)) : u(g, d._1, l - 1 | 0);
        if (d.tag === "Done")
          return s(g, d._1);
        f();
      }
    );
    return u(e, n, 30);
  },
  Monad0: () => uE
}, lE = (t) => (n) => {
  const e = n.Plus1().Alt0(), r = n.Applicative0();
  return (o) => t.tailRecM((i) => t.Monad0().Bind1().bind(e.alt(e.Functor0().map(s0)(o))(r.pure(Li(
    "Done",
    void 0
  ))))((s) => r.pure((() => {
    if (s.tag === "Loop")
      return Li("Loop", St("Cons", s._1, i));
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
              l = St("Cons", m._1, p), _ = m._2;
              continue;
            }
            f();
          }
          return g;
        })(Y)(i)
      );
    f();
  })())))(Y);
}, tr = /* @__PURE__ */ lE(fE)(cE), Tt = (t) => (n) => {
  const e = $c("Expected " + n);
  return (r, o, i, s, u) => {
    const a = r._1, c = r._2;
    return o((l) => t(
      S(a, c, !1),
      o,
      i,
      (_, d) => {
        const g = _._3;
        return o((p) => g ? s(_, d) : e(r, o, i, s, u));
      },
      u
    ));
  };
}, Ki = (t) => (n, e, r, o, i) => {
  const s = n._3, u = n._1, a = n._2;
  return e((c) => {
    const l = (_, d) => {
      const g = _._3;
      return e((p) => g ? o(S(_._1, _._2, s), d) : i(n, void 0));
    };
    return e((_) => e((d) => t(
      S(u, a, !1),
      e,
      r,
      (g, p) => l(S(g._1, g._2, !1), p),
      (g, p) => e((m) => e((h) => $c("Negated parser succeeded")(
        g,
        e,
        r,
        l,
        ($, y) => e((x) => i(g._3 && !$._3 ? S($._1, $._2, !0) : $, y))
      )))
    )));
  });
}, gE = (t) => {
  const n = t.foldr((e) => (r) => {
    if (r.tag === "Nothing")
      return T("Just", e);
    if (r.tag === "Just")
      return T(
        "Just",
        (o, i, s, u, a) => {
          const c = o._1, l = o._2;
          return i((_) => e(
            S(c, l, !1),
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
      return $c("No alternative");
    if (r.tag === "Just")
      return r._1;
    f();
  };
}, Im = (t) => (n) => (e) => (r, o, i, s, u) => o((a) => o((c) => o((l) => o((_) => t(
  r,
  o,
  i,
  s,
  (d, g) => o((p) => o((m) => {
    const h = r._3 && !d._3 ? S(d._1, d._2, !0) : d;
    return e(
      h,
      o,
      i,
      s,
      ($, y) => o((x) => {
        const J = h._3 && !$._3 ? S($._1, $._2, !0) : $;
        return o((N) => o((C) => {
          const k = r._3 && !J._3 ? S(J._1, J._2, !0) : J;
          return n(
            k,
            o,
            i,
            s,
            (P, E) => o((Q) => u(k._3 && !P._3 ? S(P._1, P._2, !0) : P, y))
          );
        }));
      })
    );
  }))
))))), t0 = (t) => (n) => (e) => {
  if (n === 10)
    return { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  if (n === 13) {
    const r = qx()(e);
    return r.tag === "Just" && r._1 === 10 ? { index: t.index + 1 | 0, line: t.line, column: t.column } : { index: t.index + 1 | 0, line: t.line + 1 | 0, column: 1 };
  }
  return n === 9 ? { index: t.index + 1 | 0, line: t.line, column: (t.column + 8 | 0) - no(t.column - 1 | 0)(8) | 0 } : { index: t.index + 1 | 0, line: t.line, column: t.column + 1 | 0 };
}, _E = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const a = r, c = o, l = i, _ = ja(c);
    if (_.tag === "Nothing") {
      s = !1, u = a;
      continue;
    }
    if (_.tag === "Just") {
      r = _._1.tail === "" ? t0(a)(_._1.head)(l) : t0(a)(_._1.head)(_._1.tail), o = _._1.tail, i = l;
      continue;
    }
    f();
  }
  return u;
}, Dt = (t) => (n, e, r, o, i) => {
  const s = ja(n._1);
  if (s.tag === "Nothing")
    return o(n, Rr("Unexpected EOF", n._2));
  if (s.tag === "Just") {
    if (s._1.head < 0 || s._1.head > 65535)
      return o(n, Rr("Expected Char", n._2));
    if (s._1.head >= 0 && s._1.head <= 65535) {
      const u = X0(s._1.head);
      return t(u) ? i(S(s._1.tail, t0(n._2)(s._1.head)(s._1.tail), !0), u) : o(n, Rr("Predicate unsatisfied", n._2));
    }
  }
  f();
}, uu = (t, n, e, r, o) => t._1 === "" ? o(S(t._1, t._2, !0), void 0) : r(t, Rr("Expected EOF", t._2)), dE = (t) => (n, e, r, o, i) => {
  const s = t(n._1);
  if (s.tag === "Left")
    return o(n, Rr(s._1, n._2));
  if (s.tag === "Right")
    return i(S(s._1.remainder, _E(n._2)(s._1.consumed)(s._1.remainder), s._1.consumed !== ""), s._1.value);
  f();
}, Ce = (t) => dE((n) => {
  const e = So(t)(n);
  return e.tag === "Just" ? Pt("Right", { value: t, consumed: t, remainder: e._1 }) : Pt("Left", "Expected " + _f(t));
}), hE = /* @__PURE__ */ Dt((t) => !0), Pu = (t, n) => ({ tag: t, _1: n }), Gl = /* @__PURE__ */ gE(Yt), pE = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, mE = /* @__PURE__ */ hn(F)(Yt), $E = (t) => (e) => {
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
}, Il = /* @__PURE__ */ (() => {
  const t = Tt(Dt((r) => r === "}"))("'}'"), n = Tt(Dt((r) => r === "#"))("'#'"), e = Dt((r) => r === `
` || r === "\r");
  return (r, o, i, s, u) => {
    const a = r._1, c = r._2;
    return o((l) => o((_) => t(
      S(a, c, !1),
      o,
      i,
      (d, g) => o((p) => {
        const m = r._1, h = r._2;
        return o(($) => o((y) => n(
          S(m, h, !1),
          o,
          i,
          (x, J) => o((N) => {
            const C = r._1, k = r._2;
            return o((P) => o((E) => e(
              S(C, k, !1),
              o,
              i,
              (Q, W) => o((B) => uu(r, o, i, s, u)),
              (Q, W) => o((B) => u(S(C, k, !1), void 0))
            )));
          }),
          (x, J) => o((N) => u(S(m, h, !1), void 0))
        )));
      }),
      (d, g) => o((p) => u(S(a, c, !1), void 0))
    )));
  };
})(), Ge = (t) => (n, e, r, o, i) => e((s) => $r(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
    return e((_) => t(
      l,
      e,
      r,
      o,
      (d, g) => e((p) => {
        const m = l._3 && !d._3 ? S(d._1, d._2, !0) : d;
        return e((h) => $r(
          m,
          e,
          r,
          o,
          ($, y) => e((x) => i(
            m._3 && !$._3 ? S($._1, $._2, !0) : $,
            b(g, { line: a.line, column: a.column, endLine: y.line, endColumn: y.column })
          ))
        ));
      })
    ));
  })
)), yE = /* @__PURE__ */ (() => {
  const t = Dt((n) => n === " " || n === "	" || n === `
` || n === "\r");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => i(n._3 && !u._3 ? S(u._1, u._2, !0) : u, void 0))
  ));
})(), Bm = (t, n, e, r, o) => n((i) => Ce("#")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = tr(Dt((_) => _ !== `
`)), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((_) => c(
      l,
      n,
      e,
      r,
      (d, g) => n((p) => o(l._3 && !d._3 ? S(d._1, d._2, !0) : d, void 0))
    ));
  })
)), Dm = /* @__PURE__ */ Tt(/* @__PURE__ */ (() => {
  const t = Tt(Dt((e) => e === "}"))("'}'"), n = Dt((e) => e === `
` || e === "\r");
  return (e, r, o, i, s) => {
    const u = e._1, a = e._2;
    return r((c) => r((l) => t(
      S(u, a, !1),
      r,
      o,
      (_, d) => r((g) => {
        const p = e._1, m = e._2;
        return r((h) => r(($) => Bm(
          S(p, m, !1),
          r,
          o,
          (y, x) => {
            const J = y._3;
            return r((N) => {
              if (J)
                return i(y, x);
              const C = e._1, k = e._2;
              return r((P) => r((E) => n(
                S(C, k, !1),
                r,
                o,
                (Q, W) => {
                  const B = Q._3;
                  return r((H) => B ? i(Q, W) : uu(e, r, o, i, s));
                },
                (Q, W) => r((B) => s(Q, void 0))
              )));
            });
          },
          (y, x) => r((J) => s(y, void 0))
        )));
      }),
      (_, d) => r((g) => s(S(u, a, !1), void 0))
    )));
  };
})())("newline or '}' (statements end at the end of the line)"), Le = /* @__PURE__ */ (() => {
  const t = tr((n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => yE(
      S(s, u, !1),
      e,
      r,
      (c, l) => {
        const _ = c._3;
        return e((d) => _ ? o(c, l) : Bm(n, e, r, o, i));
      },
      i
    ));
  });
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => i(n._3 && !u._3 ? S(u._1, u._2, !0) : u, void 0))
  ));
})(), xE = /* @__PURE__ */ (() => {
  const t = Dt((n) => n !== "|");
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => e((c) => Ce("\\|")(
      S(s, u, !1),
      e,
      r,
      (l, _) => e((d) => e((g) => t(n, e, r, o, (p, m) => e((h) => i(p, ts(m)))))),
      (l, _) => e((d) => i(l, "|"))
    )));
  };
})(), vE = /* @__PURE__ */ Tt(/* @__PURE__ */ Gl([
  (t, n, e, r, o) => n((i) => {
    const s = t._3;
    return Ce("->")(t, n, e, (u, a) => r(S(u._1, u._2, s), a), (u, a) => n((c) => o(u, !0)));
  }),
  (t, n, e, r, o) => n((i) => {
    const s = t._3;
    return Ce("--")(t, n, e, (u, a) => r(S(u._1, u._2, s), a), (u, a) => n((c) => o(u, !1)));
  })
]))("edge arrow '->' or '--'"), TE = (t) => t !== `
` && t !== "\r" && t !== "#" && t !== "}" && t !== "{", yc = /* @__PURE__ */ Dt((t) => t >= "a" && t <= "z" || t >= "A" && t <= "Z"), wE = (t) => t === " " || t === "	" || t === "\r", NE = (t) => ko(fn(Lr(wE)(fn(Hr(t))).rest)), Bl = (t) => t === `
` || t === "\r" || t === "#" || t === "}", JE = (t) => t === `
` || t === "\r" || t === "#" || t === "}" || t === "{", CE = (t) => t !== "{" && t !== `
` && t !== "\r", t1 = (t) => Va(t) === "", bE = (t) => fn(Lr(t1)(fn(Lr(t1)(t).rest)).rest), kE = (t) => ((e) => (r) => {
  let o = e, i = r, s = !0, u;
  for (; s; ) {
    const a = o, l = Bt((_) => v, (_) => (d) => T("Just", { head: _, tail: d }), i);
    if (l.tag === "Just" && (l._1.head === " " || l._1.head === "	")) {
      o = a + 1 | 0, i = l._1.tail;
      continue;
    }
    s = !1, u = a;
  }
  return u;
})(0)(Hr(t)), SE = (t) => {
  const n = Bt(
    (e) => v,
    (e) => (r) => T("Just", { head: e, tail: r }),
    I(kE)(ht((e) => Va(e) !== "", t))
  );
  if (n.tag === "Nothing")
    return 0;
  if (n.tag === "Just")
    return w(pE)(n._1.head)(n._1.tail);
  f();
}, LE = /* @__PURE__ */ (() => {
  const t = Tt(Dt((n) => n === "-"))("'-'");
  return (n, e, r, o, i) => {
    const s = n._3;
    return e((u) => t(
      n,
      e,
      r,
      (a, c) => o(S(a._1, a._2, s), c),
      (a, c) => e((l) => {
        const _ = Ki((() => {
          const g = Tt(Dt((m) => m === ">"))("'>'"), p = Tt(Dt((m) => m === "-"))("'-'");
          return (m, h, $, y, x) => {
            const J = m._1, N = m._2;
            return h((C) => g(
              S(J, N, !1),
              h,
              $,
              (k, P) => {
                const E = k._3;
                return h((Q) => E ? y(k, P) : p(m, h, $, y, x));
              },
              x
            ));
          };
        })()), d = n._3 && !a._3 ? S(a._1, a._2, !0) : a;
        return e((g) => _(
          d,
          e,
          r,
          (p, m) => o(S(p._1, p._2, s), m),
          (p, m) => e((h) => i(d._3 && !p._3 ? S(p._1, p._2, !0) : p, "-"))
        ));
      })
    ));
  };
})(), un = /* @__PURE__ */ (() => {
  const t = tr(Dt((n) => n === " " || n === "	"));
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => i(n._3 && !u._3 ? S(u._1, u._2, !0) : u, void 0))
  ));
})(), Lo = /* @__PURE__ */ (() => {
  const t = Dt((n) => n === " " || n === "	");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => un(n._3 && !u._3 ? S(u._1, u._2, !0) : u, e, r, o, i))
  ));
})(), zm = (t, n, e, r, o) => n((i) => n((s) => un(
  t,
  n,
  e,
  r,
  (u, a) => n((c) => n((l) => {
    const _ = t._3 && !u._3 ? S(u._1, u._2, !0) : u;
    return Il(
      _,
      n,
      e,
      r,
      (d, g) => n((p) => o(_._3 && !d._3 ? S(d._1, d._2, !0) : d, g))
    );
  }))
))), Hm = (t, n, e, r, o) => n((i) => un(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = Tt(Dt((_) => _ === "-"))("'-'"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((_) => {
      const d = (m, h) => n(($) => (() => {
        if (h.tag === "Just")
          return (y, x, J, N, C) => x((k) => vE(
            y,
            x,
            J,
            N,
            (P, E) => x((Q) => C(P, T("Just", E)))
          ));
        if (h.tag === "Nothing")
          return (y, x, J, N, C) => C(y, v);
        f();
      })()(l._3 && !m._3 ? S(m._1, m._2, !0) : m, n, e, r, o)), g = l._1, p = l._2;
      return n((m) => n((h) => c(
        S(g, p, !1),
        n,
        e,
        ($, y) => n((x) => d(l, v)),
        ($, y) => n((x) => d(S(g, p, !1), T("Just", y)))
      )));
    });
  })
)), EE = (t) => {
  const n = So("Expected ")(t), e = (() => {
    if (n.tag === "Nothing")
      return t;
    if (n.tag === "Just")
      return n._1;
    f();
  })();
  return e === "'{'" ? "Open the block with `{`." : e === "integer (seed value)" ? "Put an integer after `seed`." : e === "closing '}'" ? "Close this block with `}`." : e === `closing '"' (unterminated string)` ? 'This string is unterminated; close it with `"`.' : e === "closing '|'" ? "Close this pipe label with `|`." : e === "space after '+'" ? "Put a space after `+`: `+ api: API`." : e === "node identifier after '+'" ? "Put a node id after `+`: `+ api: API`." : e === "space after '-'" ? "Put a space after `-`: `- api`." : e === "node identifier after '-'" ? "Put a node id after `-`: `- api`." : e === "space after '~'" ? "Put a space after `~`: `~ api -> db => api -> cache`." : e === "node identifier" ? "Put a node identifier here." : e === "space after 'inside'" ? "Put a space after `inside`: `inside api { ... }`." : e === "node identifier after 'inside'" ? "Tell `inside` which node owns this interior: `inside api { ... }`." : e === "source node identifier after 'via'" ? "Put the source node after `via`: `via a b`." : e === "target node identifier after 'via'" ? "Put the second endpoint after `via`: `via a b`." : e === "source node identifier" ? "Put a source node identifier here." : e === "new source node identifier" ? "Put the new source node identifier after `=>`." : e === "new target node identifier" ? "Put the new target node identifier after the replacement arrow." : e === "edge arrow '->' or '--'" ? "Use `->` for a directed edge or `--` for an undirected edge." : e === "source edge arrow '->'" ? "Use `->` in the edge you are changing: `~ api -> db => api -> cache`." : e === "replacement edge arrow '->'" ? "Use `->` in the replacement edge: `~ api -> db => api -> cache`." : e === "repoint separator '=>'" ? "Use `=>` before the replacement edge: `~ api -> db => api -> cache`." : e === "target node identifier" ? "Put a target node after the arrow." : e === "'~>'" ? "Use `~>` for movement from left to right." : e === "'<~'" ? "Use `<~` for movement from right to left." : e === "'->' or '<-'" ? "Use `~>` / `<~` for movement tokens." : e === 'label ("…", : rest-of-line, or |…|)' ? 'label must use `: text`, `"text"`, or `|multi-line|`.' : e === "attribute key" ? "Start each attribute with a name, like `shape`." : e === "':'" ? "Put `:` between the attribute name and value: `{shape: cylinder}`." : e === "attribute value" ? "Put an attribute value after `:`." : e === "closing '}' for attributes" ? "Close the attribute block with `}`." : e === "space after 'into'" ? "Put a space after `into`: `into api`." : e === "node identifier after 'into'" ? "Tell `into` which node to dive into." : e === "space after 'step'" ? "Put a space after `step`: `step request`." : e === "step name" ? "Name the step: `step request`." : e === "newline or '}' (statements end at the end of the line)" ? "This statement has extra text. Put the next statement on a new line or close the block with `}`." : e === "statement (+ node, - node, + edge, - edge, into, out, or 'a ~> b'/'a <~ b')" ? "I don't recognize this statement. Start with `+`, `-`, `~`, `into`, `out`, `par`, `seq`, or movement like `api ~> db`." : e === "'scene', 'still', 'title', 'step', 'inside', a statement, or end of input" ? "Start with a statement like `+ api: API`, a marker like `step request`, or a block with `scene`, `still`, `title`, or `inside`." : e;
}, PE = (t) => {
  const n = Va(t), e = So('"')(n), r = (() => {
    if (e.tag === "Just")
      return hy('"')(e._1);
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
}, Qm = (t) => (n) => t !== "AnimatedSurface" && n.statements.length !== 0 ? {
  ...n,
  frames: kt(n.frames)((() => {
    if (t === "StillSurface")
      return { name: v, ops: Ar("Seq", n.statements), kind: Fl };
    if (t === "SequenceSurface")
      return { name: v, ops: Ar("Seq", n.statements), kind: ba };
    if (t === "AnimatedSurface")
      return { name: v, ops: Ar("Seq", n.statements), kind: ba };
    f();
  })()),
  statements: []
} : n, AE = /* @__PURE__ */ (() => {
  const t = Tt(Dt((n) => n === "\\"))("'\\\\'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((_) => hE(
        l,
        e,
        r,
        o,
        (d, g) => e((p) => i(
          l._3 && !d._3 ? S(d._1, d._2, !0) : d,
          g === "n" ? `
` : g === "t" ? "	" : g === "r" ? "\r" : g
        ))
      ));
    })
  ));
})(), RE = /* @__PURE__ */ (() => {
  const t = Dt((n) => n !== '"' && n !== "\\" && n !== `
`);
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => AE(S(s, u, !1), e, r, (c, l) => e((_) => t(n, e, r, o, i)), i));
  };
})(), FE = /* @__PURE__ */ (() => {
  const t = Tt(Dt((n) => n === '"'))(`'"'`);
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = tr(RE), _ = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((d) => l(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = Tt(Tt(Dt((y) => y === '"'))(`'"'`))(`closing '"' (unterminated string)`), $ = _._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return e((y) => h(
            $,
            e,
            r,
            o,
            (x, J) => e((N) => i(
              $._3 && !x._3 ? S(x._1, x._2, !0) : x,
              ko(tn(Jn.foldr, p))
            ))
          ));
        })
      ));
    })
  ));
})(), GE = { frames: [], statements: [] }, IE = (t) => {
  const n = bE(ao(`
`)(t));
  return Qr(`
`)(I(NE)(I(Oi(SE(n)))(n)));
}, BE = /* @__PURE__ */ (() => {
  const t = Tt(Dt((n) => n === "|"))("'|'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = tr(xE), _ = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((d) => l(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = Tt(Tt(Dt((y) => y === "|"))("'|'"))("closing '|'"), $ = _._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return e((y) => h(
            $,
            e,
            r,
            o,
            (x, J) => e((N) => i(
              $._3 && !x._3 ? S(x._1, x._2, !0) : x,
              IE(Qr("")(tn(Jn.foldr, p)))
            ))
          ));
        })
      ));
    })
  ));
})(), Ys = /* @__PURE__ */ Dt((t) => t >= "0" && t <= "9"), DE = /* @__PURE__ */ (() => {
  const t = Tt(Dt((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => {
    const s = n._1, u = n._2;
    return e((a) => yc(
      S(s, u, !1),
      e,
      r,
      (c, l) => {
        const _ = c._3;
        return e((d) => {
          if (_)
            return o(c, l);
          const g = n._1, p = n._2;
          return e((m) => Ys(
            S(g, p, !1),
            e,
            r,
            (h, $) => {
              const y = h._3;
              return e((x) => {
                if (y)
                  return o(h, $);
                const J = n._1, N = n._2;
                return e((C) => t(
                  S(J, N, !1),
                  e,
                  r,
                  (k, P) => {
                    const E = k._3;
                    return e((Q) => E ? o(k, P) : LE(n, e, r, o, i));
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
})(), Un = /* @__PURE__ */ (() => {
  const t = Tt(Dt((n) => n === "_"))("'_'");
  return (n, e, r, o, i) => e((s) => {
    const u = (l, _) => e((d) => {
      const g = tr(DE), p = n._3 && !l._3 ? S(l._1, l._2, !0) : l;
      return e((m) => g(
        p,
        e,
        r,
        o,
        (h, $) => e((y) => i(
          p._3 && !h._3 ? S(h._1, h._2, !0) : h,
          ts(_) + ko(tn(Jn.foldr, $))
        ))
      ));
    }), a = n._1, c = n._2;
    return e((l) => yc(
      S(a, c, !1),
      e,
      r,
      (_, d) => {
        const g = _._3;
        return e((p) => g ? o(_, d) : t(n, e, r, o, u));
      },
      u
    ));
  });
})(), n1 = (t, n, e, r, o) => n((i) => un(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = Tt(Un)("attribute key"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((_) => c(
      l,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = l._3 && !d._3 ? S(d._1, d._2, !0) : d;
        return n((h) => un(
          m,
          n,
          e,
          r,
          ($, y) => n((x) => {
            const J = Tt(Tt(Dt((C) => C === ":"))("':'"))("':'"), N = m._3 && !$._3 ? S($._1, $._2, !0) : $;
            return n((C) => J(
              N,
              n,
              e,
              r,
              (k, P) => n((E) => {
                const Q = N._3 && !k._3 ? S(k._1, k._2, !0) : k;
                return n((W) => un(
                  Q,
                  n,
                  e,
                  r,
                  (B, H) => n((rt) => {
                    const ot = Tt(Un)("attribute value"), M = Q._3 && !B._3 ? S(B._1, B._2, !0) : B;
                    return n((q) => ot(
                      M,
                      n,
                      e,
                      r,
                      (A, R) => n((X) => {
                        const L = M._3 && !A._3 ? S(A._1, A._2, !0) : A;
                        return n((G) => un(
                          L,
                          n,
                          e,
                          r,
                          (z, U) => n((K) => o(L._3 && !z._3 ? S(z._1, z._2, !0) : z, b(g, R)))
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
)), zE = /* @__PURE__ */ Im(/* @__PURE__ */ (() => {
  const t = Tt(Dt((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (a, c) => e((l) => e((_) => {
      const d = n._3 && !a._3 ? S(a._1, a._2, !0) : a;
      return un(d, e, r, o, (g, p) => e((m) => i(d._3 && !g._3 ? S(g._1, g._2, !0) : g, p)));
    }))
  )));
})())(/* @__PURE__ */ Tt(/* @__PURE__ */ (() => {
  const t = Tt(Dt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => un(
    n,
    e,
    r,
    o,
    (a, c) => e((l) => e((_) => {
      const d = n._3 && !a._3 ? S(a._1, a._2, !0) : a;
      return t(d, e, r, o, (g, p) => e((m) => i(d._3 && !g._3 ? S(g._1, g._2, !0) : g, p)));
    }))
  )));
})())("closing '}' for attributes"))(/* @__PURE__ */ (() => {
  const t = Tt(Dt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => {
    const u = (l, _) => e((d) => (() => {
      if (_.tag === "Just")
        return (g, p, m, h, $) => $(g, D);
      if (_.tag === "Nothing")
        return (g, p, m, h, $) => p((y) => n1(
          g,
          p,
          m,
          h,
          (x, J) => p((N) => {
            const C = tr((() => {
              const P = Tt(Dt((E) => E === ","))("','");
              return (E, Q, W, B, H) => {
                const rt = E._3;
                return Q((ot) => Q((M) => Q((q) => Q((A) => Q((R) => Q((X) => un(
                  E,
                  Q,
                  W,
                  (L, G) => B(S(L._1, L._2, rt), G),
                  (L, G) => Q((z) => Q((U) => {
                    const K = E._3 && !L._3 ? S(L._1, L._2, !0) : L;
                    return P(
                      K,
                      Q,
                      W,
                      (O, Z) => B(S(O._1, O._2, rt), Z),
                      (O, Z) => Q((et) => {
                        const nt = K._3 && !O._3 ? S(O._1, O._2, !0) : O;
                        return Q((gt) => Q((ct) => {
                          const $t = E._3 && !nt._3 ? S(nt._1, nt._2, !0) : nt;
                          return un(
                            $t,
                            Q,
                            W,
                            (At, Rt) => B(S(At._1, At._2, rt), Rt),
                            (At, Rt) => Q((rn) => {
                              const xt = $t._3 && !At._3 ? S(At._1, At._2, !0) : At;
                              return Q((Gt) => Q((vt) => {
                                const Ct = E._3 && !xt._3 ? S(xt._1, xt._2, !0) : xt;
                                return n1(
                                  Ct,
                                  Q,
                                  W,
                                  (_t, yt) => B(S(_t._1, _t._2, rt), yt),
                                  (_t, yt) => Q((ft) => H(Ct._3 && !_t._3 ? S(_t._1, _t._2, !0) : _t, yt))
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
            })()), k = g._3 && !x._3 ? S(x._1, x._2, !0) : x;
            return p((P) => C(
              k,
              p,
              m,
              h,
              (E, Q) => p((W) => $(
                k._3 && !E._3 ? S(E._1, E._2, !0) : E,
                mE([J, ...tn(Jn.foldr, Q)])
              ))
            ));
          })
        ));
      f();
    })()(n._3 && !l._3 ? S(l._1, l._2, !0) : l, e, r, o, i)), a = n._1, c = n._2;
    return e((l) => e((_) => t(
      S(a, c, !1),
      e,
      r,
      (d, g) => e((p) => u(n, v)),
      (d, g) => e((p) => u(S(a, c, !1), T("Just", g)))
    )));
  });
})()), HE = (t, n, e, r, o) => n((i) => un(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = Tt(Dt((_) => _ === "{"))("'{'"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((_) => {
      const d = (m, h) => n(($) => (() => {
        if (h.tag === "Just")
          return zE;
        if (h.tag === "Nothing")
          return (y, x, J, N, C) => C(y, D);
        f();
      })()(l._3 && !m._3 ? S(m._1, m._2, !0) : m, n, e, r, o)), g = l._1, p = l._2;
      return n((m) => n((h) => c(
        S(g, p, !1),
        n,
        e,
        ($, y) => n((x) => d(l, v)),
        ($, y) => n((x) => d(S(g, p, !1), T("Just", y)))
      )));
    });
  })
)), QE = (t) => (n) => (e) => (r, o, i, s, u) => o((a) => un(
  r,
  o,
  i,
  s,
  (c, l) => o((_) => {
    const d = Ge(Tt(Un)("target node identifier")), g = r._3 && !c._3 ? S(c._1, c._2, !0) : c;
    return o((p) => d(
      g,
      o,
      i,
      s,
      (m, h) => o(($) => u(
        g._3 && !m._3 ? S(m._1, m._2, !0) : m,
        { op: mr("DelEdge", { from: t, to: h._1, directed: e }), operands: [n, h._2] }
      ))
    ));
  })
)), OE = (t, n, e, r, o) => n((i) => $r(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((l) => {
      const _ = c._3;
      return n((d) => Un(
        c,
        n,
        e,
        (g, p) => r(S(g._1, g._2, _), p),
        (g, p) => n((m) => {
          const h = c._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return n(($) => un(
            h,
            n,
            e,
            (y, x) => r(S(y._1, y._2, _), x),
            (y, x) => n((J) => {
              const N = h._3 && !y._3 ? S(y._1, y._2, !0) : y;
              return n((C) => {
                const k = (Q, W) => n((B) => {
                  const H = N._3 && !Q._3 ? S(Q._1, Q._2, !0) : Q;
                  return n((rt) => r(c._3 && !H._3 ? S(H._1, H._2, !0) : H, Rr("Use `~>` / `<~` for movement tokens.", u)));
                }), P = N._1, E = N._2;
                return n((Q) => Ce("->")(
                  S(P, E, !1),
                  n,
                  e,
                  (W, B) => {
                    const H = W._3;
                    return n((rt) => H ? r(S(W._1, W._2, _), B) : Ce("<-")(N, n, e, (ot, M) => r(S(ot._1, ot._2, _), M), k));
                  },
                  k
                ));
              });
            })
          ));
        })
      ));
    });
  })
)), WE = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => Ge(Un)(
    t,
    n,
    e,
    (a, c) => r(S(a._1, a._2, s), c),
    (a, c) => n((l) => {
      const _ = t._3 && !a._3 ? S(a._1, a._2, !0) : a;
      return n((d) => un(
        _,
        n,
        e,
        (g, p) => r(S(g._1, g._2, s), p),
        (g, p) => n((m) => {
          const h = Tt(Dt((y) => y === "~"))("'~'"), $ = _._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return n((y) => {
            const x = (C, k) => n((P) => {
              const E = $._3 && !C._3 ? S(C._1, C._2, !0) : C;
              return n((Q) => {
                const W = c._1, B = c._2, H = t._3 && !E._3 ? S(E._1, E._2, !0) : E;
                return n((rt) => un(
                  H,
                  n,
                  e,
                  r,
                  (ot, M) => n((q) => {
                    const A = Tt(Dt((L) => L === "~"))("'~'"), R = Tt(Dt((L) => L === "<"))("'<'"), X = H._3 && !ot._3 ? S(ot._1, ot._2, !0) : ot;
                    return n((L) => {
                      const G = (K, O) => n((Z) => {
                        const et = O === "~" ? Tt(Ce("~>"))("'~>'") : Tt(Ce("<~"))("'<~'"), nt = X._3 && !K._3 ? S(K._1, K._2, !0) : K;
                        return n((gt) => et(
                          nt,
                          n,
                          e,
                          r,
                          (ct, $t) => n((At) => o(
                            nt._3 && !ct._3 ? S(ct._1, ct._2, !0) : ct,
                            b(W, b(B, $t))
                          ))
                        ));
                      }), z = X._1, U = X._2;
                      return n((K) => A(
                        S(z, U, !1),
                        n,
                        e,
                        (O, Z) => {
                          const et = O._3;
                          return n((nt) => et ? r(X, Z) : R(X, n, e, (gt, ct) => r(X, ct), (gt, ct) => G(X, ct)));
                        },
                        (O, Z) => G(X, Z)
                      ));
                    });
                  })
                ));
              });
            }), J = $._1, N = $._2;
            return n((C) => h(
              S(J, N, !1),
              n,
              e,
              (k, P) => {
                const E = k._3;
                return n((Q) => E ? r(S($._1, $._2, s), P) : n((W) => Ce("<~")(
                  $,
                  n,
                  e,
                  (B, H) => r(S($._1, $._2, s), H),
                  (B, H) => n((rt) => x($))
                )));
              },
              (k, P) => x($)
            ));
          });
        })
      ));
    })
  ));
}), qE = /* @__PURE__ */ (() => {
  const t = Tt(Dt((n) => n === "~"))("'~'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = Tt(Lo)("space after '~'"), _ = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((d) => l(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = Ge(Tt(Un)("source node identifier")), $ = _._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return e((y) => h(
            $,
            e,
            r,
            o,
            (x, J) => e((N) => {
              const C = J._1, k = J._2, P = $._3 && !x._3 ? S(x._1, x._2, !0) : x;
              return e((E) => un(
                P,
                e,
                r,
                o,
                (Q, W) => e((B) => {
                  const H = Tt(Ce("->"))("source edge arrow '->'"), rt = P._3 && !Q._3 ? S(Q._1, Q._2, !0) : Q;
                  return e((ot) => H(
                    rt,
                    e,
                    r,
                    o,
                    (M, q) => e((A) => {
                      const R = rt._3 && !M._3 ? S(M._1, M._2, !0) : M;
                      return e((X) => un(
                        R,
                        e,
                        r,
                        o,
                        (L, G) => e((z) => {
                          const U = Ge(Tt(Un)("target node identifier")), K = R._3 && !L._3 ? S(L._1, L._2, !0) : L;
                          return e((O) => U(
                            K,
                            e,
                            r,
                            o,
                            (Z, et) => e((nt) => {
                              const gt = et._1, ct = et._2, $t = K._3 && !Z._3 ? S(Z._1, Z._2, !0) : Z;
                              return e((At) => un(
                                $t,
                                e,
                                r,
                                o,
                                (Rt, rn) => e((xt) => {
                                  const Gt = Tt(Ce("=>"))("repoint separator '=>'"), vt = $t._3 && !Rt._3 ? S(Rt._1, Rt._2, !0) : Rt;
                                  return e((Ct) => Gt(
                                    vt,
                                    e,
                                    r,
                                    o,
                                    (_t, yt) => e((ft) => {
                                      const mt = vt._3 && !_t._3 ? S(_t._1, _t._2, !0) : _t;
                                      return e((Ft) => un(
                                        mt,
                                        e,
                                        r,
                                        o,
                                        (Lt, Qt) => e((nn) => {
                                          const me = Ge(Tt(Un)("new source node identifier")), Xn = mt._3 && !Lt._3 ? S(Lt._1, Lt._2, !0) : Lt;
                                          return e((te) => me(
                                            Xn,
                                            e,
                                            r,
                                            o,
                                            (Ot, Wt) => e(($e) => {
                                              const oe = Wt._1, Yn = Wt._2, Qn = Xn._3 && !Ot._3 ? S(Ot._1, Ot._2, !0) : Ot;
                                              return e((ar) => un(
                                                Qn,
                                                e,
                                                r,
                                                o,
                                                (on, xn) => e((Kl) => {
                                                  const au = Tt(Ce("->"))("replacement edge arrow '->'"), cu = Qn._3 && !on._3 ? S(on._1, on._2, !0) : on;
                                                  return e((Vl) => au(
                                                    cu,
                                                    e,
                                                    r,
                                                    o,
                                                    (pn, ae) => e((Or) => {
                                                      const Ao = cu._3 && !pn._3 ? S(pn._1, pn._2, !0) : pn;
                                                      return e((lo) => un(
                                                        Ao,
                                                        e,
                                                        r,
                                                        o,
                                                        (ke, di) => e((yr) => {
                                                          const nr = Ge(Tt(Un)("new target node identifier")), Ro = Ao._3 && !ke._3 ? S(ke._1, ke._2, !0) : ke;
                                                          return e((us) => nr(
                                                            Ro,
                                                            e,
                                                            r,
                                                            o,
                                                            (go, hi) => e((fu) => i(
                                                              Ro._3 && !go._3 ? S(go._1, go._2, !0) : go,
                                                              {
                                                                op: mr("RepointEdge", { from: C, to: gt, newFrom: oe, newTo: hi._1 }),
                                                                operands: [k, ct, Yn, hi._2]
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
})(), XE = (t, n, e, r, o) => n((i) => Ys(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = tr(Ys), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((_) => c(
      l,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = F2(ts(u) + ko(tn(
          Jn.foldr,
          g
        )));
        return (() => {
          if (m.tag === "Just") {
            const h = m._1;
            return ($, y, x, J, N) => N($, h);
          }
          if (m.tag === "Nothing")
            return (h, $, y, x, J) => J(h, 0);
          f();
        })()(l._3 && !d._3 ? S(d._1, d._2, !0) : d, n, e, r, o);
      })
    ));
  })
)), YE = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Ce(t)(
    n,
    e,
    r,
    (a, c) => o(S(a._1, a._2, s), c),
    (a, c) => e((l) => {
      const _ = Ki((() => {
        const g = Tt(Dt((m) => m === "_"))("'_'"), p = Tt(Dt((m) => m === "-"))("'-'");
        return (m, h, $, y, x) => {
          const J = m._1, N = m._2;
          return h((C) => yc(
            S(J, N, !1),
            h,
            $,
            (k, P) => {
              const E = k._3;
              return h((Q) => {
                if (E)
                  return y(k, P);
                const W = m._1, B = m._2;
                return h((H) => Ys(
                  S(W, B, !1),
                  h,
                  $,
                  (rt, ot) => {
                    const M = rt._3;
                    return h((q) => {
                      if (M)
                        return y(rt, ot);
                      const A = m._1, R = m._2;
                      return h((X) => g(
                        S(A, R, !1),
                        h,
                        $,
                        (L, G) => {
                          const z = L._3;
                          return h((U) => z ? y(L, G) : p(m, h, $, y, x));
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
      })()), d = n._3 && !a._3 ? S(a._1, a._2, !0) : a;
      return e((g) => _(
        d,
        e,
        r,
        (p, m) => o(S(p._1, p._2, s), m),
        (p, m) => e((h) => {
          const $ = d._3 && !p._3 ? S(p._1, p._2, !0) : p;
          return e((y) => Le(
            $,
            e,
            r,
            (x, J) => o(S(x._1, x._2, s), J),
            (x, J) => e((N) => i($._3 && !x._3 ? S(x._1, x._2, !0) : x, t))
          ));
        })
      ));
    })
  ));
}, He = (t) => (n, e, r, o, i) => {
  const s = n._3;
  return e((u) => Ce(t)(
    n,
    e,
    r,
    (a, c) => o(S(a._1, a._2, s), c),
    (a, c) => e((l) => {
      const _ = Ki((() => {
        const g = Tt(Dt((m) => m === "_"))("'_'"), p = Tt(Dt((m) => m === "-"))("'-'");
        return (m, h, $, y, x) => {
          const J = m._1, N = m._2;
          return h((C) => yc(
            S(J, N, !1),
            h,
            $,
            (k, P) => {
              const E = k._3;
              return h((Q) => {
                if (E)
                  return y(k, P);
                const W = m._1, B = m._2;
                return h((H) => Ys(
                  S(W, B, !1),
                  h,
                  $,
                  (rt, ot) => {
                    const M = rt._3;
                    return h((q) => {
                      if (M)
                        return y(rt, ot);
                      const A = m._1, R = m._2;
                      return h((X) => g(
                        S(A, R, !1),
                        h,
                        $,
                        (L, G) => {
                          const z = L._3;
                          return h((U) => z ? y(L, G) : p(m, h, $, y, x));
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
      })()), d = n._3 && !a._3 ? S(a._1, a._2, !0) : a;
      return e((g) => _(
        d,
        e,
        r,
        (p, m) => o(S(p._1, p._2, s), m),
        (p, m) => e((h) => i(d._3 && !p._3 ? S(p._1, p._2, !0) : p, void 0))
      ));
    })
  ));
}, ME = (t, n, e, r, o) => n((i) => He("into")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = Tt(Lo)("space after 'into'"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((_) => c(
      l,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = Ge(Tt(Un)("node identifier after 'into'")), h = l._3 && !d._3 ? S(d._1, d._2, !0) : d;
        return n(($) => m(
          h,
          n,
          e,
          r,
          (y, x) => n((J) => o(
            h._3 && !y._3 ? S(y._1, y._2, !0) : y,
            { op: mr("Enter", { id: x._1 }), operands: [x._2] }
          ))
        ));
      })
    ));
  })
)), UE = (t, n, e, r, o) => n((i) => He("out")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => o(t._3 && !s._3 ? S(s._1, s._2, !0) : s, { op: gL, operands: [] }))
)), KE = (t, n, e, r, o) => n((i) => He("seed")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((l) => un(
      c,
      n,
      e,
      r,
      (_, d) => n((g) => {
        const p = Tt(XE)("integer (seed value)"), m = c._3 && !_._3 ? S(_._1, _._2, !0) : _;
        return n((h) => p(
          m,
          n,
          e,
          r,
          ($, y) => n((x) => {
            const J = m._3 && !$._3 ? S($._1, $._2, !0) : $;
            return n((N) => Le(
              J,
              n,
              e,
              r,
              (C, k) => n((P) => o(J._3 && !C._3 ? S(C._1, C._2, !0) : C, y))
            ));
          })
        ));
      })
    ));
  })
)), Om = (t, n, e, r, o) => {
  const i = t._3;
  return n((s) => He("diagram")(
    t,
    n,
    e,
    (u, a) => r(S(u._1, u._2, i), a),
    (u, a) => n((c) => {
      const l = Tt(Lo)("space after 'diagram'"), _ = t._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return n((d) => l(
        _,
        n,
        e,
        (g, p) => r(S(g._1, g._2, i), p),
        (g, p) => n((m) => {
          const h = Tt(He("sequence"))("diagram mode"), $ = _._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return n((y) => h(
            $,
            n,
            e,
            (x, J) => r(S(x._1, x._2, i), J),
            (x, J) => n((N) => {
              const C = $._3 && !x._3 ? S(x._1, x._2, !0) : x;
              return n((k) => zm(
                C,
                n,
                e,
                (P, E) => r(S(P._1, P._2, i), E),
                (P, E) => n((Q) => o(
                  C._3 && !P._3 ? S(P._1, P._2, !0) : P,
                  lL
                ))
              ));
            })
          ));
        })
      ));
    })
  ));
}, Wm = (t, n, e, r, o) => {
  const i = t._3;
  return n((s) => He("still")(
    t,
    n,
    e,
    (u, a) => r(S(u._1, u._2, i), a),
    (u, a) => n((c) => {
      const l = t._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return n((_) => zm(
        l,
        n,
        e,
        (d, g) => r(S(d._1, d._2, i), g),
        (d, g) => n((p) => o(l._3 && !d._3 ? S(d._1, d._2, !0) : d, fL))
      ));
    })
  ));
}, qm = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => Wm(
    S(i, s, !1),
    n,
    e,
    (a, c) => {
      const l = a._3;
      return n((_) => l ? r(a, c) : Om(t, n, e, r, o));
    },
    o
  ));
}, VE = (t) => (n, e, r, o, i) => e((s) => $r(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
    return e((_) => {
      const d = l._3;
      return qm(
        l,
        e,
        r,
        (g, p) => o(S(g._1, g._2, d), p),
        (g, p) => e((m) => o(
          l._3 && !g._3 ? S(g._1, g._2, !0) : g,
          Rr(
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
)), jE = (t) => (n, e, r, o, i) => e((s) => $r(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
    return e((_) => {
      const d = (m, h) => e(($) => (() => {
        if (h.tag === "Just") {
          const y = (() => {
            if (t === "AnimatedSurface")
              return "This document already declares `animation`; choose one diagram mode.";
            if (t === "StillSurface")
              return "This document already declares `still`; choose one diagram mode.";
            if (t === "SequenceSurface")
              return "This document already declares `diagram sequence`; choose one diagram mode.";
            f();
          })();
          return (x, J, N, C, k) => C(x, Rr(y, a));
        }
        if (h.tag === "Nothing")
          return (y, x, J, N, C) => C(y, void 0);
        f();
      })()(l._3 && !m._3 ? S(m._1, m._2, !0) : m, e, r, o, i)), g = l._1, p = l._2;
      return e((m) => e((h) => qm(
        S(g, p, !1),
        e,
        r,
        ($, y) => {
          const x = $._3;
          return e((J) => x ? o($, y) : d(l, v));
        },
        ($, y) => e((x) => d($, T("Just", y)))
      )));
    });
  })
)), ZE = (t, n, e, r, o) => n((i) => {
  const s = (c, l) => n((_) => {
    const d = t._3 && !c._3 ? S(c._1, c._2, !0) : c;
    return n((g) => Le(
      d,
      n,
      e,
      r,
      (p, m) => n((h) => {
        const $ = d._3 && !p._3 ? S(p._1, p._2, !0) : p;
        return n((y) => jE(l)(
          $,
          n,
          e,
          r,
          (x, J) => n((N) => o($._3 && !x._3 ? S(x._1, x._2, !0) : x, l))
        ));
      })
    ));
  }), u = t._1, a = t._2;
  return n((c) => Wm(
    S(u, a, !1),
    n,
    e,
    (l, _) => {
      const d = l._3;
      return n((g) => d ? r(l, _) : Om(t, n, e, r, s));
    },
    s
  ));
}), tP = (t, n, e, r, o) => n((i) => {
  const s = (c, l) => n((_) => o(
    c,
    (() => {
      if (l.tag === "Nothing")
        return cL;
      if (l.tag === "Just")
        return l._1;
      f();
    })()
  )), u = t._1, a = t._2;
  return n((c) => n((l) => ZE(
    S(u, a, !1),
    n,
    e,
    (_, d) => {
      const g = _._3;
      return n((p) => g ? r(_, d) : s(t, v));
    },
    (_, d) => n((g) => s(_, T("Just", d)))
  )));
}), nP = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => un(
    t,
    n,
    e,
    (a, c) => r(S(a._1, a._2, s), c),
    (a, c) => n((l) => He("via")(
      t._3 && !a._3 ? S(a._1, a._2, !0) : a,
      n,
      e,
      (_, d) => r(S(_._1, _._2, s), d),
      (_, d) => n((g) => {
        const p = t._3 && !_._3 ? S(_._1, _._2, !0) : _;
        return n((m) => mc(
          p,
          n,
          e,
          r,
          (h, $) => n((y) => {
            const x = p._3 && !h._3 ? S(h._1, h._2, !0) : h;
            return n((J) => Lo(
              x,
              n,
              e,
              r,
              (N, C) => n((k) => {
                const P = Tt(Un)("source node identifier after 'via'"), E = x._3 && !N._3 ? S(N._1, N._2, !0) : N;
                return n((Q) => P(
                  E,
                  n,
                  e,
                  r,
                  (W, B) => n((H) => {
                    const rt = E._3 && !W._3 ? S(W._1, W._2, !0) : W;
                    return n((ot) => un(
                      rt,
                      n,
                      e,
                      r,
                      (M, q) => n((A) => {
                        const R = Tt(Un)("target node identifier after 'via'"), X = rt._3 && !M._3 ? S(M._1, M._2, !0) : M;
                        return n((L) => R(
                          X,
                          n,
                          e,
                          r,
                          (G, z) => n((U) => o(X._3 && !G._3 ? S(G._1, G._2, !0) : G, { from: B, to: z }))
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
}), eP = (t) => (n) => {
  const e = tr(nP);
  return (r, o, i, s, u) => o((a) => e(
    r,
    o,
    i,
    s,
    (c, l) => o((_) => u(
      r._3 && !c._3 ? S(c._1, c._2, !0) : c,
      { op: mr("DelNode", { id: t, via: tn(Jn.foldr, l) }), operands: [n] }
    ))
  ));
}, rP = /* @__PURE__ */ (() => {
  const t = Tt(Dt((n) => n === "-"))("'-'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = Tt(Lo)("space after '-'"), _ = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((d) => l(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = Ge(Tt(Un)("node identifier after '-'")), $ = _._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return e((y) => h(
            $,
            e,
            r,
            o,
            (x, J) => e((N) => {
              const C = J._1, k = J._2, P = $._3 && !x._3 ? S(x._1, x._2, !0) : x;
              return e((E) => Hm(
                P,
                e,
                r,
                o,
                (Q, W) => e((B) => (() => {
                  if (W.tag === "Just")
                    return QE(C)(k)(W._1);
                  if (W.tag === "Nothing")
                    return eP(C)(k);
                  f();
                })()(P._3 && !Q._3 ? S(Q._1, Q._2, !0) : Q, e, r, o, i))
              ));
            })
          ));
        })
      ));
    })
  ));
})(), fr = (t) => (n) => (e, r, o, i, s) => r((u) => $r(
  e,
  r,
  o,
  i,
  (a, c) => r((l) => {
    const _ = e._3 && !a._3 ? S(a._1, a._2, !0) : a;
    return r((d) => He(t)(
      _,
      r,
      o,
      i,
      (g, p) => r((m) => i(_._3 && !g._3 ? S(g._1, g._2, !0) : g, Rr(n, c)))
    ));
  })
)), oP = (t) => t === "AnimatedSurface" ? (n, e, r, o, i) => e((s) => $r(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
    return e((_) => He("step")(
      l,
      e,
      r,
      o,
      (d, g) => e((p) => {
        const m = Tt(Lo)("space after 'step'"), h = l._3 && !d._3 ? S(d._1, d._2, !0) : d;
        return e(($) => m(
          h,
          e,
          r,
          o,
          (y, x) => e((J) => {
            const N = Ge(Tt(Un)("step name")), C = h._3 && !y._3 ? S(y._1, y._2, !0) : y;
            return e((k) => N(
              C,
              e,
              r,
              o,
              (P, E) => e((Q) => {
                const W = E._1, B = E._2, H = C._3 && !P._3 ? S(P._1, P._2, !0) : P;
                return e((rt) => $r(
                  H,
                  e,
                  r,
                  o,
                  (ot, M) => e((q) => {
                    const A = H._3 && !ot._3 ? S(ot._1, ot._2, !0) : ot;
                    return e((R) => un(
                      A,
                      e,
                      r,
                      o,
                      (X, L) => e((G) => {
                        const z = A._3 && !X._3 ? S(X._1, X._2, !0) : X;
                        return e((U) => Dm(
                          z,
                          e,
                          r,
                          o,
                          (K, O) => e((Z) => {
                            const et = z._3 && !K._3 ? S(K._1, K._2, !0) : K;
                            return e((nt) => Le(
                              et,
                              e,
                              r,
                              o,
                              (gt, ct) => e(($t) => {
                                const At = { line: a.line, column: a.column, endLine: M.line, endColumn: M.column };
                                return i(
                                  et._3 && !gt._3 ? S(gt._1, gt._2, !0) : gt,
                                  {
                                    name: T("Just", W),
                                    ops: Ar(
                                      "Leaf",
                                      {
                                        op: mr("Step", { name: W }),
                                        line: At.line,
                                        column: At.column,
                                        endLine: At.endLine,
                                        endColumn: At.endColumn,
                                        span: At,
                                        operands: [B]
                                      }
                                    ),
                                    kind: km
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
)) : fr("step")("`step` markers are only supported in animated diagrams."), iP = /* @__PURE__ */ (() => {
  const t = Tt(Dt((n) => n === ":"))("':'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((_) => un(
        l,
        e,
        r,
        o,
        (d, g) => e((p) => {
          const m = tr(Dt(TE)), h = l._3 && !d._3 ? S(d._1, d._2, !0) : d;
          return e(($) => m(
            h,
            e,
            r,
            o,
            (y, x) => e((J) => i(
              h._3 && !y._3 ? S(y._1, y._2, !0) : y,
              Va(ko(tn(Jn.foldr, x)))
            ))
          ));
        })
      ));
    })
  ));
})(), sP = (t, n, e, r, o) => n((i) => un(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => Tt((c, l, _, d, g) => {
    const p = c._1, m = c._2;
    return l((h) => iP(
      S(p, m, !1),
      l,
      _,
      ($, y) => {
        const x = $._3;
        return l((J) => {
          if (x)
            return d($, y);
          const N = c._1, C = c._2;
          return l((k) => BE(
            S(N, C, !1),
            l,
            _,
            (P, E) => {
              const Q = P._3;
              return l((W) => Q ? d(P, E) : FE(c, l, _, d, g));
            },
            g
          ));
        });
      },
      g
    ));
  })('label ("…", : rest-of-line, or |…|)')(t._3 && !s._3 ? S(s._1, s._2, !0) : s, n, e, r, o))
)), xc = (t) => (n, e, r, o, i) => e((s) => un(
  n,
  e,
  r,
  o,
  (u, a) => e((c) => {
    const l = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
    return e((_) => {
      const d = (m, h) => e(($) => (h ? ((y, x, J, N, C) => C(y, v)) : (y, x, J, N, C) => x((k) => sP(
        y,
        x,
        J,
        N,
        (P, E) => x((Q) => C(P, T("Just", E)))
      )))(l._3 && !m._3 ? S(m._1, m._2, !0) : m, e, r, o, i)), g = l._1, p = l._2;
      return e((m) => {
        const h = ($, y) => {
          const x = $._3;
          return e((J) => x ? o($, y) : d(l, !1));
        };
        return e(($) => e((y) => e((x) => uu(
          S(g, p, !1),
          e,
          r,
          (J, N) => {
            const C = J._3;
            return e((k) => C ? h(S(g, p, !1), N) : e((P) => Dt(t)(
              S(g, p, !1),
              e,
              r,
              (E, Q) => h(S(g, p, !1), Q),
              (E, Q) => e((W) => e((B) => d(S(g, p, !1), !0)))
            )));
          },
          (J, N) => e((C) => e((k) => d(S(g, p, !1), !0)))
        ))));
      });
    });
  })
)), uP = (t) => (n) => (e) => (r, o, i, s, u) => o((a) => un(
  r,
  o,
  i,
  s,
  (c, l) => o((_) => {
    const d = Ge(Tt(Un)("target node identifier")), g = r._3 && !c._3 ? S(c._1, c._2, !0) : c;
    return o((p) => d(
      g,
      o,
      i,
      s,
      (m, h) => o(($) => {
        const y = h._1, x = h._2, J = g._3 && !m._3 ? S(m._1, m._2, !0) : m;
        return o((N) => xc(Bl)(
          J,
          o,
          i,
          s,
          (C, k) => o((P) => u(
            J._3 && !C._3 ? S(C._1, C._2, !0) : C,
            {
              op: mr("AddEdge", { from: t, to: y, label: k.tag === "Just" ? T("Just", k._1) : v, directed: e }),
              operands: [n, x]
            }
          ))
        ));
      })
    ));
  })
)), aP = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => Ge(Un)(
    t,
    n,
    e,
    (a, c) => r(S(a._1, a._2, s), c),
    (a, c) => n((l) => {
      const _ = t._3 && !a._3 ? S(a._1, a._2, !0) : a;
      return n((d) => un(
        _,
        n,
        e,
        (g, p) => r(S(g._1, g._2, s), p),
        (g, p) => n((m) => {
          const h = Tt(Dt((y) => y === "<"))("'<'"), $ = _._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return n((y) => h(
            $,
            n,
            e,
            (x, J) => r(S($._1, $._2, s), J),
            (x, J) => n((N) => {
              const C = Ki((P, E, Q, W, B) => {
                const H = P._3;
                return Ce("<-")(P, E, Q, (rt, ot) => W(S(rt._1, rt._2, H), ot), B);
              }), k = $._3 && !$._3 ? S($._1, $._2, !0) : $;
              return n((P) => C(
                k,
                n,
                e,
                (E, Q) => r(S(E._1, E._2, s), Q),
                (E, Q) => n((W) => {
                  const B = k._3 && !E._3 ? S(E._1, E._2, !0) : E;
                  return n((H) => {
                    const rt = c._1, ot = c._2, M = t._3 && !B._3 ? S(B._1, B._2, !0) : B;
                    return n((q) => un(
                      M,
                      n,
                      e,
                      r,
                      (A, R) => n((X) => {
                        const L = Tt(Ce("<~"))("'<~'"), G = M._3 && !A._3 ? S(A._1, A._2, !0) : A;
                        return n((z) => L(
                          G,
                          n,
                          e,
                          r,
                          (U, K) => n((O) => {
                            const Z = G._3 && !U._3 ? S(U._1, U._2, !0) : U;
                            return n((et) => un(
                              Z,
                              n,
                              e,
                              r,
                              (nt, gt) => n((ct) => {
                                const $t = Ge(Tt(Un)("target node identifier")), At = Z._3 && !nt._3 ? S(nt._1, nt._2, !0) : nt;
                                return n((Rt) => $t(
                                  At,
                                  n,
                                  e,
                                  r,
                                  (rn, xt) => n((Gt) => {
                                    const vt = xt._1, Ct = xt._2, _t = At._3 && !rn._3 ? S(rn._1, rn._2, !0) : rn;
                                    return n((yt) => xc(Bl)(
                                      _t,
                                      n,
                                      e,
                                      r,
                                      (ft, mt) => n((Ft) => o(
                                        _t._3 && !ft._3 ? S(ft._1, ft._2, !0) : ft,
                                        {
                                          op: mr(
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
                                          operands: [Ct, ot]
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
}), cP = (t, n, e, r, o) => n((i) => WE(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = u._2._2, l = u._1, _ = u._2._1, d = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((g) => un(
      d,
      n,
      e,
      r,
      (p, m) => n((h) => {
        const $ = Ge(Tt(Un)("target node identifier")), y = d._3 && !p._3 ? S(p._1, p._2, !0) : p;
        return n((x) => $(
          y,
          n,
          e,
          r,
          (J, N) => n((C) => {
            const k = N._1, P = N._2, E = y._3 && !J._3 ? S(J._1, J._2, !0) : J;
            return n((Q) => xc(Bl)(
              E,
              n,
              e,
              r,
              (W, B) => n((H) => (c === "<~" ? ((rt, ot, M, q, A) => A(
                rt,
                {
                  op: mr(
                    "Token",
                    {
                      from: k,
                      to: l,
                      labels: (() => {
                        if (B.tag === "Nothing")
                          return [];
                        if (B.tag === "Just")
                          return [B._1];
                        f();
                      })()
                    }
                  ),
                  operands: c === "<~" ? [P, _] : [_, P]
                }
              )) : (rt, ot, M, q, A) => A(
                rt,
                {
                  op: mr(
                    "Token",
                    {
                      from: l,
                      to: k,
                      labels: (() => {
                        if (B.tag === "Nothing")
                          return [];
                        if (B.tag === "Just")
                          return [B._1];
                        f();
                      })()
                    }
                  ),
                  operands: c === "<~" ? [P, _] : [_, P]
                }
              ))(E._3 && !W._3 ? S(W._1, W._2, !0) : W, n, e, r, o))
            ));
          })
        ));
      })
    ));
  })
)), fP = (t, n, e, r, o) => n((i) => xc(JE)(
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
)), lP = (t) => (n) => (e, r, o, i, s) => r((u) => fP(
  e,
  r,
  o,
  i,
  (a, c) => r((l) => {
    const _ = e._3 && !a._3 ? S(a._1, a._2, !0) : a;
    return r((d) => HE(
      _,
      r,
      o,
      i,
      (g, p) => r((m) => s(
        _._3 && !g._3 ? S(g._1, g._2, !0) : g,
        {
          op: mr(
            "AddNode",
            {
              id: t,
              label: c,
              shape: (() => {
                const h = $E("shape")(p);
                if (h.tag === "Just")
                  return h._1 === "rectangle" || h._1 === "rect" ? Ur : h._1 === "cylinder" || h._1 === "cyl" ? _g : h._1 === "parallelogram" ? Ey : h._1 === "diamond" ? Py : h._1 === "ellipse" ? Ay : h._1 === "document" || h._1 === "doc" ? dg : h._1 === "cloud" ? Ry : Ur;
                if (h.tag === "Nothing")
                  return Ur;
                f();
              })()
            }
          ),
          operands: [n]
        }
      ))
    ));
  })
)), gP = /* @__PURE__ */ (() => {
  const t = Tt(Dt((n) => n === "+"))("'+'");
  return (n, e, r, o, i) => e((s) => t(
    n,
    e,
    r,
    o,
    (u, a) => e((c) => {
      const l = Tt(Lo)("space after '+'"), _ = n._3 && !u._3 ? S(u._1, u._2, !0) : u;
      return e((d) => l(
        _,
        e,
        r,
        o,
        (g, p) => e((m) => {
          const h = Ge(Tt(Un)("node identifier after '+'")), $ = _._3 && !g._3 ? S(g._1, g._2, !0) : g;
          return e((y) => h(
            $,
            e,
            r,
            o,
            (x, J) => e((N) => {
              const C = J._1, k = J._2, P = $._3 && !x._3 ? S(x._1, x._2, !0) : x;
              return e((E) => Hm(
                P,
                e,
                r,
                o,
                (Q, W) => e((B) => (() => {
                  if (W.tag === "Just")
                    return uP(C)(k)(W._1);
                  if (W.tag === "Nothing")
                    return lP(C)(k);
                  f();
                })()(P._3 && !Q._3 ? S(Q._1, Q._2, !0) : Q, e, r, o, i))
              ));
            })
          ));
        })
      ));
    })
  ));
})(), _P = (t, n, e, r, o) => n((i) => $r(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = Tt(Gl([
      fr("+node")("Node additions use `+ api: API`."),
      fr("+edge")("Graph edges use `+ api -> db`."),
      fr("+conn")("Undirected graph edges use `+ api -- db`."),
      fr("-node")("Node removals use `- api`."),
      fr("-edge")("Graph edge removals use `- api -> db`."),
      fr("-conn")("Undirected graph edge removals use `- api -- db`."),
      fr("~edge")("Graph edge repoints use `~ api -> db => api -> cache`."),
      fr("enter")("Dive commands use `into api`."),
      fr("exit")("Return from a dive with `out`."),
      OE,
      gP,
      rP,
      qE,
      cP,
      aP,
      ME,
      UE
    ]))("statement (+ node, - node, + edge, - edge, into, out, or 'a ~> b'/'a <~ b')"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((_) => c(
      l,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = l._3 && !d._3 ? S(d._1, d._2, !0) : d;
        return n((h) => $r(
          m,
          n,
          e,
          r,
          ($, y) => n((x) => {
            const J = { line: u.line, column: u.column, endLine: y.line, endColumn: y.column };
            return o(
              m._3 && !$._3 ? S($._1, $._2, !0) : $,
              Ar(
                "Leaf",
                { op: g.op, line: J.line, column: J.column, endLine: J.endLine, endColumn: J.endColumn, span: J, operands: g.operands }
              )
            );
          })
        ));
      })
    ));
  })
)), Dl = /* @__PURE__ */ Im(/* @__PURE__ */ (() => {
  const t = Tt(Dt((n) => n === "{"))("'{'");
  return (n, e, r, o, i) => e((s) => e((u) => t(
    n,
    e,
    r,
    o,
    (a, c) => e((l) => e((_) => {
      const d = n._3 && !a._3 ? S(a._1, a._2, !0) : a;
      return Le(d, e, r, o, (g, p) => e((m) => i(d._3 && !g._3 ? S(g._1, g._2, !0) : g, p)));
    }))
  )));
})())(/* @__PURE__ */ Tt(/* @__PURE__ */ (() => {
  const t = Tt(Dt((n) => n === "}"))("'}'");
  return (n, e, r, o, i) => e((s) => e((u) => Le(
    n,
    e,
    r,
    o,
    (a, c) => e((l) => e((_) => {
      const d = n._3 && !a._3 ? S(a._1, a._2, !0) : a;
      return t(d, e, r, o, (g, p) => e((m) => i(d._3 && !g._3 ? S(g._1, g._2, !0) : g, p)));
    }))
  )));
})())("closing '}'")), Xm = (t, n, e, r, o) => n((i) => {
  const s = t._3;
  return n((u) => Le(
    t,
    n,
    e,
    (a, c) => r(S(a._1, a._2, s), c),
    (a, c) => n((l) => {
      const _ = Ki(Tt(Dt((g) => g === "}"))("'}'")), d = t._3 && !a._3 ? S(a._1, a._2, !0) : a;
      return n((g) => _(
        d,
        n,
        e,
        (p, m) => r(S(p._1, p._2, s), m),
        (p, m) => n((h) => Ki(uu)(
          d._3 && !p._3 ? S(p._1, p._2, !0) : p,
          n,
          e,
          ($, y) => r(S($._1, $._2, s), y),
          ($, y) => n((x) => {
            const J = t._3 && !$._3 ? S($._1, $._2, !0) : $;
            return n((N) => mc(
              J,
              n,
              e,
              r,
              (C, k) => n((P) => {
                const E = Gl([hP, dP, _P]), Q = J._3 && !C._3 ? S(C._1, C._2, !0) : C;
                return n((W) => E(
                  Q,
                  n,
                  e,
                  r,
                  (B, H) => n((rt) => {
                    const ot = Q._3 && !B._3 ? S(B._1, B._2, !0) : B;
                    return n((M) => un(
                      ot,
                      n,
                      e,
                      r,
                      (q, A) => n((R) => {
                        const X = ot._3 && !q._3 ? S(q._1, q._2, !0) : q;
                        return n((L) => Dm(
                          X,
                          n,
                          e,
                          r,
                          (G, z) => n((U) => {
                            const K = X._3 && !G._3 ? S(G._1, G._2, !0) : G;
                            return n((O) => Le(
                              K,
                              n,
                              e,
                              r,
                              (Z, et) => n((nt) => o(K._3 && !Z._3 ? S(Z._1, Z._2, !0) : Z, H))
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
}), dP = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => {
    const a = (c, l) => {
      const _ = c._3;
      return n((d) => _ ? r(c, l) : n((g) => {
        const p = t._3;
        return n((m) => He("seq")(
          t,
          n,
          e,
          (h, $) => r(S(h._1, h._2, p), $),
          (h, $) => n((y) => {
            const x = t._3 && !h._3 ? S(h._1, h._2, !0) : h;
            return n((J) => un(
              x,
              n,
              e,
              (N, C) => r(S(N._1, N._2, p), C),
              (N, C) => n((k) => Il(
                x._3 && !N._3 ? S(N._1, N._2, !0) : N,
                n,
                e,
                (P, E) => r(S(P._1, P._2, p), E),
                (P, E) => n((Q) => {
                  const W = t._3 && !P._3 ? S(P._1, P._2, !0) : P;
                  return n((B) => mc(
                    W,
                    n,
                    e,
                    r,
                    (H, rt) => n((ot) => {
                      const M = Tt(Tt(Dt((A) => A === "{"))("'{'"))("'{'"), q = W._3 && !H._3 ? S(H._1, H._2, !0) : H;
                      return n((A) => M(
                        q,
                        n,
                        e,
                        r,
                        (R, X) => n((L) => o(
                          q._3 && !R._3 ? S(R._1, R._2, !0) : R,
                          Ar("GroupSeq", [])
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
    return n((c) => n((l) => He("seq")(
      S(i, s, !1),
      n,
      e,
      (_, d) => a(S(_._1, _._2, !1), d),
      (_, d) => n((g) => n((p) => un(
        _,
        n,
        e,
        (m, h) => a(S(m._1, m._2, !1), h),
        (m, h) => n(($) => {
          const y = _._3 && !m._3 ? S(m._1, m._2, !0) : m;
          return Tt(Dt((x) => x === "{"))("'{'")(
            y,
            n,
            e,
            (x, J) => a(S(y._1, y._2, !1), J),
            (x, J) => n((N) => Dl(zl(pL))(y, n, e, a, o))
          );
        })
      )))
    )));
  });
}, hP = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => {
    const a = (c, l) => {
      const _ = c._3;
      return n((d) => _ ? r(c, l) : n((g) => {
        const p = t._3;
        return n((m) => He("par")(
          t,
          n,
          e,
          (h, $) => r(S(h._1, h._2, p), $),
          (h, $) => n((y) => {
            const x = t._3 && !h._3 ? S(h._1, h._2, !0) : h;
            return n((J) => un(
              x,
              n,
              e,
              (N, C) => r(S(N._1, N._2, p), C),
              (N, C) => n((k) => Il(
                x._3 && !N._3 ? S(N._1, N._2, !0) : N,
                n,
                e,
                (P, E) => r(S(P._1, P._2, p), E),
                (P, E) => n((Q) => {
                  const W = t._3 && !P._3 ? S(P._1, P._2, !0) : P;
                  return n((B) => mc(
                    W,
                    n,
                    e,
                    r,
                    (H, rt) => n((ot) => {
                      const M = Tt(Tt(Dt((A) => A === "{"))("'{'"))("'{'"), q = W._3 && !H._3 ? S(H._1, H._2, !0) : H;
                      return n((A) => M(
                        q,
                        n,
                        e,
                        r,
                        (R, X) => n((L) => o(
                          q._3 && !R._3 ? S(R._1, R._2, !0) : R,
                          Ar("Par", [])
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
    return n((c) => n((l) => He("par")(
      S(i, s, !1),
      n,
      e,
      (_, d) => a(S(_._1, _._2, !1), d),
      (_, d) => n((g) => n((p) => un(
        _,
        n,
        e,
        (m, h) => a(S(m._1, m._2, !1), h),
        (m, h) => n(($) => {
          const y = _._3 && !m._3 ? S(m._1, m._2, !0) : m;
          return Tt(Dt((x) => x === "{"))("'{'")(
            y,
            n,
            e,
            (x, J) => a(S(y._1, y._2, !1), J),
            (x, J) => n((N) => Dl(zl(dL))(y, n, e, a, o))
          );
        })
      )))
    )));
  });
}, zl = (t) => {
  const n = tr(Xm);
  return (e, r, o, i, s) => r((u) => n(
    e,
    r,
    o,
    i,
    (a, c) => r((l) => s(
      e._3 && !a._3 ? S(a._1, a._2, !0) : a,
      t(tn(Jn.foldr, c))
    ))
  ));
}, of = (t) => (n) => (e, r, o, i, s) => r((u) => YE(t)(
  e,
  r,
  o,
  i,
  (a, c) => r((l) => {
    const _ = tr(Dt(CE)), d = e._3 && !a._3 ? S(a._1, a._2, !0) : a;
    return r((g) => _(
      d,
      r,
      o,
      i,
      (p, m) => r((h) => {
        const $ = Tt(Tt(Dt((x) => x === "{"))("'{'"))("'{'"), y = d._3 && !p._3 ? S(p._1, p._2, !0) : p;
        return r((x) => $(
          y,
          r,
          o,
          i,
          (J, N) => r((C) => {
            const k = y._3 && !J._3 ? S(J._1, J._2, !0) : J;
            return r((P) => Le(
              k,
              r,
              o,
              i,
              (E, Q) => r((W) => {
                const B = zl(hL), H = k._3 && !E._3 ? S(E._1, E._2, !0) : E;
                return r((rt) => B(
                  H,
                  r,
                  o,
                  i,
                  (ot, M) => r((q) => {
                    const A = H._3 && !ot._3 ? S(ot._1, ot._2, !0) : ot;
                    return r((R) => Le(
                      A,
                      r,
                      o,
                      i,
                      (X, L) => r((G) => {
                        const z = Tt(Tt(Dt((K) => K === "}"))("'}'"))("closing '}'"), U = A._3 && !X._3 ? S(X._1, X._2, !0) : X;
                        return r((K) => z(
                          U,
                          r,
                          o,
                          i,
                          (O, Z) => r((et) => {
                            const nt = U._3 && !O._3 ? S(O._1, O._2, !0) : O;
                            return r((gt) => Le(
                              nt,
                              r,
                              o,
                              i,
                              (ct, $t) => r((At) => s(
                                nt._3 && !ct._3 ? S(ct._1, ct._2, !0) : ct,
                                { name: PE(ko(tn(Jn.foldr, m))), ops: M, kind: n }
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
)), pP = (t, n, e, r, o) => {
  const i = t._1, s = t._2;
  return n((u) => fr("keyframe")("Drop the `keyframe` wrapper; Markgraf animates statements in order.")(
    S(i, s, !1),
    n,
    e,
    (a, c) => {
      const l = a._3;
      return n((_) => {
        if (l)
          return r(a, c);
        const d = t._1, g = t._2;
        return n((p) => of("scene")(ba)(
          S(d, g, !1),
          n,
          e,
          (m, h) => {
            const $ = m._3;
            return n((y) => {
              if ($)
                return r(m, h);
              const x = t._1, J = t._2;
              return n((N) => of("still")(Fl)(
                S(x, J, !1),
                n,
                e,
                (C, k) => {
                  const P = C._3;
                  return n((E) => P ? r(C, k) : of("title")(_L)(t, n, e, r, o));
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
}, mP = (t) => (n) => (e) => {
  if (t === "AnimatedSurface")
    return { ...n, frames: kt(n.frames)({ name: v, ops: e, kind: ba }) };
  if (t === "StillSurface")
    return { ...n, statements: kt(n.statements)(e) };
  if (t === "SequenceSurface")
    return { ...n, statements: kt(n.statements)(e) };
  f();
}, $P = (t) => (n) => (e) => {
  if (e.tag === "TopFrame") {
    const r = Qm(t)(n);
    return {
      ...r,
      frames: kt(r.frames)((() => {
        if (t === "AnimatedSurface")
          return e._1;
        if (t === "StillSurface")
          return {
            ...e._1,
            kind: e._1.kind === "AnimatedKeyframe" ? Fl : e._1.kind === "StepMarker" ? km : e._1.kind
          };
        if (t === "SequenceSurface")
          return e._1;
        f();
      })())
    };
  }
  if (e.tag === "TopStatement")
    return mP(t)(n)(e._1);
  if (e.tag === "TopInside")
    return n;
  f();
}, yP = (t) => {
  const n = w($P(t))(GE);
  return (e) => Qm(t)(n(e)).frames;
}, xP = (t) => tE.defer((n) => {
  const e = oP(t);
  return (r, o, i, s, u) => {
    const a = r._1, c = r._2;
    return o((l) => VE(t)(
      S(a, c, !1),
      o,
      i,
      (_, d) => {
        const g = _._3;
        return o((p) => {
          if (g)
            return s(_, d);
          const m = r._1, h = r._2;
          return o(($) => o((y) => vP(
            S(m, h, !1),
            o,
            i,
            (x, J) => {
              const N = x._3;
              return o((C) => {
                if (N)
                  return s(x, J);
                const k = r._1, P = r._2;
                return o((E) => o((Q) => e(
                  S(k, P, !1),
                  o,
                  i,
                  (W, B) => {
                    const H = W._3;
                    return o((rt) => {
                      if (H)
                        return s(W, B);
                      const ot = r._1, M = r._2;
                      return o((q) => o((A) => pP(
                        S(ot, M, !1),
                        o,
                        i,
                        (R, X) => {
                          const L = R._3;
                          return o((G) => L ? s(R, X) : o((z) => Xm(r, o, i, s, (U, K) => o((O) => u(U, Pu("TopStatement", K))))));
                        },
                        (R, X) => o((L) => u(R, Pu("TopFrame", X)))
                      )));
                    });
                  },
                  (W, B) => o((H) => u(W, Pu("TopFrame", B)))
                )));
              });
            },
            (x, J) => o((N) => u(x, Pu("TopInside", J)))
          )));
        });
      },
      u
    ));
  };
}), vP = (t, n, e, r, o) => n((i) => He("inside")(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = Tt(Lo)("space after 'inside'"), l = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((_) => c(
      l,
      n,
      e,
      r,
      (d, g) => n((p) => {
        const m = Tt(Un)("node identifier after 'inside'"), h = l._3 && !d._3 ? S(d._1, d._2, !0) : d;
        return n(($) => m(
          h,
          n,
          e,
          r,
          (y, x) => n((J) => {
            const N = h._3 && !y._3 ? S(y._1, y._2, !0) : y;
            return n((C) => Le(
              N,
              n,
              e,
              r,
              (k, P) => n((E) => {
                const Q = N._3 && !k._3 ? S(k._1, k._2, !0) : k;
                return n((W) => Dl(Ym)(
                  Q,
                  n,
                  e,
                  r,
                  (B, H) => n((rt) => {
                    const ot = Q._3 && !B._3 ? S(B._1, B._2, !0) : B;
                    return n((M) => Le(
                      ot,
                      n,
                      e,
                      r,
                      (q, A) => n((R) => o(ot._3 && !q._3 ? S(q._1, q._2, !0) : q, { node: x, doc: H }))
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
)), Ym = (t, n, e, r, o) => n((i) => tP(
  t,
  n,
  e,
  r,
  (s, u) => n((a) => {
    const c = t._3 && !s._3 ? S(s._1, s._2, !0) : s;
    return n((l) => {
      const _ = (p, m) => n((h) => {
        const $ = tr(xP(u)), y = c._3 && !p._3 ? S(p._1, p._2, !0) : p;
        return n((x) => $(
          y,
          n,
          e,
          r,
          (J, N) => n((C) => {
            const k = tn(Jn.foldr, N);
            return o(
              y._3 && !J._3 ? S(J._1, J._2, !0) : J,
              {
                seed: (() => {
                  if (m.tag === "Nothing")
                    return 0;
                  if (m.tag === "Just")
                    return m._1;
                  f();
                })(),
                mode: u,
                frames: yP(u)(k),
                interiors: Nt((P) => {
                  if (P.tag === "TopInside")
                    return T("Just", P._1);
                  if (P.tag === "TopFrame" || P.tag === "TopStatement")
                    return v;
                  f();
                })(k)
              }
            );
          })
        ));
      }), d = c._1, g = c._2;
      return n((p) => n((m) => KE(
        S(d, g, !1),
        n,
        e,
        (h, $) => {
          const y = h._3;
          return n((x) => y ? r(h, $) : _(c, v));
        },
        (h, $) => n((y) => _(h, T("Just", $)))
      )));
    });
  })
)), TP = /* @__PURE__ */ (() => {
  const t = Tt((n, e, r, o, i) => e((s) => e((u) => Le(
    n,
    e,
    r,
    o,
    (a, c) => e((l) => e((_) => {
      const d = n._3 && !a._3 ? S(a._1, a._2, !0) : a;
      return uu(
        d,
        e,
        r,
        o,
        (g, p) => e((m) => i(d._3 && !g._3 ? S(g._1, g._2, !0) : g, p))
      );
    }))
  ))))("'scene', 'still', 'title', 'step', 'inside', a statement, or end of input");
  return (n, e, r, o, i) => e((s) => e((u) => e((a) => e((c) => Le(
    n,
    e,
    r,
    o,
    (l, _) => e((d) => e((g) => {
      const p = n._3 && !l._3 ? S(l._1, l._2, !0) : l;
      return Ym(
        p,
        e,
        r,
        o,
        (m, h) => e(($) => {
          const y = p._3 && !m._3 ? S(m._1, m._2, !0) : m;
          return e((x) => e((J) => {
            const N = n._3 && !y._3 ? S(y._1, y._2, !0) : y;
            return t(
              N,
              e,
              r,
              o,
              (C, k) => e((P) => i(N._3 && !C._3 ? S(C._1, C._2, !0) : C, h))
            );
          }));
        })
      );
    }))
  )))));
})(), wP = (t) => {
  const n = iE(t)(TP);
  if (n.tag === "Left")
    return Pt("Left", { msg: EE(n._1._1), line: n._1._2.line, column: n._1._2.column, endLine: n._1._2.line, endColumn: n._1._2.column + 1 | 0 });
  if (n.tag === "Right")
    return Pt("Right", n._1);
  f();
}, Hl = (t) => {
  const n = wP(t);
  if (n.tag === "Left")
    return Pt("Left", n._1.msg);
  if (n.tag === "Right")
    return Pt("Right", n._1);
  f();
}, NP = () => ({ tag: "ParFrag" }), Mm = (t) => t, JP = /* @__PURE__ */ Mm("Sync"), CP = /* @__PURE__ */ Mm("SelfMsg"), bP = /* @__PURE__ */ NP(), Eo = /* @__PURE__ */ Jm(Ie), Vi = (t) => (e) => {
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
}, rr = /* @__PURE__ */ gi(Ie), Zr = Eo.state((t) => b(t, t)), e1 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, zu = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, ii = /* @__PURE__ */ _i(Ie), kP = (t) => (n) => w((e) => (r) => gi(Ie).bind(e)((o) => t(o)(r)))(_i(Ie).pure(n)), n0 = /* @__PURE__ */ zr(ii)(Yt), SP = (t) => Eo.state((n) => b(
  void 0,
  (() => {
    if (n.error.tag === "Just")
      return n;
    if (n.error.tag === "Nothing")
      return { ...n, error: T("Just", t) };
    f();
  })()
)), LP = (t) => (n) => Eo.state((e) => b(
  void 0,
  { ...e, lifelines: K1(F)((r) => T("Just", { ...r, label: n }))(t)(e.lifelines) }
)), EP = (t) => (n) => (e) => {
  const r = Vi(e)(t.lifelines);
  return Vi(n)(t.lifelines).tag === "Nothing" ? r.tag === "Nothing" ? n + ", " + e : n : r.tag === "Nothing" ? e : "";
}, PP = { lifelines: D, lifelineOrder: [], messages: [], fragments: [], frameEndRows: [], row: 0, error: v }, AP = (t) => (n) => (e) => rr.bind(Zr)((r) => {
  const o = Vi(t)(r.lifelines), i = Vi(n)(r.lifelines);
  if (o.tag === "Just" && i.tag === "Just") {
    const s = {
      ...r,
      messages: [
        { fromCol: o._1.column, toCol: i._1.column, labels: e, row: r.row, kind: t === n ? CP : JP },
        ...r.messages
      ],
      row: r.row + 1 | 0
    };
    return Eo.state((u) => b(void 0, s));
  }
  return SP("token references unknown node: " + EP(r)(t)(n));
}), RP = (t) => Eo.state((n) => b(
  void 0,
  { ...n, lifelines: K1(F)((e) => T("Just", { ...e, destroyedAt: T("Just", n.row) }))(t)(n.lifelines) }
)), FP = (t) => (n) => {
  const e = n.lifelineOrder.length, r = Bt((o) => v, (o) => (i) => T("Just", { head: o, tail: i }), t);
  if (r.tag === "Nothing")
    return { fromCol: 0, toCol: zu(0)(n.lifelineOrder.length - 1 | 0) };
  if (r.tag === "Just")
    return w((o) => (i) => ({ fromCol: e1(o.fromCol)(e1(i.fromCol)(i.toCol)), toCol: zu(o.toCol)(zu(i.fromCol)(i.toCol)) }))({ fromCol: e, toCol: 0 })(t);
  f();
}, GP = (t) => ({
  lifelines: Nt((n) => Vi(n)(t.lifelines))(t.lifelineOrder),
  messages: fn(t.messages),
  fragments: fn(t.fragments),
  frameEndRows: t.frameEndRows,
  totalRows: t.row
}), IP = (t) => (n) => rr.bind(Zr)((e) => {
  const r = Vi(t)(e.lifelines);
  if (r.tag === "Just")
    return ii.pure();
  if (r.tag === "Nothing") {
    const o = {
      ...e,
      lifelines: tt(F)(t)({ id: t, label: n, column: e.lifelineOrder.length, createdAt: e.row, destroyedAt: v })(e.lifelines),
      lifelineOrder: kt(e.lifelineOrder)(t),
      row: e.row > 0 || e.messages.length !== 0 ? e.row + 1 | 0 : e.row
    };
    return Eo.state((i) => b(void 0, o));
  }
  f();
}), BP = (t) => {
  if (t.tag === "AddNode")
    return IP(t._1.id)(t._1.label);
  if (t.tag === "DelNode")
    return RP(t._1.id);
  if (t.tag === "ModNode") {
    if (t._1.label.tag === "Just")
      return LP(t._1.id)(t._1.label._1);
    if (t._1.label.tag === "Nothing")
      return ii.pure();
    f();
  }
  return t.tag === "Token" ? AP(t._1.from)(t._1.to)(t._1.labels) : ii.pure();
}, DP = (t) => rr.bind(Zr)((n) => {
  const e = n.row;
  return rr.bind(kP((r) => (o) => rr.bind(Zr)((i) => {
    const s = r.childMessages.length === 0 ? r.dividers : [i.row, ...r.dividers], u = i.messages;
    return rr.bind(Sa(o))(() => rr.bind(Zr)((a) => ii.pure({
      dividers: s,
      childMessages: [
        ...r.childMessages,
        ...(() => {
          const c = a.messages.length - u.length | 0;
          return c < 1 ? [] : Et(0, c, a.messages);
        })()
      ]
    })));
  }))({ dividers: [], childMessages: [] })(t))((r) => rr.bind(Zr)((o) => {
    const i = FP(r.childMessages)(o), s = {
      kind: bP,
      label: "par",
      fromRow: e,
      toRow: zu(o.row)(e + 1 | 0),
      fromCol: i.fromCol,
      toCol: i.toCol,
      regionDividers: fn(r.dividers)
    }, u = Eo.state((a) => b(void 0, { ...a, fragments: [s, ...a.fragments] }));
    return r.childMessages.length >= 2 ? u : ii.pure();
  }));
}), Sa = (t) => {
  if (t.tag === "Leaf")
    return BP(t._1.op);
  if (t.tag === "Seq" || t.tag === "GroupSeq")
    return n0(Sa)(t._1);
  if (t.tag === "Par")
    return DP(t._1);
  f();
}, zP = (t) => {
  const n = rr.bind(n0((e) => rr.bind(Zr)((r) => rr.bind(Sa(e.ops))(() => rr.bind(Zr)((o) => {
    const i = Eo.state((s) => b(void 0, { ...s, frameEndRows: kt(s.frameEndRows)(s.row - 1 | 0) }));
    return (o.messages.length - r.messages.length | 0) > 0 ? i : ii.pure();
  }))))(t.frames))(() => Zr)(PP)._1;
  if (n.error.tag === "Just")
    return Pt("Left", n.error._1);
  if (n.error.tag === "Nothing")
    return Pt("Right", GP(n));
  f();
}, HP = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, QP = { padding: 24, headerHeight: 36, headerWidth: 120, columnSpacing: 160, rowHeight: 36, topGap: 24, bottomGap: 24 }, OP = (t) => {
  const n = 84 + V(HP(1)(t.totalRows)) * 36, e = Xt((r) => (o) => ({ lifeline: o, x: 84 + V(r) * 160 }))(t.lifelines);
  return {
    metrics: QP,
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
}, WP = (t) => (e) => {
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
}, Um = (t) => (n) => {
  const e = st.compare(t)(n);
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
}, Vm = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, qP = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, XP = /* @__PURE__ */ w((t) => (n) => tt(st)(n)()(t))(D), YP = { r: 255, g: 255, b: 255, a: 255 }, vc = { r: 26, g: 26, b: 26, a: 255 }, MP = { color: { r: 232, g: 232, b: 232, a: 255 }, flat: !0 }, UP = { r: 232, g: 232, b: 232, a: 255 }, La = (t) => (n) => (e) => (r) => (o) => [
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
  ...Os
], r1 = (t) => (n) => (e) => ({ ...e, stack: kt(e.stack)(t), openedAt: tt(st)(t)(n)(e.openedAt) }), Tc = (t) => (n) => {
  const e = n.stack.length - 1 | 0;
  if (e >= 0 && e < n.stack.length) {
    const r = WP(n.stack[e])(n.openedAt), o = (() => {
      if (r.tag === "Nothing")
        return t;
      if (r.tag === "Just")
        return r._1;
      f();
    })();
    return {
      ...n,
      stack: n.stack.length === 0 ? [] : Et(0, n.stack.length - 1 | 0, n.stack),
      openedAt: Qi(st)(n.stack[e])(n.openedAt),
      spans: kt(n.spans)({ col: n.stack[e], fromRow: o, toRow: Um(o)(t) })
    };
  }
  return n;
}, o1 = (t) => (n) => (e) => {
  let r = t, o = n, i = e, s = !0, u;
  for (; s; ) {
    const a = r, c = o, l = i, _ = l.stack.length - 1 | 0;
    if (_ >= 0 && _ < l.stack.length) {
      if (a(l.stack[_])) {
        s = !1, u = l;
        continue;
      }
      r = a, o = c, i = Tc(c)(l);
      continue;
    }
    s = !1, u = l;
  }
  return u;
}, jm = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, a = u.stack.length - 1 | 0;
    if (a >= 0 && a < u.stack.length) {
      e = s, r = Tc(s)(u);
      continue;
    }
    o = !1, i = u;
  }
  return i;
}, KP = (t) => (n) => {
  const e = Je(vo)(n.fromCol)(t.stack) ? o1((() => {
    const r = n.fromCol;
    return (o) => r === o;
  })())(n.row - 1 | 0)(t) : r1(n.fromCol)(n.row)(jm(n.row - 1 | 0)(t));
  if (Je(vo)(n.toCol)(e.stack)) {
    const r = o1((() => {
      const o = n.toCol;
      return (i) => o === i;
    })())(n.row - 1 | 0)(Tc(n.row)(e));
    return { ...r, returnRows: tt(st)(n.row)()(r.returnRows) };
  }
  return r1(n.toCol)(n.row)(e);
}, VP = (t) => (n) => (e) => {
  const r = KP(n)(e);
  return Km(e.row)(t) ? jm(e.row)(r) : r;
}, Hu = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.5, lineJoin: nu, lineCap: dr }, Zm = { r: 26, g: 26, b: 26, a: 255 }, jP = { color: { r: 130, g: 130, b: 130, a: 255 }, width: 1, lineJoin: nu, lineCap: Ve }, i1 = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.5, lineJoin: nu, lineCap: Ve }, ZP = { color: { r: 244, g: 244, b: 244, a: 255 }, flat: !0 }, s1 = (t) => (n) => (e) => Ln((r) => r.col === n && r.fromRow <= e && e <= r.toRow, t), u1 = { color: { r: 90, g: 90, b: 90, a: 255 }, width: 1, lineJoin: nu, lineCap: Ve }, tA = { stack: [], openedAt: D, spans: [], returnRows: D }, nA = { color: { r: 150, g: 150, b: 150, a: 255 }, width: 1, lineJoin: nu, lineCap: Ve }, eA = (t) => (n) => (e) => (r) => (o) => {
  const i = n.bodyTop + (V(o) + 0.5) * n.metrics.rowHeight - n.metrics.rowHeight / 2;
  return t.strokePath([1, e, i, 2, r, i])(nA);
}, rA = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = ji(n.Applicative0())(Yt);
  return (o) => (i) => {
    const s = o.bodyTop + (V(i.fromRow) + 0.5) * o.metrics.rowHeight - o.metrics.rowHeight / 2 - 6, u = i.fromCol >= 0 && i.fromCol < o.columns.length ? o.columns[i.fromCol].x - 16 : o.metrics.padding - 16, a = [1, u, s, 2, u + 38, s, 2, u + 32, s + 14, 2, u, s + 14, ...Os], c = i.toCol >= 0 && i.toCol < o.columns.length ? o.columns[i.toCol].x + 16 : o.metrics.padding + 16, l = o.bodyTop + (V(Um(i.toRow)(i.fromRow + 1 | 0) - 1 | 0) + 0.5) * o.metrics.rowHeight + o.metrics.rowHeight / 2 + 6;
    return e.bind(t.strokePath([1, u, s, 2, c, s, 2, c, l, 2, u, l, ...Os])(u1))(() => e.bind(t.fillStrokePath(a)(MP)(u1))(() => e.bind(t.drawText({
      x: u + 6,
      y: s + 7,
      content: "par",
      font: { family: "Inter", size: 11, weight: 700 },
      color: vc,
      align: Mi,
      baseline: Ke
    }))(() => r(i.regionDividers)(eA(t)(o)(u)(c)))));
  };
}, t$ = (t) => (n) => t >= n ? [] : [b(t, Vm(n)(t + 6)), ...t$(t + 10)(n)], oA = (t) => (n) => {
  if (n <= t)
    return [];
  const e = (r) => r >= n ? [] : [b(r, Vm(n)(r + 6)), ...e(r + 10)];
  return e(t);
}, iA = (t) => {
  const n = ji(t.Monad0().Applicative0())(Yt);
  return (e) => (r) => n(oA(e.headerTop + e.metrics.headerHeight + V(r.lifeline.createdAt) * e.metrics.rowHeight + 4)((() => {
    if (r.lifeline.destroyedAt.tag === "Just")
      return e.bodyTop + (V(r.lifeline.destroyedAt._1) + 0.5) * e.metrics.rowHeight;
    if (r.lifeline.destroyedAt.tag === "Nothing")
      return e.bodyBottom;
    f();
  })()))((o) => t.strokePath([1, r.x, o._1, 2, r.x, o._2])(jP));
}, n$ = (t) => (n) => t <= n ? [] : [b(t, qP(n)(t - 6)), ...n$(t - 6 - 4)(n)], sA = (t) => (n) => t === n ? [] : t < n ? t$(t)(n) : n$(t)(n), uA = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => {
    const o = e.headerTop + V(r.lifeline.createdAt) * e.metrics.rowHeight, i = e.metrics.headerWidth / 2, s = o + e.metrics.headerHeight, u = La(r.x - i)(o)(r.x + i)(s)(6);
    return n.bind(t.fillStrokePath(La(r.x - i)(o + 5)(r.x + i)(s + 5)(6))({ color: UP, flat: !0 })(i1))(() => n.bind(t.fillStrokePath(u)(ZP)(i1))(() => t.drawText({
      x: r.x,
      y: o + e.metrics.headerHeight / 2,
      content: r.lifeline.label,
      font: { family: "Inter", size: 14, weight: 600 },
      color: vc,
      align: co,
      baseline: Ke
    })));
  };
}, aA = (t) => (n) => {
  let e = t, r = n, o = !0, i;
  for (; o; ) {
    const s = e, u = r, a = u.stack.length - 1 | 0;
    if (a >= 0 && a < u.stack.length) {
      e = s, r = Tc(s)(u);
      continue;
    }
    o = !1, i = u;
  }
  return i;
}, cA = (t) => aA((() => {
  const n = t.diagram.messages.length - 1 | 0;
  return n >= 0 && n < t.diagram.messages.length ? t.diagram.messages[n].row : 0;
})())(w(VP(XP(t.diagram.frameEndRows)))(tA)(ht(
  (n) => n.kind === "Sync" || n.kind !== "SelfMsg",
  t.diagram.messages
))), fA = (t) => {
  const n = t.Monad0().Bind1();
  return (e) => (r) => {
    const o = e.bodyTop + (V(r.row) + 0.5) * e.metrics.rowHeight, i = r.fromCol >= 0 && r.fromCol < e.columns.length ? e.columns[r.fromCol].x : e.metrics.padding, s = o - e.metrics.rowHeight * 0.3, u = i + 36, a = o + e.metrics.rowHeight * 0.3, c = i + 10, l = [1, i, a, 2, c, a - 5, 2, c, a + 5, ...Os];
    return n.bind(t.strokePath([1, i, s, 2, u, s, 2, u, a, 2, i, a])(Hu))(() => n.bind(t.fillPath(l)({
      color: Zm,
      flat: !0
    }))(() => t.drawText({
      x: i + 42,
      y: o,
      content: Qr(" ")(I(so)(r.labels)),
      font: { family: "Inter", size: 12, weight: 400 },
      color: vc,
      align: Mi,
      baseline: Ke
    })));
  };
}, lA = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = ji(n.Applicative0())(Yt);
  return (o) => (i) => (s) => (u) => {
    const a = s ? o.bodyTop + (V(u.row) + 0.5) * o.metrics.rowHeight + o.metrics.rowHeight * 0.5 : o.bodyTop + (V(u.row) + 0.5) * o.metrics.rowHeight, c = u.toCol >= u.fromCol ? 1 : -1, l = (u.fromCol >= 0 && u.fromCol < o.columns.length ? o.columns[u.fromCol].x : o.metrics.padding) + (s1(i)(u.fromCol)(u.row) ? c * 6 : c * 0), _ = (u.toCol >= 0 && u.toCol < o.columns.length ? o.columns[u.toCol].x : o.metrics.padding) - (s1(i)(u.toCol)(u.row) ? c * 6 : c * 0), d = _ - c * 10, g = s ? t.strokePath([1, d, a - 5, 2, _, a, 2, d, a + 5])(Hu) : t.fillPath([1, _, a, 2, d, a - 5, 2, d, a + 5, ...Os])({ color: Zm, flat: !0 });
    return e.bind(s ? r(sA(l)(_))((p) => t.strokePath([1, p._1, a, 2, p._2, a])(Hu)) : t.strokePath([1, l, a, 2, _, a])(Hu))(() => e.bind(g)(() => t.drawText({
      x: (l + _) / 2,
      y: a - 6,
      content: Qr(" ")(I(so)(u.labels)),
      font: { family: "Inter", size: 12, weight: 400 },
      color: vc,
      align: co,
      baseline: QC
    })));
  };
}, gA = (t) => {
  const n = fA(t), e = lA(t);
  return (r) => (o) => (i) => (s) => {
    if (s.kind === "SelfMsg")
      return n(r)(s);
    if (s.kind === "Sync")
      return e(r)(o)(Km(s.row)(i))(s);
    f();
  };
}, a1 = { color: { r: 26, g: 26, b: 26, a: 255 }, width: 1.25, lineJoin: ue, lineCap: Ve }, _A = { color: { r: 232, g: 232, b: 232, a: 255 }, flat: !0 }, dA = { color: { r: 252, g: 252, b: 252, a: 255 }, flat: !0 }, hA = (t) => (n) => (e) => {
  const r = e.col >= 0 && e.col < n.columns.length ? n.columns[e.col].x : n.metrics.padding, o = n.bodyTop + (V(e.fromRow) + 0.5) * n.metrics.rowHeight, i = n.bodyTop + (V(e.toRow) + 0.5) * n.metrics.rowHeight + n.metrics.rowHeight * 0.5, s = La(r - 6)(o)(r + 6)(i)(3);
  return t.Monad0().Bind1().bind(t.fillStrokePath(La(r - 6)(o + 5)(r + 6)(i + 5)(3))(_A)(a1))(() => t.fillStrokePath(s)(dA)(a1));
}, e$ = (t) => {
  const n = t.Monad0(), e = n.Bind1(), r = ji(n.Applicative0())(Yt), o = uA(t), i = iA(t), s = rA(t), u = gA(t);
  return (a) => {
    const c = cA(a);
    return e.bind(t.setViewport({ vx: 0, vy: 0, vw: a.width, vh: a.height }))(() => e.bind(t.clearBackground(YP))(() => e.bind(r(a.columns)(o(a)))(() => e.bind(r(a.columns)(i(a)))(() => e.bind(r(c.spans)(hA(t)(a)))(() => e.bind(r(a.diagram.fragments)(s(a)))(() => r(a.diagram.messages)(u(a)(c.spans)(c.returnRows))))))));
  };
}, pA = /* @__PURE__ */ e$(u3);
function mA(t, n, e, r) {
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
function Re(t) {
  return function(n) {
    return function(e) {
      return function() {
        e.setAttribute(t, n);
      };
    };
  };
}
function sf(t) {
  return function() {
    return function(n) {
      return t(n)();
    };
  };
}
function uf(t) {
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
function af(t) {
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
const Ea = function() {
  return window;
};
function $A(t) {
  return function() {
    return t.document;
  };
}
function e0(t) {
  return function(n) {
    return function() {
      return n.requestAnimationFrame(t);
    };
  };
}
function yA(t) {
  return function(n) {
    return function() {
      return n.cancelAnimationFrame(t);
    };
  };
}
const r$ = (t) => t, Pa = (t) => () => {
  const n = t.getBoundingClientRect?.(), e = n?.width || t.clientWidth || 0, r = n?.height || t.clientHeight || 0;
  return { width: e, height: r };
}, o$ = (t) => (n) => () => {
  let e = 0;
  const r = () => {
    e || (e = requestAnimationFrame(() => {
      e = 0, n();
    }));
  }, o = typeof ResizeObserver > "u" ? null : new ResizeObserver(r);
  return o?.observe(t), window.addEventListener("resize", r), () => {
    e && cancelAnimationFrame(e), o?.disconnect(), window.removeEventListener("resize", r);
  };
}, i$ = () => window.devicePixelRatio || 1, xA = (t) => (n) => (e) => (r) => (o) => () => {
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
}, s$ = (t, n) => {
  n.innerHTML = t;
}, Aa = (t, n, e) => {
  t.style.setProperty(n, e);
}, Qu = (t) => (n) => t === n, c1 = (t, n) => ({ tag: t, _1: n }), u$ = (t) => t, a$ = (t, n, e) => ({ tag: t, _1: n, _2: e }), Xo = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, vA = /* @__PURE__ */ e$(gl), Ou = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, TA = /* @__PURE__ */ a$("AutoSize"), f1 = /* @__PURE__ */ u$("CanvasRenderer"), wA = /* @__PURE__ */ u$("SvgRenderer"), NA = (t) => (n) => {
  const e = t - n * V(dn(Ue(t / n)));
  return n <= 0 ? 0 : e < 0 ? e + n : e;
}, Ti = (t) => w((n) => (e) => {
  const r = t(e);
  return () => (n(), r());
})(() => {
}), l1 = (t) => (n) => {
  const e = kn(t, v, Ht);
  if (e.tag === "Just") {
    const r = kn(e._1.stopAt, v, Ht);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return n;
  f();
}, c$ = (t) => (n) => ({ ...n, state: { ...n.state, camera: t }, minis: I((e) => c$(t)(e))(n.minis) }), JA = (t) => (n) => (e) => {
  const r = uo(e.rootLayout)(e.camera), o = Re("data-mg-too-small")("0")(t);
  return () => (o(), Re("data-mg-camera-vw")(Wo(r.w))(t)(), Re("data-mg-camera-vh")(Wo(r.h))(t)(), Re("data-mg-camera-zoom")(Wo(e.camera.zoom))(t)(), Re("data-mg-viewport-css-width")(Wo(n.w))(t)(), Re("data-mg-viewport-css-height")(Wo(n.h))(t)());
}, CA = (t) => {
  const n = zP(t);
  if (n.tag === "Left")
    return Pt("Left", n._1);
  if (n.tag === "Right")
    return Pt("Right", OP(n._1));
  f();
}, bA = (t) => (n) => (e) => {
  if (n.tag === "FixedSize")
    return () => ({ w: n._1, h: n._2 });
  if (n.tag === "AutoSize") {
    const r = Pa(t);
    return () => {
      const o = r(), i = o.width <= 0 ? e.width : o.width;
      return { w: i, h: o.height <= 0 ? i * e.height / Xo(1)(e.width) : o.height };
    };
  }
  f();
}, kA = (t) => (n) => (e) => {
  const r = Qk(Uk(pA(e))), o = Re("viewBox")(r.viewBox)(t);
  return () => (o(), Re("preserveAspectRatio")("xMidYMid meet")(t)(), n.tag === "FixedSize" ? (Re("width")(an(dn(Xe(n._1))))(t)(), Re("height")(an(dn(Xe(n._2))))(t)()) : n.tag === "AutoSize" || f(), s$(r.body, t));
}, SA = (t) => (n) => (e) => {
  const r = r$(t), o = bA(t)(n)(e);
  return () => {
    const i = o(), s = i$(), u = i.w * s, a = i.h * s, c = j1(r)(), l = Z1(r)(), _ = Oa(r)(u);
    c !== u && _();
    const d = Wa(r)(a);
    l !== a && d(), n.tag === "FixedSize" ? (Aa(t, "width", an(dn(Xe(i.w))) + "px"), Aa(t, "height", an(dn(Xe(i.h))) + "px")) : n.tag === "AutoSize" || f();
    const g = Us(r)();
    wr(g)(), Xu(g)({ scaleX: s, scaleY: s })();
    const p = Zh(g)({ width: i.w, height: i.h })();
    return vA(e)(p)(), Nr(g)();
  };
}, LA = (t) => (n) => (e) => (r) => {
  if (n === "CanvasRenderer")
    return SA(t)(e)(r);
  if (n === "SvgRenderer")
    return kA(t)(e)(r);
  f();
}, EA = (t) => (n) => (e) => (r) => () => {
  let o = !1, i = () => {
  }, s = [];
  const u = () => {
    const l = o, _ = LA(t)(n)(e)(r);
    if (!l)
      return _();
  }, a = { time: 0, keyframe: "sequence", playing: !1 };
  return u(), i = o$(t)(() => {
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
      s = kt(s)(l), l(a)();
      const d = Ts((g) => !Qu(g)(l));
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
}, f$ = () => U2() / 1e3, PA = (t) => (n) => {
  const e = kn(t, v, Ht);
  if (e.tag === "Just") {
    const r = kn(e._1.loop, v, Ht);
    if (r.tag === "Nothing")
      return n;
    if (r.tag === "Just")
      return r._1;
    f();
  }
  if (e.tag === "Nothing")
    return n;
  f();
}, cf = (t) => (n) => {
  const e = jt((r) => r.startT <= n && n < r.endT)(t.spans);
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
}, AA = (t) => (n) => (e) => {
  const r = Sh(e);
  return () => {
    const o = r(), i = Lh(e)(), s = El(Ka)(Ll)(e)(oc(o)(i)(e));
    if (s.tag === "Left")
      return Pt("Left", "precompute failed");
    if (s.tag === "Right")
      return Pt("Right", { schedule: s._1 });
    f();
  };
}, RA = (t) => (n) => (() => {
  const e = kn(t, v, Ht);
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
})(), g1 = (t) => (n) => {
  const e = kn(t, v, Ht);
  if (e.tag === "Just") {
    const r = kn(e._1.direction, v, Ht);
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
}, FA = (t) => (n) => {
  const e = ht((o) => o.time <= n + 1e-4, t), r = e.length - 1 | 0;
  return r >= 0 && r < e.length ? e[r].index : -1;
}, GA = (t) => (n) => {
  if (n.tag === "FixedSize") {
    const e = n._1 <= 0 || n._2 <= 0 ? v : T("Just", n._1 / n._2);
    return () => e;
  }
  if (n.tag === "AutoSize") {
    const e = Pa(t);
    return () => {
      const r = e();
      return r.width <= 0 || r.height <= 0 ? v : T("Just", r.width / r.height);
    };
  }
  f();
}, Au = (t) => (n) => (e) => (r) => (o) => (i) => (s) => (u) => (a) => (c) => (l) => () => {
  const _ = f$(), d = c.value;
  c.value = _;
  const g = d === 0 ? 0 : _ - d, p = (() => {
    if (e.tag === "FixedSize")
      return { w: e._1, h: e._2 };
    if (e.tag === "AutoSize") {
      const N = Pa(t)();
      return { w: N.width <= 0 ? 200 : N.width, h: N.height <= 0 ? 180 : N.height };
    }
    f();
  })();
  if (p.w < 200 || p.h < 180)
    return xA(t)(p.w)(p.h)(200)(180)();
  const m = $m({ widthPx: p.w, heightPx: p.h })(s), h = Gd(m)(Ou(l)(m.totalDuration)), $ = i ? h : { ...h, levels: I((N) => ({ ...N, state: { ...N.state, frameTitle: "" } }))(h.levels) }, y = a.value, x = (() => {
    if (y.tag === "Nothing")
      return $.camera;
    if (y.tag === "Just")
      return Jd(s.cameraConfig.cameraDecay)(g)(y._1)($.camera);
    f();
  })();
  a.value = T("Just", x);
  const J = { ...$, camera: x, levels: I(c$(x))($.levels) };
  if (JA(t)(p)(J)(), n === "CanvasRenderer") {
    const N = r$(t), C = ss({ padding: 8, outputAspect: v })(J), k = (() => {
      if (e.tag === "FixedSize")
        return { w: e._1, h: e._2 };
      if (e.tag === "AutoSize") {
        const A = Pa(t)();
        return {
          w: A.width,
          h: A.height <= 0 ? C.vw <= 0 ? A.width : A.width * C.vh / C.vw : A.height
        };
      }
      f();
    })(), P = i$(), E = k.w * P, Q = k.h * P, W = j1(N)(), B = Z1(N)(), H = Oa(N)(E);
    W !== E && H();
    const rt = Wa(N)(Q);
    B !== Q && rt(), e.tag === "FixedSize" ? (Aa(t, "width", an(dn(Xe(k.w))) + "px"), Aa(t, "height", an(dn(Xe(k.h))) + "px")) : e.tag === "AutoSize" || f();
    const ot = Us(N)();
    wr(ot)(), Xu(ot)({ scaleX: P, scaleY: P })();
    const M = u.value, q = Ak(r)(o)(ot)({ width: k.w, height: k.h })(J)(g)(M)();
    return u.value = q, Nr(ot)();
  }
  if (n === "SvgRenderer") {
    const N = u.value, C = GA(t)(e)(), k = dS(C)(r)(o)(J)(g)(N);
    return u.value = k.springs, Re("viewBox")(k.parts.viewBox)(t)(), Re("preserveAspectRatio")("xMidYMid meet")(t)(), e.tag === "FixedSize" ? (Re("width")(an(dn(Xe(e._1))))(t)(), Re("height")(an(dn(Xe(e._2))))(t)()) : e.tag === "AutoSize" || f(), s$(k.parts.body, t);
  }
  f();
}, IA = (t) => {
  const n = pc(t)(dc)._1;
  if (n.tag === "Left")
    return Pt("Left", n._1.msg);
  if (n.tag === "Right")
    return Pt("Right", n._1);
  f();
}, BA = (t) => {
  const n = Hl(t);
  if (n.tag === "Left")
    return Pt("Left", n._1);
  if (n.tag === "Right") {
    if (n._1.mode === "SequenceSurface") {
      const r = CA(n._1);
      if (r.tag === "Left")
        return Pt("Left", r._1);
      if (r.tag === "Right")
        return Pt("Right", c1("LoadedSequence", r._1));
      f();
    }
    const e = IA(n._1);
    if (e.tag === "Left")
      return Pt("Left", e._1);
    if (e.tag === "Right")
      return Pt("Right", c1("LoadedAnimation", e._1));
  }
  f();
}, _1 = (t) => (n) => (e) => (r) => {
  const o = e + 1e-4 >= n ? ht((s) => s.time > n + 1e-4 && s.time <= e + 1e-4, t) : [...ht((s) => s.time > n + 1e-4, t), ...ht((s) => s.time <= e + 1e-4, t)], i = e <= n + 1e-4 ? fn(ht((s) => s.time < n - 1e-4 && s.time >= e - 1e-4, t)) : [...fn(ht((s) => s.time < n - 1e-4, t)), ...fn(ht((s) => s.time >= e - 1e-4, t))];
  return (() => {
    const s = e - n;
    return s < 0 ? -s <= 1e-4 : s <= 1e-4;
  })() ? [] : r >= 0 ? o : i;
}, DA = (t) => (n) => (e) => (r) => jt((o) => Ln((i) => i === o.kind, n) && (o.time > e + 1e-4 || (() => {
  const i = o.time - e;
  return (i < 0 ? -i <= 1e-4 : i <= 1e-4) && o.index > r;
})()))(t), zA = (t) => (n) => (e) => (r) => {
  const o = ht(
    (s) => Ln((u) => u === s.kind, n) && (s.time < e - 1e-4 || (() => {
      const u = s.time - e;
      return (u < 0 ? -u <= 1e-4 : u <= 1e-4) && s.index < r;
    })()),
    t
  ), i = o.length - 1 | 0;
  return i >= 0 && i < o.length ? T("Just", o[i]) : v;
}, ff = (t) => (n) => (e) => {
  const r = kn(n, v, Ht);
  if (r.tag === "Just") {
    const o = kn(r._1.speed, v, Ht);
    if (o.tag === "Just") {
      const i = Xo(1e-4)(o._1 < 0 ? -o._1 : o._1);
      return () => t.value = i;
    }
    if (o.tag === "Nothing") {
      const i = kn(r._1.duration, v, Ht);
      if (i.tag === "Just" && e.tag === "Just") {
        const s = e._1 / i._1, u = Xo(1e-4)(s < 0 ? -s : s);
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
}, HA = (t) => (n) => (e) => (r) => {
  const o = r.time - n, i = o < 0 ? -o <= 1e-4 : o <= 1e-4, s = r.time < n - 1e-4 || i && r.index < e, u = s ? -1 : 1, a = r.time > n + 1e-4 || i && r.index > e, c = kn(t, v, Ht);
  if (c.tag === "Just") {
    const l = kn(c._1.direction, v, Ht);
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
}, QA = (t) => (n) => (e) => (r) => (o) => (i) => (s) => () => {
  const u = { value: 1 };
  let a = 1, c = !0, l = v, _ = -1, d = !0, g = !1, p = 0, m = 0;
  const h = { value: D }, $ = { value: v }, y = { value: 0 };
  let x = !1, J = () => {
  }, N = [], C = [], k = [];
  Au(t)(e)(r)(o)(i)(s)(n)(h)($)(y)(0)();
  const P = (L) => {
    const G = L.index;
    return () => {
      _ = G;
      const z = C;
      return Ti((U) => U(L))(z)();
    };
  }, E = (L) => () => {
    const G = N, z = d, U = { time: L, keyframe: cf(n)(L), playing: z };
    return Ti((K) => K(U))(G)();
  }, Q = () => (d = !1, l = v, E(p)()), W = (L) => () => (p = L, Au(t)(e)(r)(o)(i)(s)(n)(h)($)(y)(L)(), E(L)()), B = (L) => {
    const G = Xo(0)(Ou(n.totalDuration)(L));
    return () => (p = G, _ = FA(n.cues)(G), m = 0, l = v, $.value = v, Au(t)(e)(r)(o)(i)(s)(n)(h)($)(y)(G)(), E(G)());
  }, H = (L, G, z, U, K) => () => {
    d = !1, l = v;
    const O = p;
    E(O)();
    const Z = { reason: L, direction: G < 0 ? "backward" : "forward", targetId: z, targetStep: U, reached: K, time: O }, et = k;
    return Ti((nt) => nt(Z))(et)();
  }, rt = () => {
    if (!x && (g = !1, d)) {
      const z = f$(), U = m;
      m = z;
      const K = u.value, O = a, Z = c, et = l, nt = p, gt = U === 0 ? nt + 0 * K * O : nt + (z - U) * K * O;
      if (et.tag === "Just") {
        const ct = O >= 0 ? et._1.cue.time >= nt - 1e-4 && et._1.cue.time <= gt + 1e-4 : et._1.cue.time <= nt + 1e-4 && et._1.cue.time >= gt - 1e-4, $t = ct ? et._1.cue.time : Xo(0)(Ou(n.totalDuration)(gt));
        (O >= 0 ? $t + 1e-4 < nt : $t > nt + 1e-4) && ($.value = v), W($t)(), Ti((Rt) => P(Rt))(_1(n.cues)(nt)($t)(O))();
        const At = H("target", O, et._1.targetId, et._1.targetStep, !0);
        return ct && At(), ct ? void 0 : ot();
      }
      if (et.tag === "Nothing") {
        const ct = O >= 0 ? n.totalDuration : 0, $t = !Z && (O >= 0 ? ct >= nt - 1e-4 && ct <= gt + 1e-4 : ct <= nt + 1e-4 && ct >= gt - 1e-4), At = Z ? NA(gt)(n.totalDuration + 0.8) : Xo(0)(Ou(n.totalDuration)(gt));
        (O >= 0 ? At + 1e-4 < nt : At > nt + 1e-4) && ($.value = v), W(At)(), Ti((rn) => P(rn))(_1(n.cues)(nt)(At)(O))();
        const Rt = H("boundary", O, "", "", !0);
        return $t && Rt(), $t ? void 0 : ot();
      }
      f();
    }
  }, ot = () => {
    if (!x && !g) {
      g = !0;
      const z = Ea();
      e0(rt)(z)();
    }
  }, M = () => (m = 0, d = !0, ot()), q = () => (a = 1, c = !0, l = v, M(), E(p)()), A = (L, G) => () => {
    const z = p;
    return a = L, c = !1, l = v, ff(u)(G)(T("Just", L >= 0 ? n.totalDuration - z : z))(), M();
  }, R = (L, G) => () => {
    const z = p, U = _, K = HA(G)(z)(U)(L);
    if (K.tag === "Nothing")
      return A(g1(G)(1), G)();
    if (K.tag === "Just") {
      const O = L.time - z, Z = O < 0 ? -O : O;
      return a = K._1, c = !1, l = T("Just", { cue: L, direction: K._1, targetId: L.id, targetStep: L.name }), ff(u)(G)(T("Just", Z))(), Z <= 1e-4 ? (B(L.time)(), P(L)(), H("target", K._1, L.id, L.name, !0)()) : M();
    }
    f();
  };
  return J = o$(t)(() => {
    if (!x) {
      const G = p;
      return Au(t)(e)(r)(o)(i)(s)(n)(h)($)(y)(G)(), E(G)();
    }
  })(), M(), {
    play: q,
    playWith: (L) => {
      const G = g1(L)(1);
      return () => (a = G, c = PA(L)(!1), l = v, ff(u)(L)(v)(), M(), E(p)());
    },
    pause: Q,
    toggle: () => d ? Q() : q(),
    seek: (L) => B(L),
    seekCue: (L) => {
      const G = jt((z) => z.id === L)(n.cues);
      if (G.tag === "Nothing")
        return () => {
        };
      if (G.tag === "Just") {
        const z = G._1, U = B(z.time);
        return () => (U(), P(z)());
      }
      f();
    },
    seekStep: (L) => {
      const G = jt((z) => z.kind === "step" && z.name === L)(n.cues);
      if (G.tag === "Nothing")
        return () => {
        };
      if (G.tag === "Just") {
        const z = G._1, U = B(z.time);
        return () => (U(), P(z)());
      }
      f();
    },
    playToCue: (L) => (G) => {
      const z = jt((U) => U.id === L)(n.cues);
      if (z.tag === "Nothing")
        return () => {
        };
      if (z.tag === "Just")
        return R(z._1, G);
      f();
    },
    playToStep: (L) => (G) => {
      const z = jt((U) => U.kind === "step" && U.name === L)(n.cues);
      if (z.tag === "Nothing")
        return () => {
        };
      if (z.tag === "Just")
        return R(z._1, G);
      f();
    },
    playNext: (L) => () => {
      const G = p, z = _, U = DA(n.cues)(l1(L)(["step"]))(G)(z);
      if (U.tag === "Nothing")
        return A(1, L)();
      if (U.tag === "Just")
        return R(U._1, L)();
      f();
    },
    playPrevious: (L) => () => {
      const G = p, z = _, U = zA(n.cues)(l1(L)(["step"]))(G)(z);
      if (U.tag === "Nothing")
        return A(-1, L)();
      if (U.tag === "Just")
        return R(U._1, RA(L)(-1))();
      f();
    },
    setSpeed: (L) => {
      const G = Xo(1e-4)(L < 0 ? -L : L);
      return () => u.value = G;
    },
    currentTime: () => p,
    currentKeyframe: () => {
      const L = p;
      return cf(n)(L);
    },
    isPlaying: () => d,
    duration: n.totalDuration,
    cues: n.cues,
    steps: ht((L) => L.kind === "step", n.cues),
    subscribe: (L) => () => {
      N = kt(N)(L);
      const z = p, U = d;
      L({ time: z, keyframe: cf(n)(z), playing: U })();
      const K = Ts((O) => !Qu(O)(L));
      return () => {
        N = K(N);
      };
    },
    subscribeCue: (L) => () => {
      C = kt(C)(L);
      const z = Ts((U) => !Qu(U)(L));
      return () => {
        C = z(C);
      };
    },
    subscribeComplete: (L) => () => {
      k = kt(k)(L);
      const z = Ts((U) => !Qu(U)(L));
      return () => {
        k = z(k);
      };
    },
    destroy: () => (x = !0, J())
  };
}, OA = (t) => (n) => (e) => (r) => (o) => (i) => (s) => {
  const u = BA(n);
  if (u.tag === "Left")
    return () => Pt("Left", u._1);
  if (u.tag === "Right") {
    if (u._1.tag === "LoadedAnimation") {
      const a = AA()(r)(u._1._1);
      return () => {
        const c = a();
        if (c.tag === "Left")
          return Pt("Left", c._1);
        if (c.tag === "Right") {
          const l = QA(t)(c._1.schedule)(e)(r)(o)(i)(s)();
          return Pt("Right", l);
        }
        f();
      };
    }
    if (u._1.tag === "LoadedSequence") {
      const a = EA(t)(e)(r)(u._1._1);
      return () => {
        const c = a();
        return Pt("Right", c);
      };
    }
  }
  f();
}, Ql = () => document.createElement("canvas"), WA = (t, n) => {
  t.letterSpacing = n;
}, qA = (t, n) => {
  t.fontKerning = n;
}, l$ = /* @__PURE__ */ Ks(WA), Ol = /* @__PURE__ */ Ks(qA), XA = { alpha: !0, premultipliedAlpha: !0, antialias: !0, depth: !1 }, YA = (t) => t.getContext("webgl", XA), MA = (t, n, e) => {
  const r = (i, s) => {
    const u = t.createShader(i);
    return t.shaderSource(u, s), t.compileShader(u), t.getShaderParameter(u, t.COMPILE_STATUS) || console.error(t.getShaderInfoLog(u)), u;
  }, o = t.createProgram();
  return t.attachShader(o, r(t.VERTEX_SHADER, n)), t.attachShader(o, r(t.FRAGMENT_SHADER, e)), t.linkProgram(o), t.getProgramParameter(o, t.LINK_STATUS) || console.error(t.getProgramInfoLog(o)), t.useProgram(o), o;
}, UA = (t, n) => {
  const e = t.createBuffer();
  t.bindBuffer(t.ARRAY_BUFFER, e), t.bufferData(t.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), t.STATIC_DRAW);
  const r = t.getAttribLocation(n, "position");
  t.enableVertexAttribArray(r), t.vertexAttribPointer(r, 2, t.FLOAT, !1, 0, 0);
}, KA = (t, n) => t.getExtension(n), VA = (t, n, e) => t.getUniformLocation(n, e), jA = (t, n, e) => t.uniform1f(n, e), ZA = (t, n, e, r) => t.uniform2f(n, e, r), tR = (t, n, e) => t.uniform1i(n, e), nR = (t, n, e) => t.uniform4fv(n, new Float32Array(e)), eR = (t, n, e) => t.uniform2fv(n, new Float32Array(e)), rR = (t, n, e) => t.uniform1fv(n, new Float32Array(e)), oR = (t) => t.createTexture(), iR = (t, n, e, r) => {
  t.activeTexture(t.TEXTURE0 + r), t.bindTexture(t.TEXTURE_2D, n), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
}, sR = (t, n, e, r) => {
  (n.width !== e || n.height !== r) && (n.width = e, n.height = r), t.viewport(0, 0, e, r);
}, uR = (t) => {
  t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT);
}, aR = (t) => t.drawArrays(t.TRIANGLE_STRIP, 0, 4), cR = (t) => ({ width: t.clientWidth, height: t.clientHeight }), fR = () => window.devicePixelRatio, d1 = () => performance.now(), Ra = /* @__PURE__ */ B0(iR), sn = /* @__PURE__ */ es(VA), lR = /* @__PURE__ */ es(nR), ds = (t) => (n) => {
  const e = lR(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, gR = /* @__PURE__ */ es(eR), hs = (t) => (n) => {
  const e = gR(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, _R = /* @__PURE__ */ B0(ZA), _o = /* @__PURE__ */ es(tR), dR = /* @__PURE__ */ es(rR), cr = (t) => (n) => {
  const e = dR(t)(n);
  return (r) => r.length > 0 ? e(r) : () => {
  };
}, vr = /* @__PURE__ */ es(jA), hR = /* @__PURE__ */ Ks(UA), pR = /* @__PURE__ */ B0(sR), mR = /* @__PURE__ */ Ks(KA), $R = /* @__PURE__ */ ns(YA), yR = /* @__PURE__ */ ns(aR), h1 = /* @__PURE__ */ ns(oR), xR = /* @__PURE__ */ ns(cR), vR = /* @__PURE__ */ ns(uR), TR = (t) => (e) => {
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
}, p1 = (t) => (e) => {
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
}, g$ = /* @__PURE__ */ (() => {
  const t = pe.unfoldr(Ze);
  return (n) => t(_e("IterNode", n, je));
})(), wR = /* @__PURE__ */ Ms(ui), NR = (t) => Nt((n) => n)(I((n) => {
  if (n.target.tag === "TokenWindow") {
    const e = TR(n.target._2)(t.layout.edges);
    if (e.tag === "Just")
      return T(
        "Just",
        {
          points: I((() => {
            const r = t.placement;
            return (o) => ({ x: o.x * r.scale + r.tx, y: o.y * r.scale + r.ty });
          })())([
            ...(() => {
              const r = p1(n.target._4)(t.layout.nodes);
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
              const r = p1(n.target._5)(t.layout.nodes);
              if (r.tag === "Nothing")
                return [];
              if (r.tag === "Just")
                return [{ x: r._1.x + r._1.w / 2, y: r._1.y + r._1.h / 2 }];
              f();
            })()
          ]),
          labels: I(so)(n.target._6),
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
})(t.windows)), JR = (t) => t.msg + " (line " + an(t.line) + ", cols " + an(t.column) + "-" + an(t.endColumn) + ")", CR = (t) => (n) => (e) => (r) => {
  const o = r._2.w * e.scale, i = r._2.h * e.scale;
  return {
    id: r._1,
    path: I(so)(n),
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
}, bR = (t) => (n) => (e) => (r) => ({
  id: r._1,
  path: I(so)(n),
  points: I((o) => ({ x: o.x * e.scale + e.tx, y: o.y * e.scale + e.ty }))(r._2),
  depth: t,
  arrowhead: (() => {
    const o = So("conn:")(r._1);
    if (o.tag === "Just")
      return !1;
    if (o.tag === "Nothing")
      return !0;
    f();
  })()
}), kR = (t) => I(CR(t.path.length)(t.path)(t.placement))(g$(t.layout.nodes)), m1 = (t) => (n) => {
  const e = jt((r) => wR(r.path)(n))(t);
  if (e.tag === "Nothing")
    return { x: 0, y: 0, w: 0, h: 0 };
  if (e.tag === "Just") {
    const r = Tn(e._1.layout), o = r.w * e._1.placement.scale, i = r.h * e._1.placement.scale;
    return { x: r.x * e._1.placement.scale + e._1.placement.tx + o / 2, y: r.y * e._1.placement.scale + e._1.placement.ty + i / 2, w: o, h: i };
  }
  f();
}, SR = (t) => I(bR(t.path.length)(t.path)(t.placement))(g$(t.layout.edges)), LR = (t) => (n) => ({
  startT: n.startT,
  endT: n.endT,
  dir: (() => {
    if (n.direction === "DiveIn")
      return 1;
    if (n.direction === "DiveOut")
      return 0;
    f();
  })(),
  parent: m1(t)(n.parentPath),
  child: m1(t)(n.childPath)
}), ER = (t) => {
  const n = Hl(t), e = (() => {
    if (n.tag === "Left") {
      const r = n._1;
      return (o) => Pt("Left", r);
    }
    if (n.tag === "Right") {
      const r = n._1;
      return (o) => o(r);
    }
    f();
  })()((r) => {
    const o = pc(r)(dc)._1;
    if (o.tag === "Left")
      return Pt("Left", JR(o._1));
    if (o.tag === "Right") {
      const i = El(Ka)(Ll)(o._1)(oc(D)(D)(o._1));
      if (i.tag === "Left")
        return Pt("Left", "schedule: " + an(i._1.length) + " error(s)");
      if (i.tag === "Right")
        return Pt(
          "Right",
          {
            ok: !0,
            error: "",
            duration: i._1.totalDuration,
            nodes: wt(i._1.segments)(kR),
            edges: wt(i._1.segments)(SR),
            tokens: wt(i._1.segments)(NR),
            dives: I(LR(i._1.segments))(i._1.dives)
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
}, $o = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, PR = (t) => (n) => (e) => {
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
}, r0 = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, $1 = (t) => (n) => (e) => (r) => (o) => {
  const i = t + e + r, s = r * 2, u = $o(0)(n - t - 2 * e), a = i + u - s;
  return s <= u ? PR(i)(a)(o) : t + (n - t) / 2;
}, y1 = (t) => (n) => ({ ...n, cx: $1(t.minX)(t.maxX)(t.margin)(n.hw)(n.cx), cy: $1(t.minY)(t.maxY)(t.margin)(n.hh)(n.cy) }), AR = (t) => (n) => {
  const e = $o(0)(t.minY + t.margin - (n.cy - n.hh)) + $o(0)(n.cy + n.hh - (t.maxY - t.margin)), r = $o(0)(t.minX + t.margin - (n.cx - n.hw)) + $o(0)(n.cx + n.hw - (t.maxX - t.margin));
  return r * n.hh * 2 + e * n.hw * 2 + r * e;
}, RR = (t) => (n) => (e) => {
  const r = w($o)(0)(I((o) => n.cx - n.hw < o.cx + o.hw + t && n.cx + n.hw > o.cx - o.hw - t && n.cy - n.hh < o.cy + o.hh + t && n.cy + n.hh > o.cy - o.hh - t ? r0((o.cx + o.hw + t - (n.cx - n.hw)) / 0.7071067811865476)((o.cy + o.hh + t - (n.cy - n.hh)) / 0.7071067811865476) : 0)(e));
  return { ...n, cx: n.cx + r * 0.7071067811865476, cy: n.cy + r * 0.7071067811865476 };
}, FR = (t) => (n) => {
  const e = r0(t.cx + t.hw)(n.cx + n.hw) - $o(t.cx - t.hw)(n.cx - n.hw), r = r0(t.cy + t.hh)(n.cy + n.hh) - $o(t.cy - t.hh)(n.cy - n.hh);
  return t.cx - t.hw < n.cx + n.hw && t.cx + t.hw > n.cx - n.hw && t.cy - t.hh < n.cy + n.hh && t.cy + t.hh > n.cy - n.hh ? e * r : 0;
}, GR = (t) => (n) => (e) => (r) => (o) => {
  const i = o.cy - o.dotY, s = o.cy - r.cy;
  return (() => {
    const u = o.cx - o.dotX, a = o.cx - r.cx;
    return 1e6 * AR(t)(o) + 1e4 * w((c) => (l) => c + FR(o)(l))(0)(n) + 0.05 * (a * a + s * s) + 0.01 * (u * u + i * i);
  })() + (o.cy < e.dotY ? 100 : 0);
}, IR = (t) => (n) => (e) => (r) => {
  const o = (s) => {
    const u = y1(t)(s);
    return { chip: u, score: GR(t)(n)(e)(r)(u) };
  }, i = Bt(
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
    return y1(t)(r);
  if (i.tag === "Just")
    return w((s) => (u) => {
      const a = o(u);
      return a.score < s.score ? a : s;
    })(o(i._1.head))(i._1.tail).chip;
  f();
}, BR = (t) => (n) => (e) => (r) => w((o) => (i) => {
  const s = RR(n)(i.chip)(o.obstacles), u = s.cx - s.hw >= t.minX + t.margin && s.cx + s.hw <= t.maxX - t.margin && s.cy - s.hh >= t.minY + t.margin && s.cy + s.hh <= t.maxY - t.margin ? s : IR(t)(o.obstacles)(i.chip)(s), a = u.cx - i.chip.cx, c = u.cy - i.chip.cy;
  return {
    resolved: kt(o.resolved)({ chip: u, glyphs: I((l) => ({ ...l, cx: l.cx + a, cy: l.cy + c }))(i.glyphs) }),
    obstacles: kt(o.obstacles)({ cx: u.cx, cy: u.cy, hw: u.hw, hh: u.hh })
  };
})({ resolved: [], obstacles: e })(r).resolved, _$ = (t) => t, x1 = /* @__PURE__ */ _$("Visible"), DR = /* @__PURE__ */ _$("Hidden");
function zR(t) {
  return t.readyState;
}
const HR = (t) => () => {
  const n = zR(t);
  return n === "visible" ? x1 : n === "hidden" ? DR : x1;
}, QR = (t) => () => {
  const n = Ea(), e = $A(n)(), r = Ea();
  let o = !0;
  const i = () => {
    const _ = o, d = HR(e)();
    return t(_ && d === "Visible")();
  }, s = sf((_) => i)();
  uf("visibilitychange")(s)(!1)(e)();
  const u = sf((_) => () => (o = !1, i()))();
  uf("blur")(u)(!1)(r)();
  const a = af("blur")(u)(!1)(r), c = sf((_) => () => (o = !0, i()))();
  uf("focus")(c)(!1)(r)();
  const l = af("focus")(c)(!1)(r);
  return () => (af("visibilitychange")(s)(!1)(e)(), a(), l());
};
function OR(t, n, e) {
  return e.then(t, n);
}
function v1(t) {
  return Promise.resolve(t);
}
function WR(t, n, e) {
  return e instanceof Error ? t(e) : n;
}
const Wl = (t) => (n) => AC((e) => () => (OR(
  (r) => {
    const i = e(Pt("Right", r))();
    return v1(i);
  },
  (r) => {
    const i = e(Pt("Left", t(r)))();
    return v1(i);
  },
  n
), RC)), ql = (t) => {
  const n = WR(Ht, v, t), e = $y(Ie)("String")(t), r = (() => {
    const o = (() => {
      if (e.tag === "Left")
        return v;
      if (e.tag === "Right")
        return T("Just", ug(e._1));
      f();
    })();
    return n.tag === "Nothing" ? o : n;
  })();
  if (r.tag === "Nothing")
    return ug("Promise failed, couldn't extract JS Error or String");
  if (r.tag === "Just")
    return r._1;
  f();
}, T1 = de.createElement;
de.Fragment;
function Po(t) {
  return (n) => Array.isArray(n.children) ? T1.apply(null, [t, n].concat(n.children)) : T1(t, n);
}
function qR(t) {
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
      const r = de.forwardRef(
        (o, i) => t(n)(e(o, i))
      );
      return r.displayName = n, r;
    };
  };
}
const Xl = /* @__PURE__ */ qR(Po), d$ = /* @__PURE__ */ Xl("div")(), h$ = /* @__PURE__ */ Xl("canvas")(), XR = (t, n) => {
  const e = de.useRef(n);
  return e.current !== n && !t(e.current, n) && (e.current = n), e.current;
};
de.memo;
de.memo;
function w1(t, n) {
  const [e, r] = de.useState(
    typeof n == "function" ? () => n : n
  );
  return r.hasOwnProperty("$$reactBasicHooks$$cachedSetState") || (r.$$reactBasicHooks$$cachedSetState = (o) => () => r(o)), t(e, r.$$reactBasicHooks$$cachedSetState);
}
function ks(t, n, e) {
  const r = XR(t, n);
  de.useEffect(e, [r]);
}
const ie = de.useRef;
function YR(t) {
  return t.current;
}
function MR(t, n) {
  t.current = n;
}
de.useContext;
de.useDebugValue;
de.useId;
de.useDeferredValue;
de.useSyncExternalStore;
de.useSyncExternalStore;
function Yl(t, n) {
  return n.displayName = t, n.toString = () => t, n;
}
de.useEffectEvent || de.experimental_useEffectEvent;
const vn = /* @__PURE__ */ Ks(MR), p$ = (t) => (n) => (e) => () => ks((r, o) => t.eq(r)(o), n, e), mn = /* @__PURE__ */ ns(YR), UR = {
  map: (t) => (n) => () => {
    const e = n();
    return t(e);
  }
}, m$ = (t) => {
  const n = {
    apply: (e) => (r) => () => {
      const o = e(), i = r();
      return o(i);
    },
    Functor0: () => UR
  };
  return { pure: (e) => () => e, Apply0: () => n };
}, KR = () => typeof document < "u" && document.fonts ? document.fonts : null, Ml = (t) => {
  const n = KR();
  return n ? n.load(t).then(() => {
  }) : Promise.resolve();
}, VR = "attribute vec2 position; void main(){ gl_Position = vec4(position, 0.0, 1.0); }", jR = `
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
`, ZR = (t, n, e, r, o) => {
  const i = (c) => {
    c.preventDefault(), n(c.deltaX)(c.deltaY)(c.ctrlKey ? 1 : 0)();
  }, s = (c) => {
    c.preventDefault(), e(c.clientX)(c.clientY)();
  }, u = (c) => r(c.clientX)(c.clientY)(c.buttons)(c.shiftKey ? 1 : 0)(), a = (c) => o(c.clientX)(c.clientY)();
  return t.addEventListener("wheel", i, { passive: !1 }), t.addEventListener("pointerdown", s), window.addEventListener("pointermove", u), window.addEventListener("pointerup", a), () => {
    t.removeEventListener("wheel", i), t.removeEventListener("pointerdown", s), window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", a);
  };
}, t6 = /* @__PURE__ */ Ms(ui), N1 = (t) => (e) => {
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
}, Fa = /* @__PURE__ */ w(gr)(0), n6 = (t) => (n) => (e) => {
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
}, $$ = /* @__PURE__ */ (() => {
  const t = bo.traverse(si);
  return (n) => (e) => t(e)(n);
})(), J1 = (t) => (e) => {
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
}, be = (t) => (n) => {
  const e = it.compare(t)(n);
  if (e === "LT" || e === "EQ")
    return t;
  if (e === "GT")
    return n;
  f();
}, e6 = (t) => (n) => {
  const e = st.compare(t)(n);
  if (e === "LT")
    return n;
  if (e === "EQ" || e === "GT")
    return t;
  f();
}, r6 = (t) => w((n) => (e) => {
  if (n.tag === "Nothing")
    return T("Just", e);
  if (n.tag === "Just")
    return T("Just", t(n._1)(e) === "LT" ? n._1 : e);
  f();
})(v), o6 = /* @__PURE__ */ _y(si)(G0), i6 = /* @__PURE__ */ zr(si)(Ba), C1 = (t) => (n) => (e) => {
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
}, s6 = m$().pure, u6 = /* @__PURE__ */ Po(d$), a6 = /* @__PURE__ */ Po(h$), b1 = (t) => (n) => {
  const e = Me(t);
  if (e.tag === "Just") {
    const r = Me(e._1.init);
    if (r.tag === "Just")
      return T("Just", n(r._1.last)(e._1.last));
    if (r.tag === "Nothing")
      return v;
    f();
  }
  if (e.tag === "Nothing")
    return v;
  f();
}, k1 = (t) => (n) => (e) => ({ chip: { ...e.chip, cx: e.chip.cx + t, cy: e.chip.cy + n }, glyphs: I((r) => ({ ...r, cx: r.cx + t, cy: r.cy + n }))(e.glyphs) }), c6 = /* @__PURE__ */ vy(ZR), f6 = (t) => ({ cx: t.x, cy: t.y, hw: t.hw, hh: t.hh }), y$ = (t) => (n) => {
  const e = (r) => [r, ...wt(r.minis)((o) => e(o))];
  return jt((r) => t6(I(so)(r.segment.path))(t))(wt(n.levels)(e));
}, l6 = (t) => (n) => {
  if (t.tag === "Nothing")
    return { alpha: 1, scale: 1 };
  if (t.tag === "Just") {
    const e = y$(n.path)(t._1);
    if (e.tag === "Just") {
      const r = N1(n.id)(e._1.state.nodes);
      if (r.tag === "Just") {
        const o = fi(r._1);
        return {
          alpha: (() => {
            const i = N1(n.id)(e._1.state.nodeFadeAlpha);
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
}, Ga = (t) => (n) => (e) => ({ cx: t.cx + (n.cx - t.cx) * e, cy: t.cy + (n.cy - t.cy) * e, hw: t.hw * zi(n.hw / cn(1e-4)(t.hw))(e), hh: t.hh * zi(n.hh / cn(1e-4)(t.hh))(e) }), to = (t) => (n) => re((n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y)), g6 = (t) => (n) => {
  const e = (r) => cn(0)(1 - to(n)({ x: r.x, y: r.y }) / (cn(r.hw)(r.hh) + t.ballRadius));
  return w((r) => (o) => e(o) > r.glow ? { glow: e(o), x: o.x, y: o.y } : r)({ glow: 0, x: 0, y: 0 })(t.worldNodes);
}, _6 = (t) => {
  const n = En(jn, t, Et(1, t.length, t)), e = Fa(I((r) => to(r._1)(r._2))(n));
  return e <= 1e-9 ? [] : w((r) => (o) => {
    const i = r.distance + to(o._1)(o._2);
    return { distance: i, segments: kt(r.segments)({ from: o._1, to: o._2, lo: r.distance / e, hi: i / e }) };
  })({ distance: 0, segments: [] })(n).segments;
}, d6 = (t) => (n) => (e) => (r) => (o) => {
  const i = Nl({ width: n, height: e })((() => {
    const a = uo(r)(o);
    return { vx: a.x, vy: a.y, vw: a.w, vh: a.h };
  })()), s = (i.vx + i.vw / 2 - t.midX) * t.scaleFactor, u = -(i.vy + i.vh / 2 - t.midY) * t.scaleFactor;
  return {
    centerX: s,
    centerY: u,
    camZ: i.vh * t.scaleFactor,
    viewport: { cx: s, cy: u, hw: i.vw * t.scaleFactor / 2, hh: i.vh * t.scaleFactor / 2 }
  };
}, h6 = (t) => (n) => (e) => (r) => (o) => (i) => {
  if (t.cameraSchedule.tag === "Just") {
    const s = $m({ widthPx: e, heightPx: r })(t.cameraSchedule._1), u = qi(s.cameraConfig)(s.layout)(s.cameraSpans)(i).camera, a = (() => {
      if (n.tag === "Nothing")
        return u;
      if (n.tag === "Just")
        return Jd(s.cameraConfig.cameraDecay)(o)(n._1)(u);
      f();
    })();
    return T("Just", { camera: a, world: d6(t)(e)(r)(s.layout)(a) });
  }
  if (t.cameraSchedule.tag === "Nothing")
    return v;
  f();
}, wc = "500 " + an(dn(Xe(144))) + "px Ilisarniq, ui-sans-serif, system-ui, sans-serif", Ul = /* @__PURE__ */ Nt((t) => t)(/* @__PURE__ */ I(Ex)(/* @__PURE__ */ Vt(32, 126))), p6 = or((Ul.length + 16 | 0) - 1 | 0, 16), m6 = (t) => V(n6(0)(Ul.length - 1 | 0)(Pr(t) - 32 | 0)), S1 = V(16) * 76, L1 = V(p6) * 100, E1 = () => {
  const t = Ql();
  Oa(t)(S1)(), Wa(t)(L1)();
  const n = Us(t)();
  y0(n)({ x: 0, y: 0, width: S1, height: L1 })(), p0(n)("#fff")(), qa(n)("500 64px Ilisarniq, ui-sans-serif, system-ui, sans-serif")(), A0(n)(J0)(), P0(n)(N0)(), Ol(n)("normal")();
  const e = $$(Xt(jn)(Ul))((r) => {
    const o = ts(r._2), i = x0(n)(o)(V(no(r._1)(16)) * 76 + 38)(V(or(r._1, 16)) * 100 + 50);
    return () => (i(), rd(n)(o)().width / 64);
  })();
  return { canvas: t, advances: e };
}, P1 = (t) => (n) => 2.36 * cn(t.hw / cn(0.2)(n))(t.hh), $6 = (t) => (n) => (e) => () => {
  const r = E1();
  Ra(t)(n)(r.canvas)(1)(), vn(e)(r.advances)(), il(
    sl,
    Uo(Uo(Ko(() => Ml("500 64px Ilisarniq, ui-sans-serif, system-ui, sans-serif")))(Wl(ql)))(() => Ko(() => {
      const i = E1();
      return Ra(t)(n)(i.canvas)(1)(), vn(e)(i.advances)();
    }))
  )().run();
}, A1 = (t) => (n) => {
  if (t.tag === "Nothing")
    return { lo: 0, hi: 1, alpha: 1 };
  if (t.tag === "Just") {
    const e = y$(n.path)(t._1);
    if (e.tag === "Just") {
      const r = J1(n.id)(e._1.state.edges);
      if (r.tag === "Just") {
        const o = ep(r._1);
        return {
          lo: o.lo,
          hi: o.hi,
          alpha: (() => {
            const i = J1(n.id)(e._1.state.edgeFadeAlpha);
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
}, y6 = (t) => (n) => (e) => (r) => r < 0.31999999999999995 ? Ga(n)(e.parent)((() => {
  const o = r / 0.31999999999999995;
  return o * o * (3 - 2 * o);
})()) : Ga(e.parent)(t)((() => {
  const o = (r - 0.31999999999999995) / 0.68;
  return o * o * (3 - 2 * o);
})()), x6 = (t) => (n) => (e) => e < 0.68 ? Ga(t)(n.parent)((() => {
  const r = e / 0.68;
  return r * r * (3 - 2 * r);
})()) : Ga(n.parent)(n.child)((() => {
  const r = (e - 0.68) / 0.31999999999999995;
  return r * r * (3 - 2 * r);
})()), v6 = (t) => (n) => (e) => (r) => e.dir > 0.5 ? x6(n)(e)(r) : y6(t)(n)(e)(r), x$ = (t) => (n) => cn(0)(be(1)((n - t.startT) / cn(1e-4)(t.endT - t.startT))), T6 = (t) => (n) => (e) => w((r) => (o) => e <= o.startT ? r : v6(t)(r)(o)(x$(o)(e)))(t)(n), w6 = (t) => (n) => {
  if (t.dir > 0.5) {
    const r = cn(0)(be(1)((n - 0.68) / 0.31999999999999995));
    return r * r * (3 - 2 * r);
  }
  const e = cn(0)(be(1)(n / 0.31999999999999995));
  return e * e * (3 - 2 * e);
}, N6 = (t) => (n) => w((e) => (r) => n <= r.startT ? e : n >= r.endT ? r.dir > 0.5 ? e + 1 : e + -1 : e + (r.dir > 0.5 ? 1 : -1) * w6(r)(x$(r)(n)))(0)(t), J6 = (t) => (n) => {
  const e = 1 - t.holdPre - t.holdPost;
  return e <= 0 ? n < 0.5 ? 0 : 1 : cn(0)(be(1)((n - t.holdPre) / e));
}, C6 = (t) => (n) => (e) => {
  const r = cn(0)(be(1)((t * V(n + 1 | 0) - V(e)) / 1.5));
  return r * r * (3 - 2 * r);
}, b6 = (t) => (n) => {
  const e = n.length === 0 ? [""] : n, r = I((_) => V(e6(1)(pr(_))))(e), o = cn(1)(Fa(r)), i = t * o, u = ((_) => (d) => (g) => {
    let p = _, m = d, h = g, $ = !0, y;
    for (; $; ) {
      const x = p, J = m, C = Bt((k) => v, (k) => (P) => T("Just", { head: k, tail: P }), h);
      if (C.tag === "Nothing") {
        $ = !1, y = e.length - 1 | 0;
        continue;
      }
      if (C.tag === "Just") {
        if (J + C._1.head >= i) {
          $ = !1, y = x;
          continue;
        }
        p = x + 1 | 0, m = J + C._1.head, h = C._1.tail;
        continue;
      }
      f();
    }
    return y;
  })(0)(0)(r), a = Fa(u < 1 ? [] : Et(0, u, r)), c = a / o;
  if (u >= 0 && u < r.length) {
    const _ = (a + r[u]) / o;
    return { line: u >= 0 && u < e.length ? e[u] : "", phase: _ <= c ? 1 : cn(0)(be(1)((t - c) / (_ - c))) };
  }
  const l = (a + 1) / o;
  return { line: u >= 0 && u < e.length ? e[u] : "", phase: l <= c ? 1 : cn(0)(be(1)((t - c) / (l - c))) };
}, k6 = (t) => (n) => {
  const e = En(jn, t, Et(1, t.length, t));
  return ((o) => (i) => {
    let s = o, u = i, a = !0, c;
    for (; a; ) {
      const l = s, d = Bt((g) => v, (g) => (p) => T("Just", { head: g, tail: p }), u);
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
        if (d._1.tail.length === 0 || l <= to(d._1.head._1)(d._1.head._2)) {
          const g = to(d._1.head._1)(d._1.head._2), p = g <= 0 ? 0 : l / g;
          a = !1, c = { x: d._1.head._1.x + (d._1.head._2.x - d._1.head._1.x) * p, y: d._1.head._1.y + (d._1.head._2.y - d._1.head._1.y) * p };
          continue;
        }
        s = l - to(d._1.head._1)(d._1.head._2), u = d._1.tail;
        continue;
      }
      f();
    }
    return c;
  })(cn(0)(be(1)(n)) * w((o) => (i) => o + to(i._1)(i._2))(0)(e))(e);
}, S6 = (t) => (n) => I((e) => {
  const r = J6(e)((n - e.startT) / (e.endT - e.startT)), o = k6(e.path)(r), i = g6(t)(o);
  return { x: o.x, y: o.y, glow: i.glow, nx: i.x, ny: i.y, labels: e.labels, motionT: r, startT: e.startT, path: e.path };
})(Et(0, 8, ht((e) => n >= e.startT && n < e.endT, t.tokenFlows))), L6 = (t) => (n) => {
  const e = t.cameraSchedule.tag === "Just" ? T("Just", Gd(t.cameraSchedule._1)(n)) : v, r = I(l6(e))(t.nodeList), o = I((i) => {
    const s = cn(1e-9)(i._1.hi - i._1.lo), u = cn(0)(be(1)((i._2.lo - i._1.lo) / s)), a = cn(0)(be(1)((i._2.hi - i._1.lo) / s));
    return {
      flat: [
        i._1.from.x + (i._1.to.x - i._1.from.x) * u,
        i._1.from.y + (i._1.to.y - i._1.from.y) * u,
        i._1.from.x + (i._1.to.x - i._1.from.x) * a,
        i._1.from.y + (i._1.to.y - i._1.from.y) * a
      ],
      alpha: i._2.alpha > 0 && a > u + 1e-9 ? i._2.alpha : 0
    };
  })(En(jn, t.edgeSegments, I((i) => A1(e)(i.key))(t.edgeSegments)));
  return {
    nodeRect: wt(En(jn, t.worldNodes, r))((i) => [
      i._1.x,
      i._1.y,
      i._1.hw * 2 * i._2.scale,
      i._1.hh * 2 * i._2.scale
    ]),
    nodeAlpha: I((i) => i.alpha)(r),
    edge: wt(o)((i) => i.flat),
    edgeAlpha: I((i) => i.alpha)(o),
    arrowAlpha: I((i) => {
      const s = A1(e)(i.key);
      return s.alpha > 0 && s.hi >= 0.999999 ? s.alpha : 0;
    })(t.arrowData)
  };
}, E6 = (t) => {
  const n = Hl(t);
  if (n.tag === "Left")
    return v;
  if (n.tag === "Right") {
    const e = pc(n._1)(dc)._1;
    if (e.tag === "Left")
      return v;
    if (e.tag === "Right") {
      const r = El(Ka)(Ll)(e._1)(oc(D)(D)(e._1));
      if (r.tag === "Left")
        return v;
      if (r.tag === "Right")
        return T("Just", r._1);
    }
  }
  f();
}, P6 = (t) => {
  const n = ER(t), e = E6(t), r = (() => {
    if (e.tag === "Nothing")
      return Ka;
    if (e.tag === "Just")
      return e._1.cameraConfig;
    f();
  })(), o = w((h) => ($) => ({ minX: be(h.minX)($.x - $.w / 2), maxX: cn(h.maxX)($.x + $.w / 2), minY: be(h.minY)($.y - $.h / 2), maxY: cn(h.maxY)($.y + $.h / 2) }))({ minX: 1e9, maxX: -1e9, minY: 1e9, maxY: -1e9 })(n.nodes), i = (o.minX + o.maxX) / 2, s = (o.minY + o.maxY) / 2, u = 6.6 / cn(o.maxX - o.minX)(o.maxY - o.minY), a = I((h) => ({
    key: { id: h.id, path: h.path },
    pts: I(($) => ({ x: ($.x - i) * u, y: -($.y - s) * u }))(h.points),
    depth: V(h.depth),
    arrowhead: h.arrowhead
  }))(n.edges), c = I((h) => ({
    x: (h.x - i) * u,
    y: -(h.y - s) * u,
    hw: h.w / 2 * u,
    hh: h.h / 2 * u,
    shape: V(h.shape),
    depth: V(h.depth),
    labelH: r.labelBasePx * h.labelScale * u
  }))(n.nodes), l = (h) => {
    const $ = r6(/* @__PURE__ */ (() => {
      const y = (x) => (h.x - x.x) * (h.x - x.x) + (h.y - x.y) * (h.y - x.y);
      return (x) => (J) => it.compare(y(x))(y(J));
    })())(c);
    if ($.tag === "Just")
      return { x: $._1.x, y: $._1.y };
    if ($.tag === "Nothing")
      return h;
    f();
  }, _ = c.length, d = _ === 0 ? 0.1 : w((h) => ($) => h + $.hh)(0)(c) / V(_), g = (h) => {
    const $ = ht((y) => y.depth === h, c);
    return $.length === 0 ? d : w((y) => (x) => y + x.hh)(0)($) / V($.length);
  }, p = g(0), m = wt(a)((h) => I(($) => ({ key: h.key, from: $.from, to: $.to, lo: $.lo, hi: $.hi, depth: h.depth }))(_6((() => {
    if (h.arrowhead) {
      const $ = b1(h.pts)(jn);
      if ($.tag === "Just") {
        const y = to($._1._1)($._1._2);
        if (y > 1e-6) {
          const x = Me(h.pts);
          if (x.tag === "Just") {
            const J = be(d * g(h.depth) / cn(1e-4)(p) * 0.05 + d * g(h.depth) / cn(1e-4)(p) * 0.55)(y * 0.95);
            return kt(x._1.init)({ x: $._1._2.x - ($._1._2.x - $._1._1.x) / y * J, y: $._1._2.y - ($._1._2.y - $._1._1.y) / y * J });
          }
          if (x.tag === "Nothing")
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
    nodeShapeFlat: I((h) => h.shape)(c),
    nodeLabelHeightFlat: I((h) => h.labelH)(c),
    nodeDepthFlat: I((h) => h.depth)(c),
    edgeSegFlat: wt(m)((h) => [h.from.x, h.from.y, h.to.x, h.to.y]),
    edgeSegDepth: I((h) => h.depth)(m),
    edgeSegments: m,
    arrowData: Nt((h) => {
      if (h.arrowhead) {
        const $ = b1(h.pts)(jn);
        if ($.tag === "Just") {
          const y = to($._1._1)($._1._2);
          return y > 1e-6 ? T(
            "Just",
            (() => {
              const x = l($._1._2);
              return {
                key: h.key,
                tipX: $._1._2.x - ($._1._2.x - $._1._1.x) / y * (d * g(h.depth) / cn(1e-4)(p)) * 0.05,
                tipY: $._1._2.y - ($._1._2.y - $._1._1.y) / y * (d * g(h.depth) / cn(1e-4)(p)) * 0.05,
                dirX: ($._1._2.x - $._1._1.x) / y,
                dirY: ($._1._2.y - $._1._1.y) / y,
                cx: x.x,
                cy: x.y,
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
    tokenFlows: I((h) => ({
      path: (() => {
        const $ = I((x) => ({ x: (x.x - i) * u, y: -(x.y - s) * u }))(h.points), y = Bt((x) => v, (x) => (J) => T("Just", { head: x, tail: J }), $);
        if (y.tag === "Just") {
          const x = Me($);
          if (x.tag === "Just")
            return [l(y._1.head), ...kt($)(l(x._1.last))];
          if (x.tag === "Nothing")
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
    dives: I((h) => {
      const $ = (y) => ({ cx: (y.x - i) * u, cy: -(y.y - s) * u, hw: y.w / 2 * u, hh: y.h / 2 * u });
      return { startT: h.startT, endT: h.endT, dir: V(h.dir), parent: $(h.parent), child: $(h.child) };
    })(n.dives),
    duration: n.duration,
    midX: i,
    midY: s,
    cameraSchedule: e
  };
}, R1 = (t) => () => {
  const n = Ql(), e = Us(n)();
  Ol(e)("normal")(), l$(e)("1px")();
  const r = $$(t)((o) => {
    const i = qa(e)(wc);
    return () => (i(), [rd(e)(o.label)().width / 2048, 0.9]);
  })();
  return Ee(r);
}, v$ = (t) => (n) => {
  const e = Us(n);
  return () => {
    const r = e();
    return y0(r)({ x: 0, y: 0, width: 2048, height: V(t.length) * 160 })(), p0(r)("#fff")(), A0(r)(J0)(), P0(r)(N0)(), Ol(r)("normal")(), l$(r)("1px")(), o6(t)((o) => (i) => {
      const s = qa(r)(wc);
      return () => (s(), x0(r)(i.label)(1024)(V(o) * 160 + 80)());
    })();
  };
}, A6 = (t) => () => {
  const n = Ql();
  return Oa(n)(2048)(), Wa(n)(V(t.length) * 160)(), v$(t)(n)(), n;
}, R6 = (t) => (n) => (e) => {
  const r = A6(t);
  return () => {
    const o = r();
    Ra(n)(e)(o)(0)(), il(
      sl,
      Uo(Uo(Ko(() => Ml(wc)))(Wl(ql)))(() => Ko((() => {
        const s = v$(t)(o);
        return () => (s(), Ra(n)(e)(o)(0)());
      })()))
    )().run();
  };
}, F6 = (t) => (n) => {
  const e = (r) => w((o) => (i) => (() => {
    const s = i.nx - r.cx, u = i.ny - r.cy, a = r.unit * 0.6;
    return s * s + u * u < a * a;
  })() ? cn(o)(i.glow) : o)(0)(n);
  return wt(t.arrowData)((r) => [r.tipX - r.dirX * r.unit * 0.2 * e(r), r.tipY - r.dirY * r.unit * 0.2 * e(r), r.dirX, r.dirY]);
}, G6 = (t) => (n) => (e) => (r) => {
  const o = be(0.05)(t);
  return Xt((i) => (s) => {
    if (i >= 0 && i < e.length) {
      const d = e[i].startT, g = jt((y) => y.id === d)(n), p = (() => {
        if (g.tag === "Nothing")
          return { id: d, x: s.chip.cx, y: s.chip.cy, vx: 0, vy: 0 };
        if (g.tag === "Just")
          return g._1;
        f();
      })(), m = p.vx + (180 * (s.chip.cx - p.x) - 22 * p.vx) * o, h = p.vy + (180 * (s.chip.cy - p.y) - 22 * p.vy) * o, $ = { id: d, x: p.x + m * o, y: p.y + h * o, vx: m, vy: h };
      return b(k1($.x - s.chip.cx)($.y - s.chip.cy)(s), $);
    }
    const u = jt((d) => d.id === 0)(n), a = (() => {
      if (u.tag === "Nothing")
        return { id: 0, x: s.chip.cx, y: s.chip.cy, vx: 0, vy: 0 };
      if (u.tag === "Just")
        return u._1;
      f();
    })(), c = a.vx + (180 * (s.chip.cx - a.x) - 22 * a.vx) * o, l = a.vy + (180 * (s.chip.cy - a.y) - 22 * a.vy) * o, _ = { id: 0, x: a.x + c * o, y: a.y + l * o, vx: c, vy: l };
    return b(k1(_.x - s.chip.cx)(_.y - s.chip.cy)(s), _);
  })(r);
}, F1 = (t) => (n) => {
  const e = Pr(n) - 32 | 0;
  return e >= 0 && e < t.length ? t[e] : 0.5;
}, I6 = (t) => (n) => (e) => (r) => (o) => (i) => {
  const s = n * 0.6 + n * 0.5454545454545454, u = n * 1.5625, a = u * 0.76, c = n * 0.7272727272727273, l = e.y + r + c + s, _ = b6(o)(i), d = Hr(_.line), g = d.length, p = Fa(I((h) => n * F1(t)(h))(d)), m = e.x + r + c + p / 2;
  return {
    chip: { cx: m, cy: l, hw: p / 2 + n * 1.2727272727272727, hh: s, dotX: e.x, dotY: e.y },
    glyphs: w((h) => ($) => {
      const y = C6(_.phase)(g)($._1), x = n * F1(t)($._2), J = { cx: h._1 + x / 2, cy: l + (1 - y) * n * 0.85, hw: a / 2, hh: u / 2, cell: m6($._2), alpha: y };
      return b(h._1 + x, y > 0 ? kt(h._2)(J) : h._2);
    })(b(m - p / 2, []))(Xt(jn)(d))._2
  };
}, B6 = /* @__PURE__ */ Yl(
  "SdfDiagram",
  (t) => {
    const n = ie(wi), e = ie(0), r = ie(0), o = ie(v), i = ie([]), s = ie([]), u = ie(v), a = ie(8), c = ie(1), l = ie(0), _ = ie(0), d = ie(0), g = ie(0), p = ie(v), m = ie({ resW: 0, resH: 0 }), h = ie(1), $ = ie(!0), y = vn(h)(t.speed);
    ks(
      (N, C) => N === C,
      t.speed,
      () => (y(), () => {
      })
    );
    const x = vn($)(t.playing);
    ks(
      (N, C) => N === C,
      t.playing,
      () => (x(), () => {
      })
    );
    const J = mn(n);
    return ks(
      (N, C) => N === C,
      t.source,
      () => {
        const N = J(), C = kn(N, v, Ht);
        if (C.tag === "Nothing")
          return () => {
          };
        if (C.tag === "Just") {
          const k = $R(C._1)(), P = kn(k, v, Ht);
          if (P.tag === "Nothing")
            return () => {
            };
          if (P.tag === "Just") {
            const E = P._1;
            vn(u)(v)();
            const Q = P6(t.source);
            mR(E)("OES_standard_derivatives")();
            const W = MA(E, VR, jR);
            hR(E)(W)();
            const B = sn(E)(W)("uRes")(), H = sn(E)(W)("uTime")(), rt = sn(E)(W)("uTilt")(), ot = sn(E)(W)("uNodeCount")(), M = sn(E)(W)("uEdgeCount")(), q = sn(E)(W)("uNodeRect")(), A = sn(E)(W)("uNodeAlpha")(), R = sn(E)(W)("uNodeShape")(), X = sn(E)(W)("uEdge")(), L = sn(E)(W)("uEdgeAlpha")(), G = sn(E)(W)("uArrow")(), z = sn(E)(W)("uArrowCount")(), U = sn(E)(W)("uArrowAlpha")(), K = sn(E)(W)("uLabel")(), O = sn(E)(W)("uLabelAspect")(), Z = sn(E)(W)("uLabelFadeStart")(), et = sn(E)(W)("uLabelDim")(), nt = sn(E)(W)("uLabelH")(), gt = sn(E)(W)("uUnit")(), ct = sn(E)(W)("uTokCount")(), $t = sn(E)(W)("uTokPos")(), At = sn(E)(W)("uTokGlow")(), Rt = sn(E)(W)("uTokNode")(), rn = sn(E)(W)("uGlyphAtlas")(), xt = sn(E)(W)("uChipCount")(), Gt = sn(E)(W)("uChipRect")(), vt = sn(E)(W)("uChipDot")(), Ct = sn(E)(W)("uGlyphCount")(), _t = sn(E)(W)("uGlyphRect")(), yt = sn(E)(W)("uGlyphCell")(), ft = sn(E)(W)("uGlyphAlpha")(), mt = sn(E)(W)("uCamZ")(), Ft = sn(E)(W)("uCamPanX")(), Lt = sn(E)(W)("uCamPanY")(), Qt = sn(E)(W)("uRotY")(), nn = sn(E)(W)("uActiveDepth")(), me = sn(E)(W)("uNodeDepth")(), Xn = sn(E)(W)("uEdgeDepth")(), te = sn(E)(W)("uArrowDepth")();
            _o(E)(K)(0)(), _o(E)(rn)(1)(), vr(E)(O)(12.8)(), vr(E)(Z)(0.92)();
            const Ot = h1(E)(), Wt = h1(E)();
            R6(Q.nodeList)(E)(Ot)(), $6(E)(Wt)(i)();
            const $e = R1(Q.nodeList)();
            hs(E)(et)($e)(), il(
              sl,
              Uo(Uo(Ko(() => Ml(wc)))(Wl(ql)))(() => Uo(Ko(R1(Q.nodeList)))((pn) => Ko(hs(E)(et)(pn))))
            )().run(), _o(E)(ot)(Q.nodeList.length)(), _o(E)(M)(or(Q.edgeSegFlat.length, 4))(), _o(E)(z)(Q.arrowData.length)(), cr(E)(R)(Q.nodeShapeFlat)(), cr(E)(nt)(Q.nodeLabelHeightFlat)(), cr(E)(me)(Q.nodeDepthFlat)(), cr(E)(Xn)(Q.edgeSegDepth)(), cr(E)(te)(I((pn) => pn.depth)(Q.arrowData))();
            const Yn = Ea(), Qn = mn(o), ar = i6((pn) => {
              const ae = yA(pn)(Yn);
              return () => (ae(), vn(o)(v)());
            }), on = () => {
              const pn = Qn();
              return ar(pn)();
            }, xn = () => {
              const pn = d1(), ae = mn(r)();
              vn(r)(pn)();
              const Or = mn(h)(), Ao = mn($)(), lo = be(0.05)((pn - ae) / 1e3), ke = Ao ? lo * Or : 0, yr = mn(e)() + ke;
              vn(e)(yr)();
              const nr = xR(C._1)(), Ro = fR(), us = cn(1)(be(2)(Ro)), go = mn(i)(), hi = mn(s)(), fu = mn(c)(), jl = mn(l)(), Zl = mn(_)(), w$ = mn(u)(), lu = mn(d)(), gu = 0 + mn(g)(), _u = nr.width * us, as = nr.height * us, tg = { cx: 0, cy: 0, hw: Q.halfW, hh: Q.halfH }, N$ = (() => {
                const cs = Q.duration > 0 ? yr - Q.duration * Ue(yr / Q.duration) : 0, Fo = S6(Q)(cs), fs = h6(Q)(w$)(nr.width)(nr.height)(lo)(cs), ls = L6(Q)(cs), gs = T6(tg)(Q.dives)(cs), C$ = { centerX: gs.cx, centerY: gs.cy, camZ: gs.hh * 2, viewport: gs }, Nc = (() => {
                  if (fs.tag === "Nothing")
                    return C$;
                  if (fs.tag === "Just")
                    return fs._1.world;
                  f();
                })(), du = Nc.centerX + jl, Jc = Nc.centerY + Zl, _s = Nc.camZ * 1.18 * fu, b$ = du * le(lu), k$ = Jc * le(gu) - du * Ne(lu) * Ne(gu), Cc = _u / as, bc = P1(gs)(Cc) / P1(tg)(Cc), S$ = Q.ballRadius * bc, L$ = 11 * Q.scaleFactor * bc, ng = Q.unitHalfH * bc, eg = N6(Q.dives)(cs), rg = G6(ke)(hi)(Fo)(BR((() => {
                  const en = 0.5 * Cc * _s / cn(0.3)(le(lu)), og = 0.5 * _s / cn(0.3)(le(gu));
                  return { minX: du - en, maxX: du + en, minY: Jc - og, maxY: Jc + og, margin: 4 * _s / cn(1)(as) };
                })())(ng * 0.25)(I(f6)(ht((en) => en.depth >= eg - 0.5, Q.worldNodes)))(I((en) => I6(go)(L$)({
                  x: en.x,
                  y: en.y
                })(S$)(en.motionT)(en.labels))(Fo))), hu = I((en) => en._1)(rg), pu = Et(0, 40, wt(hu)((en) => en.glyphs)), E$ = I((en) => en._2)(rg), P$ = vn(m)({ resW: _u, resH: as });
                return () => (P$(), vn(s)(E$)(), vn(u)(fs.tag === "Just" ? T("Just", fs._1.camera) : v)(), vn(l)(jl)(), vn(_)(Zl)(), vn(a)(_s)(), pR(E)(C._1)(dn(Xe(_u)))(dn(Xe(as)))(), vR(E)(), _R(E)(B)(_u)(as)(), vr(E)(H)(yr)(), vr(E)(rt)(gu)(), vr(E)(mt)(_s)(), vr(E)(Ft)(b$)(), vr(E)(Lt)(k$)(), vr(E)(Qt)(lu)(), vr(E)(nn)(eg)(), ds(E)(q)(ls.nodeRect)(), cr(E)(A)(ls.nodeAlpha)(), ds(E)(X)(ls.edge)(), cr(E)(L)(ls.edgeAlpha)(), cr(E)(U)(ls.arrowAlpha)(), vr(E)(gt)(ng)(), _o(E)(ct)(Fo.length)(), hs(E)($t)(wt(Fo)((en) => [en.x, en.y]))(), cr(E)(At)(I((en) => en.glow)(Fo))(), hs(E)(Rt)(wt(Fo)((en) => [en.nx, en.ny]))(), ds(E)(G)(F6(Q)(Fo))(), _o(E)(xt)(hu.length)(), ds(E)(Gt)(wt(hu)((en) => [en.chip.cx, en.chip.cy, en.chip.hw, en.chip.hh]))(), hs(E)(vt)(wt(hu)((en) => [en.chip.dotX, en.chip.dotY]))(), _o(E)(Ct)(pu.length)(), ds(E)(_t)(wt(pu)((en) => [en.cx, en.cy, en.hw, en.hh]))(), cr(E)(yt)(I((en) => en.cell)(pu))(), cr(E)(ft)(I((en) => en.alpha)(pu))(), yR(E)());
              })();
              nr.width > 0 && N$();
              const J$ = e0(xn)(Yn)();
              return vn(o)(T("Just", J$))();
            }, Kl = vn(r), au = () => {
              const pn = d1();
              Kl(pn)();
              const ae = e0(xn)(Yn)();
              return vn(o)(T("Just", ae))();
            };
            au();
            const cu = QR((pn) => {
              const ae = mn(o);
              return () => {
                const Or = ae();
                if (pn)
                  return Or.tag === "Nothing" ? au() : void 0;
                if (!pn && Or.tag === "Just")
                  return on();
              };
            })(), Vl = c6(C._1)((pn) => (ae) => (Or) => {
              const Ao = mn(a);
              return () => {
                const lo = Ao(), ke = mn(m)();
                if (Or > 0.5) {
                  const nr = mn(c)();
                  return vn(c)(C1(0.3)(2.6)(nr * zi(1.01)(ae)))();
                }
                const di = mn(l)(), yr = mn(_)();
                return vn(l)(di + pn * lo / ke.resH)(), vn(_)(yr - ae * lo / ke.resH)();
              };
            })((pn) => (ae) => vn(p)(T("Just", { x: pn, y: ae })))((pn) => (ae) => (Or) => (Ao) => {
              const lo = mn(p);
              return () => {
                const ke = lo();
                if (ke.tag !== "Nothing") {
                  if (ke.tag === "Just") {
                    const di = ae - ke._1.y, yr = pn - ke._1.x;
                    vn(p)(T("Just", { x: pn, y: ae }))();
                    const nr = mn(a)(), Ro = mn(m)();
                    if (Or >= 1.5) {
                      const hi = mn(l)(), fu = mn(_)();
                      return vn(l)(hi - yr * nr / Ro.resH)(), vn(_)(fu + di * nr / Ro.resH)();
                    }
                    const us = mn(d)(), go = mn(g)();
                    return vn(d)(us + yr * 5e-3)(), vn(g)(C1(-0.8)(0.8)(go + di * 5e-3))();
                  }
                  f();
                }
              };
            })((pn) => (ae) => vn(p)(v))();
            return () => (on(), cu(), Vl());
          }
        }
        f();
      }
    ), s6(u6({
      style: { position: "absolute", inset: "0" },
      children: [a6({ ref: n, style: { position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" } })]
    }))();
  }
), D6 = /* @__PURE__ */ Po(B6), z6 = /* @__PURE__ */ Po(d$), H6 = /* @__PURE__ */ p$({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), Q6 = /* @__PURE__ */ p$({ eq: (t) => (n) => t._1 === n._1 && t._2 === n._2 }), Oe = /* @__PURE__ */ zr(si)(Ba), Ia = m$().pure, O6 = /* @__PURE__ */ Po(h$), W6 = {
  eq: (t) => (n) => (t.renderer === "CanvasRenderer" ? n.renderer === "CanvasRenderer" : t.renderer === "SvgRenderer" && n.renderer === "SvgRenderer") && t.showTitle === n.showTitle && (t.sizing.tag === "AutoSize" ? n.sizing.tag === "AutoSize" : t.sizing.tag === "FixedSize" && n.sizing.tag === "FixedSize" && t.sizing._1 === n.sizing._1 && t.sizing._2 === n.sizing._2) && t.source === n.source && (t.theme === "Light" ? n.theme === "Light" : t.theme === "Dark" ? n.theme === "Dark" : t.theme === "Blueprint" ? n.theme === "Blueprint" : t.theme === "Whiteboard" ? n.theme === "Whiteboard" : t.theme === "Isometric" && n.theme === "Isometric") && (t.transparency === "PaintBackground" ? n.transparency === "PaintBackground" : t.transparency === "TransparentBackground" && n.transparency === "TransparentBackground")
}, q6 = /* @__PURE__ */ Xl("svg")(), G1 = (t) => z6({
  className: "markgraf-player",
  style: { position: "relative", width: "100%", height: "100%" },
  children: [
    D6({
      source: t.src,
      speed: 1,
      playing: (() => {
        const n = kn(t.paused, v, Ht);
        if (n.tag === "Nothing")
          return !0;
        if (n.tag === "Just")
          return !n._1;
        f();
      })()
    })
  ]
}), T$ = (t) => (n) => {
  const e = kn(n.theme, v, Ht), r = (() => {
    if (e.tag === "Nothing")
      return "light";
    if (e.tag === "Just")
      return e._1;
    f();
  })(), o = kn(n.renderer, v, Ht), i = (() => {
    if (o.tag === "Nothing")
      return "canvas";
    if (o.tag === "Just")
      return o._1;
    f();
  })(), s = kn(n.paused, v, Ht), u = (() => {
    if (s.tag === "Nothing")
      return !1;
    if (s.tag === "Just")
      return s._1;
    f();
  })(), a = r === "light" ? T("Just", B_) : r === "dark" ? T("Just", Kk) : r === "blueprint" ? T("Just", Vk) : r === "whiteboard" ? T("Just", jk) : r === "isometric" ? T("Just", Zk) : v, c = i === "svg" ? T("Just", wA) : i === "canvas" ? T("Just", f1) : v, l = {
    source: t,
    renderer: (() => {
      if (c.tag === "Nothing")
        return f1;
      if (c.tag === "Just")
        return c._1;
      f();
    })(),
    sizing: (() => {
      const _ = kn(n.width, v, Ht);
      if (_.tag === "Just") {
        const d = kn(n.height, v, Ht);
        if (d.tag === "Just")
          return a$("FixedSize", _._1, d._1);
      }
      return TA;
    })(),
    theme: (() => {
      if (a.tag === "Nothing")
        return B_;
      if (a.tag === "Just")
        return a._1;
      f();
    })(),
    transparency: (() => {
      const _ = kn(n.transparent, v, Ht);
      if (_.tag === "Nothing")
        return !1;
      if (_.tag === "Just")
        return _._1;
      f();
    })() ? nS : tS,
    showTitle: (() => {
      const _ = kn(n.showTitle, v, Ht);
      if (_.tag === "Nothing")
        return !0;
      if (_.tag === "Just")
        return _._1;
      f();
    })()
  };
  return () => {
    const _ = ie(wi), d = w1((h, $) => b(h, $), v), g = d._1, p = w1((h, $) => b(h, $), { time: 0, keyframe: "", playing: !1 });
    H6(b(i, r))((() => {
      const h = ig("[markgraf] unknown renderer " + _f(i) + ", defaulting to canvas"), $ = (() => {
        if (c.tag === "Nothing")
          return !0;
        if (c.tag === "Just")
          return !1;
        f();
      })() ? h : () => {
      };
      return () => {
        $();
        const y = ig("[markgraf] unknown theme " + _f(r) + ", defaulting to light");
        return (() => {
          if (a.tag === "Nothing")
            return !0;
          if (a.tag === "Just")
            return !1;
          f();
        })() && y(), () => {
        };
      };
    })())();
    const m = mn(_);
    return ks(
      (h, $) => W6.eq(h)($),
      l,
      () => {
        const h = m(), $ = kn(h, v, Ht), y = (() => {
          if ($.tag === "Just")
            return mA(v, Ht, "Element", $._1);
          if ($.tag === "Nothing")
            return v;
          f();
        })();
        if (y.tag === "Nothing")
          return () => {
          };
        if (y.tag === "Just") {
          const x = OA(y._1)(l.source)(l.renderer)(l.sizing)(l.theme)(l.transparency)(l.showTitle)();
          if (x.tag === "Left")
            return z$("[markgraf] " + x._1)(), () => {
            };
          if (x.tag === "Right") {
            const J = x._1;
            d._2((C) => T("Just", J))();
            const N = J.subscribe((C) => p._2((k) => C))();
            return () => (N(), J.destroy(), d._2((C) => v)());
          }
        }
        f();
      }
    ), Q6(b(
      u,
      (() => {
        if (g.tag === "Nothing")
          return !1;
        if (g.tag === "Just")
          return !0;
        f();
      })()
    ))((() => {
      const h = Oe(($) => u ? $.pause : $.play)(g);
      return () => (h(), () => {
      });
    })())(), Ia({
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
      play: Oe((h) => h.play)(g),
      playWith: (h) => Oe(($) => $.playWith(h))(g),
      pause: Oe((h) => h.pause)(g),
      toggle: Oe((h) => h.toggle)(g),
      seek: (h) => Oe(($) => $.seek(h))(g),
      seekCue: (h) => Oe(($) => $.seekCue(h))(g),
      seekStep: (h) => Oe(($) => $.seekStep(h))(g),
      playToCue: (h) => ($) => Oe((y) => y.playToCue(h)($))(g),
      playToStep: (h) => ($) => Oe((y) => y.playToStep(h)($))(g),
      playNext: (h) => Oe(($) => $.playNext(h))(g),
      playPrevious: (h) => Oe(($) => $.playPrevious(h))(g),
      setSpeed: (h) => Oe(($) => $.setSpeed(h))(g),
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
          return g._1.subscribeCue((y) => {
            const x = $(y);
            return y.kind === "step" && y.name === h ? x : () => {
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
}, X6 = /* @__PURE__ */ Yl(
  "MarkgrafHeadlessPlayer",
  (t) => {
    const n = T$(t.src)({
      renderer: t.renderer,
      width: t.width,
      height: t.height,
      theme: t.theme,
      transparent: t.transparent,
      showTitle: t.showTitle,
      paused: t.paused
    })(), e = kn(t.renderer, v, Ht);
    return (() => {
      if (e.tag === "Nothing")
        return "canvas";
      if (e.tag === "Just")
        return e._1;
      f();
    })() === "svg" ? Ia(Po(q6)({ className: "markgraf-player", ref: n.elementRef }))() : Ia(O6({ className: "markgraf-player", ref: n.elementRef }))();
  }
), Y6 = /* @__PURE__ */ Yl(
  "MarkgrafPlayer",
  (t) => Ia((() => {
    const n = kn(t.renderer, v, Ht), e = (() => {
      if (n.tag === "Nothing")
        return "canvas";
      if (n.tag === "Just")
        return n._1;
      f();
    })();
    return e === "sdf" || e === "webgl" ? G1(t) : Po(X6)(t);
  })())()
), ps = (t) => t ?? null, M6 = (t) => {
  if (Object.prototype.toString.call(t) !== "[object Object]") return !1;
  const n = Object.getPrototypeOf(t);
  return n === Object.prototype || n === null;
}, U6 = (t) => t != null && (M6(t) || "direction" in t || "speed" in t || "duration" in t || "loop" in t || "stopAt" in t), lf = (t) => () => t(), gf = (t) => (n) => () => t(n), K6 = (t) => ({
  ...t,
  play: (n) => U6(n) ? t.playWith(n)() : t.play(),
  playWith: (n) => t.playWith(ps(n))(),
  pause: () => t.pause(),
  toggle: () => t.toggle(),
  seek: (n) => t.seek(n)(),
  seekCue: (n) => t.seekCue(n)(),
  seekStep: (n) => t.seekStep(n)(),
  playToCue: (n, e) => t.playToCue(n)(ps(e))(),
  playToStep: (n, e) => t.playToStep(n)(ps(e))(),
  playNext: (n) => t.playNext(ps(n))(),
  playPrevious: (n) => t.playPrevious(ps(n))(),
  setSpeed: (n) => t.setSpeed(n)(),
  onCueEnter: (n) => lf(t.onCueEnter(gf(n))()),
  onStepEnter: (n, e) => lf(t.onStepEnter(n)(gf(e))()),
  onComplete: (n) => lf(t.onComplete(gf(n))())
}), Z6 = (t, n) => K6(T$(t)(n ?? {})()), t4 = Y6;
export {
  t4 as MarkgrafPlayer,
  Z6 as useMarkgraf
};
